/* Haechan, living world (nights and run-ins), 2026-10-21. Two things live here:
   A) FEMC_GAME_LINK_EXTRAS.haechan.lateNights (format: core.js lateNightFits / lateNightDue, examples in living-nights.js).
      He lives in the dorm, so every night is kind 'dorm', including the ones where a guesthouse resident (Mark, Jungwon)
      is at the gate and leaves tonight. His ranks are automatic story ranks (1: 11/5 · 3: 11/19 · 6: 12/8 · 8: 12/18), so
      `rank` gates are dates. Before 12/18 nothing carries a route; romance/friend nights start after the solstice and carry
      flag 'year-goes-on' (as does everything that starts after 12/21). Narrow gates (tartarus, rain, story events) sit before
      wide ones because his nights play in file order. Every scene branches by heading(): pre-solstice R / S / H, and the one
      night whose window spans the solstice (hc-ln-tower) and the post-solstice nights add 'true' and 'stay'.
   B) Six run-ins in town (FEMC_GAME_RUNINS, format: living-runins.js header). Pre-solstice ones end by 12/20; post-solstice
      ones start 12/22 with flags ['arrived-haechan', 'year-goes-on']. Each first line continues the activity it follows. */
(() => {
  const X = (window.FEMC_GAME_LINK_EXTRAS ||= {});
  const add = (id, list) => { (X[id] ||= {}).lateNights = [...((X[id] || {}).lateNights || []), ...list]; };

  add('haechan', [

    /* ── Before he awakens: he goes up at quarter to twelve and is on the stairs when they come back. He doesn't ask. ── */
    { id: 'hc-ln-stairs', kind: 'dorm', rank: 1, after: '11/6', until: '12/4', when: 'tartarus', place: 'Iwatodai Dorm · Stairs', time: 'Late Night', music: 'night', scene: [
      { n: "They came back from the tower at twenty past one the way they always did, in a loose straggle up the front steps with nobody talking, Junpei's bag knocking the door frame, Yukari already out of one boot, Akihiko last and counting heads under his breath. The lounge was dark. The stairs were not empty." },
      { n: "Haechan was sitting six steps up with his back against the wall and his knees drawn in, headphones around his neck, a can of the peach soda from the machine on the step beside him, unopened and gone warm. At quarter to twelve she had heard his door shut at the far end of the top floor. Sometime after, in the green hour or in whatever was left of it, he had come back down and sat here, and he did not look like a boy who had been waiting. He looked like a boy who had sat down on a staircase by accident and been too polite to get up for an hour and a half." },
      { n: "Junpei stepped over his feet with a mumbled *'sup*. Yukari said goodnight and got a nod. Akihiko stopped, looked at him the way he looked at anything new in his building, and went on up. Nobody asked him what he was doing there, and he didn't ask any of them where they'd been." },
      { ifHeading: 'R', then: [
        { n: "He waited until the landing above them was quiet. Then he looked at her, the flat measuring look that went over her like a hand checking a pocket, and it stopped at her right cuff, where something dark had dried the fabric stiff." },
        { s: 'haechan', f: 'neutral', t: "Not yours." },
        { s: 'solar', f: 'neutral', t: "No." },
        { s: 'haechan', f: 'neutral', t: "Okay. Then I don't need to know whose." }
      ], else: [{ ifHeading: 'S', then: [
        { n: "The second the landing went quiet he was on his feet too fast, two steps down at once, close enough that she smelled cinnamon and cold air, both hands up and not touching her, hovering an inch off her shoulders like he thought she might come apart if he did." },
        { s: 'haechan', f: 'serious', t: "Agasshi. Are you— no. You're fine. Look at you. You're fine." },
        { n: "He said it loud enough to wake the second floor, and heard himself, and sat back down on his step all at once like a dog called off, and picked up the warm can, and put it down again." }
      ], else: [
        { n: "He waited until the landing above them was quiet. She had her hand in her blazer pocket, worrying at something that wasn't there, a small hard shape with five points that her fingers kept closing on and finding empty. He watched her do it the way he watched everything, and his face did nothing at all." },
        { s: 'haechan', f: 'neutral', t: "You came in humming. Not anything of mine." },
        { s: 'haechan', f: 'neutral', t: "That's fine. I'm not keeping score. I'm just sitting on some stairs." }
      ] }] },
      { choose: [
        { t: "(Sit on the step below him.)", notes: 3, then: [
          { n: "She sat. The step was cold through her skirt and his knee was an inch from her shoulder, and for a while neither of them said anything, and the building ticked and settled around them the way buildings do when the last people come home." },
          { s: 'haechan', f: 'neutral', t: "Six pairs of shoes went out at midnight. I heard them through the floor." },
          { s: 'haechan', f: 'flustered', t: "Six came back. That's all. I can count. It isn't a thing." }
        ] },
        { t: "You didn't have to wait up.", notes: 2, then: [
          { s: 'haechan', f: 'flustered', t: "I wasn't waiting. I was sitting." },
          { s: 'haechan', f: 'neutral', t: "They're different. One of them you're allowed to say out loud." }
        ] },
        { t: "(Take the warm can. Open it.)", notes: 2, then: [
          { n: "She took it off the step and opened it. It was warm and too sweet and flat, and she drank half of it in one go anyway, standing on the stairs in her tower clothes at half past one, and he watched her do it with something on his face that, in better light, she might have had to call relief." },
          { s: 'haechan', f: 'happy', t: "That's disgusting. Finish it." }
        ] }
      ] },
      { n: "When she went up he didn't move. She was at her own door before she heard him on the stairs below, slow, a long way back, and then above her, going on to the end of the top floor, and his door shut, and the radiator in there knocked twice like it had been waiting up for him too." }
    ] },

    /* ── Rain. ── */
    { id: 'hc-ln-rain', kind: 'dorm', rank: 2, after: '11/11', until: '12/20', when: 'rain', place: 'Iwatodai Dorm · Front', time: 'Late Night', music: 'night', scene: [
      { n: "It had been raining since dinner, the steady cold kind that settled in for the night like a guest who'd brought a bag, and at midnight she went to check the front door was locked because Mitsuru had asked her to, and it wasn't, because Haechan was on the other side of it." },
      { n: "He was on the top step under the little overhang with his hood up and his knees drawn in, as far back as he could get without being inside, and the rain was coming down a foot in front of his sneakers in a gray sheet, and he had his head tipped a little to one side, the way he did." },
      { s: 'haechan', f: 'neutral', t: "Gutter's a B flat. Bike shed roof's somewhere under it, I can't tell where. The gate's doing something on its own." },
      { s: 'haechan', f: 'neutral', t: "Close the door, you're letting the heat out. Or come out. Pick." },
      { ifHeading: 'R', then: [
        { n: "He had a cigarette, lit, held low and out past the edge of the overhang on the far side from her, the way you'd hold something away from someone's good coat. He didn't put it out when she came. He didn't make a show of not putting it out either. In one of his lives he had never once pretended to be quitting, and he was in that one tonight, she could tell, from how little he said." },
        { s: 'haechan', f: 'neutral', t: "Don't look at it like that, princess. It's not a personality. It's a thing I hold when it rains." }
      ], else: [{ ifHeading: 'S', then: [
        { n: "He had a cigarette tucked behind his ear, unlit, and a stick of cinnamon gum going, and the packet of gum on the step was down to its last two, and he was eyeing them like a man rationing water." },
        { s: 'haechan', f: 'happy', t: "Reds. Day eleven. You know in the car the wipers go at the same speed as the song he likes, the old one? He leaves them on in the garage just to keep time. Mrs. Bang says it's a waste of battery. He says it's a waste of a song not to." },
        { n: "He didn't say who. He didn't need to. Something in her that had sat in a car at the bottom of a hill in the rain a hundred times tapped two fingers on her knee, once, twice, wiper-time, before she'd noticed it had." }
      ], else: [
        { n: "He didn't look at her when she sat. He was looking down the hill, past the gate, through the rain to where the street went on toward the station and the guesthouse, and one third-floor window over there that still had its light on at midnight." },
        { s: 'haechan', f: 'neutral', t: "That's the loud one's. He doesn't sleep either. He just does it louder." },
        { s: 'haechan', f: 'sad', t: "You keep looking down there. You don't know you do it. It's fine. It's a long way to look in the rain, that's all." }
      ] }] },
      { choose: [
        { t: "(Sit under the overhang with him.)", notes: 3, then: [
          { n: "She sat. There was exactly enough dry step for two if neither of them minded the other one's shoulder, and neither of them said whether they minded. The rain kept on. After a while he started naming things under his breath, the gutter, the shed, a car going by on the wet road, a window somewhere being pulled shut, and she found she could hear them one by one, separately, the way you only can once somebody tells you they're there." }
        ] },
        { t: "Teach me the gate.", notes: 2, then: [
          { s: 'haechan', f: 'neutral', t: "Shut your eyes." },
          { n: "She shut them. The gate rattled on its latch in the wind, two short and a long, two short and a long, and he tapped it on her knee with one finger in time until she had it, the whole loose stumbling rhythm of it, and when she opened her eyes he was already looking at something else." },
          { s: 'haechan', f: 'happy', t: "Yeah. That one. Don't tell anybody. They'll want me to do it at parties." }
        ] },
        { t: "You'll catch cold.", notes: 1, then: [
          { s: 'haechan', f: 'neutral', t: "I won't." },
          { s: 'haechan', f: 'neutral', t: "You will. You came out in socks. Sit on the mat at least." }
        ] }
      ] },
      { n: "When the rain let up around one he stood and held the door for her with his foot, and came in after, and locked it, and stood there with his hand flat on it for a second, the way you'd lay a hand on a horse, like locking doors had once been somebody's whole job and the habit had followed him here." }
    ] },

    /* ── Yunjin (dorm). ── */
    { id: 'hc-ln-yunjin', kind: 'dorm', rank: 1, after: '11/7', until: '12/12', place: 'Iwatodai Dorm · Kitchen', time: 'Late Night', music: 'dorm', scene: [
      { n: "The kitchen light was on at one in the morning, which meant Yunjin, because Yunjin slept with every light on and had extended the policy, without consulting anyone, to the ground floor. She was sitting on the counter beside the stove in her yellow puffer and a pair of pajama bottoms with cartoon fish on them, eating dry instant noodles out of the packet like crisps, and Haechan was at the stove with a pot that hadn't boiled yet, and the two of them were arguing." },
      { s: 'yunjin', f: 'neutral', t: "You put the egg in at the start. That's how she does it. That's how everyone does it." },
      { s: 'haechan', f: 'happy', t: "Mrs. Bang puts the egg in at the start so it goes hard and nobody can complain it's raw. That's not cooking. That's a legal position." },
      { n: "Yunjin's voice was all gravel, lower than it had any right to be, like a road somebody had driven too fast on too many times. She looked up when Solar came in and her whole face did something quick and pleased." },
      { s: 'yunjin', f: 'happy', t: "Oh, good. A witness. Sol, tell the delivery boy how you like your egg." },
      { ifHeading: 'R', then: [
        { n: "Haechan didn't turn around. He was answering Yunjin the way you'd answer a professor, flat and dry and in as few words as he could get away with, and Yunjin kept frowning at the back of his head like a radio that had drifted off its station." },
        { s: 'yunjin', f: 'neutral', t: "Why are you talking like that? Like the weather. You're never like that at home. At home you're a car alarm." },
        { s: 'haechan', f: 'neutral', t: "I'm tired, Jin." },
        { s: 'yunjin', f: 'serious', t: "You have never once in your life been too tired to be loud." }
      ], else: [{ ifHeading: 'S', then: [
        { n: "Haechan turned around with the spoon up like a conductor's baton and started telling Solar, loudly, with his whole body, about the morning Mrs. Bang had chased him out of the kitchen with a ladle for stealing the egg off the Chairman's tray, and Yunjin did the ladle, and he did Mrs. Bang, and somewhere in the middle Solar found she was laughing at the punchline a second before it came." },
        { s: 'yunjin', f: 'happy', t: "See? She knows. She knows the ladle." },
        { s: 'haechan', f: 'happy', t: "Everyone knows the ladle. The ladle's famous. The ladle has a reputation in three districts." }
      ], else: [
        { n: "Solar's phone buzzed on the counter where she'd put it down. Then again. Then three more times, fast, the way only one person at the guesthouse texted, in capitals, at one in the morning, about nothing, and she picked it up and her mouth did something before she'd read a word." },
        { s: 'yunjin', f: 'neutral', t: "Who's that?" },
        { s: 'haechan', f: 'neutral', t: "Leave her, Jin. Somebody down the road texts in capitals. That's a whole other building." },
        { n: "He said it to the pot. It wasn't unkind. It was the voice of somebody reading a sign out loud so nobody would trip over the step." }
      ] }] },
      { choose: [
        { t: "Soft. In at the end.", notes: 3, then: [
          { s: 'haechan', f: 'neutral', t: "Thank you." },
          { s: 'yunjin', f: 'flustered', t: "Traitor. You eat her eggs every single morning and you say thank you." },
          { n: "She didn't, here. She didn't know who Mrs. Bang was. But she'd said thank you to somebody's eggs every morning somewhere, she could feel the shape of it in her mouth, and Yunjin was looking at her like she'd said it out loud." }
        ] },
        { t: "Why did she call you the dog?", notes: 2, then: [
          { s: 'yunjin', f: 'neutral', t: "Because the whole port does. Your dad made everybody in the house stop. I'm not everybody. Also he sleeps at the bottom of the garden and bites people." },
          { s: 'haechan', f: 'happy', t: "It's an annex. It has a door. And I bite people who've earned it." }
        ] },
        { t: "(Steal Yunjin's noodles.)", notes: 2, then: [
          { n: "She took the packet out of Yunjin's hand and ate a piece. Yunjin let her, the way you let someone take something who has always taken it, and put her chin on Solar's shoulder, heavy, like a cat that had decided." },
          { s: 'yunjin', f: 'neutral', t: "She does that. She's always done that. I have never once finished anything in my life." }
        ] }
      ] },
      { n: "The egg went in at the end. Yunjin complained the whole way through eating it, and ate all of it, and when she slid off the counter to go up she flicked Haechan on the ear on her way past, hard, without looking, the way you'd flick a brother, and he let her." }
    ] },

    /* ── Mark at the gate (only if Mark crossed). He lives at the guesthouse; he leaves tonight. ── */
    { id: 'hc-ln-mark', kind: 'dorm', rank: 3, events: ['a4-mark'], after: '11/20', until: '12/20', place: 'Iwatodai Dorm · Front', time: 'Late Night', music: 'night', scene: [
      { n: "She heard the front door at quarter past eleven, the careful click of somebody who knew which way the latch stuck, and from the landing window she watched Haechan go down the path in his hoodie and unlaced sneakers to the gate, where somebody was already standing on the other side of it under the streetlight, not ringing, not coming in. By the time she had shoes on and was out on the step, the two of them were just standing there with the gate between them, like a border neither of them had drawn." },
      { s: 'mark', f: 'flustered', t: "Sol— hey. Sorry, I'm not, I wasn't coming in. I know the rule. Mitsuru's whiteboard. I was just walking." },
      { s: 'haechan', f: 'neutral', t: "He walks when he can't sleep. Uphill. He used to end up outside my building and pretend he'd been on his way somewhere else." },
      { s: 'mark', f: 'neutral', t: "I was on my way somewhere else." },
      { s: 'haechan', f: 'neutral', t: "You were on your way to a gate." },
      { n: "Mark laughed, warm and easy, the laugh he gave everybody, and then it ran out a beat too early, and he stood there with his hands in his pockets looking at Haechan through the bars, and Haechan looked back, and Solar, on the step with the warm hallway at her back, understood without knowing how that these were two people who had walked each other home for most of their lives and then stopped, and that their feet had never been told." },
      { s: 'mark', f: 'neutral', t: "...Night, Hyuck." },
      { ifHeading: 'R', then: [
        { s: 'haechan', f: 'neutral', t: "Don't." },
        { n: "One word, flat, set down on the far side of the gate like something he'd carried out of the house to give back. Mark heard it. Solar watched it land, watched the easy warm face try to stay where it was and not manage it." },
        { s: 'mark', f: 'sad', t: "...Yeah. Okay." },
        { n: "Haechan didn't open the gate. He stood on his side of it with his hands in the pocket of his hoodie and watched Mark go down the hill to the streetlight alone, the way you'd watch somebody you'd been walking beside since you were small enough to be told to hold hands crossing the road. At the corner Mark stopped, like he'd walked into a wall only he could see, and didn't look back, and went on toward the station, and Haechan stood there until there was nothing left of him to hear." }
      ], else: [
      { s: 'haechan', f: 'neutral', t: "Mark." },
      { ifHeading: 'S', then: [
        { s: 'haechan', f: 'happy', t: "Text when you're in. Or don't. Fall in the river. Free country. Not even my country." },
        { n: "He said it loud and cheerful, with his whole chest, the way you'd shout something rude and fond after a friend leaving a bar, and Mark turned around ten steps down the hill and stared at him like a man who'd come home to find all his furniture moved." },
        { s: 'mark', f: 'surprised', t: "...Since when do you talk like that?" },
        { s: 'haechan', f: 'neutral', t: "Since a while. Goodnight, Mark." },
        { n: "Mark went. Haechan watched the hill a long time after there was nobody on it, and the cheer drained out of his face slowly, like water out of a sink, and he didn't put anything back in its place." }
      ], else: [
        { n: "Mark went down the hill toward the station and the guesthouse, where every window was still lit and somebody's music was coming faintly out of one of them, where he lived now among a lot of loud people neither he nor Haechan had ever met in any life, and Haechan watched him walk into that light, and then turned and watched Solar watch it too." },
        { s: 'haechan', f: 'sad', t: "Half the people you came for live down that road. Neither of us is one of them. Funny." },
        { s: 'haechan', f: 'sad', t: "Not funny. Just true. Go in, you're cold." }
      ] }
      ] },
      { choose: [
        { t: "(Wait for him on the step.)", notes: 3, then: [
          { n: "She waited on the top step with the door pulled to behind her until he came back up the path, and he saw her there and stopped at the bottom, and for a second his face did something it hadn't done all night. Then he came up and sat one step below her with his back against her shins, and said nothing, and neither did she, until he was warm." }
        ] },
        { t: "Did you want him to stay?", notes: 2, then: [
          { s: 'haechan', f: 'sad', t: "I wanted him to go. I wanted him to want to stay." },
          { s: 'haechan', f: 'neutral', t: "You can want both. It's very efficient. You get to be disappointed either way." }
        ] },
        { t: "(Go in and leave the door on the latch.)", notes: 1, then: [
          { n: "She went in and left it on the latch, and went up, and at the turn of the stairs she heard the door open and close very quietly, and the latch go, and a long time after that, his door at the end of the top floor." }
        ] }
      ] }
    ] },

    /* ── Hyein and Hanni (dorm). ── */
    { id: 'hc-ln-hem', kind: 'dorm', rank: 3, after: '11/20', until: '12/20', place: 'Iwatodai Dorm · Lounge', time: 'Late Night', music: 'joy', scene: [
      { n: "At half past twelve there was a light on in the lounge and the steady angry stitch of a sewing machine, and when she looked in, Hyein was at the coffee table with a coat in pieces all around her and three pins in her mouth, Hanni was on the sofa in a blanket holding a mug of tea she had clearly been told to hold for someone else, and Haechan was standing in the middle of the rug in his socks with his arms held straight out from his sides like a scarecrow." },
      { s: 'hyein', f: 'serious', t: "Don't move. I need shoulders. You're the only person awake with shoulders." },
      { s: 'haechan', f: 'neutral', t: "Junpei has shoulders." },
      { s: 'hyein', f: 'serious', t: "Junpei slouches. Junpei slouches *emotionally*. Arms up. Higher. I'll stab you, I have stabbed people, ask Hanni." },
      { s: 'hanni', f: 'neutral', t: "She has. It was an accident. Mostly." },
      { n: "Hyein went around him with a half-made sleeve, pinning, frowning, muttering numbers. Haechan stood perfectly still and looked at the ceiling with the patience of a man at the dentist." },
      { ifHeading: 'R', then: [
        { s: 'hyein', f: 'happy', t: "Oh my God, you stand exactly the same. You stand like you're at the door at a—" },
        { s: 'hanni', f: 'serious', t: "Hyein." },
        { s: 'hyein', f: 'flustered', t: "...At a nice door. Generally. Doors." },
        { s: 'haechan', f: 'neutral', t: "I stand like this at funerals too. It's one posture. I only got issued the one." },
        { n: "Hanni's eyes went to Solar and away again, quick, like a hand pulled back off a stove, and she drank the tea she'd been told not to drink." }
      ], else: [{ ifHeading: 'S', then: [
        { n: "Somewhere around the second sleeve he started humming. Then singing under his breath, and then not under it, an old trot ballad with a chorus that swooped like a gull coming in to land, and Hyein stopped pinning and stared up at him with her mouth full of pins, and Hanni put her mug down very slowly." },
        { s: 'hanni', f: 'surprised', t: "...Who are you?" },
        { s: 'haechan', f: 'happy', t: "Somebody else's. Keep pinning, it's a long song." },
        { s: 'hyein', f: 'happy', t: "No, keep going, keep going, this is the best thing that has ever happened in this room." }
      ], else: [
        { s: 'hyein', f: 'neutral', t: "It's a commission. Don't laugh. The pink one at the guesthouse saw my sketchbook and said it was, quote, giving. Then she paid in advance." },
        { n: "The pink one. Solar's head came up in the doorway like someone had said her name across a crowded room, and Haechan, arms out, scarecrow, saw it happen, and watched her over the top of Hyein's head for a moment longer than he needed to." },
        { s: 'haechan', f: 'neutral', t: "The one who talks in headlines. Your friend. Down the road." },
        { s: 'haechan', f: 'neutral', t: "She's got good taste. Annoyingly. Hold still, Hyein, you're going to get my kidney." }
      ] }] },
      { choose: [
        { t: "(Kneel and hold the pincushion for Hyein.)", notes: 3, stat: { proficiency: 1 }, then: [
          { n: "She knelt on the rug with the pincushion held up like an offering, and Hyein took pins off it without looking, the way you'd take them from someone you'd sewn beside a hundred times, and after the fourth one her hand stopped in midair, and she looked at Solar, and then very fast back at the sleeve, and her eyes were wet, and she said nothing at all, which for Hyein was a speech." }
        ] },
        { t: "What were you about to say, Hyein?", notes: 2, then: [
          { s: 'hyein', f: 'flustered', t: "Nothing! I say nothing now. It's my new thing. I'm a whole new girl." },
          { s: 'hanni', f: 'neutral', t: "She's very proud of it. It's been nine days." },
          { s: 'haechan', f: 'neutral', t: "Eight. She said something on Tuesday." }
        ] },
        { t: "(Sit with Hanni and watch.)", notes: 2, then: [
          { n: "She sat on the sofa and Hanni lifted the blanket without a word and put half of it over her, and handed her the tea, and the two of them watched Hyein pin a boy into a coat at one in the morning like it was a show they'd paid for." },
          { s: 'hanni', f: 'neutral', t: "He's letting her. He's never let anybody touch his clothes. Not once. Not even when—" },
          { s: 'hanni', f: 'neutral', t: "...Drink your tea, Sol." }
        ] }
      ] },
      { n: "The coat, when it was done, was beautiful, and wasn't for him, and he took it off and handed it back to Hyein folded, sleeves tucked in, the way he folded everything, and Hyein looked at the fold and burst into tears for no reason she would agree to explain, and Hanni put her to bed." }
    ] },

    /* ── After 12/5 he goes into the tower with them (spans the solstice: R / S / H / true / stay). ── */
    { id: 'hc-ln-tower', kind: 'dorm', rank: 6, events: ['a5-haechan-awakens'], after: '12/8', until: '3/5', when: 'tartarus', place: 'Iwatodai Dorm · Laundry Room', time: 'Night · 3 AM', music: 'tender', scene: [
      { n: "Three in the morning after the tower, and the laundry room smelled of hot lint and the strange flat nothing-smell that came home on all of them from Tartarus, like a room nobody had ever breathed in. Haechan was at the sink in a T-shirt, scrubbing the cuff of his jacket under the cold tap with a nailbrush and a bar of somebody's soap, and the jacket's left pocket hung heavy against the basin with what he carried in it now." },
      { n: "He'd taken the Evoker out and put it on the shelf above the dryer, between the detergent and a lost sock, and every so often he looked up at it the way you look at a phone you're waiting on." },
      { s: 'haechan', f: 'neutral', t: "There's a floor in there with rails in the walls. Did you hear it tonight?" },
      { s: 'haechan', f: 'neutral', t: "Like a line nobody took up. It hums the whole way up. That train you all saw on the full moon, before I was any use. It's still in the building somewhere. It's just being quiet." },
      { ifHeading: 'R', then: [
        { s: 'haechan', f: 'neutral', t: "The whole tower's got terrible room tone. Nothing in there absorbs anything. Every sound you make comes back at you twice, a little late. It's like being shouted at by your own echo for three hours." },
        { s: 'haechan', f: 'neutral', t: "Somebody should hang a rug. I'm not saying that to Mitsuru. I'm saying it to you so it's on record." }
      ], else: [{ ifHeading: 'S', then: [
        { s: 'haechan', f: 'happy', t: "You know the story? The brother and sister up the rope, the tiger at the door? She got the moon and she was too shy for it, everybody looking at her all night, so they swapped. She got the sun. He got the moon. Nobody ever asked the moon if he minded." },
        { s: 'haechan', f: 'neutral', t: "Old men at the harbor tell it wrong on purpose. I'm telling it wrong on purpose. Dalnim doesn't mind. I asked him. He says he likes the night shift." }
      ], else: [{ ifHeading: 'H', then: [
        { n: "He looked at her over the sink, at her right hand, which had gone, the way it did after the tower now, to the star pinned on Haenim's sash, or to the place on her own blazer where a pin like it would have been, and turned something there that wasn't jade." },
        { s: 'haechan', f: 'sad', t: "You followed the star up there tonight. Three floors. I watched you do it. I've got the moon. The moon doesn't get to follow anything. It just goes round." },
        { s: 'haechan', f: 'neutral', t: "That's not a complaint. It's an orbit. It's a very good job." }
      ], else: [{ ifHeading: 'true', then: [
        { s: 'haechan', f: 'neutral', t: "Two of me went up those stairs tonight and both of them came back down. That's new. I used to lose one of them somewhere around the tenth floor." },
        { s: 'haechan', f: 'happy', t: "Dalnim likes it. He says it's roomier in here with both of us." }
      ], else: [
        { s: 'haechan', f: 'neutral', t: "Protein had your left side all night. Every floor. I had the right. We didn't plan it. We both just looked at you and went." },
        { s: 'haechan', f: 'neutral', t: "He's good at it. Good. Somebody should be, after." }
      ] }] }] }] },
      { choose: [
        { t: "(Take the jacket and scrub the other sleeve.)", notes: 3, then: [
          { n: "She took the jacket off the edge of the basin, heavy pocket and all, and worked at the other cuff with her thumbnail under the tap while he did his, the two of them shoulder to shoulder at a laundry sink at three in the morning, and the water ran gray and then clear, and his hands, she noticed, weren't shaking tonight, and she noticed him notice her noticing, and neither of them said so." }
        ] },
        { t: "What's he like? Dalnim.", notes: 2, then: [
          { s: 'haechan', f: 'neutral', t: "Quiet." },
          { s: 'haechan', f: 'neutral', t: "Like the other half of a sentence somebody started a long time ago. He waits for you to say yours first. Then he finishes it." }
        ] },
        { t: "(Take the Evoker off the shelf and put it back in his pocket.)", notes: 2, then: [
          { n: "She reached up and took it off the shelf, cold, heavier than hers, and slid it into the left pocket of the wet jacket where it lived, and he went very still and watched her hands do it." },
          { s: 'haechan', f: 'surprised', t: "...Nobody touches that." },
          { s: 'haechan', f: 'flustered', t: "Okay. You can. Just you. Don't make it weird." }
        ] }
      ] },
      { n: "When the jacket was hung over the dryer door to steam he sat down on the floor with his back against the machine and his eyes shut, and she sat beside him, and somewhere in the walls of the dorm, or in the walls of her own head, a train that wasn't running held one long low note and let it go." }
    ] },

    /* ── The first night after the lock (12/21). ── */
    { id: 'hc-ln-first-night', kind: 'dorm', rank: 8, events: ['a5-solstice'], flag: 'year-goes-on', after: '12/22', until: '1/12', place: 'Iwatodai Dorm · Rooftop', time: 'Late Night', music: 'night', scene: [
      { n: "The first night after the station, the roof was the coldest it had been all year and the sky over the bay was ordinary. That was what she kept noticing. No green, no tower, no bells. The longest night of the year had been last night, and tonight was only a little shorter, and it was only a night, the stars out over Port Island like salt spilled on a dark table." },
      { n: "He was at the railing. He'd propped the door with the brick, for her, and he didn't turn around." },
      { s: 'haechan', f: 'neutral', t: "They stopped." },
      { s: 'haechan', f: 'neutral', t: "The bells. I've had one going in the back of my head since the laundry room. Since before. Since the other side. Last night they all went at once and then they stopped, and this morning it was so quiet I thought I'd gone deaf." },
      { ifHeading: 'R', then: [
        { n: "He said it flat, every word set down by itself, the campus voice, dry as the inside of a lecture hall, and there was no harbor anywhere in it. He sounded like a boy on a ledge. He sounded like he'd sat down." },
        { s: 'haechan', f: 'sad', t: "One of them's still going. Quieter. Like a bell in a building across a quad. I know which one. So do you." },
        { s: 'haechan', f: 'flustered', t: "Pretty girl. That's all. I'm not making a speech about it. I just wanted to say it somewhere it'd count." }
      ], else: [{ ifHeading: 'S', then: [
        { s: 'haechan', f: 'happy', t: "And then this morning I sang in the shower. Loud. The car song, the whole thing, the chorus twice, and Junpei banged on the wall and I banged back, and Mitsuru came up and stood outside the door and didn't say anything, so I sang the end at her through it." },
        { n: "He laughed, the whole loud warm house of a laugh, and for once he didn't cut it off halfway, and it went out over the railing into the dark like something let off a leash." },
        { s: 'haechan', f: 'neutral', t: "The jade's still going, agasshi. Low. Like a stone in a bowl. I know where it's coming from. Ten meters from your door." }
      ], else: [{ ifHeading: 'H', then: [
        { n: "He turned around then and leaned back on the railing and looked at her, and it wasn't the flat look or the loud one. It was a look she'd only ever seen on him in the tower, right before he moved." },
        { s: 'haechan', f: 'neutral', t: "It's the star. Isn't it." },
        { s: 'haechan', f: 'sad', t: "Don't. You don't have to say it. I was on the stairs. I heard what you said, and I heard what the bells did after." },
        { s: 'haechan', f: 'serious', t: "Listen to me. Being pulled at isn't the same as being tied. I'd know. You've been pulling at me my whole life in two places and nobody ever tied anything. You get to go somewhere nobody arranged for you. Somewhere I'm not." },
        { s: 'haechan', f: 'neutral', t: "Somebody should be the one who doesn't stand in the door about it. I'm volunteering. I'm very good at doors." }
      ], else: [{ ifHeading: 'true', then: [
        { n: "He said the next part in both voices at once, the dry one and the loud one, laid one over the other like a chord, and she heard it and her chest did something it hadn't done since the platform." },
        { s: 'haechan', f: 'happy', t: "Then the quiet started talking. Both halves of it. At the same time. Like two radios going in one car." },
        { s: 'haechan', f: 'flustered', t: "I don't know where I'm going to wake up, sweetheart. Agasshi. I've stopped picking. You did that. Don't tell me how. I'll ruin it." }
      ], else: [
        { s: 'haechan', f: 'serious', t: "You're staying." },
        { n: "It wasn't a question. He said it to her and not to the bay, and he waited, and she nodded, and he nodded back once, like a man signing his name at the bottom of something." },
        { s: 'haechan', f: 'sad', t: "Then when it's time I go home without you. I'm saying it first so you don't have to. You'd only say it badly and then feel terrible for a month." },
        { s: 'haechan', f: 'neutral', t: "They're good people down there. All of them. Protein's going to be unbearable. Let him." }
      ] }] }] }] },
      { choose: [
        { t: "(Stand next to him at the railing.)", notes: 3, then: [
          { n: "She stood beside him. The inch of cold air that used to live between their sleeves on this railing wasn't there tonight, and neither of them had moved to close it. It had just closed, the way a door you've stopped propping finally swings shut on its own and you realize you'd been waiting for it to." }
        ] },
        { t: "Are you okay?", notes: 2, then: [
          { s: 'haechan', f: 'neutral', t: "Ask me tomorrow." },
          { s: 'haechan', f: 'sad', t: "Tonight I'm just cold. That's all I'm going to be tonight. Cold, on a roof, with you. It's plenty." }
        ] },
        { t: "I'm sorry it was so loud.", notes: 2, then: [
          { s: 'haechan', f: 'happy', t: "Don't be. It was the best thing I've ever heard." },
          { s: 'haechan', f: 'happy', t: "And I've heard you sing." }
        ] }
      ] },
      { n: "They stayed until the cold got into their teeth. Going down, he took the brick out of the door and held it a second, and then, instead of setting it back in its corner, put it in his jacket's right-hand pocket, the empty one, and took it with him." }
    ] },

    /* ── Hanni and Hyein, after the lock: the night Hyein made him say it (12/14). ── */
    { id: 'hc-ln-not-my-call', kind: 'dorm', rank: 8, events: ['a5-call-runners'], flag: 'year-goes-on', after: '12/23', until: '1/20', place: 'Iwatodai Dorm · Kitchen', time: 'Late Night', music: 'tender', scene: [
      { n: "Two in the morning and the kitchen was full, which it never was. Hanni was at the table with her chin on her fist. Hyein was up on the counter where Yunjin usually sat, eating cereal dry out of the box by the handful, and Haechan was at the sink with his back to the dark window, holding a glass of water he'd been not drinking for ten minutes." },
      { n: "Nobody had planned it. Three people had come down for water at the same hour, and then Solar had made four, and now nobody wanted to be the first one to go back up." },
      { s: 'hyein', f: 'serious', t: "I have to say something and Hanni says I'm not allowed and I'm saying it anyway." },
      { s: 'hanni', f: 'neutral', t: "I said wait till the morning." },
      { s: 'hyein', f: 'serious', t: "It *is* the morning. It's two." },
      { n: "She put the cereal down and looked at Haechan, and her chin did the thing it did right before she cried, and she was not going to cry, you could watch her decide it." },
      { s: 'hyein', f: 'sad', t: "On the roof. On the stairs, after. I made you tell her. Come home. I made you, and you said it wasn't your call, twice, and I was so angry at you." },
      { s: 'haechan', f: 'neutral', t: "I know. You threw a slipper." },
      { s: 'hyein', f: 'sad', t: "I'm sorry I made you." },
      { ifHeading: 'R', then: [
        { s: 'hanni', f: 'happy', t: "It doesn't matter now. Does it? She's coming. Sol's coming home." },
        { n: "Hanni said it like she'd been keeping it in her mouth all day, and Hyein made a sound that wasn't a word and put her face in the cereal box, and Haechan looked down at the glass in his hand." },
        { s: 'haechan', f: 'neutral', t: "It still wasn't my call. It was hers. She made it. I just got to stand on the stairs while she did." },
        { s: 'haechan', f: 'neutral', t: "...Don't cry in the cereal, Hyein. Somebody eats that." }
      ], else: [{ ifHeading: 'S', then: [
        { s: 'hanni', f: 'sad', t: "You were right, though. It wasn't. It wasn't anybody's but hers." },
        { n: "Hanni didn't look at Solar when she said it. She looked at the table, at a ring a mug had left, and pressed her thumb into it, and Hyein slid off the counter and came and put her arms around Solar from behind and her face in Solar's hair and stayed there." },
        { s: 'haechan', f: 'serious', t: "I'll keep her coat on her. Over there. She'll stand on a pier in a blouse and I'll be the idiot holding the coat. Every day. That's a promise. I don't hand those out." },
        { s: 'hyein', f: 'sad', t: "You'd better. You'd better, or I'll find a way across and kill you." }
      ], else: [{ ifHeading: 'H', then: [
        { s: 'hanni', f: 'sad', t: "It wasn't anybody's, in the end. Not yours. Not ours." },
        { s: 'haechan', f: 'neutral', t: "It was hers. That's the whole point." },
        { n: "He said it gently. Not flat, not loud. Gently, the way you'd set something down that somebody else was going to pick up. Hyein looked at him like she'd never seen him before in her life." },
        { s: 'haechan', f: 'neutral', t: "She's going somewhere none of us live. Somewhere she picked by herself. Somebody had to be the one who didn't argue. I'm great at not arguing. Ask anyone." },
        { s: 'hyein', f: 'sad', t: "Nobody has ever said that about you." }
      ], else: [{ ifHeading: 'true', then: [
        { s: 'hyein', f: 'surprised', t: "So did we get you back? Did we? Because I asked you and you said both, and I don't know what both means, Sol, I'm a fashion major." },
        { s: 'haechan', f: 'happy', t: "It means she's coming home to everywhere. You get her. The harbor gets her. Everybody gets her. Nobody gets to be smug about it." },
        { s: 'haechan', f: 'neutral', t: "I'm going to be smug about it." }
      ], else: [
        { s: 'hanni', f: 'sad', t: "She's staying. Here. And we're going." },
        { n: "Hanni said it to the table in a small voice, the voice of someone practicing a sentence so it would hurt less the second time, and Hyein made a noise, and Haechan put his glass down on the drainer." },
        { s: 'haechan', f: 'sad', t: "And that's allowed. We said come home. She heard us. She picked a home. It's just not one of ours." },
        { s: 'haechan', f: 'sad', t: "You don't get to be sorry for asking, Hyein. You asked because you love her. I said not my call for the same reason. We were both right. It's horrible." }
      ] }] }] }] },
      { choose: [
        { t: "(Hold onto Hyein. For a long time.)", notes: 3, then: [
          { n: "She got up and held onto Hyein, cereal box and all, and Hyein held on back so hard it hurt, and over her shoulder Hanni reached out and took Solar's hand on the table and didn't let go either, and Haechan stood at the sink with his back to the window and watched the three of them, and didn't come any closer, because some rooms aren't yours to walk into, and he'd always known which." }
        ] },
        { t: "Thank you. All of you. For asking.", notes: 3, then: [
          { s: 'hanni', f: 'sad', t: "...Don't thank us. You'll make Hyein worse." },
          { s: 'hyein', f: 'sad', t: "I'm already worse. I'm the worst I've ever been." },
          { s: 'haechan', f: 'happy', t: "She's fine. She's always the worst she's ever been. It's her range." }
        ] }
      ] },
      { n: "Nobody went up until three. When they finally did, Haechan washed the four glasses and put the cereal back in the cupboard, and Hyein, halfway up the stairs, turned around and said goodnight to him, properly, for the first time since he'd come, like it was something she had decided to give him and was a little annoyed about." }
    ] },

    /* ── Romance (after the lock). ── */
    { id: 'hc-ln-rom-dryer', kind: 'dorm', rank: 8, route: 'romance', flag: 'year-goes-on', after: '12/22', until: '1/22', place: 'Iwatodai Dorm · Laundry Room', time: 'Night · 3 AM', music: 'tender', scene: [
      { n: "The dryer was running with her sweaters in it and he was on top of it with his back against the wall, and when she came in he didn't say anything. He held out a hand without looking, palm up, the way you'd hold a hand out for a key you knew somebody was carrying." },
      { n: "She put hers in it. He pulled, not hard, and she climbed up beside him, the machine warm and shuddering under them both, the round window turning her sweaters over and over like slow weather." },
      { ifHeading: 'R', then: [
        { n: "He had her hair tie on his wrist. She didn't know when he'd taken it. He slid it off and turned her by the shoulder and gathered her hair up off her neck in one hand, badly, a boy who had never done this for anyone, and tied it, and the ponytail came out crooked, and he looked at it with deep professional dissatisfaction." },
        { s: 'haechan', f: 'happy', t: "That's terrible. Leave it. I like it terrible." },
        { s: 'haechan', f: 'flustered', t: "...Pretty girl." }
      ], else: [{ ifHeading: 'S', then: [
        { n: "Her hands were cold. They always were, he informed her, in both places, she had a circulation problem and a coat problem and a refusing-to-admit-either problem, and he took both her hands between his and breathed on them like a man warming a car on a winter morning, loudly, theatrically, until she laughed, and then not theatrically at all." },
        { s: 'haechan', f: 'happy', t: "Agasshi. You're a block of ice. Hoejangnim would want to know why I let you get this cold. He asks me things now. He never used to." },
        { s: 'haechan', f: 'neutral', t: "Don't tell him. He'd ask." }
      ], else: [{ ifHeading: 'H', then: [
        { n: "He held her hand on his knee and looked at it there the way you'd look at a photograph of a house you were moving out of, carefully, so you'd have the angles right later." },
        { s: 'haechan', f: 'sad', t: "I'm going to keep doing this right up to the day it stops being mine to do. Then I'm going to stop. Nicely. You won't even see the seam." },
        { s: 'haechan', f: 'sad', t: "You'll see it. You see everything. Pretend you don't, for me." }
      ], else: [{ ifHeading: 'true', then: [
        { n: "He held her hand and talked, low, about two things at once, a ladder and a hill, a lab window and a harbor wall, and somewhere in the middle she stopped being able to tell which sentence had started where, and so did he, and neither of them minded." },
        { s: 'haechan', f: 'happy', t: "Princess. Agasshi. I'm not even switching anymore. I say whichever comes up first and you answer to both. It's disgusting. I love it." }
      ], else: [
        { s: 'haechan', f: 'neutral', t: "You're staying and I'm going, and I'm still going to hold your hand right up to the train. I checked. There's nothing in the rules." },
        { s: 'haechan', f: 'sad', t: "I'll go home, and you'll be here with all these people who love you, and I'll know that. It'll be fine. It'll be fine. Give me your other hand, this one's going numb." }
      ] }] }] }] },
      { choose: [
        { t: "(Lean your forehead against his.)", notes: 3, then: [
          { n: "She leaned in until her forehead rested on his. He closed his eyes. The dryer turned under them and the light hummed its flat note and his breath was warm and cinnamon and a little unsteady, and they stayed like that for a long time, not kissing, only there, which turned out to be the thing she had wanted all week without having a word for it." }
        ] },
        { t: "(Kiss him. Quickly, before he can say something.)", notes: 3, then: [
          { n: "She kissed him, quick and light, before he could make it into a joke, and pulled back, and he looked at her for one long second with his mouth slightly open and nothing at all on his face." },
          { s: 'haechan', f: 'flustered', t: "...That's cheating. I had a whole thing I was going to say." },
          { s: 'solar', f: 'flustered', t: "Say it." },
          { s: 'haechan', f: 'flustered', t: "I forgot it. You did that on purpose." }
        ] },
        { t: "(Put your head on his shoulder and close your eyes.)", notes: 2, then: [
          { n: "She put her head on his shoulder and closed her eyes and was asleep before the cycle finished, and he didn't move for forty minutes, she found out later, because Junpei came down for a soda at half past three and saw them and backed out so carefully he walked into the door frame." }
        ] }
      ] },
      { n: "When the dryer buzzed he slid down first and held his arms up for her, the way you'd lift someone down off a wall, and set her on her feet, and didn't let go of her hand until the bottom of the stairs, where he always stopped. Tonight he didn't stop. He walked her all the way up." }
    ] },

    /* ── Friend (after the lock), after a night in the tower. ── */
    { id: 'hc-ln-friend-tower', kind: 'dorm', rank: 8, route: 'friend', when: 'tartarus', flag: 'year-goes-on', after: '12/22', until: '3/5', place: 'Iwatodai Dorm · Stairs', time: 'Late Night', music: 'joy', scene: [
      { n: "Back from the tower at half past one, filthy and starving, and Haechan was already on the stairs ahead of her, four steps up with his jacket off and two cans on the step beside him, which he had bought, apparently, before they left, and carried up and down a haunted tower in his pocket, for this." },
      { n: "He held one out to her without looking. Then he drew it back a little, just out of reach." },
      { s: 'haechan', f: 'neutral', t: "Before you take this. I'd like to review tonight." },
      { s: 'haechan', f: 'neutral', t: "Upper floors. A thing with six arms. It threw you over a railing. Over nothing, actually, there wasn't a floor under there, it was just dark. And who caught you." },
      { s: 'solar', f: 'neutral', t: "You did." },
      { s: 'haechan', f: 'neutral', t: "I did. By the wrist. One hand. Again. That's twice. In films, the second time, that's a wedding. They cut straight to the wedding. There's a cake." },
      { s: 'haechan', f: 'neutral', t: "And what am I." },
      { s: 'solar', f: 'flustered', t: "...My friend." },
      { s: 'haechan', f: 'sad', t: "Her friend. Thank you. Here's your friendship can." },
      { n: "He handed it over with immense dignity, like a man surrendering a sword, and looked away up the stairwell at nothing with the expression of the deeply and historically wronged." },
      { ifHeading: 'R', then: [
        { s: 'haechan', f: 'neutral', t: "There's a whole house of guys back home who'd pay real money to watch this. I'm going to tell them myself. At a party. It's going to ruin my reputation and I'm going to let it." }
      ], else: [{ ifHeading: 'S', then: [
        { s: 'haechan', f: 'happy', t: "Yunjin's going to laugh so hard she pulls something. She's going to tell Mrs. Bang. Mrs. Bang's going to beat a rug about it. The whole house'll know by breakfast and I'll have to live in the annex with it." }
      ], else: [{ ifHeading: 'H', then: [
        { s: 'haechan', f: 'neutral', t: "And you're going somewhere I don't even exist. So I'm friend-zoned across dimensions. Do you know how rare that is? There should be a plaque." },
        { s: 'haechan', f: 'neutral', t: "I'm getting one made. Small. Bronze. *Donghyuck. A friend.*" }
      ], else: [{ ifHeading: 'true', then: [
        { s: 'haechan', f: 'sad', t: "Two whole worlds, princess. Two. And I'm a friend in both of them. That's very efficient of you. That's the most efficient heartbreak I've ever seen." }
      ], else: [
        { s: 'haechan', f: 'neutral', t: "And you're staying here. With Protein. Who has never once caught you by the wrist over a void, I want that noted. He catches you by the elbow. It's a completely different catch. It's a lesser catch." }
      ] }] }] }] },
      { n: "Akihiko came up the stairs behind them right then, a towel round his neck, and stopped, and looked at the two of them, and at the cans." },
      { s: 'akihiko', f: 'neutral', t: "Good work tonight. Both of you." },
      { s: 'haechan', f: 'neutral', t: "Thank you, Protein. I'm her friend. Did you hear? It's official. There's paperwork." },
      { s: 'akihiko', f: 'surprised', t: "...Congratulations?" },
      { s: 'haechan', f: 'neutral', t: "Thank you. Nobody else has said that. You're a good man." },
      { n: "Akihiko looked at Solar for help. Solar was laughing too hard to give any. He went on up slowly, looking back twice, like a man who suspected he'd been made part of a bit and couldn't find the edges of it." },
      { choose: [
        { t: "(Knock your can against his.)", notes: 3, then: [
          { n: "She knocked her can against his. He looked at it, betrayed, and then knocked his back, harder, and drank, and the corner of his mouth went up against his will like a flag nobody had authorized." },
          { s: 'haechan', f: 'happy', t: "To friendship. The worst thing that's ever happened to me. Cheers." }
        ] },
        { t: "You're my best friend, Donghyuck.", notes: 3, then: [
          { s: 'haechan', f: 'surprised', t: "..." },
          { s: 'haechan', f: 'flustered', t: "*Best.* Okay. That's worse. You made it worse. You said my name and then you put *best* in front of it. Who raised you." },
          { n: "He put his face in his hands. Behind them, she was nearly sure, he was smiling, and he stayed like that until she'd finished her can, and then he took the empty off her and put it in his pocket with his own, because he always did, and always had." }
        ] }
      ] }
    ] },

    /* ── Friend (after the lock): Jungwon leaves at the gate; Yunjin on the wall. ── */
    { id: 'hc-ln-friend-gate', kind: 'dorm', rank: 8, route: 'friend', flag: 'year-goes-on', after: '12/26', until: '1/29', place: 'Iwatodai Dorm · Front', time: 'Late Night', music: 'joy', scene: [
      { n: "Jungwon had come over for dinner because Fuuka had asked him and stayed for tea because Mitsuru had, and at half past ten he was on the front step buttoning his coat all the way to the throat with the care of a man defusing it. Yunjin was sitting on the low wall at the bottom of the path in her puffer with a can of hot coffee. Haechan was in the doorway behind Solar with two cans of his own, waiting, very visibly, for Jungwon to leave." },
      { s: 'jungwon', f: 'neutral', t: "Thank you for having me. Please go inside, Solar. It's cold." },
      { n: "He turned and saw Haechan over her shoulder, and his face did nothing at all, politely, which was worse than anything it could have done." },
      { s: 'jungwon', f: 'neutral', t: "Donghyuck." },
      { s: 'haechan', f: 'neutral', t: "Yang." },
      { n: "Jungwon went down the path, inclined his head to Yunjin, who saluted him with her can, and let himself out through the gate and down the hill toward the station and the guesthouse, unhurried, hands in his pockets. Haechan watched him all the way to the streetlight like a man watching a car he was fairly sure had dented his." },
      { s: 'haechan', f: 'neutral', t: "What is he." },
      { s: 'solar', f: 'surprised', t: "What?" },
      { s: 'haechan', f: 'neutral', t: "To you. What is he. I'm asking as your friend. Your friend is asking. Your *friend*, who brought you a can, which is right here, which you haven't taken." },
      { s: 'yunjin', f: 'happy', t: "Oh my God. Oh my *God*. She friend-zoned you." },
      { s: 'haechan', f: 'neutral', t: "Thank you, Jin. Very helpful. Go home." },
      { s: 'yunjin', f: 'happy', t: "I live here!" },
      { ifHeading: 'R', then: [
        { s: 'haechan', f: 'neutral', t: "He doesn't even exist where we're going. Do you understand that? I'm losing to nobody. I'm losing to a guy-shaped hole in the air. I'm going to be your friend in a whole country he's not in and I'm still going to think about it." }
      ], else: [{ ifHeading: 'S', then: [
        { s: 'haechan', f: 'neutral', t: "And I'm going to live ten meters from your door with him coming up the drive in that coat. I'm going to have to wave at him. Over the wall. Every morning. As your friend." },
        { s: 'yunjin', f: 'happy', t: "I'm going to watch you wave. I'm bringing a chair. I'm bringing Mrs. Bang a chair." }
      ], else: [{ ifHeading: 'H', then: [
        { s: 'haechan', f: 'neutral', t: "So the man who buttons his coat like it's going to go off gets the other world, and I get a can. Fine. That's fine. I'm being so normal about it." },
        { n: "He wasn't, and he knew he wasn't, and he let her see him not be, which was its own kind of present. Then he held the can out properly, tab turned toward her." },
        { s: 'haechan', f: 'serious', t: "...He'd better be good to you over there. I'm saying that once. As your friend." }
      ], else: [{ ifHeading: 'true', then: [
        { s: 'haechan', f: 'neutral', t: "And he's going to be in two of your worlds and I'm going to be in two of your worlds and we're going to have to see each other in all of them. Forever. As friends. Yours. Not each other's. Never each other's." }
      ], else: [
        { s: 'haechan', f: 'sad', t: "And you're staying here, so he loses too. We all lose. Protein wins. A man who drinks raw eggs on purpose wins. I need a minute." }
      ] }] }] }] },
      { choose: [
        { t: "(Take the can. Knock it against his.)", notes: 3, then: [
          { n: "She took it and knocked it against his, and he looked at the two cans touching with deep private grief, and drank, and Yunjin cackled on the wall until she coughed, gravel all the way down, and he threw his empty at her, gently, and she caught it and threw it back, less gently." }
        ] },
        { t: "(Laugh until you have to sit down on the step.)", notes: 2, then: [
          { n: "She laughed until she had to sit down on the cold step, and Yunjin laughed, and Haechan stood over them both in the doorway with two cans and the face of a man at his own roast, and after a while, against every intention he had ever had, he laughed too, short and flat and then not flat at all." },
          { s: 'haechan', f: 'happy', t: "I hate both of you. Drink your can." }
        ] }
      ] },
      { n: "Yunjin went in first and flicked his ear on the way past. He stayed on the step a minute longer, looking down the hill at the streetlight where Jungwon had been, and then shut the door on the whole hill and locked it, with feeling." }
    ] },

    /* ── Romance (after New Year at the shrine). ── */
    { id: 'hc-ln-rom-shrine', kind: 'dorm', rank: 8, route: 'romance', events: ['a6-new-year'], flag: 'year-goes-on', after: '1/2', until: '1/29', place: 'Iwatodai Dorm · Rooftop', time: 'Late Night', music: 'tender', scene: [
      { n: "The first week of January, and the pine branches from the new year were still tied to the dorm's front gate, and the roof was white at the edges with a frost that crunched, and he was sitting on the step by the water tank in two scarves, one of which was hers, which she'd been looking for since the shrine." },
      { s: 'haechan', f: 'neutral', t: "You left it on the steps. At Naganaki. When everybody was queuing for the bell." },
      { s: 'haechan', f: 'neutral', t: "I didn't draw a fortune. I don't do fortunes. I stood behind you and watched you get a blank one and laugh, and I thought, good. Good. Nobody's written it yet." },
      { ifHeading: 'R', then: [
        { s: 'haechan', f: 'neutral', t: "Back home it'll be dead in January. Snow on the quad, nobody's walked it yet, everyone else still at their parents'. I used to go up the ladder on New Year's Day and sit there freezing. Just so the year started somewhere nobody could see me." },
        { s: 'haechan', f: 'neutral', t: "This year somebody's going to see me. I've been informed." }
      ], else: [{ ifHeading: 'S', then: [
        { s: 'haechan', f: 'happy', t: "Back home it's soup. The whole house. Mrs. Bang makes enough rice-cake soup to drown a horse and Hoejangnim has everyone bow in a row in order of who's least in trouble, and I'm always last, seven years running, and he gives me the envelope anyway and pretends it was an accident." },
        { s: 'haechan', f: 'neutral', t: "This year I'm going to be second to last. I've got a plan. The plan is you're going to be in more trouble than me." }
      ], else: [{ ifHeading: 'H', then: [
        { s: 'haechan', f: 'neutral', t: "I made a wish, though. At the bell. I don't do wishes either. I did one." },
        { s: 'haechan', f: 'sad', t: "I wished you a good year somewhere I'm not. That's the whole wish. It's a good one. I read it back twice for loopholes." }
      ], else: [{ ifHeading: 'true', then: [
        { s: 'haechan', f: 'happy', t: "This year I'm doing both. The ladder at six and the soup at nine, snow on the quad and Mrs. Bang yelling, and I don't know how that works and I'm not asking. You're going to be cold at both. I'm going to have the coat at both." }
      ], else: [
        { s: 'haechan', f: 'neutral', t: "I made a wish at the bell. Don't ask. It was for you. Here. With all of them. It's a very boring wish. It's mostly rice, and Protein running past your window at five." },
        { s: 'haechan', f: 'neutral', t: "It's a good wish. I'd make it again. I'd make it every year from wherever I am." }
      ] }] }] }] },
      { choose: [
        { t: "(Sit down and unwind your scarf from his neck.)", notes: 3, then: [
          { n: "She sat beside him on the frozen step and unwound her scarf from his neck, slowly, one turn and then the other, and put it round her own, and it was warm from him and smelled of him, cold air and laundry soap and the sweet thing underneath, and he watched her do it and didn't say a word, and when she was done he put his hand over hers on the step and left it there." }
        ] },
        { t: "(Kiss him. The year's new.)", notes: 3, then: [
          { n: "She kissed him, short and cold, their breath going white between them, and when she pulled back he was looking at her like a man who'd been handed something over a counter and wasn't sure he'd paid for it." },
          { s: 'haechan', f: 'flustered', t: "...Happy new year." },
          { s: 'haechan', f: 'happy', t: "That was the first thing that happened to me this year. I'm counting from there." }
        ] }
      ] },
      { n: "They stayed until the frost got into the scarves. Going down, at the bottom of the stairs where he always stopped, he stopped, and then laughed at himself, short and flat, and kept going, and walked her to her door, and said goodnight through it after it had already closed, because he'd forgotten to say it before." }
    ] }
  ]);
})();

