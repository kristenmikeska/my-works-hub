/* Kuromi · XVI Tower. Revamp social link data (femc-game.html). Format: link fields in assets/femc/game/core.js, scene lines in scene.js.
   Visitor (Sanrio), first wave (6/8). Friendship only (v1's crush is cut). Kat's portraits make Kuromi and My Melody human
   girls: long black hair streaked pink, a black jester hat with a pink skull, a bandage across her nose, a pink hoodie.
   The ending she runs from: always the rival, never the heroine. She lands on the dorm roof and moves in.
   Rank 3: My Melody follows her through (second wave). Rank 6: Melody grows faint after the Last Train and Kuromi anchors
   her (rivals to friends), which sets off a Hoax flashback (Cherry's "remember who's really in 1st"). No fragment there.
   Rank 8 is her birthday (10/31), written so it plays as a late party whenever it comes.
   Cast-only speakers: none. afterMax: scenes for after rank 10 (engine support pending). */
(window.FEMC_GAME_LINKS ||= []).push({
  id: 'kuromi', name: 'Kuromi', short: 'Kuromi', arcana: 'Tower', numeral: 'XVI', from: 'Sanrio',
  kind: 'visitor',
  romance: null,
  starts: '6/10',
  home: { area: 'dorm', spot: 'Lounge', slot: 'evening', days: [0, 1, 2, 3, 4, 5, 6],
          hint: 'Evenings, any day, in the dorm lounge, usually in the middle of a crime.' },
  approach: "There's a girl in a black jester hat crouched on the arm of the lounge couch with a marker in her teeth, and Junpei is asleep under her. This is about to be a crime.",
  cast: {},
  invite: {
    ask: [
      "RIVAL. lounge. now.",
      "i need an accomplice. dont ask questions",
      "r u free. its important (its not important)",
      "junpei is asleep on the couch again. this is NOT a drill 💀",
      "im bored and its ur fault somehow. come fix it",
      "rival meeting. downstairs. attendance is MANDATORY",
      "do u have a marker. asking for evil reasons 🖤"
    ],
    ok: ["heh. perfect 💀", "GOOD. dont be late or ur disqualified", "finally. ur rival is waiting 🖤"],
    no: ["UGH. fine. traitor", "boooo. ur on the list now", "fine. ill cause chaos ALONE. hope ur happy"]
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
          { s: 'kuromi', f: 'serious', t: "It's a STYLE. Punks read upside down. Look it up." }
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
      { n: "When the credits rolled she stood up and stretched and said \"Lame\" and went upstairs, and ten minutes later Solar heard a door open on the third floor and every light in the hallway come on at once, and stay on." }
    ],
    [
      { n: "Every cushion in the lounge was gone. Solar found them heaped behind the couch, built into something with a bedsheet over the top and a broom handle holding up the middle, and a boot sticking out of the entrance. The boot wiggled when she came closer." },
      { s: 'kuromi', f: 'serious', t: "Password." },
      { choose: [
        { t: "Junpei is a loser.", notes: 3, then: [
          { s: 'kuromi', f: 'surprised', t: "...That's the actual password. How did you KNOW." },
          { n: "The sheet lifted. Inside it was surprisingly roomy, lit by a flashlight and stocked with chips and a jar of pickled shallots and Koromaru, who had clearly been recruited with the chips." }
        ] },
        { t: "Please?", notes: 1, then: [
          { s: 'kuromi', f: 'neutral', t: "Wrong. Polite people can't come in. It's a PUNK fort." },
          { s: 'kuromi', f: 'flustered', t: "...Fine. Probation. Get in before somebody sees." }
        ] },
        { t: "(Crawl in anyway.)", notes: 2, then: [
          { s: 'kuromi', f: 'happy', t: "HEY. Breaking and entering. ...Respect, honestly. Sit there. Don't touch the shallots." }
        ] }
      ] },
      { s: 'junpei', f: 'neutral', t: "Okay, who took the cushions? I just wanna SIT." },
      { n: "Kuromi switched off the flashlight. In the dark under the bedsheet she put a finger to her lips, and they sat there, the two of them and the dog, not breathing, while Junpei walked three slow laps of the lounge and gave up and sat on the floor, and Kuromi shook with silent, perfect joy the whole time against Solar's shoulder." }
    ]
  ],
  ranks: [
    { after: '6/10', title: '1: rival', place: 'Iwatodai Dorm · Lounge', time: 'Evening', scene: [
      { music: 'dorm' },
      { n: "Junpei had fallen asleep on the lounge couch with his mouth open and his cap over one eye, which was not unusual. What was unusual was that somebody was crouched on the arm of the couch above him, drawing on his face with a black marker, with her tongue between her teeth and the total focus of a surgeon." },
      { n: "She was a girl about Solar's age, long black hair streaked through with hot pink, under a black jester's hat with two floppy points and a little pink skull pinned to the front. There was a bandage across the bridge of her nose that looked decorative. Her hoodie was pink. Her scarf was polka-dotted. Everything about her looked like it had been designed to be told off." },
      { n: "Two nights ago, on the walk home, there had been a girl on a rooftop across the street from the dorm, Solar remembered. A small dark shape against the green sky with two points on her head, sitting on the edge with her legs swinging. Solar had thought it was a cat. It had not been a cat." },
      { n: "The girl looked up when Solar came in. She did not stop drawing." },
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
      { s: 'kuromi', f: 'neutral', t: "I'm Kuromi. THE Kuromi. Leader of Kuromi's Five, terror of Mary Land, mostly, sometimes, when there's nothing on TV." },
      { register: 'kuromi' },
      { n: "She'd come through in the green two nights ago, she explained, still drawing, as if it were all very boring. She'd been standing on the roof of her hideout in a place called Mary Land, and then she'd been standing on a roof in a place called not Mary Land, and all the people in the street below had turned into big black coffins, which she said was, honestly, kind of cool." },
      { s: 'kuromi', f: 'neutral', t: "And there was a girl down in the street. Little. Big coat. Like, way too big, like she borrowed it off a bear. She was the only other thing awake out there." },
      { s: 'kuromi', f: 'neutral', t: "She looked up at me and pointed at this building and said, \"They're awake in that one. Go there.\" Like a tour guide. And then she said sorry, which, WHY, and I looked at the building and back and she was gone." },
      { s: 'kuromi', f: 'happy', t: "So I came. Obviously. And everybody in here was AWAKE. With GUNS. To their HEADS. Which was the most punk thing I've ever seen in my life. So I'm staying." },
      { ifMet: ['wren'], then: [
        { n: "A coat way too big for her. Solar thought of the station bench, and a collar turned up against no wind, and a voice saying sorry for things that weren't her fault, and decided, for no reason she could name, not to mention it." }
      ] },
      { s: 'solar', f: 'neutral', t: "Does Mitsuru know you're staying?" },
      { s: 'kuromi', f: 'neutral', t: "The scary red one? She found me on the roof this morning. She looked at me for like a whole minute without blinking. Then she said there's a futon in the storage room on the third floor and the bath schedule is on the fridge." },
      { s: 'kuromi', f: 'flustered', t: "I think she likes me. I can't tell. I think she might be a villain too." },
      { n: "She capped the marker and sat back on her heels to look at her work. Junpei now had glasses, a monocle over the glasses, a curling mustache, and the word LOSER written in neat block capitals across his forehead, backwards, so he'd be able to read it properly in a mirror. It was, Solar had to admit, extremely thorough." },
      { s: 'kuromi', f: 'neutral', t: "Okay. Listen. I've decided something." },
      { s: 'kuromi', f: 'serious', t: "You're my rival now." },
      { choose: [
        { t: "I accept.", notes: 3, then: [
          { s: 'kuromi', f: 'surprised', t: "...You ACCEPT? Nobody accepts! They're supposed to get mad! They're supposed to say \"Kuromi, how DARE you\"!" },
          { s: 'kuromi', f: 'serious', t: "Ugh. Fine. Good. Rival accepted. Prepare yourself. You don't even know what you've done." }
        ] },
        { t: "Why me?", notes: 2, then: [
          { s: 'kuromi', f: 'neutral', t: "Because you didn't tell on me. That's suspicious. Rivals are suspicious. It's perfect." }
        ] },
        { t: "I don't really do rivals.", notes: 1, then: [
          { s: 'kuromi', f: 'happy', t: "That's what a rival WOULD say. Too late. It's in my diary. It's official." }
        ] }
      ] },
      { n: "When Junpei woke up he went to the bathroom, looked in the mirror, and screamed, and then he chased Kuromi around the whole dorm for twenty minutes, up and down every staircase, while she shrieked with laughter and slid down banisters and once, to Solar's real alarm, went out of the second-floor window and back in through the kitchen. He never caught her. On the way past the lounge doorway, mid-flight, she pointed at Solar and yelled RIVAL, like a promise, like a threat, and Solar, for reasons she didn't look at too closely, laughed so hard she had to sit down on the stairs." }
    ] },

    { after: '6/21', title: '2: the diary', place: 'Iwatodai Dorm · Lounge', time: 'Evening', scene: [
      { music: 'dorm' },
      { n: "There was a diary on the lounge couch, wedged down between two cushions where somebody had obviously been lying with it and fallen asleep and then been called away. Black, with a pink skull on the cover, and a little gold lock that was not, it turned out, locked, because the clasp had been bent open by somebody who had locked herself out of it once and given up on locks entirely." },
      { n: "Solar knew whose it was. There was a sticker on the back that said PROPERTY OF KUROMI, DO NOT READ OR ELSE, and under it in smaller letters, THIS MEANS YOU JUNPEI, and under that, smaller still, AND YOU, with no name, which Solar found she took personally." },
      { n: "She picked it up. It was warm from the cushions. It was heavier than it looked, the way notebooks are when somebody has written in every corner of every page and pressed hard. She held it for a second with her thumb on the bent clasp." },
      { choose: [
        { t: "(Put it on the high shelf where it won't get sat on. Don't open it.)", notes: 3, then: [
          { n: "She put it on the shelf above the television, behind Mitsuru's row of business magazines, where nobody would ever look, and squared it with the edge, and sat down with her own homework." }
        ] },
        { t: "(Put it back exactly where it was.)", notes: 2, then: [
          { n: "She tucked it back between the cushions, exactly, at the same angle, so it would look untouched, and sat down in the armchair across from it, and felt, absurdly, like a guard." }
        ] },
        { t: "(Open it. Just the first page.)", notes: 0, then: [
          { n: "She opened it. The first page was a drawing of a very angry rabbit-eared girl stabbing a cake with a fork, and the words TODAY I HATE: in big letters, and a list, and the first thing on the list was crossed out so hard the pen had gone through. She shut it fast. Her face was hot. She put it on the shelf and didn't look at it again." }
        ] }
      ] },
      { s: 'kuromi', f: 'surprised', t: "WHERE IS MY DIARY." },
      { n: "Kuromi came into the lounge at a dead run from the stairs, hat askew, wild-eyed, and stopped like she'd hit a wall when she saw it, and saw Solar, and saw that Solar was doing her homework." },
      { s: 'kuromi', f: 'serious', t: "...Did you read it?" },
      { s: 'solar', f: 'neutral', t: "No. It's yours." },
      { n: "Kuromi looked at her for a long time, eyes narrowed, the way you'd look at a dog that had been left alone with a steak and hadn't touched it. Like she was looking for the trick. There wasn't one. Solar could see her not finding it." },
      { s: 'kuromi', f: 'neutral', t: "...Nobody's ever not read it before. Everybody reads it. My Melody reads it OUT LOUD. To my FACE. And then she says \"oh, Kuromi, you're so funny\" like it's a compliment." },
      { choose: [
        { t: "I read the sticker. It said not to.", notes: 3, then: [
          { s: 'kuromi', f: 'serious', t: "The sticker is PUBLIC. That's fine. The sticker is a WARNING." },
          { s: 'kuromi', f: 'neutral', t: "...Nobody ever listens to the sticker." }
        ] },
        { t: "Who's My Melody?", notes: 2, then: [
          { s: 'kuromi', f: 'serious', t: "My RIVAL. My REAL rival. My ARCH-rival. You're like... a regional rival. Don't get a big head." },
          { s: 'kuromi', f: 'neutral', t: "She's pink and everybody loves her and she's always the main character and she doesn't even TRY. You'd hate her. You'd love her. Everybody does both." }
        ] },
        { t: "Everyone deserves one thing nobody reads.", notes: 2, then: [
          { n: "Kuromi didn't say anything to that. She took the diary down off the shelf and held it against her chest with both arms, the way you'd hold something that had nearly been run over." }
        ] }
      ] },
      { s: 'kuromi', f: 'serious', t: "That's so suspicious. You're up to something. I'm watching you." },
      { n: "She took the diary upstairs. Twenty minutes later she came back down and sat on the far end of the couch with it open on her knees and a glitter pen, writing, and every now and then she looked up at Solar over the top of the page, and narrowed her eyes, and wrote something else, fast, and covered it with her arm." },
      { n: "Solar did her homework. She didn't look. She found, a little to her own surprise, that she didn't want to, the way you don't want to read a letter over somebody's shoulder even when they'd never know. She had the strangest feeling she knew what it was like to have one place in the world that was only yours. She couldn't think where hers was. She was fairly sure she'd had one." }
    ] },

    { after: '7/8', title: '3: my melody', place: 'Iwatodai Dorm · Front', time: 'Evening', scene: [
      { music: 'joy' },
      { n: "The doorbell rang on a muggy evening the day after the full moon, and Yukari answered it, and came back into the lounge with the expression of somebody who had opened the door and found a cartoon on the step." },
      { s: 'yukari', f: 'surprised', t: "Um. There's a... girl? In a pink bunny hood? She says she's looking for Kuromi? She brought a cake?" },
      { n: "Solar went to look. On the step, in the wet orange light of the streetlamp, stood a soft round-faced girl with long pink hair under a pink hood with two long floppy rabbit ears, and a big flower at one ear, and a cake box held in front of her in both hands like an offering at a shrine." },
      { s: 'mymelody', f: 'happy', t: "Hello! I'm My Melody! I've come to visit my friend Kuromi! I brought almond pound cake! My mama always says, when you go to someone's house, never go empty-handed!" },
      { n: "Upstairs, a door crashed open hard enough to rattle the pictures in the hall." },
      { s: 'kuromi', f: 'surprised', t: "NO." },
      { n: "Kuromi came down the stairs three at a time in her socks and stopped on the bottom step with both hands on the banisters, hat crooked, breathing hard, and stared at the girl on the doorstep with a face Solar had never seen on her. Not anger. Something under anger, something that had climbed up and was wearing anger like a coat." },
      { s: 'kuromi', f: 'serious', t: "How. HOW are you here. This is MY place. I found it. You don't get to have everything AND this." },
      { s: 'mymelody', f: 'happy', t: "I don't know! Last night it went all green and sparkly and I was standing in a funny street, and a nice girl in a big coat said, \"Your friend's in that house.\" And I said, Kuromi? And she said yes!" },
      { s: 'mymelody', f: 'neutral', t: "And then she said sorry. I don't know why. I told her it was okay." },
      { s: 'kuromi', f: 'serious', t: "I am NOT your FRIEND. I am your RIVAL. Your ARCH-RIVAL. We've been over this for YEARS." },
      { s: 'mymelody', f: 'happy', t: "My mama always says, a rival is just a friend who doesn't know it yet!" },
      { s: 'kuromi', f: 'serious', t: "Your MAMA doesn't know ANYTHING." },
      { choose: [
        { t: "Kuromi, she brought cake.", notes: 2, then: [
          { s: 'kuromi', f: 'neutral', t: "...What kind of cake." },
          { s: 'mymelody', f: 'happy', t: "Almond pound cake!" },
          { s: 'kuromi', f: 'serious', t: "...She can come in for the cake. ONLY for the cake. The cake is the guest. She's just carrying it." }
        ] },
        { t: "(Let them fight it out. Sit on the stairs and watch.)", notes: 3, then: [
          { n: "Solar sat on the stairs. It was, in its way, magnificent. Kuromi shouted. My Melody agreed with everything she shouted, warmly, and then offered her cake, and Kuromi shouted louder, and My Melody said that was a very good point and also did she want the end piece, because she knew Kuromi liked the end piece, and Kuromi said she did NOT like the end piece, and took it, and ate it standing in the doorway, furious." }
        ] },
        { t: "Come in. Any friend of Kuromi's.", notes: 1, then: [
          { s: 'kuromi', f: 'surprised', t: "RIVAL. Any RIVAL of Kuromi's. Get it RIGHT." },
          { s: 'mymelody', f: 'happy', t: "Thank you! You're very kind! Kuromi, she's very kind!" }
        ] }
      ] },
      { place: 'Iwatodai Dorm · Lounge', time: 'Evening' },
      { n: "By nine o'clock My Melody had met everyone in the dorm and everyone in the dorm adored her. It was like watching weather. Yukari let her try on her pink cardigan. Junpei did his best impression of a baseball announcer for her and she clapped. Akihiko came in from a run and she offered him cake and he ate four pieces, for the protein, he said, which nobody contradicted. Even Mitsuru, passing through on the way to the fourth floor, stopped and said it was very good pound cake, in a voice that meant she'd had a second slice in the kitchen." },
      { n: "Kuromi sat at the far end of the couch with her knees up and her hat pulled down to her eyebrows and ate nothing and said nothing. Solar went and sat next to her." },
      { s: 'kuromi', f: 'sad', t: "See? Everybody. Every single time. She walks in and everybody loves her and she's the main character and I'm the... the one in the background making a face." },
      { s: 'kuromi', f: 'sad', t: "In every story. Every one. She's the heroine and I'm the rival. The rival doesn't get the ending. The rival gets a sad face and a sequel." },
      { choose: [
        { t: "Nobody in this dorm moved in for her. They moved in around you.", notes: 3, then: [
          { s: 'kuromi', f: 'neutral', t: "...That's a stupid thing to say." },
          { s: 'kuromi', f: 'neutral', t: "...Say it again but quieter." }
        ] },
        { t: "She came all this way to find you, though.", notes: 2, then: [
          { s: 'kuromi', f: 'serious', t: "She does that. She FOLLOWS me. Everywhere. It's the worst thing about her." },
          { n: "She said it the way people said the worst thing about the ocean was how big it was." }
        ] },
        { t: "You can be the heroine here. Nobody's written anything yet.", notes: 2, then: [
          { s: 'kuromi', f: 'surprised', t: "..." },
          { s: 'kuromi', f: 'neutral', t: "Heroines are boring. They cry all the time. ...I'll think about it." }
        ] }
      ] },
      { n: "When My Melody left, to go wherever the nice girl in the coat had told her she was staying, she stopped in the doorway and turned back and waved, not at the room, but at the far end of the couch. Kuromi didn't wave back. She waited until the door had shut, and then she got up and went to the window and watched the pink hood go all the way down the street, until it turned the corner, and then she went upstairs without a word, and on the stairs she ate the last slice of pound cake out of her hand, and Solar heard her say, to nobody, with her mouth full, \"Stupid,\" and it didn't sound like she meant anybody but herself." }
    ] },

    { after: '7/24', title: '4: shoujo manga', place: 'Iwatodai Strip · Bookworms', scene: [
      { music: 'day' },
      { n: "Bookworms was a tiny used bookshop on the Strip run by an old couple who were so kind it was almost unbearable, and Kuromi had been going there every day since the summer break started, and buying one shoujo manga each time with exact change, and carrying it home inside a car magazine so nobody would see the cover." },
      { s: 'kuromi', f: 'serious', t: "It's RESEARCH. For EVIL. You have to understand your enemy." },
      { s: 'kuromi', f: 'neutral', t: "The enemy is love. It's extremely confusing. Everybody in these is an idiot." },
      { n: "She'd let Solar come along today on the condition that Solar didn't look at any of the covers and didn't say the word cute, and they sat on the bench outside the shop under the awning with the summer heat coming up off the pavement in shimmers, and Kuromi read the good parts out loud in different voices, very dramatically, with her hat pulled low so nobody walking by could tell who was doing it." },
      { s: 'kuromi', f: 'neutral', t: "Okay. So. He's a delinquent. She's the class rep. They HATE each other. Except they don't. Obviously. And then there's a festival and her sandal breaks." },
      { s: 'kuromi', f: 'serious', t: "And there's this OTHER girl. The rival. She's got a ponytail and she's mean and she's way funnier and she likes him first. FIRST. Since middle school." },
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
      { n: "She bought the next volume on the way out, with exact change, and the old woman at the counter wrapped it in brown paper without being asked and put a strawberry candy on top, and Kuromi said thank you so quietly Solar almost missed it, and then glared at Solar for having heard." }
    ] },

    { after: '8/12', title: '5: koromaru', place: 'Iwatodai Dorm · Lounge', time: 'Evening', scene: [
      { music: 'dorm' },
      { n: "Kuromi was mean to everyone. That was the rule. She'd explained it to Solar with great seriousness on the second night: everybody gets a little bit of mean, it builds character, it's a service, really. Junpei got a lot. Yukari got some. Akihiko got some, and didn't notice, which made Kuromi furious. Mitsuru got almost none, out of what Kuromi described as professional respect between villains." },
      { n: "But she was never mean to Koromaru." },
      { n: "The dog had moved into the dorm that month, along with a small boy with a very serious face and a tall one in a long coat who smelled of cigarettes and cooked better than anyone had a right to, and the lounge had gotten crowded in a way that made it feel, for the first time, like a place people lived. Koromaru had taken one look at all of it and chosen the rug in front of the couch, and Kuromi had chosen the floor beside the rug, and that, apparently, was that." },
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
      { s: 'kuromi', f: 'sad', t: "I have a guy like this at home. Baku. He's my sidekick. He's purple and he's useless and he falls asleep in every single plan. And he's never once asked me to be nicer." },
      { s: 'kuromi', f: 'sad', t: "I didn't even say bye to him. I was on the roof yelling at the sky about Melody and then I was here." },
      { n: "Koromaru woke up eventually, the way dogs do, all at once, and stretched until he trembled, and then climbed directly into Kuromi's lap without asking, sketchbook and all, and turned around twice, and lay down." },
      { n: "Kuromi froze. Her whole face went soft, completely, like a drawing someone had rubbed out the angry lines of with their thumb. She didn't move. She looked like she'd been handed something very fragile and very heavy and had no idea where to put it, so she just held it." },
      { s: 'koromaru', t: "Arf." },
      { s: 'kuromi', f: 'flustered', t: "...Don't tell anyone about this." },
      { choose: [
        { t: "I won't. Rival's honor.", notes: 3, then: [
          { s: 'kuromi', f: 'neutral', t: "...Rival's honor. That's a real thing. You just made it a real thing." },
          { n: "She wrote it down later. Solar saw her do it, on the stairs, in the diary, in glitter pen, with Koromaru's hair still all over her hoodie." }
        ] },
        { t: "Baku would be jealous.", notes: 2, then: [
          { s: 'kuromi', f: 'happy', t: "Baku would cry. Baku would cry for a WEEK. It'd be great." },
          { s: 'kuromi', f: 'sad', t: "...I'll tell him about this guy. When I get home. If." }
        ] },
        { t: "(Take a photo.)", notes: 0, then: [
          { s: 'kuromi', f: 'surprised', t: "DELETE THAT." },
          { n: "Solar deleted it. Kuromi watched her do it with narrowed eyes. Koromaru didn't wake up." }
        ] }
      ] },
      { n: "Solar didn't tell anyone. She went to bed at midnight and Kuromi was still on the floor with a dog in her lap and a pen in her hand and a sketchbook she hadn't turned the page of in an hour, and in the morning the drawing was taped to the inside of the snack cupboard where only people who went looking for snacks would ever see it, which in this dorm was everyone." }
    ] },

    { after: '8/26', title: '6: first place', place: 'Iwatodai Dorm · Rooftop', time: 'Evening', scene: [
      { music: 'night' },
      { n: "Kuromi texted at ten at night, which she never did, because she was usually ten feet away. The text said roof. Just that. No skull. No caps." },
      { n: "Up on the dorm roof the heat of the day was coming back up out of the concrete, and the city was a carpet of lights all the way to the bay, and Kuromi was sitting with her back against the water tank and her knees up, and beside her, with her hood down and her pink hair spilling out of it, was My Melody." },
      { n: "Solar saw it from the door. In the light from the stairwell My Melody's edges were wrong. Not much. Her hands in her lap were too pale, and the pale went all the way through, so that Solar could see, very faintly, the shape of the concrete through the backs of her fingers. Like a drawing in pencil somebody had started to erase and stopped." },
      { s: 'mymelody', f: 'happy', t: "Oh, hello! Kuromi said you'd come! She said you'd know what to do! She says you always know what to do!" },
      { s: 'kuromi', f: 'serious', t: "I did NOT say always. I said usually. Don't make me sound nice." },
      { s: 'kuromi', f: 'sad', t: "...She's going see-through, Solar. Since yesterday. Since that train." },
      { n: "Not long ago a black-green train had come across Moonlight Bridge with no rails under it and stopped at the far tower and taken a woman in a blue coat whom nobody had held on to. Elizabeth had explained it again afterward, in her soft, careful voice: people who fell through and had no one here grew faint, and the faint were the ones the train came for." },
      { s: 'kuromi', f: 'serious', t: "Everybody loves her. EVERYBODY. The whole dorm. Your senpai ate four pieces of her cake. How is SHE the one going faint? That's not how it works! She's the main character!" },
      { s: 'mymelody', f: 'neutral', t: "I think everybody likes me a little bit. That's nice. But nobody here is mine. I only came because Kuromi was here." },
      { s: 'mymelody', f: 'happy', t: "And Kuromi says we're not friends. So I think maybe I don't have anybody. It's okay! My mama always says, don't be sad about things you can't help!" },
      { n: "Kuromi made a sound like something tearing." },
      { choose: [
        { t: "Kuromi. You know what you have to say.", notes: 3, then: [
          { s: 'kuromi', f: 'serious', t: "I'm NOT saying it. I've never said it. Not ONCE. In all the years. That's my whole THING." },
          { s: 'solar', f: 'neutral', t: "Then say it once." }
        ] },
        { t: "(Take My Melody's hand, so she has someone.)", notes: 2, then: [
          { n: "Solar crouched and took My Melody's hand, and it was cool, and lighter than a hand should be, and it didn't change. Nothing changed. My Melody smiled at her gratefully and her fingers stayed half-erased in Solar's palm, and Solar understood with a sick little drop that it didn't work like that. It wasn't anybody. It was somebody." },
          { n: "She looked up at Kuromi. Kuromi had seen it too." }
        ] },
        { t: "She doesn't need everybody. She needs one person.", notes: 3, then: [
          { s: 'kuromi', f: 'sad', t: "...I know who you mean. Shut up. I KNOW who you mean." }
        ] }
      ] },
      { n: "And the strangest thing happened to Solar then, standing on the warm roof in the dark. The roof went away." },
      { bg: 'flashback-hamlim-hallway' },
      { music: 'mystery' },
      { n: "A hallway. Bright, noisy, lockers banging, the smell of floor wax and somebody's strawberry gum. A school she didn't know with her whole body. And two people on either side of her, walking too close, talking over her head at each other, at full volume, about her." },
      { n: "One of them was a boy, loud, his arm slung around her shoulders like a scarf he'd decided she needed, saying something about how it was his job, his RIGHTFUL job, as her best friend, to bring the ice cream. The other was a girl with a voice like a nail file, sweet and lethal, who said it was literally so cute that he thought that." },
      { n: "And later, much later, the same night, a phone lit up face-down on a desk at two in the morning, buzzing itself in a slow circle across the wood, and when she turned it over the screen was full of capital letters, a whole chat losing its mind, and one line in the middle of it from somebody called cherryblossoms." },
      { n: "remember who's really in 1st mf" },
      { n: "She'd laughed. She remembered laughing, alone in the dark, with the phone on her chest. Two people fighting tooth and nail over who got to be first with her, every single day, and neither of them ever once saying what they were actually fighting about, because they both knew, and it was her." },
      { bg: null },
      { music: 'night' },
      { n: "The roof came back. Solar was holding on to the edge of the water tank. Her heart was going hard and fast and happy, which was the strangest part, happy, for people she couldn't put a single name or face to. She didn't say anything. She didn't have to. Kuromi wasn't looking at her." },
      { n: "Kuromi was looking at My Melody. And she'd taken her hat off. Solar had never seen her take it off." },
      { s: 'kuromi', f: 'sad', t: "...Okay. Listen. I'm only saying this once and if you tell your mama I'll deny it in court." },
      { s: 'kuromi', f: 'serious', t: "You're my rival. You've always been my rival. You're the most annoying person in every world, and you follow me EVERYWHERE, and you read my diary out loud, and you always win, and you never even try." },
      { s: 'kuromi', f: 'sad', t: "And you're mine. Okay? You're mine. You're my friend. You've been my friend the whole time and I'm the dumbest rival in history and I'm sorry." },
      { n: "She grabbed My Melody's half-erased hand in both of hers, hard, like she was trying to hold a bird still, and squeezed." },
      { n: "It wasn't like the movies. Nothing glowed. My Melody's fingers simply stopped being the color of the concrete behind them, slowly, from the knuckles out, the way color comes back into your hands after you come in from the snow. Solar watched it happen. Kuromi didn't. Kuromi had her eyes squeezed shut and her forehead nearly on their joined hands, and she was crying, furiously, with her mouth set." },
      { s: 'mymelody', f: 'happy', t: "Kuromi. Kuromi, look. I'm all here." },
      { s: 'mymelody', f: 'happy', t: "My mama always says, a rival is just a friend who doesn't know it yet. But you knew it. I think you knew it the whole time." },
      { s: 'kuromi', f: 'flustered', t: "SHUT UP. Shut up shut up shut up. Don't make it weird. I said it ONCE. It's used up now." },
      { choose: [
        { t: "That was the bravest thing I've seen anyone do this year.", notes: 3, then: [
          { s: 'kuromi', f: 'sad', t: "...It was SO embarrassing." },
          { s: 'solar', f: 'neutral', t: "That's how you know." },
          { n: "Kuromi put her hat back on, very carefully, with both hands, and pulled it down to her eyebrows, and said nothing, and didn't let go of My Melody's hand with the other one, and that was its own sentence." }
        ] },
        { t: "So which one of you is in first?", notes: 2, then: [
          { s: 'kuromi', f: 'serious', t: "ME. Obviously. Always. Forever." },
          { s: 'mymelody', f: 'happy', t: "Yes! Kuromi's in first!" },
          { s: 'kuromi', f: 'flustered', t: "Don't AGREE with me, it ruins it!" }
        ] },
        { t: "(Leave them alone on the roof.)", notes: 2, then: [
          { n: "Solar went back to the stairwell door, quietly, and stood inside it for a while with her hand on the frame where neither of them could see her, listening to Kuromi shout at My Melody about cake, about the diary, about how she'd better not tell ANYONE, and My Melody saying yes to all of it, and the shouting going quieter, and quieter, until it was just two voices talking on a roof." }
        ] }
      ] },
      { n: "Later, in bed, Solar lay with her phone on her chest the way she'd remembered, face-down, waiting for it to buzz. It didn't. It was only a phone. Her thumb ran over the edge of it anyway, back and forth, as if it knew a password she'd forgotten." }
    ] },

    { after: '9/19', title: '7: under the eyeliner', place: 'Iwatodai Dorm · Rooftop', time: 'Evening', scene: [
      { music: 'tender' },
      { n: "The roof had become Kuromi's territory by right of conquest. She'd decorated it with skull stickers on the water tank and a string of fairy lights that ran off an extension cord nobody had authorized, and a lawn chair she'd found on the curb, and a sign in black marker on the door that said KUROMI'S 5 HQ, MEMBERS ONLY, under which, in smaller letters, someone had added and koromaru, and under that, in different handwriting, rounder, and Melody!!, which Kuromi had crossed out, and then uncrossed." },
      { n: "September had finally broken the heat, and the night was cool and clear and smelled of somebody's grilled fish from three balconies down, and Kuromi was sitting on the very edge with her boots hanging over the street, which was not allowed, looking up at the sky, which was empty, because it was the city." },
      { s: 'kuromi', f: 'neutral', t: "In Mary Land you can see all of them. The stars. Millions. It's like somebody spilled sugar on a black tablecloth." },
      { s: 'kuromi', f: 'neutral', t: "I used to sit on top of my hideout and look at them and make wishes. Mostly about beating Melody. Sometimes about other stuff." },
      { choose: [
        { t: "What other stuff?", notes: 3, then: [
          { s: 'kuromi', f: 'sad', t: "...That somebody would like me. The real me. Not because I'm scary, or because I'm funny when I'm mad. Not the bit." },
          { n: "She said it fast, all in one breath, and then glared at the city like it was the city's fault for hearing." }
        ] },
        { t: "(Sit down next to her on the edge.)", notes: 2, then: [
          { n: "Solar sat down next to her, boots over nothing, the street a long way down and the wind coming up it. Kuromi glanced over, surprised, and then scooted a little closer, until their shoulders were almost touching, and pretended she hadn't." }
        ] },
        { t: "You can see three from here. Look.", notes: 2, then: [
          { s: 'kuromi', f: 'neutral', t: "That's a plane." },
          { s: 'kuromi', f: 'happy', t: "...I'm wishing on it anyway. Planes count. I said so." }
        ] }
      ] },
      { s: 'kuromi', f: 'neutral', t: "Everybody thinks I'm just a troublemaker. And I am. I'm REALLY good at it. But that's not all I am. I like romance manga and I like cute things and I like pickled shallots and I keep a diary, and nobody ever asks about the rest of it because the bit is so loud." },
      { s: 'kuromi', f: 'sad', t: "If you're loud enough, nobody looks under it. That's the whole trick. I invented it." },
      { n: "Solar knew about the rest. She didn't know how she knew. She knew about the face you put on and the one underneath it, and how much easier it was to be the loud one or the polished one or the one who never got upset than to let anybody see the thing in the middle. She knew it the way you know a song you can't remember learning, all the way through, every word. She just didn't know whose song it was." },
      { choose: [
        { t: "I'm asking about the rest.", notes: 3, then: [
          { s: 'kuromi', f: 'surprised', t: "...You are, aren't you." },
          { n: "And she told her. All of it, in no order. Mary Land and the hideout, Baku and his snoring, the first romance manga she ever bought and hid inside a cookbook, the time she tried to be nice for a whole week to see what would happen and nobody noticed, the eyeliner, which she'd started wearing at twelve because it made her look like someone nobody would mess with, and which she now couldn't leave the house without, because without it she just looked like a girl." }
        ] },
        { t: "I invented it too. I think.", notes: 2, then: [
          { s: 'kuromi', f: 'neutral', t: "Yeah? What's your bit?" },
          { s: 'solar', f: 'neutral', t: "I don't know. That's the problem. I think I had a few." },
          { s: 'kuromi', f: 'neutral', t: "...Huh. A few. That's a lot of bits. That sounds tiring." },
          { n: "It was. Solar didn't say so. Kuromi seemed to hear it anyway, and bumped her shoulder, once, which from Kuromi was a whole speech." }
        ] }
      ] },
      { s: 'kuromi', f: 'neutral', t: "Can I tell you a secret? A real one. A diary one." },
      { s: 'kuromi', f: 'sad', t: "Before I fell through, I was on my roof, yelling at the stars. Because there was this whole... thing coming up. A big competition, in town. Me against Melody. Again. Like always. And I knew how it ended. It always ends the same. She wins, and everybody claps, and I stomp off and swear revenge, and that's my whole ending. Every time." },
      { s: 'kuromi', f: 'sad', t: "I wished I never had to do it again. Just once I didn't want to be the one who loses on purpose so the story works." },
      { s: 'kuromi', f: 'neutral', t: "And then it went green. So. Be careful what you wish for on a roof, I guess." },
      { n: "Solar didn't say anything for a while. A train went by on the line below, lit and empty, and somewhere in it, she thought, people were going home to endings they'd picked and endings they hadn't, and she couldn't tell, from up here, which was which. None of the windows said." },
      { s: 'kuromi', f: 'happy', t: "Okay. Enough. That's like a year's worth of feelings. I'm going to go draw on Junpei to recover." },
      { n: "She didn't get up, though. She stayed on the edge with her boots over the street until the fairy lights flickered and the extension cord fell out of the wall downstairs, and then she said, in the dark, without moving, \"Thanks for asking about the rest,\" so quietly it might have been the wind." }
    ] },

    { after: '10/31', title: '8: birthday', place: 'Iwatodai Dorm · Lounge', time: 'Evening', scene: [
      { music: 'dorm' },
      { n: "Kuromi had been strange for days. Quiet. Not drawing on anyone. Not slamming doors. Mitsuru had actually asked Solar, in the kitchen, in a low careful voice, whether the girl in the hat was unwell, which from Mitsuru was practically sending flowers." },
      { n: "Solar had figured it out from the sticker on the back of the diary, which she'd looked at a hundred times without reading the bottom line. Under DO NOT READ OR ELSE, under THIS MEANS YOU JUNPEI, under AND YOU, very small, in pink: if found return to kuromi, birthday 10/31, presents welcome." },
      { n: "October thirty-first. It had come and gone. Nobody had known. Kuromi had spent it in the lounge being very loud about the Halloween decorations Junpei had put up, and then very quiet, and then had gone to bed early, and nobody had known." },
      { n: "So Solar had told everyone." },
      { n: "When Kuromi came downstairs that evening the lounge was dark. And then the lights came on, and there were black and pink streamers twisted across the ceiling, and skull balloons tied to every chair, and a cake on the counter with pink icing and a crooked black skull piped on top by someone who had clearly never piped anything before and had tried their absolute hardest." },
      { n: "Junpei had made a banner out of printer paper and tape that said HAPPY (LATE) BIRTHDAY KUROMI YOU MENACE in permanent marker. Yukari had baked the cake. Akihiko had bought a small punching bag and put a bow on it, because, he said, she seemed like she had a lot to get out. Ken had made a card with a drawing of Koromaru on it, and Koromaru was wearing a party hat, actually wearing it, under protest. Mitsuru had sent down, by way of Fuuka, a box of very expensive chocolates with a card that said only, Many happy returns. M.K." },
      { n: "My Melody was there. She'd brought an almond pound cake, a second cake, because a birthday, she said, should have two cakes, one for being born and one for staying." },
      { n: "Kuromi stood on the bottom step and didn't move." },
      { s: 'kuromi', f: 'surprised', t: "...It already happened. It was days ago. It's over. You can't have a birthday after it's over." },
      { s: 'kuromi', f: 'sad', t: "Nobody ever... nobody remembers. Melody's is a whole festival. Mine's the same day as Halloween. Everybody's busy being scary. I'm ALWAYS scary. Nobody notices one more day of it." },
      { choose: [
        { t: "I noticed. Late. But I noticed.", notes: 3, then: [
          { n: "Her mouth fell open. Then shut. Then she burst into tears, loudly, furiously, the way she did everything, and came off the bottom step and hugged Solar so hard she knocked her into the banister, and stayed there, with her face in Solar's shoulder, and the hat crushed between them." }
        ] },
        { t: "Happy birthday, menace.", notes: 3, then: [
          { s: 'kuromi', f: 'sad', t: "...You guys are all the WORST. I love it. I HATE that I love it." }
        ] },
        { t: "It's not over until you've had cake.", notes: 2, then: [
          { s: 'kuromi', f: 'neutral', t: "...Is that a rule?" },
          { s: 'solar', f: 'neutral', t: "It's in my diary." },
          { s: 'kuromi', f: 'happy', t: "You don't HAVE a diary." },
          { s: 'solar', f: 'neutral', t: "It's in yours, then." }
        ] }
      ] },
      { s: 'junpei', f: 'happy', t: "Okay, okay, before anybody cries more, she has to blow out the candles. Kuromi. Wish. Make it evil." },
      { s: 'mymelody', f: 'happy', t: "Make it a good one, Kuromi! My mama always says, birthday wishes are the strongest kind!" },
      { n: "Kuromi stood over the cake for a long time with her eyes shut. Longer than anyone stands over a cake. Long enough that Junpei opened his mouth and Yukari elbowed him. Then she blew, all at once, every candle, and opened her eyes, and looked straight at Solar, and then at My Melody, and then at the floor, very fast, as though she'd been caught." },
      { s: 'kuromi', f: 'neutral', t: "...What did you wish for? No. Don't answer. Rival question. I'm asking what you'd wish for. Hypothetically. On a cake." },
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
      { n: "When everyone had gone up, Kuromi stayed on the couch with the diary on her knees, writing, and Solar, passing the doorway on the way to bed, saw that she'd written only one line, and was sitting looking at it, and smiling at it like it had said something back." }
    ] },

    { after: '11/28', title: '9: notes on my rival', place: 'Iwatodai Dorm · Rooftop', time: 'Evening', scene: [
      { music: 'tender' },
      { n: "The roof again, in November, and cold, the kind of clear cold that makes the city lights look sharper, as if somebody had gone around in the afternoon and polished every one. The fairy lights were still up. The lawn chair had a blanket on it now, and the blanket had a skull on it, because of course it did." },
      { n: "Kuromi was holding the diary in both hands. She held it out to Solar, open, with her face turned completely away, toward the bay, like someone holding out something that might go off." },
      { s: 'kuromi', f: 'flustered', t: "One page. You can read ONE page. Then I'm throwing myself off the roof." },
      { s: 'kuromi', f: 'serious', t: "Don't read the other pages. If your eyes go to the other pages I'll know. I'll know, Solar." },
      { n: "The page was covered in doodles: skulls and bats and Koromaru in a party hat and My Melody with an extremely angry face, which Solar suspected was the only way Kuromi had ever been able to draw her. And in the middle, in pink glitter pen, in the neatest handwriting Kuromi had, which still leaned like it was running somewhere:" },
      { n: "NOTES ON MY RIVAL. She is very annoying. She never gets mad. She remembers things nobody remembers. She doesn't read my diary (suspicious). She asks about the rest. She is always counting the doors, I don't think she knows she does it. She came to my birthday after it was over. She was standing on the roof when Melody needed somebody and she didn't try to be the somebody, she made ME do it. Which was evil. Which was the nicest thing anyone ever did for me." },
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
          { s: 'solar', f: 'neutral', t: "You've never beaten me at anything." },
          { s: 'kuromi', f: 'serious', t: "THAT'S IT. Rival AND friend. You leave me no choice." }
        ] },
        { t: "You noticed I count the doors?", notes: 2, then: [
          { s: 'kuromi', f: 'neutral', t: "Everybody notices. You walk into the lounge and your eyes go one, two, three, window. Every time. Like you're casing the place." },
          { s: 'kuromi', f: 'happy', t: "It's cool. It's very villain. I respect it." }
        ] }
      ] },
      { n: "She grabbed the diary back, wrote something very fast with the glitter pen, pressing so hard the page dented, and turned it around. Under the entry, in big letters: BEST FRIEND + BEST RIVAL (BOTH) (ALLOWED). Then she drew a skull wearing a little crown next to it, and colored it in, and blew on the glitter to dry it, and closed the diary, and held it to her chest." },
      { s: 'kuromi', f: 'neutral', t: "Melody and I talked. After. On the roof that time. For like three hours. She told me something." },
      { s: 'kuromi', f: 'neutral', t: "She said she always wins because she doesn't care about winning. She just shows up. And I always lose because I care SO much, I make it the whole ending, and then I can't move." },
      { s: 'kuromi', f: 'sad', t: "And she said, what if the rival isn't the one who loses. What if she's just the one who's still trying in the sequel." },
      { s: 'kuromi', f: 'flustered', t: "Which is the most Melody thing anybody ever said, and I hate it, and I wrote it down." },
      { choose: [
        { t: "The one who's still trying is the heroine, Kuromi.", notes: 3, then: [
          { s: 'kuromi', f: 'surprised', t: "..." },
          { s: 'kuromi', f: 'sad', t: "...Don't. Don't say stuff like that on a roof. I'll believe it." }
        ] },
        { t: "Melody's smarter than she lets on.", notes: 2, then: [
          { s: 'kuromi', f: 'serious', t: "She's NOT. She's a bunny with a flower on her head." },
          { s: 'kuromi', f: 'neutral', t: "...She's a little smarter than she lets on." }
        ] }
      ] },
      { n: "They stayed up there until their fingers went numb, under the skull blanket, sharing it badly, and Kuromi talked about Mary Land and Solar listened, and once, without noticing, Kuromi leaned her head on Solar's shoulder, and left it there, and Solar didn't say anything about it, because some things you don't put in the diary. You just keep." }
    ] },

    { after: '1/9', title: '10: the new page', place: 'Iwatodai Dorm · Lounge', time: 'Evening', scene: [
      { music: 'tender' },
      { n: "The new term had started and nobody's heart was in it. The lounge still had a few strands of tinsel from the party nobody had taken down, and a pine smell coming off the dying branch Junpei had insisted on dragging in from the shrine, and a thin, early-January quiet, the kind that settles over a house when everyone in it is counting something in their heads and not saying the number out loud." },
      { n: "Kuromi was sitting on the couch with a brand-new diary in her lap. White. With a pink skull on the cover. The old one was beside her, fat and warped and bristling with stickers, the clasp bent back for good." },
      { s: 'kuromi', f: 'neutral', t: "I filled it. The whole thing. Every page and the inside of the covers. Mostly about this dumb dorm. Mostly about you, which is gross." },
      { s: 'kuromi', f: 'neutral', t: "Elizabeth came by. The lady with the book. She talked to the fridge for a while first. She said at the end of the month the doors open and everybody who fell through can go home." },
      { s: 'kuromi', f: 'neutral', t: "She said some people won't want to. She asked if I was one of them." },
      { choose: [
        { t: "Are you?", notes: 2, then: [
          { s: 'kuromi', f: 'neutral', t: "...For like a day I was. I thought, I could just stay here. Nobody here knows how my story's supposed to go. Nobody here has seen the ending." },
          { s: 'kuromi', f: 'serious', t: "And then I thought, that's the coward thing. That's hiding in the sequel. And I'm NOT a coward. I'm a villain." }
        ] },
        { t: "(Wait for her to say it.)", notes: 3, then: [
          { n: "Solar waited. Kuromi twisted the end of her scarf around one finger until the tip went white, and let it go, and twisted it again." }
        ] }
      ] },
      { s: 'kuromi', f: 'serious', t: "I'm going home. Me and Melody both. There's that competition. The one I ran away from. And I'm going to do it. And I'm going to lose, probably. She always wins." },
      { s: 'kuromi', f: 'happy', t: "But I'm going to lose like a heroine. Like, dramatically. With a speech. And then I'm going to come back for the sequel and do it AGAIN. Because that's what the one who's still trying does. I decided." },
      { s: 'kuromi', f: 'flustered', t: "So. I got a new diary. For the sequel. And I want you to write the first page." },
      { n: "She held out the glitter pen. She was very obviously terrified. Her hand shook a little, which on Kuromi looked almost exactly like rage." },
      { choose: [
        { t: "(Write: My rival is the bravest person I know. — S.)", notes: 3, then: [
          { n: "Kuromi read it upside down while Solar was still writing it, which was cheating, and by the time Solar dotted the period she'd gone completely red from the jester hat down." },
          { s: 'kuromi', f: 'flustered', t: "...That's the most embarrassing thing anybody has ever written in my diary. I'm keeping it forever. I'm going to read it before the competition. I'm going to read it OUT LOUD." }
        ] },
        { t: "(Draw a skull with a party hat. Sign it.)", notes: 2, then: [
          { s: 'kuromi', f: 'happy', t: "PERFECT. Ten out of ten. You're a genius. Best rival." },
          { n: "She looked at it for a long time. Then she turned the page and drew one of her own beside it, the same skull, the same hat, a little crooked, so there were two." }
        ] },
        { t: "(Write: Asked about the rest. Liked all of it.)", notes: 3, then: [
          { n: "Kuromi read it. Then she read it again. Then she took the pen out of Solar's hand without a word and wrote, underneath, in huge glittery letters that took up half the page: ME TOO. YOU. ALL YOUR BITS. And she underlined it twice, and the second line went off the edge of the paper." }
        ] }
      ] },
      { s: 'kuromi', f: 'neutral', t: "I'm taking both diaries. The old one and this one. When I get home Baku's going to try to read the old one and I'm going to let him. Just once. So he knows." },
      { s: 'kuromi', f: 'neutral', t: "And I'm going to tell Melody's mama that her daughter's friend said a rival is just the one who's still trying in the sequel. And she's going to say she always knew. She ALWAYS says she always knew." },
      { n: "She closed the new diary and put the glitter pen through the clasp to keep it shut, and then she sat with it in her lap and with the old one beside her, one white and one black, and put a hand flat on each, like someone holding two people's hands at once." },
      { s: 'kuromi', f: 'serious', t: "Don't you DARE forget me when I'm gone. I'll know. I'll come back through the green and draw on your face." },
      { n: "Solar said she wouldn't. She meant it with the whole of herself, and some small careful part underneath the whole of herself noticed that she'd said it, and noticed that she didn't know, any more than anyone did, what she'd remember, or where, or as whom. She didn't say that part. Kuromi wouldn't have liked it. Kuromi would have written it down." }
    ] }
  ],
  afterMax: [
    { title: 'pudding tax', place: 'Iwatodai Dorm · Kitchen', scene: [
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
      { n: "The voice came from the top of the stairs. Kuromi ate the rest of hers in one enormous spoonful, pressed the empty cup into Solar's hand, and was gone out of the kitchen window before Yukari reached the bottom step, and Solar stood in the kitchen with a crossed-out pudding in each hand and her whole face perfectly composed, and Yukari looked at her, and looked at the open window, and sighed the sigh of somebody who had been living with a menace for half a year and had come, against every instinct, to miss her already." }
    ] },
    { title: 'rival duel', place: 'Iwatodai Dorm · Lounge', scene: [
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
          { s: 'kuromi', f: 'neutral', t: "...Can I keep it?" }
        ] },
        { t: "(Draw badly on purpose, so she wins.)", notes: 1, then: [
          { s: 'kuromi', f: 'serious', t: "You LET me win. That's the most insulting thing that's ever happened to me. Again. Right now. For real this time." }
        ] }
      ] },
      { s: 'junpei', f: 'happy', t: "Are you guys drawing me? Lemme see." },
      { n: "They both said no at exactly the same time, in exactly the same voice, and looked at each other, and Kuromi taped both drawings inside the snack cupboard next to the dog, where the gallery was getting crowded now, a whole door of evidence that somebody had lived here and been, against her will, very happy." }
    ] }
  ]
});
