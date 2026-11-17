/* Persona 3: Equinox · Miyawaki Sakura · XXI The World. Link data (femc-equinox-game.html). Format: link fields in
   assets/femc/game/core.js ("Links" header), scene lines in assets/femc/game/scene.js.
   Written: ranks 1–3. Rank 1 (after 6/27: she came through on 6/26, story-act2 'eqx-stage'; her home is Game Panic on
   Tuesday, Thursday and Saturday evenings, so 6/29 at the earliest). Rank 2 'tendencies' (after 8/17: Game Panic (she calls
   Asahi), the back streets (her prep sheet IWATODAI), the boarding house gate at supper (she calls the long table; Mrs. Oka
   has no tell), the post-office corner: the sentence gains a word, *and that's the one—*; reads eqx-table-op (the parents
   block, only before eqx-equinox) and eqx-sakura-sentence). Rank 3 'on the record' (after 9/14: Game Panic, then the closed
   arcade after ten, the toy microphone, *and that's the one who—*, her ask, the last train; branches hard on eqx-equinox
   (before: the mothers' aprons as a new tendency; after: she can't call anything since the bridge), also dead.shinjiro and
   eqx-persimmon for the walk home). Ranks 4–10 still to write. Shape: the stub fields from
   assets/femc/equinox/data/links.js. Card art (World) still to make.
   Shared memory: the Runners epilogue (she cast Solar's Kiriko at Regionals: "what a Suzu"), the strangers epilogue (mahjong
   nights, dry: "Don't do it again. It's insulting."), and the 6/26 atrium ("I was in the middle of a sentence").
   The hook: the sentence she was in the middle of when she was pulled through. She can't remember how it ends.
   Reads: ifEvent eqx-last-grain (7/27 morning) for one beat at the boarding house table.
   Flags this file sets: eqx-sakura-sentence (rank 1: Solar asks to be there when she finishes it; read by rank 2).
   Rank 2: eqx-sakura-tells-kept | eqx-sakura-tells-mitsuru | eqx-sakura-tells-stop (what she does with her sheet; cosmetic).
   Rank 3 records her ask ("stay together", her version: say it into the mic, on the record): tally asks.sakura yes / no /
   choose (+ cakes / choose / asked), flag eqx-asked-sakura (hidden "Stay. Please.", asked +1). Nothing reads the new ones yet.
   For later ranks: the sentence so far, *and that's the one who—* (never finish it before her last ranks); the prep sheet
   (Mrs. Oka is the one person she can't get a tell off); the toy microphone (in her jacket on yes / asked / choose, back in
   the case on no); "keep giving me some tape" (the keep-her-alive hint). Speakers without a portrait: Asahi speaks only in
   narration here. */
