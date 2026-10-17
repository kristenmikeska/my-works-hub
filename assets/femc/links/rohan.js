/* Rohan Kishibe · I The Magician. Arrives 9/5. Format notes are at the top of akihiko.js.
   Rank 3: Heaven's Door opens Solar's pages and finds the other worlds (Runners, strangers, Hoax), told only at blurb level.
   A boy keeps showing up in the pages with his face smudged; Rohan can't read him. Rank 2 nods to Kuromi's prank war if it happened. */
FemcSocial.define({
  id: 'rohan', name: 'Rohan Kishibe', short: 'Rohan', arcana: 'Magician', numeral: 'I', from: 'JoJo\'s Bizarre Adventure',
  arrives: '9/5',
  home: { place: 'Iwatodai Strip · Bookworms', slot: 0, days: [0, 3, 4, 6], hint: 'Daytime on Sundays, Wednesdays, Thursdays and Saturdays, at the back table of Bookworms, drawing.' },
  approach: "At the back table of Bookworms, a man in a green headband is drawing so fast the pen sounds like rain.",
  invite: {
    ask: ["Are you available? I need a reference model.", "Come to Bookworms. Now. It's for research.", "I have new pages. You may look at them.", "I need to draw hands. Yours will do.", "The light at the back table is perfect today. Get here before it changes.", "You're late. I didn't tell you to come, but you're late.", "Come and look at something. Don't ask what.", "I have a question about your school's bread. It can't wait."],
    ok: ["Good. Don't dawdle.", "Obviously.", "Back table. I've saved you a chair. Don't make it a thing."],
    no: ["Unacceptable. ...Fine.", "Your loss. It was going to be a very good drawing.", "Fine. I'll draw the old man instead. He holds still."]
  },
  hangouts: [
    [
      { n: "Rohan had decided, sometime that morning, that he couldn't draw hands. This was a lie. He could draw hands better than anyone alive. He'd simply decided he couldn't draw her hands, specifically, which meant she had to sit at the back table of Bookworms with both of them flat on the wood while he glared at them." },
      { s: 'rohan', f: 'serious', t: "Don't move. Your knuckles have a story. I want it." },
      { choose: [
        { t: "What story do my knuckles have?", notes: 3, then: [
          { s: 'rohan', f: 'neutral', t: "You hold your pen too tight. There's a callus here, from writing. And you bite this nail when you think nobody's looking." },
          { s: 'rohan', f: 'happy', t: "...See? Story." },
          { n: "He was right. She didn't tell him so. He could tell anyway, and was insufferable about it for the rest of the afternoon." }
        ] },
        { t: "(Hold perfectly still.)", notes: 2, then: [
          { n: "She held perfectly still for forty minutes. Her nose itched for thirty-eight of them. He drew fourteen hands and threw away eleven." },
          { s: 'rohan', f: 'neutral', t: "Adequate. You're a decent model. Don't let it go to your head." }
        ] },
        { t: "(Wiggle your fingers.)", notes: 1, then: [{ s: 'rohan', f: 'serious', t: "Wonderful. Now I'm drawing an octopus." }] }
      ] },
      { n: "When she finally got up her hands had gone stiff, and the old woman at the counter brought them both tea without being asked. Rohan said thank you to her, which he never said to anyone, and Solar decided not to point it out. He'd have stopped." }
    ],
    [
      { n: "The old man who ran Bookworms was asleep at the counter again, glasses pushed up on his head, mouth slightly open, a paperback face-down on his chest. Rohan was drawing him with enormous, focused tenderness, the way some people lit candles." },
      { s: 'rohan', f: 'happy', t: "He's perfect. He's held exactly that position for nine minutes. Do you know how rare that is? Professional models can't do that." },
      { n: "The old man woke up. He blinked at them. Then, very slowly, he held out his hand for the sketchbook." },
      { choose: [
        { t: "(Nudge Rohan to show him.)", notes: 3, then: [
          { n: "Rohan hesitated, which she had never once seen him do, and then handed it over. The old man looked at himself for a long time, the soft line of his jaw, the book rising and falling on his chest, the window light across the counter." },
          { n: "Then he laughed, delighted, and called his wife over, and the two of them stood at the back table looking at it together, and Rohan sat very straight in his chair while his ears went slowly pink." }
        ] },
        { t: "(Wait and see what Rohan does.)", notes: 2, then: [{ n: "Rohan tore the page out neatly along the edge and handed it over without a word. The old man folded it into his paperback like a bookmark and went back to sleep." }] },
        { t: "He's going to be mad you drew him sleeping.", notes: 1, then: [
          { s: 'rohan', f: 'happy', t: "He's going to be honored. There's a difference." },
          { n: "He was honored. He asked for a copy." }
        ] }
      ] },
      { n: "On the way out, Solar saw that the drawing had been pinned up behind the register. Rohan saw it too. He walked past it three times before he left." }
    ],
    [
      { n: "There was a stack of manga on the back table that Rohan had pulled from the shelves himself, popular ones, shiny covers, the kind with anime adaptations, and he was going through them one by one with a red pencil, which nobody had given him permission to do." },
      { s: 'rohan', f: 'serious', t: "This panel. Look at it. He's throwing a punch and his shoulder isn't even engaged. Has this artist ever been punched?" },
      { choose: [
        { t: "Have you ever been punched?", notes: 3, then: [
          { s: 'rohan', f: 'neutral', t: "Yes. Several times. For research." },
          { s: 'rohan', f: 'serious', t: "...Not all of it was for research." }
        ] },
        { t: "I like that one, actually.", notes: 2, then: [
          { s: 'rohan', f: 'surprised', t: "...Why?" },
          { n: "He asked it like he really wanted to know. She told him. He listened to all of it, said she was wrong, and then quietly put that volume back on the shelf without a single red mark in it." }
        ] },
        { t: "(Read over his shoulder.)", notes: 1, then: [{ s: 'rohan', f: 'serious', t: "You're breathing on my margin." }] }
      ] },
      { n: "The old woman came over eventually and confiscated the red pencil. Rohan surrendered it without a word, the way a cat gives up a mouse it was going to drop anyway, and took a blue one out of his jacket." }
    ],
    [
      { n: "Koichi had brought snacks, a whole bag of them, rice crackers and chocolate and a carton of strawberry milk, and was trying to set them down on the back table. Rohan was trying to stop him with his entire body." },
      { s: 'rohan', f: 'serious', t: "Not near the paper. Koichi. Not near the paper." },
      { s: 'koichi', f: 'serious', t: "Rohan, there's nowhere that isn't near the paper! You covered the whole table!" },
      { choose: [
        { t: "Rohan, eat a cracker. Think of it as research.", notes: 3, then: [
          { s: 'rohan', f: 'neutral', t: '...' },
          { s: 'rohan', f: 'neutral', t: "...Fine. For research." },
          { n: "He ate the cracker holding it at arm's length from the drawing, leaning sideways in his chair like a man eating over a bomb. Koichi looked at Solar like she'd performed a miracle." }
        ] },
        { t: "(Hold the snacks on your lap.)", notes: 2, then: [
          { s: 'koichi', f: 'happy', t: "Solar! You're a genius!" },
          { s: 'rohan', f: 'neutral', t: "She's a coat rack with opinions. Fine. Hand me a cracker." }
        ] },
        { t: "Koichi, let's eat outside.", notes: 1, then: [
          { s: 'rohan', f: 'serious', t: "Fine. Leave. See if I care." },
          { n: "He cared. Five minutes later he came out onto the steps with his sketchbook and sat one step above them, drawing the crackers." }
        ] }
      ] },
      { n: "While Rohan was in the bathroom, Koichi told her he'd never let anyone eat at that table before, not once, not even him. Then Rohan came back, and Koichi went very innocent, and Solar went very innocent, and Rohan looked between the two of them with deep suspicion and didn't ask." }
    ],
    [
      { n: "Rohan had a question for her, he announced, before she'd even sat down. A research question. It had been bothering him all morning and he could not draw the next page until it was answered." },
      { s: 'rohan', f: 'serious', t: "The bread they sell at your school. The yakisoba one. What does it actually taste like? Not 'good.' I'll leave if you say 'good.'" },
      { choose: [
        { t: "(Describe it in exact, loving detail.)", notes: 3, then: [
          { n: "She told him about the soft cheap roll and the noodles that were always a little cold, the pickled ginger, the mayonnaise you could never see but always tasted, the way the sauce soaked through the bottom if you saved it until fifth period. He wrote it all down without once looking up." },
          { s: 'rohan', f: 'happy', t: "...That's very good. That's very, very good. You'd make a decent writer." }
        ] },
        { t: "Carbs inside carbs.", notes: 2, then: [{ s: 'rohan', f: 'neutral', t: "Hm. Crude. Accurate. I'll take it." }] },
        { t: "Good.", notes: 1, then: [
          { s: 'rohan', f: 'serious', t: '...' },
          { n: "He did not leave. But he looked at her for a long time like she'd personally burned down a library." }
        ] }
      ] },
      { n: "A week later he showed her a single panel in his sketchbook. A girl on a school rooftop, eating yakisoba bread, sauce on her thumb. It was the most accurate drawing of lunch she had ever seen." }
    ]
  ],
  // After rank MAX on the romance route, each visit plays the next date in order (then they rotate).
  dates: [
    { title: 'research', place: 'Paulownia Mall · Chagall Café', music: 'joy', scene: [
      { n: "Rohan had explained, by text, at length, that this was not a date. Pink Dark Boy needed a date chapter, and he had never in his life drawn a date he believed, and he refused to start now by making one up, so he required a reference, and she was the obvious reference, and that was all this was. Research. He had underlined the word, somehow, in a text message." },
      { n: "He was at a corner table in Chagall when she arrived, with his back to the wall so he could see the whole room, a sketchbook open, two pens uncapped, and a list. The list had headings. One of them was Arrival (her). He watched her walk across the café with the cold, terrible focus of a man memorizing a crime scene." },
      { s: 'rohan', f: 'serious', t: "Stop. Go back to the door and do that again. You smiled when you saw me and then you hid it. I need to see where it went." },
      { s: 'solar', t: "Rohan." },
      { s: 'rohan', f: 'neutral', t: "...Fine. I got most of it. Sit." },
      { n: "He interrogated the latte art. He interrogated the waiter, a nervous university student who had never been asked why he poured the milk from that particular height. He spent eleven minutes drawing the couple two tables over, who were holding hands under the table and thought nobody could see, and turned the sketchbook around to show her, and he'd been right, it was exactly what holding hands under a table looked like." },
      { s: 'rohan', f: 'serious', t: "Now. Describe the feeling. A first date. Not good. Not nervous. I'll leave if you say nervous." },
      { choose: [
        { t: "Rohan. This is a date. You're on one.", notes: 3, then: [
          { s: 'rohan', f: 'serious', t: "...I'm aware." },
          { s: 'rohan', f: 'neutral', t: "I'm researching it from the inside. It's a method. I licked a spider. This is less dangerous." },
          { n: "He didn't look up from the page. The tips of his ears had gone pink under the headband, though, which she noted, and which he noticed her noting, and which he chose, with tremendous dignity, not to address." }
        ] },
        { t: "(Steal his pen.)", notes: 3, then: [
          { n: "She plucked the pen out of his fingers mid-line and capped it. He looked at his empty hand. He looked at the second pen, and she took that too. For a long moment Rohan Kishibe sat in a café with nothing to draw with, which she suspected had not happened to him since he was four." },
          { s: 'rohan', f: 'serious', t: "...Give those back." },
          { s: 'solar', t: "Just look at me. No notes." },
          { n: "He looked at her. It went on for some time. He was, she discovered, much worse at it without the pen, which is to say that he forgot to look anywhere else." }
        ] },
        { t: "(Play along. Ask him for the next stage direction.)", notes: 2, then: [
          { s: 'rohan', f: 'neutral', t: "Good. Cooperation. Hold my hand across the table. Not like that. Like you mean it." },
          { n: "She held it like she meant it. He stopped writing. He did not, she noticed, start again for a while." }
        ] }
      ] },
      { place: 'Paulownia Mall · Flower Stall', time: 'Afternoon', music: 'joy' },
      { n: "On the way out they passed the flower stall by the escalators, buckets of winter roses and something white she didn't know the name of, and Rohan stopped dead in front of them, the way he did in front of anything with a structure worth stealing." },
      { n: "He bought one white flower, he said, to see how the petals folded at the base, because he had been drawing them wrong for six years. He turned it over in his long fingers, examining it, and then held it out to her without looking at her at all." },
      { choose: [
        { t: "Is this for reference too?", notes: 3, then: [
          { s: 'rohan', f: 'serious', t: "Obviously." },
          { s: 'rohan', f: 'neutral', t: "...No." }
        ] },
        { t: "(Take it and say nothing.)", notes: 2, then: [
          { n: "She took it and said nothing. He nodded, once, like a contract had been signed, and walked on ahead of her, very fast, toward the doors." }
        ] }
      ] },
      { n: "A week later he showed her the date chapter. It was twenty-two pages long and he had thrown out twenty-one of them. The one he kept was a single panel, no dialogue, two hands holding each other across a café table, one of them with ink on the side of the middle finger. Everything else, he said, had been inaccurate." }
    ] },
    { title: 'the secret recipe', place: 'Hagakure', music: 'joy', scene: [
      { n: "Rohan had heard about the Hagakure bowl. He would not say from whom. He'd heard it was the best ramen in Iwatodai, that people came from three stations away for it, and that the chef would not give the recipe to anyone, not for money, not for flattery, not ever, and Solar had watched the word not ever go into Rohan's ear and settle there like a seed." },
      { n: "The shop was all steam and noise, the windows fogged gold, salarymen shoulder to shoulder at the counter, the smell of pork bone and soy so thick you could have leaned on it. Rohan sat down on a stool, looked at the bowl when it came, inhaled, and closed his eyes." },
      { s: 'rohan', f: 'happy', t: "...Oh. Oh, that's very good. That's unacceptable. I need to know what's in it." },
      { n: "He asked the chef. The chef, a broad man with a towel around his head, said it was a secret. Rohan asked again, more precisely. The chef said it was still a secret. Rohan nodded slowly, thoughtfully, and reached into his jacket, and took out his pen, and Solar knew that look, the particular calm of a man who had already made his decision and was only waiting for the world to catch up." },
      { choose: [
        { t: "Rohan. Koichi says you ask now.", notes: 3, then: [
          { s: 'rohan', f: 'serious', t: "I did ask. Twice." },
          { s: 'solar', t: "And he said no." },
          { s: 'rohan', f: 'neutral', t: "...Which is an answer. Yes. I know. I hate it." },
          { n: "He put the pen away, slowly, with the enormous dignity of a cat stepping back from a fish tank." }
        ] },
        { t: "(Put your hand over his pen.)", notes: 3, then: [
          { n: "She put her hand over his, over the pen, on the counter. He looked down at it. He did not fight it. After a moment his fingers loosened around the pen and turned, without his seeming to decide it, to hold hers instead." },
          { s: 'rohan', f: 'neutral', t: "...That was cheating. I'll allow it." }
        ] },
        { t: "(Let him. For science.)", notes: 1, then: [
          { n: "He looked at her. He looked at the chef. He looked at the pen in his hand for a long moment, and then put it back in his jacket." },
          { s: 'rohan', f: 'serious', t: "You were supposed to stop me. That was a test. You failed it. I passed it, somehow. I don't like how that feels." }
        ] }
      ] },
      { n: "The chef had watched all of this with his arms folded. Then he laughed, a big belly laugh that rattled the ladles, and leaned across the counter and told Rohan the secret, which was that he made it every single morning at four, and had for twenty years, and that was all, there wasn't anything else, and anybody could do it if they'd just get up." },
      { s: 'rohan', f: 'serious', t: "...That's the most infuriating thing I've ever heard. It's also correct. It's the same with drawing." },
      { n: "He ate the whole bowl, describing it to her as he went with the same exactness she had once used on a yakisoba bun, the fat on the surface, the char on the pork, the egg that had been soaked overnight until the yolk turned to jam. She listened to all of it. She told him he'd make a decent food critic. He looked up, broth on his lip." },
      { s: 'rohan', f: 'happy', t: "You're quoting me to me. That's unforgivable. Keep doing it." },
      { n: "Then he got broth on his jacket, the expensive cropped one, a dark spot spreading on the cuff, and stared at it with an expression of pure tragedy, like a man watching a ship go down." },
      { choose: [
        { t: "It's got a story now. The jacket has a story.", notes: 3, then: [
          { s: 'rohan', f: 'neutral', t: "...That's my line. From the hands. You remembered it." },
          { s: 'solar', t: "I remember everything you say. It's very annoying." },
          { s: 'rohan', f: 'happy', t: "Good. Then I'll say better things." }
        ] },
        { t: "(Clean it off for him with a napkin dipped in water.)", notes: 3, then: [
          { n: "She dipped a napkin in her water glass and took his wrist and dabbed at the cuff, carefully, and he let her, his whole arm held perfectly still on the counter, watching her work with the frank, startled attention of somebody who had never once in his adult life let anybody fix anything for him." }
        ] }
      ] },
      { n: "On the walk home along the strip he held her hand, and explained, unprompted, that it was purely for warmth, and presented his other hand as evidence, and it was in fact freezing. She held that one too, for a minute, to be fair to it." }
    ] },
    { title: 'the bench', place: 'Iwatodai Station · Platform', music: 'night', scene: [
      { n: "Iwatodai Station after eleven was almost empty. A drunk salaryman asleep upright on the far bench, a station attendant in white gloves, the long fluorescent tubes buzzing over the yellow line, and Rohan at the near end of the platform on a bench he had chosen very specifically, drawing the tracks." },
      { n: "It was the bench. She knew it before he said so. She knew it from the way he sat on it, not quite relaxed, the way you'd sit in a chair in a house where something had happened to you once." },
      { s: 'rohan', f: 'neutral', t: "September. I opened my eyes here. Everything was green and there were coffins on the platform and the clock had stopped." },
      { s: 'rohan', f: 'happy', t: "My first thought was, what an incredible chapter. My second thought was that nobody would ever believe me, which made it even better." },
      { s: 'rohan', f: 'serious', t: "I came back to draw it before I go. End of January. I want it right. The real one, not the green one." },
      { n: "His pen moved over the page in long sure lines, the tracks running away into the dark, the station clock, the vending machine glowing at the end of the platform. He didn't look up. He talked to the page." },
      { s: 'rohan', f: 'sad', t: "I don't trust my memory. You know why. It closed a page on me once and didn't tell me for sixteen years." },
      { s: 'rohan', f: 'serious', t: "So I draw everything. If it's on paper, it can't hide." },
      { choose: [
        { t: "Will you come back?", notes: 3, then: [
          { s: 'rohan', f: 'neutral', t: "I don't know how. Nobody does. Not even the woman with the book." },
          { s: 'rohan', f: 'happy', t: "But I'm very good at finding out things I'm not supposed to know. It's a professional skill." }
        ] },
        { t: "Put me in Pink Dark Boy. Then I'm in Morioh too.", notes: 3, then: [
          { s: 'rohan', f: 'neutral', t: "You've been in it since October." },
          { s: 'rohan', f: 'serious', t: "My editor is going to ask who you are. I'm going to say you're fictional. It'll be the only lie I've ever told in my work." }
        ] }
      ] },
      { n: "He turned to a fresh page. Then he did something she had never seen him do. He closed his eyes." },
      { s: 'rohan', f: 'serious', t: "Hold still. I'm going to draw you without looking. If I can, then I won't lose it. If I can't, I'll know." },
      { choose: [
        { t: "(Hold perfectly still while he draws.)", notes: 3, then: [
          { n: "She held perfectly still. The pen moved in the quiet, scratch and pause and scratch, his eyes shut, his face calm in a way it almost never was, the face of somebody listening to music he knew very well. A train went through without stopping, and the wind of it lifted his hair, and he didn't open his eyes." }
        ] },
        { t: "Open your eyes. Cheat. I won't tell.", notes: 2, then: [
          { s: 'rohan', f: 'serious', t: "Absolutely not. If I cheat now I'll cheat in February, and in February you won't be on the bench." },
          { n: "He kept them shut. The pen moved. She stopped arguing." }
        ] }
      ] },
      { n: "When he opened his eyes and turned the sketchbook around, it was her. Not the her she wished she looked like, the way he'd drawn her in September. Her. The tired line under her eyes, the scarf crooked, her mouth doing the thing it did when she was trying not to smile at him, which, he pointed out, it was doing now." },
      { s: 'rohan', f: 'happy', t: "...There. I won't forget. I checked." },
      { n: "The last train came in, doors opening with a sigh, the car bright and empty. Neither of them got up. The doors closed. It pulled away, and the wind of it pushed her hair across her face, and he reached over and moved it back with one ink-stained finger, and kissed her on the bench where he'd woken up in a world that wasn't his, slowly, like he was getting it right for the drawing." },
      { n: "They walked home along the tracks. It took an hour. Neither of them minded. At the dorm gate he tore the page out and gave it to her, and kept the one he'd drawn with his eyes open, and said that was fair, and it was." }
    ] },
    { title: 'crazy diamond', place: 'Iwatodai Strip · Bookworms', music: 'joy', scene: [
      { n: "Saturday was dice on the steps of Bookworms, a standing arrangement, though nobody had ever agreed to it out loud. Koichi brought snacks. Josuke brought his hair. Rohan brought nothing and complained about everything and had not missed a single Saturday since October." },
      { n: "Today Josuke had the look of a man who'd been waiting all week to say something. He held it in for nearly three rounds, which Koichi said afterward was a personal best." },
      { s: 'josuke', f: 'happy', t: "So. You're dating Rohan." },
      { s: 'josuke', f: 'serious', t: "Solar. Look at me. Blink twice if you need help." },
      { choose: [
        { t: "(Blink twice.)", notes: 3, then: [
          { n: "She blinked twice, slowly, holding Josuke's eyes. Josuke laughed so hard he fell sideways off the step into Koichi, and Koichi laughed so hard he dropped the rice crackers, and Rohan sat perfectly upright through all of it like a man posing for his own statue." },
          { s: 'rohan', f: 'serious', t: "Traitor. I'll remember this. I'm drawing it." }
        ] },
        { t: "He's actually very sweet.", notes: 3, then: [
          { s: 'josuke', f: 'serious', t: "He's WHAT?" },
          { s: 'koichi', f: 'happy', t: "I knew it. I knew it! He bought her a flower, Josuke. I saw the receipt!" },
          { s: 'rohan', f: 'serious', t: "Don't tell them things. They use them. They're like crows." }
        ] },
        { t: "Josuke, your hair looks great today.", notes: 2, then: [
          { s: 'josuke', f: 'happy', t: "...Okay. I'm not even mad anymore. What were we talking about?" },
          { s: 'rohan', f: 'neutral', t: "Coward's move. Well played." }
        ] }
      ] },
      { n: "It was only later, in a lull, that she noticed the waste bin by the door. It was full of a single drawing, torn into very small pieces. She knew his paper. She'd have known it anywhere." },
      { s: 'rohan', f: 'serious', t: "Don't. It was wrong. I drew you laughing yesterday and the mouth was wrong. I've drawn you a hundred and eleven times. The hundred and eleventh is wrong. It's in the bin, where it belongs." },
      { n: "Josuke looked at the bin. Then, without asking anybody, he reached in and scooped out a double handful of torn paper and dropped it on the step, and a big pink-and-teal shape flickered up behind him like a heat haze and laid one hand over the pile." },
      { s: 'josuke', f: 'neutral', t: "Crazy Diamond." },
      { n: "The pieces slid back together. Every ragged edge found its edge. The tears sealed like they'd never been there, and the page lay whole on the cold stone step in the winter light, and it was her, laughing, head tipped back, eyes squeezed half shut, and the mouth was exactly right. It had always been exactly right." },
      { s: 'josuke', f: 'happy', t: "Looks fine to me, man." },
      { n: "Rohan looked at it for a long time. Nobody said anything. Koichi held his breath like he was watching a bomb disposal." },
      { choose: [
        { t: "It was good the whole time, Rohan.", notes: 3, then: [
          { s: 'rohan', f: 'sad', t: "...It was. I was looking at it wrong. I was looking for a mouth I'd made up." },
          { s: 'rohan', f: 'neutral', t: "This is the one you actually make. At me. It's better. It's much better." }
        ] },
        { t: "Say thank you to Josuke.", notes: 3, then: [
          { s: 'rohan', f: 'serious', t: "..." },
          { s: 'rohan', f: 'neutral', t: "...Thank you, Josuke." },
          { n: "Josuke was so stunned he lost the next four rounds of dice in a row and didn't even accuse anybody of cheating. Koichi wrote the date down in his phone. He said he'd want to know it later, for history." }
        ] }
      ] },
      { n: "Rohan put the drawing inside his sketchbook, flat, between two clean sheets, and didn't say another word about it. But he held her hand for the rest of the afternoon on the steps, under the edge of his jacket where he apparently believed Josuke couldn't see, and rolled the dice left-handed, and lost, and didn't seem to mind." },
      { s: 'josuke', f: 'happy', t: "I can see that, by the way. We can all see that." },
      { s: 'rohan', f: 'serious', t: "Roll the dice, Josuke." }
    ] }
  ],
  // P3's Christmas Eve: on 12/24 evening, if Solar is romancing several people (rank 9+), she picks one; this plays.
  christmas: { place: 'Iwatodai Strip', scene: [
    { n: "Rohan had informed her, several times, that Christmas was a marketing event invented by department stores to sell cake. He had informed her of this on the twenty-second and again on the twenty-third, and had then texted her at four in the afternoon on the twenty-fourth to say that he happened to be on the strip, for reference, and that the light was interesting, and that she could come and look at it if she wanted, which she should." },
    { n: "The strip had put up lights, strings of warm white bulbs zigzagging over the street from shop to shop, and it was snowing, lightly, the flakes catching gold under every bulb on the way down. He was standing under them in the middle of the street with his sketchbook, drawing the lights, people walking around him like water around a rock." },
    { s: 'rohan', f: 'neutral', t: "You're here. Good. Stand there. No, there. Under the third string. The light falls better on you than it does on the shoe shop." },
    { n: "She stood there. He drew her under the lights for twenty minutes with snow collecting on the shoulders of his jacket, and then he closed the sketchbook and said that was enough research, and offered her his arm, stiffly, like a man in a period drama who had only read about arms." },
    { s: 'rohan', f: 'serious', t: "I'm told this is what you do. On the twenty-fourth. You walk. Slowly." },
    { s: 'solar', t: "Who told you that?" },
    { s: 'rohan', f: 'neutral', t: "Koichi. He was very insistent. He made me practice. Josuke watched. It was humiliating for everyone." },
    { place: 'Iwatodai Strip · Bookworms', time: 'Night', music: 'tender' },
    { n: "Bookworms was closed, the old couple gone to their daughter's for Christmas, and Rohan had the key, which he had now mentioned fourteen separate times. He turned on just the one lamp over the back table and the shop was warm and dim and smelled of paper and old wood, the snow drifting past the window." },
    { n: "There was a cake on the back table. A small Christmas cake from the bakery on the corner, strawberries and cream, with a note under the box in the old woman's handwriting. Rohan read it, and went faintly pink, and put it in his pocket without letting her see." },
    { s: 'rohan', f: 'serious', t: "She thinks she's funny. She isn't. Sit down." },
    { n: "He gave her his gift first, because, he said, he'd wrapped it himself and the wrapping was very good and he didn't want it sitting there being looked at. It was very good. The paper was plain brown and he'd drawn on it, all over, in fine black ink, the whole strip in the snow, every shop, every string of lights, and her, small, under the third one." },
    { n: "Inside was a fountain pen. Black, plain, heavy in her hand. The nib, he said, he'd ground down himself, at the back table, over three nights, to suit the way she held a pen too tightly." },
    { s: 'rohan', f: 'neutral', t: "For writing. Whatever you think of. You describe things better than anyone I've ever met and you never write any of it down. It's a waste. It offends me." },
    { s: 'rohan', f: 'serious', t: "Don't show me. ...Show me some of it." },
    { choose: [
      { t: "(Give him a pen box. Black lacquer, his initials on the lid.)", notes: 3, then: [
        { n: "He opened it, and closed it, and opened it again, and ran his thumb along the initials, R.K., the gold leaf a little uneven where the man at the shop had done them by hand." },
        { s: 'rohan', f: 'neutral', t: "...The old one has a dent in the corner. From Josuke. I'll keep that one too. For the dent." },
        { s: 'rohan', f: 'happy', t: "This one's for the pens I like." }
      ] },
      { t: "(Give him a notebook. Every exact thing you've described for him, written down.)", notes: 3, then: [
        { n: "The yakisoba bread was page one. Then the smell of the hospital, the exact sound of the dorm's front door, the way the light hit the water under Moonlight Bridge at six, the way Koichi laughed. Forty pages. He read them in order, without speaking, for a long time." },
        { s: 'rohan', f: 'sad', t: "...You did this for me." },
        { s: 'rohan', f: 'happy', t: "It's material. It's the best material I've ever been given. I'm going to steal all of it." }
      ] },
      { t: "(Give him a green headband. Exactly like his.)", notes: 2, then: [
        { s: 'rohan', f: 'serious', t: "This is identical to mine." },
        { s: 'solar', t: "In case you lose yours in another world." },
        { s: 'rohan', f: 'neutral', t: "...That's absurdly practical. I hate that I'm moved by it." },
        { n: "He folded it into his breast pocket, carefully, like a letter he'd read later." }
      ] }
    ] },
    { n: "They ate the cake with two forks from the shop's tiny kitchen, straight from the box, because Rohan said cutting it would ruin the structure. The lamp hummed. The snow kept coming down outside, past the window, past the shoe shop, past the strings of light." },
    { s: 'rohan', f: 'neutral', t: "I came here for material. That's all I wanted. A world with a green hour and coffins and a tower. It was the best material I'd ever seen." },
    { s: 'rohan', f: 'serious', t: "And then I spent four months drawing a girl in a bookshop. The tower's in two panels. You're in a hundred and five." },
    { choose: [
      { t: "Is that a complaint?", notes: 3, then: [
        { s: 'rohan', f: 'serious', t: "It's a finding." },
        { s: 'rohan', f: 'happy', t: "I've never been wrong about what my best material was. I was wrong this time. It was you. It was always going to be you." }
      ] },
      { t: "You can draw me a hundred and six times, if you want.", notes: 3, then: [
        { s: 'rohan', f: 'neutral', t: "I already have. On the strip. Under the lights. You weren't paying attention." },
        { s: 'rohan', f: 'happy', t: "You never pay attention when I'm drawing you. That's why they're good." }
      ] }
    ] },
    { n: "He had kissed her once already, among a hundred and four drawings, like she was the only thing he'd ever been afraid of getting wrong. He was still careful now, but less. He brushed snow off her hair that had melted ages ago, which was not, she was fairly sure, a real reason to touch her hair, and then he leaned in across the back table and kissed her, slow, tasting of cream and strawberries, the lamp humming over both of them." },
    { s: 'rohan', f: 'neutral', t: "...Merry Christmas. That's what one says. I've been told." },
    { s: 'solar', t: "You've been told it's a marketing event." },
    { s: 'rohan', f: 'happy', t: "I've revised my position. New information." },
    { n: "Later, she found the old woman's note in his jacket pocket when he gave her the jacket to wear home through the snow. She didn't mean to read it. It was very short. It said that the cake was for two, and that in forty years of running a bookshop she had never seen anyone at the back table draw one person so many times, and Merry Christmas to both of them, and to please, for once, use a plate." }
  ] },
  romance: true,
  cast: { koichi: 'Koichi', josuke: 'Josuke', jotaro: 'Jotaro', kuromi: 'Kuromi' },
  threads: { morioh: { name: 'morioh (do not add rohan)', members: ['rohan', 'koichi', 'josuke'] } },
  texts: [
    { id: 'rohan-1a', rank: 1, days: 1, slot: 1, msgs: [
      { from: 'rohan', t: 'I got your number from the old woman at the counter.' },
      { from: 'rohan', t: 'This is for research purposes only. Do not read into it.' }
    ], reply: [
      { t: "I'm reading into it.", notes: 3, then: [{ from: 'rohan', t: 'Unbelievable.' }, { from: 'rohan', t: 'Tuesday. 2pm. Bring your stories about the green hour.' }] },
      { t: 'Hi Rohan.', notes: 2, then: [{ from: 'rohan', t: 'Good. Efficient. I like that.' }] }
    ] },
    { id: 'mor-2', thread: 'morioh', rank: 2, days: 1, msgs: [
      { sys: 'josuke added you to "morioh (do not add rohan)"' },
      { sys: 'koichi added rohan' },
      { from: 'josuke', t: 'KOICHI' },
      { from: 'koichi', t: 'he asked!! he was sad!!' },
      { from: 'rohan', t: 'I was not sad. I was making an observation about the group\'s name.' },
      { from: 'josuke', t: 'anyway hi solar 👋 koichi says ur cool' }
    ], reply: [
      { t: 'Hi Josuke! Hi Koichi! Hi Rohan.', then: [{ from: 'rohan', t: 'Why did I get a period.' }] },
      { t: 'Rohan, were you sad?', then: [{ from: 'rohan', t: 'Leaving.' }, { from: 'koichi', t: 'he didnt leave hes still typing' }] }
    ] },
    { id: 'rohan-3a', rank: 3, days: 1, slot: 1, msgs: [
      { from: 'rohan', t: 'I\'ve been drawing since I got home.' },
      { from: 'rohan', t: 'I can\'t stop thinking about your pages. All those other versions of you.' },
      { from: 'rohan', t: 'This is the best material I\'ve ever read. That is the highest compliment I give.' }
    ], reply: [
      { t: 'Do they end happy?', notes: 3, then: [{ from: 'rohan', t: 'They hadn\'t been finished yet.' }, { from: 'rohan', t: 'I liked that.' }] },
      { t: "That's a lot of me.", notes: 2, then: [{ from: 'rohan', t: 'It\'s exactly the right amount of you.' }] }
    ] },
    { id: 'mor-4', thread: 'morioh', rank: 4, days: 1, msgs: [
      { from: 'josuke', t: 'rohan cheated at dice' },
      { from: 'rohan', t: 'I did not cheat. I was creative with the rules.' },
      { from: 'josuke', t: 'u used a stand' },
      { from: 'rohan', t: 'Creative.' },
      { from: 'koichi', t: 'solar please settle this' }
    ], reply: [
      { t: 'Rohan cheated.', then: [{ from: 'josuke', t: 'THANK U' }, { from: 'rohan', t: 'I will remember this.' }] },
      { t: 'Josuke, your hair looked great today.', then: [{ from: 'josuke', t: '...ok im not even mad anymore' }, { from: 'rohan', t: 'Coward\'s move. Well played.' }] }
    ] },
    { id: 'mor-5long', thread: 'morioh', rank: 5, before: 8, days: 2, rename: 'morioh (rohan got added anyway)', msgs: [
      { from: 'koichi', t: 'um. josuke. you are not going to believe this' },
      { from: 'josuke', t: 'is rohan dead' },
      { from: 'rohan', t: "I'm in this chat, Josuke." },
      { from: 'josuke', t: 'damn' },
      { from: 'koichi', t: 'rohan showed solar a chapter. an UNFINISHED one' },
      { from: 'koichi', t: 'he doesnt show ANYONE unfinished pages. not even his editor' },
      { from: 'josuke', t: 'no way' },
      { from: 'josuke', t: 'solar did he threaten u' },
      { ask: [
        { t: 'He made me say something about it. That was the threat.', notes: 3, then: [
          { from: 'rohan', t: "And you said something worth hearing. Don't ruin it." },
          { from: 'koichi', t: 'hes been in a good mood for two days. its scary' }
        ] },
        { t: 'It was really good, Josuke.', notes: 2, then: [{ from: 'josuke', t: 'ugh. i know. thats the worst part about him' }, { from: 'rohan', t: 'Saving that.' }] },
        { t: 'Only a little.', notes: 1, then: [{ from: 'rohan', t: 'I was extremely polite.' }, { from: 'koichi', t: 'he was not' }] }
      ] },
      { from: 'josuke', t: 'wait so ur IN pink dark boy now' },
      { from: 'josuke', t: 'do u get a stand' },
      { from: 'rohan', t: "She has something better than a Stand. You wouldn't understand. It requires reading." },
      { from: 'josuke', t: 'i can READ rohan' },
      { from: 'rohan', t: 'Name one book.' },
      { from: 'josuke', t: '...' },
      { from: 'koichi', t: 'josuke has read every volume of pink dark boy. he just doesnt want to say it' },
      { from: 'josuke', t: 'KOICHI' },
      { ask: [
        { t: 'Josuke, which volume is your favorite?', notes: 3, then: [
          { from: 'josuke', t: '...' },
          { from: 'josuke', t: 'the one with the train' },
          { from: 'rohan', t: 'Correct answer.' },
          { from: 'rohan', t: "I hate that it's correct." }
        ] },
        { t: 'Leave him alone, Koichi. Everybody has secrets.', notes: 1, then: [{ from: 'josuke', t: 'THANK u' }, { from: 'rohan', t: 'Not from me they don\'t.' }] }
      ] },
      { sys: 'josuke renamed the group "morioh (rohan got added anyway)"' },
      { from: 'rohan', t: 'Change it back.' },
      { from: 'josuke', t: 'no' },
      { from: 'koichi', t: 'i kind of like it' },
      { ask: [
        { t: 'Rohan, you could just leave the chat.', notes: 3, then: [
          { from: 'rohan', t: 'And let the three of you talk about me unsupervised? No.' },
          { from: 'josuke', t: 'he LIKES us' },
          { from: 'rohan', t: 'I like material. You are material. Barely.' }
        ] },
        { t: 'I like it too.', notes: 2, then: [{ from: 'rohan', t: 'Betrayed by my own reference model.' }] }
      ] },
      { from: 'koichi', t: 'dice on the steps saturday?' },
      { from: 'josuke', t: 'only if rohan doesnt get creative' },
      { from: 'rohan', t: 'No promises.' }
    ] },
    { id: 'rohan-6a', rank: 6, days: 1, slot: 1, msgs: [
      { from: 'rohan', t: 'Jotaro said you answered him the way an adult would.' },
      { from: 'rohan', t: 'He doesn\'t say that about anyone. He didn\'t say it about me.' }
    ], reply: [
      { t: 'Jealous?', notes: 3, then: [{ from: 'rohan', t: 'Furious. Goodnight.' }] },
      { t: "I didn't feel very adult.", notes: 3, then: [{ from: 'rohan', t: 'No one does. That\'s the secret. Don\'t tell anyone I told you.' }] }
    ] },
    { id: 'rohan-8a', rank: 8, days: 1, slot: 1, msgs: [
      { from: 'rohan', t: 'I don\'t usually tell anyone about the alley.' },
      { from: 'rohan', t: 'Thank you for not making it into a story.' }
    ], reply: [
      { t: "It's yours. Not mine to tell.", notes: 3, then: [{ from: 'rohan', t: 'Yes. Exactly. That\'s exactly it.' }] },
      { t: 'She sounds like she loved you.', notes: 3, then: [{ from: 'rohan', t: '...I think she did. I was a very small, very annoying child.' }] }
    ] },
    { id: 'rohan-9r', rank: 9, route: 'romance', days: 1, slot: 1, msgs: [
      { from: 'rohan', t: 'I drew you seven times today.' },
      { from: 'rohan', t: 'None of them were good enough. I\'m going to keep trying for the rest of my life.' }
    ], reply: [
      { t: "That's the most romantic thing anyone's ever said to me.", notes: 3, then: [{ from: 'rohan', t: 'Obviously. I\'m a professional.' }] },
      { t: 'Show me tomorrow?', notes: 3, then: [{ from: 'rohan', t: 'Absolutely not.' }, { from: 'rohan', t: '...Maybe one.' }] }
    ] },
    { id: 'rohan-9f', rank: 9, route: 'friend', days: 1, slot: 1, msgs: [
      { from: 'rohan', t: 'I\'ve decided you\'re my muse.' },
      { from: 'rohan', t: 'Platonically. Artistically. You may accept.' }
    ], reply: [
      { t: 'I accept.', notes: 3, then: [{ from: 'rohan', t: 'Good. I had already started drawing you.' }] },
      { t: 'Does Koichi know he has competition?', notes: 2, then: [{ from: 'rohan', t: 'Koichi is a friend. You are material AND a friend. Different category.' }] }
    ] }
  ],
  ranks: [
    { after: '9/8', title: '1: material', place: 'Iwatodai Strip · Bookworms', scene: [
      { n: "Bookworms had a new regular, and he had taken the back table, the good one by the window, and covered it entirely in paper." },
      { n: "He was sharp in every direction. Green headband, earrings shaped like fountain pens, an expensive cropped jacket, a face that looked like it was always about to be disappointed by you. He was drawing the old couple who ran the shop, the husband dozing at the counter, the wife reading, and he was drawing them so fast and so well that Solar stopped in the aisle without meaning to and just watched the pen move." },
      { s: 'rohan', f: 'serious', t: "Don't stand there. You're blocking the light." },
      { s: 'rohan', f: 'surprised', t: "...Actually, no. Stand there. Your shadow's better than the light was." },
      { n: "Rohan Kishibe, he informed her, without looking up. A manga artist. Pink Dark Boy. He said the title like she should have heard of it and was faintly offended she hadn't. He'd woken up three weeks ago on a bench in Iwatodai Station in the middle of the night, surrounded by coffins, and his first thought, he said, had been that it would make an incredible chapter." },
      { s: 'rohan', f: 'neutral', t: "And you. You're one of the ones who walks around during the green hour. I've seen you. Carrying that silver thing." },
      { s: 'rohan', f: 'serious', t: "I want to know everything about it. Everything you know. For reference." },
      { choose: [
        { t: "What do I get?", notes: 3, then: [
          { s: 'rohan', f: 'surprised', t: '...' },
          { s: 'rohan', f: 'happy', t: "Good. A negotiator. I'll draw you. In the next chapter. You'll be the only real person who's ever appeared in Pink Dark Boy." }
        ] },
        { t: "That's kind of a lot to ask a stranger.", notes: 2, then: [{ s: 'rohan', f: 'neutral', t: "Everyone's a stranger until they're material. Sit down." }] }
      ] },
      { n: "She sat down. He drew her while she talked, without asking, which she should have minded and didn't, and when she left two hours later, he hadn't once said thank you, but he'd bought her tea, and he'd drawn her the way she wished she looked, and she wasn't sure he'd done that on purpose." }
    ] },

    { after: '9/22', title: '2: koichi', place: 'Iwatodai Strip · Bookworms', scene: [
      { ifRank: { kuromi: 7 }, then: [
        { n: "There was still glitter in Rohan's pen box. He said he'd left it there to remember his enemies by. Kuromi, when told, said that was the nicest thing a man had ever said about her." }
      ] },
      { n: "There was a small boy at the back table today, very small, with silver hair cut short and a serious, kind, anxious face, and Rohan was looking at him with something Solar had never seen on Rohan's face before. Something like fondness." },
      { register: 'koichi' },
      { s: 'koichi', f: 'happy', t: "You must be Solar! I'm Koichi. Hirose Koichi. I'm so sorry about Rohan." },
      { s: 'rohan', f: 'serious', t: "Why are you apologizing for me?" },
      { s: 'koichi', f: 'serious', t: "Because you never do it yourself!" },
      { n: "Koichi had come through two days before, looking for Rohan, because when someone from his town went missing, he said, the first thing you did was check if they'd been kidnapped by something supernatural, and the second thing you did was check if Rohan had done something weird to it first." },
      { s: 'koichi', f: 'sad', t: "He used to be awful. Like, really awful. He tried to make me into a manga." },
      { s: 'rohan', f: 'happy', t: "That was years ago. And it would have been an excellent manga." },
      { choose: [
        { t: "You two are friends?", notes: 3, then: [
          { s: 'koichi', f: 'happy', t: "Yeah. He's actually my best friend. Don't tell him." },
          { s: 'rohan', f: 'serious', t: "I'm sitting right here, Koichi." }
        ] },
        { t: "Rohan, did you make anyone else into a manga?", notes: 2, then: [{ s: 'rohan', f: 'happy', t: "Define 'make.'" }] }
      ] },
      { n: "Koichi sat with them the rest of the afternoon and told Solar stories about their town, Morioh, a little seaside place where strange things happened all the time, and every story somehow ended with Rohan being insufferable and also, quietly, at the last minute, brave. Rohan pretended not to listen. His pen stopped every time Koichi said something nice about him." }
    ] },

    { after: '10/13', title: '3: heaven\'s door', music: 'mystery', place: 'Iwatodai Strip · Bookworms', scene: [
      { n: "It was Rohan's power. He'd been very careful not to explain it, the way he was careful about all the things he actually cared about. He called it Heaven's Door." },
      { s: 'rohan', f: 'serious', t: "I can read people. Literally. They become books. Their memories, their secrets, everything they've ever done, written down on pages in their face." },
      { s: 'rohan', f: 'neutral', t: "I want to read you. I've wanted to since the day you blocked my light. I'm asking because Koichi says I'm supposed to ask now." },
      { choose: [
        { t: "Okay. Read me.", notes: 3, then: [{ s: 'rohan', f: 'surprised', t: "...Really? Just like that? Most people run." }] },
        { t: "Only if you tell me what you find.", notes: 3, then: [{ s: 'rohan', f: 'happy', t: "Deal. I'd want to anyway. It's the only fun part." }] }
      ] },
      { n: "He drew a single line in the air with his pen, and a little figure appeared, like a cartoon boy in a hat, and touched her forehead, and her face came apart into pages." },
      { n: "It didn't hurt. It felt like being opened, like a window in winter. She could see the pages fluttering at the edge of her vision. He leaned in close and started reading, and his face went very still." },
      { s: 'rohan', f: 'surprised', t: "...This isn't right. This is you, but it isn't. A girl on a sidewalk on the Upper East Side, with a suitcase. She turned down Harvard. Everyone on her campus thinks they already know her." },
      { s: 'rohan', f: 'serious', t: "And here. A different you. A seafood restaurant on the water, in Incheon, at low tide. She knows how to stitch a wound nobody can take to a hospital. There's a wedding date." },
      { s: 'rohan', f: 'serious', t: "And here. Another one. High school. A student council campaign. A group chat that will not stop buzzing." },
      { s: 'rohan', f: 'surprised', t: "You're not one person. You're... a whole shelf." },
      { n: "He turned another page. Then another. And then he frowned, and she felt it, a strange pressure behind her eyes." },
      { s: 'rohan', f: 'serious', t: "There's a boy. In almost every one. I can't read his face. It's smudged. Every time. Like whoever wrote you kept going back and touching it." },
      { s: 'rohan', f: 'surprised', t: "...Hm. I've never seen anything like that. Not once." },
      { n: "He closed her pages carefully, the way you'd close a book you meant to come back to, and her face was her face again, and the bookshop was very quiet, and somewhere in her chest something ached for a reason she couldn't place." },
      { s: 'rohan', f: 'serious', t: "I didn't write anything in you. I want you to know that. I could have. I didn't." }
    ] },

    { after: '10/27', title: '4: josuke', place: 'Iwatodai Strip', scene: [
      { n: "Josuke Higashikata arrived the way he did everything, loudly, with an enormous pompadour that added roughly a foot to his height and a school uniform jacket covered in heart and peace-sign pins." },
      { register: 'josuke' },
      { s: 'josuke', f: 'happy', t: "Koichi! There you are! And, ugh. Rohan." },
      { s: 'rohan', f: 'happy', t: "Josuke. You look exactly as stupid as I remember." },
      { n: "They hated each other. That was immediately clear. They hated each other with a deep, complete, comfortable hatred that had obviously been going on for years and that neither of them would ever give up, because what else would they do with their afternoons." },
      { s: 'josuke', f: 'happy', t: "Solar, right? Koichi says you're cool. Anybody who can stand Rohan for a whole month deserves a medal." },
      { choose: [
        { t: "I like your hair.", notes: 3, then: [
          { s: 'josuke', f: 'happy', t: "...You. I like YOU." },
          { s: 'rohan', f: 'serious', t: "Don't encourage him. If you insult it he loses his mind, so if you praise it he'll never leave." }
        ] },
        { t: "Rohan's not that bad.", notes: 2, then: [{ s: 'josuke', f: 'serious', t: "He's EXACTLY that bad." }] }
      ] },
      { n: "They played dice that evening on the steps outside the shop, a gambling game from Josuke's town, for nothing but pride. Rohan lost four rounds in a row and then won eleven, and Josuke accused him of cheating with his Stand, and Rohan said he'd simply been creative with the rules, and then Josuke's Stand, a big pink-and-teal fighter, punched the dice into dust." },
      { n: "And then it rebuilt them. Exactly as they'd been. Every grain back in place. Solar stared." },
      { s: 'josuke', f: 'neutral', t: "Crazy Diamond. I fix stuff. Not myself, though. Everybody else." },
      { n: "He said it like it was nothing. Rohan, for the first time all night, said nothing at all." }
    ] },

    { after: '11/10', title: '5: pink dark boy', place: 'Iwatodai Strip · Bookworms', scene: [
      { n: "Rohan showed her the chapter. It wasn't finished. He never showed anyone things that weren't finished, Koichi said later, in a hushed voice, like he was describing a solar eclipse." },
      { n: "There she was. A girl in a red armband on a rooftop under a green moon, the city full of coffins below her, a silver gun pressed to her own temple, a great figure made of light and glass rising out of her back. Every line exact. Every shadow right. Better than she was. Exactly like her." },
      { s: 'rohan', f: 'serious', t: "Well? Say something. I hate it when people don't say anything." },
      { choose: [
        { t: "It's beautiful. I don't know what else to say.", notes: 3, then: [{ s: 'rohan', f: 'happy', t: "...That's acceptable." }] },
        { t: "Why do you draw manga, Rohan?", notes: 3, then: [
          { s: 'rohan', f: 'serious', t: "Because I want people to read it. That's all. Not for money. Not to be famous." },
          { s: 'rohan', f: 'happy', t: "I want someone, somewhere, to turn the page and feel something they didn't before. That's the whole reason." }
        ] }
      ] },
      { s: 'rohan', f: 'serious', t: "Most people think art is about imagination. It isn't. It's about reality. You have to go and find the real thing and look at it until it gives up its secrets." },
      { s: 'rohan', f: 'serious', t: "I licked a spider once. To know what it tasted like. For a chapter." },
      { s: 'solar', t: "...Rohan." },
      { s: 'rohan', f: 'neutral', t: "It tasted like nothing. Very disappointing. Accurate, though." },
      { n: "She laughed so hard she had to hold onto the table. He looked deeply offended for a full minute. Then he smiled, very slightly, at his drawing, and started inking her eyes." }
    ] },

    { after: '11/24', title: '6: jotaro', place: 'Port Island · Pier', scene: [
      { n: "There was a very tall man standing at the end of the pier in a long white coat and a white hat, looking at the water, and Rohan stopped walking so suddenly that Solar walked into his back." },
      { register: 'jotaro' },
      { s: 'rohan', f: 'surprised', t: "...Jotaro-san." },
      { s: 'jotaro', f: 'neutral', t: "Rohan. Koichi said you were here." },
      { n: "Jotaro Kujo was enormous, and stoic, and spoke the way glaciers moved. He'd come through, he said, because a door had opened somewhere in his hotel in Morioh and he had walked through it to see what was on the other side, which was, apparently, a thing he just did. He was a marine biologist. He'd been looking at the starfish under the pier." },
      { s: 'jotaro', f: 'neutral', t: "You're the girl with the Persona." },
      { s: 'jotaro', f: 'serious', t: "This hour. This tower. The moon. You're fighting something that wants to end the world. And you're a high school student." },
      { n: "He wasn't asking. He was looking at her the way people looked at things that should not be on anyone still in school and somehow always were." },
      { choose: [
        { t: "Somebody has to.", notes: 3, then: [
          { s: 'jotaro', f: 'sad', t: '...' },
          { s: 'jotaro', f: 'sad', t: "Yeah. I said that too. When I was your age." },
          { s: 'jotaro', f: 'neutral', t: "Yare yare. ...Be careful." }
        ] },
        { t: "I'm not doing it alone.", notes: 3, then: [{ s: 'jotaro', f: 'happy', t: "Good. Don't. That's the only way any of us made it out." }] }
      ] },
      { n: "He left without saying goodbye. Rohan watched him go for a long time. He said, very quietly, that Jotaro was the only person in the world he'd never once wanted to read, because he already knew he'd find something heavy in there, something Jotaro had carried by himself for a very long time." },
      { s: 'rohan', f: 'sad', t: "I'd rather draw him. Drawings are kinder. You get to leave things out." }
    ] },

    { after: '12/3', title: '7: tartarus', place: 'Tartarus · The Dark Hour', scene: [
      { n: "Rohan had absolutely insisted. He needed, he said, to see it with his own eyes. Reference. Mitsuru had looked at him for a long second and said if he died she was not responsible. Rohan said that was completely fair." },
      { n: "He sketched the whole way up. Checkerboard floors, bloody walls, staircases that moved when you weren't watching them. He sketched the shadows. He sketched Junpei falling down. He was having, by any measure, the time of his life." },
      { n: "And then a shadow got past her. A huge, black, laughing thing with a mask for a face, and it went straight for him, and Solar was too far away, and she screamed his name." },
      { s: 'rohan', f: 'serious', t: "Heaven's Door." },
      { n: "The shadow froze. Its mask split into pages, black pages, written in a language that shouldn't exist. Rohan, perfectly calm, uncapped his pen and wrote one line across the top." },
      { s: 'rohan', f: 'neutral', t: "'Cannot attack Rohan Kishibe or anyone standing with him.'" },
      { n: "The shadow stopped. It turned around, confused, and wandered off into the dark, and Rohan capped his pen and went back to sketching." },
      { choose: [
        { t: "You could have died.", notes: 3, then: [
          { s: 'rohan', f: 'happy', t: "I could have. Then I wouldn't have gotten this drawing. Look at the angle. Look at it." },
          { s: 'rohan', f: 'surprised', t: "...You screamed my name. I've never had anyone scream my name like that. I'm drawing that too." }
        ] },
        { t: "Okay, that was incredible.", notes: 3, then: [{ s: 'rohan', f: 'happy', t: "Obviously. Write it down. It'll be in the next chapter anyway." }] }
      ] }
    ] },

    { after: '12/15', title: '8: the alley', music: 'tender', place: 'Iwatodai Strip · Back Alley', scene: [
      { n: "There was an alley behind the Iwatodai strip that Rohan would not walk down. He'd walk around the whole block to avoid it. Solar had noticed weeks ago and had never asked. Tonight, in the cold, he stopped at the mouth of it and stood there." },
      { s: 'rohan', f: 'sad', t: "There's an alley in my town too. A ghost lives in it. A girl called Reimi." },
      { s: 'rohan', f: 'sad', t: "When I was four, a man broke into the house I was staying in. Reimi was babysitting me. She pushed me out the window. She saved my life. She didn't save her own." },
      { s: 'rohan', f: 'serious', t: "I didn't remember. Not until I was twenty. My own memory just... closed that page. Kept it from me." },
      { s: 'rohan', f: 'sad', t: "Imagine that. I can read anyone's life except the part of my own that mattered most." },
      { n: "It was cold, the kind of cold that got into your hands first. She thought about the dorm kitchen, the way grief closed things up, the way you could walk past a room every day and never once go in." },
      { choose: [
        { t: "She'd be proud of you, I think.", notes: 3, then: [{ s: 'rohan', f: 'sad', t: "...She'd tell me to be nicer to Josuke. She'd be right. I won't do it." }] },
        { t: "(Walk down the alley with him.)", notes: 3, then: [
          { n: "She took his hand, which he allowed, and walked into the alley, which he allowed, and they walked all the way to the other end of it together, slowly, and didn't look back, and when they came out into the light on the other side he let out a breath he'd been holding for years." },
          { s: 'rohan', f: 'sad', t: "...That was the first time I've done that since I was four." }
        ] }
      ] },
      { n: "He never told anyone else. She never made it into a story. She thought that was the most important thing she'd ever been trusted with, and she was right." }
    ] },

    { after: '12/22', title: '9: what are we', place: 'Iwatodai Strip · Bookworms', scene: [
      { n: "The shop was closed. The old couple had given Rohan a key, which was a thing he'd mentioned eleven separate times. He was at the back table, and there were drawings of her covering the whole surface, dozens of them, from every day since September." },
      { s: 'rohan', f: 'neutral', t: "I've drawn you a hundred and four times. I counted." },
      { s: 'rohan', f: 'serious', t: "I've never drawn anyone a hundred and four times. Not Koichi. Not myself." },
      { s: 'rohan', f: 'serious', t: "I need to know what this is. I'm a researcher. I need accurate information." },
      { route: [
        { t: "I'm in love with you, Rohan.", route: 'romance', notes: 3, then: [
          { s: 'rohan', f: 'surprised', t: '...' },
          { s: 'rohan', f: 'happy', t: "...That's accurate. That's correct information. Yes." },
          { n: "He kissed her among the drawings, very carefully, like she was the only thing in the world he'd ever been afraid to get wrong, and afterward he immediately drew her face, and wouldn't show her, and said it was the hundred and fifth and the best." }
        ] },
        { t: "You're my best friend, Rohan. My favorite artist.", route: 'friend', notes: 3, then: [
          { s: 'rohan', f: 'happy', t: "...Favorite artist. Obviously. There's no competition." },
          { s: 'rohan', f: 'surprised', t: "Best friend, though. That's... new information. I'll need time to draw it." }
        ] }
      ] }
    ] },

    { after: '12/30', title: '10: the last page', place: 'Iwatodai Strip · Bookworms', scene: [
      { n: "He gave her a manga. One volume, hand-bound, with a cover he'd painted himself. A girl in a red armband with headphones around her neck, under a green moon. The title was just her name." },
      { s: 'rohan', f: 'neutral', t: "It's yours. Every page. Every time I drew you. In order." },
      { n: "She turned the pages slowly, there in the closed shop with the snow coming down outside. The dorm, the shrine, the pier, the rooftops. Kuromi drawing on Junpei. Koichi laughing. Josuke's hair. The alley. All of it. Her year, here, in this world, drawn by someone who had looked at it until it gave up its secrets." },
      { n: "The last page was blank." },
      { s: 'rohan', f: 'serious', t: "That's yours too. I can't write that page. Nobody can. I could read your whole life and I'd still never know what you're going to do next." },
      { s: 'rohan', f: 'happy', t: "That's the best thing about you. You don't let anyone write you. Not even me." },
      { ifRoute: 'friend', then: [
        { choose: [
          { t: "Then draw me again next year.", notes: 3, then: [{ s: 'rohan', f: 'happy', t: "I'll draw you every year. I'll draw you when you're old and boring. I'll still find something." }] },
          { t: "Thank you, Rohan. Really.", notes: 3, then: [{ s: 'rohan', f: 'neutral', t: "...Don't thank me. Just let me keep drawing you. That's enough." }] }
        ] },
        { n: "Koichi and Josuke came by with snacks and fought over the heater. Rohan insulted Josuke's hair once, just to start a fight, and Josuke rebuilt the heater after he punched it, and Solar sat in the middle of it with her manga in her lap, and drew, on the last page, in pencil, very small, the three of them." }
      ] },
      { ifRoute: 'romance', then: [
        { s: 'rohan', f: 'serious', t: "But... if you wanted. I could write one line. In you. Only if you said yes." },
        { choose: [
          { t: "(Hand him the pen.)", notes: 3, then: [
            { n: "He opened her, gently, the pages fluttering. He wrote one line, very carefully, in his neat, exact hand. When she was herself again she asked him what it said, and he wouldn't tell her. He'd only say it wasn't a command. It was a fact." },
            { s: 'rohan', f: 'happy', t: "It says what I already know. That's all. You can read it someday. If you ask nicely." }
          ] },
          { t: "Write it on the last page instead.", notes: 3, then: [
            { s: 'rohan', f: 'surprised', t: '...' },
            { s: 'rohan', f: 'happy', t: "Yes. That's better. That's much better. You're a better writer than me." },
            { n: "He wrote one word on the blank page. It said: Together. And then, underneath it, in smaller letters, so she almost missed it: to be continued." }
          ] }
        ] }
      ] }
    ] }
  ]
});
