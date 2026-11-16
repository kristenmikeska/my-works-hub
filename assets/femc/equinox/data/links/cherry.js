/* Persona 3: Equinox · Cherry Kim · Chariot. Link data (femc-equinox-game.html). Format: link fields in
   assets/femc/game/core.js ("Links" header), scene lines in assets/femc/game/scene.js.
   Written: ranks 1–2 (from 4/13; her home is Wild-Duck Burger on Sunday, Monday, Wednesday, Friday and Saturday
   afternoons, so 4/14 at the earliest). Ranks 3–10 still to write. Shape: the stub fields from assets/femc/equinox/data/links.js.
   Solstice's Cherry link is shared memory ("who's really in first", the knockoff, the corner booth, "left wing lower", the
   pinned message, "i'd run"); nothing reads Solstice link standing. HOAX fences hold: the triangle stays open, Jihoon's
   drugs are named only as "clean" / "counting", nothing past the manuscript. Cursing sparing, in her voice.
   Flags this file sets: eqx-cherry-mirror (rank 1: Solar looks back at the restroom mirror). Nothing reads it yet.
   Rank 2 (after 4/23): reads eqx-cherry-mirror and ifAfter 4/29. Sets nothing. */
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
    ] }
  ]
});
