/* Junkyu · ? Revamp social link data (femc-game.html). Format: link fields in assets/femc/game/core.js, scene lines in scene.js.
   Searcher (Hoax), friendship. Kim Junkyu: junkyute in the PARK JIHOON HATE CLUB chat, junkyuuu online. Small, round-faced,
   the one who asks first ("are u ok solar!!! do u need some ice cream and hugs!!!"), "#teamsolar", "i care!", "i support you
   in whatever", "i wonder if jihoon is ok". From the book: he shares a class with Solar ("don't look"), blew her a kiss at the
   assembly, held a sign for Hyunsuk's homecoming ask, asked the gym "should we be dancing?", fetched an ice pack before anyone
   asked, does math homework with her, and wishes she'd invite him on Nana's six-thirty walks ("i wish u would invite me sol i
   miss nana!!"). Here he keeps count of her thank-yous (Jihoon's link: "Three times! I keep count!").
   He crossed with Jihoon's crew (Asahi, Hyunsuk, Jaehyuk) at Game Panic on 10/31 (story event a4-crew); rank 1 is the next
   evening. The crew are cameos (cast below); none of them fight. Asahi says the meanest thing quietly, Hyunsuk laughs at it,
   Jaehyuk is polite in capital letters. They sleep at the guesthouse by the station.
   Ranks 8-10 and the afterMax scenes read the solstice: route-H (the star pin shines: he's taking her home), route-true (all
   three charms hum together), anything else (the star has gone quiet: the ranks take a goodbye shape; on 1/30 the crew go
   home without her, Junkyu waving until the door shuts).
   Own flags, set and read only in this file: junkyu-hugs (r1) · junkyu-signs (r2) · junkyu-rhythm (r3) · junkyu-hug-list (r4)
   · junkyu-counter (r5) · junkyu-sundays (r6) · junkyu-card (r7) · junkyu-coin (r8).
   Nothing here decides Hoax's plot (no election result, no romance) or reports news from home the book hasn't printed.
   Texting voice: lowercase, "!!!", "omg", ":(". Arcana: '?' (open question, plot doc §16.6). */
