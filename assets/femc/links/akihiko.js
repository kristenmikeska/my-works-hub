/* Akihiko Sanada · XVII The Star. Social link data for femc-social.js.
   Format: each rank has `after` (earliest in-game date, M/D), `title` (chapter card, "1: rookie"), `place`, and `scene`, a list of lines:
     { s: speakerId, f: face, t: text }   a line (face = a portrait file name: neutral, happy, sad-2...)
     { n: text }                           narration (close third person, past tense, Kat's voice)
     { s: 'solar', t: text }               Solar speaks (chosen dialogue options are spoken automatically)
     { place, time }                       a scene break: new location banner
     { phone: [{ from, t }], contact }     a text conversation on Solar's phone
     { choose: [{ t, notes, then: [...] }] }   a dialogue choice; notes = ♪ earned (0–3)
     { route: [{ t, route: 'romance'|'friend', notes, then }] }  the friendship/romance turn
     { ifRoute: 'romance'|'friend', then: [...] }   lines only on that route
     { ifRank: { kiriko: 8 }, then: [...], else: [...] }   branch on another link's rank
     { register: id }                      "Registered to the Compendium"
     { music: 'tender' }                   switch the scene music (joy, school, sun, tender, mystery, night, velvet);
                                           a rank can also take music: 'tender' beside its title
   Link fields: approach: the line shown when a stranger finds Solar for the first meeting;
   invite: { ask: [texts], ok, no } for "free right now?" invitations between ranks.
   {name} becomes "Solar". */
