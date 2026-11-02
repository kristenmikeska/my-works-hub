/* Phone calls and messages from Contacts (2026-11-02): haechan, jungwon, jihoon, minji, hanni, hyein, mark. Format: data/phone-calls.js header. */
(() => {
  const P = (window.FEMC_GAME_PHONE ||= {}), add = (id, o) => { (P.people ||= {})[id] = o; };

  /* ── Haechan (dorm) ── */
  add('haechan', {
    calls: [
      { id: 'pc-haechan-1', min: 3, scene: [
        { n: "Her phone buzzed once, face-down. Haechan. He never called when a text would do, so she picked up before the second ring." },
        { s: 'haechan', f: 'neutral', t: "What do you want from the konbini." },
        { s: 'solar', f: 'surprised', t: "Hi to you too. Why?" },
        { s: 'haechan', f: 'neutral', t: "I'm standing in it. The man behind the counter's watching me like I'm going to steal the oden. I need a reason to be here that isn't loitering." },
        { choose: [
          { t: "Something sweet. Surprise me.", then: [
            { s: 'haechan', f: 'serious', t: "Surprise you. Okay. That's a lot of trust to put in a man holding a basket." },
            { s: 'haechan', f: 'happy', t: "...There's a strawberry milk with a cat on it. The cat looks stupid. You're getting the cat." }
          ] },
          { t: "Nothing. Come home.", then: [
            { s: 'haechan', f: 'neutral', t: "Mm. I'm getting you something anyway. Now it's a surprise and you can't complain." }
          ] }
        ] },
        { s: 'haechan', f: 'neutral', t: "It'll be on the dorm steps. Don't make it weird when you find it." },
        { s: 'solar', f: 'happy', t: "You called me to say you're leaving something on the steps." },
        { s: 'haechan', f: 'neutral', t: "I called you so I'd know what to leave. Different thing. Bye." }
      ] },
      { id: 'pc-haechan-2', min: 3, scene: [
        { n: "He called while something rumbled in the background, round and steady. She knew that sound. Everybody in the dorm knew that sound." },
        { s: 'haechan', f: 'neutral', t: "Your gray socks are in my dryer." },
        { s: 'solar', f: 'surprised', t: "How are my socks in your dryer?" },
        { s: 'haechan', f: 'serious', t: "Somebody left a wet load sitting in the machine. For an hour. I'm not naming names. I moved it. Some of it was yours. I'm not a monster." },
        { s: 'solar', f: 'flustered', t: "...That was me." },
        { s: 'haechan', f: 'happy', t: "I know it was you. I was being polite. You should try it sometime." },
        { s: 'haechan', f: 'neutral', t: "Twenty minutes left. I'm not folding them. I'm drawing a line at folding." },
        { s: 'solar', f: 'happy', t: "You're going to fold them." },
        { s: 'haechan', f: 'neutral', t: "...Pair them. Maybe. That's not folding. Go do your homework." }
      ] },
      { id: 'pc-haechan-3', min: 6, scene: [
        { n: "He called and then didn't say anything for a second. There were headphones on him somewhere; she could hear a beat leaking out of them, small and tinny." },
        { s: 'solar', f: 'neutral', t: "...Hello?" },
        { s: 'haechan', f: 'neutral', t: "Hold on. Listen to this. Eight bars. Don't say anything until it's done." },
        { n: "He held the phone to the headphones. It was a loop, a bassline and something like rain, and it stopped exactly where it shouldn't." },
        { s: 'haechan', f: 'serious', t: "Bad?" },
        { s: 'solar', f: 'happy', t: "It stops too early." },
        { s: 'haechan', f: 'neutral', t: "Yeah. I know. I wanted to see if you'd hear it." },
        { ifRomance: 'haechan', then: [
          { s: 'haechan', f: 'flustered', t: "You did. Obviously you did. Okay. Go away, I have to fix it now and I can't do it with you breathing on the line." }
        ], else: [
          { s: 'haechan', f: 'happy', t: "You did. Good ears. I'm keeping you as a consultant. The pay is terrible." }
        ] }
      ] },
      { id: 'pc-haechan-4', min: 6, route: 'romance', scene: [
        { n: "He called from somewhere outside. Wind across the phone, a car going by, his footsteps unhurried." },
        { s: 'haechan', f: 'neutral', t: "Nothing's wrong. Before you ask." },
        { s: 'solar', f: 'neutral', t: "Then why are you calling?" },
        { s: 'haechan', f: 'neutral', t: "I'm walking back from the station and it's a long walk and it's boring and you're not on it." },
        { s: 'solar', f: 'flustered', t: "...That's the whole reason?" },
        { s: 'haechan', f: 'happy', t: "That's the whole reason. Talk. About anything. Your day. The weather. I'll pretend to be interested." },
        { s: 'solar', f: 'happy', t: "You'll actually be interested." },
        { s: 'haechan', f: 'neutral', t: "Don't tell anyone. Go on, princess. I've got eleven minutes of hill." }
      ] }
    ],
    topics: [
      { id: 'day', label: 'How was your day?', v: [
        { min: 3, msgs: [ { me: 'how was ur day' }, { them: 'fine' }, { them: 'someone used all the hot water. at noon. who showers at noon' }, { me: 'u do' }, { them: "that's how i know it's a crime" } ] },
        { min: 6, msgs: [ { me: 'how was ur day' }, { them: 'made half a song. deleted a third of it' }, { them: "so like a sixth of a song. don't do the math" }, { me: 'thats progress' }, { them: "that's generous. i'll take it" } ] },
        { min: 6, route: 'romance', end: 'invite', msgs: [ { me: 'how was ur day' }, { them: 'long' }, { them: 'better now' }, { me: 'smooth' }, { them: "i'm not being smooth. i'm reporting" }, { them: 'grin', sticker: 'haechan-1' } ] }
      ] },
      { id: 'plans', label: 'Plans this weekend?', v: [
        { min: 3, msgs: [ { me: 'plans this weekend?' }, { them: 'sleep' }, { them: 'then sleep again but on purpose' }, { me: 'riveting' }, { them: "it's a lifestyle" } ] },
        { min: 6, end: 'invite', msgs: [ { me: 'plans this weekend?' }, { them: "the ramen place under the tracks. the one with no sign" }, { them: "you'd hate it. it's perfect" }, { me: 'i would not hate it' }, { them: "we'll see" } ] }
      ] },
      { id: 'own', label: 'Laundry tonight?', v: [
        { min: 3, msgs: [ { me: 'laundry tonight?' }, { them: 'already went' }, { them: "your stuff isn't in there. i checked. don't thank me" }, { me: 'thank u' }, { them: 'i said' } ] },
        { min: 6, msgs: [ { me: 'laundry tonight?' }, { them: "mm. bring two cans" }, { them: "the machine eats one coin out of three. bring extra" }, { me: 'ok' }, { them: 'vibing', sticker: 'haechan-8' } ] }
      ] }
    ]
  });

  /* ── Jungwon (guesthouse; council room after school) ── */
  add('jungwon', {
    calls: [
      { id: 'pc-jungwon-1', min: 3, scene: [
        { n: "He called at a perfectly ordinary hour. Of course he did." },
        { s: 'jungwon', f: 'neutral', t: "Good afternoon. Is this a convenient time." },
        { s: 'solar', f: 'happy', t: "You know you can just say hi." },
        { s: 'jungwon', f: 'neutral', t: "Hi. Is this a convenient time." },
        { s: 'solar', f: 'neutral', t: "It's fine. What's up?" },
        { s: 'jungwon', f: 'serious', t: "The math worksheet you left in the council room. You stopped at question six. I wanted to know if that was a choice or if you were interrupted." },
        { choose: [
          { t: "I was interrupted.", then: [
            { s: 'jungwon', f: 'neutral', t: "Good. Interruptions can be fixed. I've marked where you were. Don't look at the margin." },
            { s: 'solar', f: 'surprised', t: "What's in the margin?" },
            { s: 'jungwon', f: 'neutral', t: "Nothing. Encouragement. I'll erase it." }
          ] },
          { t: "It was a choice.", then: [
            { s: 'jungwon', f: 'serious', t: "...I respect that. I don't agree with it. Question six is the easy one." },
            { s: 'jungwon', f: 'neutral', t: "It'll be on the second shelf tomorrow. So will tea." }
          ] }
        ] },
        { s: 'jungwon', f: 'neutral', t: "That's all. Thank you for your time." },
        { n: "He hung up before she could laugh at him. She laughed anyway." }
      ] },
      { id: 'pc-jungwon-2', min: 3, scene: [
        { n: "He called and she could hear a kettle somewhere behind him, working itself up to a scream." },
        { s: 'jungwon', f: 'neutral', t: "I have a question about the guesthouse kettle, and you're the only person I know who'd take it seriously." },
        { s: 'solar', f: 'happy', t: "I'm honored." },
        { s: 'jungwon', f: 'serious', t: "It doesn't turn itself off. It whistles until someone comes. Every time. Mark says that's normal. Mark says that about everything." },
        { s: 'solar', f: 'neutral', t: "Some kettles are like that. You just have to go get it." },
        { s: 'jungwon', f: 'neutral', t: "So it's a kettle that needs attending to." },
        { s: 'jungwon', f: 'sad', t: "...That's very inefficient. I don't like how much I relate to it." },
        { s: 'solar', f: 'happy', t: "Go get your kettle, Won." },
        { s: 'jungwon', f: 'neutral', t: "I'm going. Don't call me that while I'm walking. I'll walk into the door." }
      ] },
      { id: 'pc-jungwon-3', min: 6, scene: [
        { n: "He called after the sun had gone down. There was a soft clicking on the line, steady, stone on wood." },
        { s: 'solar', f: 'neutral', t: "Are you playing baduk against yourself again?" },
        { s: 'jungwon', f: 'neutral', t: "I'm losing to myself. It's going badly for both of us." },
        { s: 'jungwon', f: 'serious', t: "Pick a number between one and nineteen. Twice." },
        { s: 'solar', f: 'happy', t: "Four and sixteen." },
        { n: "A click. A long pause." },
        { s: 'jungwon', f: 'surprised', t: "...That was good. That was genuinely good. How did you do that." },
        { s: 'solar', f: 'happy', t: "I have no idea what I just did." },
        { s: 'jungwon', f: 'neutral', t: "I'm going to pretend you did it on purpose. It's better for my morale." }
      ] },
      { id: 'pc-jungwon-4', min: 6, route: 'romance', scene: [
        { n: "He called and for a moment said nothing at all, which from Jungwon was a whole sentence." },
        { s: 'solar', f: 'neutral', t: "Won? You there?" },
        { s: 'jungwon', f: 'neutral', t: "Yes. Sorry. I had something prepared and then you picked up and it left." },
        { s: 'solar', f: 'happy', t: "You prepared something?" },
        { s: 'jungwon', f: 'flustered', t: "Bullet points. Three. The first one was to ask if you'd eaten. The second one was the same as the first one." },
        { s: 'solar', f: 'happy', t: "And the third?" },
        { s: 'jungwon', f: 'neutral', t: "The third one was just your name. I don't know why I wrote it down. I already know it." },
        { s: 'jungwon', f: 'happy', t: "Have you eaten." }
      ] }
    ],
    topics: [
      { id: 'day', label: 'How was your day?', v: [
        { min: 3, msgs: [ { me: 'how was ur day' }, { them: 'productive.' }, { them: 'i reorganized the council room shelves by frequency of use. nobody asked.' }, { me: 'ur so weird' }, { them: "i've been told." } ] },
        { min: 6, msgs: [ { me: 'how was ur day' }, { them: 'i tutored three people and forgot lunch.' }, { them: "before you say anything. i've eaten since." }, { me: 'what did u eat' }, { them: '...a vending machine coffee.' }, { them: "i'll eat something real. i'm putting on my shoes." } ] },
        { min: 6, route: 'romance', end: 'invite', msgs: [ { me: 'how was ur day' }, { them: 'long. fine. improved slightly just now.' }, { me: 'just now?' }, { them: 'when you texted.' }, { them: "i'm stating a fact. please don't screenshot it." } ] }
      ] },
      { id: 'plans', label: 'Plans this weekend?', v: [
        { min: 3, msgs: [ { me: 'plans this weekend?' }, { them: "i've scheduled saturday." }, { them: 'sunday is unscheduled. on principle.' }, { me: 'what happens on sunday' }, { them: "i don't know. that's the principle." } ] },
        { min: 6, end: 'invite', msgs: [ { me: 'plans this weekend?' }, { them: 'kirijo-san says i can use the guesthouse kitchen on sunday.' }, { them: "i'm going to make something. it will probably be bad." }, { me: "i'll taste test" }, { them: 'noted. i was hoping you would.' } ] }
      ] },
      { id: 'own', label: 'Help w my math?', v: [
        { min: 3, msgs: [ { me: 'help w my math?' }, { them: 'which question.' }, { me: 'all of them' }, { them: '...' }, { them: 'council room. after school. bring a pen that works.' } ] },
        { min: 6, msgs: [ { me: 'help w my math?' }, { them: 'yes.' }, { them: "you'll get it on your own on the third try. you always do. i'm just there for the first two." }, { me: 'WON~ :D' }, { them: 'clipboard', sticker: 'jungwon-3' } ] }
      ] }
    ]
  });

  /* ── Jihoon (guesthouse; Game Panic) ── */
  add('jihoon', {
    calls: [
      { id: 'pc-jihoon-1', min: 3, scene: [
        { n: "Jihoon called. The noise behind him was unmistakable: coins, jingles, a hundred machines all wanting something." },
        { s: 'jihoon', f: 'serious', t: "Sol. Emergency. The crane game is Disrespecting me." },
        { s: 'solar', f: 'neutral', t: "That's not an emergency." },
        { s: 'jihoon', f: 'serious', t: "It's an emergency to me. There's a penguin. It's right by the chute. It's been right by the chute for six hundred yen." },
        { choose: [
          { t: "Walk away, Jihoon.", then: [
            { s: 'jihoon', f: 'sad', t: "Walk AWAY? From my son? He's right there. He's looking at me." },
            { s: 'jihoon', f: 'neutral', t: "...Okay, he's looking at the ceiling. But in spirit." }
          ] },
          { t: "Grab it from the left side.", then: [
            { s: 'jihoon', f: 'surprised', t: "The left. The LEFT. Hold on." },
            { n: "A pause. Coins. The crane whirring. A small mechanical thunk." },
            { s: 'jihoon', f: 'happy-2', t: "SOL. I HAVE HIM. I'm naming him after myself." }
          ] }
        ] },
        { s: 'solar', f: 'happy', t: "You called me for this." },
        { s: 'jihoon', f: 'happy', t: "I called you because you're my Witness. Everybody needs one. Mine is you. Unfortunately for both of us." }
      ] },
      { id: 'pc-jihoon-2', min: 3, scene: [
        { n: "He called, and the first thing she heard was breathing. Heavy, deliberate, dramatic." },
        { s: 'solar', f: 'surprised', t: "Are you okay?" },
        { s: 'jihoon', f: 'serious', t: "I'm doing pilates. On the guesthouse floor. On a towel. The towel is too short and the floor is too honest." },
        { s: 'solar', f: 'happy', t: "Why are you calling me during pilates?" },
        { s: 'jihoon', f: 'neutral', t: "Because I need someone to count. Mark counts too fast. He says one-two-three like it's a song." },
        { s: 'solar', f: 'neutral', t: "...Okay. One." },
        { s: 'jihoon', f: 'serious', t: "Slower." },
        { s: 'solar', f: 'happy', t: "Ooooone." },
        { s: 'jihoon', f: 'happy', t: "Perfect. Terrible. Keep going. My core is a temple and you're the bell." }
      ] },
      { id: 'pc-jihoon-3', min: 6, route: 'romance', scene: [
        { n: "He called, and for once there was no noise behind him at all. Just him, a little quieter than usual." },
        { s: 'jihoon', f: 'neutral', t: "Hey. It's me. The Almighty Hoon. You know." },
        { s: 'solar', f: 'happy', t: "I know who you are, Jihoon." },
        { s: 'jihoon', f: 'neutral', t: "Right. Good. I was just checking your voice still did the thing." },
        { s: 'solar', f: 'surprised', t: "What thing?" },
        { s: 'jihoon', f: 'surprised', t: "Nothing. The thing where it's annoying. It's still annoying. Very annoying. I'm going to hang up now and think about how annoying it is." },
        { s: 'solar', f: 'happy', t: "You're not hanging up." },
        { s: 'jihoon', f: 'happy', t: "...No. I'm not. Talk to me for five minutes. Then I'll be insufferable again, I promise." }
      ] }
    ],
    topics: [
      { id: 'day', label: 'How was your day?', v: [
        { min: 3, msgs: [ { me: 'how was ur day' }, { them: 'Iconic. as always' }, { them: 'a child at game panic asked if i was famous' }, { me: 'and what did u say' }, { them: 'Not Yet' } ] },
        { min: 6, msgs: [ { me: 'how was ur day' }, { them: 'the desk lady made me eat three rice balls' }, { them: 'i said no to the third one and she just Looked At Me' }, { me: 'so u ate it' }, { them: 'I Am Not A Fool, Sol' } ] },
        { min: 6, route: 'romance', end: 'invite', msgs: [ { me: 'how was ur day' }, { them: 'boring until now' }, { them: "dont let that go to ur head" }, { me: 'too late' }, { them: 'hugging a pillow', sticker: 'jihoon-2' } ] }
      ] },
      { id: 'plans', label: 'Plans this weekend?', v: [
        { min: 3, msgs: [ { me: 'plans this weekend?' }, { them: 'pilates. obviously' }, { them: 'then the arcade. to recover from pilates' }, { me: 'have u done pilates once since u got here' }, { them: 'Next Question' } ] },
        { min: 6, end: 'invite', msgs: [ { me: 'plans this weekend?' }, { them: 'air hockey rematch vs Yang' }, { them: 'i need someone on my side for Morale' }, { me: "i'm on his side" }, { them: '#betrayed' }, { them: 'come anyway. ur still my Witness' } ] }
      ] },
      { id: 'own', label: 'Crane game update', v: [
        { min: 3, msgs: [ { me: 'crane game update' }, { them: 'it moved the penguin' }, { them: 'FURTHER from the chute' }, { me: 'lmaooo' }, { them: 'its Personal now' } ] },
        { min: 6, msgs: [ { me: 'crane game update' }, { them: 'won a frog' }, { them: 'didnt want the frog. the frog is ur problem now' }, { me: 'i love him' }, { them: 'king on a throne', sticker: 'jihoon-1' } ] }
      ] }
    ]
  });

  /* ── Minji (guesthouse; Seaside Park, Game Panic) ── */
  add('minji', {
    calls: [
      { id: 'pc-minji-1', min: 3, scene: [
        { n: "Minji called. There was wind on her end, and gulls, and the slap of water against something." },
        { s: 'minji', f: 'happy', t: "Hi. Sorry. Quick question. Are you near a window?" },
        { s: 'solar', f: 'surprised', t: "...Yes?" },
        { s: 'minji', f: 'neutral', t: "Look out of it. Look at the sky. Tell me what color it is where you are." },
        { choose: [
          { t: "Kind of pink. Kind of gray.", then: [
            { s: 'minji', f: 'happy', t: "Same here. Okay. Good. That means it's real and not just my lens." },
            { s: 'minji', f: 'neutral', t: "I'm filming it for you. You don't have to be in it. You're in it anyway, kind of. You looked at the same thing." }
          ] },
          { t: "I'm not getting up.", then: [
            { s: 'minji', f: 'flustered', t: "That's fair. That's completely fair. I'll describe it. It's pink and gray. Like a bruise, but nice." }
          ] }
        ] },
        { s: 'solar', f: 'happy', t: "You called me to look at the sky." },
        { s: 'minji', f: 'neutral', t: "Mm. It's better with two. Okay. That's it. Bye, duo." }
      ] },
      { id: 'pc-minji-2', min: 3, scene: [
        { n: "She called, and the background was full of clicking keys and someone yelling in a headset that wasn't hers." },
        { s: 'minji', f: 'serious', t: "Sol. I need you to tell me I'm not bad at this game." },
        { s: 'solar', f: 'happy', t: "You're literally Grandmaster." },
        { s: 'minji', f: 'flustered', t: "I know. Thank you. I needed to hear it from a person and not a ranking. My support just told me to uninstall." },
        { s: 'solar', f: 'neutral', t: "Was it your fault?" },
        { s: 'minji', f: 'neutral', t: "...A little. I was filming the guesthouse cat on my phone instead of watching my flank." },
        { s: 'solar', f: 'happy', t: "That's a good reason." },
        { s: 'minji', f: 'happy', t: "That's what I said. He didn't agree. I'm muting him. Want to queue later? I'll be a better duo. Probably." }
      ] },
      { id: 'pc-minji-3', min: 6, route: 'romance', scene: [
        { n: "Minji called, and then laughed a little, at herself, before she said anything." },
        { s: 'minji', f: 'flustered', t: "Hi. I didn't have a reason. I had one and then I lost it on the way to pressing call." },
        { s: 'solar', f: 'happy', t: "You don't need one." },
        { s: 'minji', f: 'neutral', t: "I know. I keep forgetting I don't need one. I'm used to having a shot list." },
        { s: 'minji', f: 'happy', t: "Can I ask you something? You don't have to answer." },
        { s: 'solar', f: 'neutral', t: "Ask." },
        { s: 'minji', f: 'flustered', t: "Are you smiling right now? I can hear something. I want to know if I'm right." },
        { s: 'solar', f: 'flustered', t: "...Maybe." },
        { s: 'minji', f: 'happy', t: "I'm right. Okay. That's all. That was the reason. I found it." }
      ] }
    ],
    topics: [
      { id: 'day', label: 'How was your day?', v: [
        { min: 3, msgs: [ { me: 'how was ur day' }, { them: 'good! filmed a pigeon for 20 min' }, { them: 'he was rly committed to a french fry' }, { me: 'a legend' }, { them: 'a leading man :]' } ] },
        { min: 6, msgs: [ { me: 'how was ur day' }, { them: 'the desk lady let me film her making rice crackers' }, { them: "i asked like 20 times. she said yes on the 3rd. i asked 17 more anyway" }, { me: 'thats so u' }, { them: 'clapperboard', sticker: 'minji-1' } ] },
        { min: 6, route: 'romance', end: 'invite', msgs: [ { me: 'how was ur day' }, { them: 'ok. better now tho' }, { them: "the light's doing the gold thing outside" }, { them: 'made me think of u. sorry. cheesy (:' }, { me: 'its ok. i like cheese' }, { them: ';]' } ] }
      ] },
      { id: 'plans', label: 'Plans this weekend?', v: [
        { min: 3, msgs: [ { me: 'plans this weekend?' }, { them: 'seaside park. if the light cooperates' }, { them: 'ranked if it doesnt' }, { me: 'and if both' }, { them: 'then im a very busy woman :]' } ] },
        { min: 6, end: 'invite', msgs: [ { me: 'plans this weekend?' }, { them: 'nothing yet!!' }, { them: 'i was kind of hoping u had plans and could put me in them' }, { me: 'smooth' }, { them: 'i rehearsed it (:' } ] }
      ] },
      { id: 'own', label: 'Duo later?', v: [
        { min: 3, msgs: [ { me: 'duo later?' }, { them: 'YES' }, { them: 'ill carry. u heal. its a perfect system' }, { me: 'i always heal' }, { them: 'bc ur good at it :]' } ] },
        { min: 6, msgs: [ { me: 'duo later?' }, { them: 'obviously. 9?' }, { them: 'ill bring snacks to my own desk and pretend ur here' }, { me: 'save me some' }, { them: 'popcorn', sticker: 'minji-9' } ] }
      ] }
    ]
  });

  /* ── Hanni (dorm) ── */
  add('hanni', {
    calls: [
      { id: 'pc-hanni-1', min: 3, scene: [
        { n: "Hanni called. She never let it ring long before she started talking." },
        { s: 'hanni', f: 'happy', t: "Sol! Hi! Sorry! Have you eaten? You don't have to answer that. Actually you do. Have you?" },
        { s: 'solar', f: 'happy', t: "Hi, Hanni. Yes. Sort of." },
        { s: 'hanni', f: 'serious', t: "Sort of means a snack. I know sort of. I invented sort of." },
        { choose: [
          { t: "It was a real meal. Promise.", then: [
            { s: 'hanni', f: 'sad', t: "...Okay. I can hear it on your face, Sol. Even through the phone." },
            { s: 'hanni', f: 'happy', t: "There's cut fruit in the dorm fridge. Middle shelf. It has your name on it. Literally. I wrote it." }
          ] },
          { t: "It was a granola bar.", then: [
            { s: 'hanni', f: 'happy', t: "Thank you for telling me the truth! That's all I want. Middle shelf. Cut fruit. I wrote your name on it." }
          ] }
        ] },
        { s: 'solar', f: 'neutral', t: "You called to tell me about fruit." },
        { s: 'hanni', f: 'neutral', t: "I called to hear you. The fruit's a bonus. Okay. Love you. Bye. Eat it!" }
      ] },
      { id: 'pc-hanni-2', min: 3, scene: [
        { n: "She called in a whisper. Somewhere behind her, very faintly, there was a candle-crackle and the hum of the dorm heater." },
        { s: 'hanni', f: 'neutral', t: "Sol. I'm meditating. I'm supposed to be meditating. I've been sitting here ten minutes and I just keep thinking about the commercial with the rice." },
        { s: 'solar', f: 'happy', t: "The one with the grandma?" },
        { s: 'hanni', f: 'sad', t: "The one with the grandma. She puts the rice ball in his bag and he doesn't even know. I'm going to cry. I'm meditating and I'm going to cry." },
        { s: 'solar', f: 'neutral', t: "That's kind of meditating." },
        { s: 'hanni', f: 'surprised', t: "...Is it? Oh. Oh, that's so nice. You're right. That's being present." },
        { s: 'hanni', f: 'happy', t: "Okay. I'm going back. I'm going to be present about the grandma. Thank you. Sorry. Bye." }
      ] },
      { id: 'pc-hanni-3', min: 6, scene: [
        { n: "Hanni called from the café; Solar could hear the steam wand and a spoon on a saucer." },
        { s: 'hanni', f: 'happy', t: "I'm at Chagall. I'm at our table. I'm not asking you to come. I'm just telling you the table is warm." },
        { s: 'solar', f: 'happy', t: "That's asking me to come." },
        { s: 'hanni', f: 'flustered', t: "It's describing a table! Tables are allowed to be described!" },
        { s: 'hanni', f: 'neutral', t: "The barista put a little leaf in my latte. I thanked her twice. She looked at me like I was a dog that learned a trick." },
        { s: 'solar', f: 'neutral', t: "You're going to thank her a third time on the way out." },
        { s: 'hanni', f: 'happy', t: "Obviously! She deserves three! Okay. Bye. The table says hi." }
      ] }
    ],
    topics: [
      { id: 'day', label: 'How was your day?', v: [
        { min: 3, msgs: [ { me: 'how was ur day' }, { them: 'good!! i found a bakery that does melon bread warm!!' }, { them: 'i bought 3. one is urs. one is hyeins. one is also mine' }, { me: 'thats 2 for u' }, { them: 'i said what i said!!' } ] },
        { min: 6, msgs: [ { me: 'how was ur day' }, { them: 'quiet!! did the kitchen. watered the plant that might be fake' }, { them: "i can't tell if its fake. i water it anyway" }, { me: 'thats so u' }, { them: "if it's fake it's still nice to be cared for!!" } ] }
      ] },
      { id: 'plans', label: 'Plans this weekend?', v: [
        { min: 3, msgs: [ { me: 'plans this weekend?' }, { them: 'a face mask and reruns!!' }, { them: 'very exciting. very dangerous. i might fall asleep at 9' }, { me: 'wild' }, { them: "i'm a wild woman sol" } ] },
        { min: 6, end: 'invite', msgs: [ { me: 'plans this weekend?' }, { them: 'nothing!!! which means u!!!' }, { them: 'sorry. too much. i mean if ur free!!' }, { me: 'im free' }, { them: 'YAY' } ] }
      ] },
      { id: 'own', label: 'Window table?', v: [
        { min: 3, end: 'invite', msgs: [ { me: 'window table?' }, { them: 'ALWAYS!!' }, { them: "i'll order for u. sorry. bossy" }, { me: 'u can order for me' }, { them: 'ok good bc i already did!!' } ] }
      ] }
    ]
  });

  /* ── Hyein (dorm, second floor) ── */
  add('hyein', {
    calls: [
      { id: 'pc-hyein-1', min: 3, scene: [
        { n: "Hyein called. She started talking before Solar had finished saying hello, the way she always did." },
        { s: 'hyein', f: 'serious', t: "Sol. Okay. I'm on the second floor of the mall. There's a mannequin. I need you to understand what they've done to this mannequin." },
        { s: 'solar', f: 'happy', t: "What have they done to the mannequin?" },
        { s: 'hyein', f: 'serious', t: "Plaid. On plaid. Different plaids. And a belt. Over the coat. Over the BUTTONS." },
        { choose: [
          { t: "Maybe it's a choice.", then: [
            { s: 'hyein', f: 'surprised', t: "A CHOICE?" },
            { s: 'hyein', f: 'neutral', t: "...Okay. Okay, maybe it's a choice. It's a bad choice. But it's brave. I respect bravery. I'm still reporting it." }
          ] },
          { t: "That's a crime.", then: [
            { s: 'hyein', f: 'happy', t: "THANK you. Someone in this city has eyes. I'm staring at it so it knows it's been seen." }
          ] }
        ] },
        { s: 'solar', f: 'neutral', t: "People are going to think you're fighting a mannequin." },
        { s: 'hyein', f: 'happy', t: "I am fighting a mannequin. And I'm winning. Okay. Ttyl." },
        { n: "She stayed on another four minutes." }
      ] },
      { id: 'pc-hyein-2', min: 3, scene: [
        { n: "Hyein called. Behind her a sewing machine was going, then stopped, then went again." },
        { s: 'hyein', f: 'neutral', t: "Quick question, do you own a red that isn't sad?" },
        { s: 'solar', f: 'surprised', t: "A what?" },
        { s: 'hyein', f: 'serious', t: "A red. Fabric. Clothes. Anything. Everything red in this building is a sad red. Like a stop sign that's tired." },
        { s: 'solar', f: 'neutral', t: "I have a red scarf." },
        { s: 'hyein', f: 'happy', t: "Is it a happy red?" },
        { s: 'solar', f: 'happy', t: "It's... a medium red." },
        { s: 'hyein', f: 'neutral', t: "Medium red. Okay. Bring it down. I need to look at it. I won't cut it. I'll think about cutting it. That's different." }
      ] },
      { id: 'pc-hyein-3', min: 6, scene: [
        { n: "Hyein called and didn't say anything for a second, which was so unusual Solar sat up." },
        { s: 'solar', f: 'serious', t: "Hyein? You okay?" },
        { s: 'hyein', f: 'flustered', t: "I'm fine. I'm fine! I just finished something. Like actually finished it. Hem and everything." },
        { s: 'hyein', f: 'neutral', t: "And there was nobody in the room to tell, so I called you. Which is normal. I'm being normal." },
        { s: 'solar', f: 'happy', t: "What is it?" },
        { s: 'hyein', f: 'happy', t: "It's a skirt. It's a good skirt. It's not for anyone. It's just good." },
        { s: 'solar', f: 'happy', t: "I'm proud of you." },
        { s: 'hyein', f: 'flustered', t: "...Okay, don't say it like that, I'll cry on the hem. Ttyl. I love you. Ttyl." }
      ] }
    ],
    topics: [
      { id: 'day', label: 'How was your day?', v: [
        { min: 3, msgs: [ { me: 'how was ur day' }, { them: 'i fixed the machine' }, { them: 'by hitting it' }, { me: 'thats not fixing' }, { them: 'it WORKS now. that is the definition of fixing' } ] },
        { min: 6, msgs: [ { me: 'how was ur day' }, { them: 'a lady on the train had THE coat' }, { them: 'camel. long. perfect shoulders. i almost followed her' }, { me: 'did u' }, { them: 'for one stop. fr. i got off. i have morals' } ] }
      ] },
      { id: 'plans', label: 'Plans this weekend?', v: [
        { min: 3, msgs: [ { me: 'plans this weekend?' }, { them: 'fabric store. then a different fabric store' }, { them: 'to be mean about the first fabric store' }, { me: 'can i come' }, { them: 'only if u agree w me loudly' } ] },
        { min: 6, end: 'invite', msgs: [ { me: 'plans this weekend?' }, { them: 'hemming. sketching. judging' }, { them: 'need a body to hold things up on. its u. ur the body' }, { me: 'i was born for this' }, { them: 'LTRLY' } ] }
      ] },
      { id: 'own', label: 'Rate my outfit', v: [
        { min: 3, msgs: [ { me: 'rate my outfit' }, { them: 'send a pic. full length. no angles' }, { me: 'its the gray cardigan' }, { them: 'ok i dont need the pic' }, { them: '9/10. the 1 is the socks. i know about the socks' } ] },
        { min: 6, msgs: [ { me: 'rate my outfit' }, { them: 'is it the coat' }, { me: 'its the coat' }, { them: '10/10. obviously. i made it' }, { them: 'the whole station better stare' } ] }
      ] }
    ]
  });

  /* ── Mark (guesthouse; station piano) ── */
  add('mark', {
    calls: [
      { id: 'pc-mark-1', min: 3, scene: [
        { n: "Mark called. There was a station announcement under him, a train sliding in, and four short notes of a chime." },
        { s: 'mark', f: 'neutral', t: "Sol! Hey. Sorry. Did you hear that? Just now?" },
        { s: 'solar', f: 'surprised', t: "The chime?" },
        { s: 'mark', f: 'surprised', t: "Yes. Yes! Okay. So that's a different one than yesterday. Same station. Different chime. Nobody told me they could do that." },
        { choose: [
          { t: "Maybe it's a different platform.", then: [
            { s: 'mark', f: 'neutral', t: "...Oh. Oh, that's way less exciting. That's probably it. Give me a second." },
            { s: 'mark', f: 'neutral', t: "Yeah, I'm on two. I'm always on one. Okay. Still counts. New chime." }
          ] },
          { t: "Write it down.", then: [
            { s: 'mark', f: 'neutral', t: "Already did. I have a whole notebook. It's normal. It's a normal amount of notebook." }
          ] }
        ] },
        { s: 'solar', f: 'happy', t: "You called to tell me about the chime." },
        { s: 'mark', f: 'flustered', t: "I mean, yeah. Who else is gonna care? Okay. Train's here. Bye, Sol." }
      ] },
      { id: 'pc-mark-2', min: 3, scene: [
        { n: "Mark called. It was quiet behind him; she guessed the guesthouse lounge, someone's TV down low." },
        { s: 'mark', f: 'neutral', t: "Hey. Okay, weird question. What's a song you can't stop humming right now?" },
        { s: 'solar', f: 'neutral', t: "Why?" },
        { s: 'mark', f: 'neutral', t: "I'm making a list for the station piano. Requests. I need real ones. If I ask Jihoon he just says his own name." },
        { s: 'solar', f: 'happy', t: "There's a convenience store jingle I can't get out of my head." },
        { s: 'mark', f: 'surprised', t: "The one with the doorbell bit at the end? Oh, that's so good. That's honestly a great request." },
        { s: 'mark', f: 'neutral', t: "I'm writing it down. Request number one. From Sol. Okay. Come hear it sometime. No pressure. Like, negative pressure." }
      ] },
      { id: 'pc-mark-3', min: 6, scene: [
        { n: "Mark called, and she could hear him walking, a little out of breath." },
        { s: 'mark', f: 'neutral', t: "Hey. Okay, so, the bakery by the station. The strawberry ones. There's two left." },
        { s: 'solar', f: 'happy', t: "Are you getting me one?" },
        { s: 'mark', f: 'flustered', t: "I was going to get you one and pretend it was an accident. Like, oh, I had an extra. But that felt weird, so. I'm calling." },
        { s: 'solar', f: 'neutral', t: "You can just get me one." },
        { s: 'mark', f: 'neutral', t: "Yeah? Cool. Cool cool cool. Okay. Getting you one. Getting me the other one. We're matching now. That's not weird." },
        { s: 'solar', f: 'happy', t: "It's a little weird." },
        { s: 'mark', f: 'neutral', t: "It's a little weird. Okay. See you, Sol." }
      ] }
    ],
    topics: [
      { id: 'day', label: 'How was your day?', v: [
        { min: 3, msgs: [ { me: 'how was ur day' }, { them: 'good!! a kid sat next to me at the piano and played chopsticks' }, { them: 'over my song. very confidently' }, { me: 'did u let him' }, { them: 'ofc. he was better than me honestly lol' } ] },
        { min: 6, msgs: [ { me: 'how was ur day' }, { them: 'pretty chill :) learned a new song. walked a lot' }, { them: 'the guesthouse rice was soft again lol' }, { me: 'did u say anything' }, { them: 'no. i ate two bowls. its growing on me' } ] }
      ] },
      { id: 'plans', label: 'Plans this weekend?', v: [
        { min: 3, msgs: [ { me: 'plans this weekend?' }, { them: 'riding the line to the end to get the last few chimes' }, { them: 'its a whole day. i packed snacks lol' }, { me: 'thats so nerdy' }, { them: 'yeah :) its the best' } ] },
        { min: 6, end: 'invite', msgs: [ { me: 'plans this weekend?' }, { them: 'nothing big. piano probably' }, { them: 'u could come. no pressure. like negative pressure lol' }, { me: 'maybe' }, { them: 'word :) ill save u a spot' } ] }
      ] },
      { id: 'own', label: 'Play me something', v: [
        { min: 3, msgs: [ { me: 'play me something' }, { them: 'like rn??' }, { them: 'ok hold on. im recording a voice memo' }, { me: 'take ur time' }, { them: 'sent. it has a seagull in it. sorry. not sorry lol' } ] }
      ] }
    ]
  });
})();
