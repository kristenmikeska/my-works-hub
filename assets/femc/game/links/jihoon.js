/* Park Jihoon · ? Revamp social link data (femc-game.html). Format: link fields in assets/femc/game/core.js, scene lines in scene.js.
   Searcher, canon romance (Hoax). Solar Kim's best friend since preschool: loud, vain, does pilates, has a car at home,
   calls her dog his son, and is always the first one at her door with ice cream. The romance is the best friend realizing
   he's been saying the quiet part loudly for years, and Solar realizing she always heard it. Nothing here decides Hoax's
   own canon (plot doc §9). His crossing (9/19, the Strip, the ice cream that won't melt) is a story event; rank 1 is the
   hour on the dorm steps after his one-day bit (plot doc §7). He awakens on 10/17 (story); ranks 5+ come after.
   Fragment: hoax-crane-game (rank 4, plot doc §8 H6). Romance turn at rank 8.
   Arcana: the stub has '?' (searcher arcana are an open question for Kat, plot doc §16.6).
   afterMax and christmas use v1's field shapes; the revamp engine doesn't play them yet. */
(window.FEMC_GAME_LINKS ||= []).push({
  id: 'jihoon', name: 'Park Jihoon', short: 'Jihoon', arcana: '?', numeral: '', from: 'Hoax',
  kind: 'searcher', world: 'H', romance: 'canon',
  starts: '9/19', gate: { H: 3 },
  home: { area: 'mall', spot: 'Game Panic', slot: 'after', days: [0, 1, 3, 5, 6],
          hint: 'After school and on days off, at Game Panic, losing to a crane game on purpose. Not on purpose.' },
  approach: "There's a tall boy in a navy blazer at the crane game by Game Panic's door, feeding it coins with the grim focus of a man trying to win back his honor, and he says your name without turning around.",
  cast: {},
  invite: {
    ask: ["SOL", "come outside. im outside", "the crane game is mocking me. i need backup", "r u free or r u busy being Mysterious", "i bought ice cream. dont ask why. come eat it before i do", "ur roommate akihiko challenged me to a plank. come watch me win", "bored. entertain me. its ur job"],
    ok: ["FINALLY", "ok hurry before i lose more money", "knew it. obviously"],
    no: ["wow ok. betrayal", "fine. ill be here. suffering", "ok but ur missing out on greatness"]
  },
  hangouts: [
    [
      { n: "Game Panic's crane game had a new prize in it, a lumpy white plush dog with one ear inside out, and Jihoon had decided it looked exactly like his son and that he would not be leaving the mall without it." },
      { s: 'jihoon', f: 'serious', t: "Don't talk to me. I'm in the zone. The claw respects silence." },
      { choose: [
        { t: "(Stay silent. Very loudly.)", notes: 3, then: [
          { n: "She stood beside him radiating silence with her whole body until he cracked and laughed and the claw dropped the dog three centimeters from the chute." },
          { s: 'jihoon', f: 'happy', t: "That was YOU. That was sabotage. I'm telling Nana." }
        ] },
        { t: "It's rigged. They're all rigged.", notes: 2, then: [
          { s: 'jihoon', f: 'serious', t: "I know it's rigged. I'm not playing the claw. I'm playing the guy who rigged it. Psychologically." }
        ] },
        { t: "Let me try.", notes: 2, then: [
          { s: 'jihoon', f: 'surprised', t: "You? You've never once in your life— okay. Okay. Go. Embarrass yourself. I'll hold your bag." },
          { n: "She missed. He looked deeply relieved." }
        ] }
      ] }
    ],
    [
      { n: "He'd found the one convenience store in Iwatodai that sold the right brand of ice cream sandwich, which he said was a sign, and they were eating them on the low wall outside it in the cold, which was his idea of a balanced diet." },
      { s: 'jihoon', f: 'neutral', t: "You're eating it from the wrong end. You always eat it from the wrong end. It's like watching someone put on a shirt backwards." },
      { choose: [
        { t: "(Turn it around. For him.)", notes: 3, then: [
          { s: 'jihoon', f: 'happy', t: "Thank you. Thank you. My blood pressure just went down eleven points." }
        ] },
        { t: "(Keep eating it from the wrong end, maintaining eye contact.)", notes: 3, then: [
          { s: 'jihoon', f: 'serious', t: "Monster. You're a monster. I've known that since we were four and you ate the glue." },
          { s: 'solar', f: 'neutral', t: "I didn't eat the glue." },
          { s: 'jihoon', f: 'neutral', t: "You licked it. It's the same thing legally." }
        ] }
      ] }
    ],
    [
      { n: "He was doing pilates on the dorm roof. On a yoga mat he'd borrowed from Yukari under circumstances nobody would explain, in the wind, with the grave dignity of a man who had been told by a website that his core was a temple." },
      { s: 'jihoon', f: 'serious', t: "Don't laugh. This is how I maintain this body. You think this happens by accident?" },
      { choose: [
        { t: "(Get on the mat with him.)", notes: 3, then: [
          { n: "She lasted forty seconds in the plank before her arms filed a formal complaint. He lasted three minutes and then collapsed sideways onto the mat and lay there staring at the sky, extremely pleased, gasping." },
          { s: 'jihoon', f: 'happy', t: "Light of your disgusting life. Say it." }
        ] },
        { t: "Akihiko-senpai is watching you from the door.", notes: 2, then: [
          { s: 'jihoon', f: 'surprised', t: "Is he judging me or respecting me? I genuinely can't tell with him. His face only does one thing." },
          { n: "Akihiko was, it turned out, timing him." }
        ] }
      ] }
    ]
  ],
  ranks: [
    { after: '9/20', title: '1: an hour on the steps', place: 'Iwatodai Dorm · Front', time: 'Evening', music: 'night', scene: [
      { n: "He'd done a bit about it for one whole day. That was the thing everyone in the dorm would talk about afterward, in lowered voices, the way you'd talk about a storm that had gone through the night before." },
      { n: "He'd woken up on the lounge sofa at seven in the morning with the tub of ice cream still in his arms, still frozen, which nobody had been able to explain, and he'd looked at Solar coming down the stairs in her uniform and said *ok very funny sol,* and then he'd kept saying it. At breakfast. On the walk to the monorail, where Yukari had to physically steer him through the ticket gate. At the school gate, which he wasn't allowed through. At four o'clock, when she came out and found him waiting on the wall across the street with his hands in his pockets, still in his navy blazer, still saying it. *Ok very funny. You've had your fun. Ok. Haha. Sol. Very funny.*" },
      { n: "By dinner he'd stopped saying it. He'd stopped saying anything. He'd eaten Junpei's curry without commenting on it, which Junpei had found so alarming he'd gone and gotten Mitsuru." },
      { n: "And now he was sitting on the front steps of the dorm in the dark with his elbows on his knees, and he'd been sitting there an hour, and he hadn't said a single word, and Solar didn't know him, and still somehow knew that for Park Jihoon this was a medical event." },
      { register: 'jihoon' },
      { choose: [
        { t: "(Sit down next to him.)", notes: 3, then: [
          { n: "She sat down on the step beside him. Not close. The stone was cold through her skirt. He didn't look at her. He moved his feet over, a few centimeters, to make room for hers, which she understood was a whole sentence." }
        ] },
        { t: "Are you okay?", notes: 2, then: [
          { s: 'jihoon', f: 'neutral', t: "Wow." },
          { s: 'jihoon', f: 'neutral', t: "You've never asked me that in your life. Not once. Not even when I fell off the jungle gym. You laughed. You laughed so hard." },
          { s: 'jihoon', f: 'sad', t: "...So no. I'm not okay. Thanks for asking. It's horrible." }
        ] },
        { t: "(Bring out the ice cream.)", notes: 3, then: [
          { n: "She'd found the tub in the freezer, where somebody had put it, still unopened, still hard as a rock, though it had sat in a boy's arms all night in a city that turned green. She brought it out with two spoons and set it on the step between them." },
          { s: 'jihoon', f: 'surprised', t: "..." },
          { s: 'jihoon', f: 'neutral', t: "That's my line. That's my whole thing. You can't steal my whole thing." }
        ] }
      ] },
      { s: 'jihoon', f: 'neutral', t: "You know what you said? Yesterday? When I came round the corner with this and you looked at me?" },
      { s: 'jihoon', f: 'neutral', t: "*I'm sorry, do I know you?*" },
      { s: 'jihoon', f: 'serious', t: "Do I know you. Do I *know* you. I've known you since you had a bowl cut. I know your blood type. I know you sleep with one sock off. I know you hate pickles but you eat them if your mom's watching. I know your PIN. Don't change your PIN." },
      { s: 'jihoon', f: 'sad', t: "And you looked at me like I was a guy handing out flyers." },
      { n: "He laughed, short and wet, and scrubbed the heel of his hand across his eyes like he was annoyed at them for doing it without permission." },
      { s: 'jihoon', f: 'neutral', t: "I was on my way to your house. That's the stupidest part. Somebody in the chat said you were sad, and I was on my way over, because as your best friend it is rightfully my job, and then the street was green, and you were standing in it, and you didn't know me." },
      { choose: [
        { t: "I'm sorry.", notes: 2, then: [
          { s: 'jihoon', f: 'neutral', t: "Don't. You sound like a hotel." }
        ] },
        { t: "Tell me something about me. Anything.", notes: 3, then: [
          { s: 'jihoon', f: 'neutral', t: "Anything." },
          { s: 'jihoon', f: 'neutral', t: "Okay. You walk your dog at six-thirty in the morning because you like the birds. You'd never admit that. You say it's for the exercise." },
          { s: 'jihoon', f: 'happy', t: "His name is Nana. He's huge and fluffy and his legs look stupid and he hates me because I'm his father and he's going through a phase." },
          { n: "Something went through her at *Nana*, warm and heavy and soft, like a big animal leaning its whole weight against her shins. She didn't know the name. She knew the weight." }
        ] },
        { t: "(Take a spoonful of the ice cream and don't say anything.)", notes: 3, then: [
          { n: "She took a spoonful. It was cookies and cream. She'd known it would be before the lid came off." },
          { s: 'jihoon', f: 'neutral', t: "...Yeah. Of course you'd still eat my ice cream. Of course that's the part that survived." }
        ] }
      ] },
      { s: 'jihoon', f: 'serious', t: "Okay. Here's the new rule." },
      { s: 'jihoon', f: 'serious', t: "If you don't know me, fine. I'll be insufferable to you from scratch. I'll be so annoying you'll have to remember me just to know who to complain about." },
      { s: 'jihoon', f: 'happy', t: "I'm the light of your disgusting life. I'll prove it again. It took me like four years the first time. I'm faster now. I do pilates." },
      { n: "He stood up, and stretched, and held out a hand to pull her up off the cold step, and she took it, and his hand closed around hers the way you'd close a door you'd closed ten thousand times, without looking, and she had to stand there for a second after he let go." }
    ] },

    { after: '9/27', title: '2: the plank', place: 'Iwatodai Dorm · Rooftop', time: 'After School', scene: [
      { n: "Akihiko had made the mistake, on Wednesday, of mentioning to Jihoon that he did a four-minute plank every morning, and Jihoon had heard this the way a dog hears the word *walk,* and now it was Sunday afternoon and the dorm roof had become an arena." },
      { n: "Two mats. Two boys, side by side on their forearms, perfectly straight, perfectly still, staring at the concrete like it had insulted their families. Junpei was refereeing from a deck chair with a stopwatch and a bag of chips. Yukari had come up to hang laundry and stayed, in the doorway, with the expression of a woman watching two dogs try to share a single stick." },
      { s: 'junpei', f: 'happy', t: "Five minutes! Ladies and gentlemen, we are at five minutes! This is historic! This is the Olympics of not moving!" },
      { s: 'jihoon', f: 'serious', t: "Sol. Sol. Talk to me. I need a distraction. Tell me I'm better than him." },
      { s: 'akihiko', f: 'serious', t: "Talking uses your core." },
      { s: 'jihoon', f: 'serious', t: "MY CORE IS FINE. MY CORE IS A TEMPLE." },
      { choose: [
        { t: "You're better than him.", notes: 2, then: [
          { s: 'akihiko', f: 'serious', t: "She's lying. She does that when she wants someone to keep going." },
          { s: 'jihoon', f: 'surprised', t: "How do YOU know that? You've known her five months. I've known her FOURTEEN YEARS." },
          { s: 'akihiko', f: 'neutral', t: "...She does, though." },
          { s: 'jihoon', f: 'serious', t: "I KNOW she does." }
        ] },
        { t: "Akihiko-senpai is better than you.", notes: 3, then: [
          { s: 'jihoon', f: 'surprised', t: "BETRAYAL." },
          { n: "He held on another ninety seconds out of pure spite, his whole body shaking like a bridge in an earthquake, and she watched him do it and laughed until her stomach hurt, and somewhere in the laugh she knew she'd done this to him before, said exactly the wrong thing to make him hold on longer, a hundred times, on purpose." }
        ] },
        { t: "(Sit on Jihoon's back.)", notes: 3, then: [
          { n: "She sat on his back. He made a sound like a stepped-on accordion, and held, and held, and Akihiko glanced over with real, startled respect, and then she felt the plank go out of him all at once and they both went down on the mat in a heap." },
          { s: 'jihoon', f: 'happy', t: "That doesn't count. That was a hostile intervention. I want a rematch. I want the UN." }
        ] }
      ] },
      { n: "Akihiko won. Akihiko always won. He held it for seven minutes and then got up and offered Jihoon a hand off the mat and a protein shake, pink, and Jihoon took both with the face of a man accepting a surrender he hadn't offered." },
      { s: 'jihoon', f: 'neutral', t: "He's fine. He's fine. I don't like him, but he's fine." },
      { s: 'jihoon', f: 'neutral', t: "He looks at you like you're a stopwatch he's scared he'll drop. I don't trust that in a guy." },
      { s: 'solar', f: 'neutral', t: "How does a guy look at me usually?" },
      { s: 'jihoon', f: 'serious', t: "Like you're going to steal their fries. Which you are. Which you do." },
      { n: "Afterward, when Akihiko had gone down to shower and Junpei had gone down to tell everyone, at length, what they'd missed, Jihoon lay flat on his back on the mat in the cold with his arms out like a starfish and looked at the sky." },
      { s: 'jihoon', f: 'neutral', t: "I haven't done it since I got here. Pilates. Three weeks. I do it every morning at home. Every single morning. Ask anyone. Ask the group chat. They're sick of hearing about it." },
      { s: 'jihoon', f: 'sad', t: "And then I got here and I just. Didn't. I lay in the guesthouse bed every morning and looked at the ceiling. It felt stupid. Keeping my core a temple when you didn't know my name." },
      { choose: [
        { t: "Your core's still a temple.", notes: 3, then: [
          { s: 'jihoon', f: 'happy', t: "IT IS. Thank you. Somebody gets it. Somebody finally respects the temple." },
          { n: "He sat up so fast the mat slid. He looked, for a second, exactly like himself, which she knew without knowing how she knew." }
        ] },
        { t: "Do it tomorrow morning. I'll time you.", notes: 3, then: [
          { s: 'jihoon', f: 'surprised', t: "..." },
          { s: 'jihoon', f: 'neutral', t: "Six-thirty. On the roof. You'll be late. You're always late to my things. Be late anyway. Just come." }
        ] }
      ] },
      { n: "He drank half the protein shake and made a face and gave her the other half without asking if she wanted it, and she drank it, and it was disgusting, and it was the second time in a week someone had handed her the rest of something like it was obviously hers." },
      { s: 'jihoon', f: 'neutral', t: "Rematch Wednesday. Tell him. I'll be ready. I'll have trained in my mind." }
    ] },

    { after: '10/7', title: '3: father jihoon', place: 'Paulownia Mall · Central Atrium', time: 'After School', scene: [
      { n: "Paulownia Mall's fountain was doing its loud, ordinary thing, throwing water up at the glass roof so the whole atrium smelled faintly of chlorine and pretzels, and Jihoon was sitting on its rim with his phone held up to her face, scrolling, with the absolute focus of a man presenting evidence in court." },
      { s: 'jihoon', f: 'happy', t: "Okay. This one. Look at this one. Look at his face." },
      { n: "A dog. An enormous, impossibly fluffy dog with a grin like a sofa cushion, sitting on a kitchen floor wearing a paper birthday hat, looking at the camera with the profound dignity of someone who did not consent to the hat." },
      { s: 'jihoon', f: 'happy', t: "His second birthday. You made the hat. It's a cone. You couldn't make a cone. It's a triangle you stapled to a different triangle." },
      { s: 'jihoon', f: 'neutral', t: "This one, he's sleeping on your face. This one, he's sleeping on MY face, which he's only done once, and it was the best day of my life. This one, he's eating your homework. You were thrilled." },
      { choose: [
        { t: "(Keep scrolling. Don't stop.)", notes: 3, then: [
          { n: "She took the phone out of his hand and kept scrolling, and he let her, and leaned in beside her on the fountain rim to narrate, and it went on for six hundred photographs. Nana in the snow. Nana in a bathtub. Nana with his head out a car window and Jihoon's elbow in the corner of the frame, and the car was his, she knew it was his, she knew it smelled like cherry air freshener and fries, and she had never been in a car in her life, here." },
          { s: 'jihoon', f: 'neutral', t: "...You're doing the face. You do this face when you see him. Like he's a cake." }
        ] },
        { t: "Why are you his father?", notes: 3, then: [
          { s: 'jihoon', f: 'serious', t: "Because I decided it. Because I was there the day you brought him home and I held him first. Your mom took a picture. I'm in a towel. I'd just been swimming. It's very upsetting. It's on your fridge." },
          { s: 'jihoon', f: 'happy', t: "He's my son. Legally. In my heart. He doesn't have to like it." }
        ] },
        { t: "He looks like Koromaru.", notes: 1, then: [
          { s: 'jihoon', f: 'surprised', t: "He looks NOTHING like Koromaru. Koromaru is a professional. Nana is a disaster. Take that back." }
        ] }
      ] },
      { n: "Across the atrium, Koromaru, who had followed them all the way from the dorm without being invited and was sitting very correctly by the bench where Junpei had left him, looked over at the sound of his name with polite interest." },
      { s: 'jihoon', f: 'serious', t: "Don't look at me like that. I'm not replacing anybody." },
      { s: 'jihoon', f: 'neutral', t: "...Okay, he's a very good boy. He's a very good boy. Don't tell Nana." },
      { n: "He got up and went and crouched in front of Koromaru and talked to him for five full minutes in a low earnest voice she couldn't hear, about, she suspected, Nana, and Koromaru listened to the whole thing and then put a paw on his knee, and Jihoon came back looking like someone had given him a medal." },
      { s: 'jihoon', f: 'neutral', t: "He gets it. He's got a person too. Somebody who's somewhere he can't get to. I could tell." },
      { choose: [
        { t: "Do you miss him? Nana?", notes: 3, then: [
          { s: 'jihoon', f: 'sad', t: "Every day. I don't even know if it's been days. My phone says it's still Saturday night. My stomach says it's been a month." },
          { s: 'jihoon', f: 'neutral', t: "He's probably fine. Your mom's probably feeding him. He's probably asleep on your bed, waiting for you to come back so he can sleep on your face." },
          { s: 'jihoon', f: 'serious', t: "I'm not going back without you. Just so you know. He'd never forgive me." }
        ] },
        { t: "(Lean your head on his shoulder.)", notes: 3, then: [
          { n: "She put her head on his shoulder. He went rigid like a man who'd been told a bee had landed on him. Then, slowly, he relaxed, and put his chin on top of her head, and said, very quietly, that her hair smelled wrong, and that it was fine, and that he'd get used to it." }
        ] }
      ] }
    ] },

    { after: '10/11', title: '4: the crane game', place: 'Paulownia Mall · Game Panic', time: 'After School', music: 'city', scene: [
      { n: "He'd been feeding the crane game for forty minutes. She'd stopped counting the coins at three thousand yen, which had taken a while, because he'd been changing them in small batches at the counter as if that made it less, and the girl at the counter had started greeting him by name." },
      { s: 'jihoon', f: 'serious', t: "It's an investment. You don't understand investments. Your dad understands investments. Your dad would respect this." },
      { n: "The prize was a plush sun with a face. Round, yellow, a little lopsided, with a stitched smile and two pink cheeks, wedged in the corner of the glass case under three penguins and a bear. He'd seen it the second they walked in and stopped so suddenly she'd walked into him." },
      { s: 'jihoon', f: 'neutral', t: "It's your poster. It's literally your poster. The sun with the face. You redid it four times until the cheeks were right. I watched. It was like watching someone defuse a bomb." },
      { s: 'jihoon', f: 'neutral', t: "I'm not leaving it in there. It's yours. It's in jail." },
      { n: "The claw came down. Caught the sun by one ray. Lifted it. Swung it over the chute, wobbling, the whole case seeming to hold its breath. And let go. The sun dropped back onto the penguins and lay there, smiling at the ceiling." },
      { n: "He put another coin in. He didn't even look at her. He just put another coin in, and his jaw was set, and there was a groove between his eyebrows she'd seen before, somewhere, in a different light, over a different glass case, and her chest went tight." },
      { n: "The claw slipping. The claw slipping again. Someone beside her feeding it coins anyway, and anyway, and anyway, with the same set jaw, in a mall that smelled of caramel corn instead of pretzels, in a blazer the same navy as this one, while she stood beside him holding a cup of tokens and telling him to give up and not meaning it at all." },
      { fragment: 'hoax-crane-game' },
      { n: "The star on Haenim's sash ticked, a tiny sound, a pin on a desk." },
      { choose: [
        { t: "You've done this before. For me.", notes: 3, then: [
          { s: 'jihoon', f: 'surprised', t: "..." },
          { s: 'jihoon', f: 'neutral', t: "Sixty-two times. Sixty-two times, at the mall at home, for a stupid little dog keychain. You said it looked like Nana. It did not look like Nana. I got it on sixty-three." },
          { s: 'jihoon', f: 'serious', t: "You put it on your bag and you never took it off. You never said thank you, either. You just put it on your bag." }
        ] },
        { t: "Give up. It's rigged.", notes: 2, then: [
          { s: 'jihoon', f: 'neutral', t: "You always say that." },
          { s: 'jihoon', f: 'neutral', t: "You never mean it. You're saying it right now and you don't mean it. I can tell. Your left eyebrow." }
        ] },
        { t: "(Take over the joystick.)", notes: 3, then: [
          { n: "She put her hand over his on the joystick. He let her steer. It didn't help, at all, the claw still slipped, but he laughed for the first time in forty minutes, and the girl at the counter looked over, and smiled, and quietly went and opened the back of the machine." }
        ] }
      ] },
      { n: "He got it on the next try, or the girl at the counter got it for him, depending on who you asked afterward, and he held it up in the noise and the lights of Game Panic like a fish he'd caught with his bare hands." },
      { s: 'jihoon', f: 'happy', t: "HA. HA. Light of your disgusting life. Say it." },
      { s: 'solar', f: 'neutral', t: "Light of my disgusting life." },
      { n: "He stopped laughing. He looked at her with the sun hanging out of his fist by one ray. She'd said it in exactly the voice she used to say it. Flat. Bored. Like she was reading it off a cereal box. Her voice. Her old voice. He put the sun into her arms and turned around and walked very fast to the bathroom and was gone for six minutes." }
    ] },

    { after: '10/18', title: '5: rightfully my job', place: 'Iwatodai Dorm · Lounge', time: 'Night', music: 'tender', scene: [
      { n: "The night after the tower he didn't come to the mall. He didn't text. He was on the lounge sofa at the dorm when she came down at nine, under Junpei's spare blanket, with his phone face down on his chest and his arm over his eyes, and he didn't take the arm away when she sat down on the other end." },
      { n: "She'd been there. In the floor full of ballot boxes that breathed, under a banner with her own face on it, when the thing at the top of the stairs had opened its slot like a mouth and he'd gone white, and swayed, and started, very quietly, to forget. She'd watched it happen. She'd watched him look at her and frown like she was a word on the tip of his tongue." },
      { n: "And then she'd watched him laugh, a big ugly furious laugh straight up into the green, and something had stood up behind him out of nowhere, grinning, swinging something heavy, and the ballot boxes had gone over like dominoes." },
      { s: 'jihoon', f: 'neutral', t: "Don't." },
      { s: 'jihoon', f: 'neutral', t: "Don't say it was cool. Junpei said it was cool. I'm going to throw up if one more person says it was cool." },
      { choose: [
        { t: "It wasn't cool. It was terrifying.", notes: 3, then: [
          { s: 'jihoon', f: 'neutral', t: "...Thank you." },
          { s: 'jihoon', f: 'neutral', t: "Thank you. Yeah. It was." }
        ] },
        { t: "(Pull his feet into your lap.)", notes: 3, then: [
          { n: "She pulled his feet into her lap, socks and all, the way you'd pull a blanket over someone, and he didn't take his arm off his eyes, but his whole body went loose all at once, like a string had been cut." }
        ] },
        { t: "It was a little bit cool.", notes: 1, then: [
          { s: 'jihoon', f: 'serious', t: "I hate you." },
          { s: 'jihoon', f: 'neutral', t: "...It was a little bit cool." }
        ] }
      ] },
      { s: 'jihoon', f: 'serious', t: "It said I could stop." },
      { s: 'jihoon', f: 'neutral', t: "That thing. It said I didn't have to remember you anymore. That it'd stop hurting. That I could go home to a Saturday where you were just a girl from school I used to know, and I'd be fine, I'd be totally fine, I'd have so much free time." },
      { s: 'jihoon', f: 'sad', t: "And I started to. Sol, I started to. You were standing right there and I was looking at you and your name was going." },
      { n: "He took his arm off his face. His eyes were red. He looked at the ceiling." },
      { s: 'jihoon', f: 'serious', t: "And I thought, absolutely not. Who's going to bring you ice cream? Junkyu? Junkyu doesn't even have a car." },
      { s: 'jihoon', f: 'neutral', t: "As your best friend it is rightfully my job. To remember you. That's the job. Somebody's got to do the job, and it's me, it's always been me, I'm number one, Cherry can fight me." },
      { s: 'jihoon', f: 'neutral', t: "...Did I look cool, though. Be honest. When the thing came up. Be completely honest." },
      { choose: [
        { t: "You looked terrifying.", notes: 3, then: [
          { s: 'jihoon', f: 'happy', t: "Terrifying is cool. Terrifying is the coolest kind of cool. Thank you. I can sleep now." }
        ] },
        { t: "You looked like you.", notes: 3, then: [
          { s: 'jihoon', f: 'neutral', t: "...What does that mean." },
          { s: 'solar', f: 'neutral', t: "Loud. Laughing. Not letting go of something you'd decided was yours." },
          { s: 'jihoon', f: 'sad', t: "...Yeah. Yeah, okay. That's me. That's literally me. You've known me for one month and you've got me exactly." }
        ] }
      ] },
      { choose: [
        { t: "You're number one.", notes: 3, then: [
          { s: 'jihoon', f: 'surprised', t: "..." },
          { s: 'jihoon', f: 'happy', t: "Say that again. Say it into my phone. I need it on record. Cherry is going to lose her mind." }
        ] },
        { t: "Thank you for keeping me.", notes: 3, then: [
          { s: 'jihoon', f: 'neutral', t: "Don't thank me. That's weird. You never thank me. You just steal my fries." },
          { n: "But he reached out without looking and grabbed her hand off the sofa cushion and held it, hard, on his chest, over his heart, the way you'd hold onto a railing on a ship, and he didn't let go for a long time." }
        ] }
      ] },
      { n: "Mitsuru came down at eleven to check the doors, and found them both asleep on the sofa, his feet in her lap and her hand still on his chest, and turned the lamp off, and did not, Yukari reported the next day, say a single word about it, which was the most frightening thing anyone had ever seen her do." }
    ] },

    { after: '10/26', title: '6: rivals', place: 'Paulownia Mall · Game Panic', time: 'After School', music: 'city', scene: [
      { n: "There was an air hockey table at the back of Game Panic that nobody played because the fan underneath it had died sometime in the nineties and the puck dragged like it was moving through soup, and that, apparently, was where the two of them had decided to settle it." },
      { n: "Settle what, nobody could say. Jihoon on one side, sleeves pushed up, mallet held like a weapon. Jungwon on the other, blazer buttoned, mallet held like a fountain pen. Both of them smiling. Neither of them meaning it." },
      { s: 'jungwon', f: 'happy', t: "First to seven, then? Unless you'd prefer five. Some people prefer five." },
      { s: 'jihoon', f: 'serious', t: "Don't do the dimples at me, Yang." },
      { n: "Solar sat on the skee-ball lane next door with a cup of tokens and watched them play the slowest, most vicious game of air hockey in the history of the world. Jungwon played like he played everything, precise angles off the wall, the puck going exactly where he'd decided. Jihoon played like he was trying to break the table." },
      { s: 'jihoon', f: 'serious', t: "Sol. Sol. Who are you rooting for." },
      { s: 'jungwon', f: 'neutral', t: "You don't have to answer that." },
      { s: 'jihoon', f: 'serious', t: "She does have to answer that. That's what rooting is. It's a whole concept." },
      { choose: [
        { t: "Jihoon.", notes: 3, then: [
          { s: 'jihoon', f: 'happy', t: "HA." },
          { n: "He scored. Off the wall. Badly. It went in anyway. Jungwon looked at the puck in the slot for a second and then bowed his head to Solar, very slightly, like a gentleman accepting the verdict of a court he'd suspected was rigged." }
        ] },
        { t: "The table. I'm rooting for the table.", notes: 2, then: [
          { s: 'jungwon', f: 'happy', t: "That's fair. The table's suffered the most." },
          { s: 'jihoon', f: 'serious', t: "That's a cop-out. That's a political answer. You sound like him." }
        ] },
        { t: "(Don't answer. Feed tokens into the skee-ball.)", notes: 2, then: [
          { n: "She didn't answer. Both boys glanced at her, and then at each other, and for one second they were exactly the same person, waiting for the same thing, and both of them saw it, and both of them hated it." }
        ] }
      ] },
      { n: "Jungwon won. Seven to six. He laid his mallet on the table very neatly and thanked Jihoon for the game, and Jihoon said a word to him that Mitsuru would have confiscated, and Jungwon smiled like he'd been given a compliment and went off to buy everyone a drink." },
      { n: "He came back with three cans from the vending machine by the door. He held one out to Solar first, and one to Jihoon second, without a word, and stood there with his own, waiting, the way you'd wait for a rival to shake your hand after a match." },
      { n: "Jihoon looked at the can. He looked at it for a long time. Then he took it." },
      { s: 'jihoon', f: 'neutral', t: "...Thanks, Yang." },
      { s: 'jungwon', f: 'happy', t: "You're very welcome, Park." },
      { s: 'jihoon', f: 'serious', t: "Don't. Don't do the dimples. I said thanks. That's the most you get. That's the most anyone's ever gotten." },
      { s: 'jihoon', f: 'neutral', t: "He's fine." },
      { s: 'jihoon', f: 'serious', t: "I hate him. He's fine. He's fine and I hate him. Both. That's legal." },
      { s: 'solar', f: 'neutral', t: "Why do you hate him?" },
      { s: 'jihoon', f: 'neutral', t: "Because he's good at things. Because he's polite. Because he looks at you like he's taking notes." },
      { s: 'jihoon', f: 'serious', t: "And because I don't get to decide who looks at you. I know. I KNOW. You've told me. Like a hundred times. You'd tell me right now if you remembered, you'd do the eyebrow." },
      { choose: [
        { t: "(Do the eyebrow.)", notes: 3, then: [
          { n: "She did the eyebrow. She had no idea which eyebrow it was. Her face found it on its own, the left one, a very slight and devastating lift, and he looked at it and put both hands over his face and groaned like a man who had been shot in a movie." },
          { s: 'jihoon', f: 'happy', t: "THERE it is. God. I missed that. I hate it. I missed it so much." }
        ] },
        { t: "You don't get to decide.", notes: 3, then: [
          { s: 'jihoon', f: 'neutral', t: "I know." },
          { s: 'jihoon', f: 'neutral', t: "I'm still going to bring you ice cream either way. Just so we're clear. Nobody decides that but me." }
        ] }
      ] }
    ] },

    { after: '11/7', title: '7: hate club', place: 'Paulownia Mall · Arcade', time: 'Evening', music: 'city', scene: [
      { n: "Since Halloween the arcade at Paulownia Mall had been louder than it had any right to be, because there were now four more of them, and every one of them talked at once." },
      { n: "Junkyu, small and round-faced, who had hugged her around the middle in the middle of the green street the night he came through and had not, as far as she could tell, fully stopped hugging her since. Asahi, who sat on the back of a bench with his hood up saying the meanest possible thing about everything in a voice so quiet you had to lean in to be insulted. Hyunsuk, who laughed at Asahi's every word like it was a tremendous gift. Jaehyuk, who said *please* and *thank you* to the change machine and whom everyone, she'd noticed, went quiet for when he actually talked." },
      { n: "And Jihoon, in the middle of it, loudest, with one arm around her neck like she was a trophy he'd won and was refusing to give back." },
      { s: 'junkyu', f: 'happy', t: "Sol! Sol, do you need ice cream and hugs? I already did the hug. Jihoon has the ice cream money." },
      { s: 'jihoon', f: 'serious', t: "I do NOT have the ice cream money. I've spent the ice cream money. I've invested the ice cream money in a crane game." },
      { s: 'asahi', f: 'neutral', t: "He's been investing in that crane game for a month. It's the worst portfolio in Asia." },
      { s: 'hyunsuk', f: 'happy', t: "LMAO. Asahi. Asahi." },
      { s: 'jaehyuk', f: 'neutral', t: "Please don't say *LMAO* out loud, Hyunsuk." },
      { n: "They had a group chat at home. Jihoon had told her its name with enormous pride and no shame at all. *Park Jihoon Hate Club.* He'd named it himself, he said, to save them all time." },
      { s: 'jihoon', f: 'happy', t: "Look at this. Look at all of them. All these losers, here, because of you. You're welcome, Sol. I'm the reason. I texted them all first." },
      { s: 'asahi', f: 'neutral', t: "He did not text us all first. He texted the group chat twenty-four times in capitals." },
      { choose: [
        { t: "Thank you. All of you. For coming.", notes: 3, then: [
          { n: "It went very quiet. Even the arcade seemed to dip. Asahi looked at her from under his hood like a cat that had been unexpectedly picked up." },
          { s: 'asahi', f: 'neutral', t: "...Okay, that's weird. She's never thanked anyone in her life. She's thanked Junkyu maybe twice." },
          { s: 'junkyu', f: 'happy', t: "Three times! I keep count!" },
          { s: 'jihoon', f: 'neutral', t: "Leave her alone. She's allowed to be weird. She's been through a lot. She's been to a whole other school." }
        ] },
        { t: "Is the club for hating him, or for him?", notes: 3, then: [
          { s: 'hyunsuk', f: 'happy', t: "Both. Mostly hating. A little bit for." },
          { s: 'jaehyuk', f: 'neutral', t: "It was for you, actually. Originally. It was for when you were sad. He just named it." },
          { n: "Jihoon's arm around her neck went very tight, and then let go, and he walked off to the crane game without a word, and everyone pretended not to have noticed his ears." }
        ] },
        { t: "(Hug Junkyu back. Properly.)", notes: 2, then: [
          { n: "She hugged Junkyu back, properly, both arms, and he made a sound like a kettle and held on, and over his shoulder she saw Jihoon watching with the face of someone watching his own dog greet somebody else first." }
        ] }
      ] },
      { n: "Later, walking back to the station in a loose noisy knot, Jihoon fell into step beside her and bumped her shoulder with his, on purpose, the way you'd knock on a door you knew was open." },
      { s: 'jihoon', f: 'neutral', t: "They're all scared. Just so you know. They're being loud because they're scared. Junkyu cried in the bathroom the first night. Asahi made Hyunsuk sleep on his floor." },
      { s: 'jihoon', f: 'serious', t: "I'm not scared. I'm the only one who's not scared." },
      { s: 'solar', f: 'neutral', t: "You're the most scared." },
      { s: 'jihoon', f: 'neutral', t: "...Okay, I see you got your mouth back before your memory. Great. Love that for me." }
    ] },

    { after: '11/21', title: '8: the quiet part', place: 'Iwatodai Dorm · Rooftop', time: 'Night', music: 'night', scene: [
      { n: "He'd brought ice cream to the roof in November, which was insane, and two spoons, and a blanket he'd stolen from the guesthouse, which he said was technically Mitsuru's, which made it technically fine." },
      { n: "The wind was coming off the bay sharp enough to cut. They sat with their backs against the water tank and the blanket over their knees and the tub between them going nowhere, frozen hard as a stone the way it had been every single day since he'd come through, and they ate it anyway, scraping the top." },
      { s: 'jihoon', f: 'neutral', t: "It doesn't melt. Did you notice? It's been in the guesthouse freezer and the dorm freezer and my backpack and your desk for two months and it hasn't melted once. I've eaten a third of it. It keeps being the same amount." },
      { s: 'jihoon', f: 'neutral', t: "I think it's waiting for something." },
      { s: 'solar', f: 'neutral', t: "For what?" },
      { s: 'jihoon', f: 'serious', t: "For me to say whatever I was going to say when I got to your house. That night. Before the street went green." },
      { n: "He didn't look at her. He scraped the spoon across the top of the ice cream very carefully, like he was trying to write something on it." },
      { s: 'jihoon', f: 'neutral', t: "You know what I said in the group chat. Before school started. When you were sad about something and wouldn't say what." },
      { s: 'jihoon', f: 'neutral', t: "*I am the fucking light of your disgusting life.* In the chat. In front of everybody. Asahi screenshotted it. It's his lock screen. He thinks it's a joke." },
      { s: 'jihoon', f: 'sad', t: "Everybody thinks it's a joke. I wrote it at one in the morning in my car outside your house and deleted it four times before I sent it." },
      { s: 'jihoon', f: 'neutral', t: "Here's the thing about me, Sol. Here's my whole thing. I say everything loud. Everything. I say I'm the light of your life. I say I'm your number one. I say I'm the father of your dog. I say it all so loud, all the time, in front of everyone, that nobody ever thinks I mean any of it." },
      { s: 'jihoon', f: 'serious', t: "That's the trick. If you say the quiet part loud enough, it stops being a part at all. It's just a bit. It's just Jihoon." },
      { s: 'jihoon', f: 'sad', t: "And then you didn't know me, and I didn't have a bit anymore. And it turns out I meant all of it. Every single dumb thing. I meant it since we were like eight." },
      { n: "The wind took the edge of the blanket and lifted it and dropped it. Somewhere below, a train went over the bridge, all lit up." },
      { route: [
        { t: "I know. I always heard it.", route: 'romance', notes: 3, then: [
          { s: 'jihoon', f: 'surprised', t: "..." },
          { n: "It came out of her certain, a thing she'd always known and never said, the way you know the shape of your own front door in the dark. She didn't remember. She didn't need to. Her whole body had been listening to him say it loud for fourteen years." },
          { s: 'jihoon', f: 'happy-2', t: "You— since when. Since WHEN. Did you just— are you messing with me right now? On the ROOF? In NOVEMBER?" },
          { n: "She leaned over and kissed him, quickly, to shut him up, which she had a feeling she'd wanted to do for about fourteen years too, and he went absolutely silent for the longest stretch of time she'd ever known him to, which was about four seconds." },
          { s: 'jihoon', f: 'happy-2', t: "...Okay. Okay. Wow. Okay. That's. Okay." },
          { s: 'jihoon', f: 'happy', t: "I'm going to need you to do that again so I can be sure it wasn't the wind." }
        ] },
        { t: "You're my best friend. That's not a bit either.", route: 'friend', notes: 3, then: [
          { s: 'jihoon', f: 'neutral', t: "..." },
          { s: 'jihoon', f: 'neutral', t: "No. It's not." },
          { n: "He looked at her for a long time in the dark. Then he nodded, once, the way you'd nod at a call you'd known the ref was going to make, and was glad he'd made it fairly." },
          { s: 'jihoon', f: 'happy', t: "Okay. Good. That's still number one. Cherry can still fight me." },
          { s: 'jihoon', f: 'neutral', t: "I'm still going to say it loud, though. I'm not stopping. You'll just have to know I mean it." }
        ] }
      ] },
      { n: "When they went down, the ice cream tub was lighter. She could feel it. He could too. He held it up to the stairwell light and looked at it for a long time, frowning, and then put the lid back on very gently, like it might wake up." }
    ] },

    { after: '12/12', title: '9: little brother', place: 'Paulownia Mall · Shop Windows', time: 'After School', music: 'city', scene: [
      { n: "December had come to Paulownia Mall the way it came to every mall in the world, all at once and with no warning, so that one day there were pumpkins and the next there were silver bells and a tree in the atrium twice the height of the fountain, and a speaker hidden somewhere in it playing the same four Christmas songs on a loop that had already started to get into people's teeth." },
      { n: "Jihoon was shopping for Nana." },
      { s: 'jihoon', f: 'serious', t: "He needs a coat. It's winter at home. Probably. Maybe. I don't know what month it is at home. But it's winter here, and I'm not taking any chances with my son." },
      { s: 'solar', f: 'neutral', t: "He's a dog. He has fur. He's mostly fur." },
      { s: 'jihoon', f: 'neutral', t: "That's exactly what someone who doesn't love him would say." },
      { n: "The pet shop on the second floor had a rack of dog coats in every color and three of them were large enough for a dog the size of a sofa, and he held each one up in turn against Solar, because she was, he said, approximately Nana-shaped, and squinted at her like a tailor." },
      { choose: [
        { t: "The red one.", notes: 2, then: [
          { s: 'jihoon', f: 'neutral', t: "Too Christmas. He'll look like he works at a department store." }
        ] },
        { t: "The yellow one. With the little sun on the back.", notes: 3, then: [
          { s: 'jihoon', f: 'surprised', t: "..." },
          { s: 'jihoon', f: 'neutral', t: "Of course you picked the sun one. Of course you did." },
          { n: "He bought it. He didn't even look at the price. He held it against his chest at the register like it was already full of dog." }
        ] },
        { t: "(Try one on yourself.)", notes: 3, then: [
          { n: "She put the blue one on over her blazer. It didn't close. It came down to her ribs. She stood in the middle of the pet shop in a dog coat with her arms out, and he laughed so hard he had to sit on a bag of kibble, and the shop assistant took a photo for the store's bulletin board." }
        ] }
      ] },
      { n: "On the way out they passed the window of Be Blue V, all silver and glass and little velvet boxes, and he slowed down, which he never did, and looked in, and kept walking, and then stopped and came back and looked again." },
      { n: "Junkyu had tagged along, because Junkyu always tagged along, and he was holding the coat bag like a baby, and had already asked twice if he could be Nana's godfather, and been told twice by Jihoon that the position was filled, by Jihoon, who was also the father, and that it was a very exclusive family." },
      { s: 'junkyu', f: 'sad', t: "Can I at least be the uncle?" },
      { s: 'jihoon', f: 'neutral', t: "...Fine. Uncle. Probationary uncle. Cherry's also applied. It's competitive." },
      { s: 'jihoon', f: 'neutral', t: "When we're home. I'm going to buy you something stupid for Christmas. Like I always do. And you're going to buy me something stupid. Like you always do. And then we're going to argue about whose was stupider." },
      { s: 'jihoon', f: 'serious', t: "And everybody's going to ask you things. What you want. Who you're going to be. What you're going to do next year." },
      { s: 'jihoon', f: 'neutral', t: "I'm not going to ask you anything. I just want you to know that. Everybody else wants the candidate. I'll take whoever's in the car." },
      { ifRoute: 'romance', then: [
        { n: "He bumped her shoulder with his. Then, like he'd thought better of it, he took her hand instead, in the middle of the mall, in front of the Christmas tree, and swung it a little, and didn't say anything about it, loudly." },
        { s: 'jihoon', f: 'happy', t: "Light of your disgusting life." },
        { s: 'solar', f: 'neutral', t: "Light of my disgusting life." },
        { s: 'jihoon', f: 'happy-2', t: "...Yeah. Okay. I'm going to need a minute." }
      ], else: [
        { n: "He bumped her shoulder with his, on purpose, hard enough to make her stagger into a display of scented candles, and then caught her by the back of her blazer before she could take any down with her." },
        { s: 'jihoon', f: 'happy', t: "Light of your disgusting life." },
        { s: 'solar', f: 'neutral', t: "Light of my disgusting life." },
        { s: 'jihoon', f: 'happy', t: "Correct. Gold star. Nana's proud of you." }
      ] }
    ] },

    { after: '1/16', title: '10: the light of your life', place: 'Iwatodai Dorm · Front', time: 'Night', music: 'tender', scene: [
      { n: "The front steps of the dorm, in the dark, in January. It was colder than it had been in September by a whole other season, and the stone came up through her skirt like the cold off a lake, and he was sitting exactly where he'd sat that first night, elbows on his knees, the tub of ice cream on the step beside him." },
      { n: "It was nearly empty. They'd eaten it all winter. A spoonful at a time, on the roof, in the lounge, at the guesthouse kitchen table at two in the morning. It had never melted, and it had never run out, and tonight, when she sat down beside him and looked into it, there was exactly one spoonful left." },
      { s: 'jihoon', f: 'neutral', t: "I think that's it. I think that's the last one." },
      { s: 'jihoon', f: 'neutral', t: "Whatever it was waiting for, I think it's done waiting." },
      { n: "He held out the spoon. Handle first. To her." },
      { choose: [
        { t: "(Eat it.)", notes: 3, then: [
          { n: "She ate it. Cookies and cream. It was the best and worst spoonful of ice cream she'd ever had, and halfway through it something came up through her the way the cold came up through the step, all at once, from the ground." }
        ] },
        { t: "(Split it. Half each.)", notes: 3, then: [
          { n: "She split it with the edge of the spoon, carefully, exactly, and fed him half, and ate half, and halfway through her half something came up through her the way the cold came up through the step, all at once, from the ground." }
        ] }
      ] },
      { n: "A bowl cut. Glue. A preschool with a fish tank in the corner and a boy who pushed her into it, nearly, and then cried harder than she did when he got in trouble. A car that smelled of cherry air freshener and fries at six-thirty in the morning, and a horn honked twice outside her house, every school day, every year, even after she'd told him to stop. A dog in a paper hat. A text at midnight, all capitals. A tub of ice cream on her doorstep with a sticky note on the lid that said *X REASON = ?*" },
      { n: "His voice. Not this one, here, careful on a cold step. The loud one. In her ear on the phone, in the group chat, across a classroom, in front of her house. Every day of her life." },
      { s: 'solar', f: 'neutral', t: "...Jihoon." },
      { n: "It wasn't how she'd been saying it for four months. Polite, careful, like a name off a list. It came out flat and bored and exactly right, the way you'd say the name of someone who'd been in your house so long he'd worn a groove in your sofa." },
      { s: 'jihoon', f: 'surprised', t: "..." },
      { s: 'jihoon', f: 'sad', t: "Say it again." },
      { s: 'solar', f: 'neutral', t: "Park Jihoon. You absolute idiot. You came through a hole in the world with a tub of ice cream." },
      { n: "He laughed. He laughed so hard he had to put his head down on his knees, and the laugh turned into something else halfway through, and then back into a laugh, and she put her arm around him and held on and let him do both." },
      { s: 'jihoon', f: 'happy', t: "Of course I did. Of course I did. As your best friend it is RIGHTFULLY MY JOB." },
      { ifRoute: 'romance', then: [
        { s: 'jihoon', f: 'happy-2', t: "And as your— whatever I am now. As that, too. I don't know the word. I'll think of a loud one." },
        { n: "He kissed her on the cold step with ice cream on his mouth, and it was stupid and sticky and freezing and the best thing that had ever happened on those steps, and somewhere upstairs, through a window, Junpei cheered, and was audibly hit with a pillow." }
      ], else: [
        { s: 'jihoon', f: 'neutral', t: "Number one. Still. Forever. Write it down." },
        { n: "He put the empty tub on his head like a hat. She took a picture. Somewhere upstairs, through a window, Junpei cheered, and was audibly hit with a pillow." }
      ] },
      { s: 'jihoon', f: 'neutral', t: "Hey. You're the light of my disgusting life. Did you know that?" },
      { s: 'jihoon', f: 'neutral', t: "That was the quiet part. I just said it quiet. First time. You're welcome." }
    ] }
  ],

  afterMax: [
    { title: 'six-thirty', place: 'Iwatodai · Riverside', time: 'Early Morning', scene: [
      { n: "He was outside the dorm at six-thirty in the morning, honking. He didn't have a car. He was honking with his mouth, two short honks, exactly the way he'd honked outside her house every school day of her life." },
      { s: 'jihoon', f: 'happy', t: "Your ride's here. Your ride is walking. Your ride has no car and great legs. Let's go. The birds are up." },
      { n: "They walked the river path with Koromaru, who had decided he was Nana's understudy, and Jihoon narrated the birds incorrectly, and she let him." },
      { choose: [
        { t: "(Throw the ball for Koromaru.)", notes: 3, then: [
          { s: 'jihoon', f: 'neutral', t: "Good throw. Nana would never bring it back. Nana would sit on it. Koromaru's a professional." }
        ] },
        { t: "You honked twice. You always honk twice.", notes: 3, then: [
          { s: 'jihoon', f: 'happy-2', t: "Once is rude. Three's desperate. Two's a love language. Shut up." }
        ] }
      ] }
    ] },
    { title: 'x reason', place: 'Iwatodai Dorm · Lounge', time: 'Night', scene: [
      { n: "A tub of ice cream on the lounge table. A new one. It melted, a little, at the edges, the way ice cream was supposed to. A sticky note on the lid in his blocky capitals. *X REASON = ?*" },
      { s: 'jihoon', f: 'neutral', t: "I need to know what size to buy. That's the whole system. You tell me the reason, I bring the right size." },
      { choose: [
        { t: "No reason. I just wanted you here.", notes: 3, then: [
          { s: 'jihoon', f: 'happy-2', t: "...That's not a reason. That's a family size. That's a family size reason." }
        ] },
        { t: "Exams.", notes: 2, then: [
          { s: 'jihoon', f: 'neutral', t: "Medium. Exams are a medium. I'm not going to argue." }
        ] }
      ] },
      { ifRomance: 'jihoon', then: [
        { n: "They ate it on the sofa with one spoon, which he said was more efficient, which it was not." }
      ], else: [
        { n: "They ate it on the sofa with two spoons, and fought over the cookie bits, and he won, and gave them back." }
      ] }
    ] }
  ],

  christmas: { place: 'Paulownia Mall · Central Atrium', time: 'Evening', scene: [
    { n: "Christmas Eve, and the mall was snowing indoors, little white paper flakes from a machine above the tree, and Jihoon was standing under it with two gift bags and the face of a man about to win an argument." },
    { s: 'jihoon', f: 'happy', t: "Okay. Okay. On three. Stupidest gift wins. One, two—" },
    { n: "Hers was a keychain from the crane game, a small lopsided dog, because she'd lost on purpose until it came out. His was a keychain from the crane game, a small lopsided sun, because he'd lost on purpose until it came out." },
    { s: 'jihoon', f: 'surprised', t: "..." },
    { s: 'jihoon', f: 'neutral', t: "How much did you spend." },
    { s: 'solar', f: 'neutral', t: "Don't." },
    { choose: [
      { t: "(Put his on your bag. Never take it off.)", notes: 3, then: [
        { s: 'jihoon', f: 'happy-2', t: "You did that last time. You did that exactly last time. Oh my God." }
      ] },
      { t: "(Put yours on his keys. Next to the car key he can't use.)", notes: 3, then: [
        { s: 'jihoon', f: 'happy', t: "Now Nana's in the car. Now Nana's always in the car. Merry Christmas, Sol." }
      ] }
    ] }
  ] }
});
