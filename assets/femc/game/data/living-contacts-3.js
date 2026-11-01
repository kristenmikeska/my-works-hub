/* Phone contact cards and ordinary-day invites (2026-11-01), writer 3: chenle, cherry, danielle, jaehyun, jaemin, jay, junkyu,
   niki, sunoo, sunghoon, kat. Format: core.js FemcLife header (life.js). No birthdays: none is stated in these links' data. */
(() => {
  const C = (window.FEMC_GAME_CONTACTS ||= {});
  const X = (window.FEMC_GAME_LINK_EXTRAS ||= {});
  const inv = (id, o) => { (X[id] ||= {}).dayInvite = o; };

  C.chenle = {
    food: 'Grape soda. Thin chocolate sticks, which he counts as a food group.',
    hobbies: 'Games. Tank main. Talks at length about nothing else.',
    learned: {
      2: 'Plays the back row because the front cabinets lag. Keeps one number: three hours, eleven minutes.',
      4: 'Hates shrimp-chip residue on the stick. Has made himself the one nobody worries about.',
      6: 'Calls fights in seconds and percentages. Tells her exactly how low she got.',
      8: 'Looks after people with food and cold air. Says it is all he has got.',
      10: 'Hates the cold. Sits in it anyway. Means it when he says he will stand in front.'
    }
  };
  inv('chenle', {
    ask: ['back row later. the good cabinet is free. i checked twice', "game panic today. i'll be early. that's not news", 'i have 9 coins and a theory. later. back row'],
    ok: ["ok. you'll be second. that's fine", 'good. bring a drink. not shrimp chips'],
    no: ['ok. logged', 'ok. the cabinet will survive. probably'],
    sad: ["that's three. i'm not counting. i counted", "back row's still there. that's all. no reply needed"]
  });

  C.cherry = {
    hobbies: 'Ice skating, lately. Also hating people, which she calls a hobby.',
    learned: {
      2: 'Calls her "knockoff" so she will not forget the real one. Means it lovingly. Mostly.',
      4: 'Not a friend. Her best friend; there is a difference. Told her to run, mostly out of spite.',
      6: 'Does not go to class. Still knows Solar can barely add. Cares loudly, with swearing.',
      8: 'Yells when she is scared. Is scared far more often than she lets anyone see.',
      10: 'Does not run, ever. Swears she will run at Solar across any room anyway.'
    }
  };
  inv('cherry', {
    ask: ['wild duck later. im not asking', 'r u free today or r u being mysterious. wild duck either way', "come eat fries w me later. i'll pretend i didnt save u any"],
    ok: ['finally. corner booth', 'good. ur fries r already in danger'],
    no: ['wow. ok. ur dead to me till tmrw', 'fine. love u bitch. eat smth'],
    sad: ['thats three. i can take a hint. i wont. but i can', "ok i'll stop asking. im lying. but i'll be quieter abt it"]
  });

  C.danielle = {
    hobbies: 'Photography. A disposable camera, twenty-seven shots, rationed.',
    learned: {
      2: 'Keeps the shape of a week. Has opinions about who gets the first shot on a roll.',
      4: 'Everyone at the guesthouse rounds, apparently. She does not. She checks every column.',
      6: 'Plans every room in advance. The one she could not plan, she called an exclusive.',
      8: 'Knows one thing about Solar that Solar does not. Treats it like money in the bank.',
      10: 'Calls herself Solar\'s archive. Insists nothing she does is a kindness. Kindness does not keep.'
    }
  };
  inv('danielle', {
    ask: ["The overpass, later. I'll be there anyway. You might as well be too.", "Are you free later? I have a column that won't add up and a coffee I won't drink.", "I'm at the overpass after. Come if you'd like the good view. I'd like the company."],
    ok: ["Good. I'll have the coffee. You'll have the column.", 'Wonderful. Try not to be nearly late.'],
    no: ["Of course. I'll note it.", "That's fine. The overpass isn't going anywhere. Neither am I."],
    sad: ["That's three. I'm not keeping track. I'm just very good at remembering.", "I'll stop asking for a while. Not because I mind. Because it's becoming a pattern."]
  });

  C.jaehyun = {
    hobbies: 'Football. Quarterback. Running the shrine steps, up and down, whatever the weather.',
    learned: {
      2: 'Sat three hours by the radio while she fought, hating that he could not call a play.',
      4: 'Has never missed a game in three years. Looked up at the family suite every time.',
      6: 'Decides for her before he asks. Is learning, slowly, to say he was wrong to.',
      8: 'Remembers she sang alto. Says the house sounded lived-in when she did.',
      10: 'Practicing asking instead of telling. Says it is harder than anything Father has handed him.'
    }
  };
  inv('jaehyun', {
    ask: ["I'm running the steps later. Come if you're free.", "Are you free today? The steps. I'll bring water. You won't.", "Later, at the shrine. I'd like the company. That's the whole message."],
    ok: ['Good. Wear a coat.', "Good. I'll be on the steps. You'll find me."],
    no: ['Understood. Eat something.', 'Alright. The offer stands.'],
    sad: ["That's three. I'm not going to lecture you. I'm only noting it.", "I'll stop asking for a while. I'll still be at the steps."]
  });

  C.jaemin = {
    hobbies: 'Karaoke. Throwing parties, in any dimension, for anyone.',
    learned: {
      2: 'Got "the music was fine" out of Jaehyun once. Considers it a career high.',
      4: 'Likes to know who got home. Came through looking for two people, not one.',
      6: 'Reads a party by its cups: who stayed, who left early, who held one all night.',
      8: 'Paid Hyein\'s deposit up front, exchange rate on the back. Respects a businesswoman.',
      10: 'Planned a whole trip without a first aid kit. The next one gets two.'
    }
  };
  inv('jaemin', {
    ask: ['solar lee!! office hours tonight 🎤 biggest booth. my lady, ur expected', 'r u free later?? the booth is open and my voice is RESTED ✨', 'tonight. karaoke. me, a tambourine, and hopefully u 🎤'],
    ok: ['YES. fabulous. i am ecstatic 🎤', "perfect!! melon soda's on me ✨"],
    no: ['noooo. ok!! drink water 💔', 'all good!! the booth will mourn quietly'],
    sad: ["three no's in a row. a lesser social chair would be hurt. i'm only a little hurt 💔", "ok i'm giving tambourine #2 a rest. it's here when ur ready ✨"]
  });

  C.jay = {
    food: 'Rice. It has never once let anybody down.',
    hobbies: 'Cooking, for whoever is home. Football, at Hanlim.',
    learned: {
      2: 'Feeds anyone in the kitchen, dog included. Texts to balance out Jungwon\'s full stops.',
      4: 'Will not touch the dorm\'s good pot. Says it is not his, and means it.',
      6: 'Wants the dorm\'s missing dish cooked again. Not to replace it. Just so it is around.',
      8: 'Keeps an unlit cigarette behind his ear. Quit four years ago, mostly.',
      10: 'Has a list of people he cooks for. It used to be just him.'
    }
  };
  inv('jay', {
    ask: ['dinner later. dorm kitchen. bring nothing', 'u free tonight? making too much again. on purpose', 'kitchen tonight. need a taster who doesnt lie'],
    ok: ['bet', 'cool. dont be late its better hot'],
    no: ['all good. saving u a container', '💀 ok. ur loss'],
    sad: ['three in a row 💀 ok. ur container is still in the fridge', 'not gonna keep asking. gonna keep cooking tho. doors open']
  });

  C.junkyu = {
    food: 'Ice cream. Hugs too, though those are not food.',
    learned: {
      2: 'Always asks first; it is his thing. Is on her team before she knows the game.',
      4: 'Counts every thank-you she says. Kept count so he would know she was still there.',
      6: 'Wanted to come on her six-thirty dog walks for ages. She finally invited him.',
      8: 'Cannot draw. Is doing Christmas cards for everyone anyway, agonizing over every one.',
      10: 'Says it is the wind when he cries. Then admits it is a little wind.'
    }
  };
  inv('junkyu', {
    ask: ["SOL!! r u free tonight?? arcade!! i'm asking first!!", 'hiii!! later today?? i saved u a token!! one token!!', 'arcade tonight?? the dance game misses u. i miss u more!!'],
    ok: ["YAY!!!! ok!! i'll be waving!!", "omg!!! ok!!! i'm counting this one!!"],
    no: ["ok!! that's ok!! drink water!!", 'aw ok :( i support u in whatever!!'],
    sad: ["that's three!! i'm not sad!! i'm a little sad :( it's ok!!", "i'll stop asking for a bit!! but i'm still asking first next time!! that's my thing!!"]
  });

  C.niki = {
    food: 'Bananas. One from the guesthouse desk every morning; the man counts.',
    hobbies: 'Basketball. Owning every high-score table in Game Panic.',
    learned: {
      2: 'Owned Game Panic\'s high-score tables within two days. Plays capitals for tangerines.',
      4: 'Finally met someone younger: Ken, ten. Has declared himself a senpai of life.',
      6: 'Cannot beat the crane game; it is luck. Says lucky and right are the same thing.',
      8: 'His grandma in Osaka is eighty-one. Sends shirts he has never worn outside his room.',
      10: 'Has been on his last straw since he learned to walk, per Heeseung.'
    }
  };
  inv('niki', {
    ask: ['game panic tonight. i need a witness. for greatness', 'u free later?? new high score incoming. its mine. come see', 'bruh come to game panic later. the counter guy misses u. (i made that up)'],
    ok: ['LETS GOOO', 'ok. im renaming a table in ur honor while i wait'],
    no: ['boooo', 'ts so sad. ok -skull-'],
    sad: ['thats three. ur on ur last straw. kidding. mostly', 'ok ill stop asking. the tables still have ur spot tho']
  });

  C.sunoo = {
    hobbies: 'Baking at five in the morning. Taking every group photo.',
    learned: {
      2: 'Knows every regular\'s order, from the newspaper man\'s Americano down.',
      4: 'Opens the café at five, perfectly, for his grandmother. Can tell when Jungwon has not eaten.',
      6: 'Everyone calls him sunshine. Sometimes he is just tired, and nobody notices.',
      8: 'Makes the cake for whoever is here. Asks what she wants, not what she should do.',
      10: 'The window seat is always hers. Anything she orders is on the house. Wherever.'
    }
  };
  inv('sunoo', {
    ask: ['solar!! r u free later? come by the cafe!! croissants r fresh :)', 'hiii :) yeobos later? ur window seat misses u', 'r u free after? i made something new and i need a taste tester!! dw if not!!'],
    ok: ['YAY!! ur croissant is reserved!!', 'ok!!! :) see u later!!'],
    no: ['dw!!! eat something tho!!', "thats ok!! i'll save u one :)"],
    sad: ["three no's!! thats ok!! the croissants r just a little lonely :)", "i'll stop bugging u for a bit!! the window seat is still urs!! always!!"]
  });

  C.sunghoon = {
    hobbies: 'Football in the fall. Something in the winter he does not discuss.',
    learned: {
      2: 'Talks about himself in the third person. Will not sit with his back to a door.',
      4: 'Will accept a bet from Junpei before the ramen even arrives.',
      6: 'The winter thing he does not discuss is the ice. He is very, very good.',
      8: 'Cuts apples into rabbits for Jungwon and stands over him until he eats.',
      10: 'Sat with his back to a door for the first time in his life.'
    }
  };
  inv('sunghoon', {
    ask: ['Park Sunghoon will be at the window table tonight. the table requests you', "free later? yeobo's. i'll have ordered already. it's the croissant", "tonight, yeobo's. i need an audience. you're the audience. - s"],
    ok: ['good. the prince is gracious about it', "good. i'll be watching the door. you'll know me"],
    no: ['noted. Park Sunghoon will dine alone, beautifully', "another night. the table isn't going anywhere. neither am i"],
    sad: ["three refusals. Park Sunghoon has never been refused three times. he's taking notes", "i'll stop asking for a bit. the chair across from me stays empty. it's fine. - s"]
  });

  C.kat = {
    food: 'Ramen, as a project. Ethan eats the noodles; Kat eats everything else.',
    hobbies: 'Overwatch (Kat, Ana). Car soccer, almost Champ (Ethan). The List (both).',
    learned: {
      2: 'Kat and Ethan have a list for becoming locals. Ethan has been almost Champ for ages.',
      4: 'Kat can read a love life in a minute flat. Ethan will not eat anything that looks back.',
      6: 'Ethan counts dog walks as cardio. Kat plays Ana and takes it very seriously.',
      8: 'Kat has days. She will be mean at the sky, then make sure Solar has eaten.',
      10: 'The konbini clerk knows their order now. Ethan kind of saved Kat, once. Do not say "saved."'
    }
  };
  inv('kat', {
    ask: ["r u free later?? we're walking the dogs by the river. come", 'tonight. riverside. cosmo is demanding u specifically', 'come walk w us later pls. wanda has energy and we dont'],
    ok: ["YAY. ethan's getting snacks", 'ok perfect. wanda is already losing her mind'],
    no: ['noooo ok. next time!!', 'ok drink water. love u'],
    sad: ['thats three. oh brother. its fine. cosmo is being dramatic about it, not me', "ok we'll stop asking for a bit. the dogs will still scream when they see u"]
  });
})();
