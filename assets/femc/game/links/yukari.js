/* Yukari Takeba · VI The Lovers. Revamp social link data (femc-game.html). Format: link fields in assets/femc/game/core.js, scene lines in scene.js. */
(window.FEMC_GAME_LINKS ||= []).push({
  id: 'yukari', name: 'Yukari Takeba', short: 'Yukari', arcana: 'Lovers', numeral: 'VI', from: 'Persona 3',
  kind: 'sees',
  romance: null,
  starts: '4/13',
  home: { area: 'Gekkoukan High', spot: 'Archery Range', slot: 'after', days: [1, 3, 5],
          hint: 'After school on Monday, Wednesday and Friday, at the archery range.' },
  approach: "Yukari is at the archery range after school, stringing her bow with her back to the gate. She's told you twice this week that you don't have to wait for her, and both times she looked relieved when you did.",
  cast: { classmate: 'Classmate', 'yk-mom': "Yukari's Mother" },
  invite: {
    ask: ["hey. you busy? i need a second opinion on something. it's a skirt. don't judge", "wild duck? i'm starving and junpei's being junpei", "practice got cancelled!! mall??", "are you doing anything or are you just sitting in your room again", "mitsuru-senpai's in the lounge with a laptop and a face. come out with me", "chagall. my treat. don't make it weird"],
    ok: ["ok! meet you at the station", "yay. ok. 10 min", "cool. don't wear the uniform"],
    no: ["aw ok. next time!", "fine. i'll go by myself like a loser", "ok ok. text me if you change your mind"]
  },
  hangouts: [
    [
      { n: "Wild-Duck Burger at four in the afternoon was a wall of fryer heat and teenage noise, and Yukari ordered for both of them without asking, which Solar had stopped minding, and then ate half of Solar's fries, which Solar had never minded in the first place." },
      { s: 'yukari', f: 'neutral', t: "Okay, so. Three this week. Three guys. One of them had a letter. Like, a written letter. Who does that." },
      { choose: [
        { t: "What did the letter say?", notes: 3, then: [
          { s: 'yukari', f: 'blushing', t: "It had a poem in it. It rhymed \"Yukari\" with \"sorry.\"" },
          { s: 'yukari', f: 'serious', t: "Which, honestly? Accurate." },
          { n: "Solar laughed so hard a fry went down the wrong way, and Yukari had to hit her on the back, still talking." }
        ] },
        { t: "Did you like any of them?", notes: 2, then: [
          { s: 'yukari', f: 'neutral', t: "No. I mean, they're fine. Everybody's fine." },
          { s: 'yukari', f: 'neutral', t: "...I don't really do that. Not right now." }
        ] },
        { t: "(Steal one of your fries back.)", notes: 2, then: [
          { n: "She stole one back. Yukari watched her do it with an expression of deep betrayal and then pushed the whole carton across the table at her, which was, Solar was learning, how Yukari apologized for things." }
        ] }
      ] },
      { n: "They stayed until the window went orange and the place filled up with a baseball team, and Yukari said ugh, boys, and stacked both their trays and carried them to the bin herself, because the girl behind the counter looked tired. She didn't say that was why. Solar didn't ask." }
    ],
    [
      { n: "There was a drama on Thursday nights that Yukari said she didn't watch and watched every single week, curled in the corner of the lounge couch with a cushion held against her chest like a shield, and at some point Solar had started watching it too, which Yukari was pretending was a coincidence." },
      { n: "Tonight was the episode where it rained. The heroine stood outside the hero's apartment in the rain for most of the second half while violins happened somewhere offscreen, and Yukari pressed the cushion into her face." },
      { s: 'yukari', f: 'serious', t: "She should just knock. Why doesn't she just knock." },
      { choose: [
        { t: "Because then the episode's over.", notes: 3, then: [
          { s: 'yukari', f: 'neutral', t: "...Ugh. You're right. I hate that you're right." },
          { n: "She lowered the cushion about two centimeters, enough to see over it." }
        ] },
        { t: "She's going to get sick.", notes: 2, then: [
          { s: 'yukari', f: 'neutral', t: "Right? Thank you. Somebody gets it." }
        ] },
        { t: "(Hand her the tissues before she asks.)", notes: 2, then: [
          { n: "She handed her the box. Yukari took one without looking and said this is allergies, and Solar said okay, and they both went back to watching the heroine not knock." }
        ] }
      ] },
      { n: "Junpei came through at the end, saw the screen, saw the two of them, saw the tissues, and backed out of the room the way you'd back away from a bear, slowly, without making eye contact. Yukari threw the cushion at the space where he'd been anyway." }
    ],
    [
      { n: "Exams were a week out, and the lounge had been converted, without anyone voting on it, into a study hall with a strict seating plan. Yukari had the good end of the couch and three colors of highlighter. Solar had the armchair and a stack of flash cards in Yukari's round handwriting. Junpei had the floor, a textbook open on his face, and the posture of a man who had been shot." },
      { s: 'junpei', f: 'sad', t: "Yuka-tan. Yuka-tan. Can I copy your history notes. I'll love you forever." },
      { s: 'yukari', f: 'serious', t: "No. Absolutely not. Ask Solar, she's the one in the top ten." },
      { s: 'junpei', f: 'happy', t: "Solar! Solar, buddy. Leader. Light of the dorm." },
      { choose: [
        { t: "(Quiz him instead. From the flash cards.)", notes: 3, then: [
          { n: "Solar held up a flash card. Junpei groaned like a building settling. She held up another, and another, and somewhere around the ninth one he got an answer right, by accident, and sat up so fast the textbook slid off his face, and Yukari, across the room, put down her highlighter and applauded, slowly, three times." },
          { s: 'yukari', f: 'neutral', t: "Wow. Stupei learned a thing. Somebody write down the date." }
        ] },
        { t: "(Hand him your notes.)", notes: 2, then: [
          { s: 'yukari', f: 'serious', t: "Don't! He'll get grease on them. He's been eating chips since four o'clock, I've been counting." },
          { n: "He got grease on them. He also, Solar noticed, actually read them, moving his lips a little, which was more than she'd expected, and more than Yukari would ever admit she'd expected." }
        ] },
        { t: "No.", notes: 1, then: [
          { s: 'junpei', f: 'sad', t: "Cold. Ice cold. You two are the same person." },
          { s: 'yukari', f: 'blushing', t: "We are not. ...Okay, a little." }
        ] }
      ] },
      { n: "By eleven Junpei was asleep on the floor with a flash card stuck to his cheek, and Yukari was asleep on the couch with her highlighter uncapped and drawing a slow yellow line across the cushion, and Solar sat in the armchair in the lamplight between them, quizzing herself in a whisper, and didn't wake either of them for a long time, because it was nice, she thought, to be the one keeping watch over something that wasn't a door." }
    ]
  ],
  ranks: [
    { after: '4/13', title: "1: fine, i'll do it", place: 'Gekkoukan High · Archery Range', time: 'After School', scene: [
      { n: "For the first week Yukari walked her everywhere, because someone had to, and because on the very first night Yukari had said fine, I'll do it before anyone could ask, and Yukari was, Solar was learning, the kind of person who kept a promise out of pure spite at having made it." },
      { n: "She walked her to the monorail and off it. She walked her to the faculty office and the shoe lockers and the nurse's office, just in case, and the cafeteria, which was terrible, and the library, which was fine. She told her which vending machine ate coins and which teachers you could look at and which ones you couldn't, and what to say when people asked where she'd transferred from, which was nothing, a smile and a shrug, it's boring, really, which happened to be true." },
      { n: "On Monday of the second week she walked her to the archery range, because Yukari had practice, and the next train worth catching wasn't for forty minutes, and leaving the new girl to find her own way home was apparently the one thing Yukari Takeba could stand even less than having her there." },
      { register: 'yukari' },
      { n: "The range was a long open shed at the edge of the grounds, a wooden floor and a roof and then nothing but grass and the targets far off at the end of it, and the wind came straight across the field in cold gusts that smelled like cut grass and a rain that hadn't decided yet. Solar sat on the bench at the back with her bag on her knees. Yukari strung her bow and changed and came out with her hair pinned back off her face, and her face had gone very quiet." },
      { n: "Then she shot, and Solar forgot to be bored." },
      { n: "It wasn't loud. That was what she hadn't expected. A breath, and the long slow draw, and a stillness at the end of it so complete that even the wind seemed to wait for it, and then a sound like a page tearing, and far down the field the arrow was just there, in the target, as if it had always been." },
      { choose: [
        { t: "(Watch, and don't say anything.)", notes: 3, then: [
          { n: "She didn't say anything. Neither did Yukari, for three arrows, four, five, and the quiet between them was the first quiet all week that neither of them had to fill. On the sixth arrow Yukari looked back over her shoulder, quickly, the way you'd check whether a door was still open, and Solar was still there, and Yukari turned back around and drew again." }
        ] },
        { t: "That was incredible.", notes: 2, then: [
          { s: 'yukari', f: 'blushing', t: "It was okay. It was a little low." },
          { s: 'yukari', f: 'neutral', t: "...Thanks, though." }
        ] },
        { t: "Is it hard?", notes: 1, then: [
          { s: 'yukari', f: 'neutral', t: "Yeah. That's kind of the point." },
          { n: "She didn't elaborate, and the wind took the end of the sentence out across the field and left it there." }
        ] }
      ] },
      { n: "Halfway through practice, two girls from Yukari's class drifted over to the fence on their way to somewhere else, and Yukari saw them, and something happened to her face." },
      { n: "It went bright. Not happy, exactly. Bright, like a light switched on in an empty room, a wide warm open smile with exactly the right number of teeth in it, and she waved and called hey, and laughed at something one of them said about a teacher, and it was flawless. It was so flawless that Solar, watching from the bench, felt her own face start to do it too, in sympathy, the way you yawn when somebody else does." },
      { s: 'classmate', t: "Yuka-chan, is that the transfer student? The one Sanada-senpai nodded at?" },
      { s: 'yukari', f: 'neutral', t: "She lives in my dorm. So does he. It's a dorm, you guys." },
      { s: 'classmate', t: "Sooo she's not...?" },
      { s: 'yukari', f: 'neutral', t: "Oh my god. Go to cram school." },
      { n: "They went, laughing. The light in Yukari's face stayed on exactly as long as their backs were visible and then went off, click, and what was left underneath was tired, and a little annoyed, and seventeen." },
      { n: "Solar knew that face. She knew it from the inside. She'd put it on in front of a whole homeroom a week ago, and it had fit her like the uniform did." },
      { choose: [
        { t: "You're good at that.", notes: 3, then: [
          { s: 'yukari', f: 'surprised', t: "At what?" },
          { n: "Solar didn't answer. She just did it, the smile, the exact one, bright and closed and aimed at nobody, and Yukari stared at her, and then, for one second and very much against her will, laughed." },
          { s: 'yukari', f: 'serious', t: "Okay, that's creepy. Stop it. You're, like, really good at it." },
          { s: 'yukari', f: 'neutral', t: "...Takes one to know one, I guess." }
        ] },
        { t: "(Say nothing about it.)", notes: 2, then: [
          { n: "Solar said nothing about it. Yukari glanced at her, braced, as if she were waiting to be told something about herself, and when nothing came she let out a breath and reached for another arrow." }
        ] },
        { t: "They seem nice.", notes: 1, then: [
          { s: 'yukari', f: 'neutral', t: "They're fine. They're nice." },
          { s: 'yukari', f: 'neutral', t: "Everybody's nice." }
        ] }
      ] },
      { place: 'Iwatodai Station · Platform', time: 'Evening' },
      { n: "The rain caught up with them on the walk to the station, fine and cold and sideways, and they shared Yukari's umbrella, which was pink and too small for two, and which Yukari held mostly over Solar without seeming to notice she was doing it." },
      { s: 'yukari', f: 'neutral', t: "You know you don't have to wait for me, right? You know the way now." },
      { s: 'yukari', f: 'serious', t: "I'm not, like, assigned to you. Nobody said I had to. I just said it." },
      { n: "She said it fast, to the tracks, with her left shoulder getting soaked. Solar thought about the lounge at two in the morning, and fine, I'll do it, and how nobody else in that room had moved." },
      { s: 'solar', f: 'neutral', t: "I know." },
      { s: 'solar', f: 'happy', t: "Wednesday?" },
      { n: "Yukari looked at her, the real face, no light in it at all, and then away, down the platform, toward the train coming in with its windows full of yellow." },
      { s: 'yukari', f: 'blushing', t: "...Practice ends at five-thirty. Don't be weird about it." },
      { n: "It was, Solar thought, the most unwilling yes she had ever heard, and she had heard Akihiko agree to rest." }
    ] },

    { after: '4/24', title: '2: retail therapy', place: 'Paulownia Mall · Shop Windows', time: 'After School', scene: [
      { n: "The Chairman had given her an envelope on her first Friday with a stipend in it and a pun about cash flow, and two weeks later it was still in her desk drawer, untouched, because she couldn't think of a single thing to spend it on that wasn't food, and Yukari had found out about this over breakfast and reacted like she'd been told about a death in the family. She skipped practice for it, which she said was not a big deal in a voice that made it one." },
      { s: 'yukari', f: 'serious', t: "You've been wearing the same two uniforms for two weeks. You sleep in a T-shirt Mitsuru-senpai found in a box." },
      { s: 'yukari', f: 'neutral', t: "This is an intervention. I want you to know that." },
      { n: "Paulownia Mall on a Friday afternoon was loud and bright and smelled like crepe batter and somebody's perfume sample and the chlorine coming off the fountain, and Yukari moved through it like a fish through water, a pink cardigan in a stream of black uniforms, waving at people and being waved at, steering Solar by the elbow past the shops that weren't worth it and toward the shops that were." },
      { n: "Clothes were easy. That was the strange part. Yukari held things up and Solar said no, no, yes, that one, the gray, without thinking, fast and certain, and in twenty minutes she had a skirt and two sweaters and a coat that made her look like someone with somewhere to be, and Yukari was looking at her with narrowed eyes." },
      { s: 'yukari', f: 'neutral', t: "Okay, you're scary at this. You didn't even try anything on." },
      { s: 'yukari', f: 'serious', t: "You picked all of that like you were picking a costume. Like, what would the new girl wear." },
      { choose: [
        { t: "Isn't that what clothes are?", notes: 3, then: [
          { s: 'yukari', f: 'neutral', t: "...Kind of. Yeah." },
          { n: "Yukari looked at the rack for a moment, at a pink blouse she'd held up three times and put back three times, and didn't say anything else, and didn't need to." }
        ] },
        { t: "I just know what looks right.", notes: 2, then: [
          { s: 'yukari', f: 'neutral', t: "Yeah. I can tell." },
          { s: 'yukari', f: 'serious', t: "That's not the same as what you like, though." }
        ] },
        { t: "Is that bad?", notes: 1, then: [
          { s: 'yukari', f: 'neutral', t: "No! No. It's just... efficient. Like, scary efficient." }
        ] }
      ] },
      { n: "Then they got to pajamas, and she stopped." },
      { n: "It was a whole wall of them, soft and cheap and in every color there was, cartoon animals and stripes and little hearts and plain flannel, and she stood in front of it with the bags hanging off her fingers and couldn't pick. Nobody was ever going to see these. There was no right answer. There was nobody to dress for, and without somebody to dress for, her hands didn't seem to know where to go." },
      { n: "She stood there a long time. Long enough that Yukari, who had been talking, stopped talking." },
      { choose: [
        { t: "I don't know what I like.", notes: 3, then: [
          { n: "It came out quieter than she meant it to. Yukari didn't laugh, and didn't fix it, and didn't say oh my god you're so weird, which Solar would have deserved. She just came and stood next to her and looked at the wall too, frowning, as if it were a hard question on a test they were taking together." },
          { s: 'yukari', f: 'neutral', t: "Okay. Then we do it the stupid way." }
        ] },
        { t: "Pick for me.", notes: 2, then: [
          { s: 'yukari', f: 'serious', t: "Nope. Absolutely not. I'm not picking your pajamas, that's like, the one thing." },
          { s: 'yukari', f: 'neutral', t: "...Okay. We do it the stupid way." }
        ] },
        { t: "(Grab the closest ones.)", notes: 1, then: [
          { n: "She grabbed the closest ones. Gray. Plain. Yukari took them out of her hands and put them back on the shelf without a word." },
          { s: 'yukari', f: 'neutral', t: "No. We're doing it the stupid way." }
        ] }
      ] },
      { n: "The stupid way, it turned out, was that Yukari held up every single pair one at a time and Solar had to say yes or no in under a second, no thinking, no looking at Yukari's face for the answer, and they went down the whole wall like that, no, no, no, ugh, no, and somewhere around the middle Solar heard herself say yes before she had decided to, to a pair of pale blue flannel ones with tiny white rabbits on them that were deeply, profoundly embarrassing." },
      { s: 'yukari', f: 'surprised', t: "Rabbits?" },
      { s: 'solar', f: 'flustered', t: "You said no thinking." },
      { s: 'yukari', f: 'blushing', t: "No, I love it. I love that. That's so bad. Those are yours now. Those are, like, legally yours." },
      { n: "Her phone buzzed in her cardigan pocket while they were in line. She took it out and looked at the screen, and Solar, who looked at everything, looked at her face looking at it." },
      { n: "The light didn't go on, and it didn't go off. It did something else. It went still, the way the range had gone still right before she shot." },
      { n: "She held the button on the side until the buzzing stopped and put the phone back in her pocket and smiled at the cashier, perfect." },
      { s: 'yukari', f: 'neutral', t: "Telemarketer." },
      { n: "Solar had seen the screen. It had said Mom. She didn't say so. It seemed like the kind of thing that belonged to the person it was happening to, and she, of all people, knew something about not wanting to be asked." },
      { place: 'Paulownia Mall · Central Atrium', time: 'Evening' },
      { n: "They sat on the edge of the fountain with the bags between their feet while the skylights over the atrium went pink and then the color of a bruise, and Yukari ate a crepe and stole the strawberries out of Solar's, which Solar allowed." },
      { s: 'yukari', f: 'neutral', t: "For the record? This wasn't an obligation thing. I'm not taking you to the mall because somebody has to." },
      { s: 'yukari', f: 'blushing', t: "I just really wanted to see what you'd pick." },
      { n: "Solar looked down at the bag with the rabbits in it. It was a stupid thing to feel anything about. She felt it in her throat anyway, small and warm, and swallowed it along with a strawberry Yukari had missed." }
    ] },

    { after: '5/6', title: '3: same smile', place: 'Iwatodai Dorm · Rooftop', time: 'Daytime', scene: [
      { n: "The last day of Golden Week was hot for May, the first really hot day of the year, and the dorm roof smelled of warm tar and of the laundry Yukari had pinned along the line in two straight rows, sheets and towels and her white archery uniform, all of it snapping and filling in a wind that came the whole way across the bay and didn't cool anything down." },
      { n: "Yukari was sitting with her back against the water tank in the one stripe of shade, knees up, her phone face down on the concrete beside her. Solar sat down next to her because there was room. The phone stayed face down." },
      { n: "They'd been up there a while not saying much. Below them the town was doing holiday things, slowly, a radio playing a ballgame somewhere, a dog with opinions, kids shrieking at a sprinkler two streets over. It was the kind of afternoon that didn't need anything from anybody." },
      { s: 'yukari', f: 'neutral', t: "Can I tell you something kind of embarrassing?" },
      { s: 'yukari', f: 'serious', t: "The roof. The first time. The night Akihiko-senpai got hurt." },
      { s: 'yukari', f: 'sad', t: "I couldn't do it. I had the Evoker up and I just... couldn't. My hand wouldn't. And you did it. Like, the second time you'd ever done it in your whole life, and you just did it." },
      { n: "Solar remembered. The wind up there, the thing coming over the edge of the roof with too many arms, Yukari beside her with the Evoker at her temple and her whole arm shaking, and the look on her face, which hadn't been fear, exactly. It had been the look of someone who had promised herself something a long time ago and found out, at the worst possible moment, that she couldn't keep it." },
      { choose: [
        { t: "Mine shook too. After. Where nobody could see.", notes: 3, then: [
          { s: 'yukari', f: 'surprised', t: "...Seriously?" },
          { n: "Solar nodded. She didn't say for how long, or that she'd lain on top of the covers with her shoes still on to do it. She didn't have to. Yukari looked at her for a long moment, and something in her shoulders came down about an inch." }
        ] },
        { t: "You've done it every night since.", notes: 2, then: [
          { s: 'yukari', f: 'neutral', t: "Yeah. Since. Not when it mattered." },
          { s: 'yukari', f: 'neutral', t: "...Thanks, though. Seriously." }
        ] },
        { t: "It doesn't matter.", notes: 1, then: [
          { s: 'yukari', f: 'serious', t: "It does to me." },
          { n: "She said it sharp, and then looked like she wished she hadn't, and picked at the hem of her shorts." }
        ] }
      ] },
      { s: 'yukari', f: 'serious', t: "I'm not in S.E.E.S. because I like fighting. Just so you know. I hate it. I hate that tower." },
      { s: 'yukari', f: 'neutral', t: "I have my reasons. There's something I want to find out. About my dad." },
      { n: "She glanced, once, across the roof toward the stairwell door, toward the floor below it where Mitsuru's room was, and then away, so fast it might not have happened. Solar saw it. She counted it, the way she counted exits, and put it somewhere for later, and didn't ask." },
      { s: 'yukari', f: 'neutral', t: "That's all I'm saying. Don't ask me about it." },
      { s: 'yukari', f: 'serious', t: "...You're not going to, are you. You never ask anybody anything." },
      { choose: [
        { t: "I'm not really in a position to.", notes: 3, then: [
          { s: 'yukari', f: 'neutral', t: "Ha. Yeah. I guess not." },
          { n: "She laughed, short, at the joke under it, the girl with no surname being polite about other people's pasts, and the laugh went out of her and left something softer behind it." }
        ] },
        { t: "You'll tell me when you want to.", notes: 2, then: [
          { s: 'yukari', f: 'blushing', t: "...Maybe. Don't hold your breath." }
        ] }
      ] },
      { s: 'yukari', f: 'neutral', t: "You know why I said I'd walk you up? That first night?" },
      { s: 'yukari', f: 'serious', t: "Because everybody just stood there. Mitsuru-senpai was being Mitsuru-senpai, and Akihiko-senpai was in trouble, and Junpei was eating chips, and you were standing in the middle of the room with that face on. Like, I'm fine, don't worry about me, I'm totally fine." },
      { s: 'yukari', f: 'sad', t: "And I know that face. I've done that face my whole life. When nobody knows what to do with you, so you make it easy for them." },
      { n: "The wind came across the roof and filled every sheet on the line at once, a long white breath, and let them drop." },
      { n: "Solar didn't say anything. She didn't put the face on, either, which was harder than it sounded, harder than the Evoker had been. She just sat there in the shade with whatever her real one was and let Yukari look at it." },
      { s: 'yukari', f: 'neutral', t: "Also, for the record, half the school thinks you're dating Akihiko-senpai, because you go running with him at five in the morning. Which. Nobody does that for fun." },
      { s: 'solar', f: 'flustered', t: "We're not." },
      { s: 'yukari', f: 'neutral', t: "I know. I'm just saying. Nobody does that for fun." },
      { n: "Later, taking the sheets down off the line, warm and stiff from the sun, Yukari held one end and Solar held the other and they walked toward each other, corner to corner, and Yukari took the folded square out of her hands and set it on the pile and said, without looking at her," },
      { s: 'yukari', f: 'blushing', t: "You can stop being polite to me, you know. When it's just us. You can be in a bad mood and stuff." },
      { s: 'yukari', f: 'neutral', t: "I'll still walk you places. Not because somebody has to." },
      { n: "Solar looked at her, the brown bob blown sideways, a sunburn starting across her nose, the phone still lying face down on the concrete where she'd left it, and smiled, and it wasn't the bright one. It was smaller than that, and a little crooked, and she couldn't have told you how she was doing it." },
      { s: 'yukari', f: 'surprised', t: "Oh. Huh. That one's new." },
      { n: "It was. She didn't know where she'd been keeping it." }
    ] },

    { after: '6/1', title: '4: shoe lockers', place: 'Gekkoukan High · Shoe Lockers', time: 'After School', scene: [
      { n: "June came in wet, a gray patient rain that got into shoes and hems and the corners of textbooks, and the whole school smelled of wet umbrellas and of the floor wax the janitors kept putting down anyway, out of what Solar had come to think of as faith." },
      { n: "The shoe lockers at the end of the day were a crush of bodies and dripping vinyl and somebody's phone playing a song through its tinny little speaker. Solar found Yukari in the middle of it, standing at her open locker with one indoor shoe on and one off, holding a folded square of notebook paper, not moving." },
      { n: "It wasn't a love letter. Solar had seen Yukari get love letters in that locker, three of them, and Yukari's face for a love letter was a long-suffering sigh at the ceiling. This was a different face. This one was very, very calm." },
      { choose: [
        { t: "(Stand next to her, close enough to read it if she lets you.)", notes: 3, then: [
          { n: "Solar didn't ask. She just came and stood at her shoulder, close, and Yukari, without looking up, tilted the paper a few degrees toward her, which was the same as handing it over and a great deal easier to say." }
        ] },
        { t: "What is it?", notes: 2, then: [
          { s: 'yukari', f: 'neutral', t: "Fan mail." },
          { n: "She held it out anyway, between two fingers, like something she'd found on the bottom of her shoe." }
        ] },
        { t: "(Give her a little space.)", notes: 1, then: [
          { n: "Solar stepped back to give her room. Yukari noticed, and something in her mouth went tight, and she held the paper out without a word, as if being left alone with it were the worse option." }
        ] }
      ] },
      { n: "There were three different pens on it. Blue, in a fast slanting hand, must be nice having half the third-years carry your bag, which one is it this month. Black, underneath, something about the archery captain that wasn't even clever. And at the bottom, in pink, in a round careful hand with little circles over the i's, and take your creepy transfer with no last name with you." },
      { n: "Yukari read it a second time. Then she folded it back up along its crease, corner to corner, very precisely, the way they'd folded the sheets on the roof, and slid it into her blazer pocket, and her face did the thing. The light came on." },
      { s: 'yukari', f: 'neutral', t: "Wow. Okay. Somebody had a lot of free time in third period." },
      { n: "Over by the umbrella stand, three girls from the class next door were taking a very long time to choose their umbrellas. One of them had a pink pen clipped to her collar. None of them were looking at Yukari, and they were not looking at her so hard that Solar could see it in their shoulders, the specific stiffness of people waiting to be caught not looking." },
      { s: 'yukari', f: 'serious', t: "Don't. I mean it. If you look at them, they win. That's the whole game. You ignore it, and it goes away." },
      { s: 'yukari', f: 'neutral', t: "It always goes away. Eventually." },
      { n: "She said eventually like it was a town she'd been to more than once, and never liked the food." },
      { choose: [
        { t: "(Walk over to them anyway.)", notes: 3, then: [
          { n: "Solar put her outdoor shoes on, one and then the other, without hurrying, and shut her locker, and walked over to the umbrella stand." },
          { n: "She didn't decide what to do with her face. It decided for her. It wasn't the bright one or the crooked one, it was something she hadn't worn yet in this city, warm and attentive and enormously polite, the face of someone who was delighted to meet you and had already memorized your name, and it settled over her features like a coat she'd owned for years." },
          { s: 'solar', f: 'happy', t: "Hi! I'm the transfer. Solar. Just Solar, I'm afraid. There isn't any more of it." },
          { s: 'solar', f: 'happy', t: "I didn't catch your names. I'd really love to. That way I'll know exactly who to thank." },
          { n: "The girl with the pink pen went the color of her pen. Nobody offered a name. All three of them discovered at once that any umbrella would do and went out into the rain under one between the three of them, which didn't work, and Solar watched them go with the polite face still on until the glass doors swung shut." },
          { n: "Then she let it go. It came off easily. That was the part that bothered her, a little, later." },
          { s: 'yukari', f: 'surprised', t: "What was that. What did you just do?" },
          { s: 'yukari', f: 'serious', t: "You were nice at them. You were so nice at them they left. That was terrifying. Do it again sometime." }
        ] },
        { t: "(Do what she says. Ignore them.)", notes: 2, then: [
          { n: "Solar ignored them. She changed her shoes slowly, shoulder to shoulder with Yukari, so that anyone watching from the umbrella stand saw two people at the lockers instead of one, and after a while the umbrella stand gave up and went home." },
          { s: 'yukari', f: 'neutral', t: "...Thanks." }
        ] },
        { t: "We should tell a teacher.", notes: 1, then: [
          { s: 'yukari', f: 'serious', t: "And say what? Somebody was mean to me in pen?" },
          { s: 'yukari', f: 'neutral', t: "Teachers make it worse. Trust me. I've done this before." }
        ] }
      ] },
      { place: 'Gekkoukan High · Archery Range', time: 'After School' },
      { n: "The range in the rain was a different place. The roof drummed, and the targets at the far end stood in a gray haze like something you'd only half remembered, and most of the club had gone home, because shooting in the rain was optional, and Yukari had stayed, because nothing about today was." },
      { n: "She shot badly. The stillness at the end of the draw wouldn't come. She'd reach for it and something would twitch, her jaw, her shoulder, and the arrow would go low and left into the wet grass, and she'd nock the next one without looking where the last one went." },
      { s: 'yukari', f: 'serious', t: "It's not even about me. That's the thing. I don't care what they say about me, I've heard all of it, since middle school. Some guy likes you and you didn't even know his name, and his girlfriend decides it's your fault. Fine. Whatever." },
      { s: 'yukari', f: 'sad', t: "But they put you in it. You didn't do anything. You just stood next to me." },
      { n: "Solar had read the bottom line of the note. She'd felt nothing at all when she read it, which was its own kind of information. No last name had stopped being an insult somewhere around her second day here. It was a fact about her, like her shoe size. What she had felt, sharp and hot and very sudden, was watching Yukari fold the paper corner to corner and switch the light on." },
      { choose: [
        { t: "The note didn't bother me. Watching you smile at it did.", notes: 3, then: [
          { s: 'yukari', f: 'surprised', t: "...Oh." },
          { n: "She lowered the bow. She looked out at the rain for a while, at the arrows lying in the grass, and her throat moved." },
          { s: 'yukari', f: 'neutral', t: "That's my line. You stole that from me. From the roof." },
          { s: 'solar', f: 'neutral', t: "You weren't using it." },
          { n: "Yukari laughed, wet and short, and wiped her face with the back of her glove and said it was the rain blowing in, and the rain, to its credit, was blowing in a little." }
        ] },
        { t: "Want me to go do it again tomorrow?", notes: 2, then: [
          { s: 'yukari', f: 'blushing', t: "No! God. Maybe. No." },
          { s: 'yukari', f: 'neutral', t: "...Maybe Thursday." }
        ] },
        { t: "They're just jealous.", notes: 1, then: [
          { s: 'yukari', f: 'neutral', t: "Yeah. Everybody says that. It doesn't actually help, you know? It's like being told the dog only bit you because it was scared." }
        ] }
      ] },
      { n: "She shot one more. This time the stillness came, at the very end, when she'd stopped reaching for it, and the arrow went into the target with that sound like a page tearing, and Yukari stood looking at it down the long gray field with the bow still raised, breathing." },
      { s: 'yukari', f: 'neutral', t: "Okay. That's the one. I'm going home on that one." },
      { s: 'yukari', f: 'serious', t: "And listen. If they ever start on you, just you, not me, you tell me. I mean it." },
      { s: 'solar', f: 'neutral', t: "And then what?" },
      { s: 'yukari', f: 'serious', t: "Then I handle it. I have a look. It's a really good look. Ask Stupei, he's seen it." },
      { n: "On the way out she took the note out of her pocket, still folded corner to corner, and dropped it in the bin by the gate without opening it again, and put up the pink umbrella and held it mostly over Solar, and didn't notice she was doing it, and Solar, who noticed everything, didn't tell her." }
    ] },

    { after: '6/24', title: '5: the other table', place: 'Paulownia Mall · Chagall Café', time: 'After School', scene: [
      { n: "Yukari's mother was in the city for one afternoon, for something she'd called a work thing on the phone, in a voice Yukari had imitated in the lounge on Tuesday night so flatly that nobody asked what kind of work. They were meeting at Chagall at four. Yukari had arranged it. You couldn't book a table at Chagall, so Yukari had gone there on Monday, alone, Solar was fairly sure, just to look at the tables." },
      { s: 'yukari', f: 'neutral', t: "You don't have to talk to her. You don't have to do anything. Just sit at another table. Like a spy." },
      { s: 'yukari', f: 'serious', t: "In case I need to leave. If I need to leave, I'll text you a word, and you call me and say there's an emergency at the dorm. Junpei set something on fire. Whatever. It's believable." },
      { s: 'yukari', f: 'neutral', t: "Pick a word. Fast. No thinking." },
      { choose: [
        { t: "Rabbits.", notes: 3, then: [
          { s: 'yukari', f: 'surprised', t: "Oh my god." },
          { s: 'yukari', f: 'blushing', t: "...Fine. Rabbits. If I text you rabbits, you come and get me." }
        ] },
        { t: "Strawberries.", notes: 2, then: [
          { s: 'yukari', f: 'neutral', t: "Because I stole yours? Okay. That's fair. Strawberries." }
        ] },
        { t: "Help.", notes: 1, then: [
          { s: 'yukari', f: 'serious', t: "No, that's too obvious, what if she sees the screen?" },
          { s: 'yukari', f: 'neutral', t: "...Okay. Fine. It's fine. Help." }
        ] }
      ] },
      { n: "So Solar sat at the little table by the window with a coffee she didn't want, and the rain ran down the glass behind her in long crooked lines, and Chagall smelled of burnt sugar and wet coats and the strange green coffee that tasted like confidence, and Yukari sat at a table for two in the middle of the room with a small paper gift bag on the chair beside her and her phone face down by her saucer, and waited." },
      { n: "Four o'clock. Ten past. Twenty-five past. Yukari moved the gift bag from the chair to the table and back to the chair. At four thirty-one the door opened and the whole café got a breath of perfume, something white and floral and expensive, and Solar knew who it was before she turned." },
      { n: "She was beautiful in the way Yukari was going to be beautiful in twenty years, if she wasn't careful. A soft camel coat. A scarf with a brand on it. She kissed the air beside Yukari's cheek and sat and put her phone on the table face up, which Solar noticed, because she noticed everything, and because Yukari's was face down." },
      { s: 'yk-mom', t: "Yukari! Look at you. You cut your hair." },
      { s: 'yukari', f: 'neutral', t: "In March. Hi, Mom." },
      { n: "And Yukari's face did the thing. The light came on, wide and warm and open, exactly the right number of teeth. Then her mother smiled back." },
      { n: "It was the same smile. It was exactly the same, the same tilt at the end, the same teeth, the same brightness aimed slightly past you at somebody standing behind your shoulder. Solar sat at the window with her coffee going cold and understood, the way you understand something with your stomach a long time before your head gets there, that it had been her mother's first." },
      { n: "The phone on the table lit up twice in the first ten minutes. The second time, her mother answered it, and laughed into it, and said I'm with my daughter in a voice that made the word daughter sound like an errand, and held up one finger to Yukari, wait, and Yukari waited, smiling, with her hands under the table." },
      { choose: [
        { t: "(Stay at your table, like you promised.)", notes: 3, then: [
          { n: "She stayed. She stayed and she watched Yukari's hands, which were under the table where her mother couldn't see them, twisting the handle of the gift bag around one finger, tighter, and tighter, until the paper tore." }
        ] },
        { t: "(Send her something. Anything.)", notes: 2, then: [
          { n: "Solar sent a single period. Nothing else. Across the room Yukari's phone buzzed against the saucer, and she turned it over under the table and looked down, and for one second the corner of her mouth did something that wasn't the light at all." }
        ] },
        { t: "(Get up and go over.)", notes: 1, then: [
          { n: "She was half out of her chair before Yukari's eyes found her across the café, and Yukari shook her head, one tiny movement, not yet, and Solar sat back down, and her coffee had gone a degree colder in the meantime." }
        ] }
      ] },
      { n: "Her mother stayed twenty-one minutes. Somebody was waiting with the car, sweetheart, you know how it is, and the parking here was impossible. She looked inside the gift bag, said oh, honey, you remembered, and put it in her handbag without taking out whatever was in it. She left a ten-thousand-yen note under the saucer for two coffees. She kissed the air again. The door swung shut on the perfume, and it hung in the café for a long time after she'd gone, like somebody who hadn't got the hint." },
      { n: "Yukari didn't move. Solar went over and sat down in the other chair, which was still warm, and smelled of white flowers." },
      { choose: [
        { t: "I saw where you got it.", notes: 3, then: [
          { s: 'yukari', f: 'neutral', t: "...Yeah." },
          { n: "She looked at the ten-thousand-yen note for a long time." },
          { s: 'yukari', f: 'sad', t: "I used to practice it. In the bathroom mirror. Hers. When I was, like, nine. I thought if I could do it exactly right, she'd look at me the way she looked at..." },
          { s: 'yukari', f: 'neutral', t: "Anyway. I got really good at it. Obviously." }
        ] },
        { t: "(Push your coffee across to her.)", notes: 2, then: [
          { n: "Yukari took it and drank some and made a face." },
          { s: 'yukari', f: 'neutral', t: "This is freezing." },
          { s: 'solar', f: 'neutral', t: "I know." },
          { n: "She drank the rest of it anyway, all of it, slowly, looking at the rain." }
        ] },
        { t: "Are you okay?", notes: 1, then: [
          { s: 'yukari', f: 'neutral', t: "Totally. That was great. That was really great." },
          { n: "The light flickered when she said it, like a bulb that knew it was about to go." }
        ] }
      ] },
      { s: 'yukari', f: 'serious', t: "There's always a guy. Since I was ten. There's always somebody in the car." },
      { s: 'yukari', f: 'serious', t: "I'm never doing that. I'm never going to need somebody so bad I leave my kid at Chagall." },
      { s: 'yukari', f: 'neutral', t: "And I'm not crying in here. This is a nice place. I like it here." },
      { place: 'Paulownia Mall · Central Atrium', time: 'Evening' },
      { n: "They walked out through the atrium, past the fountain, past the crêpe stand with its shutter half down, and at the doors Yukari stopped and took out her phone and held it out so Solar could see the screen." },
      { n: "It was a new message, addressed to Solar. The word was typed in it, the one they'd picked, and the cursor was blinking at the end, and it had never been sent." },
      { s: 'yukari', f: 'neutral', t: "I almost did. Like four times." },
      { s: 'solar', f: 'neutral', t: "Why didn't you?" },
      { s: 'yukari', f: 'blushing', t: "Because you were already there. I didn't need to." },
      { n: "She deleted it, one letter at a time, and put up the umbrella, and they went out into the rain." }
    ] },

    { after: '7/29', title: '6: the island', place: 'Iwatodai Dorm · Rooftop', time: 'Night', scene: [
      { n: "The heat didn't break at night anymore. July had gone on too long, and the end of it lay over the city like a wet towel, and the cicadas in the trees along the river kept going long after dark, a sound like something frying, and the dorm's air conditioner had been making a noise since the weekend that Akihiko said was fine and Mitsuru had called someone about." },
      { n: "Solar couldn't sleep, which was ordinary. She went up to the roof at half past ten, which wasn't, and Yukari was already there, in sleep shorts and an old T-shirt, barefoot, sitting against the water tank where she'd sat in May with her phone face down beside her. There was no laundry on the line tonight. Below them the bay was black and flat, with the lights of Port Island lying on it in long wobbling stripes." },
      { n: "Since the island, Yukari had been fine. She'd said so at breakfast, and at dinner, and in the hallway outside the bathroom at night when nobody had asked. She'd been fine on the ferry back, with her sunglasses on the whole way, and she had not once since then said the word dad, or father, or his name, which Solar had heard her say exactly once, very quietly, in a dark room on the island, to a screen." },
      { choose: [
        { t: "(Sit down next to her without asking.)", notes: 3, then: [
          { n: "Solar sat down next to her. Yukari moved her feet over to make room, which was an answer, and they sat with their shoulders against the warm metal of the tank and listened to the cicadas be unbearable." }
        ] },
        { t: "You're not fine.", notes: 2, then: [
          { s: 'yukari', f: 'serious', t: "Wow. Okay. Hi to you too." },
          { s: 'yukari', f: 'sad', t: "...No. I'm not. Sit down, you're looming." }
        ] },
        { t: "Can't sleep either?", notes: 2, then: [
          { s: 'yukari', f: 'neutral', t: "It's like a thousand degrees. Nobody can sleep. Junpei's sleeping in the bathtub." },
          { n: "Solar sat. It was, she'd learn later, true about the bathtub." }
        ] }
      ] },
      { s: 'yukari', f: 'neutral', t: "I've been waiting for that since I was little. You know that? To hear him say something. Anything at all." },
      { s: 'yukari', f: 'sad', t: "And then he did. And it was the worst thing he could've said." },
      { n: "She didn't say what it was. Solar didn't need her to. She'd been in the room. She'd seen the man on the screen, in a lab coat, tired, with a scratch in the recording running through his face every few seconds like weather, and she had watched Yukari's back the whole time he talked, and watched it go still the way it went still on the range right before she shot, except that nothing came after." },
      { s: 'yukari', f: 'serious', t: "I thought finding out would be like a door. You find out, and then you know, and then you get to go through it and be on the other side." },
      { s: 'yukari', f: 'sad', t: "It's not a door. It's a wall. I just keep walking into it. What if that's who he was? What if everybody was right the whole time and I'm the only idiot who..." },
      { n: "She stopped. Across the bay, out past the island lights, somebody was setting off fireworks from a boat, small ones, a private party, green and gold and then a white one that hung for a second and came apart, and the sound arrived late, soft, like someone knocking on a door down a long hallway." },
      { choose: [
        { t: "I think about that too. About who I was.", notes: 3, then: [
          { s: 'yukari', f: 'surprised', t: "...You do?" },
          { s: 'solar', f: 'sad', t: "Some nights. What if I find out, and I don't like her." },
          { s: 'yukari', f: 'serious', t: "Okay, that's stupid. You weren't, like, awful." },
          { s: 'solar', f: 'neutral', t: "You don't know that." },
          { s: 'yukari', f: 'serious', t: "I know you. Geez. I know you now, I don't need the rest of it to..." },
          { n: "She heard it at the same time Solar did. She shut her mouth and looked out at the water with her jaw set, furious, like someone who'd lost an argument to herself in front of a witness." },
          { s: 'yukari', f: 'neutral', t: "...Oh. That's annoying." }
        ] },
        { t: "You don't have to decide what it means tonight.", notes: 2, then: [
          { s: 'yukari', f: 'neutral', t: "Yeah. Okay. Tomorrow. I'll freak out tomorrow. I'll put it in my planner." }
        ] },
        { t: "Then you'll know. And you'll still be you.", notes: 2, then: [
          { s: 'yukari', f: 'sad', t: "I don't know if I want to be me if that's who I came from." },
          { n: "She said it fast, and then looked like she wanted it back, and Solar didn't give it back. She just sat there and let it be said." }
        ] }
      ] },
      { s: 'yukari', f: 'serious', t: "Don't tell the others. That I'm, like. Not fine." },
      { choose: [
        { t: "(Hook your little finger through hers.)", notes: 3, then: [
          { s: 'yukari', f: 'surprised', t: "What are we, five?" },
          { n: "She didn't let go. Her finger was damp and hot and held on harder than it needed to, and they sat like that, two grown girls on a roof with their pinkies linked like a pair of kindergarteners, and neither of them said anything about it, ever." }
        ] },
        { t: "I won't. But you could tell them.", notes: 2, then: [
          { s: 'yukari', f: 'neutral', t: "Maybe. When it's not... when I can say it without my voice doing this." }
        ] },
        { t: "They already know.", notes: 1, then: [
          { s: 'yukari', f: 'serious', t: "...Ugh. Of course they do. Junpei's been nice to me for a week. It's terrifying." }
        ] }
      ] },
      { place: 'Iwatodai Dorm · Rooftop · The Dark Hour', time: 'The Dark Hour' },
      { dark: true },
      { n: "They didn't go in. Midnight came the way it always came, all at once, and the cicadas stopped mid-scream, and the fireworks over the bay hung in the sky unfinished, a gold flower frozen halfway open, and the green rose up out of the concrete and settled over the roof and the empty line and the two of them, and they watched it come, which they had never once done on purpose." },
      { n: "Nobody turned into anything. Two girls on a roof, in the wrong-colored light, still there." },
      { s: 'yukari', f: 'neutral', t: "Okay. Okay. One more day." },
      { n: "She said it to the gold flower, or to the bay, or to someone younger than either of them, and Solar didn't ask which. She just stayed until the hour let go of the city, and then stayed a little longer, until Yukari's head tipped over onto her shoulder, heavy and damp and smelling of somebody's peach shampoo, and Yukari fell asleep there, for the first time since the island, mid-sentence, the way you'd put down something very heavy you'd forgotten you were carrying." },
      { dark: false }
    ] },

    { after: '9/9', title: "7: something you're bad at", place: 'Gekkoukan High · Archery Range', time: 'After School', scene: [
      { n: "September was still hot, but the light had changed. It came in lower across the field now, gold and slanting, and threw the shadows of the targets out long across the grass, and the air had a smell under the heat, dry and papery, like the first fallen leaves somewhere were thinking about it. The club had gone home an hour ago. Yukari hadn't." },
      { n: "She'd been staying late since the second term started. Solar had stopped asking why, because she could see why. The stillness hadn't come back from the summer. Yukari drew and held and reached for it and it wasn't there, and the arrows went where they went, which was mostly not the target." },
      { s: 'yukari', f: 'serious', t: "The captain says I'm in a slump. A slump. Like I'm a baseball player. Like I'm Junpei." },
      { s: 'yukari', f: 'neutral', t: "Here. You try." },
      { n: "She held the bow out. It was taller than Solar was, smooth and pale and warm where Yukari's hand had been." },
      { choose: [
        { t: "I'm going to be terrible.", notes: 3, then: [
          { s: 'yukari', f: 'neutral', t: "Good. I need to watch somebody be terrible. It's medicinal." }
        ] },
        { t: "(Take it.)", notes: 2, then: [
          { n: "She took it. It was heavier than it looked, and lighter than she'd braced for, which was somehow worse." }
        ] },
        { t: "Is that even allowed?", notes: 2, then: [
          { s: 'yukari', f: 'neutral', t: "The club's gone. Nobody's here but me. I'm allowing it." }
        ] }
      ] },
      { n: "She was terrible. It was wonderful. Her body knew a great many things it had no business knowing, how to fall, how to hit, which way the doors were and how many steps to each, how to hold an Evoker so steady it frightened people. It did not know this. It had never once in its life held a bow, and it told her so in every muscle, and her first arrow went into the dirt about three meters in front of her feet and stuck there, quivering, pointing at nothing." },
      { n: "Yukari laughed. Really laughed, bent over, one hand on her knee, the first real one since summer, and Solar stood holding the bow and let her, and found that she was smiling, the crooked one, without having been asked." },
      { s: 'yukari', f: 'blushing', t: "Oh thank god. Something you're bad at. I was starting to think you were a robot." },
      { s: 'yukari', f: 'neutral', t: "Okay. Okay, stop. You're holding it with your arms. Don't. You aim with your back." },
      { n: "She came and stood behind her and put one hand flat between Solar's shoulder blades and the other on her elbow, and moved her, an inch, two, the way you'd straighten a picture. Her voice changed when she taught. It went low and even and patient, like the range was a room you had to be quiet in." },
      { s: 'yukari', f: 'neutral', t: "It's not strength. Everybody thinks it's strength. It's letting go at exactly the right time, which, like. Nobody's good at." },
      { n: "On the bench behind them, in Solar's bag, her phone buzzed. Then again. She lost the draw. She didn't turn around, but her whole back went tight under Yukari's hand, and Yukari felt it." },
      { n: "Since late August it had been doing that. Messages from numbers she didn't know, old ones, arriving in no order she could make sense of, from people who knew her. People who used her name like it was theirs too. She'd been carrying the phone around like something that might go off." },
      { s: 'yukari', f: 'serious', t: "You've been doing that. Since summer. Your phone goes and you look at it like it's going to bite you." },
      { choose: [
        { t: "It's people who know me. I don't know them.", notes: 3, then: [
          { n: "Yukari didn't say anything for a moment. Then she took the bow out of Solar's hands, gently, and set it down, and sat on the edge of the range floor with her legs hanging over the grass, and Solar sat down beside her." },
          { s: 'yukari', f: 'sad', t: "That's so much worse than a slump." }
        ] },
        { t: "(Go and turn it face down on the bench.)", notes: 2, then: [
          { n: "She went and turned it over, face down, on the wood. Yukari watched her do it." },
          { s: 'yukari', f: 'neutral', t: "Huh. I know that move. I invented that move." }
        ] },
        { t: "It's nothing.", notes: 1, then: [
          { s: 'yukari', f: 'serious', t: "Okay, now you're doing my face. Don't do my face at me. I know my face." }
        ] }
      ] },
      { s: 'yukari', f: 'neutral', t: "I decided something. Over the summer. I didn't tell anybody." },
      { s: 'yukari', f: 'serious', t: "I'm not going to stop looking. Even if the answer's the one I already got. I want to know all of him, not just the part they recorded. Whatever's in the rest of it." },
      { s: 'yukari', f: 'neutral', t: "So maybe you read them. Not now. When you want. You don't have to like what's in them. You just get to know." },
      { choose: [
        { t: "Will you be there? When I do?", notes: 3, then: [
          { s: 'yukari', f: 'neutral', t: "Duh." },
          { s: 'yukari', f: 'blushing', t: "I mean. Yeah. Obviously. Where else would I be." }
        ] },
        { t: "You first.", notes: 2, then: [
          { s: 'yukari', f: 'neutral', t: "Ha. Okay. Deal. Race you." }
        ] },
        { t: "What if I don't want to know?", notes: 2, then: [
          { s: 'yukari', f: 'serious', t: "Then don't. Nobody gets to make you. Not them, not me. Not anybody." }
        ] }
      ] },
      { n: "Yukari stood up and took the bow back and walked to the line without saying anything else, and nocked, and drew, and Solar watched her not reach for it. She just drew, and held, and somewhere in the holding her shoulders came down about an inch, the way they had on the roof in May, and then the arrow was gone, with that sound, and it was in the gold." },
      { n: "Yukari lowered the bow and looked at it for a long time, down the long gold field." },
      { s: 'yukari', f: 'neutral', t: "...There it is." },
      { s: 'yukari', f: 'neutral', t: "Okay. Your turn again. Back. Not arms." },
      { n: "Solar's second arrow went about halfway down the field and lay down in the grass like it was tired. Yukari said that was better, that was so much better, that was like a hundred percent better, and it was, technically, and they stayed until the light went and the targets disappeared, and the phone stayed face down on the bench the whole time, and nobody went to get it." }
    ] },

    { after: '10/7', title: '8: curry from the box', place: 'Iwatodai Dorm · Kitchen', time: 'Evening', scene: [
      { n: "Nobody had cooked in the dorm kitchen since the bridge. They'd eaten. People had to eat. Convenience-store bentos, Hagakure, cup noodles stacked in the cupboard in a tower Junpei called the monument. But the kitchen itself had stayed exactly as it was, the pans hung on their hooks in an order that wasn't anybody's who lived here anymore, the knives clean in their block, a dish towel folded over the oven handle in a particular way, and everyone had walked past it for days with their eyes on the floor." },
      { n: "Then on Wednesday Yukari came home from practice with two plastic bags and a box of curry roux and the face she wore on the range when the wind was bad, and put on an apron that was much too big for her, and turned on the stove." },
      { s: 'yukari', f: 'serious', t: "Somebody has to. And it's not going to be Akihiko-senpai. I'm not eating protein curry. I'll die." },
      { s: 'yukari', f: 'neutral', t: "Wash your hands. You're on onions." },
      { choose: [
        { t: "(Chop the onions.)", notes: 3, then: [
          { n: "Her hands were fast with a knife. Neither of them commented on it. The onions came out in even little half-moons, a neat pale pile, and Yukari looked at the pile and then at Solar and said that's creepy, and Solar said thank you, and Yukari's mouth twitched, and that was the first good minute the kitchen had had in days." }
        ] },
        { t: "Shouldn't we follow the box exactly?", notes: 2, then: [
          { s: 'yukari', f: 'neutral', t: "We are following the box. I'm following the box so hard." },
          { n: "She held it up like evidence. The box had a smiling cartoon carrot on it and very confident instructions." }
        ] },
        { t: "Is it supposed to be that color?", notes: 1, then: [
          { s: 'yukari', f: 'serious', t: "It's the first step. Everything's that color in the first step. Geez. Onions." }
        ] }
      ] },
      { n: "The dorm had new faces at dinner most nights now. People who had turned up out of the dark looking for her, who knew how she took her coffee and what she was like before nine in the morning, and who said her name like they'd been saying it for years, because, as far as Solar could tell, they had. They were upstairs now, somewhere, loud. Every so often their laughter came down through the ceiling and Yukari's knife paused on the cutting board." },
      { s: 'yukari', f: 'neutral', t: "Those girls call you Sol." },
      { s: 'yukari', f: 'neutral', t: "I heard them on the stairs. Sol, Sol, Sol. Like it's nothing. Like they've been saying it forever." },
      { s: 'yukari', f: 'sad', t: "They probably have. Right?" },
      { n: "She stirred the pot. She didn't look up from it. The roux went in, the brown blocks softening and spreading, and the kitchen began, slowly, to smell like a kitchen again, warm and thick and a little sweet, a smell that went straight down into your stomach and sat there being kind to you." },
      { s: 'yukari', f: 'serious', t: "Should I? Call you that? I don't even know what you want anymore. Not that I ever knew. Geez." },
      { choose: [
        { t: "You knew me first. Here. You can call me Solar.", notes: 3, then: [
          { s: 'yukari', f: 'surprised', t: "...Just Solar?" },
          { s: 'solar', f: 'neutral', t: "Just Solar." },
          { n: "Yukari had called her that at the faculty office door on the very first morning, half a joke, half because there wasn't anything else to call her. Solar watched her remember it. Watched it land somewhere under the apron, and stay." },
          { s: 'yukari', f: 'blushing', t: "Okay. Okay. Shut up. Stir this, my eyes are doing a thing. It's the onions." }
        ] },
        { t: "I don't know what I am yet.", notes: 2, then: [
          { s: 'yukari', f: 'neutral', t: "Okay. Then I'll call you Solar until you know. And then I'll probably still call you Solar. I'm stubborn." }
        ] },
        { t: "Call me whatever you want.", notes: 1, then: [
          { s: 'yukari', f: 'serious', t: "That's not an answer. That's a cop-out. That's a Junpei answer." }
        ] }
      ] },
      { s: 'yukari', f: 'sad', t: "I keep thinking about how fast it goes. Since that Sunday. Like, somebody's in the kitchen. And then there's just a kitchen." },
      { s: 'yukari', f: 'neutral', t: "And now there's all these people who know you better than I do, and one day they're going to want you back, and I'm going to be standing in a kitchen." },
      { choose: [
        { t: "(Take the spoon and stir, so she can stop.)", notes: 3, then: [
          { n: "Solar took the spoon out of her hand. Yukari let her. She leaned back against the counter beside the stove with her arms wrapped around herself, shoulder to shoulder with Solar, close enough that Solar could feel her breathing, uneven and then less uneven, while the curry went around and around, and neither of them said anything, and the kitchen let them." }
        ] },
        { t: "I'm still here.", notes: 2, then: [
          { s: 'yukari', f: 'neutral', t: "For now." },
          { n: "She said it, and then hated that she'd said it, Solar could see her hate it, and she bumped Solar with her hip by way of apology and kept stirring." }
        ] },
        { t: "It's starting to stick.", notes: 1, then: [
          { s: 'yukari', f: 'surprised', t: "Oh my god. Oh my god, it's burning. Why didn't the box say it burns?" }
        ] }
      ] },
      { place: 'Iwatodai Dorm · Dining Room', time: 'Evening' },
      { n: "The curry was not good. It was too thick and a little scorched along the bottom and the carrots were the size of thumbs, and everybody ate it. Junpei had thirds and said it was the best curry of his life, which was a lie, and then had a fourth, which wasn't. Akihiko ate standing up, out of habit, and then sat down, slowly, and stayed. Mitsuru took one bite and set down her spoon and said, very quietly, thank you, Takeba, and Yukari looked at her plate and went pink to the ears." },
      { n: "The new faces ate it without complaining, which Yukari took as the highest possible compliment. Somebody upstairs had left the radio on. Somebody laughed. The kitchen, behind them, had the lights on." },
      { n: "Later, washing up, Yukari handed her a dripping plate and said Solar, just that, nothing after it, like she was trying it out, and Solar took the plate and dried it and said yeah, and Yukari nodded, satisfied, and handed her the next one." }
    ] },

    { after: '11/9', title: '9: somewhere to put it', place: 'Gekkoukan High · Archery Range', time: 'After School', scene: [
      { n: "November had come in cold and stayed cold. It was dark by five now, and the range had its lights on, two long white tubes under the roof that buzzed and made the field beyond look darker than it was, and Yukari's breath smoked every time she let an arrow go, a little gray puff that hung in the air and went." },
      { n: "The dorm had been very quiet since that Wednesday. Mitsuru hadn't come down to breakfast for a week. Her chair at the head of the table had stayed pushed in, and nobody sat in it, and nobody said anything about not sitting in it. Yukari had been gone most of Friday, in a black dress Solar had never seen, and come home after dark and gone straight up to her room, and on Saturday Junpei had said, carefully, to the cereal box, that she'd sat with Mitsuru-senpai for three hours and not said one word." },
      { choose: [
        { t: "(Wait for her to bring it up.)", notes: 3, then: [
          { n: "Solar sat on the bench and waited. Yukari shot four, five, six, and the waiting went on long enough to become a kind of company, and then, on the seventh arrow, with the bow still drawn, she started talking, the way you'd start talking in a car, to the windshield." }
        ] },
        { t: "Junpei said you sat with her.", notes: 2, then: [
          { s: 'yukari', f: 'serious', t: "Junpei has a big mouth." },
          { s: 'yukari', f: 'neutral', t: "...Yeah. I did." }
        ] },
        { t: "How's Mitsuru-senpai?", notes: 2, then: [
          { s: 'yukari', f: 'neutral', t: "Fine. She says. She's fine like I'm fine." }
        ] }
      ] },
      { s: 'yukari', f: 'neutral', t: "I've hated that name since I was a little kid. Kirijo. Did you know that? Since before I could spell it." },
      { s: 'yukari', f: 'serious', t: "It was on everything. The news, the lab, the letters that came to our house. I used to see it on a building and get this feeling in my stomach like I was going to throw up. I joined S.E.E.S. half to find out about my dad and half to stand in the same room as a Kirijo and, I don't know. Be mad at her up close." },
      { n: "She let the arrow go. It went into the outer ring, and she didn't look." },
      { s: 'yukari', f: 'sad', t: "And then she was standing there in black, perfectly straight, shaking hands with about a hundred old men, and her hands were freezing, I could see they were freezing, and she didn't stop once." },
      { s: 'yukari', f: 'sad', t: "And I looked for it. The mad. I looked everywhere for it. And it just wasn't there. There was just a girl with a dad-shaped thing in the middle of everything. Same as me." },
      { s: 'yukari', f: 'neutral', t: "So now I've got all this... stuff. Ten years of it. And nowhere to put it." },
      { choose: [
        { t: "Give some of it to me.", notes: 3, then: [
          { s: 'yukari', f: 'serious', t: "You can't just take somebody's stuff." },
          { s: 'solar', f: 'sad', t: "I've got room. There's not a lot else in here." },
          { n: "She tapped her own temple when she said it, lightly, where the Evoker went, and Yukari stared at her for a second and then made a sound halfway between a laugh and something wetter." },
          { s: 'yukari', f: 'sad', t: "That's the saddest thing anybody's ever said to me." },
          { s: 'solar', f: 'neutral', t: "It's useful, though." },
          { s: 'yukari', f: 'blushing', t: "...It's a little useful. Okay. I'll think about it. Geez." }
        ] },
        { t: "Put it here. On the range.", notes: 2, then: [
          { s: 'yukari', f: 'neutral', t: "I've been trying. That's what this whole week's been. I'm just putting arrows in the grass." }
        ] },
        { t: "You don't have to put it anywhere.", notes: 1, then: [
          { s: 'yukari', f: 'serious', t: "I do, though. It's heavy. You don't get it. You don't have..." },
          { n: "She stopped there. They both heard the rest of it. She said sorry, and Solar said it was fine, and it mostly was." }
        ] }
      ] },
      { n: "Yukari lowered the bow. Her fingers in the glove were red with cold. She looked down at them, and then across at Solar on the bench, and her face did something Solar hadn't seen it do before, not the light and not the tired real one underneath it, but a third thing, frightened and very young and completely unguarded, like a window somebody had forgotten to draw the curtain over." },
      { s: 'yukari', f: 'serious', t: "Promise me something. And don't do the smile. Don't do any of them." },
      { s: 'yukari', f: 'sad', t: "Everybody in my life just goes. My dad. My mom, kind of, in a different way. They're there and then there's a car outside. So if you go. Wherever. Whenever. You say goodbye. To my face. You don't get to just not be on the roof one day." },
      { choose: [
        { t: "I'll say goodbye. To your face.", notes: 3, then: [
          { n: "She said it without any face at all, and Yukari looked at her for a long time, checking, the way you check a knot before you trust it with your weight, and whatever she found there, she nodded at it." },
          { s: 'yukari', f: 'neutral', t: "Okay. Okay. Good. That's all." }
        ] },
        { t: "I don't know if I get to choose.", notes: 2, then: [
          { s: 'yukari', f: 'serious', t: "Then if you get to. If you get even one second to choose. You use it on me." }
        ] },
        { t: "I'm not going anywhere.", notes: 2, then: [
          { s: 'yukari', f: 'serious', t: "You don't know that. Nobody knows that. Promise the other thing." },
          { n: "So Solar promised the other thing, and Yukari made her say it twice, and the second time she believed it." }
        ] }
      ] },
      { n: "Yukari nocked one more arrow. She drew it the whole way back, held, breathed out a long gray cloud into the cold, and let it go, and didn't watch where it went. Solar did. It went somewhere into the dark past the lights, and they never heard it land." },
      { s: 'yukari', f: 'neutral', t: "Huh. I don't care where that went. That's new." },
      { n: "She unstrung the bow and they walked home the long way, past the station, in the cold, and somewhere on the bridge Yukari said that she was going to make Mitsuru-senpai come to Wild-Duck with them, like, soon, and that she'd probably hate it, and that was fine, and Solar said she wouldn't hate it, and Yukari said, I know. That's what's so annoying." }
    ] },

    { after: '12/7', title: '10: proof', place: 'Paulownia Mall · Central Atrium', time: 'After School', scene: [
      { n: "The mall had put its Christmas up while nobody was looking. A tree three stories tall stood in the atrium where the fountain usually was, white lights and silver balls and a gold star on top that somebody on a very tall ladder had clearly argued about, and the speakers were playing the same four carols on a loop, and the whole place smelled of cinnamon and wet wool and the cold that came in every time the doors opened." },
      { n: "Yukari had a list. She had written it in pink pen on the back of a receipt and was holding it the way Mitsuru held a budget." },
      { s: 'yukari', f: 'serious', t: "One. You need a real winter coat, that thing from April is a spring coat, I can't believe I let you buy a spring coat. Two. Gloves, because you keep putting your hands in your sleeves like a raccoon. Three..." },
      { s: 'yukari', f: 'neutral', t: "Okay, three is a secret. What do you want to do first? You pick." },
      { choose: [
        { t: "(Point at the photo booth by the arcade.)", notes: 3, then: [
          { s: 'yukari', f: 'surprised', t: "...That was three. How did you know that was three?" },
          { s: 'solar', f: 'happy', t: "You looked at it twice while you were reading." },
          { s: 'yukari', f: 'blushing', t: "I hate you. Okay. Fine. Yes. Three first." }
        ] },
        { t: "The coat. It's freezing.", notes: 2, then: [
          { n: "The coat took eleven minutes. Solar picked a long gray one off the rack without trying it on, and Yukari said I knew you'd do that, and made her try it on anyway, and it was perfect, and Yukari was furious about it, and then dragged her by the new sleeve straight to the photo booth by the arcade, because three, it turned out, was the photo booth." }
        ] },
        { t: "You pick.", notes: 1, then: [
          { s: 'yukari', f: 'serious', t: "Nope. Not today. Today you pick. That's the whole..." },
          { s: 'yukari', f: 'neutral', t: "...Ugh. Fine. Photo booth. Three's the photo booth. Come on." }
        ] }
      ] },
      { place: 'Paulownia Mall · Photo Booth', time: 'After School' },
      { n: "It was a narrow box with a curtain printed with hearts and a stool built for one and a half people, and it smelled like hot plastic and somebody's strawberry lip gloss, and the screen inside lit up pink and told them, in a cheerful voice, to get ready." },
      { s: 'yukari', f: 'serious', t: "You know you don't have any pictures? Like, at all? The only picture of you in this whole city is stapled to a form in Mitsuru-senpai's folder. And you look like you got arrested." },
      { s: 'yukari', f: 'neutral', t: "So. Proof. Four frames. Do whatever." },
      { n: "The screen counted down from five. Solar felt her face start, all on its own, to reach for something to be." },
      { choose: [
        { t: "(Don't decide. Let your face do whatever it does.)", notes: 3, then: [
          { n: "She didn't decide. She let the countdown happen to her, five, four, and Yukari's elbow was in her ribs and Yukari's hair was in her mouth and Yukari was saying don't you dare do the nice one, and somewhere around two Solar stopped trying to have a face at all, and the flash went." }
        ] },
        { t: "(Do the bright smile. The perfect one.)", notes: 1, then: [
          { n: "The light came on, flawless, aimed at nobody. Yukari saw it in the screen and elbowed her, hard." },
          { s: 'yukari', f: 'serious', t: "Nope. Absolutely not. Not that one. Not in here." },
          { n: "Solar lost it on the third frame anyway, because Yukari was making a face at her like a startled fish, and the flash caught her mid-laugh with her eyes shut." }
        ] },
        { t: "(Make the stupidest face you can. Commit.)", notes: 2, then: [
          { n: "She committed. Yukari, beside her, saw it in the screen and committed harder, out of pure competitive spite, and by the third frame they were both laughing too hard to make any face at all, and the flash didn't care." }
        ] }
      ] },
      { n: "The strip dropped out of the slot still warm, and Yukari grabbed it before Solar could, and held it up to the Christmas lights." },
      { n: "Four frames. Yukari's elbow, Yukari's hair, Yukari's fish face. And in the last one, Solar, looking slightly off to one side at Yukari, not at the camera at all, with the smile from the roof in May. The small one. The crooked one. She hadn't known it showed on the outside like that." },
      { s: 'yukari', f: 'neutral', t: "There. That one. That's you." },
      { n: "Then Yukari tore the strip in half, very carefully, along the white line between the second frame and the third, with her tongue between her teeth like she was defusing something, and held out the bottom half." },
      { s: 'yukari', f: 'neutral', t: "That's yours. So you have proof. Wherever." },
      { s: 'yukari', f: 'serious', t: "And I'm going to say something, and you're not going to make it weird, and I'm only saying it once." },
      { s: 'yukari', f: 'serious', t: "That first night, I said I'd walk you up because somebody had to. That was a lie. Nobody had to. I wanted to. I've wanted to every day since. I just really wanted to see what you'd pick. I still do." },
      { s: 'yukari', f: 'sad', t: "So whatever you pick. In the end. Wherever. You pick it because you want it. Not because somebody needs you to. Not them, not the dorm. Not me." },
      { s: 'yukari', f: 'blushing', t: "Okay. That's it. I'm done. Don't look at me." },
      { choose: [
        { t: "I'll pick the rabbits.", notes: 3, then: [
          { n: "Yukari stared at her. Then she laughed, so hard and so suddenly that a family walking past the photo booth turned to look, and she put both hands over her face, and she was still laughing when the laughing went into the other thing, and she said into her palms, you're so stupid, you're so stupid, I'm going to kill you, and didn't take her hands away for a long time." }
        ] },
        { t: "Okay.", notes: 2, then: [
          { s: 'yukari', f: 'neutral', t: "Okay?" },
          { s: 'solar', f: 'neutral', t: "Okay." },
          { n: "Yukari nodded, hard, twice, like that settled something, and blew her nose on a napkin from the crêpe stand, and said they were getting gloves now, immediately, and walked off fast toward the shops so Solar wouldn't see her face, and Solar let her." }
        ] },
        { t: "You didn't have to do any of it.", notes: 2, then: [
          { s: 'yukari', f: 'serious', t: "I know. That's the point. Geez. Were you even listening?" },
          { n: "But she was smiling when she said it, the real one, tired and bright at once, and she knocked her shoulder into Solar's and left it there." }
        ] }
      ] },
      { cg: 'link-yukari-r10' },
      { n: "They bought gloves. They bought hot chocolate in paper cups and drank it on the edge of the dry fountain under the enormous tree, and Yukari stole the marshmallows out of Solar's, which Solar allowed." },
      { cg: null },
      { n: "That night, in her room, Solar put the half strip in the back of her student handbook, behind the page with her name on it, the one with the blank where the rest of her name was supposed to go. She wasn't sure why there. It just seemed like the place for it. Two frames of a girl with no surname looking sideways at a friend, which was, she thought, turning off the lamp, more than most people had to go on." }
    ] }
  ],
  afterMax: [
    { place: "Iwatodai Dorm · Solar's Room", time: 'Night', scene: [
      { n: "Yukari knocked on her door at eleven with a shoebox full of nail polish under one arm and didn't wait to be told to come in, which had been true for a while now. Outside it was raining something that was almost sleet, ticking at the window, and the radiator under it clanked like it had a grudge, and the dorm below them was louder than it had been all year, full of voices and doors and footsteps, people who had come looking for Solar and found a building that didn't have enough bathrooms." },
      { s: 'yukari', f: 'neutral', t: "Okay. Hands. I'm doing your hands. You've been chewing your thumb, don't lie, I've seen you." },
      { n: "She sat cross-legged on the bed and took Solar's hand and turned it over, palm up, and then palm down, frowning at it like a math problem." },
      { s: 'yukari', f: 'neutral', t: "Can I ask something? You can say no." },
      { s: 'yukari', f: 'serious', t: "Do they tell you stuff? The people who know you. Like, your favorite color. Your favorite food. What you're like in the morning." },
      { choose: [
        { t: "All the time. I'm checking it against what I like now.", notes: 3, then: [
          { s: 'yukari', f: 'surprised', t: "And? Does it match?" },
          { s: 'solar', f: 'neutral', t: "Some of it." },
          { s: 'yukari', f: 'neutral', t: "Huh. Okay. Then don't tell me what they said. I don't want to know what they said. I want to know what you say. Pick a color. No thinking." }
        ] },
        { t: "Sometimes. It's strange.", notes: 2, then: [
          { s: 'yukari', f: 'neutral', t: "Yeah. I bet. Okay, forget them for a sec. Pick a color. No thinking." }
        ] },
        { t: "Why do you want to know?", notes: 1, then: [
          { s: 'yukari', f: 'blushing', t: "No reason. Jealous. Shut up. Pick a color." }
        ] }
      ] },
      { n: "Solar pointed. She didn't look first. It was a pale, cold, silvery blue, the color of the sky over the bay at six in the morning in winter, and Yukari held the bottle up to the lamp and looked at it for a long time." },
      { s: 'yukari', f: 'neutral', t: "Huh. I wouldn't have guessed that. I'd have guessed, like, black. Something dramatic." },
      { s: 'yukari', f: 'neutral', t: "I like that I wouldn't have guessed it." },
      { n: "She painted carefully, with her tongue between her teeth, one nail and then the next, and blew on each one, and talked the whole time about nothing, Junpei and a test and a boy in her class who'd tried to ask her out by leaving a canned coffee in her shoe locker, which she'd drunk, and which didn't mean anything, and Solar sat on her own bed with her hand held in someone else's and listened to the sleet and the radiator and Yukari, and didn't count anything at all." },
      { s: 'yukari', f: 'neutral', t: "There. Done. Don't touch anything for twenty minutes. Don't even think about touching anything." },
      { n: "Solar held her hand up to the lamp. Ten small pieces of a winter morning. She didn't know whose favorite color it was. She decided, sitting there, that it was hers, and that she'd decided, and that nobody had told her, and the deciding felt like setting something down." }
    ] },
    { place: 'Gekkoukan High · Archery Range', time: 'After School', scene: [
      { n: "There was frost on the range in the mornings now, and it didn't always melt by afternoon. The grass beyond the roof had gone stiff and silver, and the targets stood in it like gravestones in an old painting, and Yukari's breath and Solar's went up together in the cold and mixed and went, and the whole school behind them was quiet, emptied out early by the weather and by something else, a weight the end of the month had on it that everybody in the dorm could feel and nobody had a name for." },
      { s: 'yukari', f: 'serious', t: "Back. Not arms. How many times. You've been doing this since September." },
      { s: 'solar', f: 'neutral', t: "I know." },
      { s: 'yukari', f: 'neutral', t: "I know you know. Your back doesn't know." },
      { n: "Solar drew. Her arms ached in a way they had never ached in Tartarus, a long, honest, stupid ache, the ache of something you were bad at and kept doing anyway. Yukari's hand was flat between her shoulder blades. Yukari's other hand moved her elbow up an inch. Somewhere a crow said something rude." },
      { s: 'yukari', f: 'neutral', t: "Okay. Breathe out. And don't reach for it. Just, like. Let it come find you." },
      { choose: [
        { t: "(Stop trying. Let go when it feels right.)", notes: 3, then: [
          { n: "She stopped trying. That was the whole trick, it turned out. She stopped reaching for the stillness and it came to her anyway, at the end of a breath, a small quiet place in the middle of her where nothing was being decided, and her fingers opened by themselves." }
        ] },
        { t: "(Aim. Really aim.)", notes: 2, then: [
          { n: "She aimed, really aimed, until her eyes watered, and Yukari said, softly, you're doing it with your arms again, and she breathed out and stopped, and her fingers opened before she'd quite told them to." }
        ] },
        { t: "What if I miss again?", notes: 1, then: [
          { s: 'yukari', f: 'neutral', t: "Then you miss again. Geez. It's an arrow. It's not a, like, life decision." },
          { n: "Solar laughed, and her fingers opened on the laugh." }
        ] }
      ] },
      { n: "There was the sound like a page tearing. Then, a long way off, a different sound, small and flat and wooden." },
      { n: "It was in the target. It was in the very outermost ring, at the bottom edge, hanging on by about two centimeters, leaning out of the straw like it was trying to leave. It was, without question, in the target." },
      { n: "Yukari screamed. She screamed so loud the crow left. She grabbed Solar by both shoulders and shook her, and jumped up and down on the frozen floor of the range in her socks, and said you did it, you did it, you hit it, I told you, it's your back, I told you it was your back, and Solar stood there holding the bow, and her face was doing something she couldn't see and didn't try to." },
      { s: 'yukari', f: 'blushing', t: "Okay. Okay. I'm calm. I'm so calm. I'm going to tell everyone at dinner. I'm going to tell Mitsuru-senpai. She's going to want a report." },
      { s: 'yukari', f: 'neutral', t: "...That's yours, by the way. That one. Whatever happens. You hit that." },
      { n: "They left it there. Neither of them wanted to be the one to pull it out. It was still there the next morning, Yukari reported at breakfast, frosted over and leaning, and the morning after that, and the captain asked about it, and Yukari said it was the best shot anybody had made on that range all year, and refused to explain." }
    ] }
  ]
});
