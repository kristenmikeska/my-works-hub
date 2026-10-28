/* Sunghoon, living world (the trio batch: Jay, Niki, Sunghoon as two-world links). Data only; formats in core.js (deliverTexts /
   afterRank, holidayInvites, dailyLife / dailyFits, runInDue). Load after daily-life.js and living-runins.js (they assign their
   arrays; this file pushes). His link: links/sunghoon.js (Strength, searcher, Hoax · strangers; arrival a4-yeobos, 11/7).
   - afterRank (ranks 1-10): texts a day or two after each rank. They react to the scene, never to a choice in it, so every path
     reads right. He texts lowercase except his own name, always "Park Sunghoon"; sometimes signs "- s". Solar texts lowercase.
     Rank 9 carries `variants` by heading (S / H); the rest are heading-neutral.
   - holidays: '1/11' Coming of Age Day (rank 5; he's turned twenty already, in one of his lives) and '2/14' Valentine's Day
     (rank 7; about Cherry, never Solar; Cherry's lines gated ifFlag arrived-cherry; the White Day box stays unopened, "soon"
     stays pending). Both after the solstice, so both carry flag year-goes-on; ♪ from the choices' notes.
   - routines (FEMC_GAME_DAILY_LIFE), every one gated events ['a4-yeobos'], windows 28-35 days, none past 2/26; the Nov-Dec ones are
     low: true (filler on the in-between days, core.js dailyLife), so they never crowd out the story routines:
       sunghoon-junpei   11/12-12/14 evening: the dorm lounge before eight; Junpei practising "the smile" (the fun interaction).
       sunghoon-escort   11/16-12/18 early, school days: the station platform; two steps behind Jungwon with two coffees.
       sunghoon-fanclub  11/19-12/20 after school: the Strip outside Yeobo's; the fan club; Yukari.
       sunghoon-crown    1/7-2/8 after school (flags year-goes-on): the dorm steps; Junpei's takeout-box crown; Koromaru.
   - run-ins (FEMC_GAME_RUNINS), never at Gekkoukan or a club, each ends { bond: { sunghoon: 1 } }:
       ri-sunghoon-flower  Paulownia Mall (any mall activity), 11/12-1/31: one flower a day for the vase.
       ri-sunghoon-rink    Port Island (any port activity), 12/2-1/31: the December rink, watching a child fall and get up.
   Canon guards: no line here says Solar is Jungwon's girlfriend; nothing names the war, anyone at home, his injury, or what the
   houses are to each other; he never flirts with Solar. Faces: sunghoon flustered, neutral, sad, serious, surprised (no happy).
   Junpei all six; Yukari no happy; Koromaru happy, neutral, sad, serious; Cherry no flustered; Jungwon all six. */
