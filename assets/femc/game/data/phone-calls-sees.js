/* Phone calls and messages from Contacts (2026-11-02): S.E.E.S. (akihiko, yukari, junpei, mitsuru, fuuka, aigis, ken, shinjiro). Format: data/phone-calls.js header. */
(() => {
  const P = (window.FEMC_GAME_PHONE ||= {}), add = (id, o) => { (P.people ||= {})[id] = o; };

  add('akihiko', {
    calls: [
      { id: 'pc-akihiko-1', min: 3, scene: [
        { n: "He was breathing like he'd just stopped running, which meant he'd just stopped running." },
        { s: 'akihiko', f: 'neutral', t: "Hey. Quick question. What's the name of the thing you put on rice. The yellow one. The convenience store has six." },
        { s: 'solar', f: 'neutral', t: "Furikake? Get the egg one." },
        { s: 'akihiko', f: 'neutral', t: "Egg one. Good. That's protein." },
        { s: 'solar', f: 'happy', t: "That's not how protein works." },
        { s: 'akihiko', f: 'happy', t: "It's got egg in the name. That's how it works." },
        { n: "She heard the door chime, the clerk say welcome, and Akihiko say *thanks* to the clerk in the exact voice he used for her." },
        { s: 'akihiko', f: 'neutral', t: "Got it. Okay. That's all. I'll see you at dinner." },
        { ifRomance: 'akihiko', then: [
          { s: 'akihiko', f: 'blushing', t: "...I didn't need to call for that. You know that, right." }
        ], else: [
          { n: "He hung up without saying bye. She was learning that was the bye." }
        ] }
      ] },
      { id: 'pc-akihiko-2', min: 3, scene: [
        { n: "She picked up on the first ring and got the sound of a gym: a bag being hit, somebody's sneakers squeaking, a fan that needed oil." },
        { s: 'akihiko', f: 'neutral', t: "You busy? I need you to say a number. Any number between one and ten." },
        { s: 'solar', f: 'neutral', t: "...Why?" },
        { s: 'akihiko', f: 'neutral', t: "The first-years think I'm making the rounds up. I'm not. But if you say it, they can't argue." },
        { choose: [
          { t: "Seven.", then: [
            { s: 'akihiko', f: 'happy', t: "Seven. You hear that? Seven. She doesn't even know you." },
            { n: "There was a groan from somewhere behind him that sounded like at least three people." }
          ] },
          { t: "Two. Be nice.", then: [
            { s: 'akihiko', f: 'surprised', t: "...Two?" },
            { s: 'akihiko', f: 'neutral', t: "Fine. Two. And then we do it again. That's what two means." }
          ] }
        ] },
        { s: 'akihiko', f: 'happy', t: "Thanks. I owe you a bowl." },
        { s: 'solar', f: 'neutral', t: "You owe me half your egg." },
        { s: 'akihiko', f: 'neutral', t: "...That's a different debt. But okay." }
      ] },
      { id: 'pc-akihiko-3', min: 6, scene: [
        { n: "He called and then didn't say anything for a second, which wasn't like him." },
        { s: 'akihiko', f: 'neutral', t: "Sorry. I was going to text. Then I'd have had to spell everything." },
        { s: 'solar', f: 'neutral', t: "What's up?" },
        { s: 'akihiko', f: 'neutral', t: "Nothing. My wraps are dry. I hung them by the window like you said. They don't smell like a gym bag." },
        { s: 'solar', f: 'happy', t: "You called to tell me your wraps don't smell." },
        { s: 'akihiko', f: 'happy', t: "You were right about something. I figured you'd want to hear it out loud. It doesn't happen often." },
        { s: 'solar', f: 'neutral', t: "It happens constantly." },
        { s: 'akihiko', f: 'happy', t: "Yeah. I know. Don't tell anyone." }
      ] },
      { id: 'pc-akihiko-4', min: 9, route: 'romance', scene: [
        { n: "It rang twice. Then his voice, a little lower than usual, like he'd stepped somewhere quiet to make it." },
        { s: 'akihiko', f: 'blushing', t: "Hey. Are you doing anything." },
        { s: 'solar', f: 'neutral', t: "Homework. Kind of. Why?" },
        { s: 'akihiko', f: 'neutral', t: "No reason. I wanted to hear you say something. Anything. Read me the homework." },
        { s: 'solar', f: 'flustered', t: "It's classics. It's really boring." },
        { s: 'akihiko', f: 'happy', t: "Good. Then I'll know it's you and not the homework I like." },
        { n: "So she read him half a page about a poet who'd been dead a thousand years, and he didn't interrupt once, and when she stopped he said *keep going* like she'd stopped mid-round." }
      ] }
    ],
    topics: [
      { id: 'day', label: 'How was your day?', v: [
        { min: 3, msgs: [ { me: 'how was your day' }, { them: 'good. ran. ate. hit things' }, { them: 'in that order' }, { me: 'riveting' }, { them: "you asked" } ] },
        { min: 6, msgs: [ { me: 'how was your day' }, { them: 'long. a first-year cried at practice' }, { them: "not because of me. mostly" }, { me: 'mostly??' }, { them: 'i told him he was doing well. he cried more. i left' }, { them: '(fists up)', sticker: 'akihiko-1' } ] },
        { min: 6, route: 'romance', end: 'invite', msgs: [ { me: 'how was your day' }, { them: "fine. better now" }, { me: 'smooth' }, { them: "i'm not smooth. i'm accurate" }, { them: "what are you doing later" } ] }
      ] },
      { id: 'plans', label: 'Plans this weekend?', v: [
        { min: 3, msgs: [ { me: 'plans this weekend?' }, { them: 'run. club. run' }, { me: 'u could do literally anything else' }, { them: 'i could. i won\'t' }, { them: 'come to the second run if you want. it\'s shorter' } ] },
        { min: 6, end: 'invite', msgs: [ { me: 'plans this weekend?' }, { them: "hagakure saturday. junpei says he's coming. he won't" }, { them: "you should though" }, { me: 'will there be an egg in it for me' }, { them: 'there\'s always an egg in it for you' } ] }
      ] },
      { id: 'own', label: 'Run tomorrow?', v: [
        { min: 3, msgs: [ { me: 'run tomorrow?' }, { them: '5.' }, { me: 'make it 6' }, { them: '5:15' }, { them: 'final offer', sticker: 'akihiko-2' } ] },
        { min: 6, msgs: [ { me: 'run tomorrow?' }, { them: "yes. bring water this time. you never bring water" }, { me: 'i bring u. u bring water' }, { them: "...ok that's a system" }, { them: 'fine' } ] },
        { min: 6, route: 'romance', msgs: [ { me: 'run tomorrow?' }, { them: 'yes' }, { them: "i'll go slow on the bridge" }, { me: 'u never go slow' }, { them: "i do when you're next to me. i want the bridge to last" }, { me: '...oh', sticker: 'solar-8' } ] }
      ] }
    ]
  });

  add('yukari', {
    calls: [
      { id: 'pc-yukari-1', min: 3, scene: [
        { n: "Yukari started talking before Solar had finished saying hello." },
        { s: 'yukari', f: 'neutral', t: "Okay, emergency. Not a real one. I'm at the mall and there are two of the same top. One's pink and one's like, a pinker pink." },
        { s: 'solar', f: 'neutral', t: "Get the pink." },
        { s: 'yukari', f: 'serious', t: "Which pink, Solar." },
        { choose: [
          { t: "The pinker one. Obviously.", then: [
            { s: 'yukari', f: 'surprised', t: "Right?? Okay. Okay, I knew it. I just needed someone to say it so it's not my fault." }
          ] },
          { t: "Send me a picture.", then: [
            { s: 'yukari', f: 'neutral', t: "I can't, the lady is watching me. She's been watching me for ten minutes. I'm getting the pinker one. It's decided." }
          ] }
        ] },
        { s: 'yukari', f: 'blushing', t: "Thanks. You're like, really good at this. Don't tell Junpei I called you about a shirt." },
        { s: 'solar', f: 'happy', t: "Your secret's safe." }
      ] },
      { id: 'pc-yukari-2', min: 3, scene: [
        { n: "There was wind on the line, and a twang that Solar realized after a second was a bowstring." },
        { s: 'yukari', f: 'neutral', t: "Hey. I'm on a break. Everyone else is eating and I don't feel like talking to them, so. Hi." },
        { s: 'solar', f: 'happy', t: "Hi. How's practice?" },
        { s: 'yukari', f: 'neutral', t: "Fine. Good, actually. I hit three in a row and nobody saw, so it doesn't count." },
        { s: 'solar', f: 'neutral', t: "I heard it. It counts." },
        { s: 'yukari', f: 'blushing', t: "...You can't hear an arrow over the phone." },
        { s: 'solar', f: 'neutral', t: "I have very good ears." },
        { s: 'yukari', f: 'neutral', t: "Okay, weirdo. I have to go, the captain's doing the clipboard thing. Save me a seat at dinner." }
      ] },
      { id: 'pc-yukari-3', min: 6, scene: [
        { s: 'yukari', f: 'neutral', t: "Are you in the dorm? Is anyone in the lounge? Don't go look. Just tell me what you can hear." },
        { s: 'solar', f: 'neutral', t: "...The TV. Junpei laughing at something." },
        { s: 'yukari', f: 'serious', t: "Is it my show. It's Thursday. If he's watching my show I will actually die." },
        { s: 'solar', f: 'happy', t: "The show you don't watch?" },
        { s: 'yukari', f: 'blushing', t: "I don't watch it. I just need to know if he's watching it. For reasons." },
        { n: "Solar went to the top of the stairs anyway. It was a baseball game. She reported this, and Yukari let out a long breath like she'd been holding it since the station." },
        { s: 'yukari', f: 'neutral', t: "Okay. Good. I'll be home in twenty. Don't let him change it." }
      ] }
    ],
    topics: [
      { id: 'day', label: 'How was your day?', v: [
        { min: 3, msgs: [ { me: 'how was your day' }, { them: 'ok. three people asked me if i\'m dating someone. i\'m not. i\'ve never even met that guy' }, { me: 'which guy' }, { them: "exactly" } ] },
        { min: 6, msgs: [ { me: 'how was your day' }, { them: 'honestly? kind of bad. kind of fine' }, { them: "like a 6. a 5.5" }, { me: 'want to make it a 7. i have pocky' }, { them: 'ok yes that\'s a 7. that\'s at least a 7' }, { them: '(heart)', sticker: 'yukari-2' } ] }
      ] },
      { id: 'plans', label: 'Plans this weekend?', v: [
        { min: 3, msgs: [ { me: 'plans this weekend?' }, { them: 'range saturday morning. then i\'m doing absolutely nothing' }, { them: 'like professionally' }, { me: 'can i do nothing with u' }, { them: 'yes obviously. bring snacks' } ] },
        { min: 6, end: 'invite', msgs: [ { me: 'plans this weekend?' }, { them: 'not yet!! why. do you want to do something' }, { me: 'maybe' }, { them: 'maybe is a yes. i\'m counting it' } ] }
      ] },
      { id: 'own', label: 'Wild duck later?', v: [
        { min: 3, msgs: [ { me: 'wild duck later?' }, { them: 'ugh i want to so bad' }, { them: 'but i said i\'d eat better this week' }, { me: 'the burgers have lettuce' }, { them: '...ok that\'s technically a vegetable' }, { them: '(wink)', sticker: 'yukari-3' } ] },
        { min: 6, end: 'invite', msgs: [ { me: 'wild duck later?' }, { them: 'yes. you\'re reading my mind' }, { them: 'it\'s creepy. keep doing it' } ] }
      ] }
    ]
  });

  add('junpei', {
    calls: [
      { id: 'pc-junpei-1', min: 3, scene: [
        { n: "The first thing on the line was a very loud electronic explosion, and then Junpei." },
        { s: 'junpei', f: 'flustered', t: "SOLAR. Okay. Okay okay okay. I'm on the last level. I've been on the last level for an HOUR. I need you to tell me I can do it." },
        { s: 'solar', f: 'neutral', t: "You can do it." },
        { s: 'junpei', f: 'neutral', t: "Say it like you mean it. Like a coach. Like Senpai." },
        { choose: [
          { t: "(In Akihiko's voice.) Again. Guard up.", then: [
            { s: 'junpei', f: 'happy', t: "OH that's terrifying. That's so good. Okay. Guard up. Guard UP." }
          ] },
          { t: "Junpei. It's a video game.", then: [
            { s: 'junpei', f: 'sad', t: "It's not just a video game. It's my HONOR." }
          ] }
        ] },
        { n: "Another explosion. A long silence. A sound like a person falling backwards onto a couch." },
        { s: 'junpei', f: 'sad', t: "...The CPU cheats. I'm telling you. It cheats." },
        { s: 'solar', f: 'happy', t: "I believe you." },
        { s: 'junpei', f: 'happy', t: "That's why you're the leader. Okay. One more try." }
      ] },
      { id: 'pc-junpei-2', min: 3, scene: [
        { s: 'junpei', f: 'neutral', t: "Yo. Quick. You at the dorm? Is there milk?" },
        { s: 'solar', f: 'neutral', t: "...Why are you calling me about milk." },
        { s: 'junpei', f: 'flustered', t: "Because I'm at the store and if I text Yukari she'll say 'check yourself' and I can't check myself, I'm not there, that's the whole problem." },
        { s: 'solar', f: 'neutral', t: "I'm not in the kitchen." },
        { s: 'junpei', f: 'neutral', t: "Could you be." },
        { n: "She went. There was milk. There was also a sticky note on it that said FUUKA'S, TESTING, DO NOT DRINK, with a little drawing of a skull." },
        { s: 'junpei', f: 'happy', t: "So that's a no. Cool. Cool cool. Want anything? I'm buying. You're paying me back." },
        { s: 'solar', f: 'happy', t: "Consommé." },
        { s: 'junpei', f: 'happy', t: "Ugh. Taste. Respect." }
      ] },
      { id: 'pc-junpei-3', min: 6, scene: [
        { n: "He called and the first thing he said was her name, and then nothing, like he'd forgotten why he'd started." },
        { s: 'junpei', f: 'neutral', t: "Okay this is gonna sound dumb. You know a word that rhymes with 'umbrella'?" },
        { s: 'solar', f: 'surprised', t: "...Is this the notebook?" },
        { s: 'junpei', f: 'flustered', t: "It's MATH. It's math homework. Math has umbrellas in it sometimes." },
        { s: 'solar', f: 'neutral', t: "'Stella.' 'Fella.' 'Mozzarella.'" },
        { s: 'junpei', f: 'happy', t: "Mozzarella. Oh, that's stupid. That's perfect. You never heard this. Bye." }
      ] }
    ],
    topics: [
      { id: 'day', label: 'How was your day?', v: [
        { min: 3, msgs: [ { me: 'how was your day' }, { them: 'TERRIBLE' }, { them: 'got called on in class. i was asleep. i answered anyway' }, { me: 'what did u say' }, { them: '"1600s." it was english' }, { them: '(facepalm)', sticker: 'junpei-5' } ] },
        { min: 6, msgs: [ { me: 'how was your day' }, { them: 'actually decent??' }, { them: 'hit a few on the roof. felt good. like old times good' }, { me: 'proud of u' }, { them: 'dude don\'t say that over text i\'ll get weird' }, { them: '...thanks tho' } ] }
      ] },
      { id: 'plans', label: 'Plans this weekend?', v: [
        { min: 3, msgs: [ { me: 'plans this weekend?' }, { them: 'big plans' }, { them: 'HUGE' }, { me: 'like' }, { them: 'like the couch. and the new volume of my manga. and ramen at 2pm' }, { them: 'ur invited to all of it' } ] },
        { min: 6, end: 'invite', msgs: [ { me: 'plans this weekend?' }, { them: 'none!! which means u and me should hit the arcade' }, { them: 'i have a crane game strategy. it\'s scientific' }, { me: 'it\'s not' }, { them: 'it\'s a LITTLE scientific' } ] }
      ] },
      { id: 'own', label: 'Hagakure tonight?', v: [
        { min: 3, end: 'invite', msgs: [ { me: 'hagakure tonight?' }, { them: 'are u reading my mind rn' }, { them: 'i\'m literally already hungry about it' }, { me: 'ur always hungry' }, { them: 'and ur always right. it\'s a good team' } ] },
        { min: 6, msgs: [ { me: 'hagakure tonight?' }, { them: 'yes. no. wait. i\'m broke' }, { them: 'unless' }, { me: 'no' }, { them: 'i didn\'t even say it!!', sticker: 'junpei-7' } ] }
      ] }
    ]
  });

  add('mitsuru', {
    calls: [
      { id: 'pc-mitsuru-1', min: 3, scene: [
        { n: "Mitsuru called the way she did everything, as if the call had been on a list, which it probably had." },
        { s: 'mitsuru', f: 'neutral', t: "Solar. Do you have a moment? I have a question of some importance." },
        { s: 'solar', f: 'serious', t: "Of course. What's wrong?" },
        { s: 'mitsuru', f: 'serious', t: "Nothing is wrong. I'm at the convenience store. The steamer has three kinds of nikuman. I had assumed there was only one kind." },
        { s: 'solar', f: 'happy', t: "Get the regular. Then next time, the pizza one." },
        { s: 'mitsuru', f: 'surprised', t: "Pizza. In a bun." },
        { s: 'solar', f: 'neutral', t: "Trust me." },
        { s: 'mitsuru', f: 'happy', t: "...I'll note it in the planner. Under 'next time.' Thank you. That's all." },
        { n: "She did not hang up immediately. She seemed to be checking whether anything else was required of her, the way she lingered at doors." }
      ] },
      { id: 'pc-mitsuru-2', min: 3, scene: [
        { n: "In the background, the unmistakable tick of a clock in a very quiet room." },
        { s: 'mitsuru', f: 'neutral', t: "Forgive me. I'm in the council room, and the agenda for tomorrow has twelve items. I need someone to tell me which of them I can cut." },
        { s: 'solar', f: 'neutral', t: "Read them to me." },
        { n: "She read them. Solar recognised the word 'vending machine' three times." },
        { choose: [
          { t: "Cut every vending machine item. Do them in one go.", then: [
            { s: 'mitsuru', f: 'surprised', t: "...Combine them. Of course. Why didn't I combine them." },
            { s: 'mitsuru', f: 'happy', t: "That's nine items. Thank you, Solar. That's an hour of my life." }
          ] },
          { t: "Which one do you actually care about?", then: [
            { s: 'mitsuru', f: 'neutral', t: "Item four. The library hours." },
            { s: 'mitsuru', f: 'happy', t: "...Then I'll start with four, and see who's still awake by twelve. That's very sensible." }
          ] }
        ] }
      ] },
      { id: 'pc-mitsuru-3', min: 6, scene: [
        { s: 'mitsuru', f: 'neutral', t: "Solar. I'm calling with something small. I hope that's acceptable." },
        { s: 'solar', f: 'happy', t: "Small is my favorite size." },
        { s: 'mitsuru', f: 'happy', t: "I ate fries today. At the burger place by the station. Alone. I ordered at the counter without rehearsing." },
        { s: 'solar', f: 'surprised', t: "Mitsuru. That's huge." },
        { s: 'mitsuru', f: 'neutral', t: "It was not huge. It was a medium. But I wanted to tell someone, and you were the first name I thought of." },
        { s: 'mitsuru', f: 'happy', t: "Left to right, before you ask." }
      ] }
    ],
    topics: [
      { id: 'day', label: 'How was your day?', v: [
        { min: 3, msgs: [ { me: 'how was your day' }, { them: 'Productive. Three meetings, one resolution, and a disagreement about the fountain.' }, { me: 'what about the fountain' }, { them: 'Whether it should be on.' }, { them: 'It should be on.' } ] },
        { min: 6, msgs: [ { me: 'how was your day' }, { them: 'Long. Thank you for asking. People rarely do.' }, { me: 'i always will' }, { them: 'I believe you.', sticker: 'mitsuru-6' } ] }
      ] },
      { id: 'plans', label: 'Plans this weekend?', v: [
        { min: 3, msgs: [ { me: 'plans this weekend?' }, { them: 'Fencing on Saturday. On Sunday I intend to read something that has nothing to do with school.' }, { me: 'like what' }, { them: 'I have not decided. That is part of the plan.' } ] },
        { min: 6, end: 'invite', msgs: [ { me: 'plans this weekend?' }, { them: 'Very few. I have a list item that requires a second person.' }, { me: 'what is it' }, { them: 'Crepes. Paulownia Mall. Apparently one stands in line.' }, { them: 'I have never stood in a line.' } ] }
      ] },
      { id: 'own', label: 'Tea later?', v: [
        { min: 3, end: 'invite', msgs: [ { me: 'tea later?' }, { them: 'Gladly. I have a new tin. It claims to taste of peaches.' }, { me: 'does it' }, { them: 'We will find out together.', sticker: 'mitsuru-3' } ] },
        { min: 6, msgs: [ { me: 'tea later?' }, { them: 'I would like that.' }, { them: 'I have also bought cookies. From a box. They were on the list.' }, { me: 'the list is going great' }, { them: 'It is, isn\'t it.' } ] }
      ] }
    ]
  });

  add('fuuka', {
    calls: [
      { id: 'pc-fuuka-1', min: 3, scene: [
        { n: "Fuuka sounded slightly out of breath, and behind her, something was sizzling more than it should have been." },
        { s: 'fuuka', f: 'surprised', t: "Senpai! Sorry! Do you know if you're supposed to put the oil in before the pan is hot or after?" },
        { s: 'solar', f: 'neutral', t: "After. Why is it hissing?" },
        { s: 'fuuka', f: 'sad', t: "...Because I did before." },
        { s: 'solar', f: 'serious', t: "Turn the heat down. Don't add water." },
        { n: "A clatter. A small *eep*. Then, slowly, quiet." },
        { s: 'fuuka', f: 'happy', t: "Okay. Okay, it's fine. It's fine! I'm writing it down. 'Oil after.' Attempt eleven." },
        { s: 'solar', f: 'happy', t: "What's attempt eleven of?" },
        { s: 'fuuka', f: 'happy', t: "I'm not allowed to say yet. But you'll be the first to taste it. Sorry in advance!" }
      ] },
      { id: 'pc-fuuka-2', min: 3, scene: [
        { s: 'fuuka', f: 'neutral', t: "Senpai, can you hear me okay? I'm testing something." },
        { s: 'solar', f: 'neutral', t: "Loud and clear. What are you testing?" },
        { s: 'fuuka', f: 'happy', t: "My phone! I opened it up. There was dust in the microphone. A lot of dust." },
        { s: 'solar', f: 'surprised', t: "You opened your phone?" },
        { s: 'fuuka', f: 'neutral', t: "Just a little. With the tiny screwdriver. I put it back better. I think." },
        { choose: [
          { t: "You sound great. Like you're in the room.", then: [
            { s: 'fuuka', f: 'happy', t: "Really? Oh, good. I'm writing that down. 'Like I'm in the room.'" }
          ] },
          { t: "Could you do mine?", then: [
            { s: 'fuuka', f: 'surprised', t: "Yes! I mean, if you want. I'd be very careful. I'd number the screws." }
          ] }
        ] }
      ] },
      { id: 'pc-fuuka-3', min: 6, scene: [
        { n: "There was music faintly on the line, old and crackly, and it took Solar a moment to place it as a radio." },
        { s: 'fuuka', f: 'happy', t: "Senpai, listen. Can you hear it?" },
        { s: 'solar', f: 'neutral', t: "...Is that a weather report?" },
        { s: 'fuuka', f: 'happy', t: "From the coast! On the radio from the flea market. It didn't work when I bought it. It works now." },
        { s: 'solar', f: 'happy', t: "That's amazing. What's the weather on the coast?" },
        { s: 'fuuka', f: 'neutral', t: "Cloudy. Which isn't very exciting. But it's cloudy two hundred kilometres away and I can hear it." },
        { s: 'fuuka', f: 'happy', t: "I wanted to tell someone who'd think that was nice." }
      ] }
    ],
    topics: [
      { id: 'day', label: 'How was your day?', v: [
        { min: 3, msgs: [ { me: 'how was your day' }, { them: 'good!! the computer club got a new monitor' }, { them: 'it is very big. i keep looking at it' }, { me: 'did u name it' }, { them: '...yes. please don\'t ask what' } ] },
        { min: 6, msgs: [ { me: 'how was your day' }, { them: 'quiet. i liked it' }, { them: 'i ate lunch on the roof. it was windy and my rice blew a little' }, { me: 'a little??' }, { them: 'one grain. i was very sad about the grain', sticker: 'fuuka-6' } ] }
      ] },
      { id: 'plans', label: 'Plans this weekend?', v: [
        { min: 3, msgs: [ { me: 'plans this weekend?' }, { them: 'there\'s an electronics flea market on sunday!!' }, { them: 'i\'m going to look at things i can\'t afford' }, { me: 'love that for u' }, { them: 'i love it too :)' } ] },
        { min: 6, end: 'invite', msgs: [ { me: 'plans this weekend?' }, { them: 'i was going to try tamagoyaki again' }, { them: 'number 42' }, { me: 'i\'ll be there for 42' }, { them: 'thank you senpai!! i\'ll make one for you that\'s actually good. statistically' } ] }
      ] },
      { id: 'own', label: 'Need a taste tester?', v: [
        { min: 3, end: 'invite', msgs: [ { me: 'need a taste tester?' }, { them: 'always!!' }, { them: 'it\'s curry. it\'s a little bit blue' }, { me: 'blue???' }, { them: 'i don\'t know either', sticker: 'fuuka-3' } ] },
        { min: 6, msgs: [ { me: 'need a taste tester?' }, { them: 'not today!! today i\'m the taster' }, { them: 'mitsuru-senpai is making toast. i\'m supervising' }, { me: 'how is it going' }, { them: 'she\'s holding the bread very formally' } ] }
      ] }
    ]
  });

  add('aigis', {
    calls: [
      { id: 'pc-aigis-1', min: 3, scene: [
        { n: "Aigis waited for Solar to speak first, and when she did, answered at once, as if she had been prepared." },
        { s: 'aigis', f: 'neutral', t: "Solar-san. This is Aigis. I am calling to test the telephone." },
        { s: 'solar', f: 'happy', t: "Hi, Aigis. It works." },
        { s: 'aigis', f: 'neutral', t: "Yes. I could have determined that without you. But Junpei-san said that a telephone call is better when someone answers." },
        { s: 'solar', f: 'neutral', t: "He's right, for once." },
        { s: 'aigis', f: 'happy', t: "I will tell him you said for once. He will be pleased." },
        { choose: [
          { t: "He won't be.", then: [
            { s: 'aigis', f: 'neutral', t: "Then I will tell him the first part only. That is called editing." }
          ] },
          { t: "(Say nothing. Just stay on the line.)", then: [
            { n: "Neither of them said anything for a while. Aigis did not seem to mind. Eventually she said *thank you, the test is complete,* very softly, and hung up." }
          ] }
        ] }
      ] },
      { id: 'pc-aigis-2', min: 3, scene: [
        { s: 'aigis', f: 'serious', t: "Solar-san. There is a cat on the wall behind the dorm again. It is looking at me." },
        { s: 'solar', f: 'neutral', t: "What's it doing?" },
        { s: 'aigis', f: 'serious', t: "Nothing. It has been doing nothing for eleven minutes. I am uncertain whether it requires assistance." },
        { s: 'solar', f: 'happy', t: "It's probably just sitting. Cats like to sit." },
        { s: 'aigis', f: 'neutral', t: "I see. I also like to sit. I did not know it was a shared interest." },
        { s: 'aigis', f: 'happy', t: "It has closed its eyes. Is that a good sign?" },
        { s: 'solar', f: 'happy', t: "That's the best sign. It means it trusts you." },
        { s: 'aigis', f: 'flustered', t: "...Oh. I will remain very still, then." }
      ] },
      { id: 'pc-aigis-3', min: 6, scene: [
        { s: 'aigis', f: 'neutral', t: "Solar-san. I have a question about rice balls. It is not urgent. I am calling because I wanted to hear your answer and not read it." },
        { s: 'solar', f: 'happy', t: "Ask away." },
        { s: 'aigis', f: 'neutral', t: "Fuuka-san says the salmon one is the best. Junpei-san says it is the tuna mayonnaise. They both say it in a voice that is very certain." },
        { s: 'solar', f: 'neutral', t: "It's the plum." },
        { s: 'aigis', f: 'surprised', t: "That is a third answer." },
        { s: 'solar', f: 'happy', t: "That's how food works. Everyone's right." },
        { s: 'aigis', f: 'happy', t: "I find that very inefficient. I also find that I like it. Thank you, Solar-san." }
      ] }
    ],
    topics: [
      { id: 'day', label: 'How was your day?', v: [
        { min: 3, msgs: [ { me: 'how was your day' }, { them: 'Satisfactory. I was asked to read aloud in class. I read very accurately.' }, { them: 'Junpei-san said I sounded like the news.' }, { me: 'is that bad' }, { them: 'I do not know. I like the news.' } ] },
        { min: 6, msgs: [ { me: 'how was your day' }, { them: 'Good, I think. I am still learning which days are good.' }, { them: 'Today I ate a melon bread in the sun. That seems to be one of the indicators.' }, { me: 'that\'s a top indicator' }, { them: 'I have logged it as one.' } ] }
      ] },
      { id: 'plans', label: 'Plans this weekend?', v: [
        { min: 3, msgs: [ { me: 'plans this weekend?' }, { them: 'I have none. I have been told this is normal and not a problem.' }, { me: 'it\'s the best kind of weekend' }, { them: 'Understood. I will try to enjoy having none.' } ] },
        { min: 6, end: 'invite', msgs: [ { me: 'plans this weekend?' }, { them: 'I would like to make one. With you, if that is acceptable.' }, { me: 'what kind of plan' }, { them: 'The roof. The sunset. It is predicted to be orange.' } ] }
      ] },
      { id: 'own', label: 'Sunset today?', v: [
        { min: 3, end: 'invite', msgs: [ { me: 'sunset today?' }, { them: 'Today the sun sets at seventeen twelve.' }, { them: 'I will be on the roof at seventeen eight. To be early.' }, { me: 'see u at 17:08' }, { them: 'Confirmed.' } ] },
        { min: 6, msgs: [ { me: 'sunset today?' }, { them: 'Cloudy. The sunset will not be visible.' }, { them: 'I would like to go up anyway. I am told the company is the part that matters.' }, { me: 'whoever told u that is very wise' }, { them: 'It was you, Solar-san.' } ] }
      ] }
    ]
  });

  add('ken', {
    calls: [
      { id: 'pc-ken-1', min: 3, scene: [
        { n: "The voice on the line was very polite and very quiet, the way someone talks when they're not sure they're allowed to be calling." },
        { s: 'ken', f: 'neutral', t: "Good afternoon, Solar-san. It's Ken. I'm sorry to call. Do you have a minute?" },
        { s: 'solar', f: 'happy', t: "For you, I have two. What's up?" },
        { s: 'ken', f: 'serious', t: "It's my homework. It says 'describe a person you admire.' I'm not asking you to do it. I'm asking what counts." },
        { s: 'solar', f: 'neutral', t: "Anyone counts. Who were you thinking?" },
        { s: 'ken', f: 'serious', t: "...The Red Featherman. But I think the teacher means a real person." },
        { choose: [
          { t: "Then pick someone real who's a little like him.", then: [
            { s: 'ken', f: 'neutral', t: "A little like him. ...Okay. I think I know who. I won't tell you. It would be strange." }
          ] },
          { t: "Write about Featherman anyway. Make it really good.", then: [
            { s: 'ken', f: 'happy', t: "Really? ...I could explain why he's a good example. With evidence." }
          ] }
        ] },
        { s: 'ken', f: 'happy', t: "Thank you very much. Sorry for taking your time. Goodbye." }
      ] },
      { id: 'pc-ken-2', min: 3, scene: [
        { n: "A dog barked on the line before anyone spoke. It was a happy bark." },
        { s: 'ken', f: 'neutral', t: "Solar-san, it's Ken. Koromaru wanted to call you. I'm the one holding the phone." },
        { s: 'solar', f: 'happy', t: "Hi, Koromaru." },
        { n: "Another bark, and the sound of a tail hitting something hollow, very fast." },
        { s: 'ken', f: 'happy', t: "He heard you. He's turning in a circle." },
        { s: 'solar', f: 'neutral', t: "Where are you two?" },
        { s: 'ken', f: 'neutral', t: "At the shrine. We're about to go home. I just wanted to check. That you're coming home too. For dinner." },
        { s: 'solar', f: 'happy', t: "I'll be there." },
        { s: 'ken', f: 'happy', t: "Okay. Good. We'll see you there." }
      ] },
      { id: 'pc-ken-3', min: 6, scene: [
        { s: 'ken', f: 'serious', t: "Solar-san. I need an honest answer. Is it childish to still like Featherman?" },
        { s: 'solar', f: 'neutral', t: "Did someone say that?" },
        { s: 'ken', f: 'neutral', t: "A boy at school. He said it to someone else. But I heard." },
        { s: 'solar', f: 'serious', t: "It's not childish. Akihiko drinks the same protein shake every single day. Nobody calls him childish. People like what they like." },
        { s: 'ken', f: 'neutral', t: "...That's true. And it tastes terrible. He told me." },
        { s: 'ken', f: 'happy', t: "Okay. Thank you. I'm going to keep watching it. At volume three." }
      ] }
    ],
    topics: [
      { id: 'day', label: 'How was your day?', v: [
        { min: 3, msgs: [ { me: 'how was your day' }, { them: 'Good, thank you. We had a quiz. I think I did well.' }, { them: 'How was your day, Solar-san?' }, { me: 'better now' }, { them: 'I\'m glad.' } ] },
        { min: 6, msgs: [ { me: 'how was your day' }, { them: 'It was all right. I practiced the guard stance thirty times.' }, { them: 'Koromaru watched all thirty. He did not look impressed.' }, { me: 'he\'s just jealous' }, { them: 'That\'s what I think too.' } ] }
      ] },
      { id: 'plans', label: 'Plans this weekend?', v: [
        { min: 3, msgs: [ { me: 'plans this weekend?' }, { them: 'Featherman on Sunday at seven-thirty.' }, { them: 'You can watch too, if you are awake. Please don\'t talk during the opening.' }, { me: 'i would never' }, { them: 'Thank you.' } ] },
        { min: 6, end: 'invite', msgs: [ { me: 'plans this weekend?' }, { them: 'I was going to practice at the playground on Saturday.' }, { them: 'If you came, I could practice against a real person.' }, { me: 'i\'d love to' }, { them: 'Okay! I mean, understood.' } ] }
      ] },
      { id: 'own', label: 'Walk Koro later?', v: [
        { min: 3, end: 'invite', msgs: [ { me: 'walk koro later?' }, { them: 'Yes, please. He likes it when there are two people.' }, { them: 'He can walk between us. He thinks it\'s a parade.' } ] },
        { min: 6, msgs: [ { me: 'walk koro later?' }, { them: 'He already went. He pulled me to the river.' }, { them: 'I didn\'t know I could run that fast.' }, { me: 'akihiko would be proud' }, { them: 'Please don\'t tell him. He will want me to do it at five in the morning.' } ] }
      ] }
    ]
  });

  add('shinjiro', {
    calls: [
      { id: 'pc-shinjiro-1', min: 3, scene: [
        { n: "He didn't say hello. He never did. She heard a knife on a board, steady, and then he talked over it." },
        { s: 'shinjiro', f: 'neutral', t: "You got ginger at the dorm? Don't lie to me about it." },
        { s: 'solar', f: 'neutral', t: "...Why would I lie about ginger?" },
        { s: 'shinjiro', f: 'neutral', t: "People lie about ginger. They say yes and it's the paste. The tube. That's not ginger." },
        { s: 'solar', f: 'happy', t: "It's the tube." },
        { s: 'shinjiro', f: 'neutral', t: "Tch. Figures. Fine. I'll get some." },
        { choose: [
          { t: "What are you making?", then: [
            { s: 'shinjiro', f: 'neutral', t: "Food. ...Soup. You'll find out." }
          ] },
          { t: "I'll buy the ginger.", then: [
            { s: 'shinjiro', f: 'surprised', t: "...You'll pick the wrong one." },
            { s: 'shinjiro', f: 'neutral', t: "Get the one that's heavy for its size. Not the shiny one. Shiny's old." }
          ] }
        ] },
        { n: "He hung up. The knife was still going when he did." }
      ] },
      { id: 'pc-shinjiro-2', min: 3, scene: [
        { n: "It rang four times before she got to it. When she answered, there was a long pause, and wind." },
        { s: 'shinjiro', f: 'neutral', t: "That dog. The white one, at the shrine. He eat today? You walk past there." },
        { s: 'solar', f: 'neutral', t: "I walked past this morning. He looked fine. Fat, even." },
        { s: 'shinjiro', f: 'neutral', t: "He's not fat. He's got a thick coat." },
        { s: 'solar', f: 'happy', t: "Right. Thick coat." },
        { s: 'shinjiro', f: 'neutral', t: "Don't do that." },
        { s: 'solar', f: 'neutral', t: "Do what?" },
        { s: 'shinjiro', f: 'happy', t: "That voice. Like you caught me at something. ...Fine. Thanks. That's it." }
      ] },
      { id: 'pc-shinjiro-3', min: 6, route: 'romance', scene: [
        { n: "His voice was lower than usual, and there was no knife, no wind, nothing behind it, like he'd gone somewhere quiet on purpose to make the call." },
        { s: 'shinjiro', f: 'neutral', t: "You eat yet." },
        { s: 'solar', f: 'neutral', t: "Not yet. Is this an invitation?" },
        { s: 'shinjiro', f: 'neutral', t: "It's a question. You never eat on time. I notice." },
        { s: 'solar', f: 'flustered', t: "...You notice?" },
        { s: 'shinjiro', f: 'surprised', t: "Don't. Don't make it a thing." },
        { s: 'shinjiro', f: 'neutral', t: "There's a bowl. In the fridge. Your name's on it. Heat it slow, not in the microwave." },
        { n: "Then, before she could say anything, quieter: *eat it while I'm on the phone. I wanna know if it's right.*" }
      ] }
    ],
    topics: [
      { id: 'day', label: 'How was your day?', v: [
        { min: 3, msgs: [ { me: 'how was your day' }, { them: 'fine' }, { me: 'detail pls' }, { them: 'found good daikon. cheap' }, { them: 'that\'s the detail' } ] },
        { min: 6, msgs: [ { me: 'how was your day' }, { them: 'long' }, { them: 'you eat?' }, { me: 'not yet' }, { them: 'eat. then ask me stuff' } ] },
        { min: 6, route: 'romance', end: 'invite', msgs: [ { me: 'how was your day' }, { them: 'ok' }, { them: 'better if you came by' }, { me: 'did u just say something nice' }, { them: 'no' }, { them: '...maybe. don\'t screenshot it' } ] }
      ] },
      { id: 'plans', label: 'Plans this weekend?', v: [
        { min: 3, msgs: [ { me: 'plans this weekend?' }, { them: 'no' }, { me: 'thats not a plan' }, { them: 'it\'s a great plan' } ] },
        { min: 6, end: 'invite', msgs: [ { me: 'plans this weekend?' }, { them: 'market sunday. early' }, { them: 'you can carry the rice if you want' }, { me: 'wow what an honor' }, { them: 'it is. nobody else gets to carry the rice' } ] }
      ] },
      { id: 'own', label: 'What are u cooking?', v: [
        { min: 3, msgs: [ { me: 'what are u cooking?' }, { them: 'why' }, { me: 'curious' }, { them: 'nikujaga' }, { them: 'there\'s extra. i always make extra. don\'t read into it' } ] },
        { min: 6, end: 'invite', msgs: [ { me: 'what are u cooking?' }, { them: 'come find out' }, { me: 'mysterious' }, { them: 'it\'s just stew' }, { them: 'come anyway' } ] }
      ] }
    ]
  });
})();
