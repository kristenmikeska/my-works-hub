/* Kiriko · X Fortune. Arrives on the 5/9 full moon. Friendship only. Format notes are at the top of akihiko.js.
   She draws an omikuji fortune for Solar in every rank. Runners crossover: in another world, Solar mains Kiriko
   (Grandmaster, tournament MVP) and always queues with a boy who mains Widowmaker. */
FemcSocial.define({
  id: 'kiriko', name: 'Kiriko', short: 'Kiriko', arcana: 'Fortune', numeral: 'X', from: 'Overwatch',
  arrives: '5/9',
  home: { place: 'Naganaki Shrine', slot: 0, days: [0, 2, 4, 6], hint: 'Daytime on Sundays, Tuesdays, Thursdays and Saturdays, at Naganaki Shrine.' },
  approach: "A girl in a shrine maiden's outfit is sitting on the offering box with her legs crossed, eating something she definitely shouldn't be eating at a shrine.",
  invite: {
    ask: [
      "come to the shrine. i have snacks. dont tell anyone",
      "u free? fortune time 🦊",
      "bored. come hang",
      "i drew ur fortune already. come get it before the dog eats it",
      "the shrine is SO clean today. come look at it. admire my work",
      "i have two melon pan and one stomach. help",
      "emergency. not a real emergency. a snack emergency 🦊",
      "the fox statues are lonely. come say hi to them. and me"
    ],
    ok: ["yay 🦊 hurry", "yesss. ill save u the good step", "ok ok ok come up the stairs. all of them lol"],
    no: ["boo. ok", "fine. ur fortune will wait. its very patient", "ok 😔 next time"]
  },
  hangouts: [
    [
      { n: "Kiriko was sweeping again. She swept the shrine the way some people played music, with her whole body, humming, the broom going in long confident arcs across the gravel while the crows on the torii watched her like disappointed critics." },
      { s: 'kiriko', f: 'happy', t: "Oh, good, you're here. Grab the other broom. It's behind the offering box. It's the bad one, sorry, I keep the good one for me." },
      { choose: [
        { t: "(Grab the bad broom and get to work.)", notes: 3, then: [
          { n: "The bad broom was missing half its bristles and shed the rest as Solar swept, so that mostly she was redistributing the leaves in a more organized way. Kiriko watched her for a minute and then traded brooms without a word, which was, Solar understood, the highest honor the shrine had to give." }
        ] },
        { t: "I'll supervise.", notes: 2, then: [
          { s: 'kiriko', f: 'neutral', t: "Wow. Okay. Management." },
          { n: "Solar supervised from the steps. Kiriko swept a perfect spiral around her, on purpose, so she ended up sitting in the middle of it like a stone in a raked garden." }
        ] }
      ] },
      { s: 'kiriko', f: 'happy', t: "Done! Fortune for the labor. Shrine rules." },
      { s: 'kiriko', f: 'neutral', t: "Sho-kichi. Small blessing. \"Tend the small things and the big things will follow.\" ...Huh. I think that one's for me." },
      { n: "The gravel lay in neat lines behind them, and the crows, for once, had nothing to say." }
    ],
    [
      { n: "Kiriko shook the fortune box, slid out the stick, checked the number, pulled the paper from its drawer, and made a noise like a stepped-on cat." },
      { s: 'kiriko', f: 'surprised', t: "Kyo. Bad luck. For YOU. On MY shrine." },
      { s: 'kiriko', f: 'serious', t: "\"Lost things stay lost. Travel is unwise. Your wish will not be granted.\" Wow. Rude. Who even writes these?" },
      { choose: [
        { t: "Tie it to the tree. That's what you do with bad ones, right?", notes: 3, then: [
          { s: 'kiriko', f: 'happy', t: "Yes! You leave the bad luck at the shrine and the gods deal with it. That's the whole system. You know the system!" },
          { n: "She tied it to the low branch of the pine by the water basin, among a dozen other little white knots, with a fierce double knot, like she was tying up a prisoner." }
        ] },
        { t: "Can I draw again?", notes: 2, then: [
          { s: 'kiriko', f: 'flustered', t: "That's... technically cheating. Do it anyway. I'm not looking." },
          { n: "Kichi. Blessing. Kiriko announced it with the enormous relief of someone who had, in every possible sense, been looking." }
        ] },
        { t: "I've had worse.", notes: 1, then: [{ s: 'kiriko', f: 'sad', t: "Don't say it like that. Now I have to worry about you all day." }] }
      ] },
      { n: "On the way down the steps Solar looked back. Kiriko was standing by the pine with her arms crossed, glaring at the knot, as though the bad luck might try something the moment she turned her back." }
    ],
    [
      { n: "Kiriko was sitting on the offering box again, which Solar was fairly sure was some kind of sacrilege, eating a melon pan out of a convenience store bag while the white dog sat at her feet in an attitude of total, focused hope." },
      { s: 'kiriko', f: 'happy', t: "Don't look at me like that. Either of you. I bought two. One's yours." },
      { s: 'kiriko', f: 'neutral', t: "He's had three bites of mine already. He does a thing with his eyes. It's a technique. It's extremely effective." },
      { choose: [
        { t: "(Split yours three ways.)", notes: 3, then: [
          { n: "Solar tore her melon pan into three uneven pieces and gave the biggest one to the dog, and Kiriko stared at her like she'd done something holy." },
          { s: 'kiriko', f: 'happy', t: "Okay. You're a shrine regular now. That's the initiation. Sharing with the boss." }
        ] },
        { t: "He's a dog. You're supposed to be stronger than him.", notes: 2, then: [
          { s: 'kiriko', f: 'serious', t: "Have you SEEN him? Nobody's stronger than him." },
          { n: "The dog, hearing himself discussed, put one paw on Solar's knee. She lasted about four seconds." }
        ] }
      ] },
      { s: 'kiriko', f: 'neutral', t: "Snack fortune. Chu-kichi. Middle blessing. \"Something sweet, shared, becomes sweeter.\" Ugh. Okay. Fine. The gods are watching." },
      { n: "The crumbs went to the sparrows. The sparrows, Kiriko said, were also technically shrine staff." }
    ],
    [
      { n: "The stone foxes on either side of the shrine path wore red bibs, and the bibs had faded in the sun, and Kiriko had bought new ones and was crouched in front of the left fox retying its bib with the concentration of someone dressing a small child for a wedding." },
      { s: 'kiriko', f: 'neutral', t: "This one's grumpy. That one's nice. Don't tell them I said that. They can hear." },
      { s: 'kiriko', f: 'happy', t: "You do the nice one. Bow first. You always bow first." },
      { choose: [
        { t: "(Bow to the fox and introduce yourself.)", notes: 3, then: [
          { n: "Solar bowed and told the stone fox her name and her school and, after a moment's thought, her blood type, since it seemed like the kind of fox who would want to know. Kiriko made a small strangled sound of joy." },
          { s: 'kiriko', f: 'happy', t: "Okay, that's the most polite thing I've ever seen. He's going to love you forever now." }
        ] },
        { t: "(Just tie the bib.)", notes: 1, then: [
          { s: 'kiriko', f: 'surprised', t: "You didn't bow! Oh no. Okay. Bow now. Quick, before he notices." },
          { n: "Solar bowed, late, to a stone fox, and felt, genuinely, forgiven." }
        ] },
        { t: "Why is that one grumpy?", notes: 2, then: [{ s: 'kiriko', f: 'neutral', t: "He's been guarding this shrine for a hundred years and nobody brought him anything. Wouldn't you be?" }] }
      ] },
      { s: 'kiriko', f: 'happy', t: "Fortune for good manners. Kichi. Blessing. \"Respect the old guardians, and they will keep you.\"" },
      { n: "When they were done both foxes stood gleaming in their new red bibs, and Solar could have sworn the grumpy one looked very slightly less grumpy." }
    ],
    [
      { n: "The ema rack by the shrine office was hung with little wooden plaques, wishes written in marker on the back, and Kiriko was reading them one by one with the deep investment of someone catching up on a television drama." },
      { s: 'kiriko', f: 'happy', t: "Listen to this. \"Please let me pass the entrance exam.\" Good luck, buddy. \"Please let my cat come home.\" Oh no. \"Please make Tanaka notice me.\" TANAKA. NOTICE HER." },
      { s: 'kiriko', f: 'neutral', t: "I can't grant any of these. I'm not that kind of shrine girl. But I can root for them." },
      { choose: [
        { t: "Which one are you rooting for most?", notes: 3, then: [
          { s: 'kiriko', f: 'serious', t: "The cat. Obviously. I'm making flyers." },
          { n: "She was not joking. By the end of the afternoon there were six hand-drawn flyers drying on the shrine steps, each with a cat on it that looked a little like a fox." }
        ] },
        { t: "(Write one of your own and hang it up.)", notes: 2, then: [
          { s: 'kiriko', f: 'flustered', t: "Hey! You covered it with your hand! I can't root for it if I can't read it!" },
          { n: "Solar didn't let her read it. Kiriko spent the next ten minutes pretending not to try." }
        ] },
        { t: "Tanaka is never going to notice her.", notes: 1, then: [{ s: 'kiriko', f: 'surprised', t: "Not with that attitude he won't!" }] }
      ] },
      { s: 'kiriko', f: 'neutral', t: "Fortune for the wishers. Sue-kichi. Future blessing. \"What you hope for is on its way. It is walking, not running.\"" },
      { n: "She hung the fortune on the rack among the ema, right in the middle, where everyone would see it." }
    ]
  ],
  // After MAX (rank 10 is 12/12 or later): four friend scenes, then they rotate. She still draws a fortune every time.
  afterMax: [
    { title: 'healer main', place: 'Paulownia Mall · Arcade', scene: [
      { n: "Kiriko had found the arcade. This was a problem, in the sense that she had walked into Paulownia Mall the week before for crepes and come out four hours later with no crepes, a cup of tokens, and the high score on a machine that dispensed tiny plastic capsules with tiny plastic foxes inside, which she maintained were her relatives." },
      { n: "Today she'd found something else. At the back, behind the racing games, there was a cabinet Solar had never noticed, two seats side by side and a screen full of bright little characters running and shooting and flickering as a team, and Kiriko was standing in front of it with both hands flat on the plastic, like she'd recognized somebody across a crowded room." },
      { s: 'kiriko', f: 'serious', t: "Sol-chan. It's not the same game. It's not. But look. There's a healer." },
      { n: "There was. A small figure in white at the back of the team, throwing green light at people who were about to die, getting nothing for it, doing it anyway." },
      { s: 'kiriko', f: 'happy', t: "Sit. Sit sit sit. You're the healer. I'm being the loud one with the hammer." },
      { n: "Solar sat. She had never played anything like it in her life. She was nearly sure she had never played anything like it in her life. She put her hands on the controls, and they were cold, and then they weren't, and somewhere in the first thirty seconds her hands stopped asking her permission." },
      { n: "She knew where to stand. That was the strange part. Not the buttons, the buttons were just buttons, but where to stand, where the sightlines would be, which teammate was about to overextend a full second before he did it, so that the light was already on its way. Kiriko's hammer guy went in like a battering ram, and every single time he should have died, he didn't." },
      { s: 'kiriko', f: 'surprised', t: "...Okay. Okay okay okay. Sol-chan." },
      { choose: [
        { t: "(Keep playing. Don't think about it.)", notes: 3, then: [
          { n: "She didn't think about it. That was the trick, she understood, the same as on the shrine steps in the green hour. If she thought about it, it would go. So she kept her eyes on the screen and let her hands do whatever they apparently knew, and beside her Kiriko went very quiet and played the loud one with the hammer like she trusted the light to be there. It was always there." }
        ] },
        { t: "I've never played this before. I swear.", notes: 2, then: [
          { s: 'kiriko', f: 'neutral', t: "I know. I believe you." },
          { s: 'kiriko', f: 'happy', t: "Your hands didn't get the memo, though." }
        ] }
      ] },
      { n: "They won. They won again. A small crowd collected behind them, middle-school boys with their bags still on, saying things like who is that, and Solar's ears went hot the way they did under any kind of spotlight, and her hands kept going anyway." },
      { n: "When the credits ran Kiriko didn't get up. She sat looking at the little figure in white on the victory screen, standing at the back, and when her voice came it was soft in a way it almost never was." },
      { s: 'kiriko', f: 'neutral', t: "That's how she plays. The girl who picks me. I've felt it a thousand times. Always where she needs to be, before anybody knows they need her." },
      { s: 'kiriko', f: 'happy', t: "It was really nice to see it from the outside. That's all. Just once." },
      { choose: [
        { t: "Was the boy there too? The sniper?", notes: 2, then: [
          { s: 'kiriko', f: 'neutral', t: "...No. Not in this one. There's no sniper in this one." },
          { s: 'kiriko', f: 'happy', t: "He'd have hated it. Too much running. Not enough hiding." },
          { n: "Solar laughed, and didn't know why it pulled at something under her ribs, small, like a stitch from running, and didn't ask." }
        ] },
        { t: "(Bump her shoulder with yours.)", notes: 3, then: [
          { n: "Solar bumped her shoulder. Kiriko bumped back, harder, nearly knocking her off the stool, and grinned, and the grin was only a little bit wet at the edges." }
        ] }
      ] },
      { s: 'kiriko', f: 'happy', t: "Fortune! Arcade edition." },
      { n: "She had the box in her sleeve. She always had the box in her sleeve." },
      { s: 'kiriko', f: 'neutral', t: "Kichi. Blessing. \"Your hands remember what you have not yet learned.\"" },
      { s: 'kiriko', f: 'flustered', t: "...Okay, the gods are being kind of weird today. That one's going in your pocket and we're getting crepes." },
      { n: "She ate three. Solar counted, because somebody had to, now." }
    ] },
    { title: 'three, that\'s the rule', place: 'Naganaki Shrine', scene: [
      { n: "Kiriko had bought a taiyaki pan. It was cast iron and fish-shaped and heavy enough to stun a man, and she had carried it up the hundred and twelve steps in a hardware-store bag that gave up somewhere around step eighty, so that she arrived at the top holding a cast-iron fish in both arms like a baby." },
      { s: 'kiriko', f: 'happy', t: "Grandma's recipe. From memory. I've been writing it down all week so I don't lose it. Don't look at the notes. The notes are a crime scene." },
      { n: "The shrine office had one gas ring and a kettle and nothing else, and it had been built for tea, and it was about to be asked to do something it had never agreed to. Kiriko lit it with the confidence of somebody who'd done this a hundred times in another kitchen, in another town, next to somebody else." },
      { n: "The first one stuck. The second one burned. The third came out of the pan in two pieces, a head and a tail, with red bean oozing out of the middle like it was trying to escape, and Kiriko held the halves up side by side and looked at them for a long time." },
      { s: 'kiriko', f: 'sad', t: "...It's not right. Grandma's come out whole. Every time. She doesn't even look." },
      { choose: [
        { t: "(Take the head. Hand her the tail.)", notes: 3, then: [
          { n: "Solar took the head and handed her the tail and ate hers standing in the doorway of the shrine office, steam coming off it in the cold. It was too hot and the batter was raw in one corner and the red bean was sweet and very good and burned her tongue." },
          { s: 'solar', t: "It's good." },
          { s: 'kiriko', f: 'neutral', t: "It's broken." },
          { s: 'solar', t: "It's good and broken." },
          { s: 'kiriko', f: 'happy', t: "...That's a fortune. That is literally a fortune. I'm writing it down." }
        ] },
        { t: "More oil. Lower the heat. Leave it alone.", notes: 2, then: [
          { s: 'kiriko', f: 'surprised', t: "...How do you know that?" },
          { n: "Solar wasn't sure. It was the kind of thing you knew from standing next to somebody in a kitchen for a long time, watching. The fourth one came out whole. Kiriko held it up to the light like a fish she'd caught with her hands." }
        ] }
      ] },
      { n: "They made eleven. Six came out whole. Kiriko ate three, because that was the rule, and gave one to Koromaru, because he was the boss, and one each to the stone foxes, set on paper napkins on their plinths, the nice one first, then the grumpy one." },
      { s: 'kiriko', f: 'neutral', t: "He gets one too. Even grumpy. Especially grumpy. Nobody brought him anything for a hundred years." },
      { n: "The sparrows got the broken ones. They were shrine staff." },
      { s: 'kiriko', f: 'sad', t: "When I get home I'm going to tell Grandma I made them in another world. On a shrine stove. Out of my own head." },
      { s: 'kiriko', f: 'happy', t: "And she's going to say they still weren't as good as hers. And she'll be right. And I'll eat three." },
      { choose: [
        { t: "Tell her someone in another world ate the head.", notes: 3, then: [
          { s: 'kiriko', f: 'happy', t: "...Yeah. I will. I'll tell her about you. All of it. She'll make you an honorary granddaughter. She does that. There are like nine of us." }
        ] },
        { t: "(Copy her notes out clean, so she can take them home.)", notes: 3, then: [
          { n: "Solar took the notes, which were a crime scene, three pages of crossings-out and arrows and one line that just said NO, and copied them out clean on the back of a prayer slip from the office, in order, every measurement, so that Kiriko could take it back through whatever door she went through and never have to rebuild it from memory again." },
          { s: 'kiriko', f: 'flustered', t: "...Sol-chan. You can't just. Okay. Okay, you can." }
        ] }
      ] },
      { s: 'kiriko', f: 'happy', t: "Fortune. Taiyaki edition." },
      { s: 'kiriko', f: 'neutral', t: "Chu-kichi. Middle blessing. \"What breaks in the pan is still sweet.\"" },
      { s: 'kiriko', f: 'serious', t: "Don't look at me. You said it first. The gods are copying you now. That's on you." }
    ] },
    { title: 'land here', place: 'Iwatodai · Rooftops', music: 'sun', scene: [
      { n: "Kiriko said wear shoes you can run in, and this time Solar knew exactly what she meant, and wore them, and still wasn't ready." },
      { n: "It was colder up there than it had been in June. The wind came straight off the bay and across the roofs with nothing to stop it, and the city had gone winter colors, gray and white and the gold of windows lit early, and Kiriko took her hand at the top of the shrine steps and said hold on, and then there was the flicker and the rush and the convenience-store roof, and the apartment block, and the long flat roof of the bookstore with snow on it, perfectly smooth, until their feet went through it." },
      { s: 'kiriko', f: 'happy', t: "You're better at landing! You used to land like a sack of rice!" },
      { s: 'solar', t: "I used to land like a sack of rice?" },
      { s: 'kiriko', f: 'happy', t: "A nice sack of rice. Good rice. Premium." },
      { n: "They went further than last time. Past the station. Over the school, which looked smaller from above, the whole of Gekkoukan reduced to a few gray rectangles with one light on in the faculty office. Out along the river, roof to roof, the water black and slow below them, steaming faintly in the cold." },
      { n: "On the hotel roof, by the water tower, where they'd stopped in June, Kiriko let go of her hand and stood at the edge looking out at the bay, and the monorail crossing it, a string of lit windows, the way it always did." },
      { s: 'kiriko', f: 'neutral', t: "I made you something. Don't laugh. It's bad." },
      { n: "It was a map. Hand-drawn, on the backs of three fortune slips taped together, and it was the roofs. Every roof they'd ever crossed, from the shrine to the hotel, with little arrows for which way to jump and little crosses for the slippery ones, and on top of the convenience store a tiny cartoon fox with a speech bubble that said land HERE." },
      { s: 'kiriko', f: 'flustered', t: "So you can still go up. After. You can't swift step, I know. But I marked the fire escapes. Some of them. Most of them. Don't do the bookstore one. The bookstore one is just for foxes." },
      { choose: [
        { t: "(Fold it carefully and put it with the fortunes.)", notes: 3, then: [
          { n: "Solar folded it along the tape lines, carefully, so as not to crease the cartoon fox, and put it in her coat with the fortunes, which were well past ten now and getting hard to button a pocket over. Kiriko watched her do it and pretended to be very interested in the monorail." }
        ] },
        { t: "When did you have time to map the whole city?", notes: 2, then: [
          { s: 'kiriko', f: 'neutral', t: "At night. When I couldn't sleep. I ran it on my own and wrote everything down and thought, she'll need this." },
          { s: 'kiriko', f: 'happy', t: "It's what I did at home. Make sure nobody needed me. Turns out I just needed somebody to need me back." }
        ] },
        { t: "I'm doing the bookstore one.", notes: 2, then: [
          { s: 'kiriko', f: 'surprised', t: "Sol-chan, NO." },
          { s: 'kiriko', f: 'serious', t: "...Okay. If you do it, ring the bell first. So I know to worry." }
        ] }
      ] },
      { n: "They sat on the edge with their legs hanging over the city, which Solar would not have done in April, and watched the sky go from gold to pink to the dark blue that comes just before the streetlights, and Kiriko's kitsune came out of nowhere and curled up between them, warm, faintly glowing, its tail across both their laps." },
      { s: 'kiriko', f: 'happy', t: "Fortune. Rooftop edition. These are the best ones." },
      { s: 'kiriko', f: 'neutral', t: "Sue-kichi. Future blessing. \"The view does not leave when you do.\"" },
      { n: "Solar looked down. The city looked back, every window lit, and she thought, of course it doesn't. She thought, I'm the one who stays, this time. It had never been true anywhere before, and it felt exactly like standing on a roof." }
    ] },
    { title: 'the good broom', place: 'Naganaki Shrine', scene: [
      { n: "Kiriko was waiting at the top of the steps holding both brooms, the good one and the bad one, with an expression of such grave ceremony that Solar stopped on step one hundred and nine and seriously considered going back down." },
      { s: 'kiriko', f: 'serious', t: "Sol-chan. Today is training day." },
      { s: 'kiriko', f: 'serious', t: "When I go, somebody has to look after the shrine. The priest is nice, but he's eighty-one and he thinks the foxes are the same fox. They are not the same fox." },
      { n: "So she trained her. Properly, with a list, in order, all afternoon. How to sweep the path in long arcs so the gravel lay in lines. How to fish leaves out of the water basin with the bamboo ladle, never your hand. How to tie the bibs on the foxes, nice one first, and bow first, always bow first. Which drawer in the office the fortunes lived in, and which number stuck, and how you had to jiggle number thirty-one twice." },
      { s: 'kiriko', f: 'neutral', t: "And this is the big one. Pay attention. The sparrows get crumbs at four. Not before four. If you go before four they get ideas." },
      { choose: [
        { t: "(Write it all down.)", notes: 3, then: [
          { n: "Solar wrote it all down in the back of her student handbook, in order, the sparrows and the jiggle and the nice fox first, and Kiriko read over her shoulder as the list got longer and went quiet, and then very loud, about the crows, who she said were not staff, and she wanted that on the record." }
        ] },
        { t: "What does the boss do?", notes: 3, then: [
          { s: 'kiriko', f: 'happy', t: "Oh, he doesn't do anything. He's the boss. You bring him rice balls and tell him he's doing a great job." },
          { n: "Koromaru, hearing himself discussed, lifted his head off his paws and looked at Solar with the patient expectation of a dog who had been told he was doing a great job every day since May and saw no reason for that to change." }
        ] }
      ] },
      { n: "Then Kiriko held out the good broom. The good one. In both hands, the way you'd hand someone a sword." },
      { s: 'kiriko', f: 'flustered', t: "It's yours now. Don't let anybody else use it. I don't care if it's the priest." },
      { n: "Solar took it. It was lighter than it looked, and the handle had worn smooth in two places exactly the size of Kiriko's hands, and she understood, holding it, that she was going to sweep this shrine on Sunday mornings for as long as she lived in Iwatodai, and that she had decided this just now, and that it was the easiest decision she'd made all year." },
      { s: 'kiriko', f: 'neutral', t: "Okay. Last part of training. Most important part." },
      { s: 'kiriko', f: 'happy', t: "You draw my fortune." },
      { n: "She held out the box. Solar had watched her shake it a hundred times. She shook it badly, too hard, and the stick came out sideways, and she checked the number against the drawer and jiggled it, because it was thirty-one, and pulled out the paper, and unfolded it." },
      { choose: [
        { t: "(Read it exactly as it's written.)", notes: 3, then: [
          { n: "She read it exactly as it was written, because that was what you did with somebody else's fortune." },
          { s: 'solar', t: "Dai-kichi. Great blessing. \"The one who tends the shrine is tended in return.\"" },
          { s: 'kiriko', f: 'surprised', t: "...It does NOT say that." },
          { n: "Kiriko snatched it and read it and then read it again, and went pink to the tips of her ears, and folded it very small and put it in her sleeve and refused to discuss it any further." }
        ] },
        { t: "(Make one up. Her rules.)", notes: 3, then: [
          { s: 'solar', t: "Dai-kichi. \"Whoever you are, in whatever world, someone is sweeping your steps.\"" },
          { s: 'kiriko', f: 'sad', t: "...Sol-chan. That's not what it says. I can see it's chu-kichi from here." },
          { s: 'solar', t: "I just made it up. But it's the rule." },
          { s: 'kiriko', f: 'happy', t: "...Okay. Okay, yeah. That's the rule." }
        ] }
      ] },
      { n: "She hugged Solar so hard the good broom fell over, and Koromaru barked at it, and the sparrows, who had been told about four o'clock, came down onto the gravel anyway because it was three fifty-eight. Kiriko said they were getting ideas. She didn't chase them off." }
    ] }
  ],
  romance: false,
  cast: { koromaru: 'Koromaru', mercy: 'Mercy', genji: 'Genji', widowmaker: 'Widowmaker' },
  texts: [
    { id: 'kiri-1a', rank: 1, days: 1, slot: 1, msgs: [
      { from: 'kiriko', t: 'sol-chan!! 🦊' },
      { from: 'kiriko', t: "today's fortune: middle blessing. avoid stairs" },
      { from: 'kiriko', t: 'jk the stairs are fine. come visit' }
    ], reply: [
      { t: 'Avoiding stairs is my life goal.', notes: 3, then: [{ from: 'kiriko', t: 'lol ur friend with the white hair was running them again this morning' }, { from: 'kiriko', t: 'a hundred and twelve. TEN TIMES' }] },
      { t: "I'll come Thursday.", notes: 2, then: [{ from: 'kiriko', t: 'yay. bring snacks for the dog. he is a menace' }] }
    ] },
    { id: 'kiri-3a', rank: 3, days: 1, slot: 1, msgs: [
      { from: 'kiriko', t: 'ur legs ok after the roofs?' },
      { from: 'kiriko', t: 'i forgot not everybody can swift step 😅' }
    ], reply: [
      { t: 'I may never walk again.', notes: 2, then: [{ from: 'kiriko', t: "i'll heal you. one ofuda. very cheap. for you, free" }] },
      { t: 'Best night of my life.', notes: 3, then: [{ from: 'kiriko', t: 'RIGHT?? same time next week' }] }
    ] },
    { id: 'kiri-4a', rank: 4, days: 1, slot: 1, msgs: [
      { from: 'kiriko', t: 'been thinking about the girl who plays as me' },
      { from: 'kiriko', t: 'mvp!! in a tournament!!' },
      { from: 'kiriko', t: "i'm so proud of her and i've never met her. is that weird" }
    ], reply: [
      { t: "Not weird. I'm proud of her too.", notes: 3, then: [{ from: 'kiriko', t: '...sol-chan. i think u might be prouder than u know 🦊' }] },
      { t: 'A little weird.', notes: 2, then: [{ from: 'kiriko', t: 'ok rude. accurate. but rude' }] }
    ] },
    { id: 'kiri-5a', rank: 5, days: 1, slot: 1, msgs: [
      { from: 'kiriko', t: 'mercy-sensei says my healing technique is "unorthodox"' },
      { from: 'kiriko', t: 'i said thank u. she said it was not a compliment' },
      { from: 'kiriko', t: 'i still think it was a compliment' }
    ], reply: [
      { t: 'It was definitely a compliment.', notes: 3, then: [{ from: 'kiriko', t: 'THANK YOU. finally someone' }] },
      { t: 'She threw a kunai at a wall, Kiriko.', notes: 2, then: [{ from: 'kiriko', t: "the wall was fine. mostly" }] }
    ] },
    { id: 'kiri-7a', rank: 7, days: 1, slot: 1, msgs: [
      { from: 'kiriko', t: 'that was the best festival ever' },
      { from: 'kiriko', t: "don't tell kanezaka i said that" }
    ], reply: [
      { t: 'Your secret is safe.', notes: 3, then: [{ from: 'kiriko', t: '🤐🦊' }] },
      { t: 'Next year, you show me yours.', notes: 3, then: [{ from: 'kiriko', t: 'deal. pinky promise. across worlds' }] }
    ] },
    { id: 'kiri-8a', rank: 8, days: 1, slot: 1, msgs: [
      { from: 'kiriko', t: 'the sniper lady is kind of scary' },
      { from: 'kiriko', t: 'also kind of sad' },
      { from: 'kiriko', t: 'i left an ofuda in her coat pocket. she did not notice. dont tell her' }
    ], reply: [
      { t: "You're a good person, Kiriko.", notes: 3, then: [{ from: 'kiriko', t: "i'm a menace. but the good kind" }] },
      { t: 'She noticed.', notes: 2, then: [{ from: 'kiriko', t: 'WHAT' }, { from: 'kiriko', t: 'how do u know' }, { from: 'kiriko', t: 'sol-chan HOW DO U KNOW' }] }
    ] },
    { id: 'kiri-10a', rank: 10, days: 2, slot: 1, msgs: [
      { from: 'kiriko', t: "today's fortune:" },
      { from: 'kiriko', t: 'great blessing. again. obviously' },
      { from: 'kiriko', t: 'i stopped checking. its always great when its yours 🦊' }
    ], reply: [
      { t: "Because you're the one drawing them.", notes: 3, then: [{ from: 'kiriko', t: 'shhhhh dont tell the gods' }] },
      { t: 'Ring the suzu if you miss me.', notes: 3, then: [{ from: 'kiriko', t: 'ringing it right now' }, { from: 'kiriko', t: 'did u hear it' }] }
    ] }
  ],
  ranks: [
    { after: '5/10', title: '1: great blessing', place: 'Naganaki Shrine', scene: [
      { n: "Naganaki Shrine had been a little sad for as long as Solar had lived in Iwatodai. Leaves in the water basin. Moss on the stone fox statues. The kind of quiet that came from nobody looking after a place for a long time." },
      { n: "On Sunday morning, it was swept." },
      { n: "Every path. Every step. The leaves were out of the basin and the fox statues had been scrubbed until their stone noses gleamed, and somebody had tied fresh red bibs around their necks, and in the middle of the courtyard a girl was leaning on a broom with the satisfied, slightly sweaty look of someone who'd been at it since dawn." },
      { n: "Purple and white. Hair up high in a ponytail. The girl Junpei had been talking about at Hagakure, the one everybody had laughed about. Solar was beginning to think she should stop letting people laugh about things." },
      { s: 'kiriko', f: 'happy', t: "Oh! A visitor! Finally. I was starting to think this place was haunted. Well, more haunted." },
      { choose: [
        { t: 'Did you do all this?', notes: 2, then: [
          { s: 'kiriko', f: 'happy', t: "Yep. Couldn't help it. I found a shrine and nobody was taking care of it. That's like finding a cat in the rain." }
        ] },
        { t: "You're the girl with the fox ears.", notes: 3, then: [
          { s: 'kiriko', f: 'happy', t: "Ha! People keep saying that. It's not ears, it's... well. Sometimes it's ears." },
          { n: "She grinned, like that explained anything, and Solar had the strange sense that it did." }
        ] }
      ] },
      { s: 'kiriko', f: 'happy', t: "I'm Kiriko. I'm from a town called Kanezaka. Which, according to every map in this city, doesn't exist. Fun!" },
      { n: "She said it brightly, like a joke. Her hand, Solar noticed, tightened on the broom handle while she said it." },
      { s: 'kiriko', f: 'happy', t: "Okay, first visitor gets a fortune. That's the rule. I just made it up, but it's the rule." },
      { n: "She produced a small wooden box from her sleeve and shook it until a stick slid out of the hole in the top, then checked the number against a drawer of folded papers by the offering box, like she'd been running this shrine her whole life." },
      { s: 'kiriko', f: 'happy', t: "Number seven. Dai-kichi! Great blessing!" },
      { s: 'kiriko', f: 'neutral', t: "\"A traveler arrives. A door opens. Do not be afraid to walk through it.\"" },
      { choose: [
        { t: "That's very specific.", notes: 2, then: [{ s: 'kiriko', f: 'neutral', t: "Fortunes are always specific. People just don't notice until later." }] },
        { t: "Maybe you're the traveler.", notes: 3, then: [
          { s: 'kiriko', f: 'surprised', t: '...' },
          { s: 'kiriko', f: 'neutral', t: "Huh. Maybe I am. Maybe we both are." }
        ] }
      ] },
      { n: "A white dog trotted out from behind the offering box, red collar, red eyes, and sat down at Kiriko's feet like they'd agreed on this arrangement long ago." },
      { s: 'kiriko', f: 'happy', t: "That's the boss. He was here before me. He lets me stay if I share my rice balls." },
      { n: "Solar left with the fortune folded in her pocket. On the way down the hundred and twelve steps, she realized she'd been smiling for a while, and that she didn't know when she'd started." }
    ] },

    { after: '5/24', title: '2: the kitsune', place: 'Naganaki Shrine', scene: [
      { n: "It rained all morning, and Kiriko had dragged a tarp over the shrine's little front porch and was sitting under it cross-legged, eating a rice ball and watching the water run off the roof in silver strings." },
      { s: 'kiriko', f: 'happy', t: "Sol-chan! Sit, sit. The dog won't share the good spot, but there's room." },
      { n: "Sol-chan. Nobody had ever called her that. It was cheeky and warm and slightly too familiar, and Solar found she didn't mind it at all." },
      { register: 'koromaru' },
      { n: "Koromaru was indeed in the good spot, curled in a perfect circle on Kiriko's folded jacket. He opened one red eye when Solar sat down and closed it again, which seemed to be approval." },
      { s: 'kiriko', f: 'serious', t: "Okay. I want to show you something. Promise you won't freak out?" },
      { choose: [
        { t: 'I promise.', notes: 3, then: [{ s: 'kiriko', f: 'happy', t: "That was fast. I like that." }] },
        { t: "I've seen a lot of strange things this year.", notes: 2, then: [{ s: 'kiriko', f: 'serious', t: "Yeah. I can tell. You've got that look. The midnight look." }] }
      ] },
      { n: "Kiriko held out her hand, palm up, and whistled, low and soft." },
      { n: "Something answered. A shape stepped out of the rain at the edge of the porch, made of light and air, long and lean, with a tail like a brushstroke and eyes like two coins. A fox. A huge, glowing, translucent fox, looking at Solar with an expression of polite curiosity." },
      { n: "Koromaru sat bolt upright. The fox looked at him. Koromaru, after a long, tense second, lay back down." },
      { s: 'koromaru', f: 'neutral', t: "...Arf." },
      { s: 'kiriko', f: 'neutral', t: "She's my kitsune. She's been with my family forever. She protects people." },
      { s: 'kiriko', f: 'sad', t: "She was the only thing that came with me. Everything else stayed in Kanezaka." },
      { choose: [
        { t: "She's beautiful.", notes: 3, then: [
          { s: 'kiriko', f: 'happy', t: "She heard you. She's going to be insufferable now." },
          { n: "The fox, Solar could swear, preened." }
        ] },
        { t: "You're not alone, then.", notes: 3, then: [
          { s: 'kiriko', f: 'sad', t: '...' },
          { s: 'kiriko', f: 'happy', t: "No. I guess I'm not." }
        ] }
      ] },
      { s: 'kiriko', f: 'happy', t: "Okay, fortune time!" },
      { s: 'kiriko', f: 'neutral', t: "Ooh. Sho-kichi. Small blessing. \"What you think is lost is only waiting. Be patient with the rain.\"" },
      { n: "They sat under the tarp until the rain stopped. The fox curled up beside Koromaru. The two of them, by the end, were touching noses." }
    ] },

    { after: '6/14', title: '3: rooftops', place: 'Iwatodai · Rooftops', scene: [
      { n: "Kiriko had said, meet me at the shrine at sunset, wear shoes you can run in, and Solar had assumed she meant jogging." },
      { n: "She did not mean jogging." },
      { n: "She meant the roofs. She took Solar's hand at the top of the shrine steps and said hold on, and then there was a flicker of light and a rush of air and they were on top of the convenience store across the street, and then the apartment block next to it, and then the long flat roof of the bookstore, flickering from one to the next in little bursts of light, the whole city spread out below them gold and pink and endless." },
      { s: 'kiriko', f: 'happy', t: "Swift Step! It's easier with a friend. You've got good balance, Sol-chan!" },
      { choose: [
        { t: "I'm going to throw up.", notes: 2, then: [{ s: 'kiriko', f: 'surprised', t: "Don't! It ruins the vibe. And the roof." }] },
        { t: "This is incredible!", notes: 3, then: [{ s: 'kiriko', f: 'happy', t: "RIGHT? This is my favorite thing in any world!" }] }
      ] },
      { n: "They stopped on the roof of the tallest building in Iwatodai, a hotel, with a water tower and a view of the whole bay. The monorail was crossing the bridge below them, a string of lit windows. Somewhere down there the dorm was making dinner without her." },
      { s: 'kiriko', f: 'neutral', t: "Back home, I used to do this every night. Run the roofs. Make sure nobody needed me." },
      { s: 'kiriko', f: 'happy', t: "Kanezaka's small. Everybody knows everybody. Everybody knows me. The girl from the shrine. The one with the fox." },
      { s: 'kiriko', f: 'sad', t: "Here nobody knows me. It's weird. It's kind of nice. It's kind of awful." },
      { choose: [
        { t: "I know. I've moved a lot.", notes: 3, then: [{ s: 'kiriko', f: 'sad', t: "...Yeah. You've got that look too. The new-school look." }] },
        { t: "I know you.", notes: 3, then: [
          { s: 'kiriko', f: 'flustered', t: '...' },
          { s: 'kiriko', f: 'happy', t: "Okay, that's a really good line. I'm stealing it." }
        ] }
      ] },
      { s: 'kiriko', f: 'happy', t: "Fortune!" },
      { s: 'kiriko', f: 'neutral', t: "Hah! Kichi. Blessing. \"Look up. The view is better than you expected.\"" },
      { n: "Solar looked up. The first stars were coming out over the bay. Kiriko was right. So was the fortune. She was starting to think the fortunes were always right." }
    ] },

    { after: '7/5', title: '4: a girl who plays as me', music: 'mystery', place: 'Naganaki Shrine · Steps', scene: [
      { n: "July, and the shrine steps were too hot to sit on until the sun went behind the trees. They sat on them anyway, on folded towels, eating popsicles that melted faster than they could eat them." },
      { n: "Kiriko had been quiet all afternoon. Not sad. Thinking. She kept looking at Solar sideways, the way you look at a word you're sure you know but can't quite place." },
      { s: 'kiriko', f: 'serious', t: "Sol-chan. Can I tell you something weird?" },
      { s: 'kiriko', f: 'neutral', t: "Sometimes I feel people. People in other worlds. Ones who... pick me. I don't know how else to say it." },
      { s: 'kiriko', f: 'happy', t: "There's a girl. She picks me every time. Over and over. She's really, really good. Like, scary good. Top of everything." },
      { s: 'kiriko', f: 'happy', t: "She won a tournament. A big one. Lights and screens and crowds. They called her name at the end. Most valuable player." },
      { n: "Something went through Solar like the warmth of the beam on the hospital roof. A headset. A screen. A hallway in a college building she'd never seen, full of people cheering. A name that was hers and wasn't." },
      { choose: [
        { t: "...I think I know her.", notes: 3, then: [
          { s: 'kiriko', f: 'surprised', t: '...' },
          { s: 'kiriko', f: 'neutral', t: "Yeah. I thought you might." },
          { n: "Kiriko looked at her for a long time, popsicle forgotten, dripping onto the stone." }
        ] },
        { t: "That's a lot of pressure, being picked.", notes: 2, then: [{ s: 'kiriko', f: 'serious', t: "It's not pressure. It's like being trusted. Every single time she chooses me, it's like she's saying, I trust you to keep them alive." }] }
      ] },
      { s: 'kiriko', f: 'neutral', t: "And she always plays with a boy. A sniper. He picks the scary sniper lady, the purple one. They always queue together." },
      { s: 'kiriko', f: 'happy', t: "He plays like he's hiding something. She plays like she's protecting everyone. They're kind of perfect, honestly." },
      { n: "Solar didn't know why her face went hot. She didn't know who the boy was. She just knew, somewhere under her ribs, that he was important, in a world she'd never live in." },
      { s: 'kiriko', f: 'happy', t: "Fortune time. And this one's for her too. The other you." },
      { s: 'kiriko', f: 'serious', t: "Dai-kichi again! \"Your hands are steadier than you think. Trust them.\"" },
      { n: "Solar folded the fortune and put it in her pocket. She had a feeling the other her would have liked it." }
    ] },

    { after: '7/26', title: '5: two supports', place: 'Tatsumi Memorial Hospital · 3F Ward', scene: [
      { n: "Kiriko had heard about the Apathy patients from a woman at the shrine, an old lady whose husband had stopped speaking in May. She'd come back from the conversation with a jaw set like a closed door." },
      { s: 'kiriko', f: 'serious', t: "Take me there. I want to try something." },
      { n: "So Solar took her to the hospital, to the third floor, where Dr. Angela Ziegler was doing rounds with her ugly scarf around her neck despite the heat, and the two of them looked at each other across the ward like two cats who'd both decided a room was theirs." },
      { s: 'mercy', f: 'surprised', t: "...Are those paper talismans?" },
      { s: 'kiriko', f: 'happy', t: "They're ofuda! They heal! Mostly!" },
      { s: 'mercy', f: 'serious', t: "'Mostly' is not a word I like to hear in my ward." },
      { choose: [
        { t: "Let her try, Angela. Please.", notes: 3, then: [
          { s: 'mercy', f: 'neutral', t: '...Fine. Under supervision.' },
          { s: 'kiriko', f: 'happy', t: "Supervision! Fun! I've never been supervised before!" },
          { s: 'mercy', f: 'sad', t: "I can tell." }
        ] },
        { t: "You two are going to be best friends.", notes: 2, then: [
          { s: 'mercy', f: 'flustered', t: "We are not." },
          { s: 'kiriko', f: 'happy', t: "We absolutely are." }
        ] }
      ] },
      { n: "Kiriko pressed an ofuda to the old man's forehead in bed five. It glowed, soft and green, and for one second his eyes moved, followed the light, found Kiriko's face. Then it faded, and he was gone again." },
      { n: "It wasn't a cure. But Angela stood very still and stared, and then took out a notebook and wrote something down, fast." },
      { s: 'mercy', f: 'surprised', t: "He responded. He tracked the light. Do that again. Do that on every bed." },
      { s: 'kiriko', f: 'surprised', t: "Every bed? Do you know how many ofuda that is?" },
      { s: 'mercy', f: 'happy', t: "I'll help you make them. I have very steady hands." },
      { n: "They worked through the whole ward, the doctor and the shrine girl, arguing the entire time about technique and dosage and whether you were allowed to throw a kunai at a wall to make a point. Solar sat on an empty bed and watched two healers from two different worlds figure each other out." },
      { s: 'kiriko', f: 'happy', t: "Fortune! You didn't think I'd forget, did you?" },
      { s: 'kiriko', f: 'neutral', t: "Chu-kichi. Middle blessing. \"Two lights in one room are not a competition.\"" },
      { s: 'mercy', f: 'happy', t: "...I'm putting that one on the wall." }
    ] },

    { after: '8/2', title: '6: kanezaka', music: 'tender', place: 'Naganaki Shrine', scene: [
      { n: "August, and the heat was a lid on the city. Kiriko was lying on the shrine's wooden porch with her arms flung out, staring at the rafters, too hot to sweep, too hot to move." },
      { s: 'kiriko', f: 'neutral', t: "In Kanezaka right now, there's a ramen shop that does cold noodles in summer. With yuzu. You sit by the river and eat them and your feet in the water." },
      { s: 'kiriko', f: 'happy', t: "And the festival's coming. Lanterns all down the main street. My grandmother makes the best taiyaki in the whole town. She makes me eat three." },
      { n: "She went quiet. A cicada sang somewhere and stopped." },
      { s: 'kiriko', f: 'sad', t: "...I miss it so much it hurts in my teeth." },
      { choose: [
        { t: "Tell me about it. Everything.", notes: 3, then: [
          { n: "She did. For an hour. The river and the bridge and the old cat that slept on the ramen shop sign, the bell at the top of the hill, the way the town smelled after rain, the way everyone said her name. Solar listened to every word. By the end it felt like a place she'd been." }
        ] },
        { t: "We'll find you a way home.", notes: 2, then: [{ s: 'kiriko', f: 'sad', t: "...Yeah. I know. I just want to complain about it first." }] }
      ] },
      { n: "There were footsteps on the gravel. Light, precise, mechanical at the edges." },
      { register: 'genji' },
      { s: 'genji', f: 'neutral', t: "I thought I sensed something familiar. You are a long way from Kanezaka, little fox." },
      { s: 'kiriko', f: 'surprised', t: "...Genji? What are YOU doing here?" },
      { s: 'genji', f: 'neutral', t: "The same as you, I suspect. Falling through the cracks of the world. Angela told me there was a shrine girl with ofuda. I hoped." },
      { n: "They talked about home for a while, the cyborg and the shrine girl, in a shorthand Solar only half understood, names of streets, names of people, a clan that had once ruled the whole region and didn't anymore. Kiriko laughed more in that half hour than she had all month." },
      { n: "When Genji faded, he bowed to Kiriko, and then, after a moment, to Solar." },
      { s: 'genji', f: 'happy', t: "Thank you for keeping her company. She is not good at being alone. None of the brave ones are." },
      { s: 'kiriko', f: 'neutral', t: "Fortune... okay, I'm drawing one for me this time." },
      { s: 'kiriko', f: 'sad', t: "Kichi. \"Home is not a place. It is the people who say your name.\"" },
      { n: "She read it twice. Then she looked at Solar, and her eyes were wet, and she said, \"Sol-chan,\" just to hear it." }
    ] },

    { after: '8/20', title: '7: festival', music: 'sun', place: 'Naganaki Shrine · Summer Festival', scene: [
      { n: "The Naganaki summer festival came on a humid night at the end of August, and the whole shrine was transformed. Paper lanterns strung from every tree. Stalls lining the path selling takoyaki and cotton candy and goldfish in plastic bags. The air thick with smoke and sugar and the sound of a drum somewhere up the hill." },
      { n: "Kiriko had borrowed a yukata from somewhere, purple with white foxes printed on it, and she'd done her hair up with a flower, and she grabbed Solar's wrist at the bottom of the steps and didn't let go the entire night." },
      { s: 'kiriko', f: 'happy', t: "Taiyaki! They have taiyaki! It's not as good as Grandma's, but they HAVE it!" },
      { choose: [
        { t: "Three, right? That's the rule.", notes: 3, then: [
          { s: 'kiriko', f: 'surprised', t: '...You remembered.' },
          { n: "She looked at Solar like she'd been handed something precious, and then bought six." }
        ] },
        { t: "Let's try the goldfish game.", notes: 2, then: [
          { n: "Kiriko was terrible at the goldfish game. Solar was worse. They ripped seven paper scoops between them and won nothing, and laughed so hard the stall owner gave them a goldfish out of pity." },
          { s: 'kiriko', f: 'happy', t: "His name is Dai-kichi. Great Blessing. Obviously." }
        ] }
      ] },
      { n: "Half the dorm was there. Junpei won a giant stuffed bear and gave it to Yukari, who pretended to be annoyed. Akihiko ate an unreasonable amount of grilled squid. Shinjiro stood by the takoyaki stall critiquing the takoyaki under his breath. Koromaru had a little festival bandana on that Kiriko had tied herself." },
      { n: "At nine, the fireworks started over the bay. Everyone went quiet. Kiriko pulled Solar up to the very top of the shrine steps, where she said the view was best, and they sat there with their knees pulled up as the sky lit up gold and red and green." },
      { s: 'kiriko', f: 'neutral', t: "This is the first time since I got here that I didn't think about going home for a whole night." },
      { s: 'kiriko', f: 'happy', t: "That's your fault, Sol-chan. I'm blaming you." },
      { choose: [
        { t: "I'll take the blame.", notes: 3, then: [{ s: 'kiriko', f: 'flustered', t: "Good. You should. You're kind of the best, you know that?" }] },
        { t: "(Lean your head on her shoulder.)", notes: 3, then: [
          { n: "Kiriko went still for a second. Then she leaned back, so their heads were touching, and they watched the rest of the fireworks like that, two girls on a hundred and twelve steps, one of them very far from home." }
        ] }
      ] },
      { s: 'kiriko', f: 'neutral', t: "Festival fortune. These are special." },
      { s: 'kiriko', f: 'happy', t: "Dai-kichi. \"Tonight is one you will remember in every world.\"" },
      { n: "Solar thought, yes. She thought, I already do." }
    ] },

    { after: '10/10', title: '8: support and sniper', music: 'mystery', place: 'Moonlight Bridge', scene: [
      { n: "October, after dark. Kiriko had heard about the woman on Moonlight Bridge from three different people at the shrine. A tall woman. Purple skin. A rifle as long as a person. She stood on the bridge cables at night, they said, perfectly still, looking at nothing." },
      { s: 'kiriko', f: 'serious', t: "I know who that is. I don't want to know who that is. But I do." },
      { n: "They went at dusk, when the bridge lights came on. The woman was there. She was standing on the railing as if it were a sidewalk, coat snapping in the wind off the water, and she turned her head before they were within a hundred meters, like she'd heard them breathing." },
      { s: 'widowmaker', f: 'neutral', t: "The fox girl. And a stranger." },
      { s: 'kiriko', f: 'serious', t: "Widowmaker. Of course it's you. Of course the creepiest person from home fell through too." },
      { n: "Widowmaker looked at Kiriko the way you'd look at a mildly interesting insect. Then she looked at Solar. Then, for a strange, held second, she looked at Solar a little longer." },
      { s: 'widowmaker', f: 'surprised', t: "...Hm. You feel familiar, chérie. Like a support who always stands where I can see her." },
      { choose: [
        { t: "I get that a lot lately.", notes: 3, then: [{ s: 'widowmaker', f: 'happy', t: "I imagine you do." }] },
        { t: "Kiriko, is she dangerous?", notes: 2, then: [
          { s: 'kiriko', f: 'surprised', t: "Extremely. Don't make eye contact. Too late. You made eye contact." },
          { s: 'widowmaker', f: 'happy', t: "I am not working tonight. You may relax, little fox." }
        ] }
      ] },
      { n: "They stood on the bridge for a while, the three of them, a healer and a sniper and a girl from the dorm, watching the city lights double in the black water. Nobody said much. It was strange how much that felt like company." },
      { s: 'kiriko', f: 'neutral', t: "You know, in some other world, there are people who play as us. Together. A support and a sniper. Every match." },
      { s: 'widowmaker', f: 'sad', t: "...A boy. Who hides. And a girl who protects everyone. Yes. I have felt him too." },
      { n: "Solar's heart did something very specific and unexplainable. She didn't know the boy. She'd never know the boy. But she could almost see him, somewhere under bright lights, choosing the purple sniper, again and again, beside a girl who chose the fox." },
      { s: 'kiriko', f: 'happy', t: "Fortune. For all three of us." },
      { s: 'kiriko', f: 'neutral', t: "Sue-kichi. Future blessing. \"Opposites cover each other's blind spots.\"" },
      { s: 'widowmaker', f: 'flustered', t: "...That is the first fortune I have ever received. It is acceptable." }
    ] },

    { after: '11/7', title: '9: the shrine in the dark hour', place: 'Naganaki Shrine · The Dark Hour', scene: [
      { n: "Midnight. The green hour. The moon a sick, swollen thing over the trees, the city below turned to coffins, the air thick and still and wrong." },
      { n: "Kiriko was standing on the top step of the shrine with her kunai out and her kitsune at her side, glowing, every hair on its back raised. Something was coming up the steps. Something big and black and full of hands." },
      { n: "Solar had come because she'd felt it. She didn't know how. She'd just woken in the dark and known Kiriko needed her." },
      { s: 'kiriko', f: 'surprised', t: "Sol-chan! You came! Okay. Okay okay okay. I've never fought one this big alone." },
      { choose: [
        { t: "You're not alone.", notes: 3, then: [{ s: 'kiriko', f: 'serious', t: "...Okay. Then let's go." }] },
        { t: "Where do you need me?", notes: 3, then: [{ s: 'kiriko', f: 'serious', t: "Left side. Stay in my line. I'll keep you alive. You keep it busy." }] }
      ] },
      { n: "It was the fight on the hospital roof all over again, and nothing like it. Kiriko was everywhere, flickering from step to step in bursts of light, kunai flashing, ofuda glowing green against Solar's skin every time the shadow got close, the fox spirit snapping at its edges like a living flame. And Solar moved where she knew she should move, felt the healing before it came, trusted it." },
      { n: "When the shadow broke apart into smoke and drifted away into the green, they were both on their knees on the gravel, gasping, laughing, covered in dirt and paper ash." },
      { s: 'kiriko', f: 'happy', t: "That was... that was amazing. That was like playing with somebody who's played with me a thousand times." },
      { s: 'kiriko', f: 'flustered', t: "Sol-chan. I need to say something and I need you to not make it weird." },
      { s: 'kiriko', f: 'serious', t: "You're my best friend. Not in this world. In any of them. I decided. It's final." },
      { choose: [
        { t: "You're mine too, Kiriko.", notes: 3, then: [
          { s: 'kiriko', f: 'surprised', t: '...' },
          { n: "Kiriko launched herself across the gravel and hugged her so hard they both fell over, and the kitsune, above them, made a sound that Solar would swear for the rest of her life was a laugh." }
        ] },
        { t: "That's very weird. I accept.", notes: 3, then: [{ s: 'kiriko', f: 'happy', t: "HA! Okay. Okay good. Weird best friends. Across worlds. That's a contract." }] }
      ] },
      { s: 'kiriko', f: 'happy', t: "Fortune. I'm drawing it in the green hour. That's probably illegal." },
      { s: 'kiriko', f: 'neutral', t: "...Dai-kichi. \"The bond you made tonight will outlast the moon.\"" }
    ] },

    { after: '12/12', title: '10: the suzu', place: 'Naganaki Shrine · First Snow', scene: [
      { n: "December. The first snow came in the night and stayed, a thin white layer over the whole shrine, over the fox statues in their red bibs, over the stone steps that had been scrubbed by hand every morning since May." },
      { n: "Kiriko was standing in the middle of the courtyard with her face turned up to the sky, catching snowflakes on her tongue like a child. She heard Solar on the steps and didn't turn around." },
      { s: 'kiriko', f: 'sad', t: "It snows in Kanezaka too. It's the first thing that's felt exactly like home." },
      { s: 'kiriko', f: 'neutral', t: "Elizabeth told me. When the year ends, the green hour goes away. The doors close. Everybody who fell through goes back." },
      { n: "She said it calmly. She'd clearly been practicing saying it calmly." },
      { choose: [
        { t: "I don't want you to go.", notes: 3, then: [{ s: 'kiriko', f: 'sad', t: "I know. I don't want to go either. And I really, really want to go. Both. At the same time. It's the worst." }] },
        { t: "You get to go home.", notes: 3, then: [{ s: 'kiriko', f: 'happy', t: "...Yeah. I do. And you're the reason I'm still okay enough to get there." }] }
      ] },
      { s: 'kiriko', f: 'flustered', t: "So. I made you something." },
      { n: "She held it out. A suzu. A little brass bell on a red cord, the kind that hung from shrine ropes, the kind she rang in the green hour to protect the people around her. It was warm, like it had been in her pocket for a long time." },
      { s: 'kiriko', f: 'neutral', t: "This one's mine. My Protection Suzu. Or it was. Now it's yours." },
      { s: 'kiriko', f: 'serious', t: "If you ring it, I'll hear it. Doesn't matter which world. I'll hear it, and I'll know you're okay." },
      { choose: [
        { t: "(Ring it.)", notes: 3, then: [
          { n: "Solar rang it. A small, clear sound in the snow. Kiriko closed her eyes and smiled like she'd felt it in her chest." },
          { s: 'kiriko', f: 'happy', t: "...Yep. Loud and clear." }
        ] },
        { t: "And if you ring yours?", notes: 3, then: [{ s: 'kiriko', f: 'happy', t: "Then you'll hear it in your dreams. That's how it works. I just decided." }] }
      ] },
      { s: 'kiriko', f: 'sad', t: "Okay. Last fortune. The big one. The year-end one." },
      { n: "She shook the box for a long time. She didn't look at the stick when it came out. She just pulled the paper and unfolded it and read it out loud without checking, like she already knew." },
      { s: 'kiriko', f: 'happy', t: "Dai-kichi. Great blessing. \"Whoever you are, in whatever world, you are loved there.\"" },
      { n: "Solar didn't ask if it was really what the paper said. She didn't need to. She put it in her pocket with the other nine, and the bell, and the snow kept falling on the hundred and twelve steps, and for a long time neither of them went inside." }
    ] }
  ]
});