/* ── Run-ins with Haechan in town (format: living-runins.js header). ── */
(window.FEMC_GAME_RUNINS ||= []).push(

  { id: 'ri-hc-vending', who: 'haechan', where: { acts: ['vending'], areas: [], jobs: [] },
    flags: ['arrived-haechan'], after: '11/6', until: '12/20', scene: [
      { n: "Her can thudded into the flap, and while she was still crouched fishing it out, the machine at the end of the row thudded too, and kept thudding, one can after another, somebody feeding it coins with the steady rhythm of a person who'd decided not to think about money tonight." },
      { n: "It was Haechan, hood up, a small tower of identical cans already standing on the bench beside him, every one of them the pink peach soda with the cartoon fruit." },
      { s: 'haechan', f: 'flustered', t: "Don't. I know. I'm aware." },
      { s: 'haechan', f: 'neutral', t: "They're restocking the one at the dorm on Thursday. With something else. Something green. I heard the man say it. I'm getting this row before it goes too." },
      { ifHeading: 'R', then: [
        { s: 'haechan', f: 'neutral', t: "It's the wrong one. It's still the closest. I'm not having you go a week without the closest thing, princess. I've watched you go without. It's not pretty." }
      ], else: [{ ifHeading: 'S', then: [
        { s: 'haechan', f: 'happy', t: "In the other place you can't get anything from a machine. You walk down the hill to a shop where the man's been asleep since the Olympics and he sells you one can of coffee, warm, and calls you by somebody else's name. This is luxury. This is a miracle. I'm going to cry at it a little." }
      ], else: [
        { n: "Down the concourse a pack of guesthouse people went by toward the late train, loud, one of them shouting something about a crane machine, and Solar turned to watch them before she knew she had, and Haechan watched her turn." },
        { s: 'haechan', f: 'neutral', t: "Your people. Go on, if you want. I've got the cans. I can carry twelve. I've done the maths." }
      ] }] },
      { choose: [
        { t: "(Help him carry them.)", stat: { kindness: 1 }, then: [
          { n: "She took six. He took six. They walked back to the dorm in the cold with their arms full like two people who'd robbed a very sad shop, and he didn't say thank you, and at the door he stacked hers on top of his without a word, which was, she was starting to understand, how he said it." }
        ] },
        { t: "That's a lot of money on soda.", stat: { knowledge: 1 }, then: [
          { s: 'haechan', f: 'neutral', t: "Nine hundred yen." },
          { s: 'haechan', f: 'neutral', t: "I worked the crane game at the mall for a man who couldn't. He paid in coins. Don't ask about the crane. It was a whole thing." }
        ] }
      ] },
      { bond: { haechan: 1 } }
    ] },

  { id: 'ri-hc-karaoke', who: 'haechan', where: { acts: ['karaoke'], areas: [], jobs: [] }, slot: 'evening',
    flags: ['arrived-haechan'], after: '11/8', until: '12/20', scene: [
      { n: "On her way back down the corridor past the row of closed booths, every little door window lit a different color, one door at the very end stood propped open with a sneaker, and what was coming out of it stopped her where she stood." },
      { ifHeading: 'R', then: [
        { n: "It was nothing. A backing track, some slow ballad with the vocal taken out, playing loud to an empty microphone, and in the booth Haechan was sitting alone on the vinyl bench with his eyes shut and his head tipped, listening to the room listen to it." },
        { s: 'haechan', f: 'neutral', t: "Don't sing. You'll ruin it. I'm listening to how bad the speakers are." },
        { s: 'haechan', f: 'neutral', t: "Left one's blown. The room's all corners. Sing in here and it comes back at you in three pieces. I wanted to hear what this place does to a song before anybody's in it." }
      ], else: [{ ifHeading: 'S', then: [
        { n: "It was trot. An old one, the kind with a chorus like a gull coming down on a harbor, sung with the whole chest and a vibrato somebody had clearly learned in a car, and in the booth Haechan was standing on the vinyl bench with a microphone in each hand and his eyes shut, alone, giving all of it to an audience of nobody." },
        { n: "He saw her at the end of the chorus. He didn't stop. He held the second microphone out toward the door without missing a beat, with enormous seriousness, like a man passing on a torch." }
      ], else: [
        { n: "It was the booth next door, actually. A crowd of guesthouse boys from the school with a council, all singing a group song with choreography, badly, joyfully, and in the corridor with his back against their wall Haechan was sitting on the carpet with a can, listening through the plaster with his eyes half shut." },
        { s: 'haechan', f: 'neutral', t: "Your other lot. They're not bad. The one who's always eating is flat. Don't tell him. He's happy." },
        { s: 'haechan', f: 'neutral', t: "Go in if you want. They'd have you. I'm good out here. Best seat in the building. You can hear everyone and nobody makes you hold a mic." }
      ] }] },
      { choose: [
        { t: "(Stay and listen with him.)", stat: { kindness: 1 }, then: [
          { n: "She stayed. She sat down where he was, or near enough, and listened with him until the song ran out, and for four whole minutes in a karaoke place on a weeknight neither of them performed anything at all, which she suspected was the rarest thing that had ever happened in that building." }
        ] },
        { t: "(Sing one line. Just one.)", stat: { courage: 1 }, then: [
          { n: "She sang one line, quietly, under the music, a line she didn't know she knew, and he turned his head toward her so fast that she stopped. For a second his face did nothing at all. Then he looked away at the wall and told it, flatly, that she'd gone a quarter-tone sharp at the end and that it was the best thing he'd heard in this city, and then pretended he hadn't said the second half." }
        ] }
      ] },
      { bond: { haechan: 1 } }
    ] },

  { id: 'ri-hc-pier', who: 'haechan', where: { acts: ['pier', 'beachclean'], areas: [], jobs: [] }, slot: 'after',
    flags: ['arrived-haechan', 'arrived-yunjin'], after: '11/12', until: '12/20', scene: [
      { n: "On her way back along the seafront rail, the wind full of salt and the gulls arguing over something dead, she found two familiar backs at the very end of the pier, a yellow puffer and a black hoodie side by side at the railing and a careful foot apart, like two people who'd been told to share a bench and were doing it out of spite." },
      { s: 'yunjin', f: 'happy', t: "Sol! Come here. Settle something. He says the tide's going out. It's obviously coming in." },
      { s: 'haechan', f: 'neutral', t: "It's going out. Look at the posts. Look at the weed on the posts." },
      { s: 'yunjin', f: 'neutral', t: "I'm not looking at weed. I'm from a harbor. I can feel it." },
      { s: 'haechan', f: 'neutral', t: "We're from the same harbor, Jin." },
      { n: "Yunjin's voice was all gravel in the wind, and she said everything at him like a shove, and he took every shove the way a sea wall takes weather." },
      { ifHeading: 'R', then: [
        { s: 'yunjin', f: 'neutral', t: "Look at him. He's doing the quiet thing. He only does the quiet thing around you, you know. At home he's a car alarm with a haircut." },
        { s: 'haechan', f: 'neutral', t: "At home I'm a lot of things." },
        { s: 'yunjin', f: 'serious', t: "Yeah. That's what bothers me." }
      ], else: [{ ifHeading: 'S', then: [
        { n: "And then the two of them were off, loud, over the top of each other, about a fish man on a market street and the exact color of the mud below the sea wall in February, and Solar heard herself say *the ferry's at ten past*, out loud, into the wind, about a ferry she had never taken, and both of them stopped and looked at her." },
        { s: 'yunjin', f: 'surprised', t: "...Ten past. Yeah. It is." },
        { s: 'haechan', f: 'happy', t: "Told you. She knows the water better than both of us. She just doesn't know she does." }
      ], else: [
        { n: "Solar wasn't looking at the water. She was looking back over her shoulder, inland, toward the station and where the guesthouse would be if you could see that far, and Yunjin saw her do it, because Yunjin saw everything, and opened her mouth, and Haechan said her name once, low." },
        { s: 'haechan', f: 'neutral', t: "Jin." },
        { s: 'yunjin', f: 'neutral', t: "...Yeah. Okay. I'm leaving it. Look, I'm leaving it." },
        { n: "She left it. She put her arm through Solar's instead and held on, hard, the way you'd hold onto somebody on a boat." }
      ] }] },
      { choose: [
        { t: "It's coming in.", stat: { charm: 1 }, then: [
          { s: 'yunjin', f: 'happy', t: "Thank you. See? *See?*" },
          { s: 'haechan', f: 'neutral', t: "It's going out. You're both wrong. I'll come back at six and send you a picture." },
          { n: "He did, too. At ten past six that evening her phone buzzed with a photograph of a great deal of wet mud and a single word: *out*." }
        ] },
        { t: "(Lean on the rail between them.)", stat: { kindness: 1 }, then: [
          { n: "She wedged herself in between them at the railing and the careful foot of space closed up around her on both sides, and the three of them stood there in the wind not deciding anything about the tide, and Yunjin put her head on Solar's shoulder, and after a while, from the other side, so did the weight of somebody's arm against hers, warm through the hoodie, not quite by accident." }
        ] }
      ] },
      { bond: { haechan: 1 } }
    ] },

  { id: 'ri-hc-game-panic', who: 'haechan', where: { acts: ['arcade', 'crane'], areas: [], jobs: [] },
    flags: ['arrived-haechan'], events: ['a4-mark'], met: ['haechan', 'mark'], after: '11/20', until: '12/20', scene: [
      { n: "When she turned away from the machine, Game Panic had arranged itself, the way rooms sometimes did, into a standoff she hadn't noticed walking into. At the rhythm cabinet by the door Mark was hitting every note of a song on the hardest setting while a crowd of middle schoolers watched him like a god. At the old two-player shooter at the very back, Haechan was picking things off the far end of a screen alone. The whole length of the arcade was between them, and neither of them was looking at the other one so hard you could hear it." },
      { s: 'mark', f: 'neutral', t: "Sol! Hey. Come here, I need a witness, these kids think I'm cheating." },
      { n: "He called it warm and bright across the noise, the old way, and then seemed to hear the name a second after it was out and hesitate on it, like a foot on a stair that wasn't there, and it went into her where it always went. At the back of the room the shooter's gunfire paused, just for a second, one missed beat, and started again." },
      { ifHeading: 'R', then: [
        { s: 'mark', f: 'neutral', t: "He used to make me play the bass line on one of these. Back home. He'd stand behind me and tell me I was late. I was never late." },
        { s: 'mark', f: 'sad', t: "...I was a little late." },
        { n: "He said it to the cabinet, not to her, smiling at it with half his face, and went on hitting notes." }
      ], else: [{ ifHeading: 'S', then: [
        { n: "And then from the back of the room came a voice she'd heard sing to a dryer, loud and cheerful, yelling the length of the arcade that Mark's hands had always been slow and he should be ashamed of himself in front of children, and Mark turned around with his mouth open and stared toward the back like he'd heard a stranger use his name." },
        { s: 'mark', f: 'surprised', t: "Since when does he *shout*?" },
        { s: 'mark', f: 'neutral', t: "He doesn't shout. He's never shouted in his life. What happened to him over here?" }
      ], else: [
        { n: "At the crane machines in the middle, between the two of them, a pack of guesthouse boys from the school with a council were losing loudly at a plush, all elbows and accusations, a whole other table of noise that belonged to neither of these boys, and she felt her feet turn toward it before she'd decided anything." },
        { s: 'mark', f: 'neutral', t: "You know those guys?" },
        { s: 'solar', f: 'neutral', t: "...Kind of." },
        { n: "At the back, the gunfire stopped. Haechan was looking at her over the cabinet, and he lifted one hand off the plastic gun and pointed two fingers toward the cranes, the way you'd tell someone *that way*, and went back to his game." }
      ] }] },
      { choose: [
        { t: "(Play the rhythm game with Mark.)", stat: { proficiency: 1 }, then: [
          { n: "She played. She was terrible and Mark was kind about it, and the middle schoolers booed her with great affection, and halfway through the second song she looked up and found that Haechan had come halfway down the arcade with his hands in his pockets and was standing at a machine he wasn't playing, close enough to hear, watching the two of them with nothing at all on his face." },
          { s: 'mark', f: 'neutral', t: "...Hyuck. You want next?" },
          { s: 'haechan', f: 'neutral', t: "No." },
          { n: "He didn't leave, though." }
        ] },
        { t: "(Walk to the back and pick up the other gun.)", stat: { courage: 1 }, then: [
          { n: "She left Mark with a wave and walked the length of the arcade and picked up the stubby gun beside Haechan's, and he fed in a coin without looking at her. Behind them, she could feel it, Mark watched from the door for a while, and then turned back to his notes, and hit every single one." }
        ] }
      ] },
      { bond: { haechan: 1 } }
    ] },

  { id: 'ri-hc-coat', who: 'haechan', where: { acts: ['boutique'], areas: [], jobs: [] },
    flags: ['arrived-haechan', 'year-goes-on'], after: '12/22', until: '1/29', scene: [
      { n: "She came out of the fitting room in the third coat to find that the shop had acquired, while she was in there, Hanni, Hyein and Haechan, the last of whom was being held by both arms in front of a full-length mirror in a camel coat two sizes too long while Hyein pinned the hem up with her fingers and Hanni took photographs." },
      { s: 'hyein', f: 'serious', t: "Don't move. Sol. Sol, look at him. Look at him in a real coat." },
      { s: 'haechan', f: 'flustered', t: "I was walking past. I was walking past the *shop*. They came out and got me." },
      { s: 'hanni', f: 'happy', t: "We did. It was very fast. He didn't fight." },
      { ifHeading: 'R', then: [
        { s: 'hyein', f: 'neutral', t: "January back home is going to be brutal and he owns one jacket and it's at the bottom of somebody's bag where she can't wear it. We're fixing it. You're all coming home dressed." },
        { s: 'haechan', f: 'neutral', t: "I have a coat." },
        { s: 'hanni', f: 'neutral', t: "You gave it to her, Haechan." },
        { n: "He didn't argue with that. He looked at Solar in the mirror, past his own reflection, and she looked back, and Hanni lowered the phone very slowly, and then took one more picture." }
      ], else: [{ ifHeading: 'S', then: [
        { s: 'hyein', f: 'sad', t: "It's for the harbor. Okay? So he can hold your coat on the pier and look nice doing it. If I can't be there I want him to at least be *dressed*." },
        { n: "She said it bright and fast and her eyes went shiny on *can't*, and she bent to the hem so nobody would see, and Hanni put the phone away and laid her hand flat on Hyein's back, and Haechan stood very still in the camel coat and let them do whatever they needed to do to him." },
        { s: 'haechan', f: 'happy', t: "I'll wear it every day. Out of spite. Mrs. Bang will hate it." }
      ], else: [{ ifHeading: 'H', then: [
        { s: 'hanni', f: 'neutral', t: "It's a goodbye present. For him. We're going home and he's going home and you're going your way." },
        { s: 'hyein', f: 'sad', t: "Somewhere with student councils. Somewhere with a boy who irons his shirts. We know. We're fine. We're buying Haechan a coat about it." },
        { s: 'haechan', f: 'neutral', t: "That's how they process. They buy me things. Let them. It's free for me." }
      ], else: [{ ifHeading: 'true', then: [
        { s: 'hyein', f: 'happy', t: "It's for everywhere. All your everywheres. The coat's going to see the world, Sol." },
        { s: 'haechan', f: 'neutral', t: "The coat's going to see two harbors and a quad and it's going to need help." }
      ], else: [
        { s: 'hanni', f: 'neutral', t: "It's so we've all got something nice on for the platform. When we go. So you remember us looking good." },
        { n: "Hanni said it lightly and it landed like a stone in a pond, and the shop went quiet around it, and Haechan turned in the mirror to look at Solar and held his arms out a little, coat and all, like a man showing her the whole of something so she'd have it right later." }
      ] }] }] }] },
      { choose: [
        { t: "Take it in at the shoulders.", stat: { proficiency: 1 }, then: [
          { s: 'hyein', f: 'happy', t: "*Thank you.* Finally. Somebody with eyes." },
          { n: "Hyein took it in with her fingers and Haechan stood in the mirror being altered by three women at once with the stunned endurance of a cat in a sweater, and when they finally let him go he looked at himself for a long second and said nothing, and bought it." }
        ] },
        { t: "He looks good.", stat: { charm: 1 }, then: [
          { n: "It came out before she'd decided to say it. Hyein shrieked. Hanni took a picture of Haechan's face, which had gone completely blank the way it only did when something had gone straight through him, and later, on the walk home, sent it to Solar with no caption at all." }
        ] }
      ] },
      { bond: { haechan: 1 } }
    ] },

  { id: 'ri-hc-counter', who: 'haechan', where: { acts: [], areas: [], jobs: ['konbini', 'yeobos', 'chagall'] },
    flags: ['arrived-haechan', 'year-goes-on'], after: '12/22', until: '3/5', scene: [
      { n: "The bell over the door went for what felt like the hundredth time that shift, and she looked up with the customer smile already on, and it slid straight off again, because it was Haechan, in out of the cold with his ears wind-red, looking around the place like a man who'd been sent to inspect it." },
      { s: 'haechan', f: 'neutral', t: "Don't do the face. I've seen the face. You do it at people you're going to talk about later." },
      { ifHeading: 'R', then: [
        { n: "He put a black coffee on the counter. The worst one going, the one that had been sitting hot since the morning and smelled like it. He looked at it with deep, private satisfaction." },
        { s: 'haechan', f: 'neutral', t: "Not one word, princess." }
      ], else: [{ ifHeading: 'S', then: [
        { n: "He put four packets of cinnamon gum on the counter, then a fifth, then looked at the five and put down a sixth with an air of tragic decision." },
        { s: 'haechan', f: 'happy', t: "Stocking up. When I get back to the hill the shop man only sells mint, and mint's for quitters." },
        { s: 'solar', f: 'happy', t: "You *are* a quitter." },
        { s: 'haechan', f: 'happy', t: "I'm a *cinnamon* quitter. Completely different. Ring it up, agasshi." }
      ], else: [{ ifHeading: 'H', then: [
        { n: "He put two cans of the pink peach soda on the counter. Then, after a second's thought, a third." },
        { s: 'haechan', f: 'happy', t: "One's yours. One's mine. One's for whichever of your loud people texts you in capitals at midnight. I'm not jealous. I'm catering." }
      ], else: [{ ifHeading: 'true', then: [
        { n: "He put a black coffee on the counter and four packets of cinnamon gum beside it, and looked at the two things together like an argument he'd finally stopped having." },
        { s: 'haechan', f: 'happy', t: "Both. I buy both now. Don't make it a thing, princess. Agasshi. Whichever. Ring it up." }
      ], else: [
        { n: "He put one can of the pink peach soda on the counter. Just one. Then he pushed it across to her instead of paying for it." },
        { s: 'haechan', f: 'sad', t: "That's yours. For after your shift. For when I'm not around to buy the row. I'm practicing. Getting you used to one." }
      ] }] }] }] },
      { choose: [
        { t: "(Ring it up at full price. Exactly.)", stat: { proficiency: 1 }, then: [
          { n: "She rang it up at full price and counted his change out coin by coin into his palm, and he looked down at the coins and up at her with real respect, and said she was cold, and she said she was working, and he said those were the same thing, and left a single coin in the tip jar on his way out, face down, like a calling card." }
        ] },
        { t: "(Slip something extra into the bag.)", stat: { kindness: 1 }, then: [
          { n: "She dropped a wrapped sweet in with his things while he wasn't looking, and he found it outside on the step, she watched him find it through the glass, and he stood there in the cold holding it up to the streetlight like evidence, and then put it in his inside pocket, carefully, and walked off without turning round." }
        ] }
      ] },
      { bond: { haechan: 1 } }
    ] }
);
