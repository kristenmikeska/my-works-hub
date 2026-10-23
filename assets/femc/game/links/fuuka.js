/* Fuuka Yamagishi · II The Priestess. Revamp social link data (femc-game.html). Format: link fields in assets/femc/game/core.js, scene lines in scene.js. */
(window.FEMC_GAME_LINKS ||= []).push({
  id: 'fuuka', name: 'Fuuka Yamagishi', short: 'Fuuka', arcana: 'Priestess', numeral: 'II', from: 'Persona 3',
  kind: 'sees',
  romance: null,
  starts: '6/15',
  home: { area: 'Iwatodai Dorm', spot: 'Kitchen', slot: 'evening', days: [1, 3, 5],
          hint: 'Evenings on Monday, Wednesday and Friday, in the dorm kitchen, usually with something in the oven.' },
  approach: "Fuuka is at the dorm kitchen counter with a cookbook propped against the rice cooker and flour on one cheek, measuring something with the total concentration of a bomb technician, and she jumps a little when you come in.",
  cast: { natsuki: 'Natsuki' },
  invite: {
    ask: ["um, are you busy? i made something. you don't have to eat it. but if you wanted to", "sorry if this is sudden! i'm at the supermarket and i don't know which tofu is the right tofu", "the lounge tv is making a noise again and i think i can fix it. would you hold the flashlight? sorry", "i'm trying a new recipe tonight and i need someone brave. i'm sorry that it's you", "are you free? i found a radio station from very far away and i wanted someone else to hear it", "i made too much. i always make too much. please help (sorry)"],
    ok: ["thank you!! i'll put the kettle on", "really? okay. okay! the kitchen, whenever you're ready", "thank you. i'll try not to burn anything before you get here"],
    no: ["that's okay! another time. sorry for asking", "oh, of course. i'll save you some. if it's good. i'll save you some anyway", "okay! good night, senpai. please don't stay up too late"]
  },
  hangouts: [
    [
      { n: "There was a pot on the stove and a bowl beside it, and in the bowl was miso soup, or something that had set out to be miso soup and taken a detour, and Fuuka was standing over it with her hands clasped under her chin like a girl at a recital waiting for her turn." },
      { s: 'fuuka', f: 'neutral', t: "It's the same recipe as last time. I only added one thing. It's for iron. Senpai, you're always running, and I read that people who run need iron." },
      { n: "Solar didn't ask what the one thing was. She had learned, by now, that knowing made it harder. She drank. It was warm and salty and had, somewhere at the bottom of it, a note like a coin you'd held in your mouth as a child, which she supposed was the iron, being thorough." },
      { choose: [
        { t: "It's good. The iron's a little loud.", notes: 3, then: [
          { s: 'fuuka', f: 'happy', t: "A little loud. Okay. Okay, I can turn it down." },
          { n: "She wrote *iron: loud* in the notebook, very small, in the margin, and underlined it twice, as if it were a reading off an instrument, which to her it was." }
        ] },
        { t: "(Finish the whole bowl.)", notes: 2, then: [
          { n: "She finished the whole bowl. Fuuka watched her do it with growing alarm, the way you'd watch someone carry a tray of glasses down a staircase." },
          { s: 'fuuka', f: 'surprised', t: "You don't have to finish it to be polite! I-I need the data!" }
        ] },
        { t: "What was the one thing?", notes: 1, then: [
          { s: 'fuuka', f: 'sad', t: "...Do you really want to know?" },
          { n: "Solar thought about it, and found she didn't, and said so, and Fuuka looked relieved in a way that was not reassuring." }
        ] }
      ] },
      { n: "They washed up together afterward, Fuuka washing, Solar drying, the window over the sink fogged with steam so the street outside was only the orange smear of the streetlight, and Fuuka hummed something tuneless and content under her breath that she didn't seem to know she was doing. It was, Solar thought, the most relaxed she had ever heard her. It was also, she suspected, the sound of someone already planning the next one." }
    ],
    [
      { n: "The rice cooker's clock had been blinking 12:00 since the power went out during a storm in some month nobody could remember, and every person in the dorm had walked past it a hundred times and decided it was somebody else's problem, until tonight, when Solar came down for water and found it upside down on the counter with its bottom off." },
      { n: "Fuuka was bent over it with a jeweler's screwdriver from a little zip case she apparently kept in her pencil case, between her erasers and her highlighters, as if this were the sort of thing a person might need during a history test." },
      { s: 'fuuka', f: 'surprised', t: "Ah! I'm not breaking it. I promise. The battery for the clock is soldered in, which is a very rude thing to do to a battery." },
      { choose: [
        { t: "(Hold the flashlight.)", notes: 3, stat: { proficiency: 1 }, then: [
          { n: "Solar held the flashlight. Fuuka said *a little left* and *there* and *thank you* in the same soft voice every time, like a nurse calling numbers, and when the solder gave with a tiny hiss she made a sound of such private satisfaction that Solar had to look at the ceiling." }
        ] },
        { t: "Where did you learn to do this?", notes: 2, then: [
          { s: 'fuuka', f: 'neutral', t: "Nowhere, really. Machines just tell you what's wrong with them. You only have to be quiet long enough to hear it." },
          { n: "She said it without looking up, the way you'd mention that water was wet." }
        ] },
        { t: "Nobody minds the blinking.", notes: 1, then: [
          { s: 'fuuka', f: 'sad', t: "I mind it a little. It's been wrong for so long. It doesn't know what time it is." },
          { n: "She said it about the rice cooker. Solar stood there anyway, for a second, holding the glass of water she'd come down for." }
        ] }
      ] },
      { n: "When the bottom went back on and the cord went back in, the clock lit up and read 0:00, and Fuuka set it to the right time by the microwave, and then, after some thought, by her phone, because the microwave was two minutes fast, and then she sat back on her heels and looked at it, glowing green and correct on the counter, with the expression of somebody who'd been given a small sum of money." }
    ],
    [
      { n: "There was a cooking program on late, a man in a white jacket making something French in a kitchen four times the size of the dorm's, and Fuuka watched it from the end of the lounge couch with her notebook on her knees and her pencil going, as if there'd be a test on it, as if anything about the man's kitchen could be carried back to theirs." },
      { s: 'fuuka', f: 'surprised', t: "\"A pinch.\" He keeps saying a pinch. How much is a pinch? Whose fingers?" },
      { s: 'fuuka', f: 'sad', t: "Recipes are full of things like that. \"Until done.\" \"To taste.\" They assume you already know. That's not a recipe. That's a secret." },
      { choose: [
        { t: "Let's measure one. Right now.", notes: 3, then: [
          { n: "They measured one. Solar's pinch of salt and Fuuka's pinch of salt went onto the kitchen scale one after the other, and Solar's was nearly twice as heavy, and Fuuka looked at Solar's fingers and then at her own with real betrayal." },
          { s: 'fuuka', f: 'happy', t: "So it's a secret *and* it's different for everybody. That's... that's actually kind of nice." }
        ] },
        { t: "I think it's just whatever feels right.", notes: 2, then: [
          { s: 'fuuka', f: 'neutral', t: "That's what everybody says. I think everybody else got told what right feels like, and I was absent that day." },
          { n: "She smiled when she said it. Solar didn't, quite." }
        ] },
        { t: "(Change the channel.)", notes: 1, then: [
          { n: "The channel changed to a variety show. Fuuka watched three seconds of it and then, very politely, held out her hand for the remote, and changed it back." }
        ] }
      ] },
      { n: "The man in the white jacket finished his dish and ate one bite of it with his eyes closed, and the audience applauded, and Fuuka wrote one more line in her notebook and shut it and held it against her chest, and Solar didn't ask what the line was. It was late. The lounge was warm. It had the specific quiet of two people who didn't need to talk, which Solar was learning, slowly, she was allowed to have." }
    ]
  ],
  ranks: [
    { after: '6/15', title: '1: attempt one', place: 'Iwatodai Dorm · Kitchen', time: 'Evening', music: 'dorm', scene: [
      { bg: 'iwatodaidorm-kitchen-night-cake' },
      { n: "It had been raining for nine days, the soft relentless June rain that didn't so much stop as change its mind about how hard to fall, and the dorm smelled of it, of wet umbrellas in the stand by the door and somebody's socks drying on the radiator and, tonight, faintly and then not faintly at all, of something burning." },
      { n: "Solar followed it down the stairs the way she followed most things, quietly, counting doors, and found the kitchen lit up like an operating theater and Fuuka Yamagishi standing in the middle of it in an apron two sizes too big, holding a baking tray out at arm's length in both oven mitts as if it might go off." },
      { n: "On the tray were twelve small black discs, arranged in a perfect grid, three by four, the spacing so even that someone had very probably used a ruler. They had been cookies. They had been cookies with enormous care." },
      { s: 'fuuka', f: 'surprised', t: "Ah—! Senpai! I'm sorry, did the smell wake you? I opened the window. I opened two windows." },
      { s: 'fuuka', f: 'sad', t: "I followed the recipe exactly. Well. Almost exactly. I made one or two small improvements." },
      { n: "She had been living in the dorm for less than a week, and in that time Solar had heard her apologize to Mitsuru, to Junpei, to the stairs she'd tripped on, and once, quietly, in the hallway, to nobody at all. She was small and pale and stood at the edges of rooms as if she were waiting to be told she could come in." },
      { choose: [
        { t: "(Take one.)", notes: 3, then: [
          { n: "Solar took one. It was still warm, and heavier than a cookie had any right to be, and it went into her mouth with a sound like a step on gravel. Under the burnt part there was something worse, something chalky and earnest, like a vitamin trying to make friends." },
          { n: "Fuuka watched her chew with her hands clasped under her chin and her whole face braced, and Solar chewed, and swallowed, and kept her expression exactly where it was, which was a thing she was apparently very good at." },
          { s: 'solar', f: 'neutral', t: "It's very... dense." },
          { s: 'fuuka', f: 'sad', t: "That's the calcium. I added calcium. For bones." }
        ] },
        { t: "What were the improvements?", notes: 2, then: [
          { s: 'fuuka', f: 'neutral', t: "Less sugar, because sugar is bad for you. Calcium powder, for bones. Wheat germ, for... I forget what wheat germ is for, but it's for something." },
          { s: 'fuuka', f: 'sad', t: "And I turned the oven up thirty degrees. To save time." },
          { n: "She said the last one in a smaller voice than the others, the way you'd confess to the one thing in a list you knew was the actual crime." }
        ] },
        { t: "Maybe the oven's broken.", notes: 1, then: [
          { s: 'fuuka', f: 'neutral', t: "No. I checked. I put a thermometer in it. The oven is fine." },
          { s: 'fuuka', f: 'sad', t: "It's me. The oven did exactly what I told it to." }
        ] }
      ] },
      { n: "She set the tray down on the stove and took off the oven mitts one finger at a time, and stood looking at the twelve black circles with her lower lip caught in her teeth." },
      { s: 'fuuka', f: 'neutral', t: "They were for someone. At school. Natsuki-chan. Moriyama-san." },
      { s: 'fuuka', f: 'neutral', t: "She's been sitting with me at lunch. She doesn't say much. She just sits there and eats her bread and glares at anyone who looks at our desk. I wanted to give her something. To say thank you." },
      { n: "Solar knew the name. Everybody in the dorm knew the name, the way you know the name of a street where there's been an accident. Natsuki Moriyama had shut Fuuka in the gym. Natsuki Moriyama had walked away and left her there, in the dark, with the hour coming, and nobody but Shadows had found her for days." },
      { choose: [
        { t: "She's lucky you'd bake for her.", notes: 3, then: [
          { n: "Fuuka looked up, startled, as if she'd braced for a different sentence and had to readjust her whole body to catch this one." },
          { s: 'fuuka', f: 'happy', t: "...I think I'm the lucky one, a little. She came back. In there, at the end. She came back for me. She didn't have to." }
        ] },
        { t: "After what she did?", notes: 1, then: [
          { s: 'fuuka', f: 'neutral', t: "I know what she did. I was there for it." },
          { n: "It came out quiet and perfectly even, with none of the apology in it, and Solar realized, a beat late, that she had just met the part of Fuuka that wasn't sorry about anything." },
          { s: 'fuuka', f: 'neutral', t: "She came back for me, at the end. She didn't have to. I get to decide what that's worth." }
        ] },
        { t: "(Just listen.)", notes: 2, then: [
          { n: "Solar didn't say anything. She leaned on the counter and waited, and the rain went on against the window, and after a while Fuuka filled the space herself, the way people do when you leave it open for them long enough." },
          { s: 'fuuka', f: 'neutral', t: "She came back for me. At the end. I keep thinking about that part, instead of the other part. I think I'm allowed to pick which part." }
        ] }
      ] },
      { n: "She took a notebook out of her apron pocket, a plain school notebook with a pale green cover, and opened it to the first page, where she had written in neat, careful characters COOKING (PRACTICAL), and under that, *Attempt 1*, and under that a list of ingredients with the improvements marked in red, like errors in a proof." },
      { s: 'fuuka', f: 'neutral', t: "I'm going to do it again. Tonight. I have enough flour for one more." },
      { s: 'fuuka', f: 'sad', t: "...Would you stay? You don't have to help. I'm sorry. You could just stand there. Things go better when someone's watching. I don't know why." },
      { n: "Solar knew why, or thought she did, or had a feeling in the back of her throat that was shaped like knowing. She pulled out a stool." },
      { n: "The recipe was on a card propped against the rice cooker, copied out of a library book in Fuuka's tidy hand. Solar read it over her shoulder. *Butter, softened. Sugar. One egg. Flour, sifted. A pinch of salt. Bake until golden.*" },
      { s: 'fuuka', f: 'surprised', t: "\"A pinch.\" How much is a pinch? Whose fingers? And \"until golden\" isn't a time. It's an opinion." },
      { choose: [
        { t: "Follow it exactly. No improvements.", notes: 3, then: [
          { s: 'fuuka', f: 'sad', t: "Not even the calcium?" },
          { s: 'solar', f: 'neutral', t: "Not even the calcium." },
          { n: "Fuuka looked at the calcium powder, sitting on the counter in its little tub, and Solar saw her let it go, visibly, the way you'd let go of a friend's hand at a station." }
        ] },
        { t: "Taste it as you go.", notes: 2, then: [
          { s: 'fuuka', f: 'surprised', t: "You can taste it before it's done?" },
          { n: "She said it like Solar had told her you could read the last page of a book first, as if it were permitted but faintly scandalous, and then she dipped a fingertip in the dough and tasted it and her eyes went wide." },
          { s: 'fuuka', f: 'happy', t: "Oh. It's already good. Before the oven. Is that allowed?" }
        ] },
        { t: "Let me do it.", notes: 1, then: [
          { n: "Fuuka handed her the bowl right away, too fast, the way she handed over everything, and stood back, and her face did something small and closed that Solar caught out of the corner of her eye." },
          { n: "Solar handed it back. Fuuka took it without asking why, and held it a little tighter than she needed to." }
        ] }
      ] },
      { n: "Solar cracked the egg for her, one-handed, against the edge of the bowl, and it opened clean and slid out whole, and both of them looked at her hand afterward like it had done a magic trick. She didn't know where she'd learned it. She didn't say so. She wiped her fingers on a towel and let Fuuka do the rest." },
      { n: "The second batch came out of the oven at the wrong time, by the card, and the right time, by Solar's nose, pale gold with the edges just going brown and none of them quite the same shape, because Fuuka had put the ruler away. They were not good cookies. They were cookies. Fuuka ate one standing at the stove and closed her eyes, and her shoulders came down about an inch, and stayed there." },
      { s: 'fuuka', f: 'happy', t: "They're cookies." },
      { s: 'solar', f: 'happy', t: "They're cookies." },
      { n: "She wrote *Attempt 2* in the notebook and, after it, after some thought, *no improvements*, and underlined it. Then she wrapped six of the good ones in a paper napkin for Natsuki and, carefully, in a separate napkin, two of the black ones." },
      { s: 'fuuka', f: 'neutral', t: "For data." },
      { register: 'fuuka' },
      { s: 'fuuka', f: 'neutral', t: "Senpai. Would you taste the next ones? I'm going to make a lot of next ones. I'm sorry in advance." },
      { n: "Solar ate four more before she went back upstairs, which was three more than she wanted and exactly as many as it took for Fuuka to stop watching her face. The stairwell smelled of butter now instead of smoke, which counted, on balance, as an improvement. She didn't tell Fuuka that word. Fuuka had had enough of improvements for one night." }
    ] },

    { after: '6/26', title: '2: inside things', place: 'Iwatodai Dorm · Lounge', time: 'Evening', music: 'night', scene: [
      { n: "The lounge television had started making a noise. Not a loud one. A thin, high whine, right at the top of hearing, like a mosquito that had learned to sustain a note, and it came on whenever the set was on and went on whether or not anything was playing, and for a week the whole dorm had been watching the evening news with their jaws set." },
      { n: "Tonight the set was face down on a towel on the coffee table with its back off, and its insides were out in the lamplight, green boards and silver solder and a tangle of colored wires like the veins on the underside of a leaf, and Fuuka was kneeling in front of it with her hair clipped back and a screwdriver in her teeth." },
      { n: "Beside her, on the floor, her laptop was open. Not to anything in particular. A black window with white text scrolling slowly up it that Solar couldn't read and suspected nobody in the building but Fuuka could." },
      { s: 'fuuka', f: 'surprised', t: "Mm—! Senpai." },
      { n: "She took the screwdriver out of her mouth and immediately looked embarrassed to have had it there." },
      { s: 'fuuka', f: 'neutral', t: "It's the flyback transformer. I think. Or a capacitor near it that's drying out. Machines get tired, the same as people, and when they get tired they start to sing." },
      { s: 'fuuka', f: 'sad', t: "Mitsuru-senpai said she'd call someone. I said I'd look first. I'm sorry. I couldn't stand it. It's been asking for help for a week." },
      { choose: [
        { t: "(Kneel down and hold the lamp for her.)", notes: 3, then: [
          { n: "Solar knelt on the other side of the coffee table and angled the reading lamp down into the open back of the set, and Fuuka said *oh, thank you* in a voice of pure relief, as if she'd been holding her breath for help she'd been too polite to ask for, and bent in close." }
        ] },
        { t: "Is it safe to open a TV?", notes: 2, then: [
          { s: 'fuuka', f: 'neutral', t: "Not really. It's unplugged. But there's still a charge in some of it, for a while. I'm being careful." },
          { s: 'fuuka', f: 'happy', t: "It's nice that you asked, though. Nobody asks if it's safe. They ask if I'm allowed." }
        ] },
        { t: "You could just let Mitsuru call someone.", notes: 1, then: [
          { s: 'fuuka', f: 'sad', t: "I could." },
          { n: "She didn't move. The screwdriver stayed in her hand. After a second she bent back over the set, and Solar understood that she'd been answered and that the answer was no, and that Fuuka would apologize for it later, probably, and mean it, and still not move." }
        ] }
      ] },
      { n: "It took her a long time. Solar didn't mind. Fuuka was very good at this in a way she was good at nothing else Solar had seen her try, and her hands, which shook a little holding a teacup, didn't shake at all. She stopped apologizing. She hummed a few notes under her breath, over and over, and talked to the set in a murmur, *there you are* and *I know* and *almost*, the way you'd talk to an animal at the vet." },
      { s: 'fuuka', f: 'neutral', t: "When I was seven I took apart my mother's sewing machine. All the way. Every screw. I laid them out on the floor in rows so I'd know where they went." },
      { s: 'fuuka', f: 'neutral', t: "She came home and found me, and she cried. Not because it was broken. I put it back together. It worked better, actually." },
      { s: 'fuuka', f: 'sad', t: "She cried because she thought there was something wrong with me. A girl shouldn't want to see inside things. She should want to make things pretty from the outside." },
      { n: "She said it lightly, the way you'd tell a story you'd told yourself a lot of times, until the corners had worn soft, and kept her eyes on the board in front of her, and her hands didn't stop." },
      { choose: [
        { t: "It's not wrong to want to know how things work.", notes: 3, then: [
          { s: 'fuuka', f: 'happy', t: "...No. I don't think it is either. I just didn't know anybody else thought so." },
          { n: "She looked up for a second, quick, and then down again, but her ears had gone pink, and she hummed the rest of the way through the next screw." }
        ] },
        { t: "Did she ever use the machine again?", notes: 2, then: [
          { s: 'fuuka', f: 'neutral', t: "Every day. She never said anything about it running better. She just used it." },
          { s: 'fuuka', f: 'happy', t: "I used to listen to it from my room. I could tell it was happy." }
        ] },
        { t: "Seven's young to take apart a sewing machine.", notes: 1, then: [
          { s: 'fuuka', f: 'neutral', t: "I was in bed a lot that year. I was sick. There wasn't much else to do but look at things very closely." },
          { n: "She said it so plainly it took Solar a second to hear it. By then Fuuka was already somewhere inside the television again." }
        ] }
      ] },
      { n: "Somewhere near ten, Junpei came down for a drink, saw the television's insides spread across the coffee table, asked with real hope whether it was going to explode, and took his drink back upstairs, disappointed." },
      { n: "Fuuka found the part she'd been looking for, a little blue cylinder near the transformer with its top bulged up like a lid on a jar gone bad, and showed it to Solar on her palm with the pride of a girl showing off a tooth that had finally come out." },
      { s: 'fuuka', f: 'happy', t: "This one. It's been singing all week. It just wanted someone to find it." },
      { n: "She had a replacement in her pencil case, of course she did, and the lounge filled with the hot, sweet, metallic smell of solder, which Solar found, oddly, that she liked. When the back went on and the set went back on its stand and Fuuka pressed the power button, it came up bright and silent. No whine. Just the evening news, and a man in a gray suit talking about the rain." },
      { n: "They both sat there and listened to the silence under it like it was music." },
      { s: 'fuuka', f: 'neutral', t: "I've always liked radios more than TVs, though. Old ones. With a dial." },
      { s: 'fuuka', f: 'neutral', t: "When I was sick I used to turn the dial very slowly at night, between the stations, where it's just static. If you go slowly enough, sometimes there's a station in there from very far away. Fishermen, or a weather report from somewhere it's already tomorrow." },
      { s: 'fuuka', f: 'happy', t: "It made the room feel bigger. Like other people were awake too." },
      { n: "She said it to the television, smiling at it, and Solar thought of the green city at midnight and the coffins along the streets and the strange, enormous quiet of being one of the only people awake inside it, and decided that she understood exactly what Fuuka meant and that she would not say so tonight." },
      { choose: [
        { t: "I'd like to hear one sometime. A far station.", notes: 3, then: [
          { s: 'fuuka', f: 'surprised', t: "Really? You'd— okay. I'll find one. A good one. I'll find you a really far one." },
          { n: "She said it with the full gravity of a promise, as if far were something you could measure and she'd be held to it." }
        ] },
        { t: "You talk to machines like they're people.", notes: 2, then: [
          { s: 'fuuka', f: 'neutral', t: "Is that strange? I think they like it. I think everything likes being talked to." },
          { s: 'fuuka', f: 'sad', t: "...I'm sorry. That's a strange thing to say." },
          { s: 'solar', f: 'neutral', t: "It's not." }
        ] },
        { t: "(Turn the TV off and listen to the quiet.)", notes: 2, then: [
          { n: "Solar turned it off. The lounge was quiet in the real way, the rain on the front windows and the refrigerator in the next room and the tick of the radiator cooling, and Fuuka tilted her head and listened to all of it with her eyes half closed, and smiled, as if she could hear something in there that Solar couldn't." }
        ] }
      ] },
      { n: "She packed her tools back into the zip case, every one into its own elastic loop, the screwdriver last, and then picked the dead blue capacitor up off the towel and turned it in her fingers and, after a moment, put it in her pocket instead of the trash." },
      { s: 'fuuka', f: 'neutral', t: "It did its best for a long time. It's not its fault it got tired." },
      { n: "Solar didn't say anything to that. It didn't seem like it needed anything said to it. She carried the towel back to the kitchen, and on the stairs on the way up she caught herself humming the same few notes Fuuka had been humming over the board, and stopped, and then, because nobody was there to hear it, didn't." }
    ] },

    { after: '7/10', title: '3: natsuki', place: 'Iwatodai Strip', time: 'Evening', music: 'city', scene: [
      { n: "When Fuuka knocked on Solar's door one evening with a shopping list and a face like an apology, Solar said yes before she'd finished asking." },
      { n: "The Strip at seven was still warm from the day, the pavement giving the heat back up through the soles of her shoes, and smelled of fryer oil from Wild-Duck and broth from Hagakure and, under it, the faint green smell of the canal. The supermarket at the far end had automatic doors that sighed when you walked through them, and air-conditioning so cold it felt like walking into a lake." },
      { s: 'fuuka', f: 'neutral', t: "I'm making a lunch. A real one. A bento, for Natsuki-chan, for the weekend. She said she'd take me to see a movie if I fed her, and she was joking, I think, but I'm going to feed her." },
      { s: 'fuuka', f: 'sad', t: "I've never made a whole bento. I've made parts of one. They didn't go together." },
      { n: "Her list was on graph paper, with quantities and estimated prices and a running total she checked against the shelves as they went. She stood in front of the eggs for a full minute doing division in her head." },
      { s: 'fuuka', f: 'neutral', t: "These are cheaper per egg, but these are cheaper per gram, and I don't know if Natsuki-chan likes big eggs or small eggs. I don't know if people have opinions about that." },
      { choose: [
        { t: "Get the big ones. Generosity tastes better.", notes: 3, then: [
          { s: 'fuuka', f: 'happy', t: "Generosity tastes better. Okay. I'm going to write that down." },
          { n: "She did, on the corner of the graph paper, in tiny characters, and the eggs went into the basket like a decision had been made about something bigger than eggs." }
        ] },
        { t: "Nobody has opinions about egg size.", notes: 2, then: [
          { n: "A woman reaching past them for a carton paused, looked at Solar, and said, with great firmness, that the small ones had more flavor, and walked away." },
          { s: 'fuuka', f: 'surprised', t: "...Somebody has opinions about egg size." }
        ] },
        { t: "(Hand her the cheaper carton and keep walking.)", notes: 1, then: [
          { n: "Fuuka took the cheaper carton and followed her, but she looked back at the other one once, the way you'd look back at a dog in a pet shop window." }
        ] }
      ] },
      { n: "They were in the aisle with the seaweed and the furikake when someone said, from the end of it, loud enough to make the cashier look up," },
      { s: 'natsuki', t: "Fuuka? The hell are you doing here on a school night?" },
      { n: "She came down the aisle with a basket on one elbow, a tall girl with her skirt rolled at the waistband and her hair dyed the color of a dry leaf, walking like someone who'd been told off a lot and had decided to take up as much room as possible about it. The basket had three bags of chips in it and a carton of strawberry milk." },
      { s: 'fuuka', f: 'surprised', t: "Natsuki-chan! I'm, um. Shopping. Just shopping. For nothing." },
      { n: "She held the list against her chest so hard the graph paper crumpled." },
      { s: 'natsuki', t: "For nothing. With a list. You've got a list for nothing." },
      { n: "Then her eyes came to Solar, and stopped there, and went slowly up and down her the way girls like her had always looked at girls they hadn't decided about yet, and Solar knew the look the way you know a song you can't name, and stood still for it, and let her face go pleasant and smooth and closed." },
      { s: 'natsuki', t: "You're the third-year. The transfer. From her dorm." },
      { choose: [
        { t: "Solar. Nice to meet you.", notes: 3, then: [
          { s: 'natsuki', t: "...Yeah. Natsuki." },
          { n: "She said her own name like she was waiting to see what Solar would do with it, like it was a coin she'd put down on a counter that might come back to her as the wrong change. Solar didn't do anything with it. She just nodded, and Natsuki's shoulders came down a little, against her will." }
        ] },
        { t: "And you're the one who locked her in the gym.", notes: 1, then: [
          { n: "Natsuki's chin came up, and her face went red and then hard, and for a second the aisle was very narrow." },
          { s: 'natsuki', t: "Yeah. I am. Everybody knows that. You want a prize for saying it out loud?" },
          { s: 'fuuka', f: 'sad', t: "Senpai. Please." },
          { n: "It was the please that did it. Solar looked at Fuuka, who was looking at her, not at Natsuki, and said she was sorry, and was surprised to find she meant it." }
        ] },
        { t: "(Wait to see what Fuuka does.)", notes: 2, then: [
          { n: "Fuuka stepped in, small and pink-faced, directly into the space between them, which Solar suspected she didn't know she'd done." },
          { s: 'fuuka', f: 'neutral', t: "This is Solar-senpai. She's... she's my friend. She's helping me shop for nothing." },
          { s: 'natsuki', t: "...Huh." }
        ] }
      ] },
      { n: "Natsuki looked at the basket. The eggs. The seaweed. A packet of cocktail sausages, the kind you cut into little octopuses for children's lunches. Solar watched her put it together, and watched her decide not to say anything about it, which seemed like the kindest thing Solar had seen anyone do all week." },
      { s: 'natsuki', t: "Don't put weird stuff in it." },
      { s: 'fuuka', f: 'surprised', t: "In what?" },
      { s: 'natsuki', t: "In the nothing. Whatever you're making for nothing. Don't put weird stuff in it. Last time I could taste the vitamins." },
      { s: 'fuuka', f: 'happy', t: "...You ate them, though." },
      { s: 'natsuki', t: "I was hungry. Shut up." },
      { n: "She went off toward the register with her chips, and Fuuka stood there holding the crumpled list against her chest and shining, quietly, like a lamp somebody had just remembered to switch on." },
      { n: "Natsuki caught Solar at the door on the way out, while Fuuka was still at the register counting coins into the cashier's hand one at a time. She didn't look at her. She looked out at the Strip, where the streetlights were coming on." },
      { s: 'natsuki', t: "She talks about you. All of you, at that dorm. Like it's some club she got picked for." },
      { s: 'natsuki', t: "I don't know what you people do at night. I don't want to know. But she's... she doesn't, like. Fight back. So if somebody over there's gonna make her do stuff she's scared of—" },
      { n: "She stopped. Her jaw worked. She was, Solar realized, about sixteen, and angry the way people get angry when they've been the bad thing in somebody's story and are trying to find out what it costs to be something else." },
      { choose: [
        { t: "She fights back. You just haven't seen it yet.", notes: 3, then: [
          { s: 'natsuki', t: "...Yeah?" },
          { n: "She thought about it. Something in her face eased, the way a fist eases when you've been holding it so long you've forgotten it's a fist." },
          { s: 'natsuki', t: "Good. I hope she does it to me sometime. I've got it coming." }
        ] },
        { t: "Nobody's making her do anything.", notes: 2, then: [
          { s: 'natsuki', t: "Okay. Okay, good. Whatever." },
          { n: "She didn't believe it entirely. Solar didn't blame her. It wasn't entirely true." }
        ] },
        { t: "You don't have to worry about her anymore.", notes: 1, then: [
          { s: 'natsuki', t: "Yeah, I do." },
          { n: "She said it flat and fast, like a door shutting, and Solar heard the thing under it and let it be." }
        ] }
      ] },
      { n: "Then Fuuka came out with the bags, two of them, and Natsuki took one off her without asking and carried it as far as the corner, complaining the whole way about how heavy eggs were and who buys this many eggs, and at the corner handed it back, and said \"later,\" to the street in general, and went." },
      { n: "They walked back to the dorm with a bag each. The sky over the bay had gone the deep wet blue of a bruise healing, and the cicadas were still going in the trees by the station, one and then another, like an orchestra that couldn't agree on when to stop tuning." },
      { s: 'fuuka', f: 'neutral', t: "She knows. That it's for her. Doesn't she." },
      { s: 'solar', f: 'happy', t: "She knows." },
      { s: 'fuuka', f: 'happy', t: "Then I can't put anything weird in it." },
      { n: "She said it like it was the hardest restriction anyone had ever placed on her, and the happiest, and shifted the eggs to her other hand, and Solar walked beside her and thought about the look in the supermarket aisle, the up-and-down one, and how her own face had known how to close against it before she'd known she needed it to. Somewhere, apparently, she'd been looked at like that a great deal. She filed it with the rest. She was running out of room." }
    ] },

    { after: '8/12', title: '4: curry for everyone', place: 'Iwatodai Dorm · Kitchen', time: 'Evening', music: 'dorm', scene: [
      { n: "The kitchen in high summer was the inside of a mouth. The window over the sink was propped open as far as it went, and the little fan on top of the refrigerator turned its head back and forth like someone refusing an offer, and all it did was move the heat from one side of the room to the other, and outside, in the dark, the cicadas were going so loud it was less a sound than a pressure." },
      { n: "Fuuka had the biggest pot in the dorm on the biggest burner, and her hair pinned up off her neck with two pencils, and the green notebook open on the counter at a page that said *Attempt 34: curry (everyone)*. The dorm had gotten bigger all summer, a room at a time, and tonight, for the first time, she was cooking for all of it." },
      { n: "Solar was peeling potatoes. She was good at it, it turned out, the peel coming away in one long unbroken curl that she kept glancing at as if it belonged to somebody else's hands." },
      { s: 'fuuka', f: 'sad', t: "If it's bad, everyone will know. Not just you. Everyone. Mitsuru-senpai will be polite about it. That's the worst one." },
      { choose: [
        { t: "It won't be bad. You've made it four times this week.", notes: 3, then: [
          { s: 'fuuka', f: 'neutral', t: "Five. I made it at two in the morning on Tuesday. I ate it standing up. It was fine." },
          { s: 'fuuka', f: 'happy', t: "...It was actually fine." }
        ] },
        { t: "If it's bad, we order pizza and never speak of it again.", notes: 2, then: [
          { s: 'fuuka', f: 'happy', t: "Never? Not even in the notebook?" },
          { s: 'solar', f: 'neutral', t: "Especially not in the notebook." }
        ] },
        { t: "(Taste the sauce and say nothing.)", notes: 1, then: [
          { n: "Solar tasted it off the wooden spoon and said nothing, and Fuuka watched her say nothing with mounting horror." },
          { s: 'fuuka', f: 'surprised', t: "What? What's wrong with it? Is it the apple? I put in half an apple, the book said—" },
          { s: 'solar', f: 'neutral', t: "It's good. I was thinking." },
          { s: 'fuuka', f: 'sad', t: "Please don't think while you're tasting things. My heart." }
        ] }
      ] },
      { n: "Her phone went off on the counter, buzzing itself in a slow circle next to the cutting board. Fuuka looked at the screen, and Solar watched her whole body change before she'd even picked it up." },
      { n: "It was small and fast and complete, like a stage set turning on a hidden wheel. Her shoulders went back. Her chin came up a degree. She wiped her hands on the apron, both sides, carefully, as if whoever was calling could see them, and when she answered her voice had gone up half a tone and come out clear and bright and absolutely steady, a voice Solar had never heard her use." },
      { s: 'fuuka', f: 'neutral', t: "Hello, Mother. Yes. Yes, I'm eating properly." },
      { s: 'fuuka', f: 'neutral', t: "The summer course, yes. Every day. ...Mathematics and chemistry. ...No, nothing's happened. Everything's fine. Nothing's happened at all." },
      { s: 'fuuka', f: 'neutral', t: "I know. ...I know. I'm sorry. ...Yes. Please tell Father I said good night." },
      { n: "Solar kept stirring, because somebody had to, and because it gave her somewhere to put her eyes. She found she had straightened up too. Her own spine had gone straight in sympathy and her own face had arranged itself into something smooth and agreeable, the face you wore for a parent on the phone, and for one dizzy second she had the feeling of having stood exactly like this a hundred times, somewhere, in some kitchen, being somebody's daughter at a phone in a voice that wasn't hers." },
      { n: "She couldn't have said whose. The feeling went the way those feelings always went, out like a tide, and left her standing over a pot of curry with the spoon still going round." },
      { n: "Fuuka hung up and stood holding the phone against her chest. Her voice, when it came back, was her own again, smaller and a little cracked at the edges, like something taken out of the freezer too fast." },
      { s: 'fuuka', f: 'neutral', t: "She asked if I'm eating properly. I'm making curry for the whole building." },
      { s: 'fuuka', f: 'sad', t: "When I was... gone. In June. They told the school I was sick. They didn't call anyone. They were worried about what people would say if a girl from a good family just disappeared." },
      { s: 'fuuka', f: 'neutral', t: "Which is a kind of worried. I know it is. I keep telling myself it is." },
      { choose: [
        { t: "It's a kind. It isn't the only kind.", notes: 3, then: [
          { n: "Fuuka looked at her for a long moment, the phone still pressed to her chest, and then nodded, slowly, as if Solar had just handed her a measurement she'd been missing for a recipe she'd been getting wrong for years." },
          { s: 'fuuka', f: 'neutral', t: "...Not the only kind. Okay." }
        ] },
        { t: "Did you tell her about the curry?", notes: 2, then: [
          { s: 'fuuka', f: 'sad', t: "No. She'd want to know why I'm cooking instead of studying. Cooking is for after. After the good university, after the good job. They have a plan, and then at the end of the plan I'm allowed to be a person." },
          { n: "She said it with a small laugh, like it was a joke she'd heard before, and Solar didn't laugh, and something in her chest went tight for no reason she could find." }
        ] },
        { t: "Maybe they didn't know what to do.", notes: 1, then: [
          { s: 'fuuka', f: 'neutral', t: "Maybe." },
          { n: "She said it the way you'd say it to a teacher who'd explained something you'd already understood, and turned back to the stove." }
        ] }
      ] },
      { n: "The curry hadn't burned. Fuuka checked the bottom of the pot with the spoon, scraping, and found it smooth, and looked up at Solar with a gratitude that was out of all proportion to a stirred pot." },
      { s: 'fuuka', f: 'neutral', t: "Senpai. Can I ask— no. I'm sorry. It's rude." },
      { s: 'fuuka', f: 'sad', t: "...Do you think you have parents? Somewhere? Do you ever wonder if they're on the phone to someone saying everything's fine?" },
      { choose: [
        { t: "Sometimes I can feel where they'd be. Like a missing tooth.", notes: 3, then: [
          { s: 'fuuka', f: 'sad', t: "A missing tooth. You keep putting your tongue there." },
          { s: 'solar', f: 'neutral', t: "Yeah." },
          { n: "Fuuka didn't say she was sorry. It was the first time Solar had seen her not say it when it would have fit, and she was more grateful for that than she knew how to put anywhere." }
        ] },
        { t: "If I do, I hope they're worried about the right things.", notes: 2, then: [
          { s: 'fuuka', f: 'happy', t: "...That's a good thing to hope. I'm going to hope it for mine too." }
        ] },
        { t: "The curry's ready, I think.", notes: 1, then: [
          { s: 'fuuka', f: 'surprised', t: "Oh! Oh, it is. I'm sorry. I'm sorry, I shouldn't have—" },
          { n: "She went to the rice cooker, quick, and the question stayed on the counter between them like something set down and forgotten." }
        ] }
      ] },
      { n: "They ate at the long table in the dining room with every window open and every fan in the building pointed at it. Junpei had seconds and then, after a look around to make sure nobody was counting, thirds. Ken said *thank you for the meal* with his palms together and then ate like a boy who'd been hungry since lunch and was too polite to have mentioned it. Aigis didn't eat, but reported that the aroma was within acceptable parameters, and Fuuka took it as the compliment it was. Koromaru got plain rice with a little of the sauce on top and ate it with his whole body." },
      { n: "Mitsuru set down her spoon at the end and dabbed her mouth with a napkin, and Fuuka went very still." },
      { s: 'fuuka', f: 'surprised', t: "...Mitsuru-senpai?" },
      { n: "Mitsuru considered the empty bowl. Then, with the faint frown of someone making an unfamiliar decision, she held it out." },
      { n: "Fuuka filled it so fast she spilled some. Later, washing up, she wrote in the notebook with wet hands, *Attempt 34: curry (everyone). Seconds: 5*, and then, after looking at it, crossed out the 5 and wrote *6, Mitsuru-senpai*, and underlined it, and closed the notebook, and stood there holding it in the hot kitchen with the cicadas going outside, smiling at nothing, the way you'd smile at a phone that had finally rung with the right voice." }
    ] },

    { after: '8/27', title: '5: a far station', place: 'Iwatodai Dorm · Rooftop', time: 'Evening', music: 'night', scene: [
      { n: "The roof at night still held the day. The concrete gave off a slow warmth through the seat of Solar's shorts, like a stone that had been in the sun, and the air above it had cooled into something soft, and the city all around the dorm was a low sea of lit windows and traffic, with the bay a black space beyond it where the lights stopped." },
      { n: "Fuuka had brought a radio up in both arms like a cat. It was old, older than both of them put together, a heavy wooden box with a cloth front gone the color of tea and a big round dial with numbers in a font nobody used anymore." },
      { s: 'fuuka', f: 'happy', t: "I promised you a far station. I didn't forget." },
      { s: 'fuuka', f: 'neutral', t: "I found her at the flea market by the station. The man said she didn't work. She didn't. Now she does." },
      { choose: [
        { t: "You remembered that?", notes: 3, then: [
          { s: 'fuuka', f: 'surprised', t: "Of course I remembered. You said you wanted to hear one. Nobody ever says they want to hear one." },
          { n: "She said it as if Solar had asked whether she remembered her own name, and set the radio down on the concrete between them with great care, and Solar sat with the strange warm weight of having been remembered, which she had very little practice with." }
        ] },
        { t: "Her?", notes: 2, then: [
          { s: 'fuuka', f: 'neutral', t: "She's been around a long time. It seemed rude to call her it." },
          { n: "Solar couldn't argue with that. She had been called *it*, in a way, for months, the girl, the transfer, the one Akihiko found, and she found she was on the radio's side." }
        ] },
        { t: "How long did that take you?", notes: 1, then: [
          { s: 'fuuka', f: 'neutral', t: "Only nine evenings." },
          { n: "She said *only* with complete sincerity. Solar decided not to point that out." }
        ] }
      ] },
      { n: "Fuuka switched it on. It hummed first, a warm low note as the tubes woke up inside it, and then the static came, the big soft wash of it, like surf heard from a long way inland, and Fuuka put her fingers on the dial and began to turn it so slowly that Solar couldn't see it move." },
      { n: "Stations came up out of the static and went under again. A baseball game. An advertisement for a car. A man reading the news in a voice like a closed door. Fuuka went past all of them without stopping, her head tilted, her eyes half shut, listening for something under the listening." },
      { s: 'fuuka', f: 'neutral', t: "I was in the hospital a lot when I was little. My lungs. Nothing dramatic. Just, every winter, for a while, there'd be a bed with my name on a card at the end of it." },
      { s: 'fuuka', f: 'neutral', t: "My parents came in the daytime. At night it was just the nurses, and the machines next to me, beeping. I wasn't scared of the machines. I liked them. They told the truth about me. When I was getting better, they said so, before anybody else did." },
      { s: 'fuuka', f: 'happy', t: "One of the nurses gave me a little radio, for the nights. That's when I started doing this." },
      { choose: [
        { t: "(Move closer, so you're both leaning over the radio.)", notes: 3, then: [
          { n: "Solar shifted over until their shoulders were nearly touching, the two of them bent over the old box like girls over a campfire, and Fuuka glanced at her and then back at the dial and, very slightly, leaned in too." }
        ] },
        { t: "That nurse sounds like a good person.", notes: 2, then: [
          { s: 'fuuka', f: 'happy', t: "She was. She used to sneak me pudding. I've thought about her a lot this year." },
          { s: 'fuuka', f: 'neutral', t: "She was very good at being in the room with someone who was scared without making it about her." }
        ] },
        { t: "You were alone a lot.", notes: 1, then: [
          { s: 'fuuka', f: 'neutral', t: "I don't think of it like that. I had the stations." },
          { n: "She said it gently, as a correction, and Solar heard that she had been thinking of it exactly like that for a very long time and had decided, at some point, to stop." }
        ] }
      ] },
      { n: "Then the static thinned, the way cloud thins, and there was something in it. A woman's voice, faint and level and very far away, reading a list. Names and numbers. The names were places, Solar thought, places on a coast, and the numbers were the wind, and the sea, and the visibility, and she couldn't understand a single word of it and understood all of it at once." },
      { s: 'fuuka', f: 'happy', t: "Shipping weather. From very, very far. It's already the middle of the night where she is. It's always the middle of the night, at that station. That's how you find it." },
      { n: "They listened. The woman went down her list, place after place, calm, unhurried, telling the ships where it was safe and where it wasn't, and the voice came and went in the static like someone walking past a series of open windows, and above them a plane blinked across the sky toward the airport, and Solar realized she was counting the places along with her, under her breath, the way she counted benches." },
      { n: "Fuuka was watching her. Not the radio. Her. When Solar caught her at it she looked away fast, guilty, and then, after a moment, looked back." },
      { s: 'fuuka', f: 'sad', t: "I'm sorry. I notice how people listen. It's a bad habit. On the radio, in there, it's all I do, so I've started doing it everywhere." },
      { s: 'fuuka', f: 'neutral', t: "You listen like you're waiting for a particular station. One you know is out there. You just haven't found where it is on the dial yet." },
      { s: 'fuuka', f: 'neutral', t: "...That's all. I don't know anything else. I just noticed." },
      { choose: [
        { t: "Maybe I am.", notes: 3, then: [
          { n: "Fuuka didn't ask which station. She just nodded, once, and turned back to the radio, and her fingers rested on the dial without moving it." },
          { s: 'fuuka', f: 'happy', t: "When you find it, I hope it's a good one. I hope it's one that's glad you were listening." }
        ] },
        { t: "You notice a lot.", notes: 2, then: [
          { s: 'fuuka', f: 'sad', t: "Too much, sometimes. I'm sorry." },
          { s: 'solar', f: 'neutral', t: "It's not too much. It's just a lot." },
          { n: "Fuuka thought about the difference, visibly, and seemed to decide it was a real one." }
        ] },
        { t: "(Turn the dial a little, yourself.)", notes: 2, then: [
          { n: "Solar reached over and touched the dial, and moved it, barely, and the shipping weather slid away into static and something else came up for a second, a few notes of music, a song she didn't know, and then that went too. She took her hand back." },
          { s: 'fuuka', f: 'neutral', t: "It's okay. The far ones are shy. They come back if you wait." }
        ] }
      ] },
      { s: 'fuuka', f: 'neutral', t: "In June I thought I would never be any use to anyone. I was the girl people locked in places." },
      { s: 'fuuka', f: 'happy', t: "Now everybody waits for my voice before they move. Every night we go in, nobody takes a step until I've said it's okay. I didn't know I could be that. I didn't know there was a place where the thing I'm like was the thing you need." },
      { n: "She said it to the radio, with her hand still on the dial, and the shipping weather came back up out of the static just then, faint and steady, as if it had been listening too and wanted to agree." },
      { n: "They stayed until the station faded for good, sometime after eleven, when whatever weather was coming in on the far side of the world swallowed it. Fuuka carried the radio back down the stairs in both arms. At the door to the roof she stopped and looked back at the city, at the lights, at the dark place where the bay was, and Solar had the feeling, watching her, that Fuuka was listening to the whole thing at once, and that the whole thing was a station, and that she'd found it." }
    ] },

    { after: '9/17', title: '6: the last bento', place: 'Iwatodai Dorm · Kitchen', time: 'Evening', music: 'tender', scene: [
      { n: "Natsuki was leaving. Her family was moving north for her father's work, and the transfer papers were already signed, and she'd told Fuuka on the school roof at lunch, Fuuka said, the way you'd mention that it might rain later. Then she'd eaten her bread and complained about the wind and that had been that." },
      { n: "Fuuka told Solar all of this at the kitchen counter in a very even voice while dicing an onion into pieces of almost perfect uniformity, and her eyes were streaming, and she said it was the onion." },
      { s: 'fuuka', f: 'neutral', t: "Her last day is Friday. I'm making her a lunch. The best one I can make. Everything I've learned since June." },
      { s: 'fuuka', f: 'sad', t: "It's the onion. I'm fine. Onions are just like this." },
      { choose: [
        { t: "(Hand her a tissue and don't mention the onion.)", notes: 3, then: [
          { n: "Solar tore off a square of kitchen paper and held it out without saying anything, and Fuuka took it and pressed it to her eyes, one and then the other, and said thank you into it, very quietly, and went back to the onion." }
        ] },
        { t: "Onions are definitely like this.", notes: 2, then: [
          { s: 'fuuka', f: 'happy', t: "...Yes. It's very well documented." },
          { n: "She laughed, wetly, and wiped her face on her shoulder, and Solar let the lie stand there between them like a third person both of them were being polite to." }
        ] },
        { t: "You don't have to pretend it's the onion.", notes: 1, then: [
          { s: 'fuuka', f: 'sad', t: "I know. I want to, though. Please." },
          { n: "So Solar let it be the onion." }
        ] }
      ] },
      { n: "The green notebook was nearly full now, the pages fat and wavy from wet hands, splattered, written over and crossed out and written over again. It had stopped being a lab notebook somewhere in August and become something closer to a diary. Fuuka had it open to a page she'd drawn out with a ruler: a bento box in plan view, every compartment labelled." },
      { n: "Rice with a pickled plum in the middle. Tamagoyaki, rolled, cut in four. Karaage. Spinach with sesame. And in the corner, in a little compartment of its own, *octopus sausages (6)*, which Solar recognized from a supermarket aisle." },
      { s: 'fuuka', f: 'neutral', t: "The tamagoyaki is the hard part. I've done it forty-one times. It's right about one time in three." },
      { s: 'fuuka', f: 'neutral', t: "Tomorrow I'll make it at five in the morning, so it's fresh. Tonight is the practice. If tonight goes right, tomorrow will go right." },
      { n: "That was not, Solar suspected, how it worked. She didn't say so. Fuuka poured the egg into the square pan and it hissed, and she tilted the pan with a little roll of her wrist that she'd clearly drilled until it was hers, and began to fold, layer on layer, with her lower lip between her teeth and her whole body bent toward the pan like a girl listening at a keyhole." },
      { choose: [
        { t: "(Stay out of it. Let it be hers.)", notes: 3, then: [
          { n: "Solar kept her hands on the counter. The roll went over once, twice, a little uneven on the third fold, and Fuuka made a small sound and corrected it with the edge of her chopsticks, and didn't look up for help, and didn't need any." }
        ] },
        { t: "Want me to hold the pan steady?", notes: 1, then: [
          { s: 'fuuka', f: 'neutral', t: "No. Thank you. No." },
          { n: "She said it kindly and immediately, without taking her eyes off the egg, and Solar understood that it was the first time Fuuka had ever said no to an offer of help in front of her, and that she was going to say it again on Friday morning, at five, alone." }
        ] },
        { t: "Your wrist's gotten good at that.", notes: 2, then: [
          { s: 'fuuka', f: 'happy', t: "Forty-one times. My wrist knows things now that I don't." },
          { n: "Solar knew how that felt. She didn't say it." }
        ] }
      ] },
      { n: "It came out golden, and layered, and a little lopsided at one end, and when Fuuka cut it the layers showed in the cross-section like the rings in a tree. She looked at it for a long time. Then she cut a slice for each of them and they ate it standing at the stove, and it was good, really good, sweet and soft and a little salty, and Fuuka didn't say anything, and didn't need to. Her face said it. Her face said it to the whole kitchen." },
      { s: 'fuuka', f: 'neutral', t: "She was the first person at school who decided something about me. Even if the first thing she decided was bad. Everybody else just... didn't see me. She saw me enough to be cruel. And then she saw me enough to come back." },
      { s: 'fuuka', f: 'sad', t: "I want her to remember I could do something. That's all. Not that I was the girl in the gym. That I could make this." },
      { n: "She took a small card out of the drawer, the kind you'd tuck under the lid of a bento, and a pen, and held the pen over it, and didn't write anything." },
      { s: 'fuuka', f: 'sad', t: "I don't know what to put. Everything I think of is too much. Or it's an apology. I don't want it to be an apology." },
      { choose: [
        { t: "Write \"Thank you for coming back.\"", notes: 3, then: [
          { n: "Fuuka looked at the card. Then she wrote it, slowly, in her best characters, *thank you for coming back*, and looked at it, and her mouth did something wobbly and determined at the same time, and she didn't change a word." }
        ] },
        { t: "Write \"No weird stuff in it. I promise.\"", notes: 2, then: [
          { s: 'fuuka', f: 'happy', t: "...She'd laugh. She'd pretend she didn't." },
          { n: "She wrote it. Then, underneath, much smaller, she wrote something else, and covered it with her hand so Solar couldn't read it, and Solar didn't try." }
        ] },
        { t: "Just write your name.", notes: 1, then: [
          { s: 'fuuka', f: 'neutral', t: "Just my name..." },
          { n: "She wrote it, *Fuuka*, and looked at it alone on the card, and then she added a little drawing of an octopus sausage next to it, which said, Solar thought, a great deal more than her name had." }
        ] }
      ] },
      { n: "Somebody banged on the dorm's front door at a quarter past nine. Fuuka jumped so hard she nearly dropped the pan, and by the time Solar got to the entry, Natsuki was standing on the step under the light with her hands in her pockets and a calculator held out at arm's length." },
      { s: 'natsuki', t: "She left this in the classroom. Whatever. I was walking past." },
      { n: "She looked past Solar's shoulder, down the hall, to where Fuuka was standing in the kitchen doorway in her apron with egg on her chopsticks and her whole body arranged, badly, around the fact that she was hiding a bento box behind her back." },
      { n: "Natsuki looked at the apron. She looked at the chopsticks. Her face did the thing it had done in the supermarket, the quick complicated thing, and then she looked at the ceiling, hard, as if there were something very interesting on it." },
      { s: 'natsuki', t: "...Don't put weird stuff in it." },
      { s: 'fuuka', f: 'happy', t: "I won't." },
      { s: 'natsuki', t: "Okay. Good. Later." },
      { n: "She went down the steps fast, and at the bottom she stopped, and didn't turn around, and said to the dark street, loud enough to carry, \"you better be at the station Saturday,\" and then she was gone. Behind Solar, in the kitchen doorway, Fuuka stood with the bento against her chest and cried, finally, properly, with no onion anywhere in the room, and Solar shut the front door and went and stood with her until she was done, which took a while, and was fine." }
    ] },

    { after: '10/8', title: '7: rice', place: 'Iwatodai Dorm · Kitchen', time: 'Evening', music: 'tender', scene: [
      { n: "The dorm had been quiet since October in a way it had never been quiet before, not the comfortable quiet of people reading in separate rooms but the other kind, the kind that sat in the hallways and on the stairs and at the long table in the dining room at dinnertime, where there were more people than there had ever been and fewer of them ate. Plates went back to the kitchen full. The television stayed off. Somebody had moved the extra chair away from the end of the table, and then somebody else had moved it back, and nobody had said anything about either." },
      { n: "Solar came down at eleven for water and found the kitchen light on and Fuuka at the stove, in a cardigan over her pajamas, stirring a small pot with a wooden spoon very slowly, as if the pot were asleep and she didn't want to wake it." },
      { s: 'fuuka', f: 'neutral', t: "Oh. Senpai. It's okay. I'm not making anything strange." },
      { s: 'fuuka', f: 'sad', t: "It's rice porridge. Just rice and water and a little salt. It's what they gave me in the hospital, when I couldn't eat anything else. It's what you make when nobody's eating." },
      { choose: [
        { t: "(Sit down at the counter and keep her company.)", notes: 3, then: [
          { n: "Solar pulled out the stool she always used and sat on it and didn't say anything, and Fuuka's shoulders, which had been up around her ears, came down, slowly, a degree at a time, as if somebody had turned a dial." }
        ] },
        { t: "Who's it for?", notes: 2, then: [
          { s: 'fuuka', f: 'neutral', t: "I don't know yet. Whoever comes down. Somebody always comes down." },
          { n: "She said it with total certainty, and Solar, who had come down, couldn't argue." }
        ] },
        { t: "You should be asleep.", notes: 1, then: [
          { s: 'fuuka', f: 'sad', t: "So should you." },
          { n: "There wasn't much to say to that. Solar got her water and didn't go back up." }
        ] }
      ] },
      { n: "Fuuka stirred. The rice turned in the pot, slow and pale. The refrigerator hummed. Outside, a car went past on the wet street and its lights moved across the ceiling and went away." },
      { s: 'fuuka', f: 'neutral', t: "I found them very fast. That night." },
      { s: 'fuuka', f: 'neutral', t: "I keep counting how fast. I go over it. Where I looked first, how long it took me to be sure, how long it took me to say it. I can tell you to the second." },
      { s: 'fuuka', f: 'sad', t: "It doesn't get any faster. I've counted it a hundred times and it's always the same number. It was fast. It wasn't fast enough." },
      { n: "She said it to the pot. Her voice didn't shake. Her hand on the spoon didn't shake. It was the steadiness that was the worst part, the steadiness of someone who had already done all her shaking somewhere else, alone, with the door shut, and had come downstairs to make rice instead." },
      { choose: [
        { t: "It was the fastest anyone could have been.", notes: 2, then: [
          { s: 'fuuka', f: 'sad', t: "I know. That's what Mitsuru-senpai said. I know it's true." },
          { s: 'fuuka', f: 'neutral', t: "It doesn't help. But I know it's true. Both." }
        ] },
        { t: "You don't have to stop counting. You just don't have to do it alone.", notes: 3, then: [
          { n: "Fuuka's hand stopped on the spoon. She stood very still, looking down into the pot, and then she nodded, small, and started stirring again, and after a while she said a number out loud, very quietly, just the one number, and Solar heard it, and didn't say anything back, and that seemed to be what she'd needed." }
        ] },
        { t: "(Put your hand on her back.)", notes: 3, then: [
          { n: "Solar put her hand flat between Fuuka's shoulder blades, through the soft wool of the cardigan, and left it there. Fuuka's breath went in, ragged, and out again, slower, and she leaned back into the hand very slightly, the way you'd lean against a wall in a moving train." }
        ] }
      ] },
      { n: "There was a sound in the doorway. Ken was standing there in his pajamas with his hands at his sides, very straight, the way he stood when he wanted to look like he'd come for a reason. His eyes were red at the rims. He looked at the two of them, and at the pot, and at the floor." },
      { s: 'ken', f: 'neutral', t: "Excuse me. I was getting water." },
      { n: "Fuuka didn't say anything. She took a bowl down from the shelf, and filled it from the pot, and put a little salt on top and a spoon in it, and set it on the counter in front of the empty stool next to Solar, and went back to stirring, as if that were the most ordinary thing in the world, as if bowls of rice porridge simply appeared at eleven at night in front of people who'd come down for water." },
      { n: "Ken looked at the bowl. He looked at Fuuka's back. Then he climbed onto the stool and picked up the spoon and ate, slowly at first and then not slowly, bent over the bowl with his hair in his eyes, while nobody looked at him, carefully, both of them, the way you don't look at someone who's trying not to cry in a public place." },
      { n: "He ate all of it. He put the spoon in the bowl and his palms together." },
      { s: 'ken', f: 'neutral', t: "Thank you for the meal. ...It was good." },
      { s: 'fuuka', f: 'happy', t: "There's more tomorrow. There's more every night. Come down whenever you want." },
      { n: "He nodded, without looking at either of them, and went back upstairs, and they listened to his slippers on every step until his door shut." },
      { n: "Fuuka turned the burner off. She stood looking at the pot with the spoon in her hand, and when she spoke her voice had gone small again, small and clear, like a station coming in from far away." },
      { s: 'fuuka', f: 'neutral', t: "I can't fix it. I keep looking for the part that's broken, so I can replace it. There isn't one. It's not that kind of broken." },
      { s: 'fuuka', f: 'neutral', t: "So I made rice. It's the only thing I'm sure I can do right." },
      { choose: [
        { t: "He ate the whole bowl, Fuuka.", notes: 3, then: [
          { n: "Fuuka looked at the empty bowl on the counter as if she hadn't let herself see it until Solar said so, and her face crumpled, and uncrumpled, and settled into something that was not a smile but was on the way to one." },
          { s: 'fuuka', f: 'sad', t: "He did. He ate the whole thing." }
        ] },
        { t: "It's not the only thing. It's just the thing for tonight.", notes: 2, then: [
          { s: 'fuuka', f: 'neutral', t: "...The thing for tonight. Okay. I can do the thing for tonight." }
        ] },
        { t: "(Wash the bowl so she doesn't have to.)", notes: 2, then: [
          { n: "Solar took the bowl to the sink and washed it, and dried it, and put it back on the shelf, and Fuuka watched her do it, and when Solar turned around she was smiling, a little, at the shelf." }
        ] }
      ] },
      { n: "They left a lid on the pot, in case somebody else came down. Somebody did, later. Solar heard the kitchen light click on at half past twelve, after the hour had come and gone, and heard a spoon against a bowl, and didn't go down to see who. In the morning the pot was empty and washed and upside down on the rack. Fuuka saw it and didn't say anything. She just stood there in her uniform, for a second, with her hand on the counter, the way you'd stand by a machine that had just started working again on its own." }
    ] },

    { after: '10/29', title: '8: her own voice', place: 'Iwatodai Dorm · Kitchen', time: 'Evening', music: 'dorm', scene: [
      { n: "There was weather coming in off the bay, the kind the news had been talking about all week with maps full of spirals, and the wind had started trying the dorm's windows one by one like someone looking for an unlocked door. The kitchen was warm against it. Something on the stove smelled of soy and sugar and dashi, the deep brown smell of a dish somebody's grandmother would make, and Fuuka was bent over the pot with a tasting spoon, frowning at it the way she frowned at a circuit board." },
      { s: 'fuuka', f: 'neutral', t: "Nikujaga. My grandmother made it, when I stayed with her. I never wrote it down. I'm trying to make it from what I remember it tasted like." },
      { s: 'fuuka', f: 'sad', t: "It's harder than a recipe. A recipe is somebody else's memory. This is mine, and mine's not very good." },
      { choose: [
        { t: "Let me taste. I'll tell you what's missing.", notes: 2, then: [
          { n: "Solar tasted. It was good. It was also, she could tell from Fuuka's face, not the right good, and that was a thing no one else's tongue could fix." },
          { s: 'solar', f: 'neutral', t: "I don't know what it's supposed to taste like. Only you know that." },
          { s: 'fuuka', f: 'neutral', t: "...Yes. That's the problem. And also the point, I think." }
        ] },
        { t: "What do you remember about it? Not the taste. Her.", notes: 3, then: [
          { s: 'fuuka', f: 'surprised', t: "Her? She—she hummed while she cooked. Off-key. She let me sit on the counter. She put in more sugar than anyone said to, and then she'd look at me and put her finger on her lips." },
          { n: "Fuuka stopped. She looked at the pot. Then she reached for the sugar and put in a spoonful more than she'd measured, and tasted, and her eyes went wide and wet and very surprised." }
        ] },
        { t: "It smells right to me.", notes: 1, then: [
          { s: 'fuuka', f: 'neutral', t: "It smells right. It doesn't taste right yet. It's very rude of it." }
        ] }
      ] },
      { n: "Her phone buzzed on the counter. She looked at the screen, and Solar saw the name there, upside down, two characters, *Father*, and watched Fuuka's hand go out to it and stop in the air above it." },
      { n: "The last time, Solar had watched her answer a call like a set turning on a hidden wheel. Her shoulders back. Her chin up. Her hands wiped on the apron, both sides. Tonight Fuuka looked at the phone for three full buzzes, and then she picked it up without wiping her hands at all, and put it to her ear, and stayed exactly the shape she was." },
      { s: 'fuuka', f: 'neutral', t: "Hello, Father." },
      { s: 'fuuka', f: 'neutral', t: "...Yes. Mother told me. About next term." },
      { n: "Solar didn't need to hear the other side. She could hear it in the length of Fuuka's silences, which were long and full, and in the way her free hand had found the edge of the counter and held it. A school nearer home. A tutor, three evenings a week. No more dorm, no more strange club, no more whatever it was that had happened to her in June that nobody had called the police about. A plan. A good one. A good one for someone." },
      { choose: [
        { t: "(Stay where she can see you.)", notes: 3, then: [
          { n: "Solar didn't move. She stayed on her stool at the end of the counter, in the corner of Fuuka's eye, and when Fuuka glanced at her, once, quick, the way you'd check a lamp was still lit, Solar just looked back." }
        ] },
        { t: "(Turn the burner down so she doesn't have to think about it.)", notes: 2, then: [
          { n: "Solar reached past her and turned the flame down under the pot, and Fuuka saw her do it and her mouth moved, *thank you*, with no sound, without breaking off listening." }
        ] },
        { t: "(Step out into the hall to give her privacy.)", notes: 1, stat: { kindness: 1 }, then: [
          { n: "Solar slid off the stool and went toward the door, and Fuuka's free hand came off the counter and caught her sleeve, without looking, and held on. Solar stayed." }
        ] }
      ] },
      { s: 'fuuka', f: 'neutral', t: "No." },
      { n: "It came out quiet. Not small. Quiet, the way a door closes when someone has decided to close it gently." },
      { s: 'fuuka', f: 'neutral', t: "No, Father. I'm not coming home next term. I'm staying here." },
      { s: 'fuuka', f: 'neutral', t: "...Because I'm needed here. There are people who can't take a step until I've told them it's safe. I'm good at it. I'm the only one who can do it." },
      { s: 'fuuka', f: 'neutral', t: "I'm not being dramatic. I'm telling you. I'm sorry that it's not what you planned. I'm not sorry that I'm staying. Those are different." },
      { n: "There was a long silence on the line. The wind shoved at the window over the sink. The nikujaga ticked in the pot. Fuuka stood in her apron with her own voice in her mouth, half a tone lower than the one from the summer, a little unsteady around the edges, and absolutely hers." },
      { s: 'fuuka', f: 'neutral', t: "...Yes. I'll call Mother on Sunday. Good night, Father." },
      { n: "She put the phone down on the counter, face down, very carefully, as if it might wake. Then she put both her hands flat beside it and looked at them, and they were shaking, both of them, all the way up to the elbows." },
      { s: 'fuuka', f: 'surprised', t: "Oh. Look. I'm shaking. I wasn't shaking at all while I was talking." },
      { choose: [
        { t: "That's how it works. It comes after.", notes: 3, then: [
          { s: 'fuuka', f: 'neutral', t: "...After. With the door shut." },
          { s: 'solar', f: 'neutral', t: "Or with somebody in the kitchen." },
          { n: "Fuuka laughed, a small cracked sound, and held her shaking hands out over the counter between them, and Solar took them, and held them still, and the shaking went on anyway for a while, into Solar's palms, like an engine idling, and then slowed, and then stopped." }
        ] },
        { t: "You were incredible.", notes: 2, then: [
          { s: 'fuuka', f: 'sad', t: "I was rude to my father." },
          { s: 'solar', f: 'neutral', t: "You were clear with your father. That's different." },
          { n: "Fuuka thought about the difference, the way she'd thought about loud and a lot on the roof, and seemed to decide it was a real one." }
        ] },
        { t: "Are you okay?", notes: 1, then: [
          { s: 'fuuka', f: 'neutral', t: "I don't know yet. Ask me tomorrow. I think I'll know tomorrow." }
        ] }
      ] },
      { s: 'fuuka', f: 'neutral', t: "I've never said no to him. Not once. Not about anything." },
      { s: 'fuuka', f: 'happy', t: "I practiced on you, I think. At the tamagoyaki. The practice one. You offered to help and I said no, and you just... let me. Nothing bad happened. The egg was fine." },
      { s: 'fuuka', f: 'neutral', t: "I think I needed to find out that nothing bad happens. On something small first." },
      { n: "The storm arrived properly about an hour later, the rain coming sideways all at once like a handful of gravel thrown at the glass, and the lights flickered once and held. They ate the nikujaga at the counter, the two of them, out of the pot, with the rice cooker clock glowing green and correct at their elbows. It wasn't her grandmother's. Fuuka said so, after the third bite, and then had a fourth." },
      { s: 'fuuka', f: 'happy', t: "It's mine, though. I think it's allowed to be mine." },
      { n: "She wrote it in the notebook, which was the second notebook now, blue, the green one full and retired to a shelf above the rice cooker, and she didn't write it as an attempt. She wrote it as a title, at the top of a clean page, the way you'd write a name. *Nikujaga (mine).* Then she put the pen down, and listened to the storm for a while with her head on one side, and Solar watched her listen to it and thought she had never seen anyone look so much like they lived where they were." }
    ] },

    { after: '11/19', title: '9: the student', place: 'Iwatodai Dorm · Kitchen', time: 'Evening', music: 'tender', scene: [
      { n: "November had come in cold and stayed cold, and since the start of the month the dorm had been quiet again, in a different key. Mitsuru came down to dinner and sat at the head of the table and ate almost nothing, with perfect manners, and went back up. Nobody asked her about it. Fuuka had started leaving a covered bowl of soup on a tray outside her door at ten, and every morning the bowl was on the tray again, empty, and neither of them had mentioned it to the other, and Solar suspected neither of them ever would." },
      { n: "Tonight Fuuka had turned the kitchen around. She had the square pan out, and the eggs, and the long chopsticks, and she had put an apron on Solar, tying it at the back with a neat bow the way you'd dress a child for a recital, and then stepped back with her hands folded." },
      { s: 'fuuka', f: 'happy', t: "Tamagoyaki. You're going to make it. I'm going to tell you what to do." },
      { s: 'fuuka', f: 'neutral', t: "I'll be very calm. I've been practicing being calm. I'm going to use my radio voice." },
      { choose: [
        { t: "Yes, navigator.", notes: 3, then: [
          { s: 'fuuka', f: 'surprised', t: "Oh— don't, I'll laugh, and then I won't be calm." },
          { n: "She laughed anyway, and pressed her lips together, and put her hands behind her back like an officer, and her face went soft and steady and focused, and it was exactly the face Solar heard every night in Tartarus, only now she could see it." }
        ] },
        { t: "I'm going to burn it.", notes: 2, then: [
          { s: 'fuuka', f: 'neutral', t: "Probably. I burned it eleven times. That's how you learn where the edge is." },
          { s: 'fuuka', f: 'happy', t: "You have to go past it a few times to know where it is." }
        ] },
        { t: "Shouldn't you do it? You're better.", notes: 1, then: [
          { s: 'fuuka', f: 'neutral', t: "That's why it's your turn." },
          { n: "She said it so simply that Solar picked up the chopsticks before she'd decided to." }
        ] }
      ] },
      { n: "Fuuka talked her through it in the radio voice, low and level, a little ahead of every step. *Pan's hot. Oil, just a little, wipe it with the paper. Pour a third. Tilt. Let it set at the edges. Now. Fold toward you. Don't worry about the shape. The shape comes later.* Solar's hands, which knew how to crack an egg one-handed and how to catch a falling ruler and where to stand in a fight, did not know how to do this. It was a relief, in a way. It was the first thing in months that her body didn't already have an opinion about." },
      { n: "The first roll tore. The second went lopsided. Fuuka didn't take the chopsticks once. She stood at Solar's elbow and said *it's okay* and *again* and *you're close* and, once, *oh, that's good*, in a voice so pleased it came out a little too high, and then cleared her throat and went back to being calm." },
      { n: "There was a letter on the counter by the rice cooker, propped against the green notebook. Pale blue envelope, a stamp with a crane on it, handwriting that leaned hard to the right as if it were walking into the wind." },
      { s: 'fuuka', f: 'happy', t: "Natsuki-chan wrote. From the north. It's snowing there already. She sent a picture of it. She says it's stupid and cold and the boys at her school are stupid and the bread at lunch is terrible." },
      { s: 'fuuka', f: 'happy', t: "She says nobody there knows how to make octopus sausages properly. She underlined properly. Twice." },
      { choose: [
        { t: "Are you going to write back?", notes: 2, then: [
          { s: 'fuuka', f: 'neutral', t: "I already have. Four pages. I'm going to cut it down to two before I send it. Maybe three." },
          { n: "She would not cut it down. Solar could tell from her face. It was going to be five." }
        ] },
        { t: "She misses you.", notes: 3, then: [
          { s: 'fuuka', f: 'surprised', t: "She didn't say that." },
          { s: 'solar', f: 'happy', t: "She underlined properly twice." },
          { n: "Fuuka looked at the letter for a long moment, and then at Solar, and then back at the letter, and her face went slowly pink all the way to the ears, the way it had once over a television, and she didn't say anything else, and didn't need to." }
        ] },
        { t: "(Keep your eyes on the egg.)", notes: 1, then: [
          { n: "Solar kept her eyes on the egg, which was the only reason the third roll didn't tear, and Fuuka saw that and approved of it out loud, in the radio voice, and forgot about the letter for a minute." }
        ] }
      ] },
      { n: "The third roll held. It came out of the pan uneven and too brown on one side and unmistakably a tamagoyaki, and Fuuka cut it into four with great ceremony and they looked at the cross-section together, the layers, the slight spiral, like a pair of scientists looking at a slide." },
      { n: "Out in the dining room somebody laughed, loud, and somebody else shushed them, and somebody else said Solar's name in a way that had nothing to do with tamagoyaki, the way you'd say the name of someone in a photograph. The dorm was full these days of voices that said her name like that. Fuuka heard it too. Solar saw her hear it." },
      { s: 'fuuka', f: 'neutral', t: "Senpai. Can I say something? You don't have to answer. I'm not asking anything." },
      { s: 'fuuka', f: 'neutral', t: "Whoever you turn out to be, wherever it is, you were Solar-senpai in this kitchen. You tasted forty-one tamagoyaki that were wrong. You held the flashlight. You stayed when my father called." },
      { s: 'fuuka', f: 'happy', t: "That one's real too. I have it written down." },
      { n: "She put her hand on the green notebook on its shelf, just touched it, the way you'd touch a photograph on a desk, and took it away again." },
      { choose: [
        { t: "Thank you for writing it down.", notes: 3, then: [
          { s: 'fuuka', f: 'neutral', t: "Every time. Your name's on nearly every page. *Senpai tasted. Senpai said too loud. Senpai ate four.*" },
          { n: "Solar laughed, and it came out wrong, wet at the bottom, and she covered it by eating a piece of the tamagoyaki, which was too sweet, because she'd put in too much sugar, without measuring, the way you'd do if someone you loved had once put their finger on their lips." }
        ] },
        { t: "I don't know who I'll turn out to be.", notes: 2, then: [
          { s: 'fuuka', f: 'neutral', t: "I know. That's okay. I just wanted you to know which one I'd met." }
        ] },
        { t: "(Don't say anything. Hand her a piece of the egg.)", notes: 2, then: [
          { n: "Solar held out a piece on the chopsticks, and Fuuka ate it off them without any embarrassment at all, and chewed, and considered, with her eyes shut." },
          { s: 'fuuka', f: 'happy', t: "Too much sugar. It's very good. Don't change it." }
        ] }
      ] },
      { n: "At ten Fuuka put a covered bowl of soup on the tray and carried it upstairs, and Solar went with her as far as the landing and waited there, and listened to her set it down outside Mitsuru's door, very gently, and knock once, very softly, and come away without waiting for an answer. On the way back down Fuuka didn't say anything. She took Solar's arm on the stairs instead, the way you'd take the arm of someone you were walking home with, and held it all the way to the kitchen, where the rice cooker said the time, correctly, in green." }
    ] },

    { after: '12/9', title: '10: the priestess', place: 'Iwatodai Dorm · Dining Room', time: 'Evening', music: 'tender', scene: [
      { n: "The first real cold of the winter had come down over Iwatodai like a lid, and the dorm's old radiators had woken up all at once that week with a great clanking, like a ship's engine starting, and filled the halls with the smell of hot dust. Fuuka had asked Solar two days before whether she was free tonight, with a face like she was asking for a kidney, and tonight Solar came down to find the dining room empty except for one end of the long table, which had been set for two." },
      { n: "There was a cloth. There were the good bowls from the top shelf that nobody used. There was a small blue vase with a single sprig of something from the flower stall in the mall, and steam rising off everything, and Fuuka standing behind her chair in a clean apron with her hands clasped in front of her, very straight, like a waiter in a restaurant she'd built herself." },
      { s: 'fuuka', f: 'happy', t: "Please sit. Everyone else is out. I asked them to be. I'm sorry. I asked very politely." },
      { s: 'fuuka', f: 'neutral', t: "It's everything. Everything I learned. Miso soup with no iron. The nikujaga, mine. Rice. Tamagoyaki. Spinach. And there's a dessert, but it's a surprise, and it may be a bad surprise, so don't think about it." },
      { choose: [
        { t: "Fuuka. This is beautiful.", notes: 3, then: [
          { s: 'fuuka', f: 'surprised', t: "It's— it's just dinner." },
          { s: 'solar', f: 'happy', t: "It's beautiful dinner." },
          { n: "Fuuka sat down very fast, as if her knees had made the decision, and looked at the table, and at Solar, and at the table, and had to press her lips together hard to keep her face where it was." }
        ] },
        { t: "Is this a test? Am I the data?", notes: 2, then: [
          { s: 'fuuka', f: 'happy', t: "No! No data. No notebook. I left it in the kitchen on purpose." },
          { s: 'fuuka', f: 'neutral', t: "...I might write it down after. But not during." }
        ] },
        { t: "You didn't have to do all this.", notes: 1, then: [
          { s: 'fuuka', f: 'neutral', t: "I know I didn't have to. That's why I wanted to." },
          { n: "She said it gently and without any apology at all, and pulled out Solar's chair for her." }
        ] }
      ] },
      { cg: 'link-fuuka-r10' },
      { n: "It was good. It was all good, every bowl, not good-for-Fuuka but good, the soup clean and salty, the nikujaga dark and sweet, the tamagoyaki layered like the pages of a book, and Solar ate slowly, because she wanted it to last and because Fuuka was watching her eat with an expression she'd never seen on her before. Not braced. Not hopeful. Just watching. The way you'd watch someone you liked open a present you already knew they'd like." },
      { n: "The radiators clanked. Outside, the street was empty and gold under the lamps, with the first snow of the year lying thin along it. They talked about nothing, the cold, whether there'd be more snow, Junpei's latest theory about the vending machines, and the nothing was warm and easy and went on for a long time." },
      { cg: null },
      { s: 'fuuka', f: 'neutral', t: "The night of the cookies. You came down because of the smell. You could have just opened another window and gone back to bed." },
      { s: 'fuuka', f: 'neutral', t: "You stayed in the kitchen. You were the first person who ever stayed in the kitchen. Everyone else came to the door and said something nice and left." },
      { s: 'fuuka', f: 'happy', t: "I found the place where I'm useful this year. In Tartarus, and in here. I think I'd have found the first one anyway. I don't think I'd have found this one without someone staying." },
      { choose: [
        { t: "You'd have found it. I just got to watch.", notes: 2, then: [
          { s: 'fuuka', f: 'neutral', t: "Maybe. But you watched. That's not nothing. It's different from nothing." }
        ] },
        { t: "I stayed because I wanted to. Every time.", notes: 3, then: [
          { n: "Fuuka put her chopsticks down. She looked at Solar across the small bright end of the long dark table, and her eyes filled, and she let them, and didn't say it was the onion, and didn't say she was sorry." },
          { s: 'fuuka', f: 'happy', t: "...I know. I could tell. That's the part I'm going to keep." }
        ] },
        { t: "The cookies were really bad, though.", notes: 2, then: [
          { s: 'fuuka', f: 'happy', t: "They were so bad. I still have two of them. They haven't changed at all. I think they'll outlive us." },
          { n: "They laughed until Fuuka had to put her face in her napkin, and the radiators clanked along like an audience." }
        ] }
      ] },
      { n: "The dessert was a pudding, a caramel custard in a little glass cup, and it had not set quite right, and it leaned to one side like a building in an earthquake, and it was delicious. Fuuka said the nurse used to bring her these. She said it lightly, and Solar heard everything that was under the lightness and ate every bite." },
      { n: "Then Fuuka reached under her chair and brought out a notebook, a third one, new, with a cream-colored cover, and slid it across the cloth." },
      { s: 'fuuka', f: 'neutral', t: "It's for you. Everything you liked this year. Every recipe." },
      { n: "Solar opened it. Fuuka's tidy hand filled every page. The curry for everyone. The nikujaga. The porridge, rice and water and salt, which had its own page all to itself and nothing else on it but the three ingredients and, at the bottom, *for when nobody's eating*. And all through it, wherever a recipe would have said *a pinch*, Fuuka had crossed it out and written a weight instead, very precise, to a tenth of a gram, with a small note in the margin." },
      { n: "*A pinch (Solar-senpai's fingers) = 0.8 g. Measured on the kitchen scale.*" },
      { s: 'fuuka', f: 'neutral', t: "So you can make them anywhere. Without me there to tell you. Wherever you are." },
      { s: 'fuuka', f: 'sad', t: "...I'm not saying anything. I don't know anything. I just thought, recipes are good to have. In case." },
      { choose: [
        { t: "Wherever I am, I'll make the porridge first.", notes: 3, then: [
          { n: "Fuuka nodded, quickly, too many times, and looked down at her empty pudding cup, and turned it a little on the cloth." },
          { s: 'fuuka', f: 'happy', t: "Good. Use a little salt. Not a pinch. Point eight grams." }
        ] },
        { t: "You measured my pinch?", notes: 2, then: [
          { s: 'fuuka', f: 'happy', t: "Of course I did. I keep everything. It's in the green notebook." },
          { s: 'fuuka', f: 'neutral', t: "I knew it would matter someday. I didn't know for what." }
        ] },
        { t: "(Hold the notebook against your chest.)", notes: 3, then: [
          { n: "Solar closed the notebook and held it against her chest with both arms, the way Fuuka had once held a shopping list in a supermarket aisle, and Fuuka saw her do it and recognized it, and laughed, and wiped her eyes with the back of her wrist." }
        ] }
      ] },
      { s: 'fuuka', f: 'neutral', t: "Senpai. One more thing. And then I'll stop. I'm sorry." },
      { s: 'fuuka', f: 'neutral', t: "I listen for a living now. It's what I'm for. And if you ever get lost, anywhere, even somewhere very far, I think I'll be able to hear it. I'll be turning the dial very slowly. I'll find you." },
      { s: 'fuuka', f: 'happy', t: "...No. That's not right. It's not what I'm for. It's what I want to do. That's better. I'm allowed to want it." },
      { n: "They washed up together, Fuuka washing, Solar drying, the way they always had, and the window over the sink fogged, and the street outside went soft and gold, and the new notebook sat on the counter where Solar could see it, cream-colored and full, with her name written on the cover in Fuuka's hand." },
      { n: "*SOLAR-SENPAI (PRACTICAL).*" },
      { n: "She didn't cry until she got upstairs. Then she sat on the edge of her bed with the notebook in her lap and the radiator clanking and let herself, for a minute, with the door shut, the way you did. It was the good kind. She checked. She had, by now, enough practice to tell." }
    ] }
  ],
  afterMax: [
    { place: 'Iwatodai Dorm · Kitchen', time: 'Evening', scene: [
      { n: "It snowed in the afternoon, the first snow that stuck, and by dinnertime the dorm was so full of people that the kitchen had become a sort of command center, with Fuuka at the stove at the heart of it, in her apron, with her hair pinned up with two pencils, running a nabe for more people than the building had chairs." },
      { n: "There were two pots going, and a third waiting, and people kept coming through the doorway, people Solar's age, people who said her name the way you'd say the name of a street you grew up on, carrying plates and asking where things went, and Fuuka told every one of them, without looking up, in the radio voice, low and level and a little ahead of every step." },
      { s: 'fuuka', f: 'neutral', t: "Bowls, top shelf, left. Not those, those are the good ones. Rice is ready in four minutes. Senpai, the tofu. Gently. It's shy." },
      { s: 'fuuka', f: 'happy', t: "Junpei-kun, if you touch the meat before it's done I will tell Mitsuru-senpai." },
      { n: "Somebody laughed in the dining room, loud and familiar in a way that made the back of Solar's neck prickle, and somebody else started arguing about whether you put the noodles in at the end or never, and the windows had fogged so thick that the snow outside was only a soft white suggestion, and the whole building smelled of kelp and soy and steam." },
      { choose: [
        { t: "(Do exactly what the navigator says.)", notes: 3, then: [
          { n: "Solar slid the tofu in gently, the way she was told, and Fuuka watched it go and nodded once, satisfied, and moved on to the next thing, and Solar felt the specific, ridiculous pride of having been given a job by someone who was very good at giving jobs." }
        ] },
        { t: "You're in charge of all of us now, you know.", notes: 2, then: [
          { s: 'fuuka', f: 'surprised', t: "I'm not in charge. I'm just... I know where the bowls are." },
          { s: 'fuuka', f: 'happy', t: "...Okay. In the kitchen. Only in the kitchen." }
        ] },
        { t: "(Steal a piece of meat from the pot.)", notes: 1, then: [
          { s: 'fuuka', f: 'surprised', t: "Senpai!" },
          { n: "Fuuka pointed the ladle at her with real menace, and then, because she couldn't hold it, laughed, and pointed it at the door instead." }
        ] }
      ] },
      { n: "When the pots went out to the table and the noise in the dining room rose up and doubled, Fuuka stood alone in the kitchen for a second with the ladle in her hand and listened to it. All of it. The voices, the chairs, the clink of bowls, Koromaru's tail thumping against somebody's leg under the table, the snow ticking against the window. She had her head on one side. She was smiling." },
      { s: 'fuuka', f: 'happy', t: "It sounds like a station. A really good one. With lots of people talking." },
      { n: "Then she took off her apron, and hung it on its hook, and went out to eat with everyone, and saved Solar the seat next to her without asking, the way you'd save a seat for someone you'd known for years." }
    ] },
    { place: 'Iwatodai Dorm · Rooftop', time: 'Night', scene: [
      { n: "It was too cold to be on the roof, and they were on the roof anyway, in coats and scarves and a blanket from Fuuka's bed around both of them, with the old wooden radio between their knees and the city all around them gone sharp and glittering in the winter air, every light twice as bright as it was in summer." },
      { n: "Fuuka turned the dial slowly. The static came and went like breath. She had stopped apologizing for this a long time ago. She just did it now, the way you'd do anything that was yours." },
      { s: 'fuuka', f: 'neutral', t: "I thought, the far stations would be better in winter. The air's clearer. The signal goes further. Things can reach you from a long way off." },
      { n: "The shipping weather came up out of the static, the same calm woman, the same list of coasts, the wind and the sea and the visibility, far away and already in the middle of the night, telling the ships where it was safe and where it wasn't. Fuuka sighed when she found it, the way you'd sigh at a friend coming through a door." },
      { s: 'fuuka', f: 'neutral', t: "I don't know where you're going to be, Senpai. After all this. Nobody's told me and I haven't asked." },
      { s: 'fuuka', f: 'neutral', t: "But wherever it is, I think it'll be like this. You'll be very far away, and it'll be the middle of the night where you are, and if I turn the dial slowly enough I'll be able to hear you. Even if I don't know it's you." },
      { s: 'fuuka', f: 'sad', t: "I'm sorry. That's not a very cheerful thing to say on a roof." },
      { choose: [
        { t: "It's the most cheerful thing anyone's said to me all winter.", notes: 3, then: [
          { n: "Fuuka laughed into the blanket, and then leaned her head, very slightly, against Solar's shoulder, and left it there, and the woman on the radio went on down her list of coasts." }
        ] },
        { t: "And I'll be listening back.", notes: 3, then: [
          { s: 'fuuka', f: 'happy', t: "...Then we'll find each other in the static. That's how it works. Both people listening." }
        ] },
        { t: "(Just listen to the station with her.)", notes: 2, then: [
          { n: "Solar didn't say anything. She tucked the blanket tighter around both of them, and listened, and after a while Fuuka stopped waiting for an answer and listened too, and that was the answer." }
        ] }
      ] },
      { n: "They stayed until the station faded, which it did, eventually, the way the far ones always did, swallowed by whatever weather was coming in on the other side of the world. Fuuka turned the radio off. The city was very quiet. Their breath went up white between them and disappeared." },
      { s: 'fuuka', f: 'happy', t: "Point eight grams. Don't forget." },
      { n: "Solar told her she wouldn't. She carried the radio down the stairs this time, in both arms, the way Fuuka always had, and it was heavier than it looked, and warm where the tubes had been, and she held it against her chest all the way to the kitchen like something that was still talking to her." }
    ] }
  ]
});