(window.FEMC_GAME_LINKS ||= []).push({
  id: 'junkyu', name: 'Kim Junkyu', short: 'Junkyu', arcana: '?', numeral: '', from: 'Hoax',
  kind: 'searcher', world: 'H', romance: null,
  starts: '10/31', gate: { H: 5 },
  home: { area: 'mall', spot: 'Arcade', slot: 'evening', days: [0, 2, 5, 6],
          hint: 'Evenings in the arcade at Paulownia Mall, losing at everything, happily.' },
  approach: "There's a small, round-faced boy in a navy blazer in the arcade at Paulownia Mall, losing at a dance game to a ten-year-old and cheering for the ten-year-old louder than anyone, and he spots you and waves with both arms like you're coming in to land.",
  cast: { asahi: 'Asahi', hyunsuk: 'Hyunsuk', jaehyuk: 'Jaehyuk' },
  invite: {
    ask: [
      "SOL!!! r u ok!!! do u need ice cream and hugs!!!",
      "arcade? i saved u a token!! only one. i spent the rest. sorry!!",
      "hiiii :) r u free? i miss u and i saw u at breakfast",
      "i'm at the mall and i found a gachapon with a little sun in it!! come help me win it!!",
      "asahi is being mean to me. come be nice to me so i feel better!!",
      "do u want to walk koromaru with me!! ken said yes!! he said 'supervised'!!",
      "i'm inviting u!!! bc u never invite anyone so somebody has to!!!",
      "math homework?? i have the food court table with the good chair",
      "hyunsuk gave me 500 yen from the mitsuru envelope and i have NOT spent it. yet. come quick",
      "the dance game is free and nobody is on it. it is waiting for us sol",
      "jaehyuk is studying in the food court and he looks lonely. come help me bother him"
    ],
    ok: ["YAY!!!!! ok!! i'm by the dance game!!", "omg ok!!! see u soon!!! :)", "!!!!! i'm so happy", "ok i'm waving. look for the waving!!", "team solar is ASSEMBLING"],
    no: ["ok!! that's ok!! drink water!!", "aw ok :( next time!!!", "that's ok sol!! i support u in whatever!!", "ok!! rest!! i'm counting it as a hug anyway", "aw. ok. i'll tell the gachapon"]
  },
  hangouts: [
    [
      { n: "Junkyu had discovered gachapon. The capsule machines at the back of the mall, two rows of them, a hundred yen a turn for a plastic egg with a tiny toy inside, and he was standing in front of one with a fistful of coins and the face of a man at a casino who'd forgotten he was losing." },
      { s: 'junkyu', f: 'happy', t: "There's a little sun in this one! A little sun with a face! I'm getting it for you! I've had nine turns! I've got four cats!" },
      { choose: [
        { t: "(Take a turn yourself.)", notes: 3, then: [
          { n: "She turned the handle. The egg dropped. It was the sun. Of course it was the sun. Junkyu screamed so loud a security guard looked over." },
          { s: 'junkyu', f: 'happy', t: "FIRST TRY. Oh my God. Oh my God, the universe loves you. I KNEW it loved you." }
        ] },
        { t: "I like the cats.", notes: 2, then: [
          { s: 'junkyu', f: 'surprised', t: "You do?! Here! Have them! Have all four! They're a family!" },
          { n: "He lined them up on her palm in a row, biggest to smallest, and told her their names, which he'd made up on the spot and which were, in order, Asahi, Hyunsuk, Jaehyuk, and Little Asahi." }
        ] },
        { t: "(Let him keep going.)", notes: 1, then: [
          { n: "He kept going. Two more cats. A frog. A second frog. On the fourteenth turn he got the sun, and turned around holding it up over his head like a trophy, and found her already smiling, and said she'd jinxed it by not helping, and gave it to her anyway." }
        ] }
      ] },
      { n: "She put the little sun on her keys. It had a smug face. Junkyu said it looked like her when she won an argument, and then said it looked like her all the time, actually, and then said that was a compliment, and then said it again, louder, so she'd believe it." }
    ],
    [
      { n: "Asahi was sitting on the back of a bench in the mall with his hood up, eating a pretzel very slowly and watching Junkyu try to win a stuffed bear at the ring toss, and every time Junkyu missed, Asahi said something, very quietly, like a sports commentator who hated the sport." },
      { s: 'asahi', f: 'neutral', t: "And he misses. Again. The crowd is silent. Nobody is surprised." },
      { s: 'junkyu', f: 'sad', t: "Asahi, you're being mean!" },
      { s: 'asahi', f: 'neutral', t: "I'm being accurate. It's different. Ask Sol. Sol, am I being mean?" },
      { choose: [
        { t: "You're being mean.", notes: 3, then: [
          { s: 'asahi', f: 'surprised', t: "...Wow. Okay. She picked a side." },
          { s: 'junkyu', f: 'happy', t: "SHE PICKED ME." },
          { n: "Asahi bought Junkyu three more rings with his own money, without a word, and looked away while he threw them." }
        ] },
        { t: "You're being accurate.", notes: 2, then: [
          { s: 'asahi', f: 'neutral', t: "Thank you. Finally. A fair and impartial judge." },
          { s: 'junkyu', f: 'sad', t: "Sol!!!" }
        ] },
        { t: "(Take a ring and throw it yourself.)", notes: 3, then: [
          { n: "It went over the bottle with a clean little clack, first try, and the man behind the stall handed Solar the bear with the air of somebody who had expected to keep it forever. She gave it to Junkyu. Junkyu held it up at Asahi like evidence." },
          { s: 'asahi', f: 'neutral', t: "That doesn't count. That's her bear. You just have custody." },
          { s: 'junkyu', f: 'happy', t: "Joint custody!" }
        ] }
      ] },
      { n: "Later, when Junkyu went off to look at the gachapon again, Asahi finished his pretzel, folded the paper into a very small square, and said to nobody that the ring toss was rigged anyway, which was, Solar realized, the nicest thing he'd said all day, and he'd said it about a game, on Junkyu's behalf, where Junkyu couldn't hear." }
    ],
    [
      { n: "Junkyu was walking Koromaru. Supervised, by Ken, who walked three steps behind them with his hands behind his back like a very small parole officer. Koromaru was walking Junkyu, more accurately, in whatever direction Koromaru preferred." },
      { s: 'junkyu', f: 'happy', t: "He's so good! He's so good, Sol! He's like Nana but smaller and he listens!" },
      { s: 'ken', f: 'neutral', t: "He listens to people who hold the leash correctly. That's a separate issue." },
      { choose: [
        { t: "(Take the leash for a block.)", notes: 3, then: [
          { n: "She took the leash. Koromaru immediately walked perfectly, at heel, looking up at her. Junkyu looked betrayed. Ken looked smug." }
        ] },
        { t: "Nana doesn't listen?", notes: 2, then: [
          { s: 'junkyu', f: 'happy', t: "Nana listens to YOU. He doesn't listen to anybody else. Not even Jihoon, and Jihoon says he's his dad. He's not his dad. Cherry says. Constantly." }
        ] },
        { t: "Ken, does he pass?", notes: 2, then: [
          { s: 'ken', f: 'serious', t: "...Provisionally." },
          { s: 'junkyu', f: 'happy', t: "PROVISIONALLY! Sol! I'm provisional!" },
          { n: "He said it for the rest of the walk, to Koromaru, to a lamppost, to a woman with a stroller, who congratulated him." }
        ] }
      ] }
    ],
    [
      { n: "The food court on a weeknight was nearly empty, the shutters half down on the noodle counter, the floor still wet in stripes from the mop, and Junkyu had claimed the one table with the good chair and spread his math homework across it like a map of a country he'd been told to invade." },
      { s: 'junkyu', f: 'serious', t: "Okay. Okay. We do these together. Like at home. You do one, I do one, and then we compare, and then we're both wrong in different ways." },
      { n: "They weren't even his. Gekkoukan didn't know he existed. He'd borrowed the worksheet from Junpei, who had not done it either, and set himself to it anyway, because, he said, his brain would fall out if it didn't have homework, and also because she had homework, and that was what you did when your friend had homework." },
      { choose: [
        { t: "(Do one. Compare. Be wrong differently.)", notes: 3, then: [
          { n: "They did one each and compared, and they were both wrong, in different ways, exactly as promised, and Junkyu looked at the two answers side by side with enormous satisfaction, like he'd proved something." },
          { s: 'junkyu', f: 'happy', t: "See! It's just like home! This is so nice!" }
        ] },
        { t: "Shouldn't we ask someone who's good at this?", notes: 2, then: [
          { s: 'junkyu', f: 'neutral', t: "Jaehyuk. Jaehyuk is good at this. He's always good at this. He studied before school even started this year. In the summer. On purpose." }
        ] },
        { t: "(Draw a cat in the margin of his worksheet.)", notes: 1, then: [
          { s: 'junkyu', f: 'surprised', t: "Sol! That's Junpei's!" },
          { n: "He drew a second cat next to it, worse, and said they were a couple now, and that Junpei would have to live with it." }
        ] }
      ] },
      { n: "Jaehyuk drifted past at some point with a tray, glanced down at the two of them, set the tray on the next table, sat, took Junkyu's pencil out of his hand without a word, and fixed all of it, both of theirs, in about four minutes, and gave the pencil back." },
      { s: 'jaehyuk', f: 'neutral', t: "You carried the wrong number. Both of you. The same wrong number, actually, which is impressive." },
      { s: 'junkyu', f: 'happy', t: "We're a TEAM." },
      { s: 'jaehyuk', f: 'neutral', t: "That is not the word I would use." }
    ],
    [
      { n: "There was an ice cream stand by the mall fountain that Junkyu had decided was theirs, and the question, every time, was who was paying, and the answer, every time, was settled the only fair way anyone had ever found." },
      { s: 'junkyu', f: 'serious', t: "Rock paper scissors. Best of one. Loser pays. That's the law." },
      { s: 'junkyu', f: 'neutral', t: "We did it at home at Yeobo's once. All six of us. You lost. You had to buy for everybody and your face went like this." },
      { n: "He made a face. It was a very good face. It was so exactly the face she'd have made that her own face did it back, a little, without asking her." },
      { choose: [
        { t: "(Throw rock.)", notes: 2, then: [
          { n: "He threw paper. He covered her fist with his hand and held it there, gently, like he was keeping it warm, and then remembered he'd won and screamed about it." },
          { s: 'junkyu', f: 'surprised', t: "I WON. I won! Oh no. I have to pay. I don't have money. Why did I make that the law." },
          { n: "She paid. He said that was against the law. She said the law was stupid. He said, sadly, that it was, and ate his ice cream with the slow solemn guilt of a man who'd been bailed out." }
        ] },
        { t: "(Throw scissors.)", notes: 3, then: [
          { n: "He threw paper. She won. He stared at his own flat hand like it had betrayed him personally, and then he went to the stand and paid for both of them out of a small envelope with his name on it in Mitsuru's handwriting, very carefully, counting out every coin." },
          { s: 'junkyu', f: 'happy', t: "That's fair. That's the law. You lost last time. Now the universe is even." }
        ] },
        { t: "(Don't play. Just pay.)", notes: 1, then: [
          { s: 'junkyu', f: 'sad', t: "Sol. Sol, no. That's not the law. You can't just pay. You do that at home too, and then you don't have any money, and then you pretend you're not hungry." },
          { n: "He made her play anyway. She lost. She paid. He looked happier about that, somehow, than if she'd just paid, and she didn't understand it, and understood it completely." }
        ] }
      ] }
    ],
    [
      { n: "The photo booth by the escalators took four pictures for four hundred yen and gave you about a second and a half between each one, which Junkyu found out the hard way, on his own, before she got there, and he showed her the strip: four pictures of the side of his head, turning." },
      { s: 'junkyu', f: 'sad', t: "It's so fast! It's too fast! It doesn't wait! Come in with me. You're good at faces. You always know where the camera is." },
      { n: "They squeezed into the booth. The curtain swung shut behind them. The little screen showed the two of them, his round face and her careful one, side by side, under too much light." },
      { choose: [
        { t: "(Smile the way you smile for cameras.)", notes: 2, then: [
          { n: "It came out of her automatically, the right smile, the one that knew exactly where the lens was and how wide to go and when to stop. All four frames. Perfect. Junkyu looked at the strip for a long time when it came out." },
          { s: 'junkyu', f: 'neutral', t: "That's the poster face. You always did the poster face. Even before the poster." }
        ] },
        { t: "(Pull a stupid face.)", notes: 3, then: [
          { n: "She crossed her eyes. He pulled his mouth sideways. In the third frame they were both laughing too hard to pull anything, and in the fourth he'd turned to look at her instead of the camera, and was still laughing, and the strip came out of the slot warm." },
          { s: 'junkyu', f: 'happy', t: "That one. That's the one. That's the real one. I'm keeping it forever." }
        ] },
        { t: "(Wave with both hands, like he does.)", notes: 3, then: [
          { s: 'junkyu', f: 'surprised', t: "That's MY wave!" },
          { n: "He waved too, both hands, so the strip came out as four pictures of two people waving at something just out of frame, enthusiastically, like they were bringing in a plane." }
        ] }
      ] },
      { n: "He cut the strip in half with the scissors on the booth's little chain and gave her two frames, and put his two in the clear pocket on the back of his phone case, where they'd stay, she'd notice, every time she saw that phone, for the rest of the year." }
    ]
  ],
  ranks: [
    { after: '11/1', title: '1: ice cream and hugs', place: 'Paulownia Mall · Arcade', time: 'Evening', music: 'joy', scene: [
      { n: "Their arrival had ended in Game Panic with the shutter halfway up and the hour holding on one minute longer than it should have, four boys in navy blazers standing in the middle of the dead cabinets arguing about a wall, and the softest-faced one turning around and seeing her and saying her name with three exclamation points. She'd heard them. She could still hear them." },
      { n: "Then the phone at two in the morning, an old chat going off like a smoke alarm. Then not sleeping. At their first breakfast here, the four of them had sat at the far end of the dorm's table in the same blazers eating Fuuka's rice with the focused, slightly frightened gratitude of boys in somebody else's house, and the round-faced one had looked up every time she moved, like a dog listening for its name, and not said anything, because every time he opened his mouth Jihoon kicked him under the table." },
      { n: "He was in the arcade tonight. The lights were all on and every cabinet was yelling its own song over every other cabinet's song, and he was losing to a ten-year-old at a dance game and cheering for the ten-year-old, and when he saw Solar come in he jumped off the platform mid-song and the machine booed him and he didn't care." },
      { register: 'junkyu' },
      { s: 'junkyu', f: 'happy', t: "SOL! Sol, hi! Are you okay? Do you need ice cream and hugs?" },
      { n: "He said it all at once, like a single word. *Icecreamandhugs.* Like a spell he'd said so many times the spaces had worn off." },
      { s: 'junkyu', f: 'neutral', t: "Jihoon made a rule. At breakfast. Under the table, with his feet, mostly. Don't crowd her. Don't make her remember. Don't hug her without asking." },
      { s: 'junkyu', f: 'happy', t: "So I'm asking! I'm asking first. I always ask first. That's my thing. Is that okay?" },
      { choose: [
        { t: "Yes. Hug.", notes: 3, flag: { 'junkyu-hugs': true }, then: [
          { n: "He hugged her. Around the middle, his cheek against her shoulder, arms tight, the whole of him warm and solid and not letting go, and she stood in the middle of the arcade being hugged by a boy she didn't know, with a dance machine booing somewhere behind him, and felt her shoulders come down for the first time all day." },
          { n: "They'd been up around her ears since April. She hadn't noticed until they weren't." },
          { s: 'junkyu', f: 'happy', t: "Okay. Okay! That's the hug. Now ice cream." }
        ] },
        { t: "Ice cream first.", notes: 3, then: [
          { s: 'junkyu', f: 'happy', t: "ICE CREAM FIRST. Okay. Okay. That's so you. You always negotiate the order." }
        ] },
        { t: "I'm okay, thank you.", notes: 1, then: [
          { s: 'junkyu', f: 'sad', t: "...Oh. Okay." },
          { s: 'junkyu', f: 'neutral', t: "You're never okay when you say okay like that. And you said thank you. You don't say thank you. That's how I know it's bad." },
          { s: 'junkyu', f: 'happy', t: "That's okay! I'm getting the ice cream anyway. You can have it later. I'll hold it. It's my job." }
        ] }
      ] },
      { n: "He didn't have money. He found this out at the ice cream stand by the fountain, patting every pocket in his blazer twice with growing horror, and then turned around and yelled across the whole atrium for Hyunsuk, who came over, and sighed, and paid out of a plain white envelope with his own name on the front in Mitsuru's handwriting, and told Junkyu he owed him, and then bought himself one too." },
      { s: 'hyunsuk', f: 'happy', t: "He does this every time. He offers to buy everyone everything. He's never once had the money. It's the most consistent thing about him." },
      { s: 'junkyu', f: 'happy', t: "It's the thought that counts!" },
      { s: 'hyunsuk', f: 'neutral', t: "The thought owes me six hundred yen." },
      { n: "Asahi was up on the railing of the mezzanine above them with his hood up, watching, not coming down. He caught Solar's eye, and held up one hand with the fingers spread, and folded them down, one at a time, counting, and pointed at Junkyu." },
      { s: 'asahi', f: 'neutral', t: "He's going to cry. Five seconds. Watch." },
      { s: 'junkyu', f: 'sad', t: "I'm NOT going to cry. I'm EATING." },
      { n: "They ate it on the rim of the fountain. He'd picked her flavor without asking, and picked right, and she couldn't have said how she knew it was right, only that her mouth knew, the way her thumbs had known how to type in that chat at two in the morning. He watched her eat it with his chin on his fist and his own ice cream melting down his wrist, forgotten." },
      { s: 'junkyu', f: 'neutral', t: "I'm not going to make you remember. That's the rule. Jihoon made a whole speech about it at the guesthouse. Standing on a chair. Asahi timed it. Eleven minutes." },
      { s: 'junkyu', f: 'happy', t: "I'm just going to be really nice to you until you go *oh, it's Junkyu, he's so nice.* And then we're back!" },
      { choose: [
        { t: "You're already really nice.", notes: 3, then: [
          { s: 'junkyu', f: 'surprised', t: "..." },
          { s: 'junkyu', f: 'sad', t: "Oh no. I'm going to cry. That's so nice. You barely know me and you're already being nice to me." },
          { s: 'asahi', f: 'neutral', t: "Told you." }
        ] },
        { t: "Your ice cream's melting.", notes: 2, then: [
          { s: 'junkyu', f: 'surprised', t: "OH NO." },
          { n: "He licked his wrist. Hyunsuk looked at him with the weary love of a man who'd been doing this for years, and handed him a napkin." }
        ] },
        { t: "What was I like? Before.", notes: 2, then: [
          { s: 'junkyu', f: 'neutral', t: "Loud in the chat. Quieter in real life. You'd type in capitals and then in person you'd just go *hm.*" },
          { s: 'junkyu', f: 'serious', t: "And you worried. All the time. With your whole forehead. Like that. Like you're doing now. I used to tell you you'd get wrinkles." },
          { n: "She put a hand up to her forehead without meaning to. He beamed at her, delighted, like she'd done a trick." }
        ] }
      ] },
      { place: "Iwatodai Dorm · Solar's Room", time: 'Late Night', soft: true },
      { n: "Her phone went off at midnight. Not the group chat. Just him, on his own, in a thread she didn't remember starting and must have started a hundred times." },
      { phone: [
        { from: 'junkyu', t: "did u get home ok!!!" },
        { from: 'junkyu', t: "i know the dorm is like 4 minutes from the station" },
        { from: 'junkyu', t: "but still!!!" }
      ], contact: 'junkyute' },
      { choose: [
        { t: "(Type: home. thank you for the ice cream)", notes: 2, then: [
          { phone: [
            { from: 'solar', t: "home. thank you for the ice cream" },
            { from: 'junkyu', t: "HYUNSUK PAID but ok!!! ur welcome!!!" },
            { from: 'junkyu', t: "wait" },
            { from: 'junkyu', t: "u said thank you" },
            { from: 'junkyu', t: "no. that one was hyunsuk's money. it doesn't count. goodnight sol!!!" }
          ], contact: 'junkyute' }
        ] },
        { t: "(Type: home. thank you for asking first)", notes: 3, then: [
          { phone: [
            { from: 'solar', t: "home. thank you for asking first" },
            { from: 'junkyu', t: "......" },
            { from: 'junkyu', t: "ok that one" },
            { from: 'junkyu', t: "never mind!!! nothing!!! goodnight sol!!! ice cream and hugs!!!" }
          ], contact: 'junkyute' }
        ] },
        { t: "(Send a sticker. A cat.)", notes: 1, then: [
          { phone: [
            { from: 'solar', t: "🐱" },
            { from: 'junkyu', t: "A STICKER!!! u never send stickers!!! omg!!!" },
            { from: 'junkyu', t: "it looks like little asahi. goodnight!!!" }
          ], contact: 'junkyute' }
        ] }
      ] },
      { n: "She fell asleep with the phone on her chest again. It was getting to be a habit. She didn't mind it, as habits went." }
    ] },

    { after: '11/8', title: '2: team solar', place: "Iwatodai Dorm · Solar's Room", time: 'Evening', scene: [
      { n: "The dorm had been very quiet since Wednesday. Nobody had told the searchers why, and the searchers, to their credit, hadn't asked, but the quiet had a weight to it you could feel on the stairs, the way you can feel a held breath in the next room, and Junkyu had felt it the second he came through the front door on Thursday with a bag of oranges for the lounge. He'd stood there with the bag in his arms, looking around at everybody not looking at each other. Then he'd turned around and gone straight back out to the hundred-yen shop." },
      { n: "There was a sign on her door when she came home. A big piece of poster board, cut slightly crooked, taped up with too much tape, and on it, in enormous bubble letters colored in with three different highlighters because he'd run out of the first two, #TEAMSOLAR." },
      { n: "Under it, smaller, in very careful handwriting: *for whatever ur running for!!!*" },
      { n: "Junkyu was sitting on the hallway floor next to it with the highlighters in his lap, the caps all off, drying out, waiting." },
      { s: 'junkyu', f: 'happy', t: "Do you like it? I should've made one at home. For the assembly. When they called you up on the stage." },
      { s: 'junkyu', f: 'neutral', t: "We all cheered. In the middle of the principal talking. Cherry made a heart with her hands. Jaehyuk did two thumbs. I blew you a kiss. You looked like you were going to throw up. You didn't! You were so good!" },
      { s: 'junkyu', f: 'neutral', t: "But I didn't have a sign. So this is that. Late." },
      { s: 'junkyu', f: 'serious', t: "And then I thought, you're not running for anything here. But you're probably running for something. Everybody always is. So I left it open." },
      { choose: [
        { t: "I love it.", notes: 3, flag: { 'junkyu-signs': true }, then: [
          { s: 'junkyu', f: 'happy', t: "YOU DO? Okay. Okay okay okay. I'm making another one. For the lounge. For the roof. For your other door." },
          { s: 'solar', f: 'neutral', t: "I only have one door." },
          { s: 'junkyu', f: 'happy', t: "For your other door when you get one!" }
        ] },
        { t: "What am I running for?", notes: 3, then: [
          { s: 'junkyu', f: 'neutral', t: "I don't know! That's the best part! You don't have to know! I'm on your team anyway!" },
          { s: 'junkyu', f: 'serious', t: "That's what team means. I'm on your team before you know what the game is." }
        ] },
        { t: "You spelled *your* wrong.", notes: 2, then: [
          { s: 'junkyu', f: 'surprised', t: "Ur is how you spell it! In the chat! That's the official spelling! Asahi spells it that way and he's the meanest person I know, so it must be right!" }
        ] }
      ] },
      { n: "Junpei came up the stairs and saw the sign and stopped and read it and put his hand on his chest." },
      { s: 'junpei', f: 'happy', t: "Dude. Dude, I want one. Can I get one? Team Junpei?" },
      { s: 'junkyu', f: 'happy', t: "YES! Absolutely! What are you running for?" },
      { s: 'junpei', f: 'neutral', t: "...Uh. Lunch?" },
      { s: 'junkyu', f: 'happy', t: "#TEAMLUNCH. I'm on it." },
      { n: "Aigis came up behind him, the way she did, without a sound on the stairs, and stood in front of the sign and read it twice, and tilted her head." },
      { s: 'aigis', f: 'neutral', t: "What does the symbol in front mean? The lattice." },
      { s: 'junkyu', f: 'happy', t: "It means I'm on your team! Whoever's name comes after it, I'm on their team." },
      { s: 'aigis', f: 'neutral', t: "I am already on a team. S.E.E.S." },
      { s: 'junkyu', f: 'happy', t: "Now you'd be on two!" },
      { s: 'aigis', f: 'happy', t: "...Two teams. That is efficient. I would like a lattice, please." },
      { n: "By the end of the week every door on the second floor had a sign. Yukari's said #TEAMYUKARI (FOR ARCHERY!!!). Mitsuru's said #TEAMMITSURU (FOR EVERYTHING!!!) and Mitsuru had looked at it for a long time in the hallway and not taken it down. Akihiko's said #TEAMAKIHIKO (FOR PROTEIN) and he'd added, in his own blunt capitals underneath, AND RUNNING. Aigis's was the biggest, because she'd asked for it to be, and said #TEAMAIGIS (TWO TEAMS!!!), and she touched it on her way past every morning, lightly, the way you'd touch a doorframe for luck." },
      { n: "Koromaru got one too. Ken taped it to the kennel by the front door himself, at exactly eye level for a dog. #TEAMKOROMARU (GOOD BOY!!!). Koromaru sniffed it, sneezed, and lay down underneath it like it was a crown he'd been expecting." },
      { n: "It didn't fix anything. Nobody had thought it would. But on Sunday night, coming up the stairs, Solar heard Yukari laugh at something behind her door, a real laugh, short and surprised, for the first time since Wednesday, and stopped on the landing, and stood there a second, and went on up." },
      { ifFlag: 'junkyu-signs', then: [
        { n: "Hers was still the first. He came back twice that week to re-tape the corner where it was peeling, and the second time she caught him at it, and he said he was doing maintenance, and that a team needed a sign that didn't fall down, and pressed the tape flat with his thumb for a long time, very carefully, like it mattered." }
      ], else: [
        { n: "Hers was still the first, and still the crookedest. It stayed up. She found, a little to her surprise, that she didn't want it to come down." }
      ] }
    ] },

    { after: '11/15', title: '3: the crew', place: 'Paulownia Mall · Arcade', time: 'Evening', music: 'city', scene: [
      { n: "Junkyu was explaining his friends. He did it the way you'd explain a family to someone who'd married into it, at length, with love, with a running commentary on everyone's flaws, while the friends in question sat within earshot pretending not to listen." },
      { s: 'junkyu', f: 'happy', t: "Okay. Asahi. He's mean. He's the meanest. His name in the chat is *asanoonecares.* He called you a dumb bitch in the group chat before school even started this year. He's never once missed hanging out after. Not once." },
      { s: 'asahi', f: 'neutral', t: "I can hear you." },
      { s: 'junkyu', f: 'happy', t: "He can hear me! Hyunsuk. *geniusuk.* He picked that one himself. He wants us to think he's the smart one. He's also mean, but funnier. He laughs at everything Asahi says. Even when it's about him." },
      { s: 'hyunsuk', f: 'happy', t: "It's a talent." },
      { s: 'junkyu', f: 'neutral', t: "And he asked Cherry to homecoming with signs. In the cafeteria. We all held one. She laughed for like a whole minute. They had a thing, before she started seeing Sunghoon." },
      { s: 'hyunsuk', f: 'flustered', t: "She said yes, Junkyu. Tell the part where she said yes." },
      { s: 'asahi', f: 'neutral', t: "Eventually." },
      { s: 'junkyu', f: 'neutral', t: "Jaehyuk. He's the actual smart one. And the nice one. Not like me nice. Polite nice. He's on student council. He uses capital letters. In the chat. Full stops. Everyone's scared of him a little." },
      { s: 'jaehyuk', f: 'neutral', t: "Nobody is scared of me, Junkyu." },
      { s: 'asahi', f: 'neutral', t: "I'm scared of you." },
      { s: 'hyunsuk', f: 'happy', t: "LMAO." },
      { s: 'jaehyuk', f: 'serious', t: "Please don't say that out loud, Hyunsuk." },
      { choose: [
        { t: "And you?", notes: 3, then: [
          { s: 'junkyu', f: 'surprised', t: "Me?" },
          { s: 'junkyu', f: 'neutral', t: "I'm the one who asks if you're okay. That's my job. Everyone has a job. I'm the one who checks." },
          { s: 'asahi', f: 'neutral', t: "He's the heart. Don't tell him I said that." },
          { s: 'junkyu', f: 'happy', t: "ASAHI. I HEARD THAT." }
        ] },
        { t: "What was my job?", notes: 3, then: [
          { s: 'junkyu', f: 'happy', t: "You were the one who made everyone hang out! Somebody'd be mad at somebody and you'd go, *we can literally all hang out after school??* With two question marks. And then we would!" },
          { s: 'junkyu', f: 'neutral', t: "And one time we did rock paper scissors at Yeobo's for who paid and you lost and had to buy for all six of us and you didn't have any money and your face—" },
          { s: 'hyunsuk', f: 'happy', t: "Her FACE." },
          { ifMet: 'sunoo', then: [
            { s: 'junkyu', f: 'surprised', t: "Oh! Yeobo's is HERE now, Sol. Did you know? It just showed up. On the Strip. Like us." }
          ] },
          { s: 'junkyu', f: 'sad', t: "...You never invited us on walks, though. With Nana. You'd just post a picture. I always wanted to come." }
        ] },
        { t: "Is anyone actually in charge?", notes: 2, then: [
          { s: 'jaehyuk', f: 'neutral', t: "No." },
          { s: 'asahi', f: 'neutral', t: "Jihoon thinks he is." },
          { s: 'hyunsuk', f: 'happy', t: "That's how you know he isn't." },
          { s: 'junkyu', f: 'happy', t: "You were! Kind of! You'd say a place and a time and everyone would complain and then show up." }
        ] }
      ] },
      { n: "Asahi had come down off the back of his bench while they talked. He stood next to Solar at the crane game, hood up, hands in his pockets, and didn't look at her, and said, at a volume so low only she could hear, that it was really bad, actually, having her not know them, and that he was going to keep being mean to her, because if he stopped being mean it'd be weird, and then she'd know something was wrong." },
      { s: 'asahi', f: 'neutral', t: "So. You look stupid in that uniform. Welcome back." },
      { choose: [
        { t: "Thank you, Asahi.", notes: 3, then: [
          { s: 'asahi', f: 'surprised', t: "..." },
          { s: 'asahi', f: 'neutral', t: "...Don't thank me. Gross. Junkyu, she thanked me. Count it." },
          { s: 'junkyu', f: 'happy', t: "That doesn't count! She has to thank ME!" }
        ] },
        { t: "You look stupid in that hood.", notes: 3, then: [
          { s: 'asahi', f: 'neutral', t: "...Okay. There she is. That's the one." },
          { n: "He went back to his bench. He looked, for one second, very pleased, and then very carefully didn't." }
        ] },
        { t: "(Challenge him to the rhythm game.)", notes: 3, needs: { courage: 3 }, flag: { 'junkyu-rhythm': true }, then: [
          { s: 'asahi', f: 'surprised', t: "You? Me? You've never beaten me at that. Not once. In your entire life." },
          { n: "She beat him. Not by much. Her hands knew the song before her head did, every note coming up out of somewhere she couldn't reach on purpose, and when the score came up Asahi stared at it with his hood half off and Junkyu screamed so loud the man at the counter came out." },
          { s: 'asahi', f: 'neutral', t: "...That's not her. That's a different girl. That girl's never beaten me." },
          { s: 'asahi', f: 'happy', t: "Rematch. Tomorrow. Don't you dare get worse." }
        ] }
      ] },
      { n: "When they left, Junkyu walked her as far as the station, and on the way he told her the rest of it, the things the others wouldn't have said with each other there. That Asahi had commented *finally something nice* under her pictures of Nana and then denied it for a week. That Hyunsuk was the one who'd offered to drive her to school the morning Jihoon went back to sleep. That Jaehyuk muted the chat to study and said *call me directly if you need anything*, and meant it, and everybody had, at some point, at two in the morning." },
      { s: 'junkyu', f: 'neutral', t: "That's what we are. We're mean and then we show up. That's the whole club." },
      { s: 'junkyu', f: 'happy', t: "It's called the Park Jihoon Hate Club but it's not really about hating Jihoon. It's a little bit about hating Jihoon." }
    ] },

    { after: '11/22', title: '4: the count', place: 'Paulownia Mall · Central Atrium', time: 'Evening', scene: [
      { ifFlag: 'junkyu-hugs', then: [
        { n: "He'd hugged her eleven times that week. He'd asked first every single time, even the times it was obvious, even the time in the lounge in front of Mitsuru, who'd looked up from her book and watched the whole negotiation with the grave interest of somebody observing a treaty." }
      ] },
      { n: "Junkyu had a list. It was on his phone, in the notes app, and he showed it to her on the rim of the fountain with the solemnity of a man showing a historian a primary document." },
      { n: "It was short. Three lines. The first one said *i said i care!! she said thank you junkyu :)* and had a date next to it from early that year, in a world she couldn't remember. The other two just said *(private)*." },
      { s: 'junkyu', f: 'neutral', t: "Those are the times you've said thank you to me. Out loud. Or in the chat. Ever." },
      { s: 'junkyu', f: 'happy', t: "Three! That's a lot for you! You don't thank people. You just do stuff for them back, later, when they're not looking. Jihoon says that's how you say it. I know. I still count." },
      { s: 'junkyu', f: 'neutral', t: "The first one was Asahi said nobody cared, because that's his name, and I said *i care!* And you said *thank you junkyu* with a smiley face. You never use the smiley face. I screenshotted it." },
      { choose: [
        { t: "What are the private ones?", notes: 2, then: [
          { s: 'junkyu', f: 'serious', t: "No! They're private! That's what private means!" },
          { s: 'junkyu', f: 'happy', t: "You'll remember. And then you'll be so embarrassed. It's going to be the best day of my life." }
        ] },
        { t: "Thank you, Junkyu.", notes: 3, then: [
          { s: 'junkyu', f: 'surprised', t: "..." },
          { s: 'junkyu', f: 'neutral', t: "For what?" },
          { s: 'solar', f: 'neutral', t: "For counting." },
          { n: "He looked at her for a long moment with his mouth slightly open. Then he looked down at his phone, and very carefully, with one finger, added a fourth line. *thanked me for counting.* His eyes were wet. He didn't do anything about it." },
          { s: 'junkyu', f: 'sad', t: "...Four. Four! Oh no. I'm going to cry in the mall." }
        ] },
        { t: "Jihoon told me I've thanked you twice.", notes: 2, then: [
          { s: 'junkyu', f: 'serious', t: "Jihoon can't count. Jihoon thinks he's the light of everyone's life. Jihoon is not a reliable source." }
        ] }
      ] },
      { s: 'junkyu', f: 'sad', t: "I counted because I thought if I kept count, I'd know you were still my friend. Like, if the number went up, you were still there." },
      { s: 'junkyu', f: 'neutral', t: "And then you weren't there. And the number stopped. And I didn't know what to count." },
      { n: "He said it to his phone, not to her. Behind them the fountain went on doing what it did, the same three jets rising and falling under the atrium's white lights, and a family went past arguing about where they'd parked, and somewhere upstairs Game Panic was yelling its usual song through the floor." },
      { choose: [
        { t: "Count the hugs instead.", notes: 3, flag: { 'junkyu-hug-list': true }, then: [
          { s: 'junkyu', f: 'surprised', t: "..." },
          { s: 'junkyu', f: 'happy', t: "THAT'S SO MANY MORE. Oh my God. Okay. That's a new list. Starting now." },
          { n: "He made a new note. He titled it, after some thought, *HUGS (SOL).* Then he hugged her, and over her shoulder he held up one finger, and typed with the other hand, badly, *1.*" }
        ] },
        { t: "I'm here now.", notes: 3, then: [
          { s: 'junkyu', f: 'happy', t: "You're here now! Okay. Okay. That counts. That counts the most." }
        ] },
        { t: "(Take his phone and add a line yourself.)", notes: 3, then: [
          { n: "He let her have it without a word, which, for him, was its own kind of speech. She typed under his three lines, with her thumbs, in lowercase, the way her thumbs wanted to. *thank you for asking first.*" },
          { s: 'junkyu', f: 'sad', t: "..." },
          { s: 'junkyu', f: 'neutral', t: "You can't add your own. That's not how the list works." },
          { n: "He didn't delete it. He saved it, and locked the phone, and held it against his chest with both hands for the rest of the evening like it might try to get away." }
        ] }
      ] },
      { ifMet: 'cherry', then: [
        { n: "Cherry came past on her way out of the shop windows with three bags and an expression, and stopped, and looked at the two of them on the fountain, and at Junkyu's wet face, and at Solar." },
        { s: 'cherry', f: 'neutral', t: "What did you do to him." },
        { s: 'junkyu', f: 'happy', t: "She thanked me!" },
        { s: 'cherry', f: 'surprised', t: "She WHAT." },
        { s: 'cherry', f: 'neutral', t: "...Okay. Whatever's going on with her, I don't like it. Junkyu, I love you, wipe your face." }
      ] }
    ] },

    { after: '11/29', title: '5: i wonder if jihoon is ok', place: 'Iwatodai Dorm · Lounge', time: 'Night', music: 'tender', scene: [
      { n: "Junkyu was waiting in the lounge when S.E.E.S. came back from Tartarus at one in the morning. He'd been waiting there every night they went up, Mitsuru said. On the sofa with a blanket, very upright, not sleeping, the way you'd wait at an airport for a flight that kept getting delayed." },
      { s: 'mitsuru', f: 'neutral', t: "I've told him the guesthouse has heating and beds. He's thanked me for the information." },
      { n: "He stood up when they came in. He counted them. Solar saw him do it, his lips moving, his eyes going from face to face, one, two, three, all the way along. He got to Jihoon and stopped, and his whole body loosened, and then he saw the bandage on Jihoon's arm and tightened again." },
      { s: 'junkyu', f: 'surprised', t: "Jihoon! Your arm!" },
      { s: 'jihoon', f: 'neutral', t: "It's nothing. It's a scratch. It's a big scratch. I'm fine. I'm going to bed. Light of all your lives. Goodnight." },
      { n: "He went up. He took the stairs two at a time, the way you'd take them if your arm didn't hurt, which was how Solar knew it did. Junkyu watched him go with his hands pressed together in front of his mouth, and then turned to Solar, still in her armband, still smelling of the tower." },
      { s: 'junkyu', f: 'sad', t: "Is he okay? Really? He won't tell me. He never tells me. He tells you." },
      { choose: [
        { t: "He's okay. He was brave.", notes: 3, then: [
          { s: 'junkyu', f: 'neutral', t: "He's always brave. That's the problem. He's brave and he's loud and he doesn't stop." },
          { s: 'junkyu', f: 'sad', t: "I wonder if he's okay. I always wonder that. Even at home. Even when he's being the worst." }
        ] },
        { t: "You should ask him yourself.", notes: 2, then: [
          { s: 'junkyu', f: 'neutral', t: "I do. He says *i'm fine.* Like you do. You two say it the same way. It's so annoying." }
        ] },
        { t: "He took a hit meant for me.", notes: 3, then: [
          { s: 'junkyu', f: 'surprised', t: "..." },
          { s: 'junkyu', f: 'neutral', t: "Yeah. Yeah, he would. He'd never say. He'd say it was an accident and he was aiming for something cooler." },
          { s: 'junkyu', f: 'sad', t: "Thank you for telling me. He wouldn't have." }
        ] }
      ] },
      { s: 'junkyu', f: 'sad', t: "I can't go up there. The thing didn't happen to me. The light thing, with the gun that isn't a gun. It happened to Jihoon. It didn't happen to me. I just wait. Every night. On the sofa. I'm useless." },
      { n: "He said it plainly, to the blanket in his hands. Not looking for comfort. Just stating a fact, like the time." },
      { choose: [
        { t: "You counted us. When we came in.", notes: 3, flag: { 'junkyu-counter': true }, then: [
          { s: 'junkyu', f: 'surprised', t: "...You saw that?" },
          { s: 'solar', f: 'neutral', t: "Somebody needs to be here to count. So we know we all came back. That's a job." },
          { s: 'junkyu', f: 'sad', t: "..." },
          { s: 'junkyu', f: 'happy', t: "...Okay. Okay. That's my job. I'm the counter. I'll be here every night. I'll count everybody." },
          { n: "Mitsuru, in the doorway to the command room with her coat still on, said nothing at all, and went upstairs, and came back down five minutes later with a second blanket and a proper pillow and put them on the end of the sofa without a word, which was, in Mitsuru, the equivalent of a medal." }
        ] },
        { t: "(Sit down on the sofa. Share the blanket.)", notes: 3, then: [
          { n: "She sat down beside him. He held up the edge of the blanket without a word. They sat under it, her still in her armband, him in his navy blazer, and he leaned his head on her shoulder, and was asleep in about four minutes, like he'd been waiting for permission all night." }
        ] },
        { t: "Useless people don't wait up.", notes: 2, then: [
          { s: 'junkyu', f: 'neutral', t: "...That's a Jaehyuk thing to say. Logical." },
          { s: 'junkyu', f: 'happy', t: "I'm going to think about it. I'm going to think about it really hard. On the sofa." }
        ] }
      ] },
      { n: "She went up to bed at half past one. Her phone buzzed before she'd gotten her boots off. The old chat. Junkyu, from the sofa, one floor down." },
      { phone: [
        { from: 'junkyu', t: "junkyute: @jihoney hope ur ok jihoon! even if ur a meanie" },
        { from: 'jihoon', t: "jihoney: go to sleep junkyu" },
        { from: 'jihoon', t: "jihoney: im fine" },
        { from: 'junkyu', t: "junkyute: u say it like sol says it" },
        { from: 'asahi', t: "asanoonecares: some of us are trying to sleep in a guesthouse with a radiator that sounds like a man screaming" },
        { from: 'jaehyuk', t: "jaehyukkie: Goodnight, Jihoon. Goodnight, everyone." },
        { from: 'jihoon', t: "jihoney: ......thanks junkyu" }
      ], contact: 'PARK JIHOON HATE CLUB' },
      { n: "She read the last line twice. She had the feeling, sitting on the edge of her bed with one boot off, that it was going on a list somewhere, one floor down, in a notes app, with a date next to it." }
    ] },

    { after: '12/6', title: '6: six-thirty', place: 'Iwatodai · Riverside', time: 'Early Morning', music: 'sun', scene: [
      { n: "She'd invited him. That was the whole event. At six-fifteen on Sunday morning she'd stood outside the guesthouse by the station with Koromaru's leash in one hand and texted *walk?* and nothing else, and he'd come out through the front door eleven seconds later in pajamas covered in cartoon dogs and a blazer over the top, with his hair flat on one side, and stared at her like she'd handed him a winning lottery ticket." },
      { s: 'junkyu', f: 'surprised', t: "You INVITED me. You never invite anybody! You just go! At six-thirty! And then you post a picture of Nana and the sky and we all comment!" },
      { s: 'junkyu', f: 'happy', t: "Hyunsuk asks you to give him a beef dog biscuit. Every time. And I say I wish you'd invite me. Every time. And you NEVER do! Let me get my shoes! Let me get my— I have shoes. I'm wearing shoes. Okay. Go. Go go go." },
      { n: "So now they were on the river path in the early cold, the sky going from black to gray to a thin pale gold over the bay, Koromaru out in front with his tail going like a flag, and the birds coming up out of the reeds by the water in small loud groups, and Junkyu was walking with his face turned up to them like a kid at a fireworks show." },
      { n: "Her hand went into her coat pocket for something. A biscuit. There was one there, because Ken kept her stocked, but her hand had gone looking for a different one, a bigger one, bone-shaped, for a bigger dog, and she stood on the path for a second with the wrong biscuit in her fingers, feeling the shape of the right one." },
      { s: 'junkyu', f: 'happy', t: "The birds! Sol, the birds are so loud! Is it always like this? Is this why you go? Is this the secret?" },
      { choose: [
        { t: "That's the secret. I like the birds.", notes: 3, then: [
          { s: 'junkyu', f: 'surprised', t: "..." },
          { s: 'junkyu', f: 'happy', t: "You said it! You SAID it! You always said it was for the exercise! In the chat! *i need the exercise!!* And it was the BIRDS!" }
        ] },
        { t: "(Throw the ball for Koromaru.)", notes: 2, then: [
          { n: "Koromaru brought it back. Junkyu threw it next, badly, into the river. Koromaru looked at the river and then at Junkyu with enormous disappointment, and Junkyu apologized to him for a full minute." }
        ] },
        { t: "It's quieter than people.", notes: 2, then: [
          { s: 'junkyu', f: 'neutral', t: "Oh. Yeah." },
          { n: "He stopped talking. He actually stopped, for almost a whole minute, which she would learn later was some kind of record, and they listened to the birds be louder than people, together, and it was very nice, and then he said *sorry, I'm being so quiet*, and the record ended." }
        ] }
      ] },
      { n: "Halfway along the path a small brown dog came out from under a bench with nobody attached to it, and Koromaru went toward it the way Koromaru went toward anything, cheerfully, all at once, and the small dog yipped, and Solar's whole body went tight before she'd decided anything at all. Her hand was already reaching for the leash. Her mouth was already making the shape of a name that wasn't Koromaru." },
      { n: "The small dog's owner came out from behind the bench, an old man with a newspaper, and laughed, and said they were only playing. They were only playing. Koromaru sat down, pleased with himself. Solar's hand was shaking a little on the leash." },
      { s: 'junkyu', f: 'surprised', t: "Oh. Oh, it's the thing. It's the thing from the chat. Nana made a friend and then the owner came out and yelled at you!" },
      { s: 'junkyu', f: 'neutral', t: "And it turned out the boy who yelled was—" },
      { n: "He stopped. He looked at her, very fast, and then at the river, and closed his mouth with the expression of somebody standing on the edge of a story that wasn't his to tell." },
      { s: 'junkyu', f: 'happy', t: "Never mind! Not my place! You'll get there!" },
      { s: 'junkyu', f: 'neutral', t: "I miss Nana. I miss him so much. He's so big and so fluffy his legs look silly, and he sits on everybody. He sat on me once for an hour and I didn't move because he looked so comfortable." },
      { s: 'junkyu', f: 'sad', t: "I always wanted to come on the walks. I asked in the chat. I never asked for real. I thought you'd say no. I thought it was a you-and-Nana thing. Or a you-and-Jihoon thing, when he gets up, which is never." },
      { choose: [
        { t: "When we're home, come every Sunday.", notes: 3, flag: { 'junkyu-sundays': true }, then: [
          { s: 'junkyu', f: 'surprised', t: "..." },
          { s: 'junkyu', f: 'happy', t: "EVERY Sunday? Really? Okay. Okay okay okay. I'm going to set an alarm. I'm going to set nine alarms." },
          { n: "He didn't ask *if* they went home. He said it like it was already true. She noticed, and let him." }
        ] },
        { t: "It was never a you-and-Nana thing. I just didn't ask.", notes: 3, then: [
          { s: 'junkyu', f: 'sad', t: "...Yeah. You don't ask people for things. Even nice things. Even walks." },
          { s: 'junkyu', f: 'happy', t: "Okay! Then I'll ask! I'm good at asking! Can I come on the walk next Sunday?" },
          { s: 'solar', f: 'neutral', t: "Yes." },
          { s: 'junkyu', f: 'happy', t: "YAY." }
        ] },
        { t: "(Hand him the leash.)", notes: 3, then: [
          { n: "She held it out. He looked at it like she was handing him something enormous, which, she supposed, she was, and took it with both hands, and Koromaru, sensing new management, immediately pulled him toward a pigeon." },
          { s: 'junkyu', f: 'happy', t: "He's walking me! Sol! He's walking me! This is the best day of my LIFE!" }
        ] }
      ] },
      { n: "On the way back the sun came up properly over the bay, flat and gold across the water, and Junkyu took a picture of Koromaru against it, and sent it to the chat, and the chat, at seven in the morning on a Sunday, lost its mind." },
      { phone: [
        { from: 'junkyu', t: "junkyute: SHE INVITED ME!!!!!!!!" },
        { from: 'hyunsuk', t: "geniusuk: PLEASE GIVE HIM A BEEF DOG BISCUIT FOR ME" },
        { from: 'asahi', t: "asanoonecares: that's not even her dog" },
        { from: 'junkyu', t: "junkyute: IT COUNTS" },
        { from: 'jihoon', t: "jihoney: why was i not informed of a family walk" },
        { from: 'jihoon', t: "jihoney: i am the father" }
      ], contact: 'PARK JIHOON HATE CLUB' }
    ] },

    { after: '12/13', title: '7: cards', place: 'Iwatodai Dorm · Dining Room', time: 'Evening', music: 'joy', scene: [
      { n: "Junkyu was making Christmas cards for everyone in the dorm. And the guesthouse. And the old man who swept the shrine. And Ken's teacher, whom he had never met. The dining table was covered in construction paper and glitter glue and stickers from the hundred-yen shop, and Junkyu was in the middle of it with glitter on his face, working with the focus of a monk illuminating a manuscript." },
      { ifMet: 'sunoo', then: [
        { n: "There was a stack for Yeobo's, too, a whole stack, one each for Sunoo and his friends, and one for Sunoo's grandmother, who wasn't in this world, which he'd written anyway, because, he said, Sunoo could keep it for her." }
      ] },
      { s: 'junkyu', f: 'happy', t: "Sol! Help! I need someone who can draw! I can't draw! Look at this reindeer!" },
      { n: "The reindeer looked like a chair with a grudge." },
      { choose: [
        { t: "(Fix the reindeer.)", notes: 3, then: [
          { n: "She fixed it. Two lines. A nose. It still looked like a chair, but now it looked like a chair that was happy, and Junkyu looked at it like she'd raised it from the dead." },
          { s: 'junkyu', f: 'happy', t: "You're a GENIUS. That's for Mitsuru. Mitsuru gets the best reindeer." }
        ] },
        { t: "It's perfect. Don't change it.", notes: 3, then: [
          { s: 'junkyu', f: 'surprised', t: "Really?" },
          { s: 'solar', f: 'neutral', t: "It looks like you made it. That's the point." },
          { s: 'junkyu', f: 'happy', t: "...Okay. Okay! That's for Akihiko. He'll understand. He's got a face like that reindeer when he's thinking." }
        ] },
        { t: "Why so many?", notes: 2, then: [
          { s: 'junkyu', f: 'neutral', t: "We never did stuff at home. The six of us. Dances. Anything with a sign-up sheet. We always skipped. Asahi says it's a waste of time. We went to one, finally, this year, and nobody knew what to do, and we just sat at the table." },
          { s: 'junkyu', f: 'sad', t: "I always wanted to go. I said so in the chat once. Nobody listened. So this year I'm doing Christmas. All of it. For everybody. And nobody can skip it, because it comes in an envelope." }
        ] }
      ] },
      { n: "They worked through the evening. Fuuka came and helped and turned out to be a genius with the glitter glue. Junpei came and helped and turned out to be a menace with the glitter glue. Koromaru came and lay under the table and ended the night faintly gold." },
      { n: "Asahi came in at nine for a glass of water and looked at the table and said it looked like a craft store had been in a car accident. Then he sat down. Then, after about ten minutes of saying nothing, he picked up a pen and wrote something in the card for Hyunsuk, folded it shut before anybody could read it, and went back upstairs without his water." },
      { s: 'junkyu', f: 'happy', t: "He's never done that before. Not once. I don't know what it says. Hyunsuk's going to pretend it says *ok.* I think it's longer." },
      { n: "At the end Junkyu stacked them all, forty-one cards, and went through them one more time, checking every name, and there was one left at the bottom that he hadn't written a name on, with a little sun drawn on the front, very carefully, with a face, and two pink cheeks." },
      { s: 'junkyu', f: 'neutral', t: "That one's for you. I don't know what to write in it yet." },
      { s: 'junkyu', f: 'sad', t: "Everything I want to write is *please come home.* And I don't want to write that. Because then it's a card about me." },
      { choose: [
        { t: "Write it anyway.", notes: 3, flag: { 'junkyu-card': true }, then: [
          { s: 'junkyu', f: 'surprised', t: "..." },
          { s: 'junkyu', f: 'sad', t: "...Okay." },
          { n: "He wrote it. Small. In the corner. *please come home.* And then, underneath, bigger, *(but only if u want to!!!) (i support u in whatever!!!) #teamsolar.* And then he didn't give it to her. He put it in his blazer pocket, inside, over his heart, and patted it once." },
          { s: 'junkyu', f: 'neutral', t: "Not yet. It's not done. It's missing something. I'll know what when I know." }
        ] },
        { t: "Write what you'd write at home.", notes: 3, then: [
          { s: 'junkyu', f: 'neutral', t: "At home I'd write *merry christmas sol!!! ice cream and hugs!!!*" },
          { s: 'junkyu', f: 'happy', t: "...Okay. That's what I'll write. That's still true here. That's true everywhere." },
          { n: "He wrote it, in enormous letters that didn't fit and went around the back, and gave it to her right there, a week and a half early, because he said he'd never been able to keep a present in his life and wasn't going to start now." }
        ] },
        { t: "Leave it blank. Like my page.", notes: 2, then: [
          { s: 'junkyu', f: 'surprised', t: "Your page?" },
          { s: 'solar', f: 'neutral', t: "Long story. Somebody keeps a book with everyone in it. Mine's empty." },
          { s: 'junkyu', f: 'serious', t: "...Then I'll write in mine for both of us. Until you can. That's allowed. That's what cards are for." }
        ] }
      ] },
      { n: "She helped him carry the stack up to the lounge to sort into piles for delivery, and on the landing, in the dim, with forty cards in her arms, she had a feeling like a missed step. Glitter on a table. A boy across from her with his tongue between his teeth, concentrating. A much smaller stack of cards. Five of them. Six. She couldn't see the names on them. She knew one of them was hers." },
      { n: "It went as fast as it came. She stood on the landing until it was all the way gone, and then went on up, and didn't say anything, and he didn't ask, which was how she knew he'd seen it on her face anyway." }
    ] },

    { after: '12/27', title: '8: asahi', place: 'Paulownia Mall · Arcade', time: 'Evening', scene: [
      { n: "The arcade between Christmas and New Year was nearly empty, half its machines switched off for maintenance, the carpet's neon planets dull under the work lights, and Asahi was sitting alone at the rhythm game in the corner, not playing it, with his hood up, and Junkyu had stopped just inside the door to look at him." },
      { ifMet: 'cherry', then: [
        { n: "Junkyu's sleeves still had glitter in the cuffs from Christmas Eve, which Cherry had spent dragging him round every loud place in Iwatodai that was open, and a paper crown from somewhere was folded flat in his blazer pocket. He looked tired in the good way. Then he looked at Asahi, and stopped looking it." }
      ] },
      { s: 'junkyu', f: 'sad', t: "He's been like that all day. He won't talk to anybody. Not even Hyunsuk. Hyunsuk's worried. Hyunsuk never worries." },
      { s: 'junkyu', f: 'neutral', t: "Can you— can you go sit with him? He likes you. He'd never say. He's mean to you because he likes you. That's his system." },
      { choose: [
        { t: "Come with me.", notes: 3, then: [
          { s: 'junkyu', f: 'surprised', t: "Me? He's mean to me the most!" },
          { s: 'solar', f: 'neutral', t: "That means he likes you the most." },
          { s: 'junkyu', f: 'sad', t: "...Oh. Oh no. Okay." }
        ] },
        { t: "(Go sit with Asahi.)", notes: 2, then: [
          { n: "She went. Junkyu followed about thirty seconds later anyway, very quietly, like a cat that had been told to stay and had considered it." }
        ] }
      ] },
      { n: "She sat down next to Asahi at the dead rhythm game. Junkyu sat down on Asahi's other side, very quietly, which for Junkyu was a feat of enormous discipline." },
      { s: 'asahi', f: 'neutral', t: "...What." },
      { s: 'junkyu', f: 'neutral', t: "Nothing. We're sitting." },
      { s: 'asahi', f: 'neutral', t: "Sit somewhere else." },
      { s: 'junkyu', f: 'happy', t: "No!" },
      { n: "They sat. The work lights buzzed. After a long time Asahi said, to the dead screen, that his mom would be up by now. If it was morning there. If it was anything there. She got up at five. She'd be making tea. She'd be looking at his door." },
      { s: 'asahi', f: 'sad', t: "I didn't tell her I was going out that night. I just went. Because Jihoon texted in caps. I didn't even leave a note." },
      { choose: [
        { t: "It's still the same night there.", notes: 3, then: [
          { s: 'asahi', f: 'neutral', t: "You don't know that." },
          { s: 'solar', f: 'neutral', t: "No. But your phone says so. Everyone's does. Let's believe the phones." },
          { s: 'asahi', f: 'neutral', t: "...Fine. We believe the phones. That's stupid. Fine." }
        ] },
        { t: "(Put a coin in the game. Make him play.)", notes: 3, flag: { 'junkyu-coin': true }, then: [
          { n: "She found a coin and put it in. The machine woke up, lights and noise. Asahi looked at it, and at her, and sighed through his nose, and played. Badly. Then not badly. Junkyu cheered so loud that a maintenance man came out of the back to see what had happened." },
          { ifFlag: 'junkyu-rhythm', then: [
            { s: 'asahi', f: 'neutral', t: "You still owe me a rematch. Don't think I forgot." }
          ] }
        ] },
        { t: "You said my dog was the only nice thing on the timeline.", notes: 3, then: [
          { s: 'asahi', f: 'surprised', t: "...Who told you that." },
          { n: "Junkyu looked at the ceiling with great interest. Asahi looked at him for a long time, and then put his face in his hands, and his shoulders went, once, and it might have been a laugh." },
          { s: 'asahi', f: 'sad', t: "It was a nice dog. That's all. It was six in the morning and everything else on there was Jihoon. Don't make it a thing." }
        ] }
      ] },
      { n: "He took his hood down, at some point. Neither of them mentioned it." },
      { ifFlag: 'route-H', then: [
        { s: 'asahi', f: 'neutral', t: "The star thing. Junkyu says it's shining now. He says he can feel it in his teeth. That's not a real thing, Junkyu." },
        { s: 'junkyu', f: 'happy', t: "It IS a real thing! It's warm! Like standing next to a vending machine!" },
        { s: 'asahi', f: 'neutral', t: "So we're going home. With you. Great. Good. I'll be mean to you in person, in our own country, like a normal person." },
        { n: "He said it to the screen. He said it like it was nothing. His hands, on the buttons, weren't moving at all." }
      ], else: [
        { ifFlag: 'route-true', then: [
          { s: 'junkyu', f: 'neutral', t: "The star's doing a chord. With the other two. Jaehyuk says it's a chord. Jaehyuk knows things." },
          { s: 'asahi', f: 'neutral', t: "Nobody knows what that means. Not even her. Look at her face. She doesn't know either." },
          { s: 'junkyu', f: 'happy', t: "It sounds like everybody. That's what it sounds like. Everybody at once." }
        ], else: [
          { s: 'asahi', f: 'neutral', t: "It went quiet. The star. On the night with the bells." },
          { s: 'asahi', f: 'neutral', t: "Junkyu cried for an hour in the guesthouse bathroom with the fan on so we wouldn't hear. We heard. He's not going to tell you. I'm telling you." },
          { s: 'junkyu', f: 'surprised', t: "ASAHI." },
          { s: 'junkyu', f: 'sad', t: "...It's okay. It's okay! I support you in whatever. I said that at home. I meant it at home. I mean it here. That's how meaning it works." }
        ] }
      ] },
      { n: "Walking out, Junkyu held both their sleeves, one in each hand, like a kid crossing a street between two parents, and Asahi let him, and didn't say anything mean the whole way to the station, which Junkyu said afterward was a Christmas miracle, two days late." }
    ] },

    { after: '1/10', title: "9: i'm scared", place: 'Iwatodai Dorm · Rooftop', time: 'Night', music: 'night', scene: [
      { n: "He'd come up to the roof to cry. He told her that later. He'd come up because it was the only place in the dorm where nobody would hear, and he hadn't counted on her already being up there, at the railing, in the cold, in her coat, and by the time he'd seen her it was too late, he was already crying, so he just kept going." },
      { s: 'junkyu', f: 'sad', t: "Sorry. Sorry. I'm fine. I'm totally fine. It's the wind." },
      { s: 'solar', f: 'neutral', t: "There isn't any wind." },
      { s: 'junkyu', f: 'sad', t: "...It's a little wind." },
      { n: "He came and stood next to her at the railing and cried, and she let him, and didn't say anything, and after a while he wiped his face on his blazer sleeve and took a big shaky breath like a kid at the end of a tantrum. Below them the city went on glittering in the cold. The new year was ten days old. It still smelled of fireworks somewhere, faintly, under the frost." },
      { ifFlag: 'route-H', then: [
        { s: 'junkyu', f: 'neutral', t: "You're coming home. I know. Everybody knows. The star's so bright I can feel it when I'm brushing my teeth." },
        { s: 'junkyu', f: 'sad', t: "And I'm scared. I'm so scared. I'm scared you'll come home and you'll be sad. Everybody's going to need the candidate again. Your parents. The school. The posters. And you'll do the face. The poster face. You'll do it so good nobody can tell." },
        { s: 'junkyu', f: 'sad', t: "And I'm scared I'll wake up at home and I won't remember any of this. The dorm. The signs. Koromaru. And I'll look at you doing the face and I won't know why it makes me sad." }
      ], else: [
        { ifFlag: 'route-true', then: [
          { s: 'junkyu', f: 'neutral', t: "All three of them are ringing together now. Hyunsuk says it's a chord. Then he says nobody knows what it means. Then he says it again, like saying it twice helps." },
          { s: 'junkyu', f: 'sad', t: "And I'm scared it's too big. I'm scared it's too big for one person. Even you. Even you with the gun that isn't a gun. I'm scared you'll try to carry all of it, because you always carry all of it, and nobody'll be able to see how heavy it is because you'll be smiling." },
          { s: 'junkyu', f: 'sad', t: "And I'm scared I'll go home and wake up and I won't remember any of this. And I won't know why I'm sad." }
        ], else: [
          { s: 'junkyu', f: 'neutral', t: "You're not coming. I know. I'm not mad. I'm not! I could never be mad at you. I tried once in the chat and I lasted four messages." },
          { s: 'junkyu', f: 'sad', t: "I'm just scared. I'm scared I'll go home and wake up and I won't remember any of this, and I won't know why I'm sad. And I'm scared about Nana. Dogs know. Jihoon says he's fine. Jihoon says that about everything." },
          { s: 'junkyu', f: 'sad', t: "And I'm scared you'll be sad here, too, sometimes. And I won't be here to ask." }
        ] }
      ] },
      { s: 'junkyu', f: 'neutral', t: "I'm not asking you to change anything. I'm not. I said I'd never ask. I'm just scared. Out loud. I don't know what to do with it." },
      { choose: [
        { t: "Be scared with me. I'm scared too.", notes: 3, then: [
          { s: 'junkyu', f: 'surprised', t: "You are?" },
          { s: 'solar', f: 'neutral', t: "All the time." },
          { s: 'junkyu', f: 'sad', t: "...Okay. Okay. Then we're both scared. Together. That's better. That's a little better." }
        ] },
        { t: "(Hug him. Ask first.)", notes: 3, then: [
          { s: 'solar', f: 'neutral', t: "Can I hug you? I'm asking." },
          { s: 'junkyu', f: 'sad', t: "..." },
          { n: "He made a sound that was half a laugh and half a sob and threw his arms around her so hard they both bumped into the railing, and held on, and she held on back, and over his shoulder the city glittered on in the cold like it didn't know anything." },
          { ifFlag: 'junkyu-hug-list', then: [
            { s: 'junkyu', f: 'happy', t: "...That's my line. Asking first. You stole my line. Count it. Number two hundred and six. I've been keeping it. I keep everything." }
          ], else: [
            { s: 'junkyu', f: 'happy', t: "...That's my line. Asking first. You stole my line. I'm going to tell everyone." }
          ] }
        ] },
        { t: "Tell me something stupid. From home.", notes: 3, then: [
          { s: 'junkyu', f: 'surprised', t: "Oh. Oh, that's easy. That's the easiest one." },
          { s: 'junkyu', f: 'neutral', t: "Class. We had one together. Somebody was staring at you. For like ten minutes. And I texted you under the desk, *i dont want to alarm you and dont look but.* And you looked. Immediately. Right at him." },
          { s: 'junkyu', f: 'happy', t: "I said don't look! I said it twice! You looked both times! You always look!" },
          { n: "She didn't remember it. She tried. It wasn't there, not even the shape of it. But her chin had come up, a little, toward the far end of the roof, the way you'd look at someone you'd been told not to, and he saw it, and laughed, and didn't say anything." }
        ] }
      ] },
      { ifFlag: 'route-H', then: [
        { s: 'junkyu', f: 'neutral', t: "When we're home. If you do the face. I'm going to ask. Every time. *are u ok solar.* Even if you say yes. Even if you say it in capitals." },
        { s: 'junkyu', f: 'happy', t: "That's not me asking you to come home. You're already coming. That's just me being annoying. That's allowed." }
      ], else: [
        { s: 'junkyu', f: 'neutral', t: "Whatever you picked. I'm on your team. I made the sign. It's binding. It's binding in two worlds. Asahi says that's not how signs work. Asahi doesn't make signs." }
      ] },
      { n: "They went down when the cold got into their hands. On the stairs he walked one step above her, the only time all year he'd been taller than her, and pointed it out, and walked the whole flight like that, very pleased, holding on to the rail." }
    ] },

    { after: '1/24', title: '10: icecreamandhugs', place: 'Paulownia Mall · Arcade', time: 'Evening', music: 'tender', scene: [
      { n: "The arcade was loud again. All its machines back on, every cabinet shouting its own song over every other cabinet's song, the neon planets on the carpet bright, and Junkyu was at the dance game, losing to a ten-year-old, cheering for the ten-year-old, exactly the way he'd been the night after he came through." },
      { n: "He saw her come in and jumped off the platform mid-song, and the machine booed him, and he didn't care, and he was already running." },
      { n: "And she knew him." },
      { n: "It didn't come like the others came, all at once, a wave. It came in pieces, small, in the order he'd given them to her, like he'd been laying them out on a table all winter so she could find them. A chat going off before school, all capitals, and one voice under all of them, lowercase, asking if she was okay. A boy at the next desk typing *dont look* about somebody staring at her, and then *i told you dont look.* A hand patting her back by her locker, *if you keep looking like that, you'll get wrinkles.* A kiss blown across an assembly hall while the principal was still talking. A sign held up in a cafeteria for somebody else's question. A gym full of fairy lights and a voice beside her asking the whole table, hopefully, *guys, should we be dancing? does anyone want to dance?*" },
      { n: "*glad ur ok sol and i support you in whatever.*" },
      { n: "*i care!*" },
      { n: "She said it before he reached her. She said it first. For once." },
      { s: 'solar', f: 'neutral', t: "Are you okay, Junkyu? Do you need ice cream and hugs?" },
      { n: "He stopped. In the middle of the arcade, a meter from her, arms already out. He stopped so suddenly that a boy behind him with a cup of tokens nearly ran into his back." },
      { s: 'junkyu', f: 'surprised', t: "..." },
      { s: 'junkyu', f: 'sad', t: "That's my line." },
      { s: 'junkyu', f: 'sad', t: "That's my line, Sol. That's mine. I say that. I always say that. You never say that. You just say *YES that is exactly what i need* in capitals." },
      { s: 'solar', f: 'neutral', t: "I know. I remember. It's your turn." },
      { n: "He burst into tears. In the middle of the arcade, under the lights, with his arms still out, and then he was hugging her, around the middle, his cheek against her shoulder, the whole of him warm and solid and shaking and not letting go, and she held on back and didn't let go either, and somewhere behind them Asahi said, very quietly, *oh my God,* and Hyunsuk laughed, wet, and Jaehyuk said nothing at all and took his glasses off to clean them for a very long time, and Jihoon, by the crane game, put his forehead against the glass and stayed there." },
      { choose: [
        { t: "Ice cream first or hugs first?", notes: 3, then: [
          { s: 'junkyu', f: 'happy', t: "HUGS. Hugs first. I'm already doing the hugs. Then ice cream. Then more hugs. That's the order. That's always been the order." }
        ] },
        { t: "Thank you, Junkyu.", notes: 3, then: [
          { s: 'junkyu', f: 'sad', t: "...For what? You have to say for what. That's the rule." },
          { s: 'solar', f: 'neutral', t: "For asking first. Every time. Even when I said yes in capitals." },
          { s: 'junkyu', f: 'happy', t: "...That one's going on the list. That one's going at the top. I'm moving everything down. I'm counting it forever." }
        ] },
        { t: "You said don't look. I looked.", notes: 3, then: [
          { s: 'junkyu', f: 'surprised', t: "..." },
          { s: 'junkyu', f: 'sad', t: "You ALWAYS look! I said don't look and you looked RIGHT AT HIM and I nearly died under that desk!" },
          { n: "He was laughing and crying at once, the way he did everything, all of it, at full volume, and she was too, a little, which she didn't do, and didn't stop." }
        ] }
      ] },
      { ifFlag: 'junkyu-card', then: [
        { n: "When he finally let go he reached into his blazer, inside, over his heart, and took out a card with a little sun on the front, a bit bent now, a month old, and handed it to her, and looked away while she opened it." },
        { n: "*please come home. (but only if u want to!!!) (i support u in whatever!!!) #teamsolar.* And under that, in different ink, newer, very small: *found the missing thing. it was u knowing who i am. ok now it's done.*" }
      ] },
      { ifFlag: 'junkyu-counter', then: [
        { n: "The others had drifted over by then, all of them, the whole club, the way they always ended up in one loud knot wherever she was. Junkyu looked around at them, and she watched his lips move, one, two, three, four, five, all the way along, and stop on her. Six." },
        { s: 'junkyu', f: 'happy', t: "Everybody. That's everybody. I counted." }
      ] },
      { n: "He didn't have money for the ice cream. He found this out at the stand by the fountain, patting every pocket twice, and turned around and yelled across the atrium for Hyunsuk, who came over, and sighed, and paid, and bought one for everyone, and didn't say anything about the six hundred yen at all." },
      { ifFlag: 'route-H', then: [
        { s: 'junkyu', f: 'happy', t: "When we're home I'm going to ask you to every dance. Every single one. And you're going to say it's a waste of time and Asahi's going to say it's a waste of time and we're going to GO." },
        { s: 'asahi', f: 'neutral', t: "We're not going." },
        { s: 'junkyu', f: 'happy', t: "We're going!" },
        { n: "Asahi didn't argue. That was how she knew they were going." }
      ], else: [
        { ifFlag: 'route-true', then: [
          { s: 'junkyu', f: 'neutral', t: "When it happens. The everybody thing. I'm going to hold on to your sleeve. Like a kid at a crossing. So you don't have to carry the whole thing on your own. Just a sleeve's worth. Okay?" },
          { s: 'junkyu', f: 'happy', t: "Okay. I didn't ask that. I told you. That's new. I'm trying new things." }
        ], else: [
          { s: 'junkyu', f: 'neutral', t: "When we go. On the night. I'm going to wave. Until the door shuts. With both hands. So you know. So whatever you're doing right then, you look over and there's somebody waving." },
          { s: 'junkyu', f: 'sad', t: "And I'm going to remember the line. Even if I don't remember anything else. Even if I wake up and it's just a normal morning. Somebody's going to text me at six AM and I'm going to say *do u need ice cream and hugs* and I won't know who I learned it from." },
          { s: 'junkyu', f: 'happy', t: "...I learned it from you. You never said it. But I learned it from you. From watching you need it." }
        ] }
      ] },
      { n: "They ate it on the rim of the fountain, all six of them, too close together, everybody's elbows in everybody else's ice cream, and nobody said anything about the count, or the night, or the door, and Junkyu leaned on her shoulder with his chin and asked, for the third time in ten minutes, if she was okay." },
      { n: "She said yes. He didn't believe her. He never had. That was the whole thing about him. That was, she understood now, all the way down, the whole thing." }
    ] }
  ],

  afterMax: [
    { title: 'hug count', place: 'Paulownia Mall · Central Atrium', time: 'Evening', scene: [
      { ifFlag: 'junkyu-hug-list', then: [
        { n: "Junkyu showed her the list on his phone. *HUGS (SOL).* Not thank-yous anymore. Hugs. Dated, every one, some of them with notes. *(roof, it was cold).* *(she asked first!!!!!).* *(asahi was there and pretended he wasn't).* Two hundred and forty-one." }
      ], else: [
        { n: "Junkyu showed her the list on his phone. He'd started a new one at some point without telling her. Not thank-yous anymore. Hugs. Dated. He'd backfilled it from memory, he said, which wasn't very scientific, but Jaehyuk had checked his methods and said they were acceptable. Two hundred and forty-one." }
      ] },
      { s: 'junkyu', f: 'happy', t: "I'm going for three hundred before the end of the month! Can I have one? I'm asking!" },
      { choose: [
        { t: "(Two. For efficiency.)", notes: 3, then: [
          { s: 'junkyu', f: 'happy', t: "TWO! Two hundred and forty-three! You're the best! You're the most efficient hugger I know!" }
        ] },
        { t: "Only if you buy the ice cream. With your own money.", notes: 3, then: [
          { s: 'junkyu', f: 'surprised', t: "...I have money! I have two hundred yen! I've been saving! Since Tuesday!" },
          { n: "It bought one cone. They split it. He counted that as a hug, too, on a technicality, and wrote the technicality down." }
        ] },
        { t: "How many is that a day?", notes: 2, then: [
          { s: 'junkyu', f: 'serious', t: "Not enough. That's the answer. The answer is always not enough." }
        ] }
      ] },
      { n: "Hyunsuk walked past with a tray of drinks, read the screen over Junkyu's shoulder without slowing down, and said it was the most deranged document he'd ever seen and that he wanted to be on a list like that someday, and kept walking before anyone could see his face." }
    ] },
    { title: 'sunday walk', place: 'Iwatodai · Riverside', time: 'Early Morning', scene: [
      { ifFlag: 'junkyu-sundays', then: [
        { n: "Six-thirty. The river path. Koromaru out in front. The birds coming up loud out of the reeds. He'd set nine alarms, as promised, and been ready at six, and had texted her a photograph of the nine alarms, as proof, at six-oh-one." }
      ], else: [
        { n: "Six-thirty. The river path. Koromaru out in front. The birds coming up loud out of the reeds. He'd asked, the night before, in the chat, in front of everybody, *can i come on the walk tmrw sol!!!*, and she'd said yes in front of everybody, and Asahi had said *gross*, and Junkyu had been ready at six." }
      ] },
      { s: 'junkyu', f: 'happy', t: "The birds! The birds again! They're so loud! Every Sunday they're so loud!" },
      { choose: [
        { t: "(Throw the ball. Let him throw the next one.)", notes: 3, then: [
          { n: "He threw it into the river again. Koromaru looked at him. He apologized. It was, she was coming to understand, the best part of the walk." }
        ] },
        { t: "(Just walk. Listen to the birds with him.)", notes: 3, then: [
          { n: "They just walked. He didn't say anything for nearly a whole minute, which was a record, and then said *this is the best,* very quietly, and then didn't say anything for another one." }
        ] },
        { t: "Tell me about Nana. Everything.", notes: 3, then: [
          { s: 'junkyu', f: 'happy', t: "EVERYTHING? Okay. He's big. He's so fluffy his legs look silly. He gets hyper when he meets a new friend and he forgets how big he is. He sits on your feet when somebody's yelling at you. He did it with that boy and the little dog, you said so in the chat. Sat right on your feet." },
          { s: 'junkyu', f: 'neutral', t: "That's how I knew he was a good dog. Before you ever said anything. You don't have to tell me things. The dog tells me." }
        ] }
      ] },
      { n: "On the way back he took a picture of Koromaru against the sun on the water and sent it to the chat, and the chat said what it always said, and Hyunsuk asked for a beef dog biscuit, and Junkyu read every message out loud to her, all the way home, in everybody's voice." }
    ] },
    { title: 'does anyone want to dance', place: 'Paulownia Mall · Arcade', time: 'Evening', scene: [
      { n: "The dance game was free. Nobody was on it. It stood in the corner of the arcade with its two lit-up platforms and its arrows blinking, playing its little demo song to nobody, and Junkyu stood in front of it with his hands clasped like it was a church." },
      { s: 'junkyu', f: 'neutral', t: "At home there was a dance. In the gym. With the little lights. We all went, for once, even Asahi, in a suit his parents made him wear. And nobody knew what to do. We just sat at the table." },
      { s: 'junkyu', f: 'sad', t: "And I said *guys, should we be dancing? does anyone want to dance?* And Asahi said nobody wanted to see that. And nobody danced. Well. Some people danced. Not me." },
      { s: 'junkyu', f: 'happy', t: "So. Sol. Does anyone want to dance?" },
      { choose: [
        { t: "(Get on the other platform.)", notes: 3, then: [
          { n: "She got on. He made a sound like a kettle. The song was something fast and stupid and very pink, and they were both terrible, gloriously, in completely different directions, and by the second chorus a small crowd of middle schoolers had gathered to watch, and by the third they were cheering, for him, mostly, because he was cheering for them back between arrows." },
          { s: 'junkyu', f: 'happy', t: "WE'RE DANCING. Sol! We're DANCING! At a dance!" },
          { s: 'solar', f: 'neutral', t: "This is an arcade." },
          { s: 'junkyu', f: 'happy', t: "IT COUNTS." }
        ] },
        { t: "(Hold out your hand, like it's the gym.)", notes: 3, then: [
          { n: "She held it out the way you would at a dance, palm up, a little formal, and he looked at it for a second like he didn't know what it was for. Then he took it, and they did a very slow and very bad box step in the middle of the arcade carpet among the neon planets while the dance game played its demo song to nobody, and he counted out loud, *one two three, one two three,* the whole time, so seriously, and didn't step on her once." }
        ] },
        { t: "Only if Asahi dances too.", notes: 2, then: [
          { s: 'junkyu', f: 'surprised', t: "...That's impossible. That's the most impossible thing you've ever said." },
          { n: "He went and got Asahi anyway. It took eleven minutes. Asahi danced for one song with his hood up and his face completely blank and got an A, and walked away without a word, and wouldn't discuss it, ever, with anyone." }
        ] }
      ] },
      { n: "Afterward he sat on the edge of the platform, breathing hard, red to the ears, delighted with himself, and said it was the best dance he'd ever been to, and that the gym one didn't count anymore, he was replacing it, this was the one now." }
    ] },
    { title: 'the list, the last page', place: 'Paulownia Mall · Central Atrium', time: 'Evening', scene: [
      { n: "He'd brought the notes app. Of course he had. He sat on the rim of the fountain with his knees together and his phone held in both hands, scrolling, past the hugs, past the thank-yous, down to a list she'd never seen, with no title." },
      { s: 'junkyu', f: 'neutral', t: "This one's things you did here. So somebody has them. In case." },
      { n: "*fixed the reindeer. let me hold koromaru's leash. invited me (!!!!!!!). beat asahi. sat with asahi. counted with me. asked first.* It went on. It was very long. He'd written down things she hadn't known anybody had seen." },
      { ifFlag: 'route-H', then: [
        { s: 'junkyu', f: 'happy', t: "When we're home I'm going to read it to you. Every time you do the poster face. So you remember you can do the other face too." },
        { s: 'junkyu', f: 'neutral', t: "And then I'm going to make you invite me on a walk. And then I'm going to make you go to a dance. I have a list for that too. It's a different list." }
      ], else: [
        { ifFlag: 'route-true', then: [
          { s: 'junkyu', f: 'neutral', t: "Hyunsuk says when it's over, whatever it is, maybe nobody remembers. He says that about everything now. Maybe this is the only copy." },
          { s: 'junkyu', f: 'happy', t: "So I made a copy. I emailed it to myself. And to you. And to Jaehyuk, because he never deletes anything." }
        ], else: [
          { s: 'junkyu', f: 'neutral', t: "It's for you. For after. I'm going to send it to your phone. You'll have it here, and I'll... I'll have the other one. Whatever's left of it." },
          { s: 'junkyu', f: 'sad', t: "Read it when you do the face. Okay? Promise. When you do the poster face here and nobody's there to ask." }
        ] }
      ] },
      { choose: [
        { t: "Add one. *bought the ice cream with his own money.*", notes: 3, then: [
          { s: 'junkyu', f: 'surprised', t: "That happened ONE TIME." },
          { s: 'solar', f: 'neutral', t: "It counts." },
          { n: "He typed it in. Then he hugged her, and didn't ask first, for the first time all year, and then pulled back in horror and asked, and she said yes, and he did it again, properly, and said that one was the real one." }
        ] },
        { t: "(Read the whole thing. Slowly.)", notes: 3, then: [
          { n: "She read it all. He watched her read it, which he'd always said was the worst part of giving anyone anything, and didn't look away once, and when she got to the bottom and looked up, he was already holding out the ice cream he'd gone and gotten while she read, with Hyunsuk's money, which Hyunsuk had just given him, without being asked, for once." }
        ] },
        { t: "I'm okay, Junkyu.", notes: 2, then: [
          { s: 'junkyu', f: 'neutral', t: "You're never okay when you say okay like that." },
          { s: 'junkyu', f: 'happy', t: "...But you're a little okay. I can tell. It's a different okay. I'm writing it down." }
        ] }
      ] }
    ] }
  ]
});
