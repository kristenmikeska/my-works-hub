/* The strangers epilogue (2/17-3/16/2013, Incheon): the girls. The Nov 6 2026 pass (Kat: "our beloved LE SSERAFIM girlies are
   appearing in every universe! YES"). Data only; loaded with the world (epilogue.js WORLDS.strangers.files). Bonds go through
   add() so they merge with people-crew.js and people-time.js in any load order.

   Hangouts
     girls    epi-s-girls-eyebrows 'white eyebrows'  2/22-2/23 evening, after epi-s-girls   (Bathhouse: the jjimjilbang on the
                                                     eve of Daeboreum; whoever sleeps gets white eyebrows)
     girls    epi-s-girls-backroom 'the back room'   2/27-3/4 evening, after epi-s-moon     (Chinatown: Auntie Wu's mahjong
                                                     room; riichi against the Chinatown rules; the house sends someone)
     chaewon  epi-s-chaewon-margin 'the margin'      3/3-3/14 after, after epi-s-moon       (Songdo · Dance Studio, stand-in)
     sakura   epi-s-sakura-kagoshima 'Kagoshima'     2/25-3/10 after, after epi-s-moon      (Songdo · Café)
     kazuha   epi-s-kazuha-morning 'good morning'    3/4-3/12 evening, after epi-s-dust     (Wolmido, in the dust)
     eunchae  epi-s-eunchae-forty 'forty'            2/26-3/9 after, after epi-s-moon       (The Lee House · Gate, by day)
   The four girls are new bonds (role 'friend'; closeness starts at 0, they aren't links in the year); the committee keeps
   its own bond ('girls') for the outings with all of them.

   Texts (R.texts; ids epi-s-tx-gc-* in the committee group, ambient epi-s-am-gc-*)
     epi-s-tx-gc-eyebrows  2/24 early   girls   flag epi-s-eyebrows-help
     epi-s-tx-gc-eyebrows2 2/24 early   girls   flag epi-s-eyebrows, noFlag epi-s-eyebrows-help
     epi-s-tx-gc-minutes   2/25 evening girls   events epi-s-moon
     epi-s-tx-gc-pyo       3/2  after   girls   events epi-s-girls (the committee hears about a birthday)
     epi-s-tx-gc-dust      3/8  early   girls   events epi-s-dust
     epi-s-am-gc-count     3/9-3/13     girls   events epi-s-moon

   Flags set (local; phone.js contact lines and the 2/24 texts read them): epi-s-eyebrows (the jjimjilbang played), epi-s-eyebrows-help (she floured Yunjin), epi-s-mahjong-won,
     epi-s-chaewon-counts, epi-s-sakura-nihongo, epi-s-kazuha-morning, epi-s-eunchae-forty.
   Flags read: none past the above. ifEpiRoute: backroom, eunchae-forty (who the house sent / who walks past).
   Glitch lines: { strain: 1 } once in eyebrows (the fever, to Kazuha) and sakura-kagoshima (where the Japanese came from);
     { near: true } once in kazuha-morning. No glitch ids.
   Bonds: one { bond } per hangout at most, inside the warmest option.

   What's already set for the girls (people-crew girls-1/-2, people-time girls-tent, phone.js) and kept: Chaewon chairs the
   committee, laminates, builds margins for the margins; Sakura deadpan, competitive, a fighting-game diamond, "respect" about
   once a month; Kazuha believes in ghosts (her grandmother: say good morning to them), cried at every recital; Eunchae notices,
   stares too long, counts Solar's sentences, stole hair ties for three years; Yunjin fell off the recital stage at fourteen.
   Sakura and Kazuha speak Japanese. Yunjin was over there too (Kat, Nov 6), so she knows where Solar's Japanese is from.

   Inventions for Kat to confirm (small)
   - The jjimjilbang is the big one on the Songdo side, lamb-towel hats, a kiln room, baked eggs and sikhye; Eunchae brings
     flour from her mother's kitchen in a film canister for the white eyebrows.
   - Auntie Wu's back room behind the Jjajangmyeon Museum (the book's) on a not-Wednesday; Sakura only plays Japanese riichi
     and Auntie Wu only plays Chinatown rules; Auntie Wu's granddaughter (the book's, "horrible") is there doing homework.
   - Chaewon has the key to their old Songdo studio from the owner (she teaches the little ones on Saturdays); the April
     piece is for four; an upright piano in the corner, out of tune on the B-flat.
   - Sakura is from Kagoshima, her mother sends satsuma-age; she keeps a handheld game in her coat; Solar's Japanese sounds
     like a girl from a school on a bay ("a Tokyo bay girl"), and Sakura can't work out how.
   - Kazuha did ballet before the studio and still does a turn on any flat floor; her grandmother in Osaka.
   - Eunchae returns the forty hair ties in a sandwich bag, one of them Solar's (from the café, that week).
*/
(() => {
  const R = ((window.FEMC_EPI_WORLDS ||= {}).strangers ||= {});
  const B = (R.bonds ||= {});
  const add = (id, role, hs) => { const b = (B[id] ||= { id, role, hangouts: [] }); (b.hangouts ||= []).push(...hs); };
  const AFTER = ['after'], EVE = ['evening'];

  /* ── The committee, all of them ── */
  add('girls', 'friend', [
    { id: 'epi-s-girls-eyebrows', title: 'white eyebrows', hint: "Chaewon has booked the whole committee into the jjimjilbang for the eve of the full moon. Nobody is allowed to sleep. It's in the plan.",
      after: '2/22', until: '2/23', slots: EVE, events: ['epi-s-girls'], noFlags: [], route: null, noRoute: null,
      place: 'Incheon · Bathhouse', time: 'Evening', scene: [
      { music: 'epi-s-yunjin' },
      { n: "The jjimjilbang on the Songdo side was five floors of heat under a sign shaped like a steaming bowl, and by eight o'clock on the eve of the first full moon half of Incheon was in it, in the same orange cotton shorts and T-shirts, lying on the heated floor of the big hall like seals on a warm rock, eating eggs." },
      { n: "Chaewon had a list. Of course she did. It was on an index card in a clear plastic sleeve, and she held it up in the changing room while everybody else was still working out how to tie the orange shorts." },
      { s: 'chaewon', f: 'serious', t: "Okay. The eve. If you sleep tonight, your eyebrows go white. My grandmother says so, and her grandmother said so, so it's true. Nobody sleeps. Kiln room at nine. Ice room at nine fifteen. Eggs throughout." },
      { s: 'sakura', f: 'neutral', t: "Daeboreum is Sunday. The eve is tomorrow, or tonight, depending who you ask." },
      { s: 'chaewon', f: 'neutral', t: "It's a two-night eve. For margin." },
      { s: 'eunchae', f: 'happy', t: "She built a margin into a folk tradition." },
      { s: 'chaewon', f: 'happy', t: "Traditions need margins more than anybody. Look how old they are." },
      { n: "Yunjin came out of a cubicle with the orange T-shirt tied in a knot at her hip and two towels already rolled into the lamb hat, the little ears on either side of her head, which she'd learned to do at six and was, she said, the only skill her father had ever successfully passed on. She made one for Solar without asking. She put it on Solar's head the way you'd crown someone." },
      { s: 'yunjin', f: 'happy', t: "There. A lamb. Look at her. Look at my lamb." },
      { s: 'kazuha', f: 'happy', t: "*Kawaii.* Solar-ssi is a sheep." },
      { s: 'sakura', f: 'neutral', t: "She looks like she's about to be sacrificed." },
      { s: 'yunjin', f: 'happy', t: "That's her resting face, Sakura. She's Catholic-adjacent." },
      { n: "Solar looked at herself in the long changing-room mirror, a girl in orange cotton with a towel lamb on her head between five other girls in orange cotton with towel lambs on their heads, Eunchae's ears wonky, Kazuha's perfect, and for a second she didn't know the girl in the middle at all, and then she did, and the strange thing was that she liked her." },

      { place: 'Incheon · Bathhouse', time: 'Evening', soft: true },
      { n: "The big hall smelled of hot wood and boiled eggs and the cinnamon drink they sold at the snack counter, and the floor was so warm you could feel it through the mat in the bones of your hips. A television on the wall played a variety show with the sound off. Children ran between the bodies. An old man slept with a newspaper over his face directly under a sign that said NO SLEEPING IN THE HALL, which in a jjimjilbang meant nothing at all." },
      { n: "They took a corner. Six mats in a row and their backs to the wall. Eunchae came back from the counter with a tray: a dozen brown baked eggs, six cans of sikhye, a bag of dried squid. The eggs had been baked in the kiln so long their shells had gone the color of tea and the whites inside were brown and chewy and they cracked them on their own foreheads, which was the rule, which was how you did it." },
      { n: "Sakura cracked hers on her forehead without flinching, like a karate demonstration. Kazuha tapped hers so gently it took four goes and she said *itai* each time anyway. Chaewon cracked hers on a schedule. Eunchae cracked hers on Yunjin's forehead, without warning, and Yunjin screamed so loud the old man under the newspaper said something rude in his sleep." },
      { choose: [
        { t: "(Crack yours on your own forehead. Properly.)", stat: { courage: 1 }, then: [
          { n: "She did it the way you were meant to, hard, once, and it hurt much more than she'd expected, and she sat there with her eyes watering and the egg cracked in a perfect star, and Sakura looked at her and nodded slowly." },
          { s: 'sakura', f: 'neutral', t: "Respect." },
          { s: 'eunchae', f: 'surprised', t: "That's the first time this month. She's said it at an egg." }
        ] },
        { t: "(Crack it on Eunchae's forehead. Fair is fair.)", stat: { charm: 1 }, then: [
          { n: "Eunchae saw it coming and didn't move. She looked Solar dead in the eye the whole way, with that stare of hers, too long and too direct, and let Solar crack the egg on her forehead, and didn't blink." },
          { s: 'eunchae', f: 'neutral', t: "I deserved that." },
          { s: 'eunchae', f: 'happy', t: "Seven sentences tonight. Eight if that counts. That was a sentence. With an egg." }
        ] }
      ] },
      { n: "They talked. That was the whole of it, really, the whole of the night, and she'd forget most of it and remember all of it: Chaewon's mother's restaurant and the cook who'd quit twice; a boy at Kazuha's language school who'd asked her out in a text written entirely in emoji and been turned down in kind; the studio teacher who'd thrown a shoe at Eunchae at eleven, not hard, as a teaching aid; the April audition, which they were all doing, together, the four of them, Chaewon said, it was on the plan, there was a column." },
      { n: "Sakura didn't say anything when Chaewon said it. She peeled her egg very carefully with her thumbnail, all in one piece, and looked at the egg." },
      { n: "Kazuha, beside her on the mat, put her head on Sakura's shoulder for a moment, the way she did things, without explaining, and took it away again." },
      { n: "Then Kazuha turned on her side on the warm floor and looked at Solar with her chin on her fist and her lamb ears drooping, that soft unfocused look of hers, the one Yunjin had warned her about at the café." },
      { s: 'kazuha', f: 'neutral', t: "Solar-ssi. Do you sleep? Normally? Yunjin says you had a fever. People with fevers sleep and sleep. You look like somebody who doesn't." },
      { choose: [
        { t: "I slept for ten days. I've used it all up.", then: [
          { s: 'kazuha', f: 'happy', t: "Ah. That makes sense. Like a bank." },
          { glitch: { strain: 1 } },
          { n: "It held. Kazuha accepted it the way she accepted everything, with that odd lovely smile, as if it were exactly what she'd expected someone to say and also not true and also all right." }
        ] },
        { t: "Not very well. Not since I was small. It's the tide.", stat: { kindness: 1 }, then: [
          { s: 'kazuha', f: 'neutral', t: "The tide?" },
          { s: 'solar', f: 'neutral', t: "When it goes out. I feel it. In my teeth. It wakes me up." },
          { n: "She'd never said that to anybody but Yunjin. She didn't know why she'd said it in a jjimjilbang in an orange T-shirt to a Japanese girl she'd met on Tuesday. Maybe because of the heat. Maybe because Kazuha asked questions the way you'd hold out your hand to a cat, palm up, not reaching." },
          { s: 'kazuha', f: 'happy', t: "My grandmother is like that with rain. She knows the day before. She says the body is older than the weather report." },
          { s: 'kazuha', f: 'happy', t: "Then tonight is easy for you, Solar-ssi. You'll win. We'll all have white eyebrows and you'll be the only one with black ones." },
          { glitch: { strain: 1 } },
          { bond: { kazuha: 1 } }
        ] }
      ] },

      { place: 'Incheon · Bathhouse', time: 'Evening', soft: true },
      { n: "The kiln room at nine was a domed brick oven you crawled into on your hands and knees through a low door, and sat inside on straw mats in the dark with a hessian sack over your head against the heat, and the heat was so complete it stopped being heat and became a kind of sound. Six sacks in a row. Nobody could see anybody. Somebody's knee against her knee. She thought, in the dark, with the sweat running into her eyes and the sack over her head, that this was what it would be like to be a loaf of bread, and that it was surprisingly all right." },
      { s: 'yunjin', f: 'neutral', t: "Wifey. You there?" },
      { s: 'solar', f: 'neutral', t: "I'm here." },
      { s: 'yunjin', f: 'neutral', t: "Good. Just checking. You go quiet in the dark. I always check." },
      { n: "She said it lightly, under the sack. Nobody else would have heard what was in it. Solar found Yunjin's hand on the straw between them in the dark and squeezed it, once, and Yunjin squeezed back, once, and that was a whole conversation, the one they'd been having since she came home, the one they'd been having since a dorm in a city by the sea that nobody else in this kiln had ever seen." },
      { n: "The ice room at nine fifteen was the opposite, a little white room at minus five with frost on the benches, and they ran into it screaming and stood in it steaming like horses and ran out again. Then the salt room, pink walls of salt bricks lit from behind. Then the hall again and more eggs and the second can of sikhye, and it was ten o'clock, and Yunjin was asleep." },
      { n: "Flat on her back on the warm floor with her lamb hat over one eye and her mouth open and both hands folded on her stomach like a saint on a tomb, out cold, the first casualty of the eve, at ten o'clock exactly, before the variety show had even finished." },
      { n: "Eunchae reached into her bag and took out a black plastic film canister. She opened it. Inside was flour." },
      { s: 'eunchae', f: 'neutral', t: "From my mother's kitchen. I've been carrying this since Tuesday." },
      { s: 'chaewon', f: 'serious', t: "That's premeditated." },
      { s: 'eunchae', f: 'happy', t: "It's in the plan, unnie. You put it in the plan. Column F. *Consequences.*" },
      { choose: [
        { t: "(Help. Do the left eyebrow yourself.)", flag: 'epi-s-eyebrows-help', stat: { charm: 1 }, then: [
          { n: "She took a pinch of the flour. Eunchae looked at her with real respect. And she leaned over her best friend asleep on the heated floor of a Songdo jjimjilbang and laid the flour along Yunjin's left eyebrow, very carefully, the way you'd lay a fillet on a board, while Sakura did the right one with her tongue between her teeth and Kazuha held the phone up for the photograph and Chaewon kept watch for staff." },
          { n: "Yunjin slept through all of it. She had two perfect white eyebrows and looked like a very old, very surprised woman, and the whole committee lay on the floor around her shaking with silent laughter until the old man under the newspaper told them, without moving, to be quiet, girls, he was sleeping." },
          { bond: { girls: 1 } }
        ] },
        { t: "(Defend her. Nobody touches Yunjin's eyebrows.)", stat: { kindness: 1 }, then: [
          { n: "She put her hand over Yunjin's face. Flat. Over both eyebrows, the way Yunjin had once put a hand over her mouth in the dark so she wouldn't spill." },
          { s: 'solar', f: 'serious', t: "No." },
          { s: 'eunchae', f: 'surprised', t: "Solar-ssi." },
          { s: 'solar', f: 'happy', t: "She stood guard over me for ten days. I'll do one night." },
          { n: "Eunchae looked at her for a long time with the film canister in her hand. Then she put the lid back on it, slowly, the way you'd sheathe a weapon, and nodded, and the committee settled down around the sleeping girl on the floor like dogs round a fire, and nobody touched her, and Yunjin slept with Solar's hand over her eyebrows until half past ten, smiling slightly, as if she knew." },
          { bond: { girls: 1 } }
        ] }
      ] },
      { n: "At half past ten Mr. Oh was in the car park with the engine running, because the plan said home by eleven and her mother's plan said home by half past, and her mother's plans had no margins." },
      { n: "She went to change. She came back for her bag. And at the door of the hall, as she turned to wave, Eunchae was standing just inside it with her hands behind her back and an expression of perfect innocence." },
      { s: 'eunchae', f: 'neutral', t: "Bye, Solar-ssi. Sleep well. Or don't. Ha." },
      { n: "In the car, under the streetlamps on the Songdo road, Mr. Oh drove at exactly the speed limit with his hands at ten and two and didn't look at her, which he never did, until the lights at the bridge, when he glanced across once and then looked straight ahead again for a very long time, and his mouth did something it almost never did." },
      { s: 'mroh', f: 'neutral', t: "Your eyebrows." },
      { n: "She looked in the visor mirror. They were white. Both of them. Laid on perfectly, flour from Eunchae's mother's kitchen, at the door, in the second she'd turned to wave, and she hadn't felt a thing." },
      { s: 'solar', f: 'surprised', t: "I didn't even sleep." },
      { s: 'mroh', f: 'neutral', t: "No." },
      { n: "He drove. At the next light he took a barley candy out of the glove compartment and put it in her hand without a word, the way he had when she was seven and stopped crying, and she sat in the passenger seat with white eyebrows and a barley candy and laughed so hard she couldn't unwrap it, and Mr. Oh, very slightly, at ten and two, shook." },
      { flag: 'epi-s-eyebrows' }
    ] },

    { id: 'epi-s-girls-backroom', title: 'the back room', hint: "Yunjin owes Auntie Wu forty-two thousand won and wants it back. The committee is coming to Chinatown. Sakura has rules.",
      after: '2/27', until: '3/4', slots: EVE, events: ['epi-s-moon'], noFlags: [], route: null, noRoute: null,
      place: 'Incheon · Chinatown', time: 'Evening', scene: [
      { music: 'epi-s-yunjin' },
      { n: "Up the red steps in the dark, past the lanterns, round behind the Jjajangmyeon Museum where the alley smelled of fried onions and the drains, to a green door with no sign that you only knew was a door because Yunjin knocked on it, three and then one." },
      { n: "Auntie Wu's back room was the size of Solar's bathroom and had a mahjong table in it that was older than the building, and a radiator that worked too well, and a calendar from a bank that had closed in 2004, and a television in the corner playing a Taiwanese drama with the sound on, and Auntie Wu herself in a purple fleece with a cigarette she wasn't smoking, behind a wall of tiles, waiting." },
      { s: 'wu', f: 'neutral', t: "*Huh girl. You've come back to lose more money. And you've brought children.*" },
      { s: 'yunjin', f: 'happy', t: "*I came back to WIN money, Auntie. Forty-two thousand. With interest.*" },
      { s: 'wu', f: 'happy', t: "*Interest. Listen to her. Sit down.*" },
      { n: "Yunjin's Mandarin was terrible and confident, which in Chinatown was respected. Solar's was good and quiet, which was trusted. Between the two of them they got the committee through the door, and sat, and Auntie Wu looked them over, the four studio girls in their coats in a row against the wall like a choir, and said something to Solar out of the side of her mouth." },
      { s: 'wu', f: 'neutral', t: "*The tall one plays. I can see it. Look at her hands. She's going to be trouble.*" },
      { n: "The tall one was Sakura. She'd already taken her coat off and was looking at the tiles on the table the way she'd looked at the fighting cabinet in the arcade, which was the way a cat looks at a bird feeder." },
      { s: 'sakura', f: 'neutral', t: "Riichi?" },
      { s: 'solar', f: 'neutral', t: "*She's asking if you play Japanese rules, Auntie.*" },
      { s: 'wu', f: 'serious', t: "*Japanese rules. In my room. Tell her this is Chinatown. Tell her we play the way my mother played, and her mother, and if she wants to call riichi she can go to Japan and call it there.*" },
      { s: 'solar', f: 'happy', t: "She says she'd be delighted to teach you her rules, Sakura." },
      { n: "So there was a negotiation. It took twenty minutes and went through Solar both ways, Mandarin to Korean to Sakura and Sakura's Korean back to Mandarin, with Kazuha supplying the Japanese names of things to nobody, softly, *pon, chi, kan,* like a girl naming birds, and Chaewon writing the agreed rules down on a napkin in a column, and Eunchae watching Auntie Wu's granddaughter, who was fourteen and doing her maths homework at a card table in the corner, watching them back." },
      { n: "The granddaughter was, Yunjin had told her in the alley, horrible. She looked up from her homework at the five girls in coats and her grandmother and Sakura and said something in Mandarin, very fast, to the room in general, and went back to her maths." },
      { s: 'eunchae', f: 'neutral', t: "What did she say?" },
      { s: 'solar', f: 'happy', t: "That the tall one's going to cry." },
      { s: 'eunchae', f: 'happy', t: "I love her." },

      { ifEpiRoute: 'haechan', then: [
        { n: "The house had sent someone. Of course it had. Haechan was in the corner by the radiator on a stool that was too small for him, with his jacket off and his sleeves pushed up and a deck of hwatu cards, losing at Go-Stop to Auntie Wu's granddaughter for a hundred won a point, loudly, on purpose, and then, about twenty minutes in, not on purpose." },
        { s: 'haechan', f: 'surprised', t: "She's cheating. Agasshi. Tell her she's cheating. How do you say cheating." },
        { s: 'solar', f: 'happy', t: "She knows you know. That's the point." },
        { n: "He looked at the fourteen-year-old with real respect, and paid her, and dealt again, and Solar, with her back to him at the mahjong table, felt him watching the back of her neck, where her hair was up, the whole evening, like the warmth off the radiator." }
      ], else: [
        { ifEpiRoute: 'jungwon', then: [
          { n: "The house had sent someone. Jungwon was standing by the door in his dark coat, because there wasn't room to stand anywhere else, perfectly still, looking at the mahjong table the way he looked at a baduk board, which was to say he'd counted every tile on it within a minute and could tell you who was going to win." },
          { n: "Auntie Wu looked at him. She looked at him for a long time. Then she said to Solar, in Mandarin, out of the side of her mouth, that this was the Yang boy, she'd heard, and that he had good bones and no smell, which was unnatural, and that he should sit down because he was making the room nervous." },
          { s: 'jungwon', f: 'happy', t: "*Thank you, Auntie. I'll stand. I'm very nervous myself.*" },
          { n: "He said it in Mandarin. Good Mandarin, better than hers, the accent clean. Auntie Wu's cigarette fell out of her mouth onto the tiles, and she picked it up, and looked at him again, and something in the purple fleece changed its mind about the Yang house completely." }
        ], else: [
          { n: "The house had sent Minseok. He was in the alley, outside the green door, in his coat, on an upturned crate, with the sports pages, and every so often Auntie Wu's granddaughter took him a cup of tea without being asked, and he said thank you to her very gravely, which she seemed to find unbearable." }
        ] }
      ] },

      { n: "Then they played." },
      { n: "It was the noisiest thing she'd done since she came home. The tiles going round in the wash with a sound like a beach, everybody's hands in it, Auntie Wu building her wall faster than a machine, the drama on the television reaching some crisis involving a long-lost twin, Yunjin calling everything she picked up out loud by its wrong name in triumph, Kazuha apologizing to every tile she discarded, Chaewon checking the napkin, Sakura absolutely silent, absolutely still, winning." },
      { n: "Sakura won the first hand. And the second. Auntie Wu looked at her across the table with narrowed eyes, the way she'd look at a fishmonger who'd got the weight right, and won the third, with a hand so beautiful that Sakura, after a long pause, said something under her breath in Japanese and bowed to it across the tiles." },
      { s: 'kazuha', f: 'happy', t: "She said it was a very elegant hand. And then she said a bad word." },
      { s: 'wu', f: 'happy', t: "*Tell the tall one I know the bad word. Tell her my husband was in Osaka in 1971.*" },
      { n: "On the fourth hand, Solar was dealt in for Eunchae, who'd gone to watch the drama with the granddaughter and was now, apparently, best friends with her. She looked at her tiles. She knew how to count. She'd always known how to count. She didn't know what to do with any of it." },
      { choose: [
        { t: "(Play it the way Auntie Song plays: slowly, and say nothing.)", flag: 'epi-s-mahjong-won', stat: { knowledge: 1 }, then: [
          { n: "She played slowly. She'd watched Auntie Song play at the Haesong prep table on a hundred slow Mondays, with the cleaver put down very straight beside her, and she did it the way Auntie Song did it, which was to keep everything, and discard what nobody wanted, and not look up." },
          { n: "On the fourteenth tile she looked down and her hand was finished. She didn't know it was finished. Auntie Wu did. Auntie Wu leaned over and looked at her tiles and sat back and looked at her, and took the cigarette out of her mouth, and said a single word." },
          { s: 'wu', f: 'surprised', t: "*Song Meilan.*" },
          { s: 'solar', f: 'happy', t: "*She taught me to gut a fish. Not this.*" },
          { s: 'wu', f: 'neutral', t: "*It's the same thing. Huh girl, she's taking your money for you. Look.*" },
          { n: "Yunjin got her forty-two thousand back. Not all of it. Thirty-one. She held it up to the light like Mrs. Gong holding a walnut and kissed it, and Auntie Wu said that was the last time anybody in that house sat down at her table, and poured everybody a tiny cup of tea that tasted of smoke, and refilled Solar's first." },
          { bond: { girls: 1 } }
        ] },
        { t: "(Lose on purpose to Sakura. She needs this more than you do.)", stat: { kindness: 1 }, then: [
          { n: "She'd seen it in the jjimjilbang, or at the café, or in the way Sakura peeled an egg: there was something Sakura was carrying that she didn't want to put down in front of anybody. Solar didn't know what it was. She knew the weight of a thing by how carefully it was carried." },
          { n: "So she discarded the tile Sakura needed. Not obviously. Just a little slower than she should have, so it looked like a mistake." },
          { n: "Sakura looked at it on the table. She looked at Solar. Something went across her face very fast, the way the walnut sound goes, and she took the tile and laid her hand down, and won, and didn't say anything at all, and on the way out in the alley, while everyone else was arguing about the drama's twin, she walked beside Solar for a few meters without speaking." },
          { s: 'sakura', f: 'neutral', t: "You threw that." },
          { s: 'solar', f: 'neutral', t: "I don't know what you mean." },
          { s: 'sakura', f: 'neutral', t: "Hm. Don't do it again. It's insulting." },
          { s: 'sakura', f: 'happy', t: "...Thank you." },
          { bond: { sakura: 1 } }
        ] }
      ] },
      { n: "They came out into Chinatown at ten with their coats over their arms because of Auntie Wu's radiator, steaming in the cold, into the red light of the lanterns on the wet steps, six girls talking at once, and the street was empty and the restaurants were putting their chairs up and somewhere a radio was playing a Chinese pop song from the nineties, and Kazuha did a turn on the bottom step, a real one, a ballet turn, on the wet stone, in her boots, and didn't fall, and everyone clapped." },
      { n: "Solar stood at the top of the steps for a second before she went down to them. The lanterns. The girls' breath going up white. Somebody from the house waiting at the bottom. Her money in somebody else's pocket and her hands smelling of tiles. She put it away carefully, the whole picture, somewhere she could find it again, the way you fold a good letter, and went down." }
    ] }
  ]);

  /* ── Chaewon ── */
  add('chaewon', 'friend', [
    { id: 'epi-s-chaewon-margin', title: 'the margin', hint: "Chaewon has the key to the old studio, an empty afternoon, and a piece for April. She needs someone who can count. And there's a piano.",
      after: '3/3', until: '3/14', slots: AFTER, events: ['epi-s-moon'], noFlags: [], route: null, noRoute: null,
      place: 'Incheon · Songdo · Dance Studio', time: 'Daytime', scene: [
      { music: 'epi-s-yunjin' },
      { n: "The old studio was on the third floor of a building in Songdo that had been new when they were children and was now just a building, above a bakery and a mobile phone shop, with a stairwell that smelled of bread and floor polish and the old studio's name still on the glass of the door in peeling gold letters, and Chaewon had the key on a ribbon round her wrist." },
      { s: 'chaewon', f: 'neutral', t: "The owner gave it to me. I teach the little ones on Saturdays. Six-year-olds. They're terrifying. One of them bit me in January." },
      { s: 'solar', f: 'happy', t: "On purpose?" },
      { s: 'chaewon', f: 'serious', t: "With intent. Which is worse." },
      { n: "It was a long room with a wall of mirrors and a barre along the other wall and a sprung wooden floor gone pale in the middle where twenty years of feet had worn it, and grey afternoon light from a row of windows over the street, and in the corner, under a dust sheet, an upright piano. Chaewon took the dust sheet off it the way you'd unveil something at a ceremony." },
      { s: 'chaewon', f: 'neutral', t: "Yunjin says you play. Properly. Since you were five." },
      { s: 'solar', f: 'neutral', t: "Since I was six. And not properly. I play like somebody's daughter." },
      { s: 'chaewon', f: 'happy', t: "That's fine. I dance like somebody's daughter. Can you count?" },
      { n: "It was the first time anybody had asked her that as if it were a skill. She sat down on the piano stool. It was too low. She played a scale. The B-flat was out, badly, the kind of out that made your teeth hurt, and she played the scale again and went round it, the way you'd step over a stair." },
      { n: "Chaewon had a cassette player on the floor, and a notebook, and a piece. The April piece, for four, she said, for the audition the four of them were doing, two minutes and forty seconds, and she'd been building it in her head since Christmas and on this floor since Seollal, alone, on Saturday afternoons after the six-year-olds had gone home. She put the tape in. She stood in the middle of the pale place in the floor." },
      { s: 'chaewon', f: 'serious', t: "I need someone to count out loud while I do it. The tape's no good. The tape doesn't tell me when I'm late. Count eights. Loud. Don't be nice." },
      { s: 'solar', f: 'neutral', t: "I'm never nice when I count." },
      { s: 'chaewon', f: 'happy', t: "Yunjin said that too." },
      { n: "So she counted. Out loud, in the empty studio, *five six seven eight* over the tape, and Chaewon danced, and it was not like watching somebody's daughter at all." },
      { n: "She danced like someone carrying four people. That was the only way Solar could put it to herself. Every move had room in it for somebody else. There were gaps in it where three other girls would go, and Chaewon danced round the gaps as if they were already full, her hand going out to a shoulder that wasn't there, turning to meet someone who wasn't turning, holding a formation of one in an empty room so precisely that Solar could almost see the other three in the mirror, Sakura sharp on the left and Kazuha soft on the right and Eunchae a half-count behind on purpose." },
      { n: "On the second time through, at the bridge, Chaewon was late. A quarter beat. Solar called it. Chaewon stopped dead in the middle of the floor and stood there breathing, and looked at the empty space beside her in the mirror where somebody was meant to be." },
      { s: 'chaewon', f: 'serious', t: "Again." },
      { n: "Late again. Same place. A quarter beat. The place where her hand went out to somebody's shoulder, on the left, and there was nobody, and her hand waited for them, and that was where the quarter beat went, every time, into waiting." },
      { choose: [
        { t: "You're waiting for someone there. On the left.", flag: 'epi-s-chaewon-counts', stat: { knowledge: 1 }, then: [
          { n: "Chaewon didn't turn round. She looked at herself in the mirror, at her hand out to the left, at the space." },
          { s: 'chaewon', f: 'neutral', t: "That's Sakura's place." },
          { n: "She lowered the hand." },
          { s: 'chaewon', f: 'sad', t: "I keep building it so there's a gap if somebody goes. If one of us goes first. Someone always goes first, Solar-ssi. Since we were nine. Somebody gets called back and somebody doesn't, and somebody has to be the one who plans for it, and that's me, it's always been me, it's in the plan." },
          { s: 'chaewon', f: 'sad', t: "I just want it to be on the plan. That's all. I just want to have a column for it before it happens, so it doesn't happen to me in the middle of the floor." },
          { n: "Solar didn't say anything for a moment. She sat at the piano with her hands in her lap and looked at the girl in the middle of the pale place in the floor, who'd laminated a mask schedule and built a margin into a folk tradition, and understood for the first time that all of it, the spreadsheets, the columns, the margins for the margins, was a girl standing with her hand out to a shoulder that might not be there." },
          { s: 'solar', f: 'neutral', t: "Then take your hand back on the seven. Not the eight. If she's there, she'll catch it. If she's not, you won't be late." },
          { n: "Chaewon looked at her in the mirror. Then she nodded, once, and went back to her mark, and Solar counted, and on the seven Chaewon's hand went out to the left and came back, clean, on time, and if there'd been somebody there they'd have caught it, and there wasn't, and she wasn't late." },
          { n: "She did the whole two minutes forty without a mistake, and at the end she stood in the middle of the floor with her hands on her knees, breathing, and then she laughed, and then, for no reason, a tear went down the side of her nose, and she wiped it with the back of her wrist, very efficiently." },
          { s: 'chaewon', f: 'happy', t: "Don't tell anyone. Not Yunjin. That's not in the minutes." },
          { bond: { chaewon: 1 } }
        ] },
        { t: "(Just count. Louder. Don't be nice.)", stat: { courage: 1 }, then: [
          { n: "She didn't say anything about the gap. It wasn't hers to say. She just counted, louder, harder, the way you'd shout across a quay in wind, and called the quarter beat every time, *late,* flat, no apology, and Chaewon went again, and again, and on the sixth time through she was on it, and on the seventh she was early, and swore." },
          { s: 'chaewon', f: 'happy', t: "You really aren't nice when you count." },
          { s: 'solar', f: 'happy', t: "I told you." },
          { s: 'chaewon', f: 'neutral', t: "No. It's good. Everybody's nice to me. Everybody's always very nice to the one with the clipboard." }
        ] }
      ] },
      { n: "Afterwards they sat on the floor with their backs against the mirror and ate two of the bakery's red bean buns out of a paper bag, and Chaewon asked if she'd play something. Not for the piece. Just something." },
      { n: "So she sat at the out-of-tune piano in an empty dance studio over a bakery in Songdo and played the easy Clementi, the sheltered daughter's piece, the one she'd played behind a closed door in a quiet house a thousand times, and went round the B-flat every time it came, and Chaewon lay on her back on the sprung floor with her arms out and her eyes shut and listened, and outside the windows it began, very lightly, to rain." },
      { n: "When it finished Chaewon didn't open her eyes." },
      { s: 'chaewon', f: 'neutral', t: "You play like you're counting, too." },
      { s: 'solar', f: 'neutral', t: "I always am." },
      { s: 'chaewon', f: 'happy', t: "Me too. Isn't it exhausting." },
      { n: "It wasn't a question. Solar didn't answer it. She played it again instead, the whole thing, slower, and this time didn't go round the B-flat, let it ring out wrong and ugly and true in the empty room, and Chaewon laughed on the floor with her eyes shut, and didn't write anything down." }
    ] }
  ]);

  /* ── Sakura ── */
  add('sakura', 'friend', [
    { id: 'epi-s-sakura-kagoshima', title: 'Kagoshima', hint: "Sakura is at the café by the window with a handheld game and a box her mother sent. She says she isn't waiting for anyone. She's saved you a seat.",
      after: '2/25', until: '3/10', slots: AFTER, events: ['epi-s-moon'], noFlags: [], route: null, noRoute: null,
      place: 'Incheon · Songdo · Café', time: 'Daytime', scene: [
      { music: 'epi-s-yunjin' },
      { n: "The café with too many plants. The window seat. Sakura was in it with her knees up and a handheld game held very close to her face, the little tinny music coming out of it, and on the table in front of her a cardboard box with Japanese writing on the side and the tape cut, and a second chair pulled out, empty, angled toward the window, with nobody's coat on it." },
      { s: 'sakura', f: 'neutral', t: "I'm not waiting for anyone." },
      { s: 'solar', f: 'happy', t: "I can see that." },
      { s: 'sakura', f: 'neutral', t: "Sit down. You're blocking the light." },
      { n: "She sat. Sakura didn't look up from the game. On its little screen two figures were hitting each other very fast. Sakura's thumbs were moving faster than Solar's eyes, and her face was entirely calm, the way a pianist's face is calm in the hard part." },
      { n: "The box was open. Inside it, in plastic, packed round with newspaper in Japanese, were flat golden fried fish cakes, a dozen of them, and a bag of brown sugar in lumps, and a jar of something black, and a letter in an envelope with a cartoon cat on it that hadn't been opened." },
      { s: 'sakura', f: 'neutral', t: "My mother. Every month. Satsuma-age. Kagoshima fish cakes. She thinks Korea doesn't have fish cakes. Korea is made of fish cakes." },
      { s: 'sakura', f: 'neutral', t: "Have one. If I eat all twelve I'll cry, and I'm not doing that here, there's a barista who went to your school." },
      { n: "Solar took one. It was cold and sweet and full of little bits of carrot and burdock and it tasted, absurdly, of a convenience store on a corner by a station, a white-lit shelf of oden steaming in a tray at eleven at night with the monorail going over, a place she had stood a hundred times in a life nobody in this café could see." },
      { n: "She put it down. Her hand had stopped on its own." },
      { s: 'solar', f: 'neutral', t: "*Oishii. Okaasan, sugoi ne.*" },
      { n: "She'd said it before she'd decided to. In Japanese. Not the Japanese of a girl who'd had a tutor, which was the Japanese her mother had paid for. The other one. Quick, a little lazy, the vowels squashed, the way girls talked on a monorail on the way to a school on an island in a bay." },
      { n: "Sakura's thumbs stopped. On the little screen her character got hit seven times in a row and fell over, and the tinny music played a sad little phrase, and Sakura didn't look at it. She was looking at Solar, finally, over the top of the game, with her mouth slightly open." },
      { s: 'sakura', f: 'surprised', t: "*Eh? Nani sore.*" },
      { s: 'sakura', f: 'surprised', t: "Where did you get that? That accent. You sound like a high-school girl from Tokyo. From the bay. From one of those schools with the uniforms with the—" },
      { n: "She moved her hand at her own arm, at the upper arm, where an armband would go, and stopped, puzzled, as if she didn't know why she'd done it." },
      { s: 'sakura', f: 'neutral', t: "You told Yunjin you had a tutor. A tutor doesn't sound like that. A tutor sounds like a textbook. You sound like you skipped class to buy fish cakes." },
      { choose: [
        { t: "A tutor, and a lot of television. Dramas. I watched too many.", then: [
          { s: 'sakura', f: 'neutral', t: "Hm." },
          { glitch: { strain: 1 } },
          { n: "Sakura looked at her for a long moment over the handheld. She didn't believe it. Solar watched her not believe it, and decide that it wasn't her business, and put it away somewhere for later, the way she'd watched a hundred people in her father's house put a thing away. Then Sakura looked down at the screen, where her character was still lying on the floor, and pressed a button, and it got up." },
          { s: 'sakura', f: 'neutral', t: "Must have been very good television." }
        ] },
        { t: "*I lived there for a while. A year. Nobody knows. Yunjin knows.*", flag: 'epi-s-sakura-nihongo', stat: { courage: 1 }, then: [
          { n: "She said it in Japanese. The bay Japanese, low. Not the whole of it; nobody would ever get the whole of it; but more than she'd said to anybody in this city but two boys and the girl next door." },
          { n: "Sakura put the handheld face down on the table." },
          { s: 'sakura', f: 'neutral', t: "*When?*" },
          { s: 'solar', f: 'neutral', t: "*It's complicated.*" },
          { s: 'sakura', f: 'neutral', t: "*That's not a when.*" },
          { s: 'solar', f: 'sad', t: "*I know.*" },
          { glitch: { strain: 1 } },
          { n: "Sakura looked at her. A long look, the arcade look, the one that said the person across from her had become, without permission, real. Then she nodded, once, the way she nodded at a fighting-game opponent who'd done something she'd have to think about later." },
          { s: 'sakura', f: 'neutral', t: "*Okay. Then it's complicated.*" },
          { s: 'sakura', f: 'neutral', t: "*I won't ask again. But if you want to talk like that, sometimes. Like a girl skipping class. I'm here. Nobody here talks like that. I miss it so much I could scream.*" },
          { bond: { sakura: 1 } }
        ] }
      ] },
      { n: "They ate four fish cakes each. Sakura talked, which she never did, in Japanese, low and fast so the barista from Solar's old school wouldn't follow it: about Kagoshima, the volcano across the bay that dropped ash on her mother's washing so that her mother had a special umbrella just for hanging out the sheets; about the sweet potatoes; about her little brother, who was good at baseball and bad at everything else and wrote her letters with drawings of the cat; about the first winter in Incheon, at fifteen, when she'd thought the cold here was a personal attack." },
      { n: "She didn't talk about April. She didn't talk about the studio, or the audition, or the four of them. Solar noticed, the way you notice a missing stair. She didn't ask." },
      { n: "At the end Sakura picked up the envelope with the cartoon cat on it, and turned it over, and didn't open it, and put it in the inside pocket of her coat, against her chest." },
      { s: 'sakura', f: 'neutral', t: "I'll read it at home. If I read it here I'll cry, and that barista will tell your whole school." },
      { s: 'solar', f: 'happy', t: "My whole school doesn't care." },
      { s: 'sakura', f: 'happy', t: "Your whole school will care when I cry. I cry very loudly. It's my only weakness." },
      { n: "She picked up the handheld. She held it out across the table to Solar, the game paused, a little fighter in a nice coat waiting on the screen." },
      { s: 'sakura', f: 'neutral', t: "One round. You pick the one in the coat. You always pick the one in the coat." },
      { s: 'solar', f: 'happy', t: "I'll hold block the whole time." },
      { s: 'sakura', f: 'happy', t: "I know. I'm counting on it." },
      { n: "It took nine seconds. Sakura won. Then she put the box of fish cakes, what was left of it, four of them in their plastic, into Solar's hands, and said they were for the girl next door, the loud one, and her mother, the quiet one, and anybody else in that house who might want to know what Kagoshima tasted like, and that it wasn't a big deal, and that respect, and pulled her knees up in the window seat and went back to her game, and didn't look up again until Solar was out of the door, and then did, through the glass, with the little screen lighting her chin, and lifted one hand off the buttons, and put it back." }
    ] }
  ]);

  /* ── Kazuha ── */
  add('kazuha', 'friend', [
    { id: 'epi-s-kazuha-morning', title: 'good morning', hint: "Kazuha is on the Wolmido promenade in the dust, in the evening, saying good morning to things. She says you should come and say it too.",
      after: '3/4', until: '3/12', slots: EVE, events: ['epi-s-dust'], noFlags: [], route: null, noRoute: null,
      place: 'Incheon · Wolmido', time: 'Evening', scene: [
      { music: 'epi-s-dust' },
      { n: "The dust had come in over the sea and the whole of Wolmido had gone the color of an old photograph, the shuttered rides along the promenade standing up out of it like the bones of something, the Viking ship frozen at the top of its swing, the lamps on with their dirty halos, and the water beyond the railing not there at all, only a sound, and a smell, salt and iron and something burnt from very far away." },
      { n: "Kazuha was at the railing in a white mask and a long cream coat, so pale against the yellow that from the far end of the promenade she looked like a lamp herself. She was talking to the sea. Quietly. Solar couldn't hear what." },
      { s: 'kazuha', f: 'happy', t: "Solar-ssi! You came. Good evening. I was saying good morning." },
      { s: 'solar', f: 'neutral', t: "It's seven o'clock at night." },
      { s: 'kazuha', f: 'happy', t: "My grandmother says it doesn't matter to them. It's always morning somewhere for somebody. And it's rude to say good evening to a ghost. It sounds like you want them to go to bed." },
      { n: "She said it in Korean that was very careful and slightly too formal, the way you speak a language you've loved more than you've used. Then she turned back to the railing and said, in Japanese, very gently, to the yellow nothing where the sea was, *ohayou gozaimasu,* and bowed, a small one, from the neck." },
      { s: 'kazuha', f: 'neutral', t: "There are a lot here. On the water. Fishermen, mostly. And a girl. I don't know about the girl." },
      { n: "Solar stood very still at the railing beside her. It was what she did. Kazuha didn't seem to need her to do anything else. She hooked her arm through Solar's, lightly, coat to coat, the way she'd put her head on Sakura's shoulder in the jjimjilbang, without explaining, and they stood and looked at the sea they couldn't see." },
      { s: 'kazuha', f: 'neutral', t: "Do you think I'm strange? Sakura says I'm strange. Sakura says it nicely. Eunchae says it with a spreadsheet." },
      { choose: [
        { t: "I think you see things other people walk past.", stat: { kindness: 1 }, then: [
          { s: 'kazuha', f: 'happy', t: "That's a nice way to say strange." },
          { s: 'solar', f: 'neutral', t: "It's the true way." },
          { n: "Kazuha looked at her over the mask. Her eyes did the thing a smile does when the mouth is covered, and she squeezed Solar's arm, once." }
        ] },
        { t: "Yes. Very. Do you mind?", stat: { charm: 1 }, then: [
          { s: 'kazuha', f: 'happy', t: "No. My grandmother is the strangest woman in Osaka. They wrote about her in the newspaper once. For a vegetable." },
          { s: 'solar', f: 'surprised', t: "For a vegetable?" },
          { s: 'kazuha', f: 'happy', t: "A radish. It looked like the emperor. It's a long story. She still has it, in a jar." }
        ] }
      ] },
      { n: "Then Kazuha let go of her arm and stepped out into the middle of the empty promenade, where the paving was flat and wet and yellow under the lamps, and took her coat off, and laid it over the railing, and stood in the dust in a black jumper and her boots with her arms down." },
      { s: 'kazuha', f: 'neutral', t: "I did ballet before the studio. Eleven years. Then I stopped, because my feet hurt and I wanted to dance with people. But I still do this on any floor that's flat enough. I can't help it. Don't watch." },
      { n: "Solar watched. Kazuha rose on to the balls of her feet in her boots on the wet stone and went round, once, twice, three times, a turn so clean in the yellow light that the dust seemed to go round with her, and came down, and stood, and put her arms out to the side, and held it." },
      { n: "And held it." },
      { n: "She was looking past Solar. Over her shoulder. The soft unfocused look, the one from the arcade, the one Yunjin had told her to leave alone." },
      { glitch: { near: true } },
      { s: 'kazuha', f: 'neutral', t: "I had a dream about you." },
      { n: "Solar didn't turn round. She knew better than to turn round." },
      { s: 'kazuha', f: 'neutral', t: "Last week. You were in a uniform. A school one, a dark one, with a red ribbon. And a band on your arm. And you were standing on a bridge, at night, and it was green. The whole sky. And there were people behind you, the tired ones, the ones I said. And you weren't frightened. That was the thing. In the dream you weren't frightened at all. You looked like you knew exactly where you were going." },
      { s: 'kazuha', f: 'neutral', t: "That's all. It's just a dream. I have a lot of them. Sakura says I should write them down and sell them." },
      { n: "She lowered her arms. The turn was over. She came back to the railing and took her coat and put it on and did up the buttons one by one, ordinary, a girl in a coat on a seafront in the dust." },
      { choose: [
        { t: "Was I alone? On the bridge?", flag: 'epi-s-kazuha-morning', stat: { courage: 1 }, then: [
          { n: "Kazuha thought about it. She really thought about it, with her head on one side, the way she'd thought about the tiles in Auntie Wu's back room before she apologized to them." },
          { s: 'kazuha', f: 'happy', t: "No. There were two boys. One on each side. Arguing. I couldn't hear about what. One of them kept looking at his watch and one of them kept looking at the other one." },
          { s: 'kazuha', f: 'happy', t: "Is that anybody?" },
          { s: 'solar', f: 'happy', t: "...It's a lot of people." },
          { s: 'kazuha', f: 'happy', t: "Hm. In the dream I thought they were very silly. And I thought they'd both have died for you. And that they'd both have been annoyed about it." },
          { n: "Solar laughed. It came up out of her in the yellow dark like something let out of a box, and she put her hand over her mask, and Kazuha laughed too, softly, pleased, as if she'd got a joke right in a second language." },
          { bond: { kazuha: 1 } }
        ] },
        { t: "(Say good morning to them. Whoever they are.)", stat: { kindness: 1 }, then: [
          { n: "She turned to the railing. To the sea she couldn't see. To the fishermen, mostly, and a girl, and whoever else was out there in the dust, the tired ones, walking a long way to get somewhere." },
          { s: 'solar', f: 'neutral', t: "*Ohayou gozaimasu.*" },
          { n: "She said it in the bay Japanese without meaning to. She bowed, a small one, from the neck. And the dust moved over the water in front of her the way dust does, which was all it was, which was nothing, and Kazuha beside her said nothing at all, for once, and took her arm again." },
          { s: 'kazuha', f: 'happy', t: "Good. Now they know you're polite." }
        ] }
      ] },
      { n: "They walked the length of the promenade arm in arm in the dust to where Mr. Oh's car was waiting with its lights on at the end, past the shuttered rides and the stopped Viking ship and a cart selling fish-cake broth in paper cups to nobody. Kazuha bought two. They drank them standing up, masks pulled down under their chins, the steam going up yellow." },
      { s: 'kazuha', f: 'neutral', t: "Solar-ssi. If you go somewhere. Like the dream. Will you say goodbye? Not to me. To Yunjin. She's very brave and she's very loud and she would die if you didn't." },
      { n: "Solar looked into her paper cup. The broth. A slice of radish going round in it. She didn't say anything for a while, and Kazuha didn't push, and the dust went on moving over the dark." },
      { s: 'solar', f: 'neutral', t: "I'll try." },
      { s: 'kazuha', f: 'happy', t: "That's the true way to say yes." },
      { n: "At the car Kazuha bowed to Mr. Oh, who looked at her as if she were a small weather event, and said good morning to him, and Mr. Oh, after a long moment, said good morning back." }
    ] }
  ]);

  /* ── Eunchae ── */
  add('eunchae', 'friend', [
    { id: 'epi-s-eunchae-forty', title: 'forty', hint: "There's a girl at the Lee house gate with a sandwich bag of hair ties, and Minseok doesn't know what to do with her.",
      after: '2/26', until: '3/9', slots: AFTER, events: ['epi-s-moon'], noFlags: [], route: null, noRoute: null,
      place: 'Incheon · The Lee House · Gate', time: 'Daytime', scene: [
      { music: 'epi-s-yunjin' },
      { n: "Minseok came up to the kitchen door from the gatehouse in the middle of the afternoon with his coat on and the expression of a man who has been trained for a great many things and not for this, and said, to Mrs. Bang, that there was a girl at the gate." },
      { s: 'minseok', f: 'neutral', t: "She says she's here to return some property. She won't say what. She says it's a matter between her and the young miss. She's been there twenty minutes. She's counting the bars." },
      { s: 'mrsbang', f: 'neutral', t: "Counting the bars?" },
      { s: 'minseok', f: 'neutral', t: "Of the gate. Out loud. She's on her third time. She says there are twenty, but one's hidden." },
      { n: "It was Eunchae. Of course it was. Standing on the Lee family's road in a puffer jacket two sizes too big and a woollen hat with a pompom, with her nose red and a clear plastic sandwich bag held up in front of her like evidence, and when she saw Solar coming down the steps she didn't wave. She nodded. A small, satisfied nod, the nod of somebody whose data had arrived." },
      { s: 'eunchae', f: 'neutral', t: "Twenty. One's behind the lamp post. Your security man didn't know that." },
      { s: 'solar', f: 'happy', t: "He knows. He's being polite." },
      { s: 'eunchae', f: 'neutral', t: "That's worse." },
      { n: "She held up the bag. Inside it, in a tangle, were hair ties. Dozens of them. Black ones and brown ones and a glittery pink one and one with a plastic strawberry on it and a fabric one with a pattern of little ducks, all colors, all ages, some of them stretched to nothing, a whole archaeology of hair ties in a sandwich bag." },
      { s: 'eunchae', f: 'neutral', t: "Forty. I counted. Three years at the studio. I'm returning them. Everyone's getting theirs back. I'm doing it in person. It's the honorable thing." },
      { s: 'solar', f: 'surprised', t: "Why?" },
      { s: 'eunchae', f: 'serious', t: "April. If I go into an audition with forty stolen hair ties on my conscience, I'll fall over. It's karma. Kazuha says it's karma. Chaewon says it's not karma, it's just good practice. Either way." },
      { n: "She opened the bag and went through it with her mittens off, very fast, sorting, and took out one. A plain black one, thin, the elastic still good. She held it up." },
      { s: 'eunchae', f: 'neutral', t: "This one's yours." },
      { s: 'solar', f: 'neutral', t: "I was never at your studio." },
      { s: 'eunchae', f: 'happy', t: "The café. Tuesday. You took it out to redo your hair and put it on the table and looked at the door. You looked at the door for forty seconds. I took it. I've had it a week. I'm a professional." },
      { n: "Solar looked at the hair tie in Eunchae's fingers. She had no memory of taking it out. She remembered the door. She'd been watching the door the whole time. She always watched the door." },
      { n: "She held out her hand. Eunchae put the hair tie in her palm, across the old white scar, very precisely, and closed Solar's fingers over it with her own cold ones, and held them closed for a second." },
      { s: 'eunchae', f: 'neutral', t: "There. Clean." },
      { n: "Then she looked past Solar, up the steps, at the house. All of it, with that stare of hers, too long and too direct: the front door, the windows, the onggi jars along the side path, the garden going down in its terraces to the annex, the koi bucket on the back step, which you could just see from the gate if you knew to look, which Eunchae, apparently, did." },
      { s: 'eunchae', f: 'neutral', t: "Is that a bucket of fish?" },
      { s: 'solar', f: 'happy', t: "It's Yunjin's. They're called Mr. and Mrs. Kim." },
      { s: 'eunchae', f: 'surprised', t: "Can I see them?" },
      { choose: [
        { t: "(Open the gate. Take her down to see the koi.)", flag: 'epi-s-eunchae-forty', stat: { kindness: 1 }, then: [
          { n: "Minseok looked at her when she opened the gate. She looked back. He looked at the sandwich bag, and at Eunchae, and at the young miss of the house letting a girl in a pompom hat in at the front gate to see a bucket, and decided, visibly, that this was above his pay grade, and went back into the gatehouse." },
          { n: "They went round by the side path. Eunchae counted the onggi jars out loud as they went. Eleven. She counted the terraces. Four. She counted the steps down to the back door and stopped on the last one in front of the koi bucket and crouched down in her too-big puffer and looked in." },
          { n: "Mr. and Mrs. Kim came up. Orange and white, slow, mouths going, the way they did for anybody who looked down at them long enough. Eunchae looked down at them a very long time." },
          { s: 'eunchae', f: 'neutral', t: "They've been in a bucket for three months." },
          { s: 'solar', f: 'neutral', t: "Since December." },
          { s: 'eunchae', f: 'neutral', t: "They don't look sad. They look like they're waiting. Like at a bus stop. Like they know it's coming." },
          { n: "Then the back door opened, and Mrs. Bang was in it, with her arms folded, looking down at a strange girl in a pompom hat crouched in front of her koi, and Eunchae stood up very fast, and bowed, very low, too low, the way you'd bow to a headmistress." },
          { s: 'eunchae', f: 'flustered', t: "Hello. I'm Eunchae. I'm returning property." },
          { s: 'mrsbang', f: 'neutral', t: "Hm. Have you eaten?" },
          { n: "It was the most dangerous question in the house. Eunchae didn't know that. She said no, honestly, because she hadn't, and ten minutes later she was at the end of the long table in the kitchen with a bowl of Mrs. Bang's soybean paste soup and a fried egg with the edges gone to lace and Auntie Song standing over her in rubber boots saying something in Mandarin about how thin she was, and Pyo staring at her from the sink with a spoon in his hand as if she were a third ghost, and Eunchae was looking round the kitchen with her eyes going everywhere, counting, counting, completely happy." },
          { bond: { eunchae: 1 } }
        ] },
        { t: "(They're having a nap. Next time.)", stat: { charm: 1 }, then: [
          { s: 'eunchae', f: 'neutral', t: "Koi don't nap." },
          { s: 'solar', f: 'happy', t: "These ones do. They're very old money." },
          { s: 'eunchae', f: 'happy', t: "Hm. That was a joke. You made a joke. That's eleven sentences and one joke. I'm writing that down." },
          { n: "She did. In a little notebook from her pocket, in pencil, with her mittens in her teeth. Solar watched her do it, and understood, quite suddenly, that the counting wasn't a joke at all, or not only, that somewhere in that notebook there was a page with her name at the top and a column of numbers going slowly up, week by week, the way you'd keep a chart of somebody getting better." }
        ] }
      ] },
      { ifEpiRoute: 'haechan', then: [
        { n: "When she walked Eunchae back to the gate, Haechan was coming up from the annex with the Rexton's keys, chewing, and stopped on the path and looked at the girl in the pompom hat, and the girl in the pompom hat looked at him, the long look, all the way up and all the way down." },
        { s: 'eunchae', f: 'neutral', t: "You're the one in the black jacket. From the moon. You looked at her nine times while the lanterns went up. I counted." },
        { n: "Haechan's gum stopped. He looked at Solar. He looked at Eunchae. He opened his mouth, and for the first time in her life Solar watched him fail to think of anything to say at all." },
        { s: 'haechan', f: 'flustered', t: "...It was eight." },
        { s: 'eunchae', f: 'happy', t: "Nine. One was in the reflection. In the water. You thought nobody saw." }
      ], else: [
        { ifEpiRoute: 'jungwon', then: [
          { n: "When she walked Eunchae back to the gate, the long black car was pulling up below it, and Jungwon got out of the back in his dark coat, and bowed to Solar, and then, after a fractional pause, to the girl in the pompom hat holding a sandwich bag of hair ties." },
          { s: 'eunchae', f: 'neutral', t: "You're the one with the watch. From the moon. You looked at it six times and at her eleven. I counted." },
          { n: "Jungwon's face did nothing at all. Then it went still. The rare stillness, the pleased one, the one she'd learned to read backwards, and she'd never once in her life seen anybody but herself put it there." },
          { s: 'jungwon', f: 'neutral', t: "Twelve. You missed one. I was facing away." },
          { s: 'eunchae', f: 'surprised', t: "...Respect." }
        ], else: [
          { n: "When she walked Eunchae back to the gate, Minseok came out of the gatehouse and held it open for her, very formally, and Eunchae bowed to him and told him there were twenty bars and one was behind the lamp post, and Minseok said, gravely, that he knew, and Eunchae said she knew he knew, and that he was being polite, and that it was worse, and Minseok laughed out loud, which Solar had heard him do perhaps three times in her life." }
        ] }
      ] },
      { n: "Then Eunchae went off down the hill in her too-big puffer with the sandwich bag of thirty-nine hair ties swinging from her wrist, to give them back to their owners one by one, in person, like a postman of small crimes, and Solar stood at the gate with one plain black hair tie in her fist and watched her go, and put it, when she'd gone round the corner, round her wrist, where she could feel it." }
    ] }
  ]);

  // ───────────────────────────── the committee's texts ─────────────────────────────
  const T = (R.texts ||= {});
  const LEAVE = (then = []) => ({ t: '(Leave it on read.)', silent: true, then });
  (T.texts ||= []).push(
    { id: 'epi-s-tx-gc-eyebrows', thread: 'girls', date: '2/24', slot: 'early', flag: 'epi-s-eyebrows-help', events: ['epi-s-girls'], msgs: [
      { from: 'eunchae', t: "eyebrow check. everyone post eyebrows" },
      { from: 'yunjin', t: "[photo: a girl asleep on a heated floor with two white eyebrows]" },
      { from: 'yunjin', t: "WHO DID THIS" },
      { from: 'chaewon', t: "it was in the plan yunjin. column F" },
      { from: 'kazuha', t: "happy daeboreum ☺ everyone is safe from boils now" },
      { from: 'sakura', t: "i didn't sleep. my eyebrows are fine. i'm also dead" }
    ], reply: [
      { t: "happy daeboreum. my eyebrows are black, for the record", then: [{ from: 'eunchae', t: "are they" }, { from: 'eunchae', t: "check again" }] },
      { t: "yunjin you look like a grandmother", then: [{ from: 'yunjin', t: "a BEAUTIFUL grandmother" }, { from: 'yunjin', t: "ill remember this wifey" }] },
      LEAVE([{ from: 'eunchae', t: "read at 06:12. she was awake. confirmed eyebrows" }])
    ] },
    { id: 'epi-s-tx-gc-eyebrows2', thread: 'girls', date: '2/24', slot: 'early', flag: 'epi-s-eyebrows', noFlag: 'epi-s-eyebrows-help', events: ['epi-s-girls'], msgs: [
      { from: 'eunchae', t: "eyebrow check. everyone post eyebrows" },
      { from: 'yunjin', t: "mine are BLACK. i slept like a baby and my eyebrows are BLACK" },
      { from: 'yunjin', t: "because someone guarded them. with her bare hand. for half an hour. like a knight" },
      { from: 'eunchae', t: "the knight's eyebrows weren't black when she left though" },
      { from: 'chaewon', t: "the committee notes the knight was got at the door" },
      { from: 'kazuha', t: "happy daeboreum ☺ everyone is safe from boils now" }
    ], reply: [
      { t: "i didn't even feel it", then: [{ from: 'eunchae', t: "i'm a professional" }, { from: 'yunjin', t: "she is. its terrifying" }] },
      { t: "mr. oh laughed", then: [{ from: 'yunjin', t: "MR OH LAUGHED??" }, { from: 'yunjin', t: "eunchae ur getting a medal" }] },
      LEAVE([{ from: 'eunchae', t: "read at 06:12. awake. eyebrows unconfirmed" }])
    ] },
    { id: 'epi-s-tx-gc-minutes', thread: 'girls', date: '2/25', slot: 'evening', events: ['epi-s-moon'], msgs: [
      { from: 'chaewon', t: "minutes of the daeboreum committee, sunday" },
      { from: 'chaewon', t: "1. moon: viewed. 2. wishes: burned (6/6). 3. yunjin: on time (first in recorded history)" },
      { from: 'chaewon', t: "4. any other business: none" },
      { from: 'eunchae', t: "any other business: the two boys" },
      { from: 'chaewon', t: "that's not committee business eunchae" },
      { from: 'eunchae', t: "it's EVERYONE'S business" }
    ], reply: [
      { t: "the committee is very thorough", then: [{ from: 'chaewon', t: "the committee is permanent" }, { from: 'kazuha', t: "the committee is family ☺" }] },
      { t: "what two boys", then: [{ from: 'eunchae', t: "she's doing it again" }, { from: 'sakura', t: "respect" }, { from: 'eunchae', t: "SAKURA" }] },
      LEAVE()
    ] },
    { id: 'epi-s-tx-gc-pyo', thread: 'girls', date: '3/2', slot: 'after', events: ['epi-s-girls'], msgs: [
      { from: 'yunjin', t: "emergency committee meeting. a cook in our house turns 20 tonight. he is scared of a storeroom. go" },
      { from: 'kazuha', t: "happy birthday to the cook ☺ tell him the storeroom ghost is probably polite" },
      { from: 'chaewon', t: "i'm adding him to the birthday column" },
      { from: 'sakura', t: "there's a birthday column?" },
      { from: 'chaewon', t: "there's always been a birthday column sakura" },
      { from: 'eunchae', t: "send a voice message. all of us. at 8. i'll conduct" }
    ], reply: [
      { t: "he'll die. do it", then: [{ from: 'eunchae', t: "8pm. sharp. kazuha harmonize" }, { from: 'kazuha', t: "☺☺☺" }] },
      { t: "he's very shy", then: [{ from: 'eunchae', t: "then we'll sing quietly" }, { from: 'eunchae', t: "no we won't" }] },
      LEAVE([{ from: 'eunchae', t: "8pm. sharp. it's happening" }])
    ] },
    { id: 'epi-s-tx-gc-dust', thread: 'girls', date: '3/8', slot: 'early', events: ['epi-s-dust'], msgs: [
      { from: 'kazuha', t: "good morning to the dust ☺" },
      { from: 'sakura', t: "don't say good morning to the dust. it'll stay" },
      { from: 'chaewon', t: "pm10 is 190 today. masks. all day. that's not a suggestion it's a minute" },
      { from: 'eunchae', t: "solar has said 31 sentences in this chat since tuesday last week. new record. averaging 4.4 a day" }
    ], reply: [
      { t: "good morning. masks on", then: [{ from: 'eunchae', t: "32" }] },
      { t: "eunchae please stop counting", then: [{ from: 'eunchae', t: "32 and 33" }, { from: 'eunchae', t: "no" }] },
      LEAVE([{ from: 'eunchae', t: "still 31. noted" }])
    ] }
  );
  (T.ambient ||= []).push(
    { id: 'epi-s-am-gc-count', thread: 'girls', from: '3/9', to: '3/13', events: ['epi-s-moon'], msgs: [
      { from: 'sakura', t: "[photo: a handheld game screen, a fighter in a coat lying on the floor]" },
      { from: 'sakura', t: "solar picked the one in the coat again" },
      { from: 'kazuha', t: "she always picks the one in the coat ☺" },
      { from: 'yunjin', t: "she picks the one in the coat IRL too. two of them actually" },
      { from: 'chaewon', t: "yunjin" },
      { from: 'yunjin', t: "what. it's a fashion observation" }
    ], reply: [
      { t: "it's a nice coat", then: [{ from: 'sakura', t: "it's a terrible coat. it has no frame data" }] },
      { t: "yunjin i'm coming over the wall", then: [{ from: 'yunjin', t: "the wall is mine. i live on this side of it. i'm not scared" }, { from: 'yunjin', t: "i'm a little scared" }] },
      LEAVE()
    ] }
  );
})();
