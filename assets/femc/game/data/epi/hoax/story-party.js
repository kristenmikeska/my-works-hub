/* The HOAX epilogue, second pass (Nov 6 2026): the longer winter-break party (Kat: "YES: build the longer winter-break party,
   with more of the school talking and mingling"; her Runners note: she loves social-world drama and longer parties).
   Data only. This file defines R.partyMingle, a list of scene lines that story-w2.js splices into epi-h-party (12/29 evening)
   once in each route's branch, between the arrival and the kitchen:
     jungwon route  after Cherry's "I will physically sit on you."            before "The kitchen was where Jihoon was."
     jihoon route   after "She didn't answer that." (split off its old line)   before "She sat on the third stair..."
     council route  after Sunoo's "It's Evian!"                               before "Then the kitchen."
   So this file must load BEFORE story-w2.js: epilogue.js WORLDS.hoax.files lists it just ahead of story-w2, and the scene
   checker loads alphabetically (story-party < story-w2). If it were missing, story-w2's spread is `...(R.partyMingle || [])`
   and the party plays exactly as it did before.

   Shape: a lead-in by route (ifEpiRoute), then { mingle: { pick: 4, min: 2 } } (scene.js mingle(): the options not yet taken,
   again and again; the leave option shows once two are taken; after four it goes on by itself), then nothing: each route's own
   lines carry on. Every option has route touches (who's beside her: Cherry on the jungwon route, nobody on the jihoon route,
   the council on the council route; Cherry stays home on the jihoon route, as story-days.js epi-h-ready has it).
     (The living room.)        Yuna and Seoyeon from chemistry; the forum's theories in person; the old table and the other table
                               as gossip. Choice: RETREAT FACTS (strain) / ask about them / "I joined a cult".
     (The stairs.)             Eunchae vlogging the party; Kazuha with crisps; Minho, the first-year behind part 5's "rehab"
                               comment, smaller than his post. Choice: a quote / a hand over the lens / let Minho off.
     (Find the host.)          Dohyun, the swim-team boy, hiding in his own den; his mother's fruit plate; Nana is famous at
                               Hanlim (the swim team's group chat has a Nana channel). Choice: eat a grape / pass the picture round.
     (The back step.)          Asahi and Junkyu where the old table always ends up; who can see which step she sits on.
                               Choice: sit between them (bond junkyu +1) / say she'll come back.
     (Never Have I Ever.)      the dining room, a can of barley tea; by route, the round that makes the room scream. Her own
                               turn: "...been to Iwatodai." (nobody drinks) / "...lost a math competition."
     leave                     (That's enough people.)
   Flags set: none (stats and one { bond } only; nothing later needs these choices). Flags read: the locked route (ifEpiRoute).
   Glitches: one { glitch: { strain: 1 } } after the RETREAT FACTS answer (a lie that holds the temple cover). No glitch ids.
   Cast (world.js cast, no portraits): dohyun (the host), yuna, seoyeon (chemistry), minho (a first-year).

   Inventions for Kat to confirm
   - The host is Dohyun, a third-year on the swim team (the depth pass's goggles photo is his; the untouched fruit plate on the
     island was his mother's good one). The swim team's group chat has a channel for Nana pictures.
   - Yuna and Seoyeon sit behind Solar in chemistry; Seoyeon broke up with someone over Christmas; Yuna got into an early
     programme. Minho is a first-year whose forum comment started "rehab".
   - Nana tackling Maeumi on the first day of school is Hanlim lore (Jake told everyone).
   - Solar plays Never Have I Ever with a can of barley tea; nobody makes her explain it.
   Canon held: Jungwon is home (jungwon and council routes; on the council route he's on speaker in Heeseung's pocket and
   stays there); the guy from sophomore year stays at the fridge, unnamed; nothing of sophomore year is filled in; no Danielle,
   no video; Cherry and Sunghoon stay "soon"; Hyunsuk stays hurt; the kitchen confrontation is untouched and still comes after. */
