/* Jaemin · XIX Sun. Revamp social link data (femc-game.html). Format: link fields in assets/femc/game/core.js, scene lines in scene.js.
   Searcher (Runners), friendship (romance: null). Na Jaemin, Sigma Chi's Social Chair: the charmer who can sell anything,
   himself included, attractive in the obvious, practiced way of someone who knows which angle the camera wants. Under the
   host he reads the house's temperature, and he is worried: that night he commented "this isn't funny. take it down", and
   he came looking for Solar *and* Haechan. Arcana Sun: P5's Sun is the politician who learns to sell himself honestly; the
   social sun the house turns around. The link's spine is a party boy learning to say one thing without a pitch (r1 asks for
   it, r5 the persona slips, r8 the plain take, r10 the invitation with no pitch on it).
   His crossing with Chenle (story-act4 'a4-twelve', 11/16 late at the earliest, by 12/13 at the latest; flags
   arrived-jaemin / arrived-chenle) is the lead's story event and isn't replayed: rank 1 is the first evening after, whenever
   that is ("since the night at the gate", never "yesterday"). Housing: the Kirijo guesthouse by the station (Kat's housing
   ruling, FEMC-REVAMP-LORE.md), two doors from Jaehyun; he visits the dorm and is out by eight on school days. No Persona.
   Home: Mandragora karaoke's biggest booth, evenings (his "office hours").
   Canon echoes (Runners Ch 1, 26, 41, 47, 53, 55, 57, 63, 65): "Solar Lee, good to see you enjoying Sigma the right way";
   "my lady"; "Fabulous, I am ecstatic"; "Businesswoman. I respect it" (Hyein's December commission: deposit up front, no
   friend discount, he called her wings a hazard; festive "but not ugly festive", he refuses to look like a department
   store); the costume contest from a chair with a microphone and the worst accent; Mark drafted as judge ("famously boring",
   "substitute teacher"); "BODYGUARD MARK LEE"; "Haechannie" / "Do not."; "so, what's up with Haechan?" (Ch 55); the rota
   nobody understands; the camping trip he architected as Social Chair (a packing list with "emergency speaker" and no first
   aid kit; the transport spreadsheet he swears to Hanni he looked at); recovery parties only when Jaehyun is away; the Sunday
   cleanup with a garbage bag (Ch 57); Chenle on him: "he likes parties, attention... wants everyone to think he's fun".
   The game's Runners side is the state at about 11/22 (Kat's ruling 2026-10-27): the trip happened. He knows something blew
   up there on the Saturday, not what (rank 4), and rank 9 rewrites it as the version he'd run again; he pays Hyein's deposit
   (rank 7, Kat's ruling). Jeno isn't here and is missed. Drink,
   never drugs; nothing here touches Runners' locked truths, and nobody confirms Solar and Haechan.
   Flags this link sets (all jaemin-*) and where they're read (each scene reads three ifFlag gates at most):
     rank 1  jaemin-five-stars (she plays along with his pitch) | jaemin-refund (she asks for the version without it)
             → rank 8 reads jaemin-refund; afterMax 'five stars' reads jaemin-five-stars
     rank 2  jaemin-covered (she sells Jaehyun "a study group")                         → rank 6
     rank 3  jaemin-told (she tells him plainly she goes into the tower)               → rank 5
     rank 5  jaemin-cups (she picks up a bag at the end of his party)                  → rank 10, afterMax 'cups'
     rank 8  jaemin-plain (she has him say the toast to her instead of the camera)     → afterMax 'take twelve'
   Story flags read: route-R / route-true / route-stay (after the solstice) in rank 10 and afterMax 'the door'.
   Story events read: a4-mark (Mark, ranks 2 and 9, afterMax 'office hours'), a4-light-on (Danielle, rank 7). Chenle shares
   Jaemin's arrival, so he's always here. Branches never hold choices, so each rank's meter is the same on every path.
   The living file (data/living-jaemin.js) carries his texts after ranks, the 11/23 and 12/31 holidays, four routines and two
   run-ins. Texting voice: lowercase, warm, emoji, nicknames ("solar lee", "my lady"); never caps-lock Hyein energy.
   Faces: Jaemin has no portraits yet (silhouette): neutral, happy, sad, serious, surprised, flustered. Mark has no 'happy';
   Mitsuru only neutral / sad / surprised; Fuuka has no 'serious'. */
