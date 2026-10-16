/* Secrets: crossovers2. Format in femc-social.js above secrets().
   More secret group scenes, like crossovers.js: each plays by itself once Solar is close enough to two or more
   people at once (unlock.links) and the date has come. Friendship scenes only; ifRank cameos let anyone else
   she's met drop in. Stamps for these come from the merge file (group 'The other side'). */
FemcSocial.secrets({
  id: 'crossovers2',
  cast: { junpei: 'Junpei', yukari: 'Yukari', koromaru: 'Koromaru', hina: 'Hina' },
  threads: {},
  texts: [],
  moments: [

    /* ── Rio & Akihiko: a hundred and twelve steps ── */
    { id: 'x2-steps', date: '8/16', slot: 0, unlock: { links: { rio: 5, akihiko: 5 } }, music: 'joy',
      label: 'Crossover · Rio & Akihiko', title: 'a hundred and twelve', place: 'Naganaki Shrine · Stone Steps', stamp: 'hundred-twelve', scene: [
      { n: "Akihiko had spent a week telling Rio about the shrine steps, in the hallway, at lunch, and once across the entire gym in the middle of her practice, and Rio had spent the same week telling him, at rising volume, that volleyball players did not need stairs." },
      { n: "On Sunday at six in the morning they were both standing at the bottom of all hundred and twelve of them. Solar was there too, holding a stopwatch, because at 5:12 that morning each of them had texted her separately to say the other one was going to cheat." },
      { s: 'akihiko', f: 'happy', t: "Ten intervals. Up and back down is one. Rookie keeps time." },
      { s: 'rio', f: 'serious', t: "Ten. Fine. And when I win, you stop coming into my gym and lecturing my first-years about protein." },
      { s: 'akihiko', f: 'serious', t: "They need to hear it." },
      { s: 'rio', f: 'serious', t: "They're fifteen. What they need to hear is \"call the ball.\"" },
      { n: "They went off the line like somebody had fired a gun. Akihiko ran stairs the way he did everything, too fast and with no visible effort, which Solar had long since decided was a kind of rudeness. Rio took them two at a time, left, right-left, every step a spike approach, her ponytail snapping behind her like a flag in a high wind." },
      { n: "The first five intervals were dead even. Neither of them had the breath to talk, and both of them used what little they had to glare." },
      { choose: [
        { t: "(Call the splits honestly.)", notes: 0, then: [
          { n: "She called them honestly. They were within half a second of each other every single time, which made both of them furious in exactly the same way, at exactly the same moment, which made them more furious still." }
        ] },
        { t: "(Tell each of them, quietly, that the other one is fading.)", notes: 0, then: [
          { n: "At the bottom she told Akihiko that Rio was fading. At the top she told Rio that Akihiko was breathing funny. Interval six was the fastest anyone had ever gone up those stairs, and the white dog asleep in the shade of the offering box got up and moved, on principle." }
        ] }
      ] },
      { ifRank: { kiriko: 1 }, then: [
        { n: "Somewhere around interval seven a girl in purple and white came out onto the top landing with a broom in one hand and a melon bun in the other, watched one lap, and sat down on the offering box to take in the rest like a sports broadcast." },
        { s: 'kiriko', f: 'happy', t: "Sol-chan! Who's winning? I've got a bet with the fox statues and they're very smug." }
      ] },
      { n: "On the eighth trip down, Akihiko slowed for half a step and watched Rio land at the bottom." },
      { s: 'akihiko', f: 'serious', t: "You come down heavy on your right. Every time. Ease off that before it gets you." },
      { s: 'rio', f: 'serious', t: "It's fine. It's always fine." },
      { choose: [
        { t: "He's right, Rio. I've seen it too.", notes: 0, then: [
          { s: 'rio', f: 'neutral', t: "...Fine. I'll ice it. Later. After I win." },
          { n: "She didn't ease off. But she did look at her own right foot on the next landing, frowning, the way she looked at a ball that had gone somewhere she hadn't told it to." }
        ] },
        { t: "Akihiko, you're stalling because you're tired.", notes: 0, then: [
          { s: 'akihiko', f: 'surprised', t: "I'm not tired. I'm coaching." },
          { s: 'rio', f: 'happy', t: "He's tired." }
        ] }
      ] },
      { n: "The tenth interval was a tie. Solar would swear to that later, under oath, to both of them, separately and repeatedly. They hit the top step at the same instant and went down onto the stone in two heaps, chests heaving, the whole city spread out blue and hazy below them and the cicadas starting up as if on cue." },
      { n: "Akihiko dug a shaker bottle out of his bag, still lying flat, and held it out sideways without looking. Rio took it, drank, and made a face Solar would think about for days." },
      { s: 'rio', f: 'serious', t: "This tastes like a lawn." },
      { s: 'akihiko', f: 'happy', t: "It's matcha. It's limited edition." },
      { s: 'rio', f: 'neutral', t: "...Rematch. Next Sunday." },
      { s: 'akihiko', f: 'happy', t: "Obviously." },
      { n: "On the walk down Akihiko jogged ahead, because of course he did, and Rio fell in beside Solar on the last flight, and said, low, like it cost her something:" },
      { s: 'rio', f: 'flustered', t: "He's annoying. ...He's also the first person who's ever kept up with me. Don't tell him I said that." },
      { n: "At the bottom of the steps Akihiko turned around, walking backward, and called up to them that she didn't quit, and he liked that, and Rio threw the empty shaker bottle at his head. He caught it. Of course he did." }
    ] },

    /* ── Ann & Aphrodite: two people nobody gets to underestimate twice ── */
    { id: 'x2-panther', date: '9/12', slot: 0, unlock: { links: { ann: 5, aphrodite: 3 } }, music: 'sun',
      label: 'Crossover · Ann & Aphrodite', title: 'the pink and the panther', place: 'Paulownia Mall', stamp: 'panther-pink', scene: [
      { n: "It was a Saturday, and Ann was holding a red jacket up against herself in the mirror of the boutique by the escalators, and Solar was holding three bags that were not hers, when the whole store went quiet the way rooms only did for one person." },
      { n: "Aphrodite came through the door in white and gold like the door had been built for the occasion. The shop assistant forgot what she was saying in the middle of a word. A man by the scarves sat down on the floor." },
      { s: 'aphrodite', f: 'happy', t: "Little sun. You didn't tell me you knew someone with a face like that." },
      { s: 'aphrodite', f: 'happy', t: "Sculptors would fight over you, darling. Actual duels. I could bless you, if you like. One touch and everyone who sees you will adore you, all day, without knowing why." },
      { n: "Solar watched Ann's whole body change. Not a flinch. Nothing so obvious. Just a stillness, settling over her shoulders, the one Solar had seen in June in the middle of this same mall, in front of a man with a camera and a business card." },
      { s: 'ann', f: 'serious', t: "No thanks." },
      { s: 'ann', f: 'serious', t: "I've had enough people deciding what my face is for. I'd like to keep it for me, if that's okay." },
      { n: "The goddess of love blinked, slowly, a long golden blink, like someone hearing a word in a language she hadn't heard spoken in a thousand years." },
      { choose: [
        { t: "She said no, Aphrodite.", notes: 0, then: [
          { s: 'aphrodite', f: 'serious', t: "...She did. That's twice this summer a girl in this town has told me no." },
          { s: 'aphrodite', f: 'happy', t: "I'm beginning to suspect it's the water. I want some." }
        ] },
        { t: "(Step a little closer to Ann. Say nothing.)", notes: 0, then: [
          { n: "Solar shifted the bags to one hand and moved half a step nearer to Ann, so their shoulders almost touched. Ann didn't look at her. Her hand loosened on the hanger." },
          { s: 'aphrodite', f: 'neutral', t: "Oh, I see. She has a guard. Of course she does. The good ones always do." }
        ] }
      ] },
      { s: 'aphrodite', f: 'neutral', t: "Forgive me. It's a habit. For four thousand years, if I thought something was lovely, I made sure it was loved. I never asked whether it wanted to be." },
      { s: 'ann', f: 'surprised', t: "...Huh. That's actually a really good apology." },
      { s: 'aphrodite', f: 'happy', t: "I've been practicing. A friend of Solar's taught me. She has a bow and absolutely no patience." },
      { n: "And that, somehow, was that. Ten minutes later they were standing side by side at the boutique mirror, and it turned out they had the same opinion of nearly everything on the rack, which was a low one." },
      { s: 'ann', f: 'neutral', t: "People see blonde, and model, and quarter-American, and they think that's the whole thing. Back home they called me the Panther. Nobody calls you that by accident." },
      { s: 'aphrodite', f: 'happy', t: "They see the pink and they think I'm harmless. Darling, I have taken towers with this outfit." },
      { s: 'ann', f: 'happy', t: "Okay. I like you." },
      { choose: [
        { t: "The red jacket. Ann wins.", notes: 0, then: [
          { s: 'aphrodite', f: 'surprised', t: "...You are judging a fashion contest against a goddess. With your mouth. Out loud." },
          { s: 'ann', f: 'happy', t: "She's got good taste. Deal with it." },
          { s: 'aphrodite', f: 'happy', t: "She does. That's the most annoying part." }
        ] },
        { t: "You both look like you'd start a fight and win it.", notes: 0, then: [
          { s: 'ann', f: 'happy', t: "That's the nicest thing anyone's said about an outfit." },
          { s: 'aphrodite', f: 'happy', t: "Write it on a card. I want it on my altar." }
        ] }
      ] },
      { n: "On the way out a shop assistant ran after them, pink in the face, and pressed a silk scarf into Aphrodite's hands for free, as people always did. Aphrodite looked at it for a long moment. Then she turned and looped it around Ann's neck instead, and tied it once, loose, and stepped back." },
      { s: 'aphrodite', f: 'neutral', t: "Not a blessing. Just a scarf. You can keep it for you." },
      { n: "Ann touched it. Then she marched the goddess of love straight to the crepe stand by the fountain and bought her a strawberry crepe with extra cream, and watched her take the first bite of the first crepe of her very long life." },
      { s: 'aphrodite', f: 'surprised', t: "...Why did no one bring me these at the temple." },
      { s: 'ann', f: 'happy', t: "Right? That's what I've been saying about this whole world." }
    ] },

    /* ── Saori & Kuromi: diaries, rules, and a very stupid manga ── */
    { id: 'x2-diaries', date: '9/13', slot: 0, unlock: { links: { saori: 6, kuromi: 5 } }, music: 'school',
      label: 'Crossover · Saori & Kuromi', title: 'do not read', place: 'Iwatodai Strip · Bookworms', stamp: 'do-not-read', scene: [
      { n: "The book club had two members and a strict schedule, and at four minutes past two on Sunday it acquired a third member, who had not been invited, had followed Solar down the strip from the dorm at a distance she believed was stealthy, and sat down at the table anyway in a jester hat." },
      { s: 'kuromi', f: 'serious', t: "So THIS is where you go on Sundays. Who's this. Is she your rival? Does she have a rival? I'm available." },
      { s: 'saori', f: 'flustered', t: "I'm... I'm Saori. From the library committee. I'm sorry. I don't think I've ever had a rival. Should I?" },
      { n: "Saori had a notebook open beside her copy of A Year of Small Weather, a small plain one with a cloth cover, and she closed it the moment Kuromi's eyes landed on it, both hands flat on top like it might try to get away." },
      { s: 'kuromi', f: 'surprised', t: "...Is that a DIARY?" },
      { n: "Saori went the color of the shop's front awning. Solar braced, because she had lived in the dorm with Kuromi for four months and knew roughly what came next." },
      { n: "It didn't come. Kuromi looked at Saori's hands on the cover for a long second, and then reached into her hoodie and pulled out her own, black, with the pink skull and the glitter sticker on the back that said PROPERTY OF KUROMI DO NOT READ OR ELSE, and set it down on the table beside Saori's like a card in a game." },
      { s: 'kuromi', f: 'serious', t: "Rules. Nobody reads anybody's. She knows. She found mine once and didn't even open it. It was SO suspicious." },
      { s: 'saori', f: 'surprised', t: "...She didn't?" },
      { s: 'kuromi', f: 'neutral', t: "Nope. Weirdo." },
      { n: "Saori looked at Solar across the table, and something in her face, some small tight thing, let go." },
      { s: 'kuromi', f: 'happy', t: "Mine's for revenge. Names. Crimes. Punishments. Junpei's got four pages. What's yours for?" },
      { s: 'saori', f: 'sad', t: "...Things that went wrong. Each day. If I write them down they're on the paper, and not in me. Mostly." },
      { n: "Kuromi stared at her with dawning horror." },
      { s: 'kuromi', f: 'surprised', t: "That's a revenge list with NO REVENGE in it. That's the saddest thing I've ever heard. That's just a LIST." },
      { choose: [
        { t: "Saori, what if the other page was for things that went right?", notes: 0, then: [
          { s: 'saori', f: 'neutral', t: "...The right-hand page. I've been leaving it blank. I didn't know what it was for." },
          { s: 'kuromi', f: 'serious', t: "It's for WINNING. Obviously." }
        ] },
        { t: "Kuromi, you could help her with the revenge part.", notes: 0, then: [
          { s: 'kuromi', f: 'happy', t: "YES. Finally someone in this town understands project management." },
          { s: 'saori', f: 'flustered', t: "I don't... I don't think I want revenge on the rain. That's most of the list. The rain." },
          { s: 'kuromi', f: 'serious', t: "Then we take down the rain. Together. I've done worse." }
        ] }
      ] },
      { n: "It got worse, or better, when Kuromi produced volume four of Under the Cherry Blossoms from her other pocket and announced that the class rep was wasted on the delinquent and the whole series was a crime. Saori, it turned out, had read all six volumes, twice, under her desk." },
      { s: 'saori', f: 'serious', t: "I disagree. Very politely. She chose him. That's the point of the whole thing. Nobody chose for her." },
      { s: 'kuromi', f: 'flustered', t: "She chose WRONG." },
      { s: 'saori', f: 'serious', t: "She chose. That's allowed to be enough." },
      { n: "Solar sat back and watched Saori disagree like she was about to throw a chair, in a bookshop, at a girl in a jester hat, and Kuromi lean in across the table, delighted, the way she only leaned in for a really good fight." },
      { ifRank: { rohan: 1 }, then: [
        { n: "At the back table, a pen was going like rain. Kuromi turned around very slowly." },
        { s: 'kuromi', f: 'serious', t: "Are you DRAWING me, headband man?" },
        { s: 'rohan', f: 'neutral', t: "Your hat is structurally impossible. I'm trying to work out how it stays up. Keep arguing. Both of you. Don't look at me." }
      ] },
      { n: "When it was time to go, Kuromi peeled a sticker off the inside cover of her diary, the spare, and slapped it onto the back of Saori's notebook. She had already, at some point when nobody was watching, crossed out her own name in glitter pen and written a new one over it." },
      { n: "PROPERTY OF SAORI. DO NOT READ OR ELSE. I MEAN IT." },
      { s: 'kuromi', f: 'flustered', t: "Now it's protected. Anybody reads it, they answer to me." },
      { s: 'saori', f: 'happy', t: "...Thank you. Nobody's ever protected my notebook before." },
      { n: "She opened it right there, on the table, angled so nobody else could see, and wrote one line on the right-hand page. She didn't say what it was. Nobody asked. That was the rule." }
    ] },

    /* ── Judy & Sebastian: a rig from the future, code from a basement ── */
    { id: 'x2-rig', date: '10/14', slot: 1, unlock: { links: { judy: 4, sebastian: 6 } }, music: 'tender',
      label: 'Crossover · Judy & Sebastian', title: 'rain on glass', place: 'Iwatodai · Junkyard', stamp: 'rain-bd', scene: [
      { n: "The braindance rig had crashed for the ninth time that week, and Judy had said something in Spanish to it that Solar was fairly sure was not in any textbook, and Solar had said, carefully, that she knew a guy who wrote code in a basement." },
      { n: "Sebastian came out to the junkyard after dark with Junpei's old laptop under one arm and his hood up, and stood just inside the hole in the chain-link fence for a full minute, looking at the door-and-oil-drum workbench and the bicycle helmet covered in wires and the stray cat asleep on top of a tire." },
      { s: 'sebastian', f: 'neutral', t: "...This is the coolest place I've ever been. Don't tell anyone I said that." },
      { s: 'judy', f: 'happy', t: "Choom. You're hired." },
      { n: "They did not talk for the next hour. Not in any way Solar would have called talking. Judy said things like the bus is fried and Sebastian said things like then I'll go around it, and every so often one of them made a small noise and the other one nodded like the noise had been a whole paragraph." },
      { n: "Solar held the flashlight. It was, she decided, an honor." },
      { choose: [
        { t: "(Hold the flashlight steady and stay out of it.)", notes: 0, then: [
          { n: "She held it steady and stayed out of it, and watched two people who were both very bad at people be very good at something together, and found she didn't mind being the lamp." }
        ] },
        { t: "Do you two always talk like this?", notes: 0, then: [
          { s: 'judy', f: 'neutral', t: "Like what?" },
          { s: 'sebastian', f: 'neutral', t: "We're talking?" },
          { n: "They looked at each other, and then back at the laptop, with the exact same expression, and Solar gave up." }
        ] }
      ] },
      { n: "It started to rain a little after nine. Light, then not light, drumming on the sheet of corrugated metal Judy had propped over the bench. Sebastian looked up at it the way some people look up at fireworks." },
      { s: 'judy', f: 'neutral', t: "It's ready. Somebody's gotta record a test. Three minutes. It picks up what you feel, not just what you see." },
      { s: 'sebastian', f: 'neutral', t: "...I'll do it." },
      { n: "Judy looked at him in surprise. So did Solar. He shrugged, already pulling the helmet on over his hood, which Judy said would wreck the signal and which it did not." },
      { s: 'sebastian', f: 'neutral', t: "It's raining. I'm good at rain." },
      { n: "He sat on an upturned crate under the metal roof with his eyes closed for three minutes, and the cat came and sat on his feet, and the rain came down, and nothing at all happened, and Judy watched the little meter on her board with her lip between her teeth." },
      { n: "Then she handed the helmet to Solar." },
      { choose: [
        { t: "(Put it on.)", notes: 0, then: [
          { n: "Rain. Rain on a small high window, at the top of a wall, seen from below. A basement, maybe, though she wasn't in a basement. A cat's weight on her feet. The specific quiet of being somewhere nobody needed anything from you. Under it, so faint she nearly missed it, something she didn't have a word for until she took the helmet off: not wanting to be anywhere else. Just for three minutes. Just there." },
          { s: 'solar', t: "...Oh." }
        ] },
        { t: "Judy, you try it first. It's your rig.", notes: 0, then: [
          { n: "Judy put it on, lay back on the hood of a wrecked car with her arms folded, and was quiet for a long time after the three minutes were up. When she sat up, she didn't say anything. She handed it to Solar, and Solar put it on, and understood." }
        ] }
      ] },
      { s: 'judy', f: 'sad', t: "This. This is what I wanted to make. Back home it's all garbage. Corpo ads, people getting hurt for views. I wanted something that made you feel less alone." },
      { s: 'judy', f: 'happy', t: "And you made it by sitting in the rain with a cat on your feet. Choom, I could kill you." },
      { s: 'sebastian', f: 'flustered', t: "...It's just rain." },
      { s: 'judy', f: 'neutral', t: "It's never just rain." },
      { n: "She saved it to a chip the size of a fingernail, labeled it in marker, RAIN · SEB, and put it in the tin where she kept the things that mattered. Sebastian pretended not to see. He pulled his hood further down. He was smiling under it. Solar could tell from the hood." },
      { s: 'sebastian', f: 'neutral', t: "...Same time next week? The bus is still fried." },
      { s: 'judy', f: 'happy', t: "Bring the laptop. And bring the cat food. She likes you better than me now, traitor." }
    ] },

    /* ── Haru & Noctis: a new recipe, covertly ── */
    { id: 'x2-recipe', date: '10/25', slot: 0, unlock: { links: { haru: 8, noctis: 5 } }, music: 'sun',
      label: 'Crossover · Haru & Noctis', title: 'for his highness, covertly', place: 'Port Island · Pier', stamp: 'new-recipe', scene: [
      { n: "Haru arrived at the end of the Port Island pier on Sunday morning with a camp stove, a cast-iron pan, a cutting board, two folding stools, and a basket from the roof garden covered with a checked cloth, and Noctis, half asleep against his post with the rod between his knees, opened one eye and watched her set it all up with the deep suspicion of a cat watching someone unpack a carrier." },
      { s: 'haru', f: 'happy', t: "Good morning, Noctis-kun! You catch it, I'll cook it. That's the deal. Solar-chan is the witness." },
      { s: 'noctis', f: 'neutral', t: "...What's in the basket." },
      { s: 'haru', f: 'happy', t: "Lunch." },
      { n: "She said it very sweetly. Solar, who had seen Haru take an axe to a shadow on the school roof with the same smile, said nothing." },
      { n: "There were also, it emerged, three pages of handwriting tucked under the cutting board, so neat it looked typeset. Ignis had pressed them into Haru's hands in the dorm kitchen the morning of his famous breakfast, she explained, and at the top, underlined twice, it said: For His Highness. Covertly." },
      { s: 'noctis', f: 'surprised', t: "...Specs. You absolute traitor." },
      { n: "Noctis caught a mackerel in eleven minutes, which for Noctis was practically a miracle, and handed it over with the air of a man surrendering a hostage. Haru filleted it in about four seconds. She grated something orange into the sauce while chatting about the weather. She chopped something green so fine it disappeared." },
      { choose: [
        { t: "(Say nothing. You are a witness, not an informant.)", notes: 0, then: [
          { n: "Solar said nothing. Haru caught her eye over the pan and smiled, a small, conspiratorial, terrifying smile, and Solar understood that she had just joined something." }
        ] },
        { t: "Noctis, there's carrot in that.", notes: 0, then: [
          { s: 'noctis', f: 'serious', t: "I knew it. I knew it. I could feel it." },
          { s: 'haru', f: 'serious', t: "Solar-chan. That was a betrayal." },
          { n: "She said it with such gentle disappointment that Solar felt it physically, somewhere under the ribs, and resolved never to do it again." }
        ] },
        { t: "(Eat a raw carrot stick from the basket, loudly, while staring at Noctis.)", notes: 0, then: [
          { n: "She crunched it at him. He stared back. It was, Haru said later, the most dramatic thing she had ever seen anyone do with a vegetable, and she had once named a squash Gerald." }
        ] }
      ] },
      { n: "He ate it anyway. Of course he ate it. The fish was perfect and the sauce was better, and he ate it hunched over the plate on the folding stool with the expression of a man who had lost a war and was finding the terms of surrender unexpectedly reasonable." },
      { s: 'noctis', f: 'neutral', t: "...It's good. It's really good. Don't tell Specs." },
      { s: 'haru', f: 'happy', t: "I'll tell him in my heart, every day." },
      { ifRank: { noctis: 6 }, then: [
        { n: "Later, with the pan cooling and the gulls circling at a respectful distance, Haru asked him about the white flower, the one he'd pressed in a book on the mall roof. He told her, plainly, the way he said hard things. Luna. Since they were kids. Arranged, and important, and his choice anyway." },
        { s: 'noctis', f: 'neutral', t: "I got lucky. I'd have picked her if nobody asked me to." },
        { s: 'haru', f: 'sad', t: "...I wouldn't have picked mine." },
        { s: 'noctis', f: 'serious', t: "That sucks. You should get to pick." },
        { s: 'haru', f: 'neutral', t: "...I'm working on it." },
        { n: "Nobody said anything after that for a while. Noctis handed her the spare rod. She held it like someone who'd never held one, which she hadn't, and then like someone who'd been born holding one, which was Haru all over." }
      ], else: [
        { n: "Later, with the pan cooling and the gulls circling at a respectful distance, Noctis handed her the spare rod. She held it like someone who'd never held one, which she hadn't, and then like someone who'd been born holding one, which was Haru all over." }
      ] },
      { n: "She caught nothing. She didn't seem to mind. Noctis fell asleep against the post at two in the afternoon with a clean plate on his knees, and Haru tucked the checked cloth over his shoulders, and wrote something in the margin of Ignis's third page, and showed it to Solar before she packed up." },
      { n: "Carrots: undetected. Peppers: detected, eaten anyway. Prince: fed." }
    ] },

    /* ── Cloud & Rio: two people who won't sit down ── */
    { id: 'x2-bench', date: '10/28', slot: 0, unlock: { links: { cloud: 6, rio: 8 } }, music: 'tender',
      label: 'Crossover · Cloud & Rio', title: 'not interested in resting', place: 'Iwatodai · Riverside', stamp: 'rest-day', scene: [
      { n: "Rio was not allowed to jump. She was allowed to walk, and to do the rubber-band exercises the physio had given her, and to sit on the bench with a clipboard. She had texted Solar at seven in the morning to come to the river path and keep a lookout for Hina, which was how Solar knew exactly what was about to happen." },
      { n: "What was happening was footwork. Left, right-left, no jump, in the brace, on the gravel path by the river, over and over, with her jaw set and her eyes on the water like it had insulted her." },
      { n: "What was also happening, twenty meters further down the path, was Cloud Strife doing squats with a sword the size of a door across his shoulders, slowly, counting under his breath, and wincing every time he came up, one hand drifting toward his temple and then away again." },
      { n: "They had noticed each other. They had both decided not to notice each other. It was going about as well as that ever went." },
      { s: 'cloud', f: 'neutral', t: "You're favoring the left. You'll tear the right one again." },
      { s: 'rio', f: 'serious', t: "Nobody asked you." },
      { s: 'cloud', f: 'neutral', t: "...Not interested anyway." },
      { s: 'rio', f: 'serious', t: "And you grab your head every time you stand up. So." },
      { s: 'cloud', f: 'serious', t: "That's different." },
      { s: 'rio', f: 'serious', t: "It's literally not." },
      { n: "They both looked at Solar. Solar, who had come to keep a lookout for Hina and had not been warned she would be refereeing, looked back." },
      { choose: [
        { t: "Rio's right. You're both being idiots.", notes: 0, then: [
          { s: 'rio', f: 'surprised', t: "...Wait, that's not me being right, that's both of us." },
          { s: 'cloud', f: 'neutral', t: "She got you too." }
        ] },
        { t: "Cloud's right. The doctor said no.", notes: 0, then: [
          { s: 'rio', f: 'flustered', t: "The doctor said no JUMPING. I'm not jumping. I'm... approaching." },
          { s: 'cloud', f: 'neutral', t: "...That's what I'd say." },
          { s: 'rio', f: 'serious', t: "Don't agree with me. It's worse." }
        ] },
        { t: "(Sit down on the bench and pat the seats on either side.)", notes: 0, then: [
          { n: "Solar sat down in the middle of the bench by the path and patted the slats on either side of her, once each, and waited." },
          { n: "Nobody moved for a long time. Then Cloud leaned the sword against the railing, which took a while, and sat. Rio held out for another thirty seconds on principle and then sat too, heavily, on the far end, and put her braced foot up on the railing like it was a trophy she resented." }
        ] }
      ] },
      { n: "The river went by. A man on a bicycle went by. A dog went by and stopped to look at the sword and decided against it." },
      { s: 'rio', f: 'sad', t: "If I stop, I'm just sitting. I hate sitting. Sitting is where I get stuck in my own head." },
      { s: 'cloud', f: 'neutral', t: "...Yeah." },
      { s: 'cloud', f: 'sad', t: "I knew a guy. Black hair. Bigger sword than this. He'd tell you to rest. He'd also tell you to dream big. I didn't listen to either of those. Just kept moving." },
      { s: 'rio', f: 'neutral', t: "And where'd that get you?" },
      { s: 'cloud', f: 'neutral', t: "Wrong world. Wrong train map." },
      { n: "Rio laughed. She hadn't meant to. It came out of her short and surprised, and Cloud's mouth did something at one corner that, on anybody else, would have been a smile." },
      { s: 'rio', f: 'neutral', t: "Okay. Okay. I'll do the boring band exercises. For one week. And you sit down when your head does the thing." },
      { s: 'cloud', f: 'neutral', t: "...Deal." },
      { s: 'rio', f: 'serious', t: "Shake on it. I don't trust people who say deal like that." },
      { n: "They shook on it, over Solar's lap, solemnly, like two generals at the end of a very small war. Then all three of them sat on the bench by the river until the sun was all the way up, and nobody did any footwork at all, and nobody's head hurt, and Hina never came." },
      { s: 'cloud', f: 'neutral', t: "Tuesday. Same bench. You do your rehab, I'll do mine." },
      { s: 'rio', f: 'neutral', t: "What's yours?" },
      { s: 'cloud', f: 'sad', t: "...Remembering stuff." }
    ] },

    /* ── Rohan & Astarion: a face no mirror will hold ── */
    { id: 'x2-portrait', date: '10/29', slot: 1, unlock: { links: { rohan: 3, astarion: 6 } }, music: 'mystery',
      label: 'Crossover · Rohan & Astarion', title: 'drawings are kinder', place: 'Paulownia Mall · Chagall Café', stamp: 'kinder-than-glass', scene: [
      { n: "Rohan Kishibe did not go out after dark. He said so whenever anyone suggested it, citing the light, the noise, and other people. He was nevertheless sitting at a table in Chagall Café at nine o'clock on a Thursday, sketchbook open, pen uncapped, because Solar had made the mistake of mentioning, in passing, that she knew a man who had not seen his own face in two hundred years." },
      { s: 'rohan', f: 'serious', t: "I don't care that he's a vampire. Vampires are a genre. I care that he doesn't know what he looks like. That's the most interesting thing anyone's told me this month." },
      { n: "Astarion arrived at nine-fifteen, which he said was early for him, and sat down across the table with a cup he wouldn't touch, and looked at Rohan the way he looked at everybody: like a menu." },
      { s: 'astarion', f: 'happy', t: "So you're the artist. Solar says you can read people. Literally. Pages in the face. How thrilling. How appalling." },
      { s: 'rohan', f: 'neutral', t: "I can. I'd like to. You'd make an extraordinary book." },
      { n: "The smile stayed exactly where it was. Everything behind it closed, like shutters coming down along a street." },
      { s: 'astarion', f: 'neutral', t: "No, darling. I don't think so. Someone already wrote on me, you see. At length. I'd rather not be a book again." },
      { choose: [
        { t: "Rohan. He said no.", notes: 0, then: [
          { s: 'rohan', f: 'neutral', t: "I heard him. I'm not deaf. I'm rude. Those are different." }
        ] },
        { t: "(Look at Astarion, not at Rohan.)", notes: 0, then: [
          { n: "Solar looked at Astarion, and Astarion, after a second, looked back, and whatever he saw in her face let one of the shutters come up an inch." }
        ] }
      ] },
      { n: "Rohan capped the pen. Solar had never once seen him cap that pen while someone interesting was within arm's reach. He set it down beside the sketchbook and turned the sketchbook around so the blank page faced Astarion." },
      { s: 'rohan', f: 'neutral', t: "Then I'll draw you instead. From the outside. Like an ordinary person. I won't read a word." },
      { s: 'rohan', f: 'serious', t: "Drawings are kinder than reading. You get to leave things out." },
      { n: "Astarion said nothing for long enough that the waitress came and went. Then he set down the cup he hadn't been drinking from, turned his face very slightly toward the window, the side he must have once believed was his good side, and held still." },
      { s: 'astarion', f: 'neutral', t: "...The left. It used to be the left. I think." },
      { n: "Rohan drew for forty minutes and did not say a single word. The pen went like rain. Astarion sat so still he might have been carved, and only his eyes moved, sometimes, to the dark café window beside him, where Solar's reflection sat at the table with an empty chair across from it." },
      { n: "When it was done, Rohan tore the page out cleanly along the perforations and held it out face down." },
      { ifRank: { astarion: 10 }, then: [
        { n: "Astarion turned it over. He looked at it for a long time. Then he took a strip of four photographs out of his inside pocket, the ones from the booth by the arcade with the cartoon hearts on the curtain, and laid them side by side on the table." },
        { s: 'astarion', f: 'sad', t: "The photograph is honest. I'm grateful for it every day." },
        { s: 'astarion', f: 'happy', t: "This one is kind. I didn't know I could look kind." },
        { s: 'rohan', f: 'neutral', t: "You can't. I left things out. That's my job." }
      ], else: [
        { n: "Astarion didn't take it. He looked at the back of the paper the way a man looks at a door he isn't sure he wants to go through." },
        { s: 'astarion', f: 'sad', t: "...Not yet. Put it somewhere safe. I'll know when." },
        { choose: [
          { t: "I'll keep it for you.", notes: 0, then: [
            { n: "Rohan slid it into an envelope from his bag and gave it to Solar, and she put it inside the front cover of her school planner, face down, where it stayed. She didn't look either. That seemed like the rule." },
            { s: 'astarion', f: 'happy', t: "Don't peek, darling. I'll know. I always know." }
          ] },
          { t: "Rohan, can you tell him one thing about it? Just one.", notes: 0, then: [
            { s: 'rohan', f: 'neutral', t: "You have a crease. Here. When you're trying not to react to something." },
            { s: 'astarion', f: 'surprised', t: "...I DO NOT have a..." },
            { n: "He had a crease. He had it right now. Solar did not say so. She had said so once before, in July, and he still hadn't recovered." }
          ] }
        ] }
      ] },
      { n: "Rohan packed his things in silence and stood, and then stopped by the table, as if remembering something unpleasant about manners." },
      { s: 'rohan', f: 'serious', t: "For the record. You held still better than anyone I've ever drawn. Most people fidget. They want to see how it's going." },
      { s: 'astarion', f: 'sad', t: "Well. I've had a great deal of practice not seeing how it's going." },
      { n: "Rohan looked at him for a long moment, the way he looked at things he wanted to remember exactly. Then he nodded, once, which from Rohan was very nearly a bow, and went out into the night he had sworn he never went out in." }
    ] },

    /* ── Mercy & Leon: the worst patient ── */
    { id: 'x2-stitches', date: '11/5', slot: 0, unlock: { links: { mercy: 7, leon: 5 } }, music: 'tender',
      label: 'Crossover · Mercy & Leon', title: 'the worst patient', place: 'Tatsumi Memorial Hospital · Staff Lounge', stamp: 'worst-patient', scene: [
      { n: "Leon had caught his forearm on a fire escape two nights ago, in the green hour, going up a building after somebody in red who had not needed to go up a building at all. He had wrapped it in a bandana. He had said, several times, that it was fine." },
      { n: "Solar had brought him to Tatsumi Memorial anyway. She'd had to stand in the doorway of the police box until he gave up." },
      { s: 'mercy', f: 'neutral', t: "Sit. Sleeve up. Bandana off. Oh, that's a bandana. Of course it's a bandana." },
      { s: 'leon', f: 'neutral', t: "It's a scratch." },
      { s: 'mercy', f: 'serious', t: "It's eleven centimeters long, and you wrapped it in a bandana, and you are already the worst patient I have ever had. I once had a man who was half machine." },
      { n: "The staff lounge was empty except for them and a coffee maker that had been on since sometime in the previous decade. Angela laid out her kit on the table, needle and thread and antiseptic, the old way. The staff with the caduceus leaned in the corner. She didn't reach for it." },
      { s: 'leon', f: 'neutral', t: "That thing heals people. Solar says." },
      { s: 'mercy', f: 'neutral', t: "It does. It also teaches them that nothing has consequences. You'll get stitches, and you'll remember the fire escape." },
      { s: 'leon', f: 'happy', t: "...You sound like my handler." },
      { s: 'mercy', f: 'happy', t: "Then your handler is very wise and I would like to meet her." },
      { choose: [
        { t: "(Hand Leon the coffee to hold, so his hand has something to do.)", notes: 0, then: [
          { n: "She put the coffee in his good hand. He held it and didn't drink it and watched the needle go in with the flat, practiced patience of somebody who had been stitched a great many times by people with a great deal less time." }
        ] },
        { t: "Tell her who was on the roof, Leon.", notes: 0, then: [
          { s: 'leon', f: 'flustered', t: "...Nobody. An old friend." },
          { s: 'mercy', f: 'neutral', t: "An old friend who you chased up a fire escape at midnight. Hm. I have one of those." }
        ] }
      ] },
      { n: "She worked fast and talked the whole time, the way surgeons talked, to keep the patient somewhere other than his arm. Somewhere around the fourth stitch it stopped being that kind of talking." },
      { s: 'mercy', f: 'sad', t: "I rebuilt a man once who didn't want to be rebuilt. He hated me for years for it. I kept patching him anyway, every time he came back worse. It took a very long time for him to stop running." },
      { s: 'leon', f: 'sad', t: "Did he stop?" },
      { s: 'mercy', f: 'neutral', t: "He did. Not because of me. But I was there when he did, and that was something." },
      { s: 'leon', f: 'sad', t: "...Mine patches me up sometimes. Then she robs me. Every time. Ten years." },
      { s: 'mercy', f: 'happy', t: "And you keep going up fire escapes." },
      { s: 'leon', f: 'neutral', t: "And you keep patching." },
      { n: "They looked at each other across the table, a doctor who didn't sleep and an agent who didn't either, and something passed between them that Solar recognized from the dorm: two people who had both carried a great deal for a long time, noticing it in each other, and deciding not to say so out loud." },
      { n: "Nine stitches. Angela tied off the last one and cut it and dressed it with gauze and tape, neat as a letter, and slapped the back of his good hand, lightly, the way you'd mark a job as finished." },
      { s: 'mercy', f: 'serious', t: "Keep it dry. Come back Thursday. If you walk it off, I will know, and I will come and find you, and I have wings." },
      { s: 'leon', f: 'happy', t: "...Yes, ma'am." },
      { s: 'mercy', f: 'happy', t: "Heroes never die. They do, however, get tetanus." },
      { n: "On the way out he stopped at the door and asked, quietly, without turning around, whether she ever slept. Angela said sometimes. Leon said same. Then he held the door for Solar, and they went out into the November afternoon, and he kept his sleeve rolled down over the gauze all the way to the station, and touched it, once or twice, like something he'd been given." }
    ] },

    /* ── The lost & found, full attendance ── */
    { id: 'x2-lostfound', date: '12/20', slot: 0, unlock: { links: { noctis: 6, cloud: 6, leon: 5 } }, music: 'sun',
      label: 'Crossover · The lost & found', title: 'full attendance', place: 'Port Island · Pier', stamp: 'full-attendance', scene: [
      { n: "Cloud called it a meeting again. He said, again, very clearly, that it was not a social meeting. Then he arrived at the end of the Port Island pier on a cold, bright Sunday in December with two plastic bags of canned coffee instead of one, because word, apparently, had gotten around." },
      { n: "Noctis was there first, asleep against his post in a scarf. Leon came second, in the jacket, with a thermos of Officer Kurosawa's tea that he described as a hazard. Solar came third, and then she stopped counting, because people kept arriving." },
      { ifRank: { judy: 3 }, then: [
        { n: "Judy arrived with a space heater wired to a car battery, set it down in the middle of the pier without explanation, and turned it on. Everyone shuffled toward it at once like moths." }
      ] },
      { ifRank: { sebastian: 3 }, then: [
        { n: "Sebastian stood at the very back, hood up, by the railing, the way he stood at the back of everything, until Noctis wordlessly handed him a rod and pointed at the edge. He sat down at the front. He looked surprised to be there. He stayed." }
      ] },
      { ifRank: { haru: 3 }, then: [
        { n: "Haru brought a thermos of actual coffee, hand-ground, and poured it into everyone's empty cans with a smile, and Cloud watched his canned coffee be quietly replaced with something better and said nothing, with dignity." }
      ] },
      { ifRank: { aphrodite: 3 }, then: [
        { s: 'aphrodite', f: 'happy', t: "Darlings! Is this the support group? I brought peach juice. I've been told it's not a support group. I've decided it is." }
      ] },
      { ifRank: { kiriko: 3 }, then: [
        { n: "Kiriko came with a bag of taiyaki and her fox spirit trotting at her heels, which only about half the pier could see, and handed a taiyaki to every single person on the pier including Cloud, who looked at it like a grenade and ate it in two bites." }
      ] },
      { ifRank: { mercy: 3 }, then: [
        { s: 'mercy', f: 'serious', t: "Everyone, hands out. All of you. You're all standing at the end of a pier in December. I'm checking for frostbite, and no, Leon, you may not walk it off." }
      ] },
      { ifRank: { shadowheart: 3 }, then: [
        { n: "Shadowheart turned up late, in a dark cloak, and stood with her arms crossed a little apart from everyone, frowning at the water. After a while she frowned a little closer to the heater. After a while longer she was sitting next to Noctis, arguing with him about bait." }
      ] },
      { ifRank: { kasumi: 3 }, then: [
        { n: "Kasumi practiced a balance routine on the pier railing, ribbon and all, three meters above the bay, until Mercy noticed and the entire pier heard about it." }
      ] },
      { ifRank: { rohan: 3 }, then: [
        { s: 'rohan', f: 'serious', t: "Nobody move. I'm drawing. If any of you smile at me on purpose, I'll leave you out." }
      ] },
      { ifRank: { kuromi: 3 }, then: [
        { n: "Kuromi stole Noctis's spare lure within five minutes of arriving and spent the rest of the morning wearing it as an earring. He pretended not to notice. She was furious that he pretended not to notice." }
      ] },
      { ifRank: { astarion: 1 }, then: [
        { n: "There was a note pinned to the tackle box with a silver hatpin, in looping violet ink. Darling, the SUN. Save me a seat in the shade and tell me everything everyone says. A." }
      ] },
      { ifRank: { widowmaker: 3 }, then: [
        { s: 'leon', f: 'serious', t: "Heads up. We've got a sniper on the bridge. Ten o'clock, up in the cables." },
        { s: 'cloud', f: 'neutral', t: "...She's with us." },
        { n: "Up on Moonlight Bridge, far off across the water, something glinted, once, and then not again. Solar lifted her hand. The glint came back. Just once. Acknowledged." }
      ] },
      { ifRank: { ann: 1 }, then: [
        { n: "At the end of the row, by the post, there was a gap nobody filled. Nobody said why. Ann had gone home at the end of October, back through whatever door had brought her, and every few minutes someone glanced at the gap and then away." },
        { s: 'leon', f: 'neutral', t: "She'd have brought crepes." },
        { s: 'noctis', f: 'sad', t: "...Yeah. She would've." }
      ] },
      { ifRank: { haechan: 1 }, then: [
        { n: "On the very last post at the end of the pier someone had left a can of coffee, the warm kind, from the machine by the dorm laundry room. Nobody claimed it. Nobody had seen anyone leave it. Solar put it in her coat pocket and kept her hand around it the rest of the morning." }
      ] },
      { n: "When everybody who was coming had come, Cloud stood up. He stood the way he had in October, like a man setting a perimeter, except that this time he had to wait for the gulls to stop shouting before he could start." },
      { s: 'cloud', f: 'neutral', t: "Information. Anybody find a way home?" },
      { n: "Nobody had. They said so, one at a time, the way Solar imagined soldiers answered roll call. Negative. No. Not yet. Leon went last, and looked at the water instead of at anybody." },
      { s: 'leon', f: 'sad', t: "Everybody says January. When the green hour stops. Whether we find the door or it finds us." },
      { n: "The pier went quiet. Not the hiding kind of quiet. The kind where a lot of people from a lot of very different places are all thinking about the same thing, and nobody wants to be the first to say it." },
      { choose: [
        { t: "Then we've got a month. Let's not waste it.", notes: 0, then: [
          { s: 'noctis', f: 'happy', t: "...Agreed. Every Sunday. Here." },
          { s: 'cloud', f: 'neutral', t: "It's not a social meeting." },
          { s: 'leon', f: 'happy', t: "It's completely a social meeting, Strife." }
        ] },
        { t: "Group photo. Everybody. Right now.", notes: 0, then: [
          { s: 'cloud', f: 'serious', t: "...Fine. One." },
          { n: "It took eleven tries. Somebody was always blinking, or not in frame, or being a gull. The one that worked was blurry at one edge and half of them were laughing at something off camera, and it was perfect, and Cloud set it as his phone wallpaper and denied it for the rest of the year." }
        ] },
        { t: "(Don't say anything. Sit down at the end of the row.)", notes: 0, then: [
          { n: "Solar sat down in the row at the end of the pier with her legs over the edge, and after a moment Noctis shifted over to make room, and Leon on the other side passed her the terrible tea, and the quiet stayed quiet, and that was its own answer." }
        ] }
      ] },
      { n: "Leon caught a fish at two in the afternoon, after four hours, a small silver thing barely longer than his hand. He held it up to the winter light." },
      { s: 'leon', f: 'happy', t: "...Bingo. Twice in one year." },
      { n: "The whole pier applauded. Noctis applauded hardest. Cloud took a picture of it and sent it to Solar that night with no caption at all, the same as the first time, which she understood to mean that he'd had a good day, and that he'd been counting." }
    ] },

    /* ── Widowmaker, Kiriko & Mercy: one roof, no shots ── */
    { id: 'x2-ceasefire', date: '12/27', slot: 1, unlock: { links: { widowmaker: 8, kiriko: 8, mercy: 7 } }, music: 'tender',
      label: 'Crossover · Widowmaker, Kiriko & Mercy', title: 'ceasefire', place: 'Tatsumi Memorial Hospital · Rooftop', stamp: 'ceasefire', scene: [
      { n: "It was Kiriko's idea, which was how Solar knew it would either be wonderful or end in a gunfight. She'd brought a kettle, three thermoses, a box of omikuji, and a folding table she had borrowed from the shrine without, she said, technically asking." },
      { s: 'kiriko', f: 'serious', t: "It's the holidays. When we all go home we go back to being whatever we are to each other. So tonight we're not that. Tonight it's tea." },
      { n: "Angela was already there. She had been there first, actually, in her coat with her hands around a paper cup, at the rail on the hospital roof where she always stood, watching the snow come down on the lights of Port Island. She said she'd come for the tea. She had been looking at Moonlight Bridge the whole time." },
      { n: "At nine exactly there was a sound like a zipper being pulled very fast, and a grapple bit into the rooftop parapet, and Widowmaker came up over the edge of a seven-story building as if it were a front step, coat whipping, rifle on her back, and landed in the snow without leaving much of a print." },
      { s: 'widowmaker', f: 'neutral', t: "Little fox. Petite. ...Docteur." },
      { s: 'mercy', f: 'neutral', t: "Amélie." },
      { n: "The roof went very still. Widowmaker's face did nothing at all, which on her was a great deal." },
      { s: 'widowmaker', f: 'serious', t: "No one has called me that in a long time." },
      { s: 'mercy', f: 'sad', t: "I know. I knew who you were before. I came to the bridge, the other night, to say so. And then I didn't." },
      { s: 'widowmaker', f: 'neutral', t: "Then you knew someone I do not." },
      { choose: [
        { t: "Kiriko. Tea. Now.", notes: 0, then: [
          { s: 'kiriko', f: 'happy', t: "On it! Hojicha for everybody. Nobody's allowed to be tragic while holding hojicha. It's a rule. I just made it." },
          { n: "She put a cup in Widowmaker's hands before Widowmaker could refuse it, and one in Angela's, and the two women stood there holding tea in the snow and looking at each other across the folding table with the expressions of people who had been very skillfully outmaneuvered by a teenager." }
        ] },
        { t: "(Stand between them. Not in the way. Just there.)", notes: 0, then: [
          { n: "Solar walked to the folding table and stood at the end of it, between them, not blocking anyone. Just where both of them could see her. Widowmaker's shoulders came down a centimeter. Angela's did too. Kiriko started pouring." }
        ] }
      ] },
      { n: "They drank the tea. Nobody said much. The snow came down in big soft flakes that melted on the kettle with a hiss. Kiriko talked about Kanezaka and the shrine at home and her grandmother's terrible cat, and nobody had to answer." },
      { n: "Then Angela set her cup down and held out her hand, palm up, across the table." },
      { s: 'mercy', f: 'neutral', t: "May I? Your wrist. I won't do anything. I just want to count." },
      { n: "Widowmaker looked at the hand for a long time. Then she pulled off one glove, finger by finger, and laid her wrist in Angela's palm, blue-grey and cold as the parapet." },
      { n: "Angela counted. The whole roof counted with her, silently, in the snow." },
      { s: 'mercy', f: 'sad', t: "Thirty-six. Slow. Steady." },
      { s: 'mercy', f: 'neutral', t: "I can't undo what they did to you. I want to be honest about that. But I can tell you it's still beating. And that it's yours. Nobody else is counting it tonight but me." },
      { s: 'widowmaker', f: 'sad', t: "...That is a very strange thing for a doctor to say to a sniper." },
      { s: 'mercy', f: 'happy', t: "I've said stranger to worse." },
      { n: "Widowmaker took her hand back. She didn't put the glove on again. She held the tea with her bare hand instead, as if testing what warm felt like." },
      { s: 'kiriko', f: 'happy', t: "Fortunes! Everybody. That's the other rule." },
      { s: 'kiriko', f: 'neutral', t: "Angela-sensei. Kichi. \"The healer must also be healed. Sit down.\" ...Ha! It's literally telling you to sit down." },
      { s: 'mercy', f: 'happy', t: "The shrine is very rude." },
      { s: 'kiriko', f: 'surprised', t: "Widowmaker. Sue-kichi. Again. \"What was taken may be found in an unexpected place.\"" },
      { s: 'widowmaker', f: 'flustered', t: "...Two fortunes. I am becoming superstitious. This is your fault, little fox." },
      { choose: [
        { t: "Kiriko, draw one for yourself.", notes: 0, then: [
          { n: "Kiriko shook the box, drew, read it, and went quiet. Then she folded it very small and tied it to the railing of the hospital roof, the way you tied the ones you hoped would come true, and wouldn't say what it was." },
          { s: 'kiriko', f: 'happy', t: "It's a good one. Don't worry. It's just mine." }
        ] },
        { t: "Draw one for all three of you.", notes: 0, then: [
          { s: 'kiriko', f: 'neutral', t: "\"Opposites cover each other's blind spots.\" ...Huh. Same as on the bridge." },
          { s: 'widowmaker', f: 'neutral', t: "The box is repeating itself. It has run out of ideas." },
          { s: 'mercy', f: 'happy', t: "Or it means it." }
        ] }
      ] },
      { n: "At eleven Angela's pager went off. She stood, and buttoned her coat, and stopped beside Widowmaker on the way to the stairs." },
      { s: 'mercy', f: 'neutral', t: "Ceasefire?" },
      { s: 'widowmaker', f: 'neutral', t: "...Until January." },
      { n: "Angela nodded, once, like a signature, and went down the stairs two at a time. Widowmaker watched the door close behind her for a long while. Then she put the glove back on, and handed Kiriko her empty cup, and went back over the parapet into the snow the way she'd come, and left almost no print at all." },
      { n: "Kiriko packed up the kettle. The little folded fortune stayed tied to the rail, fluttering, collecting snow." }
    ] }

  ],
  places: []
});
