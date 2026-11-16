/* Persona 3: Equinox · Miyawaki Sakura · XXI The World. Link data (femc-equinox-game.html). Format: link fields in
   assets/femc/game/core.js ("Links" header), scene lines in assets/femc/game/scene.js.
   Written: rank 1 (after 6/27: she came through on 6/26, story-act2 'eqx-stage'; her home is Game Panic on Tuesday,
   Thursday and Saturday evenings, so 6/29 at the earliest). Ranks 2–10 still to write. Shape: the stub fields from
   assets/femc/equinox/data/links.js. Card art (World) still to make.
   Shared memory: the Runners epilogue (she cast Solar's Kiriko at Regionals: "what a Suzu"), the strangers epilogue (mahjong
   nights, dry: "Don't do it again. It's insulting."), and the 6/26 atrium ("I was in the middle of a sentence").
   The hook: the sentence she was in the middle of when she was pulled through. She can't remember how it ends.
   Reads: ifEvent eqx-last-grain (7/27 morning) for one beat at the boarding house table.
   Flags this file sets: eqx-sakura-sentence (Solar asks to be there when she finishes it). Nothing reads it yet. */
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
    ] }
  ]
});
