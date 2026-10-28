/* Jay, living world (2026-10-27, the two-world trio). Data only; formats in core.js (deliverTexts / afterRank, holidayInvites,
   dailyLife / dailyFits, runInDue). Load after daily-life.js and living-runins.js (they assign their arrays; this file pushes).
   His link: links/jay.js (Temperance, searcher, Hoax · strangers; arrival a4-yeobos, 11/7; guesthouse resident).
   - afterRank (ranks 1-10): texts a day or two after each rank. They react to the scene, never to a choice in it, so every
     path reads right. Jay texts lowercase, no apostrophes, 💀; Solar texts lowercase. Rank 7's text has heading variants
     (H: Solar's caps; S: her careful lowercase). Replies name the link.
   - holidays: '11/23' Labor Thanksgiving Day (rank 1: he cooks lunch for everyone who works) and '2/3' Setsubun (rank 6,
     flag year-goes-on: beans at the dorm, then ehomaki eaten in silence facing west-southwest). ♪ from the choices' notes.
   - routines (FEMC_GAME_DAILY_LIFE), every one gated events ['a4-yeobos'], windows 28-35 days, none past 2/26:
       jay-koromaru-door  11/12-12/14 evening, Sun/Tue/Sat: Koromaru across the kitchen door, Ken, a measured cup (the fun one).
       jay-akihiko-pot    11/20-12/20 evening, Sun/Tue/Sat: Akihiko wipes the good pot that nobody used (the fun one).
       jay-containers     11/16-12/18 early, school days: the empties on the dorm step at seven; Junpei, Yukari.
       jay-fuuka-roux     1/8-2/10 after school, flag year-goes-on: Jay and Fuuka argue curry roux in the supermarket.
   - run-ins (FEMC_GAME_RUNINS), never at Gekkoukan or a club, each ends { bond: { jay: 1 } }:
       ri-jay-hagakure  the Strip (any Strip activity), 11/9-1/31: Jay at Hagakure's window, watching the cook.
       ri-jay-pier      Port Island (any port activity), 11/9-1/31: the pier rail, the old folding phone.
   Canon guard: nothing names what he cooks at home, or his hands (the one acknowledgment is the link's rank 5); nothing says
   Jungwon is Solar's boyfriend; Shinjiro never speaks here (he's in the coma through every window). Faces: jay all six;
   ken happy/neutral/sad/serious; koromaru happy/neutral/sad/serious; akihiko as listed; junpei all six; yukari no happy;
   fuuka happy/neutral/sad/surprised; mitsuru no flustered. */
