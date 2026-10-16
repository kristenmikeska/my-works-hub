/* Secrets: strangers. Format in femc-social.js above secrets().
   Kat's crime romance (Incheon, winter 2012). The book runs 11/22 → 1/31, so everything here lands on the same
   calendar days in 2009: the other Solar's winter, bleeding through.
   - Wrong number (+82 32-142-0413: 142 days, the thirteenth of April): Yunjin, texting her Sol, gets this one.
     7 texts, 11/22 → 1/27. She thinks it's a burner, then a ghost, then keeps her anyway. Haechan is only ever
     "the bodyguard" here.
   - +82 10-0606-0307: one text, 1/5 (the "count something" night), only once Haechan's secret link is rank 1+.
   - Moments: 11/23 3:07 knock (laundry room), 12/3 jasmine flower (Auntie Song's warning), 12/14 birthday rice.
   - Place: Dal on the back step, Iwatodai Strip back alley, 11/22 and 11/25 nights only (his first and last nights).
   Quotes are short and from published chapters only. */
FemcSocial.secrets({
  id: 'strangers',
  cast: { 'str-yunjin': 'yunjin', 'str-hc': '+82 10', 'str-dal': '???', 'str-song': '???' },
  threads: {
    'str-yunjin': { name: '+82 32-142-0413', members: ['str-yunjin'] },
    'str-hc': { name: '+82 10-0606-0307', members: ['str-hc'] }
  },

  texts: [
    // 11/22 · the night before the dinner. She thinks it's Sol.
    { id: 'str-wn-1', thread: 'str-yunjin', date: '11/22', window: 2, slot: 1, msgs: [
      { from: 'str-yunjin', t: "ur home??" },
      { from: 'str-yunjin', t: "babe answer me" },
      { from: 'str-yunjin', t: "im literally going to drive over there and climb the wall" },
      { ask: [
        { t: "I'm home. I'm fine.", then: [
          { from: 'str-yunjin', t: "OK WHY ARE U TYPING LIKE A LETTER" },
          { from: 'str-yunjin', t: "capital letters. periods. who did this to u" },
          { from: 'str-yunjin', t: "did ur mom take ur phone. is this ur mom. hello madam" }
        ] },
        { t: "Who is this?", then: [
          { from: 'str-yunjin', t: "ur WIFE???" },
          { from: 'str-yunjin', t: "oh" },
          { from: 'str-yunjin', t: "omg is this the burner. ok. very mysterious. i respect it" }
        ] },
        { t: "I think you have the wrong number.", then: [
          { from: 'str-yunjin', t: "lol ok burner voice" },
          { from: 'str-yunjin', t: "i get it. i'll be normal" },
          { from: 'str-yunjin', t: "(im not being normal)" }
        ] }
      ] },
      { from: 'str-yunjin', t: "whatever it is tomorrow. im here. ill fight them all" }
    ], reply: [
      { t: "Go to sleep.", then: [
        { from: 'str-yunjin', t: "u first" },
        { from: 'str-yunjin', t: "(u wont)" },
        { from: 'str-yunjin', t: "(its low tide)" }
      ] },
      { t: "Fight who?", then: [
        { from: 'str-yunjin', t: "EVERYONE" },
        { from: 'str-yunjin', t: "the pearls. the chignon. whoever's at that dinner" },
        { from: 'str-yunjin', t: "go to sleep sol" }
      ] }
    ] },

    // 11/26 · the morning after Dal.
    { id: 'str-wn-2', thread: 'str-yunjin', date: '11/26', window: 3, msgs: [
      { from: 'str-yunjin', t: "sol" },
      { from: 'str-yunjin', t: "i just heard about dal" },
      { from: 'str-yunjin', t: "babe im so sorry" },
      { from: 'str-yunjin', t: "i know ur not going to answer. ur going to go stand somewhere cold and count things" },
      { ask: [
        { t: "Who's Dal?", then: [
          { from: 'str-yunjin', t: "..." },
          { from: 'str-yunjin', t: "sol thats not funny" },
          { from: 'str-yunjin', t: "unless ur in shock. r u in shock. do i need to come over and put a blanket on u" }
        ] },
        { t: "I'm sorry. Tell me about him.", then: [
          { from: 'str-yunjin', t: "u knew him better than me" },
          { from: 'str-yunjin', t: "he was the big one. the nice one. he always waved at my car like i was a parade" },
          { from: 'str-yunjin', t: "he was the nice one sol" }
        ] },
        { t: "(Don't answer.)", then: [
          { from: 'str-yunjin', t: "ok. dont answer" },
          { from: 'str-yunjin', t: "thats allowed" }
        ] }
      ] },
      { from: 'str-yunjin', t: "im coming to the funeral. ill stand behind u. u dont have to talk" },
      { from: 'str-yunjin', t: "wear a coat. u always forget a coat" }
    ] },

    // 12/4 · the koi. The penny drops.
    { id: 'str-wn-3', thread: 'str-yunjin', date: '12/4', window: 3, rename: 'yunjin 🦋', msgs: [
      { from: 'str-yunjin', t: "ok weird question" },
      { from: 'str-yunjin', t: "do koi need feeding if their owner is in the hospital" },
      { from: 'str-yunjin', t: "like emotionally" },
      { ask: [
        { t: "Feed them. A pinch. He'd want them fed.", then: [
          { from: 'str-yunjin', t: "ok" },
          { from: 'str-yunjin', t: "ok ur right. a pinch" },
          { from: 'str-yunjin', t: "mr and mrs kim thank u" }
        ] },
        { t: "What are their names?", then: [
          { from: 'str-yunjin', t: "mr and mrs kim???" },
          { from: 'str-yunjin', t: "sol ur scaring me" }
        ] }
      ] },
      { from: 'str-yunjin', t: "wait" },
      { from: 'str-yunjin', t: "u used a period. u ALWAYS use periods now" },
      { from: 'str-yunjin', t: "ok prove ur sol. what was i wearing the day u found out about the yang kid" },
      { ask: [
        { t: "I can't. I'm not her.", then: [
          { from: 'str-yunjin', t: "..." },
          { from: 'str-yunjin', t: "ok WHO is this" }
        ] },
        { t: "Something warm?", then: [
          { from: 'str-yunjin', t: "WRONG. highlighter puffer. fake fur earmuffs. sunglasses. iconic" },
          { from: 'str-yunjin', t: "sol would never forget the earmuffs" },
          { from: 'str-yunjin', t: "who is this" }
        ] }
      ] },
      { from: 'str-yunjin', t: "and how do u type exactly like her" }
    ], reply: [
      { t: "My name is Solar. I'm a student. In Japan.", then: [
        { from: 'str-yunjin', t: "shut up" },
        { from: 'str-yunjin', t: "SHUT UP" },
        { from: 'str-yunjin', t: "ur name is solar. SOLAR solar" },
        { from: 'str-yunjin', t: "my dads in the hospital and the universe is doing BITS" },
        { from: 'str-yunjin', t: "..." },
        { from: 'str-yunjin', t: "ok. hi japan sol. im yunjin. im saving u. dont be a murderer" }
      ] },
      { t: "I'm sorry about your dad. My name's Solar.", then: [
        { from: 'str-yunjin', t: "oh" },
        { from: 'str-yunjin', t: "thats nice. nobody says it like that. they all say stable. no change" },
        { from: 'str-yunjin', t: "wait" },
        { from: 'str-yunjin', t: "ur name is SOLAR????" },
        { from: 'str-yunjin', t: "ok. im yunjin. im saving u. this is the most haunted thing thats ever happened to me" }
      ] }
    ] },

    // 12/18 · are u alive. Muscle memory.
    { id: 'str-wn-4', thread: 'str-yunjin', date: '12/18', window: 3, slot: 1, msgs: [
      { from: 'str-yunjin', t: "are u alive" },
      { from: 'str-yunjin', t: "if ur alive send a sticker" },
      { from: 'str-yunjin', t: "if ur dead send two stickers" },
      { from: 'str-yunjin', t: "if the bodyguard is in ur room send a fish" },
      { from: 'str-yunjin', t: "OH" },
      { from: 'str-yunjin', t: "wrong sol. sorry. muscle memory" },
      { from: 'str-yunjin', t: "u can still send one. for practice" }
    ], reply: [
      { t: "(Send one sticker: a white rabbit, bowing.)", then: [
        { from: 'str-yunjin', t: "ok good. love u. lock ur door" },
        { from: 'str-yunjin', t: "wait" },
        { from: 'str-yunjin', t: "why did u pick that one" },
        { from: 'str-yunjin', t: "thats the one she sends. thats HER rabbit. japan sol im getting chills" }
      ] },
      { t: "(Send a fish.)", then: [
        { from: 'str-yunjin', t: "WHY A FISH" },
        { from: 'str-yunjin', t: "japan sol WHO IS IN UR ROOM" },
        { from: 'str-yunjin', t: "...is it a cat. tell me its a cat" },
        { from: 'str-yunjin', t: "lock ur door anyway" }
      ] },
      { t: "(Send two stickers.)", then: [
        { from: 'str-yunjin', t: "NOT FUNNY" },
        { from: 'str-yunjin', t: "...ok a little funny" },
        { from: 'str-yunjin', t: "dont do that to me this month. this month is bad" }
      ] }
    ] },

    // 12/22 · the hospital, the nurse asleep.
    { id: 'str-wn-5', thread: 'str-yunjin', date: '12/22', window: 3, slot: 1, msgs: [
      { from: 'str-yunjin', t: "r u up" },
      { from: 'str-yunjin', t: "they gave me my phone back. the nurse is asleep lol" },
      { from: 'str-yunjin', t: "dont worry im fine. boiler stuff. long story. my head is like the worst hangover of my life x100" },
      { from: 'str-yunjin', t: "i cant text sol rn. shes got enough. she'd come down here in her pajamas and fight a nurse" },
      { from: 'str-yunjin', t: "tell me something normal" },
      { ask: [
        { t: "A boy in my dorm drinks protein that tastes like a lawn.", then: [
          { from: 'str-yunjin', t: "lol" },
          { from: 'str-yunjin', t: "is he cute. dont answer that. answer that" }
        ] },
        { t: "There's a dog here who takes himself for walks.", then: [
          { from: 'str-yunjin', t: "a dog that walks HIMSELF" },
          { from: 'str-yunjin', t: "thats the most normal thing ive ever heard. i love him. tell him" }
        ] },
        { t: "I had ramen tonight. Extra egg.", then: [
          { from: 'str-yunjin', t: "ramen" },
          { from: 'str-yunjin', t: "the food here is rice porridge and sadness" }
        ] }
      ] },
      { from: 'str-yunjin', t: "do u ever get scared at night" }
    ], reply: [
      { t: "Every night. Right around midnight.", then: [
        { from: 'str-yunjin', t: "same" },
        { from: 'str-yunjin', t: "sol cant sleep at low tide. she never could. so i never could either. we just text til it turns" },
        { from: 'str-yunjin', t: "i'll text u til it turns. its turning at 4. i looked it up. dont tell her i look it up" }
      ] },
      { t: "Sometimes. I have people.", then: [
        { from: 'str-yunjin', t: "good" },
        { from: 'str-yunjin', t: "keep them. keep them close. thats the whole trick" },
        { from: 'str-yunjin', t: "nurse is waking up. night japan sol" }
      ] }
    ] },

    // 1/1 · new year. The other Sol asks.
    { id: 'str-wn-6', thread: 'str-yunjin', date: '1/1', window: 3, msgs: [
      { from: 'str-yunjin', t: "happy new year japan sol" },
      { from: 'str-yunjin', t: "i ate rice cake soup so im a year older. im ur elder now. respect me" },
      { from: 'str-yunjin', t: "also" },
      { from: 'str-yunjin', t: "i told sol about u" },
      { from: 'str-yunjin', t: "she went really quiet. her counting face" },
      { from: 'str-yunjin', t: "then she said whats she like" },
      { ask: [
        { t: "What did you tell her?", then: [
          { from: 'str-yunjin', t: "i said u type in full sentences and ur nice to me at 3am" },
          { from: 'str-yunjin', t: "she said good" }
        ] },
        { t: "Is she okay?", then: [
          { from: 'str-yunjin', t: "shes sol. shes never okay. shes always fine" },
          { from: 'str-yunjin', t: "thats her word. fine" }
        ] }
      ] },
      { from: 'str-yunjin', t: "she said tell her to wear a coat" },
      { from: 'str-yunjin', t: "which is SO funny bc she never wears one. its a whole thing" }
    ], reply: [
      { t: "Tell her the same.", then: [
        { from: 'str-yunjin', t: "lol ok" },
        { from: 'str-yunjin', t: "..." },
        { from: 'str-yunjin', t: "she sent a rabbit. bowing" }
      ] },
      { t: "I'm wearing one right now.", then: [
        { from: 'str-yunjin', t: "liar" },
        { from: 'str-yunjin', t: "she says that too" }
      ] }
    ] },

    // 1/27 · nobody. She stays.
    { id: 'str-wn-7', thread: 'str-yunjin', date: '1/27', window: 3, slot: 1, rename: 'yunjin 🦋 (incheon)', stamp: 'spare-sol', msgs: [
      { from: 'str-yunjin', t: "ok so my cousin minjae fixes phones at yongsan" },
      { from: 'str-yunjin', t: "i made him look up ur number with his little magnifying light" },
      { from: 'str-yunjin', t: "he says it doesnt exist" },
      { from: 'str-yunjin', t: "32 is incheon. a landline. and the rest isnt assigned to anybody. its not a phone" },
      { from: 'str-yunjin', t: "he says im texting nobody" },
      { ask: [
        { t: "Hi. It's nobody.", then: [
          { from: 'str-yunjin', t: "lol" },
          { from: 'str-yunjin', t: "hi nobody" }
        ] },
        { t: "Do you want to stop?", then: [
          { from: 'str-yunjin', t: "NO" },
          { from: 'str-yunjin', t: "absolutely not. are u crazy" }
        ] },
        { t: "I'm real. I promise.", then: [
          { from: 'str-yunjin', t: "i know" },
          { from: 'str-yunjin', t: "nobody fake texts back about koi" }
        ] }
      ] },
      { from: 'str-yunjin', t: "ur the only thing in my phone all winter that wasnt bad news" },
      { from: 'str-yunjin', t: "so im keeping u. spare sol" },
      { from: 'str-yunjin', t: "if it stops working one day ill keep texting anyway. like feeding the koi" },
      { ask: [
        { t: "I'll keep answering.", then: [{ from: 'str-yunjin', t: "deal. pinky swear. through the phone" }] },
        { t: "Feed them for me. A pinch.", then: [{ from: 'str-yunjin', t: "...u remembered" }, { from: 'str-yunjin', t: "ok. a pinch" }] }
      ] },
      { from: 'str-yunjin', t: "ok its late" },
      { from: 'str-yunjin', t: "go to sleep japan sol" }
    ], reply: [
      { t: "You first.", then: [
        { from: 'str-yunjin', t: "(i wont)" },
        { from: 'str-yunjin', t: "(its low tide)" }
      ] },
      { t: "Goodnight, Yunjin.", then: [
        { from: 'str-yunjin', t: "night sol" },
        { from: 'str-yunjin', t: "the other one i mean. u. night u" }
      ] }
    ] },

    // 1/5 · SECRET: the "count something" night, from a number that should belong to somebody else's phone.
    { id: 'str-hc-1', thread: 'str-hc', date: '1/5', window: 20, slot: 1, unlock: { links: { haechan: 1 } }, stamp: 'agasshi', msgs: [
      { from: 'str-hc', t: "agasshi" },
      { from: 'str-hc', t: "you up" },
      { ask: [
        { t: "Wrong number.", then: [
          { from: 'str-hc', t: "yeah" },
          { from: 'str-hc', t: "figured. she never answers that fast. she makes me wait" }
        ] },
        { t: "I'm up.", then: [
          { from: 'str-hc', t: "course you are" },
          { from: 'str-hc', t: "low tide where you are too?" }
        ] },
        { t: "Who's agasshi?", then: [
          { from: 'str-hc', t: "nobody" },
          { from: 'str-hc', t: "a girl who forgets her coat" }
        ] }
      ] },
      { from: 'str-hc', t: "cant sleep?" }
    ], reply: [
      { t: "No.", then: [
        { from: 'str-hc', t: "count something" },
        { from: 'str-hc', t: "go to sleep, wrong number. lock your door" }
      ] },
      { t: "What do you do when you can't sleep?", then: [
        { from: 'str-hc', t: "i dont count. shes the one who counts" },
        { from: 'str-hc', t: "go to sleep, wrong number. lock your door" }
      ] }
    ] }
  ],

  moments: [
    // 11/23 · the first night's knock, the laundry room, the stitches that don't happen here.
    { id: 'str-m-knock', date: '11/23', slot: 1, label: 'A strange night', title: '3:07', place: 'Iwatodai Dorm · Laundry Room', music: 'mystery', stamp: 'three-oh-seven', scene: [
      { n: "She couldn't sleep. There was no reason for it. The Dark Hour had come and gone in its green hush and the dorm had gone back to being a dorm, and still she lay on top of the covers with her eyes open, feeling something she had no name for, a slow pulling, a long withdrawal, as if somewhere the sea were going out and taking something of hers with it." },
      { n: "At two fifty-one she got up. She went down the back stairs in her socks, through the dark kitchen, into the laundry room, and stood beside the deep steel sink with her arms folded, and listened. She did not know what for. Her body did." },
      { n: "At seven minutes past three, somebody knocked on the back door." },
      { n: "Two knocks. A pause. One more." },
      { n: "She was already moving. That was the strange part. Her hand was on the bolt before she'd decided anything, and her other arm was tucked against her side, holding a bag she didn't own, the way you reach for a railing on stairs you've climbed a thousand times." },
      { choose: [
        { t: "(Open the door.)", then: [
          { n: "The cold came in like a slap. Salt, and diesel, and the iron smell of a harbor with the water gone out of it. There was nobody on the step. There was nobody in the yard." }
        ] },
        { t: "Who's there?", then: [
          { n: "Nobody answered. The wind did, a little, coming under the door with salt on it. She opened it anyway. There was nobody on the step." }
        ] },
        { t: "Inside. Now. Don't touch the light.", then: [
          { n: "She heard herself say it, low and level, in a voice she had never once used in her life, and then she opened the door on an empty yard and a wind that smelled of diesel and the bottom of the sea." }
        ] }
      ] },
      { n: "In the frost on the step, two shapes had melted clean, side by side. One very big. One leaning on it. As if two men had stood there a long time, waiting for a door to open." },
      { n: "She looked at her hands. They were perfectly steady. They felt like they knew a knot she had never learned. Square. Flat. One, two, three." },
      { ifRank: { haechan: 1 }, then: [
        { n: "On the lid of the dryer, where nobody had been sitting, there was a silver gum wrapper, folded very small. It smelled of cinnamon." },
        { n: "Somewhere very far away, somebody laughed under his breath, the way you laugh when it hurts. She looked down at her socks. They were pink. She had no idea why that felt like the point." }
      ] },
      { n: "She shut the door. She went back up to bed. Around four, somewhere, a tide turned, and she slept as if somebody had finally given her permission." }
    ] },

    // 12/3 · Auntie Song sings Molihua loud, over a door, as a warning.
    { id: 'str-m-jasmine', date: '12/3', slot: 1, label: 'A strange night', title: 'Jasmine flower', place: 'Port Island Station · Back Alley', music: 'mystery', stamp: 'jasmine-flower', scene: [
      { n: "The alley behind Port Island Station was a shortcut she wasn't supposed to take after dark, which was the only reason anyone took it. Halfway down, under a kitchen vent breathing garlic and steam into the cold, somebody was singing." },
      { n: "An old song, in a thin high wavering voice, off-key. Chinese, she thought. She didn't know it. She knew it the way you know a lullaby somebody sang over you before you had words for anything." },
      { n: "Then it got louder. Much louder. Not better. Just louder, deliberate, right over her head, the way you'd sing if you needed somebody on the other side of a door to hear you." },
      { n: "Solar stopped walking." },
      { n: "Around the corner ahead came the click of heels on wet concrete. Unhurried. Light and even. The step of a woman who had never in her life run anywhere. It reached the mouth of the alley and paused there, and Solar stood very still in the shadow of the vent with her heart going, and did not know why." },
      { n: "The heels went on. Past. Away." },
      { n: "Overhead the song stopped. A pot lid clanged. A steel door she hadn't noticed opened a crack, and a woman perhaps five feet tall in rubber boots looked out at her, with a ladle in one hand and forearms like a stevedore's." },
      { s: 'str-song', t: "Xiao yueliang." },
      { n: "Little moon. Solar didn't speak a word of Mandarin. She understood it anyway, the way you understand your own name called across a crowded room." },
      { s: 'str-song', t: "Come here. Taste this. Tell this idiot it has too much chili." },
      { choose: [
        { t: "(Taste it.)", then: [
          { n: "The heat bloomed across her tongue and went straight up into her eyes." },
          { s: 'solar', t: "...It has too much chili." },
          { s: 'str-song', t: "See? Even the princess can tell." }
        ] },
        { t: "Why moon? My name means the sun.", then: [
          { n: "The woman looked at her for a long moment, and laughed, short and dry, and didn't answer. It felt like the answer she had always given." }
        ] },
        { t: "Who was that? In the heels?", then: [
          { s: 'str-song', t: "Nobody you need to meet tonight." },
          { n: "She said it without looking toward the street, the way you'd say it about the weather." }
        ] }
      ] },
      { n: "Then the door shut. When Solar looked again there was only a blank steel wall under the vent, with a noodle shop's delivery schedule taped to it in Japanese, and the smell of jasmine, faintly, where no jasmine was." }
    ] },

    // 12/14 · Yang Seojun's birthday. Somebody makes the rice.
    { id: 'str-m-rice', date: '12/14', slot: 1, label: 'A strange night', title: 'Birthday rice', place: 'Iwatodai Dorm · Kitchen', music: 'tender', stamp: 'birthday-rice', scene: [
      { n: "Somebody was cooking at midnight. Not the Dark Hour kind; after it, when the green had drained out of the windows. She smelled it from the stairs. Kombu and soy and sake, and something seared in a dry pan until the skin blistered." },
      { n: "The kitchen was empty. The light over the stove was on. On the back burner, on a flame turned very low, sat a black clay pot, round and heavy, the kind she'd seen in restaurant windows and never in anybody's house. Nobody in this dorm owned a pot like that. Nobody in this dorm owned a pot that wasn't for instant ramen." },
      { n: "She lifted the lid. Rice, with a square of kombu and whole fillets of sea bream laid over it, skin up, gold. Beside it, a smaller pot of clear soup that smelled of nothing but the sea." },
      { n: "On the table, two bowls. Two pairs of chopsticks. Two small cups, both clean. As if someone had made it for two and then, at the last minute, hadn't been able to sit down." },
      { choose: [
        { t: "(Eat.)", then: [
          { n: "She served herself a bowl and ate it standing up, then sitting down, then slowly. It was the best thing she had ever eaten. She knew it with her whole body." },
          { s: 'solar', t: "...It's terrible." },
          { n: "She had no idea why she said it. It came out like a line she'd been handed. Saying it felt like the kindest thing she had ever said to anyone." }
        ] },
        { t: "Hello? Whose is this?", then: [
          { n: "Nobody answered. The flame ticked under the pot. Somewhere in the walls an old pipe knocked, once, like someone deciding not to come in." }
        ] },
        { t: "(Turn the flame off before it burns.)", then: [
          { n: "She turned it off, the way you would for anyone, and the kitchen went quiet, and the clay lid ticked softly as it cooled." }
        ] }
      ] },
      { n: "Before she went up, she filled the second bowl and set it at the empty place, carefully, the way you'd lay a place for somebody who was late." },
      { n: "In the morning the pot was gone. Both bowls were washed and set upside down on the rack, which nobody in this dorm had done in their lives. On the kitchen calendar, somebody had circled the fourteenth. Nobody would admit to that either." }
    ] }
  ],

  places: [
    // 11/22 and 11/25: Dal's first night on the page, and his last.
    { id: 'str-p-step', area: 'Iwatodai Strip', title: 'A back step that smells of the sea', dates: ['11/22', '11/25'], slot: 1,
      hint: "Behind the strip tonight, a heavy kitchen door is propped open with a fish crate. Somebody's sitting on the step.",
      label: 'Somewhere else', place: 'Iwatodai Strip · Back Alley · A Kitchen Door', music: 'night', stamp: 'six-down', scene: [
      { n: "The alley behind the strip should have ended at the karaoke box's air conditioners. Tonight it kept going, past a stack of wet styrofoam crates and a chain-link fence she had never seen, to a heavy steel door propped open with a fish crate, a wedge of yellow kitchen light, the roar of burners, and a smell of garlic and sesame and brine." },
      { n: "Past the end of the alley, where the river should have been, the water was black. Not dark. Black, the kind that swallowed the lights on the far side and gave nothing back." },
      { n: "On the back step sat a man the size of a refrigerator, in a black padded jacket, with a cup of instant coffee steaming between his knees and a newspaper crossword folded into quarters on his thigh. He was patting his pockets for a pen. The pen was behind his ear." },
      { s: 'str-dal', t: "Agasshi. Eight letters. The thing that's left behind when the water goes out." },
      { choose: [
        { t: "Mudflats.", then: [
          { s: 'str-dal', t: "Plural. Ah." },
          { n: "He wrote it in with the pen he finally found behind his ear, in careful blocky capitals, like a man who'd taught himself the rest after school let him go." },
          { s: 'str-dal', t: "You're good at this. You should do it with me." }
        ] },
        { t: "The pen's behind your ear.", then: [
          { s: 'str-dal', t: "...So it is." },
          { n: "He took it down and looked at it as if it had betrayed him personally." }
        ] },
        { t: "I'm not who you think I am.", then: [
          { s: 'str-dal', t: "Mm. Nobody is, out here." }
        ] }
      ] },
      { n: "He shifted the coffee to his other knee to make room on the step without being asked. She sat. The concrete was cold through her skirt, the wind came straight up off the black water, and she had, she realized, forgotten a coat." },
      { s: 'str-dal', t: "Your hair. Your mother would have a fit." },
      { n: "He looked at her properly then, for the first time. At the ponytail. At the Gekkoukan blazer. Something in his big, kind, tired face went very still." },
      { s: 'str-dal', t: "...You're not her." },
      { s: 'str-dal', t: "You sit like her, though. Like you're watching a dog you know will bite." },
      { choose: [
        { t: "Who is she?", then: [
          { s: 'str-dal', t: "Somebody's daughter. Everybody's, if you ask the old men. Mine, a bit, on this step." }
        ] },
        { t: "Is she okay?", then: [
          { s: 'str-dal', t: "She's fine. That's her word for it." },
          { n: "He said it to the crossword, and the pen moved, and stopped, and wasn't writing anything." }
        ] }
      ] },
      { n: "Behind them the door banged open and somebody shouted a name into the alley. Dal. He heaved himself up with a grunt and handed her his coffee to hold, as if she'd asked for it." },
      { s: 'str-dal', t: "Six down. Four letters. A debt that cannot be repaid. Think about it for me." },
      { choose: [
        { t: "Rent.", then: [
          { s: 'str-dal', t: "Ha. That's English. Somebody else always says that one." }
        ] },
        { t: "Love.", then: [
          { s: 'str-dal', t: "Hm." },
          { s: 'str-dal', t: "That fits, actually." }
        ] },
        { t: "I'll think about it.", then: [
          { s: 'str-dal', t: "Good. She always says no." }
        ] }
      ] },
      { n: "The door swung shut behind him. The coffee was too sweet, the cheap kind from a paper stick. She held it in both hands for the warmth and didn't drink it, and looked at the black water, and thought about it." },
      { n: "When she looked up, the alley ended at the karaoke box's air conditioners, the way it always had. No step. No door. Just a paper cup, still warm, and a smell of the sea that took the whole walk home to fade." }
    ] }
  ]
});
