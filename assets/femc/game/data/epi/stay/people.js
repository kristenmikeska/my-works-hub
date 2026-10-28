/* The Stay epilogue (batch 8, Iwatodai, 3/24-4/6/2010): the home bonds (S.E.E.S.), five routines and the act's texts.
   People writer. Data only; loaded with the world. Merges into FEMC_EPI_WORLDS.stay; never replaces a list. Assigns
   B.<id> = {...} outright (this is the only people file for Stay).

   Hangouts (BOTH = after/evening; route reads the LOCKED route, so nothing is route-gated before 3/29):
     akihiko   epi-st-akihiko-1   'splits'           3/24-3/28 after (the riverside, he times her; four-oh-two)
               epi-st-akihiko-2   'the last bag'     3/29-4/5 after (the empty boxing club; his box; the key)
               epi-st-akihiko-3   'red gloves'       4/1-4/5 evening, route akihiko (the roof garden; warm, cut away)
     shinjiro  epi-st-shinjiro-1  'visiting hours'   3/24-4/5 after (3F ward; ifYear awake: the spoon / else: his hand)
               epi-st-shinjiro-2  'the oldest tree'  3/29-4/5 after, route shinjiro (awake: the courtyard, a petal /
                                                     else: a branch on the sill, his hand arrives)
     yukari    epi-st-yukari-1    'borrowed'         3/24-3/30 BOTH (the fountain; she offers her surname, fast, to a crepe)
               epi-st-yukari-2    'the front step'   4/1-4/5 evening, after epi-st-charms ("Are you going somewhere?")
     junpei    epi-st-junpei-1    'operation'        3/24-3/30 BOTH (the spring-break notebook; the crossed-out names)
               epi-st-junpei-2    'april fool'       4/1-4/5 BOTH, after epi-st-charms (the milkshake; "was it them?")
     mitsuru   epi-st-mitsuru-1   'the inventory'    3/25-3/31 evening, after epi-st-rooms (the command room packed; her room kept)
               epi-st-mitsuru-2   'in that order'    4/1-4/5 evening (the bike; Moonlight Bridge; "it will have to go through me")
     fuuka     epi-st-fuuka-1     'attempt nine'     3/24-3/26 BOTH (the hanami bento; she keeps counting too many)
               epi-st-fuuka-2     'three bells'      4/1-4/5 BOTH (the roof; Juno hears three bells in rooms with no doors)
     ken       epi-st-ken-1       'the long way'     3/25-4/4 after (Naganaki Shrine with Koromaru; sixth grade on the 7th)
     aigis     epi-st-aigis-1     'bearings'         3/30-4/5 BOTH (Seaside Park; one signal here, three elsewhere)
   Routines: epi-st-rt-breakfast (early 3/25-3/31, the table laid too long), epi-st-rt-koromaru (early 3/26-4/5, the walk; he
     waits at the door), epi-st-rt-bench (after 3/26-4/5, the station's last bench, empty; a horn with no train), epi-st-rt-laundry
     (evening 3/25-4/4, Yunjin's rabbit sock in the dryer), epi-st-rt-wall (late 3/29-4/5, Akihiko texting at 1 a.m.).
   Texts: threads akihiko, shinjiro, yukari, junpei, mitsuru, fuuka, ken, sees ('S.E.E.S. (retired)', a group; Junpei renamed
     it). 12 dated (3/24-4/6), 5 ambient. S.E.E.S. only; the dead threads from home are the story's glitches, not texts.
   Flags set: epi-st-shinji-up (shinjiro-1 / -2, only in the ifYear awake branch: lets Shinjiro's texts gate on him being able
     to type, since shinji-awake isn't copied into the epilogue's flags).
   Flags read: epi-route-akihiko / epi-route-shinjiro (texts; route on hangouts), epi-st-shinji-up (texts), epi-st-rooms-box /
     epi-st-rooms-keep (laundry routine), events epi-st-rooms, epi-st-hanami, epi-st-charms, epi-st-clocks, epi-st-crossroads.
     ifYear anyFlag ['shinji-awake', 'ending-shinjiro'] (both shinjiro hangouts). ifEpiRoute 'akihiko' / 'shinjiro' (the wall
     routine). ifGlitch 3 (akihiko-2, fuuka-2, aigis-1, koromaru, laundry).
   Glitches: no reserved ids. Bare kinds only, gated { ifGlitch: 3 }: 'clock' (akihiko-2), 'sound' (fuuka-2). One lie carries
     { glitch: { strain: 1 } } (junpei-2, "It was nothing. The pipes.").
   Speakers / faces: solar; akihiko (neutral, happy, serious, serious-3, blushing, sad); shinjiro (neutral, happy, sad);
     yukari (neutral, serious, blushing, surprised, sad); junpei (happy, serious, sad, neutral, flustered); mitsuru (neutral,
     serious, happy, sad); fuuka (happy, neutral, sad, surprised); ken (neutral, serious, happy, sad); aigis (neutral, serious,
     surprised, happy); koromaru (happy); nurse (no portrait, in cast).
   Places used beyond the brief's list: 'Iwatodai Dorm · Laundry Room' and 'Gekkoukan High · Boxing Club' (the lead: both have
     the main game's own background rules, which the Stay world reuses).
   Decisions for the lead: Mitsuru has arranged for Solar to keep her room when the dorm passes to the school's housing office
     (no date given); Mitsuru says she'll come back for dinner on Sundays. Yukari offers "Takeba" as a joke that isn't one; Solar
     never takes it (the enrollment box stays the story's). Akihiko's April stays vague: "a university that's asked, a gym in
     Port Island that's asked, a man who keeps calling Mitsuru about me" (she won't say who). Ken starts sixth grade on the 7th.
     Junpei's April Fool's prank was salt in the sugar bowl (the story writer owns the breakfast; if theirs differs, change
     junpei-2's two lines). Aigis gives the bell's frequency in the group chat as 1318 hertz. Fuuka made one bento box too many
     on purpose. No new named extras. */
