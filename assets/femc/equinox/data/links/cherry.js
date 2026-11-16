/* Persona 3: Equinox · Cherry Kim · Chariot. Link data (femc-equinox-game.html). Format: link fields in
   assets/femc/game/core.js ("Links" header), scene lines in assets/femc/game/scene.js.
   Written: ranks 1–3 (from 4/13; her home is Wild-Duck Burger on Sunday, Monday, Wednesday, Friday and Saturday
   afternoons, so 4/14 at the earliest). Ranks 4–10 still to write. Shape: the stub fields from assets/femc/equinox/data/links.js.
   Solstice's Cherry link is shared memory ("who's really in first", the knockoff, the corner booth, "left wing lower", the
   pinned message, "i'd run"); nothing reads Solstice link standing. HOAX fences hold: the triangle stays open, Jihoon's
   drugs are named only as "clean" / "counting", nothing past the manuscript. Cursing sparing, in her voice.
   Flags this file sets: eqx-cherry-mirror (rank 1: Solar looks back at the restroom mirror). Nothing reads it yet.
   Rank 2 (after 4/23): reads eqx-cherry-mirror and ifAfter 4/29. Sets nothing.
   Rank 3 (after 6/12, Wild-Duck, the station bakery, the canal, the guesthouse kitchen door; branches ifBefore 7/15,
   eqx-hate-club, eqx-last-grain) records her ask: tally asks.cherry (+ cakes / choose). Sets nothing else. */
