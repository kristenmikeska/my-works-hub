/* Haru Okumura · Empress. Revamp social link data (femc-game.html). Format: link fields in assets/femc/game/core.js, scene lines in scene.js.
   Friendship link (v1's romance is cut). Persona-world cast (kind 'persona', Kat's ruling 2026-10-20): a third-year from
   Tokyo staying at a hotel here this year on her father's arrangements, a guest at Gekkoukan; Tokyo is a train ride away.
   No `closes`. Rank 4 holds the fragment strangers-jade-ring. Cast-only speaker: custodian (no portrait). afterMax: 2
   scenes after rank 10. Holidays and reactive texts: data/living-persona.js. */
(window.FEMC_GAME_LINKS ||= []).push({
  id: 'haru', name: 'Haru Okumura', short: 'Haru', arcana: 'Empress', numeral: 'III', from: 'Persona 5',
  kind: 'persona',
  romance: null,
  starts: '5/7',
  home: { area: 'Gekkoukan High', spot: 'Rooftop Garden', slot: 'after', days: [1, 3, 5],
          hint: 'After school on Mondays, Wednesdays and Fridays, in the planters along the Gekkoukan roof.' },
  approach: "Someone has brought the dead planters along the Gekkoukan roof back to life, and she's kneeling among them now with a trowel, a thermos and a sunhat the wind keeps trying to steal.",
  cast: { custodian: 'Custodian' },
  invite: {
    ask: [
      "Good afternoon! The radishes are up to something. I thought you'd want to know. 🌱 Are you free?",
      "I have a thermos, two cups, and only one of me. Would you come up to the roof?",
      "Are you busy? I've roasted something new and I need an honest tongue. Fufu.",
      "The basil would like a second opinion. So would I.",
      "It's such a lovely afternoon. It seems wasteful to spend it alone. Are you free? 🌷",
      "I bought a new trowel and I would very much like someone to admire it."
    ],
    ok: ["Wonderful! I'll pour yours now so it's ready.", "Oh, I'm so glad. I'll save you the good cup. 🌸", "Lovely! Come up whenever you're ready."],
    no: ["Next time, then! 🌸", "Of course. The plants and I will manage. Fufu.", "That's quite all right! Another day."]
  },
  hangouts: [
    [
      { n: "Haru had set out three paper cups on the edge of a planter, each one numbered underneath in pencil, and three small mounds of coffee beans beside them like a magician's shells, and she would not say which was which, because, she said, sweetly, that would ruin the science." },
      { s: 'haru', f: 'serious', t: "Taste each one, and tell me which you'd want on a Monday. Only on a Monday. Mondays are very particular." },
      { choose: [
        { t: "(Taste all three, slowly, and pick the middle one.)", notes: 3, then: [
          { s: 'haru', f: 'surprised', t: "The middle one? Oh. Oh, that's the one I almost threw out." },
          { s: 'haru', f: 'happy', t: "I'm keeping it. I'm naming it after you. It's going to be a very serious coffee now." }
        ] },
        { t: "They all taste like coffee.", notes: 1, then: [
          { s: 'haru', f: 'happy', t: "Fufu. That's what my father says. And then he drinks whichever one is most expensive." }
        ] },
        { t: "The first one. It tastes like toast.", notes: 2, then: [
          { s: 'haru', f: 'happy', t: "It does! Nobody ever notices the toast. You have a very good tongue, Solar-chan." }
        ] }
      ] },
      { n: "The wind came off the bay and rattled the fence, and the little sheet of plastic over the seedlings snapped and settled, and they drank the rest of the experiment sitting on the warm concrete with their backs to the planters, which Haru declared was also part of the science." }
    ],
    [
      { n: "The pigeons had found the seedlings. Haru had responded to this the way some generals respond to a declaration of war, which was to say very calmly, with a broom, a coat hanger, an old Gekkoukan blazer from the lost-and-found and an expression of total serenity." },
      { s: 'haru', f: 'happy', t: "He needs a face. Would you like to give him a face?" },
      { choose: [
        { t: "(Draw him a very stern face.)", notes: 3, then: [
          { n: "Solar drew him the sternest face she could manage on a paper plate, eyebrows down, mouth a flat line, and Haru held it up next to the broom and looked at it for a long moment, and then at Solar, and then started laughing so hard she had to sit down in the dirt." },
          { s: 'haru', f: 'happy', t: "He looks like a vice principal. Oh, the pigeons are going to be so sorry." }
        ] },
        { t: "(Draw him a smile.)", notes: 2, then: [
          { s: 'haru', f: 'happy', t: "A friendly scarecrow. How modern. I suppose he'll ask them to leave politely." }
        ] },
        { t: "Pigeons aren't scared of anything.", notes: 1, then: [
          { s: 'haru', f: 'neutral', t: "Then they'll learn. Everyone learns, eventually." },
          { n: "She said it with a smile so gentle it took Solar a second to hear the rest of it." }
        ] }
      ] },
      { n: "They staked him at the end of the south planter with his blazer buttoned and his sleeves flapping, and the next afternoon there wasn't a pigeon on the whole roof, and Haru said good afternoon to him every day after that, like a colleague." }
    ],
    [
      { n: "Haru had come up the stairs with a bucket held out in front of her in both hands, carefully, the way people carry soup or babies, and set it down by the planters with a little sigh of accomplishment, and lifted the lid. It was compost, black and steaming faintly in the air, and it was moving." },
      { s: 'haru', f: 'happy', t: "Worms! From the cafeteria scraps. The kitchen ladies have been saving their peelings for me. They think I keep rabbits. I haven't corrected them." },
      { n: "She knelt and worked a handful into the nearest bed with her bare fingers, explaining as she went, in the warm, unhurried tone of a teacher on the first day of term, that worms were the most underrated employees on any farm, that they worked every hour of the day without complaint, and that each of them deserved a name, which was why she'd brought a notebook." },
      { s: 'haru', f: 'serious', t: "That one is Okamoto. He's my best worker. He has been with the company since Tuesday." },
      { s: 'haru', f: 'happy', t: "Now you. This one hasn't got a name yet. He looks a little lost." },
      { choose: [
        { t: "(Name the smallest one something enormous.)", notes: 3, then: [
          { n: "Solar looked at the worm, which was about the length of a fingernail and visibly trying to get back into the dark, and named him the Grand Duke of the South Planter, and Haru wrote the whole thing down in her notebook in full, with a little crown drawn next to it, and then had to put the notebook down because she was laughing too hard to hold the pen." },
          { s: 'haru', f: 'happy', t: "He's going to be insufferable now. Oh, you've ruined him." }
        ] },
        { t: "(Name one after Junpei.)", notes: 2, then: [
          { s: 'haru', f: 'happy', t: "Fufu. He does have a certain look about him. Always in the middle of something, never quite sure what." }
        ] },
        { t: "I'm not touching that.", notes: 1, then: [
          { s: 'haru', f: 'neutral', t: "You needn't touch him. You only need to respect him." },
          { n: "She said it very gravely, holding the worm up in the light between two fingers like a jeweller with a stone, and Solar found that she did, a little, against her will." }
        ] }
      ] },
      { n: "They worked the bucket through all four beds while the sky went pale over the bay. By the end Solar had dirt under every nail and a list of eleven worms she was apparently now responsible for, and Haru said the soil would be twice as good by summer, and said it the way some people talk about a bank account, quietly and with enormous satisfaction, as if she'd invested in something nobody else had noticed was for sale." }
    ]
  ],
  ranks: [
    { after: '5/7', title: '1: thirsty', place: 'Gekkoukan High · Rooftop Garden', time: 'After School', scene: [
      { music: 'sun' },
      { n: "The roof was the only place at Gekkoukan where the wind could get a proper run at you, and on the Thursday after Golden Week it was making the most of it, coming in off the bay smelling of salt and warm concrete and flapping the loose pages of somebody's abandoned homework against the fence. Solar had come up mostly to stand in it alone for ten minutes, and to not be anyone in particular while she did." },
      { n: "She wasn't alone. Along the south fence, where she'd half-noticed a row of cracked planters full of dust and dead stalks the week before, somebody was kneeling in the dirt." },
      { n: "The planters weren't dead anymore, which was the first thing. Somebody had broken up the soil and turned it dark and wet, and small green things were standing up in neat rows, with a sheet of clear plastic pegged over one end against the wind and little wooden tags with names on them in round, careful handwriting. The second thing was the girl, who had soft brown hair curling at the ends under a wide sunhat the wind kept trying to take, and dirt to the wrists, and who was speaking to a seedling in a low, encouraging voice, the way you'd talk to someone nervous before an interview." },
      { s: 'haru', f: 'happy', t: "There. You see? You were only thirsty. Everyone gets a little dramatic when they're thirsty." },
      { n: "Then she looked up and saw Solar, and didn't startle at all, which was its own kind of surprising. She only smiled, warm and immediate, as if Solar were someone she'd been expecting and was glad had finally arrived." },
      { s: 'haru', f: 'happy', t: "Oh, hello! I'm sorry, did you need this side of the roof? I've been spreading out terribly." },
      { choose: [
        { t: "You did all this?", notes: 3, then: [
          { s: 'haru', f: 'blushing', t: "...It isn't much yet. They were so dry when I found them. I couldn't just walk past." },
          { s: 'haru', f: 'happy', t: "Would you like to see? This row is radishes. They're impatient, so they'll come up first. These are tomatoes. They're shy." }
        ] },
        { t: "Who were you talking to?", notes: 2, then: [
          { s: 'haru', f: 'happy', t: "The tomatoes. Well. The tomatoes they're going to be, if I can convince them." },
          { s: 'haru', f: 'neutral', t: "People think it's silly. But plants do better when someone pays attention to them. I don't think that's only true of plants." }
        ] },
        { t: "Isn't that a lot of work, for a roof?", notes: 1, then: [
          { s: 'haru', f: 'neutral', t: "It is. That's rather the point." }
        ] }
      ] },
      { s: 'haru', f: 'happy', t: "I'm Haru Okumura. Third year. And you are...?" },
      { s: 'solar', f: 'neutral', t: "Solar." },
      { s: 'haru', f: 'happy', t: "Solar-chan. What a warm name. It suits a roof." },
      { register: 'haru' },
      { n: "She had a thermos tucked against the planter, a heavy steel one, and she poured something into its lid and held it out without asking whether Solar wanted it, which was apparently how Haru did things. It was coffee, dark and smooth and so good it made Solar stop with the cup halfway down." },
      { s: 'haru', f: 'happy', t: "I roast the beans myself. My father's company sells coffee by the ton, you know, and I promise you mine is better. Please don't tell him. Fufu." },
      { n: "There was a sack of soil by the door, the big kind, twenty kilos, with the corner already slit, and when Haru had finished explaining the tomatoes she went and stood over it and pushed up her sleeves." },
      { choose: [
        { t: "(Let her carry it.)", notes: 3, then: [
          { n: "Solar let her. Haru got the sack up onto her shoulder in one smooth, determined motion, carried it the length of the fence without a sound, set it down at the far planter and dusted off her hands, and only then turned around, a little pink and very pleased." },
          { s: 'haru', f: 'happy', t: "Thank you for not helping. People always want to help. It's very kind, and it's very tiring." }
        ] },
        { t: "(Take the other end anyway.)", notes: 2, then: [
          { s: 'haru', f: 'surprised', t: "...Oh. Well. If you insist." },
          { n: "She let Solar take the other end, and didn't let go of her own, and they carried it between them like a rolled carpet, and Solar had the distinct impression she was being permitted something." }
        ] },
        { t: "That's too heavy for you.", notes: 1, then: [
          { s: 'haru', f: 'happy', t: "Is it?" },
          { n: "Haru picked it up. It wasn't." }
        ] }
      ] },
      { n: "When the last bell went below them the wind dropped, the way it sometimes did in the evening, all at once, as if somebody had shut a window. Solar went down the stairs with soil on her shoes and the taste of very good coffee in her mouth, and a thought she put away for later, which was that she had just watched someone very gentle carry something very heavy without letting anyone see what it cost." }
    ] },

    { after: '5/18', title: '2: bitter', place: 'Gekkoukan High · Rooftop Garden', time: 'After School', scene: [
      { music: 'tender' },
      { n: "Midterms arrived the way weather does, all at once and from every direction, and the whole of Gekkoukan went gray and quiet and slightly green around the mouth. Junpei had started sleeping with his textbook over his face, as if it might soak in. Solar had started coming up to the roof after the exams let out, because nobody studied on the roof, and because Haru was always there." },
      { n: "The sky was low and white and close, the kind of overcast that pressed down on everything and made the city sound very far away. Haru had found a second folding chair from somewhere and set it beside hers among the planters, and a second cup, and she didn't ask whether Solar wanted coffee. She only poured." },
      { s: 'haru', f: 'happy', t: "This one is a dark roast. For concentration. It's very bitter, so you'll have to be brave." },
      { choose: [
        { t: "(Drink it without making a face.)", notes: 3, then: [
          { n: "Solar drank it. It was bitter, enormously bitter, a dark cathedral of a coffee with something like chocolate hiding somewhere at the back of it, and she kept her face perfectly still all the way through, which she was very good at, and Haru watched her do it and laughed out loud, surprised and delighted." },
          { s: 'haru', f: 'happy', t: "Oh, you're good. You're very good. Most people make a face. My father makes a face, and he's in the business." }
        ] },
        { t: "Is there sugar?", notes: 2, then: [
          { s: 'haru', f: 'happy', t: "There is. I brought it in a little jar, because I knew. Fufu. Nobody is brave during exams." }
        ] },
        { t: "I'm not really a coffee person.", notes: 1, then: [
          { s: 'haru', f: 'surprised', t: "Oh!" },
          { s: 'haru', f: 'neutral', t: "Then I'll bring you something else tomorrow. I'm afraid I'll keep trying until something works. It's a flaw." }
        ] }
      ] },
      { n: "They worked for a while in a quiet that felt like a blanket, Solar's history notes weighed down against the wind with a trowel, Haru pinching the side shoots off the tomatoes one by one with her fingernails. Then Haru's phone buzzed in her apron pocket." },
      { n: "She looked at the screen, and something in her face closed, gently, the way a shop pulls its shutter down at the end of the day, and she let it ring until it stopped." },
      { s: 'haru', f: 'neutral', t: "My father's secretary. He'll call again in ten minutes. He always calls exactly twice." },
      { s: 'solar', f: 'neutral', t: "You're not going to answer?" },
      { s: 'haru', f: 'neutral', t: "I'll answer the second one. He only wants to remind me about a dinner on Sunday. There's someone my father would very much like me to get along with." },
      { n: "She said it pleasantly, the way you'd mention a chance of rain. Her hands, Solar noticed, had gone to the nearest planter and were pressing the soil down firmly around a seedling that had already been pressed down." },
      { choose: [
        { t: "Do you want to get along with him?", notes: 3, then: [
          { s: 'haru', f: 'surprised', t: "..." },
          { s: 'haru', f: 'neutral', t: "Nobody has asked me that. I'm not sure I've asked me." },
          { s: 'haru', f: 'happy', t: "I'll be very polite. I'm always very polite." },
          { n: "It was the most polite thing Solar had ever heard, and there was something under it, the way there's a root under a pavement, patient and in no hurry, that was going to lift the whole slab one day if nobody moved it first." }
        ] },
        { t: "That sounds like a lot of pressure.", notes: 2, then: [
          { s: 'haru', f: 'happy', t: "It's only dinner. Tomatoes are pressure. Dinner is just dinner." }
        ] },
        { t: "So don't go.", notes: 1, then: [
          { s: 'haru', f: 'sad', t: "...I could not go. That's the frightening part, isn't it? I could, and I won't." }
        ] }
      ] },
      { n: "Ten minutes later, exactly, the phone buzzed again. Haru wiped her fingers on her apron and answered it on the second ring." },
      { s: 'haru', f: 'happy', t: "Yes. Of course. Seven o'clock. Please tell him I'm very much looking forward to it." },
      { n: "Her voice was perfectly sweet the whole way through, sweet as the sugar she'd brought in the little jar, and when she hung up she put the phone face down on the planter's edge and turned to Solar with exactly the same smile, as though nothing at all had happened." },
      { s: 'haru', f: 'happy', t: "Now. Your history notes. I think you've got the Meiji Restoration upside down." },
      { n: "She was right. She went through it with Solar line by line until the light started going, and Solar let her, and drank the rest of the bitter coffee to have something to do with the tight feeling under her ribs, which she decided was the coffee." }
    ] },

    { after: '5/29', title: '3: twenty days', place: 'Gekkoukan High · Shoe Lockers', time: 'After School', scene: [
      { music: 'school' },
      { n: "The midterm rankings had been up on the board outside the staff room since Monday, and by Friday the crowd in front of them had thinned to a couple of second-years still taking pictures of their own names. Solar had done well, better than she had any right to, given that she couldn't remember being taught most of it. She'd looked for Haru's name on the list too, without quite deciding to, to see whether the dark roast had worked on her as well." },
      { n: "It wasn't there. That meant nothing; the board only showed the top of the year. So at lunch, with a paper packet of seeds in her pocket that she'd bought at the flower stall in Paulownia as a thank-you, she went down to the third-year shoe lockers to leave it in Haru's." },
      { n: "Every locker had a name card in a little metal slot. Solar went down the row where an O should have been. Ogawa. Ohara. Okada. Ono. She went back to the start and did it again, slower, and then she did the next class, and the next, and then, because she was already being strange about it, she went up to the staff room and read the homeroom lists pinned beside the door, all six third-year classes, every name, with her finger." },
      { n: "There was no Okumura. There was no Haru." },
      { n: "Her own name was on the list for her homeroom, written in by hand at the bottom after everybody else's, with a blank where the surname should have been. Solar, of all people, knew that a school's paperwork could be wrong about who was in it. She put the seeds back in her pocket and went up to the roof." },
      { place: 'Gekkoukan High · Rooftop Garden', time: 'After School' },
      { n: "It was warm and muggy, the air thick enough to lean on, the bay a flat white glare past the fence. The radishes had come up. Haru was kneeling at the end of the row pulling the first ones, tiny and round and shockingly red, and she held one up to Solar with dirt on her fingers as though she were presenting a jewel." },
      { s: 'haru', f: 'happy', t: "Twenty days! They're called twenty-day radishes, and they kept their word. Isn't that wonderful? Hardly anything keeps its word that precisely." },
      { choose: [
        { t: "(Give her the seeds.)", notes: 3, stat: { kindness: 1 }, then: [
          { s: 'haru', f: 'surprised', t: "For me?" },
          { n: "She turned the packet over and read the back, and her whole face changed." },
          { s: 'haru', f: 'blushing', t: "Sunflowers. Oh, Solar-chan. They'll be taller than the fence by August. Wherever will I put them?" },
          { n: "She was already looking along the fence, deciding." }
        ] },
        { t: "Haru, what class are you in?", notes: 2, then: [
          { n: "Haru looked at her for a moment, not startled, only considering, the way she looked at a seedling when she was deciding whether it needed moving." },
          { s: 'haru', f: 'happy', t: "I'm afraid I'm not in class very often. There are arrangements. My father is very good at arrangements." },
          { n: "Then she handed Solar a radish and asked if she had ever eaten one straight out of the ground, and the question was put away so gently that Solar didn't notice she'd been steered until she was halfway through it." }
        ] },
        { t: "I looked for you on the class lists.", notes: 1, then: [
          { s: 'haru', f: 'sad', t: "Did you? That's very sweet of you." },
          { s: 'haru', f: 'happy', t: "I've never been much of a list person. Here. Taste." }
        ] }
      ] },
      { n: "They sat on the warm concrete with a twist of salt in a napkin between them and ate radishes until their mouths stung. Haru told her, in passing, as if it were part of the weather report, that Sunday's dinner had gone very well." },
      { s: 'haru', f: 'happy', t: "He's very fond of steak. He told me so for most of an hour. So I've decided I'm going to grow him the most beautiful vegetables anyone has ever seen, and he's going to hate every single one." },
      { choose: [
        { t: "Grow him a radish the size of his head.", notes: 3, then: [
          { s: 'haru', f: 'happy', t: "Fufu. Don't tempt me. I know exactly which variety." }
        ] },
        { t: "(Salt her next radish for her.)", notes: 2, then: [
          { n: "Solar salted it and handed it over, and Haru took it with a small, formal nod, like a duchess accepting a petition, and ate it in one bite." }
        ] },
        { t: "Why go at all?", notes: 1, then: [
          { s: 'haru', f: 'neutral', t: "Because I said I would. I always do what I said I would, Solar-chan." },
          { s: 'haru', f: 'neutral', t: "It's the only thing about me that's entirely mine." }
        ] }
      ] },
      { n: "The afternoon went slowly orange over the bay. The question of the lists sat in Solar's pocket where the seeds had been, small and folded, and she didn't take it out again. Haru was right there in the dirt beside her, laughing with salt on her fingers, more real than any piece of paper pinned beside a door, and Solar decided that was enough to be going on with. She'd think about the rest of it tomorrow." }
    ] },

    { after: '6/10', title: '4: not too tight', place: 'Gekkoukan High · Rooftop Garden', time: 'After School', scene: [
      { music: 'tender' },
      { n: "The rainy season came the way Haru had said it would, politely, with a week of heavy white skies by way of warning, and then all at once and without apology. Gekkoukan smelled of wet umbrellas and floor polish. The roof door had swollen in its frame and had to be shouldered open." },
      { n: "Haru had built a city of umbrellas. There were seven of them, in seven colors, opened and wedged into the planters at angles over the tomatoes and tied down with string to the fence, and under them the vines had grown so tall and green and frantic in the wet that they were leaning on each other like a crowd at a festival. Haru herself was in a yellow raincoat with the hood up, kneeling between the rows with a spool of red garden twine held in her teeth." },
      { s: 'haru', f: 'happy', t: "Solar-chan! You came up in the rain. Fufu. This is how I find out who my real friends are." },
      { s: 'haru', f: 'happy', t: "The umbrellas were all in the lost-and-found. I asked the office very nicely if I might borrow them, and they said some of them had been there since last year, and I said, then they've been lost long enough." },
      { choose: [
        { t: "(Hold an umbrella over her instead.)", notes: 3, stat: { kindness: 1 }, then: [
          { n: "Solar took the plain black one off the end of the row, the one nobody had ever come back for, and held it over Haru's hood, and the rain changed its sound overhead from a hiss to a drum." },
          { s: 'haru', f: 'surprised', t: "Oh!" },
          { s: 'haru', f: 'happy', t: "Now I'm a tomato. How lovely. Nobody's ever staked me before." }
        ] },
        { t: "Seven umbrellas is a lot of umbrellas.", notes: 2, then: [
          { s: 'haru', f: 'happy', t: "It's a lot of tomatoes. I did the arithmetic. Seven was the smallest number I could live with." }
        ] },
        { t: "You're soaked, Haru.", notes: 1, then: [
          { s: 'haru', f: 'neutral', t: "So are they. It seemed only fair." }
        ] }
      ] },
      { n: "The vines needed staking before the next wind, she explained, or they'd lie down in the mud under their own weight and stay there. She showed Solar how, a loop around the stake and a loop around the stem and a twist between them like a figure eight, so the plant could lean against the stake without the stake ever closing on it." },
      { s: 'haru', f: 'serious', t: "Not too tight. That's the only rule. If it's too tight the stem can't grow, and it strangles itself trying. Too loose and the first storm takes it." },
      { n: "They worked down the row side by side with the rain loud on the umbrellas and the twine going slick and dark in their fingers. Solar's first one was too tight. Haru undid it without comment and let her do it again. Her fourth was perfect, and Haru said so, briskly, like a foreman, and went on to the next stake." },
      { n: "When Haru leaned across the planter to reach the far side, the collar of her raincoat fell open, and something swung out of the neck of her blouse on a thin gold chain and knocked against the concrete edge with a small, hard click. A ring. A big square stone that caught what light there was and did something expensive with it, set high in white gold, the kind of ring that looked like it had a price tag on it somewhere even when it didn't. Haru caught it in her palm without looking, the practiced way you catch a thing you're used to catching, and tucked it back under her blouse, and went on tying." },
      { choose: [
        { t: "Is that from him?", notes: 3, then: [
          { s: 'haru', f: 'neutral', t: "From his family. It was his grandmother's. It's been in a safe for fifty years, and now it's in my blouse. I'm told that's a promotion." },
          { s: 'haru', f: 'neutral', t: "My father gave it to me at the dinner. In a little velvet box, in front of everyone, and everyone clapped, and I said thank you. I'm always very polite." },
          { s: 'haru', f: 'serious', t: "I won't put it on my finger. On my finger it means yes. On a chain it only means I'm carrying it." }
        ] },
        { t: "(Say nothing. Keep tying.)", notes: 2, then: [
          { n: "Solar kept tying. Two stakes later, without looking up, Haru spoke to the tomato in front of her." },
          { s: 'haru', f: 'neutral', t: "You're very good at not asking, Solar-chan. It was his grandmother's. My father handed it to me at the dinner, in front of everyone. I wear it here so it isn't on my hand." }
        ] },
        { t: "It's beautiful.", notes: 1, then: [
          { s: 'haru', f: 'neutral', t: "Yes. Everyone says so." },
          { s: 'haru', f: 'neutral', t: "It's very heavy, for something so small." }
        ] }
      ] },
      { n: "She tied off the next stem, neat and quick, and reached for the twine again." },
      { s: 'haru', f: 'happy', t: "I've thought about dropping it off the roof. I've thought about it so carefully that I know which drain it would go down, and how long the drain is, and where it comes out in the bay." },
      { s: 'haru', f: 'happy', t: "And then I tie another tomato." },
      { n: "She said it in exactly the voice she used for the weather, and pulled the loop round the stake and back through itself and drew the knot snug with one small tug, and the ring swung out again on its chain and touched her throat, and Solar's thumb went to her own right hand before she knew she'd moved it." },
      { music: 'mystery' },
      { n: "Green. Cold. A weight on her right hand no bigger than a fingertip, stone, not metal, cold the way things are cold that have been kept somewhere for a long time. Her grandmother's. Never off, not to sleep, not to bathe, not for a dinner where her mother said *not the jade*. Her thumb turning it a quarter turn and back, a quarter turn and back, counting something: exits, men, cups on a table. And her father's hand coming down over her other one at a kitchen table late at night, over the old scar on her palm, warm, staying a beat too long, and then another, never once asking. Salt in the air. A voice humming an old song she couldn't hear over her own pulse." },
      { fragment: 'strangers-jade-ring' },
      { n: "Then it was rain on seven umbrellas, and a tomato vine crushed in her fist, and Haru's face very close under the yellow hood, not smiling at all." },
      { s: 'haru', f: 'surprised', t: "Solar-chan? You've gone white. Did you cut yourself on the twine?" },
      { n: "Her own thumb was still turning something on her right hand, a quarter turn and back, something that wasn't there. She stopped it and looked at her hand. There was nothing on it. There was a red line across her palm from the twine, and that was all." },
      { choose: [
        { t: "Someone told me not to wear my ring once. I think.", notes: 3, then: [
          { n: "Haru went very still, the way she went still over a seedling she wasn't sure about, and then she asked, as gently as Solar had ever heard anyone ask anything," },
          { s: 'haru', f: 'sad', t: "Did you listen?" },
          { s: 'solar', f: 'sad', t: "I don't know." },
          { s: 'haru', f: 'sad', t: "...Then we have that in common, you and I. That's a very unkind thing to have in common." },
          { n: "She took Solar's hand off the planter's edge and held it between both of hers, rain and dirt and all, and didn't say anything else, which was the right thing to say." }
        ] },
        { t: "I'm fine. Just dizzy. I skipped lunch.", notes: 2, then: [
          { n: "Haru looked at her for a long moment and visibly decided not to believe her, and then, just as visibly, decided not to say so. She unscrewed the thermos and poured, and put the lid-cup in Solar's hands and closed Solar's fingers around it." },
          { s: 'haru', f: 'neutral', t: "Drink. You don't have to tell me anything. I only want you to know that I noticed." }
        ] },
        { t: "What's it like? Being promised to someone.", notes: 1, then: [
          { s: 'haru', f: 'neutral', t: "Like being a parcel. A very well-wrapped one. Everyone admires the paper." },
          { n: "Solar nodded as though that were an answer to the question she'd asked, and not to the other one. Her thumb kept drifting back to her ring finger. Haru watched it go there and come away and go there again, and said nothing." }
        ] }
      ] },
      { n: "They finished the row. The last vine was the tallest, a straggling, ambitious thing that had already flopped once and was trying again, and Haru tied it herself, slowly, and stepped back under her umbrellas to look at it." },
      { s: 'haru', f: 'happy', t: "There. Now it can't fall, and it can still grow. That's the whole trick, I think. With everything." },
      { n: "Solar went down the stairs with wet shoes and a red line fading on her palm. Her thumb went to her ring finger on the landing, and again at the shoe lockers, and again on the monorail, where she caught herself doing it in the black window and made herself stop, and then, a station later, did it anyway." },
      { n: "There was nothing there. She checked anyway." }
    ] },

    { after: '7/1', title: '5: the competition', place: 'Iwatodai Strip · Wild-Duck Burger', time: 'After School', scene: [
      { music: 'joy' },
      { phone: [
        { from: 'haru', t: "Solar-chan. Would you come with me to the enemy after school? I need a witness. 🍔" },
        { from: 'solar', t: "the enemy?" },
        { from: 'haru', t: "Wild-Duck Burger. I've never been inside one. Please don't tell anyone." }
      ], contact: 'Haru' },
      { n: "Wild-Duck Burger at four in the afternoon was a fog of fryer oil and teenage ambition, with a cartoon duck on the tray liners giving a thumbs-up he had no business giving, and a radio in the kitchen playing something nobody had chosen. Haru was at the corner table by the window. She had a notebook open in front of her and a mechanical pencil behind her ear, and arranged across two trays, in a neat line, in ascending order of price, was one of everything on the menu." },
      { s: 'haru', f: 'happy', t: "I wasn't sure what you'd like, so I was thorough." },
      { s: 'haru', f: 'neutral', t: "My father's company makes burgers. Did I tell you? Among other things. Hundreds of shops. When I was small he used to bring every new item home to me first, in its box, before anyone else in the country had tasted it. I was his test kitchen. I've eaten everything we have ever sold." },
      { s: 'haru', f: 'serious', t: "I have never once eaten anyone else's." },
      { choose: [
        { t: "(Start with the Mystery Burger. Someone has to.)", notes: 3, then: [
          { n: "Solar unwrapped it and took a bite and chewed with enormous concentration, and Haru watched her face with the pencil already lifted, the way a scientist watches a dial." },
          { s: 'haru', f: 'happy', t: "Well? Don't spare me." },
          { s: 'solar', f: 'neutral', t: "...Brave. I don't know what it is. I respect it." },
          { n: "Haru wrote that down word for word, and underlined *brave*, and then added, after some thought, *possibly duck*." }
        ] },
        { t: "Shouldn't you be loyal?", notes: 2, then: [
          { s: 'haru', f: 'happy', t: "I'm being extremely loyal. This is reconnaissance. Fufu." }
        ] },
        { t: "It's just fast food, Haru.", notes: 1, then: [
          { s: 'haru', f: 'neutral', t: "Nothing is just fast food. There's somebody's whole life in that bun. Usually several somebodies." }
        ] }
      ] },
      { n: "She ate everything with a plastic knife and fork, each burger cut into exact quarters, and took notes on all of it in her round careful hand. The fries were salted unevenly. The milkshake had been made by someone who loved milkshakes. The pickle was an afterthought, which seemed to wound her personally." },
      { s: 'haru', f: 'sad', t: "He used to be proud of a pickle, my father. Can you imagine? The very first shop. He stood behind the counter in an apron and he'd spent a month on the pickle, and he made me taste it, and I was six, and I told him it was the best pickle in Japan, and he picked me up and spun me round." },
      { s: 'haru', f: 'neutral', t: "Now he's proud of numbers. And people say unkind things about the company. About how it treats the people who work in it. I read them at night sometimes, under the covers, like a little girl with a torch." },
      { s: 'haru', f: 'neutral', t: "Some of them are true. That's the part I can't put down." },
      { choose: [
        { t: "Do you think he knows?", notes: 3, then: [
          { s: 'haru', f: 'serious', t: "I think he knows the way you know there's a stone in your shoe. He's decided to keep walking on it." },
          { s: 'haru', f: 'neutral', t: "I think that's what I am, a little. More walking." }
        ] },
        { t: "That isn't your fault.", notes: 2, then: [
          { s: 'haru', f: 'neutral', t: "No. But it's my name. It's on the side of every building." }
        ] },
        { t: "(Steal one of her fries.)", notes: 1, then: [
          { n: "Haru slid the whole carton across to her without looking up from her notebook, which was how Solar knew it was bad. Haru always noticed. Haru noticed the toast in a cup of coffee." }
        ] }
      ] },
      { n: "Solar had wondered since May what a girl like Haru was doing on the roof of a school whose lists didn't have her on them, in a city she talked about like a hotel lobby. She'd put the question away carefully on a high shelf, the way she was learning to put things. It came down now on its own, with the duck grinning at her off the tray liner." },
      { s: 'solar', f: 'neutral', t: "Haru. How did you get here? To Iwatodai, I mean." },
      { n: "Haru put down the plastic fork. She lined it up with the knife, exactly parallel, and looked at them." },
      { s: 'haru', f: 'neutral', t: "There was a dinner. There's always a dinner. And afterward a car, and my father's driver, and the city going past the window, very bright, all those lit-up signs with nobody under them." },
      { s: 'haru', f: 'neutral', t: "And I asked him to stop. I've never asked him to stop. He stopped. I got out and I walked, and I wasn't walking anywhere, that was the lovely thing. I was so tired of always walking toward the next thing. I walked into a station and got on the first train that wasn't going home, and I got off where it stopped." },
      { s: 'haru', f: 'neutral', t: "It stopped here. Very late. And then everything went green and still, and there was a little girl in a great big coat on the platform, the only other person awake, and she told me the hotel was that way, and that in the morning I should go up the hill and look at the school roof, because somebody had left a garden there to die." },
      { n: "She smiled at the memory. Then the smile stalled halfway, like a car on a hill, and she frowned down at the knife and fork as though they'd said something rude." },
      { s: 'haru', f: 'neutral', t: "I called the house in the morning so nobody would worry. By lunchtime my father's office had booked the suite and arranged for me to sit in at Gekkoukan as a guest. He's very good at arrangements. He didn't ask me to come home. He didn't ask me anything." },
      { n: "Out on the Strip a bicycle bell rang twice and somebody laughed." },
      { s: 'haru', f: 'sad', t: "...Oh. I've never said that out loud. That I got on a train because I couldn't bear to be driven anywhere else." },
      { choose: [
        { t: "(Put your hand over hers.) You don't have to go back right now.", notes: 3, then: [
          { n: "Haru turned her hand over under Solar's, palm up, and held on, and looked out of the window at the Strip going gold in the low sun." },
          { s: 'haru', f: 'sad', t: "I think I'm a very long way from home, Solar-chan. An hour and forty minutes on the express. I've timed it. It's terribly far. I think I've known for a while, the way you know you've overslept before you look at the clock." }
        ] },
        { t: "I can't even remember mine.", notes: 2, then: [
          { n: "Haru laughed, startled, a little wet at the edges, and pressed her knuckle under one eye." },
          { s: 'haru', f: 'happy', t: "Aren't we a pair. Two girls a long way from home, in a burger shop that belongs to neither of us." }
        ] },
        { t: "Maybe you should go back.", notes: 1, then: [
          { s: 'haru', f: 'neutral', t: "Maybe." },
          { n: "She picked up the fork again and cut a quarter of a burger she wasn't going to eat into two smaller quarters." },
          { s: 'haru', f: 'neutral', t: "Not today, I think." }
        ] }
      ] },
      { n: "She closed the notebook on her verdict, which was that the fries were better than her father's and she was going to have to find a way to live with it. They walked out together into the evening, the air thick and warm as bathwater, the Strip's signs coming on one by one over their heads." },
      { s: 'haru', f: 'neutral', t: "I'm in no hurry to go back. Is that terrible?" },
      { n: "Solar didn't answer. She wasn't in any hurry either, and she suspected Haru knew it, and that was most of why she'd asked." }
    ] },

    { after: '7/24', title: '6: first crack', place: 'Port Island Station · Hotel', time: 'Daytime', scene: [
      { bg: 'hotel-lobby' },
      { music: 'sun' },
      { n: "Summer had come down over the bay like a lid on a pot. The air on the walk from the station was so thick and white that the buildings across the water looked sketched in pencil, and by the time Solar found the address Haru had texted her she had sweat running down the inside of her collar. It was a hotel. The tall one by Port Island Station with the doorman and the revolving door that took a whole breath to get through, and a lobby made of cold marble and colder air, and an arrangement of lilies on the center table roughly the size of a car." },
      { n: "Haru was waiting by the lilies in a sundress and the sunhat, and the clerk at the front desk bowed to her as they passed, too deep, the bow of a man who had been instructed to bow and wasn't sure by whom." },
      { s: 'haru', f: 'happy', t: "I live here. Isn't it ridiculous? I didn't choose it." },
      { s: 'haru', f: 'neutral', t: "That first night I walked in off the platform with nothing but my handbag, and the clerk gave me a room without asking a single question. And at lunch the next day he said, Miss Okumura, your suite is ready. Nobody had asked me what I wanted. It was simply ready." },
      { s: 'haru', f: 'neutral', t: "It's booked through the first week of March. Nobody has come to see it. Not once. I suppose that's the point of booking things." },
      { n: "Solar stopped walking, in the middle of all that marble, between a bellhop and a potted palm." },
      { n: "A room at the end of the girls' hall with the sheets already turned down at one corner, and a second uniform pressed in her size in the wardrobe. Mitsuru, at two in the morning, looking at her like a tidy person looks at the one thing not where she left it, and saying she'd been going to ask Solar who it was for. Solar had slept in it every night since. She had stopped thinking about it, mostly, the way you stop hearing a clock." },
      { choose: [
        { t: "Someone made up a room for me too. Nobody knows who.", notes: 3, then: [
          { s: 'haru', f: 'surprised', t: "...Truly?" },
          { n: "Solar nodded. Haru looked at her for a long time, there in the cold lobby air, and something in her face eased that Solar hadn't known was clenched." },
          { s: 'haru', f: 'happy', t: "Then we're both somebody's guests. I'd much rather be a guest with you than a guest alone." }
        ] },
        { t: "The first week of March. That's specific.", notes: 2, then: [
          { s: 'haru', f: 'neutral', t: "Isn't it? That's when the company opens its new site on Port Island, and I expect I'll be wanted at the ribbon. I've decided not to think about it until December. I'm very good at deciding things like that." },
          { s: 'haru', f: 'happy', t: "I'm less good at keeping to them. Come up." }
        ] },
        { t: "Must be nice.", notes: 1, then: [
          { s: 'haru', f: 'neutral', t: "It's very quiet. You can hear the ice machine from the bed." }
        ] }
      ] },
      { bg: 'elegant-bedroom' },
      { n: "The suite was enormous and untouched, cream carpet and cream curtains and a bed that could have slept a family, and Haru lived in one corner of it, the way a cat lives in one corner of a big house. One side of the bed was slept in. The rest was pristine. The kitchenette, on the other hand, had been conquered entirely. There were burlap sacks of green coffee beans along the wall, and a heavy black frying pan on the stove, and a wooden spoon and a colander and a kitchen timer shaped like a tomato, and every window that could be opened was open, letting the heat in on top of the air conditioning in a way the hotel would certainly have had views about." },
      { s: 'haru', f: 'serious', t: "Green coffee doesn't smell like anything. Smell. It smells like grass, a little. Like a field. All the coffee is still inside it, asleep. You have to wake it up very carefully, or you only get charcoal." },
      { n: "She put the beans in the pan and the pan on the flame and handed Solar the spoon, and showed her how to keep them moving, never stopping, and they stood together at the stove while the beans went from green to straw to pale gold, and the room started to smell of bread, and then of something toasted and nutty and sweet, and Solar's arm began to ache, and Haru said that was correct, and that it was supposed to." },
      { s: 'haru', f: 'serious', t: "Listen now. It's nearly there. Don't look, listen." },
      { n: "A small, dry crack, like a twig. Then another. Then a scatter of them, quick and light, like rain starting on a roof." },
      { s: 'haru', f: 'happy', t: "There. That's first crack. That's the bean deciding to be coffee." },
      { choose: [
        { t: "(Keep stirring, and listen.)", notes: 3, then: [
          { n: "She kept the spoon going and her ears open, and the cracking rose and thinned, and Haru touched her elbow at the exact moment Solar had been about to say now, and they tipped the pan out into the colander together in a rush of smoke and chaff." },
          { s: 'haru', f: 'happy', t: "Oh, perfect. You heard it, didn't you? You heard it before I said." }
        ] },
        { t: "Should I take it off?", notes: 2, then: [
          { s: 'haru', f: 'neutral', t: "Not yet. A little longer. Trust your ears, not me." },
          { n: "Solar waited, and listened, and Haru touched her elbow, and they tipped it out together in a rush of smoke." }
        ] },
        { t: "(Turn the flame up to hurry it.)", notes: 1, then: [
          { n: "Haru's hand closed around her wrist before it reached the knob. Gently, and completely, and with a strength that had nothing gentle about it." },
          { s: 'haru', f: 'serious', t: "No. Never hurry the part where it's deciding." }
        ] }
      ] },
      { n: "Haru shook the colander over the sink while the chaff blew off in papery flakes, and the air conditioning picked them up and carried them across the room so that for a moment it seemed to be snowing in July." },
      { s: 'haru', f: 'neutral', t: "If you go past it, there's a second crack. Then it turns dark and oily and shiny, and everything that made it itself burns off, and it only tastes of the fire. My father likes it there. Most of the world likes it there. It's very reliable." },
      { s: 'haru', f: 'blushing', t: "Solar-chan, when I'm older I'm going to have a café. A very small one. Eight seats. Nobody's name over the door. Only coffee I roasted myself, and whatever I grew that week, and a window." },
      { s: 'haru', f: 'neutral', t: "I've never said that to anyone. In Tokyo the café is a line in a business plan with my name on it. And someone else's name beside mine." },
      { choose: [
        { t: "Eight seats. Save me one.", notes: 3, then: [
          { s: 'haru', f: 'blushing', t: "The one by the window. I'll scratch your name under it, very small, where nobody else will ever see." },
          { s: 'haru', f: 'happy', t: "Every time somebody sits in it, they'll be sitting in your seat, and they won't know. I like that very much." }
        ] },
        { t: "Why not open it here?", notes: 2, then: [
          { n: "Haru looked out of the open window at the white, hot bay for a while before she answered." },
          { s: 'haru', f: 'neutral', t: "Because then it would be a café I ran away to. I want one I walked to." }
        ] },
        { t: "Your father would hate that.", notes: 1, then: [
          { s: 'haru', f: 'happy', t: "Fufu. Yes. That's one of its features." }
        ] }
      ] },
      { n: "They sat on the carpet with their backs against the bed, because the furniture looked as if it would be insulted by being sat on, and ate radishes out of a paper bag while the beans cooled in the colander between them, and the whole cream suite smelled of a bakery and a bonfire at once, and outside the bay lay flat and blinding and endless." },
      { s: 'haru', f: 'happy', t: "Come back in three days. They have to rest before they're any good." },
      { s: 'haru', f: 'neutral', t: "Everything does. I've only just learned that." }
    ] },

    { after: '9/4', title: '7: rotten', place: 'Gekkoukan High · Rooftop Garden', time: 'After School', scene: [
      { music: 'school' },
      { n: "The heat was going out of the afternoons at last. It went the way it always seemed to go, not all at once but a degree at a time, so that one day you noticed you'd stopped looking for shade. The tomato vines were finished, brown and brittle on their stakes, the last few fruit split and sweet and full of wasps. And at the north end of the roof, past Haru's planters, there were three old wooden planter boxes that had belonged to some club that no longer existed, gray and soft and leaning on each other, full of dust and cigarette ends and a single defiant dandelion." },
      { n: "Haru had decided they had to go. She had borrowed something from the custodian." },
      { n: "It was an axe. Not a hatchet, not a little camping thing, but a real felling axe with a long ash handle worn pale at the grip and a red head with the paint chipped off the edge, the kind of axe that belonged at the bottom of a forest in a fairy tale. Haru was holding it in both hands with the head resting on the toe of her shoe, in her uniform, with her sleeves rolled to the elbow and her hair tied back, looking at the planter boxes the way a doctor looks at an X-ray." },
      { s: 'haru', f: 'happy', t: "The custodian said I could borrow it for kindling. I didn't say what kind." },
      { n: "She set her feet. She lifted it, smoothly, all the way back over her shoulder, and brought it down, and the nearest box came apart along its whole length with a sound like a door being kicked in, and a puff of rot and dust went up into the clean September air and drifted off over the fence." },
      { n: "Haru was not a big girl. She did not look like a person who could do that. She looked like a person who should be pouring tea in a sunlit room. She stepped over the wreckage, lined up the second box with her head tipped thoughtfully to one side, and split that one too, with exactly the same stroke, as if the first had been a rehearsal." },
      { s: 'haru', f: 'happy', t: "Rotten things are very easy to break. It's the healthy ones that take effort. Don't let anyone ever tell you otherwise." },
      { choose: [
        { t: "Where did you learn to do that?", notes: 3, then: [
          { s: 'haru', f: 'neutral', t: "Nowhere. I think I've always known how." },
          { s: 'haru', f: 'happy', t: "I just never had anything I was allowed to hit." }
        ] },
        { t: "(Stand well back.)", notes: 2, then: [
          { s: 'haru', f: 'happy', t: "Very sensible. Fufu. Most people come closer to see, and then they're sorry." }
        ] },
        { t: "Should you be doing that?", notes: 1, then: [
          { s: 'haru', f: 'neutral', t: "Should anyone?" },
          { n: "She split the third box. It seemed to be the whole of her answer." }
        ] }
      ] },
      { n: "Solar's phone buzzed in her blazer pocket. She let it. It buzzed again a minute later, and she let that one too, and put her hand flat over the pocket as if that would quiet it." },
      { n: "They had started coming in at the end of August. Messages from a number she didn't know, polite and ordinary and months out of date, the way letters arrive when they've been sitting forgotten in a sorting office since spring. They were not wrong numbers. She'd told herself they were for a week. They knew things a wrong number wouldn't know." },
      { n: "Haru had stopped with the axe on her shoulder and was watching her, with her head on one side, exactly the way she'd watched the planter boxes." },
      { s: 'haru', f: 'neutral', t: "You let it ring. I know that face, Solar-chan. I used to make it at my father's secretary." },
      { choose: [
        { t: "They're from people I don't remember.", notes: 3, then: [
          { n: "Haru set the axe down against the fence, carefully, head on the concrete, and came and sat on the edge of the nearest planter, and waited." },
          { s: 'haru', f: 'neutral', t: "Do they sound angry with you?" },
          { s: 'solar', f: 'neutral', t: "No. They sound like they're... checking. Like they're making sure I got somewhere." },
          { s: 'haru', f: 'sad', t: "Then somebody misses you very much. That's all checking is." }
        ] },
        { t: "It's nothing.", notes: 2, then: [
          { s: 'haru', f: 'happy', t: "Mm. My secretary was nothing too. Twice a day, at exactly the same time." },
          { n: "She waited, pleasantly, with the axe on her shoulder, and in the end Solar told her a little of it, because it was clear Haru was prepared to wait until the custodian wanted his axe back." }
        ] },
        { t: "Do you ever miss yours? The calls.", notes: 1, then: [
          { s: 'haru', f: 'neutral', t: "...Sometimes. Isn't that silly? Not him. The ringing. It meant somebody knew where I was." },
          { s: 'haru', f: 'happy', t: "But you're very slippery, Solar-chan, and I asked about yours." }
        ] }
      ] },
      { s: 'haru', f: 'neutral', t: "He always called twice. I always answered the second one. Do you know why?" },
      { s: 'haru', f: 'neutral', t: "Because if I didn't answer the second one, he'd send someone. Somebody who keeps calling is somebody who would come, if they could." },
      { n: "It was said lightly, as Haru said most things, and it went through Solar like a draft under a door. She didn't know why. She looked at the pocket with the phone in it and didn't take it out." },
      { s: 'haru', f: 'serious', t: "Whatever you do with them, it ought to be because you chose to. Not because it was ringing." },
      { n: "There were new boards stacked by the door, fresh cedar, pale and sweet-smelling, and a box of nails and a hammer, and Haru, it turned out, had drawn plans. Of course she had." },
      { choose: [
        { t: "(Hold the boards steady while she nails them.)", notes: 3, stat: { proficiency: 1 }, then: [
          { n: "Solar knelt and held each board in place with both hands, her fingers a few centimeters from where the nails went in, and Haru drove every one in three strokes, never four, and never once came close, and neither of them remarked on the fact that Solar never flinched, or on what it meant that Haru never asked her to move her hands." }
        ] },
        { t: "(Carry the broken wood down to the bins.)", notes: 2, then: [
          { n: "It took four trips. On the last one the custodian looked at the pile of splintered boards, and then up the stairs toward the roof, and then at Solar, and decided visibly not to ask." }
        ] },
        { t: "Can I try the axe?", notes: 1, then: [
          { n: "Haru handed it over with every sign of delight. Solar swung at the last splintered plank with all of her weight, and the head bit deep and stuck, and stayed stuck, and it took both of them pulling with their feet braced to get it out." },
          { s: 'haru', f: 'happy', t: "Oh, that was very brave. It's harder than it looks. Everything I'm good at is." }
        ] }
      ] },
      { n: "By the time the sun was on the water the north end of the roof had three new planters in it, square and pale and smelling of a forest, and Haru stood among them with the axe resting on her shoulder and her face flushed and her hair coming down, looking happier than Solar had ever seen her look about anything." },
      { n: "She took the axe back to the custodian with a small formal bow and both hands on the handle. On the way down the stairs Solar's phone buzzed once more. She took it out, and looked at it, at the number she didn't know, for the whole length of the landing. She didn't open it. But she looked." }
    ] },
    { after: '10/2', title: '8: one ring', place: 'Gekkoukan High · Rooftop Garden', time: 'After School', scene: [
      { music: 'tender' },
      { n: "October had turned the light. It came in lower and harder now, at a slant, and made everything on the roof cast a shadow twice its own length, and the bay past the fence was the hard clean blue that only came once the summer haze had burned off for good. The new cedar planters had autumn in them already. Spinach, daikon, a row of garlic cloves Haru had pushed into the soil one by one with her thumb, pointed end up, like someone setting a very long table." },
      { n: "Haru wasn't working. She was sitting on an upturned crate by the north planters with her phone held in both hands on her knees, the way people hold a cup of something hot they've forgotten to drink." },
      { s: 'haru', f: 'neutral', t: "Good afternoon, Solar-chan. My father called me yesterday." },
      { n: "She told it evenly, in order, like a report. The phone had rung at a quarter past four. The screen had said *Father*, not the secretary's number. His own. It rang once, and stopped before she could get it to her ear, and sat there in the call log afterward, one missed call, four fifteen, as plain as anything." },
      { s: 'haru', f: 'neutral', t: "He has never once called me himself. Not on my birthday. Not when I was in hospital with my appendix, when I was eleven. He has people for that." },
      { s: 'haru', f: 'neutral', t: "I've been holding it since. In case it does it again." },
      { choose: [
        { t: "(Sit down next to her and wait with her.)", notes: 3, then: [
          { n: "Solar pulled over the other crate and sat, and they waited together, looking at the phone on Haru's knees, while the shadows of the stakes moved very slowly across the concrete. It didn't ring. After a long time Haru let out a breath that seemed to come up from the bottom of her." },
          { s: 'haru', f: 'sad', t: "Thank you. It's easier to not be called with two." }
        ] },
        { t: "Maybe it was a glitch.", notes: 2, then: [
          { s: 'haru', f: 'neutral', t: "Maybe. He doesn't make mistakes, though. He has people for those too." }
        ] },
        { t: "Call him back.", notes: 1, then: [
          { s: 'haru', f: 'sad', t: "I tried. His secretary answered. She said he's been in meetings since noon and hasn't called anyone. She said it very kindly, the way you'd tell a child there's nothing under the bed." },
          { n: "She stopped there, and looked at the phone, and didn't say what she had been about to say next." }
        ] }
      ] },
      { s: 'haru', f: 'neutral', t: "I had a dream last week. He was making a speech, the way he does, at a podium, with all the cameras. And he forgot the end of it. He just stopped, in the middle, and didn't go on." },
      { s: 'haru', f: 'serious', t: "He never forgets the end of anything. I woke up so angry with him." },
      { n: "A gull landed on the fence, looked at them both with total contempt, and left. Haru watched it go." },
      { s: 'haru', f: 'serious', t: "I have to tell him no. To his face. Before anything else happens, before another dinner, before anything. I've known for months. And I can't." },
      { s: 'haru', f: 'neutral', t: "I've practiced in the mirror. I get as far as *Father, I*, and then my face does this." },
      { n: "She showed her. It was the smile. The perfect, pleasant, lovely smile, the one she'd worn on the phone in May with the sugar in her voice, and it came up over her face like a shutter coming down over a shop window, and Solar felt it in the pit of her stomach, because she knew exactly how it was done from the inside." },
      { s: 'haru', f: 'neutral', t: "So I wondered. Would you be him? Only for a few minutes. You needn't be cruel. He never was, exactly. He was only always somewhere else." },
      { choose: [
        { t: "(Stand up, button your blazer, and look past her at your watch.)", notes: 3, then: [
          { s: 'haru', f: 'surprised', t: "...Oh. Oh, that's horrible. That's exactly right." }
        ] },
        { t: "(Sit across from her and fold your hands, like a man at a dinner.)", notes: 2, then: [
          { s: 'haru', f: 'neutral', t: "Yes. That's the table. That's exactly the table." }
        ] },
        { t: "I can't be your dad, Haru.", notes: 1, then: [
          { s: 'haru', f: 'neutral', t: "No. But you can be a door I practice on." },
          { n: "So Solar stood up and was a door, as best she could." }
        ] }
      ] },
      { s: 'haru', f: 'neutral', t: "Father. I..." },
      { n: "The smile came. Haru put her hands over her face, laughed into them, took them away." },
      { s: 'haru', f: 'happy', t: "Father, I'd like to talk to you about the... about the weather." },
      { s: 'solar', f: 'neutral', t: "Haru. I have four minutes." },
      { n: "She didn't know where it came from, the voice, flat and pleasant and already on its way out of the room, only that she had heard it somewhere, from someone, many times, across a long table. Haru's head came up as if she'd been slapped." },
      { n: "And then the smile went. Not came down, went, all at once, the way the wind on the roof sometimes dropped as though somebody had shut a window, and what was under it was a face Solar had only seen once before, over an axe." },
      { s: 'haru', f: 'serious', t: "Father. I won't marry him. I'm not going to the next dinner, or any dinner after it. I'm going to give his grandmother's ring back to him with my own hand, and then I'm going to go home and plant something." },
      { s: 'haru', f: 'serious', t: "And you may be angry with me for as long as you like. I'll wait. I'm very patient. You taught me that." },
      { n: "The wind ran across the roof and rattled the fence and flattened the garlic shoots and let them up again. Haru's hands were shaking in her lap. Her face was not smiling at all. And Solar, who was still being a man who checked his watch, could not for the life of her think of one single thing he would say back." },
      { choose: [
        { t: "(Drop it.) Haru. That was it.", notes: 3, then: [
          { n: "Haru laughed and burst into tears at the same moment, which Solar hadn't known a person could do, and pressed both hands to her mouth, and laughed through them, crying." },
          { s: 'haru', f: 'happy', t: "It was, wasn't it? I said it. Oh, I said it out loud. On a roof. To you." }
        ] },
        { t: "(Stay in character.) ...I'll think about it.", notes: 2, then: [
          { s: 'haru', f: 'serious', t: "No, you won't." },
          { s: 'haru', f: 'happy', t: "But I said it. That part was mine." }
        ] },
        { t: "He'd have to listen to that.", notes: 1, then: [
          { s: 'haru', f: 'sad', t: "If he's there to listen." },
          { n: "She looked at the phone on the crate after she said it, and didn't finish, and neither of them picked it up." }
        ] }
      ] },
      { s: 'haru', f: 'neutral', t: "Which means I have to go home to say it, doesn't it. Isn't that inconvenient? I'd got so comfortable." },
      { n: "The phone lay face up on the crate between them for the rest of the afternoon and didn't ring. They finished the garlic. Pointed end up, Haru said, every time, as if Solar might forget, and Solar didn't forget once, and let her say it anyway." }
    ] },

    { after: '11/6', title: '9: straw', place: 'Gekkoukan High · Rooftop Garden', time: 'After School', scene: [
      { music: 'tender' },
      { n: "November came in gray and stayed gray. The wind on the roof had teeth in it now, and the city past the fence looked rinsed and colorless, all its edges very sharp. Things at the dorm had been quiet lately in the way nobody talked about, and Solar had come up partly to be somewhere where nobody was being careful with her." },
      { n: "Haru was putting the garden to bed. There were bales of straw by the door that she must have carried up herself, and she was kneeling at the first planter pulling it apart in handfuls and tucking it over the soil around the garlic and the spinach, smoothing it down at the edges, the way you'd tuck in a child who kept kicking the covers off." },
      { s: 'haru', f: 'happy', t: "They sleep under it all winter. And when spring comes they wake up and don't remember a thing. I've always rather envied them." },
      { choose: [
        { t: "(Take an armful of straw and start on the next bed.)", notes: 3, then: [
          { n: "Solar knelt at the next planter and did it the way Haru was doing it, loosely, not packed, tucked at the edges, and Haru glanced over once to check and then didn't check again, which from Haru was a medal." }
        ] },
        { t: "Do they dream?", notes: 2, then: [
          { s: 'haru', f: 'happy', t: "Of course they do. About water, mostly. And about being taller." }
        ] },
        { t: "You envy forgetting?", notes: 1, then: [
          { n: "Haru looked up at her, and Solar watched her hear it, and watched it land." },
          { s: 'haru', f: 'sad', t: "Oh. I'm sorry. That was careless of me." },
          { s: 'haru', f: 'neutral', t: "No. I don't, really. I'd miss all of this far too much." }
        ] }
      ] },
      { n: "They worked down the beds together with the wind pulling straw out of their hands and scattering it over the concrete like spilled gold. Haru's cheeks were pink with the cold. She'd put a scarf on over her uniform, cream wool, and the gold chain still showed above it at the back of her neck." },
      { s: 'haru', f: 'neutral', t: "There are people at your dormitory now who know your name better than you do. I've seen them at the gate, waiting for you to come home. The way people wait outside a hospital." },
      { s: 'haru', f: 'neutral', t: "They want you to go back with them, don't they?" },
      { choose: [
        { t: "They do. I don't know where back is yet.", notes: 3, then: [
          { s: 'haru', f: 'sad', t: "Then you've got further to go than I have. I always knew exactly where mine was. An hour and forty minutes. That was always the trouble with it." }
        ] },
        { t: "I don't know what they want.", notes: 2, then: [
          { s: 'haru', f: 'neutral', t: "Yes, you do, Solar-chan." },
          { s: 'haru', f: 'happy', t: "It's all right. You don't have to give anyone something only because they want it. Even if they came a very long way to ask." }
        ] },
        { t: "Do you want to go back?", notes: 1, then: [
          { s: 'haru', f: 'neutral', t: "Yes. I think so. In my way." },
          { s: 'haru', f: 'happy', t: "But that isn't what I asked, is it. Fufu. You're very slippery in the cold." }
        ] }
      ] },
      { s: 'haru', f: 'neutral', t: "I'm going up to Tokyo in January. After the holidays, when he's back at the house. He'll be down here at the end of the month to cut a ribbon on Port Island, and I could tell him there, in front of the cameras, but I'd rather do it at home, at his own table, where he can't leave early." },
      { s: 'haru', f: 'happy', t: "And then I'll come back on the next train and finish the year up here. The garlic doesn't come up until May, and I refuse to miss it." },
      { s: 'haru', f: 'happy', t: "I'm not frightened of it any more. That's your fault, you know. You were a very convincing door." },
      { s: 'haru', f: 'serious', t: "I won't tell you what to do. Everybody tells you what to do. I've watched them. But I'll tell you what I'd want somebody to tell me." },
      { s: 'haru', f: 'serious', t: "Whichever door it is, walk through it yourself. Don't let anyone carry you. Not even the people who love you. Especially not them. They're the ones who'll want to." },
      { n: "She went back to her straw. After a while, still not looking up, she touched the chain at her throat through the scarf." },
      { s: 'haru', f: 'neutral', t: "Do you remember, in the rain, in June? When you went somewhere for a moment, and came back white? You had your hand just here." },
      { s: 'haru', f: 'neutral', t: "Did it ever come back? Whatever it was?" },
      { choose: [
        { t: "Pieces of it. It's cold, and it's green, and somebody didn't want to let go.", notes: 3, then: [
          { n: "Haru sat back on her heels with straw in both fists and thought about that for a long time, with the wind in her scarf." },
          { s: 'haru', f: 'sad', t: "Then somebody loved you very much. Or very badly. It's so hard to tell from the inside. I've been trying for years." }
        ] },
        { t: "No. Only the cold.", notes: 2, then: [
          { s: 'haru', f: 'neutral', t: "Cold things keep. That's what cold is for. It'll still be there when you're ready for it." }
        ] },
        { t: "I'd rather not talk about it.", notes: 1, then: [
          { s: 'haru', f: 'neutral', t: "Of course." },
          { n: "She took her hand away from the chain." },
          { s: 'haru', f: 'sad', t: "I'm sorry. I get nosy in the winter. There's less to tend." }
        ] }
      ] },
      { n: "The last bed went under. Haru stood up and brushed the straw off her skirt and her knees and looked down the long row of planters, all of them tucked in and gold and quiet, with the gray city behind them." },
      { s: 'haru', f: 'neutral', t: "Though if it goes the way these things go, when they come up in the spring I may be in Tokyo arguing with lawyers. Will you look in on them for me? Only look. You needn't do anything. Things like being looked at by somebody who isn't going to make them do anything." },
      { n: "Solar opened her mouth to say yes, and found she couldn't quite, and closed it again. Haru watched her not say it." },
      { s: 'haru', f: 'sad', t: "...If you're here." },
      { n: "She said it very gently, a moment late, the way you add a line to a letter after you've already signed it, and Solar understood that Haru had been thinking about that too, for a while, on her own, up here among the planters, and had decided to say it anyway." }
    ] },

    { after: '12/4', title: '10: house blend', place: 'Iwatodai Dorm · Kitchen', time: 'After School', scene: [
      { music: 'sun' },
      { n: "The cold had settled in properly by then and made itself at home. The dorm's radiators knocked and sighed all afternoon like old men climbing stairs, and the kitchen windows fogged over the moment anyone put the kettle on, and Haru came through the front door at four with her cheeks scarlet and her scarf up to her nose, carrying a paper bag, a hand grinder, her steel thermos, and the air of someone arriving to perform surgery." },
      { n: "She took over the kitchen without asking, because that was how Haru did things. Koromaru followed her in and sat at her feet with tremendous hope. She gave him a piece of carrot out of her coat pocket, which she had evidently brought for exactly this purpose, and he took it with great dignity and lay down on her shoes." },
      { s: 'haru', f: 'happy', t: "Sit, please, Solar-chan. You're going to be the first. Not the first to taste it. I've tasted it a hundred times. The first person it's *for*." },
      { n: "She set the paper bag on the table in front of her and turned it so the label faced Solar. It was hand-written, in Haru's round careful hand, in brown ink." },
      { n: "*Solar.* And under that, smaller, *Dark, a little sweet, warmer than you expect.* And under that, smaller still, almost a whisper at the bottom of the bag, *Rest three days. Don't hurry it.*" },
      { s: 'haru', f: 'blushing', t: "I've been blending since the summer. It's three beans, from three places that have never met each other. They don't agree about anything. Separately they're all a little much. Together they're the best thing I've ever made." },
      { choose: [
        { t: "(Read the label twice, and don't trust your voice.)", notes: 3, then: [
          { n: "Solar read it twice. Then she held the bag in both hands, quite still, and didn't say anything, because she wasn't certain what would come out if she tried, and Haru looked at her face and seemed to get everything she'd wanted out of it and a little more besides." },
          { s: 'haru', f: 'blushing', t: "Oh. Good. That's the face. I was hoping for that face." }
        ] },
        { t: "You named a coffee after me.", notes: 2, then: [
          { s: 'haru', f: 'happy', t: "I named it after a girl I met on a roof. It's a coincidence that you share a name. Fufu." }
        ] },
        { t: "Is it bitter?", notes: 1, then: [
          { s: 'haru', f: 'happy', t: "You'll have to be brave and find out. You were very brave in May." }
        ] }
      ] },
      { n: "She ground the beans by hand, slowly, the crank going round and round with a sound like gravel under tires, and the smell came up out of the grinder and filled the kitchen and leaked into the lounge and up the stairs, and inside of a minute there were feet on the stairs." },
      { s: 'junpei', f: 'surprised', t: "Dude. Why does the kitchen smell like a fancy hotel?" },
      { s: 'haru', f: 'happy', t: "Good afternoon, Iori-kun. You may have a cup if you promise to drink it slowly." },
      { n: "Junpei promised. He did not drink it slowly. He looked down into the empty cup with an expression of real betrayal, as if it had ended on purpose." },
      { s: 'junpei', f: 'happy', t: "Okay, that's illegal. That should be illegal. I'm telling everyone." },
      { n: "He went to tell everyone. Haru poured two more cups and sat down across from Solar, and before she drank, she reached up under her scarf and unfastened the gold chain from the back of her neck, and slid the ring off it into her palm, and looked at it there." },
      { s: 'haru', f: 'neutral', t: "It isn't mine to wear. It's mine to give back. I'll carry it up to Tokyo in my pocket, like a stone I'm returning to a river." },
      { n: "She put the ring in her skirt pocket. She coiled the empty chain on the table beside the bag of coffee, where it lay in a small gold heap, holding nothing." },
      { s: 'haru', f: 'happy', t: "And then I'm going to have my café. Not soon, perhaps. But I'm going to. And this will be on the board, first thing, at the top. And people will drink it an hour up the line, in a city you can't remember, and never know it was named after a girl from somewhere else." },
      { choose: [
        { t: "I'll drink it every morning. Properly. Slowly.", notes: 3, then: [
          { s: 'haru', f: 'happy', t: "With patience. And never hurry the part where it's deciding." },
          { s: 'solar', f: 'happy', t: "Never." }
        ] },
        { t: "Make sure he never gets a cup.", notes: 2, then: [
          { s: 'haru', f: 'happy', t: "Fufu. Not one drop. Not even the chaff." }
        ] },
        { t: "What if I can't find your café?", notes: 1, then: [
          { s: 'haru', f: 'neutral', t: "Then you'll smell it. From three streets away. I'll make sure of it." }
        ] }
      ] },
      { s: 'haru', f: 'neutral', t: "Do you know what you did, that first day? You let me carry the soil. You stood there and watched and didn't help." },
      { s: 'haru', f: 'blushing', t: "Everyone always wanted to help. My whole life. It was always very kind, and it always meant they didn't think I could. You were the first person who watched me do it and simply believed I would." },
      { choose: [
        { t: "You could. You always could.", notes: 3, then: [
          { n: "Haru went pink to the ears and looked down into her cup and didn't argue, which was as close as she ever came to agreeing with a compliment." },
          { s: 'haru', f: 'blushing', t: "...Yes. I suppose I could. I'm only just finding it out." }
        ] },
        { t: "(Pour her a second cup of her own coffee.)", notes: 2, then: [
          { n: "Solar refilled her cup without asking whether she wanted it, which was how Haru did things, and Haru noticed, and laughed, and let her." }
        ] },
        { t: "It looked heavy.", notes: 1, then: [
          { s: 'haru', f: 'happy', t: "It was. That was never the question, though, was it?" }
        ] }
      ] },
      { n: "They drank it at the kitchen table with the windows fogged white and the radiators knocking and somebody upstairs playing music too loud, and Koromaru asleep across both of Haru's feet, and Junpei's voice coming faintly from the lounge, telling someone it was illegal. It was dark, and a little sweet, and warmer than she expected." },
      { n: "She didn't say so. Haru knew anyway. Haru was watching her drink it with her chin in her hand, the way she watched a row come up." }
    ] }
  ],
  // After MAX: they play in order, then rotate, on the roof's usual days.
  afterMax: [
    { place: 'Gekkoukan High · Rooftop Garden', time: 'After School', scene: [
      { music: 'tender' },
      { n: "The garden was asleep under its straw, and the roof was the color of a pigeon, and the wind came across it hard and steady and smelling of snow that hadn't decided yet. Haru was kneeling at the end of the south planter anyway, in gloves and the cream scarf, with a paper bag of something beside her that rattled faintly when the wind caught it." },
      { s: 'haru', f: 'happy', t: "Tulips. They go in now, in the cold, and sleep until April. It's the only way they'll come up. They have to believe it's been winter for a long time first." },
      { n: "She showed Solar how deep, three times the height of the bulb, and which way up, the pointed end, always, and they worked along the planter making holes with their fingers in the cold black soil under the straw and dropping the bulbs in one by one like letters into a post box." },
      { s: 'haru', f: 'neutral', t: "I may not see them. I don't know where I'll be in April, or who I'll be arguing with. Someone will come up here in April to eat their lunch and find a row of red tulips nobody planted, and they'll be so surprised." },
      { s: 'haru', f: 'happy', t: "I think that might be my favorite thing I've ever done. Surprising a stranger, on purpose, months later." },
      { n: "She said it with her nose pink and her breath going away from her in the wind in small white flags, and Solar thought of a room at the end of a hall with the sheets turned down at one corner, and somebody, somewhere, months ago, planting all of it in the cold for a stranger to find. She didn't say so. It didn't feel like the kind of thing you said on a roof with your hands in the dirt. It felt like the kind of thing you carried down the stairs and thought about later, in bed, with the light off." },
      { choose: [
        { t: "(Plant the last one yourself, and don't tell her where.)", notes: 3, then: [
          { n: "Solar took the last bulb and walked down to the far end, past the cedar planters, and pushed it into the soil at the foot of the fence where Haru hadn't planted anything, and covered it over, and came back with her hands in her pockets." },
          { s: 'haru', f: 'surprised', t: "Where did you put it?" },
          { s: 'solar', f: 'happy', t: "Somewhere. Someone will be surprised." },
          { n: "Haru laughed out loud in the cold, delighted, and didn't ask again." }
        ] },
        { t: "What color are they?", notes: 2, then: [
          { s: 'haru', f: 'happy', t: "The packet says red. Packets lie. That's half the fun of it." }
        ] },
        { t: "Doesn't it bother you? Not seeing them?", notes: 1, then: [
          { s: 'haru', f: 'neutral', t: "A little. But they'll come up whether I'm watching or not. I find that comforting. I didn't used to." }
        ] }
      ] },
      { n: "They stood up together and looked down at the bare soil with the straw tucked back over it. There was nothing to see. There would be nothing to see for months. Haru took off one glove and laid her bare palm flat on the cold soil for a second, as if checking a fever, and put the glove back on, and said it would do, and they went down the stairs out of the wind." }
    ] },
    { place: 'Paulownia Mall · Chagall Café', time: 'Evening', scene: [
      { music: 'city' },
      { n: "Chagall Café on a winter evening was all steamed glass and the hiss of the milk wand and people coming in from the cold with their shoulders up around their ears. Haru had ordered two coffees and was tasting hers with the expression of a judge at a very small, very serious competition." },
      { s: 'haru', f: 'serious', t: "It's... perfectly nice. That's the cruelest thing I can say about a coffee. Nice." },
      { s: 'haru', f: 'happy', t: "Don't tell them I said so. They've been very kind to us." },
      { n: "She set the cup down, and from the bag at her feet took out something wrapped in a handkerchief, white cotton with a little embroidered tomato in the corner, and put it on the table and pushed it across to Solar with two fingers, the way you'd push a chess piece you'd been thinking about for a long time." },
      { n: "It was her trowel. The good one, the one she'd bought new and wanted admired, with the wooden handle gone dark and smooth where her hand went, and the blade worn bright." },
      { s: 'haru', f: 'neutral', t: "For whenever. I don't know exactly when I'll have to go up to Tokyo, or for how long, and I didn't want to be in a hurry when I gave it to you. I don't give anything in a hurry any more." },
      { n: "Solar unfolded the handkerchief the rest of the way and held the trowel by its handle, and it was warmer than it should have been, as if Haru had been carrying it in her coat all day, which, Solar realized, she probably had. There was soil still in the seam where the blade met the wood. Haru had not cleaned it. Haru cleaned everything. Solar looked at the soil and then at Haru, and Haru looked back at her over the rim of the perfectly nice coffee, and didn't explain, and didn't need to." },
      { choose: [
        { t: "I'll use it. I promise.", notes: 3, then: [
          { s: 'haru', f: 'happy', t: "Wherever you are. In whatever soil they have there. Every city has dirt, Solar-chan. It's the one thing I'm sure of." }
        ] },
        { t: "Won't you need it?", notes: 2, then: [
          { s: 'haru', f: 'happy', t: "I'll buy another one. And I'll make someone admire it. But this one has your radishes in it." }
        ] },
        { t: "I'm terrible with plants.", notes: 1, then: [
          { s: 'haru', f: 'neutral', t: "You're not. You only think you're terrible with things that need you. That isn't the same thing at all." }
        ] }
      ] },
      { n: "Solar wrapped it up again in the handkerchief and put it in her bag, carefully, between two books where it wouldn't move. Outside the steamed glass the mall lights had all come on, and people went past in coats with their breath showing, and Haru drank the rest of the perfectly nice coffee to the bottom without complaint, which was, Solar understood, a kind of see-you-soon, and a kind of practice for one." }
    ] }
  ]
});
