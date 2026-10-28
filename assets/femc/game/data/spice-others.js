/* The spice batch: Shinjiro, Jungwon, Jihoon and Minji (2026-10-24). Cuts away before anything graphic. Formats as in
   spice-akihiko.js. Each keeps to its own timeline:
     Shinjiro: in the dorm from 8/7 (a3-full-house), romance turn at rank 8 (8/31), the link closes 10/4. Nothing here
       plays after 10/2. The almosts play in 'almost'; the rest in 'almost' or 'dating', branching inside.
       sp-shin-counter (late, the 2 a.m. kitchen), sp-shin-coat (evening, his coat), sp-shin-hair (lunch, the stairwell).
     Jungwon: guesthouse (every night is a visit); romance turn at rank 8 (12/9); the first kiss is rank 10 (1/22), so his
       heat comes after it: sp-jw-council (evening, the council room after hours, rule one), sp-jw-ln-gate (late visit).
     Jihoon: guesthouse; romance turn rank 8 (11/21). sp-jh-backfire (puppy or dating, Game Panic), sp-jh-booth (dating,
       the photo booth by the escalators).
     Minji: guesthouse; romance turn rank 8 (11/26); after rank 9 (12/28) because her rank 9 has its own clip:
       sp-mj-ln-edit (late visit, the guesthouse after hours). */
