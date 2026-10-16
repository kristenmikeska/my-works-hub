/* Saori Hasegawa · IX The Hermit. Arrives 4/28. Format notes are at the top of akihiko.js.
   An ordinary Gekkoukan 2nd-year on the library committee; she knows nothing about the Dark Hour.
   The festival (rank 5) comes before the Bookworms book club (rank 6) so Rohan, who arrives 9/5, can be there to draw them.
   Her favorite novel, "A Year of Small Weather" by Hiromi Ozaki, is invented, so every quote from it is ours.
   Rank 7 sits ten days after 10/4 and nods at it only from Solar's side, without naming anything. */
FemcSocial.define({
  id: 'saori', name: 'Saori Hasegawa', short: 'Saori', arcana: 'Hermit', numeral: 'IX', from: 'Persona 3 Portable',
  arrives: '4/28',
  home: { place: 'Gekkoukan High · Library', slot: 0, days: [1, 3, 5], hint: 'After school on Mondays, Wednesdays and Fridays, at the library desk.' },
  approach: "At the library desk, a girl with her cardigan sleeves pulled down over her hands is stamping due dates very carefully, and flinching a little every time the door opens.",
  invite: {
    ask: ["Good afternoon. Are you busy? It's alright if you are. The library is very quiet today, that's all.", "I'm shelving returns... I saved the poetry cart for you. Only if you want.", "Sorry to message out of nowhere. Would you like to read in the same room as me for a while? We don't have to talk.", "The new books came in. I haven't opened the box yet. I thought... maybe you'd want to be there.", "Is now a bad time? The desk is very boring without you. That sounds strange. Sorry.", "I have two of the good bean-paste breads from the shop. I can't eat both. I've tried.", "There's a book I want to show you. Not to read. Just to show you. It has very nice endpapers.", "The library has its window open and it smells like rain. I thought you should know."],
    ok: ["Oh! Good. I'll be at the desk.", "Thank you. I'll save you the chair by the window.", "Okay. I'll pretend I'm not watching the door."],
    no: ["That's alright! Really. Another time.", "Of course. Sorry for asking. Not sorry. I'm practicing.", "Okay. I'll save the chair anyway."]
  },
  hangouts: [
    [
      { n: "The returns cart was full, and Saori had a system, and the system was that she read the first line of every book before she put it back on the shelf. Not the blurb. The first line. She said it was like saying hello to someone on their way home." },
      { n: "The library was nearly empty. Somebody's pencil was scratching away in the reference corner, and the radiator ticked, and the afternoon came in long and yellow through the windows over the 900s." },
      { s: 'saori', f: 'neutral', t: "\"The kettle had been boiling for an hour before anyone noticed.\" ...Oh. I like that one. It's a cookbook." },
      { choose: [
        { t: "(Take a book off the cart and read her the first line.)", notes: 3, then: [
          { n: "It was a chemistry textbook. The first line was about the definition of matter. She read it with such gravity, such careful respect, that Saori had to put her forehead down on the cart for a second." },
          { s: 'saori', f: 'happy', t: "...Hello, chemistry. Welcome home." }
        ] },
        { t: "Doesn't that take forever?", notes: 2, then: [
          { s: 'saori', f: 'neutral', t: "Yes. That's the nice part." }
        ] },
        { t: "(Shelve them as fast as you can.)", notes: 1, then: [
          { n: "She shelved six books in a minute. Saori watched her do it with the polite, pained expression of someone watching strangers walk past each other in a station without speaking." }
        ] }
      ] },
      { n: "They got through the whole cart by five. Saori knew the first line of every single book in it. Solar knew the first line of about four, and one of them was the chemistry one, and she suspected she would know it for the rest of her life." }
    ],
    [
      { n: "The date stamp at the circulation desk was an old brass thing with little wheels you rolled with your thumb, and today it had decided, with no warning, that the due date was the fourteenth of March, 1987." },
      { s: 'saori', f: 'sad', t: "I'm so sorry. I've stamped three books already. Three people think they have twenty-two years to return them." },
      { choose: [
        { t: "Honestly, that's how long I'd need.", notes: 3, then: [
          { s: 'saori', f: 'happy', t: "..." },
          { n: "She laughed into her sleeve, the soft startled way she always did, like the laugh had gotten out before she could check whether it was allowed." }
        ] },
        { t: "(Fix the wheels with your thumbnail.)", notes: 2, then: [
          { n: "It took two minutes and a broken nail, and the stamp came out right, crisp purple ink on the little card. Saori looked at it like Solar had performed surgery." }
        ] },
        { t: "Just write the dates by hand.", notes: 1, then: [
          { s: 'saori', f: 'neutral', t: "...My handwriting is very small. Nobody would be able to read it. They'd keep the books forever anyway." }
        ] }
      ] },
      { n: "Later, in the margin of the return log, in handwriting that was in fact very small, she wrote a note to whoever had the desk tomorrow. Stamp is temperamental. Be patient with it. It's old." }
    ],
    [
      { n: "A first-year came up to the desk with her hands clasped and asked, in a voice like a mouse, if there was a book that would make her feel better about not making the volleyball team." },
      { n: "Saori froze. Not the way people freeze when they don't know the answer. The way they freeze when they know thirty answers and are terrified of picking the wrong one." },
      { choose: [
        { t: "(Nudge Saori with your elbow.)", notes: 3, then: [
          { n: "Saori blinked. Then she came around the desk, walked straight to the fiction shelves without looking at a single label, and pulled out a slim blue paperback about a girl who loses a race and finds a dog." },
          { s: 'saori', f: 'neutral', t: "The dog doesn't die. I checked. I always check." }
        ] },
        { t: "Have you tried a book about volleyball?", notes: 1, then: [
          { n: "The first-year's face fell slowly, like a cake. Saori stepped in with a gentle cough and a much better book, and Solar decided to leave recommendations to professionals." }
        ] },
        { t: "She knows. Give her a second.", notes: 2, then: [
          { s: 'saori', f: 'flustered', t: "I... yes. Sorry. I do know. One second." }
        ] }
      ] },
      { n: "The first-year came back the following week to say the book had helped. Saori said that was wonderful, very calmly, and then went into the back office and stayed there for a while, and came out a little pink." }
    ],
    [
      { n: "There was a box under the desk labeled, in neat marker, BOOK HOSPITAL. Inside were the casualties. A cracked spine. A water-swollen atlas. A paperback somebody had obviously dropped in a bath and then tried to dry with a hair dryer." },
      { s: 'saori', f: 'neutral', t: "We're not supposed to fix them ourselves. We're supposed to send them out. But the forms take months, and they're just sitting here, so..." },
      { n: "She had book tape and a bone folder and a jar of glue with a brush in the lid, and she worked on the atlas the way someone might set a bird's wing, with her tongue caught very slightly between her teeth." },
      { choose: [
        { t: "(Hold the pages flat while she tapes.)", notes: 3, then: [
          { n: "They worked without talking. Her fingers moved, and Solar's held still, and the tape went down in long even strips, and when it was done the atlas closed properly for the first time in what might have been years." },
          { s: 'saori', f: 'happy', t: "There. Discharged." }
        ] },
        { t: "Your secret's safe with me.", notes: 2, then: [
          { s: 'saori', f: 'flustered', t: "It's not a secret. It's just... not mentioned." }
        ] },
        { t: "Wouldn't it be easier to buy new ones?", notes: 1, then: [
          { s: 'saori', f: 'sad', t: "Easier. But then this one would just be... gone." }
        ] }
      ] },
      { n: "The bath book was beyond saving. Saori put it back in the box anyway, gently, and said she'd try again next week, and Solar believed her." }
    ],
    [
      { n: "Saori kept a small tin behind the desk, a biscuit tin with a faded picture of a lighthouse on the lid, and in it was everything people had ever left in returned books." },
      { n: "A bus ticket from Kyoto. A pressed maple leaf. A fortune slip from Naganaki Shrine that said Great Blessing, which someone had apparently not wanted. A receipt for one melon bread and one milk. A photograph of a cat, very blurry, very loved." },
      { s: 'saori', f: 'neutral', t: "I can't throw them away. They were holding someone's place." },
      { choose: [
        { t: "(Add something of your own to the tin.)", notes: 3, then: [
          { n: "She had a ticket stub in her blazer pocket from the monorail. She put it in, on top of the cat. Saori looked at it for a long moment, and then put the lid back on very carefully, like the tin had just gotten slightly more valuable." }
        ] },
        { t: "Someone threw away a Great Blessing?", notes: 2, then: [
          { s: 'saori', f: 'happy', t: "I know. I think about it a lot. Maybe they already had one." }
        ] },
        { t: "Isn't that a bit creepy?", notes: 1, then: [
          { s: 'saori', f: 'sad', t: "...Maybe. I hadn't thought of it that way." },
          { n: "She looked at the tin like it had been insulted, and didn't open it again that day." }
        ] }
      ] }
    ]
  ],
  // After rank MAX on the romance route, each visit plays the next date in order (then they rotate).
  // The game never closes her link, so every date is set in the weeks before Sendai, with the move still ahead.
  dates: [
    { title: 'the breakwater', place: 'Port Island · Harbor', scene: [
      { n: "There was a lighthouse at the end of the Port Island breakwater. Not a real one, not anymore, not a keeper's lighthouse, only a small white concrete tower with a red light on top that blinked every four seconds for the ferries, and Saori had lived in this city for three years and had never once walked out to it." },
      { s: 'saori', f: 'flustered', t: "I've read about forty lighthouses. I've never touched one. I was always afraid it would be... smaller. Than in books. And then I'd have to know that." },
      { n: "The breakwater ran a long way out into the bay, a concrete path with a rail on one side and open water on the other, and it was cold out there the way only the sea is cold, a wet cold that came through your coat and settled in your bones. Saori had her cardigan on under her coat and her scarf up to her nose and her hand in Solar's pocket, where it had been since the station, where neither of them had said a word about it." },
      { n: "The tower got bigger as they walked. It did not get very big." },
      { choose: [
        { t: "It's smaller than in books.", notes: 2, then: [
          { s: 'saori', f: 'sad', t: "...It is. It's a lot smaller." },
          { n: "She stood looking at it with her scarf pulled up, and for one awful second Solar thought she'd ruined it. Then Saori laughed into the scarf, small and helpless." },
          { s: 'saori', f: 'happy', t: "It's so small. It's doing its best. Look at it blinking. Oh, I love it." }
        ] },
        { t: "(Let go of her hand. Let her walk the last part alone.)", notes: 3, then: [
          { n: "Solar slowed and let go, and Saori looked back once, uncertain, and then walked the last twenty meters on her own and laid her bare palm flat against the white concrete and stood there like that, very still, with the red light going on and off above her every four seconds." },
          { n: "When she came back her eyes were bright and her hand was red with cold, and she put it straight back into Solar's pocket like it lived there." }
        ] }
      ] },
      { s: 'saori', f: 'neutral', t: "There's a line in A Year of Small Weather. When she finally sees his lighthouse from the cliff, she writes, It is only a light. I had built it a whole person." },
      { s: 'saori', f: 'sad', t: "I always thought that was the saddest line in the book. That she was disappointed." },
      { s: 'saori', f: 'happy', t: "But I think now she wasn't. I think she was relieved. That it was only a light. That it was real enough to touch." },
      { n: "They sat at the very end of the breakwater with their backs against the little tower, the concrete cold through their coats, and watched the evening ferry go out to the mainland lit up gold, while the red light blinked above their heads, patient, every four seconds, like someone taking a pulse." },
      { s: 'saori', f: 'flustered', t: "Can I tell you something? It's very embarrassing." },
      { s: 'saori', f: 'flustered', t: "In May I thought you were someone I'd made up. Someone I'd read. You sat down at my table, and I went home and thought, that didn't happen. People don't do that." },
      { choose: [
        { t: "And now?", notes: 3, then: [
          { s: 'saori', f: 'neutral', t: "Now you're real enough to touch." },
          { n: "She reached up with her cold hand, slowly, the way she'd reach for a book on a high shelf, and touched Solar's face, her cheek, the line of her jaw, as if she were checking, and then kissed her, carefully, against the side of the little lighthouse, with the red light going on and off above them like it was keeping watch." }
        ] },
        { t: "I'm only a light, Saori.", notes: 3, then: [
          { s: 'saori', f: 'surprised', t: "..." },
          { s: 'saori', f: 'happy', t: "...No. You're the whole person. I checked." },
          { n: "She kissed her then, quick, startled at herself, and then again more slowly, her cold fingers on Solar's jaw, while the red light blinked over them every four seconds, like it was keeping count." }
        ] }
      ] },
      { n: "Walking back, Saori counted the blinks out loud until they were too far away to see. She got to three hundred and twelve. Then she wrote the number down in the little notebook she kept in her coat, under the date, and under that, very small, she wrote something else, and covered it with her hand when Solar tried to look." }
    ] },
    { title: 'locked in', place: 'Gekkoukan High · Library', music: 'joy', scene: [
      { n: "Ms. Ozawa had asked Saori to come in for one last inventory, and Saori had asked Solar, and that was how they came to be in the Gekkoukan library on a gray afternoon with the heating turned down to its holiday setting and the whole building empty around them, counting the 800s." },
      { n: "Ms. Ozawa left at four. She said lock up when you're done, dear, and put the big brass key into Saori's hand, and went, and the door swung shut behind her, and in the quiet that came after it they both heard, very clearly, the bolt slide home on its own." },
      { s: 'saori', f: 'surprised', t: "...Oh no." },
      { n: "The key went in. The key did not turn. The key, as it had every single day for eight months, stuck, and this time, with the cold in the building, it stuck all the way. Saori tried it gently. She tried it firmly. She tried it with both hands and one foot braced against the door, which Solar had not known she was capable of." },
      { s: 'saori', f: 'sad', t: "This is it. This is the bad luck. It waited for the very end. It's been saving up." },
      { choose: [
        { t: "Saori. We're locked in a library. This is the best thing that's ever happened to you.", notes: 3, then: [
          { s: 'saori', f: 'surprised', t: "..." },
          { n: "She looked at the door. She looked at the stacks behind them, rows and rows going back into the gray dark, ten thousand books and nobody to stop them." },
          { s: 'saori', f: 'happy', t: "...Oh. Oh, it is, isn't it." }
        ] },
        { t: "(Call the janitor. Then sit down on the floor with her.)", notes: 2, then: [
          { n: "The janitor said an hour, maybe two, he was across town. Solar sat down on the floor with her back against the circulation desk, and after a moment Saori sat down next to her and pulled her cardigan sleeves over her hands and said that two hours wasn't so bad, really. Not with company." }
        ] }
      ] },
      { music: 'tender' },
      { n: "The stack lights were on a timer, and the timer had gone with Ms. Ozawa, so the only light left was the green lamp on the evening desk. They sat in its circle. Outside the windows over the 900s the sky went from gray to dark blue to black, and it began, softly, to snow." },
      { n: "Saori went and fetched the returns cart, because of course she did. She wheeled it into the lamplight and took the first book off and opened it and read the first line out loud, very softly, to the empty room, like saying hello to someone on their way home." },
      { s: 'saori', f: 'neutral', t: "\"Nobody in the village could remember who had planted the orchard.\" ...That one's nice. Your turn." },
      { n: "They went through the whole cart that way, taking turns, first lines only. A cookbook. A history of salt. A detective novel that began with a body and a romance that began with a train. Somewhere around the twentieth book Solar realized that Saori had stopped reading the lines to the room and had started reading them to her, looking up after every one, to see." },
      { n: "Somewhere around the thirtieth, they had moved closer on the floor without either of them deciding to, until Saori's shoulder was against hers and the cardigan sleeve lay against the back of her hand, light as a page, the way it had on the shrine steps in August." },
      { s: 'saori', f: 'flustered', t: "Here's one. \"She had read about it a hundred times, and still she was not ready.\"" },
      { s: 'saori', f: 'flustered', t: "...That's not actually the first line of anything. I made it up. Sorry. I'm not sorry." },
      { choose: [
        { t: "What's the second line?", notes: 3, then: [
          { s: 'saori', f: 'flustered', t: "I don't know yet. I didn't... I didn't write that far." },
          { s: 'solar', t: "Then let's find out." },
          { n: "Saori set the book down on the cart without looking, and it slid off and hit the floor with a flat clap that echoed through the whole empty library, and neither of them so much as flinched. Not even Saori. She was busy." }
        ] },
        { t: "(Kiss her before she can apologize again.)", notes: 3, then: [
          { n: "Solar kissed her before she could apologize again. Saori made a small, surprised sound into it, and dropped the book, which hit the floor with a flat clap that echoed through the whole empty library, and for once in her life she did not flinch at a sound." }
        ] }
      ] },
      { n: "The janitor came at seven. He found them sitting on the floor in the green lamplight a very long way apart, extremely interested in a returns cart. He opened the door with one hard shove of his shoulder and said this lock's been sticking since 1987, and Saori laughed so hard she had to hold on to the desk." },
      { n: "On the steps outside, in the snow, she said it was the best bad luck she had ever had. Then she said it was possible it hadn't been bad luck at all. That some doors stick so you'll stay." }
    ] },
    { title: 'the dorm full of boys', place: 'Iwatodai Dorm · Lounge', music: 'joy', scene: [
      { n: "Saori had never been inside the dorm. She had heard about it, the way the whole school had heard about it, mostly from Ōmori, mostly in the tone people used for haunted houses. The dorm full of boys. The girl who came home at strange hours. She stood on the front step now in her good coat with a box of cakes from the bakery by the station held out in both hands like a shield, or a peace offering, or both." },
      { s: 'saori', f: 'flustered', t: "Is this too many cakes? I didn't know how many people. I got twelve. Is twelve strange? I can go back." },
      { n: "Inside, the lounge was warm and loud and smelled of somebody's instant noodles, and the first person to see them was Junpei, who was lying upside down on the couch with his feet over the back, and who looked at Saori, and sat up so fast he fell off it." },
      { s: 'junpei', f: 'surprised', t: "Whoa. Hasegawa. Hi. Hey. Hi." },
      { n: "He got up. He stood there. He took his cap off, which Solar had never once seen him do indoors, and held it against his chest, and his ears went red." },
      { s: 'junpei', f: 'sad', t: "Hey, so. Back in May. The stuff I said. About the car and the guy. I was just passing it on, but that's, like. That's still saying it. So. I'm really sorry." },
      { choose: [
        { t: "(Let Saori answer.)", notes: 3, then: [
          { n: "Solar didn't say anything. She looked at Saori, and Saori looked at Junpei for a long moment, holding the cake box, with an expression Solar had last seen on her at the committee table in October." },
          { s: 'saori', f: 'neutral', t: "Thank you, Iori-kun. It was my father. He brings me a book every month." },
          { s: 'saori', f: 'happy', t: "...Would you like a cake? There are twelve." },
          { s: 'junpei', f: 'happy', t: "Dude. Yes. Thank you. You're, like, a good person." }
        ] },
        { t: "Took you long enough, Junpei.", notes: 2, then: [
          { s: 'junpei', f: 'sad', t: "I know, I know. I'm slow. I'm a slow guy. Ask anyone." },
          { s: 'saori', f: 'happy', t: "...It's all right. Would you like a cake? I brought twelve." }
        ] }
      ] },
      { n: "Yukari came downstairs at the sound of the word cake, saw Saori, said Saori!, and hugged her, which made Saori go stiff as a board and then, slowly, pink and pleased. They talked about the book club for twenty minutes. Yukari confessed she'd finished A Year of Small Weather. Saori asked, with deep suspicion, in what order. Yukari said in order. Saori looked at her for a long time and decided to believe her." },
      { s: 'yukari', f: 'neutral', t: "Okay, you two, go. Go upstairs. I'll guard the cakes from Junpei." },
      { place: "Iwatodai Dorm · Solar's Room", time: 'Evening', music: 'tender' },
      { n: "Solar's room was small and very neat, because it had always been small and very neat, in every town. Saori stood in the doorway with her hands in her sleeves and looked at it for a long time, and Solar watched her see it. The one suitcase in the corner that had never quite been unpacked. The bare walls. The single shelf with nine books on it." },
      { s: 'saori', f: 'sad', t: "You only have nine books." },
      { s: 'solar', t: "I move a lot. Books are heavy." },
      { choose: [
        { t: "I used to leave them behind. In every town. In the school library, on my last day.", notes: 3, then: [
          { s: 'saori', f: 'sad', t: "...So you were someone's tin. Someone found your books, and you were holding their place, and you never knew." },
          { n: "She said it so gently that Solar had to look at the window for a while." }
        ] },
        { t: "Go on. Judge them. I know you want to.", notes: 2, then: [
          { s: 'saori', f: 'happy', t: "I would never. ...The swimmer one is very good. The romance is terrible. You know it's terrible." },
          { s: 'solar', t: "I know." }
        ] }
      ] },
      { n: "Saori took off her coat and sat on the end of the bed, carefully, as if it were a pew. Then she took a book out of her bag. Then another. Then a third. She lined them up on Solar's shelf beside the nine, spines out, straightening them with one finger until they were exact." },
      { s: 'saori', f: 'flustered', t: "Three of mine. Not to borrow. To keep. So when I'm in Sendai there'll be something of mine on your shelf, and you'll have twelve, and twelve is a much better number than nine." },
      { s: 'saori', f: 'flustered', t: "Twelve's the number of cakes. I didn't plan that. I'm only noticing it now." },
      { n: "They read on the bed for the rest of the evening, side by side against the wall with their shoulders touching, a book each, not talking. Downstairs Junpei was laughing at something on the television. The radiator ticked. At some point Saori's head tipped onto Solar's shoulder, and at some point after that Solar realized she hadn't turned a page in twenty minutes, because she was listening to Saori breathe." },
      { n: "When it was time to go, Saori stood in the doorway again and looked back at the shelf, at the twelve books, at the room, which looked, Solar thought, very slightly less like somewhere she was about to leave." },
      { s: 'saori', f: 'happy', t: "It isn't a haunted house at all. It's just a house, with you in it." }
    ] },
    { title: 'once a month', place: 'Port Island Station · Family Restaurant', scene: [
      { n: "The silver car came once a month, the way it always had, and parked exactly where it always parked, by the school gate, and Mr. Kōno stood beside it in his gray suit holding a paper bag from a bookstore in both hands, and this time, when he saw Saori come through the gate holding Solar's hand, he didn't look surprised at all." },
      { s: 'saori', f: 'flustered', t: "I asked if you could come. To dinner. It's the last one before Sendai. He said yes before I'd finished asking." },
      { n: "The family restaurant was the kind with laminated menus and a drink bar and a call bell on every table, warm and bright and loud with children, and Mr. Kōno ordered the hamburg steak without looking, and so did Saori, and Solar understood that they had been ordering the same thing at this table once a month for years." },
      { n: "He gave Saori the book. It was about the lighthouses of the Tōhoku coast, the ones near Sendai, with photographs. She held it in both hands and didn't open it for a while." },
      { s: 'kono', t: "So you'll have somewhere to visit. Up there. I don't know if I got it right." },
      { s: 'saori', f: 'sad', t: "...You got it right." },
      { n: "They didn't talk much, the two of them. Solar saw that it had never been about talking. He asked about her classes. She asked about his work. He refilled her melon soda from the drink bar without asking, twice, and she let him, and that was the conversation." },
      { choose: [
        { t: "(Tell him about the committee. The way she stood up in October.)", notes: 3, then: [
          { n: "She told him about the committee meeting, the long table, Ōmori, Saori standing up. She told it well. Mr. Kōno put his fork down halfway through and didn't pick it up again, and when she reached the part where the whole room went silent, he looked across the table at his daughter like he'd never seen her before, and had been waiting to." },
          { s: 'kono', t: "...You did that?" },
          { s: 'saori', f: 'flustered', t: "I was shaking for an hour after." },
          { s: 'kono', t: "So was I, every time I ever stood up for anything. That's how you know it counted." }
        ] },
        { t: "(Let them have the quiet. Eat your hamburg steak.)", notes: 2, then: [
          { n: "She ate her hamburg steak. It was very good, in the way only family restaurant hamburg steak is good, and the quiet at the table was not an empty quiet. It was full of something that had been there for a long time and didn't need her to fill it." }
        ] }
      ] },
      { n: "At the end, while he was paying, Saori sat very straight in the booth with her hands in her lap, and Solar watched her take a breath and hold it, rehearsed, worn smooth." },
      { s: 'saori', f: 'serious', t: "Father. Solar isn't my friend." },
      { n: "Mr. Kōno looked up from his wallet. Saori's hands were white in her lap and her ears were scarlet, and she didn't look away." },
      { s: 'saori', f: 'serious', t: "I mean she is. But she's more. I'm in love with her. I wanted you to know. From me. So that it's mine, and not anybody else's." },
      { n: "The restaurant went on being loud around them. A bell rang at another table. A child cried and was hushed. Mr. Kōno stood there with his wallet open for a very long moment, and then he put it away, and looked at Solar, and bowed, low, the way you bow to someone's family." },
      { s: 'kono', t: "Then please take care of her. From here, and after. She's very easy to love. I was only ever very bad at showing it." },
      { place: 'Iwatodai Station', time: 'Night', music: 'tender' },
      { n: "He dropped them at Iwatodai Station because Saori asked to walk the last part. It was snowing, wet and heavy, the kind that turned to slush the moment it landed, and Solar put up her umbrella, the same black ordinary one from June, not quite big enough for one person, let alone two." },
      { n: "Saori stepped in under it. She didn't step out. Not an inch, not once, the whole way. She held Solar's arm in both hands and walked so close that they had to match steps, and both their shoulders stayed dry, which Solar would have said was impossible with that umbrella." },
      { choose: [
        { t: "You told him.", notes: 3, then: [
          { s: 'saori', f: 'surprised', t: "I told him. I did that. In a family restaurant." },
          { s: 'saori', f: 'happy', t: "...Nothing went wrong. I keep waiting for it to and it keeps not happening." }
        ] },
        { t: "(Don't say anything. Just walk.)", notes: 3, then: [
          { n: "They didn't say anything. The snow ticked on the umbrella. At the laundromat the warm clean air came breathing out into the cold, and Saori stopped under the awning, the way she had in June, and turned, and looked at Solar a second longer than she looked at anything." }
        ] }
      ] },
      { s: 'saori', f: 'neutral', t: "In June I kept stepping out from under this. So you'd have more room." },
      { s: 'saori', f: 'happy', t: "I don't want more room anymore." },
      { n: "She kissed her under the laundromat awning with the umbrella still up and the snow coming down all around, and the umbrella tipped back, and snow got into both their hair, and Saori laughed against Solar's mouth and didn't let go of her arm. Then she went inside, and stopped on the stairs, and came back down, and kissed her again, quickly, and went up for real, and didn't look back, and then did." }
    ] }
  ],
  // P3's Christmas Eve: on 12/24 evening, if Solar is romancing several people (rank 9+), she picks one; this plays.
  christmas: { place: 'Iwatodai Strip · Bookworms', scene: [
    { n: "The old couple at Bookworms closed early on Christmas Eve, the wife said, because her husband liked to be asleep by eight on holidays, and asleep in his own bed, not behind the counter. But she left the light on. She left the heater on. She set the key on the counter beside a plate with two small Christmas cakes on it, strawberries on top, and said lock up when you're done, girls, and went upstairs, and her husband followed her, waving, half asleep already." },
    { n: "So they had it to themselves. The whole small shop, the narrow aisles going back into the warm dark, old paper and dust and the kerosene heater ticking, the bell over the door that rang once when Saori shut it behind them and then went quiet. Outside the front window it was snowing on the Iwatodai Strip, big slow flakes coming down through the shop lights and the paper lanterns someone had strung along the street." },
    { s: 'saori', f: 'flustered', t: "I asked her if we could. I've never asked anyone for anything like that. She said she'd been waiting all year for one of us to ask." },
    { n: "They sat at the back table by the art books, where a man with a pen like rain had once drawn them without asking. Saori had her soft old copy of A Year of Small Weather on the table in front of her, closed, and she kept laying her hand flat on the cover as if she were keeping it warm." },
    { s: 'saori', f: 'neutral', t: "I want to give you your present first, before I lose my nerve. I have very little nerve. I've been using it all month." },
    { n: "It was a fountain pen. Dark green, like the lamp on the evening desk, in a narrow box lined with cream silk. It was obviously, terrifyingly expensive, and she had obviously saved for it, and when Solar opened the box Saori put both hands over her face." },
    { s: 'saori', f: 'flustered', t: "In the book, he never writes back. The keeper. For three hundred pages. I always wanted to give him a pen." },
    { s: 'saori', f: 'flustered', t: "So. You have no excuse. That's all. That's the whole present." },
    { choose: [
      { t: "(Give her a box of envelopes. Fifty-two. Already addressed to you, already stamped.)", notes: 3, then: [
        { n: "Saori lifted the lid and went very still. Fifty-two envelopes, one for every week of a year, each addressed in Solar's handwriting to Solar at the dorm, each stamped in the corner, ready." },
        { s: 'saori', f: 'surprised', t: "...So I have no excuse either." },
        { s: 'solar', t: "So neither of us gets to be a lighthouse." },
        { n: "Saori counted them. All fifty-two. Then she put the lid back on very carefully, the way she closed the tin behind the library desk, as though it had just become the most valuable thing she owned." }
      ] },
      { t: "(Give her an umbrella. A big one. For two.)", notes: 3, then: [
        { n: "It was enormous. Navy blue, with a wooden handle, and when Saori put it up in the middle of the narrow aisle it filled the aisle from shelf to shelf and she had to duck under the art books." },
        { s: 'saori', f: 'happy', t: "It fits two people. It fits four people. Solar, it's bad luck to open an umbrella indoors." },
        { s: 'solar', t: "Nothing's going to go wrong." },
        { s: 'saori', f: 'happy', t: "...No. I don't think it is." }
      ] }
    ] },
    { n: "Then Saori opened A Year of Small Weather to the very last page. Solar had never seen her do that. Nobody had. She had stopped Yukari, in writing, from doing exactly this. She sat with the book open on the table between them and one finger on the page, and the heater ticked, and the snow came down outside." },
    { s: 'saori', f: 'neutral', t: "Some things you're only allowed to know in order. That's what I always said. I think we're in order now. I think we've reached it." },
    { s: 'saori', f: 'flustered', t: "Can I read it to you? The end? I've never read it out loud to anyone." },
    { choose: [
      { t: "Read it to me.", notes: 3, then: [
        { n: "She read it. Her voice was low and steady and only shook once." },
        { s: 'saori', f: 'neutral', t: "\"The reply, when it came, was one line long. I have read every one, it said. I kept the light on.\"" },
        { n: "She closed the book. She didn't look up. Her ears were scarlet and her hand was flat on the cover, and when Solar laid hers over it, Saori turned her palm up underneath and held on." }
      ] },
      { t: "Don't read it. Tell me.", notes: 3, then: [
        { s: 'saori', f: 'surprised', t: "...Tell you?" },
        { s: 'solar', t: "Like it's yours." },
        { n: "Saori closed the book and looked at her across the table and said it without the page, because she had known it by heart since she was thirteen." },
        { s: 'saori', f: 'neutral', t: "He writes back. One line. He says, I have read every one. I kept the light on." }
      ] }
    ] },
    { s: 'saori', f: 'sad', t: "This year I thought I was writing to nobody. For so long. Sitting at the desk, waiting for someone to come, and nobody coming. And then you brought back a book three weeks late." },
    { s: 'saori', f: 'happy', t: "You read every one. You kept the light on. I don't know how else to say it. That's what this year was." },
    { n: "Solar thought about the year. The towers book under her flashlight in May. The coffins in the street. The nights she'd come home at one in the morning with her hands shaking, and the chair by the window that was always empty, with a book on it, waiting." },
    { s: 'solar', t: "You kept a chair for me. Every day. Before I ever said I'd come." },
    { s: 'saori', f: 'flustered', t: "...I'm going to keep one in Sendai, too. By the window. With a book on it. Wherever I live, for the rest of my life, there's going to be a chair that's yours." },
    { s: 'saori', f: 'flustered', t: "That's a promise. I don't make very many. I'm told I'm very good at keeping them." },
    { n: "She kissed her at the back of Bookworms, between the art books and the window, with the snow coming down outside on the paper lanterns and the heater ticking and the two little cakes forgotten on the counter. Her hand caught in the front of Solar's coat and held on. When they broke apart she rested her forehead against Solar's and laughed, small and astonished, like a girl reading the last line of a book she'd been afraid to finish, and finding it was kind." },
    { s: 'saori', f: 'happy', t: "Merry Christmas. Nothing went wrong." },
    { s: 'solar', t: "Merry Christmas, Saori. Nothing's going to." }
  ] },
  romance: true,
  cast: { junpei: 'Junpei', yukari: 'Yukari', rohan: 'Rohan', kono: 'Mr. Kōno', omori: 'Ōmori', ozawa: 'Ms. Ozawa' },
  threads: { bookclub: { name: 'two-person book club', members: ['saori', 'yukari'] } },
  texts: [
    { id: 'saori-1a', rank: 1, days: 1, slot: 1, msgs: [
      { from: 'saori', t: "Good evening. This is Saori Hasegawa, from the library committee. I'm sorry to message so late." },
      { from: 'saori', t: "I looked you up in the student directory. That sounds bad. I'm sorry." },
      { from: 'saori', t: "I wanted to say that I put the 210 yen in the fine jar myself. Please don't tell anyone... I think you were having a long week." }
    ], reply: [
      { t: "Saori. You can't pay my fines.", notes: 3, then: [{ from: 'saori', t: "I already did. It's too late. The jar has it now." }, { from: 'saori', t: "You can owe me a book recommendation instead." }] },
      { t: "Thank you. I owe you one.", notes: 2, then: [{ from: 'saori', t: "You don't owe me anything. Please return your books on time, though. For your own sake." }] }
    ] },
    { id: 'saori-2a', rank: 2, days: 1, slot: 1, msgs: [
      { from: 'saori', t: "Thank you for sitting with me today." },
      { from: 'saori', t: "You didn't have to. People will probably say things about you now, too... I'm sorry in advance." }
    ], reply: [
      { t: "Let them. I'll sit there again Wednesday.", notes: 3, then: [{ from: 'saori', t: "...Okay." }, { from: 'saori', t: "I'll save the chair. Not because I think you'll come. Just in case." }] },
      { t: "You have to stop apologizing for other people.", notes: 2, then: [{ from: 'saori', t: "I know. I'm sor" }, { from: 'saori', t: "I'm working on it." }] }
    ] },
    { id: 'saori-3a', rank: 3, days: 1, slot: 1, msgs: [
      { from: 'saori', t: "Did you get home dry?" },
      { from: 'saori', t: "Your left shoulder was soaked. I saw. I'm going to buy you a new umbrella, a bigger one. I've already looked at three." }
    ], reply: [
      { t: "Mine's fine. It just has to fit two people.", notes: 3, then: [{ from: 'saori', t: "...Oh." }, { from: 'saori', t: "Then I'll stop looking." }] },
      { t: "I live with a guy who once used a pizza box as an umbrella. I'm fine.", notes: 2, then: [{ from: 'saori', t: "Did it work?" }, { from: 'saori', t: "Sorry. I'm just curious now." }] }
    ] },
    { id: 'saori-4a', rank: 4, days: 1, slot: 1, msgs: [
      { from: 'saori', t: "I've never told anyone that. About my father." },
      { from: 'saori', t: "I keep checking my phone to see if it's still true that I told you. It is." },
      { from: 'saori', t: "He asked about you, in the car. I said you were a friend. He looked very relieved. So did I, a little, hearing myself say it." }
    ], reply: [
      { t: "I'm glad you told me.", notes: 3, then: [{ from: 'saori', t: "Me too. I think." }, { from: 'saori', t: "Yes. Me too." }] },
      { t: "What book did he bring this month?", notes: 3, then: [{ from: 'saori', t: "A collection of essays about lighthouses." }, { from: 'saori', t: "He always gets it slightly wrong. I always love it anyway." }] }
    ] },
    { id: 'saori-5a', rank: 5, days: 1, slot: 1, msgs: [
      { from: 'saori', t: "The goldfish is alive. I keep checking. It's in a mixing bowl on the kitchen table and my mother keeps asking it questions." },
      { from: 'saori', t: "I named it. I hope that's alright. Its name is Solar." },
      { from: 'saori', t: "...Is that strange? I can change it." }
    ], reply: [
      { t: "Don't change it. Take care of me.", notes: 3, then: [{ from: 'saori', t: "I will. I bought it a castle." }, { from: 'saori', t: "A small one." }] },
      { t: "Poor fish. That's a lot of name.", notes: 2, then: [{ from: 'saori', t: "It's a very confident fish. It can handle it." }] }
    ] },
    { id: 'bookclub-6long', thread: 'bookclub', rank: 6, before: 9, days: 2, rename: 'two-person book club (three people)', msgs: [
      { sys: 'Saori created "two-person book club"' },
      { sys: 'Saori added Yukari' },
      { from: 'saori', t: "Hello! Welcome. Thank you both for joining. This is for discussing chapters, and scheduling, and anything else book-related." },
      { from: 'yukari', t: "hi. so i'm in a book club now??" },
      { from: 'yukari', t: "solar said it was 'just one meeting' and 'there's cake'" },
      { from: 'saori', t: "There will be cake! I've already asked at the bakery. Is that... is that not enough?" },
      { ask: [
        { t: "Yukari. It's a good book. Give it one chapter.", notes: 3, then: [{ from: 'yukari', t: "fine. ONE chapter" }, { from: 'saori', t: "Chapter one is about a girl who writes letters to a lighthouse. It's very short. You'll like it, I think." }] },
        { t: "There's definitely cake. I'll make sure.", notes: 2, then: [{ from: 'yukari', t: "ok as long as it's the strawberry one" }, { from: 'saori', t: "Noted. Strawberry. I'm writing it down." }] },
        { t: "She's lying, Saori. She already started it.", notes: 2, then: [{ from: 'yukari', t: "SOLAR" }, { from: 'saori', t: "Really? Yukari, that's wonderful!" }, { from: 'yukari', t: "i read like two pages. on the monorail. it doesn't count" }] }
      ] },
      { from: 'yukari', t: "ok wait. i might have done something" },
      { from: 'yukari', t: "i read the last page first" },
      { from: 'saori', t: "..." },
      { from: 'saori', t: "Why would you do that." },
      { from: 'yukari', t: "i always do it!! i like to know if it's going to be sad" },
      { ask: [
        { t: "That's actually kind of smart.", notes: 1, then: [{ from: 'saori', t: "It isn't. I'm sorry. It isn't." }, { from: 'yukari', t: "she's typing so hard. i can feel it" }] },
        { t: "Saori, are you okay? Blink twice.", notes: 3, then: [{ from: 'saori', t: "I'm fine. I'm being very calm about it." }, { from: 'saori', t: "\"Some things you are only allowed to know in order.\" That's from chapter nine. Which you have NOT reached, Yukari." }, { from: 'yukari', t: "ok that's actually a good line" }] },
        { t: "So, is it sad?", notes: 2, then: [{ from: 'saori', t: "DON'T ANSWER THAT" }, { from: 'yukari', t: "lol. ok i won't" }] }
      ] },
      { from: 'yukari', t: "also. hasegawa-san. i'm glad solar dragged me into this" },
      { from: 'yukari', t: "people said a lot of dumb stuff about me in first year. about my family. it's not fun. so. yeah" },
      { from: 'saori', t: "...Thank you, Takeba-san. I didn't know that." },
      { from: 'saori', t: "You can call me Saori. If you want." },
      { ask: [
        { t: "Look at you two.", notes: 2, then: [{ from: 'yukari', t: "don't make it weird" }, { from: 'saori', t: "It's already a little weird. I don't mind." }] },
        { t: "First rule of book club. Nobody here believes rumors.", notes: 3, then: [{ from: 'yukari', t: "second rule: no reading the last page first. apparently" }, { from: 'saori', t: "Third rule: cake." }] }
      ] },
      { sys: 'Saori renamed the group "two-person book club (three people)"' },
      { from: 'saori', t: "Sunday. 2pm. Bookworms. Chapters one to four. Please do not read the last page." },
      { from: 'yukari', t: "no promises" }
    ] },
    { id: 'saori-7a', rank: 7, days: 1, slot: 1, msgs: [
      { from: 'saori', t: "I've never raised my voice at anyone before. My throat feels strange." },
      { from: 'saori', t: "Ms. Ozawa moved Ōmori-san to Thursdays. I'm on Mondays, Wednesdays and Fridays. I checked twice." },
      { from: 'saori', t: "I think I liked it? Is that terrible?" }
    ], reply: [
      { t: "Not terrible. Terrifying. In a good way.", notes: 3, then: [{ from: 'saori', t: "Good. I'll take terrifying." }, { from: 'saori', t: "\"She was surprised to find she had a voice, the way you're surprised to find a coin in an old coat.\" I always liked that line. I understand it better now." }] },
      { t: "You were amazing.", notes: 3, then: [{ from: 'saori', t: "I was shaking for an hour." }, { from: 'saori', t: "...But thank you. I'll try to believe you." }] }
    ] },
    { id: 'saori-8a', rank: 8, days: 2, slot: 1, msgs: [
      { from: 'saori', t: "My mother found an apartment near the new school. It has a window seat. She said I'd like that." },
      { from: 'saori', t: "I would have, before." },
      { from: 'saori', t: "Sorry. That was a sad text. I'm not good at deleting things once I've written them." }
    ], reply: [
      { t: "You can send me sad texts. That's allowed.", notes: 3, then: [{ from: 'saori', t: "Okay. Then I'll send this one too." }, { from: 'saori', t: "I'm going to miss the chair by the window." }] },
      { t: "You'll make that window seat a library in a week.", notes: 2, then: [{ from: 'saori', t: "Three days, probably. I have a lot of boxes." }] }
    ] },
    { id: 'saori-9r', rank: 9, route: 'romance', days: 1, slot: 1, msgs: [
      { from: 'saori', t: "I've reread my note eleven times since you left. It's very embarrassing. I wouldn't change a word." },
      { from: 'saori', t: "Except the crossed-out one. I should have used a new piece of paper." }
    ], reply: [
      { t: "What was the crossed-out word?", notes: 3, then: [{ from: 'saori', t: "...\"Probably.\"" }, { from: 'saori', t: "As in, \"I'm probably in love with you.\" I took it out. It wasn't true. There's no probably." }] },
      { t: "I'm keeping that note forever.", notes: 3, then: [{ from: 'saori', t: "Please keep it somewhere dry." }, { from: 'saori', t: "I'm joking. Keep it wherever you want. Keep it close." }] }
    ] },
    { id: 'saori-9f', rank: 9, route: 'friend', days: 1, slot: 1, msgs: [
      { from: 'saori', t: "I told my mother I have a best friend. She put down her chopsticks." },
      { from: 'saori', t: "Then she asked if you'd like to come to dinner. Please say yes. She's already planning the menu. It's very elaborate." }
    ], reply: [
      { t: "Yes. Obviously yes.", notes: 3, then: [{ from: 'saori', t: "Good. She says she's making three kinds of tempura." }, { from: 'saori', t: "That's how you know she's happy." }] },
      { t: "Tell her I'm allergic to nothing.", notes: 2, then: [{ from: 'saori', t: "She'll take that as a challenge." }] }
    ] }
  ],
  ranks: [
    { after: '5/1', title: '1: overdue', place: 'Gekkoukan High · Library', scene: [
      { n: "The book was called Towers of the Ancient World, and it was three weeks overdue, and Solar had borrowed it for reasons she could not have explained to anyone in this building without being sent to the nurse." },
      { n: "Babel. Ziggurats. A chapter about a Persian tower of silence that she'd read four times in bed with a flashlight, looking for anything, anything at all, about a tower that grew out of a school at midnight. There had been nothing. There had been a very nice diagram of a lighthouse at Alexandria." },
      { n: "The library smelled like old paper and floor wax and the radiator, which was on for no reason even though it was May. At the circulation desk there was a girl in a cardigan with her sleeves pulled down over her hands, dark hair tucked behind one ear and constantly escaping, stamping cards with enormous care." },
      { n: "Solar set the book on the desk. Not hard. Just set it down. The girl flinched like it had been thrown." },
      { s: 'saori', f: 'surprised', t: "Oh! I'm sorry. I'm sorry, I didn't see you. Is this a return?" },
      { s: 'saori', f: 'sad', t: "It's... it's overdue. Quite a lot. I'm so sorry, there's a fine, it's two hundred and ten yen. It's not my rule. I'd change it if I could. I'm sorry." },
      { choose: [
        { t: "Why are you apologizing? I'm the criminal here.", notes: 3, then: [
          { s: 'saori', f: 'surprised', t: "..." },
          { n: "She laughed. It came out of her before she could stop it, a small startled sound into her sleeve, and then she looked around quickly, like laughing in a library was a crime with its own fine." },
          { s: 'saori', f: 'happy', t: "...A very polite criminal. You brought it back." }
        ] },
        { t: "(Pay the fine and say nothing.)", notes: 2, then: [
          { n: "She counted out the coins. The girl took them one at a time and put them in a jar labeled FINES in round, careful handwriting, and thanked her for each coin individually." }
        ] },
        { t: "Can't you just let it slide?", notes: 1, then: [
          { s: 'saori', f: 'flustered', t: "I... I'm not supposed to. I mean, I could. Should I? I'm sorry. I'll... I'll think about it." },
          { n: "She looked so stricken that Solar immediately regretted asking, and also felt, uncomfortably, like she'd just kicked something small." }
        ] }
      ] },
      { n: "Over by the magazine rack, two girls were whispering. Solar didn't catch the words, only the shape of them, and the way both girls' eyes went to the desk and then away, quick and pleased, like they were passing a sweet back and forth." },
      { n: "The girl at the desk had gone very still. Not frozen. Practiced. She stamped the return card with her eyes down, and her ears went pink, and she kept stamping." },
      { s: 'saori', f: 'neutral', t: "Did you... did you like it? The book. Sorry. You don't have to answer. I just wondered, because nobody's borrowed it since 2004." },
      { choose: [
        { t: "The lighthouse chapter was my favorite.", notes: 3, then: [
          { s: 'saori', f: 'happy', t: "Alexandria! Yes. It was a wonder of the world, and it fell down in an earthquake, and nobody even knows exactly what it looked like anymore." },
          { s: 'saori', f: 'flustered', t: "...Sorry. I like lighthouses. That's all." }
        ] },
        { t: "I was looking for something it didn't have.", notes: 2, then: [
          { s: 'saori', f: 'neutral', t: "Oh. That happens. Books are like that. You can tell me what you were looking for, if you want. I'm good at finding things." },
          { n: "Solar thought about saying a tower that appears at midnight and is full of monsters. She said architecture instead. The girl nodded seriously and wrote it down." }
        ] },
        { t: "Honestly? I used it as a pillow.", notes: 1, then: [
          { s: 'saori', f: 'sad', t: "...Oh. Well. It's a very thick book." }
        ] }
      ] },
      { n: "Her name tag said HASEGAWA, library committee, in the same round handwriting as the jar. When Solar left, she said thank you for coming, very quietly, as if Solar had been a guest in her house. The girls by the magazines were still whispering. Solar looked back at the desk from the doorway and the girl was watching her go, and looked away fast, and knocked over the stamp." }
    ] },

    { after: '5/18', title: '2: rumors', place: 'Gekkoukan High · Classroom 2-F', scene: [
      { n: "Lunch, and Junpei had a rumor, which was like saying the sky had weather. He leaned across two desks with his yakisoba bread and lowered his voice in the way he thought was discreet and which could be heard in the hallway." },
      { s: 'junpei', f: 'happy', t: "Okay, so you know the library girl? Hasegawa? Word is she's got a guy. Like, an older guy. A salaryman. Picks her up in a car outside the gate, once a month, like clockwork." },
      { s: 'yukari', f: 'serious', t: "Junpei. Gross. Who told you that?" },
      { s: 'junpei', f: 'flustered', t: "Everybody! It's not, like, my rumor. I'm just the messenger here." },
      { choose: [
        { t: "Then stop delivering.", notes: 3, then: [
          { s: 'junpei', f: 'surprised', t: "Whoa. Okay. Harsh, but... okay. Fair." },
          { s: 'yukari', f: 'neutral', t: "Thank you." }
        ] },
        { t: "Messengers get shot, Junpei.", notes: 2, then: [
          { s: 'junpei', f: 'sad', t: "Dude. Why is everyone in this class so violent." }
        ] },
        { t: "(Say nothing and eat your lunch.)", notes: 1, then: [
          { n: "She ate her lunch. It sat in her stomach all afternoon like a stone, which was what she got, she supposed, for saying nothing." }
        ] }
      ] },
      { place: 'Gekkoukan High · Library', time: 'After School' },
      { n: "After school the library was busier than she'd ever seen it, and it took her a second to understand why. Every table was full except one. At that one, Hasegawa sat alone with a book open in front of her that she was clearly not reading, and all around her there was a kind of moat, empty chairs, a gap that other students walked around without seeming to know they were doing it." },
      { n: "Solar put her bag down on the chair across from her. The sound it made was louder than it should have been. A few people looked up." },
      { s: 'saori', f: 'surprised', t: "Oh. Hello. You... you probably shouldn't sit there." },
      { s: 'saori', f: 'sad', t: "You've heard, I think. Everyone has. I'm sorry. It makes things awkward for anyone who talks to me. You don't have to be polite about it." },
      { choose: [
        { t: "(Sit down anyway and open your homework.)", notes: 3, then: [
          { n: "She sat. She took out her math homework, which she hated, and spread it across the table like a flag. Hasegawa stared at her for a long moment, and then, very slowly, turned a page of the book she wasn't reading." }
        ] },
        { t: "I don't care what people say.", notes: 2, then: [
          { s: 'saori', f: 'sad', t: "Everybody says that. Then it starts being about them, and then they care a lot." }
        ] },
        { t: "Is it true?", notes: 1, then: [
          { s: 'saori', f: 'serious', t: "..." },
          { s: 'saori', f: 'sad', t: "...It isn't what they say. But I can't explain it. So it may as well be." }
        ] }
      ] },
      { n: "They sat there for an hour. The moat stayed, but it was a moat around two people now, which was a different thing entirely. Hasegawa read four pages. Solar got two problems wrong. Somewhere around the third problem, a small wrapped mint slid across the table toward her elbow, pushed by one sleeve-covered finger, like contraband." },
      { s: 'saori', f: 'neutral', t: "We're not allowed to eat in here. So that's... that's a secret." },
      { choose: [
        { t: "Want me to start a worse rumor about me? Spread the load.", notes: 3, then: [
          { s: 'saori', f: 'happy', t: "...What would it be?" },
          { s: 'solar', t: "I live in a dorm with boys in it and I come home at strange hours. Half of it's already true." },
          { s: 'saori', f: 'surprised', t: "Is it?" },
          { s: 'solar', t: "The boring half." },
          { n: "She laughed again, into the sleeve, and this time she didn't look around first." }
        ] },
        { t: "I'm Solar, by the way.", notes: 2, then: [
          { s: 'saori', f: 'flustered', t: "I know. I mean, I looked at your library card. Sorry. Saori. Hasegawa Saori. You... you already knew the Hasegawa part." }
        ] }
      ] }
    ] },

    { after: '6/10', title: '3: bad luck', place: 'Gekkoukan High · Library', scene: [
      { n: "June, and the rainy season had settled over Port Island like a wet cat, heavy and sullen and everywhere. The library windows were fogged at the corners. Somebody had left a wet umbrella in the stand by the door and it had made a small lake." },
      { n: "Saori had started saving the chair by the window. She never said so. It was just always empty when Solar came in, with a book on it that Saori would move, apologetically, as if surprised to find it there, every single time." },
      { n: "They left together at six. It was dry when they stepped out of the building, and by the time they reached the gate it was not, the sky opening all at once with the sound of somebody dropping a tray of glasses." },
      { n: "Saori put up her umbrella. A gust came off the bay, and the umbrella went inside out with a pop, and two spokes snapped, and she stood there in the downpour holding a little broken skeleton of pink plastic, looking at it with an expression of total, weary recognition." },
      { s: 'saori', f: 'sad', t: "...See. This happens. Things go wrong around me." },
      { s: 'saori', f: 'sad', t: "Last year the bus broke down on the school trip. The class goldfish died. The printer in the staff room caught fire. I was in the room every time. I'm not saying it's me. I'm just saying I'm always there." },
      { choose: [
        { t: "Trust me. You're not the unluckiest thing in my life.", notes: 3, then: [
          { s: 'saori', f: 'surprised', t: "What's the unluckiest thing in your life?" },
          { n: "Solar thought about a tower full of monsters, a gun-shaped thing in her bag, a green hour that came every night and that nobody else remembered. She thought about Junpei trying to cook." },
          { s: 'solar', t: "My dorm's kitchen. Ask me another time." },
          { s: 'saori', f: 'happy', t: "...Okay. I'll ask." }
        ] },
        { t: "The printer was probably just old.", notes: 2, then: [
          { s: 'saori', f: 'neutral', t: "It was very old. It had a name. The teachers called it Grandpa." },
          { s: 'saori', f: 'sad', t: "I liked Grandpa. I was there for that, too." }
        ] },
        { t: "Maybe stay away from goldfish.", notes: 1, then: [
          { s: 'saori', f: 'sad', t: "...I do. Now." }
        ] }
      ] },
      { n: "Solar's umbrella was black and ordinary and not quite big enough for one person, let alone two. She held it out anyway. Saori looked at it, and at the rain, and at Solar, like someone deciding whether a frozen pond would hold." },
      { place: 'Iwatodai Station', time: 'Evening' },
      { n: "It didn't hold, exactly. Saori kept stepping out of it, an inch at a time, every few steps, so that Solar would have more room, and her right shoulder got darker and darker with rain until her cardigan was soaked through on that side and dripping from the sleeve." },
      { choose: [
        { t: "(Hook her sleeve and pull her back under.)", notes: 3, then: [
          { n: "Solar hooked two fingers in the wet wool and pulled, and Saori came back in under the umbrella with a little startled sound, and then they were shoulder to shoulder, damp on both sides, walking in step because it was the only way to fit." },
          { s: 'saori', f: 'flustered', t: "...Sorry." },
          { s: 'solar', t: "Stop leaving." }
        ] },
        { t: "(Tilt the umbrella toward her.)", notes: 2, then: [
          { n: "She tilted it. Her own left shoulder took the rain instead. Saori noticed, and looked stricken, and tried to tilt it back, and for half a block they fought over an umbrella in silence like two old women over a bill." }
        ] },
        { t: "You're getting soaked, you know.", notes: 1, then: [
          { s: 'saori', f: 'sad', t: "I know. I'm used to it." },
          { n: "She said it about the rain. Solar did not think she meant only the rain." }
        ] }
      ] },
      { n: "Her apartment building was three streets past the station, behind a laundromat that breathed warm clean air out into the rain. Under the awning Saori stopped, and turned, and looked at Solar for a second longer than she usually looked at anything." },
      { s: 'saori', f: 'neutral', t: "Nothing went wrong. The whole way. I was waiting for it." },
      { s: 'saori', f: 'happy', t: "...Maybe it's you. Maybe you're good luck." },
      { n: "She went inside before Solar could answer. Solar walked home with her left side soaked and her right side, inexplicably, warm." }
    ] },

    { after: '7/10', title: '4: the man in the car', music: 'tender', place: 'Gekkoukan High · Library', scene: [
      { n: "It was the last Friday before the summer exams, and the library was full of people pretending to study, and Saori had been looking at the clock since three-thirty." },
      { n: "Solar knew the look by now. It was the look Saori got when she was about to say something and had already rehearsed it in her head so many times that the words had worn smooth." },
      { s: 'saori', f: 'serious', t: "Would you walk me to the gate today? There's someone I'd like you to meet. So that you know." },
      { s: 'saori', f: 'sad', t: "Only if you want to. You can say no. I'd understand. I'd understand better than anyone." },
      { place: 'Gekkoukan High', time: 'After School' },
      { n: "The car was silver, and older than it looked from a distance, and parked exactly where the rumor said it would be. Standing beside it was a man in his forties in a gray suit gone shiny at the elbows, holding a paper bag from a bookstore in both hands, like an offering." },
      { n: "Students drifted past. A few slowed. One of the girls from the magazine rack said something to her friend behind her hand. Saori's fingers found Solar's sleeve and held on." },
      { s: 'saori', f: 'neutral', t: "That's my father." },
      { n: "She said it plainly, the way you say the answer to a question you've been asked a hundred times and never answered. Kōno, she said. His name was Kōno. Hers had been too, until she was eleven, and then her parents had divorced, and her mother had taken back her old name, and Saori had taken it with her." },
      { s: 'saori', f: 'sad', t: "He picks me up once a month. We go to a family restaurant. We don't really talk. He always brings me a book. That's... that's where it started. The reading. Him." },
      { choose: [
        { t: "(Bow to her father.)", notes: 3, then: [
          { n: "She bowed. Properly, the way you bowed to someone's parent. Mr. Kōno looked startled, and then he bowed back, lower, and when he straightened up he was blinking a little too fast." },
          { s: 'kono', t: "You're Saori's friend. She's... she's never brought a friend before. Thank you." },
          { n: "He looked at the paper bag in his hands like he wished it had two books in it." }
        ] },
        { t: "Hello, Mr. Kōno. She talks about your books.", notes: 3, then: [
          { s: 'kono', t: "Does she? I never know if I've picked the right ones." },
          { s: 'saori', f: 'flustered', t: "You always pick the right ones. Mostly. The one about trains was a lot." },
          { s: 'kono', t: "...The one about trains was a lot." }
        ] },
        { t: "(Glare at the girls behind you until they leave.)", notes: 2, then: [
          { n: "They left. It took one long, flat look. Saori didn't see it. Her father did, and something in his face eased, the way a man's face eases when he realizes his daughter has someone on her side." }
        ] }
      ] },
      { n: "He waited by the car. He didn't rush her. Saori stood at the gate with Solar for one more minute, cicadas screaming in the cherry trees overhead, the heat coming up off the pavement in waves." },
      { s: 'saori', f: 'sad', t: "I never told anyone because if I explain him, I have to explain the divorce. And if I explain the divorce, I have to explain why I still go." },
      { s: 'saori', f: 'sad', t: "My mother doesn't understand it. I don't think I do either. He wasn't a good husband. I don't know if he was a good father. But he brings me a book every month, and I can't... I can't be the one who stops it." },
      { choose: [
        { t: "You don't owe anybody that story. Thank you for telling me.", notes: 3, then: [
          { s: 'saori', f: 'surprised', t: "..." },
          { s: 'saori', f: 'happy', t: "...You're the first person I wanted to." }
        ] },
        { t: "Why not just tell everyone and end the rumor?", notes: 1, then: [
          { s: 'saori', f: 'serious', t: "Because then it'd be theirs." },
          { n: "Solar didn't have an answer to that. It was, she realized, the truest thing anyone had said to her in weeks." }
        ] },
        { t: "(Squeeze the hand that's holding your sleeve.)", notes: 3, then: [
          { n: "She squeezed it. Saori's fingers, still curled in her blazer, tightened back once, and then let go, carefully, like setting down something fragile." }
        ] }
      ] },
      { n: "She got in the car. Through the window, as it pulled away, Solar saw her take the book out of the paper bag and look at the cover, and smile at it, and then turn and look back at the gate. Solar waved. It felt like a small thing to do. It wasn't." }
    ] },

    { after: '8/7', title: '5: yukata', music: 'sun', place: 'Gekkoukan High · Library', scene: [
      { n: "The library stayed open three afternoons a week over the summer, for the committee and the clubs and the handful of people who preferred an empty room to an air-conditioned one. It was ninety degrees in there. Saori was wearing her cardigan anyway, sleeves pushed up for once, fanning herself with a returns slip." },
      { s: 'saori', f: 'flustered', t: "Are you... is anyone taking you to the festival? At Naganaki Shrine. On Saturday. Not that anyone has to take you. You can go places on your own. I'm sorry. I'm asking very badly." },
      { s: 'saori', f: 'sad', t: "I've never been with a friend. I went once with my father when I was small. I got lost and cried next to the takoyaki stand for forty minutes. I'd like... I'd like a better memory, I think." },
      { choose: [
        { t: "Saturday. I'll meet you at the torii.", notes: 3, then: [
          { s: 'saori', f: 'happy', t: "Okay. Okay! I'll be there early. I'm always early. You don't have to be early. I just will be." }
        ] },
        { t: "Only if we stay away from the takoyaki stand.", notes: 2, then: [
          { s: 'saori', f: 'happy', t: "No. We should go there first. To make it a happy place again. That's how it works." }
        ] }
      ] },
      { place: 'Naganaki Shrine · Summer Festival', time: 'Evening' },
      { n: "She was early. She was standing by the torii in a navy yukata with white morning glories on it, borrowed from her mother and a little too long, the sash tied in a bow that had clearly been retied several times and was still slightly crooked, and she was holding her drawstring bag in both hands like a shield." },
      { n: "The whole shrine was lanterns and smoke, grilled squid and burnt sugar and the clack of geta on the stone path, a hundred conversations at once. Saori looked at all of it the way she looked at a new box of books, like she didn't know where to start and didn't want to." },
      { s: 'saori', f: 'flustered', t: "Don't look at the bow. I know. I did it eight times." },
      { choose: [
        { t: "(Fix the bow for her.)", notes: 3, then: [
          { n: "She stepped behind her and untied it and tied it again, the way her own mother had taught her a long time ago, tucking the ends. Saori stood very still the whole time, and the back of her neck, under the pinned-up hair, went pink." },
          { s: 'saori', f: 'happy', t: "...Thank you. It feels different. Straighter." }
        ] },
        { t: "You look really nice.", notes: 3, then: [
          { s: 'saori', f: 'flustered', t: "It's my mother's. She looks nicer in it. I mean. Thank you." }
        ] },
        { t: "It's a little crooked. It's fine.", notes: 1, then: [
          { s: 'saori', f: 'sad', t: "...Oh. Okay." },
          { n: "She kept touching it for the rest of the night." }
        ] }
      ] },
      { n: "They went to the takoyaki stand first, on principle. Then cotton candy, which Saori ate in tiny careful pinches so it wouldn't get on the yukata. Then the goldfish scooping, which was a mistake, because Saori's paper scoop tore the instant it touched the water, and the second one, and the third, and she looked at the torn paper in her hand with an expression of quiet, total acceptance." },
      { s: 'saori', f: 'sad', t: "...This is what I mean. About things going wrong." },
      { n: "Solar got one on the first try. Small, orange, furious. She handed the plastic bag to Saori without a word. Saori held it up to the lantern light and watched it turn in circles, and didn't say anything for a long time." },
      { music: 'tender' },
      { n: "The fireworks started at nine. They watched from the steps behind the main shrine, away from the crowd, the bag with the goldfish sitting on the stone between them. The first one went up white and burst gold and the sound came half a second later, a huge soft thump in the chest." },
      { s: 'saori', f: 'neutral', t: "I keep waiting for something to go wrong. It's been four hours. Nothing has." },
      { s: 'saori', f: 'sad', t: "I don't know what to do when nothing goes wrong." },
      { choose: [
        { t: "You just watch the fireworks.", notes: 3, then: [
          { s: 'saori', f: 'happy', t: "...Okay. I can do that." },
          { n: "She watched them. Her sleeve lay against the back of Solar's hand on the warm stone, light as a page, and she didn't move it, and neither did Solar, all the way to the end." }
        ] },
        { t: "Enjoy it. I'll keep watch for disasters.", notes: 2, then: [
          { s: 'saori', f: 'happy', t: "Will you? Then I'll stop. Just for tonight." }
        ] }
      ] },
      { n: "The last one was the biggest, a willow that hung gold over the whole of Iwatodai and came down slowly, slowly, like it didn't want to leave. Saori held the goldfish up to watch it too. Just in case, she said, it had never seen fireworks either." }
    ] },

    { after: '9/9', title: '6: book club', place: 'Iwatodai Strip · Bookworms', scene: [
      { n: "The book club had two members and a strict schedule. Sunday afternoons, two o'clock, the secondhand bookstore on the Iwatodai Strip with the bell over the door and the old couple behind the counter, the husband asleep, the wife reading, both of them treating the girls like grandchildren who'd come to visit." },
      { n: "The book was A Year of Small Weather, by Hiromi Ozaki. Saori's favorite. A girl on a cold coast writes a letter every week to the keeper of a lighthouse she's never met, and he never writes back, and she keeps writing anyway. Saori had read it nine times. She had brought her own copy, soft as cloth, and was not letting Solar touch it." },
      { s: 'saori', f: 'serious', t: "Chapter six. When she stops writing for a month. Why do you think she stops?" },
      { choose: [
        { t: "She's scared he's actually reading them.", notes: 3, then: [
          { s: 'saori', f: 'surprised', t: "..." },
          { s: 'saori', f: 'happy', t: "Yes! Yes, exactly, nobody ever says that! Everyone thinks she gives up. She doesn't give up. She gets scared it's real." },
          { n: "She said it too loudly. The wife behind the counter looked up over her reading glasses and smiled, and Saori clapped both hands over her mouth." }
        ] },
        { t: "She's tired of talking to nobody.", notes: 2, then: [
          { s: 'saori', f: 'neutral', t: "That's what most people think. I disagree. But I disagree very politely." },
          { s: 'solar', t: "You disagree like you're about to throw a chair." },
          { s: 'saori', f: 'flustered', t: "I would never throw a chair. In a bookstore." }
        ] },
        { t: "She got busy?", notes: 1, then: [
          { s: 'saori', f: 'sad', t: "...She lives alone on a cliff. With a cat." }
        ] }
      ] },
      { n: "At the back table, in the corner by the art books, there was someone else. A man in a green headband with earrings shaped like fountain-pen nibs, drawing with a speed and a focus that made the air around him feel tight." },
      { ifRank: { rohan: 1 }, then: [
        { n: "Solar knew him. Rohan Kishibe. Everyone who had met him knew him the way you know a sudden change in the weather. She had been hoping, quietly, that he wouldn't look up." }
      ], else: [
        { n: "Solar didn't know him. She would learn, later, that most people who met him felt they'd been caught in a sudden change in the weather. For now he was just a stranger with a pen that sounded like rain." }
      ] },
      { n: "He looked up. Then he got up, walked over, and set a sheet of drawing paper on their table without being asked, like a waiter delivering something nobody had ordered." },
      { n: "It was them. The two of them, mid-argument, Solar leaning back in her chair with her arms folded, and Saori leaning forward with one hand in the air and her mouth open on a word, eyes bright, not apologizing for anything. It was so good it was rude." },
      { s: 'rohan', f: 'neutral', t: "You. The quiet one. Your face does something when you disagree with people. It's extremely useful. Do it again." },
      { s: 'saori', f: 'flustered', t: "I... I'm sorry. I didn't... I don't know what I did." },
      { choose: [
        { t: "Can she keep it?", notes: 3, then: [
          { s: 'rohan', f: 'serious', t: "No. It's reference." },
          { n: "He looked at Saori. Saori was looking at the drawing like it was a letter addressed to her in someone else's handwriting." },
          { s: 'rohan', f: 'neutral', t: "...Fine. Take it. I've already memorized it. Don't fold it." }
        ] },
        { t: "You could have asked first.", notes: 2, then: [
          { s: 'rohan', f: 'neutral', t: "If I'd asked, she would have stopped doing the face. Use your head." },
          { n: "He was, infuriatingly, right. He left the drawing on the table anyway and went back to his corner without another word." }
        ] },
        { t: "(Hide the drawing under your book.)", notes: 1, then: [
          { s: 'rohan', f: 'serious', t: "Don't put a book on top of it. Are you insane? The graphite will smudge." },
          { n: "Saori rescued it immediately, with two hands, and held it in her lap for the rest of the afternoon." }
        ] }
      ] },
      { n: "She tucked it into A Year of Small Weather, between chapters six and seven, carefully, smoothing it flat. Mortified, still. Pink to the ears, still. But on the walk to the station she took the book out of her bag twice just to check it was there." },
      { s: 'saori', f: 'neutral', t: "Nobody's ever drawn me before. I didn't know I looked like that." },
      { s: 'solar', t: "Like what?" },
      { s: 'saori', f: 'happy', t: "...Like someone people sit with." }
    ] },

    { after: '10/14', title: '7: the committee', place: 'Gekkoukan High · Library', scene: [
      { n: "October had been a bad month, the kind Solar couldn't explain to anybody at school, the kind that sat in her chest at night and was still there in the morning. She had started coming to the library on committee days just to sit in the chair by the window, to be in a room where the worst thing that could happen was a late fee." },
      { n: "Today it was the winter duty meeting. Eight committee members around the long table, Ms. Ozawa the librarian at the head with her clipboard, Saori at the far end with her hands folded. Solar was in her chair by the window with a book she wasn't reading, waiting." },
      { n: "There was a girl on the committee called Ōmori. Second-year, class 2-C, glossy ponytail, the kind of voice that carried exactly as far as she wanted it to. She'd been on the committee since April. She had never once, as far as Solar could tell, shelved anything." },
      { s: 'ozawa', t: "Evening desk, Mondays and Wednesdays. Hasegawa-san, you'd be good for that." },
      { s: 'omori', t: "Are you sure? What if her ride comes early? He might have to wait in the car. With the engine running." },
      { n: "Somebody laughed. Not everybody. Enough. Saori's folded hands went white at the knuckles. She looked at the table and her mouth started, very slightly, to shape the word sorry." },
      { choose: [
        { t: "Say that again, slower. So everyone can hear how stupid it sounds.", notes: 3, then: [
          { n: "The room went silent. Ōmori turned around in her chair. She had not, apparently, noticed Solar by the window until now, and she looked at her like someone noticing a dog that had been in the room the whole time and turned out to bite." }
        ] },
        { t: "(Stand up and walk to Saori's end of the table.)", notes: 3, then: [
          { n: "She stood up. Her chair scraped. She walked the length of the table, past six people who suddenly found their clipboards very interesting, and stood behind Saori's chair with one hand on its back." }
        ] },
        { t: "Ms. Ozawa, are you going to let her say that?", notes: 2, then: [
          { s: 'ozawa', t: "Ōmori-san. That's enough." },
          { n: "It wasn't, though. Everybody in the room could tell it wasn't." }
        ] }
      ] },
      { s: 'omori', t: "Oh, and you'd know all about it, wouldn't you? The girl from the dorm full of boys. Out until all hours. My friend sees you come back at like one in the morning. What do you even do out there?" },
      { n: "Solar opened her mouth. She had a dozen answers, all of them dry, all of them ready. She never got to use any of them." },
      { s: 'saori', f: 'serious', t: "Don't." },
      { n: "Saori was standing. Solar hadn't seen her stand up. Her voice wasn't loud, exactly. It was just completely, frighteningly steady, and it went all the way to the back of the room." },
      { s: 'saori', f: 'serious', t: "You can say whatever you want about me. You've been doing it since April. I've never once asked you to stop." },
      { s: 'saori', f: 'serious', t: "But you don't get to talk about her. She's the only person in this school who sat down. You don't get to touch that. Not ever." },
      { n: "Nobody laughed. Ōmori's mouth was open. Ms. Ozawa, after a very long moment, cleared her throat and wrote something on her clipboard and said Ōmori-san, Thursdays, I think, in a voice that ended the meeting." },
      { place: 'Gekkoukan High · Stairwell', time: 'After School' },
      { n: "Afterward Saori sat on the stairs outside the library with her hands in her lap, and they were shaking, both of them, hard, like she'd been out in the cold." },
      { s: 'saori', f: 'surprised', t: "I've never done that. I've never done that in my life. My hands won't stop." },
      { s: 'saori', f: 'sad', t: "I'm sorry. She was talking about you, and something just... I didn't decide to. It just happened. Was that alright? Was that too much?" },
      { choose: [
        { t: "(Take her hands in yours until they stop shaking.)", notes: 3, then: [
          { n: "She sat down one step below and took both of Saori's hands and held them, and they were ice cold and trembling like a bird's heart, and she held them until they were warm and still. It took a long time. Neither of them said anything about how long it took." },
          { s: 'saori', f: 'happy', t: "...Oh. That's better." }
        ] },
        { t: "That was the bravest thing I've ever seen.", notes: 3, then: [
          { s: 'saori', f: 'surprised', t: "Braver than you? You walk home alone at one in the morning. Apparently." },
          { s: 'solar', t: "That's not brave. That's just a bad commute." },
          { s: 'saori', f: 'happy', t: "..." },
          { n: "She laughed, wet and wobbly, and wiped her eyes on her sleeve." }
        ] },
        { t: "You didn't have to defend me.", notes: 1, then: [
          { s: 'saori', f: 'serious', t: "Yes I did. You don't get to decide that part." }
        ] }
      ] },
      { n: "Saori didn't ask, then or ever, what Solar did at one in the morning. Solar noticed that. She noticed it the way you notice someone leaving the porch light on for you." }
    ] },

    { after: '11/9', title: '8: january', music: 'tender', place: 'Gekkoukan High · Library', scene: [
      { n: "November, and the light in the library went gray by four. The radiator was finally earning its keep. Saori had the evening desk now, and on the evening desk there was a small lamp with a green glass shade, and she sat in its circle of light with a book she hadn't turned a page of in twenty minutes." },
      { n: "Solar knew the look. Rehearsed. Worn smooth." },
      { s: 'saori', f: 'sad', t: "My mother's company is moving her. To Sendai. In January." },
      { s: 'saori', f: 'sad', t: "I'm transferring schools. After winter break. I found out on Saturday. I've been trying to say it since Saturday." },
      { n: "The radiator ticked. Somewhere in the stacks somebody dropped a book, and the sound went through the quiet room like a door slamming, and Saori didn't even flinch. That was how Solar knew how bad it was. Saori always flinched." },
      { s: 'saori', f: 'neutral', t: "Of course it's now. Of course it's when I finally have... of course." },
      { choose: [
        { t: "This isn't your bad luck. It's just bad.", notes: 3, then: [
          { s: 'saori', f: 'surprised', t: "..." },
          { s: 'saori', f: 'sad', t: "...Yes. You're right. It's not me. It's just sad. I'm allowed to just be sad, aren't I. Without it being my fault." },
          { s: 'solar', t: "You're allowed." }
        ] },
        { t: "Sendai's not that far.", notes: 2, then: [
          { s: 'saori', f: 'sad', t: "It's four hours on the shinkansen. I looked it up on Saturday. Then I looked it up again on Sunday in case it had changed." }
        ] },
        { t: "Can't you stay with your father?", notes: 1, then: [
          { s: 'saori', f: 'sad', t: "...He asked. I said no. I can't explain why. I think I just couldn't be the one to choose." }
        ] }
      ] },
      { n: "She pulled a folded piece of paper out from the back of her book. A list, in her small round handwriting, numbered. Books to read before January. There were twenty-three of them." },
      { n: "Solar read down it and recognized every single one. The detective novel she'd mentioned once in May. The one about the swimmer. The terrible romance she had confessed, under duress, to having read twice in middle school. Every book on the list was a book she had said a single word about." },
      { s: 'saori', f: 'flustered', t: "I wanted to read the things you liked. So I'd have them. After." },
      { choose: [
        { t: "Then I'm making a list of yours.", notes: 3, then: [
          { s: 'saori', f: 'happy', t: "...It'll be very long. And very sad. There are a lot of lighthouses." },
          { s: 'solar', t: "I like lighthouses." },
          { s: 'saori', f: 'sad', t: "I know. I made you like them. I'm sorry. I'm not sorry." }
        ] },
        { t: "(Take her hand across the desk.)", notes: 3, then: [
          { n: "She reached across the desk, past the stamp and the fines jar and the green lamp, and put her hand over Saori's. Saori turned hers over underneath it, palm up, and held on, and looked at the list instead of at her, and her thumb moved once over Solar's knuckles, like she was memorizing the shape." }
        ] }
      ] },
      { n: "They stayed until Ms. Ozawa turned off the lights in the back stacks one row at a time, gently, the way you'd let someone know a party was ending. Saori locked the door. The key stuck the way it always stuck. She said, very quietly, that she was going to miss even that." }
    ] },

    { after: '12/4', title: '9: what are we', place: 'Gekkoukan High · Library', scene: [
      { n: "December, and the first snow of the year was coming down outside the library windows in big slow flakes that melted the second they touched the glass. The radiator was roaring. The chair by the window was empty, with a book on it, and Saori moved it, apologetically, as if surprised to find it there." },
      { n: "Except it wasn't one of the library's books. It was Solar's, the detective novel she had lent Saori in November, returned with a slip of paper sticking out from the top. Two slips of paper. One near the front, one near the back." },
      { s: 'saori', f: 'flustered', t: "Please don't look at me while I explain this. Look at the snow. The snow is very nice." },
      { s: 'saori', f: 'serious', t: "There are two notes. I wrote the first one in October, after the committee. It says you're my friend. My first real one. That's true." },
      { s: 'saori', f: 'flustered', t: "I wrote the second one last week. It's also true. It's just... more. And there's a crossed-out word in it that I'm not proud of." },
      { s: 'saori', f: 'sad', t: "You can read either one. Or both. Or neither, and we never talk about this, and I move to Sendai and change my name." },
      { choose: [
        { t: "Saori. Breathe.", notes: 3, then: [
          { s: 'saori', f: 'neutral', t: "...I'm breathing. I'm breathing very fast. But I'm doing it." }
        ] },
        { t: "You already have two names. Don't get greedy.", notes: 3, then: [
          { s: 'saori', f: 'happy', t: "..." },
          { n: "She laughed into her sleeve, the old way, and some of the terror went out of her shoulders." }
        ] }
      ] },
      { route: [
        { t: "Show me the second one.", route: 'romance', notes: 3, then: [
          { n: "She opened the book to the back. The paper was folded twice, the small round handwriting going all the way to the edges, and in the middle of the first line there was one word scribbled out so hard the pen had nearly gone through." },
          { n: "It said, I think I have been in love with you since you sat down at my table and let the whole library look at us. It said, I know that is not a thing people say in libraries. It said, things go wrong around me, but you have not gone wrong once, and I have been waiting since May, and I have stopped waiting for it to." },
          { n: "At the bottom it said, You don't have to answer. You can just return the book." },
          { s: 'saori', f: 'flustered', t: "...You're still reading it. Why are you still reading it. You've read it. I can see your eyes at the bottom." },
          { n: "Solar took the pen out of Saori's blazer pocket, wrote two words under the last line, folded the note, put it back in the book, and handed the book to her across the desk. Returned, with a note of its own. Me too." },
          { n: "Saori opened it. Read it. Shut it. Opened it again. Then she put her forehead down on the cover and stayed there, and her ears were scarlet, and she reached out blindly across the desk until she found Solar's hand." }
        ] },
        { t: "The first one. I want to be the first real one.", route: 'friend', notes: 3, then: [
          { n: "She opened the book to the front. The note was short. My first real friend, it said, and then it said it again underneath, as if once wasn't enough to make it true, and then a third time, smaller, like a whisper." },
          { s: 'saori', f: 'surprised', t: "...You picked the first one." },
          { s: 'solar', t: "It's the one I already knew was true. I wanted to see it written down." },
          { s: 'saori', f: 'happy', t: "It's true. It's been true since the umbrella. I just had to write it three times to believe it." },
          { n: "She took the second note out of the back of the book and, without looking at it, folded it very small and put it in her own pocket. Neither of them said anything about it. They didn't need to. Some things, as a girl on a cold coast once wrote to a lighthouse, you are only allowed to know in order." }
        ] }
      ] }
    ] },

    { after: '12/21', title: '10: due date', place: 'Gekkoukan High · Library', scene: [
      { n: "The library's last open day before winter break, and Saori's last day on the desk. The returns were done. The fines jar had been emptied and counted and the coins rolled into paper tubes. The stamp, which had been behaving since September, chose today to read 1987 again, and Saori laughed at it, softly, like an old friend having one last joke." },
      { n: "She had brought a book wrapped in brown paper and tied with string. She held it out with both hands, across the desk, the way you'd hand someone a cup of tea that was too full." },
      { s: 'saori', f: 'neutral', t: "It's my copy. Of A Year of Small Weather. The soft one. Don't argue, please. I've already bought a new one for the train." },
      { s: 'saori', f: 'flustered', t: "There's a letter in it. Between chapters six and seven, where the drawing was. The drawing's still there too. Rohan-san said not to fold it, so I didn't." },
      { choose: [
        { t: "(Read the letter now.)", notes: 3, then: [
          { n: "It was three pages long and full of small round handwriting. It talked about the overdue book and the umbrella and the fireworks and the stairs. It said, I used to think I was bad luck. I think now I was just lonely, and I didn't know there was a difference until you showed me." },
          { s: 'saori', f: 'sad', t: "...You're reading it in front of me. I'm going to go stand in the 400s until you're done." },
          { n: "She didn't, though. She stayed." }
        ] },
        { t: "I'll read it on the first day I miss you.", notes: 3, then: [
          { s: 'saori', f: 'sad', t: "...Then you'll read it tomorrow. I'm sorry. I mean, I hope. No. I'm sorry." },
          { s: 'solar', t: "Probably tonight." },
          { s: 'saori', f: 'happy', t: "...Okay. Tonight's fine." }
        ] },
        { t: "I didn't get you anything this good.", notes: 2, then: [
          { s: 'saori', f: 'neutral', t: "You gave me a chair by the window for eight months. I keep a list. You're very far ahead." }
        ] }
      ] },
      { ifRoute: 'friend', then: [
        { n: "She had one more thing. She slid it across the desk face down. Her library card, laminated, with her student number and her small round signature, the corner worn white from eight months of use." },
        { s: 'saori', f: 'neutral', t: "It won't work after January. I asked Ms. Ozawa. But look at the back." },
        { n: "On the back, in very small writing, there were call numbers. Thirty-one of them. Her favorites. Every lighthouse, every letter, every quiet book on every shelf that nobody else checked out." },
        { s: 'saori', f: 'sad', t: "If nobody borrows a book for a year, it gets moved to the basement. So... so someone needs to keep checking out my favorites. Please don't let them go to the basement." },
        { choose: [
          { t: "Not one of them. I promise.", notes: 3, then: [
            { s: 'saori', f: 'happy', t: "And you'll tell me what you think? Every one? Even the sad ones?" },
            { s: 'solar', t: "Especially the sad ones." },
            { s: 'saori', f: 'happy', t: "...Then I'm not really leaving. Not all the way. My books will still be here, with my first real friend, in the chair by the window." }
          ] },
          { t: "I'll start a two-person book club in Sendai. By mail.", notes: 3, then: [
            { s: 'saori', f: 'happy', t: "Three people. Yukari will want in. She'll pretend she doesn't." },
            { s: 'saori', f: 'neutral', t: "And she'll read the last page first. Please stop her." }
          ] }
        ] },
        { n: "She locked the library door for the last time and the key stuck, and she laughed, and didn't cry, and then did, a little, on the steps, holding Solar's arm. Then she wiped her face on her sleeve and said she had a train to catch in a week and a list to finish, and she was only on book nineteen." }
      ] },
      { ifRoute: 'romance', then: [
        { n: "Ms. Ozawa was in the back office with the door closed. The library was empty. Outside it was snowing again, and the light through the windows was blue and soft and coming in sideways between the stacks." },
        { s: 'saori', f: 'flustered', t: "Could you... could you help me put one last book back? It goes in the 900s. At the very end. Where nobody goes." },
        { n: "There was no book. Solar realized it halfway down the aisle, and Saori realized she'd realized, and stopped between the shelves with her back to the literature and her face pink and her hands, for once, not in her sleeves." },
        { s: 'saori', f: 'sad', t: "I've read about this so many times. I always skipped ahead. I wanted to know how it went." },
        { s: 'saori', f: 'neutral', t: "I'm not skipping ahead this time." },
        { choose: [
          { t: "(Kiss her.)", notes: 3, then: [
            { n: "It smelled like old paper and floor wax and the radiator and her shampoo, which was something with peaches. She went very still, the way she always did, and then she didn't. Her hand came up and caught in the front of Solar's blazer and held on, the way it had held her sleeve at the gate in July." },
            { n: "When they broke apart she put her forehead against Solar's shoulder and laughed, small and astonished, into the wool." }
          ] },
          { t: "Then don't.", notes: 3, then: [
            { n: "Saori kissed her. Carefully, the way she handled the old books, like it might come apart in her hands. It didn't. It held. She pulled back half an inch and looked at Solar with enormous eyes." },
            { s: 'saori', f: 'surprised', t: "...Nothing went wrong." },
            { s: 'solar', t: "Told you. Good luck." }
          ] }
        ] },
        { s: 'saori', f: 'happy', t: "I'll write to you. Every week. Sundays. Things always go wrong on Mondays, so I'll want something to have gone right the day before." },
        { s: 'saori', f: 'neutral', t: "And unlike some lighthouse keepers, you'll write back." },
        { s: 'solar', t: "Every week." },
        { n: "She locked the door for the last time and the key stuck, and she laughed, and held Solar's hand all the way down the stairs and out into the snow, past the gate where the silver car waited once a month, and didn't let go once, not even when a group of first-years walked by and stared. Especially not then." }
      ] }
    ] }
  ]
});
