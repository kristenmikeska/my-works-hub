/* Yunjin · ? Revamp social link data (femc-game.html). Format: link fields in assets/femc/game/core.js, scene lines in scene.js.
   Searcher (strangers), friendship. Huh Yunjin, Solar's best friend since tenth-grade English at the international school in
   Songdo (a lazy teacher, adjacent surnames; she'd just come back from New York with an accent and a purple backpack). "Half
   New York." Loud, sassy, fearless, dramatic, protective, the only person Solar tells things to, and the one who says the
   true thing out loud. Calls her "Sol" (only she and Solar's father do), "babe", the "wifey" / "my woman" bit. They switch to
   English when they don't want to be understood. Texts lowercase, (parentheticals), contact 'yunjin 🦋' as in the book.
   Her crossing (10/10, story-act4 'a4-low-tide': the mud, the yellow puffer, the Prada, "Sol. It's me. It's Jin.", sitting
   in the mud till Akihiko came) is a story event; rank 1 is the next afternoon. Kat's ruling: she doesn't awaken a Persona.
   The 11/14 strangers floor ('a4-ferry': the ferry deck, she goes over the rail after Solar, "I'm in Prada") and "that's you
   in a hat" (12/10) are story beats, felt here only as aftermath. Nothing from Incheon moves strangers' plot: no business,
   no names from the war, no news from home. Canon details used: canned vending-machine coffee ("coffee for taxi drivers"),
   the sticker codes (alive / dead / the bodyguard = a fish), "I'll beat them with my Prada" / "I'll borrow yours", "(u wont)
   (its low tide)", "I'm always up", the "delivery boy", Mr. and Mrs. Kim the koi, "my little general", "are we sad, are we
   angry, are we plotting his murder, or are we buying shoes", "You're my favorite person in the whole world. And you're a
   terrible, terrible person." Solar's pink socks with small gray rabbits are hers in the book; the white ones with ears are
   Yunjin's game purchase. Fragment: strangers-rabbit-socks (rank 2, plot doc §8 S5).
   Own flags (read only in this file): yunjin-jin (r1), yunjin-socks (r2), yunjin-mandarin (r3), yunjin-step (r4),
   yunjin-count (r5), yunjin-promise (r6), yunjin-fish (r8). Some choices tally lean.S (flags.js counter).
   Ranks 9–10 come after the solstice and branch on route-S / route-true / anything else (the goodbye shape).
   Hooks elsewhere: story-act5 anyRank('anc7-S'/'d7-sN', rank 7 by 12/21), story-act6 anyRank('d10-sN', rank 10 by 3/6).
   Home love lives (Kat's ruling): Yunjin knows Haechan ("delivery boy", the fish) and Jungwon (the cup of tea) from strangers.
   Rank 8 gives both boys dialogue: Haechan lives at the dorm, Jungwon visits from the guesthouse; an Akihiko beat is gated on
   his rank. Her father is spoken of in the past tense (strangers canon).
   Current strangers canon (Kat's ruling 2026-10-20; strangers leaves off at Ch 65, early February, 66 days before the
   wedding): her father died in December and her cousin is gone too; she and her mom live at the Lee house now, in the room
   next to Solar's, and her mom plays the nocturne on the hall piano at three in the morning; the koi live in a bucket on the
   Lee back step ("the Huhs' children", Mrs. Bang); her voice has been wrecked to gravel since December (she still talks,
   loudly, and murmurs more); she sleeps with the light on; "sure" means no; the Veloster is purple with a La Cucaracha
   horn; her puffer is yellow in the game (Kat's ruling: she owns more than one color, so
   don't change it to canon's orange); Jungwon caught and carried her once, so she's taken back most of what she said about him. The game never says why,
   who, or anything about the war: grief and the voice are felt, never explained.
   Arcana: '?' (open question, plot doc §16.6). */
