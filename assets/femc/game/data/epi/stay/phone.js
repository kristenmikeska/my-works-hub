/* The Stay epilogue's phone (Nov 3 2026, Kat's notes after the Runners epilogue): the Contacts app's people (card lines,
   calls, message topics) and the group chats' handles. Data only (epilogue.js "The phone" documents the rules).
   Contacts: S.E.E.S., the home bonds (people.js). The searchers' dead threads are the story's glitches, so they aren't here.
   Shinjiro's calls and topics need him awake in the year (ifYear anyFlag shinji-awake / ending-shinjiro); asleep, his card has
   known lines only. Every call / topic / known line is gated on the story event it leans on (story.js ids).
   Inventions: the S.E.E.S. members' in-world handles below (the main game's 'sees' chat has none); hyein / hanni reuse the
   handles their group texts carry in the main game. Small habits: Akihiko calls mid-run and counts out loud, Junpei calls from
   one floor up instead of walking down, Aigis asks "is this a good time" because Junpei told her to, Ken calls to ask for a
   kanji quiz, Fuuka's list has a page two, Mitsuru's clock repairman. No plot. */
(() => {
  const R = ((window.FEMC_EPI_WORLDS ||= {}).stay ||= {});
  const T = (R.texts ||= {});
  const AWAKE = { anyFlag: ['shinji-awake', 'ending-shinjiro'] };
  const ASLEEP = { noFlag: ['shinji-awake', 'ending-shinjiro'] };
  T.handles = Object.assign(T.handles || {}, {
    junpei: 'stupei', yukari: 'yuka.t', mitsuru: 'm.kirijo', akihiko: 'sanada', fuuka: 'fuuka_y', aigis: 'aigis',
    ken: 'k.amada', hyein: 'hyein', hanni: 'hanni'
  });
  R.phone = Object.assign(R.phone || {}, {
    order: ['akihiko', 'shinjiro', 'yukari', 'junpei', 'mitsuru', 'fuuka', 'aigis', 'ken'],
    contacts: {

      /* ── Akihiko ── */
      akihiko: {
        rel: 'S.E.E.S. · graduated · five a.m., every morning',
        known: [
          { t: 'Runs the river at five every morning. Spring break is not an excuse.' },
          { t: 'Graduated with Mitsuru. Hasn’t said a word about April.' },
          { t: 'Brought the red gloves to hanami, in his pocket, when it was far too warm for them.', events: ['epi-st-hanami'] },
          { t: 'Said it out loud at hanami, somewhere with people in it: she stayed.', events: ['epi-st-hanami'] },
          { t: 'Was on the stairs when the lounge phone rang at four. He called it a wrong number.', events: ['epi-st-moon'] }
        ],
        calls: [
          { id: 'epi-st-call-akihiko-1', after: '3/24', scene: [
            { n: "He was breathing hard and evenly, the river going past behind him, which meant he'd called her mid-run and wasn't going to stop for it." },
            { s: 'them', f: 'neutral', t: "You're not on the path." },
            { s: 'solar', f: 'neutral', t: "I'm in bed. It's spring break." },
            { s: 'them', f: 'neutral', t: "Rowing club's on the left. Gravel's soft again. You'd shorten your stride here." },
            { choose: [
              { t: "Are you narrating the route to me?", then: [
                { s: 'them', f: 'happy', t: "So you know it's still there. Tomorrow you won't have an excuse." }
              ] },
              { t: "(Count his breaths with him.)", then: [
                { n: "She listened. In for three, out for three. After a while he noticed she'd gone quiet with him, and didn't say anything about it, and slowed down half a step so she could keep up from her pillow." }
              ] }
            ] },
            { s: 'them', f: 'neutral', t: "Bridge. Four-thirty-one. Bad. I was talking." },
            { s: 'solar', f: 'happy', t: "Whose fault is that?" },
            { s: 'them', f: 'happy', t: "...Five tomorrow. I'll knock." }
          ] },
          { id: 'epi-st-call-akihiko-2', after: '4/1', events: ['epi-st-charms'], scene: [
            { n: "He called from the convenience store at the bottom of the hill. She could hear the door chime and the fridges humming." },
            { s: 'them', f: 'neutral', t: "I'm getting milk. Do you want anything." },
            { s: 'solar', f: 'neutral', t: "No. Thanks." },
            { s: 'them', f: 'neutral', t: "Okay." },
            { n: "He didn't hang up. The fridges hummed. Somebody at the register asked for a bag and got one." },
            { s: 'them', f: 'serious', t: "I'm not going to ask about the kitchen. I just wanted to hear you say no to milk." },
            { s: 'solar', f: 'sad', t: "...Get the strawberry one, then." },
            { s: 'them', f: 'happy', t: "Strawberry. Good. That's an answer." }
          ] },
          { id: 'epi-st-call-akihiko-3', after: '3/29', route: 'akihiko', events: ['epi-st-crossroads'], scene: [
            { n: "His name lit up while she was brushing her teeth. When she picked up there was wind on the line, and the creak of the railing on the roof." },
            { s: 'them', f: 'neutral', t: "Don't come up. It's cold." },
            { s: 'solar', f: 'neutral', t: "Then why are you calling?" },
            { s: 'them', f: 'neutral', t: "So you'd know where I was. Without having to come up." },
            { n: "Neither of them said anything for a while. She could hear the city through his phone, and through her window, the same traffic, half a second apart." },
            { s: 'them', f: 'happy', t: "...You can hang up. I'm going to stay on a bit." },
            { s: 'solar', f: 'happy', t: "So am I." }
          ] }
        ],
        topics: [
          { id: 'epi-st-tp-akihiko-1', label: 'Five tomorrow?', after: '3/24', msgs: [
            { me: 'five tomorrow?' }, { them: "you're asking me?" }, { them: 'five. on your left' }, { me: 'i know where you run' }, { them: 'good' }
          ] },
          { id: 'epi-st-tp-akihiko-2', label: 'How many octopi', after: '3/27', events: ['epi-st-hanami'], msgs: [
            { me: 'how many octopi was it really' }, { them: 'five' }, { them: 'six' }, { them: 'dont tell junpei. he would make more' }
          ] },
          { id: 'epi-st-tp-akihiko-3', label: 'After this morning', after: '4/1', events: ['epi-st-charms'], msgs: [
            { me: 'are you okay. after this morning' }, { them: 'yeah' }, { them: 'are you' }, { them: "you don't have to answer that. i'm on the stairs if you do" }
          ] }
        ]
      },

      /* ── Shinjiro ── */
      shinjiro: {
        rel: 'S.E.E.S. · Tatsumi Memorial, 3F ward',
        known: [
          { t: 'Visiting hours at Tatsumi Memorial run ten to eight. The bus from the station takes twenty-two minutes.' },
          { t: 'Aki goes to see him too. Neither of them says much about it.' },
          { t: 'Physio has him moving rice grains with his right hand, one at a time, twice a day.', ifYear: AWAKE },
          { t: 'Texts left-handed. A whole sentence takes him about four minutes.', ifYear: AWAKE },
          { t: 'He moves his fingers when she talks. The night nurse writes it down.', ifYear: ASLEEP }
        ],
        calls: [
          { id: 'epi-st-call-shinjiro-1', after: '3/24', ifYear: AWAKE, scene: [
            { n: "The ward phone, not his. She knew it by the hiss on the line and the nurse's voice somewhere behind him, saying something about trays." },
            { s: 'them', f: 'neutral', t: "...It's me." },
            { s: 'solar', f: 'happy', t: "I know. Nobody else calls from a hospital." },
            { s: 'them', f: 'neutral', t: "You eat yet?" },
            { s: 'solar', f: 'neutral', t: "Junpei made breakfast." },
            { s: 'them', f: 'neutral', t: "...So no." },
            { choose: [
              { t: "I'll bring something tomorrow. You can watch me eat it.", then: [
                { s: 'them', f: 'happy', t: "...Tch. Bring two." }
              ] },
              { t: "You're one to talk. Did you finish the rice?", then: [
                { s: 'them', f: 'sad', t: "...Most of it. Right hand. Don't make a thing of it." }
              ] }
            ] },
            { s: 'them', f: 'neutral', t: "Nurse wants the phone. ...Eat." }
          ] },
          { id: 'epi-st-call-shinjiro-2', after: '3/28', ifYear: AWAKE, scene: [
            { n: "He called in the afternoon, which he never did. There was a window open on his end; she could hear birds and somebody raking." },
            { s: 'them', f: 'neutral', t: "The tree downstairs came out. The one in the courtyard." },
            { s: 'solar', f: 'happy', t: "The nurse says it's the oldest one in the city." },
            { s: 'them', f: 'neutral', t: "She says that about every tree." },
            { s: 'solar', f: 'neutral', t: "Do you like it?" },
            { s: 'them', f: 'neutral', t: "...It's pink. There's a lot of it." },
            { n: "A pause, long enough that she checked the screen to see if the call had dropped." },
            { s: 'them', f: 'happy', t: "Yeah. ...Come see it before it's done." }
          ] }
        ],
        topics: [
          { id: 'epi-st-tp-shinjiro-1', label: 'You eat yet?', after: '3/24', ifYear: AWAKE, msgs: [
            { me: 'you eat yet' }, { them: 'thats my line' }, { them: 'yes. rice. again' }
          ] },
          { id: 'epi-st-tp-shinjiro-2', label: 'Physio today', after: '3/25', ifYear: AWAKE, msgs: [
            { me: 'how was physio' }, { them: 'rice. bowl to bowl' }, { them: 'didnt drop any for 2 min' }, { me: 'thats huge' }, { them: 'its rice' }
          ] },
          { id: 'epi-st-tp-shinjiro-3', label: 'Bringing anything?', after: '3/26', ifYear: AWAKE, msgs: [
            { me: 'want me to bring anything tomorrow' }, { them: 'something with salt on it' }, { them: 'not from junpei' }
          ] }
        ]
      },

      /* ── Yukari ── */
      yukari: {
        rel: 'S.E.E.S. · a third-year in April',
        known: [
          { t: 'Starts her third year in April. Says she’ll be scary at it, which is a different thing from good.' },
          { t: 'Has known Solar takes the strawberry crêpe since about May.' },
          { t: 'Planned the girls’ afternoon at Chagall a week ahead: the good table by the window, too much cream.', events: ['epi-st-renamed'] },
          { t: 'Was the first to ask, in the kitchen: what was that.', events: ['epi-st-charms'] }
        ],
        calls: [
          { id: 'epi-st-call-yukari-1', after: '3/24', scene: [
            { n: "Yukari called from a fitting room. She could tell by the curtain rings." },
            { s: 'them', f: 'neutral', t: "Okay. Emergency. There are two jackets. One's pink and one's a slightly different pink." },
            { s: 'solar', f: 'happy', t: "Describe the slightly different one." },
            { s: 'them', f: 'serious', t: "It's... dustier? Like it's been to university." },
            { choose: [
              { t: "Get the one that's been to university.", then: [
                { s: 'them', f: 'surprised', t: "...Huh. Yeah. Okay, that was actually helpful. Gross." }
              ] },
              { t: "Get both. You're going to be a senpai.", then: [
                { s: 'them', f: 'neutral', t: "That is the worst financial advice I've ever gotten. I'm doing it." }
              ] }
            ] },
            { s: 'them', f: 'neutral', t: "Thanks. I'll show you at dinner. Don't let Junpei say anything." }
          ] },
          { id: 'epi-st-call-yukari-2', after: '4/1', events: ['epi-st-charms'], scene: [
            { n: "Her phone rang in the evening. Yukari, from two doors down the hall. She could hear the call through the wall, faintly, a second after she heard it in her ear." },
            { s: 'them', f: 'neutral', t: "Hey. I'm not asking anything. I know I'm right there." },
            { s: 'solar', f: 'neutral', t: "Then why are you calling?" },
            { s: 'them', f: 'sad', t: "...Because if I knock, it's a whole thing. This is just a call." },
            { n: "They talked about nothing. A teacher Yukari already hated in advance. The archery club's first-years. The vending machine by the range that only ever had one kind of tea." },
            { s: 'them', f: 'neutral', t: "Okay. That's all. You're in your room. Good." },
            { s: 'solar', f: 'happy', t: "I'm in my room." }
          ] }
        ],
        topics: [
          { id: 'epi-st-tp-yukari-1', label: 'Third year', after: '3/24', msgs: [
            { me: 'third year yukari' }, { them: "don't." }, { them: 'i have to have KOUHAI. they’re going to look at me' }, { me: "you'll be great" }, { them: "i'll be scary. it's different" }
          ] },
          { id: 'epi-st-tp-yukari-2', label: 'Chagall again?', after: '3/31', events: ['epi-st-renamed'], msgs: [
            { me: 'chagall again sometime?' }, { them: 'obviously' }, { them: 'less cream for you. you went all pale' }, { them: 'fuuka noticed. i noticed fuuka noticing' }
          ] },
          { id: 'epi-st-tp-yukari-3', label: 'Not a hoodie', after: '3/31', events: ['epi-st-renamed'], msgs: [
            { me: 'i wore something that wasnt a hoodie' }, { them: 'i saw' }, { them: 'it was a cardigan sol. its a hoodie with buttons' }, { them: 'progress though' }
          ] }
        ]
      },

      /* ── Junpei ── */
      junpei: {
        rel: 'S.E.E.S. · group chat admin (self-appointed)',
        known: [
          { t: 'Keeps a notebook called OPERATION: SPRING BREAK. It has a logo. Nobody knows what the bird is.' },
          { t: 'Renamed the group chat S.E.E.S. (retired). Yukari points out they’re second-years.', after: '3/25' },
          { t: 'Made the Iori Special for hanami. The octopus has five legs.', events: ['epi-st-hanami'] },
          { t: 'Spent February planning an April Fool’s prank. Salt in the sugar bowl.', events: ['epi-st-charms'] }
        ],
        calls: [
          { id: 'epi-st-call-junpei-1', after: '3/24', scene: [
            { n: "Junpei called. From upstairs. She could hear him through the ceiling and on the phone at the same time." },
            { s: 'them', f: 'happy', t: "Sol! Sol. Are you near the kitchen." },
            { s: 'solar', f: 'neutral', t: "You're one floor up, Junpei." },
            { s: 'them', f: 'serious', t: "And I'm horizontal. It's day one. The plan says nap. I can't go against the plan." },
            { choose: [
              { t: "(Bring the chips up.)", then: [
                { n: "She brought them up. He received them lying down, with both hands, like a medal." },
                { s: 'them', f: 'happy', t: "You're a hero. I'm putting you in the notebook." }
              ] },
              { t: "The plan says you get them yourself.", then: [
                { s: 'them', f: 'flustered', t: "It does NOT. ...Okay, it says that on day three. Day three is far, Sol." }
              ] }
            ] },
            { s: 'them', f: 'happy', t: "Okay. Hanging up. Over and out. Iori out." }
          ] },
          { id: 'epi-st-call-junpei-2', after: '3/27', events: ['epi-st-hanami'], scene: [
            { n: "Junpei, sounding like he was still lying on the tarp in spirit." },
            { s: 'them', f: 'flustered', t: "She remembered a thing I said in MAY. In May, Sol. I don't remember May. I was there." },
            { s: 'solar', f: 'happy', t: "Mitsuru remembers everything." },
            { s: 'them', f: 'serious', t: "I drank four juices. I'm still sloshing." },
            { s: 'them', f: 'neutral', t: "...Hey. The thing senpai said. At the end." },
            { s: 'solar', f: 'neutral', t: "Yeah." },
            { s: 'them', f: 'happy', t: "Nothing. Just. Good hanami. Same time next year. It's in the notebook." }
          ] }
        ],
        topics: [
          { id: 'epi-st-tp-junpei-1', label: "What's day three?", after: '3/24', msgs: [
            { me: 'whats on the plan today' }, { them: 'RECOVERY' }, { them: 'from yesterday' }, { them: 'which was also recovery. its a cycle sol' }
          ] },
          { id: 'epi-st-tp-junpei-2', label: 'Count the legs', after: '3/27', events: ['epi-st-hanami'], msgs: [
            { me: 'i counted the legs again' }, { them: 'and??' }, { me: 'five' }, { them: 'ITS A FIVE LEGGED OCTOPUS. ITS RARE. ITS A DELICACY' }
          ] },
          { id: 'epi-st-tp-junpei-3', label: 'The prank', after: '4/1', events: ['epi-st-charms'], msgs: [
            { me: 'the prank was good btw' }, { them: 'THANK YOU' }, { them: 'nobody even tasted it' }, { them: 'im doing it again next year. bigger bowl' }
          ] }
        ]
      },

      /* ── Mitsuru ── */
      mitsuru: {
        rel: 'S.E.E.S. · graduated (retired, she says)',
        known: [
          { t: 'Graduated. Says she’s the only one actually retired; the difference is paperwork.', after: '3/25' },
          { t: 'Left the university-track form on Solar’s desk, with a note: no deadline that matters.', events: ['epi-st-morning'] },
          { t: 'Asked Solar, not facilities, to decide what happens to the four rooms.', events: ['epi-st-rooms'] },
          { t: 'Was ruthless at the hanami memory game. Never drank once.', events: ['epi-st-hanami'] },
          { t: 'Called everyone to the command room when the clocks stopped.', events: ['epi-st-clocks'] }
        ],
        calls: [
          { id: 'epi-st-call-mitsuru-1', after: '3/26', events: ['epi-st-rooms'], scene: [
            { n: "Mitsuru called at exactly four, from somewhere with carpet and a very quiet air conditioner." },
            { s: 'them', f: 'neutral', t: "Solar. I'm between meetings. I have six minutes." },
            { s: 'them', f: 'serious', t: "Facilities has been spoken to. About the second floor. They will not be speaking to me again for some time." },
            { s: 'solar', f: 'happy', t: "What did you say to them?" },
            { s: 'them', f: 'neutral', t: "Very little. I find it's how I say it." },
            { choose: [
              { t: "Thank you. Really.", then: [
                { s: 'them', f: 'happy', t: "...You're welcome. I'll be home for dinner." }
              ] },
              { t: "Are the meetings awful?", then: [
                { s: 'them', f: 'sad', t: "Profoundly. A man has just spent forty minutes on the word 'synergy.' I have taken notes on him." }
              ] }
            ] },
            { s: 'them', f: 'neutral', t: "Four minutes left. I'll use them to walk slowly. Goodbye, Solar." }
          ] },
          { id: 'epi-st-call-mitsuru-2', after: '4/3', events: ['epi-st-clocks'], scene: [
            { n: "Mitsuru, in the evening, from the lounge downstairs. She could hear a ladder being folded." },
            { s: 'them', f: 'neutral', t: "The clock man has gone. He asked whether we'd had a party." },
            { s: 'solar', f: 'neutral', t: "What did you tell him?" },
            { s: 'them', f: 'happy', t: "That we had. It seemed easier than the truth, and he seemed to want it." },
            { n: "A pause. The ladder clanked against the wall." },
            { s: 'them', f: 'serious', t: "I'm going to sit up a while. In case they stop again. You don't need to come down." },
            { s: 'solar', f: 'sad', t: "I know." },
            { s: 'them', f: 'neutral', t: "...But there is tea, if you do." }
          ] }
        ],
        topics: [
          { id: 'epi-st-tp-mitsuru-1', label: 'The form', after: '3/24', events: ['epi-st-morning'], msgs: [
            { me: 'about the form' }, { them: 'There is no deadline that matters.' }, { them: 'I meant that. I wrote it in ink so you would know I meant it.' }
          ] },
          { id: 'epi-st-tp-mitsuru-2', label: 'Hanami rematch', after: '3/27', events: ['epi-st-hanami'], msgs: [
            { me: 'junpei wants a rematch' }, { them: 'Junpei may have one.' }, { them: 'I have been keeping a list since April. It is not short.' }
          ] },
          { id: 'epi-st-tp-mitsuru-3', label: 'The clocks', after: '4/3', events: ['epi-st-clocks'], msgs: [
            { me: 'are the clocks still working' }, { them: 'At present.' }, { them: 'Go to sleep. Someone is watching them.' }
          ] }
        ]
      },

      /* ── Fuuka ── */
      fuuka: {
        rel: 'S.E.E.S. · navigator, off duty',
        known: [
          { t: 'Juno has nothing to listen for any more. Fuuka says the quiet is the strangest thing.' },
          { t: 'Makes tea for people who haven’t asked for it. Chamomile, for calming.', events: ['epi-st-morning'] },
          { t: 'Cuts tamagoyaki with a ruler. Every slice the same width.', events: ['epi-st-hanami'] },
          { t: 'Made one bento box too many, on purpose.', events: ['epi-st-hanami'] },
          { t: 'Says it’s like someone knocking on a wall from very far away. Three someones.', events: ['epi-st-clocks'] }
        ],
        calls: [
          { id: 'epi-st-call-fuuka-1', after: '3/24', until: '3/27', scene: [
            { n: "Fuuka called from the kitchen. Something was sizzling on her end, gently." },
            { s: 'them', f: 'happy', t: "Senpai! Sorry, is this okay? I have a very small question. About boxes." },
            { s: 'solar', f: 'neutral', t: "Go ahead." },
            { s: 'them', f: 'neutral', t: "There's a red one with a crane on it and a black one with nothing on it. Which one do you want? You don't have to know. I can pick." },
            { choose: [
              { t: "The crane.", then: [
                { s: 'them', f: 'happy', t: "The crane! Okay. I thought so. I wrote it down before I called, just to see." }
              ] },
              { t: "Whichever's left.", then: [
                { s: 'them', f: 'sad', t: "...Senpai, that's what everyone says. Then I'm left with all of them." },
                { s: 'them', f: 'happy', t: "Crane. I'm giving you the crane." }
              ] }
            ] },
            { s: 'them', f: 'surprised', t: "Oh, the egg— I have to go. Thank you!" }
          ] },
          { id: 'epi-st-call-fuuka-2', after: '3/31', events: ['epi-st-renamed'], scene: [
            { n: "Fuuka, in the evening, quietly, like she'd shut her door first." },
            { s: 'them', f: 'neutral', t: "I'm not calling about anything. I just wanted to say. My list has a page two." },
            { s: 'solar', f: 'happy', t: "Of course it does." },
            { s: 'them', f: 'neutral', t: "In case we run out of things to talk about. Next time. Or if you ever want to not talk about something, I'll just read off it." },
            { s: 'solar', f: 'sad', t: "...Thanks, Fuuka." },
            { s: 'them', f: 'happy', t: "Page two starts with 'favorite smell.' I already know mine. It's sugar going brown." }
          ] }
        ],
        topics: [
          { id: 'epi-st-tp-fuuka-1', label: 'The bento', after: '3/24', until: '3/27', msgs: [
            { me: 'how is the bento going' }, { them: 'attempt eight!!' }, { them: 'the egg is a little burnt on one side' }, { them: 'i am calling it the gold side' }
          ] },
          { id: 'epi-st-tp-fuuka-2', label: 'The extra box', after: '3/27', events: ['epi-st-hanami'], msgs: [
            { me: 'thank you for the extra box' }, { them: 'oh' }, { them: 'junpei asked if he could eat it later. i said no' }, { them: 'i said maybe. later later' }
          ] },
          { id: 'epi-st-tp-fuuka-3', label: 'Page two', after: '3/31', events: ['epi-st-renamed'], msgs: [
            { me: "what's on page two" }, { them: 'favorite smell. favorite sound. a place you’d go back to' }, { them: 'you can skip any of them!!' }
          ] }
        ]
      },

      /* ── Aigis ── */
      aigis: {
        rel: 'S.E.E.S. · the blossom forecast, hourly',
        known: [
          { t: 'Doesn’t eat. Sits at breakfast anyway, because that is where the people are.' },
          { t: 'Is the blossom forecast now. Has always been the forecast, she says.', after: '3/26' },
          { t: 'Counted one hundred and twelve petals on the tarp before anyone had eaten.', events: ['epi-st-hanami'] },
          { t: 'Said the bell’s frequency out loud: 1318 hertz.', events: ['epi-st-charms'] }
        ],
        calls: [
          { id: 'epi-st-call-aigis-1', after: '3/24', scene: [
            { n: "Aigis called. She was in the next room. She was very clearly in the next room." },
            { s: 'them', f: 'neutral', t: "Solar-san. Is this a good time. Junpei-san says I must ask that first." },
            { s: 'solar', f: 'happy', t: "It's a good time." },
            { s: 'them', f: 'neutral', t: "Good. I am calling to report that the trees along the seawall are at twenty-two percent." },
            { choose: [
              { t: "Thank you for the update.", then: [
                { s: 'them', f: 'happy', t: "You are welcome. Yukari-san asked me to stop updating her. You did not ask." }
              ] },
              { t: "You could have knocked.", then: [
                { s: 'them', f: 'serious', t: "I could have. Junpei-san says a call is how you tell someone you thought of them from a distance." },
                { s: 'them', f: 'neutral', t: "The wall is a distance." }
              ] }
            ] },
            { s: 'them', f: 'neutral', t: "That concludes the report. Goodbye, Solar-san." }
          ] },
          { id: 'epi-st-call-aigis-2', after: '4/2', events: ['epi-st-charms'], scene: [
            { n: "Aigis, late in the afternoon, from the roof. The wind came through the phone in long pulls." },
            { s: 'them', f: 'neutral', t: "Solar-san. I have stopped measuring for one hour." },
            { s: 'solar', f: 'surprised', t: "...Why?" },
            { s: 'them', f: 'serious', t: "Mitsuru-san said not in writing. So I am telling you by voice. I am not listening for the bell. I am looking at the bay." },
            { s: 'them', f: 'neutral', t: "There is a ferry. There are eleven gulls. I am not counting them. That was an estimate." },
            { s: 'solar', f: 'happy', t: "How is it?" },
            { s: 'them', f: 'happy', t: "Difficult. I will try again tomorrow." }
          ] }
        ],
        topics: [
          { id: 'epi-st-tp-aigis-1', label: 'Blossom forecast', after: '3/24', until: '3/27', msgs: [
            { me: 'forecast?' }, { them: 'Thirty percent open. Clear. Probability of hanami: high.' }, { them: 'I will update hourly.' }, { me: 'daily is fine' }, { them: 'Daily. Noted.' }
          ] },
          { id: 'epi-st-tp-aigis-2', label: 'Breakfast', after: '3/25', msgs: [
            { me: 'see you at breakfast?' }, { them: 'Yes. I will be at the table.' }, { them: 'That is where the people are.' }
          ] },
          { id: 'epi-st-tp-aigis-3', label: 'The petals', after: '3/27', events: ['epi-st-hanami'], msgs: [
            { me: 'final petal count?' }, { them: 'I stopped at four hundred and six.' }, { them: 'You laughed. I did not want to be counting during that.' }
          ] }
        ]
      },

      /* ── Ken ── */
      ken: {
        rel: 'S.E.E.S. · sixth grade from the seventh · Koromaru’s walker',
        known: [
          { t: 'Starts sixth grade on the seventh. Finished the workbook early, to be ready.' },
          { t: 'Does homework over spring break on purpose.', events: ['epi-st-morning'] },
          { t: 'Koromaru brings the ball back to Solar instead of him. He stopped taking it personally around the fifth throw.', events: ['epi-st-hanami'] },
          { t: 'Was the one who noticed the clocks.', events: ['epi-st-clocks'] }
        ],
        calls: [
          { id: 'epi-st-call-ken-1', after: '3/25', scene: [
            { n: "Ken called. He'd clearly prepared what he was going to say." },
            { s: 'them', f: 'neutral', t: "Solar-san. Good afternoon. Do you have ten minutes to quiz me on kanji? You can say no." },
            { s: 'solar', f: 'happy', t: "Ten minutes. Go." },
            { n: "He gave her the list in order and she read them out of order, and he got all of them, and one of them twice because she forgot she'd already asked." },
            { choose: [
              { t: "That's a perfect score.", then: [
                { s: 'them', f: 'happy', t: "...Thank you. I knew. But it's different when someone says it." }
              ] },
              { t: "Want some harder ones?", then: [
                { s: 'them', f: 'serious', t: "Yes. Please. Not from the seventh-grade list, though. Mitsuru-san says that's a different conversation." }
              ] }
            ] },
            { s: 'them', f: 'neutral', t: "Koromaru says hello. He is sitting on the list." }
          ] },
          { id: 'epi-st-call-ken-2', after: '4/1', events: ['epi-st-charms'], scene: [
            { n: "Ken, from the shrine. She could hear Koromaru's tags jingling." },
            { s: 'them', f: 'neutral', t: "We're at Naganaki. I'm calling so you know where we are. Mitsuru-san said that's a good idea now." },
            { s: 'solar', f: 'neutral', t: "Thanks, Ken. Is he okay?" },
            { s: 'them', f: 'serious', t: "He came out from under the table at lunch. He's on his stone now. He looks normal." },
            { s: 'them', f: 'sad', t: "...Are you okay? You don't have to say the long answer." },
            { s: 'solar', f: 'happy', t: "The short answer is yes." },
            { s: 'them', f: 'happy', t: "Okay. We're coming home the long way." }
          ] }
        ],
        topics: [
          { id: 'epi-st-tp-ken-1', label: 'The workbook', after: '3/24', msgs: [
            { me: 'how is the workbook' }, { them: 'Finished. I am doing it again in pen.' }, { them: 'The first time was pencil.' }
          ] },
          { id: 'epi-st-tp-ken-2', label: "Koromaru's walk", after: '3/26', msgs: [
            { me: 'did koromaru get the bread ends' }, { them: 'Two. The baker said one, then gave him two.' }, { them: 'I think the baker is weak to him.' }
          ] },
          { id: 'epi-st-tp-ken-3', label: 'Sixth grade', after: '3/30', msgs: [
            { me: 'nervous about the seventh?' }, { them: 'No.' }, { them: 'A little. I have my bag packed already.' }, { them: 'It has been packed since Tuesday.' }
          ] }
        ]
      }
    }
  });
})();
