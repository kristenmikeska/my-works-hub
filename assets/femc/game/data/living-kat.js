/* Kat & Ethan, living world (2026-10-25). Everything here joins the hidden link in links/kat.js; formats are the other
   living files'.
   - How they're found (FEMC_GAME_RUNINS; core.js runInDue / finishRunIn, the link's secret.via 'runin'): eight run-ins,
     who 'kat' with label 'Two huskies' (no name before she has one), met [] and noFlags ['found-kat'], each `finds: 'kat'`.
     Two huskies drag a couple past after an activity, a shift or a club in town. Each one asks: stop, or keep walking.
     Stopping sets kat-stop-<key> (the link's secret.count); walking past sets kat-pass-<key>. The third stop's scene ends
     with numbers swapped (FOUND) and the run-in finds the link. Run-ins are once each and at most every other day, so the
     three stops are always three different days. Walk past six and the link never opens.
       river        Iwatodai Strip / Station, 5/6–6/20      the riverside path, Wanda and a sandal
       shrine       Naganaki Shrine, 5/20–8/5               the shrine's white dog has opinions (Koromaru lives there then)
       vending      the station vending machines, 6/15–8/20 Ethan can't choose a drink
       pier         Port Island, 7/10–9/20                  Wanda and the sea; the first try at the photo
       mall         Paulownia Mall, 8/20–10/31              Cosmo won't walk on the shiny floor
       portisland   Port Island Station, 9/20–12/10         Kat on a work call in her work voice
       strip        Iwatodai Strip, evening, 10/25–1/20     the Hagakure line, dogs tied outside
       snow         Naganaki Shrine, 12/1–2/10              the first properly cold day; huskies in heaven
   - Run-ins once they're found (who 'kat', flags ['found-kat']): ri-kat-junpei (Game Panic rematch, after rank 2),
     ri-kat-kuromi (the mall: Kuromi's name; My Melody if met), ri-kat-gym (the bathhouse: Ethan's "gym bag").
   - Routine (FEMC_GAME_DAILY_LIFE): kat-koro-walk, evening from 8/10 (Koromaru lives at the dorm then), flags found-kat:
     walking Koromaru along the river into Cosmo and Wanda. Koromaru has opinions.
   - afterRank texts after ranks 1, 3, 6 and 9 (thread 'kat'; Kat and Ethan both text in it). Kat texts lowercase with
     double letters and no apostrophes; Ethan short and dry; Solar's replies are hers (lowercase, "u", little punctuation). */