(window.FEMC_GAME_LINKS ||= []).push({
  id: 'jaemin', name: 'Na Jaemin', short: 'Jaemin', arcana: 'Sun', numeral: 'XIX', from: 'Runners',
  kind: 'searcher', world: 'R', romance: null, portraitPending: true,
  starts: '11/16', gate: { R: 5 }, storyEvents: ['a4-twelve'],
  home: { area: 'mall', spot: 'Karaoke', slot: 'evening', days: [0, 3, 5, 6],
          hint: "Evenings at Mandragora karaoke in Paulownia Mall, in the biggest booth, which he has somehow made his." },
  approach: "Somebody has booked the biggest booth at Mandragora karaoke again, the one meant for company parties, and through the round window in its door you can see a boy standing on the vinyl couch with a microphone, doing a terrible accent for an audience of one bored blond kid and a melon soda.",
  cast: {},
  invite: {
    ask: [
      "solar lee!! office hours are open 🎤 biggest booth. i have two tambourines and no one to give the second one to",
      "my lady. your presence is requested. by me. at karaoke. tonight ✨",
      "chenle has been reading the songbook for 40 minutes. please come save me from his face",
      "r u free?? i found a song in the book that came out after 1995. its a miracle. we have to celebrate",
      "the clerk smiled at me today. we're basically family now. come meet the family 🎤",
      "need a second opinion on a key change. chenle says 'no' to everything so his opinion doesnt count",
      "hi!! no pressure!! just a booth with ur name on it. not literally. i asked. they said no",
      "u went to the monster tower last night didnt u. come sit somewhere soft. the couch here is VERY soft",
      "i have melon soda and a plan. the plan is melon soda",
      "big booth. small crowd. exclusive. very exclusive. currently one guy",
      "solar lee i am begging u. one song. i'll sing it. u just have to be in the room",
      "free tonight? i'm told this is how u make friends here. by singing at them"
    ],
    ok: ["YES. ok. i'm putting ur name on the door. in my heart", "fabulous. i am ecstatic. 7?", "ok!! i'll order u a melon soda. u'll pretend u dont like it", "perfect. tambourine #2 is urs 🎤", "!!! ok. biggest booth. u know the one"],
    no: ["noooo. ok. next time 💔", "all good!! ur loss. chenle's gonna sing. kidding. he'd never", "ok ok. drink water. be safe tonight ✨", "thats fine!! i'll save u a seat. the whole couch is seats", "ok!! office hours are always open. its the only thing here that is"]
  },
  hangouts: [
    [
      { n: "The clerk at Mandragora's front desk had worked out, by now, that the boy in the biggest booth would be there every evening whether or not anyone joined him, and had started leaving a dish of rice crackers on the low table before he arrived, which Jaemin had taken as a sign of deep personal love and talked about constantly." },
      { s: 'jaemin', f: 'happy', t: "He brought me crackers. He's never brought anyone crackers. I asked. Well, I pointed at the crackers and at the other booths and did a face, and he did a face back, and I'm almost sure the face meant *only you.*" },
      { choose: [
        { t: "(Go and get the clerk. Make him sing one.)", notes: 3, stat: { charm: 1 }, then: [
          { n: "It took four minutes and a great deal of pointing. The clerk sang one verse of something about a harbor in a soft, astonishing tenor, very seriously, with his eyes closed and his hands folded over his name badge, and then bowed and went back to the desk without a word, and Jaemin stood on the couch and applauded him all the way out of the door." },
          { s: 'jaemin', f: 'surprised', t: "He was GOOD. He's been sitting out there being good this whole time. Solar. We have to get him a booth. We have to get him a *career.*" }
        ] },
        { t: "He leaves crackers for everyone. I've been here before.", notes: 2, then: [
          { s: 'jaemin', f: 'sad', t: "Don't do this to me." },
          { s: 'jaemin', f: 'happy', t: "No. No, I choose to believe. I'm a believer. I believe in the crackers." }
        ] },
        { t: "(Eat a cracker. Rate it.)", notes: 2, then: [
          { n: "She ate one slowly, like a judge, and said *four,* and he looked so wounded on the clerk's behalf that she raised it to four and a half, and he wrote *4.5* on a napkin and propped it against the dish like a place card." }
        ] }
      ] }
    ],
    [
      { n: "Junpei had asked to be taught. That was how he put it, standing in the doorway of the biggest booth in his cap with his hands in his pockets and his shoulders up around his ears, as if he were asking a sensei to take him on, and Jaemin had looked him up and down for a long theatrical second and said *finally, a protégé,* and now the two of them were in the corridor outside the booth practicing *entering a room.*" },
      { s: 'jaemin', f: 'serious', t: "No. Stop. You came in like you owed the room money. You come in like the room owes *you* money. Chin. Shoulders. You're not arriving, you're *happening.*" },
      { s: 'junpei', f: 'flustered', t: "I'm happening! I'm happening so hard, dude!" },
      { choose: [
        { t: "Do it again, Junpei. Slower.", notes: 2, then: [
          { n: "He did it again, slower, and it was worse, and then, on the fifth try, it was suddenly not worse at all, it was Junpei walking into a karaoke booth like he'd been expected, and Jaemin clapped once, very loud, and Junpei looked so proud of himself that he walked straight into the table." }
        ] },
        { t: "Show me how you do it.", notes: 3, then: [
          { n: "Jaemin stepped out, shut the door, counted to three under his breath, and opened it, and it wasn't anything, really, a turn of the head, a hand up, her name said like a headline, and the whole booth tipped toward him like a table someone had leaned on. Then he shut the door behind him and was just a boy in a sweater again, a little tired around the eyes." },
          { s: 'jaemin', f: 'neutral', t: "It's a trick. It's just a trick. You do it till it's not one." }
        ] }
      ] },
      { s: 'junpei', f: 'happy', t: "Lesson two's next week. He says it's *the exit.* He says the exit's the hardest part." }
    ],
    [
      { n: "The guesthouse desk lady, who called Minji *the camera girl* and left rice balls outside doors like she was feeding strays, had decided within a week that Jaemin was the most charming young man she had ever met, and Jaemin had decided that this made him responsible for her happiness, which was how Solar found him behind the front desk in the guesthouse lobby, folding the evening's towels with her, very badly." },
      { s: 'jaemin', f: 'happy', t: "She's teaching me the corner thing. There's a corner thing. You fold the towel and then there's a corner thing and it looks like a *hotel.* My whole life I've just been putting towels in a pile, Solar, like an animal." },
      { choose: [
        { t: "(Learn the corner thing too.)", notes: 3, stat: { proficiency: 1 }, then: [
          { n: "The desk lady showed her once, without a word, with hands that had done it ten thousand times, and Solar's came out right the second time, and the lady patted her wrist and said something to Jaemin that made him clutch his chest, and wouldn't translate it, and grinned about it for the rest of the evening." }
        ] },
        { t: "Does she know you can't understand a word she says?", notes: 2, then: [
          { s: 'jaemin', f: 'neutral', t: "Does it matter? I understand the *vibe.* The vibe is towels and that I'm too thin." },
          { s: 'jaemin', f: 'happy', t: "Every grandma in every country says the same three things. You're too thin. Take this. Sit down. I've never once had to speak the language." }
        ] }
      ] },
      { n: "When they'd finished there were twenty towels on the shelf with their corners turned like the pages of a good book, and the desk lady put a rice ball in each of their hands as they left, still warm, wrapped in plastic, as if they were both going out somewhere cold and far." }
    ],
    [
      { n: "Jaemin had got hold of a calendar. A free one, from the pharmacy on the Strip, with a photograph of a different shrine for every month, and he'd taken it to the biggest booth and spread it on the table and was writing on it in pen, every square, with the focus of a general planning a war." },
      { s: 'jaemin', f: 'serious', t: "Look at this. Look at this calendar. I'm the Social Chair of an entire fraternity and in this city I have a social calendar of *zero.* Zero events. I've never had a zero. I didn't know they made zero." },
      { s: 'jaemin', f: 'neutral', t: "So I'm making one. Every holiday they've got. They've got so many, Solar. They've got a day for *respecting the aged.* I missed it. I'll never forgive myself." },
      { choose: [
        { t: "Put me down for one.", notes: 3, then: [
          { s: 'jaemin', f: 'happy', t: "Which one? Pick. Any square. I'll build it around you." },
          { n: "She tapped a Tuesday that had nothing on it at all, no holiday, no shrine, and he looked at it, and then at her, and wrote *SOLAR LEE DAY (TBD)* across the whole square in capitals and drew a sun in the corner, badly, with too many rays." }
        ] },
        { t: "You know most of these are just days off. Nobody throws a party.", notes: 2, then: [
          { s: 'jaemin', f: 'flustered', t: "That's because nobody's *asked* them to. That's what I'm for. I'm the asking." }
        ] },
        { t: "(Draw a tiny tambourine on every square he's filled.)", notes: 2, then: [
          { n: "He let her. He watched her do it with his chin on his hand, and when she'd done the last one he said the calendar was now a legal document, and tore off the month that was nearly over and folded it into his wallet, like a receipt for something he'd paid in advance." }
        ] }
      ] }
    ],
    [
      { n: "Chenle was losing at a game on his phone, which was rare enough that Jaemin had stopped singing to watch, and was narrating it over Chenle's shoulder in a hushed golf-commentator voice that was getting on everybody's nerves, including, from the set of his jaw, the man who'd invented the voice." },
      { s: 'jaemin', f: 'neutral', t: "And he's down. He's down to one life. The crowd goes silent. Zhong Chenle, tank, computer science major, never once in his life been fun at a party, and it all comes down to—" },
      { s: 'chenle', f: 'serious', t: "I lost because you're breathing on me." },
      { s: 'jaemin', f: 'happy', t: "I'm breathing *for* you." },
      { choose: [
        { t: "(Take Chenle's side. Move Jaemin to the other couch.)", notes: 2, then: [
          { n: "She moved him to the other couch by the sleeve. Chenle won the next round without looking up, and said *thank you* to his phone, quietly, which from him was a parade." }
        ] },
        { t: "How did you two end up coming together?", notes: 3, then: [
          { s: 'chenle', f: 'neutral', t: "We didn't come together. I came. He followed me." },
          { s: 'jaemin', f: 'neutral', t: "He was walking somewhere at midnight with his phone to his ear and a face on. You don't let a face like that walk anywhere alone." },
          { s: 'chenle', f: 'neutral', t: "He talked the whole way." },
          { s: 'jaemin', f: 'happy', t: "Someone had to. You were busy counting." }
        ] },
        { t: "(Narrate Jaemin back at him.)", notes: 3, then: [
          { n: "She did the golf voice. She did it badly and in his exact cadence, *and he's touching his hair, the crowd holds its breath,* and Chenle made a small high sound that was his laugh, the real one, the one he didn't let out much, and Jaemin put both hands over his face and lay down on the couch and told the ceiling he'd been betrayed by his own art." }
        ] }
      ] }
    ],
    [
      { n: "Hanni had come to office hours. She'd come, she explained, sitting very upright on the edge of the big couch with her bag in her lap, as one social chair to another, because somebody had to talk to him about the *budget,* and Jaemin had looked at her the way a man looks at a tax inspector who has brought cookies." },
      { s: 'hanni', f: 'serious', t: "You're spending all your yen on this booth. I've seen the receipts. You leave them on the table. Every night." },
      { s: 'jaemin', f: 'neutral', t: "It's an investment. In culture. In *community.*" },
      { s: 'hanni', f: 'neutral', t: "It's a room with a disco ball and one boy in it." },
      { choose: [
        { t: "She's right. Split it with me.", notes: 3, then: [
          { s: 'jaemin', f: 'surprised', t: "Split the booth? With you?" },
          { s: 'hanni', f: 'happy', t: "That's a GOOD budget. That's a shared budget. That's how you do it." },
          { n: "Jaemin looked between them like a man being robbed by two people he liked, and then took the receipt off the table and tore it carefully in half, and gave Solar one half, and kept the other, and Hanni clapped." }
        ] },
        { t: "He's the Social Chair. Let him have his room.", notes: 2, then: [
          { s: 'jaemin', f: 'happy', t: "Thank you. THANK you. Somebody in this city understands the office." },
          { s: 'hanni', f: 'neutral', t: "I'm the Social Chair too. I have a room. It's the dorm. It's free." }
        ] }
      ] },
      { n: "They argued about it for an hour, very happily, two people who'd been handed the same job and done it in opposite directions their whole lives, and by the end Hanni had sung one song, quietly, with her eyes on the words, and Jaemin had stopped talking for the entire length of it." }
    ],
    [
      { n: "Paulownia Mall had a photo booth by the escalator with a pink curtain and a machine that drew hearts and stars on your face afterward, and Jaemin had discovered it and was treating it like a professional engagement, smoothing his hair in the reflection of its little screen, turning his face a quarter inch to the left, then back." },
      { s: 'jaemin', f: 'neutral', t: "Left is my side. Everybody has a side. Yours is also left, by the way. You'll fight me on that. You'll be wrong." },
      { choose: [
        { t: "(Pull a face at the last second. Ruin all four.)", notes: 3, then: [
          { n: "She waited for the flash and crossed her eyes, and he caught it in the corner of the screen at the last instant and broke completely, and the second photo was him laughing with his whole face, no side to it at all, eyes shut, mouth open, ugly and real, and he looked at that one longest when the strip came out, and pretended he wasn't." },
          { s: 'jaemin', f: 'flustered', t: "That one's not going anywhere. That one's evidence. Burn that one." },
          { n: "He put it in his wallet." }
        ] },
        { t: "(Turn your face to the left.)", notes: 2, then: [
          { n: "She turned her face to the left. The flash went. When the strip came out she looked at it and found that he was right, that she had a side, and that she'd known it, somewhere, and had been standing on it for years without asking why." },
          { s: 'jaemin', f: 'happy', t: "Told you. Social Chair. I know everybody's side." }
        ] }
      ] }
    ]
  ],
  ranks: [
    { after: '11/18', title: '1: office hours', place: 'Paulownia Mall · Karaoke', time: 'Evening', music: 'joy', scene: [
      { n: "Mandragora's biggest booth was meant for company parties, twelve salarymen and a tambourine each, and the tired clerk at the front desk had stopped asking who it was booked for, because it was always the same boy, and the boy always paid in advance, in small bills, smoothing each one flat on the counter like he was dealing cards." },
      { n: "Since the night at the school gate he had found the karaoke place before he'd found a bank, a map, or the guesthouse laundry room, and had spent, as far as Solar could work out from the clerk's face, every evening since inside it, on the long vinyl couch under the mirror ball, holding what he called *office hours.*" },
      { register: 'jaemin' },
      { n: "He was very good-looking, which she noted the way you'd note the weather, and he knew it, which she noted the same way. Dark hair pushed back off his forehead, a sweater that looked expensive in a way that had been decided on, and a face that turned, very slightly, every time the mirror ball's light came round, so that it always caught him on the same side." },
      { n: "Chenle was in the corner with a melon soda and the song catalogue open on his knees, reading it the way other people read the label on a protein bar, all of it, slowly, without any expectation of being pleased." },
      { s: 'jaemin', f: 'happy', t: "Solar Lee. In my office. Sit, sit, you're the guest of honor, everybody else just got here first." },
      { s: 'chenle', f: 'neutral', t: "There's no one else here." },
      { s: 'jaemin', f: 'neutral', t: "There's you, Le." },
      { s: 'chenle', f: 'neutral', t: "I'm not a guest. I'm a hostage with a soda." },
      { n: "Jaemin stood up on the couch. He did it without any warning, the way other people cleared their throats, and stood there with the microphone held loosely at his hip, not switched on, a boy on a vinyl cushion under a disco ball in a city that had never heard of him." },
      { s: 'jaemin', f: 'happy', t: "Okay. Properly, this time. No coffins, no security guard. Na Jaemin. Social Chair, Sigma Chi. Architect of your every Friday night. You've sat by my pool. You walked in my costume contest, and your friends won it, and you'd already left, which, honestly, best exit of the night." },
      { s: 'jaemin', f: 'neutral', t: "And you don't remember any of it. Which I've decided to take as a compliment. A party so good it erased itself. You can't buy that kind of review." },
      { s: 'jaemin', f: 'neutral', t: "Architect of the trip, too. You don't remember that either." },
      { s: 'jaemin', f: 'neutral', t: "...Maybe that's fine." },
      { n: "He said it lightly, like the rest of it, but he was watching her face while he said it, the way you'd watch a dealer turn the last card, and she understood that the pitch was for her and the watching was for him." },
      { choose: [
        { t: "Five stars. Would attend again.", notes: 3, flag: { 'jaemin-five-stars': true }, then: [
          { s: 'jaemin', f: 'surprised', t: "...Five?" },
          { s: 'jaemin', f: 'happy', t: "FIVE. Le. Le, did you hear that? Five stars. From *Jaehyun's sister.* Write it down. Write it on something permanent." },
          { s: 'chenle', f: 'neutral', t: "Don't encourage him. He's going to put it on a banner." },
          { n: "He did not put it on a banner. He wrote it on a napkin, *5/5 — S. Lee,* and propped it against the mic stand facing the door, where anyone coming in would have to read it." }
        ] },
        { t: "Can I have the version without the pitch?", notes: 3, flag: { 'jaemin-refund': true }, then: [
          { n: "He blinked. He opened his mouth, and shut it, and opened it again, and what came out was another pitch, shorter and just as polished, *I'm a people person, I like people, people like me, it's a whole ecosystem,* and she waited, and he heard it land, and looked faintly betrayed by his own mouth." },
          { s: 'jaemin', f: 'flustered', t: "That was it. That was the version without the pitch." },
          { s: 'chenle', f: 'neutral', t: "It wasn't." },
          { s: 'jaemin', f: 'neutral', t: "...I'll get back to you on that one." }
        ] },
        { t: "(Pick up the second tambourine. Shake it once.)", notes: 2, then: [
          { n: "She picked it up off the table and shook it, once, flat, the driest single jingle anyone had ever produced, and he took it as a standing ovation, and bowed from the couch, deeply, from the waist, nearly fell off, and caught himself on the mirror ball's pole with the ease of a man who had nearly fallen off a great many things." }
        ] }
      ] },
      { s: 'jaemin', f: 'neutral', t: "Okay. Song. You pick. I'm warning you now, the English section of that book is a crime scene. There is nothing in there that came out after I was in diapers." },
      { s: 'chenle', f: 'neutral', t: "Three hundred and twelve English songs. Forty-one of them are the same song by different people." },
      { s: 'jaemin', f: 'neutral', t: "He counted. Of course he counted. He counted the first night. I was singing and he was counting." },
      { choose: [
        { t: "(Pick the saddest ballad in the book.)", notes: 2, then: [
          { n: "She found the saddest one she could, a slow thing with strings and a woman leaving a train station forever, and he sang it with his entire chest, eyes closed, one hand out toward the screen like the woman was on it, completely off-key and completely sincere, and in the second verse, for no reason anyone could explain, he did it in an accent from no country on earth." },
          { s: 'chenle', f: 'neutral', t: "That's the accent. That's the Halloween one. He did that for two hours into a microphone. People *left.*" }
        ] },
        { t: "(Pick one in Japanese. Make him read it.)", notes: 3, then: [
          { n: "He couldn't read a word. He didn't let that stop him. He sang the shape of it, the vowels and the tune, inventing the rest with total confidence, a sort of heroic gibberish, and halfway through the clerk's face appeared in the round window in the door, and stayed there, and by the last chorus the clerk was laughing so hard he had to hold the frame." },
          { s: 'jaemin', f: 'happy', t: "I had him. Did you see? I had him in the palm of my hand. That's a crowd. That's a crowd of one, but it's a *crowd.*" }
        ] },
        { t: "Sing whatever you sing at home.", notes: 2, then: [
          { n: "For half a second nothing happened on his face at all. Then it was back, the grin, as if a light had gone off in a room and come straight on again so fast you could tell yourself you'd imagined it." },
          { s: 'jaemin', f: 'neutral', t: "At home I don't sing. At home I hold the mic for other people." },
          { s: 'jaemin', f: 'happy', t: "Which is why I'm doing so much of it here. Pent-up. Years of it. Stand back." }
        ] }
      ] },
      { n: "They stayed until the booth's little phone on the wall rang to say their time was up, and he asked for ten more minutes in English and with his hands, and got them, and used them to make Chenle say *one* nice thing about one song, which took nine." },
      { choose: [
        { t: "Same booth?", notes: 3, then: [
          { s: 'jaemin', f: 'happy', t: "Same booth. It's mine. I've made it mine. The clerk doesn't know yet. He'll find out the way everybody does, slowly, and then all at once, and then he'll be grateful." }
        ] },
        { t: "Do you ever go back to the guesthouse?", notes: 2, then: [
          { s: 'jaemin', f: 'neutral', t: "To sleep. Briefly. Jaehyun lives there." },
          { s: 'jaemin', f: 'serious', t: "Two doors down. Two. I can hear him *iron,* Solar. Who irons. At night. With intent." },
          { s: 'chenle', f: 'neutral', t: "He irons his shirts. That's the intent." }
        ] }
      ] },
      { n: "When she looked back through the round window on her way out, Jaemin had sat down on the couch with the dead microphone across his knees and the grin gone off his face, not unhappy, just switched off, like a shop sign after closing. It lasted about a second. Then Chenle said something she couldn't hear, and he picked the mic back up, and stood on the couch again, and the light went round and caught him on the same side." }
    ] },

    { after: '11/25', title: '2: study group', place: 'Kirijo Guesthouse', time: 'Evening', music: 'joy', scene: [
      { n: "The Kirijo guesthouse by the station had a lobby built to impress visiting executives, low glass tables and a potted palm and a front desk with a bell nobody rang, and on this particular evening it had been impressed upon by Na Jaemin." },
      { n: "Paper chains from the stationery shop on the Strip had gone up along the top of the windows. A portable speaker the size of a lunchbox sat on the desk, playing something with a beat through the tinniest sound Solar had ever heard. On the glass tables there were bowls of crackers, and paper cups, and a two-liter bottle of oolong tea, because Jaemin had stood in front of a vending machine on the corner that sold beer, real beer, in tall cans, for almost a full minute, and then bought oolong, because he'd checked which door was Jaehyun's first." },
      { s: 'jaemin', f: 'happy', t: "Welcome to the first ever Kirijo Guesthouse Social. Attendance is everyone in this room. Which is a hundred percent. Which I've never had. Usually there's a guy asleep in the yard." },
      { n: "Everyone in the room was Solar, Chenle, Minji, and the desk lady, who had been given a paper cup of oolong and a chair of honor by the palm and was watching all of it with the bright, patient face of a woman at her grandson's recital." },
      { s: 'minji', f: 'neutral', t: "Can I film? Just the room. The chains look good against the glass." },
      { s: 'jaemin', f: 'happy', t: "Film me. I'm the room." },
      { n: "He turned toward the lens before she'd lifted it, that quarter turn, chin down, already lit, and Minji looked at him through the viewfinder for a second, and lowered it an inch." },
      { s: 'minji', f: 'neutral', t: "Not that one. The one before you found it." },
      { s: 'jaemin', f: 'surprised', t: "...The what?" },
      { s: 'minji', f: 'neutral', t: "There was a face before the face. That's the one I want." },
      { ifEvent: 'a4-mark', then: [
        { n: "Mark was on the end of the sofa with a cup he wasn't drinking, laughing at the right moments, which he did very well, and Jaemin kept pointing at him across the lobby and announcing him to nobody, *ladies and gentlemen, Mark Lee, a man who has never once been the problem at a party.*" },
        { s: 'mark', f: 'neutral', t: "Thanks, man. I think." },
        { n: "He laughed at it too, on time, from the far end of the sofa, the end furthest from Solar, and she noticed that without knowing she'd noticed it." }
      ] },
      { n: "It was, for twenty minutes, a party. A small one, a strange one, a party with one tinny speaker and a desk lady and a girl filming the paper chains, but Jaemin moved through it like it was three hundred people, a hand on a shoulder here, a cracker put into a palm there, and it was working, the way a song works in a room before anybody admits they like it, until the elevator went *ding.*" },
      { n: "Jaehyun stepped out of it in a gray sweatshirt and socks, with a book under his arm and his reading face on, the face of a man who'd come down to the lobby for the quiet, and stopped." },
      { n: "Jaemin's cup went behind his back. It was oolong. It went behind his back anyway, by itself, the way a hand goes up to block a ball, a reflex older than this world." },
      { s: 'jaehyun', f: 'serious', t: "What is this?" },
      { choose: [
        { t: "It's a study group.", notes: 3, flag: { 'jaemin-covered': true }, then: [
          { n: "It came out of her easy and level and pleasant, the right length, the right tone, the faintest note of surprise that anyone would ask, and it was so good that for a second she heard it from outside, the way you hear your own voice played back on a voicemail, and didn't entirely like who'd said it." },
          { n: "Jaehyun looked at the paper chains. At the speaker. At the desk lady, who raised her oolong to him." },
          { s: 'jaehyun', f: 'neutral', t: "Then study." }
        ] },
        { t: "(Let Jaemin answer.)", notes: 2, then: [
          { s: 'jaemin', f: 'flustered', t: "It's a... wellness circle. Mental. Wellness. For the house. The guesthouse. We're very well." },
          { s: 'jaehyun', f: 'neutral', t: "Then be well." }
        ] },
        { t: "It's a party, Jae.", notes: 2, then: [
          { s: 'jaehyun', f: 'neutral', t: "I can see that." },
          { s: 'jaehyun', f: 'neutral', t: "It's a quarter past nine." },
          { n: "Jaemin made a sound like a balloon being let go of very slowly." }
        ] }
      ] },
      { n: "And then Jaehyun Lee did a thing that nobody in the lobby, possibly nobody in two worlds, had ever seen him do. He walked over to the sofa, sat down on the end of it, took a paper cup of oolong from the table, opened his book, and stayed." },
      { n: "For forty minutes the first ever Kirijo Guesthouse Social was the quietest party in the history of the Social Chair. Chenle read the speaker's instruction manual. Minji filmed the back of Jaehyun's head, which, she said under her breath, had good light on it. Jaemin sat very straight in an armchair across from his president with his hands on his knees like a boy outside the principal's office, and didn't touch the volume, and didn't stand on anything." },
      { n: "At ten Jaehyun closed his book, finished his tea, put the cup in the bin, and stood." },
      { s: 'jaehyun', f: 'neutral', t: "Goodnight." },
      { s: 'jaehyun', f: 'happy', t: "Na. The music was fine." },
      { n: "The elevator took him. The doors closed. Jaemin stayed exactly where he was until the little light above them had climbed all the way to three, and then slid down the armchair, slowly, until he was mostly on the floor." },
      { s: 'jaemin', f: 'surprised', t: "He said the music was fine." },
      { s: 'jaemin', f: 'surprised', t: "Jaehyun Lee said *the music was fine.* To me. On purpose. Minji, did you get that? Tell me you got that." },
      { s: 'minji', f: 'neutral', t: "I got the back of his head." },
      { choose: [
        { t: "It was a party. A real one.", notes: 3, then: [
          { s: 'jaemin', f: 'happy', t: "It was a PARTY. It had a guest of honor. It had a president. It had a *grandmother.*" },
          { n: "He said it from the floor, to the ceiling, glowing, the way some people glow after a game they won by one point." }
        ] },
        { t: "It was a study group. I was there.", notes: 2, then: [
          { s: 'jaemin', f: 'happy', t: "It was the best study group I've ever been to. I learned so much. I learned that he has *socks.*" }
        ] },
        { t: "Does he ever come to them? At home?", notes: 2, then: [
          { s: 'jaemin', f: 'neutral', t: "God, no. At home they happen *because* he's not there. That's the whole—" },
          { n: "He stopped, and looked at the elevator, and at the paper cup in the bin with the president's tea gone out of it, and didn't finish, and didn't need to." }
        ] }
      ] }
    ] },

    { after: '12/4', title: '3: an hour nobody else gets', place: 'Iwatodai Dorm · Lounge', time: 'Evening', music: 'joy', scene: [
      { n: "Jaemin had come to the dorm with a notebook. A real one, spiral, bought from the stationery shop on the Strip, and he sat at the end of the lounge table with it open and a pen behind his ear, like a journalist, and had been interviewing Fuuka about the Dark Hour for twenty minutes before Solar came down the stairs." },
      { s: 'fuuka', f: 'neutral', t: "...and the clocks stop, and the streetlights, and everyone who's from here goes into the coffins. They don't know. They don't feel anything. It's like a skip in a record." },
      { s: 'jaemin', f: 'serious', t: "An hour. An extra hour. Every night. That nobody else gets." },
      { s: 'fuuka', f: 'neutral', t: "...Yes?" },
      { s: 'jaemin', f: 'happy', t: "Fuuka. Do you know how many parties I've thrown that wanted that? *Every party.* Every party ever thrown has wanted one more hour at the end that nobody else gets. And this city just *has* one. Every night. For free." },
      { s: 'junpei', f: 'happy', t: "DUDE. A Dark Hour party. A party at midnight in the green. Nobody can call the cops because the cops are in coffins." },
      { s: 'jaemin', f: 'happy', t: "Junpei. Junpei, you're getting it. You're *getting* it." },
      { n: "Hanni was at the other end of the table with a cup of tea she'd made for nobody in particular, and she put it down with the very gentle click of a girl who had heard a proposal at a chapter meeting and was about to raise her hand." },
      { s: 'hanni', f: 'neutral', t: "Jaemin. Did you ever look at the transport spreadsheet? For the trip? Ours and yours? I sent it to you twice." },
      { s: 'jaemin', f: 'neutral', t: "I looked at it emotionally." },
      { s: 'hanni', f: 'serious', t: "That's not a way to look at a—" },
      { n: "She stopped. Something went across her face, a long gray road and a van where nobody was talking, and she looked down into her tea." },
      { s: 'jaemin', f: 'happy', t: "It's the only way I look at anything, Hanni. You know this. You've known this all semester." },
      { n: "He'd covered it without looking up, the way you'd catch somebody's elbow on a stair, and she let him. They had done this before. It was strange to watch, two people who'd clearly done this a hundred times, across a table at home, across a lawn, through a group chat with too many people in it, the Social Chair and the Social Chair, warm and exasperated and completely fluent in each other, while Solar stood at the bottom of the stairs in a city where neither of their titles meant anything, and only hers did." },
      { s: 'jaemin', f: 'neutral', t: "Okay. Expert opinion. Solar Lee. A party in the Dark Hour. Yes or yes." },
      { s: 'fuuka', f: 'sad', t: "...She's usually not here for it." },
      { n: "Jaemin looked at Fuuka. Then at Solar. Then, slowly, at the long case leaning against the wall by the stairs, where it always leaned, the one with the naginata in it, which he had walked past three times this evening and had decided, apparently, was a decoration." },
      { s: 'jaemin', f: 'neutral', t: "Where is she, then?" },
      { choose: [
        { t: "In the tower. Most nights. I'm good at it.", notes: 3, flag: { 'jaemin-told': true }, then: [
          { n: "She said it plainly, the way she'd have said she had a shift somewhere, and the lounge didn't do anything about it, because the lounge already knew. Only Jaemin did something. He didn't move, which for him was doing something." },
          { s: 'jaemin', f: 'neutral', t: "You're good at it." },
          { s: 'jaemin', f: 'neutral', t: "Of course you're good at it. You're good at everything you hate. It's your whole—" },
          { n: "He stopped, and put the pen back behind his ear, and looked at the naginata case for a long time, like a man who'd been told the price of something after he'd already said he'd buy it." }
        ] },
        { t: "It's mostly stairs.", notes: 2, then: [
          { s: 'junpei', f: 'surprised', t: "It is NOT mostly stairs—" },
          { n: "Hanni put a rice cracker in Junpei's mouth without looking at him. Jaemin looked from Junpei to Hanni to Solar, and read the room, the way he read every room he'd ever been in, and she watched him decide not to push, and file it, and smile." },
          { s: 'jaemin', f: 'neutral', t: "Stairs. Okay. Great cardio. Love that for you." }
        ] },
        { t: "(Let Fuuka explain it.)", notes: 1, then: [
          { s: 'fuuka', f: 'neutral', t: "She leads us. In Tartarus. The tower. There are... things in it. She goes in front." },
          { n: "Fuuka said it gently and accurately, the way she said everything, and Jaemin's face did something Solar had only seen it do once before, through a round window, for about a second." }
        ] }
      ] },
      { s: 'jaemin', f: 'serious', t: "Okay. New rule. Social Chair's ruling. No party in the monster hour." },
      { s: 'junpei', f: 'sad', t: "Aw, what? Come on—" },
      { s: 'jaemin', f: 'neutral', t: "No. The extra hour's taken. It's hers. She's using it." },
      { n: "Junpei looked so crushed that Jaemin reached across the table and took the cap off his head and put it back on him, crooked, like an older brother at a bus stop." },
      { s: 'jaemin', f: 'happy', t: "But. Every social chair needs a protégé. Somebody to carry the vision. And I'm looking at a man who wanted to throw a party in a haunted hour for no money. That's vision, Junpei. That's raw talent." },
      { s: 'junpei', f: 'happy', t: "Does it pay?" },
      { s: 'jaemin', f: 'neutral', t: "In experience. And snacks." },
      { choose: [
        { t: "Junpei would make a great apprentice.", notes: 2, then: [
          { s: 'junpei', f: 'happy', t: "See? SEE? The leader believes in me." },
          { s: 'hanni', f: 'happy', t: "I believe in you too, Junpei! Please don't use the fire extinguishers." }
        ] },
        { t: "Junpei would burn the building down.", notes: 3, then: [
          { s: 'junpei', f: 'flustered', t: "Hey! One time! One small time!" },
          { n: "Mitsuru appeared in the doorway from the kitchen as if she'd been summoned by the word *building,* looked at the notebook, the apprentice, the visitor, and the clock over the television." },
          { s: 'mitsuru', f: 'neutral', t: "He would. Na, it's seven fifty-five." },
          { s: 'jaemin', f: 'surprised', t: "She knows my name. Solar, she knows my *name.*" }
        ] }
      ] },
      { n: "He left at seven fifty-nine, which Mitsuru noted without comment, shoes on in the front hall, notebook under his arm, and at the door he turned round, not with the grin, with something more ordinary than the grin, a boy checking he had his keys." },
      { s: 'jaemin', f: 'neutral', t: "Text me when you're back. From the tower. Doesn't matter what time." },
      { s: 'jaemin', f: 'happy', t: "I like to know who got home. Occupational." },
      { n: "Then the door shut on him, and she heard him on the path outside, already talking to someone, the bus stop or the moon or nobody, and the sound of him went down the street toward the station and the guesthouse and took a while to stop." }
    ] },

    { after: '12/9', title: "4: what's up with him", place: 'Paulownia Mall · Karaoke', time: 'Evening', music: 'night', scene: [
      { n: "The mic was off. That was the first thing. Jaemin was in the biggest booth with the screen on and the lights low and the songbook shut, sitting in the middle of the long couch with two melon sodas sweating on the table in front of him, and the mirror ball was turning on its own with nobody standing under it, throwing small slow lights across the empty wall like a lighthouse with nothing to warn." },
      { n: "Chenle wasn't there. Chenle had gone to Game Panic, Jaemin said, to *see if the cabinets respect him,* and wouldn't be back, and the booth felt larger without him, the way a room does when the person who wasn't saying anything leaves it." },
      { s: 'jaemin', f: 'neutral', t: "Can I ask you something? And you don't do the face." },
      { s: 'solar', f: 'neutral', t: "What face?" },
      { s: 'jaemin', f: 'neutral', t: "That one. The polite one. The one Jaehyun does at dinners. You've got the same one. It's genetic." },
      { n: "She hadn't known she was doing it. She stopped. He watched her stop, the way he watched everything, without seeming to, and slid the second soda an inch toward her side of the table." },
      { s: 'jaemin', f: 'neutral', t: "So. What's up with Haechan?" },
      { n: "It wasn't the way he said everything else. It was flat and straight and a little tired, a question he'd clearly asked before, somewhere else, in a kitchen, to people who'd shrugged." },
      { s: 'jaemin', f: 'neutral', t: "Junpei says he ran up the tower. On his own. The whole thing. Haechan doesn't run. Haechan wouldn't run for a bus with his whole life on it. He'd watch it leave and say *there'll be another one.*" },
      { s: 'jaemin', f: 'serious', t: "And at home something happened. Up there, on the trip. With you two. Nobody'll tell me what. He's been weird since. Not weird-weird. Weird for him. He doesn't talk to anybody. He never talked to anybody. But he used to not-talk to them in the same room." },
      { s: 'jaemin', f: 'neutral', t: "And here he lives in your building." },
      { n: "He said the last part to his soda. Not teasing. Not quite. A fact laid on the table next to the others, for her to pick up or not." },
      { choose: [
        { t: "I don't know.", notes: 2, then: [
          { n: "It was the truth, or most of it, and she said it to the table, and he looked at her not-knowing for a second longer than the answer needed, the way you'd look at a card someone had played face down." },
          { s: 'jaemin', f: 'neutral', t: "Okay." },
          { n: "He said it lightly. But she saw him take it, whatever it was, and put it somewhere in himself, carefully, like a receipt he'd want later, and say nothing else about it out loud." }
        ] },
        { t: "Why are you asking me?", notes: 3, then: [
          { s: 'jaemin', f: 'neutral', t: "Because I asked him. On the dorm steps, the other day. And he said *don't.* And he's said *don't* to me about four hundred times, about everything, but this one was different." },
          { s: 'jaemin', f: 'neutral', t: "So I'm going down the list." },
          { s: 'solar', f: 'neutral', t: "And I'm next on the list?" },
          { n: "He didn't answer that. He looked at her a beat too long, and then at the turning mirror ball, and let the not-answering stand there between them like a third person in the booth." }
        ] },
        { t: "(Say nothing. Drink the soda.)", notes: 2, then: [
          { n: "She drank the soda. It was too sweet and very green and she drank a third of it in one go, and he watched her do it, and nodded once, slowly, as if she'd said something, and he'd heard it, and was choosing not to repeat it back." }
        ] }
      ] },
      { s: 'jaemin', f: 'neutral', t: "I'm not going to make it a thing. I'm just—" },
      { n: "He turned the soda can in a slow circle on the table, a full turn, the label coming back round." },
      { s: 'jaemin', f: 'serious', t: "Everybody thinks I came for you. I came for two people. He's my brother. Not like a real one. The kind where you don't get to pick, and you don't get to put him back." },
      { choose: [
        { t: "Have you told him that?", notes: 3, then: [
          { s: 'jaemin', f: 'surprised', t: "God, no. He'd move to the top floor of the tower. He'd ask the monsters for a room." },
          { s: 'jaemin', f: 'happy', t: "No. You don't say it to him. You just keep turning up. That's the system. I turn up, he says *don't,* I turn up again. It's very healthy." }
        ] },
        { t: "He's okay. I think.", notes: 2, then: [
          { s: 'jaemin', f: 'neutral', t: "You think." },
          { s: 'solar', f: 'neutral', t: "I think." },
          { s: 'jaemin', f: 'neutral', t: "...Okay. That's more than I had when I walked in." }
        ] }
      ] },
      { n: "They came out of the booth at a quarter to eleven into the mall's last half hour, the shutters coming down on the shop fronts one by one, and there was someone leaning on the rail by the escalator in a hood, with one pink can from the machine downstairs, unopened, held loosely in one hand." },
      { s: 'jaemin', f: 'happy', t: "Haechannie." },
      { s: 'haechan', f: 'neutral', t: "Do not." },
      { s: 'haechan', f: 'neutral', t: "Mitsuru says eleven. She said someone should make sure." },
      { n: "Jaemin looked at Haechan. At the hood, the rail, the stairs he'd come up, the very specific casualness of a person who had been sent. Then, for one long second, at the single can." },
      { n: "He said nothing at all. It was, Solar thought, the loudest he'd been all night." },
      { s: 'jaemin', f: 'happy', t: "Get home safe, kids. Eleven. Mitsuru says." },
      { n: "He walked off backward toward the far escalator, waving with both hands like someone seeing off a ship, and turned around at the top of it and went down out of sight, and didn't look back. Solar was almost sure he didn't look back. Beside her the can changed hands, and nobody said anything about that either." }
    ] },

    { after: '12/16', title: '5: cups', place: 'Paulownia Mall · Karaoke', time: 'Night', music: 'tender', scene: [
      { n: "He'd done it. A party. A real one, in the biggest booth, with a guest list he'd written out on the back of a takeout menu and stuck to the door with tape, and for two hours it had been the loudest room in Paulownia Mall." },
      { n: "Hyein had sung three songs, all of them about men who didn't deserve the singer, all of them at a volume the clerk had come to the window about twice. Hanni had harmonized on everything, including things that didn't need harmony. Minji had filmed the ceiling, because the mirror ball was doing something to the light she said she'd never get again, and asked everyone before she pointed the camera anywhere near them. Junpei, the apprentice, had run the tambourines like an air-traffic controller. Chenle had kept score, out loud, on a system nobody else understood, and declared Hanni the winner on *pitch* and Hyein the winner on *commitment,* and refused to explain the difference." },
      { n: "Jaemin had not sung once. He'd moved. A hand on a back, a cup refilled before it was empty, a song queued for whoever had gone quiet, the right joke dropped into the gap where a silence had started to form, and Solar had watched him do it for two hours and not once seen him stand still." },
      { n: "Then it was half nine, and the girls had to get back, and Minji had an early start, and Junpei had a curfew he'd never once kept but was suddenly very keen on, and Chenle simply stood up at nine thirty-one, exactly, said *good night,* and left, and the booth emptied all at once, the way a room does, down to a disco ball and the two of them." },
      { ifFlag: 'jaemin-told', then: [
        { s: 'jaemin', f: 'neutral', t: "You going in tonight? The tower?" },
        { s: 'solar', f: 'neutral', t: "Not tonight." },
        { s: 'jaemin', f: 'neutral', t: "Good." },
        { n: "He said it to the table, quickly, the way you'd say something you hadn't meant to say out loud, and then reached for a cup to cover it." }
      ], else: [
        { s: 'jaemin', f: 'neutral', t: "You going home? Up the stairs? Your mostly-stairs?" },
        { s: 'solar', f: 'neutral', t: "In a minute." },
        { n: "He nodded like that was an answer to a different question, and reached for a cup." }
      ] },
      { n: "There were cups everywhere. Paper ones, stacked and crushed and abandoned on every surface, one wedged in the mirror ball's mount, two inside the tambourine. He'd taken a garbage bag from somewhere, a big black one, and started going round the room with it, slowly, picking them up one at a time and looking at each before it went in." },
      { choose: [
        { t: "(Get another bag. Help.)", notes: 3, flag: { 'jaemin-cups': true }, then: [
          { n: "She found a second bag under the clerk's desk and came back and took the other side of the room without saying anything, and he glanced up when she started, and then didn't look up again, and for a while there was just the rustle of plastic and the soft hollow sound of paper cups going in." }
        ] },
        { t: "You don't have to clean. The clerk will.", notes: 2, then: [
          { s: 'jaemin', f: 'neutral', t: "The clerk has a family. I've decided. He has a family and a long commute and a bad knee. I'm not leaving him a cup in a mirror ball." },
          { n: "He kept going. She sat on the arm of the couch and watched him, and after a while it stopped looking like a chore and started looking like something else, like a man walking the edge of a field at the end of the day, counting." }
        ] },
        { t: "(Sit on the couch. Watch him do it.)", notes: 1, then: [
          { n: "She sat. He didn't seem to mind. He went round the room the way you'd go round a house after the guests leave, slowly, not hurrying, as if the cups were the part he'd been waiting for all night." }
        ] }
      ] },
      { s: 'jaemin', f: 'neutral', t: "You can tell everything from cups. You know that? At the end of a party." },
      { s: 'jaemin', f: 'neutral', t: "Who stayed. Who left early and pretended they didn't. Who held one cup all night so nobody would hand them another. Who held none." },
      { n: "He held one up. Hanni's, with a little lipstick on the rim, still half full of the tea she'd been nursing for two hours." },
      { s: 'solar', f: 'neutral', t: "Is that why you throw them?" },
      { n: "He laughed, the quick one, the reflex. Then he didn't say anything for long enough that the mirror ball went all the way round, twice." },
      { s: 'jaemin', f: 'neutral', t: "Thirty guys in one house. Thirty doors. Everybody's got a door they go behind. Jaehyun's got the president door. Renjun's got the porch. Mark's got a door with a keyboard behind it. Haechan's got—" },
      { n: "He stopped, and put the cup in the bag." },
      { s: 'jaemin', f: 'neutral', t: "A party's the only night all thirty doors are open at once. Everybody's in one room. I can see everybody. I can see who's—" },
      { s: 'jaemin', f: 'neutral', t: "Who's having a good time." },
      { n: "It wasn't what he'd been about to say. They both heard the place where the other word should have been, a step missing on a staircase, and he went over it without looking down, the way you do on stairs you've used your whole life." },
      { choose: [
        { t: "Who's okay.", notes: 3, then: [
          { n: "He looked at her. Properly, with nothing turned toward the light, the face before the face, and it was younger than the other one and much more tired, and it lasted about as long as it takes to say a name." },
          { s: 'jaemin', f: 'neutral', t: "...Yeah. That." },
          { s: 'jaemin', f: 'happy', t: "Don't put that on a banner." }
        ] },
        { t: "And who checks on you?", notes: 3, then: [
          { s: 'jaemin', f: 'happy', t: "Nobody. I'm the fun one. The fun one's always fine. That's the whole—" },
          { n: "He heard himself, and stopped, and tied the top of the garbage bag in a careful double knot, like it was the most important knot he'd ever tie." },
          { s: 'jaemin', f: 'neutral', t: "That's the whole job description." }
        ] },
        { t: "(Say nothing. Hand him the cup from the mirror ball.)", notes: 2, then: [
          { n: "She reached up and worked the cup out of the mirror ball's mount and held it out, and he took it, and looked at it, and laughed properly, and the ball turned freely for the first time all night, throwing its light round the empty room, all the way round, catching nobody." }
        ] }
      ] },
      { n: "The clerk flicked the lights at the window, gently, twice. Jaemin stopped the mirror ball by hand, carefully, with one finger, the way you'd stop a record, and the light stopped where it was, a few small squares on the far wall, and the room was just a room again." },
      { s: 'jaemin', f: 'happy', t: "Same time next week. You bring nobody. I'll bring everybody." }
    ] },

    { after: '12/26', title: '6: off the clock', place: 'Naganaki Shrine', time: 'Evening', music: 'joy', scene: [
      { n: "Jaemin had decided to network. That was his word for it. He'd found out, from the desk lady, from Chenle, from the groove worn in the gravel at the foot of the steps, that Jaehyun ran the hundred and twelve stairs at Naganaki every afternoon until the light went, and had concluded that the only way to know a man was to suffer beside him, and had turned up at the shrine in a borrowed tracksuit two sizes too big, holding a sports drink like a ticket." },
      { n: "That had been forty minutes ago. Now Jaehyun was at the top of the steps for the ninth time, not breathing hard, checking his watch, and Jaemin was on step forty-one, sitting, with his forehead against the cold stone of step forty-two, like a man praying at the wrong shrine." },
      { s: 'jaemin', f: 'sad', t: "Solar. Solar, tell my mother I died doing what I loved." },
      { s: 'solar', f: 'neutral', t: "You hate this." },
      { s: 'jaemin', f: 'sad', t: "Tell her I died doing what *he* loved. She'll understand. She's met him." },
      { choose: [
        { t: "(Time Jaehyun's next one. Exactly. Tenths.)", notes: 2, then: [
          { n: "She timed him from the bottom on the stopwatch and read it out with the tenths, and Jaehyun nodded once at the number, like a stock price that had done what he'd expected, and Jaemin, from step forty-one, said he'd never felt further from another human being." }
        ] },
        { t: "(Take Jaemin's arm. Run the last flight with him.)", notes: 3, stat: { courage: 1 }, then: [
          { n: "She hauled him up by the elbow and they did the last seventy-one together, badly, Jaemin narrating every step as a tragedy in three acts, and at the top he lay down flat on the cold stone between the guardian dogs with his arms out like a snow angel, and Jaehyun stepped neatly over him to start his tenth." }
        ] },
        { t: "Jae, he's dying.", notes: 2, then: [
          { s: 'jaehyun', f: 'happy', t: "He's not dying. He's complaining. From up here they look similar." },
          { s: 'jaemin', f: 'surprised', t: "Did he just make a joke? Solar. Was that a joke? I can't see his face, I'm on the floor." }
        ] }
      ] },
      { n: "When the light had gone orange and then gray Jaehyun came down the last flight at a walk and sat on the bottom step, which Solar had never once seen him do, and rolled his shoulder twice, and drank half of Jaemin's sports drink without asking, and handed it back." },
      { ifFlag: 'jaemin-covered', then: [
        { s: 'jaehyun', f: 'neutral', t: "It wasn't a study group." },
        { n: "He said it to the gravel, mildly. Jaemin went the color of the stone." },
        { s: 'jaehyun', f: 'serious', t: "You said it very well, sister. You always did. That's not a compliment, exactly." },
        { n: "It landed somewhere under her collarbone, small and cold, the feeling of being caught at something she hadn't known was a thing you could be caught at, and she didn't answer, and he didn't seem to need her to." }
      ], else: [
        { s: 'jaehyun', f: 'neutral', t: "That party. In the lobby. With the chains." },
        { n: "Jaemin went the color of the stone." },
        { s: 'jaehyun', f: 'neutral', t: "The desk lady talks about it every morning. She tells me about it while I'm eating. In great detail. I understand none of it. I know it was the chains." }
      ] },
      { s: 'jaehyun', f: 'neutral', t: "Na. Before March. Before anyone goes anywhere. Something at the guesthouse. For everyone who's there. A dinner, with music. Not too loud." },
      { s: 'jaemin', f: 'surprised', t: "...Jaehyun. That's a party." },
      { s: 'jaehyun', f: 'happy', t: "Then it's a party." },
      { s: 'jaehyun', f: 'neutral', t: "Please." },
      { n: "He stood, and nodded to both of them, and went off down the shrine path toward the street lamps with his hands in his jacket pockets, an ordinary tall boy walking home in the cold, and Jaemin sat on the bottom step with the sports drink in both hands and watched him the whole way, the way you'd watch a horse you'd been sure couldn't jump do it." },
      { choose: [
        { t: "He asked you for a party.", notes: 3, then: [
          { s: 'jaemin', f: 'surprised', t: "He said please. Did you hear that? *Please.* To me. Jaehyun Lee said please to the Social Chair." },
          { s: 'jaemin', f: 'happy', t: "I'm going to throw him the best party anyone's ever thrown a man who doesn't like parties. It's going to be so quiet. It's going to be the loudest quiet party in history." }
        ] },
        { t: "What's he like at home? When he isn't being president?", notes: 2, then: [
          { s: 'jaemin', f: 'neutral', t: "I don't know. I've never seen it. I thought he came out of the box like that. Gelled." },
          { s: 'jaemin', f: 'neutral', t: "At home I only ever see him when I'm in trouble. Or the house is. He comes through a door and everybody stands up straighter, and then he goes back through it." },
          { s: 'jaemin', f: 'neutral', t: "...He sat on a step. I didn't know he sat." }
        ] }
      ] }
    ] },

    { after: '12/30', title: '7: festive, not ugly festive', place: 'Kirijo Guesthouse', time: 'Evening', music: 'joy', scene: [
      { n: "Hyein had finished it. That was the news, delivered by text at nine in the morning in capitals and four separate messages, and by evening she had taken over the guesthouse lobby with a sewing kit, a pincushion shaped like a tomato and the commission itself on a hanger, and had made Jaemin stand on a chair by the potted palm, which he was very good at." },
      { ifBefore: '1/1', then: [
        { s: 'hyein', f: 'serious', t: "It's a December piece. It gets worn in December. We have, what, two days left of December? I'm working to deadline. Don't breathe." }
      ], else: [
        { s: 'hyein', f: 'serious', t: "It's a December piece. It's January. We're pretending. Somewhere it's still December. At home it's still *that night,* so technically I'm early. Don't breathe." }
      ] },
      { n: "It was a jacket. Deep green, close to black until the light came across it, with a lining that flashed red when he moved, and small gold buttons she'd found God knew where, and it was festive, and it was not ugly festive, and he did not look like a department store. He looked like the best-dressed person at a party in a black-and-white film, the one everyone in the room kept glancing at to see if he'd noticed them." },
      { s: 'jaemin', f: 'surprised', t: "Hyein." },
      { s: 'hyein', f: 'neutral', t: "Don't." },
      { s: 'jaemin', f: 'surprised', t: "*Hyein.*" },
      { s: 'hyein', f: 'flustered', t: "Don't say anything nice, I'll stab you, I've got pins in my mouth." },
      { choose: [
        { t: "You look like you.", notes: 3, then: [
          { s: 'jaemin', f: 'neutral', t: "...Is that nice? I genuinely can't tell if that's nice." },
          { s: 'hyein', f: 'neutral', t: "It's nice. It's the nicest thing she says. She said it to me once about a skirt and I thought about it for a week." }
        ] },
        { t: "You look expensive.", notes: 2, then: [
          { s: 'jaemin', f: 'happy', t: "I *am* expensive. Hyein, tell her what I paid." },
          { s: 'hyein', f: 'happy', t: "Full price. No friend discount. He called my wings a hazard." }
        ] },
        { t: "Turn left. That's your side.", notes: 2, then: [
          { s: 'jaemin', f: 'neutral', t: "I know my side, Solar Lee." },
          { s: 'hyein', f: 'neutral', t: "He does. He knows his side. It's disgusting. Turn left, Jaemin, the hem's off on the right." }
        ] }
      ] },
      { n: "When she finally let him down off the chair, he took an envelope out of the inside pocket of his own coat, the old one, flat and soft at the corners from being carried, and held it out to her with no pitch on it at all. *DEPOSIT,* it said, in his capitals. And under it, smaller, *(late).*" },
      { s: 'hyein', f: 'surprised', t: "...This is yen." },
      { s: 'jaemin', f: 'neutral', t: "Exchange rate's on the back. I did the math. Chenle checked it. Businesswoman. I respect it." },
      { n: "Hyein looked at the envelope for a long time, and then put it in her pincushion pocket without counting it, which Solar had never once seen her do with money, and went back to the hem with her ears gone pink." },
      { ifEvent: 'a4-light-on', then: [
        { n: "Danielle was in the armchair by the window. She had been there when they arrived, Solar was fairly sure, though she couldn't have said when she'd first noticed her, with a folder open on her knee and a highlighter laid parallel to the edge of the page, and a coffee she wasn't drinking, and her posture perfect, the posture of a girl who'd been at the front desk of her own life since seven in the morning." },
        { s: 'jaemin', f: 'neutral', t: "Danielle. Danielle, back me up. That account. The SUnews thing. Whoever runs it needs a hobby. Or a therapist. Or a *hobby.*" },
        { s: 'danielle', f: 'neutral', t: "People do love to talk." },
        { s: 'jaemin', f: 'serious', t: "I commented. You know that? I never comment. I'm a *like* guy. I like things. I commented. I said take it down." },
        { s: 'danielle', f: 'happy', t: "I saw. It was very sincere, Jaemin. It really stood out." },
        { s: 'jaemin', f: 'happy', t: "Thank you! See? Danielle gets it." },
        { n: "Hyein made a small sound, round a mouthful of pins. It might have been *ow.* She bent very close to the hem, so that her hair hid her face, and her shoulders went up round her ears, and stayed there." },
        { n: "Danielle turned a page. She smiled at the folder, pleasantly, the way you'd smile at a forecast that had come out exactly as you'd predicted, and Solar watched the smile and felt something at the back of her neck she didn't have a word for, the small cold prickle of a room in which everyone else knew the time." },
        { s: 'danielle', f: 'neutral', t: "It's a small world, wherever you go. You'd be surprised what travels." },
        { n: "She closed the folder with a neat soft click, stood, said she'd let them get back to it, and that the jacket was lovely, Hyein, really, and that Solar should tell Jaehyun she'd said hello, if she saw him first, and was in the elevator before anyone had decided what to say back." },
        { s: 'jaemin', f: 'happy', t: "She's so nice. Is she always that nice? I wouldn't know. You don't put the treasurer on the Friday list." },
        { s: 'hyein', f: 'neutral', t: "Stand *still,* Jaemin." }
      ], else: [
        { s: 'jaemin', f: 'neutral', t: "You know what I miss? I don't miss it. I hate it. That account. The SUnews thing. Whoever runs it needs a hobby. Or a therapist. Or a *hobby.*" },
        { s: 'jaemin', f: 'serious', t: "I commented that night. I never comment. I'm a *like* guy. I said take it down. Nobody ever takes it down." },
        { n: "Hyein's hand slipped. The pin went in somewhere around his ribs, through the lining, not deep, and he yelped and nearly came off the chair." },
        { s: 'hyein', f: 'neutral', t: "Sorry. Slipped." },
        { n: "She didn't look sorry. She looked at the hem, very hard, with her shoulders up round her ears, and didn't look at Solar at all, which Solar noticed, and put away, and didn't ask about, because it was the kind of not-looking that had a door behind it." }
      ] },
      { choose: [
        { t: "(Hold the pins for Hyein.)", notes: 3, stat: { proficiency: 1 }, then: [
          { n: "Hyein held the tomato up over her shoulder without looking and Solar took it, and passed the pins one at a time into the hand that came back for them, the right size every time without being told which, and Hyein said *thank you* after the sixth one in a voice that was nearly normal again." }
        ] },
        { t: "Hyein. What was that, just now?", notes: 2, then: [
          { s: 'hyein', f: 'neutral', t: "A pin. It was a pin, Sol." },
          { s: 'hyein', f: 'neutral', t: "Hold *still,* Jaemin." },
          { n: "She said it to the hem, and Solar let it go, the way you let go of a rope you can tell someone else is holding on the other end." }
        ] }
      ] },
      { n: "When it was done he stood on the chair in the middle of the guesthouse lobby in a December jacket, turning slowly for the desk lady, who applauded, and for Hyein, who didn't, who just sat back on her heels on the rug and looked at what she'd made with her whole face, all of it, nothing arranged." },
      { s: 'jaemin', f: 'happy', t: "Businesswoman. I respect it." },
      { s: 'hyein', f: 'happy', t: "Pay the second half by Friday, my lord." }
    ] },

    { after: '1/9', title: '8: take eleven', place: 'Iwatodai · Riverside', time: 'Evening', music: 'tender', scene: [
      { n: "Minji had offered to film him. Not him, she said. A message. For the house, at home, a toast, the kind he'd give at the end of the year if it were the end of the year and they were all in one room, so that when he went home, whenever that was, if it was, he'd have it, and could show them, or not." },
      { n: "It wouldn't send. Nothing sent. Everybody knew that. Minji had said it anyway, carefully, the way she said everything about the camera, *I'll only roll when you say,* and Jaemin had said yes before she'd finished asking, and they'd walked down to the river at the hour when the light went gold and flat across the water, and Chenle had come too, uninvited, with a stopwatch app open, to count." },
      { s: 'chenle', f: 'neutral', t: "Take nine." },
      { s: 'jaemin', f: 'happy', t: "Sigma Chi! The greatest house on the hill, the greatest *men* on the hill, I'm speaking to you from another *dimension—*" },
      { s: 'minji', f: 'neutral', t: "Cut." },
      { s: 'minji', f: 'neutral', t: "Again. Without the angle." },
      { s: 'jaemin', f: 'flustered', t: "There's no angle! I'm not doing an angle! This is just my face!" },
      { s: 'chenle', f: 'neutral', t: "He's done the angle nine times. I'm counting the angle separately." },
      { ifFlag: 'jaemin-refund', then: [
        { s: 'jaemin', f: 'neutral', t: "You asked me for the version without the pitch. In the booth. In November. You remember that? I've been looking for it for two months." },
        { s: 'jaemin', f: 'neutral', t: "Turns out I don't stock it." }
      ], else: [
        { s: 'chenle', f: 'neutral', t: "He hasn't done one without a bit since he was nine." },
        { s: 'jaemin', f: 'neutral', t: "You didn't know me when I was nine." },
        { s: 'chenle', f: 'happy', t: "I can tell." }
      ] },
      { choose: [
        { t: "Say it to me. Not the camera.", notes: 3, flag: { 'jaemin-plain': true }, then: [
          { n: "She stepped round to stand just to the side of Minji's lens, close enough that he'd be looking almost into it if he looked at her, and he looked at her, and something in his shoulders came down an inch, like a coat taken off a hook." },
          { s: 'minji', f: 'neutral', t: "Rolling. Whenever." }
        ] },
        { t: "Do the accent. Get it out of your system.", notes: 2, then: [
          { n: "He did the accent. The worst one, the Halloween one, a whole toast in it, to Jeno and the keg and the house and the hill, and Minji laughed behind the camera, which she never did, and Chenle said *that's ten* in a voice that was almost fond, and when it was out of him, all of it, he stood there in the gold light, emptied, and was quiet." },
          { s: 'minji', f: 'neutral', t: "Rolling. Whenever." }
        ] },
        { t: "(Sit on the bank. Wait.)", notes: 2, then: [
          { n: "She sat on the cold grass of the bank and didn't say anything, and after a minute Minji sat too, with the camera on her knee, still rolling, pointed at nothing in particular, and Chenle sat, and Jaemin stood alone with no one in front of him to perform at, three people sitting in the grass looking at the river, and then he sat too." },
          { s: 'minji', f: 'neutral', t: "Rolling. Whenever." }
        ] }
      ] },
      { n: "He didn't stand on anything. He didn't turn his face. He held a paper cup of vending-machine tea that had gone cold an hour ago, and started, and stopped, and started again." },
      { s: 'jaemin', f: 'neutral', t: "To the house." },
      { s: 'jaemin', f: 'neutral', t: "Jeno. You idiot. I'm somewhere you'd love and I can't tell you about it. Renjun. Keep scaring people, it's good for them. Jisung, go to class. Johnny. Yuta. Thanks for the money, Yuta." },
      { s: 'jaemin', f: 'neutral', t: "Mark, be less—" },
      { n: "He stalled on that one too, half a second, a missed step you'd only hear if you were listening for it, and went on past it like he'd meant to." },
      { s: 'jaemin', f: 'neutral', t: "...Be less boring. Haechan—" },
      { n: "He stopped. The river went by. Somewhere upstream a train crossed the bridge, all its windows lit, and he watched it all the way across." },
      { s: 'jaemin', f: 'neutral', t: "Just come downstairs sometimes." },
      { s: 'jaemin', f: 'neutral', t: "And Jaehyun. Thanks for the please." },
      { n: "Then he laughed, at himself, quietly, not for anybody, and lifted the cold tea an inch, and drank it, and made a face at how cold it was, and that was the end of it." },
      { s: 'minji', f: 'neutral', t: "That one." },
      { s: 'chenle', f: 'neutral', t: "Take eleven." },
      { choose: [
        { t: "Who's it for? It won't send.", notes: 2, then: [
          { s: 'jaemin', f: 'neutral', t: "Me. At home. When I get back, if I get back. So I remember what I sound like when I'm not selling something." },
          { s: 'jaemin', f: 'happy', t: "Apparently I sound like a guy with cold tea. Who knew." }
        ] },
        { t: "Can I be in the next one?", notes: 3, then: [
          { n: "Minji turned the camera round without a word, and asked with her eyebrows, and Solar nodded, and stood in the gold light with the river behind her, and didn't know what to say to a house full of people she couldn't remember, and said it anyway." },
          { s: 'solar', f: 'flustered', t: "Hi. I'm told I've been to your parties. I'm told they were good. Please look after him." },
          { s: 'jaemin', f: 'surprised', t: "...Minji. Minji, keep that one. Put it first." },
          { s: 'chenle', f: 'neutral', t: "Take twelve." }
        ] }
      ] }
    ] },

    { after: '1/16', title: '9: the packing list', place: 'Kirijo Guesthouse', time: 'Evening', music: 'joy', scene: [
      { n: "Jaemin was rewriting the trip. Not the one that had happened. The file for that was in another world, and he said he didn't want it anyway. This was the other one, from memory, in the spiral notebook, at the low glass table in the guesthouse lobby, every cabin and every van and every hour, the version where nothing went wrong, the one he'd run again, and it was, he said, the third time he'd done it since he arrived, and every time it came out longer." },
      { s: 'jaemin', f: 'neutral', t: "Here's the thing nobody understands. At home the trip's done. It happened. Something blew up up there, on the Saturday, and nobody'll tell me what, and the ride home was the quietest four hours of my life. So I've been running it again. In my head. For two months. I've *optimized* it." },
      { n: "He turned the notebook round. Four days in the woods, the cabins numbered, a rota for the cooking that no one at home had agreed to, a service project in small letters at the bottom of a page, *service retreat,* underlined twice, and beside it, smaller, *(official),* and beside that, smaller still, *no service. at the site. none. tell everyone. they didn't listen.*" },
      { n: "And the packing list. A long one. Sleeping bag. Flashlight. Two of everything that could get wet. *EMERGENCY SPEAKER* in capitals with a box drawn round it. And, at the bottom, in a different pen, in small round letters she somehow knew, *first aid kit,* underlined twice, with a little sad face next to it." },
      { s: 'jaemin', f: 'neutral', t: "Hanni did that. Last week. In the dorm. She took my pen out of my hand, wrote it in, gave the pen back, and went upstairs. Didn't say a word. The sad face is aimed at me. Personally." },
      { s: 'jaemin', f: 'sad', t: "It's a grade. On the real one. There wasn't a kit. Somebody cut their hand on the Friday and we used a sock." },
      { ifEvent: 'a4-mark', then: [
        { n: "Mark was on the lobby sofa with a guitar he'd borrowed from somebody and wasn't really playing, tuning and retuning one string, and he'd been laughing in the right places all evening, a little too easily, the way he did when there was something in the room he wasn't sure about and had decided to be relaxed at it." },
        { s: 'jaemin', f: 'happy', t: "And Mark Lee. Judge of Disputes. He was, the whole trip. Because he's famously boring. It's a compliment, man. People trust—" },
        { n: "He heard it go wrong halfway, the way you hear a glass start to tip on a table, and looked at the page instead of the sofa." },
        { s: 'jaemin', f: 'neutral', t: "...Bad casting, maybe. In this one I'm doing it myself." },
        { s: 'mark', f: 'flustered', t: "Ha. Yeah. No. That's— yeah. Fair." },
        { n: "He rubbed the back of his neck and tuned the string again, which was already in tune." }
      ], else: [
        { s: 'jaemin', f: 'neutral', t: "Mark was Judge of Disputes. Famously boring. It's a compliment. He dressed like a substitute teacher on Halloween. People trust that." },
        { s: 'jaemin', f: 'neutral', t: "...Mostly. Bad casting, maybe. In this one I'm doing it myself." },
        { s: 'jaemin', f: 'neutral', t: "Bodyguard Mark Lee. He's back there. Being boring. Professionally." }
      ] },
      { s: 'jaemin', f: 'neutral', t: "You're Alpha. You're on it. Look." },
      { n: "He put his finger under a line. A cabin number, and four names, and one of them hers, *SOLAR LEE,* in his capitals, with nothing next to it, no note, no joke, which was the strangest thing on the whole page, from a boy who could caption anything." },
      { choose: [
        { t: "Which cabin was I in?", notes: 3, then: [
          { s: 'jaemin', f: 'neutral', t: "With your girls. Hanni wanted to swap twice. I said no twice. It's the first time I ever said no to Hanni Pham and I think about it every day. She looked at me like I'd stepped on a duckling." }
        ] },
        { t: "I don't remember being Alpha.", notes: 2, then: [
          { s: 'jaemin', f: 'neutral', t: "You don't have to. You're on the list. The list remembers." },
          { s: 'jaemin', f: 'neutral', t: "That's what lists are for, Solar. That's the only thing they're for." }
        ] },
        { t: "Is there a first aid kit in this one?", notes: 3, then: [
          { s: 'jaemin', f: 'flustered', t: "There is NOW. Hanni saw to that. With a sad face. I've learned my lesson." },
          { s: 'jaemin', f: 'neutral', t: "...I'm going to make it a really nice first aid kit. With the good plasters. The ones with the cartoons on. For next year. If there is one." }
        ] }
      ] },
      { n: "He closed the notebook, and then didn't take his hand off the cover, and looked at it, at the spiral and the stationery-shop sticker on the front and the corner already soft from being carried, like a man looking at the ticket for a show he'd been at and hadn't got to see the end of." },
      { s: 'jaemin', f: 'neutral', t: "Would you go again? If I ran it right?" },
      { choose: [
        { t: "Ask me again at the end.", notes: 3, then: [
          { s: 'jaemin', f: 'neutral', t: "At the end. Okay." },
          { s: 'jaemin', f: 'happy', t: "I'm good at ends. Ask anybody. I'm always the last one in the room." }
        ] },
        { t: "(Don't answer. Take his pen. Write a second first aid kit under Hanni's.)", notes: 2, then: [
          { n: "She wrote it under Hanni's, *first aid kit (2),* in her spiky slanting hand, and gave the pen back, and he looked at the two lines one above the other, round and spiky, and laughed out loud." },
          { s: 'jaemin', f: 'happy', t: "Two first aid kits. It's going to be the safest trip in Sigma history. It's going to be so *lame.*" }
        ] }
      ] }
    ] },

    { after: '1/23', title: '10: plus one', place: 'Paulownia Mall · Karaoke', time: 'Evening', music: 'sun', scene: [
      { n: "The biggest booth. The long couch, the mirror ball, the clerk's dish of rice crackers on the table and the napkin from November still propped against the mic stand, gone soft at the folds. Jaemin wasn't standing on anything. He was sitting in the middle of the couch with his elbows on his knees and an index card in his hands, turning it over, and over, like a boy in a hallway before a speech." },
      { n: "He'd bought it at the stationery shop on the Strip. A whole pack, he said, for one card, because they didn't sell one, and he'd ruined eleven of them, and Chenle had counted, and had said so, and had then gone to Game Panic and left him to ruin the twelfth in peace." },
      { s: 'jaemin', f: 'neutral', t: "Okay. I'm not doing a pitch. I want that noted. No pitch. I've been practicing not doing a pitch. It's the hardest thing I've ever done. Harder than the stairs." },
      { cg: 'link-jaemin-r10' },
      { n: "She sat down beside him, and he held out the card. It was a guest list. A real one, the kind he must have written a hundred times on the backs of a hundred flyers and receipts, with a line across the top for the event and a column for names, and the event line was blank, and there was one name in the column, at the top." },
      { n: "*SOLAR LEE.* And beside it, in the space for a plus-one, *whoever.* And under that, where a date would go, in his capitals, *EXPIRES: NO.*" },
      { cg: null },
      { ifFlag: 'route-R', then: [
        { s: 'jaemin', f: 'neutral', t: "When we get home. The first one back. Not the guest list. The door list. There's a difference. The guest list is for people I want at the party. The door list is for people who don't have to knock." },
        { s: 'jaemin', f: 'neutral', t: "You've never had to knock. You just didn't know it." }
      ], else: [{ ifFlag: 'route-true', then: [
        { s: 'jaemin', f: 'neutral', t: "Junpei says you're going home to everywhere. All of it at once. I don't know what that means. I asked three times. I've decided it means you're going to have a lot of parties to go to." },
        { s: 'jaemin', f: 'neutral', t: "This is so mine's first. That's all. I'm a competitive guy." }
      ], else: [
        { s: 'jaemin', f: 'neutral', t: "I know you're not coming to ours. I'm the Social Chair. I read rooms. I read this one weeks ago." },
        { s: 'jaemin', f: 'neutral', t: "It doesn't expire. That's the whole point of it. If there's ever a door, anywhere, any world, with my name on the outside of it, you're on the list. You don't have to come. You just have to be on it." }
      ] }] },
      { choose: [
        { t: "(Take the card. Put it in your phone case, behind the phone.)", notes: 3, then: [
          { n: "She slid it into the clear back of the pink phone's case, behind the phone, where it fit almost exactly, his capitals showing through the plastic, and he watched her do it and looked away, quickly, at the screen, where a song nobody had picked was playing its long instrumental intro to an empty mic." }
        ] },
        { t: "What does it get me?", notes: 3, then: [
          { s: 'jaemin', f: 'happy', t: "Everything. Front of the line. The good cup. The couch nobody's been sick on. Jeno not talking to you." },
          { s: 'jaemin', f: 'neutral', t: "And me. At the door. Every time. Checking you got in." }
        ] },
        { t: "You didn't do a pitch.", notes: 2, then: [
          { s: 'jaemin', f: 'neutral', t: "No." },
          { s: 'jaemin', f: 'flustered', t: "...That's how you know it's real. I'm terrible without one. Look at me. I'm sweating. In December. January. Whatever it is." }
        ] }
      ] },
      { ifFlag: 'jaemin-cups', then: [
        { s: 'jaemin', f: 'happy', t: "Also you're on cleanup. Permanently. That's not a privilege, that's a sentence. You picked up cups with me. Nobody picks up cups with me. You don't get to un-pick them." }
      ], else: [
        { s: 'jaemin', f: 'happy', t: "Also, you're never on cleanup. Guests of honor don't clean. And you'd be bad at it, I can tell. You'd make a system. You'd make a rota." }
      ] },
      { n: "He sat back, finally, all the way back against the vinyl, and let out a breath like a man who'd put down something he'd been carrying since a school gate in the green, and the mirror ball went round, and caught him, and for once he wasn't turned toward it." },
      { choose: [
        { t: "Can I give you one?", notes: 3, then: [
          { n: "She took a pen from his notebook and the karaoke receipt off the table and wrote on the back of it, *JAEMIN NA,* and next to it, *plus one: Chenle (he'll say no),* and under that, because she'd been paying attention, *EXPIRES: NO.*" },
          { n: "He read it. He read it again. Then he folded it once, carefully, along a line that wasn't there, and put it in his wallet next to the photo-booth strip and the torn-off month of a pharmacy calendar, and didn't say anything at all, which, for him, was the speech." }
        ] },
        { t: "(Hug him.)", notes: 3, then: [
          { n: "She leaned over and put her arms round him, briefly, awkwardly, a sideways hug on a vinyl couch, and he went completely still, the whole charming apparatus of him stopped dead like a carousel with the power cut, and then, after a second, he put one arm round her back, and held on, and didn't make a single joke." },
          { s: 'jaemin', f: 'flustered', t: "Okay. Okay. That's— okay. Nobody tell Chenle." }
        ] }
      ] },
      { n: "Then he got up, because he was Jaemin, and picked up the mic, and stood on the couch, because he was Jaemin, and sang the song nobody had picked, badly, in no accent at all, for an audience of one, and she laughed at him the whole way through it, and somewhere in the second chorus she realized she'd been laughing on the beat, and that he'd noticed, and that he'd started singing to her laugh instead of the track." }
    ] }
  ],
  afterMax: [
    { title: 'five stars', place: 'Paulownia Mall · Karaoke', time: 'Evening', scene: [
      { n: "Jaemin had started reviewing this world. Out loud, in stars, the way he'd reviewed every party he'd ever been to, and he was working through Paulownia Mall shop by shop from the biggest booth with a list on a napkin, and had got as far as the crane machines at Game Panic, which he'd given half a star and a formal letter of complaint." },
      { ifFlag: 'jaemin-five-stars', then: [
        { s: 'jaemin', f: 'happy', t: "You started this. You know that? Five stars, in November. *Would attend again.* I've been chasing that high ever since. Nothing else in this city has gotten five. The crackers got four and a half and that's only because the clerk loves me." }
      ], else: [
        { s: 'jaemin', f: 'neutral', t: "You never reviewed me, you know. I noticed. Everybody reviews me. You just looked at me like I was a menu in a language you didn't read." }
      ] },
      { choose: [
        { t: "Five stars. Still.", notes: 3, then: [
          { n: "He wrote it down on the napkin, *the booth: 5,* and then crossed it out and wrote *the company: 5,* and then, after some thought, crossed that out too and just drew a small sun with too many rays, and propped it against the dish." }
        ] },
        { t: "Three. The accent costs you two.", notes: 2, then: [
          { s: 'jaemin', f: 'surprised', t: "The accent is the BEST part—" },
          { s: 'jaemin', f: 'happy', t: "...Three. Fine. Three's honest. I'll take honest. I've got a lot of fives and not one honest three." }
        ] }
      ] }
    ] },
    { title: 'the apprentice', place: 'Iwatodai Dorm · Kitchen', time: 'Evening', scene: [
      { n: "Junpei was throwing his first party. A hot pot, in the dorm kitchen, for S.E.E.S. and whoever was visiting before eight, and he'd planned it for a week, and Jaemin had been forbidden from helping, by Jaemin, who was standing against the fridge with his arms folded and the face of a father at a school play, mouthing every line." },
      { s: 'junpei', f: 'happy', t: "Welcome, welcome, welcome! Come in like the room owes *you* money! Wait. No. That's for me. Just come in normally." },
      { s: 'jaemin', f: 'neutral', t: "Look at him. Look at him go. He's doing the hand. He's doing the hand on the shoulder. I taught him the hand." },
      { choose: [
        { t: "He's good. You did good.", notes: 3, then: [
          { s: 'jaemin', f: 'flustered', t: "*He* did good. I just stood near him. That's all teaching is. Standing near somebody till they're good." },
          { n: "Junpei looked over from the stove right then, and caught Jaemin's eye, and Jaemin gave him two thumbs up so big his elbows hurt, and Junpei turned back to the pot glowing like a light bulb and dropped a whole tofu in it." }
        ] },
        { t: "(Go and help Junpei with the pot.)", notes: 2, stat: { kindness: 1 }, then: [
          { n: "She went and stood at the stove next to Junpei and held the lid while he panicked about the heat, and behind them she could hear Jaemin narrating the entire thing to Koromaru in the golf voice, softly, *and the leader steps in, the crowd goes silent,* and Koromaru thumping his tail on the floor at every pause." }
        ] }
      ] }
    ] },
    { title: 'take twelve', place: 'Iwatodai · Riverside', time: 'Evening', scene: [
      { n: "He'd borrowed Minji's camera. With permission, he said, three times, and a written list of rules in her handwriting folded in his pocket, and he was down by the river in the gold hour with it on a little tripod, filming nothing, the water and the bridge and the light, and talking to it, quietly, not in any voice she'd heard him use before." },
      { ifFlag: 'jaemin-plain', then: [
        { s: 'jaemin', f: 'neutral', t: "I'm doing them to you now. In my head. Is that weird? I stand here and I pretend you're standing to the side of it, like by the river, and then I can do it." },
        { s: 'jaemin', f: 'neutral', t: "I've done six. Six without a bit. Chenle doesn't know. Don't tell him. He'll want to count them." }
      ], else: [
        { s: 'jaemin', f: 'neutral', t: "Practicing. Saying things straight. It's like the stairs, it turns out. You do it badly every day and then one day you're just a guy who does stairs." },
        { s: 'jaemin', f: 'neutral', t: "I've done six without a bit. Six. Chenle doesn't know. Don't tell him." }
      ] },
      { choose: [
        { t: "Do one now. I'll stand to the side.", notes: 3, then: [
          { n: "She stood to the side of the lens. He looked at her, and then at the river, and said one plain sentence to the house, about Jeno, about a keg and a stupid night and missing him, and then stopped the camera, and didn't play it back, and didn't need to." }
        ] },
        { t: "(Sit on the bank. Let him do it alone.)", notes: 2, then: [
          { n: "She sat on the grass a little way off and watched the bridge, and let him do it, and heard his voice come and go under the wind, not the words, just the shape of it, steady, not selling anything, like someone reading a letter out loud to a person who was asleep." }
        ] }
      ] }
    ] },
    { title: 'cups', place: 'Kirijo Guesthouse', time: 'Night', scene: [
      { n: "The guesthouse dinner had ended, the way they did now, most Fridays, with the desk lady asleep upright in her chair of honor by the palm and the low glass tables covered in cups, and everyone gone up in the elevator in twos and threes, and the lobby very quiet, and Jaemin with a garbage bag." },
      { ifFlag: 'jaemin-cups', then: [
        { n: "He didn't ask. He just held out the second bag, already shaken open, without looking round, the way you'd hand someone the other end of a sheet you were folding, and she took it." },
        { s: 'jaemin', f: 'neutral', t: "Jaehyun held one cup all night. One. Water. He refilled it himself. He thinks I didn't see. I see everything. It's the job." }
      ], else: [
        { n: "She was on her way to the door. She stopped at it, and looked back at him going round the room alone, slowly, picking up each cup and looking at it before it went in, and came back, and found the second bag where he'd left it, under the desk, as if he'd put it there for someone, just in case." },
        { s: 'jaemin', f: 'neutral', t: "Oh. You don't have to. You're a guest." }
      ] },
      { choose: [
        { t: "What do the cups say tonight?", notes: 3, then: [
          { s: 'jaemin', f: 'happy', t: "Good night. Everybody stayed. Nobody left early pretending they didn't. Chenle had two sodas, which for him is a rave." },
          { s: 'jaemin', f: 'neutral', t: "Everybody's okay. Tonight. That's what they say." }
        ] },
        { t: "(Just help. Don't talk.)", notes: 2, then: [
          { n: "They did the room in silence, one side each, and met in the middle by the palm, and he tied both bags in careful double knots, and the desk lady woke up and looked at the clean tables and at the two of them and said something soft that neither of them understood and both of them did." }
        ] }
      ] }
    ] },
    { title: 'the door', place: 'Iwatodai Station · Platform', time: 'Evening', scene: [
      { n: "He'd walked her to the station for no reason, because the guesthouse was right there and the dorm wasn't, and they were standing on the platform watching the trains come in lit up and go out lit up, and he was doing his commentary on the commuters, very quietly, a little kinder than he used to be." },
      { ifFlag: 'route-R', then: [
        { s: 'jaemin', f: 'neutral', t: "When we get home, the first thing. Before Regionals. Before anything. Since the trip everybody's been in different rooms, so I'm doing a small one. In the kitchen. Not a party. Like twelve people. Eggs. You're on the door list, so you can come in through the back, so nobody posts you." },
        { s: 'jaemin', f: 'happy', t: "I have plans for that kitchen, Solar. Big, quiet plans." }
      ], else: [{ ifFlag: 'route-true', then: [
        { s: 'jaemin', f: 'neutral', t: "Everywhere at once. I still don't get it. I've decided it's like a party with three rooms and you're in all of them and nobody minds." },
        { s: 'jaemin', f: 'happy', t: "Save me the good room. The one with the snacks." }
      ], else: [{ ifFlag: 'route-stay', then: [
        { s: 'jaemin', f: 'neutral', t: "You're staying. Here. I asked Fuuka. She cried a bit and then she said yes." },
        { s: 'jaemin', f: 'neutral', t: "Junpei's going to need somebody to tell him the exit's the hardest part. He won't believe it from me. He'll believe it from you." }
      ], else: [
        { s: 'jaemin', f: 'neutral', t: "You're going somewhere I can't come. That's fine. I mean it's not fine. But it's a door, and it's yours, and I'm the guy who stands by doors. I know what it looks like when somebody's about to go through one and mean it." },
        { s: 'jaemin', f: 'neutral', t: "You've got that look. You've had it for weeks." }
      ] }] }] },
      { choose: [
        { t: "Will you see me off? At the end?", notes: 3, then: [
          { s: 'jaemin', f: 'neutral', t: "I'll be the last one in the room. I always am. That's the deal." },
          { s: 'jaemin', f: 'happy', t: "I'll have a tambourine. You'll hate it." }
        ] },
        { t: "(Stand with him until the next train goes.)", notes: 2, then: [
          { n: "They stood there through one train and then another, and he stopped narrating somewhere in the second one, and just watched it go, all its windows lit, a whole city going home in boxes, and didn't say anything at all, which was getting easier for him, she thought, and harder to watch." }
        ] }
      ] }
    ] },
    { title: 'office hours', place: 'Paulownia Mall · Karaoke', time: 'Evening', scene: [
      { n: "Office hours, as usual. The biggest booth, the mirror ball, Chenle in the corner with a melon soda and the songbook, which he had now read twice, cover to cover, and was reading a third time, for errors." },
      { s: 'chenle', f: 'neutral', t: "Page two hundred and four has the same song twice with different numbers. One of them is wrong." },
      { s: 'jaemin', f: 'neutral', t: "Le. Nobody cares." },
      { s: 'chenle', f: 'neutral', t: "The clerk cares. I told him. He wrote it down." },
      { ifEvent: 'a4-mark', then: [
        { n: "Mark had been talked into coming, and was sitting very upright at the far end of the couch with his hands on his knees, being, as Jaemin introduced him to the booth at large, *our judge, ladies and gentlemen, a man so boring he once dressed as a substitute teacher on purpose,* and taking it with a good-natured wince, and laughing a half second after everyone else, the way he did." },
        { s: 'mark', f: 'neutral', t: "It was Clark Kent, man." },
        { s: 'jaemin', f: 'happy', t: "That's exactly what I said." }
      ], else: [
        { n: "Jaemin had put the judge's chair out anyway, a stool from the corridor with a paper sign taped to it, *JUDGE,* and nobody in it, and kept turning to it to ask for scores, and filling them in himself, low, in a voice he said was *a famously boring man's.*" }
      ] },
      { choose: [
        { t: "(Sing one. Finally.)", notes: 3, then: [
          { n: "She picked one at random and sang it, badly, on purpose, mostly, and Jaemin stood on the couch to cheer like it was a stadium, and Chenle looked up from the songbook for the entire length of the song, which he never did, and at the end said *seven,* and then, after a pause, *point five.*" }
        ] },
        { t: "(Hand Chenle the mic.)", notes: 2, then: [
          { s: 'chenle', f: 'neutral', t: "No." },
          { s: 'jaemin', f: 'happy', t: "He said no. He always says no. One day he'll say yes and I'll die. That's my whole plan. That's the long game." }
        ] }
      ] }
    ] }
  ]
});
