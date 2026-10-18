/* Yunjin · ? Revamp social link data (femc-game.html). Format: link fields in assets/femc/game/core.js, scene lines in scene.js.
   Searcher (strangers), friendship. Huh Yunjin, Solar's best friend: raised partly in New York, loud, sassy, fearless,
   dramatic, protective, the only person Solar tells things to, and the one who says the true thing out loud. Calls her
   "Sol" (only she and Solar's father do), "babe", the "wifey" bit. Her crossing (10/10, Port Island harbor at low tide,
   "Sol. It's me. It's Jin.") is a story event; rank 1 is the first afternoon after. Kat's ruling: she doesn't awaken a
   Persona. The 11/14 strangers floor (Solar can't swim; Yunjin goes in after her) and "that's you in a hat" are story
   beats, felt here only as aftermath. Nothing from Incheon moves strangers' plot: no families, no business, no names
   from the war; only the harbor, the tide tables, canned coffee, cold piers, the deep-water fear, the rabbit socks.
   Canon echo: "You're my favorite person in the whole world. And you're a terrible, terrible person."
   Fragment: strangers-rabbit-socks (rank 2, plot doc §8 S5). Texting voice: lowercase, chaos, (parentheticals).
   Arcana: '?' (open question, plot doc §16.6). afterMax uses v1's field shape. */
