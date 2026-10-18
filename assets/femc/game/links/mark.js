/* Mark · ? Revamp social link data (femc-game.html). Format: link fields in assets/femc/game/core.js, scene lines in scene.js.
   Searcher (Runners), friendship only (plot doc §9). Mark Lee: Music major, warm on the surface, the boy who found her on her
   first day already knowing who she was. Two truths in parallel, never collapsed: part of him genuinely likes her, and part of
   him is counting (her voice, her father's door), and he has never been good at telling them apart. The narration never makes
   him a villain or a hero, and nothing here touches the book's truths about him (plot doc §7). His tell: when he's nervous he
   overplays casual and rubs the back of his neck. Name dial: Marky is the default, Mark is for when he's in trouble.
   His crossing (≈11/18, Port Island Station, four notes on the station piano and she knows the fifth) is a story event;
   rank 1 is the next evening. The Mark/Haechan run-in (rank 4) is handled gently: grief with muscle memory, nothing new.
   Reworks v1's runners2.js (bodyguard Mark Lee, the voice memo with a gap where a voice goes, "does ur dad still know like
   everyone", "Hyuck", the pencil). Texting voice: markylee, lowercase, "word", "lol", "ofc", ":)". No 'happy' portrait exists,
   so his smiles use neutral. Arcana: '?' (open question, plot doc §16.6). */
