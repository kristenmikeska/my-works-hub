/* Kasumi Yoshizawa · Faith. Arrives on the 9/5 full moon. Format notes are at the top of akihiko.js.
   Contains Persona 5 Royal's big twist (Kasumi is Sumire). Her "which one is real" story mirrors Elizabeth's
   question about the many Solars. */
FemcSocial.define({
  id: 'kasumi', name: 'Kasumi Yoshizawa', short: 'Kasumi', arcana: 'Faith', numeral: '✦', from: 'Persona 5 Royal',
  arrives: '9/5',
  home: { place: 'Gekkoukan High · Gym', slot: 0, days: [1, 3, 5], hint: 'After school on Mondays, Wednesdays and Fridays, in the Gekkoukan gym.' },
  approach: "A red-haired girl is running the same routine over and over in the empty gym, and her red ribbon keeps drifting your way.",
  invite: {
    ask: [
      "Senpai! Are you free? 🎀",
      "Senpai, would you watch my routine today?",
      "Want to get something sweet after practice?",
      "Senpai! I made score cards. I need a judge! 🎀",
      "Are you busy? The gym is empty and it echoes so nicely today!",
      "I have two cream buns and only one stomach. ...Okay, I could eat both. But I would rather share!",
      "Senpai, I'm stretching. Come stretch with me! It's good for you, I promise. 💪",
      "Practice is so much better with an audience. Are you free, Senpai?"
    ],
    ok: ["Yay! I'll be waiting!", "Senpai! I'll warm up while you walk over! 🎀", "Hooray! I'll save you a spot on the bleachers!"],
    no: ["That's okay! Next time! 🎀", "Okay! I'll practice extra hard so it's even better next time!", "No problem, Senpai! Rest well! 💪"]
  },
  hangouts: [
    [
      { n: "Kasumi had decided that Solar's hamstrings were a personal project. She sat on the mat across from her with the soles of their feet pressed together, holding both of Solar's hands, and pulled, gently, with the relentless kindness of a coach who had already decided you could do it." },
      { s: 'kasumi', f: 'happy', t: "Breathe out, Senpai! Everything gets longer when you breathe out." },
      { choose: [
        { t: "(Breathe out and lean in.)", notes: 3, then: [
          { n: "Solar breathed out. Something at the back of her legs filed a formal complaint. She leaned another two centimeters anyway, and Kasumi lit up like she'd been handed a medal." },
          { s: 'kasumi', f: 'happy', t: "Two whole centimeters! Senpai! That's huge!" }
        ] },
        { t: "Everything is getting longer except my patience.", notes: 2, then: [{ s: 'kasumi', f: 'happy', t: "Fufu! Patience stretches too, if you practice." }] },
        { t: "(Lie down flat and refuse.)", notes: 1, then: [
          { s: 'kasumi', f: 'surprised', t: "Senpai! You can't just lie down!" },
          { n: "Solar could, it turned out. After a moment Kasumi lay down beside her in solidarity, and they looked at the gym ceiling together for a while." }
        ] }
      ] },
      { n: "The lights hummed. Somewhere outside, the volleyball team was being yelled at by its captain, and in here it was quiet and warm and smelled like mats and floor polish, and Solar's hamstrings were going to hate her tomorrow." }
    ],
    [
      { n: "After practice Kasumi ate like it was a second event. She sat cross-legged on the bleachers with a paper bag from the school store in her lap and worked through a melon bread, a cream bun and a small, apologetic carton of strawberry milk, in that order, with total focus." },
      { s: 'kasumi', f: 'flustered', t: "Don't watch, Senpai! Gymnasts need fuel! It's science!" },
      { choose: [
        { t: "(Hand her your melon bread too.)", notes: 3, then: [
          { s: 'kasumi', f: 'surprised', t: "...For me? Are you sure?" },
          { n: "She was already unwrapping it. She finished it in three determined bites and thanked Solar so sincerely in between that it felt like being knighted." }
        ] },
        { t: "I'm not judging. I'm impressed.", notes: 2, then: [{ s: 'kasumi', f: 'happy', t: "Fufu. Thank you! I'm impressive in a lot of categories." }] },
        { t: "Save some room for dinner.", notes: 1, then: [{ s: 'kasumi', f: 'neutral', t: "This is dinner, Senpai. Part one." }] }
      ] },
      { n: "The gym emptied out around them. The bag got lighter. When it was finally empty Kasumi folded it into a neat little square, because even her trash had good form." }
    ],
    [
      { n: "Kasumi had asked, very politely, whether Solar had ever done a cartwheel, and Solar had made the mistake of saying probably, once, when she was six." },
      { s: 'kasumi', f: 'serious', t: "Hands here, Senpai. Then here. Then your legs just follow. They want to follow! You only have to let them." },
      { choose: [
        { t: "(Try it. Commit.)", notes: 3, then: [
          { n: "Solar's legs did not want to follow. They went up, briefly, in a shape that was less a cartwheel than a strong opinion about cartwheels, and she came down sideways on the mat. Kasumi applauded with both hands over her head." },
          { s: 'kasumi', f: 'happy', t: "That was a real attempt! That counts!" }
        ] },
        { t: "Show me one more time first.", notes: 2, then: [{ n: "Kasumi showed her. Then again. Then four more, faster, wheeling down the whole length of the mat and back, laughing, until she'd clearly forgotten she was supposed to be teaching." }] },
        { t: "My legs and I have agreed not to.", notes: 1, then: [{ s: 'kasumi', f: 'happy', t: "Senpai! That's what everyone says right before their first one!" }] }
      ] },
      { n: "Nobody else saw. Kasumi swore she would never tell a soul, hand over her heart, in a voice that made it sound like a very serious oath." }
    ],
    [
      { n: "Putting the big mats away was a two-person job, and since there was nobody else in the gym after hours but Kasumi, the second person was Solar." },
      { n: "The mats were blue and enormous and smelled like every gym class Solar had ever sat out of. Kasumi took her end like it weighed nothing." },
      { s: 'kasumi', f: 'happy', t: "On three, Senpai! One, two..." },
      { choose: [
        { t: "Wait. Is it on three, or after three?", notes: 3, then: [
          { s: 'kasumi', f: 'surprised', t: "...Oh no. I don't know. I've never known." },
          { n: "They laughed so hard they had to put the mat down halfway across the gym, and then sat on it, and decided it lived there now." }
        ] },
        { t: "(Lift on three.)", notes: 2, then: [{ n: "They lifted on three and walked it to the storage room in perfect step, like a parade, and Kasumi said \"good form\" under her breath at the end, to nobody in particular." }] },
        { t: "(Lift on two, to be safe.)", notes: 1, then: [{ n: "The mat tipped sideways. Kasumi caught it, and then caught Solar, more or less at the same time, apologizing the whole way through for something that wasn't her fault." }] }
      ] },
      { n: "When they were done the gym was big and empty and clean, the floor shining under the high windows, and Kasumi looked around it like a room she'd made herself." }
    ],
    [
      { n: "Kasumi had made score cards out of the backs of old handouts, one to ten in thick marker, and pressed them into Solar's hands before practice with the solemnity of a coronation." },
      { s: 'kasumi', f: 'serious', t: "Be honest, Senpai. Real judges are never nice. You have to be a real judge." },
      { n: "Then she ran her floor routine, the whole thing, the ribbon tracing loops through the air with the gym lights catching it, and landed, and turned, and stood with her chin up, waiting." },
      { choose: [
        { t: "(Hold up a nine, and mime the ribbon brushing the floor.)", notes: 3, then: [
          { s: 'kasumi', f: 'surprised', t: "...It touched. On the last loop. You saw that?" },
          { s: 'kasumi', f: 'happy', t: "You're a real judge! Okay. Again!" }
        ] },
        { t: "(Hold up the ten.)", notes: 2, then: [
          { s: 'kasumi', f: 'flustered', t: "Senpai! I told you to be a real judge!" },
          { n: "She was grinning so hard it plainly didn't matter." }
        ] },
        { t: "(Hold up all the cards at once.)", notes: 1, then: [{ s: 'kasumi', f: 'happy', t: "That's... fifty-five? Out of ten? I'll take it!" }] }
      ] },
      { n: "She ran it again. Solar judged it again. Neither of them noticed the light going orange in the high windows until the janitor came in to turn it off." }
    ]
  ],
  romance: true,
  cast: { akihiko: 'Akihiko', maruki: 'Maruki', elizabeth: 'Elizabeth' },
  threads: { elizabeth: { name: 'Elizabeth', members: ['elizabeth'] } },
  texts: [
    { id: 'eliz-9-5', thread: 'elizabeth', rank: 0, before: 99, days: 0, date: '9/5', slot: 1, msgs: [
      { from: 'elizabeth', t: 'The September moon has brought new guests, Solar.' },
      { from: 'elizabeth', t: 'One of them is a gymnast. There is something about her I cannot quite read. As if her page in my compendium had been written twice.' },
      { from: 'elizabeth', t: 'Also: an American agent who keeps asking the police where to buy ammunition, and a manga artist who has claimed the back table at Bookworms. I suspect they will both find you before you find them.' }
    ] },
    { id: 'kas-1a', rank: 1, days: 1, slot: 1, msgs: [
      { from: 'kasumi', t: 'Senpai! Thank you for watching my routine today!' },
      { from: 'kasumi', t: "I know it wasn't perfect yet. It will be!" }
    ], reply: [
      { t: 'It was beautiful already.', notes: 3, then: [{ from: 'kasumi', t: 'Senpai... 🎀' }, { from: 'kasumi', t: "I'll make it even more beautiful!" }] },
      { t: "Don't overdo it.", notes: 2, then: [{ from: 'kasumi', t: 'I never overdo it! ...Okay, sometimes.' }] }
    ] },
    { id: 'kas-2a', rank: 2, days: 1, slot: 1, msgs: [
      { from: 'kasumi', t: 'Akihiko-senpai challenged me to a plank contest.' },
      { from: 'kasumi', t: 'We both collapsed at the same time. It was a draw.' },
      { from: 'kasumi', t: 'He wants a rematch tomorrow. I am going to win.' }
    ], reply: [
      { t: 'You two need a hobby. A different one.', notes: 3, then: [{ from: 'kasumi', t: "This IS our hobby, Senpai! Fufu." }] },
      { t: 'Go get him.', notes: 2, then: [{ from: 'kasumi', t: '💪🎀' }] }
    ] },
    { id: 'kas-3a', rank: 3, days: 1, slot: 1, msgs: [
      { from: 'kasumi', t: "Thank you for listening about my sister. I don't talk about her much." },
      { from: 'kasumi', t: 'It felt good to say her name.' }
    ], reply: [
      { t: 'Say it whenever you want.', notes: 3, then: [{ from: 'kasumi', t: 'Sumire. ...Okay. Thank you, Senpai.' }] },
      { t: 'I lost people too.', notes: 3, then: [{ from: 'kasumi', t: 'Then we understand each other. That makes me less lonely.' }] }
    ] },
    { id: 'kas-5a', rank: 5, days: 1, slot: 1, msgs: [
      { from: 'kasumi', t: "I couldn't land it again tonight." },
      { from: 'kasumi', t: "It's like my body is remembering someone else's routine." }
    ], reply: [
      { t: "Maybe it is.", notes: 3, then: [{ from: 'kasumi', t: '...Senpai, that is a scary thing to say.' }, { from: 'kasumi', t: 'Why does it feel true?' }] },
      { t: "Rest. Try again tomorrow.", notes: 2, then: [{ from: 'kasumi', t: "I'll try. Goodnight, Senpai." }] }
    ] },
    { id: 'kas-7a', rank: 7, days: 1, slot: 1, msgs: [
      { from: 'kasumi', t: 'Sumire.' },
      { from: 'kasumi', t: 'I typed it as my name. To see how it looks.' }
    ], reply: [
      { t: 'It looks right.', notes: 3, then: [{ from: 'kasumi', t: "...It does. It does, doesn't it." }] },
      { t: "Whatever you call yourself, I'm here.", notes: 3, then: [{ from: 'kasumi', t: 'Thank you, Senpai. That is the only thing that feels steady right now.' }] }
    ] },
    { id: 'kas-9r', rank: 9, route: 'romance', days: 1, slot: 1, msgs: [
      { from: 'kasumi', t: 'Senpai, I chose this. Me. Sumire. Not the girl I thought I had to be.' },
      { from: 'kasumi', t: 'And I chose you.' }
    ], reply: [
      { t: 'I choose you too, Sumire.', notes: 3, then: [{ from: 'kasumi', t: '🎀💕' }] },
      { t: "Good choices. Both of them.", notes: 3, then: [{ from: 'kasumi', t: 'The best I have ever made!' }] }
    ] },
    { id: 'kas-9f', rank: 9, route: 'friend', days: 1, slot: 1, msgs: [
      { from: 'kasumi', t: "Best friends, Senpai! I'm going to be the best best friend!" },
      { from: 'kasumi', t: 'I will train for it.' }
    ], reply: [
      { t: 'Please do not train for friendship.', notes: 3, then: [{ from: 'kasumi', t: 'Too late! I have a schedule!' }] },
      { t: "You're already the best.", notes: 3, then: [{ from: 'kasumi', t: 'Senpai!! 🎀' }] }
    ] }
  ],
  ranks: [
    { after: '9/7', title: '1: the ribbon', place: 'Gekkoukan High · Gym', scene: [
      { n: "The gym was supposed to be empty. Volleyball had ended at five. Solar had come back for a water bottle she'd left on the bleachers, and instead she found a girl in a red leotard on the floor mat, alone, dancing with a ribbon." },
      { n: "Long red hair in a high ponytail, tied with a big red bow. A ribbon in her hand, red too, a long silk ribbon that moved through the air like it was alive, like it was writing something in a language only she could read. She leapt and spun and landed and the ribbon followed her a half-second behind, a red line chasing a red girl." },
      { n: "Solar stood in the doorway and couldn't move. She'd never cared about gymnastics in her life. She couldn't look away." },
      { n: "The girl landed the last move, arms up, ribbon curling around her in a perfect spiral. Then she noticed Solar and went bright red to match her leotard." },
      { s: 'kasumi', f: 'surprised', t: "Oh! I'm so sorry! I didn't know anyone was here! Is this your gym? I just found it, and it had mats, and I had to practice, and..." },
      { choose: [
        { t: "That was beautiful.", notes: 3, then: [
          { s: 'kasumi', f: 'blushing', t: "...Really? You think so?" },
          { s: 'kasumi', f: 'happy', t: "Thank you! It's not perfect yet. It will be!" }
        ] },
        { t: "You're not from Gekkoukan, are you?", notes: 2, then: [{ s: 'kasumi', f: 'sad', t: "No. I go to Shujin Academy. In Tokyo. I woke up here two nights ago in the middle of something green and horrible. The mats were the first normal thing I found." }] }
      ] },
      { s: 'kasumi', f: 'happy', t: "I'm Kasumi Yoshizawa! First-year. Rhythmic gymnast. And you must be a second-year. Can I call you Senpai?" },
      { n: "She said it so earnestly, so brightly, bouncing a little on her toes, that Solar couldn't have said no if she'd wanted to." },
      { choose: [
        { t: "Sure. Senpai's fine.", notes: 3, then: [{ s: 'kasumi', f: 'happy', t: "Senpai! I'll do my best to make you proud!" }] },
        { t: "You can just call me Solar.", notes: 2, then: [{ s: 'kasumi', f: 'happy', t: "Solar-senpai, then! I'm sorry, I can't help it. You're very Senpai." }] }
      ] },
      { n: "She practiced for another hour. Solar stayed and watched the whole thing from the bleachers. At one point Kasumi missed a landing, stumbled, and stood very still for a second with an odd look on her face, like she'd reached for something on a shelf and found it wasn't there. Then she shook it off and smiled and tried again." }
    ] },

    { after: '9/18', title: '2: overtraining', place: 'Gekkoukan High · Gym', scene: [
      { n: "Akihiko had discovered Kasumi, and Kasumi had discovered Akihiko, and the Gekkoukan gym had become a place of terrible danger." },
      { n: "They were both on the floor when Solar arrived, doing planks, red-faced and shaking and staring each other down from opposite ends of the mat like duelists." },
      { s: 'akihiko', f: 'serious', t: "Two minutes thirty. You can stop if you need to." },
      { s: 'kasumi', f: 'serious', t: "I don't need to! Do you need to, Akihiko-senpai?" },
      { s: 'akihiko', f: 'serious-3', t: "I never need to." },
      { choose: [
        { t: "Both of you, stop. Right now.", notes: 3, then: [
          { n: "They both collapsed at the same time, flat on their faces, gasping, and then both started laughing so hard they couldn't get up." },
          { s: 'kasumi', f: 'happy', t: "It's a draw!" },
          { s: 'akihiko', f: 'happy', t: "Rematch. Tomorrow." }
        ] },
        { t: "(Sit down and time them.)", notes: 2, then: [
          { n: "Solar sat down and timed them. They made it to four minutes and twelve seconds before collapsing at exactly the same moment, which neither of them would ever stop arguing about." }
        ] }
      ] },
      { n: "Later, when Akihiko had gone off to the boxing club, Kasumi sat on the bench next to Solar with a towel over her head, still breathing hard." },
      { s: 'kasumi', f: 'neutral', t: "He reminds me of myself. The way he trains like something's chasing him." },
      { s: 'kasumi', f: 'sad', t: "Something's chasing me too, Senpai. I just don't know what." },
      { choose: [
        { t: "Maybe you don't have to outrun it.", notes: 3, then: [{ s: 'kasumi', f: 'surprised', t: "...Then what do I do?" }] },
        { t: "You can tell me, if you figure it out.", notes: 3, then: [{ s: 'kasumi', f: 'happy', t: "I will. You'll be the first person I tell." }] }
      ] }
    ] },

    { after: '9/30', title: '3: my sister', music: 'tender', place: 'Gekkoukan High · Gym · After Hours', scene: [
      { n: "The gym after hours was dim and echoing. Kasumi was sitting in the middle of the mat with her ribbon pooled in her lap, not practicing, just holding it." },
      { s: 'kasumi', f: 'neutral', t: "Senpai. I had a sister. A twin. Sumire." },
      { s: 'kasumi', f: 'sad', t: "We did gymnastics together, our whole lives. She was always a little behind me. She always thought I was better. I wasn't. She just didn't believe in herself." },
      { s: 'kasumi', f: 'sad', t: "There was an accident. A truck. She... she pushed me out of the way. Or I pushed her. I don't... the memory goes funny at the edges." },
      { n: "She frowned at the ribbon, like the memory had a texture she didn't recognize. Like she'd picked up something familiar and found it was the wrong weight." },
      { s: 'kasumi', f: 'sad', t: "She died. And I'm still here. And I'm doing gymnastics for both of us." },
      { choose: [
        { t: "That's a lot to carry.", notes: 3, then: [{ s: 'kasumi', f: 'sad', t: "...It is. I've never said that out loud. It is." }] },
        { t: "I lost my parents. I know a little.", notes: 3, then: [
          { s: 'kasumi', f: 'surprised', t: '...Senpai.' },
          { n: "Kasumi reached over and put her hand on top of Solar's, and they sat in the dim gym with their hands stacked, two girls who'd been left behind by someone they loved, not saying anything." }
        ] }
      ] },
      { s: 'kasumi', f: 'neutral', t: "Her ribbon was red. Mine was... I think mine was a different color. I can't remember. Isn't that strange?" },
      { n: "It was strange. Solar filed it away, the way she filed everything, in the place where she kept things she'd come back to." }
    ] },

    { after: '10/12', title: '4: maruki', music: 'mystery', place: 'Gekkoukan High · Counseling Room', scene: [
      { n: "There was a counselor at Gekkoukan who hadn't been there in September." },
      { n: "Nobody seemed to find this strange. That was how Solar knew he'd come through. A tall, soft-spoken man with messy dark hair and glasses and a cardigan, sitting in the empty counseling room with a cup of tea and an expression of gentle, endless interest." },
      { register: 'maruki' },
      { s: 'maruki', t: "Ah, you're Yoshizawa-san's friend. Please, sit. I'm Takuto Maruki. I was her counselor, back home. I seem to have followed her here. Funny how these things work." },
      { n: "Kasumi was sitting in the chair across from him, smiling, relaxed, more relaxed than Solar had ever seen her. Maruki had that effect, apparently. He had a voice like a warm bath." },
      { s: 'maruki', t: "I only want everyone to be happy, you know. That's all I've ever wanted. For people to stop hurting." },
      { s: 'maruki', t: "Wouldn't that be wonderful? A world without any pain at all?" },
      { choose: [
        { t: "Pain's part of being real.", notes: 3, then: [
          { s: 'maruki', t: "...That's a very wise thing to say for someone so young." },
          { n: "He smiled when he said it. The smile was very kind. Something behind it went very still, like a man realizing a chess piece had moved somewhere he hadn't planned." }
        ] },
        { t: "That does sound wonderful.", notes: 1, then: [{ s: 'maruki', t: "Doesn't it? I'm so glad you agree." }] }
      ] },
      { n: "On the way out, Elizabeth was waiting in the hallway, which she never did, standing very straight with her book against her chest, looking past Solar at the counseling room door." },
      { s: 'elizabeth', f: 'sad', t: "Be careful with that man, Solar. His kindness has a very particular shape. Like a key cut to fit a lock it has no business opening." },
      { n: "She left before Solar could ask what she meant." }
    ] },

    { after: '10/26', title: '5: the move she can\'t land', place: 'Gekkoukan High · Gym', scene: [
      { n: "She couldn't land it." },
      { n: "One move. A leap and a turn, the ribbon spiraling. She'd been doing it since she was eight, she said. She'd done it in competitions, in front of judges, a thousand times. Now her body kept doing something slightly different at the top of the turn, a half-beat late, a little hesitant, like it was following a different routine." },
      { n: "She fell. Got up. Tried again. Fell again. Solar watched from the bleachers for an hour, wincing every time Kasumi hit the mat." },
      { choose: [
        { t: "Kasumi. Stop. Please.", notes: 3, then: [
          { s: 'kasumi', f: 'serious', t: "I can't stop! I have to land it! Kasumi always lands it!" },
          { n: "She heard it at the same time Solar did. Kasumi always lands it. Talking about herself in the third person, like she was describing someone else." },
          { s: 'kasumi', f: 'surprised', t: "...Why did I say it like that?" }
        ] },
        { t: "(Go down onto the mat with her.)", notes: 3, then: [
          { n: "Solar went down onto the mat and sat beside her. Kasumi was shaking. Her ribbon was tangled around her ankle." },
          { s: 'kasumi', f: 'sad', t: "My body knows a different routine, Senpai. It's like it remembers someone else." }
        ] }
      ] },
      { s: 'kasumi', f: 'sad', t: "Sometimes I wake up and I reach for my glasses. I don't wear glasses. I've never worn glasses." },
      { s: 'kasumi', f: 'sad', t: "Sumire wore glasses." },
      { n: "The gym was very quiet. The ribbon lay on the mat between them like a red line drawn under something." }
    ] },

    { after: '11/9', title: '6: the mirror', place: 'Gekkoukan High · Gym · The Dark Hour', scene: [
      { n: "The green hour. The gym washed in sick light, the mats dark, the coffins where the late-night janitor should have been. Kasumi was standing in front of the mirrored wall at the end of the gym, the one the dance club used, very still." },
      { n: "Solar came up beside her and looked. And saw." },
      { n: "Kasumi was standing in the gym in her red leotard with her red bow and her ribbon. But the girl in the mirror was wearing glasses. Her hair was down. She looked smaller, softer, unsure, and she was looking back at Kasumi with an expression of enormous, terrible sadness." },
      { s: 'kasumi', f: 'surprised', t: "...That's not me." },
      { s: 'kasumi', f: 'sad', t: "Senpai. Senpai, tell me that's not me." },
      { choose: [
        { t: "(Take her hand. Don't say anything yet.)", notes: 3, then: [
          { n: "Solar took her hand. In the mirror, the girl with the glasses reached out too, and took the hand of a reflection that wasn't there." }
        ] },
        { t: "I think it might be.", notes: 3, then: [
          { s: 'kasumi', f: 'sad', t: '...' },
          { s: 'kasumi', f: 'sad', t: "Then who have I been all this time?" }
        ] }
      ] },
      { n: "The green faded. The mirror went back to showing what was in front of it. Kasumi, in red, holding Solar's hand, shaking." },
      { n: "Solar thought of Elizabeth in the elevator, saying, in every world there is someone called Solar. She thought of mirrors. She thought she understood, a little, what it was like to look at yourself and see a different girl." }
    ] },

    { after: '11/23', title: '7: sumire', music: 'mystery', place: 'Gekkoukan High · Rooftop', scene: [
      { n: "She came to the roof in glasses." },
      { n: "Her hair was down. The red bow was in her hand, not her hair. She was wearing a sweater too big for her, and she stood at the railing in the November wind and didn't look like a gymnast, or a first-year, or a girl who bounced on her toes. She looked like someone who'd just woken up from a very long dream." },
      { s: 'kasumi', f: 'sad', t: "I'm Sumire. I've always been Sumire." },
      { s: 'kasumi', f: 'sad', t: "Kasumi was my sister. She pushed me out of the way. She died. And I couldn't stand it. I couldn't stand being the one who lived. So I... became her." },
      { s: 'kasumi', f: 'sad', t: "Dr. Maruki helped. He made it real. He took away the pain. He took away me." },
      { n: "She said it all very quietly, holding the bow so tight her knuckles were white. She'd clearly been holding the words just as tight, for a very long time." },
      { choose: [
        { t: "Hi, Sumire.", notes: 3, then: [
          { s: 'kasumi', f: 'surprised', t: '...' },
          { s: 'kasumi', f: 'sad', t: "...Hi, Senpai." },
          { n: "She laughed, wet and broken, and wiped her eyes under her glasses." },
          { s: 'kasumi', f: 'happy', t: "You're the first person to say it to me in a year." }
        ] },
        { t: "You're still the girl I met in the gym.", notes: 3, then: [{ s: 'kasumi', f: 'sad', t: "Am I? I don't know who that girl was, Senpai. I don't know who I am." }] }
      ] },
      { s: 'kasumi', f: 'sad', t: "Dr. Maruki says I can go back. Be Kasumi again. Never feel this. He says it's kinder." },
      { n: "The wind pulled at her hair. The red bow fluttered in her hand like it wanted to go somewhere." }
    ] },

    { after: '12/7', title: '8: me', music: 'tender', place: 'Gekkoukan High · Counseling Room', scene: [
      { n: "Maruki was waiting for her. Of course he was. In the counseling room, with tea, with that gentle face, with his hands folded on the desk like a man about to give very good news." },
      { s: 'maruki', t: "Sumire. You don't have to hurt like this. I can give her back to you. You can be her. You'll never remember that you weren't." },
      { s: 'maruki', t: "Isn't that what you want? A world where she's still here, in you?" },
      { n: "Sumire stood in the doorway. Solar stood behind her. Not in front of her. Not making the choice. Just there." },
      { choose: [
        { t: "It's your choice, Sumire. Not his. Not mine.", notes: 3, then: [{ s: 'kasumi', f: 'serious', t: '...My choice.' }] },
        { t: "(Put a hand on her shoulder.)", notes: 3, then: [{ n: "Solar put a hand on her shoulder. Sumire put her own hand over it, and held on, and took a breath." }] }
      ] },
      { s: 'kasumi', f: 'serious', t: "No, Doctor. Thank you. I know you mean it kindly. But no." },
      { s: 'kasumi', f: 'serious', t: "Kasumi died saving me. If I become her, I throw that away. She saved me. Me. Sumire. So I'm going to live as Sumire. Even if it hurts." },
      { s: 'maruki', t: '...' },
      { n: "Maruki looked at her for a long time. Then he smiled, sadly, and took off his glasses and cleaned them on his cardigan, the way people do when they need a second to not look at something." },
      { s: 'maruki', t: "...She'd be very proud of you, I think. I'm proud of you." },
      { n: "He faded that night. Elizabeth told Solar the next morning. She said he'd gone back, wherever back was, and that his page in her compendium had a very gentle final line." }
    ] },

    { after: '12/21', title: '9: who are you to me', place: 'Gekkoukan High · Gym', scene: [
      { n: "The gym, the week before winter break. Sumire was in her leotard again, but the red bow was gone, and her hair was down, and she wore her glasses even on the mat. She'd been practicing for a week. Her own routine. The one her body remembered." },
      { n: "She landed every move." },
      { s: 'kasumi', f: 'happy', t: "Senpai! Did you see? Did you see that?" },
      { s: 'kasumi', f: 'neutral', t: "...Senpai. I want to ask you something. I'm going to ask it as me. Sumire. For the first time." },
      { s: 'kasumi', f: 'blushing', t: "What am I to you?" },
      { route: [
        { t: "Someone I've fallen for. Sumire. You.", route: 'romance', notes: 3, then: [
          { s: 'kasumi', f: 'surprised', t: '...' },
          { s: 'kasumi', f: 'blushing', t: "Me? Not her? Me?" },
          { n: "Solar nodded. Sumire took off her glasses, and wiped her eyes, and put them back on, and then threw her arms around Solar so hard they both nearly fell over on the mat." },
          { s: 'kasumi', f: 'blushing', t: "Me too, Senpai. Me too. Me." }
        ] },
        { t: "My best friend. Whoever you are, I'm on your side.", route: 'friend', notes: 3, then: [
          { s: 'kasumi', f: 'happy', t: "...Whoever I am. Even me, the real me." },
          { s: 'kasumi', f: 'happy', t: "Best friends! Senpai, you're the best. You've always been the best." }
        ] }
      ] }
    ] },

    { after: '1/11', title: '10: vanadis', place: 'Gekkoukan High · Gym', scene: [
      { n: "January. The gym was cold enough to see your breath. Sumire had asked Solar to come at exactly four o'clock, and to sit exactly in the middle of the bleachers, and to not say anything until the end." },
      { n: "Then she performed." },
      { n: "Not Kasumi's routine. Her own. Softer than her sister's, more careful, full of little hesitations that turned out not to be hesitations at all but choices, pauses that made the leaps land harder. The ribbon wasn't red. It was a soft, clear blue. It moved like water." },
      { n: "When she landed the last move, she held it, arms up, and looked straight at Solar on the bleachers, and smiled, and it was a completely different smile from the one in September. It was hers." },
      { s: 'kasumi', f: 'happy', t: "That's me, Senpai. That's what I look like." },
      { ifRoute: 'friend', then: [
        { s: 'kasumi', f: 'happy', t: "When I go home, I'm going to compete as Sumire. Under my own name. For the first time." },
        { choose: [
          { t: "I'll be cheering from another world.", notes: 3, then: [{ s: 'kasumi', f: 'happy', t: "I'll hear you. I'm sure I will." }] },
          { t: "Your sister would be so proud.", notes: 3, then: [{ s: 'kasumi', f: 'sad', t: "...I think so too. For the first time, I think so too." }] }
        ] },
        { n: "She gave Solar the red bow. Kasumi's. She said she didn't need it anymore, and that she wanted it to stay with someone who'd known both of them." }
      ] },
      { ifRoute: 'romance', then: [
        { s: 'kasumi', f: 'blushing', t: "And I wanted the first person to see it to be you. Because you're the person who said my name first." },
        { choose: [
          { t: "Sumire. You were perfect.", notes: 3, then: [
            { s: 'kasumi', f: 'blushing', t: "...Say it again, Senpai." },
            { s: 'solar', t: "Sumire." },
            { n: "She came up the bleachers two at a time and kissed her in the cold gym, glasses fogging, both of them laughing about it." }
          ] },
          { t: "(Go down onto the mat and kiss her.)", notes: 3, then: [
            { s: 'kasumi', f: 'surprised', t: '...!' },
            { s: 'kasumi', f: 'blushing', t: "...My glasses are all fogged up. I don't care at all." }
          ] }
        ] },
        { n: "She tied the blue ribbon around Solar's wrist before they left. She said it was so Solar would remember what she looked like, as herself." }
      ] }
    ] }
  ]
});
