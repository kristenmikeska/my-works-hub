/* Haechan, living world (days): sixteen everyday-life routines with Haechan in the dorm, appended to daily-life.js's list
   (same format and rules: core.js dailyLife / dailyFits). Eight small dorm moments (his habits, the household) and eight
   scenes with the people he knows from home (Hanni 2, Hyein 2, Yunjin 2, Jungwon 1, Mark 1, the Mark one gated on the
   optional a4-mark). Several react to story events (a4-sisters, a5-jungwon-awakens, a5-haechan-awakens, a5-footage,
   a5-call-runners, a6-remember, a6-new-year). Every entry needs a4-household-introductions; anything after 12/21 also
   needs the flag year-goes-on. No heading gate: every scene branches inside on heading() (R / S / H before the solstice;
   R / S / H / stay / true for any window that runs past 12/21), and on ifRomance 'haechan' after rank 8 (12/18).
   Windows are wide (25+ days) because routines play one every other day at most. Each ends with a small bond. */
(window.FEMC_GAME_DAILY_LIFE ||= []).push(

  // ── November ──────────────────────────────────────────────────────────────────────────────────────────────────────

  { id: 'hc-day-shoes', after: '11/6', until: '12/4', slot: 'early', schoolOnly: true, events: ['a4-household-introductions'],
    place: 'Iwatodai Dorm · Front', time: 'Early Morning', bg: 'iwotodaidorm-outside', scene: [
      { n: "Solar had decided to find out. That was the only reason she was standing in the dorm's front hall at twenty to six in her uniform, tie undone, eyes barely open, holding a slice of cold toast like an alibi. Every morning that week his shoes had already been gone from the rack by the time she came down, the gap they left in the row like a missing tooth, and nobody in the building knew where he went." },
      { n: "The shoes were still there. Black, scuffed white at the toes, laced loose so he could step into them without bending. Then the stairs creaked, and two people came down at once, which neither of them seemed to have planned. Akihiko in a track jacket, already pulling one arm across his chest, and a step behind him, hood up, Haechan, who looked at Solar and at the toast in her hand and didn't look surprised at all, which was somehow worse." },
      { s: 'akihiko', f: 'neutral', t: "You run?" },
      { s: 'haechan', f: 'neutral', t: "No." },
      { s: 'akihiko', f: 'serious', t: "Then where do you go at six?" },
      { s: 'haechan', f: 'neutral', t: "Out." },
      { n: "Akihiko waited, the way he waited for somebody in a ring to drop a guard, and Haechan stepped into his shoes without untying them and didn't drop anything. After a second Akihiko huffed something that wasn't quite a laugh and went out into the dark at a jog, and the cold came in where he'd been standing." },
      { choose: [
        { t: "Where do you actually go?", then: [
          { ifHeading: 'R', then: [
            { s: 'haechan', f: 'neutral', t: "The station. First train's at five fifty-two. Nobody on it. You can hear the whole car breathe." },
            { s: 'haechan', f: 'flustered', t: "It's a good room. That's all. Don't make it a thing, princess." },
            { n: "He said it like a confession and a weather report at the same time, and then heard how it had sounded, and looked at the door handle like it had said it instead of him." }
          ], else: [{ ifHeading: 'S', then: [
            { s: 'haechan', f: 'happy', t: "Down to the water. Somebody I know gets up at five to beat rugs off a balcony, and if I'm still in bed when she starts I hear about it for a week." },
            { n: "He said it loud and fond, a man complaining about his favorite person, and then remembered where he was, the dim hall, the shoe rack, and the warmth went back into his pocket with his hands." },
            { s: 'haechan', f: 'neutral', t: "Habit. There's no balcony here. I just walk till it's light." }
          ], else: [
            { s: 'haechan', f: 'neutral', t: "Past the guesthouse. The long way round." },
            { n: "She waited for the rest of it. He looked through the glass in the door, at the dark street, in the direction of the station and the tall lit block beside it where half the people who'd come looking for her slept." },
            { s: 'haechan', f: 'neutral', t: "Your people up there get up early. The loud one does stretches on the front step in a headband. I walk the other side of the road." },
            { s: 'haechan', f: 'sad', t: "They're yours. I'm just not one of them. That's fine. I like the walk." }
          ] }] }
        ] },
        { t: "(Hand him half the toast.)", stat: { kindness: 1 }, then: [
          { n: "She tore the toast in half and held it out. He looked at the bad edge where it had torn, and took it, and ate it in two bites on the step with one hand on the doorframe, and said nothing at all about it, which she was beginning to learn was how he said thank you." },
          { ifHeading: 'R', then: [
            { s: 'haechan', f: 'neutral', t: "Go back to bed, princess. You've got an hour. Don't waste it on the hallway." }
          ], else: [{ ifHeading: 'S', then: [
            { s: 'haechan', f: 'happy', t: "Agasshi. Bed. You've got an hour. If you're late, somebody's going to say it's my fault, and they'll be right." }
          ], else: [
            { s: 'haechan', f: 'happy', t: "Go back to bed. You've got an hour, and you're going to spend it at the guesthouse anyway. I can tell from the toast." }
          ] }] }
        ] }
      ] },
      { n: "He went. The door sighed shut behind him, and she stood in the hall with the crust in her hand and looked at the gap in the shoe rack the way you'd look at a chair somebody had just got up from, to see if it was still warm." },
      { bond: { haechan: 1 } }
    ] },

  { id: 'hc-day-standing', after: '11/9', until: '12/6', slot: 'evening', events: ['a4-household-introductions'],
    place: 'Iwatodai Dorm · Kitchen', time: 'Evening', bg: 'iwatodaidorm-kitchen', scene: [
      { n: "Fuuka had started setting a place for him. A bowl, chopsticks, a cup, the chair at the end nearest the stairs, laid out every night and left there while the rest of them ate, and every night he came down when everybody was nearly finished, filled his bowl from the pot, and ate it standing at the kitchen counter with his back to the table, as if the chair were a rumor." },
      { n: "Tonight Junpei had had enough." },
      { s: 'junpei', f: 'serious', t: "Dude. Sit. It's a chair. It doesn't bite. Do you know how sad it is, watching a chair wait for a guy every night?" },
      { s: 'haechan', f: 'neutral', t: "It's fine." },
      { s: 'fuuka', f: 'sad', t: "It's okay. I don't mind. I just thought... in case." },
      { n: "Haechan looked at Fuuka, and something in his face shifted, very slightly, the way a person shifts their weight when they realize they've been standing on somebody's foot." },
      { ifHeading: 'R', then: [
        { s: 'haechan', f: 'neutral', t: "Where I'm from there's a kitchen with nine guys in it and four chairs. Three are broken and one's got a guy asleep on it. You eat standing up or you don't eat." },
        { s: 'haechan', f: 'neutral', t: "It's not about your chair. It's a very good chair." }
      ], else: [{ ifHeading: 'S', then: [
        { s: 'haechan', f: 'neutral', t: "Where I'm from the family eats first. The rest of us eat after, in the kitchen. Standing, mostly. The housekeeper says sitting down makes you slow." },
        { n: "He said it easily, no complaint in it, the way you'd describe the weather in a town you grew up in, and Fuuka put her hand over her mouth, and Junpei looked at the chair like it had personally let somebody down." }
      ], else: [
        { s: 'haechan', f: 'sad', t: "I keep thinking somebody else is going to need it." },
        { n: "He didn't say who. He glanced once toward the lounge window, toward the street and the station and the guesthouse lit up beyond it, where the visitors went home at eight, and Solar had the odd feeling he was counting a table she couldn't see, and leaving a place at it that wasn't his." }
      ] }] },
      { choose: [
        { t: "(Hook the chair with your foot and drag it out.)", then: [
          { n: "She hooked the chair leg with her foot and dragged it out, loud on the floor, and left it sticking into the middle of the kitchen where nobody could pretend it wasn't there. He looked at it. He looked at her. Then he came and sat on it all at once, like a man sitting down on a bench in the rain, with his bowl held up near his chin." },
          { s: 'junpei', f: 'happy', t: "He SAT. Fuuka. Fuuka, he sat." },
          { s: 'haechan', f: 'flustered', t: "Don't narrate me." }
        ] },
        { t: "(Take your bowl and go stand at the counter next to him.)", stat: { charm: 1 }, then: [
          { n: "She took her bowl and went and stood at the counter beside him, her shoulder an inch from his, and ate standing up. After a minute Junpei did the same, complaining the whole way, and then Fuuka, apologizing, and then Akihiko, who had no idea what was happening but didn't want to be left out of it, until the entire dorm was eating at the counter and the table sat behind them with its one laid place like a joke nobody would explain." },
          { s: 'haechan', f: 'flustered', t: "...This is worse. You know that. You've made it worse." }
        ] }
      ] },
      { n: "Later, when the kitchen was empty, she noticed the bowl at the end of the table had been washed and dried and put back exactly where Fuuka had laid it, the chopsticks squared beside it. In case." },
      { bond: { haechan: 1 } }
    ] },

  { id: 'hc-day-tape-measure', after: '11/12', until: '12/12', slot: 'evening', events: ['a4-household-introductions'],
    place: 'Iwatodai Dorm · Lounge', time: 'Evening', bg: 'iwatodaidorm-livingroom-night', scene: [
      { n: "Hyein had a tape measure round her neck and the look in her eye that meant someone in the building was about to become a project. She had cornered Haechan at the foot of the stairs with a glass of water in his hand and no way past her that didn't involve lifting her bodily out of the way, which he was visibly considering." },
      { s: 'hyein', f: 'serious', t: "You came through a DRYER. In a HOODIE. It's NOVEMBER. You don't own a coat. I've seen your hooks. You have one hook and your headphones are on it." },
      { s: 'haechan', f: 'neutral', t: "I'm warm." },
      { s: 'hyein', f: 'serious', t: "You're not warm, you're stubborn. It's a different temperature. Arms out." },
      { n: "He put his arms out. On the sofa beside Hanni, Solar nearly choked on her tea. Hyein ran the tape across his shoulders and down one arm, muttering numbers like a spell, and he stood there with the water glass held out at the end of his hand like a man being knighted against his will." },
      { s: 'hyein', f: 'neutral', t: "Long arms. Fine. It's going to be dark, because you won't wear anything that isn't, and it's getting a deep pocket inside on the left, because last time I put you two in a hallway, you..." },
      { s: 'hanni', f: 'neutral', t: "Hyein." },
      { n: "Just her name, pleasant, from the sofa, without looking up from her magazine. Hyein's mouth shut so fast her teeth clicked. Haechan's arms stayed out. His face didn't move at all, but the tips of his ears did something." },
      { s: 'hyein', f: 'flustered', t: "...Put your hands in it. The pocket. Is what I was going to say. In the hallway. Of life." },
      { ifHeading: 'R', then: [
        { s: 'haechan', f: 'neutral', t: "Inside pocket's fine. Make it big enough for a can." },
        { s: 'hyein', f: 'surprised', t: "A can of WHAT?" },
        { s: 'haechan', f: 'neutral', t: "You know what." },
        { n: "Hyein looked at him, and then very slowly at Solar, and then back at him, and wrote something on the back of her hand in pen and underlined it twice." }
      ], else: [{ ifHeading: 'S', then: [
        { n: "And then he laughed. Not the flat one. A real one, loud and sudden, the kind you'd hear across a fish market, and Hyein jumped about a foot." },
        { s: 'haechan', f: 'happy', t: "Make it long. Down to here. I want to look like I'm going to a funeral and winning it." },
        { s: 'hyein', f: 'surprised', t: "Hanni. Who IS this? He's never said that many words in a row in his LIFE." }
      ], else: [
        { s: 'haechan', f: 'neutral', t: "Make hers first." },
        { s: 'hyein', f: 'neutral', t: "Hers is done. Hers has been done since September." },
        { s: 'haechan', f: 'sad', t: "Then make it warmer. She's going to stand outside that guesthouse some night arguing with a boy in a blazer, and she'll forget she's cold." },
        { n: "Hyein blinked at him. Solar didn't know what he meant, and from the way he went back to studying his water glass, she didn't think he'd meant to say it out loud." }
      ] }] },
      { choose: [
        { t: "Make me one too.", then: [
          { s: 'hyein', f: 'happy', t: "I'm making you four. You'll wear all of them. I've already bought the buttons." }
        ] },
        { t: "(Read Hanni's magazine. Don't look at his ears.)", then: [
          { n: "She looked at Hanni's magazine. It was upside down. Hanni turned it the right way round for her without a word, and kept reading, and smiled at the page." }
        ] }
      ] },
      { n: "When Hyein finally let him go he went up with his water, and the tape measure she'd hung round his neck at some point without his noticing turned up later on the banister at the top of the stairs, coiled neatly, the way you'd leave something for someone you'd decided not to argue with." },
      { bond: { haechan: 1 } }
    ] },

  { id: 'hc-day-pockets', after: '11/15', until: '12/12', slot: 'early', events: ['a4-household-introductions', 'a4-ferry'],
    place: 'Iwatodai Dorm · Kitchen', time: 'Early Morning', bg: 'iwatodaidorm-kitchen', scene: [
      { n: "Since the sea, Yunjin came down to breakfast differently, slower, with the air of somebody who'd walked into the water with nothing and come back out with something and wasn't going to discuss it before coffee. This morning she got as far as the kitchen door and stopped." },
      { n: "Haechan was at the counter, standing, eating rice straight out of the pot with the serving spoon." },
      { s: 'yunjin', f: 'serious', t: "Absolutely not. Bowl. Now. You're not in the shed." },
      { s: 'haechan', f: 'neutral', t: "Morning, Jin." },
      { n: "She didn't answer that. She walked straight up to him and put her hand flat into the front pocket of his hoodie, the way you'd check a little boy's pockets for frogs, and came out with a lighter, a crumpled receipt and a stick of cinnamon gum, and looked at all three on her palm like a customs officer." },
      { s: 'yunjin', f: 'serious', t: "Babe. I've known you since you carried my shopping with the wrong hand. Where are the cigarettes." },
      { ifHeading: 'R', then: [
        { s: 'haechan', f: 'neutral', t: "Don't have any. In this one I'm not pretending to quit. So I didn't bring a pack to pretend with." },
        { s: 'yunjin', f: 'surprised', t: "Since when are you not PRETENDING? Pretending is your whole personality. You chew that gum like it owes you money." },
        { s: 'haechan', f: 'neutral', t: "The other one of me chews the gum. This one's a lost cause. You'd hate him." },
        { s: 'yunjin', f: 'neutral', t: "...I would, actually. I'd hate him so much. Sol, is this one yours? This sounds like one of yours." }
      ], else: [{ ifHeading: 'S', then: [
        { s: 'haechan', f: 'happy', t: "Gone! Quitting! Three years! Ask anyone!" },
        { n: "He said it loud and delighted and enormously insincere, the way a boy answers his mother, and Yunjin put her other hand into his back pocket without even looking and came out with a crushed red packet with two left in it, and held it up between two fingers." },
        { s: 'yunjin', f: 'neutral', t: "Three years." },
        { s: 'haechan', f: 'happy', t: "Three years of TRYING, Jin. It's a process." },
        { n: "She put the packet in her own pocket and the gum back in his, and he let her, grinning, as if this were a game the two of them had been playing at some back door for a very long time." }
      ], else: [
        { s: 'haechan', f: 'neutral', t: "None. Not here." },
        { s: 'yunjin', f: 'neutral', t: "Mm. And where's she going every morning with her hair done? Not here either, I notice." },
        { s: 'haechan', f: 'sad', t: "The guesthouse. The cafe on the Strip. Wherever the blazer is." },
        { s: 'yunjin', f: 'serious', t: "You hate the blazer. And you're just letting her..." },
        { s: 'haechan', f: 'sad', t: "She's not mine to let, Jin." },
        { n: "Yunjin looked at him for a long second with the joke gone out of her face. Then she looked at Solar, who had been at that guesthouse twice already that week, and back at him, and for once didn't say anything at all, which from Yunjin was the loudest thing in the kitchen." }
      ] }] },
      { choose: [
        { t: "(Take the gum off Yunjin's palm. Split it with him.)", then: [
          { n: "She took the gum, broke it in half without looking, and gave him the bigger half. Yunjin watched her do it with her sunglasses halfway down her nose." },
          { s: 'yunjin', f: 'neutral', t: "Oh, so you do THAT here too. Unbelievable. In front of me." }
        ] },
        { t: "You two are like siblings.", then: [
          { s: 'yunjin', f: 'neutral', t: "We're like a cat and the dog it lives with. Guess which one I am." },
          { s: 'haechan', f: 'happy', t: "She's the cat. She sits on everything I need." }
        ] }
      ] },
      { n: "Yunjin got a bowl down from the cupboard, set it on the counter in front of him with a click, took the serving spoon out of his hand, filled the bowl, and stood there with her arms folded until he ate out of it like a person. He did. Solar had been trying for a week." },
      { bond: { haechan: 1 } }
    ] },

  { id: 'hc-day-in-front', after: '11/22', until: '12/1', slot: 'late', events: ['a4-household-introductions', 'a4-sisters'],
    place: 'Iwatodai Dorm · Laundry Room', time: 'Night · 3 AM', bg: 'iwatodaidorm-laundryroom', scene: [
      { n: "Since the night Hanni stood in front of her sister in the tower, she hadn't been sleeping much. None of them had said so. Hyein had stopped drying her hair at three, which was how Solar knew Hyein wasn't sleeping either; she just lay in the dark now and listened through the wall for Hanni's door." },
      { n: "So it was less of a surprise than it should have been, coming down to the laundry room at three, to find two people in it already. Haechan on the warm dryer, where he always was. Hanni on the folding table in pajamas and a cardigan, holding a mug of something that had stopped steaming a long time ago." },
      { s: 'hanni', f: 'happy', t: "Hi, Sol. He said I could stay if I didn't talk about my feelings." },
      { s: 'haechan', f: 'neutral', t: "I said you could stay if you didn't fold anything wrong." },
      { s: 'hanni', f: 'neutral', t: "With you that's the same thing." },
      { n: "Solar took the cold dryer. For a while nobody said anything, and the tube light hummed, and Hanni turned her mug round and round in her hands. When she spoke, it was to the mug, but it was meant for him." },
      { s: 'hanni', f: 'serious', t: "You'd have done it. What I did. Stood there." },
      { n: "Haechan pulled one side of his headphones off his ear, which he only did when he was really listening." },
      { ifHeading: 'R', then: [
        { s: 'haechan', f: 'neutral', t: "No. I'm not a stand-in-front guy. You've seen me at a party." },
        { s: 'haechan', f: 'neutral', t: "I'm the guy at the back who hears the room go wrong before it does. Then I get there." },
        { s: 'hanni', f: 'neutral', t: "You never get there. You stand in the doorway and look at your phone." },
        { s: 'haechan', f: 'serious', t: "I got there once. Halloween. You were there. You made me." },
        { n: "Hanni looked at him for a long moment, and then smiled, small and tired and real, the first one Solar had seen on her in days." }
      ], else: [{ ifHeading: 'S', then: [
        { s: 'haechan', f: 'neutral', t: "Where I'm from that's my whole job. Standing in front. Somebody pays me for it." },
        { s: 'hanni', f: 'surprised', t: "Pays you?" },
        { s: 'haechan', f: 'happy', t: "Badly. In rice and yelling." },
        { n: "He said it loud and easy and Hanni laughed despite herself, and then he stopped laughing all at once, the way he did, and looked at the floor between his feet." },
        { s: 'haechan', f: 'sad', t: "You did it for nothing. With nothing. That's different. That's better than me." }
      ], else: [
        { s: 'haechan', f: 'neutral', t: "I'd have tried. I'd have been late." },
        { s: 'haechan', f: 'sad', t: "Everybody who came for her came first. I came last. I'm always going to be the last one through the door." },
        { s: 'hanni', f: 'sad', t: "That's not a bad place to be." },
        { s: 'haechan', f: 'sad', t: "No. You get to see who she runs to." },
        { n: "He didn't look at Solar when he said it. He looked at the high wet window, at the dark beyond it, in the direction of the station." }
      ] }] },
      { choose: [
        { t: "(Swap Hanni's cold mug for a hot one. Bring three.)", stat: { kindness: 1 }, then: [
          { n: "She took the mug out of Hanni's hands and went up to the kitchen and came back with three hot ones, and gave Haechan the third without asking what he wanted. He looked into it. It was coffee. He drank it and didn't say anything, and Hanni watched him not say anything and then looked at Solar with her eyebrows very high." }
        ] },
        { t: "You were incredible, Hanni.", then: [
          { s: 'hanni', f: 'sad', t: "I was scared out of my mind." },
          { s: 'haechan', f: 'serious', t: "Same thing. Nobody tells you that. It's the same thing." }
        ] }
      ] },
      { n: "Hanni went up first, at four. On her way past the dryer she put her hand on the top of Haechan's head, briefly, the way you'd touch somebody's little brother, and he let her, which Solar wouldn't have believed if she hadn't been sitting right there." },
      { bond: { haechan: 1 } }
    ] },

  { id: 'hc-day-two-meters', after: '11/29', until: '12/26', slot: 'evening', events: ['a4-household-introductions', 'a5-jungwon-awakens'],
    place: 'Iwatodai Dorm · Kitchen', time: 'Evening', bg: 'iwatodaidorm-kitchen', scene: [
      { n: "Jungwon had been at the dorm since four, on the whiteboard under VISITORS in Mitsuru's handwriting with 8:00 beside his name, underlined, because Mitsuru underlined the times of people she suspected of staying late out of politeness. He'd sat through a briefing. He'd taken notes. Now he was in the kitchen making tea, sleeves turned back exactly twice, his watch lying face up on the counter beside the kettle, saying a minute to midnight at a quarter past seven in the evening." },
      { n: "Haechan came in for water. Saw him. Didn't stop walking, quite, but his next step was shorter than the last." },
      { s: 'jungwon', f: 'neutral', t: "Donghyuck." },
      { s: 'haechan', f: 'neutral', t: "Yang." },
      { n: "That was all, for a while. Haechan got a glass from the left. Jungwon poured the water off the leaves. They stood two meters apart at the same counter with their backs to each other, and the kitchen got colder, which Solar, at the table with her homework, felt on the back of her neck like a window somebody had left open." },
      { s: 'jungwon', f: 'neutral', t: "Your light is on at three. I can see it from the guesthouse." },
      { s: 'haechan', f: 'neutral', t: "Yours is on at four. I walk past it." },
      { s: 'jungwon', f: 'neutral', t: "How kind of you to notice." },
      { s: 'haechan', f: 'neutral', t: "It wasn't kind." },
      { ifHeading: 'R', then: [
        { s: 'jungwon', f: 'neutral', t: "You sound different lately. You don't sound like the house." },
        { s: 'haechan', f: 'serious', t: "I sound like somewhere you've never been, Yang. Somewhere you're not." },
        { s: 'jungwon', f: 'neutral', t: "Then I'm glad for you. Truly." },
        { n: "He said it so courteously that Solar's pencil stopped moving on the page. She had learned, without knowing how, that Yang Jungwon got more polite the angrier he got, and this was very polite indeed." }
      ], else: [{ ifHeading: 'S', then: [
        { s: 'haechan', f: 'neutral', t: "In the other place there'd be a man outside your door all night. I'd be the man." },
        { s: 'jungwon', f: 'neutral', t: "And here?" },
        { s: 'haechan', f: 'neutral', t: "Here I'm the guy upstairs. And you go home at eight." },
        { n: "Jungwon set the teapot down without a sound. His dimples showed, briefly, and meant nothing whatsoever." }
      ], else: [{ ifHeading: 'H', then: [
        { s: 'haechan', f: 'neutral', t: "You're in all of hers I'm not in." },
        { s: 'jungwon', f: 'neutral', t: "...Yes." },
        { s: 'haechan', f: 'serious', t: "Then don't be careless with it." },
        { s: 'jungwon', f: 'serious', t: "I have never once in my life been careless." },
        { s: 'haechan', f: 'neutral', t: "I know. That's why I can't stand you." },
        { n: "Neither of them turned round. Solar had the strangest feeling that something had just been handed across the kitchen behind her back, heavy and fragile, and that both of them would have denied it under oath." }
      ], else: [{ ifHeading: 'stay', then: [
        { s: 'jungwon', f: 'neutral', t: "She's staying." },
        { s: 'haechan', f: 'neutral', t: "Yeah." },
        { s: 'jungwon', f: 'sad', t: "Then neither of us was reason enough to go." },
        { s: 'haechan', f: 'neutral', t: "First thing you've said I agree with. Don't get used to it." }
      ], else: [
        { s: 'jungwon', f: 'neutral', t: "All of it, then. Every world at once, I'm told. Including the ones with you in them." },
        { s: 'haechan', f: 'neutral', t: "Including the ones with you in them. I'll live." },
        { s: 'jungwon', f: 'neutral', t: "So will I. Somehow." }
      ] }] }] }] },
      { choose: [
        { t: "(Get a third cup. Set one at each end of the counter.)", stat: { kindness: 1 }, then: [
          { n: "She got up and took a third cup down and poured from Jungwon's pot without asking, and set one in front of each of them at opposite ends of the counter, a precise two meters apart. Jungwon said thank you in the voice he used for formal correspondence. Haechan drank his, though he hated tea, she somehow knew he hated tea, and didn't make a face, which was its own kind of argument." }
        ] },
        { t: "Are you two always like this?", then: [
          { s: 'jungwon', f: 'neutral', t: "Yes." },
          { s: 'haechan', f: 'neutral', t: "Yes." },
          { n: "They had said it at exactly the same time. Both of them looked deeply annoyed about it." }
        ] }
      ] },
      { n: "At eight exactly Jungwon put his watch back on, rinsed his cup, turned it upside down on the rack, inclined his head to Solar, and went home to the guesthouse without looking at Haechan once. Haechan stood at the kitchen window and watched him all the way to the corner, the way you'd watch weather leave, and only went upstairs when he'd gone round it." },
      { bond: { haechan: 1 } }
    ] },

  // ── December ──────────────────────────────────────────────────────────────────────────────────────────────────────

  { id: 'hc-day-four-bars', after: '12/26', until: '3/2', slot: 'evening', events: ['a4-household-introductions'], flags: ['year-goes-on'],
    place: 'Iwatodai Dorm · Lounge', time: 'Evening', bg: 'iwatodaidorm-livingroom-night', scene: [
      { n: "Haechan had decided at some point that the household's towels were his problem. Nobody had asked him to. They just started coming back from the dryer folded into identical bricks, corners squared, and tonight he was doing it in the lounge, on the coffee table, a basket of everyone's at his feet, while Kuromi sat on the arm of the sofa watching him like a guard dog watching a burglar who'd brought his own ladder." },
      { s: 'kuromi', f: 'serious', t: "Why are you folding MY towel. Is this a threat. Is this a punk thing. Because I know punk things, and this is NOT one." },
      { s: 'haechan', f: 'neutral', t: "It was on the floor." },
      { s: 'kuromi', f: 'flustered', t: "It was on the floor ON PURPOSE." },
      { ifMet: 'mymelody', then: [
        { n: "There was a pink one in the pile too, from the room next to Kuromi's, and he folded it, for reasons nobody would ever get out of him, into something with two long ears, and set it on top of the stack. Kuromi stared at it and said nothing, very loudly." }
      ] },
      { n: "And at the far end of the sofa, Aigis, who had been watching him for nine days without the faintest attempt to hide it, turned her head toward him and finally spoke." },
      { s: 'aigis', f: 'neutral', t: "You hum four more bars than she does." },
      { n: "Haechan's hands stopped on a corner. Solar, in the armchair, stopped turning the page she wasn't reading." },
      { s: 'aigis', f: 'neutral', t: "Solar hums the same song every day. It stops in the same place. You hum it too, at night, in the laundry room, through two floors. You do not stop there. You go four bars further, and then you stop. I would like to know what happens after the four bars." },
      { ifHeading: 'R', then: [
        { s: 'haechan', f: 'neutral', t: "Nothing yet. That's where the track ends. I haven't finished it." },
        { s: 'aigis', f: 'neutral', t: "Why not?" },
        { s: 'haechan', f: 'sad', t: "Lost the thing I was writing it about. Then I found it. Now I'm scared of finishing, so I don't." },
        { n: "He said it to Aigis in the dry flat voice, every word handed over like it cost money, as if a machine were the only safe person in the building to tell, and then he heard Solar not turning her page, and his ears went red." }
      ], else: [{ ifHeading: 'S', then: [
        { s: 'haechan', f: 'happy', t: "After the four bars it turns into a trot song. I'm joking. I'm not joking. It turns into something a man sings in a car with the windows down, and I'm not allowed to change the station." },
        { s: 'aigis', f: 'serious', t: "That is not how music works." },
        { s: 'haechan', f: 'happy', t: "It's how that car works." }
      ], else: [{ ifHeading: 'H', then: [
        { s: 'haechan', f: 'sad', t: "After the four bars it's somebody else's." },
        { s: 'aigis', f: 'neutral', t: "Whose?" },
        { s: 'haechan', f: 'sad', t: "Whoever she goes home to. I can write it up to there. I can't write the part I'm not in." },
        { n: "Aigis tilted her head and filed that somewhere, and Solar sat very still in the armchair with the page she wasn't reading." }
      ], else: [{ ifHeading: 'stay', then: [
        { s: 'haechan', f: 'neutral', t: "After the four bars it's this room. The fridge. The stairs. Junpei snoring. I'm going to record it before I go, so she's got the end." },
        { s: 'aigis', f: 'sad', t: "You will not be here for the end." },
        { s: 'haechan', f: 'neutral', t: "No. That's the point. It's hers." }
      ], else: [
        { s: 'haechan', f: 'happy', t: "After the four bars it's everything at once. Snow and a car radio and this sofa. It's a mess. It sounds like a house with too many people in it." },
        { s: 'aigis', f: 'happy', t: "I would like to hear it." },
        { s: 'haechan', f: 'neutral', t: "Get in line. There's a line." }
      ] }] }] }] },
      { choose: [
        { t: "Aigis. Have you been counting how often I hum?", then: [
          { s: 'aigis', f: 'neutral', t: "Yes. Fourteen times on Tuesday. Eleven yesterday. It goes down when you are happy. I have not yet determined why." },
          { s: 'haechan', f: 'neutral', t: "When she's happy she sings the words. You just don't know them yet." }
        ] },
        { t: "(Hum it yourself. Don't stop where it stops.)", stat: { charm: 1 }, then: [
          { n: "She hummed it, up to the place it always stopped, and then, without deciding to, four more bars. They came out of her as if they'd always been there. Aigis turned her head from her to Haechan and back. Haechan stood holding a towel by two corners and didn't move at all." },
          { s: 'aigis', f: 'happy', t: "...Now there are two of you who know it." },
          { s: 'kuromi', f: 'surprised', t: "Know WHAT? What did I miss? Why is everybody's face like that?" }
        ] }
      ] },
      { n: "He finished the basket. He went up. Halfway up the stairs, through the ceiling, Solar heard him hum it once more, to the place it stopped, and four bars, and no further." },
      { bond: { haechan: 1 } }
    ] },

  { id: 'hc-day-open-door', after: '12/6', until: '1/8', slot: 'late', events: ['a4-household-introductions', 'a5-haechan-awakens'],
    place: 'Iwatodai Dorm · 3F Hallway', time: 'Late Night', bg: 'iwatodaidorm-hallway', scene: [
      { n: "The door at the end of the top floor was open." },
      { n: "It had been open since the tower. Not wide. A hand's width, a line of lamplight on the hallway carpet, like a room that had been holding its breath since November and had finally let some of it out. Junpei had walked past it four times the first day to make sure it was real. Koromaru had walked in on the second and come back out with a sock, and been allowed to keep it." },
      { n: "She came up at midnight with nowhere to be and ended up at the end of the hall anyway. The radiator inside was knocking. It always knocked, three times, a pause, twice, like somebody downstairs wanting to be let in. He was on the floor with his back against the bed, laptop on his knees, the heavy black headphones on, and his jacket hung on the back of the chair with the left pocket pulled down by something heavy inside it." },
      { s: 'haechan', f: 'neutral', t: "It's open. You can come in. That's what open means." },
      { ifHeading: 'R', then: [
        { s: 'haechan', f: 'neutral', t: "Radiator's a B-flat. Three and two. I've been sampling it. It's going in the track. Don't tell Mitsuru, she'll get it fixed and I'll lose my drummer." }
      ], else: [{ ifHeading: 'S', then: [
        { s: 'haechan', f: 'happy', t: "Sit anywhere. Not the bed, the bed's sacred. I make it every morning like I'm in the army. Somebody I know checks." },
        { n: "It was made. Corners squared, the blanket tucked so tight she could have bounced a coin off it, in a room that otherwise looked like nobody lived in it at all." }
      ], else: [{ ifHeading: 'H', then: [
        { s: 'haechan', f: 'neutral', t: "Door's open because I'm done pretending I'm not here. Doesn't mean I think you're staying." },
        { n: "He said it to the screen, mildly, like a forecast for somewhere else, and moved over on the floor to make room." }
      ], else: [{ ifHeading: 'stay', then: [
        { s: 'haechan', f: 'neutral', t: "It stays open till I'm gone. Then somebody else can have the room. It's a good room. The radiator's a liar, but it's a good room." }
      ], else: [
        { s: 'haechan', f: 'neutral', t: "Radiator plays both of them. I don't know how. Three for one place, two for the other. I've stopped asking it to choose." }
      ] }] }] }] },
      { choose: [
        { t: "(Sit on the floor next to him.)", then: [
          { n: "She sat on the floor with her back against the bed, a hand's width from him, the same hand's width the door was open. He pushed one side of the headphones off his ear and held it toward her without looking, and she leaned in, and it was the radiator, three and two, laid under something slow, and under that the long sigh of the dorm's front door, and she sat there and listened to the building she lived in turned into a song." }
        ] },
        { t: "Why don't you get the radiator fixed?", then: [
          { s: 'haechan', f: 'neutral', t: "Because it knocks. Nobody else in this building knocks. Everybody just walks in." },
          { s: 'haechan', f: 'neutral', t: "...It's nice. Something asking first." }
        ] }
      ] },
      { n: "She left at one. He didn't close the door behind her. In the morning, going down, she passed it again, still open the same hand's width, the bed made, the room empty, and his shoes still in the rack at seven, for once, as if he'd finally decided it was safe to sleep in." },
      { bond: { haechan: 1 } }
    ] },

  { id: 'hc-day-filter', after: '12/8', until: '1/6', slot: 'early', events: ['a4-household-introductions', 'a5-footage'],
    place: 'Iwatodai Dorm · Kitchen', time: 'Early Morning', bg: 'iwatodaidorm-kitchen', scene: [
      { n: "She hadn't slept. Minji's camera had been under her pillow all night like a stone, and at six she gave up and went down in her socks to do something with her hands, and he was already in the kitchen, at the counter, with the kettle going and a paper filter balanced in a funnel over a mug, which was not a thing she had known the dorm owned." },
      { s: 'haechan', f: 'neutral', t: "Don't say anything." },
      { s: 'solar', f: 'neutral', t: "I didn't." },
      { s: 'haechan', f: 'happy', t: "Your face was getting ready to. I could hear it." },
      { n: "He poured the water in a slow circle, slower than anybody needed to, watching it drip through, and when it was done he pushed the mug across the counter to her instead of keeping it, and started another." },
      { n: "He didn't ask why she was up. He looked at her once, at her eyes, at whatever the night had done to them, and then back at the filter, and she understood that he wasn't going to ask. Not today. Not ever, unless she put it in his hands herself." },
      { choose: [
        { t: "Have you ever seen something you couldn't explain?", then: [
          { ifHeading: 'R', then: [
            { s: 'haechan', f: 'neutral', t: "Every day since a dryer at three in the morning, princess." },
            { s: 'haechan', f: 'serious', t: "You don't have to explain it to me. I'm not the guy you explain things to. I'm the guy who already knows something's wrong with the room." }
          ], else: [{ ifHeading: 'S', then: [
            { s: 'haechan', f: 'happy', t: "Agasshi, I live in a shed at the bottom of a garden and a man who runs half a port calls me son. I stopped asking for explanations years ago. I just eat the rice." },
            { s: 'haechan', f: 'neutral', t: "Drink that. You'll explain it when you want to. Or you won't." }
          ], else: [{ ifHeading: 'H', then: [
            { s: 'haechan', f: 'neutral', t: "Yeah. You, mostly." },
            { s: 'haechan', f: 'neutral', t: "Whatever you saw, it's yours. You don't owe it to the first person standing in the kitchen. Even if it's me. Especially if it's me." }
          ], else: [{ ifHeading: 'stay', then: [
            { s: 'haechan', f: 'neutral', t: "Lots of things. I stopped needing them explained. You're allowed to keep a thing and not hand it in." }
          ], else: [
            { s: 'haechan', f: 'neutral', t: "Everything, lately. It's fine. It's better with coffee. Most things are." }
          ] }] }] }] }
        ] },
        { t: "(Drink it. Say nothing.)", then: [
          { n: "She drank it. It was very good, which annoyed her for reasons she couldn't name, and he watched her find out it was good and turned back to the kettle with the face of a man who'd won something small and wasn't going to mention it, and didn't." },
          { ifHeading: 'R', then: [
            { s: 'haechan', f: 'neutral', t: "It's the filter. Don't ask me about the filter. I'll talk for an hour and then I'll have to leave the country." }
          ], else: [{ ifHeading: 'S', then: [
            { s: 'haechan', f: 'happy', t: "Better than the stuff in the car flask, right? Don't tell the man who drinks the car flask. He thinks it's the best coffee in Incheon." }
          ], else: [{ ifHeading: 'H', then: [
            { s: 'haechan', f: 'neutral', t: "Drink it slow. Wherever you're going today, they'll have worse." }
          ], else: [{ ifHeading: 'stay', then: [
            { s: 'haechan', f: 'neutral', t: "I'm leaving the filter here when I go. Somebody in this building should know how to do this." }
          ], else: [
            { s: 'haechan', f: 'neutral', t: "Good, right. It's good everywhere. That's the one thing I can promise you about everywhere." }
          ] }] }] }] }
        ] }
      ] },
      { n: "When she went back up to get dressed, the second mug was on the floor outside her door with a saucer on top to keep it warm. He'd made that one for her too. She hadn't heard him come up the stairs. She never did." },
      { bond: { haechan: 1 } }
    ] },

  { id: 'hc-day-boss', after: '12/12', until: '1/10', slot: 'after', offOnly: true, events: ['a4-household-introductions'],
    place: 'Iwatodai · Riverside', time: 'Daytime', bg: 'park-2', scene: [
      { n: "Koromaru had chosen. Nobody had asked him to. Ken held the lead, technically, but for weeks now the dog had walked the whole length of the river path pressed against Haechan's left leg, as if Haechan were the one being walked and needed watching, and today Ken had simply handed the lead over at the door and said, with enormous dignity, that he had homework." },
      { n: "So it was the three of them on the river path in the cold, the water flat and gray, joggers going past in pairs, and Haechan holding the lead loose in his right hand and not using it at all." },
      { s: 'haechan', f: 'happy', t: "He doesn't need a lead. He's Boss. Boss goes where Boss goes. I'm staff." },
      { n: "Koromaru looked back at the sound of his title and huffed, once, a noise of deep professional approval, and kept going." },
      { ifHeading: 'R', then: [
        { s: 'haechan', f: 'neutral', t: "Where I'm from there's a house full of guys and nobody's really in charge. Your brother is, technically. He's out of town half the time and the rest of them go feral." },
        { s: 'haechan', f: 'neutral', t: "I like a building where it's obvious who's boss. It's a dog. Fine. I'm not proud." }
      ], else: [{ ifHeading: 'S', then: [
        { s: 'haechan', f: 'happy', t: "Every house needs a dog that isn't me. Back home I'm the dog. Here I get to walk one. It's a promotion." },
        { n: "He said it so cheerfully that a passing jogger looked round, and Solar laughed out loud, and Koromaru stopped dead in the middle of the path to look at them both like they'd embarrassed him in front of the river." }
      ], else: [{ ifHeading: 'H', then: [
        { s: 'haechan', f: 'neutral', t: "He walks you to the guesthouse, you know. Every time you go. Halfway. Then he sits at the corner and waits." },
        { s: 'haechan', f: 'neutral', t: "Smart dog. Knows where his part stops. Goes as far as he's allowed and lets you do the rest." },
        { n: "He wasn't talking about the dog. They both knew he wasn't talking about the dog, and Koromaru, who knew everything, leaned his whole weight against Haechan's shin and stayed there." }
      ], else: [{ ifHeading: 'stay', then: [
        { s: 'haechan', f: 'sad', t: "He'll walk you after I'm gone. I've told him. Sundays, this path, past the bench, home by four." },
        { n: "Koromaru looked up at him, and Haechan looked down, and some agreement passed between them that Solar wasn't party to and couldn't have broken if she'd tried." }
      ], else: [
        { s: 'haechan', f: 'happy', t: "Boss runs this building. Somebody else runs a port. Somebody else runs a frat. I work for all of them. Most employed man in three cities." }
      ] }] }] }] },
      { choose: [
        { t: "(Let Koromaru choose the way home.)", stat: { kindness: 1 }, then: [
          { n: "She let him choose. He chose the long way, past the bench under the bridge to the vending machine at the foot of the steps, where he sat down and looked at the machine and then at Haechan, pointedly, until Haechan bought a bottle of water and poured it into his own cupped hand and stood there with his hand held out in the cold while Boss took his time." }
        ] },
        { t: "Does he call you anything back?", then: [
          { s: 'haechan', f: 'happy', t: "Yeah. He calls me *that one*. With his eyebrows." },
          { n: "Koromaru, hearing this, lifted his eyebrows. Solar had to sit down on the river wall." }
        ] }
      ] },
      { n: "At the dorm door Koromaru stopped and looked up at Haechan, and waited, and Haechan unclipped the lead. The dog went in first. Haechan held the door for him the way you'd hold a door for somebody important, and then, a second later, for her." },
      { bond: { haechan: 1 } }
    ] },

  { id: 'hc-day-verdict', after: '12/19', until: '1/14', slot: 'evening', events: ['a4-household-introductions', 'a5-call-runners'],
    place: 'Iwatodai Dorm · Lounge', time: 'Evening', bg: 'iwatodaidorm-livingroom-night', scene: [
      { n: "Hyein had not forgiven him for the hallway. *Not my call.* Twice. She'd done it for Hanni nineteen times since, in increasingly accurate impressions, and for days she'd passed him on the stairs with her chin up like a duchess passing a puddle." },
      { n: "Tonight she came into the lounge with a basket of sewing on her hip, saw Solar on the sofa, saw Haechan on the arm of the chair by the stairs, saw something go between the two of them, and stopped dead in the doorway." },
      { s: 'hyein', f: 'surprised', t: "Something happened." },
      { s: 'hanni', f: 'neutral', t: "Nothing happened. Go in, you're blocking the door." },
      { s: 'hyein', f: 'serious', t: "Something HAPPENED. Look at them. Look at his ears. Hanni, look at his EARS." },
      { ifRomance: 'haechan', then: [
        { n: "His ears, it was true, were doing something. Solar's face, she could feel, was doing something worse. Hyein looked from one to the other, and her mouth fell open, and the basket hit the floor." },
        { s: 'hyein', f: 'happy', t: "Oh my God. Oh my GOD. AGAIN? You did it AGAIN? In a whole different..." },
        { s: 'hanni', f: 'serious', t: "Hyein." },
        { s: 'hyein', f: 'happy', t: "...weather. A whole different weather. I'm talking about the weather. It's been so nice. I'm so happy for the weather." },
        { s: 'haechan', f: 'neutral', t: "Thanks, Hyein." },
        { s: 'hyein', f: 'flustered', t: "I still haven't forgiven you for the hallway. I'm just also going to cry a little. Separately." },
        { n: "She did, a little, on Hanni's shoulder, while Hanni patted her back and looked at Solar over the top of Hyein's head with the expression of a woman who had known all along, had been sworn not to say, and was finally allowed to look smug about it." }
      ], else: [
        { n: "Haechan looked at Hyein. Hyein looked at Solar. Solar, for some reason, looked at the ceiling." },
        { s: 'haechan', f: 'neutral', t: "We're friends." },
        { n: "It landed in the lounge like a dropped tray." },
        { s: 'hyein', f: 'surprised', t: "Friends." },
        { s: 'haechan', f: 'neutral', t: "She said my name. Then she stayed on her side of the dryer. It was very respectful. I've never been so respected in my life." },
        { s: 'hyein', f: 'serious', t: "FRIENDS? YOU? After the... after you... Hanni, after the HALLWAY?" },
        { s: 'hanni', f: 'neutral', t: "It's her call, Hyein." },
        { s: 'hyein', f: 'serious', t: "I KNOW it's her call! I'm not mad at HER, I'm mad on his BEHALF! He's been folding her socks since NOVEMBER!" },
        { s: 'hyein', f: 'serious', t: "And you've got the face of a man who brought two cans to a funeral." },
        { s: 'haechan', f: 'neutral', t: "I did bring two cans. She drank both." },
        { n: "Hyein made a noise like a kettle reaching a decision and threw a pincushion at him. He caught it without looking and handed it back, politely, and that, somehow, made it so much worse." }
      ] },
      { choose: [
        { t: "Hyein. Breathe.", then: [
          { s: 'hyein', f: 'serious', t: "I'm BREATHING. I'm breathing so much. I'm breathing for all three of you." }
        ] },
        { t: "(Pick up her basket and hand it back to her.)", stat: { kindness: 1 }, then: [
          { n: "She picked the basket up off the floor, put the spilled spools back in it, and handed it over. Hyein took it and hugged it to her chest and looked at Solar over the top of it with her eyes very bright, like a girl who'd been handed back something she'd dropped a long time ago." }
        ] }
      ] },
      { ifHeading: 'R', then: [
        { s: 'hyein', f: 'neutral', t: "Fine. FINE. But you're both coming home with us. I'm not losing anybody else to a dryer." },
        { s: 'haechan', f: 'neutral', t: "Yeah. That's the plan." }
      ], else: [{ ifHeading: 'S', then: [
        { s: 'hyein', f: 'sad', t: "...You're going to the other one. Aren't you. Both of you. The one with the harbor." },
        { s: 'haechan', f: 'sad', t: "Looks like it." },
        { s: 'hyein', f: 'serious', t: "Then you'd better make her wear a coat there. I'll send patterns. I don't know how. I'll find a way." }
      ], else: [{ ifHeading: 'H', then: [
        { s: 'hyein', f: 'sad', t: "She's going somewhere neither of us is. Isn't she." },
        { s: 'haechan', f: 'sad', t: "Yeah." },
        { s: 'hyein', f: 'sad', t: "And you're just letting her." },
        { s: 'haechan', f: 'serious', t: "It's not letting. She's not mine to let. You told me to tell her to come home. I'm not telling her anything. That's the most I've got." },
        { n: "Hyein looked at him for a long moment with her eyes wet. Then she went and sat on the arm of his chair, where there was no room at all, and leaned on him, and he let her." }
      ], else: [{ ifHeading: 'stay', then: [
        { s: 'hyein', f: 'sad', t: "She's staying here. Isn't she. With the boxer." },
        { s: 'haechan', f: 'neutral', t: "With all of them. It's a good house." },
        { s: 'hyein', f: 'serious', t: "You're allowed to be sad about it, you know." },
        { s: 'haechan', f: 'neutral', t: "I know. I'm allowed. She's allowed. Everybody's allowed. It's very generous around here." }
      ], else: [
        { s: 'hyein', f: 'happy', t: "Okay, but which one are we going HOME to? Because I keep being told all of them, and that's not an answer, that's a buffet." },
        { s: 'haechan', f: 'happy', t: "All of them. Get a bigger plate." }
      ] }] }] }] },
      { bond: { haechan: 1 } }
    ] },

  // ── Winter break and January ──────────────────────────────────────────────────────────────────────────────────────

  { id: 'hc-day-tables', after: '12/25', until: '2/28', slot: 'after', offOnly: true, flags: ['year-goes-on'],
    events: ['a4-household-introductions', 'a6-remember'],
    place: 'Iwatodai Dorm · Front', time: 'Daytime', bg: 'iwotodaidorm-outside', scene: [
      { n: "The two tables Mitsuru had borrowed for the bounenkai were still folded against the lounge wall like tired guests, and on a quiet afternoon she taped a note to them in her handwriting. *Kirijo Guesthouse. Today. Please.* The please was underlined, which in Mitsuru's handwriting was a threat." },
      { n: "Akihiko took one end of the first table without being asked. Haechan took the other end without being asked either, and the two of them carried it down the front steps and out the gate into the cold like men carrying something that had insulted them, perfectly in step, not speaking, while Solar followed with the legs." },
      { s: 'akihiko', f: 'neutral', t: "You're holding it too low." },
      { s: 'haechan', f: 'neutral', t: "You're holding it too high, Protein. It's a table. It goes in the middle." },
      { s: 'akihiko', f: 'serious', t: "Stop calling me that." },
      { s: 'haechan', f: 'neutral', t: "It's a compliment. I don't give a lot of those. Ask anybody." },
      { ifRomance: 'haechan', then: [
        { n: "Akihiko glanced back at Solar following with the legs, and then at Haechan, and then very carefully at the table, like a man who had been told something by Junpei that he'd rather not have been told, and was being extremely mature about it." }
      ], else: [
        { s: 'akihiko', f: 'neutral', t: "Junpei says you two are friends." },
        { s: 'haechan', f: 'neutral', t: "Junpei says a lot of things." },
        { s: 'akihiko', f: 'neutral', t: "He says you said it with a straight face." },
        { s: 'haechan', f: 'neutral', t: "I say everything with a straight face, Protein. It's the only face I've got." }
      ] },
      { ifHeading: 'R', then: [
        { s: 'akihiko', f: 'neutral', t: "Going back, then. That's what I heard. Somewhere cold." },
        { s: 'haechan', f: 'neutral', t: "Brick. Snow. She'll forget her coat." },
        { s: 'akihiko', f: 'neutral', t: "She always does." },
        { n: "They looked at each other over the table, two men who had each watched her forget it, and for one second agreed on something. Then Akihiko lifted his end too high again, on purpose." }
      ], else: [{ ifHeading: 'S', then: [
        { s: 'akihiko', f: 'neutral', t: "The harbor, then. Mitsuru told me." },
        { s: 'haechan', f: 'happy', t: "Low tide, Protein. Mud all the way to the horizon. You could run on it at five in the morning and nobody would stop you." },
        { s: 'akihiko', f: 'happy', t: "...I'd love that, actually." }
      ], else: [{ ifHeading: 'H', then: [
        { s: 'akihiko', f: 'neutral', t: "She's going somewhere neither of us can follow." },
        { s: 'haechan', f: 'neutral', t: "Yeah." },
        { s: 'akihiko', f: 'serious', t: "I didn't ask her to stay." },
        { s: 'haechan', f: 'neutral', t: "Me neither. Look at us. Two guys carrying a table." }
      ], else: [{ ifHeading: 'stay', then: [
        { s: 'akihiko', f: 'neutral', t: "She's staying." },
        { s: 'haechan', f: 'neutral', t: "Yeah." },
        { s: 'akihiko', f: 'blushing', t: "...I didn't ask her to." },
        { s: 'haechan', f: 'serious', t: "I know. That's why it took." },
        { n: "Akihiko looked at him over the table for a long moment, and Haechan looked back, flat, and there was nothing in it, no edge, nothing at all but a man handing another man something heavy and stepping back." }
      ], else: [
        { s: 'akihiko', f: 'neutral', t: "Mitsuru says you're all going everywhere at once. I don't understand it." },
        { s: 'haechan', f: 'neutral', t: "Nobody does. Hold the table level and it'll start making sense." }
      ] }] }] }] },
      { choose: [
        { t: "(Carry the legs. Stay out of it.)", stat: { proficiency: 1 }, then: [
          { n: "She carried the legs and stayed out of it, three steps behind, and watched the two of them argue about a corner at the guesthouse gate for a full minute before they discovered the gate was wide enough and had always been wide enough." }
        ] },
        { t: "You two would be really good friends.", then: [
          { s: 'akihiko', f: 'neutral', t: "No." },
          { s: 'haechan', f: 'flustered', t: "No." },
          { n: "They said it in step, like everything else, and neither of them would look at her the rest of the way." }
        ] }
      ] },
      { n: "Mitsuru was waiting at the guesthouse door to supervise the return of her tables, in a coat, with a clipboard. Haechan set his end down exactly where she pointed and bowed, very slightly, with perfect seriousness." },
      { s: 'haechan', f: 'neutral', t: "Hoejangnim." },
      { s: 'mitsuru', f: 'surprised', t: "...Thank you?" },
      { n: "She looked at him for a long second, and then, very slightly, inclined her head back, as if a title she didn't understand had been correctly applied. Akihiko had to go and stand behind a pillar for a while." },
      { bond: { haechan: 1 } }
    ] },

  { id: 'hc-day-the-row', after: '12/28', until: '3/5', slot: 'early', flags: ['year-goes-on'], events: ['a4-household-introductions'],
    place: 'Iwatodai Dorm · Stairs', time: 'Early Morning', bg: 'iwatodaidorm-hallway', scene: [
      { n: "There was a sign on the vending machine by the back stairs. Handwritten on the back of a takeout menu, taped across the bottom row in square, small, very neat letters. RESERVED. DON'T." },
      { n: "Junpei was standing in front of it in his pajamas with a coin in his hand, deeply offended." },
      { s: 'junpei', f: 'serious', t: "You can't reserve a vending machine. That's not a thing. Every morning the whole bottom row is gone by seven, and it's the GOOD row." },
      { n: "Behind him Haechan came down the stairs, fed the machine a coin, kicked it once at the base, exactly where it liked to be kicked, and caught the can that dropped. Then another coin. Then another. Eight. The bottom row emptied out can by can into the crook of his arm while Junpei watched with his mouth open." },
      { s: 'haechan', f: 'neutral', t: "It's not reserved. I just get here first." },
      { s: 'junpei', f: 'surprised', t: "EIGHT? Every morning? What do you even DO with eight?" },
      { ifHeading: 'R', then: [
        { s: 'haechan', f: 'neutral', t: "One's hers. Seven are so nobody else gets that one." },
        { s: 'junpei', f: 'surprised', t: "That's... that's not how... dude, that's insane." },
        { s: 'haechan', f: 'neutral', t: "It's a system. Where I'm from I'd have the right cans. Here I've got the row." }
      ], else: [{ ifHeading: 'S', then: [
        { s: 'haechan', f: 'happy', t: "One's hers. One's mine. The other six go to a housekeeper in my head who'd take them anyway. She takes everything sweet in the house and says it's for my teeth." },
        { s: 'junpei', f: 'surprised', t: "You have a housekeeper in your HEAD?" },
        { s: 'haechan', f: 'happy', t: "Everybody should. Mine's terrifying." }
      ], else: [{ ifHeading: 'H', then: [
        { s: 'haechan', f: 'neutral', t: "Six go to the guesthouse. The loud kid likes the peach ones. The blazer pretends he doesn't. Hers I bring up." },
        { s: 'junpei', f: 'surprised', t: "You buy drinks for the GUESTHOUSE? You don't even like those guys." },
        { s: 'haechan', f: 'neutral', t: "They're her people. Same thing." }
      ], else: [{ ifHeading: 'stay', then: [
        { s: 'haechan', f: 'sad', t: "I'm teaching the machine. Somebody's got to know which can after I'm gone." },
        { s: 'junpei', f: 'sad', t: "...Dude." },
        { s: 'haechan', f: 'neutral', t: "Don't *dude* me at seven in the morning." }
      ], else: [
        { s: 'haechan', f: 'neutral', t: "One for every version of her that's up this early. It's a lot of versions. I'm on a budget." }
      ] }] }] }] },
      { ifRomance: 'haechan', then: [
        { n: "He held one out to Solar, the coldest one, without looking, and when she took it his fingers stayed on the can a second longer than the can needed. Junpei saw, and made a noise like a man seeing a ghost, and fled upstairs with his coin." }
      ], else: [
        { s: 'junpei', f: 'neutral', t: "Wait. Aren't you two just friends? Who buys a whole ROW for a friend?" },
        { s: 'haechan', f: 'neutral', t: "Me. I'm a very good friend. Best one she's got. Ask her." },
        { n: "He held one out to her, the coldest one, deadpan, and she took it, and Junpei looked between them with slowly dawning horror, the way a man looks at a magic trick he has just realized is going to happen to him every morning for the rest of the month." }
      ] },
      { choose: [
        { t: "(Take two. Give one to Junpei.)", stat: { kindness: 1 }, then: [
          { n: "She took a second can and gave it to Junpei, who held it like a winning lottery ticket. Haechan watched the can leave the system with the face of a man watching his budget walk away." },
          { s: 'haechan', f: 'neutral', t: "...Nine, tomorrow. Fine." }
        ] },
        { t: "Who wrote the sign?", then: [
          { s: 'haechan', f: 'neutral', t: "Not me." },
          { s: 'haechan', f: 'neutral', t: "Aigis. She watched me do it for a week and decided it needed to be official. I didn't ask her to. She said it was efficient." }
        ] }
      ] },
      { bond: { haechan: 1 } }
    ] },

  { id: 'hc-day-mark', after: '12/27', until: '3/5', slot: 'evening', flags: ['year-goes-on'], events: ['a4-household-introductions', 'a4-mark'],
    place: 'Iwatodai Dorm · Lounge', time: 'Evening', bg: 'iwatodaidorm-livingroom-night', scene: [
      { n: "Mark came over on one of the long nights of the break with a bag of tangerines and his name on the whiteboard, and stood in the lounge doorway a beat too long before he came in, the way he always did now, as if checking the room for something. Tonight the room had Haechan in it, on the floor by the heater with his back against the sofa, and Mark's smile arrived half a second late." },
      { s: 'mark', f: 'surprised', t: "Hyuck." },
      { s: 'haechan', f: 'neutral', t: "Mark." },
      { n: "That was what they had now. Two names, set down like cups on a counter, nothing poured into either of them." },
      { n: "Mark sat at the far end of the sofa and peeled tangerines for everybody, talking, easy and warm, a story about the guesthouse lift, and from the floor, without looking, without deciding to, Haechan reached up and took one segment off every tangerine before Mark could pass it on. Every one. The way you take from a plate you've been taking from since you were eleven." },
      { n: "Mark noticed on the fourth. His hands stopped. He looked down at the top of Haechan's head, and his face did something that wasn't the smile, and then the smile came back over it, too fast." },
      { s: 'mark', f: 'neutral', t: "...You still do that." },
      { s: 'haechan', f: 'neutral', t: "You still leave the pith on. I've been fixing it for you since middle school." },
      { s: 'mark', f: 'sad', t: "Yeah. Yeah, you have." },
      { ifHeading: 'R', then: [
        { s: 'mark', f: 'neutral', t: "So, uh. Going back, I hear. Same place." },
        { s: 'haechan', f: 'neutral', t: "Same place." },
        { s: 'mark', f: 'neutral', t: "Cool. That's cool, man. It'll be cold." },
        { s: 'haechan', f: 'neutral', t: "It's always cold there, Mark." },
        { n: "Neither of them said anything about what would be waiting when they got back. Solar could see it in both of them anyway, the same shape, a door at the end of a hallway in a house she didn't remember, and Mark looking at it, and Haechan not." }
      ], else: [{ ifHeading: 'S', then: [
        { s: 'mark', f: 'neutral', t: "So you're going to the other one. The harbor thing. The one I'm not in." },
        { s: 'haechan', f: 'neutral', t: "Yeah." },
        { s: 'mark', f: 'sad', t: "Funny. I always figured I'd be in all of yours." },
        { s: 'haechan', f: 'sad', t: "You're in the one where we were eleven. That one's not going anywhere." },
        { n: "Mark laughed, short, like something catching in his throat, and looked down at the tangerine in his hands as if the next line might be written on it." }
      ], else: [{ ifHeading: 'H', then: [
        { s: 'mark', f: 'neutral', t: "And she's going to the one neither of us is in." },
        { s: 'haechan', f: 'neutral', t: "Yeah." },
        { s: 'mark', f: 'sad', t: "Doesn't that kill you?" },
        { s: 'haechan', f: 'sad', t: "Some. Not the way you think." },
        { n: "Mark waited for more. He'd always waited for more, Solar thought; she could see the shape of a hundred other times, on a hundred other floors, him waiting for Haechan to finish a sentence. Haechan didn't finish it. He took another segment off the plate instead, and Mark let him." }
      ], else: [{ ifHeading: 'stay', then: [
        { s: 'mark', f: 'neutral', t: "She's staying, huh." },
        { s: 'haechan', f: 'neutral', t: "Yeah." },
        { s: 'mark', f: 'sad', t: "So we go back. You and me. Same train." },
        { s: 'haechan', f: 'neutral', t: "Different cars." },
        { s: 'mark', f: 'sad', t: "...Yeah. Different cars." }
      ], else: [
        { s: 'mark', f: 'surprised', t: "Wait, so we're all... everywhere? At once? Even us?" },
        { s: 'haechan', f: 'neutral', t: "Even us." },
        { s: 'mark', f: 'sad', t: "That's a lot of rooms to not talk in." },
        { s: 'haechan', f: 'neutral', t: "We'll manage. We're good at it." }
      ] }] }] }] },
      { choose: [
        { t: "(Hand each of them a tangerine.)", stat: { kindness: 1 }, then: [
          { n: "She gave one to each of them. Mark peeled his, badly, pith and all, and then, without a word, without looking, held it down over the arm of the sofa, and Haechan took it, and cleaned off every white thread, and handed half back up. Neither of them looked at the other. Neither of them looked at her. The heater ticked." }
        ] },
        { t: "How long have you two known each other?", then: [
          { s: 'mark', f: 'neutral', t: "Since forever. Since before we had opinions." },
          { s: 'haechan', f: 'sad', t: "He had opinions. I had him." },
          { n: "Mark looked at the back of Haechan's head for a long time after that, and didn't say anything, and peeled the next tangerine very slowly." }
        ] }
      ] },
      { n: "When he left, Mark stood up and stood there a second too long, and then put a hand on Haechan's shoulder on his way past, light, a full stop at the end of a sentence neither of them had finished. Haechan didn't move under it. He didn't shrug it off, either." },
      { bond: { haechan: 1 } }
    ] },

  { id: 'hc-day-bows', after: '1/2', until: '1/28', slot: 'early', offOnly: true, flags: ['year-goes-on'],
    events: ['a4-household-introductions', 'a6-new-year'],
    place: 'Iwatodai Dorm · Lounge', time: 'Early Morning', bg: 'iwatodaidorm-livingroom', scene: [
      { n: "Yunjin had decided the dorm was going to do the new year properly, which meant her way, which meant everybody in the lounge at eight in the morning in their least wrinkled clothes, lined up in a row, being taught how to bow." },
      { s: 'yunjin', f: 'serious', t: "Hands together. Down on your knees. Forehead to your hands. Junpei, that's a push-up. Babe, that is a push-up." },
      { n: "Junpei was doing a push-up. Ken was doing it perfectly and pretending he'd never seen it before. And at the end of the row, without being told a single thing, Haechan went down in one smooth movement, hands, knees, forehead, and came up again, the whole bow done so cleanly and so automatically that the lounge went quiet." },
      { s: 'yunjin', f: 'neutral', t: "Show-off." },
      { s: 'haechan', f: 'neutral', t: "Did it every year. For a man in an armchair who pretends he isn't pleased." },
      { s: 'yunjin', f: 'neutral', t: "He'd be so pleased. He'd never say. He'd just put an extra orange on your plate and look at the wall." },
      { ifHeading: 'R', then: [
        { s: 'yunjin', f: 'sad', t: "You're not going to do that bow for him again. Are you." },
        { s: 'haechan', f: 'neutral', t: "Different place. They don't bow there. They shotgun a beer and hug you too hard." },
        { s: 'yunjin', f: 'neutral', t: "Disgusting. Look after her there. She'll pretend she doesn't need it, and then she'll need it at three in the morning." },
        { s: 'haechan', f: 'neutral', t: "I know where she is at three in the morning, Jin. I always have." }
      ], else: [{ ifHeading: 'S', then: [
        { s: 'yunjin', f: 'happy', t: "Next year you do it in the right house. In front of the right armchair." },
        { s: 'haechan', f: 'happy', t: "And you'll be there in sunglasses, indoors, telling me my hands are wrong." },
        { s: 'yunjin', f: 'happy', t: "Your hands ARE wrong. They've always been wrong. He'll pretend not to notice." },
        { n: "Haechan laughed, the loud one, the house one, and for once didn't switch it off halfway through." }
      ], else: [{ ifHeading: 'H', then: [
        { s: 'yunjin', f: 'sad', t: "She's not going to either of ours. Is she." },
        { s: 'haechan', f: 'sad', t: "No." },
        { s: 'yunjin', f: 'neutral', t: "The Yang boy's over there, though. In hers." },
        { s: 'haechan', f: 'serious', t: "He's in both. That's the only reason I don't hate it worse." },
        { s: 'yunjin', f: 'neutral', t: "...Babe. That's the nicest thing you've ever said about him." },
        { s: 'haechan', f: 'flustered', t: "Don't tell him." }
      ], else: [{ ifHeading: 'stay', then: [
        { s: 'yunjin', f: 'sad', t: "She's staying here. With these people. With the push-up." },
        { s: 'haechan', f: 'neutral', t: "Yeah. Good people. Bad bowing." },
        { s: 'yunjin', f: 'neutral', t: "So we go home without her. You and me. Like we came." },
        { s: 'haechan', f: 'neutral', t: "I'll carry your bags. Left hand." }
      ], else: [
        { s: 'yunjin', f: 'happy', t: "So what are we doing next year? Everything? The armchair AND whatever cold place you go to?" },
        { s: 'haechan', f: 'happy', t: "Everything. Two bows. One beer. Don't tell the Chairman about the beer." }
      ] }] }] }] },
      { ifRomance: 'haechan', then: [
        { s: 'yunjin', f: 'neutral', t: "And you two. Don't think I didn't see you on the stairs at midnight, sharing one scarf like a pair of thieves." },
        { s: 'haechan', f: 'flustered', t: "It was cold." },
        { s: 'yunjin', f: 'serious', t: "It's ALWAYS cold. That's not an EXCUSE, that's a CLIMATE." }
      ], else: [
        { s: 'yunjin', f: 'neutral', t: "And you two. Friends, she tells me. FRIENDS. I've watched you look at her across a table like a man reading a menu he can't afford." },
        { s: 'haechan', f: 'neutral', t: "I can afford it. I'm on a diet." },
        { s: 'yunjin', f: 'surprised', t: "A DIET?" }
      ] },
      { choose: [
        { t: "(Bow to Yunjin.)", then: [
          { n: "She went down, hands, knees, forehead, and her body did it without her, the whole thing, perfectly, exactly the way he had, and came up to find Yunjin with her sunglasses pushed up and her mouth open." },
          { s: 'yunjin', f: 'sad', t: "...Oh, you know that. Of course you know that." },
          { s: 'yunjin', f: 'happy', t: "Okay. Now give me money. That's how it works. No, wait, I'm supposed to give YOU money. Hold on. Haechan, which way round is it?" }
        ] },
        { t: "(Bow to Mitsuru.)", stat: { charm: 1 }, then: [
          { s: 'mitsuru', f: 'surprised', t: "...Is that for me?" },
          { n: "It was. Haechan went down too, beside her, and said *Hoejangnim* into the carpet, and Mitsuru, who had clearly never been bowed to like that in her life, went faintly pink and left the room, and came back with a stack of small red envelopes from somewhere, one for everybody, as if she'd been keeping them in a drawer for exactly this." }
        ] }
      ] },
      { bond: { haechan: 1 } }
    ] },

  { id: 'hc-day-twice', after: '1/4', until: '3/5', slot: 'late', flags: ['year-goes-on'], events: ['a4-household-introductions'],
    place: 'Iwatodai Dorm · Rooftop', time: 'Night', bg: 'iwatodaidorm-roof-night', scene: [
      { n: "Hanni found them on the roof at midnight, both of them, in two blankets each, and came out with a third over her own shoulders and a thermos, and stood between them at the railing and didn't say anything until she'd poured three cups." },
      { s: 'hanni', f: 'neutral', t: "I'm going to ask you something, and you're going to say fine." },
      { s: 'haechan', f: 'neutral', t: "Fine." },
      { s: 'hanni', f: 'neutral', t: "I haven't asked yet." },
      { s: 'haechan', f: 'neutral', t: "Saving time." },
      { s: 'hanni', f: 'serious', t: "Are you okay?" },
      { s: 'haechan', f: 'neutral', t: "Fine." },
      { n: "Hanni nodded, as if that were exactly what she'd expected, and drank, and looked out at the city for a while. Then she asked again. Same words. Same voice. As if the first time hadn't counted, because it hadn't." },
      { s: 'hanni', f: 'neutral', t: "Are you okay, Haechan?" },
      { ifHeading: 'R', then: [
        { s: 'haechan', f: 'neutral', t: "...Yeah. Actually. I think I am." },
        { s: 'haechan', f: 'neutral', t: "We're going home. Same place. Same cold. I'm going to be the guy with the coat. I'm qualified." },
        { s: 'hanni', f: 'happy', t: "You're so qualified. You're the most qualified person I've ever met. Don't mess it up." },
        { s: 'haechan', f: 'serious', t: "I've messed up plenty over there. I know. I'm not messing up this." },
        { n: "Hanni didn't ask what plenty was. Solar watched her decide, right there at the railing, not to say any of it, not here, not tonight, the way you'd decide to carry something down the stairs yourself rather than wake anyone." }
      ], else: [{ ifHeading: 'S', then: [
        { s: 'haechan', f: 'neutral', t: "...Ask me in the other place. I'll be better at it there. I'll be loud. You won't recognize me." },
        { s: 'hanni', f: 'sad', t: "We won't be there, Haechan. That's the thing. We won't get to see it." },
        { s: 'haechan', f: 'neutral', t: "No. But she'll be there, and I'll be there, and somebody's going to make her wear a coat." },
        { s: 'hanni', f: 'sad', t: "Promise me that's you." },
        { s: 'haechan', f: 'neutral', t: "It's me. Over there it's my actual job. They pay me." }
      ], else: [{ ifHeading: 'H', then: [
        { s: 'haechan', f: 'sad', t: "No. Not really." },
        { s: 'haechan', f: 'neutral', t: "But you can be not okay and still be right. She's going somewhere I'm not. I'm the one who'd know if that was wrong, and it isn't." },
        { s: 'hanni', f: 'sad', t: "How do you know?" },
        { s: 'haechan', f: 'sad', t: "Because I've been pulled toward her my whole life, in two places. That's not the same thing as her being mine. Took me a while. I got there." },
        { n: "Hanni put her hand on his arm, over the blanket, and left it there, and he let her, and the three of them stood like that a long time, not looking at each other, all looking at the same lights." }
      ], else: [{ ifHeading: 'stay', then: [
        { s: 'haechan', f: 'neutral', t: "No. But I'm going to be." },
        { s: 'haechan', f: 'sad', t: "She's staying. I'm going home without her. I said out loud it was allowed and I meant it. I just didn't know it'd be this cold." },
        { s: 'hanni', f: 'sad', t: "We're going home without her too." },
        { s: 'haechan', f: 'neutral', t: "Then sit with me on the way. Don't talk." },
        { s: 'hanni', f: 'sad', t: "I'm going to talk the whole way." },
        { s: 'haechan', f: 'neutral', t: "I know. That's why." }
      ], else: [
        { s: 'haechan', f: 'happy', t: "...Yeah. I'm okay. I'm stupidly okay. It's going to be everything at once and I'm in all of it, and so are you, and so is she." },
        { s: 'hanni', f: 'happy', t: "That doesn't make any sense." },
        { s: 'haechan', f: 'happy', t: "No. It's great." }
      ] }] }] }] },
      { ifRomance: 'haechan', then: [
        { s: 'hanni', f: 'happy', t: "And for the record, you and her. I'm not going to say anything. I'm going to say good. That's all. Good." }
      ], else: [
        { s: 'hanni', f: 'neutral', t: "And for the record, friends counts. Hyein's still not over it. She threw a pincushion at me in my sleep and said it was for you." }
      ] },
      { choose: [
        { t: "Ask me too.", then: [
          { s: 'hanni', f: 'neutral', t: "Are you okay, Sol?" },
          { s: 'solar', f: 'sad', t: "Fine." },
          { s: 'hanni', f: 'neutral', t: "Are you okay, Sol?" },
          { n: "The second time, she told her. Not in words. She put her head down on Hanni's shoulder, and Hanni said *okay, okay*, and that was the answer, and Haechan turned and looked out at the city to give them the roof." }
        ] },
        { t: "(Lean on Hanni. Let him lean on you.)", stat: { kindness: 1 }, then: [
          { n: "She leaned into Hanni, and after a while felt a weight settle against her other side, a shoulder in a blanket, there and then gone and then there again, as if he were checking that he was allowed. He was. The three of them stood like a row of books until the thermos ran out." }
        ] }
      ] },
      { n: "Hanni went in first, and left them the thermos, and on her way past she said it once more over her shoulder, to both of them, lightly, the way you'd check a door you'd already locked. *Are you okay.* Neither of them answered. She hadn't expected them to. She'd only wanted it asked." },
      { bond: { haechan: 1 } }
    ] }
);
