/* Rohan Kishibe · I The Magician. Arrives 9/5. Format notes are at the top of akihiko.js.
   Rank 3: Heaven's Door opens Solar's pages and finds the other worlds (Runners, strangers, Hoax), told only at blurb level.
   A boy keeps showing up in the pages with his face smudged; Rohan can't read him. Rank 2 nods to Kuromi's prank war if it happened. */
FemcSocial.define({
  id: 'rohan', name: 'Rohan Kishibe', short: 'Rohan', arcana: 'Magician', numeral: 'I', from: 'JoJo\'s Bizarre Adventure',
  arrives: '9/5',
  home: { place: 'Iwatodai Strip · Bookworms', slot: 0, days: [0, 3, 4, 6], hint: 'Daytime on Sundays, Wednesdays, Thursdays and Saturdays, at the back table of Bookworms, drawing.' },
  romance: true,
  cast: { koichi: 'Koichi', josuke: 'Josuke', jotaro: 'Jotaro', kuromi: 'Kuromi' },
  threads: { morioh: { name: 'morioh (do not add rohan)', members: ['rohan', 'koichi', 'josuke'] } },
  texts: [
    { id: 'rohan-1a', rank: 1, days: 1, slot: 1, msgs: [
      { from: 'rohan', t: 'I got your number from the old woman at the counter.' },
      { from: 'rohan', t: 'This is for research purposes only. Do not read into it.' }
    ], reply: [
      { t: "I'm reading into it.", notes: 3, then: [{ from: 'rohan', t: 'Unbelievable.' }, { from: 'rohan', t: 'Tuesday. 2pm. Bring your stories about the green hour.' }] },
      { t: 'Hi Rohan.', notes: 2, then: [{ from: 'rohan', t: 'Good. Efficient. I like that.' }] }
    ] },
    { id: 'mor-2', thread: 'morioh', rank: 2, days: 1, msgs: [
      { sys: 'josuke added you to "morioh (do not add rohan)"' },
      { sys: 'koichi added rohan' },
      { from: 'josuke', t: 'KOICHI' },
      { from: 'koichi', t: 'he asked!! he was sad!!' },
      { from: 'rohan', t: 'I was not sad. I was making an observation about the group\'s name.' },
      { from: 'josuke', t: 'anyway hi solar 👋 koichi says ur cool' }
    ], reply: [
      { t: 'Hi Josuke! Hi Koichi! Hi Rohan.', then: [{ from: 'rohan', t: 'Why did I get a period.' }] },
      { t: 'Rohan, were you sad?', then: [{ from: 'rohan', t: 'Leaving.' }, { from: 'koichi', t: 'he didnt leave hes still typing' }] }
    ] },
    { id: 'rohan-3a', rank: 3, days: 1, slot: 1, msgs: [
      { from: 'rohan', t: 'I\'ve been drawing since I got home.' },
      { from: 'rohan', t: 'I can\'t stop thinking about your pages. All those other versions of you.' },
      { from: 'rohan', t: 'This is the best material I\'ve ever read. That is the highest compliment I give.' }
    ], reply: [
      { t: 'Do they end happy?', notes: 3, then: [{ from: 'rohan', t: 'They hadn\'t been finished yet.' }, { from: 'rohan', t: 'I liked that.' }] },
      { t: "That's a lot of me.", notes: 2, then: [{ from: 'rohan', t: 'It\'s exactly the right amount of you.' }] }
    ] },
    { id: 'mor-4', thread: 'morioh', rank: 4, days: 1, msgs: [
      { from: 'josuke', t: 'rohan cheated at dice' },
      { from: 'rohan', t: 'I did not cheat. I was creative with the rules.' },
      { from: 'josuke', t: 'u used a stand' },
      { from: 'rohan', t: 'Creative.' },
      { from: 'koichi', t: 'solar please settle this' }
    ], reply: [
      { t: 'Rohan cheated.', then: [{ from: 'josuke', t: 'THANK U' }, { from: 'rohan', t: 'I will remember this.' }] },
      { t: 'Josuke, your hair looked great today.', then: [{ from: 'josuke', t: '...ok im not even mad anymore' }, { from: 'rohan', t: 'Coward\'s move. Well played.' }] }
    ] },
    { id: 'rohan-6a', rank: 6, days: 1, slot: 1, msgs: [
      { from: 'rohan', t: 'Jotaro said you answered him the way an adult would.' },
      { from: 'rohan', t: 'He doesn\'t say that about anyone. He didn\'t say it about me.' }
    ], reply: [
      { t: 'Jealous?', notes: 3, then: [{ from: 'rohan', t: 'Furious. Goodnight.' }] },
      { t: "I didn't feel very adult.", notes: 3, then: [{ from: 'rohan', t: 'No one does. That\'s the secret. Don\'t tell anyone I told you.' }] }
    ] },
    { id: 'rohan-8a', rank: 8, days: 1, slot: 1, msgs: [
      { from: 'rohan', t: 'I don\'t usually tell anyone about the alley.' },
      { from: 'rohan', t: 'Thank you for not making it into a story.' }
    ], reply: [
      { t: "It's yours. Not mine to tell.", notes: 3, then: [{ from: 'rohan', t: 'Yes. Exactly. That\'s exactly it.' }] },
      { t: 'She sounds like she loved you.', notes: 3, then: [{ from: 'rohan', t: '...I think she did. I was a very small, very annoying child.' }] }
    ] },
    { id: 'rohan-9r', rank: 9, route: 'romance', days: 1, slot: 1, msgs: [
      { from: 'rohan', t: 'I drew you seven times today.' },
      { from: 'rohan', t: 'None of them were good enough. I\'m going to keep trying for the rest of my life.' }
    ], reply: [
      { t: "That's the most romantic thing anyone's ever said to me.", notes: 3, then: [{ from: 'rohan', t: 'Obviously. I\'m a professional.' }] },
      { t: 'Show me tomorrow?', notes: 3, then: [{ from: 'rohan', t: 'Absolutely not.' }, { from: 'rohan', t: '...Maybe one.' }] }
    ] },
    { id: 'rohan-9f', rank: 9, route: 'friend', days: 1, slot: 1, msgs: [
      { from: 'rohan', t: 'I\'ve decided you\'re my muse.' },
      { from: 'rohan', t: 'Platonically. Artistically. You may accept.' }
    ], reply: [
      { t: 'I accept.', notes: 3, then: [{ from: 'rohan', t: 'Good. I had already started drawing you.' }] },
      { t: 'Does Koichi know he has competition?', notes: 2, then: [{ from: 'rohan', t: 'Koichi is a friend. You are material AND a friend. Different category.' }] }
    ] }
  ],
  ranks: [
    { after: '9/8', title: '1: material', place: 'Iwatodai Strip · Bookworms', scene: [
      { n: "Bookworms had a new regular, and he had taken the back table, the good one by the window, and covered it entirely in paper." },
      { n: "He was sharp in every direction. Green headband, earrings shaped like fountain pens, an expensive cropped jacket, a face that looked like it was always about to be disappointed by you. He was drawing the old couple who ran the shop, the husband dozing at the counter, the wife reading, and he was drawing them so fast and so well that Solar stopped in the aisle without meaning to and just watched the pen move." },
      { s: 'rohan', t: "Don't stand there. You're blocking the light." },
      { s: 'rohan', t: "...Actually, no. Stand there. Your shadow's better than the light was." },
      { n: "Rohan Kishibe, he informed her, without looking up. A manga artist. Pink Dark Boy. He said the title like she should have heard of it and was faintly offended she hadn't. He'd woken up three weeks ago on a bench in Iwatodai Station in the middle of the night, surrounded by coffins, and his first thought, he said, had been that it would make an incredible chapter." },
      { s: 'rohan', t: "And you. You're one of the ones who walks around during the green hour. I've seen you. Carrying that silver thing." },
      { s: 'rohan', t: "I want to know everything about it. Everything you know. For reference." },
      { choose: [
        { t: "What do I get?", notes: 3, then: [
          { s: 'rohan', t: '...' },
          { s: 'rohan', t: "Good. A negotiator. I'll draw you. In the next chapter. You'll be the only real person who's ever appeared in Pink Dark Boy." }
        ] },
        { t: "That's kind of a lot to ask a stranger.", notes: 2, then: [{ s: 'rohan', t: "Everyone's a stranger until they're material. Sit down." }] }
      ] },
      { n: "She sat down. He drew her while she talked, without asking, which she should have minded and didn't, and when she left two hours later, he hadn't once said thank you, but he'd bought her tea, and he'd drawn her the way she wished she looked, and she wasn't sure he'd done that on purpose." }
    ] },

    { after: '9/22', title: '2: koichi', place: 'Iwatodai Strip · Bookworms', scene: [
      { ifRank: { kuromi: 7 }, then: [
        { n: "There was still glitter in Rohan's pen box. He said he'd left it there to remember his enemies by. Kuromi, when told, said that was the nicest thing a man had ever said about her." }
      ] },
      { n: "There was a small boy at the back table today, very small, with silver hair cut short and a serious, kind, anxious face, and Rohan was looking at him with something Solar had never seen on Rohan's face before. Something like fondness." },
      { register: 'koichi' },
      { s: 'koichi', t: "You must be Solar! I'm Koichi. Hirose Koichi. I'm so sorry about Rohan." },
      { s: 'rohan', t: "Why are you apologizing for me?" },
      { s: 'koichi', t: "Because you never do it yourself!" },
      { n: "Koichi had come through two days before, looking for Rohan, because when someone from his town went missing, he said, the first thing you did was check if they'd been kidnapped by something supernatural, and the second thing you did was check if Rohan had done something weird to it first." },
      { s: 'koichi', t: "He used to be awful. Like, really awful. He tried to make me into a manga." },
      { s: 'rohan', t: "That was years ago. And it would have been an excellent manga." },
      { choose: [
        { t: "You two are friends?", notes: 3, then: [
          { s: 'koichi', t: "Yeah. He's actually my best friend. Don't tell him." },
          { s: 'rohan', t: "I'm sitting right here, Koichi." }
        ] },
        { t: "Rohan, did you make anyone else into a manga?", notes: 2, then: [{ s: 'rohan', t: "Define 'make.'" }] }
      ] },
      { n: "Koichi sat with them the rest of the afternoon and told Solar stories about their town, Morioh, a little seaside place where strange things happened all the time, and every story somehow ended with Rohan being insufferable and also, quietly, at the last minute, brave. Rohan pretended not to listen. His pen stopped every time Koichi said something nice about him." }
    ] },

    { after: '10/13', title: '3: heaven\'s door', place: 'Iwatodai Strip · Bookworms', scene: [
      { n: "It was Rohan's power. He'd been very careful not to explain it, the way he was careful about all the things he actually cared about. He called it Heaven's Door." },
      { s: 'rohan', t: "I can read people. Literally. They become books. Their memories, their secrets, everything they've ever done, written down on pages in their face." },
      { s: 'rohan', t: "I want to read you. I've wanted to since the day you blocked my light. I'm asking because Koichi says I'm supposed to ask now." },
      { choose: [
        { t: "Okay. Read me.", notes: 3, then: [{ s: 'rohan', t: "...Really? Just like that? Most people run." }] },
        { t: "Only if you tell me what you find.", notes: 3, then: [{ s: 'rohan', t: "Deal. I'd want to anyway. It's the only fun part." }] }
      ] },
      { n: "He drew a single line in the air with his pen, and a little figure appeared, like a cartoon boy in a hat, and touched her forehead, and her face came apart into pages." },
      { n: "It didn't hurt. It felt like being opened, like a window in winter. She could see the pages fluttering at the edge of her vision. He leaned in close and started reading, and his face went very still." },
      { s: 'rohan', t: "...This isn't right. This is you, but it isn't. A girl on a sidewalk on the Upper East Side, with a suitcase. She turned down Harvard. Everyone on her campus thinks they already know her." },
      { s: 'rohan', t: "And here. A different you. A seafood restaurant on the water, in Incheon, at low tide. She knows how to stitch a wound nobody can take to a hospital. There's a wedding date." },
      { s: 'rohan', t: "And here. Another one. High school. A student council campaign. A group chat that will not stop buzzing." },
      { s: 'rohan', t: "You're not one person. You're... a whole shelf." },
      { n: "He turned another page. Then another. And then he frowned, and she felt it, a strange pressure behind her eyes." },
      { s: 'rohan', t: "There's a boy. In almost every one. I can't read his face. It's smudged. Every time. Like whoever wrote you kept going back and touching it." },
      { s: 'rohan', t: "...Hm. I've never seen anything like that. Not once." },
      { n: "He closed her pages carefully, the way you'd close a book you meant to come back to, and her face was her face again, and the bookshop was very quiet, and somewhere in her chest something ached for a reason she couldn't place." },
      { s: 'rohan', t: "I didn't write anything in you. I want you to know that. I could have. I didn't." }
    ] },

    { after: '10/27', title: '4: josuke', place: 'Iwatodai Strip', scene: [
      { n: "Josuke Higashikata arrived the way he did everything, loudly, with an enormous pompadour that added roughly a foot to his height and a school uniform jacket covered in heart and peace-sign pins." },
      { register: 'josuke' },
      { s: 'josuke', t: "Koichi! There you are! And, ugh. Rohan." },
      { s: 'rohan', t: "Josuke. You look exactly as stupid as I remember." },
      { n: "They hated each other. That was immediately clear. They hated each other with a deep, complete, comfortable hatred that had obviously been going on for years and that neither of them would ever give up, because what else would they do with their afternoons." },
      { s: 'josuke', t: "Solar, right? Koichi says you're cool. Anybody who can stand Rohan for a whole month deserves a medal." },
      { choose: [
        { t: "I like your hair.", notes: 3, then: [
          { s: 'josuke', t: "...You. I like YOU." },
          { s: 'rohan', t: "Don't encourage him. If you insult it he loses his mind, so if you praise it he'll never leave." }
        ] },
        { t: "Rohan's not that bad.", notes: 2, then: [{ s: 'josuke', t: "He's EXACTLY that bad." }] }
      ] },
      { n: "They played dice that evening on the steps outside the shop, a gambling game from Josuke's town, for nothing but pride. Rohan lost four rounds in a row and then won eleven, and Josuke accused him of cheating with his Stand, and Rohan said he'd simply been creative with the rules, and then Josuke's Stand, a big pink-and-teal fighter, punched the dice into dust." },
      { n: "And then it rebuilt them. Exactly as they'd been. Every grain back in place. Solar stared." },
      { s: 'josuke', t: "Crazy Diamond. I fix stuff. Not myself, though. Everybody else." },
      { n: "He said it like it was nothing. Rohan, for the first time all night, said nothing at all." }
    ] },

    { after: '11/10', title: '5: pink dark boy', place: 'Iwatodai Strip · Bookworms', scene: [
      { n: "Rohan showed her the chapter. It wasn't finished. He never showed anyone things that weren't finished, Koichi said later, in a hushed voice, like he was describing a solar eclipse." },
      { n: "There she was. A girl in a red armband on a rooftop under a green moon, the city full of coffins below her, a silver gun pressed to her own temple, a great figure made of light and glass rising out of her back. Every line exact. Every shadow right. Better than she was. Exactly like her." },
      { s: 'rohan', t: "Well? Say something. I hate it when people don't say anything." },
      { choose: [
        { t: "It's beautiful. I don't know what else to say.", notes: 3, then: [{ s: 'rohan', t: "...That's acceptable." }] },
        { t: "Why do you draw manga, Rohan?", notes: 3, then: [
          { s: 'rohan', t: "Because I want people to read it. That's all. Not for money. Not to be famous." },
          { s: 'rohan', t: "I want someone, somewhere, to turn the page and feel something they didn't before. That's the whole reason." }
        ] }
      ] },
      { s: 'rohan', t: "Most people think art is about imagination. It isn't. It's about reality. You have to go and find the real thing and look at it until it gives up its secrets." },
      { s: 'rohan', t: "I licked a spider once. To know what it tasted like. For a chapter." },
      { s: 'solar', t: "...Rohan." },
      { s: 'rohan', t: "It tasted like nothing. Very disappointing. Accurate, though." },
      { n: "She laughed so hard she had to hold onto the table. He looked deeply offended for a full minute. Then he smiled, very slightly, at his drawing, and started inking her eyes." }
    ] },

    { after: '11/24', title: '6: jotaro', place: 'Port Island · Pier', scene: [
      { n: "There was a very tall man standing at the end of the pier in a long white coat and a white hat, looking at the water, and Rohan stopped walking so suddenly that Solar walked into his back." },
      { register: 'jotaro' },
      { s: 'rohan', t: "...Jotaro-san." },
      { s: 'jotaro', t: "Rohan. Koichi said you were here." },
      { n: "Jotaro Kujo was enormous, and stoic, and spoke the way glaciers moved. He'd come through, he said, because a door had opened somewhere in his hotel in Morioh and he had walked through it to see what was on the other side, which was, apparently, a thing he just did. He was a marine biologist. He'd been looking at the starfish under the pier." },
      { s: 'jotaro', t: "You're the girl with the Persona." },
      { s: 'jotaro', t: "This hour. This tower. The moon. You're fighting something that wants to end the world. And you're a high school student." },
      { n: "He wasn't asking. He was looking at her the way adults looked at things that should not be on children's shoulders and somehow always were." },
      { choose: [
        { t: "Somebody has to.", notes: 3, then: [
          { s: 'jotaro', t: '...' },
          { s: 'jotaro', t: "Yeah. I said that too. When I was your age." },
          { s: 'jotaro', t: "Yare yare. ...Be careful." }
        ] },
        { t: "I'm not doing it alone.", notes: 3, then: [{ s: 'jotaro', t: "Good. Don't. That's the only way any of us made it out." }] }
      ] },
      { n: "He left without saying goodbye. Rohan watched him go for a long time. He said, very quietly, that Jotaro was the only person in the world he'd never once wanted to read, because he already knew he'd find something heavy in there, something Jotaro had carried by himself for a very long time." },
      { s: 'rohan', t: "I'd rather draw him. Drawings are kinder. You get to leave things out." }
    ] },

    { after: '12/3', title: '7: tartarus', place: 'Tartarus · The Dark Hour', scene: [
      { n: "Rohan had absolutely insisted. He needed, he said, to see it with his own eyes. Reference. Mitsuru had looked at him for a long second and said if he died she was not responsible. Rohan said that was completely fair." },
      { n: "He sketched the whole way up. Checkerboard floors, bloody walls, staircases that moved when you weren't watching them. He sketched the shadows. He sketched Junpei falling down. He was having, by any measure, the time of his life." },
      { n: "And then a shadow got past her. A huge, black, laughing thing with a mask for a face, and it went straight for him, and Solar was too far away, and she screamed his name." },
      { s: 'rohan', t: "Heaven's Door." },
      { n: "The shadow froze. Its mask split into pages, black pages, written in a language that shouldn't exist. Rohan, perfectly calm, uncapped his pen and wrote one line across the top." },
      { s: 'rohan', t: "'Cannot attack Rohan Kishibe or anyone standing with him.'" },
      { n: "The shadow stopped. It turned around, confused, and wandered off into the dark, and Rohan capped his pen and went back to sketching." },
      { choose: [
        { t: "You could have died.", notes: 3, then: [
          { s: 'rohan', t: "I could have. Then I wouldn't have gotten this drawing. Look at the angle. Look at it." },
          { s: 'rohan', t: "...You screamed my name. I've never had anyone scream my name like that. I'm drawing that too." }
        ] },
        { t: "Okay, that was incredible.", notes: 3, then: [{ s: 'rohan', t: "Obviously. Write it down. It'll be in the next chapter anyway." }] }
      ] }
    ] },

    { after: '12/15', title: '8: the alley', place: 'Iwatodai Strip · Back Alley', scene: [
      { n: "There was an alley behind the Iwatodai strip that Rohan would not walk down. He'd walk around the whole block to avoid it. Solar had noticed weeks ago and had never asked. Tonight, in the cold, he stopped at the mouth of it and stood there." },
      { s: 'rohan', t: "There's an alley in my town too. A ghost lives in it. A girl called Reimi." },
      { s: 'rohan', t: "When I was four, a man broke into the house I was staying in. Reimi was babysitting me. She pushed me out the window. She saved my life. She didn't save her own." },
      { s: 'rohan', t: "I didn't remember. Not until I was twenty. My own memory just... closed that page. Kept it from me." },
      { s: 'rohan', t: "Imagine that. I can read anyone's life except the part of my own that mattered most." },
      { n: "It was cold, the kind of cold that got into your hands first. She thought about the dorm kitchen, the way grief closed things up, the way you could walk past a room every day and never once go in." },
      { choose: [
        { t: "She'd be proud of you, I think.", notes: 3, then: [{ s: 'rohan', t: "...She'd tell me to be nicer to Josuke. She'd be right. I won't do it." }] },
        { t: "(Walk down the alley with him.)", notes: 3, then: [
          { n: "She took his hand, which he allowed, and walked into the alley, which he allowed, and they walked all the way to the other end of it together, slowly, and didn't look back, and when they came out into the light on the other side he let out a breath he'd been holding for years." },
          { s: 'rohan', t: "...That was the first time I've done that since I was four." }
        ] }
      ] },
      { n: "He never told anyone else. She never made it into a story. She thought that was the most important thing she'd ever been trusted with, and she was right." }
    ] },

    { after: '12/22', title: '9: what are we', place: 'Iwatodai Strip · Bookworms', scene: [
      { n: "The shop was closed. The old couple had given Rohan a key, which was a thing he'd mentioned eleven separate times. He was at the back table, and there were drawings of her covering the whole surface, dozens of them, from every day since September." },
      { s: 'rohan', t: "I've drawn you a hundred and four times. I counted." },
      { s: 'rohan', t: "I've never drawn anyone a hundred and four times. Not Koichi. Not myself." },
      { s: 'rohan', t: "I need to know what this is. I'm a researcher. I need accurate information." },
      { route: [
        { t: "I'm in love with you, Rohan.", route: 'romance', notes: 3, then: [
          { s: 'rohan', t: '...' },
          { s: 'rohan', t: "...That's accurate. That's correct information. Yes." },
          { n: "He kissed her among the drawings, very carefully, like she was the only thing in the world he'd ever been afraid to get wrong, and afterward he immediately drew her face, and wouldn't show her, and said it was the hundred and fifth and the best." }
        ] },
        { t: "You're my best friend, Rohan. My favorite artist.", route: 'friend', notes: 3, then: [
          { s: 'rohan', t: "...Favorite artist. Obviously. There's no competition." },
          { s: 'rohan', t: "Best friend, though. That's... new information. I'll need time to draw it." }
        ] }
      ] }
    ] },

    { after: '12/30', title: '10: the last page', place: 'Iwatodai Strip · Bookworms', scene: [
      { n: "He gave her a manga. One volume, hand-bound, with a cover he'd painted himself. A girl in a red armband with headphones around her neck, under a green moon. The title was just her name." },
      { s: 'rohan', t: "It's yours. Every page. Every time I drew you. In order." },
      { n: "She turned the pages slowly, there in the closed shop with the snow coming down outside. The dorm, the shrine, the pier, the rooftops. Kuromi drawing on Junpei. Koichi laughing. Josuke's hair. The alley. All of it. Her year, here, in this world, drawn by someone who had looked at it until it gave up its secrets." },
      { n: "The last page was blank." },
      { s: 'rohan', t: "That's yours too. I can't write that page. Nobody can. I could read your whole life and I'd still never know what you're going to do next." },
      { s: 'rohan', t: "That's the best thing about you. You don't let anyone write you. Not even me." },
      { ifRoute: 'friend', then: [
        { choose: [
          { t: "Then draw me again next year.", notes: 3, then: [{ s: 'rohan', t: "I'll draw you every year. I'll draw you when you're old and boring. I'll still find something." }] },
          { t: "Thank you, Rohan. Really.", notes: 3, then: [{ s: 'rohan', t: "...Don't thank me. Just let me keep drawing you. That's enough." }] }
        ] },
        { n: "Koichi and Josuke came by with snacks and fought over the heater. Rohan insulted Josuke's hair once, just to start a fight, and Josuke rebuilt the heater after he punched it, and Solar sat in the middle of it with her manga in her lap, and drew, on the last page, in pencil, very small, the three of them." }
      ] },
      { ifRoute: 'romance', then: [
        { s: 'rohan', t: "But... if you wanted. I could write one line. In you. Only if you said yes." },
        { choose: [
          { t: "(Hand him the pen.)", notes: 3, then: [
            { n: "He opened her, gently, the pages fluttering. He wrote one line, very carefully, in his neat, exact hand. When she was herself again she asked him what it said, and he wouldn't tell her. He'd only say it wasn't a command. It was a fact." },
            { s: 'rohan', t: "It says what I already know. That's all. You can read it someday. If you ask nicely." }
          ] },
          { t: "Write it on the last page instead.", notes: 3, then: [
            { s: 'rohan', t: '...' },
            { s: 'rohan', t: "Yes. That's better. That's much better. You're a better writer than me." },
            { n: "He wrote one word on the blank page. It said: Together. And then, underneath it, in smaller letters, so she almost missed it: to be continued." }
          ] }
        ] }
      ] }
    ] }
  ]
});
