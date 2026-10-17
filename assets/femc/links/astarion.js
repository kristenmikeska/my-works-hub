/* Astarion · XV The Devil. Arrives on the 7/7 full moon. Evenings only. Format notes are at the top of akihiko.js.
   MAX uses the Hoax photo booth idea: the first picture of himself he's seen in two hundred years. */
FemcSocial.define({
  id: 'astarion', name: 'Astarion', short: 'Astarion', arcana: 'Devil', numeral: 'XV', from: "Baldur's Gate 3",
  arrives: '7/7',
  home: { place: 'Paulownia Mall · Chagall Café', slot: 1, days: [0, 1, 3, 5, 6], hint: 'Evenings only (the sun is a problem), most nights of the week, at Chagall Café.' },
  approach: "A pale man with white curls is sitting alone at Chagall with a cup he hasn't touched, watching everyone who walks in like they're on a menu.",
  invite: {
    ask: ["Darling. I'm bored. Come amuse me.", "Free tonight? I've found somewhere terribly interesting.", "Come keep me company. That's not a request.",
      "I'm at Chagall. The jazz is atrocious. Rescue me.",
      "There is a man at the next table proposing. Badly. You have to see this.",
      "I have been sitting here for an hour looking mysterious and it is completely wasted on these people. Come.",
      "The café has a new cake. I can't eat it. You can. Come and tell me about it.",
      "The night is young and so, technically, am I. Come out."],
    ok: ["Marvelous. Don't keep me waiting.", "Splendid. I'll save you the good chair.", "Wonderful. I'll pretend I wasn't waiting."],
    no: ["Cruel. Utterly cruel. Fine.", "Rejected. By a mortal. I'll survive. Barely.", "Hm. Then I shall brood alone. It's much less fun."]
  },
  hangouts: [
    [
      { n: "Chagall at eight on a weeknight was mostly couples and one exhausted salaryman eating cheesecake like it had personally wronged him, and Astarion had claimed the window table again, the one with the best view of the room, which he said was for the ambience and was very obviously for the surveillance." },
      { s: 'astarion', f: 'happy', t: "The couple by the piano. Third date. He's lying about his job, she knows, and she's decided she doesn't mind. Your turn, darling." },
      { choose: [
        { t: "The salaryman. That's a divorce cheesecake.", notes: 3, then: [{ s: 'astarion', f: 'happy', t: "Oh, that's vicious. That's beautiful. A divorce cheesecake. I'm going to think about that all night." }] },
        { t: "Maybe they're just on a date.", notes: 1, then: [{ s: 'astarion', f: 'neutral', t: "Nobody is ever just anything. That's the first rule of watching people. The second rule is that I'm always right." }] },
        { t: "(Point out the waiter, who has been staring at him all night.)", notes: 2, then: [
          { s: 'astarion', f: 'surprised', t: "...Has he?" },
          { n: "He spent the next ten minutes pretending not to check, and checked, and was insufferably pleased with himself." }
        ] }
      ] },
      { n: "The salaryman finished his cheesecake, paid, and left a tip so large the waitress chased him halfway across the mall to give it back. Astarion declared this conclusive. Solar did not argue." }
    ],
    [
      { n: "There was a new menu card propped against the sugar bowl, a little folded thing with drawings of bread on it, and Astarion had been reading it with the expression of a man reading his own obituary." },
      { s: 'astarion', f: 'serious', t: "Garlic toast. Garlic. In a café, darling. Printed right next to the cake, as if it belonged there." },
      { s: 'astarion', f: 'neutral', t: "I want you to know I've moved tables twice tonight because someone near me ordered it." },
      { choose: [
        { t: "I'll ask them to take the card away.", notes: 3, then: [
          { n: "Solar flagged down the waitress and asked, very politely, whether they had a menu without the garlic toast on it. The waitress looked at Astarion. Astarion looked tragic. The card was removed." },
          { s: 'astarion', f: 'happy', t: "My hero. Truly. Someone write a ballad." }
        ] },
        { t: "Does garlic actually hurt you?", notes: 2, then: [{ s: 'astarion', f: 'neutral', t: "It doesn't hurt. It's just rude. Like someone shouting in a library." }] },
        { t: "(Order the garlic toast.)", notes: 1, then: [
          { s: 'astarion', f: 'surprised', t: "...You monster." },
          { n: "He moved to the far end of the table and watched her eat every bite with the betrayed fascination of a cat watching someone take a bath." }
        ] }
      ] },
      { n: "For the rest of the evening he flinched, theatrically, every time the kitchen door swung open, and every time he checked to see whether she'd noticed." }
    ],
    [
      { n: "Someone had left an English-language newspaper on the next table, folded open to the crossword, and Astarion had taken it the way he took everything, without asking, and was filling it in with a borrowed pen and an air of terrible confidence." },
      { s: 'astarion', f: 'happy', t: "Nine letters, 'a formal dance.' Cotillion. I've been to dozens. I was invited to all of them for my legs." },
      { s: 'astarion', f: 'serious', t: "Three letters, 'video game console.' What on earth is a console? It isn't consolation. I tried consolation. It doesn't fit." },
      { choose: [
        { t: "Wii.", notes: 2, then: [{ s: 'astarion', f: 'serious', t: "That isn't a word, darling. That's a noise a child makes on a staircase." }] },
        { t: "You do the old clues. I'll do the new ones.", notes: 3, then: [{ s: 'astarion', f: 'happy', t: "Finally, a sensible strategy. You take the century you understand and I'll take the ones I've survived." }] },
        { t: "(Take the pen.)", notes: 1, then: [{ s: 'astarion', f: 'neutral', t: "Absolutely not. Hold the newspaper. Hold it nicely. That's your job." }] }
      ] },
      { n: "They finished it by ten, his half all ball gowns and archaic weaponry, hers all pop stars and electronics, and he folded it up afterward and tucked it inside his coat like a trophy." }
    ],
    [
      { n: "Some evenings Chagall had a pianist, an old man in a cardigan with a tip jar, who played the same twelve jazz standards in the same order and smiled at nobody, and everyone talked straight over him like he was the air conditioning." },
      { s: 'astarion', f: 'neutral', t: "He's very good, you know. Wasted here." },
      { s: 'astarion', f: 'happy', t: "In my day you'd have hired him for a ball and everyone would still have talked over him. Some things never change. It's almost comforting." },
      { choose: [
        { t: "(Put a request in the tip jar.)", notes: 3, then: [{ n: "Solar wrote the only jazz standard she knew the name of on a napkin and dropped it in the jar with a hundred-yen coin. The old man read it, raised his eyebrows at her, and played it next. Astarion watched him the whole way through with his chin on his hand, perfectly still, not performing anything at all. He was just listening." }] },
        { t: "You can tell he's good?", notes: 2, then: [{ s: 'astarion', f: 'neutral', t: "Darling, I've had two hundred years of nights to fill. I can tell when someone's good at something. It's rarer than you'd think." }] },
        { t: "Do you dance?", notes: 1, then: [{ s: 'astarion', f: 'happy', t: "Exquisitely. Not here. The floor's sticky and nobody in this room deserves it." }] }
      ] },
      { n: "When the pianist packed up, Astarion put a folded bill in the jar on the way out. He wouldn't say how much, or where he'd got it. He told her not to make it a thing. She didn't." }
    ],
    [
      { n: "The barista at Chagall had stopped asking what Astarion wanted. She brought him a tomato juice, no ice, in a wine glass, and set it down in front of him with the grave courtesy of someone who had decided a long time ago not to ask questions." },
      { s: 'astarion', f: 'happy', t: "She thinks I'm an actor. Something experimental, at a little theater. I haven't corrected her. It's the most flattering thing anyone in this city believes about me." },
      { choose: [
        { t: "What would your stage name be?", notes: 3, then: [{ s: 'astarion', f: 'happy', t: "Astarion. Just Astarion. One name, like all the great ones. The posters would be mostly profile." }] },
        { t: "You'd make a good actor.", notes: 2, then: [{ s: 'astarion', f: 'neutral', t: "I'd make a magnificent actor, darling. That's rather the problem." }] },
        { t: "(Order a tomato juice too, in solidarity.)", notes: 2, then: [{ n: "The barista brought it in a wine glass without being asked. Solar got about halfway down it before admitting it was terrible, and Astarion laughed so hard the couple at the next table moved." }] }
      ] },
      { n: "When they left, the barista said goodnight to him by name, and he bowed to her like she was a duchess, and walked out into the dark looking enormously pleased with himself." }
    ]
  ],
  // After rank MAX on the romance route, each visit plays the next date in order (then they rotate). All of them after dark.
  dates: [
    { title: 'the late show', place: 'Port Island · Cinema', music: 'night', scene: [
      { n: "There was a cinema behind Port Island Station that showed old films on Friday nights to an audience of about nine people, most of them asleep, and this Friday, according to the hand-lettered sign by the ticket window, it was a vampire picture from 1958, in English, with subtitles, and Astarion had been standing in front of the sign for three minutes with his hands clasped behind his back like a man at a gallery." },
      { s: 'astarion', f: 'happy', t: "Darling. Darling. They've made a play about me. With moving pictures. I have to see what they got wrong. It's a professional obligation." },
      { s: 'astarion', f: 'serious', t: "Also, this is a date. A real one. I'm told mortals go to the cinema to sit in the dark and not look at each other. It's the most vampiric courtship ritual I've ever heard of. I'm thrilled." },
      { n: "He bought the tickets. He bought a bucket of popcorn the size of a small child, which he could not eat, and carried it to their seats in the very back row, center, with the reverence of an altar boy, and held it on his lap for her the entire film, at exactly the angle her hand would find it in the dark without looking." },
      { n: "The film was very old and very red. The vampire was tall and wore a cape and had a widow's peak like an arrow pointing at his own forehead, and the moment he came on screen Astarion leaned over, close, so that his whisper went straight into her ear and nowhere else." },
      { s: 'astarion', f: 'serious', t: "Absolutely not. The cape. Nobody wears a cape indoors. You'd catch it in every door you ever walked through." },
      { choose: [
        { t: "Shh. Let the man live.", notes: 2, then: [
          { s: 'astarion', f: 'happy', t: "He isn't alive, darling. That's rather the point. Neither am I. We're colleagues." },
          { n: "He was quiet after that. For almost four minutes." }
        ] },
        { t: "What else did they get wrong?", notes: 3, then: [
          { n: "It was a mistake. It was the best mistake she'd made all year. He went through all of it, the mirrors, which he said were correct and he resented it, the garlic, which he said was correct and he resented it more, the coffin, which he said was a matter of personal taste and he personally preferred a decent bed, and the bat, which he said, with tremendous dignity, he had never once managed and was not bitter about. His breath was cool and kept stirring the hair by her ear. A man two rows down turned around and shushed them both." }
        ] }
      ] },
      { n: "And then the ending. The castle, the long table, the hero running its whole length and tearing down the curtains, and the morning light pouring in across the floor, and the vampire caught in it and coming apart, slowly, in that old unconvincing way, from the feet up, into dust." },
      { n: "Astarion stopped talking." },
      { n: "Solar felt it more than saw it. The arm against hers went still. The popcorn on his lap went still. On the screen the light kept coming, gold and terrible, and beside her in the dark he wasn't watching a film anymore. He was watching something he'd seen happen to someone. Or had been promised would happen to him. Or both." },
      { choose: [
        { t: "(Take his hand. Don't say anything.)", notes: 3, then: [
          { n: "She found it in the dark, cold, resting on the rim of the bucket, and laced her fingers through his, and he gripped back so hard her knuckles ached. He didn't look at her. He held on through the dust, and the credits, and the house lights, and the man two rows down standing up and stretching and leaving, until it was only the two of them in the back row of an empty cinema with a bucket of cold popcorn between them." }
        ] },
        { t: "(Lean your head on his shoulder. Block the screen.)", notes: 3, then: [
          { n: "She put her head on his shoulder so that the side of her face blocked his view of the screen, deliberately, obviously. He made a small sound, half a laugh. Then his cheek came down on top of her head and stayed there, and they listened to the hero's footsteps on the stone, and the music swell, and didn't watch any of it." }
        ] }
      ] },
      { s: 'astarion', f: 'neutral', t: "...Terrible film. Two stars. The cape alone." },
      { s: 'astarion', f: 'blushing', t: "Can we come back next Friday? They're showing the sequel. I want to see if he comes back. They always come back, you know. That's the one thing they got right." }
    ] },
    { title: 'fourteen hours', place: 'Paulownia Mall · Chagall Café', music: 'night', scene: [
      { n: "In winter the nights in Iwatodai ran to fourteen hours. He had counted. He'd timed it with a borrowed watch, from the moment the last light left the top of the Port Island towers in the late afternoon to the moment it touched them again in the morning, and it came to fourteen hours and change, and he announced this at Chagall with the air of a man announcing an inheritance." },
      { s: 'astarion', f: 'happy', t: "Fourteen hours, darling. Where I'm from, summer nights were five. Five miserable hours, and you spent the last of them running for a cellar. I have never in two hundred years had this much dark to spend." },
      { s: 'astarion', f: 'happy', t: "So tonight I'm spending all of it. On you. Every minute. I've made an itinerary." },
      { n: "Solar looked at the itinerary. It was on a napkin. It ran until seven-fifteen in the morning." },
      { choose: [
        { t: "I have a curfew. Eleven. Mitsuru-senpai locks the door.", notes: 3, then: [
          { s: 'astarion', f: 'surprised', t: "...Eleven." },
          { s: 'astarion', f: 'serious', t: "The longest nights of the year and you turn into a pumpkin at eleven. Darling. That isn't a curfew. That's a tragedy. That's a Greek tragedy." },
          { n: "He looked at the napkin for a long time, at all the hours past eleven, and then folded it in half, and in half again, and began to laugh, helplessly, with his face in his hand." }
        ] },
        { t: "(Don't mention the curfew. Not yet.)", notes: 2, then: [
          { n: "She didn't mention the curfew. She would deal with it at ten-forty, the way she dealt with most things, at the last possible moment and with a straight face." }
        ] }
      ] },
      { n: "So they had five hours, and he spent them like a man spending a fortune he'd only just found out he had, extravagantly, in the wrong order. They walked the Strip while the shops closed, one shutter at a time, rolling down like a slow drumroll. They stood on the footbridge over the tracks and watched the trains go under, all lit up, full of tired people going home, and he waved at every one. He bought her a can of hot corn soup and a can of hot cocoa and a can of hot milk tea and held all three while she chose, and then went on holding the other two, for the warmth, he said, though he didn't feel warmth, though she suspected he liked the weight." },
      { place: 'Iwatodai Dorm · Front Steps', time: 'Night' },
      { n: "At 10:52 they were at the dorm. The lounge lights were on. Somebody was watching television too loudly. He stood at the bottom of the steps in his burgundy coat with his hands in his pockets, and there was frost on the railing, and his breath, Solar noticed, didn't fog in the cold the way hers did, and never had, and she had never once mentioned it." },
      { s: 'astarion', f: 'neutral', t: "Nine hours left. Nine hours of the best dark in the world. Do you know what I'm going to do with them?" },
      { s: 'astarion', f: 'blushing', t: "Absolutely nothing. I'm going to sit in my room with the curtains taped shut and think about the soup. Isn't that ridiculous? Two hundred years starving for the night, and I'm going to waste nine hours of it on you." },
      { choose: [
        { t: "Text me. In July I said not at four in the morning. I take it back.", notes: 3, then: [
          { s: 'astarion', f: 'surprised', t: "...You'll be asleep." },
          { s: 'solar', t: "I'll read them when I wake up. All of them." },
          { s: 'astarion', f: 'happy', t: "All of them. Darling, you've made a terrible mistake. There's going to be a novel." }
        ] },
        { t: "It's not wasted.", notes: 3, then: [
          { s: 'astarion', f: 'sad', t: "...No. I don't suppose it is." },
          { n: "He looked up at her window on the third floor, which he must have worked out was hers some time ago and never mentioned, and then back at her, and the crease came, between his brows, right on schedule." }
        ] }
      ] },
      { n: "At 10:58 he kissed her at the bottom of the steps, quickly, one cold hand on the railing, and stepped back out of the porch light as neatly as a stage exit. At 10:59 the door opened behind her and Mitsuru said her name, once, in the voice of someone who had been watching from the lounge window and had chosen, generously, to give it two minutes." },
      { n: "The first text came at 1:14. The last came at 7:16, a minute after sunrise. There were forty-one in between. Most of them were about the soup." }
    ] },
    { title: 'spin cycle', place: 'Iwatodai Strip · Coin Laundry', scene: [
      { n: "Astarion had one coat. It was burgundy and embroidered, two hundred years old in style and at least some of that in fact, and it had survived a vampire lord, a crossing between worlds, a shadow wearing his master's face and five months of Chagall's tomato juice. It had not survived a man at the next table knocking an entire pot of coffee into his lap." },
      { n: "So at ten o'clock on a Tuesday night they were sitting on the plastic bench of the coin laundry on the Strip, under a flickering tube light, watching the coat go around. It was the most domestic thing Solar had ever seen him do. He was wearing a gray sweatshirt from the dorm's lost-and-found box that said GEKKOUKAN SWIM CLUB in peeling letters, and in it he looked like an extremely beautiful ghost who had wandered into a gym." },
      { s: 'astarion', f: 'serious', t: "I'd like it known that I have never washed anything in my life. Somebody else did it. Or nobody did. Mostly nobody did." },
      { s: 'astarion', f: 'neutral', t: "It's a ritual, isn't it. You feed coins to a white box and it spins your sins out. Your people are more religious than they think." },
      { choose: [
        { t: "It's going to come out a different color.", notes: 1, then: [
          { s: 'astarion', f: 'surprised', t: "Don't. Don't even say it. I'll burn this establishment to the ground." }
        ] },
        { t: "You look good in that sweatshirt.", notes: 3, then: [
          { s: 'astarion', f: 'blushing', t: "I look like a third-year who's given up. Which, I'm told, is a look." },
          { s: 'astarion', f: 'happy', t: "...Say it again, though." }
        ] }
      ] },
      { n: "The machine's door was a round glass porthole, and the laundry was bright and the street outside was dark, so the glass did what glass does at night and showed the room back to itself. Solar could see herself in it. The bench. The rows of machines behind her. The poster about lost socks. And an empty space on the bench beside her where a person was sitting with his knee against hers." },
      { n: "He was looking at it too. At her, in the porthole, going around with the coat behind her, red and gold and dark." },
      { s: 'astarion', f: 'neutral', t: "In July you told me my face. In front of a shop window. Nobody had ever done that for me." },
      { s: 'astarion', f: 'neutral', t: "I've never done it back. I keep meaning to. I'm going to do it now, while you can see it and I can't. It seems fair." },
      { choose: [
        { t: "You don't have to.", notes: 2, then: [
          { s: 'astarion', f: 'serious', t: "I know. That's why I'm going to." }
        ] },
        { t: "(Look at the glass. Let him.)", notes: 3, then: [
          { n: "She looked at the glass. She looked at herself, which she mostly avoided doing, and waited, and felt his attention settle on the side of her face the way it settled on anything he thought was worth watching, completely." }
        ] }
      ] },
      { n: "He told her. He told her the way she'd told him, slowly, specifically, the way only someone who'd had two hundred years to practice looking at people could. The hair falling into her eyes that she pushed back with her wrist and never her fingers. The polite face, the one she used on teachers and shopkeepers and Mitsuru, and the exact place at the corner of her mouth where it stopped being polite when she was trying not to laugh. The headphones she wore around her neck even when nothing was playing, like a door she could close. The way she held any can or cup in both hands, like somebody might come and take it. The way she looked at the floor before she said anything true, every time, as if checking it would hold." },
      { s: 'astarion', f: 'blushing', t: "And you have a crease, darling. Just here. Between the eyebrows. You have it right now." },
      { n: "She did. She could see it in the glass. She put her hand over her face, the way he had in July, and he laughed, the real one, and leaned his shoulder into hers, and behind them both the coat went around and around in the porthole, catching the light." },
      { choose: [
        { t: "You're a menace. An absolute menace.", notes: 3, then: [
          { s: 'astarion', f: 'happy', t: "Oh, I've been waiting months for you to say that back. I'll think about it for a century." }
        ] },
        { t: "(Kiss him. He can't see it in the glass. You can.)", notes: 3, then: [
          { n: "She turned and kissed him, and in the dark porthole across from them a girl in a scarf kissed nobody at all, leaning into empty air with her eyes shut, and Solar watched it out of the corner of her eye and thought it looked like a girl kissing the dark, and that it was the truest picture of the two of them she would ever see." }
        ] }
      ] },
      { n: "The coat came out the right color. He held it up to the light like a newborn. He fed the dryer two hundred yen and sat back down and asked, very casually, how long it took, and when she said forty minutes he said good, and laid his arm along the back of the bench behind her, and didn't move it for any of them." }
    ] },
    { title: 'a waltz', place: 'Paulownia Mall · Chagall Café', music: 'tender', scene: [
      { n: "Chagall closed at eleven. At five past, the barista turned the sign on the door and dimmed the lights and did not, as she would have on any other night, ask them to leave. She stacked the chairs on every table except theirs. She pushed the tables back against the wall. Then she went behind the counter and began, slowly, with enormous concentration, to polish a single glass, like a woman who had been asked to stay and witness something and had decided to make herself useful." },
      { n: "The old pianist was at the piano. Still in the cardigan. He had been paid. Astarion wouldn't say how much, or where he'd got it, and had told Solar on the way in not to make it a thing." },
      { s: 'astarion', f: 'neutral', t: "Months ago you asked me whether I dance. I said exquisitely, and not here, because the floor was sticky and nobody in the room deserved it." },
      { s: 'astarion', f: 'happy', t: "I had the floor cleaned. And there's only one person in the room." },
      { n: "He nodded at the pianist. The pianist, who had played the same twelve jazz standards in the same order every night since Solar first walked into Chagall, played something that wasn't any of them. Something old. Three beats to the bar, slow, the kind of music that belonged to the kind of room he must have stood in once, two hundred years ago, by candlelight, in a coat a lot like this one." },
      { choose: [
        { t: "I don't know how to waltz.", notes: 3, then: [
          { s: 'astarion', f: 'happy', t: "Of course you don't. Nobody does anymore. That's what makes it romantic." },
          { s: 'astarion', f: 'neutral', t: "Give me your hand. No, the other one. There. Now you know how." }
        ] },
        { t: "(Curtsy. Badly.)", notes: 2, then: [
          { s: 'astarion', f: 'happy', t: "Oh, that's dreadful. That's the worst curtsy I've seen in two centuries. I'll remember it on my deathbed. Come here." }
        ] }
      ] },
      { n: "He was exquisite. He hadn't been lying. He moved like the music was something he'd been carrying around in his body for two hundred years with nowhere to set it down, and he steered her through it with one cold hand flat against her back and the other holding hers at shoulder height, and she stepped on his feet four times in the first minute, and he didn't flinch once." },
      { s: 'astarion', f: 'neutral', t: "One, two, three. One, two, three. Don't watch your feet. Your feet are a lost cause. Watch me." },
      { n: "So she watched him. That was the trick of it, it turned out. When she watched her feet she fell over them. When she watched his face, close, the red eyes and the white curls and the crease coming and going, she stopped counting, and the floor simply happened underneath her, the way stairs happen in a house you know." },
      { s: 'astarion', f: 'sad', t: "The last time I danced, it was for him. At a ball. To bring someone home who wouldn't be leaving again. Every step was a lie. I was very good at it." },
      { choose: [
        { t: "Is this one a lie?", notes: 3, then: [
          { s: 'astarion', f: 'surprised', t: "..." },
          { s: 'astarion', f: 'blushing', t: "No. No, darling. This is the first one in two hundred years that isn't." },
          { n: "He missed a step saying it. Just one, the only one all night. She stepped on his foot straight afterward, on purpose, so they'd be even, and he laughed out loud in the empty café." }
        ] },
        { t: "(Hold on tighter. Don't let him go back there.)", notes: 3, then: [
          { n: "She closed her hand on his shoulder and drew herself in until there was no room between them at all, until the waltz had to get smaller to fit, until they were mostly swaying in one place on Chagall's clean floor with her cheek against his collar. He didn't say anything. His hand on her back spread its fingers, slowly, like something settling." }
        ] }
      ] },
      { n: "The pianist played it twice. Then, without being asked, a third time, slower. The barista had stopped polishing the glass a long while ago and was just watching, chin on her hand, with the look of someone who had been told her favorite customer was an actor and was now completely certain of it." },
      { n: "At the end he stepped back and bowed to Solar, low, from the waist, the old way, one hand over his heart, as if she were a duchess. Then he turned and bowed to the pianist, and to the barista, who went pink to the roots of her hair, and then he took Solar's hand and walked her out into the cold, humming it, one, two, three, all the way to the station." }
    ] }
  ],
  // P3's Christmas Eve: on 12/24 evening, if Solar is romancing several people (rank 9+), she picks one; this plays.
  christmas: { place: 'Paulownia Mall · Chagall Café', scene: [
    { n: "Every table at Chagall on Christmas Eve had been booked since the first of December. There was a waiting list. There was a waiting list for the waiting list. Couples stood outside the window in their good coats looking in at the candles like children at a sweetshop, and the window table, the best one, the one with the view of the whole room, had a small folded card on it that read, in the barista's careful English, RESERVED. ASTARION. JUST ASTARION." },
    { s: 'astarion', f: 'happy', t: "I booked it in November. I told them I was an actor. It's the first time that lie has ever been used for anything that mattered." },
    { s: 'astarion', f: 'happy', t: "Merry Christmas, darling. I'm told this is the holiday where mortals eat cake and fried chicken and kiss under lights. I've done extensive research. I've watched four hundred couples do it from this exact seat." },
    { n: "She had the chocolate cake. He had tomato juice in a wine glass, and the barista had tucked a small sprig of holly against the rim of it without saying anything, which he found so moving he had to look out of the window for a while." },
    { ifRank: { astarion: 10 }, then: [
      { choose: [
        { t: "(Give him an instant camera. It fits in a coat pocket.)", notes: 3, then: [
          { n: "It was secondhand, from the camera shop by Port Island Station, boxy and white, with a strap and two packs of film, and he turned it over in his hands like a relic, and then like a weapon, and then he worked out which end was which." },
          { s: 'astarion', f: 'surprised', t: "...Whenever I like. I can see myself whenever I like." },
          { s: 'astarion', f: 'blushing', t: "Darling. Do you understand what you've done? I'm going to be unbearable." },
          { n: "He took the first one immediately, of both of them, at arm's length across the candle, and they watched it come up together out of the gray, slowly, his face arriving in it like someone walking out of fog." }
        ] },
        { t: "(Give him a scarf. He doesn't get cold. You remember the jacket.)", notes: 3, then: [
          { n: "Black cashmere, very soft, because she had thought about what he'd pick for himself, and then about what he'd never let himself pick." },
          { s: 'astarion', f: 'neutral', t: "...I don't get cold, darling. You know that." },
          { s: 'solar', t: "You kept my jacket. In September. All night." },
          { s: 'astarion', f: 'blushing', t: "...It's on the chair in my room. I never gave it back. I hoped you'd never ask." },
          { n: "He put the scarf on there at the table and kept it on for the rest of the night, in a heated café, with the air of a man who had never been so warm in his life." }
        ] }
      ] }
    ], else: [
      { choose: [
        { t: "(Give him a scarf. He doesn't get cold. You remember the jacket.)", notes: 3, then: [
          { n: "Black cashmere, very soft, because she had thought about what he'd pick for himself, and then about what he'd never let himself pick." },
          { s: 'astarion', f: 'neutral', t: "...I don't get cold, darling. You know that." },
          { s: 'solar', t: "You kept my jacket. In September. All night." },
          { s: 'astarion', f: 'blushing', t: "...It's on the chair in my room. I never gave it back. I hoped you'd never ask." },
          { n: "He put the scarf on there at the table and kept it on for the rest of the night, in a heated café, with the air of a man who had never been so warm in his life." }
        ] },
        { t: "(Give him a bottle of very expensive tomato juice. It has a ribbon.)", notes: 2, then: [
          { s: 'astarion', f: 'happy', t: "Oh, that's vintage. That's from a farm. Somebody has drawn a little tomato on the label, with a face." },
          { s: 'astarion', f: 'happy', t: "I'll never open it. I'll keep it on a shelf and tell people it's wine." }
        ] }
      ] }
    ] },
    { n: "Then it was his turn, and he went quiet, and took a small box out of his coat and set it on the tablecloth between them, and didn't push it across. He just left it there, as if it were hers to reach for, or not." },
    { n: "Inside was a pendant on a thin gold chain. A sun. Small and flat, old gold, the tips of its rays worn soft as though it had been carried in a pocket for a very long time." },
    { s: 'astarion', f: 'neutral', t: "An antique shop on the Strip. The old man said it came off a ship, a hundred years ago. I said I'd take it before he finished the sentence." },
    { s: 'astarion', f: 'sad', t: "The sun's the one thing I can't look at. Two hundred years and I've never once been able to look straight at it." },
    { s: 'astarion', f: 'blushing', t: "Except you. Solar. I noticed in the first five minutes. I said it was ironic. It wasn't ironic, darling. It was a warning, and I ignored it, and look at me now." },
    { choose: [
      { t: "Put it on me.", notes: 3, then: [
        { n: "She lifted her hair. He came around the table, and his cold fingers fumbled the clasp twice, which they never did with anything, not daggers, not locks, not the buttons on that ridiculous coat, and on the third try it caught, and he left his hands where they were, on her shoulders, a moment longer than the clasp needed." }
      ] },
      { t: "You can look at me whenever you like.", notes: 3, then: [
        { s: 'astarion', f: 'blushing', t: "...I know. I do. Constantly. It's rather a problem. Everyone in this café has noticed." },
        { n: "Everyone in the café had noticed. The couple at the next table had been noticing for twenty minutes." }
      ] }
    ] },
    { n: "They walked out into the snow at closing. The Strip was all lights, white and gold strung back and forth over the street, and the snow came down through them, and he stopped under the biggest string, outside the antique shop, where couples were taking pictures of each other, and pulled her in by the ends of her scarf." },
    { s: 'astarion', f: 'happy', t: "This is the part, I'm told. Under the lights. I've watched four hundred couples. I know my blocking." },
    { n: "He kissed her under the lights, slowly, snow in his white curls, one hand at the back of her neck over the thin gold chain, and somewhere behind them a stranger's camera went off, a flash, two girls giggling, and he didn't flinch at the light at all." }
  ] },
  romance: true,
  cast: { cazador: 'Cazador', karlach: 'Karlach', akihiko: 'Akihiko' },
  // The camp: Karlach's group chat. It needs Karlach (Astarion rank 7) and the Shadowheart reunion (Shadowheart rank 5),
  // and Karlach fades about a week after she arrives, so both chats stop at Astarion rank 8.
  threads: { camp: { name: 'the camp (tav-less)', members: ['karlach', 'astarion', 'shadowheart'] } },
  texts: [
    { id: 'ast-1a', rank: 1, days: 1, slot: 1, msgs: [
      { from: 'astarion', t: 'Darling. I have discovered that this device can send messages to you at any hour of the night.' },
      { from: 'astarion', t: 'This is the single greatest invention of your miserable little world.' }
    ], reply: [
      { t: 'Please do not text me at 4 a.m.', notes: 2, then: [{ from: 'astarion', t: 'No promises. I am nocturnal, and you are interesting.' }] },
      { t: 'Welcome to the 21st century.', notes: 3, then: [{ from: 'astarion', t: 'Hm. Two hundred years late, but I do love a dramatic entrance.' }] }
    ] },
    { id: 'ast-2a', rank: 2, days: 1, slot: 1, msgs: [
      { from: 'astarion', t: 'I have been standing in front of a shop window for an hour.' },
      { from: 'astarion', t: 'Still nothing. Not even a smudge.' },
      { from: 'astarion', t: 'Tell me again about the cheekbones.' }
    ], reply: [
      { t: 'Unfairly good cheekbones.', notes: 3, then: [{ from: 'astarion', t: 'Yes. Yes, I thought so. Thank you, darling.' }] },
      { t: "You're very vain, you know.", notes: 2, then: [{ from: 'astarion', t: 'I am vain about a face I have not seen in two centuries. Allow me this.' }] }
    ] },
    { id: 'ast-3a', rank: 3, days: 1, slot: 1, msgs: [
      { from: 'astarion', t: 'About last night.' },
      { from: 'astarion', t: 'Thank you for not looking at me like a monster. Whatever you decided.' }
    ], reply: [
      { t: "You're not a monster.", notes: 3, then: [{ from: 'astarion', t: '...That is a very bold claim. I will allow it, for now.' }] },
      { t: "You're a little bit of a monster.", notes: 2, then: [{ from: 'astarion', t: 'Ha! Honest. I like that more than I should.' }] }
    ] },
    { id: 'ast-5a', rank: 5, days: 1, slot: 1, msgs: [
      { from: 'astarion', t: "I'm fine." },
      { from: 'astarion', t: "Don't ask." },
      { from: 'astarion', t: '...Are you awake?' }
    ], reply: [
      { t: "I'm awake. Want me to come over?", notes: 3, then: [{ from: 'astarion', t: 'Yes.' }, { from: 'astarion', t: 'I mean. If it is not too much trouble.' }, { from: 'astarion', t: 'Yes.' }] },
      { t: "I'm here. Talk to me.", notes: 3, then: [{ from: 'astarion', t: 'I do not want to talk. I just wanted to know someone was awake.' }] }
    ] },
    { id: 'ast-7a', rank: 7, days: 1, slot: 1, msgs: [
      { from: 'astarion', t: 'Karlach broke your boxing friend\'s arm-wrestling record. Twice.' },
      { from: 'astarion', t: 'He has asked for a rematch. He will lose. I have money on it.' }
    ], reply: [
      { t: "Don't bet against Akihiko.", notes: 2, then: [{ from: 'astarion', t: 'Darling. She has an engine in her chest. I bet against him with enormous confidence.' }] },
      { t: "You're glad she came through.", notes: 3, then: [{ from: 'astarion', t: '...Don\'t tell her.' }, { from: 'astarion', t: 'Yes.' }] }
    ] },
    { id: 'ast-8a', rank: 8, days: 1, slot: 1, msgs: [
      { from: 'astarion', t: 'I could have had everything. Power. The night itself.' },
      { from: 'astarion', t: 'And I said no because of you. Do you know how irritating that is?' }
    ], reply: [
      { t: "You said no because of you.", notes: 3, then: [{ from: 'astarion', t: '...' }, { from: 'astarion', t: 'Well. Perhaps both.' }] },
      { t: "I'm very proud of you.", notes: 3, then: [{ from: 'astarion', t: 'Stop it. I will cry, and vampires do not cry. Officially.' }] }
    ] },
    { id: 'ast-9r', rank: 9, route: 'romance', days: 1, slot: 1, msgs: [
      { from: 'astarion', t: 'I keep waiting for the part where you want something from me.' },
      { from: 'astarion', t: 'It never comes. It is the most romantic thing that has ever happened to me.' }
    ], reply: [
      { t: 'I just want you.', notes: 3, then: [{ from: 'astarion', t: '...Darling.' }, { from: 'astarion', t: 'That is cheating.' }] },
      { t: 'Get used to it.', notes: 3, then: [{ from: 'astarion', t: 'I intend to. Slowly. Over several centuries.' }] }
    ] },
    { id: 'ast-9f', rank: 9, route: 'friend', days: 1, slot: 1, msgs: [
      { from: 'astarion', t: 'A friend. A real one. Who wants nothing.' },
      { from: 'astarion', t: 'I did not know they came in that variety.' }
    ], reply: [
      { t: 'Limited edition.', notes: 3, then: [{ from: 'astarion', t: 'Then I shall treasure you appropriately. With sarcasm.' }] },
      { t: "You deserve one.", notes: 3, then: [{ from: 'astarion', t: '...Goodnight, darling.' }] }
    ] },
    { id: 'camp-1', thread: 'camp', rank: 7, before: 8, days: 2, slot: 1, unlock: { links: { shadowheart: 5 } }, msgs: [
      { sys: 'Karlach added you to "the camp (tav-less)"' },
      { from: 'karlach', t: 'CAMP!!!!! 🔥🔥🔥' },
      { from: 'karlach', t: 'ok so we dont have a tav anymore but we have SOLAR so it basically counts' },
      { from: 'astarion', t: 'Karlach. Who gave you a phone.' },
      { from: 'karlach', t: 'the fox girl!! this is my third one. the first two kind of melted' },
      { from: 'shadowheart', t: 'Kiriko is going to run out of phones.' },
      { from: 'karlach', t: 'she has a whole BOX of them. she said "for emergencies" and i said "karlach IS an emergency" and she laughed so hard she fell over' },
      { ask: [
        { t: 'Happy to be the new Tav.', notes: 2, then: [
          { from: 'astarion', t: 'Darling, please. Tav once licked a mysterious rock because a voice told them to.' },
          { from: 'shadowheart', t: 'Twice.' },
          { from: 'karlach', t: 'SOLAR WOULD NEVER. solar is SMART' }
        ] },
        { t: 'Karlach please put the phone down before it catches fire', notes: 3, then: [
          { from: 'karlach', t: 'its FINE its only a little warm' },
          { from: 'karlach', t: 'ok its quite warm' },
          { from: 'shadowheart', t: 'Put it in the fountain.' }
        ] },
        { t: 'Who is Tav?', notes: 1, then: [
          { from: 'shadowheart', t: 'Someone who made a great many questionable decisions and dragged us along for all of them.' },
          { from: 'astarion', t: 'Our fearless leader. Emphasis on the less.' }
        ] }
      ] },
      { from: 'astarion', t: 'I would like it on record that I did not consent to this group.' },
      { from: 'karlach', t: 'noted!! ❤️' },
      { sys: 'Astarion renamed the group "please leave me alone"' },
      { sys: 'Karlach renamed the group "the camp (tav-less)"' },
      { from: 'astarion', t: 'Unbelievable.' },
      { from: 'shadowheart', t: "I'm muting this." },
      { from: 'karlach', t: 'you cant mute it, i asked kiriko and she said you dont know how' },
      { from: 'shadowheart', t: '...' },
      { from: 'karlach', t: 'ok REAL QUESTION. solar. which one of us is your favorite' },
      { ask: [
        { t: 'Koromaru.', notes: 3, then: [
          { from: 'shadowheart', t: 'Correct.' },
          { from: 'astarion', t: 'The dog. She picked the dog.' },
          { from: 'karlach', t: 'honestly?? FAIR' }
        ] },
        { t: 'Karlach, obviously.', notes: 2, then: [
          { from: 'karlach', t: 'YESSSS 🔥🔥🔥' },
          { from: 'astarion', t: 'She is lying to spare your feelings.' },
          { from: 'karlach', t: 'shes lying to spare YOURS fangs' }
        ] },
        { t: "I'm not answering that.", notes: 2, then: [
          { from: 'shadowheart', t: 'Wise.' },
          { from: 'astarion', t: 'Cowardly. But wise.' }
        ] }
      ] },
      { from: 'karlach', t: 'next order of business. CAMPFIRE. this weekend. dorm roof' },
      { from: 'shadowheart', t: "You can't light a fire on a roof." },
      { from: 'karlach', t: 'i dont need to light anything. i AM the fire' },
      { from: 'astarion', t: 'She is, unfortunately, correct.' },
      { ask: [
        { t: "I'll bring marshmallows.", notes: 3, then: [
          { from: 'karlach', t: 'MARSHMALLOWS!!! i dont know what they are but i love them already' },
          { from: 'astarion', t: 'Sugar pillows, Karlach. You hold them over the fire until they scream.' },
          { from: 'shadowheart', t: 'They do not scream.' },
          { from: 'astarion', t: 'Mine do.' }
        ] },
        { t: 'Mitsuru-senpai is going to kill us.', notes: 2, then: [
          { from: 'karlach', t: 'the red haired one?? shes SCARY. i love her' },
          { from: 'shadowheart', t: 'It was nice knowing all of you.' }
        ] },
        { t: 'Can Akihiko come?', notes: 1, then: [
          { from: 'karlach', t: 'YES. ROOFTOP REMATCH' },
          { from: 'astarion', t: 'Do not let them arm-wrestle near the edge.' }
        ] }
      ] },
      { from: 'astarion', t: 'Fine. I will attend. For the ambience.' },
      { from: 'karlach', t: 'HE LOVES US' },
      { from: 'astarion', t: 'I am leaving.' },
      { from: 'shadowheart', t: 'Goodnight.' },
      { from: 'karlach', t: 'NIGHT CAMP ❤️🔥' }
    ] },
    { id: 'camp-2', thread: 'camp', rank: 7, before: 8, days: 4, slot: 1, unlock: { links: { shadowheart: 5 } }, rename: 'the camp (tav-less) 🎤🔥', msgs: [
      { from: 'karlach', t: 'GUYS' },
      { from: 'karlach', t: 'GUYS' },
      { from: 'karlach', t: 'there is a place in the mall where you go in a tiny room and SING and nobody stops you' },
      { from: 'astarion', t: "Yes. It's called karaoke. It's a crime against the night." },
      { sys: 'Karlach renamed the group "the camp (tav-less) 🎤🔥"' },
      { from: 'shadowheart', t: 'No.' },
      { from: 'karlach', t: 'i havent even asked yet!!' },
      { from: 'shadowheart', t: 'I know. No.' },
      { from: 'karlach', t: 'solar back me up' },
      { ask: [
        { t: "Karaoke's great. I'm in.", notes: 3, then: [
          { from: 'karlach', t: 'YES!!!! SOLAR 🔥🔥' },
          { from: 'karlach', t: 'thats two. fangs makes three' },
          { from: 'astarion', t: 'Fangs makes nothing. Fangs is busy.' }
        ] },
        { t: "Shadowheart, you'd be good at it.", notes: 2, then: [
          { from: 'shadowheart', t: 'I would not.' },
          { from: 'astarion', t: 'She hums. At the shrine. When she thinks nobody is listening.' },
          { from: 'shadowheart', t: 'How would you possibly know that.' },
          { from: 'astarion', t: 'Excellent hearing. No shame.' }
        ] },
        { t: "Astarion, you'd be good at it.", notes: 2, then: [
          { from: 'astarion', t: "I would be magnificent. That isn't the point." },
          { from: 'karlach', t: 'whats the point' },
          { from: 'astarion', t: 'The point is that the microphones are sticky.' }
        ] }
      ] },
      { from: 'karlach', t: 'ok what songs do people even sing. i only know the one' },
      { from: 'astarion', t: 'Do NOT sing the one.' },
      { from: 'karlach', t: '🎵 OH THE HELLS ARE HOT AND THE ALE IS COLD 🎵' },
      { from: 'astarion', t: "Your boxer friend has been singing that in the lounge for three days, by the way. Solar's entire dorm knows the words." },
      { from: 'karlach', t: 'GOOD' },
      { from: 'karlach', t: 'solar whats a good song. one everybody knows' },
      { ask: [
        { t: 'Something sad and dramatic. Astarion would love it.', notes: 3, then: [
          { from: 'astarion', t: 'I would. I would weep openly. Book the room.' },
          { from: 'karlach', t: 'HE SAID BOOK THE ROOM' },
          { from: 'astarion', t: 'That was a figure of speech.' },
          { from: 'karlach', t: 'TOO LATE' }
        ] },
        { t: 'A duet. Karlach and Shadowheart.', notes: 2, then: [
          { from: 'karlach', t: 'OMG' },
          { from: 'shadowheart', t: 'Solar.' },
          { from: 'shadowheart', t: 'Why would you do this to me.' }
        ] },
        { t: 'Anything, if you scream it loud enough.', notes: 2, then: [
          { from: 'karlach', t: 'MY KIND OF MUSIC 🤘' },
          { from: 'shadowheart', t: 'Gods help the neighbors.' }
        ] }
      ] },
      { from: 'shadowheart', t: 'Fine. I will come. I will sit in the corner. I will not sing.' },
      { from: 'karlach', t: "SHE'S COMING" },
      { from: 'astarion', t: "If she's going, I'm going. Somebody has to witness it." },
      { from: 'karlach', t: 'last thing. solar can you make sure they dont run away at the door' },
      { ask: [
        { t: "I'll hold the door.", notes: 3, then: [
          { from: 'karlach', t: 'MY HERO' },
          { from: 'astarion', t: 'Betrayed. By the one person I trusted.' },
          { from: 'shadowheart', t: 'You trust no one.' },
          { from: 'astarion', t: 'Exactly. And look where it got me.' }
        ] },
        { t: "No promises. They're fast.", notes: 1, then: [
          { from: 'karlach', t: 'then ill carry them' },
          { from: 'shadowheart', t: 'You will not.' },
          { from: 'karlach', t: 'ill carry them GENTLY' }
        ] }
      ] },
      { from: 'karlach', t: 'best camp ever. i love you all so much' },
      { from: 'astarion', t: "Don't." },
      { from: 'karlach', t: 'too late!!! ❤️❤️❤️' },
      { from: 'shadowheart', t: '...Goodnight, Karlach.' }
    ] }
  ],
  ranks: [
    { after: '7/8', title: '1: chagall', place: 'Paulownia Mall · Chagall Café', scene: [
      { n: "Chagall Café after dark was all low light and soft jazz and the smell of espresso and cake, the kind of place couples went to look at each other over tiny cups. Solar was there because Yukari had dragged her there and then left to take a phone call, and she was sitting alone at a window table feeling profoundly out of place." },
      { n: "Someone sat down across from her without asking." },
      { n: "Pale. Very pale, in the way of people who never saw the sun. Silver-white curls. Red eyes. Pointed ears, not hidden at all, like he'd decided that in a world this strange nobody would bother to look twice, and he was right. A burgundy coat with gold embroidery, the kind of thing nobody had worn in two hundred years. He had a glass of something dark red in front of him that she very sincerely hoped was wine." },
      { s: 'astarion', f: 'happy', t: "Well. You're the only interesting thing in this entire establishment, and I've been here three nights." },
      { s: 'astarion', f: 'happy', t: "Astarion. Charmed, I'm sure. And you are?" },
      { choose: [
        { t: "Not interested.", notes: 3, then: [
          { s: 'astarion', f: 'surprised', t: '...' },
          { s: 'astarion', f: 'happy', t: "Ha! Oh, I like you. Nobody's ever said that to my face. They usually wait until I've gone." }
        ] },
        { t: "Solar.", notes: 2, then: [{ s: 'astarion', f: 'happy', t: "Solar. Like the sun. How deliciously ironic, given my... condition." }] },
        { t: "Is that blood?", notes: 3, then: [
          { s: 'astarion', f: 'surprised', t: "...Observant." },
          { s: 'astarion', f: 'happy', t: "Tomato juice, darling. With a little something. You don't want to know the little something." }
        ] }
      ] },
      { n: "He leaned his chin on his hand and smiled at her, slow and bright and practiced, a smile like a door opening in a warm house. It was a very good smile. Solar had seen a lot of very good smiles. She knew exactly what a smile was for when it was that good." },
      { s: 'astarion', f: 'happy', t: "I've just arrived in your charming little city. Fell asleep in a crypt, woke up in the middle of the most delightful green midnight. Everyone frozen. Coffins in the street. I nearly wept with joy." },
      { choose: [
        { t: "That smile's very good. Who's it for?", notes: 3, then: [
          { s: 'astarion', f: 'serious', t: '...' },
          { n: "The smile stayed. Something behind it went very still, like a hand pausing on a doorknob." },
          { s: 'astarion', f: 'neutral', t: "...Everyone. Anyone. It's a tool, darling. Like a knife. You're very rude to notice." }
        ] },
        { t: "You're a vampire.", notes: 2, then: [{ s: 'astarion', f: 'happy', t: "Vampire spawn, technically. There's a hierarchy. I'm on the bottom of it. Or I was." }] }
      ] },
      { n: "Yukari came back from her call and stopped dead at the sight of him. Astarion stood, bowed, kissed her hand, and was gone into the night before she could say a word, coat swinging, like a stage exit." },
      { n: "He left the drink. Solar did not check what was in it." }
    ] },

    { after: '7/20', title: '2: reflection', music: 'tender', place: 'Paulownia Mall · Shop Windows', scene: [
      { n: "He found her again, the way he'd apparently decided he would. It was after nine and the mall was half-closed, shutters down on most of the shops, the lights in the walkways dimmed to a warm, sleepy yellow." },
      { n: "He was standing in front of a clothing store window, very still. The window was lit from inside. The mannequins wore summer dresses. Solar could see herself in the glass, faintly, and the shop behind it, and the walkway behind her." },
      { n: "She could not see him. He was standing right next to her, and the glass showed nothing where he stood. Just the dresses, and the dark." },
      { s: 'astarion', f: 'neutral', t: "Two hundred years." },
      { s: 'astarion', f: 'sad', t: "Two hundred years since I've seen my own face. I don't remember it, you know. Not properly. I remember being handsome. I think." },
      { choose: [
        { t: "You are. Very.", notes: 3, then: [
          { s: 'astarion', f: 'surprised', t: '...' },
          { s: 'astarion', f: 'happy', t: "Well. Yes. Obviously. But tell me how. Specifically. I want details." }
        ] },
        { t: "Do you want me to describe it?", notes: 3, then: [{ s: 'astarion', f: 'sad', t: "...Would you? Nobody's ever offered." }] }
      ] },
      { n: "So she did. Standing in front of the empty glass, in the dim mall, she told him. The curls, white as candle wax, falling over his forehead like they had their own opinions. The cheekbones, unfairly good. The eyes, red, yes, but warm at the corners when he forgot to arrange them. The little crease between his brows when he was pretending not to care about something." },
      { s: 'astarion', f: 'blushing', t: "...A crease. I do not have a crease." },
      { n: "He had a crease. He had it right now. She told him so. He laughed, startled, the real kind, the kind that wasn't a tool, and put his hand over his face like he could hide the crease from her." },
      { s: 'astarion', f: 'happy', t: "You are a menace, darling. An absolute menace." },
      { choose: [
        { t: "You asked for specifics.", notes: 3, then: [{ s: 'astarion', f: 'happy', t: "I did. I will never make that mistake again. I'll think about my crease for a century." }] },
        { t: "It's a nice crease.", notes: 3, then: [{ s: 'astarion', f: 'blushing', t: "...Stop it." }] }
      ] },
      { n: "He walked her to the station. At the gates he stopped and looked at his own reflection in the dark glass of the ticket machine, or the place where it should have been, and said, very quietly, \"Thank you,\" to the empty space, and Solar pretended not to hear." }
    ] },

    { after: '8/3', title: '3: just a taste', place: 'Port Island · Back Streets', scene: [
      { n: "August, and the nights were thick and hot and buzzing. He'd been strange all evening. Shorter tempered. Thinner, somehow. He kept looking at the people walking past them, at their necks, and then looking away like he'd been caught." },
      { n: "In a quiet side street behind the station, under a flickering lamp, he finally stopped." },
      { s: 'astarion', f: 'serious', t: "I need to ask you something, and I need you to know you can say no." },
      { s: 'astarion', f: 'sad', t: "I'm hungry. I've been feeding on rats. Pigeons. Your city has very few deer. I could take what I need from a stranger, but I promised myself I wouldn't. Not here." },
      { s: 'astarion', f: 'neutral', t: "Just a taste. From you. Only if you want. I'll stop the moment you say." },
      { choose: [
        { t: "Okay. Just a taste.", notes: 3, then: [
          { s: 'astarion', f: 'surprised', t: '...Really?' },
          { n: "He was gentle. That was the strangest part. He tilted her chin with one cold finger and was careful about it, slow, like she was something that might break, and it stung for a second and then didn't, and it was over almost before she'd braced herself." },
          { s: 'astarion', f: 'blushing', t: "...Thank you. I... thank you. I didn't think you'd say yes." },
          { n: "He looked shaken. Not by the blood. By being trusted with it." }
        ] },
        { t: "No. But I'll help you find another way.", notes: 3, then: [
          { s: 'astarion', f: 'neutral', t: '...' },
          { s: 'astarion', f: 'happy', t: "No. That's... that's fine. That's completely fine. You'd be amazed how rarely anyone says no to me and means it kindly." },
          { n: "The next night, Solar brought him a cooler from a butcher in Paulownia who did not ask questions. He looked at it like it was a bouquet of flowers." }
        ] }
      ] },
      { s: 'astarion', f: 'sad', t: "Two hundred years, I've never been asked. Or given the chance to ask. My master just... took. And made me take." },
      { n: "He said it so plainly that Solar felt the floor of the night drop out under her, a long cold fall into something she didn't know the bottom of." }
    ] },

    { after: '8/17', title: '4: long nights', music: 'tender', place: 'Port Island · Seaside Park', scene: [
      { n: "He loved the summer nights. He told her so constantly. In his old life, summer meant short nights, a few miserable hours of dark before the sun came back to burn him. Here, in Iwatodai, in August, the nights were long and soft and warm and full of people." },
      { n: "They walked the seaside promenade at midnight, minus the green hour, when the city was still awake and the bay was black and full of the reflections of lights. He bought her an ice cream from a vending machine and watched her eat it with total fascination." },
      { s: 'astarion', f: 'happy', t: "I haven't eaten anything in two hundred years that didn't scream first. Tell me what it tastes like." },
      { choose: [
        { t: "Cold. Sweet. A little like summer.", notes: 3, then: [{ s: 'astarion', f: 'happy', t: "A little like summer. That's absurdly poetic for a frozen confection. I love it." }] },
        { t: "(Hold it out to him.)", notes: 3, then: [
          { s: 'astarion', f: 'surprised', t: "...I can't taste it, darling. It's ash to me." },
          { s: 'astarion', f: 'happy', t: "But I'll take a bite anyway. For the company." },
          { n: "He did. He made a face. He laughed. He kept the stick and twirled it the rest of the walk like a tiny wand." }
        ] }
      ] },
      { s: 'astarion', f: 'neutral', t: "Can I tell you something true? I'm not very practiced at it." },
      { s: 'astarion', f: 'sad', t: "The charm, the smile, the 'darling.' All of it. I learned it to bring people back to my master. To feed him. That was my job. For two hundred years. Seducing strangers into the dark." },
      { s: 'astarion', f: 'sad', t: "So when I'm charming to you, I don't actually know if I mean it. I don't know where the act stops. I've never known." },
      { n: "It was the most honest thing anyone had ever said to her, and he said it to the bay, not to her face. She recognized the act. She'd been running her own, in every new school, for years. She just hadn't known anyone else's went that deep." },
      { choose: [
        { t: "I think this part's real.", notes: 3, then: [
          { s: 'astarion', f: 'surprised', t: '...This part?' },
          { n: "Solar didn't explain. She didn't need to. He looked at her for a long time, and the smile didn't come, and he didn't seem to need it to." }
        ] },
        { t: "Then stop performing. Just with me.", notes: 3, then: [
          { s: 'astarion', f: 'sad', t: "...I don't know how. But I'll try. For you, I'll try." }
        ] }
      ] }
    ] },

    { after: '9/1', title: '5: cazador', place: 'Paulownia Mall · The Dark Hour', scene: [
      { n: "The green hour came, and with it, something that wore a face he knew." },
      { n: "It came out of the dark between the shuttered shops of Paulownia, tall and thin and elegant, in an old-fashioned coat, with hair slicked back and red eyes and a smile like a cut. Solar knew immediately it wasn't real. It was a shadow, wearing a shape. But the shape was exact, and Astarion, beside her, made a sound she had never heard a person make." },
      { register: 'cazador' },
      { s: 'cazador', f: 'happy', t: "My boy. My wayward boy. You've strayed so far from home." },
      { n: "Astarion didn't move. He was standing completely still, the way prey stands, his face gone gray, his hands at his sides like they'd forgotten they were hands." },
      { s: 'astarion', f: 'sad', t: "...Cazador." },
      { choose: [
        { t: "(Step in front of him.)", notes: 3, then: [
          { n: "Solar stepped in front of him. She didn't think about it. She just did it, the way you'd put your hand out to catch something falling, and she stood between Astarion and the thing with his master's face, and she felt him, behind her, breathe in." }
        ] },
        { t: "Astarion. That's not him. Look at me.", notes: 3, then: [
          { n: "He looked at her. It took a long time. His eyes came to her face like a drowning man coming up for air." },
          { s: 'astarion', f: 'serious', t: "...Not him. Right. Not him." }
        ] }
      ] },
      { n: "They fought it together. Him with his daggers, fast and vicious and furious, every cut like a sentence he'd been waiting two centuries to say. When it finally broke apart into smoke and drifted away under the green moon, he stood over the place it had been and was shaking so hard his teeth chattered." },
      { s: 'astarion', f: 'sad', t: "He's not here. I know he's not here. He's a world away." },
      { s: 'astarion', f: 'sad', t: "And I still couldn't move. Two hundred years, darling. He's still in me." },
      { n: "Solar didn't say anything. She took off her jacket and put it around his shoulders, which was absurd, he wasn't cold, he couldn't be cold. He pulled it tight around himself anyway and didn't let go of it for the rest of the night." }
    ] },

    { after: '9/15', title: '6: the scars', place: "Astarion's Room · Business Hotel", scene: [
      { n: "The hotel by the station had a room in his name that nobody had paid for, like all the visitors' rooms. It was small and clean and the curtains were blackout curtains that he'd taped shut at the edges." },
      { n: "He'd asked her to come. He'd been very casual about it, very offhand, and then stood in the middle of the room for a full minute after she arrived with his back to her, not speaking." },
      { s: 'astarion', f: 'neutral', t: "I want to show you something. I've never shown anyone willingly. Don't be kind about it. I can't stand kindness about this." },
      { n: "He took off his shirt. His back was covered in scars. Not random ones. Writing. Thin, precise lines carved deep into the skin, a whole spiral of them from his shoulders to his waist, some kind of script she didn't recognize, old and silvered and terrible." },
      { s: 'astarion', f: 'sad', t: "My master carved them. Over years. Some kind of ritual. I don't know what they say. I've never been able to see them. No mirror, you understand." },
      { choose: [
        { t: "I'm here. You're not alone with this.", notes: 3, then: [
          { s: 'astarion', f: 'sad', t: "...I said don't be kind." },
          { n: "But his shoulders came down, very slowly, like a held weight being set on a floor." }
        ] },
        { t: "Can I see them properly? To tell you what they look like?", notes: 3, then: [
          { s: 'astarion', f: 'surprised', t: '...' },
          { s: 'astarion', f: 'sad', t: "...Yes. Describe them. Like my face. I want to know what he did." },
          { n: "So she told him. Carefully. Every line. He listened with his eyes closed and his fists clenched, and when she was done he let out a breath that sounded two hundred years old." }
        ] }
      ] },
      { s: 'astarion', f: 'neutral', t: "...Thank you. Now I know. Now it's mine to know, and not just his." },
      { n: "He put his shirt back on. He didn't look at her for a while. When he finally did, his eyes were wet, and he was furious about it, and she didn't say a single word, which was exactly right." }
    ] },

    { after: '10/1', title: '7: karlach', place: 'Iwatodai Dorm · Lounge', scene: [
      { n: "Karlach came through at the beginning of October, during the green hour, landing in the middle of Port Island Station like a meteor, literally steaming, and immediately punched a shadow so hard it exploded." },
      { register: 'karlach' },
      { n: "By the next evening she was in the dorm lounge, all red skin and horns and enormous laughing grin, the engine in her chest glowing orange through her shirt, eating an entire pot of rice with a serving spoon." },
      { s: 'karlach', f: 'happy', t: "Fangs! FANGS! You're here! Oh, I knew you'd be somewhere! You always land on your feet, you smug little nightmare!" },
      { s: 'astarion', f: 'serious', t: "Hello, Karlach. Please don't touch me. You're running very hot." },
      { n: "She touched him. She hugged him, hard, lifting him off the ground. He made a sound like an offended cat. He did not, Solar noticed, try very hard to get away." },
      { s: 'karlach', f: 'happy', t: "And you must be Solar! Fangs hasn't shut up about you. Well, he hasn't said anything about you. But he's thought really loudly." },
      { choose: [
        { t: "He thinks about me?", notes: 3, then: [
          { s: 'astarion', f: 'blushing', t: "I do not. Karlach, I will end you." },
          { s: 'karlach', f: 'happy', t: "You absolutely will not, you love me." }
        ] },
        { t: "It's nice to meet you, Karlach.", notes: 2, then: [{ s: 'karlach', f: 'happy', t: "Nice to meet YOU! You've got a good grip. You lift?" }] }
      ] },
      { n: "Akihiko came downstairs, saw Karlach, saw her arms, and immediately challenged her to an arm-wrestling match. She accepted with enormous delight. She won in three seconds. He asked for a rematch. She won in two." },
      { s: 'akihiko', f: 'surprised', t: "...How?" },
      { s: 'karlach', f: 'neutral', t: "Engine in my chest, buddy! Infernal. Runs hot. Very motivating." },
      { n: "Later, when the lounge had quieted down, Solar found Astarion standing by the window watching Karlach teach Akihiko a terrible infernal drinking song. He wasn't smiling. Not on the outside." },
      { s: 'astarion', f: 'neutral', t: "...Don't tell her I'm glad she's here." },
      { choose: [
        { t: "Your secret's safe.", notes: 3, then: [{ s: 'astarion', f: 'happy', t: "Good. My reputation can't take it." }] },
        { t: "She knows, Astarion.", notes: 3, then: [{ s: 'astarion', f: 'blushing', t: "...Yes. She always knew. That's the problem with her." }] }
      ] },
      { n: "Karlach faded a week later, at the edges, like the others. She made Astarion promise to be nice to Solar. He promised. She made him say it louder. He did, eventually, very loudly, in front of the whole dorm." }
    ] },

    { after: '10/20', title: '8: ascension', place: 'Moonlight Bridge · The Dark Hour', scene: [
      { n: "The green hour, on Moonlight Bridge, and something was offering him the world." },
      { n: "It didn't have a shape this time. It was just a voice in the green, warm and deep and patient, speaking from the space between the cables. Solar couldn't hear what it said. She only saw his face as he listened. Hungry. Afraid. Tempted, the way you're tempted by something you've wanted your entire life." },
      { s: 'astarion', f: 'serious', t: "It says it can make me what he was. A master. Not a spawn. The sun wouldn't touch me. Nothing would." },
      { s: 'astarion', f: 'serious', t: "Nobody would ever own me again, darling. Not ever. Do you understand what that means to me?" },
      { n: "She understood. She understood, too, the price. She could see it in the green light pooling around him, the way it was already starting to pull at the edges of him, take something away." },
      { choose: [
        { t: "Nobody owns you now. You already won.", notes: 3, then: [
          { s: 'astarion', f: 'surprised', t: '...' },
          { s: 'astarion', f: 'sad', t: "I... already won." },
          { n: "He said it like a word in a foreign language that he'd just understood the meaning of." }
        ] },
        { t: "It's your choice. Not mine. Not anyone's.", notes: 3, then: [
          { s: 'astarion', f: 'sad', t: "...That's the most frightening thing anyone has ever said to me." },
          { s: 'astarion', f: 'serious', t: "My choice. Mine." }
        ] }
      ] },
      { n: "He said no. Out loud, to the green, to the voice, to two hundred years. No. And the voice went quiet, and the light went back to just being light, and he sat down hard on the bridge pavement like his legs had given out." },
      { s: 'astarion', f: 'sad', t: "I could have had everything." },
      { s: 'astarion', f: 'happy', t: "...And I said no because I wanted to see what you'd say about my crease tomorrow. Isn't that pathetic?" },
      { n: "It wasn't pathetic. She sat down on the cold bridge next to him and told him so, and he laughed, shaky and real, and leaned his head on her shoulder until the green hour ended and the city started breathing again around them." }
    ] },

    { after: '11/12', title: '9: what do you want from me', place: 'Paulownia Mall · Chagall Café', scene: [
      { n: "November. Chagall Café again, the same window table, the same jazz, the same tiny cups. He'd chosen it. He'd said, this is where it started, I'm sentimental, don't tell anyone." },
      { n: "He'd ordered her a slice of the chocolate cake she liked without asking, and then sat across from her watching her eat it like she was the most interesting thing that had ever happened in two hundred years." },
      { s: 'astarion', f: 'neutral', t: "I need to ask you something, and I want an honest answer, because I can always tell when someone is performing. It takes one to know one." },
      { s: 'astarion', f: 'blushing', t: "What do you want from me?" },
      { s: 'astarion', f: 'sad', t: "Everyone wants something. My master wanted blood. Everyone else wanted the smile. So what is it, darling? What's yours?" },
      { route: [
        { t: "I just want you. The real one.", route: 'romance', notes: 3, then: [
          { s: 'astarion', f: 'surprised', t: '...' },
          { s: 'astarion', f: 'blushing', t: "The real one. The one with the crease." },
          { n: "He reached across the table and took her hand, not like a seducer, not like a performance. Clumsily. Like he'd never done it before and was afraid of getting it wrong." },
          { s: 'astarion', f: 'blushing', t: "...Then you can have him. Whatever's left. I think you might be the first person who ever actually wanted that." }
        ] },
        { t: "Nothing. I just like you. As a friend.", route: 'friend', notes: 3, then: [
          { s: 'astarion', f: 'surprised', t: '...Nothing?' },
          { s: 'astarion', f: 'happy', t: "A friend who wants nothing. How utterly bizarre. I didn't know that variety existed." },
          { n: "He laughed, and it cracked in the middle, and he looked away at the window where his reflection wasn't, and laughed again." },
          { s: 'astarion', f: 'happy', t: "Well. I suppose I'll have to keep you, then. Limited edition." }
        ] }
      ] }
    ] },

    { after: '12/5', title: '10: photo booth', place: 'Paulownia Mall · Photo Booth', scene: [
      { n: "December, and Paulownia had gone full winter. Lights strung everywhere. A huge tree in the atrium. A little photo booth by the arcade with a curtain covered in cartoon hearts, the kind high schoolers crammed into on Friday nights." },
      { n: "He'd been staring at it for a week. She'd watched him. Every time they passed it, he'd slow down, and look, and keep walking." },
      { s: 'astarion', f: 'neutral', t: "Darling. Those little machines. They take pictures, yes? Not mirrors. A different sort of magic." },
      { s: 'astarion', f: 'sad', t: "Do you think... would I be in it? In the picture?" },
      { choose: [
        { t: "Let's find out.", notes: 3, then: [{ s: 'astarion', f: 'surprised', t: "...Right now? Oh. Oh, gods. All right." }] },
        { t: "(Pull him into the booth.)", notes: 3, then: [{ s: 'astarion', f: 'surprised', t: "Darling! At least let me fix my hair!" }] }
      ] },
      { n: "They crammed in together on the tiny bench. The screen counted down. He was so nervous his hands were shaking. Three, two, one. The flash went off four times. He didn't smile in the first one. In the second he was looking at her. In the third she'd made him laugh. In the fourth he'd given up on the camera entirely and was just looking at her." },
      { n: "The strip slid out of the slot. Solar picked it up and held it out to him, and he didn't take it. He just looked." },
      { n: "He was in it. All four frames. Silver curls and red eyes and the crease between his brows and a face that he had not seen in two hundred years." },
      { s: 'astarion', f: 'sad', t: "...Oh." },
      { s: 'astarion', f: 'sad', t: "Oh. That's me. That's what I look like." },
      { ifRoute: 'friend', then: [
        { s: 'astarion', f: 'happy', t: "You were right about the crease. Damn you. You were right about all of it." },
        { choose: [
          { t: "Keep it. It's yours.", notes: 3, then: [{ s: 'astarion', f: 'happy', t: "No. We'll take another. One each. I am not leaving this world without a copy of my own cheekbones." }] },
          { t: "You look happy.", notes: 3, then: [{ s: 'astarion', f: 'sad', t: "...I do, don't I. I didn't know I could look like that." }] }
        ] },
        { n: "They took eleven more strips. He kept every single one. When the mall closed, the photo booth was out of paper, and he was still laughing." }
      ] },
      { ifRoute: 'romance', then: [
        { s: 'astarion', f: 'blushing', t: "And that's me, looking at you. Gods, darling. I didn't know I looked at you like that. Everyone must know." },
        { choose: [
          { t: "Everyone knows.", notes: 3, then: [
            { s: 'astarion', f: 'blushing', t: "...Good. Let them." },
            { n: "He kissed her in the photo booth, the curtain half-closed, the hearts swinging, and the machine, which nobody had told to stop, took four more pictures. He kept those too." }
          ] },
          { t: "(Kiss him.)", notes: 3, then: [
            { s: 'astarion', f: 'surprised', t: '...!' },
            { s: 'astarion', f: 'blushing', t: "...Do that again. I want to see what my face does." },
            { n: "They fed the machine every coin they had. He kept every strip." }
          ] }
        ] }
      ] }
    ] }
  ]
});
