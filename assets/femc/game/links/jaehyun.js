/* Jaehyun · ? Revamp social link data (femc-game.html). Format: link fields in assets/femc/game/core.js, scene lines in scene.js.
   Searcher (Runners), friendship: her brother. Junior, quarterback and team captain, measured, calibrated, already finished
   thinking by the time he speaks. He reads the field and calls the audible without asking anyone what the play is, which is
   the one thing she can't stand in any life (plot doc §7: "he quietly puts himself between her and everything, which she
   recognizes and hates before she knows why"). His crossing (10/24→25, story-act4 'a4-knock': three knocks on the dorm
   door, nobody on the step, wet footprints down the Strip, the hour ending in the rain, "You weren't hard to find. You were
   hard to reach.", the umbrella) is a story event; rank 1 is the first afternoon after. No Persona (Kat's ruling).
   Canon echoes (Runners Ch 4, 15, 45, 61): "Are you settling in alright?" / "Do not be hostile" / "You know what I said
   about the hostility" / "Don't wanna hear it, Jae" / "Call if you need anything. You won't. But the offer stands." / the
   head pat nobody sees / "Thanks for doing this, sister." / "Good luck today, sister." / he kept eSports from their father /
   "You're not wearing enough layers" / "it's winter, Solar" / "It's a table!" "It's a schedule, Solar." / the shoulder rolled
   twice / dark brown hair in a side part / her contact name for him, "big bro". He texts with capitals and periods; she
   doesn't. Never used: "You gave them an order. You never asked me anything" (dead line per the Runners skill). Nothing
   here moves Runners' plot: what he knows and doesn't about the boys stays where the book has it, and no home event past
   the page is invented (the stadium memory is kept vague: the suite, the glass, Father).
   Flags this link sets and reads (all its own):
     jaehyun-bigbro / jaehyun-named  rank 1, what she saves his number as (else it stays 'Unknown number'); read by the
                                     contact label in ranks 3 and 7 and the rename in rank 10, and afterMax 'big bro'.
     jaehyun-no-grades               rank 2, she told him he doesn't get to grade her calls; read by afterMax 'the notebook'.
     jaehyun-ball                    rank 4, "I'm not a ball"; read in rank 9.
     jaehyun-told-off / jaehyun-asked / jaehyun-walked   rank 5, how she met the audible; read at the top of rank 6.
     jaehyun-call-it / jaehyun-own-play                  rank 8, who tells Father about singing; read in rank 10.
   Reads story flags route-R / route-true / route-stay (the solstice, 12/21) in rank 9, rank 10 and afterMax 'floodlights',
   and ifMet kiriko (ranks 4, 6) and wren (rank 8: his jaw does something, plot doc §7). Branches never hold choices, so a
   rank's meter (maxNotes) is the same on every path.
   Fragments: runners-stadium (rank 3, plot doc §8 R6); runners-lake (rank 10, camping: the fire, "Sit down", him not
   asking; Mark's rank 10 can give it first; both set flag mem-camp). Arcana: '?' (open question, plot doc §16.6). He never closes (searchers
   go home on 3/6 in the story), so afterMax plays in person from 1/25 and never as traces. */
