/* The strangers epilogue's phone (Nov 3 2026, Kat's notes after the Runners epilogue): the Contacts app's people (card lines,
   calls, message topics) and the group chat's handles. Data only (epilogue.js "The phone" documents the rules).
   The phones in this world are listened to ("not on here", "because of the phones"), so every call and topic stays on the
   surface: weather, food, the step, the tide, the coat. Nothing that matters is ever said on a line.
   Gates: story event ids from story-w1/w2/w3/end.js; hangout flags (epi-s-nowhere, epi-s-sari, epi-s-cards, epi-s-oh-cranes,
   epi-s-sh-tea) where a line leans on a hangout; `route` only on lines that lean on a route event.
   Inventions: the committee handles (chae_committee, yunjinnie, sakura_afk, kazuha_obake, eunchae.seen); Haechan's gum is
   anything but mint now; Mr. Oh's car radio stays off; the annex light going off and on once as Haechan's goodnight; Jungwon
   waits for her to hang up first; Mrs. Moon makes Jay wear two masks in the dust; Riki answers calls mid-run; Kazuha's
   grandmother says ghosts are mostly polite; Sakura's handheld; Eunchae keeps count of Solar's sentences. */
(() => {
  const R = ((window.FEMC_EPI_WORLDS ||= {}).strangers ||= {});
  const T = (R.texts ||= {});
  T.handles = Object.assign(T.handles || {}, {
    chaewon: 'chae_committee', yunjin: 'yunjinnie', sakura: 'sakura_afk', kazuha: 'kazuha_obake', eunchae: 'eunchae.seen'
  });
  R.phone = Object.assign(R.phone || {}, {
    order: ['haechan', 'jungwon', 'yunjin', 'appa', 'eomma', 'mroh', 'aunt', 'sunghoon', 'jay', 'niki', 'chaewon', 'sakura', 'kazuha', 'eunchae'],
    contacts: {

      /* ── Haechan ── */
      haechan: {
        rel: 'The Chairman’s · the annex at the bottom of the garden',
        known: [
          { t: 'Works for your father. Calls you agasshi; always has.' },
          { t: 'Sleeps in the annex at the bottom of the garden, and on its step when he’d rather.', events: ['epi-s-step'] },
          { t: 'He remembers the year. All of it.', events: ['epi-s-step'] },
          { t: 'Won’t say anything that matters on the phone. “Not on here.”', events: ['epi-s-quay'] },
          { t: 'Sings trot very well and on purpose, to make you suffer.', flags: ['epi-s-nowhere'] },
          { t: 'Knows the coast forecast by heart. He listens for the islands.', route: 'haechan', events: ['epi-s-hc-annex'] }
        ],
        calls: [
          { id: 'epi-s-call-haechan-1', after: '2/18', events: ['epi-s-step'], scene: [
            { n: 'It rings once. He picks up before the second ring and doesn’t say anything at all.' },
            { s: 'them', f: 'neutral', t: 'Agasshi.' },
            { s: 'solar', f: 'neutral', t: 'Where are you?' },
            { s: 'them', f: 'neutral', t: 'Where am I ever. Step.' },
            { choose: [
              { t: 'I can’t sleep.', then: [
                { s: 'them', f: 'neutral', t: 'Tide’s out. I know.' },
                { s: 'them', f: 'serious', t: 'Don’t talk on here. Window, if you want.' }
              ] },
              { t: 'Nothing. Just checking.', then: [
                { s: 'them', f: 'happy', t: 'Checking what. It’s a step, agasshi. Steps don’t go anywhere.' }
              ] }
            ] },
            { s: 'them', f: 'neutral', t: 'Go to sleep.' },
            { n: 'He hangs up first. At the bottom of the garden, the annex light goes off, and on again, once.' }
          ] },
          { id: 'epi-s-call-haechan-2', after: '2/28', events: ['epi-s-even'], scene: [
            { n: 'He answers chewing. Not mint; she can hear that it isn’t.' },
            { s: 'them', f: 'serious', t: 'If it’s about tonight, it’s in my head. Not on here.' },
            { s: 'solar', f: 'neutral', t: 'It’s not about tonight. Sing something.' },
            { s: 'them', f: 'surprised', t: '...On the phone? The Chairman pays for this line.' },
            { choose: [
              { t: 'Then make it worth it.', then: [
                { n: 'He sings half a chorus of a trot song down the line, very well and on purpose, with the little catch in the long note, and stops dead in the middle of a word.' }
              ] },
              { t: 'Please, Donghyuck-ah.', then: [
                { n: 'A long silence. Then, very quietly, the first four bars, not performing at all, and then he coughs and gets louder to cover it.' }
              ] }
            ] },
            { s: 'them', f: 'flustered', t: 'That’s all you get. That’s a whole week’s worth.' },
            { s: 'them', f: 'neutral', t: 'Go to bed, agasshi.' }
          ] }
        ],
        topics: [
          { id: 'epi-s-tp-haechan-1', label: 'The step', after: '2/18', events: ['epi-s-step'], msgs: [
            { me: 'are you cold on that step' }, { them: 'no' }, { them: 'its a good step' }, { them: 'my feet are on it' }
          ] },
          { id: 'epi-s-tp-haechan-2', label: 'The gum', flags: ['epi-s-nowhere'], msgs: [
            { me: 'what flavour is the gum' }, { them: 'not mint' }, { them: 'never mint. never again agasshi' }, { me: 'noted' }
          ] },
          { id: 'epi-s-tp-haechan-3', label: 'Say something in English', flags: ['epi-s-nowhere'], msgs: [
            { me: 'say something in english' }, { them: 'no' }, { them: 'dont know any' }, { them: 'it was a stroke. drop it' }
          ] },
          { id: 'epi-s-tp-haechan-4', label: 'The islands', route: 'haechan', events: ['epi-s-hc-annex'], msgs: [
            { me: 'how is it off socheong tonight' }, { them: 'moderate' }, { them: 'go to sleep' }, { them: '...slight later' }
          ] }
        ]
      },

      /* ── Jungwon ── */
      jungwon: {
        rel: 'The Yang house · the son',
        known: [
          { t: 'The Yang house’s son. Texts in full sentences and bows to cars.' },
          { t: 'He remembers the year too. He reads Japanese, and never said.', events: ['epi-s-step'] },
          { t: 'Speaks Mandarin with you when anything is worth saying. Never on the phone.', events: ['epi-s-step'] },
          { t: 'Touches his watch with two fingers when he’s thinking.', events: ['epi-s-clocks'] },
          { t: 'Makes tea properly. He warms the pot.', route: 'jungwon', events: ['epi-s-jw-tea'] }
        ],
        calls: [
          { id: 'epi-s-call-jungwon-1', after: '2/18', events: ['epi-s-step'], scene: [
            { s: 'them', f: 'neutral', t: 'Good evening. Is this a convenient time?' },
            { s: 'solar', f: 'happy', t: 'You don’t have to ask that.' },
            { s: 'them', f: 'happy', t: 'I was raised to ask it. I’ll stop when I’ve been told twice.' },
            { s: 'them', f: 'neutral', t: 'I’ve rung to say good night. That’s all I’ll say on the telephone. Sunghoon thinks I’ve rung to say a great deal more. He’s in the doorway, pretending to read.' },
            { choose: [
              { t: 'Good night, Jungwon.', then: [
                { s: 'them', f: 'happy', t: 'Good night. Please wear the grey scarf tomorrow. It’s the warm one.' }
              ] },
              { t: '*Say it in Mandarin.*', then: [
                { s: 'them', f: 'serious', t: 'Not on the telephone. Some things are better said in a garden.' }
              ] }
            ] },
            { n: 'He waits for her to hang up first. She can hear him waiting.' }
          ] },
          { id: 'epi-s-call-jungwon-2', after: '3/8', events: ['epi-s-clocks'], scene: [
            { s: 'them', f: 'neutral', t: 'Did you look at your watch?' },
            { s: 'solar', f: 'neutral', t: 'Yes.' },
            { s: 'them', f: 'serious', t: 'What did it say?' },
            { s: 'solar', f: 'neutral', t: 'Ten past eleven.' },
            { s: 'them', f: 'neutral', t: 'Mine too.' },
            { n: 'A pause on the line, very exact, as if he were letting a second hand go round once.' },
            { s: 'them', f: 'happy', t: 'Thank you. That’s all I needed. Our cook is still crossing herself; I’ve stopped telling her it was the electricity.' },
            { choose: [
              { t: 'Good. She deserves better than that.', then: [
                { s: 'them', f: 'happy', t: 'She does. I’ll tell her you said so. She’ll cross herself again.' }
              ] },
              { t: 'Look at it again before you sleep.', then: [
                { s: 'them', f: 'neutral', t: 'I always do.' }
              ] }
            ] }
          ] }
        ],
        topics: [
          { id: 'epi-s-tp-jungwon-1', label: 'The grey scarf', after: '2/19', events: ['epi-s-step'], msgs: [
            { me: 'i wore the grey scarf' }, { them: 'I noticed. Thank you.' }, { them: 'It suits the wind.' }
          ] },
          { id: 'epi-s-tp-jungwon-2', label: 'A word in Mandarin', events: ['epi-s-step'], msgs: [
            { me: 'how do you say gull in mandarin' }, { them: '海鸥。' }, { them: 'May I ask why?' }, { me: 'no reason' }, { them: 'Then I’ll assume a good one.' }
          ] },
          { id: 'epi-s-tp-jungwon-3', label: 'The dust', events: ['epi-s-dust'], msgs: [
            { me: 'are you wearing a mask' }, { them: 'Sunghoon has seen to it. He brought four and stood there until I chose one.' }, { them: 'Please wear yours. The one with your name on it.' }
          ] },
          { id: 'epi-s-tp-jungwon-4', label: 'Tea, properly', route: 'jungwon', events: ['epi-s-jw-tea'], msgs: [
            { me: 'mrs bang says you warmed the pot' }, { them: 'She said that to you?' }, { them: 'I’ll consider it a review. I’ll frame it.' }
          ] }
        ]
      },

      /* ── Yunjin ── */
      yunjin: {
        rel: 'Your best friend · the other side of your wall',
        known: [
          { t: 'Saved in your phone as “wifey.” She calls you that back.' },
          { t: 'Sleeps in the room on the other side of your wall, with the light on.', events: ['epi-s-kitchen'] },
          { t: 'Two knocks through the wall means alive. You’ve done it since you were fifteen.', events: ['epi-s-kitchen'] },
          { t: 'She was in Japan for the year as well. She lived with you.', events: ['epi-s-alone'] },
          { t: 'Says “I’m not being spooky” right before she’s a little spooky.', events: ['epi-s-dust'] }
        ],
        calls: [
          { id: 'epi-s-call-yunjin-1', after: '2/17', events: ['epi-s-kitchen'], scene: [
            { n: 'She hears it twice: once in the phone and once, a breath later, through the wall.' },
            { s: 'them', f: 'happy', t: 'Why are we on the phone. I’m literally, like, a meter away.' },
            { s: 'solar', f: 'happy', t: 'You picked up.' },
            { s: 'them', f: 'neutral', t: 'Obviously I picked up. Okay. Fine. I like it. It’s a sleepover with extra steps.' },
            { choose: [
              { t: 'What are you watching?', then: [
                { s: 'them', f: 'neutral', t: 'A man with amnesia. Again. Don’t judge me, I’ve had a year.' }
              ] },
              { t: 'Talk to me till I’m sleepy.', then: [
                { s: 'them', f: 'happy', t: 'Okay. So. Mrs. Bang says I’m too thin. She says it like it’s my fault. She put an extra egg in my rice like a threat.' }
              ] }
            ] },
            { s: 'them', f: 'happy', t: 'Night, wifey. Knock if you need me.' },
            { n: 'Two knocks come through the wall before the line goes dead.' }
          ] },
          { id: 'epi-s-call-yunjin-2', after: '3/4', events: ['epi-s-dust'], scene: [
            { s: 'them', f: 'serious', t: 'I’m not going to talk about it. On the phone. I’m not being spooky.' },
            { s: 'them', f: 'neutral', t: 'I’m just going to breathe at you for a minute. Okay?' },
            { s: 'solar', f: 'sad', t: 'Okay.' },
            { n: 'So she does. Through the phone, and very faintly through the wall, Yunjin breathing slow on purpose, so Solar’s breath comes round to match it without being asked.' },
            { choose: [
              { t: 'Thank you.', then: [
                { s: 'them', f: 'flustered', t: 'Don’t thank me, it’s literally just air. It’s free.' }
              ] },
              { t: 'Did you eat?', then: [
                { s: 'them', f: 'happy', t: 'Did YOU eat. Don’t answer, I know. There’s soup. Mrs. Bang made it angry.' }
              ] }
            ] },
            { s: 'them', f: 'neutral', t: 'My light’s on. If you want it.' }
          ] }
        ],
        topics: [
          { id: 'epi-s-tp-yunjin-1', label: 'Chaewon’s spreadsheet', events: ['epi-s-girls'], msgs: [
            { me: 'what color are you on the spreadsheet' }, { them: 'yellow' }, { them: 'WHY am i yellow' }, { them: 'ur purple. ur always purple. its rigged' }
          ] },
          { id: 'epi-s-tp-yunjin-2', label: 'The egg sandwiches', events: ['epi-s-alone'], msgs: [
            { me: 'i miss the convenience store egg sandwiches' }, { them: 'DONT' }, { them: 'i dream about them sol' }, { them: 'not talking about it on here. not bc spooky. bc ill cry' }
          ] },
          { id: 'epi-s-tp-yunjin-3', label: 'Tomorrow', after: '3/10', events: ['epi-s-sunday'], msgs: [
            { me: 'what are we doing tomorrow' }, { them: 'something' }, { them: 'together. thats the whole plan' }, { them: 'dont make it complicated ur so complicated' }
          ] }
        ]
      },

      /* ── Appa ── */
      appa: {
        rel: 'Your father · the Chairman',
        known: [
          { t: 'Up at half past four with the paper, every morning of your life.' },
          { t: 'Texts in lowercase. Always starts with “sol.” Signs off as appa.' },
          { t: 'At night, he sits on the seventh stair.', events: ['epi-s-stair'] },
          { t: 'Does the crossword in blue ballpoint, in small square capitals.', flags: ['epi-s-sari'] },
          { t: 'Thinks he sings trot better than anybody in the car.', route: 'family', events: ['epi-s-fam-trot'] }
        ],
        calls: [
          { id: 'epi-s-call-appa-1', after: '2/18', events: ['epi-s-home'], scene: [
            { n: 'He answers on the first ring, as if he’d had the phone in his hand already.' },
            { s: 'them', f: 'neutral', t: 'Sol-ah.' },
            { s: 'solar', f: 'neutral', t: 'Appa. It’s nothing. Where are you?' },
            { s: 'them', f: 'neutral', t: 'Kitchen. Mrs. Bang says the juk’s still warm.' },
            { choose: [
              { t: 'I ate it. All of it.', then: [
                { s: 'them', f: 'happy', t: 'Good. Then she’ll only make one more pot.' }
              ] },
              { t: 'I’m not hungry.', then: [
                { s: 'them', f: 'neutral', t: 'Then come down and not be hungry here. There’s a chair.' }
              ] }
            ] },
            { n: 'He doesn’t hang up. Neither does she. The line hums with the kitchen: a kettle, the radiator, somebody’s slippers.' },
            { s: 'them', f: 'happy', t: 'Appa’s up. Go to sleep.' }
          ] },
          { id: 'epi-s-call-appa-2', after: '3/6', events: ['epi-s-tide'], scene: [
            { s: 'them', f: 'serious', t: 'Sol. Where are you.' },
            { s: 'solar', f: 'neutral', t: 'Home. My room.' },
            { s: 'them', f: 'neutral', t: 'Good.' },
            { s: 'them', f: 'neutral', t: 'Radio says weather. Stay in tomorrow.' },
            { choose: [
              { t: 'I will, Appa.', then: [
                { s: 'them', f: 'happy', t: 'Good.' }
              ] },
              { t: 'Are you staying in too?', then: [
                { s: 'them', f: 'neutral', t: 'Appa’s home.' },
                { n: 'Which isn’t an answer, and is the only one he has ever given.' }
              ] }
            ] },
            { s: 'them', f: 'neutral', t: 'Tide turns at four. Kitchen light’s on.' }
          ] }
        ],
        topics: [
          { id: 'epi-s-tp-appa-1', label: 'Up early', after: '2/18', events: ['epi-s-home'], msgs: [
            { me: 'appa you’re up early' }, { them: 'always' }, { them: 'go back to sleep sol' }
          ] },
          { id: 'epi-s-tp-appa-2', label: 'A clue for the crossword', flags: ['epi-s-sari'], msgs: [
            { me: 'i found a clue youd like' }, { them: 'sol' }, { them: 'appa doesnt need help' }, { them: '...what is it' }
          ] },
          { id: 'epi-s-tp-appa-3', label: 'The coast road', route: 'family', events: ['epi-s-fam-trot'], msgs: [
            { me: 'good song the other night' }, { them: 'good singer' }, { them: 'appa means appa' }
          ] }
        ]
      },

      /* ── Eomma ── */
      eomma: {
        rel: 'Your mother',
        known: [
          { t: 'Texts in full sentences, with full stops.' },
          { t: 'Holds the fever for you in front of the aunts, without a flicker.', events: ['epi-s-eomma'] },
          { t: 'The grey coat is the warm one. The black one is the pretty one.', events: ['epi-s-eomma'] },
          { t: 'Keeps the orchids in the sunroom, the only warm room that doesn’t smell of food.', flags: ['epi-s-cards'] }
        ],
        calls: [
          { id: 'epi-s-call-eomma-1', after: '2/19', events: ['epi-s-eomma'], scene: [
            { s: 'them', f: 'neutral', t: 'Solar. Your aunt Hyesun has telephoned again. I told her you were resting.' },
            { s: 'them', f: 'neutral', t: 'You are resting.' },
            { s: 'solar', f: 'neutral', t: 'Yes, Eomma.' },
            { s: 'them', f: 'happy', t: 'Good. Then I didn’t lie.' },
            { choose: [
              { t: 'Thank you.', then: [
                { s: 'them', f: 'neutral', t: 'One doesn’t thank people for the truth.' }
              ] },
              { t: 'What did she say?', then: [
                { s: 'them', f: 'neutral', t: 'A great deal. Most of it about the expressway.' }
              ] }
            ] },
            { s: 'them', f: 'neutral', t: 'If you go out, wear the grey coat.' }
          ] },
          { id: 'epi-s-call-eomma-2', after: '3/4', events: ['epi-s-dust'], scene: [
            { s: 'them', f: 'neutral', t: 'There are masks by the door with names on them. Mrs. Bang wrote them.' },
            { s: 'them', f: 'serious', t: 'Please wear the one with your name. Not your father’s. His is too big for you.' },
            { s: 'solar', f: 'neutral', t: 'I will.' },
            { choose: [
              { t: 'Are you worried, Eomma?', then: [
                { s: 'them', f: 'neutral', t: 'I am arranging orchids.' },
                { n: 'Somewhere behind her, very faintly, the brass mister, twice.' }
              ] },
              { t: 'Are you wearing one?', then: [
                { s: 'them', f: 'happy', t: 'I am not going out. That is what the inside is for.' }
              ] }
            ] },
            { s: 'them', f: 'neutral', t: 'Come home before dark.' }
          ] }
        ],
        topics: [
          { id: 'epi-s-tp-eomma-1', label: 'The pears', after: '2/19', events: ['epi-s-eomma'], msgs: [
            { me: 'i ate a pear where mrs bang could see' }, { them: 'She told me. She was very pleased.' }, { them: 'She has told the kitchen.' }
          ] },
          { id: 'epi-s-tp-eomma-2', label: 'The orchids', flags: ['epi-s-cards'], msgs: [
            { me: 'how are the orchids' }, { them: 'They are well.' }, { them: 'Thank you for asking about them. Nobody does.' }
          ] },
          { id: 'epi-s-tp-eomma-3', label: 'The masks', events: ['epi-s-dust'], msgs: [
            { me: 'wore the mask with my name on it' }, { them: 'Thank you, Solar.' }, { them: 'Mrs. Bang will be pleased. She wrote it twice, to be sure.' }
          ] }
        ]
      },

      /* ── Mr. Oh ── */
      mroh: {
        rel: 'The Lee house’s driver',
        known: [
          { t: 'Hands at ten and two. Thirty years, never a corner taken fast.' },
          { t: 'Texts one line at a time. Usually “Downstairs.”', events: ['epi-s-home'] },
          { t: 'Once drove you round the harbor road at two in the morning till you slept.', flags: ['epi-s-oh-cranes'] }
        ],
        calls: [
          { id: 'epi-s-call-mroh-1', after: '2/18', events: ['epi-s-home'], scene: [
            { s: 'them', f: 'neutral', t: 'Mr. Oh.' },
            { s: 'solar', f: 'neutral', t: 'It’s me. Is the car—' },
            { s: 'them', f: 'neutral', t: 'Warm.' },
            { s: 'solar', f: 'neutral', t: 'Where are we going?' },
            { s: 'them', f: 'neutral', t: 'Wherever you’re going.' },
            { s: 'them', f: 'neutral', t: 'Coat.' },
            { n: 'The line goes dead. Downstairs, an engine turns over.' }
          ] }
        ],
        topics: [
          { id: 'epi-s-tp-mroh-1', label: 'The cranes', flags: ['epi-s-oh-cranes'], msgs: [
            { me: 'thank you for going round again' }, { them: 'Again whenever you like.' }
          ] },
          { id: 'epi-s-tp-mroh-2', label: 'The inland road', route: 'jungwon', events: ['epi-s-tide'], msgs: [
            { me: 'jungwon says youre taking the inland road' }, { them: 'I am.' }, { them: 'Longer. Better.' }
          ] }
        ]
      },

      /* ── Aunt Hyesun ── */
      aunt: {
        rel: 'Your aunt · rings for every holiday',
        known: [
          { t: 'Doesn’t need anyone else on a phone call. She can run both halves.', events: ['epi-s-eomma'] },
          { t: 'Your uncle had his knee done at the big hospital by the station. She’s still angry.', events: ['epi-s-eomma'] }
        ],
        calls: [
          { id: 'epi-s-call-aunt-1', after: '2/20', events: ['epi-s-eomma'], scene: [
            { s: 'them', f: 'happy', t: 'Sol-ah! There she is! You sound better. You sound much better. You sounded like a crow before, a crow, I said to your uncle—' },
            { s: 'solar', f: 'neutral', t: 'I’m much better, Auntie.' },
            { s: 'them', f: 'neutral', t: 'Don’t talk. Don’t talk, you’ll undo it. Is there ginger? Tell Mrs. Bang ginger.' },
            { choose: [
              { t: 'There’s ginger, Auntie.', then: [
                { s: 'them', f: 'happy', t: 'Good! Good. And jujube. Ginger and jujube. Your mother won’t think of jujube.' }
              ] },
              { t: 'I missed you at Seollal.', then: [
                { s: 'them', f: 'sad', t: 'Aigoo. Listen to her. She misses me. Nobody misses me, Sol-ah, your uncle doesn’t miss me when I’m in the next room.' }
              ] }
            ] },
            { s: 'them', f: 'happy', t: 'I won’t keep you. Rest! Eat! Don’t talk! Is your mother there? Never mind. Tell her I rang.' },
            { n: 'She rings off before Solar can say goodbye, which is how she always rings off.' }
          ] }
        ],
        topics: [
          { id: 'epi-s-tp-aunt-1', label: 'The card', flags: ['epi-s-cards'], msgs: [
            { me: 'did my card come, auntie' }, { them: 'It came! Your mother’s hand is so beautiful. I mean yours. Your hand.' }, { them: 'Is your fever gone? Don’t answer. Rest.' }
          ] }
        ]
      },

      /* ── Park Sunghoon ── */
      sunghoon: {
        rel: 'The Yang house · Jungwon’s',
        events: ['epi-s-trio'],
        known: [
          { t: 'Jungwon’s. Stands facing the traffic as if it were a door.', events: ['epi-s-trio'] },
          { t: 'Texts in full sentences. Two at most.', events: ['epi-s-gun'] }
        ],
        noCall: 'He’d pick up. He wouldn’t say anything.',
        topics: [
          { id: 'epi-s-tp-sunghoon-1', label: 'Jungwon', events: ['epi-s-trio'], msgs: [
            { me: 'is he ok' }, { them: 'Yes.' }, { them: 'Ask him.' }
          ] },
          { id: 'epi-s-tp-sunghoon-2', label: 'The tea', flags: ['epi-s-sh-tea'], msgs: [
            { me: 'did you drink the tea' }, { them: 'Yes.' }, { them: 'Don’t tell him.' }
          ] }
        ]
      },

      /* ── Jay ── */
      jay: {
        rel: 'The Yang house · the kitchen',
        events: ['epi-s-trio'],
        known: [
          { t: 'In the Yang kitchen, under Mrs. Moon, who stirs against his advice.', events: ['epi-s-trio'] },
          { t: 'Thinks everything is chemistry. Salt is a door.', events: ['epi-s-trio'] }
        ],
        calls: [
          { id: 'epi-s-call-jay-1', after: '2/22', events: ['epi-s-trio'], scene: [
            { s: 'them', f: 'neutral', t: 'Yang kitchen. Is this about the plate? It’s about the plate.' },
            { s: 'solar', f: 'happy', t: 'It’s not about the plate.' },
            { s: 'them', f: 'neutral', t: 'It’s always about the plate. A plate goes over, a dish comes back. It never ends. That’s not neighbors, that’s a closed loop.' },
            { choose: [
              { t: 'What’s Mrs. Moon making?', then: [
                { s: 'them', f: 'sad', t: 'Something she’s stirring. Which she shouldn’t be. I’ve said. She looked at me and stirred harder.' }
              ] },
              { t: 'You sound tired.', then: [
                { s: 'them', f: 'neutral', t: 'Stock. You skim it and you skim it. The guy who gets bored of skimming is the guy whose stock goes cloudy.' }
              ] }
            ] },
            { s: 'them', f: 'happy', t: 'Tell your Mrs. Bang the yakgwa was correct. That’s the highest word I’ve got.' }
          ] }
        ],
        topics: [
          { id: 'epi-s-tp-jay-1', label: 'The dust', events: ['epi-s-dust'], msgs: [
            { me: 'are you wearing a mask over there' }, { them: 'mrs moon has me in two' }, { them: 'i look like a surgeon who lost' }
          ] },
          { id: 'epi-s-tp-jay-2', label: 'A cooking question', events: ['epi-s-trio'], after: '2/22', msgs: [
            { me: 'why does rice go hard in the fridge' }, { them: 'starch retrogradation' }, { them: 'it’s remembering what it was before you cooked it' }, { them: 'reheat it with a splash of water. forgive it' }
          ] }
        ]
      },

      /* ── Riki ── */
      niki: {
        rel: 'The Yang house · the runner',
        events: ['epi-s-trio'],
        known: [
          { t: 'Calls you noona. Is always, officially, very busy running.', events: ['epi-s-girls'] },
          { t: 'Asks about the Japanese girls from the café. Not as a thing.', events: ['epi-s-girls'] }
        ],
        calls: [
          { id: 'epi-s-call-niki-1', after: '2/23', events: ['epi-s-girls'], scene: [
            { n: 'He answers out of breath, feet slapping on pavement, a horn somewhere behind him.' },
            { s: 'them', f: 'happy', t: 'Noona! Can’t talk. Running.' },
            { s: 'solar', f: 'happy', t: 'You picked up.' },
            { s: 'them', f: 'flustered', t: 'I always pick up for you. That’s not a thing. That’s manners.' },
            { choose: [
              { t: 'Slow down, Riki.', then: [
                { s: 'them', f: 'neutral', t: 'Can’t. If I slow down I have to think. I’m very busy, noona.' }
              ] },
              { t: 'Where are you running to?', then: [
                { s: 'them', f: 'happy', t: 'Everywhere. It’s my job. Bye!' }
              ] }
            ] },
            { n: 'The line goes dead mid-step.' }
          ] }
        ],
        topics: [
          { id: 'epi-s-tp-niki-1', label: 'Running', events: ['epi-s-girls'], msgs: [
            { me: 'where are you running today' }, { them: 'everywhere noona' }, { them: 'its my job' }, { them: 'and the café. on the way. coincidence' }
          ] },
          { id: 'epi-s-tp-niki-2', label: 'Wear a mask', events: ['epi-s-dust'], msgs: [
            { me: 'wear a mask when you run' }, { them: 'cant breathe in a mask noona' }, { them: 'ok fine' }, { them: 'on my chin' }
          ] }
        ]
      },

      /* ── The committee ── */
      chaewon: {
        rel: 'The daeboreum committee · its chair',
        events: ['epi-s-girls'],
        known: [
          { t: 'Made the daeboreum committee, so it’s official.', events: ['epi-s-girls'] },
          { t: 'Makes spreadsheets for outings. Laminates them, sometimes.', events: ['epi-s-girls'] }
        ],
        calls: [
          { id: 'epi-s-call-chaewon-1', after: '2/22', until: '2/24', events: ['epi-s-girls'], scene: [
            { s: 'them', f: 'neutral', t: 'Solar. Good. I’m checking attendance. You’re coming Sunday.' },
            { s: 'solar', f: 'neutral', t: 'Is that a question?' },
            { s: 'them', f: 'neutral', t: 'No. Meet at six at the Wolmido end. Wear something warm. Everyone home by ten. It’s in the plan.' },
            { choose: [
              { t: 'I’ll be there.', then: [
                { s: 'them', f: 'happy', t: 'Good. You’re on time already. I can tell. Yunjin is not on time. Yunjin is a column of her own.' }
              ] },
              { t: 'What if I’m late?', then: [
                { s: 'them', f: 'serious', t: 'You won’t be. There’s a margin built in. There’s a margin for the margin.' }
              ] }
            ] },
            { s: 'them', f: 'neutral', t: 'Okay. Next. Bye.' }
          ] }
        ],
        topics: [
          { id: 'epi-s-tp-chaewon-1', label: 'The plan', events: ['epi-s-girls'], until: '2/24', msgs: [
            { me: 'do i need to bring anything sunday' }, { them: 'a warm hat. a wish. a pen to write the wish' }, { them: 'i have spare pens. obviously' }
          ] },
          { id: 'epi-s-tp-chaewon-2', label: 'Committee business', events: ['epi-s-moon'], msgs: [
            { me: 'is the committee still meeting now daeboreum is over' }, { them: 'the committee is permanent' }, { them: 'it was always permanent' }
          ] }
        ]
      },
      sakura: {
        rel: 'The daeboreum committee · deadpan',
        events: ['epi-s-girls'],
        known: [
          { t: 'Says “respect” to things, and means it about once a month.', events: ['epi-s-girls'] },
          { t: 'Hit diamond. Nobody is to congratulate her.', after: '2/26', events: ['epi-s-moon'] }
        ],
        noCall: 'She doesn’t pick up calls. Nobody does anymore, she says.',
        topics: [
          { id: 'epi-s-tp-sakura-1', label: 'What she’s playing', events: ['epi-s-girls'], msgs: [
            { me: 'what are you playing' }, { them: 'a game' }, { them: 'you wouldn’t like it' }, { them: 'you’d win' }
          ] },
          { id: 'epi-s-tp-sakura-2', label: 'Diamond (privately)', after: '2/26', events: ['epi-s-moon'], msgs: [
            { me: 'congratulations. privately' }, { them: '...thanks' }, { them: 'don’t tell eunchae you texted me' }
          ] }
        ]
      },
      kazuha: {
        rel: 'The daeboreum committee · believes in ghosts',
        events: ['epi-s-girls'],
        known: [
          { t: 'Believes in ghosts. Asks everyone whether they do.', events: ['epi-s-girls'] },
          { t: 'Her grandmother says a lot of things. She is usually right.', after: '3/3', events: ['epi-s-moon'] }
        ],
        noCall: 'She’d tell you a ghost story. It’s late.',
        topics: [
          { id: 'epi-s-tp-kazuha-1', label: 'Ghosts', events: ['epi-s-girls'], msgs: [
            { me: 'do you really believe in ghosts' }, { them: 'yes ☺' }, { them: 'they’re mostly polite. my grandmother says you only have to say good morning to them' }
          ] },
          { id: 'epi-s-tp-kazuha-2', label: 'The dust', events: ['epi-s-dust'], msgs: [
            { me: 'are you staying in for the dust' }, { them: 'yes. grandmother’s orders' }, { them: 'i’m saying good morning to the window just in case ☺' }
          ] }
        ]
      },
      eunchae: {
        rel: 'The daeboreum committee · notices things',
        events: ['epi-s-girls'],
        known: [
          { t: 'Notices things. It is, apparently, her whole personality.', events: ['epi-s-girls'] },
          { t: 'Keeps count of how many sentences you say.', events: ['epi-s-girls'] }
        ],
        noCall: 'She’d screenshot the call log.',
        topics: [
          { id: 'epi-s-tp-eunchae-1', label: 'The count', events: ['epi-s-girls'], msgs: [
            { me: 'how many sentences am i on now' }, { them: 'SIX with this one' }, { them: 'i have a spreadsheet. chaewon isn’t the only one' }
          ] }
        ]
      }
    }
  });
})();
