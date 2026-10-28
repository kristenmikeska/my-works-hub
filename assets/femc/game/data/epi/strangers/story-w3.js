/* The strangers epilogue, week 3 (3/4-3/9/2013): "bleeding". Epilogue batch 7, writer C. Merges into
   FEMC_EPI_WORLDS.strangers.events; never overwrites. Stage 3 all week (others see what's left behind); fights 2 and 3.

   Events (R.events)
     epi-s-dust          3/4  after, consumes     masks: the first yellow dust, the pharmacy errand with Yunjin (Mr. Oh drives);
                                                  the fever lie to the old pharmacist; a masked girl in a Gekkoukan uniform at the
                                                  crossing; her reflection wears the armband; Yunjin sees it and holds her arm.
     epi-s-karaoke       3/5  evening, consumes   room six: noraebang in the dust with Yunjin and the four girls; the bodyguard in
                                                  the corner by route (Haechan / Jungwon / Minseok); the Seollal lie to Chaewon;
                                                  "You keep looking at the clock."; two seconds of a song the machine doesn't have.
     epi-s-unseen        3/5  late                Fight 2 (epi-strangers-2): the fish market at midnight, half Tartarus; S.E.E.S.
                                                  can't see her; she lands on the back step by the koi bucket; who's on watch.
     epi-s-tide          3/6  early, consumes     the tide: before light, a blue butterfly draws her out onto the mudflats; the flood;
                                                  the tide stands still while she walks back; the fishermen see it; both boys on the
                                                  steps; Appa at the kitchen table at half past four; the radio's "unusual weather event".
     epi-s-hc-bridge     3/7  evening, consumes   route haechan (event gate flag epi-route-haechan): the Rexton on the long bridge in
                                                  the dust; the hazards; the name, spent.
     epi-s-jw-blackout   3/7  evening, consumes   route jungwon (flag epi-route-jungwon): dinner in Songdo, the glass city goes dark;
                                                  his watch in the dark; his right hand doesn't let go.
     epi-s-fam-yunjin    3/7  evening, consumes   route family (flag epi-route-family): Yunjin's room, nail polish, the drama; Solar's
                                                  hand goes thin under the brush. "Sol. Your hand."
     epi-s-call          3/7  late                Iwatodai Dormitory: the phone dials a number she never stored; Fuuka; the number
                                                  doesn't exist. Who's with her by route (the annex step / the gate / Yunjin in the doorway).
     epi-s-clocks        3/8  early, consumes     twelve: every clock in the Lee house at 12:00; the whole kitchen sees it.
     epi-s-molihua       3/8  late                molihua: 2 a.m., the annex radio sings Auntie Song's song by itself, loud; men from
                                                  outside the two houses at the back gate run; rags and gloves left in the lane.
     epi-s-unheard       3/9  late                Fight 3 (epi-strangers-3): the Lee house at midnight, half Tartarus; S.E.E.S. see her
                                                  and can't hear her; she lands on the seventh stair.

   Flags set     epi-s-dust, epi-s-unseen, epi-s-tide, epi-s-call, epi-s-clocks, epi-s-molihua, epi-s-unheard
                 local (choice detail, free for later files to read): epi-s-dust-said (she names the armband to Yunjin) /
                 epi-s-dust-quiet (she doesn't); epi-s-tide-looked (she turned and looked at the standing water);
                 epi-s-bridge-rail (she stood at the bridge railing, courage 2); epi-s-molihua-counted (she counted them from the window).
   Flags read    epi-route-haechan / -jungwon / -family (event gates and ifEpiRoute), epi-s-appa-lie / epi-s-appa-quiet (clocks).
                 The prose assumes epi-s-alliance (the watch shifts, 2/27) and epi-s-tables (the collar grip, 2/21) have happened.
   ifYear read   none. ifEpiRoute read: karaoke, unseen, tide, call, clocks, molihua, unheard.
   Glitches      epi-s-g-mask, epi-s-g-reflection (dust), epi-s-g-karaoke (karaoke), epi-s-g-unseen (unseen), epi-s-g-tide (tide),
                 epi-s-g-call (call), epi-s-g-clocks (clocks), epi-s-g-molihua (molihua), epi-s-g-unheard (unheard);
                 { stage: 3 } on both fight nights; { strain: 1 } after the fever lie to the pharmacist (dust) and the Seollal
                 lie to the girls (karaoke); { near: true } in karaoke (Haechan / Jungwon silent), the blackout, clocks (Haechan
                 in the doorway).
   Bonds         yunjin (dust, fam-yunjin), haechan / jungwon / appa by route (tide), haechan (bridge), jungwon (blackout),
                 by route (call). Music: epi-s-dust, epi-s-yunjin, epi-s-half, epi-s-tide, epi-s-haechan, epi-s-jungwon,
                 epi-s-call, epi-s-house, epi-s-danger.

   Inventions for Kat to confirm (small, structural)
     - The cover reached the pharmacy: over Seollal Mrs. Bang bought fever powders at the old pharmacy by Sinpo market that
       nobody needed, so the pharmacist would know. The pharmacist is unnamed, old, sold her cough syrup as a child.
     - The noraebang is the one with the half-belled tambourine (the activity's), room six. Haechan's one stray English word
       is "pitchy" (karaoke, his route).
     - The song the machine doesn't have is never quoted, only described; Yunjin and the boy on watch know it.
     - The watch shifts: the kitchen door is left on the latch for whoever has the night (unheard).
     - The Lee house sits on the hill above the seawall; the seawall steps go down to the flats at the bottom of it.
     - Mrs. Bang crosses herself (the brief's beat; she is Catholic). The hall clock was Solar's grandmother's.
     - Auntie Song dozes in her armchair by the stove on the nights she misses the last bus (molihua).
   Canon fences kept as the private plan sets them (Claude-only: DO-NOT-OPEN-epilogue-plan-private.md §4). */
