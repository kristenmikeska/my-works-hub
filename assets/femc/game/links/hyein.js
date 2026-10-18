/* Hyein · ? Revamp social link data (femc-game.html). Format: link fields in assets/femc/game/core.js, scene lines in scene.js.
   Searcher (Runners), friendship. Solar's sorority sister: the Fashion major, the tallest of the girls, excitable, says
   what she thinks louder than she should, and her shoulders know she's excited before her mouth does. A separate link from
   Hanni (Kat's ruling); they appear in each other's scenes. No Persona (Kat's ruling). Her crossing with Hanni (9/12) and
   "names, then" (9/13) are story events; rank 1 is the first afternoon after. Plot doc: "why are you typing like that"
   becomes "why are you talking like that". Canon echoes: the Winx Club costumes (Hyein as Bloom, Hanni as Flora, Minji as
   Musa, Solar as Stella, the fairy of the sun and moon; "ITS UR NAME THIS WAS PREDESTINED FR"; "you're literally Stella"),
   her costumes winning and her commissions. Nothing from home moves Runners' plot.
   Texting voice: @hyein, caps when excited, ur, ltrly, fr. Arcana: '?' (open question, plot doc §16.6). */
(window.FEMC_GAME_LINKS ||= []).push({
  id: 'hyein', name: 'Hyein Lee', short: 'Hyein', arcana: '?', numeral: '', from: 'Runners',
  kind: 'searcher', world: 'R', romance: null,
  starts: '9/12', gate: { R: 3 },
  home: { area: 'mall', spot: 'Shop Windows', slot: 'after', days: [0, 2, 4, 6],
          hint: 'Afternoons along the shop windows in Paulownia Mall, judging every mannequin out loud.' },
  approach: "A very tall girl with very long, very straight hair is standing in front of a shop window in Paulownia Mall telling a mannequin, out loud, exactly what's wrong with its jacket, and she spots you in the glass and turns around already pointing.",
  cast: {},
  invite: {
    ask: ["SOL. come to the mall. i need a body", "r u busy. dont be busy. i made u something", "EMERGENCY. fashion emergency. come now", "the shop on the second floor got new coats and i need to touch them with a witness", "hanni says im being too much today. come be too much with me", "ok i need ur opinion and then im going to ignore it. come"],
    ok: ["YAY. shop windows. 10 min", "ok!!!! dont dress up. i'll fix u", "OK. bring ur whole self"],
    no: ["ok but ur missing a LOOK", "fine. drink water. ttyl", "ok!! tmrw then. i'll still be here being right"]
  },
  hangouts: [
    [
      { n: "Hyein had found a fabric shop on the strip run by an old woman who spoke no English and needed none, and the two of them had developed, over a week, a whole language made of pointing and gasping, and Solar was now standing in the doorway watching it happen." },
      { s: 'hyein', f: 'happy', t: "She has VELVET. Sol. She has a velvet in a color I have never seen. It's like if wine was sad." },
      { choose: [
        { t: "(Touch the velvet.)", notes: 3, then: [
          { n: "She touched it. It was very soft. The old woman watched her touch it and said something approving, and Hyein translated it, wrongly and confidently, as *your friend has taste.*" }
        ] },
        { t: "What would you make with it?", notes: 3, then: [
          { s: 'hyein', f: 'serious', t: "A coat. Long. For you. Obviously. You'd look like a villain in a period drama. You'd look like you were about to inherit something." }
        ] },
        { t: "Do you have money for velvet?", notes: 1, then: [
          { s: 'hyein', f: 'neutral', t: "No. Mitsuru gave me an envelope. I'm being responsible. I'm just going to look at it. With my hands." }
        ] }
      ] },
      { n: "She bought half a meter of it anyway, with her own coins, and carried it home under her arm like a cat." }
    ],
    [
      { n: "Hyein was sketching on the dorm's front steps with her knees up and her sketchbook propped on them, drawing the people walking past on the street below, and every single one of them was wearing something better than what they were actually wearing." },
      { s: 'hyein', f: 'neutral', t: "That man. Look at that man. He's wearing a beige jacket. I've given him a camel coat. He deserves it. He's had a hard day. Look at his face." },
      { choose: [
        { t: "Do me.", notes: 3, then: [
          { n: "She drew Solar in four quick lines. Not in a coat. In the Gekkoukan uniform, exactly as she was, with the armband, with her hair falling in her face. Then she looked at it and frowned and didn't change anything." },
          { s: 'hyein', f: 'neutral', t: "...Huh. I don't want to fix you. That's new. Don't let it go to your head." }
        ] },
        { t: "Give that kid a cape.", notes: 2, then: [
          { s: 'hyein', f: 'happy', t: "A CAPE. Yes. He's earned it. He's been holding his mom's bag for twenty minutes." }
        ] }
      ] }
    ],
    [
      { n: "Hyein had decided Koromaru needed a scarf. Ken had decided Koromaru did not need a scarf. The two of them were in the lounge negotiating it like a treaty, while Koromaru sat between them looking from one to the other with the patient dignity of a dog who could hear his name." },
      { s: 'ken', f: 'neutral', t: "He doesn't get cold. He's a Shiba. It's in the breed." },
      { s: 'hyein', f: 'serious', t: "Everyone gets cold, Ken. Everyone. It's in the breed of being alive." },
      { choose: [
        { t: "(Side with Ken.)", notes: 2, then: [
          { s: 'hyein', f: 'surprised', t: "BETRAYAL. In my own home. Which isn't my home." }
        ] },
        { t: "(Side with Hyein.)", notes: 3, then: [
          { n: "Ken looked at the two of them, outnumbered, and sighed like a man three times his age, and permitted one scarf, red, on a trial basis. Koromaru wore it with enormous pride for the rest of the evening and refused to let anyone take it off." }
        ] }
      ] }
    ]
  ],
  ranks: [
    { after: '9/15', title: '1: why are you talking like that', place: 'Paulownia Mall · Shop Windows', time: 'After School', music: 'city', scene: [
      { n: "The first thing Hyein had done when the Dark Hour ended in the middle of Paulownia Mall and the lights came back on and she found herself standing in the atrium with her bags dropped at her feet and Solar right there in front of her, the actual Solar, her Solar, in a uniform Hyein would have had *notes* on, was scream her name. The second thing she'd done, when Solar had said, politely, *I'm sorry, do I know you?*, was burst into tears. The third, about a minute later, was to point out, still crying, that the uniform's skirt was hemmed crooked." },
      { n: "So it made a strange kind of sense that three days later Solar found her in front of the shop windows on the mall's second floor, staring at a mannequin with her arms folded, like a woman who'd lost a fight with it and was waiting for a rematch." },
      { register: 'hyein' },
      { s: 'hyein', f: 'happy', t: "SOLAR. Oh my God, perfect, come here, I need a body." },
      { n: "Solar looked behind her. There was nobody behind her but a man walking a very small dog, who looked back at her, with the dog, in what felt like solidarity." },
      { s: 'hyein', f: 'serious', t: "Not him. You. Come here. Stand here. Don't move. Things lie on hangers. I need to see this on a person." },
      { n: "The jacket was cropped and structured, dark wool, nothing like anything Solar owned, which was nothing, and Hyein had it off the rack and onto Solar's shoulders before she'd finished walking over, tugging the hem, frowning at the sleeves with her whole face, a pin held in the corner of her mouth that Solar had not seen her take out of anywhere." },
      { s: 'hyein', f: 'serious', t: "Okay. So this is either giving, or it's not giving, and I genuinely can't tell." },
      { choose: [
        { t: "It's giving.", notes: 3, then: [
          { s: 'hyein', f: 'surprised', t: "...Since when do you say *giving?*" },
          { s: 'hyein', f: 'happy', t: "No. I love it. I'm so proud of you. Hanni! HANNI. She said giving. She's learning. She's learning from scratch." }
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
      { n: "Hanni came out of the shop next door with a paper bag and her face lit up at the sight of the two of them, and then lit up more, and then went soft at the edges, the way it did, all of it out loud." },
      { s: 'hanni', f: 'happy', t: "Oh! She's in a jacket! Hyein, you got her in a jacket!" },
      { s: 'hyein', f: 'neutral', t: "I got her in a jacket and she said *thank you, Hyein, that's very kind of you.* Out loud. With her mouth. Like a hotel." },
      { n: "She said it lightly. Her voice did a thing at the end, a little crack, like a seam letting go, and she turned back to the mirror and fixed a sleeve that didn't need fixing." },
      { s: 'hyein', f: 'sad', t: "Why are you talking like that, Sol. That's all. That's all I want to know. Why are you talking like that." },
      { choose: [
        { t: "Like what?", notes: 2, then: [
          { s: 'hyein', f: 'serious', t: "Like you're scared you'll break us. You've never once been scared you'd break us. You throw us around. You throw us at Sigma parties. You say *ur so annoying* and leave. You're not *polite* to us." }
        ] },
        { t: "I don't know how to talk to you yet.", notes: 3, then: [
          { s: 'hyein', f: 'sad', t: "...Okay." },
          { s: 'hyein', f: 'neutral', t: "Okay. That's a real answer. I hate it. It's fair. Learn faster." }
        ] },
        { t: "ur so annoying.", notes: 3, then: [
          { n: "It came out of her flat and bored and perfect, every letter lowercase even out loud, and Hyein's eyes went huge in the mirror, and then she spun around and grabbed Solar by both shoulders, the pin still in her mouth." },
          { s: 'hyein', f: 'happy', t: "SAY IT AGAIN. SAY IT AGAIN, I'M RECORDING. Hanni, get your phone. Hanni, your phone doesn't work, get it anyway." }
        ] }
      ] },
      { n: "She bought the jacket. She didn't let Solar look at the price. She said it was a loan, from her to Solar, and that Solar could pay her back by wearing it, and Solar did, all the way home on the monorail, with the sleeves pinned, while Hyein watched her reflection in the dark train window across the aisle like she was making sure it stayed." }
    ] },

    { after: '9/24', title: '2: measurements', place: 'Iwatodai Dorm · Lounge', time: 'Evening', music: 'joy', scene: [
      { n: "Hyein had found a tape measure. Nobody knew where. She'd come down to dinner with it around her neck like a doctor's stethoscope, and by the end of dinner she had measured everyone at the table, with permission, more or less, and was writing the numbers down in her sketchbook with the expression of a scientist who had discovered several new species." },
      { s: 'hyein', f: 'serious', t: "Junpei. Your inseam is a tragedy. Who made those trousers? Who hurt you?" },
      { s: 'junpei', f: 'flustered', t: "They're school trousers! Everyone's are like this!" },
      { s: 'hyein', f: 'neutral', t: "Everyone's are a tragedy. Yours are a tragedy specifically." },
      { n: "Akihiko had volunteered for measuring with a readiness that suggested he had misunderstood the exercise, and stood in the middle of the lounge with his arms out, flexing very slightly, until Hyein told him that she was measuring his shoulders for a jacket and not judging a competition, and he lowered his arms looking, for one second, very slightly disappointed." },
      { s: 'hyein', f: 'happy', t: "Mitsuru-senpai. Can I measure you? You can say no. You're going to say no." },
      { s: 'mitsuru', f: 'neutral', t: "...What would it be for?" },
      { s: 'hyein', f: 'serious', t: "Nothing. Yet. I just want to know. You stand like you've been fitted since you were a baby. I want to know if I'm right." },
      { n: "Mitsuru looked at her for a long moment over the top of a teacup. Then she set it down, and stood, and held out her arms, and the whole lounge went silent like a church." },
      { s: 'hyein', f: 'surprised', t: "...Oh my God. Okay. Okay. Nobody breathe." },
      { n: "When she got to Solar, she didn't take the tape off her neck. She looked at Solar for a second, up and down, the way a tailor looks at someone across a room, and then wrote four numbers in her sketchbook without measuring anything at all." },
      { s: 'solar', f: 'surprised', t: "You didn't measure me." },
      { s: 'hyein', f: 'neutral', t: "Don't need to. I know yours. I've made you four things. I've taken in two more. I know your measurements better than whoever your dad pays to know them." },
      { choose: [
        { t: "Check. Measure me anyway.", notes: 3, then: [
          { n: "Hyein measured her. Shoulders. Waist. Arm, shoulder to wrist. Every number was the same as the one in the sketchbook, to the half centimeter, and Hyein didn't look triumphant about it. She looked at the tape around Solar's wrist and went quiet." },
          { s: 'hyein', f: 'sad', t: "...Same. You're exactly the same. You haven't eaten enough. But you're the same." }
        ] },
        { t: "Four things?", notes: 3, then: [
          { s: 'hyein', f: 'neutral', t: "A skirt. A top for a party you left early. A costume. A scarf you lost in a week and pretended you didn't." },
          { s: 'hyein', f: 'serious', t: "You never asked me to make any of them. You just wore them. That's how you say thank you. You wear things." },
          { n: "Solar didn't say anything. Something had moved, low down, a long way back, like the bottom step of a staircase in a house she'd been carried out of in her sleep. A scarf. Lost on purpose. Somebody's hands, quick and sure, fixing a hem on her while she stood very still." }
        ] },
        { t: "That's a little scary.", notes: 2, then: [
          { s: 'hyein', f: 'happy', t: "It's a LOT scary. It's my gift. I'll know your measurements when I'm ninety." }
        ] }
      ] },
      { n: "Later, when everyone had gone up, Solar found her sitting alone on the lounge floor with the sketchbook open in her lap to a page with nothing on it but four numbers, Solar's, written very neatly, and underlined, and Hyein was looking at them the way other people look at a photograph." }
    ] },

    { after: '10/3', title: '3: small wings', place: 'Paulownia Mall · Central Atrium', time: 'After School', scene: [
      { n: "The fountain in the atrium was throwing its water up at the glass roof, and Hyein had her sketchbook open on her knees on the fountain's rim, drawing fairies. Four of them. Each one in a different color, each one with a different kind of wings, every line quick and sure and a little too much." },
      { s: 'hyein', f: 'happy', t: "Okay. Look. This is us. At home. Halloween. You don't remember. I'm telling you anyway." },
      { s: 'hyein', f: 'happy', t: "Winx Club. Me, Bloom, red hair, fire, obviously, she's the main character. Hanni, Flora, nature, the nice one. Minji, Musa, music, she didn't want to, she did it anyway." },
      { n: "She turned the page. A fourth fairy in orange and gold, with a tiara, and a long wand topped with a sun and a crescent moon, and very small wings." },
      { s: 'hyein', f: 'serious', t: "And you. Stella. The fairy of the sun and the moon." },
      { s: 'hyein', f: 'serious', t: "It's ur NAME. It was PREDESTINED." },
      { choose: [
        { t: "My parents did not name me after a cartoon.", notes: 3, then: [
          { s: 'hyein', f: 'happy', t: "WE DON'T KNOW THAT FOR CERTAIN." },
          { n: "She said it so fast, so instantly, that Solar knew she'd said it before, in exactly those words, in capitals, and Hyein knew it too, and both of them stopped, and Hyein put the pencil in her mouth and bit it and looked away at the fountain." },
          { s: 'hyein', f: 'sad', t: "...You said that. In the chat. Word for word." }
        ] },
        { t: "Why are the wings so small?", notes: 3, then: [
          { s: 'hyein', f: 'neutral', t: "Because you negotiated. You fought me on the wings for two days. You said if they were bigger than your hands you'd go as a lamp." },
          { s: 'hyein', f: 'happy', t: "So, small wings. As negotiated. I respected it. I hated it. I respected it." }
        ] },
        { t: "I'm not really a fairy person.", notes: 2, then: [
          { s: 'hyein', f: 'neutral', t: "Neither is she. She still has to." }
        ] }
      ] },
      { s: 'hyein', f: 'neutral', t: "Do they do Halloween here? Properly? With costumes?" },
      { s: 'solar', f: 'neutral', t: "Junpei has a Superman costume." },
      { s: 'hyein', f: 'serious', t: "That's not Halloween. That's a cry for help." },
      { n: "She went quiet for a moment, drawing, and the fairy in orange got a little more detail, a line along the hem, a pattern on the sleeve, small suns all the way down." },
      { s: 'hyein', f: 'neutral', t: "When you looked at yourself in the mirror in it. At home. You went really quiet. You didn't say anything about the wings, even. You just looked." },
      { s: 'hyein', f: 'neutral', t: "And then I said, *oh my God, you're literally Stella,* and you told me not to say it again, and I said it about forty more times." },
      { choose: [
        { t: "Make it again. Here.", notes: 3, then: [
          { s: 'hyein', f: 'surprised', t: "..." },
          { s: 'hyein', f: 'happy', t: "Are you serious? Are you SERIOUS? Okay. Okay okay okay. Don't take it back. I'm already measuring you with my eyes." }
        ] },
        { t: "Draw yourself in it too. Bloom.", notes: 2, then: [
          { n: "She drew Bloom next to Stella, quick, red and fire, with her arm around the smaller fairy's neck, the way Hyein would, and then drew a little heart between them, and then scribbled it out, and then drew it back." }
        ] }
      ] }
    ] },

    { after: '10/13', title: '4: louder', place: 'Iwatodai · Riverside', time: 'Evening', scene: [
      { n: "Hyein was yelling at the river." },
      { n: "Not at anyone. At the river. She was standing at the railing on the path below the dorm in the cold with her hands around her mouth, yelling, in a long ragged furious stream, everything, at the water, which took it and went on being a river." },
      { s: 'hyein', f: 'serious', t: "—AND I DON'T EVEN KNOW WHAT DAY IT IS. I DON'T KNOW IF IT'S BEEN AN HOUR OR A WEEK. MY PHONE SAYS IT'S THE SAME NIGHT. MY BODY SAYS I'VE HAD FORTY BREAKFASTS. AND I CAN'T FIND A SINGLE GOOD PAIR OF TIGHTS IN THIS ENTIRE COUNTRY—" },
      { n: "She ran out of breath. She stood there with her hands on the railing, panting, her long hair blown across her face, and then turned around and saw Solar standing on the path, and didn't look embarrassed at all." },
      { s: 'hyein', f: 'neutral', t: "Hi. I'm yelling. Do you want to yell?" },
      { choose: [
        { t: "(Yell at the river.)", notes: 3, then: [
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
      { s: 'hyein', f: 'neutral', t: "I'm not mad at you. Okay? I want to say that out loud before you think it. You think everything's your fault. I'm not mad at you." },
      { s: 'hyein', f: 'serious', t: "I'm mad at the sky. I'm mad at whatever this is. I'm mad that you don't know my middle name and I'm mad that you laugh at Junpei's jokes, which are bad, and I'm mad that you look—" },
      { n: "She stopped. Her mouth was working. She pressed her lips together like she was holding a pin there." },
      { s: 'hyein', f: 'sad', t: "...That you look like you like it here. That's the worst one. I'm so mad about that one. And I'm so happy about it. And I hate both." },
      { choose: [
        { t: "I do like it here.", notes: 3, then: [
          { s: 'hyein', f: 'sad', t: "I know." },
          { s: 'hyein', f: 'neutral', t: "Okay. Okay. You're allowed. I'm allowed to be mad. We're both allowed. That's how it works. I just made the rule." }
        ] },
        { t: "I'd like it more with you here.", notes: 3, then: [
          { s: 'hyein', f: 'surprised', t: "..." },
          { n: "She looked at Solar for a long second. Then her face crumpled, all at once, the way it did, excitement and grief arriving in the same muscles, and she threw both arms around Solar's neck so hard they both nearly went over the railing." },
          { s: 'hyein', f: 'sad', t: "That's such a cheat. That's such a cheat thing to say. I love you. Don't say it again. Say it again." }
        ] }
      ] },
      { n: "Walking back, Hyein held her hand, swinging it, like two kids on the way home from somewhere, and told her the middle name, and made her repeat it three times, and then said Solar had said it wrong all three times, exactly the way she always had." }
    ] },

    { after: '10/22', title: '5: the armband', place: 'Iwatodai Dorm · Lounge', time: 'Night', music: 'tender', scene: [
      { n: "The armband had torn in Tartarus. Something with too many hands had caught it on the way past and ripped it nearly in half, and Solar had come home with the red fabric hanging off her sleeve by a few threads and S.E.E.S. barely legible, and had put it on her desk, and had stared at it for an hour without knowing why it made her want to sit on the floor." },
      { n: "Hyein had found it there the next morning. She hadn't asked. She'd taken it downstairs, and now it was night, and she was sitting on the lounge floor under the lamp with the armband across her knees and a needle in her mouth and Mitsuru's sewing kit open beside her, every thread in it sorted by color, which Hyein had remarked on with the respect of one professional for another." },
      { s: 'hyein', f: 'neutral', t: "Sit. I'm almost done. Don't look yet. It's rude to look at someone's work before it's done." },
      { n: "Solar sat on the sofa. Hyein's hands moved fast and small and certain. She was humming under her breath, off-key, some song from home, and every few stitches she held the armband up to the lamp and squinted at it like it had said something rude." },
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
        ] }
      ] }
    ] },

    { after: '11/2', title: '6: best costume', place: 'Iwatodai Dorm · Lounge', time: 'Evening', music: 'joy', scene: [
      { n: "The dorm had done Halloween. Properly. With costumes. Hyein had sewn for nine days straight in the lounge with the radio on, and on the night the whole household had come down the stairs in her work, and Junpei had cried, actually cried, because his Superman costume, refitted, finally fit." },
      { n: "It was two days later and the lounge still had glitter in the sofa cushions and a paper bat hanging by one wing over the television, and Hyein was lying upside down on the armchair with her legs over the back and her hair on the floor, recovering, she said, like an athlete." },
      { s: 'hyein', f: 'neutral', t: "I won, you know. At home. Best costume. The whole house voted. I got on the mic. I told everybody I was taking commissions." },
      { s: 'hyein', f: 'happy', t: "Somebody's going to commission me. Somebody's going to pay me real money. I'm going to be famous. I'm going to make suits for boys who don't deserve them." },
      { n: "And Solar could see it. Not imagine it. See it. A room full of people in costumes, a hundred of them, orange lights strung across a ceiling, a tall girl in fairy wings at a microphone, announcing to the whole room that she'd worked very hard on these and would be accepting payment, while Solar stood at the back in small gold wings, laughing so hard she had to hold onto Hanni." },
      { s: 'solar', f: 'neutral', t: "...You said *for the appropriate price.* On the mic." },
      { s: 'hyein', f: 'surprised', t: "..." },
      { n: "She swung her legs down off the back of the chair and sat up so fast her hair whipped over her face." },
      { s: 'hyein', f: 'surprised', t: "I DID say that. I did. *For the appropriate price.* Hanni said it sounded like a threat." },
      { choose: [
        { t: "It did sound like a threat.", notes: 3, then: [
          { s: 'hyein', f: 'happy', t: "IT WAS A THREAT. A business threat. Oh my God, you remember. You remember me being amazing." }
        ] },
        { t: "I was proud of you.", notes: 3, then: [
          { s: 'hyein', f: 'sad', t: "..." },
          { s: 'hyein', f: 'neutral', t: "You didn't say that. At home. You said *ur so annoying* and took a picture of me." },
          { s: 'hyein', f: 'happy', t: "...Same thing. I knew it was the same thing. I just like hearing it in a full sentence." }
        ] }
      ] },
      { n: "Junpei came down the stairs in his Superman costume, which he had apparently not taken off in two days, with a bowl of cereal, and Hyein looked at him and then at Solar and said, quite seriously, that she was going to need to make him a second one, for washing." },
      { s: 'junpei', f: 'happy', t: "You'd do that? For me?" },
      { s: 'hyein', f: 'neutral', t: "For the appropriate price." }
    ] },

    { after: '11/14', title: '7: the coat', place: 'Paulownia Mall · Shop Windows', time: 'After School', scene: [
      { n: "November had gotten cold all at once, the way it did in Iwatodai, the wind coming off the bay overnight and staying, and Solar had been going around in her blazer and a scarf Fuuka had lent her, because she owned nothing else, and because, Hyein said, with total contempt, she would rather freeze on a pier in a blouse than admit she was cold." },
      { s: 'hyein', f: 'serious', t: "So I made you a coat." },
      { n: "She'd made it in the guesthouse, on a sewing machine Mitsuru had had delivered without a word, out of the half meter of sad-wine velvet from the old woman's shop and a great deal of dark wool, and it was long, and it was black, and it had a collar you could turn up against the wind, and the lining, when Hyein turned it out to show her, was the exact pink of the inside of a shell." },
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
        ] }
      ] },
      { s: 'hyein', f: 'neutral', t: "You always forget your coat. At home. Every single time. Hanni has to run after you on the steps with it." },
      { s: 'hyein', f: 'serious', t: "So this one's yours. You can't forget it, because I'll know. I'll know from the guesthouse. I'll feel it." },
      { n: "She turned the collar up for Solar herself, both sides, smoothing them with her thumbs, and then stood back, and her face did the thing it did, excitement and something else arriving in the same place and fighting over it." },
      { s: 'hyein', f: 'sad', t: "Take it with you. Wherever. If you go home, wear it home. If you don't—" },
      { s: 'hyein', f: 'neutral', t: "If you don't, wear it here. Wear it in the snow. Wear it to whatever you do at midnight. Just. Something warm from me, wherever you are." },
      { choose: [
        { t: "I'll wear it everywhere.", notes: 3, then: [
          { s: 'hyein', f: 'happy', t: "Good. Correct answer. Gold star." }
        ] },
        { t: "(Hug her, coat and all.)", notes: 3, then: [
          { n: "She hugged her in the middle of the shop windows, coat and all, and Hyein, who was taller by half a head, put her chin on top of Solar's hair and said, muffled, that the shoulders were perfect, she could feel it, she was a genius." }
        ] }
      ] }
    ] },

    { after: '11/28', title: '8: three in the morning', place: 'Iwatodai Dorm · 2F Hallway', time: 'Late Night', music: 'night', scene: [
      { n: "Something was buzzing in the hallway at three in the morning. A long, steady, rising whine, like a small engine or a very angry insect, coming from the bathroom at the end of the second floor." },
      { n: "Solar knew the sound before she was awake. She was sitting up in bed with her heart going before she'd decided to be, because she knew it, she knew it so well that for one second she wasn't in Iwatodai at all. She was in a narrow single room with pink curtains and a wall so thin you could hear everything on the other side of it, and someone was drying their hair at three in the morning, the way they did every single night, and it was the most annoying sound in the world and it was the sound that meant she wasn't alone in the building." },
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
        ] }
      ] },
      { n: "They sat on the bathroom floor with their backs against the tub because neither of them wanted to go back to bed yet, and Hyein turned the hairdryer on low and pointed it at their feet, which was, she said, a luxury, and their socks went warm." },
      { s: 'hyein', f: 'neutral', t: "Can I tell you something and you don't make it weird?" },
      { s: 'hyein', f: 'serious', t: "I'm loud because I'm scared. That's all I am. I'm a scared person who's very loud about it. Hanni's the brave one. She just cries first." },
      { s: 'hyein', f: 'neutral', t: "And you're the brave one who never cries. And I'm the loud one. And it works. It's always worked. And here, you're doing something else, and I don't know what my part is." },
      { choose: [
        { t: "Your part is the hairdryer at three in the morning.", notes: 3, then: [
          { s: 'hyein', f: 'sad', t: "..." },
          { s: 'hyein', f: 'happy', t: "...Okay. Okay, I can do that. I'm very good at that. I'm the best at that." }
        ] },
        { t: "Your part is telling me the sleeves are too long.", notes: 3, then: [
          { s: 'hyein', f: 'happy', t: "They ARE always too long. You buy everything a size up so you can hide in it. I've been telling you for months." }
        ] }
      ] },
      { n: "They fell asleep there, eventually, against the tub, with the hairdryer off and their feet warm. Mitsuru found them at five, on her rounds, and did not wake them, and when they came down to breakfast there was a second hairdryer on the lounge table with a note on it in very precise handwriting that said only, *For the guesthouse.*" }
    ] },

    { after: '12/11', title: '9: something you chose', place: 'Paulownia Mall · Shop Windows', time: 'After School', scene: [
      { n: "There was going to be a party. The twenty-third, the dorm, everyone, Hanni was organizing it, which meant it was going to have name tags, and Hyein had decided that for this one, Solar was going to be dressed by her and nobody else, from the ground up, and had dragged her to the fabric shop and then the shoe shop and then the shop windows to look at mannequins as research." },
      { s: 'hyein', f: 'serious', t: "Okay. Tell me what you want." },
      { s: 'solar', f: 'neutral', t: "You're the one with the opinions." },
      { s: 'hyein', f: 'serious', t: "I have so many opinions. I'm not using any of them. This time you tell me." },
      { n: "She said it fiercely, standing in front of a window full of evening dresses with her arms folded and her chin up, and Solar realized she'd planned this, rehearsed it, maybe, on the monorail, the way you'd rehearse a speech for a teacher." },
      { s: 'hyein', f: 'neutral', t: "At home, everything you wear to anything that matters, somebody picks for you. A stylist. Your dad's assistant. A whole team. They put you in a dress and you stand there and smile for the cameras and you look amazing and you look like someone else." },
      { s: 'hyein', f: 'sad', t: "I've never once dressed you for something you picked. So. This is something you picked. Tell me what you want to wear to it." },
      { choose: [
        { t: "Something I can run in.", notes: 3, then: [
          { s: 'hyein', f: 'surprised', t: "Run?" },
          { s: 'solar', f: 'neutral', t: "I run. Here. At five in the morning. I like it. I want to be able to run if I want to." },
          { s: 'hyein', f: 'happy', t: "...Okay. Okay! Flat shoes. A skirt with room. Something that moves. Oh, I can do something that MOVES." }
        ] },
        { t: "Something with pockets.", notes: 3, then: [
          { s: 'hyein', f: 'happy', t: "POCKETS. Yes. A dress with pockets is a dress with opinions. I respect that so much." }
        ] },
        { t: "Something red. Like the armband.", notes: 3, then: [
          { s: 'hyein', f: 'surprised', t: "Red? You never wear red. You said it was too loud." },
          { s: 'solar', f: 'neutral', t: "I'm louder here." },
          { s: 'hyein', f: 'happy', t: "...You are. You ARE. Okay. Red. Oh, I'm going to make you so loud." }
        ] }
      ] },
      { n: "They spent the rest of the afternoon in the fabric shop with the old woman, all three of them pointing and gasping at bolts of cloth, and Solar picked every single thing, the color, the length, the shape of the neckline, and Hyein wrote it all down in her sketchbook without changing a word, only, once, very quietly, adding a pocket." },
      { s: 'hyein', f: 'neutral', t: "It's going to be the best thing I've ever made." },
      { s: 'hyein', f: 'happy', t: "Because you made it. I'm just sewing it." }
    ] },

    { after: '1/19', title: '10: literally stella', place: 'Iwatodai Dorm · Rooftop', time: 'Night', music: 'tender', scene: [
      { n: "Hyein had dragged the long mirror from the second-floor bathroom up four flights of stairs to the roof, by herself, which nobody had asked her to do and nobody could have stopped her from doing, and propped it against the water tank, and now she was standing behind it in the January wind holding a coat over her arm and refusing to explain." },
      { s: 'hyein', f: 'serious', t: "Close your eyes. Don't argue. You can argue after." },
      { n: "Solar closed her eyes. She felt the weight of something settle over her shoulders, and Hyein's quick hands at her collar, at her sleeves, tucking and smoothing, a pin, two pins, something light and stiff fastened between her shoulder blades, and then a cold metal circle settled on her head, careful, over her hair." },
      { s: 'hyein', f: 'happy', t: "Okay. Open." },
      { n: "Orange and gold. The dress from the sketchbook, the one with small suns all the way down the hem, finished. A thin gold band in her hair with a little sun on it, and a moon. And on her back, she could see them over her shoulder in the mirror, two wings. Small ones. Barely bigger than her hands." },
      { s: 'hyein', f: 'neutral', t: "As negotiated." },
      { n: "And she knew. All at once, the way the cold came up off the roof. A different mirror, in a bathroom full of steam and three girls and hairspray, and this exact face looking back at her, and a voice behind her, loud, delighted, too much, in her ear." },
      { s: 'solar', f: 'neutral', t: "...Oh my God. I'm literally Stella." },
      { n: "Hyein made a sound she had never made before. It wasn't a scream. It was smaller and worse than a scream. She put both hands over her mouth and stood behind the mirror shaking." },
      { s: 'hyein', f: 'sad', t: "That's my line. That's MY line. You stole my line. You never say my line. You always tell me to stop saying it." },
      { s: 'solar', f: 'neutral', t: "Hyein. Your middle name is— " },
      { n: "She said it. Right. First try. Exactly the way Hyein had made her practice it on the riverside in October, three times wrong, and this time not wrong at all." },
      { choose: [
        { t: "Stop crying. You'll ruin your own makeup work.", notes: 3, then: [
          { s: 'hyein', f: 'happy', t: "I'M NOT WEARING ANY. I'M CRYING ON PURPOSE. Let me have this." },
          { n: "She came around the mirror and hugged her so hard the wings bent, and then she shrieked about the wings, and then she fixed them, crying, with Solar still inside the hug, which was a skill, honestly, Solar told her so." }
        ] },
        { t: "ur so annoying.", notes: 3, then: [
          { s: 'hyein', f: 'sad', t: "..." },
          { s: 'hyein', f: 'happy', t: "I KNOW. I know I am. I missed it so much. Say it again. Say it every day." },
          { n: "She came around the mirror and hugged her so hard the wings bent, and didn't let go even to fix them." }
        ] }
      ] },
      { n: "Hanni came up a minute later, because she'd heard the sound Hyein made from three floors down, and stopped in the stairwell door with her face doing everything at once, and the three of them stood on the roof in the cold in front of a bathroom mirror, one of them dressed as a fairy, and none of them said anything for a long time, and the wind took the edge of the orange skirt and lifted it and set it down again." },
      { s: 'hyein', f: 'neutral', t: "Okay. It's cold. Inside. Drink water. Ttyl." },
      { s: 'hyein', f: 'sad', t: "...I'm not going anywhere, I just always say that. I'm going to stand here for five more minutes. Don't look at me." }
    ] }
  ],

  afterMax: [
    { title: 'fitting', place: 'Paulownia Mall · Shop Windows', time: 'After School', scene: [
      { n: "Hyein had a new mannequin to fight. She'd been fighting it since Thursday. It was wearing a scarf wrong and she'd asked the shop to let her fix it and they'd said no and she was taking it personally." },
      { s: 'hyein', f: 'serious', t: "Stand in front of it. Look like you're wearing it right. It needs to see." },
      { choose: [
        { t: "(Stand in front of it and look smug.)", notes: 3, then: [
          { s: 'hyein', f: 'happy', t: "YES. Look at it. It's ashamed. It knows." }
        ] },
        { t: "(Fix the scarf on the mannequin when the clerk isn't looking.)", notes: 3, then: [
          { s: 'hyein', f: 'surprised', t: "SOL. That's CRIME." },
          { s: 'hyein', f: 'happy', t: "...That's so much better. You did it right. I taught you that. I'm so proud of my criminal." }
        ] }
      ] }
    ] },
    { title: 'menace', place: 'Iwatodai Dorm · 2F Hallway', time: 'Late Night', scene: [
      { n: "Three a.m. The hairdryer, through the bathroom door, on high. Solar banged twice on the wall without getting out of bed." },
      { n: "The hairdryer went off. A pause. Then two bangs back, and Hyein's voice, muffled, very pleased." },
      { s: 'hyein', f: 'happy', t: "THANK YOU. GOODNIGHT." },
      { choose: [
        { t: "(Bang once more. For good measure.)", notes: 3, then: [
          { n: "One more bang came back, and then silence, and then, very faintly, Hyein laughing into her pillow." }
        ] },
        { t: "(Go and sit on the bathroom floor with her anyway.)", notes: 3, then: [
          { n: "Warm socks. The tub at their backs. Hyein talked about a coat she was going to make someday for someone famous, and Solar fell asleep halfway through the buttons." }
        ] }
      ] }
    ] }
  ]
});
