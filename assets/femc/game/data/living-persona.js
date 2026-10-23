/* The Persona cast's living world (part 2, 2026-10-21): holidays and reactive texts for Ann, Kasumi and Haru. Formats as in
   living-holidays.js (holidays: core.js holidayInvites) and living-texts.js (afterRank: core.js deliverTexts), merged into
   the links through FEMC_GAME_LINK_EXTRAS. Kat's ruling: these three belong to the Persona world. They live around here
   this year, Tokyo is a train ride away, and their texts are ordinary and instant. Romance flavor sits inside ifRoute;
   no holiday decides a route. New Year's ones carry flag 'year-goes-on' like the rest of the calendar's. Ann's 9/22 is a
   Persona 5 cameo (Ryuji visits); his name is in links/ann.js `cast`. */
(() => {
  const X = (window.FEMC_GAME_LINK_EXTRAS ||= {});
  const add = (id, field, v) => { const o = (X[id] ||= {}); o[field] = { ...(o[field] || {}), ...v }; };

  add('ann', 'holidays', {
    '5/4': { rank: 1, title: 'greenery day', place: 'Port Island · Pier', time: 'Daytime', bg: 'port-island-pier', music: 'sun',
      ask: "SOLAR. are u free today. i have a shoot on the pier and the assistant called in sick and u have arms", yes: 'i have arms', ok: 'YAY. pier, 11. bring nothing. ok bring sunscreen ☀️', sorry: 'cant today, sorry!!', no: "nooo ok. i'll hold the reflector with my FACE",
      scene: [
        { n: "Golden Week had emptied the offices and filled the pier, families with kites and grandfathers with fishing rods and small children in sun hats running the length of the boards and back, and at the far end, past a rope of yellow tape, a folding table of clothes on hangers flapped in the wind like a line of laundry with ambitions." },
        { n: "There was a photographer with a camera the size of a lunchbox, a stylist with a mouthful of pins, a man whose only job seemed to be holding a coffee, and in the middle of them Ann, in a spring dress the color of mint ice cream, standing perfectly still while three different people did three different things to her hair." },
        { s: 'ann', f: 'happy', t: "Solar! You came! Okay. This is the reflector. It's a big silver circle. You point it at my face. If my face goes dark, you did it wrong. If my face goes bright, you're a genius." },
        { s: 'solar', f: 'neutral', t: "That's it?" },
        { s: 'ann', f: 'serious', t: "That's it. It's the most important job here. Don't tell the photographer." },
        { n: "The reflector was a disc of silver fabric as wide as a car tire, and the wind off the bay wanted it very badly. Solar planted her feet on the boards and held it at the angle the stylist showed her, and the light came off it white and hot and landed on Ann like a hand." },
        { n: "Then the photographer lifted the camera, and Solar watched it happen again, the thing from the fountain. Ann's face went smooth and far away, her chin up a fraction, her eyes somewhere past the horizon, and the girl who'd been complaining about pins a second ago got up and went to stand quietly at the back of a room." },
        { choose: [
          { t: "(Hold it steady. Brace against the wind and don't move.)", notes: 3, stat: { proficiency: 1 }, then: [
            { n: "Solar held it. The wind came in hard off the water and tried to take it like a sail, and she leaned into it with her whole weight and didn't let the light move off Ann's face once, not for forty minutes, until her shoulders burned." },
            { n: "The photographer lowered the camera at the end and looked over at her, surprised, and said to nobody in particular that the kid had steady hands, and Ann said, very loudly, I KNOW, I FOUND HER, and the stylist laughed around her pins." }
          ] },
          { t: "(Make a face at her between shots.)", notes: 2, stat: { charm: 1 }, then: [
            { n: "Between shots Solar did the stylist, pins and all, perfectly and completely deadpan, lips pressed tight around nothing. Ann broke on the next frame, laughing with her head back and the dress whipping round her knees, and the photographer swore, and then looked at his screen, and didn't say anything, and kept it." }
          ] },
          { t: "(Watch her face when the camera's up.)", notes: 2, then: [
            { n: "Solar watched. It was like watching somebody leave a room without moving. At the break Ann came straight over, before she'd even taken the coffee the man was holding out, and stood in front of her." },
            { s: 'ann', f: 'neutral', t: "Was I doing it? The face? ...You don't have to answer. I can tell by your face that I was doing my face." }
          ] }
        ] },
        { s: 'ann', f: 'neutral', t: "The trick is to think about something else while they shoot. I always think about crepes. Today I was mostly thinking about whether you were going to blow into the sea." },
        { n: "At lunch they sat on the edge of the pier with their legs over the water and two convenience store rice balls each, and Ann ate with a towel tucked into the neck of the mint dress so she wouldn't get anything on it, which made her look like a very glamorous baby." },
        { s: 'ann', f: 'neutral', t: "Greenery Day. It's supposed to be about trees. Three years in a row I spent it in a studio in front of a fake tree. This is the first year there's a real one. Well. There's the sea. The sea is basically a tree." },
        { s: 'solar', f: 'neutral', t: "The sea is not a tree." },
        { n: "Her phone buzzed on the boards beside her, and buzzed again, and she picked it up and snorted rice." },
        { s: 'ann', f: 'happy', t: "My friends are at an amusement park in Tokyo. One of them just went on the big coaster after two crepes. He's sent me a picture of himself afterward. He's green. He looks like a pickle in a hat." },
        { choose: [
          { t: "Tell him he should've had one crepe.", notes: 3, then: [
            { n: "Ann typed it out word for word and sent it, and the answer came back before she'd put the phone down, all capital letters, and she read it and lay back flat on the warm boards laughing at the sky." },
            { s: 'ann', f: 'happy', t: "He says who is this and why is she right. Oh, you're going to be a problem for them. I love it." }
          ] },
          { t: "(Look at the picture. He really is green.)", notes: 2, then: [
            { s: 'solar', f: 'neutral', t: "He really is green." },
            { s: 'ann', f: 'happy', t: "He's always a little green. He's a very sensitive boy. Don't tell him I said that. Actually tell him. He'd love it." }
          ] }
        ] },
        { n: "When the shoot wrapped and they were folding up the tape, the photographer flicked back through his frames and stopped on one and turned the little screen toward Ann without a word. It was Solar, at the edge of the shot, braced against the wind with the silver disc held up in both arms, squinting into the light, her hair coming loose." },
        { s: 'ann', f: 'happy', t: "Oh, I need that. I need that so bad. Can I have that? That's the best picture you took all day and it isn't even of me." },
        { n: "He said he'd print it. Ann thanked him three times and bowed twice and then, walking back down the pier through the kites and the families, held Solar's elbow the whole way, the way you'd hold on to somebody on a boat, and said nobody ever came to these. Nobody ever came. Thank you for having arms." }
      ] },
    '8/16': { rank: 3, slot: 'evening', title: 'summer festival', place: 'Naganaki Shrine · Summer Festival', time: 'Evening', bg: 'naganaki-shrine-festival', music: 'joy',
      ask: "FESTIVAL. tonight. i bought a yukata and i have no idea how to tie it and i refuse to ask a stranger", yes: 'shrine gate at 6. bring it. yukari knows how', ok: 'omg u have a friend who is a YUKATA EXPERT. 6!!', sorry: 'cant tonight, sorry!!', no: "ok!! i'll eat a candy apple in ur honor ♡",
      scene: [
        { n: "Ann arrived at the foot of the shrine steps at six with the yukata in a paper bag held out in front of her like evidence, deep blue with white goldfish on it, and an obi the color of a ripe peach, and an expression of total defeat." },
        { s: 'ann', f: 'flustered', t: "I watched three videos. Three. The lady in the videos has extra arms. I'm sure of it." },
        { s: 'solar', f: 'neutral', t: "Yukari has extra arms too. It's fine." },
        { s: 'yukari', f: 'neutral', t: "Okay, give it here. Arms out. Don't breathe. ...I said don't breathe, Takamaki-san." },
        { n: "Yukari tied her in the lee of the big stone lantern by the gate with brisk efficient tugs, like somebody wrapping a present she had strong opinions about, having already done Solar's at the dorm, a gray one with pale blue morning glories that Yukari said she never wore anyway, which Solar suspected wasn't true. When the two of them started up the steps together, Junpei, at the squid stall, looked up and dropped his skewer." },
        { n: "The shrine was lanterns all the way up, red and white, strung over the steps and through the trees, and stalls down both sides breathing out smoke and sugar and soy sauce, grilled squid and corn and something frying in a great iron pan, and the crowd moving up the hill slow and warm in its yukata and geta, the wooden sandals clacking on the stone like rain on a roof." },
        { s: 'ann', f: 'happy', t: "Candy apples. Right now. I'm ranking them. This is a whole new index. It's a sister index." },
        { choose: [
          { t: "(Buy two and score yours very seriously.)", notes: 3, then: [
            { n: "Solar bit into hers with the expression of a judge and chewed and considered and held up three fingers, and then, after a long pause, a fourth, and Ann gasped as though a verdict had been read in court." },
            { s: 'ann', f: 'happy', t: "Four! For a candy apple! That's huge. Candy apples are a very low-scoring category. It's mostly the stick." }
          ] },
          { t: "(Win her something at the shooting gallery instead.)", notes: 2, stat: { courage: 1 }, then: [
            { n: "The cork gun pulled to the left. Solar worked that out on the first shot and corrected on the second and knocked over a box of caramels on the third, which the stall man gave her with the air of a man who'd been robbed. Ann held the caramels up over her head like a trophy all the way to the next stall." },
            { s: 'ann', f: 'happy', t: "You're so good at weird things. You're like a little action movie." }
          ] }
        ] },
        { n: "Her phone kept buzzing in the little drawstring bag at her wrist. At the top of the steps she finally took it out, and held the screen so Solar could see. A festival somewhere else, lanterns, a crowd, four or five faces crammed into one frame in front of a goldfish stall, all of them making the same stupid face on purpose." },
        { s: 'ann', f: 'happy', t: "They're at one too. In Tokyo. Same night. Look, they've got the same goldfish booth practically. Hold still. I'm sending them you." },
        { n: "She held the phone up and took one of the two of them in their yukata with the lanterns behind, and sent it, and it buzzed back almost at once, and she read it and went pink and put it away very fast." },
        { s: 'ann', f: 'flustered', t: "They said nice yukata. All of them. To you. Not to me. I'm being replaced in my own group chat." },
        { s: 'solar', f: 'neutral', t: "Tell them thank you." },
        { s: 'ann', f: 'flustered', t: "I'm not telling them thank you. ...I told them thank you." },
        { n: "At eight the first firework went up over the bay, and the whole crowd on the hill went quiet the way crowds do, and turned, and tipped its head back. Ann's hand found Solar's sleeve in the press of people and held on." },
        { choose: [
          { t: "(Watch the fireworks.)", notes: 2, then: [
            { n: "Solar watched them go up gold and come down green and gold again over the black water, every one of them a little different and every one of them gone, and beside her Ann said ooh at every single one, out loud, without any embarrassment at all, the way a little kid does, and somewhere around the tenth Solar started saying it too." }
          ] },
          { t: "(Watch her watch them.)", notes: 3, then: [
            { n: "Solar didn't look up. She looked at Ann, lit gold and then green and then gold, her face turned up to the sky with nothing arranged on it at all, no shop sign, no back of the room, just Ann, all the way to the front, and Solar didn't look away until the last one had gone." },
            { ifRoute: 'romance', then: [
              { n: "Ann knew. She didn't look down. But her fingers slid off Solar's sleeve and found her hand instead, and held it, and stayed, all the way down the steps and the whole long walk back to the dorm, and neither of them said a single word about it." }
            ], else: [
              { n: "Ann caught her at it on the last one and grinned without taking her eyes off the sky, and said, very smug, that she knew she looked good in a yukata, thank you, and bumped Solar's shoulder, and kept her hand on her sleeve." }
            ] }
          ] }
        ] },
        { s: 'ann', f: 'happy', t: "Same time next year. Same yukata. Same expert. I'm making it a rule." },
        { n: "On the way down Ann bought a third candy apple purely, she said, for research, and gave it to Junpei at the gate, who had been waiting there in case anybody brought him anything, and who looked at it as though she'd handed him a medal." }
      ] },
    '9/22': { rank: 6, title: 'silver week', place: 'Iwatodai Strip · Wild-Duck Burger', time: 'Daytime', bg: 'wilduckburger', music: 'joy',
      ask: "SOLAR. emergency. ryuji came down on the train bc he heard there's a burger here u can't finish and he's taking it personally", yes: "i've finished it", ok: "U HAVE?? ok ur coming. wild-duck, 1pm. he needs to see this", sorry: 'cant today, sorry!!', no: "nooo ok. i'll film it for u. it's going to be tragic",
      scene: [
        { n: "The holiday had put half of Iwatodai on the strip at once, families and couples and a line out the door of the takoyaki stand, the late September sun still warm enough on the pavement that the air over it wobbled, and inside Wild-Duck Burger it smelled the way it always smelled, fryer oil and ketchup and the specific ambition of teenage boys." },
        { n: "Ann was in the window booth with a milkshake, and across from her sat a boy with bleached hair and a loud yellow T-shirt, one leg bouncing under the table at a speed that suggested he'd had a coffee on the train, and in front of him, unopened, the large Mystery Burger in its paper, which he was looking at like a boxer looks at the other corner." },
        { s: 'ryuji', f: 'happy', t: "Yo! You're Solar? For real? Dude, Ann won't shut up about you. Crepe this, Solar that. It's a whole thing in the chat." },
        { s: 'ann', f: 'flustered', t: "I do NOT not shut up. I shut up a normal amount." },
        { s: 'ryuji', f: 'neutral', t: "She says you finished one of these. The large. By yourself. No offense, but I gotta see that with my own eyes, 'cause that sounds made up." },
        { choose: [
          { t: "(Order a large. Finish it first.)", notes: 3, stat: { courage: 1 }, then: [
            { n: "Solar ordered the large and sat down and unwrapped it and started, steadily, the way she did anything she'd decided to do, without looking up, and across the table Ryuji got through half of his at a sprint and then slowed, and then stopped, and sat there breathing through his nose with a fry in his hand like a man holding a white flag." },
            { s: 'ryuji', f: 'sad', t: "...How. HOW. You didn't even make a face. Ann, she didn't even make a face." },
            { s: 'ann', f: 'happy', t: "I told you. I told you and you didn't believe me. She's my friend. She does weird things perfectly." }
          ] },
          { t: "Last time you had two crepes before a roller coaster.", notes: 2, stat: { charm: 1 }, then: [
            { s: 'ryuji', f: 'neutral', t: "Wait. How do you know about that? ...Ann. You SENT her that?" },
            { s: 'ann', f: 'happy', t: "I send her everything. You were so green. You looked like a pickle in a hat." },
            { s: 'ryuji', f: 'happy', t: "Okay, okay, that's fair, I did look like a pickle. Whatever. This time I'm ready. I ate nothing on the train. Nothing!" }
          ] }
        ] },
        { n: "He did not finish it. He got closer than most, which Solar told him, and he took it the way a person takes a silver medal, gracious and suspicious about the referee, and the girl behind the counter, who had seen everything, wrapped the last quarter up for him without being asked." },
        { s: 'ryuji', f: 'neutral', t: "Hey. For real, though. Thanks for hanging with her. She gets kinda lonely in hotels. She acts like she doesn't, but she does. She texts us pictures of parking garages." },
        { s: 'ann', f: 'flustered', t: "Ryuji. She's RIGHT HERE." },
        { s: 'ryuji', f: 'happy', t: "Yeah, I know. That's why I'm saying it to her." },
        { n: "He went back up on the six o'clock train with the burger in a paper bag and a promise to come back and try again, and at the gate he did a bow at Solar that was far too deep and far too sincere, and Ann hit him on the arm, and then hugged him, quickly, hard, and waved until the doors shut." }
      ] }
  });

  add('ann', 'afterRank', {
    2: { delay: 1, slot: 'evening', msgs: [{ from: 'ann', t: 'is the fish in ur room' }, { from: 'ann', t: "send proof. i need to know he's ok" }],
      reply: [{ t: "he's in a cup on my desk", link: 'ann', notes: 2, then: [{ from: 'ann', t: 'A CUP. ok that is actually perfect' }, { from: 'ann', t: 'he lives there now. that is his apartment' }] },
        { t: 'he swam the whole way home on the monorail', link: 'ann', notes: 3, then: [{ from: 'ann', t: 'omg. a brave little guy' }, { from: 'ann', t: "i told my friends about him. they're very invested. one of them wants updates" }] }] },
    6: { delay: 1, slot: 'evening', msgs: [{ from: 'ann', t: 'shiho texted me after. like an hour after' }, { from: 'ann', t: "she said \"who's the girl\"" }],
      reply: [{ t: 'what did u tell her', link: 'ann', notes: 3, then: [{ from: 'ann', t: "that ur the crepe consultant. and that u heard her laugh" }, { from: 'ann', t: "she sent back one strawberry. that's huge. from her that's a hug" }] },
        { t: 'tell her the cream was flat', link: 'ann', notes: 2, then: [{ from: 'ann', t: 'LOL' }, { from: 'ann', t: 'she says she knew. she says she always knows' }] }] }
  });

  add('kasumi', 'holidays', {
    '10/12': { rank: 3, title: 'sports day', place: 'Iwatodai · Riverside', time: 'Daytime', bg: 'park-2', music: 'joy',
      ask: "Senpai! The ward sports day asked the sports center for a gymnastics exhibition and they picked ME. 🎀 By the river, one o'clock. You don't have to come. ...Please come.", yes: "i'll be there. front row", ok: "Front row!! I'll find you! I'll be the one in red! 🎀", sorry: 'cant today, sorry!!', no: "That's okay! I'll land it twice so it counts for you!",
      scene: [
        { n: "The ward sports day had taken over the long flat field by the river, a hundred children in red caps and white caps and a hundred parents on blue tarps with lunch boxes stacked three high, and a man with a megaphone announcing the tug-of-war as though it were a declaration of war, and in one corner, laid out on the grass beside the tent for lost children, four blue mats taped together into a square." },
        { n: "Kasumi was behind the tent, stretching, in a red leotard and the sports center's navy track jacket zipped up to her chin, and she was pale. Solar had watched her fall on wet stone and get up laughing. She had never once seen her pale." },
        { s: 'kasumi', f: 'serious', t: "Senpai. There are so many children. Children are the harshest judges in the world. They don't clap to be nice. They only clap if it's actually good." },
        { s: 'solar', f: 'neutral', t: "You've done this in front of judges with clipboards." },
        { s: 'kasumi', f: 'neutral', t: "Judges with clipboards don't stand on their lunch boxes to see better, Senpai." },
        { s: 'kasumi', f: 'neutral', t: "Will you hold my hands? Just for a second. Like on the stone." },
        { choose: [
          { t: "(Hold on, and count for her.)", notes: 3, then: [
            { n: "Solar held on and counted, low and flat, the tired referee, and at eight Kasumi let out a breath that seemed to come up from her heels, and some of the color came back into her face, and she said okay, okay, in the voice of someone stepping onto a stone the size of a tray." }
          ] },
          { t: "They're seven. They'll clap for anything that spins.", notes: 2, then: [
            { s: 'kasumi', f: 'surprised', t: "...That's true! Senpai, that's very true. I can spin. I'm extremely good at spinning." },
            { n: "She took Solar's hands anyway, quickly, squeezed once, and let go." }
          ] }
        ] },
        { n: "The megaphone man announced her, mispronouncing the sports center and getting her name exactly right. Kasumi unzipped the jacket and handed it to Solar without looking and walked out onto the mats with her shoulders back, and the children nearest the tape went quiet, the way small children do when someone in a bright color walks out in front of them with total confidence." },
        { n: "She started with the hard one. The competition routine, the bright perfect one, the throw and the leap and the catch, and it was beautiful, and the children watched with their mouths open, and then the wind came across the river the way it always did in October, sudden and sideways, and caught the ribbon at the top of the throw and pulled it out of its line." },
        { n: "Solar saw her see it. Saw the half second where her eyes went down and to the side, checking. And then she didn't fight it. She let the ribbon go where the wind wanted it, and went after it, slower, softer, her arm coming round low, the little pauses that weren't mistakes, and the routine turned into something else, slower and softer and nobody's but hers, right there on four blue mats in front of a hundred children in caps." },
        { n: "She came down out of the walkover and caught the stick and stood, arms up, breathing, and didn't wobble. For one second the whole corner of the field was silent. Then a very small boy in a red cap stood up on his family's tarp and screamed, at the top of his lungs, that she was a FAIRY, and the corner of the field went up like a firework." },
        { s: 'kasumi', f: 'surprised', t: "Senpai! They clapped! They actually clapped! Did you see the wind? I didn't do any of the routine. Not one bit of the end of it!" },
        { choose: [
          { t: "I know. It was the better one.", notes: 3, then: [
            { s: 'kasumi', f: 'blushing', t: "...It was, wasn't it. It was. Don't tell my coach. Actually, tell my coach. No. Don't." },
            { n: "She took the track jacket back from Solar and held it against her chest instead of putting it on, and stood there in the wind with her face pink, grinning at nothing." }
          ] },
          { t: "The boy in the red cap thinks you're a fairy.", notes: 2, then: [
            { s: 'kasumi', f: 'happy', t: "He's my favorite judge. He's the head judge now. Nobody else is allowed to be the head judge." }
          ] }
        ] },
        { n: "The megaphone man, overcome, announced to the whole field that the gymnastics exhibition had been very nice, and then, after a pause, that it had been very, very nice, and then went back to the tug-of-war with a catch in his voice." },
        { n: "Afterward a line of children formed at the edge of the mats with their parents behind them holding out pens and programs and, in one case, a lunch box lid. Kasumi knelt to be the right height and signed every one of them, very carefully, in her neat round hand." },
        { s: 'kasumi', f: 'happy', t: "Senpai, they all want my name. Nobody's ever wanted my name on a lunch box before." },
        { n: "The little girl at the end of the line held out the back of her hand. Kasumi uncapped the pen and touched it to the girl's skin, and stopped there, after the first stroke, the pen not moving, for a second that went on a little too long, the way you'd stop at the top of a stair you'd miscounted in the dark." },
        { n: "Then she wrote the rest of it, Kasumi, slowly and very neatly, and drew a ribbon curling underneath, and the girl ran off to show her mother, and Kasumi capped the pen and looked at it in her hand, and then up at Solar, and smiled, bright and quick, and asked whether there was anywhere by the river that sold melon bread." },
        { s: 'solar', f: 'neutral', t: "There's a bakery by the bridge." },
        { s: 'kasumi', f: 'happy', t: "Two, then. One for me, and one for the head judge." }
      ] },
    '1/1': { rank: 4, flag: 'year-goes-on', title: 'first sunrise', place: 'Port Island · Pier', time: 'Early Morning', bg: 'port-island-pier-night', music: 'tender',
      ask: "Happy New Year, Senpai!! 🎀 Spend the morning with me? The first sunrise from the pier, and then the shrine! I'll bring hot drinks!", yes: "happy new year. i'm coming", ok: "Yay!! Dress warm! The wind on the pier is very serious this early!", sorry: 'cant today, im sorry kasumi', no: "That's okay! I'll tell the sun you said hello! 🎀",
      scene: [
        { n: "It was still dark when Solar came out onto the pier, the real dark, the kind that only lasts an hour or so in winter before the sky starts to give up on it, and the cold off the bay went straight through her coat as though the coat had been a rumor. There were people along the rail already, a long patient row of them in hats and scarves, families and old couples and a man with a thermos, all of them facing east, waiting for the first sunrise of the year." },
        { n: "Kasumi was at the very end, in the red scarf wound up to her nose and the knitted hat with the pompom, holding two cans of hot cocoa from the vending machine inside her sleeves to keep them warm, and she held one out to Solar as soon as she saw her, before hello, the way you'd pass a baton." },
        { s: 'kasumi', f: 'happy', t: "Happy New Year, Senpai! It's at seven-oh-five. I checked three times. The sun is very punctual. It's the most punctual thing there is." },
        { s: 'solar', f: 'neutral', t: "More punctual than you?" },
        { s: 'kasumi', f: 'serious', t: "It's close. It's very close. I respect it as a rival." },
        { n: "They stood at the rail with the cans warming their hands and watched the sky over the bay go from black to navy to a strange thin blue, and then, low down along the edge of the water, a line of pink so faint you could only see it if you didn't look straight at it, and the whole row of people along the rail went quiet together, the way people do in a cinema when the lights go down." },
        { choose: [
          { t: "(Make a wish, eyes shut, the way she's doing.)", notes: 3, then: [
            { n: "Kasumi had shut her eyes with both hands around the can, her lips moving very slightly. Solar shut hers too. She didn't know what to wish for. She stood there in the cold with her eyes shut and the light coming up red through her eyelids, and in the end she didn't wish for anything, exactly, only stood in it, and found that was something." },
            { s: 'kasumi', f: 'happy', t: "Did you wish? Don't tell me what. You're not supposed to. Mine was very long. I'm sorry to the sun." }
          ] },
          { t: "(Watch the light come up on her face instead.)", notes: 2, then: [
            { n: "The sun came up out of the water all at once, the way it does over the sea, a sliver and then a curve and then too bright to look at, and it lit the whole row of faces along the rail gold, Kasumi's among them, her eyes shut, her lips moving, the pompom on her hat catching fire at the edges. She opened her eyes and caught Solar looking, and went pink, and pretended it was the cold." }
          ] }
        ] },
        { bg: 'port-island-pier' },
        { s: 'kasumi', f: 'neutral', t: "My sister and I used to do this. Every year. Our father would drive us to the sea in the dark, and we'd sit on the hood of the car in blankets, and she'd always fall asleep right before, and I'd have to wake her up." },
        { s: 'kasumi', f: 'happy', t: "She never once saw it start. She only ever saw it already up. She said that was the best part anyway." },
        { s: 'solar', f: 'neutral', t: "Will you send her one? Of this?" },
        { s: 'kasumi', f: 'neutral', t: "...Yes. I'll send her the sun. Already up. So she gets the best part." },
        { place: 'Naganaki Shrine', time: 'Morning' },
        { n: "By nine the shrine was full, the first visit of the year, everyone in the neighborhood in their good coats queuing up the stone steps three abreast, and the air thick with incense smoke and the smell of amazake from a stall by the gate, and the big bell over the offering box clanging every few seconds as somebody else pulled the rope." },
        { n: "They waited their turn in the queue. Kasumi bowed twice and clapped twice and bowed once, perfectly, the way she did everything, and then stood with her hands together for a long time, longer than the people on either side, long enough that the man behind them shuffled his feet. Solar did it badly and fast, and then stood beside her, and waited." },
        { s: 'kasumi', f: 'happy', t: "That was a very long wish. I'm sorry to the gods. They're going to need a coffee." },
        { n: "At the amulet stall afterward Kasumi stood in front of the rows of little silk charms in their bright colors, health and safety and study and love, for so long that the shrine maiden behind the table asked very politely whether she needed help." },
        { s: 'kasumi', f: 'neutral', t: "One for my sister. For health. Senpai, which color? She'd like whichever one you'd pick. I'm sure of that." },
        { choose: [
          { t: "(Pick the red one. Like her bow.)", notes: 3, then: [
            { n: "Kasumi held the red one in her palm for a long time, the little silk bag with its gold thread, looking at it the way she'd looked at herself on the camera screen in May, as though it might be someone she knew." },
            { s: 'kasumi', f: 'happy', t: "Red. Of course. Of course it's red. I'll post it today. I'll put a note in. I'll tell her you picked it." }
          ] },
          { t: "(Pick the pale blue one. Quieter.)", notes: 2, then: [
            { s: 'kasumi', f: 'surprised', t: "...Blue. That's funny. I'd have said she was a red. Everyone says she's a red." },
            { s: 'kasumi', f: 'neutral', t: "But I think you're right. I think she'd want the quiet one, really. She just never says." }
          ] }
        ] },
        { n: "She paid for it with coins from her mitten and put it in the inside pocket of her coat, over her heart, and did up the button over it, and then, walking down the crowded steps beside Solar with the bell going behind them, kept her hand on the place where it was, all the way to the bottom, as though it might get out." },
        { s: 'kasumi', f: 'happy', t: "Senpai. That was the best first morning I've ever had. Don't tell the sun I said that. It worked very hard." }
      ] }
  });

  add('kasumi', 'afterRank', {
    2: { delay: 1, slot: 'evening', msgs: [{ from: 'kasumi', t: 'Senpai! I landed it on the dry stone this morning! Before school! 🎀' }, { from: 'kasumi', t: 'Only once. But once is a number!' }],
      reply: [{ t: 'did u look down', link: 'kasumi', notes: 3, then: [{ from: 'kasumi', t: '...I did. But I knew I was doing it this time!' }, { from: 'kasumi', t: 'My coach says that counts as progress. I told her a very serious judge noticed it first.' }] },
        { t: "how's ur hand", link: 'kasumi', notes: 2, then: [{ from: 'kasumi', t: 'Perfect! The plaster has little bears on it. I sent my sister a picture. She says I look like a kindergartner.' }] }] },
    7: { delay: 1, slot: 'evening', msgs: [{ from: 'kasumi', t: 'Senpai. Thank you for last night.' }, { from: 'kasumi', t: 'I put the wire in my ribbon case. Is that strange? Please do not answer that. 🎀' }],
      reply: [{ t: 'not strange. keep it', link: 'kasumi', notes: 3, then: [{ from: 'kasumi', t: "Okay. I'm keeping it. It's officially the one that lasted." }] },
        { t: "next summer we'll buy two packs", link: 'kasumi', notes: 2, then: [{ from: 'kasumi', t: 'Two packs! Senpai, that is so many sparklers!' }, { from: 'kasumi', t: '...Yes. Next summer. I wrote it down.' }] }] }
  });

  add('haru', 'holidays', {
    '9/23': { rank: 3, title: 'the equinox', place: 'Port Island · Botanical Garden', time: 'Daytime', bg: 'park', music: 'day',
      ask: "Good morning! It's the equinox, and the botanical garden by the harbor has opened its big greenhouse for the holiday. I have two tickets and a thermos. 🌱", yes: "i'd love that", ok: "Wonderful! Eleven o'clock at the gate. Wear something you don't mind being a little humid in. Fufu.", sorry: 'cant today, im sorry haru', no: "Of course! I'll bring you back a cutting. Please don't tell the garden.",
      scene: [
        { n: "The botanical garden sat at the quiet end of Port Island behind a long iron fence, all gravel paths and labeled trees and benches nobody sat on, and at its center the greenhouse, a great old glass house with a curved roof like the inside of a whale, the panes fogged white from within so that the plants pressed up against them looked like people waiting at a window." },
        { n: "Haru stopped at the door with her hand on it and took a breath, the way some people stop at the door of a church. Then she opened it, and the air came out to meet them, warm and wet and green, so thick with the smell of soil and leaves and something flowering that Solar felt it settle on her skin like a second sweater." },
        { bg: 'botanical-garden-greenhouse' },
        { s: 'haru', f: 'happy', t: "Oh. Oh, listen. You can hear it drinking. Isn't that the loveliest sound in the world?" },
        { s: 'solar', f: 'neutral', t: "It's the pipes." },
        { s: 'haru', f: 'happy', t: "It's the pipes drinking. Please don't ruin it, Solar-chan." },
        { n: "It was water, dripping somewhere in the canopy, and the tick of the old pipes along the floor, and under that a hush that wasn't quite silence. Haru went down the narrow path between the beds reading every label out loud, and touching nothing, and leaning so close to the orchids that her breath fogged their petals." },
        { n: "Halfway along she stopped dead in front of a shrub no taller than she was, dark glossy leaves and small clusters of red berries along its branches like beads on a string, and put both hands over her mouth." },
        { s: 'haru', f: 'surprised', t: "Solar-chan. Solar-chan, it's coffee. It's a coffee plant. Those are cherries. The beans are inside them. I've roasted ten thousand of them and I've never once seen where they come from." },
        { choose: [
          { t: "(Read her the label, very formally, like an introduction.)", notes: 3, then: [
            { n: "Solar read the little brass plaque in her most formal voice, the Latin name and the country and the year the garden had planted it, as though she were introducing two guests at a dinner, and at the end she said, and this is Haru Okumura, and Haru laughed so suddenly a gardener at the far end looked up." },
            { s: 'haru', f: 'blushing', t: "How do you do. I'm a very great admirer of your work. Fufu. Oh, I'm going to cry in a greenhouse." }
          ] },
          { t: "Does it look how you thought?", notes: 2, then: [
            { s: 'haru', f: 'neutral', t: "No. It's smaller. And much braver. It's a whole shrub, Solar-chan, living in a glass box in a cold country, making cherries for nobody." },
            { s: 'haru', f: 'happy', t: "I think I'm in love with it a little." }
          ] }
        ] },
        { n: "They sat afterward on the one bench at the back of the greenhouse, under a banana plant with leaves like folded green umbrellas, and Haru opened the thermos and poured, and then took out of her bag a small lacquered box and set it on the bench between them and lifted the lid." },
        { n: "Ohagi. Four of them, round and soft, sweet rice wrapped in red bean paste, two plain and two rolled in sesame, set in the box as neatly as eggs in a nest." },
        { s: 'solar', f: 'surprised', t: "You made these?" },
        { s: 'haru', f: 'neutral', t: "For the equinox. You eat them at higan, for the people who came before you. I asked the hotel kitchen if I might borrow it for an hour this morning. The chef stood behind me the whole time looking frightened." },
        { s: 'haru', f: 'neutral', t: "At home they were always bought. Very expensive ones, from a very famous shop, in a box with a ribbon. I never once saw anyone make them. I wanted to make them once. With my own hands. For somebody." },
        { s: 'haru', f: 'happy', t: "Day and night the same length today. Everything in balance, for one day of the year. I thought that was a good day to do something with my own hands." },
        { choose: [
          { t: "(Eat one slowly. Tell her the truth about it.)", notes: 3, stat: { kindness: 1 }, then: [
            { n: "Solar ate it slowly. The rice was a little too soft and the bean paste a little too sweet, and it was warm from Haru's bag, and it was the best thing she'd eaten all month, and she said all of that, in that order, and Haru listened with her chin in her hand, nodding at each part." },
            { s: 'haru', f: 'happy', t: "Too soft and too sweet and the best thing all month. I'm writing that down. That's a better review than my father has ever had." }
          ] },
          { t: "Who are they for? The people who came before.", notes: 2, then: [
            { s: 'haru', f: 'neutral', t: "My mother. She died when I was very small. I don't remember her well enough to know what she'd have liked." },
            { s: 'haru', f: 'happy', t: "So I made the sesame ones for her, because I like them best, and I've decided that's how I'll get to know her. One thing I like at a time." }
          ] }
        ] },
        { n: "When they left, the gardener at the far end of the greenhouse, who had been watching them the way gardeners watch people near their plants, came over without a word and pressed something into Haru's hand. A single red coffee cherry, fallen, a little wrinkled. She held it all the way home on the monorail in her closed fist, as though it were warm." },
        { s: 'haru', f: 'happy', t: "I'm going to plant it on the roof. It won't grow up there, not in that wind. I'm going to plant it anyway." }
      ] },
    '12/31': { rank: 5, slot: 'evening', flag: 'year-goes-on', title: "new year's eve", place: 'Iwatodai Dorm · Kitchen', time: 'Evening', music: 'tender',
      ask: "Good afternoon, Solar-chan. Our old cook in Tokyo has sent me soba for tonight, and enough of it for a regiment. May I bring it to your kitchen? 🌸", yes: 'yes please. bring the regiment', ok: "Lovely. Seven o'clock. She sent her own dashi too. She'd never forgive me if I used anyone else's.", sorry: 'cant tonight, im sorry haru', no: "Of course. I'll eat a bowl for you before midnight. Long life, Solar-chan.",
      scene: [
        { n: "Haru came through the dorm's front door at seven with her cheeks scarlet from the cold and a cooler box held out in front of her in both arms, the kind fishermen carry, and Koromaru met her at the mat and walked her the whole way to the kitchen with his nose against the side of it, as escort and as suspect." },
        { n: "Inside the cooler, packed in ice and newspaper, were bundles of soba noodles wrapped in paper and tied with string, a jar of dark dashi the color of strong tea, a smaller jar of something Haru said was the secret, and an envelope with a few lines on it in tall brush handwriting that she read once to herself, and put in her apron pocket, and touched now and then all evening." },
        { s: 'haru', f: 'happy', t: "Fumi-san. She cooked for our house for thirty years. When I was little she used to let me cut the green onions on New Year's Eve, standing on a chair. It was the only night of the year anyone let me hold a knife." },
        { s: 'haru', f: 'neutral', t: "She cut the noodles by hand this morning. She's seventy-one. She wrote that I'm to feed everyone, and to eat mine before midnight, and that she's watching." },
        { s: 'solar', f: 'neutral', t: "From Tokyo?" },
        { s: 'haru', f: 'happy', t: "From Tokyo. She has very good eyes." },
        { choose: [
          { t: "(Pull up a chair and stand on it to cut the green onions.)", notes: 3, then: [
            { n: "Solar dragged a chair over from the dining room and climbed up on it with the knife and the cutting board held level at her chest, perfectly solemn, and Haru looked at her and laughed so hard she had to hold on to the counter." },
            { s: 'haru', f: 'happy', t: "That's exactly it. That's exactly how I did it. Oh, Fumi-san would adore you. Thinner, please. She'd say thinner." }
          ] },
          { t: "(Take the dashi jar and smell it.)", notes: 2, then: [
            { n: "Solar unscrewed the lid and breathed in, and it was smoke and sea and something deep and patient underneath, like a room that had been cooked in for thirty years. Haru watched her face over the top of the jar." },
            { s: 'haru', f: 'blushing', t: "That's what our kitchen smelled like. Not the house. The kitchen. Only the kitchen. It was my favorite room." }
          ] }
        ] },
        { n: "The dorm found them by the smell, the way it always did. Junpei came down first, then Yukari pretending she'd only come for water, then Fuuka with her hands tucked in her sleeves, then the rest, in ones and twos, until the kitchen was too small and the dining table was too small and somebody dragged the coffee table over from the lounge again and it wobbled again, and Haru stood at the stove in Fuuka's apron with the steam coming up around her, serving bowl after bowl, and didn't sit down once." },
        { s: 'junpei', f: 'happy', t: "Okay, Okumura-senpai, I gotta know. Is this, like, rich-people soba? Is there gold in it? I feel like there should be gold in it." },
        { s: 'haru', f: 'happy', t: "There's a seventy-one-year-old woman in it, Iori-kun. That's worth considerably more." },
        { s: 'junpei', f: 'surprised', t: "...Okay. That's way scarier than gold." },
        { n: "Out past the fogged kitchen window the moon had come up over the rooftops, very round, very bright, and very close, the second full moon of the month, and every person at the table who knew what that meant looked at it once and then very carefully didn't look at it again. Haru noticed. Haru noticed everything." },
        { s: 'haru', f: 'neutral', t: "It's very full tonight. Everyone keeps looking at it. Is that a good omen, Solar-chan, or a bad one?" },
        { choose: [
          { t: "It's a long night. That's all. Eat your noodles.", notes: 2, then: [
            { s: 'haru', f: 'neutral', t: "Mm. Long noodles for a long night. Very well." },
            { n: "She let it go the way she let things go, gently, and completely, and Solar knew she'd keep it somewhere, the way she kept the cook's letter in her apron pocket, and take it out later to look at." }
          ] },
          { t: "(Take her bowl, fill it, and put it in her hands.)", notes: 3, stat: { kindness: 1 }, then: [
            { n: "Solar took the ladle out of her hand and filled a bowl and put it in Haru's hands and pointed at the one empty chair, and Haru looked at her, and at the bowl, and at the chair, and sat down in it, for the first time all evening, at a crowded table, with everyone talking at once." },
            { s: 'haru', f: 'sad', t: "At home I ate this at the end of a very long table. My father was always at a party. Fumi-san would stand in the doorway until I'd finished, so I wouldn't be eating alone. She never once sat down." },
            { s: 'haru', f: 'happy', t: "I'm going to write and tell her I sat down. She'll be so cross. She'll be so pleased." }
          ] }
        ] },
        { n: "They ate every noodle. Koromaru got the ends. At half past ten Haru washed the cooler out and dried it and packed the empty jars back in the newspaper to return, because Fumi-san would want the jars, and at the door, buttoning her coat, she took the letter out of her apron pocket one more time and read it, and smiled, and put it in her coat instead." },
        { s: 'haru', f: 'happy', t: "Happy New Year, a little early. I'm told it's bad luck to say it before midnight. I've decided I don't believe in that one." },
        { n: "Long noodles, for a long life, and to cut off the year's troubles before it ended. Solar stood in the doorway after Haru had gone and watched the moon over the street for a while, and thought about troubles, and how many of them a single bowl could be expected to cut, and went in to help Junpei with the dishes before she could finish the thought." }
      ] }
  });

  add('haru', 'afterRank', {
    1: { delay: 1, slot: 'evening', msgs: [{ from: 'haru', t: 'The soil is in. The tomatoes have been told about you. 🌱' }, { from: 'haru', t: 'Thank you for not helping. I mean that very kindly.' }],
      reply: [{ t: 'tell them i said hi', link: 'haru', notes: 2, then: [{ from: 'haru', t: 'I have. They were very shy about it. Fufu.' }] },
        { t: 'can i come drink the coffee again', link: 'haru', notes: 3, then: [{ from: 'haru', t: "Every Monday, Wednesday and Friday, for as long as there's a thermos and a roof." }, { from: 'haru', t: "I'll pour yours first." }] }] },
    6: { delay: 1, slot: 'evening', msgs: [{ from: 'haru', t: 'The beans have rested. They are ready. 🌸' }, { from: 'haru', t: 'I ground the first cup this morning and drank it at the window and thought, oh, Solar-chan ought to be here for this.' }],
      reply: [{ t: 'save me the second cup', link: 'haru', notes: 3, then: [{ from: 'haru', t: "I've saved you the whole bag. The roof, on Monday. I'll bring the good thermos." }] },
        { t: 'how does it taste', link: 'haru', notes: 2, then: [{ from: 'haru', t: 'Like bread, and a little like a bonfire. Like that afternoon, I suppose.' }, { from: 'haru', t: "I'm told that's the whole point of letting things rest." }] }] }
  });
})();
