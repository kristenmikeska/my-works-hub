/* Secrets: runners3. Format in femc-social.js above secrets().
   More Runners crossover (Kat's novel: Solar Lee at Syracuse). This Solar keeps stepping half into the other one's life,
   and the people there half-recognize her. Builds on runners.js (the girls' wrong-number chat, Jaehyun, Minji, the
   invitational) and runners2.js (Mark). Nothing here moves Runners' plot; everything echoes published chapters.
   - Moments: a girl with a camera under a flickering lamp (9/12), first big snow on both sides of the world (1/27,
     a Haechan cameo if he's been met), and a runner on the river path who reads the field like a quarterback (1/28).
   - Places: a party through the lounge wall (Halloween, 10/31–11/1), two girls at the shop windows who are sure
     you're late (Sundays 9/27, 10/11, 1/24, 1/31), and a login screen at Game Panic (Saturdays 11/28, 12/12, 1/23, 1/30).
     Those two places and the 1/28 moment take either time of day, so a save parked on the last evening still gets them.
   - Texts, all on NEW threads so nothing here can wipe a pending reply on rn-gc, rn-bro, rn-minji or rn-mark:
     the Alpha Phi chapter chat (game day 10/3; a January roll call any time after 1/19), Minji on Instagram after
     the lamp (after 12/1), and an SUanon post that finds its way to the wrong phone (after the shop windows).
   Stamps rn-authenticity, rn-its-winter, rn-destiny and rn-solsystem come from the merge file (group 'Crossovers'). */