(window.FEMC_GAME_LINKS ||= []).push({
  id: 'jaehyun', name: 'Jaehyun Lee', short: 'Jaehyun', arcana: 'Emperor', numeral: '', from: 'Runners',
  kind: 'searcher', world: 'R', romance: null,
  starts: '10/24', gate: { R: 5 },
  home: { area: 'shrine', spot: 'The Steps', slot: 'after', days: [1, 2, 4, 5, 6],
          hint: 'Afternoons at Naganaki Shrine, running the hundred and twelve steps until the light goes.' },
  approach: "Someone is running the steps at Naganaki Shrine, all hundred and twelve of them, up and down, at a pace that makes the old man by the offering box stop sweeping to watch, and when he reaches the bottom he sees you and stops, not out of breath, like he'd been expecting you to arrive at exactly this minute.",
  cast: {},
  invite: {
    ask: [
      "Are you free this afternoon?",
      "I'm at the shrine. Come if you want. I'll be here regardless.",
      "Have you eaten. Don't answer that. Come to the Strip.",
      "I need someone to time me. You're the only one who doesn't round.",
      "Fuuka says you went to Tartarus last night. Come here. I want to look at your shoulder.",
      "Come walk with me. I'm not going to lecture you. Probably.",
      "I bought tape. I can't do my own left hand. You know how.",
      "There's a ramen place on the Strip that Junpei says is the best in the city. I'd like a second opinion. Yours.",
      "Mitsuru lent me a book on the history of this city. It's very long. Come and tell me which parts matter.",
      "The steps are wet. I'm running them anyway. Come and tell me I shouldn't.",
      "I'm at the bottom of the steps. That's all. That's the message."
    ],
    ok: ["Good.", "Good. Bring water.", "I'll wait at the bottom of the steps.", "Good. Wear a coat. A real one.", "I'll be the tall one. You'll find me."],
    no: ["Understood.", "Fine. Call if you need anything. You won't. But the offer stands.", "Tomorrow, then.", "Alright. Eat something.", "Noted. I'm running them anyway."]
  },
  hangouts: [
    [
      { n: "He was running the steps. He was always running the steps. A hundred and twelve, up, a hundred and twelve, down, and at the bottom he checked his watch and didn't look pleased and started again, and the gravel at the foot of the stairs had a groove worn in it now, a little crescent where he turned, that the old man with the broom had stopped trying to rake out." },
      { s: 'jaehyun', f: 'neutral', t: "Time me. From the bottom. Don't round." },
      { choose: [
        { t: "(Time him exactly.)", notes: 3, then: [
          { n: "Two minutes, forty-one seconds, and three tenths. She read it out with the tenths. He nodded once, like a stock price had gone the way he'd expected." },
          { s: 'jaehyun', f: 'neutral', t: "Thank you. Nobody ever gives me the tenths." },
          { s: 'jaehyun', f: 'neutral', t: "At home they round up. To be kind. I don't need kind. I need the tenths." }
        ] },
        { t: "(Tell him he was slower than he was.)", notes: 2, then: [
          { s: 'jaehyun', f: 'happy', t: "I wasn't. I know I wasn't. You do that to make me go again." },
          { n: "He went again. He was faster. He didn't say anything about it, and neither did she, and when he came down the last step he held out his hand for the watch without looking, as if she'd been handing it back to him her whole life." }
        ] },
        { t: "(Run it with him.)", notes: 3, then: [
          { n: "She ran it with him. She lost by about forty steps. At the top he was waiting, not out of breath, holding out a bottle of water without looking, and she took it without looking, and they both pretended that wasn't a thing they'd done a thousand times." }
        ] }
      ] }
    ],
    [
      { n: "He'd taken over a corner of the dorm's dining table with a notebook and a pencil and a diagram of the first floor of Tartarus that Fuuka had drawn for him, and he was marking it with small neat x's and arrows, frowning, like a coach the night before a game." },
      { s: 'jaehyun', f: 'neutral', t: "Your rotation is good. Your second-floor approach leaves the stairs open for eleven seconds. I'd close that." },
      { choose: [
        { t: "Thank you, coach.", notes: 2, then: [
          { s: 'jaehyun', f: 'neutral', t: "Very funny, Solar." }
        ] },
        { t: "You've never been in there.", notes: 3, then: [
          { s: 'jaehyun', f: 'neutral', t: "No. I watch film. I listen to the radio. It's the same thing." },
          { s: 'jaehyun', f: 'sad', t: "...It isn't the same thing. I know that. I'm doing the only part I can do." }
        ] },
        { t: "(Take the pencil. Draw where you actually go.)", notes: 3, then: [
          { n: "She took the pencil out of his hand. He let her. She drew the way the floor really went, the corridor that wasn't on Fuuka's map because it moved, the corner where the light was wrong, the place they always stopped so Junpei could complain, and he watched every line she made with his chin on his fist and didn't correct a single one." },
          { s: 'jaehyun', f: 'surprised', t: "...That's better than mine." },
          { s: 'jaehyun', f: 'flustered', t: "Don't look at me like that. I'm capable of saying it. I just don't get many chances." }
        ] }
      ] }
    ],
    [
      { n: "He cooked. That was the strange thing nobody had expected. Not well. With total commitment. He'd make the same thing every Sunday at the dorm, rice and eggs and some kind of grilled meat, enormous portions, carefully measured, and put a plate in front of everyone in S.E.E.S. without asking what they wanted, and stand there until they ate it." },
      { s: 'jaehyun', f: 'neutral', t: "Protein. Carbohydrates. You're all underfed. Iori, eat the egg." },
      { choose: [
        { t: "(Eat all of it. Pointedly.)", notes: 3, then: [
          { n: "She ate all of it. He watched her do it with no expression at all and then, when the plate was clean, put his hand on top of her head for half a second, so quick no one at the table saw, and went back to the stove." }
        ] },
        { t: "You didn't ask what I wanted.", notes: 2, then: [
          { s: 'jaehyun', f: 'neutral', t: "...No. I didn't." },
          { s: 'jaehyun', f: 'neutral', t: "What do you want?" },
          { n: "She told him. He made it. It took him twenty minutes and it was worse, and she ate all of it, and neither of them said anything about why." }
        ] }
      ] }
    ],
    [
      { n: "Hagakure at six was steam and noise and the cook shouting orders back at himself, and Jaehyun had folded himself onto a stool at the counter that was built for someone about a foot shorter, and was on his third bowl. Not hurrying. Methodical. The way you'd fill a tank." },
      { n: "Junpei, two stools down, had stopped eating his own to watch, chopsticks in the air, with the expression of a man witnessing a natural disaster he'd only read about." },
      { s: 'junpei', f: 'surprised', t: "Dude. Dude. That's three. That's a whole family's worth of ramen. Where does it GO?" },
      { s: 'jaehyun', f: 'neutral', t: "I run the steps for two hours a day. At home I lift before class. I eat six times a day and I'm still told I'm underweight." },
      { s: 'jaehyun', f: 'happy', t: "...This is the first time in three years I've eaten something that wasn't on a sheet." },
      { choose: [
        { t: "(Order him a fourth. Pay for it.)", notes: 3, then: [
          { n: "She slid her yen across the counter and held up one finger at the cook, and pointed at her brother, and the cook looked at Jaehyun, and at the three bowls, and back at her, and shrugged the shrug of a man who'd seen everything." },
          { s: 'jaehyun', f: 'surprised', t: "..." },
          { s: 'jaehyun', f: 'flustered', t: "You've never once paid for anything I've eaten. Not in your life." },
          { s: 'jaehyun', f: 'happy', t: "...I'm going to eat all of it out of spite." }
        ] },
        { t: "What's on the sheet?", notes: 2, then: [
          { s: 'jaehyun', f: 'neutral', t: "Chicken. Rice. Broccoli. Eggs. Sweet potato. Shakes that taste like chalk. There's a nutritionist. She's very nice. She has opinions about sauce." },
          { s: 'junpei', f: 'happy', t: "Senpai would LOVE you. Akihiko-senpai. You guys should start a club. Protein Guys." },
          { s: 'jaehyun', f: 'serious', t: "I've met him. We're already in it." }
        ] },
        { t: "(Steal his egg.)", notes: 2, then: [
          { n: "She reached over with her chopsticks and took the soft-boiled egg out of his bowl, and he watched her do it without moving, the way a large dog watches a small one take its toy, and then went on eating as if the egg had never existed." },
          { s: 'jaehyun', f: 'happy', t: "You did that when you were five. Every egg. Every time. Mother thought it was a phase." }
        ] }
      ] }
    ],
    [
      { n: "He was sitting on the third step from the bottom with a roll of white athletic tape between his teeth and his left hand spread on his knee, trying to tape two fingers together one-handed, and failing at it in a slow, patient, deeply offended way." },
      { s: 'jaehyun', f: 'flustered', t: "It's jammed. Not broken. I fell on it. On the steps. Don't tell anyone I fell on the steps." },
      { s: 'jaehyun', f: 'neutral', t: "The trainers do this. At home. I've never once had to do my own." },
      { choose: [
        { t: "(Take the tape. Do it for him.)", notes: 3, then: [
          { n: "She took the roll out of his mouth and sat down on the step below him and taped his fingers, the middle and the ring, buddy-wrapped, two turns above the knuckle and two below, and her hands knew how. That was the thing. They didn't hesitate. They tore the tape clean with a little twist she'd never been taught and smoothed the end flat with her thumb." },
          { n: "He looked at his hand when she was done. He turned it over. He bent the fingers, once." },
          { s: 'jaehyun', f: 'surprised', t: "...You watched them do it. The trainers. You'd sit on the bench outside the facility when you were fourteen and wait for the car, and watch. I didn't think you were paying attention." },
          { s: 'jaehyun', f: 'neutral', t: "You're always paying attention. You just don't let anyone catch you at it." }
        ] },
        { t: "Show me how and I'll do it.", notes: 2, then: [
          { s: 'jaehyun', f: 'neutral', t: "Two turns above the knuckle. Two below. Not too tight or the fingers go white. You've seen it done." },
          { n: "She hadn't. She was sure she hadn't. She did it perfectly the first time, and he looked at the tape and then at her, and didn't say anything, which was its own sentence." }
        ] },
        { t: "You should get that looked at.", notes: 1, then: [
          { s: 'jaehyun', f: 'neutral', t: "By who? The shrine?" },
          { s: 'jaehyun', f: 'serious', t: "It's fine, Solar. I've played on worse. Hand me the tape." },
          { n: "She handed him the tape. He did it badly, one-handed, and wore it badly all afternoon, and didn't complain once, which was, she was beginning to understand, the only complaint he ever made." }
        ] }
      ] }
    ],
    [
      { n: "He walked her home from the shrine. He always walked her home from the shrine, whether she'd asked or not, and he always walked on the street side, between her and the traffic, and somewhere around the second corner she noticed it, and moved, on purpose, to the outside." },
      { n: "He moved too. Without a word. Without seeming to notice he'd done it. Two steps, and he was on the street side again, and she was on the inside, by the walls and the shop windows and the vending machines humming to themselves." },
      { choose: [
        { t: "(Switch sides again. And again.)", notes: 3, then: [
          { n: "She switched. He switched. She switched back. He switched back. By the fourth time a woman with a shopping bag had stopped to watch them, and by the sixth Solar was laughing so hard she had to stop walking, and he was standing on the street side with his hands in his coat pockets looking down at her with no expression at all, except the very corner of his mouth." },
          { s: 'jaehyun', f: 'happy', t: "You did this when you were nine. On Madison. For eleven blocks. You lost then, too." },
          { s: 'jaehyun', f: 'happy', t: "...You've never won. I want you to know you'll never win." }
        ] },
        { t: "Why do you do that?", notes: 3, then: [
          { s: 'jaehyun', f: 'neutral', t: "Because if something comes off the road, it hits me first." },
          { s: 'jaehyun', f: 'neutral', t: "I get hit for a living. I'm very good at it. You're not." },
          { n: "He said it like a fact about the weather. She walked on the inside for the rest of the way home and didn't move again, and she couldn't have told anyone, if they'd asked, whether she'd let him or just gotten tired." }
        ] },
        { t: "(Let him. Stay on the inside.)", notes: 2, then: [
          { n: "She let him. It felt like losing an argument nobody had said out loud. It also felt, under that, like a coat she'd forgotten she owned, put on in the dark, that fit." }
        ] }
      ] }
    ],
    [
      { n: "He was sitting at the top of the steps with his phone in his hand, not looking at it, the way you'd hold a stone you'd picked up on a beach and couldn't decide whether to keep." },
      { n: "When she sat down next to him he turned the screen toward her without a word. The clock in the corner said the same minute it always said. Under it, a column of messages, all his, to a contact called *Mother*, one a day, every day since he'd crossed, each with a small red mark beside it that meant it hadn't gone anywhere." },
      { n: "*She's safe.* *She's safe.* *She's well. She's eating.* *She's safe.*" },
      { s: 'jaehyun', f: 'neutral', t: "Nothing goes out. Not to Mother. Not to the team. Not to Johnny, and Johnny answers everything." },
      { s: 'jaehyun', f: 'sad', t: "I send them anyway. In case it goes through all at once one day. I want there to be a record." },
      { choose: [
        { t: "(Take the phone. Type one yourself.)", notes: 3, then: [
          { n: "She took it. He let her. She typed with her thumbs, the way she apparently always had, fast and sloppy, and didn't capitalize anything, and sent it, and watched the red mark come up beside it like all the others." },
          { n: "*im ok. hes being annoying. tell father nothing.*" },
          { n: "Jaehyun read it over her shoulder. He made a sound she'd never heard him make, short, through his nose, that she realized, a second too late to turn and see it, was a laugh." },
          { s: 'jaehyun', f: 'happy', t: "...That's the most you've texted her in a year." }
        ] },
        { t: "Who's Johnny?", notes: 2, then: [
          { s: 'jaehyun', f: 'neutral', t: "My vice president. At the house. He runs things when I'm at the field, which is always. He's the most reliable person I know." },
          { s: 'jaehyun', f: 'serious', t: "...He'll be holding it all together right now. Tonight, or this week, or whatever it is there. Hanni swears it's still the same night. I can't make the numbers agree. Either way, I think, at least it's Johnny." }
        ] },
        { t: "You could tell them I'm safe when you get home.", notes: 2, then: [
          { s: 'jaehyun', f: 'neutral', t: "I could." },
          { s: 'jaehyun', f: 'neutral', t: "I'd rather you told them yourself. Standing in the front hall. In a coat that isn't warm enough." },
          { n: "He put the phone away. He didn't push it. She noticed him not push it, which, she was learning, cost him something every time." }
        ] }
      ] }
    ]
  ],
  ranks: [
    { after: '10/26', title: '1: the offer stands', place: 'Naganaki Shrine', time: 'After School', scene: [
      { n: "He'd knocked. That was the part S.E.E.S. couldn't get over. Every other person who'd come through had come through somewhere strange, a mall, a lamppost, a harbor at low tide, crying or shouting or filming. He had walked up to the front door of the dorm at midnight, in the green, in the rain that had stopped in the air, and knocked three times, measured, not loud, and then, when nobody came quickly enough, walked off down the Strip to look for her himself." },
      { n: "She'd found him in the rain, in the end, when the hour broke. Soaked through in a long black coat in the middle of the pavement, as if he'd stood in it the whole time and simply let it, reading her face in a second and a half and arriving. *You weren't hard to find. You were hard to reach.* And then *your brother,* and then *you don't remember me, fine, I remember enough for both of us,* and then he'd stepped around her onto the road side of the pavement, without a word, and taken her umbrella out of her hand, and held it over both of them all the way home." },
      { n: "By morning Mitsuru had put him in the Kirijo guesthouse by the station with a key and a meal card and a look that said she recognized a man who'd organize the building if she gave him a week." },
      { n: "Now he was running the steps at Naganaki. Solar had followed the sound of footsteps on stone up from the street, and stood at the bottom and watched him go up and down, up and down, broad through the shoulders in a way that made the shrine gate look small, his dark brown hair still in a clean side part after an hour of it, as if it had been told to stay and was afraid of him too, and he reached the bottom and saw her and stopped, not out of breath, and didn't look surprised." },
      { register: 'jaehyun' },
      { s: 'jaehyun', f: 'neutral', t: "Solar." },
      { n: "Not a question. He said her name like he was confirming a reservation." },
      { s: 'jaehyun', f: 'neutral', t: "Sit down. I want to tell you what I've worked out. Then you can tell me where I'm wrong." },
      { choose: [
        { t: "(Sit on the step.)", notes: 2, then: [
          { n: "She sat. He didn't. He stood at the bottom of the steps with his hands loose at his sides like a man about to address a room, and she had the strangest feeling that she'd sat on a lot of steps while he stood in front of her and explained things." }
        ] },
        { t: "You could ask how I am first.", notes: 3, then: [
          { s: 'jaehyun', f: 'surprised', t: "..." },
          { n: "He hesitated, which he never did, like a man who'd been told the last time he saw her not to ask her anything, and had taken it seriously." },
          { s: 'jaehyun', f: 'neutral', t: "...How are you." },
          { s: 'solar', f: 'neutral', t: "Fine." },
          { s: 'jaehyun', f: 'neutral', t: "Uh huh." },
          { n: "He set the *fine* to one side without contesting it, which she understood, somehow, was not at all the same thing as believing it." }
        ] },
        { t: "Do not lecture me.", notes: 3, then: [
          { s: 'jaehyun', f: 'neutral', t: "I'm not lecturing. I'm briefing." },
          { s: 'jaehyun', f: 'happy', t: "...You said that to me too. The not-lecturing thing. Usually right before I lecture you." }
        ] }
      ] },
      { s: 'jaehyun', f: 'neutral', t: "You live in a dormitory with eight other people and a dog. You fight something at midnight, with a gun that isn't a gun, and you lead them. The redhead runs it. The man in the glasses who makes puns pays for it, or his company does. You're good at it. Better than good. Fuuka played me a recording." },
      { s: 'jaehyun', f: 'neutral', t: "You eat badly. You sleep badly. You run at five in the morning with a boxer who thinks protein is a personality. You are, as far as I can tell, happier than I've seen you in two years. Happier than the last time I saw you. I'm not going to tell you about the last time." },
      { s: 'jaehyun', f: 'serious', t: "Where am I wrong." },
      { choose: [
        { t: "Nowhere. That's what's annoying.", notes: 3, then: [
          { s: 'jaehyun', f: 'happy', t: "Yes. I'm told it's my worst quality." }
        ] },
        { t: "You're wrong about the happy part.", notes: 2, then: [
          { s: 'jaehyun', f: 'neutral', t: "No, I'm not." },
          { n: "He said it simply. He didn't argue. He'd arrived at it, and that was where it lived now, and she could push on it as hard as she liked." }
        ] },
        { t: "Who are you? To me. Say it.", notes: 3, then: [
          { s: 'jaehyun', f: 'neutral', t: "Your brother. Older. By two years. You'd tell me it feels like ten." },
          { s: 'jaehyun', f: 'happy', t: "Jaehyun. You call me Jae when you want something or when you're furious. You don't call me anything when you're furious enough." }
        ] }
      ] },
      { n: "A crow landed on the torii above them and said something rude, and he glanced up at it the way he glanced at everything, once, filed, done, and back to her." },
      { s: 'solar', f: 'neutral', t: "How did you find me? Fuuka says the others heard a bell." },
      { s: 'jaehyun', f: 'neutral', t: "I didn't hear a bell. I'm not musical. You'd tell me that too." },
      { s: 'jaehyun', f: 'neutral', t: "I read where things are going. It's most of my job. Everyone else was looking where you'd been. I stopped doing that, and looked where you'd go if you could go anywhere." },
      { s: 'jaehyun', f: 'sad', t: "...It took me longer than I'd like to admit to think of *anywhere.*" },
      { n: "He took a folded square of paper out of the pocket of his quarter-zip and held it out. A phone number, in neat, impatient pen. The guesthouse. A room number. And under it, *J.*" },
      { s: 'jaehyun', f: 'neutral', t: "Call if you need anything." },
      { s: 'jaehyun', f: 'happy', t: "You won't. But the offer stands." },
      { n: "It went through her like cold water. Not the words. The rhythm of them. The exact shape. As if she'd heard it so many times it had worn a groove somewhere in her that she'd been walking around with all year without knowing what it was for." },
      { n: "He turned and went back up the steps at a run before she could say anything, which she suspected was the point." },
      { place: "Iwatodai Dorm · Solar's Room", time: 'Night', music: 'night' },
      { n: "That night, at a quarter to eleven, the phone on her pillow lit up with the thread that had been sitting at the top of her messages since August. *Unknown number.* The one that had asked her if she was settling in alright, in a voice with a capital at the front and a question mark at the end, before she'd had a single idea whose voice it was." },
      { phone: [
        { from: 'jaehyun', t: "This is the same number." },
        { from: 'jaehyun', t: "In case you were wondering. It was always this number." },
        { from: 'jaehyun', t: "Go to sleep, Solar." }
      ], contact: 'Unknown number' },
      { n: "The timestamp under every one of them said the same minute. Not now. Not a quarter to eleven. The minute, she'd find out later, that his phone had stopped at on the Strip in the rain, which it would say on every single message he ever sent her here, as if he was always, somewhere, still standing on that pavement, still arriving." },
      { n: "Her thumb went to the top of the thread, to the name that wasn't a name, and the little *edit contact* that had been there since August, waiting." },
      { choose: [
        { t: "(Type: big bro)", notes: 3, flag: { 'jaehyun-bigbro': true }, then: [
          { n: "Lowercase. No space she'd thought about. Her thumbs did it before she'd decided anything, in about a second, with the bored, exact confidence of a girl who'd had the same contact name for someone since she'd owned a phone." },
          { n: "She looked at it for a long time. *big bro.* It looked like something she'd written a hundred times while rolling her eyes. It looked like it fit." }
        ] },
        { t: "(Type: Jaehyun)", notes: 3, flag: { 'jaehyun-named': true }, then: [
          { n: "She typed it out properly. Capital J. The name he'd given her on the pavement, the way you'd write down the name of someone who'd told you who they were, because you'd decided to believe them." },
          { n: "It looked very formal on the screen. It looked like someone who sent texts with periods. She supposed that was right." }
        ] },
        { t: "(Leave it as Unknown number.)", notes: 2, then: [
          { n: "She didn't change it. She didn't know what to call him yet, and she didn't want to call him something he wasn't, and *Unknown number* was, at least, true." },
          { n: "She lay there and looked at it anyway, for a long time, until the screen went dark on its own." }
        ] }
      ] },
      { ifFlag: 'jaehyun-bigbro', then: [
        { phone: [
          { from: 'solar', t: "goodnight" },
          { from: 'jaehyun', t: "Goodnight." }
        ], contact: 'big bro' }
      ], else: [
        { ifFlag: 'jaehyun-named', then: [
          { phone: [
            { from: 'solar', t: "goodnight" },
            { from: 'jaehyun', t: "Goodnight." }
          ], contact: 'Jaehyun' }
        ], else: [
          { phone: [
            { from: 'solar', t: "goodnight" },
            { from: 'jaehyun', t: "Goodnight." }
          ], contact: 'Unknown number' }
        ] }
      ] },
      { n: "Two words. She'd sent two words to a stranger, and he'd sent two back, and somehow it was the most normal conversation she'd had since April." }
    ] },

    { after: '11/2', title: '2: the radio', place: 'Iwatodai Dorm · Command Room', time: 'Night', music: 'mystery', scene: [
      { n: "He'd asked Fuuka if he could listen. That was how it had started. He'd gone to her, politely, with his hands behind his back like a man applying for a job, and asked if there was any way, at all, that he could hear what happened in the tower at night, and Fuuka had looked at him and then at Mitsuru, and Mitsuru had looked at him for a long time with her teacup halfway to her mouth, and then said, *Let him. I'd do the same.*" },
      { n: "So now when S.E.E.S. went up, Jaehyun sat in the command room on the fourth floor behind Fuuka's chair, very still, with his forearms on his knees and his hands clasped, and listened to every word that came over the radio, and said nothing, and wrote things down." },
      { n: "It was after. They'd come back at one in the morning bruised and tired and Junpei limping, and the dorm had gone to bed in stages, doors closing down the hall one by one like a house switching itself off. Solar had come up to return the radio, and he was still sitting there, alone, with the notebook in his lap, and the monitors dark, and the room smelling of cold coffee and the warm-dust smell of electronics that had been on too long." },
      { s: 'jaehyun', f: 'neutral', t: "You called a retreat on the fourteenth floor." },
      { s: 'solar', f: 'neutral', t: "Junpei was hurt." },
      { s: 'jaehyun', f: 'neutral', t: "I know. It was the right call. You made it four seconds late." },
      { n: "He said it without heat. A line item. Solar felt it land on her anyway, hot, behind her eyes, the way an old bruise hurts when someone presses it who doesn't know it's there." },
      { choose: [
        { t: "You weren't there. You don't get to grade my calls.", notes: 3, flag: { 'jaehyun-no-grades': true }, then: [
          { s: 'jaehyun', f: 'surprised', t: "..." },
          { s: 'jaehyun', f: 'neutral', t: "...No. I don't." },
          { n: "He closed the notebook. He looked at it in his lap for a moment, like a man who'd been told the film he'd been studying was of a different game." },
          { s: 'jaehyun', f: 'sad', t: "It's habit. I watch everyone. I tell them where they were late. I've never once been in the tower. You're right." }
        ] },
        { t: "Four seconds?", notes: 2, then: [
          { s: 'jaehyun', f: 'neutral', t: "You waited to see if he'd get up on his own. You always do that. You give people the chance to not need you." },
          { s: 'jaehyun', f: 'serious', t: "It's a generous instinct. It's a dangerous one. I've never been able to train it out of you." }
        ] },
        { t: "What would you have done?", notes: 3, then: [
          { s: 'jaehyun', f: 'neutral', t: "Called it on the first hit. Pulled everyone. Decided for him." },
          { s: 'jaehyun', f: 'sad', t: "...Which is why they listen to you and not to me." }
        ] }
      ] },
      { s: 'jaehyun', f: 'neutral', t: "I'm a quarterback. At home. I read the field before the snap and I change the play if I don't like it. Everybody else runs what I call. That's the job. I'm good at it." },
      { s: 'jaehyun', f: 'sad', t: "And I sat here for three hours tonight listening to you get hit, and I couldn't call anything. I couldn't change a single assignment. I've never been so useless in my life." },
      { n: "He said it to the dark monitors, flat, calm, the way he said everything, and his clasped hands were white at the knuckles, and Solar saw it and didn't say anything, which was, she was beginning to learn, the only way to say anything to him at all." },
      { choose: [
        { t: "You can listen. That's not useless.", notes: 3, then: [
          { s: 'jaehyun', f: 'neutral', t: "It's the most useless thing I've ever done." },
          { s: 'jaehyun', f: 'neutral', t: "I'm going to keep doing it. Every night you go up." }
        ] },
        { t: "(Sit down next to him. Say nothing.)", notes: 3, then: [
          { n: "She sat on the floor next to his chair with her back against the console. He looked down at her. After a while he put the notebook on the floor between them, open, and she read it. Every call she'd made that night, in his neat print, with a tick next to almost all of them." }
        ] },
        { t: "Then come up. Next time.", notes: 2, then: [
          { s: 'jaehyun', f: 'neutral', t: "I asked Mitsuru what it would take. The thing you all have. The thing in the gun that isn't a gun." },
          { s: 'jaehyun', f: 'serious', t: "She said it isn't something you can ask for. She said it the way you'd tell someone the team was full. Kindly. Completely." },
          { s: 'jaehyun', f: 'neutral', t: "I've never been told no by anyone who meant it that much. I'm still deciding how I feel about it." }
        ] }
      ] },
      { n: "Below them, somewhere in the building, a pipe knocked, and Koromaru's tags jingled once on the stairs and went quiet. The clock on the console said a quarter to two. Neither of them moved to leave." },
      { s: 'jaehyun', f: 'neutral', t: "Before you go up. On the stairs. Do you say anything to each other?" },
      { s: 'solar', f: 'neutral', t: "Junpei makes a joke. Akihiko-senpai punches his own hand. Mitsuru-senpai says *be careful* like it's an order." },
      { s: 'jaehyun', f: 'neutral', t: "And you?" },
      { choose: [
        { t: "I say we're coming back.", notes: 3, then: [
          { s: 'jaehyun', f: 'neutral', t: "Every time?" },
          { s: 'solar', f: 'neutral', t: "Every time." },
          { s: 'jaehyun', f: 'neutral', t: "...Good. Keep it the same. It doesn't matter what you say in the huddle. It matters that it's the same thing, every time, so they know which voice to listen for when it's loud." }
        ] },
        { t: "(Nothing. I count the stairs.)", notes: 2, then: [
          { s: 'jaehyun', f: 'sad', t: "...You did that at home. The stairs at the house. Out loud, when you were small. Under your breath when you got older. You thought nobody heard." },
          { s: 'jaehyun', f: 'happy', t: "I heard. There are thirty-one. You always said thirty-two, on the last one, like you were adding one for luck." }
        ] },
        { t: "What do you say? At home. Before a game.", notes: 3, then: [
          { s: 'jaehyun', f: 'neutral', t: "The same thing every time. It doesn't matter what. I'm not going to tell you what." },
          { s: 'jaehyun', f: 'happy', t: "...You'd use it against me at Thanksgiving." }
        ] }
      ] },
      { n: "She went to bed at two. When she passed the command room door on the way down, the light was still on under it, and she could hear the small dry sound of a pencil, not writing, just tapping, on the cover of a closed notebook, slow, like someone keeping time for a song nobody else could hear." }
    ] },

    { after: '11/9', title: '3: stadium lights', place: 'Gekkoukan High · Front Gate', time: 'Evening', music: 'night', scene: [
      { ifFlag: 'jaehyun-bigbro', then: [
        { phone: [
          { from: 'jaehyun', t: "Your school has floodlights." },
          { from: 'jaehyun', t: "Someone left them on. Come to the field. Wear shoes you can run in." },
          { from: 'solar', t: "how do u know someone left them on" },
          { from: 'jaehyun', t: "I'm standing under them." }
        ], contact: 'big bro' }
      ], else: [
        { ifFlag: 'jaehyun-named', then: [
          { phone: [
            { from: 'jaehyun', t: "Your school has floodlights." },
            { from: 'jaehyun', t: "Someone left them on. Come to the field. Wear shoes you can run in." },
            { from: 'solar', t: "how do u know someone left them on" },
            { from: 'jaehyun', t: "I'm standing under them." }
          ], contact: 'Jaehyun' }
        ], else: [
          { phone: [
            { from: 'jaehyun', t: "Your school has floodlights." },
            { from: 'jaehyun', t: "Someone left them on. Come to the field. Wear shoes you can run in." },
            { from: 'solar', t: "how do u know someone left them on" },
            { from: 'jaehyun', t: "I'm standing under them." }
          ], contact: 'Unknown number' }
        ] }
      ] },
      { n: "Gekkoukan had floodlights over the sports field, four tall gray masts at the corners that nobody used except on the nights before a tournament, and somebody had left them on. Solar found him there after school had emptied out, standing on the cinder track in the white light with a football under his arm that he'd bought, he said, at a sporting goods shop on the Strip that had exactly one, and had been very surprised to sell it." },
      { n: "He'd marked a field. Of course he had. Cones he'd borrowed from somewhere, orange, set out along the grass in a long straight line at what she assumed were exact intervals, and he was standing at the far end of them turning the ball over in his hands, finding the laces with his fingertips without looking, the way she found the keys on a keyboard." },
      { s: 'jaehyun', f: 'neutral', t: "Stand at the thirty. That cone. Run a slant." },
      { s: 'solar', f: 'neutral', t: "I don't know what that means." },
      { s: 'jaehyun', f: 'neutral', t: "Run diagonally toward the middle. I'll put it where you'll be." },
      { choose: [
        { t: "(Run the slant.)", notes: 3, then: [
          { n: "She ran. She had no idea where she was going. Three strides in she looked back over her shoulder and the ball was already in the air, spinning, tight, coming down out of the floodlights exactly where her hands were going to be, and she caught it against her chest so hard it knocked the breath out of her." },
          { s: 'jaehyun', f: 'happy', t: "Good." },
          { n: "One word. From him, she understood, a parade." }
        ] },
        { t: "(Stand still and make him come to you.)", notes: 2, then: [
          { s: 'jaehyun', f: 'neutral', t: "...That's not a route." },
          { n: "He threw it anyway, short, soft, right into her hands where she stood. He'd adjusted. It took him half a second. She saw him do it and file it." }
        ] },
        { t: "How do you know where I'll be?", notes: 3, then: [
          { s: 'jaehyun', f: 'neutral', t: "I don't. I know where you're going. Those are different. Where you'll be is a guess. Where you're going, you tell me with your hips about a second before you know it yourself." },
          { s: 'jaehyun', f: 'neutral', t: "Everyone does. Run. I'll show you." },
          { n: "She ran, and he showed her. The ball came down out of the white light into her hands like it had been waiting there, and she stood holding it, breathing hard, and had the very uncomfortable feeling of having been read like a sign on a door." }
        ] }
      ] },
      { n: "And then it happened, standing on the cinder track with the football against her chest and the floodlights coming down white and hard over everything, the hum of them, the cold, the smell of cut grass going stale under the lights." },
      { n: "A roar. Not this empty field. A stadium, enormous, a bowl of noise in orange and navy, and a man's voice over the speakers saying a name, and the whole bowl coming up onto its feet at once. And her, very high above all of it, behind glass. A suite with a carpet and a buffet nobody was eating from, and a man in a suit beside her who didn't stand up, and a smile on her own face she could feel from the inside, holding, holding. And down on the field, under lights exactly like these, a number on a jersey she knew better than her own birthday." },
      { n: "And one voice in all that roar. She didn't know whose. She thought, for a second, it might have been hers. Behind the glass, where nobody could have heard it. She didn't know if she'd ever really done it, or only wanted to so badly that it had turned into a memory anyway." },
      { fragment: 'runners-stadium' },
      { n: "The bell on Haenim's sash rang once, clear, and she turned her head to look for it in the empty stands." },
      { s: 'jaehyun', f: 'neutral', t: "Solar?" },
      { s: 'solar', f: 'surprised', t: "...I was behind glass. Up high. Next to someone who didn't stand up. I think I yelled for you." },
      { s: 'jaehyun', f: 'surprised', t: "..." },
      { n: "He'd been walking toward her to get the ball. He stopped on the track, ten meters off, under the white lights, and stood there with his hands at his sides, and for the first time since he'd knocked on the door at midnight his face did something he hadn't decided it would do." },
      { s: 'jaehyun', f: 'neutral', t: "The suite. Father's. You sat next to him. Nobody can hear anything from the suite. That's the point of the suite." },
      { s: 'jaehyun', f: 'sad', t: "I looked up at it anyway. Every time I came off the field. Every home game. I couldn't see anything. The glass reflects the lights. I looked anyway." },
      { s: 'jaehyun', f: 'serious', t: "...I never told you that. I never told anyone that." },
      { choose: [
        { t: "Why didn't you tell me?", notes: 3, then: [
          { s: 'jaehyun', f: 'neutral', t: "Because you'd have stopped coming." },
          { s: 'jaehyun', f: 'neutral', t: "You stop doing things the second anyone notices you like doing them. You've done it since you were six." }
        ] },
        { t: "(Throw the ball back. Badly.)", notes: 3, then: [
          { n: "She threw it back. It wobbled the whole way like it was embarrassed for both of them. He caught it without moving his feet." },
          { s: 'jaehyun', f: 'serious', t: "Your elbow's low." },
          { n: "He came and moved it, two fingers on the back of her arm, an inch higher, the most impersonal correction in the world, and it was so exactly the way an older brother would do it that something in her chest went tight and stupid." }
        ] },
        { t: "Did you like it? All of that. The noise.", notes: 2, then: [
          { s: 'jaehyun', f: 'neutral', t: "The noise, no. The noise is for the people in the stands." },
          { s: 'jaehyun', f: 'happy', t: "I like the four seconds before the snap. When it's quiet in the helmet and I can see all of it and nobody else can yet. That's the only part that's mine." },
          { s: 'jaehyun', f: 'serious', t: "...I love it. I don't say that out loud at home. It's easier if they think it's a duty. Then nobody asks what I'd give up for it." }
        ] }
      ] },
      { n: "They threw the ball for a long time after that. He taught her to hold it, fingertips on the laces, a little gap in the palm, *like you're holding something that wants to leave,* and she threw it badly and then less badly and then, once, under the white lights, a real one, a tight ugly spiral that went where she'd sent it and smacked into his chest, and he caught it and stood looking at it in his hands like she'd handed him something she'd made." },
      { n: "The floodlights clicked off on their timer at eight, all four at once, and the field went dark around them, and in the dark she heard him laugh, once, short, surprised at himself." }
    ] },

    { after: '11/16', title: '4: fine', place: 'Naganaki Shrine', time: 'After School', scene: [
      { n: "He wasn't running. That was how she knew. He was sitting on the bottom step of Naganaki with his right arm across his knees and his left hand holding his right shoulder, not hard, just resting there, the way you'd rest a hand on a dog you didn't want to wake." },
      { n: "He took the hand away when he saw her. Fast. And smiled, a small, closed smile, the measured one, the one he used for photographers." },
      { s: 'jaehyun', f: 'flustered', t: "Solar. You're early." },
      { s: 'solar', f: 'serious', t: "What's wrong with your shoulder?" },
      { s: 'jaehyun', f: 'neutral', t: "Fine." },
      { n: "It was the whole answer. She'd been handed enough whole answers to know the shape of one, a door being closed politely, all the way, from the other side. She couldn't remember being handed one by him, which wasn't saying much, since she couldn't remember him, and still she knew this exact door, the paint on it, the sound it made." },
      { choose: [
        { t: "Don't do that. Don't give me *fine.*", notes: 3, then: [
          { s: 'jaehyun', f: 'surprised', t: "..." },
          { s: 'jaehyun', f: 'neutral', t: "...That's your word. *Fine.* You use it on me. I got it from you." },
          { s: 'solar', f: 'serious', t: "Then give it back." },
          { n: "He looked at her for a long moment. Then he let out a breath through his nose and moved his right arm, carefully, the first movement of it careful in a way that told her everything, and rolled the shoulder twice." },
          { s: 'jaehyun', f: 'neutral', t: "It's old. Throwing shoulder. It gets loud in the cold. I've been hit a lot. It's the job. It's nothing." }
        ] },
        { t: "(Sit down beside him. Put your hand on his shoulder.)", notes: 3, then: [
          { n: "She sat beside him and put her hand flat on his right shoulder without asking. He went rigid for a second. Then he didn't. The muscle under her palm was hot and knotted, and she pressed, the way she'd seen Akihiko press on his own, and he made a very small sound and closed his eyes." },
          { s: 'jaehyun', f: 'sad', t: "...Nobody does that. At home. Nobody's allowed to see it." }
        ] },
        { t: "Okay. Fine.", notes: 1, then: [
          { s: 'jaehyun', f: 'neutral', t: "Thank you." },
          { n: "He meant it. That was the worst part. He was grateful to be left alone with it." }
        ] }
      ] },
      { ifMet: 'kiriko', then: [
        { n: "Somewhere above them, at the top of the hundred and twelve steps, a broom stopped. Then a pair of sandals came down, fast, two at a time, and Kiriko arrived at the bottom with her ponytail swinging and a cold canned coffee in one hand and a folded paper charm in the other, and held them both out to Jaehyun without a word, and he looked at them like he'd been handed a summons." },
        { s: 'kiriko', f: 'neutral', t: "Can's for the shoulder. Not to drink. Well. Also to drink. The paper's for the rest of you. Don't open it, it's shy." },
        { n: "She went back up before he could thank her. He sat holding the can against his shoulder and the charm in his other hand, very carefully, like a man who'd been given two things he didn't know the rules for, and Solar watched him put the charm, after a long moment, into the inside pocket of his quarter-zip, over his heart, where he'd put the paper with the number on it the first day." }
      ] },
      { s: 'jaehyun', f: 'sad', t: "There's a game. At home. Notre Dame, away. I was supposed to be on the plane when— I don't know if I'm missing it. My phone says it's the same night it's always said." },
      { s: 'jaehyun', f: 'serious', t: "I've never missed a game. Not in three years. Not with a fever. Not with this." },
      { n: "He moved the shoulder again. It clicked, audibly, and he didn't wince, which was its own kind of wince." },
      { choose: [
        { t: "Does anyone know? At home. About the shoulder.", notes: 3, then: [
          { s: 'jaehyun', f: 'neutral', t: "The trainers. The doctor. The coaches know what the trainers tell them, which is less." },
          { s: 'jaehyun', f: 'serious', t: "Father knows I'm the starting quarterback. That's what Father knows." },
          { s: 'jaehyun', f: 'sad', t: "...You knew. You always knew. You'd look at me across the table at Thanksgiving, at the exact shoulder, and not say anything. I used to think you didn't care. I think now you were the only one who was looking." }
        ] },
        { t: "Do you miss it? Right now?", notes: 3, then: [
          { s: 'jaehyun', f: 'neutral', t: "Every minute. The film room. The cold. The ten minutes after a game when you're too tired to be anybody." },
          { s: 'jaehyun', f: 'happy', t: "...And I don't. Both. I didn't know you could do both. You're going to say you could have told me that." },
          { s: 'solar', f: 'neutral', t: "I could have told you that." }
        ] }
      ] },
      { s: 'jaehyun', f: 'neutral', t: "I'd miss every game for the rest of my life to bring you home. I want you to know that I know that about myself. I didn't, before." },
      { choose: [
        { t: "Don't say *bring.* I'm not a ball.", notes: 3, flag: { 'jaehyun-ball': true }, then: [
          { s: 'jaehyun', f: 'surprised', t: "..." },
          { s: 'jaehyun', f: 'flustered', t: "...To come home with you. If you come. That's what I meant." },
          { s: 'jaehyun', f: 'neutral', t: "I'm going to have to learn to say it like that. It's going to take me a while." }
        ] },
        { t: "That's the nicest thing you've ever said to me. Probably.", notes: 3, then: [
          { s: 'jaehyun', f: 'neutral', t: "Probably. You'd know. I don't keep track of nice things. You do. You keep a list." },
          { s: 'jaehyun', f: 'happy', t: "...Don't put that one on it. I'll deny it." }
        ] }
      ] },
      { place: "Iwatodai Dorm · Solar's Room", time: 'Night', music: 'night', soft: true },
      { ifFlag: 'jaehyun-bigbro', then: [
        { phone: [
          { from: 'jaehyun', t: "Don't tell the boxer about the shoulder." },
          { from: 'solar', t: "why" },
          { from: 'jaehyun', t: "He'll want to look at it. Then he'll want to race." },
          { from: 'jaehyun', t: "I'll win, and it will hurt, and I'll have to pretend it didn't in front of him." },
          { from: 'solar', t: "so ur saying u dont want to lose OR win" },
          { from: 'jaehyun', t: "I'm saying go to sleep, Solar." }
        ], contact: 'big bro' }
      ], else: [
        { ifFlag: 'jaehyun-named', then: [
          { phone: [
            { from: 'jaehyun', t: "Don't tell the boxer about the shoulder." },
            { from: 'solar', t: "why" },
            { from: 'jaehyun', t: "He'll want to look at it. Then he'll want to race." },
            { from: 'jaehyun', t: "I'll win, and it will hurt, and I'll have to pretend it didn't in front of him." },
            { from: 'solar', t: "so ur saying u dont want to lose OR win" },
            { from: 'jaehyun', t: "I'm saying go to sleep, Solar." }
          ], contact: 'Jaehyun' }
        ], else: [
          { phone: [
            { from: 'jaehyun', t: "Don't tell the boxer about the shoulder." },
            { from: 'solar', t: "why" },
            { from: 'jaehyun', t: "He'll want to look at it. Then he'll want to race." },
            { from: 'jaehyun', t: "I'll win, and it will hurt, and I'll have to pretend it didn't in front of him." },
            { from: 'solar', t: "so ur saying u dont want to lose OR win" },
            { from: 'jaehyun', t: "I'm saying go to sleep, Solar." }
          ], contact: 'Unknown number' }
        ] }
      ] },
      { n: "She didn't tell Akihiko. She did, the next morning, leave a cold can from the vending machine on the bottom step of the shrine on her way to school, with nothing written on it, and that afternoon there was an empty one on the step in the same place, rinsed out, standing upright, the way you'd leave a glass on a counter for someone you lived with." }
    ] },

    { after: '11/23', title: '5: the audible', place: 'Iwatodai Dorm · Front', time: 'Evening', music: 'mystery', scene: [
      { n: "Junpei told her. Junpei didn't mean to. He said it in the lounge the way he said everything, with his mouth full, as a funny thing that had happened, that Jaehyun had gone out to the front steps this morning where the guy in the black hoodie was sitting with his headphones, and said something to him, quietly, for about ten seconds, and then come back in, and the guy in the hoodie hadn't come to breakfast." },
      { s: 'junpei', f: 'happy', t: "It was like a movie! He didn't even raise his voice! Your brother's terrifying, Solar. Like, cool terrifying. Like a— " },
      { n: "She was already going to the door." },
      { n: "Jaehyun was on the front steps with a cup of coffee, looking at the street, completely at ease, and he looked up when the door banged open behind him and saw her face and set the coffee down very carefully on the step, like a man putting down something he expected to need both hands for." },
      { s: 'solar', f: 'serious', t: "What did you say to him?" },
      { s: 'jaehyun', f: 'neutral', t: "I asked him to keep his distance from you." },
      { s: 'solar', f: 'serious', t: "You *asked?*" },
      { s: 'jaehyun', f: 'neutral', t: "...I told him. The last thing I saw at home, you stood behind me for two days so you wouldn't have to stand anywhere near him. I don't know why. I didn't ask you. I'm not asking now." },
      { s: 'jaehyun', f: 'neutral', t: "There's history. Things you don't remember. I've already had this conversation with him at home. I'm not having it a— " },
      { n: "He stopped himself. She watched him do it, watched him hear where the sentence was going and pull it back like a pass he'd decided not to throw." },
      { n: "And she knew this. Not him, not the boy on the steps, not whatever the history was, she didn't know any of that and wasn't going to let him hand it to her. She knew *this.* The calm. The decision already made. A field read and a play changed and everyone else expected to run it. Her whole body knew it, hated it, like a burn knows a stove." },
      { n: "The street was very quiet. It was a holiday, she remembered, distantly. Labor Thanksgiving. The shops on the corner had their shutters half down and somebody's radio was playing old enka two houses over, and the cold had that particular November clarity that made every sound carry, so that she could hear her own pulse in her ears and the ice settling in his coffee and nothing at all from him." },
      { choose: [
        { t: "You don't get to decide who sits next to me.", notes: 3, flag: { 'jaehyun-told-off': true }, then: [
          { s: 'jaehyun', f: 'neutral', t: "Solar—" },
          { s: 'solar', f: 'serious', t: "Not here. Not anywhere. Not because of something I can't even remember. You read the field and you call the play and you never once ask me what I'm running." },
          { n: "It came out of her hot and fast and whole, like it had been written a long time ago and kept in a drawer. He stood very still on the steps. Nothing on his face moved. Everything behind it did." }
        ] },
        { t: "Tell me what the history is, then.", notes: 2, flag: { 'jaehyun-asked': true }, then: [
          { s: 'jaehyun', f: 'serious', t: "No." },
          { s: 'jaehyun', f: 'neutral', t: "Not here. You'd have no way to check it. You'd have to take my word, and you've never once taken my word in your life, and you shouldn't start here because you can't remember why not." },
          { n: "It was, she realized, furious, the first fair thing he'd said all morning." }
        ] },
        { t: "(Say nothing. Walk past him down the steps.)", notes: 2, flag: { 'jaehyun-walked': true }, then: [
          { n: "She walked past him. Down the steps, onto the street. She didn't look back. She heard him not follow her, and she knew, the way you know which stair creaks, that he was standing there with his hands at his sides watching her go, and that it was costing him everything he had not to call her back." }
        ] }
      ] },
      { s: 'jaehyun', f: 'sad', t: "I'm trying to keep you safe." },
      { s: 'solar', f: 'sad', t: "I know. That's the worst part. I know you are." },
      { n: "She went to find the boy in the black hoodie. She didn't know what she was going to say to him. She only knew that if she didn't go, she'd have let someone else decide, and some part of her, older than April, older than any of it, would never forgive her." },
      { place: "Iwatodai Dorm · Solar's Room", time: 'Late Night', music: 'night' },
      { n: "She didn't sleep. She lay on her side in the black hoodie with the sleeves over her hands and the phone face down on the pillow, and at twenty past one it buzzed, once, against the cotton, like something knocking from inside a wall." },
      { ifFlag: 'jaehyun-bigbro', then: [
        { phone: [
          { from: 'jaehyun', t: "I'll be at the bottom of the steps tomorrow." },
          { from: 'jaehyun', t: "And the day after." },
          { from: 'jaehyun', t: "You don't have to come." }
        ], contact: 'big bro' }
      ], else: [
        { ifFlag: 'jaehyun-named', then: [
          { phone: [
            { from: 'jaehyun', t: "I'll be at the bottom of the steps tomorrow." },
            { from: 'jaehyun', t: "And the day after." },
            { from: 'jaehyun', t: "You don't have to come." }
          ], contact: 'Jaehyun' }
        ], else: [
          { phone: [
            { from: 'jaehyun', t: "I'll be at the bottom of the steps tomorrow." },
            { from: 'jaehyun', t: "And the day after." },
            { from: 'jaehyun', t: "You don't have to come." }
          ], contact: 'Unknown number' }
        ] }
      ] },
      { n: "She read it three times. Her thumbs were already over the keys. They wanted, specifically and stupidly, to type *ok*, and she hated how easily they'd have done it." },
      { choose: [
        { t: "(Type: ok)", notes: 2, then: [
          { ifFlag: 'jaehyun-bigbro', then: [
            { phone: [
              { from: 'solar', t: "ok" },
              { from: 'jaehyun', t: "Good." }
            ], contact: 'big bro' }
          ], else: [
            { ifFlag: 'jaehyun-named', then: [
              { phone: [
                { from: 'solar', t: "ok" },
                { from: 'jaehyun', t: "Good." }
              ], contact: 'Jaehyun' }
            ], else: [
              { phone: [
                { from: 'solar', t: "ok" },
                { from: 'jaehyun', t: "Good." }
              ], contact: 'Unknown number' }
            ] }
          ] },
          { n: "Two letters. It felt like losing. It felt, under that, like the first honest thing she'd sent anyone all week, and she turned the phone face down before she could look at it again." }
        ] },
        { t: "(Type: dont tell me where to be)", notes: 3, then: [
          { ifFlag: 'jaehyun-bigbro', then: [
            { phone: [
              { from: 'solar', t: "dont tell me where to be" },
              { from: 'jaehyun', t: "I'm not." },
              { from: 'jaehyun', t: "I'm telling you where I'll be. That's all I have left to tell you." }
            ], contact: 'big bro' }
          ], else: [
            { ifFlag: 'jaehyun-named', then: [
              { phone: [
                { from: 'solar', t: "dont tell me where to be" },
                { from: 'jaehyun', t: "I'm not." },
                { from: 'jaehyun', t: "I'm telling you where I'll be. That's all I have left to tell you." }
              ], contact: 'Jaehyun' }
            ], else: [
              { phone: [
                { from: 'solar', t: "dont tell me where to be" },
                { from: 'jaehyun', t: "I'm not." },
                { from: 'jaehyun', t: "I'm telling you where I'll be. That's all I have left to tell you." }
              ], contact: 'Unknown number' }
            ] }
          ] },
          { n: "She read that one more times than she'd have admitted to anyone. Then she put the phone under the pillow, where she couldn't see it light up, and could still feel it if it did." }
        ] },
        { t: "(Don't answer. Turn the phone over.)", notes: 2, then: [
          { n: "She turned the phone back over, and put her hand flat on top of it, and lay there feeling it under her palm like a pulse, and didn't type anything, and the not-typing took more out of her than any text she'd ever sent." }
        ] }
      ] }
    ] },

    { after: '11/30', title: "6: father doesn't know", place: 'Naganaki Shrine', time: 'After School', scene: [
      { ifMet: 'kiriko', then: [
        { n: "He'd been waiting at the bottom of the shrine steps every afternoon for a week. Not running. Waiting. Solar knew because Kiriko told her, at the top of the steps, with a broom in her hand and a look of deep disapproval, that there was a very large man at the bottom who had been standing there for an hour a day like a statue somebody had donated." }
      ], else: [
        { n: "He'd been waiting at the bottom of the shrine steps every afternoon for a week. Not running. Waiting. Solar knew because the girl who swept the shrine, a girl with a purple-streaked ponytail and a look of deep disapproval, had stopped her on the street to say that there was a very large man at the bottom of her steps who had been standing there for an hour a day like a statue somebody had donated, and was he hers, and could she please collect him." }
      ] },
      { n: "She went down. He straightened when he saw her, the way you'd straighten for a coach." },
      { ifFlag: 'jaehyun-walked', then: [
        { s: 'jaehyun', f: 'sad', t: "You walked past me." },
        { s: 'jaehyun', f: 'neutral', t: "You've never walked past me. You yell. You hang up on me. You did it this fall, in the middle of my sentence, and I sat there holding a dead phone, and at least I knew where I stood. I know what to do with yelling." },
        { s: 'jaehyun', f: 'serious', t: "I didn't know what to do with your back. I've been standing here a week trying to work it out." }
      ], else: [
        { ifFlag: 'jaehyun-asked', then: [
          { s: 'jaehyun', f: 'neutral', t: "You asked me for the history. I said no. I'm still saying no. It isn't mine to hand you here, where you can't check it." },
          { s: 'jaehyun', f: 'serious', t: "But I owe you something for the no. I've been standing here a week working out what." }
        ], else: [
          { s: 'jaehyun', f: 'neutral', t: "You said I never ask you what you're running." },
          { s: 'jaehyun', f: 'serious', t: "I've been standing here a week. I've run it back about four hundred times. I can't find the play where you were wrong." }
        ] }
      ] },
      { s: 'jaehyun', f: 'neutral', t: "I'm going to say something and you're going to let me finish." },
      { s: 'jaehyun', f: 'neutral', t: "...Will you let me finish?" },
      { n: "He'd asked. He'd added it on, after, like a tag on a gift, and she could see it had cost him. She nodded." },
      { s: 'jaehyun', f: 'neutral', t: "You were right. On the steps. I called it without asking you. I do that. I'm told it every Thanksgiving. Usually by you. Usually at the table. Usually in front of Father." },
      { s: 'jaehyun', f: 'serious', t: "I'm not going to tell you I was wrong about him. I'm going to tell you I was wrong to decide for you. Those are two different things. I'm not going to pretend they're the same so you'll forgive me faster." },
      { ifEvent: 'a4-mark', then: [
        { s: 'jaehyun', f: 'neutral', t: "The other one, I haven't spoken to yet. Mark. I'm deciding how." }
      ] },
      { choose: [
        { t: "That's the most annoying apology I've ever heard.", notes: 3, then: [
          { s: 'jaehyun', f: 'neutral', t: "Yes. It's the only honest one I have." }
        ] },
        { t: "Thank you, Jae.", notes: 3, then: [
          { n: "The name came out of her short and worn-in, like it had been rubbed smooth by years of use. She had never said it before in her life, here. He looked at her a beat longer than the sentence deserved." },
          { s: 'jaehyun', f: 'neutral', t: "...Mm." }
        ] },
        { t: "Did you even talk to him? Or just at him?", notes: 2, then: [
          { s: 'jaehyun', f: 'neutral', t: "At him." },
          { s: 'jaehyun', f: 'neutral', t: "He didn't say anything back. He took his headphones off to listen and put them back on when I was done. That's all." },
          { s: 'jaehyun', f: 'serious', t: "...I've never been able to tell what that boy's thinking. It's the only field I can't read. I don't like it." }
        ] }
      ] },
      { s: 'jaehyun', f: 'neutral', t: "And I'm going to tell you something you don't remember, because it's yours and you should have it." },
      { s: 'jaehyun', f: 'neutral', t: "You play a game. On a team. Competitively. You're very good. You won something this fall, in front of a lot of people. Father doesn't know." },
      { s: 'jaehyun', f: 'serious', t: "I found out. I didn't tell him. I'm not going to tell him. It's the only thing I've ever kept from him, and I kept it for you." },
      { n: "He said it to the shrine gate, flat, the way you'd confess to something you'd done with your hands. And it went into her like a bell. Not the game. Not the team. *I didn't tell him.* She'd waited her whole life, some part of her knew, for her brother to keep one thing on her side of the table." },
      { choose: [
        { t: "Why?", notes: 3, then: [
          { s: 'jaehyun', f: 'sad', t: "Because you found something you love outside the route they drew for you. I found mine inside it. That's not fair. I've always known that's not fair." },
          { s: 'jaehyun', f: 'neutral', t: "It's the only play I've ever called that wasn't for me or for him." }
        ] },
        { t: "(Hug him.)", notes: 3, then: [
          { n: "She hugged him. He was enormous and went completely stiff, arms out, like a man who'd been handed a baby, and then, very slowly, the way you'd lower something fragile onto a shelf, he put his arms around her, and his chin on top of her head, and stood there at the bottom of the shrine steps not saying anything at all while, at the top, a broom stopped sweeping for a long moment, and then, with a sniff, started again." }
        ] },
        { t: "What game?", notes: 2, then: [
          { s: 'jaehyun', f: 'neutral', t: "I don't know the name of it. I'm not going to pretend I do. There are heroes. You're the one who keeps the others alive." },
          { s: 'jaehyun', f: 'happy', t: "Somebody told me you made a play nobody in the building saw coming. I didn't understand a word of how they described it. I understood the part where they said your name like it belonged to you and not to us." }
        ] }
      ] },
      { s: 'jaehyun', f: 'sad', t: "I sent you a text that morning. Before. You didn't answer it." },
      { s: 'solar', f: 'neutral', t: "What did it say?" },
      { s: 'jaehyun', f: 'neutral', t: "*Good luck today, sister.*" },
      { n: "Four words. With a period at the end, she knew without seeing it. And her face did something, right there at the bottom of the shrine steps, that she hadn't decided it would do, a small sharp heat behind the eyes and a smile underneath it she couldn't push down, for a split second, before she got it back under control." },
      { s: 'jaehyun', f: 'neutral', t: "...You did that then, too. Didn't you. Smiled at it and didn't answer." },
      { s: 'solar', f: 'neutral', t: "I don't know." },
      { s: 'jaehyun', f: 'happy', t: "You did. I can tell. That's the face." },
      { place: "Iwatodai Dorm · Solar's Room", time: 'Night', music: 'night', soft: true },
      { ifFlag: 'jaehyun-bigbro', then: [
        { phone: [
          { from: 'jaehyun', t: "Thank you for letting me finish." },
          { from: 'jaehyun', t: "That's all." },
          { from: 'solar', t: "good luck today sister" },
          { from: 'solar', t: "there. answered it" }
        ], contact: 'big bro' }
      ], else: [
        { ifFlag: 'jaehyun-named', then: [
          { phone: [
            { from: 'jaehyun', t: "Thank you for letting me finish." },
            { from: 'jaehyun', t: "That's all." },
            { from: 'solar', t: "good luck today sister" },
            { from: 'solar', t: "there. answered it" }
          ], contact: 'Jaehyun' }
        ], else: [
          { phone: [
            { from: 'jaehyun', t: "Thank you for letting me finish." },
            { from: 'jaehyun', t: "That's all." },
            { from: 'solar', t: "good luck today sister" },
            { from: 'solar', t: "there. answered it" }
          ], contact: 'Unknown number' }
        ] }
      ] },
      { n: "He didn't reply. She didn't expect him to. She lay in the dark and pictured him reading it in a guesthouse room by the station, sitting very straight on the end of a bed that was too short for him, with his face doing absolutely nothing, and she was almost sure, for no reason she could name, that she was right." }
    ] },

    { after: '12/7', title: "7: it's winter", place: 'Iwatodai · Riverside', time: 'After School', music: 'night', scene: [
      { n: "The riverbank in December was the color of an old photograph, the grass gone straw-pale and stiff with frost, the water slow and pewter and steaming a little where the drain came out under the bridge, and the light at a quarter past four was already giving up." },
      { n: "On the flat stretch below the embankment a handful of middle-school boys were playing soccer with backpacks for goalposts and no referee. Solar had stopped on the path to watch for no reason except that it was nicer than homework, and she noticed the man beside her the way you notice weather, all at once, already there." },
      { s: 'jaehyun', f: 'serious', t: "The keeper's cheating left." },
      { n: "He said it to no one, quietly, like a man reading a line item. Down on the field the boy with the ball looked left, and the keeper went left, and the ball went right, between a backpack and a rolled-up jacket, and half the field screamed." },
      { s: 'jaehyun', f: 'neutral', t: "He's been doing it all game. He thinks if he guesses first, he's in charge." },
      { s: 'jaehyun', f: 'happy', t: "...I know someone like that." },
      { choose: [
        { t: "So do I. He's standing next to me.", notes: 3, then: [
          { s: 'jaehyun', f: 'happy', t: "Mm. Very funny, Solar." },
          { n: "But he was smiling. Not the photographer one. A small crooked one, at the corner of his mouth, that she'd have bet nobody at home ever saw." }
        ] },
        { t: "What do you see? On the field.", notes: 3, then: [
          { s: 'jaehyun', f: 'neutral', t: "The kid in red. He's the best one out there and he passes too early. He doesn't trust anyone to get open, so he gets rid of it before he has to find out." },
          { s: 'jaehyun', f: 'serious', t: "...He'll figure it out. Or he won't, and he'll be very good at a game nobody else is playing." }
        ] },
        { t: "Go tell him. The keeper.", notes: 2, then: [
          { s: 'jaehyun', f: 'neutral', t: "No." },
          { s: 'jaehyun', f: 'neutral', t: "It's his game. Nobody asked me. If I walk down there and fix him, he'll stop cheating left, and he'll never know why, and next time there won't be anyone on the bank." },
          { n: "He said it as if he'd only just worked it out, standing there, and was trying it on to see if it fit. She watched him not go down the embankment. It looked, on him, like effort." }
        ] }
      ] },
      { s: 'jaehyun', f: 'serious', t: "You're not wearing enough layers." },
      { s: 'solar', f: 'neutral', t: "I know. It's winter." },
      { n: "His brows went up, very slightly, which on a face like his was practically a shout." },
      { s: 'jaehyun', f: 'surprised', t: "...Yes. It is." },
      { s: 'jaehyun', f: 'neutral', t: "You're agreeing with me. Did you sleep?" },
      { s: 'jaehyun', f: 'neutral', t: "You're supposed to say *is not.* You always say *is not.* And then *I'm fine, Jae.* In that order." },
      { s: 'solar', f: 'neutral', t: "...Is not." },
      { s: 'jaehyun', f: 'happy', t: "Thank you. I was worried." },
      { n: "The light went orange, then gray. He checked his watch, and she watched him decide something, the whole process taking about four seconds, and he pulled off his gloves, thick black running gloves with a small orange letter on the cuff, and held them out, and didn't lower his hand until she took them." },
      { s: 'jaehyun', f: 'neutral', t: "I have four more miles. I'll be warm. You won't." },
      { choose: [
        { t: "You don't even know if I'm cold.", notes: 2, then: [
          { s: 'jaehyun', f: 'serious', t: "I know you didn't bring gloves." },
          { n: "It wasn't an answer to what she'd said. It was an answer to what she'd meant, and he'd arrived at it without asking her, and this time she let him." }
        ] },
        { t: "(Take them. Put them on.)", notes: 3, then: [
          { n: "They were too big. Her fingers swam in them. They were warm all the way through, and he watched her put them on and nodded once, satisfied, like a play had run the way he'd drawn it." }
        ] }
      ] },
      { n: "He went off down the river path at a pace that would have been a sprint for anyone else, and she watched until the dusk had him." },
      { n: "Folded small inside the left glove was a printed sheet with a table on it, times down one side and places down the other, lift and run and film and dorm dinner and Tartarus, the radio, a whole week of someone's life arranged in the order it would happen in, his and hers side by side, and at the bottom, in neat, impatient pen, *Read it this time. J.*" },
      { n: "She read it twice on the walk home. When Junpei asked where she'd gotten the gloves, she said *my brother,* and then stood in the lounge with her coat half off for a long moment, wondering why it had been so easy to say." },
      { place: "Iwatodai Dorm · Solar's Room", time: 'Night', music: 'night', soft: true },
      { n: "She had the sheet on the pillow beside her, unfolded, and the gloves on the desk, and at ten the phone lit up." },
      { ifFlag: 'jaehyun-bigbro', then: [
        { phone: [
          { from: 'jaehyun', t: "Did you read it." },
          { from: 'solar', t: "its a table" },
          { from: 'jaehyun', t: "It's a schedule, Solar." },
          { from: 'solar', t: "its a TABLE" },
          { from: 'jaehyun', t: "Schedule." }
        ], contact: 'big bro' }
      ], else: [
        { ifFlag: 'jaehyun-named', then: [
          { phone: [
            { from: 'jaehyun', t: "Did you read it." },
            { from: 'solar', t: "its a table" },
            { from: 'jaehyun', t: "It's a schedule, Solar." },
            { from: 'solar', t: "its a TABLE" },
            { from: 'jaehyun', t: "Schedule." }
          ], contact: 'Jaehyun' }
        ], else: [
          { phone: [
            { from: 'jaehyun', t: "Did you read it." },
            { from: 'solar', t: "its a table" },
            { from: 'jaehyun', t: "It's a schedule, Solar." },
            { from: 'solar', t: "its a TABLE" },
            { from: 'jaehyun', t: "Schedule." }
          ], contact: 'Unknown number' }
        ] }
      ] },
      { n: "She didn't know why she'd typed it. She didn't know why it felt like the opening of an argument they'd had a hundred times, or why it made her chest unclench, half an inch, lying there in the dark. Two people annoyed about the same thing from opposite directions. She had the strangest feeling it was the closest thing they'd ever had to a language of their own." },
      { n: "She fell asleep with the gloves still on." }
    ] },

    { after: '12/13', title: '8: choir', place: 'Paulownia Mall · Central Atrium', time: 'Evening', music: 'tender', scene: [
      { n: "There was a choir in the atrium. A school choir, twenty kids in navy blazers and red scarves standing in three rows on the steps by the fountain under the enormous Christmas tree, singing carols in careful four-part harmony while the mall went by around them with its bags and its strollers and didn't stop." },
      { n: "Solar stopped. She didn't decide to. Her feet stopped and the rest of her came along, and she stood at the edge of the crowd with her bag on her shoulder, and her mouth was moving. She noticed that after a while. She was singing the alto line. Under her breath, very quietly, every word, in a language she didn't know she knew the carols in." },
      { n: "Jaehyun had been walking beside her. He'd stopped too. He was looking at her, not at the choir." },
      { s: 'jaehyun', f: 'happy', t: "...Alto. You always took the alto line. You said the melody was for people who wanted to be looked at." },
      { s: 'solar', f: 'surprised', t: "I sang?" },
      { s: 'jaehyun', f: 'neutral', t: "In school. For years. In choir. You loved it. You'd come home and keep singing in the shower until someone told you to stop." },
      { s: 'jaehyun', f: 'sad', t: "And then Father decided it was a hobby. Not a direction. And you stopped. Not all at once. You just. Stopped coming home singing." },
      { n: "The choir finished the carol. The mall clapped, briefly, the way malls clap. Solar stood at the edge of the crowd with her mouth closed and her chest full of something she couldn't name, like a breath taken for a note that had never come." },
      { choose: [
        { t: "Did you ever say anything? When I stopped?", notes: 3, then: [
          { s: 'jaehyun', f: 'neutral', t: "No." },
          { s: 'jaehyun', f: 'serious', t: "I didn't notice for a year. And then I noticed, and I thought it wasn't my business, because it was the route. Everyone takes the route." },
          { s: 'jaehyun', f: 'sad', t: "...It was my business. I was the only one in the house who could have said something he'd have listened to." }
        ] },
        { t: "(Sing the next one. Out loud.)", notes: 3, then: [
          { n: "The choir started the next carol and she sang it, out loud, the alto line, at the edge of the crowd, not loud but not hiding, and a woman in front of her turned around and smiled, and Jaehyun stood beside her with his hands in his pockets and didn't sing, he couldn't, he'd never been able to, and his jaw was working the whole time." }
        ] },
        { t: "Was I any good?", notes: 2, then: [
          { s: 'jaehyun', f: 'neutral', t: "I don't know. I'm the wrong person to ask. I can't tell a good note from a bad one." },
          { s: 'jaehyun', f: 'sad', t: "I can tell you that when you sang, the house sounded like someone lived in it. And when you stopped, it sounded like a very expensive hotel." }
        ] }
      ] },
      { n: "Somebody in a red scarf in the front row was looking at her. A girl about thirteen, small, with her music folder clutched to her chest between carols, staring at Solar with the frank fascination of someone who'd heard an alto line from the crowd and wanted very badly to know whose it was. Solar looked away first. Like she always did. Like she'd apparently always done." },
      { s: 'jaehyun', f: 'neutral', t: "You should keep doing it. Wherever you are. Whatever Father thinks. I'll tell him myself, if I have to. I'll call it." },
      { s: 'jaehyun', f: 'serious', t: "...If you want me to. I'm asking. I'm practicing asking." },
      { choose: [
        { t: "I want you to.", notes: 3, flag: { 'jaehyun-call-it': true }, then: [
          { s: 'jaehyun', f: 'neutral', t: "Then I will." },
          { n: "He said it like a man signing something. She believed him. She didn't know if she'd ever believed him before, about anything that mattered, and the feeling of it was strange and new and warm, like stepping into a heated room in your coat." }
        ] },
        { t: "I'll tell him myself.", notes: 3, flag: { 'jaehyun-own-play': true }, then: [
          { s: 'jaehyun', f: 'surprised', t: "..." },
          { s: 'jaehyun', f: 'happy', t: "...Yes. Of course you will. That's better. That's a much better play." },
          { s: 'jaehyun', f: 'neutral', t: "I'll be in the room. Not saying anything. Just in the room." }
        ] }
      ] },
      { place: 'Iwatodai Station', time: 'Evening', music: 'night' },
      { n: "He walked her to the station afterward, on the street side, in the cold, past the shuttered stalls and the white breath of the noodle carts, and they didn't talk, which with him was not the same as silence. The platform was nearly empty. A businessman asleep standing up. Two girls sharing earbuds. And at the far end, on the last bench, under the big clock, someone in a navy coat too big for her." },
      { ifMet: 'wren', then: [
        { n: "Wren. Of course. She was always there in the evenings, ticket in her lap, cap down, waiting for a train that always seemed to be the next one. Solar lifted a hand. Wren lifted hers back, small, from the far end, and ducked her head into her collar, and looked away." },
        { n: "Jaehyun had stopped walking." },
        { n: "He was looking down the platform at the bench. Not the way he looked at things. Not reading. He looked the way a man looks at a word he's seen a thousand times that has suddenly, for no reason, stopped looking like a word. And his jaw did something. A small hard movement, once, under the skin, and then again." },
        { s: 'jaehyun', f: 'serious', t: "Who is that." },
        { s: 'solar', f: 'neutral', t: "Wren. She's... at the station. She misses her train a lot. She's nice." },
        { s: 'jaehyun', f: 'surprised', t: "...She sits like you." },
        { n: "That was all. He didn't say anything else about it. He stood beside her until her train came, and when the doors opened he put his hand on her head for half a second, the way he did, and when the doors closed she looked back through the glass, and he wasn't looking at her. He was still looking down the platform at the bench, with his hands at his sides, and for the first time since she'd met him, he didn't seem to arrive anywhere at all." }
      ], else: [
        { n: "He stood beside her until her train came, and didn't say anything, and when the doors opened he put his hand on her head for half a second, the way he did, so fast nobody on the platform could have seen it." },
        { n: "When the doors closed she looked back through the glass, and he was still standing there, hands in his pockets, watching the train go the way he watched everything go, all of it at once, until it was gone." }
      ] }
    ] },

    { after: '1/9', title: '9: what are you running', place: 'Naganaki Shrine', time: 'Afternoon', scene: [
      { n: "It was the first week of January and the shrine still had its New Year's ropes up, thick and white and twisted, and the paper streamers stirring in the cold, and the steps were dusted with a thin snow that nobody had swept because the old man was off for the week, and Jaehyun wasn't running." },
      { n: "He was sitting at the top, on the last step, with his elbows on his knees, looking down all hundred and twelve of them at the street, and when she came up he moved over to make room without being asked." },
      { s: 'jaehyun', f: 'neutral', t: "Everyone's asked you. To come home." },
      { s: 'jaehyun', f: 'neutral', t: "The girls asked you on the roof. I heard. The whole dorm heard. Hyein doesn't know how to ask quietly." },
      { s: 'jaehyun', f: 'serious', t: "I haven't asked. You've noticed." },
      { s: 'solar', f: 'neutral', t: "I noticed." },
      { s: 'jaehyun', f: 'sad', t: "It's the hardest thing I've ever done. I want you to know that. It's harder than the shoulder. It's harder than anything Father's ever put in front of me." },
      { choose: [
        { t: "Then why are you doing it?", notes: 3, then: [
          { s: 'jaehyun', f: 'neutral', t: "Because every time I've called a play for you, you've run the other way. Every time. Since you were six." },
          { s: 'jaehyun', f: 'serious', t: "I'm not stupid, Solar. I'm slow. There's a difference. It took me nineteen years to read that one." }
        ] },
        { t: "(Lean into his shoulder. The good one.)", notes: 3, then: [
          { n: "She leaned. Into the left one, the one that didn't click, and he went still the way he always did, and then didn't, and after a while his arm came around and stayed there, heavy and warm through two coats, and neither of them looked at the other, and the snow on the steps below them went on being snow." }
        ] },
        { t: "You're bad at it. Not asking.", notes: 2, then: [
          { s: 'jaehyun', f: 'flustered', t: "I know. You can see it on me. Everyone can. Junpei asked if I was constipated." },
          { s: 'jaehyun', f: 'happy', t: "...I'll get better. I get better at everything. It's the only thing I've got going for me." }
        ] }
      ] },
      { n: "The night of the solstice came up between them without either of them saying it. The bells. The whole city sitting up in its beds. She'd heard, later, from Fuuka, that one of the first people up the stairs to the platform had been a tall man from the guesthouse by the station who'd had his shoes on before the second bell, and had stopped at the top, and come no closer, and read the whole thing from there." },
      { ifFlag: 'route-R', then: [
        { s: 'jaehyun', f: 'neutral', t: "The bell. I saw it. Hyein says it hasn't stopped shining since." },
        { s: 'jaehyun', f: 'serious', t: "I'm not going to say anything about it. You said it on a platform in front of everyone. That's yours. I'm not going to touch it." },
        { s: 'jaehyun', f: 'happy', t: "...I'd be lying if I said I didn't sleep that night for the first time since October." }
      ], else: [
        { ifFlag: 'route-true', then: [
          { s: 'jaehyun', f: 'neutral', t: "All three of them. Fuuka says she's never heard anything like it. She says it sounded like a chord. I don't know what that means. You'd have to explain it to me, and I still wouldn't hear it." },
          { s: 'jaehyun', f: 'serious', t: "I don't need to understand it. I watched your face from the stairs. I know what your face does when you've decided something. I don't need to understand the rest." }
        ], else: [
          { ifFlag: 'route-stay', then: [
            { s: 'jaehyun', f: 'neutral', t: "Nothing shone. On the platform. I was at the top of the stairs. I read it before I got there." },
            { s: 'jaehyun', f: 'sad', t: "You're staying. I know. You don't have to say it to me. You don't have to manage my face about it. I'm managing it." },
            { n: "He wasn't. Not entirely. She watched a muscle in his jaw go, once, and he watched her watch it, and neither of them did anything about it, and the streamers moved in the cold above them." }
          ], else: [
            { s: 'jaehyun', f: 'neutral', t: "It wasn't the bell. On the platform. I was at the top of the stairs. I read it before I got there." },
            { s: 'jaehyun', f: 'sad', t: "You're going home. Not to mine. To one of the others. I know. You don't have to say it to me. You don't have to manage my face about it. I'm managing it." },
            { n: "He wasn't. Not entirely. She watched a muscle in his jaw go, once, and he watched her watch it, and neither of them did anything about it, and the streamers moved in the cold above them." }
          ] }
        ] }
      ] },
      { s: 'jaehyun', f: 'neutral', t: "I read the field. I see where it's going. Everything in me wants to call it. And I'm not going to." },
      { n: "He turned his head and looked at her, all the way, the way he looked at defenses, at film, at anything he needed to understand before he moved, and for once it wasn't a reading. It was a question." },
      { s: 'jaehyun', f: 'serious', t: "So I'm going to ask you a different thing. For the first time in your life. What are you running, Solar?" },
      { choose: [
        { t: "I don't know yet.", notes: 3, then: [
          { s: 'jaehyun', f: 'neutral', t: "Okay." },
          { s: 'jaehyun', f: 'neutral', t: "That's an answer. That's a real answer. I'll wait at the line until you do." }
        ] },
        { t: "Something nobody drew for me.", notes: 3, then: [
          { s: 'jaehyun', f: 'surprised', t: "..." },
          { s: 'jaehyun', f: 'happy', t: "...Good. That's the hardest route there is. Nobody covers it. Nobody expects it." },
          { s: 'jaehyun', f: 'neutral', t: "Run it." }
        ] },
        { t: "Why do you want to know?", notes: 2, then: [
          { s: 'jaehyun', f: 'neutral', t: "So I can block for it. Whatever it is. That's all I'm good for. Let me be good for it." }
        ] }
      ] },
      { ifFlag: 'jaehyun-ball', then: [
        { s: 'jaehyun', f: 'neutral', t: "I've been practicing. The thing you said. In November. About the ball." },
        { s: 'jaehyun', f: 'happy', t: "I haven't said *bring* once since. Not about you. Not about anyone. Junpei asked me to bring him a drink yesterday and I said *I'll get you one* and he looked at me like I'd had a stroke." },
        { s: 'solar', f: 'neutral', t: "Jae. That's not what I meant." },
        { s: 'jaehyun', f: 'happy', t: "I know. I'm overcorrecting. I do that. It's the only way I know how to learn anything." }
      ] },
      { s: 'jaehyun', f: 'sad', t: "Whatever happens. Wherever you go. I'm going home either way. Someone has to be at the table when you call. Even if you don't." },
      { s: 'jaehyun', f: 'neutral', t: "...But the offer stands." },
      { n: "They sat on the top step until the snow started again, thin, coming down past the shrine lanterns, and neither of them said anything, which was, she had finally learned, the only way the two of them had ever known how to say anything at all." }
    ] },

    { after: '1/24', title: '10: jae', place: 'Iwatodai Dorm · Front', time: 'Night', music: 'tender', scene: [
      { n: "Midnight. The Dark Hour came up green over the street, the streetlamps going dark one after another down the hill like someone walking ahead of the night switching them off, and he was standing on the dorm's front step, exactly where he'd stood the night he came through, with his hand raised to knock." },
      { n: "She opened the door before he could." },
      { s: 'jaehyun', f: 'surprised', t: "...Solar." },
      { s: 'jaehyun', f: 'sad', t: "I was going to knock. Three times. Like the first night. And then wait, this time. I knocked and walked off, that night. I didn't trust anyone to answer. I went to look for you myself." },
      { s: 'jaehyun', f: 'neutral', t: "I wanted to see what happened if I stayed on the step." },
      { n: "And she knew him." },
      { n: "All at once, standing in the doorway in the green. Not in pieces, the gloves, the alto line, the stadium, one at a time. All of it, everything, a whole childhood coming up through her like the floor of a house when you come home after years: a tall boy who was always somewhere else, at practice, at a dinner, at a table with Father, who never once came to her room and always, every single time she'd ever been somewhere frightening, a party, a gala, a camera, turned up at the edge of it, at the back, saying nothing, already there. A text at the start of a school year. *Are you settling in alright?* A hand on top of her head for half a second in front of a crowd, so fast nobody saw. *Thanks for doing this, sister.*" },
      { n: "Thirty-one stairs at the house, and her saying thirty-two. A suite with glass. A morning text with a period at the end. A table that was a schedule. Every argument they'd ever had, in the right order, the order it had happened in, the way he'd have wanted it filed." },
      { n: "And the woods, his part of them. A fire at the end of a long cold day and a log beside it, her hands not working properly and her face not working at all, and him coming round the edge of the light and seeing her and not asking. *Sit down.* *I'm fine.* *I didn't ask.* Water in her hands. His jacket on her shoulders. And when she'd said *please don't ask*, he'd said *I won't*, and hadn't, the whole rest of the night, which she understood now, on this step, was the hardest thing she had ever watched him do." },
      { fragment: 'runners-lake' },
      { flag: { 'mem-camp': true } },
      { s: 'solar', f: 'surprised', t: "...Jae." },
      { n: "His hand was still raised to knock. He didn't put it down. He stood there in the green with his fist in the air like a man who'd forgotten what he'd lifted it for." },
      { s: 'solar', f: 'happy', t: "You're not wearing enough layers." },
      { s: 'jaehyun', f: 'surprised', t: "..." },
      { s: 'jaehyun', f: 'sad', t: "...Very funny, Solar." },
      { cg: 'link-jaehyun-r10' },
      { n: "His voice cracked down the middle of her name. She'd never once heard it crack. Not here, not there, not anywhere in a whole life of being his little sister. He heard it too, and put his raised hand down slowly, very carefully, on top of her head, and left it there." },
      { cg: null },
      { choose: [
        { t: "Do not be hostile.", notes: 3, then: [
          { n: "He laughed. Out loud, on the dorm step, in the Dark Hour, his hand still on her head, a real laugh, surprised out of him, and it went out over the green silent street where nobody else was awake to hear it, and she thought it might be the first time she'd ever made her brother laugh on purpose." },
          { s: 'jaehyun', f: 'happy', t: "That's mine. That's my line. You stole my line." }
        ] },
        { t: "(Hug him. Make him stay for it.)", notes: 3, then: [
          { n: "She hugged him. He didn't go stiff this time. He put both arms around her and held on, hard, in the doorway, the way you'd hold onto someone at an airport, and over her head she heard him breathe out, long and slow, like a man who'd been holding his breath since October." }
        ] },
        { t: "Don't wanna hear it, Jae.", notes: 3, then: [
          { s: 'jaehyun', f: 'surprised', t: "..." },
          { n: "It came out of her in exactly the voice. The bored one. The one with her chin up and her eyes somewhere else, the one she'd used on him across tailgates and dinner tables and the back seats of cars since she was old enough to roll her eyes, and she heard it come out, and so did he." },
          { s: 'jaehyun', f: 'sad', t: "...There you are." },
          { n: "He said it so quietly she almost didn't hear it. He looked away, at the street, at the dark lamps, at anything, and blinked twice, hard, and when he looked back his face was arranged again, almost. Almost." }
        ] }
      ] },
      { n: "When the hour was over and the lamps came back on down the hill, one after another, she was sitting on the front step beside him in her coat, and she took out her phone, and looked at the top of her messages." },
      { ifFlag: 'jaehyun-bigbro', then: [
        { n: "*big bro.* She'd typed it in October without knowing why, in the dark, with her thumbs. It had been right the whole time. Her hands had known before she had. They usually did." },
        { s: 'jaehyun', f: 'neutral', t: "What are you smiling at." },
        { n: "She turned the screen to him. He read it. He didn't say anything for a while." },
        { s: 'jaehyun', f: 'happy', t: "...You've had me as that since you were twelve. You've never once told me. Hyein told me. Hyein tells me everything she shouldn't." }
      ], else: [
        { ifFlag: 'jaehyun-named', then: [
          { n: "*Jaehyun.* Capital J. Very formal. Very correct. It looked, now, like a name tag on a stranger's coat." },
          { n: "She held the phone where he couldn't see it, and changed it, with her thumbs, lowercase, the way it had always been, the way it had been on every phone she'd owned since she was twelve. *big bro.*" },
          { s: 'jaehyun', f: 'neutral', t: "What are you doing." },
          { s: 'solar', f: 'neutral', t: "Fixing something." }
        ], else: [
          { n: "*Unknown number.* All this time. Since August. She'd never known what to call him, so she'd called him nothing, which was, she realized now, exactly what she'd have done at home, when she was furious enough." },
          { n: "She changed it, with her thumbs, lowercase, the way it had always been, the way it had been on every phone she'd owned since she was twelve. *big bro.*" },
          { s: 'jaehyun', f: 'neutral', t: "What are you doing." },
          { s: 'solar', f: 'neutral', t: "Answering the first text." }
        ] }
      ] },
      { ifFlag: 'jaehyun-call-it', then: [
        { s: 'jaehyun', f: 'neutral', t: "I haven't forgotten. The singing. I said I'd call it. With Father. I've been planning what I'll say since December." },
        { s: 'jaehyun', f: 'happy', t: "It's eleven pages. I'm going to cut it to one sentence. He respects one sentence." }
      ], else: [
        { ifFlag: 'jaehyun-own-play', then: [
          { s: 'jaehyun', f: 'neutral', t: "When you tell Father. About the singing. You said you'd do it yourself." },
          { s: 'jaehyun', f: 'neutral', t: "I'll be in the room. I've decided where I'll stand. By the window. Where he can see me, and see that I'm not saying anything." }
        ] }
      ] },
      { s: 'jaehyun', f: 'neutral', t: "You don't have to tell me what you're running. I meant that. I still mean it." },
      { ifFlag: 'route-R', else: [
        { ifFlag: 'route-true', else: [
          { s: 'jaehyun', f: 'neutral', t: "The number will still work. After. I'll make sure of it. I don't know how yet. I'll find out." },
          { s: 'jaehyun', f: 'serious', t: "I'll keep sending them. *She's safe.* Every day. Whether they go anywhere or not. I want there to be a record." }
        ] }
      ] },
      { s: 'jaehyun', f: 'neutral', t: "Call if you need anything." },
      { choose: [
        { t: "I won't.", notes: 3, then: [
          { s: 'jaehyun', f: 'happy', t: "...But the offer stands." }
        ] },
        { t: "I might. Don't make it weird.", notes: 3, then: [
          { s: 'jaehyun', f: 'surprised', t: "..." },
          { n: "He didn't say anything for a moment. He looked down the dark street with the lamps coming back on along it, one by one, as if he were counting them, and his jaw did the thing it did, once, and then he had it back." },
          { s: 'jaehyun', f: 'happy', t: "...I won't make it weird. But the offer stands." }
        ] },
        { t: "(Say nothing. Let him have the last word, for once.)", notes: 2, then: [
          { n: "She didn't answer. He waited for it, the *I won't*, the way you'd wait for the second shoe, and when it didn't come he looked at her, and understood, and nodded once, the way he'd nod at a time read out with the tenths." },
          { s: 'jaehyun', f: 'happy', t: "...The offer stands. That's all. That's the whole thing." }
        ] }
      ] }
    ] }
  ],

  afterMax: [
    { title: 'the tenths', place: 'Naganaki Shrine', time: 'After School', scene: [
      { n: "A hundred and twelve steps. Up and down. She timed him from the bottom with Akihiko's old stopwatch on its red cord, and read it out with the tenths, and the groove in the gravel at the foot of the stairs was deep enough now that the old man had given up and put a small stone at each end of it, like a pair of bookends, as if it were something the shrine had always had." },
      { s: 'jaehyun', f: 'neutral', t: "Again. And then you're running it and I'm timing you." },
      { choose: [
        { t: "(Run it.)", notes: 3, then: [
          { s: 'jaehyun', f: 'neutral', t: "Three minutes four and six tenths. Better than last week." },
          { s: 'jaehyun', f: 'happy', t: "...Good." }
        ] },
        { t: "(Make Akihiko-senpai race him instead.)", notes: 3, then: [
          { n: "Akihiko was there in eleven minutes, stretching. They raced the steps four times. Jaehyun won three. Akihiko demanded a fifth. Solar timed all of it, with the tenths, and didn't round once." },
          { s: 'akihiko', f: 'serious', t: "Again. You were favoring the shoulder on the turn. I'm not taking a win off a guy favoring the shoulder." },
          { s: 'jaehyun', f: 'flustered', t: "I wasn't favoring it." },
          { s: 'akihiko', f: 'happy', t: "You were. Your sister told me which one to watch." },
          { n: "Jaehyun turned his head and looked at her, very slowly, at the bottom of the steps, with the stopwatch in her hand and her face perfectly innocent, and she held the look for a full three seconds before she lost it and had to sit down on the gravel, and he stood over her not laughing, very deliberately not laughing, which was worse." }
        ] }
      ] }
    ] },
    { title: 'sunday dinner', place: 'Iwatodai Dorm · Dining Room', time: 'Evening', scene: [
      { n: "Rice, eggs, grilled meat, enormous portions. A plate in front of everyone. He stood at the end of the table until they ate, in an apron Fuuka had lent him that said something in English about kissing the cook, which he had either not read or had decided was beneath comment." },
      { s: 'jaehyun', f: 'neutral', t: "Solar. What do you want. I'm asking." },
      { choose: [
        { t: "Exactly this.", notes: 3, then: [
          { s: 'jaehyun', f: 'neutral', t: "...Good." },
          { n: "He sat down, finally, and ate, and put his hand on top of her head for half a second when he passed the salt, and nobody at the table saw, except everyone." }
        ] },
        { t: "Something you've never made.", notes: 3, then: [
          { s: 'jaehyun', f: 'serious', t: "That's a big ask." },
          { s: 'jaehyun', f: 'neutral', t: "Fine. Next Sunday. I'll study film." }
        ] },
        { t: "Sit down, Jae. Eat with us.", notes: 3, then: [
          { n: "He looked at the chair she'd pulled out. He looked at the table, all of them, Junpei already on seconds, Ken cutting his meat into perfect squares, Koromaru's chin on Aigis's knee, Mitsuru pouring tea for people who hadn't asked, the whole loud overfull room that wasn't his, that he'd been feeding every Sunday for three months standing up." },
          { n: "He took the apron off. He folded it. He sat down." },
          { s: 'jaehyun', f: 'sad', t: "...At home we eat in a room that seats twenty. It's usually four of us. Father at one end. Nobody talks." },
          { s: 'junpei', f: 'happy', t: "Dude, nobody talks here either! We just yell!" },
          { s: 'jaehyun', f: 'happy', t: "I noticed. I like it." }
        ] }
      ] }
    ] },
    { title: 'the notebook', place: 'Iwatodai Dorm · Command Room', time: 'Night', scene: [
      { n: "He was in the command room again, after, in the chair behind Fuuka's, with the monitors dark and the notebook in his lap, and when she came up with the radio he held the notebook out to her without a word, the way he'd held out the number on the first day." },
      { s: 'jaehyun', f: 'neutral', t: "It's yours. I'm going home soon. It shouldn't go with me. It isn't about me." },
      { n: "She opened it. It started in November, in his neat print, every call she'd made, every floor, every time she'd gone up." },
      { ifFlag: 'jaehyun-no-grades', then: [
        { n: "The first night had grades. Ticks, and crosses, and a note in the margin, *four seconds late.* And then, from the second of November on, there were no grades at all. Just the date, and the floor, and the time she'd come back down. Night after night. *1:12. 1:40. 12:58. 2:03.* A whole winter of it. Nothing else on the page but the times she'd come home." },
        { s: 'jaehyun', f: 'neutral', t: "You said I didn't get to grade your calls. You were right. So I stopped." },
        { s: 'jaehyun', f: 'neutral', t: "I couldn't stop writing something down. I'm not built that way. So I wrote down the only part that was mine. When you came back." }
      ], else: [
        { n: "Ticks, and crosses, and notes in the margin, *four seconds late, stairs open, too generous.* And then, as the pages went on, through November and into December, fewer crosses. Then fewer notes. And then, sometime in January, a page with nothing on it but a column of ticks, every single call, and at the bottom, underlined twice, in a hand that had pressed so hard it went through to the next page, *Better than me.*" },
        { s: 'jaehyun', f: 'happy', t: "I watch everyone. I tell them where they were late. I stopped finding anywhere you were late." },
        { s: 'jaehyun', f: 'serious', t: "I don't know when that happened. I'd like to think I'd have noticed, at home. I'm not sure I would have." }
      ] },
      { choose: [
        { t: "(Keep it.)", notes: 3, then: [
          { n: "She closed it and held it against her chest, the way Fuuka held the radio, and didn't say thank you, because she could see on his face that if she did he'd have to say something back, and he'd already said everything he had." }
        ] },
        { t: "Write one more. Tonight's.", notes: 3, then: [
          { n: "She gave it back to him, open, with the pencil. He looked at her. Then he bent over the page and wrote, in his neat impatient print, the date, and the floor, and the time." },
          { n: "And under it, smaller, as if it might not be allowed: *She said we're coming back. She was right.*" }
        ] }
      ] }
    ] },
    { title: 'floodlights', place: 'Gekkoukan High · Front Gate', time: 'Evening', scene: [
      { n: "Somebody had left the floodlights on again. She suspected, by now, that the somebody was him, and that the janitor had stopped asking. He was on the cinder track with the football, and he didn't say anything when she came through the gate, just threw it, long and high and lazy, a ball that hung up there in the white light for an impossible second like it had decided to stay, and came down into her hands." },
      { n: "She threw it back. A real one. Tight. He caught it against his chest and nodded once." },
      { ifFlag: 'route-R', then: [
        { s: 'jaehyun', f: 'neutral', t: "Next fall. The home opener. Father will want you in the suite." },
        { s: 'solar', f: 'happy', t: "I'll be in the student section. With the girls. With stars on my face." },
        { s: 'jaehyun', f: 'serious', t: "He won't like it." },
        { s: 'solar', f: 'neutral', t: "I know." },
        { s: 'jaehyun', f: 'happy', t: "...I'll know where to look, then. I won't have to look at the glass." }
      ], else: [
        { ifFlag: 'route-true', then: [
          { s: 'jaehyun', f: 'neutral', t: "Next fall. The home opener. I don't know how any of what you're doing works. I don't know which of you will be where." },
          { s: 'jaehyun', f: 'neutral', t: "I'm going to look up at the stands anyway. I've decided. Every time I come off the field." },
          { s: 'jaehyun', f: 'happy', t: "...If you're there, yell. Behind glass or not. I'll hear it. I don't know how. I'll find out." }
        ], else: [
          { s: 'jaehyun', f: 'neutral', t: "Next fall. The home opener. I'll come off the field after the first series and look up at the suite. Out of habit." },
          { s: 'jaehyun', f: 'sad', t: "You won't be there. I know. I'll look anyway. I've decided. It's a better habit than most of mine." },
          { n: "He threw the ball back to her before she could answer, which she understood was the point, and she caught it, and they threw it until the timer clicked the lights off, all four at once, and stood there in the sudden dark, and he didn't laugh this time. He just stood there being her brother in the dark, where nobody, not even she, could see his face." }
        ] }
      ] },
      { choose: [
        { t: "(Run a slant. Make him put it where you'll be.)", notes: 3, then: [
          { n: "She ran. She didn't look back. She didn't need to. The ball came down out of the light into her hands exactly where they were going to be, and she caught it running, and kept running, all the way to the end zone he'd marked with two of the shrine's stones, and spiked it, badly, and he stood at the far end of the field with his hands on his hips and his head down, shaking it, and she could see his shoulders going." }
        ] },
        { t: "Teach me the four seconds. Before the snap.", notes: 3, then: [
          { s: 'jaehyun', f: 'neutral', t: "...Stand here. Look at the field. All of it. Don't look at any one thing." },
          { s: 'jaehyun', f: 'neutral', t: "Now tell me where everyone's going to be." },
          { n: "She looked. The empty field. The cones. The white light. The dark beyond it. And she found she could see it, not the field, the shape of the thing, the way a fight looked from the back of the party just before it started, where the gap would open and who would fall into it, and she told him, and he listened, and when she was done he was quiet for a long time." },
          { s: 'jaehyun', f: 'happy', t: "That's the four seconds. You've always had them. You just use them on people." }
        ] }
      ] }
    ] },
    { title: 'big bro', place: "Iwatodai Dorm · Solar's Room", time: 'Late Night', scene: [
      { n: "Two in the morning. She couldn't sleep, which wasn't new. What was new was that she knew exactly who else would be awake, because he'd told her, once, on a riverbank, that he slept four hours a night in season and had never learned how to stop." },
      { phone: [
        { from: 'solar', t: "jae" },
        { from: 'solar', t: "u up" },
        { from: 'jaehyun', t: "Yes." },
        { from: 'jaehyun', t: "Why are you up." },
        { from: 'solar', t: "why are YOU up" },
        { from: 'jaehyun', t: "Film." },
        { from: 'solar', t: "u dont have any film here" },
        { from: 'jaehyun', t: "I'm watching the ceiling. It's a very slow game." }
      ], contact: 'big bro' },
      { n: "She laughed into the pillow, quietly, so she wouldn't wake Yukari through the wall, and lay there with the phone glowing on her face, and the timestamp on every one of his messages still said the same minute, the minute on the Strip in the rain, and she didn't mind it any more. It just meant he was still arriving." },
      { choose: [
        { t: "(Text: are u scared to go home)", notes: 3, then: [
          { phone: [
            { from: 'solar', t: "are u scared to go home" },
            { from: 'jaehyun', t: "No." },
            { from: 'jaehyun', t: "Yes." },
            { from: 'jaehyun', t: "I'm scared of the first morning. When I wake up and you're not down the hall. Even if you are. Even if you're home. I'll have to check." },
            { from: 'jaehyun', t: "Don't tell anyone I said that." }
          ], contact: 'big bro' },
          { n: "She didn't tell anyone. She lay there for a long time, with the phone on her chest, and then typed *me too*, and deleted it, and typed it again, and sent it, and turned the phone face down, and slept, finally, like something had been put down." }
        ] },
        { t: "(Text: thanks for coming to get me)", notes: 3, then: [
          { phone: [
            { from: 'solar', t: "thanks for coming to get me" },
            { from: 'jaehyun', t: "I didn't come to get you." },
            { from: 'jaehyun', t: "I came to find you. You were always going to do the rest yourself." },
            { from: 'jaehyun', t: "Go to sleep, Solar." },
            { from: 'solar', t: "dont wanna hear it jae" },
            { from: 'jaehyun', t: "Goodnight, sister." }
          ], contact: 'big bro' },
          { n: "She read the last one four times. Then she put the phone under the pillow, still lit, and fell asleep with her hand on it, the way you'd keep your hand on a dog's back in a storm, so you'd know, without waking, that it was still there." }
        ] },
        { t: "(Text: tell me something about home)", notes: 3, then: [
          { phone: [
            { from: 'solar', t: "tell me something about home" },
            { from: 'jaehyun', t: "Your room is exactly how you left it. Mother won't let anyone move anything." },
            { from: 'jaehyun', t: "There's a choir folder on the top shelf of your closet. Behind the boxes. You think nobody knows it's there." },
            { from: 'jaehyun', t: "I've known for four years. I've never told anyone. I'm telling you so you know someone's been keeping it." }
          ], contact: 'big bro' },
          { n: "She didn't answer that one. She couldn't. She lay in the dark in a borrowed world with her hand over her mouth, and somewhere very far away, on a top shelf, behind the boxes, in a room nobody was allowed to touch, a folder of sheet music she couldn't picture waited for her in the dark, and somebody had known the whole time, and had said nothing, and had let her keep it." }
        ] }
      ] }
    ] }
  ]
});