FemcSocial.define({
  id: 'akihiko', name: 'Akihiko Sanada', short: 'Akihiko', arcana: 'Star', numeral: 'XVII', from: 'Persona 3',
  home: { place: 'Gekkoukan High · Boxing Club', slot: 0, days: [1, 2, 3, 4, 5, 6], hint: 'After school, Monday to Saturday, at the boxing club.' },
  approach: "A silver-haired guy in a red vest is jogging laps of the second-floor hallway between classes, and he slows down a little every time he passes you.",
  invite: { ask: ["you free? gym. now.", "want to go for a run? i'll go easy on you. probably.", "hagakure? my treat. i need protein."], ok: "great. meet you out front.", no: "next time then. i'm holding you to it." },
  romance: true,
  cast: { junpei: 'Junpei', mitsuru: 'Mitsuru', yukari: 'Yukari', shinjiro: 'Shinjiro' },
  stamps: { 1: ['senpai'], 10: ['max-rank'] },
  threads: {
    sees: { name: 'dorm squad 🔥', members: ['junpei', 'yukari', 'mitsuru', 'akihiko'] },
    yukari: { name: 'Yukari Takeba', members: ['yukari'] }
  },
  // Texts between hangouts. rank = Akihiko's rank when it can arrive; days = days after reaching it; slot 1 = evening.
  texts: [
    { id: 'aki-2a', rank: 2, days: 1, slot: 1, msgs: [
      { from: 'akihiko', t: 'you were slow today' },
      { from: 'akihiko', t: 'good though' },
      { from: 'akihiko', t: 'slow but good' }
    ], reply: [
      { t: "I'll be faster tomorrow.", notes: 3, then: [{ from: 'akihiko', t: "that's the spirit" }] },
      { t: "I'll be asleep tomorrow.", notes: 2, then: [{ from: 'akihiko', t: "no you won't" }, { from: 'akihiko', t: '5:12' }] }
    ] },
    { id: 'sees-2b', thread: 'sees', rank: 2, days: 2, msgs: [
      { sys: 'Junpei added you to "dorm squad 🔥"' },
      { from: 'junpei', t: 'ok welcome to the squad' },
      { from: 'yukari', t: 'why am i in this' },
      { from: 'junpei', t: 'cuz ur the squad yuka-tan' },
      { from: 'akihiko', t: 'is this for training schedules' },
      { from: 'junpei', t: 'NO' },
      { from: 'mitsuru', t: 'I would appreciate it if this channel were reserved for official communication.' },
      { from: 'junpei', t: 'she found it' },
      { from: 'junpei', t: 'how did she find it' }
    ], reply: [
      { t: 'lol', then: [{ from: 'junpei', t: 'SOLAR GETS IT' }] },
      { t: 'Who added Mitsuru-senpai?', then: [{ from: 'junpei', t: 'NOT ME' }, { from: 'yukari', t: 'it was literally you' }, { from: 'mitsuru', t: 'It was Iori.' }] }
    ] },
    { id: 'sees-2c', thread: 'sees', rank: 2, days: 4, rename: 'S.E.E.S.', msgs: [
      { sys: 'Mitsuru Kirijo renamed the group "S.E.E.S."' },
      { from: 'junpei', t: 'noooooo' },
      { from: 'junpei', t: 'my beautiful group name' },
      { from: 'akihiko', t: 'this one is better' }
    ] },
    { id: 'yuk-3a', thread: 'yukari', rank: 3, days: 1, msgs: [
      { from: 'yukari', t: 'ok so is the coffee table thing a regular occurrence' },
      { from: 'yukari', t: 'asking for my sanity' }
    ], reply: [
      { t: 'Every day.', then: [{ from: 'yukari', t: "i'm moving out" }] },
      { t: 'Only when something is bothering him.', then: [{ from: 'yukari', t: '...oh' }, { from: 'yukari', t: "ok that's actually kind of sad" }, { from: 'yukari', t: "i'll buy him a yoga mat or something" }] }
    ] },
    { id: 'aki-3b', rank: 3, days: 2, slot: 1, msgs: [
      { from: 'akihiko', t: 'hey' },
      { from: 'akihiko', t: 'thanks for the other day' },
      { from: 'akihiko', t: 'for listening' }
    ], reply: [
      { t: 'Anytime.', notes: 3, then: [{ from: 'akihiko', t: 'careful' }, { from: 'akihiko', t: "i'm going to hold you to that" }] },
      { t: 'You owe me ramen.', notes: 2, then: [{ from: 'akihiko', t: 'deal' }, { from: 'akihiko', t: 'extra egg' }] }
    ] },
    { id: 'sees-3c', thread: 'sees', rank: 3, days: 4, msgs: [
      { from: 'junpei', t: 'who ate my cup ramen' },
      { from: 'akihiko', t: 'it had protein in it' },
      { from: 'junpei', t: 'IT WAS RAMEN' },
      { from: 'yukari', t: "senpai it says 'beef flavor' that's not protein" },
      { from: 'akihiko', t: "it's protein adjacent" },
      { from: 'mitsuru', t: 'Please stop.' }
    ], reply: [
      { t: '🍜', then: [{ from: 'junpei', t: 'SOLAR' }, { from: 'junpei', t: 'how could you' }] },
      { t: "I'll buy you a new one, Junpei.", then: [{ from: 'junpei', t: 'finally someone with a heart in this dorm' }] }
    ] },
    { id: 'aki-4a', rank: 4, date: '7/11', slot: 1, msgs: [
      { from: 'akihiko', t: 'won' },
      { from: 'akihiko', t: 'third year in a row' },
      { from: 'akihiko', t: 'i looked for you in the crowd' }
    ], reply: [
      { t: 'I was the loud one.', notes: 3, then: [{ from: 'akihiko', t: 'i know' }, { from: 'akihiko', t: 'i heard you' }] },
      { t: 'Congratulations, champ.', notes: 2, then: [{ from: 'akihiko', t: "don't call me champ" }, { from: 'akihiko', t: '...ok you can call me champ' }] }
    ] },
    { id: 'sees-4b', thread: 'sees', rank: 4, date: '7/11', msgs: [
      { from: 'junpei', t: 'SENPAI WON 🥊🥊🥊' },
      { from: 'yukari', t: 'congrats senpai!!' },
      { from: 'mitsuru', t: 'Well done, Akihiko.' },
      { from: 'akihiko', t: 'thanks' },
      { from: 'akihiko', t: 'protein party at the dorm tonight' },
      { from: 'junpei', t: 'absolutely not' }
    ] },
    { id: 'sees-4c', thread: 'sees', rank: 4, date: '7/16', msgs: [
      { from: 'junpei', t: 'BEACH TRIP' },
      { from: 'junpei', t: 'yakushima baby 🏝️' },
      { from: 'yukari', t: "it's a training retreat junpei" },
      { from: 'mitsuru', t: 'It is a training retreat.' },
      { from: 'junpei', t: 'bring ur swimsuits' },
      { from: 'yukari', t: 'JUNPEI' }
    ], reply: [
      { t: "I'm bringing sunscreen and a book.", then: [{ from: 'akihiko', t: 'bring running shoes' }, { from: 'yukari', t: 'SENPAI' }] },
      { t: '🏖️', then: [{ from: 'junpei', t: 'SEE solar gets it' }] }
    ] },
    { id: 'aki-5a', rank: 5, days: 1, slot: 1, msgs: [
      { from: 'akihiko', t: 'did you get home ok' },
      { from: 'akihiko', t: 'you were limping' }
    ], reply: [
      { t: "I'm never walking again.", notes: 2, then: [{ from: 'akihiko', t: 'ha' }, { from: 'akihiko', t: 'same time tomorrow' }] },
      { t: "I'm fine. Totally fine.", notes: 3, then: [{ from: 'akihiko', t: 'liar' }, { from: 'akihiko', t: 'ice your calves' }] }
    ] },
    { id: 'aki-6a', rank: 6, days: 1, slot: 1, msgs: [
      { from: 'akihiko', t: 'you awake' },
      { from: 'akihiko', t: 'sorry' },
      { from: 'akihiko', t: 'never mind' }
    ], reply: [
      { t: "I'm awake.", notes: 3, then: [{ from: 'akihiko', t: '...thanks for today' }, { from: 'akihiko', t: 'on the roof' }, { from: 'akihiko', t: 'goodnight solar' }] },
      { t: "What's wrong?", notes: 2, then: [{ from: 'akihiko', t: 'nothing' }, { from: 'akihiko', t: 'just wanted to see if you were there' }, { from: 'akihiko', t: 'goodnight' }] }
    ] },
    { id: 'sees-6b', thread: 'sees', rank: 6, days: 2, msgs: [
      { sys: 'Junpei added Shinjiro to "S.E.E.S."' },
      { from: 'shinjiro', t: 'remove me' },
      { from: 'junpei', t: 'no' },
      { from: 'shinjiro', t: 'iori' },
      { from: 'akihiko', t: "he's staying" },
      { from: 'shinjiro', t: '...who keeps buying beef flavor cup ramen. it is not protein' },
      { from: 'akihiko', t: "it's protein adjacent" },
      { from: 'yukari', t: 'OMG' }
    ] },
    { id: 'sees-7a', thread: 'sees', rank: 7, days: 1, msgs: [
      { from: 'shinjiro', t: 'who left the rice cooker on' },
      { from: 'junpei', t: '...' },
      { from: 'junpei', t: 'the rice cooker did that on its own' },
      { from: 'shinjiro', t: 'iori.' }
    ] },
    { id: 'aki-7b', rank: 7, days: 2, slot: 1, msgs: [
      { from: 'akihiko', t: 'shinji made curry' },
      { from: 'akihiko', t: "it's good" },
      { from: 'akihiko', t: "don't tell him i said that" }
    ], reply: [
      { t: "Too late, I'm telling him.", notes: 2, then: [{ from: 'akihiko', t: 'solar' }, { from: 'akihiko', t: 'SOLAR' }] },
      { t: 'Save me some.', notes: 3, then: [{ from: 'akihiko', t: 'already did' }, { from: 'akihiko', t: "it's in the fridge with your name on it" }] }
    ] },
    { id: 'aki-8a', rank: 8, days: 1, slot: 1, msgs: [
      { from: 'akihiko', t: 'thanks for today' },
      { from: 'akihiko', t: 'and this morning' },
      { from: 'akihiko', t: '5:12?' }
    ], reply: [
      { t: '5:12.', notes: 3, then: [{ from: 'akihiko', t: 'ok' }, { from: 'akihiko', t: 'ok good' }] },
      { t: 'Sleep in tomorrow. Please.', notes: 2, then: [{ from: 'akihiko', t: '...ok' }, { from: 'akihiko', t: '6:12 then' }] }
    ] },
    { id: 'sees-8b', thread: 'sees', rank: 8, days: 3, msgs: [
      { from: 'mitsuru', t: 'Dinner is at seven tonight. Everyone, please.' },
      { from: 'yukari', t: "we'll be there" },
      { from: 'junpei', t: "i'm cooking" },
      { from: 'yukari', t: 'NO' },
      { from: 'akihiko', t: "i'll help" },
      { from: 'yukari', t: 'ALSO NO' }
    ] },
    { id: 'aki-9f', rank: 9, route: 'friend', days: 1, slot: 1, msgs: [
      { from: 'akihiko', t: 'best friend' },
      { from: 'akihiko', t: 'still sounds weird' },
      { from: 'akihiko', t: 'good weird' }
    ], reply: [
      { t: 'Best friend.', notes: 3, then: [{ from: 'akihiko', t: '👊' }] },
      { t: "Don't get sappy on me, senpai.", notes: 2, then: [{ from: 'akihiko', t: 'too late' }] }
    ] },
    { id: 'aki-9r', rank: 9, route: 'romance', days: 1, slot: 1, msgs: [
      { from: 'akihiko', t: 'hey' },
      { from: 'akihiko', t: 'are we' },
      { from: 'akihiko', t: 'is this' },
      { from: 'akihiko', t: "ok i'm just going to ask" },
      { from: 'akihiko', t: 'are you my girlfriend now' }
    ], reply: [
      { t: 'Yes, Akihiko.', notes: 3, then: [{ from: 'akihiko', t: 'ok' }, { from: 'akihiko', t: 'OK' }, { from: 'akihiko', t: 'good' }, { from: 'akihiko', t: 'goodnight girlfriend' }] },
      { t: 'Ask me in person.', notes: 3, then: [{ from: 'akihiko', t: '5:12' }, { from: 'akihiko', t: "i'm asking at 5:12" }] }
    ] },
    { id: 'sees-9g', thread: 'sees', rank: 9, route: 'romance', days: 3, msgs: [
      { from: 'junpei', t: "so are we just not going to talk about how senpai held solar's hand at the station" },
      { from: 'yukari', t: 'junpei.' },
      { from: 'akihiko', t: 'how do you know that' },
      { from: 'junpei', t: 'EVERYONE KNOWS THAT' },
      { from: 'mitsuru', t: 'It was quite visible.' }
    ] },
    { id: 'aki-10r', rank: 10, route: 'romance', date: '12/24', slot: 1, msgs: [
      { from: 'akihiko', t: 'merry christmas eve' },
      { from: 'akihiko', t: 'look outside' },
      { from: 'akihiko', t: "it's snowing again" }
    ], reply: [
      { t: 'Come look with me.', notes: 3, then: [{ from: 'akihiko', t: 'already at your door' }] },
      { t: 'Merry Christmas Eve, Aki.', notes: 3, then: [{ from: 'akihiko', t: 'aki' }, { from: 'akihiko', t: 'say that again tomorrow' }] }
    ] },
    { id: 'aki-10f', rank: 10, route: 'friend', date: '12/24', slot: 1, msgs: [
      { from: 'akihiko', t: 'merry christmas eve, best friend' },
      { from: 'akihiko', t: '5:12 tomorrow?' }
    ], reply: [
      { t: "It's Christmas.", notes: 2, then: [{ from: 'akihiko', t: '5:13 then' }] },
      { t: 'Wouldn\'t miss it.', notes: 3, then: [{ from: 'akihiko', t: "that's my best friend" }] }
    ] }
  ],
  ranks: [
    { after: '4/20', title: '1: rookie', place: 'Gekkoukan High · 2F Hallway', scene: [
      { n: "April in Iwatodai didn't know what it wanted to be. It had rained at lunch, a thin, undecided drizzle that gave up halfway through fifth period, and now the light coming through the second-floor windows was the washed-out gold of something trying to make up for it." },
      { n: 'Solar had her headphones around her neck and her bag over one shoulder and the specific posture of a transfer student who had done this enough times to know that the first two weeks were a performance, and that the trick was to keep the performance boring.' },
      { n: 'Polite. Present. Unremarkable. Nobody asked the unremarkable girl where her parents were.' },
      { n: "The hallway emptied the way hallways always did after the bell, loud and then all at once not loud, and she had almost made it to the stairs when she noticed the cluster of girls by the window." },
      { n: 'They were standing in the careful, casual formation of people pretending not to look at something, and the something was leaning against the window frame with one arm folded across his ribs, like he was holding himself together by hand.' },
      { n: "Silver hair. A bandage stuck to his forehead at an angle that suggested he'd put it there himself without a mirror. A red vest that on anyone else would have been a uniform violation, and on him looked like the uniform's idea." },
      { n: "Akihiko Sanada. Third year. Captain of the boxing club. Resident of the dorm's second floor, which meant she'd heard him leave every morning at an hour no reasonable person was awake." },
      { n: "She hadn't technically been introduced to him. She'd seen him on the night she arrived, and again on the night she would rather not think about, the one with the roof and the moon and the cold weight of something pressed against her temple. He had been bleeding a little, then. It hadn't seemed like the moment for introductions." },
      { s: 'akihiko', f: 'neutral', t: 'Hey.' },
      { n: 'It took her a second to realize he was talking to her. It took the girls by the window considerably less.' },
      { s: 'akihiko', f: 'neutral', t: "You're the transfer student. The one who moved into the dorm." },
      { choose: [
        { t: "That's me.", notes: 1, then: [
          { s: 'akihiko', f: 'neutral', t: "Thought so. Mitsuru said you'd be easy to spot." },
          { n: 'Solar decided not to ask what that meant.' }
        ] },
        { t: "Depends who's asking.", notes: 3, then: [
          { s: 'akihiko', f: 'surprised', t: '...Huh.' },
          { s: 'akihiko', f: 'happy', t: "Fair enough. Akihiko Sanada. I'm on the second floor." },
          { n: "She knew. She didn't say she knew." }
        ] },
        { t: '(Nod, and keep walking.)', notes: 0, then: [
          { s: 'akihiko', f: 'serious', t: 'Hey, hold on a second.' },
          { n: 'She held on a second. The girls by the window held on with her.' }
        ] }
      ] },
      { n: 'He pushed himself off the window frame and immediately regretted it. She watched the regret travel across his face, from his ribs up to his jaw, and then watched him decide it was not happening.' },
      { s: 'akihiko', f: 'serious', t: "Sorry. I'm not usually this... stationary. Cracked a couple of ribs a few weeks back. Doctor says nothing fun until they heal." },
      { choose: [
        { t: 'Does it hurt?', notes: 1, then: [{ s: 'akihiko', f: 'happy', t: 'Only when I laugh. Or breathe. Or think about the gym.' }] },
        { t: "You don't look like you sit still very well.", notes: 3, then: [
          { s: 'akihiko', f: 'happy', t: "Ha! You've known me thirty seconds and you've already figured that out." },
          { n: 'His laugh turned into a wince halfway through, but he committed to the laugh. She respected that, a little.' }
        ] },
        { t: 'You should probably go home and rest.', notes: 0, then: [{ s: 'akihiko', f: 'sad-2', t: '...You sound like my doctor. And Mitsuru. And every single person in that dorm.' }] }
      ] },
      { n: 'Behind him, one of the girls whispered something to another, and the other girl looked at Solar with the particular expression of someone memorizing a face for later.' },
      { n: "Great. Day eleven at a new school, and she'd already been entered into a ledger she hadn't known existed." },
      { s: 'akihiko', f: 'neutral', t: 'Mitsuru told me about the roof. Your first night. Most people freeze up, the first time.' },
      { n: "The roof. So they were going to talk about it, then, in a school hallway at four in the afternoon, like it was a club meeting." },
      { n: 'Her hand found the strap of her bag and tightened there, which was a thing it did on its own sometimes. She let it.' },
      { choose: [
        { t: "I didn't really have time to freeze.", notes: 3, then: [
          { s: 'akihiko', f: 'serious-3', t: "No. That's what I heard." },
          { n: "He said it like a compliment. She wasn't sure it was one." }
        ] },
        { t: "I'd rather not talk about it.", notes: 2, then: [
          { s: 'akihiko', f: 'sad-2', t: "...Yeah. Okay. That's fair." },
          { n: "He didn't push. She hadn't expected him not to push, and it threw her more than pushing would have." }
        ] },
        { t: 'It was nothing.', notes: 0, then: [
          { s: 'akihiko', f: 'serious', t: "It wasn't nothing." },
          { n: 'He said it flatly, and for a second the hallway was very quiet.' }
        ] }
      ] },
      { s: 'akihiko', f: 'serious-3', t: 'Anyway. I want to see what you can do. Once these heal, come run with me.' },
      { s: 'akihiko', f: 'neutral', t: "Early mornings, along the river. Best way to start a day. Clears your head before anything else gets into it." },
      { n: 'Solar had a head that very much did not want to be cleared, especially before sunrise. She also had the distinct sense that saying so would be taken as a challenge.' },
      { choose: [
        { t: "I'll try to keep up.", notes: 3, then: [
          { s: 'akihiko', f: 'serious', t: "Don't try. Do it." },
          { n: "He grinned when he said it, though, so she decided it wasn't an order, per se." }
        ] },
        { t: 'How early is early?', notes: 1, then: [
          { s: 'akihiko', f: 'happy', t: 'Five-thirty.' },
          { s: 'akihiko', f: 'neutral', t: "...You'll get used to it." },
          { n: 'She would not get used to it. She already knew that about herself.' }
        ] },
        { t: 'Absolutely not.', notes: 1, then: [
          { s: 'akihiko', f: 'happy', t: "Ha! I'll ask you again next week." },
          { n: 'He would, too. She could tell.' }
        ] }
      ] },
      { n: 'He walked with her as far as the shoe lockers, which was further than either of them needed to go. He moved carefully, one hand never far from his side, and talked the entire way about a boxing match he had watched on television the night before, round by round, in more detail than she would have thought a human memory could hold.' },
      { n: "She didn't follow all of it. She found that she didn't mind." },
      { n: 'At the lockers he stopped and looked at her the way people look at a new opponent, which was to say like she was a question he fully intended to answer.' },
      { s: 'akihiko', f: 'happy', t: "Good. Then it's settled, Rookie." },
      { n: 'Rookie. He said it like the nickname had already been decided, and the worst part was that it probably had.' },
      { place: 'Iwatodai Dorm · Lounge', time: 'Evening' },
      { n: 'That night the dorm smelled like instant ramen and the lemon cleaner someone used on the kitchen counters whenever they were stressed. Solar sat at the far end of the couch with a textbook open on her knees that she had not turned a page of in twenty minutes.' },
      { n: 'Akihiko came down the stairs at nine, very slowly, holding a carton of milk.' },
      { s: 'akihiko', f: 'happy', t: 'Rookie.' },
      { n: 'He lifted the carton at her in a small salute and went back up the stairs just as slowly as he had come down.' },
      { n: "It was nothing. It was a guy with a carton of milk. She turned the page anyway, and didn't remember a word of it." }
    ] },

    { after: '5/10', title: '2: five-thirty', place: 'Iwatodai Dorm · Front Door', scene: [
      { phone: [
        { from: 'akihiko', t: 'you up' },
        { from: 'akihiko', t: 'ribs are cleared' },
        { from: 'akihiko', t: 'running in 15. front door' },
        { from: 'solar', t: 'how do you have this number' },
        { from: 'akihiko', t: 'mitsuru' },
        { from: 'akihiko', t: '14 now' }
      ], contact: 'Akihiko Sanada · 5:12 AM', handle: 'akihiko', me: 'solar' },
      { n: 'It was five twenty-nine in the morning when she pushed the front door open, and the air outside was the kind of cold that got into your teeth.' },
      { n: 'The sky over the bay was the color of skim milk. A single gull complained somewhere above the water. Akihiko was stretching against the railing in a gray hoodie with the sleeves shoved up, looking like a man who had been awake for an hour and enjoyed every minute of it.' },
      { s: 'akihiko', f: 'happy', t: 'You came.' },
      { choose: [
        { t: "You didn't leave me much of a choice.", notes: 2, then: [{ s: 'akihiko', f: 'happy', t: "There's always a choice. You made the right one." }] },
        { t: 'Barely.', notes: 3, then: [{ s: 'akihiko', f: 'happy', t: 'Barely still counts.' }] }
      ] },
      { n: "The first kilometer was fine. The second was less fine. By the third, Solar had stopped thinking in kilometers and started thinking in streetlights, each one a small personal goal, each one somehow further away than the last." },
      { n: "He ran beside her instead of ahead of her, which she noticed, and which she suspected cost him something, the way he kept glancing at the path in front of them like it was calling his name." },
      { s: 'akihiko', f: 'serious', t: "Breathe from your stomach, not your chest. You're running like you're trying to get away from something." },
      { n: "She almost laughed. She didn't have the air for it." },
      { choose: [
        { t: 'Maybe I am.', notes: 3, then: [
          { s: 'akihiko', f: 'neutral', t: '...Yeah?' },
          { n: "He looked at her for a step longer than a person running should look at anything." },
          { s: 'akihiko', f: 'serious-3', t: "Then let's go faster." },
          { n: 'She hated him a little. She went faster.' }
        ] },
        { t: "I'm running like someone who's dying.", notes: 2, then: [
          { s: 'akihiko', f: 'happy', t: "You're not dying. Dying is a lot quieter." },
          { n: 'That was, she felt, not the comfort he thought it was.' }
        ] }
      ] },
      { n: 'They stopped on the bridge as the sun came up. It happened all at once, the way it does over water, the bay going from gray to silver to something almost too bright to look at, and her legs were shaking, and her lungs were on fire, and she did not want to be anywhere else.' },
      { n: 'Akihiko handed her a bottle of water without saying anything and leaned on the railing next to her, close enough that she could feel the heat coming off his arm.' },
      { s: 'akihiko', f: 'neutral', t: "I like this part. Before anyone's awake." },
      { s: 'akihiko', f: 'neutral', t: "Nobody needs anything from you yet." },
      { n: 'She understood that more than she wanted to. She drank her water instead of saying so.' },
      { place: 'Hagakure Ramen', time: 'After School' },
      { n: "By the afternoon her legs had filed a formal complaint, and the rain had come back, soft and steady against the window of the ramen shop. Hagakure smelled like pork broth and wet umbrellas and the deep fryer in the back that had clearly been running since before she was born." },
      { s: 'akihiko', f: 'happy', t: "Best ramen in Iwatodai. I'm not exaggerating. I've done the research." },
      { s: 'junpei', t: "\"The research.\" He means he's eaten here like four hundred times." },
      { register: 'junpei' },
      { n: 'Junpei Iori had attached himself to them at the school gates with the confidence of a man who had never once in his life waited to be invited, and was now sliding into the booth next to Solar with his cap on backwards and a grin like a dare.' },
      { s: 'akihiko', f: 'neutral', t: 'Junpei. Nobody invited you.' },
      { s: 'junpei', t: "Bro, I invite myself. It's a gift. Yo, Solar, did he give you the protein speech yet? It's like forty minutes." },
      { s: 'akihiko', f: 'serious', t: "It's not a speech. It's information." },
      { choose: [
        { t: "I'd like to hear it.", notes: 3, then: [
          { s: 'akihiko', f: 'surprised', t: '...Really?' },
          { s: 'akihiko', f: 'happy', t: 'Okay. So. Muscle recovery depends on three things, and the first one is—' },
          { s: 'junpei', t: "Oh no. Oh no, you've done it now." },
          { n: "It was, in fact, about forty minutes. She found out more about amino acids than she had ever planned to know, and Akihiko's whole face changed while he explained it, like a light had come on somewhere behind it." }
        ] },
        { t: 'Maybe the short version.', notes: 2, then: [
          { s: 'akihiko', f: 'happy', t: "Eat more meat. Sleep. Don't skip leg day. That's the short version." },
          { s: 'junpei', t: "Honestly that's the long version too." }
        ] },
        { t: 'Pass.', notes: 0, then: [
          { s: 'akihiko', f: 'sad-2', t: '...Fine. Your loss.' },
          { n: 'He sulked for exactly as long as it took the ramen to arrive, which was not very long.' }
        ] }
      ] },
      { s: 'junpei', t: 'Hey, speaking of weird. Anyone else seen the girl up at Naganaki Shrine? Fox ears? Sweeping like she owns the place?' },
      { s: 'akihiko', f: 'neutral', t: 'Fox ears.' },
      { s: 'junpei', t: "I'm just sayin'! Iwatodai's been getting weird lately. You feel it, right, Solar?" },
      { n: "She thought about the roof, and the green light that came at midnight, and the coffins standing in the street where people should have been. Weird was one word for it." },
      { s: 'akihiko', f: 'serious-3', t: '...Weirder than usual, you mean.' },
      { n: "He ordered a second bowl with extra pork without looking at the menu, and when it came he pushed the egg from it into Solar's bowl without asking, like it was the most obvious thing in the world." },
      { n: 'Junpei looked at the egg, and then at Akihiko, and then at Solar, and said nothing, which for Junpei was its own sentence.' },
      { place: 'Iwatodai Dorm · Front Door', time: 'Evening' },
      { n: 'The rain had thinned to almost nothing by the time they walked back. At the dorm door Akihiko stopped and shook the water out of his hair like a dog, completely unbothered by the fact that most of it landed on her.' },
      { s: 'akihiko', f: 'happy', t: 'Same time tomorrow, Rookie?' },
      { choose: [
        { t: 'See you at five-thirty.', notes: 3, then: [
          { s: 'akihiko', f: 'happy', t: "Ha! I knew you'd come around." },
          { n: 'She had not come around. She had simply given up. There was a difference, and she intended to explain it to him at some point when her legs worked again.' }
        ] },
        { t: 'Ask me again tomorrow.', notes: 2, then: [
          { s: 'akihiko', f: 'serious', t: "Oh, I will. At five-twelve." },
          { n: 'He would. She knew that about him already.' }
        ] }
      ] },
      { n: 'She set her alarm for five-fifteen anyway.' }
    ] },

    { after: '6/1', title: '3: the coffee table', place: 'Iwatodai Dorm · Lounge', scene: [
      { n: "June brought the rainy season with it, and the rain came down on Iwatodai like it had something to prove. It drummed on the dorm windows and dripped from the awning and turned the walk from the station into a gauntlet of puddles, and by the time Solar got back she was damp in places she hadn't known could get damp." },
      { n: "The lounge was empty except for Akihiko, who was sitting on the couch and very obviously pretending to read a boxing magazine. He had been on the same page since she walked in. She could tell, because it was an advertisement for gloves." },
      { s: 'akihiko', f: 'neutral', t: 'Hey, Rookie. Sit down a second.' },
      { n: "She sat. He closed the magazine and set it on the coffee table and then picked it up again, as if he wasn't sure what his hands were for." },
      { s: 'akihiko', f: 'sad-2', t: "Can I ask you something? You've moved around a lot, right? Different towns. Different schools." },
      { n: "There it was, the question underneath the question. Usually people got to it on the second or third conversation, the careful way, and usually she had an answer ready that was short enough to end it." },
      { choose: [
        { t: "More than I'd like.", notes: 2, then: [
          { s: 'akihiko', f: 'sad', t: 'Yeah. I figured.' },
          { n: "He didn't ask why. He didn't ask where her parents were. She noticed the not-asking the way you notice a missing step." }
        ] },
        { t: 'Why do you ask?', notes: 1, then: [{ s: 'akihiko', f: 'sad-2', t: 'No reason. ...Okay. A reason.' }] },
        { t: "That's a heavy question for a Tuesday.", notes: 3, then: [
          { s: 'akihiko', f: 'happy', t: "Ha. Yeah, it is." },
          { n: 'The laugh went out of him slower than it came in.' }
        ] }
      ] },
      { s: 'akihiko', f: 'sad-3', t: "There's a guy I grew up with. Shinjiro. He used to live here. He was part of all of this." },
      { n: "He said all of this the way the others did, with a small tilt of the head toward the ceiling, toward the roof, toward the hour that came at midnight and wasn't on any clock." },
      { s: 'akihiko', f: 'sad', t: "He walked away two years ago. Doesn't answer when I knock. Doesn't come back." },
      { choose: [
        { t: "You still go see him, don't you?", notes: 3, then: [
          { s: 'akihiko', f: 'surprised', t: "...How'd you know that?" },
          { n: "Because he'd gone out last Sunday in the rain without an umbrella and come back an hour later looking like he'd lost a fight he hadn't been allowed to throw a punch in. She didn't say that either." },
          { s: 'akihiko', f: 'sad-2', t: "Every couple of weeks. He's usually in the back alley by the station. He tells me to get lost. I go anyway." }
        ] },
        { t: 'Do you know why he left?', notes: 1, then: [{ s: 'akihiko', f: 'sad-4', t: "I know why. I just don't know how to fix it." }] },
        { t: 'Maybe he needs space.', notes: 0, then: [
          { s: 'akihiko', f: 'serious-3', t: 'Two years is a lot of space.' },
          { n: "He didn't say it unkindly. That almost made it worse." }
        ] }
      ] },
      { n: "The rain filled the quiet for a while. Solar watched a drop chase another down the window until they met and kept going together, heavier and faster, and she thought, not for the first time, that she was very bad at this part. The part where someone handed you something that mattered to them and waited to see what you'd do with it." },
      { s: 'akihiko', f: 'sad-3', t: 'He used to cook, you know. When we were kids. Nobody taught him. He just decided somebody had to.' },
      { s: 'akihiko', f: 'neutral', t: "...Sorry. That got heavy. You're easy to talk to, that's all." },
      { choose: [
        { t: "I don't mind heavy.", notes: 3, then: [
          { s: 'akihiko', f: 'blushing', t: '...Yeah?' },
          { n: "He looked at her like he was recalculating something, and then looked away fast, like he'd been caught at it." }
        ] },
        { t: 'You can talk to me whenever.', notes: 2, then: [{ s: 'akihiko', f: 'happy', t: "Careful. I might take you up on that." }] }
      ] },
      { s: 'akihiko', f: 'serious', t: 'Okay. I need to move. If I sit here any longer I am going to lose my mind.' },
      { n: "What he meant by move, it turned out, was push-ups. On the coffee table. He set his feet on the edge of it and his hands on the floor and started counting under his breath, and the table creaked in a way that suggested it had not signed up for this." },
      { n: 'Solar did not stop him. Solar, if she was honest, was curious how far he would get.' },
      { n: 'He got to forty-one before the front door opened.' },
      { s: 'yukari', f: 'surprised', t: '...Senpai. Is that the coffee table?' },
      { register: 'yukari' },
      { n: 'Yukari Takeba stood in the doorway with her umbrella still dripping and a convenience store bag on her wrist and the expression of a girl who had come home from a long day and found a third-year using the furniture as gym equipment.' },
      { s: 'akihiko', f: 'serious', t: "It's sturdy." },
      { s: 'yukari', f: 'serious', t: "It's from a catalog." },
      { s: 'yukari', f: 'neutral', t: 'And you. Solar. You just watched him do this?' },
      { choose: [
        { t: 'I was keeping count. Forty-one.', notes: 3, then: [
          { s: 'yukari', f: 'surprised', t: "Oh my god. You're both like this." },
          { s: 'akihiko', f: 'happy', t: 'Forty-two.' }
        ] },
        { t: 'I tried to stop him.', notes: 1, then: [
          { s: 'yukari', f: 'neutral', t: "No you didn't." },
          { n: "No, she hadn't. Yukari, it turned out, was very hard to lie to, which Solar filed away for later." }
        ] }
      ] },
      { n: "Yukari stepped around them both with enormous dignity and went to put her groceries away, muttering something about boys and furniture and the general state of the dorm, and Akihiko finished his set in silence and sat back on his heels, breathing hard, grinning at the ceiling." },
      { n: "He didn't look like someone who had just been talking about the friend he couldn't get back. He looked fine. He looked the way he looked every morning on the bridge, bright and certain and already halfway to the next thing." },
      { n: "She recognized it, which was the problem. She'd been doing the same thing for years." }
    ] },

    { after: '6/22', title: '4: the heavy bag', place: 'Gekkoukan High · Boxing Club', scene: [
      { n: "The boxing club's gym was at the far end of the athletics building, past the pool, and you could smell it before you could see it, tape and sweat and the rubber of the mats and something underneath that was just effort, sunk so far into the walls that no amount of airing out would ever get rid of it." },
      { n: "It was the kind of humid June afternoon where the air sat on your skin like a damp towel. The windows were propped open with old textbooks. It didn't help." },
      { n: "Akihiko was alone at the heavy bag, working it like it had said something about his family. Left, left, right. Pivot. Left. The bag jumped on its chain with every hit, and the sound of it filled the room, flat and heavy and rhythmic, like a heartbeat that had made up its mind." },
      { n: "She'd come because he'd asked her to, in passing, in the hallway, like it was nothing. She had the distinct feeling that it wasn't nothing, the way he hadn't looked at her while he asked." },
      { s: 'akihiko', f: 'serious-3', t: "Summer tournament's in three weeks. I've won the last two. I'm not losing the third." },
      { n: "He didn't stop punching to say it. He didn't seem to need to breathe, either, which she found mildly offensive." },
      { s: 'akihiko', f: 'neutral', t: 'Hold the bag for me?' },
      { choose: [
        { t: 'Sure.', notes: 2, then: [
          { n: "She braced her shoulder against the bag the way he showed her, and then he hit it, and she understood immediately and completely why the bag had looked so tired." },
          { n: "Every punch went through the leather and through her collarbone and rattled her teeth on its way out. He didn't hold back. She didn't let go. Somewhere around the thirtieth hit, she realized he'd noticed both of those things." },
          { s: 'akihiko', f: 'happy', t: 'Not bad. Most people step back by now.' }
        ] },
        { t: 'Only if you go easy on me.', notes: 0, then: [
          { s: 'akihiko', f: 'serious', t: "I don't do easy." },
          { n: "He did not. Her arms would ache for two days, and every time she lifted a pen she would think about him, which was not, she suspected, what he'd intended." }
        ] },
        { t: "What happens if you lose?", notes: 3, then: [
          { s: 'akihiko', f: 'surprised', t: '...' },
          { n: "He stopped. Actually stopped, gloves up, breathing hard for the first time since she'd walked in." },
          { s: 'akihiko', f: 'neutral', t: "Nobody's ever asked me that. They ask how I'm going to win." },
          { s: 'akihiko', f: 'serious-3', t: "If I lose, I train harder. That's it. That's the whole plan." },
          { n: "It was not the whole plan. She could tell by the way he went back to the bag, harder than before." }
        ] }
      ] },
      { s: 'mitsuru', f: 'neutral', t: "Akihiko. I thought I'd find you here." },
      { register: 'mitsuru' },
      { n: "Mitsuru Kirijo stood in the doorway in her winter uniform, in June, without a single bead of sweat on her, holding a clipboard the way other people held swords. The gym seemed to straighten up a little in her presence. So did Akihiko." },
      { s: 'mitsuru', f: 'neutral', t: "You missed the meeting. Again. It's been on the schedule for a week." },
      { s: 'akihiko', f: 'sad-2', t: '...Was that today?' },
      { s: 'mitsuru', f: 'neutral', t: "It has been today since this morning." },
      { n: "Her eyes moved to Solar, and Solar felt herself being read, quickly and thoroughly, like a document Mitsuru had already decided whether to sign." },
      { s: 'mitsuru', f: 'neutral', t: "And you're our newest member. I hope he isn't teaching you to ignore every responsibility that doesn't involve punching." },
      { choose: [
        { t: "He's teaching me to hold a bag.", notes: 2, then: [
          { s: 'mitsuru', f: 'neutral', t: 'A practical skill, at least.' },
          { s: 'akihiko', f: 'happy', t: 'See? Practical.' }
        ] },
        { t: "I'll make sure he's at the next one.", notes: 3, then: [
          { s: 'mitsuru', f: 'surprised', t: "...I'd appreciate that." },
          { s: 'akihiko', f: 'surprised', t: 'Hey. Whose side are you on?' },
          { n: "Mitsuru didn't smile, exactly. But something at the corner of her mouth considered it." }
        ] }
      ] },
      { n: "Mitsuru left the way she'd arrived, without hurrying, and the door swung shut behind her with a soft, expensive click. Akihiko watched it for a moment after she was gone." },
      { s: 'akihiko', f: 'neutral', t: "She's been carrying all of this since we were kids. The Dark Hour. Her family. All of it. I don't know how she does it." },
      { s: 'akihiko', f: 'serious-3', t: "That's why I train. So I'm one less thing she has to worry about." },
      { n: "He said it to the door, not to her. Solar had the strange sense that she'd been let into a room she wasn't supposed to know existed." },
      { place: 'Iwatodai Station · Vending Machines', time: 'Evening' },
      { n: "They walked back together as the sun went down, the sky over the station going the color of a peach left out too long. The heat had finally broken, a little. Cicadas were trying out the season, a few at a time, like they weren't sure yet." },
      { n: "At the vending machines by the station he bought two drinks without asking what she wanted and handed her one. It was a protein shake. Strawberry. It was, unbelievably, cold enough to hurt her teeth and terrible in a way she would not be able to describe later." },
      { s: 'akihiko', f: 'happy', t: "Good for recovery. Your arms are going to hate you tomorrow." },
      { choose: [
        { t: 'This tastes like a melted eraser.', notes: 3, then: [
          { s: 'akihiko', f: 'happy', t: 'Ha! Yeah. You get used to it.' },
          { n: 'She was beginning to understand that "you get used to it" was the closest thing he had to a philosophy.' }
        ] },
        { t: 'Thanks, senpai.', notes: 1, then: [{ s: 'akihiko', f: 'blushing', t: "...It's just a drink." }] }
      ] },
      { n: "She noticed, as he lifted his own bottle, that the tape on his knuckles had gone gray at the edges, and that underneath it the skin was split in two places, old and new, layered like rings in a tree." },
      { s: 'akihiko', f: 'neutral', t: "The tournament's on a Saturday. The eleventh. You don't have to come." },
      { n: "He said you don't have to come in the exact tone people used when they very much wanted you to come. She'd used that tone herself, once or twice, and never gotten the answer she wanted." },
      { choose: [
        { t: "I'll be there.", notes: 3, then: [
          { s: 'akihiko', f: 'happy', t: '...Yeah? Good. Okay. Good.' },
          { n: "He said good three times. She counted." }
        ] },
        { t: "I'll think about it.", notes: 1, then: [
          { s: 'akihiko', f: 'neutral', t: 'Sure. No pressure.' },
          { n: "There was some pressure. It was all on his face." }
        ] }
      ] },
      { n: 'She drank the rest of the shake on the walk home, every terrible sip of it, and did not examine why.' }
    ] },

    { after: '7/21', title: '5: stone steps', place: 'Naganaki Shrine · Stone Steps', scene: [
      { n: "Summer vacation came down on Iwatodai like a lid. The heat was a living thing now, thick and loud and full of cicadas, and the air above the asphalt shimmered by nine in the morning, and the whole city smelled like sunscreen and hot concrete and the sea." },
      { n: 'Akihiko had discovered that the stone steps up to Naganaki Shrine were, in his words, perfect for intervals. Solar had discovered that she could hate an inanimate object with her entire body.' },
      { n: "There were a hundred and twelve of them. She knew because she had counted them on the first run, and the second, and the third, as if counting would make there be fewer of them." },
      { s: 'akihiko', f: 'happy', t: "That's ten. Take a break. You earned it." },
      { n: "She sat on the top step with her legs shaking and the sweat running down her back and the whole city spread out below her, hazy and blue, the bay glinting at the edge of it like something dropped." },
      { n: "Somewhere behind them, a broom was sweeping the shrine grounds in slow, unbothered strokes. She caught a glimpse of the sweeper when she turned her head, a girl in purple and white with her hair tied up high, who looked at the two of them, sweaty and gasping on her steps, and gave a little wave like this happened all the time." },
      { n: 'A white dog lay in the shade of the offering box, watching them with the patient interest of something that had seen a great many people run up these stairs.' },
      { n: 'Her headphones had slid down around her neck at some point on the eighth set. They were still playing, small and tinny, a song that had been on repeat for weeks.' },
      { s: 'akihiko', f: 'neutral', t: "You always have those on. What are you listening to?" },
      { n: "Nobody asked her that. People asked what she was listening to the way they asked how she was doing, without waiting for the answer. He was waiting." },
      { n: 'She handed them over. He held them to one ear, awkwardly, like he was afraid of breaking them.' },
      { s: 'akihiko', f: 'surprised', t: "...Huh. I've never heard this before. It sounds like it's from somewhere else entirely." },
      { n: 'It was, in a way she could never have explained. Some songs felt like they belonged to a different life, one that had happened somewhere else to some other version of her. She didn\'t know where she\'d first heard this one. She just knew she couldn\'t stop.' },
      { choose: [
        { t: "It's from a world far away.", notes: 3, then: [
          { s: 'akihiko', f: 'neutral', t: 'Yeah? It suits you. It sounds like a story.' },
          { n: "She looked at him for a beat too long, and then at the city instead." }
        ] },
        { t: 'Do you like it?', notes: 2, then: [{ s: 'akihiko', f: 'happy', t: "It's not what I'd train to. ...But I'd listen to it again." }] },
        { t: "It helps me think.", notes: 2, then: [{ s: 'akihiko', f: 'neutral', t: "I get that. Running's like that for me. Everything gets quiet." }] }
      ] },
      { n: "He handed the headphones back. His fingers brushed hers, and he took his hand back a little too fast, and then sat down on the step beside her like nothing had happened, which meant something had." },
      { s: 'akihiko', f: 'neutral', t: 'Can I tell you why I really fight?' },
      { n: "The cicadas didn't stop. The girl with the broom didn't stop. But something in the air shifted, like the world was leaning in to listen." },
      { s: 'akihiko', f: 'sad', t: "When I was a kid, I couldn't protect anyone. I was too small. Too slow. I promised myself that was never going to happen again." },
      { s: 'akihiko', f: 'serious-3', t: "So I keep getting stronger. Every day. Even when it doesn't make sense to anyone else." },
      { n: "He wasn't looking at her. He was looking at his hands, the split knuckles, the old tape. She thought about the way he ran, like something was chasing him, and understood for the first time that something was." },
      { choose: [
        { t: 'It makes sense to me.', notes: 3, then: [
          { s: 'akihiko', f: 'surprised', t: '...' },
          { s: 'akihiko', f: 'happy', t: 'Thanks. Solar.' }
        ] },
        { t: "Who couldn't you protect?", notes: 1, then: [
          { s: 'akihiko', f: 'sad-2', t: "...Another time. I promise." },
          { s: 'akihiko', f: 'happy', t: 'Come on, Solar. Ten more.' }
        ] }
      ] },
      { n: "It was the first time he'd called her by her name instead of Rookie. He didn't seem to notice. She did, and something warm and stupid turned over in her chest, and she stood up before it could finish turning." },
      { place: 'Naganaki Shrine · Stone Steps', time: 'Evening' },
      { n: "They did the ten more. Then five more, because he said so, and then three more, because she said so, out of spite, and by the end the sun was going down and the steps had gone gold and her legs had stopped belonging to her entirely." },
      { n: "He laughed at her on the way down, the first real laugh she'd heard out of him in weeks, loud and easy, and caught her elbow when she stumbled on the last step without making a thing of it." },
      { s: 'akihiko', f: 'happy', t: "Same time tomorrow?" },
      { choose: [
        { t: "Only if you carry me up.", notes: 2, then: [
          { s: 'akihiko', f: 'blushing', t: "...That's not how intervals work." },
          { n: "He considered it, though. She watched him consider it." }
        ] },
        { t: 'Same time tomorrow.', notes: 3, then: [{ s: 'akihiko', f: 'happy', t: "That's what I like to hear." }] }
      ] },
      { n: "On the way home, the cicadas finally hit their stride, loud enough to drown everything out. She found she didn't need her headphones at all." }
    ] },

    { after: '8/10', title: '6: miki', music: 'tender', place: 'Iwatodai Dorm · Rooftop', scene: [
      { n: "August had a way of making the evenings feel like they'd never end. The sun went down over the bay so slowly you could watch it happen, and the heat stayed behind after it was gone, rising off the dorm roof in waves you could feel through your shoes." },
      { n: "Akihiko had been quiet all afternoon. Not his normal quiet, the coiled, about-to-go-for-a-run quiet. A different one. Heavier. He'd skipped the gym. He'd skipped dinner. And now he was up here, on the roof, sitting with his back against the water tank and his arms on his knees, watching the sky like it owed him something." },
      { n: "She hadn't been invited. She came up anyway, and sat down a few feet away, and he didn't tell her to leave." },
      { s: 'akihiko', f: 'sad-2', t: 'Shinji came back. To S.E.E.S. Did you hear?' },
      { n: "She'd heard. Everyone had heard. Junpei had announced it in the group chat with eleven exclamation points, and then Mitsuru had sent a single period, and that had somehow been worse." },
      { choose: [
        { t: "That's good, isn't it?", notes: 1, then: [{ s: 'akihiko', f: 'sad', t: "It should be. I've wanted this for two years. So why does it feel like something's wrong?" }] },
        { t: "You don't seem happy.", notes: 3, then: [{ s: 'akihiko', f: 'sad-3', t: "...You notice everything, don't you." }] }
      ] },
      { n: "The sun touched the water. For a second the whole bay lit up, orange and gold, and then it started to go." },
      { s: 'akihiko', f: 'sad', t: "I told you there was someone I couldn't protect. Her name was Miki. My little sister." },
      { n: "He said it plainly, the way people say things they've said to themselves a thousand times and never once out loud." },
      { s: 'akihiko', f: 'sad-4', t: "We grew up in an orphanage. Shinji and Miki and me. There was a fire. I was a kid." },
      { s: 'akihiko', f: 'sad-3', t: "I couldn't get to her. I could hear her, and I couldn't get to her." },
      { n: "Solar didn't say anything. There wasn't anything to say. She knew that better than most people, which was the problem, because she could feel the old familiar shape of it in her own chest, the thing she didn't talk about, the car and the bridge and the ten years since." },
      { n: "Grief, she'd learned, didn't get smaller. You just got bigger around it, slowly, until it fit." },
      { choose: [
        { t: '(Stay quiet beside him.)', notes: 3, then: [
          { n: 'She stayed. She moved a little closer, so their shoulders almost touched, and stayed. It seemed to be the right answer.' },
          { s: 'akihiko', f: 'sad-4', t: "Thanks. For not telling me it wasn't my fault. Everyone always tells me that." }
        ] },
        { t: "It wasn't your fault.", notes: 1, then: [{ s: 'akihiko', f: 'sad', t: "I know. I know that. I just don't believe it yet." }] },
        { t: "I lost my parents. When I was little.", notes: 3, then: [
          { s: 'akihiko', f: 'surprised', t: '...' },
          { n: "He turned and looked at her, really looked, the way you look at someone you thought you knew and are realizing you'd only met the outline of." },
          { s: 'akihiko', f: 'sad-2', t: "I didn't know. I'm sorry." },
          { n: "He didn't ask anything else. He didn't need to. They sat with it, both of them, two people who knew exactly how heavy the thing was, and for once neither of them had to pretend it was lighter." }
        ] }
      ] },
      { s: 'akihiko', f: 'neutral', t: "Shinji pulled me out of there. Carried me, practically. That's why I can't let him go now." },
      { s: 'akihiko', f: 'serious-3', t: "Whatever's wrong with him, I'm going to find out." },
      { n: "The last of the sun went under. The city lights came up one by one, and somewhere below them a door slammed and Junpei yelled something about the rice cooker, and the world rushed back in, loud and ordinary." },
      { n: 'Akihiko laughed, short and surprised, like he\'d forgotten the world was still there. Then he stood and offered her his hand.' },
      { s: 'akihiko', f: 'happy', t: "Come on. If Junpei burned the rice again, Shinji's going to kill him." },
      { n: "She took his hand. It was warm, and rough from the tape, and he held on a second longer than it took to pull her up." }
    ] },

    { after: '9/1', title: '7: the roof', place: 'Gekkoukan High · Rooftop', scene: [
      { n: "September came in on a typhoon. It blew through Iwatodai over a long weekend and left the city washed and dripping and strangely clean, and the first day back at school the sky was so blue it looked fake." },
      { n: "The school roof caught the wind that was left over. It snapped at the safety fence and pulled at her skirt and blew the clouds across the sky so fast they looked like they were late for something." },
      { n: "Akihiko was already there when she came up, leaning on the railing with his blazer slung over his shoulder. He didn't turn around. He didn't need to. He'd started recognizing her footsteps a while ago, which she pretended not to know." },
      { s: 'akihiko', f: 'neutral', t: "Funny. I used to come up here to clear my head. Now I come up here hoping you'll show up." },
      { n: "He said it to the sky, casually, like it was nothing. Her stomach did a small, specific thing that it was absolutely not allowed to do." },
      { choose: [
        { t: "Then I'll keep showing up.", notes: 3, then: [{ s: 'akihiko', f: 'blushing', t: "...Good. That's... good." }] },
        { t: 'You could just ask, you know.', notes: 2, then: [{ s: 'akihiko', f: 'happy', t: 'Yeah, well. Asking is harder than running ten kilometers.' }] },
        { t: 'Who says I came up here for you?', notes: 2, then: [
          { s: 'akihiko', f: 'happy', t: 'Ha! Fair.' },
          { n: "He didn't believe her. She didn't believe her either." }
        ] }
      ] },
      { n: 'They stood at the railing for a while, watching the city. The monorail slid across the bridge in the distance, silver and silent, and the wind kept pulling at everything.' },
      { s: 'akihiko', f: 'sad-2', t: "Shinji's been different since he came back. Tired. He hides it, but he's taking something. Pills." },
      { n: "She'd seen it too. The orange bottle in Shinji's coat pocket. The way he'd gone gray at dinner and left before dessert. The way he cooked for everyone and barely ate." },
      { s: 'akihiko', f: 'serious-3', t: "He won't tell me what they are. He gets this look like he's already decided something, and he isn't going to let me talk him out of it." },
      { choose: [
        { t: 'Ask him straight out.', notes: 1, then: [{ s: 'akihiko', f: 'sad', t: "I did. He told me to mind my own business. Then he made me dinner. That's Shinji." }] },
        { t: 'Maybe he needs you to trust him.', notes: 2, then: [{ s: 'akihiko', f: 'sad-3', t: "...Maybe. I don't know how to trust him and worry about him at the same time." }] },
        { t: "You're scared for him.", notes: 3, then: [
          { s: 'akihiko', f: 'sad-4', t: '...' },
          { s: 'akihiko', f: 'sad-3', t: "Yeah. I am." },
          { n: "It came out of him small, like it had been sitting at the bottom of something for a long time and had finally been allowed up." }
        ] }
      ] },
      { n: "He pushed off the railing and turned to face her, and for a second the wind had nothing to do, his hair falling flat, the whole roof gone still." },
      { s: 'akihiko', f: 'neutral', t: "Hey. If something happens. If I go running off somewhere stupid with my head down..." },
      { s: 'akihiko', f: 'sad-2', t: 'Pull me back. Okay?' },
      { choose: [
        { t: 'I promise.', notes: 3, then: [
          { n: "He let out a breath he'd clearly been holding for weeks, and his whole body changed with it, shoulders dropping, hands loosening at his sides." },
          { s: 'akihiko', f: 'happy', t: "Okay. Okay. Thanks." }
        ] },
        { t: "I'll tackle you if I have to.", notes: 3, then: [
          { s: 'akihiko', f: 'happy', t: "Ha! I'd like to see you try." },
          { s: 'akihiko', f: 'neutral', t: "...But yeah. Do that." }
        ] }
      ] },
      { n: "The bell rang below them. Neither of them moved for a moment. Then the wind came back all at once and blew her hair across her face, and he reached over without thinking and pushed it out of her eyes, and then realized what he'd done, and went red to the ears." },
      { s: 'akihiko', f: 'blushing', t: '...We should go. Class.' },
      { n: "He took the stairs two at a time. She followed slower, one hand on the railing, her face hot, deciding very firmly that it was the wind." }
    ] },

    { after: '10/10', title: '8: october', music: 'tender', place: 'Iwatodai Dorm · Hallway', scene: [
      { n: "The cold came in October all at once, the way it does by the water. One morning the air was soft and the next it had teeth, and the trees along the river went yellow overnight like they'd gotten bad news." },
      { n: "For six days, there had been no text at five-twelve." },
      { n: "Solar noticed it the first morning and told herself it was nothing. She noticed the second morning and told herself he needed sleep. By the sixth she was awake at five every day anyway, out of habit, staring at her ceiling in the dark, listening to the dorm not make the sounds it used to make." },
      { n: "On the seventh morning, she picked up her phone." },
      { phone: [
        { from: 'solar', t: 'you up' },
        { from: 'akihiko', t: '...' },
        { from: 'akihiko', t: 'yeah' },
        { from: 'solar', t: 'front door. 15' },
        { from: 'akihiko', t: "i don't think i can run today" },
        { from: 'solar', t: "then we'll walk" }
      ], contact: 'Akihiko Sanada · 5:12 AM', handle: 'akihiko', me: 'solar' },
      { place: 'Paulownia Mall', time: 'After School' },
      { n: "They walked all morning, and then after school he asked her to come to the mall, and then didn't buy anything. They wandered the arcade and the bookstore and the shop that sold nothing but phone charms, and he looked at all of it like he was trying to remember what it was for." },
      { n: "It had been a little over a week since that night. Nobody in the dorm said Shinji's name out loud, which meant everyone was saying it all the time." },
      { s: 'akihiko', f: 'neutral', t: "Sorry. I just didn't want to be in the dorm." },
      { s: 'akihiko', f: 'sad-4', t: "I keep going back to that night. Running it over and over. Every version where I'm faster." },
      { choose: [
        { t: 'Tell me about him.', notes: 3, then: [
          { s: 'akihiko', f: 'surprised', t: '...' },
          { s: 'akihiko', f: 'sad-3', t: "He couldn't cook when we were kids. He taught himself. For Miki and me." },
          { s: 'akihiko', f: 'sad-2', t: 'Burned everything for a year straight. We ate it anyway.' },
          { n: 'He laughed, wet and broken in the middle, and didn\'t try to hide it, and she didn\'t look away.' }
        ] },
        { t: "You couldn't have changed it.", notes: 1, then: [{ s: 'akihiko', f: 'sad', t: "That's what I keep telling myself. It's not working yet." }] }
      ] },
      { s: 'akihiko', f: 'sad', t: "I've been training so hard I can barely stand. Mitsuru made me stop. I yelled at her. I've never yelled at her." },
      { s: 'akihiko', f: 'sad-2', t: "I don't know what to do with this if I can't hit it." },
      { n: "He looked down at his hands, and she looked at them too. The knuckles were raw, fresh, worse than she'd ever seen them. He'd been hitting something. Probably for days." },
      { choose: [
        { t: "You don't have to be strong all the time.", notes: 3, then: [
          { s: 'akihiko', f: 'sad-4', t: '...' },
          { s: 'akihiko', f: 'sad-3', t: "Funny. That's exactly what Shinji would say. If he could." }
        ] },
        { t: "Then let's go hit something.", notes: 2, then: [
          { s: 'akihiko', f: 'surprised', t: '...Ha.' },
          { s: 'akihiko', f: 'happy', t: "Okay. Okay, yeah. Batting cages. You're on." },
          { n: "She was terrible at it. He was worse, because he kept swinging too hard and spinning all the way around. By the end they were both laughing so much the attendant asked them to leave." }
        ] },
        { t: '(Take his hand.)', notes: 3, then: [
          { s: 'akihiko', f: 'surprised', t: '...' },
          { n: "He went very still. Then his fingers closed around hers, careful, like her hand was the one that was hurt." },
          { s: 'akihiko', f: 'sad-2', t: "...Thanks." }
        ] }
      ] },
      { n: "Neither of them bought anything. On the walk home, he told her it was the best day he'd had in weeks, and then looked surprised that he'd said it, like the words had gotten out without permission." },
      { n: "At the dorm door he stopped. The lights were on inside. Junpei's voice, Yukari's laugh, a pot clattering in the kitchen that nobody knew how to use anymore." },
      { s: 'akihiko', f: 'neutral', t: "Five-twelve tomorrow?" },
      { n: "She nodded. He went inside first. She stood in the cold for a moment longer, and then followed." }
    ] },

    { after: '11/2', title: '9: what am i to you', place: 'Iwatodai Station', scene: [
      { n: "November made everything look like a photograph of itself. The light came in low and pale and gold even at noon, and people's breath showed in the mornings, and the station smelled like roasted chestnuts from the cart that set up outside the north exit every year when the cold came." },
      { n: "The monorail was delayed. Something with a signal. The platform was packed with tired commuters and students in scarves, and the announcement kept repeating itself in that calm, apologetic voice that meant nobody actually knew anything." },
      { n: "Akihiko kept checking his watch even though they weren't going anywhere in particular. He'd been doing it all afternoon. He'd also changed the subject four times, laughed at things that weren't funny, and bought her a bag of chestnuts that she hadn't asked for and was now holding like a hand warmer." },
      { n: "She knew the signs. She'd been doing the same thing for weeks." },
      { s: 'akihiko', f: 'neutral', t: "Can I say something? It's going to come out wrong." },
      { choose: [
        { t: 'Say it wrong, then.', notes: 3, then: [{ s: 'akihiko', f: 'happy', t: "...Ha. Okay. Okay." }] },
        { t: "Your words usually come out fine.", notes: 2, then: [{ s: 'akihiko', f: 'blushing', t: "Not these ones." }] }
      ] },
      { s: 'akihiko', f: 'sad-2', t: 'I spent my whole life getting stronger so I would never lose anyone again. And this year I lost someone anyway.' },
      { s: 'akihiko', f: 'serious-3', t: 'But you kept showing up. Every run. Every stupid bowl of ramen. You pulled me back, like you promised.' },
      { n: "The crowd shifted around them. Someone bumped her shoulder and apologized. The announcement started over. He didn't seem to hear any of it." },
      { s: 'akihiko', f: 'blushing', t: 'So I want to know. What am I to you?' },
      { n: "There it was. The question underneath every five-twelve text and every step on the shrine stairs and every egg he'd put in her bowl without asking. She'd known it was coming the way you know the bottom of a staircase in the dark, by the feeling of having run out of steps." },
      { route: [
        { t: "Someone I've fallen for.", route: 'romance', notes: 3, then: [
          { s: 'akihiko', f: 'surprised', t: '...' },
          { s: 'akihiko', f: 'blushing', t: 'Oh. Okay. I... okay.' },
          { n: "He looked at her like she'd hit him, and like he'd liked it, and like he had absolutely no idea what to do with his hands." },
          { s: 'akihiko', f: 'blushing', t: "I think I fell first. Somewhere on the shrine steps. I just didn't have a word for it." },
          { n: "The monorail finally pulled in, doors sighing open, the whole platform surging forward around them. Neither of them moved. He reached over and took her hand, the one that wasn't holding the chestnuts, and laced his fingers through hers like he'd been practicing it in his head." },
          { n: "He didn't let go the rest of the way home. She didn't ask him to." }
        ] },
        { t: 'My best friend.', route: 'friend', notes: 3, then: [
          { s: 'akihiko', f: 'happy', t: "Yeah. Yeah, that's it exactly." },
          { n: "Something in his face settled, the way a held breath settles, relieved to finally have somewhere to go." },
          { s: 'akihiko', f: 'happy', t: "Best friend. I haven't had one of those since Shinji. ...He'd like you. When he wakes up, I'm introducing you properly." },
          { n: "He bumped her shoulder with his, hard enough to make her stumble into the commuter next to her, who glared at both of them. It was the most Akihiko thing he could possibly have done." },
          { n: "The monorail pulled in. He stole one of her chestnuts on the way through the doors. She let him." }
        ] }
      ] }
    ] },

    { after: '12/1', title: '10: red gloves', place: 'Iwatodai Dorm · Lounge', scene: [
      { n: "December came in quietly, the way it always did by the water, gray and soft and smelling like snow that hadn't arrived yet. The dorm had decided, collectively and without discussion, that it was time for lights." },
      { n: "Junpei had strung them across the lounge windows, badly, in a way that made them sag in the middle like a smile. Yukari had redone half of them while complaining. Mitsuru had pretended not to notice and then bought a second box." },
      { s: 'yukari', f: 'neutral', t: "We're going to the convenience store. Junpei and me. Right now. For a long time." },
      { n: "Yukari said it to the room in general while very specifically not looking at either of them. Junpei, behind her, was making a face that suggested he had been told to keep his mouth shut under threat of death and was barely managing it." },
      { s: 'yukari', f: 'blushing', t: '...Bye.' },
      { n: "The door shut behind them. The lounge went quiet except for the soft electric hum of the lights. Everyone knew. Everyone had apparently known for a while. Solar was beginning to suspect she had been the last." },
      { n: 'Akihiko was sitting on the arm of the couch, holding something wrapped very badly in newspaper. The tape was coming off at one corner. It was clearly the twelfth attempt.' },
      { s: 'akihiko', f: 'neutral', t: "I'm not good at this, so I'm just going to hand it to you." },
      { n: "She unwrapped it slowly, because he was watching her do it like his life depended on it. Inside were boxing gloves. Red, worn soft and pale at the knuckles, the laces replaced at least once. Inside the cuff, in a child's careful handwriting, was his name." },
      { n: "His first pair. She knew without asking. She knew the way you know a thing you've been handed with both hands." },
      { ifRoute: 'friend', then: [
        { s: 'akihiko', f: 'happy', t: "First pair I ever owned. I want you to have them. For when I'm not around." },
        { s: 'akihiko', f: 'serious', t: "Not that I'm planning on going anywhere. But you'd know how to use them now." },
        { choose: [
          { t: "I'll take care of them.", notes: 3, then: [{ s: 'akihiko', f: 'happy', t: 'I know you will. You take care of everything, Solar.' }] },
          { t: 'Only if you keep training me.', notes: 3, then: [{ s: 'akihiko', f: 'serious', t: "Deal. Five-twelve. Don't be late." }] }
        ] },
        { n: 'Outside, it started to snow. The first of the year, fat and slow, drifting past the lights.' },
        { s: 'akihiko', f: 'happy', t: "Perfect running weather." },
        { n: "She threw a couch pillow at his head. He caught it without looking. Of course he did." }
      ] },
      { ifRoute: 'romance', then: [
        { s: 'akihiko', f: 'neutral', t: 'I used to think getting stronger meant needing no one.' },
        { s: 'akihiko', f: 'blushing', t: "I was wrong. I'm going to keep getting stronger, Solar. But this time it's so I can stay next to you." },
        { n: "He said it all at once, like a punch thrown before he could talk himself out of it, and then just sat there with his ears going red, waiting, the lights catching in his hair." },
        { choose: [
          { t: 'Then stay.', notes: 3, then: [
            { n: "He did. He slid down off the arm of the couch and sat beside her, close, closer than he ever had, and after a moment he leaned his head on her shoulder like he'd been wanting to for months and had finally run out of reasons not to." },
            { n: "They sat by the window until the lights were the only thing on. He didn't let go of her hand once." }
          ] },
          { t: '(Kiss him.)', notes: 3, then: [
            { s: 'akihiko', f: 'surprised', t: '...!' },
            { s: 'akihiko', f: 'blushing', t: "...I've wanted to do that since the shrine." },
            { n: 'Outside, it started to snow. The first of the year, slow and quiet, drifting past the lights. Neither of them noticed for a long time.' }
          ] }
        ] }
      ] }
    ] }

  ]
});
