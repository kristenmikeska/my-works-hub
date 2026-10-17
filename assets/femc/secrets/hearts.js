/* Secrets: hearts. Format in femc-social.js above secrets().
   P3P's "dating more than one person" consequence, the gentle version: friends notice and tease, and now and then two of
   the people Solar is dating run into each other. Nothing is ever lost (no rank, no ♪, no broken links); every choice
   here is notes: 0, and the scenes play in frame mode, so they never touch progress.
   - Teasing (romances: 2, the last one romances: 3): a chain, each one waiting for the one before (unlock.seen) and
     alternating daytime/evening, so they never play back to back. {love1}/{love2}/{love3} name her actual partners.
     Shinjiro's link closes 10/4 and Ann goes home 11/3, so if either is one of her loves the lines that name partners
     switch to a version that names nobody (careful() below).
   - Friend teasing: Kiriko and Widowmaker (friendship-only links), after the first tease.
   - Run-ins (romance: [a, b]): pairs who already know each other in their link files, after the first tease. Pairs with
     Shinjiro or Ann are left out on purpose: their romance routes can't overlap anyone else's before they leave.
   - Two group texts that follow a run-in, on their own threads so they never cut into a link's own chat.
   Stamps: 'busy-heart' (the first tease) and 'small-world' (any run-in), in achievements.js. */
