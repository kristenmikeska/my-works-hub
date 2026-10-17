/* Mercy (Dr. Angela Ziegler) · XIV Temperance. Arrives on the 6/8 full moon. Format notes are at the top of akihiko.js.
   Kat's Easter egg: Kat mains Mercy (peak GM, played on an eSports team). In another world, Solar wore Mercy's wings. */
FemcSocial.define({
  id: 'mercy', name: 'Mercy', short: 'Mercy', arcana: 'Temperance', numeral: 'XIV', from: 'Overwatch',
  arrives: '6/8',
  home: { place: 'Tatsumi Memorial Hospital', slot: 0, days: [0, 2, 4], hint: 'Daytime on Tuesdays, Thursdays and Sundays, at Tatsumi Memorial Hospital.' },
  approach: "A woman in a white coat with a halo of blonde hair is doing rounds on a ward she clearly doesn't work on. She smiles at you like she already knows your name.",
  invite: {
    ask: [
      "Are you free? I have a break and far too much coffee.",
      "Come visit? Doctor's orders. 😊",
      "Free for a little while? I could use the company.",
      "I have twenty minutes and a vending machine that owes me money. Come and keep me honest.",
      "The roof is empty and the sun is out. That is a prescription, Solar.",
      "Are you nearby? I have been talking to charts all morning. They are poor conversationalists.",
      "I am taking a break. A real one. I need a witness.",
      "The cafeteria has pudding today and I cannot be trusted alone with it. Come?"
    ],
    ok: ["Wunderbar! See you soon.", "Good. I will save you the chair that does not squeak.", "Wonderful. Bring nothing. Well. Perhaps a pastry. 😊"],
    no: ["Of course. Rest well.", "Another time, then. Drink some water for me.", "That is all right. I will try to take the break anyway. Try."]
  },
  hangouts: [
    [
      { n: "The vending machine on the second floor of Tatsumi Memorial had eleven kinds of coffee and Dr. Ziegler had an opinion about every one of them, which she delivered standing in front of it in her white coat at two in the afternoon like she was presenting at a conference." },
      { s: 'mercy', f: 'happy', t: "The blue can is bitter but honest. The gold can is lying to you about being coffee. The one with the cartoon cow is a dessert, and I respect it as a dessert." },
      { s: 'mercy', f: 'neutral', t: "Choose. My treat. I have a great many hundred-yen coins and nothing else to spend them on." },
      { choose: [
        { t: "The cow one. I want dessert.", notes: 3, then: [
          { s: 'mercy', f: 'happy', t: "A woman who knows what she wants. Wunderbar." },
          { n: "She bought two. She finished hers in about four seconds and then looked at the empty can with a small, private grief." }
        ] },
        { t: "Whatever you're having.", notes: 2, then: [{ s: 'mercy', f: 'neutral', t: "I am having my fifth blue can. I would not recommend following my example in anything." }] },
        { t: "Water. You should have one too.", notes: 2, then: [
          { s: 'mercy', f: 'surprised', t: "...You are very bossy for a visitor." },
          { n: "She bought two waters anyway, and drank all of hers, watching Solar over the bottle like a doctor who'd been caught by a stricter one." }
        ] }
      ] },
      { n: "They stood by the machine until her pager went, the hum of the refrigeration filling the quiet, the hallway smelling of floor wax and canned coffee. It was a strange place to spend a break. It was the only kind of break she seemed to know how to take." }
    ],
    [
      { n: "The staff lounge was empty except for the broken air conditioner, a fridge humming over somebody's labeled yogurt, and Dr. Ziegler, asleep sitting up at the table with a pen still in her hand and a chart open under her elbow, her head tipped back against the wall at an angle that would hurt later." },
      { n: "She had clearly sat down for one minute. The clock on the wall suggested it had been forty." },
      { choose: [
        { t: "(Take the pen out of her hand and let her sleep.)", notes: 3, then: [
          { n: "Solar eased the pen free and capped it and sat across from her doing nothing, which was harder than it sounded, for twenty minutes, until the doctor woke with a small start and looked at the pen in Solar's hand like it was evidence." },
          { s: 'mercy', f: 'flustered', t: "...I was resting my eyes." },
          { s: 'mercy', f: 'happy', t: "Thank you. Don't tell anyone. Half of them already think I'm a ghost." }
        ] },
        { t: "Doctor. Your neck is going to hate you.", notes: 2, then: [
          { s: 'mercy', f: 'surprised', t: "Hm? I'm awake. I was reviewing." },
          { s: 'mercy', f: 'neutral', t: "...With my eyes closed. Which is a technique." }
        ] },
        { t: "(Sneak a look at the chart.)", notes: 1, then: [
          { n: "It was in German. Solar understood exactly one word, and the word was Kaffee, scribbled in the margin and underlined twice." },
          { s: 'mercy', f: 'flustered', t: "That is confidential. Also, it is a reminder." }
        ] }
      ] },
      { n: "She went back to the ward with her hair a little flat on one side. Nobody told her. Solar decided that was a kindness." }
    ],
    [
      { n: "The hospital roof in the afternoon was all wind and laundry, rows of white sheets snapping on lines the staff weren't technically supposed to use, and Dr. Ziegler sat on an upturned crate between them with a pocket dictionary that was already losing its spine." },
      { s: 'mercy', f: 'neutral', t: "I am learning. Slowly. The nurses are very patient, and I have only apologized to one man for being a tomato." },
      { s: 'mercy', f: 'happy', t: "Teach me something useful. Not medical. Something people actually say." },
      { choose: [
        { t: "Otsukaresama. It means you worked hard.", notes: 3, then: [
          { s: 'mercy', f: 'happy', t: "O-tsu-ka-re-sa-ma. ...That is a beautiful thing to have a word for." },
          { s: 'mercy', f: 'neutral', t: "We should all be told that more often. I will say it to the night shift." }
        ] },
        { t: "Mendokusai. It's too much trouble.", notes: 2, then: [{ s: 'mercy', f: 'happy', t: "Ha! I know a dozen soldiers who would say that about everything. I will save it for paperwork." }] },
        { t: "Itadakimasu. You say it before you eat.", notes: 2, then: [{ s: 'mercy', f: 'flustered', t: "Before I eat. Yes. When I remember to." }] }
      ] },
      { n: "She wrote it on the inside cover of the dictionary in careful block letters, under a list of other words that ran down the page in different pens, and Solar realized she'd been collecting them for a while, one patient and one nurse at a time." }
    ],
    [
      { n: "There was a girl of about six in the children's ward who had come in with a broken arm and decided, at some point during her stay, that Dr. Ziegler was her personal physician, and also her rabbit's." },
      { n: "The rabbit was grey and one-eared and had seen things. It lay on the bed with a tongue depressor taped to its leg, and the doctor was examining it with a perfectly straight face." },
      { s: 'mercy', f: 'serious', t: "Hm. Hm. A fracture, I think. Nurse Solar, what do you recommend?" },
      { choose: [
        { t: "Bed rest and a lot of hugs.", notes: 3, then: [
          { s: 'mercy', f: 'happy', t: "Exactly my diagnosis. You have a gift." },
          { n: "The girl hugged the rabbit with the grim dedication of someone following doctor's orders. Dr. Ziegler wrote it out on a real prescription pad and tore off the page, and the girl held it in both hands like a medal." }
        ] },
        { t: "Surgery. Immediately.", notes: 1, then: [
          { n: "The girl's face crumpled. The doctor shot Solar a look of pure professional betrayal." },
          { s: 'mercy', f: 'neutral', t: "...A second opinion says no surgery. Only rest. Nurse Solar is very new." }
        ] },
        { t: "(Tape a second tongue depressor to the other leg, for balance.)", notes: 2, then: [
          { s: 'mercy', f: 'happy', t: "Bilateral support. Very thorough." },
          { n: "The girl inspected the work and nodded, satisfied, like a foreman." }
        ] }
      ] },
      { n: "On the way out the doctor was smiling to herself, the tired lines of her face gone briefly soft. Solar didn't say anything about it. Some things you let a person keep." }
    ],
    [
      { n: "Dr. Ziegler had a way of asking questions on her break that made it very clear she was not, in any meaningful sense, on her break. They were on a bench in the hospital courtyard in the thin afternoon light, and she had already asked how Solar was sleeping, and was now looking at her with an expression Solar recognized from every nurse she'd ever met." },
      { s: 'mercy', f: 'serious', t: "And when did you last drink a glass of water? An honest answer. I will know." },
      { choose: [
        { t: "...Yesterday. I think.", notes: 3, then: [
          { s: 'mercy', f: 'serious', t: "Thank you for being honest. That is terrible." },
          { n: "She produced a bottle of water from her coat pocket like a magician, put it in Solar's hand, and watched her drink half of it before she looked satisfied." }
        ] },
        { t: "When did YOU last drink a glass of water?", notes: 3, then: [
          { s: 'mercy', f: 'flustered', t: "That is not how this works. I am the doctor." },
          { n: "A long pause. She took the bottle back out of her pocket and drank from it herself, pointedly, without looking at Solar." }
        ] },
        { t: "This morning. Lots. Gallons.", notes: 1, then: [{ s: 'mercy', f: 'neutral', t: "Gallons. Of course. And I am the Queen of Switzerland." }] }
      ] },
      { n: "A sparrow landed on the end of the bench, assessed them both, and left. The doctor watched it go with a face that said she'd have checked it for dehydration too, given half a chance." }
    ]
  ],
  // After rank MAX on the romance route, each visit plays the next date in order (then they rotate).
  dates: [
    { title: 'the day off', place: 'Paulownia Mall', music: 'joy', scene: [
      { n: "Dr. Ziegler had not taken a day off since June. Solar knew this because the night nurse had told her, and because Kiriko had told her, and because Genji had mentioned it once in the group chat with a kind of serene despair, and finally because Angela herself, asked directly, had started counting on her fingers and given up somewhere around August." },
      { n: "So Solar had taken one for her. She'd gone to the head nurse on the third floor with a bento as a bribe and a schedule printed out at the convenience store, and the head nurse, who had been waiting six months for somebody to try, signed it without reading it." },
      { n: "Angela met her by the fountain at ten in the morning in a camel coat Solar had never seen and the ugly knitted scarf, which she had clearly decided went with everything, and her hand drifted to her hip, where the pager usually lived, three times in the first minute." },
      { s: 'mercy', f: 'neutral', t: "I left it with Nurse Hayashi. She looked at me as if I'd handed her a baby. I gave her four numbers to call." },
      { s: 'mercy', f: 'serious', t: "Five. I gave her five." },
      { choose: [
        { t: "Then for the next eight hours, you're my patient.", notes: 3, then: [
          { s: 'mercy', f: 'surprised', t: "...That is a reversal I did not consent to." },
          { s: 'mercy', f: 'happy', t: "Fine. Fine. What is the treatment, Doctor?" },
          { s: 'solar', t: "Walking. Slowly. Looking at things you don't need." }
        ] },
        { t: "(Hold out your hand for the pager she doesn't have.)", notes: 3, then: [
          { n: "Angela looked at the open palm, and then down at her own empty hip, and laughed, a little helplessly, and put her hand in Solar's instead, which had been the point all along." }
        ] }
      ] },
      { n: "The treatment was harder than it sounded. Angela did not know how to look at things she didn't need. She stopped in front of shop windows the way she stopped at the foot of a bed, reading them, and Solar watched her try to diagnose a display of winter boots before she remembered she was allowed to simply like them." },
      { n: "In a little import shop at the end of the second floor, between the Italian olive oil and a shelf of British biscuits nobody ever bought, there was a single row of Swiss chocolate, red wrappers and gold letters, and Angela went so still in front of it that a man behind them said excuse me twice." },
      { s: 'mercy', f: 'sad', t: "My mother kept this in her coat pocket. For the children at the clinic. And for me, when I'd been very good, or very tired." },
      { s: 'mercy', f: 'neutral', t: "I haven't seen it since... before Overwatch. Before a great many things." },
      { choose: [
        { t: "(Buy two bars. Give her one.)", notes: 3, then: [
          { n: "She bought two. Angela held hers at the register in both hands, the way she held a chart that had good news on it, carefully, like it might change its mind." }
        ] },
        { t: "Tell me about her.", notes: 3, then: [
          { s: 'mercy', f: 'happy', t: "She hummed when she stitched. Very badly. By the end of a week, every patient knew the same three songs." },
          { s: 'mercy', f: 'sad', t: "I hum when I stitch too. I didn't notice until a nurse here asked me to stop." }
        ] }
      ] },
      { n: "They ate it on a bench outside the cinema with the cold pressing at the glass doors. Angela broke hers into perfectly even squares without seeming to know she was doing it, and gave Solar every second square, also without seeming to know." },
      { n: "At one-fifteen her hand went to her hip again. At one-sixteen she noticed, and took it away, and set it down on the bench in Solar's instead, and left it there like a dog that had been told to stay." },
      { s: 'mercy', f: 'blushing', t: "I keep thinking somebody needs me. Somewhere in that building there is a person who needs me, and I am eating chocolate." },
      { s: 'solar', t: "Somebody does need you. She's sitting right here, eating your chocolate." },
      { s: 'mercy', f: 'happy', t: "...Every second square. I saw that. I'm not as tired as you think, Liebling." },
      { n: "In the afternoon Solar took her to a movie, a loud American one with a great many explosions, and Angela was asleep before the trailers ended, her head on Solar's shoulder and the ugly scarf tickling Solar's chin, breathing the slow, heavy breaths of a woman who had been owed this particular sleep since June." },
      { n: "Solar watched the whole film alone. She couldn't have told anyone afterward what happened in it. Something blew up. Somebody got saved. Her arm went numb around the forty-minute mark and she decided, with the specific stubbornness of the very fond, that it could stay numb." },
      { s: 'mercy', f: 'blushing', t: "...How did it end?" },
      { s: 'solar', t: "Everybody lived." },
      { s: 'mercy', f: 'happy', t: "Wunderbar. My favorite kind." },
      { n: "Nurse Hayashi called once, at six, to report that nothing had happened, absolutely nothing, and that the doctor should please stop texting her. Angela kissed Solar outside the mall, quick and careful, the way she'd press down a bandage, and went home, and slept eleven hours. At midnight the night nurse sent Solar a single thumbs-up, which she had long since learned to read as a medal." }
    ] },
    { title: 'night shift', place: 'Tatsumi Memorial Hospital', music: 'night', scene: [
      { n: "Visiting hours ended at eight. The night shift started at nine. In between, Solar had discovered, there was a window of about forty minutes when nobody at Tatsumi Memorial was entirely sure who was supposed to be where, and if you walked in with a paper bag that smelled of curry and the face of a tired relative, the guard at the desk just nodded at you." },
      { n: "Angela was at the third-floor station, writing. She didn't look up. She said she could smell curry, and that it was a violation of at least three policies, and held out her hand for the bag without looking, and then did look, and saw who it was, and her whole face changed so fast it was very nearly funny." },
      { s: 'mercy', f: 'surprised', t: "Solar. It's nine o'clock at night. You have school tomorrow." },
      { s: 'solar', t: "You have a twelve-hour shift and no dinner." },
      { s: 'mercy', f: 'serious', t: "...That is not an argument. That is a diagnosis." },
      { n: "She ate standing up at the station in about four minutes, the way doctors eat, the spoon going steadily and her eyes on the monitors the whole time, and then she handed back the empty container and said, in the voice she used on residents, that if Solar was going to stay she was going to be useful." },
      { n: "Being useful meant rounds. The ward at night was a different country, blue and humming, every bed a small island of machine light, and Angela moved through it slowly, checking lines and turning shoulders and talking, always talking, low and even, to people who did not answer, so they wouldn't forget what a voice sounded like." },
      { s: 'mercy', f: 'neutral', t: "Bed nine. Her name is Mrs. Okabe. She ran a dry cleaner's for thirty years. Talk to her while I check her line. About anything. She won't mind." },
      { choose: [
        { t: "(Tell her about your day. All of it, in boring detail.)", notes: 3, then: [
          { n: "Solar told her about first period, and the vending machine that ate her coin, and the exact color of the sky over the station at four-thirty, and Junpei's opinion on melon bread, which was long. Angela worked quietly at the other side of the bed, and when Solar glanced up, the doctor was smiling at the IV line like it had said something sweet." }
        ] },
        { t: "(Read her the weather forecast from the evening paper.)", notes: 2, then: [
          { s: 'mercy', f: 'happy', t: "Excellent. Everybody wants to know the weather. Even here." },
          { n: "Solar read her the whole week. Cloudy, then clear, then cold. It felt absurd for about a minute and then it didn't." }
        ] }
      ] },
      { place: 'Tatsumi Memorial Hospital · Staff Lounge', time: '2:00 AM', music: 'tender' },
      { n: "At two in the morning the staff lounge smelled of instant coffee and somebody's labeled yogurt, and the vending machine hummed to itself in the corner. Angela bought two cans of the one with the cartoon cow and set one down in front of Solar with the solemnity of a prescription." },
      { n: "Solar didn't remember lying down on the lounge couch. She remembered the warm can and the tick of the broken air conditioner and the scratch of Angela's pen across a chart, and then she remembered nothing at all, and then it was four, and there was a white coat over her, still warm, still smelling faintly of antiseptic and of Angela." },
      { n: "Angela was at the table, writing, the way she must have been the whole time. Every few lines she glanced up at the couch, quickly, and then back down. It took Solar a long, drowsy moment to understand that she was being checked, the way you'd check a monitor." },
      { s: 'mercy', f: 'neutral', t: "You talk in your sleep, you know." },
      { s: 'solar', t: "...What did I say?" },
      { s: 'mercy', f: 'blushing', t: "Something about a payload. And then, very confidently, I'm on you, don't die." },
      { s: 'mercy', f: 'neutral', t: "We used to say that. On missions. I don't know how you know it." },
      { choose: [
        { t: "(Pretend to be asleep again.)", notes: 2, then: [
          { n: "She closed her eyes. Angela laughed under her breath, low and fond, and said that was the least convincing performance she had ever seen, and she had worked with Genji, and pulled the coat back up over Solar's shoulder anyway." }
        ] },
        { t: "Did you stay up the whole time?", notes: 3, then: [
          { s: 'mercy', f: 'blushing', t: "I was working. And you were here. Both of those things are true." },
          { s: 'mercy', f: 'happy', t: "It's a very strange feeling, keeping watch over somebody who isn't hurt. I think I could get used to it." }
        ] }
      ] },
      { n: "She walked Solar to the entrance at five for the first train, past the sleeping guard, under the sign that said Emergency in two languages. The sky over the car park was going gray at the edges. Angela pressed a bottle of water into her hand, and kissed her, quickly, in the doorway, with the automatic doors sighing open and shut behind them, confused about whether anyone was leaving." },
      { s: 'mercy', f: 'happy', t: "Drink that on the train. All of it. I will know." }
    ] },
    { title: 'guardian angel', place: 'Port Island · Seaside Park', music: 'night', scene: [
      { n: "Seaside Park after dark in winter belonged to nobody. The vending machines hummed to themselves. The seawall ran out into the black bay with a single lamp at the end of it, and Angela had chosen this spot, she said, because she'd done the arithmetic of who could see it from where, and the answer was one man on a container ship, and nobody would believe him." },
      { n: "She had the wings on under her coat. Solar could tell from the way she stood, a little straighter, shoulders braced for a weight that wasn't there, and from the hum, high and faint, that Solar was beginning to feel in her back teeth from fifty meters away." },
      { s: 'mercy', f: 'happy', t: "You told me once that you dream about flying. I want to test something. Go to the end of the seawall and call me." },
      { s: 'solar', t: "Call you what?" },
      { s: 'mercy', f: 'neutral', t: "Whatever you'd say. In the other world. Don't think about it, that's the important part." },
      { n: "Solar walked out to the lamp with the wind coming hard off the water, salt and diesel and cold enough to sting, and turned around, and Angela was a pale shape far back by the vending machines. She opened her mouth to say her name, and something else came out instead, quick and flat and certain, in a voice she'd only heard once before, on a seawall in September, for about a second." },
      { choose: [
        { t: "Mercy. On me.", notes: 3, then: [
          { n: "It wasn't loud. It didn't need to be. The wings opened, gold against the dark, and Angela came down the length of the seawall in one long bright line, not running and not quite flying, pulled, the way a thread is pulled through a needle, and landed close enough that the hem of her coat brushed Solar's knees." },
          { s: 'mercy', f: 'surprised', t: "...That's what my team used to say. Exactly that. In exactly that voice." }
        ] },
        { t: "Angela. I need you.", notes: 3, then: [
          { n: "The wings opened, gold against the dark, and Angela came down the length of the seawall in one long bright line, pulled, the way a thread is pulled through a needle, and landed close enough that her coat brushed Solar's knees, and she was laughing before her feet touched the stone." },
          { s: 'mercy', f: 'blushing', t: "You're not supposed to say it like that in combat. Nobody would ever get anything done." }
        ] }
      ] },
      { n: "She didn't step back. She looked at Solar for a moment the way she had on the hospital roof in August, like an X-ray of something that shouldn't be possible, and then, instead of saying anything about it, she held out her arms." },
      { s: 'mercy', f: 'happy', t: "Hold on. And don't kick. I've dropped exactly one person in my career, and it was Reinhardt, and he landed on his feet, and he has never let me forget it." },
      { music: 'sun' },
      { n: "Then the seawall was gone from under her. Not far, not high, just enough, the black water sliding by a few meters below, the lights of the container ship sliding by, the cold so sharp it emptied her head of everything. Angela's arms were locked around her ribs and Solar could feel her heartbeat through two coats, fast, faster than the flying could explain." },
      { n: "They went out over the bay in a long slow curve and the city opened up behind them, every window lit, Port Island and Iwatodai and the bridge strung between them like a necklace somebody had laid down carefully on black velvet. It wasn't like a dream. In the dreams she was always alone." },
      { n: "They came down on the far end of the seawall, soft as a step off a curb. Angela's hair had come out of its ponytail entirely. She didn't let go." },
      { s: 'mercy', f: 'sad', t: "Every time I've flown to someone, it's been because they were hurt. Every single time. I've never once flown to somebody just because they called me." },
      { s: 'mercy', f: 'blushing', t: "That was the first. I thought you should know that." },
      { choose: [
        { t: "Then I'll call you for no reason. Constantly.", notes: 3, then: [
          { s: 'mercy', f: 'happy', t: "Please. Interrupt my rounds. Interrupt my surgeries. I'll put the scalpel down." },
          { s: 'mercy', f: 'serious', t: "...Not during surgeries." }
        ] },
        { t: "(Lean back into her and watch the lights.)", notes: 3, then: [
          { n: "Solar leaned back into her, and felt Angela settle, chin coming down to rest on her shoulder, the hum of the wings fading as they folded, until all that was left was two people on a seawall breathing the same cold air, and the water, and the lights." }
        ] }
      ] },
      { n: "They walked back along the seawall holding hands. Somewhere around the vending machines Solar noticed that the feather in her coat pocket was humming, very faintly, and that the wings were humming back, the same note, like two instruments that had found each other in a crowded room. Angela heard it too. Neither of them mentioned it. Neither of them let go." }
    ] },
    { title: "roll it, don't fold it", place: 'Iwatodai Dorm · Kitchen', music: 'joy', scene: [
      { n: "It was Angela's idea, which was the first surprise. She announced it in the watchpoint group chat on a Thursday at eleven at night, which was the second, and on Sunday morning she was standing in the dorm kitchen with her coat off and her sleeves pushed past the elbow and her hair tied back in the tight ponytail she wore for surgery, which was the third, and the most alarming." },
      { s: 'mercy', f: 'serious', t: "I want to learn the egg. I have eaten your tamagoyaki fourteen times. I can't keep only being given it. It isn't fair." },
      { s: 'mercy', f: 'neutral', t: "I've operated in the back of a moving dropship. How hard can an egg be?" },
      { n: "She had brought a kitchen scale. She had brought it from the hospital, where Solar did not want to know what it was usually used for, and she weighed the sugar to the gram, and checked the heat of the square pan by holding the back of her hand above it with her eyes half closed, like she was feeling for a fever." },
      { n: "Kiriko arrived at ten-fifteen with her fox mask pushed up on her head and the specific energy of a girl who had been promised egg." },
      { s: 'kiriko', f: 'surprised', t: "Wait. Mercy-sensei is cooking? Actually cooking? With fire?" },
      { s: 'kiriko', f: 'happy', t: "Okay, I'm staying. I'm going to remember this for the rest of my life." },
      { n: "The first layer went into the pan and set, thin and gold, and Angela took up the chopsticks like surgical forceps, perfectly steady, and then froze, the way she never froze over a patient, because the egg was setting faster than she'd planned for and it had no vital signs to read." },
      { choose: [
        { t: "Roll it. Don't fold it.", notes: 3, then: [
          { n: "It came out in exactly Shinjiro's voice, the grumble and all, without Solar meaning it to, the way it had been said to her at this same stove in August. Angela rolled it. It held." },
          { s: 'mercy', f: 'surprised', t: "...It held." },
          { s: 'mercy', f: 'happy', t: "Kiriko! Kiriko, look. It held!" }
        ] },
        { t: "(Put your hands over hers on the chopsticks.)", notes: 3, then: [
          { n: "Solar stood behind her and put her hands over Angela's, and Angela's hands went completely still under them, which they never did, not even in the third-floor ward at two in the morning. Then they rolled it together, slowly, and it held, and the back of Angela's neck had gone pink above the collar." },
          { s: 'kiriko', f: 'neutral', t: "I'm literally standing right here." }
        ] },
        { t: "Faster, Doctor. It's not a heart.", notes: 2, then: [
          { s: 'mercy', f: 'serious', t: "Everything is a heart if you care about it enough." },
          { n: "The egg tore down the middle. Angela looked at it with real grief. Kiriko ate it out of the pan with her fingers and said it was the best tragedy she'd ever tasted." }
        ] }
      ] },
      { n: "The second one burned. The third one came out shaped like Shikoku. Kiriko ate both, with enormous dedication, and gave each of them a score out of ten, and the scores were sevens, because Kiriko was a kind girl under all the attitude, and also hungry." },
      { n: "The fourth one was right. Not perfect. Right. Angela cut it with a long knife into perfectly even slices, every one the same width to the millimeter, and then she took out a small bento box that Solar had never seen before, a plain blue one, clearly new, and laid the best three slices in it next to the rice, and closed the lid, and held it out." },
      { s: 'mercy', f: 'blushing', t: "There. It's for you. Now the count is fourteen to one. I'll catch up." },
      { n: "Something closed in Solar's throat. She knew the shape of it. Nobody has made me lunch since I was a little girl, Angela had said in August, over this same egg, and Solar had felt it then on Angela's behalf and had not, at the time, thought to feel it on her own." },
      { choose: [
        { t: "(Eat a slice right there, standing up, while she watches.)", notes: 3, then: [
          { n: "It was too sweet. Angela had weighed the sugar perfectly and then, Solar suspected, added a little more when nobody was looking. It was the best thing she had eaten in a very long time." },
          { s: 'mercy', f: 'happy', t: "Your face did something. I'm a doctor. I'm writing that down." }
        ] },
        { t: "I'm saving it for lunch tomorrow.", notes: 2, then: [
          { s: 'mercy', f: 'happy', t: "Eat it today. I'll make you another. I know how now. That's the frightening part." }
        ] }
      ] },
      { n: "Kiriko took a photo of the bento and sent it to the watchpoint, and Genji replied within a minute that he was proud of Angela, and then, a minute later, that he would like some. Angela washed every dish. Solar dried. In the half second Kiriko spent looking down at her phone, Angela kissed her by the sink, quick, with soap still on her wrists." },
      { s: 'kiriko', f: 'neutral', t: "I saw that. I see everything. I'm a fox." }
    ] }
  ],
  // P3's Christmas Eve: on 12/24 evening, if Solar is romancing several people (rank 9+), she picks one; this plays.
  christmas: { place: 'Tatsumi Memorial Hospital', scene: [
    { n: "Of course she was working. Solar had known she would be from the moment she'd seen the date circled on the duty board in November, and had decided not to argue with it, and had come to the hospital at six on Christmas Eve with a box under her arm and snow melting in her hair." },
    { n: "The children's ward had a party. Somebody had taped paper snowflakes to every window and somebody else had hung tinsel off the IV poles, and there was a cake from the convenience store with a plastic Santa on top, and Dr. Ziegler was sitting on a too-small chair in the middle of it all in a red felt Santa hat, reading aloud from a picture book in careful, accented Japanese to nine children who were correcting her pronunciation with tremendous joy." },
    { n: "A girl of about six in the front row had a gray one-eared rabbit in her lap. The rabbit also had a Santa hat. It also, Solar noticed, had a tongue depressor taped to one leg, though it had been months." },
    { s: 'mercy', f: 'happy', t: "Ah. Everyone, this is Nurse Solar. She's very new. Be kind to her." },
    { n: "Nine children turned to look at her with deep suspicion. Angela did not take off the hat. She did not take off the hat for the rest of the party, through the cake and the singing and a small boy crying because his balloon had popped, and she looked, sitting in that tiny chair with the felt bobble hanging over one eye, as rested as Solar had ever seen her." },
    { place: 'Tatsumi Memorial Hospital · Rooftop', time: 'Night', music: 'tender' },
    { n: "At ten her shift ended. She'd asked for that, she said on the stairs, the first time in her life she had ever asked anyone for a holiday, and the head nurse had looked at her for a long moment and then filled in the form herself, as if she was worried Angela might change her mind halfway down the page." },
    { n: "The roof was white. It had been snowing since afternoon and nobody had been up to clear it, so the snow lay smooth and untouched from the stairwell door to the railing, and the laundry lines hung empty with snow along the top of them like frosting, and the city below was muffled and soft and lit up gold in every window." },
    { n: "Angela still had the hat on. Solar didn't tell her. She'd decided somewhere around the cake that she was never going to tell her." },
    { s: 'mercy', f: 'blushing', t: "I have something for you. Open it first. I'm too nervous to watch you open it second." },
    { n: "It was the pocket dictionary. The one from the roof in the summer, the spine taped twice now, the inside cover crowded with Japanese words in a dozen different pens, otsukaresama and itadakimasu and all the rest. Solar didn't understand, and then she turned it over and opened it from the back." },
    { n: "The back pages were full too. German, this time, in Angela's neat block capitals, one word to a line, with the meaning written beside it in English. Wasser, water, drink it. Feierabend, the end of the working day, when you finally go home. Heimweh, the ache for home. Liebling, which had no translation beside it at all, only a small drawn heart, slightly lopsided, like the egg." },
    { n: "The last word on the last page said Schutzengel. Guardian angel. The ink was newer. She'd written it today." },
    { s: 'mercy', f: 'neutral', t: "So you'll have the words. When I go home, at the end of January. So there's a dictionary for me, in this world, the way there's one for you in mine." },
    { choose: [
      { t: "(Give her a water bottle. You've marked the hours down the side in pen.)", notes: 3, then: [
        { n: "Eight in the morning, ten, noon, two, all the way down to midnight, a little line at every one. Angela turned it over in her hands and read every hour, slowly, and then laughed, a wet, surprised sound, and pressed the back of her wrist to her eyes." },
        { s: 'mercy', f: 'happy', t: "This is the most romantic thing I've ever been given, and it's a bottle. I'm going to cry in front of a laundry line." }
      ] },
      { t: "(Give her a new scarf. Soft, gray, plain.)", notes: 3, then: [
        { n: "She wound it on right there, over the ugly one, because she would not take the ugly one off, she said, a patient had knitted it and the patient would know. So she stood there on the roof in two scarves and a Santa hat, enormously padded, beaming." },
        { s: 'mercy', f: 'happy', t: "I'm warm. Do you understand? I'm warm in December. That's never happened before." }
      ] },
      { t: "(Give her a box of Swiss chocolate. The import shop's entire stock.)", notes: 2, then: [
        { s: 'mercy', f: 'surprised', t: "...This is all of it. You bought all of it. Solar, there's nothing left for the other Swiss people." },
        { s: 'solar', t: "You're the only one." },
        { s: 'mercy', f: 'happy', t: "...Then it's correct. It's all correct." }
      ] }
    ] },
    { n: "They stood at the railing in the snow. The bobble of the Santa hat had gone soggy and Angela had stopped noticing it, and Solar had stopped noticing the cold, and below them a train went by, all lit up, carrying people home." },
    { s: 'mercy', f: 'neutral', t: "I woke up in bed four in June, and the first thing I thought was that someone must need me here. That's always the first thing I think." },
    { s: 'mercy', f: 'blushing', t: "And then a girl came onto my ward carrying somebody else's forms, and hated the smell of the hallway, and forgot her umbrella. And it turned out someone did need me here. It was me. I needed to be here." },
    { choose: [
      { t: "I needed you here too.", notes: 3, then: [
        { s: 'mercy', f: 'sad', t: "...I know. I knew from the first day. You stood at the foot of that bed like you'd stood at the foot of one before." },
        { s: 'mercy', f: 'blushing', t: "I'm glad it was me you came to, Liebling. Out of every doctor in this city." }
      ] },
      { t: "You kept my umbrella for two weeks.", notes: 3, then: [
        { s: 'mercy', f: 'happy', t: "It was raining. It was a medical decision." },
        { s: 'mercy', f: 'blushing', t: "...I didn't want to give it back. I wanted a reason for you to come again. I'm a terrible thief and a worse liar." }
      ] }
    ] },
    { s: 'mercy', f: 'serious', t: "When I go home, I'm going to take a day off. A real one. Once a month. I'm going to put it in writing." },
    { s: 'solar', t: "Who's going to make sure you do?" },
    { s: 'mercy', f: 'happy', t: "You are. Every world. You have the feather. I'll feel it hum when you're angry with me." },
    { n: "She kissed her then, in the snow, on the white roof, both of her cold hands on Solar's face and the soggy bobble of the hat bumping against Solar's forehead, and Solar laughed into it, and Angela laughed too, and didn't stop kissing her, which made it worse, and better." },
    { n: "At midnight the pager went off. Angela took it out of her coat and looked at it. Then, while Solar watched, she pressed the button on the side and held it down until the little screen went dark, and put it back in her pocket, and Solar understood that she had never once, in all the months she'd known her, seen her do that." },
    { s: 'mercy', f: 'blushing', t: "Feierabend. Merry Christmas, Liebling." }
  ] },
  romance: true,
  cast: { genji: 'Genji', ana: 'Ana', kiriko: 'Kiriko' },
  stamps: {},
  threads: {
    elizabeth: { name: 'Elizabeth', members: ['elizabeth'] },
    watchpoint: { name: 'the watchpoint (unofficial)', members: ['mercy', 'kiriko', 'genji'] }
  },
  texts: [
    { id: 'eliz-6-8', thread: 'elizabeth', rank: 0, before: 99, days: 0, date: '6/8', slot: 1, msgs: [
      { from: 'elizabeth', t: 'The moon is full again tonight, Solar.' },
      { from: 'elizabeth', t: 'Another has arrived. A healer, I believe. She woke in a hospital bed and has already begun rounds.' },
      { from: 'elizabeth', t: 'I find that rather admirable. And rather worrying.' }
    ] },
    { id: 'mercy-1a', rank: 1, days: 1, slot: 1, msgs: [
      { from: 'mercy', t: 'This is Dr. Ziegler. The nurses gave me your number. I hope that is all right.' },
      { from: 'mercy', t: 'You forgot your umbrella in room 304.' }
    ], reply: [
      { t: 'Keep it. You might need it more.', notes: 3, then: [{ from: 'mercy', t: 'That is very kind. I will return it when it stops raining.' }, { from: 'mercy', t: 'So, July.' }] },
      { t: "I'll come get it Thursday.", notes: 2, then: [{ from: 'mercy', t: 'Good. I will be here. I am always here, apparently.' }] }
    ] },
    { id: 'mercy-2a', rank: 2, days: 1, slot: 1, msgs: [
      { from: 'mercy', t: 'It is two in the morning and I am reading Japanese medical journals with a dictionary.' },
      { from: 'mercy', t: 'Tell me to go to sleep.' }
    ], reply: [
      { t: 'Go to sleep, Doctor.', notes: 3, then: [{ from: 'mercy', t: '...Thank you. I needed someone to say it.' }] },
      { t: 'What did you find?', notes: 2, then: [{ from: 'mercy', t: 'Nothing. Which is itself something.' }, { from: 'mercy', t: 'Goodnight, Solar.' }] }
    ] },
    { id: 'mercy-4a', rank: 4, days: 1, slot: 1, msgs: [
      { from: 'mercy', t: 'Ana says I am "working myself into a grave I will then try to resurrect myself out of."' },
      { from: 'mercy', t: 'She is very dramatic for a sniper.' }
    ], reply: [
      { t: 'She has a point.', notes: 3, then: [{ from: 'mercy', t: 'She usually does. Do not tell her I said so.' }] },
      { t: 'Can you resurrect yourself?', notes: 2, then: [{ from: 'mercy', t: 'I have never tried. I would prefer not to find out.' }] }
    ] },
    { id: 'mercy-5a', rank: 5, days: 1, slot: 1, msgs: [
      { from: 'mercy', t: 'I have been thinking about last night.' },
      { from: 'mercy', t: 'The way you moved. You were always exactly where I needed you.' },
      { from: 'mercy', t: 'Nobody does that by accident.' }
    ], reply: [
      { t: "I just knew where you'd be.", notes: 3, then: [{ from: 'mercy', t: 'Yes. That is what worries me. And what delights me.' }] },
      { t: 'Beginner\'s luck.', notes: 1, then: [{ from: 'mercy', t: 'Hm. I have treated a great many liars, Solar.' }] }
    ] },
    { id: 'mercy-6a', rank: 6, days: 1, slot: 1, msgs: [
      { from: 'mercy', t: 'I ate the bento. All of it.' },
      { from: 'mercy', t: 'Who taught you to make tamagoyaki like that?' }
    ], reply: [
      { t: 'A very grumpy senpai.', notes: 3, then: [{ from: 'mercy', t: 'Please thank him for me. Grumpily, so he believes it.' }] },
      { t: "I'll make you another one.", notes: 3, then: [{ from: 'mercy', t: 'I will not say no. I am a doctor, not a fool.' }] }
    ] },
    { id: 'mercy-8a', rank: 8, days: 1, slot: 1, msgs: [
      { from: 'mercy', t: 'Three of my Apathy patients woke up today. After the full moon.' },
      { from: 'mercy', t: 'You did that. Your team did that.' },
      { from: 'mercy', t: 'I have been a doctor for a long time and I have never been so glad to be wrong about what medicine can do.' }
    ], reply: [
      { t: 'We did it together.', notes: 3, then: [{ from: 'mercy', t: 'Yes. We did.' }] },
      { t: "You kept them alive until we could.", notes: 3, then: [{ from: 'mercy', t: '...That is the kindest thing anyone has said to me in years.' }] }
    ] },
    { id: 'mercy-9r', rank: 9, route: 'romance', days: 1, slot: 1, msgs: [
      { from: 'mercy', t: 'Liebling.' },
      { from: 'mercy', t: 'I wanted to see how it felt to type it.' },
      { from: 'mercy', t: 'It feels correct.' }
    ], reply: [
      { t: 'It does.', notes: 3, then: [{ from: 'mercy', t: 'Good. Then I will keep using it. Goodnight, Liebling.' }] },
      { t: 'What does it mean?', notes: 3, then: [{ from: 'mercy', t: 'Darling. Dearest. You.' }] }
    ] },
    { id: 'mercy-9f', rank: 9, route: 'friend', days: 1, slot: 1, msgs: [
      { from: 'mercy', t: 'I have decided you are my best friend in this world.' },
      { from: 'mercy', t: 'It is a medical decision. It is final.' }
    ], reply: [
      { t: 'Doctor\'s orders.', notes: 3, then: [{ from: 'mercy', t: 'Exactly. You are a very good patient.' }] },
      { t: 'You too, Angela.', notes: 3, then: [{ from: 'mercy', t: '...Thank you, Solar.' }] }
    ] },
    // The watchpoint: Mercy, Kiriko and Genji. Needs Kiriko 6, so Kiriko has met both of them in her own ranks (5 and 6).
    { id: 'watchpoint-4', thread: 'watchpoint', rank: 4, before: 7, days: 2, slot: 1, unlock: { links: { kiriko: 6 } }, rename: 'the watchpoint (unofficial)', msgs: [
      { sys: 'Mercy created "Daily Wellness Check-In"' },
      { from: 'mercy', t: 'Good evening, everyone! 😊' },
      { from: 'mercy', t: "Since we are all far from home, or in Solar's case far from a sensible bedtime, I thought we could check in once a day." },
      { from: 'mercy', t: 'Hours slept. Glasses of water. One meal that did not come out of a vending machine.' },
      { from: 'kiriko', t: 'mercy-sensei it is 11pm' },
      { from: 'kiriko', t: 'ur still at the hospital arent u' },
      { from: 'mercy', t: 'That is not relevant to the check-in.' },
      { from: 'genji', t: 'Good evening, Angela. I am honored to be included.' },
      { from: 'genji', t: 'I should mention that I no longer have most of the organs on this list.' },
      { from: 'mercy', t: 'You have a stomach, Genji. I put it there.' },
      { from: 'kiriko', t: 'ok thats the scariest text ive ever read' },
      { ask: [
        { t: '7 hours, 2 glasses, one onigiri.', notes: 3, then: [
          { from: 'mercy', t: 'Wunderbar! A model patient.' },
          { from: 'kiriko', t: 'teachers pet 🙄' },
          { from: 'kiriko', t: 'was it one of MY onigiri' }
        ] },
        { t: 'Angela, how many hours did YOU sleep?', notes: 2, then: [
          { from: 'mercy', t: '...' },
          { from: 'genji', t: 'The silence is its own answer.' },
          { from: 'kiriko', t: 'LMAO' }
        ] },
        { t: 'Is this mandatory?', notes: 1, then: [
          { from: 'mercy', t: 'Nothing is mandatory. It is strongly, medically encouraged.' },
          { from: 'genji', t: 'That means yes.' }
        ] }
      ] },
      { from: 'kiriko', t: 'ok my turn. 9 hours. 0 water. 4 melon pan' },
      { from: 'mercy', t: 'Kiriko.' },
      { from: 'kiriko', t: 'melon pan has water in it probably' },
      { from: 'genji', t: 'Six hours of meditation. I am told that counts double.' },
      { from: 'mercy', t: 'It does not count at all.' },
      { from: 'genji', t: 'My master would disagree.' },
      { from: 'mercy', t: 'Your master is not in this group chat.' },
      { ask: [
        { t: 'Meditation counts. I have decided.', notes: 2, then: [
          { from: 'genji', t: 'Thank you, Solar. Balance is restored.' },
          { from: 'mercy', t: 'Two of you now. Wonderful.' }
        ] },
        { t: 'Genji, where are you right now?', notes: 3, then: [
          { from: 'genji', t: 'On the roof of the shrine. The signal is better here.' },
          { from: 'kiriko', t: 'GET OFF MY ROOF' },
          { from: 'genji', t: 'It is a very peaceful roof.' },
          { from: 'kiriko', t: 'i KNOW. thats why its MINE' }
        ] },
        { t: 'Kiriko, melon pan is not water.', notes: 1, then: [{ from: 'kiriko', t: 'wow. ok. i see whose side ur on' }] }
      ] },
      { sys: 'kiriko renamed the group "the watchpoint (unofficial)"' },
      { from: 'mercy', t: 'Kiriko, why.' },
      { from: 'kiriko', t: 'bc u two are a whole tiny overwatch now. watching over me. against my will' },
      { from: 'genji', t: 'It has a certain ring to it.' },
      { ask: [
        { t: "I'm keeping it.", notes: 2, then: [
          { from: 'kiriko', t: 'SOLAR VOTES YES. 2 vs 1' },
          { from: 'genji', t: 'I abstain. Peacefully.' },
          { from: 'mercy', t: 'Fine. But the check-ins stay.' }
        ] },
        { t: 'So who watches over Angela?', notes: 3, then: [
          { from: 'genji', t: 'That has always been the question.' },
          { from: 'kiriko', t: 'us. obviously. thats the whole point of the name' },
          { from: 'mercy', t: '...I am going home now. Not because you said so.' }
        ] },
        { t: '👍', notes: 1, then: [{ from: 'kiriko', t: 'a thumbs up. ok grandma' }] }
      ] },
      { from: 'mercy', t: 'Goodnight, all of you. Drink some water. 😊' },
      { from: 'kiriko', t: 'goodnight sensei. go HOME' }
    ] },
    { id: 'watchpoint-7', thread: 'watchpoint', rank: 7, before: 10, days: 3, slot: 1, unlock: { links: { kiriko: 6 } }, rename: 'mandatory picnic (sensei is scary)', msgs: [
      { from: 'kiriko', t: 'question for the group' },
      { from: 'kiriko', t: 'why did a little bird tell me solar made mercy-sensei a BENTO' },
      { from: 'kiriko', t: 'with TAMAGOYAKI' },
      { from: 'mercy', t: 'Which little bird?' },
      { from: 'genji', t: 'I am not a bird.' },
      { from: 'kiriko', t: 'genji told me' },
      { from: 'genji', t: 'Angela mentioned it. Twice. And I do not lie to foxes.' },
      { from: 'mercy', t: 'It was an intervention. It was medically necessary.' },
      { from: 'kiriko', t: 'i ALSO need an intervention. i have eaten rice balls for nine days straight' },
      { ask: [
        { t: "I'll make you one too.", notes: 3, then: [
          { from: 'kiriko', t: 'YES' },
          { from: 'kiriko', t: 'with the egg. the egg is non negotiable 🦊' },
          { from: 'mercy', t: 'And vegetables. I will be checking.' }
        ] },
        { t: 'Nine days is honestly impressive.', notes: 2, then: [
          { from: 'kiriko', t: 'thank u. its a lifestyle' },
          { from: 'mercy', t: 'It is scurvy. Slowly.' }
        ] },
        { t: 'Angela needed it more.', notes: 1, then: [
          { from: 'kiriko', t: 'ok thats fair. she looks like a ghost who works nights' },
          { from: 'mercy', t: 'I am right here.' }
        ] }
      ] },
      { from: 'genji', t: 'I would also like a bento.' },
      { from: 'mercy', t: 'Genji, you barely eat.' },
      { from: 'genji', t: 'I would like to be asked. It is about the gesture.' },
      { from: 'kiriko', t: 'the cyborg has feelings 😭' },
      { from: 'mercy', t: "Then it is settled. Sunday. The hospital courtyard. Everyone brings something, and everyone eats it. Doctor's orders." },
      { sys: 'kiriko renamed the group "mandatory picnic (sensei is scary)"' },
      { ask: [
        { t: "I'll bring the tamagoyaki.", notes: 3, then: [
          { from: 'mercy', t: 'Wunderbar. Bring extra. Genji will pretend he does not want any.' },
          { from: 'genji', t: 'I will want some. I will say nothing.' }
        ] },
        { t: 'What is Kiriko bringing?', notes: 2, then: [
          { from: 'kiriko', t: 'vibes' },
          { from: 'kiriko', t: 'and rice balls' },
          { from: 'mercy', t: 'Kiriko.' },
          { from: 'kiriko', t: 'FINE. and a fruit' }
        ] },
        { t: 'Will Angela actually take a break?', notes: 2, then: [
          { from: 'genji', t: 'Twenty minutes. I will time her.' },
          { from: 'mercy', t: 'Forty. I am not a monster.' }
        ] }
      ] },
      { from: 'genji', t: 'If I fade before Sunday, save me a seat under the ginkgo.' },
      { from: 'mercy', t: 'We will. We always do.' },
      { from: 'kiriko', t: 'ok this got sad. new rule. no fading before sunday' },
      { ask: [
        { t: 'Seconded. No fading.', notes: 3, then: [
          { from: 'genji', t: 'Two votes. I will do my best.' },
          { from: 'mercy', t: '😊' }
        ] },
        { t: 'Genji, what does the fading feel like?', notes: 2, then: [
          { from: 'genji', t: 'Like falling asleep in a warm room. Not frightening. Only quiet.' },
          { from: 'kiriko', t: 'ok that actually helped' }
        ] },
        { t: 'Angela, go to bed.', notes: 1, then: [{ from: 'mercy', t: 'It is nine o\'clock.' }, { from: 'kiriko', t: 'solar said what we were all thinking' }] }
      ] },
      { from: 'kiriko', t: 'sunday. 12. bring the egg 🦊' }
    ] }
  ],
  ranks: [
    { after: '6/9', title: '1: rounds', place: 'Tatsumi Memorial Hospital · 3F Ward', scene: [
      { n: "Tatsumi Memorial Hospital smelled the way all hospitals smelled, antiseptic and floor wax and something under it that no amount of either could cover. Solar hated it. She'd hated it since she was seven, in a hallway, holding a juice box a nurse had given her, waiting for someone to come out of a door and tell her something she already knew." },
      { n: "She was here because Junpei had sprained his wrist doing something he refused to explain, and she'd drawn the short straw to drop off his forms. She was on the third floor because the elevator had opened there and she hadn't been paying attention." },
      { n: "The third floor was where they kept the Apathy Syndrome patients. Rows of beds. Rows of people who were alive and breathing and looking at nothing, at the ceiling, at the walls, people who had simply stopped. The whole city was afraid of it. Nobody knew what caused it. Solar did. She'd seen the shadows feeding." },
      { n: "There was a woman in the ward who wasn't a nurse." },
      { n: "She was in a white coat that didn't have the hospital's name on it, blonde hair pulled back in a practical ponytail, kneeling beside the bed of an old man and holding his wrist and talking to him, softly, in a language Solar didn't recognize, like he could hear every word." },
      { s: 'mercy', f: 'neutral', t: "...You can see me. Good. Half the staff seem to think I'm a visiting specialist, and the other half think I'm a ghost." },
      { choose: [
        { t: 'Are you a doctor?', notes: 2, then: [
          { s: 'mercy', f: 'happy', t: "Dr. Angela Ziegler. Though I'm not sure my license is valid in whatever this place is." }
        ] },
        { t: "You're not from here.", notes: 3, then: [
          { s: 'mercy', f: 'surprised', t: '...No. I am not.' },
          { s: 'mercy', f: 'neutral', t: "I woke up two nights ago in bed four. Nobody admitted me. Nobody remembers me arriving. And yet here I am, and here they are." }
        ] }
      ] },
      { n: "She looked down at the old man, at his empty, peaceful eyes, and something in her face went tired in a way that had nothing to do with two nights of no sleep." },
      { s: 'mercy', f: 'sad', t: "Every vital sign is normal. Heart, lungs, brain activity. Normal. And yet nobody is home." },
      { s: 'mercy', f: 'serious', t: "I have rebuilt people from almost nothing. I have brought soldiers back from the edge of death. And I cannot find what is wrong with a single one of them." },
      { choose: [
        { t: "It's not something medicine can fix.", notes: 3, then: [
          { s: 'mercy', f: 'surprised', t: '...You say that like you know what it is.' },
          { n: "Solar didn't answer. She didn't need to. The doctor looked at her for a long, steady moment, the look of someone reading a chart, and then nodded slowly, like she'd filed something away." }
        ] },
        { t: 'Have you slept?', notes: 2, then: [
          { s: 'mercy', f: 'happy', t: "Ha. You sound like my old commanding officer." },
          { s: 'mercy', f: 'sad', t: "...No. Not really." }
        ] }
      ] },
      { n: "Solar left Junpei's forms at the nurses' station. On the way out she passed the third floor again. The doctor was still there, at bed five now, holding another wrist, talking softly to another person who wasn't there." },
      { n: "She'd forgotten her umbrella in room 304. She didn't realize until she was halfway home in the rain, and found, oddly, that she didn't mind having a reason to go back." }
    ] },

    { after: '6/23', title: '2: the caduceus', place: 'Tatsumi Memorial Hospital · Rooftop', scene: [
      { n: "The hospital had a rooftop where the staff went to smoke, and on Thursday afternoons, Solar learned, where Dr. Ziegler went to not smoke. She stood at the railing with a paper cup of vending-machine coffee, looking at the city like it was a patient she couldn't diagnose." },
      { n: "She had something leaning against the railing beside her. A staff, white and gold, with a little set of wings at the top. It hummed very faintly, a sound so high Solar felt it more than heard it." },
      { s: 'mercy', f: 'happy', t: "Ah. My umbrella thief returns." },
      { n: "She held out the umbrella. Solar took it. Neither of them moved to leave." },
      { choose: [
        { t: 'What is that?', notes: 3, then: [
          { s: 'mercy', f: 'neutral', t: "The Caduceus. My staff. It heals, mostly. It can boost someone's strength, if they need it." },
          { s: 'mercy', f: 'sad', t: "And it can bring people back. If I'm fast enough. If the damage isn't too great." }
        ] },
        { t: "Isn't that coffee terrible?", notes: 2, then: [{ s: 'mercy', f: 'happy', t: "Dreadful. I've had four." }] }
      ] },
      { s: 'mercy', f: 'serious', t: "People think bringing someone back is a miracle. It isn't. It's a choice. Every time, I choose who. And every time, there's someone I didn't choose." },
      { n: "She said it plainly, the way soldiers do, the way people do when they've said it to themselves so many times it doesn't break anymore. Solar recognized that, too. She was starting to recognize a lot of things in the people falling into her city." },
      { choose: [
        { t: "That sounds lonely.", notes: 3, then: [
          { s: 'mercy', f: 'surprised', t: '...' },
          { s: 'mercy', f: 'sad', t: "It is. Thank you for saying so. Most people just say it sounds heroic." }
        ] },
        { t: 'You save more than you lose.', notes: 2, then: [{ s: 'mercy', f: 'neutral', t: "That's the math. The math doesn't help at three in the morning." }] }
      ] },
      { n: "They stood there until her coffee went cold. Below them the city went about its afternoon, cars and trains and people who didn't know about the hour at midnight, and Dr. Ziegler watched all of it like she was keeping it alive by looking." }
    ] },

    { after: '7/9', title: '3: genji', place: 'Tatsumi Memorial Hospital · Courtyard', scene: [
      { n: "There was a cyborg in the hospital courtyard, sitting cross-legged under the ginkgo tree, meditating." },
      { n: "Nobody else seemed to find this strange. Solar assumed it was the same thing that made people walk past the coffins in the green hour, the city's quiet agreement not to see what it couldn't explain. But she saw him: silver and white plating, a green glow at the seams, a visor where a face should be, perfectly still in the July heat." },
      { register: 'genji' },
      { s: 'mercy', f: 'happy', t: "Genji! You're here. You're actually here." },
      { s: 'genji', f: 'neutral', t: "Angela. I followed a feeling. My master would say the universe is less tidy than we think." },
      { n: "His voice was calm, a little mechanical at the edges, warm underneath. He stood and bowed to Solar, a small, precise bow." },
      { s: 'genji', f: 'happy', t: "You must be the one who keeps her from working herself into the floor. Thank you." },
      { choose: [
        { t: "I try. She doesn't listen.", notes: 3, then: [{ s: 'genji', f: 'happy', t: "She never has. That is why she is still alive. And why we all are." }] },
        { t: "How do you two know each other?", notes: 2, then: [{ s: 'mercy', f: 'sad', t: "I rebuilt him. A long time ago. When he didn't want to be rebuilt." }] }
      ] },
      { n: "They talked in the shade for an hour. Genji spoke about anger, and how long it had taken him to set it down. Angela spoke about the operating table, and how she'd kept going when he'd asked her to stop. Neither of them said sorry. It sounded like they'd both said it a long time ago and had been forgiven." },
      { s: 'mercy', f: 'neutral', t: "He hated me for years, you know. For saving him." },
      { s: 'genji', f: 'sad', t: "And then I didn't. Healing is not only for the body, Solar. She taught me that, without meaning to." },
      { n: "By evening Genji was fading at the edges, the way the visitors always did when the world remembered they didn't belong to it. He bowed again before he went." },
      { s: 'genji', f: 'serious', t: "Look after her. She will not do it herself." },
      { n: "Angela didn't cry. She just held her coffee in both hands for a long time, after, looking at the place under the tree where he'd been sitting." }
    ] },

    { after: '7/23', title: '4: ana', place: 'Tatsumi Memorial Hospital · Staff Lounge', scene: [
      { n: "The staff lounge had a broken air conditioner and a fridge full of other people's lunches, and on this particular afternoon it had an old woman in it, sitting in Angela's chair, drinking Angela's tea, with an eye patch and a sniper rifle leaned casually against the vending machine." },
      { register: 'ana' },
      { s: 'ana', f: 'happy', t: "So this is the girl. Habibti, she's younger than you said." },
      { s: 'mercy', f: 'surprised', t: "Ana! I didn't say anything about her!" },
      { s: 'ana', f: 'neutral', t: "You didn't have to. You keep looking at the door." },
      { n: "Ana Amari looked at Solar the way grandmothers look at people their grandchildren bring home, which was to say thoroughly, skeptically, and with the clear understanding that she had seen a great deal and would not be easily impressed." },
      { s: 'ana', f: 'neutral', t: "And do you take care of her? Or does she take care of you?" },
      { choose: [
        { t: "Both, I think.", notes: 3, then: [{ s: 'ana', f: 'happy', t: "Good answer. The only right one." }] },
        { t: "Nobody takes care of Angela. She won't let them.", notes: 3, then: [
          { s: 'ana', f: 'happy', t: "Ha! She knows you." },
          { s: 'mercy', f: 'flustered', t: "I am standing right here." }
        ] }
      ] },
      { s: 'ana', f: 'sad', t: "She was the youngest of us, back then. Overwatch. All those heroes, and she was the one who stayed up every night patching them back together." },
      { s: 'ana', f: 'sad', t: "And when it all fell apart, she was the one who still tried to save everybody. Even the ones who didn't deserve it." },
      { s: 'mercy', f: 'sad', t: "...Ana." },
      { s: 'ana', f: 'serious', t: "I'm only saying what's true. Someone should." },
      { n: "When Ana left, fading at the edges like the others, she patted Angela's cheek with a hand that had pulled a thousand triggers, and Solar watched the doctor lean into it for a second like a much younger woman." },
      { s: 'ana', f: 'happy', t: "Make her sleep, little one. That's an order." }
    ] },

    { after: '8/6', title: '5: guardian angel', place: 'Tatsumi Memorial Hospital · Rooftop', scene: [
      { n: "It happened during the green hour, on the hospital roof." },
      { n: "A shadow had crawled out of the third floor, out of the ward where the Apathy patients slept, a fat black shape full of reaching hands, and Angela had been there, because Angela was always there, and Solar had been there because she'd been worried about Angela, and suddenly the two of them were the only things awake on a roof under a green moon with something that wanted to eat them." },
      { n: "Angela's wings opened. Real wings, gold and white, light and metal, lifting her off the roof like the air had decided to carry her." },
      { n: "And Solar knew, without knowing how she knew, exactly where Angela was going to go." },
      { n: "She moved before the shadow did. Left, toward the water tank, where the line of sight was clean. Angela's beam caught her a half-second later, golden, warm, and Solar felt it go through her like sunlight through a window, and she hadn't even looked to see if it was coming. She just knew it would be." },
      { n: "It went on like that. Solar moving to where the beam would be, Angela flying to where Solar would need her. No words. They didn't need any. It was like a dance neither of them had learned and both of them knew." },
      { n: "When it was over, and the shadow was smoke, and the moon was going back to white, Angela landed beside her and folded her wings and stared at her." },
      { s: 'mercy', f: 'surprised', t: "Where did you learn to read a fight like that?" },
      { choose: [
        { t: "I don't know. Sometimes I dream I'm flying.", notes: 3, then: [
          { s: 'mercy', f: 'surprised', t: '...Flying.' },
          { s: 'mercy', f: 'neutral', t: "With wings like these?" },
          { n: "Solar didn't answer. She didn't have to. Angela looked at her for a long, strange moment, like a doctor looking at an X-ray that showed something that shouldn't be possible." }
        ] },
        { t: "You're easy to follow.", notes: 2, then: [
          { s: 'mercy', f: 'happy', t: "Nobody has ever said that to me. I fly like a nervous bird. My team used to complain." },
          { s: 'mercy', f: 'neutral', t: "...But you were never where I didn't expect you. Not once." }
        ] }
      ] },
      { s: 'mercy', f: 'happy', t: "Your positioning was perfect. Better than perfect. You stayed out of my way and in my line of sight at the same time. That's the hardest thing in the world to teach." },
      { n: "She laughed, breathless and surprised, the wind lifting her hair, the last of the green fading out of the sky around her." },
      { s: 'mercy', f: 'happy', t: "Heroes never die, Solar. Not while I'm watching." },
      { n: "She said it like a line she'd said a thousand times. Solar heard it like a song she'd heard a thousand times, from somewhere very far away, in another life, through a pair of headphones, with a crowd screaming." }
    ] },

    { after: '8/27', title: '6: bento', place: 'Tatsumi Memorial Hospital · Staff Lounge', scene: [
      { n: "Late August, the hottest week of the year. Angela had worked six days straight. Solar knew because the night nurse, who had decided Solar was some kind of relative, had started texting her updates in a tone of rising alarm." },
      { n: "So she'd learned to make tamagoyaki. Shinjiro had taught her, grumbling, at the dorm stove, roll it, don't fold it, you're folding it, stop folding it, and she'd made a whole bento box with rice and pickles and the slightly lopsided egg, and brought it to the staff lounge, and set it in front of Dr. Angela Ziegler like an ultimatum." },
      { s: 'mercy', f: 'surprised', t: '...What is this?' },
      { choose: [
        { t: 'Lunch. Eat it.', notes: 3, then: [
          { s: 'mercy', f: 'flustered', t: "Is this an intervention?" },
          { n: "It was absolutely an intervention. Solar sat across from her and did not leave until the box was empty." }
        ] },
        { t: 'A bribe. Go home and sleep after.', notes: 3, then: [{ s: 'mercy', f: 'happy', t: "...That's extortion. I respect it." }] }
      ] },
      { n: "Angela ate everything. She ate it the way people eat when they've forgotten they were hungry, slowly at first and then not slowly at all. When she got to the egg she stopped, and looked at it, and then at Solar." },
      { s: 'mercy', f: 'sad', t: "Nobody has made me lunch since I was a little girl in Switzerland." },
      { s: 'mercy', f: 'sad', t: "My parents were doctors too. They died in a war when I was very young. I think I've been trying to finish their work ever since." },
      { n: "Solar didn't say anything for a moment. There was a tightness in her throat that she knew the shape of. The bridge. The car. Ten years. She'd never told anyone at this hospital why she hated it." },
      { choose: [
        { t: "Mine died when I was little, too.", notes: 3, then: [
          { s: 'mercy', f: 'surprised', t: '...' },
          { n: "Angela reached across the table and put her hand on top of Solar's, warm and steady, a doctor's hand, and didn't say I'm sorry, which was exactly right." }
        ] },
        { t: "They'd be proud of you.", notes: 2, then: [{ s: 'mercy', f: 'sad', t: "I hope so. I've never been sure." }] }
      ] },
      { n: "She went home after. She slept for fourteen hours. The night nurse texted Solar a single thumbs-up emoji at midnight, which Solar chose to read as a medal." }
    ] },

    { after: '9/10', title: '7: wings', music: 'sun', place: 'Port Island · Seaside Park', scene: [
      { n: "September, after a storm. The sky over the bay was scrubbed clean, a deep cold blue, and the seaside park was empty except for the gulls and the two of them, sitting on the seawall with their feet over the water." },
      { n: "Angela had her wings folded in her lap, unclasped from the suit. Up close they were more machine than miracle, segments and joints and fine gold filaments, and she ran her thumb along an edge like someone touching an old scar." },
      { s: 'mercy', f: 'neutral', t: "Elizabeth told me something, you know. The strange woman with the book." },
      { s: 'mercy', f: 'neutral', t: "She said that in another world, you wore my wings. That you were a healer, too. At the very top. On a team that played in front of crowds, under bright lights, with the whole world watching." },
      { n: "Solar felt it the way she felt the beam on the hospital roof, warm and certain and from nowhere. A stage. A headset. A crowd so loud you could feel it in your teeth. A name in lights that wasn't quite hers." },
      { choose: [
        { t: "I think I remember. Sort of.", notes: 3, then: [
          { s: 'mercy', f: 'happy', t: "...Of course you do. You fly like someone who's done it ten thousand times." },
          { s: 'mercy', f: 'happy', t: "Peak of the ladder, Elizabeth said. Grandmaster. Whatever that means. It sounds like you were very, very good." }
        ] },
        { t: "That's impossible.", notes: 1, then: [{ s: 'mercy', f: 'happy', t: "So is a woman in a velvet elevator. And yet." }] }
      ] },
      { s: 'mercy', f: 'neutral', t: "Here." },
      { n: "She held the wings out. Solar took them, carefully, like something alive. They were lighter than they looked. Warm. They hummed in her hands, the same high hum as the staff, and for a moment the whole seawall tilted, and she was somewhere else, under hot lights, a crowd chanting, her hands on a keyboard, her voice in a headset saying something calm and quick and certain, and a teammate going down, and her finger already moving before her mind caught up." },
      { n: "Then she was back on the seawall. The gulls. The cold blue sky. Angela watching her with an expression Solar couldn't read." },
      { s: 'mercy', f: 'happy', t: "...You saw something." },
      { choose: [
        { t: "I saw myself saving someone.", notes: 3, then: [{ s: 'mercy', f: 'happy', t: "Then that's who you are. In every world. That's a good thing to find out." }] },
        { t: "(Hand the wings back, carefully.)", notes: 2, then: [{ s: 'mercy', f: 'neutral', t: "Thank you. They don't let just anyone hold them, you know. They hum louder for you." }] }
      ] }
    ] },

    { after: '9/24', title: '8: apathy', music: 'tender', place: 'Tatsumi Memorial Hospital · 3F Ward', scene: [
      { n: "Angela had figured it out. Solar could tell by the way she was standing in the third-floor ward, very still, with her arms crossed and a stack of charts against her chest and the expression of a doctor who has finally found the thing she'd been looking for and hates it." },
      { s: 'mercy', f: 'serious', t: "It's the shadows. Isn't it. The ones in the green hour. They're feeding on these people." },
      { n: "Solar had never told her. She'd never told anyone outside the dorm. But Angela had been on that roof, and Angela had charts, and Angela was the kind of person who would stare at a problem until it confessed." },
      { choose: [
        { t: "Yes.", notes: 3, then: [
          { s: 'mercy', f: 'sad', t: '...' },
          { s: 'mercy', f: 'serious', t: "Then I can't cure them. Not with medicine. Only you can. Your team. In that hour." }
        ] },
        { t: "I'm not supposed to tell anyone.", notes: 2, then: [{ s: 'mercy', f: 'serious', t: "You didn't tell me. I worked it out. There's a difference, and I'll defend it to whoever asks." }] }
      ] },
      { s: 'mercy', f: 'sad', t: "Do you know what it's like? To be the best at the thing you do, and realize it's the wrong thing?" },
      { n: "She looked at the beds. All those people. All those vital signs, normal, normal, normal, and nobody home." },
      { s: 'mercy', f: 'serious', t: "No. I refuse that. If I can't cure them, I'll keep them alive until you can. Fluids. Nutrition. Turning them every two hours. Talking to them so they don't forget what a voice sounds like." },
      { s: 'mercy', f: 'serious', t: "That's my job. That's what I can do. The rest is yours." },
      { choose: [
        { t: "Then we'll do it together.", notes: 3, then: [
          { s: 'mercy', f: 'happy', t: "...Together. Yes." },
          { n: "She uncrossed her arms. She held out her hand. Solar shook it, firm, like a contract, like two people agreeing to hold up opposite ends of the same impossible thing." }
        ] },
        { t: "You're the bravest person I know.", notes: 3, then: [{ s: 'mercy', f: 'flustered', t: "I am not. I'm just very, very stubborn. It looks similar from a distance." }] }
      ] },
      { n: "That night was a full moon. Solar went into the green hour with her team and did what she did. When she came out, exhausted, bruised, the moon going pale, her phone had a message from the hospital. Three patients had woken up." }
    ] },

    { after: '10/15', title: '9: what are you, liebling', place: 'Tatsumi Memorial Hospital · Rooftop', scene: [
      { n: "October, and the hospital roof was cold now. Angela had a scarf. It was very long and very ugly and a patient had knitted it for her, and she wore it with enormous pride." },
      { n: "She'd been different, the last few weeks. Lighter. She slept. She ate the bentos without being bullied into it. She'd started laughing at things, real laughs, surprised out of her like she kept forgetting she was allowed." },
      { s: 'mercy', f: 'neutral', t: "I need to ask you something, and I'd like you to answer like a patient, which is to say honestly, because I will know if you don't." },
      { s: 'mercy', f: 'blushing', t: "What am I to you, Solar?" },
      { route: [
        { t: "Someone I've fallen in love with.", route: 'romance', notes: 3, then: [
          { s: 'mercy', f: 'surprised', t: '...' },
          { s: 'mercy', f: 'blushing', t: "Oh. Oh, good. I was going to have to prescribe myself something if you said otherwise." },
          { n: "She laughed at her own joke, nervous and bright, and then stopped laughing, and stepped in close, and tucked a piece of Solar's hair behind her ear with the same careful hands that held the Caduceus." },
          { s: 'mercy', f: 'blushing', t: "Liebling. That's what you are. That's the word I've been trying not to say for a month." }
        ] },
        { t: "My best friend. Here, and maybe everywhere.", route: 'friend', notes: 3, then: [
          { s: 'mercy', f: 'happy', t: "...Yes. Yes, that's exactly right. That's exactly the word." },
          { n: "She looped one end of the ugly scarf around Solar's neck too, so they were stuck together, ridiculous, two people sharing a scarf on a cold roof." },
          { s: 'mercy', f: 'happy', t: "There. Now we match. Medically speaking, this is very important." }
        ] }
      ] }
    ] },

    { after: '11/12', title: '10: heroes never die', place: 'Tatsumi Memorial Hospital · Rooftop', scene: [
      { n: "November. The first snow wouldn't come for weeks, but you could smell it in the air already, that clean metal edge. The hospital roof was frosted at the corners. Angela was waiting at the railing in the ugly scarf, the Caduceus beside her, humming." },
      { s: 'mercy', f: 'neutral', t: "I have something for you." },
      { n: "She held out her hand. In her palm was a single feather from her wings. Not a real feather. A segment of gold filament and white plating, shaped like one, warm to the touch, humming very faintly when Solar's fingers closed around it." },
      { s: 'mercy', f: 'happy', t: "So you always know where I am. And so I always know where you are. In this world or any of the others." },
      { ifRoute: 'friend', then: [
        { s: 'mercy', f: 'happy', t: "You kept me alive this year, Solar. Not my body. The rest of me. I didn't know how much of me was missing until you started bringing me lunch." },
        { choose: [
          { t: "Heroes never die, right?", notes: 3, then: [
            { s: 'mercy', f: 'happy', t: "...Not while we're watching each other's backs." },
            { n: "She said it softly, like it was something private between them. In a way it was. In some other world, a crowd was still screaming it." }
          ] },
          { t: "You'd have done the same for me.", notes: 3, then: [{ s: 'mercy', f: 'happy', t: "I'd have done it worse. I can't make tamagoyaki." }] }
        ] },
        { n: "They stood on the roof until her pager went off. She ran down the stairs two at a time, the scarf flying behind her. She waved from the door. Solar waved back, the feather warm in her other hand." }
      ] },
      { ifRoute: 'romance', then: [
        { s: 'mercy', f: 'blushing', t: "I spent my whole life choosing who to save. I never thought I'd get to choose someone just for me." },
        { s: 'mercy', f: 'blushing', t: "I choose you, Liebling. In every world Elizabeth can find. In every one she can't." },
        { choose: [
          { t: "Heroes never die, Doctor.", notes: 3, then: [
            { s: 'mercy', f: 'happy', t: "...No. They don't." },
            { n: "She kissed her on the cold roof, the Caduceus humming louder and louder beside them, like it approved, like it had been waiting, gold light spilling over the frost." }
          ] },
          { t: "(Kiss her.)", notes: 3, then: [
            { s: 'mercy', f: 'surprised', t: '...!' },
            { s: 'mercy', f: 'blushing', t: "...That was against medical advice. Do it again." }
          ] }
        ] },
        { n: "Her pager went off. She ignored it for exactly eleven more seconds, which for Dr. Angela Ziegler was a declaration of love on the scale of a symphony." }
      ] }
    ] }
  ]
});
