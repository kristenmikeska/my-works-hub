/* Akihiko Sanada · XVII The Star. Social link data for femc-social.js.
   Format: each rank has `after` (earliest in-game date, M/D), `place`, and `scene`, a list of lines:
     { s: speakerId, f: face, t: text }   a line (face = a portrait file name: neutral, happy, sad-2...)
     { n: text }                           narration
     { choose: [{ t, notes, then: [...] }] }   a dialogue choice; notes = ♪ earned (0–3)
     { route: [{ t, route: 'romance'|'friend', notes, then }] }  the friendship/romance turn
     { ifRoute: 'romance'|'friend', then: [...] }   lines only on that route
     { register: id }                      "Registered to the Compendium"
   {name} becomes "Solar". */
FemcSocial.define({
  id: 'akihiko', name: 'Akihiko Sanada', short: 'Akihiko', arcana: 'Star', numeral: 'XVII', from: 'Persona 3',
  home: { place: 'Gekkoukan High · Boxing Club', slot: 0, days: [1, 2, 3, 4, 5, 6], hint: 'After school, Monday to Saturday, at the boxing club.' },
  romance: true,
  music: 'assets/femc/music/tender-feeling.mp3',
  cast: { junpei: 'Junpei', mitsuru: 'Mitsuru' },
  stamps: { 1: ['senpai'], 10: ['max-rank'] },
  ranks: [
    { after: '4/20', place: 'Gekkoukan High · 2F Hallway', scene: [
      { n: "Akihiko Sanada is leaning against the window by the stairs, one arm wrapped around his ribs like he's daring them to complain." },
      { s: 'akihiko', f: 'neutral', t: "Hey. You're the transfer student, right? The one who just moved into the dorm." },
      { s: 'akihiko', f: 'serious', t: "Sorry, I'm not usually this... stationary. Cracked a couple of ribs a few weeks back. Doctor says nothing fun until they heal." },
      { choose: [
        { t: 'Does it hurt?', notes: 1, then: [{ s: 'akihiko', f: 'happy', t: 'Only when I laugh. Or breathe. Or think about the gym.' }] },
        { t: "You don't look like you sit still well.", notes: 3, then: [{ s: 'akihiko', f: 'happy', t: "Ha! You've known me five minutes and you already figured that out." }] },
        { t: 'Maybe just rest, then?', notes: 0, then: [{ s: 'akihiko', f: 'sad-2', t: "...That's what everyone keeps telling me." }] }
      ] },
      { s: 'akihiko', f: 'neutral', t: 'Mitsuru says you handled yourself well the other night. Most people freeze the first time.' },
      { s: 'akihiko', f: 'serious-3', t: "I want to see that again. Once I'm cleared, come run with me. Early mornings, along the river." },
      { choose: [
        { t: "I'll try to keep up.", notes: 3, then: [{ s: 'akihiko', f: 'serious', t: "Don't try. Do it." }] },
        { t: 'How early is early?', notes: 1, then: [{ s: 'akihiko', f: 'happy', t: "Five-thirty. ...You'll get used to it." }] }
      ] },
      { s: 'akihiko', f: 'happy', t: "Good. Then it's settled, Rookie." },
      { n: 'He says the nickname like it has already been decided. It probably has.' }
    ] },

    { after: '5/10', place: 'Hagakure Ramen', scene: [
      { n: 'The ribs have healed. You know this because he has spent the whole week running like something is chasing him.' },
      { s: 'akihiko', f: 'happy', t: "Best ramen in Iwatodai. I'm not exaggerating. I've done the research." },
      { s: 'junpei', t: "\"The research.\" He means he's eaten here four hundred times." },
      { register: 'junpei' },
      { s: 'akihiko', f: 'neutral', t: 'Junpei. Nobody invited you.' },
      { s: 'junpei', t: "Bro, I invite myself. It's a gift. Yo, {name}, did he give you the protein speech yet? It's like forty minutes." },
      { s: 'akihiko', f: 'serious', t: "It's not a speech. It's information." },
      { choose: [
        { t: "I'd like to hear it.", notes: 3, then: [
          { s: 'akihiko', f: 'surprised', t: '...Really?' },
          { s: 'akihiko', f: 'happy', t: 'Okay. So. Muscle recovery depends on three things, and the first one is—' },
          { s: 'junpei', t: "Oh no. Oh no, you've done it now." }
        ] },
        { t: 'Maybe the short version.', notes: 2, then: [
          { s: 'akihiko', f: 'happy', t: "Eat more meat. Sleep. Don't skip leg day. That's the short version." },
          { s: 'junpei', t: "Honestly that's the long version too." }
        ] },
        { t: 'Pass.', notes: 0, then: [{ s: 'akihiko', f: 'sad-2', t: '...Fine. Your loss.' }] }
      ] },
      { s: 'junpei', t: "Hey, speaking of weird. Anyone else seen the girl up at Naganaki Shrine? Fox ears? Sweeping like she owns the place?" },
      { s: 'akihiko', f: 'neutral', t: 'Fox ears.' },
      { s: 'junpei', t: "I'm just sayin'! Iwatodai's been getting weird lately." },
      { s: 'akihiko', f: 'serious-3', t: '...Weirder than usual, you mean.' },
      { n: "He orders a second bowl with extra pork. He doesn't look at the menu." }
    ] },

    { after: '6/1', place: 'Iwatodai Dorm · Lounge', scene: [
      { n: 'The lounge is empty except for Akihiko, who is very obviously pretending to read a boxing magazine.' },
      { s: 'akihiko', f: 'neutral', t: 'Hey, Rookie. Sit down a second.' },
      { s: 'akihiko', f: 'sad-2', t: "Can I ask you something? You've moved around a lot, right? Lots of different places." },
      { choose: [
        { t: "More than I'd like.", notes: 2, then: [{ s: 'akihiko', f: 'sad', t: 'Yeah. I figured.' }] },
        { t: 'Why do you ask?', notes: 1, then: [{ s: 'akihiko', f: 'sad-2', t: 'No reason. ...Okay, a reason.' }] }
      ] },
      { s: 'akihiko', f: 'sad-3', t: "There's a guy I grew up with. Shinjiro. He used to live here. He was part of all this." },
      { s: 'akihiko', f: 'sad', t: "He walked away two years ago. Doesn't answer when I knock. Doesn't come back." },
      { choose: [
        { t: 'You still go see him, don\'t you?', notes: 3, then: [
          { s: 'akihiko', f: 'surprised', t: "...How'd you know that?" },
          { s: 'akihiko', f: 'sad-2', t: 'Every couple of weeks. He tells me to get lost. I go anyway.' }
        ] },
        { t: 'Do you know why he left?', notes: 1, then: [{ s: 'akihiko', f: 'sad-4', t: "I know why. I just don't know how to fix it." }] },
        { t: 'Maybe he needs space.', notes: 0, then: [{ s: 'akihiko', f: 'serious-3', t: 'Two years is a lot of space.' }] }
      ] },
      { s: 'akihiko', f: 'neutral', t: "Sorry. That got heavy. You're easy to talk to, that's all." },
      { s: 'akihiko', f: 'happy', t: "Come on. If I sit here any longer I'm going to start doing push-ups on the coffee table." },
      { n: 'Later, he does push-ups on the coffee table anyway. Yukari is not pleased.' }
    ] },

    { after: '6/22', place: 'Gekkoukan High · Boxing Club', scene: [
      { n: 'The gym smells like tape and sweat. Akihiko is working the heavy bag like it insulted his family.' },
      { s: 'akihiko', f: 'serious-3', t: "Summer tournament's in three weeks. I've won the last two. I'm not losing the third." },
      { s: 'akihiko', f: 'neutral', t: 'Hold the bag for me?' },
      { choose: [
        { t: 'Sure.', notes: 2, then: [
          { n: "Every punch rattles your teeth. He doesn't hold back, and you don't let go." },
          { s: 'akihiko', f: 'happy', t: 'Not bad. Most people step back by now.' }
        ] },
        { t: 'Only if you go easy.', notes: 0, then: [
          { s: 'akihiko', f: 'serious', t: "I don't do easy." },
          { n: "He doesn't. Your arms ache for two days." }
        ] }
      ] },
      { s: 'mitsuru', f: 'neutral', t: "Akihiko. I thought I'd find you here." },
      { register: 'mitsuru' },
      { s: 'mitsuru', f: 'neutral', t: "You missed the meeting. Again. It's been on the schedule for a week." },
      { s: 'akihiko', f: 'sad-2', t: '...Was that today?' },
      { s: 'mitsuru', f: 'neutral', t: "And you're our newest member. I hope he isn't teaching you to ignore every responsibility that doesn't involve punching." },
      { choose: [
        { t: "He's teaching me to hold a bag.", notes: 2, then: [
          { s: 'mitsuru', f: 'neutral', t: 'A practical skill, at least.' },
          { s: 'akihiko', f: 'happy', t: 'See? Practical.' }
        ] },
        { t: "I'll make sure he's at the next one.", notes: 3, then: [
          { s: 'mitsuru', f: 'surprised', t: "...I'd appreciate that." },
          { s: 'akihiko', f: 'surprised', t: 'Hey. Whose side are you on?' }
        ] }
      ] },
      { n: 'Mitsuru leaves. Akihiko watches the door for a moment after she has gone.' },
      { s: 'akihiko', f: 'neutral', t: "She's been carrying all of this since we were kids. The Dark Hour. Her family. I don't know how she does it." },
      { s: 'akihiko', f: 'serious-3', t: "That's why I train. So I'm one less thing she has to worry about." }
    ] },

    { after: '7/21', place: 'Naganaki Shrine · Stone Steps', scene: [
      { n: "Summer vacation. Akihiko has discovered that the shrine's stone steps are \"perfect for intervals.\" You have discovered that you can hate stairs." },
      { s: 'akihiko', f: 'happy', t: "That's ten. Take a break. You earned it." },
      { n: 'You sit on the top step. Your headphones are around your neck, still playing.' },
      { s: 'akihiko', f: 'neutral', t: 'You always have those on. What are you listening to?' },
      { n: 'You hand them over. He holds them to one ear, a little awkwardly.' },
      { s: 'akihiko', f: 'surprised', t: "...Huh. I've never heard this before. It sounds like it's from somewhere else entirely." },
      { choose: [
        { t: "It's from a world far away.", notes: 3, then: [{ s: 'akihiko', f: 'neutral', t: 'Yeah? It suits you. It sounds like a story.' }] },
        { t: 'Do you like it?', notes: 2, then: [{ s: 'akihiko', f: 'happy', t: "It's not what I'd train to. ...But I'd listen to it again." }] }
      ] },
      { s: 'akihiko', f: 'neutral', t: 'Can I tell you why I really fight?' },
      { s: 'akihiko', f: 'sad', t: "When I was a kid, I couldn't protect anyone. I was too small. Too slow. I promised myself that would never happen again." },
      { s: 'akihiko', f: 'serious-3', t: "So I keep getting stronger. Every day. Even when it doesn't make sense to anyone else." },
      { choose: [
        { t: 'It makes sense to me.', notes: 3, then: [
          { s: 'akihiko', f: 'surprised', t: '...' },
          { s: 'akihiko', f: 'happy', t: 'Thanks. {name}.' }
        ] },
        { t: "Who couldn't you protect?", notes: 1, then: [
          { s: 'akihiko', f: 'sad-2', t: "...Another time. I promise." },
          { s: 'akihiko', f: 'happy', t: 'Come on, {name}. Ten more.' }
        ] }
      ] },
      { n: "It's the first time he's used your name instead of \"Rookie.\" He doesn't seem to notice. You do." }
    ] },

    { after: '8/10', place: 'Iwatodai Dorm · Rooftop', scene: [
      { n: 'The sun is going down over the bay. Akihiko has been quiet all afternoon.' },
      { s: 'akihiko', f: 'sad-2', t: 'Shinji came back. To S.E.E.S. Did you hear?' },
      { choose: [
        { t: "That's good, isn't it?", notes: 1, then: [{ s: 'akihiko', f: 'sad', t: "It should be. I've wanted this for two years. So why does it feel like something's wrong?" }] },
        { t: "You don't seem happy.", notes: 3, then: [{ s: 'akihiko', f: 'sad-3', t: "...You notice everything, don't you." }] }
      ] },
      { s: 'akihiko', f: 'sad', t: "I told you there was someone I couldn't protect. Her name was Miki. My little sister." },
      { s: 'akihiko', f: 'sad-4', t: 'We grew up in an orphanage, Shinji and Miki and me. There was a fire. I was a kid.' },
      { s: 'akihiko', f: 'sad-3', t: "I couldn't get to her. I could hear her, and I couldn't get to her." },
      { n: "He doesn't say anything for a long time. Neither do you." },
      { choose: [
        { t: '(Stay quiet beside him.)', notes: 3, then: [
          { n: 'You stay. It seems to be the right answer.' },
          { s: 'akihiko', f: 'sad-4', t: "Thanks. For not telling me it wasn't my fault. Everyone tells me that." }
        ] },
        { t: "It wasn't your fault.", notes: 1, then: [{ s: 'akihiko', f: 'sad', t: "I know. I know that. I just don't believe it yet." }] }
      ] },
      { s: 'akihiko', f: 'neutral', t: "Shinji pulled me out of there. That's why I can't let him go now." },
      { s: 'akihiko', f: 'serious-3', t: "Whatever's wrong with him, I'm going to find out." }
    ] },

    { after: '9/1', place: 'Gekkoukan High · Rooftop', scene: [
      { n: 'September. The air is still hot, but the school roof catches the wind.' },
      { s: 'akihiko', f: 'neutral', t: 'Funny. I used to come up here to clear my head. Now I come up here hoping you\'ll show up.' },
      { choose: [
        { t: "Then I'll keep showing up.", notes: 3, then: [{ s: 'akihiko', f: 'blushing', t: "...Good. That's... good." }] },
        { t: 'You could just ask, you know.', notes: 2, then: [{ s: 'akihiko', f: 'happy', t: 'Yeah, well. Asking is harder than running ten kilometers.' }] }
      ] },
      { s: 'akihiko', f: 'sad-2', t: "Shinji's been different since he came back. Tired. He hides it, but he's taking something. Pills." },
      { s: 'akihiko', f: 'serious-3', t: "He won't tell me what they are. He gets this look like he's already decided something, and he isn't going to let me talk him out of it." },
      { choose: [
        { t: 'Ask him straight out.', notes: 1, then: [{ s: 'akihiko', f: 'sad', t: "I did. He told me to mind my own business. Then he made me dinner. That's Shinji." }] },
        { t: 'Maybe he needs you to trust him.', notes: 2, then: [{ s: 'akihiko', f: 'sad-3', t: "...Maybe. I don't know how to trust him and worry at the same time." }] }
      ] },
      { s: 'akihiko', f: 'neutral', t: 'Hey. If something happens. If I go running off somewhere stupid with my head down...' },
      { s: 'akihiko', f: 'sad-2', t: 'Pull me back. Okay?' },
      { n: "You promise. He looks relieved, like he's been carrying the question for weeks." }
    ] },

    { after: '10/10', place: 'Paulownia Mall', scene: [
      { n: "October. It's been a little over a week since that night. Akihiko asked you to come to the mall, and then hasn't bought anything." },
      { s: 'akihiko', f: 'neutral', t: "Sorry. I just didn't want to be in the dorm." },
      { s: 'akihiko', f: 'sad-4', t: "I keep going back to that night. Running it over and over. Every version where I'm faster." },
      { choose: [
        { t: 'Tell me about him.', notes: 3, then: [
          { s: 'akihiko', f: 'surprised', t: '...' },
          { s: 'akihiko', f: 'sad-3', t: "He couldn't cook when we were kids. He taught himself. For Miki and me." },
          { s: 'akihiko', f: 'sad-2', t: 'Burned everything for a year straight. We ate it anyway.' }
        ] },
        { t: "You couldn't have changed it.", notes: 1, then: [{ s: 'akihiko', f: 'sad', t: "That's what I keep telling myself. It's not working yet." }] }
      ] },
      { s: 'akihiko', f: 'sad', t: "I've been training so hard I can barely stand. Mitsuru made me stop. I yelled at her. I've never yelled at her." },
      { s: 'akihiko', f: 'sad-2', t: "I don't know what to do with this if I can't hit it." },
      { choose: [
        { t: "You don't have to be strong all the time.", notes: 3, then: [
          { s: 'akihiko', f: 'sad-4', t: '...' },
          { s: 'akihiko', f: 'sad-3', t: "Funny. That's exactly what Shinji would have said." }
        ] },
        { t: "Then let's go hit something.", notes: 2, then: [
          { s: 'akihiko', f: 'surprised', t: '...Ha.' },
          { s: 'akihiko', f: 'happy', t: "Okay. Okay, yeah. Batting cages. You're on." }
        ] }
      ] },
      { n: "Neither of you buys anything. On the walk home, he tells you it's the best afternoon he's had in weeks." }
    ] },

    { after: '11/2', place: 'Iwatodai Station', scene: [
      { n: "November. The station is crowded, and Akihiko keeps checking his watch even though you aren't going anywhere." },
      { s: 'akihiko', f: 'neutral', t: "Can I say something? It's going to come out wrong." },
      { s: 'akihiko', f: 'sad-2', t: 'I spent my whole life getting stronger so I would never lose anyone again. And this year I lost someone anyway.' },
      { s: 'akihiko', f: 'serious-3', t: 'But you kept showing up. Every run. Every stupid bowl of ramen. You pulled me back, like you promised.' },
      { s: 'akihiko', f: 'blushing', t: 'So I want to know. What am I to you?' },
      { route: [
        { t: "Someone I've fallen for.", route: 'romance', notes: 3, then: [
          { s: 'akihiko', f: 'surprised', t: '...' },
          { s: 'akihiko', f: 'blushing', t: 'Oh. Okay. I... okay.' },
          { s: 'akihiko', f: 'blushing', t: "I think I fell first. Somewhere on the shrine steps. I just didn't have a word for it." },
          { n: "He laughs, embarrassed, and doesn't let go of your hand the rest of the way home." }
        ] },
        { t: 'My best friend.', route: 'friend', notes: 3, then: [
          { s: 'akihiko', f: 'happy', t: "Yeah. Yeah, that's it exactly." },
          { s: 'akihiko', f: 'happy', t: "Best friend. I haven't had one of those since Shinji. ...He'd have liked you." },
          { n: "He bumps your shoulder with his, hard enough to make you stumble. It's the most Akihiko thing he could possibly do." }
        ] }
      ] }
    ] },

    { after: '12/1', place: 'Iwatodai Dorm · Lounge', scene: [
      { n: 'December. Someone has strung lights across the lounge windows. Akihiko is sitting on the arm of the couch, holding something badly wrapped in newspaper.' },
      { s: 'akihiko', f: 'neutral', t: "I'm not good at this, so I'm just going to hand it to you." },
      { n: "Inside are his first boxing gloves. Red, worn soft, his name written in the cuff in a kid's handwriting." },
      { ifRoute: 'friend', then: [
        { s: 'akihiko', f: 'happy', t: 'First pair I ever owned. I want you to have them. For when I\'m not around.' },
        { s: 'akihiko', f: 'serious', t: "Not that I'm planning on going anywhere. But you'd know how to use them now." },
        { choose: [
          { t: "I'll take care of them.", notes: 3, then: [{ s: 'akihiko', f: 'happy', t: 'I know you will. You take care of everything, {name}.' }] },
          { t: 'Only if you keep training me.', notes: 3, then: [{ s: 'akihiko', f: 'serious', t: "Deal. Five-thirty. Don't be late." }] }
        ] },
        { n: 'Outside, it starts to snow. He calls it perfect running weather. You throw a pillow at him.' }
      ] },
      { ifRoute: 'romance', then: [
        { s: 'akihiko', f: 'neutral', t: 'I used to think getting stronger meant needing no one.' },
        { s: 'akihiko', f: 'blushing', t: "I was wrong. I'm going to keep getting stronger, {name}. But this time it's so I can stay next to you." },
        { choose: [
          { t: 'Then stay.', notes: 3, then: [{ n: "He does. You sit by the window until the lights are the only thing on, and he doesn't let go of your hand once." }] },
          { t: '(Kiss him.)', notes: 3, then: [
            { s: 'akihiko', f: 'surprised', t: '...!' },
            { s: 'akihiko', f: 'blushing', t: "...I've wanted to do that since the shrine." },
            { n: "Outside, it starts to snow. Neither of you notices for a while." }
          ] }
        ] }
      ] }
    ] }
  ]
});