(() => {
  // Names partners, unless one of her loves has already left (Shinjiro after 10/4, Ann after 11/3): then names nobody.
  const careful = (named, unnamed) => ({ ifRomance: 'shinjiro', then: unnamed, else: [{ ifRomance: 'ann', then: unnamed, else: named }] });
  const tease = { romances: 2 };

  FemcSocial.secrets({
    id: 'hearts',
    cast: { junpei: 'Junpei', yukari: 'Yukari', fuuka: 'Fuuka', mitsuru: 'Mitsuru', ken: 'Ken', koromaru: 'Koromaru', aigis: 'Aigis' },
    threads: {
      'h-camp': { name: 'a delicate arrangement', members: ['astarion', 'shadowheart'] },
      'h-gekko': { name: 'library + gym', members: ['rio', 'saori'] }
    },

    texts: [
      /* ── After the shrine: Astarion makes a group about it ── */
      { id: 'h-tx-camp', thread: 'h-camp', slot: 1, unlock: { romance: ['astarion', 'shadowheart'], seen: ['h-run-shrine'] }, msgs: [
        { sys: 'Astarion created "a delicate arrangement" and added you and Shadowheart' },
        { from: 'astarion', t: "Good evening, both of you. I've made us a little group. For transparency." },
        { from: 'shadowheart', t: "You've made a group so you can complain about the shrine." },
        { from: 'astarion', t: "I've made a group so I can complain about the shrine TRANSPARENTLY." },
        { from: 'astarion', t: "I saw the two of you on the shrine steps again last night. From the café. Through two windows and most of a hill. She was wearing your scarf, Shadowheart." },
        { from: 'shadowheart', t: "It was cold." },
        { from: 'astarion', t: "It's a very good scarf. I'd simply like it noted that I own several scarves, and not one of them has been borrowed." },
        { ask: [
          { t: "I'll borrow one tomorrow.", notes: 0, then: [
            { from: 'astarion', t: "...Oh. Well. Good." },
            { from: 'astarion', t: "The red one. Obviously. It brings out my eyes, and therefore yours." }
          ] },
          { t: "Are you two going to be okay?", notes: 0, then: [
            { from: 'shadowheart', t: "We're fine, Sunshine. He's being dramatic." },
            { from: 'astarion', t: "I'm being dramatic AND fine. I contain multitudes." }
          ] },
          { t: "❤️", notes: 0, then: [
            { from: 'shadowheart', t: "...Was that for me or for him?" },
            { from: 'astarion', t: "Me. Obviously." },
            { from: 'shadowheart', t: "It was in the group, Astarion." }
          ] }
        ] },
        { from: 'shadowheart', t: "Goodnight, both of you. Don't stay up fighting in my name." },
        { from: 'astarion', t: "In HER name, darling. Do keep up." }
      ] },

      /* ── After the library: Rio makes a group so she can return a book "properly" ── */
      { id: 'h-tx-gekko', thread: 'h-gekko', slot: 1, unlock: { romance: ['rio', 'saori'], seen: ['h-run-library'] }, msgs: [
        { sys: 'Rio created "library + gym" and added you and Saori Hasegawa' },
        { from: 'rio', t: "ok so i made a group" },
        { from: 'rio', t: "dont make it weird" },
        { from: 'saori', t: "Good evening. Iwasaki-san asked for my number so that she could return the book properly. I hope that's all right." },
        { from: 'rio', t: "its for the book" },
        { from: 'rio', t: "also i saw u two at the gate after school. u walked her all the way to the bus stop" },
        { from: 'rio', t: "im not mad. im just noting it" },
        { from: 'rio', t: "hina says im noting it loudly" },
        { from: 'saori', t: "She was very polite about it. She told me I have good posture." },
        { from: 'rio', t: "u do" },
        { from: 'saori', t: "..." },
        { from: 'saori', t: "Thank you." },
        { ask: [
          { t: "Are you two friends now?", notes: 0, then: [
            { from: 'rio', t: "maybe. she lent me a bookmark" },
            { from: 'saori', t: "It's a loan. I'll want it back. In person." },
            { from: 'rio', t: "see. this is how she gets u" }
          ] },
          { t: "Rio, have you ever returned a library book before?", notes: 0, then: [
            { from: 'rio', t: "no" },
            { from: 'rio', t: "never had a reason to go back before" },
            { from: 'saori', t: "...That's very sweet, Iwasaki-san." },
            { from: 'rio', t: "dont" }
          ] },
          { t: "🏐📚", notes: 0, then: [
            { from: 'saori', t: "I don't know what the first one is. Is it a melon?" },
            { from: 'rio', t: "ITS A VOLLEYBALL" }
          ] }
        ] },
        { from: 'saori', t: "Goodnight, both of you. It's due back in two weeks." },
        { from: 'rio', t: "goodnight. both of u" }
      ] }
    ],

    moments: [

      /* ════ The dorm notices (a chain: whiteboard → umbrellas → treats → Lucia → logistics) ════ */

      /* ── Junpei's whiteboard ── */
      { id: 'h-whiteboard', date: '10/20', slot: 1, unlock: tease, music: 'joy',
        label: 'A busy heart', title: 'the schedule', place: 'Iwatodai Dorm · Lounge', stamp: 'busy-heart', scene: [
        { n: "The whiteboard in the lounge was supposed to be for Tartarus. Mitsuru wrote floor numbers on it in a hand like a legal document and nobody else was allowed near the markers, which was why it was alarming to come downstairs for a glass of water and find Junpei standing in front of it with the blue one uncapped, like a general who had lost one war and decided to plan another." },
        { n: "Yukari was on the couch with her knees up and a magazine she wasn't reading. She looked at Solar over the top of it, then at the board, then back at Solar, with the particular look of someone who had tried to stop a thing and was now going to enjoy it." },
        { s: 'yukari', f: 'neutral', t: "For the record, I told him not to." },
        { s: 'junpei', f: 'happy', t: "Ah! Perfect timing. The woman herself." },
        careful([
          { n: "The board said SOLAR'S WEEK across the top, in letters that got smaller as he ran out of room. Underneath, in two columns, it said {love1} and {love2}, with the days of the week drawn between them in arrows and crossings-out and one small, frankly upsetting heart." },
          { s: 'junpei', f: 'serious', t: "So I've been doing some detective work. Tuesday, you came home with {love1} written all over your face. Thursday? {love2}. Same face. Different name. I'm not judging. I'm organizing." },
          { s: 'yukari', f: 'serious', t: "He's judging a little." },
          { s: 'junpei', f: 'flustered', t: "A LITTLE. Mostly I'm worried you're gonna double-book, and I'm gonna be the one who has to cover for you, and I can't lie, Solar. My face does a thing." }
        ], [
          { n: "The board said SOLAR'S WEEK across the top, in letters that got smaller as he ran out of room. Underneath, every day of the week was a question mark, and on Sunday there was a drawing of a heart wearing sunglasses." },
          { s: 'junpei', f: 'serious', t: "So I've been doing some detective work. You're never here after school. You come home smiling at your phone. You hum, Solar. You never used to hum." },
          { s: 'yukari', f: 'serious', t: "He's been watching you hum. Think about that." },
          { s: 'junpei', f: 'flustered', t: "I'm not watching! I'm observing! There's a difference, and the difference is I'm worried about you, okay? In a fun way." }
        ]),
        { choose: [
          { t: "You spelled Wednesday wrong.", notes: 0, then: [
            { s: 'junpei', f: 'surprised', t: "I did not." },
            { n: "He had. He stared at it for a long moment and then fixed it, and the fix was also wrong, and Yukari laughed so hard the magazine slid off her knees." }
          ] },
          { t: "(Take the marker and erase the whole board.)", notes: 0, then: [
            { n: "She took the marker out of his hand, capped it, and wiped the board clean with her sleeve in three long strokes while he watched like a man watching his house burn down." },
            { s: 'junpei', f: 'sad', t: "My research..." },
            { s: 'yukari', f: 'neutral', t: "That was beautiful. Do it again next week." }
          ] },
          { t: "Where's my day off?", notes: 0, then: [
            { s: 'junpei', f: 'happy', t: "See, THIS is why you need me." },
            { n: "He wrote SUNDAY: SLEEP (MANDATORY) in the corner and underlined it twice, and Yukari, after a pause, nodded, like it was the first sensible thing to happen on that board all year." }
          ] }
        ] },
        { n: "She went to get her water. When she came back through the lounge the board had been turned to face the wall, and Junpei was on the couch eating chips with the innocent face of a man who had never once held a marker." },
        { s: 'yukari', f: 'neutral', t: "He'll turn it back around the second you go upstairs." },
        { s: 'junpei', f: 'happy', t: "I'm just sayin'. Somebody in this dorm should be having a good year. Might as well be you." },
        { n: "Upstairs, her phone buzzed on the bed. She looked at the name a second longer than she meant to, and smiled before she could stop it, and was very glad, suddenly, that the board was facing the wall." }
      ] },

      /* ── Yukari and the two umbrellas ── */
      { id: 'h-umbrellas', date: '11/2', slot: 0, unlock: { ...tease, seen: ['h-whiteboard'] }, music: 'joy',
        label: 'A busy heart', title: 'two umbrellas', place: 'Iwatodai Dorm · Front', scene: [
        { n: "It was raining the way November rained in Iwatodai, thin and sideways and personal, and Yukari was standing at the dorm's front door with an umbrella in each hand, like she was weighing them." },
        { n: "Neither of them was Solar's. Solar did not own an umbrella. She had been rained on since April, cheerfully and on principle, and everyone in the dorm knew it." },
        { s: 'yukari', f: 'serious', t: "So. Two umbrellas." },
        { s: 'solar', t: "It's been a rainy month." },
        careful([
          { s: 'yukari', f: 'neutral', t: "This one's {love1}'s. Don't look at me like that, I've seen it. And this one came home with you on Thursday, and it's definitely not mine, so unless you robbed a convenience store, it's {love2}'s." }
        ], [
          { s: 'yukari', f: 'neutral', t: "Don't look at me like that. One of these came home with you on Monday and the other one came home with you on Thursday, and neither of them is mine, so unless you robbed a convenience store, somebody's been walking you home." }
        ]),
        { n: "She held them up side by side. One was big enough for two people. The other was small, and nicer than it needed to be, and had been very carefully dried before it went in the stand, which was somehow worse." },
        { s: 'yukari', f: 'serious', t: "You know what I think?" },
        { choose: [
          { t: "That I should buy my own umbrella.", notes: 0, then: [
            { s: 'yukari', f: 'neutral', t: "No. I think you should give them back. Both of them. In person." },
            { s: 'yukari', f: 'neutral', t: "That's the rule. You borrow it in the rain, you give it back when it's sunny, and you stay a while." }
          ] },
          { t: "(Take the bigger one and run.)", notes: 0, then: [
            { n: "She grabbed the bigger one and made it three steps down the path before Yukari called after her, not even trying to sound angry." },
            { s: 'yukari', f: 'blushing', t: "Bring it back dry! And bring it back in person!" }
          ] },
          { t: "Are you going to tell Junpei?", notes: 0, then: [
            { s: 'yukari', f: 'serious', t: "Absolutely not. He'd draw it." },
            { n: "They both considered, for a moment, what Junpei would draw. Neither of them said it out loud." }
          ] }
        ] },
        { n: "Yukari put the other umbrella back in the stand, handle out, the way you'd leave something for someone who was coming back for it." },
        { s: 'yukari', f: 'neutral', t: "For what it's worth, you look happy. Annoyingly happy. Go to school." },
        { n: "Solar went. The rain drummed on somebody else's umbrella all the way to the station, and she found she didn't mind it at all." }
      ] },

      /* ── Koromaru gets two different treats ── */
      { id: 'h-treats', date: '11/14', slot: 1, unlock: { ...tease, seen: ['h-umbrellas'] }, music: 'joy',
        label: 'A busy heart', title: 'two treats', place: 'Iwatodai Dorm · Lounge', scene: [
        { n: "Koromaru was lying in the middle of the lounge floor with one treat between his paws and another beside him, untouched, guarding both with the grave, divided attention of a dog who had been given too much and suspected a test." },
        { s: 'ken', f: 'neutral', t: "Somebody left those for him. Two somebodies, I think. They both came with notes." },
        { n: "Ken held the notes out by the corners, the way you'd hold evidence, and he was blushing a little, the way kids blush when they've read something they suspect was meant for someone older." },
        careful([
          { n: "One said FOR THE DOG in {love1}'s handwriting. The other said FOR KOROMARU, WHO IS A GOOD BOY, AND FOR SOLAR, WHO IS ALSO, in {love2}'s, and Solar was not sure the second one had been left unfinished on purpose." }
        ], [
          { n: "One said FOR THE DOG in neat, careful capitals. The other said FOR KOROMARU, WHO IS A GOOD BOY, AND FOR SOLAR, WHO IS ALSO, in a different hand entirely, and Solar was not sure the second one had been left unfinished on purpose." }
        ]),
        { s: 'ken', f: 'serious', t: "They're both from people who like you. I'm not stupid. I just wasn't going to say anything." },
        { n: "Aigis was sitting very straight at the end of the couch. She had been watching Koromaru with total attention for what Solar suspected was a long time." },
        { s: 'aigis', f: 'neutral', t: "Koromaru has asked me to translate. He would like it understood that the first treat is crunchier." },
        { s: 'koromaru', f: 'happy', t: "Arf!" },
        { s: 'aigis', f: 'neutral', t: "And that the second came with a better scratch behind the ears. He does not wish to rank them. He says that is how a dog loses treats." },
        { s: 'ken', f: 'neutral', t: "...That's actually really smart." },
        { choose: [
          { t: "(Scratch Koromaru behind the ears.)", notes: 0, then: [
            { n: "She knelt and scratched him behind the ears, and he leaned his whole weight into her hand and sighed through his nose, long and contented and completely unbothered." },
            { s: 'aigis', f: 'happy', t: "He says you are also acceptable." }
          ] },
          { t: "Which one does he like better? Really.", notes: 0, then: [
            { s: 'aigis', f: 'neutral', t: "He says, and I am quoting, why would I tell you that." },
            { s: 'koromaru', f: 'serious', t: "Woof." }
          ] },
          { t: "Ken, you can't tell anyone.", notes: 0, then: [
            { s: 'ken', f: 'happy', t: "I wasn't going to. I'm good at secrets. I'm in S.E.E.S." },
            { n: "He said it like it settled everything, and it sort of did." }
          ] }
        ] },
        { n: "In the end Koromaru ate both treats, one after the other, in the order they'd been given, without any visible guilt, and then went to sleep on Solar's foot." },
        { s: 'aigis', f: 'happy', t: "I believe he has resolved the matter. I find his approach efficient." },
        { n: "Solar sat very still so as not to wake him, and thought that if anyone in the dorm had worked out how to live, it was probably the dog." }
      ] },

      /* ── Fuuka heard both names through Lucia ── */
      { id: 'h-lucia', date: '11/28', slot: 0, unlock: { ...tease, seen: ['h-treats'] }, music: 'tender',
        label: 'A busy heart', title: 'the scan', place: 'Iwatodai Dorm · Command Room', scene: [
        { n: "Fuuka caught her on the stairs after school, which Fuuka never did, with her hands clasped in front of her and her face already apologizing for something it hadn't said yet." },
        { s: 'fuuka', f: 'sad', t: "Solar-chan, could you come up to the command room for a second? It's nothing bad. It's a little bad. It's not bad." },
        { n: "The command room was dim and warm and smelled like the monitors, faintly dusty, faintly electric. Fuuka sat down in front of the screens and didn't turn them on. She turned her chair around instead and folded her hands in her lap, a girl about to confess to a crime of very low stakes." },
        { s: 'fuuka', f: 'sad', t: "I was calibrating last night. Lucia. I do it when I can't sleep, I stretch her out over the dorm so I know she still reaches. And she reaches everything. Every room. I don't listen, I never listen. But she hears, and when she hears, I hear." },
        careful([
          { s: 'fuuka', f: 'neutral', t: "You were on the phone. At nine you said goodnight to {love1}. And at ten-thirty you said goodnight to {love2}. And both times you said it like... um." }
        ], [
          { s: 'fuuka', f: 'neutral', t: "You were on the phone. Twice. Two different goodnights. And both times you said it like... um." }
        ]),
        { n: "She stopped. Her ears had gone pink. Lucia, Solar thought, had a lot to answer for." },
        { choose: [
          { t: "Did you tell anyone?", notes: 0, then: [
            { s: 'fuuka', f: 'surprised', t: "No! Only Lucia. And Lucia doesn't gossip. She just glows a little more when she's pleased." }
          ] },
          { t: "(Bury your face in your hands.)", notes: 0, then: [
            { n: "She put her face in her hands. Through her fingers she could see Fuuka hovering, one hand half raised, unsure whether she was allowed to pat her shoulder." },
            { s: 'fuuka', f: 'sad', t: "I'm so sorry. If it helps, Junpei snores in B-flat. I've never told anyone that either." }
          ] },
          { t: "What did I sound like?", notes: 0, then: [
            { s: 'fuuka', f: 'happy', t: "Happy. Both times. That's why I didn't want to pretend I hadn't heard. It seemed like a nice thing to know about a friend." }
          ] }
        ] },
        { s: 'fuuka', f: 'happy', t: "I'll calibrate earlier from now on. Before nine. I promise." },
        { n: "She turned back to the monitors and switched them on, and the room filled with soft green light, and Fuuka, who could hear the whole dorm whenever she wanted to, very politely decided to listen somewhere else." }
      ] },

      /* ── Mitsuru offers logistics (three partners) ── */
      { id: 'h-logistics', date: '12/8', slot: 1, unlock: { romances: 3, seen: ['h-lucia'] }, music: 'joy',
        label: 'A busy heart', title: 'logistics', place: 'Iwatodai Dorm · Lounge', scene: [
        { n: "Mitsuru was waiting in the lounge with a leather planner open on her knee and a fountain pen uncapped, which was how Solar knew it was serious. Mitsuru used the fountain pen for budgets, Tartarus reports and, once, a strongly worded letter to the school cafeteria." },
        { s: 'mitsuru', f: 'neutral', t: "Sit down, Solar. Iori has briefed me." },
        { n: "Solar sat. Somewhere behind the kitchen door, Junpei made the sound of a man trying very hard not to make a sound." },
        careful([
          { s: 'mitsuru', f: 'neutral', t: "{love1}. {love2}. And, as of recently, {love3}. I'm told it was presented to him on a whiteboard. I've since confiscated the whiteboard." },
          { s: 'mitsuru', f: 'neutral', t: "Three is a great deal to coordinate. I've run operations with fewer moving parts." }
        ], [
          { s: 'mitsuru', f: 'neutral', t: "I'm told your calendar has become crowded. Iori presented it to me on a whiteboard. I've since confiscated the whiteboard." },
          { s: 'mitsuru', f: 'neutral', t: "That is a great deal to coordinate. I've run operations with fewer moving parts." }
        ]),
        { n: "She turned the planner around. Every evening for the next month was already ruled into neat columns. There was a color key. There was a column marked CONTINGENCIES." },
        { s: 'mitsuru', f: 'neutral', t: "The Kirijo Group keeps a car service. Discreet drivers. I could reserve tables under another name, at places that don't ask questions. And if anyone needs to be somewhere quickly..." },
        { s: 'solar', t: "Mitsuru-senpai, please don't say helicopter." },
        { s: 'mitsuru', f: 'surprised', t: "...I wasn't going to say helicopter." },
        { n: "She had been going to say helicopter." },
        { choose: [
          { t: "Thank you. I think I can manage.", notes: 0, then: [
            { s: 'mitsuru', f: 'neutral', t: "Of course. I only wanted you to know the offer stands." }
          ] },
          { t: "Can I see the color key?", notes: 0, then: [
            { n: "Mitsuru handed it over with the faint, pleased dignity of someone whose work had finally been appreciated. Red for evenings. Blue for weekends. A small gold star on every Sunday, labeled SLEEP, which Solar suspected had been negotiated with Junpei." }
          ] },
          { t: "(Take the fountain pen gently out of her hand.)", notes: 0, then: [
            { n: "She took the pen. Mitsuru let her, after a moment, and looked down at her own empty hand as if it had done something unexpected." },
            { s: 'mitsuru', f: 'neutral', t: "...Yes. Perhaps that's best." }
          ] }
        ] },
        { s: 'mitsuru', f: 'neutral', t: "For what it's worth, Solar. You were careful with everyone for a long time this year. It's good to see you careless with something. In the right way." },
        { n: "She closed the planner. She did not, Solar noticed, throw it away. She put it on the shelf beside the Tartarus reports, spine out, where it would be easy to find." }
      ] },

      /* ════ Friends who notice ════ */

      /* ── Kiriko: dai-kichi for love, twice ── */
      { id: 'h-kiriko', date: '10/24', slot: 0, unlock: { ...tease, links: { kiriko: 6 }, seen: ['h-whiteboard'] }, music: 'sun',
        label: 'A busy heart', title: 'double fortune', place: 'Naganaki Shrine', scene: [
        { n: "Kiriko met her at the shrine gate with the omikuji box already in both hands and the look Solar had learned, over the year, to be a little afraid of, the bright, conspiratorial look of a girl who knew something and had been waiting all morning to be asked." },
        { s: 'kiriko', f: 'happy', t: "Sol-chan! Fortune first. That's the rule. Then gossip." },
        { s: 'solar', t: "There's gossip?" },
        { s: 'kiriko', f: 'neutral', t: "There's always gossip at a shrine. People pray out loud. Shake." },
        { n: "Solar shook the box. A stick slid out of the hole. Kiriko read it, read it again, and turned it over like the back might have an explanation." },
        { s: 'kiriko', f: 'surprised', t: "...Dai-kichi. For love. That's great. That's really great. That's your second one this week." },
        { s: 'kiriko', f: 'happy', t: "I've been pulling fortunes since I was a kid and I've never seen anybody get dai-kichi for love twice in a row. The gods are either really happy for you or they think it's funny." },
        careful([
          { s: 'kiriko', f: 'happy', t: "Also, I saw you walk past the torii on Sunday with {love1}. And on Wednesday with {love2}. Same bench. Same vending machine. Different tea." }
        ], [
          { s: 'kiriko', f: 'happy', t: "Also, I've seen you walk past the torii with two different people this month. Same bench. Same vending machine. Different tea." }
        ]),
        { s: 'kiriko', f: 'neutral', t: "I notice tea. It's a shrine thing." },
        { choose: [
          { t: "Are you going to tell anyone?", notes: 0, then: [
            { s: 'kiriko', f: 'serious', t: "Sol-chan. I'm a shrine girl. People tell me things. I don't tell anybody anything." },
            { s: 'kiriko', f: 'happy', t: "...Except the fox. The fox knows everything." }
          ] },
          { t: "(Tie the fortune to the rack anyway.)", notes: 0, then: [
            { n: "She tied it to the rack with the others, even though you were supposed to keep the good ones, and Kiriko watched her do it and didn't stop her, and when it was done she reached up and straightened the knot." },
            { s: 'kiriko', f: 'neutral', t: "For luck. In case one dai-kichi isn't enough for two people." }
          ] },
          { t: "Is it bad? Two of them?", notes: 0, then: [
            { s: 'kiriko', f: 'neutral', t: "Sol-chan. You're asking a girl who carries kunai, paper charms and a fox spirit everywhere she goes." },
            { s: 'kiriko', f: 'happy', t: "I don't think more is ever bad. I think more is just more to carry. And you carry well." }
          ] }
        ] },
        { s: 'kiriko', f: 'happy', t: "Okay. Gossip's over. Race you to the vending machine. Loser buys the tea, and it's not going to be me, because I'm not the one with a busy heart." },
        { n: "She was gone before Solar could answer, a blur of white and orange up the shrine steps, and Solar ran after her, and lost, and bought the tea, and did not mind at all." }
      ] },

      /* ── Widowmaker: she sees everything from up there ── */
      { id: 'h-widowmaker', date: '11/9', slot: 1, unlock: { ...tease, links: { widowmaker: 4 }, seen: ['h-whiteboard'] }, music: 'night',
        label: 'A busy heart', title: 'through the scope', place: 'Moonlight Bridge', scene: [
        { n: "Widowmaker did not come down from the cables of Moonlight Bridge for anybody, which was why Solar had learned to climb, badly, in sneakers, hugging cold steel with her whole body while the bay slid by underneath in long black ripples and the city smeared its lights across the water." },
        { n: "She was waiting at the usual girder, lying along it with her rifle beside her like a sleeping cat, looking out over the bay through a scope that, Solar had been told, could read a bus timetable on the far shore." },
        { s: 'widowmaker', f: 'neutral', t: "You are late. Four minutes. I watched you leave the station." },
        { s: 'solar', t: "You were watching me?" },
        { s: 'widowmaker', f: 'neutral', t: "I watch everything. It is not personal. Usually." },
        { n: "She turned her head, slowly, and Solar knew from the particular angle of it, the slight lift at one corner of her mouth, that it was about to become personal." },
        careful([
          { s: 'widowmaker', f: 'neutral', t: "Tuesday. The station, eight-fifteen. You and {love1}. You laughed at something, and touched a sleeve. Here." },
          { s: 'widowmaker', f: 'neutral', t: "Thursday. Paulownia Mall, the second floor. You and {love2}. A different laugh. The same hand. The same sleeve, nearly." }
        ], [
          { s: 'widowmaker', f: 'neutral', t: "Tuesday. The station, eight-fifteen. You laughed at something someone said, and touched their sleeve. Here." },
          { s: 'widowmaker', f: 'neutral', t: "Thursday. Paulownia Mall, the second floor. A different someone. A different laugh. The same hand. The same sleeve, nearly." }
        ]),
        { s: 'widowmaker', f: 'happy', t: "I have very good eyes, chérie. And very little to do between contracts." },
        { choose: [
          { t: "Is that judgment I'm hearing?", notes: 0, then: [
            { s: 'widowmaker', f: 'happy', t: "Non. It is envy. A little. I have not laughed two different ways in years. I have barely laughed one." }
          ] },
          { t: "(Lie down on the girder beside her and say nothing.)", notes: 0, then: [
            { n: "She lay down on the girder beside her, carefully, the steel cold through her coat, and for a while neither of them said anything, and the bay moved underneath them, and Widowmaker, without looking, slid the scope over so that Solar could look through it too." }
          ] },
          { t: "Please don't follow anyone through that thing.", notes: 0, then: [
            { s: 'widowmaker', f: 'serious', t: "I never follow. I observe. If I followed, you would not know." },
            { s: 'widowmaker', f: 'happy', t: "But fine. For you, I will look at boats." }
          ] }
        ] },
        { s: 'widowmaker', f: 'neutral', t: "In France we would not even call this a scandal. We would call it Tuesday. And Thursday." },
        { s: 'widowmaker', f: 'sad', t: "...Be careful with them, petite. Hearts are very easy to hit from a distance. I would know." },
        { n: "She went back to her scope. Solar stayed, the wind pulling at her hair, and watched the lights of the bay for a long time, and didn't feel watched at all, which with Widowmaker, she was beginning to understand, was a kind of tenderness." }
      ] },

      /* ════ Run-ins: two of them, one place, the same day ════ */

      /* ── Astarion & Shadowheart: the shrine steps ── */
      { id: 'h-run-shrine', date: '11/12', slot: 1, unlock: { romance: ['astarion', 'shadowheart'], seen: ['h-whiteboard'] }, music: 'night',
        label: 'Small world', title: 'two cans of tea', place: 'Naganaki Shrine · Night', stamp: 'small-world', scene: [
        { n: "Shadowheart kept the shrine at night the way other people kept a garden, sweeping leaves off steps nobody would climb until morning, and Solar had come up the hill with two cans of hot tea and the comfortable, ordinary intention of sitting beside her on the top step until her hands stopped being cold." },
        { n: "Someone was already sitting on the top step. Pale hair, a coat far too nice for the weather, one leg crossed over the other with the air of a man who had arranged himself to be discovered." },
        { s: 'astarion', f: 'happy', t: "Darling. What a coincidence. I was just passing through this extremely out-of-the-way hill." },
        { s: 'shadowheart', f: 'serious', t: "He's been here forty minutes. He asked me whether the stone lanterns were original." },
        { n: "Solar stood three steps below them with a can of tea in each hand and watched the realization arrive on both their faces at very slightly different speeds. Astarion got there first. He always did. He had the decency to look delighted about it." },
        { s: 'astarion', f: 'happy', t: "Oh. Oh, this is wonderful. Two cans." },
        { s: 'shadowheart', f: 'surprised', t: "...Two cans." },
        { s: 'astarion', f: 'neutral', t: "One for me, obviously. And one for..." },
        { n: "He looked at Shadowheart. Shadowheart looked at the tea. Somewhere in the trees an owl said something rude." },
        { s: 'shadowheart', f: 'serious', t: "Sunshine. Is there something you'd like to tell us?" },
        { choose: [
          { t: "I only brought two. You're going to have to share.", notes: 0, then: [
            { s: 'astarion', f: 'happy', t: "I'll share. I'm wonderful at sharing. I shared a camp with this one for months." },
            { s: 'shadowheart', f: 'serious', t: "You stole my blanket every night." },
            { s: 'astarion', f: 'neutral', t: "I borrowed it with every intention of returning it." }
          ] },
          { t: "(Hand each of them a can and sit down between them.)", notes: 0, then: [
            { n: "She handed them each a can and sat down on the step between them, and for a long moment nobody said anything, and the three of them drank tea in the dark like that was a perfectly normal thing for three people to do." }
          ] },
          { t: "You two know each other better than either of you knows me.", notes: 0, then: [
            { s: 'shadowheart', f: 'neutral', t: "That's... not untrue." },
            { s: 'astarion', f: 'neutral', t: "It's a little untrue. I know a great deal about you. I pay attention. It's my only hobby that isn't illegal." }
          ] }
        ] },
        { s: 'shadowheart', f: 'neutral', t: "I'm not angry. I want that on the record. I'm just... working something out." },
        { s: 'astarion', f: 'neutral', t: "She's jealous." },
        { s: 'shadowheart', f: 'serious', t: "I'm not jealous." },
        { s: 'astarion', f: 'happy', t: "I am. Terribly. It's marvelous. In two hundred years I haven't been jealous of anything but people with reflections." },
        { n: "Shadowheart laughed. It surprised her, Solar could tell, the way it always did, as if the sound had come up from somewhere she hadn't checked in a while." },
        { s: 'shadowheart', f: 'happy', t: "Gods. Fine. Same time next week. But you're bringing three cans." },
        { s: 'astarion', f: 'happy', t: "And I'm sitting in the middle." },
        { n: "He did not sit in the middle. Solar did. Afterward they walked her to the bottom of the hill together, bickering the whole way about whose fault the blanket had been, and she let them, and didn't take a side, and didn't need to." }
      ] },

      /* ── Rio & Saori: the library desk ── */
      { id: 'h-run-library', date: '12/3', slot: 0, unlock: { romance: ['rio', 'saori'], seen: ['h-whiteboard'] }, music: 'school',
        label: 'Small world', title: 'overdue', place: 'Gekkoukan High · Library', stamp: 'small-world', scene: [
        { n: "The library after school was the quietest room in Gekkoukan, warm from the radiators and smelling of old paper and floor wax, and it was a measure of how strange the afternoon was going to be that the first thing Solar heard when she walked in was the squeak of volleyball shoes." },
        { n: "Rio was at the front desk in her practice jersey, number seven, hair still damp, holding a book by the very edge of its cover like it might go off. Saori was behind the desk in her committee armband, looking at the book and at Rio with the polite, total stillness of someone who has been asked a question she isn't sure she's allowed to answer." },
        { s: 'rio', f: 'flustered', t: "I just need to know if it's good. It's for somebody. She reads a lot. I don't, so I'm, I'm doing research." },
        { s: 'saori', f: 'neutral', t: "It's very good. It's one of my favorites. I recommended it to someone just last week, actually." },
        { s: 'rio', f: 'neutral', t: "Oh. Cool. Who?" },
        { n: "Saori opened her mouth. Then she looked past Rio's shoulder, at the door, at Solar standing in it, and closed it again. Rio turned around." },
        { s: 'rio', f: 'surprised', t: "...Oh." },
        { s: 'saori', f: 'surprised', t: "...Oh." },
        { n: "There was a long silence in which the radiator ticked, and a first-year at the back very slowly put down his pencil, and Solar thought about how many places in Iwatodai she could have been instead, and how out of all of them she had picked this one." },
        { s: 'rio', f: 'flustered', t: "Is that why you're always in here?" },
        { s: 'saori', f: 'flustered', t: "Is that why you're always at the gym on Tuesdays?" },
        { choose: [
          { t: "I'm in here because I like it here. And I'm in the gym because I like it there.", notes: 0, then: [
            { s: 'rio', f: 'flustered', t: "That's a really fair answer. I hate how fair that is." },
            { s: 'saori', f: 'happy', t: "It's a very good answer. It sounds like something out of a book." }
          ] },
          { t: "(Walk over and stand at the desk between them.)", notes: 0, then: [
            { n: "She walked over and stood at the desk between them, which was not a solution, but it was a position, and both of them seemed to breathe a little easier once she was close enough to look at." }
          ] },
          { t: "Rio. You're holding it upside down.", notes: 0, then: [
            { n: "Rio looked down. She was. She turned it over with enormous dignity, and Saori made a small sound behind her hand that was absolutely a laugh." }
          ] }
        ] },
        { s: 'saori', f: 'neutral', t: "Iwasaki-san. If it's for her, you should take it. She'll like it more because you picked it. That's how it works, with books." },
        { s: 'rio', f: 'neutral', t: "...You're really nice. That's so annoying." },
        { s: 'saori', f: 'happy', t: "I know. I'm sorry." },
        { s: 'rio', f: 'happy', t: "Okay. I'm checking it out. How do I check it out? I've never done this." },
        { n: "Saori showed her, slowly and carefully, the stamp and the card and the due date and the little pocket in the back, and Rio listened with the same frowning focus she gave a serve she hadn't landed yet, and by the end of it they were arguing, quietly and with great politeness, about whether you were allowed to dog-ear a page." },
        { n: "Solar sat at the nearest table and pretended to read and didn't turn a single page, and neither of them seemed to mind that at all." }
      ] },

      /* ── Cloud & Noctis: the end of the pier ── */
      { id: 'h-run-pier', date: '12/5', slot: 0, unlock: { romance: ['cloud', 'noctis'], seen: ['h-whiteboard'] }, music: 'sun',
        label: 'Small world', title: 'two coffees', place: 'Port Island · Pier', stamp: 'small-world', scene: [
        { n: "Noctis fished off the end of the Port Island pier the way some people meditated, which was to say badly and with a lot of yawning, and Solar had been sitting beside him with her legs over the edge for twenty minutes, not talking, when she heard the boots." },
        { n: "Cloud came down the pier with a plastic bag in one hand. Two canned coffees, she could tell from the way it swung. He saw Noctis. He saw Solar. He saw how close together they were sitting, and he stopped, with the sea wind pulling at his hair, and the bag went very still." },
        { s: 'cloud', f: 'neutral', t: "...Huh." },
        { s: 'noctis', f: 'neutral', t: "Hey." },
        { s: 'cloud', f: 'neutral', t: "Hey." },
        { n: "Nobody said anything for a while. A gull landed on the railing, looked at the three of them, and left, as if it had seen enough of this kind of thing for one lifetime." },
        { s: 'noctis', f: 'neutral', t: "So the coffee's for her." },
        { s: 'cloud', f: 'neutral', t: "...Yeah." },
        { s: 'noctis', f: 'happy', t: "Same. I mean, I didn't bring coffee. I brought her. To the pier. To fish. Which is basically coffee. Ignis would kill me for that sentence." },
        { choose: [
          { t: "You two could just talk to each other, you know.", notes: 0, then: [
            { s: 'cloud', f: 'serious', t: "We're talking." },
            { s: 'noctis', f: 'neutral', t: "This is the most we've ever talked." }
          ] },
          { t: "(Pat the boards on your other side.)", notes: 0, then: [
            { n: "She patted the boards on her other side. Cloud looked at the spot for a long second like it was a mission briefing, then sat down, stiffly, with the coffees between his knees." }
          ] },
          { t: "Cloud, give Noctis the other coffee.", notes: 0, then: [
            { s: 'cloud', f: 'flustered', t: "..." },
            { n: "He handed it over. Noctis took it. They both looked at the sea very hard, two men who had fought actual gods and were finding this, somehow, much more difficult." }
          ] }
        ] },
        { s: 'noctis', f: 'neutral', t: "For the record, I'm not mad. I don't really do mad. It takes too much energy." },
        { s: 'cloud', f: 'neutral', t: "Not mad either." },
        { s: 'noctis', f: 'happy', t: "Cool. Then I'm gonna say it. You've got good taste, Strife." },
        { s: 'cloud', f: 'flustered', t: "...So do you." },
        { n: "Noctis's line went taut. He reeled in a fish that was, by any reasonable standard, very small, and held it up to Cloud with the solemn pride of a prince presenting a treasure, and Cloud, after a pause, nodded at it, which from Cloud was a standing ovation." },
        { n: "They stayed until the light went orange. Nobody caught anything else. Solar drank the coffee and sat between them with her shoulders touching both of theirs, and thought she had never been this embarrassed, or this warm, on a pier in December." }
      ] },

      /* ── Akihiko & Haru: lunch on the roof, twice ── */
      { id: 'h-run-roof', date: '11/11', slot: 0, unlock: { romance: ['akihiko', 'haru'], seen: ['h-whiteboard'] }, music: 'sun',
        label: 'Small world', title: 'lunch, twice', place: 'Gekkoukan High · Rooftop Garden', stamp: 'small-world', scene: [
        { n: "Haru's garden on the Gekkoukan roof had survived the first cold week of November under plastic sheeting she tucked in every evening like a bedspread, and Solar had come up after class because Haru had texted, very formally, that she had made too much lunch." },
        { n: "Haru had made too much lunch. It was laid out on a cloth on the bench between the planters, a three-tier bento and a thermos that steamed when she opened it. And at the other end of the bench, holding a paper bag from the convenience store and looking extremely caught, was Akihiko." },
        { s: 'akihiko', f: 'surprised', t: "Solar. Hey. She said there was extra." },
        { s: 'haru', f: 'happy', t: "There is extra! There's always extra. I thought, Akihiko-senpai is always hungry, and Solar-chan never eats properly, and..." },
        { n: "She stopped. Her eyes went from the paper bag in Akihiko's hand, which Solar could see held two protein bars and two cartons of milk, very obviously bought for two, to Solar, and back again. The smile stayed exactly where it was. Something behind it quietly rearranged the furniture." },
        { s: 'haru', f: 'neutral', t: "Oh. I see." },
        { s: 'akihiko', f: 'blushing', t: "...Ah." },
        { s: 'haru', f: 'happy', t: "No, it's all right! I'm not upset. I have a very calm heart. I garden." },
        { n: "She said it while slicing a rolled omelet into perfectly even pieces with a small, very sharp knife, and Solar watched the knife, and Akihiko watched the knife, and neither of them said anything about the knife." },
        { choose: [
          { t: "There's enough for three. There's always enough for three.", notes: 0, then: [
            { s: 'haru', f: 'happy', t: "That's exactly what I was going to say!" },
            { s: 'akihiko', f: 'happy', t: "I'll put the protein bars in the middle. As an offering." }
          ] },
          { t: "(Sit down between them and pick up the chopsticks.)", notes: 0, then: [
            { n: "She sat down between them and picked up the chopsticks, because there was nothing else to do and the omelet was going to get cold, and Haru beamed at her like she'd passed a test she hadn't known she was taking." }
          ] },
          { t: "Haru, please put the knife down.", notes: 0, then: [
            { s: 'haru', f: 'surprised', t: "Oh! I'm sorry. Is it a scary knife?" },
            { s: 'akihiko', f: 'neutral', t: "It's a little bit of a scary knife." }
          ] }
        ] },
        { s: 'akihiko', f: 'neutral', t: "For what it's worth, Okumura, I get it. She's easy to want to feed." },
        { s: 'haru', f: 'happy', t: "Isn't she? She never stops. Running here, running there. Somebody has to make sure she sits down." },
        { s: 'akihiko', f: 'happy', t: "I've been saying that for months." },
        { n: "They shook on it over the bento with a seriousness that suggested a treaty, and spent the rest of lunch comparing notes on what Solar ate and when, as if she were a houseplant they were jointly responsible for, while she sat between them and ate and said nothing, because her mouth was full, and because she didn't trust what her face was doing." },
        { n: "Akihiko left first, for practice. At the door he looked back, and Haru waved at him, cheerfully, with the hand that was still holding the knife, and he laughed all the way down the stairs." }
      ] },

      /* ── Akihiko & Kasumi: the plank war ── */
      { id: 'h-run-gym', date: '12/21', slot: 0, unlock: { romance: ['akihiko', 'kasumi'], seen: ['h-whiteboard'] }, music: 'joy',
        label: 'Small world', title: 'plank, rematch', place: 'Gekkoukan High · Gym', stamp: 'small-world', scene: [
        { n: "The plank contest had been running in the Gekkoukan gym since September, long enough that nobody remembered who had won it last, and when Solar came in out of the cold with her scarf up over her nose it had flared up again on the mats." },
        { n: "Akihiko was down on his forearms in a perfect line. Beside him, in glasses and an old track jacket, hair down, Sumire held the same position with her eyes closed and her mouth set, the way she held everything now, like it was hers and she had fought for it." },
        { s: 'akihiko', f: 'neutral', t: "Solar. Good. Keep time." },
        { s: 'kasumi', f: 'happy', t: "Senpai! You came! Watch this, I'm going to win it for you." },
        { s: 'akihiko', f: 'surprised', t: "...For her?" },
        { s: 'kasumi', f: 'surprised', t: "...For her?" },
        { n: "Neither of them broke form. That was the remarkable thing. They turned their heads, very slowly, the only part of them that moved, and looked at each other along the mat, and Solar watched the math happen behind both pairs of eyes with the specific dread of a girl who had brought exactly one bottle of water." },
        { s: 'akihiko', f: 'serious', t: "Yoshizawa. Are you saying what I think you're saying?" },
        { s: 'kasumi', f: 'serious', t: "I think I'm saying exactly what you're saying, Sanada-senpai." },
        { s: 'akihiko', f: 'serious', t: "Then this just got serious." },
        { choose: [
          { t: "It was already serious. You've been doing this since September.", notes: 0, then: [
            { s: 'kasumi', f: 'happy', t: "That's fair. That's very fair." },
            { s: 'akihiko', f: 'neutral', t: "Don't distract me with facts." }
          ] },
          { t: "(Start the stopwatch and say nothing.)", notes: 0, then: [
            { n: "She started the stopwatch and said nothing, which was the only neutral position available in that gym, and sat down on the bleachers to hold it." }
          ] },
          { t: "Whoever loses buys dinner. For the winner and me.", notes: 0, then: [
            { s: 'akihiko', f: 'happy', t: "Deal." },
            { s: 'kasumi', f: 'happy', t: "Deal! Wait. Wait, that's two dinners." }
          ] }
        ] },
        { n: "Two minutes. Three. Akihiko's arms began to shake. Sumire's jaw went tight. At four minutes and ten seconds they both, at exactly the same moment, gave up and collapsed face-first onto the mat, and lay there laughing into the vinyl, which smelled like every gym in the world." },
        { s: 'kasumi', f: 'happy', t: "A tie! It's a tie, Senpai. Did you see?" },
        { s: 'akihiko', f: 'happy', t: "I saw. You're good, Yoshizawa. You were always good. You're better now." },
        { s: 'kasumi', f: 'blushing', t: "...Thank you. That means a lot. From you." },
        { n: "He rolled onto his back and held out a fist without looking. She bumped it with hers, still flat on the mat, and then they both looked over at Solar on the bleachers, stopwatch in hand, and grinned, two people who had just decided to share her instead of fighting about it, and had decided it in the only language they both spoke fluently." },
        { s: 'akihiko', f: 'neutral', t: "Dinner. All three of us." },
        { s: 'kasumi', f: 'happy', t: "Who's paying? It was a tie!" },
        { s: 'akihiko', f: 'happy', t: "Then we both pay. Come on." }
      ] },

      /* ── Haru & Kasumi: two of the same bouquet ── */
      { id: 'h-run-flowers', date: '12/21', slot: 0, unlock: { romance: ['haru', 'kasumi'], seen: ['h-whiteboard'] }, music: 'joy',
        label: 'Small world', title: 'the same flowers', place: 'Paulownia Mall · Flower Stall', stamp: 'small-world', scene: [
        { n: "The flower stall in Paulownia Mall had put out its winter stock, white and red and a deep, serious green, and Solar was waiting by the fountain because two separate people had told her, in two separate texts, to wait by the fountain." },
        { n: "They arrived from opposite ends of the mall at the same time, each holding a small bouquet wrapped in brown paper, and stopped three steps apart, and looked at each other's flowers. They were the same flowers. Of course they were. The stall only had so many." },
        { s: 'haru', f: 'surprised', t: "Oh! You're... Yoshizawa-san? From Shujin? The gymnast?" },
        { s: 'kasumi', f: 'surprised', t: "Okumura-senpai?! You're here too?" },
        { s: 'haru', f: 'happy', t: "Since June! I have a garden on a roof. It's a long story. Oh, it's so nice to see someone from home!" },
        { n: "They clasped hands, flowers and all, and for about four seconds it was the warmest reunion Solar had ever seen in a shopping mall. Then they both looked down at the bouquets, and at each other's bouquets, and at Solar by the fountain, and the four seconds ended." },
        { s: 'kasumi', f: 'blushing', t: "...Those are for Senpai, aren't they." },
        { s: 'haru', f: 'neutral', t: "...So are yours." },
        { choose: [
          { t: "They're beautiful. Both of them.", notes: 0, then: [
            { s: 'haru', f: 'happy', t: "They are, aren't they? I'd have picked the same ones." },
            { s: 'kasumi', f: 'happy', t: "You DID pick the same ones." }
          ] },
          { t: "(Hold out both hands.)", notes: 0, then: [
            { n: "She held out both hands, one for each of them, and they put their bouquets in them at the same moment and stepped back to look, and Solar stood by the fountain holding two of the same bouquet like a girl in a slightly confusing painting." }
          ] },
          { t: "You two went to the same school?", notes: 0, then: [
            { s: 'kasumi', f: 'neutral', t: "Okumura-senpai was a third-year. Everyone knew her. She grew vegetables on the roof, and nobody was allowed to step on them." },
            { s: 'haru', f: 'happy', t: "And everyone knew Yoshizawa-san. She did a handspring down the hallway once, and a teacher dropped an entire stack of tests." }
          ] }
        ] },
        { s: 'haru', f: 'neutral', t: "I'm not upset, Yoshizawa-san. I think I'm a little proud of her, actually. Two people bringing her flowers on the same day." },
        { s: 'kasumi', f: 'happy', t: "Me too. Is that strange?" },
        { s: 'haru', f: 'happy', t: "Probably. Let's be strange together. I know a café upstairs." },
        { n: "They took her by an elbow each and steered her toward the escalator, talking across her about Tokyo and teachers they both remembered and a vending machine on the second floor at Shujin that only ever gave out melon soda, and Solar carried the flowers and let herself be steered." },
        { n: "At the top of the escalator Sumire laughed at something Haru said, a real laugh, and Haru laughed back, and Solar, with two of the same bouquet in her arms, thought the stall really ought to stock more than one kind of flower, and was very glad it didn't." }
      ] },

      /* ── Kuromi & Rohan: worthy adversaries ── */
      { id: 'h-run-bookworms', date: '12/22', slot: 0, unlock: { romance: ['kuromi', 'rohan'], seen: ['h-whiteboard'] }, music: 'joy',
        label: 'Small world', title: 'worthy adversaries', place: 'Iwatodai Strip · Bookworms', stamp: 'small-world', scene: [
        { n: "Bookworms smelled like dust and old glue and the green tea the owners kept on a hot plate by the register, and Rohan had claimed the back table so completely that the regulars walked around it like a roped-off monument. Solar was sitting across from him, watching him ink a panel, when the door banged open and the bell nearly came off its spring." },
        { s: 'kuromi', f: 'serious', t: "ROHAN KISHIBE. I know you're in here. I can smell the arrogance." },
        { s: 'rohan', f: 'neutral', t: "That's the tea." },
        { n: "Kuromi marched down the aisle between the shelves with a rolled-up manga page in one fist like a declaration of war, which, Solar would learn shortly, was exactly what it was. She reached the back table. She saw Solar. She stopped." },
        { s: 'kuromi', f: 'surprised', t: "...What are YOU doing here?" },
        { s: 'rohan', f: 'happy', t: "She keeps me company. She does that. On Thursdays." },
        { s: 'kuromi', f: 'surprised', t: "She does that with ME. On Mondays." },
        { n: "Rohan's pen stopped. He looked at Kuromi. He looked at Solar. He put the cap back on the pen, which Solar had never once seen him do in the middle of a panel." },
        { s: 'rohan', f: 'serious', t: "Interesting." },
        { s: 'kuromi', f: 'serious', t: "Don't you dare 'interesting' me. Did you read her? Did you do your creepy page thing and find out she likes me and decide to steal her for research?" },
        { s: 'rohan', f: 'serious', t: "I don't need to read anybody for this. It's all over her face. It's all over yours too, frankly. You're very easy to draw right now." },
        { choose: [
          { t: "Nobody's stealing anybody. I'm not a pen.", notes: 0, then: [
            { s: 'kuromi', f: 'flustered', t: "...Okay, that's fair. But if you WERE a pen..." },
            { s: 'rohan', f: 'neutral', t: "She'd be a G-pen. Obviously." }
          ] },
          { t: "(Pull out the chair beside you for Kuromi.)", notes: 0, then: [
            { n: "She hooked the chair beside her with one foot and pulled it out. Kuromi looked at it with deep suspicion, then sat down anyway, arms crossed, glaring across the table at Rohan like they were about to play cards for somebody's soul." }
          ] },
          { t: "What's on the manga page?", notes: 0, then: [
            { n: "Kuromi unrolled it. It was a drawing of Rohan, in her rough, furious, surprisingly good style, being sat on by a very large bunny with a skull on its hood." },
            { s: 'rohan', f: 'happy', t: "...The anatomy's improving." }
          ] }
        ] },
        { s: 'kuromi', f: 'serious', t: "Fine. FINE. New rule. Mondays are mine, Thursdays are yours, and the rest of the week she does whatever she wants, because she's not a pen." },
        { s: 'rohan', f: 'neutral', t: "Agreed. And I'm drawing this. All of it." },
        { s: 'kuromi', f: 'happy', t: "Only if I'm taller than you in it." },
        { s: 'rohan', f: 'serious', t: "...I refuse." },
        { n: "They argued about it for an hour. Solar drank the owners' tea and watched Rohan draw the three of them at the back table, Kuromi taller than him by exactly one ear, and when he finished he signed it and tore it out and gave it, not to either of them, but to her." }
      ] },

      /* ── Haechan & Jungwon: the laundry room ── */
      { id: 'h-run-laundry', date: '1/10', slot: 1, unlock: { romance: ['haechan', 'jungwon'], seen: ['h-whiteboard'] }, music: 'night',
        label: 'Small world', title: 'you look like someone', place: 'Iwatodai Dorm · Laundry Room', stamp: 'small-world', scene: [
        { n: "The laundry room light was doing its usual dying flicker, and Haechan was sitting cross-legged on the folding table with her basket in his lap, folding her shirts into perfect identical squares while the dryer thumped behind him like a second heartbeat. Solar had stopped trying to help weeks ago. He was better at it, and he liked to be." },
        { n: "Footsteps on the stairs. Measured ones, the kind that counted. Then Jungwon in the doorway in his school coat with her scarf folded over one arm, the scarf she'd left in the council room that afternoon, carried across town at eleven at night because, she suspected, he had not been able to stand the thought of it being somewhere it didn't belong." },
        { s: 'jungwon', f: 'neutral', t: "You left this. I didn't want you to be cold tomorrow. I'm not staying, I just..." },
        { n: "He saw Haechan. Haechan, mid-fold, saw him. Something passed across both their faces, quick, like headlights sweeping a dark room, there and gone." },
        { s: 'haechan', f: 'neutral', t: "Vending machine guy." },
        { s: 'jungwon', f: 'serious', t: "Dryer guy." },
        { s: 'haechan', f: 'happy', t: "Yeah." },
        { n: "Jungwon looked at the shirt in Haechan's hands. It was Solar's. He looked at the scarf over his own arm. Also Solar's. Solar watched him do the arithmetic. He was very fast at arithmetic. It was, she suspected, the least helpful skill he had at that moment." },
        { s: 'jungwon', f: 'flustered', t: "...Oh." },
        { s: 'haechan', f: 'neutral', t: "Yeah. Oh." },
        { s: 'jungwon', f: 'serious', t: "Sorry. You look like someone." },
        { s: 'haechan', f: 'neutral', t: "Everybody says that. You too, by the way." },
        { choose: [
          { t: "Sit down, both of you. The dryer's warm.", notes: 0, then: [
            { s: 'haechan', f: 'happy', t: "She's right. Best seat in the building." },
            { n: "Jungwon sat on the very edge of the second dryer like it might be against regulations, which in his world it probably was." }
          ] },
          { t: "(Take the scarf and wrap it around your neck.)", notes: 0, then: [
            { n: "She took the scarf out of Jungwon's hands and wound it around her neck, and it was still warm from his arm, and both of them watched her do it, and neither of them said anything, and somehow that was worse than if they had." }
          ] },
          { t: "Haechan, you're folding that wrong.", notes: 0, then: [
            { s: 'haechan', f: 'surprised', t: "I have never folded anything wrong in my life." },
            { s: 'jungwon', f: 'neutral', t: "The sleeves are uneven. By about a centimeter." },
            { s: 'haechan', f: 'serious', t: "...Get out of my laundry room." }
          ] }
        ] },
        { s: 'jungwon', f: 'serious', t: "I want to be clear that I'm not upset. I'd like that in the minutes. I'm just recalibrating." },
        { s: 'haechan', f: 'happy', t: "He talks like a memo." },
        { s: 'jungwon', f: 'flustered', t: "I write strongly worded memos. It's different." },
        { s: 'haechan', f: 'neutral', t: "Sure." },
        { n: "He held out a shirt. Jungwon looked at it like it was a trick. Then he took it and folded it, slowly and very precisely, and handed it back, and Haechan inspected the corners for a long moment and nodded, which Solar understood was the most generous thing he had ever done for a stranger." },
        { s: 'haechan', f: 'neutral', t: "Not bad, president." },
        { s: 'jungwon', f: 'surprised', t: "...How do you know I'm a president?" },
        { s: 'haechan', f: 'happy', t: "You look like one." },
        { n: "They folded the rest of her laundry together, in silence, on either side of the table, and Solar sat on the warm dryer between them with her chin in her scarf and listened to two boys who each looked like someone not quite fight over the correct way to fold a towel, and thought that in some other world this might have gone very differently, and was glad, so glad, to be in this one." }
      ] }
    ],

    places: []
  });
})();
