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
      { t: "(Type: Who is this?)", then: [
        { phone: [
          { from: 'solar', t: "Who is this?" },
          { from: 'hyein', t: "hyein: its US" },
          { from: 'hyein', t: "hyein: ur sorority sisters??" },
          { from: 'hanni', t: "hanni: hanni and hyein!!! did you hit your head??" }
        ], contact: 'hanni, hyein' }
      ] },
      { t: "(Type: I'm okay. What party?)", then: [
        { phone: [
          { from: 'solar', t: "I'm okay. What party?" },
          { from: 'hyein', t: "hyein: WHAT PARTY" },
          { from: 'hyein', t: "hyein: the sigma party solar. the STINKY one" },
          { from: 'hanni', t: "hanni: oh no she hit her head" }
        ], contact: 'hanni, hyein' }
      ] },
      { t: "(Type: I'm fine. Thank you for worrying about me.)", then: [
        { phone: [
          { from: 'solar', t: "I'm fine. Thank you for worrying about me." },
          { from: 'hanni', t: "hanni: of course!!! thats what sisters are for" },
          { from: 'hyein', t: "hyein: wait why r u typing like that" },
          { from: 'hyein', t: "hyein: with the capital letters and the punctuation" },
          { from: 'hyein', t: "hyein: solar is NEVER polite before noon" }
        ], contact: 'hanni, hyein' }
      ] }
    ] },
    { n: "It wasn't before noon. It was nearly midnight. But the screen said the messages had been sent at a quarter to ten in the morning, on a day with dashes where the year should be, and somewhere a girl called Hyein was eating breakfast and deciding her friend was being weird, and Solar laughed, out loud, alone on the rug, and then put her hand over her mouth, and then didn't know what to do with her face at all." },
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
      { t: "(Type: who's bringing the ice cream)", then: [
        { phone: [
          { from: 'solar', t: "who's bringing the ice cream" },
          { from: 'jihoon', t: "jihoney: ME. obviously. the light of your disgusting life" },
          { from: 'cherry', t: "cherryblossoms: fking projectile vomiting imagine liking anything abt park jihoon" },
          { from: 'junkyu', t: "junkyute: sol ur typing normal again!!! :D" }
        ], contact: 'PARK JIHOON HATE CLUB' },
        { n: "Typing normal. She looked at what she'd typed. All lowercase, no full stop, the way her thumbs had wanted to do it. She hadn't typed like that once since April." }
      ] },
      { t: "(Type: I think I'm in the wrong chat.)", then: [
        { phone: [
          { from: 'solar', t: "I think I'm in the wrong chat." },
          { from: 'asahi', t: "asanoonecares: lmao she wishes" },
          { from: 'jihoon', t: "jihoney: sol why r u typing like my grandmother" },
          { from: 'jihoon', t: "jihoney: im getting the large tub. this is a large tub situation" }
        ], contact: 'PARK JIHOON HATE CLUB' }
      ] },
      { t: "(Don't type anything. Keep reading.)", then: [
        { n: "She didn't type. She read. Forty messages, sixty, a whole evening of other people being loud at each other in a room she wasn't in, and somewhere around the fiftieth she realized she was smiling, and had been for some time, and her face hurt." }
      ] }
    ] },
    { n: "The messages were old. She could tell. Not from the stamps, which had their row of dashes like all the others, but the way you can tell a photograph is old from the colors. They had the feel of something sent a long time ago, a summer ago, maybe, that had taken the long way round to reach her and arrived tired." },
    { n: "Somewhere, a girl had been sad over x reason, and a boy had been stuck at a traffic light, and a whole room of people had argued about who loved her best. She lay back on the bed with the phone on her chest and her arm still caught in the hoodie and looked at the ceiling." },
    { n: "Somewhere very far off, too faint to be sure of, something small and metal ticked once, like a pin being pushed through card." }
  ] },

  { id: 'a4-hermit', date: '9/5', slot: 'evening', title: 'the first bell', place: 'Iwatodai Dorm · Command Room', time: 'Evening', scene: [
    { music: 'mystery' },
    { n: "The moon on the fifth of September was enormous and yellow, a harvest moon a few weeks early, and it came up over the bay so close and so heavy that Junpei, looking at it out of the lounge window, said it looked like it was thinking about landing." },
    { s: 'fuuka', f: 'neutral', t: "One. It's big, and it's very still, and it's at the tower. At the gate. Right at the foot of it, like it's waiting for someone to come out." },
    { s: 'fuuka', f: 'surprised', t: "And... two more. Not Shadows. People. They just came in. One's walking very carefully, like he's checking corners. The other one's..." },
    { s: 'fuuka', f: 'neutral', t: "The other one's very excited about something." },
    { place: 'Tartarus · The Dark Hour', time: 'The Dark Hour', bg: 'tartarus-entrance' },
    { dark: true },
    { music: 'fullmoon' },
    { n: "At midnight they stood at the foot of the tower, all of them, the whole year's worth of S.E.E.S. in one long line in the green: Akihiko with his gloves, Junpei with his bat, Yukari's bow, Mitsuru's rapier, Aigis with her arms already raised, Ken holding his spear the way you hold something you've decided to be brave about, Koromaru low and ready, Shinjiro at the end of the line with his axe over his shoulder and his eyes on Ken." },
    { n: "The thing at the gate was a hermit. A great dark shell, crusted and old, with something inside it that watched them out of a slot, very patient, as though it had all the time in the world and was prepared to wait them out." },
    { battle: { id: 'hermit', op: 'hermit', title: 'The Hermit', desc: 'A Shadow in a shell at the foot of the tower, waiting them out.', forced: true, kind: 'operation' } },
    { music: 'night' },
    { n: "Afterward, in the last quarter of the hour, the city was very quiet. Solar stood a step behind the others in the courtyard at the foot of the tower with the ash coming down soft as snow, and listened, and found she was listening for something specific, and didn't know what." },
    { n: "At the edge of the courtyard a tall man in a brown leather jacket was standing in a doorway with a flashlight in one hand and a pistol in the other, held low, sweeping the coffins one by one with the light, checking each one, like a man doing a job he'd done in a great many terrible places. He saw them. He didn't raise the gun. He looked at the armbands, and at the Evokers, and at Ken, and something in his face went very tired, and he lowered the flashlight and nodded to them, once, the way strangers nod on a mountain path." },
    { n: "On the other side of the courtyard a man in a green headband was sitting cross-legged on the pavement in front of a coffin, sketching it, fast, with a pen, in a book balanced on his knee, his whole face lit up with a delight so pure it was almost obscene." },
    { n: "And somewhere past both of them, down the long road back toward the station, at the very end of it, a small figure in a coat too big for her, pointing." },
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
      { t: "(Type: I'm here.)", then: [
        { phone: [{ from: 'solar', t: "I'm here." }], contact: 'Unknown number' },
        { n: "It didn't send. The little clock beside it went round and round and round. She held the phone until her hand ached and it was still going round when she fell asleep." }
      ] },
      { t: "(Type: Where are YOU?)", then: [
        { phone: [{ from: 'solar', t: "Where are you?" }], contact: 'Unknown number' },
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
      { t: "(Type: I'm home. I'm fine.)", then: [
        { phone: [
          { from: 'solar', t: "I'm home. I'm fine." },
          { from: 'yunjin', t: "OK WHY ARE U TYPING LIKE A LETTER" },
          { from: 'yunjin', t: "capital letters. periods. who did this to u" },
          { from: 'yunjin', t: "did ur mom take ur phone. is this ur mom. hello madam" }
        ], contact: 'Unknown number' }
      ] },
      { t: "(Type: Who is this?)", then: [
        { phone: [
          { from: 'solar', t: "Who is this?" },
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
    { n: "She looked at the last one for a long time. Somebody knew. Somebody, somewhere, knew that she didn't sleep at low tide, and had known it long enough to make a joke of it, and loved her enough to put the joke in brackets, quietly, like a hand on the back of her neck." },
    { n: "Whatever it was tomorrow had already happened, she thought. These were old too. These had been sent the night before something, a long time ago, by someone who'd been awake for her, and she'd never answered, and the something had come anyway." },
    { n: "She didn't sleep. It was low tide. Somewhere far off, under everything, something green and smooth tapped once against something else, jade on jade, like a ring knocked against a glass to make a toast." }
  ] },

  { id: 'a4-mall', date: '9/12', slot: 'late', title: 'sol?!', place: 'Paulownia Mall', time: 'The Dark Hour', scene: [
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
    { s: 'solar', f: 'neutral', t: "Solar. I don't... that's all I've got. Just Solar." },
    { n: "Hyein made a sound like she'd been hit." },
    { s: 'hyein', f: 'sad', t: "Why are you talking like that?" },
    { s: 'hyein', f: 'sad', t: "Why are you TALKING like that. All careful. Like we're your teachers. You never talk like that to us. You've never once in your life talked like that to us." },
    { choose: [
      { t: "I'm sorry. I don't know how I used to talk.", then: [
        { s: 'hyein', f: 'sad', t: "Like a menace. You talked like a menace. And you were mean about my hair and you stole my dry shampoo and you..." },
        { n: "She stopped. She put the back of her wrist against her mouth and held it there." }
      ] },
      { t: "Tell me. How do I talk?", then: [
        { n: "Hyein opened her mouth and nothing came out, and it was Hanni who answered, quietly, looking at the tea." },
        { s: 'hanni', f: 'neutral', t: "You say you're fine. A lot. Like, constantly. You say it before anyone's even asked." },
        { s: 'hanni', f: 'sad', t: "And then you're nicer to us than you are to yourself, and you think we don't notice." }
      ] },
      { t: "(Say nothing.)", then: [
        { n: "She didn't say anything. She had nothing to say it with. Hyein looked at her not saying anything for a long time and then looked away, at the window, with her jaw set." }
      ] }
    ] },
    { s: 'akihiko', f: 'neutral', t: "How long has she been gone? From where you are?" },
    { n: "The two girls looked at each other." },
    { s: 'hanni', f: 'neutral', t: "...A night? She didn't come home. We were at a party and then she wasn't, and we called and called, and we went out looking. We were out looking for, I don't know. Four hours? Five?" },
    { s: 'hyein', f: 'serious', t: "It was way longer than that. It felt like days. I'd slept, Hanni, I definitely slept, I remember sleeping on that bench." },
    { s: 'hanni', f: 'sad', t: "You didn't sleep, you closed your eyes for like ten minutes." },
    { s: 'hyein', f: 'serious', t: "Then why do I remember it being morning?" },
    { n: "They looked at each other again, and neither of them was sure, and Solar watched it frighten them in a way nothing else had." },
    { s: 'solar', f: 'neutral', t: "I've been here since April. Five months." },
    { n: "Nobody said anything for a long time. Hyein picked up her phone and turned it so they could all see. The clock on the screen said twelve oh one. It had said twelve oh one all night. Hanni held out her wrist. Her watch said the same, the second hand stopped dead, quivering slightly, like it wanted to go on and couldn't remember how." },
    { s: 'mitsuru', f: 'neutral', t: "Then it doesn't matter how long. You're here now. You'll stay here, both of you. There are rooms on the second floor nobody uses." },
    { s: 'hanni', f: 'neutral', t: "We can't just..." },
    { s: 'mitsuru', f: 'neutral', t: "You can. I'll arrange it. That isn't an offer. I'm informing you." },
    { n: "Hyein looked at Mitsuru the way you look at someone who has just done something you didn't think people did. Then she laughed, wet and surprised, and wiped her nose on Fuuka's pajama sleeve, and said sorry, and Fuuka said it was fine, really, she had others." },
    { n: "Later, when the others had drifted out to give them room, it was just the three of them on the couch. Hyein on one side. Hanni on the other. Solar in the middle without having decided to sit there." },
    { s: 'hanni', f: 'neutral', t: "Okay. So. Here's what we've decided." },
    { s: 'hyein', f: 'neutral', t: "We decided it in the bathroom. At like four in the morning. It's binding." },
    { s: 'hanni', f: 'happy', t: "If you don't remember being our sister, that's fine. That's okay. We'll just be your sisters again. From scratch." },
    { s: 'hyein', f: 'happy', t: "Louder this time." },
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
    { n: "That afternoon Hyein went through Solar's wardrobe, every item, holding each one up and making a face, and pronounced the whole thing a tragedy, and said it was okay, she'd fix it, she'd fix all of it. Hanni sat on the bed and watched them and didn't say anything, and every so often Solar caught her looking, not at the clothes, at Solar's hands, the way they moved, the way they folded things, as if she were checking each one against a list she kept somewhere and finding every single one present." }
  ] },

  { id: 'a4-ice-cream', date: '9/19', slot: 'late', title: 'a large tub', place: 'Iwatodai Strip', time: 'The Dark Hour', scene: [
    { music: 'mystery' },
    { s: 'fuuka', f: 'neutral', t: "One. On the strip. Solar, he's... he's walking. Really fast. Like he's late for something." },
    { s: 'fuuka', f: 'surprised', t: "And he's holding something cold. Really cold. I don't know how I know that. It's like it's the only cold thing in the whole hour." },
    { place: 'Iwatodai Strip · The Dark Hour', time: 'The Dark Hour', bg: 'darkhour-iwatodai-street' },
    { dark: true },
    { n: "She didn't run this time. She walked. Fast, but walking, with Hanni and Hyein on either side of her because they'd refused to stay behind, Hyein in Solar's black hoodie, because she'd said it was cold and taken it off the back of Solar's chair without asking, like she'd done it a hundred times. Akihiko a few steps back. The strip was green and dead and full of coffins, the ramen shop's lantern hanging perfectly still, the pharmacy's sign dark." },
    { n: "And down the middle of the road, between the stopped cars, a boy was walking like he was late for something. Tall, broad in the shoulders, dark hair wrecked by wind that wasn't blowing, gray sweatpants and a t-shirt and slides, like he'd left the house in a hurry. In the crook of his arm, held against his chest like a baby, a tub of ice cream so large it looked like a joke." },
    { n: "He was talking to himself. Loudly." },
    { s: 'jihoon', f: 'neutral', t: "...left at the light, right at the thing, I KNOW where her house is, I've been going to her house since I was FOUR, why is everything green, why is everybody in a box..." },
    { n: "Hyein made a noise. A small, high, completely involuntary noise." },
    { n: "He looked up. He saw Hanni and Hyein first, and his face did nothing at all, two strangers. Then his eyes slid past them and found Solar, and stopped, and his whole body stopped with them, mid-step, one slide still in the air." },
    { s: 'jihoon', f: 'surprised', t: "SOL?" },
    { s: 'jihoon', f: 'happy', t: "Oh my God. Oh my GOD. There you are. Do you know how long I've been walking? Do you know how many traffic lights there are in this place? None of them work! None of them! Everyone's in a BOX!" },
    { n: "He came at her across the road. Not a hug, quite. He came right up to her and stopped, very close, and held the tub out at her like a cop holding up a badge." },
    { s: 'jihoon', f: 'neutral', t: "I got the large tub. I was on my way to your house. As your best friend it is rightfully MY job, I don't care what Junkyu says, and then I took a wrong turn somewhere and everything went green, and now I'm here, and you're here, and..." },
    { s: 'jihoon', f: 'neutral', t: "...why are you wearing that?" },
    { n: "The tub was so cold it smoked faintly in the green. Solar could see frost on the outside of it, crisp and white. In the hour, where nothing moved and nothing changed, where the water in the fountains hung in the air and the steam over the ramen pots stood still, it was the only thing that was exactly as it should be. It wasn't melting. It hadn't melted all the way here. It was going to stay that cold forever if he held it long enough." },
    { choose: [
      { t: "I'm sorry. Who are you?", then: [
        { n: "He laughed. A big, easy, delighted laugh, the laugh of a boy who has known a girl since he was four and knows exactly how she does a bit." },
        { s: 'jihoon', f: 'happy', t: "Ok very funny, Sol. Very funny. Ten out of ten. Pilates instructors HATE her." },
        { n: "Nobody else laughed. He looked around at them. At Hanni's face, and Hyein's. At Akihiko, who had come up very quietly behind Solar's shoulder. He looked back at Solar, and waited for her to break, the way she always broke, and she didn't, and she watched him watch her not break." }
      ] },
      { t: "(Take the ice cream.)", then: [
        { n: "She took it. She didn't know why. Her hands came up for it the way they came up for the Evoker, sure and quick, and took it from him and held it against her stomach, freezing, and he let go and stood there with his arms empty and an enormous grin on his face that stayed there for one second, two, three." },
        { s: 'jihoon', f: 'happy', t: "See? See? Now you say thank you, Jihoon, you're the light of my disgusting life." },
        { n: "She didn't say it. She didn't know it was a thing you said. The grin stayed on his face a little too long, and then it didn't." }
      ] },
      { t: "Jihoon?", then: [
        { n: "It came out of her like a hiccup. She had no idea where it came from. It was just there, in her mouth, a name, and his face lit up so fast and so bright it was like watching a building's lights come on all at once." },
        { s: 'jihoon', f: 'happy', t: "YES. Jihoon. Ur Jihoon. Thank God, I thought you were doing a bit." },
        { s: 'solar', f: 'neutral', t: "I don't... I'm sorry. I don't know why I said that. I don't know you." },
        { n: "The lights went out again, one floor at a time." }
      ] }
    ] },
    { s: 'hanni', f: 'sad', t: "She doesn't remember. Us either. She doesn't remember anyone." },
    { s: 'jihoon', f: 'neutral', t: "...What?" },
    { s: 'jihoon', f: 'neutral', t: "Who are you? Sol, who are these people? Why are they... no. No, she knows me. She's known me since preschool. She's known me since before she could SPELL." },
    { n: "He was looking at Solar the whole time he said it. Waiting. And she could see the exact second it stopped being a bit to him. It wasn't when Hanni said it. It was a second later, when he looked at Solar's face for the joke, the one she always made with her eyes when she was making one with her mouth, and it wasn't there." },
    { n: "His face. She would remember his face." },
    { dark: false },
    { n: "The hour ended. The strip came back on all at once, noise and neon and a taxi honking at the four of them standing in the road, and Jihoon didn't move out of the way of it, and Akihiko took him by the arm, gently, and moved him." },
    { place: 'Iwatodai Dorm · Front', time: 'Night', music: 'tender', soft: true },
    { n: "He treated it as a bit for one whole day. Sunday. He followed her around the dorm saying things like ok but do you remember THIS, and naming a place, a song, a dog called Nana, a teacher, a time she'd thrown up on a ferris wheel, and every time she said no, sorry, he said ok very funny Sol, and moved on to the next one." },
    { n: "On Sunday evening he sat down on the dorm's front steps with the empty ice-cream tub between his feet, and didn't say anything for an hour." },
    { n: "Hyein told her later that for Jihoon, an hour of not saying anything was a medical event. Solar didn't know that. She only knew that she had stood at the window of the lounge for the whole hour, watching the back of his head, and hadn't been able to make herself go out, and hadn't been able to make herself walk away either." }
  ] },

  { id: 'a4-lamppost', date: '9/26', slot: 'late', title: 'in the frame', place: 'Iwatodai · Riverside', time: 'The Dark Hour', scene: [
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
        { s: 'minji', f: 'sad', t: "I didn't ask this time. I thought I'd never get to ask you anything again." }
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
    { n: "They walked back to the dorm together. Minji didn't ask a single question on the way. She didn't ask Solar to remember anything. She walked half a step behind and to the side, the way you walk behind someone when you're watching how the light falls on them, and every so often Solar felt it, the being looked at, and found, to her own surprise, that she didn't mind it at all." }
  ] }
);