(() => {
  const R = ((window.FEMC_EPI_WORLDS ||= {}).stay ||= {});
  const B = (R.bonds ||= {});
  const BOTH = ['after', 'evening'];
  const AWAKE = { anyFlag: ['shinji-awake', 'ending-shinjiro'] };

  /* ── Akihiko ── */
  B.akihiko = { id: 'akihiko', role: 'friend', hangouts: [
    { id: 'epi-st-akihiko-1', title: 'splits', hint: "Akihiko is stretching against the dorm's front rail in running clothes at two in the afternoon, which is not his hour.",
      after: '3/24', until: '3/28', slots: ['after'], place: 'Iwatodai · Riverside', time: 'Daytime', scene: [
      { music: 'epi-st-spring' },
      { n: "He'd already run at five. He told her so on the steps, as if she might have missed it, as if she hadn't heard the front door go at ten to five the way she'd heard it every morning for a year, and then he said spring break was making him stupid, which was the closest Akihiko Sanada had ever come to admitting he didn't know what to do with a day nobody needed him for." },
      { n: "So they ran the river. The same path, the same rail, the same stretch past the rowing club where the gravel gave and you had to shorten your stride, and on the far bank the plum trees had gone over and dropped their petals into the slow brown water, and the cherry buds above them were swollen and pink at the tips and holding out, like they were waiting to be asked." },
      { n: "He ran half a step behind her shoulder, where she couldn't see him, and called the splits out loud in the flat voice he kept for numbers that mattered." },
      { s: 'akihiko', f: 'neutral', t: "Four-eleven. You're dropping your left arm." },
      { s: 'solar', t: "I'm not dropping anything." },
      { s: 'akihiko', f: 'neutral', t: "You've been dropping it since November. I didn't say anything in November." },
      { s: 'solar', t: "Why not?" },
      { s: 'akihiko', f: 'serious', t: "You had other things to carry." },
      { n: "She ran the next stretch with her left arm where it should have been, and it cost her more than it should have, and at the bridge she stopped with her hands on her knees and her lungs full of something hot and the river going past like it had somewhere to be." },
      { s: 'akihiko', f: 'happy', t: "Four-oh-two." },
      { n: "He held the stopwatch out so she could see it. He'd stopped it the second her feet stopped, not a tenth late, and he held it out the way you'd hold out something you found on the path and thought somebody might want back." },
      { choose: [
        { t: "(Take it. Go again.)", then: [
          { n: "She went again. He didn't say anything about it, which was how she knew it was the right answer, and on the third lap he ran beside her instead of behind, close enough that their shoulders nearly touched on the turn by the rowing club, and neither of them called a single split for the whole last stretch." },
          { stat: { courage: 1 } }
        ] },
        { t: "What do you train for, when there's nothing to train for?", then: [
          { s: 'akihiko', f: 'serious-3', t: "...I don't know yet." },
          { n: "He looked at the river for a while. Then he reset the stopwatch with his thumb, the small beep of it, and held it up between them. It said *again*, since he wouldn't, and she went." },
          { bond: { akihiko: 1 } }
        ] }
      ] }
    ] },

    { id: 'epi-st-akihiko-2', title: 'the last bag', hint: "Akihiko has the boxing club's key for one more week. He says he's returning it. He's had it in his hand since breakfast.",
      after: '3/29', until: '4/5', slots: ['after'], place: 'Gekkoukan High · Front Gate', time: 'Daytime', scene: [
      { n: "Gekkoukan with nobody in it was a different building. The gate stood open a person's width, and the path up to it had gone pink at the edges where the first blossoms had come down overnight, and inside, the halls smelled of floor wax and shut windows, and every footstep came back to them twice." },
      { place: 'Gekkoukan High · Boxing Club', time: 'Daytime', soft: true },
      { n: "The boxing club was at the end of the ground floor, past the trophy case with his name on four things in it. He unlocked it the way you'd unlock your own front door. The ring, the mats, the heavy bag on its chain in the corner, a whiteboard with the spring schedule on it in a hand that wasn't his anymore, and on the bench by the door a cardboard box with SANADA on the side in marker, half full." },
      { s: 'akihiko', f: 'neutral', t: "Captain's stuff. Twenty minutes." },
      { n: "It took him an hour. A jump rope, a roll of tape, a framed photo of the club from his first year with every face in it squinting into the sun, and then a pair of old wraps, gray with washing, that he stood holding for a long time like they'd asked him something and he was being polite about not answering." },
      { s: 'solar', t: "What are you doing in April?" },
      { s: 'akihiko', f: 'serious', t: "There's a university that's asked. There's a gym in Port Island that's asked. There's a man who keeps calling Mitsuru about me, and she won't tell me who, and she thinks that's funny." },
      { s: 'solar', t: "That's not an answer." },
      { s: 'akihiko', f: 'neutral', t: "No." },
      { ifGlitch: 3, then: [
        { glitch: 'clock' },
        { n: "The clock over the whiteboard said twelve. It had said a quarter past one when they came in, she was sure of it, and now it said twelve exactly with the second hand stopped dead on the twelve beside it, and he looked up at it when she did and didn't say anything, and put the wraps in the box a little faster than he'd taken them out." }
      ] },
      { choose: [
        { t: "(Hold the bag for him. One round.)", then: [
          { n: "She leaned into the heavy bag the way he'd taught her in May, shoulder in, feet set, and he looked at her for a second like she'd said something in a language he hadn't known she spoke. Then he hit it. Three minutes, the old rhythm, left-left-right and the breath going out of him on every one, and the chain sang on its hook and the bag shoved back into her shoulder like a living thing, and when the round was over he stood there with his hands down, breathing like a man who'd just set something heavy on the floor." },
          { s: 'akihiko', f: 'happy', t: "...Thanks. I wanted to hear it one more time." }
        ] },
        { t: "You could stay. Help with the first-years.", then: [
          { s: 'akihiko', f: 'sad', t: "Then I'd never leave." },
          { n: "He said it like a fact about weather. He'd thought about it, then, which was its own answer, and he'd decided, which was another one, and he picked up the box." }
        ] }
      ] },
      { n: "He locked the door and dropped the key through the slot in the staff room door, where it made a very small sound for a thing that had opened a whole room for three years. Then they walked down the hill through the petals with the box between them, his hand on one side and hers on the other, which was a stupid way to carry a box, and neither of them suggested a better one." }
    ] },

    { id: 'epi-st-akihiko-3', title: 'red gloves', hint: "There's a light on in the roof garden. Akihiko is up there with the watering can, which is a thing he does now, apparently.",
      after: '4/1', until: '4/5', slots: ['evening'], route: 'akihiko', place: 'Iwatodai Dorm · Rooftop · Garden', time: 'Evening', scene: [
      { music: 'epi-st-romance' },
      { n: "Mitsuru's garden had come through the winter better than anybody. The planters along the railing were green again, herbs and a row of something with white flowers that smelled faintly of honey, and Akihiko was watering them in a T-shirt in an April wind with the grim focus of a man doing roadwork, because Mitsuru had left a list, and the list was in ink." },
      { n: "The red gloves were on the bench. Hers, the small ones, worn pale at the knuckles, the ones he'd given her in December. She'd left them on her desk that morning. She had not brought them up here." },
      { s: 'solar', t: "Were you in my room?" },
      { s: 'akihiko', f: 'blushing', t: "Your door was open. They were on the desk. I thought you'd want them. If." },
      { s: 'solar', t: "If what?" },
      { s: 'akihiko', f: 'serious-3', t: "If something comes. You'd want your hands covered." },
      { n: "He'd heard the bell in the kitchen on the first, the same as everyone, and he hadn't asked her about it once, not at breakfast and not since, which she'd thought at first meant he hadn't noticed and had understood by lunch meant the opposite." },
      { s: 'akihiko', f: 'serious', t: "I'm not going to ask where you go at night. I know you go somewhere. Your hair was wet the other night and it hadn't rained." },
      { s: 'solar', t: "Akihiko." },
      { s: 'akihiko', f: 'blushing', t: "I'm just saying if you go, wear the gloves. That's all. That's all I'm saying." },
      { n: "It wasn't all he was saying. He'd run out of the words he had for it, that was all, and he'd brought the gloves up instead, because a pair of gloves was something you could hold out to a person. She picked them up. She put them on, one and then the other, and held her hands out to him, and he did up the straps for her the way he had in the club in May, quick and careful with his big scarred fingers, and then he didn't let go of her wrists." },
      { n: "The wind came in off the bay and went straight through his shirt and he didn't seem to notice. She stepped in, gloves and all, until her forehead was against his collarbone and the watering can had tipped over somewhere by her foot and was soaking into her sock, and neither of them moved to fix that either." },
      { s: 'akihiko', f: 'happy', t: "You're getting water in your shoe." },
      { s: 'solar', t: "I know." },
      { n: "He laughed, a short surprised breath into her hair, and his arms went around her slowly, the way you'd close your hands around something that had landed on you of its own accord and might, if you were very still, decide to stay there. The light over the stairwell door went off on its timer. Nobody went down to turn it back on." },
      { bond: { akihiko: 1 } }
    ] }
  ] };

  /* ── Shinjiro ── */
  B.shinjiro = { id: 'shinjiro', role: 'friend', hangouts: [
    { id: 'epi-st-shinjiro-1', title: 'visiting hours', hint: "Visiting hours at Tatsumi Memorial run ten to eight. The bus from the station takes twenty-two minutes. You've timed it.",
      after: '3/24', until: '4/5', slots: ['after'], place: 'Tatsumi Memorial Hospital · 3F Ward', time: 'Daytime', scene: [
      { n: "The third floor of Tatsumi Memorial smelled the way it had smelled since October, disinfectant and boiled rice and the cut flowers somebody's family always brought too many of, and the nurse at the station looked up when the elevator opened and went straight back to her chart, which was how the nurses said hello to Solar now. She'd been coming long enough to count as furniture." },
      { ifYear: AWAKE, then: [
        { n: "He was sitting up. That still landed somewhere under her ribs every time, the plain fact of it, a man sitting up in a bed with the beanie on crooked and a tray table across his lap, a bowl of rice on it and a spoon in his left hand, because the right one wasn't ready yet." },
        { n: "Physio had him doing it with the right twice a day. Grains of rice from one bowl to another, one at a time. She'd seen him at it once through the gap in the door, the bad hand curled around the spoon like it belonged to somebody he didn't trust, and his jaw, and she'd gone back down to the lobby and bought a juice she didn't want and come up again ten minutes later so it could be the first time she'd seen anything." },
        { s: 'shinjiro', f: 'neutral', t: "...You eat yet?" },
        { s: 'solar', t: "I had breakfast." },
        { s: 'shinjiro', f: 'neutral', t: "Junpei made breakfast." },
        { s: 'solar', t: "Yes." },
        { s: 'shinjiro', f: 'neutral', t: "...So no." },
        { n: "He pushed the bowl an inch toward her with the back of his good hand. Hospital rice, the kind that kept the shape of the scoop. She ate half of it in the plastic chair, and he watched her do it with the same grim attention he'd once given a pot on a low flame, and every time she slowed down he looked at the bowl until she didn't." },
        { s: 'shinjiro', f: 'sad', t: "...Aki says you're still here. Like, here here." },
        { s: 'solar', t: "I told you that myself." },
        { s: 'shinjiro', f: 'neutral', t: "...Wanted to hear somebody else say it. So I'd know you weren't just being nice to a guy in a bed." },
        { flag: 'epi-st-shinji-up' }
      ], else: [
        { n: "He was asleep. Mostly asleep, the doctors said, in the careful way doctors said things that could still go either way, and the machines breathed for the room, and the beanie sat folded on the bedside table where she'd folded it, the last time, and the time before that." },
        { n: "She pulled the chair up and talked. She'd stopped feeling stupid about it around Christmas. She told him about spring break, about Junpei's notebook, about Koromaru eating a whole rice ball off Ken's plate while Ken was saying grace, about the rooms upstairs that nobody was sleeping in and the things still on the shelves in them." },
        { n: "Under her hand his fingers moved. A twitch, then nothing, then again, the forefinger drawing a short line across her knuckle and stopping, like someone writing a word in the dark and losing the pen halfway through." },
        { s: 'nurse', t: "He does that when you talk. Only when you talk. I've been writing it down." },
        { s: 'solar', t: "What else do you write down?" },
        { s: 'nurse', t: "That you came. Every day. It's on the chart, under visitors. It's a long list now." }
      ] },
      { n: "On the way out she stopped at the window at the end of the corridor, where you could see the bay and the bridge and, if you knew where to look, the roof of the dorm. She looked. She always looked. Then she went down in the elevator with her hands in her pockets, and one of them was warm, and she kept it in there all the way to the bus." },
      { stat: { kindness: 1 } }
    ] },

    { id: 'epi-st-shinjiro-2', title: 'the oldest tree', hint: "The nurse says the cherry tree in Tatsumi Memorial's courtyard is the oldest one in the city. She says that about every tree.",
      after: '3/29', until: '4/5', slots: ['after'], route: 'shinjiro', place: 'Tatsumi Memorial Hospital · 3F Ward', time: 'Daytime', scene: [
      { music: 'epi-st-romance' },
      { ifYear: AWAKE, then: [
        { place: 'Tatsumi Memorial Hospital · Courtyard', time: 'Daytime' },
        { n: "It had taken one wheelchair, two orderlies, a blanket he refused and then didn't, and twenty minutes of paperwork at the nurses' station, to get him down to the courtyard, where a single old cherry tree had come out all at once over the bench in the middle like it had been waiting for him in particular and was a little annoyed about how long he'd taken." },
        { n: "She pushed. He let her, which was its own small miracle. He sat with his hands in his lap, the right resting on the left like the left was holding it in place, and looked up into the blossoms with the face of a man who suspected them of something." },
        { s: 'shinjiro', f: 'neutral', t: "...They're early." },
        { s: 'solar', t: "They're right on time. You're late." },
        { s: 'shinjiro', f: 'happy', t: "...Tch." },
        { n: "A petal came down and landed on the blanket over his knees. He looked at it. Then, slowly, with his jaw set, he moved the right hand. It took a long time. The fingers closed on the petal and missed and closed again and got it, between thumb and forefinger, pinched so carefully it didn't bruise, and he held it out to her, and his whole arm was shaking with the work of holding up a thing that weighed nothing at all." },
        { choose: [
          { t: "(Take it.)", then: [
            { n: "She took it, and his hand with it, and held on, and he let his weight go back into the chair and back into her where she stood behind him, his head tipping against her stomach, the beanie knocked crooked, his eyes shut against the light coming down pink through the branches." },
            { s: 'shinjiro', f: 'neutral', t: "...Don't tell Aki I did that." },
            { s: 'solar', t: "Did what?" },
            { s: 'shinjiro', f: 'happy', t: "...Good." }
          ] },
          { t: "(Let him keep holding it.)", then: [
            { n: "She didn't take it. She let him hold it, the way you let somebody finish a sentence that's costing them, and counted under her breath, and he heard her counting and didn't tell her to stop. Forty. Then his fingers opened and the petal dropped and he caught it on the blanket with the left hand and put it in the pocket of his hospital shirt, and didn't say why." },
            { s: 'shinjiro', f: 'sad', t: "...Physio wants forty. Did forty." },
            { s: 'solar', t: "I know. I counted." },
            { s: 'shinjiro', f: 'neutral', t: "...Yeah. I know you did." }
          ] }
        ] },
        { flag: 'epi-st-shinji-up' }
      ], else: [
        { n: "He couldn't go down to the courtyard, so she brought it up. A branch the length of her forearm with six blossoms open on it and three still shut, which she'd been told off by the groundskeeper for, in a juice bottle with the label peeled off, on the windowsill where the light came in." },
        { n: "She told him about the tree. She told him the nurse said it was the oldest one in the city, and the nurse said that about every tree. She told him he'd hate it, all that pink, and that he'd stand under it anyway with his hands in his coat pockets and pretend he'd only stopped to light something." },
        { n: "His hand moved. She'd stopped holding her breath when it did; now she just watched. It moved across the sheet toward the window, an inch, then two, the fingers loosening, reaching for the light or the branch or nothing, and she put her own hand down where it was going so that it would have something to arrive at." },
        { n: "It arrived. It closed. Not all the way, not tight, but closed, around two of her fingers, and stayed. She sat very still in the plastic chair for the next hour while the light moved across the bed and the branch on the sill let go of a petal at a time, and she didn't call the nurse, and she didn't take her hand back." }
      ] },
      { bond: { shinjiro: 1 } }
    ] }
  ] };

  /* ── Yukari ── */
  B.yukari = { id: 'yukari', role: 'friend', hangouts: [
    { id: 'epi-st-yukari-1', title: 'borrowed', hint: "Yukari is on the rim of the fountain in Paulownia Mall holding two crêpes, one of which is apparently yours.",
      after: '3/24', until: '3/30', slots: BOTH, place: 'Paulownia Mall · Fountain', time: 'Daytime', scene: [
      { n: "The fountain had come back on in March, and the light came down through the mall's glass roof warm and slanted for the first time since autumn, and Yukari was sitting on the rim with her legs crossed and a crêpe in each hand, holding the strawberry one out without looking, because she'd known Solar would take strawberry since about May." },
      { s: 'yukari', f: 'neutral', t: "Third year. Wednesday. I'm going to be a senpai. Junpei's going to be a senpai. Somebody should really stop this." },
      { s: 'solar', t: "You'll be good at it." },
      { s: 'yukari', f: 'serious', t: "I'll be scary at it. That's a different thing." },
      { n: "She ate. She picked at the paper around her crêpe, too casually, folding the corner down and down again, which was how Yukari asked things she'd already decided to ask." },
      { s: 'yukari', f: 'neutral', t: "Mitsuru-senpai says there's a form. For whatever you do next. University, a job, anything. There's always a form." },
      { s: 'solar', t: "There's a form." },
      { s: 'yukari', f: 'serious', t: "And it's got a box." },
      { n: "Solar looked at the fountain. Everybody in the dorm knew about the box by now, the way everybody in a family knows which chair you don't sit in, and nobody had said the word out loud since graduation, and Yukari was saying it now to a crêpe." },
      { s: 'yukari', f: 'blushing', t: "You could borrow mine. Takeba. It's not doing much. My mom barely uses it either." },
      { n: "She said it fast, to the paper, the way you'd hand somebody a coat when they're cold and look the other way so they don't have to thank you for it." },
      { choose: [
        { t: "Solar Takeba sounds like a weather report.", then: [
          { s: 'yukari', f: 'surprised', t: "It does not." },
          { n: "It kind of did. Yukari laughed, the real one that went up at the end, and threw her crêpe paper at the bin and missed and didn't go and pick it up, which was her way of saying she'd meant it, all of it, and that they would never speak of it again unless Solar did." }
        ] },
        { t: "(Don't say anything. Lean on her shoulder.)", then: [
          { n: "Yukari went stiff for exactly one second, the way she always did, and then didn't, and rested her chin on top of Solar's head and said *you're getting cream on my jacket* in a voice that did not care about the jacket at all." },
          { bond: { yukari: 1 } }
        ] }
      ] }
    ] },

    { id: 'epi-st-yukari-2', title: 'the front step', hint: "Yukari is sitting on the dorm's front step after dark with her arms around her knees. She's not waiting for anybody, she says.",
      after: '4/1', until: '4/5', slots: ['evening'], events: ['epi-st-charms'], place: 'Iwatodai Dorm · Front', time: 'Evening', scene: [
      { n: "April, and the evenings were almost warm enough to sit out in if you didn't mind your hands. Yukari had the step. When the door opened behind her she moved over half a width without turning round, which meant she'd been waiting for somebody, and that it was Solar." },
      { n: "Nobody had said the word *bell* at dinner. Everybody at the table had been thinking it so hard it was practically a guest." },
      { s: 'yukari', f: 'neutral', t: "So. The bell." },
      { s: 'solar', t: "Yukari." },
      { s: 'yukari', f: 'serious', t: "I'm not asking what it was. I'm asking something else." },
      { n: "She took a long time about it. A car went by on the street below with its windows down and a radio playing something bright, and the sound of it went all the way to the corner and turned and was gone." },
      { s: 'yukari', f: 'sad', t: "Are you going somewhere?" },
      { n: "Yukari's father had gone to work one morning ten years ago and not come home, and she had spent the decade since learning what it was to be the one who stays behind, and she'd learned it so well she could hear it coming in other people the way some people can hear rain." },
      { choose: [
        { t: "No. I chose. I'm here.", then: [
          { s: 'yukari', f: 'serious', t: "Okay." },
          { n: "She didn't say she believed it. She put her shoulder against Solar's and left it there, which was Yukari's way of signing her name under a promise somebody else had made, so she'd have the right to be furious later if it broke." }
        ] },
        { t: "I don't know.", then: [
          { s: 'yukari', f: 'sad', t: "...Okay. Thanks for not lying. Everybody lies about that one." },
          { n: "She put her arm through Solar's and held on, not hard, just there, the way you'd hold the strap on a train, and looked at the street like she was daring it." },
          { bond: { yukari: 1 } }
        ] }
      ] },
      { n: "They stayed out until Junpei opened the door behind them and asked if this was a girls thing, and Yukari said yes without turning around, and he said *cool, cool, cool* and sat down on the step anyway, one below them, and nobody made him leave." }
    ] }
  ] };

  /* ── Junpei ── */
  B.junpei = { id: 'junpei', role: 'friend', hangouts: [
    { id: 'epi-st-junpei-1', title: 'operation', hint: "Junpei is in the lounge with a notebook titled OPERATION: SPRING BREAK. He has drawn a logo.",
      after: '3/24', until: '3/30', slots: BOTH, place: 'Iwatodai Dorm · Lounge', time: 'Daytime', scene: [
      { n: "Junpei had taken over the big couch with the notebook on his knees, cap backwards, pen behind his ear, a plan for every day of spring break down the left side of the page and a column of crossings-out down the right, and a logo at the top of a bird wearing sunglasses that might have been an eagle and might have been Koromaru." },
      { s: 'junpei', f: 'happy', t: "Okay so. Day one, nap. Day two, nap, but outside. Day four, hanami. Fuuka's on bento, I'm on morale. Day nine, karaoke. No opera from Mitsuru-senpai. That's a rule now, I wrote it down." },
      { s: 'solar', t: "What's day three?" },
      { s: 'junpei', f: 'serious', t: "Recovery from day two. You gotta pace yourself, Sol. You're new at this." },
      { n: "New at what, she nearly asked, and didn't, because she knew. A week with nothing in it. No operation, no full moon, no train to catch home, no exam, no tournament, nobody who needed her at midnight. She had never once had one. Not here, not in any of the others." },
      { n: "On the inside cover of the notebook, upside down, there was a column of names in his blocky capitals, crossed out very neatly, one ruler-straight line through each. She knew whose they were before she'd read them." },
      { s: 'junpei', f: 'sad', t: "...I was doing seating for the hanami. Old habits. Wrote 'em all down before I remembered." },
      { s: 'junpei', f: 'neutral', t: "Felt weird writing 'em. Felt weirder crossing 'em out." },
      { choose: [
        { t: "(Take the pen. Add your name under MORALE.)", then: [
          { n: "She wrote SOLAR under MORALE, in capitals, because that was the house style. He looked at it a second too long, and then punched her in the shoulder, very lightly, the way he'd been doing since April whenever something got close to the bone and he needed to put a joke between himself and it." },
          { s: 'junpei', f: 'happy', t: "Co-morale. I'll allow it." }
        ] },
        { t: "You didn't have to cross them out.", then: [
          { s: 'junpei', f: 'serious', t: "Yeah I did. They went home, Sol. That's the good one. You cross it out 'cause it's done. Not 'cause it's gone." },
          { n: "It was the smartest thing she'd ever heard him say, and he knew it, she could see him know it, and he ruined it on purpose a second later by asking if she thought Mitsuru would notice a whole cake hidden in the hanami basket." },
          { bond: { junpei: 1 } }
        ] }
      ] }
    ] },

    { id: 'epi-st-junpei-2', title: 'april fool', hint: "Junpei is outside Wild-Duck Burger holding two milkshakes like a white flag.",
      after: '4/1', until: '4/5', slots: BOTH, events: ['epi-st-charms'], place: 'Iwatodai Strip · Wild-Duck Burger', time: 'Daytime', scene: [
      { n: "He'd bought her a milkshake. Chocolate, large, the expensive one, which from Junpei was a formal apology on letterhead." },
      { s: 'junpei', f: 'flustered', t: "So the prank. I want it on the record the prank was good. Salt in the sugar bowl. It's a classic. My grandpa did it to me when I was six and I cried." },
      { s: 'solar', t: "It was a good prank." },
      { s: 'junpei', f: 'serious', t: "It was a GREAT prank. And nobody even got to taste their coffee, 'cause there was a bell. In the kitchen. And Aigis said the frequency out loud, and Mitsuru-senpai dropped a cup. Mitsuru-senpai doesn't drop stuff." },
      { n: "He stirred the milkshake with the straw, around and around, not drinking it. He'd been working up to this since breakfast. She could see it on him the way you could see weather on the bay, a long way off and coming." },
      { s: 'junpei', f: 'sad', t: "Was it them? Like. Your guys. Saying hi." },
      { choose: [
        { t: "Maybe. I think so.", then: [
          { s: 'junpei', f: 'happy', t: "...Cool. Okay. That's, okay, that's actually kinda nice? Like a doorbell. Like they rang and ran." },
          { n: "He looked up at the strip of sky over the Strip like he expected it to ring again and wanted to be ready to wave when it did." },
          { bond: { junpei: 1 } }
        ] },
        { t: "It was nothing. The pipes.", then: [
          { glitch: { strain: 1 } },
          { s: 'junpei', f: 'neutral', t: "The pipes. Sure. Yeah. Old building." },
          { n: "He didn't believe her. He let her have it anyway, the way you let a friend take the last fry, and she drank the milkshake and felt every degree of it go down cold and stay there." }
        ] }
      ] }
    ] }
  ] };

  /* ── Mitsuru ── */
  B.mitsuru = { id: 'mitsuru', role: 'friend', hangouts: [
    { id: 'epi-st-mitsuru-1', title: 'the inventory', hint: "The command room door is open. Mitsuru is inside with a clipboard and a great many boxes.",
      after: '3/25', until: '3/31', slots: ['evening'], events: ['epi-st-rooms'], place: 'Iwatodai Dorm · Command Room', time: 'Evening', scene: [
      { n: "The command room was coming apart in an orderly fashion. The monitors were off and wrapped in sheeting, the cables coiled and twist-tied and sorted into labeled boxes, and Mitsuru stood in the middle of it with her hair up and a clipboard, ticking things off in fountain pen, and for the first time in a year the room looked like what it had been all along, a room on the fourth floor of a dormitory with too many outlets." },
      { s: 'mitsuru', f: 'neutral', t: "Thank you for today. The rooms. I know it was not a small thing to ask." },
      { s: 'solar', t: "You didn't ask. You told me there was a deadline." },
      { s: 'mitsuru', f: 'serious', t: "That is how I ask. I'm told it needs work." },
      { n: "She set the clipboard down on a box marked FRAGILE · SENSORS · DO NOT LET JUNPEI CARRY, and squared it to the edge, and then squared it again." },
      { s: 'mitsuru', f: 'neutral', t: "The dorm passes to the school's housing office after the term begins. The rooms will be assigned to new students. Yours will not. I've arranged it." },
      { s: 'solar', t: "Mitsuru." },
      { s: 'mitsuru', f: 'serious', t: "The Group owns the building. The housing office owed the Group a number of favors, and as of this morning it owes one fewer. You'll have the room for as long as you want it. If you want it." },
      { n: "She said it the way she said everything, clear and level and finished, and only the fountain pen said anything else, rolling slowly off the edge of the clipboard where she'd set it down crooked after all and dropping onto the carpet, where neither of them picked it up." },
      { choose: [
        { t: "Thank you.", then: [
          { s: 'mitsuru', f: 'happy', t: "...You're welcome. That was easier than I'd planned for. I had three further arguments prepared." },
          { s: 'solar', t: "Can I hear them anyway?" },
          { s: 'mitsuru', f: 'happy', t: "Certainly not." }
        ] },
        { t: "And you? Where are you going?", then: [
          { s: 'mitsuru', f: 'sad', t: "Somewhere with a great many meetings in it." },
          { s: 'mitsuru', f: 'neutral', t: "I'll come back for dinner on Sundays. I've written it in my planner. In ink." },
          { n: "From Mitsuru that was a vow, and they both knew it, and she picked up the pen at last and went back to the clipboard and ticked something off that Solar was fairly sure hadn't been on it a minute ago." },
          { bond: { mitsuru: 1 } }
        ] }
      ] }
    ] },

    { id: 'epi-st-mitsuru-2', title: 'in that order', hint: "Mitsuru is in the front lot in a riding jacket, holding a second helmet. She doesn't explain the second helmet.",
      after: '4/1', until: '4/5', slots: ['evening'], place: 'Moonlight Bridge', time: 'Evening', scene: [
      { n: "She rode the way she did everything, precisely and a little faster than the law preferred, out across the Moonlight Bridge with the city lit up behind them and the bay black underneath, and Solar held on with both arms and her cheek pressed to the cold leather of Mitsuru's back, and at the midpoint, where you were absolutely not supposed to, Mitsuru pulled onto the shoulder and cut the engine." },
      { n: "The wind. The cables overhead humming in it, one long low note going on and on like something tuning. The lights of Port Island laid out on the water. Mitsuru took her helmet off and shook her hair out and did not look at her." },
      { s: 'mitsuru', f: 'serious', t: "Akihiko tells me your hair was wet the other night. Fuuka tells me Juno is hearing something she can't place. Aigis has logged a signal. And there was a bell in my kitchen." },
      { s: 'mitsuru', f: 'neutral', t: "I'm not asking you to explain. I'm informing you of something." },
      { s: 'solar', t: "Okay." },
      { s: 'mitsuru', f: 'serious', t: "If something is trying to take you, it will have to go through me. And then through the Kirijo Group. In that order. I'd like that understood. By you, and by it." },
      { n: "She said *it* to the bridge, to the dark water, to the city across the bay, in the clear carrying voice she'd once used to end things that crawled, and the wind took the word and carried it off east, and Solar found she was holding her breath to see if anything would answer." },
      { choose: [
        { t: "It heard you.", then: [
          { s: 'mitsuru', f: 'happy', t: "Good." },
          { n: "She put her helmet back on. She didn't start the engine for another full minute, though, and she kept one gloved hand on Solar's knee on the seat behind her the whole time, like a paperweight." }
        ] },
        { t: "What if I wanted to go?", then: [
          { s: 'mitsuru', f: 'sad', t: "...Then I would drive you to wherever it is. And I would wait outside. And I'd be extremely rude to whoever opened the door." },
          { n: "It wasn't a joke. Mitsuru didn't make jokes on bridges. Solar put her arms back around her waist, and held on tighter than she needed to for a bike that wasn't moving, and Mitsuru let her." },
          { bond: { mitsuru: 1 } }
        ] }
      ] }
    ] }
  ] };

  /* ── Fuuka ── */
  B.fuuka = { id: 'fuuka', role: 'friend', hangouts: [
    { id: 'epi-st-fuuka-1', title: 'attempt nine', hint: "There is smoke coming from the dorm kitchen, but gently. Fuuka is in there with a ruler.",
      after: '3/24', until: '3/26', slots: BOTH, place: 'Iwatodai Dorm · Kitchen', time: 'Daytime', scene: [
      { n: "Fuuka was making the hanami bento. She'd been making it since Monday, in drafts, the way other people wrote essays, and attempt nine was tamagoyaki, rolled in the square pan with a pair of long chopsticks and a concentration so total that the tip of her tongue showed, and a ruler on the counter beside the board because the slices were going to be the same width this time if it killed everyone." },
      { s: 'fuuka', f: 'happy', t: "Senpai! You can be a taster. Sit. Please. I mean, if you want. Sit if you want." },
      { n: "She cut a slice and held it out on the chopsticks. Burnt on one side, gold on the other, sweet, the layers coming apart in her mouth the way they were supposed to. It was good. It was, genuinely and for the first time in a year of trying, good, and Solar told her so with her mouth full, and Fuuka wrote it down." },
      { s: 'fuuka', f: 'neutral', t: "I'm doing one for everyone. Seven. Eight, with Koromaru's. His has no salt." },
      { n: "She counted the boxes out along the counter, lacquered and borrowed from three different cupboards, and stopped at eight, and looked at the counter beside them where there was room for more, a lot more, and her hand did a small thing in the air over the empty space, like it was setting something down that wasn't there." },
      { s: 'fuuka', f: 'sad', t: "...I keep counting too many. Every time. I get to eight and my hands keep going." },
      { s: 'solar', t: "Mine too." },
      { choose: [
        { t: "Make one extra. For whoever's hungry.", then: [
          { s: 'fuuka', f: 'happy', t: "...Okay. One extra. Junpei will eat it, probably." },
          { n: "Junpei would eat it, definitely. She made it anyway, carefully, the best one, the gold side of the egg turned up, and put it at the end of the row, and it didn't belong to anyone, and it wasn't empty either." },
          { stat: { kindness: 1 } }
        ] },
        { t: "(Hand her the ruler. Start the next roll.)", then: [
          { n: "She handed her the ruler. Fuuka took it and measured the next slice to the millimeter, very seriously, and they didn't talk about the counting again, and at some point Fuuka started humming, and the kitchen filled up with the smell of sugar going brown, and that was enough of an answer for both of them." },
          { bond: { fuuka: 1 } }
        ] }
      ] }
    ] },

    { id: 'epi-st-fuuka-2', title: 'three bells', hint: "Fuuka is on the roof with her headphones on and her laptop open. She hasn't typed anything in a while.",
      after: '4/1', until: '4/5', slots: BOTH, place: 'Iwatodai Dorm · Rooftop', time: 'Evening', scene: [
      { n: "Juno didn't have anything to listen for anymore. That had been the point, of the seventh, of all of it. Fuuka had told Solar once in February that the quiet was the strangest thing, stranger than the hour had ever been, like living next to a train line for a year and then one night the trains just stop." },
      { s: 'fuuka', f: 'neutral', t: "Senpai, could you sit here? Just for a minute. Closer, maybe?" },
      { n: "Solar sat. Fuuka shut her eyes, and for a while there was nothing, and then there was a little of something, a cool presence at the edge of the air like the inside of a shell held up to an ear." },
      { ifGlitch: 3, then: [{ glitch: 'sound' }] },
      { s: 'fuuka', f: 'surprised', t: "There. Did you, no. You didn't hear it." },
      { s: 'fuuka', f: 'sad', t: "It's like a bell. But three. Three different ones, from three different, not directions. It's not on any map. It's like they're ringing in rooms I can't find the doors to." },
      { n: "Solar's hand had gone to her chest, flat over her sternum, where Haenim lived when she wasn't anywhere else. She hadn't sent it there. It had just gone." },
      { s: 'fuuka', f: 'neutral', t: "They only get louder when you sit close." },
      { choose: [
        { t: "They're from home. The other ones.", then: [
          { s: 'fuuka', f: 'sad', t: "...Oh." },
          { n: "Fuuka didn't take the headphones off. She listened harder, with her whole face, the way you'd listen to a bad line for a name you needed to catch, and after a while she said they sounded glad to have found her, mostly, and then said *mostly* again, quieter, and didn't explain it." },
          { bond: { fuuka: 1 } }
        ] },
        { t: "(Don't say anything. Listen with her.)", then: [
          { n: "She didn't say anything. She sat close, the way Fuuka had asked, and listened to nothing she could hear, and Fuuka listened to everything she couldn't, and after a while Fuuka closed the laptop and leaned her head against Solar's shoulder, and said, to nobody in particular, that she'd tell Mitsuru-senpai in the morning, and didn't move." }
        ] }
      ] }
    ] }
  ] };

  /* ── Ken (and Koromaru) ── */
  B.ken = { id: 'ken', role: 'friend', hangouts: [
    { id: 'epi-st-ken-1', title: 'the long way', hint: "Ken has Koromaru's leash and an expression of enormous responsibility. He'd like company. He won't ask.",
      after: '3/25', until: '4/4', slots: ['after'], place: 'Naganaki Shrine', time: 'Afternoon', scene: [
      { music: 'epi-st-spring' },
      { n: "Koromaru took the shrine steps two at a time, the way he always did, straight up to the flat stone by the offering box where he'd waited for the old priest, and sat down on it with his tongue out and the air of a dog checking in. The plum over the box was finished. The cherries along the wall were just beginning, a few at a time, like they were testing the water." },
      { n: "Ken stood at the bottom of the steps holding the slack of the leash in both hands. He'd grown over the winter. Not a lot. Enough that his sleeves didn't reach anymore, and he kept tugging them down, and they kept not reaching." },
      { s: 'ken', f: 'neutral', t: "Solar-san. Can I ask you something? You don't have to answer." },
      { s: 'ken', f: 'serious', t: "Mitsuru-san is moving out. Akihiko-san is going somewhere. They said they'd visit, and I believe them. But everyone keeps graduating except me. I start sixth grade on Wednesday. I'm the only one going the other way." },
      { s: 'ken', f: 'sad', t: "Will you still be at the dorm? When I get home from school?" },
      { n: "He asked it to the leash. He'd been carrying it up the hill, she could tell, rehearsing it under his breath between the steps, because it had come out in one piece, too smooth, the way a question does when you've practiced it so it can't break in the middle." },
      { choose: [
        { t: "I'll be there.", then: [
          { s: 'ken', f: 'happy', t: "...Then I'll tell Koromaru." },
          { n: "He went up the steps and crouched and told Koromaru, gravely, in a low voice, into the dog's ear, and Koromaru licked him across the whole face, which Ken accepted as a signed agreement." },
          { s: 'koromaru', f: 'happy', t: "Woof." },
          { bond: { ken: 1 } }
        ] },
        { t: "Where else would I go?", then: [
          { s: 'ken', f: 'serious', t: "...I don't know. That's why I asked." },
          { n: "He held her eyes a moment longer than a ten-year-old should have been able to. Then he nodded, once, like a man accepting terms he'd read the small print on, and handed her the leash, which was a bigger thing than it looked." }
        ] }
      ] },
      { n: "They took the long way home, along the river, and Koromaru walked between them exactly in the middle, and every time one of them fell half a step behind he stopped and waited until they were level again." }
    ] }
  ] };

  /* ── Aigis ── */
  B.aigis = { id: 'aigis', role: 'friend', hangouts: [
    { id: 'epi-st-aigis-1', title: 'bearings', hint: "Aigis is at Seaside Park facing the water, standing very still. Junpei says she's been there since lunch.",
      after: '3/30', until: '4/5', slots: BOTH, place: 'Port Island · Seaside Park', time: 'Evening', scene: [
      { n: "The sea had gone flat and gold with the evening, and the gulls were working the end of the pier, and the ferry to the mainland was a white shape halfway across with its lights just coming on. Aigis stood at the railing with her hands at her sides and her face turned to the water, and she didn't turn when Solar came up beside her. She'd known for some time that Solar was coming. She always did." },
      { s: 'aigis', f: 'neutral', t: "Solar-san. You are here." },
      { s: 'solar', t: "Junpei said you've been standing here since lunch." },
      { s: 'aigis', f: 'neutral', t: "Since twelve-oh-four. I am triangulating." },
      { s: 'solar', t: "Triangulating what?" },
      { s: 'aigis', f: 'serious', t: "You." },
      { n: "She said it the way she said everything, as a fact, laid down plainly on the railing between them for Solar to pick up or not." },
      { s: 'aigis', f: 'neutral', t: "Your signal has always been unusual. In April it was one, and very strong. At the end, in March, it was four. Then it was one again. Since Monday it has begun to be four again. One here. Three elsewhere, at bearings that do not correspond to anything on the globe." },
      { ifGlitch: 3, then: [
        { s: 'aigis', f: 'surprised', t: "The three are stronger this week. They are also closer together. I do not know what that means. I dislike not knowing what it means. That is new." }
      ] },
      { s: 'aigis', f: 'neutral', t: "If you are going, please tell me first. I would like to be early. Like you." },
      { choose: [
        { t: "I'm not going anywhere.", then: [
          { s: 'aigis', f: 'happy', t: "I will log that." },
          { n: "She logged it. Then she went on standing at the railing beside Solar until the sun was all the way down, measuring, because logging a thing and believing it were two separate functions, and Aigis had only lately learned to run the second one." }
        ] },
        { t: "Can you tell which way they are?", then: [
          { s: 'aigis', f: 'serious', t: "No. Only that all three of them are pointed at you." },
          { n: "The ferry sounded its horn out on the water, long and low, and Aigis turned her head toward it, and then back, and didn't say anything else, and after a while she took Solar's hand at the railing, precisely, the way she'd once learned to, and held it like an instrument she was reading." },
          { bond: { aigis: 1 } }
        ] }
      ] }
    ] }
  ] };

  /* ── Routines ── */
  (R.routines ||= []).push(
    { id: 'epi-st-rt-breakfast', slot: 'early', after: '3/25', until: '3/31', place: 'Iwatodai Dorm · Dining Room', time: 'Morning', scene: [
      { music: 'epi-st-home' },
      { n: "Breakfast in spring break was a staggered thing. Akihiko first, back from his run with a protein shake and his hair wet from the shower. Mitsuru with tea and the paper, folded in quarters. Ken with a workbook he'd been told he didn't need and was doing anyway. Aigis, not eating, sitting at the table because that was where the people were. Yukari last, hair still damp. Junpei's cereal, poured into a mixing bowl." },
      { n: "Somebody had set the table. Fuuka, probably, early, the way she did, and somebody had set it for too many. The long table laid almost all the way down, bowls and chopsticks and cups at places nobody was going to sit in, and the people who were sitting looked at the far end of it, one after another, and then down at their food." },
      { s: 'junpei', f: 'neutral', t: "...I'll eat down that end. Somebody's gotta." },
      { choose: [
        { t: "(Move down to the far end with him.)", then: [
          { n: "She picked up her bowl and went. Then Yukari did, rolling her eyes, and Fuuka, and Ken with his workbook, and Aigis, and finally Mitsuru, with the paper and the tea and enormous dignity, until the near end of the table was the empty one instead, which was somehow better, and nobody said why." }
        ] },
        { t: "(Clear the extra places.)", then: [
          { n: "She got up and cleared them, one place at a time, quietly, stacking the bowls. Halfway down Mitsuru set her tea aside and got up too and took the cups, without a word, and they put everything back in the cupboard together, and the table was just a table with eight people at it again." },
          { stat: { kindness: 1 } }
        ] }
      ] }
    ] },

    { id: 'epi-st-rt-koromaru', slot: 'early', after: '3/26', until: '4/5', place: 'Iwatodai Dorm · Front', time: 'Morning', scene: [
      { n: "Koromaru's morning walk was the same every day: down the hill, along the river to the second bench, back up by the bakery that gave him the ends of things. He set the pace. She held the leash. That was the arrangement." },
      { n: "At the dorm's front door he stopped and wouldn't go in. He sat on the step facing the street, the way he'd sat on the stone at the shrine for a man who wasn't coming back, ears forward, perfectly patient, waiting for somebody, or a lot of somebodies. Dogs didn't know about doors on platforms. Dogs only knew who used to come up the street." },
      { ifGlitch: 3, then: [
        { n: "Then his ears went up, both of them, at the same instant, at nothing, at the empty street, at a sound pitched somewhere she couldn't reach. His tail went once against the step. Twice. Then it stopped, and he looked up at her, as if she might know." }
      ] },
      { choose: [
        { t: "(Sit with him a while.)", then: [
          { n: "She sat down on the step beside him with the leash slack in her hand, and he leaned his whole warm weight into her side, and they watched the street together until the bakery's van went by and the morning got on with it." }
        ] },
        { t: "Come on, boy. Breakfast.", then: [
          { n: "He looked at the street one more time. Then he got up and went in ahead of her, tail going, because breakfast was a thing that definitely came, every day, and he was a dog who had learned to be grateful for the things that came." }
        ] }
      ] }
    ] },

    { id: 'epi-st-rt-bench', slot: 'after', after: '3/26', until: '4/5', place: 'Iwatodai Station · Bench', time: 'Daytime', scene: [
      { n: "Iwatodai Station in spring break was half itself. Fewer uniforms, more strollers, a man asleep under a newspaper, the board ticking over in its slow clatter, and the row of benches along the concourse filled from the near end the way they always filled, with the last one, at the far end by the pillar, empty." },
      { n: "It was always empty now. Nobody sat there. Nobody seemed to decide not to sit there, either; people just found the bench before it, every time, and settled in, and the last one stayed clean and pale and slightly apart in the light from the high windows, like a seat being saved." },
      { n: "Somewhere down the line a train sounded its horn, long and low. The board said nothing was due for eleven minutes." },
      { choose: [
        { t: "(Sit on the last bench.)", then: [
          { n: "She sat. The slats were cold, that was all, the ordinary cold of painted wood in a station in March. She sat until the next train came in, an ordinary one, doors and people and a recorded voice, and got up when it left, and didn't look back at the bench, because there was nothing on it to look at, which was the point." }
        ] },
        { t: "(Walk past.)", then: [
          { n: "She walked past it, the way she had a hundred times on the way to school, and the horn came again from further off, fainter, like an echo of an echo, and she didn't turn round, and she didn't speed up either. She'd learned that much this year." }
        ] }
      ] }
    ] },

    { id: 'epi-st-rt-laundry', slot: 'evening', after: '3/25', until: '4/4', place: 'Iwatodai Dorm · Laundry Room', time: 'Evening', scene: [
      { n: "The dryer finished with its hoarse buzz and she pulled her load out warm into the basket and started folding on the machine's lid, the way Hyein had shown her once with a sweater and a look of real pain, sleeves in, then thirds." },
      { n: "There was a sock in it that wasn't hers. Gray, ankle-length, with a white rabbit stitched on the side, ears and all. Yunjin's. One of a pair. She had no idea how it had got into her load, or from where, because Yunjin's room was upstairs and its door had been shut since March." },
      { ifGlitch: 3, then: [
        { n: "It was cold. Everything else in the basket was warm from the drum, and the sock was cold, the way a thing is cold when it's come in from outside at night, and it smelled faintly of salt, and of something like barley." }
      ] },
      { choose: [
        { t: "(Take it up to her room.)", then: [
          { ifFlag: 'epi-st-rooms-box', then: [
            { n: "She went up and opened the box with Yunjin's name on it and found the other one folded on top, where she'd put it herself, and put the two together, and closed the box again, and stood with her hand flat on the lid for longer than it needed." }
          ], else: [
            { n: "She went up and opened the top drawer and found the other one where it had always been, and put the two together, and shut the drawer, and stood with her hand flat on top of the dresser for longer than it needed." }
          ] }
        ] },
        { t: "(Put it in your pocket.)", then: [
          { n: "She put it in the pocket of her hoodie. She didn't think about why. She finished folding with one hand resting on it through the cloth, and for the rest of the night, every time she moved, she knew exactly where it was." },
          { ifFlag: 'epi-st-rooms-keep', then: [
            { n: "That made two things now. She didn't think about that either." }
          ] }
        ] }
      ] }
    ] },

    { id: 'epi-st-rt-wall', slot: 'late', after: '3/29', until: '4/5', place: "Iwatodai Dorm · Solar's Room", time: 'Late Night', scene: [
      { n: "One in the morning. The dorm making its night sounds, the pipes ticking, the fridge downstairs cycling on, somebody's door, Junpei's snoring coming faintly up through the floor like the sea. She was lying on top of the covers with the light off and her eyes open, not sleeping, very thoroughly." },
      { phone: [{ from: 'akihiko', t: 'you up' }, { from: 'akihiko', t: "dont answer that. i can see your light under the door from the stairs" }], contact: 'Akihiko' },
      { s: 'solar', t: "My light's off." },
      { n: "She said it out loud to the ceiling. Then she looked at the lamp. It was on. She hadn't turned it on." },
      { ifEpiRoute: 'shinjiro', then: [
        { phone: [{ from: 'akihiko', t: 'went to see shinji today' }, { from: 'akihiko', t: 'he asked about you. thats what i came up to say. thats all' }], contact: 'Akihiko' }
      ], else: [
        { ifEpiRoute: 'akihiko', then: [
          { phone: [{ from: 'akihiko', t: "i'm not coming in. i'm just sitting on the stairs" }, { from: 'akihiko', t: 'in case' }], contact: 'Akihiko' }
        ] }
      ] },
      { choose: [
        { t: "(Text back: go to sleep)", then: [
          { phone: [{ from: 'solar', t: 'go to sleep' }, { from: 'akihiko', t: 'you first' }], contact: 'Akihiko' },
          { n: "She turned the lamp off. She lay there and listened, and after a long minute heard him get up off the stairs and go, slowly, the third step from the bottom creaking the way it always did, and then a door, and then nothing." }
        ] },
        { t: "(Text back: cant)", then: [
          { phone: [{ from: 'solar', t: 'cant' }, { from: 'akihiko', t: 'me neither' }, { from: 'akihiko', t: "five tomorrow. we'll be tired together" }], contact: 'Akihiko' },
          { n: "She left the lamp on. It seemed easier than arguing with it. She fell asleep around three with the phone on her chest, still open, and in the morning there was one more message on it, sent at four, that just said *ok*." }
        ] }
      ] }
    ] }
  );

  /* ── Texts ── */
  const T = (R.texts ||= {});
  (T.groups ||= []).push('sees');
  T.threads = Object.assign(T.threads || {}, {
    sees: 'S.E.E.S. (retired)', akihiko: 'Akihiko', shinjiro: 'Shinjiro', yukari: 'Yukari', junpei: 'Junpei',
    mitsuru: 'Mitsuru', fuuka: 'Fuuka', ken: 'Ken'
  });
  (T.texts ||= []).push(
    { id: 'epi-st-tx-sees-retired', thread: 'sees', date: '3/24', slot: 'evening', msgs: [
      { from: 'junpei', t: 'junpei renamed the group to S.E.E.S. (retired)' },
      { from: 'yukari', t: "junpei we're not retired. we're second years" },
      { from: 'junpei', t: 'THIRD years in 2 weeks. thats basically retired' },
      { from: 'mitsuru', t: 'I approve of the name. I would like it noted that I am the only one here who is actually retired.' },
      { from: 'akihiko', t: 'i graduated too' },
      { from: 'mitsuru', t: 'You graduated. I retired. There is a difference, and it is paperwork.' }
    ], reply: [
      { t: "i like it", then: [{ from: 'junpei', t: 'SEE. the people have spoken' }, { from: 'yukari', t: "she's one person" }] },
      { t: "(Leave it on read.)", silent: true, then: [{ from: 'fuuka', t: 'senpai read it!! that counts as a vote i think' }] }
    ] },
    { id: 'epi-st-tx-aki-five', thread: 'akihiko', date: '3/24', slot: 'late', msgs: [
      { from: 'akihiko', t: 'five tomorrow?' },
      { from: 'akihiko', t: "it's spring break. that's not an excuse" }
    ], reply: [
      { t: "five.", then: [{ from: 'akihiko', t: 'good' }] },
      { t: "it is literally an excuse", then: [{ from: 'akihiko', t: 'five thirty. final offer' }] }
    ] },
    { id: 'epi-st-tx-mitsuru-rooms', thread: 'mitsuru', date: '3/25', slot: 'evening', events: ['epi-st-rooms'], msgs: [
      { from: 'mitsuru', t: 'Regarding the rooms.' },
      { from: 'mitsuru', t: 'Thank you. Whatever you decided was correct. I would not have known how to decide it.' }
    ], reply: [
      { t: "i didn't either", then: [{ from: 'mitsuru', t: 'Then we are in good company.' }] },
      { t: "(Leave it on read.)", silent: true, then: [{ from: 'mitsuru', t: 'Goodnight, Solar.' }] }
    ] },
    { id: 'epi-st-tx-fuuka-bento', thread: 'fuuka', date: '3/26', slot: 'after', msgs: [
      { from: 'fuuka', t: 'senpai!! is anyone allergic to anything??' },
      { from: 'fuuka', t: 'junpei says pride. i think he means shrimp but i am not sure' }
    ], reply: [
      { t: "he means shrimp", then: [{ from: 'fuuka', t: 'thank you!! no shrimp for junpei' }, { from: 'fuuka', t: 'one shrimp for junpei. as a test' }] },
      { t: "he means pride", then: [{ from: 'fuuka', t: "i can't cook around pride :(" }] }
    ] },
    { id: 'epi-st-tx-junpei-hanami', thread: 'junpei', date: '3/27', slot: 'late', events: ['epi-st-hanami'], msgs: [
      { from: 'junpei', t: 'MITSURU SENPAI DRANK FOUR JUICES' },
      { from: 'junpei', t: 'COMPETITIVELY' },
      { from: 'junpei', t: 'i have never been so scared and so proud at the same time' }
    ], reply: [
      { t: "she beat you", then: [{ from: 'junpei', t: 'she beat EVERYONE' }, { from: 'junpei', t: 'aigis had to referee. aigis is a harsh referee' }] },
      { t: "best hanami ever", then: [{ from: 'junpei', t: 'right??' }, { from: 'junpei', t: 'same time next year. im writing it in the notebook' }] }
    ] },
    { id: 'epi-st-tx-aki-light', thread: 'akihiko', date: '3/28', slot: 'late', flag: 'epi-route-akihiko', events: ['epi-st-crossroads'], msgs: [
      { from: 'akihiko', t: 'thanks for coming up' },
      { from: 'akihiko', t: "that's it. that's the text" }
    ], reply: [
      { t: "thanks for leaving the light on", then: [{ from: 'akihiko', t: "i always leave it on" }, { from: 'akihiko', t: "...i know. i'll keep doing it" }] },
      { t: "(Leave it on read.)", silent: true, then: [] }
    ] },
    { id: 'epi-st-tx-yukari-wed', thread: 'yukari', date: '3/30', slot: 'after', msgs: [
      { from: 'yukari', t: "fuuka and i are doing chagall tomorrow. you're coming" },
      { from: 'yukari', t: 'not a question btw' }
    ], reply: [
      { t: "what time", then: [{ from: 'yukari', t: 'two. wear something that isnt a hoodie' }, { from: 'yukari', t: 'i say that with love' }] },
      { t: "is it ever a question", then: [{ from: 'yukari', t: 'no' }, { from: 'yukari', t: 'see you at two' }] }
    ] },
    { id: 'epi-st-tx-sees-bell', thread: 'sees', date: '4/1', slot: 'after', events: ['epi-st-charms'], msgs: [
      { from: 'junpei', t: 'ok so is nobody going to talk about the bell' },
      { from: 'yukari', t: 'junpei.' },
      { from: 'aigis', t: 'I am talking about the bell. It was 1318 hertz.' },
      { from: 'junpei', t: 'THANK you aigis' },
      { from: 'mitsuru', t: 'We will discuss it in person. Not here. Not in writing.' },
      { from: 'ken', t: 'Koromaru heard it too. He is under the table.' }
    ], reply: [
      { t: "i'm okay", then: [{ from: 'fuuka', t: 'ok' }, { from: 'fuuka', t: "we're here if you're not" }] },
      { t: "(Leave it on read.)", silent: true, then: [{ from: 'junpei', t: 'read at 12:40. ok. ok. we cool' }] }
    ] },
    { id: 'epi-st-tx-ken-door', thread: 'ken', date: '4/2', slot: 'evening', msgs: [
      { from: 'ken', t: 'Solar-san. Koromaru will not eat his dinner. He is sitting at the front door.' },
      { from: 'ken', t: 'I am sitting with him. I wanted you to know where we are.' }
    ], reply: [
      { t: "i'm coming down", then: [{ from: 'ken', t: 'Thank you. There is room on the step.' }] },
      { t: "he's waiting for someone", then: [{ from: 'ken', t: 'I know.' }, { from: 'ken', t: 'I am waiting with him so he is not by himself.' }] }
    ] },
    { id: 'epi-st-tx-mitsuru-clocks', thread: 'mitsuru', date: '4/3', slot: 'late', events: ['epi-st-clocks'], msgs: [
      { from: 'mitsuru', t: 'I have had every clock in the building replaced. Twice.' },
      { from: 'mitsuru', t: 'Akihiko is asleep on the lounge couch with his gloves on. I have not asked him to stop.' }
    ], reply: [
      { t: "thank you mitsuru", then: [{ from: 'mitsuru', t: 'Sleep, Solar. Someone is awake. Several people, in fact.' }] },
      { t: "do the new ones work", then: [{ from: 'mitsuru', t: 'For now.' }, { from: 'mitsuru', t: 'I am watching them very closely. I believe they know.' }] }
    ] },
    { id: 'epi-st-tx-aki-where', thread: 'akihiko', date: '4/4', slot: 'evening', msgs: [
      { from: 'akihiko', t: 'where are you' },
      { from: 'akihiko', t: '...ok. just checking' }
    ], reply: [
      { t: "my room. i'm here", then: [{ from: 'akihiko', t: 'ok' }, { from: 'akihiko', t: 'stay there. i mean. you know what i mean' }] },
      { t: "you can just knock", then: [{ from: 'akihiko', t: 'i know' }, { from: 'akihiko', t: "i'm outside your door. i'm not knocking. i just wanted to know you'd answer" }] }
    ] },
    { id: 'epi-st-tx-junpei-iron', thread: 'junpei', date: '4/6', slot: 'after', msgs: [
      { from: 'junpei', t: 'TOMORROW WE ARE THIRD YEARS' },
      { from: 'junpei', t: 'ALSO THE IRON IS ON FIRE' },
      { from: 'junpei', t: '(not literally)' },
      { from: 'junpei', t: '(a little literally)' }
    ], reply: [
      { t: "unplug it junpei", then: [{ from: 'junpei', t: 'unplugged. crisis averted. shirt slightly averted also' }] },
      { t: "i'm coming", then: [{ from: 'junpei', t: 'bring yukari. yukari knows irons' }, { from: 'junpei', t: 'DONT tell yukari' }] }
    ] }
  );
  (T.ambient ||= []).push(
    { id: 'epi-st-am-sees-forecast', thread: 'sees', from: '3/24', to: '3/26', msgs: [
      { from: 'aigis', t: 'Blossom forecast for Saturday: thirty percent open. Weather: clear. Probability of hanami: high.' },
      { from: 'junpei', t: 'AIGIS IS THE FORECAST NOW' },
      { from: 'aigis', t: 'I have always been the forecast.' }
    ], reply: [
      { t: "thank you aigis", then: [{ from: 'aigis', t: 'You are welcome. I will update hourly.' }, { from: 'yukari', t: 'please dont' }] },
      { t: "(Leave it on read.)", silent: true, then: [] }
    ] },
    { id: 'epi-st-am-ken-workbook', thread: 'ken', from: '3/25', to: '3/31', msgs: [
      { from: 'ken', t: 'Solar-san, I finished the sixth grade workbook.' },
      { from: 'ken', t: 'I know it is not due. I wanted to be ready.' }
    ], reply: [
      { t: "you're going to be fine ken", then: [{ from: 'ken', t: 'I know. Thank you for saying it anyway.' }] },
      { t: "do the seventh grade one next", then: [{ from: 'ken', t: '...Is that allowed?' }, { from: 'ken', t: 'I am going to ask Mitsuru-san.' }] }
    ] },
    { id: 'epi-st-am-shinji-scarf', thread: 'shinjiro', from: '3/26', to: '4/3', flag: 'epi-st-shinji-up', msgs: [
      { from: 'shinjiro', t: 'scarf' },
      { from: 'shinjiro', t: 'you left it. its on the chair' }
    ], reply: [
      { t: "keep it till tomorrow", then: [{ from: 'shinjiro', t: '...fine' }] },
      { t: "you typed that left handed didn't you", then: [{ from: 'shinjiro', t: 'shut up' }, { from: 'shinjiro', t: 'took 4 min' }] }
    ] },
    { id: 'epi-st-am-shinji-spoon', thread: 'shinjiro', from: '3/31', to: '4/5', flag: ['epi-route-shinjiro', 'epi-st-shinji-up'], msgs: [
      { from: 'shinjiro', t: 'right hand. spoon. whole bowl' },
      { from: 'shinjiro', t: 'dont tell aki. hed cry' }
    ], reply: [
      { t: "i'm telling aki", then: [{ from: 'shinjiro', t: '...tch' }, { from: 'shinjiro', t: 'tell him i said it was nothing' }] },
      { t: "i'm proud of you", then: [{ from: 'shinjiro', t: '...' }, { from: 'shinjiro', t: 'you eat yet' }] }
    ] },
    { id: 'epi-st-am-yukari-mom', thread: 'yukari', from: '4/1', to: '4/5', msgs: [
      { from: 'yukari', t: 'my mom called. first time since new years' },
      { from: 'yukari', t: 'i picked up. we talked for like nine minutes. about nothing. it was fine' },
      { from: 'yukari', t: "idk why i'm telling you" }
    ], reply: [
      { t: "i'm glad you picked up", then: [{ from: 'yukari', t: 'yeah. me too. weirdly' }] },
      { t: "nine minutes is a lot of nothing", then: [{ from: 'yukari', t: 'right?? she asked about the weather TWICE' }, { from: 'yukari', t: "...i'm gonna call her back sunday" }] }
    ] }
  );
})();
