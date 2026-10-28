/* Act IV story events (delivered, 8/24 → 11/21). Revamp story data (femc-game.html). Same format as story-act1.js.
   The searchers: texts first, then a fragment rings a charm, then someone who misses her crosses at midnight.
   Arrival dates are fixed here (the engine can't gate an event on fragment counts yet; see the report).
   Tartarus memory floors hand off as scripted fights: script ids memory-hoax, memory-runners, memory-strangers, memory-runners-2. */
(window.FEMC_GAME_EVENTS ||= []).push(
  { id: 'a4-first-text', date: '8/24', slot: 'late', title: 'unknown number', place: "Iwatodai Dorm · Solar's Room", time: 'Late Night', scene: [
    { act: { numeral: 'IV', title: 'delivered' } },
    { music: 'night' },
    { n: "Summer was ending the way it always seemed to here, not with a change in the weather but with a change in the light, the evenings coming down a few minutes earlier every day, the cicadas going quieter one tree at a time. School started again in a week. The dorm was full and loud and warm and it had become, without anybody saying so, home." },
    { n: "She went to bed early on Monday and didn't sleep. She lay on her side under the pink duvet in the black hoodie she always slept in, the one that had been in the wardrobe in April with nothing in its pockets, sleeves pulled over her hands, and watched the moon through the gap in the curtains, and thought about nothing, carefully, the way you carry something full to the brim." },
    { n: "At eleven fifty-one her phone lit up on the pillow beside her face." },
    { cg: 'story-unknown-text' },
    { n: "It was the phone Mitsuru had given her in April, pink and folding, with a little plastic heart on a strap that Yukari had hung on it the first week and Solar had never taken off. Seven people had the number. All seven of them were asleep in this building." },
    { n: "The screen said UNKNOWN. And under it, the first line of a message." },
    { phone: [
      { from: 'jaehyun', t: "Are you settling in alright?" }
    ], contact: 'Unknown number' },
    { n: "That was all. No name. No greeting. Five words with a capital at the front and a question mark at the end, punctuated like it had been checked over once before it was sent, by someone who didn't send things without checking them." },
    { n: "The time stamp under it was wrong. Not the time. The date. It said late August, which was right, and where the year should have been, there was a short row of dashes, the way a form looks when the box has been left empty." },
    { n: "Her thumb was already on the keys. She hadn't told it to be. It had moved the way it moved to pin her hair up in the mornings, the way her feet moved to the wrong building at dusk, the way her mouth knew the next line of a song. It knew this number. It wanted to answer this number the way a hand wants to answer a hand held out to it." },
    { choose: [
      { t: "(Type: Who is this?)", then: [
        { phone: [
          { from: 'solar', t: "Who is this?" },
          { from: 'jaehyun', t: "Very funny, Solar." },
          { from: 'jaehyun', t: "Do not be hostile. You know I just want to check on you." }
        ], contact: 'Unknown number' },
        { n: "Solar. He'd written her name. Not a guess. Not a question. The way you'd write the name of someone you'd been writing to your whole life." }
      ] },
      { t: "(Type: I think so. Thank you for asking.)", then: [
        { phone: [
          { from: 'solar', t: "I think so. Thank you for asking." },
          { from: 'jaehyun', t: "Good." },
          { from: 'jaehyun', t: "That's all I wanted to know." }
        ], contact: 'Unknown number' },
        { n: "That's all I wanted to know. She read it four times. It sounded like someone who'd wanted to know a great deal more and had decided, carefully, which part he was allowed to ask." }
      ] },
      { t: "(Type: Yes.)", then: [
        { phone: [
          { from: 'solar', t: "Yes." },
          { from: 'jaehyun', t: "Good. Call if you need anything." },
          { from: 'jaehyun', t: "You won't. But the offer stands." }
        ], contact: 'Unknown number' },
        { n: "You won't. Said like a fact about weather. Said like somebody who knew exactly how she was, and had been given a lifetime to get used to it." }
      ] }
    ] },
    { n: "She called the number. She didn't decide to. It rang once, a long thin ring, like a sound coming down a very long pipe, and then it stopped, and there was no voicemail and no dial tone, just a hush, like the inside of a shell." },
    { n: "She lay there with the phone against her ear listening to the hush until the clock on her desk said midnight, and the green came up in the window, and the phone in her hand went dead and dark the way everything did in the hour." },
    { cg: null },
    { n: "When the hour was over, the message was still there. She hadn't expected it to be. She read it once more, and then she turned the phone face down on the pillow and put her hand flat on top of it, the way you'd put your hand on a dog's back in the dark to make sure it was still breathing." },
    { n: "She didn't tell anyone in the morning. It felt like the girl's to tell. Then she realized the girl was her, and that she still didn't know how to tell it, and went down to breakfast and ate two pieces of toast and said she was fine." }
  ] },

  { id: 'a4-girls', date: '8/30', slot: 'late', title: 'drink water', place: "Iwatodai Dorm · Solar's Room", time: 'Late Night', scene: [
    { music: 'night' },
    { n: "Nothing for six days. She checked. She told herself she didn't, and she checked, in the bathroom, at lunch, in the gap between the end of a Tartarus run and the walk home, the way you check a stove you're almost sure you turned off. Nothing. The message from the unknown number sat at the top of her inbox with its row of dashes where a year should be." },
    { n: "Then, on Sunday night, the phone started buzzing on the desk and didn't stop. Not a call. Messages. So many, so fast, that the little pink phone walked itself across the desk on its own vibration and fell off the edge onto the rug." },
    { phone: [
      { from: 'hanni', t: "hanni added you to a group with hyein" },
      { from: 'hanni', t: "hanni: SOLAR we are so worried about you" },
      { from: 'hanni', t: "hanni: please let us know you are ok" },
      { from: 'hyein', t: "hyein: sorry solar!!! we didnt mean to leave you behind" },
      { from: 'hyein', t: "hyein: the party wasnt really that scary, just really stinky" }
    ], contact: 'hanni, hyein' },
    { n: "She sat on the rug with her back against the bed and read them in the dark. A party. Leaving her behind. *Stinky.* None of it meant anything. All of it hit her somewhere under the ribs, low, like a laugh she'd had since she was small, the kind you have with people who've seen you cry in a bathroom." },
    { choose: [
      { t: "(Type: wait who is this??)", then: [
        { phone: [
          { from: 'solar', t: "wait who is this??" },
          { from: 'hyein', t: "hyein: its US" },
          { from: 'hyein', t: "hyein: ur sorority sisters??" },
          { from: 'hanni', t: "hanni: hanni and hyein!!! did you hit your head??" }
        ], contact: 'hanni, hyein' }
      ] },
      { t: "(Type: im ok?? what party)", then: [
        { phone: [
          { from: 'solar', t: "im ok?? what party" },
          { from: 'hyein', t: "hyein: WHAT PARTY" },
          { from: 'hyein', t: "hyein: the sigma party solar. the STINKY one" },
          { from: 'hanni', t: "hanni: oh no she hit her head" }
        ], contact: 'hanni, hyein' }
      ] },
      { t: "(Type: ugh im fine tho guys)", then: [
        { phone: [
          { from: 'solar', t: "ugh im fine tho guys" },
          { from: 'hanni', t: "hanni: ok good!!! thats all we wanted" },
          { from: 'hyein', t: "hyein: she said ur fine" },
          { from: 'hyein', t: "hyein: hanni she said it. she said the thing" },
          { from: 'hyein', t: "hyein: solar is NEVER fine before noon" }
        ], contact: 'hanni, hyein' }
      ] }
    ] },
    { music: 'world-runners' },
    { n: "She hadn't decided how to type it. Her thumbs had, lowercase and lazy and a little rude, the way they'd typed every message she'd sent since April to people who'd never once asked why she wrote like that. It looked right in there. It looked like it lived there." },
    { n: "It wasn't before noon. It was nearly midnight. But the screen said the messages had been sent at a quarter to ten in the morning, on a day with dashes where the year should be, and somewhere a girl called Hyein was eating breakfast and rolling her eyes at a friend who always said the same thing, and Solar laughed, out loud, alone on the rug, and then put her hand over her mouth, and then didn't know what to do with her face at all." },
    { phone: [
      { from: 'hanni', t: "hanni: okay well as long as youre safe!!!" },
      { from: 'hyein', t: "hyein: drink water. ttyl" }
    ], contact: 'hanni, hyein' },
    { n: "Drink water. She looked at it for a long time. She got up and went down to the kitchen in the dark and drank a whole glass of water at the sink, standing up, because somebody had told her to, and because it was the first instruction anyone had given her in five months that felt like it came from someone who loved her and had no idea they were giving it." },
    { fragment: 'runners-phone' },
    { n: "Upstairs, the phone was lit up on the rug where she'd left it, the little screen glowing in the dark like a window in a house across a valley. Two names at the top of the thread. Her thumb knew both of them. She didn't." },
    { n: "Somewhere a bell rang, once, very faintly, gold and small, like the bell on a cat's collar three rooms away. She was the only one awake to hear it." }
  ] },

  { id: 'a4-maeumi', date: '9/1', slot: 'early', title: "someone else's dog", place: 'Naganaki Shrine', time: 'Early Morning', cast: { 'boy-voice': "A Boy's Voice" }, scene: [
    { music: 'day' },
    { n: "She cut through the shrine on the first morning of the new term because she was early, earlier than she had any right to be, the sky still the washed-out blue of something that hadn't decided what kind of day it was going to be. And because Koromaru was usually there before school, sitting by the torii where he used to sit with the old priest, and she'd started to like saying good morning to him in a place that wasn't the dorm." },
    { n: "He was there. He had a tennis ball, old and gray and soft with use, and the expression of a dog who had been waiting for exactly her." },
    { s: 'koromaru', f: 'happy', t: "Woof!" },
    { n: "She threw it. It went farther than she meant, past the little playground and off the stone path into the hedge, and something came out of the hedge with it in its mouth that was not Koromaru. A tiny dog. Brown eyes, a soft brown-and-cream coat, a tail going so hard its whole back half swung along with it." },
    { n: "Koromaru decided at once, with his entire body, that they were friends, and the little dog went over with a squeak." },
    { choose: [
      { t: "Koromaru! Gentle.", then: [
        { s: 'koromaru', f: 'sad', t: "Arf..." },
        { n: "He sat at once, ears flat, looking enormously sorry, which was more than most people managed." }
      ] },
      { t: "(Scoop up the little dog.)", then: [
        { n: "It weighed nothing. It licked her chin twice, very fast, like it was in a hurry to get that done, and squirmed to be put down." }
      ] }
    ] },
    { n: "Her hand had gone into her blazer pocket for something. She took it out and looked at it and there was nothing in it, and she understood her hand had been reaching for a treat. A little bone-shaped biscuit, the kind you keep loose in your pocket on morning walks for a big dog with silly short legs and too much fur, who runs after a ball like it's the best idea anyone's ever had." },
    { n: "A leash in her other hand. A tug at the end of it. Six thirty in the morning in a quiet street, birds, and the whole day still folded up and unused." },
    { s: 'boy-voice', t: "Maeumi!" },
    { n: "The voice came from somewhere past the torii. A boy's voice, scared and furious at the same time, the way people sound when they love something very small." },
    { s: 'boy-voice', t: "You should learn how to better control your dog before someone gets hurt." },
    { choose: [
      { t: "He's not my dog.", then: [
        { n: "It was true. It didn't feel like much of a defense. It felt, somehow, like a thing she'd said before, on a pavement, with her face hot, to the back of someone walking away." }
      ] },
      { t: "Sorry! He was just trying to play.", then: [
        { n: "She said it to the gate, mostly. The gate didn't argue. She knew, with total certainty, that the next thing she was going to think was *what a jerk*, and then she thought it." }
      ] }
    ] },
    { n: "She turned around. There was nobody there. Just the gravel, and the torii, and the long shadow of the shrine roof, and when she looked back down, the little dog was gone too, and the ball was sitting at Koromaru's feet like it had never left." },
    { s: 'koromaru', f: 'neutral', t: "Woof." },
    { fragment: 'hoax-leash' },
    { n: "She thought about the voice all through the opening ceremony. It had sounded like a boy who would yell at a stranger at six-thirty in the morning and then go home and feel bad about it all day, and never once say so. Somewhere, she thought, some girl had been yelled at like that. Somewhere, some girl had been annoyed about it for weeks. She had a strange, warm, unfair feeling that the girl had been her." }
  ] },

  { id: 'a4-hate-club', date: '9/1', slot: 'late', title: 'park jihoon hate club', place: "Iwatodai Dorm · Solar's Room", time: 'Late Night', scene: [
    { music: 'joy' },
    { n: "The first day of term had been long and loud and she'd come home with three new pieces of homework and a headache, and she was halfway into the black hoodie when her phone started going off on the desk like a smoke alarm." },
    { phone: [
      { from: 'junkyu', t: "junkyute added you to \"PARK JIHOON HATE CLUB\"" },
      { from: 'junkyu', t: "junkyute: SOL!!! ur back in the gc!!!" },
      { from: 'asahi', t: "asanoonecares: oh goodie just what i needed" },
      { from: 'cherry', t: "cherryblossoms: remember who's really in 1st mf" },
      { from: 'junkyu', t: "junkyute: are u ok solar!!! do u need some ice cream and hugs!!!" },
      { from: 'jihoon', t: "jihoney: i was literally on my way to your house as soon as i saw that" },
      { from: 'jihoon', t: "jihoney: as her best friend it is RIGHTFULLY MY JOB to bring her ice cream when she is sad over x reason" },
      { from: 'jihoon', t: "jihoney: btw can u tell me what x reason is so i know what size of ice cream to buy? : )" }
    ], contact: 'PARK JIHOON HATE CLUB' },
    { n: "She sat down on the edge of the bed with one arm still caught in the hoodie and read it all twice. It went on. It went on for a long time. Somebody was studying. Somebody else thought that was insane. Somebody called Cherry wanted someone called Jihoon thrown out of the chat, at length, with feeling. Somebody did pilates, apparently, and everybody knew about it, and everybody was sick of it." },
    { n: "Her own name was in there. *solarsystem*. Her own name, as a joke, said all in one breath, typing things in capital letters at people who typed back in capital letters, and she hadn't written any of it, and she had written all of it." },
    { choose: [
      { t: "(Type: OK BUT WHOS BRINGING THE ICE CREAM)", then: [
        { phone: [
          { from: 'solar', t: "OK BUT WHOS BRINGING THE ICE CREAM" },
          { from: 'jihoon', t: "jihoney: ME. obviously. the light of your disgusting life" },
          { from: 'cherry', t: "cherryblossoms: fking projectile vomiting imagine liking anything abt park jihoon" },
          { from: 'junkyu', t: "junkyute: SOL IS ALIVE!!! :D" }
        ], contact: 'PARK JIHOON HATE CLUB' },
        { n: "She looked at what she'd typed. Capital letters, no full stop, shouted into a room full of people shouting back. Her thumbs had done it on their own, the way they'd done every message since April, and for the first time it didn't look strange on the screen. It looked like it had finally found the room it was for." }
      ] },
      { t: "(Type: im in the wrong chat lol)", then: [
        { phone: [
          { from: 'solar', t: "im in the wrong chat lol" },
          { from: 'asahi', t: "asanoonecares: lmao she wishes" },
          { from: 'jihoon', t: "jihoney: sol what are u on" },
          { from: 'jihoon', t: "jihoney: im getting the large tub. this is a large tub situation" }
        ], contact: 'PARK JIHOON HATE CLUB' }
      ] },
      { t: "(Don't type anything. Keep reading.)", then: [
        { n: "She didn't type. She read. Forty messages, sixty, a whole evening of other people being loud at each other in a room she wasn't in, and somewhere around the fiftieth she realized she was smiling, and had been for some time, and her face hurt." }
      ] }
    ] },
    { music: 'world-hoax' },
    { n: "The messages were old. She could tell. Not from the stamps, which had their row of dashes like all the others, but the way you can tell a photograph is old from the colors. They had the feel of something sent a long time ago, a summer ago, maybe, that had taken the long way round to reach her and arrived tired." },
    { n: "Somewhere, a girl had been sad over x reason, and a boy had been stuck at a traffic light, and a whole room of people had argued about who loved her best. She lay back on the bed with the phone on her chest and her arm still caught in the hoodie and looked at the ceiling." },
    { n: "Somewhere, a boy had said he'd get her something from a crane game and fed it coins for an hour while the claw slipped and slipped, and she'd stood beside him complaining the whole time and not once suggested they leave. She didn't know how she knew. Her hand, on the duvet, closed on a joystick that wasn't there." },
    { fragment: 'hoax-crane-game' },
    { n: "Somewhere very far off, too faint to be sure of, something small and metal ticked once, like a pin being pushed through card." }
  ] },

  { id: 'a4-hermit', date: '9/5', slot: 'evening', title: 'the first bell', place: 'Iwatodai Dorm · Command Room', time: 'Evening', scene: [
    { music: 'badfeeling' },
    { n: "The moon on the fifth of September was enormous and yellow, a harvest moon a few weeks early, and it came up over the bay so close and so heavy that Junpei, looking at it out of the lounge window, said it looked like it was thinking about landing." },
    { s: 'fuuka', f: 'neutral', t: "One. It's big, and it's very still, and it's at the tower. At the gate. Right at the foot of it, like it's waiting for someone to come out." },
    { s: 'fuuka', f: 'surprised', t: "And... one more. Not a Shadow. A person. He just came in. He's..." },
    { s: 'fuuka', f: 'neutral', t: "He's very excited about something." },
    { place: 'Tartarus · The Dark Hour', time: 'The Dark Hour', bg: 'tartarus-entrance' },
    { dark: true },
    { music: 'fullmoon' },
    { n: "At midnight they stood at the foot of the tower, all of them, the whole year's worth of S.E.E.S. in one long line in the green: Akihiko with his gloves, Junpei with his bat, Yukari's bow, Mitsuru's rapier, Aigis with her arms already raised, Ken holding his spear the way you hold something you've decided to be brave about, Koromaru low and ready, Shinjiro at the end of the line with his axe over his shoulder and his eyes on Ken." },
    { n: "The thing at the gate was a hermit. A great dark shell, crusted and old, with something inside it that watched them out of a slot, very patient, as though it had all the time in the world and was prepared to wait them out." },
    { battle: { id: 'hermit', op: 'hermit', title: 'The Hermit', desc: 'A Shadow in a shell at the foot of the tower, waiting them out.', forced: true, kind: 'operation' } },
    { music: 'night' },
    { n: "Afterward, in the last quarter of the hour, the city was very quiet. Solar stood a step behind the others in the courtyard at the foot of the tower with the ash coming down soft as snow, and listened, and found she was listening for something specific, and didn't know what." },
    { n: "At the edge of the courtyard a man in a green headband was sitting cross-legged on the pavement in front of a coffin, sketching it, fast, with a pen, in a book balanced on his knee, his whole face lit up with a delight so pure it was almost obscene." },
    { n: "And somewhere past him, down the long road back toward the station, at the very end of it, a small figure in a coat too big for her, pointing." },
    { s: 'fuuka', f: 'surprised', t: "Wait. Everybody, wait. Do you hear that?" },
    { n: "Nobody moved. And over the city, all at once, from everywhere and nowhere, a bell rang." },
    { n: "Just once. Small and clear and gold, the size of a bell you'd hang on a cat's collar, but it went out over the whole of Iwatodai like it was ringing in the sky itself, and the hair stood up on Solar's arms, because she'd heard it before. On the rug in her room on Sunday night. In the tower, every time she summoned, under the crack of the Evoker, so faint she'd been sure it was only her." },
    { s: 'fuuka', f: 'neutral', t: "It came from you. Solar, it came from... from your Persona. From her sash. I heard it go out, like a radio signal. Like a beacon." },
    { s: 'fuuka', f: 'surprised', t: "And something heard it. Somewhere very, very far away. Something heard it and turned its head." },
    { s: 'akihiko', f: 'serious', t: "Turned its head toward what?" },
    { s: 'fuuka', f: 'sad', t: "Toward her." },
    { dark: false },
    { place: "Iwatodai Dorm · Solar's Room", time: 'Night', music: 'night' },
    { n: "Her phone buzzed at twelve forty, when she was sitting on her bed still in her uniform with her boots on, not sleeping. A single message. From a number she didn't have saved, and didn't know, and that her thumb, when it hovered over it, very nearly called." },
    { phone: [
      { from: 'hyein', t: "SOL where are you" }
    ], contact: 'Unknown number · 11:58 PM' },
    { n: "Four words. No full stop. It was stamped eleven fifty-eight at night, and the date beside it didn't match anything. Not today. Not any day she could find. It wasn't like the others, the slow old ones that came in tired from a long way off. This one was fresh. This one had been typed by someone in a hurry, someone frightened, someone standing somewhere at two minutes to midnight with the phone shaking in their hand." },
    { n: "Tonight, she thought. Wherever they were, whenever they were, this one was from *tonight*." },
    { choose: [
      { t: "(Type: im here)", then: [
        { phone: [{ from: 'solar', t: "im here" }], contact: 'Unknown number' },
        { n: "It didn't send. The little clock beside it went round and round and round. She held the phone until her hand ached and it was still going round when she fell asleep." }
      ] },
      { t: "(Type: where are U??)", then: [
        { phone: [{ from: 'solar', t: "where are U??" }], contact: 'Unknown number' },
        { n: "It didn't send. It sat there with its little clock spinning, like a letter left on a hall table, waiting for somebody to come and take it to the post." }
      ] },
      { t: "(Hold the phone. Don't answer yet.)", then: [
        { n: "She didn't answer. She held the phone against her chest with both hands and felt it there like a second heartbeat, out of time with hers, and very far away, and getting closer." }
      ] }
    ] }
  ] },

  { id: 'a4-wifey', date: '9/8', slot: 'late', title: 'wifey', place: "Iwatodai Dorm · Solar's Room", time: 'Late Night', scene: [
    { music: 'night' },
    { n: "Low tide was at one-ten in the morning. She knew it without looking, the way she knew it every night now, and she couldn't sleep, the way she couldn't on the nights the sea went out, and she was lying in the dark doing nothing about it when the phone started up again." },
    { n: "A different number. A different kind of voice, even in text, even before she'd read a word. You could tell from the speed. They came in so fast they stacked on top of each other." },
    { phone: [
      { from: 'yunjin', t: "ur home??" },
      { from: 'yunjin', t: "babe answer me" },
      { from: 'yunjin', t: "im literally going to drive over there and climb the wall" },
      { from: 'yunjin', t: "i have the prada on. i will beat them with the prada" }
    ], contact: 'Unknown number' },
    { n: "The wall. She could see it. Gray stone, old, with a line of something sharp along the top. A gate in it, small and green, behind a row of big clay jars, that you'd only know about if you'd found the key when you were fifteen." },
    { choose: [
      { t: "(Type: im home. im fine)", then: [
        { phone: [
          { from: 'solar', t: "im home. im fine" },
          { from: 'yunjin', t: "ok ur fine" },
          { from: 'yunjin', t: "babe u only say ur fine when ur about to do something stupid" },
          { from: 'yunjin', t: "is ur mom standing behind u. blink twice. hello madam" }
        ], contact: 'Unknown number' }
      ] },
      { t: "(Type: who is this)", then: [
        { phone: [
          { from: 'solar', t: "who is this" },
          { from: 'yunjin', t: "ur WIFE???" },
          { from: 'yunjin', t: "oh" },
          { from: 'yunjin', t: "omg is this the burner. ok. very mysterious. i respect it" }
        ], contact: 'Unknown number' }
      ] },
      { t: "(Type: wifey.)", then: [
        { phone: [
          { from: 'solar', t: "wifey." },
          { from: 'yunjin', t: "MY WOMAN" },
          { from: 'yunjin', t: "ok ur alive. ur alive and ur being weird but ur alive" }
        ], contact: 'Unknown number' },
        { n: "She hadn't known she was going to type it until it was gone. It went out of her thumb like a reflex, like catching something thrown, and her whole chest went warm and stupid and she put her face into the pillow." }
      ] }
    ] },
    { phone: [
      { from: 'yunjin', t: "whatever it is tomorrow. im here. ill fight them all" },
      { from: 'yunjin', t: "go to sleep sol" },
      { from: 'yunjin', t: "(u wont)" },
      { from: 'yunjin', t: "(its low tide)" }
    ], contact: 'Unknown number' },
    { music: 'world-strangers' },
    { n: "She looked at the last one for a long time. Somebody knew. Somebody, somewhere, knew that she didn't sleep at low tide, and had known it long enough to make a joke of it, and loved her enough to put the joke in brackets, quietly, like a hand on the back of her neck." },
    { n: "Whatever it was tomorrow had already happened, she thought. These were old too. These had been sent the night before something, a long time ago, by someone who'd been awake for her, and she'd never answered, and the something had come anyway." },
    { n: "She didn't sleep. It was low tide. At two she got up and took her school skirt off the chair, where the hem had been coming down for a week, and found the little sewing kit in the bathroom cabinet, and sat on the floor under the desk lamp and mended it. She didn't decide to. Her hands did it, small, even, invisible stitches, every one the same length, the needle going in and out like something she'd done ten thousand times at this hour. Somebody's dress, she thought. Navy silk, long sleeves, pearls, a low chignon. A woman in her doorway at one in the morning with the hem of her coat wet, saying it all in order, and then, after a pause, *not the jade.* A date written on a card in fountain pen. A date she hadn't picked, coming closer with every stitch." },
    { fragment: 'strangers-needle' },
    { n: "When she looked at the clock it was three, and the hem was perfect, and somewhere far off, under everything, something green and smooth tapped once against something else, jade on jade, like a ring knocked against a glass to make a toast." }
  ] },

  { id: 'a4-mall', date: '9/12', slot: 'late', title: 'sol?!', place: 'Paulownia Mall', time: 'The Dark Hour', scene: [
    { flag: { 'arrived-hanni': true, 'arrived-hyein': true } },
    { music: 'mystery' },
    { n: "Saturday. The week had been quiet, too quiet, the phone silent since the low-tide messages, and Solar had started carrying it in her hand everywhere like a kid with a new toy, and Yukari had stopped teasing her about it because her face, apparently, did something when she looked at it that made teasing feel unkind." },
    { n: "At eleven fifty-nine Fuuka knocked on her door so hard it rattled." },
    { s: 'fuuka', f: 'surprised', t: "Solar. Solar, get up. There's two. Two signals. They just... they weren't there and then they were. In the mall. Paulownia Mall." },
    { s: 'fuuka', f: 'sad', t: "They're not like the others. The others feel lost. These feel like they're looking. And they're..." },
    { n: "She stopped. She put her hand over her mouth." },
    { s: 'fuuka', f: 'sad', t: "Solar, they're calling a name. Over and over. I can hear it from here. It's your name." },
    { place: 'Paulownia Mall · The Dark Hour', time: 'The Dark Hour', bg: 'darkhour-iwatodai-street' },
    { dark: true },
    { n: "She ran. She was faster than any of them, she always had been, and she didn't wait, and she didn't think, and she heard Akihiko behind her shouting her name and Mitsuru on the radio shouting it too, and she ran down the green street toward the mall with her armband half pinned and her boots unlaced, past coffins at the bus stop and coffins outside the convenience store, and her phone in her fist the whole way." },
    { n: "The mall was dark. Every shop window black, the fountain frozen mid-leap in a crown of still green water, coffins on the benches. And somewhere inside it, two voices, high and hoarse and frightened, going round and round the empty atrium like birds trapped indoors." },
    { n: "*Sol. Solar. SOL.*" },
    { n: "She came round the corner by the fountain and the hour ended." },
    { dark: false },
    { music: 'tender' },
    { music: 'world-runners' },
    { place: 'Paulownia Mall', time: 'Night', soft: true },
    { n: "Everything came back at once. The lights in the shop windows, warm and gold. The fountain falling. The noise of the Saturday night crowd, all of it at full volume, music from the karaoke, a couple arguing, the hiss of a coffee machine somewhere, as though somebody had taken a hand off a speaker." },
    { n: "And in the middle of the plaza, in front of a boutique window full of autumn coats, two girls standing frozen mid-step, as if the hour had let go of them in the middle of a stride." },
    { cg: 'searchers-hanni-hyein-find-solar' },
    { n: "Shopping bags at their feet, dropped and spilled, tissue paper and a shoebox lid. One girl in black with long dark hair and hoops in her ears. One in a blazer, taller, sharper, with her hair loose and her eyes already wet. Both of them looking straight at her." },
    { s: 'hyein', f: 'surprised', t: "SOL?!" },
    { n: "It came out of the taller one like a scream and a sob and a laugh at the same time, and then both of them had their hands over their mouths, both at once, exactly the same gesture, like girls who had been doing things at the same time for years, and they were crying, standing there in the middle of Paulownia Mall, in front of everyone, not caring at all." },
    { s: 'hanni', f: 'sad', t: "Oh my God. Oh my God. Sol. Solar. We've been looking... we've been looking everywhere, we've been walking for hours, Hyein made us go shopping because she said if we stopped walking she'd lose her mind..." },
    { s: 'hyein', f: 'sad', t: "Where WERE you? Where have you BEEN? We called you a thousand times, a thousand, your phone just rang and rang and... and... why are you dressed like that? What is that? Is that a costume? Is that on your ARM?" },
    { n: "Solar stood there. Her body knew them. Her body knew them so well that it hurt, the way a hand you've slept on hurts when the blood comes back. It knew the shape of the taller girl's shoulders when she cried. It knew the other one's hoops would catch on a scarf. It wanted to go to them so badly that her feet had actually moved, one step, before the rest of her caught up." },
    { n: "And the rest of her had nothing. Not a name. Not a room. Not a single day. Two strangers crying in front of a shop window, saying her name like it was theirs." },
    { choose: [
      { t: "I'm sorry. I don't... do I know you?", then: [
        { n: "She said it as kindly as she knew how. She said it in her best voice, the polite one, the one she used for teachers and shopkeepers and Ikutsuki. It was the worst thing she said all year." },
        { n: "The girl in the blazer stopped crying. Just stopped, all at once, like a tap turned off. The girl in black took a step back, and her hand found the other girl's sleeve and held on." }
      ] },
      { t: "Are you okay? Are you hurt?", then: [
        { n: "She said it the way she'd say it to anyone she found awake in the hour. Kindly. Professionally. Like a stranger." },
        { s: 'hanni', f: 'sad', t: "...Are WE okay?" },
        { n: "The girl in black looked at her, and at the armband, and at her face, and Solar watched her understand something in real time, and watched it go through her like a crack goes through ice." }
      ] },
      { t: "(Say nothing. You can't.)", then: [
        { n: "She couldn't say anything. She stood there with her mouth open and nothing in it, and the two girls looked at her face, and saw it, the nothing, and Solar watched it land in both of them, one after the other, like two stones dropped into the same well." }
      ] }
    ] },
    { s: 'hyein', f: 'surprised', t: "...Sol. It's us. It's Hyein. It's Hanni." },
    { s: 'hanni', f: 'sad', t: "Why are you looking at us like that?" },
    { cg: null },
    { n: "Akihiko came round the fountain at a run and stopped beside her, breathing hard, and looked at the two girls, and at Solar's face, and then, very quietly, stepped half a pace in front of her, the way he did in the tower. Mitsuru was behind him. Then the others. A whole ring of S.E.E.S. armbands around two crying girls with their shopping all over the floor, and the Saturday crowd parting around them like water around rocks." },
    { s: 'mitsuru', f: 'neutral', t: "My name is Mitsuru Kirijo. You must be very cold, and very tired. We have somewhere warm. Will you come with us?" },
    { n: "The girl in black, Hanni, the name was Hanni, looked at Mitsuru, and then past her, at Solar, for a long time. Then she bent down and started picking up the tissue paper, piece by piece, very carefully, folding each one, like it was the only thing in the world she still knew how to do." },
    { n: "Solar knelt down and helped her. She didn't decide to. Her hands knew how Hanni folded tissue paper, in thirds, edges matched, and did it the same way, and Hanni saw, and stopped, and looked at Solar's hands, and started crying again, silently this time, and didn't stop all the way back to the dorm." },
    { n: "It was the worst thing that happened that year. Solar would think so for a long time afterward. Not the tower, not the train. Two girls on a bright Saturday night in a mall, saying *it's us*, and her not knowing who *us* was." }
  ] },

  { id: 'a4-names', date: '9/13', slot: 'after', title: 'names, then', place: 'Iwatodai Dorm · Lounge', time: 'Daytime', scene: [
    { music: 'dorm' },
    { n: "Nobody slept much. In the morning the lounge looked like a waiting room in a hospital, everybody in yesterday's clothes and nobody saying the thing, and Junpei had made toast for twelve people out of nerves and there was toast on every surface." },
    { n: "Hanni and Hyein sat side by side on the couch in borrowed pajamas, Yukari's and Fuuka's, with their knees touching. Hanni had her hands around a mug of tea she wasn't drinking. Hyein had her phone in her lap and kept turning it over and over like a stone." },
    { s: 'mitsuru', f: 'neutral', t: "I think we should start with names. All of them. Then the rest." },
    { n: "So they did names. S.E.E.S. went round the room, one at a time, and the two girls repeated each one politely, the way you do at a party where you know you'll forget them all. Junpei tried to make a joke about his and it went nowhere, and he sat down looking stricken. Koromaru went and sat on Hanni's feet. Aigis said her designation and then, after a pause, that she was pleased to meet them, in a voice that sounded like she had looked up how to say it." },
    { s: 'hanni', f: 'neutral', t: "I'm Hanni. Pham Hanni. I'm a... we're at Syracuse. In New York. Me and Hyein and Sol are in the same sorority. Sol has the single on our floor." },
    { s: 'hyein', f: 'neutral', t: "Hyein. Fashion. Same sorority. I'm her sister. Not like, her sister. Her sister." },
    { n: "They went quiet. Everybody looked at Solar. Solar looked at her hands." },
    { choose: [
      { t: "Solar. I'm sorry. That's all I've got.", then: [
        { n: "She said it in the careful voice, the one for teachers and shopkeepers and Ikutsuki. Hyein made a sound like she'd been hit." },
        { s: 'hyein', f: 'sad', t: "Why are you TALKING like that. All careful. Like we're your teachers. I watched you text Yukari at breakfast. *omg ur so annoying lol.* That's YOU. That's exactly you. So why do you text like you and talk like that?" },
        { choose: [
          { t: "I don't know how I used to talk.", then: [
            { s: 'hyein', f: 'sad', t: "Like a menace. You talked like a menace. And you were mean about my hair and you stole my dry shampoo and you..." },
            { n: "She stopped. She put the back of her wrist against her mouth and held it there." }
          ] },
          { t: "Tell me. How do I talk?", then: [
            { n: "Hyein opened her mouth and nothing came out, and it was Hanni who answered, quietly, looking at the tea." },
            { s: 'hanni', f: 'neutral', t: "You say you're fine. A lot. Like, constantly. You say it before anyone's even asked." },
            { s: 'hanni', f: 'sad', t: "And then you're nicer to us than you are to yourself, and you think we don't notice." }
          ] }
        ] }
      ] },
      { t: "Solar. Hi. This is weird for everyone, huh.", then: [
        { n: "It came out lopsided and a little dry, before she'd thought about how to say it. Hyein stared at her. Then she laughed, once, wet and shocked, like someone who'd missed a step." },
        { s: 'hyein', f: 'sad', t: "Okay. Okay, that one was nearly you. You'd have said it meaner. And you'd have stolen Junpei's toast while you said it." },
        { s: 'hanni', f: 'neutral', t: "She would have. She'd have taken the crust and left him the middle and called it sharing." }
      ] },
      { t: "(Just say your name.)", then: [
        { s: 'solar', f: 'neutral', t: "Solar." },
        { n: "That was it. One word. Hyein waited for the rest of it, and there wasn't any, and Solar watched her understand that there wasn't any." },
        { s: 'hyein', f: 'sad', t: "You'd hate that. You'd hate being one word. You've never been one word in your life." }
      ] }
    ] },
    { s: 'akihiko', f: 'neutral', t: "How long has she been gone? From where you are?" },
    { n: "The two girls looked at each other." },
    { s: 'hanni', f: 'neutral', t: "...A night? We had a night in, just us. In the morning she was supposed to get on a train home, and she just... wasn't anywhere. We called and called, and we went out looking. We were out looking for, I don't know. Four hours? Five?" },
    { s: 'hyein', f: 'serious', t: "It was way longer than that. It felt like days. I'd slept, Hanni, I definitely slept, I remember sleeping on that bench." },
    { s: 'hanni', f: 'sad', t: "You didn't sleep, you closed your eyes for like ten minutes." },
    { s: 'hyein', f: 'serious', t: "Then why do I remember it being morning?" },
    { n: "They looked at each other again, and neither of them was sure, and Solar watched it frighten them in a way nothing else had." },
    { s: 'solar', f: 'neutral', t: "I've been here since April. Five months." },
    { n: "Nobody said anything for a long time. Hyein picked up her phone and turned it so they could all see. The clock on the screen said twelve oh one. It had said twelve oh one all night. Hanni held out her wrist. Her watch said the same, the second hand stopped dead, quivering slightly, like it wanted to go on and couldn't remember how." },
    { s: 'mitsuru', f: 'neutral', t: "Then it doesn't matter how long. You're here now. You'll stay here, both of you. There are rooms on the second floor nobody uses. One for each of you. I’ll have keys brought down." },
    { s: 'hanni', f: 'neutral', t: "We can't just..." },
    { s: 'mitsuru', f: 'neutral', t: "You can. I'll arrange it. That isn't an offer. I'm informing you." },
    { n: "Hyein looked at Mitsuru the way you look at someone who has just done something you didn't think people did. Then she laughed, wet and surprised, and wiped her nose on Fuuka's pajama sleeve, and said sorry, and Fuuka said it was fine, really, she had others." },
    { n: "Later, when the others had drifted out to give them room, it was just the three of them on the couch. Hyein on one side. Hanni on the other. Solar in the middle without having decided to sit there." },
    { s: 'hanni', f: 'neutral', t: "Okay. So. Here's what we've decided." },
    { s: 'hyein', f: 'neutral', t: "We decided it in the bathroom. At like four in the morning. It's binding." },
    { s: 'hanni', f: 'happy', t: "You don't have to remember us for us to be here. That's the whole decision. We're just going to keep showing up. Every day. Until it's annoying." },
    { s: 'hyein', f: 'happy', t: "It'll be annoying by Tuesday. We're very committed." },
    { choose: [
      { t: "...Okay.", then: [
        { n: "It was the only word she had. It came out cracked down the middle. Hanni put her arm around her, and Hyein put her arm around both of them, and Solar sat squashed between two strangers who smelled like Yukari's shampoo and something else underneath it, coconut and hairspray and a cold campus morning, and her body leaned into them before she'd told it to, like a plant toward a window." }
      ] },
      { t: "You don't have to do that.", then: [
        { s: 'hyein', f: 'serious', t: "Shut up. We want to. Shut up." },
        { s: 'hanni', f: 'happy', t: "She means we love you. She's bad at it at this hour." },
        { n: "Then they were both hugging her, hard, from both sides, and Solar sat there squashed between them with her arms pinned and her face hot, and didn't move, and didn't want to." }
      ] }
    ] },
    { music: 'world-runners' },
    { n: "That afternoon Hyein went through Solar's wardrobe, every item, holding each one up and making a face. She got to the black hoodie at the back, the one that had been in the wardrobe in April with nothing in its pockets, and held it up, and Solar's hands went out for it before she'd thought. Not for this one. For another one. Dark, enormous, a small orange S on the chest, the sleeves past her fingertips, a hoodie that wasn't hers and that she'd worn anyway, home across a cold lawn at an hour nobody should be awake, with her hands pulled up inside the cuffs and her face turned down into a collar that smelled of somebody else." },
    { fragment: 'runners-hoodie' },
    { n: "Hyein looked at her face and didn't say anything for once. Then she folded the black hoodie and put it back where it had been, very carefully, and pronounced the rest of the wardrobe a tragedy, and said it was okay, she'd fix it, she'd fix all of it. Hanni sat on the bed and watched them and didn't say anything, and every so often Solar caught her looking, not at the clothes, at Solar's hands, the way they moved, the way they folded things, as if she were checking each one against a list she kept somewhere and finding every single one present." }
  ] },

  { id: 'a4-ice-cream', date: '9/19', slot: 'late', title: 'a large tub', place: 'Iwatodai Strip', time: 'The Dark Hour', scene: [
    { flag: { 'arrived-jihoon': true } },
    { music: 'mystery' },
    { s: 'fuuka', f: 'neutral', t: "One. On the strip. Solar, he's... he's walking. Really fast. Like he's late for something." },
    { s: 'fuuka', f: 'surprised', t: "And he's holding something cold. Really cold. I don't know how I know that. It's like it's the only cold thing in the whole hour." },
    { place: 'Iwatodai Strip · The Dark Hour', time: 'The Dark Hour', bg: 'darkhour-iwatodai-street' },
    { dark: true },
    { n: "She didn't run this time. She walked. Fast, but walking, with Hanni and Hyein on either side of her because they'd refused to stay behind, Hyein in Solar's black hoodie, because she'd said it was cold and taken it off the back of Solar's chair without asking, like she'd done it a hundred times. Akihiko a few steps back. The strip was green and dead and full of coffins, the ramen shop's lantern hanging perfectly still, the pharmacy's sign dark." },
    { n: "And down the middle of the road, between the stopped cars, a boy was walking like he was late for something. Tall, broad in the shoulders, black hair streaked blond and wrecked by wind that wasn't blowing, a small stud catching the green light in his nose, gray sweatpants and a t-shirt and slides, like he'd left the house in a hurry, his jaw working at nothing in a way that wouldn't settle. In the crook of his arm, held against his chest like a baby, a tub of ice cream so large it looked like a joke." },
    { cg: 'searchers-jihoon-arrives' },
    { n: "He was talking to himself. Loudly." },
    { s: 'jihoon', f: 'neutral', t: "...left at the light, right at the thing, I KNOW where her house is, I've been going to her house since I was FOUR, why is everything green, why is everybody in a box, is this a flash mob, I swear to God if this is a flash mob..." },
    { n: "Hyein made a noise. A small, high, completely involuntary noise." },
    { cg: null },
    { music: 'world-hoax' },
    { n: "He looked up. He saw Hanni and Hyein first, and his face did nothing at all, two strangers. Then his eyes slid past them and found Solar, and stopped, and his whole body stopped with them, mid-step, one slide still in the air." },
    { s: 'jihoon', f: 'surprised', t: "SOL?" },
    { s: 'jihoon', f: 'happy', t: "Oh my God. Oh my GOD. There you are. Do you know how long I've been walking? In SLIDES? Do you know what this is doing to my calves? I do pilates for these. None of the traffic lights work! Everyone's in a BOX!" },
    { n: "He came at her across the road. Not a hug, quite. He came right up to her and stopped, very close, and held the tub out at her like a cop holding up a badge." },
    { s: 'jihoon', f: 'neutral', t: "I got the large tub. Don't make it weird. I know I haven't done the ice cream thing in a while, whatever, I was on my way to your house. As your best friend it is rightfully MY job, I don't care what Junkyu says, and then I took a wrong turn somewhere and everything went green, and now I'm here, and you're here, and..." },
    { s: 'jihoon', f: 'neutral', t: "...why are you wearing that?" },
    { n: "The tub was so cold it smoked faintly in the green. Solar could see frost on the outside of it, crisp and white. In the hour, where nothing moved and nothing changed, where the water in the fountains hung in the air and the steam over the ramen pots stood still, it was the only thing that was exactly as it should be. It wasn't melting. It hadn't melted all the way here. It was going to stay that cold forever if he held it long enough." },
    { choose: [
      { t: "I'm sorry. Who are you?", then: [
        { n: "He laughed. A big, easy, delighted laugh, the laugh of a boy who has known a girl since he was four and knows exactly how she does a bit." },
        { s: 'jihoon', f: 'happy', t: "Okay, very funny, Sol. Ten out of ten. You practiced that in the mirror, didn't you, you absolute freak. You practiced the face." },
        { n: "Nobody else laughed. He looked around at them. At Hanni's face, and Hyein's. At Akihiko, who had come up very quietly behind Solar's shoulder. He looked back at Solar, and waited for her to break, the way she always broke, and she didn't, and she watched him watch her not break." }
      ] },
      { t: "(Take the ice cream.)", then: [
        { n: "She took it. She didn't know why. Her hands came up for it the way they came up for the Evoker, sure and quick, and took it from him and held it against her stomach, freezing, and he let go and stood there with his arms empty and an enormous grin on his face that stayed there for one second, two, three." },
        { s: 'jihoon', f: 'happy', t: "See? See? Now you say thank you, Jihoon, you're the light of my disgusting life." },
        { n: "She didn't say it. She didn't know it was a thing you said. The grin stayed on his face a little too long, and then it didn't." }
      ] },
      { t: "Jihoon?", then: [
        { n: "It came out of her like a hiccup. She had no idea where it came from. It was just there, in her mouth, a name, and his face lit up so fast and so bright it was like watching a building's lights come on all at once." },
        { s: 'jihoon', f: 'happy', t: "YES. Jihoon. Your Jihoon. The best thing that's ever happened to you. Thank God, I thought you were doing a bit." },
        { s: 'solar', f: 'sad', t: "I don't... I'm sorry. I don't know why I said that. I don't know you." },
        { n: "The lights went out again, one floor at a time." }
      ] }
    ] },
    { s: 'hanni', f: 'sad', t: "She doesn't remember. Us either. She doesn't remember anyone." },
    { s: 'jihoon', f: 'neutral', t: "...What?" },
    { s: 'jihoon', f: 'neutral', t: "Who are you? Sol, who are these people? Why are they... no. No, she knows me. She's known me since preschool. She's known me since before she could SPELL. Nobody forgets this face. Look at it. Nobody's ever managed it." },
    { n: "He was looking at Solar the whole time he said it. Waiting. And she could see the exact second it stopped being a bit to him. It wasn't when Hanni said it. It was a second later, when he looked at Solar's face for the joke, the one she always made with her eyes when she was making one with her mouth, and it wasn't there." },
    { n: "His face. She would remember his face." },
    { dark: false },
    { n: "The hour ended. The strip came back on all at once, noise and neon and a taxi honking at the four of them standing in the road, and Jihoon didn't move out of the way of it, and Akihiko took him by the arm, gently, and moved him." },
    { place: 'Iwatodai Dorm · Front', time: 'Night', music: 'tender', soft: true },
    { n: "Mitsuru brought him inside for long enough to sit him down and put a cup of tea in his hands. Hanni put the ice-cream tub in the freezer, where it went on not melting. From the lounge came Jihoon's voice, asking somebody, very loudly, what year it was, and then, when Junpei told him, asking who had let that happen." },
    { s: 'mitsuru', f: 'neutral', t: "There's a Kirijo guesthouse by the station. I've had a room made up for you there. It's quieter than this building, and it has a lock you'll be glad of. We'll find you some clothes in the morning." },
    { s: 'jihoon', f: 'neutral', t: "A guesthouse. You're putting me in a hotel. She lives here, and you're putting me in a hotel." },
    { s: 'mitsuru', f: 'neutral', t: "Yes." },
    { n: "Jihoon looked from her to the stairs, where Solar's room was, and then at Solar, and for once didn't argue, which Hanni would say later was how she knew something was really wrong with him. Mitsuru took a key from the hook behind the desk and held the front door open, and waited." },
    { n: "Solar walked them as far as the gate. At the gate Jihoon turned round, walking backward up the street behind Mitsuru with his hands in his pockets and the green gone out of the sky behind him, and pointed at her." },
    { s: 'jihoon', f: 'serious', t: "I'm coming back at seven. For breakfast. Don't argue. I'm a guest, apparently. Guests get breakfast." },
    { n: "Hyein, beside her, said she didn't like him. Hanni said nobody had asked her to. Solar stood at the gate until he'd turned the corner, and didn't know why, and went up to bed, and lay awake with her hand on the phone." }
  ] },

  { id: 'a4-two-lists', date: '9/20', slot: 'evening', title: 'two lists', place: 'Iwatodai Dorm · Kitchen', time: 'Evening', cast: { sunews: 'SUnews', lockscreen: 'Notification' }, scene: [
    { music: 'dorm' },
    { n: "By Sunday Jihoon had been to the dorm for breakfast twice and dinner once and had started bringing his own chopsticks from the guesthouse, which nobody had asked him to do and which he described, to anyone who looked at them, as a hygiene decision. Mitsuru had added a line to the whiteboard by the fridge under the heading VISITORS. He had read it, and been offended by it, and signed it anyway." },
    { n: "Solar came down for water at nine and stopped on the stairs, because the three of them were in the kitchen, and they were talking about her." },
    { n: "Hanni and Hyein on one side of the table. Jihoon on the other, tipped back on two legs of his chair with his arms folded, like a man at a negotiation he intended to win. Between them, two sheets torn out of Hyein's sketchbook, and two lists, in two handwritings, and a pen Hyein kept taking off him." },
    { s: 'jihoon', f: 'neutral', t: "Read it again. Slower. I want to hear how wrong it sounds." },
    { s: 'hyein', f: 'serious', t: "She plays competitive Overwatch. She's on a whole team. She's MVP. People ask for her autograph. Sort of." },
    { s: 'jihoon', f: 'happy', t: "No, she doesn't. She calls me at six in the morning to demand I drive her to get coffee. That's her sport." },
    { s: 'hyein', f: 'neutral', t: "Still? Like, recently?" },
    { n: "It was half a beat late, for Jihoon." },
    { s: 'jihoon', f: 'neutral', t: "...She will." },
    { s: 'hanni', f: 'neutral', t: "She doesn't drink coffee at night. Ever. She says it's for psychopaths." },
    { s: 'jihoon', f: 'neutral', t: "That's not on my list. Why isn't that on my list? I've known her since she was FOUR, why am I learning things from a sorority girl in a borrowed pajama top?" },
    { s: 'hyein', f: 'serious', t: "Because you weren't paying attention, apparently." },
    { s: 'jihoon', f: 'serious', t: "I'm ALWAYS paying attention. Write that down. Under mine. Jihoon is always paying attention." },
    { n: "Hyein didn't write it down. Jihoon took the pen back and wrote it down himself, in capitals, and underlined it twice." },
    { s: 'hanni', f: 'neutral', t: "Okay, your turn. What's she doing. At yours." },
    { s: 'jihoon', f: 'neutral', t: "She's vice president of the student council." },
    { s: 'hyein', f: 'surprised', t: "Of WHAT?" },
    { s: 'jihoon', f: 'neutral', t: "Of the student council. She ran. She gave speeches. There were posters. It was a whole thing. I voted like ten times." },
    { s: 'hanni', f: 'neutral', t: "Vice president. Not president?" },
    { n: "Jihoon's chair came down onto all four legs." },
    { s: 'jihoon', f: 'neutral', t: "The other guy won. It's a long story. It's a boring story. Next question." },
    { n: "Hanni looked at him for a long second, at the jaw and the hands, the way Solar had seen her look at people on the first night, checking something against something. She didn't push. She wrote *vice president* on Jihoon's list for him, very neatly, and moved on." },
    { s: 'jihoon', f: 'neutral', t: "My turn. Does she have a guy? Over there. At yours." },
    { s: 'hyein', f: 'happy', t: "Oh, she has a..." },
    { s: 'hanni', f: 'serious', t: "No." },
    { s: 'jihoon', f: 'surprised', t: "She has a WHAT." },
    { s: 'hanni', f: 'neutral', t: "She has a very busy schedule. Hyein. Eat your rice." },
    { n: "Hyein ate her rice. She ate it looking at the ceiling with her cheeks very full and her eyes very wide, like a person who had been elbowed hard under a table and was choosing to rise above it. Jihoon looked from one of them to the other and narrowed his eyes." },
    { s: 'hyein', f: 'serious', t: "Does she have one at yours?" },
    { n: "It was a long pause, for Jihoon. It was almost a whole second." },
    { s: 'jihoon', f: 'neutral', t: "There's a guy. He doesn't count. He's a math competition in a blazer." },
    { s: 'hanni', f: 'neutral', t: "So yes." },
    { s: 'jihoon', f: 'serious', t: "So NO. So it doesn't count. Write down that it doesn't count." },
    { n: "Nobody wrote it down. They sat with the two lists between them, and the rice going cold, and for a while nobody said anything, and on the stairs Solar found she'd sat down on the step without meaning to, with her arms around her knees, in the dark." },
    { s: 'hanni', f: 'sad', t: "It's weird. Isn't it. Everything on yours is her. Everything on ours is her. And none of it matches." },
    { s: 'jihoon', f: 'neutral', t: "Some of it matches." },
    { n: "He pulled both sheets toward him and went down them with the pen, and drew a line between one thing on Hanni's and one on his. Then another. Then another, slower." },
    { s: 'jihoon', f: 'neutral', t: "Says she's fine. Says it before you ask. Says it with her whole face. That's on both." },
    { s: 'hyein', f: 'neutral', t: "Mean to people she loves. Like, specifically mean. Targeted." },
    { s: 'jihoon', f: 'happy', t: "That's on both. That's my favorite one. That's how you know you're in." },
    { s: 'hanni', f: 'neutral', t: "Sits in the middle. Always. Even if there's room on the end." },
    { n: "Jihoon drew the last line and put the pen down and looked at the two lists, joined together now down the middle with ink, a lopsided ladder of a girl." },
    { s: 'jihoon', f: 'neutral', t: "So she's one person. She's just more of one person than I thought." },
    { s: 'jihoon', f: 'neutral', t: "That's so annoying. That's so typical of her. Of course she'd be in more than one place. She's never once in her life been satisfied with one." },
    { choose: [
      { t: "(Go down.)", then: [
        { n: "She went down. All three of them turned around at once and went quiet the way people go quiet when the person they were talking about walks in, which is to say, extremely loudly." },
        { s: 'jihoon', f: 'neutral', t: "We were talking about you. Obviously. You're the only interesting thing in this building. Sit down." },
        { n: "Hyein shoved over on the bench. Hanni slid the two lists across the table so Solar could see them, and didn't say anything, and Solar read them both, all the way down, and then picked up the pen and, very carefully, in a third handwriting, drew one more line, between *eats all my ice cream* on Jihoon's list and *steals my dry shampoo* on Hyein's." },
        { s: 'jihoon', f: 'surprised', t: "...She's doing it. She's contributing. Sol, you're not allowed to contribute to the research, you're the research." }
      ] },
      { t: "(Go back upstairs.)", then: [
        { n: "She went back up without her water. She lay in bed in the dark and listened to them through the floor for a long time, Jihoon's laugh, which was enormous, Hyein telling him to keep it down, Hanni laughing at both of them, three people from two places that had never met, arguing over her at a kitchen table like they'd been doing it for years." },
        { n: "She fell asleep before they stopped. In the morning, both lists were on the fridge, under a magnet, joined down the middle, and nobody would say who had put them there." }
      ] }
    ] }
  ] },

  { id: 'a4-lamppost', date: '9/26', slot: 'late', title: 'in the frame', place: 'Iwatodai · Riverside', time: 'The Dark Hour', scene: [
    { flag: { 'arrived-minji': true } },
    { music: 'mystery' },
    { n: "The streetlamp at the bottom of the river path had been flickering since April, a tired stuttering amber nobody from the city had ever come to fix, and Solar had picked up the habit of stopping under it on the way home without ever deciding to, the way some people touch a doorframe for luck." },
    { n: "On Saturday night she went down there on her own at a quarter to midnight. She didn't tell anyone. Fuuka had said, at dinner, in a small voice, that she thought there might be someone else soon, by the river, she couldn't be sure, it was like hearing a song on a radio three rooms away. Solar hadn't said anything. She'd finished her rice. She'd put her shoes on at eleven-thirty." },
    { place: 'Iwatodai · Riverside · The Dark Hour', time: 'The Dark Hour', bg: 'darkhour-iwatodai-street' },
    { dark: true },
    { n: "At midnight the green came down over the water, and the river stopped mid-ripple, and every lamp along the path went dead." },
    { n: "Except one. Hers. The flickering one at the bottom of the path stayed on, stuttering its tired amber into the green, on and off and on again, the only light in the whole hour that wasn't the moon." },
    { n: "And underneath it, sitting on the bench by the railing, there was a girl with a camera." },
    { n: "Long dark hair, soft wispy bangs, a cap turned backwards. A navy sweatshirt with the sleeves pulled down over her hands. An old camera held up to her face, the kind with a real lens you turned with your fingers, pointed at the empty pool of light on the path, the light coming and going on nothing. Filming it. Filming the place under the lamp where somebody should have been standing, very steadily, the way you'd film a door you were waiting for someone to come through." },
    { n: "She was crying. Not much. The kind that runs out of you without your face doing anything about it." },
    { music: 'world-runners' },
    { n: "Solar stepped into the light." },
    { n: "The camera didn't move. The girl behind it went completely still, the way an animal does in headlights. Then, very quietly, without lowering it, she spoke. Easy and automatic, the way you'd say it to someone you'd said it to a hundred times." },
    { s: 'minji', f: 'neutral', t: "Sol, you're in my... no." },
    { s: 'minji', f: 'neutral', t: "Actually, don't move. Stay there." },
    { choose: [
      { t: "(Stay in the light.)", then: [
        { n: "Solar stayed. She couldn't have said why. The lamp stuttered and held, stuttered and held, and for once, for about ten seconds, it held steady, like it knew." }
      ] },
      { t: "You should ask first.", then: [
        { n: "The girl made a small sound behind the camera that might have been a laugh." },
        { s: 'minji', f: 'sad', t: "I always ask. I ask, like, twenty times. You make fun of me for it." },
        { s: 'minji', f: 'sad', t: "I didn't ask this time. I thought I'd never get to ask you anything again." },
        { n: "She said it like there was something else under it, something she'd meant to tell Solar and hadn't, and had been carrying around ever since in the same bag as the camera." }
      ] },
      { t: "Who are you looking for?", then: [
        { s: 'minji', f: 'neutral', t: "You. Obviously." },
        { s: 'minji', f: 'sad', t: "I've been filming that light for... I don't know how long. Ages. I thought if I kept the camera on it, you'd have to walk into it eventually. You always do. You can't help it. You see a lamp and you just go and stand under it like it's yours and the rest of us are borrowing it." }
      ] }
    ] },
    { n: "Then the girl lowered the camera, slowly, and looked at her without it, and Solar watched her face do something small and complicated. A stall. A film catching in the gate. Her eyes went over Solar's face, all of it, carefully, the way you'd check a shot you'd only get one take of, and found the thing that was missing, and Solar watched her find it." },
    { s: 'minji', f: 'neutral', t: "...You don't know who I am." },
    { n: "It wasn't a question. She didn't say it like it hurt. She said it like a girl reading a light meter. Then she looked down at the camera in her lap, at the little screen, and turned it round so Solar could see." },
    { n: "Fifteen seconds. No music, just the hum of the lamp turned up loud and the river not moving. A girl in a Gekkoukan uniform stepping into a pool of stuttering amber light and stopping there, looking straight down the lens, her mouth a little open, like she was in the middle of saying something ridiculous to someone who wasn't there." },
    { s: 'minji', f: 'neutral', t: "You're the same in the frame. You're always the same in the frame. Even when you don't know me." },
    { s: 'minji', f: 'happy', t: "I'm Minji. You don't have to remember. Can I keep filming? Not now. Just... can I keep filming you? While I'm here?" },
    { choose: [
      { t: "Yes.", then: [
        { n: "Minji let out a breath that seemed to have been in her for a very long time. She didn't lift the camera. She just held it in her lap with both hands and looked at Solar under the lamp, and that was somehow worse, and better, than being filmed." }
      ] },
      { t: "Ask me again tomorrow.", then: [
        { s: 'minji', f: 'happy', t: "I will. I'll ask you every day. You'll get so sick of it." },
        { n: "She laughed, wet and surprised, and wiped her face on her sleeve, and the lamp flickered, and for one second the two of them were in the dark together and then the light came back." }
      ] },
      { t: "Why me?", then: [
        { n: "Minji thought about it. Properly. Her eyes went to the river, and back." },
        { s: 'minji', f: 'neutral', t: "Because you never look like you're performing when I've got the camera. Everybody else does. You stop." },
        { s: 'minji', f: 'sad', t: "I think I'm the only person you stop for. I don't know if you know that." }
      ] }
    ] },
    { dark: false },
    { n: "The hour ended. The river started again with a small slap against the wall below them, and the lamps along the path came on one after another, and the flickering one at the bottom went on flickering, like it had only ever been waiting for the others to catch up." },
    { n: "They walked back to the dorm together. Minji didn't ask a single question on the way. She didn't ask Solar to remember anything. She walked half a step behind and to the side, the way you walk behind someone when you're watching how the light falls on them, and every so often Solar felt it, the being looked at, and found, to her own surprise, that she didn't mind it at all." },
    { n: "At the dorm, Mitsuru arranged a room for Minji at the Kirijo guesthouse by the station. Minji wrote the address on the back of a receipt and folded it into her camera bag." }
  ] },

  { id: 'a4-fortune', date: '10/4', slot: 'evening', title: 'october', place: 'Iwatodai Dorm · Command Room', time: 'Evening', scene: [
    { music: 'badfeeling' },
    { n: "It was a Sunday, and it rained all afternoon, a thin cold October rain that made the dorm smell like wet coats and the radiator, and Shinjiro made curry for twelve people without being asked and then didn't eat any of it. He sat at the end of the table with his coat on and watched everybody else eat, and when Ken asked for seconds Shinjiro got up and served him before anyone else could move, and Ken said thank you without looking at him, and Shinjiro said nothing at all." },
    { n: "Solar noticed. She noticed everything that night, afterward, in the way you only notice things once you know what they were for." },
    { n: "The searchers had been told to stay in. Mitsuru had said it to each of them separately, in the voice she used for things that were not discussions, and Hanni and Hyein had agreed at once, and Minji had agreed and gone up to the roof with her camera anyway, and Jihoon had agreed loudly and then been found at eleven-thirty trying to tie his shoes very quietly in the front hall, and been sent back upstairs by Akihiko with a look." },
    { s: 'fuuka', f: 'neutral', t: "Two. Moonlight Bridge again. One's very big and the other's... it's spinning. Like a wheel. Like it's deciding something." },
    { place: 'Moonlight Bridge · The Dark Hour', time: 'The Dark Hour', bg: 'darkhour-moonlight-bridge' },
    { dark: true },
    { music: 'fullmoon' },
    { n: "The rain stopped at midnight, mid-fall. Every drop of it hung in the green air over the bridge like beads on invisible strings, millions of them, and they walked through it with the drops breaking cold against their faces and their sleeves, and Junpei said it was the most beautiful thing he'd ever seen and then that it was creepy, in the same breath, and nobody disagreed with either half." },
    { battle: { id: 'fortune', op: 'fortune', title: 'Fortune & Strength', desc: 'A wheel that decides and a beast that enforces it, on Moonlight Bridge in the frozen rain.', forced: true, kind: 'operation' } },
    { music: 'night' },
    { n: "They won. They stood in the middle of the bridge with the ash going up through the suspended rain, and Junpei whooped, and Akihiko laughed, and it took Solar nearly a full minute, counting, to understand what the cold feeling in her stomach was. It was a number. She'd counted ten of them at the start of the bridge. There were eight." },
    { s: 'solar', f: 'serious', t: "Where's Ken?" },
    { n: "Akihiko's laugh stopped like a door slammed on it. He turned all the way around, once, looking. Then his face went white." },
    { s: 'akihiko', f: 'serious', t: "Shinji." },
    { s: 'fuuka', f: 'surprised', t: "Port Island. The back streets behind the station. They're both there. There's someone else there too, someone I can't... Solar, it feels cold. It feels like a gun." },
    { place: 'Port Island · Back Streets', time: 'The Dark Hour', bg: 'darkhour-iwatodai-street' },
    { n: "She ran. She was faster than any of them and she'd never in her life wanted it to matter less. Off the bridge, down the long road into Port Island through the hanging rain, the drops bursting on her face, her lungs burning, Akihiko somewhere behind her shouting his friend's name in a voice she'd never heard him use." },
    { n: "She heard it from two streets away. One flat hard sound that went off the walls and came back from every direction at once, and then nothing, and then, very faint, footsteps going away, unhurried, and something that might have been someone laughing." },
    { n: "The alley was narrow and wet and the green light lay in it like water in a ditch. Ken was on his knees in the middle of it with his spear on the ground beside him, very small. And in front of him, between Ken and the dark end of the alley, where whoever had fired had been standing, Shinjiro was on the ground." },
    { n: "He'd stood in front of the boy. That was the shape of it. You could see the shape of it in where everyone was, the way you can see in a room where a fight has been. He'd stepped in front." },
    { s: 'ken', f: 'sad', t: "Why... why did you... I was going to... why would you do that?" },
    { n: "Shinjiro's eyes were open. His hand had found the front of his coat and was pressed there, flat, and something dark was coming between his fingers and spreading on the wet ground under him, very slowly, the way the tide comes in. He looked up at Ken, and something in his face that had been clenched for two years, for as long as any of them had known him, let go." },
    { s: 'shinjiro', f: 'sad', t: "...Don't make that face. It's fine. This is how it should go." },
    { s: 'shinjiro', f: 'sad', t: "You keep living. That's all you owe anybody. You hear me? That's the whole thing." },
    { n: "Akihiko came into the alley behind her and stopped like he'd hit a wall. Then he was on his knees beside Shinjiro with both hands over Shinjiro's, pressing, saying his name, Shinji, Shinji, over and over, not loud, like a man saying a word to keep his place in it." },
    { s: 'shinjiro', f: 'sad', t: "Aki. You're getting your gloves dirty. Idiot." },
    { ifRank: { shinjiro: 9 }, then: [
      { n: "His eyes moved. Past Akihiko, past Ken. They found Solar standing at the mouth of the alley with the rain hanging all around her, and stayed, and the corner of his mouth did the thing it did in the kitchen at one in the morning when she stole a piece of whatever he was cooking off the board." },
      { s: 'shinjiro', f: 'happy', t: "...You've still got the card. Good. Don't let Iori near it." },
      { n: "She nodded. She couldn't do anything else. He looked at her nodding as though that was all he'd wanted, and closed his eyes." }
    ], else: [
      { n: "His eyes went past all of them, up, to the strip of green sky between the roofs, like he was looking for something he'd lost up there a long time ago and had just remembered where he'd put it. Then they closed." }
    ] },
    { s: 'akihiko', f: 'sad-4', t: "No. No, you don't get to do that. Shinji. Open your eyes. Open your eyes." },
    { n: "Mitsuru was already on the radio, her voice perfectly level, calling for the Group's medical team, giving the street, the time, the blood type, which she knew, because Mitsuru knew everything, because Mitsuru had probably known for a long time that one day she'd need to know it. Ken hadn't moved. Yukari knelt and put her arms around him, and he let her, stiff as a post, staring at the ground." },
    { flag: { 'shinjiro-coma': true } },
    { n: "The hour ended. The rain fell all at once, every hanging drop of it, a sound like applause in an empty theater, and the alley was just an alley behind Port Island station on a wet Sunday night, and a siren was already coming." },
    { dark: false },
    { place: 'Iwatodai Dorm · Rooftop', time: 'Night · 2 AM', music: 'night' },
    { n: "He was alive. Stable, the doctor said, at half past one, in a corridor that smelled of floor polish. Alive and stable and not waking up. Nobody could tell them when. Nobody could tell them if." },
    { n: "Solar couldn't go inside the dorm. It was too full of people being quiet. She went up to the roof in the rain and stood at the railing in it, not minding, and looked out over the water toward Port Island." },
    { n: "On the roof of the building across the street, the old office block with the broken sign, a woman was lying flat along the parapet in the rain. Long and dark and still, with skin like a bruise in the streetlight and a rifle as long as she was laid out in front of her, the scope turned toward the bay. She'd been there, Solar thought, through all of it. She'd watched the whole thing from up there and not moved, the way you'd watch weather." },
    { n: "The woman turned her head. She looked straight across the street at Solar, at the rain, at the armband, without any expression at all. Then she lifted the rifle off the parapet, folded it somehow into something smaller, and rolled backward off the roof into the dark, gone, and on the corner below, under the streetlight, a small figure in a coat too big for her was standing in the rain, pointing up the street, and then she wasn't." },
    { n: "Solar stayed until she was shaking. Then she went down and found Ken sitting in the dark kitchen, and sat with him, and neither of them said anything until it was light." }
  ] },

  { id: 'a4-visiting-hours', date: '10/5', slot: 'after', title: 'visiting hours', place: 'Tatsumi Memorial Hospital · Hallway', time: 'After School', consumes: true, scene: [
    { music: 'tender' },
    { n: "The hallway on the third floor smelled like floor polish and something sweet underneath it that nobody wanted to name. The vending machine at the end hummed to itself. The light through the window was the thin clean gold of an October afternoon, the kind of light that makes everything look like it's already a memory." },
    { n: "Nobody was talking. Junpei had his cap in his hands and was turning it around and around by the brim. Yukari sat with her arms crossed so tight it looked like it hurt. Ken stood very straight by the window and didn't sit when Fuuka offered him the chair, and didn't look at anyone. Mitsuru was at the far end on the phone, saying yes, quietly, over and over, in a voice that sounded like a door being held shut." },
    { n: "Akihiko was inside. He'd been inside for two hours. Through the narrow window in the door Solar could see the back of his head, bowed, and the bed, and the shape in the bed that was Shinjiro and wasn't, in the way sleeping people never quite are." },
    { n: "When the nurse came to say visiting hours were nearly over, Akihiko came out. He looked the way people look when they've been holding something heavy at arm's length for a long time and only just put it down, and haven't noticed yet that their arms are shaking." },
    { s: 'akihiko', f: 'sad-3', t: "Stable. That's the word they keep using. Stable." },
    { s: 'akihiko', f: 'serious', t: "He'll wake up. He's too stubborn not to. He's never once done what anybody told him." },
    { choose: [
      { t: "He'll wake up.", then: [
        { s: 'akihiko', f: 'sad-2', t: "...Yeah." },
        { n: "He said it like a man who had already decided to believe whatever anyone said." }
      ] },
      { t: "(Walk out with him. Don't say anything.)", then: [
        { n: "She walked out with him. They went down three flights of stairs side by side without a word, and at the bottom he pushed the door open for her the way he always did, and stood there holding it a second too long." }
      ] }
    ] },
    { place: 'Tatsumi Memorial Hospital · Front Steps', time: 'Evening', bg: 'hospital-outside' },
    { n: "Koromaru wasn't allowed in. He was lying across the hospital's front steps with his chin on his paws, and he'd been there since they arrived, and nobody had been able to make him move. The nurses had stopped trying. Somebody had put a paper bowl of water down beside him." },
    { n: "The others went ahead to the station. Solar sat down on the steps beside the dog, in the cold, with the light going, and after a while he lifted his head and put it on her knee, heavy, the way he did at the dorm, and sighed." },
    { n: "She thought about the alley. About a man who'd decided where he was going to stand, and stood there. About Akihiko saying a name over and over to keep his place in it. About a dorm full of shoes in the hall and a pot of curry nobody had finished, and how much it was going to hurt, the whole year, the whole of it, all the people in it, when it ended. Because things ended. Everyone who came to her bench went home in the end." },
    { n: "Koromaru looked up at her. Red eyes, and the scar over one of them, and absolutely no doubt in his face about anything." },
    { choose: [
      { t: "I'm not going anywhere.", tally: { here: 1 }, flag: { 'here-2': true }, then: [
        { n: "She said it to the dog. She said it to the hospital and the steps and the window on the third floor and the bench at the station two miles away. It came out low and certain, in her own voice, the one she didn't use much." },
        { n: "Koromaru's tail thumped once against the step. Behind her, the hospital doors slid open and shut, and she didn't turn around, and she didn't know until much later that Akihiko had come back for his bag and stopped in the doorway and heard her, and gone out the side entrance instead, so as not to make her say it again." }
      ] },
      { t: "I don't know how long I get to stay.", then: [
        { n: "Koromaru didn't seem to think that was an answer. He put his chin back on her knee and left it there, heavy, like a paperweight on a letter that might blow away." }
      ] },
      { t: "(Say nothing. Scratch behind his ears.)", then: [
        { n: "She didn't say anything. She scratched behind his ears, the place he liked, and he leaned into her hand with his eyes half closed, and they sat there until the streetlights came on." }
      ] }
    ] },
    { n: "When it was dark, Ken came back for the dog. He'd gone all the way to the station and come back. He didn't say why. He sat down on Koromaru's other side, and the three of them sat there on the hospital steps a while longer, looking at nothing, until Koromaru got up on his own and stretched and looked at them both as if to say, well, then, and started walking home." }
  ] },

  { id: 'a4-low-tide', date: '10/10', slot: 'late', title: "it's jin", place: 'Port Island · Harbor', time: 'The Dark Hour', scene: [
    { flag: { 'arrived-yunjin': true } },
    { music: 'mystery' },
    { s: 'fuuka', f: 'surprised', t: "Solar? There's one at the harbor. On Port Island. She's... she's standing in the sea. No. Not in it. Where it should be." },
    { s: 'fuuka', f: 'neutral', t: "She's walking out across the mud. Calling something. I can't hear what. It sounds like a nickname." },
    { n: "She knew before Fuuka finished. She knew the way she knew the tide tables. The spring tides. The sea gone so far out you could walk on the bottom of it." },
    { place: 'Port Island · Harbor · The Dark Hour', time: 'The Dark Hour', bg: 'harbor' },
    { dark: true },
    { cg: 'searchers-yunjin-low-tide' },
    { n: "The sea was gone. That was the first thing. The harbor wall went down and down, past the line of green weed and the crust of barnacles, past where the water should have been, and kept going, and at the bottom there was mud. Gray, wet, shining mud, ribbed by the tide into long low ripples, going out and out under the green moon toward a sea that was only a silver line very far away, frozen, not coming back." },
    { n: "Boats lay on their sides on it like tired dogs. The pilings stood up out of it bare and black. And out in the middle of all that gray, small and bright and absurd, a girl in a highlighter-yellow puffer jacket was walking away from the harbor wall with a car key in her fist, sinking to the ankle with every step, shouting, in a voice that had something wrong with it, loud on top and scraped raw underneath, like gravel shaken in a can." },
    { s: 'yunjin', t: "SOL! Sol! SOLAR LEE, I swear to God, I drove all the way down here, I am in the MUD, I am RUINING these, babe, answer me!" },
    { cg: null },
    { n: "Solar's whole body locked at the top of the harbor steps. Her hand was on the rail. Her feet would not go down. The mud was not the sea, she knew that, she knew it the way you know a stove is off, and her body didn't care, her body could smell the water out there under the green, black and cold and waiting, and it would not go down the steps." },
    { choose: [
      { t: "(Go down anyway.)", then: [
        { n: "She went down anyway. One step, and the next, her hand white on the rail, and then the last step, and then off it, onto the mud, which was cold and gave under her boots with a sound like a kiss, and she didn't fall, and she didn't drown, and she kept walking." }
      ] },
      { t: "(Shout her name.)", then: [
        { n: "She didn't know the name. She opened her mouth and shouted anyway, and what came out was *Jin*, loud and cracked, across the whole empty harbor, and out on the mud the girl in yellow stopped dead." },
        { n: "Then Solar was on the steps, and off them, and on the mud, because that was where the girl was, and she was cold and terrified and walking and didn't remember deciding any of it." }
      ] }
    ] },
    { music: 'world-strangers' },
    { n: "The girl turned around. She had a round sharp face and a mouth made for talking and a pair of round gold sunglasses pushed up on her head in the middle of the night, and when she saw Solar coming across the mud toward her she went from loud to very quiet so fast it was like watching someone fall." },
    { n: "She didn't move. She stood there in the mud with the car key in her fist. Solar stopped a meter away." },
    { s: 'yunjin', f: 'serious', t: "Sol." },
    { s: 'yunjin', f: 'sad', t: "Sol. It's me. It's Jin." },
    { n: "Then she was holding on. She came the last meter in one step and got both arms around Solar and held on, hard, with her face in Solar's shoulder and her whole body shaking, not crying, just shaking, like an engine running too fast. And Solar's hands came up. On their own. Not the way you hug a stranger, careful, at the shoulders. They went straight to the middle of Yunjin's back, one flat between her shoulder blades and the other at the back of her neck, under the hair, exactly where they'd gone a hundred times, on a hundred nights, in a car on a seafront with the heater on and coffee in a can going cold in the cupholder." },
    { n: "Her hands knew where to go. The rest of her had no idea who this was." },
    { choose: [
      { t: "(Hold on.)", then: [
        { n: "She held on. Yunjin's puffer jacket was cold and slippery and smelled of the sea and a perfume that was much too expensive for a girl walking around in mud, and Solar stood there in the frozen harbor and held on to it like a rail." }
      ] },
      { t: "I'm sorry. I don't know you.", then: [
        { n: "She said it into the yellow shoulder, very quietly. Yunjin didn't let go. She held on harder." },
        { s: 'yunjin', f: 'sad', t: "Yeah. I figured. Your face. I saw your face." },
        { s: 'yunjin', f: 'serious', t: "Doesn't matter. I know you. I know you enough for both of us. Shut up." }
      ] },
      { t: "Your shoes are ruined.", then: [
        { n: "It came out of her mouth before anything else could. Yunjin made a sound into her shoulder that was a laugh and a sob at the same time." },
        { s: 'yunjin', f: 'happy', t: "They're Prada. You'd better be worth it." },
        { s: 'yunjin', f: 'sad', t: "You're worth it. Oh my God, you idiot. You're worth it." }
      ] }
    ] },
    { n: "When she finally let go and stepped back to look, she looked at all of Solar, top to bottom, the way you'd check a car after a crash. The uniform. The armband. The boots caked in mud. The hair." },
    { s: 'yunjin', f: 'serious', t: "Okay. So you're in a cult. That's fine. We can work with a cult. I've seen documentaries." },
    { s: 'yunjin', f: 'neutral', t: "And you're standing on the seabed. You. Standing on the bottom of the actual sea. Do you know how much I'd have paid to see this a week ago? You won't even stand at the edge of the pier." },
    { n: "Solar looked down. At the mud. At the silver line of the sea, very far off, waiting. Her knees, all at once, remembered what they were standing on, and went." },
    { dark: false },
    { n: "The hour ended as she sat down in the mud. The sea didn't come rushing back, the way she'd been sure it would. It stayed where it was, a mile out, ordinary, a low tide on an ordinary October night, and the lights of the harbor came on all along the wall, and the boats on their sides creaked, and somewhere up on the road a car alarm started going off for no reason. Yunjin sat down in the mud beside her, in the Prada, and put her head on Solar's shoulder, and said she'd left Solar's house an hour ago, maybe less, she lived there now, sort of, it was a long story and not tonight's, she'd just been driving, she'd just wanted to see the water, and then the water was gone." },
    { n: "Solar didn't say she'd been gone six months. She didn't say anything. They sat on the bottom of the sea until Akihiko found them, and Yunjin looked up at him, all the way up, and said, oh, hello, okay, is HE in the cult, because I'm in." },
    { n: "Back at the dorm, Mitsuru found Yunjin a room upstairs and handed her a key and a clean towel. Yunjin took both, then asked where she could leave the shoes so nobody would have to smell them." }
  ] },

  { id: 'a4-poster', date: '10/13', slot: 'lunch', title: 'vote solar kim', place: 'Gekkoukan High · 2F Hallway', time: 'Lunchtime', scene: [
    { music: 'school' },
    { n: "The poster was on the bulletin board outside the student council room, between a lost-and-found notice and a recruitment flyer for the kendo club, and it had absolutely no business being there." },
    { n: "Somebody had spent a whole weekend on it. You could tell. A sun drawn in yellow marker with a little smiling face, glitter that had gotten everywhere, bubble letters filled in so carefully the marker had soaked through the card. VOTE SOLAR KIM. And in the middle, glued on slightly crooked, a photograph." },
    { n: "It was her. Her face. Her hair down, a uniform she'd never worn, navy, with a different crest. Smiling straight into the camera with a smile she had obviously had to practice. You could see the practice in it. The corners of the mouth held up a fraction longer than a real smile holds itself, the eyes doing their best to keep up. The smile of somebody whose parents had told her to look friendly, approachable, presidential, and who had stood in front of a mirror the night before trying to work out what presidential meant." },
    { n: "Underneath, in different handwriting, someone had added TEAM SOLAR!!! with three exclamation points and a sticker of a dog. And under that, in a third, smaller, meaner hand: *(she wont)*." },
    { choose: [
      { t: "(Touch the glitter.)", then: [
        { n: "It came off on her fingertips, pink and gold, and stayed there no matter how hard she rubbed them on her skirt." }
      ] },
      { t: "(Look at the crest in the corner.)", then: [
        { n: "Bottom corner, small print, a crest she didn't know and a name she did. Hanlim. Her mouth shaped it without sound, the way you'd say the name of a street you grew up on." }
      ] },
      { t: "(Look at the smile for a long time.)", then: [
        { n: "She looked at it until it stopped looking like a smile and started looking like a door with the light on behind it and nobody home. She knew that smile. She did it every morning. She'd done it this morning, in the mirror, putting her hair up." }
      ] }
    ] },
    { s: 'mitsuru', f: 'neutral', t: "Is something the matter?" },
    { n: "Mitsuru had come out of the council room with a stack of folders, and she stopped beside Solar and read the poster with the same total attention she gave budget reports and Shadows. Then she looked at the photograph. Then at Solar. Then back at the photograph." },
    { s: 'mitsuru', f: 'surprised', t: "...Kim." },
    { s: 'mitsuru', f: 'neutral', t: "There's no candidate by that name. There's no Kim in the third year. I would know." },
    { choose: [
      { t: "It's not me.", then: [
        { s: 'mitsuru', f: 'neutral', t: "No. Of course not. It's someone with your face, in another school's uniform, running for an office you've never mentioned." },
        { n: "She said it so evenly that it took Solar a second to hear that Mitsuru wasn't agreeing with her at all." }
      ] },
      { t: "I think it's me. Somewhere.", then: [
        { s: 'mitsuru', f: 'neutral', t: "...Yes. I thought that might be the case." },
        { s: 'mitsuru', f: 'neutral', t: "For what it's worth, it's a good poster. Somebody believed in you very loudly." }
      ] },
      { t: "Do you think she wins?", then: [
        { s: 'mitsuru', f: 'neutral', t: "I think she has friends who use three exclamation points. I've won elections with less." },
        { n: "It was, Solar realized afterward, the closest thing to a joke she'd ever heard Mitsuru make." }
      ] }
    ] },
    { n: "Mitsuru reached up and took the poster down, very carefully, a thumbtack at a time, the way you handle something that belongs to someone else." },
    { s: 'mitsuru', f: 'neutral', t: "I'll keep it in the council room. In case its owner comes looking." },
    { fragment: 'hoax-poster' },
    { n: "The glitter stayed on Solar's fingers all through the afternoon. At the end of sixth period she looked down and found she'd been pressing her thumb into her own palm, hard, as if she were trying to make a pin go through something. A little star-shaped pin. Small and heavy and gold. Somewhere far off, very faint, metal ticked against card, once, and went quiet, like someone waiting to be let in." }
  ] },

  { id: 'a4-council-room', date: '10/14', slot: 'after', title: "it's you", place: 'Gekkoukan High · Student Council Room', time: 'After School', cast: {}, scene: [
    { flag: { 'arrived-jungwon': true } },
    { music: 'tender' },
    { n: "Mitsuru caught her at the shoe lockers after school with an expression Solar had only ever seen on her before a full moon." },
    { s: 'mitsuru', f: 'neutral', t: "Would you come up to the council room? Now, if you can. There's someone in it." },
    { s: 'mitsuru', f: 'neutral', t: "I found him there at seven this morning. Sitting at my desk. He'd been in the building all night. He'd sorted the entire archive of last year's committee minutes by date and then, he said, by subject, because the dates were insufficient." },
    { s: 'mitsuru', f: 'surprised', t: "He says he came through the door. That door. At midnight. And he asked, very politely, whether a girl named Solar was enrolled here." },
    { place: 'Gekkoukan High · Student Council Room', time: 'After School', soft: true },
    { n: "The council room at four o'clock was full of the low gold light of an October afternoon going down over the bay, long bars of it across the table and the stacked folders and the dust in the air. Mitsuru set her to sorting the club budget requests, because Mitsuru believed in giving people something to do with their hands when they were frightened, and went to fetch him. Solar sat at the long table and wrote numbers in columns and didn't take in a single one." },
    { music: 'world-hoax' },
    { n: "The door opened behind her." },
    { cg: 'searchers-jungwon-finds-solar' },
    { n: "A boy was standing in the doorway with his arms full of paper. Slight and neat, dark hair that had been combed and had then been through a long night, a navy blazer with a crest she'd seen yesterday on a poster, and a stack of documents held against his chest the way some people hold a shield. He'd stopped dead. He'd seen her. The light was in his face and he didn't blink." },
    { n: "For a moment nobody said anything. The papers in his arms shifted, and one slid off the top and seesawed down to the floor, and he didn't look at it. He was looking at her the way people look at a house they grew up in, from the street, years later, to see if the lights are on." },
    { s: 'jungwon', f: 'surprised', t: "It's you." },
    { n: "Two words. Very quiet. Perfectly polite. And then, as she watched, his face did something she didn't have the language for yet. It went still. Completely still, all at once, the way water goes still when the wind drops, and she understood without knowing how that this was not him being calm. This was the opposite of calm. This was a boy holding something so tightly it had stopped moving." },
    { choose: [
      { t: "I'm sorry. Do I know you?", then: [
        { n: "He didn't flinch. He'd expected it. She could see that he'd expected it, sitting up all night with the committee minutes, rehearsing. It landed anyway. She watched it land and go somewhere very deep and be put away." },
        { s: 'jungwon', f: 'sad', t: "Yes. You do. It's all right. I didn't imagine you would." },
        { s: 'jungwon', f: 'neutral', t: "I'm Yang Jungwon. I'm very sorry for interrupting your work." }
      ] },
      { t: "You're the one who sorted the minutes.", then: [
        { n: "Something happened at the corner of his mouth. Not a smile. The ghost of a dimple, there and gone." },
        { s: 'jungwon', f: 'neutral', t: "The dates were insufficient." },
        { s: 'jungwon', f: 'neutral', t: "I'm Yang Jungwon. You don't remember me. That's... that's all right. I'll sort that too." }
      ] },
      { t: "(Stand up.)", then: [
        { n: "She stood. She didn't know why. Her body did it the way it did on a stage, when a name was called and the whole room turned, and she found her chin had come up and her hands had gone still at her sides, and she was looking at him the way you'd look across at the other podium." },
        { n: "Something in his eyes recognized that. Recognized it so hard that he had to look down, at last, at the paper on the floor." }
      ] }
    ] },
    { cg: null },
    { n: "He bent and picked up the fallen page and squared it with the others, edges exact. His hands were very steady. On his left wrist there was a steel watch that was a little too big for him, with one link taken out so it would fit, and as he straightened up he touched it with two fingers of his other hand, lightly, the way you'd touch a sleeping animal to check it was still warm." },
    { s: 'jungwon', f: 'neutral', t: "It stopped. At midnight. When I came through. It's never stopped before. It belonged to someone who... it's never stopped." },
    { n: "Mitsuru had come in behind him. She went to the cabinet by the window without a word and took out a sheet of card, and laid it on the table between them. Glitter. A yellow sun. VOTE SOLAR KIM, and the practiced smile." },
    { n: "Jungwon looked at it. For the first time since he'd come into the room, his face did something. Very small. Like a door being closed quietly so as not to wake anyone." },
    { s: 'jungwon', f: 'sad', t: "...She made that in a weekend. She didn't sleep. Her friends glued it crooked." },
    { s: 'jungwon', f: 'neutral', t: "Sunoo helped. He thinks I don't know." },
    { s: 'jungwon', f: 'neutral', t: "You did. You made it. I'm sorry. I'll get the tenses right eventually." },
    { s: 'mitsuru', f: 'neutral', t: "How do you know her? If you don't mind my asking." },
    { n: "He thought about it. Visibly. He took longer over it than he'd taken over anything else, and when he answered, he answered Mitsuru with perfect courtesy and his eyes on Solar." },
    { s: 'jungwon', f: 'neutral', t: "We're acquainted. It's complicated. In more than one way." },
    { s: 'jungwon', f: 'neutral', t: "I'd like to stay, if that's possible. I don't need much. I can be useful. I'm very good at minutes." },
    { choose: [
      { t: "Stay.", then: [
        { n: "He bowed. A real one, from the waist, formal and old-fashioned and completely unironic, to her and not to Mitsuru, and when he straightened up his face had gone still again. His hands relaxed at his sides." }
      ] },
      { t: "That's not my decision.", then: [
        { s: 'jungwon', f: 'sad', t: "No. Of course not. It never is, is it." },
        { n: "He said it so gently that it took her a second to feel it go in. Then it was in, and she couldn't get it out, and he'd already turned to Mitsuru to ask, with great courtesy, where he might find a pencil sharpener." }
      ] }
    ] },
    { n: "Mitsuru found him a room in the Kirijo guesthouse by the station that night, and walked him there herself, with Solar beside her carrying one of his stacks of paper because he had refused, very politely, to put any of them down. The guesthouse was a narrow, quiet building with a brass number and a lamp in the window and a hallway that smelled of new tatami. Someone was already living on the second floor. The music coming down the stairs made that clear." },
    { place: 'Kirijo Guesthouse · Front', time: 'Evening', soft: true },
    { n: "Jihoon opened the door before Mitsuru could knock. He had a towel round his neck and a sheet mask on his face, and he'd clearly come down to complain about something, and then he saw who was standing on the step behind Solar, and the complaint died in his mouth." },
    { s: 'jihoon', f: 'surprised', t: "Oh, you have GOT to be kidding me." },
    { s: 'jungwon', f: 'neutral', t: "Good evening, Jihoon." },
    { s: 'jihoon', f: 'serious', t: "No. No, absolutely not. Not him. Mitsuru. Mitsuru, look at me. You can't put him here. He doesn't sleep, he alphabetizes. He'll alphabetize ME." },
    { n: "He peeled the sheet mask off his face in one furious motion, as if he'd decided this was not a conversation to have in it, and stood in the doorway with the wet thing in his fist, looking at Jungwon. Jungwon looked back. Neither of them blinked. Solar, between them with the papers, had the strangest feeling that she was standing exactly where she always stood, and had always hated it." },
    { s: 'jihoon', f: 'neutral', t: "So what, you followed her? You couldn't go one night without your..." },
    { n: "He stopped. He looked at Solar. Whatever the word had been, he swallowed it, and it went down hard, and something ugly and pleased came up into his face instead." },
    { s: 'jihoon', f: 'happy', t: "She doesn't know you. Does she. Look at her. She has no idea who you are." },
    { s: 'jihoon', f: 'happy', t: "That's the best thing that's happened to me all year." },
    { s: 'jungwon', f: 'neutral', t: "No. She doesn't know me." },
    { s: 'jungwon', f: 'serious', t: "She doesn't know you either, Jihoon. I'd keep that in mind before I enjoyed it." },
    { n: "It was said so politely. It was said so politely that Solar felt it go past her like a blade going past a cheek, and Jihoon's face did a thing she had never seen it do, and Mitsuru, who had been watching all of it with the expression of someone reading a budget proposal with a hole in it, stepped between them." },
    { s: 'mitsuru', f: 'neutral', t: "Opposite ends of the corridor, then. Jihoon, you're in the way of the door." },
    { n: "Jihoon got out of the way of the door. He went up the stairs two at a time and slammed something on the second floor, and the music got louder, and then, after a while, quieter, and then stopped." },
    { place: 'Iwatodai · Riverside', time: 'Evening', soft: true },
    { n: "Solar walked home along the river with her bag on her shoulder and the glitter still on her fingers from the day before. She didn't remember him. But she remembered, very clearly, without wanting to, that on the walk to school some mornings she had been in the habit of being annoyed with someone. A specific someone. Daily, and on purpose, and with enormous energy. It had been one of the best parts of her day." }
  ] },

  { id: 'a4-pa', date: '10/16', slot: 'morning', title: 'final speeches', place: 'Gekkoukan High · Classroom', time: 'Morning', cast: { 'pa-voice': 'The Speaker' }, scene: [
    { music: 'school' },
    { n: "Morning announcements at Gekkoukan were the most reliably boring four minutes of any day, the speaker over the blackboard clicking on with a pop and a hiss, the vice principal reading the lunch menu and the club schedule in the same flat drone he used for everything, and Solar had long since perfected the art of not hearing a word of it while looking like she was." },
    { n: "This morning the speaker clicked on, and hissed, and then somebody tapped a microphone that was not the vice principal's microphone, three times, the way people do when they're nervous and want to make sure they exist." },
    { s: 'pa-voice', t: "Um. Hi. Is this... okay. Hi, everyone. I'm Solar Kim." },
    { n: "Her pen rolled off the desk." },
    { n: "It was a girl's voice, a little too close to the mic, a little thin with nerves, the kind of voice that was smiling on purpose to keep from doing something else. Behind it there was a whole room. You could hear it. Plastic chairs scraping on a gym floor, hundreds of people breathing at once, a staff member coughing, and somewhere near the front one girl screaming the name at a volume that had to be a disciplinary issue." },
    { s: 'junpei', f: 'surprised', t: "Yo. Solar. Is that... is that YOU? Did you record that?" },
    { s: 'yukari', f: 'surprised', t: "That's not her voice. Is it? It's kind of her voice." },
    { choose: [
      { t: "That's not me.", then: [
        { s: 'junpei', f: 'neutral', t: "I mean. It's your name, though." }
      ] },
      { t: "Shh. I want to hear it.", then: [
        { n: "She didn't know why she said it. Junpei and Yukari both shut up at once, which was almost more alarming than the speaker." }
      ] }
    ] },
    { music: 'world-hoax' },
    { n: "The voice talked. She couldn't follow it. The words broke up in the hiss, came and went like a radio between stations, and what came through wasn't sentences, it was the feeling under them. A podium too tall for her. Lights too bright. A sheet of paper in her hands with the speech on it that she'd mostly written herself and partly hadn't, gone soft at the corners from being held. A boy at the other podium, very straight, very calm, who had gone first and been so good that she'd felt it in her stomach. All eyes on her. All of them. Here goes nothing." },
    { n: "Her hands, on her desk, were holding a sheet of paper that wasn't there." },
    { s: 'pa-voice', t: "...so. Um. That's it. That's all I've got. Thank you." },
    { n: "The gym on the other end of the speaker went up like a wave breaking. Applause, and whistles, and that one girl still screaming, and over all of it, somebody shouting *THAT'S MY BEST FRIEND* in a voice that cracked on *friend*." },
    { n: "Then the speaker popped and hissed and the vice principal was reading the lunch menu. Curry bread. Something about bicycles." },
    { fragment: 'hoax-debate-stage' },
    { n: "Junpei was still staring at her. So was half the class. She bent down and picked up her pen and put it back on the desk, exactly parallel to the edge, the way she'd been taught to arrange things on a podium so nobody could see your hands shake, and smiled at the room, the practiced smile, presidential, and the room looked away." },
    { n: "At lunch she went up to the council room. Jungwon was there, alphabetizing something, and he looked up as she came in, and she could tell from his face that the speaker in the council room had played it too." },
    { s: 'jungwon', f: 'neutral', t: "You went second. You always went second. You said going first was for people who wanted to get it over with." },
    { s: 'jungwon', f: 'sad', t: "...It was a good speech. I said *good job*. Twice. Like a teacher." },
    { s: 'jungwon', f: 'neutral', t: "Some of it was mine. The good parts were yours. I should have told you that." }
  ] },

  { id: 'a4-jihoon-awakens', date: '10/17', slot: 'evening', title: 'recount', place: 'Iwatodai Dorm · Command Room', time: 'Evening', cast: {}, scene: [
    { music: 'mystery' },
    { n: "Nobody had asked Jihoon to come to the tower. Nobody had needed to have that argument with him, which in hindsight should have worried somebody. He'd eaten dinner at the dorm, loudly, and walked back to the guesthouse at eleven with his hands in his pockets, complaining about Jungwon's light being on under his door, and at eleven fifty-nine Fuuka sat up very straight in her chair in the command room and said his name." },
    { s: 'fuuka', f: 'surprised', t: "Jihoon's moving. His signal. He's left the guesthouse. He's walking toward the school, really fast, really straight, like somebody called him." },
    { s: 'fuuka', f: 'sad', t: "He's not answering his phone. He's... he's going in. Solar, he's walking into the tower. He hasn't got anything with him. He hasn't even got shoes on." },
    { s: 'mitsuru', f: 'surprised', t: "Everyone. Now." },
    { place: 'Tartarus · The Dark Hour', time: 'The Dark Hour', bg: 'tartarus-scene' },
    { dark: true },
    { music: 'tartarus' },
    { n: "They went up the tower faster than they had ever gone up it, Akihiko in front, Solar beside him, Fuuka's voice in their ears counting floors. At the hundred-and-eightieth she stopped counting. The tower's checkerboard walls had gone thin there, and something else showed through them like a photograph left out in the sun." },
    { s: 'fuuka', f: 'surprised', t: "This floor's wrong. It isn't the tower's. It's somebody's. It's... it's a school. Solar, it feels like you. He's in there. He's sitting down." },
    { n: "It was a gym. A high-school gym, hardwood floor, basketball hoops folded up against the walls, a banner across the back in a language that slid off her eyes, and rows and rows of plastic chairs facing a stage, every one of them empty but one. Third row. On the aisle. Jihoon was sitting in it in his socks and his gray sweatpants with his hands in his lap, very still, looking up at the stage the way you look at a screen in a cinema when the film's already started and you've decided not to leave." },
    { n: "On the stage there were two podiums. And between them, on a table draped in blue, a ballot box. Clear plastic, the kind every school has, with a slot in the top. Except it was the size of a car, and it was full, and the slips inside it moved on their own, turning over and over like fish in a tank." },
    { n: "A speaker somewhere crackled. A voice came out of it, flat and patient and amplified, a voice reading results off a card." },
    { n: "*President.* A name she couldn't hear. A roar from the empty chairs. *Vice president.* Her name. And on the stage, for one second, a girl in a navy blazer turning toward the boy at the other podium, and the floor wouldn't show his face, and wouldn't show what she did next. It just went back to the start. *President.* The roar. *Vice president.* The girl turning. Over and over, like a song on repeat in a room nobody's allowed to leave." },
    { n: "Jihoon was watching it. He'd been watching it, Solar understood, for a long time." },
    { s: 'jihoon', f: 'neutral', t: "Oh. Hey. You came." },
    { s: 'jihoon', f: 'neutral', t: "Don't make it weird. I'm fine. I'm watching the show." },
    { n: "The box's slot opened like a mouth. And the speaker said, in that flat amplified voice, very kindly, one word." },
    { n: "*Recount.*" },
    { n: "Slips came up out of the air. Out of Jihoon. Out of his chest and his hands, little glowing slips of paper pulling loose from him one at a time and drifting up toward the slot, and on every one of them, in his handwriting, there was a moment. *ice cream, large tub, traffic light.* *preschool, the sandbox, she threw sand in my eye and then cried harder than me.* *her front step, 6am, sol where the fuck is my coffee.* And on the stage, every time a slip went into the box, the result card changed. A letter. Then another. As if, if it ate enough of him, the name it read out would finally be his." },
    { s: 'fuuka', f: 'surprised', t: "It's taking his memories of her! It's offering him a trade. Solar, it's... it's counting them. If it gets them all, he'll win, and he won't remember what he won." },
    { battle: { id: 'memory-hoax', kind: 'scripted', script: 'memory-hoax', segment: 1, title: 'Tartarus · A Gym That Isn’t Here', desc: 'A ballot box the size of a car, swallowing every memory anyone has of her. It is eating Jihoon’s.', notes: 'Memory floor (Hoax). The ballot-box Shadow drains a searcher each turn (story: Jihoon). Segment 1 ends with outcome interrupt at half HP or turn 4; the scene then plays his awakening, and segment 2 has Jihoon in the party.', forced: true } },
    { n: "It wasn't enough. They hit it and it took the hits and went on counting, and Jihoon hadn't moved out of his chair. That was the worst part. He wasn't fighting it. He was sitting in the third row with the slips coming out of him like breath on a cold morning, and his face was getting easier. Calmer. The face of somebody who'd found the thing that made it stop hurting and had decided, just for tonight, not to ask what it cost." },
    { n: "Solar knew that face. She didn't know from where. Her whole body went cold at it." },
    { choose: [
      { t: "Jihoon. Get up. Now.", then: [
        { n: "It came out of her in a voice she didn't know she had, sharp, impatient, the voice of a girl standing on a front step at six in the morning who has been waiting for a car for four minutes and considers it a personal betrayal. His head came round like she'd thrown something at it." }
      ] },
      { t: "You don't even like this show.", then: [
        { n: "His head came round. For a second he just looked at her, and the calm on his face cracked straight down the middle, and what was underneath it was furious, and ashamed, and very, very awake." }
      ] },
      { t: "(Go and take his hand.)", then: [
        { n: "She went down the aisle through the hits and the noise and took his hand where it lay in his lap, and pulled, and he looked down at their two hands like he didn't recognize either of them, and then like he recognized both." }
      ] }
    ] },
    { s: 'jihoon', f: 'serious', t: "...No. You know what? No." },
    { n: "He stood up. Slowly. Like a man getting up off a sofa he'd been on for a week. He put his hand flat on his own chest, right where the slips were coming out, and pressed, the way you press on a cut, and looked up at the stage, at the box, at the girl turning toward somebody else over and over again." },
    { s: 'jihoon', f: 'serious', t: "You're a plastic box. You're a plastic box with a microphone. I've been rejected by better." },
    { s: 'jihoon', f: 'serious', t: "I lost. Fine. I lost to a math competition in a blazer. I'll lose to him every day for the rest of my life if that's what it takes, and I'll STILL be the one she calls at six in the morning, and you don't get to recount that." },
    { s: 'jihoon', f: 'serious', t: "Give them back. All of them. I'm keeping the bad ones too. Especially the bad ones. They've got her in them." },
    { music: 'awakening' },
    { cg: 'searchers-jihoon-awakening' },
    { n: "Something came up out of him." },
    { n: "Not out of a gun. Not out of anything. It tore up out of him like a shout, all at once, huge and loud and laughing, a shape the size of the gym's back wall, horned and grinning, swinging a great knotted club, and every glowing slip that had been drifting toward the box turned in the air and went flying back into him like birds coming home to roost. On the stage the result card went blank. Jihoon was on his feet in his socks in the third row. Jihoon was laughing. The thing above him was laughing too, the same laugh, his laugh, enormous and rude, and it had a name, and he said it, and Solar didn't catch it, because the ballot box was screaming." },
    { cg: null },
    { flag: { 'awake-jihoon': true } },
    { join: 'jihoon' },
    { battle: { id: 'memory-hoax', kind: 'scripted', script: 'memory-hoax', segment: 2, title: 'Tartarus · A Gym That Isn’t Here', desc: 'Jihoon has a Persona. The box is still hungry. Finish it.', notes: 'Segment 2: Jihoon joins the party (party id jihoon). His Persona is pending design with Kat; use placeholder skills. Win to continue.', forced: true } },
    { music: 'night' },
    { n: "Afterward the gym came apart like wet paper, the chairs and the hoops and the stage and the girl on it, and they were standing in the tower's checkerboard hall, and Jihoon was sitting on the floor with his back against the wall and his hands in his hair, laughing and laughing in a way that was not entirely laughing." },
    { fragment: 'hoax-ballot-box' },
    { s: 'jihoon', f: 'happy', t: "Did you SEE that? Did you see the size of it? It's bigger than Junpei's. It's bigger than everybody's. Write that down. Somebody write that down." },
    { s: 'akihiko', f: 'happy', t: "It's called a Persona." },
    { s: 'jihoon', f: 'happy-2', t: "I know what it's called. I'm the one who's got one. Persona. Love that. Suits me." },
    { n: "Then he looked at Solar, standing over him, and the laugh went out of him slowly, like air from a tire, and what was left was just Jihoon, in his socks, on the floor of a terrible tower, with his hands shaking." },
    { s: 'jihoon', f: 'sad', t: "I almost let it. You saw. I was going to let it. It felt so good, Sol. It just felt quiet." },
    { s: 'jihoon', f: 'neutral', t: "Don't tell anyone. Especially not him. If you tell him, I'll tell everyone you cried at the movie night." },
    { choose: [
      { t: "I didn't cry at the movie night.", then: [
        { s: 'jihoon', f: 'happy', t: "Doesn't matter. I'm very convincing. People believe me. It's my face." },
        { n: "He said it with his whole chest, the way he said everything, and wiped his eyes on the back of his wrist like it was sweat, and she let him have that." }
      ] },
      { t: "(Sit down on the floor next to him.)", then: [
        { n: "She sat. Shoulder to shoulder against the wall, the way she'd sit, she somehow knew, on a front step at six in the morning waiting for a car. He leaned his head on her shoulder without asking. He was heavy. She let him be." }
      ] },
      { t: "You got up, though.", then: [
        { s: 'jihoon', f: 'neutral', t: "Yeah. Because you yelled at me. You always yell at me. It's the only thing that's ever worked." },
        { n: "He said it like a complaint. She had to look at the checkerboard floor for a while after that." }
      ] }
    ] },
    { n: "Mitsuru gave him an Evoker the next day, in the lounge, from a case she must have had made specially and very fast, and a pair of slippers from the dorm's lost-and-found, and a look. He held the Evoker the way Junpei had held his in April, like a sleeping animal, and then he put it to his temple and grinned at Solar down the barrel of his own arm, and said, *pew*, and Mitsuru took it straight back off him for an hour." },
    { dark: false }
  ] },

  { id: 'a4-crossroad-1', date: '10/24', slot: 'after', title: 'two at once', place: 'Iwatodai Dorm · Lounge', time: 'Daytime', consumes: true, scene: [
    { music: 'mystery' },
    { n: "It was Saturday, the half day, and she'd come home at one with nothing to do and the whole afternoon open in front of her like a door, and she was standing in the lounge taking her blazer off when both of them rang at once." },
    { n: "Not out loud. Inside her. The bell, small and gold and bright as a cat's collar. And with it, on top of it, the tick of a pin through card, sharp and sure. Both together, the way two phones ring in two pockets and you don't know which to answer first. And with them, two pulls, in two directions, as strong as hands on her sleeves." },
    { n: "One toward the mall. Toward Game Panic, and noise, and a lot of people in one room, all breathing in at once. One toward school. Toward the gym, and silver, and a ladder, and somebody's hands holding it steady at the bottom." },
    { n: "She stood in the lounge with one arm out of the blazer and knew, without knowing how, that she only had time for one. That if she followed one, the other would stop ringing and go somewhere she couldn't reach, for now. Maybe for a long time." },
    { choose: [
      { t: "(Follow the bell.)", flag: { 'xroad1-R': true }, tally: { crossroad1: 'R', 'lean.R': 1 }, then: [
        { place: 'Paulownia Mall · Game Panic', time: 'Afternoon', music: 'city' },
        { n: "Game Panic on a Saturday afternoon was all noise and no air. She went straight through it, past Junpei's fighting game and the claw machine and the rhythm cabinets, to the row of demo screens by the back wall." },
        { music: 'world-runners' },
        { n: "Every one of them, for one second, was showing the same thing. Not a demo. A room she'd never been in, folding chairs in crooked rows, a projector screen the size of a garage door, a pink banner shedding glitter over a crowd. Five people at five desks on a stage, headsets on. A girl in the middle seat, hair up, very still. And on the screen behind them, enormous, a girl in a fox mask with a bell at her throat, throwing two little blades of light to someone who had already decided they were going to die." },
        { n: "The room on the screen stood up. All of it at once. A noise came out of every speaker in the arcade, a roar, a hundred people breathing in and then screaming, and on the big screen three letters went up so large they filled it." },
        { n: "MVP." },
        { n: "Minji was beside her. Solar didn't know when she'd arrived. She had her camera in her hands and she wasn't filming. She was staring at the screens with her mouth open." },
        { s: 'minji', f: 'surprised', t: "That's us. That's... Sol, that's the tournament. That's our tournament. I'm on the left. That's me on the left." },
        { s: 'minji', f: 'sad', t: "That's you in the middle. You won it. You won it for us. You didn't even take your headset off, you just sat there, and Olivia screamed so loud she lost her voice for a week..." },
        { n: "Solar's hands knew the weight before she did. A trophy, gold plastic, a little crooked on its base, held in both hands, heavier than it looked and lighter than it should have been. The roar. The lights. A hundred faces turned toward her and, for once, for one night, none of them knowing her last name." },
        { n: "Somewhere in the roar, one voice she could have picked out anywhere. She couldn't hear what it said. She heard that it was there." },
        { fragment: 'runners-trophy' },
        { n: "Then the screens were demos again, a racing game, a pink cat dancing badly. Minji stood beside her for a long time without saying anything, holding the camera she hadn't used, and then she said, softly, that she'd always wished she'd filmed Solar's face in that moment, and she never had, because she'd been too busy screaming." }
      ] },
      { t: "(Follow the pin.)", flag: { 'xroad1-H': true }, tally: { crossroad1: 'H', 'lean.H': 1 }, then: [
        { place: 'Gekkoukan High · Gym', time: 'Afternoon', bg: 'school-hallway', music: 'school' },
        { n: "The school was empty on a Saturday afternoon, the corridors full of that hollow church echo, and her footsteps went ahead of her down the hall to the gym and came back to her from the far end." },
        { bg: 'gekkoukan-gym' },
        { n: "Somebody had been decorating. Strands of silver twine hung from the rafters in long, loose swoops, catching the light from the high windows and throwing it around, and across the back wall a paper banner was half taped up, its last letters still curling off the brick, bubble letters filled in so carefully the marker had soaked through. Folding tables. A box of balloons nobody had blown up. And in the middle of the floor a ladder, three meters of it, still swaying, very slightly, like something had only just climbed down." },
        { n: "There was one strand of twine left in the box at the ladder's feet, and one bare stretch of rafter above it. You could see exactly where it was supposed to go." },
        { music: 'world-hoax' },
        { n: "She climbed. She didn't decide to. The ladder had a bent leg and a sticker telling her in three languages not to stand on the top step, and the top step was exactly where you'd have to stand, and she was on it, with the twine in one hand and the other flat on the rafter, when the whole thing lurched under her, a sick little drop to the left that took her stomach straight through the floor." },
        { n: "And stopped." },
        { n: "Somebody had it. She felt it more than anything, the ladder going solid all at once under her feet, two hands at the bottom gripping the rails, holding it steady, holding it for her. And everybody watching from below. She could feel them. A whole gym of people craning their necks, and the one at the bottom holding on, not looking up, not saying anything, just holding." },
        { fragment: 'hoax-ladder' },
        { n: "She tied the twine. She came down. There was nobody at the bottom of the ladder. There was nobody in the gym at all, and the banner on the back wall was gone, and so were the balloons, and the twine she'd just tied was the only silver thing in the rafters." },
        { n: "In the doorway, though, there was Jungwon. He'd come to find her, he said, because she'd said she'd be at the dorm at one and it was a quarter to two. He looked up at the single strand of silver in the rafters for a long moment, and then at her, and his hand went to his watch." },
        { s: 'jungwon', f: 'neutral', t: "You held the ladder for me. Once. Then I held it for you, and I let go. I never thanked you for the first one." },
        { s: 'jungwon', f: 'happy', t: "...You should have let me fall, frankly. I was being impossible." }
      ] }
    ] },
    { n: "That night the other one was quiet. She lay awake and listened for it, the one she hadn't followed, and it wasn't there. Not gone. Just further. Like a radio station drifting off the edge of the dial, still playing, somewhere, to someone else." }
  ] },

  { id: 'a4-knock', date: '10/24', slot: 'late', title: 'hard to reach', place: 'Iwatodai Dorm · Front', time: 'The Dark Hour', scene: [
    { flag: { 'arrived-jaehyun': true } },
    { music: 'mystery' },
    { n: "It rained all evening. Hard, cold, the first real autumn storm, rain going sideways past the lounge windows and the gutters choking and the whole dorm smelling of wet shoes, and at eleven fifty-eight Solar was still awake, sitting on the stairs in the dark for no reason she could name, when the green came up, and the rain stopped in the air, and someone knocked on the front door." },
    { n: "Three times. Measured. Not loud. The knock of someone who had never in his life needed to knock twice." },
    { n: "Nobody knocked in the Dark Hour. Nobody could. She was at the door before she'd thought it through, and she opened it." },
    { n: "There was nobody on the step." },
    { n: "There were footprints. Wet ones, on the dry step, as if whoever had stood there had walked out of the storm before the hour froze it and carried the rain in with him. They went down the steps, and along the path, and out through the gate, and turned left, toward the strip, the way you'd go if you'd knocked and nobody had answered and you'd decided, calmly, that you'd simply go and look yourself." },
    { choose: [
      { t: "(Follow them.)", then: [
        { n: "She took an umbrella from the stand by the door without thinking, which was stupid, because nothing was falling. She took it anyway. Her hand wanted something to hold." }
      ] },
      { t: "(Wake someone.)", then: [
        { n: "She turned toward the stairs to wake Akihiko, and stopped with her foot on the bottom step, because she knew, with total certainty, that whoever had knocked had knocked for her, and only for her, and wouldn't want an audience. She took an umbrella from the stand by the door and went out." }
      ] }
    ] },
    { place: 'Iwatodai Strip · The Dark Hour', time: 'The Dark Hour', bg: 'darkhour-iwatodai-street' },
    { dark: true },
    { n: "The footprints went down the strip. Past the ramen shop. Past the pharmacy. Wet on dry, very even, the stride of somebody tall who walked like he was crossing a field he'd crossed a thousand times and knew where every soft patch was. She followed them with the umbrella closed in her hand and the hanging rain breaking cold on her face. They went toward the station. They didn't stop to look at the coffins. They didn't hesitate at a single corner." },
    { n: "She came round the corner by the station, and the hour ended." },
    { dark: false },
    { music: 'tender' },
    { music: 'world-runners' },
    { n: "The rain came down all at once, every drop of it, like a held breath let out, and the strip was suddenly loud, and full, people with umbrellas everywhere, lights in the windows and on the wet pavement, a taxi hissing past, red banners snapping on the lampposts. She got her umbrella open on reflex." },
    { cg: 'searchers-jaehyun-finds-solar' },
    { n: "He was standing in the middle of the pavement in the rain, soaked through, as if the rain had been falling on him the whole hour and he'd simply let it. A tall young man in a long black coat dark with water, a black shirt plastered to him under it, dark hair flattened to his forehead. Broad shoulders. A careful way of standing, weight balanced, like somebody who'd been hit hard many times by large people and had learned exactly where to put his feet." },
    { n: "He'd turned when she came round the corner. He'd known. He looked at her the way you'd look at a play developing, all of it at once, the uniform and the armband and the umbrella and her face, and she watched him read it, all of it, in about a second and a half, and arrive." },
    { s: 'jaehyun', f: 'neutral', t: "You weren't hard to find." },
    { s: 'jaehyun', f: 'serious', t: "You were hard to reach." },
    { n: "His voice was low and even and perfectly controlled. It was the calmest voice she'd ever heard. It was the kind of calm that wasn't reassuring at all, because it meant he'd already finished thinking and arrived somewhere, and she found she already hated it, specifically, bodily, in the back of her neck, before she had the faintest idea why." },
    { choose: [
      { t: "Who are you?", then: [
        { n: "He didn't flinch. Something went across his face, very fast, and was put away so efficiently she almost didn't see it go." },
        { s: 'jaehyun', f: 'neutral', t: "Jaehyun. Lee Jaehyun." },
        { s: 'jaehyun', f: 'neutral', t: "Your brother." },
        { s: 'jaehyun', f: 'neutral', t: "I'm not going to ask you anything. I said I wouldn't." }
      ] },
      { t: "You knocked.", then: [
        { s: 'jaehyun', f: 'neutral', t: "I did. Nobody answered. So I came to look." },
        { s: 'jaehyun', f: 'serious', t: "You never answer the first time. You make people knock until they mean it." },
        { n: "Then, quieter, as if it cost him something to put it into words and he'd decided to pay it anyway." },
        { s: 'jaehyun', f: 'sad', t: "I'm Jaehyun. I'm your brother. You don't know that. I can see you don't." }
      ] },
      { t: "(Hold out the umbrella.)", then: [
        { n: "She held it out over him. She had to reach up to do it. He looked at the umbrella over his head for a long moment, rain running off the end of his nose, and something happened in his jaw." },
        { s: 'jaehyun', f: 'sad', t: "...You used to do that. When you were little. Hold your umbrella over me outside school while we waited for the car, even though you couldn't reach. You'd stand on the step." },
        { s: 'jaehyun', f: 'neutral', t: "I'm Jaehyun. I'm your brother." }
      ] }
    ] },
    { cg: null },
    { n: "Her brother. The word went into her like a key into a lock that had been painted over. She felt it catch. She felt it not turn." },
    { s: 'jaehyun', f: 'sad', t: "You don't remember me. Fine." },
    { s: 'jaehyun', f: 'serious', t: "I remember enough for both of us." },
    { n: "Then, without asking, without a word, he moved. Not toward her. Around her. He stepped in on the road side of the pavement, between her and the traffic, between her and the crowd, between her and everything, the way he'd read a whole field in a second and put himself where the hit was going to come, and stood there, a step ahead and to the side, waiting for her to walk." },
    { n: "She knew that move. She knew it in her teeth. She'd been walking behind it her whole life, and she hated it, and she didn't know why she hated it, and she walked anyway, because he was waiting, and because it was raining, and because some small, terrible, stupid part of her was glad." },
    { n: "Halfway home, without looking at her, he took the umbrella out of her hand and held it over both of them. He was tall enough. He'd always been tall enough. That was, she suspected, the whole problem." }
  ] },

  { id: 'a4-knock-307', date: '10/28', slot: 'late', title: 'two, then one', place: 'Iwatodai Dorm · Kitchen', time: 'Night · 3 AM', scene: [
    { music: 'mystery' },
    { n: "She woke at three with her heart going and no idea why. The dorm was dark and full of sleeping people now, more than it had ever been, and the radiator ticked, and somewhere upstairs Junpei was snoring loud enough to be heard through two floors, which Hyein had described at breakfast as a hate crime." },
    { n: "She went down for water. She didn't turn the kitchen light on. She knew where the glasses were by feel." },
    { n: "At seven minutes past three, somebody knocked at the back door." },
    { n: "Two knocks. A pause. One more." },
    { n: "Her whole body went still. Not the jump of a fright. The other kind. The stillness of someone who has heard that knock before, many times, at this hour, and knows exactly what's on the other side of the door. A man who can't go to a hospital. Blood through a shirt. A flashlight, and a curved needle, and a voice making jokes through it until it couldn't." },
    { n: "Her hands were already moving. They'd gone to the cupboard under the sink, looking for something that should have been there. A bag. A small soft zipped bag that smelled of iodine and cheap soap." },
    { choose: [
      { t: "(Open the door.)", then: [
        { n: "She opened it. Cold air came in, and the smell of wet leaves, and the yard was empty under the security light all the way to the fence. No one on the step. No one by the bins. Nothing on the ground but a single silver gum wrapper, folded small, the way someone folds a wrapper when they're trying to quit something and need their hands busy." },
        { n: "It smelled of cinnamon. She stood in the doorway holding it until her feet were numb." }
      ] },
      { t: "Who is it?", then: [
        { n: "Nobody answered. The yard was quiet. After a long minute she opened the door anyway, and there was nobody, and the cold came in, and on the step there was a wet print of a man's boot, just one, pointing at the door, and then nothing, as if whoever had stood there had decided not to come in after all." }
      ] },
      { t: "(Don't move. Wait.)", then: [
        { n: "She waited, with her hand flat on the counter and her heart going. Nothing else came. No second knock. After a while she understood that there wasn't going to be one, that the knock had been a question, not a request, and that she'd answered it by standing there, and she didn't know what she'd said." }
      ] }
    ] },
    { n: "In the morning she asked Junpei, casually, if anyone had been up at three, and he said only his stomach, and Hyein said only Junpei's snoring, which was a crime, and nobody else had heard a thing. The gate knock, she thought, though there was no gate. Two, and then one. She didn't know who it belonged to. Her hands did." }
  ] },

  { id: 'a4-minji-awakens', date: '10/31', slot: 'evening', title: 'flash', place: 'Iwatodai Dorm · Lounge', time: 'Evening', cast: {}, scene: [
    { music: 'joy' },
    { n: "The culture festival ended in rain, and Junpei decided at around four that the dorm was doing Halloween anyway, which in practice meant a bowl of convenience-store candy, a paper bat taped crooked over the television, and Junpei himself in a Superman costume from the discount shop, the cape a size too short and the S already peeling up at one corner. Hyein looked at the costume for a long time and then went upstairs and came down with a sewing kit and a face like a surgeon." },
    { n: "Then the bass started." },
    { n: "It came through the lounge wall behind the sofa, low and heavy, the kind you feel in your back teeth before you hear it, a song none of them knew thudding through brick that, as far as anybody knew, had a parking lot on the other side of it. Laughter. A girl screaming, the happy kind. Somebody yelling at somebody to shut the door." },
    { s: 'hanni', f: 'surprised', t: "...That's Sigma." },
    { s: 'hyein', f: 'surprised', t: "That's literally the Sigma Halloween playlist. That's the one with the song Jeno does the thing to. Hanni. HANNI." },
    { n: "Minji had stopped in the doorway with her camera halfway up. She didn't say anything. She was looking at Solar. And Solar, standing in the middle of the lounge with a candy wrapper in her hand, had gone very still, because she knew this song. She knew where she'd been standing when she heard it. A staircase. A costume that itched. Somebody's hand on the banister above hers." },
    { n: "At eleven Fuuka came down from the command room with her face gone white and her hands knotted in front of her, and said there was a new floor in the tower, and it sounded like a party, and she couldn't see it." },
    { s: 'fuuka', f: 'sad', t: "It's there. I can hear it. But every time I try to look at it, it flashes, and I lose it. Like looking into a camera when somebody takes the picture. I can't find the Shadow. I can't tell you where it's standing." },
    { s: 'mitsuru', f: 'neutral', t: "Then we don't go in blind. We'll wait for another night." },
    { s: 'minji', f: 'neutral', t: "Or you take a camera." },
    { n: "Everybody looked at her. Minji didn't lower it. She'd said it the way she said everything, quietly, to the side, like a note on a shot list." },
    { s: 'minji', f: 'neutral', t: "If it's made of flashes, the lens will catch it. That's literally what lenses are for. They see the thing that happens too fast for you." },
    { s: 'minji', f: 'neutral', t: "I'm not asking to fight. I'm asking to point it at the dark and tell you where to hit. I'm good at that. I've been doing it to her all month." },
    { n: "Mitsuru looked at her for a long time. Then at Fuuka, who nodded, very small. Then at Solar." },
    { s: 'mitsuru', f: 'neutral', t: "You stay behind Solar. You don't take a single step past her. If I tell you to run, you run." },
    { s: 'minji', f: 'neutral', t: "Okay. I can do behind her. I'm always behind her." },
    { place: 'Tartarus · The Dark Hour', time: 'The Dark Hour', bg: 'tartarus-scene' },
    { dark: true },
    { music: 'mystery' },
    { n: "It was a hallway. A long one, in a house, carpet worn to the threads, red plastic cups on every flat surface, fake cobwebs hanging from the light fixtures, a fog machine somewhere pumping out a sweet chemical haze. Doors on both sides. Bass coming through all of them. It smelled like spilled sugar and forty colognes having an argument, and at the far end of it, where the hall turned, it was three in the morning. You could feel it. The particular hour when the party's over but nobody's gone home, and the house is asleep, and somebody somewhere finally isn't pretending." },
    { n: "There was nothing in it. That was what Solar's eyes said. Just the fog, and the cups, and the doors. And then Minji, at her shoulder, breathed in very sharply, with her eye to the viewfinder." },
    { s: 'minji', f: 'surprised', t: "Sol. Sol, don't move. It's right in front of you." },
    { n: "Then the flashes started." },
    { n: "White. Blinding. From everywhere. Camera flashes, dozens, hundreds, going off in the fog all around them with that high whine of a flash charging, and in the gaps between them, for a fraction of a second at a time, the Shadow. A shape like a crowd, a mob of people all pressed together with their phones up, a hundred lenses where a face should be, all of them pointed at Solar, all of them firing." },
    { n: "Solar couldn't move. Every flash went through her like a slap. She knew this. She knew exactly this. A photograph on a screen that everybody on a campus had seen before she had. A caption with a knife folded in it. Her face, taken, without asking, and handed round." },
    { battle: { id: 'memory-runners', kind: 'scripted', script: 'memory-runners', segment: 1, title: 'Tartarus · A Hallway at 3 A.M.', desc: 'A Shadow made of a hundred phone cameras, all of them pointed at her. Only a lens can see it.', notes: 'Memory floor (Runners). The flash Shadow inflicts Fear/Blind on Solar. Segment 1 ends with outcome interrupt; the scene plays Minji’s awakening; segment 2 has Minji in the party.', forced: true } },
    { n: "Minji called every hit. *Left. Two meters. Now. It's moving, it's going high, NOW.* And they hit it, and it took the hits, and kept firing, and Solar was on one knee on the sticky carpet with her arm over her eyes and the Evoker loose in her hand, and every flash took something." },
    { n: "Not memories. Her. Her face. Every flash pulled a copy of it off her like a sticker off a page, her face mid-blink, her face mid-word, her face on one knee in a hallway, and the copies went into the lenses and stayed there, and with every one she felt a little less like a girl in a hallway and a little more like a picture of one. Something to be posted. Something with a caption." },
    { s: 'fuuka', f: 'surprised', t: "Her signal's thinning! Solar's signal is... it's like it's being copied. Over and over. There's less of her every time it flashes!" },
    { n: "Minji lowered the camera." },
    { n: "Solar saw her do it, through her fingers, between flashes. Saw her take the camera away from her face, the thing she hid behind, the thing she'd held up between herself and Solar since the night by the river, and hold it in one hand at her side. And step past her. One step, then another, past the place Mitsuru had told her never to go, into the middle of the hallway, into the frame." },
    { n: "Every lens in the thing swung toward her. Every flash went off in her face at once. She didn't put her arm up. She stood there in her backwards cap and let them." },
    { s: 'minji', f: 'serious', t: "You want a face? Take mine. I'm right here. I'm not going anywhere." },
    { s: 'minji', f: 'serious', t: "Every single person on that campus took her picture without asking. You're just all of them, in a coat. I'm the only one who ever asked her. Twenty times. Every time." },
    { s: 'minji', f: 'serious', t: "So I'm asking you. Can I film you?" },
    { n: "And she lifted the camera, and turned it on the Shadow, and pressed record." },
    { music: 'awakening' },
    { cg: 'searchers-minji-awakening' },
    { n: "Light came up out of her. Not a flash. The opposite. A long, soft, steady light, like a lamp that had finally decided to stop flickering, and in it a shape, tall and quiet and patient, a figure that held everything it had ever seen in its arms and wouldn't let any of it go. In that light the Shadow couldn't hide between its flashes. It was just there, in the hallway, a crowd of strangers with their phones up, caught, looked at. Every copy of Solar's face it had taken came loose from its lenses and drifted back across the hall to her like pages blowing home, and the hundred flashing lenses went dark, one after another, as if somebody had finally told them no." },
    { cg: null },
    { flag: { 'awake-minji': true } },
    { join: 'minji' },
    { battle: { id: 'memory-runners', kind: 'scripted', script: 'memory-runners', segment: 2, title: 'Tartarus · A Hallway at 3 A.M.', desc: 'Minji has a Persona. The cameras are still there. Finish it.', notes: 'Segment 2: Minji joins the party (party id minji). Her Persona is pending design with Kat; use placeholder skills.', forced: true } },
    { music: 'night' },
    { n: "Afterward the hallway faded the way all the memory floors faded, carpet and cups and cobwebs going thin as paper and blowing away, until it was only the tower again, and the bass was gone, and it was very quiet." },
    { music: 'world-runners' },
    { n: "And in the quiet, for a second, it was three in the morning somewhere. A room with a monitor glowing on a desk and the house asleep around it. Headphones around her neck. A message typed and not sent. The one hour she wasn't pretending to be anyone." },
    { fragment: 'runners-3am' },
    { n: "Minji was sitting on the floor with the camera in her lap, turning it over and over, looking at it like she'd never seen it before. Solar sat down next to her. She didn't ask. Minji didn't say anything for a long time." },
    { s: 'minji', f: 'neutral', t: "I stepped in front of you. Mitsuru's going to kill me." },
    { s: 'minji', f: 'happy', t: "First time in my life I've been in the shot on purpose. I hated it. I'd do it again." },
    { choose: [
      { t: "How did it feel?", then: [
        { s: 'minji', f: 'neutral', t: "Terrifying. Bright. Like when you're on stage and the lights hit and you can't see anybody, you just know they're all there." },
        { s: 'minji', f: 'neutral', t: "...I think that's how it feels to be you. All the time. I'm sorry. I didn't know." }
      ] },
      { t: "Thank you. For asking. Every time.", then: [
        { n: "Minji looked at her very fast, and away again, and her ears went red under the backwards cap, and she lifted the camera, the habit of it, and then put it down again without filming anything." },
        { s: 'minji', f: 'flustered', t: "...You're welcome. You've said that before, you know. Once. I didn't think you'd say it again." }
      ] }
    ] },
    { n: "Mitsuru, when they came down, did not kill her. She looked at Minji for a long moment with the expression of someone deciding exactly how angry to be, and then said that next time, since there was apparently going to be a next time, Minji would be given an Evoker and some training first, and walked off before anybody could see her face." },
    { dark: false }
  ] },

  { id: 'a4-crew', date: '10/31', slot: 'late', title: 'the group chat', place: 'Paulownia Mall · Game Panic', time: 'The Dark Hour', cast: { asahi: 'Asahi', hyunsuk: 'Hyunsuk', jaehyuk: 'Jaehyuk' }, scene: [
    { flag: { 'arrived-crew': true } },
    { music: 'city' },
    { n: "It wasn't over. They'd come down out of the tower at one, exhausted, Minji floating, Jihoon walking backward in front of her telling her his Persona was bigger, and halfway across Paulownia Mall the hour should have ended and didn't. It held. One more minute of green. And in that minute, Game Panic, which was dark, which was closed, which was coffins and dead cabinets, started to make noise." },
    { n: "Not machine noise. People. Too loud. Arguing. Four voices at once at a volume that should have been illegal at one in the morning, coming out of a closed arcade in the Dark Hour." },
    { s: 'jihoon', f: 'surprised', t: "...No." },
    { s: 'jihoon', f: 'surprised', t: "No, no, no, NO, I know that noise. That's not... they can't..." },
    { n: "The arcade's shutter was halfway up. Under it, in the green, four boys were standing in the middle of the dead cabinets in the middle of a fight, the way you stand in a fight you've been having since middle school." },
    { s: 'junkyu', f: 'happy', t: "I'm just SAYING, we should've turned left at the..." },
    { s: 'asahi', f: 'serious', t: "There was no left, Junkyu. There was a wall. You wanted us to turn into a wall." },
    { s: 'hyunsuk', f: 'neutral', t: "Guys. Guys. Everyone's in a box. Can we focus on the fact that everyone's in a box." },
    { s: 'jaehyuk', f: 'serious', t: "I'd like to note for the record that I said this was a bad idea at the start." },
    { s: 'asahi', f: 'neutral', t: "You say that at the start of everything." },
    { s: 'jaehyuk', f: 'serious', t: "And I'm always RIGHT." },
    { music: 'world-hoax' },
    { n: "Then the one with the softest face, the one who'd wanted to turn left, saw Jihoon. And then saw who was standing beside Jihoon." },
    { s: 'junkyu', f: 'surprised', t: "SOL!!!" },
    { n: "He said it exactly the way he typed it. With three exclamation points. She could hear them." },
    { choose: [
      { t: "Do you... need some ice cream and hugs?", then: [
        { n: "She had no idea where it came from. It was just there, in her mouth, a line from somewhere, and all four of them stopped dead, and the one with the soft face burst into tears." },
        { s: 'junkyu', f: 'sad', t: "That's MY line. That's my line! She remembers my LINE!" },
        { s: 'jihoon', f: 'sad', t: "She doesn't, man. She doesn't remember anything. It just comes out of her sometimes. It's the worst. You're gonna hate it." }
      ] },
      { t: "I'm sorry. Do I know you?", then: [
        { n: "The four of them looked at each other. Then at Jihoon, who shook his head, once, very small, and put his hands in his pockets." },
        { s: 'asahi', f: 'sad', t: "...Oh. That's bad." },
        { s: 'hyunsuk', f: 'sad', t: "Asahi." },
        { s: 'asahi', f: 'sad', t: "What? It is bad. I'm allowed to say it's bad." }
      ] },
      { t: "(Wave.)", then: [
        { n: "She waved. A small one, at shoulder height, the way you'd wave at someone across a classroom. Four boys waved back, at the same time, with the same hand. Then all four of them looked at Jihoon, and Jihoon looked at the floor." }
      ] }
    ] },
    { n: "Hyunsuk was looking at Jihoon too. Not at his face. At his hands, which had gone into his pockets, and at his jaw, which hadn't stopped working since the tower." },
    { s: 'hyunsuk', f: 'neutral', t: "You good, man?" },
    { s: 'jihoon', f: 'happy', t: "I'm in a DIMENSION, Suk. I've got a gun. I've got a goblin. I've never been better in my life. Look at me." },
    { n: "Hyunsuk looked at him. He didn't say anything else, which was, Solar would learn, the loudest thing Hyunsuk knew how to say." },
    { dark: false },
    { n: "The hour ended. Game Panic's lights came on all at once and every cabinet in the place started yelling, and the four of them jumped a foot in the air, and Hyunsuk grabbed Jaehyuk, and Jaehyuk let him, and the security guard from the mall's night shift came round the corner and stared at eight teenagers standing in a closed arcade at one in the morning and decided, visibly, that it was not worth the paperwork." },
    { place: 'Iwatodai Dorm · Lounge', time: 'Night', soft: true },
    { n: "Her phone went off at two in the morning. And then didn't stop. A group chat she'd been in since September, the old one, the one with all the old messages, and now the messages were new, and fast, and came from the Kirijo guesthouse by the station, where Mitsuru had put four more boys an hour ago in four more rooms down the corridor from Jihoon's, and where, evidently, nobody was sleeping. All at once. In capital letters." },
    { phone: [
      { from: 'junkyu', t: "junkyute: SHE'S HERE!!!! SHE'S REALLY HERE!!!" },
      { from: 'asahi', t: "asanoonecares: we know junkyu we were all there" },
      { from: 'hyunsuk', t: "geniusuk: why does everyone here have a gun" },
      { from: 'jaehyuk', t: "jaehyukkie: they're not guns. the red-haired girl said they're keys." },
      { from: 'jihoon', t: "jihoney: they're EVOKERS. i have one. Only The Chosen Get One. bow" },
      { from: 'asahi', t: "asanoonecares: oh god he's got a gun AND a personality" },
      { from: 'jaehyuk', t: "jaehyukkie: has anyone had water since we got here?" },
      { from: 'junkyu', t: "junkyute: sol ur still in here right!!! say something!!!" }
    ], contact: 'PARK JIHOON HATE CLUB' },
    { music: 'world-hoax' },
    { n: "She sat on her bed in the dark and laughed until her stomach hurt, at a phone full of capital letters at two in the morning, and somewhere in the middle of laughing she stopped, and sat very still, because she knew this. This exact thing. A phone full of capital letters at two in the morning and her face hurting from it. It was the thing she'd missed most. She hadn't known she'd missed it until right now." },
    { fragment: 'hoax-group-chat' },
    { phone: [
      { from: 'solar', t: "IM HERE omg u guys are so loud" },
      { from: 'junkyu', t: "junkyute: SHE TYPED!!!! SHE'S TYPING!!!!" },
      { from: 'cherry', t: "cherryblossoms: ..." },
      { from: 'jihoon', t: "jihoney: wait" },
      { from: 'jihoon', t: "jihoney: who just typed dots" }
    ], contact: 'PARK JIHOON HATE CLUB' },
    { n: "Nobody answered that. The dots sat there. Then they went away. It was, she thought, falling asleep finally with the phone on her chest, a very loud and a very particular kind of silence, the kind somebody makes when they're on their way." }
  ] },

  { id: 'a4-hanged', date: '11/3', slot: 'evening', title: 'the last one', place: 'Iwatodai Dorm · Command Room', time: 'Evening', scene: [
    { music: 'badfeeling' },
    { n: "It was a holiday. Culture Day. The city had flags out and the dorm had too many people in it, searchers on the stairs and on the sofa and in the kitchen arguing about how to cook rice, and the moon came up full over the bay at five o'clock, huge and the color of a bruise, and the whole house went quiet without anyone asking it to." },
    { s: 'fuuka', f: 'neutral', t: "It's in Iwatodai. Right in the middle. Near the station. It's... hanging. That's the only word. It's hanging there, upside down, not moving." },
    { s: 'mitsuru', f: 'neutral', t: "This is the last one. The twelfth. If the Chairman's research is right, after tonight, the Dark Hour ends." },
    { n: "She said it in her normal voice. She said it like a schedule. Nobody in the room believed it, and nobody said so, and Akihiko looked at the window, at the moon, in a way Solar didn't like." },
    { place: 'Iwatodai · The Dark Hour', time: 'The Dark Hour', bg: 'darkhour-iwatodai-street' },
    { dark: true },
    { music: 'fullmoon' },
    { n: "It was hanging over the main road by the station, upside down from nothing, a shape like a man bound to a tree, perfectly still, the green light lying on it like dust. Below it, in the stopped traffic, the coffins stood at their steering wheels. Above it, nothing at all." },
    { battle: { id: 'hanged', op: 'hanged', title: 'The Hanged Man', desc: 'The last of them, hanging upside down over the road by the station.', forced: true, kind: 'operation' } },
    { music: 'night' },
    { n: "It came apart into ash like all of them, and the ash went up, and they stood in the road and waited for something to happen. For the hour to break. For the green to go out of the sky for good, and the coffins to open, and the city to wake up into a world where midnight was just midnight." },
    { n: "The hour ended the way it always ended. All at once. Ordinary. Streetlights. A car horn. It would be back tomorrow. Solar knew it would. She didn't know how she knew." },
    { n: "Junpei whooped anyway. Yukari laughed. Akihiko put his arm around Ken's shoulders, and Ken let him, and Mitsuru stood on the curb with her phone in her hand and the face of someone who'd been told good news by a voice she didn't trust." },
    { dark: false },
    { place: 'Iwatodai Dorm · Lounge', time: 'Night', soft: true },
    { n: "They had a party that night. A small one, in the lounge, with the searchers, everyone, the whole impossible household. Jihoon made a speech nobody had asked for. Hyein cried at it, and said she wasn't crying, and Hanni gave her a tissue without looking." },
    { n: "The dorm was very quiet after Wednesday. Later, nobody could quite say why. Something had been promised that night and hadn't come, and nobody talked about it, and the days went on, and the Dark Hour went on, and Mitsuru spent a great deal of time on the phone with her door shut, and Solar didn't ask." },
    { n: "It wasn't her story. She'd begun to understand, that autumn, that not everything was." }
  ] },

  { id: 'a4-there-you-are', date: '11/4', slot: 'late', title: 'there you are', place: 'Moonlight Bridge', time: 'The Dark Hour', scene: [
    { flag: { 'arrived-haechan': true } },
    { music: 'mystery' },
    { n: "She couldn't sleep. Nobody in the dorm could, that night, the night after the last one, but everybody else was pretending in their rooms and Solar couldn't stand to pretend in hers. At a quarter to twelve she was walking. She didn't decide where. Her feet took her down to the water and along it and up onto Moonlight Bridge, into the wind, with her coat open and her hair coming loose, and she was halfway across when the hour came." },
    { place: 'Moonlight Bridge · The Dark Hour', time: 'The Dark Hour', bg: 'darkhour-moonlight-bridge' },
    { dark: true },
    { n: "Green. The cars stopping dead around her. The wind stopping. And then, from inside her, from somewhere on the sash of a Persona she hadn't summoned, two sounds at once." },
    { n: "The bell. Small and gold. And with it, under it, perfectly in time, the click of jade on jade. Both together. She'd never heard them ring together before. They rang like two people saying the same name in two different rooms at the same moment, and she stopped in the middle of the bridge and put her hand flat on her chest, because it hurt." },
    { n: "Her radio crackled. Fuuka, half asleep, frightened." },
    { s: 'fuuka', f: 'surprised', t: "Solar? Where are you? Something just... something just came through. On the bridge. It's right next to you. It needed... it felt like it needed two doors. Like it had to wait for both of them to open at once." },
    { n: "She looked up." },
    { n: "The hour ended." },
    { dark: false },
    { music: 'tender' },
    { music: 'world-runners' },
    { cg: 'searchers-haechan-finds-solar' },
    { n: "Everything came back on at once, the wind, the traffic, the red lights strung along the cables, the cars going past in long smears of light, a full moon over the water as big as a dinner plate. And on the walkway, a few meters away, there was a boy." },
    { n: "Black jacket, white shirt, a loose black tie, black jeans, sneakers. Dark hair, a mess, longer at the front, falling in his eyes. Sun-browned skin, moles scattered on his cheek and his jaw like somebody had flicked a paintbrush. A thin pale scar through his left eyebrow. His hands loose at his sides. He wasn't moving. He was looking at her." },
    { n: "He didn't say anything. His face didn't do anything. It was the flattest face she had ever seen. Not cold. Flat the way a lake is flat when there's something enormous under it, very still, keeping very still, so it won't be seen." },
    { n: "The wind off the bay came across the bridge and brought him to her before he'd moved a step. Vanilla, somehow, faint and sweet. And under it, cinnamon gum and salt and cold engine oil." },
    { n: "Her knees did something. She put her hand on the railing." },
    { choose: [
      { t: "(Wait for him to say something.)", then: [
        { n: "He didn't. They stood there with the traffic going past between them and the bridge humming under their feet, and he looked at her, and she let him, and the longer he didn't say anything the more it felt like the loudest thing anyone had said to her all year." }
      ] },
      { t: "Do I know you?", then: [
        { n: "His jaw moved. Once. That was all. Something went in, and was taken somewhere very deep, and he didn't answer, and she understood that not answering was the answer, and that he had decided, standing there, before she'd even finished the question, that he was not going to make her say no." }
      ] },
      { t: "(Walk toward him.)", then: [
        { n: "She walked toward him. He didn't move. When she was close enough to touch, she stopped, and he looked down at her, and his hands, loose at his sides, closed, slowly, into fists, and opened again, like somebody stopping himself from doing something with them." }
      ] }
    ] },
    { cg: null },
    { n: "He didn't ask her to remember. He didn't say his name. When she turned and started walking back toward the city, he fell in beside her, half a step behind, on the traffic side, close enough that she could feel the warmth coming off him in the wind and far enough that it could have been anybody, and they walked the whole way back to the dorm like that, without a word." },
    { place: 'Iwatodai Dorm · Laundry Room', time: 'Night · 3 AM', music: 'night' },
    { n: "She couldn't sleep. Of course she couldn't. Mitsuru had found him a room at the guesthouse by the station in a voice that didn't allow questions, and he'd gone, without a word, and Solar had gone upstairs and lain on her bed in the black hoodie and looked at the ceiling until three." },
    { n: "Then she got up and went down the back stairs, past the kitchen, to the laundry room, and she didn't know why, except that it was three in the morning and that was where her feet went at three in the morning, the way they went to the wrong building at dusk. To a small room that smelled of soap and warm cotton. To the one room in a house where nobody comes at three." },
    { n: "The light was off. Somebody was sitting on the dryer." },
    { n: "He had his elbows on his knees and his head down. He'd come back. He'd come back from the guesthouse at some point in the night and let himself in somehow and come straight here, to the laundry room, as if he'd known exactly where it would be, and sat down on the dryer in the dark to wait. As if this were where you waited. As if he'd done it a hundred times." },
    { n: "He looked up when the door opened. The light from the hall fell across his face. Something in it, finally, after the whole bridge, after the whole silent walk, came loose." },
    { s: 'haechan', f: 'sad', t: "...There you are." },
    { n: "Three words. Low. Rough at the edges, like he hadn't used his voice in a long time. Like he'd been saying them in his head for so long that saying them out loud surprised him." },
    { choose: [
      { t: "Here I am.", then: [
        { n: "It came out of her like she'd been answering him her whole life. Something went across his face and was gone." },
        { s: 'haechan', f: 'neutral', t: "Yeah." },
        { s: 'haechan', f: 'neutral', t: "Yeah. Here you are." }
      ] },
      { t: "How did you know I'd come down here?", then: [
        { n: "He didn't answer. He looked at her, standing in the doorway in her socks, and the corner of his mouth moved, not a smile, the memory of where one would go." },
        { n: "He just knew, she thought. The way people know where the light switch is in a house they grew up in. He didn't know things about her because anyone had told him. He just knew them." }
      ] },
      { t: "(Sit down on the floor against the washing machine.)", then: [
        { n: "She sat. On the cold floor, with her back against the washer, close to his feet. He looked down at her for a long time. Then, very carefully, he slid off the dryer and sat down on the floor too, against the dryer, not touching her, a hand's width away, and leaned his head back against the metal, and shut his eyes." }
      ] }
    ] },
    { n: "Then, very quietly, not looking at her, he started to hum." },
    { n: "It was her song. The one with no words, the one that went somewhere and stopped, the one she'd been humming since April without knowing where it came from, in the kitchen, on the stairs, on a bench at the station, the one Wren had hummed back to her a little flat." },
    { n: "He hummed it right. Every note where it belonged. And when he got to the place where it stopped, where it had always stopped, he didn't stop. He went on. Four more bars, soft and low in the dark, going somewhere she'd never been able to follow it, and then he stopped there instead, at the new place, like a door left open a crack." },
    { n: "She couldn't breathe properly. Her eyes were doing something she couldn't see to stop." },
    { s: 'haechan', f: 'neutral', t: "Still not finished. I'm working on it." },
    { n: "He opened his eyes and looked at her sideways in the dark, and then, very deliberately, the way you'd test a step on ice, he said one word." },
    { choose: [
      { t: "(He says princess. You don't flinch.)", flag: { 'hc-there-R': true }, tally: { 'haechan.R': 1 }, then: [
        { s: 'haechan', f: 'neutral', t: "Princess." },
        { n: "She didn't flinch. She didn't know why it didn't hurt. It sat in her like something warm put into her hands on a cold night, and she watched him watch her not flinch, and file it, very carefully, somewhere she couldn't see." },
        { n: "Then he tried the other one, quieter, *agasshi*, and that one went through her like a slap on a cold cheek, a sting and a heat and an anger she didn't have a reason for, and she flinched, and he saw that too." }
      ] },
      { t: "(He says agasshi. You don't flinch.)", flag: { 'hc-there-S': true }, tally: { 'haechan.S': 1 }, then: [
        { s: 'haechan', f: 'neutral', t: "Agasshi." },
        { n: "She didn't flinch. It landed in her hard and familiar and furious, like a hand caught around a wrist, and it didn't hurt, because she had been expecting it, somehow, all year, and she watched him watch her not flinch, and file it." },
        { n: "Then he tried the other one, quieter, *princess*, and that one went through her soft and sudden as a hand on the small of her back in a crowded room, and she flinched, and he saw that too." }
      ] },
      // Only for a player who has already gone toward a Hoax door (home-H3): she answers to neither. One of the moments
      // that turn the pull down (pull-no-*, read by the solstice's secret road and core.js heading()).
      { t: "(He tries both. Answer to your own name.)", ifFlag: 'home-H3', flag: { 'pull-no-there': true }, then: [
        { s: 'haechan', f: 'neutral', t: "Princess." },
        { n: "Something warm, put into her hands on a cold night. She held it and didn't close her fingers on it." },
        { s: 'haechan', f: 'neutral', t: "...Agasshi." },
        { n: "A hand around a wrist, hard and familiar. She felt it, and didn't pull against it, and didn't go with it either. She just let it be a hand." },
        { s: 'solar', f: 'serious', t: "Solar. It's just Solar." },
        { n: "It came out of her quiet and very even, the voice somebody had once told her to use when she meant a thing, from a stage, with a sheet of paper gone soft in her fist. He looked at her for a long moment. He didn't file it anywhere. She watched him not know where to put it." },
        { s: 'haechan', f: 'neutral', t: "...Yeah. Okay. Solar." },
        { n: "He said it like somebody trying a key in a door he'd assumed was his and finding it turned from the other side too." }
      ] }
    ] },
    { n: "He didn't say anything about it. He didn't ask her which one was hers. He leaned his head back against the dryer and shut his eyes again and stayed there, a hand's width away, until it was light, and she stayed too, and neither of them said his name, because she didn't know it, and he wasn't going to make her ask." }
  ] },

  { id: 'a4-household-introductions', date: '11/5', slot: 'early', title: 'a place at the table', place: 'Iwatodai Dorm · Lounge', time: 'Early Morning', scene: [
    { place: 'Iwatodai Dorm · Lounge', time: 'Early Morning', music: 'joy', soft: true },
    { n: "By breakfast Junpei was at the table with his hair sticking up, Fuuka was trying to find an empty patch of table for another bowl, and Mitsuru had a key on the table beside her tea instead of the guesthouse envelope she'd had out last night. The boy from the dryer stood behind an empty chair until Junpei pushed it out with his foot." },
    { s: 'junpei', f: 'neutral', t: "Hey. You're the guy I let back in. Three in the morning, tapping on the kitchen window like a ghost. I'm Junpei, by the way." },
    { s: 'haechan', f: 'neutral', t: "Haechan." },
    { s: 'yukari', f: 'neutral', t: "Yukari. You've met Mitsuru. That's Fuuka, and that's Akihiko." },
    { n: "He looked at each of them as Yukari named them, a small nod for each. Akihiko nodded back and moved his bag off the chair beside Solar, and then, after a second, didn't move it any further." },
    { s: 'mitsuru', f: 'neutral', t: "I gave you a room at the guesthouse last night. You were in this building again by three." },
    { s: 'haechan', f: 'neutral', t: "Yeah." },
    { s: 'mitsuru', f: 'neutral', t: "Then there's an empty room at the end of the top floor. It's yours, since you've made your preference clear. Please use the front door. Not the kitchen window." },
    { n: "She slid the key across the table. He looked at it for a moment, as if it were a question he hadn't been asked before, and then picked it up and put it in his pocket without a word." },
    { s: 'fuuka', f: 'neutral', t: "Where are you from? If you don't mind." },
    { s: 'haechan', f: 'neutral', t: "Two places." },
    { n: "Fuuka paused over her notebook, then wrote it down. And then somebody came down the stairs." },
    { n: "Hyein, in pajamas, with a towel round her hair and her phone in her hand, talking over her shoulder to Hanni about the hot water. She got to the bottom step. She saw the table. She saw who was sitting at it. She stopped so suddenly Hanni walked into the back of her." },
    { s: 'hyein', f: 'surprised', t: "...HAECHAN?" },
    { n: "He looked up. His face did nothing at all. That was, Solar would think later, the loudest thing it could have done." },
    { s: 'hyein', f: 'surprised', t: "What are you... why are you... is Sigma here? Is everybody here? Is JAEMIN here?" },
    { s: 'haechan', f: 'neutral', t: "Just me." },
    { s: 'hyein', f: 'surprised', t: "Just you. Just you. Oh my God. Hanni. Hanni, it's just HIM. Does Sol know that you two are— were— are..." },
    { n: "Hanni's hand came over Hyein's mouth from behind, flat and fast and practiced, like she'd done it a hundred times on a hundred staircases, and stayed there. Hyein made a muffled noise of outrage into it." },
    { s: 'hanni', f: 'neutral', t: "Good morning, Haechan. Hyein's going to go and dry her hair now." },
    { n: "It was perfectly polite. It was measured to the gram, the way you'd greet somebody you'd last seen somewhere cold, saying something hard about himself, and hadn't finished deciding about." },
    { n: "Hyein did not go and dry her hair. She stood on the bottom step with Hanni's hand over her mouth and looked from Haechan to Solar and back with her eyes getting wider and wider, and Haechan looked at his bowl, and Solar looked at Haechan, and nobody at the table had the faintest idea what was happening except, very possibly, Akihiko, who had gone extremely still." },
    { choose: [
      { t: "Are we what?", then: [
        { n: "Hanni took her hand away from Hyein's mouth. Hyein opened it. Hanni looked at her. Hyein closed it." },
        { s: 'hyein', f: 'neutral', t: "...Friends. Are you two friends. That's what I was going to say. Friends." },
        { s: 'haechan', f: 'flustered', t: "No." },
        { n: "He said it flat, into his bowl, and didn't look up, and the tips of his ears had gone a very particular color." }
      ] },
      { t: "(Look at Haechan.)", then: [
        { n: "He didn't look back. He was looking at the bowl Fuuka had set in front of him as if there were something written at the bottom of it, and his jaw moved, once, and was still. Whatever Hyein had been about to say, he had decided, before she'd finished saying it, that he wasn't going to be the one who said it to Solar." }
      ] },
      { t: "(Eat your breakfast. Don't ask.)", then: [
        { n: "She ate her breakfast. She didn't ask. Across the table, very slightly, the corner of his mouth moved, the memory of where a smile would go, as if not asking were exactly what he'd known she'd do." }
      ] }
    ] },
    { n: "Then Yunjin came down, last, in an enormous gray Yankees hoodie, a man's, the print cracked, and no socks, yawning, and saw him, and stopped on the stairs above the other two, and took her round gold sunglasses off her head and put them on her face, indoors, at seven in the morning, which Solar was learning was what Yunjin did instead of screaming." },
    { s: 'yunjin', f: 'surprised', t: "Oh my God. It's the dog." },
    { s: 'hanni', f: 'surprised', t: "The WHAT?" },
    { s: 'yunjin', f: 'neutral', t: "The dog. Her dad's. That's what he calls himself. He used to sleep ten meters from her door, her mom's rule. Now he sleeps at the bottom of the garden. In theory. He carries my shopping bags in his left hand so his right's free." },
    { s: 'hyein', f: 'surprised', t: "He's the recruitment chair of a FRATERNITY." },
    { n: "Yunjin looked at Hyein. Hyein looked at Yunjin. Then both of them, slowly, looked at Haechan, who was eating his rice." },
    { s: 'haechan', f: 'neutral', t: "Two places." },
    { n: "Fuuka, very quietly, underlined it in her notebook." },
    { n: "The front door opened behind them, and Jungwon came in carrying a folder for Mitsuru, neat as a pin at seven in the morning, a visitor's lanyard round his neck that Mitsuru had made him wear and that he wore as if it were a council badge. He stopped when he saw who was sitting at the table." },
    { s: 'jungwon', f: 'neutral', t: "Donghyuck." },
    { s: 'haechan', f: 'neutral', t: "Yang." },
    { n: "Neither moved toward the other. Jungwon's eyes went once to Haechan's left side, under the ribs, and stayed there a beat too long, as if he expected something to come through the shirt, and Haechan's went to Jungwon's left arm the same way. Then Jungwon opened his left hand at his side and closed it again, slowly, all the way, like a man trying a door he'd been told was locked. It worked. Neither of them said a word about it, and Solar, who didn't know what she'd just watched, knew she'd watched something." },
    { n: "Junpei looked from one to the other with his spoon halfway to his mouth." },
    { s: 'junpei', f: 'neutral', t: "You guys know each other?" },
    { s: 'jungwon', f: 'neutral', t: "We do." },
    { s: 'haechan', f: 'neutral', t: "Lucky us." },
    { s: 'yunjin', f: 'neutral', t: "Oh, this is going to be SO bad. I'm getting popcorn. Is there popcorn? Junpei, where's the popcorn." },
    { s: 'mitsuru', f: 'neutral', t: "The folder, Jungwon. You can both save the rest for later. Yunjin, there's no popcorn at breakfast." },
    { n: "Jungwon brought her the folder. He didn't sit; visitors, Mitsuru had decided, ate when invited, and she hadn't invited him, and he wouldn't have accepted anyway, not at that table, not this morning. He bowed to the room and left again by the front door, very correctly, and didn't look at the boy at the table once on the way out, which was its own way of looking." },
    { n: "Haechan finished his rice standing up, at the counter, with his back to the room, the way you'd eat in a kitchen that wasn't yours. Then he rinsed his bowl and put it upside down on the rack, exactly where the rest of them went, as if he'd watched them do it, and went up the stairs without a word." },
    { n: "Solar found she could pick up her own spoon again. Under the table, without looking at her, Hyein kicked her ankle, very gently, twice. Hanni kicked Hyein. Nobody said anything else about it, and the dorm, which had one more person in it than it had had yesterday, went on making breakfast noises around the place where he'd been." }
  ] },

  { id: 'a4-yeobos', date: '11/7', slot: 'after', title: "yeobo's", place: "Iwatodai Strip · Yeobo's Cafe", time: 'Daytime', cast: { heeseung: 'Heeseung', sunghoon: 'Sunghoon', jay: 'Jay', jake: 'Jake', niki: 'Niki' }, scene: [
    { flag: { 'arrived-sunoo': true } },
    { music: 'joy' },
    { n: "There was a cafe on the strip that had not been there yesterday. It was wedged between the shuttered pachinko place and the ramen shop like it had always been there and resented being asked, warm windows, a hand-lettered sign, YEOBO'S, a little bell over the door." },
    { n: "Jungwon stopped dead on the pavement in front of it. He'd been walking her to the bookshop because she'd said she needed a math workbook and he'd said, with great courtesy, that she needed several." },
    { s: 'jungwon', f: 'surprised', t: "...That's Sunoo's cafe." },
    { s: 'jungwon', f: 'neutral', t: "That's Sunoo's cafe. That's not possible. That's on the other side of..." },
    { n: "He didn't finish. He looked at the sign, and at the door, and at his watch, which still said midnight, and then he squared his shoulders like a man walking into a council meeting he knew was going to go badly, and pushed the door open." },
    { place: "Iwatodai Strip · Yeobo's Cafe", time: 'Daytime', soft: true },
    { n: "The bell dinged. Inside it smelled like butter and espresso and somebody's homework, and it was so cozy it was almost rude about it. A boy behind the counter with soft hair falling in his eyes and a smile that seemed to cost him nothing at all. And a booth at the back absolutely full of boys, all talking at once, who all stopped talking at once." },
    { s: 'sunoo', f: 'surprised', t: "Jungwon!" },
    { s: 'sunoo', f: 'happy', t: "Oh my gosh, JUNGWON. Did you ever eat lunch?" },
    { s: 'jungwon', f: 'neutral', t: "When would I have had time to do that." },
    { n: "It came out of him automatically, like a line in a play, and then his face did something very complicated and he had to look at the ceiling." },
    { n: "The booth emptied onto him. A tall one with sleepy eyes and an ease about him like he'd never once been in a hurry. A sharp-jawed one in a jacket, an unlit cigarette tucked behind one ear as if he'd forgotten it was there, who said nothing and hit Jungwon on the arm, hard, which seemed to mean a great deal. A cheerful one with an open, sunny face who hugged Jungwon off his feet and then apologized to him. The youngest, long-limbed, all elbows, a pair of big headphones round his neck, already eating a croissant off a tray that was clearly meant for a customer." },
    { n: "And the last one, the beautiful one, rising from the booth with enormous ceremony, plucking a flower from the vase on the table, and looking straight past Solar at the door behind her, as if somebody else might still come through it." },
    { s: 'sunghoon', f: 'flustered', t: "Is she here? Did Cherry come?" },
    { n: "Nobody else came through the door. He looked at it a second longer than was dignified, and then bowed to Solar instead, so deeply it was almost a threat." },
    { s: 'sunghoon', f: 'neutral', t: "...No? Then Park Sunghoon is merely being gracious. Hello, Solar." },
    { s: 'jay', f: 'serious', t: "Dude. Pack it up." },
    { s: 'heeseung', f: 'neutral', t: "She's had a year, Sunghoon. Sit down. And Niki, you're on your last straw. That croissant was for a customer." },
    { music: 'world-hoax' },
    { n: "Then they all looked at her properly, and she watched each of them understand, in turn, the way you'd watch dominoes go. That it was her. That she was looking back at them like a stranger. The cheerful one's face fell first, and he hid it fast, and said hi Solar in a voice that was trying very hard." },
    { s: 'jake', f: 'happy', t: "Hi, Solar! It's so good to... hi. Hi. I'm Jake. You don't... it's okay. I'm Jake." },
    { s: 'niki', f: 'neutral', t: "She doesn't know us." },
    { s: 'jay', f: 'serious', t: "Niki." },
    { s: 'niki', f: 'neutral', t: "What? She doesn't. Somebody had to say it out loud. She doesn't know any of us." },
    { s: 'niki', f: 'sad', t: "...She doesn't know HIM." },
    { n: "The sleepy-eyed one and the cheerful one looked at Niki. The other two didn't. The one in the jacket and the beautiful one looked at Jungwon instead, quickly, the way you'd check a door you'd been told to watch, and Niki, still holding the croissant, looked at him too, and something went between the four of them that had nothing to do with the cafe, and that nobody else in the booth seemed to see." },
    { n: "Nobody said anything. Jungwon was looking at the counter, at the pastry case, with great concentration, the way you look at something very small and specific when there's something very large in the room." },
    { choose: [
      { t: "What do you recommend?", then: [
        { n: "It was the right thing to say. She didn't know how she knew. Sunoo's whole face came back on like a lamp." },
        { s: 'sunoo', f: 'happy', t: "The croissants! If my friends haven't eaten them all. They do that. They're big, and the regulars love them." },
        { n: "The regulars love them. She'd heard that before. She'd heard it in a café that didn't have a bell, in May, eating too fast." }
      ] },
      { t: "I'm sorry. I don't remember any of you.", then: [
        { s: 'sunoo', f: 'neutral', t: "That's okay! That's... that's okay. We'll just tell you who we are again. We're a lot. It's better in small doses anyway." },
        { s: 'heeseung', f: 'neutral', t: "He's being modest. We're unbearable in any dose." }
      ] },
      { t: "(Sit down in the booth.)", then: [
        { n: "She sat down in the booth like it was hers. It was, she suspected. She'd sat there before, somewhere. The boys looked at each other and then all piled in around her without a word, and Sunoo brought a croissant, and nobody talked about anything for a while, which seemed to be the kindest thing any of them could think of." }
      ] }
    ] },
    { n: "Jungwon didn't sit. He stood by the counter, very straight, while his friends argued around her about whose turn it was to pay, and when Sunoo put a croissant on a plate in front of him he looked at it for a long time without touching it." },
    { s: 'sunoo', f: 'neutral', t: "We came looking for you, you know. Both of you. We were all at the cafe at closing and the door opened and it was... green, and Niki said that's where Jungwon went, I can feel it, and walked straight through it like an idiot, and we couldn't let him go alone." },
    { s: 'niki', f: 'neutral', t: "I was right." },
    { s: 'jay', f: 'serious', t: "You were lucky." },
    { s: 'niki', f: 'happy', t: "Same thing." },
    { n: "On the walk home Jungwon carried the math workbooks, all four of them, and didn't say anything for three blocks. Then, at the corner by the station, he said, very politely, without looking at her, that his friends were idiots, and that he was more grateful to them than he had ever been to anyone in his life, and that he would never, under any circumstances, tell them so, and that she was not to tell them either." }
  ] },

  { id: 'a4-outside-hands', date: '11/8', slot: 'after', title: 'three hands', place: 'The Velvet Room', time: '', scene: [
    { music: 'velvet' },
    { n: "Elizabeth was holding the book open in both hands with the expression of someone who has been handed a baby she wasn't expecting, and who is delighted, and who has no idea what to do." },
    { s: 'elizabeth', f: 'happy', t: "Sit. Sit, sit. I've been waiting all week. I've been waiting so long I tried to make tea. I've never made tea. I'm told it went poorly." },
    { bg: 'velvetroom-1' },
    { n: "She turned the book round." },
    { n: "Solar's page wasn't blank anymore." },
    { n: "There were lines on it. Not many. A scatter of single lines, one here and one there, like stepping stones across white water, each one in fine dark ink. And they weren't in one hand. They were in three." },
    { n: "One was quick and slanting and a little careless, the kind of handwriting that's been taking notes in lecture halls and texting under desks its whole life. One was neat and small and perfectly upright, every character the same height, a hand that had been taught calligraphy at a desk by a window and had never forgotten. One was round and loopy and enthusiastic, with little stars where the dots should go." },
    { n: "None of them were hers. She knew it the way you know your own voice on a recording is wrong." },
    { s: 'elizabeth', f: 'neutral', t: "One line for every memory you've recovered. I've checked. They appeared the nights you found them. A harbor. A croissant. A can of something pink. A bell tower. Each one written in, very carefully, by someone else." },
    { s: 'elizabeth', f: 'happy', t: "Do you know, I think I understand it. Finally. I've been asking the wrong question since April. I've been asking why your page won't write itself." },
    { s: 'elizabeth', f: 'neutral', t: "Some guests are written by the people who are looking for them." },
    { choose: [
      { t: "Who?", then: [
        { s: 'elizabeth', f: 'neutral', t: "You know who. They're sleeping in your dormitory. They're arguing in your kitchen. One of them asked me, through a closed door, if I was single." },
        { s: 'elizabeth', f: 'happy', t: "I said I was a book." }
      ] },
      { t: "Why three?", then: [
        { s: 'elizabeth', f: 'neutral', t: "Because there are three of them looking. Three hands, three inks, three places. I don't know why there should be three. I'm not sure the book does either." },
        { s: 'elizabeth', f: 'serious', t: "But I notice it's never four. And never two." }
      ] },
      { t: "(Touch the lines.)", then: [
        { n: "The ink was dry. Under her fingertip each line was warm, and each one was warm differently. One like a hand on a cold morning. One like a cup held at the end of a long night. One like a crowd in a gym going up all at once." }
      ] }
    ] },
    { s: 'elizabeth', f: 'neutral', t: "There's something else. I hesitate to mention it, because I don't understand it, and I dislike mentioning things I don't understand. It's like wearing someone else's gloves." },
    { s: 'elizabeth', f: 'serious', t: "The smudges are still there. Under the new lines. Fainter. But every time a line appears on the front of your page, something presses on it from behind. Harder each time. As if whatever is on the other side would very much prefer that the page stayed blank." },
    { n: "Solar looked at the gray shadows under the bright new ink, and thought of a girl on a bench asking her not to read her messages, and didn't say anything, and her stomach said it for her, low and cold, the whole way down in the elevator." }
  ] },

  { id: 'a4-cherry', date: '11/13', slot: 'late', title: 'number one', place: 'Paulownia Mall · Karaoke', time: 'The Dark Hour', scene: [
    { flag: { 'arrived-cherry': true } },
    { music: 'city' },
    { s: 'fuuka', f: 'surprised', t: "One more. In the mall. In the karaoke place. She's..." },
    { s: 'fuuka', f: 'neutral', t: "She's very loud. She's the loudest one yet. She's yelling a name that isn't yours. Solar, she's yelling Jihoon." },
    { n: "Jihoon was already putting his shoes on. His face had gone a color Solar had never seen on it." },
    { s: 'jihoon', f: 'surprised', t: "No. No, absolutely not. Not her. Anyone but her. Send her back. Can we send her back? Is there a form?" },
    { place: 'Paulownia Mall · Karaoke · The Dark Hour', time: 'The Dark Hour', bg: 'paulownia-karaoke' },
    { dark: true },
    { n: "The karaoke place was dark and green and every booth was full of coffins holding microphones, which was the single worst thing Solar had seen in the Dark Hour, and she'd seen a great deal. And from booth seven, at the end of the hall, a voice, at the absolute top of its range." },
    { s: 'cherry', f: 'neutral', t: "PARK JIHOON, I KNOW YOU'RE HERE, I CAN SMELL YOUR COLOGNE FROM THE PARKING LOT, YOU WENT WITHOUT ME, YOU WENT TO FIND HER WITHOUT ME, YOU ABSOLUTE FUCKING..." },
    { n: "The door of booth seven banged open. A girl came out of it at speed, with long hair that had clearly been done properly at some point in the evening and then been through something, an outfit that was clearly a choice, and the face of a girl who had come to commit a crime and was annoyed to be kept waiting." },
    { n: "She saw Jihoon. She pointed at him." },
    { s: 'cherry', f: 'neutral', t: "YOU." },
    { s: 'jihoon', f: 'neutral', t: "Hi, Cherry." },
    { s: 'cherry', f: 'serious', t: "Don't hi Cherry me. How LONG, Jihoon? It felt like a YEAR. My phone says it's the same night. Nobody answering the chat, and Junkyu crying, and you didn't even TELL me you were going, you just went, you went to find my best friend without me like you're number one, when we ALL know who's really in first..." },
    { music: 'world-hoax' },
    { n: "Then she saw Solar, and stopped, mid-sentence, mid-step, one hand still pointing." },
    { n: "Her face did a lot of things very fast. Relief, enormous and helpless, that made her whole body sag. Then fury, at the relief. Then she was across the hall and had Solar by both shoulders and was shaking her, not hard, just shaking, the way you'd shake a vending machine that had taken your money." },
    { s: 'cherry', f: 'serious', t: "Where have you BEEN? Do you know what you put me through? Do you know how many times I've had to listen to Jihoon cry? HE CRIES, Solar. He cries like a WALRUS." },
    { s: 'jihoon', f: 'surprised', t: "I do NOT..." },
    { s: 'cherry', f: 'serious', t: "SHUT UP. Solar. Say something. Say something mean, I need to hear you say something mean, it's been forever." },
    { n: "Solar opened her mouth. Over Cherry's shoulder, Jihoon shook his head at her, very small, very sad. Cherry saw her look at Jihoon. Cherry turned and saw Jihoon shaking his head. Cherry was not stupid. Cherry was, Solar would learn, possibly the least stupid person she'd ever met." },
    { s: 'cherry', f: 'sad', t: "...No." },
    { s: 'cherry', f: 'sad', t: "No. Don't. Don't you dare look at me like that. Like a teacher." },
    { choose: [
      { t: "I'm sorry. I don't remember you.", then: [
        { n: "Cherry let go of her shoulders. She stood back. She looked Solar up and down, the uniform, the armband, the hair, the boots, the way you'd look at a dress somebody had ruined." },
        { s: 'cherry', f: 'serious', t: "Okay. Okay, fine. Then I'll tell you. I'm Cherry. I'm your best friend. Not him. Me. He's a placeholder. He's a walrus." },
        { s: 'jihoon', f: 'neutral', t: "...That's fair, actually. I'll allow it tonight." }
      ] },
      { t: "Say something mean? To you?", then: [
        { s: 'cherry', f: 'serious', t: "Yes. Me. It's our whole thing. You insult my eyeliner and I insult your entire personality and then we get food." },
        { n: "Solar looked at her. At the eyeliner, which was, if she was honest, extremely good, and a little uneven on the left." },
        { s: 'solar', f: 'neutral', t: "...Your left wing is lower than your right." },
        { n: "Cherry stared at her. Then she burst into tears, all at once, loud, hideous, in the middle of the green hall of a karaoke bar full of coffins holding microphones, and grabbed Solar and held on." },
        { s: 'cherry', f: 'sad', t: "Thank you. Thank you. You BITCH. Thank you." }
      ] },
      { t: "(Hug her.)", then: [
        { n: "She didn't decide to. Her arms just went. Cherry went stiff as a board, outraged, for about two seconds, and then she was holding on so hard it hurt, with her face in Solar's shoulder, saying something muffled and furious that Solar was fairly sure was a list of everything she'd done wrong since kindergarten." }
      ] }
    ] },
    { dark: false },
    { n: "The hour ended. Every coffin in every booth became a person with a microphone and went straight back into the chorus of whatever they'd been singing at midnight, all at once, forty different songs in forty different keys, and Cherry stood in the middle of it with mascara all down her face and said, very calmly, that this was the worst place she had ever been, and asked where the food was." },
    { s: 'cherry', f: 'neutral', t: "Is Sunghoon here?" },
    { s: 'cherry', f: 'serious', t: "Don't answer that. I didn't ask. Nobody in this mall heard me ask." },
    { n: "On the walk back she put herself between Solar and Jihoon on the pavement, every block, without seeming to notice she was doing it, and whenever he drifted closer she drifted with him, the way you'd keep yourself between a kid and a curb." },
    { n: "In the dorm kitchen at two in the morning she ate an entire packet of the ramen Jihoon kept in the dorm's cupboard for emergencies, which he had never once been asked to do, while insulting him without pause, and Jihoon let her, and sat across the table watching her eat with an expression Solar had never seen on him. When Cherry finally ran out of insults and put her head down on the table and fell asleep mid-sentence, he got up and put his hoodie over her shoulders, and waited, and when Mitsuru came down with a second guesthouse key, he took it, and woke Cherry just enough to walk, and steered her out of the front door and up the street toward the station with one hand on the back of her collar, the way you'd walk a cat." }
  ] },

  { id: 'a4-ferry', date: '11/14', slot: 'evening', title: 'the last ferry', place: 'Tartarus · Lobby', time: 'The Dark Hour', scene: [
    { music: 'tartarus' },
    { n: "Yunjin came because Jihoon had gotten to. That was the reason she gave, and she gave it at volume, in the lounge, to Mitsuru, at length, and Mitsuru listened to all of it and then said, very calmly, that Yunjin did not have a Persona, or an Evoker, or any training, and that the tower would kill her, and Yunjin said, babe, I've been in worse places than a tower, I've been to my dad's funeral, and Mitsuru looked at her for a long time and then said she could come as far as the landing." },
    { n: "She came a lot further than the landing." },
    { place: 'Tartarus · The Dark Hour', time: 'The Dark Hour', bg: 'tartarus-scene' },
    { dark: true },
    { music: 'mystery' },
    { n: "The floor was a ferry. The deck of one, at night, wet steel and peeling white paint and orange life rings hanging along the rail, a smell of diesel and salt and frying squid from somewhere below, and it rocked. The whole floor rocked, slow and heavy, under their feet, a swell coming from somewhere they couldn't see. Over the rail there was nothing but black water. Black, all the way down. Not green. Not the hour. Real black, real water, slapping at the hull." },
    { n: "Solar couldn't move away from the stairs. Her hand had found the rail of them and was holding it so hard her fingers had gone numb." },
    { s: 'yunjin', f: 'serious', t: "Oh, babe. Oh, no. No. Who did this? Who put her on a BOAT?" },
    { n: "The deck tilted. A wave came up over the side, a huge slow one, black and shining, and something stood up in it. A shape made of the tide itself, water pulled up into a body, all weight and pull and patience, and at its heart a dark round hollow like the inside of a shell. It didn't attack. It reached. Long slow arms of black water reaching up over the rail for Solar, and only Solar, the way the sea reaches up a beach." },
    { battle: { id: 'memory-strangers', kind: 'scripted', script: 'memory-strangers', title: 'Tartarus · The Last Ferry', desc: 'A Shadow made of the tide, reaching over the rail of a ferry that rocks under their feet. It only wants her.', notes: 'Memory floor (strangers). The deck tilts every few turns (accuracy down). The tide Shadow targets Solar only and can Drag (remove her from the field for one turn). Win to continue; in the story she goes overboard at the end of the fight.', forced: true } },
    { n: "They broke it. It came apart like a wave breaks, all at once, a great collapse of black water across the deck, and as it fell it took her." },
    { n: "Not a hit. It just went out the way a wave goes out, and she was in it, and the deck went out from under her feet, and the rail went past, and she was in the sea." },
    { n: "Black. Cold. So cold it wasn't cold, it was a blow, all over, at once. Water in her mouth, her nose, her eyes. Her coat dragging her down like hands. She couldn't swim. She had never been able to swim. She knew it the way she knew her name. Her body flailed and found nothing, nothing at all, no floor, no rail, no up, and the panic came up out of the bottom of her like something that had been waiting her whole life for exactly this water." },
    { n: "She could hear, very far away, above, Akihiko shouting. Mitsuru shouting. And then something hit the water beside her, hard." },
    { n: "Hands. On her collar, on her arm. Somebody who couldn't swim much better than she could, by the feel of it, kicking furiously, swearing in two languages into the black water, and hauling. Hauling her up by the coat, by the hair, by anything, and Solar's face broke the surface and she was choking and the somebody had an arm around her chest from behind and was shouting in her ear." },
    { s: 'yunjin', f: 'serious', t: "I'VE GOT YOU. I've got you, I've got you, don't fight me, babe, DON'T FIGHT ME, I'm in Prada, we are BOTH going to die if you fight me." },
    { n: "Yunjin. Yunjin, who had no Persona, and no Evoker, and no training, who had gone over the rail of a ferry in a tower full of monsters into black water without a second's thought. She didn't stop talking the whole time. She talked them both to the side of the ship and she talked while Akihiko and Jihoon hauled them up by the arms and she talked while Solar lay on the wet deck on her side coughing up the sea, and she didn't stop talking until Solar reached out, blind, and found her hand, and held it." },
    { n: "Then she stopped. She sat on the deck with her hair plastered to her face and her mascara all down her cheeks and held Solar's hand in both of hers and didn't say anything at all." },
    { music: 'night' },
    { music: 'world-strangers' },
    { n: "And in that quiet, with the deck rocking and the diesel smell and the cold, for a second it was another ferry. Another night. A low concrete terminal painted a blue that had faded nearly to gray, a timetable board, a white ferry idling at the bottom of a concrete ramp, the last one of the night. And a photograph of that ramp, taken from behind: a woman in a camel coat with her hair up, very straight, like a teacher, standing at the top of it with a small handbag on her arm. Solar had never been on that boat. She'd only ever stood at the far end of the car park and watched it idle, and never once in her life wanted to be on it." },
    { fragment: 'strangers-ferry' },
    { choose: [
      { t: "You jumped in.", then: [
        { s: 'yunjin', f: 'neutral', t: "Yeah. Obviously." },
        { s: 'yunjin', f: 'sad', t: "You can't swim, babe. You've never been able to swim. I always said if you ever fell in I'd go in after you. I said it like a joke. I said it like a thousand times." },
        { s: 'yunjin', f: 'neutral', t: "Turns out it wasn't a joke. Who knew." }
      ] },
      { t: "You don't have a Persona.", then: [
        { s: 'yunjin', f: 'serious', t: "I don't need one. I have you to save, which is a full-time job, and I have Prada, which is armor." },
        { s: 'yunjin', f: 'sad', t: "...Had Prada. Rest in peace." }
      ] },
      { t: "(Hold on to her hand.)", then: [
        { n: "She held on. Yunjin held on back. Neither of them let go until the floor faded, and they were sitting in the tower's checkerboard hall soaking wet in the green with the others standing round them, and still neither of them let go." }
      ] }
    ] },
    { n: "On the way out, Yunjin walked half a step ahead of her the whole time, the way you'd walk in front of somebody on a pier at night, between them and the edge. She didn't say anything about it. Solar didn't either. But at the bottom of the tower she caught Solar looking, and grinned, wet and wrecked and fierce." },
    { s: 'yunjin', f: 'happy', t: "Told you. Wifey. For life. Even in the weird tower." },
    { dark: false }
  ] },

  { id: 'a4-mark', date: '11/18', slot: 'late', title: 'four notes', place: 'Port Island Station · Central Concourse', time: 'The Dark Hour', flag: 'door-R6', scene: [
    { flag: { 'arrived-mark': true } },
    { music: 'mystery' },
    { n: "She heard it from the street. A piano, in the Dark Hour, where nothing played and nothing moved. Coming from Port Island Station, from the concourse, from the old upright painted with fat cartoon seagulls and a laminated sign that said PLEASE PLAY in four languages, which in all her months here she had only ever heard play three songs, badly, by children." },
    { place: 'Port Island Station · Central Concourse · The Dark Hour', time: 'The Dark Hour', bg: 'darkhour-iwatodai-street' },
    { dark: true },
    { n: "Coffins on the concourse. Coffins at the ticket gates, at the bakery counter, one standing at the bottom of the escalator with a briefcase. And at the piano, in the middle of all that green stillness, a boy, playing." },
    { n: "Caramel hair that fell into his eyes every time he looked down at his hands. A navy sweatshirt with two Greek letters across the chest. He played like he was talking to someone who hadn't shown up yet. Something she didn't know, warm and a little lopsided, a melody that kept climbing toward something and then stopping short on the same chord, like a person getting all the way to their front door and patting their pockets for keys." },
    { n: "He stopped on the chord. And again. And a third time. And on the fourth time, before she could think better of it, the next notes were already out of her, hummed under her breath, quiet as anything, the way you finish a stranger's sentence on a train." },
    { n: "His hands came off the keys." },
    { s: 'mark', f: 'surprised', t: "Wait. Do that again, that's..." },
    { music: 'world-runners' },
    { n: "He turned round. His face did something complicated. A double take, the real kind, eyes on her and away and back again, like his brain had sent the picture twice to be sure." },
    { s: 'mark', f: 'surprised', t: "Sol?" },
    { n: "And then, as she watched, he did what nobody else had done. He didn't wait for her to recognize him. He didn't look for it in her face. He just knew who she was, entirely, all at once, the way he'd known it once on a first day somewhere, before she'd said her name. And he smiled, warm and easy, like she'd walked into a room he'd been keeping a seat in." },
    { s: 'mark', f: 'flustered', t: "Hey. Hi. It's you. Oh, man. It's really you." },
    { choose: [
      { t: "I'm sorry. I don't know who you are.", then: [
        { n: "The smile didn't go. That was the strange thing. It changed, a little, at the edges, like a song going into a minor key, but it stayed, and he nodded, slowly, as if she'd told him something he needed to sit with. And under it, for half a second, something that looked almost like relief, there and gone so fast she'd wonder later if she'd made it up." },
        { s: 'mark', f: 'neutral', t: "Yeah. No, yeah. I kind of figured, from your face. Hanni's... not really answering me. One got through, though. Before... before." },
        { s: 'mark', f: 'neutral', t: "It's Mark. I'm Mark. That's okay. You didn't know me the first time either. I knew you." }
      ] },
      { t: "How do you know that song?", then: [
        { s: 'mark', f: 'neutral', t: "I... it's not mine. Not all of it. It's sort of everyone's. It's a thing I'm trying to work out." },
        { s: 'mark', f: 'neutral', t: "You knew the next part. Nobody knows the next part. How do you know the next part?" },
        { n: "She didn't know. She didn't say so. He looked at her for a long moment with an expression she couldn't read, and then he smiled again, and said his name was Mark, as if that answered it." }
      ] },
      { t: "(Sit down on the bench beside him.)", then: [
        { n: "He shifted over without thinking about it, the way you make room for someone you've made room for before. They sat side by side at the seagull piano in the green, looking at the keys." },
        { s: 'mark', f: 'neutral', t: "You don't know me. Right? I can tell. It's fine. I'm Mark." },
        { s: 'mark', f: 'flustered', t: "We used to do this, sort of. Sit somewhere and not talk about stuff. You're good at it." }
      ] }
    ] },
    { dark: false },
    { n: "The hour ended. The concourse came back all at once, announcements and footsteps and the bakery's last bread, and a little girl with a balloon stopped to stare at the two of them at the piano, and Mark played her a bit of something silly with one hand until she laughed and was pulled away." },
    { n: "He was warm. He was easy to be next to. He asked her nothing she couldn't answer and he laughed at the right times and he walked her to the monorail and said he'd find the others, he knew they were here, Hanni had texted him, and he'd see her soon, and his hand touched her elbow once at the gate, light, like a period at the end of a sentence." },
    { n: "On the train home she found she was humming the song. Her part of it. The four notes she'd known. And under them, quieter, the way you'd notice a draft in a warm room, she found she was thinking of the laundry room at three in the morning, and a boy on a dryer who had hummed the same song, and had gone four bars further than this one had, and had stopped on purpose, and had not told her his name." }
  ] },

  { id: 'a4-sisters', date: '11/21', slot: 'evening', title: 'in front', place: 'Tartarus · Lobby', time: 'The Dark Hour', scene: [
    { music: 'tartarus' },
    { n: "Hanni and Hyein had stopped asking. Jihoon had a Persona. Minji had a Persona. Yunjin had gone into the sea with nothing at all. And the two of them had sat in the lounge every night for two months watching Solar go out of the front door with an armband on, and on Saturday night, at a quarter to twelve, they were at the door before she was, in sneakers, with their hair tied back." },
    { s: 'hyein', f: 'serious', t: "Don't. Don't even. We're coming. We're not asking. We're informing you." },
    { s: 'hanni', f: 'neutral', t: "She learned that from Mitsuru." },
    { s: 'hyein', f: 'serious', t: "I learned it from Mitsuru, and it WORKS." },
    { place: 'Tartarus · The Dark Hour', time: 'The Dark Hour', bg: 'tartarus-scene' },
    { dark: true },
    { music: 'mystery' },
    { n: "Fuuka found the floor near the top of what they could reach. A living room. A big one, too big, in a house, wood floors sticky underfoot, a beer pong table, a couch nobody should ever sit on, string lights, a flag on the wall with a cross on it, and so many red cups. Music so loud it had a shape. And a staircase going up, and a hallway at the top of it, and a door." },
    { n: "Hyein stopped dead in the doorway." },
    { s: 'hyein', f: 'surprised', t: "That's the Sigma house. That's... Hanni. That's the first party. That's the first one. We left her. We LEFT her here..." },
    { s: 'hanni', f: 'serious', t: "The first one. We saw her after this, Hyein. This isn't the night she disappeared." },
    { s: 'hyein', f: 'sad', t: "I know. I know that. I still left her here." },
    { n: "The party stood up. Not the people. There were no people. The party itself. The noise and the cups and the lights and the smell of it, all pulling together into one shape, huge, grinning, a body made of a crowd that wasn't paying attention to you, a crowd that laughed and moved and didn't notice when one girl wasn't with her friends anymore. It turned toward them. It turned toward Hyein." },
    { battle: { id: 'memory-runners-2', kind: 'scripted', script: 'memory-runners-2', title: 'Tartarus · The First Party', desc: 'A Shadow made of a party that never noticed who was missing. It goes for whoever is easiest to separate.', notes: 'Memory floor (Runners). Hanni and Hyein are present as non-combatants (no Personas, per Kat). The Shadow targets a guest each turn; Solar can Cover. Win to continue.', forced: true } },
    { n: "Near the end it went for Hyein. A great arm of noise and elbows and spilled drink, reaching, the way a crowd reaches for a girl at a party and pulls her off into it, away from her friends, into a hallway, into a room." },
    { n: "Hanni got there first." },
    { n: "She didn't have a Persona. She didn't have an Evoker. She didn't have anything. She had her arms, and she put them out, wide, and stood in front of Hyein, in front of the thing, in her sneakers on the sticky floor, small and absolutely immovable, the way she stood in front of everyone, always, the way she'd been standing in front of everyone her whole life without anybody noticing because she made it look like nothing." },
    { s: 'hanni', f: 'serious', t: "No. Not her. Not again. We don't leave people here. We don't leave ANYBODY here." },
    { n: "Solar's hand was at her temple before she'd thought. The Evoker. The crack. And Haenim came up out of her brighter than she'd ever come, and the gold bell on her sash rang, rang so loud and so clear that it went through the whole floor, through the music and the cups and the lights, and the party-shape stopped, mid-reach, as if somebody had pulled the plug on the speakers." },
    { n: "In the silence after the bell, the thing came apart. Not into ash. Into people. Into a crowd of nobodies, faces without features, a hundred of them, turning away one by one and wandering off into the dark like guests going home at four in the morning, until there was nothing left on the sticky floor but red cups." },
    { music: 'night' },
    { n: "Hanni was still standing there with her arms out. Hyein had both hands fisted in the back of Hanni's shirt. Neither of them had moved." },
    { s: 'hyein', f: 'sad', t: "You idiot. You absolute idiot. You don't even have a monster. You don't have anything. You just stood there." },
    { s: 'hanni', f: 'neutral', t: "Yeah. I know. That's kind of all I ever do." },
    { choose: [
      { t: "That's not nothing. That's everything.", then: [
        { n: "Hanni turned and looked at her. Her arms came down, slowly. Her face did something Solar had never seen it do, not once in two months, not in the mall, not in the lounge, not in any of it. It crumpled. All at once, like a paper cup." },
        { s: 'hanni', f: 'sad', t: "You used to say that. You used to say that to me. Exactly that." }
      ] },
      { t: "(Put your arms around both of them.)", then: [
        { n: "She did it without deciding. Both of them, one arm each, and pulled them in, and held on, and the two of them came into it like they'd been waiting for it every night since the mall, and the three of them stood in the middle of a dead party in a tower in the green, holding on, until the floor faded under them." }
      ] },
      { t: "Nobody left me. I'm right here.", then: [
        { s: 'hyein', f: 'sad', t: "We did, though. That party. We lost you in the house. And later, when you disappeared, I kept thinking about it." },
        { s: 'hanni', f: 'neutral', t: "But we found you. Twice now. So." },
        { n: "So. Hanni said it like a full sentence. Maybe it was." }
      ] }
    ] },
    { n: "Nobody awakened anything that night. There was no light, no shape, no name. Hanni went home with her sneakers stuck to the floor of a fraternity house that didn't exist and Hyein's hands still knotted in her shirt, and that was all, and it was, Solar thought, lying awake afterward with the gold of the bell still ringing faintly in her ears, the bravest thing she had seen anyone do all year." },
    { n: "Some people got something from the hour. Some people just stood in front of it anyway." },
    { dark: false }
  ] }
);
