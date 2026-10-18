/* Shadowheart · II Priestess. Revamp social link data (femc-game.html). Format: link fields in assets/femc/game/core.js, scene lines in scene.js.
   Visitor (Baldur's Gate 3), third wave (8/6). Evenings at the shrine. Friendship (v1's romance is cut).
   The ending she runs from: Shar, and her parents. Her arc rhymes with Wren's Shadow (the moon, the dark sister who offers
   rest and forgetting), kept to a fair, quiet echo: Selûne and Shar are twins, one light, one dark (rank 4).
   Rank 5 branches on whether Solar has met Astarion. Shadowheart has no 'sad' portrait, so sad beats use neutral/serious.
   Cast-only speakers: none. afterMax: scenes for after rank 10 (engine support pending). */
(window.FEMC_GAME_LINKS ||= []).push({
  id: 'shadowheart', name: 'Shadowheart', short: 'Shadowheart', arcana: 'Priestess', numeral: 'II', from: "Baldur's Gate 3",
  kind: 'visitor',
  romance: null,
  starts: '8/8',
  home: { area: 'shrine', spot: 'Courtyard', slot: 'evening', days: [1, 2, 3, 4, 5],
          hint: 'Evenings on weekdays, at Naganaki Shrine after the light has gone.' },
  approach: "Someone is at the shrine after dark: a dark-haired woman with a silver circlet, standing very still in the courtyard, one hand resting on a weapon and the other around something that hums.",
  cast: {},
  invite: {
    ask: [
      "Are you free? The shrine is quiet tonight.",
      "Come. Bring tea.",
      "I could use the company. Don't make it a thing.",
      "The lanterns are lit. Come up, if you like.",
      "The dog is here. He's asking for you. I'm only passing it on.",
      "The moon's out. I'm told I'm allowed to look at it. Come and make sure."
    ],
    ok: ["Good. Don't be late.", "Fine. I'll make tea. Don't get used to it.", "...Thank you. Courtyard."],
    no: ["Of course. Another night.", "Fine. The dog will be disappointed. Not me.", "Understood. Sleep, Sunshine."]
  },
  hangouts: [
    [
      { n: "The shrine at night, the lanterns lit, the cedars black against a sky the color of a bruise. Shadowheart was sitting on the edge of the offering-hall porch with a pot of tea she'd made on Kiriko's gas ring, which Kiriko had said she could use, and which Shadowheart had used every night since with the air of someone who'd conquered it." },
      { s: 'shadowheart', f: 'neutral', t: "Sit. There's a cup. I made two by mistake. I don't make mistakes, so draw your own conclusions." },
      { choose: [
        { t: "(Sit and drink the tea.)", notes: 3, then: [
          { n: "It was very strong and very bitter and had something floral in it Solar couldn't name, and she drank it all, and Shadowheart watched her drink it out of the corner of her eye with the barest, most grudging satisfaction, and poured her a second without asking." }
        ] },
        { t: "You made it for me.", notes: 2, then: [
          { s: 'shadowheart', f: 'serious', t: "I made it for the cup. The cup was empty. It looked sad." }
        ] },
        { t: "What's in it?", notes: 1, then: [
          { s: 'shadowheart', f: 'neutral', t: "Nothing poisonous. Probably. I'm a cleric, not an alchemist." }
        ] }
      ] },
      { n: "They sat on the porch until the tea was gone and the lanterns had started to gutter, and neither of them said much, and at some point Koromaru came up the steps from wherever he'd been and lay down between them, and Shadowheart put a hand on him without looking and left it there." }
    ],
    [
      { n: "Shadowheart was practicing. She did it every evening at the far end of the courtyard where the gravel was flattest, alone, a mace in one hand and a shield on the other arm, the same forms over and over, slow, precise, like a woman doing her prayers with her whole body." },
      { s: 'shadowheart', f: 'neutral', t: "Don't watch. It's private. ...Fine. Watch. But don't comment." },
      { choose: [
        { t: "(Watch and don't comment.)", notes: 3, then: [
          { n: "Solar watched and didn't comment. When Shadowheart finished, she stood breathing in the lantern light for a moment, then looked over, and Solar was still sitting on the step with her chin on her knees, not commenting, and Shadowheart's mouth did something at one corner that she clearly hadn't authorized." }
        ] },
        { t: "(Copy the forms from the steps.)", notes: 2, then: [
          { n: "Solar copied the forms from the steps, without a mace, with her hand. Badly. Shadowheart stopped halfway through a turn and stared at her." },
          { s: 'shadowheart', f: 'happy', t: "...Your footwork is atrocious. Come here. Stand like this. No. Like THIS." }
        ] }
      ] }
    ]
  ],
  ranks: [
    { after: '8/10', title: '1: night orchid', place: 'Naganaki Shrine · Night', time: 'Evening', scene: [
      { music: 'night' },
      { ifRank: { kiriko: 1 }, then: [
        { n: "Kiriko had texted, a little ominously, at the cost of several minutes and a great deal of muttering: theres a lady at the shrine at night now. she wont tell me her name. shes scary. i think shes sad. pls check" }
      ], else: [
        { n: "People at school had started saying there was a ghost at Naganaki Shrine after dark. A woman in armor who stood in the courtyard without moving and looked at the moon like it owed her money. Junpei had dared Solar to go and look. She hadn't needed daring." }
      ] },
      { n: "The shrine at night was a different place. The lanterns were lit along the path, red and low, and the fox statues looked older in the dark, more serious, as if they'd only been pretending to be decorative in the daytime. The cedars hissed. The air smelled of smoke and wet stone and, faintly, of something sweet and night-blooming that didn't grow on this hill." },
      { n: "She was in the middle of the courtyard. Dark hair pulled back tight, a long braid down over one shoulder. A silver circlet. Armor, real armor, dark and fitted and worn at the joints, and a mace at her hip. She was standing perfectly still, holding something against her chest in both hands, a smooth dark thing like a seed or a stone, and it was humming." },
      { s: 'shadowheart', f: 'serious', t: "Another one. Wonderful. Do you also want to tell me about fortunes and foxes?" },
      { choose: [
        { t: "Someone was worried about you.", notes: 3, then: [
          { s: 'shadowheart', f: 'neutral', t: "...People keep doing that here. Worrying. It's very unsettling." },
          { n: "It was not quite a complaint. It was close to a compliment, delivered by someone who had very clearly not been given many and wasn't sure where to put it." }
        ] },
        { t: "What's that you're holding?", notes: 1, then: [
          { s: 'shadowheart', f: 'serious', t: "None of your business." },
          { n: "Her arms tightened around it. It hummed louder, as if it agreed." }
        ] },
        { t: "(Sit down on the top step. Not too close.)", notes: 3, then: [
          { n: "Solar sat on the top step, a careful distance away, and looked out at the city instead of at the woman. After a long while, the woman's shoulders came down, very slightly, a centimeter, the way a cat's ears come up when it's decided you aren't going to grab it." }
        ] }
      ] },
      { s: 'shadowheart', f: 'neutral', t: "Shadowheart. That's what they call me. Before you ask, yes, it's a real name. No, I won't be telling you any other one. I don't have another one. I've been told I had one. I don't remember it." },
      { register: 'shadowheart' },
      { s: 'shadowheart', f: 'neutral', t: "I woke up in the green, in a street full of coffins, holding this, with no idea how I'd got there. I was on my knees. I'd been on my knees at an altar, praying, and then I was on my knees on a pavement." },
      { s: 'shadowheart', f: 'neutral', t: "A girl found me. Small. In a porter's coat far too big for her. She helped me up, which nobody ever does, I usually get up on my own. And she said, \"There's a shrine up the hill. It's dark there at night. You'll like it.\"" },
      { s: 'shadowheart', f: 'serious', t: "And then she said she was sorry. I asked her for what. She said, \"For the dark.\" And walked off into it. I've been trying to decide all week whether that was a threat." },
      { ifMet: ['wren'], then: [
        { n: "For the dark. Solar thought of a bench at Iwatodai Station and a girl who sat in the dimmest corner of the platform every night as though the light hurt, and her neck went cold, for no reason she could find, and she rubbed it, and it didn't help." }
      ] },
      { n: "A small white dog trotted out from behind the offering box, red eyes, a scar over one of them, and walked straight up to Shadowheart and pressed himself against her armored shin, and leaned, with his whole weight, the way dogs lean on people they've decided about." },
      { s: 'shadowheart', f: 'neutral', t: "Don't look at me like that. Either of you. Dogs are better than people. Everyone knows that. It's the one piece of theology I'm sure of." },
      { choose: [
        { t: "Agreed.", notes: 3, then: [
          { s: 'shadowheart', f: 'happy', t: "...Finally. Someone with sense. I'd begun to think this whole world had been designed by bards." }
        ] },
        { t: "He likes you.", notes: 2, then: [
          { s: 'shadowheart', f: 'neutral', t: "He has poor judgment. It's charming. Don't tell him." }
        ] }
      ] },
      { n: "Solar stayed an hour. They said almost nothing. Shadowheart stood in the courtyard and Solar sat on the step and the dog lay across both of their feet in turn, and the lanterns burned down, and the sweet night smell came and went on the wind." },
      { n: "Shadowheart didn't say goodbye. But when Solar reached the bottom of the steps and looked back up, she was standing at the top of them in the lantern light, watching her go, with the dark thing held against her chest and her other hand raised, just slightly, a few centimeters off her side, as if she'd started to wave and then thought better of it, and hadn't quite put it down." }
    ] },

    { after: '8/24', title: '2: the gap', place: 'Naganaki Shrine · Night', time: 'Evening', scene: [
      { music: 'night' },
      { n: "It was too hot to sleep, and so Solar had started going up to the shrine on weeknights after dinner, when the dorm got loud and her room got small. Shadowheart was always there. She never said she was glad. She'd started bringing two cups." },
      { n: "Tonight she was sitting on the edge of the porch with her boots off and her bare feet in the stone basin by the water spout, which was almost certainly sacrilege, and looking very pleased about it." },
      { s: 'shadowheart', f: 'happy', t: "Sunshine. That's what I'm calling you, by the way. Your name is Solar. I'm a cleric of the dark. It's funny. Don't argue." },
      { choose: [
        { t: "It's a little funny.", notes: 3, then: [
          { s: 'shadowheart', f: 'happy', t: "It's very funny. You just don't have my sense of humor. Nobody does. It's a burden." }
        ] },
        { t: "Cleric of the dark?", notes: 2, then: [
          { s: 'shadowheart', f: 'neutral', t: "Shar. My goddess. Lady of Loss, the Mistress of the Night. You wouldn't like her. Most people don't. That's rather the point of her." }
        ] }
      ] },
      { s: 'shadowheart', f: 'neutral', t: "Do you want to know something absurd? I don't remember most of my life." },
      { s: 'shadowheart', f: 'neutral', t: "My Lady took it. I think. As a gift, or a test, or a punishment, I've never been told which, and I'm not supposed to ask. Loss is holy, you see. Forgetting is holy. She takes what hurts and leaves you smooth." },
      { s: 'shadowheart', f: 'serious', t: "I remember my training. I remember my prayers. I remember the temple. Everything else is a gap. Like a book with the pages torn out. I'll be reaching for a memory and my hand just... closes on air." },
      { n: "Solar knew something about gaps. About smooth places you didn't reach into. About pages that were missing, and the strange tidy edges where they'd been, so neat you could almost believe the book had always been that short. About waking up in a tower with only a first name and a pair of hands that knew things." },
      { choose: [
        { t: "Me too.", notes: 3, then: [
          { s: 'shadowheart', f: 'surprised', t: "...You?" },
          { s: 'solar', f: 'neutral', t: "I woke up in April with nothing. My name. That's all. The rest is gaps." },
          { n: "Shadowheart took her feet out of the basin and turned on the porch and looked at her, really looked, the way a person looks at somebody else in a long queue who has the same rare illness." },
          { s: 'shadowheart', f: 'neutral', t: "Then don't let anyone tell you the smooth is holy, Sunshine. It isn't. It's just smooth." }
        ] },
        { t: "Doesn't that frighten you?", notes: 2, then: [
          { s: 'shadowheart', f: 'serious', t: "Every single day. But I'm not allowed to be frightened. I'm allowed to be faithful. Those are different, and only one of them is permitted." }
        ] },
        { t: "Sometimes I think I'd like to forget things.", notes: 2, then: [
          { s: 'shadowheart', f: 'serious', t: "Don't. Trust me. Even the bad pages are yours. I'd give anything for mine back. Even the ones that would make me cry. Especially those." }
        ] }
      ] },
      { s: 'shadowheart', f: 'neutral', t: "Sometimes I dream about a garden. Flowers that only open at night. White. I don't know where it is. I wake up and the smell's still in the room." },
      { s: 'shadowheart', f: 'neutral', t: "I came here running from something I was supposed to do. Something holy. Something that would have made me everything my Lady wants. And I don't remember why I ran. I only know that when I got to the door, my feet stopped." },
      { n: "She dried her feet on the hem of her cloak and stood up and said goodnight in a voice that didn't invite any more questions, and went inside the shrine office to wherever she slept. But she left the second cup of tea on the porch beside Solar, still warm, and on the way in, without turning around, she said, \"Even the bad pages, Sunshine. Remember that,\" and shut the door." }
    ] },

    { after: '9/7', title: '3: the wound', place: 'Naganaki Shrine · Night', time: 'Evening', scene: [
      { music: 'tender' },
      { n: "September came in on a storm, the first of the season, and Solar went up to the shrine anyway, in a raincoat, worried, because Shadowheart slept in the shrine office and the shrine office roof leaked in three places that Kiriko had marked with buckets." },
      { n: "She found her under the eaves of the offering hall, out of the rain, kneeling on the wet boards with Koromaru in her lap. The dog had cut his paw on something, a broken bottle in the gutter at the bottom of the steps, and was holding it up and looking at it with enormous wounded dignity, and Shadowheart was holding his paw in one hand and the other hand was glowing." },
      { n: "A cold, silvery glow, in her palm, pressed gently over the cut, like moonlight poured into a cup. Solar stopped at the top of the steps in the rain and watched. And then she saw Shadowheart's face twist." },
      { n: "The healing hand jerked back. She clutched it to her chest. Something dark was coming through the bandage wrapped around her palm, spreading, fast." },
      { s: 'shadowheart', f: 'serious', t: "It's fine. It does that. Leave it." },
      { choose: [
        { t: "It is not fine. Let me see.", notes: 3, then: [
          { n: "Shadowheart glared at her. It was a magnificent glare. It had been aimed at much worse than Solar. And then, slowly, she held out her hand." },
          { n: "Solar unwound the bandage. The wound underneath was old, a dark angry mark across the palm that looked like it had never once closed, weeping, and her own hands moved over it before she'd thought about it, pressing the edges, checking, quick and sure, the way they'd moved over an orange in the dorm lounge, the way they apparently knew how to." },
          { s: 'shadowheart', f: 'surprised', t: "...You've done this before." },
          { s: 'solar', f: 'neutral', t: "I don't know." },
          { s: 'shadowheart', f: 'neutral', t: "Your hands do." }
        ] },
        { t: "(Hold Koromaru still so she can finish.)", notes: 2, then: [
          { n: "Solar knelt and held the dog still, and Shadowheart, with her teeth set, pressed the bleeding hand back over his paw and finished, and the glow came and went, and the cut on his paw closed, and the one on her palm opened wider." }
        ] }
      ] },
      { s: 'shadowheart', f: 'neutral', t: "It's a mark. From my Lady. It hurts sometimes. When I'm kind, mostly. When I do something she wouldn't approve of." },
      { s: 'shadowheart', f: 'serious', t: "A punishment. Or a reminder. When I'm too soft. My Lady doesn't approve of softness. She approves of losing things. Holding on is the sin." },
      { n: "Koromaru, healed, licked her face. She didn't push him away. Her hand was still bleeding through the fresh bandage Solar had wrapped, but more slowly now." },
      { s: 'koromaru', t: "Arf!" },
      { choose: [
        { t: "Then your Lady's wrong about you.", notes: 3, then: [
          { s: 'shadowheart', f: 'surprised', t: "...You can't say that." },
          { s: 'shadowheart', f: 'neutral', t: "...But thank you for saying it. Nobody ever has. Not once. Not in my whole life." }
        ] },
        { t: "You healed him anyway.", notes: 3, then: [
          { s: 'shadowheart', f: 'serious', t: "Of course I did. Look at him. What was I supposed to do, let him limp? I'm not a monster. I'm just devout." },
          { n: "She said it so crossly, and so tenderly, with the dog's face in her hands, that Solar had to look away into the rain." }
        ] }
      ] },
      { n: "They sat under the eaves until the storm passed, the three of them, the dog asleep across both their laps. Shadowheart's hand stopped bleeding a little after midnight. Solar knew because she'd been watching the bandage the whole time, the way you watch a pot, and when it stopped she let out a breath she hadn't known she was holding, and Shadowheart heard it, and looked at her, and didn't say anything, and didn't need to." }
    ] },

    { after: '9/21', title: '4: the moon', place: 'Naganaki Shrine · Night', time: 'Evening', scene: [
      { music: 'night' },
      { n: "The moon was getting full again. Everyone at the dorm knew what that meant now, and so did the visitors, all of them, and so did Shadowheart, who had stopped practicing her forms in the courtyard and was standing in the middle of it with her head tilted back, very still, looking up." },
      { s: 'shadowheart', f: 'neutral', t: "...It's beautiful. Isn't it." },
      { n: "She said it softly, almost guiltily, the way you'd admit to something you'd been told your whole life was a sin." },
      { s: 'shadowheart', f: 'neutral', t: "I'm not supposed to love it. My goddess is the dark. The moon belongs to her sister." },
      { s: 'shadowheart', f: 'neutral', t: "They're twins, you know. Shar and Selûne. Born together at the beginning of everything. One light, one dark. One of them wants the world to keep going. The other one wants it to stop. To rest. To forget everything that ever hurt, and lie down in the dark, and never have to get up again." },
      { s: 'shadowheart', f: 'serious', t: "That's how she gets you, my Lady. She never offers pain. She offers rest. She offers to take away the part that has to choose." },
      { n: "Something went down the back of Solar's neck, slow and cold, like a drop of water. She didn't know why. A sun, and a sister in the dark who wanted everyone to rest. A tale a woman in blue had told her in a velvet elevator, in April, about a girl who became the sun and a brother who became the moon. She'd forgotten until now that she remembered it." },
      { s: 'shadowheart', f: 'neutral', t: "But every time it's full, I feel something. Like a door somewhere inside me that I'm not allowed to open. And I stand at it, every month. With my hand on it." },
      { choose: [
        { t: "Maybe you should open it.", notes: 2, then: [
          { s: 'shadowheart', f: 'serious', t: "...You don't understand what you're asking. If I'm wrong, I lose everything. Everything I am. Everything I've believed since before I can remember." },
          { s: 'solar', f: 'neutral', t: "You already don't remember." },
          { s: 'shadowheart', f: 'surprised', t: "..." },
          { s: 'shadowheart', f: 'neutral', t: "...That's either the cruelest or the kindest thing anyone's said to me. I'll decide later." }
        ] },
        { t: "You're allowed to think it's beautiful.", notes: 3, then: [
          { n: "Shadowheart looked at her. Then back up at the moon. And her face did something Solar had never seen it do, something that started at the mouth and went all the way up, a softness, a letting go, like a fist unclenching in sleep." }
        ] },
        { t: "Which one would you rather be? The one who keeps going?", notes: 3, then: [
          { s: 'shadowheart', f: 'neutral', t: "...I was raised to want the dark. I've wanted it my whole life. Rest. Quiet. Nothing to hold." },
          { s: 'shadowheart', f: 'serious', t: "And I've never once been able to stop looking up." }
        ] }
      ] },
      { s: 'shadowheart', f: 'neutral', t: "You have one too, don't you. A sun. I've heard the others talk about it. The thing that comes out of you at midnight. Kiriko says it wears a veil." },
      { s: 'shadowheart', f: 'serious', t: "Be careful, Sunshine. Everyone who's ever been a sun has a sister in the dark. And the sister always sounds very kind." },
      { choose: [
        { t: "I'll be careful.", notes: 2, then: [
          { s: 'shadowheart', f: 'neutral', t: "No, you won't. Nobody is. But you'll remember I said it. That's all a cleric can do." }
        ] },
        { t: "What do I do when she sounds kind?", notes: 3, then: [
          { s: 'shadowheart', f: 'neutral', t: "...I don't know. I've only ever said yes." },
          { s: 'shadowheart', f: 'serious', t: "If you work it out, tell me first." }
        ] }
      ] },
      { n: "They stood in the courtyard and looked at the moon together. After a while Shadowheart's wounded hand found Solar's in the dark between them and held on, tight, not looking." },
      { s: 'shadowheart', f: 'neutral', t: "Don't make anything of that. My hand is cold." },
      { n: "It wasn't cold. Neither of them mentioned it." }
    ] },

    { after: '10/5', title: '5: the camp', place: 'Naganaki Shrine · Night', time: 'Evening', scene: [
      { music: 'night' },
      { n: "Dusk at the shrine was the changing of the guard. Kiriko, sweeping the last of the leaves off the steps on her way home to the office, and Shadowheart, coming up from the city on her way to the courtyard, and the two of them passing on the stairs every evening with a nod that had gone, over two months, from wary to almost fond." },
      { ifMet: ['astarion'], then: [
        { n: "Tonight there was an extra guest. Astarion, in his long burgundy coat, leaning against the torii at the top of the steps with his arms folded, as if he'd been there for hours, which was impossible, since he couldn't have arrived before sunset." },
        { s: 'astarion', f: 'happy', t: "Well, well. The priestess of gloom. Fancy seeing you in a world with less dirt." },
        { s: 'shadowheart', f: 'serious', t: "Astarion. I hoped you'd stay lost." },
        { n: "Kiriko, halfway down the steps with her broom, turned around, sat down on the stairs, and settled in like someone at the theater." },
        { s: 'astarion', f: 'happy', t: "Still dressing like a disappointed crow, I see." },
        { s: 'shadowheart', f: 'happy', t: "Still with the personality of a perfume sample, I see." },
        { choose: [
          { t: "Ooh. Point to Shadowheart.", notes: 3, then: [
            { s: 'astarion', f: 'surprised', t: "Excuse me? Darling, you're supposed to be on MY side." },
            { s: 'shadowheart', f: 'happy', t: "She has taste. Unlike you." }
          ] },
          { t: "Do you two know each other?", notes: 2, then: [
            { s: 'shadowheart', f: 'neutral', t: "Unfortunately. We traveled together. For far too long. Around a fire. With several other disasters." }
          ] }
        ] },
        { n: "It went on for an hour. Hairstyles. Fighting styles. Questionable life choices. A bear, which neither of them would explain. Kiriko laughed so hard she dropped her broom down the steps and had to go after it. And somewhere in the middle of it, Solar noticed that they had both sat down on the top step, side by side, and that neither of them had noticed doing it." },
        { n: "When Astarion finally left, with a flourish of his coat and a parting remark about her boots, Shadowheart stood watching him go down the steps into the dark for a long time." },
        { s: 'shadowheart', f: 'neutral', t: "...Don't tell him I was glad to see him." },
        { s: 'shadowheart', f: 'neutral', t: "We weren't friends. We were a camp. A collection of the condemned around a fire. Every one of us running from something. And every night somebody saved you a seat." }
      ], else: [
        { n: "Tonight Kiriko didn't go home. She sat down on the steps with her broom across her knees and asked Shadowheart, point blank, what her deal was, and Shadowheart, who had been asked that by gods and demons and at least one very persistent dragon, looked down at the shrine girl with an expression of total disbelief." },
        { s: 'kiriko', f: 'happy', t: "Like, you're always here. You're always grumpy. You heal the dog when you think nobody's looking. What's your deal?" },
        { s: 'shadowheart', f: 'serious', t: "I don't have a deal." },
        { s: 'kiriko', f: 'neutral', t: "Everybody has a deal. Mine's a fox." },
        { choose: [
          { t: "She has a camp. Back home.", notes: 3, then: [
            { s: 'shadowheart', f: 'surprised', t: "...How did you know that?" },
            { s: 'solar', f: 'neutral', t: "You talk about a fire sometimes. And who sat where." },
            { s: 'shadowheart', f: 'neutral', t: "...Yes. A camp. A collection of the condemned around a fire. Every one of us running from something. And every night somebody saved you a seat." }
          ] },
          { t: "Her deal is she's nicer than she looks.", notes: 2, then: [
            { s: 'shadowheart', f: 'serious', t: "I am NOT." },
            { s: 'kiriko', f: 'happy', t: "She IS. I've seen her give the dog her dinner." }
          ] }
        ] }
      ] },
      { s: 'shadowheart', f: 'neutral', t: "I was always the one who sat a little apart. On a log at the edge. Watching. Telling myself I didn't need the seat. And there was always a seat." },
      { choose: [
        { t: "There's a seat here too.", notes: 3, then: [
          { s: 'shadowheart', f: 'surprised', t: "..." },
          { s: 'shadowheart', f: 'happy', t: "...On a shrine step. With a fox girl and a sun and a dog. Gods. What a camp." }
        ] },
        { t: "Your secret's safe.", notes: 2, then: [
          { s: 'shadowheart', f: 'neutral', t: "Good. I have a reputation to maintain. For gloom." }
        ] }
      ] }
    ] },

    { after: '10/19', title: '6: her parents', place: 'Naganaki Shrine · Night', time: 'Evening', scene: [
      { music: 'tender' },
      { n: "She'd remembered something. Solar could see it as soon as she reached the top of the steps. Shadowheart was sitting on the porch of the offering hall with her knees drawn up and her arms wrapped around them, which Solar had never seen her do, and her face, in the lantern light, was wet, and she wasn't hiding it, which Solar had never seen either." },
      { s: 'shadowheart', f: 'neutral', t: "My parents. I remembered my parents." },
      { s: 'shadowheart', f: 'neutral', t: "A house. A garden full of white flowers that only opened at night. My mother laughing at something my father said. A big gray dog that slept across the doorway so nobody could come in without stepping over him. My father carrying me on his shoulders so I could smell the flowers." },
      { s: 'shadowheart', f: 'serious', t: "And then the Sharrans came. And took me. And told me they'd abandoned me. That nobody had wanted me. That my Lady was the only one who ever would. And I believed them. I believed them for twenty years." },
      { n: "She said it all at once, fast, like it would leave if she didn't get it out before her goddess noticed." },
      { choose: [
        { t: "(Sit beside her and hold her hand.)", notes: 3, then: [
          { n: "Solar sat beside her and took her hand. The wounded one. Shadowheart held on so hard it hurt, and didn't apologize, and Solar didn't ask her to, and they sat there while the lanterns flickered and the wound in her palm, through the bandage, very slowly, began to weep." }
        ] },
        { t: "They didn't abandon you.", notes: 3, then: [
          { s: 'shadowheart', f: 'neutral', t: "No. They didn't. They were stolen from me. And I was stolen from them. And I spent my whole life serving the ones who did it, and thanking them." },
          { s: 'shadowheart', f: 'serious', t: "And the thing I was running from, back home. The holy thing. The door I couldn't walk through. I think it was them. I think they're still there. Somewhere. Behind it." }
        ] }
      ] },
      { s: 'shadowheart', f: 'neutral', t: "Night orchids. The white flowers. I always loved them. I never knew why. Every time I dreamed of the garden I woke up with the smell in the room and no idea where it came from." },
      { s: 'shadowheart', f: 'neutral', t: "Now I know. It's the smell of somebody carrying me." },
      { n: "Solar thought of her own gaps. Of the smell of salt and diesel that sometimes came on the wind off the bay and made her stop walking. Of cold campus grass. Of floor wax and strawberry gum. Of a man sitting up in the dark. Smells that belonged to somebody carrying her, somewhere, once." },
      { choose: [
        { t: "I'm glad you got them back. Even this much.", notes: 3, then: [
          { s: 'shadowheart', f: 'neutral', t: "...So am I. Even the part that hurts. Especially that part. It means they're mine." },
          { s: 'shadowheart', f: 'happy', t: "You see, Sunshine? Even the bad pages." }
        ] },
        { t: "What will you do?", notes: 2, then: [
          { s: 'shadowheart', f: 'serious', t: "I don't know yet. Something my Lady won't like. That's all I know. That's the first thing I've known for certain in years." }
        ] }
      ] },
      { n: "The next week, Solar found a florist in Paulownia that could order orchids. White ones. The florist didn't have night-blooming, but she had white, and she wrapped it in brown paper. Solar carried it up the hundred and twelve steps in its pot. Shadowheart looked at it for a long time without touching it. Then she put it on the porch of the offering hall where it would get the moon, and watered it every night, and talked to it, Kiriko reported, in a language nobody else on the hill spoke." }
    ] },

    { after: '11/2', title: '7: nightsong', place: 'Naganaki Shrine', time: 'The Dark Hour', scene: [
      { place: 'Naganaki Shrine', time: 'The Dark Hour', bg: 'naganaki-shrine-night' },
      { dark: true },
      { music: 'mystery' },
      { n: "The green hour, and the Shadow that came up the shrine steps wore a woman's face." },
      { n: "Solar had come because Shadowheart had called her, at 11:58, and said only, \"Come. Please,\" which she had never once said. She'd run the whole hundred and twelve steps with the Evoker in her fist and come out into the courtyard and stopped." },
      { n: "Silver-white hair. A glow around her like the moon itself, cold and pale. A sword, and armor, and a gentle, terribly sad expression, like a woman who had been waiting a very long time in a very small room. She was standing in the middle of the courtyard on the raked gravel, not attacking. Just standing. Looking at Shadowheart." },
      { n: "It wasn't real. Solar knew that. It was a Shadow, wearing a face, the way the hour wore things it found in people. But it had found this face in Shadowheart, and it had found it very clearly." },
      { s: 'shadowheart', f: 'serious', t: "...Nightsong." },
      { s: 'shadowheart', f: 'neutral', t: "My Lady wanted me to find her. To kill her. That was my whole mission. Everything I am was built around walking into a dark room and putting a spear through that woman's heart. And now she's here. In a shrine. Where I can." },
      { n: "There was a spear in Shadowheart's hand. Solar had never seen her carry a spear. It was black, and it hummed, the way the dark stone had hummed, and it was shaking." },
      { n: "And Shadowheart's wounded hand was bleeding. Pouring, through the bandage, down her wrist, onto the gravel, like her goddess was screaming at her through it." },
      { choose: [
        { t: "It's your choice. Not your goddess's.", notes: 3, then: [
          { s: 'shadowheart', f: 'surprised', t: "...My choice." },
          { n: "She said it like a word she'd never been allowed to use, holding it in her mouth carefully, like something hot." }
        ] },
        { t: "(Stand beside her. Not in front of her.)", notes: 3, then: [
          { n: "Solar stood beside her. Not in her way. Not making the decision. Not reaching for the spear. Just there, at her shoulder, so that whatever she did, she wouldn't be doing it alone. Shadowheart felt her there. Solar saw her feel it." }
        ] },
        { t: "(Put the Evoker to your temple. Be ready.)", notes: 1, then: [
          { n: "Solar raised the Evoker. Shadowheart's free hand came out, fast, and closed over her wrist, and pushed it down." },
          { s: 'shadowheart', f: 'serious', t: "No. Not you. This one's mine. Whatever I do." }
        ] }
      ] },
      { n: "Shadowheart lowered the spear. Slowly. Like it weighed a thousand years. Like every year of her life was hanging off the point of it." },
      { s: 'shadowheart', f: 'serious', t: "No. I won't." },
      { s: 'shadowheart', f: 'neutral', t: "I won't, my Lady. Do you hear me? I won't. Take the rest of it if you want. Take everything I've got left. I won't." },
      { n: "The Shadow with the moon's face looked at her for a long moment, sad, patient. Then it smiled. And it came apart into light, and smoke, and drifted up out of the courtyard toward the green moon, and was gone." },
      { n: "Shadowheart looked down at her hand. The bleeding had stopped. Completely. All at once. She unwound the bandage with shaking fingers, there in the green, and under it the wound was still there, dark, angry, but closed. For the first time since Solar had known her. Closed." },
      { n: "She sat down hard on the gravel and laughed. And then she wasn't laughing. And Solar sat down beside her and put an arm around her armored shoulders and held on, while the woman who had been raised to want the dark cried, furiously, under a green moon, for everything that had been taken, and for the first thing in her life she had chosen to keep." },
      { choose: [
        { t: "You did it.", notes: 3, then: [
          { s: 'shadowheart', f: 'neutral', t: "I didn't do anything. I didn't do it. That's the whole point." },
          { s: 'shadowheart', f: 'happy', t: "...I didn't do it, Sunshine. I said no to a goddess. Out loud. In a courtyard. With a dog watching." }
        ] },
        { t: "(Just hold on.)", notes: 3, then: [
          { n: "Solar just held on. Koromaru came out from wherever he'd been hiding and lay down across both their legs, and the green went out of the sky all at once, and they were two women sitting on the gravel of an ordinary shrine at midnight, one in armor, one in pajamas, and neither of them moved for a very long time." }
        ] }
      ] }
    ] },

    { after: '11/16', title: '8: unbraided', place: 'Naganaki Shrine · Night', time: 'Evening', scene: [
      { music: 'tender' },
      { n: "Solar almost didn't recognize her." },
      { n: "Shadowheart was standing at the top of the steps in the lantern light with her hair down. Out of its braid. Long and dark and loose over her shoulders, all the way down her back. And there was silver in it. A streak, from the temple, pale as moonlight, that hadn't been there a week ago." },
      { s: 'shadowheart', f: 'serious', t: "...Don't stare. It's rude." },
      { choose: [
        { t: "You look like yourself.", notes: 3, then: [
          { s: 'shadowheart', f: 'neutral', t: "...I don't know who that is yet." },
          { s: 'shadowheart', f: 'happy', t: "But I'd like to find out. I'm told it's done by walking around without a goddess and seeing what you end up doing. It's terrifying. I recommend it." }
        ] },
        { t: "The silver suits you.", notes: 2, then: [
          { s: 'shadowheart', f: 'blushing', t: "It appeared overnight. I think the moon is trying to tell me something. It's very unsubtle. Gods usually are." }
        ] }
      ] },
      { s: 'shadowheart', f: 'neutral', t: "I threw the stone in the river. The dark thing. This morning. I walked to the bridge and dropped it off the side and watched it sink. It hummed all the way down. Like it was disappointed in me." },
      { s: 'shadowheart', f: 'happy', t: "It felt wonderful. I've never done anything that felt so good in my life." },
      { n: "She laughed, and it was a different laugh than Solar had ever heard from her. Light. Surprised. Like a window in a house nobody had opened in years, flung up, and the air coming in." },
      { s: 'shadowheart', f: 'neutral', t: "I don't know what I'm going to be now, Sunshine. Not a Sharran. Maybe not anything. Maybe just a woman with a bad hand and a lot of questions." },
      { s: 'shadowheart', f: 'serious', t: "And when I go home, there's still the door. The one I ran from. I know what's behind it now. Or who. And I'm going to have to walk through it and decide what to do with them. With what's been done to them. And it's going to be the hardest thing I've ever done, and nobody can do it for me." },
      { choose: [
        { t: "You'll do it. You said no to a goddess.", notes: 3, then: [
          { s: 'shadowheart', f: 'neutral', t: "...I did, didn't I. In a courtyard. With a dog watching." },
          { s: 'shadowheart', f: 'happy', t: "After that, a door's nothing. A door's just wood." }
        ] },
        { t: "Can I braid it? Your hair. Just loosely.", notes: 3, then: [
          { s: 'shadowheart', f: 'surprised', t: "..." },
          { s: 'shadowheart', f: 'neutral', t: "...Loosely. Not tight. I'm never wearing it tight again." },
          { n: "So Solar sat on the porch step above her and braided it, loosely, slowly, the silver streak running through the dark like a thread, and her hands knew how, the way they knew everything, and Shadowheart sat very still with her eyes closed and her head tilted back into Solar's hands like a cat in the sun, and neither of them said anything until it was done." }
        ] }
      ] },
      { n: "They sat on the porch with the orchid between them, blooming now, finally, white and strange against the dark wood, and drank tea, and watched the moon, which was waning, a little lopsided, and Shadowheart looked at it the whole time, openly, without guilt, the way you look at somebody you've decided you're allowed to love." }
    ] },

    { after: '11/30', title: '9: sun and moon', place: 'Naganaki Shrine · Night', time: 'Evening', scene: [
      { music: 'tender' },
      { n: "Late November. Cold. The shrine quiet and dark except for one lantern and the moon, which was nearly full again, and white, and so bright that the cedars threw shadows across the gravel as sharp as cut paper." },
      { n: "Shadowheart had brought a blanket and two cups of tea and the orchid, which she now took everywhere she sat for more than ten minutes, and she sat on the top step with the blanket open across her knees, waiting, the way you hold a door." },
      { s: 'shadowheart', f: 'neutral', t: "When the year ends, the green hour goes away, and we all go home. Elizabeth told me. She sat on this step and talked to my orchid for a quarter of an hour first. I liked her enormously." },
      { s: 'shadowheart', f: 'serious', t: "I've spent my whole life not choosing. Letting a goddess choose for me. Letting her take what she liked and calling it holy. I'm not doing that anymore. Not with anything that matters." },
      { s: 'shadowheart', f: 'neutral', t: "So I'm asking. What are we, Sunshine? Sun and moon. What is this? I'd like to know what to call it when I tell the camp. They'll ask. Karlach will ask very loudly." },
      { choose: [
        { t: "My closest friend. In any world.", notes: 3, then: [
          { s: 'shadowheart', f: 'surprised', t: "...A friend. A real one. The kind I don't have to lie to." },
          { s: 'shadowheart', f: 'neutral', t: "I didn't think I'd ever have one of those. I didn't think I was allowed. Thank you, Sunshine." }
        ] },
        { t: "Sisters. The light one and the dark one. Except we like each other.", notes: 3, then: [
          { s: 'shadowheart', f: 'surprised', t: "..." },
          { s: 'shadowheart', f: 'happy', t: "...Oh, that's very good. That's blasphemous and very good. Shar would be livid. Selûne would laugh." },
          { s: 'shadowheart', f: 'neutral', t: "Sisters, then. The kind who don't try to put each other out. I'd like that very much." }
        ] },
        { t: "The person who sat with you while you said no.", notes: 2, then: [
          { s: 'shadowheart', f: 'neutral', t: "...Yes. That's true. That's the truest thing about you, I think. You sit with people while they say no." }
        ] }
      ] },
      { n: "She held the blanket open, and Solar sat down in it beside her on the cold step, and Shadowheart pulled it closed around both of them, and they finished their tea, and watched the moon cross the gap between the cedars, slow, unhurried, the way it had crossed every gap in every sky for as long as there had been anyone to look up." },
      { s: 'shadowheart', f: 'neutral', t: "Do you remember what I said? About the sister in the dark. How she always sounds kind." },
      { s: 'shadowheart', f: 'serious', t: "I still think it. Every time I see you come up these steps at night, tired, looking at nothing. I still think, somebody is offering that girl rest." },
      { choose: [
        { t: "Maybe somebody is.", notes: 3, then: [
          { s: 'shadowheart', f: 'neutral', t: "...Then when she does, Sunshine. When she sounds the kindest. Come up these steps. I'll be here till January. Come up and tell me, and I'll make you tea, and we'll talk about it until it's light." },
          { s: 'shadowheart', f: 'neutral', t: "That's what the moon is for. I've decided. It's for sitting up with people until it's light." }
        ] },
        { t: "I'm all right.", notes: 1, then: [
          { s: 'shadowheart', f: 'serious', t: "Mm. That's what I used to say. Every morning. For twenty years." }
        ] }
      ] }
    ] },

    { after: '12/14', title: '10: under the moon', place: 'Naganaki Shrine · Night', time: 'Evening', scene: [
      { music: 'tender' },
      { n: "December. The moon past full and still enormous, and the shrine covered in a thin layer of new snow, the gravel and the steps and the fox statues in their red bibs and the porch where the orchid sat, blooming, under a glass jar Kiriko had found to keep the cold off it." },
      { n: "Shadowheart was standing in the middle of the courtyard in the snow with her hair down, braided loosely, the silver streak bright in it, and no armor. A dark dress and a cloak and bare hands. She looked smaller without the armor. She looked like someone who'd taken off something heavy and was still getting used to standing up straight." },
      { s: 'shadowheart', f: 'neutral', t: "In my world there's a dance. For the moon. Selûne's people do it on nights like this. In the snow. Under her. I used to watch them from the shadows and hate them for how happy they looked." },
      { s: 'shadowheart', f: 'neutral', t: "I've never danced in my life. I'd like to start. With you." },
      { choose: [
        { t: "I'm a terrible dancer.", notes: 2, then: [
          { s: 'shadowheart', f: 'happy', t: "Perfect. So am I. We'll be terrible together. That's the whole point. That's what Selûne's people get that Shar's never will. You don't have to be good at it. You just have to be there." }
        ] },
        { t: "(Take her hands.)", notes: 3, then: [
          { s: 'shadowheart', f: 'happy', t: "...There. See. You're already better than me. You didn't argue." }
        ] }
      ] },
      { n: "They danced in the snow in the shrine courtyard, badly, laughing, slipping on the gravel under the white, turning in slow circles with their hands linked, Koromaru barking and running rings around them, the moon pouring down over all of it so bright their shadows went round with them on the snow, sharp and black, two of them, always two." },
      { n: "Halfway through, Solar slipped, and Shadowheart caught her, and they both nearly went down, and didn't, and stood there holding each other up in the snow, breathing hard, and Shadowheart was laughing so hard there were tears on her face, freezing, and she didn't wipe them away." },
      { s: 'shadowheart', f: 'neutral', t: "When I go home, I'll dance this every full moon. And I'll think of you, Sunshine. Every single time." },
      { s: 'shadowheart', f: 'neutral', t: "And then I'm going to walk through that door. The one I ran from. I'm going to find my parents behind it, and whatever's been done to them, and I'm going to choose what to do about it myself. Not my Lady. Me. And whatever I choose, it'll be mine. Even if it's the worst page in the book." },
      { s: 'shadowheart', f: 'serious', t: "I spent my whole life in the dark, wanting nothing, keeping nothing. Then I met a girl named after the sun who sat with me while I said no. The gods have a terrible sense of humor." },
      { choose: [
        { t: "Even the bad pages, right?", notes: 3, then: [
          { s: 'shadowheart', f: 'happy', t: "...Even the bad pages. You remembered." },
          { s: 'shadowheart', f: 'neutral', t: "Remember it yourself, Sunshine. When your sister in the dark comes and offers to take them. Say no. Out loud. With a dog watching, if you can find one." }
        ] },
        { t: "(Keep dancing.)", notes: 3, then: [
          { n: "They kept dancing. Slower. The dog lay down in the snow and watched them, panting. The moon went over. And at the end, when the lanterns had gone out one by one, Shadowheart stopped and held both of Solar's hands in her own scarred one and her whole one and looked at her for a long time in the white light." },
          { s: 'shadowheart', f: 'neutral', t: "...Sun and moon. It works, doesn't it. Somehow. Nobody ever told me it could." }
        ] }
      ] },
      { s: 'shadowheart', f: 'neutral', t: "Take the orchid. When I go. It's yours. It'll need someone to talk to it. Tell it about your days. It likes the boring parts best." },
      { n: "The snow kept falling. The moon kept shining. And on the shrine porch, in a glass jar, a white orchid from a florist in a shopping mall bloomed in the dark for a woman who had decided, at last, to keep something, and for the girl who'd sat with her while she decided." }
    ] }
  ],
  afterMax: [
    { title: 'a coin and a clap', place: 'Naganaki Shrine · Night', scene: [
      { music: 'night' },
      { n: "Shadowheart had never prayed at the shrine. Not once, in four months of sleeping in its office. She'd said it would be rude, praying to someone else's gods in their own house, while still technically belonging to a goddess who would take it personally." },
      { n: "Tonight she was standing at the offering box with a ten-yen coin in her hand, looking at it, and at the bell rope, and at Solar." },
      { s: 'shadowheart', f: 'neutral', t: "How does it go. Exactly. I don't want to do it wrong. I've done enough wrong prayers for one life." },
      { choose: [
        { t: "(Show her. Coin, bow twice, clap twice, wish, bow.)", notes: 3, then: [
          { n: "Solar showed her. Shadowheart did it exactly, precisely, with the total concentration of a woman learning a new rite, coin, bell, bow, bow, clap, clap, and then stood with her eyes closed and her palms together for a very long time, longer than anyone Solar had ever seen stand there, and when she opened her eyes they were wet." },
          { s: 'shadowheart', f: 'neutral', t: "...It's very quiet. The god here. Nobody shouted back. Nobody took anything. They just listened." },
          { s: 'shadowheart', f: 'happy', t: "I could get used to a god who just listens." }
        ] },
        { t: "There's no wrong way.", notes: 2, then: [
          { s: 'shadowheart', f: 'serious', t: "There is ALWAYS a wrong way. I was raised by people who specialized in it." }
        ] }
      ] }
    ] },
    { title: 'three strands', place: 'Naganaki Shrine · Night', scene: [
      { music: 'tender' },
      { n: "Shadowheart had decided to learn to braid properly. Other people's hair. She said it was a useful skill for a cleric who wasn't anymore, and that in her world it was what you did for someone you trusted, and that Solar had done hers, and fair was fair." },
      { s: 'shadowheart', f: 'neutral', t: "Sit. Down. Turn around. Don't fuss. Three strands. Over, under. I've watched you do it a hundred times. How hard can it be." },
      { choose: [
        { t: "(Sit still and let her.)", notes: 3, then: [
          { n: "It was very hard, apparently. It took her three tries. On the third she got it, a long loose braid down Solar's back, slightly crooked, and she held the end of it in her fingers for a moment without tying it off, the way you'd hold the end of a rope you'd just finished climbing." },
          { s: 'shadowheart', f: 'happy', t: "...There. It's crooked. It's mine. You'll wear it." }
        ] },
        { t: "Your hands are cold.", notes: 2, then: [
          { s: 'shadowheart', f: 'neutral', t: "They're always cold. Sit still, or I'll braid the dog into it." }
        ] }
      ] }
    ] }
  ]
});
