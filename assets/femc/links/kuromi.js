/* Kuromi · XVI The Tower. Arrives on the 5/9 full moon. Format notes are at the top of akihiko.js.
   Romance is a playful crush. Kat's portraits make her (and My Melody) human girls: long black hair streaked pink,
   a black jester hat with a pink skull, a skull bow, a bandage across her nose, a pink hoodie and a polka-dot scarf. */
FemcSocial.define({
  id: 'kuromi', name: 'Kuromi', short: 'Kuromi', arcana: 'Tower', numeral: 'XVI', from: 'Sanrio',
  arrives: '5/9',
  home: { place: 'Iwatodai Dorm · Lounge', slot: 1, days: [0, 1, 2, 3, 4, 5, 6], hint: 'Evenings, in the dorm lounge, usually causing trouble.' },
  approach: "A girl in a black jester hat, pink streaks in her hair, is crouched on the lounge couch with a marker, and Junpei is asleep. This is about to be a crime.",
  invite: {
    ask: ["RIVAL. come here. now.", "i need an accomplice. dont ask questions", "r u free. its important (its not important)", "lounge. NOW. bring snacks", "junpei is asleep on the couch again. this is NOT a drill 💀", "im bored and its ur fault somehow. come fix it", "rival meeting. downstairs. attendance is MANDATORY", "do u have a marker. asking for evil reasons"],
    ok: ["heh. perfect 💀", "GOOD. dont be late or ur disqualified", "finally. ur rival is waiting 🖤"],
    no: ["UGH. fine. traitor", "boooo. ur on the list now", "fine. ill cause chaos ALONE. hope ur happy"]
  },
  hangouts: [
    [
      { n: "Junpei's cap had been missing for forty minutes, and he had searched the lounge three times, louder each round, while Kuromi lay on the couch with a magazine held upside down in front of her face and her boots crossed at the ankle, the picture of a girl with nothing on her conscience. It was a very bad picture." },
      { s: 'junpei', f: 'sad', t: "Solar. Solar, you've seen my hat. Tell me you've seen my hat." },
      { s: 'kuromi', f: 'serious', t: "Nobody's seen your stupid hat. Go cry somewhere else." },
      { choose: [
        { t: "(Get a drink from the fridge. Close it again, very calmly.)", notes: 3, then: [
          { n: "The cap was on the middle shelf, between the milk and a carton of eggs, folded neatly around one of Akihiko's protein drinks like it was keeping it warm. Solar took out a can of tea and shut the door. Behind the magazine, Kuromi made a small, strangled sound of pure joy." }
        ] },
        { t: "Kuromi, your magazine is upside down.", notes: 2, then: [{ s: 'kuromi', f: 'flustered', t: "It's a STYLE. Punks read upside down. Look it up." }] },
        { t: "Check the fridge, Junpei.", notes: 1, then: [
          { s: 'kuromi', f: 'surprised', t: "TRAITOR!" },
          { n: "Junpei found it. It was cold. He put it on anyway, out of principle, and shivered at the TV for the rest of the night while Kuromi glared at Solar over the top of the magazine, which was still upside down." }
        ] }
      ] },
      { n: "By the time the lounge emptied out, Kuromi was already planning the next one, out loud, in a whisper that carried all the way to the second floor." }
    ],
    [
      { n: "The lounge fridge had a system. Everyone wrote their name on their food in marker, and everyone respected it, and the system had worked perfectly for years right up until it met Kuromi, who had found the marker." },
      { n: "She was sitting on the counter with a cup of pudding in one hand, crossing out YUKARI on the lid in long, satisfied strokes and writing KUROMI underneath in letters twice the size." },
      { s: 'kuromi', f: 'happy', t: "It's a tax. Yukari has four puddings. Nobody needs four puddings. I'm redistributing." },
      { choose: [
        { t: "(Hand her a spoon.)", notes: 3, then: [
          { s: 'kuromi', f: 'surprised', t: "...Oh, you're GOOD." },
          { n: "She took the spoon. Then, after a long and very visible struggle with herself, she took a second one out of the drawer and held it out. Rivals, apparently, split the spoils." }
        ] },
        { t: "That's Yukari's.", notes: 1, then: [{ s: 'kuromi', f: 'serious', t: "It SAYS Kuromi. Can't you read? Wow. Sad." }] },
        { t: "Which flavor did you take?", notes: 2, then: [{ s: 'kuromi', f: 'serious', t: "Caramel. Obviously. I'm not a MONSTER. Well. I am. But not about pudding." }] }
      ] },
      { s: 'yukari', f: 'serious', t: "Has anyone seen my pudding?" },
      { n: "The voice came from the top of the stairs. Kuromi ate the rest in one enormous spoonful, pressed the empty cup into Solar's hand, and looked up at the ceiling with wide, innocent, deeply criminal eyes." }
    ],
    [
      { n: "Late, the lounge dark except for the TV, rain ticking on the windows. Kuromi had found a horror movie on a channel that only seemed to exist after eleven, something grainy about a girl and a well, and announced that she was going to watch the whole thing without blinking, because she was a punk, and punks were not scared of wells." },
      { n: "Twenty minutes in, she had Solar's sleeve in her fist. She didn't seem to know she was holding it." },
      { s: 'kuromi', f: 'serious', t: "This is BORING. Nothing's even happening. I'm basically asleep." },
      { choose: [
        { t: "(Say nothing about the sleeve.)", notes: 3, then: [{ n: "Solar kept watching. The girl on the screen climbed out of the well. Kuromi's grip went white, and then, when nothing worse happened, loosened, and stayed." }] },
        { t: "Want me to change the channel?", notes: 2, then: [{ s: 'kuromi', f: 'serious', t: "NO. If you change it, it WINS." }] },
        { t: "You're holding my sleeve.", notes: 1, then: [
          { s: 'kuromi', f: 'flustered', t: "I'm CHECKING the FABRIC. For SCIENCE." },
          { n: "She let go. Thirty seconds later she was holding it again." }
        ] }
      ] },
      { n: "When the credits rolled she stood up, stretched, said \"Lame,\" and went upstairs. Ten minutes later Solar heard her come back down for a glass of water with every single light in the hallway switched on." }
    ],
    [
      { n: "Junpei was slumped in the armchair with a handheld game, tongue between his teeth, deep in a boss fight and blind to the world, which was exactly how Kuromi liked her targets." },
      { s: 'kuromi', f: 'happy', t: "Rival duel. Sixty seconds. We both draw him. Best drawing wins. Loser does whatever the winner says." },
      { n: "She slapped a sheet of paper and a pen down in front of Solar and started counting before Solar had the cap off." },
      { choose: [
        { t: "(Draw Junpei as a gorilla in a baseball cap.)", notes: 3, then: [
          { s: 'kuromi', f: 'surprised', t: "...That's. That's a really good gorilla." },
          { s: 'kuromi', f: 'serious', t: "Fine. FINE. A tie. Rivals are allowed to tie. It's in the rules." }
        ] },
        { t: "(Draw Kuromi instead.)", notes: 2, then: [{ s: 'kuromi', f: 'flustered', t: "That's not the TARGET. Why is my hat so BIG. ...Can I keep it?" }] },
        { t: "(Draw badly on purpose, so she wins.)", notes: 1, then: [{ s: 'kuromi', f: 'serious', t: "You LET me win. That's the most insulting thing that's ever happened to me. Again. Right now. For real this time." }] }
      ] },
      { s: 'junpei', f: 'happy', t: "Are you guys drawing me? Lemme see." },
      { n: "They both said no at the same time. Kuromi taped both drawings to the inside of the snack cupboard, where Junpei, who had never once put anything away, would never think to look." }
    ],
    [
      { n: "Every cushion in the lounge was gone. Solar found them heaped behind the couch, built into something with walls and a roof made of a bedsheet, and a sign taped to the front in pink marker that said HQ. KEEP OUT. THIS MEANS YOU." },
      { n: "A boot stuck out of the entrance. The boot wiggled when she came closer." },
      { s: 'kuromi', f: 'serious', t: "Password." },
      { choose: [
        { t: "Junpei is a loser.", notes: 3, then: [
          { s: 'kuromi', f: 'surprised', t: "...That's the actual password. How did you KNOW." },
          { n: "The bedsheet lifted. Inside it was surprisingly roomy, lit by a flashlight and stocked with chips and a comic book, and Kuromi shuffled over to make room with the grudging air of a general admitting a promising recruit." }
        ] },
        { t: "Please?", notes: 1, then: [
          { s: 'kuromi', f: 'serious', t: "Wrong. Polite people can't come in. It's a PUNK fort." },
          { s: 'kuromi', f: 'neutral', t: "...Fine. Probation. Get in before somebody sees." }
        ] },
        { t: "(Crawl in anyway.)", notes: 2, then: [{ s: 'kuromi', f: 'happy', t: "HEY. Breaking and entering. ...Respect, honestly. Sit there. Don't touch the chips." }] }
      ] },
      { s: 'junpei', f: 'serious', t: "Okay, who took the cushions? I just wanna SIT." },
      { n: "Kuromi switched off the flashlight. In the dark, under the bedsheet, she put a finger to her lips, and they stayed perfectly silent while Junpei sat down on the bare couch frame and swore at the ceiling." }
    ]
  ],
  // After rank MAX on the romance route, each visit plays the next date in order (then they rotate). January, before Mariland.
  dates: [
    { title: 'great curse', place: 'Naganaki Shrine', music: 'joy', scene: [
      { n: "January at Naganaki Shrine meant the New Year crowds had thinned to a trickle, a few old women and a family with a baby zipped into a puffy suit, and the stalls were packed away, and the gravel was frozen hard underfoot. Kuromi had insisted. It was in volume six. The two leads went to a shrine for the New Year and drew their fortunes and he gave her his good one. It was, she said, extremely stupid. She had read it four times." },
      { n: "Koromaru came too, because the shrine had been his before it was anybody's, and he went up the steps ahead of them with his tail going like a metronome while Kuromi held his leash in one mittened hand and pretended she wasn't holding it." },
      { s: 'kuromi', f: 'serious', t: "Okay. Rules. We each get one fortune. Best fortune wins. Loser carries the winner's bag. I don't have a bag. It's still a punishment." },
      { n: "The fortune box was a wooden hexagon with a hole in one end, and you shook it until a numbered stick fell out, and the number told the attendant which little drawer to give you a slip from. Kuromi shook hers like she was trying to kill it." },
      { n: "She unrolled the slip. She read it. Her whole face lit up like a lantern." },
      { s: 'kuromi', f: 'happy', t: "GREAT CURSE. The WORST one! I got the WORST ONE!" },
      { s: 'kuromi', f: 'happy', t: "Lost things will not be found. Travel is unlucky. The person you wait for will not come. Oh, this is AMAZING. This is the most punk thing that has ever happened to me." },
      { n: "Solar shook hers. Great blessing. Of course. Everything good, in tidy little characters, like the universe had taken one look at the pair of them and decided to balance the books." },
      { s: 'kuromi', f: 'serious', t: "...Of course you did. Goody-two-shoes. Even the BOX thinks you're nice." },
      { choose: [
        { t: "Trade?", notes: 3, then: [
          { s: 'kuromi', f: 'surprised', t: "...What?" },
          { s: 'solar', t: "Yours is cooler. I want the curse." },
          { n: "Kuromi stared at her. Then at the two slips. Then, slowly, she held hers out, and they swapped there in the cold, and Kuromi read Solar's great blessing with a face like she'd been handed something hot, and folded it into a tiny square and tucked it up inside her jester hat, against her head, where it would be safe." },
          { s: 'kuromi', f: 'flustered', t: "This is exactly what happens in volume six. EXACTLY. I think I'm going to throw up." }
        ] },
        { t: "You're supposed to tie the bad one to the tree. So it stays here.", notes: 2, then: [
          { s: 'kuromi', f: 'serious', t: "NO. It's MINE. I EARNED it." },
          { n: "She tied it to the tree anyway, after a long glare, because rules were rules even for punks, in a knot so complicated she said no god would ever get it undone, and stood back from it looking deeply satisfied." }
        ] }
      ] },
      { n: "On the way down Koromaru found a stick roughly the size of a small tree and carried it the whole way with enormous dignity, and Kuromi said he'd gotten the best fortune of all of them, obviously, because he had a stick, and nobody could argue with that." },
      { s: 'kuromi', f: 'neutral', t: "The person you wait for will not come." },
      { n: "She said it at the bottom of the steps, looking back up at the shrine, quieter than anything she'd said all day." },
      { s: 'kuromi', f: 'serious', t: "...That's dumb. That's a dumb fortune. You came. You always come. You come when I don't even ask." },
      { choose: [
        { t: "Then the fortune's wrong.", notes: 3, then: [
          { s: 'kuromi', f: 'happy', t: "The fortune's WRONG. Ha! Take THAT, shrine." },
          { n: "She said it loudly enough that an old woman at the top of the steps turned around. Then she grabbed Solar's hand, mitten and all, and didn't let go of it the whole way back to the dorm, and talked about volume six the entire time so that neither of them would have to mention it." }
        ] },
        { t: "(Take her hand.)", notes: 3, then: [
          { n: "Solar took her hand. Kuromi made a noise like a stepped-on squeaky toy and stared straight ahead and held on so hard her mitten nearly came off." },
          { s: 'kuromi', f: 'flustered', t: "...This is the BAD LUCK. It's already working. I'm DOOMED." }
        ] }
      ] }
    ] },
    { title: 'baku two', place: 'Paulownia Mall · Game Panic', music: 'city', scene: [
      { n: "There was a crane game at the front of Game Panic, by the door, full of plush animals heaped up like the aftermath of something, and Kuromi had walked past it four times on the way in and four times on the way out, and on the fifth time she stopped, and put both hands flat on the glass, and went very still." },
      { n: "In the back corner, half buried under a pile of pastel rabbits, was a fat purple plush with a long snout and small sleepy eyes and an expression of total, comprehensive uselessness." },
      { s: 'kuromi', f: 'surprised', t: "...Baku." },
      { s: 'kuromi', f: 'serious', t: "It's not Baku. Obviously. It's a tapir or whatever. A cheap one. It's not even the right purple." },
      { s: 'kuromi', f: 'sad', t: "...It's a little bit the right purple." },
      { n: "She put in a coin. The claw went down, wobbled, closed on nothing, and went back up with the bored air of a machine that had been doing this for years and knew exactly how it ended. She put in another coin. Then another. By the tenth she had stopped talking. By the fifteenth she had taken her mittens off." },
      { s: 'kuromi', f: 'serious', t: "It's RIGGED. The claw is WEAK. This machine is EVIL and not in the good way." },
      { choose: [
        { t: "(Watch the claw. Figure out the trick.)", notes: 3, then: [
          { n: "Solar watched. The claw swung a little to the left on the way down, every single time, like it had a bad knee. You had to aim right of where you meant. You had to aim for where it was going to be, not where it was." },
          { s: 'solar', t: "Let me try. One coin." }
        ] },
        { t: "Want me to try?", notes: 2, then: [
          { s: 'kuromi', f: 'flustered', t: "NO. Yes. NO. ...One coin. If you miss you're DISQUALIFIED from being my rival." }
        ] }
      ] },
      { n: "One coin. Solar lined it up a little right of where it should go, and held her breath, and pressed the button. The claw went down, swung its little bad-kneed swing to the left, and closed on the purple plush right around the middle, and lifted it, and carried it, wobbling, the whole impossible way to the chute, and let go." },
      { n: "The machine played a tinny fanfare. Kuromi didn't move." },
      { n: "Solar reached into the flap and pulled it out and held it out to her, the fat purple useless thing, and Kuromi took it in both hands and looked at it for a long time, and then put her face in it, all at once, and stood like that in the middle of Game Panic with her jester hat bent sideways against the glass." },
      { s: 'kuromi', f: 'sad', t: "...He's so useless. He's so useless, Solar. I miss him so much." },
      { choose: [
        { t: "You'll see him soon. End of the month.", notes: 3, then: [
          { s: 'kuromi', f: 'sad', t: "I know. I KNOW. That's the stupid part." },
          { s: 'kuromi', f: 'flustered', t: "I want to go home AND I want to stay here and that's not ALLOWED, you can't want two places at once, it's not in ANY of the rules." }
        ] },
        { t: "(Put your arm around her, plush and all.)", notes: 3, then: [
          { n: "Solar put an arm around her, plush and all. Kuromi leaned into it without a word, which was so unlike her that a middle schooler at the next machine turned to look, and Kuromi glared at him over the top of the plush until he turned back around." }
        ] }
      ] },
      { n: "She named it Baku Two on the walk home. She said it was a placeholder. She said it was only until she was back with the real one, and then she'd give it back so Solar would have something useless to remember her by, which was, she explained, a huge honor, the highest one she had." },
      { s: 'kuromi', f: 'happy', t: "Baku Two says thank you. Baku Two says you have a weird claw-game brain and it's kind of scary." },
      { s: 'kuromi', f: 'flustered', t: "...Baku Two also says you're his favorite. Baku Two has no taste." }
    ] },
    { title: 'the grabbing tactic', place: 'Port Island Station · Cinema', music: 'mystery', scene: [
      { n: "There was a horror movie on at the little cinema by Port Island Station, the sequel to one about a girl in a well, and Kuromi had bought two tickets the day it opened and then not mentioned it for a week, and then mentioned it at a rate of roughly four times an hour." },
      { s: 'kuromi', f: 'serious', t: "It's a DATE. An evil one. Couples go to scary movies so they can grab each other. I read about it. It's a TACTIC." },
      { s: 'kuromi', f: 'serious', t: "I won't be grabbing. Obviously. You'll be grabbing. I'm doing this for you. You're welcome." },
      { n: "She bought the biggest popcorn they had and a soda so big it needed both hands, and sat in the exact center of the exact center row, because that was where a punk sat, and the lights went down." },
      { n: "Eleven minutes in, she had Solar's hand. Not the sleeve. The hand. She didn't seem to know she was holding it. Her other hand was in the popcorn, frozen there, not eating, just holding a fistful, while the girl on the screen walked very slowly down a hallway toward a door that every single person in the cinema knew she should not open." },
      { s: 'kuromi', f: 'serious', t: "This is boring. She should just open it. Open it. Coward." },
      { n: "The girl opened it." },
      { n: "Kuromi screamed, and the popcorn went up, all of it, a whole bucket's worth, into the air over the center of the center row, and came down over both of them and the two rows in front like snow." },
      { choose: [
        { t: "(Don't laugh. Don't laugh. Don't.)", notes: 3, then: [
          { n: "Solar didn't laugh. She held it in with everything she had, shaking, in the dark, with popcorn down her collar, while Kuromi sat rigid beside her with her eyes squeezed shut and Solar's hand crushed in hers and one single kernel balanced perfectly on top of her jester hat." },
          { s: 'kuromi', f: 'flustered', t: "...You're laughing. I can feel you laughing. Through the HAND." }
        ] },
        { t: "(Squeeze her hand back.)", notes: 3, then: [
          { n: "Solar squeezed back. Kuromi's eyes came open, slowly. She looked down at their hands, at what she'd done, and at the popcorn, and Solar watched her decide, visibly, in the blue light of the screen, not to let go." }
        ] }
      ] },
      { n: "The man in front of them turned around with popcorn in his hair. Kuromi looked him dead in the eye." },
      { s: 'kuromi', f: 'serious', t: "It was HER. She's scared. I'm protecting her." },
      { n: "She held Solar's hand for the rest of the movie. Through the second door and the third and the well and the credits and the lights coming up on the wreckage of the popcorn. She didn't let go until they were outside under the station lights, and then only because she needed both hands to point at the poster and explain, at length, why it had been boring." },
      { s: 'kuromi', f: 'flustered', t: "...Okay. The grabbing tactic. It's possible I did some of the grabbing." },
      { choose: [
        { t: "You did all of the grabbing.", notes: 2, then: [
          { s: 'kuromi', f: 'flustered', t: "LIES. Slander. I'm writing it in my diary and in my diary YOU grabbed ME." }
        ] },
        { t: "Next time I'll grab first.", notes: 3, then: [
          { s: 'kuromi', f: 'surprised', t: "..." },
          { s: 'kuromi', f: 'flustered', t: "...Next time. Okay. There's a part three. I checked. In spring. That's. You'd. Okay." },
          { n: "She didn't finish any of it. She'd be gone by spring, and they both knew it. She held out her hand anyway, palm up, under the station lights, and Solar grabbed first." }
        ] }
      ] }
    ] },
    { title: 'three tiny things', place: 'Iwatodai Dorm · Rooftop', music: 'tender', scene: [
      { n: "The roof in January was colder than it had any right to be, which Kuromi took personally. She was sitting on the edge anyway, which wasn't allowed, in her pink hoodie with the polka-dot scarf wound up to her nose and Baku Two wedged under one arm, looking up." },
      { s: 'kuromi', f: 'neutral', t: "There's one. Look. One star. Over the bay." },
      { s: 'kuromi', f: 'serious', t: "In Mariland you get millions. Here you get ONE. It's an outrage. I'm filing a complaint." },
      { n: "It was a very small star, and possibly a plane. Solar didn't say so. She sat down beside Kuromi on the edge with her feet hanging over nothing, and the cold came straight up through her jeans from the concrete." },
      { s: 'kuromi', f: 'neutral', t: "In Mariland, when you wish on a star, you have to say it out loud. Otherwise it doesn't count. That's the rule." },
      { s: 'kuromi', f: 'flustered', t: "...I made the rule. Just now. It's still a rule." },
      { choose: [
        { t: "You first.", notes: 3, then: [
          { s: 'kuromi', f: 'serious', t: "...Fine. FINE." },
          { n: "She took a breath, a big one, like before going underwater, and pulled her scarf down off her mouth." }
        ] },
        { t: "I wish Junpei would find his hat.", notes: 2, then: [
          { s: 'kuromi', f: 'happy', t: "Wasted. Totally wasted wish. It's in the freezer. He'll never find it." },
          { s: 'kuromi', f: 'serious', t: "...My turn. Don't look at me." }
        ] }
      ] },
      { s: 'kuromi', f: 'sad', t: "I wish that when I go home, you don't forget me. Even the dumb stuff. ESPECIALLY the dumb stuff." },
      { s: 'kuromi', f: 'flustered', t: "And I wish you'd be a little bit mean sometimes. When I'm gone. Just a little. Draw on somebody. So there's still some evil here to remember me by." },
      { n: "She said it fast, all in one breath, to the star, the way she used to say her wishes on the roof of her hideout in Mariland, she'd told Solar once, back in August, when the city had been warm and the end of anything had been a long way off. Then she pulled the scarf back up over her mouth and glared at the bay like it was the bay's fault." },
      { choose: [
        { t: "I wish you'd write to me. From Mariland. Somehow.", notes: 3, then: [
          { s: 'kuromi', f: 'surprised', t: "...There's no post office. Between. Worlds." },
          { s: 'solar', t: "Write it in the diary, then. I'll know." },
          { s: 'kuromi', f: 'flustered', t: "...That's not how it works. That's not how ANY of it works." },
          { s: 'kuromi', f: 'flustered', t: "...I'm going to do it anyway. Every night. You'd better know." }
        ] },
        { t: "I wish for one more of these. And one more after that.", notes: 3, then: [
          { s: 'kuromi', f: 'sad', t: "That's cheating. That's infinite wishes. You can't wish for more wishes, everybody knows that." },
          { s: 'kuromi', f: 'neutral', t: "...Allowed. This once. Because the star's small and it doesn't know the rules." }
        ] }
      ] },
      { n: "She took a marker out of her hoodie pocket. Of course she had a marker. She took Solar's hand and turned it over, and on the back of it, very carefully, with the tip of her tongue between her teeth, she drew three tiny things in a row." },
      { n: "A skull. A heart. And a sun, lopsided, with little lines coming off it, the way kids draw them." },
      { s: 'kuromi', f: 'flustered', t: "That's permanent. Like, actually permanent. It's going to be there for a WEEK." },
      { s: 'kuromi', f: 'happy', t: "...Evil. Told you. I'm still evil. Don't wash it." },
      { n: "Solar didn't wash it. It took nine days to fade. Junpei asked about it on the third day and Solar told him it was a curse, a great one, from the shrine, and Junpei believed her completely and wouldn't sit next to her at dinner." }
    ] }
  ],
  // P3's Christmas Eve: between rank 9 (11/21) and rank 10 (12/26). No kiss yet; rank 10 has the first one.
  christmas: { place: 'Iwatodai Dorm · Lounge', scene: [
    { n: "Kuromi had announced at breakfast that Christmas was cancelled. Too cute. Too pink. Too many happy people being happy at each other. A punk did not do Christmas. A punk did ANTI-Christmas, and anti-Christmas was at seven, in HQ, attendance mandatory, bring snacks." },
    { n: "HQ was behind the lounge couch, where it had been on and off since the summer, every cushion in the building and a bedsheet for a roof, and the sign on the front said ANTI-CHRISTMAS. NO JOY ALLOWED. in black marker, which somebody, almost certainly Kuromi, had then gone over very carefully in red and green glitter." },
    { n: "Inside, by flashlight, there was a Christmas tree. A small plastic one from the hundred-yen shop, decorated entirely in black, black tinsel, black paper chains, a skull on top where the star should be, and underneath it, wrapped in newspaper with the comics page facing out, two presents." },
    { s: 'kuromi', f: 'serious', t: "It's an ANTI-tree. It's evil. Look at it. Look how evil it is." },
    { s: 'kuromi', f: 'flustered', t: "...Stop smiling at it. You're not supposed to like it. It's ANTI." },
    { choose: [
      { t: "It's the best tree I've ever seen.", notes: 3, then: [
        { s: 'kuromi', f: 'flustered', t: "It's NOT a tree. It's an ANTI-tree. You keep saying it wrong on purpose." },
        { n: "She nudged the skull on top a tiny bit to the left anyway, so it would be straight for Solar to look at." }
      ] },
      { t: "Where did you get black tinsel?", notes: 2, then: [
        { s: 'kuromi', f: 'happy', t: "I DYED it. In the bathroom sink. Yukari's going to find out on Tuesday. It's going to be AMAZING." }
      ] }
    ] },
    { n: "They ate snacks in the fort with the flashlight propped on a cushion. Upstairs the dorm was having an actual Christmas, loud and warm, and every so often a laugh came down through the ceiling, and every time it did Kuromi said boo, quietly, without much conviction." },
    { s: 'kuromi', f: 'neutral', t: "Okay. Anti-presents. You go first. Mine's bad. I mean evil. I mean bad." },
    { choose: [
      { t: "(Give her the last volume of Under the Cherry Blossoms.)", notes: 3, then: [
        { n: "The final volume, the one Bookworms didn't have, the one Solar had ordered from a shop across the city and taken the train to pick up. Kuromi saw the cover and went completely silent." },
        { s: 'kuromi', f: 'surprised', t: "...They don't HAVE the last one. I ASKED. I asked like nine times." },
        { s: 'kuromi', f: 'flustered', t: "If they don't end up together I'm going to burn down Japan." }
      ] },
      { t: "(Give her a box of glitter pens. Every color.)", notes: 3, then: [
        { n: "Twelve of them in a clear plastic case from the stationery shop at Paulownia Mall. Kuromi opened the case and looked at them in the flashlight, all twelve glittering, and touched the pink one with one finger." },
        { s: 'kuromi', f: 'flustered', t: "...My old one's almost out. How did you know that. You didn't read my diary. You DIDN'T. I know you didn't." },
        { s: 'solar', t: "I didn't. You shake it every time before you write. Really hard." },
        { s: 'kuromi', f: 'flustered', t: "...That's worse. That's so much worse. You WATCH me." }
      ] }
    ] },
    { n: "Hers was soft, and lumpy, and wrapped so tightly in newspaper that it took Solar a full minute to get into it, while Kuromi sat with her knees pulled up and her face mostly hidden in them." },
    { n: "A scarf. Black and pink polka dots, almost the same as hers. Hand-knitted, and badly, so badly, with holes where stitches had escaped and one end distinctly wider than the other, and at the end, embroidered in pink thread, a single lopsided grinning skull." },
    { s: 'kuromi', f: 'flustered', t: "I got a book from Bookworms. The old lady showed me. Twice. I dropped like a thousand stitches. That end's wider on PURPOSE. It's a punk scarf." },
    { s: 'kuromi', f: 'serious', t: "Now we match. So people know you're my rival. From a distance. It's a WARNING." },
    { choose: [
      { t: "(Put it on. Wear it all night.)", notes: 3, then: [
        { n: "Solar wound it around her neck twice. It smelled like the fort, cushions and flashlight batteries and the sharp sweet smell of Kuromi's shampoo, and it was warm, and Kuromi looked at her in it for a long moment by the flashlight and then pulled her own scarf up over her nose so only her eyes showed." },
        { s: 'kuromi', f: 'flustered', t: "...It looks okay. On you. It looks FINE. Stop being cute in my HQ." }
      ] },
      { t: "You made this. With your hands.", notes: 3, then: [
        { s: 'kuromi', f: 'flustered', t: "NO. A machine made it. An evil machine. Which is me. Shut UP." }
      ] }
    ] },
    { n: "When they finally crawled out of the fort it was nearly eleven, and the lounge was empty, and the party upstairs had gone quiet, and someone, almost certainly Junpei, had taped a sprig of plastic mistletoe to the top of the lounge doorway, low, exactly where you'd have to walk under it to get to the stairs." },
    { n: "Kuromi saw it. Kuromi stopped dead." },
    { s: 'kuromi', f: 'surprised', t: "...That's a TRAP. That's a trap, that's Junpei, he did that, that's an AMBUSH." },
    { choose: [
      { t: "We could go around.", notes: 2, then: [
        { s: 'kuromi', f: 'flustered', t: "There IS no around. It's a DOOR. That's how doors WORK." },
        { n: "She stood at the edge of the doorway with her scarf up to her eyes for a very long time." }
      ] },
      { t: "(Wait. Let her decide.)", notes: 3, then: [
        { n: "Solar waited. She didn't move toward it and she didn't move away. Kuromi looked up at the mistletoe, and at Solar, and back at the mistletoe, her whole face going pink above the scarf, right up to the bandage on her nose." }
      ] }
    ] },
    { n: "In the end she grabbed Solar's hand, hard, and walked them both under it at a near-run, eyes shut, like going through a car wash, and didn't stop until the foot of the stairs, where she let go and spun around and pointed back up at it, breathing hard." },
    { s: 'kuromi', f: 'flustered', t: "There. We walked under it. Holding hands. That counts. That's the punk version. It COUNTS." },
    { s: 'kuromi', f: 'flustered', t: "...Merry anti-Christmas, Solar. Don't you DARE tell Junpei it worked." }
  ] },
  romance: true,
  cast: { junpei: 'Junpei', mymelody: 'My Melody', koromaru: 'Koromaru', rohan: 'Rohan', yukari: 'Yukari' },
  threads: { rivals: { name: 'ARCH RIVALS 💀', members: ['kuromi', 'mymelody'] } },
  texts: [
    { id: 'kur-1a', rank: 1, days: 1, slot: 1, msgs: [
      { from: 'kuromi', t: 'THIS IS KUROMI' },
      { from: 'kuromi', t: 'I STOLE YOUR NUMBER FROM THE FRIDGE' },
      { from: 'kuromi', t: 'u are now officially my RIVAL 💀' }
    ], reply: [
      { t: 'I accept.', notes: 3, then: [{ from: 'kuromi', t: 'GOOD. prepare urself goody two shoes' }] },
      { t: 'Why was my number on the fridge?', notes: 2, then: [{ from: 'kuromi', t: 'the boxing guy put it there. EMERGENCY CONTACTS. lame' }] }
    ] },
    { id: 'kur-2a', rank: 2, days: 1, slot: 1, msgs: [
      { from: 'kuromi', t: 'u really didnt read it' },
      { from: 'kuromi', t: 'the diary' },
      { from: 'kuromi', t: 'weird. suspicious. ur up to something' }
    ], reply: [
      { t: "I'm not up to anything.", notes: 2, then: [{ from: 'kuromi', t: 'thats EXACTLY what someone up to something would say 🖤' }] },
      { t: "It's yours. I'd never read it.", notes: 3, then: [{ from: 'kuromi', t: '...' }, { from: 'kuromi', t: 'ok. thanks i guess. STILL RIVALS' }] }
    ] },
    { id: 'kur-3a', rank: 3, days: 1, slot: 1, msgs: [
      { from: 'kuromi', t: 'MY MELODY IS HERE' },
      { from: 'kuromi', t: 'IN THIS WORLD' },
      { from: 'kuromi', t: 'she brought me almond pound cake and said her mama said to make friends 😡' }
    ], reply: [
      { t: 'Did you eat the cake?', notes: 3, then: [{ from: 'kuromi', t: '...' }, { from: 'kuromi', t: 'ALL OF IT. thats not the point' }] },
      { t: 'She sounds nice.', notes: 1, then: [{ from: 'kuromi', t: 'BETRAYAL' }] }
    ] },
    { id: 'rivals-3', thread: 'rivals', rank: 3, before: 6, days: 2, slot: 1, msgs: [
      { sys: 'Kuromi added you to "ARCH RIVALS 💀"' },
      { from: 'kuromi', t: 'ok. this is the official ARCH RIVAL chat' },
      { from: 'kuromi', t: 'u are here as a WITNESS' },
      { from: 'mymelody', t: 'Hello Solar! Hello Kuromi! 🌸 My mama gave me a phone so I can text my friends!' },
      { from: 'kuromi', t: 'RIVALS. NOT FRIENDS. read the GROUP NAME' },
      { from: 'mymelody', t: 'I read it! I think it is a very cute name 💕' },
      { from: 'kuromi', t: 'ITS NOT CUTE ITS MENACING' },
      { ask: [
        { t: 'Very menacing.', notes: 3, then: [
          { from: 'kuromi', t: 'THANK YOU. finally someone with TASTE 💀' },
          { from: 'mymelody', t: 'Menacing and cute! Just like Kuromi! 🎀' },
          { from: 'kuromi', t: '...' }
        ] },
        { t: "It's a little cute.", notes: 1, then: [
          { from: 'kuromi', t: 'U ARE ALSO MY RIVAL NOW. DOUBLE RIVAL' },
          { from: 'mymelody', t: 'Thank you Solar! 🌸' }
        ] },
        { t: 'What exactly am I witnessing?', notes: 2, then: [
          { from: 'kuromi', t: 'MY VICTORY. obviously' },
          { from: 'kuromi', t: 'i am going to prove ONCE AND FOR ALL that she is my rival and not my friend' }
        ] }
      ] },
      { from: 'mymelody', t: 'Kuromi, did you like the almond pound cake? 🍰' },
      { from: 'kuromi', t: 'no' },
      { from: 'kuromi', t: 'it was fine' },
      { from: 'kuromi', t: 'it was too small actually. thats a complaint' },
      { from: 'mymelody', t: "Oh no! I'll bake a bigger one! My mama always said, if a friend is still hungry, bake twice! 🍰🍰" },
      { from: 'kuromi', t: 'STOP SAYING FRIEND' },
      { ask: [
        { t: 'She ate the whole thing, Melody.', notes: 3, then: [
          { from: 'kuromi', t: 'SOLAR' },
          { from: 'kuromi', t: 'u were supposed to be a WITNESS not a SNITCH' },
          { from: 'mymelody', t: 'Yay!! That makes me so happy 💕💕💕' }
        ] },
        { t: 'Kuromi. Say thank you.', notes: 2, then: [
          { from: 'kuromi', t: '...' },
          { from: 'kuromi', t: 'thanks. FOR NOTHING' },
          { from: 'mymelody', t: "You're welcome Kuromi! 🌸" }
        ] },
        { t: 'Make it chocolate next time.', notes: 1, then: [
          { from: 'mymelody', t: 'Okay! Chocolate! I wrote it down 🎀' },
          { from: 'kuromi', t: 'dont place ORDERS in MY war chat' }
        ] }
      ] },
      { sys: 'My Melody renamed the group "best friends 🌸🎀💕"' },
      { from: 'kuromi', t: 'NO' },
      { from: 'kuromi', t: 'HOW DID U EVEN DO THAT' },
      { from: 'mymelody', t: 'I pressed the little pencil! 🌸' },
      { sys: 'Kuromi renamed the group "ARCH RIVALS 💀"' },
      { sys: 'My Melody renamed the group "best friends 🌸🎀💕"' },
      { from: 'kuromi', t: 'IM GOING TO SCREAM' },
      { from: 'mymelody', t: 'My mama always said, when you feel like screaming, have a nice glass of warm milk! 🥛' },
      { sys: 'Kuromi renamed the group "ARCH RIVALS 💀"' },
      { from: 'kuromi', t: 'ok. WITNESS. u decide. what is this chat' },
      { ask: [
        { t: 'Arch rivals.', notes: 3, then: [
          { from: 'kuromi', t: 'HA 💀 the witness has SPOKEN' },
          { from: 'mymelody', t: 'Okay! Arch rivals is nice too! Good night, arch rivals! 💕' },
          { from: 'kuromi', t: 'u cant say good night to RIVALS' },
          { from: 'kuromi', t: '...good night' }
        ] },
        { t: 'Rivals who share cake.', notes: 2, then: [
          { from: 'mymelody', t: "My mama always said, a rival is just a friend who doesn't know it yet! 🌸" },
          { from: 'kuromi', t: 'UR MAMA DOESNT KNOW ANYTHING' },
          { from: 'kuromi', t: '...the cake part is acceptable' }
        ] },
        { t: 'Best friends.', notes: 1, then: [
          { from: 'kuromi', t: '...' },
          { from: 'kuromi', t: 'u are dead to me. for one day' },
          { from: 'mymelody', t: 'Yay!! 🎀💕🌸' }
        ] }
      ] }
    ] },
    { id: 'kur-5a', rank: 5, days: 1, slot: 1, msgs: [
      { from: 'kuromi', t: 'i finished volume 3' },
      { from: 'kuromi', t: 'HE CONFESSED UNDER THE CHERRY TREE' },
      { from: 'kuromi', t: 'not that i care. i dont care. send volume 4' }
    ], reply: [
      { t: "I'll bring it tomorrow.", notes: 3, then: [{ from: 'kuromi', t: 'U ARE THE BEST RIVAL' }] },
      { t: 'You care so much.', notes: 2, then: [{ from: 'kuromi', t: 'i will draw on ur face while u sleep' }] }
    ] },
    { id: 'kur-7a', rank: 7, days: 1, slot: 1, msgs: [
      { from: 'kuromi', t: 'the manga guy filled my whole room with drawings of baku' },
      { from: 'kuromi', t: 'this means WAR' },
      { from: 'kuromi', t: 'help me' }
    ], reply: [
      { t: "I'll get the markers.", notes: 3, then: [{ from: 'kuromi', t: 'THIS IS WHY ur my favorite rival 🖤💀' }] },
      { t: 'Junpei has a camera. Just saying.', notes: 2, then: [{ from: 'kuromi', t: 'ooooo evil. i love it' }] }
    ] },
    { id: 'kur-8a', rank: 8, days: 1, slot: 1, msgs: [
      { from: 'kuromi', t: 'nobody has ever thrown me a birthday party' },
      { from: 'kuromi', t: 'not ONCE' },
      { from: 'kuromi', t: 'im not crying ur crying' }
    ], reply: [
      { t: "I'm crying a little.", notes: 3, then: [{ from: 'kuromi', t: 'ok me too. dont tell anyone. ESPECIALLY my melody' }] },
      { t: 'Happy birthday, Kuromi.', notes: 3, then: [{ from: 'kuromi', t: '🖤🖤🖤' }] }
    ] },
    { id: 'kur-9r', rank: 9, route: 'romance', days: 1, slot: 1, msgs: [
      { from: 'kuromi', t: 'i wrote about u in my diary' },
      { from: 'kuromi', t: 'with HEARTS' },
      { from: 'kuromi', t: 'this is the worst day of my life and also the best' }
    ], reply: [
      { t: 'Can I see the hearts?', notes: 3, then: [{ from: 'kuromi', t: 'NO' }, { from: 'kuromi', t: '...maybe one' }] },
      { t: "I'd write about you too.", notes: 3, then: [{ from: 'kuromi', t: 'stop being cute at me im a PUNK' }] }
    ] },
    { id: 'kur-9f', rank: 9, route: 'friend', days: 1, slot: 1, msgs: [
      { from: 'kuromi', t: 'ok so ur my best friend AND my rival' },
      { from: 'kuromi', t: 'that is allowed. i checked. its in the rules' }
    ], reply: [
      { t: 'Which rules?', notes: 2, then: [{ from: 'kuromi', t: 'MY rules. obviously' }] },
      { t: 'Best rival. Best friend.', notes: 3, then: [{ from: 'kuromi', t: 'BEST EVERYTHING 💀🖤' }] }
    ] }
  ],
  ranks: [
    { after: '5/11', title: '1: war', place: 'Iwatodai Dorm · Lounge', scene: [
      { n: "Junpei had fallen asleep on the lounge couch with his mouth open, which was not unusual. What was unusual was that somebody was drawing on his face." },
      { n: "She was a girl about Solar's age, long black hair streaked with pink, a black jester hat with two pointed ears and a pink skull right in the middle of it, a skull bow clipped above one ear and a bandage across her nose, sitting cross-legged on the arm of the couch with a permanent marker in her fist and an expression of total, glowing concentration. She had already given Junpei a mustache, a unibrow, and the word LOSER across his forehead, backwards, so he'd be able to read it in the mirror." },
      { n: "She looked up when Solar came in. She did not stop drawing." },
      { s: 'kuromi', f: 'serious', t: "Don't even THINK about telling on me, goody-two-shoes." },
      { choose: [
        { t: "Add glasses.", notes: 3, then: [
          { s: 'kuromi', f: 'surprised', t: '...' },
          { s: 'kuromi', f: 'happy', t: "Oh. Oh, that's EVIL. I like that." },
          { n: "She added glasses. Little round ones. Solar had never seen anyone look so happy." }
        ] },
        { t: "Who are you?", notes: 2, then: [{ s: 'kuromi', f: 'happy', t: "Kuromi. The Kuromi. Leader of the Kuromi's Five. Terror of Mariland. Mostly. Sometimes." }] },
        { t: "He's going to kill you.", notes: 1, then: [{ s: 'kuromi', f: 'happy', t: "He can TRY." }] }
      ] },
      { n: "She'd come through the green hour two nights ago, she explained, landed on the dorm roof, and decided immediately that it was her territory. Nobody had argued. Mitsuru had tried to argue, and Kuromi had called her a stuck-up princess, and Mitsuru had, for reasons nobody understood, found this very funny." },
      { s: 'kuromi', f: 'serious', t: "Okay. Listen. I've decided something. You're my rival now." },
      { choose: [
        { t: "Why me?", notes: 2, then: [{ s: 'kuromi', f: 'happy', t: "Because you didn't tell on me. That's suspicious. Rivals are suspicious. It's perfect." }] },
        { t: "I accept.", notes: 3, then: [
          { s: 'kuromi', f: 'surprised', t: "...You ACCEPT? Nobody accepts! They're supposed to get mad!" },
          { s: 'kuromi', f: 'serious', t: "Ugh. Fine. Good. Rival accepted. Prepare yourself." }
        ] }
      ] },
      { n: "When Junpei woke up, he looked in the mirror, screamed, and chased Kuromi around the dorm for twenty minutes. She was faster than him. She laughed the entire time. It was the loudest, happiest sound Solar had heard in that building in weeks." }
    ] },

    { after: '5/25', title: '2: the diary', place: 'Iwatodai Dorm · Lounge', scene: [
      { n: "There was a diary on the lounge couch. Black, with a pink skull on the cover and a little lock that was not, it turned out, locked." },
      { n: "Solar knew whose it was. She knew because there was a sticker on the back that said PROPERTY OF KUROMI DO NOT READ OR ELSE in pink glitter pen, and underneath, in smaller letters, I MEAN IT, and under that, even smaller, ESPECIALLY YOU MY MELODY." },
      { n: "She picked it up. She put it on the shelf where it wouldn't get sat on. She didn't open it." },
      { s: 'kuromi', f: 'serious', t: "WHERE IS MY DIARY." },
      { n: "Kuromi came into the lounge at a run, wild-eyed, and stopped dead when she saw it on the shelf, closed, safe, and Solar on the couch with a magazine." },
      { s: 'kuromi', f: 'flustered', t: "...Did you read it?" },
      { choose: [
        { t: "No. It's yours.", notes: 3, then: [
          { s: 'kuromi', f: 'serious', t: '...' },
          { n: "She looked at Solar for a long time, eyes narrowed, like she was looking for the trick. There wasn't one." },
          { s: 'kuromi', f: 'surprised', t: "...Nobody's ever not read it before. Everybody always reads it." }
        ] },
        { t: "Only the sticker on the back.", notes: 2, then: [{ s: 'kuromi', f: 'serious', t: "The sticker is PUBLIC. That's fine. The sticker is a WARNING." }] }
      ] },
      { s: 'kuromi', f: 'flustered', t: "That's so suspicious. You're up to something. I'm watching you." },
      { n: "She took the diary and held it against her chest, and for a second, under the hat and the skull and the attitude, she looked very small. Then she stomped off upstairs, and slammed her door, and a minute later Solar heard her laughing at something, alone, and the sound of a pen scratching paper very fast." }
    ] },

    { after: '6/15', title: '3: my melody', place: 'Iwatodai Dorm · Front Door', scene: [
      { n: "The doorbell rang on a Saturday evening, and Yukari answered it, and came back to the lounge with an expression of complete bewilderment." },
      { s: 'yukari', f: 'surprised', t: "Um. There's a... a girl? In a pink bunny hood? Asking for Kuromi?" },
      { register: 'yukari' },
      { register: 'mymelody' },
      { s: 'mymelody', f: 'happy', t: "Hello! I'm My Melody! I've come to visit my friend Kuromi! I brought almond pound cake!" },
      { n: "She was a soft, round-faced girl with long pink braids, a pink bunny-eared hood and a big blue bow, holding a cake box in both hands and smiling with the bottomless, impenetrable sweetness of someone who had never once in her life considered that anyone might not be happy to see her." },
      { n: "Upstairs, a door crashed open." },
      { s: 'kuromi', f: 'surprised', t: "MY MELODY!!!" },
      { s: 'mymelody', f: 'happy', t: "Kuromi! My mama always said, when you're far from home, find a friend! So I found you!" },
      { s: 'kuromi', f: 'serious', t: "I am NOT your FRIEND. I am your RIVAL. Your ARCH-RIVAL." },
      { choose: [
        { t: "Kuromi, she brought cake.", notes: 2, then: [{ s: 'kuromi', f: 'neutral', t: "...What kind of cake." }] },
        { t: "(Let them fight it out.)", notes: 3, then: [
          { n: "Solar sat on the stairs and watched. It was, in its way, magnificent. Kuromi shouted. My Melody agreed with everything she said, cheerfully, which made Kuromi shout louder. It went on for twenty minutes and ended with both of them eating cake on the lounge floor, Kuromi still muttering, My Melody humming." }
        ] }
      ] },
      { s: 'mymelody', f: 'happy', t: "My mama always said, a rival is just a friend who doesn't know it yet!" },
      { s: 'kuromi', f: 'serious', t: "Your MAMA doesn't know ANYTHING." },
      { n: "My Melody faded at the end of the night, like the others did. She waved at Kuromi from the front door, still smiling. Kuromi didn't wave back. But when the door closed, she went and sat on the step where My Melody had been, and stayed there for a long time." }
    ] },

    { after: '7/6', title: '4: koromaru', place: 'Iwatodai Dorm · Lounge', scene: [
      { n: "Kuromi was mean to everyone. That was the rule. She'd explained it to Solar with great seriousness: everyone gets a little mean, it builds character, it's a public service." },
      { n: "But she was never mean to Koromaru." },
      { n: "Solar found them in the lounge on a hot July evening, Koromaru asleep in a perfect circle, Kuromi lying on her stomach on the floor next to him, very quietly drawing his portrait in the back of her diary." },
      { s: 'kuromi', f: 'serious', t: "Shh. He's sleeping. If you wake him up I'll destroy you." },
      { choose: [
        { t: "(Sit down quietly.)", notes: 3, then: [{ n: "Solar sat down on the floor, very quietly. Kuromi glanced at her, approved, and went back to drawing. The portrait was, honestly, very good." }] },
        { t: "You're never mean to him.", notes: 3, then: [
          { s: 'kuromi', f: 'sad', t: "...He's never mean to me." },
          { s: 'kuromi', f: 'serious', t: "He doesn't care that I'm a punk or a troublemaker or whatever. He just likes me. That's rare, okay? You protect rare things." }
        ] }
      ] },
      { n: "Koromaru woke up eventually, stretched, and climbed directly into Kuromi's lap without asking. She froze. Her whole face went pink, right up to the bandage on her nose. And then she put her arms around the dog very carefully, like he was made of glass, and didn't move for an hour." },
      { s: 'koromaru', f: 'happy', t: "Arf." },
      { s: 'kuromi', f: 'flustered', t: "...Don't tell anyone about this." },
      { n: "Solar promised. Koromaru, asleep again, snored." }
    ] },

    { after: '7/27', title: '5: shoujo manga', place: 'Iwatodai Strip · Bookworms', scene: [
      { n: "Bookworms was a tiny used bookshop on the Iwatodai strip run by an elderly couple who were very, very kind, and Kuromi had walked in there to steal a comic book and walked out an hour later with a stack of romance manga, paid for, blushing furiously." },
      { s: 'kuromi', f: 'flustered', t: "It's RESEARCH. For EVIL. You have to understand your enemy." },
      { s: 'kuromi', f: 'neutral', t: "The enemy is love. It's very confusing." },
      { choose: [
        { t: "Which one are you reading?", notes: 3, then: [
          { s: 'kuromi', f: 'flustered', t: "...It's called 'Under the Cherry Blossoms.' He's a delinquent. She's a class rep. They HATE each other. Except they don't." },
          { s: 'kuromi', f: 'happy', t: "It's very stupid. I've read it four times." }
        ] },
        { t: "You like romance.", notes: 3, then: [{ s: 'kuromi', f: 'flustered', t: "I do NOT. I like... watching people be stupid about feelings. From a safe distance. For research." }] }
      ] },
      { n: "They sat on the bench outside the shop and she read the good parts out loud, in different voices, very dramatically, and stopped every few pages to say something rude about the main characters, and then kept reading anyway, with her face very close to the page." },
      { s: 'kuromi', f: 'sad', t: "...Do you think it's real? This stuff? Somebody liking you even though you're mean and loud and a menace?" },
      { n: "She asked it to the manga. Not to Solar. She'd tugged her hat down over her eyes." },
      { choose: [
        { t: "I think it's real.", notes: 3, then: [{ s: 'kuromi', f: 'flustered', t: "...Okay. Okay, good. Not for me. Just. In general." }] },
        { t: "I like you, and you're all of those things.", notes: 3, then: [
          { s: 'kuromi', f: 'flustered', t: '...' },
          { n: "She put the manga up in front of her face. She didn't say anything for a very long time. Very slowly, she pushed her hat back up." }
        ] }
      ] }
    ] },

    { after: '8/17', title: '6: under the eyeliner', music: 'tender', place: 'Iwatodai Dorm · Rooftop', scene: [
      { n: "The dorm roof, at night. Kuromi had claimed it as her territory on the first night and had decorated it with skull stickers on the water tank, which Mitsuru was pretending not to know about." },
      { n: "She was sitting on the edge with her feet dangling over the street, which was not allowed, and looking at the stars, which were faint and blurry over the city." },
      { s: 'kuromi', f: 'neutral', t: "In Mariland you can see all of them. The stars. Millions." },
      { s: 'kuromi', f: 'sad', t: "I used to sit on the roof of my hideout and look at them and make wishes. Mostly about beating My Melody. Sometimes about other stuff." },
      { choose: [
        { t: "What other stuff?", notes: 3, then: [
          { s: 'kuromi', f: 'sad', t: '...' },
          { s: 'kuromi', f: 'sad', t: "That somebody would like me. The real me. Not because I'm scary or because I'm funny when I'm mad." },
          { n: "She said it fast, all in one breath, and then glared at the city like it was the city's fault." }
        ] },
        { t: "You miss home.", notes: 2, then: [{ s: 'kuromi', f: 'sad', t: "I miss Baku. He's my sidekick. He's useless. I'd give anything for him to be here, being useless." }] }
      ] },
      { s: 'kuromi', f: 'sad', t: "Everybody thinks I'm just a troublemaker. And I am. But that's not ALL I am. Nobody ever asks about the rest." },
      { n: "Solar knew about the rest. About the face you showed and the one underneath. About how much easier it was to be the loud, difficult thing everyone expected than to let anyone see what was under the eyeliner." },
      { choose: [
        { t: "I'm asking about the rest.", notes: 3, then: [
          { s: 'kuromi', f: 'surprised', t: "...You are, aren't you." },
          { n: "And she told her. About Mariland, and the diary, and Baku, and the romance manga she'd been hiding for years. About how being mean was easier than being disappointed. They stayed up there until two in the morning." }
        ] },
        { t: "(Sit next to her on the edge.)", notes: 2, then: [{ n: "Solar sat next to her, feet dangling over nothing. Kuromi glanced at her, surprised, and then scooted a little closer, until their shoulders touched." }] }
      ] }
    ] },

    { after: '9/14', title: '7: prank war', place: 'Iwatodai Dorm · Hallway', scene: [
      { n: "It started when Rohan Kishibe, the manga artist from another world who had set up permanently at Bookworms, used his strange power on Kuromi to 'read' her for research, and wrote, in the margin of her page, KUROMI SECRETLY LOVES MY MELODY." },
      { n: "It wasn't true. Probably. But Kuromi had read it over his shoulder, and Kuromi did not forgive." },
      { s: 'kuromi', f: 'serious', t: "He drew BAKU. All over my room. Hundreds of Bakus. This means WAR." },
      { s: 'kuromi', f: 'serious', t: "And you're my second. Rivals help rivals. It's the rules." },
      { choose: [
        { t: "I'll get the markers.", notes: 3, then: [{ s: 'kuromi', f: 'happy', t: "THIS is why you're my favorite rival." }] },
        { t: "Is this a good idea?", notes: 1, then: [{ s: 'kuromi', f: 'happy', t: "NO. That's what makes it GREAT." }] }
      ] },
      { n: "It escalated quickly. Kuromi filled Rohan's pen box with glitter. Rohan sent Junpei a manga page of himself 'defeating' Kuromi in single combat. Kuromi drew on Junpei's face again, because Junpei was, she said, a legitimate military target. Rohan used his power on a pigeon and made it follow Kuromi around for a day." },
      { n: "It ended at Bookworms, at midnight, with both of them exhausted and covered in ink and glitter, glaring at each other across the counter while the elderly owners slept upstairs." },
      { s: 'rohan', f: 'serious', t: "...You're a worthy adversary. I refuse to admit it publicly." },
      { s: 'kuromi', f: 'happy', t: "Same. Truce. Until I get bored." },
      { n: "They shook on it. Kuromi drew a tiny skull on his hand while she was shaking it. He let her. Solar had never seen two people more delighted to hate each other." }
    ] },

    { after: '10/31', title: '8: birthday', place: 'Iwatodai Dorm · Lounge', scene: [
      { n: "Halloween. Kuromi had been strange all week. Quiet. Not drawing on anyone. Not slamming any doors. Mitsuru had actually asked Solar if Kuromi was ill." },
      { n: "Solar had figured it out on Tuesday, from a single line on the sticker on the back of the diary that she'd never noticed before. Tiny letters, at the very bottom: BIRTHDAY OCT 31 (NOBODY EVER REMEMBERS)." },
      { n: "So she'd told everyone." },
      { n: "When Kuromi came downstairs that evening, the lounge was dark. And then the lights came on, and there were skull decorations everywhere, and black and pink streamers, and a cake shaped very badly like her hat, and the entire dorm yelling SURPRISE." },
      { n: "Junpei had made a banner that said HAPPY BIRTHDAY KUROMI, MENACE in permanent marker. Yukari had baked the cake. Akihiko had bought her a punching bag, which he believed was the most thoughtful possible gift. Koromaru had a party hat on. Mitsuru had sent a card with a check in it, which Kuromi did not know how to cash." },
      { n: "Kuromi stood on the bottom step and didn't move." },
      { s: 'kuromi', f: 'surprised', t: '...' },
      { s: 'kuromi', f: 'sad', t: "...Nobody ever... nobody ever remembers." },
      { choose: [
        { t: "I remembered.", notes: 3, then: [
          { s: 'kuromi', f: 'surprised', t: '...' },
          { n: "Her mouth fell open. Then shut. Then she burst into tears, loudly, furiously, and hugged Solar so hard she knocked her into the streamers, and the whole lounge cheered." }
        ] },
        { t: "Happy birthday, menace.", notes: 3, then: [{ s: 'kuromi', f: 'happy', t: "...You guys are all the WORST. I love it. I HATE that I love it." }] }
      ] },
      { n: "She ate three slices of cake and punched the bag Akihiko gave her for an hour and drew a skull on everyone's hand before bed. When she went upstairs, she was still wearing the party hat. She slept in it." }
    ] },

    { after: '11/21', title: '9: diary entry', place: 'Iwatodai Dorm · Rooftop', scene: [
      { n: "The roof again, in November, cold. Kuromi was holding the diary in both hands, and she held it out to Solar, open, and turned her face away." },
      { s: 'kuromi', f: 'flustered', t: "One page. You can read ONE page. Then I'm throwing myself off the roof." },
      { n: "The page was covered in doodles. Skulls and bats and Koromaru and a very angry My Melody. And in the middle, in pink glitter pen, in her messy handwriting, it said:" },
      { n: "NOTES ON MY RIVAL. She is very annoying. She never gets mad. She remembers things nobody remembers. She doesn't read my diary. I don't know what to do about her. I think she might be my best friend. I think she might be more than that. UGH." },
      { s: 'kuromi', f: 'flustered', t: "...So? What is it? Say something. I'm dying." },
      { route: [
        { t: "More than that. Definitely more than that.", route: 'romance', notes: 3, then: [
          { s: 'kuromi', f: 'surprised', t: '...' },
          { s: 'kuromi', f: 'flustered', t: "...UGH. Okay. Okay okay okay. This is just like volume three. Under the cherry tree. Except it's a roof. And it's cold." },
          { n: "She grabbed the diary back, wrote something on the page very fast with the glitter pen, and showed Solar. It was a big lopsided heart. With a little skull in the middle of it." }
        ] },
        { t: "Best friend. And best rival.", route: 'friend', notes: 3, then: [
          { s: 'kuromi', f: 'happy', t: "...Best friend AND best rival. That's allowed. I made the rules. It's allowed." },
          { n: "She wrote it in the diary, right under the entry, in big letters: BEST FRIEND + BEST RIVAL. Then she drew a skull wearing a party hat next to it, for luck." }
        ] }
      ] }
    ] },

    { after: '12/26', title: '10: the new page', place: 'Iwatodai Dorm · Lounge', scene: [
      { n: "The week after Christmas. The dorm was quiet, half the residents gone to visit family, the lounge full of leftover tinsel and the smell of the cake Yukari had made for the holidays." },
      { n: "Kuromi was sitting on the couch with a brand-new diary in her lap. White. With a pink skull on the cover." },
      { s: 'kuromi', f: 'neutral', t: "I filled the old one. All of it. Mostly about you, which is gross." },
      { s: 'kuromi', f: 'flustered', t: "So I got a new one. And I want you to write the first page." },
      { n: "She held out the glitter pen. She was twisting the end of her scarf around one finger. She was very obviously terrified." },
      { ifRoute: 'friend', then: [
        { choose: [
          { t: "(Write: My rival is the best person I know.)", notes: 3, then: [
            { s: 'kuromi', f: 'surprised', t: '...' },
            { s: 'kuromi', f: 'flustered', t: "...That's the most embarrassing thing anyone has ever written in my diary. I'm keeping it forever." }
          ] },
          { t: "(Draw a skull with a party hat.)", notes: 3, then: [{ s: 'kuromi', f: 'happy', t: "PERFECT. Ten out of ten. You're a genius. Best rival." }] }
        ] },
        { n: "When the green hour ended for good, at the end of January, Kuromi went home to Mariland with two diaries. She said she'd read the old one to Baku every night. She said he'd be very bored. She said that was fine." }
      ] },
      { ifRoute: 'romance', then: [
        { choose: [
          { t: "(Write: I like you. The real you. All of it.)", notes: 3, then: [
            { s: 'kuromi', f: 'flustered', t: '...' },
            { n: "Kuromi read it. Then she read it again. Then she grabbed the pen and wrote, underneath, in huge glittery letters: ME TOO DUMMY. And drew a heart around both lines." }
          ] },
          { t: "(Kiss her on the forehead, right on the skull.)", notes: 3, then: [
            { s: 'kuromi', f: 'surprised', t: '...!!!' },
            { s: 'kuromi', f: 'flustered', t: "...That's not the diary. That's not even CLOSE to the diary. Do it again." }
          ] }
        ] },
        { n: "She wrote in the diary every night after that, and every entry, Solar found out much later, ended the same way. A tiny skull. And a tiny heart. And a tiny sun." }
      ] }
    ] }
  ]
});
