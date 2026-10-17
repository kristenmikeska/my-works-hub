/* Leon S. Kennedy · XI Strength. Arrives 9/5. Format notes are at the top of akihiko.js.
   Rank 3 sits the day after Shinjiro's death (10/4), so it's written quietly; rank 6 is the Evoker. */
FemcSocial.define({
  id: 'leon', name: 'Leon S. Kennedy', short: 'Leon', arcana: 'Strength', numeral: 'XI', from: 'Resident Evil 4',
  arrives: '9/5',
  home: { place: 'Paulownia Mall · Police Box', slot: 1, days: [1, 2, 4, 5], hint: 'Evenings on Mondays, Tuesdays, Thursdays and Fridays, leaning on the counter of Officer Kurosawa\'s police box.' },
  approach: "A man in a fur-collared leather jacket is leaning on Officer Kurosawa's counter, very politely losing an argument.",
  invite: {
    ask: ["You free?", "Kurosawa is ignoring me again. Come keep me company.", "Got time to grab food?", "Police box. Kurosawa won't talk to me. Come be a buffer.", "Found a ramen place that doesn't ask questions. You in?", "Mall's quiet. Too quiet. Want to walk?", "Need a translator. Long story.", "Kurosawa says I'm loitering. Come loiter with me."],
    ok: ["Copy that.", "Good. Police box.", "Roger. I'll be the one in the jacket."],
    no: ["Roger. Another time.", "Copy. Stay safe.", "Understood. Rain check."]
  },
  hangouts: [
    [
      { n: "Evening, the mall lights coming on one by one, and Leon was at the police box again, leaning on Officer Kurosawa's counter with his chin in his hand, reading the wanted posters on the wall with the expression of a man reviewing someone else's work." },
      { s: 'leon', f: 'neutral', t: "This guy's not in Iwatodai. Wrong shoes for it." },
      { s: 'kurosawa', f: 'neutral', t: "Nobody asked you." },
      { choose: [
        { t: "What shoes should he be wearing?", notes: 3, then: [
          { s: 'leon', f: 'happy', t: "Something he can run in. Look at his face. That's a guy who runs." },
          { n: "Kurosawa, very slowly, without comment, looked at the poster. Then he wrote something down." }
        ] },
        { t: "Leon, let the man do his job.", notes: 2, then: [{ s: 'leon', f: 'neutral', t: "I am letting him. I'm just also doing it." }] },
        { t: "(Read the posters too.)", notes: 1, then: [{ n: "She read them. They were mostly about bicycle theft. Leon nodded at every one like they were international fugitives." }] }
      ] },
      { n: "Kurosawa didn't thank him. But when they left there were two cans of hot tea on the counter that hadn't been there before, and nobody said anything about them, which was apparently how things were done at the police box." }
    ],
    [
      { n: "Leon's idea of dinner was a convenience-store bento eaten standing up beside the police box, facing the mall, back to the wall. He did it every night, Kurosawa said. Like a horse." },
      { s: 'leon', f: 'neutral', t: "Habit. You always face the door." },
      { s: 'solar', t: "There's no door. It's a mall." },
      { s: 'leon', f: 'neutral', t: "Everything's a door if you're unlucky enough." },
      { choose: [
        { t: "(Sit on the bench and pat the spot beside you.)", notes: 3, then: [{ n: "He looked at the bench. Then at the mall. Then at her. Then he sat, and kept his eyes on the escalators the whole time, and ate the rest of his bento like a normal human being, and admitted at the end that his knees had been killing him." }] },
        { t: "(Stand beside him and face the mall too.)", notes: 2, then: [
          { n: "She put her back to the wall next to his and ate her rice ball facing the mall. He glanced sideways at her, and the corner of his mouth went up." },
          { s: 'leon', f: 'happy', t: "Look at you. Natural." }
        ] },
        { t: "That's the saddest thing I've ever heard.", notes: 1, then: [
          { s: 'leon', f: 'neutral', t: "You should hear the rest of my résumé." },
          { n: "He said it lightly. She didn't push." }
        ] }
      ] },
      { n: "A kid ran past with a balloon and Leon tracked him all the way to the escalator without moving his head, then went back to his pickled plum like nothing had happened. It was a strange way to live, she thought, and a lonely one, and he was weirdly good company inside it." }
    ],
    [
      { n: "Ashley was sitting on the police box counter again, which Kurosawa had stopped fighting, eating a crepe the size of her head and dripping strawberry sauce onto the incident log." },
      { s: 'ashley', f: 'happy', t: "Solar! Tell Leon the photo sticker booth is not a security risk." },
      { s: 'leon', f: 'serious', t: "It's a small enclosed space with one exit and a curtain." },
      { s: 'ashley', f: 'serious', t: "It has GLITTER FRAMES, Leon." },
      { choose: [
        { t: "(Drag him into the booth.)", notes: 3, then: [
          { n: "It took both of them. The booth was very small and Leon was not, and there were three of them in it and a great many elbows. The machine counted down in a cheerful voice. Ashley made a peace sign. Solar made a face. Leon, at the last second, out of pure reflex, checked the exit." },
          { s: 'ashley', f: 'happy', t: "Oh my god. He's looking at the curtain in every single one." },
          { s: 'leon', f: 'happy', t: "Somebody has to." }
        ] },
        { t: "Leon can stand guard outside the curtain.", notes: 2, then: [
          { s: 'leon', f: 'neutral', t: "...That's acceptable." },
          { s: 'ashley', f: 'serious', t: "NO. He has to be IN it. That's the whole point." }
        ] },
        { t: "It's a little bit of a security risk.", notes: 1, then: [
          { s: 'leon', f: 'happy', t: "Thank you." },
          { s: 'ashley', f: 'serious', t: "TRAITOR." }
        ] }
      ] },
      { n: "Ashley stuck one of the stickers on the police box counter, right next to the incident log. Kurosawa saw it. He left it there." }
    ],
    [
      { n: "Leon had decided to learn Japanese. His method was to point at things on Officer Kurosawa's desk and say their names in English, loudly, until Kurosawa gave up and said them in Japanese." },
      { s: 'leon', f: 'neutral', t: "Stapler." },
      { s: 'kurosawa', f: 'sad', t: "...Hotchkiss." },
      { s: 'leon', f: 'surprised', t: "That's not Japanese. That's a guy's name." },
      { choose: [
        { t: "(Teach him how to order ramen instead.)", notes: 3, then: [
          { n: "She wrote it out for him on the back of a lost-property form, phonetically, and made him say it back three times. He got it on the third try, very seriously, with an accent that made Kurosawa turn around in his chair." },
          { s: 'leon', f: 'happy', t: "Okay. That's the only sentence I need. I'm fluent." }
        ] },
        { t: "It really is Hotchkiss. Long story.", notes: 2, then: [{ s: 'leon', f: 'neutral', t: "This country's going to get me before the monsters do." }] },
        { t: "Ask him how to say 'go home.'", notes: 1, then: [{ s: 'kurosawa', f: 'happy', t: "I'll teach him that one for free." }] }
      ] },
      { n: "He practiced it under his breath the whole way to the noodle stand. When they got there he said it perfectly, and the cook nodded and served him, and Leon looked prouder than she'd ever seen him look about anything." }
    ],
    [
      { n: "There was a little girl at the police box when Solar got there, maybe five, in a yellow raincoat, sitting on the counter very calmly and holding on to Leon's sleeve. She'd lost her father somewhere between the shoe store and the fountain. Kurosawa was on the radio. Leon was on duty." },
      { s: 'leon', f: 'serious', t: "Okay. Here's the situation. Your dad's out there. We're in here. We hold this position till he shows. Copy?" },
      { n: "The girl, who did not speak a word of English, nodded seriously, like she'd understood all of it." },
      { choose: [
        { t: "(Buy her a juice from the vending machine.)", notes: 3, then: [
          { n: "She came back with an apple juice. Leon stuck the straw in and handed it over with the gravity of a man passing out rations, and the girl drank it holding his sleeve with her other hand, and never once let go." },
          { s: 'leon', f: 'happy', t: "Good call. Morale's important." }
        ] },
        { t: "(Translate for her.)", notes: 2, then: [{ n: "Solar translated. The girl listened, nodded again, and saluted. Leon saluted back without a flicker of irony." }] },
        { t: "You're good with kids.", notes: 1, then: [{ s: 'leon', f: 'neutral', t: "Kids are easy. They complain less than Ashley." }] }
      ] },
      { n: "Her father came running across the mall twenty minutes later, white as paper, and scooped her up, and bowed to Kurosawa four times and to Leon five. Leon told him it was nothing. Then he stood at the counter for a long while after they'd gone, looking at the place where they'd disappeared into the crowd, with an expression Solar wouldn't have known how to name." }
    ]
  ],
  // After rank MAX on the romance route, each visit plays the next date in order (then they rotate). January, before he goes home.
  dates: [
    { title: 'the second question', place: 'Hagakure Ramen', music: 'city', scene: [
      { n: "Leon had been practicing. She could tell because he'd been doing it under his breath the whole walk from the station, the one sentence he'd been collecting since September, which meant, roughly, one ramen please, and which he had learned in four slightly different versions from Officer Kurosawa, Ashley, Solar, and a laminated card taped to a noodle stand. Every few steps his lips moved and his eyebrows came down, like he was defusing something." },
      { s: 'leon', f: 'serious', t: "I'm doing it. Don't help me. Whatever happens in there, you don't help me." },
      { s: 'solar', t: "It's ramen, Leon." },
      { s: 'leon', f: 'serious', t: "It's a mission. I've been briefed." },
      { n: "Hagakure was hot and loud and smelled of pork bone and sesame and wet wool, the windows fogged solid white, and the man behind the counter looked up when the door opened and saw a tall American in a fur-collared jacket stop dead on the threshold and visibly count the exits." },
      { n: "Leon sat. Leon cleared his throat. Leon said the sentence, slowly, with an accent that made a salaryman at the far end of the counter put down his chopsticks." },
      { n: "It was perfect. The man nodded. Then the man asked him something. Quick, friendly, a completely ordinary follow-up about the firmness of the noodles and the richness of the broth, the kind of question every person in Iwatodai had answered a thousand times without thinking." },
      { n: "Leon's face did not move. Solar watched it not move. She had seen this man run up the arm of a shadow the size of a house and kick it in the face, and she had never once seen him look like this, a man who had prepared for every contingency except the second question." },
      { s: 'leon', f: 'surprised', t: "..." },
      { s: 'leon', f: 'neutral', t: "...Yes." },
      { choose: [
        { t: "(Don't help him. He said not to.)", notes: 3, then: [
          { n: "She didn't help him. She sat on her hands, which was hard, and watched, which was harder, while the man waited and Leon held his ground with the stillness of someone who'd talked down worse." },
          { s: 'leon', f: 'serious', t: "...Normal." },
          { n: "It was, by enormous good luck, one of the right answers. The man nodded and turned to his pots, and Leon let out a breath he'd apparently been holding since the station, and didn't look at her, and the back of his neck went red under his hair." }
        ] },
        { t: "(Lean over and whisper the answer.)", notes: 2, then: [
          { n: "She leaned over and whispered it, and he repeated it word for word, completely flat, and the man nodded and turned to his pots, and Leon turned and looked at her." },
          { s: 'leon', f: 'happy', t: "That's a violation of mission parameters." },
          { s: 'solar', t: "You're welcome." },
          { s: 'leon', f: 'happy', t: "...Thank you." }
        ] }
      ] },
      { n: "The ramen came. He ate it the way he ate everything, fast and efficient, but he did it sitting down, at a counter, with his back to the door, which Solar noticed and decided not to mention. Somewhere between the egg and the bottom of the bowl he stopped watching the door in the reflection of the napkin dispenser. She didn't mention that either." },
      { s: 'leon', f: 'neutral', t: "Spain didn't have this. Spain had a guy who sold me a rocket launcher out of his coat." },
      { s: 'leon', f: 'happy', t: "...This is better. Don't tell him I said that. He has feelings. I think." },
      { choose: [
        { t: "Next time, order for me too.", notes: 3, then: [
          { s: 'leon', f: 'serious', t: "Two of them. That's a different sentence." },
          { s: 'leon', f: 'happy', t: "...I'll learn it. Give me a week. I learn fast when it's important." }
        ] },
        { t: "You did good, rookie.", notes: 3, then: [
          { s: 'leon', f: 'flustered', t: "Don't call me rookie in front of the ramen guy." },
          { n: "The ramen guy, who did not speak a word of English, looked at Leon, and then at her, and gave him a thumbs-up across the counter. Leon gave one back. It was, Solar was fairly sure, the only emoji he had ever needed." }
        ] }
      ] }
    ] },
    { title: 'thumb side', place: 'Gekkoukan High · Boxing Club', music: 'joy', scene: [
      { n: "Akihiko had been asking Leon to teach him the kick since November, in the way Akihiko asked for things, which was constantly, and Leon had finally said yes, on the condition that Solar came too and learned something useful instead of something showy." },
      { s: 'leon', f: 'serious', t: "The kick's showy. You don't need the kick. You need to get out of a grip and run." },
      { s: 'akihiko', f: 'happy', t: "I need the kick." },
      { s: 'leon', f: 'neutral', t: "You'll get the kick. Hold the bag." },
      { n: "The boxing club after hours smelled the way Akihiko always swore it would, tape and rubber mats and old effort, and the lights over the ring buzzed, and Leon stood in the middle of the mats in a T-shirt with his jacket folded very precisely on a bench, which made him look younger, and somehow more tired." },
      { s: 'leon', f: 'serious', t: "Okay. Grab my wrist. Like you mean it. Like you don't want me to leave." },
      { n: "She grabbed his wrist. He turned it, once, toward her thumb, and was out before she understood what had happened, his hand just gone from hers like water." },
      { s: 'leon', f: 'neutral', t: "Thumb's the weak side. Always. Doesn't matter how big they are. Your turn." },
      { n: "He took her wrist. His grip was careful, she noticed. Firm enough to be real and not one ounce more, like he'd worked it out in advance, and his eyes were on her face the whole time and not on her arm, checking." },
      { choose: [
        { t: "(Turn toward the thumb. Get out.)", notes: 3, then: [
          { n: "She turned toward the thumb. It didn't work the first time, or the second. The third time she felt it, the give, and she was out, and stumbled back a step from the surprise of it." },
          { s: 'leon', f: 'happy', t: "There it is. Again. Faster." },
          { n: "They did it until she could do it without thinking, which was, he said, the whole point. You don't think in a grip. You've already thought." }
        ] },
        { t: "What if I don't want to get out?", notes: 2, then: [
          { s: 'leon', f: 'flustered', t: "..." },
          { s: 'leon', f: 'flustered', t: "...Then that's a different lesson, and Akihiko's in the room." },
          { s: 'akihiko', f: 'surprised', t: "I'm in the room." }
        ] }
      ] },
      { n: "Then Akihiko got his kick. It took an hour. Leon broke it into pieces, slowly, the pivot and the chamber and the snap, and Akihiko threw it at the heavy bag about two hundred times with the joy of a man who had found religion, and at the end of the hour he threw one that rattled the chain, and turned around with his whole face shining." },
      { s: 'akihiko', f: 'happy', t: "Did you see that? Solar, did you SEE that?" },
      { s: 'leon', f: 'happy', t: "...Not bad. Don't do it to anything with a face." },
      { n: "Akihiko went to shower, and came back to announce that he was running home, and ran home. The club was very quiet after that. Leon sat on the edge of the ring with a towel around his neck and his elbows on his knees, and she sat down beside him, and their shoulders were almost touching, and then they were." },
      { s: 'leon', f: 'sad', t: "I taught Ashley that. The wrist. She was terrible at it. Got out of a grip exactly once when it counted." },
      { s: 'leon', f: 'serious', t: "Once is all it takes. I need you to remember it after I'm gone. Promise me." },
      { choose: [
        { t: "I promise.", notes: 3, then: [
          { s: 'leon', f: 'neutral', t: "Okay." },
          { n: "He nodded, once, like he was filing it somewhere. Then he took her hand, not a grip, just a hand, and held it on the canvas between them, and she didn't get out. She didn't want to. He seemed to understand that without having to ask." }
        ] },
        { t: "You could just stay and keep reminding me.", notes: 3, then: [
          { s: 'leon', f: 'sad', t: "...I'd like that. You know I would." },
          { s: 'leon', f: 'neutral', t: "Promise me anyway. Humor me." },
          { n: "She promised. He held on to her hand afterward a while longer than the promise needed, looking at the empty ring, saying nothing." }
        ] }
      ] }
    ] },
    { title: 'one song', place: 'Paulownia Mall · Karaoke', scene: [
      { n: "Ashley had booked a karaoke room on the second floor of the mall, for three, for two hours, with money whose origins nobody was prepared to discuss, and then at the door she had looked at her phone, gasped very loudly, and announced that there was a shoe emergency and that she would be back in exactly two hours and not one minute before." },
      { s: 'ashley', f: 'happy', t: "Have FUN. Leon, you have to SING. Solar, make him. Bye!" },
      { s: 'solar', t: "She did that on purpose." },
      { s: 'leon', f: 'neutral', t: "She does everything on purpose. That's the scary part." },
      { n: "The room was tiny and dark and purple, with a vinyl couch and a tambourine and a television the size of a door playing a music video of a girl running through a field in slow motion. Leon checked the room. Of course he did. He stood in the middle of it and turned a full circle, the door, the vent, the window that wasn't a window, only a poster of a beach, and then sat at the very end of the couch nearest the exit with his arms folded." },
      { s: 'leon', f: 'serious', t: "I'm security. Security doesn't sing." },
      { s: 'solar', t: "You know one song. Ashley told me." },
      { s: 'leon', f: 'flustered', t: "Ashley talks too much." },
      { choose: [
        { t: "(Sing first. Badly. To make it fair.)", notes: 3, then: [
          { n: "She sang first. She picked the most dramatic thing in the book, a power ballad with a key change, and sang it badly and with total commitment, standing up, one hand pressed to her heart, and somewhere around the key change she heard him laugh, the real one, low and surprised, and when she sat down he was looking at her like she'd done something brave." },
          { s: 'leon', f: 'happy', t: "...Okay. Okay. That's fair. That's a fair trade." }
        ] },
        { t: "(Hand him the microphone. Say nothing.)", notes: 2, then: [
          { n: "She held out the microphone and said nothing. He looked at it the way he'd looked into the merchant's coat in the alley, like it was a terrible idea he was going to go along with anyway." }
        ] }
      ] },
      { n: "He found it in the book in about four seconds, which told her he'd known exactly where it was all along. He didn't stand. He sat on the edge of the couch with his elbows on his knees and the microphone loose in both hands, and when the music started, something slow and old, a guitar and not much else, he didn't look at the screen once. He knew all the words." },
      { n: "His voice was low and rough and out of practice, and he wasn't good, exactly, and it didn't matter. He sang it the way he did everything that counted, carefully, like he was carrying something full to the brim across a room, and she sat there in the purple dark with the tambourine forgotten in her lap and her face going hot, and had no idea where to put her hands." },
      { n: "When it ended there was a silence. The screen went back to the girl in the field." },
      { s: 'leon', f: 'flustered', t: "...It was on the radio a lot. Before. I don't know why it stuck. Most things from before didn't." },
      { choose: [
        { t: "Sing it again.", notes: 3, then: [
          { s: 'leon', f: 'surprised', t: "..." },
          { s: 'leon', f: 'happy', t: "...Once. Then you're doing the key change one again. That's the deal." }
        ] },
        { t: "(Move closer on the couch.)", notes: 3, then: [
          { n: "She moved closer. Not much. Enough that her shoulder was against his arm, and after a second his arm came up along the back of the couch behind her and stayed there, and he picked the next song without letting go of the microphone, or of her." }
        ] }
      ] },
      { n: "Ashley came back in exactly two hours and not one minute before, with no shoes, and took one look at the two of them on the couch, at Leon's arm and the tambourine on the floor and Solar's red face, and said yes, very quietly, for Ashley, and then made Leon sing it a third time just for her. He did." }
    ] },
    { title: 'kitchen duty', place: 'Iwatodai Dorm · Kitchen', music: 'tender', scene: [
      { n: "Solar had been feeding Leon since September. Rice balls at the police box. Konbini bentos on the bench by the fountain. A crepe, once, that Ashley had abandoned halfway. He'd kept count, it turned out. He said so, standing in the dorm kitchen in a T-shirt with his sleeves pushed up, like he was settling an outstanding debt." },
      { s: 'leon', f: 'serious', t: "Thirty-eight meals. I'm going to square one of them. Sit down." },
      { n: "He'd asked Akihiko first, before he touched a thing. She knew because she'd seen them in the doorway that afternoon, Akihiko pointing at cupboards, quietly, this one, that one, the big pot lives there, and Leon nodding at each one like he was memorizing a building plan. The kitchen had been kept a certain way since October. Everybody in the dorm knew it. Nobody had ever said so out loud." },
      { n: "He cooked like he fought, in short efficient movements with nothing wasted, and he wiped down every surface as soon as he was done with it, and every time he used something, the pan, the whisk, the ladle, he washed it and dried it and put it back exactly where Akihiko had shown him, exactly, turned the way it had been turned." },
      { s: 'leon', f: 'neutral', t: "It's the only thing I can make. Don't get excited." },
      { n: "Pancakes. At eight at night. Stacked, slightly uneven, with butter and a bottle of syrup from the import shop at the mall that he'd carried home like evidence. The kitchen smelled sweet and warm, like somebody's Saturday morning a very long way from here." },
      { choose: [
        { t: "Where did you learn to make pancakes?", notes: 2, then: [
          { s: 'leon', f: 'sad', t: "Diner. Back home. Watched the cook through the window a lot of nights." },
          { s: 'leon', f: 'happy', t: "Never actually made them till tonight. Don't tell anyone. First op, no rehearsal." }
        ] },
        { t: "(Steal one before he sits down.)", notes: 3, then: [
          { n: "She ate one standing up, off the plate, with her fingers, before he'd even turned off the stove. He turned around and caught her, and his whole face changed, the tired lines going soft, like she'd answered a question he'd been afraid to ask." },
          { s: 'leon', f: 'happy', t: "...Good?" },
          { s: 'solar', t: "Really good." },
          { s: 'leon', f: 'flustered', t: "Okay. Okay. Sit down before I make a speech." }
        ] }
      ] },
      { n: "They ate at the counter side by side. Akihiko came in halfway through, looked at the pancakes, and then at the kitchen, at the ladle back on its hook and the pan back in its cupboard, and stood there a second longer than he needed to." },
      { s: 'akihiko', f: 'sad', t: "...You put everything back." },
      { s: 'leon', f: 'neutral', t: "You told me where it goes." },
      { n: "Akihiko nodded, once. He took a pancake off the stack with his fingers and ate it standing up, and said it could use protein, and left. Neither of them said anything for a while after that. Leon's hand found hers on the counter, beside the syrup bottle, and stayed." },
      { s: 'leon', f: 'sad', t: "I don't get to do this back home. Sit down. Eat something somebody made on purpose. There's always a plane." },
      { s: 'leon', f: 'serious', t: "End of the month there's a plane again. Some kind of plane. I don't know what it looks like this time." },
      { choose: [
        { t: "Then we do this every night until it comes.", notes: 3, then: [
          { s: 'leon', f: 'happy', t: "That's a lot of pancakes." },
          { s: 'solar', t: "Learn a second thing." },
          { s: 'leon', f: 'flustered', t: "...I'll learn a second thing. Give me a day." }
        ] },
        { t: "(Lean your head on his shoulder.)", notes: 3, then: [
          { n: "She leaned her head on his shoulder. He went still, the way he always did, a man who'd spent years needing to know exactly what was touching him, and then he didn't. He let his cheek rest against her hair and breathed out, and the kitchen ticked and hummed around them, everything in its place." }
        ] }
      ] },
      { n: "He washed the last plate himself. He dried it and put it on the shelf where it lived, and before he turned off the light he stood in the doorway a moment and looked back at the kitchen, all of it clean and put away, the way you'd look at a room you'd been trusted with." }
    ] }
  ],
  // P3's Christmas Eve: two days after rank 9 (12/22), before rank 10 (12/29).
  christmas: { place: 'Iwatodai Dorm · Front Steps', scene: [
    { n: "Officer Kurosawa had informed Leon, with no expression at all, that in Japan you ate Christmas cake on Christmas Eve, with someone you cared about, and that if you didn't, the cake was considered wasted and the shame fell on your whole family. Leon had believed every word. Solar found this out at seven o'clock, when she opened the dorm's front door and found him on the steps in the snow with a cake box on his knees, sitting very straight, guarding it." },
    { s: 'leon', f: 'serious', t: "Kurosawa says if we don't eat this tonight it's a disgrace. I don't fully trust him. I'm not taking the chance." },
    { s: 'solar', t: "He was messing with you." },
    { s: 'leon', f: 'neutral', t: "...Yeah. Figured that out around the second block. Bought it anyway." },
    { n: "A strawberry shortcake from the bakery on the strip, white and round, with a little chocolate plaque that said MERRY CHRISTMAS in piped icing and a plastic Santa standing on it with both arms up like he'd just won something. Leon had bought two forks and no plates. He'd also brought a thermos of hot tea, the same thermos, she was nearly sure, that he'd brought to these same steps in October, the day after, with two cups of terrible instant ramen." },
    { choose: [
      { t: "(Sit down on the step below him.)", notes: 3, then: [
        { n: "She sat on the step below him, the way he had sat below her in October, and he looked at where she'd chosen to sit and understood it, she saw, and didn't say anything, and handed her a fork." }
      ] },
      { t: "Ashley's not coming?", notes: 2, then: [
        { s: 'leon', f: 'neutral', t: "Ashley's at a party. With people her own age. Supervised. By Kurosawa." },
        { s: 'leon', f: 'happy', t: "He volunteered. Still not sure what I did to deserve it." }
      ] }
    ] },
    { n: "They ate the cake straight out of the box, the snow coming down slow and soft under the porch light and landing on the cream, and it was too sweet and very cold and perfect. Leon gave her the Santa. He said she'd earned it." },
    { s: 'leon', f: 'neutral', t: "Christmas Eve, usually I'm on a job. Somewhere with no windows. Eating something out of a tin, standing up." },
    { s: 'leon', f: 'happy', t: "This is the first one in a while with stairs." },
    { s: 'leon', f: 'flustered', t: "Got you something. Ashley wrapped it. I'm sorry about the bow." },
    { n: "The bow was enormous. It was gold and roughly the size of the present, which was soft and flat, and inside was a scarf, charcoal wool, plain and warm and clearly not cheap, the kind of thing a person buys after going into four shops and standing in each one too long." },
    { s: 'leon', f: 'serious', t: "You never wear one. I've noticed. You go out in the Dark Hour with your neck exposed. It's January in a week." },
    { s: 'leon', f: 'flustered', t: "...That's not why. That's part of why." },
    { choose: [
      { t: "(Give him a pocket phrasebook. You've tabbed forty pages.)", notes: 3, then: [
        { n: "A pocket Japanese phrasebook for tourists with a cartoon Mount Fuji on the cover, and inside it she'd marked forty pages with little paper tabs and written in the margins in English. How to order two of something. How to ask where the station is. How to thank a police officer like you mean it." },
        { s: 'leon', f: 'surprised', t: "..." },
        { n: "He went through every single tab, there on the steps in the snow, reading every note, and on the inside of the back cover she'd written one more line, in English, with the Japanese underneath. Come home safe. He stopped there, and stayed on that page for a long time." }
      ] },
      { t: "(Give him a pair of lined leather gloves.)", notes: 3, then: [
        { s: 'leon', f: 'neutral', t: "Leather. Lined. These are good gloves." },
        { s: 'solar', t: "Your hands are always cold at the police box. I've noticed." },
        { n: "The corner of his mouth went up. He put them on and flexed his fingers, and then took the right one straight back off and held her hand with his bare one instead." },
        { s: 'leon', f: 'happy', t: "...Saving it. For when you're not around." }
      ] }
    ] },
    { n: "The snow kept coming. Down the street someone's television was playing a Christmas special, faint laughter rising and falling through a window. He wound the scarf around her neck himself, twice, slowly, tucking the end in, his knuckles cold against her jaw, and then didn't take his hands away." },
    { s: 'leon', f: 'sad', t: "Every Christmas I've had in a long time, I've been somewhere I was waiting to leave." },
    { s: 'leon', f: 'happy', t: "First time I'm somewhere I don't want to." },
    { n: "He kissed her on the steps under the porch light, gently, like a question he already knew the answer to, and he tasted like strawberries and cold, and when he pulled back he kept his forehead against hers a long moment with his eyes closed." },
    { s: 'leon', f: 'happy', t: "Merry Christmas, Solar." },
    { n: "Somewhere across town, she was fairly sure, a police officer at a teenager's party was laughing at his own joke." }
  ] },
  romance: true,
  cast: { ashley: 'Ashley', ada: 'Ada', kurosawa: 'Officer Kurosawa', merchant: 'Merchant', akihiko: 'Akihiko' },
  threads: { ashley: { name: 'leon\'s babysitting service', members: ['leon', 'ashley'] } },
  texts: [
    { id: 'leon-1a', rank: 1, days: 1, slot: 1, msgs: [
      { from: 'leon', t: 'Kurosawa says you vouched for me.' },
      { from: 'leon', t: 'Thanks. Probably.' }
    ], reply: [
      { t: "You owe me.", notes: 3, then: [{ from: 'leon', t: 'Story of my life.' }] },
      { t: 'Where did you even get that jacket', notes: 2, then: [{ from: 'leon', t: 'Classified.' }, { from: 'leon', t: 'It was on sale.' }] }
    ] },
    { id: 'ash-2', thread: 'ashley', rank: 2, days: 1, msgs: [
      { sys: 'ashley created "leon\'s babysitting service"' },
      { from: 'ashley', t: 'SOLAR!!! thank you for today 💛💛' },
      { from: 'ashley', t: 'leon has never once taken me shopping' },
      { from: 'leon', t: 'I took you through a castle.' },
      { from: 'ashley', t: 'THAT IS NOT SHOPPING LEON' },
      { from: 'ashley', t: 'also why is the group name that' },
      { from: 'leon', t: 'Because it\'s accurate.' }
    ], reply: [
      { t: 'Same time next week, Ashley?', then: [{ from: 'ashley', t: 'YES' }, { from: 'leon', t: 'I\'ll bring a bigger bag.' }] },
      { t: "Leon, you carried eleven bags. I'm proud of you.", then: [{ from: 'leon', t: 'Twelve. One of them was a lamp.' }] }
    ] },
    { id: 'leon-3a', rank: 3, days: 2, slot: 1, msgs: [
      { from: 'leon', t: 'You eat today?' }
    ], reply: [
      { t: 'Not really.', notes: 3, then: [{ from: 'leon', t: 'Okay. I\'m bringing ramen. Don\'t argue.' }] },
      { t: "I'm okay. Really.", notes: 2, then: [{ from: 'leon', t: 'Sure.' }, { from: 'leon', t: 'Bringing ramen anyway.' }] }
    ] },
    { id: 'ash-4long', thread: 'ashley', rank: 4, before: 7, days: 3, rename: "leon's babysitting service 👍", msgs: [
      { from: 'ashley', t: 'ok BIG news' },
      { from: 'ashley', t: 'there is a karaoke place on the second floor of the mall' },
      { from: 'ashley', t: 'and i booked a room. for three. friday' },
      { from: 'leon', t: 'No.' },
      { from: 'ashley', t: 'its already paid for leon' },
      { from: 'leon', t: 'With what money.' },
      { from: 'ashley', t: 'dont worry about it' },
      { from: 'leon', t: 'I am extremely worried about it.' },
      { ask: [
        { t: "I'm in. Leon, you're singing.", notes: 3, then: [
          { from: 'ashley', t: 'YESSSS 💛' },
          { from: 'leon', t: "I'm security. Security doesn't sing." },
          { from: 'ashley', t: 'security DOES sing actually i checked' }
        ] },
        { t: 'Ashley. Where did the money come from?', notes: 2, then: [
          { from: 'ashley', t: 'kurosawa' },
          { from: 'leon', t: 'Ashley.' },
          { from: 'ashley', t: 'he OFFERED. he said anything to get leon out of his police box for one night' },
          { from: 'leon', t: "...That's fair." }
        ] }
      ] },
      { from: 'ashley', t: 'ok song requests for leon. go' },
      { from: 'leon', t: "I don't know any songs from this decade." },
      { from: 'ashley', t: 'you dont know any songs from ANY decade' },
      { from: 'leon', t: 'I know one.' },
      { from: 'ashley', t: 'is it the one you hum when youre sharpening your knife' },
      { from: 'leon', t: 'No comment.' },
      { ask: [
        { t: "Something sad and dramatic. He'd nail it.", notes: 3, then: [{ from: 'ashley', t: 'OMG yes. a power ballad. he has the hair for it' }, { from: 'leon', t: 'Leave the hair out of this.' }] },
        { t: 'Let him pick. He has a secret favorite. I can tell.', notes: 2, then: [{ from: 'leon', t: "I don't." }, { from: 'leon', t: "It's a very good song, though." }] },
        { t: 'A duet. Leon and Ashley.', notes: 1, then: [{ from: 'ashley', t: 'ew' }, { from: 'leon', t: 'Absolutely not.' }, { from: 'ashley', t: 'first thing we have agreed on all year' }] }
      ] },
      { from: 'ashley', t: 'ALSO i taught leon emoji today' },
      { from: 'ashley', t: 'show her leon' },
      { from: 'leon', t: '👍' },
      { from: 'ashley', t: 'thats the only one he learned' },
      { from: 'leon', t: 'It covers everything.' },
      { sys: 'ashley renamed the group "leon\'s babysitting service 👍"' },
      { ask: [
        { t: '👍', notes: 3, then: [{ from: 'leon', t: 'See. She gets it.' }, { from: 'ashley', t: 'i hate it here' }] },
        { t: 'Leon, try a different one.', notes: 2, then: [{ from: 'leon', t: '🔪' }, { from: 'ashley', t: 'NOT THAT ONE' }] }
      ] },
      { from: 'leon', t: "Friday. 1900. Don't be late." },
      { from: 'ashley', t: 'he means 7pm. he thinks hes in the army' }
    ] },
    { id: 'leon-5a', rank: 5, days: 1, slot: 1, msgs: [
      { from: 'leon', t: 'About tonight. Ada.' },
      { from: 'leon', t: 'It\'s complicated. It\'s always been complicated.' }
    ], reply: [
      { t: "You don't have to explain.", notes: 3, then: [{ from: 'leon', t: 'I know. That\'s why I want to.' }] },
      { t: 'She stole your thing.', notes: 2, then: [{ from: 'leon', t: 'She does that.' }] }
    ] },
    { id: 'leon-6a', rank: 6, days: 1, slot: 1, msgs: [
      { from: 'leon', t: 'Still thinking about that thing you carry.' },
      { from: 'leon', t: 'You okay? Actually okay?' }
    ], reply: [
      { t: "It's just how it works here.", notes: 2, then: [{ from: 'leon', t: 'Doesn\'t mean I have to like it.' }] },
      { t: "I'm okay. Thank you for asking.", notes: 3, then: [{ from: 'leon', t: 'I\'ll keep asking.' }] }
    ] },
    { id: 'leon-8a', rank: 8, days: 1, slot: 1, msgs: [
      { from: 'leon', t: 'Didn\'t finish the drink. Figured you\'d want to know.' }
    ], reply: [
      { t: "I'm really glad.", notes: 3, then: [{ from: 'leon', t: 'Yeah. Me too.' }] },
      { t: 'Proud of you, rookie.', notes: 3, then: [{ from: 'leon', t: 'Don\'t call me rookie.' }, { from: 'leon', t: '...Okay you can call me rookie.' }] }
    ] },
    { id: 'leon-9r', rank: 9, route: 'romance', days: 1, slot: 1, msgs: [
      { from: 'leon', t: 'I\'ve been shot at less than I\'ve been nervous this week.' },
      { from: 'leon', t: 'Worth it.' }
    ], reply: [
      { t: 'Smooth, agent.', notes: 3, then: [{ from: 'leon', t: 'I have my moments.' }] },
      { t: 'Come over?', notes: 3, then: [{ from: 'leon', t: 'Already walking.' }] }
    ] },
    { id: 'leon-9f', rank: 9, route: 'friend', days: 1, slot: 1, msgs: [
      { from: 'leon', t: 'Partner.' },
      { from: 'leon', t: 'Just wanted to type it.' }
    ], reply: [
      { t: 'Partner.', notes: 3, then: [{ from: 'leon', t: 'Good.' }] },
      { t: "Ashley's going to be jealous.", notes: 2, then: [{ from: 'leon', t: 'Ashley is always jealous. She\'ll live.' }] }
    ] }
  ],
  ranks: [
    { after: '9/7', title: '1: where\'s everyone going', place: 'Paulownia Mall · Police Box', scene: [
      { n: "Officer Kurosawa had a problem, and the problem was leaning on his counter in a leather jacket with a fur collar, asking very politely where a man might buy ammunition in this city." },
      { s: 'kurosawa', f: 'neutral', t: "You can't. That's the point of Japan." },
      { s: 'leon', f: 'neutral', t: "Okay. What about a knife?" },
      { s: 'kurosawa', f: 'serious', t: "Sir." },
      { n: "He was good-looking in an exhausting way, the kind of good-looking that looked like it hadn't slept since about 1998, with a curtain of hair falling over one eye that he kept pushing back and that kept falling anyway. American. A holster under the jacket, empty. He had the posture of someone who was always, on some level, waiting for the ceiling to collapse." },
      { n: "Solar had only come in because Kurosawa sometimes had things in the back room for people who knew to ask, and she knew to ask, and now she was watching a stranger lose an argument to the least movable man in Port Island." },
      { s: 'kurosawa', f: 'neutral', t: "He came in at midnight. Covered in green slime. Said he'd shot something with too many arms on the monorail." },
      { s: 'kurosawa', f: 'serious', t: "You're from that dorm. You know what he's talking about. Vouch for him or I'm calling somebody." },
      { choose: [
        { t: "He's with me.", notes: 3, then: [
          { s: 'leon', f: 'surprised', t: "...I am?" },
          { s: 'solar', t: "You are now. Keep up." },
          { s: 'leon', f: 'happy', t: "Yes, ma'am." }
        ] },
        { t: "You shot it? With what?", notes: 2, then: [
          { s: 'leon', f: 'neutral', t: "My last six rounds. Then a kick. Then I suplexed it. Didn't love that part." },
          { s: 'kurosawa', f: 'happy', t: "He's yours. Take him." }
        ] }
      ] },
      { n: "Outside the police box, under the fountain lights, he introduced himself. Leon. Leon Kennedy. A federal agent. He'd been on a job, he said, somewhere in rural Spain, a village full of people who didn't act like people anymore, and the last thing he remembered was a door, and then a monorail full of coffins under a green moon." },
      { s: 'leon', f: 'neutral', t: "So. Where's everyone going? At midnight, I mean. The coffins." },
      { s: 'solar', t: "Nobody's going anywhere. That's kind of the problem." },
      { s: 'leon', f: 'neutral', t: "...Great. Love that for me." },
      { n: "He said it so flatly, so completely without surprise, that Solar laughed out loud in the middle of Paulownia Mall, and he looked at her like that was the first good thing that had happened to him in a long time." }
    ] },

    { after: '9/21', title: '2: ashley', place: 'Paulownia Mall', scene: [
      { n: "The second time she found Leon at the police box, there was a girl sitting on the counter swinging her legs, blonde bob, orange sweater, plaid skirt, eating a crepe and complaining." },
      { register: 'ashley' },
      { s: 'ashley', f: 'serious', t: "LEON. There is a MALL. A real one. With clothes. And you won't let me go in it." },
      { s: 'leon', f: 'serious', t: "Last time I let you go somewhere you got kidnapped by a cult." },
      { s: 'ashley', f: 'serious', t: "That was ONE TIME." },
      { s: 'leon', f: 'neutral', t: "It was four times, Ashley." },
      { n: "Ashley Graham. The president's daughter, Leon explained, with the face of a man who had explained this to a lot of people. She'd come through the same door he had, and he was, technically, still on the job. She was his job. She was always his job." },
      { choose: [
        { t: "I'll take her shopping. You can follow us.", notes: 3, then: [
          { s: 'ashley', f: 'happy', t: "OH MY GOD. I love you. Who are you. I love you." },
          { s: 'leon', f: 'happy', t: "...Fine. But I'm carrying the bags. Bags are cover." }
        ] },
        { t: "Leon, let the girl have a crepe in peace.", notes: 2, then: [
          { s: 'ashley', f: 'happy', t: "THANK you. Someone with SENSE." },
          { s: 'leon', f: 'neutral', t: "She's had three crepes." }
        ] }
      ] },
      { n: "They went through every store in Paulownia Mall. Ashley tried on everything. Solar told her the truth about all of it, which Ashley said nobody ever did, because everyone was always too scared of her father. Leon trailed three steps behind them the entire afternoon, carrying twelve bags, including a lamp, scanning every exit." },
      { n: "At one point a man bumped into Ashley by accident and Leon was between them before Solar saw him move. The man apologized four times and fled. Leon went back to carrying the lamp as if nothing had happened." },
      { s: 'ashley', f: 'neutral', t: "He does that. It's annoying." },
      { s: 'ashley', f: 'sad', t: "...It's also kind of the only reason I'm alive. Don't tell him I said that." }
    ] },

    { after: '10/6', title: '3: raccoon city', music: 'tender', place: 'Iwatodai Dorm · Front Steps', scene: [
      { n: "The day after, the dorm was very quiet. Nobody cooked. Nobody turned on the television. The kitchen was clean in a way that hurt to look at, everything put away exactly where one person had always put it." },
      { n: "Solar was sitting on the front steps in the cold, not doing anything, not feeling much of anything, which was its own kind of feeling. She didn't notice Leon until he sat down one step below her, a convenience store bag in his hand." },
      { s: 'leon', f: 'sad', t: "Akihiko told me. I'm sorry." },
      { n: "He didn't say anything else for a while. He took two cups of instant ramen out of the bag and opened them and poured in hot water from a thermos and handed her one, and a pair of chopsticks, and waited." },
      { s: 'leon', f: 'sad', t: "My first day on the job, I was a cop. Raccoon City. I showed up a day late because I'd been out drinking over a girl. By the time I got there, the whole city was gone." },
      { s: 'leon', f: 'sad', t: "Everyone I was supposed to work with. Dead. One day. I never even met most of them." },
      { s: 'leon', f: 'sad', t: "People told me it gets easier. It doesn't. You just get bigger around it." },
      { choose: [
        { t: "(Eat the ramen.)", notes: 3, then: [{ n: "She ate the ramen. It was terrible, and hot, and the first thing she'd eaten all day. Leon ate his too, in silence, and didn't look at her when her shoulders started shaking, which was the kindest thing anyone had done for her since it happened." }] },
        { t: "How do you keep going?", notes: 3, then: [
          { s: 'leon', f: 'serious', t: "Somebody always needs getting out. So I get them out. Then I do it again." },
          { s: 'leon', f: 'sad', t: "It's not a great answer. It's the one I've got." }
        ] }
      ] },
      { n: "He stayed until the streetlights came on. When he left, he put his jacket around her shoulders without saying anything about it, and it smelled like gunpowder and cold air and something like cedar, and she wore it until she went inside." }
    ] },

    { after: '10/20', title: '4: what\'re ya buyin\'', music: 'mystery', place: 'Port Island Station · Back Alley', scene: [
      { n: "There was a man in the back alley behind Port Island Station who had not been there yesterday. A long dark cloak. A hood. A bandana over his face. Eyes that glowed, faintly, in a way that was not normal for a human person. He opened his coat as they passed, and the inside of it was lined with guns." },
      { s: 'merchant', f: 'neutral', t: "What're ya buyin'?" },
      { s: 'leon', f: 'surprised', t: "...You've got to be kidding me." },
      { s: 'merchant', f: 'neutral', t: "Ahhh, stranger. Fancy seeing you here. Got some rare things on sale, stranger." },
      { n: "Leon looked at Solar. Solar looked at Leon. Leon put his face in his hands." },
      { s: 'leon', f: 'neutral', t: "He was in Spain. In the castle. On the island. Everywhere I went, he was there. I never once asked how." },
      { s: 'leon', f: 'neutral', t: "I'm not going to ask now either." },
      { choose: [
        { t: "Buy him something.", notes: 3, then: [
          { s: 'merchant', f: 'happy', t: "Heh heh heh. Thank you." },
          { n: "She bought him an attaché case. A good one, black, with more slots than it should have had. Leon looked at it for a long second, and then spent forty minutes arranging the few things he owned into it, rotating every item until it fit perfectly." },
          { s: 'leon', f: 'happy', t: "...Best present I ever got. Don't tell Ashley." }
        ] },
        { t: "Do you take yen?", notes: 2, then: [
          { s: 'merchant', f: 'happy', t: "Stranger, I take everything." },
          { s: 'leon', f: 'neutral', t: "That's what I'm afraid of." }
        ] }
      ] },
      { s: 'merchant', f: 'neutral', t: "Come back anytime." },
      { n: "When they looked back from the end of the alley, he was gone. There was only a little blue torch, burning in the dark where he'd stood, and then that was gone too." }
    ] },

    { after: '11/3', title: '5: the woman in red', place: 'Iwatodai · Rooftops · The Dark Hour', scene: [
      { n: "The Dark Hour, and they were on a rooftop above the strip because Leon had seen a light up there where no light should be. The city below was coffins and green. The moon was a big pale coin." },
      { n: "There was a woman standing at the edge of the roof. Red turtleneck under a black harness. A sleek black bob. Red lipstick, at midnight, in the Dark Hour, which was a choice. She was holding a little glowing sample case and looking at Leon like he was a joke she'd heard before and still liked." },
      { register: 'ada' },
      { s: 'ada', f: 'happy', t: "Leon. You look tired." },
      { s: 'leon', f: 'flustered', t: "Ada." },
      { n: "That was all he said. Just her name. But Solar had been reading people her whole life, and there was a whole history in the way he said it, years of it, rooftops and helicopters and a woman who always left first." },
      { s: 'ada', f: 'happy', t: "And who's this? You're collecting strays again." },
      { choose: [
        { t: "I'm the one who keeps him fed.", notes: 3, then: [{ s: 'ada', f: 'neutral', t: "Hm. Somebody should." }] },
        { t: "(Say nothing. Watch her.)", notes: 2, then: [{ s: 'ada', f: 'happy', t: "Oh, I like her. She watches. You never watch, Leon." }] }
      ] },
      { s: 'leon', f: 'serious', t: "What are you doing here?" },
      { s: 'ada', f: 'happy', t: "Same thing as always. Picking up something that doesn't belong to me." },
      { n: "She held up the case, and Leon realized at the same moment Solar did that it was the thing from his jacket pocket, the one he'd been carrying since Spain, and he hadn't felt her take it. She smiled. Then she fired a grappling hook into the dark and was gone, a flash of red against the green moon." },
      { s: 'leon', f: 'happy', t: "...Every single time." },
      { n: "He didn't sound angry. He sounded like a man who'd been robbed by the same person for ten years and had stopped being sure he minded. Solar didn't know why that made her chest feel tight. She decided not to know." }
    ] },

    { after: '11/12', title: '6: the evoker', place: 'Iwatodai Dorm · Command Room', scene: [
      { n: "Leon had never seen anyone summon a Persona before." },
      { n: "They were in the command room, the Dark Hour about to start, and Solar took the silver thing out of the holster on her thigh the way she always did, without thinking, and checked it, and Leon's whole body went still." },
      { s: 'leon', f: 'surprised', t: "...Solar. What is that." },
      { s: 'solar', t: "It's an Evoker. It's not a real gun." },
      { s: 'leon', f: 'serious', t: "It looks like a real gun." },
      { s: 'solar', t: "You point it at your head and pull the trigger and your Persona comes out. That's how it works." },
      { n: "She said it plainly, because it was plain, to her, after seven months. She'd forgotten what it looked like from outside. She watched him remember for her, watched it land on his face, a man who had pulled a hundred people out of hell watching an eighteen-year-old calmly describe holding a gun to her own temple." },
      { s: 'leon', f: 'serious', t: "...Who decided that? Who decided students should do that?" },
      { choose: [
        { t: "Nobody decided. It's just how it works here.", notes: 2, then: [{ s: 'leon', f: 'serious', t: "Somebody always decided. That's how it works everywhere." }] },
        { t: "It helps, actually. It's like... facing it.", notes: 3, then: [
          { s: 'leon', f: 'sad', t: '...' },
          { s: 'leon', f: 'serious', t: "Okay. Okay. I don't have to like it. I just have to be there when you do it." }
        ] }
      ] },
      { n: "The clock hit midnight. The room turned green. She raised the Evoker and pulled the trigger, and her Persona came out of her in a burst of blue glass and light, and Leon, standing beside her, did not flinch, did not look away, and put one hand very lightly against the middle of her back the whole time, like a man steadying someone on a ledge." }
    ] },

    { after: '11/26', title: '7: tartarus', place: 'Tartarus · The Dark Hour', scene: [
      { n: "Leon had insisted on coming. Mitsuru had said absolutely not. Leon had said, very politely, that he had been in a lot of towers, and Mitsuru had looked at him for a long moment and said, fine, but you're carrying the healing items." },
      { n: "Tartarus did not care about any of them. Floor after floor of shifting halls, checkerboard and blood-colored, and at the top of the night a shadow that filled the entire room, a huge knight on a black horse, the kind of thing that made Junpei go very quiet." },
      { s: 'leon', f: 'serious', t: "Okay. Big guy. Love that. Stay behind me." },
      { choose: [
        { t: "No. Beside you.", notes: 3, then: [{ s: 'leon', f: 'happy', t: "...Copy that. Beside me." }] },
        { t: "You don't even have a Persona.", notes: 2, then: [{ s: 'leon', f: 'happy', t: "I've got a knife and a bad attitude. I've done more with less." }] }
      ] },
      { n: "It was the hardest fight they'd had in weeks. The knight was fast and hit like a train and kept getting back up. Leon fought the way she'd heard about and never believed, a knife in a reverse grip, ducking under swings that would have taken his head off, and when the knight staggered he ran up its arm, actually ran up it, and kicked it in the face, a full roundhouse, and it went down." },
      { n: "Her Persona finished it. The room went still. Leon was standing on the knight's back, breathing hard, hair in his face, entirely covered in black shadow-dust." },
      { s: 'leon', f: 'neutral', t: "...No thanks, bro." },
      { s: 'solar', t: "Who are you talking to?" },
      { s: 'leon', f: 'flustered', t: "Habit. Don't worry about it." },
      { n: "Junpei said it was the coolest thing he'd ever seen in his life. Akihiko asked Leon to teach him that kick. Mitsuru said nothing, but on the way down she quietly handed Leon a towel, which Solar had never once seen her do for anyone." }
    ] },

    { after: '12/10', title: '8: the bar', music: 'tender', place: 'Paulownia Mall · Club Escapade', scene: [
      { n: "He was at the bar of Club Escapade on a Thursday night, alone, a glass of something brown in front of him, and he hadn't touched it. He'd just been looking at it. He did that, sometimes, she'd noticed. Ordered one and looked at it." },
      { s: 'leon', f: 'sad', t: "Hey, rookie. You're too young for this place." },
      { s: 'solar', t: "So are you, by the look of it." },
      { s: 'leon', f: 'neutral', t: "...Fair." },
      { n: "She sat down beside him. He pushed the glass an inch away, and then another inch, and then he talked, more than he'd ever talked, about the years between Raccoon City and now. The government that found him after. The jobs they gave him. The things he'd seen that he didn't have words for and didn't want words for. How every time he thought he could stop, somebody else needed getting out." },
      { s: 'leon', f: 'sad', t: "Some nights the drink's the only thing that turns it off. I know that's not good. I'm working on it." },
      { s: 'leon', f: 'serious', t: "Here's the thing. Your Dark Hour ends in January. Everybody says so. And then what? You just go back to being a normal student?" },
      { s: 'leon', f: 'sad', t: "Because I never got to. And I'd really like one of us to." },
      { choose: [
        { t: "Then come with me. We'll both try.", notes: 3, then: [
          { s: 'leon', f: 'sad', t: '...' },
          { s: 'leon', f: 'happy', t: "Yeah. Okay. We'll both try." }
        ] },
        { t: "You're allowed to stop too, Leon.", notes: 3, then: [{ s: 'leon', f: 'surprised', t: "...Nobody's ever told me that. Not once. Huh." }] }
      ] },
      { n: "He left the drink on the bar, full. When they walked out into the cold, he looked back at it once, the way you'd look at a door you'd decided not to go through, and then he didn't look back again." }
    ] },

    { after: '12/22', title: '9: what are we', place: 'Paulownia Mall · Fountain', scene: [
      { n: "The mall was full of Christmas lights, gold and white, hanging over the fountain where they'd first stood. Ashley had insisted on putting a Santa hat on Leon. He had allowed it, with the face of a man accepting a sentence." },
      { n: "Ashley had also, very loudly, announced she was going to look at shoes for exactly one hour, and had winked at Solar so hard it was practically audible, and gone." },
      { s: 'leon', f: 'flustered', t: "...She's subtle." },
      { s: 'solar', t: "She's the president's daughter. She's never had to be." },
      { s: 'leon', f: 'sad', t: "Look. I'm bad at this. Every time I care about someone, it goes sideways. People leave, or they get taken, or they turn out to be working for someone else." },
      { s: 'leon', f: 'happy', t: "But you've never once done any of that. You just keep showing up with food." },
      { s: 'leon', f: 'serious', t: "So I need to know. What is this?" },
      { route: [
        { t: "I'm falling for you, Leon.", route: 'romance', notes: 3, then: [
          { s: 'leon', f: 'surprised', t: '...' },
          { s: 'leon', f: 'flustered', t: "Yeah. Me too. I fell a while ago. On the steps, I think. With the ramen." },
          { n: "He kissed her by the fountain, under the gold lights, still wearing the Santa hat, which he would later deny, and which Ashley photographed from behind a pillar, which she would later absolutely not deny." }
        ] },
        { t: "You're my partner, Leon. In everything.", route: 'friend', notes: 3, then: [
          { s: 'leon', f: 'happy', t: "...Partner. Yeah. I like that." },
          { s: 'leon', f: 'happy', t: "Haven't had a real one since Claire. Don't make me regret it, rookie." }
        ] }
      ] }
    ] },

    { after: '12/29', title: '10: rookie', place: 'Paulownia Mall · Police Box', scene: [
      { n: "The last days of the year, the snow coming down in soft slow flakes on Paulownia Mall, and Leon was back at the police box, where it had started, leaning on the counter while Officer Kurosawa pretended to ignore him." },
      { s: 'kurosawa', f: 'happy', t: "He's been here since four. Waiting for you. Take him." },
      { n: "Leon walked her out to the fountain and stopped, and took something out of his jacket pocket. A badge. Old, scratched, a little bent at one corner. Raccoon City Police Department." },
      { s: 'leon', f: 'sad', t: "My first badge. From my first day. The worst day of my life." },
      { s: 'leon', f: 'happy', t: "I kept it because I thought I should remember it. Turns out I don't need it anymore to remember. I've got better days now." },
      { s: 'leon', f: 'flustered', t: "You should have it. Because you're the reason I've got better days." },
      { ifRoute: 'friend', then: [
        { choose: [
          { t: "Officer Solar, reporting for duty.", notes: 3, then: [{ s: 'leon', f: 'happy', t: "God help us all. Welcome to the force, rookie." }] },
          { t: "I'll keep it safe.", notes: 3, then: [{ s: 'leon', f: 'happy', t: "I know you will. That's the whole point." }] }
        ] },
        { n: "Ashley came back with four shopping bags and the merchant's little blue torch flickered at the end of the alley for a second and Kurosawa sighed from the police box, and they stood in the snow together, the three of them, a babysitter and his charge and the girl who'd made them both feel like people again." }
      ] },
      { ifRoute: 'romance', then: [
        { choose: [
          { t: "Stay. However long you can.", notes: 3, then: [
            { s: 'leon', f: 'serious', t: "As long as I'm here. That's a promise. I've never broken one to you." },
            { n: "He kissed her in the falling snow, slow and careful, the way he did everything that actually mattered, and Officer Kurosawa, inside the police box, very deliberately turned his chair to face the wall." }
          ] },
          { t: "(Pin the badge to his jacket instead.)", notes: 3, then: [
            { s: 'leon', f: 'surprised', t: '...?' },
            { s: 'solar', t: "Keep it. Just remember who gave it back to you." },
            { s: 'leon', f: 'flustered', t: "...Yeah. I'm never going to forget that." }
          ] }
        ] }
      ] }
    ] }
  ]
});
