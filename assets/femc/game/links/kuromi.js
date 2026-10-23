/* Kuromi · XVI Tower. Revamp social link data (femc-game.html). Format: link fields in assets/femc/game/core.js, scene lines in scene.js.
   Persona-world cast (Kat's ruling, 2026-10-21): a second-year from Mariland Girls' Academy, a small school in a mountain
   town, on a one-year Kirijo exchange; the Kirijo Group moves her into the dorm in June. My Melody (id mymelody, her lifelong
   rival) joins the exchange in July and takes the room next door. Friendship only. Kuromi lives in the dorm lounge in the
   evenings. Shape: a menace who declares Solar her rival, then the soft thing under the bit, one rank at a time; she works
   out more about the dorm than anyone tells her and is never told the whole of it. Rank 4 is at Bookworms (and the back
   alley home); rank 6 sets off a short, half-remembered Hoax flash for Solar (no fragment); rank 8 is her birthday (10/31),
   written as a late party for whenever it plays; rank 10 looks ahead to spring. Perk beats: rank 2 the starter notebook,
   rank 4 the alley, rank 7 the Pink Kitty naginata (the game hands it over), rank 10 Payback.
   Also here: invite, 5 hangouts, 3 afterMax, afterRank texts (ranks 1, 3, 6, 7) and the 10/31 holiday (Halloween, which
   is also her birthday; it sets the flag kuromi-halloween, which rank 8 remembers).
   Cast-only speakers: mitsuko, newscaster, stallclerk. */
