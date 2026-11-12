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
   no video; Cherry and Sunghoon stay "soon"; Hyunsuk stays hurt; the kitchen confrontation is untouched and still comes after.

   Stakes pass (Nov 11 2026; stakes.js documents the scores, R.stakesIf is read here): the mingle picks 5 (was 4) and has two
   more rooms, (Upstairs, the bathroom line: Chaewon's index cards; the girls through the door) and (The front porch: Jay and
   the football team, Taeoh in narration); then, after the mingle and before every route's kitchen, three beats every route
   plays: the tip (Eunchae's anonymous photo: owe her / post it / hunt the sender, who leads to the girl on the landing,
   unnamed: Do Hayoon), the hallway (Hyunsuk vs Jay: back Hyunsuk / back Jay / tell them both off on camera) and Mom's 11:05
   text (lie / truth / on read); then the forum by half eleven (reads tonight's heat flags). R.partyCoda (end of file) holds
   each route's Jungwon-Jihoon beat, spliced by story-w2.js. Words (each line once, mingle + codas): 4.5k → 9.7k.
   Flags set: heat epi-h-heat-cult / -quote / -iwatodai / -door / -loud / -photo / -hunt / -scene; trust epi-h-trust-step /
     -jay-porch / -crew / -council / -call; sus epi-h-sus-party / -ignored; local (read later) epi-h-party-phone (the Nana
     picture went round: the 1/9 leak), epi-h-party-owe-eunchae (1/8), epi-h-party-hayoon (1/2 DM, the hearing),
     epi-h-party-chaewon (1/9 prom), epi-h-party-backed-crew / -council (the hearing, results), epi-h-party-jw-jh-talked /
     -jh-nophone / -jh-speaker / -jh-declined / -jh-answered / -cn-talked / -cn-walked (the hearing).
   Inventions for Kat: Chaewon at the party, revising the handbook; Taeoh (football, second-year, a parka); the anonymous tip
   with the photo; hanlim_accountability existing before the motion.
*/
(() => {
  const R = ((window.FEMC_EPI_WORLDS ||= {}).hoax ||= {});
  const P = 'Hanlim · The Party', OUT = 'Hanlim · The Party · Outside';
  // Stakes pass (Nov 11 2026): stakes.js loads before this file (alphabetical in the checker, and WORLDS.hoax.files order).
  const IF = R.stakesIf || ((sc, range, then, els) => ({ ifCount: { of: [], ...range }, then, else: els || [] }));

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
    { mingle: { pick: 5, min: 2 }, choose: [ // stakes pass (Nov 11 2026): pick 4 → 5, two more rooms

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
          { t: "Honestly? I joined a cult. The robes were cute.", stat: { courage: 1 }, flag: 'epi-h-heat-cult', then: [
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
          { t: "(Give Eunchae a quote.)", stat: { charm: 1 }, flag: 'epi-h-heat-quote', then: [
            { n: "She leaned into the phone's light like she'd been doing it all her life. Somewhere in a dormitory she'd done things much stranger than this, in front of much worse." },
            { s: 'solar', f: 'happy', t: "The council would like everyone to know that it loves them, it's fine, and please drink some water. That's the statement. That's all of it." },
            { s: 'eunchae', f: 'happy', t: "*Chat.* She said loves. She said the council *loves* us. I'm clipping that. I'm making it my ringtone." },
            { n: "It went up at eleven. It did numbers. Nobody who watched it knew she'd meant every word, which was fine; she didn't need them to." },
            { s: 'forum', t: "re: WHERE IS THE COUNCIL (part 5) · \"the council loves us\" ok but why does she look like she hasn't slept in nine days" }
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
          { t: "(Show him this morning's picture of Nana.)", stat: { charm: 1 }, flag: 'epi-h-party-phone', then: [
            { n: "She found it on her phone, Nana asleep across her pillow at six that morning, upside down, all four legs in the air and his tongue out of one side, and held it up, and Dohyun made a sound she had only ever heard from people holding newborns." },
            { n: "The phone went round the den. It went round the doorway. It went out into the hall and came back eight minutes later with a smudge on the screen and a new crack in the case she was fairly sure had been there before, and in the meantime she heard her dog discussed by about thirty people, his ears, his feet, whether he was smiling or whether that was just his face, and every single one of them was in love with him, which was correct, and the only thing at this party everyone in the house agreed on." },
            { s: 'dohyun', t: "Can you post that. Can you post that tonight. The team chat would lose its mind." },
            { s: 'solar', f: 'happy', t: "I'll post it for the team chat." },
            { n: "Her phone had been unlocked the whole eight minutes, every app on it open to anyone who swiped. She didn't think about that. Not then." }
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
        // Nov 11 2026 (Kat): searchers know
        { s: 'asahi', f: 'sad', t: "He's been worse. Since we got back. Like he left the brakes over there. Not your fault. Saying it anyway." },
        { n: "Nobody had to ask who. The bass came through the glass and the snow came down into the garden, slow and fat, onto a plastic slide and a covered barbecue and a garden gnome somebody had turned to face the fence, and Junkyu pulled his knees into the red puffer and looked at her with his whole open face, waiting to see where she'd go." },
        { choose: [
          { t: "(Sit down between them.)", stat: { kindness: 1 }, flag: 'epi-h-trust-step', then: [
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
          { t: "Never have I ever been to Iwatodai.", stat: { courage: 1 }, flag: 'epi-h-heat-iwatodai', then: [
            { n: "She didn't know why she said it. She said it to see what would happen, the way you press a bruise." },
            // Nov 11 2026 (Kat): searchers know
            { n: "Nothing happened. Fifteen people looked at her, polite and puzzled, and nobody drank. The few in that room who should have drunk looked very hard at their cups instead, and kept them down, and she loved them for it. Somebody said *where's that,* and somebody else said *is that a club,* and the girl from the debate club wrote something in her phone." },
            { s: 'solar', f: 'happy', t: "Nowhere. It's nowhere. I'm being weird. Next." },
            // Nov 11 2026 (Kat): searchers know
            { n: "And they went on, and the next one was *never have I ever cried at a dog video,* and almost everyone drank, and she drank too, and nobody who hadn't been there noticed she'd put a finger down for a place that didn't exist, and she sat there with her hand in her lap holding the folded finger, like it was something she'd been given to keep." }
          ] },
          { t: "Never have I ever lost a math competition.", stat: { charm: 1 }, then: [
            { n: "Everyone drank. Everyone. Fifteen people and the girl from debate, who looked furious about it, and two boys who'd never entered a math competition in their lives and drank on principle, and a second-year who said *I lost one in the third grade and I still think about it* with genuine pain." },
            { s: 'dohyun', t: "Who hasn't lost a math competition?" },
            { s: 'solar', f: 'happy', t: "Exactly one person in this school." },
            { n: "It took them a second. Then the whole circle groaned, and somebody threw a cushion at her, and it was the best she'd felt all night, sitting in a stranger's dining room with a can of barley tea, being teased about her boyfriend by people who'd never once been to his house." }
          ] }
        ] }
      ] },

      // ── stakes pass (Nov 11 2026): the landing ──
      { t: "(Upstairs. There's a line for the bathroom.)", then: [
        { n: "The line for the upstairs bathroom went along the landing and halfway down the stairs, eight girls and one boy who looked like he regretted every decision that had brought him there, and at the very front of it, reading a stack of index cards held together with a bulldog clip, was Kim Chaewon." },
        { n: "Debate captain. Third-year. The only student at Hanlim the teachers called by her full name, the way you'd say the name of a judge. She was at a party on the twenty-ninth of December in a cream sweater, revising, and she looked up when Solar joined the back of the line and nodded once, like they'd arranged to meet." },
        { s: 'chaewon', t: "Kim Solar." },
        { s: 'solar', f: 'neutral', t: "...Hi? Are you— is that homework?" },
        { s: 'chaewon', t: "It's a motion. Not yours. Not yet." },
        { n: "The girl in front of Solar turned around very slowly to look at her, then turned back, very slowly, like an owl." },
        { s: 'chaewon', t: "People are talking about filing one. On the forum. When they do, the student handbook says the debate captain moderates, because nobody's ever read far enough to change it. So I've read it. All of it. I'd rather be ready than be fair by accident." },
        { s: 'solar', f: 'surprised', t: "You'd do that? Run it?" },
        { s: 'chaewon', t: "Properly. Which shouldn't comfort you. Properly means I don't care who you are." },
        { n: "Then the bathroom door, which had been shut for a while, turned out to be a thin door, the kind they put in nice houses because nobody in a nice house expects anybody to be listening, and through it, over a tap running, came two voices Solar half knew, the way you half know the voices of girls who sit three rows over in a class you don't pay attention in." },
        { n: "*...no, but like INSEPARABLE. her and park jihoon. sophomore year. you weren't here.*" },
        { n: "*and now she's dating yang jungwon? like, after that?*" },
        { n: "*i'm just saying. nine days. and she comes back looking like THAT. and he's downstairs right now with—*" },
        { n: "The tap went off. The line went very, very quiet, the specific quiet of eight girls and one regretful boy pretending they hadn't heard something, and Chaewon turned an index card over without looking at it." },
        { choose: [
          { t: "(Knock.) I can hear you.", stat: { courage: 1 }, flag: 'epi-h-heat-door', then: [
            { n: "She knocked. Twice. Politely, the way you knock on a teacher's door." },
            { s: 'solar', f: 'happy', t: "Hi! It's me! I can hear you! The door's really thin!" },
            { n: "Total silence from the bathroom. Then a whisper, *oh my GOD*, and the sound of somebody sitting down on the edge of a bathtub very hard. The boy in the line made a noise like a kettle. The girl in front of her turned around again, owl-slow, with her phone already up." },
            { n: "It was on the forum before the two of them came out. *VP KNOCKS ON BATHROOM DOOR AT DOHYUN'S (she heard everything)*, eighty comments, and the comments weren't about the knock. They were about what she'd heard. Every single one of them wanted to know what sophomore year was." },
            { s: 'chaewon', t: "That was brave." },
            { s: 'chaewon', t: "It was also evidence." }
          ] },
          { t: "Chaewon. What does properly look like?", stat: { knowledge: 1 }, flag: 'epi-h-party-chaewon', then: [
            { n: "Chaewon looked at her for a second longer than people usually did. Then she took the top card off her stack and turned it round so Solar could read it." },
            { n: "It said, in very small, very neat handwriting, *1. Every side speaks. 2. Nobody interrupts. 3. The tin is counted in public if it exists. 4. Nobody is removed for a rumour.*" },
            { s: 'chaewon', t: "Number four's the one people forget. Rumours are loud. Loud isn't evidence." },
            { s: 'solar', f: 'neutral', t: "And if it's loud enough?" },
            { s: 'chaewon', t: "Then it's my job to be louder. Quietly." },
            { n: "The bathroom door opened. Two girls came out with their eyes on the carpet and went down the stairs without looking at anybody, and Chaewon went in, with her index cards, and shut the door, and Solar stood on the landing and found that she felt, for the first time all week, slightly less like a girl in front of a firing squad and slightly more like a girl in front of a referee." }
          ] },
          { t: "(Give up on the bathroom. Go back down.)", then: [
            { n: "She went back down. Halfway, she heard the bathroom door open behind her, and the two girls come out, and the line not say anything to them, and she kept going, one hand on the bannister, past the crooked photo of the boy in goggles, and decided she didn't really need to go that badly. She'd held it in worse places. She'd held a lot of things in worse places." }
          ] }
        ] }
      ] },

      // ── stakes pass (Nov 11 2026): the porch ──
      { t: "(The front porch. The football team just showed up.)", then: [
        { place: OUT, time: 'Evening', soft: true },
        { n: "The football team arrived the way weather arrives, all at once and from the street, eleven boys in team jackets and one in a borrowed parka two sizes too big coming up the path through the snow in a wedge, and at the point of the wedge, hands in his pockets and his breath going up, was Park Jay." },
        { ifEpiRoute: 'council', then: [
          { n: "He'd gone out to meet them, of course he had. Heeseung's agenda had a line for it. *21:25, Jay: football (visible).*" }
        ] },
        { s: 'jay', f: 'neutral', t: "Sol. Bro. You're on the porch." },
        { s: 'solar', f: 'happy', t: "It's a nice porch." },
        { n: "The team spread out around her on the steps like a defensive line that hadn't been told what it was defending, stamping snow off their trainers, and one of them, the one in the parka, a big soft second-year with a buzz cut and a face like a golden retriever, looked at her with total sincerity." },
        { s: 'jay', f: 'neutral', t: "That's Taeoh. Ignore him." },
        { n: "Taeoh did not want to be ignored. Taeoh wanted to know if the temple had a gym, and whether it was true they took your phone, and whether it was true Yang Jungwon had cried at the temple, because his cousin's girlfriend said he had, and then, before Jay could stop him, he asked the thing the whole team had clearly agreed in the car that nobody would ask." },
        { n: "*So are you and Jungwon, like, actually dating? Or is it a council thing? Like a, like a political marriage?*" },
        { n: "Six boys on the porch went very still. Somebody coughed into his elbow. Jay closed his eyes, slowly, like a man watching a pass get intercepted in slow motion." },
        { choose: [
          { t: "Yes. Actually dating. Tell everyone.", stat: { charm: 1 }, flag: 'epi-h-heat-loud', then: [
            { s: 'solar', f: 'happy', t: "Yes. Actually dating. Not political. Not a council thing. I'd marry him in a temple if they'd let me back in. Tell everyone. Tell your cousin's girlfriend." },
            { n: "The porch erupted. Somebody howled at the sky. Taeoh lifted her off the top step in a hug she had not asked for and put her down again a step lower, and two of the team were already typing, and by the time she'd got her feet back under her, *JOLAR IS REAL (confirmed by the VP on a porch)* was the top post on the forum, and under it, at the top of the replies, somebody had written *ok but then what were they doing for nine days* and it had two hundred likes." },
            { s: 'jay', f: 'neutral', t: "...Bro. You just fed the thread." },
            { s: 'solar', f: 'happy', t: "I fed it something *nice*." },
            { s: 'jay', f: 'neutral', t: "It doesn't care what it eats." }
          ] },
          { t: "(Look at Jay. Let him handle it.)", flag: 'epi-h-trust-jay-porch', then: [
            { n: "She looked at Jay. Jay opened his eyes. He didn't say anything to her; he just stepped down one stair so he was between her and the team, and put an arm around Taeoh's enormous neck, companionably, the way you'd steer a horse." },
            { s: 'jay', f: 'neutral', t: "Taeoh. Buddy. What's the rule." },
            { n: "*...We don't ask people about their business at parties,* Taeoh mumbled into the parka." },
            { s: 'jay', f: 'neutral', t: "And who made the rule." },
            { n: "*You did, bro.*" },
            { s: 'jay', f: 'neutral', t: "Good. Inside. There's a fruit plate nobody's touched. Go be a hero." },
            { n: "They went in, all eleven of them, past her, each one nodding at her on the way past like she was a coach, and Jay waited until the door shut and then stood on the porch with her for a minute in the snow and didn't say anything, which from Jay was a speech." },
            { s: 'jay', f: 'neutral', t: "Keep your head down tonight. People are saying stuff." },
            { s: 'solar', f: 'neutral', t: "What stuff?" },
            { s: 'jay', f: 'neutral', t: "Old stuff. I don't care what it is. But they're saying it." }
          ] }
        ] },
        { place: P, time: 'Evening', soft: true }
      ] },

      // ── leave ──
      { t: "(That's enough people for now.)", leave: true, then: [
        { n: "She'd been in the house nearly an hour and she still had her coat on. She realised it in the hallway, by the crooked photo of the boy in goggles, and decided not to take it off. It felt like the kind of party where you might want to leave in a hurry. It felt, if she was honest, like every party she'd ever been to." }
      ] }
    ] }
    ,

    // ── stakes pass (Nov 11 2026): the tip, the hallway, Mom (every route, after the mingle, before each route's kitchen) ──
    { n: "Eunchae found her by the crooked photo. She came down the stairs with her phone held against her chest instead of out in front of her, which was how Solar knew something was wrong before she'd said a word, because Eunchae's phone was never against her chest. Eunchae's phone was a limb." },
    { s: 'eunchae', f: 'serious', t: "Sunbae. Can I— I need to show you something. Before I decide what to do with it." },
    { n: "It was a photo. It had come into the tip box on Hanlim Unfiltered eleven minutes ago from an account with no picture and a name made of numbers. It was Solar, in this hallway, about forty minutes ago, with her coat on, by this exact photo of a six-year-old in goggles, looking toward the kitchen. Behind her, framed perfectly in the kitchen doorway like somebody had meant it, was the back of a head she'd have known anywhere, by the fridge." },
    { n: "Under it, the tip said: *VP at dohyun's. two weeks after \"rehab.\" guess who's in the kitchen. sophomore year is SO back*" },
    { n: "She looked at the back of the head for a long time. It didn't do anything. It was just a head. It was a head she had spent a whole year of her life making sure she never had to see from the front again, and somebody had put it in a picture with her like they were a couple." },
    { s: 'eunchae', f: 'sad', t: "I don't post tips I can't check. That's, like, my one rule. I have one rule." },
    { s: 'eunchae', f: 'neutral', t: "But whoever sent it isn't going to wait for me. You know that, right? If I don't, someone else does, and they won't blur anything." },
    { ifEpiRoute: 'jungwon', then: [
      { n: "Cherry read it over Solar's shoulder, and Solar felt her go rigid, all of her at once, like a cat that had seen a dog through a window." },
      { s: 'cherry', f: 'serious', t: "Give me a name. Give me the number name. I'll find the person attached to the numbers." }
    ] },
    { ifEpiRoute: 'council', then: [
      { n: "Two rooms away, very faintly, from inside Heeseung's shirt, she heard Jungwon ask what was going on, and Heeseung say *nothing*, and Jungwon say *that's your nothing voice*." }
    ] },
    { ifEpiRoute: 'jihoon', then: [
      { n: "There was nobody to read it over her shoulder. Cherry was at home in a face mask. Jihoon was in the kitchen, in the photo, more or less, a shape at the edge of the doorway with a hand up mid-story. She looked at the picture and understood that she was the only person at this party whose job it was to decide what happened to it." }
    ] },
    { choose: [
      { t: "Please don't post it.", flag: 'epi-h-party-owe-eunchae', then: [
        { s: 'solar', f: 'sad', t: "Please don't. Please. It's a hallway, but it's— please." },
        { n: "Eunchae looked at her. Not at her face, exactly. At the *please*, like it was a thing she'd been handed and didn't know where to put down." },
        { s: 'eunchae', f: 'serious', t: "Okay. I'll sit on it." },
        { s: 'eunchae', f: 'neutral', t: "But you owe me. A real one. Not a *the council loves you* one. A real quote, when I ask, on camera. Deal?" },
        { s: 'solar', f: 'neutral', t: "...Deal." },
        { n: "Eunchae deleted the tip from her inbox in front of her, and showed her the empty inbox, and went back up the stairs with the phone held out in front of her again where it belonged. Solar stood by the goggles and felt like she'd sold something and wasn't sure yet what." }
      ] },
      { t: "Post it. It's a hallway. I'm standing in a hallway.", stat: { courage: 1 }, flag: 'epi-h-heat-photo', then: [
        { s: 'solar', f: 'neutral', t: "Post it. Seriously. It's a hallway. I'm standing in a hallway with my coat on. That's the scandal. Write *VP stands in hallway.* Let them have it." },
        { s: 'eunchae', f: 'surprised', t: "...You're sure?" },
        { s: 'solar', f: 'happy', t: "If you don't, someone worse does. You said so." },
        { n: "So Eunchae did, blurred, the back of the head smeared into a thumbprint, with the caption *VP STANDS IN HALLWAY (riveting) (she said I could post it) (she's fine)*, and it was the right call and it was the right caption and it didn't matter at all. By the time Solar had walked the length of the hallway the comments had found the thumbprint, and decided whose head it was, and a first-year had drawn a red circle around it, and under the circle three hundred people were asking each other what sophomore year was, and nobody who knew was answering, which was its own kind of answer." }
      ] },
      { t: "(Find out who sent it.)", flag: ['epi-h-heat-hunt', 'epi-h-party-hayoon'], then: [
        { n: "She went looking. She didn't mean to make a thing of it; she meant to ask a few people quietly, the way you'd ask whose coat this was. But there was no quietly, not tonight, not for her. Everybody she asked asked somebody else, and in ten minutes the whole ground floor knew the VP was going room to room asking who'd taken a picture of her, which was a much better story than the picture." },
        { n: "Nobody knew. Everybody had a theory. It ended, the way these things always ended, on the landing, with a girl she didn't know." },
        { n: "Small and neat, blazer buttoned all the way up over a party dress like the blazer was armour, a lanyard of pens round her neck, sitting on the top stair alone with the forum open on her phone and a can of something she hadn't drunk. She'd been in the dining room earlier, Solar thought. Watching. Not playing." },
        { s: 'solar', f: 'serious', t: "Did you send it?" },
        { n: "The girl looked up. She didn't seem surprised to be asked. She seemed, if anything, a little pleased, like a student whose hand has finally been called on." },
        { n: "*No. I don't send things. I just read everything.*" },
        { n: "*But somebody should ask where you were.*" },
        { s: 'solar', f: 'serious', t: "Then ask me." },
        { n: "The girl looked at her for a long, careful moment. Then she looked back down at her phone." },
        { n: "*Not here. Not like this. I'd want it done properly.*" },
        { n: "Solar went back down the stairs without having found out anything at all except that a girl with pens round her neck had been watching her all night, and that half the party had watched her ask. Behind her, on the landing, the girl wrote something down." }
      ] }
    ] },

    // the hallway: who she backs (trust), or the scene (heat)
    { n: "It went off in the hallway, ten minutes later, the way these things went off: not with the photo, but next to it." },
    { ifEpiRoute: 'council', then: [
      { n: "Jay was by the shoe pile with a bottle of Sunoo's water, and Hyunsuk had come out of the kitchen for his jacket, and somewhere between the shoes and the jacket one of them said the photo's name, and the other one said the other thing's name, and by the time Solar got there they were standing a foot apart with their chins up like two dogs on either side of a fence." }
    ], else: [
      { n: "Jay had come in with the football team at some point and had been leaning by the shoe pile ever since, and Hyunsuk had come out of the kitchen for his jacket, and somewhere between the shoes and the jacket one of them said the photo's name, and the other one said the other thing's name, and by the time Solar got there they were standing a foot apart with their chins up like two dogs on either side of a fence." }
    ] },
    { s: 'jay', f: 'neutral', t: "I'm just saying, bro. Nobody was posting pictures of her by a fridge in September. That's your table. That's your table's history. That's what they're chewing." },
    { s: 'hyunsuk', f: 'serious', t: "Our *table*? Man, your table took her out of exam week for nine days and came back with a *temple*. A temple. That's what they're chewing. We didn't make that up. You did." },
    { s: 'jay', f: 'neutral', t: "We went *after* her." },
    { s: 'hyunsuk', f: 'serious', t: "And where were you when she *needed* somebody to go after her? Sophomore year? Where was your little council then?" },
    { n: "It went quiet in a ring around them. Not party-quiet. Pond-quiet. A girl by the coats lowered her drink. Somebody on the stairs lifted a phone, sideways, and Solar saw the little red dot of it come on." },
    { n: "They were both right. That was the worst part. That was always the worst part, at Hanlim, at every party she had ever been to; everybody was a little bit right and nobody was going to say the rest of it." },
    { ifEpiRoute: 'jungwon', then: [
      { n: "Cherry, beside her, didn't move. She looked at Hyunsuk, and then at Solar, and her face said, very clearly, *your call*, and that was somehow the hardest thing Cherry had done all night." }
    ] },
    { ifEpiRoute: 'jihoon', then: [
      { n: "In the kitchen doorway, Jihoon had stopped talking. He was watching Hyunsuk with his cup halfway to his mouth, and he didn't come out, and he didn't look away either." }
    ] },
    { ifEpiRoute: 'council', then: [
      { n: "Sunoo was frozen at the end of the hallway with the crate, and Jake had started forward with his crossing-guard arms, and Heeseung had his hand on Jake's shoulder, holding him back, because Heeseung had read the room and the room was waiting for her." }
    ] },
    { choose: [
      { t: "(Stand next to Hyunsuk.)", flag: ['epi-h-trust-crew', 'epi-h-party-backed-crew'], then: [
        { n: "She crossed the hallway and stood next to Hyunsuk. Not in front of him. Next to him, her shoulder at his elbow, where she used to stand at the back of the bus, where she used to stand at the edge of every party when they were fifteen and none of them knew where else to stand." },
        { s: 'solar', f: 'serious', t: "He's right, Jay. You weren't there. That's not your fault. But you don't get to talk about it like you were." },
        { n: "Jay looked at her for a long second. Then he nodded, once, the nod of a man who'd taken a hit fairly, and stepped back." },
        { s: 'jay', f: 'neutral', t: "...Yeah. Okay. Yeah." },
        { n: "Hyunsuk didn't say anything. He didn't look at her, either. But when she moved, his shoulder moved with her a half inch, the way it used to, before, like he'd forgotten for a second that he'd stopped doing that." }
      ] },
      { t: "(Stand next to Jay.)", flag: ['epi-h-trust-council', 'epi-h-party-backed-council'], then: [
        { n: "She crossed the hallway and stood next to Jay. It felt like crossing a border without a passport, and she did it anyway, because he'd stood on a porch in the snow for her tonight and nobody had asked him to." },
        { s: 'solar', f: 'serious', t: "They came after me, Suk. Every one of them. You don't get to make that sound like a crime." },
        { n: "Hyunsuk looked at her the way he'd looked at her all December, like a word in a language he used to speak. Then he picked up his jacket off the hook and put it on, slowly, one arm and then the other." },
        { s: 'hyunsuk', f: 'sad', t: "Sure, Sol. Sure." },
        { n: "He went back into the kitchen with his jacket on. Jay didn't say anything. He just knocked his shoulder into hers, lightly, once, like a teammate after a play, and she stood there by the shoes and felt both things at once, warm and sick, like eating something too sweet on an empty stomach." }
      ] },
      { t: "(Tell them both off. Loud enough for the hallway.)", stat: { courage: 1 }, flag: 'epi-h-heat-scene', then: [
        { s: 'solar', f: 'serious', t: "Are you two *done*? Is this the plan? You're going to fight about which table ruined my life *at a party*, in a *hallway*, in front of a girl who is *filming* this—" },
        { n: "She pointed at the stairs. The red dot went off, guiltily, and then, after a second, came back on." },
        { s: 'solar', f: 'serious', t: "—I'm right here. I'm standing right here. Nobody ruined anything. Both of you shut up." },
        { n: "They both shut up. They both looked at her like she'd slapped them, which she hadn't, though it had been close, and then, in a single movement, so perfectly matched it would have been funny on any other night, they both looked at the floor." },
        { n: "It was on the forum before she'd reached the kitchen door. *VP SCREAMS AT TWO BOYS (which table is she at??)* forty seconds, shaky, the audio blown out, and in the comments nobody cared about the screaming. They cared about the words. *ruined my life.* They played the clip back and wrote them down and asked each other what she'd meant." }
      ] }
    ] },

    // Mom's text (sus)
    { n: "Her phone buzzed at five past eleven. She knew who it was before she looked. Only one person in the world texted in full sentences with a full stop at eleven at night and wasn't Yang Jungwon." },
    { phone: [
      { from: 'mom', t: "Where are you?" },
      { from: 'mom', t: "I'm not checking up on you. I'm asking where you are." }
    ], contact: 'Mom' },
    { choose: [
      { t: "movie night. home by 12:30 i promise", flag: 'epi-h-sus-party', then: [
        { phone: [
          { from: 'solar', t: "movie night!! home by 12:30 i promise" },
          { from: 'mom', t: "Which movie?" },
          { from: 'solar', t: "the one with the guy" },
          { from: 'mom', t: "Mm." }
        ], contact: 'Mom' },
        { glitch: { strain: 1 } },
        { n: "*Mm.* By text. Her mother had never once in her life sent the word *Mm.* by text. The bass came up through the floor and into her feet, and she put the phone away and felt the *Mm.* sitting in her coat pocket next to the can, small and heavy, the way a receipt sits in a pocket when you know you're going to have to show it to someone." }
      ] },
      { t: "at a party. the swim team kid's. home by 12:30", then: [
        { phone: [
          { from: 'solar', t: "at a party. a swim team kid's house. home by 12:30. im ok" },
          { from: 'mom', t: "Thank you for telling me." },
          { from: 'mom', t: "12:30. Not 12:31." }
        ], contact: 'Mom' },
        { n: "She looked at *Thank you for telling me* for a long time. It was the same thing Jungwon said. She wondered, briefly and with real horror, whether they'd met, and then she remembered that they had, at Christmas, over japchae, and that her mother had liked him, and she put her phone away before that thought could go anywhere." }
      ] },
      { t: "(Leave it on read.)", flag: 'epi-h-sus-ignored', then: [
        { n: "She turned the phone over in her hand and put it back in her coat. It buzzed again, once, a minute later, and she didn't look. It didn't buzz a third time. That was worse. Her mother didn't send a third text. Her mother waited, and remembered, and filed." }
      ] }
    ] },

    // the party, as the forum had it by half eleven (light feedback: reads tonight's heat flags)
    { n: "She went into the downstairs toilet, the little one under the stairs that nobody had found yet, and locked the door, and sat on the closed lid in her coat, and opened the forum, because she was a coward and an idiot and it was the only way to know." },
    { n: "WHERE IS THE COUNCIL (part 6). Started at 9:52. Already four pages." },
    { ifFlag: 'epi-h-heat-cult', then: [
      { s: 'forum', t: "\"she says it was a cult and the robes were cute\" · 341 likes · reply: ok but what if it WAS a cult" }
    ] },
    { ifFlag: 'epi-h-heat-quote', then: [
      { s: 'forum', t: "[clip] the council loves us apparently · reply: she looks like she hasn't slept since november" }
    ] },
    { ifFlag: 'epi-h-heat-door', then: [
      { s: 'forum', t: "VP KNOCKS ON BATHROOM DOOR (she heard everything) · reply: what did she hear. what is sophomore year. someone explain" }
    ] },
    { ifFlag: 'epi-h-heat-loud', then: [
      { s: 'forum', t: "JOLAR IS REAL (confirmed by the VP on a porch) · reply: ok but then what were they doing for nine days" }
    ] },
    { ifFlag: 'epi-h-heat-iwatodai', then: [
      { s: 'forum', t: "hanlim_accountability: has anyone heard of a place called Iwatodai. asking for a reason." }
    ] },
    { ifFlag: 'epi-h-heat-photo', then: [
      { s: 'forum', t: "[photo] VP STANDS IN HALLWAY (riveting) · reply: zoom in on the kitchen door. ZOOM IN" }
    ] },
    { ifFlag: 'epi-h-heat-hunt', then: [
      { s: 'forum', t: "the VP is going room to room asking who took a picture of her lmao · reply: why would you care that much about a hallway" }
    ] },
    { ifFlag: 'epi-h-heat-scene', then: [
      { s: 'forum', t: "[video] VP SCREAMS AT TWO BOYS (which table is she at??) · reply: \"ruined my life\" WHAT ruined her life" }
    ] },
    IF('heat', { max: 0 }, [
      { n: "Nothing about her. Nothing. Somebody had posted the fruit plate, four minutes of it, with commentary, and somebody else had posted a blurry picture of Niki on a bannister, and the top comment on part six was an argument about whether Dohyun's goggles photo was cute or haunting. She read the whole page twice to be sure, sitting on a toilet lid under the stairs, and then she put her forehead on her knees and laughed until somebody knocked." }
    ], [
      { n: "She read every word. She read the replies to the replies. She sat on a toilet lid under the stairs of a stranger's house with the bass coming through the wall into her back and watched a whole school she'd been gone from for nine days put her back together out of the pieces she'd handed them tonight, and the shape they were making wasn't her, and it wasn't nothing, either." },
      { n: "Somebody knocked. She said *occupied* in a voice she didn't recognise, and turned the phone face down on her knee, and sat there until the knocking went away." }
    ]),
    { ifEpiRoute: 'jungwon', then: [
      { n: "When she came out, Cherry was leaning on the wall opposite the door with her arms crossed, like she'd been there the whole time, which she had." },
      { s: 'cherry', f: 'neutral', t: "Don't read it. I can see you read it. You've got forum face." },
      { s: 'solar', f: 'sad', t: "I've got forum face." },
      { s: 'cherry', f: 'serious', t: "Okay. Kitchen. Ten feet. I'm sitting on you if I have to. Let's go see what that idiot's doing so we can leave." }
    ] },
    { ifEpiRoute: 'jihoon', then: [
      { n: "When she came out, there was nobody waiting. She hadn't expected anyone. She stood in the hallway anyway, for a second, just in case, and then she went back to the stairs, where she could see the kitchen, because she'd come with him, and because someone had to keep an eye on him and it was always going to be her." }
    ] },
    { ifEpiRoute: 'council', then: [
      { n: "When she came out, Heeseung was in the hallway with his agenda, and he looked at her face and then at his watch and then crossed something out with his pen." },
      { s: 'heeseung', f: 'neutral', t: "We're going to the kitchen. All of us. Then we're going home. Nobody reads the forum until we're in the car." },
      { s: 'solar', f: 'sad', t: "Too late." },
      { s: 'heeseung', f: 'sad', t: "I know. I can tell. You have forum face." }
    ] }
  ];

  /* Stakes pass (Nov 11 2026): Jungwon and Jihoon, by route. story-w2.js splices each one into its route's ending of
     epi-h-party: jungwon after Cherry's "hostage negotiator" on the curb; jihoon after "It's a holiday." in the car; council
     after "I'm alright, Won." on the curb. Each sets epi-h-trust-call on the option that lets the two of them talk, plus a
     local flag read at the hearing (story-end.js): epi-h-party-jw-jh-talked / -jh-nophone (jungwon), -jh-speaker / -jh-declined
     / -jh-answered (jihoon), -cn-talked / -cn-walked (council). */
  R.partyCoda = {
    jungwon: [
      { n: "The front door opened behind them and let out a slab of bass and heat and Park Jihoon, without a coat, in the beanie, coming down the path through the snow with his hands in his jacket pockets and his shoulders up round his ears like a boy who'd been sent outside by a teacher." },
      { s: 'jihoon', f: 'neutral', t: "Don't. Cherry. I'm not here to fight. I'm here to stand on a curb. It's a public curb." },
      { s: 'cherry', f: 'serious', t: "Ten feet, Park." },
      { s: 'jihoon', f: 'neutral', t: "I'm measuring. I'm at eleven." },
      { n: "He stood there at eleven feet with the snow landing on his beanie and looked at the phone in Solar's hand, still lit, *Won* at the top of the screen, the last *i'll be awake.* right there for anyone eleven feet away to read." },
      { s: 'jihoon', f: 'neutral', t: "That him?" },
      { s: 'solar', f: 'neutral', t: "It's him." },
      { s: 'jihoon', f: 'serious', t: "Give it here a sec. I'm not going to be a dick. I want to tell him something." },
      { choose: [
        { t: "(Hand him the phone.)", flag: ['epi-h-trust-call', 'epi-h-party-jw-jh-talked'], then: [
          { n: "Cherry made a sound like a kettle. Solar held the phone out anyway. Jihoon looked at it in her hand for a second like he hadn't actually expected it, and then he took it, and pressed call, and put it to his ear, and turned half away from them toward the street, like that would make it private." },
          { n: "It rang twice. Then a whisper, very faint, from a house where a mother was watching a drama with the door open." },
          { s: 'jungwon', f: 'serious', t: "Sol?" },
          { s: 'jihoon', f: 'neutral', t: "No. It's Park." },
          { n: "Silence on the line. A long one. Solar could hear it from where she was standing, the specific silence of Yang Jungwon deciding which of eleven possible sentences to say." },
          { s: 'jungwon', f: 'serious', t: "Is she alright." },
          { ifFlag: 'epi-h-party-left', then: [
            { s: 'jihoon', f: 'neutral', t: "She walked out on me. In front of everyone. Left me on a counter like a lamp." }
          ], else: [
            { s: 'jihoon', f: 'neutral', t: "She said no to me. In front of everyone. In the kitchen." }
          ] },
          { s: 'jihoon', f: 'serious', t: "Not because of you. I want you to know that. She'd have done it without you. She did it before you. I just thought somebody should tell you who wasn't her. So you'd believe it." },
          { n: "The silence again. Shorter." },
          { s: 'jungwon', f: 'neutral', t: "...Thank you, Jihoon." },
          { n: "Jihoon flinched. Actually flinched, on the curb, like the first name had been a snowball down the back of his neck." },
          { s: 'jihoon', f: 'neutral', t: "Don't. Don't do the first name. We're not there. We'll never be there." },
          { s: 'jungwon', f: 'neutral', t: "Okay. Park." },
          { s: 'jihoon', f: 'happy', t: "Better. Go to bed. You sound like a ghost." },
          { n: "He hung up and handed the phone back to her without looking at her and went back up the path and in, and the door let out its slab of bass and shut on it, and Cherry stood on the curb with her cigarette burning down to her fingers, staring at the door." },
          { s: 'cherry', f: 'surprised', t: "What the fuck was that." },
          { s: 'solar', f: 'sad', t: "I don't know. I think it was nice." },
          { phone: [
            { from: 'jungwon', t: "that was strange." },
            { from: 'jungwon', t: "i didn't hate it." }
          ], contact: 'Won' }
        ] },
        { t: "No, Jihoon. Go inside.", flag: 'epi-h-party-jh-nophone', then: [
          { n: "He looked at her. Then at the phone. Then he laughed, short, through his nose, and put his hands back in his pockets." },
          { s: 'jihoon', f: 'neutral', t: "Fair. Fair. Tell him I said hi. Tell him I said *drive safe*." },
          { s: 'jihoon', f: 'happy', t: "Oh, wait. He can't. Mommy has the keys." },
          { s: 'cherry', f: 'serious', t: "INSIDE, Park." },
          { n: "He went. Halfway up the path he stopped, and didn't turn round, and said something to the door, not loud, but the street was so quiet with the snow that it carried." },
          { s: 'jihoon', f: 'sad', t: "He's lucky. I hope he knows." },
          { n: "Then the door, and the bass, and the door again, and nothing. Solar looked down at the phone in her hand. *i'll be awake.* She didn't tell Jungwon about the curb. She didn't know how to say it so it would be fair to anybody." }
        ] }
      ] }
    ],
    jihoon: [
      { n: "Her phone lit up in the cup holder. Then the car's screen did, because he'd paired her phone to it in September without asking and never unpaired it, and there in the middle of his dashboard, in white letters over the radio, so big you could have read it from the street, was *Won ♡*." },
      { n: "She'd put the heart there in November. She'd forgotten. Jihoon hadn't seen it until now. She watched him see it." },
      { n: "He didn't say anything. The car hummed. The indicator, which he'd never turned off, ticked. *Won ♡* rang, and rang, and rang, in the middle of his car." },
      { choose: [
        { t: "(Answer it. On speaker.)", flag: ['epi-h-trust-call', 'epi-h-party-jh-speaker'], then: [
          { n: "She pressed the green button on the screen. Jungwon's whisper filled the whole car at once, the speakers turned up to where Jihoon liked them, so that a boy hiding a phone from his mother in a quiet house came out of eight speakers like a boy at a stadium." },
          { s: 'jungwon', f: 'serious', t: "Sol? Are you home?" },
          { s: 'solar', f: 'neutral', t: "Not yet. Jihoon's driving me. You're on speaker." },
          { n: "The silence was so long the screen dimmed." },
          { s: 'jungwon', f: 'neutral', t: "...Park." },
          { s: 'jihoon', f: 'neutral', t: "Yang." },
          { s: 'jungwon', f: 'neutral', t: "Thank you for driving her." },
          { s: 'jihoon', f: 'happy', t: "I've been driving her since before you could spell vice president." },
          { s: 'jungwon', f: 'neutral', t: "I could spell it in first grade." },
          { s: 'jihoon', f: 'happy', t: "Of course you could. Of course. God." },
          { n: "But he was smiling, a little, at the road, the kind of smile you don't get to choose. Solar sat between the two of them with the snow coming down on the windshield and the wipers going and felt like a girl holding two ends of a rope that had decided, for one red light, not to pull." },
          { s: 'jungwon', f: 'neutral', t: "Drive carefully." },
          { s: 'jihoon', f: 'neutral', t: "I always drive carefully. I have precious cargo. And a rug." },
          { s: 'solar', f: 'surprised', t: "Those are the same thing." },
          { s: 'jihoon', f: 'happy', t: "Are they, though." }
        ] },
        { t: "(Decline it. Text him instead.)", flag: 'epi-h-party-jh-declined', then: [
          { n: "She pressed the red button. *Won ♡* went away. The radio came back, too loud, a song about a summer nobody in the car had had." },
          { phone: [
            { from: 'solar', t: "in jihoons car. on my way home. im ok. call u from bed" },
            { from: 'jungwon', t: "okay." },
            { from: 'jungwon', t: "tell him thank you from me." }
          ], contact: 'Won' },
          { s: 'jihoon', f: 'neutral', t: "You can answer him, you know. In front of me. I'm not going to say anything." },
          { s: 'solar', f: 'neutral', t: "I know." },
          { s: 'jihoon', f: 'neutral', t: "...He says thank you, doesn't he. He's texting you to say thank you to me. I can tell from your face." },
          { s: 'solar', f: 'sad', t: "He says thank you." },
          { s: 'jihoon', f: 'neutral', t: "Disgusting. *Won.* With a heart. Short. Efficient. Like a receipt." },
          { n: "He didn't say anything else about it. He drove. But at the next light he reached over and turned the screen's brightness all the way down, so it was just a dark square in the dash, and she didn't know if that was for her or for him." }
        ] },
        { t: "(Let Jihoon answer it.)", flag: 'epi-h-party-jh-answered', then: [
          { n: "She didn't move. Jihoon looked at her, and she looked back, and something went between them that was half dare and half *I'm too tired*, and he took one hand off the wheel and pressed the button himself." },
          { s: 'jihoon', f: 'happy', t: "Kim Solar's phone, she's indisposed, this is her driver. How may I direct your call." },
          { n: "Silence. Long, flat, perfectly level silence, the silence of a boy in a quiet house hearing exactly the voice he'd been afraid of hearing." },
          { s: 'jungwon', f: 'serious', t: "...Put her on. Please." },
          { s: 'jihoon', f: 'happy', t: "He said please, Sol. Did you hear that? Manners. They're teaching manners at the temple now." },
          { s: 'solar', f: 'serious', t: "Jihoon." },
          { s: 'solar', f: 'neutral', t: "Won, I'm here. I'm fine. I'm going home." },
          { s: 'jungwon', f: 'neutral', t: "Okay." },
          { n: "Just that. *Okay.* With the period. He hung up first, which he never did, and the screen went back to the radio, and Jihoon drove the rest of the way home whistling, badly, through his teeth, a boy who'd won something small and didn't feel any better for it." }
        ] }
      ] }
    ],
    council: [
      { n: "The front door opened and let out Park Jihoon, without a coat, holding the elbow he'd caught on the counter when Jay shoved him off it, coming down the path with the careful walk of somebody who'd decided to be dignified about it." },
      { s: 'jihoon', f: 'neutral', t: "Don't. Everybody relax. I'm not here for round two. I'm here for air. Air's free." },
      { n: "He stopped at the end of the path and looked at the row of them on the curb, seven in a line with Sunoo's water, and then at Heeseung's shirt pocket, where the phone was still glowing through the cotton like a nightlight." },
      { s: 'jihoon', f: 'happy', t: "Is that him? In your shirt? Like a pacemaker?" },
      { s: 'heeseung', f: 'serious', t: "Park." },
      { s: 'jihoon', f: 'neutral', t: "Not you, Heeseung. Him." },
      { n: "He bent down, right into Heeseung's chest, which Heeseung allowed with the face of a man being searched at an airport." },
      { s: 'jihoon', f: 'neutral', t: "Yang. You there?" },
      { s: 'jungwon', f: 'neutral', t: "...Park." },
      { choose: [
        { t: "(Leave them on speaker.)", flag: ['epi-h-trust-call', 'epi-h-party-cn-talked'], then: [
          { s: 'jihoon', f: 'neutral', t: "Your friend shoved me." },
          { s: 'jungwon', f: 'neutral', t: "You said *sophomore year* in a kitchen. In front of her." },
          { n: "Jihoon was quiet. The whole curb was quiet. Jake had his mouth open and Jay had his hand over it." },
          { s: 'jihoon', f: 'sad', t: "...Yeah. That was low." },
          { s: 'jungwon', f: 'neutral', t: "It was." },
          { s: 'jihoon', f: 'serious', t: "Take care of her, then. Since you're so good at everything." },
          { s: 'jungwon', f: 'neutral', t: "That's not how it works. She doesn't get taken care of. She does it to everyone else." },
          { n: "Jihoon laughed, short and surprised, into Heeseung's shirt." },
          { s: 'jihoon', f: 'happy', t: "So you *have* met her. Okay. Okay. Then let her do it to you. She likes that. It's annoying." },
          { n: "He straightened up. He looked at Solar, once, a look she couldn't read and didn't want to, and then he went back up the path with his elbow in his hand, and Heeseung looked up at the sky like a man who'd been used as a telephone pole and was going to bill somebody for it." },
          { s: 'heeseung', f: 'neutral', t: "That goes in the minutes." },
          { s: 'jungwon', f: 'neutral', t: "It does not go in the minutes." }
        ] },
        { t: "(Take the phone off speaker. Walk away with it.)", flag: 'epi-h-party-cn-walked', then: [
          { n: "She took the phone out of Heeseung's pocket, took it off speaker, and walked off down the pavement with it before either of them could say a second word, until she was by the cat on the wall, where nobody could hear." },
          { s: 'jungwon', f: 'serious', t: "What did he want?" },
          { s: 'solar', f: 'sad', t: "Nothing. Air. He wanted air." },
          { s: 'jungwon', f: 'neutral', t: "...Okay." },
          { n: "Behind her, on the curb, Jihoon stood with the whole council looking at him and nothing to say to any of them, and after a second he said *rude*, loudly, to nobody, and went back inside, and she didn't turn around to watch him go." }
        ] }
      ] }
    ]
  };
})();
