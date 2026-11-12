/* Nov 11 2026: the fish market (minigame market, flags epi-s-mg-market-*) is an optional choice at the start of epi-s-house-market (Mrs. Bang's tide table); the skip has a confirm. */
/* The strangers epilogue (2/17-3/16/2013, Incheon): seven more home hangouts (R.bonds), the Nov 5-6 expansion pass, writer 3
   of 3. Data only; loaded with the world (epilogue.js WORLDS.strangers.files). Bonds go through add() so they merge with
   people.js and people-crew.js in either load order. Hangouts are Daytime / Evening only.

   Hangouts (the first unseen hangout whose gates fit is the one offered):
     yunjin   epi-s-yunjin-wall     'the other side of the wall' 2/17-2/19 evening, after epi-s-kitchen  (Her Room)
     girls    epi-s-girls-tent      'the tent'                   3/6-3/14 evening, after epi-s-karaoke    (Pojangmacha)
     house    epi-s-house-market    'the flounder woman'         3/2-3/7 after, after epi-s-gun           (Fish Market)
     yunjin   epi-s-yunjin-lights   'lights out'                 3/15-3/15 evening, after epi-s-last      (Her Room)
     house    epi-s-house-dishes    'the long table'             3/15-3/15 evening, after epi-s-last      (Kitchen)
     haechan  epi-s-haechan-laststep 'the step'                  3/15-3/15 evening, after epi-s-last      (Annex; every route)
     jungwon  epi-s-jungwon-lastgate 'the gate'                  3/15-3/15 evening, after epi-s-last      (Gate; every route)
   Scene conditions: ifEpiRoute in girls-tent (who the house sent), haechan-laststep and jungwon-lastgate (route colour).
   Glitch lines: { glitch: { strain: 1 } } after the fever lie holds in girls-tent; { glitch: { near: true } } once each in
     haechan-laststep and jungwon-lastgate. No glitch ids.
   Bonds: one { bond: { <id>: 1 } } per hangout, inside the warmest option.
   Flags set: none. Flags read: epi-route-* via ifEpiRoute only.
   Inventions for Kat to confirm (small, structural): during the ten days Mrs. Bang broke the koi ice every hour all night with
     a torch, Pyo lit temple incense at the top of the storeroom stairs, Mr. Oh's car ran out of petrol at the gate on night six
     and Minseok pushed it up the drive (Yunjin heard it all secondhand: she was away too), and Yunjin knocked twice on Solar's dorm door every night over there (Nov 11); Mrs. Park practices scales on the dining
     table with her fingers; the pojangmacha is an orange tarp tent under a Songdo overpass with red and blue stools; the girls'
     fight is Sakura going to a backup-dancer audition alone that the four had planned to do together in April, and getting a
     callback (Kazuha was sworn to secrecy, Eunchae saw it first); the flounder woman once slipped eleven-year-old Solar an
     extra flounder and does it again; the dent in the tray edge where the ice shovel came down; Pyo and Mr. Oh wait in the car
     with the doors locked; on 3/15 Auntie Song rolls kalguksu dough for Saturday lunch past the last bus and Mr. Oh drives her and Pyo home (she never stays over: Kat, Nov 6); the koi bucket
     comes in under the kitchen radiator for the frost; Haechan's plan is the Deokjeok ferry next month; Jungwon's is a walk in
     Jayu Park when the cherry blossoms come. */
