/* The Stay epilogue, the days pass: texts and phone lines for the new scenes (Nov 5 2026; DO-NOT-OPEN-stay-epilogue-
   expansion.md section 5). Data only; loaded with the world last (epilogue.js WORLDS.stay.files: after phone, and after
   phone alphabetically too, which is the checker's order). Pushes onto R.texts (people.js's threads) and onto the phone
   contacts phone.js defines; nothing is replaced.
   Dated texts (thread · date · slot · gates):
     epi-st-tx-mitsuru-thirtieth   mitsuru · 3/30 · after                 dinner tonight; attendance optional (it isn't)
     epi-st-tx-fuuka-extra         fuuka   · 3/27 · evening · hanami      the extra box is in the fridge; nobody has to eat it
     epi-st-tx-sees-clocks         sees    · 4/3 · evening · clocks       Junpei's watch says 2:31 and he doesn't trust it
     epi-st-tx-yukari-rota         yukari  · 4/4 · after · flag told      "fuuka and i have tonight. mitsuru made a chart"
     epi-st-tx-aki-lastrun            akihiko · 4/5 · late · route akihiko   river at five? (story.js epi-st-last-day: she ran
                                                                          with him at five on 4/6)
     epi-st-tx-sees-third          sees    · 4/6 · evening · last-day     Ken's two alarms; Junpei's blazer
   Ambient: epi-st-am-cake (junpei, 3/28-3/31, flag epi-st-cake), epi-st-am-ken-door (ken, 4/1-4/5, events charms),
     epi-st-am-aigis-petals (sees, 4/2-4/5).
   Phone (phone.js contacts, appended): known lines for mitsuru (the thirtieth), yukari (the watch, told), ken (the nail
     brush, kept), aigis (the wave); topics junpei 'The cake' (flag epi-st-cake), fuuka 'Jal ja' (flag epi-st-jalja: she practises),
     ken 'Eight-ten' (4/6), mitsuru 'The whiteboard' (told, 4/4).
   Flags read: epi-st-cake, epi-st-jalja (people-days.js), epi-st-told / epi-st-kept (story.js), epi-route-akihiko. No flag set; nothing
     here changes closeness, a stat or a route (texts and topics never do).
   Inventions: Aigis's petal count; Junpei's watch; Yukari's chart line; Ken's second alarm "for Solar-san". */