(window.FEMC_GAME_LINKS ||= []).push({
  id: 'cherry', name: 'Cherry', short: 'Cherry', arcana: 'Chariot', numeral: '', from: 'Hoax', kind: 'searcher',
  world: 'H', romance: null, starts: '4/8', lodging: 'guesthouse',
  home: { area: 'strip', spot: 'Wild-Duck Burger', slot: 'after', days: [0, 1, 3, 5, 6],
          hint: 'Afternoons at Wild-Duck Burger on the Strip, in the corner booth, eating other people’s fries.' },
  approach: "There's a girl in the corner booth at Wild-Duck Burger with her arms folded so tightly it looks structural, glaring at a menu like it owes her money, and when she sees you through the window she doesn't wave. She points at the seat across from her.",
  cast: {},
  ranks: [
    { after: '4/13', title: '1: off duty', place: 'Iwatodai Strip · Wild-Duck Burger', time: 'After School', music: 'city', scene: [
      { bg: 'wilduckburger' },
      { n: "Wild-Duck Burger at four in the afternoon smelled of fryer oil and wet mop and the sweet chemical vanilla of the soft-serve machine, which was broken, which had a handwritten sign on it that said *sorry!* with a drawing of a crying duck, which had been there, as far as Solar could tell, since last spring. The corner booth had a crack in the red vinyl that pinched the back of your thigh if you sat on the left. Cherry was sitting on the right." },
      { n: "She had her arms folded so tightly it looked load-bearing. There was a tray in front of her with one burger on it, untouched, and an empty carton of fries that had not been hers, because the boy who'd owned them, a second-year from the soccer club, was at the next table looking at the carton with an expression of quiet grief and not saying anything." },
      { n: "She saw Solar through the window. She didn't wave. She pointed at the seat across from her, once, with one finger, like a judge." },
      { s: 'cherry', f: 'neutral', t: "Sit. You're late. I ate his fries while I waited. That's on you." },
      { choose: [
        { t: "(Sit on the left. On the crack.)", notes: 3, then: [
          { n: "She sat on the left, on the crack, and it pinched the back of her thigh exactly as it always had, and she winced, and Cherry watched her wince with deep, quiet satisfaction." },
          { s: 'cherry', f: 'happy', t: "Still there. The crack. Good. I was worried they'd fixed it. Nothing gets fixed in this town, it's the best thing about it." }
        ] },
        { t: "(Buy the soccer kid new fries.)", notes: 2, then: [
          { n: "She went to the counter and bought a large fries and put it down on the soccer kid's table without a word, and he looked up at her like she'd come down from heaven on a cloud, and Cherry, behind her, said *traitor* very clearly, and stole three of them on the way back." }
        ] },
        { t: "Who's really in first?", notes: 3, then: [
          { s: 'cherry', f: 'serious', t: "...Don't do that the second you walk in. Sit down. You don't get to open with the good line." },
          { s: 'cherry', f: 'happy-2', t: "Me. Obviously. Sit." }
        ] }
      ] },
      { n: "Up close she looked tired in a way she'd have killed anyone for mentioning. Her eyeliner was perfect. It was always perfect. But she'd done it heavy, and there was a little gray under the outer corners that it didn't quite cover, the gray of somebody who'd been lying awake listening for something, and her nails, which were always done, had been bitten on two fingers of the left hand, down to the quick, and then painted over anyway, very neatly, to hide it." },
      { s: 'cherry', f: 'neutral', t: "So. Jihoon." },
      { s: 'cherry', f: 'serious', t: "He's clean. Since the red. Every day. He thinks I'm not counting. I'm counting. I'm counting so hard. I count in the shower." },
      { s: 'cherry', f: 'neutral', t: "He's going to Game Panic every afternoon to lose money to a crane. That's it. That's his whole vice now. A claw machine. I want to frame it." },
      { choose: [
        { t: "He told me. He's counting too.", notes: 3, then: [
          { s: 'cherry', f: 'surprised', t: "He *told* you? He told you about the counting?" },
          { s: 'cherry', f: 'sad', t: "...He didn't tell me. I found out by watching him do math on his fingers at breakfast like a kid. Of course he told you. Of course he did." },
          { n: "She didn't sound angry. She sounded like somebody who'd been carrying something heavy across a long room on her own and had just found out somebody else had the other end." }
        ] },
        { t: "That's good, Cherry.", notes: 2, then: [
          { s: 'cherry', f: 'neutral', t: "I know it's good. I'm not an idiot. I know exactly how good it is." },
          { s: 'cherry', f: 'serious', t: "That's what scares me. Good things don't happen to us for no reason. Not to him. Not to me." }
        ] },
        { t: "And you? How are you?", notes: 3, then: [
          { s: 'cherry', f: 'serious', t: "Don't." },
          { s: 'cherry', f: 'neutral', t: "...Fine. I'm fine. I'm a great big pile of fine. Ask me again in May." }
        ] }
      ] },
      { s: 'cherry', f: 'neutral', t: "And here's the thing." },
      { n: "She unfolded her arms, finally, and put her hands flat on the table on either side of the tray, and looked at them, at the two bitten nails painted over." },
      { s: 'cherry', f: 'neutral', t: "At home I've got a job. You know I've got a job. I promised someone. I'm not saying who. I said I'd keep an eye on things. Keep certain people out of certain rooms. Keep you away from certain stupid situations. And I'm good at it. I'm really, really good at it. I'm a fucking bouncer." },
      { s: 'cherry', f: 'serious', t: "Here, nobody's using. Nobody's running for anything. Nobody's posting about anybody. Nobody needs a bouncer. I woke up on the seventh and I went to do my job and there wasn't one." },
      { s: 'cherry', f: 'sad', t: "I'm off duty. For the first time since, like, middle school. I could just sit in a booth. I could eat a burger. I could be some girl." },
      { s: 'cherry', f: 'sad', t: "It's horrible. I love it. Don't tell anyone." },
      { ifAfter: '4/29', then: [
        { s: 'cherry', f: 'serious', t: "...Except the lobby. At the guesthouse. I don't go through the lobby anymore. I go out the kitchen door and round. Everybody does. Nobody's said we're doing it. We're all just doing it." }
      ] },
      { choose: [
        { t: "Then eat the burger, Cherry.", notes: 3, then: [
          { n: "Cherry looked at the burger as if it had been introduced to her for the first time. Then she picked it up and bit into it, enormously, defiantly, holding Solar's eyes the whole time like it was a dare, and chewed, and swallowed, and set it down." },
          { s: 'cherry', f: 'happy', t: "...It's so bad. It's so bad. It's the best thing I've ever eaten." }
        ] },
        { t: "You're allowed to be some girl.", notes: 2, then: [
          { s: 'cherry', f: 'serious', t: "Am I? Says who? You? You've never been *some girl* in your life. You walked into class on your first day and three people fell in love with you and one of them was the projector." }
        ] },
        { t: "I'm still going to get into stupid situations.", notes: 2, then: [
          { s: 'cherry', f: 'happy-2', t: "Oh, I know. I'm counting on it. You're my retirement plan. I'll be your bouncer on a freelance basis. My rates have gone up." }
        ] }
      ] },
      { n: "She went quiet then. She picked at the burger wrapper, folding it into smaller and smaller triangles, and the soft-serve machine clunked behind the counter like it was trying to get up and couldn't, and outside the window the Strip did its four o'clock: a delivery bike, a man with a sandwich board, a mother pulling a kid past the arcade by the wrist." },
      { s: 'cherry', f: 'serious', t: "Can I tell you something weird." },
      { s: 'cherry', f: 'serious', t: "The first night. When we woke up. I was under the arcade sign with Jihoon. In the red. Everything stopped. Everybody else a coffin. He was holding my sleeve, I was holding his, we were both like, what the fuck, what the fuck, and I looked at the window of Game Panic to see if my face was as bad as I thought." },
      { s: 'cherry', f: 'serious', t: "And my reflection was late." },
      { s: 'solar', f: 'neutral', t: "Late?" },
      { s: 'cherry', f: 'serious', t: "Like a video on bad wifi. I turned my head and it turned its head after. Half a second. Less. Like it had to think about it first. Like it was copying me and it wasn't very good at it yet." },
      { n: "She said it flatly, the way she said everything, her whole face deadpan, and only her hands gave her away: the wrapper in them folded down to a hard white wedge the size of a tooth, pressed and pressed between her finger and her thumb." },
      { s: 'cherry', f: 'neutral', t: "Jihoon didn't see it. I didn't tell him. He'd make a joke, and then he'd look, and then he'd never stop looking, and he's got enough to look at." },
      { s: 'cherry', f: 'neutral', t: "So now I check. Every mirror. Every window. Every time. I did my makeup this morning for forty minutes. Not because of the makeup. Because I was watching." },
      { choose: [
        { t: "Was it late again?", notes: 3, then: [
          { s: 'cherry', f: 'neutral', t: "No. Never. Not once. It's been perfect. Right on time. Every single mirror in this whole stupid town." },
          { s: 'cherry', f: 'serious', t: "I don't know which is worse. I keep wanting it to do it again so I know I'm not crazy." }
        ] },
        { t: "Show me. The next mirror.", notes: 3, then: [
          { s: 'cherry', f: 'surprised', t: "...You believe me." },
          { s: 'solar', f: 'neutral', t: "You don't make things up. You don't have the patience." },
          { s: 'cherry', f: 'happy', t: "That's the nicest thing anyone's ever said about me. That's going on my headstone. *She didn't have the patience.*" }
        ] },
        { t: "It was the red. Everything's wrong in the red.", notes: 2, then: [
          { s: 'cherry', f: 'neutral', t: "Yeah. That's what I keep telling myself. Everything's wrong in the red. Coffins, the moon, the stupid humming." },
          { s: 'cherry', f: 'serious', t: "I just never thought *I'd* be one of the things that was wrong." }
        ] }
      ] },
      { s: 'cherry', f: 'neutral', t: "Okay. Get up. Your liner's a disaster. Your left wing's lower than your right. It's been lower since you walked in and I've been sitting here suffering." },
      { place: 'Wild-Duck Burger · Restroom', time: 'After School', bg: 'wilduckburger', soft: true },
      // BG: wilduck-restroom — a small cramped fast-food restroom with a long mirror over two sinks, harsh fluorescent light, a hand dryer, a sticker-covered paper towel dispenser, a scuffed red door.
      { n: "The restroom at Wild-Duck had one long mirror over two sinks and a fluorescent tube that buzzed like a fly in a jar, and Cherry stood Solar in front of the mirror by the shoulders, the way she'd stood her in front of a bedroom mirror before homecoming with enough hairspray to hold up a building, and took a liner out of her bag and uncapped it with her teeth." },
      { s: 'cherry', f: 'neutral', t: "Look up. Don't blink. If you blink I'll stab you. With love." },
      { n: "She worked. Fast and close, her breath on Solar's cheek, her free hand flat on Solar's jaw to hold her still. And Solar, looking up, not blinking, could see both of them in the mirror, side by side under the buzzing light: Cherry's face very close and very focused, and her own, tipped back, eyes up, waiting." },
      { n: "Cherry's eyes kept going to the mirror. Not to Solar's face in it. To her own. Every few seconds. A flick, and back. A flick, and back. Checking. The way you check a lock." },
      { s: 'cherry', f: 'neutral', t: "...There. Even. You're not a knockoff anymore. You're a premium knockoff." },
      { n: "She capped the liner. They both looked at the mirror at the same time, the way you do, for the finished thing. Two girls under a bad light. Everything in its place. Cherry turned her head one way and then the other, slowly, deliberately, watching, and the girl in the glass turned with her, exactly, perfectly, at the same time, and Cherry let out a breath Solar hadn't known she was holding." },
      { s: 'cherry', f: 'neutral', t: "Okay. Okay. Right on time. Come on." },
      { n: "She went out. Solar dried her hands. The dryer roared and stopped. And in the sudden quiet, reaching for the door, she glanced back at the mirror the way you'd glance at a room you were leaving." },
      { choose: [
        { t: "(Look. Really look.)", notes: 2, flag: 'eqx-cherry-mirror', then: [
          { n: "She looked. The restroom. The two sinks. The buzzing light. Herself at the door with her hand on the handle, looking back." },
          { n: "Her reflection's hand was still on the edge of the sink." },
          { n: "Then it wasn't. It was on the handle, where hers was. It had always been on the handle. She stood with her heart going hard in her throat and looked at the mirror for a long time, and the mirror looked back at her, perfectly on time, and nothing happened at all." }
        ] },
        { t: "(Don't look. Go after Cherry.)", notes: 2, then: [
          { n: "She didn't look. She didn't know why she didn't. She went out after Cherry with her new eyeliner and the back of her neck prickling as if someone were standing a little too close behind her, and didn't turn round until the door had swung shut." }
        ] }
      ] },
      { place: 'Iwatodai Strip', time: 'Evening', bg: 'iwatodai-strip-night', soft: true },
      { n: "Outside the light was going. Jihoon was leaning on the window of Wild-Duck with his hands in his pockets, which neither of them had arranged, which he would say was a coincidence, which it wasn't. He looked at Solar's eyeliner and whistled. He looked at Cherry's face and stopped whistling." },
      { s: 'cherry', f: 'neutral', t: "Don't. Walk." },
      { n: "They walked. Down the Strip, the three of them, toward the station and the guesthouse, the arcade sign coming on above them pink and blue. At the crossing, waiting for the light, Cherry reached out without looking and took hold of Jihoon's sleeve. Just the cuff. Between her finger and thumb. The way you'd hold a little kid's sleeve at a crossing so he wouldn't run out in front of a car." },
      { s: 'cherry', f: 'serious', t: "What. Don't look at me. It's a habit. It's a crossing." },
      { n: "Jihoon didn't say anything clever about it. He looked down at her hand on his sleeve, and then at the road, and he let her hold it all the way across, and on the other side she didn't let go, and he didn't make her, and they walked like that, the two of them, half a block, her fingers closed on his cuff and his arm held very still so she wouldn't have to." },
      // CG: eqx-cherry-sleeve — two teenagers seen from behind at a lit city crossing at dusk, a girl in a short jacket holding just the cuff of a boy's sleeve between her finger and thumb, an arcade sign glowing pink and blue above them.
      { choose: [
        { t: "(Walk on her other side.)", notes: 3, then: [
          { n: "She walked on Cherry's other side. Cherry noticed. She didn't say anything. But her shoulder found Solar's, once, and knocked against it, and stayed, so that the three of them went down the Strip in a row, linked, like a paper chain somebody had cut out of something bigger." }
        ] },
        { t: "You're still on duty, Cherry.", notes: 2, then: [
          { s: 'cherry', f: 'sad', t: "...Shut up." },
          { s: 'cherry', f: 'neutral', t: "Yeah. Okay. Freelance. I said freelance." }
        ] },
        { t: "(Say nothing. Let her have it.)", notes: 3, then: [
          { n: "She said nothing. Some things you only had once, and you didn't have them if somebody pointed at them. She looked at the arcade sign instead, and the evening, and let Cherry have the half block." }
        ] }
      ] },
      { n: "At the guesthouse corner they split. Cherry let go of Jihoon's sleeve at last, as if she'd only just noticed she had it, and turned to Solar, and pointed at her eyeliner, once, like a judge." },
      { s: 'cherry', f: 'neutral', t: "Don't touch it. Don't cry it off. Don't let any boys look at it, they don't deserve it." },
      { s: 'cherry', f: 'neutral', t: "Wild-Duck. Same booth. I'll be there. I'm off duty. I've got nothing but time." },
      { n: "She went in. Jihoon lingered a second at the guesthouse door, looking after her, and then at Solar, and something passed over his face, quick, a question he didn't ask, and he went in too." },
      { n: "Walking home alone, Solar passed a shop window, dark, closed, the glass holding the whole Strip behind her in long smeared lights. She didn't look at it. She walked past it at an even pace, eyes front, and only when she was well past did she realize she'd been holding her breath the whole length of the glass, and that she hadn't, not once, wanted to know." }
    ] },
    { after: '4/23', title: '2: some girl', place: 'Iwatodai Strip · Wild-Duck Burger', time: 'After School', music: 'city', scene: [
      { bg: 'wilduckburger' },
      { n: "The soft-serve machine was still broken. The sign with the crying duck was still on it. Somebody had added a second duck, crying harder, in a different pen, and a speech bubble that said *same*. Cherry was in the corner booth on the right-hand side of the crack, and she didn't point at the seat this time. She was looking out of the window at the Strip with her chin in her hand, and she didn't see Solar until Solar was sitting down, which had never once happened before." },
      { ifAfter: '4/29', then: [
        { n: "She had a cup of coffee in front of her and nothing else. No tray. No stolen fries. Her nails were done, all ten, a dark red that hadn't been there on Monday, and Solar looked at them and understood the red was there to hide what was under it, because there were three bitten now instead of two." },
        { s: 'cherry', f: 'neutral', t: "Don't look at my nails. I know. I know what they look like." },
        { s: 'cherry', f: 'serious', t: "I cleaned the carpet. At the guesthouse. On the stairs, where Minji was sick. Somebody had to, and Jihoon was sitting there with a cold rice ball in his hands like a little kid, and Jungwon was on the phone, and Jaehyun had Minji. So I got a bucket." },
        { s: 'cherry', f: 'serious', t: "I'm good at cleaning up after. It's literally my whole job. I just walked back into it. Like a coat." },
        { s: 'cherry', f: 'sad', t: "...He still has the rice ball. In his hoodie pocket. It's gone hard as a rock. I can feel it when I hug him. I can't make him throw it away and I can't make myself ask." }
      ], else: [
        { n: "She had a tray. On the tray was a burger she'd eaten all of, the wrapper folded into a perfect small square, and beside it a coffee, and beside that a strawberry milkshake she was clearly drinking on purpose, defiantly, through a striped straw, like a girl in an advertisement." },
        { s: 'cherry', f: 'happy', t: "Look at me. Off duty. I ate a whole burger. I'm drinking a pink drink. I'm some girl." },
        { s: 'cherry', f: 'neutral', t: "Jihoon's at day sixteen. I'm not counting. I'm counting. I'm off duty and I'm counting. Both. Ken says you're allowed both." }
      ] },
      { choose: [
        { t: "(Steal her coffee.)", notes: 3, then: [
          { n: "She took Cherry's coffee and drank some. Cherry watched her do it with an expression of slow, deep betrayal, and then, almost against her will, a small pleased one under it." },
          { s: 'cherry', f: 'happy-2', t: "...Oh, so it's like that. So that's who we are now. Fine. I'll steal yours forever." }
        ] },
        { t: "Cherry. You okay?", notes: 3, then: [
          { s: 'cherry', f: 'serious', t: "Ask me in May." },
          { s: 'cherry', f: 'neutral', t: "...It's almost May. Ugh. Ask me in June." }
        ] },
        { t: "Who drew the second duck?", notes: 2, then: [
          { s: 'cherry', f: 'happy', t: "Me. Yesterday. With a pen I stole off the counter. That duck's been alone for a year. Nobody should be alone with a broken machine for a year." }
        ] }
      ] },
      { s: 'cherry', f: 'neutral', t: "Okay. Get up. We're going shopping. I'm buying something I'd never wear at home." },
      { s: 'solar', f: 'neutral', t: "Why?" },
      { s: 'cherry', f: 'serious', t: "Because I can. Because nobody here's going to see it and think anything. Because I've been wearing black since middle school so nobody notices when I'm standing in a doorway. Come on. You're my witness." },
      { place: 'Paulownia Mall · Clothing Store', time: 'After School', bg: 'clothing-store', soft: true },
      { n: "The clothes shop on Paulownia's second floor played the same four pop songs on a loop and smelled of new cotton and the vanilla candle burning by the till, and Cherry went through the racks like a customs officer, fast, flicking hangers along the rail with two fingers, rejecting everything with a small sound in her throat, until she stopped." },
      { n: "It was a sundress. Yellow. Not pale yellow, not tasteful yellow, a loud happy egg-yolk yellow, with thin straps and a skirt that would swing. The kind of dress a girl in a magazine wore on a bicycle with a basket of flowers. Cherry held it up by the hanger at arm's length and looked at it the way you'd look at a dog you'd found in the street, already knowing you were taking it home." },
      { s: 'cherry', f: 'serious', t: "This. This is the stupidest thing in this whole mall." },
      { s: 'cherry', f: 'happy', t: "I'm trying it on. Don't say anything. Don't say a single word. If you laugh I'll put you through a rack." },
      { choose: [
        { t: "It's perfect.", notes: 3, then: [
          { s: 'cherry', f: 'surprised', t: "...You're not even being sarcastic. Oh my God. That's worse. That's so much worse." }
        ] },
        { t: "You'd look like a lemon.", notes: 2, then: [
          { s: 'cherry', f: 'happy-2', t: "I'd look like a *gorgeous* lemon. The best lemon in Japan. Sit down outside the curtain and wait to be stunned." }
        ] },
        { t: "(Find her a hat to go with it.)", notes: 3, then: [
          { n: "She found a hat. A straw one, wide, with a yellow ribbon, absurd. She held it out. Cherry looked at it, and at her, and her mouth twitched, and she took it without a word and went into the changing room with the dress over one arm and the hat on her head." }
        ] }
      ] },
      { n: "The changing rooms were at the back, three cubicles with curtains, and at the end of the row a three-way mirror, the tall kind with two hinged side panels angled in, so that when you stood in front of it you saw yourself from three sides at once and also, in the angle between the panels, yourself reflected in yourself, again and again, smaller and greener and further off, a long corridor of girls going back into the glass forever." },
      { n: "Cherry came out in the dress. She came out barefoot, scowling, the yellow so bright against her skin it seemed to hum, and stood in front of the three-way mirror with her arms folded, and looked." },
      { n: "It was perfect. It was so completely, stupidly perfect that for a second she forgot to scowl, and Solar saw her face do something it never did, open, like a window somebody had pushed up for air. A girl in a yellow dress. Not a bouncer. Not anyone's anything. Some girl." },
      { s: 'cherry', f: 'sad', t: "...Oh. Huh." },
      { s: 'cherry', f: 'sad', t: "If I never went back. Like, hypothetically. Nobody'd need a bouncer. They'd figure it out. Jihoon would figure it out. Everybody's fine without me for like a day at a time. Maybe they'd be fine for longer." },
      { n: "She said it to the mirror. Lightly. Turning a little to make the skirt swing. And it was such a reasonable thing to say, in a yellow dress, in a shop with the same four songs, that Solar almost didn't hear the shape of it, until she did, and felt it go down her back, cold." },
      { choose: [
        { t: "They wouldn't be fine. They'd miss you.", notes: 2, then: [
          { s: 'cherry', f: 'serious', t: "Missing's not the same as needing. I know the difference. I've been needed since I was twelve. Missed sounds nice. Missed sounds like a vacation." }
        ] },
        { t: "You get to be some girl anywhere. Not only here.", notes: 3, then: [
          { s: 'cherry', f: 'surprised', t: "...Anywhere?" },
          { s: 'cherry', f: 'neutral', t: "Say that again at home. Say that to me on a Tuesday at home when somebody's texting me at two in the morning that he's at a guy's place. Say it then." },
          { s: 'cherry', f: 'sad', t: "...No, keep saying it. I like hearing it. I just don't believe it yet." }
        ] },
        { t: "(Don't answer. Fix the strap on her shoulder.)", notes: 2, then: [
          { n: "She didn't answer. She stepped up behind her and straightened the strap on her left shoulder, which had twisted, and smoothed it flat, the way Cherry had held her jaw for eyeliner. In the mirror, three Cherries watched her do it." }
        ] }
      ] },
      { n: "Then Cherry did the thing she'd said she did. Every mirror. Every window. She turned her head, slowly, left, and right, and watched the reflections turn with her. The front one. The two side panels. And then she leaned in, a little, and looked down the corridor in the angle between them, the long green tunnel of girls in yellow going back and back, and started counting them under her breath, the way she'd count in the shower." },
      { s: 'cherry', f: 'serious', t: "One. Two. Three. Four. Five. Six—" },
      { n: "She stopped." },
      { n: "Solar looked where she was looking. Far down the glass corridor, eight or nine reflections deep, where the girls were small and green and blurred at the edges, one of them was facing the wrong way." },
      { n: "All the others faced out. Toward the shop. Toward them. Cherry's face, again and again, smaller and smaller, scowling at herself. And one, far back, small, in the yellow dress, had its back to them. As if it were facing further in. As if something was further in, down there in the green, and it had turned round to look." },
      // CG: eqx-three-way-mirror — a girl in a bright yellow sundress and a straw hat standing barefoot before a shop's three-way mirror, the reflections running back in a long green corridor; far down the corridor, one small reflection of her has its back turned.
      { n: "Then it hadn't. Then it was facing out like the others, small and green and scowling, and the corridor went back into the glass, perfectly in order, and the shop's speakers played the second of the four songs." },
      { ifFlag: 'eqx-cherry-mirror', then: [
        { s: 'solar', f: 'neutral', t: "I saw it. And at Wild-Duck. In the restroom. Mine. The hand on the sink." },
        { s: 'cherry', f: 'surprised', t: "...You saw yours? You saw yours and you didn't tell me?" },
        { s: 'cherry', f: 'serious', t: "I've been walking round for two weeks thinking it was just me. Thinking I was the only broken one. You let me." },
        { s: 'cherry', f: 'sad', t: "...No. Okay. I wouldn't have told me either. I'd have wanted it to be nothing. Okay. Okay. So it's both of us. That's. Okay." }
      ], else: [
        { s: 'cherry', f: 'serious', t: "You saw it. Tell me you saw it. Don't be nice. Don't be careful. Just say it." },
        { s: 'solar', f: 'neutral', t: "I saw it." },
        { s: 'cherry', f: 'sad', t: "...Thank you. God. Thank you. I'm not crazy. I'm just haunted. That's so much better." }
      ] },
      { choose: [
        { t: "(Fold the side panels shut.)", notes: 3, then: [
          { n: "She took hold of the two hinged panels and folded them in, flat, against the middle mirror, so there was only one Cherry, front-on, in yellow, with her arms folded. The corridor was gone. Cherry looked at the single reflection for a long moment and let her breath out." },
          { s: 'cherry', f: 'neutral', t: "...Good. One. One of me's plenty." }
        ] },
        { t: "Count them again. With me.", notes: 2, then: [
          { n: "They counted together. Out loud, both of them, leaning in, all the way down the green, as far as you could see. Every one faced out. Every one, Cherry's scowl, smaller and smaller, perfectly on time. They got to fourteen and couldn't see any further." },
          { s: 'cherry', f: 'serious', t: "...Fourteen. All right. All right. Fourteen good ones. I'll take fourteen." }
        ] },
        { t: "It's the angle. Mirrors do that.", notes: 1, then: [
          { s: 'cherry', f: 'neutral', t: "Yeah. Sure. The angle. Mirrors turn round sometimes. Famous mirror fact." },
          { s: 'cherry', f: 'serious', t: "You don't have to do that with me. I'm not Jihoon. I don't need it made into a joke so I can carry it." }
        ] }
      ] },
      { n: "She bought the dress. She bought it out of spite, Solar thought, out of pure spite at the mirror, at the whole town, at whatever was down there in the green with its back turned. She paid at the till with her arms still folded and the bag over her wrist like a weapon, and the hat on her head, and didn't take the hat off." },
      { s: 'cherry', f: 'neutral', t: "I'm wearing it somewhere stupid. A festival. A shrine thing. Somewhere with lanterns, where I can stand around with a candy apple like a girl in a drama." },
      { s: 'cherry', f: 'serious', t: "And if anything turns round in a window while I'm doing it I'm going to turn round right back." },
      { place: 'Iwatodai Strip', time: 'Evening', bg: 'iwatodai-strip-night', soft: true },
      { n: "They walked back down the Strip as the lights came on, Cherry with the bag over her wrist and the absurd hat on, and at the crossing, waiting for the light, her hand went out to her left without looking, the way it always did, the finger and thumb already shaped for a cuff." },
      { n: "There was nobody on her left. Jihoon wasn't there. Her fingers closed on the air beside her and held it a second, holding nothing, and then she noticed, and looked down at her own hand, and laughed, short, embarrassed." },
      { s: 'cherry', f: 'neutral', t: "Habit. It's a crossing. My hand doesn't know he's at the arcade." },
      { choose: [
        { t: "(Give her your sleeve.)", notes: 3, then: [
          { n: "She stepped round to Cherry's left and put her own cuff where Cherry's hand had been. Cherry looked at it. Then she took it, between finger and thumb, and held on, and they crossed like that, and on the far side she didn't let go for half a block, and then she did, and didn't say anything, and her ears had gone pink under the straw." }
        ] },
        { t: "You can stop holding on, you know. Sometimes.", notes: 2, then: [
          { s: 'cherry', f: 'serious', t: "I know. I know I can. I just don't know what my hands are for if they're not holding somebody's sleeve." },
          { s: 'cherry', f: 'neutral', t: "...Holding a candy apple, I guess. I'll practice." }
        ] },
        { t: "(Don't say anything.)", notes: 2, then: [
          { n: "She didn't say anything. The light changed. Cherry put her hand in the pocket of her jacket, firmly, as if to keep it there, and they crossed side by side, not touching, and Solar could see her fingers moving in the pocket the whole way, rubbing finger and thumb together over nothing." }
        ] }
      ] },
      { n: "At the guesthouse they went round to the kitchen door. Everyone did now. Cherry stopped with her hand on it and looked at the small square of glass in the top half of the door, where the kitchen light behind made a mirror of it, the two of them in it, her yellow hat and Solar's face." },
      { n: "She looked for a long time. Then she turned her head, slowly, and watched the girl in the glass turn with her, and nodded, once, short, the way you'd nod to someone who'd done their job." },
      { s: 'cherry', f: 'neutral', t: "On time. Good girl." },
      { n: "She went in. Through the glass, before the door swung shut, Solar saw Jihoon at the kitchen table look up and see the hat, and his whole face crack open, and Cherry point at him, once, like a judge, before he could say a single word. Then the door closed, and the glass was just glass, with Solar in it, alone, under the yard light." },
      { n: "She didn't look at it. She'd learned that much. She turned and went up the hill toward the dorm with her hands in her pockets, and only at the corner did she realize her own fingers were rubbing together in her pocket, finger and thumb, over nothing, the way Cherry's had." }
    ] },
    { after: '6/12', title: '3: the bread girl', place: 'Iwatodai Strip · Wild-Duck Burger', time: 'After School', music: 'city', scene: [
      { bg: 'wilduckburger' },
      { n: "Cherry wasn't in the corner booth. That was the first wrong thing, and Solar stood inside the door of Wild-Duck Burger in the smell of fryer oil and wet umbrellas for a full five seconds with her stomach dropping, scanning the room the way she'd learned to scan rooms this year, before the girl at the counter waved a paper bag at her and said, in English, very carefully, *for you, from the yellow-hat girl*." },
      { n: "In the bag was a cream bun. Soft, glossy, a little squashed on one side, still faintly warm. Taped to the bag was a napkin with a message in eyeliner pencil, in handwriting that leaned so hard to the right it looked like it was running for a bus." },
      { n: "*Station. The bakery. Come at 5. Don't be late, I'm on the clock. — C.*" },
      { choose: [
        { t: "(Eat the bun on the way.)", notes: 3, then: [
          { n: "She ate it on the way, walking fast down the Strip in the drizzle. The cream inside was cold and sweet and real, the bread pulling apart in soft strings, and it tasted like every bakery in every life she'd had, which was to say, it tasted like a Saturday morning when somebody else had got up first." }
        ] },
        { t: "(Save it for later. Put it in your bag.)", notes: 2, then: [
          { n: "She put it in her bag, carefully, on top of her books. It would be squashed by the time she got there. Cherry would notice. Cherry noticed everything, and would make a face about it, and the face was half the point." }
        ] }
      ] },
      { place: 'Iwatodai Station · The Bakery', time: 'Evening', bg: 'iwatodai-station', soft: true },
      // BG: iwatodai-bakery-inside — a tiny old bakery by a train station at closing: a glass counter with cream buns and melon bread on paper doilies, wooden trays on racks, a flour-dusted back counter, warm yellow light, rain on the window.
      { n: "The bakery by the station was the size of a large closet, warm as an oven because it more or less was one, and smelled so strongly of butter and burnt sugar that it hit you in the doorway like a hand on the chest. Wooden trays on racks, mostly empty at this hour. A glass counter with the last of the day laid out on paper doilies: three melon breads, a curry bun, a row of cream buns like a row of sleeping cats." },
      { n: "Behind the counter, in a white apron and a white paper cap pinned to the top of her head at an angle that was either deliberate or a crime, was Cherry." },
      { s: 'cherry', f: 'happy', t: "Irasshaimase. That's the only word I know. I say it to everybody. I said it to a pigeon." },
      { n: "There was flour on her forearms to the elbow. There was flour on her cheek, a long pale streak where she'd pushed her hair back, and flour in the creases of her knuckles, and her nails, the bitten ones painted over, had flour packed under them in little white crescents. She held up both hands to show Solar, palms out, like a surgeon." },
      { s: 'cherry', f: 'happy-2', t: "Look at this. Look. I'm the bread girl. I did it. I walked in on Tuesday and pointed at the sign in the window and the old man looked at me for like a full minute and then gave me an apron. He doesn't speak English. I don't speak anything. We communicate through bread." },
      { choose: [
        { t: "You look happy.", notes: 3, then: [
          { s: 'cherry', f: 'serious', t: "Don't say that out loud. You'll jinx it. Somebody'll hear and take it." },
          { s: 'cherry', f: 'happy', t: "...I am, though. I'm so happy it's stupid. I've been happy since Tuesday. I keep waiting for it to stop." }
        ] },
        { t: "The cap's crooked.", notes: 2, then: [
          { s: 'cherry', f: 'neutral', t: "It's a choice. It's a look. You don't come into my bakery and comment on my look." },
          { n: "She straightened it anyway, with a floury hand, and left a fingerprint on the paper, and didn't notice, and Solar didn't tell her." }
        ] },
        { t: "(Take the squashed bun out and show her.)", notes: 2, then: [
          { s: 'cherry', f: 'surprised', t: "You didn't eat it? I sent you a bun and you didn't— it's ruined. You ruined my bun. That was a gift. That was my first ever bun." },
          { n: "She took it off her, ate half of it in one bite, glared, and gave her the other half back." }
        ] }
      ] },
      { n: "The old man came out from the back with a tray of something, small and bent and silent, in an apron so old it had gone the color of weak tea, and nodded at Solar the way you'd nod at a known quantity, and put the tray on the rack and went back through the bead curtain without a word. Cherry watched him go with the face of somebody watching a war hero." },
      { s: 'cherry', f: 'neutral', t: "That's Mr. Bakery. I don't know his name. He's never said it. He gets in at four in the morning. He's got a radio in the back that only plays enka and he sings along with all of it, every word, really badly. It's the best thing I've ever heard." },
      { n: "She took a pinch of flour from a bin under the counter and rubbed it between her finger and thumb, and held it out for Solar to feel. It was coarse. Gritty, almost, a little gray, catching on the skin, the way flour was supposed to feel, the way it felt in every kitchen Solar had ever stood in." },
      { s: 'cherry', f: 'neutral', t: "That's real flour. Feel that. It's rough. You can feel the bits. I didn't know flour had bits. I thought it was all like powder." },
      { n: "She brushed her fingers off on her apron, and didn't say where she'd got the idea that flour was all like powder, and Solar didn't ask, and they both looked at the cream buns for a moment instead." },
      { s: 'cherry', f: 'neutral', t: "Okay. I'm off in four minutes. Act like a customer. Buy something. He's watching through the curtain, he does that, it's like working for a ghost." },
      { place: 'Iwatodai · Station Plaza', time: 'Evening', bg: 'station-concourse-evening', music: 'tender', soft: true },
      { n: "Jihoon was waiting outside under the station awning, with his hood up and his hands in his pockets and the white dog plush sticking out of one of them, head first, as if it too had come to pick her up. He saw Cherry come out in her own clothes with her apron rolled under her arm, and his whole face did the thing it did, cracked right open, and Cherry pointed at him once like a judge before he could say anything." },
      { s: 'cherry', f: 'neutral', t: "Wrist." },
      { n: "He pushed his sleeve back without arguing. On the inside of his wrist, in blue ballpoint, slightly smudged, a number. She took his wrist in both hands, floury, and looked at it the way she'd look at a ticket at a door, and nodded, and let go." },
      { ifBefore: '7/15', then: [
        { s: 'cherry', f: 'neutral', t: "Good. Two digits. Next month it's three. Then I'm buying you a cake. A real one. From Mr. Bakery." }
      ], else: [
        { s: 'cherry', f: 'happy', t: "Three digits. Three. You know what that is? That's a cake. I already told Mr. Bakery. I drew him a picture. He understood." }
      ] },
      { s: 'jihoon', f: 'neutral', t: "She checks it every morning at breakfast too. Like a customs officer. I could write anything on there. I could write a thousand." },
      { s: 'cherry', f: 'serious', t: "You wouldn't, though. That's the thing. You wouldn't lie on your own arm. I'd know." },
      { ifEvent: 'eqx-hate-club', then: [
        { n: "Jihoon said he had to go, the boys were at Game Panic, and Cherry's face changed, very slightly, at *the boys*, and didn't change back. He saw it. He touched the top of her paper-capped head on his way past, lightly, the way you'd touch a doorframe, and went off across the plaza toward the Strip, and Cherry watched him all the way to the corner." },
        { s: 'cherry', f: 'serious', t: "Hyunsuk's cousin knows a guy. That's what they said, the night they came. It was a joke. It's always a joke. It's a really old joke." },
        { s: 'cherry', f: 'neutral', t: "There's no guy here. I checked. I'm not proud of how I checked. There's no guy. I just keep checking anyway." }
      ], else: [
        { n: "Jihoon said he had to go, Jungwon had a thing, there was a form, there was always a form. He touched the top of her paper-capped head on his way past, lightly, the way you'd touch a doorframe, and went off across the plaza, and Cherry watched him all the way to the corner." }
      ] },
      { n: "They walked. The rain had stopped and the plaza was shining, the lights from the station and the shops laid out across the wet paving in long gold stripes, and people stepped over the stripes and through them without noticing, going home. At the crossing, waiting for the light, Cherry's hand came up out of her jacket pocket, quick, the way it always did, and reached for Jihoon's cuff, and found nothing there, because he'd gone, and closed on air." },
      { n: "She looked at her hand. She put it back in her pocket. The light changed." },
      { s: 'cherry', f: 'sad', t: "...Habit. I told you. My hand doesn't know where he is. My hand thinks it's still middle school." },
      { choose: [
        { t: "(Hook your arm through hers instead.)", notes: 3, then: [
          { n: "She hooked her arm through Cherry's, the way girls did in the hallways at Hanlim, elbow to elbow. Cherry stiffened, the way she always did at anything she hadn't seen coming, and then didn't, and pulled Solar's arm in tighter against her side, and they crossed like that, out of step, Cherry's apron bundled between them." }
        ] },
        { t: "He's at the arcade. He's fine.", notes: 2, then: [
          { s: 'cherry', f: 'neutral', t: "I know he's fine. I'm not talking about him. I'm talking about my hand. My hand's a separate issue. My hand needs therapy." }
        ] },
        { t: "(Don't say anything. Walk on her left, where he'd be.)", notes: 2, then: [
          { n: "She stepped round to Cherry's left, where Jihoon would have been. Cherry noticed. Cherry noticed everything. She didn't say anything about it; she just let her hand come out of her pocket again, halfway, and swing loose, and they crossed like that, and her hand didn't reach for anything at all." }
        ] }
      ] },
      { place: 'Paulownia Mall · The Canal', time: 'Evening', bg: 'paulownia-canal', soft: true },
      { n: "They sat on the low wall by the canal with the two halves of a melon bread Cherry had bought with her staff discount and wouldn't share, then shared. The water went by fast after the rain, brown and full, carrying leaves and a single sandal and the reflections of the lamps, broken up and put back, broken up and put back." },
      { ifEvent: 'eqx-last-grain', then: [
        { s: 'cherry', f: 'sad', t: "I used to go to the boarding house. For supper. I don't now. Not since him. Not since the dough." },
        { s: 'cherry', f: 'serious', t: "I cleaned the carpet at the guesthouse. After Tanabe-san. I'm good at after. But I couldn't have cleaned that. I keep thinking about who did. Somebody wiped his plate, Sol." },
        { s: 'cherry', f: 'neutral', t: "Mr. Bakery's flour is rough. Hers was so fine. That's all I'm saying. That's all I'm going to say about it." }
      ] },
      { s: 'cherry', f: 'neutral', t: "Can I tell you something. Not weird this time. Just a thing." },
      { s: 'cherry', f: 'serious', t: "At home I count. You know I do. His days. In the shower, so nobody hears. I count his days and I check his arm and I stand at the door at two in the morning at parties so nobody gets in who shouldn't. That's my job. It's been my job since I was fourteen. Nobody gave it to me. I just took it and nobody ever told me to put it down." },
      { s: 'cherry', f: 'serious', t: "And the thing is, I'm really good at it. I'm the best there is. Nobody gets past me." },
      { s: 'cherry', f: 'sad', t: "...And this week I've been the bread girl. And for, like, four hours a day, I don't count anything. I count buns. I count change. I don't think about his arm once. Not once. It's the first time in four years my head's been quiet." },
      { n: "She turned the half of the melon bread over in her floury hands, the sugar crust cracking, and didn't eat it." },
      { s: 'cherry', f: 'serious', t: "If I stayed. If I just— didn't go back. Nobody'd need a bouncer. I could stop counting. Forever. I could hand in the job. I could just be some girl in a paper hat who sings enka badly." },
      { s: 'cherry', f: 'neutral', t: "So tell me I can stop. That's all. You're the only person who knows both of me. Tell me I'm allowed to stop counting, and I'll stop. I'll just stop. I'll put it down right here on this wall." },
      // CG: eqx-bread-girl — a low wall by a fast canal at dusk after rain; a girl with flour on her forearms and a rolled bakery apron in her lap holding half a melon bread, a friend beside her, lamps doubled in the water.
      { n: "She didn't look at Solar while she said it. She looked at her hand on the wall between them, flat, floury, the nails with the white crescents under them, and Solar realized she'd put it there palm down on purpose, the way you'd put down something you'd been carrying a long way, not quite letting go of it yet, just resting it." },
      { choose: [
        { t: "Whether you count is yours. Whether you stay is yours. I'm not your shift manager.", notes: 2, tally: { choose: 1, 'asks.cherry': 'choose' }, then: [
          { s: 'cherry', f: 'surprised', t: "...Wow." },
          { s: 'cherry', f: 'serious', t: "Wow. Okay. I hand you the job and you hand me back the job and a hat. That's— okay." },
          { n: "She looked at the water for a long time. A leaf went by. Another one. She pulled her hand back off the wall and put it in her lap with the other one and held them both there, together, as if they might go somewhere if she didn't." },
          { s: 'cherry', f: 'neutral', t: "...Fine. Mine. Then I'll decide on my own clock. Some days I'll count and some days I'll count buns. That's allowed, I guess. Nobody ever told me that was allowed." },
          { s: 'cherry', f: 'sad', t: "I wanted you to just say it. You know I did." },
          { s: 'solar', f: 'neutral', t: "I know." }
        ] },
        { t: "Stop counting. Stay. Be the bread girl.", notes: 3, tally: { cakes: 1, 'asks.cherry': 'yes' }, then: [
          { n: "Cherry closed her eyes. Then she laughed, short and surprised, the laugh of somebody who's been holding a door shut against wind for a very long time and has just been told she can take her shoulder off it." },
          { s: 'cherry', f: 'happy', t: "...Okay. Okay! You said it. That's it. I'm retired. I'm retiring. Tell everybody. Put it in the paper." },
          { s: 'cherry', f: 'happy-2', t: "...I'll probably still count in the shower. Like, out of habit. My mouth does it on its own. But that's not duty. That's just a song stuck in my head." },
          { n: "She took the rolled apron out of her lap and shook it out and put it on, there on the canal wall, over her jacket, and tied it in a big floppy bow at the back, and sat there in it, grinning at the water, with flour on her face, and finished the melon bread in three bites, and didn't look at her hand once." }
        ] },
        { t: "Not yet. Somebody's still got to count, Cherry.", notes: 2, tally: { 'asks.cherry': 'no' }, then: [
          { n: "She didn't argue. That was how Solar knew it had landed. Cherry argued with everything; Cherry had argued with a pigeon. She just nodded at the water, once, short, the way you'd nod to someone who'd done their job." },
          { s: 'cherry', f: 'neutral', t: "...Yeah. Yeah. On duty. Got it." },
          { s: 'cherry', f: 'sad', t: "You're right. Someone's got to. It's just always me. Do you know that? It's always, always me." },
          { n: "She picked her hand up off the wall and put it back in her pocket, and Solar could see her fingers moving in there, finger and thumb, rubbing together over nothing, counting something, all the way back to the guesthouse." }
        ] }
      ] },
      { place: 'Kirijo Guesthouse · Kitchen Door', time: 'Night', bg: 'kirijo-guesthouse-night', soft: true },
      { n: "At the guesthouse they went round to the kitchen door. Cherry stopped with her hand on it, the way she always did now, and looked at the small square of glass in the top half, where the kitchen light behind made a mirror of it." },
      { n: "She didn't look long this time. She'd stuck something over it. A paper doily, from the bakery, taped at the corners, white lace over the glass, so that the light came through it in little flowers and there was nothing to see in it at all." },
      { s: 'cherry', f: 'neutral', t: "Nobody's asked me to take it down. Jungwon looked at it like it was a crime scene and then just went in. That's how you know you live with smart people." },
      { n: "She went in. Through the door, before it swung shut, Solar heard Jihoon's voice from the kitchen table, *you're late*, and Cherry's, *I'm a working woman*, and a chair scrape, and then the door closed, and there was only the lace and the light coming through it in little flowers onto the step." },
      { n: "Walking home Solar put her hand in her pocket and found flour on her own fingers, from the wall, from the counter, from Cherry's hands. Rough. Gritty. Real. She rubbed it between her finger and thumb all the way up the hill, and at the top she realized she was doing it the way Cherry did, over and over, and that she'd been counting while she did it, and didn't know what." }
    ] }
  ]
});