(() => {
  const R = ((window.FEMC_EPI_WORLDS ||= {}).strangers ||= {});
  const B = (R.bonds ||= {});
  const add = (id, role, hs) => { const b = (B[id] ||= { id, role, hangouts: [] }); (b.hangouts ||= []).push(...hs); };

  /* ── Yunjin ── */
  add('yunjin', 'friend', [
    { id: 'epi-s-yunjin-wall', title: 'the other side of the wall', hint: "Yunjin is knocking on your wall. Twice.",
      after: '2/17', until: '2/19', slots: ['evening'], events: ['epi-s-kitchen'], noFlags: [], route: null, noRoute: null,
      place: 'Incheon · The Lee House · Her Room', time: 'Evening', scene: [
      { music: 'epi-s-yunjin' },
      { n: "It came through the wall at a quarter to eight, two knocks, low down, where the headboard on the other side must have been, and then, before she'd decided whether to answer, two more, harder, the knock of a woman who had never once in her life been kept waiting at a door." },
      { n: "Outside the evening had gone the grey of wet newspaper over the water, and a few flakes were coming down past the window with no intention of settling, drifting about in the lamplight like they'd been sent somewhere and lost the address." },
      { n: "Then her door opened, because the knock had only ever been a courtesy." },
      { s: 'yunjin', f: 'happy', t: "Wifey. I'm home. Did you miss me? Don't answer, I can see it on your face, it's disgusting." },
      { n: "Yunjin came in in socks and the red puffer zipped over her pajamas, with a convenience-store bag swinging off one wrist and a fan of sheet masks held up in the other hand like a winning hand of hwatu, and she kicked the door shut behind her with her heel without looking." },
      { s: 'yunjin', f: 'happy', t: "I brought snail. I brought pearl. I brought one that says it's made of donkey milk, which I bought out of respect for the donkey." },
      { s: 'solar', f: 'happy', t: "Your mother will hear you." },
      { s: 'yunjin', f: 'neutral', t: "My mother is practicing scales on the dining table. With no piano. With her fingers, on the wood. She's been doing it since Christmas. She won't hear anything till Easter." },
      { n: "There were shrimp crackers in the bag, the big one, the family size, which Yunjin opened with her teeth. They lay on Solar's bed side by side on their backs with the masks on, cold and wet and smelling of cucumber and something chemical underneath it, two white faces with holes cut out for the eyes, and Yunjin fed crackers through the mouth hole of hers one at a time with enormous care, like posting letters." },
      { s: 'yunjin', f: 'serious', t: "Don't laugh. If you laugh it slides and then you look like a sad ghost, and Pyo sees you on the landing, and he dies, and it's your fault." },
      // Nov 11 2026 (Kat): searchers know. Yunjin was pulled away too, so the ten nights are the house's, told to her since dawn, and Solar waits for Japan, not for "where".
      { n: "Solar waited for it, the *later* Yunjin had promised her in the kitchen, her whole body ready for the shape of the word *Japan*, for the dorm and the bay and the year, the one thing in this house only the two of them could say out loud. It didn't come. Yunjin crunched a cracker and looked at the ceiling, and Solar felt the readiness go out of her shoulders a little at a time, the way the cold goes out of your hands by a stove." },
      { s: 'yunjin', f: 'neutral', t: "Okay. So. I'm going to tell you about your house. Because nobody else is going to, because everybody in this house thinks feelings are a kind of draught." },
      { s: 'yunjin', f: 'neutral', t: "I wasn't here for it either, obviously. I got the whole thing this morning. Pyo, by the rice cooker, in four minutes. Then Minseok, who said Pyo had it wrong. Then Mrs. Bang's face, which had it right." },
      { s: 'yunjin', f: 'neutral', t: "Night one. Two in the morning. Minseok's on the gate, he hears something in the garden and thinks, great, a murderer, finally, something to do. He goes round the side. It's Mrs. Bang. Coat over her nightie, a torch in her teeth, on the back step, breaking the ice on the fish bucket." },
      { s: 'solar', f: 'neutral', t: "She does that every morning." },
      { s: 'yunjin', f: 'serious', t: "Every *hour*, Sol. All night. Ten nights. Two o'clock, three o'clock, four, tap tap tap with the two fingers. Minseok asked her on the third day and she said the fish would freeze. It was four degrees. The fish were fine. Mr. Kim was thriving. Mr. Kim has never looked better in his life." },
      { n: "Solar laughed. The mask slid. She pressed it back up with the flat of her hand and lay there with it crooked over one eye, and Yunjin made a small satisfied noise, as if that had been the plan." },
      { s: 'yunjin', f: 'neutral', t: "Pyo. Pyo went to the temple shop and bought a whole packet of incense and lit one at the top of the storeroom stairs every night. For the ghost. I asked him why and he said he was asking it a favor. I asked what favor. He went so red I thought his ears would come off." },
      { s: 'yunjin', f: 'neutral', t: "And Mr. Oh." },
      { n: "She stopped there for one second, which for Yunjin was a very long time." },
      { s: 'yunjin', f: 'happy', t: "Mr. Oh sat in the car at the gate. Every night. Engine on, heater on, hands on the wheel, like he was waiting outside a party that was running late. Night six he ran out of petrol and Minseok had to push him up the drive in the snow, and Mr. Oh steered the whole way with his hands at ten and two, Sol. Ten and two. Like it was the expressway." },
      { n: "Somewhere in that Solar had stopped laughing. She didn't know where. The mask had gone warm against her face and there was something under her ribs, low, like a hand pressing, and she kept her eyes on the ceiling because the ceiling was the one thing in the room that wasn't going to say anything back." },
      { n: "Not one word of it was about who had been missing, or where. Yunjin had built it that way. It was just a house doing ten nights in the cold, each of them in their own idiotic way, at a bucket and a staircase and a gate." },
      { choose: [
        { t: "And you? What did you do?", stat: { kindness: 1 }, then: [
          // Nov 11 2026 (Kat): searchers know. She was over there with Solar, not home watching dramas.
          { s: 'yunjin', f: 'happy', t: "Me? Where do you think, wifey. I was fabulous. I ate egg sandwiches in a dorm and lived down the hall from a girl who didn't know my name yet." },
          { n: "Then, without turning her head on the pillow, in the low voice she used when she didn't want her own mouth to hear her." },
          { s: 'yunjin', f: 'neutral', t: "I knocked. On your door. Over there. Every night before I went to sleep. Twice." },
          { s: 'yunjin', f: 'neutral', t: "You never knocked back. Obviously. You didn't know what it meant yet. I just didn't want to be the one who stopped." },
          { n: "Solar found her hand on the duvet. It was cold. Yunjin's hands were always cold, because, she'd said since they were twelve, her heart was too big and used up all the blood. Neither of them said anything else, and the crackers went soft in the bag between them." },
          { bond: { yunjin: 1 } }
        ] },
        { t: "That's insane. All of it.", stat: { charm: 1 }, then: [
          { s: 'yunjin', f: 'happy', t: "It's the most insane house in Korea. I'm writing a book. It's called *Thirty-Nine Point Four*." },
          { s: 'solar', f: 'happy', t: "Who plays Mrs. Bang?" },
          { s: 'yunjin', f: 'serious', t: "Mrs. Bang. Nobody else could. She'd beat the director with a rug." }
        ] },
        { t: "(Say nothing. Eat a cracker through the mask.)", then: [
          { n: "She took one out of the bag and posted it through the mouth hole of her mask, the way Yunjin did, and it crunched very loudly in the quiet." },
          { s: 'yunjin', f: 'happy', t: "That's the spirit. That's the most nutritious thing you've done all week." }
        ] }
      ] },
      { n: "Yunjin peeled her mask off at the twenty-minute mark exactly. Then she leaned over and peeled Solar's off too, slowly, from the chin, and looked at her face underneath it for a while in the lamplight, the way Mrs. Bang had looked at it in the kitchen, as if checking for cracks." },
      { s: 'yunjin', f: 'neutral', t: "You look like a person again. Sort of. Eighty percent. Don't be greedy, eighty's a B." },
      { n: "She took the crackers with her when she went, and the donkey mask, which she said she was saving for an emergency, and stopped in the doorway with one hand on the frame." },
      { s: 'yunjin', f: 'neutral', t: "Knock if you need me. Twice. Once means Mrs. Bang's making you do the fever again and you need rescuing." },
      { n: "The door shut. Through the wall, a minute later, very faint, came the sound of fingers on wood, a scale going up and coming down again in the next room, patient, in no hurry, played on a table by a woman who hadn't touched a piano since Christmas. Then, under it, low down by the headboard, two knocks." },
      { n: "Solar put her knuckles to the wall and knocked back. Twice. Outside the flakes went on coming down past the window and not settling, and she lay there with her hand flat on the wallpaper for a while after, feeling the cold come through it from the other side." }
    ] },

    { id: 'epi-s-yunjin-lights', title: 'lights out', hint: "Yunjin has turned your light off from the doorway and is getting into your bed. She says it's warmer. It isn't.",
      after: '3/15', until: '3/15', slots: ['evening'], events: ['epi-s-last'], noFlags: [], route: null, noRoute: null,
      place: 'Incheon · The Lee House · Her Room', time: 'Evening', scene: [
      { music: 'epi-s-yunjin' },
      { n: "The light went off before Solar heard the door. Then the door, then the rabbit socks across the floor, then the whole cold length of Yunjin climbing over her into the side of the bed against the wall, knees first, elbows second, and pulling the duvet up over both their heads as if the room were a storm." },
      { s: 'yunjin', f: 'neutral', t: "It's warmer in here." },
      { s: 'solar', f: 'happy', t: "It's the same temperature as your room. It's the same radiator. It's one radiator, Jin." },
      { s: 'yunjin', f: 'serious', t: "Your half's warmer. Science." },
      { n: "Outside it had gone perfectly clear, the kind of hard clean evening that came before a frost, every star over the water out at once and very small, and the window had already begun at the corners, a fine white fur creeping in across the glass from the frame the way it did, slowly, as if it had all night." },
      { n: "Yunjin's hand came up in the dark and found Solar's hair on the pillow. All of it, loose. She went still." },
      { s: 'yunjin', f: 'surprised', t: "Your hair's down." },
      { s: 'yunjin', f: 'surprised', t: "It's not even nine. Is your mother ill? Do I need to call someone? Is this a cry for help?" },
      { s: 'solar', f: 'neutral', t: "She said leave it down tonight." },
      { n: "There was a pause under the duvet. Short. Yunjin's fingers stayed where they were, a little tangled, the way you leave your hand somewhere on purpose." },
      { s: 'yunjin', f: 'neutral', t: "Okay. Then I'm braiding it." },
      { s: 'yunjin', f: 'neutral', t: "No I'm not. I can't see. I'm just going to lie in it. Move over, it's all over my face, it smells like your mother's shampoo, this is the most expensive I've ever smelled." },
      { n: "They talked about nothing. That was the point of it; that had always been the point of it, since they were fourteen and doing it in Yunjin's father's apartment with the stove vent rattling. Whether koi slept, and if they did, whether Mr. Kim snored. Whether the drama with the dying second lead was better the first time or the second time. Kazuha's newest ghost, who lived, apparently, in the third-floor toilets of the dance studio and only came out for ballet." },
      { s: 'yunjin', f: 'happy', t: "Chaewon sent me the list. For the cherry blossoms. Laminated. She photographed the lamination, Sol. She wanted me to see the shine." },
      { s: 'solar', f: 'happy', t: "What's on it?" },
      { s: 'yunjin', f: 'neutral', t: "Wolmido at eleven. Jayu Park at two. A picnic, which means kimbap, which means you're down for tuna. One photograph per person per tree. Eunchae's not allowed to bring the boy from the bakery. Sakura's allowed her game, but only on the bus." },
      { s: 'yunjin', f: 'serious', t: "And tomorrow we're doing nothing. I told you. Pajamas. Bad TV. Mrs. Bang's soup. I've planned the whole thing. It's the best plan I've ever made." },
      { n: "Solar said it sounded perfect. It did. She lay on her back in the dark with the duvet over her nose and Yunjin's knees in her hip and listened to the house settle around them, the pipes ticking, somebody downstairs putting a pan away, and the sea under the wall going about its business the way it had every night of her life, not out yet, hours from out, and she didn't count anything." },
      { s: 'yunjin', f: 'happy', t: "Marry me." },
      { s: 'solar', f: 'happy', t: "I'm busy." },
      { s: 'yunjin', f: 'happy', t: "Make time. We'll run off. We'll open a nail salon in Queens. Mr. and Mrs. Kim can come, they'll have a tank in the window, people will come from all over Queens to look at them. My wife. My woman. My whole entire problem." },
      { choose: [
        { t: "Fine. Yes. Wifey.", stat: { charm: 1 }, then: [
          { s: 'solar', f: 'happy', t: "Fine. Yes. Wifey." },
          { s: 'yunjin', f: 'surprised', t: "FINALLY. Eleven years. I'm telling my mother. She'll play something. She'll play something on the table." }
        ] },
        { t: "(Find her hand under the duvet and hold it.)", stat: { kindness: 1 }, then: [
          { n: "She found it under the covers. Cold, always, even in here. She held on to it, and Yunjin let her, and neither of them did anything about it, and after a second Yunjin's thumb moved once across her knuckles, the way you'd check that something was still there." },
          { s: 'yunjin', f: 'neutral', t: "Don't be nice to me. I'll cry on your mother's shampoo." },
          { s: 'solar', f: 'neutral', t: "Cry, then." },
          { s: 'yunjin', f: 'neutral', t: "No. Tomorrow. I've pencilled it in. After the soup." },
          { bond: { yunjin: 1 } }
        ] },
        { t: "Go to sleep, Jin.", then: [
          { s: 'yunjin', f: 'serious', t: "I'm not tired. I've never been tired in my life. I'm from New York. We don't have tired there, it's illegal." },
          { n: "She yawned so hard in the middle of it that her jaw clicked." }
        ] }
      ] },
      { n: "She went before Solar did. She always had. One minute she was explaining, with great seriousness, why the nail salon would need a neon sign in the shape of a fish, and the next she'd gone quiet in the middle of the word *neon*, and her breathing had changed, slower, a little catch at the top of it, and her hand had moved in her sleep from wherever it had been and found the cuff of Solar's pajama sleeve and taken hold of it. Two fingers and a thumb. The way a child holds on to a coat in a crowd." },
      { n: "Solar didn't move. She lay there with her sleeve held and her hair everywhere and the frost coming in across the window from the corners, white on black, and the stars beyond it very still over the water, and she thought that if she moved her arm Yunjin would wake, so she didn't move it." },
      { s: 'yunjin', f: 'neutral', t: "Tomorrow. Nothing. All day." },
      { n: "Out of her sleep, that. Not awake. The fingers tightened on the cuff and then let go a little and then held again, as if they were checking." },
      { s: 'solar', f: 'neutral', t: "All day." },
      { n: "She said it to the dark, very quietly, so as not to wake her, and lay there a long time afterward not sleeping, keeping her arm exactly where it was." }
    ] }
  ]);

  /* ── The girls ── */
  add('girls', 'friend', [
    { id: 'epi-s-girls-tent', title: 'the tent', hint: "Yunjin and the girls have found an orange tent bar under the Songdo overpass, and they aren't taking no for an answer.",
      after: '3/6', until: '3/14', slots: ['evening'], events: ['epi-s-karaoke'], noFlags: [], route: null, noRoute: null,
      place: 'Incheon · Pojangmacha', time: 'Evening', scene: [
      { music: 'epi-s-evening' },
      { n: "The tent was orange. That was the first thing and the main thing, an orange tarp strung on poles under the concrete belly of the Songdo overpass and lit from inside so it glowed in the dark like a paper lantern somebody had put down and forgotten, and every time a truck went over the whole thing hummed, the tarp breathing in and out on its ropes, the strings of bare bulbs swaying a little and settling." },
      { n: "Inside it smelled of gas and odeng broth and soju and the next table's cigarettes, and the cold came in under the hem of the tarp round everybody's ankles while the heater in the middle ticked and glowed, its face gone orange, so that whichever side of you was toward it was warm and the other side wasn't, and you turned on your stool all night like something on a spit." },
      { s: 'ajumma', t: "Five girls. Five stools. Sit, sit, sit. You're letting the warm out." },
      { n: "The ajumma was the size of the doorway, in a quilted vest and rubber gloves, pointing a ladle at people like a baton, and she had them on the red and blue stools before Chaewon had finished unfolding the plan." },
      { s: 'chaewon', t: "Pojangmacha, seven o'clock. Fish cakes. One bottle per two people. Home by eleven. It's all here." },
      { s: 'sakura', t: "Did you laminate a tent." },
      { s: 'chaewon', t: "I laminated the *evening*, Sakura." },
      { n: "Yunjin had dragged Solar out of the house by the wrist, with the words *you are coming or I am telling Mrs. Bang you said her barley tea was weak*, and now sat pressed to her shoulder with a fish cake in her mouth like a cigar." },
      { n: "The house had sent someone. The house sent someone everywhere now." },
      { ifEpiRoute: 'haechan', then: [
        { n: "Haechan was at the end of the bench in the black padded jacket with his back to the tarp, where he could see the gap in it that served as a door, with a glass of soju in front of him that he hadn't touched. The ajumma kept topping it up. It was already full. She'd decided within four minutes that he was her son, and he'd decided to let her, and was calling her *noona* to make her slap his arm." }
      ], else: [
        { ifEpiRoute: 'jungwon', then: [
          { n: "Jungwon was at the end of the bench. On a red plastic stool roughly a third of his height, in the dark coat, buttoned, his knees together and his hands flat on them and his back absolutely straight, like a man sitting for a portrait in a palace that happened to be made of tarp. The ajumma put a fish cake in front of him and he thanked her in a sentence so formal that she stood there with the ladle for a full second, not knowing what to do with it." },
          { n: "It was the funniest thing Solar had ever seen. Sakura took a photograph of it without looking up from her handheld, which Solar hadn't known was possible." }
        ], else: [
          { n: "Minseok was at the end of the bench with a fish cake in one hand and a folded newspaper in the other, reading it under a bare bulb with great concentration, upside down for the first ten minutes until the ajumma turned it round for him without comment." }
        ] }
      ] },
      { s: 'eunchae', t: "Solar's said three sentences. Three. She's on fire tonight." },
      { s: 'solar', f: 'happy', t: "That's four." },
      { s: 'eunchae', t: "Four. She's showing off." },
      { n: "Kazuha was holding her cup of broth in both hands near her face for the steam and looking up at the underside of the overpass through the gap in the tarp, where the yellow haze of the day still hung round the lights in soft dirty halos." },
      { s: 'kazuha', t: "*Ano ne.* Bridges are where the lost ones sleep. Because nobody walks under them. Solar-ssi, are you even allowed soju? After you were so sick?" },
      { n: "The whole table looked at her. Not hard. Just the way you look at someone when it's their turn." },
      { s: 'solar', f: 'happy', t: "Thirty-nine point four, over Seollal. Three days in bed. Mrs. Bang says I'm a medical miracle. I'm allowed one glass." },
      { s: 'kazuha', t: "One glass. I'll watch you." },
      { glitch: { strain: 1 } },
      { n: "It held. Of course it held. It went into the tent and sat down among the fish cakes like it belonged there, and she felt it hold, a knot drawn tight somewhere in her chest by hands that weren't hers, and something under it went a little thinner, the way the tarp went thin when a truck went over and the light came through." },
      { n: "Then Eunchae, scrolling on her phone under the table, went very still." },
      { s: 'eunchae', t: "Sakura." },
      { s: 'eunchae', t: "Why is your name on the callback list. For the backup audition. The one in April. The one we're all doing in April." },
      { n: "Nobody moved. The heater ticked. A truck went over and the tent breathed out." },
      { s: 'sakura', t: "...I saw it first?" },
      { s: 'eunchae', t: "No. *I* saw it first. *I* always see it first. It's on the studio's page. You're on the list. Second from the bottom." },
      { n: "Chaewon put her skewer down. She did it very precisely, square to the edge of the table, the way she put down everything when she was about to run a meeting nobody wanted to be at." },
      { s: 'chaewon', t: "We said April. We said all four of us. I made a schedule. I made a schedule with *your name on it*, Sakura, in a color, I gave you green because you like green." },
      { s: 'sakura', t: "They moved the first round. It was last Saturday. I went to look." },
      { s: 'chaewon', t: "You went to *look*. With your shoes on. And your number pinned to your shirt. And then you danced. And then they called you back. That's not looking. That's *going*." },
      { n: "Kazuha burst into tears. Not slowly. All at once, the way she did at recitals, over the broth, with both hands still round the cup." },
      { s: 'kazuha', t: "I knew. I knew and she made me promise. She made me swear on my grandmother. I'm so sorry. My grandmother's *alive*." },
      { s: 'chaewon', t: "*You knew?*" },
      { s: 'yunjin', f: 'serious', t: "Okay. Okay, okay, everybody put down your fish—" },
      { s: 'sakura', t: "Your plans are always for four people, Chaewon. Every single one. I wanted to know if I could get in by myself. Just once. Without the lamination." },
      { n: "That landed. Solar watched it land. She watched Chaewon's face take it, the plain hurt of it going in under the planner and the meetings and the colors and finding something soft there, and she watched Sakura see that it had, and look down at her handheld, and not turn it on." },
      { n: "They were so angry with each other. They sat round a steel table under a bridge and were honestly, ridiculously furious, every one of them saying exactly what she meant, the hurt right there on top where anybody could pick it up. She held lies for a living. She'd been holding one at this table four minutes ago. She sat with her hands round her one glass and felt something that she was a little ashamed to find was envy." },
      { choose: [
        { t: "(Broker the peace.) Chaewon. When's the callback?", stat: { charm: 1 }, then: [
          { s: 'solar', f: 'neutral', t: "Chaewon. When's the callback?" },
          { s: 'chaewon', t: "...End of the month. The twenty-ninth. Why." },
          { s: 'solar', f: 'neutral', t: "Then you've got two weeks to laminate something." },
          { n: "Chaewon opened her mouth to be angry about that and found, halfway, that she was thinking about it instead, which was worse, and she glared at Solar across the fish cakes as if Solar had cheated at something." },
          { s: 'chaewon', t: "That's a very low trick." },
          { s: 'solar', f: 'happy', t: "I know." }
        ] },
        { t: "(Let them have it out.)", stat: { courage: 1 }, then: [
          { n: "She sat back on her stool and let them. She didn't say a word. She let Chaewon get to the end of the schedule and Sakura get to the end of the lamination and Kazuha get to the end of her grandmother, and it took a long time, and it was loud, and the next table turned round twice." },
          { ifEpiRoute: 'haechan', then: [
            { n: "At the end of the bench Haechan caught her eye over his full glass and lifted one eyebrow, the scarred one, which meant *are we stopping this*, and she shook her head very slightly, and he settled back against the tarp with the face of a man watching an excellent match." }
          ], else: [
            { ifEpiRoute: 'jungwon', then: [
              { n: "At the end of the bench Jungwon hadn't moved at all. His eyes went from girl to girl as each one spoke, attentive, courteous, a man following a debate in a language he'd studied but never heard spoken quite this fast." }
            ], else: [
              { n: "At the end of the bench Minseok had stopped pretending to read the newspaper and was simply listening, open-mouthed, with a fish cake halfway to it." }
            ] }
          ] }
        ] },
        { t: "(Take Eunchae outside.)", stat: { kindness: 1 }, then: [
          { n: "Eunchae had gone white. She was the one who'd said it, and she knew it, and she was sitting on her stool with her phone face down in both hands like something she'd been caught holding. Solar put a hand on her shoulder and stood up, and Eunchae stood up with her without asking why, and they went out through the gap in the tarp into the cold." },
          { place: 'Incheon · Pojangmacha', time: 'Evening', soft: true },
          { n: "Outside it was concrete and the traffic going over in long hollow rushes, and the cold came straight through her coat. Behind them the girls' shadows moved on the glowing tarp, enormous, waving their arms." },
          { s: 'eunchae', t: "I didn't mean to. It was just there. I always say the thing. I see it and then it's out." },
          { s: 'solar', f: 'neutral', t: "I know." },
          { s: 'eunchae', t: "You never say the thing. You've said eleven sentences tonight. I counted. Eleven, and one of them was about soju." },
          { s: 'solar', f: 'happy', t: "Somebody has to be the other kind." },
          { n: "Eunchae looked at her in the streetlight, nose going pink, as if Solar were a sum she'd nearly got." },
          { s: 'eunchae', t: "That's twelve." },
          { n: "She leaned her head on Solar's arm. Just for a second. Then she took it off and wiped her nose on her sleeve and went back in to be shouted at, because it was her turn, and she knew it." },
          { bond: { girls: 1 } }
        ] }
      ] },
      { n: "They made up the way they'd fought, which was all at once and loudly. Chaewon cried first, which nobody had ever seen, big furious tears with her mouth set, and got up and went round the table and put both arms round Sakura's neck from behind and held on, and Sakura sat there being held with the face of a cat in a sweater." },
      { s: 'sakura', t: "I didn't even want to go alone. It was horrible. There was a man with a whistle." },
      { s: 'chaewon', t: "I'm coming to the callback. We're all coming. We're your entourage. I'm making a list." },
      { s: 'eunchae', t: "Solar's coming. Put Solar down. The twenty-ninth." },
      { s: 'yunjin', f: 'happy', t: "Put her down in pen. Ajumma! Ajumma, another bottle, my friends are emotionally healthy now and it's disgusting." },
      { n: "The ajumma came with the bottle and a plate of fish cakes nobody had ordered and put them down in the middle of the table with her rubber-gloved hand flat on the top of Chaewon's head for a moment, the way you'd steady a pot lid." },
      { s: 'ajumma', t: "For the crying. Free. Don't do it again, it's bad for business." },
      { n: "They went home at a quarter to twelve, forty-five minutes over the laminated plan, arm in arm, Eunchae walking backward in front, still counting something." },
      { n: "In the back of the car, a long way down the coast road, Solar took the first pin out of her hair and the smell came out with it. Gas and odeng broth and cold tarp and soju and the orange heat of the heater, all of it, worked into the knot at the back of her head like it meant to stay. She sat there with the pin in her fingers and breathed it in, and didn't take out the rest." }
    ] }
  ]);

  /* ── The house ── */
  add('house', 'friend', [
    { id: 'epi-s-house-market', title: 'the flounder woman', hint: "Mrs. Bang has her coat on and the market basket over her arm, and she has the look of a woman going to war.",
      after: '3/2', until: '3/7', slots: ['after'], events: ['epi-s-gun'], noFlags: [], route: null, noRoute: null,
      place: 'Incheon · Fish Market', time: 'Daytime', scene: [
      { music: 'epi-s-house' },
      // The fish market (Nov 11 2026; minigames/market.js, flags epi-s-mg-market-*). The flounder war happens either way.
      { n: "Before they went, Mrs. Bang laid the tide table open on the kitchen table between the rice cooker and the radio, put her finger on the page, took it off again, and pushed the book across to Solar without a word. It had been a test since Solar was six. It was still a test." },
      { choose: [
        { t: "(Read the tide. Do the buying.)", then: [
          { minigame: 'market', flags: 'epi-s-mg-market', opts: { bg: 'epi-s-harbor-tide', stallBg: 'flashback-fish-market' } },
          { ifFlag: 'epi-s-mg-market-good', then: [
            { s: 'mrsbang', f: 'neutral', t: "Hm." },
            { n: "From Mrs. Bang, *hm* was a medal. Solar had been given perhaps four in her life. She put this one somewhere safe." }
          ], else: [
            { s: 'mrsbang', f: 'neutral', t: "You knew that tide when you were nine." },
            { n: "She didn't say anything else about it, all the way to the car, which was worse." }
          ] }
        ] },
        { confirm: true, t: "(Let Mrs. Bang read it.)", then: [] }
      ] },
      { n: "Mr. Oh parked where he always parked, by the side door of the shed, and set the handbrake, and put his hands back on the wheel at ten and two as if they had somewhere further to go, and Pyo, in the front seat beside him, reached across without a word and pushed down the lock on his own door." },
      { s: 'pyo', f: 'flustered', t: "I'll stay with Mr. Oh. In case. Somebody should stay with Mr. Oh." },
      { s: 'mrsbang', f: 'neutral', t: "Mr. Oh has been sitting in cars for thirty years without you, Pyo." },
      { s: 'pyo', f: 'sad', t: "He's getting older." },
      { n: "Mr. Oh said nothing. He reached over and turned the heater up a notch for Pyo, which from Mr. Oh was a speech." },
      { n: "Mrs. Bang got out. She got out the way she'd come down the back stairs every morning for twenty years, as if the stairs had been told, and put the market basket over her arm, and buttoned the top of her coat, and looked at the side door of the fish market for exactly as long as it took Solar to come round the car and stand beside her, and then she marched in." },
      { n: "She went down the middle of the aisle like a general reviewing troops she didn't think much of, chin up, past the crab tanks and the trays of mackerel silver on their ice, and Solar walked half a step behind with her hands in her pockets, the floor trodden ice the whole way, the light through the high windows the colour of dishwater." },
      { n: "The market was being normal. It was being so normal it hurt. The crab man was shouting his prices louder than she'd ever heard him shout them, every number like a dare. The eel man had his back turned to the pillar by his tanks and was doing something extremely careful to a hose. Two men by the dock doors, smoking under the no-smoking sign, both looked up as Mrs. Bang went past and both found something very interesting at once in the bottom of their paper cups." },
      { n: "Nobody said it. Not one person in the whole long shed said a single word about Wednesday, or a man, or a gun, or jammed, and the word was everywhere anyway, the way a smell is everywhere, in the extra loudness and the careful backs and the particular way the whole aisle looked at Mrs. Bang and then didn't." },
      { n: "On the steel edge of the flounder tray, a hand's width from the corner, there was a fresh dent. Bright where the metal had bent. Exactly the size of the edge of an ice shovel." },
      { n: "The flounder woman saw them coming at fifteen meters. She was the same broad woman in the same rubber apron with the same sleeves rolled to the elbow in the cold, and she went still behind her tray, her hands flat on the ice, and Solar watched her decide, in the space of one breath, to be exactly as she always was." },
      { s: 'flounder', t: "Swimming this morning. Every one of them. I'll swear it on my mother." },
      { s: 'mrsbang', f: 'serious', t: "I've met your mother." },
      { n: "And that was the war begun. Mrs. Bang picked a flounder up by the tail and looked at it the way you'd look at a son-in-law, and put it down, and named a price so low that the crab man stopped shouting in the next aisle to listen. The flounder woman put both hands on her heart. Mrs. Bang said the fish had been dead since the last government." },
      { n: "It went on longer than Solar had ever seen it go, half the aisle pretending not to listen, and Solar understood, standing half a step behind her with her hands in her pockets, that this wasn't about the fish. Mrs. Bang had stood in this aisle a week ago with her hand up to say something and watched the world hold still. She'd come back to take something off it. She was taking it out of the flounder." },
      { choose: [
        { t: "(Pick the fish. Fast.)", stat: { proficiency: 1 }, then: [
          { n: "She bent over the tray and went down it with one finger, eyes, gills, the give of the flesh, the way Auntie Song had taught her on a crate at nine years old. This one. This one. Not that one, that one was Monday. She had four out on the ice in under a minute, and the flounder woman looked at the four, and then at her, and then at the ceiling, as if appealing to somebody up there." },
          { s: 'flounder', t: "You were a terrible child." }
        ] },
        { t: "(Back Mrs. Bang's price.) That's a Monday fish at a Saturday price.", stat: { charm: 1 }, then: [
          { s: 'solar', f: 'serious', t: "That's a Monday fish at a Saturday price." },
          { n: "Mrs. Bang didn't turn round. She didn't need to. Something in the set of her shoulders under the coat went up an inch, pleased, a general hearing the cavalry arrive." },
          { s: 'flounder', t: "Two of you now. Two. It's an ambush." }
        ] },
        { t: "(Look at the pillar by the eel tanks.)", stat: { kindness: 1 }, then: [
          { n: "She looked. She hadn't meant to. The pillar by the eel tanks was only a pillar, concrete, painted green to the height of a man and grey above it, with nobody leaning on it, and the eels going round and round behind it in their tank, and her breath went short and shallow without asking her, all at once, the way it did on a pier near the edge." },
          { n: "A hand took her elbow. Mrs. Bang's, without looking round, still haggling, still naming numbers at the flounder woman in her soft-mackerel voice, her rough cold hand closing round Solar's arm above the elbow and staying there, holding on, through the whole rest of the argument, as if Solar were a basket that might be set down and left." },
          { bond: { house: 1 } }
        ] }
      ] },
      { n: "They settled at a price that was an insult to everyone. The flounder woman wrapped four fish in newspaper with the speed of rage and put them in Mrs. Bang's basket, and Mrs. Bang counted out the money onto the ice note by note, slowly, and turned away to look at the clams." },
      { n: "And the flounder woman leaned across the tray and put a fifth fish, wrapped, into the pocket of Solar's coat." },
      { n: "She'd done it before. Once, when Solar was eleven and had a bandage on her left hand from her first fish knife, she'd done exactly this, a flounder in the pocket of a school coat and a finger to her lips. Solar had never told. The coat had smelled of it for a month." },
      { s: 'flounder', t: "Don't tell her." },
      { s: 'solar', f: 'happy', t: "I never have." },
      { s: 'flounder', t: "Good girl. Tell her it was swimming." },
      { n: "Mrs. Bang, looking at the clams, said nothing at all, in the particular way of a woman who has seen everything." },
      { place: 'Incheon · The Car', time: 'Daytime', soft: true },
      { n: "Pyo unlocked his door when he saw them coming, and locked it again, and unlocked it, and Mr. Oh's hands hadn't moved from ten and two. The heater was on so high the windows had fogged from the inside." },
      { s: 'pyo', f: 'surprised', t: "Did anything happen? Was it all right? Did anything happen?" },
      { s: 'mrsbang', f: 'neutral', t: "Flounder happened. Pyo. Take the basket." },
      { n: "She got into the back beside Solar and settled her coat and folded her hands on her knees and looked out of the fogged window at the side door of the fish market until Mr. Oh pulled away from it, gently, the way he did everything." },
      { s: 'mrsbang', f: 'neutral', t: "Next week I want mackerel. She'll try to sell me Thursday's." },
      { s: 'solar', f: 'happy', t: "I'll come." },
      { s: 'mrsbang', f: 'neutral', t: "Of course you'll come. Who else can tell?" },
      { n: "The fifth fish sat cold in Solar's coat pocket against her hip all the way home, and neither of them mentioned it, and she could feel Mrs. Bang knowing about it the whole length of the coast road, warmly, like a hand." }
    ] },

    { id: 'epi-s-house-dishes', title: 'the long table', hint: "The dinner plates are stacked by the sink, and Mrs. Bang is holding a tea towel out behind her without looking round.",
      after: '3/15', until: '3/15', slots: ['evening'], events: ['epi-s-last'], noFlags: [], route: null, noRoute: null,
      place: 'Incheon · The Lee House · Kitchen', time: 'Evening', scene: [
      { music: 'epi-s-house' },
      { n: "After dinner the kitchen did what it always did, which was pretend to be emptying while filling up. The plates came in off the long table in stacks and went down beside the sink, and Mrs. Bang ran the water as hot as it would go, so the steam came up round her and fogged the window over the sink and the black garden beyond it, and held a tea towel out behind her at arm's length without turning round." },
      { n: "Solar took it. Mrs. Bang washed; Solar dried. That was the order of things. It had been the order of things since Solar was tall enough to reach the rack." },
      { n: "On the wall by the door, the rice shop's calendar said twenty-nine in red pen in the corner of the square. Over the kitchen clock, still, there was a dish towel hung neatly by one corner, the blue checked one, and nobody had taken it down in a week, and nobody looked at it." },
      { n: "Mrs. Bang turned to hand her the first bowl and stopped." },
      { n: "Her hair. All of it down, round her shoulders, past them, loose on her back, the way it was never down in this kitchen, never before midnight, never in front of anyone with a sink in front of them. Mrs. Bang looked at it with a wet bowl in her hand and the water running." },
      { s: 'mrsbang', f: 'surprised', t: "Aigoo." },
      { s: 'solar', f: 'neutral', t: "Eomma took the pins out." },
      { n: "Mrs. Bang said nothing to that. Her wet hand came up as if to tuck a piece of it behind Solar's ear, the way it had in this kitchen a month ago, and found there was too much of it, much too much, and stopped in the air, and went back to the bowl." },
      { n: "At the end of the long table, under the lamp, Auntie Song was rolling dough. She should have gone at nine with her boots in a bag; it was a quarter to ten, and the last bus went at ten past, and she was rolling noodle dough for tomorrow's kalguksu as thin as paper, slowly, as if she had all night, which she didn't, and knew she didn't, and had decided Mr. Oh could drive her down the hill when it was done, which Mr. Oh had decided too, without either of them asking the other. She looked up at the hair. She looked at it the way she looked at a dumpling she approved of." },
      { s: 'auntie', f: 'neutral', t: "*Like when you were small. You stood on my crate with it in your eyes and I tied it back with string.*" },
      { s: 'solar', f: 'happy', t: "*Butcher's string. It smelled of pork for a week.*" },
      { s: 'auntie', f: 'happy', t: "*It kept it out of the fish.*" },
      { n: "Pyo, drying the spoons at the other end of the counter the wrong way, all bowl and no handle, was staring at Solar's hair with his mouth a little open, as if it were a second ghost, and Mrs. Bang reached over without looking and flicked water at him off her fingers, and he went back to the spoons." },
      { n: "Mr. Oh sat at the far corner of the long table with his instant coffee, the last one, the ten o'clock one, both hands round the cup at ten and two. He looked at her hair once, over the rim. Then he lifted the cup half an inch off the table toward her, the way he had in this kitchen on the first day, and drank, and looked out of the window at the dark." },
      { n: "By the back door, under the radiator, the koi bucket had been brought in. Mrs. Bang had carried it in herself at seven with her mouth set, because the sky had gone so clear by dusk that there'd be a frost hard enough to freeze it through, she said, and she wasn't having Mr. and Mrs. Kim frozen solid on her watch, not after the winter they'd had. They went round and round on the kitchen tiles in the warm, orange and white, slow, as if they'd been promoted." },
      { choose: [
        { t: "(Dry the good bowls first, the way she likes.)", stat: { proficiency: 1 }, then: [
          { n: "She went through the rack and took the good bowls out first, the celadon ones from the dining room, and dried them inside and out and stacked them on the left in threes, the way Mrs. Bang had stacked them for twenty years, and put the everyday ones on the right." },
          { s: 'mrsbang', f: 'neutral', t: "Hm." },
          { n: "Which was the most Mrs. Bang had ever said about anybody's drying." }
        ] },
        { t: "*Auntie. Sing something.*", stat: { charm: 1 }, then: [
          { s: 'solar', f: 'happy', t: "*Auntie. Sing something.*" },
          { s: 'auntie', f: 'serious', t: "*It's Friday. I sing on Sundays. You know that.*" },
          { s: 'solar', f: 'happy', t: "*Just one line.*" },
          { s: 'auntie', f: 'neutral', t: "*Sunday. I'll sing on Sunday, little moon, and you'll fold, and your pleats had better be fourteen.*" },
          { n: "She rolled the dough over the pin and out again, and didn't sing, and her mouth moved round a few notes anyway, without any sound, the way your mouth does round a song you know too well to keep it in." }
        ] },
        { t: "(Lean your head on Mrs. Bang's shoulder for a second.)", stat: { kindness: 1 }, then: [
          { n: "She did it with the tea towel still in her hands, a wet bowl in it. Just leaned. Her head on the shoulder of Mrs. Bang's quilted vest, which smelled of lemon oil and barley tea and steam, the way it had always smelled, the way the whole of her childhood had smelled at this sink." },
          { n: "Mrs. Bang didn't stop washing. Her hands went on in the hot water. But she stood very still from the shoulders up, so as not to move the head on her shoulder, and the water ran, and nobody in the kitchen looked round, which in this kitchen was a kind of applause." },
          { s: 'mrsbang', f: 'sad', t: "Aigoo. Heavy. All that hair." },
          { bond: { house: 1 } }
        ] }
      ] },
      { n: "When the last plate was in the rack Mrs. Bang dried her hands on her apron and went to the stove and filled the green thermos with barley tea from the pot, and screwed the cup down on it, hard, and gave it a shake to check, and held it out." },
      { s: 'mrsbang', f: 'serious', t: "For the morning. Take it up with you. Don't leave it on the stair to go cold this time, I'm not made of barley." },
      { n: "Solar took it. It was hot through the metal, almost too hot to hold. She held it against her chest in both arms, the way you'd hold something you'd been handed at a station." },
      { s: 'auntie', f: 'neutral', t: "*Kalguksu tomorrow. Twelve o'clock. Be down.*" },
      { s: 'pyo', f: 'happy', t: "I'm making the broth. Auntie said. I'm allowed the anchovies." },
      { s: 'mrsbang', f: 'neutral', t: "God help us." },
      { n: "Mr. Oh rinsed his cup at the sink, ten o'clock exactly, and turned it upside down on the rack, and took the car keys off the hook by the back door without a word, and Auntie Song rolled the last sheet of dough round the pin and floured it and laid it under a damp cloth like a baby put down for the night, and pulled her rubber boots on one at a time with a hand on the table, grumbling at them in Mandarin." },
      { s: 'auntie', f: 'neutral', t: "*Pyo. Coat. If you make him wait he'll drive at forty the whole way to punish you.*" },
      { s: 'pyo', f: 'flustered', t: "He drives at forty anyway." },
      { s: 'mroh', f: 'neutral', t: "Forty-five." },
      { n: "The back door let the cold in round the three of them and shut on it, and through the steamed window over the sink the headlights came on at the side of the house and swung across the garden, the frost lit up white on every terrace for one long second, and went away down the drive at exactly the speed Pyo had said, and then the kitchen was only the two of them and the koi." },
      { n: "Mrs. Bang turned the big light off and left the little one over the stove, the way she always did, so the kitchen went gold and small, and the koi went round in their bucket under the radiator, and the armchair by the stove sat empty with the burst arm and the shape of a small woman still in its cushion, keeping her place till the morning bus." },
      { s: 'mrsbang', f: 'neutral', t: "Bed. All that hair, you'll catch cold." },
      { n: "Solar went up the back stairs with the thermos held against her and her hair down her back, and on the landing she stopped and looked down, and the kitchen was a small gold square at the bottom of the dark, with the calendar on the wall by the door saying twenty-nine, and somebody, in the morning, before she got there, would turn it." }
    ] }
  ]);

  /* ── Haechan ── */
  add('haechan', 'friend', [
    { id: 'epi-s-haechan-laststep', title: 'the step', hint: "The annex light is on and the radio's on the sill, reading out the islands to nobody.",
      after: '3/15', until: '3/15', slots: ['evening'], events: ['epi-s-last'], noFlags: [], route: null, noRoute: null,
      place: 'Incheon · The Lee House · Annex', time: 'Evening', scene: [
      { music: 'epi-s-step' },
      { n: "The gravel on the terraces had already started to stiffen with the cold, every stone with a thin white edge on it in the light from the kitchen, and her breath went down the garden in front of her, and the sky over the wall was so clear and so black that the stars looked close enough to knock off with a broom." },
      { n: "He was on the step. He was always on the step. Knees up, forearms on them, the black padded jacket zipped to the chin tonight, chewing, and behind him on the sill the old silver radio was on low, the man's voice going down the list the way it went down it every night, as steady as a rosary." },
      { s: 'radio', t: "Socheong. Northwest, six to nine. Sea state moderate. Frost overnight." },
      { s: 'radio', t: "Baengnyeong. Northwest, seven to ten. Visibility good." },
      { n: "He heard her on the last terrace and turned his head, and opened his mouth, and whatever he'd been going to say didn't come out. He looked at her hair. All of it, loose on her shoulders, down her back, under the open coat, the way he'd only ever seen it at two in the morning, by the light of a radio, never by the kitchen light at half past eight with the whole house still awake behind her." },
      { n: "He looked at it for a beat too long. Then he looked at the persimmon tree instead, very hard, the way he looked at things when he'd been caught." },
      { s: 'haechan', f: 'neutral', t: "Agasshi. Somebody's robbed you." },
      { s: 'solar', f: 'surprised', t: "Robbed me of what?" },
      { s: 'haechan', f: 'happy', t: "All your pins. They've had the lot. You should ring the police. Ring the Chairman. Tell him there's a girl loose in his garden with her head undone, she looks about fifteen, she's a menace." },
      { s: 'solar', f: 'neutral', t: "Eomma took them out." },
      { n: "The gum stopped. Only for a second. Then it went again, slower." },
      { s: 'haechan', f: 'neutral', t: "Right. Well. Suits you. Looking like a fishwife." },
      { n: "He said it to the tree. He moved over on the step, the way he always moved over, and she sat on the half he'd left her, which was the warm half, which it always was." },
      { ifEpiRoute: 'haechan', then: [
        { n: "She sat closer than the warm half. Her shoulder against his, her hip against his, the whole cold side of her against the whole warm side of him, and he didn't move away, and he didn't say anything about it, and after a while his arm came off his knee and lay along the step behind her, not touching her back, just there, an inch off it, the way you hold a hand near a candle." }
      ], else: [
        { n: "She kept the space. A hand's width of cold step between them, the width they'd kept all month, careful, exact. He looked at it once, the space, the way you'd look at a fence you'd put up yourself and were proud of and didn't much like." }
      ] },
      { s: 'radio', t: "Deokjeok. North, five to eight. Sea state slight." },
      { s: 'haechan', f: 'neutral', t: "Next month the ferry goes out to Deokjeok again. Proper timetable. Twice a day." },
      { s: 'solar', f: 'serious', t: "I don't go on boats." },
      { s: 'haechan', f: 'happy', t: "You'd sit in the middle. Inside. Away from the windows. With a can of the bad coffee. I'd sit on the outside and tell you it's a lake." },
      { s: 'haechan', f: 'neutral', t: "There's a beach on the far side, all pines. Nobody goes. I'd take you. You could look at the islands from the right side for once." },
      { s: 'solar', f: 'neutral', t: "Next month." },
      { s: 'haechan', f: 'neutral', t: "Next month. When it's warm. When you can feel your feet." },
      { n: "The radio went down the list. Every island, in its order, the way it had been going down it since before either of them was born. Socheong. Baengnyeong. Daecheong. Yeonpyeong. Deokjeok. Then, at the end of the list, where the man always said *that concludes*, he didn't." },
      { n: "He paused. For about as long as a name would take. Just the hiss of the station, open, and the shape of a gap in it, as if somebody at the other end had turned a page and found one more island written there that wasn't on any chart." },
      { n: "Then the voice came back, the same voice, steady, and said *that concludes the coastal forecast*, and went on to the trot." },
      { n: "Haechan had stopped chewing. He sat on the step with his eyes on the radio and his jaw quite still and didn't say anything at all. Not a joke. Not the Chairman's rule. Nothing. She knew that quiet. She'd seen it in a fish market. The split knuckles on his knee had gone white and then, slowly, not." },
      { glitch: { near: true } },
      { n: "He didn't look at her. She didn't look at him. A song came on, an old one, a woman singing about a harbor in the voice they used to use, all vibrato and hope, and the frost went on coming in across the gravel in front of them, stone by stone." },
      { choose: [
        { t: "Sing it. The real way. Not to annoy me.", stat: { charm: 1 }, then: [
          { n: "He looked at her sideways, as if she'd asked him to take his jacket off in the snow. Then he sang. Not on purpose, for once. Not loud. Under the radio, a little behind it, in the low part of his voice she'd almost never heard, every word of it, the harbor and the boat that hadn't come in and the woman on the quay waiting for it in the old way, and he didn't look at her once the whole song, and he didn't make a joke at the end of it." },
          { s: 'haechan', f: 'flustered', t: "Don't tell anyone. I've got a reputation." }
        ] },
        { t: "(Put your head on his shoulder.)", stat: { kindness: 1 }, then: [
          { n: "She put it there. On the black jacket, on the cold nylon of it, which smelled of diesel and salt and cinnamon, with her hair all over the both of them, and he went rigid for one second, the whole length of him, the way he did when somebody looked at him too long." },
          { ifEpiRoute: 'haechan', then: [
            { n: "Then he let go of it. All of it. She felt it go out of him, the breath and the shoulders, and his hand came round from behind her on the step and found hers in her lap and took it, palm to palm, his thumb on her knuckles, and held it, and he still didn't look at her, and neither did she, and they sat like that with the radio playing trot to the frost." },
            { s: 'haechan', f: 'neutral', t: "Your hands are freezing." },
            { s: 'solar', f: 'neutral', t: "Then hold them." },
            { s: 'haechan', f: 'neutral', t: "What do you think I'm doing, agasshi." }
          ], else: [
            { n: "Then he let her. He didn't move his arm. He didn't put it round her. He sat there being leaned on with his forearms on his knees, very still, as if a bird had landed on him and he didn't want it to go." },
            { s: 'haechan', f: 'neutral', t: "You'll get gum in your hair. All of it. You'll have to cut it off." },
            { s: 'solar', f: 'neutral', t: "I'll risk it." }
          ] },
          { bond: { haechan: 1 } }
        ] },
        { t: "(Say nothing. Listen to the trot.)", then: [
          { n: "She said nothing. She sat and listened to the song all the way to the end, and so did he, and when it finished and the next one started, he hummed the first line of it under his breath, not to annoy anyone, just because it was there." }
        ] }
      ] },
      { n: "When the cold had got all the way up through the step into her, he stood, and held out his hand without looking at her, and pulled her up by it, carefully, as if she weighed more than she did." },
      { s: 'haechan', f: 'neutral', t: "Go up. You'll freeze. Your mother will have me shot for letting her daughter freeze with her hair down." },
      { s: 'solar', f: 'happy', t: "She doesn't shoot people." },
      { s: 'haechan', f: 'happy', t: "She'd learn. For me she'd learn." },
      { n: "She went up the gravel path, not across the terraces. Halfway up she looked back. He'd sat down on the step again with his forearms on his knees and his eyes on the radio, and the radio was playing trot, and he was chewing, and the annex light was on behind him, and he lifted one hand without looking up, two fingers, the way you'd wave somebody off at a ferry." },
      { s: 'haechan', f: 'neutral', t: "Next month. Deokjeok. I'll buy the tickets." }
    ] }
  ]);

  /* ── Jungwon ── */
  add('jungwon', 'friend', [
    { id: 'epi-s-jungwon-lastgate', title: 'the gate', hint: "There's someone standing under the lamp at the gate in a dark coat, and Minseok has decided not to see him.",
      after: '3/15', until: '3/15', slots: ['evening'], events: ['epi-s-last'], noFlags: [], route: null, noRoute: null,
      place: 'Incheon · The Lee House · Gate', time: 'Evening', scene: [
      { music: 'epi-s-jungwon' },
      { n: "He'd walked. She could tell from his shoes, which were the good black ones and had a line of white frost-salt round the edges of the soles from the hill road, and from his ears, which had gone red at the tops in the cold, the only part of him that ever looked as if it had been anywhere." },
      { n: "He was standing under the lamp at the gate, on the outside, where he always stood, in the dark coat buttoned to the collar, with his hands at his sides. In the gatehouse Minseok had his chair turned to face the drive and his newspaper up and was not seeing him with tremendous concentration, because the Chairman had said so." },
      { n: "She came down the steps with her coat over her shoulders and her hair down." },
      { n: "He saw it. His eyes went to all of it, loose round her shoulders, lifting at the ends in the wind off the water, and his face did nothing for one second, two, and then his eyes went with great precision to a point in the air about a hand's width above her left shoulder, and stayed there, and he didn't say a single word about it. He didn't say a word about it so completely that it was the loudest thing in the drive." },
      { s: 'jungwon', f: 'neutral', t: "Good evening. I'm sorry to come without calling. Mr. Oh offered the car. I preferred to walk." },
      { s: 'solar', f: 'neutral', t: "It's two kilometers. It's freezing." },
      { s: 'jungwon', f: 'neutral', t: "It is. There'll be a hard frost tonight. I wanted to see that the gate was shut properly." },
      { n: "The gate was shut properly. Minseok shut it properly every night of his life. Neither of them looked at it." },
      { n: "The lamp over the gate hummed. Below the hill the harbor lay flat and black with the cranes' lights doubled in it, and the cold came straight down out of the clear sky." },
      { s: 'jungwon', f: 'neutral', t: "*Have you eaten?*" },
      { n: "In Mandarin. Quietly, under the hum of the lamp, so that it was only for her, and so that Minseok, who didn't have a word of it, could go on not seeing them in peace." },
      { s: 'solar', f: 'happy', t: "*Mrs. Bang made sure. Twice. And Auntie Song after that.*" },
      { s: 'jungwon', f: 'neutral', t: "*Good. The fish?*" },
      { s: 'solar', f: 'happy', t: "*Inside. Under the radiator. Mrs. Bang carried them in herself.*" },
      { s: 'jungwon', f: 'neutral', t: "*Good.*" },
      { n: "His right hand went to his left wrist, to the watch, the old one with the link taken out, and rested there, the way it did when he was thinking about something he'd already finished thinking about. She could hear it ticking. In that cold, in that quiet, you could hear everything." },
      { s: 'jungwon', f: 'neutral', t: "Solar-ssi." },
      { n: "She knew what came after it. She'd heard it in a room across the water, by a window, with a second chair. She waited for it, at the gate, with her hair down, and felt her whole body get ready for it, the way it got ready for a step in the dark." },
      { n: "He didn't ask it. She watched him not ask it. She watched it come right up to the front of his mouth and stop there, politely, like a man who has got to a door and decided, on reflection, not to knock tonight." },
      { s: 'jungwon', f: 'neutral', t: "When the cherry blossoms come, would you permit me to walk with you in Jayu Park? In the afternoon. There's a bench at the top where you can see the whole harbor, and it's a long way from the edge." },
      { s: 'solar', f: 'neutral', t: "Chaewon's already got me for Jayu Park. At two." },
      { s: 'jungwon', f: 'happy', t: "Then at four. After Chaewon-ssi. I'll wait at the bottom of the steps. I'm very good at waiting at the bottom of things." },
      { n: "The dimples. Both of them, deep, sweet, perfectly polite. She knew what those meant. Then they went, and the other thing came instead, the stillness, the face going quiet and smooth like water when the wind drops, which was what he looked like when he was actually pleased, and which most people mistook for nothing." },
      { n: "The watch ticked under his fingers. She was counting it without meaning to; she counted everything. Eleven, twelve, thirteen. Then the fourteenth didn't come." },
      { n: "One beat of nothing. The lamp humming, and the sea, and no tick, a gap exactly the width of a second, as if the watch had held its breath." },
      { n: "Then fifteen. Sixteen. Steady, as if nothing had happened." },
      { n: "He looked down at it. She saw him look. He didn't tap it. He didn't hold it to his ear. He looked at the old face of it under the lamp for a long moment, with his thumb resting over the glass, and said nothing at all, and then looked back up, at the point above her shoulder, as if that was where he'd left the conversation." },
      { glitch: { near: true } },
      { choose: [
        { t: "(Step out through the gate and stand under the lamp with him.)", stat: { courage: 1 }, then: [
          { n: "She opened the side gate herself and went through it, and Minseok's newspaper rustled very loudly in the gatehouse and went still. She stood under the lamp beside him on the outside, on his side, on the frost, where she'd never stood. Not touching. Close enough to feel that he gave off no warmth and no smell, the way he never did, a man in the cold like a clean page." },
          { ifEpiRoute: 'jungwon', then: [
            { n: "He held out his right hand. Not for her to take, exactly. To shake. The way you'd close a contract. She put hers in it, and he held it, his fingers cold and dry round hers, and the hold went on one second past where a handshake ends, and then another, and he looked at their two hands under the lamp as if they were a move on a board he hadn't expected and was going to have to think about all night." },
            { s: 'jungwon', f: 'neutral', t: "Your hands are cold." },
            { s: 'solar', f: 'neutral', t: "So are yours." },
            { s: 'jungwon', f: 'neutral', t: "Yes. I don't mind." },
            { n: "He let go. He let go very carefully, finger by finger, the way you put down something that isn't yours." }
          ], else: [
            { n: "He didn't move closer. He didn't move away. He stood beside her under the lamp, looking at the harbor, and after a while he moved a half step so that he was between her and the wind off the water, and didn't mention it, and neither did she." }
          ] },
          { bond: { jungwon: 1 } }
        ] },
        { t: "*It's cold. You should go home.*", then: [
          { s: 'solar', f: 'neutral', t: "*It's cold. You should go home.*" },
          { s: 'jungwon', f: 'neutral', t: "*I'll go when your light goes out. I always do.*" },
          { s: 'solar', f: 'happy', t: "*It might be very late.*" },
          { s: 'jungwon', f: 'neutral', t: "*I'm aware.*" }
        ] },
        { t: "(Stay inside the gate.)", stat: { kindness: 1 }, then: [
          { n: "She stayed where she was, on the inside, with the bars between them, and put her hand on one of them. It was so cold it burned. He looked at her hand on the iron and very slightly, so slightly she nearly missed it, lifted his own, and then put it back at his side." }
        ] }
      ] },
      { n: "He stepped back. Out of the lamp, half into the dark, so the light was only on his shoes and the frost round them." },
      { ifEpiRoute: 'jungwon', then: [
        { n: "He bowed. And it was a fraction deeper than usual, she'd have sworn it, a fraction longer at the bottom of it, as if he'd lost count, which he never did." }
      ], else: [
        { n: "He bowed. Exactly as deep as always. Exactly as long. As if to show her that nothing about tonight, not the hair, not the frost, not the watch, had changed the angle by a single degree." }
      ] },
      { s: 'jungwon', f: 'neutral', t: "Good night, Solar-ssi. Jayu Park. At four. I'll write it down." },
      { s: 'solar', f: 'neutral', t: "You never write anything down." },
      { s: 'jungwon', f: 'happy', t: "No. But I'll remember that I said I would." },
      { n: "He went down the hill road on foot, unhurried, his hands at his sides, the sound of his good shoes on the frost going all the way down past the bend, and she stood at the gate with her hair blowing until she couldn't hear them any more, and then a little longer. In the gatehouse Minseok turned a page of the newspaper he hadn't been reading. Up the hill behind her, her own window was dark. She went in to put the light on, so that he'd have something to stand under." }
    ] }
  ]);
})();