(() => {
  const R = ((window.FEMC_EPI_WORLDS ||= {}).stay ||= {});
  const T = (R.texts ||= {});
  (T.texts ||= []).push(
    { id: 'epi-st-tx-mitsuru-thirtieth', thread: 'mitsuru', date: '3/30', slot: 'after', msgs: [
      { from: 'mitsuru', t: 'I have ordered dinner for tonight. Eight, and something without salt for Koromaru.' },
      { from: 'mitsuru', t: 'Attendance is optional.' },
      { from: 'mitsuru', t: 'I would prefer it were not.' }
    ], reply: [
      { t: "i'll be there", then: [{ from: 'mitsuru', t: 'Thank you. Seven o’clock. The tonkatsu place.' }] },
      { t: "is this because of tonight", then: [{ from: 'mitsuru', t: 'It is because I am hungry.' }, { from: 'mitsuru', t: 'Seven o’clock.' }] }
    ] },
    { id: 'epi-st-tx-fuuka-extra', thread: 'fuuka', date: '3/27', slot: 'evening', events: ['epi-st-hanami'], msgs: [
      { from: 'fuuka', t: 'i brought the extra box home' },
      { from: 'fuuka', t: "it's in the fridge. nobody has to eat it. i just didn't want to throw it away" }
    ], reply: [
      { t: "leave it there as long as you want", then: [{ from: 'fuuka', t: 'ok' }, { from: 'fuuka', t: 'thank you senpai. i was worried that was weird' }] },
      { t: "i'll have it for breakfast", then: [{ from: 'fuuka', t: 'really??' }, { from: 'fuuka', t: "it's the best one. the gold side is up" }] }
    ] },
    { id: 'epi-st-tx-sees-clocks', thread: 'sees', date: '4/3', slot: 'evening', events: ['epi-st-clocks'], msgs: [
      { from: 'junpei', t: 'my watch says 2:31 now' },
      { from: 'junpei', t: 'it said 2:31 an hour ago too' },
      { from: 'junpei', t: 'i dont trust it' },
      { from: 'ken', t: 'Mine is fine. I checked it against the station clock.' },
      { from: 'aigis', t: 'Every clock in the building now agrees within four seconds. I am monitoring the four seconds.' }
    ], reply: [
      { t: "junpei your watch is just broken", then: [{ from: 'junpei', t: 'it is NOT broken. it is haunted. theres a difference' }, { from: 'yukari', t: 'there is no difference' }] },
      { t: "(Leave it on read.)", silent: true, then: [{ from: 'akihiko', t: 'everyone sleep' }, { from: 'akihiko', t: 'or dont. but stay in the building' }] }
    ] },
    { id: 'epi-st-tx-yukari-rota', thread: 'yukari', date: '4/4', slot: 'after', flag: 'epi-st-told', msgs: [
      { from: 'yukari', t: 'fuuka and i have tonight' },
      { from: 'yukari', t: "dont argue. mitsuru made a chart. there's a chart" },
      { from: 'yukari', t: 'what snacks do you want' }
    ], reply: [
      { t: "the shrimp chips", then: [{ from: 'yukari', t: 'done' }, { from: 'yukari', t: "i'm also bringing the good blanket. the one junpei says is his" }] },
      { t: "you don't have to", then: [{ from: 'yukari', t: 'i know' }, { from: 'yukari', t: "that's why it counts. snacks. pick" }] }
    ] },
    { id: 'epi-st-tx-aki-lastrun', thread: 'akihiko', date: '4/5', slot: 'late', flag: 'epi-route-akihiko', msgs: [
      { from: 'akihiko', t: 'river at five?' },
      { from: 'akihiko', t: "you don't have to talk. i just want to run next to you" }
    ], reply: [
      { t: "five.", then: [{ from: 'akihiko', t: "i'll be at the door" }] },
      { t: "i'll be slow", then: [{ from: 'akihiko', t: "good. i'll be slow too" }, { from: 'akihiko', t: "don't tell anyone" }] }
    ] },
    { id: 'epi-st-tx-sees-third', thread: 'sees', date: '4/6', slot: 'evening', events: ['epi-st-last-day'], msgs: [
      { from: 'ken', t: 'I have set two alarms for tomorrow. One is for Solar-san.' },
      { from: 'junpei', t: 'third years tomorrow. blazer on at all times. yuka-tan made it a rule' },
      { from: 'yukari', t: 'it is a LAW' },
      { from: 'fuuka', t: 'goodnight everyone!!' },
      { from: 'aigis', t: 'Goodnight. See you tomorrow.' }
    ], reply: [
      { t: "goodnight", then: [{ from: 'fuuka', t: '!!!' }, { from: 'junpei', t: 'night sol. eight ten. dont be late, ken will make a chart' }] },
      { t: "(Leave it on read.)", silent: true, then: [{ from: 'mitsuru', t: 'Goodnight, all of you.' }] }
    ] }
  );
  (T.ambient ||= []).push(
    { id: 'epi-st-am-cake', thread: 'junpei', from: '3/28', to: '3/31', flag: 'epi-st-cake', msgs: [
      { from: 'junpei', t: 'ok so nobody tell mitsuru senpai she had seconds' },
      { from: 'junpei', t: 'she had seconds of the cake. two slices. medium' }
    ], reply: [
      { t: "she was right there junpei", then: [{ from: 'junpei', t: "she can't prove anything" }, { from: 'junpei', t: 'there are no crumbs. i licked the board' }] },
      { t: "i saw nothing", then: [{ from: 'junpei', t: 'a true friend' }, { from: 'junpei', t: 'co-morale for life' }] }
    ] },
    { id: 'epi-st-am-ken-door', thread: 'ken', from: '4/1', to: '4/5', events: ['epi-st-charms'], msgs: [
      { from: 'ken', t: 'Koromaru is outside your door again.' },
      { from: 'ken', t: 'I brought him his blanket. He is fine. He wanted me to tell you he is there.' }
    ], reply: [
      { t: "tell him thank you", then: [{ from: 'ken', t: 'I told him. His tail did the thing.' }] },
      { t: "you can both come in", then: [{ from: 'ken', t: 'He says no. He says he is on the door.' }, { from: 'ken', t: 'I am going to bed. Goodnight Solar-san.' }] }
    ] },
    { id: 'epi-st-am-aigis-petals', thread: 'sees', from: '4/2', to: '4/5', msgs: [
      { from: 'aigis', t: 'Petal count on the front step this morning: 412.' },
      { from: 'junpei', t: 'WHY' },
      { from: 'aigis', t: 'Someone should.' }
    ], reply: [
      { t: "thank you aigis", then: [{ from: 'aigis', t: 'You are welcome. Tomorrow I estimate six hundred.' }] },
      { t: "(Leave it on read.)", silent: true, then: [] }
    ] }
  );

  // Phone contacts (phone.js): append, never replace.
  const C = (R.phone ||= {}).contacts ||= {};
  const more = (id, key, list) => { const c = (C[id] ||= {}); (c[key] ||= []).push(...list); };
  more('mitsuru', 'known', [
    { t: 'Ordered dinner for everyone on the thirtieth. Looked at the window eleven times. Counted.', events: ['epi-st-thirtieth'] }
  ]);
  more('yukari', 'known', [
    { t: 'Took the first watch in her room at midnight. Brought snacks. Didn’t let go of her sleeve.', events: ['epi-st-blue'], flags: ['epi-st-told'] }
  ]);
  more('ken', 'known', [
    { t: 'Handed her the nail brush at six in the morning and didn’t ask. Says he’s choosing not to tell.', events: ['epi-st-blue'], flags: ['epi-st-kept'] }
  ]);
  more('aigis', 'known', [
    { t: 'Has never waved goodbye to anyone. Has catalogued nine kinds of wave on the dorm’s street.', events: ['epi-st-last-day'] }
  ]);
  more('junpei', 'topics', [
    { id: 'epi-st-tp-junpei-cake', label: 'The cake', after: '3/28', flags: ['epi-st-cake'], msgs: [
      { me: 'where did you even hide that cake' }, { them: 'behind the miso' }, { them: 'nobody looks behind the miso. thats the whole secret of life' }
    ] }
  ]);
  more('fuuka', 'topics', [
    { id: 'epi-st-tp-fuuka-jalja', label: 'Jal ja', after: '3/25', flags: ['epi-st-jalja'], msgs: [
      { me: 'jal ja' }, { them: '!!' }, { them: 'jal ja!!! did i spell it right' }, { me: 'perfect' }, { them: "i'm going to say it to koromaru" }
    ] }
  ]);
  more('ken', 'topics', [
    { id: 'epi-st-tp-ken-eightten', label: 'Eight-ten', after: '4/6', events: ['epi-st-last-day'], msgs: [
      { me: 'eight ten tomorrow right' }, { them: 'Yes.' }, { them: 'The gate on the left. Not the main one. The main one is for parents.' }, { them: 'Thank you for asking. It means you remembered.' }
    ] }
  ]);
  more('mitsuru', 'topics', [
    { id: 'epi-st-tp-mitsuru-board', label: 'The whiteboard', after: '4/4', flags: ['epi-st-told'], msgs: [
      { me: 'is akihiko really on the hall every night' }, { them: 'Seven nights. In blue. He pressed so hard the marker is finished.' }, { them: 'I have ordered more markers.' }, { them: 'I am not rubbing any of it out.' }
    ] }
  ]);
})();
