/* Shinjiro Aragaki · XVIII The Moon. Revamp social link data (femc-game.html). Format: link fields in assets/femc/game/core.js, scene lines in scene.js.
   Canon romance before 10/4. The link closes on 10/4 by design (P3 canon, offstage, never narrated here).
   Route turn at rank 8 (the roof); ranks 8–10 branch with ifRoute. He rejoins the dorm on 8/7, so ranks 6–10 play there;
   his home stays the back alley, where he still goes some nights.
   Rank 5 ends with an ifFlag on 'joined-shinjiro' (set by the story's { join: 'shinjiro' } on 8/7) in case it's played late.
   afterMax (hospital visits from 10/5) and christmas (12/24, romance, at his bedside) are data for a later engine pass. */
(window.FEMC_GAME_LINKS ||= []).push({
  id: 'shinjiro', name: 'Shinjiro Aragaki', short: 'Shinjiro', arcana: 'Moon', numeral: 'XVIII', from: 'Persona 3',
  kind: 'sees',
  romance: 'canon',
  starts: '5/12',
  closes: '10/4',
  home: { area: 'portisland', spot: 'Back Alley', slot: 'evening', days: [0, 1, 2, 3, 4, 5, 6],
          hint: 'Evenings, any day, in the back alley behind Port Island Station. Even after he moves back into the dorm, some nights he still goes there.' },
  approach: "A tall guy in a long maroon coat is leaning on the wall in the back alley behind the station, a beanie pulled low, watching the mouth of the street like it owes him money. He looks at you like you're the one who doesn't belong here.",
  cast: { punk: 'Guy by the Vending Machine', nurse: 'Night Nurse' },
  invite: {
    ask: ["you eat yet", "made too much. come get it before it's cold", "alley. if you want", "need someone to carry rice. you're free. come on", "the dog's asking for you. don't make me say that twice", "come taste something. it's not poison"],
    ok: ["yeah. don't take forever", "fine. hurry up", "good. bring an appetite"],
    no: ["whatever. more for me", "tch. fine", "eat something real at least"]
  },
  hangouts: [
    [
      { n: "The alley was its usual self, wet concrete and the hum of the vending machine and a radio upstairs somewhere playing a song nobody had picked, and Shinjiro was leaning on the wall where he always leaned, which happened to be the only dry stretch of it, which she suspected was not a coincidence." },
      { n: "He didn't say hello. He took a plastic container out of the inside of his coat and held it out without looking at her, and inside was rice and something braised, dark and glossy and still warm, with a pair of disposable chopsticks laid across the lid like an afterthought he'd thought about for a while." },
      { s: 'shinjiro', f: 'neutral', t: "Did something different with the sauce. Tell me if it's too salty." },
      { choose: [
        { t: "It could use a little less salt.", notes: 3, then: [
          { n: "He took the chopsticks out of her hand, tried a piece himself, and chewed with his eyes on the middle distance, frowning, as if the sauce had said something personal." },
          { s: 'shinjiro', f: 'neutral', t: "...Yeah. It could." },
          { n: "He looked almost pleased. She had the feeling nobody had told him the truth about his food in a long time, mostly because nobody had been around to eat it." }
        ] },
        { t: "It's perfect.", notes: 2, then: [
          { s: 'shinjiro', f: 'neutral', t: "Nothing's perfect. Eat." }
        ] },
        { t: "Did you make this for me?", notes: 1, then: [
          { s: 'shinjiro', f: 'neutral', t: "No." },
          { n: "There was one container, and he'd been keeping it inside his coat, against his chest, where it would stay warm. She let him have the lie. It seemed to matter to him more than the food did." }
        ] }
      ] },
      { n: "She ate the whole thing standing up in an alley, which was not how she had pictured her evening, and he watched the mouth of the street the entire time like a man keeping lookout, and somewhere around the last bite she understood that that was exactly what he was doing, and that he had been doing it since she walked in." }
    ],
    [
      { n: "He was sitting on an overturned crate by the karaoke place's back door with his coat across his knees, and it took her a second to understand what he was doing, because it was the last thing she would have guessed. He was sewing on a button." },
      { n: "A hotel sewing kit lay open on the crate beside him, the tiny kind with six colors of thread wound around a card, and he was holding the needle up to the streetlight and squinting at the eye of it with the same total, unfriendly focus he gave to onions." },
      { s: 'shinjiro', f: 'neutral', t: "Don't say anything." },
      { choose: [
        { t: "(Hold the coat flat for him.)", notes: 3, then: [
          { n: "She sat on the end of the crate and held the heavy wool flat in both hands. He didn't thank her. He just got faster, the needle going in and out in small neat stitches, and when his knuckles brushed her fingers neither of them made anything of it, very carefully, both at once." }
        ] },
        { t: "I can do that for you.", notes: 2, then: [
          { s: 'shinjiro', f: 'neutral', t: "Can you." },
          { n: "She could not. She found that out in about forty seconds, and the knot she made looked like something a cat had brought up, and he took it back without a word and picked it out with the needle and did it again, properly, which was somehow worse than if he'd laughed." }
        ] },
        { t: "You sew, too?", notes: 2, then: [
          { s: 'shinjiro', f: 'neutral', t: "Buttons don't sew themselves." },
          { n: "He said it like a moral position. It might have been one." }
        ] }
      ] },
      { n: "He bit the thread off, put the kit back in his pocket and shrugged the coat on. The button sat exactly where it should, a little tighter than the others, the way new things sit next to old ones. Then he told her to go home before it got dark, as if it hadn't been dark for an hour, and she went, and he walked three steps behind her to the end of the alley, as if he had been going that way anyway." }
    ],
    [
      { n: "Koromaru found the alley before she did. She heard his tags first, a small bright jingle coming off the concrete behind her, and then he trotted past her ankles with his tail up like a flag and went straight to Shinjiro, like a soldier reporting for duty to the only officer he recognized." },
      { s: 'shinjiro', f: 'surprised', t: "...You followed her all the way out here? Tch. You're supposed to be home." },
      { n: "He said it in the voice people use to scold dogs they have no intention of scolding. Koromaru sat down on his boot." },
      { s: 'koromaru', f: 'happy', t: "Woof!" },
      { choose: [
        { t: "(Pretend not to see him slip the dog something out of his pocket.)", notes: 3, then: [
          { n: "She studied the vending machine with enormous interest. Behind her there was the small rustle of a paper wrapper, and then the wet, grateful sound of a dog getting away with something." },
          { s: 'shinjiro', f: 'neutral', t: "...You didn't see that." },
          { s: 'solar', f: 'neutral', t: "See what." }
        ] },
        { t: "I think he followed you, actually.", notes: 2, then: [
          { s: 'shinjiro', f: 'neutral', t: "He follows whoever's got food." },
          { n: "Koromaru, who had followed her and not any food, leaned his whole weight against Shinjiro's leg in silent protest." }
        ] },
        { t: "He's a good boy.", notes: 2, then: [
          { s: 'shinjiro', f: 'happy', t: "...Yeah. He is." }
        ] }
      ] },
      { n: "Koromaru finished whatever it was, licked Shinjiro's fingers once to make sure there wasn't more, and then went and sat at the mouth of the alley facing the street, upright, ears forward, the way he sat at the top of the shrine steps, as if the two of them were his to get home and he had already worked out the route." },
      { n: "They walked him back together, or he walked them, his white tail going on ahead through the evening crowd like a little flag on a tour. Shinjiro kept one hand in his pocket and the other loose at his side, where Koromaru could bump it with his head every few steps. Koromaru did. Every time, Shinjiro pretended not to notice, and every time, his hand was a little lower." }
    ]
  ],
  ranks: [
    { after: '5/12', title: '1: the back way', place: 'Port Island Station · Back Alley', time: 'Evening', scene: [
      { n: "Port Island Station had a back side the posters didn't mention. You went past the arcade and the karaoke place with half its sign dead and the ramen counter that smelled of powdered broth and old lard, and then the street narrowed, and the streetlights got farther apart, and the air started to smell like cigarettes and old rain and the kind of trouble that never had to raise its voice to be heard." },
      { n: "Solar had not meant to come this way. She had meant to come out of the bookstore and take the monorail home like a person, and her feet had turned left instead of right with the bland confidence they had about most things, and she had let them, because in a little over a month they had been right more often than she had." },
      { n: "They were not right tonight. There were three of them by the vending machine, older than her, in the bored, practiced slouch of people who had nowhere to be and had just decided she was somewhere. One of them pushed off the wall as she passed. Then another." },
      { s: 'punk', t: "Gekkoukan. You lost?" },
      { n: "She did the math the way she always did, fast and cold and from somewhere behind her own eyes. Twelve steps back to the lit street. Nine to the next doorway with a light on. A bag with two paperbacks in it, which was not a weapon, which was barely a bag. Whether running would make it worse, which it usually did, which she knew the way she knew which shoe went on which foot, without having any idea how." },
      { n: "It turned out she didn't need any of it." },
      { s: 'shinjiro', f: 'neutral', t: "Hey." },
      { n: "It came from further down the alley, low and flat and not even slightly interested, and all three of them stopped the way a radio stops when somebody pulls the plug." },
      { n: "He was tall, in a long maroon coat that had been a good coat once and was much too warm for May, a knit beanie pulled low, both hands in his pockets. He didn't come any closer. He didn't need to. He just looked at them, with the flat patience of somebody waiting for a kettle, and whatever they saw in his face reminded them that they had somewhere else to be." },
      { n: "They went. Not fast, because they had their pride, but they went, and the one who'd spoken knocked the side of the vending machine with his knuckles on the way past, for dignity, and it hummed at him, unimpressed." },
      { register: 'shinjiro' },
      { s: 'shinjiro', f: 'neutral', t: "...You're the one Aki found." },
      { n: "He said it to the vending machine, not to her. *Found*, the way you'd say it about an umbrella somebody had left on a train." },
      { choose: [
        { t: "Thank you.", notes: 2, then: [
          { s: 'shinjiro', f: 'neutral', t: "Don't. I didn't do anything." },
          { n: "He had very clearly done something. He very clearly did not want to have done anything, and she let him keep that, because it seemed to be the only thing he'd come out here with." }
        ] },
        { t: "Found. Like an umbrella.", notes: 3, then: [
          { s: 'shinjiro', f: 'surprised', t: "..." },
          { n: "Something happened at the corner of his mouth. It didn't get as far as a smile. It got about as far as a smile's street, looked at the house, and turned back." },
          { s: 'shinjiro', f: 'neutral', t: "...Yeah. He's like that. Picks things up." }
        ] },
        { t: "Who's asking?", notes: 1, then: [
          { s: 'shinjiro', f: 'neutral', t: "Nobody you need to know." },
          { n: "Which was, she thought, exactly what somebody you needed to know would say." }
        ] }
      ] },
      { ifRank: { akihiko: 2 }, then: [
        { n: "And then she had it. The river steps, a warm shake going warmer in her hands, a name Akihiko had tripped over like a crack in the pavement. *Shinji. Old friend. He's around.* Around, apparently, meant here, in the dark behind a station, in a coat too warm for the weather, with knuckles scarred in exactly the places Akihiko's were." }
      ], else: [
        { n: "His knuckles, when he took one hand out of his pocket to tug the beanie lower, were scarred in exactly the places Akihiko's were, the same pale ridges, the same old splits gone shiny, like two people who had learned to hit things from the same teacher, or from each other." }
      ] },
      { n: "He coughed, turning his head into his shoulder, a short dry sound like a door shutting somewhere inside his chest, and put his hand back in his pocket as if he'd taken it out by mistake." },
      { s: 'shinjiro', f: 'neutral', t: "He says you woke up in there. On the floor. Fought your way out." },
      { n: "*In there.* He didn't say the name of it, and he didn't need to. It came off him the way the cold comes off an open fridge, and she understood that whoever he was, he knew about the hour and the tower and the green, and had known about them for a lot longer than she had." },
      { s: 'solar', f: 'neutral', t: "It was more of a walk, by the end." },
      { s: 'shinjiro', f: 'neutral', t: "Whatever." },
      { n: "And that was all. She waited for the rest of it, because there was always a rest of it. Where were you before. What's your name, your real one. Don't you remember anything, anything at all, not even. Mitsuru asked with her eyes and Yukari asked with her eyebrows and Junpei asked out loud with his mouth full, and even Akihiko, who didn't ask, had a way of not asking that left a space exactly the size of an answer. She had started to hear the questions before people opened their mouths, like a song stuck on its first line." },
      { n: "He didn't ask. He looked at her for a while like she was weather, something that was just happening, and then he looked back at the street." },
      { s: 'shinjiro', f: 'neutral', t: "This isn't a place for you. Go home." },
      { choose: [
        { t: "Then what are you doing here?", notes: 3, then: [
          { s: 'shinjiro', f: 'neutral', t: "..." },
          { s: 'shinjiro', f: 'neutral', t: "That's my business." },
          { n: "He turned his face away before she could see what the question had done to it. She saw anyway. It was all in his shoulders, which went up, and then very deliberately down, like a man setting a heavy box on a step." }
        ] },
        { t: "(Say the dorm. Notice that it takes you a second.)", notes: 2, then: [
          { n: "It took her a second. The word *home* went up out of her like a bird off a wire and circled, looking for somewhere to land, and for a moment it seemed to want to go a long way off, further than the bay, further than she could see, and then it came down on the dorm, because the dorm was nearest." },
          { s: 'solar', f: 'neutral', t: "The dorm. I'm going." },
          { n: "He had watched the second go by. He didn't say anything about it. She noticed that, and kept it." }
        ] },
        { t: "You're not my senpai.", notes: 1, then: [
          { s: 'shinjiro', f: 'neutral', t: "Didn't say I was." },
          { s: 'shinjiro', f: 'neutral', t: "Still not a place for you." }
        ] }
      ] },
      { n: "He walked her to the end of the alley anyway, three steps behind, not talking, like a shadow that had decided against its own better judgment to be useful. At the mouth of the street, where the light went bright and ordinary again and a girl on a bike went past ringing her bell at nobody, he stopped." },
      { s: 'shinjiro', f: 'neutral', t: "Don't tell Aki you saw me." },
      { choose: [
        { t: "I won't.", notes: 3, then: [
          { s: 'shinjiro', f: 'neutral', t: "...Good." },
          { n: "He said it to the ground, the way you'd thank someone for holding a door you hadn't wanted held." }
        ] },
        { t: "He'll find out.", notes: 2, then: [
          { s: 'shinjiro', f: 'neutral', t: "He always does. Doesn't mean you have to help him." }
        ] },
        { t: "Why not?", notes: 1, then: [
          { s: 'shinjiro', f: 'neutral', t: "'Cause he'll come down here and stand in the rain and make a speech." },
          { n: "He said it like he'd heard the speech. Several times. In the rain." }
        ] }
      ] },
      { n: "Then he was gone, back into the dark, coat swinging, and she stood under the streetlight with her heart going much too fast and her bag of paperbacks held against her chest, trying to work out which part of the last ten minutes had frightened her." },
      { n: "It wasn't the three men. It was that he had looked at her for a whole minute and wanted nothing from her, not a name, not a before, not a reason, and that she had liked it so much it felt like something she would have to pay for later." }
    ] },

    { after: '5/24', title: '2: koromaru', place: 'Naganaki Shrine', time: 'Evening', scene: [
      { n: "It had rained all afternoon and stopped an hour ago, and Naganaki Shrine was dripping, every leaf and roof tile and stone lantern letting go of the water at its own pace, so that the whole place ticked softly, like a room full of clocks that didn't agree." },
      { n: "She had come up the steps for no reason she could have given anyone, which was the only kind of reason she had for most things lately. Midterms were behind her, and whatever she'd gotten on them was behind her too, and the evening was cool and smelled of wet cedar and incense that had burned down hours ago, and the city at the bottom of the steps sounded very far off, like a party in somebody else's house." },
      { n: "And there, crouched by the offering box with his coat pooled on the wet stone behind him like something that had melted off him, was the man from the alley, feeding a dog." },
      { n: "It was a white Shiba with a red collar and eyes that were, unsettlingly, red as well, and it was eating out of a plastic container with the total, focused delight of a dog who knew precisely who brought the good food, and the man was watching it eat as if it was the one thing in the world going the way it should." },
      { n: "The dog noticed her first. It lifted its head, sniffed once, and trotted over to inspect her shoes with great seriousness, as if they had been reported to it." },
      { s: 'shinjiro', f: 'surprised', t: "...You again." },
      { choose: [
        { t: "(Crouch, and let the dog decide about you.)", notes: 3, then: [
          { n: "She crouched on the wet stone and held out her hand, low, palm down, and the dog considered the hand, and then her face, and then the hand again, the way a customs officer looks at a passport photo, and then decided something and pushed his whole head into her palm with a sigh that went all the way down to his tail." },
          { s: 'shinjiro', f: 'surprised', t: "...He doesn't do that." },
          { s: 'shinjiro', f: 'neutral', t: "He doesn't do that with anybody." }
        ] },
        { t: "Is he yours?", notes: 2, then: [
          { s: 'shinjiro', f: 'neutral', t: "He's nobody's." },
          { s: 'shinjiro', f: 'neutral', t: "The old priest here had him. Priest died. Dog didn't get the message." }
        ] },
        { t: "So this is your business.", notes: 2, then: [
          { s: 'shinjiro', f: 'neutral', t: "Tch." },
          { n: "He looked away. The tips of his ears had gone red, which might have been the cold, if it had been cold." }
        ] }
      ] },
      { s: 'shinjiro', f: 'neutral', t: "Koromaru." },
      { n: "He said it reluctantly, like a password he'd decided against his better judgment to share, and the dog's ears went up at the sound of it, and Solar said it back, quietly, to the dog and not to him, and Koromaru wagged once, hard, which seemed to settle the matter." },
      { s: 'solar', f: 'neutral', t: "And you're?" },
      { s: 'shinjiro', f: 'neutral', t: "...Aragaki." },
      { n: "Just the surname, handed over like a coat-check ticket. She gave him hers, which was only *Solar*, and he didn't ask for the rest of it, and she liked him a little more for that than was probably reasonable." },
      { n: "They sat on the shrine steps while Koromaru finished, a careful distance apart, the stone cold and damp through her skirt. He had a second container in his coat. Of course he did. He set it on the step between them without a word, and when she didn't move he pushed it two centimeters closer with one finger, which from him, she was beginning to understand, was a speech." },
      { n: "Rice and egg and pork that had been braised until it gave up, dark and glossy and still warm from his coat, with ginger in it somewhere, and spring onion cut so thin you could have read through it. She ate with the disposable chopsticks he'd balanced on the lid, and it was easily the best thing she had eaten since April, which was as far back as *since* went." },
      { choose: [
        { t: "Did you make this?", notes: 3, then: [
          { s: 'shinjiro', f: 'neutral', t: "...Somebody has to." },
          { n: "Which was a yes. She was starting to learn the dialect." }
        ] },
        { t: "This is incredible.", notes: 2, then: [
          { s: 'shinjiro', f: 'neutral', t: "It's food." },
          { n: "He said it the way a pianist might say *it's just a song*, and then watched her eat the rest out of the corner of his eye, like a man keeping an eye on a pot." }
        ] },
        { t: "Wait. Is this the dog's?", notes: 1, then: [
          { s: 'shinjiro', f: 'neutral', t: "The dog's got his." },
          { s: 'shinjiro', f: 'neutral', t: "Eat." }
        ] }
      ] },
      { n: "The light was going. Down below them the lanterns along the path came on one at a time, and Koromaru, finished, licked his container clean in long thoughtful strokes, and then went and sat by the offering box, facing the steps, upright, ears forward, exactly the way you'd sit if somebody had told you to wait right there, they'd be right back." },
      { n: "He sat like that for a long time. Nobody came up the steps." },
      { s: 'solar', f: 'neutral', t: "How long has he been doing that?" },
      { s: 'shinjiro', f: 'neutral', t: "Since the old man died. Every evening." },
      { n: "Something moved in her chest, low, under the breastbone, a small cold drop like a stone going into a well, and she didn't know what it was for. Somewhere, she thought, and didn't finish thinking it. Somewhere there might be a door, and somebody sitting facing it. She had no idea whose door, or whose somebody. The feeling didn't come with any of that. It came like a phone ringing in another room of a house she didn't live in, and stopped before she could get to it." },
      { choose: [
        { t: "Does he know the priest isn't coming back?", notes: 3, then: [
          { s: 'shinjiro', f: 'neutral', t: "Probably." },
          { s: 'shinjiro', f: 'neutral', t: "Waits anyway. Dogs are dumb like that." },
          { n: "He watched Koromaru's back for a while, the white fur going blue in the dusk." },
          { s: 'shinjiro', f: 'happy', t: "...Good dumb, though." }
        ] },
        { t: "(Go and sit beside Koromaru for a minute.)", notes: 2, then: [
          { n: "She went and sat on the cold stone beside the dog and faced the steps with him, the way you'd sit beside someone at a bus stop. Koromaru leaned on her, a warm weight against her hip, without taking his eyes off the bottom of the stairs. Behind her she heard Shinjiro let a breath out through his nose that might have been a laugh, if he'd let it be one." }
        ] },
        { t: "Somebody should adopt him.", notes: 1, then: [
          { s: 'shinjiro', f: 'neutral', t: "Somebody tried. Took him all the way out to the other side of the bay." },
          { s: 'shinjiro', f: 'neutral', t: "He walked back. Took him two days." }
        ] }
      ] },
      { n: "She asked before she'd decided to, which kept happening to her around him." },
      { s: 'solar', f: 'neutral', t: "Is anybody waiting for you? Somewhere?" },
      { s: 'shinjiro', f: 'neutral', t: "No." },
      { n: "No pause, and no weight on it either. He said it the way you'd say no to a plastic bag at a register." },
      { s: 'shinjiro', f: 'neutral', t: "Less to let down." },
      { n: "Koromaru turned his head from the steps and looked at him, the way dogs look at you when your voice does something you didn't mean it to, and Shinjiro put his hand down without looking, and the dog came over and put his head under it, and stayed." },
      { s: 'shinjiro', f: 'happy', t: "...He likes you. Don't let it go to your head." },
      { n: "It was the first time she'd seen him smile. It was small and crooked and gone almost before it got there, the way a match goes in wind, and she found that she wanted, fairly badly, to see it again, and filed that under problems for later, which was getting to be a thick file." }
    ] },

    { after: '6/10', title: '3: up to the knuckle', place: 'Iwatodai Strip · Supermarket', time: 'Evening', scene: [
      { n: "June had come down on the bay like a wet towel somebody had thrown over the city and forgotten about, and it had been raining for days, not hard, just constantly, the kind of rain that got into the bread and the bedsheets and the pages of library books. The supermarket on the strip kept its air conditioning so high in self-defense that walking past the produce felt like stepping into a fridge with the light on, and it played the same four songs on a loop, and Solar had been standing in front of the instant noodles long enough to hear all four of them twice." },
      { n: "She was weighing two flavors of the same sadness when someone behind her made a sound of deep, almost physical disapproval." },
      { s: 'shinjiro', f: 'neutral', t: "You're not seriously gonna eat that." },
      { n: "He had a basket on his arm and his coat dark at the shoulders from the rain. The basket was full of real things, things you had to do something to, a daikon like a club, onions, a slab of pork wrapped in white paper, a bunch of something green she couldn't have named under oath, and he was looking at the two cups in her hands as if they had said something about his mother." },
      { choose: [
        { t: "It's a balanced meal. One of each flavor.", notes: 3, then: [
          { s: 'shinjiro', f: 'neutral', t: "...That's not what balanced means." },
          { n: "There was something under it that was almost a laugh, buried so deep she'd have needed a shovel." }
        ] },
        { t: "I don't really know how to cook.", notes: 2, then: [
          { s: 'shinjiro', f: 'neutral', t: "Nobody does. Till they do." }
        ] },
        { t: "Mind your own business, senpai.", notes: 1, then: [
          { s: 'shinjiro', f: 'neutral', t: "Don't call me that." },
          { n: "He didn't say which part. She suspected all of it." }
        ] }
      ] },
      { n: "He took the cups out of her hands, one and then the other, and put them back on the shelf with the grave care of a man returning stolen goods to the scene, and squared them up with the rest, labels out." },
      { s: 'shinjiro', f: 'neutral', t: "Come on." },
      { n: "She followed him around the store while he put things in her basket instead of his, explaining nothing, picking up onions and putting them back for reasons that were invisible to her, weighing a cabbage in each hand as if he were deciding which one to save. Now and then he asked a question without turning around. Is there a pot in that dorm. Is there a lid for the pot. Does anybody in that dorm own a knife that isn't for opening boxes. He nodded grimly at each answer, like a doctor hearing symptoms." },
      { n: "At the rice he stopped and looked at her properly for the first time." },
      { s: 'shinjiro', f: 'neutral', t: "Rice. Pot. How much water." },
      { choose: [
        { t: "(Hold up your hand. Up to the first knuckle.)", notes: 3, then: [
          { n: "Her hand came up before she'd thought about it, fingers flat, and she touched her thumb to the first joint of her middle finger, the way you'd show a child, and the gesture was so sure of itself that it frightened her a little. Up to here. Over the rice. Somebody had shown her that. Somebody had stood beside her at a stove and taken her hand and pressed it flat on the surface of the rice in the pot, and said," },
          { n: "And that was where it stopped. No voice. No kitchen. No face. Just a hand that knew, and another hand on top of it that she couldn't see." },
          { s: 'shinjiro', f: 'surprised', t: "...Huh." },
          { s: 'shinjiro', f: 'neutral', t: "Who taught you that?" },
          { s: 'solar', f: 'sad', t: "I don't know." },
          { n: "He looked at her a second longer than he needed to. Then he let it go, actually let it go, the way you open your fingers at a window and let a moth out." },
          { s: 'shinjiro', f: 'neutral', t: "Doesn't matter who. It's right." }
        ] },
        { t: "Whatever the line on the cooker says.", notes: 2, then: [
          { s: 'shinjiro', f: 'neutral', t: "The line's for people who've given up." },
          { s: 'shinjiro', f: 'neutral', t: "...It's fine. Use the line." }
        ] },
        { t: "Rice comes in a triangle, Aragaki.", notes: 1, then: [
          { s: 'shinjiro', f: 'neutral', t: "Tch." },
          { n: "He took a rice ball from the display by the register and unwrapped it without looking, so the seaweed came out whole, which she had never once managed in her life, as far as she knew, and put it in her hand." },
          { s: 'shinjiro', f: 'neutral', t: "Eat that. I'm gonna explain anyway." }
        ] }
      ] },
      { place: 'Iwatodai Strip', time: 'Evening' },
      { n: "Outside, the rain had thinned to something you could almost walk between, and the strip was all reflections, the pharmacy's green cross and the ramen place's red lantern and the long white smear of the bookstore window lying on the wet road like spilled paint. He carried the heavier bag. She hadn't asked him to. He'd just picked it up, the way you pick up something that's yours." },
      { s: 'shinjiro', f: 'neutral', t: "...He still eating garbage?" },
      { n: "He didn't say who. He didn't have to. There was only one *he* in that voice." },
      { choose: [
        { t: "He put protein powder in his curry last week.", notes: 3, then: [
          { s: 'shinjiro', f: 'happy', t: "...Idiot." },
          { n: "He said it with so much affection that she had to look at the pharmacy for a while." }
        ] },
        { t: "You could ask him yourself.", notes: 2, then: [
          { s: 'shinjiro', f: 'sad', t: "...No. I couldn't." },
          { n: "He walked a little faster after that, and she let him, and caught up at the crossing, where he had waited without looking like a man who was waiting." }
        ] },
        { t: "He's fine. He runs me into the ground at five in the morning.", notes: 2, then: [
          { s: 'shinjiro', f: 'neutral', t: "Course he does." },
          { s: 'shinjiro', f: 'neutral', t: "...Don't let him. He doesn't know when to stop. Never did." }
        ] }
      ] },
      { n: "At the corner where the road split toward the dorm he stopped and handed her the bag, and stood a moment with his empty hand open at his side as if it didn't know what to do with itself now. Then he took out his phone, an old flip one with a crack across the little outside screen." },
      { s: 'shinjiro', f: 'neutral', t: "Give me your number." },
      { s: 'shinjiro', f: 'neutral', t: "In case Aki does something stupid. Not for any other reason." },
      { n: "She gave it to him. He typed it in with one thumb, frowning, like a form that would send him back to the start if he got it wrong, and then her phone buzzed in her pocket, and there was a text from a number she didn't have yet." },
      { phone: [
        { from: 'shinjiro', t: "rice. wash it till the water runs clear" },
        { from: 'shinjiro', t: "don't lift the lid" }
      ], contact: 'New Number' },
      { n: "He'd sent it standing a meter away from her, and he didn't look up from his own phone while she read it. *Don't lift the lid.* She would find out later that he said that part to everybody, twice, the way other people said be careful." },
      { choose: [
        { t: "(Save him as *Don't Lift the Lid*.)", notes: 3, then: [
          { n: "She typed it in with a perfectly straight face and turned the screen so he couldn't see it. He knew anyway, somehow. She watched him decide not to ask, and watched the corner of his mouth lose that particular fight." }
        ] },
        { t: "(Save him as *Aragaki*.)", notes: 2, then: [
          { n: "Aragaki. Plain, the way he'd handed it to her on the shrine steps. He'd have approved, probably, if he approved of anything." }
        ] },
        { t: "(Save him as *Coat*.)", notes: 1, then: [
          { n: "It seemed accurate. It also seemed, the moment she'd done it, a little unkind, and she changed it to his name before the screen went dark, and felt him not looking at her the whole time." }
        ] }
      ] },
      { n: "He didn't say goodbye. He just walked off toward the station with his hands in his pockets and his shoulders up against the drizzle, and she stood at the corner holding a bag of vegetables she didn't know how to cook, feeling, unreasonably, like she'd been looked after, and not having anywhere to put it." }
    ] },

    { after: '6/27', title: '4: the awning', place: 'Port Island Station · Back Alley', time: 'Evening', scene: [
      { n: "It started raining the minute she reached the alley, a thin sideways rain that came in off the bay at an angle and made the neon from the main street run down the wet concrete in long smeared stripes, pink and green and the cold white of the pachinko place that never switched off. Shinjiro was standing under the awning of the ramen counter with the broken sign, and when he saw her he moved over without a word to make room." },
      { n: "The gutter above the awning leaked. It dripped steadily on whoever stood at the left-hand end, a fat slow drop every two seconds, like a tap somebody had given up on. He stood at the left-hand end. He very obviously did not want her to notice, so she noticed quietly, which was getting to be a skill." },
      { s: 'shinjiro', f: 'neutral', t: "...They use powder for the broth in there. You can smell it." },
      { choose: [
        { t: "Could you make it better?", notes: 3, then: [
          { s: 'shinjiro', f: 'neutral', t: "...Yeah." },
          { n: "He said it without any pride at all, which was how she knew it was true. Then he told her how. Bones, which ones, how long, the fat you skim and the fat you leave, why you never let it boil, for eleven minutes, in more words than she had heard him use in total since May, while the rain came down and the broken sign buzzed above their heads like a fly against glass. She understood about half. She didn't interrupt once." }
        ] },
        { t: "It smells pretty good from here.", notes: 2, then: [
          { s: 'shinjiro', f: 'neutral', t: "Hungry people think everything smells good." },
          { s: 'shinjiro', f: 'neutral', t: "...When'd you last eat?" }
        ] },
        { t: "You're a food snob.", notes: 2, then: [
          { s: 'shinjiro', f: 'happy', t: "Somebody's gotta be." }
        ] }
      ] },
      { n: "Footsteps came down the alley at a jog, splashing, and stopped, and Shinjiro's whole body changed before she'd even turned her head. It wasn't the way he had gone still for the three men in May. It was smaller than that and much older, a sort of settling, like a man who has heard a key in a lock he'd been listening for, and wishes he hadn't." },
      { n: "Akihiko stood in the rain just past the edge of the awning in a soaked hoodie with the hood down, because of course it was down, his hair flat on his forehead and his hands closed at his sides in fists he didn't seem to know were fists. He saw Shinjiro. Then he saw her, and his face did something quick and complicated, like a man who has walked into his own kitchen and found two of his friends already sitting at the table." },
      { s: 'akihiko', f: 'surprised', t: "...Solar?" },
      { s: 'shinjiro', f: 'neutral', t: "She got lost. Don't make it a thing." },
      { s: 'akihiko', f: 'neutral', t: "She doesn't get lost. She counts everything." },
      { n: "Which was true, and which nobody had said out loud before, and it went into her like a hand flat on her back. Shinjiro glanced at her sideways for half a second, like a man who had been handed a fact he would have to do something with later." },
      { s: 'akihiko', f: 'serious', t: "Shinji. Come home. Just tonight. Mitsuru won't—" },
      { s: 'shinjiro', f: 'neutral', t: "Mitsuru won't what." },
      { s: 'akihiko', f: 'serious', t: "...She wouldn't say anything. You know she wouldn't. Nobody would." },
      { s: 'shinjiro', f: 'neutral', t: "That's the problem, Aki." },
      { n: "The drop from the gutter hit his shoulder. Hit it again. They stood there, the two of them, one in the rain and one under the drip, one a little taller and one a little broader, with the same scars on the same knuckles, and the air between them had so many years in it that it felt crowded, like a room with every chair taken. She had the very clear sense of being a guest at something, and of being let stay only because neither of them could spare the attention to make her go." },
      { choose: [
        { t: "(Stay quiet. This one isn't yours.)", notes: 3, then: [
          { n: "She stayed quiet. She looked at the broken sign and let the two of them have the alley, and the not-saying took more out of her than she'd expected, because she could feel the words Akihiko wanted somebody to say for him sitting right there in her mouth. She didn't say them. Shinjiro saw her not say them. Something in his jaw let go a notch." }
        ] },
        { t: "He's been asking me to run at five a.m. for two months. He doesn't give up.", notes: 2, then: [
          { s: 'akihiko', f: 'happy', t: "...Two and a half." },
          { s: 'shinjiro', f: 'neutral', t: "Tch. He never did." },
          { n: "For a second it was almost funny, the three of them, and then the drip hit Shinjiro's shoulder again and it wasn't." }
        ] },
        { t: "You should go with him.", notes: 1, then: [
          { s: 'shinjiro', f: 'sad', t: "..." },
          { s: 'shinjiro', f: 'neutral', t: "Don't you start." },
          { n: "He didn't say it unkindly. He said it like she'd picked up something of his she couldn't have known was broken, and he was taking it back before it cut her." }
        ] }
      ] },
      { n: "Akihiko looked at him for a long moment. Then he did the thing she had seen him do in the boxing club with his pride, set it down like a glove on a bench, and picked up something smaller and easier to carry." },
      { s: 'akihiko', f: 'neutral', t: "...Okay. Not tonight. I'll come back." },
      { s: 'shinjiro', f: 'neutral', t: "I know you will." },
      { s: 'akihiko', f: 'neutral', t: "Solar. You coming? It's late." },
      { s: 'shinjiro', f: 'neutral', t: "Go with him." },
      { n: "It wasn't an order. He said it to the street, flat, the way he said everything, but there was something under it she'd started to be able to hear, the way you only start to hear a refrigerator after someone mentions it. *Go with him.* Not because the alley wasn't a place for her. Because Akihiko shouldn't walk home alone tonight, and Shinjiro couldn't be the one to walk him." },
      { choose: [
        { t: "(Go. But leave your umbrella at the left-hand end of the awning.)", notes: 3, then: [
          { n: "She'd been holding it closed this whole time, a cheap clear umbrella from the station kiosk with one bent rib, and she leaned it against the wall at the left-hand end of the awning, right under the drip, and didn't say anything about it, and didn't look back to see if he'd seen. He'd seen. She knew because he didn't say anything either." }
        ] },
        { t: "(Go.)", notes: 2, then: [
          { n: "She went. She looked back once, at the end of the alley, and he was still standing at the left-hand end of the awning letting the gutter hit him, watching the two of them leave like a man watching a train he'd decided not to catch." }
        ] },
        { t: "I'll stay a while.", notes: 1, then: [
          { s: 'shinjiro', f: 'neutral', t: "No. You won't." },
          { n: "Akihiko waited at the mouth of the alley with his hands in his hoodie pocket, getting wetter. In the end she went, because one of the three of them had to stop standing in the rain, and it was clearly never going to be either of the boys." }
        ] }
      ] },
      { place: 'Port Island Station', time: 'Evening' },
      { n: "Akihiko didn't say anything on the platform. He didn't say anything on the monorail either, all the way across the bay, one hand on the strap and the water running off his hair into his collar and the lights of Port Island getting smaller in the black window behind him. At Iwatodai he held the door for her, and on the walk up from the station he matched her pace without saying so, and at the dorm steps he finally spoke." },
      { s: 'akihiko', f: 'sad', t: "Thanks. For being there. I don't know why he lets you." },
      { s: 'solar', f: 'neutral', t: "I don't think he lets me. I think he just doesn't stop me." },
      { s: 'akihiko', f: 'sad-2', t: "...Yeah. That's more than he lets me." },
      { phone: [
        { from: 'shinjiro', t: "go to bed" },
        { from: 'shinjiro', t: "and dry your hair. aki never does" }
      ], contact: 'Aragaki' },
      { n: "It came at eleven. She read it twice. She dried her hair." }
    ] },

    { after: '7/12', title: '5: vitamins', place: 'Port Island Station · Back Alley', time: 'Evening', scene: [
      { n: "July had come in hot and stayed, and by the second week the heat had stopped being weather and become a kind of furniture, something you walked into in every room. Even at eight in the evening the alley held it, the concrete giving back the whole day like a stone left in the sun, and the vending machine had a small crowd of moths at its face, and the air smelled of hot garbage and somebody's mosquito coil and, faintly, under all of it, the sea." },
      { n: "He was there, of course. In the coat, of course. She had stopped asking about the coat. She'd decided it was either a matter of principle or a matter of something underneath it she wasn't supposed to see, and that either way it was his." },
      { s: 'shinjiro', f: 'neutral', t: "You're sweating." },
      { s: 'solar', f: 'neutral', t: "It's thirty degrees." },
      { s: 'shinjiro', f: 'neutral', t: "Huh. Hadn't noticed." },
      { n: "He coughed. Not the dry little door-shutting from May. This one came up from lower down and kept going, and he turned away from her into the wall and braced one hand flat on the concrete, and his shoulders went with it, three times, four, and she stood there with her hands useless at her sides while it went through him like something looking for a way out." },
      { choose: [
        { t: "(Get him water from the machine. Don't say anything.)", notes: 3, then: [
          { n: "She fed the machine a coin and it thought about it and dropped a bottle of water into the tray with a thunk, and she held it out, cold and sweating, and said nothing, and he took it without looking at her and drank half of it in one go, and the cough let go of him slowly, like a hand." },
          { s: 'shinjiro', f: 'neutral', t: "...Thanks." }
        ] },
        { t: "Are you okay?", notes: 2, then: [
          { s: 'shinjiro', f: 'neutral', t: "Fine." },
          { n: "He said it into the wall. It was a word that had been used so often it had worn smooth and didn't mean anything anymore, like a step everybody stands on." }
        ] },
        { t: "You should see somebody about that.", notes: 1, then: [
          { s: 'shinjiro', f: 'neutral', t: "I have." },
          { n: "He didn't say what they'd said. He straightened and wiped his mouth with the back of his wrist and looked at her like the subject had been closed by people with more authority than either of them." }
        ] }
      ] },
      { n: "When he straightened, something fell out of his coat. It hit the concrete with a small hard rattle, a plastic pill bottle, orange, the label half peeled away, and it rolled in a lazy half circle and stopped against her shoe." },
      { n: "She looked at it. He looked at it. For one second neither of them moved, like two people who have both reached for the last of something." },
      { n: "Then he bent and picked it up, quick but not hurried, the way you pick up a thing you have picked up before, and it went back into the inside pocket of the coat, and the coat closed over it, and that, she understood all at once, was what the coat was for." },
      { s: 'shinjiro', f: 'neutral', t: "Vitamins." },
      { choose: [
        { t: "Okay.", notes: 3, then: [
          { n: "Just that. *Okay.* She'd learned it from Akihiko, who had learned it, she suspected, from somebody standing about a meter in front of her. He heard it. She watched him hear it. He had been ready for something else, his whole body braced the way it had been for the three men in May, and when the something else didn't come he didn't seem to know what to do with his hands." },
          { s: 'shinjiro', f: 'neutral', t: "...Yeah." }
        ] },
        { t: "Those aren't vitamins.", notes: 2, then: [
          { s: 'shinjiro', f: 'neutral', t: "No." },
          { s: 'shinjiro', f: 'neutral', t: "Doesn't matter what they are." },
          { n: "He said it with no heat at all. That was the frightening part." }
        ] },
        { t: "Does Akihiko know?", notes: 1, then: [
          { s: 'shinjiro', f: 'sad', t: "..." },
          { s: 'shinjiro', f: 'neutral', t: "No. And he's not gonna." },
          { n: "It wasn't a request. It wasn't quite a threat, either. It sat somewhere in between, where most of the things he said seemed to live." }
        ] }
      ] },
      { s: 'shinjiro', f: 'neutral', t: "Walk. It's too hot to stand here." },
      { place: 'Moonlight Bridge', time: 'Night' },
      { n: "They walked the long way, which was the only way you could walk from Port Island to Iwatodai, over the bridge, with the traffic going past in hot gusts and the water wide and black on either side and the whole city laid out ahead of them in lights like something spilled. Halfway over there was a breeze, the first one all day, and he stopped there at the rail without saying he was stopping, and she stopped too." },
      { n: "Below them a boat went under the bridge, a small one with a single lamp on its mast, and they both watched it all the way out the other side, like it was going somewhere they'd heard about." },
      { s: 'solar', f: 'neutral', t: "Can I ask you something? You don't have to answer." },
      { s: 'shinjiro', f: 'neutral', t: "That's how all your questions go." },
      { s: 'solar', f: 'neutral', t: "What are you doing next year?" },
      { n: "He didn't answer for so long that she thought he'd taken her up on the not-answering, and she was about to say never mind when he moved, a small shrug, the coat going up and down on his shoulders." },
      { s: 'shinjiro', f: 'neutral', t: "Don't really do next year." },
      { s: 'shinjiro', f: 'neutral', t: "Next meal. Maybe the one after. That's about as far as it goes." },
      { n: "He said it the way you'd tell somebody the bus didn't run past nine. Not sad. Not anything. A timetable." },
      { n: "It should have frightened her, and it did, a little, low down, a cold coin in the stomach. But under that was something worse that she didn't want to look at, which was recognition. Because she didn't do last year. She didn't do anything before the sixth of April. The whole of her went back about three months and then stopped at a tiled floor in the green, the way this bridge stopped at the water, and everything past it was dark, and the sound of something moving in the dark." },
      { choose: [
        { t: "I don't do last year. So between us we've got about three months.", notes: 3, then: [
          { s: 'shinjiro', f: 'surprised', t: "..." },
          { n: "He turned his head and looked at her, really looked, the way he'd looked at her hand in the supermarket, and then he did something she had never heard him do, which was laugh. It was short and rough and came out of him like it had been stuck there a while, and it set the cough off again, and he waved her away when she reached for him, still laughing into his sleeve." },
          { s: 'shinjiro', f: 'happy', t: "...Three months. Yeah. That's about right." }
        ] },
        { t: "That sounds lonely.", notes: 2, then: [
          { s: 'shinjiro', f: 'neutral', t: "It's quiet." },
          { s: 'shinjiro', f: 'neutral', t: "Different thing." },
          { n: "She wasn't sure it was. She thought he probably wasn't either." }
        ] },
        { t: "You should plan for something. Anything.", notes: 1, then: [
          { s: 'shinjiro', f: 'neutral', t: "Why?" },
          { n: "It wasn't rhetorical. He actually wanted to know, and she found, standing there with the whole lit city in front of her and nothing at all behind her, that she couldn't think of an answer she believed." }
        ] }
      ] },
      { n: "He didn't tell her she'd get her memory back. He didn't tell her it would be fine, or that somebody was surely out there looking for her, or that she should try harder, or see a doctor, or look at old photographs she didn't have, or any of the things people said when they wanted her past for her more than she did. He didn't seem to think she was missing anything. He seemed to think she was here. She hadn't known how heavy the other thing was until he didn't hand it to her." },
      { n: "They walked the rest of the bridge without talking, and the breeze came with them most of the way." },
      { ifFlag: 'joined-shinjiro', then: [
        { n: "At the dorm he went up the steps ahead of her and held the door, and then stood in the hall for a second like a guest who wasn't sure which slippers were his, before he went down the hall to the kitchen to see what nobody had done with the rice." }
      ], else: [
        { n: "At the corner by the dorm he stopped, the way he always stopped, a few meters short, as if there were a line painted on the pavement that only he could see. He looked up at the building for a while, at the lit windows on the second floor and the dark ones on the third. Then he turned around and went back the way they'd come, the whole length of the bridge, alone, with his hands in his pockets and the bottle in his coat." }
      ] }
    ] },

    { after: '8/9', title: '6: an empty fridge', place: 'Port Island Station · Back Alley', time: 'Evening', scene: [
      { n: "He still went to the alley. Not every night. Some nights after dinner he'd put the coat on in the front hall, in August, and go out without telling anybody where, and Akihiko would watch the door shut and not say anything, and the whole lounge would carefully not say anything along with him. Solar found him there, leaning in his old place by the vending machine like a man checking on a stove he'd already turned off." },
      { s: 'shinjiro', f: 'neutral', t: "...Groceries. You're carrying half." },
      { place: 'Iwatodai Dorm · Kitchen', time: 'Evening' },
      { n: "He had been living in the dorm since the seventh. There was a beanie on the hook by the front door now, and a second pair of boots by the shoe rack bigger than anybody's, and a door on the third floor that had been shut the whole time she'd lived there had a light under it at night. Ken had moved in that same week, and so, by some arrangement nobody fully explained, had Koromaru." },
      { n: "And the kitchen, which as far as Solar could tell had always been a place where things got microwaved, had started to smell like food." },
      { n: "Tonight he unpacked the bags onto the counter in an order, the cold things first, then the heavy things, then the onions in a heap like an argument he intended to win, and then he opened the fridge to put the cold things in and stood there with the door open and the light on his face, staring in, with an expression of slow and profound disappointment." },
      { s: 'shinjiro', f: 'neutral', t: "There's nothing in here." },
      { n: "There was not nothing. There were eleven protein shakes in a neat row on the top shelf, a jar of pickled plums somebody's grandmother had sent, three eggs of uncertain age, a bag of consommé chips that someone had put in the fridge on purpose and someone else had left there out of respect, a carton of milk tea, and a single slice of melon on a plate under plastic wrap with YUKARI'S written on the wrap in marker, twice, underlined." },
      { s: 'shinjiro', f: 'neutral', t: "What have you people been eating." },
      { choose: [
        { t: "You're back.", notes: 3, then: [
          { s: 'shinjiro', f: 'neutral', t: "...Yeah." },
          { n: "He closed the fridge and looked at her properly for the first time that night, down the length of the kitchen, the receipt still in one hand." },
          { s: 'shinjiro', f: 'neutral', t: "You look like you're happy about it." },
          { s: 'solar', f: 'happy', t: "I am." },
          { s: 'shinjiro', f: 'surprised', t: "...That's annoying." },
          { n: "It did not sound like he found it annoying. It sounded like he didn't know where to put it, and was looking around the kitchen for a shelf." }
        ] },
        { t: "Hagakure, mostly. Akihiko pays.", notes: 3, then: [
          { s: 'shinjiro', f: 'happy', t: "...Course he does." },
          { s: 'shinjiro', f: 'neutral', t: "He get the extra egg?" },
          { s: 'solar', f: 'neutral', t: "Every time." },
          { n: "Something went across his face and was gone, too fast to name, the way a bird crosses a window. He shut the fridge." }
        ] },
        { t: "Cup ramen. Junpei calls it a food group.", notes: 2, then: [
          { s: 'shinjiro', f: 'neutral', t: "Tch. Course he does." },
          { n: "He started a list on the back of the receipt, standing at the open fridge with the cold falling out around his ankles. It was long. It got longer while she watched." }
        ] }
      ] },
      { n: "He cooked. She sat on the counter by the rice cooker because he told her not to touch anything, and then he told her to hand him things, which involved touching them, and she didn't point that out. He moved around the dorm kitchen as if he'd drawn it himself, everything within one step, the pan already moving in his left hand while his right reached for the oil, and he talked while he worked, not to her, exactly. To the food. Short instructions under his breath. Not yet. There. Don't you dare." },
      { n: "Koromaru came in at the first smell of onions and lay down across the doorway with his chin on his paws, which made him a sort of draft excluder for the whole hall, and his eyes followed the pan the way other dogs' eyes follow a ball." },
      { s: 'koromaru', f: 'happy', t: "Woof." },
      { s: 'shinjiro', f: 'neutral', t: "You ate. I watched you eat." },
      { s: 'koromaru', f: 'sad', t: "...Woof." },
      { choose: [
        { t: "(Don't see the piece of pork that falls, entirely by accident, off the board.)", notes: 3, then: [
          { n: "It fell off the board by accident. It fell off the board by accident with a precise little flick of the knife, toward the doorway, and Koromaru caught it out of the air without lifting his chin, and Solar studied the rice cooker with enormous interest." },
          { s: 'shinjiro', f: 'neutral', t: "...You didn't see that." },
          { s: 'solar', f: 'neutral', t: "See what." }
        ] },
        { t: "He missed you.", notes: 2, then: [
          { s: 'shinjiro', f: 'neutral', t: "He missed food." },
          { n: "Koromaru, who had followed Shinjiro from room to room since the seventh like a shadow with a tail, lifted his head and looked at him in silent reproach." }
        ] },
        { t: "Does he always beg like this?", notes: 1, then: [
          { s: 'shinjiro', f: 'neutral', t: "He doesn't beg. He waits." },
          { s: 'shinjiro', f: 'neutral', t: "There's a difference. Not much of one." }
        ] }
      ] },
      { n: "Ken came down halfway through, in slippers, small and neat, to fill a glass at the sink, and said good evening, Aragaki-san, very politely, to Shinjiro's back. Shinjiro said evening without turning around. The knife didn't stop. Only she was close enough to see that it went slower for a while, and that he didn't look up from the board again until the slippers had gone all the way back up the stairs." },
      { n: "They ate at the counter, the two of them and then three and then everybody, because the smell went up the stairwell like a rumor and brought them down one at a time, Junpei first with a fork already in his hand. Ginger pork and rice and a soup with tofu in it, and the rice had been washed until the water ran clear, and nobody had lifted the lid. Junpei said dude, this is insane, with his mouth full. Mitsuru took one bite and set her chopsticks down and said nothing for a moment, which from Mitsuru was a standing ovation." },
      { n: "Akihiko ate standing up, leaning in the doorframe, two bowls, and didn't say anything about it at all, and didn't need to." },
      { n: "Afterward, when they'd all drifted off and the dishes were in the rack and the kitchen smelled like a kitchen, he was drying the pan with a towel, slowly, as if it had been lent to him." },
      { s: 'shinjiro', f: 'neutral', t: "...Don't tell anybody I came back for the dog." },
      { n: "She looked at Koromaru, asleep on his side across the doorway with his legs going in a dream. She thought about a pair of slippers on the stairs, and a knife going slower." },
      { choose: [
        { t: "I won't.", notes: 3, then: [
          { s: 'shinjiro', f: 'neutral', t: "Good." },
          { n: "It was another thing he'd asked her not to tell. She was starting a collection, and it was getting heavy, and she didn't mind." }
        ] },
        { t: "Was it the dog?", notes: 2, then: [
          { s: 'shinjiro', f: 'neutral', t: "..." },
          { s: 'shinjiro', f: 'neutral', t: "Hang the pan up. Handle out." },
          { n: "She hung the pan up, handle out. It was the only answer she was going to get, and it was, she thought, a fairly clear one." }
        ] },
        { t: "Everybody knows you came back for Akihiko.", notes: 1, then: [
          { s: 'shinjiro', f: 'sad', t: "...Don't." },
          { n: "He hung the pan up himself and went upstairs, and she was left in the clean kitchen with the sleeping dog and the feeling that she'd put her hand flat on a stove to check whether it was hot." }
        ] }
      ] }
    ] },

    { after: '8/20', title: '7: stop poking it', place: 'Iwatodai Dorm · Kitchen', time: 'Evening', scene: [
      { n: "He'd said it at dinner the night before without looking up from his bowl. *You said you can't cook.* And she'd said so?, and he'd said kitchen, eight, in the tone of a man setting a court date, and Junpei had made a noise into his miso soup like a kettle coming to the boil, and Yukari had kicked him under the table." },
      { n: "So, eight. The kitchen with the window open on the hot night and the cicadas outside going like a machine somebody had left running, and two aprons, one of which said KIRIJO GROUP SUMMER RETREAT 2006 in faded print and had clearly been found at the back of a cupboard, and which he handed to her without comment, keeping the plain one for himself." },
      { s: 'shinjiro', f: 'neutral', t: "Onions. Thin." },
      { n: "She cut. He watched." },
      { s: 'shinjiro', f: 'neutral', t: "Thinner. You cut like you're mad at it." },
      { choose: [
        { t: "Maybe I am mad at it.", notes: 3, then: [
          { s: 'shinjiro', f: 'happy', t: "...Ha." },
          { n: "It came out of him short and surprised, like a cough, and he looked almost offended that she'd gotten it out of him, and then he looked at the onion, and then at her, and she could have sworn he was trying very hard not to do it again." }
        ] },
        { t: "Show me.", notes: 3, then: [
          { n: "He stepped in behind her and put his hand over hers on the knife, slowly, carefully, the way you reach for something that might startle, his chest not quite touching her back. The blade went down through the onion in one clean thin slice and the board knocked once under it. His hand was warm and dry and rough across the knuckles, and he smelled of soy and cold air and the dish soap he insisted on buying, and she did not, at all, in any way, think about any of it." },
          { s: 'shinjiro', f: 'neutral', t: "Like that. Let the knife do the work." },
          { n: "He stepped back. She cut the next one by herself and it was thinner, and neither of them mentioned that her ears had gone red, which might have been the onions." }
        ] },
        { t: "It's an onion. It's going to get cooked.", notes: 1, then: [
          { s: 'shinjiro', f: 'neutral', t: "Everything's gonna get cooked. Doesn't mean you get to be sloppy about it." }
        ] }
      ] },
      { n: "He talked while he cooked, which had surprised her the first time and didn't anymore. Not about anything, really. Why you salted the water. How you could tell the oil was ready by the way it moved, lazy and then all at once, like a crowd. Why the cheap soy was fine for some things and a crime for others. It was the same low flat voice he used for everything, but she had started to hear the difference, and in the kitchen it was different. It was a voice for somewhere he was allowed to be." },
      { n: "The pork went in. The kitchen went loud and then soft. He put the lid on and turned the flame down to a blue whisper and leaned back against the counter with his arms folded." },
      { n: "She lifted the lid to look. He put it back down without a word. She waited a full minute and lifted it again." },
      { s: 'shinjiro', f: 'neutral', t: "Stop poking it." },
      { s: 'shinjiro', f: 'neutral', t: "You gotta let it simmer. Most things come out better if you stop poking them." },
      { n: "She thought that might be the most he'd ever told her about himself. He hadn't said anything about himself at all." },
      { choose: [
        { t: "Is that a cooking rule or a you rule?", notes: 3, then: [
          { s: 'shinjiro', f: 'neutral', t: "..." },
          { s: 'shinjiro', f: 'neutral', t: "Yes." },
          { n: "It was, she decided, the best answer anyone had given her all summer." }
        ] },
        { t: "(Put your hands flat on the counter. Leave it.)", notes: 2, then: [
          { n: "She put her hands flat on the counter and left it. It cost her something every single minute. He watched her not lift it with a kind of grim approval, like a coach watching a runner not go out too fast." }
        ] },
        { t: "What if it burns?", notes: 1, then: [
          { s: 'shinjiro', f: 'neutral', t: "Then you'll smell it." },
          { s: 'shinjiro', f: 'neutral', t: "It won't. You turned it down." },
          { n: "She hadn't. He had. He let her think she had anyway." }
        ] }
      ] },
      { s: 'akihiko', f: 'happy', t: "Is that the ginger thing? I'm adding protein." },
      { n: "Akihiko came in already holding the tub, as if he'd been waiting on the stairs for the smell to reach the second floor, and possibly he had." },
      { s: 'shinjiro', f: 'neutral', t: "You put that powder in my pot, Aki, I'm putting you in it." },
      { s: 'akihiko', f: 'serious', t: "It's unflavored." },
      { s: 'shinjiro', f: 'neutral', t: "Out." },
      { n: "Akihiko went, eventually, after stealing a slice of pork off the board and getting his knuckles rapped with a wooden spoon, and he went out grinning and shaking his hand, and Shinjiro watched him go, and for a second, with the spoon still raised, he looked about twelve years old, and very fond, and so tired it went all the way down." },
      { choose: [
        { t: "You missed him.", notes: 3, then: [
          { s: 'shinjiro', f: 'sad', t: "...Every day." },
          { n: "He turned back to the stove before she could see his face. She didn't need to see it." }
        ] },
        { t: "He's coming back for more.", notes: 2, then: [
          { s: 'shinjiro', f: 'neutral', t: "I know. I made extra." }
        ] },
        { t: "Is the protein really unflavored?", notes: 1, then: [
          { s: 'shinjiro', f: 'neutral', t: "Nothing he owns is unflavored. Tastes like a gym bag." }
        ] }
      ] },
      { n: "It was nearly done when Ken came to the door." },
      { n: "He'd come down for something, a glass of water, a book left in the lounge, and he stopped on the line where the hall floor turned into kitchen tile with his slippers lined up exactly along it, and looked in. At the pot. At Solar in her ridiculous Kirijo apron. At Shinjiro." },
      { n: "Something happened to his face. It was only for a second, and it didn't belong on a face that young, something flat and old and patient, like a stone at the bottom of clear water. Then it was gone, and he was ten again, and polite." },
      { s: 'ken', f: 'happy', t: "That smells wonderful. Good evening, Aragaki-san." },
      { s: 'shinjiro', f: 'neutral', t: "...Evening." },
      { n: "Ken got his water and said goodnight, Solar-san, and went back up the stairs, each step the same weight as the last. Shinjiro didn't move until the steps had stopped. Then he turned the flame off under the pot, carefully, all the way, and took off his apron and folded it in half and in half again and laid it on the counter, and went out through the hall, and she heard the front door." },
      { choose: [
        { t: "(Turn off the rice. Then go after him.)", notes: 3, then: [
          { place: 'Iwatodai Dorm · Front', time: 'Night' },
          { n: "He was sitting on the front steps with his elbows on his knees and his hands hanging, looking at the street, at nothing, at the streetlight with its small cloud of moths. She sat down a step above him and off to the side, where she could see him and he didn't have to see her." },
          { s: 'shinjiro', f: 'sad', t: "...Don't ask." },
          { s: 'solar', f: 'neutral', t: "I wasn't going to." },
          { n: "They sat until the cicadas gave up for the night. Somewhere a car went past with its windows down and a baseball game coming out of them, and somebody hit something, and a stadium full of people a long way off was very happy about it." },
          { s: 'shinjiro', f: 'neutral', t: "...Food's getting cold." },
          { s: 'solar', f: 'neutral', t: "You turned it off." },
          { s: 'shinjiro', f: 'neutral', t: "Yeah." },
          { n: "He didn't get up. Neither did she. After a while he said thanks, to the street, so quietly she might have been meant to miss it, and she didn't." }
        ] },
        { t: "(Let him go. Plate it up the way he would.)", notes: 2, then: [
          { n: "She let him go. She plated it the way she'd watched him do it, rice first, the pork laid over it, the sauce last, and covered his with a second plate to keep it warm and left it at the end of the counter where he'd see it. It was still there when she went up. In the morning the plate was washed and in the rack and the pot was scrubbed, and in its place on the counter was a single slice of melon on a saucer, with no name on it at all." }
        ] },
        { t: "(Go upstairs and ask Ken what that was.)", notes: 1, then: [
          { n: "She got as far as the second-floor landing. Ken's door was shut, with a light under it and the sound of a pencil behind it, steady, going over and over something. She stood there a while with her hand up, not knocking, and then went back down, and the front door was still shut, and the kitchen was empty, and the pork was very good, and she ate it alone." }
        ] }
      ] }
    ] },

    { after: '8/31', title: '8: the roof', place: 'Iwatodai Dorm · Rooftop', time: 'Night', music: 'tender', scene: [
      { n: "The heat had broken. It went the way fevers go, all at once in the night, and the first cool evening afterward felt like being forgiven for something you couldn't remember doing. The roof of the dorm caught the wind off the bay and held it, and the laundry somebody had forgotten on the line snapped and billowed like it was trying to leave." },
      { n: "He was by the water tank with his hands in his coat, looking at the moon the way everybody in the dorm had started to look at it, sideways, now and then, like a clock in a room where you're waiting to be called." },
      { s: 'shinjiro', f: 'neutral', t: "...Figured you'd find me." },
      { choose: [
        { t: "You wanted to be found.", notes: 3, then: [
          { s: 'shinjiro', f: 'neutral', t: "...Maybe." }
        ] },
        { t: "Koromaru told me.", notes: 2, then: [
          { s: 'shinjiro', f: 'happy', t: "Traitor." },
          { n: "Koromaru, who had come up the stairs behind her and was now lying across the doorway to the roof as if he had been posted there, thumped his tail once on the concrete and did not look sorry." }
        ] },
        { t: "I came up for the air.", notes: 1, then: [
          { s: 'shinjiro', f: 'neutral', t: "Sure." },
          { n: "He didn't believe her. He moved over at the rail anyway." }
        ] }
      ] },
      { n: "They stood at the rail. The city was laid out below them the way it always was from up here, the station and the strip and the long chain of lights around the bay, the monorail going over the water in its slow silver line, and everything in it going on as if there were nothing underneath it, no hour, no tower, nothing at all." },
      { n: "Her phone buzzed in her pocket. Once. She took it out and looked, because she always looked." },
      { n: "A number she didn't know. They had been coming lately, late at night mostly, from people who wrote to her as if she had only just stepped out of the room, and she still didn't know what to do with them, so she did what she always did, which was read it twice and put the phone face down on the rail, and then turn it face up again, which was about as far as she ever got." },
      { s: 'shinjiro', f: 'neutral', t: "...You gonna answer it?" },
      { s: 'solar', f: 'neutral', t: "I don't know." },
      { n: "She waited for the rest. Everybody had a rest. Junpei thought she should call every number back right now, tonight, on speaker. Yukari thought she should give the phone to Mitsuru. Mitsuru thought a great many things, very quietly. Even Akihiko, who never pushed, had a way of not pushing that you could feel him doing, like a man leaning on a door from the other side so it wouldn't swing." },
      { s: 'shinjiro', f: 'neutral', t: "Then don't know." },
      { s: 'shinjiro', f: 'neutral', t: "Nobody's timing you." },
      { n: "He said it to the city, flat, and went back to looking at it, and that was it. That was the whole of his opinion. She stood there with the phone warm in her hand and felt something go out of her shoulders that she hadn't known was in them, a weight she'd carried so long she had started to think it was her posture." },
      { choose: [
        { t: "You never tell me what to do.", notes: 3, then: [
          { s: 'shinjiro', f: 'neutral', t: "Not my business where you end up." },
          { s: 'shinjiro', f: 'neutral', t: "...Just eat first. Wherever it is." }
        ] },
        { t: "Akihiko would tell me to find out.", notes: 2, then: [
          { s: 'shinjiro', f: 'neutral', t: "Aki'd tell you to run it off at five in the morning." },
          { s: 'shinjiro', f: 'neutral', t: "He's not wrong about everything. He's just loud about it." }
        ] },
        { t: "What would you do?", notes: 1, then: [
          { s: 'shinjiro', f: 'neutral', t: "Me?" },
          { s: 'shinjiro', f: 'neutral', t: "Nobody's texting me." },
          { n: "He said it like a fact about the weather, and she was sorry she'd asked." }
        ] }
      ] },
      { n: "For a long time he didn't say anything. The wind came off the water. Down in the street a scooter went by, and then it was quiet, and then he spoke to the rail between his hands." },
      { s: 'shinjiro', f: 'sad', t: "Two years ago I hurt somebody." },
      { s: 'shinjiro', f: 'sad', t: "Not a fight. Not on purpose. Doesn't matter. Somebody was standing in the wrong place, and I couldn't hold back what I was carrying, and she's not standing anywhere now." },
      { n: "He didn't say who. He didn't say how. She thought of a pair of slippers lined up exactly on the edge of the kitchen tile, and a face that young doing something that old, and felt the cold go down her back one vertebra at a time, like somebody counting." },
      { s: 'shinjiro', f: 'neutral', t: "I'm not telling you so you'll say it wasn't me. It was." },
      { s: 'shinjiro', f: 'neutral', t: "I'm telling you 'cause you keep coming back. You oughta know what you're coming back to." },
      { route: [
        { t: "(Put your hand over his on the rail. Don't say anything.)", route: 'romance', notes: 3, then: [
          { n: "She put her hand over his on the rail. She didn't decide to, the same way her hand hadn't decided about the rice or the ruler or the cold grip on the floor of the tower, except that it wasn't the same at all, because this time she knew exactly what her hand was doing, and let it." },
          { n: "His hand was cold from the metal. It went very still under hers, the way an animal goes still, and for a second she thought he'd take it back and put it in his pocket with everything else he kept there." },
          { s: 'shinjiro', f: 'surprised', t: "..." },
          { n: "He didn't. He turned it over, slowly, under hers, until they were palm to palm on the cold rail, and his fingers closed, not hard, the way you'd close your hand around something you'd been told you weren't allowed to keep, just to find out what it felt like." },
          { s: 'shinjiro', f: 'sad', t: "...You've got terrible taste." },
          { s: 'solar', f: 'neutral', t: "I wouldn't know. I can't remember having any before." },
          { s: 'shinjiro', f: 'happy', t: "Tch." }
        ] },
        { t: "I know what I'm coming back to. My friend. I'm going to keep coming.", route: 'friend', notes: 3, then: [
          { s: 'shinjiro', f: 'surprised', t: "..." },
          { n: "He turned his head and looked at her as if she'd said something in a language he used to speak and had let himself forget." },
          { s: 'shinjiro', f: 'neutral', t: "...Friend." },
          { s: 'shinjiro', f: 'happy', t: "Yeah. Okay. I can live with that." },
          { n: "Something in him settled, like a weight set down at last in the right place, and he bumped her shoulder with his, once, so lightly it could have been the wind, and left it there." }
        ] }
      ] },
      { n: "The moon went behind a cloud and came out again. Neither of them looked at it. They looked at the city instead, all those windows and all those people who would never know there was an hour that wasn't on any clock, and Koromaru sighed in the doorway behind them like an old man at the end of a long day." },
      { s: 'shinjiro', f: 'neutral', t: "...Thanks for listening. Don't make it weird." },
      { ifRoute: 'romance', then: [
        { n: "It was already weird. It was already something. He didn't let go of her hand until they had to go in, and on the stairs he walked one step behind her the whole way down, the way he'd walked behind her out of the alley in May, and at her door he said goodnight to the doorframe and went on up, and she stood in her dark room with one hand cold from the rail and the other one warm, and didn't turn the light on for a long time." }
      ], else: [
        { n: "It was already weird. They both stood there pretending it wasn't for a long time, until Koromaru got up and came and leaned on both of them at once, which settled it, and they went down together, and he said night at the second-floor landing without looking back, and it sounded different from every other time he'd said it, and she couldn't have told you how." }
      ] }
    ] },

    { after: '9/19', title: '9: the recipe card', place: 'Iwatodai Dorm · Kitchen', time: 'Evening', music: 'tender', scene: [
      { n: "He'd been strange all week. Quieter, even for him, which she wouldn't have said was possible, and doing things in an order, like a man going down a list he'd written somewhere and wasn't showing anyone. He fixed the hinge on the second-floor bathroom door that had squealed since April. He took every jar off the spice shelf and wiped it and put it back in an order that made sense to him alone. He taught Junpei to make rice, which nobody in the dorm had believed was possible, least of all Junpei, who stood at the sink with his cap on backward washing it until the water ran clear and said *dude* softly to himself, like a man in church." },
      { n: "Tonight he made the dish from the shrine." },
      { n: "Rice and egg and pork braised until it gave up, ginger somewhere, spring onion cut thin enough to read through. He didn't say why. He made enough for two, which in that kitchen was a statement, because he always made enough for the building, and he put one bowl in front of her at the counter and stood across from her with his own and didn't eat it, just watched her eat, the way he had on the shrine steps in May with the rain ticking off everything." },
      { s: 'shinjiro', f: 'neutral', t: "Well?" },
      { choose: [
        { t: "It's the shrine.", notes: 3, then: [
          { s: 'shinjiro', f: 'neutral', t: "...Yeah. It's the shrine." },
          { n: "He looked pleased, the way he looked pleased, which was to say almost not at all, and only around the eyes, and only if you'd spent four months learning where to look." }
        ] },
        { t: "It could use a little less salt.", notes: 3, then: [
          { s: 'shinjiro', f: 'happy', t: "...Ha. Liar." },
          { n: "It couldn't. He knew it couldn't. He also looked, for one second, as if it was the nicest thing anybody had said to him all year." }
        ] },
        { t: "It's good.", notes: 1, then: [
          { s: 'shinjiro', f: 'neutral', t: "Just good?" },
          { n: "He seemed genuinely wounded, which on him was a small tightening at the jaw and nothing else." }
        ] }
      ] },
      { n: "Koromaru was under the counter with his chin on her foot. The window over the sink was open on the cooling night, and somewhere outside a radio was doing the weather, rain by Tuesday, and the kitchen was warm and smelled of ginger and the clean dish soap he insisted on because the other kind was garbage, and for a few minutes nothing in the world needed her to remember anything." },
      { n: "When she'd finished, he slid something across the steel to her, flat, under two fingers." },
      { n: "An index card. Plain white, a little stained at one corner, written on both sides in his handwriting, which she had never seen before and which was exactly what she'd have guessed, blocky and careful and pressed hard into the card, as if he'd wanted it to still be there if somebody spilled something on it." },
      { n: "It was the recipe. This one. Every step, every measurement, in the order he did it. Wash the rice till the water runs clear. Up to the first knuckle, which he'd drawn, badly, as a little finger. Ginger, how much, sliced which way. Don't lift the lid, underlined. And at the very bottom, underlined twice, so hard the pen had nearly gone through, *stop poking it*." },
      { s: 'shinjiro', f: 'neutral', t: "So you can make it." },
      { s: 'shinjiro', f: 'neutral', t: "If I'm not around." },
      { n: "*If I'm not around.* He said it the way he'd said the bus didn't run past nine. Her chest went tight and cold in the same instant, the body knowing something first and the mind standing very still in a corner of her, refusing to turn around and look." },
      { choose: [
        { t: "(Put the card in your inside pocket, flat, where it won't bend.)", notes: 3, then: [
          { n: "She put it in the inside pocket of her blazer, carefully, flat, where it wouldn't get bent, and did not say anything about where that pocket sat, and neither did he, but he watched her do it, and something in his face let go." }
        ] },
        { t: "Where would you be?", notes: 2, then: [
          { s: 'shinjiro', f: 'neutral', t: "Around." },
          { n: "Which wasn't a place. She was beginning to understand it had never been one." }
        ] },
        { t: "Then be around.", notes: 1, then: [
          { s: 'shinjiro', f: 'neutral', t: "..." },
          { s: 'shinjiro', f: 'neutral', t: "Eat your rice." },
          { n: "There was no rice left. He knew that. He looked at the empty bowl as though he could make some appear in it." }
        ] }
      ] },
      { ifRoute: 'romance', then: [
        { n: "Since the roof, nothing had changed and everything had, the way the air changes in a room when somebody opens a window you hadn't noticed was shut. He still told her to get out of his way at the stove. He still called her nothing, not her name, not anything, just *you* and *hey*, and once, at a crossing when a truck took the corner too fast, a hand flat against her stomach that pushed her back onto the curb and stayed there a second after the truck was gone." },
        { n: "He came around the counter now. He didn't say anything about it. He stood in front of her where she sat on the stool, close, and looked at her the way he looked at a pot, as if it would tell him something if he was patient enough." },
        { s: 'shinjiro', f: 'neutral', t: "You keep showing up. I keep letting you." },
        { s: 'shinjiro', f: 'sad', t: "I'm not gonna be good at this. There's not a lot of time to get good." },
        { choose: [
          { t: "(Lean in and rest your forehead against his.)", notes: 3, then: [
            { n: "She leaned in and rested her forehead against his. It was the simplest thing she had ever done. He was warm and he smelled of ginger, and he went completely still, the way he had on the roof, and then his eyes closed and he breathed out, long, through his nose, like a man setting down something he'd been carrying up a lot of stairs." },
            { n: "They stayed like that while the radio outside said rain by Tuesday again, and Koromaru shifted under the counter, and the rice cooker clicked over from cook to warm, the most ordinary sound in the world." }
          ] },
          { t: "Then don't be good at it. Just be here.", notes: 3, then: [
            { s: 'shinjiro', f: 'sad', t: "...Here." },
            { n: "He said it as if he were trying the word out, a word in a language where he only knew the swears. Then he put his hand on the side of her face, the scarred knuckles cool along her jaw, very carefully, as if one of them were running a fever, and left it there for the length of a breath, and took it back." }
          ] },
          { t: "Nobody's timing you.", notes: 2, then: [
            { s: 'shinjiro', f: 'happy', t: "...Throwing my own words at me." },
            { s: 'shinjiro', f: 'neutral', t: "Tch. Fine." },
            { n: "He took her hand off the counter and held it, just held it, palm to palm, the way he had on the roof, while the rice cooker clicked over to warm." }
          ] }
        ] }
      ], else: [
        { n: "Since the roof he had started letting her stand at his elbow at the stove without telling her to move, which was, as far as she could tell, the highest honor the kitchen gave out. Akihiko had noticed. Akihiko had said nothing about it, very loudly, for three days." },
        { s: 'shinjiro', f: 'neutral', t: "Make it for Aki sometime. He'll say it's not as good as mine." },
        { s: 'shinjiro', f: 'happy', t: "He'll be lying. Make him eat two bowls anyway." },
        { choose: [
          { t: "I'll make it for all of them. You'll have to eat it too.", notes: 3, then: [
            { s: 'shinjiro', f: 'sad', t: "..." },
            { s: 'shinjiro', f: 'happy', t: "...Yeah. Sure. I'll eat it." },
            { n: "He said it the way you'd agree to something on a day you didn't expect to see, cheerfully, because it cost nothing to say." }
          ] },
          { t: "Teach me again. I want to get it right.", notes: 3, then: [
            { s: 'shinjiro', f: 'neutral', t: "It's on the card." },
            { s: 'shinjiro', f: 'neutral', t: "...Saturday. Eight. Bring the card." }
          ] },
          { t: "Why are you giving me this?", notes: 1, then: [
            { s: 'shinjiro', f: 'neutral', t: "'Cause you can't cook." },
            { n: "Which was true, and wasn't why." }
          ] }
        ] }
      ] },
      { n: "Later, upstairs, she took the card out and read it again under her desk lamp, both sides, every word, and found she had read it the way he said don't lift the lid, the way other people said be careful. She put it back in the pocket. She would keep touching it all week through the wool of her blazer, in class, on the monorail, in the dark, to make sure it was still there." }
    ] },

    { after: '10/3', title: '10: the night before', place: 'Iwatodai Dorm · Kitchen', time: 'Night', music: 'tender', scene: [
      { n: "The text came at eleven." },
      { phone: [
        { from: 'shinjiro', t: "kitchen" }
      ], contact: 'Aragaki' },
      { n: "Just that. No question mark, no please, nothing to tell her whether it was a favor or an order or something that didn't have a name yet. She went down in her socks with her cardigan over her pajamas, because when Shinjiro Aragaki asked anybody for anything, it was usually the first time in a long while that he'd asked." },
      { n: "He hadn't turned the lights on. He didn't need to. The window over the sink was full of moonlight, white and enormous, so bright it laid the shape of the frame across the floor tiles in hard black lines, like a page ruled for writing, and he was sitting on the counter, which he never did, with his long coat hanging off the edge and his beanie in his hands, turning it around and around by the brim." },
      { n: "The moon was in the window. Neither of them looked at it." },
      { n: "The kitchen was clean. Not clean the way he left it every night, clean the way a room is when someone has gone all the way around it and put everything exactly where it goes. The pans on their hooks with the handles out. The good pot on the back burner. The spice jars in their order. The rice in its bin with the cup on top. A note taped to the fridge in his blocky handwriting, DOG, REAL FOOD, 1 CUP, NOT THE CANNED GARBAGE." },
      { s: 'shinjiro', f: 'neutral', t: "Hey." },
      { s: 'solar', f: 'neutral', t: "Hey." },
      { choose: [
        { t: "(Climb up onto the counter beside him.)", notes: 3, then: [
          { n: "She climbed up beside him. It was a high counter, and she had to do it in two goes, and he didn't help, and she could feel him not helping, the way he didn't help Koromaru up the stairs. Then she was there, their shoulders not quite touching, their legs hanging off the edge like two kids on a wall, and the steel was cold through her pajamas." }
        ] },
        { t: "You cleaned.", notes: 2, then: [
          { s: 'shinjiro', f: 'neutral', t: "Somebody had to." },
          { n: "Somebody always had to, with him. It was never him who had to. It was always somebody." }
        ] },
        { t: "Couldn't sleep?", notes: 1, then: [
          { s: 'shinjiro', f: 'neutral', t: "Didn't try." }
        ] }
      ] },
      { n: "For a while they sat and said nothing, which they were good at. The fridge hummed. Upstairs a door opened, and Akihiko's voice said something low and sleepy, and another voice, Junpei's, said something back, and the door shut, and Shinjiro's head turned a few degrees toward the ceiling and stayed there until the house was quiet again. In the hall Koromaru sighed in his sleep, the long gusty sigh of a dog who had had a full day and regretted none of it." },
      { s: 'shinjiro', f: 'neutral', t: "Whatever happens. It's not on you." },
      { s: 'shinjiro', f: 'neutral', t: "None of it. Not on you, not on Aki. Not on the kid either." },
      { n: "She didn't ask what was going to happen. She knew, somewhere under her ribs where she kept the things she wasn't looking at, that she wasn't going to be told, and that the not-telling was the last kind thing he had left to give her, and that he was giving it very carefully, with both hands, like a full bowl." },
      { choose: [
        { t: "(Take his hand.)", notes: 3, then: [
          { n: "She took his hand off the brim of the beanie. He let her. He turned it over in his, slowly, and looked down at the two of them together in the moonlight, her hand and his scarred one, like he was trying to learn the shape well enough to draw it from memory." }
        ] },
        { t: "Okay.", notes: 3, then: [
          { n: "*Okay.* The word she'd learned from Akihiko, who'd learned it from him, coming back around at last like a pan handed back across a kitchen. He heard it. He shut his eyes for a second." },
          { s: 'shinjiro', f: 'happy', t: "...Yeah. Okay." }
        ] },
        { t: "What's going to happen?", notes: 2, then: [
          { s: 'shinjiro', f: 'sad', t: "...Something I owe." },
          { n: "That was all. She knew, with the plain terrible certainty of the body, that it was all there was ever going to be." }
        ] }
      ] },
      { ifRoute: 'romance', then: [
        { s: 'shinjiro', f: 'neutral', t: "Spent two years figuring I didn't get to have anything. Fine. Made sense. Then you start turning up in my alley, counting the exits." },
        { s: 'shinjiro', f: 'sad', t: "Best few months I've had. Wanted you to hear it from me. Tonight. Not from Aki." },
        { n: "It was more words in a row about himself than she had ever heard him say. He looked faintly sick from it, the way he looked after the cough, and he set the beanie down on the counter between them as if he needed his hands free." },
        { choose: [
          { t: "(Kiss him.)", notes: 3, then: [
            { s: 'shinjiro', f: 'surprised', t: "..." },
            { n: "It was short. It was the least practiced thing she had ever done, which, given that she couldn't remember doing anything, she suspected was saying a lot. His mouth was warm and tasted faintly of the bitter tea he drank at night, and he held completely still for a second, like a man on a roof who has felt the edge under his heel, and then his hand came up into her hair, careful, so careful, and he kissed her back like it was something he'd been told he wasn't allowed to have and had decided to take anyway, just the once, and put somewhere safe." },
            { n: "When it was over he rested his forehead against hers, and stayed." },
            { s: 'shinjiro', f: 'happy', t: "...Solar." },
            { n: "It was the first time he had said her name. Five months, and not once. He said it like he'd been carrying it around in his coat with everything else and had finally found something worth spending it on." }
          ] },
          { t: "Then stay.", notes: 3, then: [
            { s: 'shinjiro', f: 'sad', t: "..." },
            { s: 'shinjiro', f: 'sad', t: "...Can't, Solar." },
            { n: "It was the first time he had said her name. Five months, and not once. He said it like it hurt, like a word he'd been saving for the end and had only just realized was this." },
            { n: "He put his forehead against hers instead of saying anything else, and stayed there, and she let him, and neither of them said the next thing, because there wasn't one." }
          ] },
          { t: "(Put your head on his shoulder.)", notes: 2, then: [
            { n: "She put her head on his shoulder. The coat was rough under her cheek and smelled of cold air and soy and the clean dish soap, and his shoulder went stiff, and then, slowly, the way a fist opens, it didn't." },
            { s: 'shinjiro', f: 'neutral', t: "...Solar." },
            { n: "It was the first time he had said her name. He didn't say anything after it. It seemed to be the whole sentence." }
          ] }
        ] },
        { n: "They stayed on the counter until the moonlight had crawled off the floor and up the cupboard doors and out of the window altogether." },
        { n: "When he got down, he picked up the beanie and looked at it, and then he put it on her head, and pulled it down over her ears with both hands, crooked, too big, low over one eyebrow. He looked at what he'd done for a long moment." },
        { s: 'shinjiro', f: 'happy', t: "Suits you. Don't let Aki borrow it." },
        { n: "Then he went upstairs. She stayed in the dark kitchen with the beanie on. It was too big. She didn't take it off." }
      ], else: [
        { s: 'shinjiro', f: 'neutral', t: "Look after Aki. He'll act like he's fine. He won't be." },
        { s: 'shinjiro', f: 'neutral', t: "And the dog. Real food. It's on the fridge." },
        { choose: [
          { t: "I'll look after both of them. Idiots.", notes: 3, then: [
            { s: 'shinjiro', f: 'happy', t: "...Yeah. Idiots." }
          ] },
          { t: "You'll be here to do it yourself.", notes: 3, then: [
            { s: 'shinjiro', f: 'sad', t: "..." },
            { s: 'shinjiro', f: 'happy', t: "Sure. Sure I will." },
            { n: "He said it the way you'd agree with somebody about the weather in a city you were leaving in the morning." }
          ] },
          { t: "And who looks after you?", notes: 2, then: [
            { s: 'shinjiro', f: 'neutral', t: "Nobody's job." },
            { s: 'shinjiro', f: 'neutral', t: "Never was. Don't make it yours." }
          ] }
        ] },
        { n: "He got down off the counter and stood in front of her and, after a second's hesitation she would think about for a long time, ruffled her hair, hard, the way you'd do it to a kid or a dog, which he had never once done, and which he did like he'd been wanting to for months and had been waiting for a night when it wouldn't matter." },
        { s: 'shinjiro', f: 'happy', t: "Night, Solar." },
        { n: "It was the first time he had said her name. Five months. He went upstairs. She sat on the counter until the moon had gone off the window, and then she got down, and took the good pot off the back burner, and hung it on its hook with the others, handle out." }
      ] }
    ] }
  ],

  // After MAX (engine need: the link closes on 10/4, so these play only once the engine allows post-MAX visits).
  // From 10/5 he's at Tatsumi Memorial and doesn't wake in these scenes; he never speaks. No fragments.
  afterMax: [
    { place: 'Tatsumi Memorial Hospital · 3F Ward', time: 'After School', music: 'tender', scene: [
      { n: "The first time she went alone it was the middle of October, one of those afternoons that couldn't decide whether it was still autumn or already something colder, and she rode the monorail to Tatsumi with her hand in her coat pocket the whole way, on the recipe card, like it might get off at the wrong stop without her." },
      { n: "The third floor smelled the way it had on the fifth, floor polish and something sweet under it that nobody wanted to name. The day nurse was a small brisk woman with her reading glasses on a chain, and she looked at Solar's uniform and at her face and at the visitors' book, and didn't ask anything." },
      { n: "Solar signed it. Above her name, every few lines, the same blunt square capitals, SANADA, SANADA, SANADA. And under each of them, every single day since the fifth, small and neat and pressed hard, the careful handwriting of somebody who had been taught to write between the lines and still did. AMADA. She looked at that for a long time. Then she put the pen down." },
      { n: "There were flowers everywhere. Mitsuru's arrangement had come on Monday, the way it had every Monday, lilies and something white and architectural, so big the nurses had moved it into the hall because it took up the window, and there was a small potted cactus on the sill with a card in Yukari's handwriting that said *it can't die, I checked*, and a paper crane that was very obviously Junpei's, because one wing was on upside down." },
      { n: "He looked smaller lying down. She had known he would, and it still went into her like a step that wasn't there. Somebody had brushed his hair without knowing which way it went. His hands lay on the blanket where a nurse had arranged them, the scarred knuckles pale and soft, as though they'd been put away for the winter." },
      { ifRoute: 'romance', then: [
        { n: "The beanie was folded on the side table by his hand. She had brought it on the fifth, and nobody had moved it, and every time she came back it was exactly where she'd left it, which in a hospital was its own kind of message from the staff." }
      ], else: [
        { n: "The chair by the bed was pulled close at an angle she recognized, because Akihiko sat in every chair like that, as if the chair had asked him a question. She sat in it." }
      ] },
      { n: "The monitor kept time. She had practiced things to say on the monorail, and every one of them left the second she sat down." },
      { choose: [
        { t: "(Tell him about the dorm.)", notes: 3, then: [
          { n: "So she told him about the dorm, in order, the way he did things. Junpei had made rice and washed it until the water ran clear and been unbearable about it for two days. Yukari had bought the dish soap he liked and hadn't said why. Koromaru slept in the front hall now, facing the door. Nobody had used the good pot, and nobody had said they weren't using it. It was just on its hook, handle out." },
          { n: "She heard her own voice going on, flat and thorough, a report, round by round, and realized halfway through that she had learned to do that from Akihiko, and that Akihiko had almost certainly learned it from him." }
        ] },
        { t: "(Read him the recipe card.)", notes: 3, then: [
          { n: "She took the card out of her pocket, already soft at the corners from her thumb, and read it to him from the top, every measurement, in his order, keeping her voice low the way you do in a room where somebody is sleeping." },
          { n: "At the bottom she stopped. *Stop poking it,* underlined twice. She read that part twice too." }
        ] },
        { t: "(Say nothing. Just sit.)", notes: 2, then: [
          { n: "She said nothing. She sat with her coat on and her hands in her lap and listened to the monitor and to a cart going by in the hall with one bad wheel, and it was the most like the alley it had felt in weeks, the two of them not talking, him keeping watch over nothing, her letting him." }
        ] }
      ] },
      { n: "At the door she stopped and looked back, and felt the old instinct come up in her, the one she didn't know the origin of, to count the room, the exits, the window, the chair, so she'd have it later." },
      { n: "She didn't. She was coming back on Thursday. You only counted the places you were leaving." }
    ] },
    { place: 'Tatsumi Memorial Hospital · 3F Ward', time: 'After School', music: 'tender', scene: [
      { n: "Koromaru had not been inside Tatsumi Memorial since October, because dogs weren't allowed, and he had been informed of this policy by several people on several occasions and had accepted none of them." },
      { n: "So Akihiko had a plan. Akihiko always had a plan, and the plan was always slightly worse than the problem, and this one involved Solar upstairs at the ward window and him downstairs in the courtyard with the dog, and a phone, and a great deal of faith in the third floor's blinds." },
      { phone: [
        { from: 'akihiko', t: "in position" },
        { from: 'akihiko', t: "which window" },
        { from: 'solar', t: "the one with a girl waving in it" },
        { from: 'akihiko', t: "there are three girls waving" },
        { from: 'akihiko', t: "why are there three" }
      ], contact: 'Akihiko Sanada' },
      { n: "Two of them were nurses. They had heard about the plan at the station and had opinions on it, and now they stood at the next window along with their arms folded, pretending not to be invested." },
      { n: "Solar pulled the blind all the way up. The afternoon came in thin and gold across the bed and the blanket and his hands, and down in the courtyard, on the brown November grass by the benches, Akihiko lifted a white dog over his head with both arms like a championship belt." },
      { n: "Koromaru looked extremely dignified about this. His tail was going so hard that his whole back end went with it." },
      { choose: [
        { t: "(Turn his face toward the window.)", notes: 3, then: [
          { n: "She did it the way the nurses did, one hand under his head, gently, so it rolled a little on the pillow toward the light." },
          { ifRoute: 'romance', then: [
            { n: "It was the closest she'd been to his face since the kitchen and the moon in the window. She made herself not think about that, and thought about it." }
          ], else: [
            { n: "His hair fell the wrong way across his forehead. She fixed it. She knew which way it went." }
          ] },
          { n: "Down below, Koromaru barked, once, up at the third floor, at a window nobody on the ground could see into, and then sat down on Akihiko's foot and stayed there, looking up." }
        ] },
        { t: "(Call Akihiko back. Hold the phone to his ear.)", notes: 3, then: [
          { n: "She called Akihiko back and held the phone to Shinjiro's ear, and down in the courtyard Akihiko crouched and held his phone to the dog, and for a second there was nothing, only wind across the receiver, and then Koromaru barked, short and bright, the bark he did in the front hall when a key turned in the lock." },
          { n: "She kept the phone there a long time after. Nothing changed. She hadn't really thought it would. She kept it there anyway." }
        ] },
        { t: "(Wave back. Both arms. Like an idiot.)", notes: 2, then: [
          { n: "She waved with both arms like an idiot, and Akihiko waved the dog back at her, and the nurses at the next window waved too, for no reason at all, and the whole thing was so stupid that she started laughing and couldn't stop and had to sit down on the end of his bed." },
          { n: "He'd have minded. A lot. She told him so, which made it so much worse." }
        ] }
      ] },
      { n: "Afterward Akihiko came up with grass on his knees and white hair all down the front of his jacket, and then he didn't come in. He stood in the doorway with one hand on the frame, the way he had stood at the edge of the awning in the rain in June, just outside the dry part, looking at the bed the way you'd look at a ring you weren't allowed into yet." },
      { n: "Then he came in and sat in the chair, his chair, and looked at Shinji for a while without saying anything." },
      { s: 'akihiko', f: 'sad-2', t: "He'd say it was a stupid plan." },
      { choose: [
        { t: "It was a stupid plan.", notes: 3, then: [
          { s: 'akihiko', f: 'happy', t: "...Yeah. It was a great stupid plan." }
        ] },
        { t: "He'd say it. And then he'd come down to the courtyard.", notes: 3, then: [
          { s: 'akihiko', f: 'sad-3', t: "...Every time. Complaining the whole way down the stairs." },
          { n: "He said it to his hands. Then he laughed, short and surprised, like a cough, and it was so much like somebody else's laugh that neither of them said anything for a while." }
        ] },
        { t: "(Say nothing. Let him have the chair.)", notes: 2, then: [
          { n: "She said nothing. She went and stood by the window and let him have the chair and the quiet, and in the glass she watched him reach out, after a long time, and put two fingers on the back of Shinjiro's hand, and leave them there, the way you'd check a pot was still warm." }
        ] }
      ] },
      { n: "When they left, the blind was still up. She'd meant to pull it down. She left it, so the afternoon could keep coming in without having to ask anybody." }
    ] }
  ],

  // Christmas Eve (12/24) at his bedside: romance route at MAX. The Stay variant's seed is "the hospital, his hand".
  // Whether he wakes is not decided here.
  christmas: { place: 'Tatsumi Memorial Hospital · 3F Ward', time: 'Evening', music: 'tender', scene: [
    { phone: [
      { from: 'akihiko', t: "ward's letting people stay late tonight. christmas eve. i asked" },
      { from: 'akihiko', t: "go" },
      { from: 'akihiko', t: "i'll go tomorrow. tonight's yours" },
      { from: 'solar', t: "aki" },
      { from: 'akihiko', t: "don't make it a thing" }
    ], contact: 'Akihiko Sanada' },
    { n: "It had snowed since the afternoon, the first real snow of the year, and Iwatodai had given up pretending to be a city and become a postcard of one. On the monorail every couple in the car was holding hands in the overheated air like it was the law, and Solar stood by the door with a cake box held flat against her chest in both arms and snow melting into her collar, watching Port Island go by white." },
    { n: "Tatsumi Memorial did Christmas the way hospitals did, earnestly and on a budget. There was a paper chain across the nurses' station. There was a tree on the counter about the height of a rice cooker with one string of lights blinking in a pattern somebody had clearly chosen on purpose and then come to regret. Someone had put a Santa hat on the hand sanitizer." },
    { n: "The night nurse knew her by now. She looked at Solar's face when she came out of the elevator, and at the box, and at the snow on her shoulders, and lifted her pen and pointed down the hall without looking up, and said that visiting hours were whatever she said they were tonight." },
    { s: 'nurse', t: "Leave the door open a crack. That's my only rule." },
    { n: "The room was warm and dim and smelled of floor polish and of him, a little, still, from the beanie folded on the side table by his hand, exactly where it had been since October. Mitsuru's Monday lilies were in the hall. Yukari's cactus was on the sill, still alive, as promised. Somebody, probably Ken, had taped a paper snowflake to the window, cut so carefully that every arm of it matched." },
    { n: "He looked the way he had looked for weeks. She had stopped expecting anything else, and had not stopped checking." },
    { n: "She had brought a cake. Of course she had. It was the convenience-store kind, one slice of strawberry shortcake in a plastic triangle with a single strawberry on top looking deeply sorry for itself, because that was what you did on Christmas Eve in this country, and she had decided at the register that he was getting the full experience whether he liked it or not." },
    { s: 'solar', f: 'neutral', t: "Merry Christmas. Before you say anything, I know. The cream's from a can." },
    { n: "He didn't say anything. She could hear exactly what he would have said, though. She could hear the *tch*. She ate half of it with the little plastic fork and left the other half, and the strawberry, on the side table beside the beanie, which was ridiculous, and which she did anyway." },
    { n: "Then she took out the other thing, wrapped in a dish towel to keep it warm, a plastic container from the dorm kitchen with the lid on tight." },
    { choose: [
      { t: "(Open it, so the room smells like his kitchen.)", notes: 3, then: [
        { n: "She took the lid off, and the room filled up with ginger and soy and the slow dark smell of something that had been left alone long enough to be good, rice and egg and pork braised until it gave up, and out in the hall the night nurse stopped walking, and sniffed, and said *oh* in a completely different voice, and kept going." },
        { n: "She'd made it every Sunday since October. It was always a little too salty. She could hear exactly how he'd say it, and since he wasn't going to, she said it for him, out loud, to the dark window and the paper snowflake, and it didn't sound anything like him at all." }
      ] },
      { t: "(Read him the card, the way you always do.)", notes: 3, then: [
        { n: "She took the card out of her pocket. It had gone soft as cloth at the corners by now, the ink worn pale where her thumb sat, and she read it to him from the top in a low voice, every step, in his order, and at the bottom she read *stop poking it* twice, the way he'd said *don't lift the lid*, the way other people said *be careful*." },
        { n: "Then she turned it over, because she'd added something on the back in pencil in October, in her own round careless handwriting, under his, in the space he'd left. *Up to the first knuckle. Somebody taught me. Then you did.*" }
      ] },
      { t: "(Tell him who's at dinner now.)", notes: 2, then: [
        { n: "So she told him. That there were more people at the dorm table than there were chairs, these days, and more chopsticks in the drawer than anyone could account for, and that nobody cooked like him, and that Junpei had tried, twice, and that she had stood behind Junpei at the stove the second time and said thinner, you cut like you're mad at it, and heard who she sounded like, and had to go out and stand in the hall for a minute." }
      ] }
    ] },
    { n: "Outside the window the snow came down past the streetlights in the courtyard, slow and thick, and somewhere across the bay a bell started ringing for Christmas Eve, late and unhurried. She didn't count the strokes. She had nearly stopped counting things." },
    { n: "His hand was on top of the blanket where it always was. She took it, because there was nobody to ask." },
    { n: "It was cold. Not the cold of the street, a slower one, the particular cold of a hand nobody had been holding. She put it between both of hers and held on and waited, and it warmed, slowly, the way a room does when the heating finally comes on, and she understood perfectly well that the warmth was only hers coming back to her, and held on anyway." },
    { choose: [
      { t: "(Lay your head down on the edge of the bed, beside his hand.)", notes: 3, then: [
        { n: "She folded her arms on the edge of the mattress and put her head down on them, next to his hand, close enough that if he moved at all, even one finger, she would feel it. She stayed like that a long time, while the regrettable tree blinked down the hall and the snow came down outside and his hand was warm by her face." }
      ] },
      { t: "(Kiss his forehead, under the hair nobody brushes the right way.)", notes: 3, then: [
        { n: "She leaned over and kissed his forehead, quickly, under the hair somebody kept brushing the wrong way. His skin was warm now. She had done that. Then she fixed his hair, the right way. She knew which way it went." }
      ] },
      { t: "(Just hold on.)", notes: 2, then: [
        { n: "She just held on, and matched her breathing to the monitor without meaning to, the way you fall into step with somebody walking beside you." }
      ] }
    ] },
    { n: "At eleven the nurse came by and didn't tell her to go. She put a blanket over Solar's shoulders instead, the thin hospital kind, and switched off the overhead light, and left the door open a crack, so the hallway could come in." },
    { n: "Solar fell asleep in the chair with her hand under his on the blanket." },
    { n: "She woke once, near two, and didn't know where she was, and then did, the monitor and the snow and the shape of him in the dark. And she thought, for one second, half asleep, that his fingers had moved against hers. Not much. The way a sleeping hand does. The way a hand does when it's been somewhere very far away and is still deciding." },
    { n: "She didn't call the nurse. She didn't want anybody to come in and tell her what it was." },
    { n: "She lay her head back down beside his hand and kept hers where it was, under his, so that if it happened again she would be there for it. It was, she would think later, in spite of everything, a good Christmas. The snow kept coming down. She didn't count it." }
  ] }
});