(() => {
  const W = window;
  const X = (W.FEMC_GAME_LINK_EXTRAS ||= {});
  const D = (X.jay ||= {});

  /* ── Texts after each rank ── */
  D.afterRank = { ...(D.afterRank || {}),
    1: { delay: 1, slot: 'evening', msgs: [{ from: 'jay', t: 'ur dorm has 4 bowls that match. 4' }, { from: 'jay', t: 'u guys live like raccoons' }],
      reply: [{ t: 'theyre for guests', link: 'jay', notes: 2, then: [{ from: 'jay', t: 'im a guest. i got the mug that says WORLDS OKAYEST' }] },
        { t: 'did the dog eat', link: 'jay', notes: 3, then: [{ from: 'jay', t: 'no' }, { from: 'jay', t: 'tell him its not personal' }] }] },
    2: { delay: 1, slot: 'evening', msgs: [{ from: 'jay', t: 'sunghoon ate the cilantro. on purpose. to make a point' }, { from: 'jay', t: 'point was unclear 💀' }],
      reply: [{ t: 'what was the point', link: 'jay', notes: 2, then: [{ from: 'jay', t: 'he said growth' }, { from: 'jay', t: 'then he had to go lie down' }] },
        { t: 'tell jake the radish says hi', link: 'jay', notes: 3, then: [{ from: 'jay', t: 'no. hes still talking about the radish' }, { from: 'jay', t: 'he made it his lock screen' }] }] },
    3: { delay: 1, slot: 'evening', msgs: [{ from: 'jay', t: 'the squid guy nodded at me today' }, { from: 'jay', t: 'a real nod. im in' }],
      reply: [{ t: 'proud of u', link: 'jay', notes: 3, then: [{ from: 'jay', t: 'dont be weird' }, { from: 'jay', t: 'ok be a little weird' }] },
        { t: 'what did u make with it', link: 'jay', notes: 2, then: [{ from: 'jay', t: 'rice. theres always rice. rice is the point' }] }] },
    4: { delay: 1, slot: 'evening', msgs: [{ from: 'jay', t: 'the glass on the stairs was empty this morning' }, { from: 'jay', t: 'just saying' }],
      reply: [{ t: 'he drank it', link: 'jay', notes: 3, then: [{ from: 'jay', t: 'yeah. good' }] },
        { t: 'do u always do that', link: 'jay', notes: 2, then: [{ from: 'jay', t: 'only when somebody walks out without their water' }, { from: 'jay', t: 'so like. a lot' }] }] },
    5: { delay: 1, slot: 'evening', msgs: [{ from: 'jay', t: 'the steps r on the fridge. under the dog note' }, { from: 'jay', t: 'dont let junpei move it. he moves things' }],
      reply: [{ t: 'he already moved it', link: 'jay', notes: 2, then: [{ from: 'jay', t: '💀' }, { from: 'jay', t: 'put it back. higher. hes short when hes tired' }] },
        { t: 'ill guard it', link: 'jay', notes: 3, then: [{ from: 'jay', t: 'good. ur scarier than u look' }] }] },
    6: { delay: 1, slot: 'evening', msgs: [{ from: 'jay', t: 'ken was right' }, { from: 'jay', t: 'dont tell ken i said that. hell get a big head' }],
      reply: [{ t: 'ken already has a big head', link: 'jay', notes: 2, then: [{ from: 'jay', t: 'for a ten year old its huge. its earned tho' }] },
        { t: 'ull get it', link: 'jay', notes: 3, then: [{ from: 'jay', t: 'i know' }, { from: 'jay', t: 'i just dont know when. thats the annoying part' }] }] },
    7: { delay: 1, slot: 'late', msgs: [{ from: 'jay', t: 'u get down ok' }, { from: 'jay', t: 'the door sticks. kick it low' }],
      reply: [{ t: 'kicked it low', link: 'jay', notes: 3, then: [{ from: 'jay', t: 'good. now ur one of us' }] },
        { t: 'are u still up there', link: 'jay', notes: 2, then: [{ from: 'jay', t: 'no' }, { from: 'jay', t: 'yes' }] }],
      variants: {
        H: { msgs: [{ from: 'jay', t: 'u get down ok' }, { from: 'jay', t: 'the door sticks. kick it low' }],
          reply: [{ t: 'I KICKED IT LIKE A CHAMPION', link: 'jay', notes: 3, then: [{ from: 'jay', t: 'thats the spirit' }, { from: 'jay', t: 'hanlim spirit. tell coach' }] },
            { t: 'ur still up there arent u', link: 'jay', notes: 2, then: [{ from: 'jay', t: 'no' }, { from: 'jay', t: 'yes' }] }] },
        S: { msgs: [{ from: 'jay', t: 'u get down ok' }, { from: 'jay', t: 'the door sticks. kick it low' }],
          reply: [{ t: "i did. go to bed, jay.", link: 'jay', notes: 3, then: [{ from: 'jay', t: 'five more minutes' }] },
            { t: "it's freezing. go in.", link: 'jay', notes: 2, then: [{ from: 'jay', t: 'going' }, { from: 'jay', t: 'not going' }] }] }
      } },
    8: { delay: 1, slot: 'evening', msgs: [{ from: 'jay', t: 'jake asked me again where i learned to cook' }, { from: 'jay', t: 'said youtube. he believed it. he believes everything' }],
      reply: [{ t: 'let him have it', link: 'jay', notes: 3, then: [{ from: 'jay', t: 'i always do. thats the job' }] },
        { t: 'skull emoji out loud', link: 'jay', notes: 2, then: [{ from: 'jay', t: 'niki is never gonna stop doing that now' }, { from: 'jay', t: 'thats on u' }] }] },
    9: { delay: 1, slot: 'evening', msgs: [{ from: 'jay', t: 'akihiko texted me' }, { from: 'jay', t: 'just thanks. nothing else' }],
      reply: [{ t: 'thats a lot from him', link: 'jay', notes: 3, then: [{ from: 'jay', t: 'yeah. i figured' }, { from: 'jay', t: 'i screenshotted it' }] },
        { t: 'the dog slept in the kitchen', link: 'jay', notes: 2, then: [{ from: 'jay', t: 'good. hes allowed' }] }] },
    10: { delay: 2, slot: 'evening', msgs: [{ from: 'jay', t: 'u still got the card' }, { from: 'jay', t: 'dont laminate it. food goes on it. thats how u know its used' }],
      reply: [{ t: 'its on my desk', link: 'jay', notes: 2, then: [{ from: 'jay', t: 'put it somewhere ull spill on it' }] },
        { t: 'made it already. 3am', link: 'jay', notes: 3, then: [{ from: 'jay', t: 'u measured didnt u' }, { from: 'jay', t: 'i can tell from here' }] }] }
  };

  /* ── Holidays ── */
  D.holidays = { ...(D.holidays || {}),
    '11/23': { rank: 1, title: 'labor thanksgiving day', place: 'Kirijo Guesthouse', time: 'Daytime', bg: 'kirijo-guesthouse-day', music: 'joy',
      ask: "its labor thanksgiving. u thank people who work. im cooking lunch for everybody who works. need someone to carry stuff",
      yes: 'ok. ill carry stuff', ok: 'guesthouse. 11. wear something u can get rice on', sorry: 'cant today sorry', no: 'all good. ill save u a plate. probably',
      scene: [
        { n: "The guesthouse lobby on the holiday was quiet in the way buildings go quiet when they've been told they're allowed to be, and from behind the front desk, through the door to the guesthouse kitchen, which the desk lady had unlocked at ten in the morning with the air of someone opening a vault, came the smell of rice and something frying and the sound of Jay telling a pan to behave." },
        { s: 'jay', f: 'neutral', t: "It's Labor Thanksgiving. You thank people who work. So we're feeding everybody who works. That's the rule. I made the rule." },
        { s: 'jay', f: 'neutral', t: "Desk lady. The cleaning lady who does the third floor and says nothing about Niki's room. Fuuka, because she runs your whole dorm and nobody pays her. And Mitsuru." },
        { s: 'solar', f: 'neutral', t: "Mitsuru won't take it." },
        { s: 'jay', f: 'happy', t: "Mitsuru works harder than anybody in this town. She's taking it. I made a box with her name on it. It's done. It's labeled." },
        { n: "The boxes were on the counter in a row, lunch boxes from the hundred-yen shop, every lid labeled in angry capitals. The desk lady's had a little drawing of a key on it. Fuuka's said FUUKA (EAT IT HOT, DON'T SAVE IT FOR LATER). Mitsuru's said only MITSURU, very neatly, as if he'd been nervous writing it." },
        { place: 'Iwatodai Dorm · Lounge', time: 'Daytime', soft: true },
        { n: "Fuuka opened hers at the lounge table and looked at it for a long moment and then put both hands over her mouth." },
        { s: 'fuuka', f: 'surprised', t: "Oh. Oh, you didn't have to." },
        { s: 'jay', f: 'neutral', t: "It's the law." },
        { s: 'fuuka', f: 'happy', t: "...Thank you. Really. Nobody's ever— thank you, Jay." },
        { n: "Mitsuru came down the stairs with a folder under her arm and found her box waiting on the table in front of her chair, with her name on it, and stopped, and looked at it, and at Jay standing by the window with his arms folded and his face doing nothing at all." },
        { s: 'mitsuru', f: 'neutral', t: "That's very kind. I'm afraid I've already eaten." },
        { choose: [
          { t: "He made the rule, Mitsuru. It's the law now.", notes: 3, stat: { courage: 1 }, then: [
            { s: 'mitsuru', f: 'surprised', t: "...The law." },
            { s: 'jay', f: 'neutral', t: "Labor Thanksgiving. You work, you eat. It's a national holiday. I checked." },
            { n: "Mitsuru sat down. She opened the box. She ate all of it, slowly, with perfect posture, turning the pages of her folder with her other hand, and when she was finished she closed the lid and laid her chopsticks across it and said nothing, and Jay, by the window, looked as if he'd won something." }
          ] },
          { t: "(Put her chopsticks next to the box. Say nothing.)", notes: 3, stat: { kindness: 1 }, then: [
            { n: "Solar set the chopsticks down beside the box, square to the edge, and went to sit across the room with Fuuka. A minute passed. Then another. Then, very quietly behind them, a lid came off." },
            { s: 'mitsuru', f: 'happy', t: "...It's good. Thank you, Jay." }
          ] },
          { t: "Then take it for later.", notes: 2, then: [
            { s: 'mitsuru', f: 'neutral', t: "Yes. Later. Thank you." },
            { n: "She took it upstairs with the folder. Later, Solar found the box washed and dried on the drying rack, lid and all, which was, Jay said when she told him, the same thing as a thank-you card, and better." }
          ] }
        ] },
        { s: 'jay', f: 'neutral', t: "Okay. Now you." },
        { s: 'solar', f: 'neutral', t: "I don't work." },
        { s: 'jay', f: 'neutral', t: "You carried six boxes across town. That's work. Sit." },
        { n: "There was a seventh box at the bottom of the bag. It said SOLAR on the lid, and under that, smaller, in the same capitals, CARRIED STUFF." }
      ] },
    '2/3': { rank: 6, flag: 'year-goes-on', title: 'setsubun', place: 'Iwatodai Dorm · Kitchen', time: 'Evening', bg: 'iwatodaidorm-kitchen', music: 'dorm',
      ask: "setsubun. ehomaki. u eat a whole roll facing the lucky direction and u dont talk the whole time. i was born for this",
      yes: 'ok. ill be quiet', ok: 'dorm. 6. bring a wish', sorry: 'cant tonight sorry', no: 'ok. ill eat urs facing the wrong way',
      scene: [
        { n: "The beans came first. Junpei had volunteered to be the demon on the grounds that he'd look the most like one, and wore a red paper mask from the konbini on the back of his head like a baseball cap, and Ken threw roasted soybeans at him with the grim, overhand seriousness of a boy who believed in the ritual completely, and Koromaru chased every bean that bounced across the floor, and nobody could stop laughing long enough to say the words properly." },
        { s: 'ken', f: 'serious', t: "Demons out! Fortune in! Junpei-san, you have to LEAVE, you're the demon, that's the point!" },
        { s: 'junpei', f: 'happy', t: "I'm leaving! I'm going! Ow! Kid, that's an ARM, where'd you learn that?" },
        { n: "Then the rolls. Jay had made them at the counter while the beans were going, long fat rolls of rice and seaweed with seven fillings, uncut, one for everybody, laid out on a tray like batons for a relay, and he handed them round with the solemnity of a priest." },
        { s: 'jay', f: 'neutral', t: "West-southwest. That's this year. You face that way, you eat the whole thing, you don't stop and you don't talk. You make a wish while you eat. If you talk, it's gone." },
        { s: 'junpei', f: 'surprised', t: "The WHOLE thing? Without talking? Dude, do you know me?" },
        { n: "Fuuka worked out west-southwest on her phone, and it turned out to be the wall by the fridge, so the whole dorm stood in a row facing the fridge, roll in hand, like a choir that had forgotten the song, and began." },
        { n: "It was the funniest silence Solar had ever been part of. Junpei made it nine seconds. Yukari's shoulders went. Ken ate with his eyes screwed shut, wishing visibly, with his whole body. Akihiko finished first, by a distance, and then stood facing the fridge with his arms folded as if it were a training drill." },
        { n: "And Jay, at the end of the row, ate his with his eyes closed, slowly, without a sound, without hurry, without once looking anywhere but at the inside of his own eyelids, and his face was so still and so serious that it was the only thing in the room that stopped her laughing." },
        { choose: [
          { t: "(Eat yours in silence. Make a wish.)", notes: 3, then: [
            { n: "She ate hers facing the fridge with her eyes closed, the whole thing, and made a wish, and didn't know until she was halfway through it that it was a wish for somebody else, and didn't know who." }
          ] },
          { t: "(Lose it. Laugh at Junpei.)", notes: 2, then: [
            { n: "Junpei turned round with his cheeks full and the demon mask sliding off the back of his head and made a face at her, and that was it, she was gone, wish and all, bent over the counter, and Jay opened one eye at her, and closed it again, disappointed and not surprised." }
          ] },
          { t: "(Watch Jay instead.)", notes: 3, then: [
            { n: "She watched him. He didn't open his eyes once. When he finished he stood for a moment with the empty seaweed in his fingers, still facing the fridge, his lips moving very slightly, as if he were checking something off, and then he opened his eyes and caught her looking, and didn't say a word, because he couldn't yet, and didn't look away either." }
          ] }
        ] },
        { s: 'solar', f: 'neutral', t: "What did you wish for?" },
        { s: 'jay', f: 'neutral', t: "Can't tell you. Then it doesn't count." },
        { choose: [
          { t: "Was it about home?", notes: 2, then: [
            { s: 'jay', f: 'neutral', t: "Which one?" },
            { s: 'jay', f: 'happy', t: "...Nice try." }
          ] },
          { t: "I bet I can guess.", notes: 3, then: [
            { s: 'jay', f: 'neutral', t: "Bet you can't." },
            { s: 'jay', f: 'neutral', t: "...Don't. Don't guess. If you guess right I have to make another one, and I'm full." }
          ] }
        ] },
        { n: "At seven fifty-eight he had his jacket on. On the counter he'd left one roll on a plate with a sheet of kitchen paper over it and a note in capitals. FOR THE GUY WHO'S BACK BY NEXT YEAR. FACE WEST-SOUTHWEST. Koromaru lay by the counter underneath it all night and didn't touch it, and in the morning it was still there, and nobody ate it, and nobody threw it away." }
      ] }
  };

  /* ── Routines (daily-life format) ── */
  (W.FEMC_GAME_DAILY_LIFE ||= []).push(
    // Koromaru across the kitchen door; Ken; a measured cup.
    { id: 'jay-koromaru-door', after: '11/12', until: '12/14', slot: 'evening', days: [0, 2, 6], events: ['a4-yeobos'],
      place: 'Iwatodai Dorm · Kitchen', time: 'Evening', bg: 'iwatodaidorm-kitchen', scene: [
        { n: "There was a negotiation going on across the kitchen doorway. On the kitchen side, Jay, crouched on his heels with a small dish of plain rice and egg on the tile in front of him. On the hall side, Ken, in his slippers, crouched exactly the same way, with exactly the same expression. Across the doorway between them, Koromaru, lying on his side, looking at neither." },
        { s: 'ken', f: 'serious', t: "He only eats when someone sits with him. I've been sitting with him. It's my turn this week." },
        { s: 'jay', f: 'neutral', t: "I'm not trying to take your turn, dude. I'm just the guy with the rice. The rice is on my side." },
        { s: 'ken', f: 'neutral', t: "The rice should be on his side. That's the correct side." },
        { s: 'jay', f: 'neutral', t: "...That's fair." },
        { n: "He pushed the dish two inches across the threshold with one finger. Koromaru's nose moved. Nothing else did." },
        { choose: [
          { t: "(Sit down in the doorway between them.)", stat: { kindness: 1 }, then: [
            { n: "She sat down cross-legged in the doorway with the dog between her knees, on neither side, and after a moment Koromaru lifted his head and ate, slowly, every grain, while two people on either side of the line watched in complete silence like a pair of referees." },
            { s: 'ken', f: 'happy', t: "...He needed someone in the middle." },
            { s: 'jay', f: 'neutral', t: "Yeah. Middle's a good spot. I'll remember." }
          ] },
          { t: "Ken, did he measure it right?", stat: { knowledge: 1 }, then: [
            { s: 'ken', f: 'neutral', t: "One cup. Levelled. With the back of a knife. I checked." },
            { s: 'jay', f: 'neutral', t: "He checked. Kid stood over me with a spoon. I've had coaches less strict." },
            { n: "Ken looked pleased, very slightly, at the word *strict*, and then pretended he hadn't heard it." }
          ] },
          { t: "(Leave them to it.)", then: [
            { n: "She left them to it. From the stairs, ten minutes later, she heard a small dish being pushed one more inch across a tile floor, and Ken saying *that's better*, and Jay saying *yeah, yeah*, and the sound of a dog getting up." }
          ] }
        ] },
        { bond: { jay: 1 } }
      ] },

    // Akihiko and the good pot: he wipes it though nobody used it.
    { id: 'jay-akihiko-pot', after: '11/20', until: '12/20', slot: 'evening', days: [0, 2, 6], events: ['a4-yeobos'],
      place: 'Iwatodai Dorm · Kitchen', time: 'Evening', bg: 'iwatodaidorm-kitchen', scene: [
        { n: "Half past seven, the kitchen still warm from Jay's cooking and the containers stacked by the door, and Akihiko came in in his running clothes, not for water this time, and took the good pot down off its hook, and stood at the sink, and washed it." },
        { n: "It was clean. Nobody had used it. It had been clean since October. He washed it anyway, slowly, inside and out, with the soft sponge, not the steel wool, and rinsed it, and dried it with a clean towel from the drawer, and hung it back on its hook with the handle out, and left without saying anything to anyone, and didn't look at Jay once." },
        { n: "Jay hadn't looked at him either. He'd been wiping the same square of counter for the whole of it." },
        { s: 'jay', f: 'neutral', t: "He does that every time?" },
        { choose: [
          { t: "Every time somebody cooks in here.", stat: { kindness: 1 }, then: [
            { s: 'jay', f: 'neutral', t: "Okay." },
            { s: 'jay', f: 'neutral', t: "Then I'm gonna keep cooking in here. So he's got a reason to come in." }
          ] },
          { t: "I don't know. I've never watched before.", then: [
            { s: 'jay', f: 'neutral', t: "Don't watch next time. I didn't. That's the deal, I think. You don't watch a guy do that." }
          ] },
          { t: "Should I say something to him?", stat: { courage: 1 }, then: [
            { s: 'jay', f: 'neutral', t: "Nah. He knows we know. That's enough. Saying it out loud makes it a thing he has to answer." }
          ] }
        ] },
        { n: "At seven fifty-eight he picked up the containers and went. On his way past the hooks he put two fingers on the handle of the good pot, very lightly, the way you'd touch a horse's neck in passing, and didn't move it at all." },
        { bond: { jay: 1 } }
      ] },

    // Morning: the empties on the step at seven.
    { id: 'jay-containers', after: '11/16', until: '12/18', slot: 'early', schoolOnly: true, events: ['a4-yeobos'],
      place: 'Iwatodai Dorm · Front', time: 'Early Morning', bg: 'iwotodaidorm-outside', scene: [
        { n: "At seven in the morning Jay was on the dorm's front step in a hoodie with the hood up and his breath going white, waiting, with the patience of somebody who had been up for two hours already and had made his peace with it." },
        { s: 'jay', f: 'neutral', t: "Empties. The dorm's got six of my containers. I need them. I'm going to the market." },
        { n: "Junpei came out with three of them stacked, unwashed, and a guilty face. Yukari came out behind him with the other three, washed, dried and nested inside each other with the lids on, and handed them over without a word, and looked at Junpei." },
        { s: 'yukari', f: 'neutral', t: "Wash them, Junpei. He feeds you. You wash the box. That's how civilization works." },
        { s: 'junpei', f: 'flustered', t: "I was GOING to. I was going to wash them in my heart." },
        { choose: [
          { t: "(Take Junpei's three back inside and wash them.)", stat: { kindness: 1 }, then: [
            { n: "She took them. It took four minutes. When she came back out Jay was still there, exactly where he'd been, and he took the clean ones off her and nodded, once, and put them in the bag." },
            { s: 'jay', f: 'neutral', t: "Thanks. Don't do it again. He has to learn." }
          ] },
          { t: "Where are you going this early?", then: [
            { s: 'jay', f: 'neutral', t: "Fish market. Best stuff's gone by eight. Same as everywhere." },
            { s: 'jay', f: 'neutral', t: "Go to school. Learn something. Tell me what. I never know what you guys learn." }
          ] },
          { t: "Junpei, wash them in your heart faster.", stat: { charm: 1 }, then: [
            { n: "Yukari laughed out loud. Junpei put his hand over his heart and staggered backward into the doorframe as if shot. Jay, on the step, did not laugh, but his eyes did, briefly, over the top of the bag." }
          ] }
        ] },
        { bond: { jay: 1 } }
      ] },

    // After the solstice: Jay and Fuuka, the curry roux aisle.
    { id: 'jay-fuuka-roux', after: '1/8', until: '2/10', slot: 'after', flags: ['year-goes-on'], events: ['a4-yeobos'],
      place: 'Iwatodai Strip · Supermarket', time: 'After School', bg: 'iwatodai-supermarket', scene: [
        { n: "She found them in the supermarket on the Strip, in the curry aisle, in front of a wall of roux boxes, Fuuka with a basket over her arm and her phone open to a list, Jay with his arms folded and his head on one side, both of them looking at the shelves with the absolute concentration of two generals at a map." },
        { s: 'fuuka', f: 'neutral', t: "The medium one. Everybody can eat the medium one. Ken can eat the medium one. That's the whole rule of curry night." },
        { s: 'jay', f: 'neutral', t: "The medium one's a lie. Medium's a word they put on a box so nobody gets mad. Get the hot one and a mild one and mix them. You control it." },
        { s: 'fuuka', f: 'surprised', t: "Mix them? You can mix them?" },
        { s: 'jay', f: 'neutral', t: "You can mix anything. That's all cooking is. Mixing things and being right about it." },
        { choose: [
          { t: "(Put one of each in Fuuka's basket.)", stat: { proficiency: 1 }, then: [
            { n: "She took a hot and a mild off the shelf and put them in the basket. Fuuka looked at the two boxes side by side as if they'd been introduced at a party and she wasn't sure they'd get along." },
            { s: 'fuuka', f: 'happy', t: "...Okay. Okay! We'll try it. If Ken cries, it's on both of you." }
          ] },
          { t: "Fuuka's curry is perfect. Leave it alone.", stat: { kindness: 1 }, then: [
            { s: 'jay', f: 'neutral', t: "Yeah. It is. I'm not touching it. I'm just saying." },
            { s: 'fuuka', f: 'happy', t: "You're never just saying." },
            { s: 'jay', f: 'happy', t: "...Get the medium one." }
          ] },
          { t: "What if you mix three?", stat: { courage: 1 }, then: [
            { s: 'jay', f: 'surprised', t: "..." },
            { s: 'jay', f: 'neutral', t: "That's insane. Do it." },
            { n: "Fuuka put three boxes in the basket with the expression of a woman crossing a line she'd never known was there." }
          ] }
        ] },
        { bond: { jay: 1 } }
      ] }
  );

  /* ── Run-ins (living-runins.js format) ── */
  (W.FEMC_GAME_RUNINS ||= []).push(
    { id: 'ri-jay-hagakure', who: 'jay', where: { areas: ['strip'] }, after: '11/9', until: '1/31', events: ['a4-yeobos'], scene: [
      { n: "On her way back down the Strip she passed Hagakure, and slowed, because there was a boy in a letterman jacket standing outside its window with his hands in his pockets, not going in, watching the cook behind the counter pull noodles with the absolute stillness of somebody watching a master work." },
      { n: "The cook knew he was there. The cook was ignoring him with tremendous professionalism." },
      { s: 'jay', f: 'neutral', t: "Look at that. Look at his wrists. He's been doing that thirty years. He's not even thinking. That's the dream. That's the whole dream." },
      { choose: [
        { t: "Go in. Order something.", stat: { courage: 1 }, then: [
          { n: "They went in. Jay ordered the plainest thing on the menu and ate it in total silence with his eyes on the cook, and at the end, when he paid, the cook gave him one short nod across the counter without looking up, and Jay walked out onto the Strip looking like he'd been knighted." }
        ] },
        { t: "(Stand and watch with him.)", stat: { kindness: 1 }, then: [
          { n: "She stood beside him at the window. They watched for ten minutes. Neither of them said anything, and the cook, without once looking up, began, very slightly, to show off." }
        ] },
        { t: "You could do that.", then: [
          { s: 'jay', f: 'neutral', t: "Nah. Not like that. I'm a different kind of cook." },
          { s: 'jay', f: 'neutral', t: "...Maybe one of me could. If he started over. That guy started over, I bet. Everybody good started over once." }
        ] }
      ] },
      { bond: { jay: 1 } }
    ] },
    { id: 'ri-jay-pier', who: 'jay', where: { areas: ['port'] }, after: '11/9', until: '1/31', events: ['a4-yeobos'], scene: [
      { n: "On her way back along the seafront, at the end of the pier where the wind came straight off the bay, there was a boy at the rail with his back to her and his hood up, and the old folding phone open in his hand, looking down at its little screen the way you'd look at a photograph." },
      { n: "He heard her coming. He closed it, with a small clean snap, and put it in his inside pocket, and turned round." },
      { s: 'jay', f: 'neutral', t: "Hey." },
      { s: 'jay', f: 'neutral', t: "It's the same water. Did you know that? All of it. This is the same water as everywhere. I spent a year in Seattle when I was fifteen. It rained like this. Exactly like this. Sideways, like it's got somewhere to be." },
      { choose: [
        { t: "What were you looking at? On the phone.", then: [
          { s: 'jay', f: 'neutral', t: "Nothing. That's the thing. Nothing on it. No calls. I just check." },
          { s: 'jay', f: 'neutral', t: "Everybody's got a thing they check." }
        ] },
        { t: "(Stand at the rail with him.)", stat: { kindness: 1 }, then: [
          { n: "She stood at the rail. The bay went on being the same water as everywhere, gray and moving, and a ferry went out toward the open sea with its lights on in the middle of the afternoon, and he watched it all the way out without saying anything." }
        ] },
        { t: "Tell me about Seattle.", stat: { knowledge: 1 }, then: [
          { s: 'jay', f: 'neutral', t: "My aunt's year there. I went. There's a photo of me at the Space Needle looking like I hate it. I didn't hate it. I was fifteen. You hate everything in photos at fifteen." },
          { s: 'jay', f: 'happy', t: "Coffee was good. Everybody wore the same jacket. I still have the shirt. Somewhere. In one of me." }
        ] }
      ] },
      { bond: { jay: 1 } }
    ] }
  );
})();
