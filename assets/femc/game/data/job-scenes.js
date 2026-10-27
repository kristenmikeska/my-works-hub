/* Part-time job shift scenes. Keys match job ids in assets/femc/game/data/jobs.js.
   shifts: three short rotating vignettes per job (one choice each; options carry no notes, only optional { stat }: which of
           the five social stats fits what Solar did, e.g. helping someone is Kindness, handling the work well is Proficiency).
   beats: one-time scenes that play on shift number `at` once `after` (M/D) and `met` (link ids) hold.
          A beat may end with { fragment: id }. lean: 'R' | 'S' | 'H' (recorded by the engine, never shown).
   cast: display names for speakers who have no link file of their own. */
window.FEMC_GAME_JOB_SCENES = {

  /* ── Bookworms (Iwatodai Strip) ── */
  bookworms: {
    cast: { bunkichi: 'Bunkichi', mitsuko: 'Mitsuko', boy: 'Middle-schooler' },
    shifts: [
      [
        { place: 'Iwatodai Strip · Bookworms' },
        { n: "Bookworms smelled the way every used bookstore in the world smelled, of paper going soft at the corners and old glue and tea left to go cold on the counter, and on her first afternoon Mitsuko handed her a feather duster with the gravity of someone passing down the family sword." },
        { s: 'mitsuko', t: "Top shelves first, dear. Dust falls down. It has never once had the manners to fall up." },
        { n: "The top shelves were history, which felt about right, since nobody had touched them since roughly the Meiji Restoration. She went along them on the stepladder a spine at a time, wiping and straightening and sliding the wanderers back to where the little handwritten cards said they belonged, until somewhere around the Edo period she hit a whole row of paperbacks in no order whatsoever." },
        { s: 'bunkichi', t: "Ah. That would be me. I was looking for something in there." },
        { s: 'bunkichi', t: "I don't remember what. It'll come back to me. It usually does, around dinner." },
        { choose: [
          { t: "(Put them back in order, shogun by shogun.)", then: [
            { n: "It took the rest of the afternoon and a pencil she borrowed off the counter, and by the end of it she could have recited the whole Tokugawa line without looking, which was more than a month of history class had managed, and she felt very smug about it for someone covered in that much dust." },
            { stat: { knowledge: 1 } }
          ] },
          { t: "Do you want help finding it?", then: [
            { s: 'bunkichi', t: "That's kind of you. But if I find it today, what will I look for tomorrow?" },
            { n: "From the register Mitsuko made a small noise, half sigh and half forty-odd years of marriage, and Solar laughed before she could decide whether she was allowed to." },
            { stat: { kindness: 1 } }
          ] }
        ] },
        { n: "When she climbed down, the light through the front window had gone long and gold and lay across the floorboards in a stripe, dust turning slowly in it like something underwater, and her hands were gray to the wrist." },
        { n: "It was, she decided, the most honest kind of dirty there was." }
      ],
      [
        { place: 'Iwatodai Strip · Bookworms' },
        { n: "It rained all afternoon, the soft kind that didn't bother falling so much as hanging around, and nobody came in, so Mitsuko put the kettle on and Bunkichi stood at the front window with his hands clasped behind his back, watching the strip go gray and shiny, while Solar priced a box of paperbacks with a stub of pencil." },
        { s: 'bunkichi', t: "You're at Gekkoukan, aren't you? Tell me. Is the persimmon tree still standing?" },
        { n: "She knew the one. Knobbly, leaning a little to one side like it was listening for something, out where nobody went unless they were skipping class, the kind of tree you walked past a hundred times before you ever actually saw it." },
        { choose: [
          { t: "It's still there. It looked healthy this morning.", then: [
            { s: 'bunkichi', t: "Good. Good, good." },
            { s: 'mitsuko', t: "He asks everyone in that uniform. Every single one." },
            { s: 'bunkichi', t: "And every single one tells me the same thing, and I like hearing it every time. Is that a crime now?" },
            { stat: { kindness: 1 } }
          ] },
          { t: "(Ask why it matters so much.)", then: [
            { s: 'mitsuko', t: "Our son planted it. When he taught there. A long time ago now." },
            { n: "She said it lightly, the way you'd mention a street you used to live on, and went back to her tea, and Bunkichi kept looking at the rain, and Solar wrote a price on the next book very carefully, like it mattered that she got the number exactly right." }
          ] }
        ] },
        { s: 'bunkichi', t: "It'll fruit this year. I can feel it in my knees. My knees are never wrong about persimmons." },
        { s: 'mitsuko', t: "Your knees are wrong about everything, dear." },
        { n: "On the way to the station she took the long way, past the school and around the back, with her umbrella tipped up so she could see. She told herself it was to check on the tree. It was." }
      ],
      [
        { place: 'Iwatodai Strip · Bookworms' },
        { n: "A middle-school boy came in a little before closing, damp from the drizzle and clutching his wallet in both hands, and asked in the voice of a man facing a firing squad whether they had anything for the high school entrance exams that cost less than five hundred yen." },
        { n: "They had exactly one. It was older than he was, possibly older than his parents, the cover gone soft as cloth, and somebody had worked every single problem in the margins in tiny blue pencil, all the way through, except for one near the back that was circled three times with three question marks beside it." },
        { s: 'mitsuko', t: "Four hundred yen. It's been on that shelf since before the station had a roof." },
        { choose: [
          { t: "(Solve the circled one before you ring it up.)", then: [
            { n: "It was a geometry problem, a triangle inside a circle inside a much worse triangle, and it took her the whole time Mitsuko spent wrapping the book in brown paper plus one false start she covered with her thumb, but she wrote the answer under the three question marks, small, in her own pencil, and the boy looked at it and then at her like she'd done a card trick." },
            { stat: { knowledge: 1 } }
          ] },
          { t: "The notes are a bonus. Somebody already did half your homework.", then: [
            { n: "He looked at the margins, then at her, then at the margins again, and some of the firing squad went out of his shoulders. He paid in ten-yen coins and said thank you twice, once to her and once, for reasons of his own, to the book." },
            { stat: { charm: 1 } }
          ] }
        ] },
        { s: 'boy', t: "...Thank you. I'm going to pass. Probably. Maybe." },
        { s: 'bunkichi', t: "Somebody sat up very late with that book. You can always tell." },
        { n: "Solar swept up while the rain ticked on the awning and the last of the light went out of the strip, thinking about whoever had circled that problem three times, decades ago, and given up on it, and hoping they wouldn't mind too much that a stranger had finished it for them." }
      ]
    ]
  },

  /* ── Convenience store (Port Island) ── */
  konbini: {
    cast: { clerk: 'Clerk', salaryman: 'Salaryman', kid: 'Kid' },
    shifts: [
      [
        { place: 'Port Island · Convenience Store', time: 'Evening' },
        { n: "The convenience store on the corner looked different with the lights on, which was a stupid thing to think about a convenience store, but she thought it anyway, coming in out of the wind with the refrigerators humming and the radio in the back halfway through an ad for a cram school, the magazine rack across the aisle looking extremely innocent for a magazine rack." },
        { s: 'clerk', t: "...Welcome?" },
        { s: 'clerk', t: "Oh. You're the new part-timer. Sorry. You've got one of those faces. Everybody looks like somebody after ten." },
        { n: "He showed her the register, the hot case, the receipt button that stuck if you pressed it like you meant it, and where the mop lived, and then at about nine a man in a loosened tie came in for one can of beer and stayed to tell her about his entire department." },
        { s: 'salaryman', t: "And Takeda. Takeda in accounts. You'd hate Takeda. He takes the last of the coffee and puts the pot back EMPTY. A grown man. Can you imagine." },
        { choose: [
          { t: "(Ring him up, and hold eye contact until he leaves.)", then: [
            { n: "She didn't blink. It turned out she was very good at not blinking. He trailed off somewhere in the middle of Takeda, took his beer and his change and his department, and went back out into the wind with the slightly wounded dignity of a man who had just been out-stared by a teenager." },
            { s: 'clerk', t: "...Huh. Okay. You can do nights." },
            { stat: { courage: 1 } }
          ] },
          { t: "Takeda sounds awful. You should tell him.", then: [
            { s: 'salaryman', t: "...I should, shouldn't I. I should tell him. Tomorrow. First thing." },
            { n: "He was never going to tell Takeda anything, tomorrow or ever, and they both knew it, but he left a lot happier than he came in, and he bowed to her at the door like she'd provided a professional service." },
            { stat: { kindness: 1 } }
          ] }
        ] },
        { n: "She mopped at ten. The wind kept shoving the automatic doors open on nobody, and every time the chime went off she looked up and said welcome to an empty doorway, which the clerk said was a good habit and also the saddest thing he'd seen all week." }
      ],
      [
        { place: 'Port Island · Convenience Store', time: 'Evening' },
        { n: "The kid came in at a quarter to eight, the way, the clerk said, he did every Friday, with a cram-school bag nearly as big as he was, and went up and down the candy aisle with a basket and the focus of a surgeon, and set it down on the counter with a sound like a small landslide." },
        { n: "Gummies. Chocolate. Three kinds of the sour powder that dyed your tongue blue. A lollipop the size of his face. On top of it all he put down a fistful of coins and looked her dead in the eye, daring her to say something." },
        { s: 'kid', t: "It's not all for me." },
        { s: 'kid', t: "...Most of it's for me." },
        { choose: [
          { t: "You're two hundred yen short. Pick what goes back.", then: [
            { n: "He looked at her like she had personally betrayed his entire generation, and then, with enormous suffering, put back the lollipop the size of his face, and she rang up the rest and said nothing at all about the sour powder, which seemed like a fair trade." },
            { s: 'kid', t: "You're mean." },
            { s: 'solar', f: 'neutral', t: "I'm accurate." },
            { stat: { courage: 1 } }
          ] },
          { t: "(Count his coins with him, out loud.)", then: [
            { n: "They counted together, ten-yen coin by ten-yen coin, and he lost count twice and blamed her both times, and it came out short, and he went pale, and she found a hundred-yen coin in her own apron pocket and decided out loud that it must have been his all along." },
            { s: 'kid', t: "...Thanks. I'm not saying it again." },
            { stat: { kindness: 1 } }
          ] }
        ] },
        { s: 'clerk', t: "He'll be back next Friday. He's been back every Friday since forever. His mom thinks he's at extra math." },
        { n: "Outside it had started to rain, and the kid stood under the awning with his hood up tearing into his gummies, perfectly happy, the whole street shining around him, and Solar wiped down the counter where he'd poured out his coins and thought, a little enviously, that it must be nice to want something that badly and have it cost exactly two hundred yen." }
      ],
      [
        { place: 'Port Island · Convenience Store', time: 'Evening' },
        { n: "Around half past nine, three boys in another school's blazers took up residence at the magazine rack, reading manga off the shelf without buying any of it, laughing at the loud parts and shoving the issues back in crooked, and the clerk discovered an urgent need to restock something in the back room." },
        { s: 'clerk', t: "I'm doing inventory. Very important inventory. You're in charge. Good luck." },
        { n: "She looked at the boys. She looked at the mop, leaning against the counter where she'd left it, wet and gray and, now that she thought about it, kind of menacing." },
        { choose: [
          { t: "(Walk over with the mop.)", then: [
            { n: "She didn't say a word. She just started mopping, very slowly and very thoroughly, in a widening circle that happened to have the magazine rack in the middle of it, and by the time the wet edge reached their shoes two of them had bought a can of coffee each out of what looked like guilt, and the third had put every manga back in its slot, spine out, in order." },
            { stat: { proficiency: 1 } }
          ] },
          { t: "Those are three hundred yen each. There's a bench outside.", then: [
            { n: "One of them started to say something smart, looked at her face, and changed his mind halfway through, which she watched happen like weather crossing a field, and they left, and thirty seconds later the third one came back in alone and bought the issue he'd been halfway through." },
            { stat: { charm: 1 } }
          ] }
        ] },
        { s: 'clerk', t: "...Are they gone? Oh. Wow. You're scarier than the last part-timer." },
        { s: 'clerk', t: "He cried once. In the walk-in. Over yogurt." },
        { n: "She finished the floor at ten, the store bright and empty and smelling of lemon cleaner, and walked to the station with her collar up against the wind off the bay, feeling, for no good reason at all, about two inches taller." }
      ]
    ]
  },

  /* ── Tutoring (Iwatodai riverside apartments) ── */
  tutor: {
    cast: { kenta: 'Kenta' },
    shifts: [
      [
        { place: 'Tutor · The Sakamoto Apartment', time: 'Evening' },
        { n: "The Sakamotos lived on the fourth floor of the apartments by the river, the kind of building where every door had the same umbrella stand outside it, and Mrs. Sakamoto opened theirs already in her coat, pressed a cup of green tea into Solar's hands, said Kenta was a genius and also a nightmare, and left for her evening shift so fast the door was still swinging." },
        { n: "Kenta was at the low table in the living room, thirteen and sulking at a professional level, with his math workbook open to a page that had nothing on it but his name and a drawing of a robot shooting a lighthouse." },
        { s: 'kenta', t: "I already know all this. She just pays you so she can feel like she did something." },
        { choose: [
          { t: "Great. Then do number six.", then: [
            { n: "He did number six in about forty seconds without looking up, and got it right, and then did number seven out of spite and got it wrong, and she watched him see it, and watched him decide whether to pretend he hadn't." },
            { s: 'kenta', t: "...That one's a trick question." },
            { s: 'solar', f: 'neutral', t: "It's a sign error." },
            { s: 'kenta', t: "Same thing." },
            { stat: { knowledge: 1 } }
          ] },
          { t: "(Sit down and do number six yourself, badly, out loud.)", then: [
            { n: "She got as far as dividing the wrong side by two before he snatched the pencil out of her hand with a noise of physical pain and did it properly, explaining every step in a voice dripping with contempt, which was, she noted, technically him doing his homework." },
            { s: 'kenta', t: "How are you a third-year." },
            { stat: { charm: 1 } }
          ] }
        ] },
        { n: "By eight they'd gotten through two pages and the robot had acquired a second lighthouse to shoot, and the river outside the window had gone dark and slow, holding the lights of the far bank in long wobbling lines." },
        { s: 'kenta', t: "...Same time Thursday?" },
        { n: "He said it like it was his idea. She let him have it." }
      ],
      [
        { place: 'Tutor · The Sakamoto Apartment', time: 'Evening' },
        { n: "English night. Kenta greeted the textbook the way a cat greets a bath, and the rain sliding down the balcony door seemed to be on his side about it." },
        { s: 'kenta', t: "English is fake. Nobody spells like that on purpose. Knight. Why is there a K. Who is the K for." },
        { s: 'kenta', t: "And I'm not reading it out loud. My accent's bad. Everybody laughs." },
        { choose: [
          { t: "(Read the passage out loud first, as badly as you possibly can.)", then: [
            { n: "She gave it everything. Every R became an L and every TH became a Z, and she put the stress on the wrong syllable of every word that had more than one, and somewhere around the second sentence Kenta put his face down on the table and his shoulders started to shake." },
            { s: 'kenta', t: "Stop. Stop. Okay. Give it here. I'll do it. You're embarrassing the whole country." },
            { stat: { courage: 1 } }
          ] },
          { t: "Spelling's just memory. Want a trick for it?", then: [
            { n: "She showed him the one where you say the word the way it's spelled, out loud and ridiculous, kuh-nig-hut, Wed-nes-day, so your mouth remembers what your eyes won't, and he resisted it for exactly three words before it got him." },
            { s: 'kenta', t: "Kuh-nig-hut. ...That's so stupid. I hate that it works." },
            { stat: { knowledge: 1 } }
          ] }
        ] },
        { n: "He read the whole passage after that, in an accent that was actually fine, too fast and too quiet and glaring at the page like it owed him money, and when he got to the end he didn't look up." },
        { s: 'kenta', t: "Don't say good job. If you say good job I'll never do it again." },
        { n: "She didn't say good job. She put a small check mark in the corner of the page instead, and he looked at it for a second longer than he needed to, and pretended he hadn't." }
      ],
      [
        { place: 'Tutor · The Sakamoto Apartment', time: 'Evening' },
        { n: "There was a test folded into quarters inside the back cover of Kenta's workbook, the way you'd hide a body, and it fell out onto the table when she opened it. Forty-one out of a hundred. Red pen everywhere. Dated last week." },
        { s: 'kenta', t: "Don't." },
        { s: 'kenta', t: "She doesn't know. She can't know. She'll do the face. The quiet one." },
        { n: "Outside the wind was pushing the river around, chopping it into small gray hills, and Kenta sat with his arms folded and his jaw set, thirteen and furious and looking, for about one second, like he might cry, which he would rather have died than do in front of her." },
        { choose: [
          { t: "(Go through it with him. Every wrong answer.)", then: [
            { n: "It took the whole hour. Most of it was the same mistake made eleven different ways, and somewhere around the seventh he started catching it before she did, and stopped glaring, and started muttering at the paper instead of at her, which was progress of a kind." },
            { stat: { kindness: 1 } }
          ] },
          { t: "I'm not telling her. You are. I'll sit right here.", then: [
            { n: "He told her when she got home, in the doorway, shoes still on, so fast it came out as one word, and Solar stayed at the table and did not listen very hard, and Mrs. Sakamoto's voice in the hall wasn't angry at all, only tired and soft, and when Kenta came back his ears were bright red." },
            { stat: { courage: 1 } }
          ] }
        ] },
        { s: 'kenta', t: "You're the worst tutor I've ever had." },
        { s: 'solar', f: 'happy', t: "I'm the only tutor you've ever had." },
        { s: 'kenta', t: "Still." }
      ]
    ]
  },

  /* ── Respawn (Port Island Station) ── */
  respawn: {
    cast: { manager: 'Manager', regular: 'Regular' },
    shifts: [
      [
        { place: 'Port Island Station · Respawn', time: 'Evening' },
        { n: "Respawn was down a flight of stairs off the station concourse, behind a door plastered three layers deep in tournament flyers, and inside it was always the same hour, a blue, humming, windowless hour lit by forty monitors in long rows, the air thick with instant ramen and energy drinks and warm plastic and the constant soft rattle of keys, like rain on a roof that wasn't there." },
        { s: 'manager', t: "Coffee bar's yours. Seat numbers are on the backs of the chairs. If anybody asks for the network password, it's on the wall. If they ask again, it's still on the wall." },
        { n: "She learned the espresso machine, which hissed at her like it had a grudge, and the ice machine, which jammed, and the regulars, who all ordered the same thing every night and expected her to know it by the second time." },
        { s: 'regular', t: "Seat fourteen, same as always. And the guy in sixteen keeps screaming. Can you, like... do something." },
        { n: "The guy in sixteen was maybe fifteen and losing, loudly, his headset knocked half off one ear and the back of his neck bright red, smacking the desk every time his screen went gray." },
        { choose: [
          { t: "(Bring him a free refill and set it down without a word.)", then: [
            { n: "He stopped mid-smack, looked at the cup, looked at her, and said thank you in a voice two octaves lower than the one he'd been screaming in, and played the rest of the night at a volume that only made the people directly next to him wince." },
            { stat: { kindness: 1 } }
          ] },
          { t: "Take a walk around the block. The game will still be here.", then: [
            { n: "He opened his mouth to argue, met her eyes, closed it, and went, and came back ten minutes later with the red gone out of his neck and won his next match, and nodded at her on the way to the bathroom like they'd been through a war together." },
            { stat: { courage: 1 } }
          ] }
        ] },
        { n: "At ten she climbed back up the stairs into the real night, and the wind across the concourse hit her in the face like cold water, and it took her the whole walk to the platform to stop hearing keys." }
      ],
      [
        { place: 'Port Island Station · Respawn', time: 'Evening' },
        { n: "Friday was a local cup, twelve teams of high schoolers and one team of exhausted office workers who were somehow winning, and the whole basement smelled of nerves and cheap cologne, the cologne of boys who had decided tonight was the night they became famous." },
        { n: "She ran drinks between the rows with a tray on one hand. On the big screen by the bar a match was going badly for the team in blue, their healer stranded at the back of the map, running in small panicked circles while everyone else on her team died one at a time without her." },
        { s: 'regular', t: "Their support's lost. She's been lost for, like, two minutes. Somebody tell her." },
        { choose: [
          { t: "(Lean over her shoulder and tell her to go left.)", then: [
            { n: "The girl in blue jumped, went left, found her team just as the fight started, and kept two of them alive long enough to win it, and the whole row stood up and yelled, and she looked back at Solar over her headset with an expression of total, suspicious gratitude." },
            { stat: { proficiency: 1 } }
          ] },
          { t: "(Say nothing. Refill the ice.)", then: [
            { n: "She refilled the ice. The team in blue lost. The girl took her headset off afterward and sat very still with her hands in her lap, and Solar brought her a drink on the house and didn't make her talk about it, which seemed like the only thing anybody could really do about losing." },
            { stat: { kindness: 1 } }
          ] }
        ] },
        { s: 'regular', t: "...Those office guys are going to win the whole thing, aren't they. Unbelievable. They're wearing matching lanyards." },
        { n: "Wiping down the bar at the end of the night, she realized she'd spent the whole cup watching the healers without meaning to, only the healers, where they stood and who they were watching and how late they moved." },
        { n: "It was a weird thing to notice. She noticed it anyway." }
      ],
      [
        { place: 'Port Island Station · Respawn', time: 'Evening' },
        { n: "Closing meant the monitors went dark one row at a time, the blue draining out of the basement in steps until the only light left was the coffee bar's yellow bulbs and the green of the exit sign, and the quiet that came after was so total it rang." },
        { s: 'manager', t: "Keyboards. All of them. You'd be amazed what people do to a keyboard." },
        { n: "She was amazed. Chip dust, mostly, and one key on seat thirty glued down with what she very much hoped was soda, and a sticky note on the monitor at seat nine that said I WILL BE BACK in shaky marker, like a threat or a promise or, possibly, both." },
        { choose: [
          { t: "(Do every keyboard properly, one key at a time.)", then: [
            { n: "It took forty minutes and a whole packet of wipes, and at the end the manager came out of the office, looked down the rows of clean, gleaming keyboards, and gave her the kind of nod usually reserved for soldiers." },
            { stat: { proficiency: 1 } }
          ] },
          { t: "(Write under the sticky note: we'll be here.)", then: [
            { n: "She wrote it small, in the corner, and felt a little stupid, and left it anyway, and the next night the note was gone and seat nine's regular nodded at her across the room like the two of them had an understanding." },
            { stat: { kindness: 1 } }
          ] }
        ] },
        { n: "On the last row her own face came up in a dark monitor, gray and tired, hair coming down from where she'd pinned it, a girl in an apron inside a black glass rectangle, and she looked at herself the way you look at a stranger across a train carriage, and then wiped the screen, and that was that." },
        { s: 'manager', t: "Go home. You did good." },
        { n: "Up the stairs the city was cold and wide and full of real light, and she was gladder of it than she would have admitted to anyone." }
      ]
    ],
    beats: [
      { at: 2, after: '9/12', met: ['hanni', 'hyein'], lean: 'R', scene: [
        { place: 'Port Island Station · Respawn', time: 'Evening' },
        { n: "She heard them before the door finished opening, which, she was learning, was how it always went with those two, a voice going SOL down the basement stairs at a volume the stairs had not been built for, and every head in the front row turned around at once." },
        { s: 'hyein', f: 'happy', t: "SOL. You have a JOB?" },
        { s: 'hanni', f: 'happy', t: "With an apron! Sol, you're wearing an apron!" },
        { n: "They came down the stairs together and still somehow separately, the way they seemed to do everything, Hanni first with her hands already out like she was going to have to catch something, Hyein right behind her in a pink cardigan that was very much not from this decade, holding up her phone and already taking a picture." },
        { s: 'hyein', f: 'serious', t: "Okay, the apron is a crime. Who tied it? Did you tie it? It's, like..." },
        { s: 'hanni', f: 'neutral', t: "...It's not backwards, it's just..." },
        { s: 'hyein', f: 'neutral', t: "Loose. It's loose. That's what I said." },
        { s: 'hanni', f: 'happy', t: "That is not what you said." },
        { n: "Hyein came around the counter without asking, which Solar was fairly sure was not allowed, and retied the strings at the small of her back with two quick hard tugs, like a girl who had done this to a lot of costumes on a lot of nights, and stepped back and squinted." },
        { s: 'hyein', f: 'happy', t: "There. Now you look employed." },
        { choose: [
          { t: "Thank you. Can I get you two anything?", then: [
            { s: 'hyein', f: 'surprised', t: "Why are you talking like that?" },
            { s: 'hanni', f: 'neutral', t: "She's at work, Hyein. That's her work voice." },
            { s: 'hyein', f: 'sad', t: "She doesn't HAVE a work voice. She has, like, one voice, and it's mean, and I love it." }
          ] },
          { t: "How did you even find this place?", then: [
            { s: 'hanni', f: 'happy', t: "We asked Mitsuru-senpai! She knew. She knows everything. It's honestly a little scary." },
            { s: 'hyein', f: 'neutral', t: "She wrote it down for us. On stationery. With a crest on it." }
          ] }
        ] },
        { n: "It was a slow night, and the manager waved her off for her break, and Hyein had already claimed a pair of seats in the back row and was patting the chair between them, and Hanni had already bought Solar a drink from Solar's own counter, which was absurd, and sweet, and absurd." },
        { s: 'hanni', f: 'neutral', t: "Play something. Anything. We'll just watch. We won't ask questions." },
        { s: 'hyein', f: 'happy', t: "We'll ask so many questions." },
        { n: "She didn't know the game. Some bright cartoon shooter with a map full of crates, a character screen she clicked through at random, and she meant to just wander around and die a little, but her left hand settled on the keys before she'd told it to, three fingers and a thumb, and her right hand found the mouse like a cup she'd set down a minute ago, and when the first fight started her thumb went to a key and pressed it, quick, for something that wasn't there." },
        { n: "Nothing happened. There was nothing on that key in this game. Her thumb pressed it again anyway, and then a third time, frustrated, like a word stuck on the tip of the tongue." },
        { n: "Beside her, both of them had gone completely quiet." },
        { s: 'hyein', f: 'surprised', t: "...That's your bell thing." },
        { s: 'hanni', f: 'sad', t: "The little bells. You throw them at people so they don't..." },
        { s: 'hyein', f: 'neutral', t: "...So they don't die. Yeah." },
        { choose: [
          { t: "(Press it again.)", then: [
            { n: "Nothing. Her hand didn't care. It kept its shape over the keys, patient and certain, like it was waiting for the game to catch up with it." }
          ] },
          { t: "Tell me about the bells.", then: [
            { s: 'hanni', f: 'happy', t: "You'd be so mad. You'd say we're explaining it wrong." },
            { s: 'hyein', f: 'happy', t: "We ARE explaining it wrong. She's a fox. She's a ninja. She heals people. You love her more than anyone alive." },
            { s: 'hyein', f: 'serious', t: "More than ME." }
          ] }
        ] },
        { n: "Hanni reached over and put a hand on Solar's shoulder, not squeezing, just there, warm through the shirt, and left it there while Solar died twice more in a row, badly, to a boy in seat twelve who would not stop jumping." },
        { s: 'hanni', f: 'neutral', t: "Your hands remember. That's something. That's a start." },
        { s: 'hyein', f: 'neutral', t: "Okay. This game is ugly. Play a prettier one. You have nine more minutes of break, I'm timing it." }
      ] },

      { at: 4, after: '9/26', met: ['minji'], lean: 'R', scene: [
        { place: 'Port Island Station · Respawn', time: 'Evening' },
        { n: "Minji came in on a Saturday with her cap on backwards, which meant something, Solar was sure of it, the way the girls' faces had both meant something the first time they saw it, though nobody had told her what, and she had a camera in her hand, a small one, the kind that looked expensive in a way that was trying hard not to." },
        { s: 'minji', f: 'neutral', t: "Hey. Is it okay if I shoot in here? Not people. Just... the room." },
        { n: "The manager shrugged. Solar shrugged. Minji went off down the rows with the camera held low at her hip, filming the monitors, the blue on the ceiling, the backs of forty heads, a hand on a mouse, a can sweating on a coaster, moving slowly, the way you'd move through a church, like the room was something you could interrupt." },
        { n: "She came back up the last row toward the bar, still filming, and the lens came around and found Solar behind the counter, and stopped." },
        { n: "Then Minji lowered the camera. Not all the way. Just enough that it wasn't pointed at anything anymore." },
        { s: 'minji', f: 'flustered', t: "Sorry. I didn't ask. I always ask, I ask, like, twenty times, it's a whole thing with me." },
        { s: 'minji', f: 'neutral', t: "Can I keep filming? You. I mean you." },
        { choose: [
          { t: "You can keep filming.", then: [
            { s: 'minji', f: 'happy', t: "...Okay. Thank you. Seriously." },
            { n: "She brought it back up, and it was strange, because Solar had braced to feel watched, the way you feel the flash before it goes off, and instead she felt something closer to the opposite, like someone had pulled up a chair beside her." }
          ] },
          { t: "Why do you stop every time it gets to me?", then: [
            { s: 'minji', f: 'serious', t: "Because you're the only thing in here I'd be sad about if I got it wrong." },
            { n: "She said it flatly, like a fact about lenses, and then her ears went pink under the cap and she brought the camera back up very fast, like she could hide behind it, which she couldn't, not really, not from that angle." }
          ] },
          { t: "(Look straight into the lens.)", then: [
            { n: "Minji's breath caught. Solar heard it from across the counter, a small sound, like stepping onto a stair that wasn't there." },
            { s: 'minji', f: 'surprised', t: "You never do that. You always look somewhere else. You say you look like you're starring in a sad movie." }
          ] }
        ] },
        { s: 'minji', f: 'neutral', t: "You're the same in the frame. You know that? Everything else is different. Your hair. The uniform. The way you say thank you to strangers." },
        { s: 'minji', f: 'sad', t: "But in the frame you're always the same." },
        { n: "She turned the camera around so Solar could see the little screen, and on it was Solar, behind a counter, in a blue room, bent over the espresso machine, and behind her the monitors stretching away in their long rows, every one of them glowing, and Solar looked at it a second too long." },
        { music: 'tender' },
        { n: "It was late, somewhere. It was very late, and dark, the kind of dark a room only gets when the rest of the building has gone to sleep, and the only light was a monitor, blue and white, lighting up a pair of hands on a keyboard and the edge of a headset and a can on the desk going warm, and on the screen there was a girl in a fox mask with bells in her hands, moving exactly when Solar moved, because she was Solar, because Solar was her, and somebody in the headset said her name the way you say the name of your support when they've just saved your life, and the hands on the keyboard were hers." },
        { n: "The espresso machine hissed. The basement came back, blue and loud and full of strangers." },
        { s: 'minji', f: 'surprised', t: "...Sol? You went somewhere." },
        { choose: [
          { t: "I think I used to play. Late. In the dark.", then: [
            { s: 'minji', f: 'sad', t: "Every night. You never sleep. You think nobody notices." },
            { s: 'minji', f: 'happy', t: "...I'm not going to say anything else. I'm just going to film." }
          ] },
          { t: "(Wipe the counter. Don't say anything.)", then: [
            { n: "Minji didn't push. She just kept filming, quietly, from the end of the bar, and when Solar finally looked up again the camera was still there, and so was she, and neither of them seemed in any hurry to stop." }
          ] }
        ] },
        { fragment: 'runners-monitor' }
      ] },

      { at: 6, after: '10/24', met: ['jaehyun'], lean: 'R', scene: [
        { place: 'Port Island Station · Respawn', time: 'Evening' },
        { n: "The cup final ended at nine and everybody in the basement wanted a drink at once, forty people pressed three deep against the bar shouting orders over each other, waving cards and coins, and the manager had gone upstairs to argue with the building about the heating, and Solar was alone behind the counter with an espresso machine that hated her and a line that went back to the stairs." },
        { n: "She was keeping up. Barely. She was keeping up the way you keep up running downhill, which is to say not really, which is to say it was only a matter of time." },
        { n: "She didn't see him come in. She felt it, the way you feel a door open somewhere in a house, a shift in the pressure of the air, and when she looked up Jaehyun was at the bottom of the stairs, tall and still in a dark coat in the middle of all that noise, reading the room in one long look, left to right, like it was a defense lining up across from him." },
        { n: "He didn't say anything. He took off his coat, folded it over the end of the counter, rolled his sleeves to the elbow, and came around behind the bar like he worked there, and started taking orders off the left side of the line in a calm, low voice that somehow carried better than everybody else's shouting." },
        { s: 'jaehyun', f: 'neutral', t: "Two iced, one hot, a green tea. I've got them. Take the right." },
        { n: "He was good at it. That was the annoying part. He was good at it within about thirty seconds, the way he was apparently good at everything, and the line moved, and kept moving, and for ten minutes they worked side by side without a word, his elbow and hers, passing cups." },
        { n: "Then a man at the end of the bar, older, beer on his breath, leaned over too far to tell Solar she'd gotten his order wrong, and before she could even open her mouth Jaehyun had stepped into the space between them, not touching anyone, just there, a wall with a polite expression on it." },
        { s: 'jaehyun', f: 'serious', t: "I'll fix it for you. Step back from the counter, please." },
        { n: "The man stepped back. And something in Solar's chest went hot and tight and furious, fast, before she even knew why, a reflex older than anything she could remember, like her body had been waiting years for someone to do exactly that so it could hate it." },
        { choose: [
          { t: "I had it.", then: [
            { s: 'jaehyun', f: 'neutral', t: "I know." },
            { n: "And he stepped back. Actually stepped back, a full pace, out of the space he'd taken, and let her fix the man's drink, and very deliberately didn't watch her do it, the way you don't watch someone parallel park." }
          ] },
          { t: "(Move him aside with your elbow, and handle it yourself.)", then: [
            { n: "He let himself be moved. She fixed the drink, slid it across, and said something to the man that turned him red to the ears and sent him up the stairs, and when she turned around Jaehyun was looking at her with an expression she couldn't read and didn't like and somehow already knew." },
            { s: 'jaehyun', f: 'happy', t: "Still hostile. Good." }
          ] }
        ] },
        { n: "When the rush was over and the line was gone and the basement had gone blue and quiet again, he made two drinks without asking what she wanted. An iced coffee for himself. For her, something cold and fizzy and sweet, with no coffee in it at all." },
        { s: 'solar', f: 'neutral', t: "I can have coffee." },
        { s: 'jaehyun', f: 'neutral', t: "Not this late. You don't sleep as it is. You don't need the help." },
        { n: "She wanted to argue. She drank it instead, mostly to have something to do with her mouth, and it was exactly right, which was worse." },
        { s: 'jaehyun', f: 'neutral', t: "Call if you need anything." },
        { s: 'jaehyun', f: 'happy', t: "You won't. But the offer stands." },
        { n: "He put his coat back on and went up the stairs, and his cup was rinsed and upside down on the drying rack, and there was a folded bill in the tip jar that turned out to be twenty American dollars, completely useless here, which felt, in a way she couldn't have explained to anyone, exactly like him, and she was so annoyed about it that she didn't notice she was smiling until the manager asked her what was funny." }
      ] }
    ]
  },

  /* ── Harbor fish market (Port Island) ── */
  fishmarket: {
    cast: { tanabe: 'Mr. Tanabe', nephew: "Tanabe's nephew" },
    shifts: [
      [
        { place: 'Port Island · Fish Market' },
        { n: "The fish market opened before the sun did, under a long tin roof by the harbor, all wet concrete and hanging bulbs and men in rubber boots shouting prices at each other like insults, and the air was salt and diesel and cold blood and the sweet rot of the bins out back, and the gulls sat along the edge of the roof in a row like they'd paid for their seats." },
        { s: 'tanabe', t: "Ice. Shovel. Crates. Don't stand where the forklift goes. That's the whole job. You'll be fine, or you'll quit by next week." },
        { n: "She shoveled ice. It was heavier than it looked and colder than it had any right to be through two pairs of gloves, and she broke it out of the bin in clean chunks and packed it around silver fish laid head to tail in their crates like spoons in a drawer, and her shoulders started complaining by six and gave up complaining by seven." },
        { choose: [
          { t: "(Keep pace with the men on the next stall.)", then: [
            { n: "She matched them crate for crate until one of them, sixty if he was a day, looked over and said something in a dialect she didn't catch that made the whole stall laugh, and then, without a word, started passing her the lighter crates." },
            { stat: { proficiency: 1 } }
          ] },
          { t: "(Ask Mr. Tanabe how he knows which fish are good.)", then: [
            { s: 'tanabe', t: "The eyes. Clear eyes, good fish. Cloudy eyes, somebody's lying to you." },
            { s: 'tanabe', t: "Works on people too. Mostly." },
            { stat: { knowledge: 1 } }
          ] }
        ] },
        { s: 'tanabe', t: "Huh. Still standing. Most of them are sitting on a crate crying about their hands by now." },
        { n: "By the time the sun came up over the water the stalls were half empty and her hands were raw and red and smelled like the sea in a way no amount of soap was going to fix, and Tanabe paid her in cash out of an envelope and told her she could come back, in the tone of a man who expected her not to." },
        { n: "She came back." }
      ],
      [
        { place: 'Port Island · Fish Market' },
        { n: "A chalkboard hung by the office door with the day's tides on it in Tanabe's square handwriting, high water and low and the times beside them, and Solar walked past it every Sunday without looking, because she never needed to, which she only noticed on the morning he hadn't written it up yet." },
        { s: 'tanabe', t: "Board's blank. Somebody check the paper. When's low water?" },
        { n: "It was out of her mouth before anybody found the paper. A time, to the minute, and the height, and that it would turn slow today because of the wind coming down off the hills, and the whole stall stopped for a second and looked at her, and one of the old men checked the paper and grunted." },
        { s: 'tanabe', t: "...You from a fishing town?" },
        { choose: [
          { t: "I must have read it somewhere.", then: [
            { n: "Tanabe looked at her a moment longer, with his clear-eyes-good-fish look, and then let it go, and wrote it up on the board in chalk exactly the way she'd said it." },
            { stat: { knowledge: 1 } }
          ] },
          { t: "I don't know where I'm from.", then: [
            { s: 'tanabe', t: "Huh." },
            { s: 'tanabe', t: "Well. You're from here till nine, anyway. Get the ice." },
            { stat: { courage: 1 } }
          ] }
        ] },
        { n: "She got the ice. Out past the end of the roof the harbor was doing exactly what she'd said it would, pulling back off the pilings inch by inch, the dark line of wet climbing down the concrete, and she watched it longer than she meant to with an ache somewhere under her ribs that didn't belong to any part of her she could name." },
        { s: 'tanabe', t: "Slow, like she said. Somebody get that girl a coffee." }
      ],
      [
        { place: 'Port Island · Fish Market' },
        { n: "A crate went off the edge of the dock at closing, clipped by the forklift, and hit the black water with a slap and a scatter of silver, and Tanabe's nephew, who was nineteen and an idiot in the specific way some boys are idiots about water, kicked off his boots to go in after it." },
        { n: "Solar was nearest. She already had the rope, a coil of it over her shoulder from the boats, and she got to the edge of the dock and stopped there, exactly there, toes on the painted line, like the concrete simply ended a foot earlier for her than it did for everybody else." },
        { n: "The water moved under the pilings, green and black and patient. Her whole body had gone cold and still the way an animal goes still, and she knew, the way you know your own name, that she could not swim. Had never been able to. Was not about to start now." },
        { choose: [
          { t: "(Throw him the rope, and hold on.)", then: [
            { n: "She threw it. It went where she meant it to. When the nephew came up spluttering with the crate under one arm she braced her feet and took his weight, every bit of it, until the old men got there, and she didn't step one inch past the line the whole time." },
            { stat: { courage: 1 } }
          ] },
          { t: "(Shout for the others.)", then: [
            { n: "Her voice cracked across the market like a flare, and every man in rubber boots came running at once, and they had him out in under a minute, and the nephew grinned up at her from the dock, soaked and freezing and very pleased with himself, like she'd thrown him a party instead of a fit." },
            { stat: { kindness: 1 } }
          ] }
        ] },
        { s: 'nephew', t: "Got the crate, though!" },
        { s: 'tanabe', t: "Good. Smart. Water doesn't care how brave you are. Him, I'm docking." },
        { n: "She walked home along the seawall with her hands in her pockets and the wind at her back, and she kept to the landward side of the path the entire way without once thinking about it, which she only noticed at the bridge." }
      ]
    ],
    beats: [
      { at: 2, after: '10/10', met: ['yunjin'], lean: 'S', scene: [
        { place: 'Port Island · Fish Market' },
        { n: "Somebody was shouting her name across the fish market at six in the morning, which had never once happened before, and it wasn't even the name anybody here called her." },
        { s: 'yunjin', f: 'happy', t: "SOL. SOL! Over here! Oh my God, it STINKS in here!" },
        { n: "Yunjin came down the wet concrete between the stalls like she owned it, picking her way around the puddles in shoes that had not been built for any of this, a can of coffee in each hand held up over her head like trophies, and every man in rubber boots turned to watch her go by, and she didn't notice a single one of them." },
        { s: 'yunjin', f: 'surprised', t: "You're wearing BOOTS. Rubber ones. Sol. You told me once you'd rather die." },
        { s: 'yunjin', f: 'happy', t: "Okay, never mind, here. Hot. From the machine by the bus stop. They had the good one." },
        { n: "The can was hot enough to sting through her gloves, and it was the good one, the one she'd have picked out of the whole machine, and she didn't know how she knew that either." },
        { choose: [
          { t: "(Take it. Say thank you.)", then: [
            { s: 'yunjin', f: 'sad', t: "...Don't say thank you like that. Like I'm some stranger who held a door." },
            { s: 'yunjin', f: 'happy', t: "Say it mean. Say, thanks, Jin, it's freezing, what took you so long." }
          ] },
          { t: "Why do you call me Sol?", then: [
            { s: 'yunjin', f: 'neutral', t: "Because it's your name, babe." },
            { s: 'yunjin', f: 'serious', t: "And if I say the whole thing you'll think I'm mad at you. I'm never mad at you. I've been mad at you, like, twice." }
          ] }
        ] },
        { n: "She didn't leave. Solar went back to the ice, and Yunjin sat herself down on an upturned crate by the scales with her coffee in both hands and her coat pulled around her, and the loud went out of her bit by bit, the way the tide goes, so slow you only notice it once it's gone." },
        { n: "She watched Solar work. She didn't say anything through most of a crate, which, Solar was learning, was not a thing Yunjin did." },
        { s: 'yunjin', f: 'neutral', t: "Stay off the edge, okay? The dock. You stay on this side of it." },
        { s: 'solar', f: 'surprised', t: "How do you know I can't swim?" },
        { s: 'yunjin', f: 'sad', t: "Sol." },
        { s: 'yunjin', f: 'sad', t: "I know everything about you. That's my whole job. That's, like, my entire personality." },
        { n: "Out past the roof the water was nearly all the way out, the pilings standing bare and black and dripping in the gray light, and Solar felt it before she saw it, a small loosening somewhere under her ribs, like a breath she'd been holding all night let go." },
        { s: 'solar', f: 'sad', t: "It's turning." },
        { n: "Yunjin looked out at the harbor, and then back at her, and her face did something complicated and quiet that she covered almost at once with her coffee." },
        { s: 'yunjin', f: 'neutral', t: "...Yeah. You always know first. You can't sleep till it turns. You never could." },
        { choose: [
          { t: "Stay till the end of my shift?", then: [
            { s: 'yunjin', f: 'happy', t: "Babe. I was staying whether you asked or not. I just wanted you to ask." }
          ] },
          { t: "(Sit down next to her on the crate, just for a minute.)", then: [
            { n: "Yunjin shifted over without a word to make room, and leaned her whole weight, warm through two coats, against Solar's side, and neither of them said anything, and the gulls screamed, and the tide went on turning, and Solar's shoulder knew exactly where to put itself." }
          ] }
        ] }
      ] },

      { at: 4, after: '10/10', lean: 'S', scene: [
        { place: 'Port Island · Fish Market' },
        { n: "Closing was the best part of the day, the hoses going, the concrete steaming where the hot water hit it, the gulls fighting over the scraps out back, and Solar carried the bins around behind the market to the alley where they went every Sunday, the same alley, the same wet wall, the same rusted drain." },
        { n: "There were lanterns over it." },
        { n: "Red ones, paper, strung on a wire from one roof to the other down the whole length of the alley, dozens of them, swaying in the wind off the water, and they had not been there last week, or the week before, or ever, she was sure of it, she'd have remembered. The light they made was low and warm and red on the wet ground, and the alley smelled, under the fish and the bins, of black-bean sauce and frying dough." },
        { place: 'Port Island · Back Streets', soft: true },
        { n: "At the far end, under the last lantern, somebody was waiting." },
        { n: "A man, she thought, or a boy just past being one, in a dark coat with his hands in his pockets, standing the particular way people stand when they're paid to wait, which is to say like furniture, like a lamppost, like they'd be there whether or not anyone ever came. She couldn't see his face. The lantern light was behind him. She set the bins down." },
        { choose: [
          { t: "(Walk toward him.)", then: [
            { n: "She walked, and he didn't move, and the closer she got the longer the alley stretched, the lanterns going on and on overhead, red after red after red, like a hallway in a dream that keeps adding doors." }
          ] },
          { t: "Hello? Are you waiting for someone?", then: [
            { n: "He didn't answer. His head turned, only slightly, the way you turn toward a sound you've been listening for all night and had stopped believing would come." }
          ] }
        ] },
        { music: 'tender' },
        { n: "And then it was another alley under the same lanterns, and snow was coming down red through the light, and there was a door propped open on a back room full of smoke and the click of tiles and somebody inside shouting about cheating at the top of her lungs, a voice she would have known anywhere, and Solar was standing in the doorway with her hands cold, laughing at something, and against the wall behind her there was somebody waiting who never once sat down, not all night, not even when they told him to." },
        { n: "The tiles clicked. The voice inside laughed. The one by the wall said nothing at all, and she knew without turning around that he was watching the door and not her, and that for him those were the same thing." },
        { n: "A gull screamed. She was standing in the alley behind the fish market with the bins at her feet, and over her head there was only the gray morning and a bare wire with nothing on it, and at the far end, where the last lantern had been, there was a puddle with a little red in it, and then not even that." },
        { n: "She stood there a while. Then she picked up the bins, because they still needed doing, and her hands were shaking a little, and she let them." },
        { fragment: 'strangers-lanterns' }
      ] },

      { at: 6, after: '11/4', met: ['haechan'], lean: 'S', scene: [
        { place: 'Port Island · Fish Market' },
        { n: "It was cold enough now that the ice didn't melt at all, just sat in the crates going gray at the edges, and the wind came straight in off the water under the tin roof and found every gap in her clothes, and she worked fast to stay warm and was not warm." },
        { n: "When the shift ended she walked out along the pier with the canned coffee Tanabe had tossed her, the way she sometimes did, because it was the only quiet place in the whole market, and there was somebody already at the end of it." },
        { place: 'Port Island · Pier', soft: true },
        { n: "He was sitting on the last bollard with his back to the sea and his elbows on his knees, all in black, his hair falling in his eyes, headphones around his neck with the cord tucked into his collar, and he looked up when her boots hit the boards like he'd heard them coming from the other side of the harbor." },
        { n: "He didn't say anything. He didn't get up. He just looked at her, flat and steady, no expression on his face at all, which on him, she somehow knew, was its own kind of expression." },
        { s: 'haechan', f: 'neutral', t: "...Hey." },
        { n: "She went to stand at the rail a few feet off. After a second he got up, unhurried, and moved, and when he settled again he was leaning on the rail on her other side, between her and the open end where the pier dropped straight into the water, and he did it so casually that it took her a full minute to notice he'd done it at all." },
        { n: "He took a can out of his coat pocket and held it out without looking at her. Barley tea. Hot. She hadn't said she was cold. She hadn't said anything." },
        { choose: [
          { t: "(Take it.)", then: [
            { n: "His fingers didn't touch hers. They very carefully didn't, the way you don't touch a stove." }
          ] },
          { t: "I already have coffee.", then: [
            { s: 'haechan', f: 'neutral', t: "You hate the black one." },
            { n: "She did. It was the bitter black kind, not the sweet milky one in the brown can, and she'd only been holding it for the warmth. He waited, can out, until she swapped, and then drank the coffee himself and made a face at it, small and flat and devastatingly unimpressed, at a can that cost a hundred and twenty yen." }
          ] }
        ] },
        { n: "They watched the water. The gulls wheeled. Behind them the market was hosing down, the sound of it carrying out over the boards, and he didn't ask her anything, not one question, not her name, not whether she knew him, nothing, and it was the strangest thing anyone had done to her in weeks." },
        { s: 'haechan', f: 'neutral', t: "Agasshi." },
        { n: "He said it quietly, to the water, not to her. And then he looked at her sidelong and kept looking, the way you watch a glass you've set down too close to the edge of a table." },
        { choose: [
          { t: "(Flinch.)", then: [
            { n: "She didn't mean to. It went through her like a cold hand on the back of the neck, a jolt, a step missed in the dark, and she felt her shoulders come up and couldn't put them down again." },
            { s: 'haechan', f: 'sad', t: "...Yeah." },
            { n: "That was all. He looked back out at the water, and his jaw did something small and tight, and he didn't say it again." }
          ] },
          { t: "(Don't flinch.)", then: [
            { n: "She held still. She held so still it was probably worse than flinching, and she knew it, and he knew it, and he let out a breath through his nose that might, on anyone else, have been a laugh." },
            { s: 'haechan', f: 'neutral', t: "Hm." }
          ] },
          { t: "Don't call me that.", then: [
            { n: "It came out sharp and fast from somewhere under her ribs she hadn't known was there, and for the first time since she'd walked onto the pier his face moved, the corner of his mouth, barely, a flat scrape of a laugh with something very old underneath it." },
            { s: 'haechan', f: 'happy', t: "...There she is." }
          ] }
        ] },
        { n: "When the wind picked up he pushed off the rail and walked back down the pier toward the market with his hands in his pockets, not fast, not looking back, a dark shape against the bulbs over the stalls, and then he turned a corner and wasn't." },
        { n: "The barley tea was still hot. She held it in both hands the whole way home, on the landward side of the seawall, and it was only at the bridge that she realized that for once she hadn't had to think about which side to walk on, because somebody had already been standing on the other one." },
        { fragment: 'strangers-barley-tea' }
      ] }
    ]
  },

  /* ── Yeobo's Cafe (Iwatodai Strip) ── */
  yeobos: {
    cast: { heeseung: 'Heeseung', jay: 'Jay', jake: 'Jake', sunghoon: 'Sunghoon', niki: 'Niki',
            junkyu: 'Junkyu', jaehyuk: 'Jaehyuk', asahi: 'Asahi', hyunsuk: 'Hyunsuk' },
    shifts: [
      [
        { place: "Iwatodai Strip · Yeobo's Cafe" },
        { n: "Yeobo's smelled of butter and espresso and somebody's homework, the windows fogging at the corners while the wind went up and down the strip outside rattling the shutters of the pachinko place, and the bell over the door dinged every time anyone so much as thought about coming in." },
        { s: 'sunoo', f: 'happy', t: "Solar! Two lattes for table three, and the big croissant for the man by the window. He's been staring at it for ten minutes. He thinks I can't see him." },
        { n: "He said her name like he'd said it a thousand times, like a word he used every day for the weather, and she was starting, a little, to stop bracing every time he did." },
        { s: 'sunoo', f: 'neutral', t: "Okay. Unrelated. Who's the boy who runs past the window every evening? Silver hair. In this weather. In SHORTS." },
        { choose: [
          { t: "That's my senpai. He trains.", then: [
            { s: 'sunoo', f: 'surprised', t: "He trains? For what, being cold?" },
            { s: 'sunoo', f: 'happy', t: "...He looks in, though. Right at you. Every time. I'm just saying. I'm only saying it." },
            { stat: { charm: 1 } }
          ] },
          { t: "(Make him a latte instead of answering.)", then: [
            { n: "She made him a latte. She put a heart on it, a reasonably good one, and slid it across, and he looked at it and then at her with the betrayed delight of a boy who knows exactly what's being done to him and is going to allow it." },
            { s: 'sunoo', f: 'happy', t: "Bribery. Okay. I respect bribery. I'm still going to find out." },
            { stat: { proficiency: 1 } }
          ] }
        ] },
        { n: "He did not find out, not that day, though not for lack of trying, and by closing he had asked about her dorm, her classes, her favorite convenience store, what she was eating these days and whether the red-haired senpai who'd come in once was as scary as she looked, and Solar had answered maybe half of it, and he'd taken every answer like a present." },
        { s: 'sunoo', f: 'happy', t: "See you next shift! Eat something! I'll know if you don't!" }
      ],
      [
        { place: "Iwatodai Strip · Yeobo's Cafe" },
        { n: "Sunoo had decided she was going to learn latte art if it killed them both, and it was raining, the strip outside gone dark and glossy and empty, so there was nobody to stop him." },
        { s: 'sunoo', f: 'neutral', t: "Wrist loose. Pour from high, then low, then wiggle, then pull through. Like you're writing your name in cursive and you're a little bit in love." },
        { n: "Her first one came out a blob. Her second came out a slightly more confident blob. Her third came out, against all odds, as a round little shape with lines going off it in every direction, which was not a heart in any sense of the word, and which Sunoo leaned over and stared at in total silence." },
        { s: 'sunoo', f: 'surprised', t: "...That's a sun. You made a sun." },
        { s: 'sunoo', f: 'happy', t: "Of course you made a sun. Of COURSE you did." },
        { choose: [
          { t: "(Keep at it until it's a heart.)", then: [
            { n: "It took eleven more cups, which they drank between them, and by the end they were both vibrating gently and she had made exactly one heart, lopsided, a little off to the left, unmistakable, and Sunoo took a picture of it like it was a newborn." },
            { stat: { proficiency: 1 } }
          ] },
          { t: "(Make another sun, on purpose.)", then: [
            { n: "She made another one, better, with a little face in it this time, two dots and a curve, and Sunoo put both hands over his mouth and then set it on the counter for the next customer, a businessman with an umbrella and a very bad day, who looked down at the sun in his coffee and laughed out loud, alone, like it had caught him off guard." },
            { stat: { charm: 1 } }
          ] }
        ] },
        { n: "Sunoo wiped down the steam wand humming something under his breath, and the rain kept on against the windows, and the cafe was so warm and so bright and so small that for a moment it felt like the only lit room in the city." }
      ],
      [
        { place: "Iwatodai Strip · Yeobo's Cafe" },
        { n: "Closing at Yeobo's meant chairs up on the tables, the floor swept, the display case emptied of every leftover croissant into a paper bag Sunoo would press on whoever was standing nearest the door, and the tip jar counted out on the counter under the one light they left on." },
        { s: 'sunoo', f: 'neutral', t: "Three thousand two hundred and... forty. And a button. Who tips a button?" },
        { n: "He split it into two piles, very carefully, and pushed one toward her, and then went quiet, which he never did, and sat looking at the dark windows with his chin in his hand and his soft hair falling in his eyes." },
        { s: 'sunoo', f: 'sad', t: "It's weird. You're here, and you're making the coffee, and you're doing the thing with your eyebrows when Niki's being annoying. And you're not here. Both at once." },
        { s: 'sunoo', f: 'happy', t: "...Sorry! Sorry. Ignore me. I get weird when I'm tired. Jungwon says I get philosophical. He says it like it's a disease." },
        { choose: [
          { t: "(Push your pile back toward him, for the croissant budget.)", then: [
            { s: 'sunoo', f: 'surprised', t: "Solar. No. That's yours." },
            { n: "She didn't take it back. He looked at it a moment, and then put it in the jar marked CROISSANT FUND in gel pen, and drew a small star beside the words, and didn't say anything else about it, which for Sunoo was practically a speech." },
            { stat: { kindness: 1 } }
          ] },
          { t: "I do a thing with my eyebrows?", then: [
            { s: 'sunoo', f: 'happy', t: "Oh my gosh. All the time. You're doing it right now." },
            { n: "She was. She could feel it. She put her eyebrows back where they belonged, and he laughed so hard he had to put his head down on the counter, next to the button." },
            { stat: { courage: 1 } }
          ] }
        ] },
        { n: "They locked up together. Outside the wind had dropped and the strip was very still, every shutter down, the streetlights buzzing, and Sunoo handed her the paper bag of leftover croissants without asking, the way he always did, and waved with his whole arm all the way to the corner." }
      ]
    ],
    beats: [
      { at: 1, after: '11/7', met: ['sunoo'], lean: 'H', scene: [
        { place: "Iwatodai Strip · Yeobo's Cafe" },
        { n: "The cafe had not been on the strip two weeks ago. Solar walked past that exact spot every day on her way to the station, and she would have sworn on anything that it had been a shuttered stationery shop with a sun-bleached sign, and now it was Yeobo's, warm windows and hand-lettered letters and a bell over the door, wedged between the pachinko place and the ramen shop like it had always been there and resented being asked." },
        { n: "It smelled like butter. It smelled like espresso and butter and somebody's homework, and the boy behind the counter looked up when the bell dinged and lit up so fast and so completely that she nearly turned around to see who was standing behind her." },
        { s: 'sunoo', f: 'happy', t: "Solar! You came! You actually came, I thought you'd chicken out. Jay bet me you'd chicken out." },
        { s: 'sunoo', f: 'neutral', t: "Okay. Apron. Name tag, I made you a name tag, don't look at the star, the star was an accident. And then training. I'm a very good trainer. Everybody says so. Jake says so." },
        { n: "The name tag said SOLAR in round gel-pen letters with a small star beside it that had very clearly not been an accident. She pinned it on. He beamed at it like he'd made it out of gold." },
        { s: 'sunoo', f: 'neutral', t: "So. The cups are..." },
        { n: "Her hand was already there. She'd reached up and to the left without looking, second shelf, behind the stack of saucers, and come down with a cup, and it was the right cup, the big one, and she stood there holding it and looking at it like somebody had just handed her a fish." },
        { s: 'sunoo', f: 'surprised', t: "...There. Yeah. Right there." },
        { choose: [
          { t: "Have I worked here before?", then: [
            { s: 'sunoo', f: 'happy', t: "No! Never. You just come in a lot. You stand right there at the counter and watch me do everything and judge me." },
            { s: 'sunoo', f: 'happy', t: "The very first time you ever came in, you ordered seven croissants. SEVEN. And seven coffees. I thought you were feeding a football team." },
            { s: 'sunoo', f: 'neutral', t: "You were feeding your friends. You're always feeding your friends. It's kind of your whole thing." }
          ] },
          { t: "(Put the cup down, and reach for the next thing.)", then: [
            { n: "She reached for the milk. It was in the little fridge under the counter, on the right, with the door that stuck. She reached for the tongs. They were on the hook by the register. Every time, her hand got there first, and every time Sunoo made a small happy noise like a man watching his team score." },
            { s: 'sunoo', f: 'happy', t: "See? Your hands remember. Everything else can catch up. Hands first." }
          ] }
        ] },
        { n: "He taught her the register anyway, and the espresso machine, which he talked to like a difficult relative and patted whenever it hissed, and the right way to fold a pastry box, and she was slower than him at all of it and better than she had any right to be, and he talked the entire time, about nothing, about everything, about his friends and their terrible orders and the boy who never ate lunch, in the voice of someone telling a story to somebody who already knew how it ended and liked hearing it anyway." },
        { n: "Outside it got dark early, the wind coming down the strip with a bite in it, and inside it was so warm that the windows ran." },
        { s: 'sunoo', f: 'sad', t: "...It's really good to see you behind a counter, Solar. Even if you don't know it's good. I know." },
        { s: 'sunoo', f: 'happy', t: "Okay! Table four wants a refill and he's too shy to ask. Go! Go, go, go!" }
      ] },

      { at: 3, after: '11/7', met: ['jungwon'], lean: 'H', scene: [
        { place: "Iwatodai Strip · Yeobo's Cafe" },
        { n: "The corner booth at Yeobo's belonged to Jungwon in the way certain rooms belong to certain ghosts. He was there when she came on shift, navy blazer, tie loosened, a stack of textbooks on one side of him and a stack of student council paperwork for a council a whole world away on the other, a red pen in his hand and a coffee going cold at his elbow, and he was there, she suspected, long after she'd gone home." },
        { n: "He didn't ask her for anything. He looked up when she came in and nodded, very correctly, the way a boy greets a teacher in a hallway, and went back to his work." },
        { s: 'jungwon', f: 'neutral', t: "Good afternoon, Solar." },
        { s: 'sunoo', f: 'neutral', t: "He hasn't eaten. He says he has. He's lying. Look at his face. That's his lying face." },
        { n: "It looked like all his other faces to Solar. She was beginning to understand that this was the point." },
        { n: "Later, Sunoo disappeared into the back and came out with a plate held very carefully in both hands, the way you'd carry a bomb or a birthday cake, and set it down in front of her instead of in front of Jungwon, and nodded toward the booth with enormous meaning." },
        { n: "It was a croissant. A big one, fresh, still warm, the whole top of it lathered in red icing, glossy and bright as a stop sign." },
        { s: 'sunoo', f: 'happy', t: "Take it to him. Trust me. Trust me, trust me, trust me." },
        { choose: [
          { t: "(Take it to the booth.)", then: [
            { n: "She set it down at his elbow, on top of a budget proposal, and Jungwon looked at it, and the red pen in his hand stopped moving, and stayed stopped." }
          ] },
          { t: "Sunoo, what is this?", then: [
            { s: 'sunoo', f: 'neutral', t: "A croissant! With icing! It's a completely normal croissant! Go!" },
            { n: "It was very clearly not a completely normal croissant. She took it to the booth anyway, since he was already pushing her, and set it down at Jungwon's elbow, and the red pen in his hand stopped moving, and stayed stopped." }
          ] }
        ] },
        { n: "For a second he didn't say anything at all. Then he looked past her to the counter, where Sunoo had suddenly become extremely busy polishing a clean cup, and when he spoke his voice was so polite, so gentle and correct and even, that it raised the hair on her arms." },
        { s: 'jungwon', f: 'neutral', t: "Thank you, Sunoo. That's very thoughtful of you." },
        { s: 'jungwon', f: 'serious', t: "Please don't ever do that again." },
        { s: 'sunoo', f: 'sad', t: "...Sorry, Jungwon." },
        { n: "But Solar wasn't really listening anymore. She was looking at the croissant, at the red, at the spot on top where Sunoo had started to pipe something in white and then stopped, a single curl of icing like the beginning of a letter, and something in her went very still." },
        { music: 'tender' },
        { n: "A box in her hands. A cardboard bakery box, warm through the bottom, and inside it a croissant lathered in red, with a word written across the top in white and a question mark after it, and she couldn't read the word, the word wouldn't hold still, but she could feel her own heart going hard and stupid in her chest, and across from her a boy in a navy blazer was watching her face like it was a test he'd studied for all night and still didn't know the answer to." },
        { n: "The cafe came back. The bell dinged. Jungwon was looking at her exactly the same way." },
        { s: 'jungwon', f: 'flustered', t: "You don't have to say anything." },
        { s: 'jungwon', f: 'neutral', t: "If you don't want to. You don't. It's only a croissant. Sunoo makes too many. It's a structural problem with the business." },
        { choose: [
          { t: "(Sit down across from him, and split it in half.)", then: [
            { n: "He watched her tear it, the red icing cracking down the middle, and took his half when she held it out, and ate it in small, careful, formal bites, like a boy at a state dinner, and didn't look at her once, and his ears were red right to the tips." },
            { s: 'jungwon', f: 'happy', t: "...It's good. Don't tell him." }
          ] },
          { t: "I think I've seen one of these before.", then: [
            { n: "His pen went down on the table. Very quietly, very precisely, lined up with the edge of the page." },
            { s: 'jungwon', f: 'sad', t: "Yes. I think you have." },
            { s: 'jungwon', f: 'neutral', t: "Eat it before it goes stale. Please. That's all. That's the whole thing I'm asking." }
          ] }
        ] },
        { fragment: 'hoax-croissant' }
      ] },

      { at: 5, after: '11/7', lean: 'H', scene: [
        { place: "Iwatodai Strip · Yeobo's Cafe" },
        { n: "They came in all at once, the way weather comes in, four boys in navy blazers and one in a letterman jacket shouldering through the door in a single knot so that the bell didn't so much ding as have a small breakdown, and the counter, which had been quiet, was suddenly three deep in elbows." },
        { s: 'jake', f: 'happy', t: "Solar! Hi! Oh my gosh, look at you, you're working! Sunoo said you were working, I didn't believe him!" },
        { s: 'jake', f: 'surprised', t: "Wait, sorry, you don't... right. Sorry. Hi. I'm Jake. I'm very nice. Ask anyone." },
        { s: 'heeseung', f: 'neutral', t: "Okay. Everybody line up. One order each. We talked about this in the car." },
        { s: 'jay', f: 'neutral', t: "We didn't come in a car, hyung." },
        { s: 'heeseung', f: 'serious', t: "We talked about it on the WAY." },
        { n: "The tall one with the patient face, who seemed to be in charge in the way a sheepdog is in charge, tried to herd them into something like a line, and it lasted almost four seconds, and then the youngest, long-limbed and grinning, reached across the counter for a croissant waiting on a tray by the register, and somebody's hand came down on his wrist like a trap." },
        { s: 'jay', f: 'serious', t: "That's for a customer, dumbass. Not you." },
        { s: 'niki', f: 'sad', t: "I AM a customer. I'm paying. Heeseung hyung's paying." },
        { s: 'heeseung', f: 'surprised', t: "I'm WHAT?" },
        { n: "And the last of them, the one with a face like a statue somebody had been very careful with, stepped up to the counter, plucked the single flower out of the little vase by the register, and bowed to her with it, so deeply and so slowly that it was almost a threat." },
        { s: 'sunghoon', f: 'flustered', t: "It is especially my pleasure. As always." },
        { s: 'jay', f: 'neutral', t: "Dude. Pack it up already." },
        { choose: [
          { t: "(Take everyone's order at once, in the order they're standing.)", then: [
            { n: "She did it in one pass, left to right, five drinks and four croissants and something Niki invented on the spot, without writing any of it down, and read it all back to them, and they stared at her like she'd pulled a coin out of somebody's ear." },
            { s: 'heeseung', f: 'happy', t: "...Okay. She's better at this than you, Sunoo." },
            { s: 'sunoo', f: 'surprised', t: "I'm standing RIGHT HERE." },
            { stat: { proficiency: 1 } }
          ] },
          { t: "(Put Sunghoon's flower back in the vase, and take his order last.)", then: [
            { s: 'sunghoon', f: 'surprised', t: "...Last? Me?" },
            { s: 'niki', f: 'happy-2', t: "She did it. She finally did it. Somebody write down the date." },
            { s: 'jay', f: 'happy', t: "Best thing that's happened since we got here." },
            { stat: { kindness: 1 } }
          ] }
        ] },
        { n: "They took the big table by the window and immediately rearranged it, dragging over two more chairs than there were people, and Solar brought out the tray, and Niki took one bite of his croissant and announced to the entire cafe that the picture on the menu made the food look way better than it was, and Sunoo threw a napkin at him from behind the counter with real violence." },
        { s: 'jake', f: 'neutral', t: "Hey. Solar. Is he eating? Won. You'd notice. You always notice." },
        { n: "She looked. The corner booth was empty this afternoon, a red pen lying where he'd left it, lined up neatly with the edge of the table, waiting for him to come back and pretend he'd had lunch." },
        { choose: [
          { t: "He ate. I watched.", then: [
            { s: 'jake', f: 'happy-2', t: "She WATCHED. Guys. Guys, she made him eat in front of a witness." },
            { s: 'heeseung', f: 'sad', t: "...Thank you. Really." }
          ] },
          { t: "I'll make sure he does.", then: [
            { s: 'heeseung', f: 'neutral', t: "That's what we always say. And then he doesn't." },
            { s: 'jake', f: 'happy', t: "But she means it! She always means it. That's the scary part about her." }
          ] }
        ] }
      ] },

      { at: 7, after: '10/31', met: ['jihoon'], lean: 'H', scene: [
        { place: "Iwatodai Strip · Yeobo's Cafe" },
        { n: "She heard Jihoon from the end of the strip. Everybody on the strip heard Jihoon from the end of the strip. He came through the door of Yeobo's like a man arriving at a crime scene he had personally predicted, with four boys in navy blazers behind him and the bell ringing so hard it nearly came off its little hook." },
        { s: 'jihoon', f: 'serious', t: "SOL. Solar. What is this. What is THIS." },
        { s: 'jihoon', f: 'serious', t: "You work here? HERE? At Yang's friend's cafe? In an apron? With your name on a little tag in HIS FRIEND'S HANDWRITING?" },
        { s: 'sunoo', f: 'happy', t: "Hi, Jihoon! Welcome to the cafe!" },
        { s: 'jihoon', f: 'neutral', t: "Don't welcome me. I'm not welcome. I'm here on business." },
        { n: "The rest of them filed in after him. A small brown-haired boy who came straight for her around the counter like the counter was a suggestion. A boy with a sharp, bored face who looked around the cafe once and seemed to find it guilty of something. One who was already laughing at Jihoon, quietly, with real joy. And one bringing up the rear with a folded umbrella and a folder held to his chest, apologizing to the door frame as he edged past it." },
        { s: 'junkyu', f: 'happy', t: "Sol! Do you need some ice cream and hugs? I already did the hug. Jihoon has the ice cream money." },
        { s: 'asahi', f: 'neutral', t: "Oh, goodie. A cafe. Just what I needed." },
        { s: 'jaehyuk', f: 'sad', t: "I'm so sorry about him. About all of them. Good afternoon, Sunoo. Good afternoon, Solar." },
        { s: 'jihoon', f: 'serious', t: "Sol. Look at me. As your best friend, it is RIGHTFULLY MY JOB to inform you that you are working for the enemy." },
        { s: 'hyunsuk', f: 'happy', t: "Be less obvious, Jihoon." },
        { s: 'jihoon', f: 'serious', t: "Be less ugly, Hyunsuk." },
        { n: "He ordered at the top of his voice. He ordered five croissants and announced to the cafe at large that they were going to be mid, and Sunoo smiled at him with the serene, terrible patience of somebody who had been dealing with Park Jihoon for years, and Junkyu knocked over the tip jar reaching for the napkins, and Asahi watched the coins roll across the floor without lifting a finger, like a man watching a sunset." },
        { choose: [
          { t: "(Come around the counter and pick up the coins.)", then: [
            { n: "She got down on the floor for them. Jihoon was down there with her in about a second and a half, still complaining, still loud, picking up ten-yen coins and handing them to her one at a time, and his shoulder knocked hers, and he didn't move it." },
            { stat: { kindness: 1 } }
          ] },
          { t: "Jihoon. Sit down. I'll bring them.", then: [
            { n: "He sat. Instantly, without a word, in the middle of a sentence, like she'd pulled a plug, and the whole table turned to look at him, and Hyunsuk put his face in his hands, and Asahi said, very quietly, that this was the best day of his entire life." },
            { stat: { courage: 1 } }
          ] }
        ] },
        { n: "The croissants were not mid. He ate three. He ate the third one slowly, looking out the window at the strip while the others argued about something stupid around him, and when Solar came by with the water he didn't look up." },
        { s: 'jihoon', f: 'neutral', t: "You put too much ice in this." },
        { n: "It was exactly the right amount of ice. She could tell from his face that it was exactly the right amount, that she'd done it the way she always did it, the way he always complained about, and that the complaining was the point, that he'd needed to say it the way you need to say a password to get back into a building you used to live in." },
        { choose: [
          { t: "Then drink it slower.", then: [
            { s: 'jihoon', f: 'happy', t: "...Okay. Mean. Good. Thank God." },
            { s: 'junkyu', f: 'happy', t: "She's being mean to you, Jihoon! That's so good!" }
          ] },
          { t: "(Bring him a new one with less ice.)", then: [
            { s: 'jihoon', f: 'sad', t: "...No. No, the other one was fine." },
            { s: 'jihoon', f: 'neutral', t: "It was fine, Sol. It was fine. Go back to work. Don't be weird." }
          ] }
        ] },
        { n: "When they left, the bell had one last breakdown over the door, and Jihoon was the last one out, and he stopped in the doorway with the cold coming in around him and pointed at her across the whole cafe like he was calling a shot." },
        { s: 'jihoon', f: 'happy-2', t: "I'm walking you home after. Don't argue. It's my job." }
      ] }
    ]
  },

  /* ── Flower stall (Paulownia Mall) ── */
  flowers: {
    cast: { okada: 'Mrs. Okada', salaryman: 'Salaryman', girl: 'Little girl' },
    shifts: [
      [
        { place: 'Paulownia Mall · Flower Stall' },
        { n: "The flower stall was four buckets wide and one stool deep, wedged between the fountain and a shoe shop, and Mrs. Okada ran it from the stool with a pair of scissors on a ribbon around her neck and a bad knee she referred to only as \"the weather.\"" },
        { s: 'okada', t: "Buckets first. Fresh water, every one, all the way to the line. Flowers can't complain, so we do it for them." },
        { n: "The buckets were heavier than they looked and there were nineteen of them. By the last one her arms had opinions, and the carnations stood up straighter in the clean water like they'd been waiting all morning for someone to notice." },
        { choose: [
          { t: "(Trim every stem at an angle, the way she showed you.)", then: [
            { n: "Snip, turn, snip. Mrs. Okada watched the first ten and then stopped watching, which Solar understood was the highest compliment the stall had to offer." },
            { stat: { proficiency: 1 } }
          ] },
          { t: "(Bring her a cushion for the stool from the shoe shop.)", then: [
            { s: 'okada', t: "Hm. The shoe man gave you that? He's never given me anything but a look." },
            { n: "She sat on it anyway, carefully, and the weather in her knee seemed to ease a little for the rest of the afternoon." },
            { stat: { kindness: 1 } }
          ] }
        ] },
        { n: "When the mall lights came on she smelled like wet stems and lilies all the way home, and didn't mind." }
      ],
      [
        { place: 'Paulownia Mall · Flower Stall' },
        { n: "A salaryman came up to the stall at a near run, tie loose, and stood in front of the buckets with the face of a man defusing a bomb." },
        { s: 'salaryman', t: "It's our anniversary. It's today. I thought it was next week. What do I— what does someone buy, for ten years?" },
        { choose: [
          { t: "(Ask him what she likes, and build it from that.)", then: [
            { n: "She liked yellow, it turned out, and the sea, and things that didn't look too expensive because then she'd worry. Solar made a small loose bunch of freesia and one sprig of something blue, and Mrs. Okada wrapped it in plain paper without a word." },
            { s: 'salaryman', t: "That's her. That looks like her. How did you do that?" },
            { stat: { kindness: 1 } }
          ] },
          { t: "Roses. Ten. One for every year.", then: [
            { s: 'salaryman', t: "Ten. Yes. That's— yes. You're a genius." },
            { n: "He paid without looking at the price and ran for the train holding them up like a torch, and Mrs. Okada said roses were a coward's flower, but she said it fondly." },
            { stat: { charm: 1 } }
          ] }
        ] },
        { n: "For the rest of the shift Solar kept wondering whether he'd made it home in time. She decided he had." }
      ],
      [
        { place: 'Paulownia Mall · Flower Stall' },
        { n: "A little girl with a coin purse shaped like a frog counted out eighty yen on the counter and asked, very seriously, what flower meant sorry." },
        { s: 'girl', t: "I broke my brother's robot. On accident. Mostly on accident." },
        { choose: [
          { t: "(Give her a single white carnation, and don't take all the coins.)", then: [
            { n: "Solar slid back fifty of the eighty yen when Mrs. Okada wasn't looking. Mrs. Okada was looking. She said nothing, and later she put fifty yen of her own into Solar's apron pocket and said nothing about that either." },
            { stat: { kindness: 1 } }
          ] },
          { t: "(Help her write \"sorry\" on the little card, in big letters.)", then: [
            { s: 'girl', t: "He can't read yet. But he'll know. It's big." },
            { n: "It was very big. It took up the whole card and part of the back. The girl carried it away like a diploma." },
            { stat: { charm: 1 } }
          ] }
        ] },
        { s: 'okada', t: "Half of what we sell is sorry, you know. The other half is thank you. Nobody ever buys flowers just for themselves." },
        { s: 'okada', t: "Well. I do. But I'm the exception to most things." }
      ]
    ]
  }
};
