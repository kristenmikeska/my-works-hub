/* Kiriko · X Fortune. Revamp social link data (femc-game.html). Format: link fields in assets/femc/game/core.js, scene lines in scene.js.
   Visitor (Overwatch), first wave (6/8). Friendship only. She draws an omikuji for Solar in every rank.
   Kiriko doesn't know Solar. Solar's body knows Kiriko (in another life she mains her), which is uncanny for Solar and
   only ever delightful to Kiriko. Rank 4 holds the fragment runners-monitor. Rank 9: the gold bell on Haenim's sash is
   Kiriko's suzu. Rank 8 meets Widowmaker (branches on Widowmaker rank 1).
   Cast-only speakers: none.
   Link-local flags (2026-10-21 depth pass), read back later in this file and in data/living-visitors.js:
     kiriko-shade (rank 1: Solar steps into the sun's way) → rank 10, afterMax "the last sweep".
     kiriko-healer (rank 4: she tells Kiriko she's played a game with a healer) → afterMax "healer main".
     kiriko-next-one (rank 6: "you'd be the next one") → rank 10 (she only quotes Solar if Solar said it), the 12/31 bell.
     kiriko-borrowed (rank 9: "maybe I just borrowed it") → rank 10.
   Living world (texts after ranks 2/3/5/6/8/9, holidays 9/23 and 12/31, a visit and a call): data/living-visitors.js.
   Runners (skill, on the page only): Solar is a Grandmaster support who mains Kiriko; Haechan mains Widowmaker.
   afterMax: four scenes after rank 10 (she stays until the doors open on 3/6). */