(() => {
  const W = window;
  const X = (W.FEMC_GAME_LINK_EXTRAS ||= {});
  const D = (X.sunghoon ||= {});

  /* ── Texts after each rank ── */
  D.afterRank = { ...(D.afterRank || {}),
    1: { delay: 1, slot: 'evening', msgs: [{ from: 'sunghoon', t: 'the napkin is a limited edition. do not lose it' }, { from: 'sunghoon', t: "Park Sunghoon doesn't write napkins for just anyone. he wrote nine today. but still" }],
      reply: [{ t: 'its on my desk', link: 'sunghoon', notes: 2, then: [{ from: 'sunghoon', t: 'good. face up. it likes the light' }] },
        { t: 'who got the other 8', link: 'sunghoon', notes: 2, then: [{ from: 'sunghoon', t: 'the fan club. sunoo. a pigeon. you got the good one' }] }] },
    2: { delay: 1, slot: 'evening', msgs: [{ from: 'sunghoon', t: "jungwon says question five was “a disappointment to everyone”" }, { from: 'sunghoon', t: "he said it very politely. i've never been so frightened" }],
      reply: [{ t: 'tell him im trying', link: 'sunghoon', notes: 2, then: [{ from: 'sunghoon', t: "he knows. that's why he's polite" }] },
        { t: 'did u sit down after i left', link: 'sunghoon', notes: 3, then: [{ from: 'sunghoon', t: 'no' }, { from: 'sunghoon', t: "...for a minute. when he went up for the book. don't tell him" }] }] },
    3: { delay: 1, slot: 'evening', msgs: [{ from: 'sunghoon', t: 'junpei has texted me eleven times' }, { from: 'sunghoon', t: 'he wants the smile now. not the bow. the smile' }],
      reply: [{ t: 'teach him', link: 'sunghoon', notes: 2, then: [{ from: 'sunghoon', t: "the smile can't be taught. it's hereditary. from the prince" }] },
        { t: 'dont u dare', link: 'sunghoon', notes: 2, then: [{ from: 'sunghoon', t: "i wasn't going to. it's dangerous in the wrong hands" }, { from: 'sunghoon', t: "it's dangerous in mine" }] }] },
    4: { delay: 1, slot: 'late', msgs: [{ from: 'sunghoon', t: 'you got in at 7:53. i checked' }, { from: 'sunghoon', t: "the corner by the vending machine is very cold. i wouldn't recommend it" }],
      reply: [{ t: 'then dont stand there', link: 'sunghoon', notes: 2, then: [{ from: 'sunghoon', t: "it's the only corner with a view of the door" }] },
        { t: 'goodnight sunghoon', link: 'sunghoon', notes: 3, then: [{ from: 'sunghoon', t: 'goodnight' }, { from: 'sunghoon', t: 'lock it. the door. i know you do. i like hearing it' }] }] },
    5: { delay: 1, slot: 'evening', msgs: [{ from: 'sunghoon', t: 'the booth man says hello' }, { from: 'sunghoon', t: "he doesn't. he's never said a word. but he tipped his hat at me today and i'm choosing to read it as hello" }],
      reply: [{ t: 'tell him i said hi back', link: 'sunghoon', notes: 2, then: [{ from: 'sunghoon', t: "i'll tip my hat. i don't have a hat. i'll get a hat" }] },
        { t: 'r u ok', link: 'sunghoon', notes: 3, then: [{ from: 'sunghoon', t: 'yes' }, { from: 'sunghoon', t: 'Park Sunghoon is very ok. thank you for asking. nobody asks the prince' }] }] },
    6: { delay: 1, slot: 'evening', msgs: [{ from: 'sunghoon', t: "i've moved the napkins into a folder" }, { from: 'sunghoon', t: 'sunoo asked what the folder was for. i said state business' }],
      reply: [{ t: 'its a good plan', link: 'sunghoon', notes: 3, then: [{ from: 'sunghoon', t: "it's the most impressive plan. it's also the most terrifying. those are the same thing, it turns out" }] },
        { t: 'u need a bigger folder', link: 'sunghoon', notes: 2, then: [{ from: 'sunghoon', t: 'i need a bigger napkin' }] }] },
    7: { delay: 1, slot: 'evening', msgs: [{ from: 'sunghoon', t: 'junpei has made the recording his ringtone' }, { from: 'sunghoon', t: 'it went off in the dorm and mitsuru stood up. she thought it was an anthem' }],
      reply: [{ t: 'it kind of is', link: 'sunghoon', notes: 2, then: [{ from: 'sunghoon', t: "thank you. i'll have it played at my coronation" }] },
        { t: 'send it to me', link: 'sunghoon', notes: 2, then: [{ from: 'sunghoon', t: 'absolutely not. i have a reputation in two universes' }] }] },
    8: { delay: 1, slot: 'evening', msgs: [{ from: 'sunghoon', t: 'he slept nine hours' }, { from: 'sunghoon', t: 'i counted. i always count' }],
      reply: [{ t: 'u should sleep too', link: 'sunghoon', notes: 3, then: [{ from: 'sunghoon', t: "i will. when he's finished his breakfast. i'm watching him eat it. he hates it. it's the best part of my day" }] },
        { t: 'ur a good friend to him', link: 'sunghoon', notes: 2, then: [{ from: 'sunghoon', t: "i'm a lot of things to him. friend is the one i'm allowed to say out loud" }] }] },
    9: { delay: 1, slot: 'late', msgs: [{ from: 'sunghoon', t: 'the rope is under my bed' }, { from: 'sunghoon', t: "it's strange. it's fine" }],
      reply: [{ t: 'goodnight sunghoon', link: 'sunghoon', notes: 3, then: [{ from: 'sunghoon', t: 'goodnight' }, { from: 'sunghoon', t: '- s' }] },
        { t: 'u put a rope under ur bed', link: 'sunghoon', notes: 2, then: [{ from: 'sunghoon', t: 'when you say it like that it sounds bad' }] }],
      variants: {
        S: { msgs: [{ from: 'sunghoon', t: 'mitsuru has a van. nobody told me' }, { from: 'sunghoon', t: "the rope's under its spare now. everything's where it goes" }],
          reply: [{ t: 'goodnight sunghoon', link: 'sunghoon', notes: 3, then: [{ from: 'sunghoon', t: 'goodnight' }, { from: 'sunghoon', t: '- s' }] },
            { t: 'does mitsuru know', link: 'sunghoon', notes: 2, then: [{ from: 'sunghoon', t: 'she will when she checks the tyres. she checks the tyres' }] }] },
        H: { msgs: [{ from: 'sunghoon', t: 'Park Sunghoon found an exam timetable in his coat. from home. it says 8:00' }, { from: 'sunghoon', t: "i'm keeping it. it's the most comforting thing i own" }],
          reply: [{ t: 'goodnight sunghoon', link: 'sunghoon', notes: 3, then: [{ from: 'sunghoon', t: 'goodnight' }, { from: 'sunghoon', t: '- s' }] },
            { t: 'thats the saddest thing ive ever heard', link: 'sunghoon', notes: 2, then: [{ from: 'sunghoon', t: "you said that about my singing. i'm on a streak" }] }] }
      } },
    10: { delay: 2, slot: 'evening', msgs: [{ from: 'sunghoon', t: "sunoo says i can't reserve the window table by writing on the steam" }, { from: 'sunghoon', t: "i've reserved it anyway. both chairs. you know which one is yours now" }],
      reply: [{ t: 'same time tomorrow', link: 'sunghoon', notes: 3, then: [{ from: 'sunghoon', t: "yes. be early. i'll be the one with his back to the door" }] },
        { t: 'thank u for sitting there', link: 'sunghoon', notes: 2, then: [{ from: 'sunghoon', t: 'thank you for watching it' }] }] }
  };

  /* ── Holidays ── */
  D.holidays = { ...(D.holidays || {}),
    '1/11': { rank: 5, flag: 'year-goes-on', title: 'coming of age day', place: 'Naganaki Shrine', time: 'Daytime', bg: 'outside-shrine-day', music: 'day',
      ask: "coming of age day. the shrine is full of twenty-year-olds in silk. Park Sunghoon has been twenty already. once. come and watch other people do it properly",
      yes: 'ok. ill come watch', ok: "eleven. the torii. i'll be the one facing the stairs", sorry: 'cant today, sorry', no: "understood. i'll watch them alone. it suits me",
      scene: [
        { n: "Naganaki Shrine on Coming of Age Day was furisode all the way up the steps, long swinging sleeves in red and peony and a blue that went black in the shade of the cedars, white fur stoles round every neck, hair pinned up with silk flowers, and under all of it the same frozen, delighted, slightly terrified twenty-year-old faces, being photographed by their mothers every three feet." },
        { n: "Sunghoon was at the bottom of the steps in a dark coat, facing the stairs, which meant facing everyone, and three girls in pink had already walked past him twice." },
        { s: 'sunghoon', f: 'neutral', t: "I've done this day. In one of my lives. Turned twenty. Nobody made a day of it. I was working. Somebody gave me a can of coffee from a machine and said happy birthday, which it wasn't." },
        { s: 'sunghoon', f: 'neutral', t: "In the other one I've got two years to go, and Niki's already booked a noraebang for it. He's booked it for the wrong year. I haven't told him." },
        { n: "Halfway up the steps, a girl in pale green put her sandal on the one stair that was still white with frost, and went, all at once, the way people go on ice, arms up, sleeves flying, and Sunghoon was there. Solar didn't see him move. One moment he was beside her and the next he had the girl by the elbow, two steps up, without having looked, and set her back on her feet as if he'd been expecting her, and let go." },
        { n: "Then he bowed. The prince's bow, the whole ceremony, hand on heart. The girl's friends made a sound that sent pigeons off the roof of the hall." },
        { choose: [
          { t: "You didn't even look.", notes: 3, then: [
            { s: 'sunghoon', f: 'neutral', t: "I didn't need to. That step was wrong. I've been watching it since eleven." },
            { s: 'sunghoon', f: 'neutral', t: "Park Sunghoon watches all the steps. It's a burden. Nobody thanks the steps man." }
          ] },
          { t: "Happy belated coming of age.", notes: 3, then: [
            { n: "He went still. For a second the prince wasn't anywhere." },
            { s: 'sunghoon', f: 'surprised', t: "...Thank you." },
            { s: 'sunghoon', f: 'neutral', t: "That's the first time anybody's said it. In either place. You'd think it'd come up." }
          ] },
          { t: "(Buy him a can of coffee from the machine by the gate.)", notes: 3, stat: { kindness: 1 }, then: [
            { n: "It was warm from the machine. She put it in his hand without a word. He looked down at it for a long time, the little steel can steaming in the cold, and then put it in his coat pocket, unopened." },
            { s: 'sunghoon', f: 'neutral', t: "I'll keep it." },
            { s: 'solar', f: 'neutral', t: "It's coffee. You drink it." },
            { s: 'sunghoon', f: 'neutral', t: "Not this one." }
          ] }
        ] },
        { n: "They went up to the hall and threw a coin each and he clapped twice, very correctly, and bowed, and stood a long time with his eyes shut, longer than anyone around them, and when he opened them he didn't say what he'd asked for, and she didn't ask, and on the way down he walked half a step behind her, the whole long frosted stair, all the way to the bottom." },
        { choose: [
          { t: "What did you ask for?", notes: 2, then: [
            { s: 'sunghoon', f: 'neutral', t: "To be twenty properly. Once. Somewhere." },
            { s: 'sunghoon', f: 'neutral', t: "Also a horse. Don't tell Cherry." }
          ] },
          { t: "(Walk beside him, not ahead.)", notes: 3, then: [
            { n: "She stopped on the step and waited until he was level, and he looked at her, and then at the step, and then came down beside her, and they went the rest of the way like that, two people at the same height on a stair, which shouldn't have been anything at all." }
          ] }
        ] }
      ] },
    '2/14': { rank: 7, flag: 'year-goes-on', title: "valentine's day", place: "Iwatodai Strip · Yeobo's Cafe", time: 'Daytime', bg: 'yeobos-cafe', music: 'joy',
      ask: "valentine's day. in this country the girls give and the boys wait. Park Sunghoon is very good at waiting. come and wait with me",
      yes: 'ok. ill wait with u', ok: "yeobo's. the window table. i've been here since nine", sorry: 'cant today. sorry', no: 'understood. the waiting continues. alone. bravely',
      scene: [
        { n: "Sunoo had baked everything in heart-shaped pans. The croissants were hearts. The muffins were hearts. A single unfortunate loaf of bread was a heart. The whole café smelled of butter and sugar and the particular nervousness of a February fourteenth, and at the window table, facing the door, Sunghoon had been sitting since nine in the morning with a small box in front of him wrapped in silver paper, which he wasn't touching." },
        { s: 'sunoo', f: 'happy', t: "He's been here five hours. He's had four coffees. I've stopped charging him. It felt cruel." },
        { s: 'sunghoon', f: 'neutral', t: "This isn't for today. It's for White Day. A month from now. The boys give back. I'm prepared early. Park Sunghoon is always prepared early." },
        { s: 'solar', f: 'neutral', t: "And if nobody gives you anything today?" },
        { s: 'sunghoon', f: 'neutral', t: "Then I'll have a very well-wrapped box." },
        { choose: [
          { t: "(Give him a piece of giri chocolate.)", notes: 3, then: [
            { n: "She put it on the table. Konbini chocolate, the cheap kind in gold foil. Obligation chocolate. He looked at it with total seriousness." },
            { s: 'sunghoon', f: 'neutral', t: "Giri. Park Sunghoon accepts his obligations." },
            { n: "He put it in his breast pocket, behind the napkins, as if it were a medal." }
          ] },
          { t: "Why not just ask her?", notes: 2, then: [
            { s: 'sunghoon', f: 'neutral', t: "Because in this country you don't ask. You wait. And I'm excellent at not asking." },
            { s: 'sunghoon', f: 'flustered', t: "It's the only thing I'm better at than skating." }
          ] },
          { t: "(Sit down and wait with him. Say nothing.)", notes: 3, then: [
            { n: "She sat. They waited. The bell went, and went, and went, and every time his eyes went to the door, and every time they came back, and she watched them come back, and after a while she started telling him who it was before he could look, and he let her." }
          ] }
        ] },
        { ifFlag: 'arrived-cherry', then: [
          { n: "At four the bell went, and it was her." },
          { n: "Cherry came in with her coat buttoned to the throat and her eyes on absolutely nothing, walked straight to the window table without looking at either of them, put a small lumpy box in pink paper down in front of Sunghoon, and stepped back from it as if it might go off." },
          { s: 'cherry', f: 'serious', t: "It's giri. Obligation. Don't." },
          { s: 'sunghoon', f: 'flustered', t: "..." },
          { n: "She was at the door before he'd managed a word. She stopped with her hand on it, and didn't turn round." },
          { s: 'cherry', f: 'neutral', t: "It's homemade. That's also obligation. Sol, I'll see you tonight." },
          { n: "The bell. The cold. She was gone. Sunghoon sat holding the pink box in both hands like something that had been handed to him on a stage, with no expression on his face at all, and his ears completely red, and the silver box beside it on the table, still wrapped, still waiting for March." }
        ], else: [
          { n: "At four, when the light went gold and then gray and the door had gone a hundred times and none of them had been her, he picked the silver box up and held it out to Solar across the table." },
          { s: 'sunghoon', f: 'neutral', t: "Hold this for her. You'll see her before I do." }
        ] },
        { choose: [
          { t: "Give her yours now. Go after her.", notes: 2, then: [
            { s: 'sunghoon', f: 'serious', t: "No." },
            { s: 'sunghoon', f: 'neutral', t: "At home. On the day. Properly. She gets the real one." }
          ] },
          { t: "Soon?", notes: 3, then: [
            { s: 'sunghoon', f: 'neutral', t: "Soon." },
            { n: "He said it the way other people said *forever,* and put the silver box in his coat, unopened, and ordered a fifth coffee, and drank it facing the door." }
          ] },
          { t: "(Steal one of Sunoo's heart croissants for each of you.)", notes: 2, then: [
            { s: 'sunoo', f: 'surprised', t: "I SAW that." },
            { s: 'sunghoon', f: 'neutral', t: "Put it on my debt." }
          ] }
        ] }
      ] }
  };

  /* ── Routines (daily-life format) ── */
  (W.FEMC_GAME_DAILY_LIFE ||= []).push(
    // The fun interaction: Junpei wants the smile.
    { id: 'sunghoon-junpei', low: true, after: '11/12', until: '12/14', slot: 'evening', events: ['a4-yeobos'],
      place: 'Iwatodai Dorm · Lounge', time: 'Evening', bg: 'iwatodaidorm-livingroom-night', scene: [
        { n: "Sunghoon had come by with a box of Sunoo's croissants for the dorm, because Sunoo had made too many and couldn't bear it, and it was ten past seven, and he'd been allowed in on the strict understanding that he'd be out by eight, and Junpei had cornered him by the television before he'd put the box down." },
        { n: "The television was off. Junpei was using the black screen as a mirror." },
        { s: 'junpei', f: 'happy', t: "Okay. Okay, watch. Is this it? Is this the smile?" },
        { s: 'sunghoon', f: 'neutral', t: "No." },
        { s: 'junpei', f: 'neutral', t: "What about... this?" },
        { s: 'sunghoon', f: 'neutral', t: "That's a man who's lost his train ticket." },
        { s: 'junpei', f: 'serious', t: "THIS." },
        { s: 'sunghoon', f: 'neutral', t: "That's a man who's found it, and it's for the wrong day." },
        { choose: [
          { t: "(Do the smile yourself. Just to see.)", stat: { charm: 1 }, then: [
            { n: "She did it at the black screen, without thinking much, the corner of her mouth going up on one side and her eyes doing something she didn't plan. Sunghoon looked at it. Junpei looked at it. There was a short silence." },
            { s: 'sunghoon', f: 'serious', t: "Dangerous. Put it away." },
            { s: 'junpei', f: 'surprised', t: "Leader?! Since WHEN?" }
          ] },
          { t: "Junpei, just be yourself.", stat: { kindness: 1 }, then: [
            { s: 'sunghoon', f: 'neutral', t: "Terrible advice." },
            { s: 'sunghoon', f: 'neutral', t: "Correct, though. His own one's better. It's stupid. People trust stupid." },
            { s: 'junpei', f: 'happy', t: "...Was that a compliment? Leader, was that a compliment? I'm gonna frame it." }
          ] },
          { t: "(Hold up the croissant box as a reward.)", then: [
            { n: "Junpei tried eleven more smiles for the croissants, each worse than the last, and Sunghoon reviewed every one of them in a single flat sentence, and at seven fifty-eight he bowed to the room and left, and Junpei ate four croissants in defeat." }
          ] }
        ] },
        { bond: { sunghoon: 1 } }
      ] },

    // Two steps behind Jungwon, every morning, with two coffees.
    { id: 'sunghoon-escort', low: true, after: '11/16', until: '12/18', slot: 'early', schoolOnly: true, events: ['a4-yeobos'],
      place: 'Iwatodai Station · Platform', time: 'Early Morning', bg: 'station-platform-day', scene: [
        { n: "Seven-twenty on the platform, breath going up, the commuters in their long beige rows, and further down, by the pillar with the timetable, Jungwon in his coat with a book open, and two steps behind him, exactly two, Sunghoon, with a coffee in each hand." },
        { n: "He held one out without a word. Jungwon took it without looking up from the book." },
        { s: 'jungwon', f: 'neutral', t: "Thank you, Sunghoon." },
        { s: 'sunghoon', f: 'neutral', t: "It's sweet. You won't like it. Drink it." },
        { n: "The train came in. Jungwon got on. Sunghoon got on after him and stood by the door, not sitting, facing the platform, and his eyes went once along the whole length of it, the way you'd read a list, and stopped on Solar, and he lifted his coffee about an inch." },
        { choose: [
          { t: "(Get in the same carriage.)", then: [
            { n: "She got in. Jungwon said good morning with his whole formal face and went pink anyway. Sunghoon moved half a step, so that she was inside the little space he was keeping by the door, and kept it for both of them, all the way to the next station." }
          ] },
          { t: "(Wave from the platform.)", then: [
            { n: "She waved. Jungwon, through the glass, bowed very slightly over his book. Sunghoon didn't wave. He watched her until the train had taken him out of sight of her, which, she thought, was his version." }
          ] },
          { t: "Does he ever drink it?", stat: { courage: 1 }, then: [
            { n: "She asked it through the closing doors. Sunghoon heard. He didn't answer. Through the glass, as the train pulled away, Jungwon lifted the cup without looking up from his book, and drank." }
          ] }
        ] },
        { bond: { sunghoon: 1 } }
      ] },

    // The fan club, and Yukari.
    { id: 'sunghoon-fanclub', low: true, after: '11/19', until: '12/20', slot: 'after', events: ['a4-yeobos'],
      place: 'Iwatodai Strip', time: 'After School', bg: 'location-2', scene: [
        { n: "There were eight girls in Gekkoukan uniforms outside Yeobo's, which was two more than yesterday, and Yukari, coming down the Strip beside Solar with her archery bag over her shoulder, stopped dead and stared at them." },
        { s: 'yukari', f: 'surprised', t: "What is this? Is there a sale? Is somebody famous?" },
        { n: "The door opened and Sunghoon came out, coat collar up, and eight girls made a sound like a kettle coming to the boil. A first-year in pigtails held out a notebook and a pen, and he took them, and signed, a single line and *- s* at the bottom, and handed them back with a bow." },
        { s: 'sunghoon', f: 'neutral', t: "Park Sunghoon is spoken for. Pending. But he's very flattered. Please don't stand in the doorway, Sunoo has customers." },
        { s: 'yukari', f: 'surprised', t: "Oh my God. He talks like that? Out loud? On purpose?" },
        { choose: [
          { t: "(Walk him past them with dignity.)", stat: { courage: 1 }, then: [
            { n: "She took his elbow like a lady being escorted out of a ballroom and walked him straight down the Strip through the middle of them, and the girls parted, and Sunghoon inclined his head left and right as if acknowledging a crowd on a palace balcony, and Yukari trailed behind with her face in her hands." },
            { s: 'yukari', f: 'blushing', t: "I'm never walking on this street again. I live here, and I'm never walking on this street again." }
          ] },
          { t: "(Get his autograph too.)", stat: { charm: 1 }, then: [
            { n: "She held out her hand, palm up. He looked at it. Then he took the pen and signed her palm, *- s,* small, in the middle, and Yukari made a noise." },
            { s: 'sunghoon', f: 'neutral', t: "Don't wash it. Or do. It's ballpoint. It's not a covenant." }
          ] },
          { t: "(Leave him to it.)", then: [
            { n: "She went on to the bookshop with Yukari. Through the window, ten minutes later, he was still out there, signing a mathematics textbook with enormous patience." },
            { s: 'yukari', f: 'neutral', t: "Do you know him? Don't tell me. I don't want to know. ...Okay, tell me later." }
          ] }
        ] },
        { bond: { sunghoon: 1 } }
      ] },

    // After the solstice: Junpei's crown.
    { id: 'sunghoon-crown', after: '1/7', until: '2/8', slot: 'after', events: ['a4-yeobos'], flags: ['year-goes-on'],
      place: 'Iwatodai Dorm · Front', time: 'After School', bg: 'iwotodaidorm-outside', scene: [
        { n: "Junpei had made a crown. He'd made it from a Hagakure takeout box, cut into points with Fuuka's scissors and colored in with a gold paint pen that had run out halfway round, so it was gold on the front and very much takeout box on the back, and he presented it on the dorm steps with Koromaru sitting beside him as witness." },
        { s: 'junpei', f: 'serious', t: "Park Sunghoon. On behalf of the Iwatodai chapter. For services to... being like that." },
        { n: "Sunghoon received it with both hands and complete gravity. He looked at it, front and back. He put it on. It was slightly too big, and sat a little low over one eye, and he did not adjust it." },
        { s: 'sunghoon', f: 'neutral', t: "Park Sunghoon accepts. Park Sunghoon will wear it to Yeobo's. Sunoo will hate it." },
        { s: 'koromaru', f: 'happy', t: "Woof!" },
        { choose: [
          { t: "(Kneel on the step. Formally.)", stat: { charm: 1 }, then: [
            { n: "She knelt on the cold step. Junpei knelt too, a beat later, because she had. Koromaru lay down. Sunghoon looked at the three of them, the takeout crown low over one eye, and something happened to his face that wasn't a smile, quite, and was the nearest thing to a laugh any of them had heard out of him, a short sound through the nose, and he turned away so they couldn't see the rest of it." },
            { s: 'junpei', f: 'happy', t: "LEADER. Leader, did you hear that? I got him! I finally got him!" }
          ] },
          { t: "It's beautiful, Junpei.", stat: { kindness: 1 }, then: [
            { s: 'junpei', f: 'flustered', t: "It's... it's okay. It's whatever. The paint ran out." },
            { s: 'sunghoon', f: 'neutral', t: "The back is the best part. It shows where it came from." }
          ] }
        ] },
        { n: "He wore it home. Solar heard from Sunoo that he'd worn it to the window table that evening, too, and through the whole of dinner, and had refused, politely, to take it off for Heeseung." },
        { bond: { sunghoon: 1 } }
      ] }
  );

  /* ── Run-ins (living-runins.js format) ── */
  (W.FEMC_GAME_RUNINS ||= []).push(
    { id: 'ri-sunghoon-flower', who: 'sunghoon', where: { areas: ['mall'] }, after: '11/12', until: '1/31', events: ['a4-yeobos'], scene: [
      { n: "On her way out of the mall she passed the flower stall by the fountain and found Sunghoon in front of it with his hands behind his back, considering the buckets the way other people considered a museum, and the woman who ran it waiting with her scissors already open, as if this happened every day. It did, she'd tell Solar later. Every day. One flower." },
      { s: 'sunghoon', f: 'neutral', t: "For the vase. It has to be right. Yesterday's was wrong. Nobody said anything, but it was wrong." },
      { choose: [
        { t: "(Point at a red camellia.)", stat: { charm: 1 }, then: [
          { s: 'sunghoon', f: 'neutral', t: "Hm. Bold. Winter. Doesn't apologize." },
          { s: 'sunghoon', f: 'flustered', t: "Yes. That's her. That's very much her." }
        ] },
        { t: "(Point at a small white one nobody would notice.)", stat: { kindness: 1 }, then: [
          { s: 'sunghoon', f: 'neutral', t: "...That's a good one. For a different vase." },
          { n: "He bought it anyway, and the camellia, and gave her the white one on the escalator, without a word, the stem wrapped in a twist of the florist's paper." }
        ] },
        { t: "Just buy the whole bucket.", then: [
          { s: 'sunghoon', f: 'neutral', t: "One. It's always one. A bucket is a confession. One is a habit." }
        ] }
      ] },
      { bond: { sunghoon: 1 } }
    ] },
    { id: 'ri-sunghoon-rink', who: 'sunghoon', where: { areas: ['port'] }, after: '12/2', until: '1/31', events: ['a4-yeobos'], scene: [
      { n: "Coming back past Seaside Park in the last of the light, she saw him at the rink barrier, not skating, just leaning on the painted snowmen with his forearms crossed, watching a little girl in a red hat and rented skates fall over, and get up, and fall over, and get up, out in the middle of the ice on her own, while her father filmed from the side." },
      { s: 'sunghoon', f: 'neutral', t: "Fourteen times. She hasn't cried once. She looks furious. It's the correct response." },
      { choose: [
        { t: "(Lean on the barrier and count with him.)", stat: { kindness: 1 }, then: [
          { n: "They counted together. Fifteen. Sixteen. On seventeen she stayed up, all the way across, arms out, mouth open, and Sunghoon, beside her, let out a breath he'd apparently been holding since the first one." },
          { s: 'sunghoon', f: 'neutral', t: "That's the whole sport. Getting up. Everything after is decoration." }
        ] },
        { t: "Why aren't you out there?", stat: { courage: 1 }, then: [
          { s: 'sunghoon', f: 'neutral', t: "It's hers right now. You don't skate across somebody's first time." },
          { s: 'sunghoon', f: 'neutral', t: "Also, the booth man is awake. We have an arrangement. It only works when he's asleep." }
        ] }
      ] },
      { bond: { sunghoon: 1 } }
    ] }
  );
})();