(window.FEMC_GAME_LINKS ||= []).push({
  id: 'kuromi', name: 'Kuromi', short: 'Kuromi', arcana: 'Tower', numeral: 'XVI', from: "Mariland Girls’ Academy",
  kind: 'persona',
  romance: null,
  starts: '6/10',
  home: { area: 'dorm', spot: 'Lounge', slot: 'evening', days: [0, 1, 2, 3, 4, 5, 6],
          hint: 'Evenings, any day, in the dorm lounge, usually in the middle of a crime.' },
  approach: "There's a girl in a black jester hat crouched on the arm of the lounge couch with a marker in her teeth, and Junpei is asleep under her. This is about to be a crime.",
  cast: { mitsuko: 'Mitsuko', newscaster: 'Newscaster', stallclerk: 'Stall Clerk' },
  invite: {
    ask: [
      "RIVAL. lounge. NOW.",
      "i need an accomplice. dont ask questions. ESPECIALLY dont ask questions",
      "r u free. its important (its not important) (it is a LITTLE important)",
      "junpei is asleep on the couch again. this is NOT a drill 💀",
      "im bored and its ur fault somehow. come FIX it",
      "rival meeting. downstairs. attendance is MANDATORY 🖤",
      "do u have a marker. asking for EVIL reasons",
      "the fridge has a new pudding in it. i need a lookout"
    ],
    ok: ["heh. PERFECT 💀", "GOOD. dont be late or ur disqualified", "finally. ur rival is WAITING 🖤", "bring snacks. and ur worst ideas"],
    no: ["UGH. fine. traitor", "boooo. ur in the notebook now", "FINE. ill cause chaos ALONE. hope ur happy", "whatever. its not like i was gonna have FUN or anything"]
  },
  hangouts: [
    [
      { n: "Junpei's cap had been missing for forty minutes, and he had searched the lounge three times, each time louder, with the growing despair of a man whose personality was mostly a hat. Kuromi was on the couch with a magazine. The magazine was upside down." },
      { s: 'junpei', f: 'serious', t: "Solar. Solar, you've seen my hat. Tell me you've seen my hat." },
      { s: 'kuromi', f: 'neutral', t: "Nobody's seen your stupid hat. Go cry somewhere else." },
      { choose: [
        { t: "(Get a drink from the fridge. Close it again, very calmly.)", notes: 3, then: [
          { n: "The cap was on the middle shelf between the milk and a carton of eggs, folded neatly around a single pickled shallot like a nest around an egg. Solar took out the barley tea, poured a glass, put the barley tea back, and closed the door, and Kuromi, behind the upside-down magazine, made a very small noise of pure love." }
        ] },
        { t: "Kuromi, your magazine is upside down.", notes: 2, then: [
          { s: 'kuromi', f: 'serious', t: "It's a STYLE. Punks read upside down. Look it up." },
          { s: 'kuromi', f: 'neutral', t: "...Upside down. In a book. Which I'm also reading upside down." }
        ] },
        { t: "Check the fridge, Junpei.", notes: 1, then: [
          { s: 'kuromi', f: 'surprised', t: "TRAITOR!" },
          { n: "Junpei found it. It was cold. He put it on anyway, out of principle, and shivered at the television for the rest of the night with the air of a martyr." }
        ] }
      ] },
      { n: "By the time the lounge emptied out she was already planning the next one, out loud, in a whisper, with Solar's name in it." }
    ],
    [
      { n: "Late, the lounge dark except for the television, rain ticking at the windows. Kuromi had found a horror movie on a channel that only came in on rainy nights, and she'd announced that it would be boring, and that she was only watching it to laugh at it, and that Solar was required to laugh at it too." },
      { n: "Twenty minutes in, she had Solar's sleeve in her fist. She didn't seem to know she was holding it." },
      { s: 'kuromi', f: 'neutral', t: "This is BORING. Nothing's even happening. I'm basically asleep." },
      { choose: [
        { t: "(Say nothing about the sleeve.)", notes: 3, then: [
          { n: "Solar kept watching. On the screen a girl in white came up out of a well the way water comes up a drain backwards, and Kuromi's grip went white, and she didn't let go, and Solar didn't make her, and they watched the whole rest of it like that, attached at the elbow." }
        ] },
        { t: "Want me to change the channel?", notes: 2, then: [
          { s: 'kuromi', f: 'serious', t: "NO. If you change it, it WINS." }
        ] },
        { t: "You're holding my sleeve.", notes: 1, then: [
          { s: 'kuromi', f: 'flustered', t: "I'm CHECKING the FABRIC. For SCIENCE." },
          { n: "She let go. Thirty seconds later she was holding it again." }
        ] }
      ] },
      { n: "When the credits rolled she stood up and stretched and said lame and went upstairs, and a minute later Solar heard a door open on the second floor and every light in the hallway come on at once, and stay on, all night, humming." }
    ],
    [
      { n: "Every cushion in the lounge was gone. Solar found them heaped behind the couch, built into something with a bedsheet over the top and a broom handle holding up the middle, and a boot sticking out of the entrance. The boot wiggled when she came closer." },
      { s: 'kuromi', f: 'serious', t: "Password." },
      { choose: [
        { t: "Junpei is a loser.", notes: 3, then: [
          { s: 'kuromi', f: 'surprised', t: "...That's the actual password. How did you KNOW." },
          { n: "The sheet lifted. Inside it was surprisingly roomy, lit by a flashlight and stocked with chips and a jar of pickled shallots, and a sign taped to the broom handle that said KUROMI'S 5 FIELD OFFICE in marker, with four of the five spaces on the member list still blank." }
        ] },
        { t: "Please?", notes: 1, then: [
          { s: 'kuromi', f: 'neutral', t: "Wrong. Polite people can't come in. It's a PUNK fort." },
          { s: 'kuromi', f: 'flustered', t: "...Fine. Probation. Get in before somebody sees." }
        ] },
        { t: "(Crawl in anyway.)", notes: 2, then: [
          { s: 'kuromi', f: 'happy', t: "HEY. Breaking and entering. ...Respect, honestly. Sit there. Don't touch the shallots." }
        ] }
      ] },
      { ifAfter: '8/10', then: [
        { n: "Koromaru was already in there, curled at the back on Junpei's missing hoodie, recruited with chips and visibly prepared to die for the cause." }
      ] },
      { ifRank: { kuromi: 3 }, then: [
        { n: "Someone had written a second name on the member list in round pink letters with a heart over the i. It had been crossed out. Very lightly. In a way that left it perfectly easy to read." }
      ] },
      { s: 'junpei', f: 'neutral', t: "Okay, who took the cushions? I just wanna SIT." },
      { n: "Kuromi switched off the flashlight. In the dark under the bedsheet she put a finger to her lips, and they sat there, not breathing, while Junpei walked three slow laps of the lounge and gave up and sat on the floor, and Kuromi shook with silent, perfect joy the whole time against Solar's shoulder." }
    ],
    [
      { n: "Kuromi had a compact mirror propped against the sugar bowl on the lounge table and a liquid eyeliner pen uncapped in her fist, and she pointed it at the cushion across from her like a dentist pointing at the chair." },
      { s: 'kuromi', f: 'serious', t: "Sit. Don't blink. If you blink you'll look like a raccoon that lost a fight, and I'll have to tell everybody I did it, and that's MY reputation." },
      { n: "Up close she smelled of strawberry lip balm and marker. She held Solar's chin with two fingers, very lightly, the way you'd hold a bird you'd been told not to squeeze, and drew a line out from the corner of Solar's eye with the absolute stillness she only ever had when she was doing something she loved, and her own breath stopped while she did it." },
      { s: 'kuromi', f: 'neutral', t: "I started at twelve. So nobody would mess with me. And now I can't go outside without it, because without it I just look like a girl. Like, a regular one. Who you'd mess with." },
      { n: "She held up the compact. In it Solar's face looked back, the same face, a little sharper at the edges, like a version of herself who had decided something. She looked at it longer than she meant to. There was a girl she'd been who did this every morning, she thought, in a different mirror, with somebody shouting through the door that they were late, and the thought was gone before she could turn and look at it." },
      { choose: [
        { t: "Now do the other one so I'm not lopsided.", notes: 3, then: [
          { s: 'kuromi', f: 'happy', t: "OBVIOUSLY. I'm not an amateur." },
          { n: "She did the other one, and then, without asking, a tiny pink skull at the outer corner, and stood back and looked at her work and said, very quietly, oh, that's good, the way people say it about weather." }
        ] },
        { t: "(Look at her instead of the mirror.)", notes: 2, then: [
          { s: 'kuromi', f: 'flustered', t: "Why are you looking at ME. The mirror's over THERE. Your face is the project, not my face." }
        ] },
        { t: "It looks like you.", notes: 1, then: [
          { s: 'kuromi', f: 'serious', t: "It looks like YOU, but scary. That's the whole point. Ugh. Amateurs." }
        ] }
      ] },
      { n: "Junpei came through on the way to the kitchen, looked at Solar, stopped, looked at Kuromi, and backed out of the room without a word, which Kuromi said was the highest review her work had ever received." }
    ],
    [
      { n: "Kuromi had arranged the lounge as a courtroom. The armchair was the bench. A ladle was the gavel. She had the grudge notebook open across both knees and her hat pushed back like a prosecutor about to ruin somebody's life." },
      { s: 'kuromi', f: 'serious', t: "All rise. Case one. Akihiko-senpai. Drank my strawberry milk. Claims he thought it was protein. It was PINK. It had a COW on it." },
      { s: 'kuromi', f: 'serious', t: "Case two. The fridge. Too cold. Froze my pudding into a rock. Case three. The weather. Exists. Case four. The bath schedule. I don't even have a reason, I just don't like it." },
      { ifRank: { kuromi: 3 }, then: [
        { s: 'kuromi', f: 'neutral', t: "Case five. My Melody. Said good morning to me so nicely that I said it back. In front of PEOPLE." }
      ] },
      { s: 'kuromi', f: 'neutral', t: "Your honor. Your verdict." },
      { choose: [
        { t: "(Bang the ladle.) Guilty. All of them.", notes: 3, then: [
          { s: 'kuromi', f: 'happy', t: "YES. Justice. Finally. A judge with a SPINE." },
          { n: "She wrote GUILTY next to every entry in letters an inch high, including the weather, and then underlined the fridge twice, which Solar felt was fair." }
        ] },
        { t: "The fridge is innocent. It's doing its job.", notes: 2, then: [
          { s: 'kuromi', f: 'surprised', t: "...Objection. OBJECTION. Whose side are you ON." },
          { s: 'kuromi', f: 'neutral', t: "...The fridge does do its job. Fine. Fridge walks. This time." }
        ] },
        { t: "Case dismissed. Everyone goes free.", notes: 1, then: [
          { s: 'kuromi', f: 'serious', t: "That's the most corrupt thing I've ever seen. You're IN the notebook now. Case six." }
        ] }
      ] },
      { n: "Akihiko came in from a run halfway through sentencing with a carton of strawberry milk he had bought on the way back, and set it down in front of Kuromi without a word, and went upstairs, and Kuromi stared at it for a long time and then quietly crossed out case one, and did not explain, and did not drink it until he'd gone." }
    ]
  ],
  ranks: [
    { after: '6/10', title: '1: rival', place: 'Iwatodai Dorm · Lounge', time: 'Evening', scene: [
      { music: 'dorm' },
      { n: "It had rained all week the way it only rains in June, not hard, just constantly, as if the sky had settled in for the month and brought a book, and the lounge smelled of wet umbrellas and the cardboard of a few last moving boxes still stacked at the foot of the stairs with KUROMI written on them in marker, every K drawn as a little bat." },
      { n: "Mitsuru had announced it at breakfast, in the tone she used for weather reports and casualty lists: a second-year on the Kirijo Group's exchange program would be taking the empty room on the second floor, the family she had been placed with had water damage, the arrangement was temporary, and she would appreciate it if everyone kept anything long and metal out of the lounge. Then she'd turned a page of her newspaper, and that had been the end of the discussion." },
      { n: "Junpei had fallen asleep on the couch with his mouth open and his cap over one eye, which was not unusual. What was unusual was that somebody was crouched on the arm of the couch above him, drawing on his face with a black marker, with her tongue between her teeth and the total focus of a surgeon." },
      { n: "She was a girl a year or so younger than Solar, long black hair streaked through with hot pink, under a black jester's hat with two floppy points and a little pink skull pinned to the front. There was a bandage across the bridge of her nose that looked decorative. Her hoodie was pink. Everything about her looked like it had been designed, with care, to be told off." },
      { n: "She looked up when Solar came in. She did not stop drawing." },
      { s: 'kuromi', f: 'serious', t: "Don't even THINK about telling on me, goody-two-shoes." },
      { choose: [
        { t: "Add glasses.", notes: 3, then: [
          { s: 'kuromi', f: 'surprised', t: "...Oh." },
          { s: 'kuromi', f: 'happy', t: "Oh, that's EVIL. I like that." },
          { n: "She added glasses. Little round ones, with a cracked lens. Solar had never seen anyone look so happy doing anything." }
        ] },
        { t: "He's going to kill you.", notes: 2, then: [
          { s: 'kuromi', f: 'happy', t: "He can TRY. I'm very fast and he's very dumb." }
        ] },
        { t: "Who are you?", notes: 1, then: [
          { s: 'kuromi', f: 'neutral', t: "Rude. You don't ask a girl who she is in the middle of a crime. You WAIT." }
        ] }
      ] },
      { s: 'kuromi', f: 'neutral', t: "I'm Kuromi. THE Kuromi. Second-year, Mariland Girls' Academy, leader of Kuromi's Five, terror of the entire valley. You've never heard of Mariland. Nobody's heard of Mariland. It's a town in the mountains with one bus and nine bakeries, and that's it, that's the whole town." },
      { register: 'kuromi' },
      { s: 'kuromi', f: 'neutral', t: "The Kirijo people run this exchange thing. One year, between their schools. You pick one off a list and they send you there, and for a whole year you get to be somebody nobody's ever met." },
      { s: 'kuromi', f: 'serious', t: "So I picked the one farthest from home. Obviously." },
      { s: 'solar', f: 'neutral', t: "And the water damage?" },
      { n: "Kuromi stopped drawing. She looked at Solar over Junpei's sleeping face with her marker in the air, the way a cat looks at you when you've said its name in a tone it doesn't like." },
      { s: 'kuromi', f: 'neutral', t: "Very nice family. By the river. They have a rice cooker that plays a song when it's done. And one night their house got SO water-damaged that two days later a lady in a black car came and moved me here. With a form." },
      { s: 'kuromi', f: 'serious', t: "I was sitting on their roof that night, rival. Till like one in the morning. It was not wet." },
      { n: "She went back to the mustache. She said the rest of it to the mustache, quickly, like somebody reading a list of things she had decided were not a big deal." },
      { s: 'kuromi', f: 'neutral', t: "The whole town went green. The moon was HUGE, like somebody pulled it closer to get a look at me. The river stopped. Not froze. STOPPED. And everybody walking around down there turned into these big black..." },
      { n: "She drew a long box in the air with the marker." },
      { s: 'kuromi', f: 'happy', t: "Coffins. A whole street of them. Like every vampire in town went to bed at once. Honestly? Coolest thing I've ever seen in my life." },
      { s: 'kuromi', f: 'neutral', t: "And then a motorcycle went by underneath. Right through the middle of it. With a girl on it with red hair. And she looked up at me on the roof. And two days later, guess whose red hair shows up at my homestay with a clipboard, saying water damage." },
      { n: "Solar knew what the night of the full moon had looked like. She had been out under it. She kept her face exactly where it was, which was a skill she seemed to have arrived with, the way she had arrived with her own handwriting." },
      { choose: [
        { t: "(Say nothing. Keep your face exactly where it is.)", notes: 3, stat: { courage: 1 }, then: [
          { n: "Solar said nothing, pleasantly. Kuromi watched her say nothing for a long few seconds, eyes narrowed, the way you'd read the small print on a contract you'd already signed." },
          { s: 'kuromi', f: 'happy', t: "Huh. You're good. You're SO good. That's incredibly suspicious. I love it." }
        ] },
        { t: "Have you asked Mitsuru?", notes: 2, then: [
          { s: 'kuromi', f: 'flustered', t: "The scary red one? I asked her if she has a motorcycle. She looked at me for a whole minute without blinking. Then she told me the bath schedule is on the fridge." },
          { s: 'kuromi', f: 'neutral', t: "I think she might be a villain too. I respect it. Professionally." }
        ] },
        { t: "It was probably a dream.", notes: 1, then: [
          { s: 'kuromi', f: 'serious', t: "I don't dream in green. I dream in black and pink like a normal person." }
        ] }
      ] },
      { n: "She capped the marker and sat back on her heels to look at her work. Junpei now had glasses, a monocle over the glasses, a curling mustache, and the word LOSER written in neat block capitals across his forehead, backwards, so he'd be able to read it properly in a mirror. It was, Solar had to admit, extremely thorough." },
      { s: 'kuromi', f: 'neutral', t: "Okay. Listen. I've decided something." },
      { s: 'kuromi', f: 'serious', t: "You're my rival now." },
      { choose: [
        { t: "I accept.", notes: 3, then: [
          { s: 'kuromi', f: 'surprised', t: "...You ACCEPT? Nobody accepts! They're supposed to get mad! They're supposed to say, Kuromi, how DARE you!" },
          { s: 'kuromi', f: 'serious', t: "Ugh. Fine. Good. Rival accepted. Prepare yourself. You don't even know what you've done." }
        ] },
        { t: "Why me?", notes: 2, then: [
          { s: 'kuromi', f: 'neutral', t: "Because you didn't tell on me. That's suspicious. Rivals are suspicious. It's perfect." },
          { s: 'kuromi', f: 'neutral', t: "And I already have one at home, and she doesn't count. She doesn't even know she's one. She thinks we're FRIENDS." }
        ] },
        { t: "I don't really do rivals.", notes: 1, then: [
          { s: 'kuromi', f: 'happy', t: "That's what a rival WOULD say. Too late. It's in my notebook. It's official." }
        ] }
      ] },
      { n: "When Junpei woke up he went to the bathroom, looked in the mirror, and screamed, and then he chased Kuromi around the whole dorm for twenty minutes, up and down every staircase, while she shrieked with laughter and slid down banisters and once, to Solar's real alarm, went out of the second-floor window and back in through the kitchen. He never caught her. On the way past the lounge doorway, mid-flight, she pointed at Solar and yelled RIVAL, like a promise, like a threat, and Solar, for reasons she didn't look at too closely, laughed so hard she had to sit down on the stairs." }
    ] },

    { after: '6/21', title: '2: the grudge notebook', place: 'Iwatodai Dorm · Lounge', time: 'Evening', scene: [
      { music: 'rain' },
      { n: "There was a notebook on the lounge couch, wedged down between two cushions where somebody had obviously been lying with it and been called away in a hurry. Black, with a pink skull on the cover and GRUDGES written down the spine in correction fluid, and a little gold clasp that was not, it turned out, locked, because it had been bent open by somebody who had once locked herself out of it and given up on locks entirely." },
      { n: "Solar knew whose it was. There was a sticker on the back that said PROPERTY OF KUROMI, DO NOT READ OR ELSE, and under it in smaller letters, THIS MEANS YOU JUNPEI, and under that, smaller still, AND YOU, with no name, which Solar found she took personally." },
      { n: "She picked it up. It was warm from the cushions. It was heavier than it looked, the way notebooks are when somebody has written in every corner of every page and pressed hard. Outside the rain came down on the street in long gray threads, and she held it for a second with her thumb on the bent clasp." },
      { choose: [
        { t: "(Put it on the high shelf where it won't get sat on. Don't open it.)", notes: 3, then: [
          { n: "She put it on the shelf above the television, behind Mitsuru's row of business magazines, where nobody would ever look, and squared it with the edge, and sat down with her own homework." }
        ] },
        { t: "(Put it back exactly where it was.)", notes: 2, then: [
          { n: "She tucked it back between the cushions, exactly, at the same angle, so it would look untouched, and sat down in the armchair across from it, and felt, absurdly, like a guard." }
        ] },
        { t: "(Open it. Just the first page.)", notes: 0, then: [
          { n: "She opened it. The first page said TODAY I HATE: in big angry letters, and under it a list, and the first thing on the list was in much older ink, a child's writing, and had been scratched out so hard the pen had gone through, and all that was left was a capital M. She shut it fast. Her face was hot. She put it on the shelf and didn't look at it again." }
        ] }
      ] },
      { s: 'kuromi', f: 'surprised', t: "WHERE IS MY NOTEBOOK." },
      { n: "Kuromi came into the lounge at a dead run from the stairs, hat askew, wild-eyed, and stopped like she'd hit a wall when she saw it, and saw Solar, and saw that Solar was doing her homework." },
      { s: 'kuromi', f: 'serious', t: "...Did you read it?" },
      { s: 'solar', f: 'neutral', t: "No. It's yours." },
      { n: "Kuromi looked at her for a long time, the way you'd look at a dog that had been left alone with a steak and hadn't touched it. Like she was looking for the trick. There wasn't one. Solar could see her not finding it." },
      { s: 'kuromi', f: 'neutral', t: "...Nobody's ever not read it. Back home everybody reads it. My Melody reads it OUT LOUD. At LUNCH. And then she says, oh, Kuromi, you're so funny, like it's a compliment." },
      { choose: [
        { t: "I read the sticker. It said not to.", notes: 3, then: [
          { s: 'kuromi', f: 'serious', t: "The sticker is PUBLIC. That's fine. The sticker is a WARNING." },
          { s: 'kuromi', f: 'neutral', t: "...Nobody ever listens to the sticker." }
        ] },
        { t: "Who's My Melody?", notes: 2, then: [
          { s: 'kuromi', f: 'serious', t: "My RIVAL. My REAL rival. My ARCH-rival. You're like... a regional rival. Don't get a big head." }
        ] },
        { t: "Everyone deserves one thing nobody reads.", notes: 2, then: [
          { n: "Kuromi didn't say anything to that. She took the notebook down and held it against her chest with both arms, the way you'd hold something that had nearly been run over." }
        ] }
      ] },
      { n: "She sat down on the far end of the couch, cross-legged, and opened the notebook to a page near the back that had been written on, and crossed out, and written on again so many times it had gone soft as cloth, and turned it so Solar could see the heading but not the list. THINGS MY MELODY HAS BEATEN ME AT, AGE SIX TO PRESENT." },
      { s: 'kuromi', f: 'neutral', t: "The Spring Festival crown. Junior division, six years running. Then the real one, two years running. The baking prize, every year, with the same cake. Every teacher at Mariland. My own grandma, one New Year's, at cards." },
      { s: 'kuromi', f: 'serious', t: "The three-legged race. Which is a TEAM event. And she still beat me. While TIED to me." },
      { s: 'kuromi', f: 'sad', t: "She's pink and soft and everybody loves her and she doesn't even try. She's the heroine. In Mariland, I'm the other one. The one standing next to her in every photo, making a face." },
      { s: 'kuromi', f: 'neutral', t: "That's why I came. Here nobody's ever seen us side by side. Here I'm just Kuromi. Not Melody's... Not the other one." },
      { s: 'solar', f: 'neutral', t: "So she's still in Mariland." },
      { s: 'kuromi', f: 'serious', t: "...She signed up too. Two days after me. She said it sounded FUN." },
      { s: 'kuromi', f: 'serious', t: "She was supposed to be here already. Then she got a cold. In April. And the cold turned into a long cold, and the long cold turned into paperwork, and now she's coming in July. July! Like she's giving me a head start. Like it's a race and she's being NICE about it." },
      { choose: [
        { t: "You've been counting the days.", notes: 3, then: [
          { s: 'kuromi', f: 'surprised', t: "I have NOT." },
          { s: 'kuromi', f: 'flustered', t: "...It's seventeen. Shut up. That's a normal number to know." }
        ] },
        { t: "Then you've got a few weeks to be the main character.", notes: 2, then: [
          { s: 'kuromi', f: 'neutral', t: "...Huh. A few weeks. That's a lot of episodes." },
          { s: 'kuromi', f: 'happy', t: "Okay. Okay. Season one. Starring me. Junpei's in every episode and every episode something happens to his face." }
        ] },
        { t: "Maybe she just wants to be where you are.", notes: 2, then: [
          { s: 'kuromi', f: 'serious', t: "That's WORSE. Do you get that? That's so much worse." }
        ] }
      ] },
      { n: "Then she dug in the pocket of her hoodie and came out with a second notebook, small and black and brand new, still with the price sticker on the back, and held it out at arm's length without looking at Solar, the way you'd hand over something that might bite." },
      { s: 'kuromi', f: 'neutral', t: "Here. Starter grudge notebook. Every villain needs one. You write down everybody who wrongs you, and then later, when they least expect it, you get them back. With interest." },
      { s: 'solar', f: 'neutral', t: "I don't know if I have any grudges." },
      { s: 'kuromi', f: 'serious', t: "Everybody has grudges. You just haven't written them down, so they're all loose in there bumping into stuff. That's why you look like that." },
      { s: 'kuromi', f: 'neutral', t: "Go on. First one. I'll watch. It's a ceremony." },
      { choose: [
        { t: "(Write: Kuromi. Called me goody-two-shoes.)", notes: 3, then: [
          { s: 'kuromi', f: 'surprised', t: "I'M IN IT. FIRST PAGE. I'M THE FIRST GRUDGE." },
          { s: 'kuromi', f: 'happy', t: "That's the nicest thing anyone's ever done for me. Don't tell anybody I said that. Write that down too." }
        ] },
        { t: "(Write: Junpei. Ate my yakisoba bread.)", notes: 2, then: [
          { s: 'kuromi', f: 'happy', t: "Classic. Strong. A grudge with a FOUNDATION. You're a natural." }
        ] },
        { t: "(Write: whoever took the rest.)", notes: 2, then: [
          { s: 'kuromi', f: 'neutral', t: "...The rest of what?" },
          { n: "Solar didn't know. She'd written it before she'd thought it, the way you answer to a name, and she looked at it on the page in her own handwriting and couldn't have said what it meant. Kuromi looked at it too, for a long moment, and then very carefully didn't ask, which was more than Solar would have expected from anyone." }
        ] }
      ] },
      { n: "Kuromi took her own notebook upstairs. Twenty minutes later she came back down and sat on the far end of the couch with it open on her knees and a glitter pen, writing, and every now and then she looked up at Solar over the top of the page, and narrowed her eyes, and wrote something else, fast, and covered it with her arm." },
      { s: 'kuromi', f: 'neutral', t: "Also, the scary red one locks the front door at ten to midnight. Every night. Like the house is going to get stolen. I'm writing that down too." },
      { n: "Solar did her homework. She didn't look at the notebook. She found, a little to her own surprise, that she didn't want to, the way you don't want to read a letter over somebody's shoulder even when they'd never know. She had the strangest feeling she knew what it was like to have one place in the world that was only yours. She couldn't think where hers was. She was fairly sure she'd had one." }
    ] },

    { after: '7/8', title: '3: almond pound cake', place: 'Iwatodai Dorm · Lounge', time: 'Evening', scene: [
      { music: 'joy' },
      { n: "My Melody had arrived with the last of the rainy season: a pink suitcase, a Kirijo Group envelope with her room assignment in it, and a cake box held out in front of her in both hands like an offering at a shrine. Mitsuru had shown her to the empty room on the second floor, the one right next to Kuromi's, and Kuromi had shut her own door so hard that the pictures in the hallway were still hanging crooked." },
      { n: "She'd come out since only for school and the bathroom. The cake box had sat outside her door all the first night, untouched, like a cat that wanted in, and in the morning it was gone, and nobody said anything about it, least of all Kuromi, who came down to breakfast with almond crumbs on her hoodie and a face like a locked gate." },
      { n: "Tonight Melody had given up on the door and baked again, downstairs, and set the second cake on the lounge table, and sat down next to it to wait, with her hands folded in her lap, the way you'd wait beside a trap you felt a little bad about." },
      { n: "She was a soft, round-faced girl with long pink hair under a pink hood with two long floppy rabbit ears, and a white flower at one ear, and she looked up when Solar came in with the delighted face of somebody recognizing a celebrity." },
      { s: 'mymelody', f: 'happy', t: "Oh! You're Solar! You're in the letters! You're her rival!" },
      { s: 'solar', f: 'surprised', t: "The letters?" },
      { s: 'mymelody', f: 'happy', t: "Kuromi writes home every week. Her mama reads them out loud to my mama over tea on Sundays, and my mama reads them to me. You're in every single one! I'm her rival too! So we're rivals together. That's nice, isn't it?" },
      { s: 'mymelody', f: 'neutral', t: "She doesn't know her mama reads them out loud. She's going to be so mad. She's very cute when she's mad." },
      { n: "She said it with no malice at all, and that was the thing about it. It went in like a needle you didn't feel until afterward." },
      { s: 'mymelody', f: 'happy', t: "My mama always says, when you move into somebody's house, never go empty-handed. And when somebody won't open their door, bake something that smells through it." },
      { n: "Upstairs, a door opened. There was a long pause, the specific pause of somebody standing at the top of a staircase smelling something, and losing an argument with herself, and then footsteps, slow, with great dignity, all the way down." },
      { s: 'kuromi', f: 'serious', t: "I'm here for the CAKE. Not for you. The cake is the guest. You're just the person who carried it." },
      { s: 'mymelody', f: 'happy', t: "Kuromi! I saved you the end piece!" },
      { s: 'kuromi', f: 'serious', t: "I don't LIKE the end piece." },
      { choose: [
        { t: "(Let them fight it out. Sit on the stairs and watch.)", notes: 3, then: [
          { n: "Solar sat on the stairs. It was, in its way, magnificent. Kuromi shouted. My Melody agreed with everything she shouted, warmly, and then offered her cake, and Kuromi shouted louder, and My Melody said that was a very good point and also the end piece was the crunchy one, because she knew Kuromi liked the crunchy one, and Kuromi said she did NOT like the crunchy one, and took it, and ate it standing up, furious, in about four bites." }
        ] },
        { t: "Kuromi, she brought cake. Twice.", notes: 2, then: [
          { s: 'kuromi', f: 'neutral', t: "...What kind." },
          { s: 'mymelody', f: 'happy', t: "Almond pound cake! Mama's recipe!" },
          { s: 'kuromi', f: 'serious', t: "...I know what kind. I was just checking you know what kind." }
        ] },
        { t: "Melody, welcome to the dorm.", notes: 1, then: [
          { s: 'mymelody', f: 'happy', t: "Thank you! You're very kind! Kuromi, she's very kind!" },
          { s: 'kuromi', f: 'serious', t: "She's my RIVAL. She's not allowed to be kind to you. Get your own rival." }
        ] }
      ] },
      { n: "By nine o'clock My Melody had met everyone in the dorm and everyone in the dorm adored her. It was like watching weather. Yukari let her try on her pink cardigan and they were the same color and both of them screamed. Junpei did his best baseball announcer for her and she clapped. Akihiko came in from a run and she offered him cake and he ate four pieces, for the protein, he said, which nobody contradicted. Fuuka asked for the recipe in a small hopeful voice, and Melody wrote it out for her on a napkin in round pink handwriting with a drawing of a rabbit at the bottom." },
      { n: "Even Mitsuru, passing through on the way upstairs, stopped and said it was very good pound cake, in a voice that meant she'd already had a second slice in the kitchen." },
      { s: 'mitsuru', f: 'neutral', t: "You're settling in, Melody? If anything in your room isn't satisfactory, tell me. And Kuromi. Your door is load-bearing. Please treat it accordingly." },
      { n: "Kuromi sat at the far end of the couch with her knees up and her hat pulled down to her eyebrows and ate nothing more and said nothing. Solar went and sat next to her." },
      { s: 'kuromi', f: 'sad', t: "See? Everybody. Every single time. She walks in and everybody loves her and she's the main character, and I'm the one in the back of the picture making a face." },
      { s: 'kuromi', f: 'sad', t: "I came three hundred kilometers so nobody would ever see us side by side. Three HUNDRED. And she followed me. With a CAKE." },
      { choose: [
        { t: "Everyone in here met you first.", notes: 3, then: [
          { s: 'kuromi', f: 'neutral', t: "...That's a stupid thing to say." },
          { s: 'kuromi', f: 'neutral', t: "...Say it again but quieter." }
        ] },
        { t: "She came three hundred kilometers too.", notes: 2, then: [
          { s: 'kuromi', f: 'serious', t: "She does that. She FOLLOWS me. Everywhere. It's the worst thing about her." },
          { n: "She said it the way people said the worst thing about the ocean was how big it was." }
        ] },
        { t: "You can be the heroine here. Nobody's written anything yet.", notes: 2, then: [
          { s: 'kuromi', f: 'surprised', t: "..." },
          { s: 'kuromi', f: 'neutral', t: "Heroines are boring. They cry all the time. ...I'll think about it." }
        ] }
      ] },
      { n: "When Melody went up to bed she stopped at the top of the stairs and turned back and waved, not at the room, but at the far end of the couch. Kuromi didn't wave back. She waited until the door had shut upstairs, and then she ate the last slice of pound cake out of her hand, and said, to nobody, with her mouth full, stupid, and it didn't sound like she meant anybody but herself." },
      { place: 'Iwatodai Dorm · 2F Hallway', time: 'Late' },
      { music: 'night' },
      { n: "Much later, when the house had gone quiet, Solar went down for water and came back up by the second-floor stairs, and stopped on the landing." },
      { n: "Kuromi's door was open and her room was dark. Kuromi was in the hallway, in pajamas with bats on them, sitting on the floor with her back against the wall beside Melody's door and her knees up and the grudge notebook shut on top of them. Wide awake. Not doing anything. Just sitting, the way you'd sit outside a hospital room." },
      { n: "The clock at the end of the hall said 11:41." },
      { n: "Kuromi looked at Solar. Solar looked at her. Then Kuromi put one finger to her lips, very slowly, the way she had over Junpei's face the first night, except that it wasn't a joke this time, and Solar went back up to the third floor without her water and lay awake for a long time listening to the house tick toward midnight." }
    ] },

    { after: '7/24', title: '4: shoujo manga', place: 'Iwatodai Strip · Bookworms', time: 'Evening', scene: [
      { music: 'joy' },
      { n: "Bookworms was a tiny used bookshop on the Strip run by an old couple who were so kind it was almost unbearable, and Kuromi had been going there every day since summer break started, and buying one shoujo manga each time with exact change, and carrying it home inside a car magazine so nobody would see the cover." },
      { s: 'kuromi', f: 'serious', t: "It's RESEARCH. For EVIL. You have to understand your enemy." },
      { s: 'kuromi', f: 'neutral', t: "The enemy is love. It's extremely confusing. Everybody in these is an idiot." },
      { n: "She'd let Solar come along on the condition that Solar didn't look at any of the covers and didn't say the word cute, and they sat on the bench outside the shop under the awning, with the long summer evening still light at seven and the heat coming up off the pavement in shimmers, and Kuromi read the good parts out loud in different voices, very dramatically, with her hat pulled low so nobody walking by could tell who was doing it." },
      { s: 'kuromi', f: 'neutral', t: "Okay. So. He's a delinquent. She's the class rep. They HATE each other. Except they don't. Obviously. And then there's a festival and her sandal breaks." },
      { s: 'kuromi', f: 'serious', t: "And there's this OTHER girl. The rival. She's got a ponytail and she's mean and she's way funnier and she liked him first. FIRST. Since middle school." },
      { s: 'kuromi', f: 'sad', t: "And she doesn't get him. She never gets him. She gets one panel in the last volume where she's crying behind a tree, and then she's fine, and then she's gone." },
      { choose: [
        { t: "You're reading it for the rival.", notes: 3, then: [
          { s: 'kuromi', f: 'surprised', t: "..." },
          { s: 'kuromi', f: 'flustered', t: "I am NOT. I'm reading it for... the art. The art is very good. Look at the eyelashes. Those are some eyelashes." },
          { n: "She turned to the tree panel without looking for it, the way you open a book to the page it always falls open at, and looked at it for a long moment, and turned the page again, fast." }
        ] },
        { t: "Who's your favorite?", notes: 2, then: [
          { s: 'kuromi', f: 'neutral', t: "The delinquent. Obviously. He has a scar. Scars are cool. ...And maybe the rival. A little. Don't tell anybody." }
        ] },
        { t: "Sounds stupid.", notes: 1, then: [
          { s: 'kuromi', f: 'serious', t: "It IS stupid. I've read it four times. I'm the leading expert on how stupid it is." }
        ] }
      ] },
      { s: 'kuromi', f: 'neutral', t: "...Do you think it's real? This stuff?" },
      { n: "She asked it to the manga, not to Solar. She'd tugged the points of her hat down over both eyes." },
      { s: 'kuromi', f: 'neutral', t: "Like. Somebody picking you. Even though you're mean, and loud, and a menace, and you're the rival. Not because you're cute. Just... picking you." },
      { n: "Solar didn't know why the question went into her the way it did, quick and clean, under the ribs. She thought, for no reason, of someone who always stood where she would need them. She thought of a whole room of people who knew her name and wanted something from it. She didn't know where either thought had come from. They sat in her like stones in a shoe." },
      { choose: [
        { t: "I think it's real.", notes: 3, then: [
          { s: 'kuromi', f: 'neutral', t: "...Okay. Okay, good. Not for me. Just. In general. For research." }
        ] },
        { t: "I picked you. I'm your rival, aren't I?", notes: 3, then: [
          { s: 'kuromi', f: 'surprised', t: "..." },
          { n: "She put the manga up in front of her face. She didn't say anything for a long time. Very slowly the hat came up off her eyes, and her ears had gone red at the tips, and she was smiling into the pages like somebody trying to hide a light in her hands." }
        ] },
        { t: "I don't know.", notes: 1, then: [
          { s: 'kuromi', f: 'neutral', t: "Huh. Me neither. Good. At least we're dumb together." }
        ] }
      ] },
      { n: "She bought the next volume on the way out, with exact change, and the old woman at the counter wrapped it in brown paper without being asked and put a strawberry candy on top." },
      { s: 'mitsuko', t: "Your friend always says thank you to the cat on the way out. Even when the cat's asleep. I like that in a girl." },
      { s: 'kuromi', f: 'flustered', t: "That's a LIE. I have never once. ...He was awake that time. He LOOKED at me." },
      { place: 'Iwatodai Strip · Back Alley', time: 'Evening' },
      { music: 'night' },
      { n: "She didn't go home by the Strip. She went home by the alley behind it, a narrow concrete gap between the backs of the ramen shop and the pharmacy where the air smelled of fryer oil and wet cardboard and the cats sat on the air-conditioning units like little landlords, because, she said, the crossing on the main street took four minutes, and she did not wait for crossings, crossings waited for her." },
      { n: "There were three older boys at the far end of it, by the dumpsters, smoking, in the kind of school uniforms that had been altered in every direction a uniform could be altered. One of them looked up. Then all of them did. The alley seemed to get longer." },
      { s: 'kuromi', f: 'neutral', t: "Rule one. Don't speed up. Rule two. Don't slow down. Rule three. Walk like you're late to beat somebody up. Nobody bothers a girl who's late to beat somebody up. It's science." },
      { choose: [
        { t: "(Walk like you're late to beat somebody up.)", notes: 3, stat: { courage: 1 }, then: [
          { n: "Solar walked like she was late to beat somebody up. It came to her more easily than she would have liked: chin level, shoulders loose, eyes on a point just past them, a kind of bored, total certainty. The boys moved their feet out of the way. One of them actually said sorry." },
          { s: 'kuromi', f: 'happy', t: "...Okay, that was TERRIFYING. Where did you LEARN that. Teach me that. No. Don't. I'm the scary one." }
        ] },
        { t: "(Walk on the side nearest them.)", notes: 2, stat: { kindness: 1 }, then: [
          { n: "Solar shifted half a step, so that she was the one between Kuromi and the dumpsters, and they walked past like that, and nobody said anything, and at the mouth of the alley Kuromi looked at her sideways." },
          { s: 'kuromi', f: 'flustered', t: "...You put yourself on the side with the guys." },
          { s: 'solar', f: 'neutral', t: "I'm taller." },
          { s: 'kuromi', f: 'serious', t: "You're NOT. ...You are. A little. Shut up." }
        ] },
        { t: "Isn't the main street safer?", notes: 1, then: [
          { s: 'kuromi', f: 'serious', t: "Safer is a word for people with time." },
          { n: "She said it very loudly, for the boys' benefit, and walked past them in a straight line with her chin up and the brown-paper manga clutched to her chest like a shield." }
        ] }
      ] },
      { n: "At the dorm steps she stopped and turned around and pointed back the way they'd come, solemnly, like somebody naming a country." },
      { s: 'kuromi', f: 'neutral', t: "That alley's mine now. And yours. Rivals share territory. It's the law. Anybody gives you trouble back there, you tell them Kuromi said so, and if they don't know who Kuromi is, they'll find out." },
      { n: "Then she went inside with the manga under her arm and the strawberry candy still in her mouth, clicking against her teeth, and she was humming, which she did not know she was doing, and which Solar did not tell her." }
    ] },

    { after: '8/12', title: '5: the hallway', place: 'Iwatodai Dorm · Lounge', time: 'Evening', scene: [
      { music: 'dorm' },
      { n: "Kuromi was mean to everyone. That was the rule. She'd explained it to Solar with great seriousness in June: everybody gets a little bit of mean, it builds character, it's a service, really. Junpei got a lot. Yukari got some. Akihiko got some, and didn't notice, which made Kuromi furious. Mitsuru got almost none, out of what Kuromi described as professional respect between villains. Melody got the most of anyone, and took it all like presents." },
      { n: "But she was never mean to Koromaru." },
      { n: "The dog had come to live at the dorm with a small serious boy named Ken and a great deal of unspoken history, and he had taken one look at the lounge and chosen the rug in front of the couch, and Kuromi had chosen the floor beside the rug, and that, apparently, was that." },
      { n: "Solar found them on a hot night, the windows open and the fan turning its head back and forth like it was looking for someone. Koromaru was asleep in a perfect white circle. Kuromi was lying on her stomach next to him with a sketchbook, drawing him, with her face about four inches from his nose." },
      { s: 'kuromi', f: 'serious', t: "Shh. He's sleeping. If you wake him up I'll destroy you." },
      { choose: [
        { t: "(Sit down on the floor, very quietly.)", notes: 3, then: [
          { n: "Solar sat down on the floor with her back against the couch, very quietly, and Kuromi glanced at her and approved with one short nod, and went back to drawing. The drawing was good. Better than good. Every whisker. The scar over his eye. The way one ear never quite lay flat." }
        ] },
        { t: "That's really good.", notes: 2, then: [
          { s: 'kuromi', f: 'flustered', t: "SHH. And I know. I know it's good. Don't make it weird." }
        ] },
        { t: "You're never mean to him.", notes: 2, then: [
          { s: 'kuromi', f: 'neutral', t: "...He's never mean to me." }
        ] }
      ] },
      { s: 'kuromi', f: 'neutral', t: "He doesn't care that I'm a punk. Or a troublemaker. Or the rival. He doesn't know what a rival is. He just likes me. I walk in, and he's happy." },
      { s: 'kuromi', f: 'neutral', t: "That's rare, okay? You protect rare things." },
      { s: 'kuromi', f: 'neutral', t: "Back home I've got a sidekick. Baku. He's a boy, technically. Purple jacket, every day, since we were seven. Falls asleep in every single plan. Never once asked me to be nicer. I text him every night and he answers at six in the morning, because he goes to bed at nine, like a grandpa." },
      { s: 'kuromi', f: 'happy', t: "Koromaru's better. Don't tell Baku. Actually, tell Baku. He deserves it." },
      { n: "She went quiet then, shading the dog's ear with the side of the pencil, and Solar sat with the thing she had been carrying for a few weeks now and turned it over, and decided, and said nothing, and Kuromi said it for her without looking up." },
      { s: 'kuromi', f: 'neutral', t: "You've seen me. In the hallway. Upstairs. Don't lie, you did the face." },
      { n: "Solar had seen her. More than once now, coming up the stairs very late with the night still on her skin, she had found Kuromi asleep on the second-floor hallway floor with her back against Melody's door, her notebook open on her knees and the pen still in her hand, and once, the last time, with Koromaru lying across her feet, awake, his ears up, watching the top of the stairs like a guard." },
      { music: 'tender' },
      { s: 'kuromi', f: 'neutral', t: "This town does a thing. At midnight. I know it does. I'm not ASKING you about it. I'm not stupid. I've seen the red one lock the door. I've seen you guys go out at ten to twelve with your long bags, like a band with no instruments." },
      { s: 'kuromi', f: 'neutral', t: "I'm not asking. Okay? I'm telling you I'm not asking." },
      { s: 'kuromi', f: 'sad', t: "But Melody doesn't know. When it happens she's just in her bed, and then she's... in one of those. The boxes. And she doesn't know, and she's never going to know, because I'm not going to tell her. Who'd tell her that? Hi, Melody, every night you turn into a coffin and I sit outside it. She'd bake about it." },
      { s: 'kuromi', f: 'sad', t: "Somebody should be there. That's all. In case she wakes up in the middle of it and it's green and the moon's huge and nobody's there. She hates waking up and nobody's there. At sleepovers when we were six she'd wake up at two and if I was asleep she'd poke me until I wasn't." },
      { s: 'kuromi', f: 'neutral', t: "So I sit there. That's all it is. Koromaru comes sometimes. He's awake too, when it happens. I can tell. He's the only one in this whole house who'll admit it." },
      { choose: [
        { t: "(Don't confirm anything. Just sit closer.)", notes: 3, stat: { kindness: 1 }, then: [
          { n: "Solar didn't say anything. She moved over on the floor until their shoulders were nearly touching, and stayed there, and let the not-saying be the whole of the answer." },
          { s: 'kuromi', f: 'neutral', t: "...That's the most yes thing anybody's ever not said to me." }
        ] },
        { t: "Mitsuru would want me to say I don't know what you mean.", notes: 2, then: [
          { s: 'kuromi', f: 'neutral', t: "Then say it." },
          { s: 'solar', f: 'flustered', t: "I don't know what you mean." },
          { s: 'kuromi', f: 'happy', t: "Wow. Super convincing. Ten out of ten. Never go into crime." },
          { n: "But something in her shoulders came down an inch, the way they do when you find out you're not the only one holding the heavy end." }
        ] },
        { t: "Does she know you do that?", notes: 2, then: [
          { s: 'kuromi', f: 'serious', t: "NO. And if you tell her, I'll draw on you in your sleep. Permanent. Your whole FACE." },
          { s: 'kuromi', f: 'sad', t: "...She'd make it a thing. She'd say thank you. I couldn't stand it." }
        ] }
      ] },
      { n: "Koromaru woke up eventually, the way dogs do, all at once, and stretched until he trembled, and then climbed directly into Kuromi's lap without asking, sketchbook and all, and turned around twice, and lay down." },
      { n: "Kuromi froze. Her whole face went soft, completely, like a drawing someone had rubbed the angry lines out of with their thumb. She didn't move. She looked like she'd been handed something very fragile and very heavy and had no idea where to put it, so she just held it." },
      { s: 'koromaru', f: 'happy', t: "Arf." },
      { s: 'kuromi', f: 'flustered', t: "...Don't tell anyone about this. Any of it. The dog part or the other part." },
      { choose: [
        { t: "I won't. Rival's honor.", notes: 3, then: [
          { s: 'kuromi', f: 'neutral', t: "...Rival's honor. That's a real thing. You just made it a real thing." },
          { n: "She wrote it down later. Solar saw her do it, on the stairs, in the notebook, in glitter pen, with Koromaru's hair still all over her hoodie." }
        ] },
        { t: "Baku would be jealous.", notes: 2, then: [
          { s: 'kuromi', f: 'happy', t: "Baku would cry. Baku would cry for a WEEK. It'd be great." }
        ] },
        { t: "(Take a photo.)", notes: 0, then: [
          { s: 'kuromi', f: 'surprised', t: "DELETE THAT." },
          { n: "Solar deleted it. Kuromi watched her do it with narrowed eyes. Koromaru didn't wake up." }
        ] }
      ] },
      { n: "In the morning the drawing was taped to the inside of the snack cupboard, where only people who went looking for snacks would ever see it, which in this dorm was everyone." },
      { n: "And that night, or one like it, coming up the stairs very late, Solar found her there again, asleep sitting up against Melody's door with the dog across her feet, and went up and got the blanket off her own bed and came back down and put it over both of them. Neither of them mentioned it. But the blanket came back folded on Solar's bed the next evening, folded badly, with a skull drawn on a sticky note on top, and under the skull, very small, a heart, which had been scribbled out, and then, after what must have been some thought, drawn back in." }
    ] },

    { after: '8/26', title: "6: who's in first", place: 'Iwatodai Dorm · Lounge', time: 'Evening', scene: [
      { music: 'badfeeling' },
      { s: 'newscaster', t: "...with more cases of the condition doctors are calling Apathy Syndrome reported this week in Port Island and Iwatodai. Officials stress that it is not contagious. Families are asked to contact a doctor if a relative becomes unusually withdrawn or unresponsive..." },
      { n: "Junpei turned it off. Nobody asked him to. He just stood up and did it and sat back down, and the lounge was very quiet after that, the late-August kind of quiet with the cicadas going outside like something being wound up and never released." },
      { n: "For two days My Melody hadn't baked." },
      { n: "She had come down to breakfast the morning before last and sat at the table and not eaten, and when Junpei said good morning she'd said morning, in a voice like a recording of somebody else's, and looked at the window. Not at anything in it. Just at the window. Mitsuru had made one phone call, and a Kirijo doctor had come to the dorm that afternoon, a kind man with cold hands, and he'd said rest, and quiet, and familiar people, and that a mild case like this one often came back by itself, and he'd said *often* in a voice everybody in the room heard." },
      { n: "Kuromi hadn't left her side since. She had not been to the lounge or the kitchen. Fuuka had been leaving trays outside the door." },
      { phone: [
        { from: 'kuromi', t: "come upstairs" },
        { from: 'kuromi', t: "pls" }
      ], contact: 'Kuromi' },
      { n: "No capitals. No skull." },
      { place: 'Iwatodai Dorm · 2F Hallway', time: 'Evening' },
      { bg: 'pink-bedroom' },
      { music: 'tender' },
      { n: "Melody's room was pink the way only a room that had been unpacked by Melody could be pink: a quilt her mother had made, a shelf of cookbooks with the spines broken soft, a kitchen timer shaped like an apple on the windowsill. Melody was sitting up on the bed in her pajamas with her hands in her lap, looking at the window. Kuromi was on the floor beside the bed with her back against the frame and the grudge notebook open, and her eyeliner had gone two days without being redone and was smudged out toward her temples like something that had been crying and then stopped and then forgotten it had stopped." },
      { s: 'mymelody', f: 'neutral', t: "Hello, Solar." },
      { n: "That was all. Not oh, Solar! Not you're in the letters. Just the words, set down one after another, polite and empty, like plates on a table nobody was coming to." },
      { s: 'kuromi', f: 'sad', t: "She's been like this since Monday. She says it's fine. Everything's fine. Nothing matters, so it's fine." },
      { s: 'kuromi', f: 'sad', t: "Melody doesn't say nothing matters. Melody thinks EVERYTHING matters. She cried at a bus timetable once because one of the buses only ran on Sundays and she thought it must be lonely." },
      { s: 'kuromi', f: 'serious', t: "I fell asleep. Sunday night. I always sit up, always, every night, and Sunday I fell asleep on my own floor at like eleven-thirty like an IDIOT, and I didn't wake up till it was light. And in the morning she was like this." },
      { s: 'kuromi', f: 'serious', t: "You know what this is. You guys know. The news says nobody knows, but the red one made one phone call and a doctor came in an HOUR. You KNOW." },
      { n: "Solar knew some of what the news didn't say. Not all of it. Not enough of it. It sat in her like a swallowed stone, and Kuromi watched her not say it, and for once didn't make a joke about her face." },
      { choose: [
        { t: "It isn't because you fell asleep.", notes: 3, then: [
          { s: 'kuromi', f: 'serious', t: "You don't KNOW that." },
          { s: 'solar', f: 'serious', t: "I know you. You'd have sat there forever if it would've helped." },
          { n: "Kuromi's mouth did something complicated. She looked down at the notebook so hard it was a wonder the page didn't catch fire." }
        ] },
        { t: "(Don't answer. Sit down on the floor beside her.)", notes: 2, stat: { kindness: 1 }, then: [
          { n: "Solar sat down on the floor with her back against the bed, close enough that their shoulders touched, and Kuromi leaned, very slightly, the way a fence leans after a long wind." }
        ] },
        { t: "The doctor said people come back from it.", notes: 2, then: [
          { s: 'kuromi', f: 'sad', t: "The doctor said SOMETIMES. He said often. Often isn't always. I know the difference. I lose by that difference every year." }
        ] }
      ] },
      { s: 'kuromi', f: 'neutral', t: "I've been reading her my notebook. Out loud. The whole time. If anything wakes her up it's being bragged at. She HATES when I brag. She says it's not like me. It's EXACTLY like me." },
      { n: "She turned to the page near the back. The soft one. THINGS MY MELODY HAS BEATEN ME AT, AGE SIX TO PRESENT. Her voice was hoarse from two days of it, and she read it anyway, to the girl on the bed who was looking at the window." },
      { s: 'kuromi', f: 'serious', t: "Spring Festival junior crown, age six. Age seven. Age eight. Nine. Ten. Eleven. The real one, age fifteen, age sixteen. This spring, which doesn't count, because I didn't even enter, so you beat NOBODY, Melody. You beat an empty space." },
      { s: 'kuromi', f: 'serious', t: "The baking prize. Every year. The same cake. The three-legged race, where you carried me over the line like a sack of rice in front of the WHOLE town." },
      { s: 'kuromi', f: 'sad', t: "Get up. You have to get up so I can beat you. You hear me? I'm in first right now. By DEFAULT. That's the worst way to win, that's not even winning, that's just being the one left." },
      { s: 'kuromi', f: 'sad', t: "Remember who's really in first, Melody. It's you. It's always been you. So get UP and come TAKE it." },
      { n: "Something about the words went through Solar like a key turning in a lock she hadn't known was on her." },
      { bg: 'flashback-hamlim-hallway' },
      { music: 'world-hoax' },
      { n: "A hallway. Bright and loud, lockers banging, the smell of floor wax and somebody's strawberry gum. Two people on either side of her, walking too close, arguing over her head at full volume about which of them got to be first with her, a boy with his arm slung around her shoulders like a scarf he'd decided she needed, a girl with a voice like a nail file, sweet and lethal." },
      { n: "And a phone lit up face-down on a desk in the dark, buzzing itself in a slow circle across the wood, the screen full of capital letters when she turned it over, and one line in the middle of it from somebody called cherryblossoms." },
      { n: "remember who's really in 1st mf" },
      { n: "She'd laughed. Alone, in the dark, with the phone on her chest. That was all she could get hold of. Then it went, the way a word goes when you reach for it, and left only the warmth of having laughed." },
      { bg: 'pink-bedroom' },
      { music: 'tender' },
      { n: "The room came back. Solar had her hand flat on the floorboards. Her heart was going hard and fast and, strangest of all, happy, for people she couldn't put a face to. Neither of the other two had noticed. Melody had turned her head." },
      { n: "Not much. Away from the window. Toward the floor, toward the voice, a few degrees, the way a plant turns, so slowly you only know it happened because it's facing somewhere else." },
      { s: 'mymelody', f: 'neutral', t: "...I didn't carry you." },
      { n: "Kuromi stopped breathing." },
      { s: 'mymelody', f: 'sad', t: "The three-legged race. You wrote that I carried you. I didn't. You twisted your ankle at the bend, and you said go on without me, and I said no, we're a team, and we walked. We came last. You always write it down wrong." },
      { s: 'mymelody', f: 'neutral', t: "...Kuromi. You're reading your notebook out loud. That's my job." },
      { n: "It wasn't like a light coming on. It was more like color coming back into your hands after you come in from the snow, slow, from the knuckles out, and it hurt a little, you could see it hurt a little, and Melody blinked at the room as if somebody had moved all the furniture while she was out, and then looked down at Kuromi on the floor with the notebook and the smeared eyes, and her whole face crumpled with concern." },
      { s: 'mymelody', f: 'sad', t: "Kuromi, your eyeliner. What happened to your eyeliner?" },
      { n: "Kuromi burst into tears. Loudly, furiously, with her mouth set, the way she did everything, and she climbed up onto the bed in one motion and grabbed Melody around the middle and held on so hard they both nearly went over the other side, and said shut up, shut up, shut up, into the pink pajamas, about eleven times, and none of them sounded like shut up." },
      { choose: [
        { t: "(Stay. Hand Kuromi a tissue without looking at her.)", notes: 3, then: [
          { n: "Solar took the box of tissues off the desk and held one out, sideways, eyes on the window, and a hand came and snatched it, and then came back for four more, and nobody said anything about it, and that was its own sentence." }
        ] },
        { t: "So who's in first?", notes: 2, then: [
          { s: 'kuromi', f: 'serious', t: "ME. Obviously. Always. Forever." },
          { s: 'mymelody', f: 'happy', t: "Yes. Kuromi's in first." },
          { s: 'kuromi', f: 'flustered', t: "Don't AGREE with me, it RUINS it!" }
        ] },
        { t: "(Go and tell Mitsuru. Leave them the room.)", notes: 2, then: [
          { n: "Solar went quietly to the door and stood a moment inside it with her hand on the frame where neither of them could see her, listening to Kuromi shout at Melody about how she was never allowed to do that again, and Melody saying yes to all of it, and the shouting going quieter, and quieter, until it was just two voices talking in a pink room. Then she went to find Mitsuru, who was already on the stairs." }
        ] }
      ] },
      { n: "Melody was tired for days afterward, a slow, sleepy tired that the doctor said was normal and good, and she wasn't all the way herself for a while, and everybody pretended not to watch her. But the next morning she came down and asked for toast and said the second piece was burnt, which it was not, and Kuromi took it as the greatest personal victory of her life." },
      { n: "That night Kuromi slept. Properly. Sitting up against Melody's bed with a fistful of her sleeve. And Solar lay upstairs with her phone face-down on her chest, waiting for it to buzz. It didn't. It was only a phone. Her thumb ran over the edge of it anyway, back and forth, as if it knew a password she'd forgotten." }
    ] },

    { after: '9/19', title: "7: rival's dare", place: 'Iwatodai Dorm · Rooftop', time: 'Evening', scene: [
      { music: 'tender' },
      { n: "The roof had become Kuromi's territory by right of conquest. She'd decorated it with skull stickers on the water tank and a string of fairy lights that ran off an extension cord nobody had authorized, and a lawn chair she'd found on the curb, and a sign in black marker on the door that said KUROMI'S 5 HQ, MEMBERS ONLY, under which, in smaller letters, someone had added and koromaru, and under that, in rounder letters, and Melody!!, which Kuromi had crossed out, and then uncrossed." },
      { n: "The dorm had filled up in September, two new girls down the hall from her who had arrived from somewhere nobody explained, one of whom had already lost a pudding to Kuromi and one of whom had stolen it back, which Kuromi described as the opening of a war and was clearly delighted about. The roof was the only place in the building that was still quiet." },
      { n: "September had finally broken the heat, and the night was cool and clear and smelled of somebody's grilled fish from three balconies down, and Kuromi was sitting on the very edge with her boots hanging over the street, which was not allowed, looking up at the sky, which was empty, because it was the city." },
      { s: 'kuromi', f: 'neutral', t: "In Mariland you can see all of them. The stars. It's so high up there's barely any air, and what air there is, is clean. Millions of them. Like somebody spilled sugar on a black tablecloth." },
      { s: 'kuromi', f: 'neutral', t: "I used to sit on our roof and wish on them. Mostly about beating Melody. Sometimes about other stuff." },
      { choose: [
        { t: "What other stuff?", notes: 3, then: [
          { s: 'kuromi', f: 'sad', t: "...That somebody would like me. The real me. Not because I'm scary, or because I'm funny when I'm mad. Not the bit." },
          { n: "She said it fast, all in one breath, and then glared at the city like it was the city's fault for hearing." }
        ] },
        { t: "(Sit down next to her on the edge.)", notes: 2, stat: { courage: 1 }, then: [
          { n: "Solar sat down next to her, boots over nothing, the street a long way down and the wind coming up it. Kuromi glanced over, surprised, and then scooted a little closer, until their shoulders were almost touching, and pretended she hadn't." }
        ] },
        { t: "You can see three from here. Look.", notes: 2, then: [
          { s: 'kuromi', f: 'neutral', t: "That's a plane." },
          { s: 'kuromi', f: 'happy', t: "...I'm wishing on it anyway. Planes count. I said so." }
        ] }
      ] },
      { s: 'kuromi', f: 'neutral', t: "Every spring Mariland has a festival. The Spring Festival. There's a crown. You do a baking round and a talent round and a speech, and the whole town votes by putting paper flowers in your basket. Melody's won it every year since we were six." },
      { s: 'kuromi', f: 'neutral', t: "And I entered every year. Every single year. I'd make a plan, and the plan would blow up, once actually blow up, and she'd win, and I'd stand at the back of the square and swear revenge, and everybody would clap for THAT too. Because that's my part. I'm the part where everybody laughs and then she wins." },
      { s: 'kuromi', f: 'sad', t: "This spring I didn't enter. First time ever. I filled out the exchange form the week of the festival and I didn't even go to the square. I was upstairs packing." },
      { s: 'kuromi', f: 'sad', t: "She won anyway. Obviously. She called me from the stage. In front of everybody. To tell me she'd saved me the end piece." },
      { s: 'kuromi', f: 'neutral', t: "Everybody thinks I'm just a troublemaker. And I am. I'm REALLY good at it. But that's not all I am. I like romance manga and I like cute things and pickled shallots and I keep a notebook, and nobody ever asks about the rest of it because the bit is so loud. If you're loud enough, nobody looks under it. That's the whole trick. I invented it." },
      { n: "Solar knew about the rest. She didn't know how she knew. She knew about the face you put on and the one underneath it, and how much easier it was to be the loud one or the polished one or the one who never got upset than to let anybody see the thing in the middle. She knew it the way you know a song you can't remember learning, all the way through, every word. She just didn't know whose song it was." },
      { choose: [
        { t: "I'm asking about the rest.", notes: 3, then: [
          { s: 'kuromi', f: 'surprised', t: "...You are, aren't you." },
          { n: "And she told her. All of it, in no order. The nine bakeries and which ones gave you the broken cookies free. Baku and his snoring. The first romance manga she ever bought and hid inside a cookbook. The time she tried to be nice for a whole week to see what would happen, and nobody noticed except Melody, who asked if she was sick and brought her soup. The eyeliner. The hat, which had been her grandmother's idea of a joke, and which she had worn every day since out of spite, and then out of love, and somewhere in there she'd stopped being able to tell the difference." }
        ] },
        { t: "I invented it too. I think.", notes: 2, then: [
          { s: 'kuromi', f: 'neutral', t: "Yeah? What's your bit?" },
          { s: 'solar', f: 'neutral', t: "I don't know. That's the problem. I think I had a few." },
          { s: 'kuromi', f: 'neutral', t: "...Huh. A few. That's a lot of bits. That sounds tiring." },
          { n: "It was. Solar didn't say so. Kuromi seemed to hear it anyway, and bumped her shoulder, once, which from Kuromi was a whole speech." }
        ] }
      ] },
      { n: "Then Kuromi swung her boots back over the edge onto the roof and went behind the water tank and came out dragging something long, wrapped in a pink bath towel with rabbits on it, which she laid across Solar's knees with enormous ceremony, and then stood back with her arms folded, the way people stand back from a bomb." },
      { s: 'kuromi', f: 'neutral', t: "I know you go out at night with a long bag. I'm not asking what's in it. I've STOPPED asking. I'm very mature now." },
      { s: 'kuromi', f: 'serious', t: "But I've seen the shape of it. And I've seen you come home. So." },
      { n: "Solar unwrapped it. It was a naginata, an old one, the long curved blade dull with age and the haft dark from a century of somebody else's hands, except that somebody had wound the whole length of the haft in pink ribbon, tight and even, with the patience of a person who had redone it four times, and hung a little enamel kitty charm on a chain at the collar, and beside it, smaller, a tiny red apple." },
      { s: 'kuromi', f: 'neutral', t: "The weird antique shop in the mall. The man said it was for display. I said everything's for display if you're brave enough. Melody did the apple. Her mama says apples are for health. I said it was stupid. She did it anyway. She always does it anyway." },
      { s: 'kuromi', f: 'serious', t: "So. Rival's dare. Whatever you go out and hit with your long bag, you hit it with THIS. In pink. In public. Where everybody can see." },
      { s: 'kuromi', f: 'happy', t: "Bet you won't. Bet you're too cool." },
      { choose: [
        { t: "(Stand up. Spin it once, properly.)", notes: 3, stat: { courage: 1 }, then: [
          { n: "Solar stood up and spun it, once, without thinking, the whole length of it going round her in a hiss of air that set the fairy lights swinging, and brought it to rest with the blade low and steady and the ribbon still settling, and only then remembered she was standing on a roof in front of somebody who had been told nothing." },
          { s: 'kuromi', f: 'surprised', t: "..." },
          { s: 'kuromi', f: 'happy', t: "Okay. So you DEFINITELY do something at night. I'm not asking. I'm just saying. That was SO cool. Do it again. No. Don't. I'll have to write it down." }
        ] },
        { t: "Dare accepted. Shake on it.", notes: 3, then: [
          { s: 'kuromi', f: 'serious', t: "Rivals spit on it." },
          { s: 'solar', f: 'happy', t: "We are not spitting on it." },
          { s: 'kuromi', f: 'flustered', t: "...Fine. Pinky. Pinky's binding. Pinky's MORE binding." },
          { n: "They hooked pinkies over the pink haft, and Kuromi shook once, very hard, like sealing a treaty between two small hostile countries." }
        ] },
        { t: "You redid this ribbon four times.", notes: 2, then: [
          { s: 'kuromi', f: 'flustered', t: "FIVE. And that's NOT the point. The point is it's a DARE." },
          { s: 'kuromi', f: 'neutral', t: "...The fourth time it was crooked by like a millimeter. I could SEE it." }
        ] }
      ] },
      { s: 'kuromi', f: 'neutral', t: "And you have to come home with it. That's part of the dare. You have to bring it back every time. Even if it's bent. Even if it's late. That's the rule." },
      { s: 'kuromi', f: 'happy', t: "Okay. Enough. That's like a year's worth of feelings. I'm going to go draw on Junpei to recover." },
      { n: "She didn't get up, though. She sat back down on the edge with her boots over the street until the fairy lights flickered and the extension cord fell out of the wall downstairs, and then she said, in the dark, without moving, \"Thanks for asking about the rest,\" so quietly it might have been the wind." }
    ] },

    { after: '10/31', title: '8: one for being born', place: 'Iwatodai Dorm · Lounge', time: 'Evening', scene: [
      { music: 'dorm' },
      { ifFlag: 'kuromi-halloween', then: [
        { n: "Solar had known since the afternoon of the thirty-first, when Kuromi had told her loudly, on a public street, holding a cookie with her own name on it, that it was NOT her birthday, and then made her swear on the grudge notebook never to tell a single living soul." }
      ], else: [
        { n: "Solar had worked it out from the sticker on the back of the grudge notebook, which she'd looked at a hundred times without ever reading the very bottom line. Under DO NOT READ OR ELSE, under THIS MEANS YOU JUNPEI, under AND YOU, very small, in pink: if found return to kuromi, birthday 10/31, presents welcome." }
      ] },
      { n: "October thirty-first. Halloween, and the last day of the culture festival, and the whole town busy being scary. It had come and gone. Kuromi had made very sure nobody made a fuss, and nobody had, and she'd gone to bed early, and been strange for days afterward. Quiet. Not drawing on anyone. Mitsuru had actually asked Solar, in the kitchen, in a low careful voice, whether the girl in the hat was unwell, which from Mitsuru was practically sending flowers." },
      { n: "And then Melody had come to Solar's door one night with an almond pound cake in a box and a very serious face." },
      { s: 'mymelody', f: 'serious', t: "Every year since we were six she makes me promise not to tell anybody. And every year I promise, and I keep it, and I leave a cake on her step instead, and she eats it, and we never talk about it." },
      { s: 'mymelody', f: 'happy', t: "But I promised I wouldn't tell anybody. And you're not anybody. You're her rival." },
      { n: "So Solar had told everyone." },
      { music: 'joy' },
      { n: "When Kuromi came downstairs that evening the lounge was dark. And then Aigis, who had been put in charge of the lights, turned them on at precisely the agreed moment and announced, \"Lights: on,\" in a clear, carrying voice, which was somehow the funniest thing that happened all night, and there were black and pink streamers twisted across the ceiling, and skull balloons tied to every chair, and a cake on the counter with pink icing and a crooked black skull piped on top by somebody who had clearly never piped anything before and had tried their absolute hardest." },
      { n: "Junpei had made a banner out of printer paper and tape that said HAPPY (LATE) BIRTHDAY KUROMI YOU MENACE in permanent marker. Yukari had piped the skull. Akihiko had bought a small punching bag and put a bow on it, because, he said, she seemed like she had a lot to get out. Ken had made a card with a drawing of Koromaru on it, and Koromaru was wearing a party hat, actually wearing it, under protest. Fuuka had made a playlist, all of it loud. The two new girls from down the hall had blown up every balloon and were now lying on the floor, lightheaded, recovering. Mitsuru had sent down, by way of Fuuka, a box of very expensive chocolates with a card that said only, Many happy returns. M.K." },
      { n: "My Melody was there with a second cake, because a birthday, she said, should have two cakes. One for being born and one for staying." },
      { n: "Kuromi stood on the bottom step and didn't move." },
      { ifFlag: 'kuromi-halloween', then: [
        { s: 'kuromi', f: 'surprised', t: "I said NOBODY. I said it on a STREET. You SWORE on the NOTEBOOK." }
      ] },
      { s: 'kuromi', f: 'surprised', t: "...It already happened. It was days ago. It's over. You can't have a birthday after it's over." },
      { s: 'kuromi', f: 'sad', t: "Nobody ever... nobody remembers. Melody's is a whole festival. Mine's the same day as Halloween. Everybody's busy being scary. I'm ALWAYS scary. Nobody notices one more day of it." },
      { choose: [
        { t: "I noticed. Late. But I noticed.", notes: 3, then: [
          { n: "Her mouth fell open. Then shut. Then she burst into tears, loudly, furiously, the way she did everything, and came off the bottom step and hugged Solar so hard she knocked her into the banister, and stayed there, with her face in Solar's shoulder and the hat crushed between them." }
        ] },
        { t: "Happy birthday, menace.", notes: 3, then: [
          { s: 'kuromi', f: 'sad', t: "...You guys are all the WORST. I love it. I HATE that I love it." }
        ] },
        { t: "It's not over until you've had cake.", notes: 2, then: [
          { s: 'kuromi', f: 'neutral', t: "...Is that a rule?" },
          { s: 'solar', f: 'neutral', t: "It's in my notebook." },
          { s: 'kuromi', f: 'happy', t: "Your notebook only has like four grudges in it." },
          { s: 'solar', f: 'happy', t: "And one rule. Now." }
        ] }
      ] },
      { s: 'junpei', f: 'happy', t: "Okay, okay, before anybody cries more, she has to blow out the candles. Kuromi. Wish. Make it evil." },
      { s: 'mymelody', f: 'happy', t: "Make it a good one, Kuromi! My mama always says, birthday wishes are the strongest kind, especially late ones, because they've had time to think." },
      { n: "Kuromi stood over the cake for a long time with her eyes shut. Longer than anyone stands over a cake. Long enough that Junpei opened his mouth and Yukari elbowed him. Then she blew, all at once, every candle, and opened her eyes, and looked straight at Solar, and then at My Melody, and then at the floor, very fast, as though she'd been caught." },
      { s: 'kuromi', f: 'neutral', t: "...What would you wish for? No. Not what you did wish. Rival question. Hypothetically. On a cake." },
      { choose: [
        { t: "That you get to be the main character. Just once.", notes: 3, then: [
          { s: 'kuromi', f: 'surprised', t: "..." },
          { s: 'kuromi', f: 'flustered', t: "That's MY wish. You can't wish my wish. That's stealing. That's a crime. ...It's a really good crime." }
        ] },
        { t: "More cake.", notes: 2, then: [
          { s: 'kuromi', f: 'happy', t: "Respect. Honest. Practical. Villainous." }
        ] },
        { t: "If I tell you it won't come true.", notes: 1, then: [
          { s: 'kuromi', f: 'serious', t: "Ugh. Rules. Fine. Keep it. I'll find out. I always find out." }
        ] }
      ] },
      { n: "She ate three slices of the pink cake and two of the pound cake and punched Akihiko's bag for an hour while Akihiko coached her footwork with genuine and alarming joy, and drew a skull on the back of everyone's hand before they went to bed, including Mitsuru's, who held out her hand for it without a word and looked at it for a long moment after, and didn't wash it until morning." },
      { n: "When everyone had gone up, Kuromi stayed on the couch with the notebook on her knees, writing, and Solar, passing the doorway on the way to bed, saw that she'd written only one line, and was sitting looking at it, and smiling at it like it had said something back." }
    ] },

    { after: '11/28', title: '9: notes on my rival', place: 'Iwatodai Dorm · Rooftop', time: 'Evening', scene: [
      { music: 'tender' },
      { n: "The roof again, in November, and cold, the kind of clear cold that makes the city lights look sharper, as if somebody had gone around in the afternoon and polished every one. The fairy lights were still up. The lawn chair had a blanket on it now, and the blanket had a skull on it, because of course it did." },
      { n: "Kuromi was holding the grudge notebook in both hands. She held it out to Solar, open, with her face turned completely away, toward the bay, like someone holding out something that might go off." },
      { s: 'kuromi', f: 'flustered', t: "One page. You can read ONE page. Then I'm throwing myself off the roof." },
      { s: 'kuromi', f: 'serious', t: "Don't read the other pages. If your eyes go to the other pages I'll know. I'll know, Solar." },
      { n: "The page was covered in doodles: skulls and bats and Koromaru in a party hat and My Melody with an extremely angry face, which Solar suspected was the only way Kuromi had ever been able to draw her. And in the middle, in pink glitter pen, in the neatest handwriting Kuromi had, which still leaned like it was running somewhere:" },
      { n: "NOTES ON MY RIVAL. She is very annoying. She never gets mad. She doesn't read my notebook (suspicious). She asks about the rest. She is always counting the doors, I don't think she knows she does it. She comes home at one in the morning with bruises and says she fell on the stairs. (There are fourteen stairs. I counted. Nobody falls that much.) She put a blanket on me in August. (I know it was her. It smelled like her shampoo.) She came to my birthday after it was over." },
      { n: "When Melody went quiet she didn't try to be the one who fixed it. She sat on the floor and let ME do it. Which was evil. Which was the nicest thing anyone ever did for me." },
      { n: "And underneath, smaller: Is she my rival or my friend? (Is that allowed?) (Ask Melody's mama.) (Don't ask Melody's mama.)" },
      { s: 'kuromi', f: 'serious', t: "...So? Which is it? Say something. I'm dying. I'm literally dying out here." },
      { choose: [
        { t: "Both. Definitely both.", notes: 3, then: [
          { s: 'kuromi', f: 'surprised', t: "...Both is allowed?" },
          { s: 'solar', f: 'neutral', t: "You made the rules." },
          { s: 'kuromi', f: 'happy', t: "...I DID make the rules. Okay. Okay okay okay." }
        ] },
        { t: "Friend. You're stuck with me.", notes: 3, then: [
          { s: 'kuromi', f: 'neutral', t: "...But if I'm your friend I can't beat you at things anymore." },
          { s: 'solar', f: 'happy', t: "You've never beaten me at anything." },
          { s: 'kuromi', f: 'serious', t: "THAT'S IT. Rival AND friend. You leave me no choice." }
        ] },
        { t: "You noticed I count the doors?", notes: 2, then: [
          { s: 'kuromi', f: 'neutral', t: "Everybody notices. You walk into the lounge and your eyes go one, two, three, window. Every time. Like you're casing the place." },
          { s: 'kuromi', f: 'happy', t: "It's cool. It's very villain. I respect it." }
        ] }
      ] },
      { n: "She grabbed the notebook back, wrote something very fast with the glitter pen, pressing so hard the page dented, and turned it around. Under the entry, in big letters: BEST FRIEND + BEST RIVAL (BOTH) (ALLOWED). Then she drew a skull wearing a little crown next to it, and colored it in, and blew on the glitter to dry it, and closed the notebook, and held it to her chest." },
      { s: 'kuromi', f: 'neutral', t: "Melody and I talked. After she came back. On her floor, for like three hours, with the toast. She told me something." },
      { s: 'kuromi', f: 'neutral', t: "She said she always wins because she doesn't care about winning. She just shows up. And I always lose because I care SO much, I make it the whole ending, and then I can't move." },
      { s: 'kuromi', f: 'sad', t: "And she said, what if the rival isn't the one who loses. What if she's just the one who's still trying next year." },
      { s: 'kuromi', f: 'flustered', t: "Which is the most Melody thing anybody ever said, and I hate it, and I wrote it down." },
      { choose: [
        { t: "The one who's still trying is the heroine, Kuromi.", notes: 3, then: [
          { s: 'kuromi', f: 'surprised', t: "..." },
          { s: 'kuromi', f: 'sad', t: "...Don't. Don't say stuff like that on a roof. I'll believe it." }
        ] },
        { t: "Melody's smarter than she lets on.", notes: 2, then: [
          { s: 'kuromi', f: 'serious', t: "She's NOT. She's a bunny with a flower on her head." },
          { s: 'kuromi', f: 'neutral', t: "...She's a little smarter than she lets on." }
        ] },
        { t: "Next year's festival, then?", notes: 2, then: [
          { s: 'kuromi', f: 'neutral', t: "...I didn't say that. I didn't say anything about any festival." },
          { n: "She said it to the bay. Her hand had gone flat on the cover of the notebook, the way you put your hand over a letter you haven't decided whether to send." }
        ] }
      ] },
      { n: "They stayed up there until their fingers went numb, under the skull blanket, sharing it badly, and Kuromi talked about Mariland, the bakeries and the one bus and the square where they put up the festival stage every April, and Solar listened, and once, without noticing, Kuromi leaned her head on Solar's shoulder and left it there, and Solar didn't say anything about it, because some things you don't put in the notebook. You just keep." }
    ] },

    { after: '1/9', title: '10: the entry form', place: 'Iwatodai Dorm · Lounge', time: 'Evening', scene: [
      { music: 'tender' },
      { n: "The new term had started and nobody's heart was in it. The lounge still had a few strands of tinsel nobody had taken down, and a pine smell coming off the dying branch Junpei had insisted on dragging in from the shrine, and a thin, early-January quiet, the kind that settles over a house when everyone in it is counting something in their heads and not saying the number out loud." },
      { n: "Kuromi was sitting on the couch with a brand-new notebook in her lap. White, with a pink skull on the cover. The old one was beside her, fat and warped and bristling with stickers, the clasp bent back for good. And between them, opened and flattened and read so many times the folds had gone furry, a long envelope with the Mariland Girls' Academy crest on it." },
      { s: 'kuromi', f: 'neutral', t: "The exchange office sent the packet. The exchange ends in March. They sent the train tickets already, like they're scared I'll forget to leave." },
      { s: 'kuromi', f: 'neutral', t: "And Mariland sent this. They send it to every girl in January. You don't have to fill it in. Nobody makes you." },
      { n: "She held it up. A single sheet: SPRING FESTIVAL, ENTRY FORM. And under it, in Kuromi's handwriting, every line filled in. In pen. Not pencil. Pen." },
      { choose: [
        { t: "(Wait for her to say it.)", notes: 3, then: [
          { n: "Solar waited. Kuromi twisted the end of her hoodie string around one finger until the tip went white, and let it go, and twisted it again." }
        ] },
        { t: "You're entering.", notes: 2, then: [
          { s: 'kuromi', f: 'serious', t: "Don't SAY it. If you say it, it's real." },
          { s: 'kuromi', f: 'neutral', t: "...It's in pen. It's already real. Ugh." }
        ] }
      ] },
      { s: 'kuromi', f: 'serious', t: "I ran away from it. Last spring. I packed a whole suitcase so I wouldn't have to stand next to her on that stage one more time. And I came here. And here I got to be the main character for like a whole year, in a house full of people with secrets and a dog. And it's the best year I ever had." },
      { s: 'kuromi', f: 'serious', t: "And I don't want to have had it just so I could hide." },
      { s: 'kuromi', f: 'happy', t: "So I'm going home and I'm entering. I'm going to stand next to her on that stage on purpose, in front of the whole town, and lose, probably. Or win. I don't even care which. But I'm going to do it like a heroine. Dramatically. With a SPEECH." },
      { s: 'solar', f: 'neutral', t: "And Melody?" },
      { s: 'kuromi', f: 'neutral', t: "Melody says she hasn't decided anything yet, and that it's hers to decide, and she said it so nicely I almost didn't notice she was telling me to mind my own business." },
      { s: 'kuromi', f: 'neutral', t: "She's learning my speech, though. So she can heckle it properly. She says that's what rivals are for." },
      { s: 'kuromi', f: 'flustered', t: "So. I got a new notebook. For the next part. And I want you to write the first page." },
      { n: "She held out the glitter pen. She was very obviously terrified. Her hand shook a little, which on Kuromi looked almost exactly like rage." },
      { choose: [
        { t: "(Write: My rival is the bravest person I know. S.)", notes: 3, then: [
          { cg: 'link-kuromi-r10' },
          { n: "Kuromi read it upside down while Solar was still writing it, which was cheating, and by the time Solar dotted the period she'd gone completely red from the jester hat down." },
          { s: 'kuromi', f: 'flustered', t: "...That's the most embarrassing thing anybody has ever written in my notebook. I'm keeping it forever. I'm going to read it before the festival. I'm going to read it OUT LOUD. On the STAGE." }
        ] },
        { t: "(Draw a skull with a party hat. Sign it.)", notes: 2, then: [
          { cg: 'link-kuromi-r10' },
          { s: 'kuromi', f: 'happy', t: "PERFECT. Ten out of ten. You're a genius. Best rival." },
          { n: "She looked at it for a long time. Then she drew one of her own beside it, the same skull, the same hat, a little crooked, so there were two." }
        ] },
        { t: "(Write: Asked about the rest. Liked all of it.)", notes: 3, then: [
          { cg: 'link-kuromi-r10' },
          { n: "Kuromi read it. Then she read it again. Then she took the pen out of Solar's hand without a word and wrote, underneath, in huge glittery letters that took up half the page: ME TOO. YOU. ALL YOUR BITS. And she underlined it twice, and the second line went off the edge of the paper." }
        ] }
      ] },
      { cg: null },
      { s: 'kuromi', f: 'neutral', t: "Rule one of grudges, by the way. Since I'm leaving you in charge of yours. Anybody hurts you, you write it down. And then you pay it back. With interest. Every time. That's the only rule that matters." },
      { s: 'kuromi', f: 'serious', t: "And I'm going to text you every day. EVERY day. I don't care if you're busy. I don't care if you're doing your long-bag thing. If you don't answer, I'm getting on the 6:40 and three trains and a bus, and I'm coming here, and I'm drawing on your face." },
      { n: "She opened the new notebook to the inside of the back cover and showed her. She had already written the route there. Every change. Every platform. The bus from the station at the bottom of the mountain, and how long it waited, and which seat had the good window. She'd worked it out to the minute, and then worked out the way back, and then, in smaller letters at the bottom, the way back again." },
      { s: 'kuromi', f: 'neutral', t: "It's nothing. It's a train ride. It's like four train rides. It's NOTHING." },
      { n: "She closed the new notebook and put the glitter pen through the clasp to keep it shut, and then she sat with it in her lap and with the old one beside her, one white and one black, and put a hand flat on each, like someone holding two people's hands at once." },
      { s: 'kuromi', f: 'serious', t: "Don't you DARE forget me. I'll know. I'll come back on the first train and draw on your face." },
      { n: "Solar said she wouldn't. She meant it with the whole of herself, and some small careful part underneath the whole of herself noticed that she'd said it, and noticed that she didn't know, any more than anyone did, what she'd remember, or where, or as whom. She didn't say that part. Kuromi wouldn't have liked it. Kuromi would have written it down." }
    ] }
  ],
  afterMax: [
    { title: 'pudding tax', place: 'Iwatodai Dorm · Kitchen', time: 'Evening', scene: [
      { music: 'dorm' },
      { n: "The dorm fridge had a system. Everybody wrote their name on their food in marker and everybody respected it, mostly out of fear of Mitsuru, who had once silently placed a yogurt labeled AKIHIKO on Akihiko's plate at dinner after it had been found in Junpei's room, and said nothing, and let the silence do it." },
      { n: "Kuromi was sitting on the counter with a cup of pudding in one hand and a marker in the other, crossing out YUKARI on the lid in small careful strokes and writing KUROMI over it." },
      { s: 'kuromi', f: 'neutral', t: "It's a tax. Yukari has four puddings. Nobody needs four puddings. I'm redistributing." },
      { choose: [
        { t: "(Hand her a spoon.)", notes: 3, then: [
          { s: 'kuromi', f: 'surprised', t: "...Oh, you're GOOD." },
          { n: "She took the spoon. Then, after a long and very visible struggle with herself, she took a second pudding down off the shelf and crossed out YUKARI on that one too, and wrote SOLAR, and handed it over with the air of someone sharing the spoils of a war." }
        ] },
        { t: "That's Yukari's.", notes: 1, then: [
          { s: 'kuromi', f: 'serious', t: "It SAYS Kuromi. Can't you read? Wow. Sad." }
        ] }
      ] },
      { s: 'yukari', f: 'serious', t: "Has anyone seen my pudding?" },
      { n: "The voice came from the top of the stairs. Kuromi ate the rest of hers in one enormous spoonful, pressed the empty cup into Solar's hand, and was gone out of the kitchen window before Yukari reached the bottom step, and Solar stood in the kitchen with a crossed-out pudding in each hand and her whole face perfectly composed, and Yukari looked at her, and looked at the open window, and sighed the sigh of somebody who had been living with a menace since June, and had come, against every instinct, to dread March." }
    ] },
    { title: 'rival duel', place: 'Iwatodai Dorm · Lounge', time: 'Evening', scene: [
      { music: 'dorm' },
      { n: "Junpei was slumped in the armchair with a handheld game, tongue between his teeth, deep in a boss fight, completely unaware of the two girls on the couch across from him, one of whom was holding a pen like a weapon." },
      { s: 'kuromi', f: 'serious', t: "Rival duel. Sixty seconds. We both draw him. Best drawing wins. Loser does whatever the winner says. GO." },
      { choose: [
        { t: "(Draw Junpei as a gorilla in a baseball cap.)", notes: 3, then: [
          { s: 'kuromi', f: 'surprised', t: "...That's. That's a really good gorilla." },
          { s: 'kuromi', f: 'serious', t: "Fine. FINE. A tie. Rivals are allowed to tie. It's in the rules. I wrote that rule just now." }
        ] },
        { t: "(Draw Kuromi instead.)", notes: 3, then: [
          { s: 'kuromi', f: 'flustered', t: "That's not the TARGET. Why is my hat so BIG." },
          { s: 'kuromi', f: 'neutral', t: "...Can I keep it? For the train. For looking at on the train." }
        ] },
        { t: "(Draw badly on purpose, so she wins.)", notes: 1, then: [
          { s: 'kuromi', f: 'serious', t: "You LET me win. That's the most insulting thing that's ever happened to me. Again. Right now. For real this time." }
        ] }
      ] },
      { s: 'junpei', f: 'happy', t: "Are you guys drawing me? Lemme see." },
      { n: "They both said no at exactly the same time, in exactly the same voice, and looked at each other, and Kuromi taped both drawings inside the snack cupboard next to the dog, where the gallery was getting crowded now, a whole door of evidence that somebody had lived here and been, against her will, very happy." }
    ] },
    { title: 'the baking round', place: 'Iwatodai Dorm · Kitchen', time: 'Evening', scene: [
      { bg: 'iwatodaidorm-kitchen-night-cake' },
      { music: 'joy' },
      { n: "The kitchen smelled of burnt sugar and determination. There was flour on the counter, the floor, the window, Koromaru, and most of Kuromi, who was standing over a loaf tin with an oven mitt on each hand like boxing gloves and the expression of a girl defusing something." },
      { s: 'kuromi', f: 'serious', t: "The festival has a baking round. Melody's going to make the almond pound cake. She ALWAYS makes the almond pound cake. So I'm going to make the almond pound cake. Better. In her own kitchen. With her own recipe." },
      { s: 'kuromi', f: 'neutral', t: "She won't give it to me. She says it's a competition and that wouldn't be fair. So I'm working it out from the napkin she gave Fuuka. Fuuka's been very helpful. Fuuka's been on my side this whole time. I didn't even know I HAD a Fuuka." },
      { n: "Melody was sitting on the far side of the kitchen table with her hands folded and her lips pressed together, watching, with the agonized face of somebody watching a friend walk the wrong way toward a cliff and having promised not to say anything." },
      { s: 'mymelody', f: 'serious', t: "I'm not helping. I'm just sitting. Sitting isn't helping." },
      { n: "The cake came out. It was brown on top and very slightly sunk in the middle, like a bed somebody had just gotten out of, and it smelled almost exactly right, and Kuromi cut a slice with enormous ceremony and put it on a plate and set it in front of Solar, and stood back with both oven mitts clasped in front of her, and didn't breathe." },
      { choose: [
        { t: "(Eat the whole slice. Honestly: it's good.)", notes: 3, then: [
          { s: 'kuromi', f: 'surprised', t: "...Good? Like GOOD good? Like flower-in-the-basket good?" },
          { s: 'mymelody', f: 'happy', t: "It's good, Kuromi. ...It needs more almond. Oh no. I said it. I wasn't going to say it." },
          { s: 'kuromi', f: 'happy', t: "MORE ALMOND. I KNEW IT. Write that down. Somebody write that DOWN." }
        ] },
        { t: "It's sunk in the middle.", notes: 2, then: [
          { s: 'kuromi', f: 'serious', t: "It's not SUNK. It's RESTING. ...It's sunk. Ugh. The oven here is a liar." },
          { n: "She ate the sunk middle herself, standing up, furious, and then cut another slice for Melody, who ate it slowly with her eyes closed and said it tasted like home, which made Kuromi have to go and stand in the pantry for a minute." }
        ] },
        { t: "Melody, what does it need?", notes: 1, then: [
          { s: 'mymelody', f: 'flustered', t: "I can't! It's a competition! ...A little more almond. And love. Mama always says love. It's mostly the almond." },
          { s: 'kuromi', f: 'serious', t: "TRAITOR. Thank you. TRAITOR." }
        ] }
      ] },
      { n: "She made it four more times that week. By the fourth one it didn't sink. By the fifth one Melody tasted it and went quiet and then said, in a small, delighted, terrified voice, oh no, and Kuromi stood in the floury kitchen in her oven mitts with her fists up over her head like a boxer, and Koromaru barked, and the whole dorm ate pound cake for breakfast until March." }
    ] }
  ],
  afterRank: {
    1: { delay: 1, slot: 'evening', msgs: [{ from: 'kuromi', t: "update: junpei found the marker. he has NOT found the other marker 💀" }, { from: 'kuromi', t: "ur still my rival btw. its in pen" }],
      reply: [{ t: 'how many markers do u have', link: 'kuromi', notes: 1, then: [{ from: 'kuromi', t: "enough" }, { from: 'kuromi', t: "never ask a villain that" }] },
        { t: 'rival accepted. again', link: 'kuromi', notes: 2, then: [{ from: 'kuromi', t: "GOOD 🖤" }, { from: 'kuromi', t: "dont get comfortable" }] }] },
    3: { delay: 1, slot: 'evening', msgs: [{ from: 'kuromi', t: "she left ANOTHER cake outside my door" }, { from: 'kuromi', t: "i ate it. thats not the point. the point is she KNOWS i ate it" }],
      reply: [{ t: 'was it good tho', link: 'kuromi', notes: 2, then: [{ from: 'kuromi', t: "..." }, { from: 'kuromi', t: "it was SO good. i hate it here" }] },
        { t: 'u could just say thank u', link: 'kuromi', notes: 1, then: [{ from: 'kuromi', t: "i could also just walk into the sea" }, { from: 'kuromi', t: "both r equally likely" }] }] },
    6: { delay: 1, slot: 'evening', msgs: [{ from: 'kuromi', t: "she ate breakfast" }, { from: 'kuromi', t: "2 toast. she said the second one was burnt. it was NOT burnt" }, { from: 'kuromi', t: "shes so annoying 🖤" }],
      reply: [{ t: 'best text ive ever gotten', link: 'kuromi', notes: 3, then: [{ from: 'kuromi', t: "shut up" }, { from: 'kuromi', t: "same" }] },
        { t: 'did u sleep', link: 'kuromi', notes: 2, then: [{ from: 'kuromi', t: "like 11 hrs. on her floor" }, { from: 'kuromi', t: "dont tell ANYONE" }] }] },
    7: { delay: 1, slot: 'evening', msgs: [{ from: 'kuromi', t: "so" }, { from: 'kuromi', t: "did u USE it" }, { from: 'kuromi', t: "the kitty. dont lie ill know" }],
      reply: [{ t: 'it hits really hard actually', link: 'kuromi', notes: 3, then: [{ from: 'kuromi', t: "I KNEW IT" }, { from: 'kuromi', t: "pink is the strongest color. its science" }, { from: 'kuromi', t: "u brought it back right. thats the rule" }] },
        { t: 'im not telling', link: 'kuromi', notes: 2, then: [{ from: 'kuromi', t: "ugh. fine" }, { from: 'kuromi', t: "ill find out. i ALWAYS find out 💀" }] }] }
  },
  holidays: {
    '10/31': { rank: 4, slot: 'after', title: 'halloween', place: 'Paulownia Mall · Central Atrium', time: 'After School', music: 'joy',
      ask: "the festival is LAME. mall. after. its NOT for any reason 💀",
      yes: 'ok. whats the reason',
      ok: "THERE IS NO REASON. fountain. 20 min. dont bring ANYBODY",
      sorry: 'cant today, sorry!!',
      no: "FINE. its not like its a special day or anything. bc its NOT",
      scene: [
        { n: "Paulownia Mall had gone all the way in for Halloween, the way Japanese malls did that year, as if somebody in an office had read about it in a magazine and taken it as an order: orange and black bunting looped from every railing, a pyramid of plastic jack-o'-lanterns in the atrium with a speaker inside one of them playing a cackle on a loop, and every shop girl in the building wearing the same pair of cat ears." },
        { n: "Kuromi was waiting by the pyramid in her usual clothes. Black jester hat, pink skull, bandage, pink hoodie. In the twenty minutes Solar had taken to get there, three separate strangers had complimented her on her costume, which she was taking as a personal insult and also, visibly, loving." },
        { s: 'kuromi', f: 'serious', t: "This is my FACE. This is how I LOOK. A little kid asked if I was the clown from the pachinko commercial. I'm not a CLOWN. I'm not from a COMMERCIAL." },
        { s: 'kuromi', f: 'neutral', t: "Okay. We're here for no reason. We're just two people at a mall. On a normal day. Which this is. Let's go look at the stupid pumpkins." },
        { n: "They looked at the stupid pumpkins. They shared a bag of black-sesame taiyaki shaped like bats, which the stand had renamed for the week, and Kuromi bit the heads off every one first and said it was the only respectful way. And then they passed the sweets stall by the escalator, and the girl behind it in her cat ears looked up, and looked at the hat, and lit up." },
        { s: 'stallclerk', t: "Oh! You're her! Jester hat, pink skull. A girl came by this morning and paid for this in advance. She said you'd come past today, and that I should give it to you, and that you'd pretend it wasn't yours." },
        { n: "She held out a box with a cellophane window. Inside was a big round cookie iced black, with a pink skull piped on it, and around the skull in careful pink letters: HAPPY BIRTHDAY KUROMI. A small paper rabbit had been tucked into the corner of the box." },
        { s: 'kuromi', f: 'surprised', t: "That's a DIFFERENT Kuromi." },
        { s: 'stallclerk', t: "She said you'd say that, too." },
        { n: "Kuromi took the box. She took it the way you'd take a summons. She walked twenty steps away from the stall to the far side of the jack-o'-lantern pyramid, where the cackle was loudest, and turned around and pointed at Solar with the whole box." },
        { s: 'kuromi', f: 'serious', t: "It is NOT my birthday. Listen to me. It's Halloween. Everybody's busy. It's a busy day. Nobody has a birthday on a busy day, it's not ALLOWED, it gets lost." },
        { s: 'kuromi', f: 'serious', t: "And nobody at the dorm knows. And nobody is GOING to know. Ever. Not Junpei. Not the red one. Not the dog. NOBODY." },
        { choose: [
          { t: "Happy not-birthday.", notes: 3, then: [
            { s: 'kuromi', f: 'surprised', t: "..." },
            { s: 'kuromi', f: 'neutral', t: "...That's allowed. Not-birthday is allowed. Not-birthday doesn't count, so nobody has to do anything about it." },
            { n: "She said it very fast, and looked at the cookie, and her mouth did something at the corner that she had to put the back of her hand against." }
          ] },
          { t: "(Buy her a candy apple. Don't say why.)", notes: 2, stat: { kindness: 1 }, then: [
            { n: "Solar went back to the stall and bought a candy apple, red, glossy as a fire engine, and handed it over without a word, and Kuromi looked at it, and at her, with narrowed eyes, for a long time." },
            { s: 'kuromi', f: 'serious', t: "...Why did you buy me that. On a normal day. For no reason." },
            { s: 'solar', f: 'neutral', t: "No reason." },
            { s: 'kuromi', f: 'flustered', t: "GOOD. That's the right answer. That's the only right answer." }
          ] },
          { t: "Your secret's safe with me.", notes: 2, then: [
            { s: 'kuromi', f: 'serious', t: "Swear it. On the notebook. Hand on the skull." },
            { n: "She held the grudge notebook out from her hoodie pocket and Solar put her hand on the skull and swore, very seriously, in the middle of Paulownia Mall, under the cackling pumpkin, and two passing middle-schoolers stared, and Kuromi stared back until they left." }
          ] }
        ] },
        { flag: 'kuromi-halloween' },
        { n: "They ate the cookie on the bench outside the mall, half each, with the October wind coming round the corner and the sky going early orange over the station. Kuromi broke it exactly down the middle of the skull and gave Solar the half with the most icing, and didn't comment on it, and neither did Solar." },
        { s: 'kuromi', f: 'neutral', t: "For the record. If somebody WAS having a birthday. Which nobody is. This would be a pretty okay one." },
        { n: "She put the little paper rabbit from the box into the notebook, between two pages near the back, very carefully, flattening it with her palm, and closed it, and kept her hand on the cover all the way home." }
      ] }
  }
});
