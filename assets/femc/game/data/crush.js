/* Crushes (2026-10-23, Kat's ruling in the lore bible): the crush and puppy-love stretch before a canon romance's route,
   lived where Solar actually lives (Gekkoukan's third-year hallway, the dorm, the story's big nights, her phone), so the
   romance the link offers later has a before. The engine and every field are documented in core.js ("Crushes"); adding a
   character is in CLAUDE.md ("Adding a crush track"). This file: the tracks, the world's reactions, and the texts.
   Moments are in crush-<id>.js (loaded after this file).
   Phases: none · out · noticed → crush → puppy → almost → dating, or faded. Gates name phases; the lists below are the
   usual ones (BUILD: still growing; FRIEND: a friendship; ASKED: anyone who's been asked).
   Akihiko: from April (opt-in from 4/21; a save that missed it can still get it until 8/20). Shinjiro: from when Solar
   has met him (5/24 on) or from his move back into the dorm (8/8), until 10/4. Both can grow at once: the triangle,
   leaning Akihiko (his steps come sooner and fall back on dates; Shinjiro's past 'crush' need his rank or her choices).
   A romance route on either settles the other into 'faded'; so does any other link's romance route. */
(() => {
  const W = window;
  const BUILD = ['noticed', 'crush', 'puppy', 'almost'], UP = ['crush', 'puppy', 'almost'], PUP = ['puppy', 'almost'];
  const FRIEND = ['out', 'faded'];
  const C = (W.FEMC_GAME_CRUSH ||= { tracks: {}, moments: [], world: {} });
  C.tracks ||= {}; C.moments ||= []; C.world ||= {};
  C.phases = { BUILD, UP, PUP, FRIEND, ASKED: ['out', 'noticed', 'crush', 'puppy', 'almost', 'dating', 'faded'] };

  C.tracks.akihiko = {
    optIn: { from: '4/21', until: '8/20' },
    steps: [
      { phase: 'crush', after: '5/1', rank: 2, warmth: 2, by: '5/24' },
      { phase: 'puppy', after: '6/1', rank: 4, warmth: 5, by: '6/28' },
      { phase: 'almost', after: '7/11', rank: 5, warmth: 8, by: '8/14' }
    ]
  };
  C.tracks.shinjiro = {
    optIn: { from: '5/24', until: '9/10' },
    steps: [
      { phase: 'crush', after: '6/20', rank: 3, warmth: 2, by: '8/14' },
      { phase: 'puppy', after: '8/12', rank: 6, warmth: 4 },
      { phase: 'almost', after: '8/22', rank: 7, warmth: 6 }
    ],
    closes: '10/4'
  };

  /* ── The world reacts: phase lines for spots the player sees every day (core.js crushLine). On about half the days a line
     fits it replaces the usual one. Classmates: Maki and Sonoda sit behind her; the fan club is four second-years, Ōta
     their president (living-r15-akihiko.js). His classroom is next door to hers. ── */
  const A = ph => ({ akihiko: ph }), S = ph => ({ shinjiro: ph });
  const add = (path, list) => { C.world[path] = [...(C.world[path] || []), ...list]; };
  const SCHOOL_TERM1 = { months: [4, 5, 6, 7] }, AUTUMN = { months: [9, 10, 11, 12, 1, 2] };

  add('lunch.clear', [
    { t: "Lunch on the roof. Somebody had left the end of the bench by the fence free, the end in the shade, with a carton of milk standing on it like a reserved sign, and she knew whose milk it was before she'd read the label, and sat there anyway, and pretended that was a coincidence.", crush: A(UP), ...SCHOOL_TERM1 },
    { t: "Lunch. She ate on the roof with her back to the boxing club's side of the building and caught herself, twice, turning round to look at a window she couldn't even see from there. Maki asked what she was looking for. *Birds,* she said. There were no birds.", crush: A(BUILD), ...SCHOOL_TERM1 },
    { t: "Lunch on the roof. Junpei had saved her a seat, and then, with a look on his face like a man defusing a bomb, moved one seat down, so the seat beside hers was free, and kept looking at the door, and when Akihiko came out with three chicken-breast onigiri and sat in it Junpei said *wow, what a coincidence* in a voice that could have been heard in Kagoshima.", crush: A(PUP), ...SCHOOL_TERM1 },
    { t: "Lunch on the roof. She sat where she always sat now, which was next to him, which had started as an accident in May and become a rule nobody had written down, and the second-years at the next bench had stopped whispering about it, which was somehow worse.", crush: A(['almost']), months: [7, 9] },
    { t: "Lunch on the roof, his bag on the bench beside him the whole time, holding her place like a dog told to stay, and three different people asked if the seat was free, and three different times he said *no* without looking up from his onigiri, and then she sat down, and he moved the bag.", crush: A('dating'), ...AUTUMN },
    { t: "Lunch. Akihiko shouted her name across the roof with his mouth full, the way he shouted it across the boxing club, and waved her over to the bench where he was sitting with Junpei arguing about baseball, and she went, and it was easy, and easy was its own kind of good.", crush: A(FRIEND), ...AUTUMN },
    { t: "Lunch on the roof stairs, out of the wind. Shinjiro was sitting three steps up with a bento he'd obviously made himself, and when she sat two steps down he passed down half a rolled omelette without a word, and went back to looking at nothing.", crush: S(UP), months: [9] }
  ]);
  add('lunch.rain', [
    { t: "Lunch indoors, the hallway loud with everybody who'd meant to eat on the roof. She ate by the window at the end of the third-year corridor, which was by the door of the classroom next to hers, which had nothing to do with anything.", crush: A(BUILD) },
    { t: "Lunch in the corridor, rain on the glass. Ōta and another second-year in matching hair clips went past her twice, slowly, the second time with their heads together, and she heard *that's her* and *the umbrella* and something about a newsletter, and ate her bread, and did not turn round.", crush: A(UP), ...SCHOOL_TERM1 },
    { t: "Lunch indoors. He found her by the window, sat on the radiator because the radiator was off and he liked to sit on things that weren't chairs, and ate four onigiri while explaining a combination that she could see in her head, afterward, every time it rained.", crush: A(['puppy', 'almost', 'dating']) }
  ]);
  add('classQuiet', [
    { t: "Chalk dust and the clock above the door. Through the wall, from the classroom next door, a teacher she'd never had said *Sanada* in the voice teachers used for boys who were looking out of the window, and she found she'd written the S of it in her margin before she'd noticed her hand move.", crush: A(UP) },
    { t: "The lesson took its time. Somewhere outside, on the track, somebody was running laps in the wrong period, and she knew the stride before she'd looked, and then she looked, and then she spent the next ten minutes taking very careful notes on nothing.", crush: A(BUILD), months: [4, 5, 6, 7, 9, 10] },
    { t: "Class. Sonoda passed her a folded note from behind that said *Maki wants to know if it's true* and nothing else, and she wrote *no* on it and passed it back, and a minute later it came back saying *Maki says that's a yes*, and she put it in her pencil case and didn't answer.", crush: A(PUP) },
    { t: "The period went by in a long warm blur. She caught herself counting the seconds between the bells the way she counted benches at five in the morning, and lost count, and started again, and the only thing on her page at the end was a time she didn't remember writing down.", crush: A(UP) },
    { t: "Class. The window was open and the boxing club was doing roadwork round the grounds below, and she heard him shout *pace* at the first-years from all the way across the field, and the whole row by the window turned and looked at her, which was very unfair, because she hadn't said anything.", crush: A(['puppy', 'almost', 'dating']), months: [5, 6, 7, 9, 10] },
    { t: "Chalk dust, the clock, a lesson with no end in it. She thought about a kitchen at one in the morning, a spoon held out to her, *taste*, and found she'd underlined a sentence about the Meiji Restoration three times.", crush: S(UP) }
  ]);
  add('study', [
    { t: "She studied at her desk until the words went soft. Through the floor, very faint, somebody was doing push-ups in a room on the boys' side and counting under his breath, and she lost her place in the chapter twice, both times at the same number.", crush: A(BUILD) },
    { t: "She worked through a page of problems with her headphones in and no music on, which was a trick she'd found for not hearing the dorm, and it didn't work, because the dorm had a front door, and at nine somebody came in from a run, and she knew who.", crush: A(UP) },
    { t: "She studied at the dining-room table. At ten a mug of something hot appeared at her elbow, set down by a big scarred hand that was gone before she looked up, and it was ginger and honey and exactly the right temperature, and nobody in the kitchen would admit to anything.", crush: S(UP), months: [8, 9] }
  ]);
  add('home', [
    { t: "She went straight home. Akihiko was on the dorm steps doing calf raises off the bottom one, and stopped when he saw her, and went on doing them, faster, as if that was what he'd been doing all along.", crush: A(UP), months: [4, 5, 6, 7, 8, 9] },
    { t: "Home. Junpei, on the sofa, looked up from his magazine and said *he's not back yet* before she'd said a word, and then looked back down, very innocently, as if he hadn't said anything, as if she'd asked.", crush: A(PUP) },
    { t: "She went straight home. In the lounge Yukari looked her up and down and said *you're smiling*, and she said she wasn't, and Yukari said *you're doing it right now*, and she went upstairs to stop doing it somewhere private.", crush: A(UP) },
    { t: "Home early. The kitchen smelled of onions and something slow, and the long coat was on its hook, and she stood in the hall for a minute for no reason at all, breathing it in, before she went up.", crush: S(UP), months: [8, 9] }
  ]);
  add('late.battled', [
    { t: "Back from the tower. On the stairs he walked one step behind her the whole way up, *in case*, he said, in case of what he didn't say, and at the landing he said *good work tonight* to the wall beside her head and went up to his floor two steps at a time.", crush: A(UP) },
    { t: "Back from the tower, every floor in her legs. Akihiko had walked her home from the gate with his hand hovering an inch behind her elbow, never touching it, the whole length of the street, and she fell into bed thinking about the inch.", crush: A(PUP) },
    { t: "Back from the tower. He'd taken a hit tonight that had been coming for her, and shrugged it off, and in the entrance hall when nobody was looking she'd checked his ribs with two fingers through his shirt and he'd stood very still and let her, and she was still thinking about how still.", crush: A(['almost', 'dating']) },
    { t: "Back from the tower. At the door Shinjiro looked her over once, top to bottom, the way he checked a fish at the market, and said *you're not hurt*, and it wasn't a question, and he went to put the rice on.", crush: S(UP), months: [8, 9] },
    { t: "Back from the tower. Akihiko and Junpei walked her home arguing about who'd hit what, the way they always did, and she fell asleep listening to the argument carry on through the wall.", crush: A(FRIEND) }
  ]);
  add('late.plain', [
    { t: "The dorm settled. Somewhere on the boys' side a door, and then feet on the stairs, and then the front door, softly, which meant it was nearly five, which meant she should have been asleep hours ago, and she lay there and listened to him go.", crush: A(UP), months: [4, 5, 6, 7, 8, 9, 10] },
    { t: "She lay in the dark with her phone face up on her chest, waiting for nothing, and then it buzzed, and it was nothing, it was a weather alert, and she put the phone face down and lay there feeling stupid in a way she couldn't entirely regret.", crush: A(BUILD) },
    { t: "The dorm went quiet. From the kitchen, very faintly, the sound of a knife on a board, slow and steady, at one in the morning, and she fell asleep counting it.", crush: S(UP), months: [8, 9] }
  ]);
  add('monorail.clear', [
    { t: "The monorail across the bay. He got on at the same stop she did, because they lived in the same building, and stood by the door because he always stood by the door, and she stood by the same door because it was the nearest one. That was all it was. It was the nearest door.", crush: A(BUILD) },
    { t: "The monorail, sun on the water. Two second-years with matching hair clips got on at the next stop, saw who was standing by the door, saw who was standing next to him, and spent the whole ride whispering, and Akihiko asked her if she'd stretched, and she said yes, and she hadn't.", crush: A(PUP), ...SCHOOL_TERM1 },
    { t: "The monorail across the bay. He held the strap and she held his sleeve, because the strap was too high and his sleeve was right there, and a first-year across the aisle looked at her hand on his sleeve and then very carefully out of the window.", crush: A('dating') }
  ]);
  add('monorail.rain', [
    { t: "Rain on the monorail windows and the carriage full of wet umbrellas. Someone's umbrella dripped on her shoe and someone's elbow found her ribs and then Akihiko's arm was on the strap over her head, a wall between her and the crowd, and he was talking about the weather, very fast, at the window.", crush: A(UP) }
  ]);
  add('chatter.morning', [
    { t: "Did you see? They came in together again. Again!", crush: A(UP), ...SCHOOL_TERM1 },
    { t: "Sanada-senpai said good morning to her first. Before the gate. I'm writing it down.", crush: A(PUP) },
    { t: "Is the transfer student dating Sanada-kun or not? Somebody find out. My sister's in the fan club and she won't eat.", crush: A(['puppy', 'almost']), ...SCHOOL_TERM1 },
    { t: "Aragaki-kun was at school today. Aragaki. He held the door for somebody. I'm not making this up.", crush: S(UP), months: [9] }
  ]);
  add('chatter.lunch', [
    { t: "He ran past the window during third period. He looked up at her floor. I saw it.", crush: A(UP) },
    { t: "The newsletter says it's 'under investigation.' The newsletter says that about everything.", crush: A(PUP), ...SCHOOL_TERM1 },
    { t: "It's official. The fan club's president cried in the bathroom. In a dignified way.", crush: A('dating'), ...AUTUMN },
    { t: "They're just friends, apparently. Best friends. Which is somehow more annoying.", crush: A(FRIEND), ...AUTUMN }
  ]);
  add('evening.sub', [
    { t: "The lounge smells like instant ramen and someone's protein shake. Junpei is very obviously not looking at you. What now?", crush: A(UP) },
    { t: "Yukari is on the sofa with a magazine she isn't reading. She asks where you've been in a voice that already knows. What now?", crush: A(PUP) },
    { t: "Fuuka says Akihiko-senpai asked where you were, twice, and then said it didn't matter, twice. What now?", crush: A(PUP), after: '6/9' },
    { t: "Mitsuru, passing through, says good evening, and then, after a pause that is not like her, that Akihiko is on the roof. Just so you know. What now?", crush: A(['almost']) },
    { t: "Something is on the stove, lid on, and a note on the counter in blunt handwriting: *don't lift it*. What now?", crush: S(UP), months: [8, 9] },
    { t: "Koromaru is lying across the kitchen doorway. Somebody in there is humming, badly, and stops the second your foot hits the hall. What now?", crush: S(PUP), months: [8, 9] }
  ]);

  /* ── Texts: by phase, awkward to easy. Ambient windows (core.js deliverTexts); Solar texts S.E.E.S. lowercase. ── */
  const T = W.FEMC_GAME_TEXTS;
  if (!T) return;
  const ak = t => ({ from: 'akihiko', t }), sh = t => ({ from: 'shinjiro', t });
  (T.ambient ||= []).push(
    // Akihiko, noticed: he's never once texted anybody anything that wasn't a time.
    { id: 'cr-tx-aki-dinner', thread: 'akihiko', from: '4/23', to: '5/12', slot: 'evening', crush: A(['noticed', 'crush']), msgs: [
      ak('did you eat dinner'), ak("mitsuru says i'm not allowed to ask people if they had protein. she says it's rude"), ak('so. did you eat dinner')
    ], reply: [
      { t: 'i had protein', crush: A(1), then: [ak('ha'), ak('good'), ak("i'm telling mitsuru")] },
      { t: 'is this a check-in or a quiz', crush: A(1), then: [ak('check-in'), ak('...quiz'), ak("you passed. goodnight")] },
      { t: 'yes thank u', then: [ak('ok. good.')] }
    ] },
    { id: 'cr-tx-aki-jab', thread: 'akihiko', from: '4/27', to: '5/18', slot: 'late', crush: A(['noticed', 'crush']), msgs: [
      ak("what's the english word for the punch that's not a real punch. the quick one"), ak("it's for homework"), ak("it's jab. i remembered. never mind. go to sleep")
    ], reply: [
      { t: 'ur doing english homework at midnight?', crush: A(1), then: [ak("i'm doing all the homework at midnight. i was at the club till nine")], },
      { t: 'jab', then: [ak('jab'), ak('thanks')] }
    ] },
    // crush: things in the shoe lockers, a question asked twice.
    { id: 'cr-tx-aki-umbrella', thread: 'akihiko', from: '5/14', to: '6/8', slot: 'evening', crush: A(UP), msgs: [
      ak('you left your umbrella in the third-year lockers'), ak("i'm bringing it home. i'm not using it"), ak("it's pink")
    ], reply: [
      { t: 'use it. its raining', crush: A(1), then: [ak("i'm not using a pink umbrella"), ak('...'), ak("i used it. junpei took a picture. don't look at the group chat")] },
      { t: 'thank u!!', then: [ak("it's on your shoe shelf. dry"), ak('i dried it')] }
    ] },
    { id: 'cr-tx-aki-awake', thread: 'akihiko', from: '5/22', to: '6/20', slot: 'late', crush: A(UP), msgs: [
      ak('are you awake'), ak('never mind'), ak('go to sleep')
    ], reply: [
      { t: 'r u?', crush: A(1), then: [ak('...'), ak('yeah'), ak("can't sleep before a full moon. i know it's not for days. my body doesn't"), ak('ok. goodnight. for real')] },
      { t: 'what is it', crush: A(1), then: [ak("nothing. i wanted to see if you'd answer"), ak("that sounded weird. it's not weird. goodnight")] },
      { t: '(Pretend you were asleep.)', silent: true, then: [ak('good'), ak('5.')] }
    ] },
    // puppy love: he's started asking things that aren't times.
    { id: 'cr-tx-aki-telegram', thread: 'akihiko', from: '6/14', to: '7/6', slot: 'evening', crush: A(PUP), msgs: [
      ak('junpei says i text like a telegram'), ak('is that bad'), ak('stop')
    ], reply: [
      { t: 'i like ur telegrams', crush: A(1), then: [ak('...'), ak('ok'), ak("i'm keeping them short then. stop")] },
      { t: 'use a full sentence. i dare u', crush: A(1), then: [ak("Dear Solar, I hope this message finds you well, your guard was too low on the third floor tonight, and I would like to discuss it at five."), ak('that took four minutes'), ak('never again')] }
    ] },
    { id: 'cr-tx-aki-milk', thread: 'sees', from: '6/18', to: '7/10', crush: A(PUP), msgs: [
      { from: 'yukari', t: 'why is there strawberry milk in the fridge with a label on it that says SOLAR in his handwriting' },
      { from: 'junpei', t: 'i asked him. he said "she likes the pink one." and walked away. like a cowboy' },
      { from: 'fuuka', t: 'i think that\'s really nice!!' }, { from: 'yukari', t: "fuuka it's NOT nice it's a CRIME. i live here" }
    ], reply: [
      { t: 'its just milk', crush: A(1), then: [{ from: 'junpei', t: "it's never just milk leader" }, { from: 'junpei', t: "it's NEVER just milk" }] },
      { t: 'did anyone drink it', then: [{ from: 'yukari', t: 'junpei tried. senpai heard the fridge from the second floor' }, { from: 'junpei', t: 'i will not be speaking on this' }] }
    ] },
    // almost: the summer.
    { id: 'cr-tx-aki-heat', thread: 'akihiko', from: '7/24', to: '8/12', slot: 'late', crush: A(['puppy', 'almost']), msgs: [
      ak("it's too hot to run at five"), ak("so we're running at four thirty"), ak("the sun cheats after five. i've checked")
    ], reply: [
      { t: 'ur insane. ill be there', crush: A(1), then: [ak('i know'), ak('to both')] },
      { t: '4:45 and i pick the route', crush: A(1), then: [ak('...'), ak('deal'), ak('nobody else gets to pick the route. just so you know')] }
    ] },
    { id: 'cr-tx-aki-deleting', thread: 'akihiko', from: '8/12', to: '8/31', slot: 'late', crush: A(['almost']), msgs: [
      ak('i keep typing something and deleting it'), ak("it's not important"), ak('5.')
    ], reply: [
      { t: 'type it', crush: A(2), then: [ak('...'), ak('tomorrow. on the roof. not by text'), ak("it's the kind of thing you say with your face")] },
      { t: '5.', then: [ak('5.')] }
    ] },
    { id: 'cr-tx-sees-pool', thread: 'sees', from: '8/10', to: '8/30', crush: A(['puppy', 'almost']), msgs: [
      { from: 'junpei', t: 'UPDATE ON THE POOL' }, { from: 'junpei', t: 'yukari has the end of august. i have "before the culture festival." fuuka says "when they\'re ready" which is not a date fuuka' },
      { from: 'yukari', t: "i didn't bet. i was FORCED to bet" }, { from: 'yukari', t: 'end of august though' }
    ], reply: [
      { t: 'what pool', then: [{ from: 'junpei', t: 'no pool. what pool. i said POLL' }, { from: 'fuuka', t: "i'm sorry leader :(" }] },
      { t: 'put me down for never', crush: A(-1), then: [{ from: 'yukari', t: 'ok that was cold' }, { from: 'junpei', t: "she's bluffing. she's bluffing right?" }] },
      { t: '(Leave it on read.)', silent: true, then: [{ from: 'junpei', t: 'ON READ. FUUKA WRITE THAT DOWN' }] }
    ] },
    // The mornings after the full moons (the world reacts): who walked her home.
    { id: 'cr-tx-aki-priestess', thread: 'akihiko', from: '5/10', to: '5/10', crush: A(BUILD), msgs: [
      ak('you called it early'), ak('i heard it on the radio. you called it early'), ak('good')
    ], reply: [
      { t: 'u told me to', crush: A(1), then: [ak('i know'), ak("people don't usually listen")] },
      { t: 'how r ur ribs', then: [ak('fine'), ak('better than sitting in a station all night listening')] }
    ] },
    { id: 'cr-tx-aki-empress', thread: 'akihiko', from: '6/9', to: '6/9', crush: A(UP), msgs: [
      ak('you stayed where i could see you'), ak('mostly'), ak('thanks')
    ], reply: [
      { t: 'mostly?', crush: A(1), then: [ak('the gym. second floor. you went left'), ak("i saw. i'm just saying i saw")] },
      { t: 'is fuuka ok?', then: [ak('asleep. mitsuru checked twice'), ak('you should be too')] }
    ] },
    { id: 'cr-tx-aki-hierophant', thread: 'akihiko', from: '7/8', to: '7/8', crush: A(PUP), msgs: [
      ak('the tape held'), ak('told you')
    ], reply: [
      { t: 'it always holds when u do it', crush: A(1), then: [ak('...'), ak('yeah'), ak("i'll do it next time too then")] },
      { t: 'it was too tight', then: [ak('it was exactly right'), ak("...i'll do it looser. a little")] }
    ] },
    { id: 'cr-tx-aki-chariot', thread: 'akihiko', from: '8/7', to: '8/7', crush: A(['almost']), msgs: [
      ak("you didn't let go of my sleeve on the bridge"), ak("i'm not complaining"), ak("i'm just saying i noticed")
    ], reply: [
      { t: 'i noticed too', crush: A(1), then: [ak('ok'), ak('good'), ak("i'm going to sleep now. i'm not going to sleep")] },
      { t: 'it was a scary bridge', then: [ak('it was'), ak('hold it again next time. the sleeve')] }
    ] },
    // After the arrivals: dating, or friends.
    { id: 'cr-tx-aki-nextdoor', thread: 'akihiko', from: '9/3', to: '9/30', crush: A('dating'), msgs: [
      ak("is it weird if i text you from the next classroom"), ak("i'm doing it anyway"), ak('your hair is doing the thing')
    ], reply: [
      { t: 'what thing', then: [ak('the thing where the left side gives up'), ak("i like it. stop fixing it. i can see you fixing it")] },
      { t: 'pay attention to ur teacher', then: [ak("she's talking about the meiji constitution"), ak('i already know about the meiji constitution'), ak('i know about your hair too')] }
    ] },
    { id: 'cr-tx-aki-goodnight', thread: 'akihiko', from: '10/12', to: '11/20', slot: 'late', crush: A('dating'), msgs: [
      ak("you're asleep"), ak("good. i'm saying goodnight to the phone then"), ak('goodnight phone')
    ], reply: [
      { t: 'goodnight akihiko', then: [ak('...'), ak("you were awake"), ak('goodnight')] },
      { t: '(Send a moon.)', then: [ak('?'), ak('oh'), ak("that's a moon"), ak('goodnight')] }
    ] },
    { id: 'cr-tx-aki-hat', thread: 'akihiko', from: '12/2', to: '12/20', slot: 'late', crush: A('dating'), msgs: [
      ak('snow tomorrow. maybe'), ak("we're running in it. bring a hat"), ak('not the one with the ears. junpei will never let me hear the end of it')
    ], reply: [
      { t: 'the one with the ears', then: [ak('...'), ak('fine'), ak("it's a good hat")] },
      { t: 'ok coach', then: [ak("i'm not your coach"), ak("i'm worse")] }
    ] },
    { id: 'cr-tx-aki-friends', thread: 'akihiko', from: '9/5', to: '10/5', crush: A(FRIEND), msgs: [
      ak('junpei wants a rematch on the bench. he says your record was a fluke'), ak('it was not a fluke'), ak('river. saturday. are you in')
    ], reply: [
      { t: 'obviously', then: [ak('good'), ak("i'm bringing the ruler too. he hasn't done the ruler")] },
      { t: 'only if u buy hagakure after', then: [ak("i always buy hagakure after"), ak("that's not a condition, that's a fact")] }
    ] },
    // Shinjiro: by text, he's shorter than in person, which is saying something.
    { id: 'cr-tx-shin-longway', thread: 'shinjiro', from: '6/20', to: '8/5', slot: 'late', met: ['shinjiro'], crush: S(['noticed', 'crush']), msgs: [
      sh('you walked the back way again'), sh("don't")
    ], reply: [
      { t: 'how do u know', crush: S(1), then: [sh('i know'), sh('go to bed')] },
      { t: 'it was faster', then: [sh("it wasn't")] }
    ] },
    { id: 'cr-tx-shin-container', thread: 'shinjiro', from: '8/10', to: '8/31', slot: 'evening', crush: S(UP), msgs: [
      sh('blue container. top shelf. yours'), sh("don't let iori near it")
    ], reply: [
      { t: 'what is it', crush: S(1), then: [sh('food')] },
      { t: 'thank u shinjiro', crush: S(1), then: [sh("it's leftovers"), sh('...eat it hot. not cold. microwave two minutes')] }
    ] },
    { id: 'cr-tx-shin-light', thread: 'shinjiro', from: '8/20', to: '9/25', slot: 'late', crush: S(PUP), msgs: [
      sh("your light's still on"), sh('i can see it from the stairs'), sh('go to sleep')
    ], reply: [
      { t: 'why r u on the stairs', crush: S(1), then: [sh('...'), sh('water')] },
      { t: 'reading', then: [sh('read tomorrow')] }
    ] },
    { id: 'cr-tx-shin-toomuch', thread: 'shinjiro', from: '9/2', to: '10/2', slot: 'evening', crush: S('dating'), msgs: [
      sh('made too much'), sh("that's a lie"), sh('come down')
    ], reply: [
      { t: 'coming', then: [sh('bring a bowl')] },
      { t: 'what did u make', then: [sh('come down and find out')] }
    ] },
    { id: 'cr-tx-shin-milk', thread: 'shinjiro', from: '8/14', to: '9/10', slot: 'evening', crush: { akihiko: UP, shinjiro: UP }, msgs: [
      sh('aki bought you strawberry milk again'), sh("it's in the fridge"), sh("i didn't tell you that")
    ], reply: [
      { t: 'why are u telling me', crush: { shinjiro: 1 }, then: [sh('...'), sh("cause he won't")] },
      { t: 'ill thank him', crush: { akihiko: 1 }, then: [sh('yeah'), sh('do that')] }
    ] }
  );
})();