(window.FEMC_GAME_LINKS ||= []).push({
  id: 'yunjin', name: 'Huh Yunjin', short: 'Yunjin', arcana: 'Judgement', numeral: '', from: 'strangers',
  kind: 'searcher', world: 'S', romance: null,
  starts: '10/10', gate: { S: 3 },
  home: { area: 'port', spot: 'Harbor', slot: 'after', days: [0, 1, 3, 5],
          hint: 'Afternoons down at the Port Island harbor, on the seawall, with two cans of vending-machine coffee.' },
  approach: "Down at the harbor there's a girl sitting on the seawall with her legs swinging over the water and two cans of coffee beside her, singing something loudly and badly to the gulls in a voice like gravel shaken in a can, and she stops mid-word when she sees you and grins like you're late for something.",
  cast: {},
  invite: {
    ask: [
      "SOL. harbor. now. i bought u a coffee and its getting cold (its a can its always cold)",
      "babe r u free",
      "wifey. i miss u. ur literally 10 min away. come",
      "ok i need u to come look at a boat with me. its a normal boat. i love it",
      "r u alive. if ur alive come to the harbor. if ur dead also come",
      "hi. its jin. obviously. come outside",
      "if ur alive send a sticker. if ur alive AND free come to the seawall",
      "i found a machine that has the sweet one. THE sweet one. come taste it and tell me im right",
      "babe. emergency. not a real one. a gull one",
      "sol. sol. sol. (thats me knocking)"
    ],
    ok: ["YAY. seawall. ill be the loud one", "ok!!! bring a coat. u wont", "ok my woman. hurry", "MY WOMAN. ok. ur coffee is open already (i had some)", "yes!! the gulls r gonna lose their minds"],
    no: ["ok :( drink ur coffee somewhere else then", "fine. im telling the gulls about u", "ok. tmrw. (ur coming tmrw)", "ok. love u. lock ur door", "boo. ok. ill save u a sip. a small one"]
  },
  hangouts: [
    [
      { n: "Yunjin was teaching the gulls English. That was what she called it. She was sitting on the seawall with a bag of shrimp crackers, holding one up at arm's length and saying *please* very clearly and slowly, and refusing to hand it over until a gull made a sound she judged close enough." },
      { s: 'yunjin', f: 'happy', t: "He said it! Sol, he said it! That one's going to Harvard." },
      { n: "The gull in question was standing on a bollard with one leg tucked up, looking at the cracker with the flat yellow fury of something that had been promised food and given a lesson, and Solar sat down on the cold concrete beside the coffee cans and found that her mouth was already doing the thing it did around Yunjin, the corner of it going up before she'd agreed to anything." },
      { choose: [
        { t: "That was a scream.", notes: 2, then: [
          { s: 'yunjin', f: 'serious', t: "That was a scream with manners. You can hear the manners. Listen." },
          { n: "They listened. The gull screamed again, with, Solar had to admit, a certain rising inflection at the end, like a question." }
        ] },
        { t: "(Teach one *thank you*.)", notes: 3, then: [
          { n: "They spent an hour on it. The gulls learned nothing. Yunjin ran out of shrimp crackers and fed them the last of her own sandwich and called them ungrateful and gave them names, and by the time the light went one of them, the fat one with the bent foot, was standing so close to Solar's shoe that she could have touched it, and she didn't, and it didn't leave." },
          { s: 'yunjin', f: 'neutral', t: "See, he likes you. Animals always like you. It's because you don't want anything from them. They can tell." }
        ] },
        { t: "Teach them Korean instead.", notes: 3, then: [
          { s: 'yunjin', f: 'surprised', t: "...Oh, that's evil. That's so evil. They'll be the only gulls in Japan who can swear in Korean." },
          { n: "She did not, in the end, teach them anything that could be repeated, and a man fishing off the end of the seawall looked over at them twice with the wary face of somebody who couldn't follow a word and could tell anyway." }
        ] }
      ] },
      { n: "On the walk to the monorail Yunjin kept the empty cracker bag folded in her coat pocket, and when Solar asked why, she said it was the diploma, and that she was going to frame it." }
    ],
    [
      { n: "Yunjin had found the noraebang. Mandragora, at the back of the mall, with a room just big enough for two people and a tambourine, and she had paid for an hour, and she was standing on the bench seat in her socks with the thick song book open across both palms like a hymnal, flipping, and flipping, and frowning." },
      { s: 'yunjin', f: 'serious', t: "It's not in here. Why isn't it in here? It's the biggest song in the world. Babe, it's the biggest song in the whole world, there's a horse dance." },
      { n: "She found the artist. The artist had three songs in the book, and none of them was the one, and she sat down slowly on the bench with the book in her lap and looked at it the way you'd look at a calendar somebody had hung on the wrong month." },
      { s: 'yunjin', f: 'neutral', t: "...Okay. That's weird. That's like, a weird-weird thing. That's not just a Japan thing." },
      { choose: [
        { t: "(Hum the part you somehow know.)", notes: 3, then: [
          { n: "She didn't know the song. Her mouth knew it. It came out of her in the closed little room in four stupid bouncing notes, and Yunjin's head came up off the book like a dog hearing its lead taken off a hook." },
          { s: 'yunjin', f: 'happy', t: "THERE it is. Oh, there it is, you always pretend you hate it, you've done the horse in my car like a hundred times." },
          { n: "She did it without the machine. Standing on the bench, wrists crossed, bouncing, her face completely serious, singing the whole thing a cappella into a microphone that wasn't plugged into anything, and Solar sat on the bench below her with the tambourine and hit it on every wrong beat on purpose and laughed so hard she had to put it down." }
        ] },
        { t: "Sing something that's in the book.", notes: 2, then: [
          { s: 'yunjin', f: 'serious', t: "Fine. Fine. Something old. Something from before we were born, those are always in the book." },
          { n: "She sang a ballad from a decade before either of them was born, very loudly, standing on the bench in her socks, into a microphone with a broken cord, and at the top of the chorus she pointed at Solar." },
          { s: 'yunjin', f: 'happy', t: "SING THE HIGH PART. YOU ALWAYS DO THE HIGH PART." },
          { n: "Solar did the high part. She didn't know the song. Her voice went up where it was supposed to like it had a map, and Yunjin stopped singing and stood on the bench with the microphone at her side and her mouth open, and then said, quietly, *okay, you've still got it, I hate it here, you've still got it*." }
        ] },
        { t: "(Play the tambourine. Badly.)", notes: 2, then: [
          { s: 'yunjin', f: 'happy', t: "PERFECT. That's exactly how you play it at home. You're so bad at it. I love it so much." }
        ] }
      ] },
      { n: "When the hour was up the man at the counter asked if they wanted another, and Yunjin said yes before Solar could say anything, and then looked at the song book on the counter, and said no, actually, and paid, and didn't open it again." }
    ],
    [
      { n: "It was low tide at four, and Yunjin knew because Solar knew, and they were both on the seawall watching the water go out of Port Island's little harbor, the mud coming up gray and shining, the moored boats settling down onto their keels one by one like old men sitting down." },
      { s: 'yunjin', f: 'neutral', t: "It's so small here. The tide. Where we're from it goes out so far you could walk to China. You'd hate that. You'd love it. You'd know exactly how long you had to walk back." },
      { choose: [
        { t: "Two hours and ten minutes. Before it turns.", notes: 3, tally: { 'lean.S': 1 }, then: [
          { s: 'yunjin', f: 'surprised', t: "..." },
          { s: 'yunjin', f: 'neutral', t: "...Yeah. You'd know that. You always know that. I've never once in my life known that and you've never once not." }
        ] },
        { t: "Have you walked out on it?", notes: 2, then: [
          { s: 'yunjin', f: 'serious', t: "On ours? Once. To my knees in mud, in boots I'd just bought. You wouldn't come. You stood up by the railing with your arms folded and your back to the water and asked me every two minutes if I was done." },
          { s: 'yunjin', f: 'happy', t: "And then I walked out on this one in Prada, so. Character growth." }
        ] },
        { t: "(Watch the boats sit down. Say nothing.)", notes: 2, then: [
          { n: "She watched them. Yunjin watched her watch them, and didn't say anything either, for nearly a whole minute, which was a kind of present." }
        ] }
      ] },
      { n: "A ferry horn went out across the bay, long and low, and both of them turned toward it at the same time, the same angle, the same half second, and Yunjin noticed, and laughed, and didn't explain, and Solar didn't need her to." }
    ],
    [
      { n: "Yunjin had a rule about bad days, and the rule was a question, and she asked it before Solar had both feet off the monorail, standing on the platform at Paulownia with her hands on Solar's shoulders and her round gold sunglasses pushed up into her hair." },
      { s: 'yunjin', f: 'serious', t: "Okay. Are we sad, are we angry, are we plotting somebody's murder, or are we buying shoes? Because I'm good for all four. I just need to know which outfit to put on emotionally." },
      { n: "Solar had not said she was having a bad day. She hadn't said anything. She'd only come down the stairs at the dorm that morning and put her hair up in the hall mirror and taken her coat off the hook, and Yunjin, who'd been eating cereal out of the box on the sofa, had looked at her once over the top of it and texted her four minutes later from the same room." },
      { choose: [
        { t: "Shoes.", notes: 3, then: [
          { s: 'yunjin', f: 'happy', t: "SHOES. Shoes it is. I'm walking, you're paying, it's Mitsuru's envelope, she said it was for necessities, and these are necessary." },
          { n: "They tried on every pair of boots in the shop on the second floor and bought none of them. Yunjin made her walk up and down in a black patent pair with a heel like a needle and told her she looked like a woman about to ruin a man's whole life, and the shop girl, who did not speak Korean, nodded very seriously in agreement anyway." }
        ] },
        { t: "Plotting somebody's murder.", notes: 2, then: [
          { s: 'yunjin', f: 'surprised', t: "Ooh. Okay. Whose? Don't tell me. Tell me. Is it a teacher? It's a teacher. It's always a teacher with you." },
          { n: "It was, in fact, a teacher. They planned it over crepes, in great detail, and by the end of the crepes it had become a plan to put a whoopee cushion on his chair, and Solar was laughing too hard to finish hers." }
        ] },
        { t: "Sad. Just a little.", notes: 3, then: [
          { s: 'yunjin', f: 'neutral', t: "Okay. Sad. Sad's allowed. Sad gets a hot drink and the bench by the fountain and nobody has to talk unless they want to." },
          { n: "Nobody did, for a while. Yunjin bought two hot drinks and sat beside her on the fountain rim with her shoulder pressed to Solar's shoulder, and hummed something under her breath, and the fountain went on doing its one trick, and slowly, without any decision at all, it was a little less sad." }
        ] }
      ] },
      { n: "On the way out she linked their arms the way she apparently always did, tight at the elbow, so that you had to walk at her pace or fall over, and Solar found that she already knew how to walk at her pace." }
    ],
    [
      { n: "There was a stone basin at the edge of the seaside park, under a pine somebody had trained sideways with wires, and in it two fat orange carp turned slow circles round each other in water the color of tea, and Yunjin was lying on her stomach on the stone rim with her chin on her hands, talking to them." },
      { s: 'yunjin', f: 'neutral', t: "That one's Mr. Kim. That one's Mrs. Kim. Don't look at me like that. My dad always said every pond has to have a Mr. and Mrs. Kim. He said it was the law." },
      { s: 'yunjin', f: 'neutral', t: "Ours live in a bucket on your back step now. Your housekeeper feeds them. She calls them the Huhs' children. Don't tell her I told you, she'll go and beat a rug about it." },
      { n: "Something warm went through Solar's chest, quick and sideways. A narrow apartment and a crocheted blanket. Somebody round and rumpled losing his reading glasses on top of his own head three times in one dinner. A man's voice through a wall, singing in the shower, badly, with enormous feeling." },
      { choose: [
        { t: "He calls you his little general.", notes: 3, tally: { 'lean.S': 1 }, then: [
          { n: "Yunjin's chin came up off her hands. She didn't turn around. She lay very still on the stone, looking at the water, and the carp went round, and round." },
          { s: 'yunjin', f: 'sad', t: "...Yeah. He did. *My little general.* In front of everybody. It was so embarrassing." },
          { s: 'yunjin', f: 'neutral', t: "Okay. That's enough of that. Don't. I'll cry on the fish, and they've been through enough." }
        ] },
        { t: "Which one's in charge?", notes: 2, then: [
          { s: 'yunjin', f: 'serious', t: "Mrs. Kim. Obviously. Look at him. He'd be lost without her. He'd swim into a wall." },
          { n: "Mr. Kim, as if to prove it, swam gently into the side of the basin and turned around looking surprised about it." }
        ] },
        { t: "(Lie down beside her and watch them.)", notes: 3, then: [
          { n: "She lay down on the cold stone on her stomach, in her school skirt, which was undignified, and put her chin on her hands, and Yunjin moved over to make room without looking, the way you'd move over in a bed you'd shared a hundred times." }
        ] }
      ] },
      { n: "A groundskeeper came by at four and told them, very politely, that the basin was not for lying on. Yunjin told him, very politely, in English, that she was a marine biologist, and he went away to find someone who spoke English, and they left before he came back, running, laughing, one of Yunjin's earmuffs coming off on the path behind them and Solar going back for it without being asked." }
    ]
  ],
  ranks: [
    { after: '10/11', title: "1: it's jin", place: 'Port Island · Harbor', time: 'After School', music: 'tender', scene: [
      { n: "It had been Fuuka's voice in her ear first, that night, small and puzzled in the green: *there's one at the harbor, she's standing where the sea should be, she's calling something, it sounds like a nickname.* And Solar had known before Fuuka finished, the way she knew the tables, and run, and stopped at the top of the harbor steps with her hand white on the rail and her feet refusing, because past the bottom step the sea was gone and there was only mud, gray and ribbed and shining, going out and out under the green moon, and her body could smell the water waiting somewhere beyond it and would not go down." },
      { n: "Out on the mud, a girl in a highlighter-yellow puffer jacket was walking away from the wall with a car key in her fist, sinking to the ankle with every step, shouting a name that was Solar's." },
      { n: "She'd gone down anyway. She didn't remember deciding to. And the girl had turned around, and gone from loud to quiet so fast it was like watching someone fall, and said, *Sol. It's me. It's Jin.* And then she'd been holding on, both arms, hard, her face in Solar's shoulder and her whole body shaking like an engine running too fast, and Solar's hands had come up on their own and gone straight to the middle of her back, one flat between her shoulder blades and one at the back of her neck under the hair, exactly where they'd gone on a hundred other nights that Solar had no memory of at all." },
      { n: "They'd sat down in the mud when the hour ended. Akihiko had found them there. Yunjin had looked up at him, all the way up, and said, *oh, hello, okay, is HE in the cult, because I'm in.*" },
      { register: 'yunjin' },
      { n: "In the dorm at two in the morning she'd sat on the lounge sofa in Mitsuru's spare blanket with salt drying white on her jeans and talked so fast Fuuka had to ask her to slow down twice, and every few minutes she'd pressed the button on the side of her phone to wake the screen, and every time it said 12:07, and every time she looked at it like it was lying to her personally. Solar had been polite to her. Kind, and careful, and polite. And Yunjin had gone very quiet, for about five seconds, which was, everyone in the dorm had since been told by Yunjin herself, a personal record." },
      { n: "She was on the seawall now, in one of Mitsuru's coats with the sleeves rolled up four times and her round gold sunglasses pushed up into her hair under a sky that didn't need them, swinging her legs over the water and singing at the gulls. Beside her on the concrete, a pair of very expensive shoes that had been in the sea were drying on their sides like two small dead animals. When Solar came down the steps she stopped mid-word and grinned like Solar was late." },
      { s: 'yunjin', f: 'happy', t: "SOL. Babe. Hi. Sit. I got you a coffee. It's from the machine. It's the sweet one. It's disgusting. You love it." },
      { n: "Her voice was wrong. Solar couldn't have said how she knew that about a voice she'd never heard. It was loud, every word of it, and under the loud it was scraped raw, gravel shaken in a can, the voice of someone who'd breathed something she shouldn't have and had decided to be loud with what was left." },
      { n: "A can. The cheap sugary kind from the vending machine by the ferry office, the sweet milky one in the brown can, the cheapest thing in the machine, hot enough to sting. Solar's hand closed around it and her thumb went to the tab and her whole body let go by a degree, the way you let go when you sit down in your own chair at the end of a long day out." },
      { choose: [
        { t: "(Open it and drink.)", notes: 3, tally: { 'lean.S': 1 }, then: [
          { n: "It was terrible. It was exactly right. Yunjin watched her drink it with her chin on her fist and her eyes bright." },
          { s: 'yunjin', f: 'happy', t: "Yeah. Yeah, that face. You've got a whole face for cheap coffee. You never make it for the expensive stuff. You make the polite face for the expensive stuff." },
          { s: 'yunjin', f: 'neutral', t: "Your mom called that one *coffee for taxi drivers* once. With this face. Like it had touched her. And you went out the very next day and bought four." }
        ] },
        { t: "How do you know I like this?", notes: 2, then: [
          { s: 'yunjin', f: 'serious', t: "Because your mother called it *coffee for taxi drivers* once, with a face like it had touched her, and you went out the very next day and bought four of them and drank them in my car one after another until you felt sick." },
          { s: 'yunjin', f: 'neutral', t: "You think nobody knows you like cheap things better than the things they give you. I know. I've always known." }
        ] },
        { t: "Thank you, Yunjin.", notes: 2, then: [
          { s: 'yunjin', f: 'serious', t: "Okay, first of all. You only call me Yunjin when you're about to say something I'm not going to like. Are you? Already? I've barely got you sitting down." },
          { s: 'yunjin', f: 'neutral', t: "Second of all. Don't thank me. We don't do thank you. You just steal my stuff and I steal yours. That's the marriage." }
        ] }
      ] },
      { s: 'yunjin', f: 'neutral', t: "So. You don't remember me." },
      { s: 'yunjin', f: 'serious', t: "And yes, my voice is like this now. Don't make the face. It's a long story and it's not a fun one, so it's not today's story. Today's story is you." },
      { s: 'yunjin', f: 'serious', t: "That's fine. That's totally fine. I remember you enough for both of us, and enough left over to make it really weird." },
      { s: 'yunjin', f: 'happy', t: "Here's what you need to know. I'm Jin. I'm your best friend. I'm your wife, as a bit, don't ask who started it, we both say it was the other one. I'm loud. You're quiet. I say the thing. You count the things. We've been doing this since tenth grade and it works." },
      { choose: [
        { t: "Since tenth grade?", notes: 3, then: [
          { s: 'yunjin', f: 'happy', t: "Tenth-grade English. Our teacher was so lazy he sat everybody in alphabetical order, and our names were next to each other, and I'd just come back from New York with an accent and a purple backpack, and I leaned over the first day and told you something." },
          { s: 'solar', f: 'neutral', t: "What did you tell me?" },
          { s: 'yunjin', f: 'serious', t: "Nope. You have to remember that one yourself. That one's mine. I'm not giving it to you secondhand." }
        ] },
        { t: "What do I count?", notes: 3, then: [
          { s: 'yunjin', f: 'neutral', t: "Everything. Exits. Cups on a table. Boats. Steps. Men. You're doing it right now. You've been doing it since you sat down." },
          { n: "Solar had been. Eleven boats. Three cranes. Two gulls on the bollard. The man fishing off the far end of the wall, and his bucket, and the two exits off the seawall, one behind her and one past the ferry office. She hadn't known she'd been doing it until Yunjin said it, and then it was the loudest thing in her head." }
        ] },
        { t: "(Lean your shoulder on hers.)", notes: 3, then: [
          { n: "She leaned. Yunjin went very still, for one second, and then leaned back, hard, and didn't say anything at all, which Solar was already beginning to understand was the rarest thing Yunjin could give anyone." }
        ] }
      ] },
      { n: "Yunjin took her phone out of the borrowed coat and woke the screen with her thumb, and turned it so Solar could see. A photo behind the clock, the two of them in a car at night, Solar asleep against the passenger window with a can in her hand and her hair down, and over it, in big white numbers, 12:07." },
      { s: 'yunjin', f: 'neutral', t: "It won't change. I charge it every night in the lounge, Fuuka found me a cable, and it charges, and it's still 12:07. Your friend with the red hair says everybody's does that. The two girls from the mall, theirs did it too." },
      { s: 'yunjin', f: 'serious', t: "I left your house an hour ago, Sol. Maybe two. I don't know. I live there now, kind of. Me and my mom. I'm in the room next to yours. That's the other long story. Somebody said you've been here since April and I said that's insane, and then I looked at you." },
      { choose: [
        { t: "(Say it the way she said it on the mud.) Jin.", say: "Jin.", notes: 3, flag: { 'yunjin-jin': true }, then: [
          { n: "It came out quiet, and it came out right. She could hear that it was right. Yunjin heard it too, and her face went still and very bright, like a window with the sun on it." },
          { s: 'yunjin', f: 'sad', t: "...Okay. Okay, babe. Don't do that yet. I'm not ready. I'm wearing somebody else's coat." },
          { s: 'yunjin', f: 'happy', t: "Do it again tomorrow. Do it every day. I'll be ready by like Thursday." }
        ] },
        { t: "I'm sorry. I wish I knew you.", notes: 2, then: [
          { s: 'yunjin', f: 'neutral', t: "Don't be sorry. You do know me. Your hands know me. Your hands knew me before you'd even got down the steps." },
          { s: 'yunjin', f: 'serious', t: "The rest of you is just late. You're always late. I'm used to it." }
        ] },
        { t: "(Look at the photo for a long time.)", notes: 2, then: [
          { n: "The girl in the photo was asleep. Properly asleep, with her mouth a little open and her hair down over her face, in a car, next to someone. Solar didn't think she'd ever been that asleep in her life. Apparently she had." },
          { s: 'yunjin', f: 'neutral', t: "That's after a low tide. You never sleep till it turns, and then you go out like a light, wherever you are. I took like forty of those. Blackmail." }
        ] }
      ] },
      { n: "They sat on the seawall until the light went, and Yunjin talked, about everything and nothing, about a drama she was furious about and a pair of boots she'd seen in the mall and couldn't justify and the gulls and the cheap coffee and whether Akihiko was single, and every so often she stopped mid-sentence and looked at Solar, quick, like she was checking she was still there." },
      { n: "She never once asked her to remember anything. She just kept talking, the way you'd keep talking to someone in a hospital bed, as if the sound itself was a rope." }
    ] },

    { after: '10/17', title: '2: rabbit socks', place: 'Paulownia Mall · Central Atrium', time: 'After School', music: 'joy', scene: [
      { n: "Yunjin had gone shopping. With money Mitsuru had given her in an envelope and not commented on, which Yunjin said was the classiest thing anyone had ever done for her, and she'd walked the whole of Paulownia Mall twice, end to end, with Solar beside her carrying the bags, and kept stopping in front of things with an expression Solar couldn't read at first and then could." },
      { s: 'yunjin', f: 'serious', t: "Okay, why does everyone have a phone that folds. Is this a Japan thing? Is it retro? Babe, that man is texting with his thumb on a number pad. Like a grandpa. Like *your* grandpa." },
      { n: "She'd said it three times now, about three different things. The phones. The posters in the music shop, for bands she said had broken up. A price on a handbag she said was wrong, too low, not by a little. Each time she laughed, and each time the laugh came a fraction too late, the way you laugh at a joke in a room where you've just noticed the clock on the wall has stopped." },
      { choose: [
        { t: "It's 2009 here.", notes: 3, then: [
          { s: 'yunjin', f: 'surprised', t: "..." },
          { s: 'yunjin', f: 'neutral', t: "No it isn't. It's... okay. Okay. Sure. That's fine. That's honestly not even the weirdest thing this week. That's like fourth." }
        ] },
        { t: "Everyone here thinks your phone is from the future.", notes: 2, then: [
          { s: 'yunjin', f: 'happy', t: "It is from the future. It's from the future and it's stuck at 12:07. It's the worst time machine ever invented." }
        ] },
        { t: "(Take her arm. Keep walking.)", notes: 3, then: [
          { n: "She took Yunjin's arm the way Yunjin took hers, tight at the elbow, and kept walking, and after a few steps Yunjin stopped looking at the phones." }
        ] }
      ] },
      { n: "She'd come out of the last shop with a small paper bag she wouldn't show anybody, and now she was sitting on the rim of the fountain in the central atrium with her boots off and her feet up on the edge, wiggling them." },
      { n: "Her socks were white. They had little rabbit faces on the toes, pink noses, black dot eyes, and on top of each foot, sticking straight up, two floppy fabric ears that bounced when she moved." },
      { s: 'yunjin', f: 'happy', t: "LOOK. Look at them. Look at their little ears." },
      { n: "And Solar laughed." },
      { n: "It came out of her before she knew it was coming, a real laugh, the one that came out of her like something knocked off a shelf, loud enough that a woman with a stroller turned around, and she put a hand over her mouth and couldn't stop, and didn't know why, and it was the stupidest thing she'd ever seen, a pair of socks, and she was laughing so hard her eyes were wet." },
      { n: "Tiles. Cold tiles, at three in the morning, the kind of cold that comes up through the floor of an old house in winter. Her own feet on them, in socks. Pink ones, with small gray rabbits all over them, the ones she only ever wore at home, after midnight, when there was nobody left to be anybody for. A phone face-down on the floor beside her, buzzing, buzzing, and she didn't have to look to know who it was, because there was only one person who was always up." },
      { fragment: 'strangers-rabbit-socks' },
      { n: "The jade ring on Haenim's sash clicked, small and green, a stone in a bowl." },
      { s: 'yunjin', f: 'surprised', t: "...Sol?" },
      { s: 'solar', f: 'surprised', t: "Pink. With gray rabbits. I have some." },
      { s: 'yunjin', f: 'sad', t: "..." },
      { n: "Yunjin's face did something. It didn't crumple. It went very still and very bright, like a window when the sun hits it at the wrong angle, and she put her feet down off the fountain's edge, rabbits and all, and looked at the floor." },
      { s: 'yunjin', f: 'neutral', t: "...Yeah. You do. You wear them at home when nobody's looking. You never told me that. I worked it out. You wear the rabbits when it's bad." },
      { s: 'yunjin', f: 'neutral', t: "So I bought some. Because everything's bad. It's been bad at home since December, and now you're right here, and you don't know me, and everything is bad, Sol. I needed an emergency pair." },
      { choose: [
        { t: "Did you buy me a pair?", notes: 3, flag: { 'yunjin-socks': true }, then: [
          { s: 'yunjin', f: 'surprised', t: "..." },
          { s: 'yunjin', f: 'happy', t: "...Of course I bought you a pair. What am I, a monster? They're in the bag. They're in the bag. Put them on. Right now. In the mall." },
          { n: "She put them on. In the mall. On the rim of the fountain, with her school shoes in her lap. Two pairs of feet side by side, the ears flopping, and Yunjin bumped her foot against Solar's foot, once, twice, like a knock on a door, and Solar knocked back." }
        ] },
        { t: "Everything's a little less bad now.", notes: 3, then: [
          { s: 'yunjin', f: 'sad', t: "Yeah." },
          { s: 'yunjin', f: 'happy', t: "...Yeah, it is. A little. Look at their little ears." }
        ] },
        { t: "Who was always up? At three in the morning?", notes: 3, tally: { 'lean.S': 1 }, then: [
          { s: 'yunjin', f: 'neutral', t: "Me. Obviously. Who else." },
          { s: 'yunjin', f: 'serious', t: "I'm always up. That's my whole thing. You can't sleep, so I'm up. You don't even have to text anything. You just have to know I'm up." }
        ] }
      ] },
      { n: "A security guard came over to tell them, politely, that the fountain was not for feet. Yunjin looked up at him with an expression of enormous and innocent goodwill and said something long and warm in English, and he went pink to the ears and went away again, and Solar realized she'd understood every word, and that it had been extremely rude." },
      { s: 'yunjin', f: 'happy', t: "Don't look at me like that. He doesn't speak English. Nobody here speaks English except us. It's like being at school again." },
      { n: "They walked back to the monorail in the socks. Yunjin insisted. Their shoes in their hands, the rabbit ears going gray at the tips from the station floor, people staring, Yunjin staring back at every single one of them until they looked away." },
      { choose: [
        { t: "Why do you stare back at people?", notes: 2, then: [
          { s: 'yunjin', f: 'neutral', t: "Because you never do. You look at the floor and smile like you're sorry for being looked at. Somebody has to stare back. It's me. I'm the somebody." }
        ] },
        { t: "(Stare back at the next one too.)", notes: 3, then: [
          { n: "A salaryman by the ticket gate looked at their feet and then at their faces, and Solar looked back at him, steady, the way Yunjin did, and he looked away first, and it was such a small thing, and her heart was going like she'd jumped off something." },
          { s: 'yunjin', f: 'happy', t: "OH. Oh my God. Who are you. I'm so proud of you. I'm going to tell everyone in this whole fake year." }
        ] }
      ] }
    ] },

    { after: '10/24', title: '3: three languages', place: 'Iwatodai Strip · Hagakure', time: 'Evening', music: 'city', scene: [
      { n: "Junpei had taken Yunjin to Hagakure because Junpei took everyone to Hagakure, as a sort of test, and Yunjin had passed it by ordering the biggest bowl on the menu with extra everything and eating all of it without stopping to breathe, and Junpei was now looking at her with the dazed devotion of a man who has seen something holy." },
      { s: 'junpei', f: 'happy', t: "She ate the WHOLE thing. Nobody eats the whole thing. Senpai can't eat the whole thing." },
      { s: 'yunjin', f: 'happy', t: "I'm half New York, Junpei. I've eaten things on Canal Street that would kill you." },
      { s: 'junpei', f: 'surprised', t: "...Wait, you lived in New York? Like the actual one? With the statue?" },
      { s: 'yunjin', f: 'neutral', t: "Till high school. Then my dad brought us home and I had to learn how to be quiet in Korean. I never did. Ask Sol. I'm not quiet in any language." },
      { n: "She'd taught Junpei three American phrases over the course of the meal. He was using all of them wrong, constantly, with enormous confidence, and she was letting him, because it was, she said, the funniest thing that had happened to her in a month." },
      { s: 'junpei', f: 'happy', t: "This ramen is totally swag. YOLO." },
      { s: 'yunjin', f: 'happy', t: "PERFECT. Never stop. Say it to Mitsuru. Say it to her face." },
      { n: "Then she turned on her stool and said something to Solar in English, low and fast, not loud at all, the way you'd pass a note under a desk. *Is he always like this or is it me. Tell me it's me. I want it to be me.* And Solar answered her in English without thinking, without even noticing which language she'd picked up, *it's always like this, it's a little bit you*, and Yunjin made a pleased noise into her water." },
      { s: 'junpei', f: 'surprised', t: "Whoa. Whoa, whoa. You guys have a secret language?" },
      { s: 'yunjin', f: 'neutral', t: "It's not a secret, it's English. We do it when we don't want people to understand. Since school. Sol picked it up at the international school and I came with it pre-installed." },
      { choose: [
        { t: "(Keep talking to her in English.)", notes: 3, then: [
          { n: "So they did, for the rest of the meal, about nothing at all, with Junpei looking from one to the other like a man at a tennis match, and every so often Yunjin said his name in the middle of an English sentence just to watch him sit up." }
        ] },
        { t: "(Switch back to Japanese, for Junpei's sake.)", notes: 2, then: [
          { s: 'junpei', f: 'happy', t: "Thank you! Thank you. Senpai's got manners. Unlike SOME people from New York." },
          { s: 'yunjin', f: 'serious', t: "She's got manners for you. For me she's got none. That's how you know she loves me." }
        ] }
      ] },
      { n: "Two tourists at the end of the counter were arguing quietly over a guidebook, in Mandarin, a fast low back-and-forth about the train back to Port Island and whether it was this street or the next. Solar listened without meaning to. It was this street. The train left from the far platform. They had eleven minutes." },
      { n: "She didn't speak Mandarin. She'd never studied a word of it. She knew exactly what they were saying." },
      { choose: [
        { t: "(Turn and tell them, in Mandarin, which platform.)", notes: 3, flag: { 'yunjin-mandarin': true }, then: [
          { n: "She turned on her stool and told them. Quietly, quickly, three sentences, in a voice that didn't sound like any voice she'd ever used, rougher at the edges, a kitchen voice. Both tourists stared at her. Then thanked her, profusely, and ran." },
          { s: 'yunjin', f: 'surprised', t: "..." },
          { s: 'yunjin', f: 'serious', t: "You never do that. Not where anybody can see. You never let anybody know you understand a word." },
          { s: 'yunjin', f: 'neutral', t: "...You just did it in front of a guy who thinks YOLO is a kind of noodle." }
        ] },
        { t: "(Say nothing. Let them work it out.)", notes: 2, then: [
          { n: "She said nothing. Yunjin, beside her, watched her not say anything, and leaned over, and whispered, in English, so only Solar could hear it, *you understood them, didn't you*, and Solar didn't answer, and Yunjin didn't need her to." },
          { s: 'yunjin', f: 'neutral', t: "Same as always. You hear everything and you let people think you're furniture." }
        ] }
      ] },
      { s: 'yunjin', f: 'neutral', t: "You speak three. Did you know that? Korean, English, and that. Hardly anybody knows about the third one. You learned it in a kitchen from old ladies with knives when you were little. I know because you told me. You're not allowed to tell anyone else." },
      { choose: [
        { t: "Why didn't I tell anyone?", notes: 3, then: [
          { s: 'yunjin', f: 'neutral', t: "Because people say things in front of you when they think you don't understand. And you like knowing." },
          { s: 'yunjin', f: 'happy', t: "You're a little bit of a spy, babe. A very polite spy. In very good shoes." }
        ] },
        { t: "What else did I tell you?", notes: 3, then: [
          { s: 'yunjin', f: 'neutral', t: "Everything." },
          { s: 'yunjin', f: 'serious', t: "You tell me everything, Sol. That's the one rule you've never broken. I'm the only person you tell anything to. That's why it's so weird that I'm the one who has to tell you." }
        ] },
        { t: "What do you speak? Besides loud.", notes: 2, then: [
          { s: 'yunjin', f: 'happy', t: "Wow. Okay. Rude. Accurate." },
          { s: 'yunjin', f: 'neutral', t: "Korean, English, and enough Spanish to order at a bodega and get yelled at. That's it. You're the genius. I'm the one who drives." }
        ] }
      ] },
      { n: "Junpei, who had followed none of this, held up his empty bowl and announced to the counter that he was *literally deceased*, and Yunjin threw her head back and laughed so loud the chef dropped a ladle, and the evening went on outside the steamed-up window, the Strip lit up and loud and ordinary, and for an hour Solar forgot to count anything at all." }
    ] },

    { after: '11/1', title: '4: the edge', place: 'Port Island · Pier', time: 'After School', music: 'night', scene: [
      { n: "The pier was long and gray and wet and the wind was coming off the bay in hard slaps that made the flags on the ferry office crack like whips, and Yunjin was walking right along the edge of it, on the yellow line painted to warn people not to, with her arms out like a girl on a balance beam and her fluffy earmuffs knocked sideways by the wind." },
      { n: "Solar was walking down the middle. Exactly the middle. She hadn't decided to. Every time the pier narrowed around a bollard her feet moved her further in, away from the edge, toward the benches, away from the black water slopping against the pilings below, and she didn't notice she was doing it until Yunjin stopped, and turned around, and looked at her." },
      { s: 'yunjin', f: 'neutral', t: "...Yeah. Still. Even here." },
      { s: 'solar', f: 'neutral', t: "What?" },
      { s: 'yunjin', f: 'serious', t: "You never stand at the edge. Never. Not of a pier, not of a boat, not of a pool. You'll go right up to it and stop a whole step back, every single time, like there's a wall." },
      { s: 'yunjin', f: 'neutral', t: "You can't swim, Sol. You never could. You're the harbor's daughter and you can't swim. You're scared of the water. The deep kind. The black kind. At night most of all." },
      { n: "The wind slapped the pier. Below, the water moved against the pilings, black, heavy, and Solar's stomach dropped through the boards, all at once, a cold so total it was almost a sound, and she found she'd taken another step back without deciding to." },
      { choose: [
        { t: "I didn't know that about myself.", notes: 3, then: [
          { s: 'yunjin', f: 'sad', t: "I know you didn't." },
          { s: 'yunjin', f: 'neutral', t: "That's okay. I know it for you. That's what I'm for." }
        ] },
        { t: "Then why are you walking on the edge?", notes: 3, then: [
          { s: 'yunjin', f: 'happy', t: "Because I'm not scared of it. So one of us should be standing over here, in case." },
          { s: 'yunjin', f: 'neutral', t: "That's always been the deal. You stand back. I stand on the edge. If anything happens, I'm already there." }
        ] },
        { t: "(Walk to the edge anyway. One step.)", notes: 2, flag: { 'yunjin-step': true }, then: [
          { n: "She took one step toward it. Her whole body screamed. Her knees went loose and her hands went cold and the black water came up at her the way a floor comes up when you miss a stair, and Yunjin's hand shot out and caught her wrist, not hard, just fast, and held." },
          { s: 'yunjin', f: 'serious', t: "No. You don't have to prove anything to the water. Water doesn't care." },
          { n: "But she didn't pull her back. Solar noticed that. She held on and let Solar stand there, one step closer than she'd ever been, for as long as she could stand it, which was four seconds, and only then walked her back to the middle." }
        ] }
      ] },
      { n: "Yunjin came in off the edge and walked down the middle of the pier beside her, close, her shoulder against Solar's shoulder, between Solar and the water, without saying anything about it." },
      { ifBefore: '11/14', then: [
        { s: 'yunjin', f: 'serious', t: "Listen to me. Once, and then I'm going to be normal." },
        { s: 'yunjin', f: 'serious', t: "If you ever end up in the water. Here, there, anywhere, that tower. I'm coming in after you. I don't care how deep. I don't care how cold. I don't care if I can't see." },
        { s: 'yunjin', f: 'neutral', t: "So don't be scared of drowning. Be scared of me, coming in after you, yelling. That's way worse. That's way more embarrassing." },
        { choose: [
          { t: "You'd really come in?", notes: 3, then: [
            { s: 'yunjin', f: 'happy', t: "In a heartbeat, babe. In my good shoes. I already ruined one pair of good shoes for you this month." }
          ] },
          { t: "Can you even swim?", notes: 3, then: [
            { s: 'yunjin', f: 'neutral', t: "Yes. Obviously. I'm a great swimmer." },
            { s: 'yunjin', f: 'serious', t: "...I'm a fine swimmer. I can do the one where you keep your head up and look furious. For a while. It's enough. It'll be enough." },
            { s: 'yunjin', f: 'happy', t: "I'm coming in anyway. That wasn't a negotiation." }
          ] },
          { t: "Don't. I don't want you to drown too.", notes: 3, then: [
            { s: 'yunjin', f: 'serious', t: "Then don't fall in. That's the deal. You stay back, I stay on the edge, and nobody drowns, and we go and get noodles." },
            { s: 'yunjin', f: 'neutral', t: "...And if you fall in anyway, I'm coming. Sorry. That part isn't up to you." }
          ] }
        ] }
      ], else: [
        { s: 'yunjin', f: 'neutral', t: "I used to say it like a joke. If you ever fell in I'd go in after you. Like a hundred times. In the car, on the boardwalk, on the phone at three in the morning." },
        { s: 'yunjin', f: 'sad', t: "And then that stupid boat in that stupid tower. And it turns out I meant it. It turns out it was never a joke, I just didn't know yet." },
        { choose: [
          { t: "I'd have drowned without you.", notes: 3, then: [
            { s: 'yunjin', f: 'serious', t: "Yeah. You would have. Don't make me think about it on a pier, babe, I'll throw up on your shoes." },
            { s: 'yunjin', f: 'neutral', t: "You didn't, though. That's the part I'm keeping. You didn't." }
          ] },
          { t: "Can you even swim?", notes: 3, then: [
            { s: 'yunjin', f: 'neutral', t: "...Kind of. I can do the one where you keep your head up and look furious." },
            { s: 'yunjin', f: 'happy', t: "It was enough. It turns out furious is a whole stroke." }
          ] }
        ] }
      ] },
      { n: "They went and got noodles. A stand at the land end of the pier, steam coming off it sideways in the wind, two paper bowls, and they ate them on the bench by the ferry office with their backs to the bay, and Yunjin didn't once look at the water the whole time, and Solar didn't notice that she wasn't looking until she noticed, and then she couldn't stop noticing, because Yunjin, who walked on the yellow line, who wasn't scared of anything, was keeping her eyes off the sea the way you'd keep your eyes off something that had just tried to take your friend." }
    ] },

    { after: '11/9', title: '5: till it turns', place: 'Iwatodai Dorm · Rooftop', time: 'Late Night', music: 'night', scene: [
      { n: "Low tide was at three-forty. Solar knew that the way she knew her own name, which was to say better, lately, and she was lying awake at three in the morning with the knowledge sitting on her chest like a cat, when her phone lit up on the desk." },
      { phone: [
        { from: 'yunjin', t: "r u up" },
        { from: 'yunjin', t: "its low tide" },
        { from: 'yunjin', t: "(i know ur up)" },
        { from: 'yunjin', t: "(its low tide)" },
        { from: 'yunjin', t: "roof. bring a blanket. i stole one already but bring another one bc im not sharing" }
      ], contact: 'yunjin 🦋' },
      { n: "She was on the roof with her back against the water tank and two blankets, which she was sharing anyway, and a can of hot corn soup from the vending machine, which she said was a drink, and she held up the edge of the blankets without a word and Solar got under them." },
      { s: 'yunjin', f: 'neutral', t: "You can't sleep at low tide. You never could. So I'm always up. That's how it works. You're up because of the sea and I'm up because of you." },
      { s: 'yunjin', f: 'neutral', t: "You'd text *up*, and I'd text *up*, and then we'd talk about nothing till it came back in. I looked up the tables once so I'd know when to be awake. Don't tell anyone I looked up the tables. It's so embarrassing. I'm a romantic." },
      { choose: [
        { t: "When does it turn tonight?", notes: 3, tally: { 'lean.S': 1 }, then: [
          { s: 'yunjin', f: 'surprised', t: "You tell ME. You always tell me." },
          { s: 'solar', f: 'neutral', t: "...Four-ten. It starts coming back at four-ten." },
          { s: 'yunjin', f: 'happy', t: "There it is. My little tide chart. My little weather girl." }
        ] },
        { t: "What do we talk about? Until it turns?", notes: 3, then: [
          { s: 'yunjin', f: 'happy', t: "Nothing. That's the rule. Nothing important. Dramas. Boys who don't deserve us. What we'd eat if we could eat anything. Whether a hot dog's a sandwich." },
          { s: 'yunjin', f: 'serious', t: "It's not a sandwich. You're wrong about it every time." }
        ] },
        { t: "Who else knows I can't sleep?", notes: 2, then: [
          { s: 'yunjin', f: 'neutral', t: "Your appa, I think. He'd never say. And whoever's on the gate at night, probably, because your light's on." },
          { s: 'yunjin', f: 'neutral', t: "And my mom, now. She's up too. She plays your piano at three in the morning, the sad one she used to play at the end of my recitals. Nobody tells her to stop." },
          { s: 'yunjin', f: 'serious', t: "And me. Me most. I'm the only one who's up with you, though. That's the difference." }
        ] }
      ] },
      { n: "So they talked about nothing. Under the blankets on the roof with the city dark around them, the bay invisible beyond the buildings but there, Solar could feel it there, going out, going out, the way you feel someone leaving a room behind your back. Yunjin talked about a drama where a man was in love with his dead wife's twin and was furious about the twin's haircut. Solar told her about Koromaru taking himself for walks, and Yunjin made her tell it twice, and the second time laughed so hard at the part where he waited at the crossing for the light that she spilled corn soup on the blanket and said it was fine, it was Junpei's." },
      { s: 'yunjin', f: 'neutral', t: "Do you know what you do? At low tide? When you think I'm not looking?" },
      { s: 'yunjin', f: 'neutral', t: "You turn your ring. On your right hand. A quarter turn and back. You count the turns. You did it in my car once for a whole low tide while I pretended to be asleep on your shoulder, and when I finally gave up pretending you'd counted to four hundred and something." },
      { n: "Solar looked down at her right hand on the blanket. Her thumb was at the base of her ring finger, turning nothing, slow, a quarter turn and back. She hadn't known. She didn't stop." },
      { choose: [
        { t: "Where's the ring?", notes: 3, then: [
          { s: 'yunjin', f: 'sad', t: "At home, I guess. On your hand. On your other hand. I don't know how this works, Sol. I'm just a girl from Yeonsu-dong with a stopped phone." },
          { s: 'yunjin', f: 'neutral', t: "It's your grandmother's. Jade. Green. You never take it off. You'd never take it off." },
          { n: "On Haenim's sash, somewhere under the dorm, under the city, under the hour that hadn't come yet, a small green stone hung on a red cord. Solar thought of it, and her thumb went on turning." }
        ] },
        { t: "(Keep turning it. Count out loud.)", notes: 3, flag: { 'yunjin-count': true }, then: [
          { n: "She counted out loud, softly, one, two, three, and Yunjin put her head on her shoulder and counted with her, quieter, a half beat behind, the way you'd hum along to a song you knew better than the person singing it." },
          { s: 'yunjin', f: 'neutral', t: "...Forty. Forty-one. You know you've never let me count with you before? You always stop when I join in." },
          { s: 'yunjin', f: 'happy', t: "Amnesia's kind of great, actually. Forty-two." }
        ] }
      ] },
      { n: "At four-ten Solar felt it turn. She couldn't have said how. Something in her chest let go, like a fist uncurling, and her eyes went heavy all at once. Yunjin felt her go heavy and didn't move, and when Solar woke up at six with the city going blue around them, Yunjin was asleep sitting up with the can of corn soup still in her hand, her head on Solar's head, and the blankets tucked very carefully around Solar's side and not at all around her own." },
      { choose: [
        { t: "(Tuck the blankets around her instead.)", notes: 3, then: [
          { n: "She did it slowly, so as not to wake her, peeling the blankets off her own side and wrapping them round Yunjin's shoulders, and Yunjin made a small grumbling noise in her sleep and burrowed into them and said, very clearly, eyes shut, *it's not a sandwich*, and didn't wake up." }
        ] },
        { t: "(Take a photo. Blackmail.)", notes: 2, then: [
          { n: "She took it on her flip phone, which made a loud fake shutter noise, and Yunjin didn't wake, and the photo came out small and grainy and blue, a girl asleep against a water tank with her mouth open and a soup can in her fist, and Solar looked at it for longer than she meant to and saved it." }
        ] }
      ] }
    ] },

    { after: '11/17', title: '6: a terrible person', place: 'Iwatodai Dorm · Lounge', time: 'Night', music: 'tender', scene: [
      { n: "In the days after the ferry, Yunjin still hadn't been warm. That was what she said, every time anyone asked. *I'm just not warm yet.* She'd been sitting in the lounge in two of Akihiko's sweatshirts and a pair of Mitsuru's wool socks over the rabbit socks, with a mug of something hot in both hands, for most of those days, and she hadn't talked as much as usual, which in anyone else would have been normal, and in Yunjin was a medical emergency. At night she slept with her light on. She'd told Fuuka she always had. Solar knew, without knowing how, that that wasn't true, and that it hadn't been true for very long." },
      { n: "The dorm had noticed. The dorm had been very quiet about noticing, in its own way. Koromaru had been lying across her feet since Saturday and only got up to eat. Fuuka had made her soup three times and put it down on the table beside her and gone away without saying anything. Akihiko had come down the stairs that afternoon with a third sweatshirt, stopped in the doorway, looked at the two she already had on, and put it over the arm of the sofa anyway, and left." },
      { n: "Solar hadn't talked about it either. The ferry deck in the tower, rocking, the wet white paint and the orange life rings and the diesel. The tide standing up over the rail in the shape of something that wanted her. The deck going out from under her, and the black, and the cold that wasn't cold, that was a blow. And then something hitting the water beside her, hard, and hands on her collar, and a voice swearing in two languages into the sea." },
      { n: "She sat down on the sofa beside Yunjin. Yunjin lifted the edge of her blanket without looking, and Solar got under it." },
      { ifFlag: 'yunjin-socks', then: [
        { n: "Under the blanket their feet found each other. Solar was wearing hers too. She'd put them on that morning without deciding to, the white ones with the ears, and Yunjin looked down at the two pairs side by side and didn't say anything about it, and her shoulders came down about a centimeter." }
      ] },
      { choose: [
        { t: "You came in after me.", notes: 3, then: [
          { s: 'yunjin', f: 'neutral', t: "I said I would." },
          { s: 'yunjin', f: 'serious', t: "I said it on a pier. I said it in the car. I said it about a hundred times. You never believe me. You never believe anyone will actually come." }
        ] },
        { t: "(Put your cold hands on her warm mug, over her hands.)", notes: 3, then: [
          { n: "She put her hands around Yunjin's hands around the mug. Yunjin looked at them, all four hands knotted together around a cup of barley tea, and let out a breath that went on for a long time, and some of the stiffness went out of her shoulders for the first time since the tower." }
        ] },
        { t: "You told me you were a great swimmer.", notes: 2, then: [
          { s: 'yunjin', f: 'serious', t: "I lied. Obviously I lied. I'm a terrible swimmer. I'm a furious swimmer. There's a difference." },
          { s: 'yunjin', f: 'neutral', t: "It was enough, though. Furious was enough. Don't tell anyone, they'll want me on a team." }
        ] }
      ] },
      { s: 'yunjin', f: 'sad', t: "You didn't fight. In there. You didn't kick. You just went still. You went so still, Sol." },
      { s: 'yunjin', f: 'serious', t: "Like you'd decided. Like the water had asked you something and you'd said *okay*. I saw your face. I saw you decide it." },
      { ifFlag: 'yunjin-step', then: [
        { s: 'yunjin', f: 'neutral', t: "And on the pier you stepped toward it. One step. I thought that was brave. I thought about it the whole way down into that water, Sol. Whether it was brave or whether it was the other thing." }
      ] },
      { n: "Solar didn't say anything. There was nothing to say. She remembered the cold, and the quiet under it, and how easy it had been, how restful, a whole black hush where nobody needed anything, and how for one second it had felt like the kindest thing that had happened to her all year." },
      { s: 'yunjin', f: 'sad', t: "You're my favorite person in the whole world." },
      { s: 'yunjin', f: 'serious', t: "And you're a terrible, terrible person." },
      { n: "She said it in English, very low, in a voice Solar had never heard out of her, cracked down the middle, and it went into Solar like a key into a lock she hadn't known was in her. She knew it. She'd heard it before. In another room, at night, with this same girl bent close to her ear and her face doing this same thing, furious and wrecked and loving her anyway." },
      { n: "The lounge door banged open. Junpei came in backwards with a cup of instant noodles in each hand and a pair of chopsticks in his teeth, saw them, stopped dead in the doorway, looked from one face to the other, and very slowly took the chopsticks out of his mouth." },
      { s: 'junpei', f: 'surprised', t: "...Is this a bad time? This looks like a bad time. I'm gonna... these are both for me, actually, I'm gonna go eat them both in the kitchen. Standing up. Like a man." },
      { s: 'yunjin', f: 'happy', t: "YOLO, Junpei." },
      { s: 'junpei', f: 'happy', t: "YOLO!" },
      { n: "He went. Yunjin was laughing, wet and helpless, with her forehead on Solar's shoulder, and the laugh ran out, and she stayed there." },
      { choose: [
        { t: "I know. I'm sorry.", notes: 3, then: [
          { s: 'yunjin', f: 'sad', t: "Don't be sorry. Be not still. Next time. Kick. Scream. Bite me if you have to. I'll come in yelling. You just have to not decide." },
          { s: 'yunjin', f: 'neutral', t: "Promise me you won't decide." },
          { choose: [
            { t: "I promise.", notes: 3, flag: { 'yunjin-promise': true }, then: [
              { n: "It came out of her quiet and level, in the voice she didn't use much, the one that was hers. Yunjin lifted her head and looked at her for a long moment, checking, the way you'd check a knot." },
              { s: 'yunjin', f: 'neutral', t: "...Okay. Okay. I'm holding you to it. I've got it in writing. In my head. That's writing." }
            ] },
            { t: "I don't know if I can.", notes: 2, then: [
              { s: 'yunjin', f: 'sad', t: "...Yeah. That's honest. I'm going to be furious about it later in the shower." },
              { s: 'yunjin', f: 'serious', t: "Then I'll ask again. Every week. Till you can." }
            ] }
          ] }
        ] },
        { t: "You said that to me before.", notes: 3, tally: { 'lean.S': 1 }, then: [
          { s: 'yunjin', f: 'surprised', t: "..." },
          { s: 'yunjin', f: 'sad', t: "...Yeah. I did. I said it right in your ear and then I walked out, and you closed the door all the way. You never close the door all the way." },
          { s: 'yunjin', f: 'neutral', t: "That's how I knew you'd heard me." }
        ] }
      ] },
      { n: "They sat under the blanket until the Dark Hour came and went over them and Yunjin finally, finally, at a little past one, said she was warm. Then she fell asleep with her head on Solar's lap and Koromaru on her feet, and Solar sat there not moving until the morning, and counted, and didn't once, the whole night, think about the water." }
    ] },

    { after: '11/26', title: '7: the true thing', place: 'Port Island · Harbor', time: 'After School', music: 'tender', scene: [
      { n: "The harbor in late November had gone the color of old pewter, the water, the sky, the hulls of the moored boats, everything one gray shading into another, and the vending machine by the ferry office had started selling hot drinks, and Yunjin had bought two hot canned coffees and was holding both of them against her cheeks." },
      { n: "She had a new puffer. Red, this time, and loud, and a size too big, because the yellow one had died in the sea and she'd said she wasn't going to replace it with anything quieter, out of respect. She was sitting on the seawall exactly where she'd sat the first afternoon, and she didn't start talking when Solar came down the steps, which was how Solar knew it was going to be one of those." },
      { s: 'yunjin', f: 'neutral', t: "Hanni told me something. About you. From your other one. The campus one with the snow." },
      { s: 'yunjin', f: 'neutral', t: "She said you laugh more here than there. And I said, yeah. I said that about ours too. You laugh more here than you do at home." },
      { s: 'yunjin', f: 'serious', t: "We sat up in the lounge after everyone went to bed and figured it out. Me and Hanni and the tall loud one. Hyein. With the jasmine tea. We figured out the true thing." },
      { s: 'solar', f: 'neutral', t: "What true thing?" },
      { s: 'yunjin', f: 'serious', t: "You're happier when nobody needs anything from you." },
      { n: "The gulls went on screaming. A ferry horn sounded out on the bay, low and long. Yunjin held out the second coffee and didn't look at her while she said it, which was how Solar knew she'd rehearsed it, and how much it had cost." },
      { s: 'yunjin', f: 'neutral', t: "At home everyone needs something. Your appa needs you safe. Your mom needs you perfect, with your hair up, with your face on. The whole city needs you to be the daughter. And you do it. You're so good at it. You smile and you pin your hair up and you're perfect." },
      { s: 'yunjin', f: 'sad', t: "Here nobody needs you to be anything. They just need you to show up at midnight and hit things. And you're happy. And I hate it. And it's the truest thing I know about you." },
      { ifRank: { wren: 8 }, then: [
        { s: 'yunjin', f: 'serious', t: "And before you ask, no. This isn't the thing. From the bench. That's a different thing. I'm still working up to that one." }
      ] },
      { choose: [
        { t: "Are you asking me to stay?", notes: 3, then: [
          { s: 'yunjin', f: 'surprised', t: "God, no. Are you crazy? I'm going to drag you home by the hair." },
          { s: 'yunjin', f: 'neutral', t: "I'm telling you the true thing so you know it. So when you decide, you decide knowing it. That's my whole job. I say the thing. You decide." }
        ] },
        { t: "Do I need anything from you?", notes: 3, then: [
          { s: 'yunjin', f: 'neutral', t: "No. That's the thing. You never have. You just like me." },
          { s: 'yunjin', f: 'happy', t: "Which is so rare for you it makes me feel like I won the lottery every single day." }
        ] },
        { t: "You're the only one who'd say that to me.", notes: 3, then: [
          { s: 'yunjin', f: 'happy', t: "I know. That's why you keep me. I'm very annoying and very correct." }
        ] }
      ] },
      { n: "They drank the coffees on the seawall. Solar held hers in both hands and looked at the water, which she'd started being able to do, a little, from up here, and thought about a house she couldn't picture and a city she couldn't remember needing her, and found that the thought of it sat on her chest exactly like the tide did at night." },
      { s: 'solar', f: 'neutral', t: "Tell me something about home. Not the true thing. Just something." },
      { s: 'yunjin', f: 'neutral', t: "Okay. Something." },
      { choose: [
        { t: "Something about my room.", notes: 3, tally: { 'lean.S': 1 }, then: [
          { s: 'yunjin', f: 'neutral', t: "You've got this huge bed and you never sit on it. You sit on the floor against it, with your knees up, like the bed's for guests. That's where you put your hair down. After midnight. Never before." },
          { s: 'yunjin', f: 'happy', t: "So I sit on the bed, because somebody has to, and you sit on the floor, and I do your hair from up there. It's a whole system. It's very feudal." }
        ] },
        { t: "Something about you.", notes: 3, then: [
          { s: 'yunjin', f: 'surprised', t: "Me? Okay. Um. I drive too fast. I have a car with three doors and everyone thinks it's broken and it's not, it's a design choice, it's very European. It's purple. The horn plays La Cucaracha. That part was my choice." },
          { s: 'yunjin', f: 'neutral', t: "You're the only person who never once asked where the fourth door was." }
        ] },
        { t: "Something nobody else would know.", notes: 2, then: [
          { s: 'yunjin', f: 'neutral', t: "You practice piano when you want to be left alone. Not because you love it. Because nobody ever knocks on a door when they can hear scales coming through it." },
          { s: 'yunjin', f: 'happy', t: "Two hours of scales, and you're not even in the room half the time, you're on the phone with me. Genius. Criminal. A very polite criminal." },
          { s: 'yunjin', f: 'neutral', t: "My mom plays it now. Your piano. At three in the morning, in your mom's slippers, which are too big for her. She plays the sad one and nobody knocks on that door either." }
        ] }
      ] },
      { n: "When the cans went cold they walked back along the seawall, and Yunjin took her hand and swung it, like they were kids, and when Solar asked why, she said because nobody needed her to, and that was the point." }
    ] },

    { after: '12/9', title: '8: send a fish', place: 'Iwatodai Dorm · Lounge', time: 'Evening', music: 'joy', scene: [
      { n: "There were two of them at dinner now. That was how Yunjin put it, loudly, to nobody, with her chopsticks pointed at the ceiling like she was addressing a higher power." },
      { s: 'yunjin', f: 'serious', t: "Two. Of them. At one table. God help us all." },
      { n: "One of them lived here now. He'd been given a room upstairs in November and kept to it like a held breath, and he was at the far end of the dining table in a black hoodie, eating very fast with his head down and his headphones around his neck, not looking at anyone. The other had walked over from the guesthouse by the station because Fuuka had invited him on a card, in writing, and he was apparently incapable of refusing anything that arrived on a card. He was at the near end with his sleeves at exactly the elbow, eating very slowly, very correctly, cutting his tamagoyaki into identical pieces, not looking at anyone either, so hard that you could feel it from across the room." },
      { n: "They were not looking at each other. It was the loudest thing in the house." },
      { n: "Mitsuru, at the head of the table, had noticed. Mitsuru noticed everything. She cut a piece of fish with surgical care and said, to the table in general, that she hoped everyone was finding their rooms adequate, here and at the guesthouse, and both boys said yes, at the same moment, in the same flat voice, and then each looked furious that the other had said it." },
      { s: 'mitsuru', f: 'neutral', t: "...I see." },
      { n: "Yunjin leaned in to Solar and said, in English, low and fast and nowhere near low enough, the way she'd been saying things about him in English since he moved in: *babe. he got hotter. in the past. is that even allowed. you could open mail with those cheekbones. you could open a bank account.*" },
      { n: "On his way out, the one in the hoodie passed behind Yunjin's chair, and didn't stop, and didn't look." },
      { s: 'haechan', f: 'neutral', t: "It's the lighting." },
      { n: "In English. Flat, unhurried, every word in its place. Yunjin's chopsticks stopped halfway to her mouth with a piece of omelette on them." },
      { s: 'yunjin', f: 'surprised', t: "...Since WHEN do you speak English?" },
      { s: 'haechan', f: 'neutral', t: "Long story, Yunjin-ssi." },
      { s: 'yunjin', f: 'serious', t: "Delivery boy." },
      { n: "The corner of his mouth did something. Then he was gone up the stairs, and Yunjin sat very still with the omelette going cold on her chopsticks and her face going slowly, magnificently red from the collar up." },
      { s: 'yunjin', f: 'flustered', t: "A month. I've been saying things in English in front of that man for a MONTH. I said the cheekbones thing at home. In a shoe shop. He was carrying my bags. He was standing RIGHT THERE carrying my bags." },
      { n: "Solar, who had no idea what had just happened, had the strong and specific feeling that it had happened before, in some other shape, many times, and that this time he'd won." },
      { s: 'yunjin', f: 'neutral', t: "Babe. Come here. Phone. I'm teaching you the codes. Again. Since you forgot. Since you're going to need them." },
      { n: "She pulled Solar onto the lounge sofa and held up her phone, stuck at 12:07 but still working, the screen lit with a sticker keyboard, a hundred little cartoon animals." },
      { s: 'yunjin', f: 'serious', t: "If you're alive, send a sticker. If you're dead, send two stickers." },
      { s: 'yunjin', f: 'serious', t: "And if the bodyguard is in your room. Send a fish." },
      { s: 'solar', f: 'surprised', t: "What bodyguard?" },
      { s: 'yunjin', f: 'happy', t: "Oh, babe. Oh, sweet innocent amnesiac babe." },
      { choose: [
        { t: "Why a fish?", notes: 3, then: [
          { s: 'yunjin', f: 'happy', t: "Because it's the least suspicious sticker. Nobody looks twice at a fish. Your mom could be reading over your shoulder and she'd see a fish and think, my daughter loves seafood." },
          { s: 'yunjin', f: 'neutral', t: "And you send the rabbit for alive. The white one, bowing. You always send the rabbit. Every single time. Like a little butler." }
        ] },
        { t: "(Send her a fish. Right now.)", notes: 3, flag: { 'yunjin-fish': true }, then: [
          { n: "She sent a fish. Beside her, Yunjin's phone buzzed in her own hand, the little cartoon fish appearing in the chat, and she looked at it, and looked at Solar, and then looked very slowly toward the stairs, up which one boy had just gone, and then toward the dining room, where the other was still sitting, and had gone completely still, as if he'd felt it." },
          { s: 'yunjin', f: 'surprised', t: "SOL." },
          { s: 'yunjin', f: 'happy', t: "...Which one? No. Don't tell me. Tell me. Don't tell me." }
        ] },
        { t: "What do I send for the other one?", notes: 3, then: [
          { s: 'yunjin', f: 'surprised', t: "..." },
          { s: 'yunjin', f: 'neutral', t: "...Huh. We never made one for him." },
          { s: 'yunjin', f: 'happy', t: "Okay. Okay, new code. A cup of tea. He's a cup of tea. Polite and too hot and you can't tell what's in it." }
        ] }
      ] },
      { s: 'yunjin', f: 'serious', t: "And if you need me to come and get you, wherever you are, whatever time it is, you send the crying cat. You don't explain. You don't type anything. I'm already in the car." },
      { ifFlag: 'yunjin-mandarin', then: [
        { s: 'yunjin', f: 'neutral', t: "Oh, and if it's really bad, and somebody's reading your phone, text me one word in Mandarin. Any word. You know I can't read it. I'll know anyway. Nobody on earth texts me in Mandarin but you." }
      ] },
      { choose: [
        { t: "Does the crying cat work here?", notes: 3, then: [
          { s: 'yunjin', f: 'neutral', t: "Here, there. Doesn't matter. My phone's stuck at 12:07 and it still buzzes when you text. So it works." },
          { s: 'yunjin', f: 'serious', t: "Send it once. Just to test. No, don't. Don't. If you send it I'll have to get up and I just got comfortable." }
        ] },
        { t: "(Practice. Rabbit. Fish. Cup of tea.)", notes: 3, then: [
          { n: "She practiced, sticker by sticker, and Yunjin quizzed her like a flashcard, *you're alive, go*, *you're dead, go*, *he's in your room, go*, *the other one's in your room, go*, faster and faster, until Solar sent a fish and a cup of tea at the same time by accident and Yunjin had to lie down on the floor." },
          { s: 'yunjin', f: 'happy', t: "BOTH? Both at once? Babe. There's no code for both. We never needed a code for both." },
          { s: 'yunjin', f: 'serious', t: "...We might need a code for both." }
        ] }
      ] },
      { n: "From the dining room there was the scrape of a chair. The second one had gotten up. He came past the lounge door on his way to the front hall with his coat already over his arm, back to the guesthouse, and bowed, very slightly, at the doorway, to the room in general." },
      { s: 'yunjin', f: 'neutral', t: "Yang Jungwon." },
      { n: "He stopped. He turned all the way round, the way he did everything, completely, and waited." },
      { s: 'jungwon', f: 'neutral', t: "Huh Yunjin-ssi." },
      { s: 'yunjin', f: 'serious', t: "I took back what I said about you. At home. Almost all of it. After you carried me. I remember who carried me." },
      { s: 'jungwon', f: 'neutral', t: "Almost." },
      { s: 'yunjin', f: 'serious', t: "Most of it. Some of it. Don't push it. You still smell like nothing." },
      { n: "He considered this with grave attention, as if she'd handed him a document that needed initialing on every page, and then bowed again, to her, a little lower than before, and to Solar, a little lower than that. His eyes went once to the phone in her hand, the sticker keyboard still lit, and came back to her face, and he said nothing about it at all." },
      { s: 'jungwon', f: 'neutral', t: "Goodnight. Thank Fuuka-ssi for me. The card was very kind." },
      { n: "Then he went out into the cold, and his face didn't do anything the whole way to the door, which, Yunjin said afterward, was the most suspicious thing a face had ever done." },
      { ifRank: { akihiko: 7 }, then: [
        { n: "The front door had barely shut behind him when it opened again, and Akihiko came in from his evening run with his breath still white and the cold coming off his shoulders, and stopped in the lounge doorway just long enough to say *Solar,* the way he always said it coming into a room, like a check he ran, and then went up the stairs two at a time." },
        { n: "Yunjin looked at the empty doorway. Then at Solar's face. Then at the phone. She didn't say anything for about five seconds, which tied her personal record." },
        { s: 'yunjin', f: 'surprised', t: "...Oh, no. Oh, babe. That's three." },
        { s: 'yunjin', f: 'serious', t: "I'm going to need so many more stickers." }
      ], else: [
        { s: 'yunjin', f: 'neutral', t: "...You know what? I'm going to need more stickers." }
      ] }
    ] },

    { after: '1/6', title: '9: elder', place: 'Naganaki Shrine', time: 'Afternoon', music: 'day', scene: [
      { n: "Yunjin had eaten rice cake soup on New Year's Day, three bowls, at the dorm, made by Mitsuru's chef, who had been sent over in a car and had looked at the dorm kitchen with the face of a man asked to perform surgery in a garage. And she'd announced, standing on a chair, that she was now a year older, and that this made her Solar's elder, technically, because Solar had only had one bowl." },
      { s: 'yunjin', f: 'happy', t: "So you have to respect me now. That's the rule. That's the law. You have to carry my bag and bow when I walk in." },
      { n: "It was five days later and she was still enforcing it. They were at Naganaki, on the steps, in the thin January sun, with a bag of hot sweet potatoes from the cart at the bottom, and Yunjin had made Solar carry the bag up all hundred and twelve steps, as her elder, and had walked behind her the whole way telling her she was doing great." },
      { s: 'yunjin', f: 'neutral', t: "Did you draw a fortune? On the first?" },
      { s: 'solar', f: 'neutral', t: "It was blank." },
      { s: 'yunjin', f: 'surprised', t: "BLANK? They give you blank ones here? That's so spooky. That's so spooky and so you." },
      { choose: [
        { t: "Blank means it isn't written yet.", notes: 3, then: [
          { s: 'yunjin', f: 'neutral', t: "Who told you that? The fox girl? The one who sweeps at people?" },
          { s: 'yunjin', f: 'happy', t: "...She's right, though. I like that. Not written yet. You can do anything with that." }
        ] },
        { t: "What did yours say?", notes: 3, then: [
          { s: 'yunjin', f: 'happy', t: "Great blessing! Obviously. The universe loves me. I tied it to the tree anyway so it'd stay." }
        ] }
      ] },
      { n: "They ate the sweet potatoes on the top step with their gloves off, burning their fingers, the skins split and sugary and black at the edges, and Yunjin peeled hers with the total concentration she gave to nothing else in her life except eyeliner, and below them the city went on in the cold, small and gray and very far down." },
      { s: 'yunjin', f: 'neutral', t: "I heard the bells. On the longest night. We all did. Everybody woke up at once, in coats over pajamas, running. Hanni ran out in one shoe." },
      { ifFlag: 'route-S', then: [
        { s: 'yunjin', f: 'sad', t: "And I heard the jade one keep going. After the others stopped. Like a glass you hit with a spoon and it just doesn't stop ringing." },
        { s: 'yunjin', f: 'neutral', t: "I'm not going to ask you if you're sure. I hate when people ask me if I'm sure. I just wanted you to know I heard it. That's all. I heard it and I sat on the stairs and cried in front of Jihoon, and he gave me his hoodie, and I'm keeping it, that's his problem." }
      ], else: [
        { ifFlag: 'route-true', then: [
          { s: 'yunjin', f: 'surprised', t: "And all three of them kept going. All three. Nobody knows what that means. Hanni cried. Jihoon said it means you're greedy. Jaehyun did his face where he thinks about it for an hour." },
          { s: 'yunjin', f: 'neutral', t: "I don't know what it means either. But it had the jade one in it. I could hear it in there. It had me in it. That's all I need to know about it." }
        ], else: [
          { s: 'yunjin', f: 'neutral', t: "And the jade one went quiet. After. I sat on the stairs and listened to it go quiet." },
          { s: 'yunjin', f: 'sad', t: "I'm not going to ask you why. I'm not going to fight you. I said I'd fight them all, and I meant it, but I never meant you. I never once meant you." }
        ] }
      ] },
      { n: "She took off her scarf. It was long and soft and red, a red so loud it was almost a noise, and she wound it around Solar's neck twice and tucked the ends in, and stood back to look." },
      { ifRank: { hyein: 7 }, then: [
        { s: 'yunjin', f: 'neutral', t: "Wear a coat. You never wear a coat. You've got one now, finally, the tall loud one made you one, and it's so good I'm jealous. So wear a scarf too." }
      ], else: [
        { s: 'yunjin', f: 'neutral', t: "Wear a coat. You never wear a coat. You go out in January in a school blazer like you're immune. You're not immune. Nobody's immune. So wear a scarf, at least." }
      ] },
      { ifFlag: 'yunjin-promise', then: [
        { s: 'yunjin', f: 'serious', t: "That's my elder advice. That's all of it. Wear a coat. Keep your promise about the water. And let people come in after you." }
      ], else: [
        { s: 'yunjin', f: 'serious', t: "That's my elder advice. That's all of it. Wear a coat. Don't decide things in the water. And let people come in after you." }
      ] },
      { choose: [
        { t: "Yes, elder.", notes: 3, then: [
          { s: 'yunjin', f: 'happy', t: "GOOD. Oh, that felt amazing. Again. Louder. Bow a little." },
          { s: 'solar', f: 'happy', t: "Yes, elder. Wife. Jin." },
          { s: 'yunjin', f: 'sad', t: "...Okay, that one got me. Don't do that one. That's cheating." }
        ] },
        { t: "You'll be cold.", notes: 3, then: [
          { s: 'yunjin', f: 'neutral', t: "Sure." },
          { n: "Which, from Yunjin, had meant *no* since she was nine years old. Solar knew it the way she knew the tables." },
          { s: 'yunjin', f: 'neutral', t: "I'm never cold. I'm half New York." },
          { s: 'yunjin', f: 'happy', t: "...I'm freezing. Give me a sweet potato. Elder's orders." }
        ] },
        { t: "(Take off a glove and give it to her.)", notes: 3, then: [
          { n: "One glove, the left. Yunjin looked at it, and at Solar's bare hand, and put it on, and held out her own bare hand, the right, and Solar took it, and they sat on the top step with one glove each and their bare hands knotted together in the pocket of the red puffer, which was, Yunjin said, the most efficient thing two people had ever done." }
        ] }
      ] },
      { n: "On the way down Yunjin made her go first, so she could walk behind her, and count the steps out loud for her, all hundred and twelve, getting every number wrong on purpose until Solar was laughing too hard to walk and had to sit down on step sixty-something with a scarf over her face." }
    ] },

    { after: '1/21', title: '10: jin', place: 'Port Island · Harbor', time: 'Evening', music: 'tender', scene: [
      { n: "It was low tide at six in the evening, and the harbor had emptied itself out into the dark, the mud coming up gray and shining under the sodium lights along the seawall, the boats settled on their keels, everything smelling of salt and diesel and the iron underneath, and Yunjin was sitting on the seawall exactly where she'd been the first afternoon, in the red puffer, with two cans of coffee beside her, singing to the gulls." },
      { n: "She didn't stop singing when Solar came down the steps. She held up one can, without looking, the way you'd hold out a hand to someone you knew would take it." },
      { n: "And Solar knew her." },
      { n: "Not in pieces. Not the socks and the codes and the scarf, one at a time. All of it, the way the tide comes back in over a mudflat, not in a line but everywhere at once, from underneath. Tenth-grade English, a classroom that smelled of whiteboard markers, a lazy teacher reading names off a list, and the girl in the next seat, just back from New York with an accent and a purple backpack, leaning over on the first morning to whisper *you look like you hate everyone. me too.* A little purple car with three doors and a horn that played La Cucaracha, on a boardwalk in winter with the heater on and the windows fogged, a song on the radio for the fourth time, a girl doing a horse dance from the waist up with her face completely serious. Two hot cans from the machine by the ferry terminal. *I'll fight them all. I'll beat them with my Prada.* *You don't have a Prada.* *I'll borrow yours.* A phone face-down on a carpet at one in the morning, buzzing, *(u wont)*, *(its low tide)*. A white rabbit, bowing. A girl bent to her ear in a quiet room, saying the worst and kindest thing anybody had ever said to her, and a door Solar had closed all the way. And under all of it, every bad night of her life, a voice she didn't have to look at the phone to know, *I'm up. I'm always up.*" },
      { s: 'solar', f: 'surprised', t: "...Jin." },
      { n: "Yunjin stopped singing." },
      { n: "She didn't turn around. She sat on the seawall with the can held out behind her and her shoulders gone very still, the way they'd gone still in the green light the first night, for five seconds, a personal record." },
      { ifFlag: 'yunjin-jin', then: [
        { s: 'yunjin', f: 'neutral', t: "...You said it like that the first day. On this wall. I told you not to do it yet. I said I'd be ready by Thursday." },
        { s: 'yunjin', f: 'sad', t: "It's been like fourteen Thursdays, Sol. I'm still not ready. Don't you dare stop." }
      ], else: [
        { s: 'yunjin', f: 'neutral', t: "...Babe. Do that one more time. Slower. I wasn't ready." }
      ] },
      { s: 'solar', f: 'happy', t: "Jin. You look like you hate everyone." },
      { n: "There was a sound from Yunjin like something tearing very quietly." },
      { s: 'solar', f: 'happy', t: "Me too." },
      { n: "Yunjin turned around. Her face was doing the thing it did when the sun hit it at the wrong angle, still and bright and about to break, and then it broke, and she was laughing, and crying, and up off the seawall, and the can went rolling away along the concrete, and she had both arms around Solar's neck before Solar could put the other can down." },
      { s: 'yunjin', f: 'sad', t: "You remembered the first thing. You remembered MY thing. That was mine. I was saving it, I was saving it in case you never..." },
      { choose: [
        { t: "(Hold on. Hands where they go.)", notes: 3, then: [
          { n: "Her hands went exactly where they went. One flat between Yunjin's shoulder blades, one on the back of her head. They'd always known. She'd always known. She just hadn't known she knew." }
        ] },
        { t: "Wifey.", notes: 3, then: [
          { s: 'yunjin', f: 'happy', t: "MY WOMAN. Oh my God. Oh my God, she's back, she's back, the gulls are witnesses..." },
          { n: "She shouted it at the gulls. The gulls left. Yunjin didn't care. She didn't let go for a very long time." }
        ] },
        { t: "Those were my shoes. In the mud.", notes: 3, then: [
          { s: 'yunjin', f: 'surprised', t: "..." },
          { s: 'yunjin', f: 'neutral', t: "...You weren't using them." },
          { s: 'yunjin', f: 'happy', t: "I said I'd borrow yours. I borrowed yours. Ages ago. You never asked for them back, so legally they're mine, and legally I can ruin them saving your life." }
        ] }
      ] },
      { cg: 'link-yunjin-r10' },
      { n: "They sat down on the seawall, close, the can that had rolled away fetched and dented and handed over, and laughed, at nothing, at the gulls coming back, until it ran out, and then for a while neither of them said anything at all, because they didn't need to, and Solar understood for the first time that this, the not needing to, was what Yunjin had been doing for her all along, every afternoon on this wall, talking and talking so that one day Solar could come back to a place where she didn't have to." },
      { cg: null },
      { s: 'yunjin', f: 'neutral', t: "Okay. Okay. Listen. Here's the thing." },
      { ifFlag: 'route-S', then: [
        { s: 'yunjin', f: 'happy', t: "When we go home, I'm driving. You're paying. We're stopping at the machine by the ferry terminal for two of the bad ones and we're drinking them in the car with the heater on until it turns, and then I'm climbing your wall, and then I'm sleeping on your floor, and I'm wearing the rabbits, and nobody can stop me." },
        { s: 'yunjin', f: 'neutral', t: "And if the delivery boy needs a ride he can fold himself into the back again. He knows where the fourth door isn't. The quiet one can call a car. He'd rather, anyway. He'd be polite about it the whole way." },
        { s: 'yunjin', f: 'serious', t: "Whatever's waiting. Whatever date's on the calendar. I'm not leaving your side. I said I'd fight them all. I'm still saying it. I'm saying it louder." },
        { choose: [
          { t: "I know. You're always up.", notes: 3, tally: { 'lean.S': 1 }, then: [
            { s: 'yunjin', f: 'sad', t: "...Yeah. I'm always up. Oh, babe. I'm always up." }
          ] },
          { t: "Let me fight one or two of them myself.", notes: 3, then: [
            { s: 'yunjin', f: 'surprised', t: "...Who are you? Who IS this? I love this. One. You can have one. I'm doing the rest." }
          ] }
        ] }
      ], else: [
        { ifFlag: 'route-true', then: [
          { s: 'yunjin', f: 'neutral', t: "I don't get what you're doing. Hanni tried to explain it with a napkin and a pen and she drew three circles and I said, babe, that's a Venn diagram, and she said, exactly, and I still don't get it." },
          { s: 'yunjin', f: 'happy', t: "But you're doing all of it. At once. Of course you are. You always did want everything and pretended you didn't want anything." },
          { s: 'yunjin', f: 'serious', t: "So I'll be on the step with coffee. And so will everybody else, on all their steps, with all their stupid drinks. Just come up the step, Sol. Whichever one. All of them." },
          { choose: [
            { t: "All of them.", notes: 3, tally: { 'lean.S': 1 }, then: [
              { s: 'yunjin', f: 'happy', t: "Greedy. I love it. Jihoon was right. Don't tell him he was right." }
            ] },
            { t: "Yours first.", notes: 3, then: [
              { s: 'yunjin', f: 'sad', t: "...Don't. I'll tell everyone. I'll make it a whole thing. I'll make it a hanging banner." }
            ] }
          ] }
        ], else: [
          { s: 'yunjin', f: 'serious', t: "You're not coming home. I know. I've known since the bells. You don't have to say it, I'm not making you say it." },
          { s: 'yunjin', f: 'neutral', t: "So I'll text you. I'll text a number that doesn't exist. I'll text it at every low tide for the rest of my life. Your appa's going to think I've lost my mind, sitting up in his kitchen at three in the morning with my phone." },
          { s: 'yunjin', f: 'happy', t: "*up.* That's all it'll say. *up.* And wherever you are, you'll know." },
          { choose: [
            { t: "I'll be up.", notes: 3, then: [
              { s: 'yunjin', f: 'sad', t: "Yeah. You always are. That's the one thing I'm not worried about. You'll be up." }
            ] },
            { t: "Go home, Jin. Be so happy it's annoying.", notes: 3, then: [
              { s: 'yunjin', f: 'serious', t: "...That's my line. That's my line, I was saving it for the platform. You stole it." },
              { s: 'yunjin', f: 'neutral', t: "Fine. Fine. You can have it. You can have anything of mine. You always could." }
            ] }
          ] }
        ] }
      ] },
      { n: "They drank the coffees on the seawall in the dark, cold, terrible, exactly right, and at six-forty the tide turned, and both of them felt it, Solar in her chest like a fist uncurling and Yunjin, she said later, in Solar's shoulder going loose against hers, and neither of them said anything, because neither of them needed to." }
    ] }
  ],

  afterMax: [
    { title: 'up', place: 'Iwatodai Dorm · Rooftop', time: 'Late Night', music: 'night', scene: [
      { phone: [
        { from: 'yunjin', t: "up" },
        { from: 'solar', t: "up" },
        { from: 'yunjin', t: "roof" }
      ], contact: 'yunjin 🦋' },
      { n: "Two blankets. A can of corn soup. The bay out there in the dark, going out, and the January cold coming up through the roof tiles so hard that Yunjin had put on both of Akihiko's sweatshirts again, and Solar's scarf, which had been Yunjin's scarf, and was now apparently both of theirs." },
      { s: 'yunjin', f: 'neutral', t: "Okay. Nothing important. Go. Is a hot dog a sandwich." },
      { choose: [
        { t: "Yes.", notes: 3, then: [
          { s: 'yunjin', f: 'serious', t: "WRONG. Wrong every time. Every single time, and you're wrong. I love you. You're wrong." }
        ] },
        { t: "No.", notes: 3, then: [
          { s: 'yunjin', f: 'surprised', t: "...Did you just agree with me? On the sandwich? After all this time?" },
          { s: 'yunjin', f: 'happy', t: "This is the best low tide of my life." }
        ] }
      ] },
      { ifFlag: 'yunjin-count', then: [
        { n: "Her thumb found the place on her right hand where the ring wasn't. Yunjin saw, and didn't say anything, and put her head on Solar's shoulder, and started counting, quietly, a half beat behind, before Solar had even begun." },
        { s: 'yunjin', f: 'neutral', t: "One. Two. You start, I'm already behind you. Three." }
      ], else: [
        { n: "Her thumb found the place on her right hand where the ring wasn't, and turned nothing, slow, a quarter turn and back, and this time she let Yunjin watch her do it, and Yunjin did, without a word, the whole time, until it turned." }
      ] }
    ] },
    { title: 'emergency socks', place: 'Paulownia Mall · Central Atrium', time: 'After School', music: 'joy', scene: [
      { n: "Two pairs of feet on the rim of the fountain. Two pairs of rabbit socks, gray at the ear-tips now, well worn, the security guard pretending very hard to be looking at something else." },
      { s: 'yunjin', f: 'neutral', t: "Is this an emergency?" },
      { choose: [
        { t: "No. I just wanted to wear them.", notes: 3, then: [
          { s: 'yunjin', f: 'happy', t: "...That's allowed. That's the best reason. No emergency. Just ears." }
        ] },
        { t: "A little one.", notes: 3, then: [
          { s: 'yunjin', f: 'neutral', t: "Okay. Tell me. Or don't. The socks are working either way. Look at their little ears." }
        ] }
      ] },
      { ifFlag: 'yunjin-socks', then: [
        { s: 'yunjin', f: 'neutral', t: "You know you're the one who put them on first, that day? In the mall? I asked if you wanted them and you had your shoes off before I'd finished the sentence." },
        { s: 'yunjin', f: 'happy', t: "Your pink ones at home are going to be so jealous. They're going to know. Socks can tell." }
      ], else: [
        { s: 'yunjin', f: 'neutral', t: "I bought you a pair that day, you know. They've been in my bag this whole time. I was waiting for you to ask." },
        { n: "She took them out of the bag, white, ears and all, still with the little plastic tag, and put them in Solar's lap, and Solar put them on right there on the fountain, and Yunjin bumped her foot against Solar's foot, once, twice, like a knock on a door." }
      ] }
    ] },
    { title: 'the good one', place: 'Iwatodai Station · Vending Machines', time: 'After School', music: 'city', scene: [
      { n: "Yunjin had a theory, and the theory was that somewhere in this city there was a vending machine that sold the exact can from home, the sweet milky one in the brown can, and that they simply hadn't found the right machine yet, and she'd been testing it scientifically for a month, which meant buying one of everything and making Solar taste it." },
      { n: "Today it was the bank of machines at the bottom of the station stairs. Six cans lined up on the ledge. Yunjin had a pen and the back of a receipt and had drawn a table with columns." },
      { s: 'yunjin', f: 'serious', t: "Okay. Number four. Sip it. Don't make the polite face. If you make the polite face I'll know." },
      { choose: [
        { t: "(Sip it. Make the polite face.)", notes: 2, then: [
          { s: 'yunjin', f: 'serious', t: "THERE. Polite face. Expensive stuff face. It's out. It's dead to me." },
          { n: "She crossed it off with a line so violent it went through the receipt." }
        ] },
        { t: "(Sip it. Close your eyes.)", notes: 3, then: [
          { n: "It was too sweet, and cheap, and a little burnt, and it was not the one from home, and it was so close that for a second she was sitting in a car with the heater ticking and the windows fogged and the radio on, and she opened her eyes and Yunjin was watching her with her pen in the air." },
          { s: 'yunjin', f: 'surprised', t: "...That's the face. That's the cheap coffee face. Number four. Oh my God. Number four." }
        ] }
      ] },
      { ifFlag: 'route-S', then: [
        { s: 'yunjin', f: 'happy', t: "Doesn't matter anyway. We're going home. The real machine's by the ferry terminal, and it's been waiting for us, and it's going to give us the good one first try." }
      ], else: [
        { s: 'yunjin', f: 'neutral', t: "Okay. Number four. Write it down. Wherever you end up, Sol, there's going to be a machine, and somewhere in it there's going to be a number four." },
        { s: 'yunjin', f: 'serious', t: "Promise me you'll find it. Promise me you'll drink the cheap one and make the face, and not the polite one. That's all. That's my whole list." }
      ] }
    ] },
    { title: 'stickers', place: "Iwatodai Dorm · Solar's Room", time: 'Night', music: 'dorm', scene: [
      { n: "It was eleven-forty and Solar was sitting on the end of her bed with her hair down and her phone in her hands, and Yunjin was exactly one wall away, and the phone buzzed anyway." },
      { phone: [
        { from: 'yunjin', t: "are u alive" },
        { from: 'yunjin', t: "if ur alive send a sticker" },
        { from: 'yunjin', t: "if ur dead send two stickers" },
        { from: 'yunjin', t: "if the bodyguard is in ur room send a fish" }
      ], contact: 'yunjin 🦋' },
      { choose: [
        { t: "(Send the white rabbit, bowing.)", notes: 3, then: [
          { phone: [
            { from: 'yunjin', t: "ok. ok good. love u. lock ur door" },
            { from: 'yunjin', t: "(i can hear u laughing through the wall)" }
          ], contact: 'yunjin 🦋' }
        ] },
        { t: "(Send a fish.)", notes: 3, then: [
          { phone: [
            { from: 'yunjin', t: "SOL" },
            { from: 'yunjin', t: "SOL WHICH ONE" },
            { from: 'yunjin', t: "im coming over" },
            { from: 'yunjin', t: "im literally in the hallway" }
          ], contact: 'yunjin 🦋' },
          { n: "There was a knock at the door about four seconds later. Yunjin, in rabbit socks and a sheet mask, with a hairbrush held up like a weapon, looked round the empty room, and at Solar on the bed laughing into her own knees, and lowered the hairbrush with great dignity." },
          { ifFlag: 'yunjin-fish', then: [
            { s: 'yunjin', f: 'serious', t: "That's twice. That's twice you've done that to me. I'm changing the code to a squid." }
          ], else: [
            { s: 'yunjin', f: 'serious', t: "You're a terrible, terrible person. Scoot over." }
          ] }
        ] },
        { t: "(Send the crying cat.)", notes: 2, then: [
          { n: "She didn't mean it. She only wanted to see. The door opened before the phone had finished buzzing in the next room. Yunjin was already in her coat, with her car key in her fist out of pure habit." },
          { s: 'yunjin', f: 'serious', t: "Where. Who. Tell me who." },
          { s: 'solar', f: 'sad', t: "...Nobody. I wanted to know if you'd come." },
          { s: 'yunjin', f: 'sad', t: "...Babe. I'd come. I'll always come. You don't have to test it. You never have to test it." },
          { n: "She took the coat off anyway, and got into the bed, and stayed." }
        ] }
      ] }
    ] }
  ]
});
