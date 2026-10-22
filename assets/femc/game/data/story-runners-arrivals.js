/* Two late Runners arrivals (2026-10-22, Kat's new links): Danielle (a4-light-on) and Jaemin with Chenle (a4-twelve).
   Story events in the usual format (story-act1.js), kept in their own file so the act files stay untouched. Both are
   `unlock` events (core.js unlockMet): from their date, they play on the first late night once Solar holds five Runners
   memories (the bell has to have rung loud enough), and not after 12/13 (the Runners call on 12/14 is a goodbye they'd
   have missed). Their links (links/danielle.js, jaemin.js, chenle.js) name these as `storyEvents`, so nobody can be met
   before they've crossed. Flags: arrived-danielle, arrived-jaemin, arrived-chenle.
   Canon: Runners as of chapter 66. Danielle runs SUnews; Hanni and Hyein know it, Jaemin and Chenle don't. Nobody here knows
   or says what Solar and Haechan are; Jaemin suspects out loud and gets nothing. Chenle counts (Ch 65: "food, cold air, and
   a number"); his calls that night are the daily-life routines sunews-tonight and sunews-chairs (nine to her, eleven to
   Haechan). Jeno isn't coming (Kat: "Jeno, not now"). New speakers have no portraits yet: they show as a silhouette
   (core.js silhouette) until Kat's art is added. */
