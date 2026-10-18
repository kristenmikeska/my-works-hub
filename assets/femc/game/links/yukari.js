/* Yukari Takeba · VI The Lovers. Revamp social link data (femc-game.html). Format: link fields in assets/femc/game/core.js, scene lines in scene.js. */
(window.FEMC_GAME_LINKS ||= []).push({
  id: 'yukari', name: 'Yukari Takeba', short: 'Yukari', arcana: 'Lovers', numeral: 'VI', from: 'Persona 3',
  kind: 'sees',
  romance: null,
  starts: '4/13',
  home: { area: 'Gekkoukan High', spot: 'Archery Range', slot: 'after', days: [1, 3, 5],
          hint: 'After school on Monday, Wednesday and Friday, at the archery range.' },
  approach: "Yukari is at the archery range after school, stringing her bow with her back to the gate. She's told you twice this week that you don't have to wait for her, and both times she looked relieved when you did.",
  cast: { classmate: 'Classmate' },
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

    { todo: 'Rank 4 (see plot doc §5).' },
    { todo: 'Rank 5 (see plot doc §5).' },
    { todo: 'Rank 6 (see plot doc §5).' },
    { todo: 'Rank 7 (see plot doc §5).' },
    { todo: 'Rank 8 (see plot doc §5).' },
    { todo: 'Rank 9 (see plot doc §5).' },
    { todo: 'Rank 10 (see plot doc §5).' }
  ]
});
