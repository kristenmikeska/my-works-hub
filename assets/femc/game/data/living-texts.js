/* The living world's texts (2026-10-21). Loaded after texts.js; formats in core.js deliverTexts.
   - afterRank: each link's reaction a day or two after a rank scene (FEMC_GAME_LINK_EXTRAS[link].afterRank[n]). They react
     to the scene, never to a particular choice in it, so every path reads right.
   - ambient: random daytime texts and group chats that fit their stretch of the year (one a day at most).
   - dated: the night before each full moon, and Solar's birthday.
   Solar's own lines text like her, whoever she's writing to (Kat's ruling): lowercase and "u" with Runners and strangers
   people and with S.E.E.S., caps and keysmash with Hoax people. Group threads: texts.js `groups`. */
(() => {
  const X = (window.FEMC_GAME_LINK_EXTRAS ||= {});
  const add = (id, rank) => { (X[id] ||= {}).afterRank = { ...((X[id] || {}).afterRank || {}), ...rank }; };

  add('akihiko', {
    1: { slot: 'evening', msgs: [{ from: 'akihiko', t: 'you have a stopwatch now' }, { from: 'akihiko', t: 'river. tomorrow. write your time down. i want to see it' }],
      reply: [{ t: 'ok coach', link: 'akihiko', notes: 1, then: [{ from: 'akihiko', t: 'not a coach. just faster than you' }] },
        { t: 'what if its bad', link: 'akihiko', notes: 2, then: [{ from: 'akihiko', t: "then it's your first one. first ones are supposed to be bad" }, { from: 'akihiko', t: 'that way the next one means something' }] }] },
    4: { slot: 'late', msgs: [{ from: 'akihiko', t: "the red ones are yours now. don't wash them on hot" }, { from: 'akihiko', t: "tournament's the 11th. you still don't have to come" }],
      reply: [{ t: 'ill be there', link: 'akihiko', notes: 2, then: [{ from: 'akihiko', t: 'ok' }, { from: 'akihiko', t: 'good' }] },
        { t: 'who even washes hand wraps', link: 'akihiko', notes: 1, then: [{ from: 'akihiko', t: "people who don't want them to smell like a gym bag" }, { from: 'akihiko', t: 'so. me' }] }] },
    6: { slot: 'evening', delay: 1, msgs: [{ from: 'akihiko', t: 'thanks. for the roof' }, { from: 'akihiko', t: 'shinji did kill him about the pot btw. you missed it. it was great' }],
      reply: [{ t: 'anytime. i mean it', link: 'akihiko', notes: 2, then: [{ from: 'akihiko', t: 'i know you do' }, { from: 'akihiko', t: "that's the problem. i'm going to take you up on it" }] },
        { t: 'was it the good pot', link: 'akihiko', notes: 1, then: [{ from: 'akihiko', t: "it was the only pot. we're getting a new pot. junpei's paying" }] }] },
    9: { slot: 'early', msgs: [{ from: 'akihiko', t: '5.' }, { from: 'akihiko', t: "i'm out front either way. you don't have to come down" }],
      reply: [{ t: '5.', link: 'akihiko', notes: 3, then: [{ from: 'akihiko', t: 'good.' }] },
        { t: 'make it 5:30', link: 'akihiko', notes: 2, then: [{ from: 'akihiko', t: '5:15' }, { from: 'akihiko', t: 'final offer' }] }] }
  });
  add('shinjiro', {
    7: { slot: 'evening', msgs: [{ from: 'shinjiro', t: 'you left the rice on' }, { from: 'shinjiro', t: "it was fine. don't tell anyone i said that" }],
      reply: [{ t: 'was it actually fine?', link: 'shinjiro', notes: 2, then: [{ from: 'shinjiro', t: 'it was rice' }, { from: 'shinjiro', t: 'yeah' }] },
        { t: 'same time next week', link: 'shinjiro', notes: 3, then: [{ from: 'shinjiro', t: '...onions first. thin' }] }] }
  });
  add('haechan', {
    1: { slot: 'late', msgs: [{ from: 'haechan', t: "you didn't finish the can" }, { from: 'haechan', t: "it's flat now. pour it out. i'll get you another" }],
      reply: [{ t: 'how do u know i didnt finish it', link: 'haechan', notes: 2, then: [{ from: 'haechan', t: 'i can hear it from here' }] },
        { t: 'its still good', link: 'haechan', notes: 1, then: [{ from: 'haechan', t: 'liar' }] }] },
    3: { slot: 'late', msgs: [{ from: 'haechan', t: 'keep it another night' }, { from: 'haechan', t: "batteries are still dead. don't buy any" }],
      reply: [{ t: 'why not', link: 'haechan', notes: 2, then: [{ from: 'haechan', t: "because then i'd have to hear it" }] },
        { t: 'ok', link: 'haechan', notes: 1, then: [{ from: 'haechan', t: 'mm' }] }] },
    5: { slot: 'late', msgs: [{ from: 'haechan', t: "you're not giving it back. are you" }],
      reply: [{ t: 'nope', link: 'haechan', notes: 2, then: [{ from: 'haechan', t: 'figured' }] },
        { t: 'it smells like vanilla', link: 'haechan', notes: 3, then: [{ from: 'haechan', t: '...' }, { from: 'haechan', t: 'go to sleep, princess' }] }] },
    8: { slot: 'late', msgs: [{ from: 'haechan', t: '3. stairs.' }, { from: 'haechan', t: 'bring nothing' }],
      reply: [{ t: 'ok', link: 'haechan', notes: 2, then: [{ from: 'haechan', t: 'ok.' }] },
        { t: 'say please', link: 'haechan', notes: 3, then: [{ from: 'haechan', t: '...' }, { from: 'haechan', t: 'please' }] }] }
  });
  add('jungwon', {
    1: { slot: 'evening', msgs: [{ from: 'jungwon', t: "you left your pencil case in the council room. it's on the second shelf." }, { from: 'jungwon', t: 'i looked inside it. there are four pens. none of them work.' }],
      reply: [{ t: 'omg ur so nosy lol', link: 'jungwon', notes: 2, then: [{ from: 'jungwon', t: 'i was being thorough.' }, { from: 'jungwon', t: "there's a working pen in it now." }] },
        { t: '-salute- thank u mr president', link: 'jungwon', notes: 3, then: [{ from: 'jungwon', t: '...' }, { from: 'jungwon', t: "don't." }, { from: 'jungwon', t: "you're welcome." }] }] },
    4: { slot: 'evening', msgs: [{ from: 'jungwon', t: "the pot is in the cupboard on the left. i've washed it." }, { from: 'jungwon', t: "please tell fuuka-ssi i borrowed her knife. i've sharpened it." }],
      reply: [{ t: 'it was terrible btw', link: 'jungwon', notes: 3, then: [{ from: 'jungwon', t: 'yes.' }, { from: 'jungwon', t: 'thank you.' }] },
        { t: 'make it again', link: 'jungwon', notes: 2, then: [{ from: 'jungwon', t: 'on sunday. if mitsuru-ssi permits it.' }, { from: 'jungwon', t: "she will. i've already asked." }] }] },
    6: { slot: 'late', msgs: [{ from: 'jungwon', t: 'you still have the pin.' }, { from: 'jungwon', t: "you don't have to give it back. i wanted to say that in writing." }],
      reply: [{ t: 'im keeping it', link: 'jungwon', notes: 3, then: [{ from: 'jungwon', t: 'good.' }] },
        { t: 'r u sure?', link: 'jungwon', notes: 2, then: [{ from: 'jungwon', t: "i've never been less sure of anything." }, { from: 'jungwon', t: 'keep it anyway.' }] }] },
    8: { slot: 'evening', msgs: [{ from: 'jungwon', t: 'eighteen out of twenty.' }, { from: 'jungwon', t: "i'm going to keep telling you that until you believe it." }],
      reply: [{ t: 'WON~ :D', link: 'jungwon', notes: 3, then: [{ from: 'jungwon', t: '...' }, { from: 'jungwon', t: "i'm putting that in the minutes." }] },
        { t: 'it was 17. u miscounted', link: 'jungwon', notes: 2, then: [{ from: 'jungwon', t: "i don't miscount." }, { from: 'jungwon', t: "...i'm checking." }, { from: 'jungwon', t: 'eighteen.' }] }] }
  });
  add('jihoon', {
    1: { slot: 'evening', msgs: [{ from: 'jihoon', t: 'the tub is in the dorm freezer. Do Not Touch It' }, { from: 'jihoon', t: 'it is Sacred' }],
      reply: [{ t: 'HEHEHEHE too late', link: 'jihoon', notes: 2, then: [{ from: 'jihoon', t: 'SOL' }, { from: 'jihoon', t: '#brocken' }] },
        { t: '-salute- protecting the tub', link: 'jihoon', notes: 3, then: [{ from: 'jihoon', t: 'Good. Loyal Subject' }] }] },
    4: { slot: 'evening', msgs: [{ from: 'jihoon', t: 'the sun is on ur desk. i checked' }, { from: 'jihoon', t: 'Through Hanni' }],
      reply: [{ t: 'light of my disgusting life', link: 'jihoon', notes: 3, then: [{ from: 'jihoon', t: '...' }, { from: 'jihoon', t: 'dont do that to me over text' }] },
        { t: 'its creepy that u checked', link: 'jihoon', notes: 1, then: [{ from: 'jihoon', t: "its called Devotion. Look It Up" }] }] },
    6: { slot: 'evening', msgs: [{ from: 'jihoon', t: 'for the record i Won the air hockey' }, { from: 'jihoon', t: 'Yang will say otherwise. Yang is a Liar' }],
      reply: [{ t: 'u lost tho', link: 'jihoon', notes: 2, then: [{ from: 'jihoon', t: 'Contested Result' }, { from: 'jihoon', t: 'Recount Pending' }] },
        { t: 'HEHEHE rematch', link: 'jihoon', notes: 3, then: [{ from: 'jihoon', t: 'Name The Time, Skank' }] }] },
    8: { slot: 'late', msgs: [{ from: 'jihoon', t: 'the tub is lighter' }, { from: 'jihoon', t: 'dont make it weird' }],
      reply: [{ t: 'its not weird', link: 'jihoon', notes: 2, then: [{ from: 'jihoon', t: 'ok' }, { from: 'jihoon', t: '...ok good' }] },
        { t: 'i heard every word', link: 'jihoon', notes: 3, then: [{ from: 'jihoon', t: 'I Know' }, { from: 'jihoon', t: "thats the Problem" }] }] }
  });
  add('minji', {
    1: { slot: 'evening', msgs: [{ from: 'minji', t: "the lamp's still flickering. i filmed it for a minute after you left" }, { from: 'minji', t: "it's just a lamp. i kept it anyway" }],
      reply: [{ t: 'send it', link: 'minji', notes: 2, then: [{ from: 'minji', t: "no. it's not done" }, { from: 'minji', t: "it'll be done when it's done" }] },
        { t: 'u can film me next time', link: 'minji', notes: 3, then: [{ from: 'minji', t: "ok. i'll ask first" }, { from: 'minji', t: 'i always ask first' }] }] },
    3: { slot: 'late', msgs: [{ from: 'minji', t: 'i put the clip in the folder. inside the other folder' }],
      reply: [{ t: 'whats the folder called', link: 'minji', notes: 3, then: [{ from: 'minji', t: "i'm not telling you" }, { from: 'minji', t: "...it's called sol" }] },
        { t: 'good', link: 'minji', notes: 2, then: [{ from: 'minji', t: 'good.' }] }] },
    7: { slot: 'late', msgs: [{ from: 'minji', t: 'two seconds' }, { from: 'minji', t: 'i watched it nine times' }],
      reply: [{ t: 'only nine?', link: 'minji', notes: 3, then: [{ from: 'minji', t: 'ten now' }] },
        { t: 'show me tomorrow', link: 'minji', notes: 2, then: [{ from: 'minji', t: 'ok. tomorrow. by the lamp' }] }] }
  });
  add('hanni', {
    1: { slot: 'evening', msgs: [{ from: 'hanni', t: 'same table tomorrow?? :)' }],
      reply: [{ t: 'obviously', link: 'hanni', notes: 2, then: [{ from: 'hanni', t: 'yay!!' }] },
        { t: 'only if u stop thanking the barista twice', link: 'hanni', notes: 2, then: [{ from: 'hanni', t: 'i will NOT' }, { from: 'hanni', t: 'she deserves it twice' }] }] },
    4: { slot: 'after', msgs: [{ from: 'hanni', t: 'ur hair looks normal today btw' }, { from: 'hanni', t: 'telling u the truth. like i promised' }],
      reply: [{ t: 'omg thank u', link: 'hanni', notes: 2, then: [{ from: 'hanni', t: 'ur welcome!! honesty hour is open 24/7' }] },
        { t: 'lol was it weird yesterday', link: 'hanni', notes: 3, then: [{ from: 'hanni', t: 'a little!!' }, { from: 'hanni', t: 'the truth is a lot sometimes. but its yours' }] }] },
    8: { slot: 'evening', msgs: [{ from: 'hanni', t: 'kitchen at 6 again tmrw? sparkling water is on me' }],
      reply: [{ t: 'yes', link: 'hanni', notes: 2, then: [{ from: 'hanni', t: '!!' }] },
        { t: 'what was hyein gonna say', link: 'hanni', notes: 1, then: [{ from: 'hanni', t: 'nothing!!!' }, { from: 'hanni', t: 'go to sleep!!!' }, { from: 'hanni', t: '...ok not nothing. tomorrow. i promised u the truth' }] }] }
  });
  add('hyein', {
    1: { slot: 'evening', msgs: [{ from: 'hyein', t: 'u wore it home. i saw' }, { from: 'hyein', t: "i'm framing the moment" }],
      reply: [{ t: 'its literally a cardigan', link: 'hyein', notes: 2, then: [{ from: 'hyein', t: "it's a MOMENT" }] },
        { t: 'how much do i owe u', link: 'hyein', notes: 3, then: [{ from: 'hyein', t: 'nothing. family rates. i told u' }, { from: 'hyein', t: 'wear it again. that is the payment' }] }] },
    3: { slot: 'late', msgs: [{ from: 'hyein', t: "i'm finishing the fairy" }, { from: 'hyein', t: "orange. with suns. don't ask why. u know why" }],
      reply: [{ t: 'make urs pink', link: 'hyein', notes: 2, then: [{ from: 'hyein', t: 'it was ALWAYS pink' }] },
        { t: 'why suns', link: 'hyein', notes: 3, then: [{ from: 'hyein', t: 'ur literally named solar' }, { from: 'hyein', t: 'i rest my case' }] }] },
    7: { slot: 'evening', msgs: [{ from: 'hyein', t: "wear the coat tmrw it's gonna be cold" }, { from: 'hyein', t: 'and the whole station is gonna stare. as they should' }],
      reply: [{ t: 'wearing it rn', link: 'hyein', notes: 3, then: [{ from: 'hyein', t: 'SCREAMING' }] },
        { t: 'why is the lining pink', link: 'hyein', notes: 2, then: [{ from: 'hyein', t: "bc that part's just for u" }, { from: 'hyein', t: 'nobody else gets to see it' }] }] }
  });
  add('yunjin', {
    2: { slot: 'evening', msgs: [{ from: 'yunjin', t: 'the rabbit socks are drying on the radiator' }, { from: 'yunjin', t: 'if junpei steals them i will end him' }],
      reply: [{ t: 'the cult protects the socks', link: 'yunjin', notes: 2, then: [{ from: 'yunjin', t: 'the cult is learning' }] },
        { t: 'ur so dramatic', link: 'yunjin', notes: 2, then: [{ from: 'yunjin', t: 'babe i crossed a WORLD for u' }, { from: 'yunjin', t: 'let me be dramatic about socks' }] }] },
    5: { slot: 'late', msgs: [{ from: 'yunjin', t: 'low tide is 4:51 tomorrow' }, { from: 'yunjin', t: "i looked it up. don't tell anyone i looked it up" }],
      reply: [{ t: 'up', link: 'yunjin', notes: 3, then: [{ from: 'yunjin', t: 'up.' }] },
        { t: 'go to sleep jin', link: 'yunjin', notes: 2, then: [{ from: 'yunjin', t: "u first. that's the rule" }] }] },
    8: { slot: 'evening', msgs: [{ from: 'yunjin', t: 'three. THREE babe' }, { from: 'yunjin', t: "i'm buying stickers" }],
      reply: [{ t: 'stop', link: 'yunjin', notes: 2, then: [{ from: 'yunjin', t: 'i will never stop' }] },
        { t: 'what do u even need stickers for', link: 'yunjin', notes: 2, then: [{ from: 'yunjin', t: 'a chart. obviously' }, { from: 'yunjin', t: "don't worry about the chart" }] }] }
  });
  add('yukari', {
    2: { slot: 'evening', msgs: [{ from: 'yukari', t: 'did you wear the rabbit thing yet' }],
      reply: [{ t: 'tomorrow', link: 'yukari', notes: 2, then: [{ from: 'yukari', t: "ok good. don't send a pic. i'll see it" }] },
        { t: 'no its too cute to wear', link: 'yukari', notes: 1, then: [{ from: 'yukari', t: "that's literally what it's for" }] }] },
    5: { slot: 'late', msgs: [{ from: 'yukari', t: 'thanks for today. for the other table' }, { from: 'yukari', t: "i'm not crying. i'm just saying thanks" }],
      reply: [{ t: 'anytime. pick a new word for next time', link: 'yukari', notes: 3, then: [{ from: 'yukari', t: 'ok. next time it’s "umbrella"' }] },
        { t: 'ur allowed to cry', link: 'yukari', notes: 2, then: [{ from: 'yukari', t: 'i KNOW' }, { from: 'yukari', t: '...thanks' }] }] }
  });
  add('junpei', {
    2: { slot: 'evening', msgs: [{ from: 'junpei', t: 'same time next week!! PITCHER!!' }],
      reply: [{ t: 'lifetime appointment', link: 'junpei', notes: 2, then: [{ from: 'junpei', t: 'NO TAKE BACKS' }] },
        { t: 'only if u buy new balls', link: 'junpei', notes: 2, then: [{ from: 'junpei', t: 'deal. 100 yen shop. only the finest' }] }] },
    5: { slot: 'late', msgs: [{ from: 'junpei', t: 'hey' }, { from: 'junpei', t: 'thanks for pulling us out. even me. esp me' }],
      reply: [{ t: 'always', link: 'junpei', notes: 3, then: [{ from: 'junpei', t: '...ok' }, { from: 'junpei', t: 'cool. cool cool' }] },
        { t: 'the edamame is still on the stairs', link: 'junpei', notes: 2, then: [{ from: 'junpei', t: 'LMAO it was a ICE PACK' }, { from: 'junpei', t: 'its a memorial now' }] }] }
  });
  add('mitsuru', {
    2: { slot: 'evening', msgs: [{ from: 'mitsuru', t: 'Thank you for this evening. The broth was instructive.' }, { from: 'mitsuru', t: 'Akihiko is not to be informed.' }],
      reply: [{ t: 'my lips are sealed', link: 'mitsuru', notes: 2, then: [{ from: 'mitsuru', t: 'Good.' }] },
        { t: 'same time next week?', link: 'mitsuru', notes: 3, then: [{ from: 'mitsuru', t: "I've already written it in my planner. Not with the shop. They don't seem to take reservations." }] }] },
    6: { slot: 'late', msgs: [{ from: 'mitsuru', t: 'Thank you for the long way.' }],
      reply: [{ t: 'anytime', link: 'mitsuru', notes: 3, then: [{ from: 'mitsuru', t: 'I may hold you to that.' }] },
        { t: 'u drive way too fast', link: 'mitsuru', notes: 2, then: [{ from: 'mitsuru', t: 'I drive precisely. The speed is incidental.' }] }] }
  });
  add('fuuka', {
    1: { slot: 'evening', msgs: [{ from: 'fuuka', t: 'senpai, thank you for tasting attempt 2!!' }, { from: 'fuuka', t: "attempt 3 is tomorrow. i'm sorry in advance" }],
      reply: [{ t: 'ill be there', link: 'fuuka', notes: 2, then: [{ from: 'fuuka', t: 'thank you!! please bring water' }] },
        { t: 'retire the ruler', link: 'fuuka', notes: 1, then: [{ from: 'fuuka', t: 'the ruler stays :(' }] }] },
    4: { slot: 'late', msgs: [{ from: 'fuuka', t: 'seconds: 5. i crossed it out and wrote 6' }, { from: 'fuuka', t: "i'm counting mitsuru-senpai twice" }],
      reply: [{ t: 'she deserves to count twice', link: 'fuuka', notes: 2, then: [{ from: 'fuuka', t: 'that’s what i thought!!' }] },
        { t: 'ur allowed to be proud', link: 'fuuka', notes: 3, then: [{ from: 'fuuka', t: 'i am. a little' }, { from: 'fuuka', t: 'is that allowed?' }] }] }
  });
  add('aigis', {
    1: { slot: 'after', msgs: [{ from: 'aigis', t: 'Solar-san. Sunset today is at eighteen fifty.' }, { from: 'aigis', t: 'I will be on the roof at eighteen forty-six. To be early. Like you.' }],
      reply: [{ t: 'see u at 18:46', link: 'aigis', notes: 2, then: [{ from: 'aigis', t: 'Confirmed.' }] },
        { t: 'u dont have to be early', link: 'aigis', notes: 2, then: [{ from: 'aigis', t: 'I would like to be. Is that a preference?' }, { from: 'aigis', t: 'I believe it is a preference.' }] }] },
    5: { slot: 'evening', msgs: [{ from: 'aigis', t: 'I gave him my answer. He said thank you. Then he ran away.' }, { from: 'aigis', t: 'Is that customary?' }],
      reply: [{ t: 'very customary', link: 'aigis', notes: 2, then: [{ from: 'aigis', t: 'I see. I will log it.' }] },
        { t: 'r u ok?', link: 'aigis', notes: 3, then: [{ from: 'aigis', t: 'Yes. I think so. I have not been asked that before by text.' }, { from: 'aigis', t: 'It is nice by text also.' }] }] }
  });
  add('ken', {
    2: { slot: 'evening', msgs: [{ from: 'ken', t: 'Solar-san, thank you for your help today.' }, { from: 'ken', t: 'Please remember our agreement.' }],
      reply: [{ t: 'what agreement', link: 'ken', notes: 3, then: [{ from: 'ken', t: 'Thank you.' }] },
        { t: 'ur secret is safe', link: 'ken', notes: 2, then: [{ from: 'ken', t: 'There is no secret.' }, { from: 'ken', t: '...Thank you.' }] }] },
    5: { slot: 'evening', msgs: [{ from: 'ken', t: 'My hands are better. Thank you for the gauze.' }, { from: 'ken', t: 'I will pay you back.' }],
      reply: [{ t: 'you will not', link: 'ken', notes: 2, then: [{ from: 'ken', t: '...Then thank you.' }] },
        { t: 'keep them wrapped. promise me', link: 'ken', notes: 3, then: [{ from: 'ken', t: 'I promise.' }] }] }
  });
  add('jaehyun', {
    1: { slot: 'late', msgs: [{ from: 'jaehyun', t: 'You changed the contact name.' }, { from: 'jaehyun', t: 'I noticed.' }],
      reply: [{ t: 'u noticed fast', link: 'jaehyun', notes: 2, then: [{ from: 'jaehyun', t: 'I notice everything. It’s a problem.' }] },
        { t: 'is that ok', link: 'jaehyun', notes: 3, then: [{ from: 'jaehyun', t: "It's fine." }, { from: 'jaehyun', t: "It's better than fine." }] }] },
    3: { slot: 'evening', msgs: [{ from: 'jaehyun', t: 'Your release is late. Fix your wrist.' }, { from: 'jaehyun', t: 'Thursday. Same field.' }],
      reply: [{ t: 'yes coach', link: 'jaehyun', notes: 2, then: [{ from: 'jaehyun', t: "Don't." }, { from: 'jaehyun', t: '...Thursday.' }] },
        { t: 'only if u bring the cones', link: 'jaehyun', notes: 2, then: [{ from: 'jaehyun', t: 'I always bring the cones.' }] }] },
    6: { slot: 'late', msgs: [{ from: 'jaehyun', t: 'Did you eat.' }, { from: 'jaehyun', t: "You don't have to tell me anything else." }],
      reply: [{ t: 'i ate', link: 'jaehyun', notes: 2, then: [{ from: 'jaehyun', t: 'Good.' }] },
        { t: 'thats all ur asking?', link: 'jaehyun', notes: 3, then: [{ from: 'jaehyun', t: "That's all I'm asking." }, { from: 'jaehyun', t: 'I said I wouldn’t.' }] }] }
  });
  add('mark', {
    1: { slot: 'evening', msgs: [{ from: 'mark', t: 'the fifth note was right btw' }, { from: 'mark', t: "how'd u know" }],
      reply: [{ t: 'lucky guess', link: 'mark', notes: 2, then: [{ from: 'mark', t: 'haha ok. still crazy' }] },
        { t: 'i dont know', link: 'mark', notes: 2, then: [{ from: 'mark', t: 'word' }, { from: 'mark', t: 'me neither honestly' }] }] },
    3: { slot: 'evening', msgs: [{ from: 'mark', t: 'got the next station today. completely different key' }, { from: 'mark', t: 'rude' }],
      reply: [{ t: 'send it', link: 'mark', notes: 2, then: [{ from: 'mark', t: 'ofc!! sending' }] },
        { t: 'how many left', link: 'mark', notes: 2, then: [{ from: 'mark', t: "like 6. i'll get there" }] }] }
  });
  add('cherry', {
    2: { slot: 'late', msgs: [{ from: 'cherry', t: 'knockoff. u up' }],
      reply: [{ t: 'HEHEHE wife', link: 'cherry', notes: 3, then: [{ from: 'cherry', t: 'i love u bitch. go to sleep' }] },
        { t: 'say it as much as u want', link: 'cherry', notes: 2, then: [{ from: 'cherry', t: 'knockoff knockoff knockoff' }, { from: 'cherry', t: 'ok im done. love u' }] }] },
    5: { slot: 'evening', msgs: [{ from: 'cherry', t: "don't ask who" }, { from: 'cherry', t: 'ok fine u get ONE question' }],
      reply: [{ t: 'do u like the one who turned up', link: 'cherry', notes: 3, then: [{ from: 'cherry', t: 'next question' }, { from: 'cherry', t: 'that was ur one question' }] },
        { t: 'whoever stood u up is an IDIOT', link: 'cherry', notes: 2, then: [{ from: 'cherry', t: 'obviously. ur so smart' }, { from: 'cherry', t: 'smartest knockoff ive ever met' }] }] }
  });
  add('sunoo', {
    1: { slot: 'evening', msgs: [{ from: 'sunoo', t: 'come back tomorrow!! or whenever!!' }, { from: 'sunoo', t: 'stay hydrated!!!!!' }],
      reply: [{ t: 'tomorrow :D', link: 'sunoo', notes: 3, then: [{ from: 'sunoo', t: 'YAY' }] },
        { t: 'whenever lol', link: 'sunoo', notes: 2, then: [{ from: 'sunoo', t: 'whenever is my favorite time!!' }] }] },
    4: { slot: 'evening', msgs: [{ from: 'sunoo', t: 'same time next week? 5am??' }, { from: 'sunoo', t: "bring a hat it's cold in the back" }],
      reply: [{ t: '-salute- reporting for duty', link: 'sunoo', notes: 3, then: [{ from: 'sunoo', t: 'the dough salutes u back' }] },
        { t: 'ur insane for being up that early', link: 'sunoo', notes: 2, then: [{ from: 'sunoo', t: "the croissants don't wait!!" }] }] }
  });
  add('junkyu', {
    2: { slot: 'late', msgs: [{ from: 'junkyu', t: 'i retaped ur sign!!!' }, { from: 'junkyu', t: 'maintenance!!!' }],
      reply: [{ t: '#teamsolar', link: 'junkyu', notes: 3, then: [{ from: 'junkyu', t: '#TEAMSOLAR!!!!!' }] },
        { t: 'kyu its 1am', link: 'junkyu', notes: 2, then: [{ from: 'junkyu', t: 'maintenance never sleeps :D' }] }] },
    5: { slot: 'evening', msgs: [{ from: 'junkyu', t: 'i counted again at breakfast' }, { from: 'junkyu', t: "everybody's here :D" }],
      reply: [{ t: 'thank u for waiting up', link: 'junkyu', notes: 3, then: [{ from: 'junkyu', t: "always!!! it's my job now" }] },
        { t: 'go to sleep tonight kyu', link: 'junkyu', notes: 2, then: [{ from: 'junkyu', t: 'ok!!!' }, { from: 'junkyu', t: '(no)' }] }] }
  });

  const T = window.FEMC_GAME_TEXTS;
  if (!T) return;

  /* Ambient: daytime texts and group chats, one a day at most, inside each window. */
  (T.ambient ||= []).push(
    { id: 'am-sees-pudding', thread: 'sees', from: '4/20', to: '5/6', flag: 'joined-junpei', msgs: [
      { from: 'junpei', t: 'WHO ATE MY PUDDING' }, { from: 'junpei', t: 'it had my NAME on it' }, { from: 'yukari', t: 'it had "junp" on it. the rest rubbed off' }, { from: 'junpei', t: 'SO U ADMIT IT' }
    ], reply: [{ t: 'it was akihiko', then: [{ from: 'junpei', t: 'he would NEVER. he only eats protein' }, { from: 'yukari', t: 'he ate it' }] }, { t: '(Leave it on read.)', silent: true, then: [{ from: 'junpei', t: 'the silence is so loud rn' }] }] },
    { id: 'am-akihiko-rain', thread: 'akihiko', from: '5/12', to: '6/1', msgs: [{ from: 'akihiko', t: 'rain tomorrow' }, { from: 'akihiko', t: 'we run anyway' }],
      reply: [{ t: 'obviously', link: 'akihiko', notes: 2, then: [{ from: 'akihiko', t: 'good answer' }] }, { t: 'we do NOT', link: 'akihiko', notes: 1, then: [{ from: 'akihiko', t: 'we do though' }] }] },
    { id: 'am-sees-midterms', thread: 'sees', from: '5/22', to: '6/6', flag: 'joined-junpei', msgs: [
      { from: 'junpei', t: 'results are up who wants to see a man ranked 200-something' }, { from: 'yukari', t: 'out of how many' }, { from: 'junpei', t: 'we dont talk about that' }
    ], reply: [{ t: 'proud of u', then: [{ from: 'junpei', t: 'THANK U. finally someone with taste' }] }, { t: 'lol', then: [{ from: 'junpei', t: 'the lol hurt more than the ranking' }] }] },
    { id: 'am-sees-fuuka', thread: 'sees', from: '6/14', to: '6/30', events: ['a3-radios'], msgs: [
      { from: 'junpei', t: 'junpei added fuuka to the group' }, { from: 'fuuka', t: 'hi everyone!! thank you for having me :)' }, { from: 'junpei', t: 'welcome to the official S.E.E.S. group chat (seniors not invited)' }, { from: 'fuuka', t: "but solar-senpai's a senior?" }, { from: 'yukari', t: "she's honorary. don't ask" }
    ], reply: [{ t: 'welcome fuuka!!', then: [{ from: 'fuuka', t: 'thank you senpai!! (honorary)' }] }, { t: 'i am an honorary junior. its a whole thing', then: [{ from: 'fuuka', t: 'i see!! i will write that down' }] }] },
    { id: 'am-fuuka-data', thread: 'fuuka', from: '6/20', to: '7/10', events: ['a3-radios'], msgs: [{ from: 'fuuka', t: 'senpai, quick question. strawberry or chocolate?' }, { from: 'fuuka', t: "it's for data" }],
      reply: [{ t: 'strawberry', link: 'fuuka', notes: 2, then: [{ from: 'fuuka', t: 'noted!!' }] }, { t: 'data for what', link: 'fuuka', notes: 1, then: [{ from: 'fuuka', t: "i can't say. it's classified" }, { from: 'fuuka', t: 'mitsuru-senpai taught me that word' }] }] },
    { id: 'am-sees-heat', thread: 'sees', from: '7/26', to: '8/16', events: ['a3-yakushima'], msgs: [
      { from: 'junpei', t: 'the AC is a LIAR' }, { from: 'yukari', t: "it's not lying. it's just not doing anything" }, { from: 'fuuka', t: 'aigis says the lounge is 34 degrees' }, { from: 'junpei', t: 'aigis is a thermometer now??' }
    ], reply: [{ t: 'roof is cooler. come up', then: [{ from: 'junpei', t: 'OMW' }, { from: 'yukari', t: 'omw' }] }, { t: 'im lying on the kitchen floor', then: [{ from: 'junpei', t: 'genius. coming' }] }] },
    { id: 'am-akihiko-roof', thread: 'akihiko', from: '8/1', to: '8/22', events: ['a3-yakushima'], msgs: [{ from: 'akihiko', t: "roof. 6am. it's the only cool hour" }, { from: 'akihiko', t: 'bring water' }],
      reply: [{ t: 'ok', link: 'akihiko', notes: 2, then: [{ from: 'akihiko', t: 'good' }] }, { t: 'its summer break', link: 'akihiko', notes: 1, then: [{ from: 'akihiko', t: "shadows don't take summer break" }] }] },
    { id: 'am-ken-rota', thread: 'ken', from: '8/10', to: '8/31', events: ['a3-full-house'], msgs: [{ from: 'ken', t: 'Solar-san. Koromaru prefers the river route on Thursdays.' }, { from: 'ken', t: 'I have updated the rota.' }],
      reply: [{ t: 'river route it is', link: 'ken', notes: 2, then: [{ from: 'ken', t: 'Thank you. He will be pleased.' }] }, { t: 'how do u know what he prefers', link: 'ken', notes: 2, then: [{ from: 'ken', t: 'He told me.' }, { from: 'ken', t: '...He pulled.' }] }] },
    { id: 'am-yukari-phone', thread: 'yukari', from: '8/26', to: '9/10', events: ['a4-first-text'], msgs: [{ from: 'yukari', t: "you've been on your phone a lot" }, { from: 'yukari', t: 'everything ok?' }],
      reply: [{ t: 'old messages. from people i dont know', link: 'yukari', notes: 2, then: [{ from: 'yukari', t: "...ok. that's creepy. tell me if they get worse" }] }, { t: 'yeah all good', link: 'yukari', notes: 1, then: [{ from: 'yukari', t: 'ok' }, { from: 'yukari', t: "you're a bad liar btw" }] }] },
    { id: 'am-sisters-seaweed', thread: 'sisters', from: '9/15', to: '10/8', flag: 'arrived-hanni', msgs: [
      { from: 'hyein', t: 'hyein: hanni bought four kinds of seaweed' }, { from: 'hyein', t: 'hyein: we dont know what any of them are for' }, { from: 'hanni', t: "hanni: they were on SALE" }
    ], reply: [{ t: 'the green one is for soup lol', then: [{ from: 'hanni', t: 'hanni: SEE. she knows' }, { from: 'hyein', t: 'hyein: they are ALL green hanni' }] }, { t: 'omg ask fuuka', then: [{ from: 'hanni', t: 'hanni: good idea!!!' }] }] },
    { id: 'am-searchparty-wifi', thread: 'searchparty', from: '9/26', to: '10/16', flag: 'arrived-jihoon', msgs: [
      { from: 'jihoon', t: 'jihoon: Who Has The Dorm Wifi Password' }, { from: 'hyein', t: 'hyein: u dont live here' }, { from: 'jihoon', t: 'jihoon: I Am Here Constantly. I Am Basically Furniture' }
    ], reply: [{ t: 'HEHEHE its on the fridge', then: [{ from: 'jihoon', t: 'jihoon: Bless You' }] }, { t: 'furniture doesnt need wifi', then: [{ from: 'jihoon', t: 'jihoon: Discrimination' }, { from: 'hanni', t: "hanni: it's on the fridge jihoon" }] }] },
    { id: 'am-minji-light', thread: 'minji', from: '9/28', to: '10/22', flag: 'arrived-minji', msgs: [{ from: 'minji', t: "the light's good at the river at 5" }, { from: 'minji', t: "not asking you to come. just telling you the light's good" }],
      reply: [{ t: 'see u at 5', link: 'minji', notes: 3, then: [{ from: 'minji', t: 'ok' }, { from: 'minji', t: 'ok :)' }] }, { t: 'film it for me', link: 'minji', notes: 2, then: [{ from: 'minji', t: 'already am' }] }] },
    { id: 'am-yunjin-natto', thread: 'yunjin', from: '10/12', to: '11/6', flag: 'arrived-yunjin', msgs: [{ from: 'yunjin', t: 'babe what is natto' }, { from: 'yunjin', t: 'and why did fuuka look at me like that when i said it smelled like a crime' }],
      reply: [{ t: 'its fermented beans lol. its good', link: 'yunjin', notes: 2, then: [{ from: 'yunjin', t: 'u LIE' }] }, { t: 'bc u hurt her feelings', link: 'yunjin', notes: 2, then: [{ from: 'yunjin', t: "oh no. i'm buying her flowers" }, { from: 'yunjin', t: "i'm buying her ALL the flowers" }] }] },
    { id: 'am-jungwon-budget', thread: 'jungwon', from: '10/17', to: '11/10', flag: 'arrived-jungwon', msgs: [{ from: 'jungwon', t: "i've been asked to proofread the athletic budget again." }, { from: 'jungwon', t: 'i said yes. why do i keep saying yes.' }],
      reply: [{ t: 'bc ur a nerd :D', link: 'jungwon', notes: 2, then: [{ from: 'jungwon', t: "that's not an explanation." }, { from: 'jungwon', t: "it's a diagnosis." }] }, { t: 'say no next time', link: 'jungwon', notes: 3, then: [{ from: 'jungwon', t: "i'll practice." }, { from: 'jungwon', t: 'no.' }, { from: 'jungwon', t: 'that felt terrible.' }] }] },
    { id: 'am-jihoon-pilates', thread: 'jihoon', from: '10/18', to: '11/12', flag: 'arrived-jihoon', msgs: [{ from: 'jihoon', t: 'pilates at the guesthouse at 7. akihiko said he would come' }, { from: 'jihoon', t: 'he is Late. Weak' }],
      reply: [{ t: 'HEHEHE hes on a run', link: 'jihoon', notes: 2, then: [{ from: 'jihoon', t: 'Running Is For Cowards' }] }, { t: 'he will destroy u', link: 'jihoon', notes: 2, then: [{ from: 'jihoon', t: 'He Will Try' }] }] },
    { id: 'am-jaehyun-fridge', thread: 'jaehyun', from: '10/27', to: '11/20', flag: 'arrived-jaehyun', msgs: [{ from: 'jaehyun', t: 'The schedule on the fridge is wrong.' }, { from: 'jaehyun', t: 'Recycling is Wednesday, not Tuesday.' }],
      reply: [{ t: 'how do u even know that', link: 'jaehyun', notes: 2, then: [{ from: 'jaehyun', t: 'I read the city notice.' }, { from: 'jaehyun', t: "Someone has to." }] }, { t: 'tell mitsuru not me lol', link: 'jaehyun', notes: 1, then: [{ from: 'jaehyun', t: "I'd rather you did." }] }] },
    { id: 'am-hateclub-worksheets', thread: 'hateclub', from: '11/3', to: '11/26', flag: 'arrived-crew', msgs: [
      { from: 'asahi', t: 'asanoonecares: jaehyuk is doing homework' }, { from: 'asahi', t: 'asanoonecares: he does not have a school' }, { from: 'jaehyuk', t: 'jaehyukkie: I found worksheets at the bookstore. I like to stay in practice.' }, { from: 'junkyu', t: 'junkyute: can i have one!!!' }
    ], reply: [{ t: 'HEHEHEHE nerd', then: [{ from: 'jaehyuk', t: 'jaehyukkie: Thank you.' }] }, { t: 'can i copy them', then: [{ from: 'jaehyuk', t: 'jaehyukkie: Some things never change.' }] }] },
    { id: 'am-sisters-door', thread: 'sisters', from: '11/7', to: '11/28', flag: 'arrived-haechan', msgs: [
      { from: 'hyein', t: 'hyein: the door on the top floor was OPEN' }, { from: 'hyein', t: 'hyein: for like two seconds' }, { from: 'hanni', t: 'hanni: we are not monitoring the door' }, { from: 'hyein', t: 'hyein: i am monitoring the door' }
    ], reply: [{ t: 'leave him alone lol', then: [{ from: 'hyein', t: 'hyein: HIM. she said HIM' }, { from: 'hanni', t: 'hanni: hyein' }, { from: 'hanni', t: "hanni: he's ok. i think. i'm watching him" }] }, { t: '(Leave it on read.)', silent: true, then: [{ from: 'hanni', t: 'hanni: good. ignore her' }] }] },
    { id: 'am-sunoo-cat', thread: 'sunoo', from: '11/9', to: '12/6', flag: 'arrived-sunoo', msgs: [{ from: 'sunoo', t: 'first customer today was a cat' }, { from: 'sunoo', t: "it didn't pay but it was very polite" }],
      reply: [{ t: 'HEHEHE what did it order', link: 'sunoo', notes: 2, then: [{ from: 'sunoo', t: 'a saucer of milk. on the house' }] }, { t: 'u spoil everyone', link: 'sunoo', notes: 2, then: [{ from: 'sunoo', t: "that's the business model!!" }] }] },
    { id: 'am-haechan-window', thread: 'haechan', from: '11/12', to: '12/8', flag: 'arrived-haechan', msgs: [{ from: 'haechan', t: "your window's open" }, { from: 'haechan', t: "it's 4 degrees" }],
      reply: [{ t: 'how do u know my window is open', link: 'haechan', notes: 2, then: [{ from: 'haechan', t: 'draft under your door' }, { from: 'haechan', t: 'close it' }] }, { t: 'i like the cold', link: 'haechan', notes: 2, then: [{ from: 'haechan', t: 'you like being stubborn' }, { from: 'haechan', t: 'close it, agasshi' }] }] },
    { id: 'am-cherry-fanclub', thread: 'cherry', from: '11/15', to: '12/10', flag: 'arrived-cherry', msgs: [{ from: 'cherry', t: 'why does sunghoon have a FAN CLUB here' }, { from: 'cherry', t: "its been like two days" }],
      reply: [{ t: 'HEHEHE jealous', link: 'cherry', notes: 2, then: [{ from: 'cherry', t: 'i will end u' }, { from: 'cherry', t: 'ok a little' }] }, { t: 'join it', link: 'cherry', notes: 1, then: [{ from: 'cherry', t: 'over my dead body' }, { from: 'cherry', t: '...whats the membership fee' }] }] },
    { id: 'am-mark-piano', thread: 'mark', from: '11/21', to: '12/14', flag: 'arrived-mark', msgs: [{ from: 'mark', t: "found a piano at the mall nobody plays" }, { from: 'mark', t: "it's so out of tune. i love it" }, { from: 'mark', t: "nobody really comes with me anymore. anyway" }],
      reply: [{ t: 'play me something on it', link: 'mark', notes: 2, then: [{ from: 'mark', t: 'ofc!! tmrw?' }] }, { t: 'lol only u would love that', link: 'mark', notes: 1, then: [{ from: 'mark', t: 'haha guilty' }] }] },
    { id: 'am-searchparty-finals', thread: 'searchparty', from: '12/10', to: '12/17', flag: 'arrived-jihoon', msgs: [
      { from: 'hanni', t: 'hanni: good luck on finals sol!!!! ur gonna do so good' }, { from: 'hyein', t: 'hyein: i made u a playlist for studying. its all sad songs. sorry' }, { from: 'jihoon', t: 'jihoon: Remember Who Copied Off Jaehyuk For Three Years. Not You. Never You' }
    ], reply: [{ t: 'thank u guys omg', then: [{ from: 'hanni', t: 'hanni: <3' }] }, { t: 'HEHEHE i never copied', then: [{ from: 'jihoon', t: 'jihoon: Lies. Slander. Beautiful' }] }] },
    { id: 'am-sees-break', thread: 'sees', from: '12/25', to: '1/6', flag: 'year-goes-on', msgs: [
      { from: 'junpei', t: 'WINTER BREAK' }, { from: 'junpei', t: 'nobody wake me up til january' }, { from: 'yukari', t: 'it IS january in a week junpei' }, { from: 'junpei', t: 'then nobody wake me up for a week' }
    ], reply: [{ t: 'see u in a week', then: [{ from: 'junpei', t: 'goodnight forever' }] }, { t: 'akihiko is going to wake u at 5', then: [{ from: 'junpei', t: 'NOT IF I MOVE ROOMS' }] }] },
    { id: 'am-akihiko-snow', thread: 'akihiko', from: '12/27', to: '1/12', flag: 'year-goes-on', msgs: [{ from: 'akihiko', t: 'snow' }, { from: 'akihiko', t: 'we run anyway' }],
      reply: [{ t: 'obviously', link: 'akihiko', notes: 2, then: [{ from: 'akihiko', t: "there she is" }] }, { t: 'we walk. carefully', link: 'akihiko', notes: 2, then: [{ from: 'akihiko', t: 'fine. we walk fast. carefully' }] }] },
    { id: 'am-sisters-luckybags', thread: 'sisters', from: '1/2', to: '1/14', flag: 'year-goes-on', msgs: [
      { from: 'hanni', t: 'hanni: hyein bought three lucky bags' }, { from: 'hyein', t: 'hyein: two of them are mine' }, { from: 'hanni', t: 'hanni: two of them are YOURS??' }, { from: 'hyein', t: "hyein: we're not talking about it" }
    ], reply: [{ t: 'whats in the third one', then: [{ from: 'hyein', t: 'hyein: something for u. obviously' }] }, { t: 'iconic', then: [{ from: 'hyein', t: 'hyein: THANK U' }, { from: 'hanni', t: "hanni: don't encourage her!!" }] }] },
    { id: 'am-hateclub-bath', thread: 'hateclub', from: '1/8', to: '2/28', flag: 'year-goes-on', msgs: [
      { from: 'hyunsuk', t: 'geniusuk: jihoon fell asleep in the guesthouse bath' }, { from: 'asahi', t: "asanoonecares: we're leaving him" }, { from: 'junkyu', t: 'junkyute: im putting a towel on him!!!' }
    ], reply: [{ t: 'HEHEHEHE take a pic', then: [{ from: 'asahi', t: 'asanoonecares: already did' }, { from: 'jihoon', t: 'jihoney: DELETE IT' }] }, { t: 'kyu ur a saint', then: [{ from: 'junkyu', t: 'junkyute: :D' }] }] },
    { id: 'am-yukari-graduation', thread: 'yukari', from: '1/12', to: '3/3', flag: 'year-goes-on', msgs: [{ from: 'yukari', t: 'the third years are all crying in the hallway about graduation' }, { from: 'yukari', t: "you're not allowed to graduate. i decided" }],
      reply: [{ t: 'i accept ur ruling', link: 'yukari', notes: 2, then: [{ from: 'yukari', t: 'good' }] }, { t: 'ill visit', link: 'yukari', notes: 3, then: [{ from: 'yukari', t: "you'd better" }] }] },
    { id: 'am-minji-editing', thread: 'minji', from: '1/18', to: '3/5', flag: 'year-goes-on', msgs: [{ from: 'minji', t: "i'm editing all of it. everything i shot here" }, { from: 'minji', t: "it's going to take forever. i don't want it to be done" }],
      reply: [{ t: 'then dont finish it', link: 'minji', notes: 3, then: [{ from: 'minji', t: 'ok' }, { from: 'minji', t: "i'll leave one frame out. so it's never done" }] }, { t: 'can i see it when it is', link: 'minji', notes: 2, then: [{ from: 'minji', t: "you'll be the first. you're always the first" }] }] }
  );

  /* Dated: the night before each full moon, and the birthday. */
  T.texts.push(
    { id: 't-0508-akihiko', thread: 'akihiko', date: '5/8', slot: 'late', msgs: [{ from: 'akihiko', t: "tomorrow's the moon" }, { from: 'akihiko', t: "i'm not cleared. so you have to be careful for both of us" }],
      reply: [{ t: 'i will. both of us', link: 'akihiko', notes: 2, then: [{ from: 'akihiko', t: 'ok. sleep' }] }, { t: 'u hate this huh', link: 'akihiko', notes: 2, then: [{ from: 'akihiko', t: 'yeah' }, { from: 'akihiko', t: "go to sleep. i'll hate it for both of us" }] }] },
    { id: 't-0607-yukari', thread: 'yukari', date: '6/7', slot: 'late', msgs: [{ from: 'yukari', t: "can't sleep. you?" }, { from: 'yukari', t: 'tomorrow we get her out. right?' }],
      reply: [{ t: 'we get her out', link: 'yukari', notes: 3, then: [{ from: 'yukari', t: 'ok' }, { from: 'yukari', t: 'ok. i believe you' }] }, { t: 'cant sleep either', link: 'yukari', notes: 2, then: [{ from: 'yukari', t: 'good. i mean not good. i mean i’m glad it’s not just me' }] }] },
    { id: 't-0624-sees', thread: 'sees', date: '6/24', slot: 'lunch', msgs: [
      { from: 'junpei', t: 'happy b' }, { from: 'junpei', t: 'happy BEAUTIFUL wednesday everyone!!!!' }, { from: 'yukari', t: 'junpei.' }, { from: 'fuuka', t: 'happy beautiful wednesday!! :)' }
    ], reply: [{ t: 'are u guys ok', then: [{ from: 'junpei', t: 'never better!!! nothing is happening!!!' }, { from: 'yukari', t: 'oh my god' }] }, { t: 'happy beautiful wednesday?', then: [{ from: 'fuuka', t: 'yes!!' }, { from: 'yukari', t: 'just come home at seven ok' }] }] },
    { id: 't-0624-mitsuru', thread: 'mitsuru', date: '6/24', slot: 'afternoon', msgs: [{ from: 'mitsuru', t: 'Seven o’clock, please. Not a minute before.' }],
      reply: [{ t: 'not a minute before??', link: 'mitsuru', notes: 1, then: [{ from: 'mitsuru', t: 'Not a minute.' }] }, { t: 'ok', link: 'mitsuru', notes: 1, then: [{ from: 'mitsuru', t: 'Thank you.' }] }] },
    { id: 't-0706-junpei', thread: 'junpei', date: '7/6', slot: 'late', msgs: [{ from: 'junpei', t: 'yo leader. u nervous' }, { from: 'junpei', t: 'me neither. totally not. haha' }],
      reply: [{ t: 'a little', link: 'junpei', notes: 3, then: [{ from: 'junpei', t: '...ok me too. a lot actually' }, { from: 'junpei', t: 'glad its u calling it tho' }] }, { t: 'go to sleep junpei', link: 'junpei', notes: 2, then: [{ from: 'junpei', t: 'aye aye' }] }] },
    { id: 't-0805-fuuka', thread: 'fuuka', date: '8/5', slot: 'late', msgs: [{ from: 'fuuka', t: 'senpai, the readings are already strange tonight' }, { from: 'fuuka', t: "i'll be listening the whole time tomorrow. you won't be alone in there" }],
      reply: [{ t: 'i know. i always hear u', link: 'fuuka', notes: 3, then: [{ from: 'fuuka', t: ':)' }] }, { t: 'get some sleep too', link: 'fuuka', notes: 2, then: [{ from: 'fuuka', t: 'i will try!! goodnight' }] }] },
    { id: 't-0904-akihiko', thread: 'akihiko', date: '9/4', slot: 'late', msgs: [{ from: 'akihiko', t: 'early night' }, { from: 'akihiko', t: 'i mean it' }],
      reply: [{ t: 'yes senpai', link: 'akihiko', notes: 2, then: [{ from: 'akihiko', t: "don't senpai me. sleep" }] }, { t: 'u first', link: 'akihiko', notes: 2, then: [{ from: 'akihiko', t: "i'm in bed" }, { from: 'akihiko', t: "...i'm getting in bed" }] }] },
    { id: 't-1003-ken', thread: 'ken', date: '10/3', slot: 'late', msgs: [{ from: 'ken', t: 'Solar-san. Are you awake?' }, { from: 'ken', t: 'Never mind. I am sorry. Goodnight.' }],
      reply: [{ t: 'im awake. whats wrong', link: 'ken', notes: 2, then: [{ from: 'ken', t: 'Nothing. I wanted to see if anyone was.' }, { from: 'ken', t: 'Goodnight, Solar-san.' }] }, { t: 'goodnight ken', link: 'ken', notes: 1, then: [{ from: 'ken', t: 'Goodnight.' }] }] },
    { id: 't-1102-sisters', thread: 'sisters', date: '11/2', slot: 'late', flag: 'arrived-hanni', msgs: [
      { from: 'hanni', t: "hanni: mitsuru says it's the last one tomorrow" }, { from: 'hanni', t: "hanni: we're staying in. we'll have tea ready" }, { from: 'hyein', t: "hyein: and snacks. and the big blanket. we're waiting up so dont even try" }
    ], reply: [{ t: 'ill be home before u know it', then: [{ from: 'hanni', t: 'hanni: promise?' }, { from: 'hyein', t: 'hyein: she promised. i saw it' }] }, { t: 'love u guys', then: [{ from: 'hanni', t: 'hanni: we love u more!!!' }, { from: 'hyein', t: 'hyein: correct' }] }] },
    { id: 't-1201-jungwon', thread: 'jungwon', date: '12/1', slot: 'afternoon', flag: 'awake-jungwon', msgs: [{ from: 'jungwon', t: "tomorrow. i'll be on your left." }, { from: 'jungwon', t: "i've decided. that isn't me deciding for you. it's just where i'll be." }],
      reply: [{ t: 'ok. my left', link: 'jungwon', notes: 3, then: [{ from: 'jungwon', t: 'good.' }] }, { t: 'eat dinner first', link: 'jungwon', notes: 2, then: [{ from: 'jungwon', t: "...i'll eat dinner first." }] }] },
    { id: 't-0129-sees', thread: 'sees', date: '3/5', slot: 'late', flag: 'year-goes-on', msgs: [
      { from: 'junpei', t: 'night everyone' }, { from: 'hanni', t: 'goodnight everyone!! :)' }, { from: 'jihoon', t: 'Goodnight To My Loyal Subjects' }, { from: 'minji', t: 'night' }, { from: 'yukari', t: 'go to sleep. all of you. i mean it' }, { from: 'haechan', t: 'sleep.' }
    ], reply: [{ t: 'goodnight. see everyone at breakfast', then: [{ from: 'hyein', t: 'breakfast. everybody. thats an order' }] }, { t: '(Leave it on read. Smile at it.)', silent: true, then: [{ from: 'junkyu', t: 'she read it!!! goodnight sol!!!' }] }] }
  );
})();