(window.FEMC_GAME_EVENTS ||= []).push(

  { id: 'a4-light-on', date: '11/10', slot: 'late', unlock: { fragments: { R: 5 }, until: '12/13' }, title: 'a light on', place: "Iwatodai Dorm · Solar's Room", time: 'Late Night', cast: { lockscreen: 'Notification' }, scene: [
    { flag: { 'arrived-danielle': true } },
    { music: 'mystery' },
    { n: "She couldn't sleep, which wasn't new, and had stopped pretending she might somewhere around half past eleven, so she was sitting on the end of her bed with the curtain pulled back an inch and her forehead nearly on the glass, watching the street the way you watch a pot, when the clock on her desk turned over to the minute it always turned over to and the whole city went green." },
    { n: "Every window on the street went out at once. They always did. The houses across the road became flat shapes with dark squares in them, the streetlamp outside the gate died mid-buzz, and the sky went that sick, still, underwater color that she'd stopped finding strange in about May, which was its own kind of strange." },
    { n: "Except one light." },
    { n: "Across the road, under the dead streetlamp, at about the height of a face, a small rectangle of white. Steady. Not a window. Not a lamp. It was pointed at the dorm. It was, she understood after a second, pointed at her window, and it had the particular blue-white of a phone screen held up in the dark, the kind of light that meant somebody was looking at you through it." },
    { n: "Something went cold at the bottom of her stomach, a very specific cold, the cold of coming down a dark staircase at two in the morning in somebody else's jacket and seeing a bedroom light on where it shouldn't be, which was a thing she didn't remember ever doing, and which her body remembered anyway, perfectly, down to the creak of a step." },
    { n: "And then, in the total silence of the hour, where nothing ticked and nothing breathed, a sound carried all the way across the road and up two floors and through the glass. Small, crisp, fake. A camera shutter." },
    { choose: [
      { t: "(Go down.)", then: [
        { n: "She was on her feet and had a hoodie on before she'd decided anything, which was how most of her decisions in this building got made." }
      ] },
      { t: "(Pull the curtain shut.)", then: [
        { n: "She pulled the curtain shut. The light came through it anyway, a faint square on the fabric that didn't move, didn't waver, didn't go away, patient as anything, as if whoever held it had all night and knew she knew it. She lasted forty seconds. Then she put a hoodie on." }
      ] }
    ] },
    { place: 'Iwatodai Dorm · 2F Hallway', time: 'The Dark Hour', bg: 'iwatodaidorm-hallway' },
    { dark: true },
    { n: "Fuuka was in the hallway in her pajamas with one hand flat on the wall, the way she stood when she was listening to something none of them could hear, and her face when she looked up was puzzled more than frightened, which was worse." },
    { s: 'fuuka', f: 'surprised', t: "Solar. There's someone outside. Right outside. One of yours, I think, she reads like the others, she isn't a coffin. But she isn't..." },
    { s: 'fuuka', f: 'neutral', t: "The others were calling a name when they came. All of them. You could hear it. She isn't calling anything. She's just..." },
    { s: 'fuuka', f: 'neutral', t: "...Watching." },
    { place: 'Iwatodai Dorm · Front · The Dark Hour', time: 'The Dark Hour', bg: 'darkhour-iwatodai-street' },
    { music: 'world-runners' },
    { n: "The night outside was cold and absolutely still, the green light lying on the road like a film of water. Coffins along the pavement where people had been walking home. A cat on a wall, not moving, mid-step. And across the road, under the lamp that wasn't on, a girl." },
    { n: "Curly dark hair down her back. A long coat, buttoned all the way, and under one arm a folder, an actual folder, the plastic kind with a snap, held against her side the way somebody else might hold a handbag. She was standing with her weight perfectly even on both feet, at midnight, in the Dark Hour, in a world that wasn't hers, with the posture of a girl who'd been waiting for a meeting to start and had arrived exactly on time for it." },
    { n: "She lowered the phone, unhurried. The screen stayed lit in her hand. She looked at Solar across the empty road for a second, all of her, the hoodie and the bare ankles and the uniform skirt she'd never changed out of, and her mouth arranged itself into a smile that had clearly been ready before Solar came through the gate." },
    { s: 'danielle', f: 'happy', t: "Solar. There you are." },
    { s: 'danielle', f: 'neutral', t: "Everyone's been asking." },
    { n: "Her voice was pleasant. Bright, light, perfectly modulated, a voice for a chapter meeting, and it didn't belong to a single thing it said. Solar felt the back of her neck go tight before the girl had finished the sentence, the way your hand comes off a stove before you've felt the heat." },
    { choose: [
      { t: "You took my picture.", then: [
        { s: 'danielle', f: 'neutral', t: "I took a picture of a building. You happened to be in the window. People do that." },
        { s: 'danielle', f: 'happy', t: "You'd be surprised what ends up in the frame." }
      ] },
      { t: "Who are you?", then: [
        { n: "The girl tilted her head, very slightly. It wasn't hurt. Solar would think about that later, how much it wasn't hurt." }
      ] },
      { t: "(Say nothing. Wait.)", then: [
        { n: "She didn't say anything. She stood at the gate and waited, the way you'd wait out a stranger on a train who wanted something, and the girl across the road watched her wait with every sign of enjoying it, as if silence were a move, and a good one, and she'd been hoping Solar would play it." }
      ] }
    ] },
    { n: "Then the girl looked properly. Not at the hoodie. At her face. Solar watched her read it, and it took about a second, less, a glance down a page for the one number that mattered, and she watched the girl find it, and file it, and something moved behind her eyes that wasn't sympathy and wasn't surprise, but looked, horribly, like a chart being updated." },
    { s: 'danielle', f: 'neutral', t: "...Oh. You really don't know me." },
    { s: 'danielle', f: 'happy', t: "Hm. That's inconvenient." },
    { n: "She said it the way you'd say a train was running four minutes late. Then she crossed the road, unhurried, heels on the dead tarmac, and stopped at the gate, close enough to offer a hand if she'd wanted to. She didn't. She held the folder." },
    { s: 'danielle', f: 'neutral', t: "Danielle. Danielle Marsh. We're sorority sisters. I'm the treasurer. We have a class together on Mondays. You sit two seats from me." },
    { s: 'danielle', f: 'neutral', t: "Nobody ever sits in the seat between us." },
    { choose: [
      { t: "Why are you here?", then: [
        { s: 'danielle', f: 'neutral', t: "The same reason as everyone, I assume. You left. People noticed. People do love to talk." },
        { s: 'danielle', f: 'neutral', t: "And then your brother left. In the middle of the night. Out the front door, no bag, no word to anyone." },
        { s: 'danielle', f: 'happy', t: "Nobody leaves in the middle of the night, Solar. Not without a reason. I thought somebody ought to find out what it was." }
      ] },
      { t: "How did you find me?", then: [
        { s: 'danielle', f: 'neutral', t: "I looked." },
        { s: 'danielle', f: 'happy', t: "You'd be amazed how few people actually do. They worry. They post. They call each other and say *has anyone heard*. I've never been very good at worrying, so I looked." }
      ] },
      { t: "(Don't let her through the gate.)", then: [
        { n: "She put her hand on the gate. Not to open it. The girl looked at the hand, and then at Solar, and the smile didn't change by a single degree, and somehow that was an answer." },
        { s: 'danielle', f: 'neutral', t: "That's fair. I wouldn't let me in either, if I were you. You never did." }
      ] }
    ] },
    { n: "The front door banged open behind her." },
    { n: "Hanni, in pajamas and a cardigan, with her hair half out of its clip, and Hyein right behind her in a T-shirt that said something rude in rhinestones, both of them barefoot on the step, both of them out of breath, as if they'd woken to the same feeling at the same second and come running down two flights to find out what it was. Hyein saw who was standing at the gate." },
    { s: 'hyein', f: 'surprised', t: "Oh, absolutely not." },
    { s: 'hyein', f: 'serious', t: "No. No. Send her back. Fuuka. FUUKA. Is there a way to send them back? There has to be a form." },
    { s: 'hanni', f: 'serious', t: "...Danielle." },
    { s: 'danielle', f: 'happy', t: "Hanni. Hyein. You both look rested. That's nice." },
    { s: 'danielle', f: 'neutral', t: "Everybody at home thinks you're dead in a ditch, by the way. I said probably not. I said Hanni's too organized to die in a ditch." },
    { n: "Hyein made a sound like a kettle. Hanni came down the steps, barefoot, on the freezing path, and stood beside Solar, not in front of her, beside, close enough that their shoulders touched, and looked at the girl at the gate with a face Solar had never seen on her. Hanni's face couldn't hide anything. That was the whole problem with it. Right now it wasn't trying to." },
    { s: 'hanni', f: 'neutral', t: "Sol doesn't remember anyone. Not us either. So you're going to be nice." },
    { s: 'danielle', f: 'neutral', t: "I'm always nice." },
    { s: 'hyein', f: 'serious', t: "You're NEVER..." },
    { s: 'hanni', f: 'serious', t: "Hyein." },
    { n: "Solar looked from one face to the other. A whole history went across the space between them, three girls who had stood in the same kitchens and the same meetings and knew precisely how much each of them could say in front of the others, and she wasn't in a single line of it. She was, she had the strange feeling, the subject." },
    { dark: false },
    { music: 'night' },
    { n: "The hour ended. The streetlamp over the gate came back on with a buzz like a bad joke, a car went past with its radio on, somewhere a dog started barking as if it had been holding it in, and the cat on the wall finished its step and looked offended to find them all there." },
    { n: "The girl looked down at the phone still lit in her hand. Solar saw the screen. A photograph of the dorm, green and dark, one window with a face in it, and under it, in small gray type, the line every phone in this building had learned to say when it reached for home." },
    { phone: [
      { from: 'lockscreen', t: "Couldn't post. Tap to retry." }
    ], contact: "Danielle's phone" },
    { n: "She tapped it. It said the same thing. She tapped it again. And for one second, no more, her face wasn't arranged in advance. It was just a face, a girl's, looking at a sentence that wouldn't go where she sent it, and it looked, Solar thought, for exactly that second, like somebody who had been talking into a room for a very long time and had just heard how quiet it was." },
    { n: "Then it was gone, and the smile was back, every corner where it went, and she put the phone in her coat pocket the way you'd put away a pen." },
    { n: "Mitsuru came down in her dressing gown with a key in her hand, because Mitsuru always came down with a key in her hand now, and looked at the girl at the gate for about as long as the girl had looked at Solar, and Solar watched two people who were very good at reading a room read each other and come away with nothing either of them meant to give." },
    { s: 'mitsuru', f: 'neutral', t: "The Kirijo guesthouse is by the station. There's a room. Visitors are out of this building by eight on school days." },
    { s: 'danielle', f: 'happy', t: "Thank you. That's very generous." },
    { s: 'danielle', f: 'neutral', t: "Is there a ledger? For the guesthouse. Groceries, utilities. Somebody must be keeping one." },
    { s: 'mitsuru', f: 'neutral', t: "...There is." },
    { s: 'danielle', f: 'happy', t: "Wonderful. I'll want to see it." },
    { n: "She took the key. She said goodnight to each of them by name, Solar last, and walked away up the street toward the station with the folder under her arm and her heels very even on the pavement, and didn't look back once, because, Solar was beginning to understand, she never needed to." },
    { n: "Hyein said a word Mitsuru pretended not to hear. Hanni put an arm round Solar's waist and steered her inside, and at the bottom of the stairs, quietly, so Hyein wouldn't, said only:" },
    { s: 'hanni', f: 'serious', t: "Don't tell her things, Sol. Not anything. Not even the nice things. Okay?" },
    { n: "Back upstairs she sat on the end of her bed and looked at the window, at the gap in the curtain, at the street with its lamp on and its ordinary midnight back. It took her a long time to work out what was bothering her, and when she did she couldn't put it down again." },
    { n: "She'd been at that window since half past eleven. The light across the road had been there when the hour started. She didn't know how long before that it had been on." }
  ] },

  { id: 'a4-twelve', date: '11/16', slot: 'late', unlock: { fragments: { R: 5 }, until: '12/13' }, title: 'twelve', place: 'Iwatodai Dorm · Lounge', time: 'Late Night', cast: { lockscreen: 'Notification', guard: 'Security Guard' }, scene: [
    { flag: { 'arrived-jaemin': true, 'arrived-chenle': true } },
    { music: 'night' },
    { n: "The lounge at a quarter to midnight was down to its last two. Solar on the sofa with a history textbook she had read the same paragraph of six times, and Haechan on the arm of the chair nearest the stairs, where he always ended up, with his headphones round his neck and nothing playing in them, and his phone face up on the armrest beside his knee, the way he'd taken to leaving it, as if he were waiting for something to come in from very far away." },
    { n: "Neither of them had said anything in twenty minutes. That was, she'd realized at some point in the last week, one of the better things about him. He could share a room with you without needing it to be about anything." },
    { n: "At eleven fifty-eight the clock on the wall did what it did, and the lamp went out, and the green came up through the windows, and the house went into that held breath it held every night, and in the dead silence of the hour his phone lit up on the armrest." },
    { phone: [
      { from: 'lockscreen', t: "chenle · calling" }
    ], contact: "Haechan's lock screen" },
    { n: "It wasn't an old message from that night arriving late, the way things from home arrived here. It was ringing. In the Dark Hour, where nothing rang. The screen pulsed white in the green room, patient, and he looked at it with no expression at all, and didn't touch it." },
    { n: "Then her own phone went off in her lap." },
    { phone: [
      { from: 'lockscreen', t: "chenle · calling" }
    ], contact: 'Solar’s lock screen' },
    { n: "Her thumb was on it before she knew what she was doing. Her body had done this before. A name she didn't know, on a screen she'd stopped expecting anything from, and her whole arm went to answer it as if somebody had called her name across a room." },
    { choose: [
      { t: "(Answer it.)", then: [
        { n: "Static, like wind through a gap in a window. And then a voice. A boy's, low and exact, as if he'd been holding the next word ready for a long time and was annoyed to finally use it." },
        { s: 'chenle', f: 'neutral', t: "...Ten." },
        { s: 'chenle', f: 'serious', t: "Where are you." },
        { n: "Then nothing. The line went dead with a click. Across the room Haechan's phone had stopped too. He was looking at her, at the phone in her hand, at her face, and his own did something small and quick at the jaw and was still." }
      ] },
      { t: "(Look at Haechan.)", then: [
        { n: "She looked at him. He was already looking at her. Both phones rang in the green dark, his on the armrest and hers in her hand, the same name on both, a little out of time with each other, like two people knocking on two doors of the same house." },
        { s: 'haechan', f: 'neutral', t: "He doesn't stop." },
        { s: 'haechan', f: 'neutral', t: "He'll do it all night. He's done it before." },
        { n: "Both screens went dark at once." }
      ] },
      { t: "(Let it ring.)", then: [
        { n: "She let it ring. It rang for a long time, longer than anybody's phone rang, as if whoever was calling had decided in advance exactly how long was reasonable and was going to keep to it. When it stopped there was a number on the screen she didn't know how she knew to look for. Ten." }
      ] }
    ] },
    { n: "Fuuka's voice came down the stairs before Fuuka did, thin and urgent, the voice she used in Tartarus when something on a floor had moved." },
    { s: 'fuuka', f: 'surprised', t: "Solar! Two more. Just now, both at once. They're at the school. Gekkoukan, the front gate. One of them's very... very loud. And the other one's..." },
    { s: 'fuuka', f: 'neutral', t: "...counting? I think he's counting something." },
    { n: "Haechan stood up. He didn't say anything. He went to the front hall and stepped into his shoes without untying them, the way he always did, and stood at the door with his hand on it, not opening it, waiting, as if it hadn't occurred to him to go without her and it hadn't occurred to him to say so." },
    { place: 'Gekkoukan High · The Dark Hour', time: 'The Dark Hour', bg: 'darkhour-gekkoukan-gate' },
    { dark: true },
    { music: 'world-runners' },
    { n: "They heard him before they saw him. The whole of the green hour was silent, every coffin on the road and every dead streetlamp and the school at the top of the hill like a ship gone dark, and over all of it, carrying from the front gate, one voice, narrating." },
    { s: 'jaemin', f: 'neutral', t: "Okay. Okay. Okay. Chenle. Le. Look at me. Look at where we are. This is a high school. We are at a high school. At midnight. With no explanation. In matching shoes." },
    { s: 'jaemin', f: 'serious', t: "This is the single worst photo-op of my life and there's no SIGNAL to post it, which, honestly, small mercies." },
    { n: "He was standing in the middle of the gateway with his phone held up over his head, flashlight on, sweeping it across the coffins on the road like a stage light looking for its performer. Tall, a white cap pushed back off his face, a jacket somebody had paid a great deal of money for, the kind of face that had been told it was handsome so many times it had learned exactly which way to turn for it. Even here. Even now. Even talking to a row of coffins, he was doing it at the angle." },
    { n: "On the curb beside the gate, a smaller boy was sitting with his knees up and his phone to his ear. Blonde, a grey hoodie with the hood half up, the profoundly inconvenienced expression of somebody who had been made to leave his room. Beside him on the curb, a plastic convenience-store bag, the handles knotted. He wasn't looking at anything. He was listening to a phone ring, and his lips were moving, very slightly, keeping a count." },
    { n: "The flashlight found them. It swung across the road and landed square on Solar's face and stopped, and stayed, and she heard the boy holding it take a breath like a man about to go on stage." },
    { s: 'jaemin', f: 'surprised', t: "...SOLAR LEE." },
    { s: 'jaemin', f: 'happy', t: "Oh my God. Oh my God, she's alive, she's in a SKIRT, she's in a high school skirt, Le, she's... and..." },
    { n: "The light moved six inches to the left." },
    { s: 'jaemin', f: 'surprised', t: "...and HAECHANNIE..." },
    { s: 'haechan', f: 'neutral', t: "Do not." },
    { n: "He said it in exactly the voice you'd use to stop a dog walking into the road, and Jaemin, astonishingly, stopped. On the curb the smaller boy took the phone away from his ear, and looked at the screen, and hung up. Then he stood, unhurried, brushed off the back of his jeans, picked up the plastic bag, and looked at Solar first." },
    { s: 'chenle', f: 'neutral', t: "Ten." },
    { n: "Then at Haechan." },
    { s: 'chenle', f: 'serious', t: "Twelve." },
    { s: 'chenle', f: 'neutral', t: "You could have picked up at one." },
    { s: 'haechan', f: 'neutral', t: "You counted." },
    { s: 'chenle', f: 'neutral', t: "I always count." },
    { n: "They looked at each other for a second, the two of them, across the dead road, and something passed between them that wasn't a greeting and wasn't an argument, and that Solar recognized, without knowing how, as the way two people talk when they've had the same conversation enough times that they've stopped needing to have it out loud." },
    { s: 'jaemin', f: 'happy', t: "Okay, so, quick question, because I'm a social chair and this is technically a social occasion, and I'm saying nothing, I want that on the record, I am saying nothing..." },
    { s: 'jaemin', f: 'happy', t: "...but you two came together? At midnight? From the same building? I'm saying so much nothing right now. I'm saying the most nothing anyone's ever said." },
    { n: "Haechan looked at him. Just looked, flat, for a long, long second, with absolutely nothing in his face, and Solar watched it work on Jaemin like weather, the grin staying exactly where it was while everything behind it quietly sat down." },
    { s: 'jaemin', f: 'neutral', t: "...Cool. Love that. Great talk." },
    { n: "It was the smaller one who saw it first. Solar saw him see it. He'd been looking at her the whole time Jaemin talked, not at her clothes or the armband but at her face, the way you'd look at a screen during a replay for the one frame that explained the fight, and she watched him find the frame. His mouth went flat. He didn't say anything to her. He said it to Jaemin, low, without looking away from her." },
    { s: 'chenle', f: 'neutral', t: "She doesn't know us." },
    { s: 'jaemin', f: 'neutral', t: "What? Everybody knows me." },
    { s: 'chenle', f: 'neutral', t: "Jaemin. Look at her." },
    { n: "Jaemin looked at her. Properly, for the first time, with the light lowered. And Solar watched a boy who knew exactly which way to turn his face for any camera on earth find out that there was a face he hadn't prepared one for, and for a second, just one, he didn't have an angle at all." },
    { n: "Then he did. It came back up over him like a stage light, warm and wide and a little too bright, and he took the cap off, and swept it across his chest, and bowed, right there in the green, to her, to a girl in a school uniform at a high school gate at midnight, as if she'd just come down the stairs at a party he'd thrown." },
    { s: 'jaemin', f: 'happy', t: "Okay. Okay! Then hi. Hello. Na Jaemin. Social Chair. I've thrown every party you've ever been to, and you loved them, and you don't remember a single one." },
    { s: 'jaemin', f: 'happy', t: "Which, honestly? Best review I've ever gotten." },
    { choose: [
      { t: "(Laugh. It's a good line.)", then: [
        { n: "She laughed. It came out of her before she could stop it, short and surprised, and she saw it land on him, saw his shoulders come down half an inch, as if a laugh from her was the thing he'd been waiting at this gate for and he could stop holding the light up now." },
        { s: 'jaemin', f: 'happy', t: "THERE we go. She's in there. Le, she's in there." }
      ] },
      { t: "I'm sorry. I don't.", then: [
        { n: "He kept smiling. That was the thing about him, she'd learn. He always kept smiling. But he put the cap back on, carefully, the way you'd set something down so it wouldn't break, and he didn't do the voice for a while." },
        { s: 'jaemin', f: 'neutral', t: "Don't be sorry. Don't. That's my whole job. You just come, and I'll handle being remembered." }
      ] },
      { t: "(Look at the other one.)", then: [
        { n: "She looked past Jaemin's bow at the smaller boy, who was standing with the bag in one hand and his phone in the other, watching her look at him, unbothered, as if he'd known which one of them she'd look at and had been waiting for her to get there." }
      ] }
    ] },
    { s: 'chenle', f: 'neutral', t: "Chenle." },
    { s: 'chenle', f: 'neutral', t: "Tank. You're my support." },
    { n: "That was all. He said it like a fact on a sheet, like the most important thing about either of them, the only thing worth leading with, and something in her hands, of all places, went warm, the fingers of her right hand curling a little at her side around a thing that wasn't there." },
    { n: "Then he walked past her, to Haechan, and held out the plastic bag. Inside, through the thin white plastic, she could see the shapes of things: a sandwich in a triangle box, a bottle of water, something sweet in a wrapper." },
    { s: 'chenle', f: 'neutral', t: "Eat." },
    { s: 'haechan', f: 'neutral', t: "...I'm not hungry." },
    { s: 'chenle', f: 'neutral', t: "That's not what I asked." },
    { n: "Haechan took the bag. He took it the way you'd take a parking ticket, irritated, without thanks, and didn't open it, and held on to it. Chenle nodded, once, as if a hypothesis had been confirmed, and put his hands back in his hoodie pocket and turned around to look at the school." },
    { dark: false },
    { music: 'city' },
    { n: "The hour ended. The floodlights over the gate came on all at once with a heavy electrical clunk, and the road was suddenly full of ordinary midnight, a bicycle, a taxi, and from the security hut beside the gate a man in a uniform jacket came out with a flashlight of his own, squinting." },
    { s: 'guard', f: 'neutral', t: "Hey! Who's there? What are you kids doing at the school at this hour?" },
    { n: "Jaemin turned toward him with the whole of his face, like a sunflower turning toward an investor." },
    { s: 'jaemin', f: 'happy', t: "Officer! Good evening. Huge fan of the building. We're lost. We're exchange students. We're very, very lost. Is that the station? That's the station. Thank you so much, have a beautiful night, you're doing amazing work." },
    { n: "They walked. They walked fast and then, round the corner, faster, and Jaemin was laughing, actually laughing, bent over with his hands on his knees by a vending machine, and Haechan walked a step ahead with the bag knotted round his wrist and didn't look back at any of them, and Chenle walked beside Solar and said nothing at all for three whole streets." },
    { n: "At the corner of the Strip he spoke, without looking at her, to the road ahead." },
    { s: 'chenle', f: 'neutral', t: "Regionals is in December." },
    { n: "She didn't know what Regionals was. Her hands did, a little. She didn't say anything back, and he didn't seem to need her to, and they walked the rest of the way like that, two people who had apparently spent a lot of time not talking next to each other and were good at it." },
    { place: 'Iwatodai Dorm · Lounge', time: 'Late Night', bg: 'iwatodaidorm-livingroom-night' },
    { n: "Mitsuru was in the lounge in her dressing gown with two keys already in her hand. She didn't ask. By November, Mitsuru had stopped asking; she simply came downstairs at the right moment holding the right number of keys, which was, Junpei said, the most frightening thing about her." },
    { s: 'mitsuru', f: 'neutral', t: "The Kirijo guesthouse, by the station. Two rooms on the second floor. Visitors are out of this building by eight on school days." },
    { s: 'jaemin', f: 'happy', t: "A guesthouse. With rooms. And, sorry, who's the social chair of the guesthouse? Is there a social calendar? Because I have notes..." },
    { s: 'mitsuru', f: 'neutral', t: "Your president lives on the first floor. I'm sure he'll be glad to see you." },
    { n: "Jaemin stopped talking. It was, Solar would find out, a rare enough thing that Junpei later asked her to describe it in detail." },
    { s: 'jaemin', f: 'surprised', t: "...Jaehyun's here?" },
    { s: 'jaemin', f: 'surprised', t: "Jaehyun Lee is HERE. In this world. In a guesthouse. With a first floor." },
    { s: 'chenle', f: 'neutral', t: "No parties, then." },
    { s: 'jaemin', f: 'sad', t: "Le. Don't. Not tonight." },
    { n: "They went, in the end, with Jaemin talking the whole way down the path and Chenle with his hands in his pocket, and the door shut behind them, and the dorm was quiet again, the radiator ticking, everyone gone back up to bed." },
    { n: "Everyone but one. When Solar went up, half an hour later, she found him on the stairs between the second floor and the third, in the dark, sitting with his back against the wall and the plastic bag open on the step beside him, eating the sandwich in small, slow, irritated bites, as if it were a chore somebody had set him, and drinking the water, all of it." },
    { n: "He didn't look up. She didn't stop. She stepped past him on the stairs, and he moved his knee an inch to let her by without being asked, and neither of them said anything, and she went up to bed thinking about food, and the cold, and a number, and about a boy who had called somebody twelve times and had come all this way to hand him a sandwich." }
  ] }
);
