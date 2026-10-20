/* Hyein · ? Revamp social link data (femc-game.html). Format: link fields in assets/femc/game/core.js, scene lines in scene.js.
   Searcher (Runners), friendship. Solar's sorority sister: the Fashion major, the tallest of the girls, excitable, says
   what she thinks louder than she should. Her canon gift (Runners Ch 65): when something is off with Solar she becomes the
   center of attention, so the room looks at her instead. Here that is her whole arc: the loud one who shines so Solar
   doesn't have to (Haenim's own myth, the girl who hides by shining, turned inside out), learning she can stop.
   A separate link from Hanni (Kat's ruling); they appear in each other's scenes. No Persona (Kat's ruling). Her crossing
   with Hanni (9/12), "names, then" (9/13), the Halloween wall (10/31), the first-party floor (11/21, Hanni stands in front
   of her) and "come home, sol" (12/14) are story events; the ranks sit around them. She lives on the dorm's second floor
   (a4-names), sews on a machine Mitsuru found in a storeroom, and dries her hair at three in the morning (plot doc §14).
   Canon echoes (Runners_text): the Winx chat (UR GONNA BE STELLA / LTRLY THE FAIRY OF THE SUN AND MOON / ITS UR NAME THIS
   WAS PREDESTINED FR / small wings?! :) / ..fine), the bathroom full of steam and four costume bags, "you're literally
   Stella" / "Please don't start calling me that." / "I won't, Stella.", the Sigma costume contest (the appropriate price;
   "my rates have gone up, but this is proof of my legacy"), the girl who DM'd her about prices, coats over costumes as a
   personal attack, "I hear criticism and choose to ignore her", "chillax", Solar's long black coat her mother bought her.
   Nothing from home moves Runners' plot; nobody's secrets are told.
   Flags this link sets (all its own): hyein-menace (r1, Solar says "ur so annoying"), hyein-stella (r3, she asks for the
   costume again), hyein-yelled (r4), hyein-shop (r6, commissions in Iwatodai), hyein-dress-run / -pockets / -red (r9, what
   Solar picks). They pay off in later ranks and afterMax. Reads the story flag call-R (12/14) in rank 10.
   Texting voice: lowercase, caps when excited, ur, ltrly, fr, ofc. Arcana: '?' (open question, plot doc §16.6). */
