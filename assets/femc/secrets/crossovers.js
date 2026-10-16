/* Secrets: crossovers. Format in femc-social.js above secrets().
   Secret group scenes: they play by themselves once Solar is close enough to two or more visitors at once
   (unlock.links) and the date has come. Scenes use ifRank so anyone else she's met can drop in.
   Plus one hidden Go Out spot: the Velvet Room's lost property, on two full-moon nights. Stamps and typed codes
   for these live in achievements.js / assets/femc/codes.js. */
FemcSocial.secrets({
  id: 'crossovers',
  cast: { junpei: 'Junpei', yukari: 'Yukari', koromaru: 'Koromaru', elizabeth: 'Elizabeth' },
  threads: {},
  texts: [],
  moments: [

    /* ── Akihiko & Leon: sparring (Mercy drops in) ── */
    { id: 'x-spar', date: '10/24', slot: 0, unlock: { links: { akihiko: 8, leon: 3 } }, music: 'joy',
      label: 'Crossover · Akihiko & Leon', title: 'define kicking', place: 'Gekkoukan High · Boxing Club', stamp: 'define-kicking', scene: [
      { n: "Akihiko had been hitting things since October with a grim, total kind of attention that frightened Solar a little, so when he said he'd found a new sparring partner, she went along to watch. Mostly to make sure the new sparring partner survived." },
      { n: "The new sparring partner was Leon, leaning on the corner post of the ring in a borrowed pair of gloves and the leather jacket, which he declined to take off." },
      { s: 'leon', f: 'neutral', t: "He snuck me in past the pool. Your school's security is the worst I've seen since a castle." },
      { s: 'akihiko', f: 'serious', t: "Gloves up. Three rounds. No kicking." },
      { s: 'leon', f: 'happy', t: "Define kicking." },
      { n: "It was not, strictly, a boxing match. Akihiko boxed. Leon did something else entirely, something learned in alleys and villages and moving vehicles, all elbows and feints and a terrible patience, and for two rounds neither of them landed anything clean and both of them grinned like idiots." },
      { choose: [
        { t: "Akihiko, his left side's open.", notes: 0, then: [
          { s: 'leon', f: 'surprised', t: "Hey. Whose corner are you in?" },
          { s: 'solar', t: "The one with the protein." },
          { n: "Akihiko went for the left side. Leon wasn't there. Leon had, it turned out, been leaving it open on purpose for about four minutes." }
        ] },
        { t: "Leon, he drops his right after a combination.", notes: 0, then: [
          { s: 'akihiko', f: 'surprised', t: "...I do not." },
          { s: 'leon', f: 'happy', t: "You kind of do, champ." }
        ] },
        { t: "(Keep time and say nothing.)", notes: 0, then: [
          { n: "She kept time on her phone and said nothing, which, she had learned this year, was its own kind of corner." }
        ] }
      ] },
      { n: "In the third round Akihiko caught him with a clean left hook, and Leon went down on one knee, and came back up, and in one smooth, frankly unfair motion got behind him and lifted him off the mat." },
      { s: 'akihiko', f: 'surprised', t: "Wait, wait, wait..." },
      { n: "The suplex shook the whole gym. Somewhere behind the lockers a mop bucket fell over in sympathy." },
      { n: "Akihiko lay flat on his back, staring up at the lights, a cut opening over one eyebrow. And then he started laughing, the big, helpless, startled laugh Solar hadn't heard out of him in weeks, and couldn't stop." },
      { s: 'akihiko', f: 'happy', t: "That's not boxing!" },
      { s: 'leon', f: 'happy', t: "I asked you to define kicking. You didn't say a word about suplexes." },
      { ifRank: { mercy: 5 }, then: [
        { n: "The gym door opened. Solar had texted one person, just one, out of an abundance of caution, and that person was standing in the doorway in a white coat with a staff in one hand and an expression of profound medical disappointment." },
        { s: 'mercy', f: 'serious', t: "I was told there would be a sparring match. Not a professional wrestling event." },
        { s: 'akihiko', f: 'happy', t: "Can that thing make it heal faster? I've got practice tomorrow." },
        { s: 'mercy', f: 'neutral', t: "It can. I will not be using it on an injury you acquired for fun. Hold still." },
        { n: "She did it the old way, antiseptic and a butterfly strip, while Leon held the ice pack and tried very hard to look like a man who had not just suplexed a high school student. Angela looked at him over her glasses. She did not wear glasses. It worked anyway." }
      ], else: [
        { n: "Solar dug out the first-aid kit Akihiko restocked every Monday with the devotion other people gave to houseplants, and sat on the edge of the ring taping a butterfly strip over his eyebrow while he kept laughing at the ceiling, and Leon held the ice pack and tried very hard to look like a man who had not just suplexed a high school student." }
      ] },
      { s: 'leon', f: 'neutral', t: "He hits like a guy with something to prove." },
      { s: 'leon', f: 'sad', t: "...I used to hit like that. You get bigger around it. Takes a while." },
      { n: "Akihiko, still flat on the mat, held one gloved fist up without looking. Leon bumped it with his. Neither of them said anything else, which was, Solar was beginning to understand, how men like them said almost everything." },
      { s: 'akihiko', f: 'happy', t: "Same time next week. And you're teaching me that throw." }
    ] },

    /* ── Cloud, Noctis & Leon: the lost & found, in person ── */
    { id: 'x-pier', date: '10/11', slot: 0, unlock: { links: { cloud: 5, noctis: 5, leon: 3 } }, music: 'sun',
      label: 'Crossover · Cloud, Noctis & Leon', title: 'no hurry', place: 'Port Island · Pier', stamp: 'no-hurry', scene: [
      { n: "Cloud called it a meeting. He was very clear that it was not a social meeting. He said so twice, in the voice of a man setting a perimeter, and then he showed up at the end of the Port Island pier with four canned coffees in a plastic bag, which was the most social thing Solar had ever seen him do." },
      { n: "Noctis was already there, asleep against his post with a rod between his knees. Leon came last, in the jacket, looking at the water the way he looked at every doorway, like it might have opinions about him." },
      { s: 'leon', f: 'neutral', t: "So this is the famous pier." },
      { s: 'noctis', f: 'neutral', t: "...Famous? Who's saying it's famous." },
      { s: 'cloud', f: 'neutral', t: "You. Constantly." },
      { n: "Noctis handed Leon the spare rod without asking, the way he had once handed it to her. Leon held it like a weapon somebody had built wrong." },
      { choose: [
        { t: "Leon, have you ever fished?", notes: 0, then: [
          { s: 'leon', f: 'neutral', t: "Once. A lake in Spain. Something with a lot of teeth tried to eat the boat." },
          { s: 'leon', f: 'neutral', t: "I used harpoons. Does that count?" },
          { s: 'noctis', f: 'surprised', t: "...That's the coolest fishing story I've ever heard, and I hate it." }
        ] },
        { t: "Noctis, teach him.", notes: 0, then: [
          { s: 'noctis', f: 'happy', t: "Okay. Step one. Sit down. Step two. Wait." },
          { s: 'leon', f: 'neutral', t: "And step three?" },
          { s: 'noctis', f: 'neutral', t: "Keep waiting. That's the whole thing." },
          { s: 'leon', f: 'happy', t: "...I've done stakeouts. I can do this." }
        ] }
      ] },
      { n: "Cloud caught something in four minutes. He always did. He looked at the fish, and then at Noctis, with no expression at all, and put it back in the water, which was somehow the rudest thing anyone could have done." },
      { s: 'noctis', f: 'serious', t: "Every time. Every single time." },
      { ifRank: { leon: 4 }, then: [
        { s: 'leon', f: 'neutral', t: "There's a guy behind Port Island Station who'd sell you a better rod. Glowing eyes. Don't ask him how he got here." },
        { s: 'cloud', f: 'serious', t: "...Does he take gil?" },
        { s: 'leon', f: 'neutral', t: "He takes everything." }
      ] },
      { n: "They didn't talk much after that. Three men from three different worlds and a girl from this one, in a row at the end of a pier, the gulls going over, the monorail sliding silver across the bay behind them. It was the quietest Solar had ever seen any of them. Not the hiding kind of quiet. The other kind." },
      { s: 'cloud', f: 'neutral', t: "Information. Anybody find a way home?" },
      { s: 'leon', f: 'neutral', t: "Negative." },
      { s: 'noctis', f: 'sad', t: "...No. Still not in a hurry." },
      { n: "Nobody pushed him on it. Leon, who had been pushed on things his whole life, let it go first." },
      { choose: [
        { t: "Then you're stuck with me. All three of you.", notes: 0, then: [
          { s: 'leon', f: 'happy', t: "Copy that." },
          { s: 'cloud', f: 'neutral', t: "...Yeah." },
          { s: 'noctis', f: 'happy', t: "You're buying the coffee next time, though." }
        ] },
        { t: "What would you miss? From here. If you found it.", notes: 0, then: [
          { s: 'noctis', f: 'neutral', t: "This pier." },
          { s: 'leon', f: 'neutral', t: "Kurosawa's terrible tea." },
          { s: 'cloud', f: 'neutral', t: "..." },
          { n: "Cloud didn't answer. He looked at her instead, for one second, and then back at the water, and that was an answer, and the other two pretended very hard not to have seen it." }
        ] }
      ] },
      { n: "Leon caught a fish at four in the afternoon, after six hours, a small silver thing barely longer than his hand. He held it up to the light." },
      { s: 'leon', f: 'happy', t: "...Bingo." },
      { n: "Noctis applauded, slowly, from the bottom of his heart. Cloud took a picture of it on his phone and sent it to Solar that night with no caption at all, which she understood to mean he'd had a good day." }
    ] },

    /* ── Kuromi & Aphrodite: a makeover nobody asked for ── */
    { id: 'x-makeover', date: '8/29', slot: 0, unlock: { links: { kuromi: 5, aphrodite: 3 } }, music: 'joy',
      label: 'Crossover · Kuromi & Aphrodite', title: 'danger, adore me', place: 'Paulownia Mall · Shop Windows', stamp: 'danger-adore-me', scene: [
      { n: "It started, the way most disasters in Solar's life now started, with two people from other worlds agreeing about something." },
      { n: "Kuromi had come to the mall for eyeliner. Aphrodite had come to the mall because it was a day of the week. They met at the cosmetics counter reaching for the same pink lipstick, and looked at each other the way two cats look at each other across one sunny windowsill." },
      { s: 'aphrodite', f: 'serious', t: "That shade is mine, little thundercloud. I am the goddess of it." },
      { s: 'kuromi', f: 'serious', t: "Pink is MINE. Ask anyone. I have a skull in it." },
      { n: "Then they both turned, slowly, at exactly the same time, and looked at Solar." },
      { n: "Solar was wearing her school uniform, her headphones, and the specific expression of a person who had only come in for shampoo." },
      { s: 'aphrodite', f: 'surprised', t: "...Oh, little sun. Oh, no." },
      { s: 'kuromi', f: 'happy', t: "Truce. Temporary. We have a bigger enemy." },
      { choose: [
        { t: "I don't need a makeover.", notes: 0, then: [
          { s: 'aphrodite', f: 'happy', t: "Need? Darling, nobody needs one. That's what makes it divine." },
          { s: 'kuromi', f: 'serious', t: "Your resistance is noted. And ignored." }
        ] },
        { t: "Fine. One hour.", notes: 0, then: [
          { s: 'kuromi', f: 'surprised', t: "...She ACCEPTED. Why does she always ACCEPT." },
          { s: 'aphrodite', f: 'happy', t: "Because she has manners. Sit, little sun. Close your eyes." }
        ] }
      ] },
      { n: "It took three hours. Aphrodite wanted gold, and glow, and something she called a blush like you've just been told a secret. Kuromi wanted a wing of eyeliner sharp enough to cut a rival, and a tiny skull hidden somewhere nobody would notice until it was too late. They argued about every single step, at volume, while the shop assistants stood in an awed half-circle like people watching weather." },
      { s: 'kuromi', f: 'serious', t: "Her eyes need to say DANGER." },
      { s: 'aphrodite', f: 'serious', t: "Her eyes need to say ADORE ME." },
      { s: 'kuromi', f: 'neutral', t: "...Okay, what if they say both." },
      { s: 'aphrodite', f: 'surprised', t: "...Oh. Oh, you're good." },
      { n: "When they finally let her look, Solar didn't recognize herself for a second, and then she did, which was worse. It was her face. It was just her face with the volume turned up. The wings were perfect. The gold caught the light. And right at the edge of her jaw, so small she had to lean in to find it, was a little pink skull." },
      { choose: [
        { t: "...I look like trouble.", notes: 0, then: [
          { s: 'kuromi', f: 'happy', t: "YES. That's the WHOLE POINT." },
          { s: 'aphrodite', f: 'happy', t: "Trouble that people would follow anywhere. My best work. Our best work." },
          { s: 'kuromi', f: 'flustered', t: "...Ours. Okay. Fine. Ours." }
        ] },
        { t: "(Take a picture of all three of you.)", notes: 0, then: [
          { n: "She held the phone up. Aphrodite found her light without looking for it. Kuromi made a face like she was about to bite the camera, and then, at the very last second, smiled." }
        ] }
      ] },
      { ifRank: { akihiko: 5 }, then: [
        { n: "On the way out they passed Akihiko, coming back from a run, who looked at Solar, kept running, and went directly into the edge of the fountain." },
        { s: 'aphrodite', f: 'happy', t: "Ah. There it is. The only review that matters." }
      ] },
      { n: "At the station gates Aphrodite kissed Kuromi on the forehead before Kuromi could stop her. Kuromi went pink all the way up to her hat and swore revenge, and the goddess laughed and said she would look forward to it, and Solar went home with gold on her cheekbones and a skull on her jaw and the strong feeling that she had just watched the beginning of something terrible and wonderful." }
    ] },

    /* ── Astarion & Widowmaker: two predators, one bridge ── */
    { id: 'x-bridge', date: '11/1', slot: 1, unlock: { links: { astarion: 8, widowmaker: 3 } }, music: 'night',
      label: 'Crossover · Astarion & Widowmaker', title: 'cold blooded', place: 'Moonlight Bridge', stamp: 'cold-blooded', scene: [
      { n: "Astarion had heard there was a woman on Moonlight Bridge who watched the whole city through a rifle scope, and he had taken this, predictably, as a personal challenge." },
      { s: 'astarion', f: 'happy', t: "Darling, there can only be one gorgeous, terrifying creature of the night in this city, and I've been here since July." },
      { n: "He walked out onto the bridge in his long coat like he was arriving at a ball. Solar walked behind him like she was arriving at a car accident." },
      { n: "Widowmaker was on the railing. She did not turn around. She had known they were coming, Solar suspected, since they left Paulownia." },
      { s: 'widowmaker', f: 'neutral', t: "Petite. You have brought me a dead man." },
      { s: 'astarion', f: 'serious', t: "Undead. There's a difference, and I'll thank you to respect it." },
      { n: "They circled each other. There was no other word for it. Astarion strolled a slow loop around the lamppost, and Widowmaker turned on the railing to follow him without seeming to move at all. Two predators who had each just realized the other one was not food." },
      { s: 'widowmaker', f: 'serious', t: "Your heart does not beat." },
      { s: 'astarion', f: 'happy', t: "And yours barely bothers. What are you, darling, a clock someone forgot to wind?" },
      { s: 'widowmaker', f: 'neutral', t: "And you do not show in my scope. Only the coat. It is very ugly, the coat, on its own." },
      { s: 'astarion', f: 'surprised', t: "...I beg your pardon?" },
      { choose: [
        { t: "Point to Widowmaker.", notes: 0, then: [
          { s: 'astarion', f: 'serious', t: "Excuse me? Whose side are you ON?" },
          { s: 'widowmaker', f: 'happy', t: "Hers, I think. Like everyone." }
        ] },
        { t: "You two are exactly the same, you know.", notes: 0, then: [
          { s: 'widowmaker', f: 'serious', t: "We are not." },
          { s: 'astarion', f: 'serious', t: "We are absolutely not." },
          { n: "They said it at the same time, in the same tone, and then looked at each other, appalled." }
        ] }
      ] },
      { n: "After that it got quieter. The wind came up off the bay, cold enough that Solar pulled her sleeves down over her hands. Neither of them felt it. She watched them both notice that about each other." },
      { s: 'astarion', f: 'neutral', t: "Someone made you like this." },
      { s: 'widowmaker', f: 'neutral', t: "Someone made you like that." },
      { n: "It wasn't a question either time. For a long moment they just looked at each other across the lamplight, a sniper and a vampire, two people who had been sharpened by someone else's hands into something useful and had stopped, at some point, being able to tell the blade from themselves." },
      { s: 'astarion', f: 'sad', t: "...Mine is a world away. I said no to him. To all of it. It turns out you're allowed to." },
      { s: 'widowmaker', f: 'sad', t: "Hm. Mine are not a world away." },
      { s: 'widowmaker', f: 'neutral', t: "But I will remember that you said it. Allowed." },
      { n: "Then she was a sniper again, all at once, eyes back on the city, and she nodded once at Solar, which on Widowmaker was practically an embrace." },
      { s: 'widowmaker', f: 'happy', t: "Take your dead man home, petite. He is cold." },
      { s: 'astarion', f: 'happy', t: "I'm always cold. It's part of my charm." },
      { n: "On the walk back he was silent for nearly a whole block, which was a record. Then he told the sidewalk that she had excellent posture and an appalling personality and he would very much like to see her again, and asked Solar not to repeat any of that, and Solar, who had been asked that exact thing by nearly everyone she knew this year, said of course." }
    ] },

    /* ── Kiriko blesses the dorm: fortunes for everyone in the lounge ── */
    { id: 'x-fortunes', date: '8/24', slot: 1, unlock: { links: { kiriko: 7, kuromi: 4 } }, music: 'joy',
      label: 'Crossover · Kiriko & Kuromi', title: 'the hundred and first stick', place: 'Iwatodai Dorm · Lounge', stamp: 'hundred-and-first', scene: [
      { n: "Kiriko had decided, after the festival, that the dorm was under-blessed. She said it the way a doctor would say under-hydrated, and one evening she turned up at the front door with her fortune box under one arm and a bag of taiyaki under the other, and nobody had the heart to tell her that was not how shrines worked." },
      { s: 'kiriko', f: 'happy', t: "Okay! Everybody gets one. That's the rule. I just made it up, but it's the rule." },
      { n: "Junpei went first, because Junpei always went first." },
      { s: 'kiriko', f: 'surprised', t: "Oh. Oh, no. Kyo. Bad luck." },
      { s: 'junpei', f: 'flustered', t: "WHAT? Draw again! That one doesn't count, I wasn't ready!" },
      { s: 'kiriko', f: 'serious', t: "\"Something you are proud of will be drawn on.\" ...Huh. Weirdly specific." },
      { n: "From the couch, without looking up from her manga, Kuromi uncapped a marker." },
      { s: 'kuromi', f: 'happy', t: "The shrine has SPOKEN." },
      { s: 'kiriko', f: 'happy', t: "Your turn, skull girl." },
      { s: 'kuromi', f: 'serious', t: "I don't believe in fortunes. Give it." },
      { s: 'kiriko', f: 'neutral', t: "Chu-kichi. \"Your rival is closer than you think, and nicer than you would like.\"" },
      { s: 'kuromi', f: 'flustered', t: "...That's SLANDER. Which rival. I have SEVERAL." },
      { n: "She looked, for one split second, at Solar. Then at the ceiling, hard." },
      { n: "Yukari drew a small blessing that said patience would be rewarded, announced it was the most boring fortune she had ever heard, and tucked it into her phone case very carefully when she thought nobody was looking. Koromaru got a great blessing, obviously. Kiriko read it to him with enormous ceremony, something about a long walk and a very good stick, and he sat up straight to listen like a dog receiving a medal." },
      { ifRank: { akihiko: 1 }, then: [
        { n: "Akihiko came in from a run halfway through, drew a blessing that said rest is also training, informed the shrine that it didn't know what it was talking about, sat down on the couch, and was asleep in four minutes." }
      ] },
      { ifRank: { sebastian: 3 }, then: [
        { n: "Sebastian, who had come over for game night and been told it was fortune night now, read his in silence and turned it face down on the table." },
        { s: 'sebastian', f: 'neutral', t: "It says I'm going to have to talk to people. I'm choosing not to believe it." }
      ] },
      { s: 'kiriko', f: 'happy', t: "And Sol-chan. Last. Best for last." },
      { n: "The stick that slid out of the box had no number on it. Kiriko turned it over twice. Then she tipped the box out onto the coffee table and counted, out loud, all the way up, and looked at Solar." },
      { s: 'kiriko', f: 'serious', t: "...There are a hundred sticks in this box. I just counted a hundred. And you're holding one." },
      { choose: [
        { t: "Read it anyway.", notes: 0, then: [
          { s: 'kiriko', f: 'neutral', t: "\"Somewhere in another city, someone is saying this name at the same moment you are.\"" },
          { s: 'kiriko', f: 'surprised', t: "...It doesn't say which name." }
        ] },
        { t: "Maybe it's for the other me.", notes: 0, then: [
          { s: 'kiriko', f: 'happy', t: "Yeah. Yeah, I bet it is. She's probably got a whole collection by now." },
          { s: 'kiriko', f: 'neutral', t: "\"The one who finds you is never early and never late.\" ...I'm giving it to you anyway. You can mail it to her." }
        ] }
      ] },
      { ifRank: { haechan: 1 }, then: [
        { n: "Down the hall, the washing machine in the laundry room thumped once, the way it did at the start of a spin, though nobody had put anything in it." }
      ] },
      { n: "Kiriko left at ten with an empty taiyaki bag and a full heart, and the lounge smelled like red bean and permanent marker for two days. Junpei didn't find the drawing on his forearm until the next morning. It was a tiny, very detailed skull, wearing fox ears." }
    ] },

    /* ── Sebastian runs a one-shot for two people from an actual fantasy world ── */
    { id: 'x-oneshot', date: '10/18', slot: 1, unlock: { links: { sebastian: 6, astarion: 7, shadowheart: 5 } }, music: 'joy',
      label: 'Crossover · Sebastian, Astarion & Shadowheart', title: 'cleric of the frog', place: 'Iwatodai Dorm · Lounge', stamp: 'cleric-of-the-frog', scene: [
      { n: "Sebastian had run a lot of games. He had run them in a basement in Pelican Town for the same friends for years, and in this lounge once for a goblin named Junpei, and he had never once, he told Solar in a low and urgent voice by the fridge, run a game for two people from an actual fantasy world." },
      { s: 'sebastian', f: 'flustered', t: "The vampire asked me what level the dragon is. Like he's fought one. Has he fought one?" },
      { s: 'solar', t: "Probably. Don't ask him which." },
      { n: "Astarion had claimed the armchair like a throne. Shadowheart sat at the far end of the couch with her arms folded, having come, she said, under protest, because Solar had asked her nicely, which was also true." },
      { s: 'sebastian', f: 'neutral', t: "Okay. Pick a class." },
      { s: 'astarion', f: 'happy', t: "Paladin. Shining armor, a holy oath, an enormous amount of sunlight. Write it down." },
      { s: 'sebastian', f: 'surprised', t: "...You're a vampire." },
      { s: 'astarion', f: 'happy', t: "Which is why they call it fantasy, darling." },
      { s: 'shadowheart', f: 'neutral', t: "And I'll be anything that isn't a cleric. A bard. Something with no gods in it." },
      { s: 'sebastian', f: 'neutral', t: "...There's a frog god. He's mostly harmless." },
      { s: 'shadowheart', f: 'happy', t: "Fine. I'll take the frog." },
      { s: 'junpei', f: 'happy', t: "Can I be a goblin again?" },
      { s: 'sebastian', f: 'neutral', t: "You never stopped." },
      { ifRank: { kuromi: 1 }, then: [
        { n: "Kuromi, passing through with a pudding, demanded to be the villain, was told the villain was already a dragon, and became the dragon's evil manager, which Sebastian allowed because he was afraid of her." }
      ] },
      { n: "It went the way good games go, which is to say completely off the rails within twenty minutes. Paladin Astarion seduced a castle guard, a shopkeeper and a locked door, the last of which Sebastian ruled impossible and Astarion appealed for ten minutes. Shadowheart, Cleric of the Frog, healed everyone with an air of deep reluctance and refused to explain why her character was so good at it." },
      { n: "Then came the roll that mattered. Solarion on the bridge, the dragon overhead, everything on a single throw." },
      { s: 'sebastian', f: 'serious', t: "Roll." },
      { choose: [
        { t: "(Roll.)", notes: 0, then: [
          { n: "The die clattered across the coffee table, past the chips and Astarion's untouched tomato juice, and stopped. One." },
          { s: 'astarion', f: 'surprised', t: "Oh, no." },
          { s: 'shadowheart', f: 'serious', t: "Oh, gods. Not again." },
          { n: "They said it with the bone-deep horror of two people who had watched a great many important things come down to one ugly number." },
          { s: 'sebastian', f: 'happy', t: "...Solarion falls off the bridge. And the dragon catches her. It's been waiting three sessions for a reason to." }
        ] },
        { t: "Shadowheart, bless me first.", notes: 0, then: [
          { s: 'shadowheart', f: 'happy', t: "...By the frog. Go on, Sunshine." },
          { n: "The die clattered across the coffee table and stopped on twenty. Shadowheart looked smug for the rest of the night, claimed no responsibility, and took all the credit." }
        ] }
      ] },
      { s: 'shadowheart', f: 'neutral', t: "Do you ever get the feeling, Astarion, that someone somewhere has been rolling dice for us our whole lives?" },
      { s: 'astarion', f: 'serious', t: "Every single day, darling. Every single day." },
      { n: "Sebastian looked at the two of them for a long time, the way he looked at a bug he couldn't track down. Then he wrote something in his notebook and turned it so only Solar could see." },
      { n: "It said: my players are realer than my characters. best session I've ever run. don't tell them." }
    ] },

    /* ── Rio & Kasumi: two athletes, one gym ── */
    { id: 'x-gym', date: '9/19', slot: 0, unlock: { links: { rio: 5, kasumi: 2 } }, music: 'school',
      label: 'Crossover · Rio & Kasumi', title: 'half and half', place: 'Gekkoukan High · Gym', stamp: 'half-and-half', scene: [
      { ifRank: { rio: 9 }, then: [
        { n: "Rio had been cleared to jump again and was taking it extremely seriously, and had booked the gym today by walking in and putting her bag down in the middle of the floor." }
      ], else: [
        { ifRank: { rio: 7 }, then: [
          { n: "Rio was still in the ankle brace and not allowed to jump, and was in the gym anyway, because, she said, nobody had told her she couldn't sit in it." }
        ], else: [
          { n: "Rio had come to the gym on a day that wasn't hers, because her coach had moved practice and nobody had thought to tell the gymnastics girl." }
        ] }
      ] },
      { n: "On the mats at the far end, Kasumi was running her routine, the ribbon going up in long red loops. At the near end, Rio had a ball under her arm and her jaw set. Both of them believed, with their whole hearts, that the gym was theirs today." },
      { s: 'rio', f: 'serious', t: "The gym's booked. Volleyball. Tuesdays, Thursdays, Saturdays, and whenever I'm in it." },
      { s: 'kasumi', f: 'surprised', t: "Oh! I'm so sorry! But I thought today was mine? Senpai, is today mine?" },
      { choose: [
        { t: "It's hers today, Rio.", notes: 0, then: [
          { s: 'rio', f: 'serious', t: "...Don't take her side. She has a ribbon. That's not a side, that's a decoration." }
        ] },
        { t: "Split it. Half and half.", notes: 0, then: [
          { s: 'rio', f: 'neutral', t: "Fine. Half. My half has the good light." },
          { s: 'kasumi', f: 'happy', t: "Then my half has the good mats!" }
        ] }
      ] },
      { n: "They lasted about ten minutes on separate halves, pretending not to watch each other. Then a stray ball rolled onto the mats, and Kasumi, mid-turn, trapped it under one foot, flicked it up with the other and caught it on the back of her neck without breaking the routine." },
      { s: 'rio', f: 'surprised', t: "...Do that again." },
      { n: "She did it again. Rio came to the edge of the mats, ball forgotten, the way she came to the net when a first-year did something she hadn't taught them yet." },
      { s: 'rio', f: 'neutral', t: "Your landing. On the turn. You come down early on the left, every time. Like you're counting for somebody else." },
      { ifRank: { kasumi: 7 }, then: [
        { s: 'kasumi', f: 'sad', t: "...I know. I'm learning my own count now. It's slower than hers." },
        { s: 'rio', f: 'neutral', t: "Slower's fine. Slower's how you don't tear something. Trust me." }
      ], else: [
        { s: 'kasumi', f: 'surprised', t: "...How did you see that? Nobody sees that." },
        { n: "Something crossed her face, quick, like a bird across a window. Solar filed it away in the place where she kept things she meant to come back to." },
        { s: 'rio', f: 'serious', t: "I watch feet. It's the whole job." }
      ] },
      { s: 'kasumi', f: 'happy', t: "Then can I watch yours? You hit like you're angry at the ball." },
      { s: 'rio', f: 'serious', t: "I'm always angry at the ball." },
      { s: 'kasumi', f: 'happy', t: "Akihiko-senpai says that about the heavy bag!" },
      { s: 'rio', f: 'flustered', t: "...Sanada? Great. Wonderful. I'm a type now." },
      { n: "By the end of the afternoon the halves had stopped existing. Rio was calling Kasumi's count from the edge of the mat, sharp and loud, and Kasumi was landing on it, every time, and every time she landed she looked over at Rio like a kid checking the stands." },
      { s: 'kasumi', f: 'happy', t: "Same time next week, Rio-senpai? Please?" },
      { s: 'rio', f: 'flustered', t: "...Fine. But I'm not calling you anything nice." },
      { n: "She called her Ribbon all the way to the school gate. Kasumi beamed at it like a medal. Solar walked behind them carrying both their water bottles, the only person in the gym who had not been allowed a half, and found she didn't mind at all." }
    ] },

    /* ── Rohan & Saori: the book club gets a third member ── */
    { id: 'x-bookworms', date: '10/18', slot: 0, unlock: { links: { saori: 6, rohan: 3 } }, music: 'school',
      label: 'Crossover · Rohan & Saori', title: 'chapter nine', place: 'Iwatodai Strip · Bookworms', stamp: 'chapter-nine', scene: [
      { n: "The book club had two members and a strict schedule, and today it had a third, uninvited, who pulled a chair up to the end of their table without asking and set down a copy of A Year of Small Weather like a gauntlet." },
      { s: 'rohan', f: 'serious', t: "I read your book. I have notes." },
      { s: 'saori', f: 'surprised', t: "...My book? It isn't my book. It's Ozaki's. I only..." },
      { s: 'rohan', f: 'neutral', t: "The old man at the counter says you're the only other person in this ward who ever asked for it. That makes it yours. Chapter six. She stops writing for a month because she's afraid he's actually reading them. Obviously." },
      { n: "Saori went very still. Then she looked at Solar, as if to check that this was really happening, and something lit up behind her face like a lamp coming on in a window." },
      { s: 'saori', f: 'happy', t: "Yes. Exactly. Thank you. But you're wrong about chapter nine." },
      { s: 'rohan', f: 'serious', t: "...I'm sorry?" },
      { s: 'saori', f: 'serious', t: "You're wrong about chapter nine. Very politely. But you're wrong." },
      { n: "They argued for two hours. The wife behind the counter brought three cups of tea without being asked and then a fourth, for herself, and sat down to listen. Rohan was rude, and fast, and wrong about the lighthouse keeper. Saori was quiet, and slow, and right, and never once raised her voice, and it was, Solar thought, like watching someone fence with a cup of tea and win." },
      { s: 'rohan', f: 'neutral', t: "I'd like to read you. Properly. I'm asking because I've been told I'm supposed to ask." },
      { n: "He meant it literally. Solar knew he meant it literally. Saori, who did not know there was any other way to mean it, thought about it seriously, the way she thought about everything." },
      { s: 'saori', f: 'neutral', t: "No, thank you." },
      { s: 'saori', f: 'flustered', t: "I'm sorry. It's only... I'd rather you read something I wrote. Someday. When it's finished. Not me." },
      { choose: [
        { t: "You write?", notes: 0, then: [
          { s: 'saori', f: 'flustered', t: "...A little. In a notebook. It's mostly weather." },
          { s: 'rohan', f: 'happy', t: "Mostly weather. That's the best thing anyone has said in this shop all year." }
        ] },
        { t: "(Watch Rohan's face.)", notes: 0, then: [
          { n: "Rohan's face did something Solar had never seen it do. It went completely quiet, the way a page does when you stop turning it." }
        ] }
      ] },
      { s: 'rohan', f: 'happy', t: "...Good. That's the right answer. Almost nobody gives the right answer." },
      { s: 'rohan', f: 'serious', t: "People say yes because they're flattered, or no because they're frightened. You said no because you have something better. That's the only good reason to refuse anyone anything." },
      { n: "He drew for the rest of the afternoon while they went back to chapter nine, and when the shop closed he left the drawing on the table. Not of Saori, this time. Of the book, open between the teacups, and a chair at the end of the table pulled out and empty, as if someone else might still be coming." },
      { s: 'saori', f: 'happy', t: "...He's very rude." },
      { s: 'solar', t: "He's the worst." },
      { s: 'saori', f: 'happy', t: "Can he come next Sunday?" }
    ] }
  ],

  places: [
    /* ── The Velvet Room's lost property: a blue door on the strip, two full-moon nights ── */
    { id: 'x-velvet-door', area: 'Iwatodai Strip', title: 'A blue door', label: 'The Velvet Room', dates: ['9/5', '11/3'], slot: 1,
      hint: "A blue door between Bookworms and the ramen shop. It wasn't there this morning.",
      place: 'The Velvet Room', theme: 'velvet', music: 'velvet', stamp: 'lost-property', scene: [
      { n: "The door was blue. Not painted blue. Blue the way the inside of a closed eye is blue, set into the wall between Bookworms and Hagakure, where that morning there had been a drainpipe and a vending machine." },
      { n: "It opened before she touched it. The elevator hummed, climbing. Elizabeth was standing in the middle of the Velvet Room behind a cardboard box, and she looked, for the first time since Solar had known her, very slightly harried." },
      { s: 'elizabeth', f: 'happy', t: "Solar. Wonderful. You have come on precisely the right night. I require an assistant with hands." },
      { s: 'elizabeth', f: 'neutral', t: "When our guests fall through the hour, small things fall with them. Things from their pockets. They land here, and I keep them. I confess the box has become unruly." },
      { s: 'elizabeth', f: 'happy', t: "So we shall play a game. I hold something up. You tell me whose it is." },
      { n: "The first thing was a fishing lure, a little silver fish with a hook in its mouth, beautifully made and slightly chewed." },
      { ifRank: { noctis: 1 }, then: [
        { s: 'solar', t: "Noctis. He's been looking for that for weeks. He accused a gull." },
        { s: 'elizabeth', f: 'happy', t: "A sleepy prince. I suspected as much. It smells of sunscreen and naps." }
      ], else: [
        { n: "Solar had no idea. Elizabeth set it aside for, she said, someone who sleeps more than is strictly necessary." }
      ] },
      { n: "The second was a small green plant in a clay pot, three leaves on it, absurdly healthy, practically glowing." },
      { ifRank: { leon: 1 }, then: [
        { s: 'solar', t: "That's Leon's. He'll say it's for emergencies. It's for emergencies." },
        { s: 'elizabeth', f: 'neutral', t: "It is a remarkably determined plant. Yesterday it healed a pencil." }
      ], else: [
        { s: 'elizabeth', f: 'neutral', t: "No? Pity. It is a remarkably determined plant. Yesterday it healed a pencil." }
      ] },
      { n: "The third was a hairpin shaped like a pink skull, which Elizabeth held out at arm's length, pinched between two gloved fingers." },
      { ifRank: { kuromi: 1 }, then: [
        { s: 'solar', t: "Kuromi. Don't let her know you touched it." },
        { s: 'elizabeth', f: 'serious', t: "I am afraid it is too late for that. It bit me." }
      ], else: [
        { s: 'elizabeth', f: 'serious', t: "You don't know? Then I shall keep it in a drawer, and not look at it directly. It bit me." }
      ] },
      { n: "There was one thing left at the bottom of the box. Elizabeth took it out more carefully than the others and laid it in Solar's palm." },
      { n: "A ring of keys. None of them looked like they opened anything in Iwatodai. They hung from a little enamel charm, chipped at one edge, shaped like a sun." },
      { s: 'elizabeth', f: 'neutral', t: "This one fell on no one's night. There was no guest with it. I have looked." },
      { s: 'elizabeth', f: 'sad', t: "I believe it belongs to you. Or to one of you. I could not tell you which, and I am not certain the keys could either." },
      { choose: [
        { t: "(Keep it.)", notes: 0, then: [
          { n: "She closed her hand around it. The keys were warm, the way keys get when they have spent all day in someone's pocket, walking around a city she had never seen." },
          { s: 'elizabeth', f: 'happy', t: "Then it has been claimed. How satisfying. I do so like an empty box." }
        ] },
        { t: "Leave it here. In case she comes looking.", notes: 0, then: [
          { s: 'elizabeth', f: 'happy', t: "How thoughtful. I shall put it on the shelf by the door, where people who are lost can see it on their way in." },
          { n: "She hung it on a hook Solar had never noticed before, beside the elevator door. It swung there a moment, catching the blue, a small sun in a room with no sky." }
        ] }
      ] },
      { s: 'elizabeth', f: 'neutral', t: "Thank you, Solar. Kindly do not mention to my master that I let a guest sort the lost property." },
      { n: "The numbers above the door ran backwards. When it opened she was standing on the Iwatodai strip in the full-moon dark, between Bookworms and Hagakure, in front of a drainpipe and a vending machine, and the vending machine, for no reason at all, dropped a can of something blue into its tray." }
    ] }
  ]
});
