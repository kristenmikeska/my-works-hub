/* Sebastian · IX The Hermit. Arrives on the 6/8 full moon. Format notes are at the top of akihiko.js. */
FemcSocial.define({
  id: 'sebastian', name: 'Sebastian', short: 'Sebastian', arcana: 'Hermit', numeral: 'IX', from: 'Stardew Valley',
  arrives: '6/8',
  home: { place: 'Paulownia Mall · Game Panic', slot: 1, days: [2, 4, 6], hint: 'Evenings on Tuesdays, Thursdays and Saturdays, under the Game Panic awning. Especially if it is raining.' },
  approach: "A guy in a black hoodie is losing at an arcade machine in the back of Game Panic, with the air of someone who would rather be in a basement.",
  invite: {
    ask: ["hey. you free?", "want to hang out? no pressure", "got a new campaign idea. come over?", "its raining. awning?", "game panic. the cabinet in the back is free for once", "found a frog. unrelated. you around?", "bored. want to beat me at something", "arcade? i have like 40 coins and nobody to lose them to"],
    ok: ["cool. see you soon", "ok. ill be under the awning", "nice. ill save you the good stool"],
    no: ["no worries", "ok. another time", "thats fine. the rain will still be here"]
  },
  hangouts: [
    [
      { n: "Rain again, steady and warm, the awning ticking like a clock. Sebastian was leaning on the wall with his hood up, watching the street go silver, and he moved over about four inches when she ducked in, which for him was practically a speech." },
      { s: 'sebastian', f: 'neutral', t: "Rain smells different here. Like metal. And fried food. And bus." },
      { choose: [
        { t: "What does it smell like at home?", notes: 3, then: [
          { s: 'sebastian', f: 'neutral', t: "Mud. Pine trees. The lake. The mountain, if the wind's coming down off it." },
          { s: 'sebastian', f: 'happy', t: "...I didn't know I knew that until just now." }
        ] },
        { t: "Bus is a smell?", notes: 2, then: [{ s: 'sebastian', f: 'happy', t: "Bus is the strongest smell. Bus is winning." }] },
        { t: "I hadn't noticed.", notes: 1, then: [{ s: 'sebastian', f: 'neutral', t: "Yeah. You live here. You stop noticing." }] }
      ] },
      { n: "They stood there until the gutters stopped running. Across the street a takoyaki stall pulled its shutter halfway down, and for a minute the whole street smelled exactly the way he'd said." }
    ],
    [
      { n: "Inside Game Panic it was all noise and blue light and the smell of hot plastic. Sebastian had claimed the fighting cabinet in the back corner, the one nobody used because the stick stuck, and was losing to the computer with total, silent dignity." },
      { s: 'sebastian', f: 'neutral', t: "The stick sticks. That's my excuse. Want to play?" },
      { n: "He slid a coin across the control panel without looking at her." },
      { choose: [
        { t: "(Play to win.)", notes: 3, then: [
          { n: "She won. Twice. The second time with a combo she was fairly sure was an accident." },
          { s: 'sebastian', f: 'happy', t: "...Okay. Okay. Again. I'm not mad. I'm learning." }
        ] },
        { t: "(Let him win.)", notes: 1, then: [{ s: 'sebastian', f: 'serious', t: "You stopped blocking. I saw that. Don't do that. That's worse than losing." }] },
        { t: "Show me how the stick sticks.", notes: 2, then: [{ s: 'sebastian', f: 'neutral', t: "You have to pull it like it owes you money. Here." }] }
      ] },
      { n: "They played until the coins ran out, and then stood behind a pair of middle schoolers for a while, not saying anything, silently judging their technique, which turned out to be better than theirs." }
    ],
    [
      { n: "The rain had stopped, and Sebastian wasn't under the awning. He was crouched by the gutter behind the mall with his hood down and his phone held out as a flashlight, very, very still." },
      { s: 'sebastian', f: 'serious', t: "Don't step there. There's one by your shoe." },
      { n: "There was. A tiny brown frog, no bigger than a coin, sitting in a puddle like it had paid rent on it." },
      { choose: [
        { t: "How many so far?", notes: 3, then: [
          { s: 'sebastian', f: 'happy', t: "Five. Maybe four. One of them might be the same guy twice. He moves around a lot." },
          { n: "He said it with the gravity of a scientist reporting results. Solar crouched down beside him and helped count. They got to seven." }
        ] },
        { t: "(Crouch down and look.)", notes: 2, then: [{ n: "She crouched beside him. The frog looked at both of them and did absolutely nothing, magnificently. Sebastian made a small, pleased sound through his nose." }] },
        { t: "Do frogs bite?", notes: 1, then: [{ s: 'sebastian', f: 'neutral', t: "No. They're the most polite animal there is. Unlike geese." }] }
      ] },
      { s: 'sebastian', f: 'neutral', t: "...You're the first person who hasn't asked me why." },
      { n: "It hadn't occurred to her that there was anything to ask. That, apparently, had been the right answer." }
    ],
    [
      { n: "He had a notebook open on his knee under the awning and was filling a page with small, cramped handwriting and a drawing of something with too many teeth. A campaign, he said without looking up, for his friends back home. For whenever." },
      { s: 'sebastian', f: 'neutral', t: "I need a name for this guy. He's a lich. Undead wizard. Very old, very evil. Everything I come up with sounds like a metal band." },
      { choose: [
        { t: "Gerald.", notes: 3, then: [
          { s: 'sebastian', f: 'surprised', t: "...Gerald." },
          { s: 'sebastian', f: 'happy', t: "A lich called Gerald. That's horrifying. That's the most horrifying thing I've ever heard. I'm using it." }
        ] },
        { t: "Something with a lot of Xs.", notes: 2, then: [{ s: 'sebastian', f: 'neutral', t: "Xaxxoth. Yeah. See, that's a metal band. Thanks, though." }] },
        { t: "Lord Frog.", notes: 1, then: [{ s: 'sebastian', f: 'serious', t: "No. Frogs are never the villain. That's a rule." }] }
      ] },
      { n: "He wrote something down. Then he drew a tiny cardigan on the thing with too many teeth and tilted the notebook so she could see, and the corner of his mouth was doing the thing it did when he was trying very hard not to look pleased." }
    ],
    [
      { n: "A whole middle-school club had poured into Game Panic at once, in matching windbreakers, shrieking, and by the time Solar got there the arcade was a wall of noise and elbows. Sebastian was outside under the awning with his hood all the way up and both hands jammed in his pocket, looking like a cat somebody had put in a bath." },
      { s: 'sebastian', f: 'neutral', t: "There were twenty of them. One asked if I was a high schooler. I didn't know what to say. I said no." },
      { choose: [
        { t: "(Lean on the wall next to him and say nothing.)", notes: 3, then: [{ n: "She leaned on the wall. He leaned on the wall. Inside, a twelve-year-old screamed in victory. Out here the evening was blue and cool and nobody needed anything from anybody, and after a while his shoulders came down from around his ears." }] },
        { t: "Want to go somewhere quieter?", notes: 2, then: [{ s: 'sebastian', f: 'neutral', t: "This is quieter. This is fine. Just... stay out here a minute." }] },
        { t: "They're just kids.", notes: 1, then: [{ s: 'sebastian', f: 'serious', t: "Kids are the worst kind of crowd. They ask follow-up questions." }] }
      ] },
      { n: "When the club finally filed out, he went back in, put a coin in the fighting cabinet, and stepped aside to let her play first. It was, she was starting to understand, his version of thank you." }
    ]
  ],
  romance: true,
  cast: { abigail: 'Abigail', sam: 'Sam', junpei: 'Junpei', noctis: 'Noctis' },
  threads: { solarion: { name: 'solarion chronicles', members: ['sebastian', 'abigail', 'sam'] } },
  texts: [
    { id: 'seb-1a', rank: 1, days: 1, slot: 1, msgs: [
      { from: 'sebastian', t: 'hey. its sebastian. from the rain' },
      { from: 'sebastian', t: 'the frog is ok btw. i put him in the canal' }
    ], reply: [
      { t: 'Good. Tell him I said hi.', notes: 3, then: [{ from: 'sebastian', t: 'he says ribbit. which means hi. probably' }] },
      { t: 'You checked on a frog?', notes: 2, then: [{ from: 'sebastian', t: 'yeah. frogs are important' }] }
    ] },
    { id: 'seb-2a', rank: 2, days: 1, slot: 1, msgs: [
      { from: 'sebastian', t: 'still thinking about your name' },
      { from: 'sebastian', t: "it's the main character in my game. solarion. i wrote it like 3 years ago" },
      { from: 'sebastian', t: 'thats so weird' }
    ], reply: [
      { t: 'Maybe I was meant to play.', notes: 3, then: [{ from: 'sebastian', t: 'yeah. maybe you were' }] },
      { t: 'What does Solarion do?', notes: 2, then: [{ from: 'sebastian', t: 'saves the world. mostly by being stubborn' }, { from: 'sebastian', t: 'so. yeah. tracks' }] }
    ] },
    { id: 'solarion-3', thread: 'solarion', rank: 3, days: 1, msgs: [
      { sys: 'abigail added you to "solarion chronicles"' },
      { from: 'abigail', t: 'ok we found a way to text across worlds. dont ask. i think its the purple crystal' },
      { from: 'sam', t: 'SOLARION RETURNS 🎸' },
      { from: 'sebastian', t: "you guys can't just add people" },
      { from: 'abigail', t: 'we just did seb' },
      { from: 'sam', t: 'shes canonically the main character now' }
    ], reply: [
      { t: 'Next session, same time?', then: [{ from: 'sam', t: 'YES' }, { from: 'abigail', t: 'seb is already writing it' }, { from: 'sebastian', t: 'i am not' }, { from: 'sebastian', t: '(i am)' }] },
      { t: 'I want a sword next time.', then: [{ from: 'abigail', t: 'a WOMAN of TASTE' }] }
    ] },
    { id: 'seb-4a', rank: 4, days: 1, slot: 1, msgs: [
      { from: 'sebastian', t: 'sorry for unloading all that family stuff on you' }
    ], reply: [
      { t: "You didn't unload. You shared.", notes: 3, then: [{ from: 'sebastian', t: '...ok' }, { from: 'sebastian', t: 'thanks' }] },
      { t: 'Anytime, Seb.', notes: 2, then: [{ from: 'sebastian', t: '🐸' }] }
    ] },
    { id: 'solarion-4', thread: 'solarion', rank: 4, before: 7, days: 2, slot: 1, msgs: [
      { from: 'sam', t: 'ok SESSION TWO. by text. seb says it counts' },
      { from: 'abigail', t: 'it counts if the dm says it counts. thats the law' },
      { from: 'sebastian', t: 'it counts' },
      { from: 'sebastian', t: 'last time you all made it out of the dragon cave. you walk three days through the swamp of ash. its raining' },
      { from: 'abigail', t: 'its always raining with u' },
      { from: 'sam', t: 'my bard plays a song about how wet he is 🎸' },
      { from: 'sebastian', t: 'nobody can hear it over the rain' },
      { from: 'sebastian', t: 'you reach a bridge. a troll lives under it. he wants a toll. 3 gold each' },
      { from: 'abigail', t: 'i have 2 gold and a cool rock' },
      { from: 'sebastian', t: 'solarion. what do you do' },
      { ask: [
        { t: 'Solarion challenges the troll to a riddle contest.', notes: 3, then: [
          { from: 'sebastian', t: 'oh no' },
          { from: 'sebastian', t: 'nobody ever does riddles. hold on' },
          { from: 'sebastian', t: 'the troll asks. what has a neck but no head' },
          { from: 'abigail', t: 'A BOTTLE' },
          { from: 'sebastian', t: 'abby its not your turn' },
          { from: 'sebastian', t: 'rolled int for you. 18. solarion gets it instantly. the troll weeps with joy and lets everyone cross. he gives you his hat' },
          { from: 'sam', t: 'SOLARION GETS THE HAT' }
        ] },
        { t: "Solarion pays for everyone.", notes: 2, then: [
          { from: 'sebastian', t: 'the troll takes 9 gold. he is now the richest troll in the swamp' },
          { from: 'abigail', t: 'shes so generous 🥺' },
          { from: 'sam', t: 'shes so BROKE now' }
        ] },
        { t: 'Solarion kicks the troll off the bridge.', notes: 1, then: [
          { from: 'sebastian', t: 'rolled for you. 3' },
          { from: 'sebastian', t: 'the troll does not move. the troll is offended. the troll writes your name down in a little book' },
          { from: 'sam', t: 'LMAOOO' },
          { from: 'abigail', t: 'that troll is coming back. i can feel it' }
        ] }
      ] },
      { from: 'sebastian', t: 'past the bridge is a clearing. in the middle sits a frog the size of a horse. he is wearing a crown' },
      { from: 'sam', t: 'seb' },
      { from: 'abigail', t: 'SEB' },
      { from: 'sebastian', t: 'what' },
      { from: 'sam', t: 'its always a frog with u' },
      { from: 'sebastian', t: 'the frog king regards solarion with ancient eyes' },
      { ask: [
        { t: 'Solarion bows to the frog king.', notes: 3, then: [
          { from: 'sebastian', t: 'the frog king is moved. no one has bowed to him in 400 years' },
          { from: 'abigail', t: 'she BOWED. hes going to be unbearable about this for a week' },
          { from: 'sebastian', t: 'i will be normal about it' }
        ] },
        { t: 'Solarion asks the frog king for directions.', notes: 2, then: [
          { from: 'sebastian', t: 'the frog king points north with one long finger. then he says ribbit. which is a blessing' }
        ] },
        { t: "Solarion tries on the frog king's crown.", notes: 1, then: [
          { from: 'sebastian', t: 'the crown is extremely slimy. the frog king is not angry. just disappointed' },
          { from: 'sam', t: 'thats worse' }
        ] }
      ] },
      { sys: 'sam renamed the group "frog king fan club 🐸"' },
      { from: 'sebastian', t: 'no' },
      { sys: 'sebastian renamed the group "solarion chronicles"' },
      { from: 'sebastian', t: 'the frog king offers solarion one gift for the road. a sword. a map of the swamp. or one of his sons, a very small frog, as a companion' },
      { ask: [
        { t: 'The very small frog.', notes: 3, then: [
          { from: 'sebastian', t: '...' },
          { from: 'sebastian', t: 'correct answer' },
          { from: 'sebastian', t: 'the small frog climbs onto solarions shoulder. he has 1 hp and infinite loyalty' },
          { from: 'abigail', t: 'seb is SMILING right now. i know it' },
          { from: 'sebastian', t: 'session over. same time next week' }
        ] },
        { t: 'The sword.', notes: 2, then: [
          { from: 'abigail', t: 'a WOMAN of TASTE' },
          { from: 'sebastian', t: 'the sword hums faintly when its near frogs. no reason' },
          { from: 'sebastian', t: 'session over. same time next week' }
        ] },
        { t: 'The map.', notes: 2, then: [
          { from: 'sebastian', t: 'practical. solarion would' },
          { from: 'sam', t: 'boooo take the frog' },
          { from: 'sebastian', t: 'session over. same time next week' }
        ] }
      ] }
    ] },
    { id: 'seb-5a', rank: 5, days: 1, slot: 1, msgs: [
      { from: 'sebastian', t: 'you held on really tight' },
      { from: 'sebastian', t: 'on the bike' },
      { from: 'sebastian', t: 'not complaining. just noting' }
    ], reply: [
      { t: 'You drive like a maniac.', notes: 2, then: [{ from: 'sebastian', t: 'i drive like a guy who has been waiting years for an empty road' }] },
      { t: 'I liked holding on.', notes: 3, then: [{ from: 'sebastian', t: '...' }, { from: 'sebastian', t: 'ok' }, { from: 'sebastian', t: 'cool. me too. i mean. cool' }] }
    ] },
    { id: 'seb-6a', rank: 6, days: 1, slot: 1, msgs: [
      { from: 'sebastian', t: 'did you finish it' },
      { from: 'sebastian', t: 'the game' },
      { from: 'sebastian', t: 'did you find the secret ending' }
    ], reply: [
      { t: 'The frog ending?', notes: 3, then: [{ from: 'sebastian', t: 'YES' }, { from: 'sebastian', t: 'nobody ever finds the frog ending' }] },
      { t: "There's a secret ending?", notes: 2, then: [{ from: 'sebastian', t: 'talk to the frog. three times' }] }
    ] },
    { id: 'solarion-7', thread: 'solarion', rank: 7, before: 10, days: 2, slot: 1, msgs: [
      { from: 'abigail', t: 'ok i need to talk to solar without seb' },
      { from: 'sebastian', t: 'im literally in the chat' },
      { from: 'abigail', t: 'without seb EMOTIONALLY' },
      { from: 'sam', t: 'solar is it true. he made you a GAME' },
      { from: 'sebastian', t: 'its not a game its a text adventure' },
      { from: 'sam', t: 'thats a GAME seb' },
      { from: 'abigail', t: 'ive known him since we were kids and he has never made me a game. not once' },
      { ask: [
        { t: 'It has a secret frog ending.', notes: 3, then: [
          { from: 'sam', t: 'OF COURSE IT DOES' },
          { from: 'abigail', t: 'wait you FOUND it?? nobody ever finds his secret stuff' },
          { from: 'sebastian', t: 'she found it' }
        ] },
        { t: "It's really good. He's really good at this.", notes: 3, then: [
          { from: 'sebastian', t: '...' },
          { from: 'sebastian', t: 'ok stop' },
          { from: 'abigail', t: 'hes typing and deleting. i can SEE it' }
        ] },
        { t: 'Maybe he just likes me better.', notes: 2, then: [
          { from: 'abigail', t: 'WOW' },
          { from: 'sam', t: 'she went for the THROAT' },
          { from: 'sebastian', t: 'i like everyone equally. which is not much' }
        ] }
      ] },
      { from: 'sam', t: 'ALSO. abby says you fixed a MOTORCYCLE' },
      { from: 'sam', t: 'you said youd fix your bike for like three years' },
      { from: 'sebastian', t: 'different bike' },
      { from: 'sebastian', t: 'and i had motivation' },
      { from: 'abigail', t: 'what motivation' },
      { from: 'sebastian', t: 'roads. empty ones' },
      { from: 'abigail', t: 'mhm' },
      { ask: [
        { t: 'He drives like a maniac.', notes: 2, then: [
          { from: 'sam', t: 'HE DOES' },
          { from: 'abigail', t: 'he went through my moms flower bed once. she still brings it up' }
        ] },
        { t: 'He drives fine. I held on.', notes: 3, then: [
          { from: 'abigail', t: 'you HELD ON' },
          { from: 'sam', t: '👀' },
          { from: 'sebastian', t: 'its a motorcycle. thats how motorcycles work' },
          { from: 'abigail', t: 'mhm. mhm.' }
        ] },
        { t: '🐸', notes: 1, then: [
          { from: 'sebastian', t: '🐸' },
          { from: 'sam', t: 'what does that MEAN' },
          { from: 'abigail', t: 'theyre speaking frog now. weve lost them' }
        ] }
      ] },
      { sys: 'abigail renamed the group "seb has a heart (confirmed)"' },
      { from: 'sebastian', t: 'im leaving this chat' },
      { from: 'sam', t: 'you wont' },
      { from: 'sebastian', t: 'i wont' },
      { sys: 'sebastian renamed the group "solarion chronicles"' },
      { from: 'abigail', t: 'ok real question. next time we fall through. what are we playing' },
      { ask: [
        { t: 'Seb runs the City of Coffins. All of us.', notes: 3, then: [
          { from: 'sebastian', t: 'yeah ok. i can do that' },
          { from: 'sebastian', t: 'ill write a goblin part for junpei' },
          { from: 'abigail', t: 'THE GOBLIN RETURNS' },
          { from: 'sam', t: 'bring snacks solar. real ones. not the weird jelly ones' }
        ] },
        { t: 'Rematch with the frog king.', notes: 2, then: [
          { from: 'sebastian', t: 'the frog king is not a boss fight. hes a friend' },
          { from: 'sam', t: 'seb has a whole frog lore bible. this is known' }
        ] },
        { t: "Something where Seb's character has to talk about his feelings.", notes: 1, then: [
          { from: 'sebastian', t: 'no' },
          { from: 'abigail', t: 'YES' },
          { from: 'sam', t: 'campaign of the CENTURY' }
        ] }
      ] }
    ] },
    { id: 'seb-8a', rank: 8, days: 1, slot: 1, msgs: [
      { from: 'sebastian', t: "i don't know how to go back to the basement after this" },
      { from: 'sebastian', t: "after having somewhere i actually wanted to be" }
    ], reply: [
      { t: "You'll have somewhere. Even back home.", notes: 3, then: [{ from: 'sebastian', t: 'yeah?' }, { from: 'sebastian', t: 'i hope so' }] },
      { t: "I don't want you to go either.", notes: 3, then: [{ from: 'sebastian', t: '...' }, { from: 'sebastian', t: 'dont say that. i cant handle it' }, { from: 'sebastian', t: 'say it again tomorrow though' }] }
    ] },
    { id: 'seb-9r', rank: 9, route: 'romance', days: 1, slot: 1, msgs: [
      { from: 'sebastian', t: 'im kind of terrible at this' },
      { from: 'sebastian', t: 'but im really glad its you' }
    ], reply: [
      { t: "You're not terrible at it.", notes: 3, then: [{ from: 'sebastian', t: 'ok youre biased. but ill take it' }] },
      { t: "I'm glad it's you too.", notes: 3, then: [{ from: 'sebastian', t: '🐸💙' }] }
    ] },
    { id: 'seb-9f', rank: 9, route: 'friend', days: 1, slot: 1, msgs: [
      { from: 'sebastian', t: 'best friend. huh' },
      { from: 'sebastian', t: "never had one i didn't grow up with" }
    ], reply: [
      { t: "You've got one now.", notes: 3, then: [{ from: 'sebastian', t: 'yeah. i do' }] },
      { t: 'Sam and Abigail better not be jealous.', notes: 2, then: [{ from: 'sebastian', t: 'abby already made you a character sheet. ur fine' }] }
    ] }
  ],
  ranks: [
    { after: '6/9', title: '1: frog', place: 'Paulownia Mall · Game Panic', scene: [
      { n: "It was pouring. Warm, heavy June rain that came straight down like someone had turned on a faucet, and everyone on the street had either run for cover or given up. Solar had run for cover. The awning outside Game Panic was the closest thing." },
      { n: "There was already somebody under it." },
      { n: "A tall guy in a black hoodie with the hood half up, shaggy black hair falling over one eye, leaning against the wall with his arms folded, watching the rain like it was the best thing on television. He didn't look up when she ducked in beside him. He didn't move to make room. He just existed, very quietly, the way the rain did." },
      { n: "They stood there for a few minutes not talking. Then he crouched down, suddenly, and picked something up off the wet pavement in both hands." },
      { n: "A frog. A small, very surprised green frog, which had apparently been sitting in a puddle at the edge of the awning, and which now sat in his cupped palms blinking at both of them." },
      { s: 'sebastian', f: 'neutral', t: "...He was going to get stepped on." },
      { choose: [
        { t: "He's cute.", notes: 3, then: [
          { s: 'sebastian', f: 'happy', t: "...Yeah. He is." },
          { n: "He said it like it surprised him, that somebody else agreed. Like he was used to people thinking frogs were gross." }
        ] },
        { t: "Where are you going to put him?", notes: 2, then: [{ s: 'sebastian', f: 'neutral', t: "There's a canal behind the mall. Frogs like canals. I think. I'm assuming. I'm not from here." }] }
      ] },
      { s: 'sebastian', f: 'flustered', t: "I'm Sebastian. I'm, uh. Not from here. You probably figured that." },
      { s: 'sebastian', f: 'neutral', t: "I was in my basement. In Pelican Town. Writing code. Then it was green and there were coffins and now I'm standing under an arcade with a frog." },
      { n: "He said it flatly, like listing the steps of a bad day, and Solar laughed before she could stop herself. He looked at her, startled. Then the corner of his mouth went up." },
      { choose: [
        { t: "That's the most normal story I've heard all month.", notes: 3, then: [{ s: 'sebastian', f: 'happy', t: "...Yeah, I've been getting that impression. This place is weird." }] },
        { t: "Pelican Town?", notes: 2, then: [{ s: 'sebastian', f: 'neutral', t: "Small town. Very small. Everybody knows everybody. I spend most of my time in my room so I don't have to." }] }
      ] },
      { n: "When the rain thinned out, they walked to the canal behind the mall together, and he crouched by the water and let the frog go, very carefully, and watched it swim away. Then he stood up and put his hands back in his hoodie pocket and said, \"I like the rain here,\" to nobody in particular, and went home." }
    ] },

    { after: '6/23', title: '2: solarion', place: 'Paulownia Mall · Game Panic', scene: [
      { n: "Rain again. He was under the awning again. He nodded at her when she came in, a small, quiet nod, like they had an arrangement now. They kind of did." },
      { s: 'sebastian', f: 'neutral', t: "I never got your name. Last time." },
      { s: 'solar', t: "Solar." },
      { n: "He went very still." },
      { s: 'sebastian', f: 'surprised', t: "...Solar. Like. Solar." },
      { s: 'sebastian', f: 'serious', t: "Okay, this is going to sound insane. Back home, I run a game. A tabletop thing, with my friends. Dice and character sheets. Very nerdy. It's called Solarion Chronicles." },
      { s: 'sebastian', f: 'neutral', t: "Solarion's the main character. I wrote her, like, three years ago. A wanderer from another world who keeps ending up in places she doesn't belong." },
      { choose: [
        { t: "That's a little on the nose.", notes: 3, then: [{ s: 'sebastian', f: 'happy', t: "It's SO on the nose. It's offensively on the nose." }] },
        { t: "What happens to her?", notes: 2, then: [{ s: 'sebastian', f: 'happy', t: "She saves everyone. Mostly by being too stubborn to leave. That's her whole thing." }] }
      ] },
      { n: "He looked at her sideways, frowning, like she was a bug in a program he couldn't track down." },
      { s: 'sebastian', f: 'flustered', t: "You want to play? Sometime? I've got the rules in my head. I could run a session. Just us." },
      { n: "He said it fast, like he'd talked himself into it and wanted to get it out before he could talk himself out." },
      { choose: [
        { t: "I'd love to.", notes: 3, then: [
          { s: 'sebastian', f: 'flustered', t: "...Cool. Cool. Okay. I'll write something." },
          { n: "He looked away immediately, at the rain, but she could see him smiling at it." }
        ] },
        { t: "Only if I can play Solarion.", notes: 3, then: [{ s: 'sebastian', f: 'happy', t: "Obviously you're playing Solarion. Who else would play Solarion." }] }
      ] }
    ] },

    { after: '7/14', title: '3: game night', place: 'Iwatodai Dorm · Lounge', scene: [
      { n: "They came through on a Tuesday, during the green hour, landing in the middle of the dorm's front garden in a tangle of limbs and complaining. A girl with bright purple hair and a sword. A guy with spiky blond hair and a skateboard. Sebastian, apparently, had told them about the game." },
      { register: 'abigail' },
      { register: 'sam' },
      { s: 'abigail', t: "Seb! We found you! I told you he'd be somewhere with a basement, Sam." },
      { s: 'sam', t: "There's no basement! He's just in a dorm! Seb, you're living in a DORM?" },
      { n: "So game night happened in the lounge. Sebastian sat at the head of the coffee table with a notebook full of maps he'd drawn from memory. Abigail and Sam played their usual characters. Solar played Solarion. And Junpei, who had wandered downstairs for a snack, sat down, demanded a character, and was assigned a goblin." },
      { s: 'junpei', f: 'surprised', t: "Why am I a goblin?" },
      { s: 'sebastian', f: 'neutral', t: "You have goblin energy." },
      { choose: [
        { t: "(Roll to attack the dragon.)", notes: 3, then: [
          { n: "She rolled a twenty. Sam screamed. Abigail screamed. Sebastian, at the head of the table, sat back in his chair and stared at her like she'd done something genuinely impossible." },
          { s: 'sebastian', f: 'surprised', t: "...Solarion slays the dragon. In one hit. On her first session. That's never happened." }
        ] },
        { t: "(Roll to befriend the dragon.)", notes: 3, then: [
          { n: "She rolled a nineteen. The dragon, Sebastian decided after a long pause, became her loyal companion and was named Frog." },
          { s: 'abigail', t: "SEB. You've never let ANYONE befriend the dragon." },
          { s: 'sebastian', f: 'neutral', t: "Nobody's ever tried." }
        ] }
      ] },
      { n: "They played until three in the morning. Abigail and Sam faded at dawn, the way the visitors did, still arguing about loot. Sebastian sat in the empty lounge afterward with his notebook, very quietly, writing something down." },
      { s: 'sebastian', f: 'happy', t: "...They've never liked a new player before. Ever. You're like, the first." }
    ] },

    { after: '7/28', title: '4: the basement', music: 'tender', place: 'Iwatodai · Riverside', scene: [
      { n: "He'd asked to walk. Not at the arcade. Somewhere quiet. They ended up by the river in the evening, the heat starting to lift off the water, cicadas going, a few joggers passing. One of them was Akihiko, who waved and kept running." },
      { s: 'sebastian', f: 'neutral', t: "Back home I live in my mom's basement. She's a carpenter. She built the whole house." },
      { s: 'sebastian', f: 'sad', t: "My stepdad's a scientist. He's fine, I guess. My half-sister Maru's a genius. Everyone loves her. She's good at everything, and she's nice, and she's always home for dinner." },
      { s: 'sebastian', f: 'sad', t: "And I'm the guy in the basement. The one nobody quite knows what to do with." },
      { n: "He said it without self-pity. Just a fact, laid down like a card on a table. Solar knew the shape of it. The house that wasn't quite yours. The family that loved you a little carefully, the way you'd handle something that might break." },
      { choose: [
        { t: "I've never had a house that felt like mine.", notes: 3, then: [
          { s: 'sebastian', f: 'sad', t: '...Yeah?' },
          { n: "She told him. Not everything. Enough. He listened like it was the first time anyone had ever told him anything true." }
        ] },
        { t: "Do they know you feel like that?", notes: 2, then: [{ s: 'sebastian', f: 'neutral', t: "No. I don't tell people things. It's kind of my whole deal." }] }
      ] },
      { s: 'sebastian', f: 'serious', t: "I keep saying I'm going to leave. Get on my bike and ride to the city and never come back." },
      { s: 'sebastian', f: 'sad', t: "And then I fall through a hole in the universe and end up in a city anyway, and I'm not even happy about it. I just miss my stupid basement." },
      { n: "He laughed at himself, quietly, and kicked a pebble into the river. Solar didn't say anything. She bumped his shoulder with hers. He bumped back." }
    ] },

    { after: '8/18', title: '5: motorcycle', music: 'sun', place: 'Port Island · Coastal Road', scene: [
      { n: "He'd found a motorcycle. Or, he'd found the bones of one, rusting behind a repair shop near the port, and he'd been working on it for three weeks with borrowed tools, and tonight it ran." },
      { s: 'sebastian', f: 'happy', t: "Get on. I've got a spare helmet. It's terrible. It's the only one." },
      { choose: [
        { t: "Is this safe?", notes: 2, then: [{ s: 'sebastian', f: 'neutral', t: "No. Get on." }] },
        { t: "(Get on.)", notes: 3, then: [{ n: "She got on. She put her arms around him because there was nothing else to hold onto. He went very still for a second, and then kicked the engine on, and the whole world became noise." }] }
      ] },
      { n: "They rode along the coastal road out past the port, the city lights on one side and the black water on the other, the warm summer wind tearing at everything. It was the fastest she had ever moved in her life. She held on very, very tight." },
      { n: "They passed a pier where a boy with spiky black hair was sitting at the very end, fishing, alone, under a single streetlight. He raised a hand lazily as they went by, like a prince waving at a parade." },
      { n: "Sebastian pulled over at the end of the road, where it ran out at a cliff over the water. He cut the engine. The silence was enormous. The bay below was full of lights." },
      { s: 'sebastian', f: 'happy', t: "...This is the thing I wanted. Back home. Just. Riding until the road ends. With somebody." },
      { choose: [
        { t: "So you got it.", notes: 3, then: [
          { s: 'sebastian', f: 'surprised', t: '...' },
          { s: 'sebastian', f: 'sad', t: "Yeah. I guess I did. In the wrong universe. Figures." }
        ] },
        { t: "(Stay holding on, even with the engine off.)", notes: 3, then: [
          { n: "She didn't let go. The engine was off and they weren't moving and she didn't let go. He noticed. He didn't say anything. He just leaned back, very slightly, into her." }
        ] }
      ] }
    ] },

    { after: '9/8', title: '6: text adventure', place: 'Iwatodai Dorm · Lounge', scene: [
      { n: "He'd been coding on Junpei's old laptop for two weeks. He wouldn't say what. He'd shoo everyone away from the screen with a hand without looking up." },
      { n: "Then one evening he set the laptop down in front of her on the lounge table and stepped back, hands in his hoodie, very carefully not looking at her." },
      { s: 'sebastian', f: 'flustered', t: "It's not done. It's probably buggy. Don't judge me." },
      { n: "The screen was black, with a single line of green text and a blinking cursor." },
      { n: "SOLARION CHRONICLES: THE CITY OF COFFINS. You are SOLAR. You live in a dorm with very strange people. It is raining. Under an arcade awning, there is a FROG. What do you do?" },
      { choose: [
        { t: "(Type: PICK UP FROG.)", notes: 3, then: [
          { n: "YOU PICK UP THE FROG. The frog looks at you with great respect. A tall boy in a hoodie, standing nearby, looks at you with something like respect too. He is pretending he isn't. He is bad at pretending." },
          { s: 'sebastian', f: 'flustered', t: "...Okay, that last line was a joke. Mostly." }
        ] },
        { t: "(Type: TALK TO BOY IN HOODIE.)", notes: 3, then: [
          { n: "THE BOY IN THE HOODIE DOES NOT LIKE TALKING. He talks to you anyway. This surprises him more than it surprises you." },
          { s: 'sebastian', f: 'flustered', t: "...I should not have written that one. Close the laptop." }
        ] }
      ] },
      { n: "She played the whole thing. It took an hour. It was full of little jokes about the dorm and the arcade and the rain, and it had a secret ending if you talked to the frog three times, and in the secret ending Solarion got to go home, wherever home was, and found someone waiting for her there." },
      { n: "When she looked up, he was sitting on the floor against the couch with his hood up, watching her play the whole time. He'd seen every choice she made." }
    ] },

    { after: '9/29', title: '7: moonlight jellies', music: 'tender', place: 'Port Island · Pier', scene: [
      { n: "There was a night every year in Pelican Town, he told her, when the moonlight jellies came. The whole town went down to the beach, and somebody put a candle on a boat, and the jellyfish came up from the deep water, hundreds of them, glowing blue and green, all passing by the shore at once on their way somewhere else." },
      { s: 'sebastian', f: 'neutral', t: "I've gone every year. I never told anyone I like it. I just stand at the back." },
      { n: "They were on the pier at the edge of Port Island. Late September, warm still, the water black. And then, just past the end of the pier, something glowed." },
      { n: "Then something else. Then a dozen. Then a hundred, rising up out of the dark water, soft blue lights pulsing slowly like hearts, drifting past the pier in a long, glowing river." },
      { s: 'sebastian', f: 'surprised', t: "...No way. No way. They're here. They followed me." },
      { choose: [
        { t: "Maybe they came to see you.", notes: 3, then: [{ s: 'sebastian', f: 'happy', t: "...That's the dumbest, nicest thing anyone has ever said to me." }] },
        { t: "(Sit at the edge of the pier.)", notes: 3, then: [{ n: "She sat at the edge with her feet hanging over the glowing water. After a minute he sat down next to her, closer than he usually let himself sit, and they watched them go by." }] }
      ] },
      { s: 'sebastian', f: 'sad', t: "I always stand at the back. At home. I don't know how to be in the front of anything." },
      { s: 'sebastian', f: 'flustered', t: "But I'd sit at the front with you. Here. I wouldn't mind." },
      { n: "The jellies kept coming. Blue and green, lighting up the underside of the pier, lighting up his face, which was doing something very soft and very unguarded that he clearly didn't know it was doing." }
    ] },

    { after: '10/20', title: '8: wanting to stay', music: 'tender', place: 'Paulownia Mall · Game Panic', scene: [
      { n: "October rain, cold this time. The awning. The arcade lights flickering. Sebastian was already there, the way he always was, hood up, but he wasn't watching the rain. He was looking at the ground." },
      { s: 'sebastian', f: 'sad', t: "Elizabeth told me. The green hour ends at the end of January. Everyone goes home." },
      { s: 'sebastian', f: 'sad', t: "I spent my whole life wanting to leave home. And now I get to go back, and the only thing I can think about is that I don't want to." },
      { s: 'sebastian', f: 'serious', t: "That's the worst possible thing that could happen to a person like me. Wanting to stay somewhere." },
      { choose: [
        { t: "Why is that the worst thing?", notes: 3, then: [
          { s: 'sebastian', f: 'sad', t: "Because then you have to admit you need something. Somebody. And they can leave. Or you can." },
          { n: "He said it to the puddles. He said it like he'd been carrying it for years, and only just found out how heavy it was." }
        ] },
        { t: "I don't want you to leave either.", notes: 3, then: [
          { s: 'sebastian', f: 'surprised', t: '...' },
          { s: 'sebastian', f: 'sad', t: "Don't. You can't just say that. I can't do anything with that." },
          { n: "He didn't sound angry. He sounded like someone holding something too hot to put down." }
        ] }
      ] },
      { n: "A frog hopped out of the puddle at the edge of the awning. They both looked at it. Sebastian laughed, small and wet, and crouched down, and held out his hand. It hopped into his palm like it had been waiting for him." }
    ] },

    { after: '11/17', title: '9: roll for it', place: 'Iwatodai Dorm · Lounge', scene: [
      { n: "November, late. The lounge was empty. He'd brought his notebook and a single twenty-sided die, and he set the die on the coffee table between them." },
      { s: 'sebastian', f: 'serious', t: "I'm bad at saying things. You know that. So I'm going to do this the only way I know how." },
      { s: 'sebastian', f: 'flustered', t: "Solarion, a wanderer from another world, finds a quiet guy in a hoodie who likes frogs and doesn't talk to anybody. They become friends. And the quiet guy has to ask her something." },
      { s: 'sebastian', f: 'serious', t: "What are they? What is this?" },
      { route: [
        { t: "She's in love with him. No roll needed.", route: 'romance', notes: 3, then: [
          { s: 'sebastian', f: 'surprised', t: '...' },
          { s: 'sebastian', f: 'flustered', t: "...No roll needed." },
          { n: "He put his notebook down. He looked at her for a very long time, hood down for once, hair in his eyes. Then he leaned across the coffee table and kissed her, carefully, like he'd been running the scenario in his head for months and was still somehow surprised it worked." },
          { s: 'sebastian', f: 'happy', t: "...Critical success." }
        ] },
        { t: "She's his best friend. In every campaign.", route: 'friend', notes: 3, then: [
          { s: 'sebastian', f: 'happy', t: "...Every campaign. Yeah. I like that. I like that a lot." },
          { n: "He wrote it in his notebook, right there, very seriously: SOLARION'S BEST FRIEND: THE GUY IN THE HOODIE. PERMANENT. Then he underlined it twice." }
        ] }
      ] }
    ] },

    { after: '12/15', title: '10: the frog sketch', place: 'Paulownia Mall · Game Panic', scene: [
      { n: "December, and it was raining, of course. Cold winter rain on the arcade awning. He was waiting under it in his hoodie with something flat wrapped in a plastic bag, to keep it dry." },
      { n: "It was a drawing. A pencil sketch of a frog, sitting on a rainy pavement under an arcade awning, looking up at something out of frame. It was very good. In the corner, very small, it was signed: for solarion. from the guy under the awning." },
      { s: 'sebastian', f: 'flustered', t: "I don't draw much. It's not great. It's the first frog. The one from the beginning." },
      { ifRoute: 'friend', then: [
        { choose: [
          { t: "I'll hang it on my wall.", notes: 3, then: [{ s: 'sebastian', f: 'happy', t: "...Cool. I mean. Good. That's where it should go." }] },
          { t: "I'll keep it until you come back.", notes: 3, then: [{ s: 'sebastian', f: 'serious', t: "Then I'll have to come back. Wherever back is. Okay. Deal." }] }
        ] },
        { n: "They stood under the awning until the rain stopped, the way they always did. When it did, he said, \"I like the rain here,\" the same way he'd said it in June, and this time he was looking at her when he said it." }
      ] },
      { ifRoute: 'romance', then: [
        { s: 'sebastian', f: 'flustered', t: "I wanted you to have something from me. Something I made. Because I don't know how to say most things out loud." },
        { choose: [
          { t: "You just said it.", notes: 3, then: [
            { s: 'sebastian', f: 'happy', t: "...Yeah. I guess I did." },
            { n: "He pulled his hood down, and stepped out from under the awning into the rain, and held his hand out for her to follow. She did. They stood in the rain together, soaked, until neither of them could feel their fingers." }
          ] },
          { t: "(Kiss him under the awning.)", notes: 3, then: [
            { s: 'sebastian', f: 'surprised', t: '...' },
            { s: 'sebastian', f: 'happy', t: "...I really, really like the rain here." }
          ] }
        ] },
        { n: "In the secret ending of the text adventure, he told her later, Solarion goes home and someone is waiting for her. He'd written it in September. He'd known, even then, who it was supposed to be." }
      ] }
    ] }
  ]
});