(window.FEMC_GAME_LINKS ||= []).push({
  id: 'mark', name: 'Mark Lee', short: 'Mark', arcana: '?', numeral: '', from: 'Runners',
  kind: 'searcher', world: 'R', romance: null,
  starts: '11/18', gate: { R: 7 },
  home: { area: 'portisland', spot: 'Central Concourse', slot: 'evening', days: [1, 3, 5, 6],
          hint: 'Evenings at Port Island Station, at the public piano with the seagulls painted on it.' },
  approach: "Somebody's playing the public piano in Port Island Station's concourse, the one painted with fat cartoon seagulls, and it isn't one of the three songs children always play on it. A boy with light brown hair falling in his eyes, playing like he's talking to someone who hasn't shown up yet.",
  cast: {},
  invite: {
    ask: ["sol!! u free? station piano. i figured out the bridge", "hey :) wanna get food? my treat. bodyguard mark lee, reporting for duty", "random q. r u busy. i made u a playlist. its only kind of embarrassing", "port island tonight? theres a band playing outside the station. theyre bad. its great", "need a second opinion on a chord. ur the only one with ears in this whole dorm lol", "u eat yet? dont lie"],
    ok: ["word. see u there :)", "yesss ok. ill save u a seat on the bench", "ok cool cool. 10 min"],
    no: ["all good!! next time", "no worries sol :) its not on u", "ok! text me when u get home tho. it gets dark early"]
  },
  hangouts: [
    [
      { n: "He'd found a band playing outside Port Island Station, four boys in matching windbreakers with a drum kit missing a cymbal, and he was standing at the front of the tiny crowd nodding along with total sincerity, like they were the best thing he'd ever heard." },
      { s: 'mark', f: 'neutral', t: "They're so bad. Sol. They're so bad. The bassist's half a step flat the whole time. I love them so much." },
      { choose: [
        { t: "(Clap for them. Loudly.)", notes: 3, then: [
          { n: "She clapped. He clapped louder. The band, who had clearly never had two people clap at the same time before, played an encore nobody had asked for, and Mark put a thousand yen in their guitar case and told them they had a real sound." }
        ] },
        { t: "Why do you love them?", notes: 2, then: [
          { s: 'mark', f: 'neutral', t: "Because they don't care that they're bad. They're just playing. Nobody's grading them. I can't remember the last time I played anything nobody was grading." }
        ] }
      ] }
    ],
    [
      { n: "He'd made her a playlist on a borrowed MP3 player with a cracked screen, and he made her listen to all of it on the station bench with one earbud each, and watched her face the whole time, the way you'd watch someone open a present." },
      { s: 'mark', f: 'neutral', t: "Okay, this next one, wait for the bridge. Wait for it. Wait— there. There! Did you hear that? The key change?" },
      { choose: [
        { t: "I heard it.", notes: 3, then: [
          { s: 'mark', f: 'surprised', t: "You did? Okay. Okay, good. Most people don't. Most people just hear it get louder." }
        ] },
        { t: "You're watching me more than listening.", notes: 2, then: [
          { s: 'mark', f: 'flustered', t: "What? No. I'm— I'm checking your reaction. For research. Music research." },
          { n: "He rubbed the back of his neck. He was, she noted, a terrible liar, and also, possibly, a very good one, and she couldn't tell which he was being." }
        ] }
      ] }
    ],
    [
      { n: "Mark was teaching Junpei a song on the lounge's out-of-tune piano, which nobody had played since it was installed, and Junpei was learning it with the slow, delighted incompetence of a man who'd never been taught anything by someone this patient." },
      { s: 'mark', f: 'neutral', t: "No, you're doing great. You're doing great. Just. That's a different key. That's a whole different key, man." },
      { choose: [
        { t: "(Sit down and play the bass line for Junpei.)", notes: 3, then: [
          { n: "She didn't know how to play. Her hands found it anyway, three notes, low, under Junpei's melody, and it sounded, for about four bars, almost like music. Mark stopped and looked at her hands on the keys like he was writing something down in his head." }
        ] },
        { t: "Teach me too.", notes: 2, then: [
          { s: 'mark', f: 'neutral', t: "Yeah? Okay. Sit. You've got good hands for it. You always said you didn't. You do." }
        ] }
      ] }
    ]
  ],
  ranks: [
    { after: '11/19', title: '1: four notes', place: 'Port Island Station · Central Concourse', time: 'Evening', music: 'mystery', scene: [
      { n: "Port Island Station at six in the evening was a river of wet umbrellas and tired uniforms, the concourse smelling of rain on concrete and the last sweet bread from the bakery by the east gate, and somewhere underneath the announcements the piano with the seagulls painted on it was playing the same four notes it had played the night before, over and over, and stopping." },
      { n: "He was on the bench again. Light brown hair falling in his eyes every time he looked down at his hands, a navy sweatshirt with two Greek letters across the chest that meant nothing to anybody in Port Island, a pair of clear-framed glasses pushed up into his hair and forgotten there. He saw her coming through the crowd before she reached him and his whole face did something, opened, the way a door opens when someone's been waiting just behind it." },
      { s: 'mark', f: 'neutral', t: "Sol. Hey. You came back. Okay. Cool. Cool cool cool." },
      { register: 'mark' },
      { n: "Last night he'd looked at her across the concourse and said her name like a question, and she'd hummed the fifth note of his song before she'd known she was going to, and he'd turned around on the bench and done a double take, the real kind, the kind people only do in cartoons and train stations, and then he'd known exactly who she was. And then she'd told him she didn't know him. And he'd laughed, easy, too easy, and decided not to hear it at all." },
      { n: "Today he'd heard it. She could tell. He'd had a night to hear it in. There was a carefulness around his eyes that hadn't been there yesterday." },
      { s: 'mark', f: 'neutral', t: "So. Uh. They told me. At the dorm. Your friend with the headphones. Fuuka. She explained it. The not-remembering thing." },
      { s: 'mark', f: 'flustered', t: "Which is, like. Wild. That's a wild thing to happen. I'm so sorry, Sol. That's not on you. None of it's on you." },
      { choose: [
        { t: "You don't have to be careful with me.", notes: 3, then: [
          { s: 'mark', f: 'neutral', t: "Yeah? Okay. Okay, good, because I'm really bad at careful. I'm much better at normal." },
          { n: "He rubbed the back of his neck, hard, and laughed, and the carefulness went out of him all at once like air out of a tire, and what was underneath was warm, and easy, and wanted very much for her to like him." }
        ] },
        { t: "Who are you to me?", notes: 3, then: [
          { s: 'mark', f: 'neutral', t: "Mark. Mark Lee. Marky, to you, mostly. Mark when I'm in trouble." },
          { s: 'mark', f: 'neutral', t: "I'm your friend. I found you on your first day. Gave you the whole tour. You spent the entire time staring through the window of the gaming lab. Rude. But fair." }
        ] },
        { t: "Hum it again. Your song.", notes: 3, then: [
          { s: 'mark', f: 'surprised', t: "..." },
          { s: 'mark', f: 'neutral', t: "Yeah? You want to? Okay. Okay, here." }
        ] }
      ] },
      { n: "He played the four notes. She hummed the fifth. It came out of her quiet and sure, a note that had been sitting in her somewhere waiting to be asked for, and the chord he'd been stuck on gave under it and opened into the next one like a door somebody had been leaning on from the other side." },
      { n: "He played the whole thing through with her line in it, start to finish, and it was better, and they both knew it was better, and when it was over he sat back on the bench and looked at her, and for one second, so fast she nearly missed it, he looked at her like a sum he was working out in his head." },
      { n: "Then it was gone, and he was just grinning, and the grin was real too. That was the strange part. Both of them were real." },
      { s: 'mark', f: 'neutral', t: "You can sing. Like, actually. I've said it a hundred times, you downplay it and look at me like I'm being nice. I'm not being nice, Sol. You can really sing." },
      { choose: [
        { t: "I only hummed.", notes: 2, then: [
          { s: 'mark', f: 'neutral', t: "Four notes, dead on, off a chord I hadn't even resolved. That's not only humming. That's a whole thing." }
        ] },
        { t: "Thank you, Marky.", notes: 3, then: [
          { s: 'mark', f: 'surprised', t: "..." },
          { n: "His face did something complicated and quick. Pleasure, and then something under the pleasure, a small sharp flicker, like a man who'd heard the number he'd been hoping for read out and was already doing the next sum." },
          { s: 'mark', f: 'neutral', t: "...Yeah. Yeah, okay. Marky. Good. That's still the same." }
        ] }
      ] },
      { n: "When the chime went for the 6:14 to Iwatodai he looked up at the board like a teacher had caught him passing notes, and went to the vending machines by the pillar, and came back with a can of hot milk tea, and pressed it into her hands before she'd answered whether she wanted one." },
      { s: 'mark', f: 'neutral', t: "Sweet. You like it sweet at night. Text me when you get back, okay? It gets dark so early here." },
      { n: "The can stayed warm the whole ride home. She didn't know what to do with the feeling that somebody had been very glad to see her, and had also, somewhere behind the gladness, been counting." }
    ] },

    { after: '11/25', title: '2: bodyguard', place: 'Port Island · Back Streets', time: 'Evening', music: 'night', scene: [
      { n: "He walked her home. He'd insisted. He'd insisted with his hands up, cheerfully, the way you'd insist on paying a bill you knew you'd lose the argument over, and walked beside her through the back streets behind Port Island Station with his hands in the pocket of his sweatshirt and his shoulder a careful distance from hers." },
      { s: 'mark', f: 'neutral', t: "It's my job. Bodyguard Mark Lee, reporting for duty. You used to hate that. Then you started saying it before I could." },
      { s: 'mark', f: 'neutral', t: "You'd go, *ugh, here comes bodyguard Mark Lee,* and roll your eyes, and then let me walk you anyway." },
      { choose: [
        { t: "Ugh. Here comes bodyguard Mark Lee.", notes: 3, then: [
          { s: 'mark', f: 'surprised', t: "..." },
          { n: "He stopped on the pavement and laughed, really laughed, his head back, loud enough that a cat on a wall left in disgust." },
          { s: 'mark', f: 'neutral', t: "Okay. Okay, that's— yeah. That's exactly it. You even did the eye roll. You got the eye roll right." }
        ] },
        { t: "Do I need a bodyguard?", notes: 2, then: [
          { s: 'mark', f: 'neutral', t: "No. Never. You've never needed anybody for anything. That's why it's funny." },
          { s: 'mark', f: 'serious', t: "...It's a little bit funny. It's a little bit not." }
        ] },
        { t: "I fight Shadows at midnight, Mark.", notes: 2, then: [
          { s: 'mark', f: 'flustered', t: "Mark. Oh no. Mark. Am I in trouble already? It's been a week." },
          { s: 'mark', f: 'neutral', t: "...I know. I know you do. Fuuka let me listen. Once. I'm never doing that again. I couldn't breathe for three hours." }
        ] }
      ] },
      { n: "At the corner of the dorm's street Akihiko was coming back from his evening run, slowing, his breath going white, and he saw them and slowed further, and looked at Mark, up and down, once, the way you'd look at a new heavy bag someone had hung in your gym without asking." },
      { s: 'akihiko', f: 'neutral', t: "...Solar." },
      { s: 'mark', f: 'neutral', t: "Hey, man! Mark. Hi. I'm a friend. From her— from home. Big fan of the dorm. Love the dorm." },
      { n: "He held out his hand. Akihiko shook it. It was, Solar noticed, a slightly longer handshake than handshakes usually were, on both sides, and Mark's other hand went to the back of his neck and stayed there." },
      { s: 'akihiko', f: 'neutral', t: "You walked her back." },
      { s: 'mark', f: 'neutral', t: "Yeah! Course. It gets dark so early." },
      { s: 'akihiko', f: 'neutral', t: "...Good." },
      { n: "Akihiko went in. Mark watched the door close behind him and let out a breath and laughed at himself, a little too loudly, the overplayed kind." },
      { s: 'mark', f: 'flustered', t: "He's intense. Is he always that intense? He shook my hand like he was checking it for weapons." },
      { choose: [
        { t: "He's like that with everyone.", notes: 2, then: [
          { s: 'mark', f: 'neutral', t: "Cool. Cool. Totally normal. I'm being so normal." }
        ] },
        { t: "You rubbed your neck the whole time.", notes: 3, then: [
          { s: 'mark', f: 'surprised', t: "..." },
          { s: 'mark', f: 'neutral', t: "...You still clock that. Even now. Huh." },
          { n: "He took his hand down from his neck and put it in his pocket and kept it there, and looked at her for a second with an expression she couldn't read at all, and then smiled, and she couldn't read that either." }
        ] }
      ] }
    ] },

    { after: '12/3', title: '3: the gap', place: 'Port Island Station · Central Concourse', time: 'Evening', scene: [
      { n: "He'd recorded something. On an old phone he'd brought through with him, the screen cracked in one corner, the battery that never went down the way none of the searchers' batteries ever went down. He held it out to her on the bench beside the piano with the volume all the way up and his face doing the thing it did when he wanted something very much and was trying to look like he didn't." },
      { s: 'mark', f: 'neutral', t: "Okay, don't laugh. It's rough. I did it on the lounge piano at two in the morning. Junpei woke up and asked if it was a ghost." },
      { n: "It was forty-eight seconds. The melody from the station, the one with her five notes in it, built out now, fuller, a left hand under it like a floor. And in the middle, a space. Eight bars where the piano dropped to almost nothing, just the chords, waiting, like a room with the furniture moved back for someone to dance in." },
      { s: 'mark', f: 'neutral', t: "There's a gap in the middle. Where a voice goes." },
      { s: 'mark', f: 'serious', t: "I keep hearing you in it." },
      { choose: [
        { t: "Me?", notes: 2, then: [
          { s: 'mark', f: 'neutral', t: "You. Yeah. You've got the exact right kind of voice for it. Low. A little tired. Like you're telling somebody a secret you're not sure you should." }
        ] },
        { t: "(Hum into the gap.)", notes: 3, then: [
          { n: "She played it again and hummed into the gap. Quietly. Eight bars. Her voice found the line under the chords like it had been written for it, and Mark sat absolutely still on the bench beside her, not breathing, the way you'd sit still when a bird lands near you." },
          { s: 'mark', f: 'surprised', t: "...Yeah. That. That's what it's for." }
        ] },
        { t: "Why do you want it to be me?", notes: 3, then: [
          { s: 'mark', f: 'neutral', t: "Because it's good. Because you're good." },
          { s: 'mark', f: 'neutral', t: "...And because I wrote it thinking about you. I'm not going to lie about that part. That part's true." }
        ] }
      ] },
      { s: 'mark', f: 'neutral', t: "Also. Unrelated." },
      { n: "He rubbed the back of his neck. He looked at the departure board. He laughed, at nothing, a beat too early." },
      { s: 'mark', f: 'neutral', t: "Does your dad still know, like. Everyone? In music, I mean. At home." },
      { s: 'mark', f: 'flustered', t: "Jk. That's— jk." },
      { s: 'mark', f: 'neutral', t: "...Kind of jk." },
      { n: "It sat there on the bench between them. Not a question, exactly. Something set down to see if she'd pick it up. And under it, warm, real, the same boy who'd sat up at two in the morning on a lounge piano writing a song about a girl who didn't know him, because he couldn't not." },
      { choose: [
        { t: "I don't remember my father.", notes: 3, then: [
          { s: 'mark', f: 'sad', t: "...Oh." },
          { s: 'mark', f: 'neutral', t: "Oh. No, yeah. Of course. God. Forget it, Sol. Forget the whole— forget it. Are you okay? That's the actual question. That's the only question." },
          { n: "He meant it. She watched him mean it. She also watched the other thing fold itself up very small and go back into a pocket, for later, and she didn't know which of them she was supposed to answer." }
        ] },
        { t: "Why do you want to know?", notes: 3, then: [
          { s: 'mark', f: 'neutral', t: "No reason! Music nerd. You know me. Making conversation." },
          { s: 'mark', f: 'flustered', t: "...Okay, a small reason. But mostly I just wanted you to hear the song first. Before anyone. That's the big reason. That's most of it." }
        ] },
        { t: "(Play the memo again instead of answering.)", notes: 2, then: [
          { n: "She played it again. And again. He watched her listen and didn't ask a third time." },
          { s: 'mark', f: 'neutral', t: "...You like it. I can tell. That's okay. I like that you like it." }
        ] }
      ] }
    ] },

    { after: '12/9', title: '4: hyuck', place: 'Paulownia Mall · Central Atrium', time: 'Evening', music: 'mystery', scene: [
      { n: "December had turned the mall into a greenhouse, everybody shedding scarves at the doors and the fountain throwing its noise straight up at the glass roof, where it hit and came back down twice as loud and half a second late. Mark was sitting on the lip of the fountain with one earbud in and a notebook of staff paper on his knee, pencil behind his ear, and when he saw her he dropped the pencil, picked it up, dropped it again, and then waved with it like that had been the plan." },
      { s: 'mark', f: 'flustered', t: "Sol. Hey. Hi. I was literally just sitting here. Like a guy. Sitting." },
      { s: 'mark', f: 'neutral', t: "Listen to this room. It's awful in here. The water hits the roof and comes back late. You can hear the slap." },
      { n: "She listened. She couldn't hear the slap. She could hear water and a lot of people and a child somewhere negotiating hard for a pretzel." },
      { s: 'mark', f: 'neutral', t: "Yeah, I can't really either. Not properly. Hyuck would've had it in two seconds. He'd tell you exactly what's wrong with this room and how to fix it and why everyone who built it should be in jail." },
      { n: "He laughed, and the name sat there after the laugh was gone, heavy, like a word he'd bitten down on by accident and kept chewing anyway." },
      { n: "*Hyuck.* It went into her strange and sideways. She knew the boy it belonged to. She'd sat beside him on a dryer at three in the morning more nights than she'd admit to. She knew it as a name for him that belonged to someone else, and she knew, without knowing how she knew, that the someone else was sitting right here, and that it hadn't always been a name that hurt." },
      { choose: [
        { t: "Haechan.", notes: 3, then: [
          { s: 'mark', f: 'neutral', t: "...Yeah." },
          { s: 'mark', f: 'neutral', t: "He's here. I know. I've seen him. At the dorm. On the steps. He looked at me like I was a song he's heard too many times." },
          { s: 'mark', f: 'serious', t: "We haven't said anything to each other. We're very good at that. We've had a lot of practice." }
        ] },
        { t: "(Sit down. Let him keep talking.)", notes: 3, then: [
          { n: "She sat on the fountain's edge, a careful arm's length away, and said nothing, and he filled the silence the way she'd guessed he would, the way people do when they've been waiting a long time for someone to sit still long enough." },
          { s: 'mark', f: 'serious', t: "My best friend. Was. Is. I don't actually know what the word is right now. Since we were eleven." }
        ] }
      ] },
      { s: 'mark', f: 'neutral', t: "We used to make stuff. Together. All the time. I'd play, he'd hear what it was missing. He hears rooms. It's like a curse. He can't turn it off." },
      { s: 'mark', f: 'serious', t: "And then we didn't. And he gets to be mad about that forever, apparently. So." },
      { n: "He let the *so* hang there, unfinished, the way the song at the station had stopped on its chord. She had the feeling that if she hummed the next part of this one, he wouldn't thank her for it." },
      { s: 'mark', f: 'sad', t: "Is he okay? Here?" },
      { n: "He asked it so quietly the fountain nearly took it. Then he heard himself, and shook his head, and put the smile back on like a cap." },
      { choose: [
        { t: "I think so. Most nights.", notes: 3, then: [
          { s: 'mark', f: 'neutral', t: "...Good. That's good." },
          { s: 'mark', f: 'neutral', t: "Don't tell him I asked. He'd be insufferable about it for, like, a year." }
        ] },
        { t: "You should ask him yourself.", notes: 2, then: [
          { s: 'mark', f: 'neutral', t: "Yeah. I should." },
          { s: 'mark', f: 'serious', t: "I'm not going to. You know that. You always know that about me. It's very annoying." }
        ] }
      ] },
      { n: "His phone buzzed against the stone. He looked at it, and whatever was on the screen pulled every bit of slump out of his shoulders at once, the way a coach's whistle straightens a whole team." },
      { s: 'mark', f: 'flustered', t: "That's, uh. That's nothing. Delivered late. From home. That's totally nothing. Good seeing you, Sol. Really." },
      { n: "He went off toward the escalators at a pace that was trying very hard to be a stroll. He'd left the pencil on the fountain's edge. It had teeth marks on the end, and MARK written down the side of it in tiny capitals, the way you only label the things you're afraid someone will take." }
    ] },

    { after: '12/16', title: '5: the map', place: 'Port Island Station · Central Concourse', time: 'Evening', scene: [
      { n: "He'd brought her an iced coffee at four in the afternoon on Tuesday, and a sparkling water on the dorm steps on Thursday morning, and tonight, at the station, at eight, a can of the pink refresher from the one machine in Port Island that sold anything close to it, and he held it out to her with his face doing the thing where it wanted very much to be thanked and was trying to look like it didn't care." },
      { s: 'mark', f: 'neutral', t: "Refresher. At night. You don't drink coffee late, you'll be up till four." },
      { n: "It was exactly right. Every single one of them had been exactly right, the right drink at the right hour, and she stood in the concourse holding the cold can and felt something that was warm and something that wasn't, both at once, in the same place." },
      { s: 'solar', f: 'neutral', t: "How do you know my drinks?" },
      { s: 'mark', f: 'neutral', t: "I asked. Hanni told me. A while ago. At home." },
      { s: 'mark', f: 'neutral', t: "She knows everything about you. She's like a database. A really nice database who bakes." },
      { n: "He said it easily, proudly almost, the way you'd say you'd done your homework. And it was kind. It was a kind thing to do, to go and ask someone what a girl liked so you could get it right. She knew that." },
      { n: "She also knew, somehow, standing there, that there was another way to know what someone drank. A boy who'd just put a can down beside her on a ledge one night without a word, and never said how he knew, and never asked anyone, because he'd watched. She didn't know who. She knew the difference. She held both of them in her hands at once, the asking and the watching, like two cans of different temperatures." },
      { choose: [
        { t: "Thank you for asking.", notes: 3, then: [
          { s: 'mark', f: 'neutral', t: "Of course. Always. I want to get it right with you. I always want to get it right." },
          { n: "He did. That was true. She could see it was true. It was also true that he was watching her face to see if it had worked." }
        ] },
        { t: "You could have asked me.", notes: 3, then: [
          { s: 'mark', f: 'surprised', t: "..." },
          { s: 'mark', f: 'neutral', t: "...Yeah. I could've. Huh." },
          { s: 'mark', f: 'neutral', t: "I think I wanted it to be a surprise. I think I wanted you to go, *how did he know.* That's kind of messed up, right? That's a little messed up." },
          { n: "He laughed at himself, and it wasn't the overplayed laugh. It was smaller, and more honest, and he rubbed his neck after it like it had cost him something." }
        ] },
        { t: "(Drink it. Say nothing.)", notes: 2, then: [
          { n: "She drank it. He watched her drink it. He looked, for a second, exactly like a boy who'd given a girl the right drink and was happy about it, and nothing else, and she let him be that, because some of him was." }
        ] }
      ] },
      { n: "They sat on the bench by the piano until the last train, and he played her three songs she didn't know and one she did, and at the end of the last one he looked at her and said, quietly, that she was easy to talk to, here, easier than at home." },
      { s: 'mark', f: 'neutral', t: "At home you're always watching me like you're doing math. Here you just. Listen." },
      { s: 'mark', f: 'sad', t: "I don't know which one I like better. That's a weird thing to say. Forget I said it." }
    ] },

    { after: '12/22', title: '6: a present', place: 'Iwatodai Dorm · Lounge', time: 'Evening', music: 'joy', scene: [
      { n: "He'd brought presents. For everyone. The whole dorm. He'd come in through the front door on the evening of the Closing Ceremony with two shopping bags from Paulownia Mall and a Santa hat he'd clearly bought as a joke and then committed to, and he'd gone around the lounge handing them out one at a time, with a little speech for each." },
      { n: "Junpei got a baseball cap. Yukari got hand cream that smelled of cherry blossoms. Fuuka got a tiny screwdriver set in a leather case, which made her gasp. Ken got a book about dogs, and Koromaru got a toy shaped like a fish, and Mitsuru got a very good pen, and looked at it, and at him, and said *thank you* in a voice that suggested she was revising an opinion." },
      { s: 'mark', f: 'neutral', t: "And Sol. Last but not least. Obviously." },
      { n: "His was in a small box with a ribbon. Everyone in the lounge was watching. That was, she understood, the point, or one of the points. He'd given everyone else theirs first so that hers would be last, so that everyone would be looking." },
      { n: "Inside was a pair of headphones. Good ones. Over-ear, closed-back, the kind with the soft leather cushions, expensive, the most expensive thing in either bag by a long way, and a little card tucked into the headband in his handwriting. *For the gap in the song. When you're ready. M.*" },
      { s: 'junpei', f: 'surprised', t: "Duuude. Those are like, studio headphones. Those are nicer than the ones in the electronics shop window." },
      { choose: [
        { t: "These are too much, Mark.", notes: 3, then: [
          { s: 'mark', f: 'flustered', t: "Mark. Oh no. No, no, they're— it's nothing. They were on sale. Kind of. It's Christmas!" },
          { s: 'mark', f: 'neutral', t: "...You deserve nice things, Sol. You never let anyone give you nice things. Let me. Just this once." }
        ] },
        { t: "(Put them on. In front of everyone.)", notes: 3, then: [
          { n: "She put them on. The lounge went away. Everything went away, the TV and Junpei and the warm buzz of everyone, into a soft padded silence like the inside of a held breath, and in the silence she could see Mark's face, watching her, lit up, delighted, and something else behind the delight, already looking toward what came next." },
          { n: "She took them off. The lounge came back. He was smiling. Both of the smiles were real. She'd stopped expecting otherwise." }
        ] },
        { t: "Thank you, Marky.", notes: 3, then: [
          { s: 'mark', f: 'neutral', t: "Yeah? You like them? Okay. Okay, good. Good good good." },
          { n: "He let out a breath like he'd been holding it since Paulownia Mall, and sat down on the arm of the sofa next to her, and didn't rub his neck once, which she noticed, and filed." }
        ] }
      ] },
      { n: "Across the lounge, in the doorway, a boy in a black hoodie had stopped on his way to the kitchen and was looking at the headphones in her hands. He didn't say anything. His face did nothing at all, very carefully. Then he went on to the kitchen, and a minute later she heard the back door, and he didn't come back through the lounge that night." },
      { n: "Mark didn't look at the doorway once. He hadn't needed to. She understood that later, lying in bed, with the headphones on the desk in their box, and couldn't decide if it had been an accident." }
    ] },

    { after: '12/29', title: "7: meaning isn't the problem", place: 'Port Island Station · Central Concourse', time: 'Evening', music: 'night', scene: [
      { n: "The station between Christmas and New Year was nearly empty, the shops half shuttered, the bakery by the east gate closed with a handwritten sign in the window, a single cleaner pushing a wide mop across the concourse in slow overlapping arcs, and the piano with the seagulls had a plastic cover over it that somebody had forgotten to take off." },
      { n: "Mark was sitting on the bench beside it anyway, with his elbows on his knees and the cover still on, not playing." },
      { s: 'mark', f: 'neutral', t: "They'll let me take the cover off if I ask. I didn't want to ask. I wanted to sit here and not play for once. See what that's like." },
      { s: 'mark', f: 'sad', t: "It's bad. It's really bad. I don't recommend it." },
      { n: "She sat next to him. The cleaner went by. The departure board clicked over to a train neither of them was taking." },
      { s: 'mark', f: 'serious', t: "Can I tell you something? And you won't get weird?" },
      { s: 'mark', f: 'neutral', t: "People think I don't mean things. At home. They think I'm a guy who says the nice thing because it's the nice thing to say. I'm very good at the nice thing." },
      { s: 'mark', f: 'serious', t: "But meaning it isn't the problem. I always mean it. Every time. I meant the headphones. I meant the song. I meant every drink." },
      { s: 'mark', f: 'sad', t: "The problem's that I mean other stuff at the same time. And I can't. Get them apart. I've never been able to. It's all just in there together." },
      { n: "He said it to his hands. He said it the way you'd say something you'd been rehearsing in the dark for a long time and had never once planned to say out loud, and when it was out he looked startled at himself, and then frightened, and then, almost immediately, he laughed." },
      { s: 'mark', f: 'flustered', t: "That's so deep. That's way too deep for a train station. Forget I said it. It's the holidays. Everybody gets weird." },
      { choose: [
        { t: "I don't think I can forget it.", notes: 3, then: [
          { s: 'mark', f: 'neutral', t: "...No. You never could. That's the thing about you." },
          { s: 'mark', f: 'serious', t: "You don't forget anything. Except, apparently, me. Which is honestly kind of a relief." },
          { n: "He meant that too. She could tell. It was the strangest thing anyone had said to her all year." }
        ] },
        { t: "Everyone means more than one thing.", notes: 3, then: [
          { s: 'mark', f: 'surprised', t: "..." },
          { s: 'mark', f: 'neutral', t: "Yeah? You think?" },
          { s: 'mark', f: 'neutral', t: "...Okay. That helps. That actually helps. Most people just pick one. They pick which one I meant. Usually the bad one." }
        ] },
        { t: "(Take the cover off the piano.)", notes: 3, then: [
          { n: "She stood and pulled the plastic cover off the piano and folded it, and put it on the bench, and sat back down. He looked at the uncovered keys for a long time." },
          { s: 'mark', f: 'neutral', t: "...You didn't ask." },
          { s: 'solar', f: 'neutral', t: "Nobody was grading you." },
          { n: "He played. Badly, at first, out of tune with himself. Then not. The cleaner stopped mopping to listen, leaning on the handle, and at the end she clapped, once, and went back to it." }
        ] }
      ] }
    ] },

    { after: '1/7', title: '8: marky', place: 'Port Island · Back Streets', time: 'Evening', scene: [
      { n: "He walked her home again. Bodyguard Mark Lee, reporting for duty. It had become a thing they said without either of them saying it, a look at the station exit and a shrug and the two of them falling into step through the cold back streets toward the bay." },
      { s: 'mark', f: 'neutral', t: "So. The end of the month. Everyone's talking about it. Mitsuru says *the thirty-first* the way my professors say *the final.*" },
      { s: 'mark', f: 'neutral', t: "Are you coming home? To ours, I mean. You don't have to tell me. I'm just— I'm asking. Everyone's asking. I'm one more person asking." },
      { choose: [
        { t: "I don't know yet.", notes: 3, then: [
          { s: 'mark', f: 'neutral', t: "Yeah. No. Of course. That's fair. That's totally fair." }
        ] },
        { t: "Do you want me to?", notes: 3, then: [
          { s: 'mark', f: 'neutral', t: "Yeah. Obviously. Yeah." },
          { s: 'mark', f: 'neutral', t: "I like you, Sol. You know that. I've liked you since the tour. You were so rude about the tour." }
        ] }
      ] },
      { s: 'mark', f: 'neutral', t: "And, you know, if you came home, there's always something coming up with your family. Some big dinner. Press, your dad's people, you're always so stressed about them, you'd need someone there who isn't— I could go. I could be your plus one. Bodyguard Mark Lee, black tie edition. I'd meet your dad. I'd behave. I'd—" },
      { n: "He stopped. Mid-word. He heard where the sentence had gone, the same way she'd watched him hear it on the fountain's edge and at the station piano, and his hand went to the back of his neck and stayed there, and he laughed, and it was the loud one, the overplayed one, too early and too bright." },
      { s: 'mark', f: 'flustered', t: "That's— forget the dinner. I don't know why I said the dinner. I don't even own a tie. I'd have to borrow one from Jaemin and he'd make me pay rent on it." },
      { choose: [
        { t: "Mark.", notes: 3, then: [
          { n: "She said it flat. Not Marky. Mark. And she watched it land, watched him straighten like a boy whose teacher had said his full name across a classroom." },
          { s: 'mark', f: 'surprised', t: "...Am I in trouble?" },
          { s: 'solar', f: 'neutral', t: "I don't know yet." },
          { s: 'mark', f: 'sad', t: "...Yeah. That's fair. That's the most fair thing you've said to me." }
        ] },
        { t: "Marky.", notes: 3, then: [
          { n: "She said it lightly. Handing it back. And she watched him take it, gratefully, like a man who'd been let off a fine, and also watched him notice that it had been handed back, which wasn't the same as never being taken away." },
          { s: 'mark', f: 'neutral', t: "...Yeah. Okay. Thanks, Sol." }
        ] }
      ] },
      { n: "At the dorm steps he stopped, like he always stopped, at the bottom, and didn't come up. He looked up at the building's lit windows, at the lounge, at the shape of somebody in a black hoodie on the roof railing far above, and looked away again, quick." },
      { s: 'mark', f: 'neutral', t: "Text me when you're in. I know you're literally right there. Text me anyway." }
    ] },

    { after: '1/15', title: '9: credited', place: 'Port Island Station · Central Concourse', time: 'Evening', music: 'tender', scene: [
      { n: "He'd finished it. He told her before she'd sat down, standing up from the bench with his hands out like a man about to catch something, and the concourse was full of the six o'clock crowd and he didn't care, he sat back down and played it for her start to finish, right there, on the piano with the seagulls." },
      { n: "It was beautiful. She hadn't expected it to be beautiful. She'd expected it to be good, because he was good, because everyone said so. She hadn't expected it to sound like someone telling the truth very carefully for four minutes." },
      { n: "Her five notes were in it. Not hidden. Right at the front, the opening, the line the whole thing climbed out of. And in the middle, the gap, eight bars where the piano dropped to almost nothing and waited." },
      { s: 'mark', f: 'neutral', t: "Your notes are the hook. I built the whole thing off them. They're credited. Obviously. On everything. Your name." },
      { s: 'mark', f: 'serious', t: "I'd never put my name on something that was yours. I want you to know that. I want you to know I know that matters." },
      { n: "He said it with a strange, careful weight, like a man laying down a stone on purpose where someone else had once tripped, and she didn't know why it mattered so much to him that she hear it. She heard it. She put it away somewhere." },
      { s: 'mark', f: 'neutral', t: "Would you sing it? The gap. Not here. At home. For real. In a studio. I know people— I could—" },
      { s: 'mark', f: 'flustered', t: "...You don't have to. You don't have to decide now. You don't have to decide ever. I'm just asking." },
      { choose: [
        { t: "Not yet.", notes: 3, then: [
          { s: 'mark', f: 'neutral', t: "Not yet. Okay. Not yet's not no." },
          { s: 'mark', f: 'neutral', t: "...I'll wait. I'm actually pretty good at waiting. I've been waiting on this song for two years." }
        ] },
        { t: "(Sing the gap. Here. Now.)", notes: 3, then: [
          { n: "She sang it. Here, now, in Port Island Station at six in the evening with a hundred strangers going home around them, not loud, not hidden. Eight bars. Her voice found the line under his chords like it had always known where it went, and Mark played under her with his eyes shut and didn't look at her once, which she understood was the only way he could get through it." },
          { n: "When it was over a woman in a raincoat clapped, and then three more people, and Mark opened his eyes and looked at the keys and laughed, wet, surprised, and rubbed his face with both hands." },
          { s: 'mark', f: 'sad', t: "...Yeah. That's what it's for. That's what it was always for." }
        ] },
        { t: "Ask me again when I remember you.", notes: 3, then: [
          { s: 'mark', f: 'surprised', t: "..." },
          { s: 'mark', f: 'neutral', t: "...That's smart. That's really smart, Sol. You should know who you're saying yes to." },
          { s: 'mark', f: 'sad', t: "I'd want that too. If I were you." }
        ] }
      ] }
    ] },

    { after: '1/27', title: '10: both', place: 'Port Island Station · Central Concourse', time: 'Evening', music: 'mystery', scene: [
      { n: "Four days left. The station was the same station, the same river of umbrellas, the same last sweet bread from the bakery by the east gate, the same piano with its fat grinning seagulls, and Mark was on the bench playing the four notes, over and over, and stopping on the chord, the way he had the very first night, like a man getting all the way to his front door and patting his pockets for keys." },
      { n: "She hummed the fifth from across the concourse before she reached him. She didn't decide to. It came out of her the way it always had." },
      { n: "And then she remembered him." },
      { n: "A first day. A campus in late summer, brick and heat and a hundred families dragging suitcases. A boy with caramel hair falling in his eyes who'd walked straight up to her outside a building, before she'd spoken to a single other person, and said hi, and said his name, and offered her a tour, and she'd asked, *you already know who I am, don't you,* and he'd said *yeah,* and she'd made him ask anyway. A tour of a building with music rooms upstairs and a gaming lab downstairs, and her face against the lab's glass the entire time, and him laughing about it, kindly. A boy who walked her home. Who texted *u get back ok?* Who meant it. Who was also, somewhere behind his eyes, always, doing a sum." },
      { s: 'solar', f: 'neutral', t: "...You knew who I was. On the first day. Before I said a word." },
      { n: "His hands came off the keys." },
      { s: 'mark', f: 'surprised', t: "..." },
      { s: 'mark', f: 'neutral', t: "...Yeah. I did. Everybody did. You're Jaehyun's sister. You're your dad's daughter. You were on the news." },
      { s: 'mark', f: 'serious', t: "But I'd have walked up to you anyway. I want you to know that. Even if you'd been nobody. I've thought about it a lot. I think I would have. I think I'd have liked you anyway." },
      { s: 'mark', f: 'sad', t: "I don't know for sure. That's the honest answer. I'll never know for sure. That's what I'm stuck with." },
      { n: "She stood in front of the piano and looked at him. At the warm open face that wanted so badly to be liked, and was, and at the thing behind it that never stopped counting, and was there too. Both of them. Real. She'd known it on the first night in this station, with a can of milk tea going cold in her hands, before she'd known his name. She knew it now with his whole name, with everything, and it didn't make either of them less true." },
      { choose: [
        { t: "Bye, Marky.", notes: 3, then: [
          { s: 'mark', f: 'surprised', t: "..." },
          { s: 'mark', f: 'neutral', t: "...You even say it like you." },
          { s: 'mark', f: 'sad', t: "Bye, Sol. Take care of yourself, okay? Text me when you get back. Wherever back is." }
        ] },
        { t: "Thank you, Mark. For the song.", notes: 3, then: [
          { s: 'mark', f: 'neutral', t: "...Mark. Okay. Okay." },
          { s: 'mark', f: 'neutral', t: "That's fair. That's the right one. I'll earn the other one back. At home. If you'll let me." }
        ] },
        { t: "(Sit down and play the four notes with him.)", notes: 3, then: [
          { n: "She sat down beside him on the bench and put her hands on the keys and played the four notes, badly, and he played the fifth, and then the chord, and it opened, and they played the whole thing through together, the way they'd never once done at home, and at the end he didn't look at her like a sum. He just looked at her." },
          { s: 'mark', f: 'neutral', t: "...Yeah. Okay. Yeah." }
        ] }
      ] },
      { n: "The chime went for the last train to Iwatodai. He looked up at the board like a teacher had caught him passing notes, and went to the vending machine by the pillar, and came back, and pressed a can into her hands before she'd said whether she wanted one." },
      { n: "Sweet. Hot. Exactly right. He'd asked, once, a long time ago, in another kitchen, what she liked. He'd remembered. Both of those things were true, and she held the can the whole way home, and it stayed warm." }
    ] }
  ],

  afterMax: [
    { title: 'request', place: 'Port Island Station · Central Concourse', time: 'Evening', scene: [
      { n: "The seagull piano. A small crowd now, some evenings. A boy in a navy sweatshirt playing whatever people asked for." },
      { s: 'mark', f: 'neutral', t: "Okay, requests. Sol. You get one. Anything. I'll fake it if I don't know it." },
      { choose: [
        { t: "Something nobody's grading.", notes: 3, then: [
          { s: 'mark', f: 'surprised', t: "...Okay. Okay, that's a request." },
          { n: "He played something he made up on the spot, bad and bright and joyful, and got three bars in before he started laughing and couldn't stop, and played it anyway." }
        ] },
        { t: "The four notes.", notes: 3, then: [
          { s: 'mark', f: 'neutral', t: "Always. You know your cue." }
        ] }
      ] }
    ] },
    { title: 'text me when you get back', place: 'Port Island · Back Streets', time: 'Evening', scene: [
      { n: "The walk home. The back streets. His shoulder a careful distance from hers, closer than it used to be, not as close as it wanted to be." },
      { s: 'mark', f: 'neutral', t: "Bodyguard Mark Lee, reporting for—" },
      { choose: [
        { t: "Ugh. Here comes bodyguard Mark Lee.", notes: 3, then: [
          { s: 'mark', f: 'neutral', t: "You got there first. You always get there first." }
        ] },
        { t: "You don't have to walk me.", notes: 3, then: [
          { s: 'mark', f: 'neutral', t: "I know." },
          { s: 'mark', f: 'sad', t: "...I like it, though. It's the one thing I do with you where I'm not thinking about anything else. Just the walk." }
        ] }
      ] }
    ] }
  ]
});