(window.FEMC_GAME_LINKS ||= []).push({
  id: 'yunjin', name: 'Huh Yunjin', short: 'Yunjin', arcana: '?', numeral: '', from: 'strangers',
  kind: 'searcher', world: 'S', romance: null,
  starts: '10/10', gate: { S: 3 },
  home: { area: 'port', spot: 'Harbor', slot: 'after', days: [0, 1, 3, 5],
          hint: 'Afternoons down at the Port Island harbor, on the seawall, with two cans of vending-machine coffee.' },
  approach: "Down at the harbor there's a girl sitting on the seawall with her legs swinging over the water and two cans of coffee beside her, singing something loudly and badly to the gulls, and she stops mid-word when she sees you and grins like you're late for something.",
  cast: {},
  invite: {
    ask: ["SOL. harbor. now. i bought u a coffee and its getting cold (its a can its always cold)", "babe r u free", "wifey. i miss u. ur literally 10 min away. come", "ok i need u to come look at a boat with me. its a normal boat. i love it", "r u alive. if ur alive come to the harbor. if ur dead also come", "hi. its jin. obviously. come outside"],
    ok: ["YAY. seawall. ill be the loud one", "ok!!! bring a coat. u wont", "ok my woman. hurry"],
    no: ["ok :( drink ur coffee somewhere else then", "fine. im telling the gulls about u", "ok. tmrw. (ur coming tmrw)"]
  },
  hangouts: [
    [
      { n: "Yunjin was teaching the gulls English. That was what she called it. She was sitting on the seawall with a bag of shrimp crackers, holding one up at arm's length and saying *please* very clearly and slowly, and refusing to hand it over until a gull made a sound she judged close enough." },
      { s: 'yunjin', f: 'happy', t: "He said it! Sol, he said it! That one's going to Harvard." },
      { choose: [
        { t: "That was a scream.", notes: 2, then: [
          { s: 'yunjin', f: 'serious', t: "That was a scream with manners. You can hear the manners. Listen." }
        ] },
        { t: "(Teach one *thank you*.)", notes: 3, then: [
          { n: "They spent an hour on it. The gulls learned nothing. Yunjin ran out of shrimp crackers and fed them the last of her own sandwich and called them ungrateful and gave them names." }
        ] }
      ] }
    ],
    [
      { n: "Yunjin had found a noraebang on the Strip with a room just big enough for two people and a tambourine, and she had paid for an hour, and she was standing on the bench seat in her socks singing a song from a decade before either of them was born, very loudly, into a microphone with a broken cord." },
      { s: 'yunjin', f: 'happy', t: "SING THE HIGH PART. YOU ALWAYS DO THE HIGH PART." },
      { choose: [
        { t: "(Do the high part.)", notes: 3, then: [
          { n: "She did the high part. She didn't know the song. Her voice knew the song. It went up where it was supposed to like it had a map, and Yunjin stopped singing and stood on the bench with the microphone at her side and her mouth open." },
          { s: 'yunjin', f: 'surprised', t: "...Okay. Okay, babe. Okay. You've still got it. I hate it here. You've still got it." }
        ] },
        { t: "(Play the tambourine. Badly.)", notes: 2, then: [
          { s: 'yunjin', f: 'happy', t: "PERFECT. That's exactly how you play it at home. You're so bad at it. I love it so much." }
        ] }
      ] }
    ],
    [
      { n: "It was low tide at four, and Yunjin knew because Solar knew, and they were both on the seawall watching the water go out of Port Island's little harbor, the mud coming up gray and shining, the moored boats settling down onto their keels one by one like old men sitting down." },
      { s: 'yunjin', f: 'neutral', t: "It's so small here. The tide. Where we're from it goes out so far you could walk to China. You'd hate that. You'd love it. You'd know exactly how long you had to walk back." },
      { choose: [
        { t: "Two hours and ten minutes. Before it turns.", notes: 3, then: [
          { s: 'yunjin', f: 'surprised', t: "..." },
          { s: 'yunjin', f: 'neutral', t: "...Yeah. You'd know that. You always know that. I've never once in my life known that and you've never once not." }
        ] },
        { t: "Have you walked out on it?", notes: 2, then: [
          { s: 'yunjin', f: 'serious', t: "Once. To my knees in mud. You wouldn't come. You stood on the seawall with your arms folded and timed me." }
        ] }
      ] }
    ]
  ],
  ranks: [
    { after: '10/11', title: "1: it's jin", place: 'Port Island · Harbor', time: 'After School', music: 'tender', scene: [
      { n: "She'd driven to the water looking for her. That was what she'd told Fuuka, in the lounge, at three in the morning, wrapped in Mitsuru's spare blanket with her hair still wet with salt, talking so fast that Fuuka had had to ask her to slow down twice. She'd got in the car and driven to the harbor at home because that was where Sol went when she couldn't sleep, and the tide had gone out under a moon that was the wrong color, green, and she'd walked out on the mud calling, and the mud had kept going, and going, and then it was concrete, and a different harbor, and a girl standing on the seawall in a school uniform in the green light, staring at her." },
      { n: "*Sol. It's me. It's Jin.*" },
      { n: "And she'd hugged her. Without waiting. Without asking. Without any of the careful looking the others had done. She'd just walked up out of the mud and put both arms around Solar and held on, hard, salt and cold and shaking, and Solar's hands, before Solar had decided anything at all, had gone exactly where they went, one flat between her shoulder blades and one on the back of her wet head, like they'd done it a thousand times on a thousand bad nights." },
      { n: "And then Solar had said, very gently, *I'm sorry, I don't—* and Yunjin had gone very quiet. For about five seconds. Which, everyone in the dorm had since been told by Yunjin herself, was a personal record." },
      { register: 'yunjin' },
      { n: "She was on the seawall now, the next afternoon, in a borrowed coat with the sleeves rolled up four times, swinging her legs over the water and singing at the gulls, and when Solar came down the steps she stopped mid-word and grinned like Solar was late." },
      { s: 'yunjin', f: 'happy', t: "SOL. Babe. Hi. Sit. I got you a coffee. It's from the machine. It's the sweet one. It's disgusting. You love it." },
      { n: "A can. Canned coffee from the vending machine by the ferry office, the cheap sugary kind, still cold. Solar's hand closed around it and her thumb went to the tab and her whole body relaxed by a degree, the way you relax when you sit down in your own chair after a long day out." },
      { choose: [
        { t: "(Open it and drink.)", notes: 3, then: [
          { n: "It was terrible. It was exactly right. Yunjin watched her drink it with her chin on her fist and her eyes bright." },
          { s: 'yunjin', f: 'happy', t: "Yeah. Yeah, that face. You've got a whole face for cheap coffee. You never make it for the expensive stuff. You make the polite face for the expensive stuff." }
        ] },
        { t: "How do you know I like this?", notes: 2, then: [
          { s: 'yunjin', f: 'serious', t: "Because your mother buys you coffee from a café where a man in an apron draws a leaf on it, and you thank him, and you drink it, and then you go down to the harbor and buy one of these with coins from your coat pocket and drink it on a crate." },
          { s: 'yunjin', f: 'neutral', t: "I've seen you do it like a hundred times. You think nobody knows. I know." }
        ] },
        { t: "Thank you, Yunjin.", notes: 2, then: [
          { s: 'yunjin', f: 'serious', t: "Okay, first of all. Jin. Nobody calls me Yunjin except my mom when I've done something." },
          { s: 'yunjin', f: 'neutral', t: "Second of all. Don't thank me. You never thank me. You just steal my stuff and I steal yours. That's the marriage." }
        ] }
      ] },
      { s: 'yunjin', f: 'neutral', t: "So. You don't remember me." },
      { s: 'yunjin', f: 'serious', t: "That's fine. That's totally fine. I remember you enough for both of us, and enough left over to make it really weird." },
      { s: 'yunjin', f: 'happy', t: "Here's what you need to know. I'm Jin. I'm your best friend. I'm your wife, as a bit, since we were fourteen, you started it, don't let anyone tell you different. I'm loud. You're quiet. I say the thing. You count the things. We've been doing this for years and it works." },
      { choose: [
        { t: "My wife?", notes: 3, then: [
          { s: 'yunjin', f: 'happy', t: "Wifey. My woman. It's a bit. You started it at a karaoke place after a boy dumped me by text. You stood on the table and said nobody would ever dump your wife by text again." },
          { s: 'yunjin', f: 'serious', t: "You fell off the table. It was very romantic." }
        ] },
        { t: "What do I count?", notes: 3, then: [
          { s: 'yunjin', f: 'neutral', t: "Everything. Exits. Cups on a table. Boats. Steps. You're doing it right now. You've been doing it since you sat down." },
          { n: "Solar had been. Eleven boats. Three cranes. Two gulls on the bollard. She hadn't known she'd been doing it until Yunjin said it, and then it was the loudest thing in her head." }
        ] },
        { t: "(Lean your shoulder on hers.)", notes: 3, then: [
          { n: "She leaned. Yunjin went very still, for one second, and then leaned back, hard, and didn't say anything at all, which Solar was already beginning to understand was the rarest thing Yunjin could give anyone." }
        ] }
      ] },
      { n: "They sat on the seawall until the light went, and Yunjin talked, about everything and nothing, about the noraebang near her apartment and a TV drama she was furious about and a pair of boots she'd seen and couldn't afford, and every so often she stopped mid-sentence and looked at Solar, quick, like she was checking she was still there." },
      { n: "She never once asked her to remember anything. She just kept talking, the way you'd keep talking to someone in a hospital bed, as if the sound itself was a rope." }
    ] },

    { after: '10/17', title: '2: rabbit socks', place: 'Paulownia Mall · Central Atrium', time: 'After School', music: 'joy', scene: [
      { n: "Yunjin had gone shopping. With money Mitsuru had given her in an envelope and not commented on, which Yunjin had said was the classiest thing anyone had ever done for her, and she'd come back to the dorm with a bag, and now she was sitting on the rim of the fountain in the atrium with her boots off and her feet up on the edge, wiggling them." },
      { n: "Her socks were white. They had little rabbit faces on the toes, pink noses, black dot eyes, and on top of each foot, sticking straight up, two floppy fabric ears that bounced when she moved." },
      { s: 'yunjin', f: 'happy', t: "LOOK. Look at them. Look at their little ears." },
      { n: "And Solar laughed." },
      { n: "It came out of her before she knew it was coming, a real laugh, the one that came out of her like something knocked off a shelf, loud enough that a woman with a stroller turned around, and she put a hand over her mouth and couldn't stop, and didn't know why, and it was the stupidest thing she'd ever seen, a pair of socks, and she was laughing so hard her eyes were wet." },
      { n: "A floor. A heated floor in a big quiet house, and two pairs of feet on it, side by side, under a blanket, both in these exact socks, the ears flopping, and a girl's voice beside her saying *they're for emergencies, babe, you put them on when everything's bad and then everything's a little bit less bad because look at their little ears,* and the sea outside the window going out and out." },
      { fragment: 'strangers-rabbit-socks' },
      { n: "The jade ring on Haenim's sash clicked, small and green, a stone in a bowl." },
      { s: 'yunjin', f: 'surprised', t: "...Sol?" },
      { s: 'solar', f: 'neutral', t: "They're for emergencies." },
      { s: 'yunjin', f: 'sad', t: "..." },
      { n: "Yunjin's face did something. It didn't crumple. It went very still and very bright, like a window when the sun hits it at the wrong angle, and she put her feet down off the fountain's edge, rabbits and all, and looked at the floor." },
      { s: 'yunjin', f: 'neutral', t: "...Yeah. They're for emergencies. You put them on when everything's bad." },
      { s: 'yunjin', f: 'neutral', t: "I bought them because I needed one. An emergency pair. Because everything's bad. You're right here and you don't know me and everything is bad, babe." },
      { choose: [
        { t: "Did you buy me a pair?", notes: 3, then: [
          { s: 'yunjin', f: 'surprised', t: "..." },
          { s: 'yunjin', f: 'happy', t: "...Of course I bought you a pair. What am I, a monster? They're in the bag. They're in the bag. Put them on. Right now. In the mall." },
          { n: "She put them on. In the mall. On the rim of the fountain, with her school shoes in her lap. Two pairs of feet side by side, the ears flopping, and Yunjin bumped her foot against Solar's foot, once, twice, like a knock on a door, and Solar knocked back." }
        ] },
        { t: "Everything's a little less bad now.", notes: 3, then: [
          { s: 'yunjin', f: 'sad', t: "Yeah." },
          { s: 'yunjin', f: 'happy', t: "...Yeah, it is. A little. Look at their little ears." }
        ] }
      ] },
      { n: "They walked back to the monorail in the socks. Yunjin insisted. Their shoes in their hands, the rabbit ears getting gray at the tips from the station floor, people staring, Yunjin staring back at every single one of them until they looked away." }
    ] },

    { after: '10/24', title: '3: three languages', place: 'Iwatodai Strip · Hagakure', time: 'Evening', scene: [
      { n: "Junpei had taken Yunjin to Hagakure because Junpei took everyone to Hagakure, as a sort of test, and Yunjin had passed it by ordering the biggest bowl on the menu with extra everything and eating all of it without stopping to breathe, and Junpei was now looking at her with the dazed devotion of a man who has seen something holy." },
      { s: 'junpei', f: 'happy', t: "She ate the WHOLE thing. Nobody eats the whole thing. Senpai can't eat the whole thing." },
      { s: 'yunjin', f: 'happy', t: "I grew up in Queens, Junpei. I've eaten things that would kill you." },
      { s: 'junpei', f: 'surprised', t: "...Where's Queens?" },
      { s: 'yunjin', f: 'neutral', t: "New York. I was there till I was fifteen. Then my dad brought us home and I had to learn to be quiet in Korean. I never did. Ask Sol. I'm not quiet in any language." },
      { n: "She'd taught Junpei three American phrases over the course of the meal. He was using all of them wrong, constantly, with enormous confidence, and she was letting him, because it was, she said, the funniest thing that had happened to her in a month." },
      { s: 'junpei', f: 'happy', t: "This ramen is no cap bussin', fr fr." },
      { s: 'yunjin', f: 'happy', t: "PERFECT. Never stop. Say it to Mitsuru." },
      { n: "Two tourists at the end of the counter were arguing quietly over a guidebook, in Mandarin, a fast low back-and-forth about the train back to Port Island and whether it was this street or the next. Solar listened without meaning to. It was this street. The train left from the far platform. They had eleven minutes." },
      { n: "She didn't speak Mandarin. She'd never studied a word of it. She knew exactly what they were saying." },
      { choose: [
        { t: "(Turn and tell them, in Mandarin, which platform.)", notes: 3, then: [
          { n: "She turned on her stool and told them. Quietly, quickly, three sentences, in a voice that didn't sound like any voice she'd ever used. Both tourists stared at her. Then thanked her, profusely, and ran." },
          { s: 'yunjin', f: 'surprised', t: "..." },
          { s: 'yunjin', f: 'serious', t: "You never do that. Not where anybody can see. You never let anybody know you understand a word." },
          { s: 'yunjin', f: 'neutral', t: "...You just did it in front of a guy who thinks Queens is a cheese." }
        ] },
        { t: "(Say nothing. Let them work it out.)", notes: 2, then: [
          { n: "She said nothing. Yunjin, beside her, watched her not say anything, and leaned over, and whispered, so only Solar could hear it, *you understood them, didn't you,* and Solar didn't answer, and Yunjin didn't need her to." },
          { s: 'yunjin', f: 'neutral', t: "Same as always. You hear everything and you let people think you're furniture." }
        ] }
      ] },
      { s: 'yunjin', f: 'neutral', t: "You speak three. Did you know that? Korean, English, and that. Nobody knows about the third one. Not even your mom. You learned it in a kitchen from old ladies with knives when you were little. I know because you told me. You're not allowed to tell anyone else." },
      { choose: [
        { t: "Why didn't I tell anyone?", notes: 3, then: [
          { s: 'yunjin', f: 'neutral', t: "Because people say things in front of you when they think you don't understand. And you like knowing." },
          { s: 'yunjin', f: 'happy', t: "You're a little bit of a spy, babe. A very polite spy. In very good shoes." }
        ] },
        { t: "What else did I tell you?", notes: 3, then: [
          { s: 'yunjin', f: 'neutral', t: "Everything." },
          { s: 'yunjin', f: 'serious', t: "You tell me everything, Sol. I'm the only person you tell anything to. That's why it's so weird that I'm the one who has to tell you." }
        ] }
      ] },
      { n: "Junpei, who had heard none of this, held up his empty bowl and announced to the counter that he was *literally deceased,* and Yunjin threw her head back and laughed so loud the chef dropped a ladle." }
    ] },

    { after: '11/1', title: '4: the edge', place: 'Port Island · Pier', time: 'After School', music: 'night', scene: [
      { n: "The pier was long and gray and wet and the wind was coming off the bay in hard slaps that made the flags on the ferry office crack like whips, and Yunjin was walking right along the edge of it, on the yellow line painted to warn people not to, with her arms out like a girl on a balance beam." },
      { n: "Solar was walking down the middle. Exactly the middle. She hadn't decided to. Every time the pier narrowed around a bollard her feet moved her further in, away from the edge, toward the benches, away from the black water slopping against the pilings below, and she didn't notice she was doing it until Yunjin stopped, and turned around, and looked at her." },
      { s: 'yunjin', f: 'neutral', t: "...Yeah. Still. Even here." },
      { s: 'solar', f: 'neutral', t: "What?" },
      { s: 'yunjin', f: 'serious', t: "You never stand at the edge. Never. Not of a pier, not of a boat, not of a pool. Since we were kids. You'll go right up to it and stop a whole step back, every single time, like there's a wall." },
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
        { t: "(Walk to the edge anyway. One step.)", notes: 2, then: [
          { n: "She took one step toward it. Her whole body screamed. Yunjin's hand shot out and caught her wrist, not hard, just fast, and held." },
          { s: 'yunjin', f: 'serious', t: "No. You don't have to prove anything to the water. Water doesn't care." }
        ] }
      ] },
      { n: "Yunjin came in off the edge and walked down the middle of the pier beside her, close, her shoulder against Solar's shoulder, between Solar and the water, without saying anything about it." },
      { s: 'yunjin', f: 'serious', t: "Listen to me. I'm going to say this once and then I'm going to be normal." },
      { s: 'yunjin', f: 'serious', t: "If you ever end up in the water. Here, there, anywhere. I'm coming in after you. I don't care how deep. I don't care how cold. I don't care if I can't see." },
      { s: 'yunjin', f: 'neutral', t: "So don't be scared of drowning. Be scared of me, coming in after you, yelling. That's way worse. That's way more embarrassing." },
      { choose: [
        { t: "You'd really come in?", notes: 3, then: [
          { s: 'yunjin', f: 'happy', t: "In a heartbeat, babe. In my good boots. I'd ruin my good boots for you." }
        ] },
        { t: "Don't. I don't want you to drown too.", notes: 3, then: [
          { s: 'yunjin', f: 'neutral', t: "I won't. I'm a great swimmer. I swam at the Y in Queens for six years. I have a certificate." },
          { s: 'yunjin', f: 'serious', t: "...I'm coming in anyway. That wasn't a negotiation." }
        ] }
      ] }
    ] },

    { after: '11/9', title: '5: till it turns', place: 'Iwatodai Dorm · Rooftop', time: 'Late Night', music: 'night', scene: [
      { n: "Low tide was at three-forty. Solar knew that the way she knew her own name, which was to say better, lately, and she was lying awake at three in the morning with the knowledge sitting on her chest like a cat, when her phone lit up on the desk." },
      { phone: [
        { from: 'yunjin', t: "r u up" },
        { from: 'yunjin', t: "its low tide" },
        { from: 'yunjin', t: "(i know ur up)" },
        { from: 'yunjin', t: "(its low tide)" },
        { from: 'yunjin', t: "roof. bring a blanket. i stole one already but bring another one bc im not sharing" }
      ], contact: 'jin 🦋' },
      { n: "She was on the roof with her back against the water tank and two blankets, which she was sharing anyway, and a can of hot corn soup from the vending machine, which she said was a drink, and she held up the edge of the blankets without a word and Solar got under them." },
      { s: 'yunjin', f: 'neutral', t: "You can't sleep at low tide. You never could. So I never could either. We just text until it turns." },
      { s: 'yunjin', f: 'neutral', t: "Four years. Every low tide at night. You'd text *up* and I'd text *up* and then we'd talk about nothing until it came back in. I looked up the tables so I'd know when to be awake. Don't tell anyone I look up the tables." },
      { choose: [
        { t: "When does it turn tonight?", notes: 3, then: [
          { s: 'yunjin', f: 'surprised', t: "You tell ME. You always tell me." },
          { s: 'solar', f: 'neutral', t: "...Four-ten. It starts coming back at four-ten." },
          { s: 'yunjin', f: 'happy', t: "There it is. My little tide chart. My little weather girl." }
        ] },
        { t: "What do we talk about? Until it turns?", notes: 3, then: [
          { s: 'yunjin', f: 'happy', t: "Nothing. That's the rule. Nothing important. Dramas. Boys who don't deserve us. What we'd eat if we could eat anything. Whether a hot dog's a sandwich." },
          { s: 'yunjin', f: 'serious', t: "It's not a sandwich. You're wrong about it every time." }
        ] }
      ] },
      { n: "So they talked about nothing. Under the blankets on the roof with the city dark around them, the bay invisible beyond the buildings but there, Solar could feel it there, going out, going out, the way you feel someone leaving a room behind your back. Yunjin talked about a drama where a man was in love with his dead wife's twin and was furious about the twin's haircut. Solar told her about Koromaru taking himself for walks, and Yunjin made her tell it twice." },
      { s: 'yunjin', f: 'neutral', t: "Do you know what you do? At low tide? When you think I'm not looking?" },
      { s: 'yunjin', f: 'neutral', t: "You turn your ring. On your right hand. A quarter turn and back. You count the turns. You did it at my dad's place once for two hours while I slept on your shoulder, and when I woke up you'd counted to four hundred and something." },
      { n: "Solar looked down at her right hand on the blanket. Her thumb was at the base of her ring finger, turning nothing, slow, a quarter turn and back. She hadn't known. She didn't stop." },
      { choose: [
        { t: "Where's the ring?", notes: 3, then: [
          { s: 'yunjin', f: 'sad', t: "At home, I guess. On your hand. On your other hand. I don't know how this works, babe. I'm just a girl from Queens." },
          { s: 'yunjin', f: 'neutral', t: "It's your grandmother's. Jade. Green. You never take it off. You'd never take it off." }
        ] },
        { t: "(Keep turning it. Count out loud.)", notes: 3, then: [
          { n: "She counted out loud, softly, one, two, three, and Yunjin put her head on her shoulder and counted with her, quieter, a half beat behind, the way you'd hum along to a song you knew better than the person singing it." }
        ] }
      ] },
      { n: "At four-ten Solar felt it turn. She couldn't have said how. Something in her chest let go, like a fist uncurling, and her eyes went heavy all at once. Yunjin felt her go heavy and didn't move, and when Solar woke up at six with the city going blue around them, Yunjin was asleep sitting up with the can of corn soup still in her hand, her head on Solar's head, and the blankets tucked very carefully around Solar's side and not at all around her own." }
    ] },

    { after: '11/17', title: '6: a terrible person', place: 'Iwatodai Dorm · Lounge', time: 'Night', music: 'tender', scene: [
      { n: "In the days after the water, Yunjin still hadn't been warm. That was what she said, every time anyone asked. *I'm just not warm yet.* She'd been sitting in the lounge in two of Akihiko's sweatshirts and a pair of Mitsuru's wool socks over the rabbit socks, with a mug of something hot in both hands, for most of those days, and she hadn't talked as much as usual, which in anyone else would have been normal, and in Yunjin was a medical emergency." },
      { n: "Solar hadn't talked about it either. The floor in the tower that had been all sea. The black water coming up over the tiles like a tide that didn't stop, and her own body going rigid at the edge, and her feet going out from under her, and the cold. And then a voice yelling, furious, enormous, and a splash, and hands." },
      { n: "She sat down on the sofa beside Yunjin. Yunjin lifted the edge of her blanket without looking, and Solar got under it." },
      { choose: [
        { t: "You came in after me.", notes: 3, then: [
          { s: 'yunjin', f: 'neutral', t: "I said I would." },
          { s: 'yunjin', f: 'serious', t: "I said it on a pier. I said it in Queens when we were fourteen and you fell in the hotel pool. I said it about a hundred times. You never believe me. You never believe anyone will actually come." }
        ] },
        { t: "(Put your cold hands on her warm mug, over her hands.)", notes: 3, then: [
          { n: "She put her hands around Yunjin's hands around the mug. Yunjin looked at them, all four hands knotted together around a cup of barley tea, and let out a breath that went on for a long time, and some of the stiffness went out of her shoulders for the first time since the tower." }
        ] }
      ] },
      { s: 'yunjin', f: 'sad', t: "You didn't fight. In there. You didn't kick. You just went still. You went so still, Sol." },
      { s: 'yunjin', f: 'serious', t: "Like you'd decided. Like the water had asked you something and you'd said *okay.* I saw your face. I saw you decide it." },
      { n: "Solar didn't say anything. There was nothing to say. She remembered the cold, and the quiet under it, and how easy it had been, how restful, a whole black hush where nobody needed anything, and how for one second it had felt like the kindest thing that had happened to her all year." },
      { s: 'yunjin', f: 'sad', t: "You're my favorite person in the whole world." },
      { s: 'yunjin', f: 'serious', t: "And you're a terrible, terrible person." },
      { n: "She said it in a voice Solar had never heard out of her, low, cracked down the middle, and it went into Solar like a key into a lock she hadn't known was in her. She knew it. She'd heard it before. In another room, with the door shut, with this same girl's face doing this same thing, furious and wrecked and loving her anyway." },
      { choose: [
        { t: "I know. I'm sorry.", notes: 3, then: [
          { s: 'yunjin', f: 'sad', t: "Don't be sorry. Be not still. Next time. Kick. Scream. Bite me if you have to. I'll come in yelling. You just have to not decide." },
          { s: 'yunjin', f: 'neutral', t: "Promise me you won't decide." }
        ] },
        { t: "You said that to me before.", notes: 3, then: [
          { s: 'yunjin', f: 'surprised', t: "..." },
          { s: 'yunjin', f: 'sad', t: "...Yeah. I did. You did something stupid and I said it and you closed the door all the way. You never close the door all the way." },
          { s: 'yunjin', f: 'neutral', t: "That's how I knew you'd heard me." }
        ] }
      ] },
      { n: "They sat under the blanket until the Dark Hour came and went over them and Yunjin finally, finally, at a little past one, said she was warm. Then she fell asleep with her head on Solar's lap, and Solar sat there not moving until the morning, and counted, and didn't once, the whole night, think about the water." }
    ] },

    { after: '11/26', title: '7: the true thing', place: 'Port Island · Harbor', time: 'After School', scene: [
      { n: "The harbor in late November had gone the color of old pewter, the water, the sky, the hulls of the moored boats, everything one gray shading into another, and the vending machine by the ferry office had started selling hot drinks, and Yunjin had bought two hot canned coffees and was holding both of them against her cheeks." },
      { s: 'yunjin', f: 'neutral', t: "Hanni told me something. About you. From your other one. The campus one." },
      { s: 'yunjin', f: 'neutral', t: "She said you laugh more here than there. And I said, yeah. I said that about our one too. You laugh more here than you do at home." },
      { s: 'yunjin', f: 'serious', t: "We sat in the lounge and figured it out. Me and Hanni and the little loud one. Hyein. We figured out the true thing." },
      { s: 'solar', f: 'neutral', t: "What true thing?" },
      { s: 'yunjin', f: 'serious', t: "You're happier when nobody needs anything from you." },
      { n: "The gulls went on screaming. A ferry horn sounded out on the bay, low and long. Yunjin held out the second coffee and didn't look at her while she said it, which was how Solar knew she'd rehearsed it, and how much it had cost." },
      { s: 'yunjin', f: 'neutral', t: "At home everyone needs something. Your dad needs you safe. Your mom needs you perfect. The whole city needs you to be the daughter. And you do it. You're so good at it. You smile and you pin your hair up and you're perfect." },
      { s: 'yunjin', f: 'sad', t: "Here nobody needs you to be anything. They just need you to show up at midnight and hit things. And you're happy. And I hate it. And it's the truest thing I know about you." },
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
      { n: "They drank the coffees on the seawall until the cans went cold. On the walk back Yunjin took her hand and swung it, like they were kids, and when Solar asked why, she said because nobody needed her to, and that was the point." }
    ] },

    { after: '12/9', title: '8: send a fish', place: 'Iwatodai Dorm · Lounge', time: 'Evening', music: 'joy', scene: [
      { n: "There were two of them now. In one dorm. That was how Yunjin put it, at dinner, loudly, to nobody, with her chopsticks pointed at the ceiling like she was addressing a higher power." },
      { s: 'yunjin', f: 'serious', t: "Two. Of them. In one building. God help us all." },
      { n: "One of them was sitting at the far end of the dining table in a black hoodie, eating very fast with his head down and his headphones around his neck, not looking at anyone. The other was at the near end with his sleeves at exactly the elbow, eating very slowly, very correctly, cutting his tamagoyaki into identical pieces, not looking at anyone either, so hard that you could feel it from across the room." },
      { n: "They were not looking at each other. It was the loudest thing in the house." },
      { s: 'yunjin', f: 'neutral', t: "Babe. Come here. Phone. I'm teaching you the codes. Again. Since you forgot. Since you're going to need them." },
      { n: "She pulled Solar onto the lounge sofa and held up her phone, the screen lit with a sticker keyboard, a hundred little cartoon animals." },
      { s: 'yunjin', f: 'serious', t: "If you're alive, send a sticker. If you're dead, send two stickers. If you're in trouble and you need me to come get you, send the crying cat." },
      { s: 'yunjin', f: 'serious', t: "And if the bodyguard is in your room. Send a fish." },
      { s: 'solar', f: 'surprised', t: "What bodyguard?" },
      { s: 'yunjin', f: 'happy', t: "Oh, babe. Oh, sweet innocent amnesiac babe." },
      { choose: [
        { t: "Why a fish?", notes: 3, then: [
          { s: 'yunjin', f: 'happy', t: "Because it's the least suspicious sticker. Nobody looks twice at a fish. Your mom could be reading over your shoulder and she'd see a fish and think, my daughter loves seafood." },
          { s: 'yunjin', f: 'neutral', t: "We came up with it in about five seconds and it has never once failed." }
        ] },
        { t: "(Send her a fish. Right now.)", notes: 3, then: [
          { n: "She sent a fish. Across the room, Yunjin's phone buzzed in her own hand, the little cartoon fish appearing in the chat, and she looked at it, and looked at Solar, and then looked very slowly toward the dining room, where both boys had gone completely still, as if they'd felt it." },
          { s: 'yunjin', f: 'surprised', t: "SOL." },
          { s: 'yunjin', f: 'happy', t: "...Which one? No. Don't tell me. Tell me. Don't tell me." }
        ] },
        { t: "What do I send for the other one?", notes: 3, then: [
          { s: 'yunjin', f: 'surprised', t: "..." },
          { s: 'yunjin', f: 'neutral', t: "...Huh. We never made one for him." },
          { s: 'yunjin', f: 'happy', t: "Okay. Okay, new code. A cup of tea. He's a cup of tea. Polite and too hot and you can't tell what's in it." }
        ] }
      ] },
      { n: "From the dining room there was the scrape of a chair. One of them had gotten up. Then, a careful half second later, so as not to look like it was because of the first, the other one did too, and they passed each other in the doorway with about ten centimeters to spare, both of them looking straight ahead, one going up the stairs and one going out the front door." },
      { s: 'yunjin', f: 'neutral', t: "...You know what? I'm going to need more stickers." }
    ] },

    { after: '1/6', title: '9: elder', place: 'Naganaki Shrine', time: 'Afternoon', scene: [
      { n: "Yunjin had eaten rice cake soup on New Year's Day, three bowls, at the dorm, made by Mitsuru's chef, who had been sent over in a car and had looked at the dorm kitchen with the face of a man asked to perform surgery in a garage. And she'd announced, standing on a chair, that she was now a year older, and that this made her Solar's elder, technically, because Solar had only had one bowl." },
      { s: 'yunjin', f: 'happy', t: "So you have to respect me now. That's the rule. That's the law. You have to carry my bag and bow when I walk in." },
      { n: "It was five days later and she was still enforcing it. They were at Naganaki, on the steps, in the thin January sun, with a bag of hot sweet potatoes from the cart at the bottom, and Yunjin had made Solar carry the bag up all hundred and twelve steps, as her elder, and had walked behind her the whole way telling her she was doing great." },
      { s: 'yunjin', f: 'neutral', t: "Did you draw a fortune? On the first?" },
      { s: 'solar', f: 'neutral', t: "It was blank." },
      { s: 'yunjin', f: 'surprised', t: "BLANK? They give you blank ones here? That's so spooky. That's so spooky and so you." },
      { choose: [
        { t: "Kiriko says it means not written yet.", notes: 3, then: [
          { s: 'yunjin', f: 'neutral', t: "The fox girl? The one who glares at me at breakfast because I took her seat once?" },
          { s: 'yunjin', f: 'happy', t: "...She's right, though. I like that. Not written yet. You can do anything with that." }
        ] },
        { t: "What did yours say?", notes: 3, then: [
          { s: 'yunjin', f: 'happy', t: "Great blessing! Obviously. The universe loves me. I tied it to the tree anyway so it'd stay." }
        ] }
      ] },
      { n: "She took off her scarf. It was long and soft and bright, bright yellow, a yellow so loud it was almost a noise, and she wound it around Solar's neck twice, over Hyein's coat, and tucked the ends in, and stood back to look." },
      { s: 'yunjin', f: 'neutral', t: "Wear a coat. You never wear a coat. You've got one now, finally, the tall loud one made you one. So wear a scarf too." },
      { s: 'yunjin', f: 'serious', t: "That's my elder advice. That's all of it. Wear a coat. Don't decide things in the water. And let people come in after you." },
      { choose: [
        { t: "Yes, elder.", notes: 3, then: [
          { s: 'yunjin', f: 'happy', t: "GOOD. Oh, that felt amazing. Say it again." },
          { s: 'solar', f: 'neutral', t: "Yes, elder. Wife. Jin." },
          { s: 'yunjin', f: 'sad', t: "...Okay, that one got me. Don't do that one. That's cheating." }
        ] },
        { t: "You'll be cold.", notes: 3, then: [
          { s: 'yunjin', f: 'neutral', t: "I'm never cold. I'm from Queens." },
          { s: 'yunjin', f: 'happy', t: "...I'm freezing. Give me a sweet potato. Elder's orders." }
        ] }
      ] }
    ] },

    { after: '1/21', title: '10: spare sol', place: 'Port Island · Harbor', time: 'Evening', music: 'tender', scene: [
      { n: "It was low tide at six in the evening, and the harbor had emptied itself out into the dark, the mud coming up gray and shining under the sodium lights along the seawall, the boats settled on their keels, everything smelling of salt and diesel and the iron underneath, and Yunjin was sitting on the seawall exactly where she'd been the first afternoon, with two cans of coffee beside her, singing to the gulls." },
      { n: "She didn't stop singing when Solar came down the steps. She held up one can, without looking, the way you'd hold out a hand to someone you knew would take it." },
      { n: "And Solar knew her." },
      { n: "Not in pieces. Not the socks and the codes and the scarf, one at a time. All of it, the way the tide comes back in over a mudflat, not in a line but everywhere at once, from underneath. A loud girl at a new school at fifteen in a highlighter jacket who'd sat next to her on the first day and said *hi, I'm Jin, you look like you need a friend who's bad at being quiet.* A karaoke room and a table and falling off it. Four years of low tides at three in the morning, *up,* *up.* A girl at an apartment door in the middle of the night, and a door Solar had closed all the way. A voice in her ear on every bad night of her life saying *babe, babe, I'm here, I'm coming, I'm already in the car.*" },
      { s: 'solar', f: 'neutral', t: "...Jin." },
      { n: "Yunjin stopped singing." },
      { n: "She didn't turn around. She sat on the seawall with the can held out behind her and her shoulders gone very still, the way they'd gone still in the green light the first night, for five seconds, a personal record." },
      { s: 'yunjin', f: 'neutral', t: "...Say it like that again." },
      { s: 'solar', f: 'neutral', t: "Jin. You're my favorite person in the whole world. And you sing so badly the gulls are filing a complaint." },
      { n: "Yunjin turned around. Her face was doing the thing it did when the sun hit it at the wrong angle, still and bright and about to break, and then it broke, and she was laughing, and crying, and up off the seawall, and the can went rolling away along the concrete, and she had both arms around Solar's neck before Solar could put the other can down." },
      { choose: [
        { t: "(Hold on. Hands where they go.)", notes: 3, then: [
          { n: "Her hands went exactly where they went. One flat between Yunjin's shoulder blades, one on the back of her head. They'd always known. She'd always known. She just hadn't known she knew." }
        ] },
        { t: "Wifey.", notes: 3, then: [
          { s: 'yunjin', f: 'happy', t: "MY WOMAN. Oh my God. Oh my God, she's back, she's back, the gulls are witnesses—" },
          { n: "She shouted it at the gulls. The gulls left. Yunjin didn't care. She didn't let go for a very long time." }
        ] }
      ] },
      { s: 'yunjin', f: 'neutral', t: "Okay. Okay. Listen. Here's the thing." },
      { s: 'yunjin', f: 'serious', t: "Whatever you do. Whatever door. If you go home, I'm on the step with coffee. If you don't, I'll find a way to text you. I'll text a number that doesn't exist. I'll text it at every low tide for the rest of my life." },
      { s: 'yunjin', f: 'happy', t: "*up.* That's all it'll say. *up.* And you'll know." },
      { n: "She picked up the can that had rolled away and handed it to Solar, dented, and they sat on the seawall in the dark and drank them, cold, terrible, exactly right, and at six-forty the tide turned, and both of them felt it, and neither of them said anything, because neither of them needed to." }
    ] }
  ],

  afterMax: [
    { title: 'up', place: 'Iwatodai Dorm · Rooftop', time: 'Late Night', scene: [
      { phone: [
        { from: 'yunjin', t: "up" },
        { from: 'solar', t: "up" },
        { from: 'yunjin', t: "roof" }
      ], contact: 'jin 🦋' },
      { n: "Two blankets. A can of corn soup. The bay out there in the dark, going out." },
      { s: 'yunjin', f: 'neutral', t: "Okay. Nothing important. Go. Is a hot dog a sandwich." },
      { choose: [
        { t: "Yes.", notes: 3, then: [
          { s: 'yunjin', f: 'serious', t: "WRONG. Wrong every time. Four years and you're wrong every time. I love you. You're wrong." }
        ] },
        { t: "No.", notes: 3, then: [
          { s: 'yunjin', f: 'surprised', t: "...Did you just agree with me? On the sandwich? After four years?" },
          { s: 'yunjin', f: 'happy', t: "This is the best low tide of my life." }
        ] }
      ] }
    ] },
    { title: 'emergency socks', place: 'Paulownia Mall · Central Atrium', time: 'After School', scene: [
      { n: "Two pairs of feet on the rim of the fountain. Two pairs of rabbit socks, gray at the ear-tips now, well worn." },
      { s: 'yunjin', f: 'neutral', t: "Is this an emergency?" },
      { choose: [
        { t: "No. I just wanted to wear them.", notes: 3, then: [
          { s: 'yunjin', f: 'happy', t: "...That's allowed. That's the best reason. No emergency. Just ears." }
        ] },
        { t: "A little one.", notes: 3, then: [
          { s: 'yunjin', f: 'neutral', t: "Okay. Tell me. Or don't. The socks are working either way. Look at their little ears." }
        ] }
      ] }
    ] }
  ]
});