(window.FEMC_GAME_LINKS ||= []).push({
  id: 'hyein', name: 'Hyein Lee', short: 'Hyein', arcana: '?', numeral: '', from: 'Runners',
  kind: 'searcher', world: 'R', romance: null,
  starts: '9/12', gate: { R: 3 },
  home: { area: 'mall', spot: 'Shop Windows', slot: 'after', days: [0, 2, 4, 6],
          hint: 'Afternoons along the shop windows in Paulownia Mall, judging every mannequin out loud.' },
  approach: "A very tall girl with very long, very straight hair is standing in front of a shop window in Paulownia Mall telling a mannequin, out loud, exactly what's wrong with its jacket, and she spots you in the glass and turns around already pointing.",
  cast: {},
  invite: {
    ask: [
      "SOL. come to the mall. i need a body",
      "r u busy. dont be busy. i made u something",
      "EMERGENCY. fashion emergency. come now",
      "the shop on the second floor got new coats and i need to touch them with a witness",
      "hanni says im being too much today. come be too much with me",
      "ok i need ur opinion and then im going to ignore it. come",
      "my beloved solar. my sun and moon. come hold pins",
      "theres a mannequin here wearing a belt UNDER a cardigan. i cant do this alone",
      "the fabric lady has a new bolt and she did the gasp. u know what that means",
      "come stand in front of a mirror for me. its for science. its for fashion. same thing",
      "im being normal today i promise. come see me be normal",
      "ok real question. how do people here wear THIS MUCH beige. come help me understand"
    ],
    ok: ["YAY. shop windows. 10 min", "ok!!!! dont dress up. i'll fix u", "OK. bring ur whole self", "YESSS. hurry. the mannequin is winning", "ok ok ok. wear the coat. u know which coat", "perfect. ur my favorite. dont tell hanni"],
    no: ["ok but ur missing a LOOK", "fine. drink water. ttyl", "ok!! tmrw then. i'll still be here being right", "boo. ok. i'll describe it to u later in detail. so much detail", "fine. chillax. go do ur midnight thing", "ok 😔 the mannequin and i will be fine. probably"]
  },
  hangouts: [
    [
      { place: 'Iwatodai Strip', time: 'After School', soft: true },
      { n: "Hyein had found a fabric shop on the strip run by an old woman who spoke no English and needed none, and the two of them had developed a whole language made of pointing and gasping, and Solar was now standing in the doorway with the bell still going over her head, watching it happen, which was a little like watching two birds who had found out they were the same kind of bird." },
      { n: "The shop smelled of dust and starch and the radiator, and every wall was bolts of cloth stacked to the ceiling in an order only the old woman understood, and Hyein was in the middle of it with both arms out, like the room was a song she knew the words to." },
      { s: 'hyein', f: 'happy', t: "She has VELVET. Sol. She has a velvet in a color I have never seen. It's like if wine was sad." },
      { choose: [
        { t: "(Touch the velvet.)", notes: 3, then: [
          { n: "She touched it. It was very soft, and it went darker under her fingers and lighter when she lifted them, like grass does when the wind goes over it. The old woman watched her touch it and said something approving, and Hyein translated it, wrongly and confidently, as *your friend has taste.*" },
          { s: 'hyein', f: 'serious', t: "She's never said that to me. All the times I've been in here. Not once. You walk in and get *taste* on the first day." }
        ] },
        { t: "What would you make with it?", notes: 3, then: [
          { s: 'hyein', f: 'serious', t: "A coat. Long. For you. Obviously. You'd look like a villain in a period drama. You'd look like you were about to inherit something." },
          { s: 'hyein', f: 'neutral', t: "...Which you are. Which is why you'd hate it. Which is why I'd make it anyway." }
        ] },
        { t: "Do you have money for velvet?", notes: 1, then: [
          { s: 'hyein', f: 'neutral', t: "No. Mitsuru gave me an envelope. I'm being responsible. I'm just going to look at it. With my hands." }
        ] }
      ] },
      { n: "She bought half a meter of it anyway, with her own coins, counting them out onto the counter one at a time while the old woman watched with the patience of someone who had seen a lot of girls fall in love with a lot of cloth, and she carried it home under her arm like a cat." },
      { ifRank: { hyein: 6 }, then: [
        { s: 'hyein', f: 'happy', t: "She gave me a discount. Did you see? She does that now. We have a relationship." }
      ] }
    ],
    [
      { place: 'Iwatodai Dorm · Front', time: 'After School', soft: true },
      { n: "Hyein was sketching on the dorm's front steps with her knees up and her sketchbook propped on them, drawing the people walking past on the street below, and every single one of them was wearing something better than what they were actually wearing." },
      { s: 'hyein', f: 'neutral', t: "That man. Look at that man. He's wearing a beige jacket. I've given him a camel coat. He deserves it. He's had a hard day. Look at his face." },
      { n: "Yukari came up the steps behind them with her bag over one shoulder and a pink cardigan buttoned exactly once at the top, and Hyein's pencil stopped mid-line, and she turned all the way around on the step to watch her go in, the way you'd turn to watch a car you liked." },
      { s: 'yukari', f: 'surprised', t: "...What? Is something on me?" },
      { s: 'hyein', f: 'serious', t: "No. Nothing. You're a pink cardigan girl. I respect it. One button. Very brave. Carry on." },
      { s: 'yukari', f: 'neutral', t: "...Thanks? I think?" },
      { n: "The door shut behind her. Hyein drew her in from memory in about nine seconds, and didn't change a single thing about her, and showed Solar the page with the air of a woman presenting evidence." },
      { choose: [
        { t: "Do me.", notes: 3, then: [
          { n: "She drew Solar in four quick lines. Not in a coat. In the Gekkoukan uniform, exactly as she was, with the armband, with her hair falling in her face. Then she looked at it and frowned and didn't change anything." },
          { s: 'hyein', f: 'neutral', t: "...Huh. I don't want to fix you. That's new. Don't let it go to your head." }
        ] },
        { t: "Give that kid a cape.", notes: 2, then: [
          { s: 'hyein', f: 'happy', t: "A CAPE. Yes. He's earned it. He's been holding his mom's bag for twenty minutes." }
        ] },
        { t: "You didn't fix Yukari either.", notes: 2, then: [
          { s: 'hyein', f: 'neutral', t: "Some people are already doing it on purpose. You can tell. You leave them alone. It's a professional courtesy." }
        ] }
      ] }
    ],
    [
      { place: 'Iwatodai Dorm · Lounge', time: 'Evening', soft: true },
      { n: "Hyein had decided Koromaru needed a scarf. Ken had decided Koromaru did not need a scarf. The two of them were in the lounge negotiating it like a treaty, while Koromaru sat between them looking from one to the other with the patient dignity of a dog who could hear his name." },
      { s: 'ken', f: 'neutral', t: "He doesn't get cold. He's a Shiba. It's in the breed." },
      { s: 'hyein', f: 'serious', t: "Everyone gets cold, Ken. Everyone. It's in the breed of being alive." },
      { choose: [
        { t: "(Side with Ken.)", notes: 2, then: [
          { s: 'hyein', f: 'surprised', t: "BETRAYAL. In my own home. Which isn't my home." },
          { s: 'ken', f: 'happy', t: "Thank you, Solar-san. Someone in this building is reasonable." },
          { n: "Koromaru, who had been following the vote closely, got up, walked over to Hyein, and lay down across her feet, which settled nothing and was, Ken admitted, very unfair." }
        ] },
        { t: "(Side with Hyein.)", notes: 3, then: [
          { n: "Ken looked at the two of them, outnumbered, and sighed like a man three times his age, and permitted one scarf, red, on a trial basis. Koromaru wore it with enormous pride for the rest of the evening and refused to let anyone take it off." }
        ] },
        { t: "Ask Koromaru.", notes: 3, then: [
          { s: 'koromaru', f: 'happy', t: "Woof!" },
          { s: 'hyein', f: 'happy', t: "He said yes. You heard him. Ken, you heard him." },
          { s: 'ken', f: 'serious', t: "He says that about everything." },
          { s: 'hyein', f: 'neutral', t: "So do I. It's a valid lifestyle." }
        ] }
      ] }
    ],
    [
      { place: 'Iwatodai Dorm · Lounge', time: 'Evening', soft: true },
      { n: "Hyein had Aigis on a dining chair in the middle of the lounge, which was not a sentence anyone in the dorm had expected to hear, in a cream sweater three sizes too big that Hyein had found at the back of the lost property box at the station and washed twice, and was circling her slowly with a pin in her teeth, the way a sculptor circles a block of marble she has decided is hiding a horse." },
      { s: 'aigis', f: 'neutral', t: "This garment provides no tactical advantage." },
      { s: 'hyein', f: 'neutral', t: "Neither do I. Hold still." },
      { s: 'aigis', f: 'flustered', t: "I am always still. I am the stillest person in this building." },
      { s: 'hyein', f: 'serious', t: "You're still like a mannequin. I need you still like a girl on a Saturday. It's different. It's in the shoulders. Drop them. More. Like you just remembered there's no school tomorrow." },
      { n: "Aigis looked at Solar over Hyein's head, very calmly, in the way she did when she wanted a second opinion and didn't know that was what she wanted." },
      { choose: [
        { t: "Like you're waiting for someone you like.", notes: 3, then: [
          { n: "Aigis's shoulders came down. Not all the way. About an inch. Her hands, which had been flat on her knees, turned over a little, so the backs of them lay against the cloth instead." },
          { s: 'hyein', f: 'surprised', t: "...Oh. Oh, okay. Nobody move. Sol, look at her. She looks like she's about to go get a coffee with someone." },
          { s: 'aigis', f: 'happy', t: "I do not drink coffee." },
          { s: 'hyein', f: 'happy', t: "You don't have to. That's the trick. You just have to look like you might." }
        ] },
        { t: "She looks good, Hyein.", notes: 2, then: [
          { s: 'hyein', f: 'neutral', t: "She looks *great.* She looks like she's holding her breath. Those aren't the same." }
        ] },
        { t: "(Sit on the floor and watch.)", notes: 2, then: [
          { n: "Solar sat on the rug with her back against the sofa and watched Hyein work, and it was, she found, the kind of thing you could watch for a long time, somebody very good at something doing it in a room full of people who'd stopped noticing they were watching." }
        ] }
      ] },
      { n: "When it was done the sweater fell right, soft at the neck and loose at the wrists, and Aigis stood and looked at herself in the dark glass of the television for a long moment, turning her arm over, and then said, to nobody, that it was warm, as though she were reporting a fact she hadn't been told to look for." }
    ],
    [
      { place: 'Paulownia Mall · Karaoke', time: 'After School', soft: true },
      { n: "Mandragora's song list was a binder. An actual binder, laminated, the pages soft with use, and Hyein had been through it twice in the back booth with her finger running down every column and her face getting more and more stricken, like someone reading a list of the dead and not finding a name she was hoping to find." },
      { s: 'hyein', f: 'sad', t: "It's not in here. My song. My actual favorite song in the world. It's not in here. It's not anywhere. It doesn't EXIST yet, Sol. It's going to come out in, like, fifteen years. I'm going to have to wait fifteen years to hear my favorite song." },
      { s: 'hyein', f: 'serious', t: "So I'm doing it a cappella. Get up." },
      { n: "She did it a cappella, standing on the booth's seat in her socks, and it had arm motions, letters, big ones, the kind you did with your whole body at a party at one in the morning when the room had decided to be one person, and the third time she did them Solar's arms went up on their own and made the shapes a half beat before Hyein's did." },
      { s: 'hyein', f: 'surprised', t: "...SOL." },
      { choose: [
        { t: "(Keep going. Louder.)", notes: 3, then: [
          { n: "She kept going. She had no idea what the words were and her arms knew every letter, and Hyein screamed and jumped off the seat and did them with her, facing her, in the little booth with the disco light turning, until a boy came in from the corridor to ask if everything was okay and Hyein made him do the letters too." }
        ] },
        { t: "I don't know this song.", notes: 2, then: [
          { s: 'hyein', f: 'happy', t: "Your ELBOWS know this song. Your elbows have been to more parties than you have." }
        ] },
        { t: "(Put your arms down, embarrassed.)", notes: 1, then: [
          { n: "She put them down. Hyein looked at her for a second, and then did the next letter twice as big, so that anyone who looked in through the glass would only ever see the tall girl on the seat, and Solar laughed, and her arms went back up." }
        ] }
      ] },
      { s: 'hyein', f: 'happy', t: "Okay. Fifteen years. I can wait fifteen years. I'll just do it myself every day until then." }
    ]
  ],
  ranks: [
    { after: '9/15', title: '1: things lie on hangers', place: 'Paulownia Mall · Shop Windows', time: 'After School', music: 'city', scene: [
      { n: "Hyein had been at the mall for two hours. Solar found her at the same row of windows on the second floor, staring at a mannequin with her arms folded, like a woman who'd lost a fight with it and was waiting for a rematch." },
      { n: "She was wearing a pink cardigan that was very much not from this decade, cropped short, the buttons the size of coins, over a borrowed Gekkoukan blouse and her own jeans, and three different people walking past had slowed down to look at her, which she either didn't notice or noticed and considered correct." },
      { register: 'hyein' },
      { s: 'hyein', f: 'happy', t: "SOLAR. Oh my God, perfect, come here, I need a body." },
      { n: "Solar looked behind her. There was nobody behind her but a man walking a very small dog, who looked back at her, with the dog, in what felt like solidarity." },
      { s: 'hyein', f: 'serious', t: "Not him. You. Come here. Stand here. Don't move. Things lie on hangers. I need to see this on a person." },
      { s: 'hyein', f: 'neutral', t: "Also, real quick, before you say anything polite. Everything in this whole mall is low-rise. Everything. I walked in here and it was like walking into my mom's photo albums. I've been in this building for two hours having a spiritual experience." },
      { n: "The jacket was cropped and structured, dark wool, nothing like anything Solar owned, which was nothing, and Hyein had it off the rack and onto Solar's shoulders before she'd finished walking over, tugging the hem, frowning at the sleeves with her whole face, a pin held in the corner of her mouth that Solar had not seen her take out of anywhere." },
      { s: 'hyein', f: 'serious', t: "Okay. So this is either giving, or it's not giving, and I genuinely can't tell." },
      { choose: [
        { t: "It's giving.", notes: 3, then: [
          { s: 'hyein', f: 'surprised', t: "...Since when do you say *giving?*" },
          { s: 'hyein', f: 'happy', t: "No. I love it. Hanni! HANNI. She said giving. I taught her that. Just now. I'm an excellent influence." }
        ] },
        { t: "The sleeves are too long.", notes: 3, then: [
          { s: 'hyein', f: 'happy', t: "THANK you. Finally somebody in this friend group has EYES." },
          { n: "She pinned them on the spot, two neat tucks, without asking, and stepped back with her head on one side, and something passed over her face that was not about sleeves at all." }
        ] },
        { t: "I don't usually wear things like this.", notes: 2, then: [
          { s: 'hyein', f: 'neutral', t: "You wear things like this every single day, Sol." },
          { s: 'hyein', f: 'sad', t: "...Don't you?" }
        ] }
      ] },
      { n: "In the shop glass the two of them stood side by side, the tall girl with her long hair over one shoulder and her hands still on the hem, and the shorter one in a jacket that wasn't hers yet, looking at herself with the careful, slightly suspicious face she used on mirrors, as though checking a room for something that had been moved." },
      { n: "Hyein watched her do it in the reflection. She didn't say anything about it. She went very busy with a button that was already done up." },
      { n: "Hanni came out of the shop next door with a paper bag and her face lit up at the sight of the two of them, and then lit up more, and then went soft at the edges, the way it did, all of it out loud." },
      { s: 'hanni', f: 'happy', t: "Oh! She's in a jacket! Hyein, you got her in a jacket!" },
      { s: 'hyein', f: 'neutral', t: "I got her in a jacket. Look at the shoulders. That's the right shape. I've been trying to tell the mannequin." },
      { n: "She said it lightly. Her voice did a thing at the end, a little crack, like a seam letting go, and she turned back to the mirror and fixed a sleeve that didn't need fixing." },
      { s: 'hyein', f: 'sad', t: "You keep looking at me like you're waiting for instructions, Sol." },
      { choose: [
        { t: "Like what?", notes: 2, then: [
          { s: 'hyein', f: 'serious', t: "Like you're scared you'll break us. You've never once been scared you'd break us. You throw us around. You say *ur so annoying* and leave the room. You're not *polite* to us. You're polite to waiters and the dean and people you're about to destroy." }
        ] },
        { t: "I don't know how to talk to you yet.", notes: 3, then: [
          { s: 'hyein', f: 'sad', t: "...Okay." },
          { s: 'hyein', f: 'neutral', t: "Okay. That's a real answer. I hate it. It's fair. Learn faster." }
        ] },
        { t: "ur so annoying.", notes: 3, flag: 'hyein-menace', then: [
          { n: "It came out of her flat and bored and perfect, every letter lowercase even out loud, and she had no idea where it had come from, and Hyein's eyes went huge in the mirror, and then she spun around and grabbed Solar by both shoulders, the pin still in her mouth." },
          { s: 'hyein', f: 'happy', t: "I'm keeping that. Hanni, get your phone. For evidence. Hanni, your phone doesn't work, get it anyway." },
          { s: 'hanni', f: 'happy', t: "It says twelve oh one! It's said twelve oh one since the mall!" },
          { s: 'hyein', f: 'serious', t: "Then I'll remember it. I have a great memory. I remember everything you've ever been mean to me about. It's a whole archive." }
        ] }
      ] },
      { n: "At the register Hyein stood in front of the little screen with her whole body so Solar couldn't see the number, and paid with the envelope Mitsuru had given them for clothes, counting the unfamiliar notes twice, like someone learning a new alphabet." },
      { choose: [
        { t: "(Look at the price anyway.)", notes: 1, then: [
          { n: "Solar leaned around her. Hyein leaned with her, without looking, smoothly, the way a goalkeeper leans, and kept leaning, until the two of them were tilted at the register at an angle the clerk was visibly concerned about." },
          { s: 'hyein', f: 'serious', t: "Don't. It's rude. You're being rude to a gift." }
        ] },
        { t: "(Let her.)", notes: 3, then: [
          { n: "Solar let her. She stood a step back with her hands in the new pockets, and found that it was easy, which surprised her. It felt like a thing she'd done before. Standing behind somebody tall while they decided something for her, and not minding, because it was this somebody." }
        ] }
      ] },
      { s: 'hyein', f: 'neutral', t: "It's a loan. From me to you. You pay me back by wearing it. That's the rate. My rates are very reasonable for family." },
      { n: "Solar wore it home on the monorail, with the sleeves pinned, and Hyein sat across the aisle and talked the whole way, about the mall and the low-rise and a girl she'd seen wearing socks with sandals like it was a political position, and every so often stopped talking in the middle of a sentence to watch Solar's reflection in the dark train window, like she was making sure it stayed." }
    ] },

    { after: '9/24', title: '2: measurements', place: 'Iwatodai Dorm · Lounge', time: 'Evening', music: 'joy', scene: [
      { phone: [
        { from: 'hyein', t: "come down to the lounge" },
        { from: 'hyein', t: "bring ur body. bring ur WHOLE body" },
        { from: 'hyein', t: "i found something" }
      ], contact: 'hyein' },
      { n: "Hyein had found a tape measure. Nobody knew where. She'd come down to dinner with it around her neck like a doctor's stethoscope, and by the end of dinner she had measured everyone at the table, with permission, more or less, and was writing the numbers down in her sketchbook with the expression of a scientist who had discovered several new species." },
      { s: 'hyein', f: 'serious', t: "Junpei. Your inseam is a tragedy. Who made those trousers? Who hurt you?" },
      { s: 'junpei', f: 'flustered', t: "They're school trousers! Everyone's are like this!" },
      { s: 'hyein', f: 'neutral', t: "Everyone's are a tragedy. Yours are a tragedy specifically." },
      { n: "Akihiko had volunteered for measuring with a readiness that suggested he had misunderstood the exercise, and stood in the middle of the lounge with his arms out, flexing very slightly, until Hyein told him that she was measuring his shoulders for a jacket and not judging a competition, and he lowered his arms looking, for one second, very slightly disappointed." },
      { s: 'akihiko', f: 'neutral', t: "...What jacket?" },
      { s: 'hyein', f: 'neutral', t: "Hypothetical jacket. A jacket in my mind. Don't worry about it. Lift your chin." },
      { n: "Aigis offered her measurements before she was asked, all of them, to the millimeter, in a pleasant level voice, and Hyein wrote down the first three and then put the pencil behind her ear and said she was going to need to check those herself, sorry, nothing personal, she just didn't trust a number she hadn't touched." },
      { s: 'aigis', f: 'surprised', t: "My figures are on file with the Kirijo Group." },
      { s: 'hyein', f: 'serious', t: "I don't want the file. I want the truth. Arms out." },
      { n: "Yukari said no, flatly, from the armchair, without looking up from her phone, and Hyein said *respect*, and meant it, and didn't ask again, which made Yukari look up after all, slightly thrown, like someone who'd braced against a door that turned out to be open." },
      { s: 'hyein', f: 'happy', t: "Mitsuru-senpai. Can I measure you? You can say no. You're going to say no." },
      { s: 'mitsuru', f: 'neutral', t: "...What would it be for?" },
      { s: 'hyein', f: 'serious', t: "Nothing. Yet. I just want to know. You stand like you've been fitted since you were a baby. I want to know if I'm right." },
      { n: "Mitsuru looked at her for a long moment over the top of a teacup. Then she set it down, and stood, and held out her arms, and the whole lounge went silent like a church." },
      { s: 'hyein', f: 'surprised', t: "...Oh my God. Okay. Okay. Nobody breathe." },
      { n: "Hyein measured her the way you'd handle something in a museum, the tape held lightly, her lips moving, and wrote every number down and then looked at them, and then at Mitsuru, with an expression of the most profound professional respect." },
      { s: 'hyein', f: 'neutral', t: "I was right. You've been fitted since you were a baby. Your left shoulder's a little lower. From carrying something. Don't tell me what." },
      { s: 'mitsuru', f: 'surprised', t: "..." },
      { n: "Mitsuru sat down again, and picked up her tea, and didn't drink it for a while." },
      { n: "When she got to Solar, she didn't take the tape off her neck. She looked at Solar for a second, up and down, the way a tailor looks at someone across a room, and then wrote four numbers in her sketchbook without measuring anything at all." },
      { s: 'solar', f: 'surprised', t: "You didn't measure me." },
      { s: 'hyein', f: 'neutral', t: "Don't need to. I know yours. I did your makeup the first week of school, and your tailgate fit, and I've hemmed two of your skirts in the middle of the night because you only tell me things need hemming at one in the morning. I know your measurements better than whoever your dad pays to know them." },
      { choose: [
        { t: "Check. Measure me anyway.", notes: 3, then: [
          { n: "Hyein measured her. Shoulders. Waist. Arm, shoulder to wrist. Every number was the same as the one in the sketchbook, to the half centimeter, and Hyein didn't look triumphant about it. She looked at the tape around Solar's wrist and went quiet." },
          { s: 'hyein', f: 'sad', t: "...Same. You're exactly the same. You haven't eaten enough. But you're the same." }
        ] },
        { t: "My tailgate fit?", notes: 3, then: [
          { s: 'hyein', f: 'happy', t: "Matching sets. All three of us. School colors. They photographed SO well in the sunlight. You said it was a lot. It was the correct amount." },
          { s: 'hyein', f: 'serious', t: "You never asked me to do any of it. You just wore it. That's how you say thank you. You wear things." },
          { n: "Solar didn't say anything. Something had moved, low down, a long way back, like the bottom step of a staircase in a house she'd been carried out of in her sleep. Bright orange in a hard white sun. Somebody's hands, quick and sure, fixing a hem on her while she stood very still and pretended to be annoyed about it." }
        ] },
        { t: "That's a little scary.", notes: 2, then: [
          { s: 'hyein', f: 'happy', t: "It's a LOT scary. It's my gift. I'll know your measurements when I'm ninety." }
        ] }
      ] },
      { s: 'junpei', f: 'neutral', t: "Wait, so are you actually gonna make stuff? Like, for us? 'Cause I'd wear a jacket. I'd wear a jacket so hard." },
      { s: 'hyein', f: 'neutral', t: "I'm going to make stuff for people who let me fix their trousers, Junpei." },
      { s: 'junpei', f: 'sad', t: "...That's fair. That's really fair." },
      { n: "Later, when everyone had gone up, Solar came back down for a glass of water and found her sitting alone on the lounge floor with the sketchbook open in her lap to a page with nothing on it but four numbers, Solar's, written very neatly, and underlined, and Hyein was looking at them the way other people look at a photograph." },
      { choose: [
        { t: "(Sit down next to her.)", notes: 2, then: [
          { n: "Solar sat down on the floor beside her with the water, close enough that their shoulders touched. Hyein didn't close the sketchbook. She tilted it a little, so Solar could see too, and the two of them looked at four numbers on a page for a while, which was a stupid thing to do, and neither of them said so." }
        ] },
        { t: "(Go back upstairs before she sees you.)", notes: 1, then: [
          { n: "Solar went back up the stairs without the water. Behind her, she heard the page turn, finally, and a pencil start, quick and sure, drawing something, and she didn't go back down to see what." }
        ] }
      ] }
    ] },

    { after: '10/3', title: '3: small wings', place: 'Paulownia Mall · Central Atrium', time: 'After School', music: 'day', scene: [
      { n: "The fountain in the atrium was throwing its water up at the glass roof, and Hyein had her sketchbook open on her knees on the fountain's rim, and her phone face up beside her on the wet stone, which she never let near water, which was how Solar knew before she sat down that this was going to be one of those afternoons." },
      { s: 'hyein', f: 'neutral', t: "Okay. Sit. I'm going to show you something and you're not allowed to be weird about it, and I'm going to be weird about it, and that's the deal." },
      { n: "The phone still said twelve oh one. It had said twelve oh one since she'd arrived. It got no signal and it would not send anything to anyone, but everything that had been on it was still on it, and Hyein had scrolled up through the girls' chat with her thumb, a long way, past things she went past too fast for Solar to read, and stopped, and turned it round." },
      { phone: [
        { from: 'hyein', t: "@hyein: we are gonna be... DRUM ROLL" },
        { from: 'hanni', t: "@hanni: drum roll!" },
        { from: 'hyein', t: "@hyein: winx CLUBBBB" },
        { from: 'solar', t: "@solar: i never even agreed" },
        { from: 'hyein', t: "@hyein: UR GONNA BE STELLA" },
        { from: 'hyein', t: "@hyein: LTRLY THE FAIRY OF THE SUN AND MOON" },
        { from: 'hyein', t: "@hyein: ITS UR NAME THIS WAS PREDESTINED FR" },
        { from: 'solar', t: "@solar: my parents did NOT name me after winx club" },
        { from: 'hyein', t: "@hyein: we dont know that for certain!!!!" }
      ], contact: 'hanni, hyein 🩷' },
      { n: "She read it twice. The second time slower. It was her name at the top of the messages on the right-hand side, *@solar*, and they were in her voice, a voice she'd never once used out loud in this city, lowercase and flat and completely unbothered, the voice of a girl who had been sitting somewhere warm with her phone under a desk and her friends on the other end of it, and wasn't afraid of a single thing in the world except, apparently, wings." },
      { choose: [
        { t: "I type like that?", notes: 3, then: [
          { s: 'hyein', f: 'happy', t: "You type like a cat walking on a keyboard that's mad at you. It's the best thing about you. Top three." },
          { s: 'hyein', f: 'sad', t: "...And I keep opening this chat like you're going to put something new in it. Look at the dates. It's embarrassing. I almost threw my phone in a fountain. This fountain. I almost threw it in this fountain." }
        ] },
        { t: "(Scroll down. Read the rest.)", notes: 3, then: [
          { phone: [
            { from: 'solar', t: "@solar: and im not wearing giant wings btw" },
            { from: 'hyein', t: "@hyein: We'll DISCUSS it" },
            { from: 'solar', t: "@solar: not going then" },
            { from: 'hyein', t: "@hyein: small wings?! :)" },
            { from: 'solar', t: "@solar: ..fine" }
          ], contact: 'hanni, hyein 🩷' },
          { s: 'hyein', f: 'happy', t: "Under five minutes. You went from *not going* to negotiating wing dimensions in under five minutes. I've never been so proud of anything I've done." }
        ] },
        { t: "My parents did NOT name me after Winx Club.", notes: 2, then: [
          { s: 'hyein', f: 'happy', t: "WE DON'T KNOW THAT FOR CERTAIN." },
          { n: "She said it so fast, so instantly, in capitals you could hear, that for a second the atrium tipped, and Solar was somewhere else with a phone hot in her hand, and then it tipped back. Hyein put the pencil in her mouth and bit it and looked away at the fountain." }
        ] }
      ] },
      { n: "Hyein turned the phone face down. Then she turned the sketchbook round instead, and it was fairies. Four of them, each a different color, each with a different kind of wings, every line quick and sure and a little too much." },
      { s: 'hyein', f: 'happy', t: "So that's us. Me, Bloom, red hair, fire, obviously, she's the main character. Hanni, Flora, nature, the nice one. Minji, Musa, music, she made me promise to protect her cargo pants, which, to be clear, I did. I'm a woman of my word." },
      { n: "She turned the page. A fourth fairy in orange and gold, a satin top and a green skirt that was, Solar couldn't help noticing, very short, and a gold cuff around one arm, and very small wings." },
      { s: 'hyein', f: 'serious', t: "And you. Stella. The fairy of the sun and the moon." },
      { s: 'solar', f: 'neutral', t: "...That skirt is short." },
      { s: 'hyein', f: 'happy', t: "You said that! You said *if I bend over, the entire house is going to learn things about me,* and I said *don't bend over, simple.* Word for word. You just did the first half. Do you want to do the second half? I'll do mine." },
      { choose: [
        { t: "Fantastic solution.", notes: 3, then: [
          { n: "It came out dry and sarcastic and exactly on the beat, like the second half of a joke she'd heard a hundred times, and Hyein screamed so loud that a mother pushing a stroller past the fountain turned the stroller around." },
          { s: 'hyein', f: 'happy', t: "THAT'S what you said. That's EXACTLY what you said. With the face. You did the face." }
        ] },
        { t: "I don't remember that.", notes: 2, then: [
          { s: 'hyein', f: 'neutral', t: "That's okay. I do. I'll remember it until you do. I'm very good at holding things. I have big hands." }
        ] }
      ] },
      { s: 'hyein', f: 'neutral', t: "When you looked at yourself in the mirror in it. At home. In the bathroom, with the steam, and the curling irons going. You went really quiet." },
      { s: 'hyein', f: 'neutral', t: "You look in mirrors like you're checking for damage. Like someone's going to post you. That night you didn't. You just looked. Like you liked her." },
      { s: 'hyein', f: 'happy', t: "And then I said *oh my God, you're literally Stella,* and you said *please don't start calling me that,* and I said *I won't, Stella.*" },
      { s: 'hyein', f: 'neutral', t: "Do they do Halloween here? Properly? With costumes?" },
      { s: 'solar', f: 'neutral', t: "Junpei has a Superman costume." },
      { s: 'hyein', f: 'serious', t: "That's not Halloween. That's a cry for help." },
      { n: "She went quiet for a moment, drawing, and the fairy in orange got a little more detail, a line along the hem, a pattern on the sleeve, small suns all the way down, and the skirt, Solar noticed, about two inches longer than it had been a minute ago, which Hyein did without comment and without looking up." },
      { choose: [
        { t: "Make it again. Here.", notes: 3, flag: 'hyein-stella', then: [
          { s: 'hyein', f: 'surprised', t: "..." },
          { s: 'hyein', f: 'happy', t: "Are you serious? Are you SERIOUS? Okay. Okay okay okay. Don't take it back. I'm already measuring you with my eyes." },
          { s: 'hyein', f: 'serious', t: "You've never asked me to make you anything. Ever. You just let me. This is the first time you've asked. I'm going to remember the exact time. What time is it. It's ten past four. Okay." }
        ] },
        { t: "Draw yourself in it too. Bloom.", notes: 2, then: [
          { n: "She drew Bloom next to Stella, quick, red and fire, with her arm around the smaller fairy's neck, the way Hyein would, and then drew a little heart between them, and then scribbled it out, and then drew it back." }
        ] },
        { t: "Nobody's going to post me here.", notes: 2, then: [
          { s: 'hyein', f: 'neutral', t: "No. Nobody here even knows who you are. I checked. I asked a guy at the arcade if he knew Solar Lee and he asked if that was a band." },
          { s: 'hyein', f: 'sad', t: "...I don't know if that's the best thing about this place or the worst one." }
        ] }
      ] },
      { n: "The fountain went on throwing its water at the roof. Hyein closed the sketchbook over the fairies and kept her hand flat on the cover, as if they might get out." }
    ] },

    { after: '10/13', title: '4: louder', place: 'Iwatodai · Riverside', time: 'Evening', scene: [
      { n: "Hyein was yelling at the river." },
      { n: "Not at anyone. At the river. She was standing at the railing on the path below the dorm in the cold with her hands around her mouth, yelling, in a long ragged furious stream, everything, at the water, which took it and went on being a river." },
      { s: 'hyein', f: 'serious', t: "—AND I DON'T EVEN KNOW WHAT DAY IT IS. I DON'T KNOW IF IT'S BEEN AN HOUR OR A MONTH. MY PHONE SAYS IT'S THE SAME NIGHT. MY BODY SAYS I'VE HAD FORTY BREAKFASTS. AND I CAN'T FIND A SINGLE GOOD PAIR OF TIGHTS IN THIS ENTIRE COUNTRY—" },
      { n: "She ran out of breath. She stood there with her hands on the railing, panting, her long hair blown across her face, and then turned around and saw Solar standing on the path, and didn't look embarrassed at all." },
      { s: 'hyein', f: 'neutral', t: "Hi. I'm yelling. Do you want to yell?" },
      { choose: [
        { t: "(Yell at the river.)", notes: 3, flag: 'hyein-yelled', then: [
          { n: "She didn't know what she was going to yell until she was doing it. It came out of her raw and enormous and wordless, a sound she didn't know she'd been keeping since April, since a checkerboard floor and a green moon and a gun beside her hand, and the river took it, and Hyein stood beside her and yelled with her, wordless too, louder, like a harmony." },
          { n: "When it was over they were both laughing. A man walking his dog on the other bank had stopped and was looking at them with real concern." }
        ] },
        { t: "What's wrong?", notes: 2, then: [
          { s: 'hyein', f: 'serious', t: "Everything. Nothing. The tights." }
        ] },
        { t: "(Stand next to her and say nothing.)", notes: 2, then: [
          { n: "She stood next to her. Hyein looked at her sideways, and the anger went out of her shoulders, slowly, like air out of a tire." }
        ] }
      ] },
      { n: "Somebody came along the path at a run, the steady flat slap of shoes on concrete, and slowed, and it was Akihiko, in a gray hoodie with the hood down and his breath going up white, and he looked at the two of them at the railing, and at Hyein's face, and at Solar's, and the dog walker across the water, and did a small rapid calculation that went all the way across his face and came out the other side as nothing at all." },
      { s: 'akihiko', f: 'neutral', t: "...Evening." },
      { n: "He kept running. Four minutes later he came back the other way, not running, with two cans of hot milk tea from the vending machine by the bridge, and handed one to each of them without a word, and left again at a jog, and didn't look back once." },
      { s: 'hyein', f: 'surprised', t: "...Is he always like that?" },
      { choose: [
        { t: "Yes.", notes: 2, then: [
          { s: 'hyein', f: 'neutral', t: "Huh. Okay. Noted. Filed. I have a file on him now." }
        ] },
        { t: "Only when he's worried.", notes: 3, then: [
          { s: 'hyein', f: 'neutral', t: "So always. Got it." },
          { n: "She held the can against her cheek, both hands around it, and looked down the path where he'd gone, with an expression Solar couldn't read and didn't try to." }
        ] }
      ] },
      { s: 'hyein', f: 'neutral', t: "I'm not mad at you. Okay? I want to say that out loud before you think it. You think everything's your fault. I'm not mad at you." },
      { s: 'hyein', f: 'serious', t: "I'm mad at the sky. I'm mad at whatever this is. I'm mad that you say my name like it's a question and I'm mad that you laugh at Junpei's jokes, which are bad, and I'm mad that you look—" },
      { n: "She stopped. Her mouth was working. She pressed her lips together like she was holding a pin there." },
      { s: 'hyein', f: 'sad', t: "...That you look like you like it here. That's the worst one. I'm so mad about that one. And I'm so happy about it. And I hate both." },
      { choose: [
        { t: "I do like it here.", notes: 3, then: [
          { s: 'hyein', f: 'sad', t: "I know." },
          { s: 'hyein', f: 'neutral', t: "Okay. Okay. You're allowed. I'm allowed to be mad. We're both allowed. That's how it works. I just made the rule." }
        ] },
        { t: "I'd like it more with you here.", notes: 3, then: [
          { s: 'hyein', f: 'surprised', t: "..." },
          { n: "She looked at Solar for a long second. Then her face crumpled, all at once, the way it did, excitement and grief arriving in the same muscles, and she threw both arms around Solar's neck so hard they both nearly went over the railing, and the milk tea went everywhere." },
          { s: 'hyein', f: 'sad', t: "That's such a cheat. That's such a cheat thing to say. I love you. Don't say it again. Say it again." }
        ] },
        { t: "You're allowed to be mad at me too.", notes: 2, then: [
          { s: 'hyein', f: 'serious', t: "I know I'm allowed. I'm choosing not to. It's very mature of me. Write it down." },
          { s: 'hyein', f: 'sad', t: "...I'm a little mad at you. Like two percent. Like a rounding error." }
        ] }
      ] },
      { s: 'hyein', f: 'neutral', t: "Okay. New rule. You tell me when I'm being annoying. Right then. Not after you've thought of a nice way to say it. You used to. I want that back." },
      { n: "Walking back, Hyein held her hand, swinging it, like two kids on the way home from somewhere, and kept asking whether she was being annoying yet, every ten steps, until Solar finally stopped walking and told her she was, *so* annoying, and Hyein looked happier about that than about anything else that day." }
    ] },

    { after: '10/22', title: '5: the armband', place: 'Iwatodai Dorm · Lounge', time: 'Night', music: 'tender', scene: [
      { n: "The armband had torn in Tartarus. Something with too many hands had caught it on the way past and ripped it nearly in half, and Solar had come home with the red fabric hanging off her sleeve by a few threads and S.E.E.S. barely legible, and had put it on her desk, and had stared at it for an hour without knowing why it made her want to sit on the floor." },
      { n: "Hyein had found it there the next morning. She hadn't asked. She'd taken it downstairs, and now it was night, and she was sitting on the lounge floor under the lamp with the armband across her knees and a needle in her mouth and Mitsuru's sewing kit open beside her, every thread in it sorted by color, which Hyein had remarked on with the respect of one professional for another." },
      { s: 'hyein', f: 'neutral', t: "Sit. I'm almost done. Don't look yet. It's rude to look at someone's work before it's done." },
      { n: "Solar sat on the sofa. Hyein's hands moved fast and small and certain. She was humming under her breath, off-key, some song from home, and every few stitches she held the armband up to the lamp and squinted at it like it had said something rude." },
      { s: 'hyein', f: 'neutral', t: "Can I tell you a thing? Don't make it a thing." },
      { s: 'hyein', f: 'neutral', t: "I don't sleep when you go out. At midnight. Hanni does, she's a great sleeper, she sleeps like she's been told to. I don't. I sit at the top of the stairs. The green comes, and everything goes off, and I just sit there in the green with everybody's clocks stopped and count." },
      { s: 'hyein', f: 'serious', t: "You came back at one twelve last night. I know because I counted. There's no clock in the green, so I counted. Out loud. Like a crazy person. At the clock in the hall. It doesn't move. I counted at a clock that doesn't move." },
      { choose: [
        { t: "You don't have to wait up.", notes: 2, then: [
          { s: 'hyein', f: 'neutral', t: "I know I don't *have* to. That's the whole point. Nobody makes me. I do it because I'm awake anyway and I'd rather be awake on the stairs." }
        ] },
        { t: "What number did you get to?", notes: 3, then: [
          { s: 'hyein', f: 'sad', t: "...Four thousand and something. I lost count a couple of times. I had to start over at a thousand. It was very humbling." },
          { s: 'hyein', f: 'happy', t: "And then the door opened and you came in with your sleeve hanging off and I stopped counting and went straight to bed so you wouldn't see me. Very smooth. Very cool. You didn't see me." },
          { s: 'solar', f: 'neutral', t: "I saw you." },
          { s: 'hyein', f: 'flustered', t: "You did NOT." }
        ] },
        { t: "(Don't say anything. Let her sew.)", notes: 2, then: [
          { n: "Solar didn't say anything, and Hyein, who had braced for something, unbraced slowly, and went on sewing, and the needle went in and out under the lamp with a sound so small it was barely a sound at all." }
        ] }
      ] },
      { s: 'hyein', f: 'neutral', t: "What is it? This thing. Everyone in the dorm has one. Junpei wears his like a sports jersey. Mitsuru wears hers like a crown. Akihiko wears his like he forgot it was there." },
      { s: 'hyein', f: 'serious', t: "You wear yours like it's the only thing you own." },
      { choose: [
        { t: "It's the first thing anyone gave me here that I chose.", notes: 3, then: [
          { s: 'hyein', f: 'surprised', t: "..." },
          { s: 'solar', f: 'neutral', t: "They asked. They asked if I wanted it. There was a contract. It said *free will.* I stopped on that line for a long time." },
          { n: "Hyein's needle stopped. She looked down at the armband, the torn red fabric, the stitches she was putting into it one at a time, and didn't say anything for a while." },
          { s: 'hyein', f: 'sad', t: "...Nobody ever asks you. At home. They just hand you the dress." }
        ] },
        { t: "It means I fight. At midnight.", notes: 2, then: [
          { s: 'hyein', f: 'serious', t: "I know. I hate it. I hate that you come home with your sleeve ripped off. Hanni cried. I didn't cry. I did cry. Don't tell her." }
        ] },
        { t: "It means I'm one of them.", notes: 2, then: [
          { s: 'hyein', f: 'neutral', t: "Yeah. I figured." },
          { s: 'hyein', f: 'sad', t: "...You were one of us first. That's all. I'm not saying anything. I'm just saying the order." }
        ] }
      ] },
      { n: "She tied off the thread and bit it and held the armband up to the light, and it was whole again, the tear closed with stitches so small and even they were nearly invisible from the outside." },
      { s: 'hyein', f: 'happy', t: "Okay. Now look inside." },
      { n: "Inside, on the underside of the band, where it would sit against her arm and nobody would ever see it, Hyein had embroidered a tiny sun. Gold thread. Seven rays. A little lopsided, on purpose. And beside it, smaller still, in pink, a crescent moon." },
      { choose: [
        { t: "Stella.", notes: 3, then: [
          { s: 'hyein', f: 'happy', t: "Fairy of the sun and the moon. Predestined." },
          { s: 'hyein', f: 'neutral', t: "So whatever you do with your free will, you've got something on you that's from us. Even if it's where nobody can see. Especially where nobody can see." }
        ] },
        { t: "(Put it on. Right now.)", notes: 3, then: [
          { n: "She put it on, right there, over her pajamas, and the little sun sat warm against the inside of her arm, and Hyein watched her do it with her chin in her hands and her eyes very bright." },
          { s: 'hyein', f: 'happy', t: "Yeah. That's giving. That's so giving." }
        ] },
        { t: "Why lopsided?", notes: 2, then: [
          { s: 'hyein', f: 'neutral', t: "Because a perfect one looks like a logo. A crooked one looks like someone made it. I want it to look like someone made it." }
        ] }
      ] },
      { n: "Mitsuru came down for her late tea while they were still sitting there, and stopped in the doorway, and looked at the armband on Solar's sleeve, and then at her own open sewing kit on the floor with every thread exactly where it had been, and something in her face went very slightly warm, and she said only that she was glad the kit had been of use, and went into the kitchen, and could be heard, a moment later, setting out three cups instead of one." }
    ] },

    { after: '11/2', title: '6: proof of my legacy', place: 'Iwatodai Dorm · Lounge', time: 'Evening', music: 'joy', scene: [
      { n: "Halloween in Iwatodai had lasted about four hours. Hyein had spent the first eleven minutes of it refitting Junpei's discount Superman costume on his body while he stood on the coffee table with his arms out, sewing the peeling S back down and letting out a cape that had been made, she said, for a child, or a very small, very sad man, and she had been halfway through telling him he was welcome when the bass came through the lounge wall." },
      { n: "After that it had stopped being Halloween. It had been a song all of them knew coming through brick that had a parking lot on the other side of it, and a hallway in the tower full of red cups and camera flashes, and Minji walking out of the green with a Persona, and nobody, in the end, wearing anything Hyein had made at all. The costumes she'd spent the week on were still in their bags on the second floor. She hadn't opened them since." },
      { n: "The lounge still had candy wrappers down the back of the sofa cushions and a paper bat hanging by one wing over the television, and Hyein was lying upside down on the armchair with her legs over the back and her hair on the floor, recovering, she said, like an athlete." },
      { s: 'hyein', f: 'neutral', t: "Don't talk to me. I'm grieving. I'm grieving a holiday." },
      { s: 'hyein', f: 'serious', t: "It was RIGHT there, Sol. Through the wall. The Sigma playlist. The actual playlist, in order, the song Jeno does the thing to, the whole thing. Home was on the other side of that wall, and I went outside and checked, and it was a parking lot. I stood in a parking lot in my socks." },
      { s: 'hyein', f: 'sad', t: "And then Minji got a monster. Which, good. Great for her. She deserves a monster. And I got to hold the sewing kit." },
      { choose: [
        { t: "You fixed Junpei's cape.", notes: 2, then: [
          { s: 'hyein', f: 'neutral', t: "I fixed Junpei's cape in eleven minutes with the wrong color thread. That's my contribution to the war effort. They're going to put it on a plaque." }
        ] },
        { t: "I'm glad you were holding the sewing kit and not standing in that hallway.", notes: 3, then: [
          { s: 'hyein', f: 'surprised', t: "..." },
          { s: 'hyein', f: 'neutral', t: "...Okay, that's a nice thing to say upside down. All the blood went to my face. I can't tell if I'm crying or if it's gravity." }
        ] },
        { t: "(Lie down upside down on the sofa next to her.)", notes: 3, then: [
          { n: "Solar lay down on the sofa with her legs over the back and her head hanging off the cushion, and the lounge turned over, the paper bat standing on its wing, the ceiling a white floor nobody had ever walked on, and Hyein looked at her sideways, upside down, from the next chair, and laughed so hard she slid off it." }
        ] }
      ] },
      { s: 'hyein', f: 'neutral', t: "I won, you know. At home. Best costume. At Sigma. Jaemin was standing on a chair doing the worst accent I've ever heard in my life, and the award was so ugly, Sol, it was so poorly made, I held it up like it was a trophy at the Olympics." },
      { s: 'hyein', f: 'happy', t: "I got on the mic. I told the whole room I'd be taking commissions. So long as they paid the appropriate price." },
      { n: "And Solar could see it. Not imagine it. See it. A living room full of people in costumes, a hundred of them, the floor sticky, the lights strung across a ceiling, a tall girl with red extensions clipped into her brown hair at a microphone with something ugly and gold held over her head, and a smaller girl in black beside her leaning in to the mic in a hurry, and Solar herself somewhere off to the side in orange satin and small gold wings, laughing so hard she had to hold onto someone's arm." },
      { s: 'solar', f: 'neutral', t: "...*My rates have gone up, but this is proof of my legacy.*" },
      { s: 'hyein', f: 'surprised', t: "..." },
      { n: "She swung her legs down off the back of the chair and sat up so fast her hair whipped over her face, and pushed it back with both hands, and stared." },
      { s: 'hyein', f: 'surprised', t: "I DID say that. I did. And Hanni leaned in and went *um, she means thank you!*" },
      { s: 'solar', f: 'neutral', t: "And everyone cheered anyway." },
      { s: 'hyein', f: 'happy', t: "And everyone cheered ANYWAY. Oh my God. You remember me being amazing. Of all the things. You remember me being amazing." },
      { n: "She got her phone out of her back pocket. It still said twelve oh one. She went into her messages, past the girls' chat, into a little folder of requests from people she didn't follow, and held it out, and it was a single message from a girl with a profile picture too small to see." },
      { n: "*hiii are u taking commissions?? how much for a set like ur winx ones.* And under it, Hyein's answer, typed out and never sent, with a tiny clock beside it where the delivered mark should be. *yes!!! omg. dm me ur measurements and*" },
      { s: 'hyein', f: 'sad', t: "She sent that the morning after. I was typing back in the dining hall. Then we went to the party, and then you were gone, and then we were here. I didn't finish the sentence. *And.* And what. I don't even know what I was going to say." },
      { s: 'hyein', f: 'sad', t: "My first real client and I left her on *and.* She's been waiting on *and* for however long this is. Forty breakfasts." },
      { choose: [
        { t: "Answer her. Finish it.", notes: 3, then: [
          { n: "Hyein looked at her, and then at the phone, and then, slowly, she typed. *and we'll talk prices. sorry for the wait. it's been a weird week.* She pressed send. The little clock came up beside it, next to the other little clock, and stayed there, patient, turning, the way it would turn forever in a city where her phone couldn't reach anyone." },
          { s: 'hyein', f: 'neutral', t: "...Okay. It's in the queue. When it goes, it goes. It's very professional. Very *we'll get back to you.*" },
          { s: 'hyein', f: 'happy', t: "Thank you. That was stupid. Thank you." }
        ] },
        { t: "Take commissions here, then.", notes: 3, flag: 'hyein-shop', then: [
          { s: 'hyein', f: 'surprised', t: "Here? In 2009? In a dorm full of people who think a hoodie is an outfit?" },
          { s: 'solar', f: 'neutral', t: "Junpei needs a second Superman costume. For washing. He hasn't taken that one off in two days." },
          { s: 'hyein', f: 'serious', t: "...He does. He really does. It's a public health issue." },
          { n: "She flipped the sketchbook to a clean page and wrote, across the top, in capitals, *COMMISSIONS · IWATODAI*, and underlined it twice, and under it, *1. Junpei. Superman (washing). Price: TBD.* Then she sat back and looked at it the way you'd look at a shop sign with your name on it." }
        ] },
        { t: "You'll answer her when you get home.", notes: 2, then: [
          { s: 'hyein', f: 'neutral', t: "When." },
          { n: "She didn't say anything else. She put the phone face down on her knee, and kept her hand on it, and looked at the paper bat." }
        ] }
      ] },
      { n: "Junpei came down the stairs in his Superman costume, which he had apparently not taken off in two days, with a bowl of cereal, and Hyein looked at him and then at Solar and said, quite seriously, that she was going to need to make him a second one, for washing." },
      { s: 'junpei', f: 'happy', t: "You'd do that? For me?" },
      { s: 'hyein', f: 'neutral', t: "For the appropriate price." },
      { s: 'junpei', f: 'surprised', t: "...What's the appropriate price?" },
      { s: 'hyein', f: 'serious', t: "You take that one off tonight and let me wash it. That's the price. That's the whole price. Non-negotiable." },
      { n: "Junpei looked down at himself, at the S she'd sewn back on with the wrong thread, and held his cereal bowl a little closer to his chest, like a man being asked to give up a pet." }
    ] },

    { after: '11/14', title: '7: the coat', place: 'Paulownia Mall · Shop Windows', time: 'After School', music: 'tender', scene: [
      { n: "November had gotten cold all at once, the way it did in Iwatodai, the wind coming off the bay overnight and staying, and Solar had been going around in her blazer and a scarf Fuuka had lent her, because she owned nothing else, and because, Hyein said, with total contempt, she would rather freeze on a pier in a blouse than admit she was cold." },
      { s: 'hyein', f: 'serious', t: "So I made you a coat." },
      { n: "She'd made it on the second floor, in the empty room at the end of the hall nobody used, on a sewing machine Mitsuru had found in a storeroom and had carried upstairs herself without a word, out of the half meter of sad-wine velvet from the old woman's shop on the strip and a great deal of dark wool, and it was long, and it was the color of the river at night, and it had a velvet collar you could turn up against the wind, and the lining, when Hyein turned it out to show her, was the exact pink of the inside of a shell." },
      { s: 'hyein', f: 'neutral', t: "You have a long black coat at home. Your mom bought it for you last winter. It's fine. It's a coat a mom buys. It's very correct. It's a coat for standing next to people at things and not getting photographed badly." },
      { s: 'hyein', f: 'serious', t: "This one's not correct. This one's yours." },
      { s: 'hyein', f: 'neutral', t: "Put it on. Don't argue. You always argue and then you wear it. Skip the arguing. We don't have time." },
      { choose: [
        { t: "(Put it on without arguing.)", notes: 3, then: [
          { n: "It fit like it had been poured. The shoulders were exactly her shoulders. The sleeves stopped exactly where her wrists began. She turned in front of the shop window and the girl in the glass looked like somebody she'd have been nervous to talk to on a train." },
          { s: 'hyein', f: 'happy', t: "You didn't argue. I'm so proud of you. Hanni's going to lose her mind." }
        ] },
        { t: "(Argue first. A little. For tradition.)", notes: 3, then: [
          { s: 'solar', f: 'neutral', t: "I don't need a coat." },
          { s: 'hyein', f: 'happy', t: "THANK you. Okay. Done. Put it on." },
          { n: "She put it on. It fit like it had been poured. Hyein clapped once, delighted, like a woman who'd watched a play go exactly as rehearsed." }
        ] },
        { t: "How much do I owe you?", notes: 2, then: [
          { s: 'hyein', f: 'neutral', t: "For the appropriate price." },
          { s: 'solar', f: 'neutral', t: "Which is?" },
          { s: 'hyein', f: 'serious', t: "You wear it home. Wherever that is. That's the price. Put it on." },
          { n: "She put it on. It fit like it had been poured, which Hyein had clearly known it would, and she watched Solar find that out in the glass with an expression of enormous, barely contained smugness." }
        ] }
      ] },
      { ifFlag: 'hyein-shop', then: [
        { s: 'hyein', f: 'neutral', t: "Also, I'm doing very well. Professionally. Junpei paid me in yakisoba bread. Akihiko paid me in protein bars, which I told him is not currency, and he looked at me like I'd said the sky was not a color." },
        { s: 'hyein', f: 'happy', t: "Fuuka paid me in a casserole. A full casserole. I'm basically a small business. I'm basically employed." }
      ] },
      { s: 'hyein', f: 'neutral', t: "It's going to snow. Here. Mitsuru said. And you go out at midnight in a blazer and a skirt and come back with your sleeve ripped off, and I can't come with you, and I can't do anything about the monster part. I checked. I asked." },
      { s: 'hyein', f: 'serious', t: "So I did the part I can do. That's all this is. That's the whole thing." },
      { n: "She turned the collar up for Solar herself, both sides, smoothing them with her thumbs, and then stood back, and her face did the thing it did, excitement and something else arriving in the same place and fighting over it." },
      { s: 'hyein', f: 'sad', t: "Take it with you. Wherever. If you go home, wear it home. If you don't—" },
      { s: 'hyein', f: 'neutral', t: "If you don't, wear it here. Wear it in the snow. Wear it to whatever you do at midnight. Just. Something warm from me, wherever you are." },
      { choose: [
        { t: "I'll wear it everywhere.", notes: 3, then: [
          { s: 'hyein', f: 'happy', t: "Good. Correct answer. Gold star." },
          { s: 'hyein', f: 'serious', t: "Not in the bath, though. It's wool. Be smart. Be a smart girl with a coat." }
        ] },
        { t: "(Hug her, coat and all.)", notes: 3, then: [
          { n: "She hugged her in the middle of the shop windows, coat and all, and Hyein, who was taller by half a head, put her chin on top of Solar's hair and said, muffled, that the shoulders were perfect, she could feel it, she was a genius." }
        ] },
        { t: "Why is the lining pink?", notes: 2, then: [
          { s: 'hyein', f: 'neutral', t: "Because the outside's for everybody. The inside's for you. Nobody sees it but you. And me. I see it. I made it." },
          { s: 'hyein', f: 'happy', t: "It's the color of our hallway. At home. Don't make it weird. I'm already making it weird." }
        ] }
      ] },
      { n: "On the way out of the mall a girl from Solar's class stopped dead by the fountain to look at the coat, actually stop, actually look, and Solar felt it the way she always felt being looked at, a small cold drop down the back of her neck, and reached for her collar to turn it down. Hyein got there first. She stepped half a pace ahead, and said very loudly, to no one, that the fountain was spitting on her, *was it spitting on anyone else, it was SPITTING*, and the girl looked at Hyein instead, and so did everyone else, and Solar walked on through the middle of it with her collar up and nobody looking at her at all." }
    ] },

    { after: '11/28', title: '8: three in the morning', place: 'Iwatodai Dorm · 2F Hallway', time: 'Late Night', music: 'night', scene: [
      { n: "Something was buzzing in the hallway at three in the morning. A long, steady, rising whine, like a small engine or a very angry insect, coming from the bathroom at the end of the second floor." },
      { n: "Solar knew the sound before she was awake. She was sitting up in bed with her heart going before she'd decided to be, because she knew it, she knew it so well that for one second she wasn't in Iwatodai at all. She was in a narrow single room with pink curtains and a wall so thin you could hear everything on the other side of it, and someone was drying their hair at three in the morning, the way they did every single night, and it was the most annoying sound in the world and it was the sound that meant she wasn't alone in the building." },
      { ifFlag: 'hyein-menace', then: [
        { n: "Her fist was on the wall before she'd thought about it. Two bangs. Flat, sleepy, completely sincere, the way you'd do a thing you'd done a hundred times without once getting tired of it. On the other side of the wall the hairdryer cut off mid-whine, and there was a silence like a held breath, and then, very faintly, somebody laughing into a towel." }
      ], else: [
        { n: "She sat there in the dark with her hand flat against the wall, as though she'd been about to do something with it, and didn't know what. Then she got up." }
      ] },
      { n: "She went down the hall in her socks. The bathroom door was open. Hyein was sitting on the closed lid of the toilet in her pajamas with a hairdryer in her lap, pointed at nothing, running, on high." },
      { s: 'hyein', f: 'surprised', t: "...Oh no. Did I wake you? I woke you. I'm sorry. Mitsuru lent it to me. I couldn't sleep." },
      { s: 'hyein', f: 'sad', t: "I can't sleep without it. At home I dry my hair at three every night and you bang on the wall and tell me I'm a menace. And then I can sleep. I can't sleep without someone telling me I'm a menace." },
      { choose: [
        { t: "You're a menace.", notes: 3, then: [
          { n: "She said it flat, sleepy, completely sincerely, and banged twice on the bathroom doorframe with her fist for good measure, and Hyein stared at her, and then started laughing so hard she nearly dropped the hairdryer into the sink." },
          { s: 'hyein', f: 'happy', t: "THANK you. Thank you. Oh my God. I'm going to sleep so well." }
        ] },
        { t: "I remember the sound.", notes: 3, then: [
          { s: 'hyein', f: 'surprised', t: "..." },
          { s: 'solar', f: 'neutral', t: "Through the wall. Every night. I used to put my pillow over my head." },
          { s: 'hyein', f: 'sad', t: "You did. You did that. You said it was like sleeping next to an airport." },
          { n: "She turned the hairdryer off. The silence after it was enormous. She held it in her lap like something alive." }
        ] },
        { t: "(Take the hairdryer and dry her hair for her.)", notes: 3, then: [
          { n: "Solar took it out of her hands, and turned it down to low, and stood behind her and dried her hair, the long straight brown weight of it, the way someone must have done it for her once, lifting it in sections, and Hyein sat very still on the toilet lid with her eyes shut and her hands in her lap, like a little kid at a barber's, and didn't say a single word, which was, Solar thought, the first time she'd ever heard her not say one." }
        ] }
      ] },
      { n: "They sat on the bathroom floor with their backs against the tub because neither of them wanted to go back to bed yet, and Hyein turned the hairdryer on low and pointed it at their feet, which was, she said, a luxury, and their socks went warm." },
      { s: 'hyein', f: 'neutral', t: "Can I tell you something and you don't make it weird?" },
      { s: 'hyein', f: 'serious', t: "I'm loud because I'm scared. That's all I am. I'm a scared person who's very loud about it." },
      { s: 'hyein', f: 'neutral', t: "In the tower. The party floor. When that thing reached for me. Hanni just stood there. In front of me. With her arms out. With nothing. No monster. No gun. Her sneakers stuck to the floor." },
      { s: 'hyein', f: 'sad', t: "And I was behind her holding the back of her shirt. That's what I did. I held the shirt." },
      { s: 'hyein', f: 'neutral', t: "Hanni's the brave one. She just cries first. And you're the brave one who never cries. And I'm the loud one. And it works. It's always worked. At home, when somebody's looking at you wrong, when you get that face, I get louder, so they look at me instead. That's my job. I'm very good at it." },
      { s: 'hyein', f: 'sad', t: "And here, you're doing something else, with a gun, at midnight. And Hanni stands in front of monsters now. And I don't know what my part is." },
      { choose: [
        { t: "Your part is the hairdryer at three in the morning.", notes: 3, then: [
          { s: 'hyein', f: 'sad', t: "..." },
          { s: 'hyein', f: 'happy', t: "...Okay. Okay, I can do that. I'm very good at that. I'm the best at that." }
        ] },
        { t: "Your part is telling me the sleeves are too long.", notes: 3, then: [
          { s: 'hyein', f: 'happy', t: "They ARE always too long. You buy everything a size up so you can hide in it. I've been telling you for months." }
        ] },
        { t: "You held on. That counts.", notes: 3, then: [
          { s: 'hyein', f: 'surprised', t: "...It does?" },
          { s: 'solar', f: 'neutral', t: "Somebody has to make sure the person standing in front doesn't get pulled away." },
          { n: "Hyein looked at her for a long time, with the hairdryer humming at their feet. Then she put her head on Solar's shoulder, heavily, all at once, like something set down after carrying it a long way, and left it there." }
        ] }
      ] },
      { n: "They fell asleep there, eventually, against the tub, with the hairdryer off and their feet warm. Mitsuru found them at five, on her rounds, and did not wake them, and when they came down to breakfast there was a second hairdryer on the lounge table with a note on it in very precise handwriting that said only, *For the second floor.*" }
    ] },

    { after: '12/11', title: '9: something you chose', place: 'Paulownia Mall · Shop Windows', time: 'After School', scene: [
      { ifBefore: '12/23', then: [
        { n: "There was going to be a party on the twenty-third. Nobody had exactly decided it. It had started being true the way things did in that dorm, Mitsuru borrowing tables from somewhere she refused to name, Fuuka counting bowls, Junpei telling anyone who'd listen that he had a speech, and Hyein had decided, the second she heard, that for this one, Solar was going to be dressed by her and nobody else, from the ground up, and had dragged her to the fabric shop and then the shoe shop and then the shop windows to look at mannequins as research." }
      ], else: [
        { n: "The year was nearly over, and nobody knew what came after it, and Hyein had decided that whatever it was, Solar was going to be dressed for it by her and nobody else, from the ground up, and had dragged her to the fabric shop and then the shoe shop and then the shop windows to look at mannequins as research." }
      ] },
      { s: 'hyein', f: 'serious', t: "Okay. Tell me what you want." },
      { s: 'solar', f: 'neutral', t: "You're the one with the opinions." },
      { s: 'hyein', f: 'serious', t: "I have so many opinions. I'm not using any of them. This time you tell me." },
      { n: "She said it fiercely, standing in front of a window full of evening dresses with her arms folded and her chin up, and Solar realized she'd planned this, rehearsed it, maybe, on the monorail, the way you'd rehearse a speech for a teacher." },
      { s: 'hyein', f: 'neutral', t: "At home, everything you wear to anything that matters gets picked for you. Your mom. Somebody from your dad's office sends an email. You put it on and you stand there and you look amazing and you look like somebody else's idea." },
      { s: 'hyein', f: 'neutral', t: "And I don't even do better. I picked your Halloween before you'd said yes. I bought the skirt without asking. You said it was too short and I said don't bend over. That's on me. I know that's on me." },
      { s: 'hyein', f: 'sad', t: "I've never once dressed you for something you picked. So. This is something you picked. Tell me what you want to wear to it." },
      { choose: [
        { t: "Something I can run in.", notes: 3, flag: 'hyein-dress-run', then: [
          { s: 'hyein', f: 'surprised', t: "Run?" },
          { s: 'solar', f: 'neutral', t: "I run. Here. At five in the morning. I like it. I want to be able to run if I want to." },
          { s: 'hyein', f: 'happy', t: "...Okay. Okay! Flat shoes. A skirt with room. Something that moves. Oh, I can do something that MOVES." }
        ] },
        { t: "Something with pockets.", notes: 3, flag: 'hyein-dress-pockets', then: [
          { s: 'hyein', f: 'happy', t: "POCKETS. Yes. A dress with pockets is a dress with opinions. I respect that so much." },
          { s: 'solar', f: 'neutral', t: "So I have somewhere to put my hands." },
          { s: 'hyein', f: 'neutral', t: "...Yeah. You always need somewhere to put your hands. Okay. Deep ones." }
        ] },
        { t: "Something red. Like the armband.", notes: 3, flag: 'hyein-dress-red', then: [
          { s: 'hyein', f: 'surprised', t: "Red? You never wear red. You said it was too loud." },
          { s: 'solar', f: 'neutral', t: "I'm louder here." },
          { s: 'hyein', f: 'happy', t: "...You are. You ARE. Okay. Red. Oh, I'm going to make you so loud." }
        ] }
      ] },
      { place: 'Iwatodai Strip', time: 'After School', soft: true },
      { n: "They spent the rest of the afternoon in the fabric shop with the old woman, all three of them pointing and gasping at bolts of cloth, and Solar picked every single thing, the color, the length, the shape of the neckline, and Hyein wrote it all down in her sketchbook without changing a word, only, once, very quietly, adding a pocket." },
      { n: "The old woman measured out the cloth on a brass rule set into the counter, and cut it with scissors as long as her forearm, in one pass, without looking, and folded it into brown paper, and then, before she handed it over, reached across and patted Solar's hand twice where it rested on the counter, and said something to Hyein, and Hyein didn't translate it." },
      { choose: [
        { t: "What did she say?", notes: 2, then: [
          { s: 'hyein', f: 'neutral', t: "I don't know. I don't speak Japanese. I made up everything I ever told you she said." },
          { s: 'hyein', f: 'sad', t: "...It sounded like *look after her.* That's what it sounded like. I don't know. It sounded like that." }
        ] },
        { t: "(Bow to the old woman.)", notes: 3, then: [
          { n: "Solar bowed, properly, the way she'd watched Mitsuru do it at the door to every shop in Paulownia Mall, and the old woman bowed back, a little lower, which nobody had ever done for her in this city, and Hyein, not knowing the rules, bowed too, much too low and much too fast, and nearly hit her head on the counter, and the old woman laughed for the first time in three months of Hyein coming into her shop." }
        ] }
      ] },
      { n: "Outside the light had gone and the strip was lit up and cold, and they walked back with the parcel between them, each holding one end of the string, which was unnecessary and which neither of them suggested changing." },
      { s: 'hyein', f: 'neutral', t: "Sol. Can I ask you a thing. And you don't have to—" },
      { n: "She stopped walking. She looked at the parcel, and at the string in her hand, and at Solar, and Solar watched her get all the way up to the edge of something, close enough to see over it, and then step back." },
      { s: 'hyein', f: 'happy', t: "...Do you want the pocket on the left or the right. That was it. That's the whole question. Left or right." },
      { choose: [
        { t: "Both.", notes: 3, then: [
          { s: 'hyein', f: 'happy', t: "Both. Obviously. Both. You're so greedy. I love that for you." }
        ] },
        { t: "That wasn't the question.", notes: 2, then: [
          { s: 'hyein', f: 'sad', t: "...No. It wasn't." },
          { s: 'hyein', f: 'neutral', t: "Ask me again later. Not today. Today we bought fabric. Today's a good day. I'm not putting the other thing on a good day." }
        ] }
      ] },
      { s: 'hyein', f: 'neutral', t: "It's going to be the best thing I've ever made." },
      { s: 'hyein', f: 'happy', t: "Because you made it. I'm just sewing it." }
    ] },

    { after: '1/19', title: '10: literally stella', place: 'Iwatodai Dorm · Rooftop', time: 'Night', music: 'tender', scene: [
      { n: "Hyein had dragged the long mirror from the second-floor bathroom up the stairs to the roof, by herself, which nobody had asked her to do and nobody could have stopped her from doing, and propped it against the water tank, and now she was standing behind it in the January wind holding something over her arm under a sheet and refusing to explain." },
      { n: "It was so cold the railing hurt to look at. The city below was all hard white lights and black water, and the wind came straight off the bay with nothing in its way, and Solar stood in the middle of the roof in the coat with the collar up and her hands in the pockets, waiting, the way she'd learned to wait for Hyein, which was patiently and with very low expectations of being told anything in advance." },
      { s: 'hyein', f: 'serious', t: "Close your eyes. Don't argue. You can argue after." },
      { n: "Solar closed her eyes. She felt the coat lifted off her shoulders and something else settled there instead, light and cold and slippery, and Hyein's quick hands at her collar, at her sleeves, tucking and smoothing, a pin, two pins, something light and stiff fastened between her shoulder blades, and then a cold metal circle settled on her head, careful, over her hair." },
      { s: 'hyein', f: 'neutral', t: "Okay. Coat back on. Over it. Coats over costumes. I know. I know. It's a personal attack. I'm attacking myself. Arms." },
      { s: 'hyein', f: 'happy', t: "Okay. Open." },
      { n: "Orange and gold. The costume from the sketchbook, finished. Orange satin with small suns stitched all the way down the hem, a skirt that came, she noticed, a sensible two inches lower than the one in the drawing at the fountain, a gold cuff around one arm under the open coat. A thin gold band in her hair with a little sun on it, and a moon. And on her back, she could see them over her shoulder in the mirror, sticking out from under the coat at an angle, two wings. Small ones. Barely bigger than her hands." },
      { s: 'hyein', f: 'neutral', t: "As negotiated." },
      { choose: [
        { t: "(Turn so she can see the wings.)", notes: 3, then: [
          { n: "She turned slowly, keeping one hand on the coat so it wouldn't slip, and Hyein crouched to check the hem, stood, crouched again, and finally put both hands flat against her own thighs like she was physically stopping herself from making one more adjustment." },
          { s: 'hyein', f: 'flustered', t: "Okay. That's it. I'm done. If I touch it again you have to stop me." }
        ] },
        { t: "You remembered the small wings.", notes: 3, then: [
          { s: 'hyein', f: 'serious', t: "Small wings were in the contract. You were very difficult about the wings." },
          { n: "She reached around Solar to straighten one of them anyway, carefully, with two fingers, and her hand stayed on Solar's shoulder when she was finished." }
        ] },
        { t: "How many times did you redo this?", notes: 2, then: [
          { s: 'hyein', f: 'neutral', t: "That is private information between me and the sewing machine." },
          { s: 'hyein', f: 'flustered', t: "...The skirt, twice. Don't look at me like that. It was worth doing twice." }
        ] }
      ] },
      { ifFlag: 'hyein-dress-run', then: [
        { s: 'hyein', f: 'neutral', t: "Flat shoes. Look down. You can run in these. You said you wanted to be able to run. I don't forget things you want." }
      ] },
      { ifFlag: 'hyein-dress-pockets', then: [
        { s: 'hyein', f: 'neutral', t: "Pockets. Both sides. Stella doesn't have pockets. Stella's wrong. Put your hands in. Somewhere to put your hands." }
      ] },
      { ifFlag: 'hyein-dress-red', then: [
        { s: 'hyein', f: 'neutral', t: "And there's red in the lining. Like the armband. Don't tell the show. The show would be furious." }
      ] },
      { ifFlag: 'hyein-stella', then: [
        { s: 'hyein', f: 'serious', t: "You asked me. At the fountain. Ten past four. *Make it again. Here.* You've never asked me to make you anything in your life, and you asked for this. So I made it again. Here." }
      ], else: [
        { s: 'hyein', f: 'serious', t: "Nobody asked me to. I know. I did it anyway. I've been doing it since October in the room at the end of the hall. Hanni kept watch. She's a terrible lookout. She kept coming in to tell me she was keeping watch." }
      ] },
      { n: "And she knew. All at once, the way the cold came up off the roof. A different mirror, in a bathroom full of steam and four girls and two curling irons going and costume bags hanging off the shower rod, and this exact face looking back at her, and for once not checking itself for damage, and a voice behind her, loud, delighted, too much, in her ear." },
      { s: 'solar', f: 'neutral', t: "...Oh my God. I'm literally Stella." },
      { n: "Hyein made a sound she had never made before. It wasn't a scream. It was smaller and worse than a scream. She put both hands over her mouth and stood behind the mirror shaking." },
      { s: 'hyein', f: 'sad', t: "That's my line. That's MY line. You stole my line. You never say my line. You always tell me to stop saying it." },
      { s: 'solar', f: 'neutral', t: "Please don't start calling me that." },
      { s: 'hyein', f: 'sad', t: "...I won't, Stella." },
      { s: 'solar', f: 'neutral', t: "Hyein. You're being so annoying." },
      { n: "Not carefully. Not checking her face afterward to see whether she'd minded. It came out with the same exhausted affection as it had on the riverside, as it must have in a hundred rooms before that one, and Hyein laughed through the sound she'd been making." },
      { choose: [
        { t: "Stop crying. You'll ruin your own makeup work.", notes: 3, then: [
          { s: 'hyein', f: 'happy', t: "I'M NOT WEARING ANY. I'M CRYING ON PURPOSE. Let me have this." },
          { n: "She came around the mirror and hugged her so hard the wings bent, and then she shrieked about the wings, and then she fixed them, crying, with Solar still inside the hug, which was a skill, honestly, Solar told her so." }
        ] },
        { t: "ur so annoying.", notes: 3, then: [
          { s: 'hyein', f: 'sad', t: "..." },
          { s: 'hyein', f: 'happy', t: "I KNOW. I know I am. I missed it so much. Say it again. Say it every day." },
          { n: "She came around the mirror and hugged her so hard the wings bent, and didn't let go even to fix them." }
        ] },
        { t: "You made the skirt longer.", notes: 3, then: [
          { s: 'hyein', f: 'flustered', t: "...I hear criticism and I choose to ignore her. Except sometimes. Sometimes I hear her and I go home and take the hem down two inches at one in the morning and never tell anybody." },
          { n: "She came around the mirror and hugged her, carefully this time, with her arms around the outside of the coat so the wings wouldn't bend, which was, for Hyein, an act of enormous restraint, and lasted about four seconds, and then the wings bent anyway." }
        ] }
      ] },
      { ifFlag: 'call-R', then: [
        { s: 'hyein', f: 'neutral', t: "You said you think you want to. On the roof. In December. With the cans. I'm not holding you to it." },
        { s: 'hyein', f: 'sad', t: "...I'm holding you to it a little. Like two percent. Like a rounding error." }
      ], else: [
        { s: 'hyein', f: 'neutral', t: "You didn't say yes. On the roof. In December. That's okay. Hanni says not saying yes isn't saying no. I said it's rude. She said it's yours." }
      ] },
      { n: "Hanni came up a minute later, because she'd heard the sound Hyein made from three floors down, and stopped in the stairwell door with her face doing everything at once, and the three of them stood on the roof in the cold in front of a bathroom mirror, one of them dressed as a fairy under a long dark coat, and none of them said anything for a long time, and the wind took the edge of the orange skirt and lifted it and set it down again." },
      { s: 'hyein', f: 'neutral', t: "Okay. It's cold. Inside. Drink water. Ttyl." },
      { s: 'hyein', f: 'sad', t: "...I'm not going anywhere, I just always say that. I'm going to stand here for five more minutes. Don't look at me." },
      { n: "Solar didn't look at her. She stood beside her instead, looking at the city, in the coat and the wings, and after a while Hanni came and stood on Hyein's other side, and Hyein, who was the tallest, put an arm around each of them, and the three of them stood there and were looked at by nobody at all." }
    ] }
  ],

  // After MAX: rotate in order at her usual spot (Hyein doesn't close; the searchers stay until the last week).
  afterMax: [
    { title: 'the books', place: 'Paulownia Mall · Shop Windows', time: 'After School', music: 'city', scene: [
      { ifFlag: 'hyein-shop', then: [
        { n: "The sketchbook had a second sketchbook now. It had been bought for the purpose, at the stationery shop by the escalators, a plain black one with an elastic band, and across the first page in capitals it said *COMMISSIONS · IWATODAI*, and the list under it had gone over onto a second page and was threatening a third." }
      ], else: [
        { n: "Hyein had started taking commissions. Nobody had told her to. Junpei had asked for a second cape, and then Ken had asked, very formally, whether a scarf could be made for a dog in a color that would not embarrass the dog, and somewhere in there she'd bought a plain black notebook with an elastic band at the stationery shop by the escalators and written *COMMISSIONS · IWATODAI* across the first page in capitals, and now the list under it had gone over onto a second." }
      ] },
      { n: "She had it open against the shop window like a clipboard, and was going down it with her pen, reading aloud, while Solar stood beside her in the coat holding two paper cups of something hot and being, Hyein had announced, her business manager, a job that so far consisted of holding the cups." },
      { s: 'hyein', f: 'serious', t: "Junpei. Superman, second. Delivered. Paid. Ken, scarf for Koromaru, red, trial basis, made permanent. Paid in a very formal thank-you note. I'm keeping the note. It's the nicest thing anyone's ever written me." },
      { s: 'hyein', f: 'neutral', t: "Fuuka. Apron. With a pocket for a ladle. She asked if that was too much to ask. I said *Fuuka, that's the least anyone has ever asked me for anything.* She cried. I don't know why. I think it was a happy cry." },
      { s: 'hyein', f: 'flustered', t: "And Akihiko. Jacket. From the measurements. In September. He came and found me last week and said, and I'm quoting, *you said hypothetical.* He's been carrying that around for four months. He wants the hypothetical jacket." },
      { choose: [
        { t: "Charge him double.", notes: 3, then: [
          { s: 'hyein', f: 'happy', t: "DOUBLE. Yes. Double protein bars. He'll do it. He'll pay in protein bars and he'll be so serious about it." },
          { s: 'hyein', f: 'serious', t: "You're a great business manager. You're ruthless. I knew you had it in you. You get it from your father." },
          { n: "She said it as a joke, and then heard it, and looked at Solar quickly to see how it had landed. It had landed fine. Solar laughed, and it was a real one, and Hyein let go of a breath she'd been holding without telling anyone." }
        ] },
        { t: "Make it for free.", notes: 2, then: [
          { s: 'hyein', f: 'surprised', t: "FREE? I'm a professional. I have rates. My rates have gone UP." },
          { s: 'hyein', f: 'neutral', t: "...I was going to make it for free. Don't tell him. He'll try to pay me anyway and it'll be a whole thing." }
        ] },
        { t: "What's Mitsuru's commission?", notes: 3, then: [
          { s: 'hyein', f: 'neutral', t: "Nothing. She hasn't asked. She won't ask." },
          { s: 'hyein', f: 'serious', t: "So I'm making her something anyway. A scarf. A soft one. Not red. Everything she owns is a color that means business. This one's going to be a color that means nothing. That means *Sunday.*" },
          { s: 'hyein', f: 'happy', t: "Don't tell her. She'll find out when it's on her neck." }
        ] }
      ] },
      { n: "At the bottom of the second page, under the dorm's names, under Aigis's sweater and Yukari's single button and somebody's very long list of trouser alterations, there was a last line in smaller handwriting, and Solar read it upside down before Hyein could turn the page. *Solar. Everything. Forever. No charge.*" },
      { s: 'hyein', f: 'neutral', t: "That's a standing order. Don't read my books. It's private financial information." }
    ] },

    { title: 'fitting', place: 'Paulownia Mall · Shop Windows', time: 'After School', scene: [
      { n: "Hyein had a new mannequin to fight. She'd been fighting it since Thursday. It was wearing a scarf wrong, wrapped twice and tucked under itself like a bandage, and she'd asked the shop to let her fix it, very politely, through Fuuka, who had translated with her face going slowly pinker, and they'd said no, and she was taking it personally." },
      { s: 'hyein', f: 'serious', t: "Stand in front of it. Look like you're wearing it right. It needs to see." },
      { s: 'solar', f: 'neutral', t: "I'm not wearing a scarf." },
      { s: 'hyein', f: 'neutral', t: "You're wearing a coat I made with the collar up. That's a scarf in spirit. Stand there. Be correct at it." },
      { choose: [
        { t: "(Stand in front of it and look smug.)", notes: 3, then: [
          { n: "Solar stood in front of the window with her hands in her pockets and her chin up and looked at the mannequin the way she'd look at a support who'd forgotten to heal, and in the glass she could see her own face doing it, a face she hadn't known she owned, cool and bored and entirely sure of itself." },
          { s: 'hyein', f: 'happy', t: "YES. Look at it. It's ashamed. It knows." },
          { s: 'hyein', f: 'neutral', t: "That face. That's your Sigma face. You used to do that face at boys who said *hey, aren't you Jaehyun's sister.* I haven't seen it in five months. Welcome back, face." }
        ] },
        { t: "(Fix the scarf on the mannequin when the clerk isn't looking.)", notes: 3, then: [
          { s: 'hyein', f: 'surprised', t: "SOL. That's CRIME." },
          { s: 'hyein', f: 'happy', t: "...That's so much better. You did it right. Once and loose and one end long. I taught you that. I'm so proud of my criminal." },
          { n: "The clerk came back, and looked at the mannequin, and looked at it again, and then at the two girls standing in front of the window being very interested in the price of a belt, and then, after a long moment, went and got a second scarf and did the other mannequin the same way." }
        ] },
        { t: "Leave it. It's doing its best.", notes: 2, then: [
          { s: 'hyein', f: 'sad', t: "Its best is a bandage, Sol. Its best is a cry for help." },
          { s: 'hyein', f: 'neutral', t: "...Fine. It's doing its best. I'll respect its journey. From over here. With my arms crossed." }
        ] }
      ] },
      { n: "They walked the whole row of windows after that, all twelve of them, the way they apparently used to do the shops along the main street at home on Sunday afternoons, Hyein rating every mannequin out of ten in a voice the whole second floor could hear and Solar disagreeing with every rating on principle, until they got to the end and Hyein turned around and said that it was a tie, which it wasn't, and that they'd have to come back and do it again, which they would." }
    ] },

    { title: 'menace', place: 'Iwatodai Dorm · 2F Hallway', time: 'Late Night', music: 'night', scene: [
      { n: "Three a.m. The hairdryer, through the bathroom door, on high." },
      { ifFlag: 'hyein-menace', then: [
        { n: "Solar banged twice on the wall without getting out of bed, without opening her eyes, without being in any real sense awake, the way she'd breathe." }
      ], else: [
        { n: "Solar lay there for a second with her eyes shut, deciding, and then reached up and banged twice on the wall without getting out of bed. It felt like the most natural thing she'd ever done. It felt like putting her foot on a stair in the dark and finding it there." }
      ] },
      { n: "The hairdryer went off. A pause. Then two bangs back, and Hyein's voice, muffled, very pleased." },
      { s: 'hyein', f: 'happy', t: "THANK YOU. GOODNIGHT." },
      { choose: [
        { t: "(Bang once more. For good measure.)", notes: 3, then: [
          { n: "One more bang came back, and then silence, and then, very faintly, Hyein laughing into her pillow, and then, a long time later, when Solar was almost asleep, one more, very soft, the knock of someone checking that you're still there." }
        ] },
        { t: "(Go and sit on the bathroom floor with her anyway.)", notes: 3, then: [
          { n: "Warm socks. The tub at their backs. The second hairdryer, the one with Mitsuru's note still taped to the handle, on low, pointed at their feet. Hyein talked about a coat she was going to make someday for someone famous, a coat so good it would end up in a museum with a little card next to it with her name on, and Solar fell asleep halfway through the buttons." }
        ] },
        { t: "(Text her.)", notes: 2, then: [
          { phone: [
            { from: 'solar', t: "ur a menace" },
            { from: 'hyein', t: "I KNOW" },
            { from: 'hyein', t: "gn sol" },
            { from: 'hyein', t: "drink water. ttyl" }
          ], contact: 'hyein' },
          { n: "Solar looked at it for a while in the dark. Drink water. She got up and drank a glass at the bathroom sink on the way past, because somebody had told her to, and on the other side of the door the hairdryer started up again, low, for about four seconds, and stopped, like a laugh." }
        ] }
      ] }
    ] },

    { title: 'the river, again', place: 'Iwatodai · Riverside', time: 'After School', music: 'day', scene: [
      { n: "It was Hyein's idea to go back to the river, and Solar knew why before they got there, because Hyein had been quiet the whole walk down from the dorm, quiet for her, which meant she'd only talked about three things instead of nine." },
      { n: "The railing was cold enough to sting through gloves. The water was low and slow and gray, and there were ducks on it now that hadn't been there in October, paddling in a line against the current and getting nowhere, very calmly, like they'd decided that was the point." },
      { ifFlag: 'hyein-yelled', then: [
        { s: 'hyein', f: 'neutral', t: "Okay. Last time we yelled bad things. Today we yell good things. That's the rule. I just made it. Rules are binding if you make them at a river." }
      ], else: [
        { s: 'hyein', f: 'neutral', t: "Okay. Last time I yelled and you stood there. Today you yell. Good things. That's the rule. I just made it. Rules are binding if you make them at a river." }
      ] },
      { s: 'hyein', f: 'happy', t: "I'll go first. To show you how." },
      { n: "She put her hands around her mouth, and filled her whole chest, and yelled at the river that she'd made a coat. That she'd made a coat in another world on a sewing machine from a storeroom and it fit perfectly. That Mitsuru Kirijo had let her measure her. That she had clients. That the fabric lady had laughed. That she'd found the best pair of tights in this entire country, finally, at the very back of a drugstore, on the bottom shelf, in January." },
      { n: "The ducks went on paddling. On the far bank a man walking a very small dog stopped, and looked across at them, and Solar was almost sure it was the same man and the same dog, and that both of them recognized her." },
      { s: 'hyein', f: 'happy', t: "Your turn. Good things. Go." },
      { choose: [
        { t: "(Yell that she's being annoying.)", notes: 3, then: [
          { n: "She yelled it, *Hyein, you're being so annoying,* at the top of her voice, at a river in a city on the other side of the world from the first time she'd said it, and Hyein made a noise like she'd been punched in the stomach by something wonderful and grabbed the railing with both hands." },
          { s: 'hyein', f: 'sad', t: "That's cheating. That's cheating. You can't yell my name at a river. Now the river knows. Now the ducks know." }
        ] },
        { t: "(Yell that the coat is warm.)", notes: 3, then: [
          { n: "She yelled it. *The coat is warm.* It sounded stupid and small in all that open cold air, four words, and Hyein went completely silent beside her, and then put her face in her own scarf, and stayed there, and said, from inside the scarf, that it was the best review she'd ever gotten." }
        ] },
        { t: "(Yell everyone's names. All of them.)", notes: 3, then: [
          { n: "She yelled all of them. Hanni. Hyein. Minji. Every name she'd learned since September and every name she'd had since April, S.E.E.S. and searchers and a dog, in no order, as loud as she could, and somewhere around Koromaru Hyein started yelling them with her, and they ran out of breath at the same time on Junpei, which felt correct." }
        ] }
      ] },
      { s: 'hyein', f: 'neutral', t: "That was good. You're good at it. You're a natural yeller. You hid it for years. You hid it under a very expensive coat your mom bought you." },
      { s: 'hyein', f: 'serious', t: "Don't hide it under mine. Mine's for wearing loud." },
      { n: "On the way back up the path she didn't hold Solar's hand and swing it, the way she had in October. She just walked very close, close enough that their sleeves touched every step, the velvet collar against the wool, and talked about nine things again, and Solar let her." }
    ] },

    { title: 'pins', place: 'Iwatodai Dorm · Lounge', time: 'Evening', music: 'tender', scene: [
      { n: "Hyein had decided Solar was going to learn to sew. Not much. Not properly. A button and a hem, she said, the way you'd say a fire exit and a phone number, two things every person should know where to find in the dark." },
      { n: "She'd set it up on the lounge table like a surgery, a square of scrap wool, a card of black buttons, Mitsuru's kit open with every thread in its place, and a pincushion shaped like a tomato that she had, she said, owned since high school and carried across a whole universe in her bag without knowing it, which she found very moving and Solar found very funny." },
      { s: 'hyein', f: 'serious', t: "Needle. Thread. Don't lick the thread. Okay, lick the thread. Everyone licks the thread. It's not in any book but everyone does it." },
      { n: "Solar's first button went on crooked and sideways and wouldn't come undone. Her second went on through the wrong layer and sewed the wool to the tablecloth. The third went on straight, and stayed, and Hyein picked the square of wool up and tugged the button hard, twice, like a dentist, and it held." },
      { s: 'hyein', f: 'surprised', t: "...Huh. Okay. Okay, you're good at this. Why are you good at this? You've never sewn anything in your life. You made me hem your skirts at one in the morning." },
      { choose: [
        { t: "I've watched you do it a hundred times.", notes: 3, then: [
          { s: 'hyein', f: 'sad', t: "...Yeah. I guess you have." },
          { n: "She didn't say anything else for a moment. She turned the little square of wool over in her hands, and looked at the back of the button, where the thread crossed itself four times, neat, the way she did it, exactly the way she did it." }
        ] },
        { t: "Beginner's luck.", notes: 2, then: [
          { s: 'hyein', f: 'serious', t: "There's no such thing as beginner's luck. There's just people who were secretly paying attention. You were secretly paying attention." }
        ] },
        { t: "I had a good teacher.", notes: 3, then: [
          { s: 'hyein', f: 'flustered', t: "Okay, stop. Don't. I'm holding a needle. I'm going to cry on a needle. That's dangerous." }
        ] }
      ] },
      { s: 'hyein', f: 'neutral', t: "Hems now. If a hem goes, you fold it like this, you pin it, you go in and out small, small, smaller than that, so it doesn't show from the outside. Nobody should ever know it went." },
      { s: 'hyein', f: 'neutral', t: "That's the whole thing, really. That's all I know. You make it so nobody can tell from the outside." },
      { n: "She didn't say why this, why now. She didn't have to. It sat in the room with them, polite and enormous, in the space between a girl who'd come a very long way to fix things for someone and the someone, learning to fix them herself." },
      { choose: [
        { t: "I'll still need you.", notes: 3, then: [
          { s: 'hyein', f: 'happy', t: "Obviously. You can do a button. You can't do a coat. Don't get cocky." },
          { s: 'hyein', f: 'sad', t: "...Thank you. I know that's what you meant. I heard it." }
        ] },
        { t: "(Sew a crooked little sun on the scrap of wool.)", notes: 3, then: [
          { n: "Solar picked up the gold thread without asking and sewed a sun on the corner of the scrap, seven rays, uneven, lopsided, the worst sun anyone had ever sewn, and held it out." },
          { s: 'hyein', f: 'neutral', t: "...It looks like someone made it." },
          { n: "She folded the square of wool in half, very carefully, and put it in the back of her sketchbook, between the pages with the four numbers on them, and closed it, and kept her hand flat on the cover." }
        ] }
      ] },
      { s: 'hyein', f: 'happy', t: "Okay. Lesson over. You passed. You're certified. I'm going to make you a little certificate. It's going to be so ugly. It's going to be the ugliest award ever made." },
      { s: 'hyein', f: 'neutral', t: "That's how you know it's real." }
    ] }
  ]
});
