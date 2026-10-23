/* Job scenes, more (living world part 2, 2026-10-21): amulets, respawn, fishmarket, yeobos. Format: data/job-scenes-more files
   merge into data/job-scenes.js by job id (core.js shiftScene): shifts (full scenes, never repeated), beats (a one-time story
   with the regulars, in order), quiet (short moments once the full scenes have played), openers (a line per month for quiet
   shifts).
   amulets: a new job. Its first shift is the beat 'am-intro' (at 1), then a four-beat arc with Shota. The shrine's caretaker
     (Koromaru's link, rank 9) is deliberately absent: the stall's sweeper is Mrs. Kubo, a neighbor, and nobody at the stall
     talks about the dog after 8/7, so the caretaker's reunion in December stays hers. Koromaru appears only before 8/7.
   respawn / fishmarket / yeobos: world jobs. New shifts and the three-beat arcs stay with this world's locals; the bleed is
     texture (hands, tides, cups). Searchers drop in only gated by met + date, in the present: Hanni and Hyein (respawn),
     Yunjin (fishmarket), Sunoo (the coworker) and Jungwon (yeobos). Yeobo's January lines stay compatible with Sunoo's rank 9
     (the café thinning) without depending on it. */
Object.assign((window.FEMC_GAME_JOB_SCENES_MORE ||= {}), {

  /* ── Amulet stall (Naganaki Shrine) ── */
  amulets: {
    cast: { maeda: 'Mr. Maeda', kubo: 'Mrs. Kubo', shota: 'Shota', hina: 'Hina', shotamom: "Shota's mother", shotadad: "Shota's father",
            ronin: 'Ronin', girl: 'First-year', cicadaboy: 'Boy with a net', hamada: 'Mr. Hamada', tourist: 'Tourist', tourist2: 'Tourist',
            mother: 'Mother', grandma: 'Grandmother' },
    shifts: [
      { id: 'am-s-goldenweek', after: '4/25', until: '5/6', scene: [
        { place: 'Naganaki Shrine · Amulet Stall' },
        { n: "Golden Week brought the whole city out of doors at once, and a surprising amount of it, it turned out, came up the steps of Naganaki Shrine on its way to somewhere else, families with coolers and grandparents with folding chairs and couples in matching windbreakers who had clearly meant to go somewhere much more famous and had gotten off the monorail one stop early." },
        { s: 'maeda', t: "Tourists. Smile. They tip the god better than the locals do. The locals know him." },
        { n: "A couple from Tokyo stopped at the table and had the kind of argument that is only possible between two people who have been together a very long time, conducted entirely in pleasant voices, about whether a shrine this small could possibly have an amulet for love that *worked*." },
        { s: 'tourist', t: "It's a neighborhood shrine. It probably does, like, traffic. Bicycles. Good harvests." },
        { s: 'tourist2', t: "It says *en-musubi* right there. On the sign. In very clear writing." },
        { s: 'tourist', t: "Anyone can write a sign." },
        { choose: [
          { t: "Small gods have less to do. He'll have more time for you.", then: [
            { n: "The woman laughed so suddenly she had to put a hand on the table, and the man looked at Solar with the expression of somebody who had walked into a debate and found the other side had brought a professional, and paid for two, one pink and one blue, and tied the blue one to his own bag before his girlfriend could do it for him." },
            { s: 'maeda', t: "...Where did you learn that?" },
            { stat: { charm: 1 } }
          ] },
          { t: "(Let them argue. Straighten the display while they do.)", then: [
            { n: "She lined the brocade bags up by color and then by purpose and then, because they were still arguing, by how cheerful they looked, and somewhere in the middle of it the man picked up a pink one without a word and paid for it and handed it to his girlfriend, and she stopped mid-sentence and looked at it, and didn't finish the sentence at all." },
            { stat: { kindness: 1 } }
          ] }
        ] },
        { n: "By three the coolers had gone on to the beach and the folding chairs to the river, and the steps were empty again except for petals, and Mr. Maeda counted the cash box twice and announced the total like a man reading out an election result." },
        { s: 'maeda', t: "Best day since last New Year. Don't let it go to your head. The god did most of it." }
      ] },

      { id: 'am-s-koromaru', until: '8/6', months: [4, 5, 6, 7], scene: [
        { place: 'Naganaki Shrine · Amulet Stall' },
        { n: "The white dog was on the top step again, the way he was every day, his back to the street and his face to the shuttered house behind the offering hall, so still that people coming up the stairs sometimes took him for one of the stone foxes until his ear moved." },
        { n: "Hina from the playground had a sausage. She had gotten it from somewhere, a convenience-store sausage on a stick, and she had decided, with the moral certainty of a six-year-old, that the dog needed it more than she did, and she was standing three steps below him holding it out at arm's length and trembling slightly with the effort of being generous." },
        { s: 'hina', f: 'happy', t: "Doggy. Doggy, it's for you. It's pork. You like pork. Everybody likes pork." },
        { n: "He didn't turn around. His tail moved, once, politely, on the stone, the way you'd nod at someone on a train, and that was all." },
        { s: 'kubo', t: "He won't take it from your hand, sweetheart. He never takes anything from anybody's hand." },
        { s: 'hina', f: 'surprised', t: "...Why not?" },
        { n: "Mrs. Kubo didn't answer that. She went back to sweeping, a little harder than before, and nobody at the stall said anything at all, the way nobody talks about a grave they walk past every morning." },
        { choose: [
          { t: "(Show Hina how to leave it on the step and walk away.)", then: [
            { n: "They put it on a paper napkin on the step beside him, not too close, and went back down to the stall, and Hina watched over the edge of the table with her chin on the wood for a long, long time, and when she finally gave up and went back to the swings the dog got up, and ate it, neatly, facing the house, and lay back down." },
            { stat: { kindness: 1 } }
          ] },
          { t: "Maybe he's not hungry. Maybe he's just waiting.", then: [
            { s: 'hina', f: 'sad', t: "For what?" },
            { n: "Solar didn't know. She found she didn't want to guess out loud, not here, not with him listening, and Hina looked at her and then at the dog and then ate the sausage herself, slowly, sitting on the bottom step, keeping him company, which seemed, all things considered, like the right answer." },
            { stat: { charm: 1 } }
          ] }
        ] },
        { n: "When the stall closed he was still there, a white shape at the top of the stairs against the dark trees, and Solar said goodnight to him on the way down without meaning to, and his ear turned toward her, and that was something." }
      ] },

      { id: 'am-s-ronin', scene: [
        { place: 'Naganaki Shrine · Amulet Stall' },
        { n: "He came every Saturday at the same time, a boy of about nineteen in a cram-school windbreaker with his hood up whatever the weather, and he bought a study amulet, the gold one for exam success, every single week, and paid in exact change, and never once met anyone's eyes." },
        { s: 'maeda', t: "That's the ronin. Failed the university exams last year. Trying again. Fifty-two weeks of amulets, if he keeps it up." },
        { s: 'maeda', t: "The god gets the point, son. You can stop paying him." },
        { s: 'ronin', t: "...It's not for the god." },
        { n: "He said it to the table, and put his coins down in a little stack, and Solar saw that his hands were ink-stained to the second knuckle and that the cuffs of his windbreaker had been chewed, the way you chew a pen at two in the morning when the problem won't come out." },
        { choose: [
          { t: "What is it for, then?", then: [
            { s: 'ronin', t: "It's so I come outside once a week. If I have to buy one I have to walk here. If I walk here I see the sky." },
            { s: 'ronin', t: "That's all. That's the whole system." },
            { n: "Mr. Maeda opened his mouth, closed it, and wrote something in the ledger that Solar was fairly sure was not a sales figure." },
            { stat: { kindness: 1 } }
          ] },
          { t: "(Hand him the amulet and tell him the hardest part is the morning of.)", then: [
            { s: 'ronin', t: "...Is it?" },
            { n: "She didn't know how she knew. She knew it the way you know a staircase in the dark, a gray morning and a pencil case and a stomach that wouldn't settle, and she told him to eat breakfast anyway, even if it came back up, and he looked at her for the first time, actually looked, and nodded like she'd given him a formula." },
            { stat: { charm: 1 } }
          ] }
        ] },
        { n: "He went down the steps two at a time with his hood up. Halfway he stopped, and looked up, just for a second, at the sky between the cedars, as if checking it was still there, and then he went on." }
      ] },

      { id: 'am-s-firstyear', scene: [
        { place: 'Naganaki Shrine · Amulet Stall' },
        { n: "The first-year circled the stall four times before she came close enough to buy anything, in a Gekkoukan uniform with the bow tied so precisely it had to have been redone at least twice, and when she finally stood at the table she looked at the love amulets the way you'd look at a dog you weren't sure would bite." },
        { s: 'girl', t: "Senpai. You're... you're a third-year. At Gekkoukan. Aren't you." },
        { s: 'girl', t: "Please don't tell anyone. Please. If anyone in 1-D finds out I'll have to move to Hokkaido. I'll change my name. I'll become a nun." },
        { s: 'kubo', t: "There aren't any nuns in Hokkaido, dear. I don't think." },
        { choose: [
          { t: "Tell anyone what? You came for a study amulet.", then: [
            { n: "She held out a gold study one, and under it, flat against her palm where nobody could see, a pink one, and the girl looked at her hand and then at her face with an expression of such enormous, silent gratitude that Solar had to look at the cash box so as not to laugh." },
            { s: 'girl', t: "...Yes. Study. For studying. Thank you, senpai. Thank you." },
            { stat: { kindness: 1 } }
          ] },
          { t: "Who is it?", then: [
            { s: 'girl', t: "NOBODY. Nobody! A boy. In archery. He's very serious and he has very good posture. That's all I'm saying. I've said too much." },
            { n: "She paid, and fled, and then came back up three steps to say thank you, and fled again, and Mrs. Kubo leaned on her broom and watched her go with the soft, practiced look of a woman who had been sixteen once, a long time ago, about a boy with very good posture of her own." },
            { stat: { charm: 1 } }
          ] }
        ] },
        { s: 'kubo', t: "Mine was a baseball player. Terrible arm. Lovely hands. I married him anyway." },
        { n: "She swept the step where the girl had been standing, very carefully, as if something might have been left on it worth keeping." }
      ] },

      { id: 'am-s-hydrangea', months: [6, 7], weather: ['rain'], scene: [
        { place: 'Naganaki Shrine · Amulet Stall' },
        { n: "It rained all afternoon, the patient rainy-season kind that doesn't so much fall as move in, and nobody came up the steps at all, and the rain ran off the eaves of the stall in a bead curtain and filled the stone basin until it overflowed, and the hydrangeas along the wall went a blue so deep it looked like it would come off on your fingers." },
        { n: "Mrs. Kubo had decided this was a teaching day. She had a bag of loose cord and a tray of amulet bags that had come back from the supplier with their knots undone, and she sat on the stool beside Solar with her reading glasses on the end of her nose and showed her the knot, the flat decorative one that sat on the front of every amulet like a little flower." },
        { s: 'kubo', t: "Over, under, through. No. Through the *other* way. Your hands are fast. Too fast. Let them be slow. It's not a race. The god isn't going anywhere." },
        { n: "Up on the top step the white dog sat in the rain the way he sat in everything else, facing the house, his fur gone gray and flat and dripping, not moving, not even to shake." },
          { choose: [
              { t: "(Get the knot right, slowly, the way she says.)", then: [
                { n: "It took her eleven tries and the whole first hour, and when she finally got one right Mrs. Kubo held it up to the gray light from the eaves and turned it this way and that and pronounced it acceptable, which from Mrs. Kubo was very nearly a medal, and after that Solar's hands did the rest of the tray on their own, slow, one at a time, the rain counting for them." },
                { stat: { kindness: 1 } }
              ] },
              { t: "(Take the stall's spare umbrella up the steps.)", then: [
                { n: "She propped it open on the step beside him, angled over his back, and came away without touching him. He looked at the umbrella. He looked at her, halfway down the stairs, for a long moment, with his red eyes. Then he went back to the house. But he stayed under it, all afternoon, and when the stall closed she left it there." },
                { s: 'kubo', t: "Hm. He let you. He doesn't let anybody." },
                { stat: { charm: 1 } }
              ] }
          ] },
        { n: "At five Mr. Maeda came up the steps under a golf umbrella with the association's crest on it, looked at the untouched cash box, looked at the tray of finished knots, and said that it had been a productive day, in a tone that dared the rain to disagree." }
      ] },

      { id: 'am-s-cicadas', months: [7, 8], scene: [
        { place: 'Naganaki Shrine · Amulet Stall' },
        { n: "The cicadas had started up in the cedars like somebody winding a hundred cheap clocks at once, and the playground kids had come out with nets to deal with them personally, a small army in sun hats running up and down the shrine path, and one of them, a boy of about ten with a net over his shoulder like a rifle, stopped at the table and put down two hundred yen with the air of a man placing an order at a bar." },
        { s: 'cicadaboy', t: "I need the one for homework." },
        { s: 'maeda', t: "Study amulet. Five hundred. Good choice. The god appreciates a scholar." },
        { s: 'cicadaboy', t: "Not *study*. I don't want to study. I want it to be *done*. Summer homework. All of it. The diary and the drawing and the morning glory." },
        { s: 'maeda', t: "There is no amulet for that." },
        { s: 'cicadaboy', t: "There should be." },
        { choose: [
          { t: "There is. It's called the last week of August.", then: [
            { n: "He looked at her with the dawning horror of a person who has just understood something terrible about time, and then, very slowly, picked his two hundred yen back up, and walked away down the path with his net dragging, and Mr. Maeda laughed so hard he had to sit on the cash box." },
            { stat: { charm: 1 } }
          ] },
          { t: "(Write him a plan on the back of a fortune slip: one page a day.)", then: [
            { n: "She wrote it out small, the diary on Mondays and the drawing on Wednesdays and the morning glory every single morning because morning glories are like that, and folded it in half, and he took it like a contract, suspiciously, and read it, and put it in his sun hat for safekeeping." },
            { s: 'cicadaboy', t: "...If it doesn't work I'm coming back." },
            { stat: { kindness: 1 } }
          ] }
        ] },
        { n: "Mrs. Kubo came out of the shade with a thermos of barley tea, so cold it hurt her teeth, and the three of them sat behind the stall in the hum of the cicadas and drank it out of paper cups and watched the army in sun hats catch nothing whatsoever, very happily, all afternoon." }
      ] },

      { id: 'am-s-festival', after: '8/15', until: '8/16', scene: [
        { place: 'Naganaki Shrine · Amulet Stall' },
        { n: "The festival took over the shrine the way a tide takes over a beach, a little at a time and then all at once, and by noon the path from the torii to the offering hall was lined on both sides with the skeletons of food stalls going up, men on ladders stringing paper lanterns from the cedars, a generator coughing behind the playground, and the smell of the first test batch of yakisoba already drifting over everything like a rumor." },
        { s: 'maeda', t: "Lanterns. Every one of these goes up by four. The festival committee is watching. The festival committee is ALWAYS watching." },
        { s: 'kubo', t: "He is the festival committee." },
        { s: 'maeda', t: "And I am watching." },
        { n: "Solar went up the ladder with an armful of paper lanterns and a roll of wire, and from up there the whole shrine laid itself out below her, the stalls and the cables and the kids already sneaking around the goldfish tanks, the ring-toss man arguing with the shaved-ice man about an extension cord, and the old cedars rising over all of it like they'd seen a hundred of these and expected to see a hundred more." },
        { choose: [
          { t: "(Hang them in a perfectly straight line.)", then: [
            { n: "She did it with a level she borrowed from the ring-toss man, every lantern exactly the same distance apart, and Mr. Maeda inspected the line from the torii with one eye closed for a full minute and said nothing, and then went and made the other volunteers redo theirs to match." },
            { stat: { kindness: 1 } }
          ] },
          { t: "(Hang them a little crooked, the way they look better.)", then: [
            { n: "She let them dip, a little lower in the middle like a smile, a little higher at the ends, and Mr. Maeda opened his mouth to object and then stood looking at it, and closed his mouth, and Mrs. Kubo said from the bottom of the ladder that it looked like the festivals used to look, and that was the end of the discussion." },
            { stat: { charm: 1 } }
          ] }
        ] },
        { n: "By four they were up. Someone tested the generator and every lantern came on at once, red and white along the path in the afternoon light, too early, glowing faintly against the sun like a thing remembering what it would look like later." },
        { ifAfter: '8/16', then: [
          { s: 'kubo', t: "Tonight's the night, dear. Come back in a yukata. Everybody looks better in a yukata. Even him." }
        ], else: [
          { s: 'kubo', t: "Tomorrow's the night, dear. Come back in a yukata. Everybody looks better in a yukata. Even him." }
        ] },
        { s: 'maeda', t: "I look fine in a yukata." }
      ] },

      { id: 'am-s-junpei', met: ['junpei'], flags: ['joined-junpei'], scene: [
        { place: 'Naganaki Shrine · Amulet Stall' },
        { n: "Junpei came up the steps with his cap on backwards and his hands in his pockets and the extremely casual walk of someone who had not known she worked here and had absolutely known she worked here, and stopped in front of the table and looked down at the amulets like a man at a ramen shop reading the ticket machine." },
        { s: 'junpei', f: 'happy', t: "Yo, leader. Fancy meeting you here. At your job. Which I didn't know about. Okay so. Which one of these is for, like, everything?" },
        { s: 'solar', f: 'neutral', t: "There isn't one for everything." },
        { s: 'junpei', f: 'surprised', t: "What? That's a design flaw. That's a huge gap in the market. Okay. Which one's the closest? Luck, grades, girls, not dying. In that order. Maybe not that order." },
        { s: 'maeda', t: "The god prefers you choose." },
        { s: 'junpei', f: 'neutral', t: "The god's never had my week, man." },
        { choose: [
          { t: "(Sell him the study one. Exams are coming.)", then: [
            { s: 'junpei', f: 'flustered', t: "Ugh. Low blow. Accurate. Low blow." },
            { n: "He paid for it, and then stood there turning it over in his fingers, the gold thread catching the light, and put it in his breast pocket instead of his bag, and patted it twice, like it might be checking whether he meant it." },
            { stat: { charm: 1 } }
          ] },
          { t: "(Sell him the one for safety, and don't explain.)", then: [
            { n: "She held out the plain white one, the one for protection from harm, and he looked at it and then at her, and the joke went out of his face for a second, the whole thing, and what was under it was a boy who went up into the tower with her every week and knew exactly what she meant." },
            { s: 'junpei', f: 'neutral', t: "...Yeah. Okay. Yeah, that one." },
            { stat: { kindness: 1 } }
          ] }
        ] },
        { s: 'junpei', f: 'happy', t: "Hey, do I get a discount? Employee's friend? Employee's best buddy? Employee's, uh, teammate in a totally normal after-school club?" },
        { s: 'maeda', t: "No." },
        { n: "He tried the offering bell on the way out, and rang it so hard the rope swung back and hit him in the face, and Mrs. Kubo said that meant the god had heard him, and Junpei said that was not how hearing worked, and rubbed his nose all the way down the steps." }
      ] },

      { id: 'am-s-akihiko', met: ['akihiko'], after: '6/6', scene: [
        { place: 'Naganaki Shrine · Amulet Stall' },
        { n: "Somebody was running the shrine steps. Up, touch the top, down, touch the bottom, up again, at a pace that made the old men on the bench by the torii stop their shogi game to watch, and on the fourth pass Solar realized the somebody had silver hair and was wearing a Gekkoukan track jacket and was counting under his breath." },
        { s: 'kubo', t: "Oh, *look* at him. Look at those legs. Is he yours?" },
        { s: 'solar', f: 'flustered', t: "He's... my senpai. He trains." },
        { s: 'kubo', t: "That's not what I asked." },
        { n: "On the thirtieth pass he stopped at the top, hands on his knees, breath steaming, and saw her behind the table in the stall's white happi coat, and straightened up so fast it looked like it hurt." },
        { s: 'akihiko', f: 'surprised', t: "Solar. You work here? Since when?" },
        { s: 'akihiko', f: 'neutral', t: "These steps are good. Uneven. Makes your feet think. I come here when the track's closed." },
        { choose: [
          { t: "(Hand him the stall's barley tea.)", then: [
            { n: "He drank the whole paper cup in one go and held it out for more without thinking, the way you would at your own kitchen table, and then caught himself, and said thank you twice, and Mrs. Kubo watched the entire exchange with an expression of such naked delight that Solar wanted to sink into the stone." },
            { stat: { kindness: 1 } }
          ] },
          { t: "Thirty's a lot. Do thirty-one.", then: [
            { s: 'akihiko', f: 'happy', t: "...Yeah? Yeah. Okay." },
            { n: "He went down and came back up, and down and up again, because one more was never one more with him, and at forty he came back to the stall with his hair stuck to his forehead and grinning like she'd given him a present, which, apparently, she had." },
            { stat: { charm: 1 } }
          ] }
        ] },
        { s: 'kubo', t: "Young man. Take a mandarin. You're all bones." },
        { s: 'akihiko', f: 'neutral', t: "I'm watching my... thank you." },
        { n: "He took the mandarin. He ate it on the bottom step, peel and all, nearly, and waved at the stall with the last segment before he ran off down the street toward the river, and Mrs. Kubo did not stop talking about his legs until the stall closed." }
      ] },

      { id: 'am-s-hamada', scene: [
        { place: 'Naganaki Shrine · Amulet Stall' },
        { n: "Mr. Hamada drove a taxi, and had driven a taxi in Iwatodai for twenty-six years, and had, hanging from his rearview mirror the whole time, the same traffic-safety amulet, which he brought to the stall today in the palm of his hand so that Mr. Maeda could see how it had faded, the brocade gone the color of weak tea and the cord so thin you could see light through it." },
        { s: 'maeda', t: "You return it. That's the custom. A year, you return it, it gets burned with thanks, you take a new one. Twenty-six years, Hamada. The god is embarrassed for you." },
        { s: 'hamada', t: "The god's never had an accident in my cab. He's not embarrassed. He's proud." },
        { n: "They had clearly had this argument before. They had possibly had it every year for twenty-six years. Mrs. Kubo stopped sweeping to listen with the comfortable interest of somebody watching a rerun." },
        { s: 'hamada', t: "My wife bought it. The week I got my license. She tied it on herself. She tied it crooked." },
        { s: 'hamada', t: "I'm not burning a thing she tied." },
        { n: "Mr. Maeda didn't have an answer to that. He'd known about the wife, Solar could tell, the way you could tell from how fast he looked at the ledger." },
        { choose: [
          { t: "Keep it. Take a new one too, and hang them both.", then: [
            { s: 'hamada', t: "...Both?" },
            { s: 'hamada', t: "Huh. Two's safer. She'd like that. She always did say I took corners like a criminal." },
            { n: "He paid for the new one, and asked Solar to tie it, and she tied it beside the old one on his key ring, straight, and then, after a second, crooked, and he looked at it a long time and said that was right." },
            { stat: { kindness: 1 } }
          ] },
          { t: "(Let Mr. Maeda handle it.)", then: [
            { s: 'maeda', t: "...Fine. Keep it. The god will make an exception. The god has made an exception every year since your wife passed and he'll make it this year. Get out of my stall." },
            { n: "Hamada laughed, a big rough laugh, and saluted the offering hall on his way down, and Mr. Maeda wrote nothing in the ledger at all for a while, and then wrote something very small." },
            { stat: { charm: 1 } }
          ] }
        ] },
        { n: "At closing she watched his taxi go by at the bottom of the hill, and there was, if you knew where to look, a tiny glint of gold and a tiny glint of tea-colored brown swinging together from the mirror." }
      ] },

      { id: 'am-s-leaves', months: [10, 11], scene: [
        { place: 'Naganaki Shrine · Amulet Stall', bg: 'naganaki-shrine-autumn' },
        { n: "The ginkgo on the corner had turned all at once in the night, the way ginkgos do, gold from top to bottom like somebody had flipped a switch, and it was dropping its leaves and its fruit on the shrine path with total commitment, and the fruit smelled, there was no polite way to put it, like feet." },
        { s: 'kubo', t: "Every year. Every single year. Forty years I've been sweeping this path and every year that tree does this to me personally." },
        { n: "She swept. The leaves came down. She swept faster. The leaves came down faster. It was a war, and she had been losing it gracefully for four decades, and she seemed to enjoy it more than anything else in her week." },
        { n: "Then the playground kids found the pile she'd swept against the wall, three feet deep and gold, and looked at it, and looked at each other, and Solar saw the exact moment the decision was made." },
        { choose: [
          { t: "(Get between the kids and the pile.)", then: [
            { n: "She stood in front of it with her arms folded like a bouncer, and they came at her in a wave and bounced off, and tried again from the side, and Hina tried to go under her arm and got caught and dangled, shrieking with laughter, and the pile survived, mostly, and Mrs. Kubo said it was the first time in forty years anybody had defended it." },
            { stat: { charm: 1 } }
          ] },
          { t: "(Let them jump. Then hand everybody a broom.)", then: [
            { n: "They jumped. Of course they jumped. The pile went everywhere, gold all over the path and in their hair and down Hina's collar, and then Solar handed out the stall's spare brooms and dustpans, and a war became a work party, and in twenty minutes the path was cleaner than Mrs. Kubo had ever got it on her own, and the kids went home with leaves in their pockets like treasure." },
            { s: 'kubo', t: "Hm. Clever girl. Sneaky. I like sneaky." },
            { stat: { kindness: 1 } }
          ] }
        ] },
        { n: "When the sun got low the gold of the ginkgo caught it and held it, and the whole corner glowed like a lamp for ten minutes, and then the light went off it, and it was just a tree again, a tree that smelled like feet, and Mrs. Kubo shook her broom at it on her way home." }
      ] },

      { id: 'am-s-shichigosan', after: '11/7', until: '11/23', scene: [
        { place: 'Naganaki Shrine · Amulet Stall' },
        { n: "It was Shichi-Go-San, and the shrine was full of very small people in very serious clothes, three-year-olds in kimono with their hair pinned up in flowers, five-year-old boys in hakama who had been told not to sit on anything and were sitting on everything, seven-year-old girls in their first proper obi holding themselves like dowager empresses, and behind every one of them a parent with a camera and the haunted face of somebody who had been up since five." },
        { n: "The stall was selling chitose-ame, the long red-and-white candy sticks in their paper bags painted with cranes and turtles, *thousand-year candy*, for a long life, and they were going faster than Mr. Maeda could unpack them." },
        { s: 'maeda', t: "Two hundred bags. TWO hundred. I ordered two hundred. I said that was too many. I was wrong. Don't tell anyone I was wrong." },
        { n: "A three-year-old girl in a pink kimono was standing by the table refusing to move, refusing to smile, refusing the candy, refusing the photograph, refusing everything with the bottomless calm of a person who has decided this is the hill, and her mother was crouched beside her with the camera, near tears." },
        { s: 'mother', t: "Just one. Just one picture. Mama will give you anything. Mama will give you the moon." },
        { choose: [
          { t: "(Crouch down and refuse to smile too, very seriously.)", then: [
            { n: "She crouched down beside the girl and folded her arms and looked straight ahead with an expression of grave displeasure, and the girl looked at her sideways, suspicious, and then at the camera, and then back at Solar, and then, quite suddenly and against her will, burst out laughing, and the mother got the picture, and then twelve more." },
            { stat: { charm: 1 } }
          ] },
          { t: "(Let her hold the candy bag instead of eating it. Just to carry.)", then: [
            { n: "The girl took it, and examined the cranes and the turtles painted on the bag, and held it to her chest with both arms like a much smaller person, a doll, a baby sister, and in that moment of being trusted with something forgot entirely that she was supposed to be refusing, and the mother took the picture through tears." },
            { stat: { kindness: 1 } }
          ] }
        ] },
        { s: 'kubo', t: "Seventy-one years ago I stood right there in a red kimono and bit my brother. They have the photograph. I look very pleased with myself." },
        { n: "By three the candy was gone, all two hundred bags, and the shrine was littered with hair pins and dropped flowers and one very small wooden sandal nobody ever came back for, which Mrs. Kubo put on the shelf behind the stall, next to the cash box, in case." }
      ] },

      { id: 'am-s-yearend', months: [12], after: '12/5', scene: [
        { place: 'Naganaki Shrine · Amulet Stall' },
        { n: "The new year's stock arrived in eleven cardboard boxes on the back of a delivery truck that couldn't get up the hill, so they carried it, Solar and Mr. Maeda and two association men in their seventies who refused to let anybody else carry the heavy ones, up the shrine steps in the cold one box at a time, their breath smoking, the cedars dripping last night's frost." },
        { s: 'maeda', t: "Next year's zodiac. Tiger. Tiger plaques, tiger bells, tiger charms. I asked for fewer tigers. They sent more tigers." },
        { n: "They unpacked in the stall with the shutters half down against the wind, and everything smelled of new paper and lacquer and cardboard, hundreds of small fierce tigers in rows, and the old men argued about where they should go, and Mrs. Kubo came up with a fresh straw rope over her shoulder like a fisherman, thick and gold and bristling, for the offering hall." },
        { s: 'kubo', t: "The old one comes down, the new one goes up. Out with the year. In with the next one. Hold that end, dear. No, *hold* it. Like you mean it." },
        { choose: [
          { t: "(Hold the rope steady while the men tie it.)", then: [
            { n: "It was heavier than it looked and scratchier than anything had a right to be, and she held it over her head for ten straight minutes while two seventy-year-olds on ladders disagreed about a knot, and when it was finally up her arms were shaking and full of straw, and Mrs. Kubo picked the straw out of her sleeves one piece at a time, like grooming a cat." },
            { stat: { kindness: 1 } }
          ] },
          { t: "(Take down the old one, and keep a single strand of it.)", then: [
            { n: "The old rope came down gray and sun-bleached and coming apart, a year's worth of weather in it, and before it went into the burning pile she pulled out one thin strand and wound it around her finger and put it in her pocket, and didn't know why, except that it had hung there all year, through everything, and somebody should remember it had." },
            { s: 'kubo', t: "...Hm. My mother used to do that." },
            { stat: { charm: 1 } }
          ] }
        ] },
        { n: "When the light went, the new rope glowed gold over the dark offering hall, and the tigers sat in their rows waiting, and the whole small shrine looked, for a minute, like a house where somebody was expecting company." }
      ] },

      { id: 'am-s-hatsumode', after: '1/2', until: '1/3', scene: [
        { place: 'Naganaki Shrine · Amulet Stall', bg: 'naganaki-shrine-newyear' },
        { n: "The first visits of the new year came up the steps in a line that started at the torii and went down the stairs and out into the street and around the corner past the bakery, people in their good coats, people in rented kimono with fur stoles, grandparents on the arms of grandchildren, babies asleep in slings, a line so long and so patient it looked less like a crowd than a slow river with somewhere to be." },
        { s: 'maeda', t: "Hold the line. Hold it. Second day, third day, these are the big ones. Everybody who couldn't come on the first comes now, and they're all coming to *us*." },
        { n: "The association had hired two university girls in red hakama for the omikuji window and lent Solar a white happi coat with the shrine's crest, and from noon until the light went she did nothing but take coins and hand over amulets, *please receive it, thank you, happy new year, please receive it*, so many times the words went soft and round in her mouth like a stone in a river, until it stopped being a sentence and started being a rhythm." },
        { n: "Arrows for warding off evil. Tiger bells. Study, love, traffic, health, a family's worth of each. Her hands did the change without her. Her mouth did the thanks without her. Somewhere around three she realized she hadn't thought about anything at all for two hours, not the tower, not the gap where her memories should have been, nothing, just the next pair of hands and the next coin and the next small bright thing to give away." },
        { choose: [
          { t: "(Keep the rhythm. Don't break it.)", then: [
            { n: "She didn't break it. Mr. Maeda checked the till at four and then checked it again, and then looked at her, and then at the till, like a man trying to work out whether a machine had been installed while he wasn't looking." },
            { stat: { charm: 1 } }
          ] },
          { t: "(Slow down for the old man who can't find his coins.)", then: [
            { n: "He was fumbling with a coin purse in gloves he wouldn't take off, and the line behind him had started to shift and sigh, and she came around the table and helped him count, and wished him a happy new year properly, looking at him, and he squeezed her hand in his glove and said she had a good face for the new year, whatever that meant, and the line, behind him, stopped sighing." },
            { stat: { kindness: 1 } }
          ] }
        ] },
        { s: 'kubo', t: "Eat. Eat this. You haven't eaten. I've been watching. Amazake. It's sweet. It's hot. Drink it before it isn't." },
        { n: "It was sweet, and hot, and tasted of rice and ginger, and she drank it standing up behind the table in the cold between one customer and the next, and it was the best thing she'd ever tasted, which she suspected had more to do with the day than the amazake." }
      ] },

      { id: 'am-s-dondo', days: [0], after: '1/9', until: '1/24', scene: [
        { place: 'Naganaki Shrine · Amulet Stall' },
        { n: "On the Sunday of the burning the association built a fire in the yard behind the playground, a tall cone of bamboo and pine boughs and last year's straw rope, and the whole neighborhood came up the hill with paper bags full of the old year, last year's amulets and last year's New Year decorations and last year's wish plaques, to give back to the god with thanks." },
        { n: "They threw them into the fire one at a time, mostly, a little ceremonially, and the brocade went up bright and the paper went up fast, and the kids roasted mochi on the ends of long bamboo poles in the heat and burned all of it, every piece, and ate it anyway." },
        { s: 'maeda', t: "Everybody's got something. A year's luck. You give it back so you can get more. That's the system. It's a very good system. Better than the bank." },
        { n: "Everybody had something. The ronin had a whole paper bag, fifty-odd gold study amulets, and he threw them in by the handful with a grim face and his hood down for once. Mr. Hamada brought nothing, and didn't explain, and nobody asked. Mrs. Kubo had a wish plaque with her grandson's name on it." },
        { n: "Solar stood at the edge of the heat with her hands empty, and understood, slowly, that she had nothing to give back. No old amulet. No last year's anything. Whatever her last year had been, she hadn't brought any of it with her." },
        { choose: [
          { t: "(Stay by the fire anyway.)", then: [
            { n: "She stayed. The heat was good on her face. Somebody handed her a bamboo pole with a square of mochi on the end, and she held it into the fire beside a nine-year-old and a seventy-year-old and burned it, like everybody, and ate it, like everybody, and nobody asked her what she'd brought, because everybody, it turned out, was just glad she'd come up the hill." },
            { stat: { kindness: 1 } }
          ] },
          { t: "(Throw in the strand of straw from the old rope.)", then: [
            { n: "It was in her coat pocket, wound into a little ring, the strand she'd pulled from the old rope at the end of the year. She hadn't known what it was for. She threw it in, and it was gone in less than a second, a tiny bright line and then nothing, and it felt like the right size of thing to give back, for now." },
            { s: 'kubo', t: "There. Now you've got a year here too. Now you're one of us." },
            { stat: { charm: 1 } }
          ] }
        ] },
        { n: "The fire burned down to a red heap by dusk, and the men raked it out, and the smoke went straight up into the cold blue air over the cedars, a whole neighborhood's year, and she watched it until it was only sky." }
      ] }
    ],

    beats: [
      { id: 'am-intro', at: 1, scene: [
        { place: 'Naganaki Shrine · Amulet Stall' },
        { n: "Naganaki Shrine was small enough to miss, a stone torii at the top of a flight of steps between the houses, an offering hall the color of old tea, two stone foxes with their paint mostly gone and a playground behind it all where the cedars gave up, and the amulet stall was smaller still, a wooden booth with a sliding shutter under the eaves by the hall, and a man in a cardigan standing in front of it with a clipboard, who looked at his watch as she came up the last step, and then at her, and then at the watch again." },
        { s: 'maeda', t: "Maeda. Neighborhood association. Chairman. There's no full-time priest here anymore, so the association keeps the stall open on weekends. That's us. That's you now." },
        { s: 'maeda', t: "Rule one. We don't *sell* amulets. Nobody here sells anything. People *receive* an amulet, and they make an offering. The offering happens to be the price on the card. Don't ask me why. I didn't make the rules. I enforce them." },
        { n: "He walked her through the display like a general walking a line of troops. Gold for exam success. White for protection. Blue for traffic safety, with a little reflector sewn in that had been his idea, he said, and that he was proud of. Pink for love, *en-musubi*, the tying of fates. Green for health. A soft yellow one, for a safe birth. Arrows at New Year, bells for children, and a box at the end of the table for last year's amulets, to be returned and burned with thanks." },
        { s: 'kubo', t: "And if it rains, the shutter sticks. Kick it on the left. He won't tell you that. He thinks it's undignified." },
        { n: "The woman with the broom was eighty or so, in a quilted jacket and a headscarf, and she had been sweeping the same three meters of stone the whole time without ever looking like she was listening, and she came over and put a mandarin by the cash box like she was setting down a paperweight." },
        { s: 'kubo', t: "Kubo. I sweep. Every week. Forty years. Eat that, you're all elbows." },
        { ifBefore: '8/7', then: [
          { n: "At the top of the steps a white dog sat with his back to them all, a Shiba with a red collar, perfectly still, facing the shuttered house behind the offering hall. Nobody mentioned him. Nobody needed to, Solar realized after a while. He was part of the shrine, the way the foxes were." }
        ] },
        { choose: [
          { t: "(Practice saying it: please receive it.)", then: [
            { n: "She said it to the empty step. Then to a pigeon. Then, when the first customer came up, an old woman wanting a blue one for her grandson's new bicycle, to her, and it came out right, warm and plain, and the old woman bowed, and Mr. Maeda made a small mark on his clipboard that she would later learn meant *good*." },
            { stat: { charm: 1 } }
          ] },
          { t: "Which one do people take the most?", then: [
            { s: 'maeda', t: "Health. Always health. Nobody buys health for themselves. They buy it for somebody else." },
            { n: "The first customer came up a minute later, an old woman, and asked for a green one for her husband and a blue one for her grandson's new bicycle, and nothing for herself, and Solar wrapped them both in tissue paper and thought about that for the rest of the afternoon." },
            { stat: { kindness: 1 } }
          ] }
        ] },
        { n: "It was quieter than any job had a right to be. Bells, now and then, at the offering hall. Coins dropping. The broom. Kids on the swings out back. The wind in the cedars, which never stopped, like a sound the shrine made in its sleep." },
        { n: "A stall run by neighbors, for a god none of them had ever met, on a hill most of the city walked past. She liked it more than she could have explained, and decided, on the way down, not to try." }
      ] },

      { id: 'am-arc-1', at: 3, after: '4/18', prev: 'am-intro', scene: [
        { place: 'Naganaki Shrine · Amulet Stall' },
        { n: "The boy came up the steps with a jam jar in both hands, the way you carry something that might go off, and stood in front of the stall for a long time without saying anything, reading every card on the display with his lips moving, a skinny kid of about nine in a baseball cap that was too big for him and a T-shirt with a cartoon shark on it." },
        { n: "The jar was full of coins. Ones and fives and tens, mostly, and a few hundreds, and one fifty-yen piece he'd put on top where you could see it, like a cherry." },
        { s: 'shota', t: "The yellow one. For having a baby. How much is it." },
        { s: 'maeda', t: "Eight hundred. Is it for your mother, son?" },
        { s: 'shota', t: "...She's having one. In August. My dad already got one at the big shrine in town. But that one's from my dad." },
        { s: 'shota', t: "This one's from me." },
        { n: "He unscrewed the jar and tipped it out on the table, carefully, so nothing rolled off, and began to count with one finger, out loud, under his breath, and lost count at sixty, and started again, and his ears went red, and Mr. Maeda looked at the ceiling of the stall with great interest." },
        { choose: [
          { t: "(Count it with him, a coin at a time.)", then: [
            { n: "They counted together, stacking tens in towers of ten, and she let him do the stacking and only said the numbers, and it came to seven hundred and forty-five yen, and he went pale under the cap, and before anyone could say anything Mrs. Kubo leaned her broom on the stall and put a fifty-yen coin and a five on the pile and went back to sweeping like nothing had happened." },
            { stat: { kindness: 1 } }
          ] },
          { t: "Offerings aren't about the exact amount. The god knows a jar when he sees one.", then: [
            { s: 'maeda', t: "...The god does, in fact, know a jar when he sees one." },
            { n: "He said it stiffly, like a man reading a regulation he'd just made up, and wrote *800* in the ledger in very firm numbers, and Shota looked from one of them to the other like they'd both lost their minds and then decided not to question it." },
            { stat: { charm: 1 } }
          ] }
        ] },
        { n: "Solar wrapped the yellow amulet in tissue paper and put it in a little paper envelope with the shrine's stamp on it, and Shota took it from her in both hands, very formally, the way he'd carried the jar." },
        { s: 'kubo', t: "Tie it on her bag, sweetheart. Where she'll see it. Don't make a speech. Just tie it on." },
        { s: 'shota', t: "...I wasn't going to make a speech." },
        { s: 'kubo', t: "You were going to make a speech. I can tell. Boys always want to make a speech." },
        { n: "He went red again and fled down the steps with the envelope held flat against his chest, and the empty jar under his arm, and at the bottom he stopped and turned and bowed to the stall, a deep, serious bow, all the way down, the cap falling off, and picked the cap up and ran." },
        { s: 'maeda', t: "Shota. From the apartments by the playground. His mother used to come here when she was his size." },
        { s: 'maeda', t: "Write it down. *Shota, one safe birth.* We keep track of the important ones." }
      ] },

      { id: 'am-arc-2', at: 6, after: '6/13', prev: 'am-arc-1', scene: [
        { place: 'Naganaki Shrine · Amulet Stall' },
        { n: "Shota had become a regular, in the way nine-year-olds become regulars, which is to say without buying anything. He came up after school with his cap backwards and hung over the edge of the table and told the stall the news. The baby was the size of a lemon. The baby was the size of a mango. The baby could hear things now, so he'd been talking to it about sharks." },
        { n: "Today he wanted a wish plaque. One of the little wooden ema, with the shrine's painted fox on one side and blank wood on the other, to hang on the rack by the offering hall where the wishes clacked together in the wind. He'd brought his own pen. He'd been practicing his handwriting, he said, on the back of a math worksheet, which he showed her. It was not very good." },
        { s: 'shota', t: "Do these work? Really? Like, actually?" },
        { s: 'maeda', t: "That's between you and the god, son. I just run the stall." },
        { s: 'shota', t: "That's not an answer. That's what grown-ups say when it's no." },
        { n: "Mr. Maeda had no rebuttal. He looked at Solar with the face of a man passing a ball he didn't want to be holding." },
        { choose: [
          { t: "I don't know if it works. But writing it down means you said it. That counts.", then: [
            { s: 'shota', t: "...To who?" },
            { s: 'solar', f: 'neutral', t: "To you, at least." },
            { n: "He thought about that harder than any nine-year-old should have had to think about anything, frowning at the blank wood, and then nodded once, short, like she'd given him a rule for a game, and uncapped his pen." },
            { stat: { kindness: 1 } }
          ] },
          { t: "Mrs. Kubo's been hanging plaques here for forty years. Ask her.", then: [
            { s: 'kubo', t: "Some come true. Some don't. Some come true in a way you didn't ask for and it turns out you'd have asked for it if you'd known to." },
            { s: 'shota', t: "That's even less of an answer." },
            { s: 'kubo', t: "That's the most answer there is, sweetheart. Write your wish." },
            { stat: { charm: 1 } }
          ] }
        ] },
        { n: "He wrote it bent over the table with his tongue between his teeth and his arm curled around the plaque so nobody could see, and asked her twice how to write a kanji, *safe*, and then *brother*, and she showed him on the back of a fortune slip, stroke by stroke, and he copied them very slowly and very large." },
        { n: "When he hung it on the rack he made her look away. She looked away. She was not proud of the fact that she could read it from where she was standing anyway, sideways, in the wind, between someone's wish to pass the bar exam and someone else's wish for a husband, *with a car*." },
        { n: "*Please let the baby be OK. And Mom. And if possible a brother. (A sister is OK too.) (But a brother.) — Shota.*" },
        { s: 'shota', t: "You didn't read it, right?" },
        { choose: [
          { t: "I didn't read it.", then: [
            { s: 'shota', t: "Okay. Good. Because it's private. It's between me and the god." },
            { n: "He said it with Mr. Maeda's exact intonation, and Mr. Maeda, behind the stall, coughed into his fist for a long time." }
          ] },
          { t: "The sister part was a good addition.", then: [
            { s: 'shota', t: "You READ it." },
            { s: 'shota', t: "...Mom said I had to put it. She said the god might get offended. I put it in brackets so he knows I don't mean it as much." },
            { n: "He ran back to the rack and checked the brackets were clear, and came back satisfied, and Mrs. Kubo had to go and sweep the far side of the offering hall for a while, where nobody could see her face." }
          ] }
        ] }
      ] },

      { id: 'am-arc-3', at: 10, after: '9/5', prev: 'am-arc-2', scene: [
        { place: 'Naganaki Shrine · Amulet Stall' },
        { n: "It was a girl. Mr. Maeda had heard first, the way he heard everything first in the neighborhood, and had told the stall with enormous ceremony, and had written it in the ledger under *Shota, one safe birth*, with the date, as if closing an account. Born on the hottest day of August. Healthy. Loud. Named Natsumi, for the summer." },
        { n: "Shota had not been by in weeks. When he came up the steps today he came slowly, cap down, kicking a pebble up one step at a time ahead of him, and sat on the bottom step of the offering hall with his chin on his knees, and didn't hang over the table, and didn't tell the stall anything." },
        { s: 'kubo', t: "Ah. There it is." },
        { s: 'solar', f: 'neutral', t: "There what is?" },
        { s: 'kubo', t: "The face. Every oldest child gets it about a month in. I had it in nineteen forty-two. Go on. He won't talk to me. I'm too old to count." },
        { n: "Solar came around the stall and sat on the step beside him, one step down, so she wasn't in the way, and waited, and after a long time he took a photograph out of his pocket, folded in half, and unfolded it, and held it out without looking at her." },
        { n: "A small red furious face in a hospital blanket. And beside the blanket, tied to the bed rail with a slightly crooked knot, a yellow amulet in a little paper envelope with the shrine's stamp on it." },
        { s: 'shota', t: "Everybody holds her. Grandma holds her. Aunties I've never even met hold her. They say, Shota, you're a big brother now, and then they give her to someone else." },
        { s: 'shota', t: "I bought that. With my money. And it worked. And nobody even said." },
        { choose: [
          { t: "I'm saying. It worked. You did that.", then: [
            { n: "He looked at her sideways, under the cap, checking whether she was lying the way grown-ups lie to children, and she let him check, and didn't look away, and after a moment his chin came up off his knees." },
            { s: 'shota', t: "...Yeah. I did." },
            { stat: { kindness: 1 } }
          ] },
          { t: "Have you asked to hold her?", then: [
            { s: 'shota', t: "...No. They'd say I'd drop her." },
            { s: 'kubo', t: "They'll say that. Then they'll let you. Sit on the floor, with your back to the sofa, and hold out your arms, and wait. A mother can't say no to that. It's been tried." },
            { n: "Shota looked up at Mrs. Kubo, who had apparently been listening the whole time from four meters away with a broom, and then at the photograph, and Solar watched him file the instructions away very carefully, floor, sofa, arms, wait, like a battle plan." },
            { stat: { charm: 1 } }
          ] }
        ] },
        { n: "He stood up after a while and came to the stall, and took a long time over the display, and put down a hundred and fifty yen, all he had, for the smallest thing they had, a tiny bell on a red cord, the kind for children, and asked Solar to wrap it." },
        { s: 'shota', t: "Don't tell anyone it's from me. I'm going to put it on her thing. The thing over the bed that spins. She'll think it's from the god." },
        { s: 'maeda', t: "...A bell's two hundred, son." },
        { s: 'maeda', t: "It's one fifty today. Seasonal discount. It's a very specific season." },
        { n: "He wrote it down in the ledger. *Shota, one bell. Big brother.* And underlined it, twice." }
      ] },

      { id: 'am-arc-4', at: 13, after: '1/2', prev: 'am-arc-3', scene: [
        { place: 'Naganaki Shrine · Amulet Stall' },
        { n: "They came up the steps in a little group, the way families come up shrine steps at the start of a year, a father carrying too many bags, a mother in a good coat with a baby in a sling against her chest, and in front of them, two steps ahead the whole way, setting the pace like an usher, Shota, in a new jacket with the tags very obviously just cut off, holding a small white envelope in both hands." },
        { s: 'shota', t: "That's her. That's the stall. That's Solar, she works here. That's Mrs. Kubo. That's Mr. Maeda, he's the chairman, he's in charge of everything." },
        { s: 'maeda', t: "Not *everything*." },
        { s: 'shotamom', t: "We've heard. We've heard about all of you. Every week. Every *single* week. Happy new year. Thank you for putting up with him." },
        { s: 'shotadad', t: "He made us come here first. Before the big shrine. Before the in-laws. Before breakfast." },
        { n: "Shota had already gone to the return box at the end of the table. He took something out of his pocket, a yellow amulet in a little paper envelope, a year's worth of handling gone soft at the corners, and held it for a moment over the box, and bowed to it, a short serious bow, and put it in." },
        { s: 'shota', t: "Thank you. It worked. You can have it back now." },
        { n: "Then he turned around and put the white envelope on the table in front of Solar, his New Year's money, the first otoshidama of his life he hadn't already spent in his head before he'd opened it, and stood very straight." },
        { s: 'shota', t: "A health one. The green one. For a baby. For her. It's her first one. I'm buying it. With my own money. Nobody's helping." },
        { choose: [
          { t: "(Hand it to him, not to his parents.)", then: [
            { n: "She held it out across the table to him, and he took it in both hands, the way he'd taken the yellow one, and turned around and tied it to the strap of the sling himself, slowly, with his tongue between his teeth, and the knot was crooked, and his mother looked down at it and then at the sky for a little while." },
            { stat: { kindness: 1 } }
          ] },
          { t: "Please receive it. Big brother.", then: [
            { n: "He went red from his collar to his hair and took it with both hands and tried very hard to look like a person to whom this sort of thing happened every day, and failed completely, and tied it to the strap of the sling himself, crooked, and his father put a hand on the back of his head and left it there." },
            { stat: { charm: 1 } }
          ] }
        ] },
        { n: "The baby woke up, as babies do, at the exact worst moment, red-faced and furious at the cold, and the whole family turned to deal with it, and in the middle of it a small mittened hand came out of the sling and closed around Solar's finger, which had been resting on the edge of the table, and held on." },
        { n: "It was a remarkably strong grip. It was warm. It held on like there was nothing in the world it was more certain of than the fact of her finger." },
        { s: 'shota', t: "She does that. She does that to me too. It means she likes you. I read it in a book." },
        { s: 'kubo', t: "It means she's a baby, sweetheart. But it means that too." },
        { n: "Mrs. Kubo was crying, a little, in the brisk annoyed way of a woman who didn't approve of crying in public, wiping her eyes with the back of her glove. Mr. Maeda had gone into the back of the stall and come out with the association's camera, an enormous old thing with a strap, and was making everybody stand by the offering hall, the family and the baby and Shota in front, and Solar and Mrs. Kubo at the end, for the newsletter." },
        { s: 'maeda', t: "Everybody look at the god. No. At me. Look at me. I'm the god for the next five seconds." },
        { n: "The shutter clicked. The bells on the offering hall rang, somebody else's wish going up. And in the ledger, later, under *Shota, one safe birth* and *Shota, one bell*, Mr. Maeda wrote a third line, in his very firmest numbers, and showed it to her before he closed the book." },
        { n: "*Natsumi, one health. Her first. Paid in full.*" }
      ] }
    ],

    quiet: [
      { id: 'am-q-mandarin', scene: [
        { n: "There was a mandarin by the cash box when she came in. There was always a mandarin by the cash box. Nobody ever saw it arrive." },
        { s: 'kubo', t: "Don't look at me. I don't know anything about it. Eat it." }
      ] },
      { id: 'am-q-ledger', scene: [
        { n: "Mr. Maeda's ledger was older than she was, the early pages in a hand so neat it looked printed, a whole neighborhood's worth of small hopes in columns, study and health and love and traffic, year after year." },
        { s: 'maeda', t: "Your handwriting's acceptable. Barely. Keep the columns straight. Somebody might read this someday." }
      ] },
      { id: 'am-q-hina', scene: [
        { n: "Hina from the playground had drawn a fortune and was reading it to the stall in a loud, confident voice, getting every second word wrong, so that her future involved a great deal of luck with eels." },
        { choose: [
          { t: "(Read it to her properly.)", stat: { kindness: 1 }, then: [
            { n: "It was a small blessing, about patience. Hina listened, then decided she preferred the eels, and tied it to the tree herself, on the lowest branch, very tight." }
          ] },
          { t: "(Agree that the eels sound promising.)", stat: { charm: 1 }, then: [
            { n: "Hina nodded gravely, as one professional to another, and folded it into her pocket for later, to show her mother the eels." }
          ] }
        ] }
      ] },
      { id: 'am-q-bellrope', scene: [
        { n: "A salaryman rang the offering bell, clapped twice, and stood with his head bowed for so long that a pigeon landed on the step beside him and left again." },
        { n: "He didn't buy anything. On the way out he bowed to the stall, and to her, very slightly, the way you bow to a stranger who has been politely not watching you cry." }
      ] },
      { id: 'am-q-crow', scene: [
        { n: "A crow came down from the cedars, hopped along the rail of the omikuji tree like a customer browsing, and pulled off a fortune with its beak and flew away with it." },
        { s: 'maeda', t: "That's the third this month. I hope it's getting good ones. I hope it's getting *curses*." }
      ] },
      { id: 'am-q-ema', scene: [
        { n: "She straightened the wish plaques on their rack while the stall was quiet, reading them without meaning to, the way you read other people's postcards." },
        { n: "*Please let Grandpa beat Mr. Ito at shogi just once before he dies. He's not dying. But just in case.* She hung that one at the front." }
      ] },
      { id: 'am-q-megaphone', scene: [
        { n: "Mr. Maeda was testing the association's megaphone, which had not been used since the last festival and might not survive to the next one." },
        { s: 'maeda', t: "Testing. Testing. This is the chairman. Testing." },
        { s: 'kubo', t: "We know who you are, dear. Everybody on the hill knows who you are. The *birds* know who you are." }
      ] },
      { id: 'am-q-grandson', scene: [
        { s: 'kubo', t: "He called. My grandson. On a Wednesday. A *Wednesday*. I thought somebody had died." },
        { n: "Nobody had died. He'd just wanted to talk. She told the story four times that afternoon, to four different customers, and it got slightly better each time." }
      ] },
      { id: 'am-q-coins', scene: [
        { n: "The cash box was mostly ten-yen coins today, the warm brown ones that smelled of a hundred hands, and she stacked them in towers of ten the way Shota had taught her without knowing he was teaching her." },
        { n: "It was very calming. She didn't tell anyone how calming it was. They'd have given her more coins." }
      ] },
      { id: 'am-q-quietbox', scene: [
        { n: "Nobody came for an hour. The wind went through the cedars, and the bells on the wish rack clacked, and she sat behind the table with her hands in her lap and found, slightly to her surprise, that she wasn't waiting for anything." },
        { n: "It was a rare feeling. She held still so it wouldn't notice her and leave." }
      ] },
      { id: 'am-q-ken', met: ['ken'], after: '8/10', scene: [
        { n: "Ken came up the steps alone, in his school uniform, with his wallet already open, and looked at the display for a long time with the focus of a boy doing a sum." },
        { s: 'ken', f: 'serious', t: "The white one. For protection. It's not for me. It's for... someone who goes out at night a lot." },
        { n: "He didn't say who. He paid, and bowed, and went back down the steps holding it in his fist, and she didn't ask, because she went out at night a lot too." }
      ] },
      { id: 'am-q-hyein', met: ['hyein'], scene: [
        { n: "Hyein had come up the hill to see the shrine, and had instead spent twenty minutes at the stall with a love amulet held up to the light, turning it over, inspecting the seams." },
        { s: 'hyein', f: 'serious', t: "Who sewed this? This hem is a hero. This is hand-finished, Sol. Somebody's grandma did this. I'm not buying it. I'm *studying* it. Okay I'm buying it." }
      ] }
    ],

    openers: {
      4: "April at the amulet stall: cherry petals in the offering box, in the coin tray, in the folds of every little brocade bag, and the cedars by the gate doing their best to look unimpressed by any of it.",
      5: "May at the stall: new green coming in on the zelkova over the steps, the light gone long and generous, and families on their way to the playground stopping for a safe-travel charm for a trip they hadn't planned yet.",
      6: "June at the stall: the hydrangeas along the wall going from white to blue, the eaves dripping into the stone basin, the cash box smelling faintly of damp wood, and Mr. Maeda's tarp over everything just in case.",
      7: "July at the stall: the cicadas starting up in the cedars like somebody winding a hundred clocks, barley tea sweating in a thermos under the table, and the paper fortunes on the tree gone soft in the heat.",
      8: "August at the stall: heat coming up off the stone steps in waves, the playground empty until the sun dropped, and the stall's little electric fan turning its head back and forth like it couldn't decide who to help first.",
      9: "September at the stall: the cicadas fewer and slower every week, the first cool morning arriving and leaving again like it had forgotten something, and students buying study charms with the guilty faces of people who had spent the summer not studying.",
      10: "October at the stall: gold light slanting through the torii, the ginkgo on the corner starting to turn and to smell, and Mrs. Kubo's broom going from the moment the shutter went up until it came down.",
      11: "November at the stall: the maples behind the offering hall gone red enough to stop people on the steps, leaves in the water basin, leaves on the table, and once, inexplicably, a leaf inside the locked cash box.",
      12: "December at the stall: breath smoking over the table, mittens on for the change, next year's stock arriving in cardboard boxes, and Mr. Maeda counting them twice, then a third time out loud.",
      1: "January at the stall: the fresh straw rope gold over the offering hall, the wish plaques clacking on their rack in the wind, and a line for fortunes even on the quietest afternoon of the week."
    }
  },

  /* ── Respawn (Port Island Station) · world R ── */
  respawn: {
    cast: { daichi: 'Daichi', ayane: 'Ayane', ishida: 'Mr. Ishida', oldman: 'Old man', foxgirl: 'Girl in a fox mask', brother: 'Kid' },
    shifts: [
      { id: 'rs-s-lanyards', scene: [
        { place: 'Port Island Station · Respawn', time: 'Evening' },
        { n: "The Lanyards came in at seven sharp, five men from the same accounting firm on the eleventh floor of a building across the concourse, in five nearly identical gray suits, with their blue company lanyards still around their necks, which they had decided to keep on out of solidarity, or forgetfulness, or the conviction that a team should have a uniform, and which had become, against all their wishes, their name." },
        { s: 'ishida', t: "Five hot teas, please. One with lemon. Fujimoto has a throat." },
        { n: "Mr. Ishida was the captain, forty-four, a tank, and he planned their matches on a yellow legal pad with a mechanical pencil, and they had won the spring cup that way, methodically, without once raising their voices, and every high-schooler in the basement hated them with a pure and beautiful hatred." },
        { s: 'manager', t: "Full night, every week, gone by nine. Best customers I've got. Don't tell them I said that." },
        { n: "Tonight they were losing a scrimmage to a team of fourteen-year-olds, badly, and Ishida called a timeout the way another man would call a meeting, and the five of them turned their chairs inward and conferred in low voices over the legal pad while the fourteen-year-olds stood on their own chairs and jeered, and Solar, bringing the teas, looked at the minimap over Ishida's shoulder for half a second too long." },
        { choose: [
          { t: "Your healer's standing in front of your tank.", then: [
            { n: "Five gray heads turned to look at her, then at the screen, then at Fujimoto, who went the color of his lemon tea. Ishida wrote it down. *Healer: behind tank.* He underlined it twice. They won the next round by a distance that made the fourteen-year-olds sit down on their chairs again." },
            { s: 'ishida', t: "Noted. Thank you. You're very observant for a barista." },
            { stat: { proficiency: 1 } }
          ] },
          { t: "(Set down a bowl of rice crackers with the teas. Say nothing.)", then: [
            { n: "They ate the crackers with grave concentration, the way you'd eat at a funeral reception, and something in the five sets of shoulders came down a centimeter, and they lost the next round anyway, but by less, and Ishida came to the bar afterward to pay for the crackers and would not be talked out of it." },
            { s: 'ishida', t: "Morale is a resource. You managed a resource. Thank you." },
            { stat: { charm: 1 } }
          ] }
        ] },
        { n: "At nine, their phones began to ring, one after another down the row like dominoes, and five grown men said *yes, dear* into five phones, and stood, and pushed their chairs in, and filed up the stairs in a line, lanyards swinging, like ducklings in suits." }
      ] },

      { id: 'rs-s-rain', months: [9, 10, 11], weather: ['rain'], scene: [
        { place: 'Port Island Station · Respawn', time: 'Evening' },
        { n: "The rain came down so hard on the concourse that it ran down the basement stairs in a thin bright sheet and pooled at the bottom by the door, and the manager stood in the puddle with a mop and a bucket and the face of a man who had been arguing with this building for six years and losing, and up on the platform the monorail had stopped running altogether, and nobody in the basement could go anywhere." },
        { s: 'manager', t: "Fine. Nobody's leaving in that. Cocoa's on the house. Don't get used to it. Don't tell the building." },
        { n: "The basement filled with the stranded: a schoolgirl doing homework in the corner with her shoes off, two university boys who had given up on the night and started a tournament between themselves, and an old man in a wet raincoat who had come down the stairs to get out of the weather and was now sitting at seat three, staring at the glowing screen in front of him with the deep, polite alarm of a person at a stranger's funeral." },
        { s: 'oldman', t: "Excuse me. Young lady. What is it supposed to be *doing*?" },
        { n: "In seat four, the kid from sixteen, the screamer, Daichi, who had moved seats because sixteen's chair was broken, leaned over with the strained patience of someone explaining the alphabet." },
        { s: 'daichi', t: "It's a GAME, grandpa. You're a guy. You go places. You shoot people. It's not complicated." },
        { s: 'oldman', t: "Why would I want to shoot people? I've only just sat down." },
        { choose: [
          { t: "(Sit him down properly and show him the keys.)", then: [
            { n: "She put his left hand on the four keys, three fingers and a thumb, the way her own hand went every time it touched a keyboard, and he walked his little man into a wall for twenty minutes with total delight and no intention of ever shooting anybody, and when he finally found a door he said *ah!* so loudly that the university boys cheered." },
            { stat: { proficiency: 1 } }
          ] },
          { t: "(Leave them to it. Mop the stairs.)", then: [
            { n: "She mopped. When she came back down, Daichi had pulled his chair over and was teaching the old man himself, slowly, patiently, in a voice nobody had ever heard him use, moving the man's fingers on the keys with his own, and when she caught his eye he scowled at her so hard it was practically a confession." },
            { stat: { charm: 1 } }
          ] }
        ] },
        { n: "The rain stopped at ten, the way rain stops when it's finally made its point, and the old man put on his wet raincoat and bowed to Daichi on his way up the stairs, a real bow, from the waist, and Daichi turned bright red and went back to his game and lost his next three matches and did not smack the desk once." }
      ] },

      { id: 'rs-s-halloween', after: '10/20', until: '11/1', scene: [
        { place: 'Port Island Station · Respawn', time: 'Evening' },
        { n: "The manager had announced a costume discount for Halloween week, ten percent for any costume and twenty for a good one, judged by him, personally, from behind the bar, with the flat unreadable stare of a customs officer, and the basement had filled with homemade capes, a Mario, three vampires, and the Lanyards as five zombie accountants in their real suits with fake blood on their real lanyards." },
        { s: 'manager', t: "Ten. Ten. Ten. ...Fine, the zombies get twenty. Commitment. I respect commitment." },
        { n: "Then a girl of about fourteen came to the bar in a fox mask, a white festival one with red paint at the eyes, and she'd tied little brass bells from the hundred-yen shop on strings around both wrists, so that every time she moved her hands she rang, softly, like something coming from a long way off." },
        { s: 'foxgirl', t: "I'm a fox. A fox spirit. The good kind. Foxes have bells. I decided." },
        { n: "Solar's hand stopped on the milk jug. It stopped there on its own, the way a hand stops at a hot stove, and something went through her, quick and bright and gone, a sound in a headset, a pair of hands on a keyboard in the dark, and a feeling she couldn't put a name to, very close to the feeling of being *needed*." },
        { n: "The mask was crooked. The strap was too loose on one side, so the fox kept slipping down over the girl's left eye, and her hands, which knew nothing about masks, already knew exactly how far it needed to come up." },
        { choose: [
          { t: "(Come around the bar and retie the strap so it sits right.)", then: [
            { n: "Two quick pulls, behind the ear, and it sat level and high on the girl's face, the way a mask is meant to sit when you need to see past it, and the girl turned her head left and right and rang her wrists experimentally and found it didn't slip, and looked at Solar through the eye holes for a long, curious moment." },
            { s: 'foxgirl', t: "...You've done that before." },
            { stat: { proficiency: 1 } }
          ] },
          { t: "Best costume in the room. Twenty percent.", then: [
            { s: 'manager', t: "You don't get to do the discounts." },
            { s: 'manager', t: "...Twenty. She's right. Best in the room. The zombies can take it up with her." },
            { n: "The girl rang every one of her bells in triumph and went off down the rows to tell her friends, and Solar watched her go, the little bright sound moving away through the blue, until she couldn't tell it from the keys." },
            { stat: { charm: 1 } }
          ] }
        ] },
        { n: "For the rest of the night, every time the bells went by, her thumb pressed down on the edge of the counter, quick, once, at a key that wasn't there." }
      ] },

      { id: 'rs-s-phone', scene: [
        { place: 'Port Island Station · Respawn', time: 'Evening' },
        { n: "The bar had a landline, an old beige thing on the wall that nobody ever called except the building, about the heating, and when it rang at a quarter past nine the manager was upstairs, so Solar picked it up, and a woman's voice, very tight and very polite, asked whether there was a boy there called Daichi, fifteen, about this tall, who had told her he was at cram school." },
        { n: "Daichi was at seat sixteen with his headset on, in the middle of a match, red to the back of the neck. He was always at seat sixteen. He was, as far as Solar could tell, at seat sixteen more than he was anywhere else in the world." },
        { s: 'solar', f: 'neutral', t: "...One moment, please." },
        { choose: [
          { t: "(Take the phone to seat sixteen and hand it to him.)", then: [
            { n: "She walked it down the row on its long curly cord, and tapped his shoulder, and held it out, and he looked at it, and at her, and the red went out of his neck all at once, and he took his headset off and took the phone, and said *Mom* in a voice that was suddenly about ten years old." },
            { stat: { courage: 1 } }
          ] },
          { t: "He's here. He's safe. I'll put him on the ten-twelve myself.", then: [
            { n: "The woman on the line was quiet a moment. Then she said thank you, in a different voice, the one under the polite one, and said ten-twelve, and said she'd be at the station, and hung up, and Solar went down the row and told Daichi the time of his train in a tone that made him start packing up before she'd finished." },
            { stat: { kindness: 1 } }
          ] }
        ] },
        { n: "She walked him up to the platform at ten past ten, because the manager said she could, the concourse wide and cold and nearly empty, and he didn't say anything until the train lights came round the curve of the bay." },
        { s: 'daichi', t: "...My grades are bad. That's all. It's not a big thing. It's just here nobody asks about them." },
        { n: "The doors opened. He got on, and stood holding the pole, and didn't wave, and then at the very last second, as the doors closed, he did, a small embarrassed flick of the hand at hip level, and the train took him away across the dark water toward a woman waiting on a platform on the other side." }
      ] },

      { id: 'rs-s-pink', met: ['hanni', 'hyein'], after: '9/19', scene: [
        { place: 'Port Island Station · Respawn', time: 'Evening' },
        { n: "They came down the stairs at twenty to ten with a convenience-store bag swinging between them, Hanni first, small and dimpled and already waving, Hyein behind her in something with a collar so large it entered the room before she did." },
        { s: 'hanni', f: 'happy', t: "Sol, it's us! We come in peace. We brought snacks." },
        { s: 'hyein', f: 'serious', t: "We brought snacks for YOU. The boys can't have any. I've seen the boys. They have enough." },
        { n: "Hanni climbed up on a bar stool, which took some effort, and folded her arms on the counter and looked up at the menu board, all coffee and energy drinks and instant ramen in the manager's square chalk capitals, and her face fell a little, in the honest way her face did everything." },
        { s: 'hanni', f: 'neutral', t: "Is there anything pink? It's night. At night I want something pink. I know that's not a real reason." },
        { n: "There wasn't anything pink. Solar opened her mouth to say so, and while she was opening it her hands went to the strawberry syrup the manager kept for the kids' milkshakes, and the milk, and the ice, and a splash of the lemon soda, and a slice of lemon on the rim, and she watched them do it the way you'd watch somebody else's hands across a table, and set the glass down in front of Hanni, pale pink and fizzing, and didn't know what it was called." },
        { n: "Hanni looked at it. She took a sip. Her whole face went still, the dimples gone, her eyes going wide and then very bright." },
        { s: 'hanni', f: 'sad', t: "...Oh. That's it. That's the one." },
        { s: 'hyein', f: 'surprised', t: "She made you the pink thing. Hanni. She made you the PINK THING. Without asking. I'm going to scream. I'm going to scream in this basement." },
        { s: 'hanni', f: 'happy', t: "It's too sweet. You made it too sweet. You always make it too sweet." },
        { n: "She drank the whole thing anyway, without stopping, holding the glass in both hands, and wiped her eyes with the back of her wrist very quickly between sips, and nobody mentioned it, and Hyein put a hand flat on Hanni's back and left it there." },
        { choose: [
          { t: "What's it called?", then: [
            { s: 'hanni', f: 'neutral', t: "Here? Nothing. It doesn't have a name here." },
            { n: "Hyein took the chalk off the ledge without asking anyone, climbed onto the stool, and wrote at the bottom of the menu board, in letters much nicer than the manager's, *THE HANNI · ask Solar*, with a little heart, and the manager came out of the office, looked at it for a long time, and went back in without a word, which meant it could stay." },
            { stat: { charm: 1 } }
          ] },
          { t: "(Make her another one, a little less sweet.)", then: [
            { n: "She made it again, half the syrup, and Hanni tasted it and made a face and pushed it back across the counter, and Solar made a third one exactly like the first without being told, too sweet, and Hanni laughed so hard she had to put her forehead down on the bar." },
            { s: 'hyein', f: 'neutral', t: "See, she can't even do it wrong on purpose. Her hands won't let her. It's honestly upsetting." },
            { stat: { proficiency: 1 } }
          ] }
        ] },
        { n: "They waited for her on the stairs until closing, eating the snacks they'd brought her, and walked home with her across the cold concourse, one on each side, and Hanni hummed something the whole way that Solar didn't know and somehow kept knowing the next note of." }
      ] },

      { id: 'rs-s-blackout', scene: [
        { place: 'Port Island Station · Respawn', time: 'Evening' },
        { n: "At eight forty the power went out. Everything, at once: forty monitors, the yellow bulbs over the bar, the ventilation, the hum of the espresso machine, the low constant rattle of keys, and the dark came down over the basement like a lid on a pot, and for one entire second there was no sound in the room at all." },
        { n: "Then forty people started shouting about their matches. Solar didn't. She'd gone completely still behind the counter, her hand flat on the bar, her breath slow, listening, with the particular calm of somebody for whom a sudden, total dark was not new, which was a thing she noticed about herself, and didn't like, and put away for later." },
        { s: 'manager', t: "Building. It's the building. It's always the building." },
        { n: "He found his camping lantern under the bar and set it on the counter, and its little white light came up, and around the room the phones came on one by one, small blue squares held up in the dark like candles at a vigil, and something strange happened, which was that forty people who had sat side by side for months without ever looking at each other turned their chairs around." },
        { n: "Somebody started a word-chain game. The kid in sixteen. *Ringo.* Apple. And the girl in nine, who never talked, said *gorilla* into the dark in a small clear voice, and the whole room went *ohhh*, and it went on from there, seat to seat, round the basement, the Lanyards and the high schoolers and the university boys, all in it together." },
        { choose: [
          { t: "(Join the game when it gets to the bar.)", then: [
            { n: "It got to her on *ra*. She said *ramen*, which ended in the forbidden *n*, which lost, which she had done on purpose so the round would start over with the kid in sixteen, and he knew it, and accused her of it at the top of his voice, and the basement laughed, and somewhere in the dark the girl in nine laughed too, very quietly, like a door opening." },
            { stat: { charm: 1 } }
          ] },
          { t: "(Keep the lantern lit and pour everyone water.)", then: [
            { n: "She went down the rows in the dark with a tray of paper cups, by the light of forty phones, and everybody said thank you without looking up from the game, and it was the first time she'd seen this room with nobody's face lit blue, everybody's face lit white and warm and turned toward each other instead." },
            { stat: { kindness: 1 } }
          ] }
        ] },
        { n: "At nine-fifteen the power came back. Forty monitors flared on at once, blue and blinding, and the ventilation coughed, and the espresso machine hissed back to life like an animal waking, and everybody cheered, and then, strangely, nobody turned their chair back around until they'd finished the round." }
      ] },

      { id: 'rs-s-christmas', months: [12], until: '12/25', scene: [
        { place: 'Port Island Station · Respawn', time: 'Evening' },
        { n: "For Christmas the manager had put up exactly one strand of silver tinsel over the bar, crooked, with the face of a man acting under duress, and was wearing a Santa hat that someone had put on his head as a joke and that he had kept on, possibly out of spite, possibly because nobody had told him to take it off." },
        { s: 'manager', t: "Christmas Cup. Saturday. First prize is a cake. Second prize is the cake's box. Don't ask about third." },
        { n: "Seat fourteen was at seat fourteen, the way seat fourteen was always at seat fourteen, a lanky university student with a perpetual cold and the same order every night, and when she brought it he looked at the tinsel, and then at her, and said the thing very casually, like a weather report." },
        { s: 'regular', t: "I'm here Christmas Eve. Every year. Seat fourteen. It's kind of a tradition. Manager leaves the bar open. There's like six of us." },
        { s: 'regular', t: "It's fine. It's honestly great. Nobody asks you anything." },
        { choose: [
          { t: "(Hang a candy cane off the edge of his monitor.)", then: [
            { n: "He looked at it for a long time, a cheap red-and-white candy cane hooked over the top of the screen, swinging gently, and then said *thanks* to the monitor instead of to her, and when she came back past an hour later he hadn't eaten it, and she had the feeling he wasn't going to, ever." },
            { stat: { kindness: 1 } }
          ] },
          { t: "Then save me a seat. Next year.", then: [
            { s: 'regular', t: "...Seriously? You'd come?" },
            { s: 'regular', t: "Okay. Fifteen. Fifteen's next to me. I'll put a sticker on it." },
            { n: "He did, the next shift, a little gold star sticker on the back of chair fifteen, and nobody else was ever allowed to sit there on a Saturday without him looking up, and she never found the heart to tell him she didn't know where she'd be next year." },
            { stat: { charm: 1 } }
          ] }
        ] },
        { n: "At closing the manager went down the rows handing out cups of instant ramen with a little Christmas-tree sticker on each lid, one per customer, without a word or a smile or any acknowledgment that he was doing it, still in the hat." }
      ] },

      { id: 'rs-s-newyear', months: [1], scene: [
        { place: 'Port Island Station · Respawn', time: 'Evening' },
        { n: "The first week of January the basement filled with kids carrying their New Year's money in envelopes still printed with tigers, middle-schoolers mostly, flush for the first and only time all year and determined to spend it all on hours, and the manager had put up a handwritten sign by the bar that said *UNDER 16: HOME BY NINE. I WILL CHECK.*, and he did, with a clipboard, at five to." },
        { n: "Two brothers came to the bar at eight with a thick tiger envelope and asked for the ten-hour pack, in the same voice, at the same time, the older one maybe twelve and the younger one trying very hard to look twelve, and set the envelope down on the counter like a bribe." },
        { s: 'brother', t: "We have enough. We counted. Twice. Grandma gave us extra because we're cute." },
        { choose: [
          { t: "(Sell them one hour, and make them call home before they sit down.)", then: [
            { n: "They argued. She didn't. She put the bar phone on the counter between them and waited, and the older one called, and said *we're at the station* in a small voice, and then *yes* five times, and then *okay*, and hung up, and paid for one hour in exact change with his face a mournful pink." },
            { s: 'brother', t: "...She says thank you. Who are you? She says thank you to whoever you are." },
            { stat: { courage: 1 } }
          ] },
          { t: "(Sell them the hour they can afford after you take out the train fare.)", then: [
            { n: "She counted out two return fares from the envelope first and slid them back across, and then sold them what was left, which came to an hour and forty minutes, and they looked at the fares and then at her with the dawning respect of two people who had not until that moment considered the problem of getting home." },
            { stat: { kindness: 1 } }
          ] }
        ] },
        { n: "At ten to nine the manager went down the row with his clipboard. The brothers were already standing, coats on, envelope in the older one's inside pocket, waiting for him, and he looked at them and then at Solar across the room and made a small mark on the clipboard that she was fairly sure was not about them." }
      ] }
    ],

    beats: [
      { id: 'rs-arc-1', at: 5, after: '10/3', lean: 'R', scene: [
        { place: 'Port Island Station · Respawn', time: 'Evening' },
        { n: "The manager pinned a sheet of paper to the corkboard by the bar, crooked, with a single thumbtack: *WINTER CUP. TEAMS OF FIVE. SIGN UP BELOW. NO REFUNDS. NO CRYING.* Within a week it had the Lanyards on it, in Mr. Ishida's neat pencil, and three university teams, and, near the bottom, in furious capitals that had gone through the paper in places, *DAICHI'S TEAM*, with four names under it, and a fifth line, empty." },
        { s: 'daichi', t: "I need a fifth. A support. Nobody plays support. Everybody wants to be the guy who gets the kills. Nobody wants to be the guy who keeps the guy who gets the kills alive." },
        { s: 'solar', f: 'neutral', t: "Ask seat nine." },
        { s: 'daichi', t: "Seat nine doesn't *talk*. Seat nine is a *ghost*. Seat nine wrote I WILL BE BACK on a sticky note once and then she came back and never said anything about it, ever. That's ghost behavior." },
        { n: "Seat nine was a girl of about sixteen in the cardigan of a school across the bay, who came three nights a week and played the same thing every time, always a healer, always in the back, headset pushed up off one ear, and who had never once in Solar's hearing said a word to anyone, and who was, Solar knew without being able to explain how she knew, very good, and very slightly wrong." },
        { n: "She stood where she was supposed to stand. She watched who she was supposed to watch. But she always moved a breath early, a half second before she needed to, and paid for it, every time, and Solar watched her do it from behind the bar with her fingers twitching against the cloth." },
        { choose: [
          { t: "Ask her properly. Not the way you ask for a refill.", then: [
            { n: "He went. He stood beside seat nine for an uncomfortably long time with his hands in his pockets, and then took them out, and then put them back, and said something too quietly for anyone to hear. The girl took her headset all the way off. There was a silence long enough to hold a whole match in. Then she held out her hand, and he looked at it, baffled, until he understood she wanted the pen." },
            { stat: { courage: 1 } }
          ] },
          { t: "(Take the sign-up sheet to seat nine yourself, with a cocoa.)", then: [
            { n: "She set the cocoa down by the keyboard and the sheet beside it with a pen on top, and said nothing, and went back to the bar. The girl read it. She looked across the basement at Daichi, who was suddenly very busy with his own monitor and the back of whose neck had gone the color of a stop sign. She looked at it for a long time." },
            { stat: { kindness: 1 } }
          ] }
        ] },
        { n: "When the sheet came back to the corkboard the fifth line had a name on it, small, in neat pencil, squeezed right into the corner like it was apologizing for taking up room. *Ayane.*" },
        { n: "On her way out at ten the girl stopped at the bar. It was the first time she'd stopped at the bar. She stood there with her bag over her shoulder, not quite looking at Solar, looking at the menu board instead." },
        { s: 'ayane', f: 'serious', t: "...He shouts." },
        { s: 'solar', f: 'neutral', t: "He's working on it." },
        { s: 'ayane', t: "Okay." },
        { n: "And she went up the stairs into the real night. And Daichi came to the bar a second later at a speed that suggested he'd been watching the whole time, and leaned across it on both elbows." },
        { s: 'daichi', t: "Did she TALK to you? What did she SAY? Was it about me? It was about me, wasn't it." },
        { s: 'solar', f: 'neutral', t: "She said you shout." },
        { s: 'daichi', t: "...That's fair. That's honestly so fair." }
      ] },

      { id: 'rs-arc-2', at: 9, after: '11/14', prev: 'rs-arc-1', lean: 'R', scene: [
        { place: 'Port Island Station · Respawn', time: 'Evening' },
        { n: "Daichi's team practiced on Tuesdays and Saturdays, in seats nine through thirteen, and it was going badly in the specific way it goes badly for five people who have never played together and are all secretly sure they're the best one, which is to say loudly, and then very quietly, and then loudly again." },
        { n: "Ayane died first in every fight. Not because she was bad. Because she was early. She went to people the instant they were hurt, every time, flinging herself toward them across the map like she could catch them falling, and the enemy saw her coming every time and was waiting for her, every time." },
        { n: "On the fourth loss in a row Daichi's neck started to go red, and his hand came up off the mouse in a fist, and hovered over the desk. And stayed there. And came back down, open, onto his knee. He took a breath that the whole row could hear, and let it out, and said *okay* to nobody, very quietly, and Solar, behind the bar, found that she'd stopped wiping the same cup a full minute ago." },
        { n: "On the break Ayane came to the bar by herself, for the first time without being sent, and asked for hot water, just hot water, and held it in both hands without drinking it." },
        { s: 'ayane', f: 'sad', t: "I'm bad at this. I should give him the spot back. He can find someone." },
        { s: 'solar', f: 'neutral', t: "You're not bad. You're early." },
        { n: "It was out of her mouth before she'd decided to say it, the way the pink drink had come out of her hands, the way the tide times came, and it kept coming, quiet and sure, from somewhere a long way under her ribs." },
        { s: 'solar', f: 'serious', t: "You go when you see somebody get hurt. Go when you see somebody *about* to. Watch the one who's going to need you, not the one who already does. By the time they need you, you should already be there." },
        { s: 'ayane', f: 'serious', t: "...How do you know that?" },
        { choose: [
          { t: "I don't know.", then: [
            { n: "Ayane looked at her over the cup, and for a second Solar thought she'd laugh, or not believe her. She didn't do either. She just nodded, slowly, like that was an answer she'd heard before and had found to be true more often than people liked to admit." },
            { stat: { kindness: 1 } }
          ] },
          { t: "(Show her. Sit at seat eight on your break.)", then: [
            { n: "She sat down at the empty seat beside Ayane's and put her hands on the keys, and they went where they always went, three fingers and a thumb, and she played one fight, just one, a healer at the back of a map she didn't know, and moved late, and was there, every time, a half second before she was needed, and once her thumb went down hard on a key that did nothing in this game, nothing at all, and Ayane saw it." },
            { s: 'ayane', t: "What's that one? That key?" },
            { s: 'solar', f: 'sad', t: "...Habit." },
            { stat: { proficiency: 1 } }
          ] }
        ] },
        { n: "In the next fight Ayane waited. Solar watched her do it from behind the bar, the little figure at the back of the screen holding very still while everything in her clearly wanted to run, holding, holding, and then moving, a breath late, exactly late enough, and the fight turned, and they won it, and the whole row went quiet with surprise." },
        { s: 'daichi', t: "...Nice." },
        { n: "He said it into his headset, not loud, not at anyone in particular. Ayane's ears went pink under her hair. She didn't say anything back. She didn't have to." }
      ] },

      { id: 'rs-arc-3', at: 14, after: '12/26', prev: 'rs-arc-2', lean: 'R', scene: [
        { place: 'Port Island Station · Respawn', time: 'Evening' },
        { n: "The Winter Cup filled the basement past what the fire code would have liked, people standing two deep behind the rows and sitting on the stairs, the bracket up on the big screen by the bar, the manager in an actual tie, and the air thick with nerves and instant ramen and the cheap cologne of boys who had decided tonight was the night they became famous." },
        { n: "Daichi's team had named themselves SEAT NINE. Ayane had objected to this by writing *NO* on a napkin and holding it up, and had been overruled four to one, and had sat through the whole vote with her face in her cardigan, and Solar was fairly sure she was secretly delighted." },
        { n: "They made the semifinal. Across from them, in their real suits, with their real lanyards, sat the Lanyards, five men who planned every match on a legal pad and had not lost a cup since spring." },
        { s: 'ishida', t: "Good luck. We'll be playing seriously. It would be disrespectful not to." },
        { n: "It went to the last fight. Of course it did. Everything in the basement stopped, the keys at the other rows, the espresso machine, the manager's pen, and on the big screen the two teams came together in the middle of the map, and Daichi's neck went red, and his hand came up, and went back down, and he breathed, and on the left of the screen a small figure at the back held still, and held, and held, while everything in her wanted to run." },
        { n: "And moved. Late. Exactly late enough. And was there." },
        { n: "The basement went up like a firework. People were standing on chairs. Daichi had both hands on his head and was making a noise like a kettle. And Mr. Ishida took off his headset, very calmly, and stood up, and came around the row, and took off his own blue company lanyard and put it over Ayane's head." },
        { s: 'ishida', t: "Your positioning was correct. Noted." },
        { n: "Behind him the other four Lanyards stood, and took theirs off too, and put them, one by one, around the necks of the other four, and then applauded, politely, five accountants in a row, and the whole basement lost its mind." },
        { n: "They lost the final. A university team, faster and colder and better, and it wasn't close, and when the last fight went gray on the big screen Solar braced, from behind the bar, for the smack." },
        { n: "It didn't come. Daichi took his headset off and set it down on the desk, gently, and stood up, and went down the row and shook hands with all five of the university players, one at a time, with his face red and his jaw tight and his eyes wet, and came back, and sat down, and put his hands in his lap." },
        { choose: [
          { t: "(Bring five cocoas on the house, and sit with them a minute.)", then: [
            { n: "Nobody talked. Nobody needed to. They drank their cocoa in a row in their borrowed lanyards, and somewhere in the middle of it Daichi put his forehead down on the desk and laughed, a cracked, happy laugh, and Ayane, beside him, without looking, put one hand flat on his back, the way you'd steady something on a shelf." },
            { stat: { kindness: 1 } }
          ] },
          { t: "You played well. All of you. Seat nine especially.", then: [
            { s: 'daichi', t: "...Yeah. She did. She really did." },
            { n: "He said it straight to Ayane, out loud, in front of everyone, and she put her face in her cardigan, and the Lanyard around her neck caught the light from the monitors, blue on blue, and she did not take it off." },
            { stat: { charm: 1 } }
          ] }
        ] },
        { n: "At closing, going down the rows with the wipes, Solar found a new sticky note on the monitor at seat nine. Neat pencil, small, squeezed into the corner like it was apologizing for taking up room." },
        { n: "*WE CAME BACK.* And under it, smaller still: *thank you (bar).*" },
        { s: 'manager', t: "Leave it. It's hers. Seat nine's got tenure now." },
        { n: "She left it. Up the stairs the city was cold and enormous and full of real light, and she was so glad of all of it, and of the blue room under it, that she walked the long way round to the platform just to have more of the night." }
      ] }
    ],

    quiet: [
      { id: 'rs-q-password', scene: [
        { s: 'regular', t: "What's the network password?" },
        { n: "She pointed at the wall, where it was written in marker the size of her hand. He looked at the wall. He looked at her. He asked again. She pointed again. It was, in its way, a ritual, and she'd started to find it comforting." }
      ] },
      { id: 'rs-q-fourteen', scene: [
        { n: "His drink was on the bar before seat fourteen had finished coming down the stairs, the same one he'd ordered every night since she'd started, and he picked it up without breaking stride." },
        { s: 'regular', t: "...Okay, that's a little scary. Thanks." }
      ] },
      { id: 'rs-q-icemachine', scene: [
        { n: "The ice machine jammed with a sound like a dying robot. She hit it on the left side, low, with the heel of her hand, in the exact spot, and it coughed and started again." },
        { s: 'manager', t: "How did you know where to hit it? I've been hitting it in the wrong place for six years." }
      ] },
      { id: 'rs-q-ninenote', scene: [
        { n: "There was a sticky note on the monitor at seat nine again. *BACK THURSDAY.* Neat pencil. Nobody had asked. She wiped around it, carefully, the way you'd dust around a photograph on someone else's shelf." },
        { s: 'manager', t: "Leave it. Seat nine's got a system. Everybody here's got a system. Mine's not asking." }
      ] },
      { id: 'rs-q-sixteen', scene: [
        { n: "The kid at sixteen lost. His hand came up off the mouse in a fist, and stopped, and went back down. He took a breath that the whole row could hear." },
        { n: "Then he looked over at the bar, quickly, to see if she'd seen. She'd seen. She lifted her coffee cup at him, a quarter of an inch, and he looked away very fast, pleased with himself." }
      ] },
      { id: 'rs-q-keys', scene: [
        { n: "On her break she sat at an empty seat and didn't play anything. She just rested her left hand on the keyboard, the way you'd rest it on a dog's back, and let it find the keys it wanted, three fingers and a thumb." },
        { n: "It felt like sitting down in a chair that had been shaped to her. She stayed like that until her break was over, and didn't tell anyone why." }
      ] },
      { id: 'rs-q-heating', scene: [
        { s: 'manager', t: "No. No. That's not what the contract says. Read the contract. I have the contract right here. I am *holding* the contract." },
        { n: "He was on the beige phone with the building again. He'd been on the beige phone with the building for six years. She brought him a coffee and he drank it without looking, still holding the contract, which was a grocery receipt." }
      ] },
      { id: 'rs-q-wives', scene: [
        { n: "At nine, down the row of Lanyards, five phones began to ring in sequence, like a bell tower." },
        { n: "*Yes, dear. Yes, dear. Yes, dear. Yes, dear.* Fujimoto's was a different ringtone. *Yes, Mother.*" }
      ] },
      { id: 'rs-q-healers', scene: [
        { n: "She caught herself watching the healers again, across the rows, only the healers: where they stood, who they were watching, how late they moved. It was a weird thing to notice. She noticed it anyway." },
        { choose: [
          { t: "(Let herself watch.)", stat: { proficiency: 1 }, then: [
            { n: "One of them, a university boy in seat thirty, moved exactly late enough. She found she was smiling at a stranger's minimap like it had said something kind to her." }
          ] },
          { t: "(Look somewhere else.)", stat: { charm: 1 }, then: [
            { n: "She looked at the espresso machine instead. It hissed at her. It understood nothing. It was very restful." }
          ] }
        ] }
      ] },
      { id: 'rs-q-chimes', scene: [
        { n: "Every so often, through the ceiling, faint, the station chimes came down from the platform overhead, four notes, a train coming in across the water." },
        { n: "Down here nobody heard them but her. She found she was keeping time by them, the way you keep time by a clock in another room." }
      ] }
    ],

    openers: {
      4: "Down the stairs off the station concourse, Respawn in April was the same blue hour it always was, forty monitors humming in their rows and the ventilation trying and failing to pull in the smell of the station bakery upstairs.",
      5: "Respawn in May: the basement door propped open with a crate for the first warm evenings, the tournament flyers on it curling at the corners, and the blue light spilling up the stairs onto the concourse like something leaking.",
      6: "Respawn in June: damp in the stairwell, umbrellas dripping in a bucket by the door, and the ventilation losing its long war with the smell of wet shoes.",
      7: "Respawn in July: the only cool place on Port Island, according to everybody who came down the stairs, the air conditioning roaring and the ice machine working harder than anyone in the building.",
      8: "Respawn in August: summer-break kids from open to close, ten-hour packs and instant ramen and the specific silence of forty people who should have been doing homework.",
      9: "Respawn in September: the summer kids gone back to school and the regulars back in their seats, the evenings coming in earlier at the top of the stairs, the blue down here exactly the same as ever.",
      10: "Respawn in October: the first cold wind coming down the stairs every time the door opened, tournament flyers for the winter cups going up on the door three layers deep, and the hot drinks outselling the cold ones for the first time since spring.",
      11: "Respawn in November: coats over the backs of every chair, steam on the bar, the radiator by the stairs knocking like it wanted to be let in on a match.",
      12: "Respawn in December: a single crooked strand of tinsel over the bar, the heating fighting the building and losing, and the whole basement smelling of instant ramen and somebody's cinnamon gum.",
      1: "Respawn in January: New Year's money burning holes in middle-school pockets, the hours board crowded with names, and the cold at the top of the stairs sharp enough to make the blue down here feel like a kind of warmth."
    }
  },

  /* ── Harbor fish market (Port Island) · world S ── */
  fishmarket: {
    cast: { oka: 'Old Oka', fujii: 'Mrs. Fujii', morita: 'Chef Morita', housewife: 'Customer' },
    shifts: [
      { id: 'fm-s-auction', scene: [
        { place: 'Port Island · Fish Market' },
        { n: "At five a handbell went off at the far end of the shed, a flat brass clang that cut through the diesel and the gulls, and every man in rubber boots stopped what he was doing and walked toward it, and the morning auction began, which turned out to be the fastest and quietest kind of shouting she had ever heard, an auctioneer rattling numbers in a singsong that was mostly breath, and around him the buyers answering with nothing but their hands." },
        { n: "Fingers. Just fingers, flicked up and folded down, a fist, a thumb, a little twist of the wrist, so fast she couldn't follow it, crate after crate of silver going to one buyer or another without a single word she could understand." },
        { s: 'oka', t: "One. Two. Three. Four. Five." },
        { n: "Old Oka from the next stall, who was sixty-something and looked older and spoke a dialect so thick she'd stopped trying to follow it after the first week, had come to stand beside her, and was showing her the numbers on his own hand, low, by his hip, like a man passing a secret in class. Five was a fist with the thumb out. Nine was a crook of the finger. Ten was a cross." },
        { s: 'tanabe', t: "Don't teach her that. She'll start bidding. I can't afford her bidding." },
        { choose: [
          { t: "(Watch the auctioneer's hands instead of his mouth.)", then: [
            { n: "It came apart once she stopped listening. The singsong was only weather; the hands were the language. By the fourth crate she could follow it, by the sixth she could see who'd win before they did, and Oka, beside her, grunted something in dialect that the men on the next stall translated, laughing, as *the girl's got eyes*." },
            { stat: { knowledge: 1 } }
          ] },
          { t: "(Tanabe's busy. Make his signal for the mackerel.)", then: [
            { n: "He'd been reaching for it and been caught looking the other way, and the crate was about to go, and her hand went up before she'd decided anything, a crook of the finger, a cross, sharp and clear, and the auctioneer's eyes snapped to her and the crate was theirs at a price that made Tanabe stop in the middle of the shed and turn around slowly." },
            { s: 'tanabe', t: "Who told you you could do that?" },
            { s: 'solar', f: 'neutral', t: "Nobody." },
            { s: 'tanabe', t: "...Good price. Don't do it again. Do it again next week." },
            { stat: { courage: 1 } }
          ] }
        ] },
        { n: "By six the shed was half empty and the gulls had moved in on the scraps, and Oka went back to his stall without a word, and she noticed her hand at her hip, folding and unfolding, counting to ten in a language she'd learned an hour ago, as if it were checking it still had it." }
      ] },

      { id: 'fm-s-rain', weather: ['rain'], scene: [
        { place: 'Port Island · Fish Market' },
        { n: "The rain on the tin roof sounded like somebody pouring gravel onto it from a great height without ever running out, so loud that nobody could hear anything else, and the men in rubber boots had given up shouting prices and were writing them on slates instead, and holding them up, and everybody who wasn't working had crowded under the awning of Mrs. Fujii's cart at the mouth of the market, where the canned coffee was hot and the rolled omelet came on sticks." },
        { s: 'fujii', t: "Coffee. Coffee. Hot tea. Omelet. No, you've had two. I'm counting. I see everything." },
        { n: "Mrs. Fujii was small and round and wore three cardigans and a plastic apron, and had run the cart at the market's mouth for longer than anyone could remember, and fed the men on credit, and knew who drank and who had a new baby and who was lying about both, and she pressed a hot can of coffee into Solar's hands without being asked and didn't take her money." },
        { s: 'tanabe', t: "It's not stopping. Radio says all morning. We'll be soaked to the shorts by nine." },
        { s: 'solar', f: 'serious', t: "It'll ease at the turn. About seven-twenty." },
        { n: "Nobody answered that. Oka, at the corner of the awning, looked at her sideways, and then out at the harbor through the gray curtain of the rain, and seemed to consider the water for a while, and grunted." },
        { choose: [
          { t: "(Help Mrs. Fujii pull her tarp over the cart before it floods.)", then: [
            { n: "They fought it together, the tarp snapping and filling like a sail, Solar on one side and Mrs. Fujii on the other with surprising strength for a woman in three cardigans, and got it pegged down over the cart just before the gutter overflowed, and Mrs. Fujii rewarded her with the end of the omelet, the crisp end, which, it was explained to her, nobody got." },
            { stat: { kindness: 1 } }
          ] },
          { t: "(Run Tanabe's crates to the truck in the rain anyway.)", then: [
            { n: "She ran them, head down, one at a time, across the open yard, the rain coming down so hard it stung through her cap, and by the fourth crate the men under the awning had started cheering every run like a race, and by the sixth two of them came out to help, swearing, and she was soaked through to the skin and couldn't stop grinning." },
            { stat: { courage: 1 } }
          ] }
        ] },
        { n: "At seven-twenty, give or take, the rain eased. It didn't stop. It just let go, all at once, the roof going from gravel to a soft patter, and under the awning nobody said anything, and Oka finished his coffee and crushed the can in one hand and went back to his stall, and on the way past he tapped the brim of her cap, once, with one finger." }
      ] },

      { id: 'fm-s-chef', scene: [
        { place: 'Port Island · Fish Market' },
        { n: "Chef Morita came every Sunday at half past six, in a white coat under a black jacket, from a sushi counter in a back street behind the mall that had nine seats and no sign and, Tanabe said, a waiting list for those nine seats that went into next year, and he walked the length of Tanabe's crates with his hands behind his back like a general reviewing troops he had very little faith in." },
        { s: 'tanabe', t: "Morning, chef. Good mackerel today. Very good. Look at it." },
        { s: 'morita', t: "I'm looking at it. That's why I'm unhappy." },
        { n: "He said this every week. Tanabe had explained that it was a form of affection. He bought from them every week. He also, every week, found something to be disappointed by, and seemed to need it, the way some men need their coffee." },
        { n: "This week he stopped in front of Solar, at the sea bream, and looked at her instead of the fish." },
        { s: 'morita', t: "You. The new one. Which one would you buy?" },
        { choose: [
          { t: "(Look at the eyes, then the gills, then choose.)", then: [
            { n: "She did it the way Tanabe had taught her, clear eyes, and then the way nobody had taught her, lifting the gill cover with one thumb to see the red under it, bright as a cut, and then she picked one, not the biggest, and Morita looked at the fish and then at her thumb for a long, unreadable moment." },
            { s: 'morita', t: "...Who showed you the gills?" },
            { s: 'solar', f: 'neutral', t: "I don't know." },
            { s: 'morita', t: "Hm. Somebody who knew." },
            { stat: { knowledge: 1 } }
          ] },
          { t: "The one you were already looking at.", then: [
            { n: "There was a pause. Then, for the first time in Tanabe's memory, according to Tanabe, Chef Morita laughed, one short bark like a seal, and pointed at the fish he had in fact been looking at, and paid for it, and didn't complain about anything else for the entire rest of the morning, which unsettled Tanabe so badly he dropped a crate." },
            { stat: { charm: 1 } }
          ] }
        ] },
        { n: "He wrapped it himself, in newspaper, with precise square folds, and put it under his arm, and on his way out he stopped and looked back down the stalls, not at the fish, at her." },
        { s: 'morita', t: "Your hands are wasted on ice. When you're done with whatever you're doing, come and see me. I'll teach you to cut." },
        { s: 'tanabe', t: "Oi. She's mine. Go poach somebody else's girl." }
      ] },

      { id: 'fm-s-cat', scene: [
        { place: 'Port Island · Fish Market' },
        { n: "The market had a cat. The cat was enormous, orange, one-eared, with the rolling walk of a sailor and the expression of an admiral surveying a fleet that had disappointed him, which was how he'd come to be called the Admiral by every man in the shed, none of whom would admit to feeding him, all of whom did." },
        { n: "At seven, while Tanabe was busy with a customer and Solar was busy with the ice, the Admiral strolled up onto the scale, took a whole mackerel off the top of the pile in his jaws with the calm of somebody collecting a parcel addressed to him, and strolled off down the middle of the market with it hanging out both sides of his mouth like a mustache." },
        { s: 'tanabe', t: "OI. OI! That's three hundred yen! That's a FISH!" },
        { s: 'oka', t: "He's paid in full. Fifteen years of mice." },
        { choose: [
          { t: "(Chase him.)", then: [
            { n: "She chased him. Everybody watched her chase him, down the wet concrete between the stalls, skidding in her boots, the Admiral never once hurrying, always exactly three meters ahead, around the forklift and under Mrs. Fujii's cart and out the back to the bins, where he sat down on the lid, set the mackerel between his paws, and looked at her with an expression of infinite, patient contempt until she gave up and laughed." },
            { stat: { courage: 1 } }
          ] },
          { t: "(Trade him. Fish heads from the bucket, for the mackerel.)", then: [
            { n: "She crouched at the end of the aisle with a fish head held out at arm's length, and the Admiral stopped, and considered the offer, and set the mackerel down on the concrete with enormous dignity, like a diplomat signing a treaty under protest, and took the head and left, and Tanabe looked at the slightly chewed mackerel she brought back to him and said it was going in the staff pile." },
            { stat: { kindness: 1 } }
          ] }
        ] },
        { n: "At closing the Admiral came and sat at her feet while she hosed down the concrete, and stayed there, very close to the water, getting splashed and pretending not to mind, and when she finally put the hose down he walked off like it had been his idea all along." }
      ] },

      { id: 'fm-s-boots', met: ['yunjin'], after: '10/17', scene: [
        { place: 'Port Island · Fish Market' },
        { n: "Yunjin came back. She came back at six on a Sunday morning, which, she announced to the market at large, she had not done for any person in her life, and she came back in a pair of rubber boots, brand-new, lavender, from the hardware store by the station, which she held up one at a time for Solar to see like a girl showing off a pedicure." },
        { s: 'yunjin', f: 'serious', t: "Boots. I'm in boots, Sol. Rubber ones. For you. I'm never forgiving you. I'm going to tell everyone at home you made me wear these. They're going to think I've been kidnapped." },
        { s: 'yunjin', f: 'happy', t: "Here. Coffee for taxi drivers. The sweet one. It's disgusting. You love it." },
        { n: "It was the sweet one, the brown can, hot enough to sting, and she'd gotten two, and she cracked her own open and drank it like she was posing for a photo, and the men in rubber boots looked at her the way gulls look at an open bin, and she ignored every single one of them except Oka, whom she bowed to, very properly, and who went pink to the tips of his ears." },
        { s: 'tanabe', t: "Is she working? If she's standing here she's working. Grab the other end of that." },
        { s: 'yunjin', f: 'surprised', t: "Is he talking to me? Sol, is the fish man talking to me? I don't work. I've never worked. I'm in *lavender*." },
        { choose: [
          { t: "(Put her on the scale. She only has to read numbers.)", then: [
            { n: "She read numbers. She read them very loudly and in English half the time by accident, and the old men started answering her in English back, badly, for fun, *one kilo, yes, very good, okay*, and within half an hour she had the whole end of the market playing along and Tanabe was selling faster than he had all month and pretending not to know why." },
            { stat: { proficiency: 1 } }
          ] },
          { t: "(Let her do the shouting.)", then: [
            { n: "It turned out she was built for it. She stood on an upturned crate in her lavender boots and shouted prices at passing housewives like she was selling front-row tickets, and they bought, they bought out of what looked like pure astonishment, and by seven the sea bream was gone and Yunjin was hoarse and radiant and refusing to come down off the crate." },
            { stat: { charm: 1 } }
          ] }
        ] },
        { n: "She stayed till closing. She sat on the crate by the scales afterward with her coffee and her ruined boots and her coat pulled tight, and the loud went out of her the way it did, slowly, like the tide going, and she leaned her head on Solar's shoulder without asking." },
        { s: 'yunjin', f: 'neutral', t: "You smell like a fish, babe." },
        { s: 'solar', f: 'neutral', t: "So do you." },
        { s: 'yunjin', f: 'happy', t: "I know. I'm so happy about it. Don't tell anyone." }
      ] },

      { id: 'fm-s-fog', months: [11, 12], scene: [
        { place: 'Port Island · Fish Market' },
        { n: "The fog came in off the bay before dawn and didn't leave, so thick that from the middle of the market you couldn't see either end of the tin roof, only white, and the stalls came at you out of it one at a time like ships, and the men's voices went flat and close, and every half minute, from somewhere out past the breakwater, the foghorn sounded, low and long and lonely, a note you felt in your back teeth." },
        { n: "She counted it without meaning to. Thirty seconds. Thirty. Thirty. She was still counting it when Tanabe's nephew, out in the yard on the forklift, called out in a voice that was trying hard not to sound scared that he couldn't see the loading bay, or the truck, or anything, and had stopped, and didn't know which way he was facing." },
        { s: 'tanabe', t: "Don't move! Idiot. Don't move the thing. Somebody go out and walk him in." },
        { choose: [
          { t: "(Walk out into the fog and guide him by your voice.)", then: [
            { n: "She went out along the painted line, one hand on the wall, until the market was gone behind her and there was nothing but white and the forklift's yellow light, blurred like a lamp through paper, and she talked him in, *left, left, stop, straight*, steady and flat, and he followed her voice in like a boat coming in on a light, and when he climbed down in the bay he was shaking and pretending he wasn't." },
            { stat: { courage: 1 } }
          ] },
          { t: "(Ring the old ship's bell on the post, so he can follow the sound.)", then: [
            { n: "There was a ship's bell hung on the post by the office door, green with age, that nobody ever rang, and she rang it, twice, then twice again, a steady pair every few seconds, and out in the white the forklift's light turned toward it and came, slowly, carefully, until it bumped gently against the edge of the bay, and the old men under the roof said nobody had used that bell like that in twenty years." },
            { stat: { knowledge: 1 } }
          ] }
        ] },
        { s: 'nephew', t: "...I wasn't scared. I was just being careful. That's different." },
        { n: "The foghorn went again, out past the breakwater, long and low, and she felt it in her chest like a word in a language she used to speak, and stood still in the white with her hand on the cold post until it was gone, and then went back to the ice." }
      ] },

      { id: 'fm-s-yearend', after: '12/13', until: '12/31', scene: [
        { place: 'Port Island · Fish Market' },
        { n: "The last Sundays of the year the market went mad. Every household on Port Island wanted fish for New Year, yellowtail and sea bream and salted salmon and crab and salmon roe like tiny orange lanterns in their trays, and the housewives came at seven with lists, in formation, like an army that had planned its campaign since November, and Tanabe's voice had gone by eight." },
        { s: 'tanabe', t: "Buri. Buri, good buri. One-eighty a hundred. Don't touch the, madam, please don't, madam, that's a *display*." },
        { n: "Her arms had stopped being arms around half past seven and become things that wrapped fish, newspaper and string, newspaper and string, the sea bream with their red skins and their bright stunned eyes going out of her hands into strangers' bags for strangers' New Year's tables, one after another, so many she lost count." },
        { s: 'housewife', t: "This one. No, that one. The one with the kind face." },
        { choose: [
          { t: "(Take over the shouting so Tanabe can save his voice.)", then: [
            { n: "It came out of her chest bigger than she'd known it could, cutting across the shed over all the other voices, *buri, good buri*, and every head turned, and Tanabe stared at her with his mouth open and then sat down on a crate and drank Mrs. Fujii's ginger tea for ten whole minutes while Solar sold the rest of his yellowtail out from under him." },
            { stat: { courage: 1 } }
          ] },
          { t: "(Wrap faster. Faster. Make the line move.)", then: [
            { n: "She found the rhythm and stayed in it, fold, fold, string, twist, next, the line moving and moving, and by nine the line was gone and the crates were empty and she was standing in a drift of newspaper offcuts with string burns on both hands and no idea where the last two hours had gone." },
            { stat: { proficiency: 1 } }
          ] }
        ] },
        { n: "When the market closed Tanabe gave her her envelope, which was thicker than usual, and then went into the back and came out with a whole salted salmon wrapped in newspaper, as long as her arm, heavy, stiff as a plank, and put it into her arms like a baby." },
        { s: 'tanabe', t: "For your dormitory. Happy new year. Don't drop it on the monorail." },
        { n: "She did not drop it on the monorail. She held it the whole way across the bay with both arms, standing, while the other passengers looked at her and then at the salmon and then, carefully, out the window, and she was so happy she couldn't have explained it to any of them." }
      ] },

      { id: 'fm-s-hatsuichi', months: [1], scene: [
        { place: 'Port Island · Fish Market' },
        { n: "The first market of the new year began with a ceremony, which, at the harbor, meant the men stood in a ragged half circle in their rubber boots in front of the auction table while the market chairman made a speech nobody could hear over the gulls, and then the auctioneer clapped his hands together three times, sharp, for luck, and everybody clapped with him, and the whole shed rang with it like a struck bell." },
        { n: "There were paper cups of sake going around for the men and hot amazake for anyone underage or driving, and Mrs. Fujii had put a sprig of pine on her cart, and the first fish of the year, a big red sea bream for celebration, went at a price so stupidly high that everyone cheered the buyer and called him a fool in the same breath." },
        { s: 'oka', t: "Year of the tiger. Good year for boats. Bad year for knees." },
        { s: 'tanabe', t: "Every year's a bad year for knees." },
        { choose: [
          { t: "(Clap with them, three times.)", then: [
            { n: "She clapped. It was sharp and clean and it stung her palms in the cold, three times, all together, the whole shed in one rhythm, and when it was over she had the strange, light feeling of having been counted, as if the year had looked down the line and seen her standing in it, and written her down." },
            { stat: { courage: 1 } }
          ] },
          { t: "(Take Oka a cup of amazake. His hands are shaking in the cold.)", then: [
            { n: "He took it in both hands, and held it under his chin for the steam before he drank it, and said something in dialect that she didn't catch, and Tanabe, beside him, translated, without looking at her, *he says you're a good girl, don't let it go to your head*." },
            { stat: { kindness: 1 } }
          ] }
        ] },
        { n: "Then the handbell went, and the year started, and everybody walked toward it, and the gulls came down onto the roof in a long white row like they'd paid for their seats, the same as always, the same as every year, and the sea did what it was going to do." }
      ] }
    ],

    beats: [
      { id: 'fm-arc-1', at: 3, after: '10/17', lean: 'S', scene: [
        { place: 'Port Island · Fish Market' },
        { n: "Old Oka had never asked her anything. In all her Sundays at the market he had passed her lighter crates, shown her the auction numbers, laughed at her in dialect, and once given her half a rice ball without a word, but he had never asked her a question, and so when he came over from his stall at a quarter to seven and stood in front of her with his cap in his hands she thought for a second something was wrong." },
        { s: 'oka', t: "When's the turn?" },
        { n: "Not the board. Not the paper. Her. He was looking at her and not at the chalkboard by the office door, where Tanabe had written up the day's tides in his square hand an hour ago." },
        { s: 'solar', f: 'serious', t: "Eight-oh-five. Slow, with the wind like this. It'll drag." },
        { s: 'oka', t: "Hm." },
        { n: "He nodded. He turned his cap around once in his hands. His eyes, she noticed for the first time, up close, had a milky film over them at the edges, like breath on a window, and he was looking at her face from about thirty centimeters away, the way people look at something they're having trouble seeing." },
        { s: 'oka', t: "Forty years I've had a boat. Forty years I've had to look at the paper every morning. You just know." },
        { s: 'oka', t: "Can't read the paper now. Can't read the board. Eyes are going. Doctor says no more boat. End of the year, I sell her." },
        { n: "Tanabe, at the next crate, had stopped working, and was listening with his back turned. His nephew, at the ice, had stopped working, and was not even pretending not to listen." },
        { s: 'nephew', t: "I'll buy her. The Kamome-maru. I've been saying. I'll pay it off. Every week. Out of wages." },
        { s: 'tanabe', t: "You're an idiot about water. You jumped in after a crate." },
        { s: 'oka', t: "Everybody's an idiot about water at nineteen. I was an idiot about water at nineteen. Water fixes that, or water fixes you." },
        { choose: [
          { t: "Then he should learn the tides before he gets the boat.", then: [
            { n: "Everybody looked at her. The nephew opened his mouth to object, and found he didn't have anything to object with, and closed it again. Oka laughed, a dry wheeze like a bellows, and put his cap back on." },
            { s: 'oka', t: "Hah. Yes. Teach him, then. You. You know it. He doesn't." },
            { stat: { courage: 1 } }
          ] },
          { t: "Whoever gets her should keep her name.", then: [
            { s: 'oka', t: "Hm. Yes. The gull. My wife named her. She said a boat should be named for something that always comes back." },
            { n: "He said it the way men like him said things like that, very fast, to the floor, so it was gone before anyone could look at it too long, and the nephew looked at the floor too, and said he'd keep the name, he'd always meant to keep the name, of course he would." },
            { stat: { kindness: 1 } }
          ] }
        ] },
        { n: "At five past eight, out past the end of the roof, the water stopped pulling off the pilings and hung there, slack and gray and dragging, and Solar felt it under her ribs a moment before she saw it, the small loosening, a breath let go." },
        { n: "Oka, at his stall, couldn't see the pilings from there. He was looking at her instead. When she looked back, he nodded, once, and went back to his fish." }
      ] },

      { id: 'fm-arc-2', at: 6, after: '11/22', prev: 'fm-arc-1', lean: 'S', scene: [
        { place: 'Port Island · Fish Market' },
        { n: "The Kamome-maru was a small white fishing boat with a blue stripe, a wheelhouse the size of a phone booth and forty years of salt in every seam, and she lay at the slip below the market at the end of the morning with her bow against the concrete, and her name across it in white letters that had flaked so far you could barely read them." },
        { s: 'oka', t: "Paint. She can't be sold without her name. It's bad luck. It's worse luck than the eyes." },
        { n: "He couldn't do it himself. He'd tried. He held the brush up to the letters and his hand knew where they were and his eyes didn't, and he'd put the brush down and stood looking at it with his jaw working until the nephew took it from him, gently, and then looked at the bow, and then at Solar, and held it out." },
        { s: 'nephew', t: "My handwriting's terrible. Tanabe says it looks like a crab walked through ink. You do it. I'll hold her steady." },
        { n: "He climbed down into the boat to hold her against the slip. Which meant the only way to reach the bow was from above, from the edge of the dock, lying flat on her stomach on the cold wet concrete with her head and shoulders out over the water, upside down, the brush in her hand, the sea a meter below her face, green and black and moving." },
        { n: "Her whole body went cold. Not from the concrete. From inside, from the center out, a deep still animal cold that said *no*, that said she could not swim, had never been able to, that the water was patient and knew it." },
        { choose: [
          { t: "(Keep your eyes on the letters. Don't look at the water.)", then: [
            { n: "She looked at the letters. Only the letters. The curve of each one, the old white ghost of it under the flaking paint, and she followed it with the brush the way you'd follow a hand on a railing in the dark, and the water moved under her and she didn't look at it, not once, and her hand didn't shake, and her heart was going like a fist on a door." },
            { stat: { courage: 1 } }
          ] },
          { t: "(Ask the nephew to talk to you while you paint.)", then: [
            { n: "He talked. He talked about the boat, where he'd take her, what he'd catch, the girl at the bakery who'd said maybe, his uncle's terrible singing, and she followed his voice and the letters at the same time, and the water moved under her the whole while, and his voice was louder than it, which was the point, which he seemed to understand without being told." },
            { stat: { kindness: 1 } }
          ] }
        ] },
        { s: 'oka', t: "Boy. Watch the water. Not the paint. The paint's her job. The water's yours." },
        { n: "The nephew looked down at the water. Then up at Solar, still flat on the dock with the brush. He looked a little scared, the way you look scared of something you've finally decided to take seriously." },
        { s: 'nephew', t: "...How do you know? When it's going to turn. Teach me." },
        { n: "She told him. Upside down, over the bow, slowly, painting the last letter. That you watch the line of wet on the pilings, not the water, because the water lies and the line doesn't. That the turn comes slack first, then drags, then goes. That the wind leans on it. That you feel it before you see it, if you stand still long enough, here, under the ribs, and that it was all right if he didn't, at first. It would come." },
        { n: "When she rolled over onto her back on the concrete, her arms were shaking and the sky was white and wide and very far away, and the name on the bow was clean and bright in fresh paint, *KAMOME-MARU*, and Oka was leaning down over it with his face almost touching the wood, reading it with his fingertips." },
        { s: 'oka', t: "Good letters. Better than mine." }
      ] },

      { id: 'fm-arc-3', at: 9, after: '1/3', prev: 'fm-arc-2', lean: 'S', scene: [
        { place: 'Port Island · Fish Market' },
        { n: "Oka's last Sunday came in cold and clear, the harbor flat as a plate and the sky over it the hard pale blue of January, and the men had done something they would never in their lives have admitted to planning, which was to come in early and stand around his stall with their coffee, not saying anything, not doing anything, just there." },
        { n: "Tanabe had relented. It had taken six weeks and, Mrs. Fujii said, one very loud argument in the office that the whole shed had heard. The nephew was buying the Kamome-maru out of his wages, a little every week, for as long as it took, and Tanabe had signed the paper as guarantor with a face like he was signing his own death warrant." },
        { s: 'tanabe', t: "If he drowns, I'm selling her for scrap. Tell him that." },
        { s: 'fujii', t: "He's told him. Forty times. The boy's not deaf. Drink your tea." },
        { n: "The tide board by the office door had been written up that morning, and not in Tanabe's square hand. In a hand like a crab had walked through ink. High water. Low water. The times. And at the bottom, in small anxious letters: *slow turn, wind from the hills*." },
        { s: 'nephew', t: "Is it right? I did it from the pilings. Not the paper. Like you said. Is it right?" },
        { n: "She looked at it. She didn't need to look at it. She looked at it anyway, carefully, all the way down, because he needed her to." },
        { choose: [
          { t: "It's right.", then: [
            { n: "He let out a breath so big it steamed, and grinned, and punched the air, and then looked around very quickly to see if anyone had seen him punch the air, and everyone had, and nobody said anything, and Tanabe looked at the board for a long time and then went into the office and shut the door." },
            { stat: { kindness: 1 } }
          ] },
          { t: "Low water's four minutes off. But the turn's right. The turn's the part that matters.", then: [
            { s: 'nephew', t: "Four MINUTES? How can you even— okay. Okay. Four minutes. I'll get it next week." },
            { n: "He wiped it out with his sleeve and wrote it again, and it was right, and he stood back and looked at it with the face of a boy who has just found out how much there is still to learn and is, against all odds, thrilled about it." },
            { stat: { knowledge: 1 } }
          ] }
        ] },
        { n: "At the end of the morning Oka came down the stalls with a ring of keys in one hand and a little paper booklet in the other, a tide table so old its cover had gone soft as cloth, and put the keys into the nephew's hand and closed the nephew's fingers over them, and held them closed a moment." },
        { s: 'oka', t: "She pulls left in a following sea. Don't fight her. She knows." },
        { n: "Then he turned to Solar, and held out the booklet, and on top of it, a stub of white chalk." },
        { s: 'oka', t: "This is the paper. Forty years of it. He doesn't need it. He's got you." },
        { s: 'oka', t: "And this is for the board. You check him. Every Sunday. Somebody has to check him." },
        { s: 'tanabe', t: "She checks him anyway. She checks all of us. She's been checking the board since the day she walked in. She's never once said." },
        { n: "She took the chalk. It was warm from his pocket. She put it in her own, and kept her hand on it there, and couldn't say anything, so she bowed, which seemed to be the right thing, because the old man bowed back, slowly, all the way down, the way you bow at the end of something." },
        { n: "Then he walked out along the seawall toward the bridge with his hands in his pockets, on the landward side, the way she always did, and at the end of the market, where the slip was, he stopped and stood a while looking down at a small white boat with a blue stripe and a clean name on her bow, and then he went on, and didn't look back, because men like him didn't, and because the boat would come back. It was in the name." }
      ] }
    ],

    quiet: [
      { id: 'fm-q-ice', scene: [
        { n: "Shovel, crack, pack. Shovel, crack, pack. Her shoulders had stopped complaining weeks ago. Now they just did it, a rhythm like rowing, and her mind went somewhere else, somewhere flat and gray and quiet, and came back only when the bin was empty." },
        { s: 'tanabe', t: "Look at that. Like a machine. Don't get proud. Machines break." }
      ] },
      { id: 'fm-q-board', scene: [
        { n: "She glanced at the tide board on the way past the office. She didn't need to. She glanced at it anyway, the way you glance at a clock you already know the time on." },
        { n: "It was right. It was always right. She felt, obscurely, that it was polite to check." }
      ] },
      { id: 'fm-q-omelet', scene: [
        { s: 'fujii', t: "You. Here. End piece. Nobody gets the end piece. Don't tell the men." },
        { n: "It was hot and crisp and sweet, and she ate it standing in the cold behind the cart, and Mrs. Fujii watched her eat it with the narrow satisfaction of a general whose plan has worked." }
      ] },
      { id: 'fm-q-forklift', scene: [
        { n: "The nephew came round the corner on the forklift at a speed Tanabe would have docked him for, saw her, slowed down, and drove past at a crawl, very carefully, like a learner at a driving test, until he was round the next corner." },
        { n: "Then she heard him speed up again." }
      ] },
      { id: 'fm-q-gulls', scene: [
        { n: "The gulls were on the edge of the roof in their row, the way they always were. One of them had a bad leg and stood on the other, and always took the same spot, at the end, nearest the water." },
        { choose: [
          { t: "(Leave it a scrap at the end of the roof.)", stat: { kindness: 1 }, then: [
            { n: "It waited until she'd gone back to the ice. Then it came down and took it, neatly, and went back to its spot, and did not thank her, being a gull." }
          ] },
          { t: "(Leave it be.)", stat: { courage: 1 }, then: [
            { n: "It stood on its one leg, facing the water, as if it were waiting for something to come in. She left it to its waiting. She knew a little about that." }
          ] }
        ] }
      ] },
      { id: 'fm-q-morita', scene: [
        { s: 'morita', t: "Show me your hands." },
        { n: "She held them out, red and raw and smelling of the sea. Chef Morita looked at them as if reading a menu, turned them over, and gave them back to her without a word, and bought a mackerel, and didn't complain about it, which Tanabe said was the closest thing to a compliment the man had." }
      ] },
      { id: 'fm-q-akihiko', met: ['akihiko'], scene: [
        { n: "Somebody in a Gekkoukan track jacket ran past the mouth of the market at seven, along the seawall, silver hair flattened by the wind, and lifted one hand at her without slowing down, and was gone round the bend." },
        { s: 'tanabe', t: "That boy runs past here every Sunday. Every Sunday. At seven. Since you started. Huh." },
        { n: "She went back to the ice very quickly." }
      ] },
      { id: 'fm-q-landward', scene: [
        { s: 'nephew', t: "Why do you always walk on that side? The landward side? You do it every single time. Even round the puddles." },
        { n: "She hadn't known she did. She looked down at her own boots, on the landward side of the painted line, as if they belonged to somebody else, somebody who'd decided a long time ago and never told her." }
      ] },
      { id: 'fm-q-dialect', scene: [
        { n: "Old Oka said something in dialect over the crates, and the whole end of the market laughed, and Solar laughed too, without having understood a word of it." },
        { n: "Nobody explained it. Nobody ever explained them. She'd stopped asking. It turned out you could belong to a joke without knowing what it was." }
      ] },
      { id: 'fm-q-envelope', scene: [
        { n: "Tanabe paid her out of the brown envelope as always, cash, counted twice. Her name was on the front in his square hand. He'd spelled it wrong the first few weeks, then crossed it out and spelled it right, and never mentioned it." },
        { s: 'tanabe', t: "Next week. Six. Don't be late. You're never late. Don't start." }
      ] }
    ],

    openers: {
      4: "The fish market in April: wet concrete under the tin roof, the first bonito of the year shining blue and silver on the ice, and the gulls in their row along the gutter like they'd paid for their seats.",
      5: "The fish market in May: light coming earlier over the water every week, the diesel smell sweetening in the warm, and the men in rubber boots rolling their sleeves past the elbow by six.",
      6: "The fish market in June: rain on the tin roof, rain in the gutters, rain in the crates, and everyone at Mrs. Fujii's cart pretending that the canned coffee was the only reason they were standing under her awning.",
      7: "The fish market in July: the ice melting as fast as anyone could shovel it, the bins out back unbearable by eight, and the sea flat and bright and white as a sheet of tin.",
      8: "The fish market in August: the hottest hour of the day before the sun was even up, the men working in undershirts, and the gulls too hot to fight over the scraps.",
      9: "The fish market in September: the first cool morning off the water, the light coming over the breakwater a little later every Sunday, and the saury in from the north, long and silver, stacked on the ice like knives.",
      10: "The fish market in October: wind off the bay with a bite in it, the ice no longer melting, breath steaming over the crates, and Mrs. Fujii's cart doing a roaring trade in anything hot.",
      11: "The fish market in November: dark until the auction bell, cold enough that the ice sat in the crates going gray at the edges, and the men's hands red and stiff and wrapped around cans of coffee between every crate.",
      12: "The fish market in December: the shortest mornings of the year, the yellowtail coming in fat for the season, lists already appearing in housewives' hands, and a sprig of pine tied to the auction bell by somebody who wouldn't admit to it.",
      1: "The fish market in January: the harbor flat and steel-blue under a hard winter sky, breath hanging in the air over the auction, and pine on Mrs. Fujii's cart for the new year."
    }
  },

  /* ── Yeobo's Cafe (Iwatodai Strip) · world H ── */
  yeobos: {
    cast: { tsuji: 'Mrs. Tsuji', saeki: 'Mr. Saeki', miho: 'Miho', rika: 'Rika', ueda: 'Mrs. Ueda', kou: 'Kou',
            newspaper: 'Newspaper man', officewoman: 'Office worker', firstyears: 'First-years' },
    shifts: [
      { id: 'yb-s-tsuji', scene: [
        { place: "Iwatodai Strip · Yeobo's Cafe" },
        { n: "Mrs. Tsuji had run the tobacco stand at the far end of the Strip for fifty years, a booth the size of a wardrobe with a sliding window and a cat asleep on the cigarettes, and on the café's second week she came in out of the wind, took off her scarf, and sat down at the little table by the radiator, the one with the worn spot on the seat that Solar had noticed on her very first day and wondered about, and said, without looking at the menu, that she'd have the usual." },
        { s: 'sunoo', f: 'happy', t: "Of course! Your usual! Coming right up!" },
        { s: 'sunoo', f: 'surprised', t: "Solar. Solar. What's her usual? I've never seen her before in my life. She's never seen me before in my life. She thinks she has." },
        { s: 'tsuji', t: "Walnut cake, dear, and a hot milk coffee. Same as always. Same as I've had since the Olympics." },
        { n: "There was no walnut cake. There had never been a walnut cake. Sunoo looked at the display case, full of croissants and nothing else, with the expression of a man looking for his car in a car park where he is beginning to suspect he never parked a car." },
        { choose: [
          { t: "(Play along. Tell her the walnut cake's sold out today.)", then: [
            { s: 'tsuji', t: "Already? Well. It's popular. It always was. Just the coffee, then. The usual way." },
            { n: "Solar made it the usual way. She didn't know what the usual way was. Her hands did, apparently, a little more milk than anyone would ask for and the sugar stirred in before it went across, and Mrs. Tsuji tasted it and nodded as if a long-standing agreement had been honored." },
            { n: "The next Thursday there was a walnut cake in the display case. A small one, slightly lopsided, with a label in round gel-pen letters, and Sunoo had dark circles under his eyes and would not discuss what time he'd gone to bed." },
            { stat: { charm: 1 } }
          ] },
          { t: "Mrs. Tsuji, what was here before the café?", then: [
            { s: 'tsuji', t: "Before? A café, dear. This café. Are you feeling all right? You look pale." },
            { s: 'tsuji', t: "Sunoo-kun, she looks pale. Feed her something." },
            { n: "Sunoo, behind the counter, had gone very still at the sound of his own name, and then smiled, wide and instant, and said he would, he'd feed her right away, and did, and didn't look at Solar for a full minute afterward, and when he did his eyes were a little too bright." },
            { stat: { knowledge: 1 } }
          ] }
        ] },
        { n: "She left exact change in a neat stack and patted the radiator on her way out, the way you'd pat a dog that had been good, and the bell over the door rang behind her, and the seat by the radiator still had the worn spot, like it always had, like it always would." }
      ] },

      { id: 'yb-s-firstyears', scene: [
        { place: "Iwatodai Strip · Yeobo's Cafe" },
        { n: "Two Gekkoukan first-years had started coming in after school every day Yeobo's was open, a tall one and a short one, Miho and Rika, and they sat at the window table and ordered the smallest tea between them and stared at Sunoo over their textbooks with an intensity normally reserved for exam results posted on a wall." },
        { n: "Today they saw Solar come out of the back in her apron, and both of them went rigid, and the tall one grabbed the short one's sleeve." },
        { s: 'miho', t: "Senpai? Senpai works *here*? The third-year from... you work *here*?" },
        { s: 'rika', t: "Senpai. Senpai, sorry. Can we ask you something. It's very important. It's a matter of life and death." },
        { s: 'miho', t: "Is he your boyfriend? The barista. Is he. You don't have to say. You can blink once for yes." },
        { n: "Across the café Sunoo was talking to the espresso machine in a low encouraging voice and patting it, entirely unaware that his romantic availability was under review at table two." },
        { choose: [
          { t: "No. He's married to this café.", then: [
            { n: "They both sagged with relief and despair at the same time, which is a difficult thing to do in a school uniform, and Sunoo, who had apparently heard the word *married* from across the room the way dogs hear their name, came over with a tray." },
            { s: 'sunoo', f: 'happy', t: "I AM married to this café. It's a very happy marriage. The espresso machine gets jealous. Do you girls want toast? You only ever have the small tea. You can't study on a small tea." },
            { stat: { charm: 1 } }
          ] },
          { t: "Ask him yourselves.", then: [
            { n: "They looked at each other in silent, total horror. Then Rika, the short one, stood up, very pale, and crossed the café like a soldier crossing a field, and asked him, in a voice that went up at the end like a kettle, whether he had a girlfriend." },
            { s: 'sunoo', f: 'surprised', t: "Me? Oh! No, no, I'm... I have a café! I'm very busy! Do you want a cookie?" },
            { n: "She did want a cookie. She took two back to the table and they sat with them on a napkin between them, not eating them, looking at them like love letters, and Solar had to go into the back for a while." },
            { stat: { courage: 1 } }
          ] }
        ] },
        { s: 'sunoo', f: 'sad', t: "They're so cute. Are they eating, though? They only ever order the small tea. Next time I'm giving them toast. Don't stop me. Don't try." }
      ] },

      { id: 'yb-s-rain', weather: ['rain'], scene: [
        { place: "Iwatodai Strip · Yeobo's Cafe" },
        { n: "When it rained the umbrella stand by the door filled up and overflowed and the umbrellas lay along the floor dripping like a row of sleeping animals, and the windows went gold and blind with fog, and the Strip outside became a blur of headlights and shutters, and the café felt like the cabin of a boat in a storm, small and lit and full of the smell of coffee." },
        { n: "Mr. Saeki came in at three, the way he did every day, the delivery driver with the green cap and the clipboard, who drank his coffee standing at the counter in four minutes flat and never once sat down. Today he was soaked to the shoulders. Today, for the first time, he sat." },
        { s: 'sunoo', f: 'sad', t: "Saeki-san! You're drowning! Give me your cap. Give it. I'm putting it on the machine. It's warm on top. It'll be dry in ten minutes. I'm not asking." },
        { n: "He gave it up. He sat at the counter with a towel round his neck and his clipboard in front of him, and looked down at it, and frowned, and turned it so Solar could see." },
        { s: 'saeki', t: "Funny thing. Twelve years I've had this route. This address, it says Hasegawa Stationery. Twelve years. And I've been bringing your milk here." },
        { s: 'saeki', t: "...Haven't I? I must have. I come here every day. I always come here." },
        { n: "He looked at the clipboard a while longer, and at the counter, and at the gold windows, and then put the clipboard face down, as if that settled it, and drank his coffee." },
        { choose: [
          { t: "(Lend him the umbrella nobody's ever come back for.)", then: [
            { n: "There was one in the stand that had been there since before she started, black, a little bent, unclaimed, and she gave it to him at the door, and he looked at it and then at her and said he'd bring it back, and she said he didn't need to, and he said he would, and he did, the next day, dry, folded, with a can of hot tea hooked in the strap." },
            { stat: { kindness: 1 } }
          ] },
          { t: "(Have tomorrow's coffee ready in a to-go cup before he asks.)", then: [
            { n: "The next day when the bell went at three she already had it on the counter, lid on, sleeve on, the way he took it, and he stopped in the doorway and looked at it, and then at her, and laughed, a short surprised laugh, and drank it standing up in four minutes flat, and tipped his wet cap to her on the way out." },
            { stat: { proficiency: 1 } }
          ] }
        ] },
        { n: "The cap came off the espresso machine dry and warm and smelling faintly of coffee, and Sunoo put it on Saeki's head himself, and straightened it, and patted it, and Saeki let him, and went back out into the rain." }
      ] },

      { id: 'yb-s-sunlatte', scene: [
        { place: "Iwatodai Strip · Yeobo's Cafe" },
        { n: "Word had gotten around, the way words get around on a street that short, that the girl at Yeobo's would put a sun in your coffee if you asked nicely, and Sunoo, who had never in his life passed up an opportunity to make a sign, had written it on the chalkboard by the door in pink and yellow chalk, *SUN LATTE*, with a drawing of a sun wearing sunglasses, and underneath, *(ask Solar!!)*." },
        { s: 'sunoo', f: 'happy', t: "It's our bestseller! It's our bestseller and it's been on the board for four hours. I'm a genius. I'm a marketing genius. Two more, table five." },
        { n: "An office worker on her lunch break. Then a man with a briefcase who asked for it in a whisper, like it was something illicit. Then six middle-schoolers at once, pooling their coins on the counter, who wanted to watch her make every single one, and leaned over the counter in a row with their chins on their hands." },
        { s: 'officewoman', t: "Can mine have a face? Somebody at work said hers had a face." },
        { choose: [
          { t: "(Make every sun perfect. Same rays, same circle, every time.)", then: [
            { n: "Her wrist found it and held it, high and low and the little wiggle and pull through, and it came out the same every time, round and bright with its lines going off in every direction, and by the sixth one the middle-schoolers had gone completely silent in the way people go silent watching somebody do a card trick for the sixth time and still not seeing how." },
            { stat: { proficiency: 1 } }
          ] },
          { t: "(Give every sun a different face.)", then: [
            { n: "A smiling one. A sleeping one. A winking one. A sun with its tongue out for the boy who had pushed to the front. A worried one, eyebrows and all, for the man with the briefcase, who looked at it and laughed out loud and said that was exactly how his week was going." },
            { stat: { charm: 1 } }
          ] }
        ] },
        { n: "Sunoo took a picture of every one before it went across the counter. All of them. He said it was for the archive. She asked what archive. He said *the* archive, and tapped his phone, and put it away very carefully, like something that mattered." }
      ] },

      { id: 'yb-s-exams', met: ['jungwon'], after: '12/5', until: '12/17', scene: [
        { place: "Iwatodai Strip · Yeobo's Cafe" },
        { n: "Exam week filled Yeobo's with Gekkoukan uniforms, students at every table with textbooks open and highlighters uncapped and the gray, haunted faces of people who had been told the date of these exams in April and were only now finding out it was real, and Sunoo had instituted free refills for anyone with a textbook out, on the grounds that studying was a crime against the body." },
        { n: "In the corner booth Jungwon sat in his navy blazer with three first-years crowded around him whom, as far as Solar could tell, he had never met before today, writing on a napkin with a red pen, explaining quadratic equations in a voice so polite and so relentless that the first-years looked at him the way you'd look at a very kind landslide." },
        { s: 'jungwon', f: 'neutral', t: "No. Again, please. Slower. You know this. You're panicking, which isn't the same as not knowing. Again." },
        { s: 'sunoo', f: 'sad', t: "He tutors everyone. *Everyone.* Strangers! He doesn't even have exams here. He hasn't eaten since breakfast. I asked. He said *later*. Later is his lying word." },
        { n: "Between orders, Sunoo was quizzing Solar on her own English vocabulary off a stack of flashcards she'd left on the counter, and paying out a corner of croissant for every right answer, and eating a corner himself for every wrong one, which Solar suspected was the real system." },
        { choose: [
          { t: "(Take a plate of croissants to the booth and stand there until he eats one.)", then: [
            { s: 'jungwon', f: 'flustered', t: "I'm in the middle of... thank you. After this problem." },
            { n: "She didn't move. The first-years looked up at her, and then at him, with enormous interest. He looked at the plate, and then at her, and then, with the dignity of a man surrendering a city, picked up a croissant and ate it, all of it, under supervision, while three first-years watched him the way you'd watch a lion eat at the zoo." },
            { s: 'jungwon', f: 'flustered', t: "...Thank you. Please tell Sunoo it's good. Please don't tell him I said please." },
            { stat: { kindness: 1 } }
          ] },
          { t: "(Ask Jungwon to quiz you too.)", then: [
            { n: "He looked up at her for a long moment, with a face that went perfectly still in the way she was learning meant something, and then held out his hand for her flashcards without a word, and went through all of them, in order, out loud, in front of the first-years, and didn't let her get away with a single one." },
            { s: 'jungwon', f: 'happy', t: "Correct. Next. Don't look at me like that. I'm being kind. This is what kind looks like." },
            { stat: { knowledge: 1 } }
          ] }
        ] },
        { n: "When the first-years left they bowed to Jungwon at the door, all three of them, deeply, like people leaving a temple, and Sunoo, on his way past the booth, slipped a croissant in a paper bag into Jungwon's school bag without breaking stride, so smoothly that Solar was fairly sure he'd been doing it for years." }
      ] },

      { id: 'yb-s-yearend', months: [12], after: '12/18', scene: [
        { place: "Iwatodai Strip · Yeobo's Cafe" },
        { n: "The end of the year meant the big clean, the way it did in every shop on the Strip, shutters down halfway and buckets out and everything scrubbed that hadn't been scrubbed since the last big clean, and Sunoo approached it with the burning sincerity of a man who believed that a café should go into a new year perfect or not at all." },
        { s: 'sunoo', f: 'serious', t: "Every surface. Every single one. The top of the shelves. Under the machine. Behind the radiator. I know what's behind the radiator. I've seen it. We're not going to talk about it. We're just going to clean it." },
        { n: "So she was standing on a chair dusting the tops of the shelves when the regulars started coming in. Not to buy anything. Just to bring things." },
        { n: "Mrs. Tsuji with a sprig of pine and bamboo tied with a red-and-white cord, for the door, because a shop without one at New Year was asking for trouble. Mr. Saeki with a calendar from his company, twelve months of delivery trucks photographed against mountains. The two first-years with a tin of cookies, shoved across the counter at Sunoo with no explanation at all, before fleeing. And on the newspaper man's usual table, when Solar climbed down to wipe it, a New Year's card, plain, in an envelope, with one word inside in very neat handwriting. *Thanks.*" },
        { n: "Sunoo stood in the middle of the half-clean café in his rubber gloves holding the card in both hands, and didn't say anything, which he never did, for a long time, which he never did either." },
        { s: 'sunoo', f: 'sad', t: "They brought us things. Solar. They brought us *things*. Like we're... like we're one of the shops. Like we've always been here." },
        { s: 'sunoo', f: 'happy', t: "Sorry. Sorry! I'm fine. It's the bleach. It's very strong bleach." },
        { choose: [
          { t: "(Hang the truck calendar where everyone can see it.)", then: [
            { n: "She hung it on the wall by the register, January already showing, a blue truck in front of a white mountain, and Sunoo stood back and looked at it and said it was the ugliest calendar he'd ever seen and that it was never coming down, ever, not even in February." },
            { stat: { kindness: 1 } }
          ] },
          { t: "(Pin the newspaper man's card up by the till.)", then: [
            { n: "She pinned it up next to the sticky note with the regulars' orders, *Thanks* facing out, and Sunoo looked at it every time he passed the till for the rest of the afternoon, every time, she counted, and every time he smiled at it like it had said something new." },
            { stat: { charm: 1 } }
          ] }
        ] },
        { n: "When they were done the café shone, every surface, even behind the radiator, and the pine on the door smelled green and cold, and they sat at the window table with the last two croissants and didn't turn the lights on yet, and watched the Strip go blue." }
      ] },

      { id: 'yb-s-tteokguk', months: [1], scene: [
        { place: "Iwatodai Strip · Yeobo's Cafe" },
        { n: "In the first days of the year Sunoo made soup. A big pot of it on the back burner, rice cakes sliced thin as coins in a clear broth with egg and green onion and seaweed on top, and he gave a bowl to every regular who came in whether they'd ordered it or not, and stood over each of them until they started eating, with his hands clasped and his face very serious." },
        { s: 'sunoo', f: 'neutral', t: "Rice cake soup. For the new year. You eat it and you're a year older. That's the rule. Everybody gets older together, on the same day. So nobody's left behind." },
        { s: 'tsuji', t: "It's ozoni. It's just ozoni. In a café. In a *bowl*." },
        { s: 'sunoo', f: 'happy', t: "It's not ozoni! It's... okay, it's a little bit ozoni. It's ozoni's cousin. They'd get along." },
        { n: "Mrs. Tsuji ate two bowls. Mr. Saeki ate his standing up, in four minutes flat, and then, unprecedented, asked for more. The newspaper man ate his behind his paper, silently, and left the bowl so clean it looked unused." },
        { n: "Solar's bowl was waiting for her on the counter when she came out of the back, and the broth was hot and plain and tasted of something she couldn't name, a morning, a table, too many people talking at once, and she stood very still with the spoon in her hand for a moment, and then kept eating." },
        { choose: [
          { t: "(Eat every bite, slowly.)", then: [
            { n: "She ate it all, every rice cake, down to the last of the broth, and Sunoo watched from across the counter with his chin in his hand and the face of somebody watching a plant they'd been told would never grow put out a leaf." },
            { s: 'sunoo', f: 'happy', t: "There. Now you're a year older. With everyone. You're not behind." },
            { stat: { kindness: 1 } }
          ] },
          { t: "Where's yours?", then: [
            { s: 'sunoo', f: 'surprised', t: "Mine? I don't... I'm working. I'll have it later." },
            { n: "She ladled a bowl and put it down on the counter and pulled out a stool and stood beside it with her arms folded, the way you'd stand by a stall door for a horse, and he looked at her, and at the stool, and sat, for the first time in opening hours that she'd ever seen, and ate it with his apron still on, and didn't stop smiling the whole way through." },
            { stat: { charm: 1 } }
          ] }
        ] },
        { n: "The bell went. Somebody came in out of the cold. Sunoo got up and was already ladling before they'd sat down." }
      ] },

      { id: 'yb-s-newspaper', scene: [
        { place: "Iwatodai Strip · Yeobo's Cafe" },
        { n: "The newspaper man came in at the same time every day, sat at the same table, ordered the same Americano, no sugar, without speaking, by pointing, and read the paper from front to back, slowly, the way you'd turn the pages in a house where someone was sleeping, and then did the crossword in pen, and left the paper folded on the table with exact change on top." },
        { s: 'sunoo', f: 'happy', t: "He's my favorite. He's like a cat. A cat who reads." },
        { n: "Today, when Solar went to clear the table, the crossword was finished. All of it, every square, in his small black capitals. Except one. One clue in the bottom corner, three squares, left empty. And the paper had been folded so that the clue was facing her side of the table, and the pen had been left beside it, cap off." },
        { n: "*Comes up every morning without being asked (3).*" },
        { choose: [
          { t: "(Fill it in.)", then: [
            { n: "She wrote it in, small, in his pen. *SUN.* The next day there was a new paper on the table, a new crossword, finished, all of it, except one clue, three squares, facing her side, pen beside it." },
            { n: "*Not a moon (3).* She filled that in too. It went on like that for weeks. He never said a word about it. He never once looked up." },
            { stat: { knowledge: 1 } }
          ] },
          { t: "(Leave it for him. It's his crossword.)", then: [
            { n: "She left it, and cleared around it, and the next day the same paper was back on his table, folded the same way, and the corner had been filled in, in his pen, *SUN*, and beside it, very small, a little check mark, as if he'd marked her work and found it correct for not touching it." },
            { stat: { kindness: 1 } }
          ] }
        ] },
        { s: 'sunoo', f: 'surprised', t: "He did a crossword *with* you? He's never done anything with anybody. Solar. Solar, you've been chosen." }
      ] }
    ],

    beats: [
      { id: 'yb-arc-1', at: 4, after: '11/14', lean: 'H', scene: [
        { place: "Iwatodai Strip · Yeobo's Cafe" },
        { n: "The bell went. And went. And went again, and again, until every head in the café had turned, and in the doorway, with the cold coming in around him in a long gray draft, stood a very small boy in a yellow raincoat with the hood up, holding the door open with both hands and staring up at the bell over it as if it were the moon." },
        { n: "He let the door close. The bell rang. He opened it. The bell rang. His whole face lit up each time, the pure, total, scientific joy of somebody who has discovered that the universe responds to him." },
        { s: 'ueda', t: "Kou. Kou, no. Kou, the people are cold. I'm so sorry. I'm so sorry. Kou." },
        { n: "His mother came in behind him with a folded stroller and a bag over each shoulder and the face of a woman who had not slept properly in three years, and got him off the door, and he went boneless in her arms in protest, and she apologized to the whole café at once, to nobody in particular, in a rush." },
        { s: 'ueda', t: "He likes bells. He doesn't really... he doesn't talk yet. Much. He's three. The doctor says some of them don't, yet. Sorry. I don't know why I'm telling you that." },
        { s: 'sunoo', f: 'happy', t: "That's okay! The bell likes him too. Look. It's smiling. Hi, Kou! Welcome to the café!" },
        { n: "Kou looked at Sunoo, unimpressed, and then at the bell again, with longing." },
        { choose: [
          { t: "(Make him bell captain. He gets to ring it whenever someone comes in.)", then: [
            { n: "She found a stool and set it by the door, and Sunoo, catching on instantly, tied a napkin around Kou's neck like an apron, and from then on every time somebody came in Kou opened the door for them, with both hands and enormous gravity, and rang them in, and every single customer thanked him, and he did not acknowledge any of them, being at work." },
            { stat: { charm: 1 } }
          ] },
          { t: "(Make him a cup of warm milk with a sun on top.)", then: [
            { n: "She made it small, in an espresso cup, warm and not hot, and pulled a little sun into the foam, and set it on the low table in front of him, and Kou stopped struggling and stared at the sun for a very long time. Then he looked up at Solar, and pointed at it, and then at her, and then at it again, very definitely, as if explaining a connection she might have missed." },
            { stat: { kindness: 1 } }
          ] }
        ] },
        { n: "His mother sat down. She sat down like she hadn't sat down in a week. And Solar, without deciding to, had already put a cup of coffee in front of her, and a croissant, and then another cup, and then a third, three cups for a table of two, one of whom was three, and stood looking at them." },
        { n: "She did that. She'd noticed it before. When she wasn't paying attention, she set out cups for people who weren't there, as if her hands were used to feeding a whole table, as if somewhere there was always a table, and too many friends at it, and never enough croissants." },
        { s: 'sunoo', f: 'neutral', t: "...On the house. All of it. It's a rule. Nobody leaves here hungry. It's my rule. I made it." },
        { s: 'ueda', t: "Oh, no, I couldn't..." },
        { s: 'sunoo', f: 'happy', t: "You could! You definitely could. Watch. You just pick it up. Like that. See? You're doing great." },
        { n: "When they left, an hour later, Kou opened the door himself, and stopped in it, and rang the bell once, deliberately, looking back over his shoulder. Not at Sunoo. At Solar." }
      ] },

      { id: 'yb-arc-2', at: 9, after: '12/5', prev: 'yb-arc-1', lean: 'H', scene: [
        { place: "Iwatodai Strip · Yeobo's Cafe" },
        { n: "Mrs. Ueda came in on a gray afternoon with Kou asleep in the stroller, flat out under a blanket with his mouth open and one boot off, and she parked him by the radiator and sat down at the table beside it and didn't order anything, and didn't take her coat off, and sat looking at nothing with her hands in her lap." },
        { n: "Her eyes were red. Not freshly. The way eyes get red when they've been red on and off all day and the wind has had a go at them too." },
        { s: 'sunoo', f: 'sad', t: "...Solar. Go. You go. She'll talk to you. People talk to me, but they talk to you like they mean it." },
        { n: "So she went, with a hot chocolate she hadn't been asked for, and set it down, and sat down across from her without asking, the way you'd sit down with a friend, and Mrs. Ueda looked at the hot chocolate for a long time." },
        { s: 'ueda', t: "His grandmother says I'm doing something wrong. That he'd talk if I talked to him more. I talk to him all day. I talk to him so much. I narrate the *laundry*." },
        { s: 'ueda', t: "The doctor says wait. Everyone says wait. He says mama, and no, and that's all. And I wait. And I'm so tired of being told to wait." },
        { choose: [
          { t: "(Don't say anything. Just stay.)", then: [
            { n: "She stayed. She didn't fix anything. She didn't say it would be all right, because she didn't know, and the woman across from her would have heard that she didn't know. She sat there while Mrs. Ueda drank the hot chocolate, slowly, and cried a little more, quietly, into the cup, and then stopped, and the radiator ticked, and Kou slept, and that was all, and it seemed to be enough." },
            { stat: { kindness: 1 } }
          ] },
          { t: "He talks to everyone here. He just doesn't use words.", then: [
            { s: 'ueda', t: "...What do you mean?" },
            { n: "So she told her. That he rang every customer in and checked they'd shut the door properly behind them. That he pointed at the bell when it was time to go. That he pointed at the sun in his milk and then at her, every time, like he was saying something very clear and was only waiting for everyone else to catch up. Mrs. Ueda listened to all of it with her hands around the cup and her mouth pressed tight." },
            { stat: { charm: 1 } }
          ] }
        ] },
        { n: "Kou woke up. He woke up the way small children do, all at once, from nothing to furious, and looked around for something to be furious at, and found Solar, and stopped." },
        { n: "He reached out of the stroller for the napkin dispenser, and the pen Sunoo kept in a cup by the till, which his mother passed him without thinking, and drew, with enormous concentration and his tongue out, on a paper napkin, a circle. And then lines coming off it. All the way round. A sun." },
        { n: "He held it up to Solar. He did not say anything. He didn't have to." },
        { s: 'ueda', t: "He draws those all the time now. At home. On everything. On the walls. On his father's work papers. I didn't know where he'd gotten it." },
        { s: 'sunoo', f: 'happy', t: "...Oh. I know where." },
        { n: "He said it very quietly, from behind the counter, to himself mostly, and put a croissant in a paper bag for Mrs. Ueda to take home, and another one, and a third, three croissants for a family of three, without counting, and Solar watched him do it and felt something in her chest go warm and stupid, and let it." }
      ] },

      { id: 'yb-arc-3', at: 13, after: '1/4', prev: 'yb-arc-2', lean: 'H', scene: [
        { place: "Iwatodai Strip · Yeobo's Cafe" },
        { ifAfter: '1/9', then: [
          { n: "It had been a quiet week at Yeobo's, quieter than a week should be in a café on a busy street, and the bell had started, lately, to sound a little smaller when it rang, though Solar couldn't have said how a bell could do that." }
        ] },
        { n: "When she came in for her shift, the bell went over her head the way it always went, and on the high stool at the counter, with his boots swinging and a cup of warm milk in both hands, sat Kou, in his yellow raincoat, with his mother on the stool beside him." },
        { n: "He turned round at the sound of the bell. He saw her. He put the cup down, very carefully, with both hands, the way he'd been taught, and pointed." },
        { s: 'kou', t: "Sola!" },
        { n: "Everything in the café stopped. Mrs. Ueda's spoon went down on her saucer with a clatter. Behind the counter Sunoo put both hands over his mouth, and made a sound into them like a kettle reaching the boil." },
        { n: "Kou looked around at all of them, at the stillness he'd made, with enormous satisfaction, the way he'd once looked at the bell, the pure scientific joy of somebody who has discovered that the universe responds to him. And then, in case anybody had missed it, he said it again, and pointed at her, and then up at the ceiling, at the sun, wherever he imagined it was." },
        { s: 'kou', t: "Sola. Sun." },
        { choose: [
          { t: "(Crouch down to his height and say his name back.)", then: [
            { n: "She crouched by the stool so her face was level with his, and said *Kou*, plainly, the way you'd say the name of somebody you were very glad to see, and he looked at her mouth while she said it, and then grinned, the whole of his face, and put both of his hands, sticky with milk, flat on her cheeks." },
            { stat: { kindness: 1 } }
          ] },
          { t: "(Go straight to the machine and make him a sun.)", then: [
            { n: "Her hands were shaking a little, which they never did at the machine, and the sun came out lopsided, rays going every which way, and she set it in front of him anyway, and he looked at it and then at her and said it a third time, *Sola*, softer, to the cup, as if introducing them." },
            { stat: { charm: 1 } }
          ] }
        ] },
        { s: 'ueda', t: "His first one. Outside the house. His first word that isn't mama, or no, to anybody who isn't us." },
        { s: 'ueda', t: "And it's yours. Of course it's yours. I should have known it would be yours." },
        { n: "She was laughing. She was crying too, in the brisk, embarrassed way of a woman who has been waiting a long time and isn't going to make a fuss about it now that it's here. She reached across the counter without asking for the pad of yellow sticky notes Sunoo kept by the till, and the gel pen, and wrote, in neat small letters, and held it out to him." },
        { n: "*Kou. Warm milk, one sun. First word outside the house: Solar.*" },
        { s: 'sunoo', f: 'happy', t: "On the list. On the list, right now, right in the middle. Right where I'll see it every single day." },
        { n: "He stuck it there, in the middle of the regulars, between the newspaper man's Americano and Mrs. Tsuji's milk coffee, and smoothed it down with his thumb three times, and then a fourth, to be sure." },
        { n: "When they left, Kou rang the bell on the way out. Twice. Very deliberately. And looked back over his shoulder through the door at her until it closed, and through the gold glass after that, a small yellow shape going away down the Strip, holding his mother's hand, pointing up." }
      ] }
    ],

    quiet: [
      { id: 'yb-q-bell', scene: [
        { n: "The bell over the door rang, and she looked up, and nobody was there. The wind had pushed it open an inch and let it go." },
        { s: 'sunoo', f: 'happy', t: "Welcome to the café! ...Okay, that one doesn't count. But I like to be polite to the wind. You never know." }
      ] },
      { id: 'yb-q-list', scene: [
        { n: "The sticky note of regulars behind the till had grown a second sticky note, and then a third, overlapping like scales, every one in Sunoo's round handwriting, every order, every *no sugar*, every *pretends she doesn't want the marshmallows*." },
        { n: "She read it while the milk steamed. Her name wasn't on it. She found, to her surprise, that she was glad." }
      ] },
      { id: 'yb-q-milk', met: ['akihiko'], scene: [
        { n: "The carton of milk in the little fridge had a strip of masking tape on it that said *AKIHIKO-SUNBAE* with a drawing of a boxing glove that looked like a mitten." },
        { n: "At four the man himself came in, red from the cold, drank a glass of it standing at the counter like a shot, said thank you, and left again at a run, and the whole transaction took nineteen seconds." }
      ] },
      { id: 'yb-q-cups', scene: [
        { n: "Her hand went up and to the left, second shelf, behind the saucers, and came down with the big cup. She'd stopped being surprised by it. She'd started, a little, to be glad of it, the way you're glad of a light switch exactly where you'd reach for it in the dark." },
        { s: 'sunoo', f: 'happy', t: "Hands first! Everything else can catch up. I keep saying it. I'm going to keep saying it." }
      ] },
      { id: 'yb-q-humming', scene: [
        { n: "Sunoo hummed while he wiped the steam wand, something slow and old, a ballad from a radio station that only played ballads, and she found she was humming under it, a harmony, a third above, without knowing the song." },
        { s: 'sunoo', f: 'surprised', t: "You know this one? ...You don't, do you. You just know where it goes." }
      ] },
      { id: 'yb-q-junpei', met: ['junpei'], scene: [
        { n: "Junpei came in, ordered the most expensive drink on the board with the confidence of a man who had money, discovered he did not have money, and stood at the counter patting his pockets with growing despair." },
        { s: 'sunoo', f: 'happy', t: "On the tab, Junpei! The tab is long! The tab is very long! It's okay! I'm writing it in pencil!" }
      ] },
      { id: 'yb-q-tsuji', scene: [
        { n: "Mrs. Tsuji at the radiator table with her milk coffee, the usual way, and the cat from the tobacco stand asleep on her lap, which she had apparently brought with her, and which nobody felt it was their place to mention." },
        { s: 'tsuji', t: "He likes the radiator. Everybody likes the radiator. It's the best seat on the Strip, and it always was." }
      ] },
      { id: 'yb-q-bag', scene: [
        { n: "At closing the display case was emptied into a paper bag, every leftover croissant, and Sunoo pressed it on whoever was standing nearest the door. Tonight that was a startled salaryman who'd only come in to ask for directions." },
        { choose: [
          { t: "(Give him the directions too, and walk him to the corner.)", stat: { kindness: 1 }, then: [
            { n: "He went off toward the station with the bag held to his chest, looking back twice, like a man who'd been given something by a fairy and wasn't sure of the terms." }
          ] },
          { t: "(Tell him it's the toll for the directions.)", stat: { charm: 1 }, then: [
            { n: "He accepted this as a perfectly normal business arrangement, bowed, and left, and Sunoo laughed so hard he had to hold onto the till." }
          ] }
        ] }
      ] },
      { id: 'yb-q-fuuka', met: ['fuuka'], scene: [
        { n: "Fuuka ordered a hot chocolate and said, very firmly, no marshmallows, thank you. Sunoo put extra marshmallows on it and set it in front of her without a word." },
        { n: "She looked at it, and at him, and went pink, and ate every single marshmallow first, and nobody said anything about it, because that was the arrangement." }
      ] },
      { id: 'yb-q-window', scene: [
        { n: "The window had fogged gold from the inside, and Sunoo drew a sun in it with his finger, a big one, rays all round, and then looked at her expectantly." },
        { n: "She drew a croissant next to it. A small, slightly lopsided croissant. He looked at it for a long time, very moved, and then made her draw seven more." }
      ] }
    ],

    openers: {
      4: "Yeobo's in April: the door propped open on the first warm day, the smell of butter going out onto the Strip and stopping people on their way to the station.",
      5: "Yeobo's in May: the window table in a long bar of afternoon light, iced coffee sweating on every saucer, and the bell over the door ringing in the breeze.",
      6: "Yeobo's in June: umbrellas lying along the floor by the door like sleeping animals, the windows fogged gold, and the smell of wet pavement and espresso.",
      7: "Yeobo's in July: the fan going behind the counter, the croissants gone by noon, and the shutters of the pachinko place next door ticking in the heat.",
      8: "Yeobo's in August: iced everything, a long slow afternoon, and the gold windows bright with the Strip outside like a picture of summer someone else was having.",
      9: "Yeobo's in September: the first hot drinks of the season, the light going earlier through the gold glass, and the radiator by the window making its first tentative knock.",
      10: "Yeobo's in October: wind down the Strip rattling the shutters, the windows fogging by three, and the display case smelling of butter and something with cinnamon in it.",
      11: "Yeobo's in November: dark by five, the windows gold and running, the bell going every few minutes, and the warmest room on the whole Strip smelling of butter and espresso and somebody's homework.",
      12: "Yeobo's in December: pine on the door, the windows fogged so thick the Strip was only shapes going past, and the croissants coming out of the oven faster than Sunoo could arrange them in the case.",
      1: "Yeobo's in January: the cold coming in sharp every time the bell went, the radiator ticking, and the smell of butter going out onto the Strip at six-ten every morning and stopping people on their way to the station."
    }
  }
});