FemcSocial.secrets({
  id: 'runners3',
  cast: {
    'rnp-minji': 'Minji', 'rnp-jaehyun': 'Jaehyun', 'rnp-hanni': 'Hanni', 'rnp-hyein': 'Hyein',
    'rn3-jeno': 'Boy at the Door',
    'rnv-olivia': 'Olivia', 'rnv-chenle': 'Chenle', 'rnv-doyoung': 'Doyoung', 'rnv-haerin': 'Haerin',
    'rn3-chungha': '@chungha', 'rn3-heejin': '@heejin', 'rn3-yerim': '@yerim', 'rn3-olivia': '@olivia',
    'rn3-danielle': '@danielle', 'rn3-solar': '@solar', 'rn3-minji': '@minjibear', 'rn3-anon': 'SUanon',
    junpei: 'Junpei', yukari: 'Yukari'
  },
  threads: {
    'rn3-aphi': { name: 'ΑΦ chapter 🩷', members: ['rn3-chungha', 'rn3-heejin', 'rn3-yerim', 'rn3-olivia', 'rn3-danielle', 'rn-hanni', 'rn-hyein', 'rn3-solar'] },
    'rn3-ig': { name: '@minjibear', members: ['rn3-minji'] },
    'rn3-suanon': { name: '@SUanon', members: ['rn3-anon'] }
  },
  texts: [
    /* ── The chapter chat, 1: game day. Hanni adds the wrong number again, and nobody in an 85-person chat notices ── */
    { id: 'rn3-aphi-1', thread: 'rn3-aphi', date: '10/3', window: 3, slot: 1, msgs: [
      { sys: 'hanni added you to "ΑΦ chapter 🩷"' },
      { sys: '85 members' },
      { from: 'rn3-chungha', t: "GOOD MORNING LADIES 🧡 game day reminders" },
      { from: 'rn3-chungha', t: "if ur going, orange or white ONLY. we are being photographed" },
      { from: 'rn-hyein', t: "can it be pink" },
      { from: 'rn3-chungha', t: "orange or white hyein" },
      { from: 'rn-hyein', t: "pink is orange if u squint" },
      { from: 'rn3-heejin', t: "attendance counts toward points btw" },
      { from: 'rn3-olivia', t: "LETS GOOOOOOO" },
      { from: 'rn3-olivia', t: "sorry caps" },
      { from: 'rn3-olivia', t: "NOT SORRY. LETS GO ORANGE" },
      { from: 'rn3-yerim', t: "is jaehyun starting today??" },
      { from: 'rn3-heejin', t: "yerim he's the quarterback" },
      { from: 'rn3-yerim', t: "oh right!! yay!!" },
      { from: 'rn3-danielle', t: "He always starts." },
      { from: 'rn-hanni', t: "ok also i think i added someone wrong?? the number at the very bottom" },
      { from: 'rn-hanni', t: "sorry!! ignore!!" },
      { from: 'rn3-chungha', t: "dont worry about it, nobody reads this chat anyway" },
      { from: 'rn3-olivia', t: "I READ IT" }
    ] },

    /* ── 2: back from winter break. Danielle has a spreadsheet, and the spreadsheet has one number too many ── */
    { id: 'rn3-aphi-2', thread: 'rn3-aphi', slot: 1, unlock: { after: '1/19' }, msgs: [
      { sys: 'ΑΦ chapter 🩷 · 2,114 unread messages' },
      { from: 'rn3-chungha', t: "welcome back ladies 🤍 first chapter meeting of the semester is SUNDAY 7pm" },
      { from: 'rn3-chungha', t: "dues are due. danielle has the details" },
      { from: 'rn3-danielle', t: "Dues are due Friday. Venmo only. I'll know if you haven't." },
      { from: 'rn3-olivia', t: "ok scary" },
      { from: 'rn-hyein', t: "she means she has a spreadsheet" },
      { from: 'rn3-danielle', t: "I do have a spreadsheet." },
      { from: 'rn3-danielle', t: "Which is how I noticed there are 85 numbers in this chat. There are 84 of us." },
      { from: 'rn3-yerim', t: "omg is it a ghost" },
      { from: 'rn3-danielle', t: "Hanni added it in October. It's one digit off from Solar's." },
      { from: 'rn3-danielle', t: "I'd know." },
      { from: 'rn-hanni', t: "ok thats a friend!!! shes nice!!! she doesnt read anything" },
      { from: 'rn3-danielle', t: "Everyone reads everything, Hanni." },
      { from: 'rn-hyein', t: "danielle leave her alone shes from far away" },
      { from: 'rn3-danielle', t: "How far?" },
      { from: 'rn3-solar', t: "danielle." },
      { from: 'rn3-danielle', t: "Of course." },
      { ask: [
        { t: "Hi, Solar.", then: [
          { from: 'rn3-solar', t: "hi" },
          { from: 'rn3-solar', t: "nice capitals" },
          { from: 'rn-hyein', t: "OMG THEYRE TALKING" },
          { from: 'rn-hanni', t: "this is the best day of my life!!!" },
          { from: 'rn3-chungha', t: "ladies this is the CHAPTER chat" },
          { from: 'rn3-olivia', t: "I READ IT" }
        ] },
        { t: "Hello, Danielle.", then: [
          { from: 'rn3-danielle', t: "You capitalize. She doesn't." },
          { from: 'rn3-danielle', t: "Interesting." },
          { from: 'rn3-solar', t: "danielle." },
          { from: 'rn3-chungha', t: "ok!! chapter meeting sunday!! 7pm!! byeee 🤍" }
        ] },
        { t: "(Mute the chat.)", then: [
          { sys: 'ΑΦ chapter 🩷 muted for 1 year' }
        ] }
      ] }
    ] },

    /* ── Minji, on Instagram, once she's found a clip on her card she doesn't remember shooting ── */
    { id: 'rn3-minji-ig', thread: 'rn3-ig', slot: 1, unlock: { seen: ['rn3-muse'], after: '12/1' }, msgs: [
      { sys: 'minjibear wants to send you a message' },
      { from: 'rn3-minji', t: "ok this is going to sound insane" },
      { from: 'rn3-minji', t: "i was clearing my sd card and theres a clip on it i dont remember shooting" },
      { from: 'rn3-minji', t: "15 seconds. a girl under a lamp. a river behind her. not our river. we dont have a river like that" },
      { from: 'rn3-minji', t: "the metadata says 2009" },
      { from: 'rn3-minji', t: "i was two" },
      { from: 'rn3-minji', t: "she looks exactly like my friend. like EXACTLY. except shes looking at the camera like nobody ever pointed one at her before" },
      { from: 'rn3-minji', t: "so. is this u" },
      { ask: [
        { t: "It's me. You asked first.", then: [
          { from: 'rn3-minji', t: "..." },
          { from: 'rn3-minji', t: "i did?" },
          { from: 'rn3-minji', t: "ok that tracks. i always ask" },
          { from: 'rn3-minji', t: "even in clips i dont remember apparently" }
        ] },
        { t: "Who's your friend?", then: [
          { from: 'rn3-minji', t: "sol. solar. she plays support and stands under lamps like they owe her money" },
          { from: 'rn3-minji', t: "u would like her. or u would be her. im not sure which yet" }
        ] },
        { t: "(Send a photo of the lamp.)", then: [
          { sys: 'Photo' },
          { from: 'rn3-minji', t: "..." },
          { from: 'rn3-minji', t: "thats the lamp" },
          { from: 'rn3-minji', t: "thats THE lamp. it even flickers in a photo how is it flickering in a photo" },
          { from: 'rn3-minji', t: "ok im not sleeping tonight" }
        ] }
      ] },
      { from: 'rn3-minji', t: "hanni says theres another solar. a wrong number. i told her thats not how numbers work" },
      { from: 'rn3-minji', t: "im starting to think its how numbers work" },
      { from: 'rn3-minji', t: "anyway i watched it like forty times. its the best thing ive ever shot and i didnt shoot it" },
      { from: 'rn3-minji', t: "which is so annoying" },
      { ask: [
        { t: "Show her.", then: [
          { from: 'rn3-minji', t: "no" },
          { from: 'rn3-minji', t: "not yet" },
          { from: 'rn3-minji', t: "she'd say she looks like shes starring in a sad movie. she always says that" },
          { from: 'rn3-minji', t: "she never gets that its the opposite" }
        ] },
        { t: "What's the project about?", then: [
          { from: 'rn3-minji', t: "authenticity" },
          { from: 'rn3-minji', t: "i still dont really know what that means" },
          { from: 'rn3-minji', t: "i think its about her" },
          { from: 'rn3-minji', t: "dont tell anyone i said that. ur from 2009 who would u even tell" }
        ] },
        { t: "Keep it.", then: [
          { from: 'rn3-minji', t: "obviously" },
          { from: 'rn3-minji', t: "its going in the folder" },
          { from: 'rn3-minji', t: "theres a folder. dont ask about the folder" }
        ] }
      ] },
      { from: 'rn3-minji', t: "ok. goodnight lamp girl 🌸" }
    ] },

    /* ── SUanon, the evening after the shop windows. Somebody saw Solar Lee being polite ── */
    { id: 'rn3-suanon', thread: 'rn3-suanon', slot: 1, unlock: { seen: ['rn3-destiny'] }, msgs: [
      { sys: 'SUanon · Suggested for you' },
      { from: 'rn3-anon', t: "anon says: solar lee spotted at destiny usa being POLITE. to STRANGERS. she said excuse me to a mannequin. is she ok" },
      { from: 'rn3-anon', t: "anon says: she was literally at the lab at that exact time, i was there?? so who were hanni and hyein shopping with" },
      { from: 'rn3-anon', t: "anon says: evil twin arc. finally some good content" },
      { from: 'rn3-anon', t: "anon says: she held a monster like she'd never seen one before. thats not our girl. our girl drinks those like water" },
      { ask: [
        { t: "(Like the post.)", then: [
          { sys: 'Liked' },
          { from: 'rn3-anon', t: "anon says: someone with a weird number just liked the evil twin post??? which one of u is in a different country" }
        ] },
        { t: "(Report the post.)", then: [
          { sys: 'Thanks for letting us know. This post does not go against our guidelines.' }
        ] },
        { t: "(Close the app.)", then: [
          { sys: 'Notifications from SUanon turned off' }
        ] }
      ] }
    ] }
  ],

  moments: [
    /* A girl filming a flickering lamp. Solar walks into the shot, and the girl knows exactly how she stands. */
    { id: 'rn3-muse', date: '9/12', slot: 1, label: 'A girl with a camera', title: 'authenticity', place: 'Iwatodai · Riverside', music: 'mystery', stamp: 'rn-authenticity', scene: [
      { n: "The streetlamp at the bottom of the river path had been flickering since the day she moved to Iwatodai, a tired, stuttering amber nobody from the city had ever come to fix, and Solar had picked up the habit of stopping under it on the way home without ever deciding to, the way some people touch a doorframe for luck." },
      { n: "Tonight it was doing its worst, on and off and on again, throwing her shadow out across the path and taking it back, and she was standing in it with her bag on one shoulder and her head tipped back, looking at nothing, at the moths, at the dark coming down over the water, when she heard the small mechanical whir of somebody zooming in." },
      { n: "There was a girl on the bench by the railing. Long dark hair, soft wispy bangs, a cap turned backwards, a navy sweatshirt with the sleeves pulled down over her hands, and an old camera held up to her face, the kind with a real lens that turned. She'd been filming the lamp, Solar realized. Solar had walked straight into somebody's shot." },
      { s: 'rnp-minji', f: 'neutral', t: "Sol, you're in my— no. Actually, don't move. Stay there." },
      { n: "She said it without lowering the camera, easy and automatic, the way you'd say it to someone you'd said it to a hundred times. Solar didn't move. The lamp stuttered. Somewhere across the water a train went by, all lit up and empty." },
      { n: "Then the girl lowered the camera and actually looked at her, and her face did something small and complicated, a stall, like a film catching in the gate." },
      { s: 'rnp-minji', f: 'flustered', t: "...Sorry. Sorry, that's so creepy, I know. I thought you were someone." },
      { choose: [
        { t: "Who?", then: [
          { s: 'rnp-minji', f: 'neutral', t: "My support. My... friend. She stands under lamps like that, like they're hers and she's letting the rest of us borrow them." },
          { s: 'rnp-minji', f: 'serious', t: "But she wouldn't be here. She'd be at practice. She's always at practice." }
        ] },
        { t: "You should ask first.", then: [
          { s: 'rnp-minji', f: 'serious', t: "You're right. I always ask. I ask, like, twenty times, it's a whole thing with me, people make fun of me for it." },
          { n: "She looked down at the camera in her lap like it had done something without her permission." },
          { s: 'rnp-minji', f: 'sad', t: "I didn't this time. I thought I already had permission. That's never happened to me before." }
        ] },
        { t: "(Stay in the light a little longer.)", then: [
          { n: "Solar stayed where she was. After a second the girl lifted the camera again, slower this time, a question instead of a habit, and Solar let the question answer itself. For once in its life the lamp held steady, like it knew." }
        ] }
      ] },
      { n: "She turned the little screen around so Solar could see. Fifteen seconds, no music, just the river turned up loud and the hum of the lamp, and Solar standing in the amber looking up at the sky, mouth parted like she was in the middle of saying something ridiculous to someone who wasn't there. She didn't look like herself. Or she looked exactly like herself, and had just never been caught at it." },
      { s: 'solar', f: 'neutral', t: "I look like I'm starring in a sad movie." },
      { n: "The girl went very still." },
      { s: 'rnp-minji', f: 'surprised', t: "...That's exactly what she said." },
      { s: 'rnp-minji', f: 'happy', t: "Then you must not know yourself." },
      { n: "She said it like a line she'd said before and been proud of, and then seemed to hear it twice, once now and once somewhere else, and shook her head at herself and laughed, quietly, at the camera." },
      { s: 'rnp-minji', f: 'neutral', t: "I'm Minji, by the way. Should've led with that before the creep part." },
      { s: 'solar', f: 'neutral', t: "Solar." },
      { s: 'rnp-minji', f: 'surprised', t: "Okay. Now you're messing with me. Did Hyein put you up to this?" },
      { choose: [
        { t: "My parents had high hopes.", then: [
          { s: 'rnp-minji', f: 'happy', t: "Yeah. I bet they did." },
          { n: "She said it like she already knew something about it, which was impossible, and like she was sorry about it, which was more impossible still." }
        ] },
        { t: "Is it that strange a name?", then: [
          { s: 'rnp-minji', f: 'neutral', t: "It's not strange. It's just unfair. You can't be named that and stand under a lamp like that. Nobody would believe it." },
          { s: 'rnp-minji', f: 'flustered', t: "I mean that as a compliment. Mostly. It's a good name to point a camera at." }
        ] }
      ] },
      { s: 'rnp-minji', f: 'neutral', t: "It's for a project. Or it will be. I don't have the project yet, I just have the word." },
      { s: 'solar', f: 'neutral', t: "What's the word?" },
      { s: 'rnp-minji', f: 'serious', t: "Authenticity. Which is funny, because I've never once caught it on purpose. Only ever by accident." },
      { n: "She said the last part to the camera, not to Solar, and turned it over in her hands, and didn't add like now, though it was sitting right there in the air between them." },
      { n: "Her phone buzzed in the sweatshirt pocket. She checked it and her whole face changed, the slump going out of her shoulders, a smile she was clearly fighting and losing to." },
      { s: 'rnp-minji', f: 'happy', t: "She says she's at the lab. Obviously she's at the lab." },
      { n: "Then she looked up at Solar for a long second, at the lamp, at Solar again, and Solar watched her decide something." },
      { s: 'rnp-minji', f: 'neutral', t: "Can I keep it? The clip. I'm asking. Properly, this time." },
      { choose: [
        { t: "Keep it.", then: [
          { s: 'rnp-minji', f: 'happy', t: "Thank you. Seriously." }
        ] },
        { t: "Only if you don't post it.", then: [
          { s: 'rnp-minji', f: 'serious', t: "I never post without asking. Not one frame. Ever." },
          { n: "She said it like a vow she'd made to someone else first, a long time ago or very recently, Solar couldn't tell which." }
        ] }
      ] },
      { n: "She slung the strap around her neck and walked backward up the path a few steps, the way people do when they don't want to turn their back on something yet. Then the lamp went out, all the way, a whole second of real dark for the first time Solar could remember, and when it stuttered back on the path was empty in both directions and the bench was only a bench." },
      { n: "Halfway home it occurred to her that the girl had looked at her the way you look at someone you've waited a long time to see, and also like a stranger, both at once, and that she had no idea which of those had been the accident." }
    ] },

    /* The first big snow of the winter, in Iwatodai and in Syracuse, the same night. Haechan, if he's been met. */
    { id: 'rn3-first-snow', date: '1/27', slot: 1, label: 'Snow', title: 'snow day', place: 'Iwatodai Dorm · Rooftop', music: 'night', scene: [
      { n: "It started a little after nine, properly this time, not the thin uncertain stuff that had come and gone over the holidays but big, slow, deliberate flakes that came down out of the orange city sky one at a time, as if each of them had been considered first, and by ten the rooftop railing had a white edge on it as thick as a finger." },
      { n: "Solar had come up because the lounge was too warm and too loud, Junpei and Yukari arguing over the remote with the specific commitment of two people who didn't care what was on, and the roof was the only place in the building that was quiet. Snow made everything quiet. It was the thing she liked best about it. The whole city sounded like it was holding its breath." },
      { n: "Her phone buzzed in her coat pocket. Then again. Then a lot." },
      { phone: [
        { from: '@hyein', t: "OTHER SOLAR" },
        { from: '@hyein', t: "SNOW DAY" },
        { from: '@hyein', t: "they cancelled classes. the lake did a THING overnight. theres like two feet" },
        { from: '@hanni', t: "our solar is still asleep!! she doesnt know yet!!" },
        { from: '@hyein', t: "we are making her pancakes as a surprise. hanni is making them. i am supervising" },
        { from: '@hanni', t: "wait is it snowing there too?? i have a feeling" },
        { from: 'solar', t: "It is. It started an hour ago." },
        { from: '@hyein', t: "SAME NIGHT" },
        { from: '@hyein', t: "ok thats so romantic im gonna be sick" },
        { from: '@hanni', t: "make a wish!!! first big snow you have to make a wish" }
      ], contact: 'hanni, hyein · 7:04 AM', me: 'other solar' },
      { n: "She didn't know if that was a real rule or a Hanni rule. From the little she knew of Hanni, she suspected there wasn't a difference." },
      { choose: [
        { t: "(Make a wish.)", then: [
          { n: "She closed her eyes and made one, and didn't let herself hear what it was, which was the only way she'd ever known how to keep one." }
        ] },
        { t: "(Catch one on your sleeve.)", then: [
          { n: "One landed on the dark wool of her sleeve and sat there whole, six arms and perfectly itself, for about a second, and then it was water, and she thought that was probably the point." }
        ] }
      ] },
      { ifRank: { haechan: 1 }, then: [
        { n: "The rooftop door opened behind her with its long rusted complaint, and she didn't turn around, because she knew the footsteps, the particular unhurried weight of them, a person who had never once in his life hurried toward something he wanted to look like he didn't want." },
        { s: 'haechan', f: 'neutral', t: "It's snowing." },
        { s: 'solar', f: 'neutral', t: "I can see that." },
        { s: 'haechan', f: 'neutral', t: "Just checking. You looked like you were waiting for it to stop." },
        { n: "He came and stood beside her at the railing, not touching, an inch of cold air between their shoulders that felt like a decision, and pulled his headphones down around his neck, and then, after a moment, reached into his pocket and switched them off." },
        { s: 'haechan', f: 'serious', t: "Listen." },
        { choose: [
          { t: "I don't hear anything.", then: [
            { s: 'haechan', f: 'neutral', t: "Yeah. Snow eats the high end. Kills the reflections. Every room in the city goes dead for a night." },
            { n: "He let that sit for a second, the snow coming down on it, and then, because he always told you when he'd aimed something, he added, flat," },
            { s: 'haechan', f: 'serious', t: "Mine too." },
            { n: "He didn't explain it. He'd said exactly as much as he'd meant to, and she understood him perfectly and didn't say so, which was, she was learning, how you said it back." }
          ] },
          { t: "(Don't say anything.)", then: [
            { n: "So she didn't, and neither did he, and the snow came down on both of them with a sound like nothing at all, like a held note, and after a long time she felt him breathe out all the way, as if it was the first time since she'd known him." }
          ] }
        ] },
        { n: "Her phone buzzed once more in her pocket. She didn't look. He did, at her pocket, and then at her face." },
        { s: 'haechan', f: 'neutral', t: "Somebody misses you." },
        { s: 'haechan', f: 'neutral', t: "Tell them it's snowing here too." },
        { n: "She hadn't said anything about them. She hadn't said anything about here, either, or too. He'd already put his headphones back on, and was looking up into the snow with his face doing nothing at all, the way it did when something had landed." }
      ], else: [
        { n: "Nobody came up after her. That was fine. She stayed until her hair had gone white at the ends and her fingers had stopped arguing about it, and the city stayed quiet the whole time, like it was doing her a favor." }
      ] },
      { place: "Iwatodai Dorm · Solar's Room", time: 'Evening' },
      { n: "Later, in bed, she checked her phone. The last message in the chat was a photo that wouldn't load, just a gray square, and under it, from Hyein, she woke up and looked out the window and said oh like a little kid. then she said it's snowing somewhere else too. we didn't tell her anything. how did she know." },
      { n: "Solar didn't answer. She lay with the lights off and watched it come down past the window, in this city and, she was fairly sure, in one very far away, the same snow more or less, at the same time more or less, and fell asleep before she'd decided what that meant." }
    ] },

    /* Late January. A runner on the river path, reading a game of soccer like a defense. He looks at her like a brother. */
    { id: 'rn3-winter-field', date: '1/28', label: 'A runner on the river path', title: "it's winter", place: 'Iwatodai · Riverside', music: 'mystery', stamp: 'rn-its-winter', scene: [
      { n: "The riverbank in late January was the color of an old photograph, the grass gone straw-pale and stiff with frost, the water slow and pewter-gray and steaming a little where the drain came out under the bridge, and the light, at a quarter past four, was already giving up." },
      { n: "On the flat stretch of field below the embankment, a handful of middle-school boys were playing soccer with backpacks for goalposts and no referee and a level of argument that suggested the rules were still being written. Solar had stopped on the path above to watch for no reason except that it was nicer than going home to homework." },
      { n: "She noticed the man beside her the way you notice weather, all at once, already there." },
      { n: "He was broad through the shoulders in a way that made the railing look decorative, black hair cleanly parted even in the wind, a dark quarter-zip with a small orange block S on the chest, breathing like he'd run a long way and had stopped not because he was tired but because something had caught his attention. He was watching the boys. Not watching, exactly. Reading them." },
      { s: 'rnp-jaehyun', f: 'serious', t: "The keeper's cheating left." },
      { n: "He said it to no one, quietly, like a man reading a line item off a page. Down on the field the boy with the ball looked left, and the keeper went left, and the ball went right, between a backpack and a rolled-up jacket, and half the field screamed." },
      { s: 'rnp-jaehyun', f: 'neutral', t: "He's been doing it all game. He thinks if he guesses first, he's in charge." },
      { n: "Then he turned his head and saw her, and nothing in his face changed at all, which was somehow the most dramatic thing she'd seen all week." },
      { s: 'rnp-jaehyun', f: 'neutral', t: "Solar." },
      { n: "Not a question. He said her name like he was confirming an appointment, and his eyes went over her once, coat, skirt, school shoes, bare hands gone red at the knuckles from the railing, the way she imagined he looked across a field at people who were trying to hide something from him, already finished thinking." },
      { s: 'rnp-jaehyun', f: 'serious', t: "You're not wearing enough layers." },
      { choose: [
        { t: "I know. It's winter.", then: [
          { n: "His brows went up, very slightly, which on a face like that was practically a shout." },
          { s: 'rnp-jaehyun', f: 'surprised', t: "...Yes. It is." },
          { n: "He said it slowly, as if checking it against something, as if he'd come out expecting an argument and was now standing in the cold holding it with nowhere to put it down." },
          { s: 'rnp-jaehyun', f: 'neutral', t: "You're agreeing with me. Did you sleep?" }
        ] },
        { t: "I'm fine.", then: [
          { s: 'rnp-jaehyun', f: 'neutral', t: "Uhuh." },
          { n: "He set it to one side without contesting it, which she understood was not at all the same thing as believing it." }
        ] },
        { t: "Do I know you?", then: [
          { s: 'rnp-jaehyun', f: 'neutral', t: "Very funny." },
          { s: 'rnp-jaehyun', f: 'serious', t: "Don't be hostile, Solar. It's cold enough already." }
        ] }
      ] },
      { n: "He leaned his forearms on the railing beside her, careful about the first movement, his right shoulder rolling twice in the unconscious way a person checks on something he has no plans to mention." },
      { s: 'rnp-jaehyun', f: 'neutral', t: "Winter conditioning. Lifts at six, film after. This is the quiet part of the year. Nobody's watching." },
      { s: 'rnp-jaehyun', f: 'neutral', t: "I like it." },
      { choose: [
        { t: "What do you see? On the field.", then: [
          { s: 'rnp-jaehyun', f: 'serious', t: "The kid in red. Number nine." },
          { n: "There was no number on the boy in red. He'd assigned him one, the way he seemed to assign everything." },
          { s: 'rnp-jaehyun', f: 'serious', t: "He's the best one out there and he's passing too early. He doesn't trust anyone to get open, so he gets rid of it before he has to find out." },
          { s: 'rnp-jaehyun', f: 'neutral', t: "He'll figure it out. Or he won't, and he'll be very good at a game nobody else is playing." }
        ] },
        { t: "Is your shoulder okay?", then: [
          { s: 'rnp-jaehyun', f: 'neutral', t: "Fine." },
          { n: "It was the whole answer. She'd been handed enough whole answers in her life to know the shape of one, a door being closed politely, all the way, from the other side." },
          { s: 'rnp-jaehyun', f: 'serious', t: "It's January. Everything hurts in January. It's supposed to." }
        ] },
        { t: "(Watch the game with him.)", then: [
          { n: "So she did, and he did, and neither of them said anything for a long time, which felt, strangely, like the easiest conversation she'd had all month. Every time the keeper guessed, he breathed out through his nose. Every time the boy in red passed too early, his jaw moved." }
        ] }
      ] },
      { n: "A ball came loose off somebody's shin and bounced up the embankment, end over end through the frozen grass, and stopped at her feet." },
      { s: 'rnp-jaehyun', f: 'neutral', t: "Go on." },
      { choose: [
        { t: "(Kick it back.)", then: [
          { n: "She kicked it, and it went more or less where she meant it to, which was more than she'd expected, and one of the boys yelled thank you in a voice that cracked clean in half." },
          { s: 'rnp-jaehyun', f: 'neutral', t: "Plant foot was late." },
          { s: 'rnp-jaehyun', f: 'happy', t: "...It went where you wanted, though." }
        ] },
        { t: "(Throw it back.)", then: [
          { n: "She threw it overhand, badly. It wobbled the whole way down like it was embarrassed for both of them." },
          { s: 'rnp-jaehyun', f: 'serious', t: "Your elbow's low." },
          { n: "He reached over and moved it, two fingers on the back of her arm, an inch higher, the most impersonal correction in the world, and it was so exactly the way an older brother would do it that something in her chest went tight and stupid." },
          { s: 'rnp-jaehyun', f: 'neutral', t: "There. Next time." }
        ] }
      ] },
      { n: "The light went orange, then gray. He checked his watch, and she watched him decide something, the whole process taking about four seconds, the way she imagined everything took him four seconds." },
      { n: "He pulled off his gloves. Thick black running gloves, warm all the way through, with the same small orange S on the cuff, and held them out, and didn't say anything, and didn't lower his hand until she took them." },
      { s: 'rnp-jaehyun', f: 'neutral', t: "I have four more miles. I'll be warm. You won't." },
      { choose: [
        { t: "Thanks, Jae.", then: [
          { n: "The name came out of her short and worn-in, like it had been rubbed smooth by years of use. She had never said it before in her life." },
          { n: "He looked at her a beat longer than the sentence deserved." },
          { s: 'rnp-jaehyun', f: 'neutral', t: "Mm. Call if you need anything." },
          { s: 'rnp-jaehyun', f: 'neutral', t: "You won't. But the offer stands." }
        ] },
        { t: "You don't even know me.", then: [
          { s: 'rnp-jaehyun', f: 'serious', t: "I know you didn't bring gloves." },
          { n: "It wasn't an answer to what she'd said. It was an answer to what she'd meant, and he'd arrived at it without asking her, and was already turning to go before she could tell him whether he was right." }
        ] }
      ] },
      { n: "He went off down the river path at a pace that would have been a sprint for anyone else, and she watched until the dusk had him, and then a while after, the way you watch a train you were never getting on." },
      { n: "The gloves were too big. Her fingers swam in them. Folded small inside the left one was a printed sheet with a table on it, times down one side and places down the other, lift and film and class and treatment and class, a whole week of someone else's life arranged in the order it would happen in, and at the bottom, in neat, impatient pen, read it this time. J." },
      { n: "She wasn't his sister. She knew that the way you know which way is down. She wore the gloves home anyway, and when Junpei asked where she'd gotten them she said my brother, and then stood in the lounge with her coat half off for a long moment, wondering why that had been so easy to say." }
    ] }
  ],

  places: [
    /* Halloween. Bass through a wall the dorm doesn't share with anything, and a party that's been going on all night somewhere else. */
    { id: 'rn3-next-door', area: 'Iwatodai Dorm', title: 'A party next door', label: 'A party next door', dates: ['10/31', '11/1'], slot: 1,
      hint: "There's bass coming through the lounge wall. The dorm doesn't share a wall with anything.",
      place: 'Iwatodai Dorm · Lounge', music: 'mystery', scene: [
      { n: "Junpei had decided at around four in the afternoon that the dorm was doing Halloween, which in practice meant a bowl of convenience-store candy on the lounge table, a paper bat taped crooked over the TV, and Junpei himself in a Superman costume from the discount shop on the strip, the cape a size too short and the S already peeling up at one corner." },
      { s: 'junpei', f: 'happy', t: "Trick or treat! Wait. I'm supposed to say that to you guys. Hold on, let me go back outside and knock." },
      { s: 'yukari', f: 'neutral', t: "Please don't." },
      { n: "Then the bass started." },
      { n: "It came through the wall behind the sofa, low and heavy, the kind you feel in your back teeth before you hear it, a song she didn't know thudding through brick that, as far as she knew, had nothing on the other side of it but a parking lot and a vending machine." },
      { s: 'yukari', f: 'surprised', t: "Are the neighbors having a party? We don't have neighbors." },
      { s: 'junpei', f: 'surprised', t: "Dude. That's coming from the hallway." },
      { n: "It was. The hallway past the kitchen, the one that went to the laundry room and the back stairs and nowhere else, was longer than it had been that morning. There were more doors in it. Somebody had propped the last one open with a red plastic cup." },
      { choose: [
        { t: "(Go and look.)", then: [] },
        { t: "(Send Junpei first.)", then: [
          { s: 'junpei', f: 'flustered', t: "Superman doesn't go first! Superman shows up at the end, when everybody's already in trouble! That's the whole guy!" },
          { n: "She went first." }
        ] }
      ] },
      { place: 'Iwatodai Dorm · Hallway', time: 'Evening' },
      { n: "The hallway smelled like spilled sugar and fog machine and about forty different colognes having an argument. Fake cobwebs sagged from the light fixtures. The doors had Greek letters on them in peeling gold, the same three letters over and over, and from somewhere ahead came the roar of a great many people having the best night of their lives at the top of their lungs." },
      { n: "There was a boy at the door at the end of it, broad and grinning, in a black T-shirt and a set of plastic vampire fangs he kept having to push back in with his thumb, holding a clipboard with nothing written on it." },
      { s: 'rn3-jeno', t: "Name?" },
      { choose: [
        { t: "Solar.", then: [
          { s: 'rn3-jeno', t: "Lee? Oh, you're on every list." },
          { n: "He said it like it was the funniest thing in the world and also a little bit like a warning, and stood aside with a bow so deep his fangs fell out." }
        ] },
        { t: "I live here.", then: [
          { s: 'rn3-jeno', t: "Everybody says that." },
          { n: "Then he actually looked at her, and the grin slipped half an inch." },
          { s: 'rn3-jeno', t: "Oh. Oh, it's you. Go ahead, go ahead. He'll kill me." },
          { n: "He didn't say who he was. She had the strangest feeling she knew anyway, and that he was very far away tonight, and that the whole house was behaving like it." }
        ] }
      ] },
      { n: "The room past him was every party she'd ever imagined and none she'd ever been to. Furniture shoved to the walls, a hundred people in costumes, orange lights strung across the ceiling, a tall girl in fairy wings at a microphone explaining to the whole room that she worked very hard on these costumes and would be taking commissions, so long as you paid the appropriate price." },
      { n: "Somebody put a red cup in Solar's hand. The drink in it was pink, the pink of a highlighter, and it smelled like candy and a decision someone would regret by Tuesday." },
      { s: 'rn3-jeno', t: "Careful with that. I made it. Somebody said it counts as attempted murder, which, rude." },
      { choose: [
        { t: "(Put it down somewhere safe.)", then: [
          { n: "She set it on a bookshelf between a lava lamp and a dusty trophy, where it could go on being dangerous without her." }
        ] },
        { t: "(Smell it again.)", then: [
          { n: "Her eyes watered. Somewhere in the building, a smoke alarm considered its options." }
        ] }
      ] },
      { n: "On a little stage made of two coffee tables pushed together, somebody was standing inside a big purple frame cut out of cardboard, the kind people pose in for fake photos, with a sheet of paper taped crookedly across the top. SUnews, it said. He swung it around and pointed it straight at her, and pretended to click, and called out in a high, cheerful voice, early night, isn't it?" },
      { n: "Everyone around him laughed. It was a joke. She didn't know why her whole body had gone cold and still, why her hand had tightened on nothing, why for one long second the room had seemed to be made entirely of eyes and every one of them was on her. She didn't know anybody here. Somebody in her knew all of them." },
      { n: "Across the room a girl with long warm-brown hair and a cream blazer over her costume was leaning against the wall, holding a drink she hadn't touched, her phone in her other hand like she was prepared in case she needed it. She wasn't watching the boy in the frame. She was watching Solar." },
      { choose: [
        { t: "(Hold her gaze.)", then: [
          { n: "Solar held it. She'd been looked at by worse things than a pretty girl at a party, things with masks for faces, at midnight, in green light. The girl's expression didn't move at all, which was somehow worse than if it had." }
        ] },
        { t: "(Look away first.)", then: [
          { n: "She looked away first. She hated that she did. She'd have bet money, money she didn't have, that the other Solar always looked away first too, and hated it just as much." }
        ] }
      ] },
      { n: "Then the girl smiled, and looked away like it was nothing." },
      { n: "Solar left the way she'd come, past the boy with the clipboard, who saluted her with it, down the long wrong hallway. On the rail at the foot of a staircase she didn't remember passing on the way in, someone had left a pair of small red devil horns, the cheap plastic kind, set down neatly, the way you'd put them down on your way downstairs to look for somebody." },
      { n: "She didn't touch them. She thought about it." },
      { place: 'Iwatodai Dorm · Lounge', time: 'Evening' },
      { n: "The hallway was the hallway. The lounge was the lounge. Junpei was asleep sitting up on the sofa with his cape over his face, and the bass had stopped, and the paper bat had fallen off the TV." },
      { s: 'yukari', f: 'serious', t: "Where'd you go? You smell like a cherry cough drop that got into a fight." },
      { n: "The clock on the wall said she'd been gone four minutes. The soles of her shoes said otherwise. They stuck to the lounge floor with every step, pink and sugary, all the way up the stairs to bed." }
    ] },

    /* Two girls at the shop windows who are very sure Solar is late, and being weird. */
    { id: 'rn3-destiny', area: 'Paulownia Mall', title: 'Two girls at the shop windows', label: 'A strange Sunday', dates: ['9/27', '10/11', '1/24', '1/31'],
      hint: "Two girls are arguing over a jacket in the window of a shop you don't remember being there. One of them just waved at you like you're late.",
      place: 'Paulownia Mall · Shop Windows', music: 'city', stamp: 'rn-destiny', scene: [
      { n: "The shop was new, or new to her, wedged between the bookstore and the kiosk that sold phone charms, with a hand-lettered sign in the window that said ORANGE & BLUE CONSIGNMENT and a mannequin in a coat that cost more than her uniform. Paulownia Mall was the same temperature every month of the year, which was the whole point of a mall, and in that temperature two girls were standing in front of the window having what sounded like a custody dispute over a jacket." },
      { n: "The tall one had very long, very straight dark hair parted dead in the middle and was holding the jacket up by its shoulders like evidence. The smaller one had curtain bangs and a cream cardigan and the soft, open face of someone who would agree with whoever looked sadder." },
      { s: 'rnp-hyein', f: 'happy', t: "SOLAR. Oh my God, perfect, come here, I need a body." },
      { n: "Solar looked behind her. There was nobody behind her but a man walking a very small dog, who looked back at her with the dog, in solidarity." },
      { s: 'rnp-hanni', f: 'happy', t: "Sol! We thought you were doing VOD review all day!" },
      { choose: [
        { t: "I think you have the wrong person.", then: [
          { s: 'rnp-hyein', f: 'neutral', t: "Lol. How many Solars do you think there are?" },
          { s: 'rnp-hanni', f: 'happy', t: "There's only one Solar!" },
          { n: "They said it almost in unison, the way people say a thing they've said before, and it was not, she noticed, a thing anybody had ever said about her." }
        ] },
        { t: "Am I?", then: [
          { s: 'rnp-hanni', f: 'surprised', t: "...Are you?" },
          { s: 'rnp-hyein', f: 'serious', t: "She's being weird. Hanni. She's being weird again." }
        ] },
        { t: "(Go over. Apparently you're a body now.)", then: [
          { n: "The tall one had the jacket on her shoulders before she'd finished walking, tugging at the hem, frowning at the sleeves with her whole face, a pin held in the corner of her mouth that Solar had not seen her take out of anywhere." }
        ] }
      ] },
      { s: 'rnp-hyein', f: 'serious', t: "Okay. So this is either giving, or it's not giving, and I can't tell on a hanger. Things lie on hangers." },
      { n: "The jacket was cropped and structured, dark wool, and Hyein turned her by the shoulders toward the glass so she could see. In the reflection Solar was wearing someone else's jacket, standing between two girls she'd never met who were holding onto her like they'd been doing it for months." },
      { choose: [
        { t: "It's giving.", then: [
          { s: 'rnp-hyein', f: 'surprised', t: "...Since when do you say giving?" },
          { s: 'rnp-hyein', f: 'happy', t: "No, I love it, I'm so proud of you. Hanni, she's learning." }
        ] },
        { t: "The sleeves are too long.", then: [
          { s: 'rnp-hyein', f: 'happy', t: "Thank you. THANK you. Finally somebody in this friend group has eyes." },
          { n: "She pinned them on the spot, two neat tucks, without asking, and stepped back with her head on one side, and something passed over her face that was not about sleeves at all." }
        ] },
        { t: "I don't usually wear things like this.", then: [
          { s: 'rnp-hanni', f: 'neutral', t: "You wear things like this every day, Sol." },
          { s: 'rnp-hanni', f: 'sad', t: "...Don't you?" }
        ] }
      ] },
      { n: "Hanni was rummaging in a shopping bag. She came up with a can, pink and black and sweating, and held it out with the total confidence of someone handing a person their own name." },
      { s: 'rnp-hanni', f: 'happy', t: "We got you one. Pink Punch, obviously." },
      { choose: [
        { t: "(Take it.)", then: [
          { n: "She took it. It was cold enough to hurt. She'd never seen one in her life, and her hand knew exactly how to hold it, thumb already resting on the tab, the way your hand knows the light switch in a house you grew up in." },
          { n: "She didn't open it. Hanni watched her not open it, and said nothing, and kept smiling, which was its own sentence." }
        ] },
        { t: "Do they have peach?", then: [
          { s: 'rnp-hyein', f: 'surprised', t: "PEACH?" },
          { s: 'rnp-hyein', f: 'serious', t: "Since WHEN?" },
          { s: 'rnp-hanni', f: 'neutral', t: "Hyein, people are allowed to like peach." },
          { s: 'rnp-hyein', f: 'serious', t: "Not HER." }
        ] },
        { t: "I don't really drink energy drinks.", then: [
          { s: 'rnp-hyein', f: 'surprised', t: "Okay, now I KNOW something's wrong." },
          { s: 'rnp-hanni', f: 'sad', t: "Did you finally sleep or something? You look... rested." }
        ] }
      ] },
      { s: 'rnp-hyein', f: 'happy', t: "She looks RESTED. Oh my God. Who are you and what have you done with her?" },
      { n: "Hyein said it the way you'd say it to anyone, and laughed, and then didn't quite, all the way." },
      { choose: [
        { t: "Tell me about her.", then: [
          { s: 'rnp-hyein', f: 'neutral', t: "About... you?" },
          { s: 'rnp-hanni', f: 'neutral', t: "She's okay. She works really hard. She never sleeps. She thinks nobody notices." },
          { s: 'rnp-hyein', f: 'serious', t: "We notice." },
          { n: "Hanni said it gently to the jacket, and Hyein said it less gently to the floor, and neither of them looked at Solar while they said it, which was how she knew they were talking about someone they loved." }
        ] },
        { t: "(Play along.)", then: [
          { n: "So she played along. She let them walk her the length of the shop windows, one on each arm, and nodded at a skirt, and vetoed a hat, and was told she was wrong about the hat, and laughed at something Hyein said about a boy named Jeno and a keg stand without knowing who Jeno was or why the keg, and it was the easiest twenty minutes she'd had in weeks." }
        ] }
      ] },
      { n: "Hyein's phone went off. Then Hanni's, half a second later, the same buzz, the same chat. Solar could see Hyein's screen over her shoulder." },
      { phone: [
        { from: '@solar', t: "where did u guys go" },
        { from: '@solar', t: "im outside the lab. u said 2" },
        { from: '@solar', t: "hello??" }
      ], contact: 'hyein’s phone · girls 🩷' },
      { n: "Hyein looked at the phone. Then she looked at Solar, standing right there in front of her in a jacket with pinned sleeves, holding a can of something pink she hadn't opened." },
      { s: 'rnp-hyein', f: 'surprised', t: "Okay. Who's texting me from your phone?" },
      { s: 'rnp-hanni', f: 'surprised', t: "Sol...?" },
      { choose: [
        { t: "I'm not her.", then: [
          { n: "Hanni's face changed, the way it did, visibly, all at once, the group's honest barometer, a girl who couldn't have hidden anything if she'd tried." },
          { s: 'rnp-hanni', f: 'sad', t: "...I know." },
          { s: 'rnp-hanni', f: 'happy', t: "I think I knew when you held the can like that. Like you were borrowing it." }
        ] },
        { t: "(Give the jacket back.)", then: [
          { n: "She shrugged out of it and held it out. Hyein didn't take it." },
          { s: 'rnp-hyein', f: 'neutral', t: "Keep it. The sleeves are pinned for you now. That's, like, binding." }
        ] }
      ] },
      { place: 'Paulownia Mall · Central Atrium' },
      { n: "A school group came through between them, thirty kids in matching yellow hats, a whole river of them, and by the time it had passed, the shop window was a phone-charm kiosk and a pulled-down shutter, and the fountain was doing its loud ordinary thing behind her, and she was standing on the tiles alone." },
      { n: "She was still holding the can. In her other hand, though she didn't remember being given it, was a receipt, long and curling, from a shop she'd never been in, at a mall called DESTINY USA. Someone had written across the back in fat round marker, sleeves pinned, wear w the black boots, and then underneath, smaller, ur welcome. ily. hy." },
      { n: "Destiny. She thought of a girl in some other October insisting that a name was predestined, and laughed out loud in the middle of the atrium, alone, which got her a look from the man with the very small dog." },
      { n: "She didn't open the Pink Punch. She kept it on her desk for a week, unopened, like something on loan, and every time she looked at it she thought about two girls arguing over a jacket for somebody they loved, and how for twenty minutes that somebody had been her." }
    ] },

    /* A login screen at the back of Game Panic, on a few Saturdays. Practice, with a team from the other side. */
    { id: 'rn3-solsystem', area: 'Paulownia Mall', title: 'A login screen', label: 'Saturday practice', dates: ['11/28', '12/12', '1/23', '1/30'],
      hint: "The PC in the back corner of Game Panic is on, with a username already typed in. It's yours. It isn't.",
      place: 'Paulownia Mall · Game Panic', music: 'city', stamp: 'rn-solsystem', scene: [
      { n: "Game Panic had a PC corner at the back, three machines behind a beaded curtain that nobody ever used, because the cabinets out front were louder and the PCs were always somehow sticky. Today the middle one was on. Not on, exactly. Waiting. A login screen glowing blue in the dim, a cursor blinking in the password field, and in the username field, already typed, in lowercase, solsystem." },
      { n: "It wasn't her username. She'd never had one. She sat down anyway, because the chair was already set to exactly her height, which was the kind of thing she'd stopped questioning sometime around April." },
      { choose: [
        { t: "(Type a password.)", then: [
          { n: "Her fingers did it without her, quick and certain, a rhythm her hands seemed to have practiced a thousand times in some other room at some other hour. It took." }
        ] },
        { t: "(Hover over Forgot password.)", then: [
          { n: "Before she could click it, the screen logged itself in, like it had gotten tired of waiting for her to remember." }
        ] }
      ] },
      { n: "A hero select screen. A roster of strange, bright people, and her cursor drifting, on its own or very nearly, past every one of them to a girl in a fox mask with a little bell at her throat. It locked in before she'd decided to. The rank icon in the corner was a deep, cut-glass purple, and the word under it said GRANDMASTER." },
      { n: "Someone was already talking in the headset." },
      { s: 'rnp-minji', f: 'neutral', t: "Sol, you're late. Doyoung's doing the clipboard face." },
      { s: 'rnv-olivia', t: "SOLAR LEE HAS ENTERED THE BUILDING!" },
      { s: 'rnv-chenle', t: "She hasn't entered the building. She's not in the lab. Her ping's..." },
      { s: 'rnv-chenle', t: "...Her ping is three hundred. Where are you?" },
      { s: 'rnv-doyoung', t: "Lee. Scrim starts in two. Warm up." },
      { choose: [
        { t: "(Play it the way it feels like you should.)", then: [
          { ifRank: { kiriko: 4 }, then: [
            { n: "She knew this girl. Not the one on the screen, the one on the shrine steps, who'd once shown her with a popsicle stick in the dust how you hold a bell until the last possible second and throw it to someone who's already sure they're going to die. Her first suzu landed perfectly. Somebody in her ear said a word that would've gotten them thrown out of the lab." }
          ], else: [
            { n: "She had no idea what she was doing. Her hands did. She let them." }
          ] }
        ] },
        { t: "(Ask them what they need from you.)", then: [
          { s: 'rnv-chenle', t: "...What we need." },
          { s: 'rnv-chenle', t: "We need you to do the thing where you're already there before we know we're in trouble. Like always." },
          { s: 'rnp-minji', f: 'happy', t: "Did you just ask us a question? In a scrim? Olivia, write down the date." }
        ] }
      ] },
      { n: "They played three rounds against a team from a school she'd never heard of, whose supports, Chenle informed everyone in a low and precise voice, rotated early, criminally early, like they'd been taught by someone who'd never once lost a fight. She cleansed Minji a half second before Minji would have died, and heard Minji say nice the way some people say thank you. She teleported to Olivia so fast that Olivia screamed. She missed one bell, and nobody said anything about it, which told her everything about how rarely she missed." },
      { n: "Somebody in the call giggled, once, very quietly, and the whole channel went silent like a church." },
      { s: 'rnv-haerin', t: "...Hehe." },
      { s: 'rnv-olivia', t: "HAERIN LAUGHED. HAERIN LAUGHED AT A SOLAR PLAY. SOMEBODY CLIP THAT!" },
      { s: 'rnp-minji', f: 'serious', t: "Sol. You're calling everything different. You said shadow instead of flank, like, four times." },
      { s: 'rnv-chenle', t: "And you said thank you to Olivia. Twice." },
      { s: 'rnv-olivia', t: "I LIKED IT." },
      { choose: [
        { t: "I'm not who you think I am.", then: [
          { n: "Nobody said anything for a second. A whole second, in a channel where nobody had stopped talking for an hour." },
          { s: 'rnp-minji', f: 'neutral', t: "...Yeah. Okay. Weird thing to say mid-scrim, Sol." },
          { s: 'rnp-minji', f: 'serious', t: "Whoever you are, your timing's perfect. Don't tell her I said that." }
        ] },
        { t: "(Just keep playing.)", then: [
          { n: "She kept playing. So did they. Whatever they'd noticed, they let it go the way a good team lets a mistake go, without discussing it, already moving to the next fight." }
        ] }
      ] },
      { ifRank: { haechan: 1 }, then: [
        { n: "When the scrim ended and the others dropped out of the call one by one, an invite blinked up in the corner of the screen. No message. Just a name she didn't know and a small purple sniper icon, waiting, the way some people wait at the bottom of stairs without admitting that's what they're doing." },
        { n: "She didn't click it. She had the strongest feeling that somewhere, someone else was about to." }
      ] },
      { n: "The screen went back to the login page by itself. solsystem, the cursor blinking. When she looked up, the beaded curtain was swinging like someone had just walked out through it, and the other two PCs were off, their screens black and sticky, the way they always were." },
      { n: "On the desk beside the keyboard someone had left a lanyard with a laminated badge on it, SU ESPORTS, PLAYER, and a photo that was her and wasn't, with the specific tired composure of a girl who'd been told to smile for an ID picture and had refused on principle." },
      { n: "She put it in her pocket. It felt, absurdly, like something she'd been given for winning." }
    ] }
  ]
});
