/* Haru Okumura · Empress. Revamp social link data (femc-game.html). Format: link fields in assets/femc/game/core.js, scene lines in scene.js.
   Friendship link. Ranks 4-10 are stubs. */
(window.FEMC_GAME_LINKS ||= []).push({
  id: 'haru', name: 'Haru Okumura', short: 'Haru', arcana: 'Empress', numeral: 'III', from: 'Persona 5',
  kind: 'visitor',
  romance: null,
  starts: '5/7',
  home: { area: 'Gekkoukan High', spot: 'Rooftop Garden', slot: 'after', days: [1, 3, 5],
          hint: 'After school on Mondays, Wednesdays and Fridays, in the planters along the Gekkoukan roof.' },
  approach: "Someone has brought the dead planters along the Gekkoukan roof back to life, and she's kneeling among them now with a trowel, a thermos and a sunhat the wind keeps trying to steal.",
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
        { t: "(Give her the seeds.)", notes: 3, then: [
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

    { todo: 'Rank 4 (see plot doc §5).' },
    { todo: 'Rank 5 (see plot doc §5).' },
    { todo: 'Rank 6 (see plot doc §5).' },
    { todo: 'Rank 7 (see plot doc §5).' },
    { todo: 'Rank 8 (see plot doc §5).' },
    { todo: 'Rank 9 (see plot doc §5).' },
    { todo: 'Rank 10 (see plot doc §5).' }
  ]
});
