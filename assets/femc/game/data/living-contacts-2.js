/* Phone contact cards and ordinary-day invites (2026-11-01), writer 2: haechan, jungwon, jihoon, minji, hanni, hyein, mark, yunjin. Format: core.js FemcLife header (life.js). */
(() => {
  const C = (window.FEMC_GAME_CONTACTS ||= {});
  const X = (window.FEMC_GAME_LINK_EXTRAS ||= {});
  const inv = (id, o) => { (X[id] ||= {}).dayInvite = o; };

  /* ── Haechan (laundry room, evening) ── */
  C.haechan = {
    hobbies: 'Making tracks nobody gets to hear. Games, as a sniper.',
    learned: {
      2: 'From two places. Quitting smoking in one of them. Not even pretending in the other.',
      4: 'Carries a Discman whose batteries died years ago. Nobody touches it.',
      6: "Makes instant ramen at three in the morning. Won't say how he knew I skipped dinner.",
      8: 'His name means full sun. His other name, nobody here says but me.',
      10: "Has been making the same song a long time. It isn't finished.",
      12: 'Always stops at the bottom of the stairs. Lets me go up first.',
      14: "Washes other people's pots himself. They go back dry or not at all."
    }
  };
  inv('haechan', {
    ask: [
      "laundry room tonight. dryer's yours if you want it",
      "you around later. i'll be downstairs. the usual one",
      "come down tonight. bring two cans. i'll pretend i hate mine"
    ],
    ok: ["mm. i'll save you the warm one", "ok. wear socks. the floor's cold"],
    no: ["ok. sleep then. actually sleep", "fine. eat something first. i'll know"],
    sad: [
      "three nights. the dryer's started asking about you",
      "you don't have to come down. i'm just saying i noticed. that's all"
    ]
  });

  /* ── Jungwon (student council room, after) ── */
  C.jungwon = {
    hobbies: 'Baduk, against himself, at night.',
    learned: {
      2: 'Council president two years running. His hands want a clipboard.',
      4: 'Winds his brother\'s stopped watch every night anyway. In case.',
      6: 'Writes two speeches before every result. The losing one is always longer.',
      8: 'Has a very small dog called Maeumi who gets out. Respects a schedule.',
      10: 'Keeps leaving a gap in the minutes where my surname should go.',
      12: 'Scheduled twenty-six days of February. Left two blank on principle.',
      14: 'The angrier he gets, the politer he gets. Each word politer than the last.'
    }
  };
  inv('jungwon', {
    ask: [
      "are you free later. council room. i'll be there regardless. that isn't pressure.",
      "i have tea and a terrible kettle. later, if you're free.",
      "council room later. i've cleared your end of the table. that's all."
    ],
    ok: ["good. i'll put the kettle on at the right time.", "noted. i'll stop pretending to work at a reasonable hour."],
    no: ["understood. i'll leave the chair where it is.", "that's fine. eat something anyway. i'm asking formally."],
    sad: [
      "three invitations. no reply. i've reviewed my wording. it seemed fine.",
      "you don't have to answer. i'd only like to know you've eaten."
    ]
  });

  /* ── Jihoon (Game Panic, after) ── */
  C.jihoon = {
    hobbies: 'Pilates. Talking about pilates.',
    learned: {
      2: "Does pilates. Talks about it constantly. Hasn't done it since he got here.",
      4: 'Has every photo of my dog on his phone. Calls him his son.',
      6: 'Hates Jungwon out loud. Said thanks to him once, for a can.',
      8: 'Says the quiet part loud so it sounds like a bit. That\'s the trick.',
      10: 'Bought my dog a winter coat. Made Junkyu probationary uncle.',
      12: 'Bought a cheap instant camera. Will not have a hole in the string.',
      14: 'Asks florists which flowers are toughest. Buys the almost-black ones.'
    }
  };
  inv('jihoon', {
    ask: [
      "game panic later. the crane game has Disrespected me again and i need a Witness",
      "r u free today. i'll be at game panic Being Iconic. attendance is Encouraged",
      "come to the arcade later ungrateful rug. i'll buy u one (1) soda"
    ],
    ok: ["FINALLY. a Woman of taste", "obviously. saving u the good stool. #blessed"],
    no: ["wow. ok. #abandoned", "fine. i'll lose to the crane game Alone. like a Hero"],
    sad: [
      "3 invites. 0 replies. i'm not counting. #counting",
      "ok i get it ur busy being Mysterious. still here tho. game panic. always"
    ]
  });

  /* ── Minji (Seaside Park, after) ── */
  C.minji = {
    hobbies: 'Filming whatever the light is doing. Ranked shooters, as godgirlji.',
    learned: {
      2: 'Asks permission about twenty times before she films. Means it every time.',
      4: 'Checks every clip of me every night, in case people fade here.',
      6: "Hates a flash that doesn't ask first. Her hands shook for days after.",
      8: 'Walks me home even though the guesthouse is the other way.',
      10: "Hundreds of hours of footage and she isn't in a single frame of it.",
      12: "Coverage means everything around the thing. She says that isn't less.",
      14: 'Won\'t put music under her film. Every song turns it into a music video.'
    }
  };
  inv('minji', {
    ask: [
      "hey duo. seaside park later? the light's supposed to be good. i'll ask first, promise",
      "r u free today? i'll be at the park filming the water. it needs a person in it :]",
      "seaside park later, if u want. no filming unless u say. i just like the company (:"
    ],
    ok: ["yay!! ill save u the dry end of the bench :]", "perfect. dont dress up. the light likes u as is"],
    no: ["thats ok! the water'll still be there. so will i (:", "no worries. ill film a seagull and pretend its u ;]"],
    sad: [
      "hey. no pressure at all. i just miss filming my favorite subject :]",
      "ok ill stop asking for a bit. u know where the park is (:"
    ]
  });

  /* ── Hanni (Chagall Café, after) ── */
  C.hanni = {
    hobbies: 'Evening meditation, at whatever hour. Being a homebody, loudly.',
    learned: {
      2: 'Cries at commercials. Cried at one for rice. A homebody who came anyway.',
      4: "Her face can't lie. Not won't. Can't.",
      6: "Is always Flora. Says being the nice one is so much work.",
      8: 'Does the kitchen at six. Pours a glass for everyone before they\'re up.',
      10: 'Knows exactly where my hair always knots.',
      12: 'Never lets herself have a cold. Once called pneumonia a cough.',
      14: 'Wants me to pick my own flowers. Her face votes anyway.'
    }
  };
  inv('hanni', {
    ask: [
      "sol!! r u free later?? chagall, window table. i'll order for u. sorry. bossy",
      "hiii!! coffee later?? the window seat. no pressure!! some pressure!!",
      "r u around today!! i'm saving u the chair by the window. it's warm like a cat spot"
    ],
    ok: ["YAY!!! ok i'm ordering now so it's ready!!", "ok!!! window table. i'll be the one waving"],
    no: ["ok!!! no worries!! drink some water today. sorry. mom mode", "aw ok!! another day!! the chair will wait!!"],
    sad: [
      "hi!! not being nosy!! i just miss u a normal amount. ok a little more",
      "ok i'll stop asking for a bit!! the window seat is still ours tho. sorry. love u"
    ]
  });

  /* ── Hyein (shop windows, after) ── */
  C.hyein = {
    hobbies: 'Sewing. Sketching. Judging mannequins out loud.',
    learned: {
      2: 'Knows my measurements by heart. Didn\'t even take the tape off her neck.',
      4: 'Wants to be told she\'s annoying right then. Not later, nicely.',
      6: "Doesn't sleep when I go out at midnight. Counts until I'm back.",
      8: "Dries her hair at three every night. Loud because she's scared.",
      10: 'Says ttyl and then stays five more minutes. Every time.',
      12: 'Lost her voice and wrote in capitals. Still the loudest in the room.',
      14: 'Puts a label in everything she makes. Forgets to make one for herself.'
    }
  };
  inv('hyein', {
    ask: [
      "sol. shop windows later?? the mannequins are ltrly begging for my opinion",
      "r u free today. i need a body to hold things up on. its u. ur the body",
      "come to the mall later. i'm judging windows and i need a witness fr"
    ],
    ok: ["YAY. second floor. i'll be the one yelling at a mannequin", "ok!!! wear something i can fix"],
    no: ["ok. drink water. ttyl. (i'll judge them alone. badly)", "boo. ok fine. ur missing a LOOK fr"],
    sad: [
      "ok thats 3 asks. i'm not mad. i'm just loud about it",
      "u can ignore me. ofc. i'll still save u the good mirror"
    ]
  });

  /* ── Mark (Port Island Station concourse, evening) ── */
  C.mark = {
    hobbies: 'The seagull piano at the station. Writing down every chime on the line.',
    learned: {
      2: 'Walks me home every time. Calls himself bodyguard Mark Lee.',
      4: 'Timed every station chime on the line with an orange stopwatch.',
      6: 'Knows which drink I want at which hour. He asked Hanni, a while ago.',
      8: 'Always means what he says. Means other things at the same time.',
      10: 'Credited my notes on everything. Won\'t put his name on what\'s mine.',
      12: 'Plays every request for a month and writes each one down.',
      14: 'Asked the guesthouse cook why the rice is soft. Then actually listened.'
    }
  };
  inv('mark', {
    ask: [
      "hey :) station piano tonight? no pressure. like negative pressure lol",
      "u free later? concourse. i'll be at the seagull piano being normal about it",
      "sol!! piano tonight if ur around. taking requests. urs go first ofc"
    ],
    ok: ["word. i'll grab u something sweet from the machine :)", "nice!! text me when ur on the train lol"],
    no: ["all good :) its not on u. get some rest", "ofc. another time. the seagulls'll wait lol"],
    sad: [
      "hey :) not keeping score lol. just miss having an audience of one",
      "its cool. for real. piano's there whenever. so am i :)"
    ]
  });

  /* ── Yunjin (harbor, after; maxRank 10) ── */
  C.yunjin = {
    hobbies: 'Singing to the gulls, loudly and badly.',
    learned: {
      2: "Says I'm her wife, as a bit. Neither of us admits who started it.",
      4: 'Lived in New York till high school. Never learned to be quiet in Korean.',
      6: "Stays up at low tide, every time, because I can't sleep through it.",
      8: 'Has a sticker code for everything. Alive, dead, and a fish.',
      10: 'Ate three bowls of rice cake soup and declared herself my elder.'
    }
  };
  inv('yunjin', {
    ask: [
      "babe. harbor later? i'll have two coffees (one is urs) (both are cold)",
      "sol r u free today. seawall. i'll be the loud one (obviously)",
      "wifey. come sit on the wall with me later. the gulls miss u (i told them to)"
    ],
    ok: ["YAY. ill save u the dry bit of wall (there's one dry bit)", "ok!! hurry. im already singing (sorry gulls)"],
    no: ["boo. ok. drink ur coffee somewhere warm then", "ok babe. tmrw. (thats not a question)"],
    sad: [
      "ok three no's. im not counting. (im counting) (love u tho)",
      "babe if ur alive just send a sticker. thats all. one sticker"
    ]
  });
})();
