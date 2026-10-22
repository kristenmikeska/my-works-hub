/* Run-ins (living world part 2, 2026-10-21): people Solar runs into while out, working or at a club. core.js runInDue:
   after an activity / shift / club practice that matches `where`, at most one every other day, each once, gated like the
   routines; the scene plays on the end of that scene. Effects are scene lines ({ bond }, { stat }, { later }).
   Each scene opens as the continuation of the one it follows, so its first line fits every activity, job or club in its
   `where`. Searchers are never at Gekkoukan or a school club; Shinjiro never after 10/3; visitors are gated with `met`.
   Order: S.E.E.S., the Persona cast, visitors, searchers (roughly by date inside each group). */
window.FEMC_GAME_RUNINS = [

  /* ── S.E.E.S. ── */
  { id: 'ri-akihiko-pier', who: 'akihiko', where: { acts: ['pier', 'beachclean'], areas: ['port'], jobs: [], clubs: [] }, slot: 'after',
    after: '5/12', until: '7/20', scene: [
      { n: "On her way back along the seafront, a pair of running shoes came up behind her at a pace that had nothing to do with jogging, went past in a gust of salt air and deodorant, stopped dead ten meters on, and came back." },
      { s: 'akihiko', f: 'neutral', t: "Solar. You walked here? From the station?" },
      { s: 'akihiko', f: 'happy', t: "That's almost four kilometers there and back. Good. Next time, run it." },
      { n: "He was jogging in place while he said it, the way other people jingle their keys, a towel around his neck and his breathing already even, as if the last ten kilometers had been a light conversation he'd had with the bay." },
      { choose: [
        { t: "Race you to the end of the pier.", stat: { courage: 1 }, then: [
          { n: "He gave her a head start without being asked, which was either manners or an insult, and caught her at the last bollard anyway, and wasn't even breathing hard, which was definitely an insult." },
          { s: 'akihiko', f: 'happy', t: "Not bad. You lead with your shoulders. Lead with your hips. Again on Saturday." }
        ] },
        { t: "I'm off duty.", then: [
          { s: 'akihiko', f: 'neutral', t: "Roadwork's never off duty." },
          { n: "But he stopped jogging. He stood at the rail beside her with his hands on his hips for one whole minute, frowning at the water as if it might try something, and for him, she was fairly sure, that counted as a vacation." }
        ] }
      ] },
      { bond: { akihiko: 1 } }
    ] },

  { id: 'ri-akihiko-ramen-counter', who: 'akihiko', where: { jobs: ['hagakure'] }, slot: 'evening',
    after: '6/1', until: '9/30', scene: [
      { n: "The last ticket of the rush was a large tonkotsu, extra chashu, two eggs, and a note squeezed into the margin in handwriting she knew from the whiteboard in the command room: *is there a way to get more protein in this.*" },
      { n: "Akihiko was at the far end of the counter in his tracksuit, still damp from roadwork, sitting very upright, the way he sat in class when he hadn't done the reading." },
      { s: 'akihiko', f: 'surprised', t: "You work here? Since when?" },
      { s: 'akihiko', f: 'neutral', t: "Don't tell Junpei. He'll want a discount. He'll want *my* discount, and I don't even have one." },
      { choose: [
        { t: "(Slip a third egg into his bowl.)", stat: { kindness: 1 }, then: [
          { n: "She slid the bowl across with the third egg hidden under a slice of chashu like contraband, and he found it four bites in and looked up at her with an expression of such pure, uncomplicated gratitude that she had to go and wipe a counter that was already clean." }
        ] },
        { t: "It's ramen. The protein is the pork.", stat: { knowledge: 1 }, then: [
          { s: 'akihiko', f: 'serious', t: "...The pork. Right. How much pork?" },
          { n: "She told him. He did the math on a napkin. Then he ordered a side plate of chashu and ate it with the focus of a man completing a set." }
        ] }
      ] },
      { bond: { akihiko: 1 } }
    ] },

  { id: 'ri-akihiko-bathhouse', who: 'akihiko', where: { acts: ['bathhouse', 'electricbath'] }, slot: 'evening',
    after: '11/1', until: '1/28', route: { akihiko: 'romance' }, scene: [
      { n: "When she came out of the bathhouse, pink to the ears and her hair still damp at the ends, the cold hit her all at once, and so did Akihiko, who was coming the other way at the end of his evening run and very nearly went through her." },
      { s: 'akihiko', f: 'surprised', t: "—Sorry. Solar. Your hair's wet." },
      { s: 'solar', f: 'neutral', t: "That's what happens in a bath." },
      { s: 'akihiko', f: 'serious', t: "It's eight degrees." },
      { n: "He took the towel from around his neck, looked at it, decided it wasn't fit for a person, and gave her his windbreaker instead, still warm from him, and zipped it to her chin himself before she could tell him she was fine, because he knew she was going to tell him she was fine." },
      { choose: [
        { t: "Walk me home, then.", stat: { courage: 1 }, then: [
          { n: "He said he'd been going that way anyway, which was a lie, since he'd been going the other way, at speed. They walked back slower than either of them walked anywhere. Somewhere near the station his hand found the sleeve of his own jacket on her arm and stayed there, as if checking it was still doing its job." }
        ] },
        { t: "(Pull the collar up. It smells like him.)", then: [
          { n: "It smelled like cold air and laundry soap and, faintly, the gym, and she put her nose in the collar and didn't say anything, and he looked at the road ahead very hard, and his ears went red in a way that had nothing to do with the temperature." }
        ] }
      ] },
      { bond: { akihiko: 1 } }
    ] },

  { id: 'ri-yukari-boutique', who: 'yukari', where: { acts: ['boutique'] },
    after: '4/20', until: '6/30', scene: [
      { n: "She was handing back the last hanger when the curtain of the next changing room flew open and Yukari stepped out holding a pink top in each hand, with the face of someone who had been in there for twenty minutes and had begun to lose her grip on what pink was." },
      { s: 'yukari', f: 'surprised', t: "Oh, thank God. A person with eyes. Pink or the other pink?" },
      { choose: [
        { t: "The first pink.", then: [
          { s: 'yukari', f: 'neutral', t: "That's what I thought. That's what I *thought*. Okay. Validated. I'm buying the second one." }
        ] },
        { t: "Neither. That blue one on the rack behind you.", stat: { charm: 1 }, then: [
          { n: "Yukari turned and regarded the blue one for a long, suspicious moment, as if it had been planted there to test her, and went back in with it, and came out, and looked at herself in the long mirror with her mouth slightly open." },
          { s: 'yukari', f: 'blushing', t: "...Okay. You're kind of dangerous. Don't tell anyone I own something that isn't pink." }
        ] }
      ] },
      { bond: { yukari: 1 } }
    ] },

  { id: 'ri-yukari-fence', who: 'yukari', where: { clubs: ['club-tennis'] },
    after: '4/22', until: '7/12', scene: [
      { n: "On her way off the courts, the ball cart squeaking along behind her on its one bad wheel, she found Yukari leaning on the chain-link from the archery side, arm guard still on, holding a bottle of water she had clearly forgotten she was holding." },
      { s: 'yukari', f: 'neutral', t: "So you're a tennis person now. Since when are you a tennis person?" },
      { s: 'yukari', f: 'serious', t: "Your serve's scary, by the way. That's a compliment. The first-years flinch." },
      { n: "The range let out onto the same path, which meant Yukari had been standing there long enough to watch most of a drill and was now pretending she'd just walked up. Solar let her have it." },
      { later: { delay: 1, slot: 'evening', msgs: [
        { from: 'yukari', t: "the tennis girls were talking about you in the locker room" },
        { from: 'yukari', t: "good things. mostly. one of them thinks you're a spy" },
        { from: 'solar', t: "a spy from where" },
        { from: 'yukari', t: "she didn't say. she just said it with her whole chest" }
      ] } },
      { bond: { yukari: 1 } }
    ] },

  { id: 'ri-junpei-arcade', who: 'junpei', where: { acts: ['arcade', 'crane'] },
    after: '4/20', until: '7/12', flags: ['joined-junpei'], cast: { arcadekid: 'Middle-schooler' }, scene: [
      { n: "On her way out past the fighting cabinets she heard a noise she knew, the long, wounded groan of Junpei Iori losing, and found him slumped over a joystick while on the other side of the machine a middle-schooler in a cap calmly unwrapped a lollipop." },
      { s: 'junpei', f: 'sad', t: "He's a demon. He's twelve and he's a demon. He read me like a manga." },
      { s: 'arcadekid', t: "Eleven." },
      { s: 'junpei', f: 'surprised', t: "ELEVEN?" },
      { choose: [
        { t: "(Put in a coin. Avenge him.)", stat: { courage: 1 }, then: [
          { n: "She lost the first round on purpose to see what the kid did, and won the next two with the move he'd done it with, and he looked at her for a long, flat moment and then held out his lollipop wrapper like a defeated general handing over his sword." },
          { s: 'junpei', f: 'happy', t: "THAT'S my leader! You see that, kid? That's S.E— that's my *classmate*." }
        ] },
        { t: "You lost to an eleven-year-old.", then: [
          { s: 'junpei', f: 'serious', t: "I lost to a *prodigy*. There's a difference. He's gonna be famous. I'll be in his autobiography." },
          { n: "The kid, overhearing, said he didn't think he'd mention Junpei. Junpei took it about as well as could be expected, which was to say he bought all three of them a melon soda and sulked into his." }
        ] }
      ] },
      { bond: { junpei: 1 } }
    ] },

  { id: 'ri-junpei-konbini', who: 'junpei', where: { jobs: ['konbini'] }, slot: 'evening',
    after: '5/1', until: '8/31', flags: ['joined-junpei'], scene: [
      { n: "At ten past ten the door chimed, and Junpei came in wearing flip-flops and his cap backwards, did a full lap of the store without seeing her, and arrived at the counter with four cup ramen, a manga magazine and a bag of shrimp chips the size of a pillow." },
      { s: 'junpei', f: 'surprised', t: "Wait. WAIT. You work here? Since when do you work here?" },
      { s: 'junpei', f: 'happy', t: "So, hypothetically. Is there a friends and family discount? A friends and family and comrades-in-arms discount?" },
      { choose: [
        { t: "There's a discount for me not telling Yukari what you're having for dinner.", stat: { charm: 1 }, then: [
          { s: 'junpei', f: 'sad', t: "That's blackmail. That's... okay, that's actually fair. That's a fair price." }
        ] },
        { t: "(Ring him up. Throw in chopsticks for every cup.)", stat: { kindness: 1 }, then: [
          { n: "He looked at the four pairs of chopsticks in the bag as if they were a personal kindness, which, at ten at night on Port Island, she supposed they were." }
        ] }
      ] },
      { n: "He left with the bag swinging and a solemn promise to tell absolutely nobody where she worked, which meant the whole dorm would know by breakfast." },
      { bond: { junpei: 1 } }
    ] },

  { id: 'ri-mitsuru-library', who: 'mitsuru', where: { clubs: ['club-library'] },
    after: '5/7', until: '7/16', scene: [
      { n: "She was stamping the last of the returns when a stack of six hardbacks was set down on the desk with great care, and a voice above them said, very quietly, that it wished to report an offense." },
      { s: 'mitsuru', f: 'neutral', t: "These are overdue. By eleven days. I've calculated the fine. Forty-four yen. I have exact change." },
      { s: 'mitsuru', f: 'sad', t: "The student council president. Eleven days. If this gets out, I'll never be able to ask anyone to return anything again." },
      { choose: [
        { t: "I'll waive it. Committee discretion.", then: [
          { s: 'mitsuru', f: 'neutral', t: "Absolutely not. The rules apply to everyone or they apply to no one. Forty-four yen. I'd like a receipt." },
          { n: "There was no receipt book. Solar wrote one on the back of a returns slip, signed it, and stamped it with the date stamp for good measure, and Mitsuru folded it once and put it in her planner as if it were a legal document." }
        ] },
        { t: "(Take the money. Say nothing. Keep her secret.)", stat: { kindness: 1 }, then: [
          { n: "Solar took the forty-four yen, logged the books, and said nothing at all, and Mitsuru gave her the small, grave nod people give each other in war films after an extraction, and left without a sound." }
        ] }
      ] },
      { bond: { mitsuru: 1 } }
    ] },

  { id: 'ri-mitsuru-wildduck', who: 'mitsuru', where: { acts: ['wildduck'] },
    after: '6/14', until: '9/30', cast: { duckclerk: 'Wild-Duck clerk' }, scene: [
      { n: "She was balling up her burger wrapper when she noticed the line at the counter hadn't moved in some time, and that the reason was Mitsuru Kirijo, standing in front of the menu board with her arms folded, reading it the way she read a quarterly report." },
      { s: 'duckclerk', t: "...Ma'am? Whenever you're ready." },
      { s: 'mitsuru', f: 'neutral', t: "I'm considering. There's a great deal to consider. What, precisely, is in the Mystery Burger?" },
      { s: 'duckclerk', t: "That's, um. That's the mystery, ma'am." },
      { choose: [
        { t: "(Step in and order for her.)", stat: { kindness: 1 }, then: [
          { n: "Solar ordered her the cheeseburger set with a melon soda, the safe one, the one that had never hurt anybody, and Mitsuru received the tray with both hands like a diploma and ate at the window counter with a knife and fork she'd asked for and then, halfway through, quietly abandoned." },
          { s: 'mitsuru', f: 'surprised', t: "...It's very good. Why has no one told me it was this good?" }
        ] },
        { t: "(Let her order the Mystery Burger. She'll survive.)", stat: { courage: 1 }, then: [
          { n: "She ordered it. She ate all of it with total composure, and at the end dabbed her mouth with a napkin and said she would be speaking to the Group's food safety division in the morning, and Solar genuinely could not tell whether it was a joke." },
          { s: 'mitsuru', f: 'neutral', t: "It was... an experience. I would do it again. Don't tell Akihiko." }
        ] }
      ] },
      { later: { delay: 2, slot: 'evening', msgs: [
        { from: 'mitsuru', t: "I returned to that establishment today. Alone. I ordered without assistance." },
        { from: 'mitsuru', t: "The clerk applauded. I'm told that isn't customary." },
        { from: 'solar', t: "it is now" }
      ] } },
      { bond: { mitsuru: 1 } }
    ] },

  { id: 'ri-fuuka-computer-room', who: 'fuuka', where: { clubs: ['club-gaming'] }, days: [3],
    after: '6/20', until: '10/3', scene: [
      { n: "When the club packed up and the computer room emptied out, one machine at the back stayed on with its case open, and Fuuka was kneeling beside it with a tiny screwdriver held in her teeth and a look of complete peace." },
      { s: 'fuuka', f: 'surprised', t: "Mm— oh! Solar-senpai. Sorry. Somebody spilled tea in this one in May and never told anyone. It's been dying very slowly. I'm keeping it company." },
      { s: 'fuuka', f: 'happy', t: "Could you hold the light? Just there. It's a capacitor. They're like people. They puff up a little before they go." },
      { choose: [
        { t: "(Hold the light steady.)", stat: { proficiency: 1 }, then: [
          { n: "She held the light. Fuuka talked to the machine the whole time, apologizing to it, encouraging it, and when the case was back on and she pressed the power button it hummed awake, and she made a small private noise of joy and patted it on top like a dog." }
        ] },
        { t: "How do you know all this?", stat: { knowledge: 1 }, then: [
          { s: 'fuuka', f: 'neutral', t: "I don't, really. I just... listen to them. They tell you where it hurts, if you're quiet long enough." },
          { n: "She said it the way somebody else would say they were good at math, and then went pink and changed the subject to the club's appalling keyboard hygiene." }
        ] }
      ] },
      { bond: { fuuka: 1 } }
    ] },

  { id: 'ri-fuuka-groceries', who: 'fuuka', where: { areas: ['strip'], acts: ['vending'] }, slot: 'after',
    after: '6/20', until: '11/30', scene: [
      { n: "On her way back toward the station she passed Fuuka standing very still on the pavement with a grocery bag in each hand, both too heavy, and a sticky note stuck to the back of one wrist that said, in her small neat writing, *miso (which one??)*." },
      { s: 'fuuka', f: 'sad', t: "There were eleven kinds. I stood there for twenty minutes. A lady asked me if I was lost." },
      { s: 'fuuka', f: 'happy', t: "So I bought three. One of them has to be right." },
      { choose: [
        { t: "(Take one of the bags.)", stat: { kindness: 1 }, then: [
          { n: "Solar took the heavier one without asking, and Fuuka protested exactly once and then let her, and they walked back the long way, past the river, Fuuka explaining the recipe step by step as if rehearsing it for an exam she was fairly sure she was going to fail." }
        ] },
        { t: "What are you making?", then: [
          { s: 'fuuka', f: 'neutral', t: "Curry. Everyone says curry is impossible to ruin." },
          { s: 'fuuka', f: 'sad', t: "I think everyone is being kind." }
        ] }
      ] },
      { later: { delay: 1, slot: 'evening', msgs: [
        { from: 'fuuka', t: "the curry worked!! mostly!!" },
        { from: 'fuuka', t: "there's a lot of it. please come home hungry" }
      ] } },
      { bond: { fuuka: 1 } }
    ] },

  { id: 'ri-aigis-sea', who: 'aigis', where: { acts: ['pier', 'beachclean'], areas: ['port'] }, slot: 'after',
    after: '7/27', until: '10/31', flags: ['joined-aigis'], scene: [
      { n: "Halfway down the pier a girl was standing at the rail so still that a gull had landed beside her hand, and it was only up close that Solar saw the gull was being watched, very intently, and that the girl was Aigis." },
      { s: 'aigis', f: 'neutral', t: "Solar-san. I am observing the sea." },
      { s: 'aigis', f: 'neutral', t: "It has moved four hundred and twelve times since I arrived. None of them were the same. I am attempting to find the pattern." },
      { choose: [
        { t: "There isn't one. That's the point.", stat: { knowledge: 1 }, then: [
          { s: 'aigis', f: 'surprised', t: "...Is that so? Then I have been doing this incorrectly for forty minutes." },
          { n: "She didn't look as if she minded. She went on watching anyway, and Solar stood with her, and the gull stayed, having decided they were furniture." }
        ] },
        { t: "(Watch it with her.)", stat: { kindness: 1 }, then: [
          { n: "They watched it together without speaking. Aigis reported the number at intervals. At four hundred and thirty she stopped counting, and said in the same level voice that she thought she understood now why people came here, and didn't explain, and didn't need to." }
        ] }
      ] },
      { bond: { aigis: 1 } }
    ] },

  { id: 'ri-aigis-music-room', who: 'aigis', where: { clubs: ['club-band'] },
    after: '9/1', until: '12/20', flags: ['joined-aigis'], scene: [
      { n: "When the last chord died and the band started arguing about whose fault the bridge was, Solar opened the music room door to let some air in and found Aigis standing directly outside it, perfectly upright, hands folded, as if someone had placed her there." },
      { s: 'aigis', f: 'neutral', t: "I was not eavesdropping. I was listening from an adjacent position." },
      { s: 'aigis', f: 'neutral', t: "The drummer said the song needs more groove. I have searched my memory. I do not have a definition of groove." },
      { choose: [
        { t: "It's when your foot moves without asking you.", stat: { charm: 1 }, then: [
          { s: 'aigis', f: 'flustered', t: "...My foot did move. During the second song. I believed it was a malfunction." },
          { n: "She looked down at her own shoe with a new and cautious respect." }
        ] },
        { t: "(Invite her in.)", stat: { kindness: 1 }, then: [
          { n: "She stood very still in the corner for the next song, and at the end the bassist, who was afraid of nothing, asked her what she thought, and Aigis said it had groove, with total confidence, and the whole band took it as the highest compliment they had ever been paid." }
        ] }
      ] },
      { bond: { aigis: 1 } }
    ] },

  { id: 'ri-ken-matinee', who: 'ken', where: { acts: ['cinema'] },
    after: '8/8', until: '10/3', flags: ['joined-ken'], scene: [
      { n: "On her way out of the theater she passed the line for the other screen, the matinee, and a boy in it who turned very quickly to study a poster for a documentary about the ocean floor." },
      { s: 'ken', f: 'neutral', t: "Solar-san. Good afternoon. I'm here for the documentary." },
      { n: "In his hand, in plain view, was a ticket for the Featherman R summer movie. On his backpack, not quite zipped in, was a red Featherman visor." },
      { choose: [
        { t: "Me too. I love the ocean floor.", stat: { kindness: 1 }, then: [
          { n: "Ken looked at her with the careful face of a boy deciding whether he'd been caught, and decided he hadn't, and that she was simply another person with a serious interest in the ocean floor, and they parted at the doors with a polite bow each, and she was almost certain she heard the visor go on before the lights went down." }
        ] },
        { t: "That's a Featherman ticket.", then: [
          { s: 'ken', f: 'serious', t: "...It's research. For a school report. On narrative structure." },
          { n: "He was ten. He said *narrative structure* like he'd practiced it in a mirror. She let him go in with his dignity intact, and his visor, she noticed, already on." }
        ] }
      ] },
      { bond: { ken: 1 } }
    ] },

  { id: 'ri-koromaru-leaf', who: 'koromaru', where: { acts: ['pray', 'fortune', 'shrinesweep'], jobs: ['amulets'] }, slot: 'after',
    after: '8/8', until: '1/20', scene: [
      { n: "Before she left the shrine she felt something warm lean against the backs of her knees, and looked down, and Koromaru was sitting in the gravel with his tail going, as if the two of them had arranged to meet." },
      { s: 'koromaru', f: 'happy', t: "Woof!" },
      { n: "He'd brought a leaf. He set it on her shoe with great ceremony and looked up at her, then over at the offering box, then back, the way he did, as if the shrine were an old friend of his he wanted her to meet properly." },
      { choose: [
        { t: "(Sit on the steps with him a while.)", stat: { kindness: 1 }, then: [
          { n: "She sat on the stone steps and he lay down against her hip with a sigh like a much older dog, and they watched the light go long across the gravel, and nobody came, and that was the nicest part." }
        ] },
        { t: "Thank you for the leaf.", then: [
          { s: 'koromaru', f: 'happy', t: "Arf!" },
          { n: "She put it in her pocket. He watched her do it and seemed satisfied, and walked her as far as the torii and no further, and sat down there to see her off." }
        ] }
      ] },
      { bond: { koromaru: 1 } }
    ] },

  { id: 'ri-shinjiro-alley', who: 'shinjiro', where: { acts: ['alley'] }, slot: 'evening',
    after: '6/1', until: '10/3', noFlags: ['shinjiro-coma'], scene: [
      { n: "Halfway down the alley, where the light from the station gave out and the air started to smell of old rain and somebody else's cigarette, a voice from a doorway said, without much interest, that she was going the wrong way." },
      { s: 'shinjiro', f: 'neutral', t: "This ain't a shortcut. It's a long cut. With worse people in it." },
      { n: "Shinjiro peeled himself off the wall, hands in his coat pockets, beanie low, and fell into step beside her without asking, the way a person walks somebody out of a burning building when he doesn't want to make a thing of it." },
      { choose: [
        { t: "I can handle myself.", stat: { courage: 1 }, then: [
          { s: 'shinjiro', f: 'neutral', t: "Yeah. I know. That's what bugs me." },
          { n: "He walked her to the end of it anyway, to where the neon started, and stopped exactly on the line between dark and lit as if it were a rule, and went back the way they'd come." }
        ] },
        { t: "Thanks, Shinjiro.", then: [
          { s: 'shinjiro', f: 'neutral', t: "Don't. Just go round next time." },
          { n: "He said it to the street. At the mouth of the alley he jerked his chin at the station and waited, and didn't leave until she was under the lights, and she knew because she turned back to check, and he was still there, pretending not to be." }
        ] }
      ] },
      { bond: { shinjiro: 1 } }
    ] },

  { id: 'ri-shinjiro-konbini', who: 'shinjiro', where: { jobs: ['konbini'] }, slot: 'evening',
    after: '8/8', until: '10/3', flags: ['joined-shinjiro'], noFlags: ['shinjiro-coma'], scene: [
      { n: "Near the end of her shift the door chimed and Shinjiro came in, did not look at her, and walked the aisles with a basket like a man on a mission he'd never admit to: eggs, a bag of flour, milk, green onions, and, last, set down on the counter with a defiant thump, a can of premium dog food." },
      { s: 'shinjiro', f: 'neutral', t: "Don't say anything." },
      { choose: [
        { t: "(Say nothing. Bag it carefully, eggs on top.)", stat: { kindness: 1 }, then: [
          { n: "She bagged the eggs on top. He watched her do it, and something in his face moved half a millimeter toward approval, and he paid in exact change and left without a word, the bag held level the whole way out the door." }
        ] },
        { t: "Koromaru's lucky.", then: [
          { s: 'shinjiro', f: 'surprised', t: "...It was on sale." },
          { n: "It was not on sale. The price was printed right there on the shelf tag. She rang it up at full price and didn't say so, and he pulled his beanie down another centimeter on his way out, which she had come to understand was what he did instead of blushing." }
        ] }
      ] },
      { bond: { shinjiro: 1 } }
    ] },

  /* ── The Persona cast (they live around here) ── */
  { id: 'ri-rio-burger', who: 'rio', where: { acts: ['wildduck'] },
    after: '4/23', until: '7/15', scene: [
      { n: "On her way out she passed a corner booth where a girl in a Gekkoukan tennis jacket was working through a large Mystery Burger with the grim efficiency of an athlete refueling, and it took a second look to see that it was Rio, and a third for Rio to see her." },
      { s: 'rio', f: 'surprised', t: "—Solar! Oh, no. No. You didn't see this." },
      { s: 'rio', f: 'flustered', t: "I tell the first-years to eat clean. I gave a whole *speech*. Grilled chicken, rice, vegetables. If they find out their captain eats one of these after every practice, it's over. Mutiny." },
      { choose: [
        { t: "Your secret's safe. Pass the fries.", stat: { charm: 1 }, then: [
          { s: 'rio', f: 'happy', t: "...Deal. Accomplice." },
          { n: "She pushed the fries into the middle of the table and they split them in conspiratorial silence, and every time the door opened Rio checked it for first-years." }
        ] },
        { t: "A captain should lead by example.", then: [
          { s: 'rio', f: 'sad', t: "I know. I know. Next week. Starting next week." },
          { n: "She finished the burger with the face of a woman fully committed to next week." }
        ] }
      ] },
      { later: { delay: 3, slot: 'evening', msgs: [
        { from: 'rio', t: "thursday. same booth. bring cash. tell no one." },
        { from: 'solar', t: "is this a burger or a heist" },
        { from: 'rio', t: "yes" }
      ] } },
      { bond: { rio: 1 } }
    ] },

  { id: 'ri-rio-cram', who: 'rio', where: { acts: ['cafestudy', 'library'] }, slot: 'after',
    after: '9/24', until: '10/18', scene: [
      { n: "As she was packing up her notes, somebody slid into the seat across from her, dropped a math textbook on the table like a confession, and put her forehead down on it." },
      { s: 'rio', f: 'sad', t: "Midterms. I've been doing serves in my head instead of formulas. I can tell you the angle of a slice to the degree. I can't tell you what a derivative is." },
      { choose: [
        { t: "(Walk her through one problem. Slowly.)", stat: { knowledge: 1 }, then: [
          { n: "She did one with her, then Rio did one alone, wrong, and then one alone, right, and sat back with the face she made on the court when a drill finally clicked, fierce and a little surprised at herself." },
          { s: 'rio', f: 'happy', t: "Okay. Okay! It's footwork. You just do the steps in order." }
        ] },
        { t: "Think of it like a serve.", then: [
          { s: 'rio', f: 'surprised', t: "...Huh. So the slope is the... toss? No. Don't tell me. I'm going to figure out how this is a serve." },
          { n: "She never did work out how it was a serve. But she finished the page out of pure competitive spite, which Solar suspected was how Rio had learned most things." }
        ] }
      ] },
      { bond: { rio: 1 } }
    ] },

  { id: 'ri-saori-poetry', who: 'saori', where: { jobs: ['bookworms'] },
    after: '4/30', until: '9/30', scene: [
      { n: "She was halfway up the stepladder with an armful of paperbacks when a small voice from the poetry shelf asked whether they had anything by a particular poet, and then apologized for asking, and then apologized for apologizing." },
      { s: 'saori', f: 'surprised', t: "Oh! Solar. I didn't know you worked here. I'm sorry, I'm interrupting." },
      { s: 'saori', f: 'neutral', t: "It's the collection with the moon over the river. I had a copy. I lent it to someone and it never came back. I don't mind. I just... miss reading it." },
      { choose: [
        { t: "(Climb down and look properly with her.)", stat: { kindness: 1 }, then: [
          { n: "They went through the poetry shelf spine by spine. It wasn't there, but a box of poetry had come in on Thursday and not been sorted yet, and it was third from the top, a little water-stained, with somebody else's pencil notes in the margins, and Saori held it the way people hold small animals." },
          { s: 'saori', f: 'happy', t: "Someone underlined the same lines I did. Look. Isn't that strange? Isn't that nice?" }
        ] },
        { t: "I'll keep an eye out for it.", then: [
          { s: 'saori', f: 'happy', t: "Would you? You don't have to. But... would you?" },
          { n: "She wrote the title on the back of a library slip in very neat handwriting, and Solar tucked it into the register drawer, under the tray, where the notes that mattered went." }
        ] }
      ] },
      { bond: { saori: 1 } }
    ] },

  { id: 'ri-ann-crepe', who: 'ann', where: { acts: ['boutique', 'chagall'] },
    after: '4/26', until: '7/31', scene: [
      { n: "On her way out she nearly walked into a crepe, strawberry and cream, held at eye level, and behind it Ann Takamaki, who had stopped dead in the middle of the concourse to look at Solar's outfit from the shoes up." },
      { s: 'ann', f: 'serious', t: "Okay, wait. Turn around. ...The jacket's fighting you." },
      { s: 'ann', f: 'happy', t: "It's not *bad*. It's a good jacket. It's just wearing you instead of the other way round. Push the sleeves up. No, more. Like you've got somewhere to be." },
      { choose: [
        { t: "(Push the sleeves up.)", stat: { charm: 1 }, then: [
          { s: 'ann', f: 'happy', t: "THERE. See? Now you look like you're about to do something. Now people are going to wonder what." },
          { n: "She took a triumphant bite of the crepe and got cream on her nose and didn't notice, and Solar decided it would be cruel to tell her and crueler not to, and told her, and Ann laughed so hard she had to sit down on the edge of the fountain." }
        ] },
        { t: "I like it fighting me.", stat: { courage: 1 }, then: [
          { s: 'ann', f: 'surprised', t: "...Oh. Okay. That's actually a whole look. Own it." },
          { n: "She studied Solar a moment longer with real professional respect, and then held out the crepe for a bite, which, Solar gathered from her face, was not an honor she handed out lightly." }
        ] }
      ] },
      { later: { delay: 2, slot: 'evening', msgs: [
        { from: 'ann', t: "found a jacket that won't fight you!!" },
        { from: 'ann', t: "it's at the mall. i'm making you try it on. crepes after. this is not a request" }
      ] } },
      { bond: { ann: 1 } }
    ] },

  { id: 'ri-ann-sunflower', who: 'ann', where: { jobs: ['flowers'] },
    after: '5/1', until: '10/25', scene: [
      { n: "Late in the afternoon a pair of sunglasses stopped in front of the sunflower bucket, considered it for a long time, and pushed up into blond pigtails, and it was Ann, in a jacket too nice for the mall, with a portfolio under one arm." },
      { s: 'ann', f: 'happy', t: "One. Just one. The tallest one you've got, please." },
      { s: 'ann', f: 'neutral', t: "My hotel window looks straight into a parking garage. I figure if I put a sunflower in it, at least one of us has a view." },
      { choose: [
        { t: "(Pick the best one and wrap it properly.)", stat: { kindness: 1 }, then: [
          { n: "Solar chose the one with the straightest stem and its face turned most toward the light, and wrapped it in brown paper with a twist of raffia the way the owner had shown her, and Ann carried it away down the concourse held up in front of her like a torch." }
        ] },
        { t: "Want a second one for company?", then: [
          { s: 'ann', f: 'happy', t: "No. One. Then it's the only thing in the window and it has to try really hard." },
          { n: "She said it like it was obvious. Solar wrapped the one, and thought about it for the rest of the shift." }
        ] }
      ] },
      { bond: { ann: 1 } }
    ] },

  { id: 'ri-kasumi-steps', who: 'kasumi', where: { acts: ['pray', 'fortune', 'shrinesweep'], jobs: ['amulets'] }, slot: 'after',
    after: '5/3', until: '8/31', scene: [
      { n: "Before she left the shrine, footsteps came up the stone stairs two at a time behind her, fast and light and perfectly even, and Kasumi Yoshizawa arrived at the top in a tracksuit, touched the torii with one hand like a swimmer touching the wall, and turned straight round to go back down." },
      { s: 'kasumi', f: 'surprised', t: "Oh! Senpai! Sorry, I'm counting. That's eleven." },
      { s: 'kasumi', f: 'happy', t: "Twenty, up and down. Coach would say fifteen. But fifteen doesn't scare me anymore, so." },
      { choose: [
        { t: "Want someone to count with you?", stat: { courage: 1 }, then: [
          { n: "Solar did four with her, which was three more than her legs had agreed to, and at the bottom of the fourth Kasumi bounced on her toes and told her that her form was very good for someone who was clearly dying, and meant it entirely as a compliment." }
        ] },
        { t: "(Hand her your water.)", stat: { kindness: 1 }, then: [
          { s: 'kasumi', f: 'happy', t: "Senpai. You're a lifesaver. I always leave mine on the bench at the bottom, and then I'm up here thinking about it like a mirage." },
          { n: "She drank half, gave it back with a little bow, and went down two at a time again, her hair ribbon bouncing in perfect time." }
        ] }
      ] },
      { bond: { kasumi: 1 } }
    ] },

  { id: 'ri-kasumi-fortune', who: 'kasumi', where: { acts: ['fortune', 'pray'] }, slot: 'after',
    after: '11/1', until: '1/20', scene: [
      { n: "At the fortune tree, among the white knots of paper, somebody was tying one with great seriousness on the second attempt, and when she turned it was Kasumi, cheeks pink with cold, holding a second fortune she was very clearly not going to tie." },
      { s: 'kasumi', f: 'sad', t: "Bad luck. *Great* bad luck. It says my next competition won't go as I hope and I should watch my step on stairs." },
      { s: 'kasumi', f: 'neutral', t: "So I tied it. That's what you do, right? You leave the bad one here and it stays here. And then I drew another one. Just in case." },
      { choose: [
        { t: "What did the second one say?", then: [
          { s: 'kasumi', f: 'happy', t: "Small luck! Small luck is fine. Honestly, small luck is my favorite. You can do a lot with small luck." }
        ] },
        { t: "(Draw one too, and tie it beside hers.)", stat: { courage: 1 }, then: [
          { n: "Hers was middle luck, which said nothing at all about stairs. She tied it on the branch next to Kasumi's so the bad one would have company, and Kasumi looked at the two little knots side by side and smiled as if that settled something." }
        ] }
      ] },
      { bond: { kasumi: 1 } }
    ] },

  { id: 'ri-haru-pourover', who: 'haru', where: { jobs: ['chagall'] },
    after: '5/9', until: '10/31', scene: [
      { n: "A little after four a girl with soft curls ordered a single-origin pour-over and then asked, very politely, whether she might see the bag the beans had come from, and Solar turned round with it to find Haru Okumura reading the label with the quiet intensity of someone who knew exactly what she was looking for." },
      { s: 'haru', f: 'neutral', t: "Ah. A medium roast. They've done their best. It's a little tired, I think. It was roasted a while ago." },
      { s: 'haru', f: 'happy', t: "Please don't tell your manager I said so. It's still lovely. Everything is lovely if somebody makes it carefully." },
      { choose: [
        { t: "(Make hers carefully. Slower than the manual says.)", stat: { proficiency: 1 }, then: [
          { n: "She poured in slow circles, letting the grounds bloom, and Haru watched the whole thing over the counter, and at the end took one sip and closed her eyes." },
          { s: 'haru', f: 'happy', t: "There. You see? Not tired at all. It only needed attention." }
        ] },
        { t: "What would you do with them?", stat: { knowledge: 1 }, then: [
          { s: 'haru', f: 'happy', t: "Oh, a cold brew, I think. Slow, overnight. Old beans like time. Most things do." },
          { n: "She wrote the ratios on a napkin in tidy handwriting and left it under her saucer with a tip far too large, and Solar kept the napkin." }
        ] }
      ] },
      { bond: { haru: 1 } }
    ] },

  { id: 'ri-kuromi-crane', who: 'kuromi', where: { acts: ['crane', 'arcade'] },
    after: '6/12', until: '10/31', scene: [
      { n: "On her way out past the crane games she heard someone hissing at a machine, and found Kuromi with both palms flat on the glass, glaring at a pink plush rabbit with a flower on its ear as if it had personally insulted her." },
      { s: 'kuromi', f: 'serious', t: "Don't. Say. Anything." },
      { s: 'kuromi', f: 'flustered', t: "It's not because it's cute. It's for *target practice*. I'm going to put it on my shelf and look at it and be better than it every single day." },
      { choose: [
        { t: "(Win it for her.)", stat: { proficiency: 1 }, then: [
          { n: "Solar studied the claw for two tries and got it by the ear on the third, and Kuromi took the rabbit out of the chute, held it at arm's length, announced that it was ugly and that she hated it, and walked off with it tucked under her arm, carefully, flower on top so it wouldn't crush." }
        ] },
        { t: "It's a little bit cute.", stat: { courage: 1 }, then: [
          { s: 'kuromi', f: 'surprised', t: "IT IS NOT." },
          { s: 'kuromi', f: 'serious', t: "...Fine. It's a little bit cute. That makes it MORE dangerous. Give me a hundred yen." }
        ] }
      ] },
      { bond: { kuromi: 1 } }
    ] },

  { id: 'ri-kuromi-karaoke', who: 'kuromi', where: { acts: ['karaoke'] }, slot: 'evening',
    after: '7/1', until: '12/20', scene: [
      { n: "She came out of her booth into a corridor shaking with sound from the one next door, somebody belting a power ballad at a volume the walls had not been built for, and then the door burst open and Kuromi came out with the microphone still in her hand." },
      { s: 'kuromi', f: 'surprised', t: "YOU. Were you listening? How long were you listening?" },
      { s: 'kuromi', f: 'serious', t: "That song is a declaration of WAR. It's not a love song. Everybody gets it wrong. Listen to the second verse." },
      { choose: [
        { t: "(Go in and listen to the second verse.)", stat: { charm: 1 }, then: [
          { n: "She sang the second verse straight at Solar, pointing, with total commitment, and it was still very clearly a love song, and Solar said so, and Kuromi threw a tambourine at the sofa and said fine, it was a love song about a war, and queued it again." }
        ] },
        { t: "You're really good, you know.", stat: { kindness: 1 }, then: [
          { s: 'kuromi', f: 'flustered', t: "...Shut UP." },
          { n: "She went back in and slammed the door. The next song was quieter, and she didn't stop it halfway the way she had the others, and Solar stood in the corridor till the end, which Kuromi definitely knew." }
        ] }
      ] },
      { bond: { kuromi: 1 } }
    ] },

  /* Persona 5 cameos (2026-10-21): Ann's and Kasumi's people from Tokyo, a train ride away. Light, no story weight; each one
     is gated on the link they come with (who), and uses only the faces each of them has. */
  { id: 'ri-ann-makoto-shoot', who: 'ann', where: { acts: ['pier', 'beachclean'] }, slot: 'after',
    after: '6/1', until: '7/19', cast: { makoto: 'Makoto' }, scene: [
      { n: "On her way back along the seafront there was a rope of yellow tape and a photographer and a folding rack of summer dresses flapping in the wind, and on an upturned crate just outside the tape, a girl in a neat cardigan sat with a thick exam workbook open on her knees and a highlighter in her teeth, looking up every thirty seconds at the shoot like a lifeguard counting heads." },
      { s: 'ann', f: 'happy', t: "SOLAR. Oh my god, perfect timing. Come here. This is Makoto. She came down on the early train to keep me company, and by keep me company I mean study at me." },
      { s: 'makoto', f: 'neutral', t: "I'm also making sure nobody on this crew keeps Ann past six. They tried it last time. ...You're Solar. The crepe consultant." },
      { n: "She said it the way a person reads a name off a file, politely and completely, and Solar had the brief, specific feeling of having been looked up." },
      { choose: [
        { t: "What are you studying?", stat: { knowledge: 1 }, then: [
          { s: 'makoto', f: 'happy', t: "Entrance exams. Law, eventually. It's a lot of reading. Honestly, the sea is a very good place for it. Nothing here wants to talk to me." },
          { n: "A gull landed on the rail beside her and looked at the workbook. Makoto looked back at it, level and patient, until it left, which Solar decided was the most frightening thing she'd seen all week." }
        ] },
        { t: "Does she always need a chaperone?", stat: { courage: 1 }, then: [
          { s: 'makoto', f: 'serious', t: "She doesn't need one. I just like being one. There's a difference." },
          { s: 'ann', f: 'happy', t: "She's the scary one. I told you about the scary one. Isn't she the best?" },
          { s: 'makoto', f: 'surprised', t: "Ann. You can't introduce me as the scary one." }
        ] }
      ] },
      { n: "The photographer called Ann back under the tape, and Makoto capped the highlighter and watched her go, and then said, without looking away from the shoot, that Ann talked about Port Island a lot lately, and that it was nice, and that she was glad, and turned a page." },
      { bond: { ann: 1 } }
    ] },

  { id: 'ri-ann-futaba-crane', who: 'ann', where: { acts: ['crane', 'arcade'] },
    after: '7/21', until: '8/31', cast: { futaba: 'Futaba' }, scene: [
      { n: "By the crane machines on her way out there was a small crowd of exactly two, Ann and a girl half her height in a hoodie far too warm for July, orange hair down her back and enormous glasses, standing with her nose nearly on the glass of a machine full of round white plush cats." },
      { s: 'ann', f: 'happy', t: "Solar! Okay, this is Futaba. She heard there was a limited prize down here and made me take her on the train. She's been staring at it for twenty minutes. She has a plan." },
      { s: 'futaba', f: 'serious', t: "I have a model. The claw's got a forty percent grip on the drop and the cat's center of mass is in the head. It's very simple, actually, I just haven't touched it yet because I'm still... computing." },
      { s: 'futaba', f: 'neutral', t: "...You're the one from the group chat. The photo booth. Hi. I'm not good with people I haven't seen through a screen first. Don't take it personally, it's universal." },
      { choose: [
        { t: "(Try it. Go for the head, like she said.)", stat: { proficiency: 1 }, then: [
          { n: "Solar put in a coin and lined the claw up over the cat's round head and dropped it, and the claw closed weakly and wobbled and somehow didn't let go, and the cat came up and over and into the chute like it had been waiting for permission." },
          { s: 'futaba', f: 'happy', t: "It WORKED. My model works. You're a very good hardware component." },
          { s: 'ann', f: 'happy', t: "That's the nicest thing she's ever said to anybody. I'm so jealous." }
        ] },
        { t: "Want me to stand behind you so nobody watches?", stat: { kindness: 1 }, then: [
          { n: "Futaba looked at her sideways for a long moment through the big glasses, and then nodded, once, and Solar stood at her back with Ann and blocked the aisle while she played, and on the fourth try she got it, and held the cat up over her head with both arms." },
          { s: 'futaba', f: 'happy', t: "Mweheheh. Victory. ...Thanks. That was a very efficient wall." }
        ] }
      ] },
      { n: "On the way out Futaba took a picture of the cat on the rim of the fountain and sent it somewhere, and Ann's phone buzzed in her pocket at the same time, and Ann read it and laughed, and said the group chat had voted, and the cat lived in Port Island now, and Futaba would be visiting it." },
      { bond: { ann: 1 } }
    ] },

  { id: 'ri-kasumi-maruki-books', who: 'kasumi', where: { jobs: ['bookworms'] },
    after: '6/10', until: '9/30', ranks: { kasumi: 4 }, cast: { maruki: 'Dr. Maruki' }, scene: [
      { n: "Near closing a man in a rumpled white coat over a sweater came to the counter with a stack of paperbacks so tall he had to look round the side of it, set it down, knocked the top two off, apologized to them, and picked them up again." },
      { s: 'maruki', f: 'happy', t: "Ah, sorry, sorry. I'm a bit of a klutz. I come down for a talk at the university and I always end up in a used bookstore, and then I have to carry it all home on the train." },
      { n: "Psychology, mostly, a few cookbooks, and one very old paperback on gymnastics with a cracked spine, which he set apart from the others, carefully, like it belonged to somebody else." },
      { s: 'maruki', f: 'neutral', t: "That one's a gift. One of my students. She's training down here a lot this year, at a shrine, of all places. Kasumi Yoshizawa. You wouldn't know her." },
      { choose: [
        { t: "I do, actually. She runs the shrine steps.", stat: { kindness: 1 }, then: [
          { s: 'maruki', f: 'happy', t: "Twenty at a time, yes? She told me. She said somebody counts with her now. ...Oh. You're the senpai. I've heard a lot about you." },
          { n: "He said it warmly, the way a person mentions the weather on a nice day, and Solar didn't know what to do with having been talked about kindly, so she wrapped the gymnastics book in brown paper with the corners folded properly." }
        ] },
        { t: "Do you always buy this many?", stat: { knowledge: 1 }, then: [
          { s: 'maruki', f: 'serious', t: "Every time. My apartment is mostly books and a frying pan I'm not very good with. I've been trying to learn curry. It's going... honestly, it's going badly." },
          { s: 'maruki', f: 'happy', t: "But I'm learning! That's the important part." }
        ] }
      ] },
      { n: "He paid in exact change, counted twice, and went out with the stack held against his chest, and in the window Solar watched him stop on the pavement to shift it, and drop one, and pick it up, and keep going toward the station." },
      { later: { delay: 1, slot: 'evening', msgs: [
        { from: 'kasumi', t: 'Senpai!! Dr. Maruki says he met you!' },
        { from: 'kasumi', t: 'He says you wrapped my book very nicely. I haven\'t opened it yet. I\'m saving it for after practice ✨' }
      ] } },
      { bond: { kasumi: 1 } }
    ] },

  /* ── Visitors ── */
  { id: 'ri-kiriko-amulets', who: 'kiriko', where: { jobs: ['amulets'] }, met: ['kiriko'],
    after: '6/13', until: '1/20', scene: [
      { n: "Near closing a hand reached under the stall's awning, picked up a traffic-safety charm, turned it over and held it to one ear, and Solar looked up into the sly, easy grin of Kiriko, in her hoodie, listening to the amulet like a seashell." },
      { s: 'kiriko', f: 'neutral', t: "Hm. Who blessed these?" },
      { s: 'kiriko', f: 'happy', t: "They're fine. They're good. They're just a little sleepy. You gotta wake 'em up when you hand 'em over. Here. Like this." },
      { n: "She cupped the charm in both palms, breathed on it, gave it a little shake the way you'd shake a snow globe, and handed it back as if she'd done nothing at all." },
      { choose: [
        { t: "(Try it on the next one you sell.)", stat: { charm: 1 }, then: [
          { n: "The next customer was an old man buying a health charm for his wife. Solar breathed on it and shook it and felt incredibly stupid, and the old man's face did something soft and surprised, and he said his wife used to do that, and bowed lower than he needed to." },
          { s: 'kiriko', f: 'happy', t: "Told ya." }
        ] },
        { t: "Is that a real thing?", then: [
          { s: 'kiriko', f: 'neutral', t: "Is anything? It's real if you do it like it is. That's, like, ninety percent of shrine work." },
          { n: "She bought a cat charm with her own money, breathed on it, shook it, and dropped it into Solar's apron pocket on her way out." }
        ] }
      ] },
      { bond: { kiriko: 1 } }
    ] },

  { id: 'ri-mercy-orders', who: 'mercy', where: { acts: ['clinic', 'wardvisit'] }, met: ['mercy'],
    after: '6/13', until: '10/31', scene: [
      { n: "On her way out past the nurses' station Mercy fell into step beside her, clipboard on one hip, and looked her over the way she looked over charts, top to bottom, with one eyebrow raised, as if she were grading her." },
      { s: 'mercy', f: 'neutral', t: "Hm. You look like someone who's been told to *rest more*. Your doctors here are very fond of that. It's not wrong. It's just never what anyone does." },
      { s: 'mercy', f: 'serious', t: "When did you last eat something that grew? Not something from a vending machine. Something green." },
      { choose: [
        { t: "...Define green.", stat: { charm: 1 }, then: [
          { s: 'mercy', f: 'happy', t: "That's what I thought." },
          { n: "She wrote something on a prescription pad she had no right to and tore it off, and it said *one (1) salad, to be eaten sitting down*, signed with a flourish that might have been a pair of wings." }
        ] },
        { t: "Yesterday. I think.", then: [
          { s: 'mercy', f: 'neutral', t: "You think." },
          { s: 'mercy', f: 'happy', t: "I'll take it. Soldiers have lied to me far worse. Go home. Eat. That isn't advice, it's orders." }
        ] }
      ] },
      { bond: { mercy: 1 } }
    ] },

  { id: 'ri-sebastian-frogs', who: 'sebastian', where: { jobs: ['konbini'] }, slot: 'evening', met: ['sebastian'],
    after: '6/13', until: '9/30', scene: [
      { n: "A little before eleven a black hoodie came in out of the dark, made one slow lap of the store, and set on the counter two pizza buns, an energy drink and, carefully, as if it might break, a sheet of frog stickers from the stationery rack." },
      { s: 'sebastian', f: 'surprised', t: "...Oh. It's you. Hey." },
      { s: 'sebastian', f: 'neutral', t: "The stickers are for a guy. A guy I know. He's into frogs. It's a whole thing." },
      { s: 'sebastian', f: 'neutral', t: "...Okay. I'm the guy." },
      { choose: [
        { t: "Good pick. Tree frogs are the best ones.", stat: { charm: 1 }, then: [
          { s: 'sebastian', f: 'happy', t: "Right? Everybody goes for the big green ones. The little guys are where it's at." },
          { n: "He stayed at the counter longer than a person buying pizza buns needed to, talking about frogs, then about rain, then about nothing much, until the door chimed for somebody else and he left with a half-wave, the stickers already peeled and stuck on the back of his phone." }
        ] },
        { t: "(Ring him up. Say nothing about the frogs.)", stat: { kindness: 1 }, then: [
          { n: "She bagged the stickers flat so they wouldn't crease. He noticed. He gave her a small nod, the kind that says thank you without involving the mouth, pulled his hood up, and went back out into the night." }
        ] }
      ] },
      { bond: { sebastian: 1 } }
    ] },

  { id: 'ri-aphrodite-scarves', who: 'aphrodite', where: { acts: ['boutique'] }, met: ['aphrodite'],
    after: '7/11', until: '11/30', scene: [
      { n: "In the last boutique three clerks were hovering around one woman by the mirrors, the way pigeons gather around somebody with bread, and the woman was Aphrodite, holding a silk scarf up to the light and ignoring all of them with the ease of long practice." },
      { s: 'aphrodite', f: 'happy', t: "Little sun! Come here. Settle something. Is this the color of a peach or a sunset?" },
      { choose: [
        { t: "A peach. A sunset has more red in it.", stat: { knowledge: 1 }, then: [
          { s: 'aphrodite', f: 'surprised', t: "...You're right. You're *right*. Nobody ever tells me I'm wrong about colors. They just agree." },
          { s: 'aphrodite', f: 'happy', t: "Again. Do it again with this one." },
          { n: "They did six more scarves, and Solar disagreed with her about four of them, and Aphrodite bought none and looked happier than Solar had ever seen her in that mall." }
        ] },
        { t: "On you? Neither. It's just your color.", stat: { charm: 1 }, then: [
          { s: 'aphrodite', f: 'flustered', t: "Oh, stop. That's my line. You've stolen my line." },
          { n: "She bought it. At the door she tied it around Solar's neck instead of her own, stood back to look, declared it a sunset after all, and swept off toward the fountain before Solar could give it back." }
        ] }
      ] },
      { bond: { aphrodite: 1 } }
    ] },

  { id: 'ri-judy-booth', who: 'judy', where: { acts: ['karaoke'] }, slot: 'evening', met: ['judy'],
    after: '8/10', until: '11/30', scene: [
      { n: "Two songs in, her booth's speaker started buzzing on every bass note like a trapped wasp, and when she went out to tell the clerk he was already in the corridor holding a flashlight for someone lying under the panel of the booth next door, and the someone was Judy Alvarez." },
      { s: 'judy', f: 'neutral', t: "Yours blown too? Figures. The whole floor's wired off one amp from the Stone Age." },
      { s: 'judy', f: 'happy', t: "Gimme ten minutes. Hold this. Don't let it touch that." },
      { choose: [
        { t: "(Hold it. Don't let it touch that.)", stat: { proficiency: 1 }, then: [
          { n: "She held it. It didn't touch that. Judy twisted something and swore softly in a language that was mostly English, and the buzzing stopped, and the whole corridor of booths went suddenly, gloriously loud, and somewhere down the hall a table of salarymen cheered." },
          { s: 'judy', f: 'happy', t: "And THAT is why you never let somebody's cousin do your wiring." }
        ] },
        { t: "Do they pay you for this?", then: [
          { s: 'judy', f: 'neutral', t: "Free drinks. Free booth. The clerk thinks I'm a genius. Honestly? Best gig I've had in years." },
          { n: "She finished the job with as much care as if it had paid, and then came into Solar's booth to test the bass, and stayed for three songs." }
        ] }
      ] },
      { bond: { judy: 1 } }
    ] },

  { id: 'ri-rohan-electricbath', who: 'rohan', where: { acts: ['electricbath'] }, slot: 'evening', met: ['rohan'],
    after: '9/9', until: '1/24', scene: [
      { n: "In the lobby afterward, red to the ears and still faintly buzzing, she found Rohan Kishibe on the bench by the milk fridge with a towel around his neck and a sketchbook open on his knee, drawing furiously." },
      { s: 'rohan', f: 'serious', t: "Don't talk to me yet. I'm getting it down before it fades." },
      { s: 'rohan', f: 'neutral', t: "Do you know what that feels like? Of course you do, you were in it. Electricity through water, through the *skin*. Every artist draws it as a skeleton and jagged lines. Wrong. All wrong. It's ants. Polite ants." },
      { choose: [
        { t: "Bees, I thought. Very polite bees.", stat: { knowledge: 1 }, then: [
          { s: 'rohan', f: 'serious', t: "...Bees." },
          { n: "He stared at her. He stared at the page. He tore it out, crumpled it, and started again, and she drank a bottle of milk at the other end of the bench and watched a hundred tiny bees come into being under his pen, each one extremely well-mannered." },
          { s: 'rohan', f: 'happy', t: "Reality. That's reality. Thank you." }
        ] },
        { t: "Are you drawing the grandmother in there?", then: [
          { s: 'rohan', f: 'happy', t: "She's been in for twenty-five minutes doing a crossword. She's the most terrifying person I've met in this city." },
          { n: "He turned the sketchbook around. It was the grandmother exactly, crossword and all, inside a halo of jagged lines she was plainly, magnificently ignoring." }
        ] }
      ] },
      { bond: { rohan: 1 } }
    ] },

  { id: 'ri-widowmaker-watching', who: 'widowmaker', where: { areas: ['portisland'] }, slot: 'evening', met: ['widowmaker'],
    after: '10/7', until: '1/24', scene: [
      { n: "On her way back to the station she had the specific feeling, a prickle at the nape of the neck, of being watched from very far away, and when she looked up, three floors above the street on a fire escape with the city light behind her, Widowmaker raised two fingers in a small salute." },
      { n: "A minute later she was simply there at Solar's side on the concourse, as if she had been walking with her all along, not a hair out of place." },
      { s: 'widowmaker', f: 'neutral', t: "You walk with your hands in your pockets. In a crowd. At night. If I wanted your wallet, petite, I would have it already." },
      { choose: [
        { t: "Did you want my wallet?", stat: { courage: 1 }, then: [
          { s: 'widowmaker', f: 'happy', t: "Non. I wanted to see how long before you noticed me." },
          { s: 'widowmaker', f: 'neutral', t: "Four minutes. That is very good. Most people never notice." },
          { n: "She said it like a compliment. Solar decided to take it as one." }
        ] },
        { t: "(Take your hands out of your pockets.)", stat: { proficiency: 1 }, then: [
          { s: 'widowmaker', f: 'neutral', t: "Better." },
          { n: "She walked with Solar as far as the turnstiles and no further, and when Solar looked back from the platform she was gone, the fire escape empty, the city glittering on as if nothing at all had been watching it." }
        ] }
      ] },
      { bond: { widowmaker: 1 } }
    ] },

  /* ── Searchers (never at Gekkoukan or a school club; the present moment only) ── */
  { id: 'ri-hanni-candle', who: 'hanni', where: { acts: ['chagall', 'cafestudy', 'boutique'] }, flags: ['arrived-hanni'],
    after: '9/14', until: '11/30', scene: [
      { n: "On her way out she heard her name called across the concourse in a voice that couldn't hide a single thing, and Hanni was coming toward her with an iced coffee in one hand and a paper bag in the other, and the bag smelled, from four meters away, very strongly of peach." },
      { s: 'hanni', f: 'happy', t: "Sol! Don't look in the bag." },
      { s: 'hanni', f: 'flustered', t: "It's a candle. I know. I know. I said I wouldn't. But it was peach, and it was on sale, and Hyein said I deserved it, and Hyein says everyone deserves everything, so I don't know why I listened." },
      { choose: [
        { t: "Where are you going to light it?", then: [
          { s: 'hanni', f: 'happy', t: "Somewhere safe! Somewhere responsible. Somewhere Mitsuru won't find it." },
          { s: 'hanni', f: 'neutral', t: "...So, the bathroom." }
        ] },
        { t: "You do deserve it.", stat: { kindness: 1 }, then: [
          { s: 'hanni', f: 'surprised', t: "...Okay, now I *have* to light it. You can't say that and not let me light it." },
          { n: "She hooked her arm through Solar's and walked her the rest of the way telling her everything she'd seen that day, small things, a dog in a raincoat, a man asleep on the monorail with a cake box on his knees, her iced coffee sweating a ring through the paper bag the whole way." }
        ] }
      ] },
      { later: { delay: 1, slot: 'late', msgs: [
        { from: 'hanni', t: "the candle is lit. the bathroom smells like a whole peach orchard" },
        { from: 'hanni', t: "mitsuru hasn't noticed yet!!! i'm so nervous" },
        { from: 'solar', t: "she's noticed" },
        { from: 'hanni', t: "SOL" }
      ] } },
      { bond: { hanni: 1 } }
    ] },

  { id: 'ri-hanni-flowers', who: 'hanni', where: { jobs: ['flowers'] }, flags: ['arrived-hanni'],
    after: '9/14', until: '1/20', scene: [
      { n: "Late in the shift a short girl with thick black bangs stopped in front of the buckets and stood there too long, the way people do when they're doing math, and Solar knew it was Hanni before she looked up, from the way she was holding her wallet against her chest." },
      { s: 'hanni', f: 'neutral', t: "Okay. What's the cheapest thing that still looks like you meant it?" },
      { s: 'hanni', f: 'happy', t: "It's for the lounge. The table by the TV. Everyone's been so tired. I thought if there was something alive on it, people would sit down for a minute." },
      { choose: [
        { t: "(Make her a little bunch from the ends of everything.)", stat: { kindness: 1 }, then: [
          { n: "Solar pulled one stem from every bucket, the leftovers and the ones with bent necks, and tied them together with string, and it looked like a field, like nobody had planned it, and Hanni held it up and her whole face went soft." },
          { s: 'hanni', f: 'happy', t: "It looks picked. Like we went somewhere and picked it. Thank you. I'm paying. Don't argue." }
        ] },
        { t: "Daisies. They last forever.", stat: { knowledge: 1 }, then: [
          { s: 'hanni', f: 'happy', t: "Forever's good. Forever's exactly my budget." },
          { n: "She paid in coins, counting them out onto the counter one at a time, and walked off with the daisies held upright in both hands as if she were carrying a cake." }
        ] }
      ] },
      { bond: { hanni: 1 } }
    ] },

  { id: 'ri-hyein-hairdryer', who: 'hyein', where: { acts: ['bathhouse', 'electricbath'] }, slot: 'evening', flags: ['arrived-hyein'],
    after: '9/14', until: '1/24', scene: [
      { n: "In the changing room afterward, the one hair dryer on the wall was occupied, and had been for some time, by Hyein, who was drying her hair section by section with the focus of a sculptor and narrating every section under her breath." },
      { s: 'hyein', f: 'surprised', t: "Sol! Oh my God. Okay. Sit. You're next. You can't go out like that, you'll get sick, and then you'll be sick *and* wet." },
      { s: 'hyein', f: 'happy', t: "Also I need the practice. I've never done anyone's hair at a bathhouse. It's like a salon if the salon was a sauna." },
      { choose: [
        { t: "(Sit. Let her do it.)", stat: { charm: 1 }, then: [
          { n: "Hyein dried her hair with the dryer in one hand and a borrowed comb in the other and a running commentary about volume, and when she was done Solar's hair was bigger than it had ever been, a whole cloud of it, and three grandmothers at the lockers told her she looked like a film star, and Hyein bowed to them." }
        ] },
        { t: "I'll air dry.", then: [
          { s: 'hyein', f: 'serious', t: "You'll *air dry*. In this weather." },
          { s: 'hyein', f: 'neutral', t: "I hear criticism and I choose to ignore her. Sit." },
          { n: "Solar sat." }
        ] }
      ] },
      { bond: { hyein: 1 } }
    ] },

  { id: 'ri-jihoon-megabowl', who: 'jihoon', where: { jobs: ['hagakure'] }, slot: 'evening', flags: ['arrived-jihoon'],
    after: '9/20', until: '1/24', scene: [
      { n: "At the busy end of the counter somebody had ordered the Mega Bowl, and somebody else, two stools down, had appointed himself the commentator, and the commentator was Park Jihoon." },
      { s: 'jihoon', f: 'serious', t: "Minute nineteen. He's slowing down. He's looking at the broth. Never look at the broth. The broth can smell fear." },
      { s: 'jihoon', f: 'happy', t: "Oh, it's you. Nice apron. Very humble. Very peasant. I love that for you." },
      { choose: [
        { t: "Are you ordering anything, or just heckling?", stat: { courage: 1 }, then: [
          { s: 'jihoon', f: 'neutral', t: "I'm *supporting*. There's a difference. Fine. A small. The smallest one you have. I do pilates." },
          { n: "He ate half of it while commentating, so that when the challenger finally tipped back the last of his broth at minute twenty-nine, Jihoon was the first one on his feet, cheering with his mouth full and a chopstick raised like a torch." }
        ] },
        { t: "(Slide the challenger a glass of water.)", stat: { kindness: 1 }, then: [
          { s: 'jihoon', f: 'surprised', t: "Aid? Interference? In a sporting event? I'm calling the commission." },
          { n: "The challenger drank it, gave her a look of pure devotion, and finished with nine seconds to spare, and Jihoon, outraged, asked for a glass of water too, and then didn't drink it, and kept it by his elbow out of principle." }
        ] }
      ] },
      { bond: { jihoon: 1 } }
    ] },

  { id: 'ri-minji-gulls', who: 'minji', where: { acts: ['pier', 'beachclean'] }, slot: 'after', flags: ['arrived-minji'],
    after: '9/27', until: '1/24', scene: [
      { n: "Halfway down the pier there was a camera pointed at the gulls, and behind it Minji, crouched low on the boards with her elbows on her knees, holding so still that the gulls had given up being suspicious of her." },
      { s: 'minji', f: 'happy', t: "Hi. Don't move. Okay, you can move. They're used to me now. I bribed them." },
      { s: 'minji', f: 'neutral', t: "Can I turn around? Just for a second. You and the water. You can say no. I'll still like you." },
      { choose: [
        { t: "Okay. One second.", stat: { charm: 1 }, then: [
          { n: "She turned the camera around and held it and didn't say anything, and Solar looked at the water because that was easier than looking at the lens, and Minji let it run longer than a second and then lowered it like she'd been handed something." },
          { s: 'minji', f: 'happy', t: "Thank you. That's a good one. I'm not showing you. You'd only argue with it." }
        ] },
        { t: "Rather not today.", then: [
          { s: 'minji', f: 'neutral', t: "Okay. Then the gulls are the stars. They've been waiting all week for this." },
          { n: "She meant the okay. That was the thing about Minji. She turned back to the gulls without a flicker and narrated their afternoon in a nature-documentary voice until Solar laughed, and never once pointed the camera anywhere Solar hadn't said yes to." }
        ] }
      ] },
      { bond: { minji: 1 } }
    ] },

  { id: 'ri-yunjin-taxi-coffee', who: 'yunjin', where: { acts: ['vending'], areas: ['station'] }, flags: ['arrived-yunjin'],
    after: '10/11', until: '1/24', scene: [
      { n: "On her way to the platform she heard a vending machine being spoken to, firmly, in English, and found Yunjin in her yellow puffer feeding it coins one at a time with three cans of coffee already clutched against her chest." },
      { s: 'yunjin', f: 'serious', t: "Don't judge me. They're for taxi drivers." },
      { s: 'yunjin', f: 'neutral', t: "It's coffee for taxi drivers, babe. It's sad and sweet and it's eighty yen and I need it in my body. I'm just being honest about who it's for." },
      { choose: [
        { t: "(Buy one too.)", stat: { charm: 1 }, then: [
          { n: "They stood by the machines with their cans, the warm metal going lukewarm in their hands, and watched the trains come in, and Yunjin told her in her gravelly voice about every single person who got off the next three, all of it made up and all of it extremely detailed, one of them a spy." }
        ] },
        { t: "That's four coffees, Jin.", then: [
          { s: 'yunjin', f: 'happy', t: "Three are for later. Later-me deserves something too. Later-me is going through a lot." },
          { n: "She tucked one into Solar's coat pocket anyway, without asking, and walked off toward the exit with the other three clinking together like a very small band." }
        ] }
      ] },
      { bond: { yunjin: 1 } }
    ] },

  { id: 'ri-yunjin-konbini', who: 'yunjin', where: { jobs: ['konbini'] }, slot: 'evening', flags: ['arrived-yunjin'],
    after: '10/11', until: '1/24', scene: [
      { n: "At half past eleven the door chimed, and it was Yunjin, in a hoodie over pajama pants and slippers that weren't made for outside, carrying nothing, wanting nothing, leaning on the counter on both elbows." },
      { s: 'yunjin', f: 'neutral', t: "I'm always up. You know that. I saw your shift on the fridge." },
      { s: 'yunjin', f: 'happy', t: "I'm not buying anything. I'm a customer emotionally." },
      { choose: [
        { t: "(Let her stay till close.)", stat: { kindness: 1 }, then: [
          { n: "She stayed. She read the magazines without buying them, judged every customer under her breath in English, helped face the shelves badly, and at closing rode the monorail home beside her with her slippers soaked through, and never said why she'd come, and didn't have to." }
        ] },
        { t: "Customers have to buy something.", then: [
          { s: 'yunjin', f: 'neutral', t: "Fine." },
          { n: "She bought one pork bun, tore it in half on the counter, pushed the bigger half at Solar, and stayed anyway." }
        ] }
      ] },
      { bond: { yunjin: 1 } }
    ] },

  { id: 'ri-jungwon-corner-table', who: 'jungwon', where: { acts: ['cafestudy'], jobs: ['chagall'] }, flags: ['arrived-jungwon'],
    after: '10/15', until: '1/24', scene: [
      { n: "At the corner table by the window, the one with the bad lamp, Jungwon had been sitting for an hour and a half behind a stack of borrowed textbooks and a single coffee long gone cold, and as far as Solar could tell he had not eaten anything at all." },
      { s: 'jungwon', f: 'neutral', t: "Solar. Hello. I'm almost finished." },
      { s: 'jungwon', f: 'serious', t: "Their curriculum is three weeks ahead of ours in mathematics and two weeks behind in history. I'm reconciling them. It's for no one. I'm aware of that." },
      { choose: [
        { t: "(Put a sandwich on his textbook.)", stat: { kindness: 1 }, then: [
          { s: 'jungwon', f: 'flustered', t: "...I didn't order this." },
          { n: "She said she knew. He looked at it, and at her, and at the page underneath, which he could no longer read, and then, very politely, the way he did everything when he'd lost an argument, he ate the sandwich." },
          { ifRomance: 'jungwon', then: [
            { n: "When she came back for the plate he caught her fingers for a second on the edge of the table, not holding, only there, and said thank you to the textbook, and let go." }
          ] }
        ] },
        { t: "It's for you. That counts.", stat: { courage: 1 }, then: [
          { s: 'jungwon', f: 'neutral', t: "...That counts." },
          { n: "He turned it over like a step in a proof. Then he closed the top book, and the one under it, and said, after a while, that perhaps he could stop for twenty minutes, and didn't open them again until she'd gone." }
        ] }
      ] },
      { bond: { jungwon: 1 } }
    ] },

  { id: 'ri-jaehyun-bookworms', who: 'jaehyun', where: { jobs: ['bookworms'] }, flags: ['arrived-jaehyun'],
    after: '10/26', until: '1/24', scene: [
      { n: "Near closing the bell over the door rang and Jaehyun came in, dark hair in a neat side part, scarf knotted exactly, and went straight to the games-and-strategy shelf and stood in front of the Go manuals with his hands behind his back as if they were a field he meant to read." },
      { s: 'jaehyun', f: 'neutral', t: "Sister. You work here." },
      { s: 'jaehyun', f: 'neutral', t: "Your shelving's alphabetical by author, within subject. That's good. That's a system." },
      { choose: [
        { t: "It's not my system. It's theirs.", then: [
          { s: 'jaehyun', f: 'neutral', t: "You kept it. That's a choice too." },
          { n: "He bought a Go manual for beginners and another for somebody who wasn't one, and didn't say which was his, and on the way out, in passing, he rested his hand on the top of her head for exactly one second, where nobody could see." }
        ] },
        { t: "Don't wanna hear it, Jae.", stat: { courage: 1 }, then: [
          { s: 'jaehyun', f: 'neutral', t: "I wasn't grading. I was approving. There's a difference." },
          { n: "With him there wasn't, and he knew she knew it. He paid in exact change and told her she wasn't wearing enough layers, because apparently it was a law of nature that he had to, and left." }
        ] }
      ] },
      { bond: { jaehyun: 1 } }
    ] },

  { id: 'ri-junkyu-matinee', who: 'junkyu', where: { acts: ['cinema'] }, flags: ['arrived-crew'],
    after: '11/1', until: '1/24', scene: [
      { n: "On her way out of the theater she found Junkyu in the lobby under the poster for the film they had evidently both just seen, crying freely, a box of popcorn held to his chest, while Hyunsuk patted his shoulder with an expression of profound embarrassment." },
      { s: 'junkyu', f: 'sad', t: "Sol!!! Did you see it? Did you see the END?" },
      { s: 'junkyu', f: 'happy', t: "I'm okay. I'm so okay. It was so good. Hyunsuk didn't cry. Hyunsuk's a robot." },
      { choose: [
        { t: "(Hug him.)", stat: { kindness: 1 }, then: [
          { s: 'junkyu', f: 'happy', t: "SHE HUGGED ME." },
          { n: "He announced it to the lobby. Hyunsuk said yes, they could all see, and Junkyu said that was one and he was counting, and Solar had the distinct feeling, extracting herself, that he really was." }
        ] },
        { t: "I cried too. A little.", then: [
          { s: 'junkyu', f: 'surprised', t: "You DID? Okay. Okay, that's two of us. That's a majority. Hyunsuk, we're a majority." },
          { n: "Hyunsuk pointed out that he hadn't voted. Junkyu offered Solar the popcorn, which by now was mostly salt and slightly damp, and she took some anyway." }
        ] }
      ] },
      { bond: { junkyu: 1 } }
    ] },

  { id: 'ri-haechan-curb', who: 'haechan', where: { acts: ['hagakure', 'wildduck', 'bathhouse', 'electricbath'], jobs: ['hagakure'] }, slot: 'evening',
    flags: ['arrived-haechan'], after: '11/5', until: '1/24', scene: [
      { n: "On her way out into the cold she found Haechan on the curb across the street under the one streetlight that worked, an unlit cigarette between two fingers and the look of somebody in the middle of a long conversation with it." },
      { s: 'haechan', f: 'neutral', t: "I'm quitting." },
      { s: 'haechan', f: 'neutral', t: "This is what quitting looks like. You hold it. You don't light it. It's very visual. It's a whole performance." },
      { choose: [
        { t: "(Sit on the curb next to him.)", then: [
          { n: "She sat. The curb was freezing. He didn't say anything and neither did she, and after a while he slid the cigarette back into the pack, carefully, like something he'd be needing again, and they watched the Strip's neon flicker, his shoulder about an inch from hers and warm through his jacket." }
        ] },
        { t: "How's it going?", stat: { charm: 1 }, then: [
          { s: 'haechan', f: 'neutral', t: "Badly. Thanks for asking." },
          { s: 'haechan', f: 'happy', t: "Day four. Don't clap. If you clap I'll light it." },
          { n: "She didn't clap. He looked at her not clapping with something that, on anybody else, she would have called gratitude." }
        ] }
      ] },
      { bond: { haechan: 1 } }
    ] },

  { id: 'ri-sunoo-research', who: 'sunoo', where: { jobs: ['chagall'] }, flags: ['arrived-sunoo'],
    after: '11/8', until: '1/24', scene: [
      { n: "Around four a boy in a pastel cardigan ordered the Pheromone Coffee, took one sip, set it down, and began writing in a small notebook with the gravity of a food critic, and it took Solar a full minute to recognize Sunoo behind the sunglasses he had very obviously put on just for this." },
      { s: 'sunoo', f: 'surprised', t: "Solar! No! I'm not here!" },
      { s: 'sunoo', f: 'neutral', t: "I'm not spying. It's research. Every café on the Strip has a pastry. This place has a *coffee*. People come here for one coffee. I need to understand." },
      { choose: [
        { t: "(Tell him everything you know about it.)", then: [
          { n: "She told him what she knew, which was nothing, because nobody knew, and Sunoo wrote down *nobody knows* and underlined it twice and looked at it for a while as if it were the secret of the universe." },
          { s: 'sunoo', f: 'happy', t: "That's it. That's the whole thing. A mystery! I need a mystery." }
        ] },
        { t: "You know you can just ask me.", stat: { kindness: 1 }, then: [
          { s: 'sunoo', f: 'sad', t: "I know. But then it's cheating." },
          { s: 'sunoo', f: 'happy', t: "...Okay, what's in the cheesecake? Don't tell anyone I asked." }
        ] }
      ] },
      { bond: { sunoo: 1 } }
    ] },

  { id: 'ri-cherry-coat', who: 'cherry', where: { acts: ['boutique'] }, flags: ['arrived-cherry'],
    after: '11/14', until: '1/24', scene: [
      { n: "She was coming out of the changing rooms when the next curtain whipped back and Cherry stepped out in a coat far too long for her, looked at herself in the mirror, and told her own reflection, with real venom, that it was hideous." },
      { s: 'cherry', f: 'neutral', t: "Don't say anything. I know. It's hideous. I'm buying it." },
      { s: 'cherry', f: 'serious', t: "It's for skating. I need to look like I don't care if I fall. This coat doesn't care about anything. Look at it." },
      { choose: [
        { t: "It's hideous. Buy it.", stat: { courage: 1 }, then: [
          { s: 'cherry', f: 'happy', t: "THANK you. Finally. Somebody who gets it." },
          { n: "She bought it, wore it out of the store, and made Solar walk the whole length of the mall beside her so that, she said, people would understand it was a choice." }
        ] },
        { t: "Try the black one.", stat: { charm: 1 }, then: [
          { s: 'cherry', f: 'serious', t: "The black one is *nice*. I don't want nice. I want—" },
          { s: 'cherry', f: 'neutral', t: "...Ugh. Fine. Give me the black one." },
          { n: "It was better. They both knew it. Cherry bought the hideous one too, out of spite, and on the way out called Solar a traitor in a voice that was very nearly fond." }
        ] }
      ] },
      { bond: { cherry: 1 } }
    ] },

  { id: 'ri-mark-credits', who: 'mark', where: { acts: ['cinema', 'lateshow'] }, flags: ['arrived-mark'],
    after: '11/19', until: '1/24', scene: [
      { n: "On her way out of the theater she noticed somebody still sitting in the dark of row F, after the credits, after the lights, headphones around his neck, and it was Mark, with a hand over his mouth, very still." },
      { s: 'mark', f: 'surprised', t: "Oh— Sol. Hey. Hi. I'm fine. I'm totally fine." },
      { s: 'mark', f: 'neutral', t: "The score. Did you hear the score? The cellos at the end, under everything. Nobody stayed for it. They all just got up. Somebody had to stay." },
      { choose: [
        { t: "I heard it.", then: [
          { s: 'mark', f: 'surprised', t: "You did? Okay. Okay, good. Most people just hear it get sad." },
          { n: "He rubbed the back of his neck and laughed at himself, and then hummed the cello line for her, quietly, and the projectionist came in with a broom, and they both pretended they'd been just about to leave." }
        ] },
        { t: "Come on. I'll buy you a melon soda.", stat: { kindness: 1 }, then: [
          { s: 'mark', f: 'neutral', t: "...Yeah. Yeah, okay. Word." },
          { n: "He picked up his jacket, and then sat for one more second, listening to nothing, the empty theater humming with the projector fan, before he followed her out." }
        ] }
      ] },
      { bond: { mark: 1 } }
    ] }
];