(() => {
  const KEYS = ['river', 'shrine', 'vending', 'pier', 'mall', 'portisland', 'strip', 'snow'];
  const STOPS = KEYS.map(k => `kat-stop-${k}`);
  const SEEN = [...STOPS, ...KEYS.map(k => `kat-pass-${k}`)];

  // The third stop: they swap numbers, and the link is found when the run-in ends (core.js finishRunIn).
  const FOUND = [
    { s: 'kat', f: 'serious', t: "Okay, wait. Hold on. This is the third time. Three times is a pattern. I studied psychology. I know a pattern when it's standing in front of me holding a leash." },
    { s: 'ethan', f: 'neutral', t: "She did study psychology. She brings it up." },
    { s: 'kat', f: 'happy', t: "Can we hang out? On purpose? Like, not because a dog dragged us into you? We don't know anybody here except them and a guy at the konbini who looks through us like we're a window." },
    { s: 'ethan', f: 'neutral', t: "He doesn't look through us." },
    { s: 'kat', f: 'serious', t: "He looks through us, Ethan. He looks at the shelf behind us." },
    { n: "Kat already had her phone out. She handed it over with the contacts open and a new entry started, and Solar typed her name in, and Kat took it back and added, after it, a small dog emoji and a small sparkle, and looked at it with real satisfaction, the way you'd look at a shelf you'd just put up yourself." },
    { phone: [{ from: 'kat', t: 'HI its kat. from the dogs' }, { from: 'kat', t: 'this is so we have each other. ethan says hi. cosmo says nothing he is being a diva about the wind' }], contact: 'Kat' },
    { n: "Then Wanda saw something, and both huskies hit the ends of their leashes at the same time, and Kat and Ethan went with them, the way they always did, at an angle, waving over their shoulders, yelling something about Tuesdays and Fridays and Sundays and the riverside end of the Strip." }
  ];
  const BYE = [
    { n: "Then the dogs decided the conversation was over, the way they decided everything, and the two of them went with it, at an angle, waving." }
  ];
  const FIRST = (extra = []) => [
    { s: 'kat', f: 'happy', t: "Hi! Sorry. Hi. I'm Kat, this is Ethan, that's Cosmo, and that, the criminal, is Wanda." },
    { s: 'ethan', f: 'neutral', t: "Hi. We're new." },
    { s: 'kat', f: 'neutral', t: "We just moved here. From the States. We don't know anything. Everybody's very polite to us and I can feel that it's about the dogs." },
    ...extra
  ];
  const AGAIN = (extra = []) => [
    { s: 'kat', f: 'surprised', t: "Oh my God. It's you. Ethan, it's her. It's the girl." },
    { s: 'ethan', f: 'happy', t: "Hey. Hi again." },
    ...extra
  ];
  // One run-in that might find them. o: { key, where, slot, after, until, before (narration), stopT, passT, first, again, stop, pass }.
  const meet = o => ({
    id: `ri-kat-${o.key}`, who: 'kat', label: 'Two huskies', finds: 'kat', met: [], noFlags: ['found-kat'],
    where: { acts: [], areas: [], jobs: [], clubs: [], ...o.where, any: true }, slot: o.slot, after: o.after, until: o.until,
    scene: [
      ...o.before.slice(0, 1).filter(l => l.place), // the scene break to where they are, first
      { ifCount: { of: SEEN, min: 1 }, then: [{ n: "The huskies again. She'd have known them anywhere by now, the grey one and the black one, and the two people attached to them, at an angle." }] },
      ...o.before.filter((l, i) => i > 0 || !l.place),
      { choose: [
        { t: o.stopT, flag: `kat-stop-${o.key}`, then: [
          { ifCount: { of: STOPS, min: 2 }, then: AGAIN(o.again), else: FIRST(o.first) },
          ...o.stop,
          { ifCount: { of: STOPS, min: 3 }, then: FOUND, else: BYE }
        ] },
        { t: o.passT || '(Keep walking.)', flag: `kat-pass-${o.key}`, then: o.pass }
      ] }
    ]
  });

  (window.FEMC_GAME_RUNINS ||= []).push(
    meet({ key: 'river', where: { areas: ['strip', 'station'] }, after: '5/6', until: '6/20',
      before: [
        { place: 'Iwatodai · Riverside', soft: true },
        { n: "She took the long way home, by the river, where the path ran under the cherry trees that had already finished being pink and gone green, and somewhere ahead of her somebody was yelling in English, which you didn't hear much in Iwatodai, and getting closer fast." },
        { n: "Two Siberian Huskies came around the bend at a speed nobody had agreed to. A grey and white one with a navy bandana, running dead straight down the middle of the path with his chin up like he owned it. A black and white one with a paw-print bandana going everywhere at once, with what looked like somebody's sandal in her mouth. Behind them, attached, a tall guy with shaggy brown hair and a girl in a black top covered in little strawberries, both of them leaning back on the leashes like water-skiers." },
        { n: "\"Oh hell nah,\" the girl was yelling. \"Wanda. WANDA. Drop it. That is a stranger's shoe. That is a stranger's SHOE.\"" },
        { s: 'wanda', f: 'happy', t: "Awoo!" }
      ],
      stopT: '(Stop. Help with the leash.)',
      first: [{ s: 'kat', f: 'serious', t: "And I'm so sorry about the shoe. It's not yours. I don't know whose it is. I don't think she knows either." }],
      again: [{ s: 'kat', f: 'serious', t: "She has a shoe again. Different shoe. I don't know where she's getting them." }],
      stop: [
        { n: "The black one's leash had gone twice around the guy's legs. Solar knelt and unwound it while he stood very still with his arms up like he was being searched, and the black one, Wanda, dropped the sandal in Solar's lap as if it were a gift, and licked her once across the whole face." },
        { s: 'ethan', f: 'happy', t: "She likes you. She only steals for people she likes." },
        { s: 'cosmo', f: 'serious', t: "..." },
        { n: "The grey one, Cosmo, did not like anybody. He stood a little apart with his back to all of them, looking at the river, waiting with enormous patience for this to be over." }
      ],
      pass: [
        { n: "She stepped onto the grass to let them by. The huskies went past at full tilt, the couple went past after them, the girl mouthing *sorry, sorry, so sorry* over her shoulder, and the sandal went with them, and then the path was quiet again." }
      ] }),

    meet({ key: 'shrine', where: { areas: ['shrine'] }, after: '5/20', until: '8/5',
      before: [
        { place: 'Naganaki Shrine', soft: true },
        { n: "On the way down the shrine steps, there was a standoff." },
        { n: "At the top, by the offering box, sat the shrine's white dog, Koromaru, very upright, very still, the way he always sat there, like a small and serious official. At the bottom of the steps stood two huskies. The grey one was staring up at Koromaru. Koromaru was staring down at the grey one. Nobody was blinking." },
        { s: 'koromaru', f: 'serious', t: "Grrr..." },
        { n: "The black husky had no idea there was a standoff. She was lying on her back on the bottom step with all four legs in the air, wriggling, and her humans, a tall guy and a girl in big gold hoops, were standing over the whole situation with the faces of people who had brought the wrong dogs to church." }
      ],
      stopT: "(Stop. Explain Koromaru.)",
      first: [{ s: 'kat', f: 'neutral', t: "Is that your dog? He's so serious. He's looking at Cosmo like Cosmo owes him rent." }],
      again: [{ s: 'kat', f: 'neutral', t: "Do you know that dog? Please say you know that dog. He's been looking at Cosmo like Cosmo owes him rent." }],
      stop: [
        { s: 'solar', f: 'neutral', t: "He's the shrine's dog. Koromaru. He's sort of in charge here." },
        { s: 'ethan', f: 'neutral', t: "Fun fact. Shiba-type dogs are one of the oldest breeds in Japan. He's basically been in charge here for a couple thousand years." },
        { n: "Koromaru came down three steps, exactly three, and stopped, and sniffed the air in the grey husky's direction, and sneezed, once, with real contempt. Cosmo turned his head away as if he'd been slapped. Wanda rolled over, saw Koromaru for the first time, lost her entire mind with joy, and tried to go up the steps to love him." },
        { s: 'cosmo', f: 'surprised', t: "...!" },
        { s: 'koromaru', f: 'serious', t: "Woof." },
        { s: 'wanda', f: 'sad', t: "Awoo..." },
        { n: "One word. Wanda sat down. It was, Kat said later, the only time anyone had ever made Wanda sit down, and she'd been trying for a year." }
      ],
      pass: [
        { n: "She went around them, down the side of the steps. Behind her the white dog held the high ground with total authority, and the grey husky refused to lose a staring contest to a dog half his size, and nobody involved seemed likely to go home any time soon." }
      ] }),

    meet({ key: 'vending', where: { acts: ['vending'] }, after: '6/15', until: '8/20',
      before: [
        { place: 'Iwatodai Station · Vending Machines', soft: true },
        { n: "There was a man at the next vending machine who had been there, she was fairly sure, since before she'd arrived, standing in front of the glowing rows of cans with his hands in his pockets and his head tilted, reading every single label, while a black and white husky sat at his feet and licked the side of the machine with long, slow, loving strokes." },
        { n: "A girl came up the platform stairs with a second husky, grey, who refused to come any closer to the machine and stood at the top of the stairs like the machine had said something about his mother." },
        { n: "\"Ethan,\" the girl said, \"oh my God. It's a vending machine. Pick a drink. Wanda's going to marry it.\"" }
      ],
      stopT: "(Stop. Point him at a drink.)",
      first: [], again: [],
      stop: [
        { s: 'ethan', f: 'neutral', t: "There's a drink here called Pocari Sweat. Sweat. They named it sweat. On purpose. I need to know what that is before I commit." },
        { s: 'solar', f: 'neutral', t: "It's a sports drink. It's good. It doesn't taste like sweat." },
        { s: 'ethan', f: 'happy', t: "That's exactly what it would say if it did." },
        { n: "He bought one. He drank it standing there on the platform with the train coming in behind him, the wind of it blowing his hair all over his face, and considered it, seriously, and said it tasted like a vitamin that had been to the beach. Kat said that was the most Ethan sentence he'd ever said. Wanda was still licking the machine." }
      ],
      pass: [
        { n: "She got her can and went. When she glanced back from the bottom of the stairs, he was still reading labels, and the husky was still in love with the machine, and the girl had sat down on the top step to wait it out." }
      ] }),

    meet({ key: 'pier', where: { areas: ['port'] }, after: '7/10', until: '9/20',
      before: [
        { place: 'Port Island · Pier', soft: true },
        { n: "Out on the pier somebody was trying to take a photograph, and losing." },
        { n: "A girl with long dark hair was crouched on the boards with her phone out, in the voice people use for babies and bomb disposal, saying *sit, sit, good girl, sit,* to a black and white husky who was not sitting, who was in fact halfway down the little steps by the bait shop, up to her elbows in the bay, delighted. A grey husky sat on the boards beside the girl, beautifully, perfectly, with his back to the camera. A tall guy held both leashes and the face of someone who had seen this before." }
      ],
      stopT: "(Stop. Offer to hold the grey one.)",
      first: [], again: [],
      stop: [
        { s: 'kat', f: 'serious', t: "It's on our list. One photo. Both of them, sitting, on the pier. That's all I want from life. Is that so much? Is that so much to ask?" },
        { n: "Solar held the grey one. He let her, with the air of someone granting a favor. Ethan went down the steps after the black one and came back up wet to the knees with eighty pounds of seawater husky in his arms, and set her down, and she shook herself off over all of them at once." },
        { s: 'wanda', f: 'happy', t: "Awoo-woo!" },
        { s: 'kat', f: 'sad', t: "...Okay. Not today. Next time. We'll get it next time. I'm putting it in the calendar." }
      ],
      pass: [
        { n: "She kept to the other railing. Behind her the photograph did not happen, and the black husky climbed back up the steps soaking and proud of herself, and the girl put her face in her hands and laughed into them." }
      ] }),

    meet({ key: 'mall', where: { areas: ['mall'] }, after: '8/20', until: '10/31',
      before: [
        { place: 'Paulownia Mall · Fountain', soft: true },
        { n: "By the fountain at Paulownia there was a grey husky lying flat on his belly, refusing." },
        { n: "He had walked as far as the edge of the polished stone floor and decided, apparently, that he did not trust it. It was too shiny. It had his reflection in it. He lay at the exact line where the tile changed with his chin on his paws and his eyes closed, while a girl in a black dress pulled gently on his leash and a tall guy held a black and white husky who was trying very hard to get into the fountain." },
        { n: "\"Cosmo,\" the girl was saying, \"baby, it's a floor. It's a normal floor. Everyone's looking at you. You're making a scene.\"" },
        { s: 'cosmo', f: 'sad', t: "..." }
      ],
      stopT: "(Stop. Ask if he's okay.)",
      first: [], again: [],
      stop: [
        { s: 'kat', f: 'neutral', t: "He's fine. He's a diva. He does this at every new floor. At home he wouldn't walk on our kitchen tile for three weeks. He'd just stand at the edge of it and cry until somebody brought the food to him." },
        { s: 'ethan', f: 'neutral', t: "I'll carry him." },
        { n: "Ethan handed Solar the black one's leash, crouched, got both arms under a fully grown husky, and stood up with him like a man lifting a sofa, and Cosmo hung there in his arms with his legs dangling and his face completely serene, as if this had been the plan all along, as if he'd finally been given the respect he was due." },
        { s: 'cosmo', f: 'happy', t: "Hmph." },
        { n: "Meanwhile the black one pulled Solar three meters toward the fountain before she managed to dig in. Kat said she'd done better than anybody else ever had, and that she was a natural, and that she should have dogs, and then, with a look at Wanda, that she should maybe not have this one." }
      ],
      pass: [
        { n: "She let them be. When she came back past the fountain later, the tall guy was carrying the grey husky across the floor in his arms like a bride, and the husky looked happier than she'd ever seen anything look." }
      ] }),

    meet({ key: 'portisland', where: { areas: ['portisland'] }, after: '9/20', until: '12/10',
      before: [
        { place: 'Port Island Station · Central Concourse', soft: true },
        { n: "In the middle of the concourse at rush hour a girl in a smart black blazer and a skirt with a lot of little chains on it was on a call, in what was very obviously her work voice, bright and calm and slightly too warm, the voice of someone who'd once been told to smile in emails, while a black and white husky at her feet sang." },
        { n: "\"Absolutely,\" the girl was saying. \"Absolutely, I'll loop in comms, and we can circle back on the newsletter Monday. No, that's — no, that's a dog. That's my dog. She's — yes. She's singing. Yes. She does that.\"" },
        { s: 'wanda', f: 'happy', t: "Awooooo-ooo!" },
        { n: "A tall guy came out of a bakery with a bag of bread and a grey husky, who looked at the singing with deep personal shame." },
        { s: 'cosmo', f: 'flustered', t: "..." }
      ],
      stopT: "(Stop. Hold the dog while she talks.)",
      first: [], again: [],
      stop: [
        { n: "Solar took the black one's leash and crouched and held her face, gently, and the husky stopped singing to stare at her in surprise, and the girl mouthed *THANK YOU* over the top of her phone and walked three steps away and finished her call in one minute flat, in the voice, and hung up, and let it drop off her face like a coat." },
        { s: 'kat', f: 'serious', t: "I'm a Digital Communications Manager. And I edit the company newspaper. It's a newsletter. I call it a newspaper because I have to live with myself." },
        { s: 'ethan', f: 'neutral', t: "She's very good at it. They moved us here for it." },
        { s: 'kat', f: 'neutral', t: "They moved us here so I could tell a building full of engineers that a press release is not an attack on them personally. It's a calling." }
      ],
      pass: [
        { n: "The crowd carried her past them. The last thing she heard, over the announcements, was the work voice saying *no, totally, she'll stop in a second,* and the husky not stopping." }
      ] }),

    meet({ key: 'strip', where: { areas: ['strip'] }, slot: 'evening', after: '10/25', until: '1/20',
      before: [
        { place: 'Iwatodai Strip', soft: true },
        { n: "Outside Hagakure at night, in the steam that came out of the vent and drifted across the street like weather, there were two huskies tied to the bike rail and two people in the line with their faces lit by the menu in the window." },
        { n: "The tall one was reading the menu like it was a contract he'd been asked to sign. \"Does it have egg in it?\" he was saying. \"How do I say, does it have egg. Is there a way to say, no green stuff, without being rude about the green stuff?\" The girl next to him had her hand over her eyes." }
      ],
      stopT: "(Stop. Help them order.)",
      first: [], again: [],
      stop: [
        { s: 'kat', f: 'serious', t: "He's a picky eater. He's thirty and he's a picky eater. I'm trying to find the best ramen on Port Island and he's trying to find a ramen that's just noodles." },
        { s: 'ethan', f: 'neutral', t: "I like noodles. I like broth. I'm a simple man. I just don't need the soup looking at me." },
        { n: "Solar told him the words. He wrote them in his phone, phonetically, very carefully, and said them out loud to himself a few times, like a spell, and behind them on the bike rail the grey husky lay down with his back to the street and the black one tried to eat a parking ticket." }
      ],
      pass: [
        { n: "She went by. The line moved. Through the steam she saw the tall one reach the counter and point at the menu and then at himself and then shake his head at something very firmly, and the Master behind the counter stare at him for a long time." }
      ] }),

    meet({ key: 'snow', where: { areas: ['shrine'] }, after: '12/1', until: '2/10',
      before: [
        { place: 'Naganaki Shrine', soft: true },
        { n: "It was the first properly cold day, the kind that hurt your teeth, and everybody at the shrine had their hands in their sleeves, and two huskies were having the best day of their lives." },
        { n: "The black one was rolling on the frozen grass by the playground like it was a sandbox, pushing her face through the frost, sneezing, getting up, doing it again. The grey one stood in the coldest wind on the whole hill with his eyes half-closed and his fur blowing, in a state of total spiritual peace. Their humans stood by the swings in coats, scarves, hats and what looked like two pairs of gloves each." },
        { n: "\"They're from California,\" the girl said, to nobody, through her scarf. \"They've never been this cold. They're so happy. I'm going to die.\"" },
        { s: 'wanda', f: 'happy', t: "Awoo-woo-woo!" }
      ],
      stopT: "(Stop. Share your hand warmer.)",
      first: [], again: [],
      stop: [
        { n: "Solar had a little paper hand warmer from the konbini in her coat pocket. She cracked a second one and gave it to the girl, who held it to her face with both hands like a holy relic." },
        { s: 'kat', f: 'happy', t: "You're an angel. You're a literal angel. Ethan, this is an angel." },
        { s: 'ethan', f: 'neutral', t: "Fun fact. They're iron powder. It rusts. That's the warm. You're holding rust." },
        { s: 'kat', f: 'serious', t: "I don't care if it's a tiny sun. Don't ruin it." }
      ],
      pass: [
        { n: "She went on down the steps with her own hands deep in her pockets. Behind her the black husky kept rolling, and the grey one kept standing in the wind, and the two people kept shivering together by the swings, waiting, with enormous love, for their dogs to be done being happy." }
      ] }),

    // Once they're found.
    { id: 'ri-kat-junpei', who: 'kat', where: { acts: ['arcade'], areas: [], jobs: [], clubs: [] }, flags: ['found-kat'], ranks: { kat: 2 },
      after: '5/20', until: '2/28', scene: [
        { n: "At the car soccer cabinet, Junpei had brought reinforcements. He'd brought a printout. He'd watched videos, he said, on how to steer in the air, and had been practicing, he said, every day after school, on the cabinet, alone, like a monk." },
        { s: 'junpei', f: 'serious', t: "Rematch. Right now. I'm a different man. I've seen things." },
        { s: 'ethan', f: 'happy', t: "Let's go." },
        { n: "Junpei scored first. Junpei scored first and stood up out of the seat with both arms in the air and screamed, and Ethan said *nice, man, nice,* sincerely, and then scored four times in a row, upside down, gently, like someone tucking in a child." },
        { s: 'junpei', f: 'sad', t: "...One. I got one. I'm taking the one. Nobody can take the one from me." },
        { s: 'kat', f: 'happy', t: "Proud of you, lil pup." },
        { s: 'junpei', f: 'surprised', t: "STOP CALLING ME THAT." }
      ] },
    { id: 'ri-kat-kuromi', who: 'kat', where: { areas: ['mall'], acts: [], jobs: [], clubs: [] }, met: ['kat', 'kuromi'], flags: ['found-kat'], ranks: { kat: 3 },
      after: '6/10', until: '2/28', scene: [
        { n: "At the capsule machines by the escalator, two people were having a disagreement about the last capsule in the cartoon-character machine, the black-hooded one with the skull. One of them was Kat. The other one was Kuromi." },
        { s: 'kuromi', f: 'serious', t: "I put my hand on it first." },
        { s: 'kat', f: 'serious', t: "You put your hand on the MACHINE first. That's not the same. That's not how it works." },
        { n: "Then Kat saw Solar, and looked at Kuromi again, the hood, the little skull, and her whole face changed, slowly, like a sunrise." },
        { s: 'kat', f: 'surprised', t: "Wait. Wait wait wait. Is this — is this the Kuromi? Your Kuromi? You live with her? Her NAME is—" },
        { s: 'kuromi', f: 'neutral', t: "Don't." },
        { s: 'kat', f: 'happy', t: "I have you on my keys. I mean — not YOU. The — oh my God. I'm being so normal. I'm so normal right now." },
        { s: 'kuromi', f: 'flustered', t: "...I've heard it my whole life. It's a cartoon. I'm a person. Take the capsule. You clearly need it more than me." },
        { ifMet: 'mymelody', then: [
          { n: "My Melody, who had been standing quietly behind Kuromi this whole time holding two crepes, leaned around her with enormous delight and looked at the keyring hanging off Kat's bag, the little pink rabbit on it." },
          { s: 'mymelody', f: 'happy', t: "Oh! She's me! Look, Kuromi. She has me on her bag." },
          { s: 'kuromi', f: 'serious', t: "She does NOT have you on her bag, she has a — okay. Okay. She has you on her bag." },
          { n: "Kat had to sit down on the bench by the escalator. She said she was fine. She said it three times." }
        ] },
        { n: "In the end Kat bought two capsules and gave one to Kuromi, who opened it, and looked at the little plastic version of herself inside for a long moment, and put it in her pocket without a word, and later, Solar noticed, on her bag." }
      ] },
    { id: 'ri-kat-gym', who: 'kat', where: { acts: ['bathhouse', 'electricbath'], areas: [], jobs: [], clubs: [] }, slot: 'evening', flags: ['found-kat'], ranks: { kat: 4 },
      after: '6/20', until: '2/28', scene: [
        { n: "Outside the bathhouse, pink and steaming, she ran into Ethan, alone for once, carrying a gym bag." },
        { s: 'ethan', f: 'happy', t: "Hey! I'm on my way to the gym." },
        { s: 'solar', f: 'neutral', t: "The gym's the other way." },
        { s: 'ethan', f: 'neutral', t: "I know. I'm going the long way. Past the bathhouse. To build up to it." },
        { n: "He unzipped the gym bag a little to show her. There were a pair of sneakers in it, a towel, a bottle of water, and, on top of everything, three melon breads from the konbini and a handheld console with the car soccer game on the screen, paused." },
        { s: 'ethan', f: 'neutral', t: "Fuel. And for the bench between sets. Don't tell Kat. Actually, tell Kat. She'll laugh. She likes when I'm stupid." }
      ] }
  );

  (window.FEMC_GAME_DAILY_LIFE ||= []).push(
    { id: 'kat-koro-walk', after: '8/10', until: '2/28', slot: 'evening', flags: ['found-kat'],
      place: 'Iwatodai · Riverside', time: 'Evening', bg: 'iwatodai-riverside-night', scene: [
        { n: "Koromaru took her for his walk after dinner, down to the river, at his own pace, the way he always did, and stopped dead at the bottom of the bank with one paw up, because there were two huskies on his river." },
        { s: 'koromaru', f: 'serious', t: "Grrr..." },
        { n: "Kat and Ethan were on the bench by the water with the dogs at their feet. Wanda saw Koromaru and launched herself the full length of her leash in total uncomplicated joy, and was stopped by Ethan's arm, and hung there at the end of it wagging her whole back half. Cosmo saw Koromaru and turned his head slowly away, toward the water, with the air of someone at a party pretending not to see his ex." },
        { s: 'kat', f: 'happy', t: "Oh, it's the sheriff. Hi, sheriff. Is this your river? We didn't know it was your river." },
        { s: 'koromaru', f: 'neutral', t: "Woof." },
        { s: 'wanda', f: 'surprised', t: "Awoo?" },
        { n: "He walked up to Wanda, and stood in front of her, and she lay down flat at once with her chin on the ground and her eyes huge, the way she lay down for nobody, and he sniffed the top of her head, thoroughly, like he was checking her paperwork. Then he walked past Cosmo without looking at him, very close, very slowly, and Cosmo did not look back, and nobody breathed." },
        { s: 'cosmo', f: 'serious', t: "Hmph." },
        { choose: [
          { t: "They'll be friends one day.", then: [
            { s: 'ethan', f: 'neutral', t: "Fun fact. Dogs mostly don't hold grudges. Cosmo's different. Cosmo's held a grudge against a mailbox since 2022." }
          ] },
          { t: "(Sit with them a while.)", stat: { kindness: 1 }, then: [
            { n: "She sat with them a while. Koromaru lay down at her feet with his back to the huskies, on purpose, and Wanda inched closer to him on her belly the whole time, one centimeter a minute, until by the time they got up to go she was touching his tail with her nose, and he let her." }
          ] }
        ] },
        { bond: { kat: 1 } }
      ] }
  );

  const X = (window.FEMC_GAME_LINK_EXTRAS ||= {});
  const C = (X.kat ||= {});
  const K = t => ({ from: 'kat', t }), E = t => ({ from: 'ethan', t });
  C.afterRank = { ...(C.afterRank || {}),
    1: { slot: 'evening', delay: 1, msgs: [K('update on the list: ethan ate the onigiri u picked and said "huh." thats a ten from him'), K('also cosmo stared at the konbini guy for 4 minutes. we think theyre friends now')],
      reply: [
        { t: 'the konbini guy did not consent to that', link: 'kat', notes: 2, then: [K('LMAOO he did not'), K('ok fair. he looked scared')] },
        { t: 'huh is a strong review', link: 'kat', notes: 3, then: [E('it was a good onigiri'), K('see. he is SO moved')] }
      ] },
    3: { slot: 'evening', delay: 1, msgs: [K('btw i was right about everything i said at the bookstore'), K('u dont have to tell me. i just know')],
      reply: [
        { t: 'u were not', link: 'kat', notes: 2, then: [K('ok so i was')] },
        { t: 'pls never do that again', link: 'kat', notes: 3, then: [K('i will absolutely do it again'), K('but nicer. ill bring snacks next time')] }
      ] },
    6: { slot: 'evening', delay: 1, msgs: [K('i told my discord about ur kiriko'), K('they said pics or it didnt happen'), K('so we are going back. thats just facts')],
      reply: [
        { t: 'ok but im picking the tank', link: 'kat', notes: 3, then: [K('oh nah. we are NOT queueing w that tank again'), K('ok fine u pick')] },
        { t: 'tell them i said hi', link: 'kat', notes: 2, then: [K('they said W'), K('thats good. trust me')] }
      ] },
    9: { slot: 'evening', delay: 1, msgs: [K('HE SAID THE USUAL'), K('im still thinking about it'), E('she has said "the usual" out loud like forty times today'), K('bc i am a LOCAL ethan')],
      reply: [
        { t: 'locals. proud of u', link: 'kat', notes: 3, then: [K('🥹 ok im going to cry again'), E('she is')] },
        { t: 'ethan whats ur usual', link: 'kat', notes: 2, then: [E('noodles'), K('he means just noodles')] }
      ] }
  };
})();