(window.FEMC_GAME_LINKS ||= []).push({
  id: 'sakura', name: 'Miyawaki Sakura', short: 'Sakura', arcana: 'World', numeral: 'XXI', from: 'Runners · strangers · Hoax', kind: 'arrival',
  world: 'RSH', romance: null, arrives: '6/26', starts: '6/27', lodging: 'boarding',
  home: { area: 'mall', spot: 'Game Panic', slot: 'evening', days: [2, 4, 6],
          hint: 'Tuesday, Thursday and Saturday evenings, at Game Panic, commentating other people’s games whether they like it or not.' },
  approach: "Behind two middle-schoolers hammering a fighting cabinet at Game Panic a young woman is leaning on the next machine with her arms folded, talking low and fast and perfectly evenly about everything they're doing wrong, and neither of them has worked out yet that they've stopped minding.",
  ranks: [
    { after: '6/27', title: '1: dead air', place: 'Paulownia Mall · Game Panic', time: 'Evening', music: 'city', scene: [
      { bg: 'gamepanic-inside' },
      { n: "Game Panic on a Tuesday night smelled of hot plastic and fried batter from the stall next door and the particular ozone of forty machines that had been switched on since ten in the morning, and it was loud the way only an arcade was loud, every cabinet shouting its own song over every other, so that the whole room became one long scream with a beat under it." },
      { n: "And through all of it, somehow, one voice. Low. Even. Not loud at all. It cut through the noise the way a good knife goes through bread, without seeming to try." },
      { s: 'sakura', f: 'neutral', t: "And he's going to jump again. He's going to jump again because he jumped last time and it worked once, in 2008. And there it is. And that's a punish. That's a punish you could see from space." },
      { n: "Two middle-school boys were at the fighting cabinet by the stairs, side by side on the little stools, hammering, and behind them, leaning on the next machine with her arms folded and her chin up, was Sakura. She was in a borrowed Gekkoukan gym shirt and a pair of jeans that were, Solar was almost sure, Kazuha's. She was calling the match in Japanese, then in Korean when one of the boys swore in it, then in English for no reason Solar could see except that the round had got exciting." },
      { s: 'sakura', f: 'neutral', t: "Round three. The crowd is on its feet. The crowd is me. I'm on my feet. I was always on my feet. I'm leaning." },
      { n: "The boy on the left lost. He put his head down on the control panel. The boy on the right whooped and turned round on his stool, and looked at Sakura, and said *thank you*, very sincerely, as if she'd coached him, which she had, in a way, by narrating every one of his opponent's habits out loud until he'd learned them." },
      { s: 'sakura', f: 'neutral', t: "Don't thank me. Thank his jump. His jump did everything." },
      { n: "Then she saw Solar. Her eyebrows went up a millimeter, which on Sakura was the same as somebody else dropping a tray." },
      { s: 'sakura', f: 'happy', t: "Oh. Oh, good. Look who it is. Ladies and gentlemen, the Kiriko." },
      { choose: [
        { t: "You remember that?", notes: 3, then: [
          { s: 'sakura', f: 'neutral', t: "I remember all of it. Third map. You were down two. You held the Suzu for eleven seconds, I counted, the whole booth counted, and then you threw it on the one person who mattered and it turned the fight." },
          { s: 'sakura', f: 'happy', t: "I said *what a Suzu* on a stream with nine thousand people on it. I've said a lot of things on streams. That one I'd say again." }
        ] },
        { t: "Ladies and gentlemen?", notes: 2, then: [
          { s: 'sakura', f: 'neutral', t: "There's always an audience. Sometimes the audience is two kids and a crane machine. You still say ladies and gentlemen. It's respectful." }
        ] },
        { t: "(Bow, like you just came on stage.)", notes: 3, then: [
          { n: "Solar bowed. A small one, ironic, one hand on her chest. The two boys looked at each other. Sakura, without missing a beat, made the soft roaring sound of a distant crowd into her own fist, and the boy who'd won joined in, and the one who'd lost lifted his head off the panel and clapped twice, slowly, out of pure confusion." }
        ] }
      ] },
      { n: "She made Solar play. She didn't ask. She put a coin in the cabinet the boys had left and pointed at the stool, and when Solar sat, she took up her place behind it, arms folded, chin up, and started talking before the round had even loaded." },
      { s: 'sakura', f: 'neutral', t: "Solar, on the left side, playing a character she's chosen because she likes the outfit. Classic. Respect. Facing a computer opponent on the third difficulty setting, who doesn't know who she is and doesn't care." },
      { s: 'sakura', f: 'neutral', t: "She's going in. She's going in with no plan. She has a plan. The plan is hitting it. It's working. Why is it working. This shouldn't be working." },
      { choose: [
        { t: "(Play it properly. Show her.)", notes: 3, then: [
          { n: "She played it properly. It came back faster than she expected, the way things did now, a muscle that belonged to one of her lives and answered to all of them. A block, a read, a punish you could see from space. Behind her Sakura's voice went up half a note and stayed there." },
          { s: 'sakura', f: 'surprised', t: "Oh, she's *reading* it. She's reading it. Look at that. Look at that patience. That's a Kiriko player. That's what a support main does when nobody's looking. That's somebody who knows where everybody is." }
        ] },
        { t: "(Mash. Make her call it anyway.)", notes: 3, then: [
          { n: "She mashed. Every button, both hands, a noise like a small kitchen fire. Sakura didn't stop for a second." },
          { s: 'sakura', f: 'neutral', t: "And she's abandoned all strategy. A bold choice. A historic choice. The opponent is confused. I'm confused. The machine is confused. She's winning. Write it down. Nobody will believe us." }
        ] }
      ] },
      { n: "Solar won the round, somehow, either way. The cabinet played its little fanfare. And Sakura, behind her, drew a breath for the wrap-up the way you'd draw it before going over a high wall, and said *and that's*—" },
      { n: "And stopped." },
      { n: "Just stopped. The word hung there. Solar turned round on the stool. Sakura was standing exactly as she'd been standing, arms folded, chin up, but her face had gone somewhere else, very far away, the way a person's face goes when they've walked into a room and can't remember what they came in for." },
      { s: 'sakura', f: 'neutral', t: "...Sorry. Dead air. Sorry. Long day." },
      { place: 'Paulownia Mall · Atrium', time: 'Night', bg: 'paulownia-atrium-evening', music: 'tender', soft: true },
      { n: "They sat on the edge of the stage the mall put up on Sundays for idol events and balloon men, a low square of black boards by the escalators, with two bowls of the fried batter from the stall next door going soft in their paper. The atrium was emptying. Above them the glass roof was dark blue, no moon in it yet, and the fountain was still running, which Solar found she was glad about without knowing why." },
      { n: "Sakura ate one of the batter balls whole, chewed for a long time, and then said it, flat, to the fountain, the way she'd say a score." },
      { s: 'sakura', f: 'neutral', t: "I was in the middle of a sentence. When it happened. Saturday. I told you that, in the atrium. I was on the headset in the booth, eleven thousand on the stream, and I was saying something, and then I was dancing on a floor in the dark with my best friends and I didn't know which best friends." },
      { s: 'sakura', f: 'neutral', t: "And I can't remember what the end of the sentence was." },
      { s: 'sakura', f: 'serious', t: "I don't forget things. That's my one thing. I remember every player's name, every map, every patch. I could tell you what you had for lunch the day of Regionals, it was on the stream, you ate it in the green room with the door open. I remember the first half of the sentence perfectly. *And that's*. And then nothing. Like somebody cut the tape." },
      { s: 'sakura', f: 'neutral', t: "And it comes out of me. You heard. Any time I wrap up anything. *And that's*. And then dead air. Twice yesterday. Once at breakfast, about rice." },
      { choose: [
        { t: "Maybe it was just *and that's the match*.", notes: 2, then: [
          { s: 'sakura', f: 'neutral', t: "No. I'd know. I've said *and that's the match* a thousand times. It wasn't the match. The match wasn't over. It was something I was saying about someone." },
          { s: 'sakura', f: 'neutral', t: "...Which is worse, somehow. I was saying something about someone, to eleven thousand people, and I'll never know what." }
        ] },
        { t: "What were you looking at? When you said it?", notes: 3, then: [
          { n: "Sakura opened her mouth to answer and shut it again. She frowned at the fountain. She actually tried, Solar could see it, the effort in her jaw, the way you try to see a dream again by closing your eyes the moment you wake up." },
          { s: 'sakura', f: 'sad', t: "...A face. On the monitor. A player cam. I can't see whose. Every time I try, it's somebody different. It's you. It's Yunjin. It's my mother in her kitchen, which makes no sense, she's never been on a player cam in her life." }
        ] },
        { t: "(Don't push. Eat your batter ball.)", notes: 3, then: [
          { n: "Solar didn't push. She ate one of the batter balls, which had gone soft and lukewarm and was still very good, and let the fountain fill the space. After a while Sakura took another one too, and they sat eating in silence on an empty stage, two people who were both very used to being the one who fills the silence, and neither of them doing it." }
        ] }
      ] },
      { n: "Sakura wiped her fingers on the paper, one at a time, precisely." },
      { s: 'sakura', f: 'neutral', t: "In the strangers one, Yunjin and I play mahjong on Thursdays. In the studio, after class, on the floor. She cheats. Badly. She thinks I don't see." },
      { s: 'sakura', f: 'neutral', t: "In the Hanlim one I'm a girl in the music room who doesn't know any of these people. I sit at the back. I'm very good at the back." },
      { s: 'sakura', f: 'neutral', t: "And in the booth, nobody I love is in the room. They're all in the chat. That's the job. You talk to everybody and nobody's there." },
      { n: "She looked round the atrium. At the dark roof. At the stage they were sitting on, which was only boards. At the doors, where on Saturday night three people had stood in the red and watched four girls dance to nothing." },
      { s: 'sakura', f: 'neutral', t: "Here there's no stream. No chat. No booth. Nobody's watching anything. I talk and the only people who hear me are the people right there, in front of me. I've never had that. I talk all day and all of it lands somewhere." },
      { s: 'sakura', f: 'neutral', t: "...And if I never go back to the booth, I never have to finish the sentence. I could just never find out what I was about to say." },
      { n: "She said it like a joke. It wasn't one. It sat on the boards between them like a third bowl." },
      { choose: [
        { t: "When you do remember it, I'd like to be there.", notes: 3, flag: 'eqx-sakura-sentence', then: [
          { s: 'sakura', f: 'surprised', t: "...Why?" },
          { s: 'solar', f: 'neutral', t: "Because you said it about someone. Somebody should hear it." },
          { n: "Sakura looked at her for a long time with an expression she'd clearly never had to make on a headset, and then looked away, at the fountain, and nodded very slightly, as if accepting a rematch." }
        ] },
        { t: "Not finishing it is still a choice. It's yours.", notes: 3, then: [
          { s: 'sakura', f: 'neutral', t: "...Huh." },
          { s: 'sakura', f: 'neutral', t: "That's a better line than most of mine. Don't do it again. It's insulting." },
          { n: "But the corner of her mouth had gone up, and stayed up, the whole way to the escalator." }
        ] },
        { t: "You'd hate never knowing. You'd hate it more than anything.", notes: 2, then: [
          { s: 'sakura', f: 'neutral', t: "I would. I'd hate it so much." },
          { s: 'sakura', f: 'sad', t: "...I'd hate it so much and I'd be so comfortable. That's the problem with this town, isn't it. Everything you'd hate is so comfortable." }
        ] }
      ] },
      { place: 'The Oka Boarding House · Kitchen', time: 'Night', bg: 'eqx-oka-kitchen', music: 'eerie' },
      // BG: oka-dining-room — the long front room of an old Japanese boarding house at night, sliding screens pushed back, a low table set with a dozen mismatched bowls under one hanging lamp, a kitchen doorway glowing at the far end (stand-in: eqx-oka-kitchen).
      { n: "Sakura made her come in for tea. *Two minutes. She'll be hurt otherwise. I've learned that already.* The boarding house kitchen was warm and close and smelled of sesame oil and steam, and Mrs. Oka was at the counter with her back to them and her sleeves pushed up over her cotton gloves, rolling something white and soft under the heels of her hands, slowly, the way you'd stroke a cat." },
      { n: "There was a plate of rice cakes on the table. There was always a plate of rice cakes on the table." },
      { ifEvent: 'eqx-last-grain', then: [
        { n: "Sakura took one. She ate it slowly. The chair at the end of the long table in the front room, the one nearest the kitchen, had been pushed in and had a folded cloth on its seat, and nobody had sat in it since the twenty-seventh, and nobody had moved it either." },
        { s: 'sakura', f: 'neutral', t: "...They're better this week. Aren't they. I'm not imagining it. They're better." },
        { s: 'mrsoka', f: 'happy', t: "It's the new flour, dear. I've a new flour. Finer." },
        { n: "She didn't turn round. Her hands went on rolling the dough, slow and even, and Sakura put the rest of her rice cake down on the plate and looked at it, and didn't pick it up again, and didn't say why." }
      ], else: [
        { n: "Sakura took one without looking, the way everyone in the house took one without looking, and ate it in two bites, and reached for another before she'd noticed she'd finished the first." },
        { s: 'mrsoka', f: 'happy', t: "There's a good girl. You girls dance it all off, I know you do. Have another." },
        { s: 'sakura', f: 'neutral', t: "...I've had two. Have I had two? I'll have one more." }
      ] },
      { n: "At the door, seeing her out, Sakura stopped with her hand on the frame and drew a breath for something, the way she'd drawn it at the cabinet, a breath for a wrap-up." },
      { s: 'sakura', f: 'neutral', t: "Thanks for coming tonight. And that's—" },
      { n: "Dead air. She stood in the doorway with the lamp behind her and her mouth a little open, and in the kitchen behind her the slow sound of the dough being rolled went on, and on, and on, and Solar could have sworn that for one second it had paused, there at the gap, as if it were listening for the end of the sentence too." }
    ] },
    { after: '8/17', title: '2: tendencies', place: 'Paulownia Mall · Game Panic', time: 'Evening', music: 'city', scene: [
      { bg: 'gamepanic-inside' },
      { n: "In August Game Panic was the coolest room on Port Island, and everybody knew it, so on a weekday evening in the last of the summer break it was full of middle-schoolers who weren't playing anything, only standing in the air conditioning with their shirts stuck to their backs, and over the top of all of them, low, even, perfectly audible, came the voice." },
      { s: 'sakura', f: 'neutral', t: "And Asahi steps up to the cabinet. Quiet man. Doesn't talk. Doesn't need to. Has been watching this rhythm game for nine days from behind a pillar like a cat watching a fish tank." },
      { s: 'sakura', f: 'neutral', t: "He picks the hardest song. Of course he does. He picks it the way you'd pick a fight with your own father. And the arrows are coming down, and— oh. Oh, he's good. Nobody told me he was good. Look at the left foot. That's a left foot with a past." },
      { n: "Asahi, on the little lit-up platform, his hair in his eyes, did not look round. But at the end of the song, when the screen said a letter Solar didn't know the game could give out, he stepped off the platform and walked straight past the crowd that had gathered, and on the way past Sakura he held up his fist without looking, and she bumped it without looking, and that was apparently the whole conversation." },
      { s: 'sakura', f: 'happy', t: "He only lets me call him. Junkyu tried once and Asahi unplugged the cabinet. Respect." },
      { s: 'sakura', f: 'neutral', t: "Walk with me. I've got something to show you, and I can't show it to you in here, it's too loud and you'll think I'm a crazy person, which I'm not. I'm prepared. There's a difference." },

      { place: 'Port Island · Back Streets', time: 'Evening', bg: 'portisland-back-streets', music: 'mystery' },
      { n: "Outside the heat sat on the street like something that had followed them out. The sun was going down orange behind the station and the shutters were half down on the shops along the back street, and a man was hosing the pavement in front of a bar, and the water steamed off the stone as fast as he put it there." },
      { n: "Sakura took a folded sheet of paper out of her back pocket. Not a notebook. A sheet, folded in four, soft at the creases from being folded and unfolded, both sides covered edge to edge in a tiny slanted hand in three alphabets, with little headings underlined twice." },
      { s: 'sakura', f: 'neutral', t: "Prep sheet. Before a tournament I do one for every team. Tendencies. Who rotates early. Who panics on the last point. Who always, always takes the high ground and dies on it. You learn a map by learning the people on it." },
      { s: 'sakura', f: 'neutral', t: "I didn't know this map. So I did a sheet." },
      { n: "She held it out. Solar took it. At the top, underlined twice, it said IWATODAI, and under that, in neat rows, names." },
      { n: "*Akihiko: runs at 5:40, always takes the left fork at the shrine, never the right. Has never once taken the right.* *Mitsuru: taps the watch twice before she decides. Has decided before she taps.* *Junpei: tells a joke 0.5 s before a bad thing. Watch Junpei, not the room.* *Haechan: stands in doorways. All of them. Every one.* *Hanni: sits where she can see the stairs.*" },
      { s: 'sakura', f: 'neutral', t: "I'm a caster. That's all a caster is. Somebody who watches what everybody does twice and notices the third time before they do it." },
      { choose: [
        { t: "Am I on here?", notes: 3, then: [
          { s: 'sakura', f: 'neutral', t: "Obviously you're on there. You're near the top. Bottom of the first side." },
          { n: "Solar found it. *Solar: takes the seat facing the door. Every room. All three of her do it. Smiles first, decides after. When she means it she goes quiet.*" },
          { s: 'sakura', f: 'neutral', t: "...The last one I added in June. In the atrium. When you saw us dancing you went so quiet I thought you'd left." }
        ] },
        { t: "This is a little terrifying, Sakura.", notes: 2, then: [
          { s: 'sakura', f: 'neutral', t: "It's a little terrifying in a booth too. That's why they pay you. Nobody pays you to say the thing everybody already saw." },
          { s: 'sakura', f: 'neutral', t: "...Nobody pays me here. I do it anyway. I can't turn it off. Can you turn yours off? The smile?" }
        ] },
        { t: "(Read Haechan's line again, and laugh.)", notes: 3, then: [
          { n: "Solar read it again, *stands in doorways, all of them, every one*, and laughed, out loud, in the hot street, because it was true, because it was so exactly true that she could see him doing it, in the dorm, in the lounge, at the top of the roof stairs, a hand on either side of the frame like he was holding the building up." },
          { s: 'sakura', f: 'happy', t: "Right? Right? He doesn't even know. I'm going to tell him one day on a stream. I'm going to say it to nine thousand people and he's going to have to live with it." }
        ] }
      ] },
      { ifEvent: 'eqx-table-op', then: [{ ifEvent: 'eqx-equinox', then: [], else: [
        { n: "There was a second side, newer, the ink fresher. Six names on it, in a block of their own, under a heading that just said THE PARENTS and a small drawing of a teapot." },
        { s: 'sakura', f: 'neutral', t: "Those were easy. Parents are the easiest. They've had the same tendencies for forty years. Your Runners dad uncaps his pen when he wants to say something he isn't going to say. Your Eomma turns her ring once, to the left, and then she's decided. Mrs. Kim has her car keys in her hand for every meal. Every one. She puts them by her plate like a knife." },
        { s: 'sakura', f: 'happy', t: "And all six of them, every morning, watch you eat. Not looking. Watching. They don't eat until you've had the first bite. Not one of them. I timed it." },
        { n: "Solar didn't say anything. She folded the paper over so she couldn't see the second side, and gave it back, and Sakura took it and looked at her, and didn't say anything either, and wrote nothing down, which Solar understood was a kindness." }
      ] }] },

      { place: 'Iwatodai · River Street', time: 'Evening', bg: 'eqx-oka-gate', music: 'eerie' },
      // BG: eqx-oka-gate-supper — the wooden gate of an old Japanese boarding house at summer dusk, the front room's sliding screens pushed wide open beyond the garden so a long low table full of people eating under one hanging lamp can be seen from the street, a persimmon tree over the wall.
      { n: "By the time they came down the river street the sky over the river had gone the color of a peach going soft, and the boarding house had its front room open. All the screens slid back to the garden for the air, so you could see in from the gate the way you'd see into a lit dollhouse: the long low table, the one hanging lamp, the mismatched bowls, and all along both sides of it, people eating." },
      { n: "Sakura stopped at the gate. Not in it. At the post, with her shoulder against the wood, the way you'd stand at the back of a booth to watch a match you weren't calling." },
      { s: 'sakura', f: 'neutral', t: "I watch this every night. Eleven suppers so far. From the stairs, mostly. I tell them I'm not hungry and I sit on the stairs. They think I'm on a diet. Kazu brings me rice in a cup." },
      { n: "She called it, then. Quietly, in a voice only meant for Solar, the way she'd call a match into a headset." },
      { s: 'sakura', f: 'neutral', t: "Kitchen end, the six men from the pier. Caps on. Always caps on. They come at four and sit in the same order every night, oldest nearest the kitchen. The big one in the middle is Hayashi-san. He's put on weight. He's proud of it. He's got a new tendency since July. He holds his bowl out before it's empty." },
      { s: 'sakura', f: 'neutral', t: "Next to them, Mrs. Arai from the bottom of your hill. Thinks Kazu's her granddaughter. Kazu lets her. And the chair at the end with the cloth on it. Nobody sits there. Nobody moves it. Every night somebody new nearly sits in it and somebody else stops them." },
      { n: "Then she was quiet for a second, and her eyes went to the kitchen door, where a figure in a gray kimono with her sleeves tied back had come out with a pot in her two gloved hands and was going down the table, ladling, bending to each bowl, smiling, saying something to each person that made them smile back." },
      { s: 'sakura', f: 'neutral', t: "And her." },
      { s: 'sakura', f: 'neutral', t: "She knocks twice. On everything. On doors that are open. On the table before she puts a pot down. She never goes into a room first; she waits in the doorway to be asked, even her own kitchen, even when there's nobody to ask her. Gloves every day. In August. Cotton. And she has never, not once in eleven suppers, sat down at her own table and eaten." },
      { n: "She laughed. It was a short, dry, broadcast laugh, the kind you put over a mistake on air so the audience doesn't hear it." },
      { s: 'sakura', f: 'neutral', t: "My grandmother never ate in front of people either. Some women don't. It's a generation thing. I'm not saying anything. I'm a caster, I just say what I see." },
      { choose: [
        { t: "What's her tell?", notes: 3, then: [
          { s: 'sakura', f: 'neutral', t: "That's the thing." },
          { n: "She didn't look away from the table. Down the room, the landlady laughed at something one of the pier men said and put her gloved hand on his shoulder, lightly, and left it there a second too long, and took it away." },
          { s: 'sakura', f: 'serious', t: "I don't have one for her. I've got everybody. Everybody in that room, everybody in your dorm, the boy who sells the takoyaki. Everybody has a tell. Everybody does one thing they don't know they're doing." },
          { s: 'sakura', f: 'serious', t: "...She doesn't. She does everything like she knows exactly what she's doing. Every single time. I can't get one off her." }
        ] },
        { t: "You've been watching her very closely.", notes: 2, then: [
          { s: 'sakura', f: 'neutral', t: "I watch everybody very closely. It's not personal. It's a sickness." },
          { s: 'sakura', f: 'neutral', t: "...It's a little personal." }
        ] },
        { t: "(Look where Sakura's looking. Watch the gloves.)", notes: 3, then: [
          { n: "Solar watched the gloves. Down the table, bowl by bowl, the ladle going in and coming up, the white cotton fingers round the handle, never a drop spilled. At the cuff of the left one, where it met the gray kimono sleeve, there was a soft pale dusting, like chalk, like flour, though there was nothing on the table that needed flour, and the landlady hadn't been baking. Sakura saw her see it. Neither of them said anything." }
        ] }
      ] },
      { s: 'sakura', f: 'neutral', t: "So. Do I keep doing it? You've been here longest. You know what's normal here and what isn't. I'm asking. I don't ask, usually. I'm asking you." },
      { choose: [
        { t: "Keep the sheet. Keep watching. Tell me what you see.", notes: 3, flag: 'eqx-sakura-tells-kept', then: [
          { s: 'sakura', f: 'neutral', t: "...Okay. Every week. Like a report. You'll get a report." },
          { n: "She folded the sheet back into four along its soft creases and put it in her back pocket and patted it, once, the way you'd pat a dog that's done well." }
        ] },
        { t: "Give a copy to Mitsuru. She keeps a board.", notes: 3, flag: 'eqx-sakura-tells-mitsuru', then: [
          { s: 'sakura', f: 'neutral', t: "The whiteboard? With the word on it?" },
          { s: 'sakura', f: 'neutral', t: "...Okay. Yes. I've seen her board. It's very good. It's a very good board. She's a caster too, she just doesn't know it." }
        ] },
        { t: "Stop. Just for tonight. Eat something. Sit at the table.", notes: 2, flag: 'eqx-sakura-tells-stop', then: [
          { s: 'sakura', f: 'sad', t: "...Sit at the table. And eat. Like a person." },
          { s: 'sakura', f: 'neutral', t: "You're right. I know you're right. You're the third person this week to tell me. Kazu says I'm going to fall over." },
          { n: "But she didn't move off the gatepost, and she didn't take her eyes off the room." }
        ] }
      ] },
      { n: "The landlady had seen them. She'd straightened up at the end of the table with the empty pot in her hands, and turned her face to the open garden and the gate, and smiled, the whole of her soft kind face lifting, and come along the veranda to the edge of the boards, and no further." },
      { s: 'mrsoka', f: 'happy', t: "Sakura-chan! And Solar-chan, too. Standing out there in the heat like a pair of cats. Come in, come in. There's a place. There's always a place. I've a bowl warm for you both." },
      { n: "Sakura answered for her. In Japanese, quick and light and perfectly polite, the language she and Kazuha had both been born speaking, the one the two of them had been translating the house into for the others since June. She put her arm through Solar's as she did it, as if they were old friends, as if it were nothing." },
      { s: 'sakura', f: 'happy', t: "She's got a curfew, Oka-san. Her senpai is very strict. I'm walking her to the corner and then I'll come and eat everything. I promise. Save me the burnt rice." },
      { s: 'mrsoka', f: 'neutral', t: "...Then tomorrow. Tomorrow, Solar-chan. I'll save you a place." },
      { n: "She went back into the light. She didn't knock on anything, going. She didn't need to; she was going away from a door, not toward one." },
      { n: "At the corner, by the post office, where the street ran on up the hill toward the dorm and the light had nearly gone, Sakura let go of Solar's arm and stood with her hands in her pockets and looked back down at the lit house." },
      { s: 'sakura', f: 'neutral', t: "Thanks for walking with me. I mean it. I talk all day and you're the only one who reads the sheet." },
      { s: 'sakura', f: 'neutral', t: "And that's the one—" },
      { n: "She stopped. Dead air. But not the way it had been in June, at the cabinet, her face gone very far away. This time her eyes came back almost at once, wide, and her hand went up to her mouth as if she'd dropped something out of it." },
      { s: 'sakura', f: 'surprised', t: "...*The one.* That's new. That's a new word. *And that's the one.* I've never got past *that's*." },
      { ifFlag: 'eqx-sakura-sentence', then: [
        { s: 'sakura', f: 'happy', t: "You were here. You said you wanted to be here when it came. And it came, and you're here. That's— okay. That's a good tendency. I'm writing that down." },
        { n: "She took the sheet out and wrote something on it against the post-office wall, fast, and didn't let Solar see what, and put it away." }
      ], else: [
        { s: 'sakura', f: 'neutral', t: "*The one.* About someone. I knew it was about someone. The one— something." },
        { s: 'sakura', f: 'neutral', t: "...Don't tell anybody. I want to have it a bit longer before anyone else does." }
      ] },
      { n: "She went back down the street alone toward the lit house, walking the way she stood, chin up, and Solar watched her go. At the gate she stopped, and the landlady was in the open front room again, and saw her, and came to the very edge of the veranda; and Solar, at the corner, saw her lift one gloved hand and knock, lightly, twice, on the open wooden frame beside her, to call the girl in." },
      { n: "Sakura went in. But on the path, half in the lamplight, she turned her head and looked back up the street at Solar over her shoulder, and Solar could just see her lips move, one word, small and dry and perfectly clear, the way you'd mark a thing on a sheet." },
      { n: "*Pattern.*" }
    ] },
    { after: '9/14', title: '3: on the record', place: 'Paulownia Mall · Game Panic', time: 'Evening', music: 'tender', scene: [
      { bg: 'gamepanic-inside' },
      { ifEvent: 'eqx-equinox', then: [
        { n: "Game Panic was loud the way it was always loud, forty cabinets shouting over each other, and for the first time since June Solar could hear every one of them." },
        { n: "Sakura was by the stairs, behind the fighting cabinet, where she always was, leaning on the next machine with her arms folded and her chin up. Two middle-school boys were on the stools in front of her, hammering. One of them jumped. He jumped again. He jumped a third time, the way you'd jump if you'd been told once that it worked, and got punished for it from across the screen so hard the cabinet shook." },
        { n: "Sakura said nothing." },
        { n: "The boy on the left looked round at her over his shoulder, puzzled, the way you'd look round at a clock that had stopped ticking. Then the other one did. They looked at each other. Then they turned back to the screen and played on in silence, worse, not knowing why, and Sakura stood behind them with her face turned toward the screen and her eyes not on it at all, and didn't call a single thing." },
        { s: 'sakura', f: 'neutral', t: "...Hi. Don't. I know. I'm aware. I've been aware for a week." },
        { s: 'sakura', f: 'sad', t: "I can't. Since the bridge. I open my mouth to call it and nothing comes. Like the sentence, except the whole sentence. All of them." }
      ], else: [
        { n: "Game Panic was loud the way it was always loud, forty cabinets shouting over each other, and over all of them, low and level, the voice." },
        { s: 'sakura', f: 'neutral', t: "And he's going to jump. He's going to jump because it's September and he's learned nothing over the summer. And there it is. And that's a punish." },
        { n: "But it was quieter than it had been. Solar heard it from the door: not the volume, the shape. A beat late on every call. The voice of somebody calling a match on a second monitor while the real one played out on the first, somewhere else." },
        { s: 'sakura', f: 'neutral', t: "...Hi. You're early. You're never early. Write that down, I'm busy." }
      ] },
      { n: "The owner closed at ten, but he let Sakura stay on to sweep, because she'd asked once and swept better than he did, and he went home, and she pulled the big shutter down behind him from the inside, and they were alone in the arcade with the house lights off." },

      { place: 'Paulownia Mall · Game Panic', time: 'Night', bg: 'gamepanic-inside', music: 'tender', soft: true },
      // BG: gamepanic-closed — the inside of a small arcade after closing, house lights off, rows of cabinets still running their attract screens in the dark so the whole room is lit only in shifting colors, a broom leaning against a fighting cabinet, a pulled-down shutter at the far end.
      { n: "Nobody ever turned the cabinets off at night. It was cheaper to leave them on. So with the house lights down the whole room glowed: forty screens playing their attract loops to nobody, little demo fights, little demo races, the same eight seconds over and over, and every so often one of them would say its own name out loud, brightly, to the empty room, *FIGHT*, *GET READY*, *INSERT COIN*, like somebody talking in their sleep." },
      { n: "Sakura swept. She did it properly, the way she did everything, every row, under every stool. Solar sat on the edge of the crane machine's step and watched her, and after a while got up and found the dustpan and held it." },
      { ifEvent: 'eqx-equinox', then: [
        { s: 'sakura', f: 'neutral', t: "I called it. Do you know that? In my head. I called it before it happened." },
        { s: 'sakura', f: 'neutral', t: "From the eleventh. The aprons. Your three mothers serving at that table in three new white aprons off her hooks. I wrote it on the sheet. *New tendency, round eleven.* I don't like new tendencies in the last round. Nobody changes their game in the last round unless something's about to happen." },
        { s: 'sakura', f: 'sad', t: "And I said nothing. Because it was aprons. Because it was a nice thing. Because I'm a caster, I just say what I see, and I didn't even do that. I wrote it down and folded it up and put it in my pocket." },
        { s: 'sakura', f: 'sad', t: "And then on the bridge I watched it. All of it. I watched it the way I watch everything. Every single thing, and remembered all of it, because that's my one thing. I remember the order the shoes were in. I'll remember the order the shoes were in when I'm eighty." },
        { choose: [
          { t: "Nobody could have called that, Sakura.", notes: 2, then: [
            { s: 'sakura', f: 'neutral', t: "I know. Everybody says that. Mitsuru-san said it. In exactly those words. She said it to me like she'd been saying it to herself in a mirror." }
          ] },
          { t: "Then tell me. Call it to me. The order.", notes: 3, then: [
            { n: "Sakura looked at her. Then she put the broom against a cabinet, and folded her arms, and lifted her chin, and in the glow of forty screens she called it, flat and quiet and exact, the way she'd call a replay, the whole thing, the bridge and the red and the voices and the shoes, start to end, and Solar held the dustpan and listened to every word and didn't look away from her once." },
            { n: "When it was done Sakura stood for a long time without saying anything. Then she picked the broom back up." },
            { s: 'sakura', f: 'sad', t: "...Okay. It's out. It's on the record now. Somebody heard it." }
          ] },
          { t: "(Take the broom off her. Hold her instead.)", notes: 3, then: [
            { n: "Solar took the broom out of her hands and leaned it on the cabinet and put her arms round her. Sakura stood stiff inside it for a second, arms still half folded, like somebody who'd been hugged in a booth in front of a camera. Then she wasn't. Then she put her forehead down on Solar's shoulder and stood there with her eyes open, not crying, just breathing, while somewhere behind them a racing game said *GET READY* to nobody, twice." }
          ] }
        ] }
      ], else: [
        { s: 'sakura', f: 'neutral', t: "New tendency. Since the eleventh. I don't like it." },
        { s: 'sakura', f: 'neutral', t: "Your three mothers. At supper. They serve now. In three white aprons off her hooks. Every night. Like they've always done it. Your Runners mother carries a pot like it might bite her, Solar. She'd never carried one before this month. I've got it on the sheet." },
        { s: 'sakura', f: 'serious', t: "Nobody changes their game in the last round unless something's about to happen. That's the first thing they teach you." },
        { n: "She swept the same piece of floor three times. Then she stopped and leaned on the broom." },
        { s: 'sakura', f: 'neutral', t: "...It's aprons. It's a nice thing. It's Chuseok soon, everybody's helping. I'm a caster. I see patterns in tea leaves. I see patterns in the crane machine. Ignore me." },
        { choose: [
          { t: "I'm not going to ignore you.", notes: 3, then: [
            { s: 'sakura', f: 'neutral', t: "...No. You never do. It's your worst tendency." },
            { n: "She wrote something on the sheet against the side of a cabinet and put it back in her pocket, and her shoulders, Solar saw, came down a quarter of an inch." }
          ] },
          { t: "Tell Mitsuru. Tonight.", notes: 2, then: [
            { s: 'sakura', f: 'neutral', t: "And say what? *Your mothers are being too helpful.* She'd write it on the board. She'd write it on the board and then she'd look at it all night. I've seen her look at that board." },
            { s: 'sakura', f: 'neutral', t: "...Okay. I'll tell her. Tomorrow. Tomorrow I'll tell her." }
          ] },
          { t: "(Take the broom off her. Sweep the next row yourself.)", notes: 3, then: [
            { n: "Solar took the broom out of her hands and swept the next row, badly, and Sakura watched her do it and said *you're missing the whole left side* and *under the stool, under the stool* and *that's not sweeping, that's moving dust to a new home*, and by the end of the row she was nearly calling it, nearly, the old voice coming back up into her the way color comes back into a hand." }
          ] }
        ] }
      ] },
      { ifFlag: 'dead.shinjiro', then: [
        { s: 'sakura', f: 'sad', t: "He used to put his bowl down in front of me on the stairs. Shinjiro-san. When I wouldn't come to the table. Rice and something. He never said anything. He just put it down and went." },
        { s: 'sakura', f: 'sad', t: "...I never wrote him a tendency. I didn't think I needed to. I thought I had time to watch." }
      ] },

      { place: 'Paulownia Mall · Game Panic', time: 'Night', bg: 'gamepanic-inside', music: 'eerie', soft: true },
      { n: "There was a microphone in the prize case. A toy one, pink plastic with a silver ball on top and a little speaker built into the handle, the kind that made your voice come out with an echo on it if you held the button down. It had been in the case since before Solar's first April. It cost four hundred tickets. Nobody had ever had four hundred tickets." },
      { n: "Sakura had a key to the case now too. She took it out and turned it over in her hands, and pressed the button, and said *test* into it, and her voice came out of the little speaker small and tinny and echoing, *test, test, test*, as if from the bottom of a well." },
      { s: 'sakura', f: 'neutral', t: "The thing about the booth. The thing nobody understands about it. When you say it on the stream, it happened. That's what the job is. A thing happens on a screen and it isn't real yet. It's just lights. And then you say it, and nine thousand people hear you say it, and now it happened. Now it's on the record." },
      { s: 'sakura', f: 'neutral', t: "That's why I can't finish the sentence. I think. If I finish it, it happened. Whatever it was. Whoever." },
      { n: "She held the toy microphone loosely, by her side, the way you'd hold a real one between takes. Around them the attract screens played their eight seconds. Somewhere at the back a fighting game shouted *ROUND ONE* and then nothing, waiting for someone to put in a coin." },
      { s: 'sakura', f: 'neutral', t: "And that's the one who—" },
      { n: "Dead air. Two new words. *Who.* She stood there with her mouth still open on it, and Solar saw her try for the next, saw it right there behind her teeth, saw her reach for it the way you reach for the bottom stair in the dark and find there isn't one." },
      { s: 'sakura', f: 'sad', t: "...*The one who.* The one who what. The one who *what*." },
      { n: "She put the microphone down on top of the prize case. She didn't let go of it." },
      { s: 'sakura', f: 'serious', t: "Here's my question. I'm asking it once. I don't ask things. You know I don't." },
      { s: 'sakura', f: 'serious', t: "Say we stay together. The five of us. Six, with you, on the end, on Yunjin's left, I don't care what it is. Say it into this, so it's on the record. Say it like a call. If it's on the record it's real, and if it's real I never have to go back to the booth, and if I never go back I never have to find out who I was talking about. I'll just keep the two words. I'll keep them forever. They're enough." },
      { n: "She picked the microphone up again and held it out to Solar, handle first, the way a caster hands the mic to a player after the final, and the little silver ball caught all forty screens at once." },
      // CG: eqx-on-the-record — a young woman in a dark closed-up arcade lit only by the shifting colors of forty attract screens, holding a cheap pink toy microphone out handle-first toward the viewer, her face very steady and very tired.
      { choose: [
        { t: "(Take it. Press the button.) We stay together. Here. It's on the record.", notes: 3, tally: { cakes: 1, 'asks.sakura': 'yes' }, then: [
          { n: "She took it and held the button down and said it, and her own voice came back to her out of the little speaker, tinny, echoing, a fraction behind itself, *on the record, record, record*, and Sakura closed her eyes when she heard it, as if somebody had read out a score she'd been waiting all night for." },
          { s: 'sakura', f: 'happy', t: "...And that's the match." },
          { n: "She said it with a little smile. Then she heard what she'd said, and opened her eyes, and laughed, surprised and very tired, because she'd finished a sentence for the first time since June, just not that one, and it had been easy." },
          { n: "She took the microphone back and put it in her jacket instead of the case, four hundred tickets she'd never have, and locked the case, and Solar felt something settle in her own chest like a warm stone, heavy and pleasant and not hers, and didn't know where it had come from." }
        ] },
        { t: "(Take it.) Stay. Please. All of you. I want you here. That's the call.", notes: 3, tally: { asked: 1, cakes: 1, 'asks.sakura': 'yes' }, flag: 'eqx-asked-sakura', then: [
          { n: "It wasn't the call Sakura had asked for. It was more. It was Solar's own, and it came out of the little speaker in her own voice with an echo on it, *I want you here, here, here*, and Sakura stared at her over the top of the microphone the way she'd stared at a player who'd thrown the Suzu on exactly the right person." },
          { s: 'sakura', f: 'surprised', t: "...You want. You. That's not a call. That's a confession. You're not supposed to do confessions on the record. It's terrible broadcasting." },
          { s: 'sakura', f: 'happy', t: "...I'm keeping it. Obviously. I'm keeping it forever." },
          { n: "She took the microphone back and held it against her chest with both hands; and when she put her hand over Solar's on the handle, Solar felt something go out of her, small and warm, down her arm into the toy and the hand on it, the way heat goes out of you into a cold rail, and not come back." }
        ] },
        { t: "(Don't take it.) You'll go back, Sakura. You'll finish it. You'd hate never knowing.", notes: 2, tally: { 'asks.sakura': 'no' }, then: [
          { n: "Sakura held it out a second longer. Then she lowered it, slowly, and put it back on the case, and her face did the thing a caster's face does when the favourite goes out in the first round: nothing at all, very professionally." },
          { s: 'sakura', f: 'neutral', t: "...I would hate it. I said that. In June. You remembered." },
          { s: 'sakura', f: 'sad', t: "Okay. Okay. Dead air. We'll fix it in post." },
          { n: "She locked the microphone back in the case and put the key in her pocket, and swept a row she'd already swept." }
        ] },
        { t: "(Don't take it.) It's your sentence. You say where it ends. Not me.", notes: 2, tally: { choose: 1, 'asks.sakura': 'choose' }, then: [
          { n: "Sakura looked at the microphone in her own hand, held out between them, and at Solar's hands not taking it, and for a long moment neither of them moved, and the screens around them played their eight seconds, and played them again." },
          { s: 'sakura', f: 'neutral', t: "...That's a terrible answer. That's the worst answer anyone's ever given me. You're supposed to take the mic. Everybody takes the mic." },
          { s: 'sakura', f: 'sad', t: "Nobody's ever handed me the end of something before. In any of them. I always get the middle. I talk over the middle of other people's things." },
          { s: 'solar', f: 'neutral', t: "I know." },
          { n: "She didn't put it back in the case. She held it a while longer, the button under her thumb, not pressing it. Then she put it in her jacket pocket, where it stuck out, pink and ridiculous, all the way home." }
        ] }
      ] },

      { place: 'Port Island Station · Last Train', time: 'Night', bg: 'station-platform-night', music: 'tender', soft: true },
      { ifEvent: 'eqx-equinox', then: [
        { n: "They didn't take the bridge home. Neither of them said so. They walked to the station without a word and took the last train over instead, and stood the whole way in the empty carriage, holding the same pole, and didn't look out of the window at the water." }
      ], else: [
        { n: "They took the last train over the bridge. It was a clear night, the first cool one, and out of the carriage window the moon was up over the bay, nearly round, getting fuller, and Sakura looked at it the whole way across and didn't call it." }
      ] },
      { s: 'sakura', f: 'neutral', t: "Can I tell you one more thing? Not a tendency. Just a thing." },
      { s: 'sakura', f: 'neutral', t: "I remember every word you've ever said to me. All of it. Since the atrium. That's a lot of tape. I don't mind. It's the best tape I've got." },
      { s: 'sakura', f: 'neutral', t: "...So keep giving me some. That's all. Come and stand behind the cabinet. I'll call you. I'll call you better than anyone." },
      { ifEvent: 'eqx-persimmon', then: [
        { n: "At the guesthouse she went in under the porch light, and turned on the step, and held up two fingers at Solar, very straight, the way a caster signs off at the end of a long night, and went in, and the door shut behind her, and the light stayed on." }
      ], else: [
        { n: "At the boarding house gate the lamp in the hall was lit. It was always lit. The tin was on the step inside the door with its lid off. Sakura stopped at the gatepost, the way she always stopped, and looked at the house for a long time, at the one upstairs window where the light was on, at the dark kitchen." },
        { s: 'sakura', f: 'neutral', t: "...Four in. Plus Yunjin up the hill. Chaewon's got me doing it now." },
        { n: "She went in. And on the path, half in the lamplight, she turned and held up two fingers at Solar in the gate, very straight, the way a caster signs off at the end of a long night; and behind her, at the end of the dark hall, the kitchen door stood half open on no light at all, and stayed that way, and nobody knocked." }
      ] }
    ] }
  ]
});
