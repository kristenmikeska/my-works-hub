/* Phone contact cards and ordinary-day invites (2026-11-01), writer 1: akihiko, shinjiro, yukari, junpei, mitsuru, fuuka, aigis, ken, koromaru, wren. Format: core.js FemcLife header (life.js). */
(() => {
  const C = (window.FEMC_GAME_CONTACTS ||= {});
  const X = (window.FEMC_GAME_LINK_EXTRAS ||= {});
  const inv = (id, o) => { (X[id] ||= {}).dayInvite = o; };

  C.akihiko = {
    birthday: { t: '9/22', rank: 5 },
    food: 'Hagakure ramen. The egg is "protein," and somehow ends up in your bowl.',
    hobbies: 'Boxing. Bridge and back at five in the morning, rain or not.',
    learned: {
      2: 'Grew up with a lot of kids and one bathroom. Keeps a list of what\'s his.',
      4: 'Counts reps out loud. Hates having nothing to do with his hands.',
      6: 'Lets people steal his egg. Always notices. Always lets them.',
      8: 'Says "five tomorrow?" like a question now. Starts sentences over when they come out wrong.',
      10: 'Still has the first gloves he ever owned. Too big for him. He wore them anyway.',
      12: 'Everybody runs, nobody walks. Koro is allowed to walk. Koro refuses.',
      14: 'Puts the egg in my bowl every time and calls it protein. Half is fair.'
    }
  };
  inv('akihiko', {
    ask: ['club later? bring your wraps. i\'ll hold the mitts', 'you free later? i need someone to time me. boxing club', 'come by the club after. you\'re dropping your left and i want to fix it'],
    ok: ['good. wrap your hands before you get there', 'ok. don\'t be late. i\'m timing that too'],
    no: ['ok. next time', 'fine. the bag will have to do'],
    sad: ['that\'s three. i\'m not counting. i\'m counting', 'mitts are still here. so am i. no pressure']
  });

  C.shinjiro = {
    hobbies: 'Cooking. He\'d say it\'s just food.',
    learned: {
      2: 'Feeds the shrine dog out of his coat. "Somebody has to" means yes.',
      4: 'Can smell powdered broth from the alley. Knows how to do it right, from bones.',
      6: 'Unpacks groceries cold things first. Drops scraps for the dog by accident, very precisely.',
      8: 'Never rushes anybody. "Nobody\'s timing you." Then: don\'t make it weird.',
      10: 'Wrote the dog\'s real food on the fridge. Not the canned garbage.',
      12: 'Feeds strays wherever he goes. Rice, egg, a little broth.',
      14: 'Tried to teach Ken the rice once. Ken wants to learn it properly now.'
    }
  };
  inv('shinjiro', {
    ask: ['you eat yet. come by later', 'later. you know where. don\'t bring anything', 'made too much. come get it tonight'],
    ok: ['good.', 'k. don\'t be late, it gets cold'],
    no: ['fine.', 'k. i\'ll put some aside'],
    sad: ['tch. third time. still putting a bowl aside', 'not asking again this week. bowl\'s in the fridge']
  });

  C.yukari = {
    hobbies: 'Archery. A Thursday-night drama she swears she doesn\'t watch.',
    learned: {
      2: 'Screens her mom\'s calls and says "telemarketer." Smiles perfectly while she does it.',
      4: 'Has heard every rumor since middle school. Has a look for handling people. Ask Junpei.',
      6: 'Says she\'s fine at breakfast, at dinner, and outside the bathroom. That\'s how you know.',
      8: 'Follows the curry box very, very hard. It burns anyway. Everyone eats it.',
      10: 'Writes her lists in pink pen. Number three is always the one she really wants.'
    }
  };
  inv('yukari', {
    ask: ['come by the range later? i need someone to tell me my form is fine', 'range later? i shoot, you sit. it\'s a whole system', 'you free later? come to the range. i\'ll buy the drinks after'],
    ok: ['yay. ok. don\'t be late, i\'ll be weird about it', 'ok good. bring snacks, i\'m always starving after'],
    no: ['aw ok. next time!', 'ok ok. text me if that changes'],
    sad: ['ok that\'s three. i\'m choosing to believe your phone is broken', 'still going to the range obviously. just saying the bench is open']
  });

  C.junpei = {
    food: 'Consommé chips. The good ones.',
    hobbies: 'Batting practice on the roof. Video games against a CPU he swears is cheating.',
    learned: {
      2: 'Swings a bat on the roof when something\'s wrong. His old man used to pitch to him.',
      4: 'Turns his phone face down when his mom calls. Pays back loans with interest.',
      6: 'Batted cleanup in middle school. Got funny so nobody would look at the bleachers.',
      8: 'Keeps a notebook he swears is math. It is not math.',
      10: 'Writes everything down now, bad takes included. Keeps his promises. It\'s a new thing.'
    }
  };
  inv('junpei', {
    ask: ['yo leader. lounge tonight? i got chips and a game the cpu keeps cheating at', 'u free tonight?? i need a witness for my high score. lounge', 'tonight. lounge. bring nothing, i have consommé'],
    ok: ['LETS GO', 'yesss ok. couch is reserved'],
    no: ['noooo. ok. the cpu wins this round', 'all good!! chips will keep. probably'],
    sad: ['3 for 3 on no\'s. thats a batting average man. a bad one', 'its cool its cool. couch misses u tho. couch said that not me']
  });

  C.mitsuru = {
    food: 'Nikuman from a convenience-store steamer. She says it\'s the best item on the list.',
    hobbies: 'Fencing. Driving, precisely and much too fast.',
    learned: {
      2: 'Had never been to a ramen counter. Slurps now, quietly. She\'s working up to it.',
      4: 'Keeps a list of ordinary things at the back of her planner. Eats fries left to right.',
      6: 'Drives precisely and much too fast. Didn\'t know about the long way until recently.',
      8: 'Makes lists when things are bad. Plays air hockey like a fencer.',
      10: 'Prefers the item to the planning, it turns out. Should have started with nikuman.'
    }
  };
  inv('mitsuru', {
    ask: ['Are you free later? I\'ll be in the council room. There\'s tea, and a second chair.', 'If you have time today, the council room. I have a list item that needs a witness.', 'I\'ll be in the council room later. Your company would be welcome. That isn\'t an order.'],
    ok: ['Good. I\'ll put the kettle on.', 'Excellent. I\'ve written it down.'],
    no: ['Understood. Another time.', 'Of course. I\'ll save the item until you\'re free.'],
    sad: ['That\'s three invitations. I\'m told this is the point at which one stops asking.', 'I won\'t ask again this week. The second chair stays where it is, however.']
  });

  C.fuuka = {
    hobbies: 'Taking machines apart. Old radios with a dial. Cooking, in numbered attempts.',
    learned: {
      2: 'Took apart her mother\'s sewing machine at seven. Put it back better.',
      4: 'Numbers her cooking attempts. Curry was thirty-four. Mitsuru had seconds.',
      6: 'Has made tamagoyaki forty-one times. Right about one time in three. Her wrist knows things.',
      8: 'Her grandmother hummed off-key and used too much sugar. Fuuka cooks from that memory.',
      10: 'Keeps everything. Measured my pinch of salt on the kitchen scale: 0.8 grams.'
    }
  };
  inv('fuuka', {
    ask: ['senpai, are you free tonight? i\'m trying something in the kitchen. it might be bad', 'um, kitchen later? i need a taster. sorry in advance!!', 'if you\'re not busy tonight, i saved you a stool in the kitchen :)'],
    ok: ['thank you!! please bring water', 'yay. i\'m writing you down as taster'],
    no: ['that\'s ok!! i\'ll save you some', 'ok! next time. i\'ll take notes for you'],
    sad: ['i made extra again. i\'ll stop doing that. (i won\'t)', 'the stool by the rice cooker is still yours. just for the record']
  });

  C.aigis = {
    learned: {
      2: 'Cannot swim. About three point four times the density of water. Neither can I, apparently.',
      4: 'Doesn\'t sleep. Stands in standby in the lounge, where she can hear the stairs.',
      6: 'Does the same calculation over and over when something hurts. Proofs don\'t always help.',
      8: 'Walks half a step behind me with no orders. Decided that herself.',
      10: 'Dropped the honorific. Keeps a copy of my name on file for bad days.'
    }
  };
  inv('aigis', {
    ask: ['Solar-san. I will be on the roof this evening. The sightlines are optimal. Come?', 'Solar-san. Are you available later? There are two places at the roof rail. One is unassigned.', 'Good morning. I am requesting your company on the roof this evening. It is not an order.'],
    ok: ['Confirmed. I will be early.', 'Thank you. I have logged it as a preference.'],
    no: ['Understood. I will keep your place at the rail.', 'Acknowledged. Another evening, then.'],
    sad: ['That is three invitations. I am told this is when one stops sending them. I am noting it.', 'The rail is still there. So am I. This is not a request. It is a status report.']
  });

  C.ken = {
    hobbies: 'Featherman, Sunday mornings at seven-thirty, volume on three. Practice with a taped pole.',
    learned: {
      2: 'Watches Featherman before anyone\'s up. Red is his favorite. The right side of the couch is his.',
      4: 'Walks Koromaru to the shrine every day so he doesn\'t have to wait alone.',
      6: 'Says good afternoon to everyone, even when he can barely talk. Very polite, very stubborn.',
      8: 'Changed his practice to guarding. Steps in front, pole level, like a gate.',
      10: 'Measures his height properly now, with the book. Three centimeters closer.'
    }
  };
  inv('ken', {
    ask: ['Solar-san, are you free later? I\'ll be at the shrine playground. Koromaru too.', 'Good morning. I\'ll be practicing at the playground later. You can watch. Or attack.', 'Solar-san. The playground later? I would like a second opinion on my footwork.'],
    ok: ['Thank you. I\'ll be there early.', 'Okay. Koromaru will be pleased. Me too.'],
    no: ['That\'s all right. Another time.', 'I understand. I\'ll tell you how it went.'],
    sad: ['I\'ll stop asking for a little while. I\'m not upset. I\'m being considerate.', 'Koromaru keeps looking at the gate. I told him you\'re busy. He doesn\'t believe me.']
  });

  C.koromaru = {
    food: 'Rice and egg, a little broth. The plum end of the onigiri. Not the bag.',
    learned: {
      2: 'Won\'t touch the food in the bag. Rice and egg, little broth, the plum end.',
      4: 'Walks half a body ahead on the flat and half a body behind on the stairs.',
      6: 'Knows where he\'s going before you do. Steady and certain, the whole way.',
      8: 'Hates being carried. Climbs the stairs on three legs as a point of honor.',
      10: 'Leans on you when you say the hard things out loud. Answers with one wuff.'
    }
  };
  inv('koromaru', {
    ask: ['Solar-san, Koromaru would like to go to the shrine this evening. He has asked twice.', 'Good morning. Koromaru is sitting by the lead again. Shrine steps this evening?', 'Solar-san. Koromaru wants to know if you can walk him tonight. I am translating.'],
    ok: ['Thank you. I said your name and his tail started going.', 'Okay. I\'ll tell him. He\'ll be by the door early.'],
    no: ['That\'s okay. I\'ll take him. He\'ll look for you at the gate, though.', 'I understand. I\'ll tell him you said hello.'],
    sad: ['Koromaru brought me one of your shoes. I don\'t know what he means by it. I think I do.', 'He\'s been sitting by the lead a lot. I\'m only reporting it. It isn\'t a complaint.']
  });

  C.wren = {
    learned: {
      2: 'Always on the last bench. Hums the song a little flat, one step off to the side.',
      4: 'Had never seen the sea. Thought it would be quiet. It was so loud.',
      6: 'Noticed I say "fine" twice a night. Seemed glad somebody else knows.',
      8: 'Bows to benches. Says "home" like she\'s stepping around a hole.',
      10: 'Counts everything. Says she got that from me.'
    }
  };
})();
