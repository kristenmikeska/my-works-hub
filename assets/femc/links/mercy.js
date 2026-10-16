/* Mercy (Dr. Angela Ziegler) · XIV Temperance. Arrives on the 6/8 full moon. Format notes are at the top of akihiko.js.
   Kat's Easter egg: Kat mains Mercy (peak GM, played on an eSports team). In another world, Solar wore Mercy's wings. */
FemcSocial.define({
  id: 'mercy', name: 'Mercy', short: 'Mercy', arcana: 'Temperance', numeral: 'XIV', from: 'Overwatch',
  arrives: '6/8',
  home: { place: 'Tatsumi Memorial Hospital', slot: 0, days: [0, 2, 4], hint: 'Daytime on Tuesdays, Thursdays and Sundays, at Tatsumi Memorial Hospital.' },
  approach: "A woman in a white coat with a halo of blonde hair is doing rounds on a ward she clearly doesn't work on. She smiles at you like she already knows your name.",
  invite: {
    ask: [
      "Are you free? I have a break and far too much coffee.",
      "Come visit? Doctor's orders. 😊",
      "Free for a little while? I could use the company.",
      "I have twenty minutes and a vending machine that owes me money. Come and keep me honest.",
      "The roof is empty and the sun is out. That is a prescription, Solar.",
      "Are you nearby? I have been talking to charts all morning. They are poor conversationalists.",
      "I am taking a break. A real one. I need a witness.",
      "The cafeteria has pudding today and I cannot be trusted alone with it. Come?"
    ],
    ok: ["Wunderbar! See you soon.", "Good. I will save you the chair that does not squeak.", "Wonderful. Bring nothing. Well. Perhaps a pastry. 😊"],
    no: ["Of course. Rest well.", "Another time, then. Drink some water for me.", "That is all right. I will try to take the break anyway. Try."]
  },
  hangouts: [
    [
      { n: "The vending machine on the second floor of Tatsumi Memorial had eleven kinds of coffee and Dr. Ziegler had an opinion about every one of them, which she delivered standing in front of it in her white coat at two in the afternoon like she was presenting at a conference." },
      { s: 'mercy', f: 'happy', t: "The blue can is bitter but honest. The gold can is lying to you about being coffee. The one with the cartoon cow is a dessert, and I respect it as a dessert." },
      { s: 'mercy', f: 'neutral', t: "Choose. My treat. I have a great many hundred-yen coins and nothing else to spend them on." },
      { choose: [
        { t: "The cow one. I want dessert.", notes: 3, then: [
          { s: 'mercy', f: 'happy', t: "A woman who knows what she wants. Wunderbar." },
          { n: "She bought two. She finished hers in about four seconds and then looked at the empty can with a small, private grief." }
        ] },
        { t: "Whatever you're having.", notes: 2, then: [{ s: 'mercy', f: 'neutral', t: "I am having my fifth blue can. I would not recommend following my example in anything." }] },
        { t: "Water. You should have one too.", notes: 2, then: [
          { s: 'mercy', f: 'surprised', t: "...You are very bossy for a visitor." },
          { n: "She bought two waters anyway, and drank all of hers, watching Solar over the bottle like a doctor who'd been caught by a stricter one." }
        ] }
      ] },
      { n: "They stood by the machine until her pager went, the hum of the refrigeration filling the quiet, the hallway smelling of floor wax and canned coffee. It was a strange place to spend a break. It was the only kind of break she seemed to know how to take." }
    ],
    [
      { n: "The staff lounge was empty except for the broken air conditioner, a fridge humming over somebody's labeled yogurt, and Dr. Ziegler, asleep sitting up at the table with a pen still in her hand and a chart open under her elbow, her head tipped back against the wall at an angle that would hurt later." },
      { n: "She had clearly sat down for one minute. The clock on the wall suggested it had been forty." },
      { choose: [
        { t: "(Take the pen out of her hand and let her sleep.)", notes: 3, then: [
          { n: "Solar eased the pen free and capped it and sat across from her doing nothing, which was harder than it sounded, for twenty minutes, until the doctor woke with a small start and looked at the pen in Solar's hand like it was evidence." },
          { s: 'mercy', f: 'flustered', t: "...I was resting my eyes." },
          { s: 'mercy', f: 'happy', t: "Thank you. Don't tell anyone. Half of them already think I'm a ghost." }
        ] },
        { t: "Doctor. Your neck is going to hate you.", notes: 2, then: [
          { s: 'mercy', f: 'surprised', t: "Hm? I'm awake. I was reviewing." },
          { s: 'mercy', f: 'neutral', t: "...With my eyes closed. Which is a technique." }
        ] },
        { t: "(Sneak a look at the chart.)", notes: 1, then: [
          { n: "It was in German. Solar understood exactly one word, and the word was Kaffee, scribbled in the margin and underlined twice." },
          { s: 'mercy', f: 'flustered', t: "That is confidential. Also, it is a reminder." }
        ] }
      ] },
      { n: "She went back to the ward with her hair a little flat on one side. Nobody told her. Solar decided that was a kindness." }
    ],
    [
      { n: "The hospital roof in the afternoon was all wind and laundry, rows of white sheets snapping on lines the staff weren't technically supposed to use, and Dr. Ziegler sat on an upturned crate between them with a pocket dictionary that was already losing its spine." },
      { s: 'mercy', f: 'neutral', t: "I am learning. Slowly. The nurses are very patient, and I have only apologized to one man for being a tomato." },
      { s: 'mercy', f: 'happy', t: "Teach me something useful. Not medical. Something people actually say." },
      { choose: [
        { t: "Otsukaresama. It means you worked hard.", notes: 3, then: [
          { s: 'mercy', f: 'happy', t: "O-tsu-ka-re-sa-ma. ...That is a beautiful thing to have a word for." },
          { s: 'mercy', f: 'neutral', t: "We should all be told that more often. I will say it to the night shift." }
        ] },
        { t: "Mendokusai. It's too much trouble.", notes: 2, then: [{ s: 'mercy', f: 'happy', t: "Ha! I know a dozen soldiers who would say that about everything. I will save it for paperwork." }] },
        { t: "Itadakimasu. You say it before you eat.", notes: 2, then: [{ s: 'mercy', f: 'flustered', t: "Before I eat. Yes. When I remember to." }] }
      ] },
      { n: "She wrote it on the inside cover of the dictionary in careful block letters, under a list of other words that ran down the page in different pens, and Solar realized she'd been collecting them for a while, one patient and one nurse at a time." }
    ],
    [
      { n: "There was a girl of about six in the children's ward who had come in with a broken arm and decided, at some point during her stay, that Dr. Ziegler was her personal physician, and also her rabbit's." },
      { n: "The rabbit was grey and one-eared and had seen things. It lay on the bed with a tongue depressor taped to its leg, and the doctor was examining it with a perfectly straight face." },
      { s: 'mercy', f: 'serious', t: "Hm. Hm. A fracture, I think. Nurse Solar, what do you recommend?" },
      { choose: [
        { t: "Bed rest and a lot of hugs.", notes: 3, then: [
          { s: 'mercy', f: 'happy', t: "Exactly my diagnosis. You have a gift." },
          { n: "The girl hugged the rabbit with the grim dedication of someone following doctor's orders. Dr. Ziegler wrote it out on a real prescription pad and tore off the page, and the girl held it in both hands like a medal." }
        ] },
        { t: "Surgery. Immediately.", notes: 1, then: [
          { n: "The girl's face crumpled. The doctor shot Solar a look of pure professional betrayal." },
          { s: 'mercy', f: 'neutral', t: "...A second opinion says no surgery. Only rest. Nurse Solar is very new." }
        ] },
        { t: "(Tape a second tongue depressor to the other leg, for balance.)", notes: 2, then: [
          { s: 'mercy', f: 'happy', t: "Bilateral support. Very thorough." },
          { n: "The girl inspected the work and nodded, satisfied, like a foreman." }
        ] }
      ] },
      { n: "On the way out the doctor was smiling to herself, the tired lines of her face gone briefly soft. Solar didn't say anything about it. Some things you let a person keep." }
    ],
    [
      { n: "Dr. Ziegler had a way of asking questions on her break that made it very clear she was not, in any meaningful sense, on her break. They were on a bench in the hospital courtyard in the thin afternoon light, and she had already asked how Solar was sleeping, and was now looking at her with an expression Solar recognized from every nurse she'd ever met." },
      { s: 'mercy', f: 'serious', t: "And when did you last drink a glass of water? An honest answer. I will know." },
      { choose: [
        { t: "...Yesterday. I think.", notes: 3, then: [
          { s: 'mercy', f: 'serious', t: "Thank you for being honest. That is terrible." },
          { n: "She produced a bottle of water from her coat pocket like a magician, put it in Solar's hand, and watched her drink half of it before she looked satisfied." }
        ] },
        { t: "When did YOU last drink a glass of water?", notes: 3, then: [
          { s: 'mercy', f: 'flustered', t: "That is not how this works. I am the doctor." },
          { n: "A long pause. She took the bottle back out of her pocket and drank from it herself, pointedly, without looking at Solar." }
        ] },
        { t: "This morning. Lots. Gallons.", notes: 1, then: [{ s: 'mercy', f: 'neutral', t: "Gallons. Of course. And I am the Queen of Switzerland." }] }
      ] },
      { n: "A sparrow landed on the end of the bench, assessed them both, and left. The doctor watched it go with a face that said she'd have checked it for dehydration too, given half a chance." }
    ]
  ],
  romance: true,
  cast: { genji: 'Genji', ana: 'Ana', kiriko: 'Kiriko' },
  stamps: {},
  threads: {
    elizabeth: { name: 'Elizabeth', members: ['elizabeth'] },
    watchpoint: { name: 'the watchpoint (unofficial)', members: ['mercy', 'kiriko', 'genji'] }
  },
  texts: [
    { id: 'eliz-6-8', thread: 'elizabeth', rank: 0, before: 99, days: 0, date: '6/8', slot: 1, msgs: [
      { from: 'elizabeth', t: 'The moon is full again tonight, Solar.' },
      { from: 'elizabeth', t: 'Another has arrived. A healer, I believe. She woke in a hospital bed and has already begun rounds.' },
      { from: 'elizabeth', t: 'I find that rather admirable. And rather worrying.' }
    ] },
    { id: 'mercy-1a', rank: 1, days: 1, slot: 1, msgs: [
      { from: 'mercy', t: 'This is Dr. Ziegler. The nurses gave me your number. I hope that is all right.' },
      { from: 'mercy', t: 'You forgot your umbrella in room 304.' }
    ], reply: [
      { t: 'Keep it. You might need it more.', notes: 3, then: [{ from: 'mercy', t: 'That is very kind. I will return it when it stops raining.' }, { from: 'mercy', t: 'So, July.' }] },
      { t: "I'll come get it Thursday.", notes: 2, then: [{ from: 'mercy', t: 'Good. I will be here. I am always here, apparently.' }] }
    ] },
    { id: 'mercy-2a', rank: 2, days: 1, slot: 1, msgs: [
      { from: 'mercy', t: 'It is two in the morning and I am reading Japanese medical journals with a dictionary.' },
      { from: 'mercy', t: 'Tell me to go to sleep.' }
    ], reply: [
      { t: 'Go to sleep, Doctor.', notes: 3, then: [{ from: 'mercy', t: '...Thank you. I needed someone to say it.' }] },
      { t: 'What did you find?', notes: 2, then: [{ from: 'mercy', t: 'Nothing. Which is itself something.' }, { from: 'mercy', t: 'Goodnight, Solar.' }] }
    ] },
    { id: 'mercy-4a', rank: 4, days: 1, slot: 1, msgs: [
      { from: 'mercy', t: 'Ana says I am "working myself into a grave I will then try to resurrect myself out of."' },
      { from: 'mercy', t: 'She is very dramatic for a sniper.' }
    ], reply: [
      { t: 'She has a point.', notes: 3, then: [{ from: 'mercy', t: 'She usually does. Do not tell her I said so.' }] },
      { t: 'Can you resurrect yourself?', notes: 2, then: [{ from: 'mercy', t: 'I have never tried. I would prefer not to find out.' }] }
    ] },
    { id: 'mercy-5a', rank: 5, days: 1, slot: 1, msgs: [
      { from: 'mercy', t: 'I have been thinking about last night.' },
      { from: 'mercy', t: 'The way you moved. You were always exactly where I needed you.' },
      { from: 'mercy', t: 'Nobody does that by accident.' }
    ], reply: [
      { t: "I just knew where you'd be.", notes: 3, then: [{ from: 'mercy', t: 'Yes. That is what worries me. And what delights me.' }] },
      { t: 'Beginner\'s luck.', notes: 1, then: [{ from: 'mercy', t: 'Hm. I have treated a great many liars, Solar.' }] }
    ] },
    { id: 'mercy-6a', rank: 6, days: 1, slot: 1, msgs: [
      { from: 'mercy', t: 'I ate the bento. All of it.' },
      { from: 'mercy', t: 'Who taught you to make tamagoyaki like that?' }
    ], reply: [
      { t: 'A very grumpy senpai.', notes: 3, then: [{ from: 'mercy', t: 'Please thank him for me. Grumpily, so he believes it.' }] },
      { t: "I'll make you another one.", notes: 3, then: [{ from: 'mercy', t: 'I will not say no. I am a doctor, not a fool.' }] }
    ] },
    { id: 'mercy-8a', rank: 8, days: 1, slot: 1, msgs: [
      { from: 'mercy', t: 'Three of my Apathy patients woke up today. After the full moon.' },
      { from: 'mercy', t: 'You did that. Your team did that.' },
      { from: 'mercy', t: 'I have been a doctor for a long time and I have never been so glad to be wrong about what medicine can do.' }
    ], reply: [
      { t: 'We did it together.', notes: 3, then: [{ from: 'mercy', t: 'Yes. We did.' }] },
      { t: "You kept them alive until we could.", notes: 3, then: [{ from: 'mercy', t: '...That is the kindest thing anyone has said to me in years.' }] }
    ] },
    { id: 'mercy-9r', rank: 9, route: 'romance', days: 1, slot: 1, msgs: [
      { from: 'mercy', t: 'Liebling.' },
      { from: 'mercy', t: 'I wanted to see how it felt to type it.' },
      { from: 'mercy', t: 'It feels correct.' }
    ], reply: [
      { t: 'It does.', notes: 3, then: [{ from: 'mercy', t: 'Good. Then I will keep using it. Goodnight, Liebling.' }] },
      { t: 'What does it mean?', notes: 3, then: [{ from: 'mercy', t: 'Darling. Dearest. You.' }] }
    ] },
    { id: 'mercy-9f', rank: 9, route: 'friend', days: 1, slot: 1, msgs: [
      { from: 'mercy', t: 'I have decided you are my best friend in this world.' },
      { from: 'mercy', t: 'It is a medical decision. It is final.' }
    ], reply: [
      { t: 'Doctor\'s orders.', notes: 3, then: [{ from: 'mercy', t: 'Exactly. You are a very good patient.' }] },
      { t: 'You too, Angela.', notes: 3, then: [{ from: 'mercy', t: '...Thank you, Solar.' }] }
    ] },
    // The watchpoint: Mercy, Kiriko and Genji. Needs Kiriko 6, so Kiriko has met both of them in her own ranks (5 and 6).
    { id: 'watchpoint-4', thread: 'watchpoint', rank: 4, before: 7, days: 2, slot: 1, unlock: { links: { kiriko: 6 } }, rename: 'the watchpoint (unofficial)', msgs: [
      { sys: 'Mercy created "Daily Wellness Check-In"' },
      { from: 'mercy', t: 'Good evening, everyone! 😊' },
      { from: 'mercy', t: "Since we are all far from home, or in Solar's case far from a sensible bedtime, I thought we could check in once a day." },
      { from: 'mercy', t: 'Hours slept. Glasses of water. One meal that did not come out of a vending machine.' },
      { from: 'kiriko', t: 'mercy-sensei it is 11pm' },
      { from: 'kiriko', t: 'ur still at the hospital arent u' },
      { from: 'mercy', t: 'That is not relevant to the check-in.' },
      { from: 'genji', t: 'Good evening, Angela. I am honored to be included.' },
      { from: 'genji', t: 'I should mention that I no longer have most of the organs on this list.' },
      { from: 'mercy', t: 'You have a stomach, Genji. I put it there.' },
      { from: 'kiriko', t: 'ok thats the scariest text ive ever read' },
      { ask: [
        { t: '7 hours, 2 glasses, one onigiri.', notes: 3, then: [
          { from: 'mercy', t: 'Wunderbar! A model patient.' },
          { from: 'kiriko', t: 'teachers pet 🙄' },
          { from: 'kiriko', t: 'was it one of MY onigiri' }
        ] },
        { t: 'Angela, how many hours did YOU sleep?', notes: 2, then: [
          { from: 'mercy', t: '...' },
          { from: 'genji', t: 'The silence is its own answer.' },
          { from: 'kiriko', t: 'LMAO' }
        ] },
        { t: 'Is this mandatory?', notes: 1, then: [
          { from: 'mercy', t: 'Nothing is mandatory. It is strongly, medically encouraged.' },
          { from: 'genji', t: 'That means yes.' }
        ] }
      ] },
      { from: 'kiriko', t: 'ok my turn. 9 hours. 0 water. 4 melon pan' },
      { from: 'mercy', t: 'Kiriko.' },
      { from: 'kiriko', t: 'melon pan has water in it probably' },
      { from: 'genji', t: 'Six hours of meditation. I am told that counts double.' },
      { from: 'mercy', t: 'It does not count at all.' },
      { from: 'genji', t: 'My master would disagree.' },
      { from: 'mercy', t: 'Your master is not in this group chat.' },
      { ask: [
        { t: 'Meditation counts. I have decided.', notes: 2, then: [
          { from: 'genji', t: 'Thank you, Solar. Balance is restored.' },
          { from: 'mercy', t: 'Two of you now. Wonderful.' }
        ] },
        { t: 'Genji, where are you right now?', notes: 3, then: [
          { from: 'genji', t: 'On the roof of the shrine. The signal is better here.' },
          { from: 'kiriko', t: 'GET OFF MY ROOF' },
          { from: 'genji', t: 'It is a very peaceful roof.' },
          { from: 'kiriko', t: 'i KNOW. thats why its MINE' }
        ] },
        { t: 'Kiriko, melon pan is not water.', notes: 1, then: [{ from: 'kiriko', t: 'wow. ok. i see whose side ur on' }] }
      ] },
      { sys: 'kiriko renamed the group "the watchpoint (unofficial)"' },
      { from: 'mercy', t: 'Kiriko, why.' },
      { from: 'kiriko', t: 'bc u two are a whole tiny overwatch now. watching over me. against my will' },
      { from: 'genji', t: 'It has a certain ring to it.' },
      { ask: [
        { t: "I'm keeping it.", notes: 2, then: [
          { from: 'kiriko', t: 'SOLAR VOTES YES. 2 vs 1' },
          { from: 'genji', t: 'I abstain. Peacefully.' },
          { from: 'mercy', t: 'Fine. But the check-ins stay.' }
        ] },
        { t: 'So who watches over Angela?', notes: 3, then: [
          { from: 'genji', t: 'That has always been the question.' },
          { from: 'kiriko', t: 'us. obviously. thats the whole point of the name' },
          { from: 'mercy', t: '...I am going home now. Not because you said so.' }
        ] },
        { t: '👍', notes: 1, then: [{ from: 'kiriko', t: 'a thumbs up. ok grandma' }] }
      ] },
      { from: 'mercy', t: 'Goodnight, all of you. Drink some water. 😊' },
      { from: 'kiriko', t: 'goodnight sensei. go HOME' }
    ] },
    { id: 'watchpoint-7', thread: 'watchpoint', rank: 7, before: 10, days: 3, slot: 1, unlock: { links: { kiriko: 6 } }, rename: 'mandatory picnic (sensei is scary)', msgs: [
      { from: 'kiriko', t: 'question for the group' },
      { from: 'kiriko', t: 'why did a little bird tell me solar made mercy-sensei a BENTO' },
      { from: 'kiriko', t: 'with TAMAGOYAKI' },
      { from: 'mercy', t: 'Which little bird?' },
      { from: 'genji', t: 'I am not a bird.' },
      { from: 'kiriko', t: 'genji told me' },
      { from: 'genji', t: 'Angela mentioned it. Twice. And I do not lie to foxes.' },
      { from: 'mercy', t: 'It was an intervention. It was medically necessary.' },
      { from: 'kiriko', t: 'i ALSO need an intervention. i have eaten rice balls for nine days straight' },
      { ask: [
        { t: "I'll make you one too.", notes: 3, then: [
          { from: 'kiriko', t: 'YES' },
          { from: 'kiriko', t: 'with the egg. the egg is non negotiable 🦊' },
          { from: 'mercy', t: 'And vegetables. I will be checking.' }
        ] },
        { t: 'Nine days is honestly impressive.', notes: 2, then: [
          { from: 'kiriko', t: 'thank u. its a lifestyle' },
          { from: 'mercy', t: 'It is scurvy. Slowly.' }
        ] },
        { t: 'Angela needed it more.', notes: 1, then: [
          { from: 'kiriko', t: 'ok thats fair. she looks like a ghost who works nights' },
          { from: 'mercy', t: 'I am right here.' }
        ] }
      ] },
      { from: 'genji', t: 'I would also like a bento.' },
      { from: 'mercy', t: 'Genji, you barely eat.' },
      { from: 'genji', t: 'I would like to be asked. It is about the gesture.' },
      { from: 'kiriko', t: 'the cyborg has feelings 😭' },
      { from: 'mercy', t: "Then it is settled. Sunday. The hospital courtyard. Everyone brings something, and everyone eats it. Doctor's orders." },
      { sys: 'kiriko renamed the group "mandatory picnic (sensei is scary)"' },
      { ask: [
        { t: "I'll bring the tamagoyaki.", notes: 3, then: [
          { from: 'mercy', t: 'Wunderbar. Bring extra. Genji will pretend he does not want any.' },
          { from: 'genji', t: 'I will want some. I will say nothing.' }
        ] },
        { t: 'What is Kiriko bringing?', notes: 2, then: [
          { from: 'kiriko', t: 'vibes' },
          { from: 'kiriko', t: 'and rice balls' },
          { from: 'mercy', t: 'Kiriko.' },
          { from: 'kiriko', t: 'FINE. and a fruit' }
        ] },
        { t: 'Will Angela actually take a break?', notes: 2, then: [
          { from: 'genji', t: 'Twenty minutes. I will time her.' },
          { from: 'mercy', t: 'Forty. I am not a monster.' }
        ] }
      ] },
      { from: 'genji', t: 'If I fade before Sunday, save me a seat under the ginkgo.' },
      { from: 'mercy', t: 'We will. We always do.' },
      { from: 'kiriko', t: 'ok this got sad. new rule. no fading before sunday' },
      { ask: [
        { t: 'Seconded. No fading.', notes: 3, then: [
          { from: 'genji', t: 'Two votes. I will do my best.' },
          { from: 'mercy', t: '😊' }
        ] },
        { t: 'Genji, what does the fading feel like?', notes: 2, then: [
          { from: 'genji', t: 'Like falling asleep in a warm room. Not frightening. Only quiet.' },
          { from: 'kiriko', t: 'ok that actually helped' }
        ] },
        { t: 'Angela, go to bed.', notes: 1, then: [{ from: 'mercy', t: 'It is nine o\'clock.' }, { from: 'kiriko', t: 'solar said what we were all thinking' }] }
      ] },
      { from: 'kiriko', t: 'sunday. 12. bring the egg 🦊' }
    ] }
  ],
  ranks: [
    { after: '6/9', title: '1: rounds', place: 'Tatsumi Memorial Hospital · 3F Ward', scene: [
      { n: "Tatsumi Memorial Hospital smelled the way all hospitals smelled, antiseptic and floor wax and something under it that no amount of either could cover. Solar hated it. She'd hated it since she was seven, in a hallway, holding a juice box a nurse had given her, waiting for someone to come out of a door and tell her something she already knew." },
      { n: "She was here because Junpei had sprained his wrist doing something he refused to explain, and she'd drawn the short straw to drop off his forms. She was on the third floor because the elevator had opened there and she hadn't been paying attention." },
      { n: "The third floor was where they kept the Apathy Syndrome patients. Rows of beds. Rows of people who were alive and breathing and looking at nothing, at the ceiling, at the walls, people who had simply stopped. The whole city was afraid of it. Nobody knew what caused it. Solar did. She'd seen the shadows feeding." },
      { n: "There was a woman in the ward who wasn't a nurse." },
      { n: "She was in a white coat that didn't have the hospital's name on it, blonde hair pulled back in a practical ponytail, kneeling beside the bed of an old man and holding his wrist and talking to him, softly, in a language Solar didn't recognize, like he could hear every word." },
      { s: 'mercy', f: 'neutral', t: "...You can see me. Good. Half the staff seem to think I'm a visiting specialist, and the other half think I'm a ghost." },
      { choose: [
        { t: 'Are you a doctor?', notes: 2, then: [
          { s: 'mercy', f: 'happy', t: "Dr. Angela Ziegler. Though I'm not sure my license is valid in whatever this place is." }
        ] },
        { t: "You're not from here.", notes: 3, then: [
          { s: 'mercy', f: 'surprised', t: '...No. I am not.' },
          { s: 'mercy', f: 'neutral', t: "I woke up two nights ago in bed four. Nobody admitted me. Nobody remembers me arriving. And yet here I am, and here they are." }
        ] }
      ] },
      { n: "She looked down at the old man, at his empty, peaceful eyes, and something in her face went tired in a way that had nothing to do with two nights of no sleep." },
      { s: 'mercy', f: 'sad', t: "Every vital sign is normal. Heart, lungs, brain activity. Normal. And yet nobody is home." },
      { s: 'mercy', f: 'serious', t: "I have rebuilt people from almost nothing. I have brought soldiers back from the edge of death. And I cannot find what is wrong with a single one of them." },
      { choose: [
        { t: "It's not something medicine can fix.", notes: 3, then: [
          { s: 'mercy', f: 'surprised', t: '...You say that like you know what it is.' },
          { n: "Solar didn't answer. She didn't need to. The doctor looked at her for a long, steady moment, the look of someone reading a chart, and then nodded slowly, like she'd filed something away." }
        ] },
        { t: 'Have you slept?', notes: 2, then: [
          { s: 'mercy', f: 'happy', t: "Ha. You sound like my old commanding officer." },
          { s: 'mercy', f: 'sad', t: "...No. Not really." }
        ] }
      ] },
      { n: "Solar left Junpei's forms at the nurses' station. On the way out she passed the third floor again. The doctor was still there, at bed five now, holding another wrist, talking softly to another person who wasn't there." },
      { n: "She'd forgotten her umbrella in room 304. She didn't realize until she was halfway home in the rain, and found, oddly, that she didn't mind having a reason to go back." }
    ] },

    { after: '6/23', title: '2: the caduceus', place: 'Tatsumi Memorial Hospital · Rooftop', scene: [
      { n: "The hospital had a rooftop where the staff went to smoke, and on Thursday afternoons, Solar learned, where Dr. Ziegler went to not smoke. She stood at the railing with a paper cup of vending-machine coffee, looking at the city like it was a patient she couldn't diagnose." },
      { n: "She had something leaning against the railing beside her. A staff, white and gold, with a little set of wings at the top. It hummed very faintly, a sound so high Solar felt it more than heard it." },
      { s: 'mercy', f: 'happy', t: "Ah. My umbrella thief returns." },
      { n: "She held out the umbrella. Solar took it. Neither of them moved to leave." },
      { choose: [
        { t: 'What is that?', notes: 3, then: [
          { s: 'mercy', f: 'neutral', t: "The Caduceus. My staff. It heals, mostly. It can boost someone's strength, if they need it." },
          { s: 'mercy', f: 'sad', t: "And it can bring people back. If I'm fast enough. If the damage isn't too great." }
        ] },
        { t: "Isn't that coffee terrible?", notes: 2, then: [{ s: 'mercy', f: 'happy', t: "Dreadful. I've had four." }] }
      ] },
      { s: 'mercy', f: 'serious', t: "People think bringing someone back is a miracle. It isn't. It's a choice. Every time, I choose who. And every time, there's someone I didn't choose." },
      { n: "She said it plainly, the way soldiers do, the way people do when they've said it to themselves so many times it doesn't break anymore. Solar recognized that, too. She was starting to recognize a lot of things in the people falling into her city." },
      { choose: [
        { t: "That sounds lonely.", notes: 3, then: [
          { s: 'mercy', f: 'surprised', t: '...' },
          { s: 'mercy', f: 'sad', t: "It is. Thank you for saying so. Most people just say it sounds heroic." }
        ] },
        { t: 'You save more than you lose.', notes: 2, then: [{ s: 'mercy', f: 'neutral', t: "That's the math. The math doesn't help at three in the morning." }] }
      ] },
      { n: "They stood there until her coffee went cold. Below them the city went about its afternoon, cars and trains and people who didn't know about the hour at midnight, and Dr. Ziegler watched all of it like she was keeping it alive by looking." }
    ] },

    { after: '7/9', title: '3: genji', place: 'Tatsumi Memorial Hospital · Courtyard', scene: [
      { n: "There was a cyborg in the hospital courtyard, sitting cross-legged under the ginkgo tree, meditating." },
      { n: "Nobody else seemed to find this strange. Solar assumed it was the same thing that made people walk past the coffins in the green hour, the city's quiet agreement not to see what it couldn't explain. But she saw him: silver and white plating, a green glow at the seams, a visor where a face should be, perfectly still in the July heat." },
      { register: 'genji' },
      { s: 'mercy', f: 'happy', t: "Genji! You're here. You're actually here." },
      { s: 'genji', t: "Angela. I followed a feeling. My master would say the universe is less tidy than we think." },
      { n: "His voice was calm, a little mechanical at the edges, warm underneath. He stood and bowed to Solar, a small, precise bow." },
      { s: 'genji', t: "You must be the one who keeps her from working herself into the floor. Thank you." },
      { choose: [
        { t: "I try. She doesn't listen.", notes: 3, then: [{ s: 'genji', t: "She never has. That is why she is still alive. And why we all are." }] },
        { t: "How do you two know each other?", notes: 2, then: [{ s: 'mercy', f: 'sad', t: "I rebuilt him. A long time ago. When he didn't want to be rebuilt." }] }
      ] },
      { n: "They talked in the shade for an hour. Genji spoke about anger, and how long it had taken him to set it down. Angela spoke about the operating table, and how she'd kept going when he'd asked her to stop. Neither of them said sorry. It sounded like they'd both said it a long time ago and had been forgiven." },
      { s: 'mercy', f: 'neutral', t: "He hated me for years, you know. For saving him." },
      { s: 'genji', t: "And then I didn't. Healing is not only for the body, Solar. She taught me that, without meaning to." },
      { n: "By evening Genji was fading at the edges, the way the visitors always did when the world remembered they didn't belong to it. He bowed again before he went." },
      { s: 'genji', t: "Look after her. She will not do it herself." },
      { n: "Angela didn't cry. She just held her coffee in both hands for a long time, after, looking at the place under the tree where he'd been sitting." }
    ] },

    { after: '7/23', title: '4: ana', place: 'Tatsumi Memorial Hospital · Staff Lounge', scene: [
      { n: "The staff lounge had a broken air conditioner and a fridge full of other people's lunches, and on this particular afternoon it had an old woman in it, sitting in Angela's chair, drinking Angela's tea, with an eye patch and a sniper rifle leaned casually against the vending machine." },
      { register: 'ana' },
      { s: 'ana', t: "So this is the girl. Habibti, she's younger than you said." },
      { s: 'mercy', f: 'surprised', t: "Ana! I didn't say anything about her!" },
      { s: 'ana', t: "You didn't have to. You keep looking at the door." },
      { n: "Ana Amari looked at Solar the way grandmothers look at people their grandchildren bring home, which was to say thoroughly, skeptically, and with the clear understanding that she had seen a great deal and would not be easily impressed." },
      { s: 'ana', t: "And do you take care of her? Or does she take care of you?" },
      { choose: [
        { t: "Both, I think.", notes: 3, then: [{ s: 'ana', t: "Good answer. The only right one." }] },
        { t: "Nobody takes care of Angela. She won't let them.", notes: 3, then: [
          { s: 'ana', t: "Ha! She knows you." },
          { s: 'mercy', f: 'flustered', t: "I am standing right here." }
        ] }
      ] },
      { s: 'ana', t: "She was the youngest of us, back then. Overwatch. All those heroes, and she was the one who stayed up every night patching them back together." },
      { s: 'ana', t: "And when it all fell apart, she was the one who still tried to save everybody. Even the ones who didn't deserve it." },
      { s: 'mercy', f: 'sad', t: "...Ana." },
      { s: 'ana', t: "I'm only saying what's true. Someone should." },
      { n: "When Ana left, fading at the edges like the others, she patted Angela's cheek with a hand that had pulled a thousand triggers, and Solar watched the doctor lean into it for a second like a much younger woman." },
      { s: 'ana', t: "Make her sleep, little one. That's an order." }
    ] },

    { after: '8/6', title: '5: guardian angel', place: 'Tatsumi Memorial Hospital · Rooftop', scene: [
      { n: "It happened during the green hour, on the hospital roof." },
      { n: "A shadow had crawled out of the third floor, out of the ward where the Apathy patients slept, a fat black shape full of reaching hands, and Angela had been there, because Angela was always there, and Solar had been there because she'd been worried about Angela, and suddenly the two of them were the only things awake on a roof under a green moon with something that wanted to eat them." },
      { n: "Angela's wings opened. Real wings, gold and white, light and metal, lifting her off the roof like the air had decided to carry her." },
      { n: "And Solar knew, without knowing how she knew, exactly where Angela was going to go." },
      { n: "She moved before the shadow did. Left, toward the water tank, where the line of sight was clean. Angela's beam caught her a half-second later, golden, warm, and Solar felt it go through her like sunlight through a window, and she hadn't even looked to see if it was coming. She just knew it would be." },
      { n: "It went on like that. Solar moving to where the beam would be, Angela flying to where Solar would need her. No words. They didn't need any. It was like a dance neither of them had learned and both of them knew." },
      { n: "When it was over, and the shadow was smoke, and the moon was going back to white, Angela landed beside her and folded her wings and stared at her." },
      { s: 'mercy', f: 'surprised', t: "Where did you learn to read a fight like that?" },
      { choose: [
        { t: "I don't know. Sometimes I dream I'm flying.", notes: 3, then: [
          { s: 'mercy', f: 'surprised', t: '...Flying.' },
          { s: 'mercy', f: 'neutral', t: "With wings like these?" },
          { n: "Solar didn't answer. She didn't have to. Angela looked at her for a long, strange moment, like a doctor looking at an X-ray that showed something that shouldn't be possible." }
        ] },
        { t: "You're easy to follow.", notes: 2, then: [
          { s: 'mercy', f: 'happy', t: "Nobody has ever said that to me. I fly like a nervous bird. My team used to complain." },
          { s: 'mercy', f: 'neutral', t: "...But you were never where I didn't expect you. Not once." }
        ] }
      ] },
      { s: 'mercy', f: 'happy', t: "Your positioning was perfect. Better than perfect. You stayed out of my way and in my line of sight at the same time. That's the hardest thing in the world to teach." },
      { n: "She laughed, breathless and surprised, the wind lifting her hair, the last of the green fading out of the sky around her." },
      { s: 'mercy', f: 'happy', t: "Heroes never die, Solar. Not while I'm watching." },
      { n: "She said it like a line she'd said a thousand times. Solar heard it like a song she'd heard a thousand times, from somewhere very far away, in another life, through a pair of headphones, with a crowd screaming." }
    ] },

    { after: '8/27', title: '6: bento', place: 'Tatsumi Memorial Hospital · Staff Lounge', scene: [
      { n: "Late August, the hottest week of the year. Angela had worked six days straight. Solar knew because the night nurse, who had decided Solar was some kind of relative, had started texting her updates in a tone of rising alarm." },
      { n: "So she'd learned to make tamagoyaki. Shinjiro had taught her, grumbling, at the dorm stove, roll it, don't fold it, you're folding it, stop folding it, and she'd made a whole bento box with rice and pickles and the slightly lopsided egg, and brought it to the staff lounge, and set it in front of Dr. Angela Ziegler like an ultimatum." },
      { s: 'mercy', f: 'surprised', t: '...What is this?' },
      { choose: [
        { t: 'Lunch. Eat it.', notes: 3, then: [
          { s: 'mercy', f: 'flustered', t: "Is this an intervention?" },
          { n: "It was absolutely an intervention. Solar sat across from her and did not leave until the box was empty." }
        ] },
        { t: 'A bribe. Go home and sleep after.', notes: 3, then: [{ s: 'mercy', f: 'happy', t: "...That's extortion. I respect it." }] }
      ] },
      { n: "Angela ate everything. She ate it the way people eat when they've forgotten they were hungry, slowly at first and then not slowly at all. When she got to the egg she stopped, and looked at it, and then at Solar." },
      { s: 'mercy', f: 'sad', t: "Nobody has made me lunch since I was a little girl in Switzerland." },
      { s: 'mercy', f: 'sad', t: "My parents were doctors too. They died in a war when I was very young. I think I've been trying to finish their work ever since." },
      { n: "Solar didn't say anything for a moment. There was a tightness in her throat that she knew the shape of. The bridge. The car. Ten years. She'd never told anyone at this hospital why she hated it." },
      { choose: [
        { t: "Mine died when I was little, too.", notes: 3, then: [
          { s: 'mercy', f: 'surprised', t: '...' },
          { n: "Angela reached across the table and put her hand on top of Solar's, warm and steady, a doctor's hand, and didn't say I'm sorry, which was exactly right." }
        ] },
        { t: "They'd be proud of you.", notes: 2, then: [{ s: 'mercy', f: 'sad', t: "I hope so. I've never been sure." }] }
      ] },
      { n: "She went home after. She slept for fourteen hours. The night nurse texted Solar a single thumbs-up emoji at midnight, which Solar chose to read as a medal." }
    ] },

    { after: '9/10', title: '7: wings', music: 'sun', place: 'Port Island · Seaside Park', scene: [
      { n: "September, after a storm. The sky over the bay was scrubbed clean, a deep cold blue, and the seaside park was empty except for the gulls and the two of them, sitting on the seawall with their feet over the water." },
      { n: "Angela had her wings folded in her lap, unclasped from the suit. Up close they were more machine than miracle, segments and joints and fine gold filaments, and she ran her thumb along an edge like someone touching an old scar." },
      { s: 'mercy', f: 'neutral', t: "Elizabeth told me something, you know. The strange woman with the book." },
      { s: 'mercy', f: 'neutral', t: "She said that in another world, you wore my wings. That you were a healer, too. At the very top. On a team that played in front of crowds, under bright lights, with the whole world watching." },
      { n: "Solar felt it the way she felt the beam on the hospital roof, warm and certain and from nowhere. A stage. A headset. A crowd so loud you could feel it in your teeth. A name in lights that wasn't quite hers." },
      { choose: [
        { t: "I think I remember. Sort of.", notes: 3, then: [
          { s: 'mercy', f: 'happy', t: "...Of course you do. You fly like someone who's done it ten thousand times." },
          { s: 'mercy', f: 'happy', t: "Peak of the ladder, Elizabeth said. Grandmaster. Whatever that means. It sounds like you were very, very good." }
        ] },
        { t: "That's impossible.", notes: 1, then: [{ s: 'mercy', f: 'happy', t: "So is a woman in a velvet elevator. And yet." }] }
      ] },
      { s: 'mercy', f: 'neutral', t: "Here." },
      { n: "She held the wings out. Solar took them, carefully, like something alive. They were lighter than they looked. Warm. They hummed in her hands, the same high hum as the staff, and for a moment the whole seawall tilted, and she was somewhere else, under hot lights, a crowd chanting, her hands on a keyboard, her voice in a headset saying something calm and quick and certain, and a teammate going down, and her finger already moving before her mind caught up." },
      { n: "Then she was back on the seawall. The gulls. The cold blue sky. Angela watching her with an expression Solar couldn't read." },
      { s: 'mercy', f: 'happy', t: "...You saw something." },
      { choose: [
        { t: "I saw myself saving someone.", notes: 3, then: [{ s: 'mercy', f: 'happy', t: "Then that's who you are. In every world. That's a good thing to find out." }] },
        { t: "(Hand the wings back, carefully.)", notes: 2, then: [{ s: 'mercy', f: 'neutral', t: "Thank you. They don't let just anyone hold them, you know. They hum louder for you." }] }
      ] }
    ] },

    { after: '9/24', title: '8: apathy', music: 'tender', place: 'Tatsumi Memorial Hospital · 3F Ward', scene: [
      { n: "Angela had figured it out. Solar could tell by the way she was standing in the third-floor ward, very still, with her arms crossed and a stack of charts against her chest and the expression of a doctor who has finally found the thing she'd been looking for and hates it." },
      { s: 'mercy', f: 'serious', t: "It's the shadows. Isn't it. The ones in the green hour. They're feeding on these people." },
      { n: "Solar had never told her. She'd never told anyone outside the dorm. But Angela had been on that roof, and Angela had charts, and Angela was the kind of person who would stare at a problem until it confessed." },
      { choose: [
        { t: "Yes.", notes: 3, then: [
          { s: 'mercy', f: 'sad', t: '...' },
          { s: 'mercy', f: 'serious', t: "Then I can't cure them. Not with medicine. Only you can. Your team. In that hour." }
        ] },
        { t: "I'm not supposed to tell anyone.", notes: 2, then: [{ s: 'mercy', f: 'serious', t: "You didn't tell me. I worked it out. There's a difference, and I'll defend it to whoever asks." }] }
      ] },
      { s: 'mercy', f: 'sad', t: "Do you know what it's like? To be the best at the thing you do, and realize it's the wrong thing?" },
      { n: "She looked at the beds. All those people. All those vital signs, normal, normal, normal, and nobody home." },
      { s: 'mercy', f: 'serious', t: "No. I refuse that. If I can't cure them, I'll keep them alive until you can. Fluids. Nutrition. Turning them every two hours. Talking to them so they don't forget what a voice sounds like." },
      { s: 'mercy', f: 'serious', t: "That's my job. That's what I can do. The rest is yours." },
      { choose: [
        { t: "Then we'll do it together.", notes: 3, then: [
          { s: 'mercy', f: 'happy', t: "...Together. Yes." },
          { n: "She uncrossed her arms. She held out her hand. Solar shook it, firm, like a contract, like two people agreeing to hold up opposite ends of the same impossible thing." }
        ] },
        { t: "You're the bravest person I know.", notes: 3, then: [{ s: 'mercy', f: 'flustered', t: "I am not. I'm just very, very stubborn. It looks similar from a distance." }] }
      ] },
      { n: "That night was a full moon. Solar went into the green hour with her team and did what she did. When she came out, exhausted, bruised, the moon going pale, her phone had a message from the hospital. Three patients had woken up." }
    ] },

    { after: '10/15', title: '9: what are you, liebling', place: 'Tatsumi Memorial Hospital · Rooftop', scene: [
      { n: "October, and the hospital roof was cold now. Angela had a scarf. It was very long and very ugly and a patient had knitted it for her, and she wore it with enormous pride." },
      { n: "She'd been different, the last few weeks. Lighter. She slept. She ate the bentos without being bullied into it. She'd started laughing at things, real laughs, surprised out of her like she kept forgetting she was allowed." },
      { s: 'mercy', f: 'neutral', t: "I need to ask you something, and I'd like you to answer like a patient, which is to say honestly, because I will know if you don't." },
      { s: 'mercy', f: 'blushing', t: "What am I to you, Solar?" },
      { route: [
        { t: "Someone I've fallen in love with.", route: 'romance', notes: 3, then: [
          { s: 'mercy', f: 'surprised', t: '...' },
          { s: 'mercy', f: 'blushing', t: "Oh. Oh, good. I was going to have to prescribe myself something if you said otherwise." },
          { n: "She laughed at her own joke, nervous and bright, and then stopped laughing, and stepped in close, and tucked a piece of Solar's hair behind her ear with the same careful hands that held the Caduceus." },
          { s: 'mercy', f: 'blushing', t: "Liebling. That's what you are. That's the word I've been trying not to say for a month." }
        ] },
        { t: "My best friend. Here, and maybe everywhere.", route: 'friend', notes: 3, then: [
          { s: 'mercy', f: 'happy', t: "...Yes. Yes, that's exactly right. That's exactly the word." },
          { n: "She looped one end of the ugly scarf around Solar's neck too, so they were stuck together, ridiculous, two people sharing a scarf on a cold roof." },
          { s: 'mercy', f: 'happy', t: "There. Now we match. Medically speaking, this is very important." }
        ] }
      ] }
    ] },

    { after: '11/12', title: '10: heroes never die', place: 'Tatsumi Memorial Hospital · Rooftop', scene: [
      { n: "November. The first snow wouldn't come for weeks, but you could smell it in the air already, that clean metal edge. The hospital roof was frosted at the corners. Angela was waiting at the railing in the ugly scarf, the Caduceus beside her, humming." },
      { s: 'mercy', f: 'neutral', t: "I have something for you." },
      { n: "She held out her hand. In her palm was a single feather from her wings. Not a real feather. A segment of gold filament and white plating, shaped like one, warm to the touch, humming very faintly when Solar's fingers closed around it." },
      { s: 'mercy', f: 'happy', t: "So you always know where I am. And so I always know where you are. In this world or any of the others." },
      { ifRoute: 'friend', then: [
        { s: 'mercy', f: 'happy', t: "You kept me alive this year, Solar. Not my body. The rest of me. I didn't know how much of me was missing until you started bringing me lunch." },
        { choose: [
          { t: "Heroes never die, right?", notes: 3, then: [
            { s: 'mercy', f: 'happy', t: "...Not while we're watching each other's backs." },
            { n: "She said it softly, like it was something private between them. In a way it was. In some other world, a crowd was still screaming it." }
          ] },
          { t: "You'd have done the same for me.", notes: 3, then: [{ s: 'mercy', f: 'happy', t: "I'd have done it worse. I can't make tamagoyaki." }] }
        ] },
        { n: "They stood on the roof until her pager went off. She ran down the stairs two at a time, the scarf flying behind her. She waved from the door. Solar waved back, the feather warm in her other hand." }
      ] },
      { ifRoute: 'romance', then: [
        { s: 'mercy', f: 'blushing', t: "I spent my whole life choosing who to save. I never thought I'd get to choose someone just for me." },
        { s: 'mercy', f: 'blushing', t: "I choose you, Liebling. In every world Elizabeth can find. In every one she can't." },
        { choose: [
          { t: "Heroes never die, Doctor.", notes: 3, then: [
            { s: 'mercy', f: 'happy', t: "...No. They don't." },
            { n: "She kissed her on the cold roof, the Caduceus humming louder and louder beside them, like it approved, like it had been waiting, gold light spilling over the frost." }
          ] },
          { t: "(Kiss her.)", notes: 3, then: [
            { s: 'mercy', f: 'surprised', t: '...!' },
            { s: 'mercy', f: 'blushing', t: "...That was against medical advice. Do it again." }
          ] }
        ] },
        { n: "Her pager went off. She ignored it for exactly eleven more seconds, which for Dr. Angela Ziegler was a declaration of love on the scale of a symphony." }
      ] }
    ] }
  ]
});
