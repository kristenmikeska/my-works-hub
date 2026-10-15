/* Haechan · ∞ The Universe. SECRET LINK. Format notes are at the top of akihiko.js.
   He wasn't pulled through the Dark Hour like the others: he came looking for Solar, because in every universe
   (Runners, strangers, this one) they find each other. He remembers pieces of the other worlds and can't place them.
   UNLOCK (keep quiet): the hidden Solchan page's stamp ('solchan'), Kiriko at rank 8 or higher (she and Widowmaker
   mention "the sniper boy"), and the in-game date on or after 11/4, the night after the November full moon.
   Romance only. Echoes Kat's own lines from Runners and strangers on purpose. */
FemcSocial.define({
  id: 'haechan', name: 'Haechan', short: 'Haechan', arcana: 'Universe', numeral: '∞', from: 'Runners · strangers',
  unlock: { stamps: ['solchan'], links: { kiriko: 8 }, after: '11/4' },
  home: { place: 'Iwatodai Dorm · Laundry Room', slot: 1, days: [0, 1, 2, 3, 4, 5, 6], hint: 'Late, in the evenings. Wherever nobody else is awake.' },
  approach: "Someone's in the laundry room at an hour nobody does laundry, sitting on top of a dryer with headphones on. He looks up like he heard his name.",
  invite: { ask: ["you up?", "free? come here", "bored. you around"], ok: "k. door's open", no: "ok. night" },
  romance: true,
  stamps: { 10: ['every-universe'] },
  cast: { elizabeth: 'Elizabeth', junpei: 'Junpei' },
  threads: {
    elizabeth: { name: 'Elizabeth', members: ['elizabeth'] },
    sees: { name: 'dorm squad 🔥', members: ['junpei', 'yukari', 'mitsuru', 'akihiko'] }
  },
  texts: [
    { id: 'eliz-haechan', thread: 'elizabeth', rank: 0, days: 0, slot: 1, msgs: [
      { from: 'elizabeth', t: 'Solar. Something has happened that I do not understand, which is rare enough that I thought you should know.' },
      { from: 'elizabeth', t: 'Someone has come through. But he was not pulled. He walked.' },
      { from: 'elizabeth', t: 'He is looking for someone. I suspect you already know who.' }
    ] },
    { id: 'hae-1a', rank: 1, days: 1, slot: 1, msgs: [
      { from: 'haechan', t: 'this is haechan' },
      { from: 'haechan', t: 'from the laundry room' },
      { from: 'haechan', t: "i don't know how i have your number. it was just in my phone" }
    ], reply: [
      { t: "That's terrifying.", notes: 3, then: [{ from: 'haechan', t: 'yeah' }, { from: 'haechan', t: 'it feels right though' }] },
      { t: 'Go to sleep, Haechan.', notes: 2, then: [{ from: 'haechan', t: "can't" }, { from: 'haechan', t: 'i can hear you not sleeping' }] }
    ] },
    { id: 'sees-hae', thread: 'sees', rank: 2, days: 1, rename: 'S.E.E.S.', msgs: [
      { from: 'junpei', t: 'ok who is the guy in the laundry room' },
      { from: 'junpei', t: 'he folded my towels' },
      { from: 'junpei', t: 'he folded them BETTER than me' },
      { from: 'yukari', t: 'everyone folds better than you junpei' },
      { from: 'mitsuru', t: 'Solar. Is he with you?' }
    ], reply: [
      { t: "He's with me.", then: [{ from: 'junpei', t: 'OHHHHH' }, { from: 'yukari', t: 'oh my god' }, { from: 'mitsuru', t: 'Understood.' }] },
      { t: "He's... a friend. From somewhere.", then: [{ from: 'junpei', t: 'from SOMEWHERE' }, { from: 'yukari', t: "that's not a place solar" }] }
    ] },
    { id: 'hae-3a', rank: 3, days: 1, slot: 1, msgs: [
      { from: 'haechan', t: "you didn't miss a single heal" },
      { from: 'haechan', t: 'not one' },
      { from: 'haechan', t: 'nobody plays support like that unless they know exactly where their sniper is going to be' }
    ], reply: [
      { t: "Maybe I do.", notes: 3, then: [{ from: 'haechan', t: '...yeah' }, { from: 'haechan', t: 'maybe you do' }] },
      { t: 'You were easy to read.', notes: 2, then: [{ from: 'haechan', t: 'nobody has ever said that to me in my life' }] }
    ] },
    { id: 'hae-4a', rank: 4, days: 1, slot: 1, msgs: [
      { from: 'haechan', t: "i'm right across the hall" },
      { from: 'haechan', t: 'go to sleep' }
    ], reply: [
      { t: "I hate you so much I can't sleep.", notes: 3, then: [{ from: 'haechan', t: 'good' }, { from: 'haechan', t: 'great' }, { from: 'haechan', t: 'that makes two of us' }] },
      { t: 'You go to sleep.', notes: 2, then: [{ from: 'haechan', t: "i'll hear you not sleeping" }] }
    ] },
    { id: 'hae-5a', rank: 5, days: 1, slot: 1, msgs: [
      { from: 'haechan', t: 'keep the hoodie' }
    ], reply: [
      { t: 'I was going to anyway.', notes: 3, then: [{ from: 'haechan', t: 'i know' }] },
      { t: 'Why?', notes: 3, then: [{ from: 'haechan', t: 'it fits you better' }] }
    ] },
    { id: 'hae-7a', rank: 7, days: 1, slot: 1, msgs: [
      { from: 'haechan', t: 'you know your name means sun too' },
      { from: 'haechan', t: 'two names for the sun' },
      { from: 'haechan', t: 'no wonder everything is so bright' }
    ], reply: [
      { t: 'Hurts to look at?', notes: 3, then: [{ from: 'haechan', t: '...' }, { from: 'haechan', t: "where'd you hear that" }, { from: 'haechan', t: "never mind. i know where. i don't know where. both" }] },
      { t: "That's the cheesiest thing you've ever said.", notes: 2, then: [{ from: 'haechan', t: 'yeah' }, { from: 'haechan', t: "don't tell anyone" }] }
    ] },
    { id: 'hae-8a', rank: 8, days: 1, slot: 1, msgs: [
      { from: 'haechan', t: 'nobody calls me that' }
    ], reply: [
      { t: 'Then I will. Goodnight, Donghyuck.', notes: 3, then: [{ from: 'haechan', t: '...' }, { from: 'haechan', t: 'say it again' }] },
      { t: 'Nobody but me.', notes: 3, then: [{ from: 'haechan', t: 'yeah' }, { from: 'haechan', t: 'nobody but you' }] }
    ] },
    { id: 'hae-10a', rank: 10, days: 1, slot: 1, msgs: [
      { from: 'haechan', t: 'princess' },
      { from: 'haechan', t: 'agasshi' },
      { from: 'haechan', t: 'solar' },
      { from: 'haechan', t: 'just checking which one makes you smile' }
    ], reply: [
      { t: 'All of them.', notes: 3, then: [{ from: 'haechan', t: 'figures' }, { from: 'haechan', t: "i'll keep all of them then" }] },
      { t: 'The last one.', notes: 3, then: [{ from: 'haechan', t: 'yeah' }, { from: 'haechan', t: 'me too' }] }
    ] }
  ],
  ranks: [
    { title: '1: the laundry room', music: 'mystery', place: 'Iwatodai Dorm · Laundry Room', scene: [
      { n: "Solar couldn't sleep. That wasn't new. What was new was the sound coming from the laundry room at seven minutes past three in the morning, the slow, heavy tumble of a dryer that nobody in the dorm should have been running." },
      { n: "She went down in her socks. The hallway was cold. The laundry room door was half open and the light inside was that terrible flickering fluorescent that made everybody look a little sick." },
      { n: "There was a boy sitting on the dryer." },
      { n: "Dark hair falling into his eyes. Silver earrings, more than one. A black hoodie with the sleeves pushed up past his elbows. He was sitting with his back against the wall and one knee pulled up, perfectly still, the dryer rumbling under him, like he'd been sitting there for a very long time waiting for something and was prepared to keep waiting forever." },
      { n: "He looked up when she pushed the door open. And his whole face changed." },
      { s: 'haechan', f: 'surprised', t: '...There you are.' },
      { n: "He said it quietly. Flat, almost. But underneath the flatness something enormous had moved, the way the floor moves when a train passes under it." },
      { n: "Solar had never seen him before in her life. Her body didn't seem to know that. Her heart was going too fast. Her hands had gone cold. Her feet had stopped on the threshold like they'd hit a line she couldn't see." },
      { choose: [
        { t: 'Do I know you?', notes: 3, then: [
          { s: 'haechan', f: 'sad', t: "...No. I don't think so." },
          { s: 'haechan', f: 'neutral', t: "Weird. I could've sworn." }
        ] },
        { t: "Who are you? How did you get in here?", notes: 2, then: [
          { s: 'haechan', f: 'neutral', t: "No idea. To both. I was somewhere else, and then I was here, sitting on a dryer." },
          { s: 'haechan', f: 'happy', t: "Not the worst place I've woken up." }
        ] },
        { t: "You're sitting on my laundry.", notes: 3, then: [
          { s: 'haechan', f: 'neutral', t: '...' },
          { n: "He looked down. He was, in fact, sitting on her laundry. He did not move." },
          { s: 'haechan', f: 'happy', t: "It's warm. You can have it back in a minute." }
        ] }
      ] },
      { s: 'haechan', f: 'neutral', t: "Haechan." },
      { s: 'haechan', f: 'sad', t: "That's my name. It means full sun. Somebody gave it to me. I don't remember who." },
      { n: "He said it the way people say things they've said in a lot of different rooms. Like the words were older than this conversation." },
      { s: 'haechan', f: 'serious', t: "You're Solar." },
      { n: "She hadn't told him. She stared at him. He stared back, and for a second something like fear crossed his face, there and gone, like he'd surprised himself too." },
      { s: 'haechan', f: 'surprised', t: "...Don't ask me how I know that. I don't know. I just do." },
      { choose: [
        { t: '(Sit on the other dryer.)', notes: 3, then: [
          { n: "She sat on the other dryer. It wasn't running. It was cold through her pajamas. He watched her do it and didn't say anything, and the corner of his mouth moved, very slightly, like a smile he hadn't given permission to." }
        ] },
        { t: "This is insane.", notes: 2, then: [{ s: 'haechan', f: 'happy', t: "Yeah. Feels kind of normal, though. That's the insane part." }] }
      ] },
      { n: "They stayed in the laundry room until the dryer buzzed. He handed her laundry back, folded. She hadn't seen him fold it. He went somewhere when she turned around to put it in her basket, and when she turned back the room was empty, and the light was still flickering, and her heart had not slowed down at all." }
    ] },

    { after: '11/8', title: '2: princess', music: 'mystery', place: 'Iwatodai Dorm · Rooftop', scene: [
      { n: "He was on the roof the next night. Of course he was. Leaning on the railing with his hood up against the November wind, looking out at the bay like it was a song he was trying to learn." },
      { s: 'haechan', f: 'happy', t: "Hey, prin—" },
      { n: "He stopped. Frowned. Like a word had come out of the wrong drawer." },
      { s: 'haechan', f: 'flustered', t: "...Sorry. I don't know why I was going to say that." },
      { choose: [
        { t: 'Say what?', notes: 3, then: [
          { s: 'haechan', f: 'neutral', t: "Princess." },
          { s: 'haechan', f: 'sad', t: "It's what I call... somebody. Somewhere. I think. It just came out." },
          { n: "He said princess like he was testing a floorboard, and something in Solar's chest answered it like it had been called by name." }
        ] },
        { t: "You don't get to give me nicknames.", notes: 2, then: [
          { s: 'haechan', f: 'happy', t: "Yeah. Didn't think so." },
          { n: "He didn't sound bothered. He sounded like someone who'd heard that exact sentence before, from the exact same person, and found it funny every time." }
        ] }
      ] },
      { n: "They talked. Or, he talked, in that flat, dry voice that made every sentence sound like a joke he wasn't going to explain, and she listened, and kept catching herself staring at the earrings, at his hands on the railing, at the way he looked at the city like he knew it was temporary." },
      { s: 'haechan', f: 'neutral', t: "I keep getting flashes. Like dreams, but I'm awake." },
      { s: 'haechan', f: 'neutral', t: "A party. Upstairs hallway. A girl walking past a door, listening to something she shouldn't." },
      { s: 'haechan', f: 'sad', t: "And then somewhere else. The sea. A house. A girl in a cream dress who hates me. Who I'm supposed to keep alive." },
      { s: 'haechan', f: 'serious', t: "...Different girls. Same face." },
      { n: "He didn't look at her when he said it. He didn't have to. Solar felt it land somewhere under her ribs, warm and certain and impossible." },
      { choose: [
        { t: 'Same face as who?', notes: 3, then: [
          { s: 'haechan', f: 'serious', t: "You know who." },
          { n: "He said it so quietly that the wind almost took it. She heard it anyway." }
        ] },
        { t: "You sound like Elizabeth.", notes: 2, then: [{ s: 'haechan', f: 'happy', t: "The elevator lady? She keeps staring at me like I'm a math problem." }] }
      ] },
      { s: 'haechan', f: 'neutral', t: "Agasshi." },
      { n: "He said it to the bay. Tried it out. Then shook his head." },
      { s: 'haechan', f: 'happy', t: "No. That one's not right here either. I'll figure out what to call you. Give me time." },
      { n: "She went to bed late. She didn't sleep. Across the hall, the room that had been empty since she moved in had its light on, which was impossible, and she lay there looking at the line of it under her door until it went out." }
    ] },

    { after: '11/14', title: '3: duo queue', place: 'Paulownia Mall · Game Panic', scene: [
      { n: "Game Panic was loud and dark and smelled like soda and the hot plastic of machines that never got turned off. He'd found the one with two light guns, the old shooter in the back corner, and was standing in front of it with his hands in his hoodie pocket like he was waiting for her." },
      { s: 'haechan', f: 'neutral', t: "Play with me." },
      { n: "It wasn't a question. He picked up the gun on the left without looking. The sniper scope, she noticed. He always picked the scope." },
      { n: "She picked up the other one, the one with the healing items, and something clicked into place so completely that her hands went still on it for a second." },
      { s: 'haechan', f: 'surprised', t: "...You picked support." },
      { choose: [
        { t: 'I always pick support.', notes: 3, then: [{ s: 'haechan', f: 'neutral', t: "Yeah. I know. I just don't know how I know." }] },
        { t: "Someone has to keep you alive.", notes: 3, then: [
          { s: 'haechan', f: 'surprised', t: '...' },
          { s: 'haechan', f: 'sad', t: "Yeah. Somebody does." }
        ] }
      ] },
      { n: "They didn't speak once the game started. They didn't need to. He took the long shots, patient, deadly, picking off targets she hadn't even seen yet. She moved the healing to where he'd need it a half-second before he needed it. When the boss came, he was already lining up the shot, and she was already standing exactly where it would be safe for him to take it." },
      { n: "They beat it on the first try. A group of middle schoolers who'd gathered behind them actually clapped." },
      { s: 'haechan', f: 'happy', t: "Didn't miss a single heal." },
      { s: 'haechan', f: 'serious', t: "Nobody plays support like that. Unless they know exactly where their sniper's going to be." },
      { n: "He was looking at her with an expression she couldn't name, intent and quiet, the way he'd looked at her in the laundry room. Like she was a song he'd been trying to remember the words to his whole life." },
      { choose: [
        { t: "Maybe I've played with you before.", notes: 3, then: [
          { s: 'haechan', f: 'happy', t: "Maybe you have." },
          { s: 'haechan', f: 'serious', t: "Maybe in a lot of places." }
        ] },
        { t: 'Again?', notes: 3, then: [{ s: 'haechan', f: 'happy', t: "Yeah. Again. Until they kick us out." }] }
      ] },
      { n: "They played until closing. They never lost. On the walk home he put his hand on the back of her neck for half a second at a crosswalk, to stop her stepping out in front of a scooter, and then took it away like it had burned him, and neither of them mentioned it." }
    ] },

    { after: '11/20', title: '4: across the hall', place: 'Iwatodai Dorm · 2F Hallway', scene: [
      { n: "The empty room across from hers wasn't empty anymore. Mitsuru had said, very carefully, that there appeared to be a new resident, and that the paperwork appeared to have filed itself, and that she was choosing not to examine that." },
      { n: "So now he lived across the hall. And Solar, who had never once slept well in her life, was lying in bed at one in the morning listening to the silence on the other side of the wall like it was a sound." },
      { n: "She got up. She opened her door. His door was already open. He was sitting on the floor of his room in the dark with his back against the bed, headphones on, eyes closed." },
      { s: 'haechan', f: 'neutral', t: "...You're not sleeping." },
      { n: "He hadn't opened his eyes. He hadn't moved." },
      { choose: [
        { t: "I hate you so much I can't sleep.", notes: 3, then: [
          { s: 'haechan', f: 'surprised', t: '...' },
          { n: "He opened his eyes. He looked at her like she'd said a line in a play he'd forgotten he'd been in." },
          { s: 'haechan', f: 'happy', t: "I know. I'm right across the hall. I'll hear you not sleeping." }
        ] },
        { t: "Neither are you.", notes: 2, then: [{ s: 'haechan', f: 'sad', t: "I don't really sleep. Never have. Not in any of them." }] }
      ] },
      { n: "She sat in his doorway. Not in the room. In the doorway, on the line, like crossing it would mean something. He took one side of his headphones off and held it out." },
      { n: "It was music. Not a song she knew. Something half-finished, a beat and a melody and a lot of space, like the outline of a song that hadn't been filled in yet. It was beautiful in a way that felt private, like reading someone's diary." },
      { s: 'haechan', f: 'flustered', t: "I make stuff. Sometimes. When I'm not... doing other things." },
      { s: 'haechan', f: 'sad', t: "I stopped for a long time. I started again. Somebody was the reason." },
      { choose: [
        { t: 'Who?', notes: 2, then: [
          { s: 'haechan', f: 'serious', t: '...' },
          { n: "He didn't answer. He looked at her. That was the answer. She looked away first." }
        ] },
        { t: "(Keep listening.)", notes: 3, then: [
          { n: "She kept listening. He let her. They sat like that until the song looped back to the start three times, her in the doorway, him on the floor, the hallway light making a long yellow line between them." }
        ] }
      ] },
      { n: "She slept that night. All of it. She didn't remember falling asleep in his doorway, or him putting a blanket over her, or him sitting up until dawn so the door wouldn't close on her. Yukari told her the next morning, at breakfast, with an expression of deep and complicated interest." }
    ] },

    { after: '11/26', title: '5: the hoodie', place: 'Iwatodai Station', scene: [
      { n: "It rained on the way back from school, the cold, sideways November kind, and she'd left her umbrella at the dorm, and her blazer was soaked through by the time they reached the station." },
      { n: "He didn't say anything. He just pulled his hoodie off over his head, the black one, still warm, and held it out." },
      { s: 'haechan', f: 'neutral', t: "Here." },
      { choose: [
        { t: "You'll freeze.", notes: 2, then: [{ s: 'haechan', f: 'serious', t: "I'm not going to be the reason you freeze to death." }] },
        { t: '(Take it.)', notes: 3, then: [{ n: "She took it. It smelled like him, like laundry soap and cold air and something warm underneath, and it came down past her hands." }] }
      ] },
      { n: "She pulled it on over her wet blazer. It was enormous on her. It was the warmest thing she'd ever worn." },
      { n: "He looked at her in it for a second too long." },
      { s: 'haechan', f: 'flustered', t: "...This fits you better than that." },
      { n: "He said it like a reflex, like a line he'd said in some other station, in some other rain. Then he blinked, like he'd heard it come out of his own mouth and was surprised by it." },
      { s: 'haechan', f: 'surprised', t: "I've said that before. To you. Somewhere." },
      { choose: [
        { t: "I think I remember you saying it.", notes: 3, then: [
          { s: 'haechan', f: 'sad', t: '...' },
          { s: 'haechan', f: 'serious', t: "Yeah? What else do you remember?" },
          { n: "A frat house. A rooftop. A man in a suit telling her she was promised to someone. A boy with stitches in a laundry room. None of it was hers. All of it was." }
        ] },
        { t: "You're not getting it back.", notes: 3, then: [{ s: 'haechan', f: 'happy', t: "I'm not going to take it back. It fits you better." }] }
      ] },
      { n: "On the platform, waiting for the monorail, he stood close enough that their arms touched, and she let him, and when the train came neither of them moved to step away first. Two names for the sun, standing in the rain, pretending they weren't warm." }
    ] },

    { after: '12/2', title: '6: every universe', place: 'The Velvet Room', scene: [
      { n: "She fell asleep at her desk again, and woke up in blue." },
      { n: "But this time she wasn't alone on the velvet seat. He was there too, sitting beside her, very straight, his hands on his knees, looking around the rising elevator with the flat suspicion of someone who has been in a lot of strange rooms and has decided this one is the strangest." },
      { s: 'elizabeth', f: 'happy', t: "Ah. You've both come. How lovely. I have been wanting to look at you two together." },
      { s: 'haechan', f: 'neutral', t: "...She's looking at us like we're a science project." },
      { s: 'elizabeth', f: 'happy', t: "You are a science project. A wonderful one." },
      { s: 'elizabeth', f: 'sad', t: "Everyone else who came through was pulled. By the moon. By the thinning of the hour. They had no say." },
      { s: 'elizabeth', f: 'happy', t: "You were not pulled, Haechan. You walked. I have never seen anyone walk between worlds before. I did not think it could be done." },
      { s: 'haechan', f: 'neutral', t: "I didn't walk. I was just... looking for something. And then I was here." },
      { s: 'elizabeth', f: 'happy', t: "Looking for someone, I think." },
      { n: "Solar felt the whole elevator go quiet, the hum and the climb and the velvet, like the room itself was waiting to hear what she'd say." },
      { s: 'elizabeth', f: 'sad', t: "In every world I can find, there is a Solar. And in every one of those worlds, there is a boy who finds her. Different names, sometimes. Different stories. The same two people." },
      { s: 'elizabeth', f: 'happy', t: "Two names for the sun. Finding each other in every universe. It is the most remarkable thing in my compendium." },
      { choose: [
        { t: "That's not possible.", notes: 2, then: [
          { s: 'haechan', f: 'flustered', t: "Nothing about this year is possible." },
          { n: "He didn't look at her. He was looking at the floor. His knee was touching hers. Neither of them moved it." }
        ] },
        { t: '(Look at him.)', notes: 3, then: [
          { n: "She looked at him. He was already looking at her. He didn't look surprised, by any of it. He looked like someone who had always known and was relieved someone had finally said it out loud." }
        ] }
      ] },
      { n: "She woke at her desk. Her phone was buzzing. Across the hall, his light was on." },
      { n: "She told herself it was nothing. She told herself all the way to breakfast. She'd been telling herself things her whole life, in every world, apparently. She had a feeling she'd never once been right." }
    ] },

    { after: '12/8', title: '7: full sun', music: 'sun', place: 'Iwatodai Dorm · Rooftop', scene: [
      { n: "December came in clear and cold. He was on the roof again, where he always was when he wasn't in the laundry room, the city lights below him and his breath showing in the dark." },
      { n: "She'd brought two cans of hot coffee from the vending machine. He took one without saying thank you, which she'd come to understand was how he said thank you." },
      { s: 'haechan', f: 'neutral', t: "Did you know your name means sun? Solar." },
      { s: 'haechan', f: 'sad', t: "Mine means full sun. Somebody told me that, a long time ago, in a ballroom. I was talking to people who wanted to kill me. I told them, it means full sun. Very bright. Hurts to look at." },
      { n: "He laughed, short and flat. It didn't sound like a laugh. It sounded like something scraping against something else." },
      { s: 'haechan', f: 'happy', t: "Two names for the sun. No wonder it's always so bright when you're around." },
      { choose: [
        { t: "Hurts to look at?", notes: 3, then: [
          { s: 'haechan', f: 'surprised', t: '...' },
          { s: 'haechan', f: 'flustered', t: "Yeah. Kind of. In a good way. In the worst good way." }
        ] },
        { t: "That's unbearably cheesy.", notes: 2, then: [{ s: 'haechan', f: 'happy', t: "I know. Don't tell anyone. I have a reputation. Somewhere." }] }
      ] },
      { s: 'haechan', f: 'serious', t: "In the other places, I'm not good for you. I want you to know that. I know that much." },
      { s: 'haechan', f: 'sad', t: "I lie. I hide things. I do things I can't take back. Every version of me is a mess, Solar. I can feel it." },
      { s: 'haechan', f: 'sad', t: "And every version of you looks at me anyway." },
      { n: "He said it like a confession. He said it like he was waiting to be told to leave." },
      { choose: [
        { t: "Then I'm not going to be the first one to stop.", notes: 3, then: [
          { s: 'haechan', f: 'flustered', t: '...' },
          { n: "He turned, slowly, and looked at her like the sun had come up at midnight. Then he looked away, fast, at the bay, his jaw working, his hands tight on the cold can." }
        ] },
        { t: "You're not a mess here.", notes: 2, then: [{ s: 'haechan', f: 'happy', t: "I'm a little bit of a mess here. I've been sleeping in a laundry room." }] }
      ] },
      { n: "They stayed out until the coffee went cold and their fingers went numb. He walked her to her door, across the hall from his, and stood there for a long moment like he was going to say something. Then he just said goodnight. Then he went into his room, and she went into hers, and she lay in bed listening to him not sleep." }
    ] },

    { after: '12/16', title: '8: say it again', music: 'tender', place: 'Iwatodai Dorm · Laundry Room', scene: [
      { n: "Three in the morning. The laundry room. The same flickering light. He was sitting on the dryer again, but this time he wasn't waiting for anything. He was just there, because she was going to be there." },
      { s: 'haechan', f: 'neutral', t: "Can't sleep?" },
      { n: "She didn't answer. She sat on the other dryer. Their knees almost touched across the gap." },
      { s: 'haechan', f: 'serious', t: "There's something you should know. My name. Haechan's not my real name." },
      { s: 'haechan', f: 'sad', t: "My real one's Donghyuck. Nobody calls me that. Haven't in a long time." },
      { n: "He said it the way you'd hand someone something fragile, like he expected her to drop it." },
      { choose: [
        { t: "Donghyuck.", notes: 3, then: [
          { s: 'haechan', f: 'flustered', t: "Don't call me that." },
          { n: "But he didn't say it like he meant it. He said it like a line in a scene he'd played before." },
          { choose: [
            { t: 'Why not?', notes: 3, then: [
              { s: 'haechan', f: 'sad', t: 'Because nobody does.' },
              { s: 'solar', t: 'Then I will.' }
            ] }
          ] }
        ] },
        { t: "Why are you telling me?", notes: 2, then: [
          { s: 'haechan', f: 'happy', t: "Because in every world, I tell you. Eventually. I figured I'd skip the part where it takes forever." }
        ] }
      ] },
      { n: "He went very still. Then he slid off the dryer and stood in front of her, so close she could feel the warmth coming off him in the cold room, and looked at her with an expression she'd never seen on anyone." },
      { s: 'haechan', f: 'serious', t: '...Say it again.' },
      { n: "She said it again. Donghyuck. Quiet, under the hum of the fluorescent lights. He closed his eyes when she said it, like he was trying to keep it." },
      { s: 'haechan', f: 'happy', t: "Yeah. That's the one. That's what you call me. In all of them." },
      { n: "He didn't kiss her. He wanted to. She could see him want to, see the whole thing happen on his face and get set down, carefully, for later. He just rested his forehead against hers for one second, and then stepped back, and went to bed, and she sat in the laundry room until the light stopped flickering, which it never did." }
    ] },

    { after: '1/10', title: '9: what are we, donghyuck', place: 'Iwatodai Dorm · Rooftop', scene: [
      { n: "January. The coldest night of the year, and the last stretch of the Dark Hour. Everybody in the dorm knew it was ending. The end of the month. The end of the green. The doors closing on every world that had leaked through." },
      { n: "He was on the roof. He'd been there since dinner. She brought two blankets this time, and he took one without saying thank you, and they stood wrapped up at the railing with the whole city glittering below them." },
      { s: 'haechan', f: 'neutral', t: "Elizabeth says when the hour ends, everybody goes home." },
      { s: 'haechan', f: 'sad', t: "I don't have a home, Solar. Not one. I have a bunch of them, and you're in all of them." },
      { s: 'haechan', f: 'serious', t: "So I need to know. Before it ends. What is this?" },
      { route: [
        { t: "I'm in love with you. In every universe, apparently.", route: 'romance', notes: 3, then: [
          { s: 'haechan', f: 'surprised', t: '...' },
          { n: "For a second, he didn't do anything. Then he laughed, real this time, not scraping, not flat, a laugh that came all the way up from somewhere he'd kept locked for a long time." },
          { s: 'haechan', f: 'happy', t: "Yeah. Yeah, okay. Same. Obviously. Every single time." },
          { n: "And then he kissed her, finally, on the cold roof, under the winter stars, like he'd been crossing worlds to do it. He had been. She kissed him back like she'd been waiting in every one of them." }
        ] }
      ] }
    ] },

    { after: '1/30', title: '10: the universe', place: 'Iwatodai Dorm · His Room', scene: [
      { n: "The last night. Tomorrow, the hour would end, and every door would close, and nobody, not even Elizabeth, knew what that meant for a boy who'd walked in on his own." },
      { n: "His room across the hall had almost nothing in it. A bed. A pair of headphones. A laptop that hadn't existed when he arrived and that he refused to explain. He sat on the floor with his back to the bed, the way he had the night she first sat in his doorway. This time she sat next to him." },
      { s: 'haechan', f: 'happy', t: "I finished it. The song. The one that was just an outline when you first heard it." },
      { n: "He handed her one side of the headphones. She put it on." },
      { n: "And it was the song." },
      { n: "Her song. The one that had been on repeat since summer, since before she'd met him, since the shrine steps with Akihiko and the cicadas, the one that had always felt like it belonged to some other version of her life. She'd never known where she first heard it. She'd only known she couldn't stop." },
      { s: 'haechan', f: 'flustered', t: "I've been making it for a long time. In every world. It always ends up being about the same person." },
      { s: 'haechan', f: 'happy', t: "I guess it found you before I did. That tracks." },
      { choose: [
        { t: "I've been listening to you this whole time.", notes: 3, then: [
          { s: 'haechan', f: 'sad', t: '...' },
          { s: 'haechan', f: 'happy', t: "Yeah. I know. I could feel it. That's how I found the door." }
        ] },
        { t: "(Hold his hand.)", notes: 3, then: [
          { n: "She took his hand. His fingers were cold. He held on so hard it almost hurt, and didn't let go, and the song played on in the space between them." }
        ] }
      ] },
      { s: 'haechan', f: 'sad', t: "When the hour ends, I don't know where I'm going to be." },
      { s: 'haechan', f: 'serious', t: "But I'll find you. I always do. Different name, maybe. Different story. Some laundry room, some party, some rooftop. I'll find you." },
      { s: 'haechan', f: 'happy', t: "It's not the end of the world, princess. We'll figure it out." },
      { n: "Princess. He said it on purpose this time, and smiled when he said it, and she laughed so hard she cried, or cried so hard she laughed, and the song looped back to the start, and outside the window the stars were the same stars in every world." },
      { s: 'solar', t: "Say it again." },
      { s: 'haechan', f: 'happy', t: "...Solar." },
      { n: "That one, she decided. That one was the right one. Here, at least. In this universe. For now." }
    ] }
  ]
});