(window.FEMC_GAME_LINKS ||= []).push({
  id: 'kiriko', name: 'Kiriko', short: 'Kiriko', arcana: 'Fortune', numeral: 'X', from: 'Overwatch',
  kind: 'visitor',
  romance: null,
  starts: '6/10',
  home: { area: 'shrine', spot: 'Steps', slot: 'after', days: [0, 2, 4, 6],
          hint: 'After school on Tuesdays and Thursdays, and in the daytime on weekends, on the steps of Naganaki Shrine.' },
  approach: "Someone has swept Naganaki Shrine. Every path, every step. A girl with a high purple-streaked ponytail is sitting on the offering box, eating a melon pan she definitely didn't buy at a shrine.",
  cast: {},
  invite: {
    ask: [
      "shrine. snacks. dont tell the dog",
      "u free?? fortune time 🦊",
      "i drew ur fortune already. come get it before it gets impatient",
      "the shrine is SO clean today. come admire my work",
      "i have two melon pan and one stomach. help",
      "this phone folds and i hate it. come let me complain at u in person",
      "emergency. not a real emergency. a taiyaki emergency 🦊"
    ],
    ok: ["yay 🦊 hurry", "yesss. i'll save u the good step", "ok ok ok come up the stairs. all of them lol"],
    no: ["boo. ok", "fine. ur fortune will wait. it's very patient", "ok 😔 next time. i'm telling the foxes"]
  },
  hangouts: [
    [
      { n: "Kiriko was sweeping again. She swept the way some people played an instrument, with her whole body, humming something with no tune, the broom going out in long confident arcs across the gravel while the crows on the torii watched her like a panel of disappointed judges." },
      { s: 'kiriko', f: 'happy', t: "Oh good, labor. Grab the other broom. It's behind the offering box. It's the bad one, sorry, I keep the good one for me." },
      { choose: [
        { t: "(Grab the bad broom and get to work.)", notes: 3, then: [
          { n: "The bad broom was missing half its bristles and dropped the rest as Solar swept, so that mostly she was moving the leaves around in a more organized way, and Kiriko watched her do it for a full minute with her chin on her own broom handle before she traded with her without a word, which was, Solar understood, the highest honor the shrine had to give." }
        ] },
        { t: "I'll supervise.", notes: 2, then: [
          { s: 'kiriko', f: 'neutral', t: "Wow. Okay. Management." },
          { n: "Solar supervised from the steps. Kiriko swept a perfect spiral around her, on purpose, slowly, until Solar was sitting in the exact middle of it like a stone somebody had set in a raked garden and was now too important to move." }
        ] },
        { t: "Does anyone actually come up here?", notes: 1, then: [
          { s: 'kiriko', f: 'serious', t: "You do. That's one. One's a start." }
        ] }
      ] },
      { s: 'kiriko', f: 'happy', t: "Done! Fortune for the labor. Shrine rules." },
      { s: 'kiriko', f: 'neutral', t: "Sho-kichi. Small blessing. \"Tend the small things and the big things will follow.\" ...Huh. Pretty sure that one was for me." },
      { n: "The gravel lay in clean lines behind them all the way to the gate, and the crows, for once, had nothing to add." }
    ],
    [
      { n: "Kiriko shook the fortune box, slid out the stick, read the number, found the drawer, unfolded the slip, and made a noise like somebody had stepped on a cat." },
      { s: 'kiriko', f: 'surprised', t: "Kyo. Bad luck. For YOU. On MY shrine." },
      { s: 'kiriko', f: 'serious', t: "\"Lost things stay lost. Travel is unwise. The one you wait for is late.\" Wow. Rude. Who even writes these?" },
      { choose: [
        { t: "Tie it to the tree. That's what you do with bad ones.", notes: 3, then: [
          { s: 'kiriko', f: 'happy', t: "Yes! You leave the bad luck here and the gods deal with it. That's the whole system. You know the system!" },
          { n: "She tied it to the low branch of the pine by the water basin, among a dozen other little white knots, with a vicious double knot, the way you'd tie up someone who'd tried to rob you." }
        ] },
        { t: "Can I draw again?", notes: 2, then: [
          { s: 'kiriko', f: 'flustered', t: "That's technically cheating. Do it anyway. I'm not looking." },
          { n: "Kichi. Blessing. Kiriko announced it with the enormous relief of someone who had, in every possible sense, been looking." }
        ] },
        { t: "I've had worse.", notes: 1, then: [
          { s: 'kiriko', f: 'sad', t: "Don't say it like that. Now I have to worry about you all day." }
        ] }
      ] },
      { n: "Halfway down the hundred-odd steps Solar looked back, and Kiriko was standing by the pine with her arms crossed, glaring at the knot, as if the bad luck might try something the second she turned around." }
    ],
    [
      { n: "The stone foxes on either side of the shrine path wore red bibs, and the bibs had faded to the color of old watermelon, and Kiriko had bought new ones with money Solar didn't ask about and was crouched in front of the left fox retying his with the care of someone dressing a small child for a wedding." },
      { s: 'kiriko', f: 'neutral', t: "This one's grumpy. That one's nice. Don't tell them I said that. They can hear." },
      { s: 'kiriko', f: 'happy', t: "You do the nice one. Bow first. You always bow first." },
      { choose: [
        { t: "(Bow to the fox and introduce yourself properly.)", notes: 3, then: [
          { n: "Solar bowed and told the stone fox her name, and her school, and after a pause in which she found she had nothing else to offer, that she was new here, which was true of most things. Kiriko made a small strangled noise of joy into her sleeve." },
          { s: 'kiriko', f: 'happy', t: "That's the most polite thing I've ever seen. He's going to love you forever now. Foxes don't do anything halfway." }
        ] },
        { t: "(Just tie the bib.)", notes: 1, then: [
          { s: 'kiriko', f: 'surprised', t: "You didn't bow! Oh no. Okay, bow now, quick, before he notices." },
          { n: "Solar bowed, late, to a stone fox, and felt, genuinely and against all reason, forgiven." }
        ] },
        { t: "Why is that one grumpy?", notes: 2, then: [
          { s: 'kiriko', f: 'neutral', t: "He's been guarding this place for a hundred years and nobody ever brought him anything. You'd be grumpy too." }
        ] }
      ] },
      { s: 'kiriko', f: 'happy', t: "Fortune for good manners. Kichi. Blessing. \"Respect the old guardians, and they will keep you.\"" },
      { n: "When they were done both foxes stood in their new red bibs at the bottom of the steps, and Solar could have sworn the grumpy one looked very slightly less grumpy, the way a man looks less grumpy in a new tie." }
    ],
    // The list: ofuda practice before the bridge (8/6), the counting after it.
    [
      { ifAfter: '8/7', then: [
        { n: "The inside of the shrine office door was papered with fortune slips now, taped edge to edge, and every one of them had names on the back in Kiriko's small round pencil, every awake person she'd met or heard of since June, with a tick beside each one she'd seen this week. She'd started it the night after the bridge. She hadn't said so. She didn't have to." },
        { s: 'kiriko', f: 'neutral', t: "Sunday count. I do it every Sunday. Then I run the roofs and check the windows. Then I sleep. That's the system. Write a name if you know one I don't." },
        { choose: [
          { t: "(Add your own name.)", notes: 2, then: [
            { s: 'kiriko', f: 'happy', t: "Sol-chan. You're the first one on there. Top left. Look. I wrote you before I wrote me." },
            { n: "She had. *Sol-chan*, in pencil, the very first slip, gone soft and gray from her thumb, with a long row of ticks beside it, one for every Sunday." }
          ] },
          { t: "(Add the porter girl. The one who said sorry.)", notes: 3, then: [
            { s: 'kiriko', f: 'neutral', t: "She's on. Bottom of the last one. I didn't know her name, so I put her down as *sorry*. That's what she said to everybody. Angela says she said it to her too." },
            { n: "There was no tick beside it. Kiriko looked at the empty space for a moment, and then took the pencil from behind her ear and drew a very small fox there instead, as if that was the next best thing." }
          ] },
          { t: "Who's at the top of the list at home?", notes: 2, then: [
            { s: 'kiriko', f: 'happy', t: "Grandma. Then Mom. Then the ramen cat. Then everybody else. Then you, now, here. Don't let it go to your head." }
          ] }
        ] }
      ], else: [
        { n: "Kiriko was writing ofuda at the low table in the shrine office, a stack of blank paper strips on one side and a pot of ink on the other, painting the characters in long confident strokes with a brush that looked older than the shrine. The white dog was asleep under the table across both their feet." },
        { s: 'kiriko', f: 'happy', t: "Try one. Protection. It's just three strokes and a sort of swoosh. Everybody's first one is terrible. Mine was terrible. Grandma framed it so I'd never forget." },
        { choose: [
          { t: "(Try. Slowly.)", notes: 2, then: [
            { n: "Solar's was terrible. The swoosh went off the edge of the paper and onto the table and the second stroke had a drip in it like a tear. Kiriko held it up to the light and studied it with enormous seriousness." },
            { s: 'kiriko', f: 'neutral', t: "...It's a little haunted. That's fine. Haunted protects twice as hard. I'm keeping it." }
          ] },
          { t: "(Let your hand do it without thinking.)", notes: 3, then: [
            { n: "She didn't think. Her hand went down to the paper by itself and made three strokes and a swoosh, quick, sure, and it wasn't anything Kiriko had shown her, and it wasn't Japanese, it was a little cartoon fox, three lines and a curl, like something doodled in the margin of a notebook a thousand times in a room with a screen on." },
            { s: 'kiriko', f: 'surprised', t: "...That's my fox. That's literally my fox. How is that my fox." },
            { s: 'kiriko', f: 'happy', t: "Okay. New rule. That's a real ofuda now. I'm blessing it. I'm putting it on the door." }
          ] }
        ] }
      ] },
      { s: 'kiriko', f: 'neutral', t: "Fortune. Office edition. Kichi. \"What is written down is not lost.\"" }
    ],
    // For once Solar draws the fortune.
    [
      { n: "Rain, all afternoon, on the blue tarp over the office porch, and Kiriko was lying on her back on the boards with her feet up on the offering box, holding the fortune box up over her face and shaking it at the ceiling, not drawing, just shaking, like a rattle." },
      { s: 'kiriko', f: 'serious', t: "Sol-chan. Nobody ever draws one for me. I draw them for everybody. Every day. You know how many fortunes I've had this year? Zero. The gods forget the fortune girl." },
      { s: 'kiriko', f: 'happy', t: "You do it. You shake, you read the number, you get the slip, you read it out. I'll close my eyes so you can't cheat. Well. So you can cheat if you want. I won't know." },
      { n: "Solar shook the box until a stick came out of the hole, and found the drawer, and unfolded the slip. *Kyo.* Bad luck. Travel unwise. What is lost will stay lost. She looked at Kiriko, lying there on the porch boards with her eyes screwed shut, waiting, smiling, the way you wait for a present." },
      { choose: [
        { t: "(Read it exactly as written.)", notes: 2, then: [
          { s: 'kiriko', f: 'surprised', t: "Kyo?? For ME?? On my own porch??" },
          { n: "Then she laughed, so hard she rolled off the boards onto the gravel in the rain, and lay there in it, laughing up at the sky, and said it was the first honest fortune anyone had given her all year and she was keeping it forever, and she did not tie it to the tree." }
        ] },
        { t: "(Make one up. A good one.)", notes: 3, then: [
          { n: "Solar folded the slip back up without a word and held it like she was reading it, and said, Dai-kichi. Great blessing. \"The one who gives every fortune away will be given one back.\"" },
          { s: 'kiriko', f: 'neutral', t: "...That's not on any of the slips. I know every slip. I wrote half of them down this summer so I wouldn't lose them." },
          { s: 'kiriko', f: 'happy', t: "It's the best one I've ever got. I'm putting it in my sleeve. It's going home with me. Don't you dare tell me what it really said." }
        ] },
        { t: "(Tie it to the tree without reading it.)", notes: 2, then: [
          { n: "Solar got up and went out into the rain and tied it to the low pine by the water basin with a vicious double knot, the way Kiriko had taught her, and came back soaked, and Kiriko, who had opened one eye, didn't ask what it had said. She just held the towel out." }
        ] }
      ] },
      { n: "The rain went on. The fox came out of nowhere and lay down along the edge of the tarp where the drips fell, and every drop that touched it lit up for an instant on the way down." }
    ]
  ],
  ranks: [
    { after: '6/10', title: '1: great blessing', place: 'Naganaki Shrine', scene: [
      { music: 'day' },
      { n: "Naganaki Shrine had been a little sad for as long as Solar had known it, which wasn't long, but it was long enough. Leaves in the water basin. Moss creeping up the stone foxes. A fortune box nobody shook. The rainy season had come in that week like a guest who meant to stay, and the hundred-odd steps up the hill were dark with it, and she took them two at a time out of habit, because her legs liked to go fast whether or not she had anywhere to be." },
      { n: "At the top, the shrine had been swept." },
      { n: "Every path. Every step. The leaves were out of the basin and the gravel had been raked into long clean curves, and the foxes on either side of the walk had been scrubbed until their stone noses shone. The rope on the bell had been retied. Somebody had set a single wet camellia on the offering box like a full stop." },
      { n: "Two nights ago, walking home in the green with Fuuka unconscious on Akihiko's back and everyone too tired to talk, Solar had looked up at these steps and seen a fox made of light sitting at the top of them, upright, tail around its feet, the way a dog sits outside a shop to wait for somebody. She hadn't said anything. Fuuka had said it for her, a little later, in a voice like sleep: there were people out there. Lots. They weren't coffins." },
      { n: "There was a girl sitting cross-legged on the offering box. She had a high ponytail, black going to purple at the ends, and a white and purple jacket cut like something a shrine maiden would wear if the shrine maiden also expected to get into a fight, and she was eating a melon pan out of a convenience store bag with the total absorption of someone who hadn't eaten in a while and wasn't going to admit it." },
      { n: "Something went down the back of Solar's neck, light and quick. Not fear. It was the feeling of walking into a room and knowing where the light switch is before you've reached for it. She knew the set of those shoulders. She knew the way the girl was going to swing her legs down off the box, a half second before she did it, and how she would land, and that she would land grinning." },
      { s: 'kiriko', f: 'happy', t: "Oh! A visitor! Finally. I was starting to think this place was haunted. Well. More haunted." },
      { n: "The name was in Solar's mouth before she'd decided to say anything. It came up whole and easy, the way your own phone number does, and she heard herself say it out loud to a girl she had never seen in her life." },
      { s: 'solar', f: 'surprised', t: "...Kiriko." },
      { s: 'kiriko', f: 'surprised', t: "Yeah? Wait. Yeah, that's me. Have we met?" },
      { choose: [
        { t: "No. I don't think so.", notes: 2, then: [
          { s: 'kiriko', f: 'neutral', t: "Huh." },
          { s: 'kiriko', f: 'happy', t: "Fox spirits gossip. She probably told on me. She tells everybody everything." }
        ] },
        { t: "I don't know how I know that.", notes: 3, then: [
          { s: 'kiriko', f: 'neutral', t: "Hm. That's okay. Lots of people don't know how they know stuff. My grandma knows when it's going to rain by her knees." },
          { s: 'kiriko', f: 'happy', t: "Maybe your knees told you. Or the fox. The fox is a terrible gossip." },
          { n: "She said it so easily, so entirely without suspicion, that the cold thing in Solar's neck had nowhere to go, and went quietly back where it had come from." }
        ] },
        { t: "It's written on your bag.", notes: 1, then: [
          { n: "It wasn't. Kiriko looked at the plain convenience store bag in her hand, and then at Solar, and then back at the bag, and burst out laughing." },
          { s: 'kiriko', f: 'happy', t: "Okay, liar. I like you. Nobody lies that badly unless they're nice." }
        ] }
      ] },
      { s: 'kiriko', f: 'neutral', t: "I'm Kiriko. Which you knew. I'm from a town called Kanezaka, which, according to every single map in this city, doesn't exist. Fun!" },
      { n: "She said it brightly, like a punchline. Her hand, Solar noticed, tightened on the bag while she said it, the plastic crackling, and loosened again." },
      { s: 'kiriko', f: 'neutral', t: "The night I got here everything went green, and all the people turned into these tall black boxes, which, by the way, nobody warns you about. I was standing at the bottom of a hill I'd never seen with a kunai in each hand like an idiot." },
      { s: 'kiriko', f: 'neutral', t: "And there was a girl at the bottom of the steps. Little thing. In a porter's coat way too big for her, collar up to here. She pointed up the hill and said, \"There's a shrine. Nobody's looking after it.\" And then she said sorry. Which was weird." },
      { s: 'kiriko', f: 'happy', t: "Then I turned around to ask what she was sorry for and she was gone. So I came up. And she was right. Nobody was looking after it. So I swept it." },
      { register: 'kiriko' },
      { ifMet: ['wren'], then: [
        { n: "Solar thought of the last bench at Iwatodai Station, and a coat with its collar turned up against no wind, and didn't say anything. Half the porters in this city probably wore their coats too big. It was the kind of job you grew into." }
      ], else: [
        { n: "Solar didn't know any porters. She found herself, for no reason at all, looking down the long wet steps to the street, as though someone might still be standing at the bottom of them." }
      ] },
      { n: "The rain had stopped, more or less. A low sun came through the cedars sideways and laid itself across the gravel, across the offering box, across Kiriko's hands where she'd balled up the empty bag, and in that light the ends of Kiriko's fingers were very faintly wrong. Too bright at the edges. Like a photograph somebody had left in a window too long, so that the sky had started to come through it." },
      { choose: [
        { t: "Your hands.", notes: 2, then: [
          { s: 'kiriko', f: 'flustered', t: "Oh. Yeah. That. It does that in the sun. It started yesterday." },
          { n: "She tucked her hands into her sleeves, both of them, quick and practiced, like a girl hiding a bad manicure." },
          { s: 'kiriko', f: 'happy', t: "It's fine. It's probably the weird green. I'll get a tan or something." }
        ] },
        { t: "(Don't say anything. Move so you're blocking the sun.)", notes: 3, flag: 'kiriko-shade', then: [
          { n: "Solar stepped sideways, so her shadow fell across the offering box, and in the shade Kiriko's fingers were just fingers again, chipped purple polish and a callus where a kunai would sit. Kiriko looked at the shadow, and then up at her, and didn't say anything either. Her mouth did something small and pleased at one corner." }
        ] },
        { t: "Are you okay up here? Alone?", notes: 1, then: [
          { s: 'kiriko', f: 'serious', t: "I'm not alone. I've got the boss." }
        ] }
      ] },
      { n: "As if he'd been called, a white dog came trotting around the side of the shrine hall, red collar, a careful, dignified way of walking, and sat down at Kiriko's feet like they'd agreed on this some time ago." },
      { s: 'koromaru', t: "Arf." },
      { s: 'kiriko', f: 'happy', t: "That's the boss. He was here before me. He lets me sleep in the office if I share my rice balls. Fair rent." },
      { s: 'kiriko', f: 'happy', t: "Okay. First visitor gets a fortune. That's the rule. I just made it up, but it's the rule." },
      { n: "She produced a small wooden box from her sleeve and shook it, hard, with her eyes shut and her tongue between her teeth, until one thin stick slid out of the hole in the top. She read the number. She hopped down and went to the wall of tiny drawers by the office and pulled out a slip of paper and unfolded it and read it, and her eyebrows went all the way up." },
      { s: 'kiriko', f: 'surprised', t: "Kichi. Blessing. \"An old friend arrives as a stranger. Be kind to them anyway.\"" },
      { s: 'kiriko', f: 'happy', t: "Ha! The gods are on one today. Here. It's yours. Fold it twice. You fold it twice or the luck falls out." },
      { n: "Solar folded it twice. She walked down the steps with it in her blazer pocket and her hand over it, and somewhere around the bottom she realized she had been smiling for the whole hundred and twelve, which was a strange number to know, since she hadn't been counting. Except that she always was." }
    ] },

    { after: '6/20', title: '2: the kitsune', place: 'Naganaki Shrine', scene: [
      { music: 'tender' },
      { n: "It had rained all morning and it was going to rain all afternoon, the heavy straight June rain that came down like it had been poured, and Kiriko had dragged a blue tarp over the little porch of the shrine office and was sitting under it cross-legged with the white dog asleep across her shins and a flip phone held at arm's length in front of her face, as if it smelled." },
      { s: 'kiriko', f: 'serious', t: "Sol-chan. Sit. Look at this. Look what the scary redhead lady gave me." },
      { n: "Sol-chan. Nobody had called her that. It was cheeky and warm and about three steps too familiar, and Solar found, ducking under the tarp with the rain loud on the plastic over her head, that she didn't mind it at all." },
      { s: 'kiriko', f: 'serious', t: "It FOLDS. Why does it fold? Who is it hiding from? And there's no screen on the front, there's a tiny screen on the front, the size of a stamp, and the buttons have three letters each. To type a K I have to push the five twice. Twice! Like an animal!" },
      { choose: [
        { t: "Mitsuru gave everyone one. So she can find you.", notes: 3, then: [
          { s: 'kiriko', f: 'neutral', t: "...Oh. That's kind of nice, actually. In a scary way." },
          { s: 'kiriko', f: 'happy', t: "She did have a clipboard voice. But a nice clipboard voice." }
        ] },
        { t: "(Show her how to text. Slowly.)", notes: 2, then: [
          { n: "Solar took it and showed her, slowly, the five twice, the pause, the six three times, and Kiriko watched her thumb with the outrage of someone being taught a magic trick that turned out to be a lie, and then typed, with enormous effort, a message to Solar that just said hi, and sent it, and they both listened to it arrive in Solar's pocket with a little chime." },
          { s: 'kiriko', f: 'happy', t: "Okay. That was cool. I take back like half of it." }
        ] },
        { t: "What do phones look like where you're from?", notes: 1, then: [
          { s: 'kiriko', f: 'neutral', t: "Like a phone! Flat. Glass. You touch it. It doesn't do origami." },
          { n: "She said it like it was obvious, and to her it was, and something under Solar's collarbone went very still for a second and then went on." }
        ] }
      ] },
      { s: 'kiriko', f: 'neutral', t: "She told me something else, too. The redhead. She said I'm faint." },
      { n: "She said it into the rain, not looking at Solar. The dog's ear twitched." },
      { s: 'kiriko', f: 'neutral', t: "She said people like me, people who fell through, we get faint if we don't have anybody here. Like a radio going out of range. And then something about full moons that I didn't like the sound of, so I stopped listening." },
      { s: 'kiriko', f: 'happy', t: "So I figured I'd make you my anybody. No pressure. You can say no. Nobody says no to me, but you can." },
      { n: "Solar had sat in a room upstairs three days ago with a woman in blue who held a book of blank pages, and heard the word pull, and heard it said the way you'd describe water going down a drain, and heard that it caught people who were running from something. She'd thought about it on the walk home and on the monorail and in the bath. She hadn't thought about it like this, with the rain coming down and a girl beside her asking, lightly, to be held on to." },
      { choose: [
        { t: "Yes. Obviously.", notes: 3, then: [
          { s: 'kiriko', f: 'surprised', t: "...Wow. Okay. That was fast." },
          { s: 'kiriko', f: 'happy', t: "I like that. Fast is good. Fast is my whole thing." }
        ] },
        { t: "I'm not sure I'm a good anchor. I don't know where I'm from either.", notes: 2, then: [
          { s: 'kiriko', f: 'neutral', t: "Huh. Then we're even. Two lost girls under a tarp." },
          { s: 'kiriko', f: 'happy', t: "That's better, actually. You can't be my anchor and look down on me. Rules." }
        ] },
        { t: "What are you running from?", notes: 1, then: [
          { n: "Kiriko's thumb stopped on the flip phone's hinge. Open, shut. Open." },
          { s: 'kiriko', f: 'neutral', t: "Wow. Okay. Second date question, Sol-chan." }
        ] }
      ] },
      { s: 'kiriko', f: 'neutral', t: "Okay. I want to show you something. Promise you won't freak out?" },
      { s: 'solar', f: 'neutral', t: "I've seen a lot this year." },
      { s: 'kiriko', f: 'happy', t: "Yeah. You've got that look. The midnight look." },
      { n: "She held out her hand, palm up, into the edge of the rain, and whistled, low and soft, two notes." },
      { n: "Something answered. A shape stepped out of the rain at the edge of the porch, made of light and air and very little else, long and lean, with a tail like a brushstroke and ears that went up into points of pale green fire. The rain went through it and didn't. Each drop that touched it lit up for an instant on the way down, so that the fox seemed to be standing in a slow fall of sparks." },
      { n: "The dog sat up. The fox looked at him. The dog, after a long, tense, extremely dignified second, lay back down." },
      { s: 'solar', f: 'surprised', t: "I saw her. The first night. On the steps." },
      { s: 'kiriko', f: 'happy', t: "Yeah? She waited up there while I figured out where I was. She's been with my family forever. She protects people. That's her whole deal." },
      { s: 'kiriko', f: 'neutral', t: "She was the only thing that came with me. Everything else stayed in Kanezaka." },
      { n: "The fox came across the porch boards without a sound and put its nose to Solar's knee, and then to her hand, and then, as if it had settled something, pushed the whole of its head up under her palm, so that Solar was suddenly, absurdly, holding a handful of warm light." },
      { n: "Kiriko stopped breathing for a second. Solar heard her stop." },
      { s: 'kiriko', f: 'surprised', t: "She doesn't do that. She doesn't do that with anybody. She does that with ME." },
      { s: 'kiriko', f: 'happy', t: "Okay, well. Good taste. She's got good taste. I always said." },
      { n: "Solar didn't move her hand. The fox's light was warm and very slightly prickly, like the moment before a limb you've been sitting on starts to wake, and her palm knew the shape of that head the way it knew the shape of a mug it had held every morning for years, and she didn't know where her palm had learned it. She didn't ask. She left her hand where it was." },
      { s: 'kiriko', f: 'happy', t: "Fortune time. She'll want to hear it. She's nosy." },
      { s: 'kiriko', f: 'neutral', t: "Sho-kichi. Small blessing. \"What you think is lost is only waiting. Be patient with the rain.\"" },
      { n: "They sat under the tarp until the rain eased off, the fox curled against Solar's hip and the dog against Kiriko's, and when Solar finally stood up to go, Kiriko held up both hands into the gray light between the drops, and turned them over, front and back, and they were only hands. Solid to the fingertips. She looked at them for a long moment, and then at Solar, and grinned so wide her eyes shut." }
    ] },

    { after: '7/4', title: '3: swift step', place: 'Naganaki Shrine', time: 'Evening', scene: [
      { music: 'sun' },
      { n: "Kiriko had texted, at great personal cost, meet me at the shrine at sunset wear shoes u can run in, and it had taken her four minutes to type, and Solar had assumed she meant jogging." },
      { n: "She did not mean jogging." },
      { s: 'kiriko', f: 'happy', t: "Okay. Hold my hand. Don't let go. Don't look down. Actually, look down, it's the best part. Ready? You're not ready. Let's go." },
      { place: 'Iwatodai Strip · Rooftops', time: 'Evening', bg: 'rooftop-evening' },
      { n: "There was a flicker of green, and a lurch behind the navel like missing a stair in the dark, and then they were standing on a roof. A low one, an apartment block at the bottom of the hill, with laundry poles and a sagging deck chair and the whole wet orange evening opening out in front of them." },
      { n: "Then they were on the next one. And the next. Kiriko didn't run so much as arrive, a blink of light and she was three buildings over, and then a blink of light and she was back with a hand held out, and Solar took it, and the world folded and unfolded, and the wind came up from the street smelling of rain and frying oil and somebody's cigarette, and Solar's stomach rose up into her throat and stayed there, and she started, helplessly, to laugh." },
      { s: 'kiriko', f: 'happy', t: "Swift Step! It's easier with somebody! Usually I have to find a pigeon to aim at and they're not reliable!" },
      { choose: [
        { t: "I'm going to throw up.", notes: 1, then: [
          { s: 'kiriko', f: 'serious', t: "Don't! It ruins the vibe. And the roof." }
        ] },
        { t: "This is incredible.", notes: 2, then: [
          { s: 'kiriko', f: 'happy', t: "RIGHT? It's my favorite thing in any world!" }
        ] },
        { t: "(Laugh, and don't let go.)", notes: 3, then: [
          { n: "Solar didn't let go. Kiriko looked down at their hands, and then at her, and squeezed once, hard, like a promise, and pulled her off the edge of the roof into the green." }
        ] }
      ] },
      { n: "It happened on the eighth roof, a dentist's office with a broken satellite dish and a water tank, where Kiriko had stopped to catch her breath and gone ahead without her, a blink and gone, two roofs over, her ponytail a dark flag against the sky." },
      { n: "Solar didn't decide anything. Her body went before she did. She crossed the roof at a jog to the far corner by the tank, where the parapet was low and the sightline was clean, and stopped, and turned, and stood there with her hand already half raised, and a breath later the green flickered and Kiriko came out of it exactly beside her, close enough to bump shoulders, exactly where she would need to be if she were coming back in a hurry with something behind her." },
      { n: "There was nothing behind her. There was a pigeon. They both looked at the pigeon." },
      { s: 'kiriko', f: 'surprised', t: "...Okay. That was perfect. How did you know I'd want to come back to the corner?" },
      { n: "Solar didn't know. That was the problem. She knew the way you know your own stairs in the dark, and the knowing sat in the soles of her feet and the backs of her knees and nowhere near her head, and when she went looking for where it had come from there was nothing there but a sort of humming blank, warm, like a screen left on in an empty room." },
      { choose: [
        { t: "Lucky guess.", notes: 1, then: [
          { s: 'kiriko', f: 'neutral', t: "Hm. Lucky guesses don't usually run." }
        ] },
        { t: "I don't know. I just knew where you'd land.", notes: 3, then: [
          { s: 'kiriko', f: 'happy', t: "Natural instincts! I knew it. You'd be a great partner, Sol-chan. Back home you'd be fighting people off with a stick." },
          { n: "It didn't seem to bother her even a little. She said it the way you'd compliment somebody's handwriting, and Solar let her, and stood very still on the dentist's roof while the hair on her arms went down by itself, slowly, one by one." }
        ] },
        { t: "Where else would you land? It's the only good corner.", notes: 2, then: [
          { s: 'kiriko', f: 'neutral', t: "Huh. True. It is the only good corner. You've got an eye." }
        ] }
      ] },
      { place: 'Iwatodai Strip · Rooftops', time: 'Evening', bg: 'rooftop-citynight', soft: true },
      { n: "They stopped on the roof of the tallest building in Iwatodai, a business hotel with a water tower and a little fenced patch of astroturf nobody used, and sat on the edge with their legs hanging over the city. Solar would not have done that in April. The monorail went past below them, lit up like a necklace being drawn slowly through a hand, and the bay went silver and then gray and then black, and the streetlights came on underneath them one street at a time." },
      { s: 'kiriko', f: 'neutral', t: "Back home I do this every night. Run the roofs. Check on everybody. See who needs somebody." },
      { s: 'kiriko', f: 'neutral', t: "Kanezaka's small. Everybody knows everybody. Everybody knows me. The girl from the shrine. The one with the fox. If the old lady at the bathhouse slips, they call me. If somebody's nephew gets mixed up with the wrong people, they call me." },
      { s: 'kiriko', f: 'sad', t: "My mom says the roofs are mine now. All of them. She said it like it was a present." },
      { n: "She swung her heels against the wall of the hotel. The building was eleven stories tall. She did it like a kid on a pier." },
      { s: 'kiriko', f: 'happy', t: "Here nobody knows me. It's weird. It's kind of nice. It's kind of awful." },
      { choose: [
        { t: "I know what that's like.", notes: 3, then: [
          { s: 'kiriko', f: 'neutral', t: "...Yeah. You've got that look too. The new-girl look. Like you're checking every room for the exits." },
          { n: "Solar was. She was doing it right now, without meaning to: the stairwell door behind them, the fire ladder on the north side, the drop to the next roof. Three. She stopped counting. It didn't help. She was always counting." }
        ] },
        { t: "Was it a present?", notes: 2, then: [
          { s: 'kiriko', f: 'serious', t: "...It's a whole town, Sol-chan. You don't give somebody a whole town. You just leave it with them." }
        ] },
        { t: "You can be nobody for a while. I won't tell.", notes: 2, then: [
          { s: 'kiriko', f: 'happy', t: "Ha. Nobody. I'd be terrible at nobody. I'd sweep something by accident." }
        ] }
      ] },
      { s: 'kiriko', f: 'happy', t: "Fortune! Rooftop edition. These are the best ones." },
      { s: 'kiriko', f: 'neutral', t: "Kichi. Blessing. \"Look up. The view is better than you expected.\"" },
      { n: "Solar looked up. The first stars were coming through the haze over the bay, two, three, a fourth. Beside her Kiriko was looking up too, with her mouth a little open, and her hands spread flat on the cold concrete of the ledge, and in the last of the light they were solid all the way to the ends." }
    ] },

    { after: '7/18', title: '4: a girl who plays as me', place: 'Naganaki Shrine', scene: [
      { music: 'tender' },
      { n: "July came in like someone had left an oven door open over the city, and the shrine steps were too hot to sit on until the sun went behind the cedars, so they sat on them anyway, on folded towels Kiriko had stolen from the bathhouse, eating ice pops from the convenience store at the bottom of the hill. Kiriko's was melon. Solar's was soda, the blue kind, and it was running down her wrist faster than she could eat it." },
      { n: "Kiriko had been quiet all afternoon. Not sad. Thinking. She kept looking at Solar sideways, the way you look at a word you've written too many times until it doesn't look like a word anymore." },
      { s: 'kiriko', f: 'neutral', t: "Sol-chan. Can I tell you something weird? Like, weirder than the fox. Weirder than the boxes." },
      { s: 'kiriko', f: 'neutral', t: "Sometimes I can feel people. Not here. Somewhere else. People who... pick me. I don't know how else to say it. Like somebody somewhere says my name, and means it, and I feel it in my hands." },
      { s: 'kiriko', f: 'flustered', t: "Isn't that the dumbest thing you ever heard? Don't answer that." },
      { choose: [
        { t: "It's not dumb.", notes: 3, then: [
          { s: 'kiriko', f: 'happy', t: "...Okay. Good. Because I wasn't going to stop." }
        ] },
        { t: "Pick you for what?", notes: 2, then: [
          { s: 'kiriko', f: 'neutral', t: "To go with them. To have their back. It's like, they've got all these people they could choose, and they choose me, and they trust me to keep everybody alive." }
        ] },
        { t: "That's a lot of people saying your name.", notes: 1, then: [
          { s: 'kiriko', f: 'happy', t: "I'm very popular. It's exhausting." }
        ] }
      ] },
      { s: 'kiriko', f: 'neutral', t: "There's one girl, though. She picks me every time. Like, every single time. And she's good. Scary good. Top-of-everything good." },
      { s: 'kiriko', f: 'neutral', t: "And she always plays with somebody in her ear. Never alone. I can't feel him like I feel her. Just that he's there, and she's always, always standing where he'll need her to be." },
      { s: 'kiriko', f: 'happy', t: "Sometimes when I can't sleep I think about her. Somebody out there trusts me that much. That's a nice thing to fall asleep on." },
      { n: "Solar's ice pop had stopped being cold. She looked down and the blue had run all the way to her elbow, and she didn't remember it getting there, and then she didn't remember anything at all, for a second, except a light." },
      { bg: 'flashback-alphaphi-house' },
      { dark: true },
      { music: 'mystery' },
      { n: "A screen at three in the morning. A room she'd never been in, dark except for the glow, and the glow was the only warm thing in it. Her hands on a keyboard that clicked under her fingers like rain on a sill. A headset pressing her hair flat. Somebody's breathing in the left ear, flat and unhurried and close, and a voice that said behind you in no voice at all, a bored drawl, and her hands moving before she'd heard the end of it." },
      { n: "On the screen, small and far away, a girl in white and purple with a fox at her heels, ponytail swinging, standing exactly where she'd need to be." },
      { n: "And in the corner of the screen, a little white box. A message, typed. The cursor blinking at the end of it. Her thumb over the key that would send it. She didn't remember the words. She remembered deleting them, one letter at a time, slowly, the way you'd back out of a room you weren't supposed to be in." },
      { fragment: 'runners-monitor' },
      { bg: null },
      { dark: false },
      { music: 'tender' },
      { n: "The cicadas came back first. Then the heat, and the hard stone under the towel, and the sticky blue on her arm. Kiriko had her hand around Solar's wrist. Not hard. Just holding it, the way you'd hold the wrist of someone asleep to check they were still there." },
      { s: 'kiriko', f: 'serious', t: "Sol-chan? You went somewhere." },
      { choose: [
        { t: "...I think I've played a game. Late at night. With a healer in it.", notes: 3, flag: 'kiriko-healer', then: [
          { s: 'kiriko', f: 'surprised', t: "Yeah? A healer? Ooh. Were you any good?" },
          { s: 'solar', f: 'neutral', t: "I think so." },
          { s: 'kiriko', f: 'happy', t: "Of course you were. You have the hands. I said so on the roof." },
          { n: "It was so simple to her. That was the thing Solar would remember later, more than the screen: that Kiriko heard it and wasn't frightened, and wasn't suspicious, and didn't put anything together, and only looked pleased for her, the way you're pleased for a friend who tells you she used to be good at the piano. It made the cold place under Solar's ribs feel stupid, and smaller, and still there." }
        ] },
        { t: "Nowhere. The heat.", notes: 1, then: [
          { s: 'kiriko', f: 'neutral', t: "Mm-hm. The heat. Sure. Drink some water, liar." },
          { n: "She went to the basin and came back with the wooden ladle full, and held it out, and didn't say anything else about it, and Solar drank, and her hands were shaking a little, and neither of them mentioned it." }
        ] },
        { t: "The boy in her ear. Do you know who he is?", notes: 2, then: [
          { s: 'kiriko', f: 'neutral', t: "No. I told you, I can't feel him. Just her." },
          { s: 'kiriko', f: 'happy', t: "Why? Your face just went all red. Sol-chan. Your face went RED." },
          { n: "It had. Solar had no idea why. She put the back of her wrist against her cheek and it was hot, and the ice pop was gone, and she didn't know who the boy was, and her face had gone red anyway, as if it knew something she didn't and had decided not to tell her." }
        ] }
      ] },
      { s: 'kiriko', f: 'happy', t: "Fortune time. And this one's for her too. The girl who picks me. She deserves one." },
      { s: 'kiriko', f: 'neutral', t: "Dai-kichi. Great blessing. \"Your hands are steadier than you think. Trust them.\"" },
      { n: "Solar folded it twice and put it in her pocket with the others, and on the walk down the hill she held her right hand open at her side, palm up, in the warm evening air, as if she were waiting for somebody to put something in it." }
    ] },

    { after: '8/1', title: '5: two supports', place: 'Tatsumi Memorial Hospital', scene: [
      { music: 'day' },
      { n: "An old woman at the shrine had told Kiriko about her husband. He'd stopped talking in May. Not sick. Not hurt. He sat in a chair by the window of the third-floor ward at Tatsumi Memorial and looked at the parking lot, and when she held his hand, he let her, and that was all. The doctors had a name for it that wasn't a name. Apathy. They said it like a weather report." },
      { n: "Kiriko had listened to the whole thing with a fortune slip crumpled in her fist. Then she'd texted Solar, with no misspellings at all, which meant she'd taken a long time over it: take me there. i want to try something." },
      { place: 'Tatsumi Memorial Hospital · 3F Ward', time: 'Daytime', bg: 'hospital-room' },
      { n: "The ward smelled of floor polish and boiled rice and something underneath both that hospitals always smelled of, and it was very quiet, the particular quiet of a room full of people who were all awake. Eight beds. Eight chairs by eight windows. A nurse doing her rounds with the patience of someone who had stopped expecting answers." },
      { n: "And at bed five, kneeling on the floor with a penlight, there was a woman in a white coat with a halo of blonde hair pinned up in a hurry, talking to the old man in the chair in low, warm, accented Japanese, as if he were answering her." },
      { ifRank: { mercy: 1 }, then: [
        { n: "Angela. Of course it was Angela. She didn't work here. Nobody had hired her. She'd simply put on a white coat and started doing rounds the week she arrived, and the nurses had decided, collectively and without discussion, that she was some kind of specialist from Kirijo, and nobody had ever had the nerve to ask." }
      ], else: [
        { n: "She didn't look like she worked here. Nobody else on the ward had a coat that white, or carried themselves like the floor was theirs, and the nurses gave her a very slight berth, the way you'd step around someone you weren't sure you were allowed to question." }
      ] },
      { s: 'kiriko', f: 'surprised', t: "...Wait. Wait wait wait. You're Dr. Ziegler." },
      { s: 'mercy', f: 'surprised', t: "And you are the girl with the fox. From Kanezaka. Genji has told me about you, I think. You were smaller in the story." },
      { s: 'kiriko', f: 'flustered', t: "Everybody's smaller in Genji-nii's stories. He thinks everybody's twelve." },
      { s: 'mercy', f: 'happy', t: "Yes. He does." },
      { n: "Kiriko came up to the bed with her ofuda already in her hand, a little stack of paper talismans tied with string, and the doctor's eyes went to them, and went still." },
      { s: 'mercy', f: 'serious', t: "...Are those paper?" },
      { s: 'kiriko', f: 'neutral', t: "They're ofuda. They heal. Mostly." },
      { s: 'mercy', f: 'serious', t: "\"Mostly\" is not a word I like in my ward." },
      { s: 'kiriko', f: 'serious', t: "It's not your ward. You don't work here either. I can tell. You're standing like a person who doesn't work here." },
      { choose: [
        { t: "Let her try. Please.", notes: 3, then: [
          { n: "The doctor looked at Solar, really looked, quick and clinical, the way she'd looked at the old man's pupils. Whatever she found, she stood up and stepped back from the chair." },
          { s: 'mercy', f: 'neutral', t: "Under supervision." },
          { s: 'kiriko', f: 'happy', t: "Supervision! Fun! I've never been supervised before!" },
          { s: 'mercy', f: 'neutral', t: "I can tell." }
        ] },
        { t: "You two are going to be best friends.", notes: 2, then: [
          { s: 'mercy', f: 'neutral', t: "We are not." },
          { s: 'kiriko', f: 'happy', t: "We absolutely are." }
        ] },
        { t: "(Stay out of it.)", notes: 1, then: [
          { n: "Solar stayed out of it. They glared at each other across the old man's knees for a while, two small storms with good posture, until the doctor sighed through her nose and stepped back, which was apparently how she said yes." }
        ] }
      ] },
      { n: "Kiriko knelt by the chair. She didn't press the ofuda to his forehead right away. She took the old man's hand first, the free one, the one his wife didn't usually hold, and told him her name, and told him his wife had said he used to grow tomatoes on the balcony, and asked if they'd been the big kind or the little kind, and waited, and he didn't answer, and she waited anyway." },
      { n: "Then she touched the paper to his forehead, and it glowed, soft and green, the color of the fox, and for one second the old man's eyes moved. Not much. They left the parking lot. They followed the light across the room, to the door, to the hallway where his wife usually came in at two." },
      { n: "Then they went back to the window." },
      { n: "It wasn't a cure. Nobody said it was. But the doctor had gone very still, and then she took a notebook out of her coat and wrote something down, fast, in a hand so neat it looked typed." },
      { s: 'mercy', f: 'serious', t: "He tracked it. He responded to stimulus for the first time since he was admitted. Do that again. Do that on every bed." },
      { s: 'kiriko', f: 'surprised', t: "Every bed? Do you know how many ofuda that is?" },
      { s: 'mercy', f: 'neutral', t: "I have very steady hands. I will help you make them." },
      { n: "They went down the ward together, the doctor and the shrine girl, bed by bed, arguing the whole time in low voices about dosage and technique and whether a paper charm counted as a medical intervention, and Solar sat on the windowsill at the end of the room and watched them, and found she had to look at the floor for a while." },
      { n: "Two people who could have each done it alone, taking turns. One kneeling, one writing. Neither one in the way of the other. Nobody had to be the one." },
      { n: "On the way out Kiriko was quiet, which she never was, all the way down in the lift and out through the sliding doors into the wall of August heat." },
      { s: 'kiriko', f: 'sad', t: "My ofuda are for scraped knees. Broken arms. Somebody's uncle who fell off a bike. Those people weren't hurt, Sol-chan. They were just... gone. Like somebody switched the light off and left them sitting in the room." },
      { s: 'kiriko', f: 'sad', t: "What if that's what I'm like at home? When it's just me? What if I'm only good for scraped knees?" },
      { choose: [
        { t: "His eyes moved. You did that.", notes: 3, then: [
          { s: 'kiriko', f: 'neutral', t: "For a second." },
          { s: 'solar', f: 'neutral', t: "For a second, he looked for his wife." },
          { n: "Kiriko stopped walking. She stood in the hospital parking lot in the heat with her mouth open a little, and then she shut it, and nodded, once, hard, like somebody accepting an order." }
        ] },
        { t: "You weren't alone in there. That's the point.", notes: 2, then: [
          { s: 'kiriko', f: 'neutral', t: "...Yeah. She was really good. She's annoying, but she's really good." },
          { s: 'kiriko', f: 'happy', t: "Don't tell her I said that." }
        ] },
        { t: "Nobody's good for everything.", notes: 1, then: [
          { s: 'kiriko', f: 'serious', t: "I know that. I just want to be good for the thing in front of me." }
        ] }
      ] },
      { s: 'kiriko', f: 'happy', t: "Fortune. You didn't think I'd forget, did you? I have it in my sleeve. I always have it in my sleeve." },
      { s: 'kiriko', f: 'neutral', t: "Chu-kichi. Middle blessing. \"Two lights in one room are not a competition.\"" },
      { s: 'kiriko', f: 'flustered', t: "...I'm going back up there to put this one on her wall. Don't wait for me. Actually, wait for me." }
    ] },

    { after: '8/15', title: '6: festival', place: 'Naganaki Shrine', time: 'Evening', scene: [
      { music: 'night' },
      { n: "The shrine had been strung with lanterns since the morning. Red and white paper globes on wires, all the way down the hundred and twelve steps and across the courtyard to the bell, and stalls had come up the hill on the backs of small trucks, and the whole place smelled of grilled squid and sweet soy and burnt sugar and the river of people who'd come up in their yukata and sandals to walk in slow loops under the lights." },
      { place: 'Naganaki Shrine · Summer Festival', time: 'Evening', bg: 'naganaki-shrine-festival', soft: true },
      { n: "Kiriko had borrowed a yukata from somewhere, dark purple with small white foxes printed on it, which Solar suspected she had either stolen or willed into existence, and done her hair up with a paper flower, and she was standing at the bottom of the torii with her arms folded, and she was not, for once, smiling." },
      { s: 'kiriko', f: 'serious', t: "Sol-chan. Before we have fun. I have to say a thing." },
      { s: 'kiriko', f: 'sad', t: "Fuuka told me about the bridge. The train. The lady with the viola case." },
      { n: "Solar had been on Moonlight Bridge nine nights ago. She had watched a black-green train come across it with no rails under it, slow, unhurried, its windows lit like lanterns, and slow at the far tower, and a woman in a blue coat step up into it with her case in her arms as though it were the most natural thing in the world. She had seen the woman twice before on the station steps. She hadn't stopped either time. Nobody had." },
      { s: 'kiriko', f: 'sad', t: "I counted. Everybody I've met here. Every night this week before I went to sleep. Angela. The goth boy at the arcade. The jester girl in your dorm. You. The boss." },
      { s: 'kiriko', f: 'neutral', t: "Nobody I counted was on it. I checked. I just wanted you to know I'm counting." },
      { choose: [
        { t: "So am I.", notes: 3, then: [
          { n: "Kiriko looked at her, and something in her face let go, and she nodded, once." },
          { s: 'kiriko', f: 'happy', t: "Okay. Then we're both counting. Then nobody gets missed. Two counters. That's a system." }
        ] },
        { t: "You're not faint anymore. It won't come for you.", notes: 2, then: [
          { s: 'kiriko', f: 'neutral', t: "I know. I'm not scared for me." },
          { s: 'kiriko', f: 'sad', t: "I'm scared for the ones nobody's counting." }
        ] },
        { t: "Let's not talk about it tonight.", notes: 1, then: [
          { s: 'kiriko', f: 'neutral', t: "...Okay. Tonight. Just tonight." }
        ] }
      ] },
      { s: 'kiriko', f: 'happy', t: "Okay! Fun now. Mandatory fun. Taiyaki first. They have taiyaki! It won't be as good as Grandma's but they HAVE it!" },
      { n: "She bought three and ate the first standing in the line for the second, the custard so hot it made her eyes water, and when Solar said, without thinking, three, that's the rule, Kiriko turned around so fast her paper flower nearly came off." },
      { s: 'kiriko', f: 'surprised', t: "...How do you know that's the rule?" },
      { s: 'solar', f: 'neutral', t: "You told me. On the roof." },
      { n: "She hadn't. Solar realized it as she said it. Kiriko had never said anything about three. Kiriko looked at her for a long, strange second with custard on her lip." },
      { s: 'kiriko', f: 'happy', t: "Huh. I must've. I say it a lot. Grandma's rule. Three, or the fish gets lonely." },
      { n: "She bought six. She gave Solar three. Solar ate them, all of them, and didn't count anything else for the rest of the night, on purpose, which was harder than it sounded." },
      { n: "They were terrible at the goldfish game. Kiriko was terrible at it with great confidence and Solar was terrible at it quietly, and they tore through seven paper scoops between them and won nothing, and laughed so hard the old man running the stall gave them a fish anyway, out of pity, a small orange one in a bag of water tied with a red string." },
      { s: 'kiriko', f: 'happy', t: "His name's Dai-kichi. Great Blessing. Obviously. He lives in the shrine office now. The boss is going to have so many feelings." },
      { n: "Half the dorm was there. Junpei had won a bear the size of a child and was trying to give it to Yukari, who was pretending not to want it, and Akihiko had eaten a frankly worrying number of grilled corn, and Fuuka was standing very close to Mitsuru in a borrowed yukata looking as if she'd been brought to a party by her own mother. Koromaru wore a festival headband. Someone had given it to him. He wore it with dignity." },
      { n: "At nine the fireworks went up over the bay, and the whole hill went quiet at once, the way crowds do. Kiriko pulled Solar by the wrist up the last of the steps to the top, where the courtyard looked out over the trees and the roofs and the black water, and they sat on the stone wall with Dai-kichi's bag between them, and the sky came open in gold and red and a pale crackling green that made everybody on the hill go ooh at once." },
      { s: 'kiriko', f: 'neutral', t: "In Kanezaka there's a festival too. Lanterns down the main street all the way to the river. My mom does the bell. Every year. She does the first ring, and everybody goes quiet, like this." },
      { s: 'kiriko', f: 'sad', t: "This year she said I'm doing it. She said it's my turn. For the bell. For the shrine. For all of it. She said she'd stand at the back, and after this year she wouldn't stand anywhere." },
      { s: 'kiriko', f: 'sad', t: "Everybody who taught me anything is stepping back, Sol-chan. Or they're gone. My mom. The old teachers. Genji-nii went off and became a robot monk, which, fine. And then it's just going to be me on the top step." },
      { s: 'kiriko', f: 'neutral', t: "The night I fell through, I was standing at the top of our steps with the bell rope in my hand. Practicing. And I thought, really clearly, I don't want to be the last one." },
      { s: 'kiriko', f: 'neutral', t: "And then everything went green." },
      { n: "A gold chrysanthemum opened over the water and hung there and came apart slowly into falling sparks, and the light went across Kiriko's face and away. Solar didn't say anything for a while. She had a feeling she knew this. Not Kanezaka. The shape of it. A date set by somebody else. A thing that was yours now whether you'd asked for it or not, handed over like a present." },
      { choose: [
        { t: "You wouldn't be the last one. You'd be the next one.", notes: 3, flag: 'kiriko-next-one', then: [
          { s: 'kiriko', f: 'surprised', t: "..." },
          { s: 'kiriko', f: 'neutral', t: "That's annoyingly good. That's a fortune. You just did a fortune." }
        ] },
        { t: "(Lean your head on her shoulder.)", notes: 3, then: [
          { n: "Kiriko went still for a second. Then she leaned back, so their heads were touching, and they watched the rest of the fireworks like that, and Solar could feel her breathing slow down by degrees, a long way down, like somebody letting out a breath they'd been holding since the spring." }
        ] },
        { t: "You don't have to decide tonight.", notes: 2, then: [
          { s: 'kiriko', f: 'neutral', t: "No. Not tonight." },
          { s: 'kiriko', f: 'happy', t: "Tonight I have a fish to raise." }
        ] }
      ] },
      { s: 'kiriko', f: 'happy', t: "This is the first night since I got here I didn't think about going home for a whole hour. That's your fault. I'm blaming you." },
      { s: 'kiriko', f: 'happy', t: "Festival fortune. These are special. These are the good paper." },
      { s: 'kiriko', f: 'neutral', t: "Dai-kichi. \"Tonight is one you will remember in every world.\"" },
      { n: "Solar folded it twice. She thought, yes. She thought, I already do, and didn't know why she'd thought it like that, already, as if she'd been somewhere before tonight where she had learned to keep things." }
    ] },

    { after: '9/12', title: '7: genji-nii', place: 'Naganaki Shrine', scene: [
      { music: 'tender' },
      { n: "September was hot and then not, all in one week, and the first cool afternoon came up the hill smelling of dust and dry cedar, and Kiriko was sitting on the steps beside a man made mostly of metal, eating a melon pan." },
      { n: "He was very still. That was the first thing Solar noticed, coming up the last flight with her bag on her shoulder: not the green lights in the seams of his armor, not the visor or the sword, but how still he was, the way a cat is still, the way something is still when it has spent a long time learning how to be. Kiriko was talking with her mouth full. He was listening to all of it." },
      { ifRank: { mercy: 4 }, then: [
        { n: "Solar knew him. She'd met him at the hospital, standing in a doorway while Angela pretended not to have noticed him there, and she'd watched him wait, which was a thing he was very good at, and which she had thought at the time was the bravest thing in the room." }
      ], else: [
        { n: "She had seen him once before, she thought, at a distance, on the Port Island side, standing on the roof of a parking garage looking down at the hospital as if someone he knew was inside it." }
      ] },
      { s: 'kiriko', f: 'happy', t: "Sol-chan! Come here. This is Genji-nii. He used to visit the shrine when I was little and make my mom nervous. Genji-nii, this is Solar. She's my anybody." },
      { s: 'genji', f: 'neutral', t: "Your anybody." },
      { s: 'kiriko', f: 'neutral', t: "It's a technical term. You wouldn't understand. You're a monk now." },
      { s: 'genji', f: 'happy', t: "I am not a monk. I lived with monks. There is a difference. The monks were very clear about it." },
      { n: "He bowed to Solar, properly, from the waist, which nobody had ever done to her, and she bowed back, a little too low, and he seemed to find that funny in the same quiet way he found everything funny." },
      { s: 'genji', f: 'neutral', t: "Thank you for keeping her company. She is not good at being alone." },
      { s: 'kiriko', f: 'serious', t: "I'm GREAT at being alone." },
      { s: 'genji', f: 'happy', t: "None of the brave ones are." },
      { n: "They talked about home for a while, the man in the armor and the girl in the purple jacket, in a shorthand Solar only half followed. The names of streets. A ramen shop with an old cat that slept on its sign. A bridge over the river. Somebody called Hashimoto, said the way you'd say a swear word. And then, once, a name Genji said and Kiriko didn't answer, and the conversation stepped around it like a puddle." },
      { s: 'genji', f: 'neutral', t: "She was always running across the roofs. Every night. Her mother asked me to watch her once, and I could not keep up. A small girl with a fox. Ten years old." },
      { s: 'genji', f: 'neutral', t: "I asked her why. She said she was checking that everyone was home. Every house. Every light." },
      { s: 'kiriko', f: 'flustered', t: "I was a weird kid." },
      { s: 'genji', f: 'happy', t: "You were a good kid. You are still both." },
      { n: "Then he looked at Kiriko for a long moment through the visor, and when he spoke again his voice had changed. Not louder. Further down." },
      { s: 'genji', f: 'serious', t: "You ran, Kiriko. You can say it to me. I am the expert." },
      { n: "Kiriko's hands stopped on the melon pan wrapper. Solar watched her decide whether to make a joke. She watched her not." },
      { s: 'kiriko', f: 'sad', t: "...I was on the top step. With the rope in my hand. And I thought, if I ring it, it's mine. Forever. And everybody who could help me is going to stand at the back and then go home. And I didn't want to be the last one." },
      { s: 'kiriko', f: 'sad', t: "So I didn't ring it. And then I was here. And I swept somebody else's shrine for three months instead, because it was easier than mine." },
      { s: 'genji', f: 'sad', t: "I ran from my family's house with half a body. I know something about easier." },
      { s: 'genji', f: 'serious', t: "The thing I learned, very slowly, from a very patient man, is that the shrine does not need your mother. It does not need me. It needs someone who stays. That is all a protector is. Someone who is still there in the morning." },
      { choose: [
        { t: "She's been here every morning since June.", notes: 3, then: [
          { s: 'genji', f: 'happy', t: "Yes. I noticed. The gravel is very well raked." },
          { s: 'kiriko', f: 'flustered', t: "Both of you stop. Both of you. Right now." },
          { n: "But she was smiling, with her face turned away toward the cedars, and her ears had gone pink at the tips, and she didn't tell them to stop again." }
        ] },
        { t: "Who taught you to stay?", notes: 2, then: [
          { s: 'genji', f: 'sad', t: "My master. And a doctor who would not let me die, though I asked her many times." },
          { n: "He said it lightly. The lights in his armor went a shade warmer, and he looked down the hill toward the Port Island side, toward the white bulk of the hospital, and Solar thought she understood something, and kept it to herself." }
        ] },
        { t: "(Stay quiet and let them have it.)", notes: 2, then: [
          { n: "Solar stayed quiet. She sat a step below them with her arms around her knees and let the two of them have it, the not-saying, the town between them that neither of them could get to tonight. It seemed like the kind of thing you didn't interrupt." }
        ] }
      ] },
      { n: "When Genji left, he went down the hill in three silent bounds, like something poured, and was gone in the trees. Kiriko watched the place where he'd been for a long time." },
      { s: 'kiriko', f: 'neutral', t: "He never used to say stuff like that. He used to be such a jerk. Like, a fun jerk. Now he's all wise." },
      { choose: [
        { t: "He's right, though.", notes: 3, then: [
          { s: 'kiriko', f: 'serious', t: "I KNOW he's right. That's what's so annoying. He used to be wrong all the time. It was great." },
          { s: 'kiriko', f: 'neutral', t: "...Still there in the morning. Okay. I can do mornings. I'm up at five anyway. The crows make sure." }
        ] },
        { t: "You never told me you didn't ring it.", notes: 2, then: [
          { s: 'kiriko', f: 'sad', t: "You never asked. You're good like that. You don't ask stuff." },
          { s: 'kiriko', f: 'neutral', t: "I think I wanted you to, a little. Don't do it again, though." }
        ] },
        { t: "Robot monk is a good look on him.", notes: 1, then: [
          { s: 'kiriko', f: 'happy', t: "Don't tell him that. He'll get a bigger sword." }
        ] }
      ] },
      { s: 'kiriko', f: 'happy', t: "Okay. Fortune. I'm drawing one for me this time. Don't look. Okay, look." },
      { s: 'kiriko', f: 'neutral', t: "Kichi. \"Home is not a place. It is the people who say your name.\"" },
      { n: "She read it twice. Then she looked at Solar, and her eyes were wet, and she said Sol-chan, very quietly, for no reason at all, just to hear it out loud, and Solar said Kiriko back, and that was the whole conversation, and it was enough." }
    ] },

    { after: '10/10', title: '8: support and sniper', place: 'Moonlight Bridge', time: 'Evening', scene: [
      { music: 'night' },
      { n: "October, and the evenings had started coming earlier, gray and then blue and then dark before anyone was ready for them. Kiriko had heard about the woman on Moonlight Bridge from three different people at the shrine, a schoolboy and a taxi driver and an old lady with a cane. A tall woman. Very tall. Standing on the cables at night where nobody could stand. One of them said she was blue. One of them said she was a ghost. The old lady had just said she was rude." },
      { s: 'kiriko', f: 'serious', t: "I know who that is. I don't WANT to know who that is. But I do." },
      { ifRank: { widowmaker: 1 }, then: [
        { n: "Solar knew who it was too. She didn't tell Kiriko that. She'd stood under the cables a few nights ago with her neck craned back and a voice coming down out of the dark at her, cold and amused, and she wanted, a little, to see what Kiriko's face would do." }
      ] },
      { n: "They went at dusk, when the bridge lights came on in a long string out over the water and the traffic hissed past on the wet road. The woman was there. She was standing on the top rail of the bridge as if it were a sidewalk, one boot in front of the other, with a rifle as long as she was tall slung down her back and her hair in a high black tail that the wind kept trying to take and failing." },
      { n: "Her skin was blue. Not pale. Blue, the cold even blue of a vein under a wrist, all over, and under the bridge lights it looked like something she'd been painted with, and it wasn't." },
      { s: 'widowmaker', f: 'neutral', t: "The fox girl. And her little friend." },
      { s: 'kiriko', f: 'serious', t: "Widowmaker. Of course it's you. Of course the creepiest person from home fell through too." },
      { s: 'widowmaker', f: 'neutral', t: "\"Home.\" How sweet. I have never once thought of your town as home, little fox. It is a place with very good sightlines." },
      { ifRank: { widowmaker: 1 }, then: [
        { s: 'kiriko', f: 'surprised', t: "Wait. Sol-chan. Why isn't she looking at you like you're new? Why does she know you?" },
        { s: 'widowmaker', f: 'happy', t: "We have met. She looks up. Most people do not. I found it charming." },
        { s: 'kiriko', f: 'serious', t: "You do NOT find things charming. You find things in your scope." }
      ] },
      { n: "Widowmaker looked at Kiriko the way you'd look at a moth that had landed on your sleeve, mildly, with no plans for it. Then she looked at Solar. And for a moment that went on a beat longer than it should have, her face did nothing at all, and then something very small happened at one corner of her mouth." },
      { s: 'widowmaker', f: 'neutral', t: "Hm. You stand in an interesting place." },
      { n: "Solar looked down. She was standing just to the left of Kiriko and a half step behind, out of the line between the rail and the girl beside her, close enough to touch, and she hadn't chosen to stand there. Her feet had." },
      { s: 'widowmaker', f: 'neutral', t: "Out of my line. Inside her reach. That is where a support stands when she has played with a sniper. Many times." },
      { choose: [
        { t: "Kiriko, is she dangerous?", notes: 2, then: [
          { s: 'kiriko', f: 'serious', t: "Extremely. Don't make eye contact. Too late. You made eye contact." },
          { s: 'widowmaker', f: 'neutral', t: "I am not working tonight. You may relax. Both of you." }
        ] },
        { t: "I've never played with a sniper.", notes: 3, then: [
          { s: 'widowmaker', f: 'happy', t: "Mm. Then your feet are liars. Or you are." },
          { n: "She didn't say it like an accusation. She said it like an observation about the weather. Solar's ears went hot and she didn't know why, again, the way they had on the shrine steps in July, as if her whole body had been briefed on something and she hadn't been invited to the meeting." }
        ] },
        { t: "(Step in front of Kiriko.)", notes: 1, then: [
          { n: "Solar stepped in front of Kiriko, which was the wrong place, she knew immediately, a feeling like a wrong note, and Kiriko pulled her back by the sleeve to exactly where she'd been, and Widowmaker watched the whole thing with an expression that was almost fond." },
          { s: 'widowmaker', f: 'happy', t: "There. You see. She knows where you belong." }
        ] }
      ] },
      { n: "They stood on the bridge for a long time after that, the three of them, which Solar would not have predicted. Kiriko leaning on the rail with her chin on her arms, Widowmaker still up on the top of it like a bird on a wire, Solar between them, watching the lights of the city come on along the far shore." },
      { s: 'kiriko', f: 'neutral', t: "You know, in some other world, there are people who play as us. Together. A support and a sniper. Every match." },
      { s: 'widowmaker', f: 'neutral', t: "...Yes. I have felt him. A boy who hides. Very patient. Very good. He never misses when it matters." },
      { s: 'widowmaker', f: 'neutral', t: "And there is always someone just behind him whom he never once looks at, and always knows is there." },
      { n: "Solar's heart did something very specific and completely unexplainable, a hard double beat like someone knocking twice on a door. She didn't know the boy. She'd never know the boy. Her hands, on the cold bridge rail, curled a little, as if around something." },
      { choose: [
        { t: "(Say nothing. Watch the water.)", notes: 3, then: [
          { n: "She watched the water. It went by under the bridge black and fast and full of broken light, and Kiriko leaned her shoulder against Solar's without looking at her, and above them on the rail Widowmaker said nothing either, which from her, Solar suspected, was a kind of courtesy." }
        ] },
        { t: "How do you know he never looks back?", notes: 2, then: [
          { s: 'widowmaker', f: 'neutral', t: "Because I would not. You do not look at the one who is covering you. That is how she knows you trust her." },
          { s: 'kiriko', f: 'neutral', t: "...Okay, that's actually kind of beautiful, and I hate that it came out of you." }
        ] },
        { t: "Sounds like a lot of trust for a game.", notes: 1, then: [
          { s: 'widowmaker', f: 'neutral', t: "Everything is a game, chérie, until it is not." }
        ] }
      ] },
      { s: 'kiriko', f: 'happy', t: "Fortune. For all three of us. Don't argue." },
      { s: 'widowmaker', f: 'neutral', t: "I was not going to argue. I was going to leave." },
      { s: 'kiriko', f: 'neutral', t: "Sue-kichi. Future blessing. \"Opposites cover each other's blind spots.\"" },
      { n: "Kiriko held the slip up toward the top of the rail without looking, and after a long moment a long blue hand came down and took it, between two fingers, like a cigarette." },
      { s: 'widowmaker', f: 'neutral', t: "...That is the first fortune I have ever been given. It is acceptable." },
      { n: "She was gone a second later, up into the cables on a line Solar didn't see her fire, and Kiriko let out a breath she'd clearly been holding the whole time and slid down the rail until she was sitting on the pavement." },
      { s: 'kiriko', f: 'flustered', t: "Sol-chan. Sol-chan. She took the fortune. She TOOK it. She's going to keep it. I'm going to be sick." }
    ] },

    { after: '11/7', title: '9: the bell', place: 'Naganaki Shrine', time: 'The Dark Hour', scene: [
      { place: 'Naganaki Shrine', time: 'The Dark Hour', bg: 'naganaki-shrine-night' },
      { dark: true },
      { music: 'mystery' },
      { n: "Midnight, and the green. The moon a few nights past full, lopsided and swollen over the cedars, and the city below the hill turned to standing black shapes in its streets and doorways, and the air thick and still and faintly sweet, like something left out too long." },
      { n: "Solar had woken in the dark at 11:58 with her heart going and her phone lit up on the desk. One message. It had taken Kiriko eleven minutes to send, she would find out later, because her hands kept missing the buttons. come up. dont bring anyone. i want to do it myself but i want u to watch." },
      { n: "She'd brought the Evoker anyway. She hadn't told anyone. Akihiko would have come. That was the problem with Akihiko. He always would." },
      { n: "Kiriko was standing on the top step with a kunai in each hand and the fox at her side, every hair along its back lit up and standing, and below her on the long dark staircase something was coming up out of the trees. A Shadow, the kind that came out on the nights after the moon. Big. A pile of black masks and arms that went up the steps like water going the wrong way, and the stone foxes in their red bibs were standing in its path, small and stupid and brave." },
      { s: 'kiriko', f: 'serious', t: "Sol-chan. You came. Okay. Okay. Stay up here. Don't help. I mean it. Help if I'm dying. Only if I'm really dying." },
      { s: 'kiriko', f: 'serious', t: "I have to see if I can hold the steps. By myself. Before I have to do it for real." },
      { choose: [
        { t: "Okay. I'm right here.", notes: 3, then: [
          { n: "Kiriko nodded without looking back, the ponytail jerking once, and went down." }
        ] },
        { t: "I'm not going to watch you get hurt.", notes: 1, then: [
          { s: 'kiriko', f: 'serious', t: "Then don't watch. But don't come down." },
          { n: "She went down before Solar could say anything else." }
        ] },
        { t: "Left side. It always turns left.", notes: 2, then: [
          { s: 'kiriko', f: 'surprised', t: "How do you—okay. Left. Thanks." },
          { n: "She went down. It turned left. Kiriko was already there." }
        ] }
      ] },
      { n: "It was beautiful, which Solar hadn't expected. Kiriko didn't fight like Akihiko, who went in like a door being kicked, or like Mitsuru, who fought like a sentence being finished. She was everywhere at once and nowhere for long, a flicker of green on one step and then four steps down, a kunai thrown and a kunai thrown and the fox circling the thing's ankles in a ring of light, and every time a black arm came down on the place where she'd been she wasn't there anymore. She was laughing. Solar could hear her laughing, high and breathless." },
      { n: "Then it caught her. Not hard. A sweep of masks across the steps, and she went sideways into the stone fox on the left, the grumpy one, and the kunai went out of her hand and skittered away down into the dark, and Solar was moving before she'd decided anything at all." },
      { n: "She didn't run down the steps. She ran along the top of the wall beside them, which was narrow and wet and stupid, to the place where the stairs turned and the sightline was clean, because that was where you went, and she put the Evoker to her temple and pulled." },
      { summon: 'haenim' },
      { n: "Haenim came up out of her like the sun coming up over a roofline, pink and gold and veiled, the golden rope already moving in her hands, and the charms on her sash caught the green and swung, the jade and the star and the headphones on their cut cord, and the little gold bell." },
      { n: "The bell rang." },
      { n: "One clear note, small and very high, the kind of sound you feel in the fillings of your teeth. It went down the steps and out over the trees and the coffins in the streets below, and the Shadow flinched from it like a hand from a stove, and Kiriko, on the ground beside the stone fox with her hand pressed to her side, went completely still and turned her head." },
      { s: 'kiriko', f: 'surprised', t: "...That's my suzu." },
      { n: "Her own bell was on her belt. Solar could see it from here, a little brass shrine bell on a red cord, and she watched Kiriko's hand go to it, and close around it, and her own bell was silent in her fist, and the note was still going, coming off the Persona over Solar's head, the same note. Exactly the same." },
      { n: "There wasn't time. The thing was coming up again. And then there was a strange, long stretch in which Solar would later swear neither of them spoke, and they didn't need to. Kiriko came up off the ground in a flicker of green and Solar already knew where she'd come out, and she was there, and the rope was there, and the fox, and the light. Left. Two steps down. Behind it. Every time Kiriko went, Solar had already put Haenim where Kiriko would need cover when she came back, and every time she came back the cover was there, like two people who had played this a thousand times in a dark room somewhere with the light of a screen on their faces." },
      { n: "When the Shadow came apart into smoke and drifted off between the cedars, they were both on their knees on the gravel at the top of the steps, gasping, and Kiriko was laughing, and then she was crying, and then she was doing both, with her forehead pressed against the grumpy stone fox's red bib." },
      { s: 'kiriko', f: 'sad', t: "I held it. I held the steps. I got knocked down and I held them anyway. Nobody's mom was here. Nobody was standing at the back." },
      { s: 'kiriko', f: 'happy', t: "You were standing at the back. But I didn't need you. Until I did. And then you were exactly where I needed you. That's different. That's so different." },
      { s: 'kiriko', f: 'neutral', t: "...Sol-chan. Why does your Persona have my bell?" },
      { choose: [
        { t: "I don't know. I swear I don't.", notes: 3, then: [
          { s: 'kiriko', f: 'neutral', t: "No. I know you don't. I can tell." },
          { s: 'kiriko', f: 'happy', t: "It's kind of an honor, though. You know that? Out of everything, out of everybody in every world, she's wearing my bell." },
          { n: "She said it like that, like the strangest thing that had happened to her all year was a compliment, and Solar knelt on the gravel with her hands shaking and loved her, suddenly and completely and without any way to say it, for not being afraid of her." }
        ] },
        { t: "Maybe it was always yours. Maybe I just borrowed it.", notes: 2, flag: 'kiriko-borrowed', then: [
          { s: 'kiriko', f: 'neutral', t: "Hm. Borrowed. I like that better than stole." },
          { s: 'kiriko', f: 'happy', t: "Keep it, though. You ring it louder than me." }
        ] },
        { t: "Does it scare you?", notes: 1, then: [
          { s: 'kiriko', f: 'surprised', t: "Scare me? Sol-chan, a fox lives in my pocket. Nothing scares me. Except that phone." }
        ] }
      ] },
      { s: 'kiriko', f: 'neutral', t: "I need to say something and I need you not to make it weird." },
      { s: 'kiriko', f: 'serious', t: "You're my best friend. Not in this world. In any of them. I decided. It's final. The gods have been informed." },
      { choose: [
        { t: "You're mine too.", notes: 3, then: [
          { n: "Kiriko launched herself across the gravel and hugged her so hard they both went over sideways into the wet, and the fox, standing over them with its tail up, made a sound like a kettle that was very pleased with itself." }
        ] },
        { t: "That's very weird. I accept.", notes: 3, then: [
          { s: 'kiriko', f: 'happy', t: "HA! Okay. Okay, good. Weird best friends. Across worlds. That's a contract. I'm holding you to it." }
        ] }
      ] },
      { s: 'kiriko', f: 'neutral', t: "Fortune. I'm drawing it in the green. That's probably illegal." },
      { n: "She shook the box with her eyes shut. The stick came out. She read the number in the light of the fox, and unfolded the slip, and was quiet for a while." },
      { s: 'kiriko', f: 'neutral', t: "Dai-kichi. \"The one who stays is the one who is kept.\"" },
      { n: "She folded it twice and pressed it into Solar's hand and closed Solar's fingers over it, and held them closed, and down in the city the green began, slowly, all at once, to drain out of the streets." }
    ] },

    { after: '12/12', title: '10: the suzu', place: 'Naganaki Shrine', scene: [
      { place: 'Naganaki Shrine', time: 'Daytime', bg: 'outside-shrine-day' },
      { music: 'tender' },
      { n: "The first snow had come in the night and stayed, a thin white layer over everything, over the gravel and the offering box and the stone foxes in their red bibs, which looked, in the snow, unbearably festive, like two very serious old men who'd been made to wear party hats. The hundred and twelve steps were a white staircase with one set of footprints going up it, small and quick and slightly crooked." },
      { n: "Kiriko was standing in the middle of the courtyard with her face turned up to the sky, catching snowflakes on her tongue like a child, and she didn't stop when Solar came up the last step. She just held up one finger. Wait. Then she caught one, and swallowed, and turned around grinning with snow in her eyelashes." },
      { s: 'kiriko', f: 'happy', t: "It snows in Kanezaka too. This is the first thing since June that's felt exactly like home. Exactly. It even tastes the same. Snow doesn't care what world it's in." },
      { s: 'kiriko', f: 'neutral', t: "Elizabeth told me. The lady with the book. She came up here last week and talked to the foxes for twenty minutes before she talked to me. She said when the year ends, the doors open. Everybody who fell through gets to go back." },
      { n: "She said it calmly. She'd clearly been practicing saying it calmly. She'd probably said it to the foxes." },
      { s: 'kiriko', f: 'neutral', t: "She said some people won't want to. She said some people will want to stay where nothing of theirs has to end. She said it like a question." },
      { s: 'kiriko', f: 'happy', t: "I told her I'm going. I'm going home and I'm going to ring the bell. The first ring. The whole street's going to go quiet and it's going to be me." },
      { choose: [
        { t: "I don't want you to go.", notes: 2, then: [
          { s: 'kiriko', f: 'neutral', t: "I know. I don't want to go either. And I really, really want to go. Both. At the same time. It's the worst." }
        ] },
        { t: "Good. You're ready.", notes: 3, then: [
          { s: 'kiriko', f: 'surprised', t: "...Yeah? You think?" },
          { s: 'solar', f: 'neutral', t: "You held the steps." },
          { s: 'kiriko', f: 'happy', t: "I held the steps. With you at the back. I'm going to tell everybody that part. Everybody." }
        ] },
        { t: "What changed your mind?", notes: 2, then: [
          { s: 'kiriko', f: 'neutral', t: "Genji-nii said a protector is someone who's still there in the morning. And I was. Every morning. Here. For somebody else's foxes." },
          { s: 'kiriko', f: 'happy', t: "So I figure I can do it for mine." }
        ] }
      ] },
      { ifFlag: 'kiriko-next-one', then: [
        { s: 'kiriko', f: 'neutral', t: "I'm not going to be the last one, Sol-chan. You were right, at the festival. I'm going to be the next one. And then somebody's going to be next after me, and I'm going to stand at the back for them. And I'm going to be so annoying about it." }
      ], else: [
        { s: 'kiriko', f: 'neutral', t: "I'm not going to be the last one, Sol-chan. I worked it out on the steps, in the green, with you at the back. I'm going to be the next one. And then somebody's going to be next after me, and I'm going to stand at the back for them. And I'm going to be so annoying about it." }
      ] },
      { s: 'kiriko', f: 'flustered', t: "Okay. So. I made you something. Well. I didn't make it. I had it. And now it's yours. Don't argue." },
      { n: "She held it out on her flat palm. A suzu. A little brass shrine bell on a red cord, the kind that hung from the ropes outside every shrine in the world, the one that had been on her belt every day since June. It was worn smooth on one side where her thumb went." },
      { s: 'kiriko', f: 'neutral', t: "That's mine. My Protection Suzu. Or it was. If you ring it, I'll hear it. Doesn't matter which world. I'll hear it, and I'll know you're okay." },
      { s: 'kiriko', f: 'happy', t: "And you've already got one on your Persona, so now you've got two, and I've got none, so I guess I'll have to go home and get a new one blessed. Which is a whole ceremony. Which I'm doing myself. Because it's my shrine." },
      { ifFlag: 'kiriko-borrowed', then: [
        { s: 'kiriko', f: 'neutral', t: "You said you borrowed the first one. So this one's a loan too. Same terms. You give them both back to me in some other world, someday, when you're old, and I'll be annoyed you kept them so long." }
      ] },
      { choose: [
        { t: "(Ring it.)", notes: 3, then: [
          { n: "Solar held it up by the cord and rang it. A small, clear sound in the snow, very high, the kind you feel in your teeth. And somewhere very far off, under it, so faint she might have imagined it, another bell answered, the same note, exactly the same, as if the sound had gone out across the snow and come back to her from a long way off, from inside her own chest." },
          { n: "Kiriko closed her eyes and smiled like she'd felt it there too." },
          { s: 'kiriko', f: 'happy', t: "...Yep. Loud and clear. Two of them. Showoff." }
        ] },
        { t: "And if you ring yours?", notes: 2, then: [
          { s: 'kiriko', f: 'happy', t: "Then you'll hear it in your dreams. That's how it works. I just decided." },
          { s: 'kiriko', f: 'neutral', t: "...You'll hear it. I'll ring it really loud. I'll ring it every morning." }
        ] }
      ] },
      { ifFlag: 'kiriko-shade', then: [
        { s: 'kiriko', f: 'neutral', t: "The first day. You moved so you were blocking the sun, so I wouldn't see my hands. You didn't say anything. You just stood there being a shadow for me. I've been trying to pay that back all year. This is me paying it back." }
      ] },
      { s: 'kiriko', f: 'neutral', t: "Okay. Last fortune. The big one. The year-end one. You only get one of these a year, so don't waste it." },
      { n: "She shook the box for a long time, longer than she ever had, with her eyes shut and her lips moving, and when the stick came out she didn't look at the number. She just went to the wall of drawers and pulled one open without reading it and unfolded the slip and read it out with her eyes on Solar the whole time and not on the paper at all." },
      { s: 'kiriko', f: 'neutral', t: "Dai-kichi. Great blessing. \"Wherever you go, in whatever world, someone has picked you. They would pick you again.\"" },
      { n: "Solar didn't ask whether that was what the paper said. She didn't need to. She folded it twice, so the luck wouldn't fall out, and put it in her pocket with the other nine and the little brass bell, and the bell rang once against them, softly, every step of the hundred and twelve, all the way down." }
    ] }
  ],
  // After MAX: friendship scenes that rotate (engine support for afterMax is pending; see the report).
  afterMax: [
    { title: 'healer main', place: 'Paulownia Mall · Game Panic', scene: [
      { music: 'city' },
      { n: "Kiriko had found the arcade, which was a problem in the sense that she'd walked into Paulownia Mall the week before for crepes and come out four hours later with no crepes, a paper cup of tokens, and the high score on a crane machine full of tiny plastic foxes, which she maintained were relatives." },
      { n: "Today she'd found something else. At the back of Game Panic, past the racing cabinets, there was a machine Solar had never noticed, two seats side by side and a screen full of bright little characters running as a team, and Kiriko was standing in front of it with both hands flat on the plastic, like she'd recognized somebody across a crowded room." },
      { s: 'kiriko', f: 'serious', t: "Sol-chan. It's not the same game. It's not. But look. There's a healer." },
      { n: "There was. A small figure in white at the back of the team, throwing light at people who were about to die, getting nothing for it, doing it anyway." },
      { s: 'kiriko', f: 'happy', t: "Sit. Sit sit sit. You're the healer. I'm the loud one with the hammer. I've always wanted to be the loud one with the hammer." },
      { n: "Solar sat. She put her hands on the controls and they were cold, and then they weren't, and somewhere in the first thirty seconds her hands stopped asking her permission. She knew where to stand. Not the buttons, the buttons were just buttons, but where to stand, which teammate was about to overextend a whole second before he did it, so that the light was already on its way." },
      { s: 'kiriko', f: 'surprised', t: "...Okay. Okay okay okay." },
      { choose: [
        { t: "(Keep playing. Don't think about it.)", notes: 3, then: [
          { n: "She didn't think about it. That was the trick, she'd learned, on the roofs and on the steps in the green. If she thought about it, it went. So she kept her eyes on the screen and let her hands do whatever they apparently knew, and beside her Kiriko played the loud one with the hammer like she trusted the light to be there. It was always there." }
        ] },
        { t: "I've never played this. I swear.", notes: 2, then: [
          { s: 'kiriko', f: 'neutral', t: "I know. I believe you." },
          { s: 'kiriko', f: 'happy', t: "Your hands didn't get the memo, though." }
        ] }
      ] },
      { n: "They won. They won again. A small crowd collected behind them, middle-school boys with their bags still on, saying who is that, and Solar's ears went hot the way they did under any kind of light, and her hands kept going anyway." },
      { s: 'kiriko', f: 'neutral', t: "That's how she plays, you know. The girl who picks me. Always where she needs to be before anybody knows they need her." },
      { ifFlag: 'kiriko-healer', then: [
        { s: 'kiriko', f: 'happy', t: "You told me, on the steps in July. With blue ice pop all down your arm. A game, late at night, with a healer in it. I knew it. I knew those were the hands." }
      ], else: [
        { s: 'kiriko', f: 'neutral', t: "...You never said you'd played anything. In July, on the steps, you said it was the heat. I let you. I'm not letting you now. Those are the hands, Sol-chan." }
      ] },
      { s: 'kiriko', f: 'happy', t: "It was really nice to see it from the outside. That's all. Just once." },
      { s: 'kiriko', f: 'neutral', t: "Fortune. Arcade edition. Kichi. \"Your hands remember what you have not yet learned.\"" },
      { s: 'kiriko', f: 'flustered', t: "...Okay, the gods are being kind of weird today. That one goes in your pocket and we're getting crepes." }
    ] },
    { title: "three, that's the rule", place: 'Naganaki Shrine', scene: [
      { music: 'joy' },
      { n: "Kiriko had bought a taiyaki pan. It was cast iron and fish-shaped and heavy enough to stun a man, and she'd carried it up a hundred and twelve steps in a furoshiki, and the shrine office had one gas ring and one kettle and had been built for making tea and nothing else, and was about to learn." },
      { s: 'kiriko', f: 'serious', t: "Grandma's recipe. From memory. I've been writing it down all week so I don't lose it before I go home. Don't look at the notes. The notes are a crime scene." },
      { n: "The first one stuck. The second one burned. The third came out of the pan in two pieces, a head and a tail, with the custard showing through the crack like the fish had had a very bad day." },
      { s: 'kiriko', f: 'sad', t: "...It's not right. Grandma's come out whole. Every time. She doesn't even look." },
      { choose: [
        { t: "(Take the head. Hand her the tail.)", notes: 3, then: [
          { n: "Solar ate hers standing in the office doorway with the steam coming off it into the cold air, and it was too sweet and slightly burnt and the custard was the temperature of the sun, and she said, with her mouth full, that it was good, and meant it." },
          { s: 'kiriko', f: 'happy', t: "It's broken, Sol-chan." },
          { s: 'solar', f: 'neutral', t: "Still sweet." },
          { s: 'kiriko', f: 'surprised', t: "...That's a fortune. That is literally a fortune. I'm writing it down." }
        ] },
        { t: "More oil. Lower heat. Leave it alone.", notes: 2, then: [
          { s: 'kiriko', f: 'surprised', t: "...How do you know that?" },
          { n: "Solar didn't. It was the kind of thing you knew from standing next to somebody in a kitchen for a long time, handing them things. She didn't remember the kitchen. She remembered the handing." }
        ] }
      ] },
      { n: "They made eleven. Six came out whole. Kiriko ate three, because that was the rule, and gave one to each stone fox, the grumpy one first." },
      { s: 'kiriko', f: 'neutral', t: "When I get home I'm going to tell Grandma I made these in another world on a shrine stove out of my own head. And she's going to say they still weren't as good as hers. And she'll be right. And I'll eat three." },
      { s: 'kiriko', f: 'happy', t: "And I'll tell her somebody in another world ate the head. She'll make you an honorary granddaughter. She does that. She has like nine." },
      { s: 'kiriko', f: 'neutral', t: "Fortune. Taiyaki edition. Chu-kichi. \"What breaks in the pan is still sweet.\" Don't look at me. You said it first. The gods are copying you now." }
    ] },
    { title: 'dai-kichi', place: 'Naganaki Shrine', scene: [
      { place: 'Naganaki Shrine', time: 'Daytime', bg: 'outside-shrine-day' },
      { music: 'tender' },
      { n: "Dai-kichi had outgrown his bag in August and his jar in October and now lived in a glass bowl on the shrine office windowsill with a bit of pondweed and a very small ceramic torii that Kiriko had bought for him at a stall, and he swam round and round the torii all day like a pilgrim who'd lost count of his laps." },
      { n: "Kiriko was sitting in front of the bowl with her chin on her folded arms, eye to eye with him through the glass, and she didn't look round when Solar came in." },
      { s: 'kiriko', f: 'sad', t: "He can't come with me. I thought about it all week. He was born here. In a bucket, at a stall, under a lantern. You don't take somebody out of their own world and drop him somewhere strange. That's how you get a faint fish." },
      { s: 'kiriko', f: 'neutral', t: "So somebody has to keep him. And the boss would want to keep him, but the boss would also want to eat him, a little, so. It has to be somebody with thumbs." },
      { choose: [
        { t: "I'll keep him. In my room. I promise.", notes: 3, then: [
          { s: 'kiriko', f: 'happy', t: "...Yeah? Really? You'll do his water every week? And talk to him? He likes being talked to. He likes the news." },
          { s: 'solar', f: 'neutral', t: "I'll read him the news." },
          { n: "Kiriko put both hands flat on the windowsill on either side of the bowl and looked at the fish for a long time, and then at Solar, and her eyes were wet, which was ridiculous, over a goldfish, and wasn't ridiculous at all." }
        ] },
        { t: "Fuuka would love him. The dorm kitchen gets the morning sun.", notes: 2, then: [
          { s: 'kiriko', f: 'neutral', t: "Fuuka. Okay. Fuuka's good. Fuuka talks to the rice cooker. She'll talk to him." },
          { s: 'kiriko', f: 'happy', t: "But you visit him. Every day. That's a condition. Write it down." }
        ] }
      ] },
      { s: 'kiriko', f: 'neutral', t: "His name's Great Blessing, you know. I gave him that name because he was the only thing I won all summer. Out of pity. The old man felt sorry for us." },
      { s: 'kiriko', f: 'neutral', t: "...I've been thinking that's what this whole year was. Out of pity. Somebody felt sorry for a girl on a top step and gave her a fish and a friend and five months off. And now I have to give the fish back. And I'm so glad I got him." },
      { s: 'kiriko', f: 'happy', t: "Fortune. Goldfish edition. He picks. He swims to a number." },
      { n: "He swam to the left side of the bowl, which Kiriko declared was seven, and she unfolded seven, and read it to the fish first, out loud, before she read it to Solar." },
      { s: 'kiriko', f: 'neutral', t: "Kichi. \"What you leave in good hands is never left.\"" }
    ] },
    { title: 'the last sweep', place: 'Naganaki Shrine', scene: [
      { place: 'Naganaki Shrine', time: 'Daytime', bg: 'outside-shrine-day' },
      { music: 'day' },
      { n: "It was cold enough that the water basin had a skin of ice on it in the mornings, and Kiriko had given Solar the good broom. Not lent. Given. Handed it to her at the top of the steps with both hands and a small, formal bow, like a sword in a ceremony." },
      { s: 'kiriko', f: 'serious', t: "Okay. Lesson. When I go, somebody has to be still here in the morning. Genji-nii said. So you're learning the whole thing. Bibs, broom, basin, bell rope. In that order." },
      { n: "She taught her the whole thing. How to rake the gravel so the lines went with the path and not against it. How often the foxes' bibs needed washing, and which detergent, and that the grumpy one's had to be tied a little looser because he didn't like it tight. How to check the bell rope for fraying at the top where nobody looked. Which step was loose. Which crow was the leader and was owed a rice cracker on Sundays." },
      { choose: [
        { t: "(Write it all down in your handbook.)", notes: 3, then: [
          { n: "Solar wrote it all down in the back of her student handbook in her own small handwriting, bibs, broom, basin, bell rope, the loose step, the crow, and Kiriko leaned over her shoulder and read every line and corrected the detergent, and then took the pen and drew a tiny fox at the bottom, in the margin, and signed it, like a teacher." }
        ] },
        { t: "I'm not going to do it as well as you.", notes: 2, then: [
          { s: 'kiriko', f: 'neutral', t: "No. You're going to do it like you. The shrine doesn't care how. It just cares that somebody comes." },
          { s: 'kiriko', f: 'happy', t: "And you'll be bad at the gravel for a month and then you'll be great. That's how everybody does it. Even me. Especially me." }
        ] },
        { t: "(Sweep the steps in silence beside her.)", notes: 2, then: [
          { n: "They swept the hundred and twelve steps from the top down, side by side, two brooms, not talking, the leaves going over the edge of each step in neat little drifts, and at the bottom they turned around and looked back up at it, all the way to the torii, clean, and Kiriko let out a breath that went up white in the cold." }
        ] }
      ] },
      { ifEvent: 'a6-new-year', then: [
        { s: 'kiriko', f: 'neutral', t: "You still have the blank one? From New Year's? Keep it in the handbook with this. Not written yet. That's the whole shrine, really. Somebody comes in the morning and nothing's written yet." }
      ] },
      { ifFlag: 'kiriko-shade', then: [
        { n: "At the bottom of the steps Kiriko held her hands up to the low winter sun, both of them, fingers spread, the way she had on the very first day. They were solid to the ends. She looked at them, and then at Solar, standing beside her where she'd stood in June, in the same place, between her and the light, without thinking about it, and she laughed." },
        { s: 'kiriko', f: 'happy', t: "You're doing it again. Blocking the sun. I don't even need it anymore and you're still doing it." }
      ] },
      { s: 'kiriko', f: 'neutral', t: "Fortune. Last-sweep edition. Kichi. \"The one who stays is the one who is kept.\" ...Wait. I've drawn that before. That's yours. The gods are recycling." },
      { s: 'kiriko', f: 'happy', t: "...Or they mean it twice. Fine. Fine! It's yours twice. Fold it twice." }
    ] }
  ]
});
