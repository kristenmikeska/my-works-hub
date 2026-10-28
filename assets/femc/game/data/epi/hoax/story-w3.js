/* The HOAX epilogue, week 3, part 1 (1/4-1/9): writer C's events (batch 5 brief, "Writer C → story-w3.js").
   Merges into FEMC_EPI_WORLDS.hoax.events; never overwrites.

   Events
     epi-h-snowed-in    1/4  after, consumes     The snow day at Yeobo's: the crew, Jungwon "at a study group", Jaehyuk's typo.
                                                 Jungwon sees her flicker, says nothing in front of them; on the walk home, "You went thin."
     epi-h-clocks       1/5  evening, consumes   Heeseung's ledger at Yeobo's; every clock in the café stops at 12:00 and stays there.
                                                 Sunoo's grandmother: when every clock in a house stops, somebody's come home.
     epi-h-unseen       1/5  late                Fight 2 (placeholder epi-hoax-2): Yeobo's after closing, half Tartarus; S.E.E.S. can't see her.
     epi-h-window       1/6  evening, consumes   route jungwon. His street, his window, his parents asleep, the garage roof; the date he counts
                                                 (never staged); they say the name out loud.
     epi-h-porch        1/6  evening, consumes   route jihoon. His mother's porch flowers frozen in their pots, the kettle; she flickers, he
                                                 pretends, then he can't: "I remember. All of it. I was hoping you didn't."
     epi-h-war-room     1/6  evening, consumes   route council. The forum war at Yeobo's; they decide to finish the gym for the hearing.
     epi-h-makeup       1/8  early, consumes     The first make-up paper (calculus), Sakura proctoring, the snow going up past the window,
                                                 Jihoon behind her; at lunch the motion is filed, Eunchae ambushes her.
     epi-h-prom         1/9  after, consumes     The council room: PROM on the whiteboard and nothing else; Chaewon brings the hearing's rules.
     epi-h-unheard      1/9  late                Fight 3 (placeholder epi-hoax-3): the snow stops in the air; Hanlim's halls at midnight;
                                                 S.E.E.S. can see her and can't hear her.

   Flags set     epi-h-unseen, epi-h-said-name, epi-h-jihoon-remembers, epi-h-gym-plan, epi-h-filed, epi-h-unheard
                 local (choice detail, free for later files to read): epi-h-snow-truth / epi-h-snow-nothing / epi-h-snow-kiss
                 (1/4 walk home), epi-h-window-first / epi-h-window-waited (who said the name first), epi-h-porch-stay /
                 epi-h-porch-joke (1/6 porch), epi-h-war-sol-post / -sol-receipts / -sol-gym (her forum-war job),
                 epi-h-eunchae-quote / -smile / -nocomment (1/8 lunch).
   Flags read    epi-route-jungwon / -jihoon / -council (event gates and ifEpiRoute), epi-h-notes, epi-h-alone, epi-h-unseen,
                 epi-h-jihoon-chose, epi-h-said-name, epi-h-jihoon-remembers, epi-h-gym-plan, epi-h-retreat
   ifYear read   { xmas: 'jungwon' } (window: the croissant), { xmas: 'jihoon' } (porch: the plush dog)
   Glitches      epi-h-g-flicker (snowed-in), epi-h-g-clocks (clocks), epi-h-g-unseen (unseen), epi-h-g-jihoon (porch),
                 epi-h-g-upward (makeup), epi-h-g-unheard (unheard); { stage: 3 } on both fight nights; { strain: 1 } after the
                 temple-stay lies (clocks, makeup); { near: true } once (snowed-in, Jungwon silent).
   Music         epi-h-snow, epi-h-goofy, epi-h-dread, epi-h-half, epi-h-romance, epi-h-jihoon, epi-h-exam

   Inventions for Kat to confirm
     - Sunoo's grandmother's saying: "when every clock in a house stops at once, somebody's come home who wasn't expected"
       (her own mother's). Yeobo's clocks stay stopped at 12:00 after 1/5.
     - Jaehyuk made Solar a related-rates cheat sheet with a typo Jungwon caught; Sunoo chalked JAEHYUK WAS WRONG (1/4) on
       the specials board.
     - Jungwon's bedroom window is over the garage roof; his parents are asleep by ten. He can't climb.
     - Calculus is the first make-up paper (1/8, morning); Jungwon sits his papers in a separate room (AP / dual-credit).
     - Heeseung is a forum moderator (he bans Niki's alt accounts); Sunoo's posters say THE TIN IS FINE.
     - Chaewon's ground rules for Thursday: the filer reads the motion and is named then (their request); one speaker and one
       reply a side; questions from the floor; Eunchae may stream from the back row only; no phones raised; the tin comes
       to the hearing. Who speaks for the council is left open ("tell me by Wednesday").
     - Jihoon's Persona memory: "a goblin with a club came out of my head" (Dokkaebi) and arm-wrestling Akihiko.
*/
(() => {
  const R = ((window.FEMC_EPI_WORLDS ||= {}).hoax ||= {});
  (R.events ||= []).push(

  // ───────────────────────────── 1/4, after: snowed in ─────────────────────────────
  { id: 'epi-h-snowed-in', date: '1/4', slot: 'after', consumes: true, title: 'snowed in', place: "Hanlim · Yeobo's", time: 'Daytime', scene: [
    { music: 'epi-h-snow' },
    { n: "The snow had started at eleven like it meant it, fat and sideways and all at once, and by one o'clock the bus on the corner had given up, the street had given up, and Sunoo's grandmother had flipped the sign on Yeobo's door to CLOSED with everyone still inside, which was apparently how a snow day worked in this house." },
    { s: 'halmeoni', t: "Nobody leaves in this. Nobody. You'll freeze to the pavement and your mothers will call me, and then what?" },
    { n: "So nobody left. Which was how Solar ended up at the big table by the window with most of the old table and one Yang Jungwon, who had told his mother this was a study group. It was technically true, in the sense that there was a textbook on the table and he was the only person reading it." },
    { n: "Cherry was wrapped in two scarves and somebody else's coat. Junkyu had his hands around his third hot chocolate. Asahi had his hood up indoors like the snow was a personal attack, and Hyunsuk had taken the seat at the far end of the table, as far from Jungwon as the furniture allowed, and was being very normal about it." },
    { n: "And Jaehyuk had brought notes. Actual notes. Colour-coded, stapled, with her name on the top in his neat small handwriting." },
    { s: 'jaehyuk', f: 'neutral', t: "Chapter six. Related rates. You missed it, and it's on Monday's paper. I made you a sheet." },
    { s: 'solar', t: "Jaehyuk. I would die for you." },
    { s: 'jaehyuk', f: 'happy', t: "Please just do the sheet." },
    { s: 'jungwon', f: 'neutral', t: "Question three has a typo." },
    { n: "He hadn't looked up. He'd turned a page of his own book with one finger and kept reading, like he was commenting on the weather." },
    { s: 'jaehyuk', f: 'surprised', t: "...It does not." },
    { s: 'jungwon', f: 'neutral', t: "The ladder slides at two feet per second. You wrote the answer in meters." },
    { n: "Jaehyuk took the sheet back with the face of a man whose whole personality had just been audited by a boy in a cardigan. Asahi laughed into his sleeve, a real one, the kind he only ever seemed to spend on Jungwon." },
    { s: 'asahi', f: 'happy', t: "He's so annoying. I love it here." },
    { s: 'hyunsuk', f: 'serious', t: "You don't love anything, man." },
    { s: 'asahi', f: 'neutral', t: "I love when Jaehyuk's wrong. It happens once a year. It's like Christmas." },
    { s: 'cherry', f: 'neutral', t: "Christmas was like two weeks ago, dumbass." },
    { s: 'asahi', f: 'neutral', t: "Then it's a miracle. Write it down, Sunoo." },
    { s: 'sunoo', f: 'happy', t: "I'm writing it on the specials board!" },
    { n: "And he did, in pink chalk, under TODAY'S CROISSANTS, with a heart: JAEHYUK WAS WRONG (1/4) ♡." },
    { s: 'junkyu', f: 'happy', t: "Okay, I'm just gonna see how bad it is out there—" },
    { s: 'halmeoni', t: "Junkyu-ya, don't you dare—" },
    { n: "He dared. He opened the door about a foot and the drift that had been leaning on it all afternoon came in to say hello, knee-high, all at once, across the doormat and into his shoes." },
    { s: 'junkyu', f: 'surprised', t: "IT'S IN MY SOCKS." },
    { s: 'halmeoni', t: "Shut it! Shut the door! What did I just say! Sunoo-ya, the broom!" },
    { ifEpiRoute: 'jihoon', then: [
      { n: "The door hadn't quite shut when a gloved hand caught it, and Park Jihoon came in with the snow, beanie white, nose pink, stamping like he'd walked here across the Arctic to make a point." },
      { s: 'jihoon', f: 'happy', t: "I walked here. In this. For you people. Somebody tell me I'm a hero." },
      { s: 'halmeoni', t: "You're tracking snow, is what you are. Boots off." },
      { n: "He took his boots off. Nobody in Hanlim had ever successfully said no to Sunoo's grandmother, and nobody had ever successfully said no to Jihoon when his face was cold, and watching the two of them meet in the middle was like watching weather fronts. Cherry got up, walked around the table, and sat down between Jihoon's chair and Solar's with absolutely no subtlety at all." },
      { s: 'jihoon', f: 'neutral', t: "Subtle, Cher." },
      { s: 'cherry', f: 'neutral', t: "I'm a big girl. I need the room." },
      { s: 'jihoon', f: 'neutral', t: "Prime Minister." },
      { s: 'jungwon', f: 'neutral', t: "Jihoon." },
      { n: "That was the whole conversation. It was, Solar thought, the longest the two of them had managed all year without anybody bleeding." }
    ], else: [
      { phone: [
        { from: 'jihoon', t: "Heard You're Trapped At Yeobo's. Enjoy Your Snow Prison" },
        { from: 'jihoon', t: "Some Of Us Are Home. Some Of Us Are Warm. Some Of Us Did Not Leave The House For Hot Chocolate Like Peasants" },
        { from: 'solar', t: "we have croissants. u have NOTHING" },
        { from: 'jihoon', t: "I Have Dignity" },
        { from: 'solar', t: "u have a bag of frozen peas and u know it" }
      ], contact: 'jihoon' }
    ] },
    { n: "By three the windows had gone blue, Halmeoni had fed them twice, and Jungwon had slid his chair around the corner of the table to sit next to her and go through the sheet, because he couldn't bear question three sitting there wrong. He did the thing when he concentrated. The dimples came out, both of them, like the math was telling him a joke nobody else got." },
    { s: 'cherry', f: 'happy', t: "Oh my God. Preppy dork's doing the dimple thing." },
    { s: 'jungwon', f: 'flustered', t: "I'm not doing anything." },
    { s: 'cherry', f: 'happy', t: "You're doing it RIGHT NOW. Kyu, look at him." },
    { s: 'junkyu', f: 'happy', t: "Aww, he's doing it!!" },
    { n: "Jungwon put his face very close to the textbook. Solar laughed so hard she had to put her pencil down, head back, the whole window full of snow behind her, and Junkyu said something about how he hadn't cried when she came back, his eyes had just been cold, and that made it worse." },
    { n: "Jungwon looked up from question four because she was laughing, and he liked to look when she laughed." },
    { glitch: 'epi-h-g-flicker' },
    { n: "He saw the specials board through her." },
    { n: "One second. Less. The pink chalk, the heart, JAEHYUK WAS WRONG, through her shoulder like she was a reflection in the window and not a girl sitting in it, the back of her chair through her ribs, and a colour on her that wasn't the lamp and wasn't the snow, a thin sick green. Then she was there again, solid, wiping her eyes, still laughing, and Cherry was mid-insult, and Junkyu was mid-sentence, and nobody else at the table had looked up." },
    { glitch: { near: true } },
    { n: "Jungwon looked down at question four. He read it three times. He didn't say anything. He'd always been very good at not saying anything in front of people. He'd had a lot of practice at home." },
    { place: 'Hanlim', time: 'Daytime', soft: true },
    { n: "The plough came through at four. Halmeoni released them like a prison warden with a soft spot, pressing a paper bag of day-old croissants into every pair of hands, and Jungwon walked Solar home along the one dug-out lane of pavement because his mother's car was buried in his own driveway and his house was only down the road from hers anyway." },
    { n: "It was very quiet out. The kind of quiet only heavy snow made, every sound swallowed, their own footsteps soft and squeaking. He waited until the café's light was two streets behind them." },
    { s: 'jungwon', f: 'serious', t: "You went thin." },
    { s: 'solar', t: "I've been eating, Won, I swear, I had like three croissants, your boyfriend senses are—" },
    { s: 'jungwon', f: 'serious', t: "Not like that." },
    { n: "Solar stopped walking. He stopped a step ahead of her and turned round, hands in his coat pockets, snow collecting in his hair." },
    { s: 'jungwon', f: 'serious', t: "I could see the specials board through you. Through your shoulder." },
    { s: 'jungwon', f: 'neutral', t: "I tried to explain it away. I had an hour and a half and a calculus textbook. I tried the lamp, and the window, and the fact that I slept four hours. None of them worked." },
    { s: 'jungwon', f: 'sad', t: "I'm usually very good at explaining things away." },
    { ifFlag: 'epi-h-notes', then: [
      { s: 'jungwon', f: 'serious', t: "First the notes. Now this." }
    ] },
    { ifFlag: 'epi-h-alone', then: [
      { n: "Her hand went into her sleeve on its own, over the mark from Tuesday night. He watched it go. He didn't ask about that either." }
    ] },
    { choose: [
      { t: "(Tell him the truth. You don't know what it is.)", flag: 'epi-h-snow-truth', then: [
        { s: 'solar', t: "I don't know what it is. I don't. It's like I left a door open somewhere and I can feel the draft." },
        { n: "He was quiet for a while. Then he took her hand out of her sleeve and put it in his own coat pocket, with his, where it was warm." },
        { s: 'jungwon', f: 'neutral', t: "Okay. Then we'll both not know. That's more efficient than you not knowing by yourself." },
        { bond: { jungwon: 1 } }
      ] },
      { t: "\"It's nothing. I'm just tired.\"", flag: 'epi-h-snow-nothing', then: [
        { n: "He looked at her for a long time. Long enough for the snow to settle on her eyelashes and melt." },
        { s: 'jungwon', f: 'neutral', t: "Okay." },
        { n: "He didn't believe her. He let her have it anyway, which was worse, and also kind. Then he took her hand and put it in his coat pocket with his, like that had been the plan all along." }
      ] },
      { t: "(Kiss him so he'll stop looking at you like that.)", flag: 'epi-h-snow-kiss', stat: { courage: 1 }, then: [
        { n: "She went up on her toes in the snow and kissed him, cold noses and croissant-sugar and all, and he let her, and for a second his hands came out of his pockets and found her coat." },
        { s: 'jungwon', f: 'flustered', t: "That was a very good kiss. And a very bad argument." },
        { n: "But he put her hand in his pocket with his on the rest of the way home, and he didn't let go of it." }
      ] }
    ] },
    { n: "At her gate Nana was already at the front window, a white blur losing his entire mind. Jungwon let go of her hand last." },
    { s: 'jungwon', f: 'neutral', t: "Text me when you're inside. I can see your door from the corner." },
    { n: "He looked at her, at all of her, top to bottom, the way he'd looked at question four." },
    { s: 'jungwon', f: 'sad', t: "...I can see you." },
    { n: "She went inside. In the hall mirror, with her coat still on, she checked that she couldn't see the coats on the hooks behind her through herself. She checked twice." }
  ] },

  // ───────────────────────────── 1/5, evening: the clocks ─────────────────────────────
  { id: 'epi-h-clocks', date: '1/5', slot: 'evening', consumes: true, title: 'twelve o\'clock', place: "Hanlim · Yeobo's", time: 'Evening', scene: [
    { music: 'epi-h-goofy' },
    { n: "Heeseung had turned the corner table at Yeobo's into a crime scene. The ledger was open in the middle, every page tabbed, the bake-sale receipts laid out around it in date order, and above it, taped to the wall where Halmeoni's calendar usually hung, was a printout of the forum post, WHERE IS THE BAKE-SALE TIN??, because Niki had decided it would be motivational, like a wanted poster." },
    { s: 'heeseung', f: 'serious', t: "Every won. I want every won on paper before school starts." },
    { s: 'jake', f: 'happy', t: "Hee. It's a bake sale. The tin's not gonna testify." },
    { s: 'heeseung', f: 'serious', t: "The tin is the only one of us who hasn't lied about a retreat." },
    { n: "Silence. Behind the counter, Sunoo dropped a spoon." },
    { s: 'niki', f: 'happy', t: "Hyung. BARS." },
    { s: 'heeseung', f: 'flustered', t: "That wasn't a bar, that was a fact, I'm stressed—" },
    { n: "Halmeoni came round the counter with a tray, the way she had come round the counter with a tray every evening since the twentieth, because in her opinion they'd all come back from the mountains looking like coat hangers. She put a croissant down in front of each of them. She put two in front of Solar." },
    { s: 'halmeoni', t: "Eat. You're all bones. That temple didn't feed you?" },
    { s: 'solar', t: "Rice. So much rice. And, um. Gruel. Temple gruel." },
    { glitch: { strain: 1 } },
    { s: 'halmeoni', t: "Hm." },
    { n: "Just that. She moved a third croissant onto Solar's plate and went back behind the counter, and over her shoulder Sunoo mouthed *temple gruel???* with his whole face." },
    { s: 'jake', f: 'happy', t: "Temple gruel. Wow. Tem-pull yourself together, Sol." },
    { s: 'niki', f: 'neutral', t: "I'm going to report you to the forum for that." },
    { s: 'jake', f: 'neutral', t: "You ARE the forum." },
    { n: "It was 7:41 by the clock over the counter when Sunoo said something about starting to close. It was 7:41 on the oven timer, counting down on the last tray of tomorrow's croissants, and 7:41 in green on the register's little screen, and on Niki's phone lying face-up by the ledger, and on Solar's." },
    { n: "Then it was twelve." },
    { glitch: 'epi-h-g-clocks' },
    { music: 'epi-h-dread' },
    { n: "Not a tick. Not a slide. The hands on the wall clock went straight up together like somebody had called them, the register blinked 12:00, the oven timer stopped halfway through a beep and said 12:00 and nothing else. The little cat clock by the tip jar with the swinging tail stopped mid-swing. Both phones on the table said 12:00 AM. The whole room held still around them like a breath." },
    { s: 'niki', f: 'surprised', t: "...Okay, that's not funny." },
    { s: 'jake', f: 'surprised', t: "It's a power thing. It's gotta be a power thing." },
    { s: 'sunoo', f: 'serious', t: "The lights are on, hyung." },
    { n: "Heeseung, because he was Heeseung, wrote it down. *7:41 → 12:00. All clocks. Phones too.* In the margin of the ledger, under the bake-sale float, in the same neat hand." },
    { n: "The phones came back first. Niki's buzzed and said 7:42 like nothing had happened, and Solar's said it a second later. The clocks didn't. Halmeoni lifted the wall clock off its nail, took the battery out, put it back in, and hung it up again with the hands still pointing straight up, and looked at it the way she looked at a delivery man who'd brought the wrong flour." },
    { s: 'halmeoni', t: "My mother used to say that when every clock in a house stops at once, somebody's come home who wasn't expected." },
    { n: "She wasn't looking at the clock when she said it. She was looking at Solar." },
    { s: 'sunoo', f: 'sad', t: "Halmeoni, that's so creepy." },
    { s: 'halmeoni', t: "It's not creepy. It's polite. The house is saying welcome back." },
    { n: "Solar's hand was in her coat pocket. She didn't remember putting it there. Her fingers had closed around the can, cold through the lining, the ridges of the pull-tab she had never pulled." },
    { choose: [
      { t: "\"What happens after that? When somebody comes home?\"", stat: { courage: 1 }, then: [
        { s: 'halmeoni', t: "After that? You feed them." },
        { n: "She said it like it was obvious, like it was the end of the story and the whole point of it, and pushed the plate an inch closer." }
      ] },
      { t: "(Laugh it off with the others.)", stat: { charm: 1 }, then: [
        { s: 'solar', t: "Okay, well, the house can say welcome back to literally anyone else." },
        { n: "Jake laughed too loud. Niki laughed too loud. Heeseung didn't laugh at all, but he closed the ledger over his note, which was the nicest thing anybody did all night." }
      ] }
    ] },
    { n: "Then the oven started screaming, because the timer had stopped and nobody had taken the croissants out, and for five minutes there was smoke, and Sunoo flapping a tea towel at the alarm, and Niki propping the door open into the snow, and Jake carrying the tray out to the step like a casualty, saying something about toast in peace. It was funny. Everyone agreed it was funny." },
    { n: "On the way out, Solar looked back through the window at the warm yellow café, the smoke still drifting slow under the lights, Sunoo's grandmother wiping down the counter, and every clock in the room said midnight, and it wasn't." }
  ] },

  // ───────────────────────────── 1/5, late: fight 2, unseen ─────────────────────────────
  { id: 'epi-h-unseen', date: '1/5', slot: 'late', title: 'unseen', place: "Hanlim · Yeobo's · After Closing", time: 'Late Night', scene: [
    { music: 'epi-h-half' },
    { glitch: { stage: 3 } },
    { n: "She didn't remember falling asleep. She remembered her bed, and Nana's weight across her feet, and the clock on her nightstand reading 11:58 and her thinking very clearly, *don't look at it at twelve*, and then she was standing in Yeobo's in her socks." },
    { n: "The chairs were up on the tables the way Sunoo left them every night. The specials board still said JAEHYUK WAS WRONG (1/4) ♡ in pink chalk. Every clock in the café said 12:00. And through the front window the moon was enormous, far too big, swollen yellow and close enough to touch, and the light coming off it was green." },
    { glitch: 'epi-h-g-unseen' },
    { dark: true },
    { n: "The chairs weren't chairs. She saw it the way you see a face in a pattern, all at once and then you can't unsee it: tall dark shapes upended on every table, coffins, standing where Halmeoni's chairs had been a second ago, and the smell of the café, butter and coffee, gone thin and cold and electric, like the air in a stairwell nobody had used in years." },
    { n: "The bell over the door rang. Nobody opened it." },
    { n: "They came in anyway, the way they used to come up the stairs: a boxer's walk first, white hair, gloves already up, and the others falling in round him with their weapons out, and between their feet a small white dog with a red collar, who stopped dead in the doorway and looked straight at her." },
    { n: "Koromaru barked. Once, sharp, right at her." },
    { n: "*Koro. Easy. There's nothing there.* Akihiko didn't even glance over. He was watching the back of the café, where the kitchen door had gone black and something with a mask was pushing through it." },
    { n: "She said his name. She said it loud enough that her throat hurt, standing three steps from him in Sunoo's grandmother's café, and it went nowhere, it went out of her and into the green and didn't land. And then the voice she'd have known in her sleep came from everywhere and nowhere, soft and worried, reading the room the way she always had." },
    { n: "*Shadows ahead. Three of them. And... there's something else. An unknown signal. It's right in the middle of you all. I don't know what it is.*" },
    { battle: { id: 'epi-hoax-2', kind: 'scripted', script: 'epi-hoax-2', title: 'Unseen', forced: true,
      desc: 'Yeobo’s after closing, the clocks stopped at midnight and the chairs gone to coffins. S.E.E.S. are fighting, and they can’t see her.',
      notes: 'Half-present fight 2 (FEMC-EPILOGUE-PLAN 2.4, the ghost slot): Solar is in the party but untargetable; acts every other round; portrait flickers between turns; allies Act Freely; no Direct, Bond, All-Out or Theurgy; her heals land and allies bark ("Who did that?"); navigator reads "an unknown signal". Akihiko always plus two by her highest S.E.E.S. ranks; Koromaru can see her (barks at her slot). Cannot be lost: she fades home.' } },
    { n: "She fought anyway. Her hands knew how. She moved with them the way she'd moved with them a hundred nights, round the counter, between the coffins, and nobody made room for her and nobody had to, because nothing touched her, not the Shadows, not the light, not them." },
    { n: "When the last one came apart against the pastry case, Koromaru trotted across the tiles and sat down at her feet and looked up, tail going, pleased with both of them. She knelt. She put her hand out. His nose went right through her palm, and he sneezed, offended, and looked at her like it was her fault." },
    { n: "*Koro. Come on.* Akihiko had stopped at the door. He looked back once, at the dog sitting by an empty patch of floor in a café that wasn't his, and his jaw went tight in a way she'd seen exactly twice in her life, and then he turned and went out into the green, and the bell rang behind him, and the dog went too, looking back the whole way." },
    { dark: false },
    { place: 'Hanlim · Home · Her Room', time: 'Late Night', soft: true },
    { n: "She was on her bedroom floor with her cheek on the rug. Nana was standing over her, whining, licking her ear in long worried strokes like he'd been trying to wake her for a while." },
    { n: "The clock on her nightstand said 12:04. It was moving. She watched it go to 12:05 to make sure." },
    { n: "Her palm was still cold where the dog's nose had gone through it. She held it against her chest under the blanket until it wasn't." },
    { flag: 'epi-h-unseen' }
  ] },

  // ───────────────────────────── 1/6, evening (route jungwon): the name ─────────────────────────────
  { id: 'epi-h-window', date: '1/6', slot: 'evening', consumes: true, flag: 'epi-route-jungwon', title: 'the name', place: "Hanlim · Jungwon's Street", time: 'Evening', scene: [
    { music: 'epi-h-romance' },
    { phone: [
      { from: 'jungwon', t: "are you awake." },
      { from: 'solar', t: "its like 10:30 ofc im awake im not 80" },
      { from: 'jungwon', t: "my parents are asleep." },
      { from: 'jungwon', t: "i don't know why i told you that." },
      { from: 'solar', t: "yes u do" },
      { from: 'solar', t: "look out ur window in 6 minutes" },
      { from: 'jungwon', t: "solar it's minus eleven." },
      { from: 'jungwon', t: "solar." },
      { from: 'jungwon', t: "solar it's been four minutes, are you walking here right now." }
    ], contact: 'jungwon' },
    { n: "She was. Down the road and round the corner in her biggest coat and her pyjama bottoms tucked into her boots, the snow from Thursday still banked up waist-high along the kerbs and frozen hard on top, Jungwon's street lit orange and empty and so quiet she could hear the streetlight hum. His mother's car sat in the driveway under a white crust. The whole house was dark except one window over the garage." },
    { n: "The curtain moved. Then the window opened, and Yang Jungwon, student council president of two years, a boy who had never in his life been outside after curfew without a typed reason, looked down at her in a hoodie with an expression like she'd personally asked him to commit a felony." },
    { s: 'jungwon', f: 'surprised', t: "Go home. You'll get frostbite." },
    { s: 'solar', t: "Come down, then." },
    { s: 'jungwon', f: 'serious', t: "The stairs creak. The front door beeps. My mother can hear the front door beep from inside a dream." },
    { s: 'solar', t: "Won. There's a garage roof right there." },
    { n: "He looked at the garage roof. He looked at her. He looked at the garage roof again with the specific face of somebody running the numbers and not liking any of them." },
    { n: "It took him four minutes. He got one leg over the sill, then the other, then sat on the edge of the roof in the snow for a long time with both hands flat beside him like the roof might buck him off, and then he slid, not on purpose, the last metre, and landed in the drift by the drainpipe up to his hips, and somewhere in the house next door a dog started barking, and from inside his own house, faint and furious, Maeumi joined in." },
    { n: "They both froze. Solar had both hands over her mouth. A light came on two houses down, stayed on for an endless ten seconds, and went off again." },
    { s: 'jungwon', f: 'flustered', t: "Don't." },
    { s: 'solar', t: "I didn't say anything." },
    { s: 'jungwon', f: 'flustered', t: "You're going to say noodle arms. Niki already says noodle arms." },
    { s: 'solar', t: "I was going to say my hero, actually." },
    { n: "He climbed out of the drift with what dignity he had left and brushed himself off, and then he just stood there with snow in his hood and looked at her under the streetlight, and she pulled him into the shadow behind the hedge, and for a while neither of them said anything, because neither of them needed to." },
    { ifYear: { xmas: 'jungwon' }, then: [
      { n: "He tasted like toothpaste, like a boy who'd been in bed with the light off ten minutes ago, and she thought of a croissant with red icing, split exactly down the middle, and a tin he'd counted twice and lost count of, and how she'd said his name and he'd lost count again." }
    ] },
    { n: "Afterwards they sat on the low wall at the bottom of his drive with their shoulders pressed together, breath going up in clouds. He was doing something with his fingers on his knee. Tapping. Small, steady, one finger after another, like counting under his breath without the breath." },
    { s: 'solar', t: "What are you counting?" },
    { n: "His fingers stopped. He looked at them like they belonged to someone else." },
    { s: 'jungwon', f: 'sad', t: "There's a date in my head. I count to it. I don't mean to." },
    { s: 'solar', t: "A date for what?" },
    { s: 'jungwon', f: 'neutral', t: "I don't know." },
    { n: "Then, after a long time, quieter, he corrected himself, which he only ever did when it mattered." },
    { s: 'jungwon', f: 'sad', t: "That's not true. I know. It isn't here." },
    { n: "That was all. He didn't say where it was. She didn't ask, and she knew, the way she knew the sound of his shoes on the council room floor, that he was grateful she didn't, because he never asked her either. Not once. Not about the radio, or the can, or the way she turned round in crowds sometimes like someone had called her from the far end of a hallway." },
    { s: 'solar', t: "You never make me say mine." },
    { s: 'jungwon', f: 'neutral', t: "No." },
    { s: 'solar', t: "Why not?" },
    { s: 'jungwon', f: 'neutral', t: "Because you'd say it when you were ready. And I didn't want you to say it for me." },
    { n: "The streetlight hummed. Somewhere very far off a car went past on the main road, swishing through slush, and was gone. She looked at the snow banked up along his mother's flowerbeds and thought about a rooftop, a train platform, a pink and black can, a boy grinning with his tongue between his teeth. She'd started to say it to this boy maybe a dozen times since the gym. She'd stopped every single time." },
    { s: 'solar', t: "He would've—" },
    { n: "She stopped. Like always." },
    { choose: [
      { t: "(Say it. All of it.)", flag: 'epi-h-window-first', stat: { courage: 1 }, then: [
        { s: 'solar', t: "Haechan. He would've laughed at you on that roof. Haechan would've laughed so hard he fell off it too." },
        { n: "The name went out into the cold and hung there. Nothing happened. The street didn't end. The snow didn't go up. Jungwon didn't flinch; he just closed his eyes for a second, like someone had confirmed a number he'd already worked out." },
        { s: 'jungwon', f: 'sad', t: "Haechan." },
        { n: "He said it the way he said everyone's name, carefully, completely, all the syllables in the right place. Like it was a name he'd said before, somewhere, in a different kind of quiet." }
      ] },
      { t: "(Let him say it.)", flag: 'epi-h-window-waited', then: [
        { n: "She didn't finish. She didn't have to. He'd heard the shape of it a dozen times now, the half-breath, the *Hae—*, the door swinging shut on it." },
        { s: 'jungwon', f: 'sad', t: "Haechan." },
        { n: "He said it the way he said everyone's name, carefully, completely, all the syllables in the right place. Like it was a name he'd said before, somewhere, in a different kind of quiet. Her whole body went still against him." },
        { s: 'solar', t: "...Haechan. Yeah. Haechan." },
        { n: "The name went out into the cold and hung there. Nothing happened. The street didn't end. The snow didn't go up." }
      ] }
    ] },
    { s: 'solar', t: "You know who he is." },
    { s: 'jungwon', f: 'neutral', t: "I know who he is." },
    { s: 'jungwon', f: 'serious', t: "Not here." },
    { n: "That was as much as he would say about it, then or ever, probably, and it was more than enough. She put her face into his shoulder. He let her. His hoodie smelled like his room, like laundry and pencil shavings and the inside of the car." },
    { s: 'jungwon', f: 'neutral', t: "You can say it whenever you want. To me. I'm not going anywhere because of it." },
    { s: 'solar', t: "That's such a president thing to say." },
    { s: 'jungwon', f: 'happy', t: "I'm a president. I say president things." },
    { n: "Getting him back up onto the garage roof took both of them, the recycling bin, and a boost from her laced hands that she would be bringing up at every council meeting until the day she died, and when the window finally slid shut behind him and the light went off, she stood under it in the snow for another minute anyway, in case." },
    { bond: { jungwon: 1 } },
    { flag: 'epi-h-said-name' },
    { n: "She said it once more on the walk home, to nobody, to the snowbanks. Nothing answered. She'd have been more scared if something had." }
  ] },

  // ───────────────────────────── 1/6, evening (route jihoon): the porch ─────────────────────────────
  { id: 'epi-h-porch', date: '1/6', slot: 'evening', consumes: true, flag: 'epi-route-jihoon', title: 'the porch', place: "Hanlim · Jihoon's House · Porch", time: 'Evening', scene: [
    { music: 'epi-h-jihoon' },
    { n: "Jihoon was on his porch in a parka over his pyjamas, pouring a kettle of hot water very slowly into a flowerpot." },
    { n: "There were six of them along the rail, the same six there had always been, every summer of Solar's life, red and pink and a white one that trailed. Right now they were six clay pots of frozen dirt with brown stalks sticking out, and the water was steaming off them into the porch light, and he was being extremely careful about it, the way you'd be careful pouring tea for somebody old." },
    { s: 'solar', t: "Jihoon. You're watering ice." },
    { s: 'jihoon', f: 'neutral', t: "I'm thawing it. Different verb. Look it up." },
    { s: 'solar', t: "It's minus eight." },
    { s: 'jihoon', f: 'happy', t: "And these are the toughest plants in Hanlim. They've survived five winters of me. They can survive one more, with the proper royal treatment." },
    { n: "He moved on to the next pot. She sat down on the top step with her knees up inside her coat, the way she'd sat on this step since before she could tie her shoes, and didn't say anything about whose flowers they were. Nobody ever did. It was the one rule all seven of them had kept since they were thirteen without anybody ever having to say it out loud." },
    { ifFlag: 'epi-h-jihoon-chose', then: [
      { s: 'jihoon', f: 'neutral', t: "Haven't opened the drawer since the party, by the way." },
      { n: "He said it to the third flowerpot, apropos of nothing, like announcing the weather. She didn't look at him, because she knew he couldn't have said it if she had." },
      { s: 'solar', t: "Okay." },
      { s: 'jihoon', f: 'neutral', t: "Okay. Just so it's in the minutes." }
    ] },
    { ifYear: { xmas: 'jihoon' }, then: [
      { s: 'jihoon', f: 'happy', t: "How's my son. The plush one. Not the real one, I know how the real one is, the real one is perfect." },
      { s: 'solar', t: "He sleeps on my desk. Nana's jealous." },
      { s: 'jihoon', f: 'happy', t: "As he should be. That claw held for me. That's destiny." }
    ] },
    { n: "He was halfway through a story about the forum, about how somebody under hanlim_accountability had replied to his comment with a paragraph about fiscal responsibility and he'd answered with a picture of Nana in sunglasses, when the music came." },
    { glitch: 'epi-h-g-jihoon' },
    { n: "Piano. From nowhere. Four notes, slow and clear and sad, the way they'd come down a long blue hall when the elevator doors opened, and under the porch light Solar went thin. She felt it happen this time, like stepping off a kerb she hadn't seen, the cold going through her instead of onto her, and she looked down at her own hand on her knee and saw the step through it." },
    { n: "The kettle stopped pouring." },
    { n: "Then it started again, and Jihoon kept talking, about Nana, about the sunglasses, about how many likes, a little too fast, a little too loud, looking very hard at the flowerpot and not at all at her, and she came back, solid, her hand her hand again, and he still didn't look." },
    { s: 'solar', t: "You saw that." },
    { s: 'jihoon', f: 'neutral', t: "Saw what. I'm pouring. It's a precision job." },
    { s: 'solar', t: "Park Jihoon." },
    { s: 'jihoon', f: 'happy', t: "What retreat. I was home. I'm always home. Ask anyone. Ask the flowers—" },
    { s: 'solar', t: "Jihoon." },
    { n: "He put the kettle down on the rail. He stood there with his back to her for a long time, the steam going up off the last pot, and his shoulders did something, and stopped." },
    { s: 'jihoon', f: 'sad', t: "I remember." },
    { s: 'jihoon', f: 'sad', t: "All of it. I was hoping you didn't." },
    { flag: 'epi-h-jihoon-remembers' },
    { n: "He came and sat down next to her on the step, the way he'd sat next to her on this step his whole life, and pulled his knees up too, and they were two very tall and very short people in big coats looking at the street." },
    { s: 'jihoon', f: 'neutral', t: "I remember the dorm. And the stupid red armband. And the monorail. And the dog, who liked me better than you, by the way, that's in the record now." },
    { s: 'jihoon', f: 'happy', t: "I arm-wrestled a guy called Akihiko eleven times. He won eleven times. I've told nobody that. You tell anyone, I'll deny it in court." },
    { s: 'jihoon', f: 'neutral', t: "And a goblin came out of my head, Sol. With a club. A goblin with a club came out of my actual head and I thought, sure. Yeah. This is my life now." },
    { s: 'solar', t: "Then why'd you pretend?" },
    { n: "He didn't answer right away. He picked at the frost on the step between his boots." },
    { s: 'jihoon', f: 'sad', t: "Because if it happened, then I went into a whole other world looking for you, and you had a whole life over there. A whole year. People. That guy. And you came home anyway." },
    { s: 'jihoon', f: 'sad', t: "And I don't know what to do with that. And then you go see-through on my porch, and I know what that means, and I hate it, so. Pretending was faster." },
    { n: "The porch light buzzed. Down the street someone's car alarm went off and stopped. She looked at the six frozen pots, steaming a little still, and at the side of his face, and at his hands, which were shaking, which he would have said was the cold." },
    { choose: [
      { t: "(Lean into him and stay.)", flag: 'epi-h-porch-stay', then: [
        { n: "She put her head on his shoulder. It was the most natural thing she'd done in weeks. He went still, and then he let out a breath that had probably been in there since December, and leaned his head on top of hers." },
        { s: 'jihoon', f: 'sad', t: "Don't go see-through again. That's an order." },
        { s: 'solar', t: "I'll try." },
        { s: 'jihoon', f: 'neutral', t: "That's not how orders work. You say yes, Your Majesty." },
        { bond: { jihoon: 1 } }
      ] },
      { t: "\"For the record, the dog liked me better.\"", flag: 'epi-h-porch-joke', stat: { charm: 1 }, then: [
        { s: 'jihoon', f: 'happy', t: "LIES. Slander. He licked my face every single morning—" },
        { s: 'solar', t: "Because you smelled like curry." },
        { s: 'jihoon', f: 'happy', t: "Because he RESPECTED me." },
        { n: "He laughed, a real one, and it went a little wrong in the middle, cracked, and he turned it back into a laugh before it could be anything else. She let him. She bumped his shoulder with hers and left it there." },
        { bond: { jihoon: 1 } }
      ] }
    ] },
    { s: 'jihoon', f: 'neutral', t: "Go home, Sol. Go home to your Prime Minister before he files a missing persons report in full sentences." },
    { n: "But he walked her to the end of his path, and stood there in his parka and pyjamas until she reached the corner, and when she turned round to wave he was already back on the porch, picking up the kettle, pouring what was left of the warm water very slowly into the last pot." }
  ] },

  // ───────────────────────────── 1/6, evening (route council): the war room ─────────────────────────────
  { id: 'epi-h-war-room', date: '1/6', slot: 'evening', consumes: true, flag: 'epi-route-council', title: 'forum war', place: "Hanlim · Yeobo's", time: 'Evening', scene: [
    { music: 'epi-h-goofy' },
    { n: "By Saturday night the motion had two hundred and six signatures, and Yeobo's back table had become a war room. Laptops. Three phones on chargers. Sunoo's grandmother's good extension cord. Heeseung's ledger in the middle like a holy text, and above it, still taped to the wall, every clock in the café pointing straight up at midnight, which nobody was talking about." },
    { phone: [
      { from: 'forum', t: "hanlim_accountability: Update: 206 signatures. The council has not answered a single question. Where were you? Where is the tin?" },
      { from: 'forum', t: "jihoonie: they were at a temple 🙏 learning humility 🙏 it didnt work 🙏" },
      { from: 'forum', t: "anon_4471: wait is the tin literally missing or is that a bit" },
      { from: 'forum', t: "rikiniki_real: the tin is FINE i am a normal student who knows the tin is fine" }
    ], contact: 'forum' },
    { s: 'heeseung', f: 'serious', t: "Niki. 'rikiniki_real.'" },
    { s: 'niki', f: 'neutral', t: "That's not me." },
    { s: 'heeseung', f: 'serious', t: "It's literally your name with 'real' on it." },
    { s: 'niki', f: 'happy', t: "So you admit it's a real person." },
    { n: "Heeseung had been a moderator on the Hanlim forum since first year, a fact which had never been useful to anyone until this week. He hit a button. Niki's phone buzzed. Niki looked at it, betrayed." },
    { s: 'niki', f: 'surprised', t: "You BANNED me?! That's my eighth one!" },
    { s: 'heeseung', f: 'neutral', t: "And I'll ban the ninth." },
    { s: 'jake', f: 'happy', t: "Okay, okay, okay. Forget the alts. We fight memes with memes. Look." },
    { n: "He turned his laptop round. It was a picture of the council from last year's yearbook with all their faces replaced by Layla's, and in Impact font across the top, WHERE IS THE TIN? and across the bottom, WE'RE NOT SPENDING IT, WE'RE SAVING IT FOR A RAINY DOUGH." },
    { s: 'jay', f: 'neutral', t: "Bro." },
    { s: 'jake', f: 'happy', t: "Dough. Because it's a bake sale. And money is dough—" },
    { s: 'jay', f: 'neutral', t: "I know what dough is, bro. I'm asking why." },
    { s: 'jay', f: 'neutral', t: "Football's got ninety guys and every one of them follows me. I post 'the council's fine, leave it', it's done in an hour." },
    { s: 'sunghoon', f: 'neutral', t: "And Sunghoon will handle the undecided. The undecided are mostly girls. Sunghoon has already DMed eleven of them and four have taken their names off." },
    { s: 'solar', t: "Sunghoon, what did you SAY to them?" },
    { s: 'sunghoon', f: 'flustered', t: "Nothing. I was polite. I simply asked them how their break was going. It's not Sunghoon's fault people find him persuasive." },
    { s: 'jake', f: 'neutral', t: "Does Cherry know you DMed eleven girls?" },
    { s: 'sunghoon', f: 'serious', t: "Cherry knows everything Sunghoon does. Cherry will know soon about other things. Soon." },
    { n: "The whole table groaned. Sunoo, from behind a stack of A3 paper, held up the first of his posters. Pink, laminated, a hand-drawn tin with a smiling face and little arms giving a thumbs up, and underneath in bubble letters, THE TIN IS FINE ♡ VOTE NO ♡." },
    { s: 'sunoo', f: 'happy', t: "I did forty. I used the laminator at the library. The librarian asked me what it was for and I panicked and said a temple." },
    { s: 'heeseung', f: 'flustered', t: "Sunoo-ya, why does everything come back to the temple—" },
    { s: 'sunoo', f: 'sad', t: "It's the only lie I know!!" },
    { n: "Jungwon hadn't said anything for twenty minutes. He'd told his mother he was buying printer ink, and he had bought printer ink, it was in a bag at his feet, and Sunoo had already taken it out of the bag for the posters. He was sitting at the end of the table with Heeseung's ledger and a pencil, and he was counting. Not the tin. He didn't have the tin. Just the numbers, from memory, under his breath, the bake-sale float and every sale after it, down the page in his own small hand beside Heeseung's." },
    { s: 'jungwon', f: 'neutral', t: "It matches." },
    { s: 'heeseung', f: 'surprised', t: "To the won?" },
    { s: 'jungwon', f: 'neutral', t: "To the won. I counted it twice the night we came back." },
    { n: "He looked at Solar for a second, very briefly, and back at the ledger, and she had to look at the ceiling." },
    { s: 'jay', f: 'neutral', t: "So where's the actual tin." },
    { s: 'jungwon', f: 'neutral', t: "In the ballot box. In the gym. Somebody decided it was safest there." },
    { s: 'jake', f: 'surprised', t: "Who?" },
    { n: "Everyone looked at each other. Nobody said anything. Niki whistled." },
    { s: 'solar', t: "Okay. So on Thursday we walk into the gym in front of the whole school and get the tin out of a ballot box on a table covered in half-blown-up balloons and string lights that don't work." },
    { s: 'sunoo', f: 'sad', t: "...It's going to look so bad, unnie." },
    { s: 'solar', t: "Then let's not let it look bad." },
    { n: "It came out of her before she'd thought it through, the way her best ideas always did, the way the bake sale had. She looked round the table. Seven faces looked back." },
    { s: 'solar', t: "We finish it. The gym. We voted on decorations and nobody ever finished them. So we finish them. If they want to put us on trial in there, it's going to be the best-looking trial Hanlim's ever had." },
    { s: 'jake', f: 'happy', t: "Oh, that's so petty. I love it." },
    { s: 'heeseung', f: 'neutral', t: "We'd need the advisor's key. And the ladder. And—" },
    { s: 'jungwon', f: 'neutral', t: "I'll get the key." },
    { n: "Everyone turned. He was still writing." },
    { s: 'jungwon', f: 'neutral', t: "I'm the president. It's my gym." },
    { choose: [
      { t: "\"I'll write the post. Our side, on the forum.\"", flag: 'epi-h-war-sol-post', stat: { charm: 1 }, then: [
        { n: "She took Jake's laptop and wrote it, and deleted it, and wrote it again, and Heeseung read it over her shoulder and only changed two words, which from Heeseung was a standing ovation." }
      ] },
      { t: "\"I'll go through the receipts with Heeseung. Every won.\"", flag: 'epi-h-war-sol-receipts', stat: { knowledge: 1 }, then: [
        { n: "She pulled her chair round next to Heeseung and he looked so relieved he nearly hugged her, and for an hour they matched paper to pencil while Niki narrated it like a sports commentator." }
      ] },
      { t: "\"I'll do the gym. The lights are mine.\"", flag: 'epi-h-war-sol-gym', stat: { proficiency: 1 }, then: [
        { n: "She started a list on a napkin. String lights, the box of balloons from the storage room, the silver ones and the blue ones, and Sunoo leaned over and added *glitter* in pink pen, and Jay crossed it out, and Sunoo added it again." }
      ] }
    ] },
    { bond: { council: 1 } },
    { flag: 'epi-h-gym-plan' },
    { n: "Behind them, over the counter, the clocks still said midnight. Halmeoni brought a fresh pot of barley tea and set it down in the middle of the war room and stood there a moment, looking at the eight of them bent over one ledger, and said nothing, and went back to her counter, and Solar decided that counted as approval." }
  ] },

  // ───────────────────────────── 1/8, early: make-up exams ─────────────────────────────
  { id: 'epi-h-makeup', date: '1/8', slot: 'early', consumes: true, title: 'make-up', place: 'Hanlim · School · Classroom', time: 'Morning', scene: [
    { music: 'epi-h-exam' },
    { n: "Room 3-4 had been set up for the make-ups with every second desk empty, so the third-years who'd missed exam week sat in a scattered grid like the last pieces on a chessboard. Cherry two rows over, chewing her pen already. Heeseung by the window, sitting like a man about to be sentenced. And behind Solar, close enough that she could hear him crack his knuckles, Park Jihoon." },
    { n: "Jungwon was in another room. He was always in another room. They'd taken him down the hall with the AP kids, and before he went he'd stopped at her desk for one second and put a pencil on it, sharpened, and a granola bar, and said *eat that after*, and gone, and that had been the whole of it." },
    { n: "The proctor was Ms. Miyawaki, the student teacher from Japan who ran the after-school games club and had once, famously, beaten the whole of the second-year boys at a fighting game at the culture festival without looking up from her lunch. She came down the row with the papers face-down and stopped at Solar's desk." },
    { s: 'sakura', t: "Kim Solar. Third year. You missed the whole week." },
    { s: 'solar', t: "Temple stay. In Gangwon-do. They took our phones at the gate." },
    { glitch: { strain: 1 } },
    { s: 'sakura', t: "Mm. Very peaceful, I'm sure." },
    { n: "She put the paper down. Calculus. She looked at Solar's face for a moment the way she probably looked at a player's opening moves, already knowing how the match went." },
    { s: 'sakura', t: "You have the face of someone who skipped every side quest and walked straight into the boss room at level four." },
    { s: 'solar', t: "...Is that a no-studying face?" },
    { s: 'sakura', t: "It's a speedrun face. Show your working. Partial credit is real. Even in life." },
    { n: "She went on down the row. Solar turned the paper over. Question one was related rates. A ladder, sliding down a wall at two feet per second. Somewhere in another room, she knew for certain, a boy with dimples had just turned over the same question and not even blinked." },
    { n: "It was forty minutes in, the room nothing but scratching pencils and the radiators knocking, when the girl by the door made a noise." },
    { glitch: 'epi-h-g-upward' },
    { n: "Outside the long windows the snow was falling up." },
    { n: "Not blowing. Not swirling in an updraft off the roof. Falling, calm and steady and thick as it had come down on Thursday, every flake drifting slowly upward past the glass from the courtyard toward the sky, like the whole morning had been played backward. The whole room saw it. Pencils stopped all down the grid. Heeseung half stood up." },
    { s: 'sakura', t: "Eyes on your own papers. It's an inversion. Warm air, cold air. It's a weather thing." },
    { n: "Then, quietly, to herself, watching it, so quiet that only the front row heard," },
    { s: 'sakura', t: "...That's not what an inversion does." },
    { n: "Solar looked down at her paper, because that was the rule, and saw her own hand on it go thin. The desk through her knuckles. The pencil line through her wrist. One second, two, the green cold going through her like the draft from a door, and then she was back, gripping the pencil hard enough that the lead snapped." },
    { ifEpiRoute: 'jihoon', then: [
      { n: "Behind her the scratching stopped. Then something small slid onto the corner of her desk from behind, nudged by one long finger: an eraser, one of the white ones, and on it in black pen, in letters so tiny he must have done them with the point of a compass, *U DROPPED THIS. (U DIDN'T.)*" },
      { n: "She didn't turn round. She closed her hand around it. Ms. Miyawaki, at the front, watched the whole thing happen and turned a page of her own book." }
    ], else: [
      { n: "Behind her Jihoon's pencil stopped. She heard it stop. She waited, and it was the longest second of the whole exam, and then it started again, scratching, steady, a little too loud, like a boy who had seen absolutely nothing at all and was going to go on seeing it all morning." }
    ] },
    { n: "The snow fell up for nine minutes, and then it just stopped, and hung there a moment, and came down properly, like it was embarrassed. She did question four. She showed her working." },
    { place: 'Hanlim · School', time: 'Daytime', soft: true },
    { music: 'epi-h-goofy' },
    { n: "By lunch every first-year at Hanlim had a video of the upward snow, the forum had a thread called INVERSION OR GHOST COUNCIL (poll), and Solar's phone buzzed twice on the cafeteria table before she'd even sat down." },
    { phone: [
      { from: 'school', t: "Notice: A motion concerning the Student Council has been formally filed with the Student Affairs Office. A hearing will be held Thursday, January 11, in the gymnasium after the final period. Moderator: Kim Chaewon (Debate Society). Attendance is open to all students." }
    ], contact: 'school' },
    { flag: 'epi-h-filed' },
    { phone: [
      { from: 'forum', t: "hanlim_accountability: It's official. Thursday. See you all in the gym." },
      { from: 'forum', t: "jihoonie: bringing popcorn 🍿 front row 🍿 do not save me a seat i will simply take one" }
    ], contact: 'forum' },
    { n: "She looked up from the phone. At the old table, across the cafeteria, Jihoon raised a carton of banana milk at her like a toast, mean and delighted, and mouthed *Thursday*." },
    { n: "Jungwon put his tray down next to hers. He'd come straight from his paper, his hair pushed back like he'd had his hands in it for two hours, and he looked at the notice on her screen for exactly as long as it took to read, and said," },
    { s: 'jungwon', f: 'neutral', t: "Thursday." },
    { s: 'solar', t: "How was your paper?" },
    { s: 'jungwon', f: 'neutral', t: "Fine." },
    { s: 'solar', t: "Fine like first?" },
    { s: 'jungwon', f: 'neutral', t: "Fine like I'll know on Friday." },
    { n: "His tray had a carton of milk on it and nothing else. She pushed half her rice across without looking at him. He ate it without looking at her. They'd got very good at this." },
    { s: 'eunchae', t: "UNNIE!! Vice President Kim!! Thirty seconds for Hanlim Unfiltered?" },
    { n: "A first-year with a ring light clipped to her phone had materialised at the end of the table like a jump scare, already filming, already live, the little red dot glowing in the corner and the comments scrolling up the side faster than anyone could read." },
    { s: 'eunchae', t: "Where were you during exam week, what's in the tin, did you see the snow, is the council haunted, are you two dating, okay that one I know, go!" },
    { choose: [
      { t: "\"The council will be in the gym on Thursday. Every won.\"", flag: 'epi-h-eunchae-quote', stat: { courage: 1 }, then: [
        { s: 'eunchae', t: "OHHHH. Okay. Okay! Chat, she said EVERY WON. Clip it! Somebody clip it!" },
        { n: "Jungwon, next to her, very quietly put his chopsticks down, which from him was applause." }
      ] },
      { t: "(Smile, wave, and say nothing at all.)", flag: 'epi-h-eunchae-smile', stat: { charm: 1 }, then: [
        { s: 'eunchae', t: "She's WAVING. Chat, is that a yes? That feels like a yes. I'm calling it a yes." },
        { n: "The comments went up the side of the screen in a waterfall. One of them said *ghost VP smile is so real*. She tried very hard not to think about that one." }
      ] },
      { t: "\"No comment.\"", flag: 'epi-h-eunchae-nocomment', then: [
        { s: 'eunchae', t: "'No comment.' Chat, she said no comment. That's so suspicious. I love that. Thank you, unnie!!" },
        { n: "She was gone as fast as she'd come, off to ambush Heeseung by the vending machine. Heeseung saw her coming and walked directly into a wall." }
      ] }
    ] },
    { n: "Three days. She looked out the cafeteria window. The snow was coming down the right way now, slow and ordinary and white, and she watched it for a long while to make sure it stayed that way." }
  ] },

  // ───────────────────────────── 1/9, after: prom ─────────────────────────────
  { id: 'epi-h-prom', date: '1/9', slot: 'after', consumes: true, title: 'prom (tbd)', place: 'Hanlim · School · Council Room', time: 'After School', scene: [
    { music: 'epi-h-goofy' },
    { n: "Somebody had written PROM on the council room whiteboard in a big black scrawl, underlined twice, and then apparently given up on life, because underneath it there was nothing. Just the white. A little smiley face in the corner that Niki swore he hadn't drawn." },
    { n: "It was the first real council meeting since they'd come back, and it felt like the first day of school and the last day of something else at the same time. Second make-up paper done (Korean history; Solar had written a whole page on the wrong dynasty with great confidence). Heeseung's clipboard. Sunoo's laminator, plugged in, warming up for nothing. Jake reading the forum out loud in a newscaster voice until Jungwon took his phone." },
    { ifFlag: 'epi-h-gym-plan', then: [
      { n: "Under PROM, Heeseung uncapped the marker and wrote, very small, *gym → Wed night*, and drew a box around it, and nobody said anything, and everybody looked at it." }
    ] },
    { s: 'jungwon', f: 'neutral', t: "Prom. Ideas." },
    { s: 'niki', f: 'happy', t: "Haunted house theme. We're already the ghost council. Lean in." },
    { s: 'jake', f: 'happy', t: "'A Night to Dismember.'" },
    { s: 'heeseung', f: 'serious', t: "We are not doing a theme that implies we committed a crime three days before an impeachment hearing." },
    { s: 'sunoo', f: 'happy', t: "Under the sea! With the jellyfish lights! Like the aquarium!" },
    { s: 'jay', f: 'neutral', t: "Can we do one where the football team doesn't have to wear anything with sequins." },
    { s: 'sunoo', f: 'sad', t: "...Sequins were going to be the jellyfish, hyung." },
    { s: 'jake', f: 'neutral', t: "Okay, but real question. Is anybody actually asking anybody yet? Sunghoon. Sunghoon. Look at me." },
    { s: 'sunghoon', f: 'serious', t: "Sunghoon's promposal is in development." },
    { s: 'jake', f: 'happy', t: "In DEVELOPMENT?" },
    { s: 'sunghoon', f: 'flustered', t: "It's going to be the most impressive thing this school has ever seen. These things take time. It will happen soon." },
    { s: 'niki', f: 'neutral', t: "He said soon. Drink." },
    { n: "Everybody drank. They were drinking milk cartons from the vending machine, but it was the principle of the thing. Sunghoon put his face in his hands. Solar was laughing, and Jungwon was looking at the whiteboard with the expression of a president watching his administration fall apart in real time, when somebody knocked on the open door." },
    { n: "Three knocks. Precise. Evenly spaced." },
    { s: 'chaewon', t: "Is this a bad time?" },
    { n: "Kim Chaewon, captain of the debate society, stood in the doorway with a binder under her arm and her school jacket buttoned all the way up, and the whole council room sat up straight like a teacher had walked in. She wasn't a teacher. She just had the kind of face that made you check whether your tie was on right." },
    { s: 'jungwon', f: 'neutral', t: "No. Come in." },
    { s: 'chaewon', t: "I won't take long. I'm moderating Thursday, and I'd rather you heard the rules from me than from the forum." },
    { n: "She didn't sit. She opened the binder and read off it, crisp and level, the way she'd have read a resolution at a tournament." },
    { s: 'chaewon', t: "The filer reads the motion. They've asked to be named at the hearing and not before, and that's within the rules, so don't ask me who it is, because I won't tell you." },
    { s: 'chaewon', t: "One speaker for the motion, one for the council, a reply each. Then questions from the floor, which I choose. Nobody raises a phone in my gym. Eunchae can stream from the back row and only the back row." },
    { n: "She looked, without turning her head, at the door. Out in the hallway something with a ring light squeaked and retreated round the corner." },
    { s: 'chaewon', t: "And bring the tin. If it's where you say it is, bring it and open it. People don't believe ledgers. They believe what they can see." },
    { s: 'heeseung', f: 'flustered', t: "We have a ledger. It's a very good ledger." },
    { s: 'chaewon', t: "I'm sure it is. I'm telling you what wins a room." },
    { s: 'solar', t: "Whose side are you on?" },
    { n: "Chaewon looked at her. Not unkindly. Like she'd been waiting for somebody to ask." },
    { s: 'chaewon', t: "The rules. I don't care where you were, Kim Solar. I care whether the tin is short and whether this council can be trusted with the next one. That's what Thursday is about. Not a temple." },
    { n: "Nobody breathed. Sunoo, at the laminator, very quietly unplugged it." },
    { s: 'chaewon', t: "Tell me who's speaking for the council by Wednesday." },
    { n: "She closed the binder and left as precisely as she'd come, and three seconds after the door shut Niki said *I'm scared of her* and Jay said *same* and Jake said *I'd let her impeach me*, and Heeseung threw a whiteboard marker at him." },
    { choose: [
      { t: "\"She's fair. That's better than nice.\"", stat: { knowledge: 1 }, then: [
        { s: 'jungwon', f: 'neutral', t: "She is." },
        { n: "He said it like he'd decided something. He looked at the whiteboard. PROM, and the box, and nothing else." }
      ] },
      { t: "\"Okay. Nobody panic. Sunoo, plug the laminator back in.\"", stat: { kindness: 1 }, then: [
        { s: 'sunoo', f: 'happy', t: "Okay!!" },
        { n: "He plugged it back in. It warmed up with a hopeful little click. It still had nothing to laminate, but it was the principle of the thing." }
      ] }
    ] },
    { n: "When she left at five, the whiteboard still said PROM and nothing else, and through the window behind it the snow was coming down slow and ordinary over the courtyard, and she caught herself watching it for a long time, waiting to see which way it went." }
  ] },

  // ───────────────────────────── 1/9, late: fight 3, unheard ─────────────────────────────
  { id: 'epi-h-unheard', date: '1/9', slot: 'late', title: 'unheard', place: 'Hanlim · Home · Her Room', time: 'Late Night', scene: [
    { music: 'epi-h-half' },
    { glitch: { stage: 3 } },
    { n: "She was at her desk with the last make-up paper's notes, Nana asleep across the doorway like a draught excluder, when the snow stopped." },
    { glitch: 'epi-h-g-unheard' },
    { n: "Not stopped falling. Stopped. Every flake outside her window hung in the air exactly where it was, thousands of them, a whole street of white points frozen between the sky and the ground under the streetlight, not drifting, not trembling, like somebody had pressed pause on the world and walked off. Her clock said 12:00. Her phone said 12:00. Nana didn't wake up. Nana didn't breathe, she realized, watching his side not move." },
    { n: "She opened her bedroom door to wake her parents, and it wasn't the landing." },
    { place: 'Hanlim · School', time: 'Late Night' },
    { n: "It was Hanlim. The third-floor corridor, the long one outside the council room, at midnight, every locker door hanging open and the trophy case lit green from inside, Jungwon's medals glinting in it like coins at the bottom of a pool. The windows were full of hanging snow and an enormous moon. The floor wax smell was there, and under it the other smell, cold stone and old air and something electric." },
    { n: "And down at the far end, coming up the stairwell, them." },
    { n: "This time they saw her." },
    { n: "Someone at the back shouted her name, high and cracked, *SOLAR?!*, and somebody's weapon came half up and down again, and the dog came hurtling down the corridor so fast his claws skidded on the polish. And in front, gloves up, stopped dead with one foot still on the top stair, the boxer, white hair, staring at her across forty feet of green light like she was a ghost, which she supposed she was." },
    { n: "*...Sol?*" },
    { n: "She answered him. She shouted it. *Senpai, it's me, I'm here, I'm right here*, and her mouth moved and her throat hurt with it and nothing came out, not a sound, like screaming underwater, like a television on mute. She watched him watch her mouth move. She watched him understand that he couldn't hear her." },
    { n: "*I can't hear her.* The voice from everywhere, shaking. *I can't hear anything from her at all. But she's there. She's really there.*" },
    { n: "Then the lockers along the wall slammed shut all at once, and the things that had been hiding in them came out." },
    { battle: { id: 'epi-hoax-3', kind: 'scripted', script: 'epi-hoax-3', title: 'Unheard', forced: true,
      desc: 'Hanlim’s halls at midnight, the snow hanging still in every window. S.E.E.S. can see her now. They can’t hear a word she says.',
      notes: 'Half-present fight 3 (FEMC-EPILOGUE-PLAN 2.4): Solar can be hit (half damage); her Talk is "…"; partial control: a skill or Analyze on a foe marks it and allies start following her marks. Barks know her ("Solar?!", Akihiko "…Sol?", Fuuka "I can’t hear her, but she’s there"). Cannot be lost: she fades home.' } },
    { n: "She couldn't tell them anything, so she showed them. She went for the biggest one first, the way they'd always done it, and put everything she had into it, and somewhere behind her she heard him say *there, the one she's on, everyone, follow her*, and they did. They followed her down the whole corridor. It was the most she'd been understood in weeks, and she couldn't say a single word." },
    { n: "At the end, breathing hard by the council room door, he was close enough to touch. He put his glove out. She put her hand up to meet it." },
    { dark: true },
    { n: "Snow." },
    { dark: false },
    { place: 'Hanlim · Home · Her Room', time: 'Late Night', soft: true },
    { n: "She was standing in her bedroom doorway with her hand up in the air, palm out, against nothing. Out the window the snow was falling again, slow and ordinary, like it had never stopped. Nana lifted his head off the floor and thumped his tail twice and went back to sleep." },
    { n: "Her throat hurt. Like she'd been shouting for an hour." },
    { ifFlag: 'epi-h-said-name', then: [
      { n: "She picked up her phone. She wanted to text Jungwon and say it again, the name, just to hear that it still came out of her. She didn't. She held the phone against her chest instead and said it under her breath to the dark, very quietly, to check." },
      { n: "It came out. That was something." }
    ], else: [
      { n: "She said her own name into the dark of her room, very quietly, to check." },
      { n: "It came out. That was something." }
    ] },
    { flag: 'epi-h-unheard' }
  ] }

  );
})();
