/* Act III story events (guests, 6/9 → 8/23). Revamp story data (femc-game.html). Same format as story-act1.js.
   Visitors' own scenes live in their link files; here they appear only as glimpses and, once met, at the table (ifRank). */
(window.FEMC_GAME_EVENTS ||= []).push(
  { id: 'a3-radios', date: '6/12', slot: 'evening', title: 'far stations', place: 'Iwatodai Dorm · Command Room', time: 'Evening', scene: [
    { music: 'mystery' },
    { n: "Fuuka moved in on a Thursday with one suitcase, a rice cooker she'd brought from home because she didn't trust anyone else's, and the slightly stunned politeness of a girl who had been told the truth about the world over a cup of tea and had said, very quietly, all right, and then asked where the bathroom was. By Friday she was in the command room with her eyes closed and her hands folded in her lap, and everybody else was standing around her trying not to breathe too loudly." },
    { n: "Her Persona hung in the air over her chair like a lamp nobody had switched on yet, a pale woman-shape with a great glass skirt that hummed very faintly, the way a wine glass hums when you run a wet finger round the rim. Mitsuru had taken one look at it on Tuesday and said, in a voice Solar had never heard her use before, oh, thank God. Then she'd gone into the hall for a minute and come back with her face put away." },
    { s: 'fuuka', f: 'neutral', t: "I can hear the tower. Even from here. It's like having a shell up to your ear." },
    { s: 'fuuka', f: 'sad', t: "And I can hear them. The ones from the other night. They're still out there." },
    { s: 'mitsuru', f: 'neutral', t: "How many?" },
    { s: 'fuuka', f: 'neutral', t: "Four. No, four and... four clearly. They're all over the city. It's like radios, Mitsuru-senpai. Lots of little radios, each one tuned to a different station, and all the stations are very far away. Farther than anything. I can hear the music but not the words." },
    { s: 'junpei', f: 'surprised', t: "Okay, I'm gonna be the guy who says it. What if they're Shadows? Like, smart ones. Shadows in people suits." },
    { s: 'fuuka', f: 'neutral', t: "They're not. Shadows sound like... like a hole. These sound like people. People who are homesick." },
    { n: "Mitsuru was quiet for a long time. Then she took a pen from her blazer and a sheet of paper from the stack by her elbow and turned the paper over to the blank side, and Solar realized, with a small jolt, that it was a Kirijo Group report form, and that Mitsuru was about to not fill it in." },
    { s: 'mitsuru', f: 'neutral', t: "We won't be reporting this. Not yet." },
    { s: 'akihiko', f: 'surprised', t: "You're not telling the Group?" },
    { s: 'mitsuru', f: 'neutral', t: "The Group would want readings. Samples. Explanations. I don't have any of those, and I've seen what my family's company does with things it can't explain." },
    { s: 'mitsuru', f: 'neutral', t: "If you meet them, any of them, bring them here. To the lounge, not the lab. I'd rather know their faces than their readings." },
    { n: "She wrote something on the back of the form after all, three words in her neat angled hand, and folded it in half, and put it in her pocket, and nobody asked what it said. Solar thought it was probably a list. Mitsuru made lists the way other people bit their nails." },
    { s: 'fuuka', f: 'neutral', t: "Um. Can I try something? While I'm in here? I'd like to read everyone properly. So I know what you sound like when you're all right. Then I'll know when you're not." },
    { n: "One by one. Akihiko sounded, Fuuka said with her eyes still shut, like somebody running uphill. Junpei sounded like a television left on in another room. Yukari like a bowstring. Mitsuru like a very old clock, and Mitsuru didn't know what to do with that and looked out the window." },
    { s: 'fuuka', f: 'neutral', t: "And Solar..." },
    { n: "Fuuka's brow creased. The hum of the glass skirt dipped, and rose, and dipped again, like a radio being tuned past something and back." },
    { s: 'fuuka', f: 'surprised', t: "That's strange. Solar, you're... there's two of you." },
    { s: 'fuuka', f: 'neutral', t: "No, that's not right. There's one of you. But there are two signals, in the same place, on top of each other. Like an echo. Like when you shout into a well and it comes back a second late." },
    { choose: [
      { t: "Is that bad?", then: [
        { s: 'fuuka', f: 'sad', t: "I don't know. I'm sorry. I've only been doing this for three days. It might just be how you sound." },
        { s: 'fuuka', f: 'neutral', t: "...You do sound a bit like a well." }
      ] },
      { t: "Which one is me?", then: [
        { n: "Fuuka was quiet for a long moment, listening." },
        { s: 'fuuka', f: 'neutral', t: "The louder one. I think. The other one's very quiet. It's like it doesn't want to be heard." }
      ] },
      { t: "(Laugh it off.)", then: [
        { n: "She laughed, a short easy sound, the kind she'd been doing all spring for rooms that needed her to be fine, and Junpei laughed too because she had, and the hum of the glass skirt dipped once more and settled, and Fuuka opened her eyes and looked at her a little too long and didn't say anything else." }
      ] }
    ] },
    { n: "Afterward, alone on the stairs, she stood very still for a moment and listened to herself the way Fuuka had, as if she might catch it. Her heart. The building. The hum of the vending machine downstairs. Nothing else. Nothing a second late. She went up to bed and lay awake anyway, listening, the way you listen for a dripping tap you're almost sure you turned off." }
  ] },

  { id: 'a3-the-pull', date: '6/17', slot: 'after', title: 'water toward a drain', place: 'The Velvet Room', time: '', scene: [
    { music: 'velvet' },
    { n: "Elizabeth had a new page open. A girl with a high ponytail streaked purple and a fox mask pushed up on her head, drawn mid-laugh. Under it, two lines of fine blue writing, no more. The page was filling the way pages were supposed to, slowly, a line a day, like a photograph coming up in the tray." },
    { s: 'elizabeth', f: 'happy', t: "Four new guests in a single night. I haven't had a week like this since the book was bound. And they're behaving. Their pages are writing themselves exactly as they should." },
    { s: 'elizabeth', f: 'serious', t: "Which means I can finally see what's bringing them. I've been looking at it all week. It's like trying to watch the wind by watching the washing." },
    { bg: 'velvetroom-1' },
    { s: 'elizabeth', f: 'neutral', t: "There's a pull. Here, in this city, at the hour. Something is drawing people in from very far away, the way water draws toward a drain. Gently. Patiently. You'd never notice the current until you were already in the middle of the bath." },
    { s: 'elizabeth', f: 'neutral', t: "It doesn't take just anyone. I've read every page now. It takes people who are running from an ending." },
    { s: 'solar', f: 'serious', t: "What kind of ending?" },
    { s: 'elizabeth', f: 'neutral', t: "Their own. A war they know they'll lose. A crown they don't want. A last page they haven't the courage to write. Everyone has an ending they're walking toward, Solar. These are the ones who turned around and started walking the other way, and something heard them." },
    { s: 'elizabeth', f: 'serious', t: "And here is the part I like less. The ones who make a bond here, a friend, a reason, a place to sit, hold fast. The bond is an anchor. The ones who don't..." },
    { s: 'elizabeth', f: 'sad', t: "Their pages grow faint. Not blank. Faint. As though the ink were being drawn back up into the pen." },
    { choose: [
      { t: "Then we'll make sure they have someone.", then: [
        { s: 'elizabeth', f: 'happy', t: "Yes. I thought you might say that. You have the look of someone who collects strays and then pretends she didn't mean to." }
      ] },
      { t: "What happens when a page goes all the way faint?", then: [
        { s: 'elizabeth', f: 'serious', t: "I don't know. It hasn't happened yet. I would very much like it not to happen while I'm the one holding the book." }
      ] },
      { t: "Is that what happened to me?", then: [
        { n: "Elizabeth didn't answer straight away. She turned the pages back, past the fox girl and the woman in white and the boy in the hoodie and the girl in the jester's hat, past Ann and Kasumi and Haru, to the white page with the three gray smudges on it." },
        { s: 'elizabeth', f: 'neutral', t: "Your page isn't faint. Faint is ink going away. Yours never had any to lose." },
        { s: 'elizabeth', f: 'serious', t: "But I'll ask, since you've raised it. What are you running from?" },
        { n: "She didn't know. She opened her mouth to say so, and three different answers came up into her throat at once, all of them in the shape of a date, and none of them had words in them, and she closed her mouth again." }
      ] }
    ] },
    { s: 'elizabeth', f: 'neutral', t: "One more thing, and then I'll let you go. Every one of these four mentions the same small kindness on the night they arrived. Someone gave them directions." },
    { s: 'elizabeth', f: 'happy', t: "Isn't that lovely? Lost in a strange city at midnight, and someone stops to point the way. I do wish the book would tell me who." },
    { n: "Solar thought of a corner at the end of a street in the green, and a small arm in a sleeve much too long for it, pointing. She didn't say anything. She thought it was probably the kind of thing you had to see for yourself, and then she thought that was a strange thing to think, and then the light took her." }
  ] },

  { id: 'a3-hierophant', date: '7/7', slot: 'evening', title: 'a wish on a festival night', place: 'Iwatodai Dorm · Command Room', time: 'Evening', scene: [
    { music: 'badfeeling' },
    { n: "It was Tanabata. The shopping streets had put up bamboo along the pavements, hung with paper wishes in every color, and they rustled in the hot wind like something breathing, and every time Solar walked past one she read a few without meaning to. *Pass my exams.* *Let Mom get better.* *I want to see him again.* Children's handwriting, mostly. Some of it wasn't." },
    { n: "She didn't write one. Yukari asked why, on the way home, and she said she couldn't think of anything, and Yukari looked at her the way people did lately, a half second too long, and let it go." },
    { s: 'fuuka', f: 'neutral', t: "There are two. One on Shirakawa Boulevard, inside a building. A big one. And another, close to it, that keeps... moving around. Like it's pacing." },
    { s: 'junpei', f: 'surprised', t: "Shirakawa Boulevard? Like, the Shirakawa Boulevard? With the hotels?" },
    { s: 'yukari', f: 'serious', t: "Don't." },
    { s: 'junpei', f: 'surprised', t: "I didn't say anything!" },
    { s: 'yukari', f: 'serious', t: "You were about to." },
    { place: 'Shirakawa Boulevard · The Dark Hour', time: 'The Dark Hour', bg: 'hotel-outside' },
    { dark: true },
    { music: 'fullmoon' },
    { n: "The boulevard at midnight was a street of signs that had stopped glowing, castle turrets made of plaster and a fairy-tale tower with one pink neon heart gone dark in its window, and coffins standing in every doorway like the world's most awkward queue. The hot wind had stopped with everything else. The paper wishes on the bamboo hung perfectly still." },
    { n: "The first Shadow was in the lobby of the biggest hotel, sitting on the front desk like it owned the place, a robed thing that spoke. Not words. A low rolling drone with the rhythm of a sermon, and every time it reached the end of a line its shadow got a little larger on the wall behind it." },
    { battle: { id: 'hierophant', op: 'hierophant', title: 'The Hierophant', desc: 'A Shadow that preaches, and grows with every sermon. The hotel lobby on Shirakawa Boulevard.', forced: true, kind: 'operation' } },
    { n: "It wasn't over. Fuuka's voice came through, tight and quick: the second reading was upstairs, and it had stopped pacing, and it had split them up." },
    { n: "Later, nobody would talk about the next twenty minutes. Solar would remember them only in pieces. A room on the third floor with a round bed and a mirror on the ceiling. A pink haze. Junpei saying something very sincere in a voice that wasn't his to a lamp. And a strange calm warm feeling, like being told by someone kind that she didn't have to decide anything ever again, that everything was already chosen for her, that she could lie down, and she had very nearly lain down." },
    { n: "It was the word *chosen* that did it. Her whole body went cold and hard at it, the way it did every time, and she came up out of the haze with the Evoker already at her temple and her teeth set, furious, at a mirror." },
    { battle: { id: 'lovers', op: 'lovers', title: 'The Lovers', desc: 'Upstairs, a charm that tells you everything has already been decided for you.', forced: true, kind: 'operation' } },
    { music: 'night' },
    { s: 'junpei', f: 'flustered', t: "I want everybody to know that I don't remember anything, and that whatever I said to that lamp, I was being controlled." },
    { s: 'yukari', f: 'neutral', t: "You told it it had a beautiful soul." },
    { s: 'junpei', f: 'flustered', t: "CONTROLLED." },
    { n: "They came out onto the boulevard laughing in the way people laugh when they were scared five minutes ago and haven't caught up, and the hour still had a while to run, and Solar, a step behind, looked up the street, and the street wasn't empty." },
    { n: "A woman was walking down the middle of the road toward them. Not walking. Processing. Tall, and dressed in something that moved like water and caught light that wasn't there, and her hair went on further than hair should, and the green of the hour bent away from her a little as she passed, the way heat bends the air over a road. She was looking around at the plaster castles and the dead neon hearts with an expression of enormous professional interest." },
    { n: "Down at the end of the boulevard, under a bamboo pole hung with motionless wishes, a small figure in a coat too big for her lifted one long sleeve and pointed the woman toward the station, and she went, unhurried, as if it had been her idea, and the small figure was gone." },
    { s: 'fuuka', f: 'neutral', t: "Another one. Solar, there's another one now. She just... arrived. Like a door opening." },
    { n: "Nobody else had seen her. Solar didn't say anything. She stood under the bamboo on the way back to the station and read a wish that was hanging at the level of her eyes, in pencil, in very small neat letters, as if whoever wrote it hadn't wanted anyone to read it. *I don't want it to come.* That was all. No name. She didn't know what *it* was. She stood there reading it until Akihiko came back for her." },
    { dark: false }
  ] },

  { id: 'a3-campus', date: '7/10', slot: 'after', title: 'the way to a building', place: 'Gekkoukan High · Library', time: 'After School', scene: [
    { music: 'school' },
    { n: "Finals started on Monday, and the library had become a field hospital, every table taken, every chair occupied by a third year in some stage of collapse, the air thick with the smell of highlighters and anxiety and somebody's convenience-store onigiri being eaten against the rules. Solar stayed until the librarian started turning lights off at them, one bank at a time, like a hint." },
    // The Gekkoukan buzz (rank-15 batch): the night before his tournament, if she's said she'll be there (rank 4).
    { ifRank: { akihiko: 4 }, then: [
      { n: "At the table by the returns desk, four second-years in matching hair clips were not studying. They had a bedsheet spread across two chairs and the floor between them and were painting letters on it in pink, in a whisper, on their knees, SANADA-SEN, and had very clearly started too big. One of them looked up as Solar went past, and recognized her, and nudged the others, and all four watched her the whole way to the door with the steady, patient, slightly wounded attention of people guarding something they'd made." }
    ] },
    { place: 'Gekkoukan High · Front Gate', time: 'Evening', soft: true },
    { music: 'tender' },
    { n: "Outside, it was dusk. The real kind, the long blue kind that only happens in summer, when the sun has gone but the light hasn't heard yet. The heat had finally broken. The air coming off the bay was almost cool against her arms, and the brick paths across the school grounds had gone the color of rust and dried roses, and somewhere above her the big clock on the main building cleared its throat and struck seven." },
    { music: 'world-runners' },
    { n: "She started walking. Not to the gate. Her feet had gone a different way, left instead of right, along the path past the gym, with total confidence, the way they'd go to her own room in the dark. Past the gym. Past the old club building. Toward a building that should have been at the end of the path, a tall one, brick, with long windows and a metal ladder bolted to its back wall going all the way up to the roof. She could see it so clearly she could have drawn it. She could have told you which rung was loose." },
    { n: "The path ended at the fence by the archery range. There was no building. There was a vending machine and a bike rack and the fence, and beyond the fence, the road, and the bay." },
    { n: "She stood there with her bag on her shoulder, slightly out of breath, the way you are when you've run up a flight of stairs and found one more step than you counted. The air smelled like cut grass and the sea. It should have smelled like something else. Cold. Leaves. Somebody's lighter, three floors up." },
    { choose: [
      { t: "(Put your hand on the fence.)", then: [
        { n: "The wire was still warm from the day. She held on to it and waited for the building to be there, and it wasn't, and her hand knew the cold of a metal rung anyway, the exact cold of it, bitten into her palm." }
      ] },
      { t: "(Turn around and go the right way.)", then: [
        { n: "She turned around. The right way felt wrong all the way to the gate, the way a jumper does when you've put it on backwards and only noticed halfway through the day." }
      ] },
      { t: "(Count the windows on the building that isn't there.)", then: [
        { n: "Fourteen on the side she could see. One lit, fourth floor, third from the left. Somebody working late. She had absolutely no idea who, and she wanted to go up and knock on the door so badly her teeth hurt." }
      ] }
    ] },
    { fragment: 'runners-campus' },
    { n: "On the way home she took out her phone, for no reason, and looked at it, and it had no messages, because the only people who ever messaged her lived in the same building as her, and they were all at home. She looked at it anyway, at the gate, in the last of the blue, the way you look at a phone when you're waiting for somebody to say *where are you*." },
    { n: "Nobody did. She put it away. She'd deal with it tomorrow, she thought, and then had the strange, tired, sideways feeling of having thought that sentence a thousand times before, in that exact tone, on a path that went somewhere else." }
  ] },

  { id: 'a3-dinner', date: '7/18', slot: 'evening', title: 'extra bowls', place: 'Iwatodai Dorm · Dining Room', time: 'Evening', scene: [
    { music: 'joy' },
    { n: "Exam results went up on Saturday morning, and on Saturday evening Junpei declared hot pot, with the authority of a man whose name had appeared on the ranking board in a position he described as character-building. It was thirty-one degrees. The air conditioner was making a noise like a dying animal. Nobody pointed out that hot pot was a winter food, because Junpei had already bought the burner, and because there was something about the sight of him carrying it in from the convenience store like a trophy that made you want to let him have this." },
    { n: "Fuuka had volunteered to make the broth. Everyone had let her, out of kindness, and was now quietly afraid." },
    // The Gekkoukan buzz (rank-15 batch): after the shoe lockers (rank 5).
    { ifRank: { akihiko: 5 }, then: [
      { n: "Before anyone had so much as lit the burner, Junpei had news, and he stood at the head of the table to deliver it." },
      { s: 'junpei', f: 'happy', t: "Okay. So. The whole second floor is saying the Sanada-senpai fan club cornered our leader at the shoe lockers. Four of them. With hair clips. Is it true? Blink twice." },
      { s: 'yukari', f: 'serious', t: "It's true. Half my class saw it. They had a clipboard. I've never been so embarrassed to live in a building." },
      { s: 'akihiko', f: 'neutral', t: "They're not a fan club. They're just. They come to the tournaments." },
      { s: 'yukari', f: 'serious', t: "They have a banner, senpai. With your name on it. In pink. It's a fan club." },
      { s: 'junpei', f: 'happy', t: "Senpai. Real talk. Whatever they are, and whatever she is, you love me more, though. Right? I've been here since April." },
      { s: 'akihiko', f: 'neutral', t: "You've been here since April because you live here." },
      { n: "Which wasn't a no, Junpei pointed out, and kept pointing out, at intervals, for the rest of the night, and Akihiko ate his hot pot in thirty-one degrees with his ears going steadily redder, and didn't once look down the table at Solar, very carefully, all evening." }
    ] },
    { n: "And Mitsuru had set out extra bowls. Six of them, white and stacked at the end of the long table, and she hadn't explained them and nobody had asked, and Solar had looked at them and felt, uncomfortably, like they were addressed to her." },
    { s: 'mitsuru', f: 'neutral', t: "You said some of your strangers have found their feet. I thought they might be hungry." },
    { ifRank: { ann: 1 }, then: [
      { s: 'ann', f: 'happy', t: "Okay, I brought crepes for after, and also, can somebody explain why there's a gun next to your TV remote?" },
      { n: "Junpei, who had left it there, put it in his pocket with the speed of the deeply guilty." },
      { s: 'yukari', f: 'neutral', t: "It's a club thing. Don't ask." },
      { s: 'ann', f: 'serious', t: "...I have a feeling I'm in a lot of clubs I'm not supposed to talk about." }
    ] },
    { ifRank: { haru: 1 }, then: [
      { n: "Haru arrived at six with a basket of vegetables from a roof garden nobody could quite place, took one look into Fuuka's pot, said oh, how brave, in a voice of pure sympathy, and within ten minutes had taken over the kitchen so gently that nobody, least of all Fuuka, saw it happen." },
      { s: 'fuuka', f: 'sad', t: "She's so nice. She's so nice, and she poured my broth down the sink." }
    ] },
    { ifRank: { kasumi: 1 }, then: [
      { n: "Kasumi came straight from practice with her hair still damp and her ribbon slightly crooked, bowed to every single person at the table individually, including Koromaru's empty water bowl by the door, and then ate four helpings with the steady, efficient focus of an athlete refuelling, apologizing between each one." }
    ] },
    { ifRank: { kiriko: 1 }, then: [
      { s: 'kiriko', f: 'happy', t: "Fortunes for the house! Everybody draws. No take-backs. I don't make the rules. I mean, I do, but still." },
      { n: "Junpei drew a great curse and had to lie down. Mitsuru drew a great blessing and looked faintly embarrassed about it. Solar drew last, and Kiriko unfolded the slip and read it and folded it right back up again, fast, and tucked it into her own sleeve." },
      { s: 'kiriko', f: 'neutral', t: "Middle blessing. Super boring. Don't worry about it." },
      { n: "Solar worried about it." }
    ] },
    { ifRank: { kuromi: 1 }, then: [
      { n: "Kuromi had claimed the couch at four, announced that the dorm was hers now and therefore so was the party, and was charging a toll at the lounge door: one compliment, sincerely meant, or one dumpling. Junpei had paid in dumplings three times. Nobody had managed a compliment." },
      { s: 'kuromi', f: 'happy', t: "You're late to my party. That's a dumpling." },
      { s: 'mitsuru', f: 'surprised', t: "...I live here." },
      { s: 'kuromi', f: 'serious', t: "A toll's a toll." }
    ] },
    { ifRank: { mercy: 1 }, then: [
      { n: "Mercy came at eight, straight from somewhere she'd decided to be useful, with her coat still on and her hair coming loose, apologized to Mitsuru for the hour in careful formal Japanese, and then looked down the table and found Junpei's wrist, which he had sprained on Tuesday doing something he refused to describe, and rewrapped it at the table between the tofu and the cabbage, telling him in a pleasant voice exactly how stupid he had been." }
    ] },
    { ifRank: { sebastian: 1 }, then: [
      { n: "Sebastian spent most of the night against the wall by the stairs with one can of soda he never finished. He said maybe eleven words, all of them to Fuuka and all of them about computers, and left looking, by his own standards, radiant." }
    ] },
    { ifRank: { aphrodite: 1 }, then: [
      { s: 'aphrodite', f: 'serious', t: "A feast. A feast, and nobody thought to invite me. Luckily, love always finds the party." },
      { n: "She took the head of the table, which was Mitsuru's, without being offered it, and Mitsuru, astonishingly, let her. Junpei gave her the last fish ball as an offering. She laid one hand on his forehead and blessed him, at length." },
      { s: 'aphrodite', f: 'happy', t: "You will be loved, little mortal. Eventually. By someone. Probably." },
      { s: 'junpei', f: 'happy', t: "I'll TAKE it." }
    ] },
    ...window.FEMC_STORY_KIT.anyRank('a3-dinner-guests', ['ann', 'haru', 'kasumi', 'kiriko', 'kuromi', 'mercy', 'sebastian', 'aphrodite'], 1),
    { ifFlag: 'a3-dinner-guests', then: [
      { n: "By ten the dining room was louder than it had been since April, and warmer, and it smelled like soy and steam and somebody's perfume, and the extra bowls were all dirty. Mitsuru stood at the edge of it with a cup of tea she wasn't drinking, watching the room the way she watched the monitors upstairs, except that every so often the corner of her mouth moved." },
      { s: 'mitsuru', f: 'neutral', t: "So these are your strangers. They're much less alarming than their readings." }
    ], else: [
      { n: "Nobody came to fill the extra bowls. Mitsuru put them away at nine without comment, one at a time, the way you'd put away a guest list, and the hot pot was very good anyway, and Junpei fell asleep at the table with a mushroom on his chopsticks." },
      { s: 'mitsuru', f: 'neutral', t: "Your strangers didn't come. Next time, perhaps. I'll keep the bowls where I can reach them." }
    ] },
    { s: 'mitsuru', f: 'neutral', t: "Is there anyone else?" },
    { choose: [
      { t: "There's one more.", then: [
        { s: 'mitsuru', f: 'neutral', t: "Then take her something. There's plenty." },
        { n: "Solar hadn't said her. She looked at Mitsuru. Mitsuru looked at the pot." }
      ] },
      { t: "(Look at the window.)", then: [
        { n: "Mitsuru followed her eyes to the dark glass and didn't ask, and a minute later handed her a bowl and a pair of chopsticks without a word, which from Mitsuru was practically a speech." }
      ] }
    ] },
    { place: 'Iwatodai Dorm · Front', time: 'Night', music: 'tender' },
    { n: "The heat hadn't broken. It sat on the street like a held breath, cicadas grinding away somewhere in the dark, the asphalt still giving back the day. And across the road, at the end of the block, under the streetlight, Wren was standing with her arms wrapped around herself in that enormous coat, in thirty-one degrees, watching the lit windows of the dining room." },
    { s: 'wren', f: 'flustered', t: "Oh. Hello. I got as far as the light." },
    { s: 'wren', f: 'happy', t: "I've been watching through the window. It looked very loud. I liked it. Somebody fell asleep in his dinner." },
    { choose: [
      { t: "Come in. There's room.", then: [
        { s: 'wren', f: 'flustered', t: "Oh, no. No, I couldn't. It's so full. I'd only be in the way. I'm much better at windows." },
        { n: "She said it so quickly, and so cheerfully, that it had to be something she'd said a great many times before, to a great many doors." }
      ] },
      { t: "(Hold out the bowl.)", then: [
        { n: "Wren looked at the bowl for a long time, the steam going up out of it into the hot night, and then took it in both sleeves, very carefully, like it was something that might wake up." }
      ] },
      { t: "Why won't you ever come in?", then: [
        { s: 'wren', f: 'sad', t: "...I don't know. I'm sorry. I'm sorry, I'm being strange. You should go back. They'll wonder where you are." },
        { n: "It was such a small sad sound, the sorry, that Solar wished immediately she could take the question back and put it somewhere Wren would never find it." }
      ] }
    ] },
    { n: "They stood under the light together for a while, close, not talking, the noise of the dinner coming through the window behind them like the sea in a shell, and on the pavement at their feet there was only one shadow, long and dark and certain, which Solar put down to the two of them standing too close together, and didn't think about again." },
    { n: "When she went back in, Mitsuru had saved her a seat. When she looked out of the window at eleven, the streetlight was lighting nothing but the street." }
  ] },

  { id: 'a3-yakushima', date: '7/22', slot: 'late', title: 'someone she was looking for', place: 'Yakushima', time: 'Night', cast: {}, scene: [
    { music: 'sun' },
    { cg: 'trip-yakushima-beach' },
    { n: "Yakushima was green the way a held breath is green, all moss and cedar and wet stone, the forest coming right down to the sand like it wanted to see the sea for itself. The Kirijo villa had a beach, and the beach had a great deal of sun, and Junpei had a sunburn on exactly half of his face from falling asleep on his side, which he was calling a look." },
    { cg: null },
    { n: "On the second evening, walking the far end of the sand on her own with her sandals in her hand, Solar found a girl standing in the water." },
    { n: "Not swimming. Standing, up to her shins, very straight, looking out at the horizon, with the low gold sun on her and the waves breaking around her legs and pulling back and not moving her at all. She was blonde, and very pale, and dressed in something that wasn't a swimsuit and wasn't clothes, and as Solar came closer she saw the seams at her shoulders, and the joints at her wrists, fine as watch-parts, and understood that whatever this was, it wasn't a girl in the way she was a girl." },
    { n: "The girl turned her head. Her eyes were very blue and perfectly calm, and when they landed on Solar they stopped, the way a compass needle stops." },
    { s: 'aigis', f: 'neutral', t: "There you are." },
    { s: 'aigis', f: 'neutral', t: "I have been looking for someone. For a long time, I think. I am not certain how long. I believe it is you." },
    { s: 'aigis', f: 'serious', t: "I do not know why I believe it." },
    { choose: [
      { t: "I think you have the wrong person.", then: [
        { s: 'aigis', f: 'neutral', t: "That is possible. I have considered it. I have run the comparison eleven times since you came onto the sand." },
        { s: 'aigis', f: 'serious', t: "It returns the same answer each time, with no reasoning attached. I find that very unusual. I am not built to be certain of things I cannot explain." }
      ] },
      { t: "Who were you looking for?", then: [
        { s: 'aigis', f: 'neutral', t: "Someone who was going to come. Someone there would be a place for." },
        { s: 'aigis', f: 'serious', t: "There was a space kept for them. In my instructions. In my priorities. A space shaped like a person. I believe it is shaped like you." }
      ] },
      { t: "(Wade in beside her.)", then: [
        { n: "The water was warm as a bath at the edge and cold further out. Solar stopped beside her, a careful arm's length away, and they looked at the horizon together, and the girl didn't seem to find this strange at all." },
        { s: 'aigis', f: 'neutral', t: "Yes. This is correct. This is where you stand." }
      ] }
    ] },
    { n: "Then there was shouting from the villa, Mitsuru's voice, very sharp, and men in Kirijo uniforms coming down the beach at a run, and the girl looked at them without alarm and back at Solar without hurry." },
    { s: 'aigis', f: 'neutral', t: "My designation is Aigis. I believe I will be coming with you." },
    { n: "She did. There were phone calls, a great many of them, most of which Mitsuru took with her back to the room and her voice gone very flat and polite. There was an explanation that wasn't an explanation, about a facility on the island and a project nobody would name. By the time the ferry left on Thursday, Aigis was on it, standing at the rail exactly one arm's length from Solar, watching the island go." },
    { join: 'aigis' },
    { n: "Solar asked her, once, on the ferry, why the space had been shaped like her, and Aigis thought about it for a full minute, the wind pulling at her hair, and said she believed the world had made a place for Solar before Solar arrived. Like a room made up for a guest. Like a seat saved." },
    { n: "Solar thought about a bed turned down at one corner in April, and a plate on a door with no name on it, and a uniform pressed in exactly her size, and went and stood at the other end of the ferry for a while, looking at the wake, until her hands stopped." }
  ] },

  { id: 'a3-chariot', date: '8/6', slot: 'evening', title: 'no rails', place: 'Iwatodai Dorm · Command Room', time: 'Evening', scene: [
    { music: 'badfeeling' },
    { n: "August had come down on the city like a lid. The kind of heat that made the air over the roads wobble and the cicadas scream from every tree at once, and at night it didn't break, it just got darker. Solar had stopped sleeping well. She told herself it was the heat." },
    { s: 'fuuka', f: 'neutral', t: "Moonlight Bridge. Two of them. They're on the bridge itself, in the middle, and they're not moving apart. I think they're... together. One of them's very fast." },
    { place: 'Moonlight Bridge · The Dark Hour', time: 'The Dark Hour', bg: 'darkhour-moonlight-bridge' },
    { dark: true },
    { music: 'fullmoon' },
    { n: "Moonlight Bridge at midnight was a long green road over black water, the cars stopped dead in both directions, coffins at the wheels, every streetlight out. The cables went up into the dark like harp strings. The moon hung right over the far tower, so full and so low it looked like the bridge was about to drive into it." },
    { n: "In the middle of the span, something was waiting. A chariot that wasn't a chariot, all wheels and wings and fury, and riding behind it a shape holding up a pair of scales, very still, very patient, like a judge waiting for the defendant to finish lying." },
    { battle: { id: 'chariot', op: 'chariot', title: 'Chariot & Justice', desc: 'Two Shadows in the middle of Moonlight Bridge: one that charges, and one that weighs.', forced: true, kind: 'operation' } },
    { music: 'night' },
    { n: "Afterwards they stood in the middle of the bridge breathing hard, the ash going up off the asphalt and out over the water in long soft ribbons. Akihiko had a cut over one eye that he was very pleased about. Junpei was lying flat on his back on the roof of a stopped taxi, saying he was never moving again." },
    { n: "Further along, where the bridge met the far bank, there was somebody again. Awake. A woman with purple hair and a lot of tattoos sitting on the guardrail with her legs over the drop, smoking something that didn't glow because nothing glowed in the hour, looking down at the water like she was waiting for it to say something." },
    { s: 'fuuka', f: 'surprised', t: "Another one. Solar, they keep coming. And there's something else. There's something very big, and it's..." },
    { n: "She stopped. Over the radio, Solar heard her draw a breath and not let it out." },
    { s: 'fuuka', f: 'surprised', t: "It's on the bridge." },
    { n: "She heard it before she saw it. The horn. The long low note she'd heard from her window on her first night here, far off, where no train should have been running. It came across the water and went right through the deck of the bridge and up through the soles of her shoes into her teeth, and every hair on her arms stood up." },
    { n: "Then the train came." },
    { cg: 'story-moonlight-train' },
    { n: "It came along the bridge from the far end, where there were no rails. A steam train, black and green, old, the kind she'd only ever seen in pictures, its engine glossy as a beetle, its windows lit gold from inside like lanterns, carriage after carriage, unhurried. It made no sound on the road at all. It didn't run on the asphalt. It ran a hand's width above it, on nothing, on rails that weren't there, and the steam that came out of its chimney went up in slow green curls and didn't drift, and the coffins in the stopped cars didn't so much as tremble as it passed them." },
    { s: 'junpei', f: 'surprised', t: "...Guys. Guys. Tell me you see that. Tell me I'm not the only one." },
    { s: 'akihiko', f: 'serious', t: "I see it." },
    { s: 'mitsuru', f: 'surprised', t: "There's no reading. Fuuka, there's nothing on my screen. Nothing at all. It's as if it isn't there." },
    { s: 'fuuka', f: 'sad', t: "I can't hear it. I can hear everything on the bridge, everyone, and I can't hear that. It's like a hole in the sound." },
    { n: "It slowed at the far tower. Slowed, and stopped, a hand's width off the road, its windows glowing. Through them, Solar could see people. Sitting in the seats. Very still. Asleep, she thought, or something like it, their heads tipped against the glass, their faces peaceful." },
    { cg: null },
    { n: "And on the pavement beside the tower, a woman in a blue coat was waiting with a case held against her chest. A long case, the shape of a violin but a little bigger. Solar knew her. Not knew her. Had seen her. Twice, on the steps of Iwatodai Station, in June, in that same blue coat buttoned to the throat in the heat, the big black case held upright between her shoes like a child she was minding, her shoes wet both times as if she'd walked through puddles to get there and hadn't minded, looking at the departures board like she was waiting for it to change its mind. Solar had walked by both times and thought she looked tired and thought nothing else. Nobody had stopped for her. Solar hadn't stopped for her." },
    { n: "The woman looked at the train. Her face did nothing in particular. Then a door opened in the side of the nearest carriage, without anyone opening it, and she stepped up into it with her case in her arms, as easily as getting on a bus home, and the door closed behind her." },
    { choose: [
      { t: "(Run.)", then: [
        { n: "She ran. She was faster than any of them, she always had been, and she was still forty meters away when the train began to move again, unhurried, and by the time she reached the tower there was nothing there but the green and the ash and the long low note going away across the water." }
      ] },
      { t: "Wait!", then: [
        { n: "It came out of her loud and raw and much too late. Nobody in the train turned their head. The woman in the blue coat, behind the glass, had already closed her eyes." }
      ] },
      { t: "(Stand very still.)", then: [
        { n: "She didn't move. She couldn't. Her whole body had gone still the way it did when it knew something before she did, and what it knew was that it had seen that train before, that it knew the sound of it, that once, somewhere, it had stood on a platform and watched one come in and felt something it didn't have a name for, which was wanting to get on." }
      ] }
    ] },
    { n: "The train went on across the bridge and off the end of it, into the air above the water, still a hand's width above rails that weren't there, smaller and smaller, its lantern windows going out of sight one by one like a string of lights being taken down. The horn sounded once more, very far away. Then the hour was over, and the streetlights came on, and the cars on the bridge woke up and started honking at the S.E.E.S. members standing in the road." },
    { n: "Nobody spoke on the way home. Mitsuru made a phone call she ended without saying a word. Fuuka cried a little, quietly, on the monorail, and said she was sorry, she didn't know why, she just felt like someone had gone. Solar sat with her hands between her knees and thought about the woman in the blue coat on the bottom step of the station, twice, and all the reasons she hadn't stopped, and how none of them were reasons." },
    { dark: false }
  ] },

  { id: 'a3-lacuna', date: '8/7', slot: 'after', title: 'lacuna', place: 'The Velvet Room', time: '', scene: [
    { music: 'velvet' },
    { n: "Elizabeth was not smiling. Solar had never once in four months come into the elevator and found her not smiling, and the absence of it made the blue room feel colder, like a house with the heating off." },
    { s: 'elizabeth', f: 'serious', t: "Sit down. Please. I want to show you something, and I don't want you standing when I do." },
    { bg: 'velvetroom-1' },
    { n: "She opened the book to a page near the front. Or what had been a page. It was gone. Not torn. Not cut. There was simply a gap in the book where a leaf should have been, the edges of the pages on either side lying perfectly flat against each other, and down in the gutter, where the binding was, a thin line of light, very bright, the way light shows under a door." },
    { s: 'elizabeth', f: 'neutral', t: "Her name was Hanne. She came in March, before you. She played the viola, very well, in an orchestra that was going to let her go at the end of the season. That was the ending she was running from. A small one. Most of them are small." },
    { s: 'elizabeth', f: 'sad', t: "Nobody here held her. Nobody stopped. It was easy, for whatever took her. I've been reading her page all spring, watching it go faint, and I thought, well, someone will notice her, people are kind, and I didn't do anything, because I am only supposed to keep the book." },
    { s: 'elizabeth', f: 'sad', t: "And last night the page went." },
    { choose: [
      { t: "I saw her. Twice. I didn't stop either.", then: [
        { s: 'elizabeth', f: 'neutral', t: "...No. Neither of us did." },
        { n: "She didn't say it to make Solar feel better, and she didn't say it to make her feel worse. She said it the way you'd read out a line from a ledger. Somehow that was the only way Solar could have stood to hear it." }
      ] },
      { t: "Where did the train take her?", then: [
        { s: 'elizabeth', f: 'serious', t: "I don't know. The book doesn't know. That's what frightens me. The book always knows where people are." }
      ] },
      { t: "(Look at the light in the gutter.)", then: [
        { n: "It was warm on her face when she leaned in, warm and very faintly moving, like light coming off water. It smelled, for no reason she could explain, of rain on iron rails." }
      ] }
    ] },
    { s: 'elizabeth', f: 'neutral', t: "There's a word for this. In old manuscripts, when a passage has been lost, when the page is damaged or a scribe skipped a line or a mouse ate a corner, scholars call the gap a lacuna. A hole in a text. The place where words are missing." },
    { n: "She turned the pages back. Slowly. Past the new ones filling in, past Ann and Kasumi and Haru, to the blank page with its three gray smudges, and laid the open book across Solar's knees, so the white page and the line of light were side by side." },
    { s: 'elizabeth', f: 'serious', t: "That is a lacuna. And so, I think, is this." },
    { s: 'elizabeth', f: 'neutral', t: "Your page isn't empty, Solar. I've been wrong about that since April. Empty is a page nobody has written on yet. Yours is a page where something should be and isn't. A gap. The same kind of gap that train came out of last night." },
    { n: "Solar looked down at her page and at the light beside it and felt, very clearly and for the first time, afraid of herself. Not of the tower, or the hour, or the things in them. Of the girl in the bathroom mirror every morning, putting her hair up with hands that knew how." },
    { choose: [
      { t: "Did I bring it here?", then: [
        { s: 'elizabeth', f: 'neutral', t: "I don't know. I truly don't. I am telling you two things that look alike. I am not telling you they are the same thing." },
        { s: 'elizabeth', f: 'happy', t: "A crow and a writing desk look alike from a sufficient distance. It doesn't make the desk fly." }
      ] },
      { t: "What do I do?", then: [
        { s: 'elizabeth', f: 'neutral', t: "What you did in June. Make sure they have someone. The ones who are faint." },
        { s: 'elizabeth', f: 'serious', t: "And Solar. If you ever see that train come in at a platform where you happen to be standing, I would take it as a great personal kindness if you did not get on." }
      ] }
    ] },
    { n: "She went down in the elevator with the numbers running backward over the brass doors and the smell of rain on iron still in her nose. On the way out of the mall she bought a bottle of water and drank all of it standing by the fountain, and counted the people going past, every one, all the way to two hundred, and stopped for none of them, and hated it." }
  ] },

  { id: 'a3-full-house', date: '8/7', slot: 'evening', title: 'a full house', place: 'Iwatodai Dorm · Lounge', time: 'Evening', scene: [
    { music: 'dorm' },
    { n: "The dorm filled up all at once, the way a train does at rush hour, and by dinner on the seventh there were three new pairs of shoes by the door that hadn't been there in the morning." },
    { n: "The first belonged to Ken Amada, who was ten and came with one neat suitcase and a very formal bow and the composed, carefully adult face of a boy who had decided a long time ago that nobody was going to have to look after him. He'd been living at the dorm all summer on some arrangement nobody fully explained. Now he had an Evoker. He held it like it might bite him and like he would let it." },
    { s: 'ken', f: 'neutral', t: "I'll do my best not to be a burden. Please look after me." },
    { s: 'junpei', f: 'happy', t: "Dude, you're ten. Being a burden is your whole job. Lean into it." },
    { join: 'ken' },
    { n: "The second pair of shoes didn't belong to anybody, strictly speaking. Koromaru was a white shiba with red eyes and a scar over one of them who had been sitting on the steps of Naganaki Shrine every day since his owner died, and who had, on some night none of them had seen, faced down a Shadow on his own and walked away from it. He came in through the front door behind Akihiko, went once around the lounge sniffing every chair, and lay down on Solar's feet like that settled it." },
    { s: 'koromaru', f: 'happy', t: "Woof." },
    { s: 'mitsuru', f: 'neutral', t: "He has... an Evoker. Apparently he can use it. I've decided not to ask how." },
    { join: 'koromaru' },
    { n: "The third pair of shoes were big and scuffed and came in at nine, carrying a single duffel and a lot of silence. Shinjiro Aragaki stood in the doorway of the lounge in his long coat in thirty-degree heat, looking at the room like a man looking at a house he used to live in, and Akihiko stood up from the couch so fast he knocked his drink over." },
    { s: 'akihiko', f: 'happy', t: "You came." },
    { s: 'shinjiro', f: 'neutral', t: "Don't make it a thing, Aki." },
    { n: "Akihiko didn't make it a thing. He made it a thing for exactly one second, in his face, the whole of him lit up like a stadium, and then he put it away and picked up his glass and said something about the towels being in the cupboard on the second floor, and Shinjiro said he knew where the damn towels were, and went upstairs, and on the way past Ken he stopped." },
    { n: "It was very small. A hitch in his step. His eyes went to the boy and away again, fast, the way your hand comes off a hot pan, and Ken didn't look up from his suitcase, and Shinjiro went on up the stairs. Solar was the only one who saw it. She filed it, the way she filed exits." },
    { join: 'shinjiro' },
    { s: 'yukari', f: 'neutral', t: "Okay. So we're a family now. A big weird family with a dog." },
    { s: 'junpei', f: 'happy', t: "We were always a family. Now we're a family with a dog. It's a whole different tier." },
    { choose: [
      { t: "(Scratch Koromaru behind the ears.)", then: [
        { n: "He sighed, the deep heavy sigh of a dog who has made a decision about where he lives, and leaned his whole weight into her shins until she nearly fell over." }
      ] },
      { t: "Welcome home, everyone.", then: [
        { n: "She didn't know why she said it like that. It wasn't her home, any more than it was theirs. But Ken looked up from his suitcase, and Koromaru's tail thumped once, and up on the second floor a door that had been about to close stayed open for a moment, and then closed." }
      ] }
    ] },
    { n: "That night the dorm made more noise than it ever had. More doors, more footsteps, more water in the pipes. Somebody in the kitchen at one in the morning, very quietly, cooking something that smelled like garlic and ginger and somebody's mother. Solar lay awake listening to all of it, and it was the first night since June she didn't mind lying awake." }
  ] },

  { id: 'a3-lanterns', date: '8/15', slot: 'evening', title: 'red lanterns', place: 'Port Island · Back Streets', time: 'Evening', consumes: true, scene: [
    { music: 'night' },
    { n: "It was Obon, the three days in August when the dead come home, and Port Island had hung up its lanterns for them. Paper ones, white and pale yellow, strung along the shopping arcade and over the doors of the old houses near the harbor, and down by the water there was a dance going in circles round a drum tower, old women in cotton yukata lifting their hands in the same slow shapes their grandmothers had taught them." },
    { n: "Fuuka had wanted to come. Yukari had wanted Fuuka to stop looking so pale. Solar had come because everyone else was coming, and had lost them, somewhere between the drum and the shaved-ice stall, the way she lost people in crowds, by drifting to the edge and then a little past it." },
    { n: "The street she drifted into was narrow and old and steep and went down toward the harbor in shallow stone steps, and the lanterns hanging over it were red." },
    { n: "Not Obon lanterns. Red ones, round and fat and silk, the kind with gold tassels and black characters painted on them that weren't Japanese, swaying very slightly in a wind that wasn't blowing, strung one after another down the whole length of the street so the stones underneath were the color of the inside of a cheek. It smelled like black bean sauce and frying dough and star anise and something burnt-sweet. Somewhere behind a steamed-up window a woman was singing off-key in a language Solar shouldn't have known, a little song about a flower, jasmine, over and over, loud, like a warning." },
    { n: "Solar knew the words. She knew the next line before it came. Her mouth was already shaping it." },
    { choose: [
      { t: "(Sing the next line under your breath.)", then: [
        { n: "It came out small and in tune and in a language she didn't speak, and the singing behind the window stopped dead, mid-word, the way someone stops when they hear their name called in an empty house." }
      ] },
      { t: "(Walk down the steps.)", then: [
        { n: "Her feet knew the steps. Which ones were worn into a dip in the middle. Which one rocked. She went down them in the red light without looking, the way you'd go down your own stairs at night." }
      ] },
      { t: "(Count the lanterns.)", then: [
        { n: "Seventeen. The seventeenth was the one at the bottom, by the corner, and under it, in her mind, there was somebody leaning on the wall." }
      ] }
    ] },
    { music: 'world-strangers' },
    { n: "Under the last lantern, at the bottom, there should have been someone waiting. She could feel the shape of him the way you feel a step in the dark. Leaning on the wall with one shoulder, in a black jacket, not close, not far. Exactly as far back as he'd been told to stand. The smell of cinnamon gum and salt and cold engine oil. Not looking at her. Watching everything else, so that she didn't have to." },
    { n: "There was nobody under the last lantern. There was a wall, and a drainpipe, and a cat." },
    { fragment: 'strangers-lanterns' },
    { n: "When she turned back up the street the lanterns were white again, and paper, and Obon, and the stones were gray, and the street was just a street in Port Island that went down to a car park by the water. Fuuka found her at the top of it ten minutes later, out of breath, holding two shaved ices that were mostly melted." },
    { s: 'fuuka', f: 'surprised', t: "There you are! I could hear you. I mean, I could hear you were somewhere. You sounded... Solar, you sounded really far away. For a minute I couldn't find you at all." },
    { choose: [
      { t: "I got lost.", then: [
        { s: 'fuuka', f: 'happy', t: "That's okay. I found you. That's sort of my whole thing now." }
      ] },
      { t: "I'm right here.", then: [
        { s: 'fuuka', f: 'neutral', t: "...Yes. You are. Sorry. You are." },
        { n: "She held out one of the shaved ices. It was strawberry, and mostly water, and Solar drank it from the cup on the walk back to the drum, and her hand on the paper cup was shaking a little, and Fuuka very kindly didn't look." }
      ] }
    ] },
    { n: "That night, in the tower, Haenim came with that small green click again under the crack of the Evoker, jade on jade. It was louder than it had been in May. Solar was almost sure, by now, that it was a sound something made when it was trying to get her attention." }
  ] }
);