(() => {
  const R = ((window.FEMC_EPI_WORLDS ||= {}).hoax ||= {});
  const P = 'Hanlim · The Party', OUT = 'Hanlim · The Party · Outside';

  R.partyMingle = [
    // ── lead-in, by route ──
    { ifEpiRoute: 'jungwon', then: [
      { n: "Cherry didn't let go of her hand. She steered her away from the kitchen the way a tugboat steers something much bigger than itself, with total confidence and no regard for anybody in the way, and Solar let herself be steered, past the shoe landslide and the red cups and a boy asleep sitting up on the radiator, into the rest of the house, which was a lot of house." },
      { s: 'cherry', f: 'neutral', t: "Okay. Rules. You talk to whoever you want. You don't go in the kitchen. If anybody says the word temple in a voice I don't like, you look at me, and I handle it." },
      { s: 'solar', f: 'happy', t: "How do you handle it?" },
      { s: 'cherry', f: 'happy', t: "Legally, Sol. Mostly." }
    ] },
    { ifEpiRoute: 'jihoon', then: [
      { n: "She left Hyunsuk by the shoes and went into the house on her own, because nobody had come to hold her hand tonight and she'd decided in the car that she wasn't going to stand in a hallway waiting for someone to. It was the first party of her whole life she'd walked into on her own two feet. Every other one, there'd been a Cherry on one arm or a Jihoon on the other. Tonight the Jihoon was doing laps of somebody else's kitchen and the Cherry was at home with a face mask on, texting her every eleven minutes." },
      { phone: [
        { from: 'cherry', t: "r u alive" },
        { from: 'solar', t: "yes" },
        { from: 'cherry', t: "is he being a dick" },
        { from: 'solar', t: "he's being jihoon" },
        { from: 'cherry', t: "so yes. ok. eleven minutes" }
      ], contact: 'cher' }
    ] },
    { ifEpiRoute: 'council', then: [
      { n: "Heeseung's agenda had a line for this. She'd seen it laminated. *21:10 to 21:40, MINGLE (visible),* with a smaller line under it in brackets that said *(be normal)*, which was the most Heeseung thing she'd ever read, because it meant he'd sat at his desk and considered the possibility that they wouldn't be." },
      { n: "So they mingled. Visibly. The council scattered into the house like somebody had dropped a bag of marbles, and she was left in the hallway with her coat still on and Jungwon's voice coming very faintly out of Heeseung's shirt pocket two rooms away, asking somebody to turn him around." }
    ] },
    { cg: 'epi-h-party-hall' },
    { n: "The house went on further than it had any right to. A living room with a sectional sofa the shape of a horseshoe and forty people on it. A staircase with people sitting on every step like a stadium. A den at the back with its door half shut. A dining room where somebody had pushed the chairs into a circle. A glass door at the very end, fogged at the corners, with the back step behind it and the dark garden and the snow. Every room had a different song in it, bleeding into the next, and every room had at least one person in it who looked up when she came in." },

    { cg: null },
    { mingle: { pick: 4, min: 2 }, choose: [

      // ── the living room ──
      { t: "(The living room. Two girls from chemistry are waving.)", then: [
        { n: "Yuna and Seoyeon sat behind her in chemistry, which meant they'd spent a whole semester looking at the back of her head and had developed, she suspected, a lot of theories about it. They were on the arm of the horseshoe sofa, sharing a bag of honey-butter chips and a single can of something peach, and the moment she came in Yuna waved with her whole arm, like Solar was a taxi." },
        { s: 'yuna', t: "SOLAR. Oh my God. Sit. Sit, sit. Seoyeon, move your leg." },
        { s: 'seoyeon', t: "My leg is a leg, Yuna, it doesn't *move*, it's attached." },
        { n: "She sat on the bit of sofa arm they made for her. It was warm from the radiator and slightly sticky, like everything else in the house, and Yuna offered her the chips before she'd even got her balance, which was how she knew she was about to be asked something." },
        { s: 'yuna', t: "Okay. Okay. We're not going to be weird about it." },
        { s: 'seoyeon', t: "We're going to be a *little* weird about it." },
        { s: 'yuna', t: "Seoyeon thinks rehab. I think you all eloped. Not *you* eloped. The whole council. Like a group thing. A wedding in Jeju with eight people and nobody's parents." },
        { s: 'seoyeon', t: "That's not a thing." },
        { s: 'yuna', t: "It's a thing in my *heart*." },
        { n: "Behind them, on the other arm of the sofa, a boy she'd never spoken to in her life leaned in to listen without pretending not to. Across the room two girls at the window stopped talking. It was such a small room, suddenly, for something with forty people in it." },
        { s: 'seoyeon', t: "Also. Also. Is it true Yang Jungwon's mom put a tracker on his phone? My cousin's friend says she put a tracker on his phone. And on his *car*." },
        { s: 'solar', f: 'neutral', t: "His car is her car." },
        { s: 'seoyeon', t: "So that's a yes." },
        { s: 'yuna', t: "And Park Jihoon's here. Is he okay? He's... a lot tonight. He did a speech in the kitchen. About the fruit plate. Nobody asked him to." },
        { n: "And there it was, the thing under the thing, laid on the sofa arm between them with the chips. *Your old table is in the kitchen and your new table is at a temple. Which one are you?* They didn't mean it unkindly. They didn't mean it at all. They just wanted to know which room to put her in, the way everybody always did, as if she'd fit in one." },
        { ifEpiRoute: 'jungwon', then: [
          { n: "Cherry, standing behind the sofa with her arms crossed like a bouncer at a club with very high standards, cleared her throat, and both girls sat up straighter without knowing why." }
        ] },
        { ifEpiRoute: 'council', then: [
          { n: "Sunoo appeared at the end of the sofa with the crate on his hip, handed all three of them a bottle of water each, said *happy holidays!* and *it's sealed!* in one breath, and was gone again before anybody could ask him anything, which she was fairly sure was a technique." }
        ] },
        { choose: [
          { t: "It was a leadership temple stay. Four a.m. bells. Rice porridge.", stat: { charm: 1 }, then: [
            { n: "She gave them RETREAT FACTS, the whole thing, bell and porridge and the monk who'd made Jake carry a bucket, in Heeseung's exact order, and it came out of her smooth as a song she'd learned for a recital, and she hated how good it sounded." },
            { glitch: { strain: 1 } },
            { s: 'yuna', t: "...That's so much worse than eloping." },
            { s: 'seoyeon', t: "That's so much worse than *rehab*. Four a.m.? I'd rather go to rehab." },
            { n: "They lost interest in it at once, like a balloon let go of, and started talking about Seoyeon's ex instead, and Solar ate a chip and smiled and felt the lie settle into her somewhere behind the ribs, small and cold, next to the others." }
          ] },
          { t: "(Ask about them instead.)", stat: { kindness: 1 }, then: [
            { s: 'solar', f: 'happy', t: "Forget the temple. Seoyeon, didn't you have a boyfriend in November?" },
            { n: "Seoyeon's face did something complicated and then collapsed into a story, and the story took eleven minutes and involved a Christmas Eve, a Starbucks, a text that said *we should talk* sent from across the same table, and a scarf Seoyeon had knitted herself that she was now going to unknit, out of spite, one row at a time. Yuna got into an early programme in December and hadn't told anyone because nobody had asked. Solar asked. Yuna went pink to the ears." },
            { s: 'yuna', t: "Nobody's asked me anything all night. Everybody's just asking about *you*." },
            { s: 'solar', f: 'happy', t: "I'm extremely boring. You're the one going to Seoul early." },
            { n: "Yuna looked at her like she'd been handed something, and Seoyeon put her head on Solar's shoulder for no reason, and for a few minutes on the arm of a sticky sofa she was just a girl from chemistry, and it was so nice she almost didn't want to get up." }
          ] },
          { t: "Honestly? I joined a cult. The robes were cute.", stat: { courage: 1 }, then: [
            { n: "Yuna screamed. Seoyeon choked on the peach thing. The boy on the other arm of the sofa laughed so hard he had to put his can on the floor, and two girls by the window who hadn't been part of the conversation at all laughed too, the way people laugh when they're relieved, because somebody had finally said something ridiculous enough that they didn't have to wonder." },
            { s: 'yuna', t: "I'm putting that on the forum." },
            { s: 'solar', f: 'happy', t: "Put it on the forum. Credit me." },
            { n: "By midnight it was a comment under part 5 with three hundred likes, *she says it was a cult and the robes were cute,* and it was the first thing anyone had posted about her all week that she'd written herself." }
          ] }
        ] }
      ] },

      // ── the stairs ──
      { t: "(The stairs. Eunchae from Hanlim Unfiltered is filming.)", then: [
        { n: "Eunchae was sitting four steps up with her phone held out in front of her at arm's length, talking to it in the low thrilled voice of a nature presenter who'd found something rare in a bush, and Kazuha was a step above her with a family-size bag of shrimp crackers, eating them one at a time and watching the hallway like it was a film." },
        { s: 'eunchae', f: 'happy', t: "—and the vibe tonight is honestly *immaculate*, chat, the bass is crazy, somebody's mom's fruit plate has not been touched, we'll get to that— oh. Oh my God. Oh my God, chat." },
        { s: 'eunchae', f: 'surprised', t: "Solar-sunbae. Hi. Hi. Can I— you don't have to— can I just get you saying hi to chat?" },
        { s: 'kazuha', f: 'happy', t: "Solar-senpai. Cracker?" },
        { n: "She took a cracker. Kazuha seemed pleased, in the serene way Kazuha was pleased by everything, and then looked at her a beat too long, at her face and then a little to the left of it, at nothing, at the air beside her ear." },
        { s: 'kazuha', f: 'neutral', t: "Your hair is very... here, tonight. Very here. I like it." },
        { n: "Before she could work out what that meant, Eunchae reached down the stairs and grabbed the sleeve of a boy who was trying very hard to get past without being noticed, a first-year, small and round-faced, in a shirt that was clearly his older brother's and a pair of glasses he kept pushing up with one finger, and hauled him into the shot." },
        { s: 'eunchae', f: 'happy', t: "Chat. Chat, this is Minho. Minho is *minhoneyyy* on the forum. Minho wrote the rehab comment." },
        { s: 'minho', t: "I— Eunchae— that's private—" },
        { s: 'eunchae', f: 'happy', t: "It has eighty-nine upvotes, Minho, it's not private, it's *published*." },
        { n: "Minho looked at Solar. Solar looked at Minho. Online he'd been a font, bold and certain, *rehab, all eight of them, a group rate*, and here he was a sixteen-year-old in his brother's shirt going slowly crimson from the collar up, with a can of cola he hadn't opened held against his chest like a shield." },
        { s: 'minho', t: "I'm really sorry. I didn't think anyone would read it. I don't— I'm normally like four upvotes." },
        { ifEpiRoute: 'jungwon', then: [
          { s: 'cherry', f: 'serious', t: "Minho. Minho, look at me. I know where the first-year lockers are." },
          { s: 'minho', t: "...Okay." }
        ] },
        { ifEpiRoute: 'council', then: [
          { n: "From somewhere directly overhead, upside down, Niki's face appeared over the bannister, hair hanging, phone already up." },
          { s: 'niki', f: 'happy', t: "minhoneyyy?? bro. BRO. I'm screenshotting your face." }
        ] },
        { ifEpiRoute: 'jihoon', then: [
          { s: 'eunchae', f: 'surprised', t: "Also, sorry, sunbae, for the record, chat wants to know. You came with Park Jihoon. Is that a statement?" },
          { n: "She'd known somebody would ask. She hadn't known it would feel like being handed the bill for something in front of everyone." }
        ] },
        { choose: [
          { t: "(Give Eunchae a quote.)", stat: { charm: 1 }, then: [
            { n: "She leaned into the phone's light like she'd been doing it all her life. Somewhere in a dormitory she'd done things much stranger than this, in front of much worse." },
            { s: 'solar', f: 'happy', t: "The council would like everyone to know that it loves them, it's fine, and please drink some water. That's the statement. That's all of it." },
            { s: 'eunchae', f: 'happy', t: "*Chat.* She said loves. She said the council *loves* us. I'm clipping that. I'm making it my ringtone." },
            { n: "It went up at eleven. It did numbers. Nobody who watched it knew she'd meant every word, which was fine; she didn't need them to." }
          ] },
          { t: "(Put your hand over the lens.)", stat: { courage: 1 }, then: [
            { n: "She put her palm flat over the phone, gently, the way you'd cover a cup so nothing fell in it." },
            { s: 'eunchae', f: 'surprised', t: "Censorship! Chat, she's censoring me! I *love* it. This is the most exciting thing that's happened to me since the bake sale." },
            { s: 'solar', f: 'happy', t: "Film the fruit plate, Eunchae. The fruit plate needs you." },
            { n: "And Eunchae, God love her, did. She went down the stairs with her phone held out in front of her and did four minutes on the untouched fruit plate, live, with commentary, and it was the most watched thing she posted all break until New Year's Eve." }
          ] },
          { t: "Minho. It's fine. It was a good guess.", stat: { kindness: 1 }, then: [
            { s: 'minho', t: "...Was it?" },
            { s: 'solar', f: 'happy', t: "No. It was terrible. But it was a confident guess, and that's most of the forum." },
            { n: "He laughed, surprised into it, and pushed his glasses up, and finally opened the cola, which sprayed, because of course it did, all over his brother's shirt, and Kazuha handed him a shrimp cracker in solemn condolence, and Minho stood on the stairs dripping and laughing and said *thank you, sunbae* about four times, and she thought that was probably the last time he'd ever write anything about anyone he'd have to look at." }
          ] }
        ] }
      ] },

      // ── the host ──
      { t: "(Find whoever's house this is.)", then: [
        { n: "She found him in the den, which took some doing, because he was hiding in it. Dohyun from the swim team, third-year, shoulders like a door and the anxious face of a person whose parents were in Jeju until the fourth, was sitting on the arm of a leather armchair with a roll of paper towels in his lap, and every time anybody came near the door with a cup he flinched." },
        { s: 'dohyun', t: "Please don't put that on the piano. Oh, hi. Sorry. Hi. Is someone on the piano?" },
        { s: 'solar', f: 'happy', t: "Nobody's on the piano." },
        { s: 'dohyun', t: "Somebody's going to be on the piano." },
        { n: "He was right, probably. She sat down on the other arm of the armchair. The den smelled of leather and the citrus spray his mother clearly used on everything, and over the door there was a framed certificate for a hundred-metre butterfly, and he saw her looking at it and covered his eyes." },
        { s: 'dohyun', t: "There's one of me in goggles on the stairs. When I was six. Everyone's seen it. Somebody's already knocked it crooked. My mom's going to know. She knows everything." },
        { n: "Then he took his hand off his eyes and looked at her properly, and something in his face changed, the way faces did at school sometimes when people worked out who she was. Except it wasn't the retreat face. It was something else. It was delight." },
        { s: 'dohyun', t: "Wait. You're Nana's mom." },
        { s: 'solar', f: 'surprised', t: "I'm— yes?" },
        { s: 'dohyun', t: "Oh my God. Oh my God, the swim team has a *channel* for him. In the team chat. It's called *nana updates*. Whenever you post him, somebody screenshots it. Coach is in that chat. Coach reacts to him. Coach doesn't react to *us*." },
        { n: "Two girls in the doorway had stopped to listen, and then a boy behind them, and somebody said *the big white one?* and somebody else said *the one who tackled Yang Jungwon's dog on the first day,* as if it were history, as if it had been taught, and a whole argument broke out in the doorway about how big he actually was, and whether he was a husky, and whether you could ride him." },
        { s: 'solar', f: 'happy', t: "He's a Samoyed. He's sixty pounds. You can't ride him. He sleeps on my bed every night and takes up two-thirds of it and I let him, because I'm weak." },
        { s: 'dohyun', t: "Two-thirds. That's so— that's the best thing I've ever heard." },
        { ifEpiRoute: 'council', then: [
          { n: "Sunoo had found the den too, eventually, the way Sunoo found every person in a building who looked like they needed something, and he gave Dohyun a bottle of water and then, after a moment's thought, a second one, and sat down next to him on the floor, and the two of them started talking about hosting in low, sympathetic voices, like veterans." }
        ] },
        { ifEpiRoute: 'jungwon', then: [
          { n: "Cherry came in behind her, took one look at the paper towels and the flinching, and went back out to the kitchen island without a word, and came back two minutes later with three kiwi halves off the fruit plate on a napkin, and gave him one." },
          { s: 'cherry', f: 'neutral', t: "Somebody has to eat it, babe. Your mom cut those." }
        ] },
        { ifEpiRoute: 'jihoon', then: [
          { n: "Nobody had come in with her, and nobody needed to. For five minutes in a stranger's den she was Nana's mom and nothing else, not the temple girl, not the one who'd come with Park Jihoon, and it was the nicest thing anyone had called her all week." }
        ] },
        { choose: [
          { t: "(Go and eat a grape off his mother's fruit plate.)", stat: { kindness: 1 }, then: [
            { n: "She went out to the island, past the kitchen without looking in it, and took a grape off the good plate, and ate it standing there where the den doorway could see her." },
            { n: "It was a very good grape. Somebody's mother had chosen it. A boy next to her looked at the grape, and then at the plate, and took one too, and then a girl did, and then a whole group of second-years descended on the melon like they'd been waiting for permission, and in ten minutes the plate was half gone, and through the den door she saw Dohyun watching it with his hands pressed together under his chin like a man at a wedding." }
          ] },
          { t: "(Show him this morning's picture of Nana.)", stat: { charm: 1 }, then: [
            { n: "She found it on her phone, Nana asleep across her pillow at six that morning, upside down, all four legs in the air and his tongue out of one side, and held it up, and Dohyun made a sound she had only ever heard from people holding newborns." },
            { n: "The phone went round the den. It went round the doorway. It went out into the hall and came back eight minutes later with a smudge on the screen and a new crack in the case she was fairly sure had been there before, and in the meantime she heard her dog discussed by about thirty people, his ears, his feet, whether he was smiling or whether that was just his face, and every single one of them was in love with him, which was correct, and the only thing at this party everyone in the house agreed on." },
            { s: 'dohyun', t: "Can you post that. Can you post that tonight. The team chat would lose its mind." },
            { s: 'solar', f: 'happy', t: "I'll post it for the team chat." }
          ] }
        ] }
      ] },

      // ── the back step ──
      { t: "(The back step, where the old table always ends up.)", then: [
        { place: OUT, time: 'Evening', soft: true },
        { n: "The old table always ended up on the back step of whatever house it was, ever since they were fourteen, because Asahi hated music he hadn't chosen and Junkyu got hot in crowds and the rest of them had followed, every time, the way you follow the people who are going outside. She'd known they'd be there before she opened the glass door. They were." },
        { n: "Asahi sat on the top step with his headphones round his neck and a cup of cola, looking at the snow like it had disappointed him personally. Junkyu sat two steps down in a bright red puffer that made him look like a fire extinguisher, and when he saw her he lit up so fast it was almost embarrassing to see." },
        { s: 'junkyu', f: 'happy', t: "SOLAR!!! You came out!!! I didn't know if you— are you allowed to sit with us?" },
        { n: "He didn't mean it like that. Junkyu had never once in his life meant anything like that. It went in anyway, under the ribs, small and sharp, and stayed there." },
        { s: 'asahi', f: 'neutral', t: "She's vice president, Kyu. She can sit wherever. No one cares." },
        { s: 'asahi', f: 'neutral', t: "...Everyone in that kitchen can see which step she sits on, though." },
        { n: "He was right. She looked back. The glass door was fogged at the corners and clear in the middle, and through the middle she could see the dining room and the hallway and the edge of the kitchen, and at least six people in there were looking out at the back step, not at her exactly, just at the shape of it. Who was sitting with who. The old table. The other table. Everybody at Hanlim had been keeping score all year and nobody had told her the rules, and now she was standing in the doorway between two of the columns." },
        { ifEpiRoute: 'council', then: [
          { n: "In the hallway, Jake saw her through the glass and waved, both arms, cheerfully, like a man on a dock, and Asahi watched him do it without any expression at all." },
          { s: 'asahi', f: 'neutral', t: "Your other table's waving." }
        ] },
        { ifEpiRoute: 'jungwon', then: [
          { n: "Cherry came out behind her and sat down on the step on Asahi's other side without being asked, and they looked at each other with the deep, restful hatred of people who'd known each other since they were eleven." },
          { s: 'cherry', f: 'neutral', t: "Kellin Quinn." },
          { s: 'asahi', f: 'neutral', t: "Cherry. You're on my step." },
          { s: 'cherry', f: 'happy', t: "It's a public step." }
        ] },
        { ifEpiRoute: 'jihoon', then: [
          { n: "The door opened again behind her. Hyunsuk, who'd come in with Jihoon and stayed two steps behind him all night like a shadow that had been told to keep its distance, came out with his hands in his pockets and sat on the bottom step and didn't say anything, and after a minute held his cup of cola up over his shoulder without looking round, offering it to whoever wanted it." }
        ] },
        { s: 'asahi', f: 'sad', t: "He's been worse. Since the week you were gone. Not your fault. Saying it anyway." },
        { n: "Nobody had to ask who. The bass came through the glass and the snow came down into the garden, slow and fat, onto a plastic slide and a covered barbecue and a garden gnome somebody had turned to face the fence, and Junkyu pulled his knees into the red puffer and looked at her with his whole open face, waiting to see where she'd go." },
        { choose: [
          { t: "(Sit down between them.)", stat: { kindness: 1 }, then: [
            { n: "She sat down on the step between Asahi and Junkyu with her coat still on, and the cold came straight up through her jeans, and she didn't care. Junkyu put his head on her shoulder at once, heavy, like Nana did, and Asahi didn't move at all, which from Asahi was a hug." },
            { s: 'junkyu', f: 'happy', t: "I missed this. I missed this so much. Is it weird I missed this?" },
            { s: 'asahi', f: 'neutral', t: "It's weird you say it out loud." },
            { s: 'asahi', f: 'neutral', t: "(I missed it too.)" },
            { bond: { junkyu: 1 } },
            { n: "Inside, six people watched the back step through the glass and decided something about her. She let them. She sat there until her legs went numb, and when she finally got up Junkyu held on to her coat sleeve for a second, the way you hold on to the side of a pool." }
          ] },
          { t: "(Stay standing. Say you'll come back out.)", then: [
            { s: 'solar', f: 'sad', t: "I'll come back out. In a bit. I promise." },
            { s: 'asahi', f: 'neutral', t: "Sure." },
            { n: "Just that. *Sure.* He didn't say it meanly. He said it like a person who'd stopped counting promises at some point and didn't want her to know when. Junkyu waved at her through the glass when she went in, both hands, smiling, and she waved back, and the door shut, and the step went on without her, which it had been doing for a while." }
          ] }
        ] },
        { place: P, time: 'Evening', soft: true }
      ] },

      // ── never have I ever ──
      { t: "(The dining room. Somebody's started Never Have I Ever.)", then: [
        { n: "The dining-room chairs had been pushed into a ragged circle and fifteen people were in it, swim team and second-years and a girl from the debate club who had clearly come to observe, and somebody put a can in Solar's hand before she sat down. She looked at it. Barley tea. She didn't know who'd done that. She didn't ask. Nobody in the circle said a single word about it, and she loved them all a little for it, even the ones she didn't know." },
        { n: "The rules were the usual ones. Ten fingers. Somebody says a thing they've never done. Whoever has done it drinks and puts a finger down. It took exactly three rounds for it to turn into what it always turned into, which was a weapon." },
        { s: 'dohyun', t: "Never have I ever been to a temple." },
        { n: "The whole circle turned and looked at her at once, like sunflowers. She held the eye contact. She lifted the barley tea, slowly, ceremonially, and took a sip, and put one finger down, and the circle howled." },
        { ifEpiRoute: 'jungwon', then: [
          { s: 'cherry', f: 'happy', t: "Never have I ever kissed Yang Jungwon." },
          { n: "She went red to her hairline. She drank. The circle lost its mind, a whole room of people screaming at a can of barley tea, and somebody's phone came up, and Cherry put her hand flat over it without even looking, and somebody in the doorway shouted *JOLAR* in Jake's exact voice even though Jake was nowhere in the house." },
          { s: 'cherry', f: 'neutral', t: "That's for every time you two have been disgusting in front of me at Yeobo's. I keep a list." }
        ] },
        { ifEpiRoute: 'council', then: [
          { s: 'jay', f: 'neutral', t: "Never have I ever been on the student council, bro." },
          { n: "Jay didn't drink. Everyone else from the council who'd wandered into the circle by then did, all at once, Jake and Sunghoon and Sunoo, out of Sunoo's crate of water, solemnly, like a toast at a funeral, and Heeseung, in the doorway, drank too, and from his shirt pocket a small voice asked what was happening and whether it should be drinking something." },
          { s: 'heeseung', f: 'neutral', t: "You're on a phone, Jungwon." },
          { s: 'jungwon', f: 'neutral', t: "I can still participate." }
        ] },
        { ifEpiRoute: 'jihoon', then: [
          { s: 'seoyeon', t: "Never have I ever been best friends with Park Jihoon." },
          { n: "She drank. Hyunsuk, leaning in the doorway, drank too, a mouthful of cola, without changing his face. And across the hall, in the kitchen, on the counter, Jihoon, who couldn't possibly have heard over the bass and had heard anyway, lifted his cup to the two of them through the doorway, and drank, and put a finger down, slowly, all by himself." },
          { n: "Nobody in the circle knew what that was. She did. She looked at her barley tea for a while." }
        ] },
        { n: "Then it came round to her." },
        { choose: [
          { t: "Never have I ever been to Iwatodai.", stat: { courage: 1 }, then: [
            { n: "She didn't know why she said it. She said it to see what would happen, the way you press a bruise." },
            { n: "Nothing happened. Fifteen people looked at her, polite and puzzled, and nobody drank, and somebody said *where's that,* and somebody else said *is that a club,* and the girl from the debate club wrote something in her phone." },
            { s: 'solar', f: 'happy', t: "Nowhere. It's nowhere. I'm being weird. Next." },
            { n: "And they went on, and the next one was *never have I ever cried at a dog video,* and almost everyone drank, and she drank too, and nobody noticed she'd put a finger down for a place that didn't exist, and she sat there with her hand in her lap holding the folded finger, like it was something she'd been given to keep." }
          ] },
          { t: "Never have I ever lost a math competition.", stat: { charm: 1 }, then: [
            { n: "Everyone drank. Everyone. Fifteen people and the girl from debate, who looked furious about it, and two boys who'd never entered a math competition in their lives and drank on principle, and a second-year who said *I lost one in the third grade and I still think about it* with genuine pain." },
            { s: 'dohyun', t: "Who hasn't lost a math competition?" },
            { s: 'solar', f: 'happy', t: "Exactly one person in this school." },
            { n: "It took them a second. Then the whole circle groaned, and somebody threw a cushion at her, and it was the best she'd felt all night, sitting in a stranger's dining room with a can of barley tea, being teased about her boyfriend by people who'd never once been to his house." }
          ] }
        ] }
      ] },

      // ── leave ──
      { t: "(That's enough people for now.)", leave: true, then: [
        { n: "She'd been in the house nearly an hour and she still had her coat on. She realised it in the hallway, by the crooked photo of the boy in goggles, and decided not to take it off. It felt like the kind of party where you might want to leave in a hurry. It felt, if she was honest, like every party she'd ever been to." }
      ] }
    ] }
  ];
})();