(() => {
  const R = ((window.FEMC_EPI_WORLDS ||= {}).strangers ||= {});
  (R.events ||= []).push(

  // ───────────────────────────── 3/4, daytime: masks ─────────────────────────────
  { id: 'epi-s-dust', date: '3/4', slot: 'after', consumes: true, title: 'masks', place: 'Incheon · The Lee House · Kitchen', time: 'Daytime', scene: [
    { music: 'epi-s-dust' },
    { n: "The dust came in on Monday the way it came every March, overnight and without asking, off some desert nobody in the house had ever seen and across the Yellow Sea and up over the harbor while everyone slept, and by the time Solar came down the kitchen calendar said 40 and the window over the sink said nothing at all." },
    { n: "The sky had gone the color of weak tea. The barley kind, the kind Mrs. Bang forgot on the back of the stove and found again at noon, flat and brownish and lit from nowhere in particular, and the cranes down on the quays were just shapes in it, like somebody had drawn them on the glass with a wet finger and then thought better of it." },
    { n: "Mrs. Bang had already taken the washing in off the line and hung it on racks across the sunroom, muttering. She'd put a board over the koi bucket on the back step with a brick on it, and every so often she lifted the corner of the board to check on Mr. and Mrs. Kim, who went round in their gray water under the gray sky as if they'd seen worse, which they had." },
    { s: 'mrsbang', t: "Masks. The box by the door is empty. Ten people, ten masks, and Pyo took three because he says the dust gets in his ghost." },
    { s: 'pyo', t: "I said it gets in the *storeroom*, Mrs. Bang. Where the ghost—" },
    { s: 'mrsbang', t: "Aigoo. Agasshi. The pharmacy by the market. Two boxes. And the eye drops for Mr. Oh, he won't buy them himself, he thinks they're for old men." },
    { n: "Mr. Oh, at the end of the table with his tea, turned a page of nothing and didn't look up. He'd been told he was an old man by Mrs. Bang at least once a week for fourteen years and had never once agreed with her." },
    { n: "Yunjin came down the stairs two at a time in the orange puffer, the one she said made her look like a traffic cone and wore anyway because she said traffic cones were never in car accidents, the pink Canon swinging off her wrist on its plastic strawberry, and took a piece of Solar's toast off her plate on the way past without breaking stride." },
    { s: 'yunjin', f: 'happy', t: "Babe. Have you looked outside. The sky has a hangover. I'm going to photograph it for evidence." },
    { s: 'solar', t: "It's dust, Jin." },
    { s: 'yunjin', f: 'neutral', t: "It's *sepia*. We're in a period drama. You're the tragic daughter, I'm the loyal maid who gets all the best lines and dies in episode nine." },
    { s: 'mrsbang', t: "Nobody's dying in this house in episode anything. Masks. Two boxes. Go." },

    { place: 'Incheon · The Car', time: 'Daytime', soft: true },
    { n: "Mr. Oh drove them down the hill with the wipers going, which did nothing, because it wasn't rain, it was the whole sky settling on the windshield one grain at a time. Hands at ten and two. He never braked hard. He had never once braked hard in fourteen years, not in snow, not on the expressway at night with her asleep across the back seat, not ever, and she watched his hands on the wheel and counted the streetlights that had come on at eleven in the morning because the sensors thought it was evening." },
    { n: "He stopped at the top of the market street, where the lane got too narrow for anything bigger than a scooter, and turned round in his seat and held out two masks, white, from his own coat pocket, without a word." },
    { s: 'mroh', t: "Mask. One hour." },
    { n: "He didn't say please. He'd never said please. He'd been handing her things she needed without the word since she was seven and it was, she'd decided around the age of twelve, the most polite thing any man in the house did." },

    { place: 'Incheon · Street in the Dust', time: 'Daytime', soft: true },
    { n: "Outside it smelled like a building site. Like chalk and old pennies and the inside of a vacuum cleaner, and the grit was in her teeth before they'd gone ten steps, fine as flour, and the whole street had its mouth covered." },
    { n: "Everyone. The fish-cake woman at her cart, the boys on scooters, the old men outside the hardware shop on their plastic stools, a mother with a mask on herself and a smaller one with a cartoon rabbit on it on the baby in the carrier on her chest. White masks and gray masks and black ones on the young men, all of them, the length of the street, and over every one of them, just eyes." },
    { n: "Solar counted them without meaning to. It was what she did. Exits, men, cups on a table. Twenty-two people between the top of the street and the pharmacy door, and she couldn't read a single face, and for a girl from her house that should have been frightening, a whole street of men she couldn't tell apart, and it was. It was also, she noticed somewhere around the eleventh, the first time in three weeks she'd walked anywhere without anybody looking at her and seeing whose daughter she was." },
    { n: "Nobody could see faces. That cut both ways. She walked down the middle of it with her hair pinned up under her hood and her mask over her mouth and let it cut." },
    { s: 'yunjin', f: 'happy', t: "Okay, this is actually incredible. Nobody knows who I am. I could rob a bank. I could rob *this* bank." },
    { s: 'solar', t: "Please don't rob the post office." },
    { s: 'yunjin', f: 'neutral', t: "I'd give it back. I'd rob it emotionally." },

    { n: "The pharmacy was the old one with the green cross that had half its bulbs gone and the bell on the door that sounded like a bicycle, and the pharmacist was the same old man who'd sold her mother children's cough syrup with a lollipop taped to the box, fifteen years ago, when Solar had been small enough to see over the counter only if Mr. Oh lifted her." },
    { n: "He knew her eyes over the mask. Of course he did. He put his glasses up on his forehead to look at her properly, the way men his age did when they wanted you to know they were doing you the honor." },
    { s: 'man', t: "Lee agasshi. Well. Look at you, up and walking." },
    { s: 'solar', t: "Ajeossi. Two boxes of the masks, please. And eye drops." },
    { s: 'man', t: "Your housekeeper was in at Seollal for fever powders. Three packets, the strong ones. I said to my wife, that girl's never sick, that girl's never been sick a day since the chicken pox. She said Seollal, everyone gets sick at Seollal, it's all the bowing." },
    { n: "Solar stood very still in front of the counter with the bicycle bell still ringing faintly over the door behind her." },
    { n: "Three packets. The strong ones. Mrs. Bang had come down here, on a holiday, in the snow, with the shops half shut, and bought fever powders for a girl who wasn't in the house, so that one old man behind one counter by the market would know, and say it to his wife, and his wife would say it to whoever came in next. Her father hadn't just told the relatives. He'd built it. He'd built it out of things you could buy." },
    { n: "Her chest did something small and painful that she didn't look at." },
    { choose: [
      { t: "\"Thirty-nine point four. I couldn't keep rice down.\"", then: [
        { n: "It came out of her in Mrs. Bang's exact rhythm, the one she'd been drilled in at the kitchen table in front of everyone on her first morning home, and she heard it come out and was faintly impressed with herself and faintly sick about it, both at once." },
        { s: 'man', t: "Thirty-nine point four! At your age. Aigo. And you're out in this dust." },
        { s: 'solar', t: "Mrs. Bang sent me. Masks for the house." },
        { s: 'man', t: "That woman. Two boxes, and I'm putting in a ginseng drink, and you're drinking it here where I can see you." }
      ] },
      { t: "(Smile with your eyes and let Yunjin answer.)", stat: { kindness: 1 }, then: [
        { n: "She didn't even have to look round. Yunjin had already put both elbows on the counter." },
        { s: 'yunjin', f: 'serious', t: "Ajeossi, it was disgusting. I was there. She was green. Like, *green* green. I held her hair. I'll never be the same." },
        { s: 'man', t: "Is that right." },
        { s: 'yunjin', f: 'serious', t: "I still have flashbacks. I'm going to need the eye drops too, honestly. For the trauma." },
        { n: "The old man laughed so hard behind his mask he had to take his glasses off his forehead and wipe them, and put in a ginseng drink for each of them, free, and didn't ask anything else at all." }
      ] },
      { t: "\"Mrs. Bang worries. Did she clear you out of the strong ones?\"", needs: { charm: 2 }, stat: { charm: 1 }, then: [
        { n: "Light, a little rueful, the voice for her mother's friends at weddings. She turned it the way you turn a cup so the chip is at the back." },
        { s: 'man', t: "Three packets! I said to her, Mrs. Bang, the girl's not a horse." },
        { s: 'solar', t: "She'd have bought the horse ones if you had them." },
        { s: 'man', t: "She would. She would, that woman. Aigo." },
        { n: "He was laughing, and putting the masks in a bag, and talking about his own wife's opinion of Mrs. Bang's kimchi, and the fever had gone past both of them like a car on a wet road, and nobody had looked at it." }
      ] }
    ] },
    { glitch: { strain: 1 } },
    { n: "It held. Everything her father had built held, every time she leaned on it, and every time it held, something in her that she didn't have a name for got very slightly thinner, like ice on a puddle when you put your weight on it slowly, and listen, and don't hear it crack, and stand there anyway." },

    { n: "They came out with a bag each and the bicycle bell ringing behind them, and stood at the crossing at the bottom of the market street, waiting for the green man. The dust had thickened while they were inside. The far side of the road was there and not there, shopfronts and a bus shelter and a row of red plastic chairs outside a restaurant, all of it gone soft at the edges, like a photograph left in a window too long." },
    { n: "Yunjin had her camera up, photographing the traffic light, which she said was the only thing in Incheon today that still had a color." },
    { glitch: 'epi-s-g-mask' },
    { n: "There was a girl on the far side of the crossing." },
    { n: "She was standing by the bus shelter with her hands at her sides, in a mask like everyone, white, over her mouth and nose. Above it, her eyes, and they were looking at Solar. Not at the light. Not at the traffic. Straight across four lanes of dust, at her." },
    { n: "Black blazer. A white collar. A red bow at the throat, the particular red, the shade Solar had tied at her own throat every morning for a year in a dorm mirror by a bay. A short pleated skirt in March, in this, bare knees, no coat. A school uniform nobody in Incheon had ever worn, on a girl standing perfectly still in a street where everyone else was hunched against the grit, and the dust didn't seem to be touching her at all." },
    { n: "Gekkoukan." },
    { n: "Solar's whole body went quiet, the way it did. Not shaking. The shaking came later, when the door was shut. Now it just went still, every part of her at once, the bag of masks hanging from her fingers, and she looked at the girl's eyes over the mask and the girl looked back, and she knew those eyes, and she didn't let herself finish the thought of how." },
    { n: "A bus came through the crossing. Green, city, the 24, dust streaming off its roof, and it took about two seconds, and then it was gone." },
    { n: "The bus shelter. The red plastic chairs. Nobody." },
    { s: 'yunjin', f: 'neutral', t: "Green man. Sol. Green man, let's go, my teeth are full of China." },
    { n: "She went. She crossed. She stood on the exact square of pavement where the girl had been and there was nothing on it but dust, a fine even skin of it over everything, unbroken. No footprints. Not even hers, yet." },

    { n: "They walked back up the long way, past the shops on the hill, because Yunjin wanted a photograph of the hardware shop's mannequin in its welding mask, which she said was the only person in Incheon dressed correctly for the weather." },
    { n: "Next to the hardware shop there was a clothes shop that had closed in the autumn, the window papered halfway up from the inside and the top half left as plain dark glass, and in the dust and the flat tea-colored light it made a better mirror than most mirrors. Solar saw herself coming in it. A mask. Her hood. The black wool coat. Her own eyes, which looked tired, which she'd known." },
    { glitch: 'epi-s-g-reflection' },
    { n: "On the left sleeve of the girl in the glass, just below the shoulder, there was an armband." },
    { n: "Red. Pinned. Four white letters on it with dots between them, the way she'd pinned it on in the mornings without looking, the way you do your own buttons." },
    { n: "She looked down at her own sleeve. Black wool. A fleck of dust. Nothing." },
    { n: "She looked back at the glass. Red. Four letters. The girl in the window looking out at her with her eyes over the mask, wearing it like she had every right." },
    { n: "Beside her, Yunjin had lowered the camera." },
    { n: "Yunjin had lived in that dorm. Yunjin had come down the stairs in that dorm every morning for a year in a borrowed robe complaining about the coffee, and had seen that armband on that sleeve at that breakfast table more times than she could have counted if she'd tried. She knew exactly what the four letters were. She was looking at the window." },
    { n: "Yunjin, who had an opinion about everything, who had once talked for forty minutes on the phone about a pigeon on her balcony because the alternative was silence, who had never once in five years let a strange thing go past her without naming it something worse, didn't say anything." },
    { n: "A delivery truck went by behind them, and the glass went dark with it, and when it came back it was just a closed shop window with a girl in a black coat in it. Two girls. One of them in orange." },
    { choose: [
      { t: "\"You saw it.\"", flag: 'epi-s-dust-said', then: [
        { s: 'solar', t: "You saw it." },
        { n: "Yunjin didn't answer for long enough that the answer was the not answering. Then she slid her arm through Solar's, the camera swinging between them, and pulled her in tight against the orange puffer." },
        { s: 'yunjin', f: 'serious', t: "I saw a sad shop. That's all I saw. A sad little shop that closed in October." },
        { s: 'solar', t: "Jin." },
        { s: 'yunjin', f: 'serious', t: "I'm not doing it here, Sol. Not in the street. Not in the dust. Okay? Later. Ask me later." }
      ] },
      { t: "(Don't say anything either.)", flag: 'epi-s-dust-quiet', stat: { kindness: 1 }, then: [
        { n: "She didn't. Neither of them did. It sat there between them in the dust, the thing neither of them was saying, and it was the loudest thing on the street." },
        { n: "Then Yunjin slid her arm through Solar's, the camera swinging between them, and pulled her in tight against the orange puffer, and didn't let go." }
      ] }
    ] },
    { n: "She held on the rest of the way. Up the hill, past the old men on their stools, past the fish-cake cart, to Mr. Oh's car with its windshield gone yellow, all of it, her arm locked through Solar's like they were walking on ice, and didn't make a single joke, and didn't take any more photographs, and didn't let go even to open the car door. She opened it with her other hand, awkwardly, and got in first, and pulled Solar in after her by the elbow." },
    { n: "Mr. Oh looked at the two of them in the mirror. The bags. Yunjin's arm. Solar's eyes over her mask." },
    { s: 'mroh', t: "Belts." },
    { n: "He waited until they'd done them. Then he drove them home up the hill through the dust, hands at ten and two, so slowly and so smoothly that the bag of eye drops on the seat between them didn't move once the whole way, which was the most he could do, and he did it." },
    { bond: { yunjin: 1 } },
    { flag: 'epi-s-dust' }
  ] },

  // ───────────────────────────── 3/5, evening: room six ─────────────────────────────
  { id: 'epi-s-karaoke', date: '3/5', slot: 'evening', consumes: true, title: 'room six', place: 'Incheon · Karaoke', time: 'Evening', scene: [
    { music: 'epi-s-yunjin' },
    { n: "The girls had decided, in a group chat Solar had been added to at some point without anyone asking her, that the dust was not a reason. Chaewon had made a list. Sakura had booked the room. Kazuha had sent a long message about whether the dust carried spirits from the desert and whether this was good or bad, and Eunchae had replied to it with a single picture of a dog in a hazmat suit, and that had been the end of the debate." },
    { n: "Room six. The good one, Yunjin said, though it was exactly the same as rooms one to five: a horseshoe of red vinyl couch patched with silver tape, a low table sticky with something from a previous decade, two microphones on curly wires, a disco ball that didn't turn, and a tambourine that had lost half its bells and sounded like someone shaking a bag of keys. Outside the window the neon of the street came through the dust as halos, pink and green and blue, nothing with an edge." },
    { n: "Chaewon had her phone out with the list on it before anyone had their coats off." },
    { s: 'chaewon', t: "Rules. Everyone sings one. Nobody sings a ballad before nine. If anyone cries, it has to be in the chorus, not the verse." },
    { s: 'eunchae', t: "What if it's a really sad verse." },
    { s: 'chaewon', t: "Then you hold it." },
    { s: 'sakura', t: "I'm going first. I know the number. I want the score before the machine warms up and gets generous." },
    { s: 'kazuha', t: "It's cold in this corner. Is anyone else cold in this corner? It's only this corner." },
    { s: 'yunjin', f: 'happy', t: "Kazuha, it's March and the heater's from 1997." },
    { s: 'kazuha', t: "That's what they'd want you to think." },
    { n: "Sakura punched in five digits from memory without looking at the book, and the screen went to a waterfall and a couple walking on a beach in slow motion, and she sang an idol song from three years ago in a flat, perfect, unbothered voice with one hand in her coat pocket, and got a 97, and looked at the 97 like it had personally disappointed her." },

    // The bodyguard in the corner, by route.
    { ifEpiRoute: 'haechan', then: [
      { n: "In the corner by the door, on the end of the couch nobody else wanted because it was the one with the spring, sat the bodyguard. The house didn't let her out after dark without one now, not this month, and tonight it had sent Haechan, who had his black padded jacket on and his arms crossed over it and was chewing cinnamon gum with the slow, deliberate rhythm of a man who intended to judge every song in this room and had already found most of them wanting." },
      { n: "Yunjin had introduced him to the girls at the door as delivery boy. He had bowed to them, very low, very correct, and then sat down and put his boots on the table." },
      { s: 'haechan', f: 'neutral', t: "Ninety-seven. She was flat on the bridge." },
      { s: 'sakura', t: "...Excuse me?" },
      { s: 'haechan', f: 'neutral', t: "The second time. Going up. Flat." },
      { n: "Sakura looked at him for a very long time. Then she put the microphone down on the table, slowly, the way you'd lay down a glove." },
      { s: 'sakura', t: "Pick a song." },
      { s: 'haechan', f: 'happy', t: "I'm working, agasshi. I'm furniture." }
    ] },
    { ifEpiRoute: 'jungwon', then: [
      { n: "In the corner by the door, on the end of the couch nobody else wanted because it was the one with the spring, sat the bodyguard. The house didn't let her out after dark without one now, not this month, and tonight, by some arrangement between two houses that Solar had been told about only afterwards, it was Jungwon." },
      { n: "He'd kept his dark coat on. He sat perfectly upright, the way he sat in his father's dining room, his hands resting on his knees, and he applauded every song, all of them, with exactly three claps, the same three, measured, polite, the way you'd applaud a speech at a funeral. It was somehow worse than if he'd booed." },
      { n: "Yunjin had introduced him to the girls at the door as the fiancé, in a voice like she was announcing a weather warning. Eunchae had looked at him, and at Solar, and at him again." },
      { s: 'eunchae', t: "Is he the bodyguard or the fiancé?" },
      { s: 'solar', t: "Yes." },
      { s: 'jungwon', f: 'happy', t: "Ninety-seven is a very good score. Congratulations." },
      { s: 'sakura', t: "...Thank you?" },
      { n: "Three claps. The dimples, both of them, deep and sweet and entirely for show. Sakura looked at Solar with the face of a girl who'd just been complimented by a very well-dressed knife." }
    ] },
    { ifEpiRoute: 'family', then: [
      { n: "In the corner by the door, on the end of the couch nobody else wanted because it was the one with the spring, sat the bodyguard. The house didn't let her out after dark without one now, not this month, and tonight it had sent Minseok, who was the size of the door he was sitting next to and had been her father's man since before she could walk." },
      { n: "He'd taken the complimentary bowl of shrimp crackers on to his knee at the start and was working through it one at a time, silently, with total concentration, like a man defusing something. When Sakura got her 97 he stopped chewing, and nodded at her once, gravely, as if she'd done something for the country." },
      { s: 'minseok', t: "Good." },
      { s: 'sakura', t: "...Thank you." },
      { s: 'kazuha', t: "I like him. He's like a big quiet bear who guards a shrine." },
      { s: 'minseok', t: "Agasshi. Who is this one." },
      { s: 'solar', t: "Kazuha. She's harmless." },
      { n: "Minseok looked at Kazuha with deep suspicion and ate another shrimp cracker." }
    ] },

    { n: "Chaewon sang next, something bright and sensible with a key change she hit squarely, and Eunchae sang a song about a breakup she was four years too young to have had, with her eyes shut and her hand on her heart, and got a 78, and said the machine was a misogynist." },
    { n: "Then Chaewon sat down next to Solar on the patched vinyl with a glass of the free barley tea, the way you'd sit down next to somebody at a hospital, and lowered her voice under the next song's intro." },
    { s: 'chaewon', t: "Yunjin told us you were really sick over Seollal. Are you okay now? You still look kind of pale. Sorry. That's rude. You look pretty. And pale." },
    { s: 'eunchae', t: "If you'd died I'd have written you a eulogy. It would've rhymed. I'd only just met you, so it would've been mostly about your coat." },
    { n: "It was so ordinary. That was the thing. Four girls from a dance studio in Songdo who'd come to drag Yunjin out of her father's death because they didn't know what else to do, and here was the question, the same question, arriving in a room with a broken tambourine, sitting down beside her on the vinyl, kind." },
    { s: 'solar', t: "Mrs. Bang wouldn't let me out of bed for a week. She took my phone. She said the screen would keep the fever in." },
    { s: 'chaewon', t: "Is that a real thing?" },
    { s: 'solar', t: "In our house it is." },
    { s: 'eunchae', t: "Your house sounds terrifying. I want to live there." },
    { glitch: { strain: 1 } },
    { n: "Chaewon nodded, and patted her knee once, firmly, organizer to the end, and went back to her list. It held. The fever was in the pharmacy now and in a karaoke room in the dust, being believed by people who loved Yunjin, which was a kind of loving her by proxy, and she sat with it in her lap like the free barley tea and didn't drink it." },

    { n: "She looked at the clock in the corner of the screen. 9:41. She looked at it again." },
    { n: "Eunchae had her chin in her hand, watching her. Eunchae was the youngest of them and the loudest and she missed nothing, ever, it was the most annoying thing about her and Yunjin's favorite." },
    { s: 'eunchae', t: "You keep looking at the clock." },
    { s: 'solar', t: "Curfew." },
    { s: 'eunchae', t: "You're twenty-one." },
    { s: 'solar', t: "Twenty-one in my house is about nine." },
    { s: 'eunchae', t: "That's not what I mean. You look at it like it's going to do something." },
    { n: "Solar picked up the song book, which was the size of a phone directory and smelled like the inside of a bus, and opened it to nowhere, and turned a page." },
    { choose: [
      { t: "(Pick a trot song and hold the microphone out to the corner.)", stat: { courage: 1 }, then: [
        { ifEpiRoute: 'haechan', then: [
          { n: "She punched in the number. An old one, her father's kind, all heartbreak and harbor, and held the microphone out across the table toward the end of the couch without looking." },
          { n: "Haechan looked at the microphone. He looked at Sakura, who was watching him with her arms folded. He took his boots off the table." },
          { n: "Then he sang it, standing, one hand in his jacket pocket, and he sang it *well*. He sang it the way he sang it in the car with her father, on purpose, perfectly, with every little sob in the right place and the vibrato rolling like a boat on a swell, to annoy everyone, and Kazuha put both hands over her mouth, and Chaewon forgot her list, and Eunchae screamed on the high note, and the machine gave him a 100 and set off fireworks on the screen that nobody in the history of room six had ever seen." },
          { n: "He sat back down. He put his boots back on the table." },
          { s: 'haechan', f: 'neutral', t: "Furniture." },
          { s: 'sakura', t: "I hate you." },
          { s: 'haechan', f: 'happy', t: "Everybody does, agasshi. Get in line." }
        ] },
        { ifEpiRoute: 'jungwon', then: [
          { n: "She punched in the number. An old one, her father's kind, all heartbreak and harbor, and held the microphone out across the table toward the end of the couch without looking." },
          { n: "Jungwon looked at the microphone in her hand for a long moment with the face of a man being offered a live fish." },
          { s: 'jungwon', f: 'neutral', t: "I'm afraid I don't sing." },
          { s: 'solar', t: "Everyone sings one. Chaewon's rules." },
          { s: 'chaewon', t: "It's true. They're my rules." },
          { n: "He took it, in his right hand. He stood. He sang it." },
          { n: "He sang the whole thing without a single wrong note and without a single expression, perfectly in tune, every word of heartbreak and harbor delivered in the exact courteous register he used for menus and the weather, as if reading a contract aloud to a room that had asked for it. It was the most frightening thing Solar had ever heard in a karaoke room. The girls were enchanted. Kazuha cried a little. The machine gave him a 99." },
          { s: 'jungwon', f: 'happy', t: "Thank you. That was very kind of it." },
          { n: "He sat down and applauded himself. Three claps." }
        ] },
        { ifEpiRoute: 'family', then: [
          { n: "She punched in the number. An old one, her father's kind, all heartbreak and harbor, and held the microphone out across the table toward the end of the couch without looking." },
          { s: 'minseok', t: "No." },
          { s: 'eunchae', t: "Minseok-ssi. Minseok-ssi. Minseok-ssi." },
          { s: 'minseok', t: "No." },
          { n: "Four girls and Yunjin said his name in a slow chant, banging the table, until the tambourine fell off it. He put down the shrimp crackers. He stood up, which took a while. He sang it." },
          { n: "He sang it terribly. Gloriously, completely terribly, half a tone under the whole way and very, very loud, with his eyes shut and his free hand opening and closing at his side on the long notes like he was trying to catch them, and he meant every word, and the girls were on their feet by the second verse and Yunjin was filming it on the pink Canon with the strawberry swinging, and the machine gave him a 61, and he looked at the 61 for a moment and sat down, satisfied, and picked the shrimp crackers back up." },
          { s: 'minseok', t: "The Chairman sings it better." },
          { s: 'solar', t: "Don't tell him I made you." },
          { s: 'minseok', t: "I'll tell him tonight." }
        ] }
      ] },
      { t: "(Make Yunjin sing the duet with you.)", stat: { charm: 1 }, then: [
        { n: "She found it in the book without having to look, because it had been their song in tenth grade in a different noraebang in Songdo after an English test, the girl part and the boy part, and Yunjin had always taken the boy part and done it in a ridiculous deep voice with her chin tucked in." },
        { s: 'yunjin', f: 'surprised', t: "Oh, you're *kidding* me." },
        { n: "She did the voice. She did the chin. She got down on one knee on the sticky carpet for the bridge and sang it up at Solar like a man in a drama proposing in the rain, and Solar sang the girl part straight, which was funnier, and the four girls lost it entirely, and for three minutes and forty seconds it was tenth grade and nobody's father was dead." },
        { n: "They got an 88. Yunjin made Sakura photograph it." }
      ] },
      { t: "(Hand the book to Kazuha. Ask her about the cold corner.)", then: [
        { s: 'kazuha', t: "Oh. Well. It's a ghost. I think. A small one. Somebody who loved singing and never got to finish a song." },
        { s: 'sakura', t: "It's a draft. The window doesn't shut." },
        { s: 'kazuha', t: "Everything's a draft to you, Sakura. You'd say a ghost was a draft if it sat on your face." },
        { n: "Then Kazuha said something else, quietly, not to any of them, in Japanese, to the cold corner, the way you'd talk to a cat under a car: *it's all right, you can stay, nobody minds.*" },
        { n: "And Solar, who had spent a year in a city where everyone spoke like that, heard herself answer before she could stop it. *It isn't lonely. It's just lost.*" },
        { n: "Kazuha turned her head and looked at her. Soft, odd, wide-eyed, and absolutely sure of something." },
        { s: 'kazuha', t: "...You understood me." },
        { s: 'solar', t: "Yunjin taught me some." },
        { s: 'yunjin', f: 'neutral', t: "I did. I'm very cultured." },
        { n: "Kazuha didn't look away from her for the whole of the next song." }
      ] }
    ] },

    { n: "It was in the gap between songs that it happened. The little dead space where the machine went to its waiting screen, the waterfall, the beach, the couple in slow motion, and loaded the next number, and everybody reached for their barley tea." },
    { glitch: 'epi-s-g-karaoke' },
    { n: "The waterfall went black. And out of both speakers at once, loud, came two seconds of a song the machine didn't have." },
    { n: "A drumbeat she knew in her teeth, and a guitar going up under it, and a voice in English coming in hard on the first word. She'd heard it a thousand times. She'd heard it on a hundred floors of a tower that wasn't there, every night for a year, in the green, with a weapon in her hands and someone she loved calling a Shadow's weakness out of the dark, and it went right through room six like a draft through a door and was gone." },
    { n: "The waterfall came back. The beach. The couple." },
    { s: 'eunchae', t: "What was *that*?" },
    { s: 'chaewon', t: "The machine's glitching. It does that. It's the dust, it gets in the electrics." },
    { s: 'sakura', t: "That's not in the catalog. I know the catalog. I've done all of it. That song isn't in there." },
    { s: 'kazuha', t: "It's the ghost. I told you. It's the ghost and it wanted its song." },
    { n: "Solar didn't move. Her hand was round her paper cup and the barley tea in it had a ring of tiny ripples going out from the middle, very fast, which meant her hand was doing something she hadn't told it to." },
    { n: "Yunjin was looking at her across the table. Not joking. Yunjin had heard that song come up through the floor of a dorm every night for a year. Yunjin knew exactly what it was." },
    { ifEpiRoute: 'haechan', then: [
      { n: "In the corner, Haechan had stopped chewing. His boots were still on the table, his arms still crossed, his face doing nothing at all, and he'd gone so quiet that the quiet came off him like heat off an engine. She knew that quiet. It was the only thing about him that never lied." },
      { glitch: { near: true } },
      { n: "When Eunchae said it again, *seriously, what was that*, he unfolded his arms and put a fresh piece of gum in his mouth, and said one word to the room, flatly, in English, before he could stop it." },
      { s: 'haechan', f: 'neutral', t: "...Pitchy." },
      { n: "The whole room stared at him." },
      { s: 'yunjin', f: 'surprised', t: "Did delivery boy just speak *English*?" },
      { s: 'haechan', f: 'flustered', t: "I said nothing. I'm furniture. Furniture doesn't speak English." }
    ] },
    { ifEpiRoute: 'jungwon', then: [
      { n: "In the corner, Jungwon's hands were still on his knees. He hadn't clapped. It was the first song he hadn't clapped for all night, and he was looking at the screen with his face gone perfectly still, not the polite stillness, the other one, and his right hand had moved, just slightly, to rest over the face of his watch, as if to stop it hearing." },
      { glitch: { near: true } },
      { n: "When Eunchae said it again, *seriously, what was that*, he turned his head and looked at Solar across room six, a long level look, and said nothing to anybody, and then he applauded. Three claps. For the ghost." }
    ] },
    { ifEpiRoute: 'family', then: [
      { n: "In the corner, Minseok had put down the shrimp crackers and was looking at the speaker on the wall the way he'd look at a dog that had growled at him." },
      { s: 'minseok', t: "Broken." },
      { n: "Then he looked at Solar. Then, because her father's men noticed what her father noticed, at her hand on the paper cup." },
      { s: 'minseok', t: "Agasshi. Home?" },
      { s: 'solar', t: "One more song." }
    ] },
    { n: "Chaewon, who was the kind of girl who restored order in a fire, put the next number in, and it was something bubbly and stupid with a dance in the chorus, and the four of them got up and did the dance from memory, all of it, the old studio choreography, and pulled Yunjin up into the middle of it. And after a verse Yunjin stopped looking at Solar and started laughing, really laughing, in her new gravel voice that was lower than it used to be and cracked at the top now, and it was good. It was a good thing to watch." },
    { n: "Solar watched it. The clock in the corner of the screen said 10:12. She didn't look at it again. She sat on her hands so she wouldn't." }
  ] },

  // ───────────────────────────── 3/5, late: fight 2, unseen ─────────────────────────────
  { id: 'epi-s-unseen', date: '3/5', slot: 'late', title: 'unseen', place: 'Incheon · The Lee House · Her Room', time: 'Late Night', scene: [
    { music: 'epi-s-half' },
    { n: "She'd washed her hair to get the dust out and it was still in her teeth. Everything in the house tasted of it: the toothpaste, the tap water, the last of the barley tea in the cup on her nightstand. Her hair was down, damp, over the shoulders of her boat pajamas, the old flannel ones with the little blue boats she'd had since she was seventeen and would deny owning under oath." },
    { n: "She sat on the bed with her back against the wall and her knees up, and watched the clock." },
    { n: "She'd learned. She'd learned that much in a week. You didn't lie down at a quarter to twelve in this house any more, not on the bad nights, not when the tide was going out under the hill and the dust was hanging over the garden in the yellow of the lanterns like something waiting to be told it could come in." },
    { ifEpiRoute: ['haechan', 'family'], then: [
      { n: "Down the garden, in the annex window, the old silver radio was a shape on the sill, and the light behind it was on. His night. She could see the line of it under the steel door, and once, his shadow going across it, and back. He wasn't asleep. He'd said he wouldn't be." }
    ], else: [
      { n: "Out at the front of the house, under the red lanterns on the gate, there was a dark coat. His night. He was standing where he'd stood on the first morning, hands at his sides, not leaning on anything, because she didn't think he knew how to lean. He wasn't looking at her window. He was looking at the street. That was how she knew he was looking at her window." }
    ] },
    { n: "11:58. The radiator knocked twice and gave up." },
    { n: "11:59. She turned the jade ring on her right hand. Once. Twice. Counting. She didn't know what she was counting." },
    { glitch: { stage: 3 } },
    { glitch: 'epi-s-g-unseen' },
    { place: 'Incheon · Fish Market at Midnight', time: 'Midnight' },
    { dark: true },
    { n: "Ice." },
    { n: "That was the first thing. Cold under her bare feet, wet, and the smell, all at once, salt and diesel and cold blood and the sweetish rot under the drains, and she was standing in the third aisle of the fish market in her boat pajamas with the long shed going away from her on both sides into the dark." },
    { n: "The bulbs on their wires were dead, every one, the whole length of the shed, and the light was coming from nowhere, green, the color of the bottom of a pool. The troughs of ice down every stall had gone black and glassy. In the flounder tanks the fish hung in water that didn't move, white bellies, perfectly still, mid-turn, like somebody had stopped them between one thought and the next." },
    { n: "Where the men would have stood, at every stall, there were coffins. Upright. Tall and black and patient, one behind each board, one by each scale, one by the octopus tanks, standing where somebody's father would be at five in the morning shouting prices. Over the stalls a gull hung in the air with its wings out, not flying, not falling. She'd seen that gull before. She'd seen it a week ago, in daylight, at the exact second a hammer fell." },
    { n: "Past the end of the aisle, where the dock doors should have opened on the harbor, the floor went on. Black and gold tile, and the light at the end of it the particular wrong gold she knew the way you know your own handwriting." },
    { n: "Her hand closed. The haft was there before she'd finished reaching for it. Cold. Smooth. Exactly the right weight, the blade end tipping past her shoulder, as if it had been waiting under the ice." },
    { n: "Then the dock doors banged, and they came in." },
    { n: "The way they always came. A boxer's walk first, white hair, gloves already up, coat flaring. Then the others falling in round him the way they'd fallen in round her a hundred nights, a boy with a cap and a sword over his shoulder, a girl with a bow, a blonde girl who moved like something machined, and between their feet a small white dog with a red collar, nose down, tail up, all business." },
    { n: "Akihiko went straight past her." },
    { n: "Not round her. Past. His shoulder went by a hand's width from hers, and he was looking down the aisle at the gold end, at something coming up out of the tile on too many legs, and his jaw was set the way it set when he'd already decided, and she said his name." },
    { n: "She said it into his back. Loud. She said it the way you'd shout across a quay in a high wind, and it went out of her and into the green and didn't land anywhere, didn't even make the dead bulbs swing, and his back went on, away from her, down the aisle, the coat, the white hair, his gloves coming up." },
    { n: "Koromaru stopped." },
    { n: "Dead, in the middle of the aisle, his claws skidding on the black ice, and he turned his head and looked at the exact place where she was standing, and barked. Once. Sharp. Then again, and again, his whole small body going with it, barking at nothing, at an empty patch of fish-market floor between two coffins, his tail going so hard his back end swung." },
    { n: "*Koro. Easy. There's nothing there.* Akihiko didn't look round. *Come on. Heel.*" },
    { n: "And from everywhere and nowhere, the voice she'd have known in her sleep, soft, worried, reading the room. *Something's wrong with my readings. There's something with you. In the middle. I can't find its shape. It isn't hostile. It's just... there.*" },
    { battle: { id: 'epi-strangers-2', kind: 'scripted', script: 'epi-strangers-2', title: 'Unseen', forced: true, desc: 'The fish market at midnight, half Tartarus. S.E.E.S. are fighting there, and they can’t see her.', notes: 'Half-present fight 2 (FEMC-EPILOGUE-PLAN 2.4): the ghost slot. Solar is in the party but untargetable, acts every other round; allies Act Freely; no Bond / All-Out / Theurgy. Her heals land and they ask who did it. Cannot be lost: she fades home instead.' } },
    { n: "She fought anyway. Her hands knew how. She moved with them down the third aisle the way she'd moved with them a hundred nights, between the coffins, over the black ice, and nobody made room for her and nobody had to, because nothing touched her. Not the Shadows. Not the light. Not them." },
    { n: "When the boy with the cap went down on one knee by the octopus tanks with his hand pressed flat to his side, she healed him. She didn't think about it. The light went out of her and into him and he came up off the floor like somebody had pulled him by the collar, and he looked at his own hand, and then round, wildly, at all of them." },
    { n: "*Yo. Who did that? Who healed me? Was that you?* The girl with the bow shook her head. *Wasn't me.* *Then who—*" },
    { n: "Nobody answered him. She was standing right beside him. She was standing so close she could see the scuff on the peak of his cap where he always grabbed it." },
    { n: "When the last of them came apart against the scales at the end of the aisle, Koromaru trotted back down the ice and sat down in front of her, exactly in front of her, and looked up, tail sweeping, pleased with both of them. She knelt in the wet in her pajamas. She put her hand out." },
    { n: "His nose went through her palm. Cold. Like putting her hand into the sea. He sneezed, offended, and looked at her like it was her fault." },
    { n: "*Koro.* Akihiko had stopped at the dock doors. He looked back down the aisle, once, at his dog sitting in front of an empty patch of floor in a fish market none of them had ever seen, the green light on the black ice. His jaw went tight, the way she'd seen it go exactly twice in her life. Then he turned and went out into the dark, and the dog went too, slowly, looking back the whole way." },
    { dark: false },
    { place: 'Incheon · The Lee House · Garden', time: 'Late Night', soft: true },
    { n: "Cold. Concrete. Wet." },
    { n: "She was sitting on the back step of the house in the dust, in her pajamas, barefoot, with her knees drawn up and her right hand still held out in front of her, palm open, toward nothing. The koi bucket was beside her with Mrs. Bang's board on it and the brick on the board. Through the kitchen window behind her, the clock on the wall said 12:04." },
    { n: "Her palm was cold where the dog's nose had gone through it. Colder than the step. Colder than the night. On the sleeve of her pajamas, just above the wrist, there was a fish scale. One. Silver, the size of a fingernail, stuck flat to the flannel and catching the lantern light, and there were no fish in this garden that had ever been allowed out of their bucket." },
    { ifEpiRoute: ['haechan', 'family'], then: [
      { n: "The annex door banged open at the bottom of the garden. He came up the path at a run, in his socks, no jacket, and stopped dead three steps below her, and didn't say anything." },
      { n: "That was how she knew how bad it had been. Haechan always said something. He said something when he was bleeding, when he was lying, when the Chairman was looking at him over his glasses. He stood on the path in the dust with his hands open at his sides and said nothing at all." },
      { n: "Then he came up the last three steps and sat down next to her on the cold concrete, close enough that his shoulder was against hers, and looked at the fish scale on her sleeve." },
      { s: 'haechan', f: 'serious', t: "Window went green. Your window. Then the whole back of the house." },
      { s: 'solar', t: "I was at the market." },
      { n: "He looked at the scale for a long time. Then he picked it off her sleeve with his thumb and finger, carefully, the way you'd pick a splinter, and held it up to the lantern, and put it in his jacket pocket. His jacket was in the annex. He put it in his shirt pocket instead." },
      { s: 'haechan', f: 'neutral', t: "Market doesn't open till three, agasshi." }
    ], else: [
      { n: "The side gate clicked. He came round the corner of the house in the dark coat, fast, not running, Jungwon didn't run, and stopped at the bottom of the step, and looked at her, and his face did nothing at all for one long second." },
      { s: 'jungwon', f: 'serious', t: "The whole back of the house. Green. For four minutes." },
      { n: "Four minutes. He'd have counted. He'd have stood at the front gate with his watch and counted every second of it." },
      { n: "He crouched in front of her on the path, carefully, and looked at the fish scale on her sleeve, and then he reached out with his right hand and put two fingers on the inside of her wrist, the way you check for a pulse, and kept them there, and didn't say anything until he'd counted to whatever he needed." },
      { s: 'jungwon', f: 'neutral', t: "You're very cold." },
      { s: 'solar', t: "I was at the market." },
      { n: "His fingers didn't move off her wrist." },
      { s: 'jungwon', f: 'neutral', t: "It doesn't open until three." }
    ] },
    { choose: [
      { t: "\"They couldn't see me. Any of them. The dog could.\"", then: [
        { n: "She told him. All of it, plainly, in order, the ice and the coffins and the gull and the boxer's back going past her. She didn't leave anything out. She didn't leave things out with either of them, that was the rule, she'd made it in a harder month than this one and it had held through worse." },
        { ifEpiRoute: ['haechan', 'family'], then: [
          { n: "He listened the way he listened to the Chairman: all the way through, without moving, with his eyes on the middle distance. When she got to the dog he looked away down the garden at the annex for a while." },
          { s: 'haechan', f: 'sad', t: "Dog's got sense." }
        ], else: [
          { n: "He listened the way he played baduk against himself: all the way to the end of the line before he moved. When she got to the dog his fingers pressed, once, on her wrist." },
          { s: 'jungwon', f: 'sad', t: "Dogs usually know." }
        ] }
      ] },
      { t: "(Put your cold hand in his. Don't say anything yet.)", stat: { kindness: 1 }, then: [
        { n: "She didn't say anything. She took her hand back from the night, the one the dog had gone through, and put it in his, palm to palm, and let him find out how cold it was by himself." },
        { ifEpiRoute: ['haechan', 'family'], then: [
          { n: "He flinched. Then he closed his hand round it and put both their hands inside the front of his shirt, against his stomach, without a word, the way you'd warm a kid's hands at a bus stop, and sat there with his jaw tight while it worked." }
        ], else: [
          { n: "He took a breath in very slowly through his nose. Then his hand closed round hers, his right, and held it, and that was all, and he didn't let go until her fingers had stopped hurting." }
        ] }
      ] }
    ] },
    { n: "They stayed on the step until the kitchen clock said half past. The dust kept settling on the board over the koi, on the brick, on her bare feet, on both of them. Neither of them suggested going in. Inside was where you fell asleep, and they both knew what happened then." },
    { flag: 'epi-s-unseen' }
  ] },

  // ───────────────────────────── 3/6, before light: the tide ─────────────────────────────
  { id: 'epi-s-tide', date: '3/6', slot: 'early', consumes: true, title: 'the tide', place: 'Incheon · The Mudflats', time: 'Before Light', scene: [
    { music: 'epi-s-tide' },
    { n: "The tide went out at a quarter past three and she felt it go, the way she always had, the whole bay pulling back off the mud under the hill like a sheet being drawn off a bed, and she lay in the dark with her eyes open and listened to it and knew she wasn't going to sleep again." },
    { n: "At five she gave up. Jeans over the boat pajamas, her father's old fishing jumper from the hall cupboard, her boots, the black coat. Hair down. Nobody would see. The house was dark except the kitchen, where her father would be at the table in half an hour with the paper, and she went out the front way so she wouldn't have to pass him, and down the hill in the gray to the seawall, the way she'd done on bad nights since she was fourteen." },
    { n: "She always stood at the top of the steps. Always. Twelve stone steps down the face of the seawall to the flats, slimed green at the bottom, and she'd stood at the top of them a hundred times and never once gone down past the third, because past the third was where the water came, twice a day, deep enough to stand over a man's head, and she was the port's daughter, and she couldn't swim, and she had never told anybody that the thing she was most afraid of in the world was right there at the bottom of her own street." },
    { n: "The dust was over the water this morning. Over the mud, rather, the whole bay gone out to a gray line so far off it might have been the sky. The flats went away from her shining, wet, ribbed, cut through with the little channels the tide left behind, and the dust lay on all of it like breath on a window, and there was no horizon, just gray going into gray, and somewhere out there a long way off the cranes of the airport island were blinking red, slow, like something asleep." },
    { n: "Along the seawall to her left, three men had set up their rods on the parapet, the way the old men did when the tide was out and coming back, waiting for the flood to bring the fish in under the wall. Thermoses. A radio on low. One of them nodded at her. She nodded back. She'd seen them before. They'd seen her before. A girl who came and stood at the top of the steps at five in the morning and never came down." },
    { n: "Then there was a butterfly on the step." },
    { n: "The fourth step down. Blue. Not a blue anything in Incheon was in March, not a blue anything was in Incheon ever, a deep bright electric blue like the inside of a gas flame, wings opening and closing slowly on the wet green stone, in the dust, in the cold, at five in the morning, as if it had every right to be there." },
    { n: "She knew that blue. She'd seen it on a staircase in a dream once, a long time ago, in a room that was all velvet." },
    { n: "It lifted off the step and went out over the mud, low, slow, toward the gray." },
    { n: "She went down the steps." },
    { n: "She didn't decide to. That was what she'd think about later, in the kitchen, with her hands round a cup. She never decided. She was at the top, and then she was on the third step, and the fourth, past the line, and her boots were on the slime and then in the mud, and the mud took them to the ankle with a cold sucking pull, and she was walking out onto the flats after a butterfly with her hair down in the dust, and some part of her that had always counted things was counting her steps, and then it stopped." },
    { n: "The mud was the color of wet cement and it was full of holes, crab holes, thousands, and little spits of water coming out of them as she passed. Her boots made a sound like a kiss every time she pulled them out. The channels went past under her, small ones, a hand wide, then a foot, then one she had to step across with her coat held up, running with an inch of clear water going the same way she was. Out. The butterfly went on ahead of her, a little blue tear in the gray, never further, never nearer." },
    { n: "She didn't look back at the wall. She'd think about that later too." },
    { n: "Then she heard it." },
    { n: "A hiss. Low. Everywhere. Like a long breath let out through teeth, coming from the gray in front of her and the gray on both sides, and the little channel at her feet, the one running out, had stopped running. It sat there. Then, while she watched, it began to run the other way." },
    { n: "The flood." },
    { n: "She knew the tables. She knew them by heart, she'd known them by heart since she was nine, she could have told anyone in the house to the quarter hour when the water would turn under the harbor wall on any night of the year. And she'd known it this morning. Low at a quarter past three. Turning by five. Coming back across the flats the way it came here, which was the way it came nowhere else she'd ever read about: not in waves but all at once, a sheet of it, shallow and fast, running in over the mud faster than a person could walk in mud, filling the channels first. Behind you. That was how people drowned out here. Not by walking into the sea. By the sea coming round behind them, in the channels they'd stepped across, while they were looking at something else." },
    { n: "She turned round." },
    { n: "The seawall was a long way away. Much further than she'd walked. It was so far away the three men on the parapet were the size of matches, and between her and them the channels she'd stepped across were all running, all of them, silver, filling, joining, and the mud between them was already shining with a skin of water that hadn't been there a minute ago." },
    { n: "And out in front of her, out of the gray, the tide was coming." },
    { n: "Not a wave. A line. Gray water with a lip of dirty foam along the front of it, a foot high, then more, the whole width of the bay, coming in across the flats at the pace of a man running, and the sound of it was the hiss, louder, the sound of a whole sea dragging itself home across the mud." },
    { n: "Her body did what it always did. It went still." },
    { n: "Completely. Her hands. Her breath. Her heart, for a second, she could have sworn. She stood in the mud to her ankles with the water running past her boots in the channels and the gray coming at her, and she didn't shake, and she didn't scream, she was the port's daughter and she had been afraid of exactly this every day of her life, and now it was here, and she was very calm about it, in the way you are calm about a thing you've always known." },
    { n: "Somewhere very far off on the seawall, a man was shouting." },
    { glitch: 'epi-s-g-tide' },
    { cg: 'epi-s-tide' },
    { n: "The tide stopped." },
    { n: "It stopped thirty meters from her. The whole line of it, the foam lip, the gray behind, the whole width of the bay, stopped where it was, standing up off the mud like a wall of dirty glass, higher than a house, and didn't fall. It didn't fall. It stood there. She could see things in it. Weed hung in it mid-roll. A plastic bottle, upright, in the face of it, perfectly still, like a fly in amber. The foam on the top was frozen in the act of curling over." },
    { n: "The hiss had stopped. Every sound had stopped. The channels at her feet had stopped running, mid-flow, the water sitting in them with its little ripples standing up and not moving. In the gray above it all, a gull hung with its wings out." },
    { n: "One second. Two. Longer. It went on being longer." },
    { choose: [
      { t: "(Run.)", stat: { courage: 1 }, then: [
        { n: "She ran. You can't run in mud. She ran anyway, the way you run in dreams, the mud taking her boots to the shin and giving them back with a sound like tearing, her coat dragging, her hair in her mouth, straight at the wall, splashing through the stopped channels and the water in them not even moving out of the way, standing round her shins like jelly and parting and closing again behind her as if it had forgotten how to be water." }
      ] },
      { t: "(Walk. Don't look back at it.)", stat: { knowledge: 1 }, then: [
        { n: "She walked. Fast, steady, the way you'd walk out of a room with a dog in it you didn't trust, not running, because running in mud is how you go down on your face, and she didn't look back, because if she looked back she'd stop, and she knew that about herself the way she knew the tables. One foot. The next. The stopped channels standing round her shins, cold as metal, not moving out of the way, parting and closing behind her like they'd forgotten how to be water." }
      ] },
      { t: "(Turn and look at it. Just once.)", flag: 'epi-s-tide-looked', then: [
        { n: "She turned round and looked at it. She didn't know why. Because it was the thing she'd been afraid of all her life and it was standing still for her, and she wanted, just once, to see it." },
        { n: "It was enormous. It went up out of the mud higher than her head now and away left and right into the dust until there was nothing else, a whole sea held up on its edge, gray-green and full of light, and in it, far back, she thought she saw the moon. Not the sky's moon. A moon *in* the water, too big, too close, green. Looking back at her." },
        { n: "Then she turned and walked, fast, steady, not running, the stopped channels standing round her shins cold as metal, parting and closing behind her like they'd forgotten how to be water." }
      ] }
    ] },
    { n: "The seawall got bigger. The men on it got bigger. Three of them, at the parapet, and none of them were fishing. Their rods were down. One of them had his hands on top of his head, the way men stand at an accident." },
    { s: 'fisherman', t: "Aigo— look at it. Look at the water. Look at the *water*—" },
    { s: 'fisherman', t: "Forty years I've stood on this wall. Forty years." },
    { s: 'fisherman', t: "Agasshi! Don't stop! Don't look at it, walk! *Walk!*" },
    { n: "And at the bottom of the steps, two men who weren't fishermen." },
    { n: "They'd come from opposite ends of the seawall. She saw that later, too, in the mud they'd left on it. They'd been on watch, between them, the way they'd agreed on the annex step after the market, two men who would never be friends taking the night in shifts, and one of them had looked up at her window at a quarter to five and seen the curtain open and the bed empty, and the other had already been coming down the hill." },
    { n: "Haechan was on the bottom step. The very bottom one, the slimed one, where the water came. He was standing on it in his boots with the stopped sea a long way behind her and his face doing nothing at all. He'd gone quiet. She could see it from forty meters. He'd gone so quiet." },
    { n: "Jungwon was two steps above him. His right hand was out. Not reaching. Just out, open, held there in the air over the mud the way you'd hold a hand out to someone in a dark room so they'd walk into it." },
    { n: "She walked into it." },
    { n: "Her boot came down on the bottom step. On the stone. Haechan's hand went past her shoulder and closed on the back of her collar, the exact grip, the same as the quay, two weeks and a lifetime ago, and Jungwon's right hand closed round her wrist, and she came up the step between them, and the next, and her foot was on the third step." },
    { cg: null },
    { n: "Behind her, the tide started again." },
    { n: "It came in with a roar. All of it, at once, as if it had been holding its breath, the wall of gray coming down off its edge and across the mud where she had been standing and over it and on, the channels flooding white, the whole bay filling in a single breath, and it hit the bottom of the seawall a second later with a sound like a door slammed in a stone house, and came up the steps. The first. The second. To the edge of the third, round her boots, round Haechan's, cold as death, and stopped there, where it always stopped, and began, very gently, to slop against the stone." },
    { n: "Where she'd been standing, out there, the water was over a man's head. She could tell by the color." },
    { n: "Nobody said anything for a while." },
    { n: "Up on the parapet, one of the old men had sat down on his cool box with his face in his hands. Another was on his phone, saying *I'm telling you, I'm telling you, it stopped*, over and over, to someone who clearly didn't believe him. The third was looking down the steps at her. Just looking." },
    { s: 'fisherman', t: "That girl would've been under. That girl would've been under, and it *stopped*." },
    { n: "Haechan's hand was still on her collar. He hadn't let go. He wasn't going to, she realized, any time soon, and Jungwon's hand was still round her wrist, and the two of them were standing on the wet steps on either side of her with the sea at their boots, and neither of them had looked at the other once." },
    { s: 'haechan', f: 'serious', t: "You went down the steps." },
    { n: "His voice was very low. It sounded like it had been somewhere else and only just come back." },
    { s: 'haechan', f: 'serious', t: "You don't go down the steps. You've never gone down the steps. Not once. Not since you were *fourteen*, agasshi." },
    { s: 'solar', t: "There was a butterfly." },
    { n: "Jungwon closed his eyes. Just for a second. When he opened them they were on the water, slopping gently at the third step, and his voice was more polite than she'd ever heard it, which meant." },
    { s: 'jungwon', f: 'serious', t: "I see. A butterfly. In March. In the dust." },
    { s: 'solar', t: "A blue one." },
    { s: 'jungwon', f: 'serious', t: "Of course. I should have assumed it would be blue." },
    { n: "They took her up the steps. Neither of them let go to do it." },

    { place: 'Incheon · The Lee House · Kitchen', time: 'Before Light', soft: true },
    { n: "Her father was at the kitchen table." },
    { n: "Half past five. The paper open in front of him, his reading glasses on their cord, the first cup of barley tea of the day beside his elbow, the kitchen lit yellow and the window over the sink still dark. Mrs. Bang at the stove. The calendar on the wall behind him said 38." },
    { n: "He looked up when the back door opened. At his daughter in her coat with her hair down and mud to the knees of her jeans and her boots full of seawater, and at Haechan holding on to the back of her collar like she might go somewhere, and at the Yang boy behind them holding her wrist, at half past five in the morning, in his kitchen." },
    { n: "He took his glasses off. He didn't polish them. He looked at the three of them without them, which he almost never did, as if he wanted to see them with his own eyes and not the reading ones." },
    { n: "He didn't ask." },
    { n: "He folded the paper, and stood up, and took three more cups down from the shelf, and poured barley tea into all of them from the pot on the table, and set them down at three places, and sat back down." },
    { s: 'appa', t: "Sit." },
    { n: "Mrs. Bang had already come round the table with a blanket off the back of her own chair. She put it round Solar's shoulders and pulled it closed at the front and held it there in her two fists, hard, for a moment longer than she needed to, and said *aigoo* into the top of her head, very quietly, just once. Then she went and got a basin for her feet." },
    { n: "Nobody asked. That was the thing about this house. Nobody asked the thing. Everybody knew where the thing was." },
    { n: "Her father turned the radio up. It was the one by the rice cooker, the one he left on low in the mornings for the shipping forecast, and after the forecast came the news." },
    { s: 'radio', t: "...and in Incheon this morning, what the Meteorological Administration is describing as an unusual weather event on the tidal flats south of the harbor, with fishermen reporting that the incoming tide appeared to halt for a period of up to a minute before resuming. Officials say the phenomenon may be related to the yellow dust conditions and unusual atmospheric pressure, and have advised residents to observe tidal warnings..." },
    { n: "Her father listened to the whole thing. Then he looked across the table at her, over the steam of the tea, for a long time, with his glasses still in his hand." },
    { s: 'appa', t: "You went to look at the tide." },
    { n: "It wasn't a question. It was a door being held open, the width of a hand." },
    { s: 'solar', t: "...I went to look at the tide." },
    { n: "It was true. That was the strange thing. It was the first true thing she'd said to him since she came home and it was the one that sounded most like a lie." },
    { n: "He nodded. He put his glasses back on. He opened the paper again." },
    { s: 'appa', t: "Drink your tea, Sol-ah." },
    { ifEpiRoute: 'haechan', then: [
      { n: "Under the table, out of everyone's sight, Haechan's knee was pressed against hers, hard, and stayed there, and when she put her hand on it he put his own over it and didn't move it until the tea was gone." },
      { bond: { haechan: 1 } }
    ] },
    { ifEpiRoute: 'jungwon', then: [
      { n: "Jungwon drank his tea in silence, in small precise sips, and set the cup down without a sound, and then, under the edge of the table where nobody could see, he put his right hand flat over hers on her knee and left it there, as if he'd decided it lived there now." },
      { bond: { jungwon: 1 } }
    ] },
    { ifEpiRoute: 'family', then: [
      { n: "When she'd finished the tea her father refilled it without looking up from the paper. When she'd finished that he did it again. He did it four times. He'd never once in her life poured her tea four times. She drank all four." },
      { bond: { appa: 1 } }
    ] },
    { flag: 'epi-s-tide' }
  ] },

  // ───────────────────────────── 3/7, evening (route haechan): the bridge ─────────────────────────────
  { id: 'epi-s-hc-bridge', date: '3/7', slot: 'evening', consumes: true, flag: 'epi-route-haechan', title: 'the bridge', place: 'Incheon · The Car', time: 'Evening', scene: [
    { music: 'epi-s-haechan' },
    { n: "He knocked on the kitchen door at eight with the Rexton's keys hanging off one finger, the way other men knocked with flowers, and didn't come in." },
    { s: 'haechan', f: 'neutral', t: "Coat, agasshi." },
    { s: 'solar', t: "Where are we going?" },
    { s: 'haechan', f: 'neutral', t: "Nowhere. Fast. Coat." },
    { n: "Mrs. Bang, at the sink, said nothing in a very particular way and handed Solar a scarf over her shoulder without turning round." },
    { n: "Dal's old Rexton smelled the way it always smelled, diesel and cold vinyl and cinnamon gum and, underneath, very faintly, something of the big man who'd driven it before him, that no amount of airing had ever got out. Haechan patted the dashboard when he got in. He always did. He'd never once explained it." },
    { s: 'haechan', f: 'happy', t: "Good girl." },
    { n: "He drove out of the gate and down the hill and along the harbor road with trot on the radio, an old man's song about a boat that never came back, and sang the second verse under his breath, well, perfectly, not to annoy anybody this time, just because it was on. The dust was still in the air. Every streetlight had a halo, yellow on yellow, and the city went past them soft at the edges like something seen through a bathroom window." },
    { n: "Then he took the slip road, and she saw where they were going, and her hand found the door handle and held it." },
    { place: 'Incheon · The Bridge', time: 'Evening' },
    { n: "The long bridge went out over the sea in the dark for twenty-one kilometers, and there was nothing on either side of it. Nothing. The lamps on their tall poles going away in two curving lines into the dust, each one furred yellow, and past the railings, past the lamps, black. Not dark. Black. The kind of black that's water at night, deep, moving, and the wind coming off it hit the side of the car in long shoves." },
    { n: "He put his foot down." },
    { n: "A hundred. A hundred and twenty. The lamps started coming past like someone dealing cards. A hundred and forty, the Rexton shuddering a little and settling into it, the way an old dog settles into a run it remembers, and he drove with one hand at the bottom of the wheel and his elbow on the door and the gum going, and he didn't look at her once." },
    { n: "She counted the lamps. She couldn't not. Forty. Seventy. A hundred and eleven. She'd been over this bridge a dozen times in the back of her father's car with her eyes shut, every time, and she'd never once told anybody that was why she always fell asleep in the car. Somebody had noticed. She knew exactly who." },
    { n: "Halfway across, in the middle, where the bridge went up highest over the shipping lane and the wind was worst, he took his foot off and let the car run down, and pulled onto the shoulder, and stopped, and put the hazards on." },
    { n: "Tick. Tick. Tick. Orange on the railing. Orange on the dust. Orange on the side of his face, on and off, the scar through his eyebrow there and gone." },
    { s: 'solar', t: "You can't stop here." },
    { s: 'haechan', f: 'neutral', t: "I'm stopped." },
    { s: 'solar', t: "It's a bridge. It's illegal. There's a sign. There were about forty signs." },
    { s: 'haechan', f: 'neutral', t: "Thirty-eight. You counted them." },
    { n: "He turned the radio off. The wind was very loud without it, the sea under them louder, a long way down." },
    { choose: [
      { t: "(Get out. Stand at the railing with him.)", needs: { courage: 2 }, flag: 'epi-s-bridge-rail', stat: { courage: 1 }, then: [
        { n: "She got out of the car before she could think about it, which was the only way she'd ever done anything brave, and the wind took her scarf straight off her neck and flung it out over the railing into the black, and she watched it go, a pale thing, turning, gone." },
        { n: "He was out of his side and round the bonnet before it had disappeared. He didn't say anything. He took hold of the back of her coat collar in his fist, the same grip as the steps, and walked her to the railing, and stood there behind her with his hand locked in her collar like a man holding a kite." },
        { n: "She looked down. She'd never looked down from here. Seventy meters of nothing and then the sea, black, alive, moving under the lamps in long slow shrugs, the deepest water in Incheon, the thing she'd been most afraid of every day of her life, right there under her boots." },
        { n: "His hand didn't move off her collar. She found she could look at it, as long as that was there." }
      ] },
      { t: "(Stay in the car. Make him talk.)", then: [
        { n: "She stayed where she was, with her hand on the door handle and the hazards ticking and the black on both sides of the car, and turned in her seat, and looked at him until he had to look back." },
        { s: 'solar', t: "Talk, Donghyuck-ah. You didn't drive me to the middle of the sea for the view." }
      ] },
      { t: "\"If this is about the mud—\"", stat: { charm: 1 }, then: [
        { s: 'solar', t: "If this is about the mud, I said I was sorry." },
        { s: 'haechan', f: 'neutral', t: "You didn't, actually." },
        { s: 'solar', t: "I said it with my face." },
        { s: 'haechan', f: 'neutral', t: "Your face said *there was a butterfly*, agasshi. Your face is a liar." }
      ] }
    ] },
    { s: 'haechan', f: 'serious', t: "Twenty-one kilometers. Deepest water in the city on both sides. You've been over it how many times. With your eyes shut. In the back of the Chairman's car." },
    { s: 'solar', t: "...Every time." },
    { s: 'haechan', f: 'serious', t: "I know. I was driving." },
    { n: "He looked out at the black for a while. The hazards ticked on his face. When he talked again it was quieter, and slower, and she understood, from the care he took, that he'd been carrying this one round in his mouth for a day and a half, the way he carried the gum, waiting for somewhere to put it." },
    { s: 'haechan', f: 'serious', t: "Yesterday you walked out on the mud by yourself after a bug." },
    { s: 'solar', t: "A butterfly." },
    { s: 'haechan', f: 'serious', t: "A *bug*, agasshi. At five in the morning. With nobody holding your collar." },
    { s: 'haechan', f: 'serious', t: "So. Here's how it goes now. Next time you need to look at the water, you come down the garden and kick my door. I'll drive you out to the middle of it. I'll stop the car. You can look at it till you're sick. And I'll be holding on." },
    { s: 'haechan', f: 'neutral', t: "Whatever's out there that wants you can have the sea. It can have all of it. It's not having you off the mud." },
    { n: "He'd aimed it. She could tell. He'd aimed every word of it and then let it go and was now looking very hard out of the windshield at the dust, chewing, as if he'd said something about the weather, and his ears had gone dark in the orange light, on and off, on and off." },
    { n: "She didn't say anything for a while. The wind shoved the car. Something big went past on the other carriageway, a truck, its wake rocking them on the springs." },
    { s: 'solar', t: "Why the middle." },
    { s: 'haechan', f: 'neutral', t: "Because it's nobody's." },
    { n: "He turned his head and looked at her, finally." },
    { s: 'haechan', f: 'neutral', t: "Back there's your father's. That end's the airport. Nobody's house out here. Not the Chairman's, not the young master's. No lines for anybody to listen on. No kitchen. No step." },
    { s: 'solar', t: "So what am I. Out here." },
    { n: "He looked at her a long time. The hazards ticked. She watched him decide, the way she'd watched him decide things across her father's kitchen for years, the jaw first, then the eyes." },
    { s: 'haechan', f: 'sad', t: "...Solar." },
    { n: "Just that. Her name, the real one, in his voice, the voice he used for nothing else. He spent it like the last coin in his pocket, and then sat there, empty-handed, and let her see that he'd spent it." },
    { n: "She climbed across the console." },
    { n: "It was not elegant. The gearstick got her in the thigh and her coat got caught on the handbrake and she put her knee on his phone and he swore at her, softly, in gutter quay-Korean, the kind she only ever swore back at him in, and then she was in his lap with the steering wheel at her back and her hands in his wind-wrecked hair and his mouth on hers, cinnamon and cold, and he didn't lift her and didn't have to, she'd come over on her own, and his hands went inside her coat and held on, flat on her back, the way he'd promised. Holding on." },
    { n: "The hazards ticked. The car rocked. He made a sound against her mouth she'd remember for a long time, low, like something giving way, and she pressed back into him and her spine hit the middle of the steering wheel." },
    { n: "The horn went off." },
    { n: "Long and loud and appalling, out across the whole empty bridge in the dust, and a truck going past on the other carriageway answered it with its own horn, two long blasts, congratulations or abuse, and she was laughing into his neck and he was laughing too, helplessly, his forehead on her shoulder, both of them shaking with it while the hazards went on ticking like a slow clock." },
    { s: 'haechan', f: 'flustered', t: "That's it. That's the evening. You've woken up the airport." },
    { s: 'solar', t: "You stopped on a bridge." },
    { s: 'haechan', f: 'happy', t: "Get back in your seat, agasshi, before the coast guard comes and arrests us for public indecency over a shipping lane." },
    { n: "She got back in her seat. Her hair was down. She didn't remember taking the pins out. He picked one of them off the floor by the pedals, a long black one, and handed it to her without looking, and pulled out onto the empty road, and turned round at the toll at the far end." },
    { n: "He drove her back at sixty. The whole twenty-one kilometers, at sixty, in the slow lane, with both hands on the wheel and the trot back on low, the lamps coming past slow and yellow and furred, one at a time, so she could count them if she wanted." },
    { n: "She didn't. She watched the sea instead, out of her window, the black under the lamps, the whole way back. It was the first time in her life she'd looked at it for that long." },
    { bond: { haechan: 1 } }
  ] },

  // ───────────────────────────── 3/7, evening (route jungwon): the glass city ─────────────────────────────
  { id: 'epi-s-jw-blackout', date: '3/7', slot: 'evening', consumes: true, flag: 'epi-route-jungwon', title: 'the glass city', place: 'Incheon · Songdo', time: 'Evening', scene: [
    { music: 'epi-s-jungwon' },
    { n: "The restaurant was on the thirty-fourth floor of a tower in Songdo that was all glass, in a city that was all glass, a new city built on land that had been sea when she was born, and from their table by the window the towers went away in every direction lit from inside like aquariums, floor after floor of empty offices glowing white in the dust." },
    { n: "Across the water, low and yellow and crooked, the old city. The port. The cranes. Somewhere on the dark hump of a hill over there, one of those lights was her kitchen." },
    { n: "This was a dinner for being seen at. The houses wanted it, both of them, the way they wanted the calendar in the kitchen to go on getting smaller: the Lee daughter and the Yang heir at a window table in Songdo, thirty-seven days out, white tablecloth, a waiter who bowed to him a little too low every time he came past. Four women at a table across the room had recognized them in the first five minutes and had been not-looking at them ever since with tremendous dedication." },
    { n: "By the door, standing, facing it, his back to the whole room and the view and the dinner, Sunghoon. He hadn't sat down. He hadn't been offered a chair and wouldn't have taken one. He stood there in his dark coat like part of the architecture." },
    { n: "Jungwon ate the way he did everything, precisely, small neat mouthfuls, his chopsticks laid square on their rest between bites as if somebody might come and check. He'd asked her what she wanted before the waiter came and then ordered it for her himself, in full, in a voice that made the waiter write faster, and then ordered the same for himself, because, he said, he trusted her judgment more than the menu's." },
    { s: 'jungwon', f: 'happy', t: "Would Miss Lee care for more tea." },
    { s: 'solar', t: "Miss Lee would." },
    { n: "He poured. Right hand. Not a drop on the cloth. The dimples, both of them, deep and sweet and for the four women across the room." },
    { s: 'jungwon', f: 'happy', t: "Is the fish to Miss Lee's satisfaction." },
    { s: 'solar', t: "It's overcooked. Auntie Song would take it out the back and bury it." },
    { s: 'jungwon', f: 'happy', t: "I'll be sure to pass that on to the chef. In those words." },
    { n: "It was a game. It had been a game for a while now, the formality, ever since she'd realized that he got more polite the more he meant something, and that if she pushed him, very gently, in public, he'd go on getting politer and politer until the courtesy was so thick you could have stood a spoon in it, and that under the table his knee would be against hers the entire time." },
    { n: "It was against hers now." },
    { s: 'solar', t: "*You're enjoying this.*" },
    { n: "Mandarin. Low. The four women across the room had no Mandarin. Sunghoon, by the door, had a little, and she suspected he'd stopped listening to the two of them years ago in every language." },
    { s: 'jungwon', f: 'neutral', t: "*Enormously.*" },
    { s: 'solar', t: "*Your face doesn't say so.*" },
    { s: 'jungwon', f: 'neutral', t: "*My face is working. The rest of me is at dinner with you.*" },
    { n: "His watch said 8:47. She could see it on his wrist, the old steel face, a link taken out of the band so it fitted him. She was looking at it when the city went out." },
    { n: "All of it. At once." },
    { n: "Not floor by floor, not tower by tower the way a power cut walks across a city, but everything, in the same instant, like a hand closed over a candle. The restaurant. The tower. The tower across the street and the one beside it and the one behind that, every lit window in the glass city, all of them, gone, and the street lights below, and the bridge lights, and the red lights on top of the cranes on the new port. Black. Floor to ceiling, out of the window, black." },
    { n: "Somebody screamed, short, and stopped, embarrassed. A glass went over. A child started crying somewhere near the kitchen." },
    { glitch: { near: true } },
    { n: "And in the dark, very clearly, very close, his watch. Tick. Tick. Tick. The only thing in the whole glass city that hadn't stopped." },
    { n: "His hand found hers on the tablecloth. His right. It came across the cloth in the dark without hesitating, as if he'd known exactly where hers was to the centimeter, which he would have, and closed over it, and held on." },
    { n: "By the door, flat, unbothered, Sunghoon's voice." },
    { s: 'sunghoon', f: 'neutral', t: "Jungwon-ah." },
    { s: 'jungwon', f: 'neutral', t: "Stay by the door, please." },
    { n: "A lighter flared by the door. Sunghoon, holding it up, not lighting anything, his face lit gold from underneath, looking at the room. Then the phones started coming out at the other tables, one by one, little blue screens lighting little blue faces, and somewhere a waiter was apologizing in a high voice and looking for candles." },
    { n: "Out of the window, across the water, the old city was still lit." },
    { n: "Every light of it. The cranes on the old quays, orange. The lamps along the harbor road. The red on the Wolmido ferris wheel. The crooked yellow scatter of the hill. All of it shining away over there in the dust exactly as it had been, as if nothing had happened, while the whole new city sat around it in the dark like an audience." },
    { n: "She looked across the table at where he was. She could just see the shape of him against the far lights. He wasn't looking out of the window. He wasn't looking at the room. He was looking at her, she could tell, and he hadn't let go." },
    { choose: [
      { t: "(Speak Mandarin. Nobody here can see your face.)", stat: { charm: 1 }, then: [
        { s: 'solar', t: "*Don't let go.*" },
        { s: 'jungwon', f: 'neutral', t: "*I wasn't going to.*" },
        { s: 'solar', t: "*I know. I wanted to hear you say it.*" }
      ] },
      { t: "(Count his watch with him. Out loud. Quietly.)", stat: { knowledge: 1 }, then: [
        { n: "She started at the tick she was on. Under her breath, in Korean, the way you'd count stairs in the dark. *Twenty-one. Twenty-two.* After the third number his voice joined hers, very low, exactly in time, and they counted together across the table in the dark with his hand on hers, two people who counted things, counting the one thing that was still going." }
      ] },
      { t: "(Say nothing. Turn your hand over under his so you're holding him back.)", stat: { kindness: 1 }, then: [
        { n: "She turned her hand over under his. Palm up. So that she was holding him too, the fish-knife scar on her palm against his, and she felt him feel it, the line of it, and his fingers tightened." }
      ] }
    ] },
    { n: "In the dark he said something in Mandarin, so quietly she nearly missed it under the child crying and the waiter apologizing." },
    { s: 'jungwon', f: 'sad', t: "*When it went dark, I thought you'd gone.*" },
    { n: "She held on." },
    { s: 'jungwon', f: 'sad', t: "*I started counting. To see how long I could stand it, before I did something impolite.*" },
    { s: 'solar', t: "*How far did you get?*" },
    { s: 'jungwon', f: 'neutral', t: "*Not very.*" },
    { n: "The lights came back." },
    { n: "All at once, the way they'd gone. The tower and the next tower and every white window in the glass city, snapping on together like a shutter opening, and the restaurant blazing, and everyone blinking at each other with their phones held up and their mouths open, embarrassed, laughing, the four women across the room with their hands at their throats." },
    { n: "He was still holding her hand on the tablecloth. In the light, in front of the whole room. He didn't let go." },
    { n: "His face wasn't polite. There were no dimples. It was perfectly still, the stillness she'd learned to read backwards, the one that meant something had got all the way in." },
    { s: 'jungwon', f: 'neutral', t: "Four minutes and eleven seconds." },
    { s: 'solar', t: "You counted." },
    { s: 'jungwon', f: 'neutral', t: "I'm afraid I always do." },
    { n: "The manager came to every table in turn, bowing, apologizing, saying the building's own generators had failed too, which they'd never done, and that the power company was saying nothing yet, and that dessert was with the compliments of the house. When he got to theirs he bowed lowest, to Jungwon, and Jungwon thanked him so courteously that the man went pale and backed away." },
    { n: "When he'd gone, Jungwon looked out of the window at the old city across the water, and then at the new one, blazing, as if it had never been dark in its life. He touched the face of his watch with one finger of his right hand, which meant he was thinking." },
    { s: 'jungwon', f: 'serious', t: "*It wasn't the grid.*" },
    { s: 'solar', t: "*No.*" },
    { n: "By the door Sunghoon put the lighter away and said, to the door, not to them, that the car was downstairs whenever they were ready. Neither of them moved. Dessert came. It was a small cake with gold leaf on it, one each, and Jungwon didn't let go of her hand to eat his, so she ate both." },
    { bond: { jungwon: 1 } }
  ] },

  // ───────────────────────────── 3/7, evening (route family): your hand ─────────────────────────────
  { id: 'epi-s-fam-yunjin', date: '3/7', slot: 'evening', consumes: true, flag: 'epi-route-family', title: 'your hand', place: "Incheon · The Lee House · Yunjin's Room", time: 'Evening', scene: [
    { music: 'epi-s-yunjin' },
    { n: "Yunjin's room had been the guest room for twenty years and had looked like it, flowered wallpaper and a heavy wardrobe and a print of cranes over the bed, and in three months Yunjin had covered every flat surface in it with herself: four puffers on the back of the door like a stack of traffic lights, a mountain of skincare on the dresser, photographs of her nails tucked in round the mirror, the pink Canon on its strawberry hanging off the bedpost, and on the windowsill, in a row, three of her father's reading glasses that she'd found in the pockets of things and couldn't put anywhere else." },
    { n: "Her mother had gone to bed early, the way she did now. The light under her door down the corridor had gone off at nine." },
    { n: "The drama was on the laptop on the duvet between them, the one with the blind heiress and the con man who was pretending to be her long-lost brother and was obviously going to fall in love with her and ruin everything. Yunjin had watched every episode twice and narrated all of them, out loud, to whoever was in the room, with commentary." },
    { s: 'yunjin', f: 'neutral', t: "He's lying. Look at his face. He's lying and he hates himself and he's going to keep doing it for nine more episodes, because men." },
    { s: 'solar', t: "Maybe he's got a reason." },
    { s: 'yunjin', f: 'neutral', t: "They always have a reason, babe. The reason is never good enough. Give me your hand." },
    { n: "The polish was purple. A deep, offensive, glittery purple that Yunjin had bought because it was exactly the color of the Veloster, and she said that purple had been a cry for help when she bought the car and was now a lifestyle. She held Solar's left hand flat on a magazine on her knee and did her nails the way she did everything that mattered to her, fast, perfect, completely absorbed, her tongue in the corner of her mouth." },
    { n: "Solar watched her do it. She watched the side of Yunjin's face in the laptop light, and the thin pink line along her neck where the stitches had been, healing now, a line you'd only see if you knew to look, and the way her voice had gone lower since December and cracked at the top. She listened to her narrate the drama. It was the best part of her day. She was never going to tell her." },
    { s: 'yunjin', f: 'happy', t: "Other hand. You've got the cuticles of a fisherman, Sol, I say this with love." },
    { s: 'solar', t: "I've gutted more fish than most fishermen." },
    { s: 'yunjin', f: 'happy', t: "And it *shows*. Hold still." },
    { n: "Right hand on the magazine. The jade ring. Yunjin worked round it without asking her to take it off, because she'd known for five years that Solar didn't take it off. Thumb. First finger. The brush going smooth and purple and certain." },
    { n: "On the laptop, the blind heiress was crying in the rain. The con man was watching her from across the street with an umbrella he wasn't using." },
    { n: "Yunjin stopped." },
    { n: "Not dramatically. The brush just didn't come down on the third nail. It hung there over it. And Solar, who'd been looking at the laptop, looked down to see why." },
    { n: "Her hand was going." },
    { n: "Not gone. Going. Like light through paper. She could see the magazine through her own fingers, the print on it, a woman's face in an advert for face cream, coming up through her skin like something at the bottom of shallow water. The bones were there and not there. The jade ring was perfectly solid on a finger you could see the page through. The two purple nails sat glittering on the ends of two fingers that were barely anything at all, hanging in the air on their own, two little shining purple shells floating over a magazine." },
    { n: "There was no sound. No pain. Nothing. It felt exactly like a hand." },
    { s: 'yunjin', f: 'serious', t: "Sol." },
    { n: "Very quiet. The gravel in it." },
    { s: 'yunjin', f: 'serious', t: "Sol. Your hand." },
    { n: "Then she put the brush down. Not back in the bottle. Down, on the magazine, so the purple bled into the face-cream woman's cheek, and she took Solar's hand in both of hers, the one that was going, and held it." },
    { n: "Hard. Both hands. Her fingers locked round it the way you'd hold the rail on a ferry in a swell, and her knuckles went white, and she held it in her lap against her stomach, and didn't say anything, and didn't look away from it." },
    { n: "Solar could feel her holding. That was the strange thing. Through a hand you could see a magazine through, she could feel every one of Yunjin's fingers, warm, hard, the little rough place on the side of her middle finger where she held a pen, and she watched her own hand come back. Slowly. Like a photograph in a tray. The magazine going dim through her fingers, and then dimmer, and the skin coming up opaque and pale and hers, the bones, the scar across the palm, until it was a hand again in Yunjin's two hands, an ordinary hand with two purple nails and three bare ones, shaking now, very slightly, the way it never did until afterwards." },
    { n: "On the laptop the con man had finally put his umbrella up. Neither of them noticed." },
    { n: "Yunjin didn't let go. She didn't make a joke." },
    { n: "That was how Solar knew it was bad. In five years she had never once seen Yunjin miss a joke. Not at the ICU, not at her father's altar. Yunjin made jokes the way other people breathed, she made them the way the tide came in, and she was sitting on her bed with Solar's hand clamped in her lap and her face perfectly still and her mouth shut, and there was no joke coming. Not even a bad one." },
    { choose: [
      { t: "\"I don't know what it is, Jin. I don't know.\"", then: [
        { s: 'solar', t: "I don't know what it is. I'm not lying. I don't know." },
        { s: 'yunjin', f: 'sad', t: "I know you don't. You'd tell me. You tell me everything, you're disgusting like that." },
        { n: "Her hands tightened." },
        { s: 'yunjin', f: 'sad', t: "I was there, Sol. In that dorm. I know what it looks like when something's got hold of you. I just thought we'd got out." }
      ] },
      { t: "(Make the joke yourself, since she won't.)", stat: { charm: 1 }, then: [
        { s: 'solar', t: "Well. That's one way to get out of a manicure." },
        { n: "Yunjin looked up. For one second Solar thought it had worked. Then Yunjin's eyes filled, all at once, and she looked back down at the hand in her lap." },
        { s: 'yunjin', f: 'sad', t: "Don't. Don't do my job. You're bad at it." },
        { s: 'solar', t: "I know." },
        { s: 'yunjin', f: 'sad', t: "You're *really* bad at it, babe." }
      ] },
      { t: "(Don't say anything. Let her hold on.)", stat: { kindness: 1 }, then: [
        { n: "She didn't say anything. She let her hold on. She put her other hand, the purple-free one, the left with its two wet nails, on top of Yunjin's two, carefully, so she wouldn't smudge, and they sat there like that, a little stack of hands in Yunjin's lap, while the drama went on raining on the laptop." },
        { n: "After a long time Yunjin put her forehead down on Solar's shoulder. She didn't cry. Her breath went in and out against the collar of Solar's shirt, uneven, three times, four, and then even again." }
      ] }
    ] },
    { s: 'yunjin', f: 'serious', t: "Whatever it is. You're not going anywhere I'm not. You hear me? I already did a whole year with a dog and a robot and a guy who ate nothing but protein bars. I'm not doing another one without you. I'll follow you. I'll find the door and I'll kick it in. In the orange puffer. I'll be *so* visible." },
    { s: 'solar', t: "I know you would." },
    { s: 'yunjin', f: 'serious', t: "Good." },
    { n: "She let go of Solar's hand, finally, one finger at a time, watching it the whole time, like you'd take your hand off a glass you'd just stood upright, ready to catch it. It stayed a hand." },
    { n: "Then she picked the brush up off the magazine, and wiped the purple off the face-cream woman's cheek with her thumb, and put it back in the bottle, and took Solar's right hand flat on her knee again, and did the third nail. And the fourth. And the fifth. Perfect. Absorbed. Tongue in the corner of her mouth. Without a word." },
    { s: 'yunjin', f: 'neutral', t: "Second coat." },
    { n: "Her voice cracked on it. Neither of them mentioned that either." },
    { bond: { yunjin: 1 } }
  ] },

  // ───────────────────────────── 3/7, late: Iwatodai Dormitory ─────────────────────────────
  { id: 'epi-s-call', date: '3/7', slot: 'late', title: 'Iwatodai Dormitory', place: 'Incheon · The Lee House · Her Room', time: 'Late Night', scene: [
    { music: 'epi-s-call' },
    { ifEpiRoute: 'haechan', then: [
      { place: 'Incheon · The Lee House · Annex', time: 'Late Night', soft: true },
      { n: "They were on the annex step. Of course they were. Back from the bridge with the Rexton's engine ticking in the garage and neither of them ready to go in, sitting on the cold concrete at the bottom of the garden with the steel door open behind them and the old silver radio on the sill playing nothing, just a hiss between stations, because he'd turned the dial off a station and not on to another one, and liked it, he said, it sounded like the sea." },
      { n: "Her hair was still down. He hadn't mentioned it. He'd mentioned everything else about the bridge at least twice." }
    ] },
    { ifEpiRoute: 'jungwon', then: [
      { place: 'Incheon · The Lee House · Gate', time: 'Late Night', soft: true },
      { n: "She'd gone down to the gate at half past eleven in her coat over her pajamas because he was standing there and she couldn't sleep knowing it. His night. He'd brought her home from Songdo and then simply stayed, the way he'd been staying, on the nights that were his, in the dark coat, under the red lanterns, with his watch." },
      { n: "He'd bowed when she came down the steps. Very correctly. And then let her stand inside his coat with him, against the cold, which was not correct at all." }
    ] },
    { ifEpiRoute: 'family', then: [
      { n: "Her nails were dry. Five purple, five purple, second coat. She was sitting on her bed looking at them in the lamplight, turning her hands over, and over, checking, because she couldn't stop." },
      { n: "Yunjin was in the doorway. She'd come to say goodnight twenty minutes ago and had not yet said it. She was leaning on the frame in an enormous Yankees sweatshirt that came to her knees, with her arms folded, watching Solar check her hands, saying nothing, which was twice in one night now, which was a record." }
    ] },
    { n: "Her phone lit up." },
    { n: "It was in her coat pocket, or on the bed, or in her hand, it didn't matter where; it lit up by itself, and it wasn't ringing. It was calling out. The screen said *Dialing*, and under it a number she'd never stored and never seen: a plus sign, and an eight and a one, and then a long string of digits that her thumb hadn't touched." },
    { glitch: 'epi-s-g-call' },
    { n: "Static. A hiss, soft, the hiss between stations, coming out of the little speaker. Then a click. Then a ring tone, but not a Korean one, the wrong rhythm, a single long burr and a pause, a single long burr and a pause, a phone ringing on a table in a house a long way away." },
    { n: "She knew that ring. She'd heard it from the top of the stairs a hundred times. From her bed. From the kitchen. The landline on the little table in the lounge by the front door, the one nobody ever answered except one person, because everyone else had a mobile and one person always said that somebody had to." },
    { n: "Somebody picked up." },
    { s: 'fkvoice', t: "Hello? Iwatodai Dormitory..." },
    { n: "Japanese. Soft. Polite, apologetic, the voice for answering a phone in a house full of people who might be asleep. Behind it, very faint, a television. A dog's tags jingling across a wooden floor." },
    { choose: [
      { t: "\"Fuuka. It's me.\"", stat: { courage: 1 }, then: [
        { n: "She said it in Japanese. It came out of her without having to be found, the way her own name would have." },
        { s: 'solar', t: "Fuuka. It's me." }
      ] },
      { t: "(Don't say anything. Just listen to the room behind her.)", then: [
        { n: "She didn't say anything. She held the phone against her ear so hard it hurt and listened to the room. The television, a game show, somebody losing. The dog's tags. And further away, through a door, a boy's voice complaining loudly about the last pudding in the fridge, and a girl's voice telling him it had her name on it, and she shut her eyes." }
      ] },
      { t: "(Hold the phone out so the person beside you can hear.)", then: [
        { ifEpiRoute: 'haechan', then: [
          { n: "She held it out to him. He leaned in on the cold step until his cheek was against hers and the phone was between their two ears, and listened, and she felt his jaw go still against her face." }
        ] },
        { ifEpiRoute: 'jungwon', then: [
          { n: "She held it out between them, inside his coat. He bent his head to it, and listened, and his right hand came up and closed over hers on the phone, as if to keep it from being taken." }
        ] },
        { ifEpiRoute: 'family', then: [
          { n: "She held it out toward the door. Yunjin came off the frame in two strides and knelt on the floor by the bed and put her ear to the phone, and listened, and her hand went flat over her own mouth." }
        ] }
      ] }
    ] },
    { n: "A breath, on the other end. A small one, caught. The breath of somebody who had just heard something they'd stopped letting themselves hope for, and wasn't sure, and was afraid to be sure." },
    { s: 'fkvoice', t: "...Solar?" },
    { n: "Then the line was dead." },
    { n: "Not cut off. Not the click of somebody hanging up. Dead, like the phone had never been connected to anything, no tone, no hiss, nothing, and the screen said *Call ended* and the timer under it said 00:00." },
    { n: "She pressed the number. Her thumb was steady. She was always steady, until afterwards. She pressed it in the recent calls where it sat, the plus, the eight, the one, the long string, and held the phone to her ear." },
    { n: "A woman's recorded voice. Korean. Pleasant, bored, the voice of every telecom company in the country." },
    { n: "*The number you have dialed does not exist. Please check the number and try again.*" },
    { n: "She tried again. The same voice. She tried again. When she looked at the recent calls, the number was still there, at the top, with the time beside it. 11:52 p.m. Duration, 00:00." },
    { ifEpiRoute: 'haechan', then: [
      { n: "Haechan didn't say anything for a long time. The radio on the sill went on hissing between stations, the sea sound, and she realized that he was sitting so still on the step beside her that he'd stopped chewing, and that he'd gone quiet, the real quiet, the one that never lied." },
      { n: "Then he took her phone gently out of her hand and looked at the number for a while. And gave it back." },
      { s: 'haechan', f: 'neutral', t: "Whoever's on your line tonight." },
      { s: 'solar', t: "Mm." },
      { s: 'haechan', f: 'neutral', t: "Some poor bastard in a basement with headphones, writing that up. *Eleven fifty-two. Subject telephones Japanese girls' dormitory. Says nothing. Japanese girl says her name. Number does not exist.*" },
      { n: "She laughed. It hurt. He put his arm round her on the step, not looking at her, and pulled her in against his side, and she put her face in his shirt and stayed there until the radio found a station by itself, an old trot song, faint, and he let it play." },
      { s: 'haechan', f: 'sad', t: "...She sounded nice." },
      { s: 'solar', t: "She is." },
      { bond: { haechan: 1 } }
    ] },
    { ifEpiRoute: 'jungwon', then: [
      { n: "Jungwon's hand stayed over hers on the phone for a long moment after the recorded voice had stopped. Then he took it away, and touched the face of his watch, and looked out through the gate at the dark street, and when he spoke it was in the courteous voice, the one for menus and the weather, which meant he was very far from calm." },
      { s: 'jungwon', f: 'neutral', t: "Somebody listening to your line tonight has just heard a girls' dormitory in Japan say your name." },
      { s: 'solar', t: "Yes." },
      { s: 'jungwon', f: 'neutral', t: "I should like very much to read that transcript." },
      { n: "She laughed. It came out wrong, wet, and he turned and looked at her, and then his right arm came round her inside the coat and drew her against his chest, and she stood there under the red lanterns with her face against his shirt and her phone in her fist and listened to his heart, which was going much too fast for a man whose face was doing nothing at all." },
      { s: 'jungwon', f: 'sad', t: "*She knew your voice. Before you'd said a word.*" },
      { s: 'solar', t: "*She knows everyone's.*" },
      { bond: { jungwon: 1 } }
    ] },
    { ifEpiRoute: 'family', then: [
      { n: "Yunjin was still kneeling on the floor by the bed with her hand over her mouth. She took it away slowly." },
      { s: 'yunjin', f: 'sad', t: "That was Fuuka." },
      { s: 'solar', t: "Yes." },
      { s: 'yunjin', f: 'sad', t: "She does the *hello* like that. Like she's sorry. Like she's sorry for answering even when you're the one who called." },
      { n: "She sat down on the floor properly, her back against the side of the bed, in the huge sweatshirt, with her knees up. After a while she reached up without looking and found Solar's hand on the duvet and held it, the purple one, loosely this time, just checking." },
      { s: 'yunjin', f: 'neutral', t: "I'm leaving my door open tonight. You're leaving yours open." },
      { s: 'solar', t: "Jin—" },
      { s: 'yunjin', f: 'neutral', t: "Not a discussion. I've got my nails done, I'm emotionally compromised. If I hear one weird sound I'm coming through the wall. I'll bring the camera." },
      { bond: { yunjin: 1 } }
    ] },
    { n: "She didn't delete the number. She knew she'd never be able to call it. She left it at the top of the list, where it sat, all night, the only call in the history of the phone with a duration of nothing." },
    { flag: 'epi-s-call' }
  ] },

  // ───────────────────────────── 3/8, morning: twelve ─────────────────────────────
  { id: 'epi-s-clocks', date: '3/8', slot: 'early', consumes: true, title: 'twelve', place: 'Incheon · The Lee House · Kitchen', time: 'Morning', scene: [
    { music: 'epi-s-house' },
    { n: "Her father found it first, at half past four, coming down for the paper. He'd stood at the bottom of the stairs looking at the hall clock for a while, Mrs. Bang said afterwards, and then gone in to the kitchen and sat down and said nothing to anybody. Mrs. Bang found it at five, coming in to put the rice on. Then everybody found it, one at a time, as they came down." },
    { n: "By the time Solar came into the kitchen at seven, the whole house was standing in it, looking at the wall." },
    { n: "The kitchen clock said 12:00. The plain white one over the door with the big black hands that had said the wrong time, five minutes fast, every day of her life, because Mrs. Bang set it fast on purpose to make everyone hurry. It said 12:00. Not five past. Not blinking, not stuck, both hands upright together at the top like two people standing to attention." },
    { n: "The microwave said 12:00. Green, steady, not flashing, the way it flashed after a power cut. The rice cooker's little display said 12:00. Through the doorway, in the hall, the tall clock that had been her grandmother's and was wound every Sunday by her father with a key he kept in his waistcoat pocket said 12:00, and its pendulum hung straight down, perfectly still, in its little glass window." },
    { s: 'mrsbang', t: "The study's too. I went in. The Chairman's desk clock. Twelve." },
    { n: "Mrs. Bang had her hand flat on her chest. She hadn't taken her apron off. She was standing by the stove looking at the kitchen clock the way she looked at weather coming in off the sea." },
    { n: "The calendar beside it, on its nail, said 36. Someone had turned it already. Someone always got there first." },
    { glitch: 'epi-s-g-clocks' },
    { n: "Her father was at the head of the table with the paper folded in front of him, unread. He had his sleeve pushed up. His watch, the plain steel one he'd worn every day for as long as she could remember, sat on his wrist with both its hands at the top." },
    { n: "Only the phones were right. Everybody kept taking them out and looking at them, as if that would help, as if the phones might be persuaded to go over to the other side. Minseok had checked his four times since she came in. Mr. Oh, at the end of the table, hadn't checked his at all. He'd come in from the garage with his car keys in his hand." },
    { s: 'mroh', t: "Car clock's stopped. The clock. Not the car." },
    { s: 'minseok', t: "Mine's fine. My phone's fine." },
    { s: 'mroh', t: "Nobody asked your phone." },
    { n: "Yunjin was in the doorway to the hall in the Yankees sweatshirt with the pink Canon up, photographing the microwave. Then the rice cooker. Then the grandmother clock. She photographed each of them twice, very carefully, with her face completely serious, like a woman documenting a crime scene, and didn't say anything funny about any of them. Solar watched her not say it." },
    { n: "Pyo wouldn't come in." },
    { n: "He was on the back step. She could see him through the open door, in his white cook's jacket with his arms wrapped round himself, sitting next to the koi bucket with his bowl of rice on his knees, not eating it, looking in at the kitchen clock through the doorway like a boy looking into a room where somebody had died." },
    { s: 'pyo', t: "I'm not coming in. I'm not. I said there was a ghost. I said it about the storeroom and everybody laughed at me. Now it's followed me here." },
    { s: 'mrsbang', t: "Nobody's laughing now, Pyo-ya. Eat your rice." },
    { s: 'pyo', t: "I can eat it out here." },
    { n: "Then Mrs. Bang crossed herself." },
    { n: "Solar had seen her do it maybe four times in her life. At the hospital, once. At two funerals. On the morning she came home. Forehead, chest, left shoulder, right, small and quick and fierce, her lips moving, and then she turned round to the stove and began beating the rice with the paddle much harder than rice needed to be beaten." },
    { n: "Auntie Song had been standing by her armchair at the end of the stove the whole time with her little arms folded over her apron and her rubber boots planted, not looking at the clocks at all. Looking at Solar." },
    { n: "She said something in Mandarin. Low, clearly, across the kitchen, to Solar and to nobody else, in the voice she used for the ends of stories." },
    { s: 'auntie', t: "*When every clock in a house stops at the same hour, little moon, it's because the house is waiting for somebody. My grandmother said so. The house knows before the people do.*" },
    { n: "Solar looked at her. She looked at her with the face she used for Chinese buyers on the quays when she was nine, the polite empty Lee-daughter face that didn't understand a word, the face that had made grown men say things in front of her they'd never have said to her father." },
    { n: "Auntie Song had taught her every word of Mandarin she knew. Auntie Song looked back at the face, and knew exactly what it was, and let her have it. She went back to her dumpling skins." },
    { n: "Haechan was in the doorway from the garden. He'd come up for breakfast like every morning and stopped on the threshold and not come any further. He had a piece of gum in his mouth and he wasn't chewing it. He was looking at the kitchen clock, and then at her, and his face was doing nothing at all." },
    { glitch: { near: true } },
    { n: "Eomma passed through." },
    { n: "She came down the stairs in her cream cardigan with her hair already done, and stopped in the hall in front of the grandmother clock and looked at it for exactly as long as it took to look at it, and then came into the kitchen. She looked at nobody's face. She came round the table and stopped behind Solar's chair and put her hand on Solar's head, on her hair, which was pinned, and checked the pins, the way she'd checked them every morning since Solar was six. One. Two. Three. She pushed the third one in a little further." },
    { s: 'eomma', t: "Eat something." },
    { n: "Then she took her tea from Mrs. Bang and went through to the sunroom and shut the door." },
    { n: "Her father hadn't moved." },
    { n: "He was looking at the kitchen clock. He'd been looking at it since she came in, she realized, his glasses on, his hands flat on the folded paper, not polishing anything. He looked at it for a long time. The way you'd look at a man across a table who's just told you a number you didn't expect." },
    { n: "Then he took his glasses off, and turned his head, and looked at her." },
    { ifFlag: 'epi-s-appa-lie', then: [
      { n: "It was the look from the seventh stair. The one he'd given her over two cups of barley tea at midnight when she'd held the fever up between them and he'd let her. Patient. Sore. A man looking at a board in the floor he knows is loose, and deciding again, this morning, not to step on it." }
    ] },
    { ifFlag: 'epi-s-appa-quiet', then: [
      { n: "It was the look from the seventh stair. The one he'd given her over two cups of barley tea at midnight when she hadn't said anything at all, and he'd let the nothing sit there between them like a third cup. He was letting it sit again. Longer, this time. Heavier." }
    ] },
    { n: "He looked at her across the full kitchen for a long time, with the clocks all stopped round him and his daughter's face doing the polite empty thing it did, and he said nothing." },
    { n: "Nothing. He didn't polish the glasses. He just put them down on the paper, very gently, and looked, and she knew that face, she'd known it all her life. It was the face he wore when he was being told something by the house and didn't want it to see him hear." },
    { choose: [
      { t: "(Take Pyo his soup on the back step and sit with him.)", stat: { kindness: 1 }, then: [
        { n: "She got up, and ladled soup into a bowl, and took it out to the back step, and sat down beside Pyo on the cold concrete next to the koi bucket, in the dust that was still hanging over the garden, and put the bowl in his hands on top of the rice." },
        { s: 'pyo', t: "Agasshi. You shouldn't sit out here. It's cold. You were sick." },
        { s: 'solar', t: "I'm better." },
        { s: 'pyo', t: "...Do you think it's a ghost?" },
        { n: "She looked down into the bucket. Mr. and Mrs. Kim went round and round under their skin of dust, slow, unbothered, and she found she was grateful to them, two fish who'd been through a car crash and a hospital and a funeral and a move and didn't believe in anything but feeding time." },
        { s: 'solar', t: "I think it's an old house, Pyo-ya. Eat your soup." },
        { n: "He ate it. He kept looking at her sideways while he did, the way you'd look at somebody who'd just said something kind and not true." }
      ] },
      { t: "(Get up and try to wind the grandmother clock.)", stat: { proficiency: 1 }, then: [
        { n: "She got up and went through into the hall and opened the little glass door on the grandmother clock and put her finger on the pendulum and gave it a push, the way she'd watched her father do it every Sunday of her life." },
        { n: "It swung. Once. Back. Once more, shorter. Then it hung straight down again, perfectly still, the brass disc catching the light from the kitchen door, and the hands at the top didn't move, and she stood there with her finger out." },
        { n: "When she turned round, her father was in the kitchen doorway, watching her. He didn't say anything. He went back to the table." }
      ] },
      { t: "(Look back at Appa. Don't look away first.)", needs: { courage: 2 }, stat: { courage: 1 }, then: [
        { n: "She looked back. She didn't let her face do the polite empty thing. She just looked at him across the kitchen, her father, with his glasses on the paper and his stopped watch on his wrist, and let him look at her, and didn't look away." },
        { n: "It went on for a long time. Mrs. Bang stopped beating the rice. Auntie Song stopped folding." },
        { n: "He looked away first. Down, at the paper. He picked up his glasses and put them on and opened the paper, and turned a page, and she saw that his hand on the corner of it wasn't quite steady." },
        { s: 'appa', t: "Mrs. Bang. Is there more tea." }
      ] }
    ] },
    { n: "By noon every clock in the house had been set again, by her father, himself, with his glasses on, one at a time, the kitchen and the microwave and the rice cooker and the study and the car. He did the grandmother clock last. He wound it with the key from his waistcoat pocket and set the hands and started the pendulum with one finger, and it swung, and went on swinging, and he stood in front of it in the hall for a long time with his hands behind his back, listening to it tick." },
    { n: "Nobody mentioned the clocks at lunch. Everybody kept looking at them." },
    { flag: 'epi-s-clocks' }
  ] },

  // ───────────────────────────── 3/8, late: molihua ─────────────────────────────
  { id: 'epi-s-molihua', date: '3/8', slot: 'late', title: 'molihua', place: 'Incheon · The Lee House · Her Room', time: 'Late Night', scene: [
    { music: 'epi-s-danger' },
    { n: "Two in the morning. She knew without looking. She knew because the tide had just turned under the hill, she felt it go, and because she was awake, and because something had woken her." },
    { n: "Singing." },
    { n: "Down the garden. Loud. A woman's voice, coming up through the dark and the dust and through the glass of her window, off-key, a little sharp on the high notes and flat on the low ones, a song she'd known since before she could walk." },
    { glitch: 'epi-s-g-molihua' },
    { s: 'radio', t: "*Hao yi duo meili de molihua... hao yi duo meili de molihua...*" },
    { n: "Molihua. Jasmine flower. Sung exactly the way Auntie Song sang it on Sundays over the dumplings, exactly, every wrong note in the same place, every little catch of breath before the chorus, the same voice. Except Auntie Song only sang it on Sundays. And Auntie Song only sang it loud once." },
    { n: "Solar was out of bed and at the window before she'd decided to be." },
    { n: "Down at the bottom of the garden, the annex. The old silver radio on the sill. It was singing. It was singing so loud the glass of the annex window was buzzing with it, she could see the radio shiver on the sill with every note, and the light inside the annex had just come on." },
    { n: "In this house that song had only ever meant one thing. Auntie Song had sung it at the top of her voice in the kitchen once, this winter, to tell somebody upstairs that somebody else was coming up the stairs. Everyone who'd been in the house that night knew it. Molihua, loud, meant *someone's coming*." },
    { choose: [
      { t: "(Stay at the window. Count them.)", flag: 'epi-s-molihua-counted', stat: { knowledge: 1 }, then: [
        { n: "She didn't move. She stood at the window in the dark with her hand flat on the cold glass and looked past the annex roof, past the back wall, into the lane behind the house, where the lamp at the corner made a dim yellow cave in the dust." },
        { n: "Shapes. In the lane, by the back gate. She counted the way she always counted. One, by the gate, crouched. Two, behind him, standing. Three, at the corner, half out of the light. Four. She wasn't sure about four. A car at the far end of the lane with its lights off and its engine running, a thread of exhaust going up white in the lamp." },
        { n: "Men. Not from this house. Not from the other one. She knew every man in both houses by the way he stood, and she didn't know these." }
      ] },
      { t: "(Run down and wake the kitchen.)", stat: { courage: 1 }, then: [
        { n: "She went down the stairs in the dark in her socks, past the seventh stair without stepping on it, the way she'd learned at fourteen, and across the hall past the grandmother clock ticking in its case, and into the kitchen, and put the light on." },
        { n: "Auntie Song was in her armchair by the stove under a blanket, where she slept on the nights she missed the last bus and Mrs. Bang wouldn't let her walk. She was already awake. She was sitting bolt upright in the chair with the blanket clutched at her throat and her face white as rice paper, listening to her own voice coming up the garden, singing." }
      ] },
      { t: "(Open the window and shout for him.)", then: [
        { n: "She got the window open. The cold came in, and the dust, and the song, so loud now it filled the room. She leaned out into it." },
        { n: "She didn't need to shout. The annex door was already open. He was already out." }
      ] }
    ] },
    { n: "Haechan came out of the annex at a run." },
    { n: "No jacket. Boots, unlaced. Nothing in his hands; he'd never needed anything in his hands. He went up the side of the garden in the dark toward the back gate the way he went at anything, straight, fast, without looking to see if anyone was behind him, and the radio on the sill went on singing over his head at the top of its voice." },
    { ifEpiRoute: 'jungwon', then: [
      { n: "From the front of the house, round the corner by the onggi jars, the dark coat. It was his night. He came along the side path fast, not running, Jungwon didn't run, and reached the back gate a second after Haechan, and they stood at it shoulder to shoulder, the two of them, for once, without a meter of careful distance between them, because there wasn't time to measure one." }
    ] },
    { ifEpiRoute: ['haechan', 'family'], then: [
      { n: "From the gatehouse by the front steps, Minseok, in a vest and tracksuit trousers, carrying the heavy torch. He went round the side of the house after Haechan as fast as a man his size could go, which was faster than people expected." }
    ] },
    { n: "The song reached the chorus. The radio was shouting it." },
    { n: "In the lane, a man swore. She heard it, high and thin, a voice she'd never heard before. Then feet. Running. Several pairs, on the frozen ruts of the lane, going away fast, and a car door, and another, and an engine revving, and tires spinning on the grit and catching, and a car with no lights on went away down the lane past the corner lamp and round the bend toward the harbor road, and was gone." },
    { n: "The radio stopped." },
    { n: "Mid-line. Mid-word. *Hao yi duo mei—* and nothing. The annex window stopped buzzing. The garden was silent. The dust hung in the light from the kitchen." },
    { n: "Somewhere down the hill, a dog was barking at the place where the car had been." },

    { place: 'Incheon · The Lee House · Gate', time: 'Late Night', soft: true },
    { n: "By the time she got there, in her coat over her pajamas with her hair down and her boots on her bare feet, the back gate was open and the men of the house were standing in the lane." },
    { n: "Minseok's torch was pointing at the ground by the gatepost." },
    { n: "Rags. A bundle of them, gray, knotted, dropped against the post in the slush, and a pair of work gloves beside them, as if somebody had put down whatever they'd come to do and left in a hurry without it. That was all. Minseok turned the rags over with the side of his boot and looked at them for a long time. Nobody said what they'd been for. Nobody needed to." },
    { n: "Haechan crouched beside it. He didn't touch it. He looked at it for a while, and then at the back wall of the house, the old wooden eaves over the kitchen, the dry winter vines, the rags. His face was doing nothing at all, and he'd gone so quiet that she could hear the dog down the hill over him." },
    { ifEpiRoute: 'jungwon', then: [
      { n: "Jungwon was standing a little way up the lane, alone, looking at the ruts where the car had spun. He'd taken out his phone, and then, she watched him think it, put it back in his pocket without using it. He looked at the can. He looked at the eaves. He touched the face of his watch." },
      { n: "When he looked at her, standing in the gateway in her coat, his face went perfectly still. Then he walked down the lane to her and stood between her and the rags, so she couldn't see it, which was entirely unnecessary and which she didn't point out." }
    ] },
    { n: "Feet on the garden path behind her. Slippers. Slow." },
    { n: "Her father came through the back gate in his cardigan and pajama trousers with his reading glasses on their cord round his neck, and stopped, and looked at the rags in the torchlight, and at the rags, and up at the eaves of his own kitchen." },
    { n: "Then he took his glasses off the cord, and took the handkerchief out of his cardigan pocket, and began to polish them." },
    { n: "Slowly." },
    { n: "Slower than she'd ever seen. Round and round, one lens, then the other, then the first again, his eyes on the rags the whole time, and the lane was so quiet that she could hear the soft cotton squeak of it on the glass. Minseok looked at the ground. Haechan stood up." },
    { s: 'appa', t: "Nobody rings anybody about this." },
    { s: 'minseok', t: "Chairman." },
    { s: 'appa', t: "Not tonight. Not tomorrow. Not on any phone in this house. Minseok-ah, take it to the garage. Put it on the shelf. Don't open it." },
    { s: 'minseok', t: "Chairman." },
    { n: "He finished polishing. He put the glasses on. He looked at Haechan." },
    { s: 'appa', t: "Son." },
    { s: 'haechan', f: 'serious', t: "Hoejangnim." },
    { s: 'appa', t: "Sit with the gate till it's light." },
    { s: 'haechan', f: 'serious', t: "I was going to." },
    { s: 'appa', t: "I know you were." },
    { ifEpiRoute: 'jungwon', then: [
      { n: "Then he looked at the Yang boy standing in his lane at two in the morning in a dark coat between his daughter and a bundle of rags, and something happened in his face that she couldn't read, and he inclined his head to him. Not a bow. The width of a hand." }
    ] },
    { n: "He looked at her last. Her hair down. Her bare ankles in her boots. He didn't ask what had woken her, or why she was in the lane, or how it was that three of them had been at the gate before the men had got it open." },
    { s: 'appa', t: "Bed, Sol-ah." },

    { place: 'Incheon · The Lee House · Kitchen', time: 'Late Night', soft: true },
    { n: "She didn't go to bed. She went to the kitchen." },
    { n: "Mrs. Bang was there, in her quilted dressing gown, putting the kettle on, because there was nothing at two in the morning in this house that Mrs. Bang couldn't answer with a kettle. And Auntie Song was still in her armchair by the stove, upright, the blanket at her throat. Her face was white. Her little hands were shaking on the blanket, and Solar had never seen them shake, not over a knife, not over a fish, not over anything." },
    { n: "She looked up when Solar came in. She spoke in Mandarin. In her kitchen she only ever spoke Mandarin, and her voice was hoarse, as if she was the one who'd been singing." },
    { s: 'auntie', t: "*Who taught that radio my song.*" },
    { n: "Solar crouched in front of the armchair. She took the small shaking hands in hers, the knife-hard calluses, the fingers that had taught hers to open a flounder at eleven, and held them." },
    { s: 'solar', t: "*It was warning us, Auntie. It did it the way you did. Loud.*" },
    { n: "Auntie Song looked at her for a long time. At her face, and her hair down, and her eyes. She'd been listening at doors for nineteen years. She knew what she was looking at, or half of it, and she knew which half she'd never be told." },
    { s: 'auntie', t: "*Then it learned it from me.*" },
    { n: "She turned her hands over in Solar's and held on back, hard, and her chin came up, and some of the white went out of her face." },
    { s: 'auntie', t: "*Good. It learned it right.*" },
    { n: "Down the garden, the annex window was dark again. Through the kitchen window Solar could see him sitting on the back step by the gate in the lantern light, in his shirtsleeves, with Mrs. Bang's crane quilt off his own bed round his shoulders, his back against the gatepost, facing the lane." },
    { n: "Later, before light, she went down with a cup of barley tea and found the radio on the annex sill. It was cold. The dial was turned to off. It had been off, he told her without looking round, when he'd gone out. It had been off all night." },
    { n: "The warning had worked. That was the thing she kept turning over, with her hands round her own cup, on the back step beside him, while the sky went gray over the dust. Whatever it was that had been leaking through into this house for three weeks, the bells and the clocks and the cold tea and the tide, it had, tonight, for the first time, done something for them." },
    { flag: 'epi-s-molihua' }
  ] },

  // ───────────────────────────── 3/9, late: fight 3, unheard ─────────────────────────────
  { id: 'epi-s-unheard', date: '3/9', slot: 'late', title: 'unheard', place: 'Incheon · The Lee House · Her Room', time: 'Late Night', scene: [
    { music: 'epi-s-half' },
    { n: "Saturday. The dust had thinned in the afternoon and come back at dusk, and the house had gone to bed early, all of it, the way a house does the night after something nearly happened to it. Mrs. Bang had checked every window on the ground floor twice. Minseok was in the gatehouse. Haechan was in the annex with the light on, and the radio on the sill was silent, and every so often she saw him look at it." },
    { n: "Her father's study light was on downstairs; she'd seen the yellow line of it under the door when she came up. She'd heard him humming in there earlier, through the floor, low, an old trot song with no words, the way he hummed when he couldn't sleep and didn't want anybody to know it." },
    { n: "She sat up in bed in the boat pajamas with her hair down and her knees drawn up, and watched the clock, because that was what you did now, and listened to the house." },
    { n: "11:58. The grandmother clock in the hall, ticking. Her father had wound it himself." },
    { n: "11:59. On the stairs, a creak. The seventh stair." },
    { n: "She knew that creak the way she knew her own heartbeat. It was the sound of her father coming up to look at her door. He'd come up every night she'd been gone, she knew that now; the house had told her, the way it told her things, in pieces. She got out of bed. She'd go and meet him. She'd open the door and he'd be on the seventh stair with his glasses on their cord, and she'd say *Appa, I'm awake*, and he'd say *so am I*, and they'd sit." },
    { n: "She opened her door." },
    { glitch: { stage: 3 } },
    { glitch: 'epi-s-g-unheard' },
    { place: 'Incheon · The Lee House at Midnight', time: 'Midnight' },
    { dark: true },
    { n: "The landing was green." },
    { n: "Not lit green. Green the way the bottom of a pool is green, the light coming from nowhere and everywhere, flat, cold, and the dust hanging in it outside the landing window not drifting, not falling, every grain of it stopped in the air like a sky full of tiny fixed stars. The moon in the window was too big. It hung over the harbor so close she could see the gray seas on its face, and it was looking in." },
    { n: "There was nobody on the stairs." },
    { n: "The stairs went down. They went down the way they always went, fourteen steps to the hall, her father's seventh in the middle, and then, at the bottom, they didn't stop. They went on going down. Through the floor of the hall, past where the hall should be, down and down, the banister going with them, polished wood turning to black and the treads turning to black and gold tile, a long way down, a staircase in a house that had never had a cellar, going down into the particular wrong gold that she knew the way you know your own handwriting." },
    { n: "She went down. She didn't decide to. Seven steps. Her bare foot on the seventh stair, and it didn't creak." },
    { n: "From there she could see into the kitchen through the open door. The long table. The chairs. Ten chairs, the full kitchen, ten people and a bucket of fish, and every one of the chairs was a coffin now, upright, black, standing at its place round the table like the people sitting there had all stood up at once and turned to wood. Mrs. Bang's place by the stove. Her father's, at the head. Her own. Through the back door, on the step, the koi bucket, and the water in it black and still, and two fish hanging in it mid-turn, orange in the green, not moving." },
    { n: "In the hall, the grandmother clock said 12:00. Its pendulum hung straight down." },
    { n: "Her hand closed on the haft before she'd reached for it." },
    { n: "Then they came up the stairs." },
    { n: "From below. From the gold. She heard them before she saw them, feet on tile, a dog's claws, someone breathing hard, and then the white hair, and the gloves, coming up out of the floor of her father's hall, and the others behind him on the steps, a cap, a bow, a sword, a blonde girl, the small white dog bounding ahead of all of them up the tiles with his ears flat back." },
    { n: "This time they saw her." },
    { n: "The girl with the bow saw her first. She stopped dead on the black stairs below the hall and her bow came up and then dropped, and her face went white in the green, and she screamed it, high and cracked, up the stairwell of the Lee house." },
    { n: "*SOLAR?!*" },
    { n: "The boy with the cap nearly fell over. *Wh— is that— that's— DUDE—*" },
    { n: "And in front, gloves up, one foot on the stair below hers, stopped as if he'd walked into a wall, the boxer. White hair. His coat. Staring up at her across seven stairs of green light as if she were a ghost, which she supposed she was. She could see her own outline in his eyes. Flickering. There and not there. Like a picture on a bad television." },
    { n: "*...Sol?*" },
    { n: "She answered him. She shouted it down the stairs. *Senpai. Senpai, it's me, I'm here, I'm right here, I'm on the stairs*, and her mouth moved and her throat tore with it and nothing came out. Nothing. Not a sound. Like screaming underwater. Like a television with the sound off." },
    { n: "She watched him watch her mouth move. She watched him understand that he couldn't hear her." },
    { n: "And from everywhere and nowhere, the voice, shaking. *I can see her. I've got her, she's on the stairs, she's right there in front of you. But there's nothing coming from her. No sound. Nothing. It's like she's behind glass.*" },
    { n: "Then the coffins in the kitchen began, one after another, to open." },
    { battle: { id: 'epi-strangers-3', kind: 'scripted', script: 'epi-strangers-3', title: 'Unheard', forced: true, desc: 'The Lee house at midnight, half Tartarus. They can see her now. They can’t hear her.', notes: 'Half-present fight 3 (FEMC-EPILOGUE-PLAN 2.4): visible, unheard. She takes half damage; her Talk is "…"; a Shadow she marks with a skill or Analyze is one the allies follow. Theurgy is hers again; no Bond / All-Out. Cannot be lost: she fades home instead.' } },
    { n: "She couldn't tell them anything. So she showed them." },
    { n: "She went for the biggest one first, the one that came out of her father's place at the head of the table, the way they'd always done it, all of them together, and she put everything she had into it, and somewhere behind her on the stairs she heard him. *There. The one she's on. Everyone, follow her.* And they did." },
    { n: "They followed her through her own kitchen. Round the table. Past Mrs. Bang's stove and Auntie Song's armchair and the calendar on its nail, which said a number she couldn't read. They went where she went and hit what she hit, and the dog stayed at her heel the whole time, and it was the most she'd been understood by anyone in a month, and she couldn't say a word." },
    { n: "At the end they were all on the stairs again, breathing hard, the kitchen empty behind them, the coffins gone back to being coffins. He was one stair below her. The seventh. He was standing on her father's stair." },
    { n: "He put his glove out." },
    { n: "Not to touch her. Just out, open, held in the air between them, the way you'd hold a hand out in the dark so someone could walk into it." },
    { n: "She put her hand up to meet it." },
    { dark: false },
    { place: 'Incheon · The Lee House · Stairs', time: 'Late Night', soft: true },
    { n: "Wood." },
    { n: "She was sitting on the seventh stair with her hand up in the air in front of her, palm out, against nothing. The stair under her was the ordinary stair, the polished one, and the hall at the bottom was the ordinary hall, with the rug and the umbrella stand and the grandmother clock ticking in its case, the pendulum swinging. Her phone, in her pajama pocket, said 12:03." },
    { n: "Her throat was raw. Like she'd been shouting for an hour. She swallowed and it hurt all the way down." },
    { ifEpiRoute: ['haechan', 'family'], then: [
      { n: "At the bottom of the stairs, in the kitchen doorway, Haechan. He'd come in through the back door they left on the latch now for whoever had the night. He was standing in the doorway in his socks with one hand on the frame, looking up at her on the seventh stair, and he didn't come up. He didn't say anything. He looked at her raised hand." },
      { n: "Then he came up the stairs, slowly, one at a time, the way you'd go up to a bird on a ledge, and sat down on the sixth, below her, and leaned his shoulder against her knee, and stayed there." }
    ], else: [
      { n: "At the bottom of the stairs, in the kitchen doorway, Jungwon. He'd come in through the back door they left on the latch now for whoever had the night. He was standing with his right hand on the newel post at the foot of the banister, holding on to it, in his dark coat, looking up at her on the seventh stair, and his face was so still it frightened her." },
      { n: "He came up the stairs, slowly, one at a time, and stopped on the sixth, below her, and stood there. Then he lifted his right hand, palm out, and put it flat against hers, where it was still raised in the air. Exactly where the glove had been." }
    ] },
    { n: "Down in the hall, behind the study door, very low, her father was humming. The same old trot song with no words. It hadn't stopped. She didn't know if it had stopped." },
    { choose: [
      { t: "(Say your own name out loud, very quietly, to check.)", then: [
        { n: "She opened her mouth and said her own name to the dark hall, very quietly, to check." },
        { s: 'solar', t: "...Solar." },
        { n: "It came out. Hoarse, small, barely there. It came out. That was something." }
      ] },
      { t: "(Say his name.)", stat: { kindness: 1 }, then: [
        { ifEpiRoute: ['haechan', 'family'], then: [
          { s: 'solar', t: "...Donghyuck-ah." },
          { n: "It came out hoarse and small and barely there. His shoulder pressed harder against her knee. He didn't answer. He didn't have to. He'd heard it. That was the whole point." }
        ], else: [
          { s: 'solar', t: "...Jungwon." },
          { n: "It came out hoarse and small and barely there. His hand stayed flat against hers. He closed his eyes, just for a second, the way you close them when you've been listening for something for a long time and finally hear it." },
          { s: 'jungwon', f: 'sad', t: "Yes. I'm here." }
        ] }
      ] }
    ] },
    { n: "Down in the study the humming went on, low, wordless, an old man's song in an old house at midnight, and somebody on the seventh stair listened to it until it stopped, and the light under the study door went out, and the house was quiet." },
    { flag: 'epi-s-unheard' }
  ] }

  );
})();