(() => {
  const W = window, X = (W.FEMC_GAME_LINK_EXTRAS ||= {});
  const add = (id, list) => { (X[id] ||= {}).lateNights = [...((X[id] || {}).lateNights || []), ...list]; };
  const C = W.FEMC_GAME_CRUSH, P = C.phases;
  const S = ph => ({ shinjiro: ph }), J = ph => ({ jungwon: ph }), JH = ph => ({ jihoon: ph }), M = ph => ({ minji: ph });
  const HOUSE = ['a3-full-house'], AFTER = ['year-goes-on'];

  C.moments.push(
    /* ── Shinjiro: the 2 a.m. kitchen. She's on the counter; he steps between her knees for the shelf and doesn't step back. ── */
    { id: 'sp-shin-counter', who: 'shinjiro', crush: S(['almost', 'dating']), slot: 'late', when: 'quiet', after: '8/22', until: '10/2', events: HOUSE,
      place: 'Iwatodai Dorm · Kitchen', time: 'Night · 2 AM', bg: 'iwatodaidorm-kitchen', scene: [
        { n: "Two in the morning and the kitchen was the only lit room in the building, one bulb over the stove, and he was at the stove with his back to her doing something slow to an onion, and she was sitting up on the counter by the fridge with her heels knocking the cupboard door, because there was nowhere else to sit and because he'd said *don't sit on the counter* when she came in, which had made it the only place she wanted to be." },
        { s: 'shinjiro', f: 'neutral', t: "You're going to knock the door off its hinge doing that." },
        { s: 'solar', f: 'happy', t: "Doing what?" },
        { s: 'shinjiro', f: 'neutral', t: "...Kicking it. With your feet. Like a kid on a pier." },
        { n: "She stopped kicking it. She started again, slower, out of spite, and he made a sound in his chest that wasn't quite a laugh and turned the heat down and wiped his hands on the towel over his shoulder and came over to her, because the good salt was on the shelf above her head, the high one, the one only he could reach." },
        { n: "He didn't ask her to move. He stepped in. Between her knees, his hips against the edge of the counter, close, his sleeve brushing her arm as he reached past her head for the shelf, and she was suddenly level with his throat, and could see the pulse going in it, and smell him, onions and smoke and cold air and the clean soap he must have used about a thousand years ago that morning." },
        { n: "He got the salt down. He had it in his hand." },
        { n: "He didn't step back." },
        { n: "He stood there between her knees with the salt in one hand and the other flat on the counter beside her hip, and he looked at her, from about four inches away, the way he looked at the soup when it was close, the look that wasn't hurried and wasn't sure and was going to wait until it was, and she stopped breathing, and her heels stopped knocking, and the onions hissed on the stove behind him and he didn't turn round." },
        { ifCrush: S('dating'), then: [
          { s: 'shinjiro', f: 'neutral', t: "...You're in the way." },
          { s: 'solar', f: 'neutral', t: "You put yourself here." },
          { s: 'shinjiro', f: 'neutral', t: "Yeah. I know I did." },
          { choose: [
            { t: "(Hook your ankles behind his knees. Keep him there.)", then: [
              { n: "She hooked her ankles behind his knees. Not hard. Just there. He looked down, slowly, at her feet locked behind him, and back up at her, and something in his face that was always clenched let go all at once, and he put the salt down on the counter beside her without looking where it went and put his hand on the side of her face, his big scarred hand, all of it, so it covered her cheek and her ear and the side of her jaw, and kissed her, slow, like it was the thing on the stove and he'd been watching it all night for exactly the moment it changed." },
              { n: "Behind him the onions caught. She smelled it before he did. He didn't stop. She had to put her hand flat on his chest and push him back an inch and say *Shinjiro, the pan*, against his mouth, and he swore, low and heartfelt, and went to the stove with his ears red and the back of his neck red and turned the heat off and stood there with his back to her, both hands on the rail of the stove, breathing." },
              { s: 'shinjiro', f: 'neutral', t: "...First pan I've burnt since I was eleven. That's on you." },
              { s: 'solar', f: 'happy', t: "Make another one." },
              { s: 'shinjiro', f: 'happy', t: "Get off the counter, then." },
              { n: "She didn't get off the counter. He made another one anyway, with her feet hooked round his waist from behind for some of it, which was a serious obstacle to cooking, he said, and didn't move away." }
            ] },
            { t: "(Take the salt out of his hand. Season the pot yourself, over his shoulder.)", then: [
              { n: "She took the salt out of his hand and leaned round him, which put her mouth very near his ear, and shook it into the pot over his shoulder, and he turned his head and his cheek touched hers, rough with stubble, and stayed there, and he said *too much* into her hair, very low, and she said *liar*, and he laughed, the real one, the rare one, and turned his face the last half inch, and kissed her at the corner of her mouth, like a man tasting something to see if it needed anything, and it didn't." }
            ] }
          ] }
        ], else: [
          { n: "One breath. Two. Her knees either side of him, his hand by her hip, and neither of them moving, and the whole kitchen holding still around them like the moment just before a pot boils, when the water stops making any sound at all." },
          { s: 'shinjiro', f: 'neutral', t: "...You're in the way." },
          { n: "He said it so quietly. He still didn't move. And then he did; he stepped back, one step, and turned round to the stove and put the salt in the pot without measuring it, which he never did, and stood there with his back to her and his head down and didn't say anything for a long time." },
          { choose: [
            { t: "(Stay on the counter. Don't make it a thing.)", crush: { shinjiro: 1 }, then: [
              { n: "She stayed on the counter. She didn't make it a thing. He finished the soup in silence and ladled out two bowls and put one in her hands without a word and leaned against the counter beside her, close, his shoulder against her knee, and they ate it like that at two in the morning, not talking, and she could feel his shoulder through the cotton the whole time, warm, there, not going anywhere." }
            ] },
            { t: "You used too much salt.", crush: { shinjiro: 2 }, then: [
              { s: 'shinjiro', f: 'neutral', t: "I know I did." },
              { s: 'shinjiro', f: 'neutral', t: "...Your fault. Get off the counter before I do something else stupid." },
              { n: "She didn't get off the counter. He didn't make her. He stood at the stove with his back to her and his ears red, and she sat behind him swinging her heels, slowly, against the cupboard door, and every time they knocked she saw his shoulders move, like a man trying very hard not to laugh, or not to turn round, or both." }
            ] }
          ] }
        ] }
      ] },

    /* ── Shinjiro: she's wearing his coat and won't give it back. ── */
    { id: 'sp-shin-coat', who: 'shinjiro', crush: S(['puppy', 'almost', 'dating']), slot: 'evening', after: '8/24', until: '10/2', events: HOUSE, weather: ['rain'],
      place: 'Port Island Station · Back Alley', time: 'Evening', bg: 'outside-nightdistrict', scene: [
        { n: "It came on to rain while they were at the alley, the hard sideways rain of late summer that the typhoons pushed in off the bay, and the cat went back under its crate in disgust, and he took his coat off before she'd even felt cold and put it round her shoulders without a word, the way you'd put a lid on a pot." },
        { n: "It came down past her knees. It was heavy, and warm from him all the way through, and it smelled of smoke and cooking and rain and him, and the sleeves came down past her fingertips, and she stood in it in the alley in the rain and felt it go into her like a hot drink." },
        { s: 'shinjiro', f: 'neutral', t: "Don't look at me like that. You'd have caught something. Then I'd have had to make you soup. That's more work than a coat." },
        { n: "They walked back to the station in the rain, him in his T-shirt getting soaked and not seeming to notice, her in his coat with the collar turned up, and on the monorail she kept it on, and on the walk from Iwatodai she kept it on, and at the dorm door he held out his hand for it." },
        { s: 'shinjiro', f: 'neutral', t: "Give." },
        { s: 'solar', f: 'neutral', t: "No." },
        { s: 'shinjiro', f: 'surprised', t: "...No?" },
        { s: 'solar', f: 'happy', t: "It's mine now. That's how coats work. You put it on me. Possession." },
        { n: "He looked at her, standing in the doorway of the dorm in his coat with the rain dripping off the hem and her chin up, for a long moment, with the face of a man who'd been in a lot of fights in alleys and was about to lose one in a doorway, and Junpei, on the sofa, looked up from his magazine and down again so fast he nearly snapped his neck." },
        { ifCrush: S('dating'), then: [
          { n: "He stepped in. Took the lapels of the coat in both hands, as if to take it off her. Didn't. He held them, and pulled, slowly, and she came with the coat, into him, wet and warm, and he bent his head and kissed her in the doorway with the rain coming in round them and the lapels of his coat in his fists, and Junpei on the sofa made a noise like a balloon being let go of and put the magazine over his face." },
          { s: 'shinjiro', f: 'neutral', t: "...Keep it, then. It looks better on you. Don't tell anybody I said that." },
          { s: 'solar', f: 'happy', t: "Junpei heard you." },
          { s: 'shinjiro', f: 'neutral', t: "Iori didn't hear anything. Did you, Iori." },
          { s: 'junpei', f: 'flustered', t: "I'm a magazine. I'm a magazine on a sofa. I don't have ears." }
        ], else: [
          { s: 'shinjiro', f: 'neutral', t: "...Keep it till tomorrow, then. Hang it up. Don't leave it on the floor like Aki leaves things." },
          { n: "She wore it through dinner. She wore it in the lounge with the sleeves pushed up. She wore it upstairs and hung it on the back of her door, and lay in bed looking at it in the dark, a long shape like someone standing there, and at some point after midnight she got up and put it back on and went to sleep in it, and in the morning it was gone off her shoulders and folded on the end of her bed with her blanket pulled up over her, and she had not heard her door at all." },
          { n: "There was a note in the coat pocket. Blunt slanting pencil, on the back of a receipt. *Hung it up for you. You don't know how to hang a coat.* She didn't give the coat back for a week. He didn't ask again." }
        ] }
      ] },

    /* ── Shinjiro: mid-sentence, he pushes her hair out of her face. Then acts like he didn't. ── */
    { id: 'sp-shin-hair', who: 'shinjiro', crush: S(['almost', 'dating']), slot: 'lunch', schoolOnly: true, after: '9/1', until: '10/2', events: HOUSE,
      place: 'Gekkoukan High · 2F Hallway', time: 'Lunch', bg: 'school-hallwaysecondfloor', scene: [
        { n: "He came to school some days in September, the days he could stand it, and on those days he ate lunch on the back stairwell where nobody went, three steps up, with a bento he'd made himself, and she'd started eating hers two steps down, and he'd stopped pretending to be annoyed about it around the second week." },
        { n: "Today she was telling him about Junpei's history essay, which was about a war that hadn't happened, and the wind from the open stairwell window kept blowing her hair across her face, and she kept pushing it back, and it kept coming back, and she was in the middle of the bit about the cavalry when he reached down, mid-sentence, hers, and hooked it out of her eyes with one finger and tucked it behind her ear." },
        { n: "His knuckle brushed her cheek. His finger stayed a second too long behind her ear. Then he took his hand back and picked up his chopsticks and ate a piece of rolled omelette and looked out of the window at the courtyard like a man who has never in his life touched anybody's hair." },
        { s: 'solar', f: 'surprised', t: "...You just—" },
        { s: 'shinjiro', f: 'neutral', t: "What." },
        { s: 'solar', f: 'neutral', t: "My hair." },
        { s: 'shinjiro', f: 'neutral', t: "Don't know what you're talking about. Finish your thing about the horses." },
        { n: "He said it to the window. The back of his neck had gone red under his beanie, all the way to the collar." },
        { choose: [
          { t: "(Finish the thing about the horses. Let him have it.)", crush: { shinjiro: 1 }, then: [
            { n: "She finished the thing about the horses. Her face was on fire the whole time and her voice was perfectly normal and he listened to every word of it looking out of the window, and when the wind came again and blew her hair back across her face she left it there, on purpose, and waited, and he looked at it, and at her, and very slowly reached down and did it again, and this time didn't pretend." }
          ] },
          { t: "(Pull your hair back out from behind your ear. Look at him.)", crush: { shinjiro: 2 }, then: [
            { n: "She pulled it back out from behind her ear. It fell across her face. She looked at him through it." },
            { s: 'shinjiro', f: 'neutral', t: "...Brat." },
            { ifCrush: S('dating'), then: [
              { n: "He leaned down off his step and moved her hair out of the way with his whole hand this time, his palm against her cheek, and kept it there, and kissed her on the back stairs of Gekkoukan High at twelve-forty on a Tuesday with a first-year's footsteps going past the bottom of the stairwell and not stopping, and tasted of rolled omelette, and didn't care who heard." }
            ], else: [
              { n: "He tucked it back. Slower this time. And left his hand there, by her ear, his knuckles against her jaw, for one long second, looking at her, and then took it back and put it in his coat pocket and kept it there for the rest of lunch, like a thing he wasn't sure he should be trusted with." }
            ] }
          ] }
        ] }
      ] },

    /* ── Jungwon: the council room after hours. Rule one, under strain. Proper until he isn't. ── */
    { id: 'sp-jw-council', who: 'jungwon', crush: J('dating'), slot: 'evening', flags: AFTER, ranks: { jungwon: 10 }, after: '1/24', until: '3/3',
      place: 'Gekkoukan High · Student Council Room', time: 'Evening', bg: 'gekkoukan-student-council', scene: [
        { n: "Seven in the evening and the council room was the only lit window on the second floor. Mitsuru had gone home at five. The caretaker had come by at six and looked in and seen Yang-san at the long table with his red pen and three binders, and Solar opposite him with her chin on her hand, and said *lock up when you go* to Jungwon, as if he'd always had a key, which he hadn't, and which he now somehow did." },
        { n: "He'd been working. Properly. Minutes for a meeting that hadn't happened yet. He did that when he was nervous; he wrote down what everyone was going to say. And she'd been watching him do it, and he'd known, and his handwriting had got smaller and smaller and neater and neater until it was practically a line of ants." },
        { s: 'jungwon', f: 'neutral', t: "You're looking at me." },
        { s: 'solar', f: 'neutral', t: "I'm looking at your tie." },
        { s: 'jungwon', f: 'flustered', t: "...My tie is correctly tied." },
        { s: 'solar', f: 'neutral', t: "It's very correctly tied." },
        { n: "He put the pen down. He capped it first. He squared the binders. Then he stood up and came round the long table, not quickly, the way he did everything, with his hands at his sides, and stopped in front of her chair, and looked down at her, and something in his face that was always held very carefully level began, slowly, to tilt." },
        { s: 'jungwon', f: 'serious', t: "There's a rule. I made it. When I got here. Rule one. I made everybody promise. Sunoo, Jihoon, all of them." },
        { ifEvent: 'a5-call-hoax', then: [
          { s: 'jungwon', f: 'serious', t: "Nobody told you what we were. At home. Jihoon broke that half, on the phone, in December. I've kept the rest. Nobody tells you what it was *like*. It has to come back on its own or it doesn't count." }
        ], else: [
          { s: 'jungwon', f: 'serious', t: "Nobody tells you what we were. At home. Nobody puts it in your hands before you can pick it up yourself. It has to be yours. It has to come back on its own or it doesn't count." }
        ] },
        { ifHeading: 'H', then: [
          { s: 'jungwon', f: 'sad', t: "And I'm standing here, and there's a room like this at home with a poster in it with your face on it, and you used to sit on that table. That one. Right there. With your feet on the chair. And I'd tell you to get down, and you wouldn't. And there's a study room down the hall with a lock on it that I've never once reported." },
          { s: 'jungwon', f: 'flustered', t: "I've just broken rule one. I've broken it very badly. I'm going to file a report against myself." }
        ], else: [{ ifHeading: 'S', then: [
          { s: 'jungwon', f: 'sad', t: "And there's a house by the sea in the other place where I learned to stand at doors. Very properly. Until you opened one. I'm not allowed to tell you which." },
          { s: 'jungwon', f: 'flustered', t: "I've just told you that. That's rule one. I've broken it." }
        ], else: [
          { s: 'jungwon', f: 'sad', t: "And it's very hard. Tonight. It's very hard tonight. I keep wanting to say *you used to*. You used to do this. You used to look at my tie exactly like that." },
          { s: 'jungwon', f: 'flustered', t: "That was rule one. I've broken it. I'm going to need a minute." }
        ] }] },
        { n: "He didn't take a minute. He reached up, with one hand, and hooked a finger in the knot of his own tie, and pulled it loose. Just that. Just an inch. The most improper thing she'd ever seen him do, in any room, in any world, and he did it looking straight at her, and his face had gone completely still, the stillness she'd learned to read backward, and she knew exactly what it meant." },
        { s: 'jungwon', f: 'neutral', t: "May I?" },
        { s: 'solar', f: 'neutral', t: "May you what?" },
        { s: 'jungwon', f: 'serious', t: "Kiss you. Properly. Not like on the roof. Not like a man who's been told he has to be careful with something he'll break. I'd like to stop being careful for about ten minutes. I'd like your permission to do that." },
        { choose: [
          { t: "(Stand up. Take his loosened tie in your hand. Pull.)", then: [
            { n: "She stood up. The chair went back. She took the loose end of his tie in her fist and pulled, and he came, he came at once, and his hands went to her waist and lifted her, actually lifted her, up and back onto the edge of the long council table, and the binders went over, all three of them, and the red pen rolled off the edge and he didn't even look, and he kissed her like a man who'd been very polite for a very long time and had decided, carefully, formally, with permission, to stop." },
            { n: "It wasn't polite. Nothing about it was polite. His hand at the back of her neck. Hers in his hair, which was always so neat, wrecking it. Her knees either side of him at the table's edge, and his tie in her fist, and the minutes for a meeting that hadn't happened yet sliding off the table onto the floor in a white drift, and his breath coming hard and his voice against her jaw saying her name, all of it, every syllable, as if each one were something he'd carried a very long way and was finally setting down." }
          ] },
          { t: "You may. Won.", then: [
            { n: "The name went into him like a key. He shut his eyes. And then he stepped between her knees where she sat and took her face in both hands, very carefully, the last careful thing he'd do all evening, and kissed her, and the care went out of it about three seconds in, all at once, as if he'd been holding a door shut with his whole weight and had simply stepped away from it, and the door had come open, and everything behind it had come through." },
            { n: "Her chair went over backward. He didn't notice. He had her up against the long table with his hands on either side of her, braced on the wood, his tie hanging loose between them, and he kissed her like he was the one who'd lost his memory and was getting it all back at once." }
          ] }
        ] },
        { n: "The caretaker's radio, down the corridor. A crackle and a voice. Footsteps." },
        { n: "He stopped. He stepped back. He put her chair upright, and picked up the three binders and squared them, and picked up the red pen, and capped it, and retied his tie in the window's reflection, perfectly, in eleven seconds, a man who had done this in a hurry in a council room before in some other life, and when the caretaker put his head round the door Yang Jungwon was sitting at the table writing the minutes with his hair only very slightly wrong and his face the color of a stop sign." },
        { s: 'jungwon', f: 'neutral', t: "Good evening. We're just finishing. I'll lock up." },
        { n: "The caretaker looked at the scattered papers on the floor. At Solar, by the window, with her back to the room, fixing her collar. At the president of nothing at all in this school, writing very fast." },
        { n: "The caretaker said *mm* and went away. Jungwon put his pen down and his face in his hands and stayed like that, and his shoulders shook, and she couldn't tell if he was laughing until he looked up, and he was, helplessly, the dimples, both of them, the ones he only showed when he was being polite, except he wasn't being polite at all." },
        { s: 'jungwon', f: 'happy', t: "Item one. I'd like it minuted that that was worth it." }
      ] },

    /* ── Jihoon: cocky flirting, and it backfires when she flirts back harder. ── */
    { id: 'sp-jh-backfire', who: 'jihoon', crush: JH(['puppy', 'dating']), slot: 'after', after: '10/19', until: '12/20',
      place: 'Paulownia Mall · Game Panic', time: 'After School', bg: 'gamepanic-inside', scene: [
        { n: "Game Panic, the dance machine, and he'd just got a full combo on the hardest song on it, and he was standing on the pad with his hands on his hips and his chest going and a small crowd of middle-schoolers looking at him like he'd landed a plane, and he turned round and looked at her over the rail with the face of a man about to be insufferable." },
        { s: 'jihoon', f: 'happy', t: "Sol. Did you see that. Did you see the almighty Hoon. That was hot. Be honest. On a scale of one to a powerful figure like myself, how hot was that." },
        { s: 'jihoon', f: 'happy-2', t: "Don't answer. I know. It's fine. It's a lot. You don't have to say anything. Just look at me the way you're looking at me and I'll take it as a ten." },
        { n: "He leaned on the rail. He did the thing with his eyebrows. He'd been doing the thing with his eyebrows at her since preschool, somewhere, she could feel it, and every time she'd rolled her eyes and walked off and every time he'd won, and he was waiting for her to roll her eyes and walk off now." },
        { n: "She didn't. She came round the rail. She stepped up onto the pad with him, which put her very close, closer than the pad was meant for, and put her hand flat on his chest, which was going like a hummingbird under his T-shirt, and looked up at him, slowly, the whole way up, the way you'd look at a dessert menu." },
        { s: 'solar', f: 'neutral', t: "Eleven." },
        { s: 'jihoon', f: 'surprised', t: "..." },
        { s: 'solar', f: 'neutral', t: "Your shirt's stuck to your back. Your hair's doing the thing. Your hands were shaking on the last bit and you held it anyway. Eleven. I'd give you twelve but you'd never shut up about it." },
        { n: "Park Jihoon, who had never once in any life been lost for words, went completely silent. Four seconds. She counted. His face went red from the neck up in a solid line like a thermometer, and his mouth opened, and nothing came out of it, and the middle-schoolers looked from him to her and back with total, delighted horror, and one of them said *oh* like he'd seen a car crash." },
        { s: 'jihoon', f: 'surprised', t: "...You can't. You can't just. That's MY bit. You can't do my bit at me. Back at me. Harder. In public—" },
        { ifCrush: JH('dating'), then: [
          { choose: [
            { t: "(Kiss him. On the dance pad. Let the song start without you.)", then: [
              { n: "She kissed him on the dance pad. He made a noise against her mouth like a kettle going and grabbed her by the elbows like he might fall over, and the machine, which had been waiting for somebody to pick a song, picked one by itself, loud, and started flashing arrows at their feet, and neither of them hit a single one, and the score at the end said E, and he looked at it over her shoulder and said *worth it* in a voice she'd never heard him use, and then *that's going in the archive*, in the normal one." }
            ] },
            { t: "(Step off the pad. Walk away. Make him follow.)", then: [
              { n: "She stepped off the pad and walked away toward the crane games without looking back, and behind her she heard him say *wait* and *Sol* and *SOL* and *that's not FAIR*, and the pad beeping as he stumbled off it, and his trainers on the carpet, running, and at the crane games he caught her hand and spun her round and kissed her against the glass of a machine full of plush dogs, and one of them, she was almost sure, dropped." }
            ] }
          ] }
        ], else: [
          { n: "She stepped off the pad and patted his chest, twice, like you'd pat a horse, and went to buy them both a drink, and when she came back he was sitting on the edge of the pad with his head in his hands and the middle-schoolers had gone, and he took the can without looking up and said, into his own knees, *I'm going to be thinking about that until I die, Kim Solar, I hope you're happy*, and she was." }
        ] }
      ] },

    /* ── Jihoon: the photo booth. They stop posing for the last shot. ── */
    { id: 'sp-jh-booth', who: 'jihoon', crush: JH('dating'), slot: 'after', after: '11/23', until: '2/26',
      place: 'Paulownia Mall · Photo Booth', time: 'After School', bg: 'inside-mall', scene: [
        { n: "The photo booth by the escalators, pink inside, the robot voice, the smell of hot plastic and somebody else's perfume. He pulled her in by the strap of her bag the way he pulled her into everything and put four coins in and said *for the archive* and *pose one: look like you respect me*, the way he always did, every time, as if it were a prayer." },
        { n: "Three, two, one, flash. Peace signs. Flash. He got her in a headlock. Flash. She put her fingers up behind his head like horns. Flash. By the fourth one they were both laughing so hard the robot had started to sound concerned." },
        { s: 'jihoon', f: 'happy', t: "Last one. Last one, Sol. Do something cool. Do something that'll make everybody at home jealous. Do something worthy of a man of my standing—" },
        { n: "Three. He turned to tell her what to do. She'd turned to tell him to shut up. Their faces were very close, in the pink light, in the tiny booth, her knee against his, his arm still round her shoulders from the headlock." },
        { n: "Two. Neither of them said anything. He stopped grinning. She watched it go, the bit, the whole performance, the thing he did with his face to keep it from doing anything else, she watched it slide off him like water off a window, and what was under it was just Jihoon, looking at her, the way he'd looked at her in a last frame once, in some other booth, across some other street." },
        { n: "One." },
        { n: "He kissed her. Or she kissed him. Later neither of them could agree, and they had the argument often, and loudly, and in front of other people, and both of them always lost. Flash. The robot said *great shot!* in its dog-whistle voice. Neither of them heard it. The light went, and came back, and they were still kissing, his hand on the side of her face, her fingers in the front of his jacket, in the pink plastic dark, for a long time after there was anything left to photograph." },
        { n: "The strip came out of the slot warm. Five frames. Four of them were a disaster. The fifth was two people with their eyes shut, not posing for anybody, slightly blurred, like the camera had looked away out of politeness." },
        { s: 'jihoon', f: 'neutral', t: "...That one's mine." },
        { s: 'solar', f: 'neutral', t: "We'll tear it." },
        { s: 'jihoon', f: 'serious', t: "We're not tearing it. I'm not tearing that one. That one's going in my phone case behind the phone where nobody can see it but me. Don't argue. I'll do a bit about it if you argue. I'll do a whole bit." },
        { n: "He didn't do a bit. He put the strip in his phone case, carefully, the fifth frame against the back of the phone, and put his phone in his pocket, and his hand over his pocket, and walked her down the escalator with his other hand in hers, saying nothing, all the way to the station, which for Park Jihoon was a kind of speech." }
      ] }
  );

  add('jungwon', [
    { id: 'sp-jw-ln-gate', kind: 'visit', rank: 10, route: 'romance', flag: 'year-goes-on', after: '1/25', until: '3/2', when: 'quiet', place: 'Iwatodai Dorm · Front', bg: 'iwotodaidorm-outside', time: 'Night · 11 PM', music: 'romance', scene: [
      { n: "Curfew had been eleven. It was four minutes past. He was standing at the bottom of the dorm steps under the streetlight in his coat, and she was standing on the bottom step in hers, which made them the same height, which he had worked out the first week and had used, since, with real strategic intent." },
      { s: 'jungwon', f: 'neutral', t: "I'm making you break curfew. I'm aware. I've timed it. It's four minutes. I'll take full responsibility in writing." },
      { n: "He opened his coat. He did it formally, both sides, like a man opening a door for someone, and held it open, and waited, because he always waited for her to decide how close, and she stepped in, off the step, into the warm, and he closed it round her and held the edges together behind her back with both hands, and the streetlight buzzed, and her face was in the side of his neck, where he smelled of nothing at all, the strangest thing about him, and now the thing she liked best." },
      { s: 'jungwon', f: 'neutral', t: "May I?" },
      { s: 'solar', f: 'happy', t: "You asked last time too." },
      { s: 'jungwon', f: 'serious', t: "I'll always ask. I want you to always have said yes." },
      { choose: [
        { t: "Yes.", notes: 2, then: [
          { n: "He kissed her under the streetlight with his coat round them both and his hands at the small of her back holding it shut, slow, and then not slow, his mouth at the corner of hers and then her jaw and then, very carefully, asking without asking, the side of her throat below her ear, once, and she made a sound she'd never made in front of him, and felt him smile against her skin, and then stop smiling, and pull her in harder." }
        ] },
        { t: "(Don't answer. Kiss him first. See what happens to his face.)", notes: 2, then: [
          { n: "She didn't answer. She kissed him first. He went completely still with surprise for one second, the stillness that meant he was pleased, and then not still at all, his hands coming up inside the coat to her waist, pulling, and she felt the dimples arrive against her mouth, both of them, and laughed into it, and he said *that's not a yes, that's an ambush*, and kissed her again before she could argue." }
        ] }
      ] },
      { n: "On the fourth floor a window opened. Mitsuru's voice, into the night, perfectly level." },
      { s: 'mitsuru', f: 'neutral', t: "Yang-san. It's eleven-oh-nine." },
      { s: 'jungwon', f: 'flustered', t: "Yes. I'm so sorry. I'll put it in writing. Goodnight, Kirijo-san. Goodnight, Solar." },
      { n: "He bowed to the fourth floor with his coat still open, and to her, and fled, very properly, down the road at a walk that was nearly a run, and at the corner he turned round and bowed again, and walked into the mailbox, and said *I'm fine* to the mailbox, and she heard Mitsuru's window close, and was almost sure she'd heard Mitsuru laugh first." }
    ] }
  ]);

  add('minji', [
    { id: 'sp-mj-ln-edit', kind: 'visit', rank: 9, route: 'romance', flag: 'year-goes-on', after: '12/29', until: '2/27', when: 'quiet', place: 'Kirijo Guesthouse', bg: 'kirijo-guesthouse-night', time: 'Night · 11 PM', music: 'tender', scene: [
      { n: "The guesthouse at night was a different building. The lobby went dim at ten, the desk lady went home, and the only light on the second floor was Minji's, in the window seat at the end of the corridor, where she edited because it was the only place her laptop didn't make the radiator knock." },
      { n: "They'd been editing for two hours. Or Minji had. Solar had been sitting beside her in the window seat with her legs tucked up, shoulder to shoulder, the laptop balanced on both their knees, watching the timeline go by in colored blocks, the whole year chopped into seconds: the riverside lamp, the seawall, Koromaru at a dead run, Junpei falling off a bench, and Solar, over and over, laughing, not knowing, turning her head." },
      { s: 'minji', f: 'neutral', t: "This one. Watch. You do this thing with your mouth right before you say something mean. Every time. It's a tell. I've got forty of them." },
      { s: 'solar', f: 'flustered', t: "You've been cataloguing my mean faces." },
      { s: 'minji', f: 'happy', t: "I've been cataloguing all your faces. The mean ones are just the funniest. :]" },
      { n: "Their shoulders had been touching for two hours. It was the warmest point in the building. Neither of them had moved, and neither of them had said anything about not moving, and Minji's hand on the trackpad kept going still in the middle of a cut and then remembering itself." },
      { n: "Minji stopped the timeline. She looked at Solar sideways, in the laptop light, which was blue and soft and made her look like someone in a film about somebody else." },
      { s: 'minji', f: 'flustered', t: "Can I film you? Now. Like this. With the screen on your face. You can say no. You can always say no." },
      { s: 'solar', f: 'neutral', t: "That's the twentieth time you've asked me something tonight." },
      { s: 'minji', f: 'serious', t: "Twenty-first. I'm counting too. I'm always going to count." },
      { n: "Solar said yes. Minji picked up the little camera from the cushion and turned it on and held it up, close, the red light on, and filmed her in the laptop glow, slowly, her face, her mouth, her hand on her own knee, the way you'd film the light on water when it was doing something you'd never see again, and Solar watched her film, and the red light, and Minji's eye behind it, very steady, and then not steady." },
      { choose: [
        { t: "(Take the camera from her hands. Turn it round. Kiss her in frame.)", notes: 2, then: [
          { n: "She took the camera out of Minji's hands. Gently. Minji let her. She turned it round so the lens looked at both of them, the red light glowing, the little screen showing two faces squeezed into one frame in the blue dark, and then she kissed her, on camera, in the window seat, and Minji made a small surprised sound and then her hands came up to Solar's face, cold from the window, and held on, and kissed her back like checking focus, and then like nothing to do with focus at all." }
        ] },
        { t: "(Lean in. Slowly. Let her keep filming.)", notes: 2, then: [
          { n: "She leaned in, slowly, toward the lens, toward the red light, and Minji kept filming, her hands only shaking a little, until Solar was so close the camera couldn't focus, and then past it, and Minji lowered the camera an inch, still running, pointed at the window now, at their reflection in it, and kissed her, and the camera on the cushion filmed the two of them in the black glass over the station lights, a little blurry, a little sideways, for a long time." }
        ] }
      ] },
      { n: "The camera was still running when they stopped. Minji picked it up and looked at the screen and laughed, breathless, and turned it off, and the red light went out." },
      { s: 'minji', f: 'flustered', t: "That's going in the folder." },
      { s: 'solar', f: 'neutral', t: "What folder?" },
      { s: 'minji', f: 'neutral', t: "The one I don't edit. The one I don't show anyone. The one I'm never deleting, Sol. Not even if you ask. Okay, if you ask. But only if you ask twice." },
      { n: "It was eleven-fifty. Curfew had been eleven. She ran the whole way back from the station and went in through the dorm's kitchen door, which Shinjiro had shown her once had a latch that never quite caught, and on the sofa in the dark Junpei, who was not asleep, said *nice* very quietly to the ceiling, and she threw a cushion at him on the way past and didn't stop." }
    ] }
  ]);

  /* ── Texts, late: spicier now. ── */
  const T = W.FEMC_GAME_TEXTS;
  if (T) {
    const sh = t => ({ from: 'shinjiro', t }), jw = t => ({ from: 'jungwon', t }), jh = t => ({ from: 'jihoon', t }), mj = t => ({ from: 'minji', t });
    (T.ambient ||= []).push(
      { id: 'sp-tx-shin-kitchen', thread: 'shinjiro', from: '8/24', to: '10/2', slot: 'late', crush: S(['almost', 'dating']), msgs: [
        sh('kitchen'), sh("don't sit on the counter"), sh('...sit on the counter')
      ], reply: [
        { t: 'coming', then: [sh('socks. the stairs')] },
        { t: "thought u said don't", then: [sh('changed my mind'), sh("don't make it a thing")] }
      ] },
      { id: 'sp-tx-jw-curfew', thread: 'jungwon', from: '1/25', to: '3/1', slot: 'late', flag: 'arrived-jungwon', crush: J('dating'), msgs: [
        jw("i'm at the bottom of your steps."), jw("it's 10:56. i'm aware of the time."), jw('i would like four minutes. i will put them in writing.')
      ], reply: [
        { t: 'make it ten', then: [jw('...'), jw("that's six over."), jw("i'll put those in writing too. coming.")] },
        { t: 'coming down', then: [jw('thank you.'), jw('wear a coat. no, wear mine. i brought it open.')] }
      ] },
      { id: 'sp-tx-jh-eleven', thread: 'jihoon', from: '10/20', to: '12/18', slot: 'late', flag: 'arrived-jihoon', crush: JH(['puppy', 'dating']), msgs: [
        jh('Eleven'), jh('u said Eleven'), jh('i have not slept. i am a Changed Man. #brocken')
      ], reply: [
        { t: 'twelve if u go to sleep', then: [jh('...'), jh('GOING. gone. asleep. Twelve')] },
        { t: 'it was a nine', then: [jh('LIAR'), jh('i saw ur face. u had the dessert menu face'), jh('goodnight Skank')] }
      ] },
      { id: 'sp-tx-mj-folder', thread: 'minji', from: '1/2', to: '2/26', slot: 'late', flag: 'arrived-minji', crush: M('dating'), msgs: [
        mj('watched it again'), mj('the window seat one'), mj("u look at the lens right before. like ur daring it ;]")
      ], reply: [
        { t: 'i was daring it', then: [mj('i know'), mj('it lost :]')] },
        { t: 'delete it', then: [mj('ask twice'), mj('...'), mj("ur not going to ask twice. goodnight sol (:")] }
      ] }
    );
  }

  /* ── The world notices (dating, no day-after gate). ── */
  const add2 = C.add;
  add2('evening.sub', [
    { t: "Shinjiro's coat is hanging on the back of a dining chair that isn't his. It's the one you sit in. What now?", crush: S('dating'), months: [9] },
    { t: "There's a pressed handkerchief on the hall table with your name on a slip of paper under it, in very small, very neat writing. It just says: for the cold. What now?", crush: J('dating'), months: [2] }
  ]);
})();
