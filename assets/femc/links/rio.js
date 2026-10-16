/* Rio Iwasaki · VII The Chariot. Arrives 4/21. Format notes are at the top of akihiko.js.
   A Gekkoukan 2nd-year from P3P's own female route: girls' volleyball, the team's ace. She knows nothing about the Dark Hour.
   Teammates Hina Okabe (setter) and Ayane Moriguchi (libero) are invented for this link. Her number is 7, like the Chariot. */
FemcSocial.define({
  id: 'rio', name: 'Rio Iwasaki', short: 'Rio', arcana: 'Chariot', numeral: 'VII', from: 'Persona 3 Portable',
  arrives: '4/21',
  home: { place: 'Gekkoukan High · Gym', slot: 0, days: [2, 4, 6], hint: 'After school on Tuesdays, Thursdays and Saturdays, at volleyball practice in the gym.' },
  approach: "Long after everyone else has gone home, a girl with a high black ponytail is alone in the gym, serving ball after ball at an empty court and glaring at every one that lands.",
  invite: {
    ask: ["you free? i need someone to toss.", "gym. now. the team left early again", "hagakure? i'm starving. actually starving", "need a receiver. you're the only one who doesn't flinch", "are you busy. don't lie", "wall drills. 20 min. bring water", "the gym's empty and i'm sick of my own serves", "come tell me my jump serve is bad. nobody else will"],
    ok: ["good. don't be late.", "ok. stretch first. i mean it", "finally. gym."],
    no: ["fine. the wall will toss for me. badly", "ok. next time you're doing extra reps", "fine. rest. you look like you need it anyway"]
  },
  hangouts: [
    [
      { n: "Rio had decided that today Solar was learning to receive, which meant Rio stood on the other side of the net with the ball cart and Solar stood on this side of it with her forearms pressed together like a girl praying for the wrong thing." },
      { s: 'rio', f: 'serious', t: "Platform. Thumbs together. Don't swing at it, it's not a baseball. Let it come to you." },
      { n: "The first serve came to her. It came to her the way a truck comes to a mailbox." },
      { choose: [
        { t: "(Get back in position.)", notes: 3, then: [
          { n: "She got back in position. Her forearms were already turning a blotchy, offended pink. The next one went up instead of sideways, high and wobbling, and Rio caught it at the net and looked at her with something dangerously close to pride." },
          { s: 'rio', f: 'happy', t: "There. That one. Again." }
        ] },
        { t: "Could you maybe serve at, like, half?", notes: 2, then: [
          { s: 'rio', f: 'neutral', t: "That was half." },
          { n: "Solar chose not to find out what full was. Rio served the next one softer anyway, without comment, and pretended she hadn't." }
        ] },
        { t: "My arms are going to fall off.", notes: 1, then: [
          { s: 'rio', f: 'serious', t: "They won't. I've checked. Nobody's arms have ever fallen off." }
        ] }
      ] },
      { n: "By the end her wrists had a matching set of red ovals, like a pair of bracelets she hadn't asked for. Rio looked at them, and then went to the vending machine and came back with a cold can of tea and pressed it against the worst one, frowning at it like it was her fault, which it was." }
    ],
    [
      { n: "There was a ritual to Rio's ponytail, and Solar had started to notice it. Between drills she pulled the tie out with her teeth, gathered all that black hair up in both hands, twisted it once, and snapped it back into place higher than before, so tight it looked like it hurt." },
      { n: "She did it maybe nine times a practice. Every time, her face changed a little. Reset. Like a fighter touching gloves." },
      { s: 'rio', f: 'neutral', t: "What. Is there something on my face?" },
      { choose: [
        { t: "You do the ponytail thing when you're about to get serious.", notes: 3, then: [
          { s: 'rio', f: 'surprised', t: "...I do not." },
          { n: "She did it again eleven minutes later, before the hardest drill of the day, caught Solar watching, and turned bright red to the ears." }
        ] },
        { t: "How long does it take to grow it that long?", notes: 2, then: [
          { s: 'rio', f: 'neutral', t: "Since middle school. I keep meaning to cut it. Short hair's faster." },
          { s: 'rio', f: 'flustered', t: "...I like it, though. Don't tell anyone that." }
        ] },
        { t: "Doesn't that give you a headache?", notes: 1, then: [
          { s: 'rio', f: 'serious', t: "Everything gives me a headache. Hair's the least of it." }
        ] }
      ] },
      { n: "At the end of practice she pulled the tie out for the last time and her hair came down all at once, heavy and dark, and she shook it out and sighed like she was setting something down. For a second she looked like a different girl entirely. Then she tied it up again to walk to the station." }
    ],
    [
      { n: "Somebody had to mop the gym floor after practice, and that somebody, on Rio's team, was always Rio, because Rio did not trust anyone else to do it in straight lines." },
      { n: "The mops were old and gray and smelled like a basement. Rio handed her one like a sword." },
      { s: 'rio', f: 'serious', t: "Baseline to baseline. Overlap your rows. If you leave streaks somebody slips on Tuesday and it's your fault forever." },
      { choose: [
        { t: "Race you to the other end.", notes: 3, then: [
          { n: "Rio said that was stupid and childish. Rio was already running. They crossed the gym side by side at a full sprint with the mops skidding out in front of them, and Rio won by a mop head, and threw both arms up like she'd taken a championship." },
          { s: 'rio', f: 'happy', t: "Ha! Again!" }
        ] },
        { t: "(Mop in perfect straight lines.)", notes: 2, then: [
          { s: 'rio', f: 'neutral', t: "...Huh. You're good at this." },
          { s: 'rio', f: 'happy', t: "Not as good as me. But good." }
        ] },
        { t: "The janitor's literally paid to do this.", notes: 1, then: [
          { s: 'rio', f: 'serious', t: "The janitor doesn't play on this floor." }
        ] }
      ] },
      { n: "When they were done the floor shone under the lights, wet and gold, and Rio stood in the doorway looking at it with her hands on her hips for a long minute, the way other people looked at sunsets." }
    ],
    [
      { n: "Stretching, Rio said, was the part everyone skipped and the reason everyone got hurt, and so they sat on the floor of the gym facing each other with their legs out in a V and their feet pressed together, holding hands across the gap and pulling." },
      { n: "Rio could fold herself nearly flat. Solar could fold herself nearly not at all. Her hamstrings had opinions, and the opinions were loud." },
      { s: 'rio', f: 'neutral', t: "Breathe out. You're holding your breath. Everyone holds their breath." },
      { choose: [
        { t: "(Breathe out and lean.)", notes: 3, then: [
          { n: "She breathed out and leaned, and Rio pulled slow and steady, and something in the back of her legs gave a fraction of an inch with a sensation like a sigh." },
          { s: 'rio', f: 'happy', t: "There. See? Your body knew how. You just had to stop arguing with it." }
        ] },
        { t: "You're enjoying this.", notes: 2, then: [
          { s: 'rio', f: 'neutral', t: "Yes." },
          { n: "She did not even try to deny it. It was almost admirable." }
        ] },
        { t: "I think I'm done stretching forever.", notes: 1, then: [
          { s: 'rio', f: 'serious', t: "Then you're done walking forever, eventually. Your choice." }
        ] }
      ] },
      { n: "Afterward she lay flat on her back on the cool floor, and Rio lay down next to her without being asked, and they looked up at the high caged lights and the one volleyball that had been stuck in the rafters since, according to Rio, before either of them was born." }
    ],
    [
      { n: "Rio had laid six towels out on the far side of the court, folded into squares, scattered from the back line to the sideline. Targets. She stood at the service line with a ball in one hand and her eyes narrowed, like a sniper, like a girl about to settle a personal grudge with a towel." },
      { n: "She hit five of six. The sixth clipped the corner and she glared at it for a full ten seconds." },
      { s: 'rio', f: 'neutral', t: "Your turn. Underhand's fine. I'm not a monster." },
      { choose: [
        { t: "(Aim for the far corner. Go big.)", notes: 3, then: [
          { n: "It did not go anywhere near the far corner. It went high and short and landed, by sheer cosmic accident, dead center on the nearest towel, with a soft little pomf." },
          { s: 'rio', f: 'surprised', t: "...Did you mean that?" },
          { s: 'solar', t: "Absolutely." },
          { s: 'rio', f: 'happy', t: "Liar. Do it again." }
        ] },
        { t: "(Aim for the closest towel.)", notes: 2, then: [
          { n: "She missed the closest towel by about a meter, and Rio nodded seriously, like a scientist, and moved the towel a meter." }
        ] },
        { t: "What do I win if I hit one?", notes: 1, then: [
          { s: 'rio', f: 'neutral', t: "You win having hit one." }
        ] }
      ] },
      { n: "They played until Solar hit three. It took forty minutes. When the third one landed Rio cheered so loudly it echoed off the ceiling, and then looked around the empty gym to make sure nobody had heard her." }
    ]
  ],
  romance: true,
  cast: { hina: 'Hina', ayane: 'Ayane', junpei: 'Junpei', yukari: 'Yukari' },
  threads: { volley: { name: 'gkk girls volleyball 🏐', members: ['hina', 'ayane', 'rio'] } },
  texts: [
    { id: 'rio-1a', rank: 1, days: 1, slot: 1, msgs: [
      { from: 'rio', t: 'your tosses drift left.' },
      { from: 'rio', t: '...thanks for staying though.' }
    ], reply: [
      { t: "I'll fix the drift. Thursday?", notes: 3, then: [{ from: 'rio', t: 'thursday.' }, { from: 'rio', t: "don't be late. i mean it." }] },
      { t: "Was that a thank-you? From you?", notes: 2, then: [{ from: 'rio', t: "don't get used to it" }] }
    ] },
    { id: 'rio-2a', rank: 2, days: 1, slot: 1, msgs: [
      { from: 'rio', t: "sorry you got stuck in the middle of that." },
      { from: 'rio', t: "they're not bad people. they just. ugh." },
      { from: 'rio', t: 'never mind.' }
    ], reply: [
      { t: "You can finish the sentence. I won't tell.", notes: 3, then: [{ from: 'rio', t: "they just don't want it as much as i do." }, { from: 'rio', t: "and i don't know how to not want it." }] },
      { t: "You were kind of harsh, though.", notes: 2, then: [{ from: 'rio', t: 'i know.' }, { from: 'rio', t: "i always know. after." }] }
    ] },
    { id: 'rio-3a', rank: 3, days: 1, slot: 1, msgs: [
      { from: 'rio', t: "the thing i told you. about middle school." },
      { from: 'rio', t: "nobody on the team knows that." }
    ], reply: [
      { t: "Then nobody will.", notes: 3, then: [{ from: 'rio', t: 'ok.' }, { from: 'rio', t: 'good. ok.' }] },
      { t: "Thanks for trusting me with it.", notes: 3, then: [{ from: 'rio', t: "i didn't decide to. it just came out" }, { from: 'rio', t: "...i'm glad it was you though" }] }
    ] },
    { id: 'rio-4a', rank: 4, days: 1, slot: 1, msgs: [
      { from: 'rio', t: 'are you awake' },
      { from: 'rio', t: 'never mind' },
      { from: 'rio', t: "i keep hearing myself say it. in her voice. like she's saying it to me" }
    ], reply: [
      { t: "I'm awake. I'm here.", notes: 3, then: [{ from: 'rio', t: '...' }, { from: 'rio', t: "can you just stay on for a bit. you don't have to say anything" }] },
      { t: "That means you already know it was wrong.", notes: 2, then: [{ from: 'rio', t: 'yeah.' }, { from: 'rio', t: "knowing doesn't make it un-said though" }] }
    ] },
    { id: 'rio-6a', rank: 6, days: 1, slot: 1, msgs: [
      { from: 'rio', t: 'my shoulders are on fire' },
      { from: 'rio', t: 'do NOT say i told you so. you did not tell me so. i told me so and i ignored me' }
    ], reply: [
      { t: "Aloe. Cold towel. I'm bringing both tomorrow.", notes: 3, then: [{ from: 'rio', t: '...' }, { from: 'rio', t: "ok. thank you. stop being nice it's making it worse" }] },
      { t: "You look like a lobster with a ponytail.", notes: 2, then: [{ from: 'rio', t: 'a FAST lobster' }, { from: 'rio', t: 'with a good serve' }] }
    ] },
    { id: 'rio-7a', rank: 7, days: 1, slot: 1, msgs: [
      { from: 'rio', t: "they won't let me walk to the bathroom by myself" },
      { from: 'rio', t: 'hospital jello is a war crime' },
      { from: 'rio', t: 'come back tomorrow?' }
    ], reply: [
      { t: "I'll bring real food. Don't tell the nurse.", notes: 3, then: [{ from: 'rio', t: 'gyoza.' }, { from: 'rio', t: "i'm not asking. i'm telling you what i need to live" }] },
      { t: "You just want someone to complain at.", notes: 2, then: [{ from: 'rio', t: 'yes.' }, { from: 'rio', t: "and you're the best at listening to it. come back" }] }
    ] },
    { id: 'rio-8a', rank: 8, days: 1, slot: 1, msgs: [
      { from: 'rio', t: 'hina cried on the bus home. ayane pretended she didn\'t see. i pretended too' },
      { from: 'rio', t: "i don't think i've ever been this happy about a game i didn't play in" }
    ], reply: [
      { t: "You were in it. Every point.", notes: 3, then: [{ from: 'rio', t: 'shut up' }, { from: 'rio', t: "...i washed the 7 off my wrist and then i felt stupid for washing it off" }] },
      { t: "They love you, you know.", notes: 3, then: [{ from: 'rio', t: "i know. i didn't. now i do" }, { from: 'rio', t: "it's a lot. i'm going to bed" }] }
    ] },
    { id: 'rio-9r', rank: 9, route: 'romance', days: 1, slot: 1, msgs: [
      { from: 'rio', t: 'i said it way too fast.' },
      { from: 'rio', t: "i'm not taking any of it back. i just want you to know i could have said it slower" }
    ], reply: [
      { t: "Say it slower tomorrow, then.", notes: 3, then: [{ from: 'rio', t: '...' }, { from: 'rio', t: 'ok. i will. you asked for this' }] },
      { t: "Fast was perfect. Fast was very you.", notes: 3, then: [{ from: 'rio', t: "i'm lying on my floor right now" }, { from: 'rio', t: 'that is all' }] }
    ] },
    { id: 'rio-9f', rank: 9, route: 'friend', days: 1, slot: 1, msgs: [
      { from: 'rio', t: 'best teammate.' },
      { from: 'rio', t: "i wanted to type it. it looks better typed" }
    ], reply: [
      { t: "Best teammate.", notes: 3, then: [{ from: 'rio', t: 'good.' }, { from: 'rio', t: "you're still tossing left though" }] },
      { t: "Does Hina know she got demoted?", notes: 2, then: [{ from: 'rio', t: "hina is my best SETTER. different category" }, { from: 'rio', t: "don't tell her i said that" }] }
    ] },
    { id: 'volley-5long', thread: 'volley', rank: 5, before: 8, days: 2, slot: 1, rename: 'gkk girls volleyball 🏐 (+ solar)', msgs: [
      { sys: 'hina added Solar to "gkk girls volleyball 🏐"' },
      { from: 'hina', t: 'SOLAR!!! welcome!!! 🏐🏐🏐' },
      { from: 'hina', t: 'ok first order of business' },
      { from: 'hina', t: 'ayane says rio practiced her apology on someone first' },
      { from: 'ayane', t: 'it had a structure. it had an intro. it had a conclusion' },
      { from: 'ayane', t: "nobody improvises a conclusion" },
      { from: 'rio', t: "i'm leaving this group" },
      { ask: [
        { t: "I have no idea what you're talking about.", notes: 3, then: [{ from: 'rio', t: 'thank you' }, { from: 'ayane', t: 'that is exactly what the person she practiced on would say' }] },
        { t: "It was three drafts. The first one was a game plan.", notes: 2, then: [{ from: 'hina', t: 'NOOOO 😭😭' }, { from: 'rio', t: 'traitor' }, { from: 'rio', t: 'you were the one who said it needed a conclusion' }] },
        { t: "Rio, you can't leave. You'd have to apologize to get back in.", notes: 1, then: [{ from: 'rio', t: 'i hate everyone here' }, { from: 'hina', t: 'she means she loves us' }] }
      ] },
      { from: 'hina', t: 'second order of business. solar is now honorary team manager' },
      { from: 'ayane', t: 'we do not have a team manager' },
      { from: 'hina', t: "exactly so there's a vacancy" },
      { from: 'rio', t: "she tosses left. she's not ready" },
      { from: 'hina', t: 'rio you have literally asked her to toss for you every tuesday since april' },
      { ask: [
        { t: "I accept. My first act is mandatory snack breaks.", notes: 3, then: [{ from: 'hina', t: 'BEST MANAGER EVER' }, { from: 'ayane', t: 'i would die for this administration' }, { from: 'rio', t: "...one snack break. ONE" }] },
        { t: "Rio's right, I toss left.", notes: 2, then: [{ from: 'rio', t: 'see.' }, { from: 'ayane', t: "she's covering for you. that's a manager move. hired" }] }
      ] },
      { from: 'ayane', t: 'third order of business' },
      { from: 'ayane', t: 'rio does the ponytail thing every time solar walks into the gym' },
      { from: 'hina', t: 'OMG she DOES' },
      { from: 'rio', t: "i do that every time ANYONE walks in" },
      { from: 'ayane', t: 'you did not do it when i walked in. you did it when solar walked in. twice. i have a tally' },
      { ask: [
        { t: "Ayane, I'd like to see this tally.", notes: 2, then: [{ from: 'ayane', t: 'it is in the back of my english notebook. it has its own page' }, { from: 'rio', t: 'ayane i will serve at your face' }] },
        { t: "Leave her alone. It's a good ponytail.", notes: 3, then: [{ from: 'hina', t: 'aaaaaa 😳' }, { from: 'rio', t: '...' }, { from: 'rio', t: 'practice is at four. everyone be on time' }, { from: 'ayane', t: 'she has gone offline to scream into a pillow' }] }
      ] },
      { sys: 'hina renamed the group "gkk girls volleyball 🏐 (+ solar)"' },
      { from: 'hina', t: 'its official now. no takebacks' },
      { from: 'rio', t: 'four o clock.' }
    ] }
  ],
  ranks: [
    { after: '4/23', title: '1: one more', place: 'Gekkoukan High · Gym · After Hours', scene: [
      { n: "Solar had only come back for her gym shoes. That was the whole plan. Get the shoes, catch the train, get home, and sleep the eleven hours a girl needed when she spent her nights the way Solar spent hers." },
      { n: "The gym lights were still on. Every bank of them, humming, throwing that flat white glare over the wood, and under them a single girl was serving volleyballs at an empty court, one after another, from a wire cart that was almost empty." },
      { n: "Long black hair pulled up in a ponytail so high and tight it swung like a metronome every time she tossed. Knee pads. A Gekkoukan practice shirt gone dark with sweat down the spine. She threw, stepped, jumped, hit, and the ball went over the net like it had been fired out of something and smacked the floor an inch inside the far line, and she said, to nobody at all, \"Again.\"" },
      { n: "The cart ran out. She stood there with her hands on her hips, breathing hard, looking at forty balls scattered over the far side of the court like each one had personally let her down." },
      { s: 'rio', f: 'serious', t: "Are you just going to stand in the doorway?" },
      { choose: [
        { t: "(Start picking up balls.)", notes: 3, then: [
          { n: "Solar crossed the court and started picking up balls, two at a time, tucked against her hip, and dropping them back in the cart. The girl watched her do four trips before she said anything." },
          { s: 'rio', f: 'surprised', t: "...You didn't have to do that." },
          { s: 'rio', f: 'flustered', t: "Thanks. I mean. Thanks." }
        ] },
        { t: "Where's the rest of your team?", notes: 2, then: [
          { s: 'rio', f: 'serious', t: "Gone. Practice ends at five. Apparently at five everybody stops wanting to get better." },
          { s: 'rio', f: 'neutral', t: "So it's me and the cart." }
        ] },
        { t: "Sorry. I'll go.", notes: 1, then: [
          { s: 'rio', f: 'neutral', t: "You came in for something. Get it." },
          { n: "Solar got her shoes. She did not, for some reason she would think about later, leave." }
        ] }
      ] },
      { n: "Her name was Rio Iwasaki. Second-year, two classes down the hall. Volleyball. She said all three like the volleyball was the important one, and like Solar should already have known it." },
      { s: 'rio', f: 'neutral', t: "You. Can you toss?" },
      { s: 'solar', t: "Toss what?" },
      { s: 'rio', f: 'serious', t: "A ball. Up. In the air. Where I can hit it. It's not complicated." },
      { choose: [
        { t: "I can try.", notes: 3, then: [
          { n: "The first one went crooked and low and Rio hit it anyway, adjusting in midair like a cat, and it still landed in. The second was worse. The ninth was almost right. By the twentieth they had something, a rhythm, a little two-person machine, toss and step and jump and crack." },
          { s: 'rio', f: 'happy', t: "Better. You're drifting left. Fix it." }
        ] },
        { t: "Is that how you ask everyone for help?", notes: 2, then: [
          { s: 'rio', f: 'flustered', t: "I'm not asking for help. I'm asking for a toss." },
          { s: 'rio', f: 'serious', t: "...Please." },
          { n: "It came out like it cost her money. Solar picked up a ball." }
        ] },
        { t: "I'm more of a spectator.", notes: 1, then: [
          { s: 'rio', f: 'serious', t: "Spectators don't get better at anything." },
          { n: "It was said with such total conviction that Solar picked up a ball anyway, mostly out of spite." }
        ] }
      ] },
      { n: "They went until the janitor came through and started turning the lights off, bank by bank, so that the far end of the gym went dark first and they were left playing in a shrinking square of white. Rio didn't stop until it was the last one. Solar's arms ached. Her palms stung. She was smiling and didn't know when that had started." },
      { s: 'solar', t: "Are you always this blunt?" },
      { s: 'rio', f: 'neutral', t: "I'm accurate. People hear blunt." },
      { s: 'rio', f: 'neutral', t: "Tuesday, Thursday, Saturday. After five. If you're bored." },
      { n: "She said it to the cart, not to Solar, wheeling it back toward the equipment room with her ponytail swinging, and it took Solar until the train to understand that she'd been recruited." }
    ] },

    { after: '5/12', title: '2: the team', place: 'Gekkoukan High · Gym', scene: [
      { n: "Gekkoukan's girls' volleyball team, Solar discovered, was nine girls, two working ball pumps, and one Rio Iwasaki, and the nine girls and the one Rio Iwasaki did not appear to be playing the same sport." },
      { n: "Hina Okabe, the setter, was sitting cross-legged on top of the ball cart eating a melon pan. She had a round face and a short bob clipped back with three pink barrettes and the bright, unbothered energy of somebody who had never once in her life been late and felt bad about it." },
      { s: 'hina', f: 'happy', t: "Oh! You're the toss girl! Rio talked about you!" },
      { s: 'rio', f: 'serious', t: "I said one sentence." },
      { s: 'hina', f: 'happy', t: "She said one sentence, and then she was nice to everyone for an entire practice, which has never happened, so we all had to know." },
      { n: "On the floor by the bench, lying flat on her back with her knees up, was Ayane Moriguchi, the libero, in a different-colored shirt from everyone else. Rangy and quiet, with a deadpan you could have cut glass on. She raised one hand at Solar without sitting up." },
      { s: 'ayane', f: 'neutral', t: "Hello. I'm stretching." },
      { s: 'rio', f: 'serious', t: "You're lying down." },
      { s: 'ayane', f: 'neutral', t: "Horizontally stretching." },
      { n: "Rio ran a receiving drill that nobody did properly. She ran it again. Hina laughed at something one of the first-years whispered, and missed her ball, and laughed harder, and Solar watched the back of Rio's neck go red one degree at a time, like a thermometer." },
      { s: 'rio', f: 'serious', t: "If this is a joke to you, there's the door. Some of us want to actually win a match this year." },
      { n: "The gym went quiet. Hina put her hand over her mouth. At five-thirty exactly Ayane stood up, picked up her bag, and said she had to go." },
      { s: 'rio', f: 'serious', t: "You always have to go." },
      { s: 'ayane', f: 'neutral', t: "Yes. I always do." },
      { n: "Then everyone was looking at Solar, because Solar was the only person in the room who didn't belong to either side, and she could feel it settle on her, the way a ball settles on your arms before you decide where it goes." },
      { choose: [
        { t: "Everyone take five. Hina, can I have a bite of that?", notes: 3, then: [
          { s: 'hina', f: 'flustered', t: "...Yes! Yes. Of course. It's the good kind, from the bakery by the station." },
          { n: "The first-years sat down. Ayane, after a moment, sat down too, on the end of the bench with her bag in her lap. Rio stood in the middle of the court alone for ten very long seconds, and then came over and sat down next to Solar, stiffly, like her knees had made the decision without her." }
        ] },
        { t: "(Pick up a ball and toss for Rio.)", notes: 2, then: [
          { n: "She tossed. Rio hit it. The crack of it filled the gym, and something about it, the plain good sound, broke the tension a little. Hina clapped once, and then looked embarrassed for clapping." }
        ] },
        { t: "Rio, maybe ease up a little?", notes: 1, then: [
          { s: 'rio', f: 'sad', t: "...Right. Sure. Of course you'd say that too." },
          { n: "She went to the wall and served at it by herself for the rest of practice, and nobody stopped her, and nobody joined her." }
        ] }
      ] },
      { n: "Afterward, when the others had gone, Rio sat on the bottom bleacher with a towel around her neck, retying her ponytail, retying it again." },
      { s: 'rio', f: 'sad', t: "I know what they think of me. That I'm a pain. That I take it too seriously." },
      { s: 'rio', f: 'serious', t: "But somebody has to. If nobody takes it seriously, what's the point of being here?" },
      { choose: [
        { t: "Maybe they're here for different reasons than you.", notes: 3, then: [
          { s: 'rio', f: 'neutral', t: "...What other reason is there?" },
          { n: "She asked it honestly, which was the worst part. She really didn't know." }
        ] },
        { t: "You do take it too seriously. It's also kind of great.", notes: 2, then: [
          { s: 'rio', f: 'flustered', t: "That's... You can't just say both of those things at once." },
          { s: 'rio', f: 'flustered', t: "Pick one." }
        ] }
      ] }
    ] },

    { after: '6/2', title: '3: hagakure', place: 'Gekkoukan High · Gym', scene: [
      { n: "In the middle of the last drill of the day, at the top of her jump, Rio's stomach growled so loudly that Hina dropped the ball." },
      { n: "It echoed. It actually echoed. The first-years looked at the ceiling as if it had come from there." },
      { s: 'rio', f: 'flustered', t: "That wasn't me." },
      { s: 'ayane', f: 'neutral', t: "It was a bear. There is a bear in the gym." },
      { choose: [
        { t: "Ramen. My treat. Right now.", notes: 3, then: [
          { s: 'rio', f: 'surprised', t: "...Right now? Practice isn't over." },
          { s: 'hina', f: 'happy', t: "It's over! It's so over! Go! Feed the bear!" }
        ] },
        { t: "When did you last eat?", notes: 2, then: [
          { s: 'rio', f: 'neutral', t: "Lunch. Some of lunch. A rice ball. Half a rice ball." },
          { s: 'rio', f: 'serious', t: "...Fine. Food." }
        ] }
      ] },
      { place: 'Hagakure Ramen', time: 'Evening' },
      { n: "Hagakure was hot and loud and smelled like pork broth and garlic and wet umbrellas, the windows fogged white from the inside. Rio ordered without looking at the menu. The special, large, extra noodles, extra egg, a side of gyoza, a side of fried rice, and a glass of milk, which made the man behind the counter pause and look at her with new respect." },
      { n: "She ate the way she played. No wasted motion. Chopsticks, bowl, breathe, chopsticks. She didn't talk for nine minutes, and when she surfaced the bowl was empty and Solar was a third of the way through hers." },
      { s: 'junpei', f: 'surprised', t: "Whoa. Whoa, whoa. Is she gonna finish the gyoza too?" },
      { n: "Junpei had been at the end of the counter the whole time. He was looking at Rio the way a man looks at a natural disaster on the news." },
      { s: 'rio', f: 'serious', t: "Yes." },
      { s: 'junpei', f: 'happy', t: "Respect. Total respect. Solar, your friend's a legend." },
      { n: "When he'd gone, Rio picked up the last gyoza, looked at it, and put it down on Solar's plate instead, without a word, like that was a normal thing to do. Then she wrapped both hands around the milk." },
      { s: 'rio', f: 'neutral', t: "You want to know why. Everyone always wants to know why I'm like this." },
      { s: 'rio', f: 'sad', t: "Third year of middle school. Prefectural qualifier. Final set, and the coach benched me. Said I was too intense. Said the other girls played worse when I was out there, because they were scared of me." },
      { s: 'rio', f: 'sad', t: "So I sat on the bench with my hands in my lap and watched us lose. Twenty-five to nineteen. I counted every point. I couldn't do anything. I just had to sit there." },
      { s: 'rio', f: 'serious', t: "I swore I'd never sit on a bench again. Never just watch. If I'm good enough, nobody can take me out." },
      { choose: [
        { t: "That must have felt like being erased.", notes: 3, then: [
          { s: 'rio', f: 'surprised', t: "...Yeah." },
          { s: 'rio', f: 'sad', t: "Yeah. That's what it was. I didn't have a word for it." }
        ] },
        { t: "Do you think the coach was right?", notes: 2, then: [
          { s: 'rio', f: 'serious', t: "No." },
          { n: "She said it too fast. Then she looked into the milk for a long time." },
          { s: 'rio', f: 'sad', t: "...Sometimes. At night. Sometimes I think maybe." }
        ] },
        { t: "You were a kid. That coach sounds awful.", notes: 2, then: [
          { s: 'rio', f: 'neutral', t: "Maybe. Doesn't matter now. It happened." }
        ] }
      ] },
      { n: "Outside it had started to rain, a warm June drizzle that made the streetlights blur. Rio pulled her jacket hood up and stood under the shop's awning, not quite ready to leave." },
      { s: 'rio', f: 'flustered', t: "Thanks for the ramen. I'll get the next one. Don't argue, I'll just pay before you can." },
      { n: "She would. Solar knew already that she would, that she'd do it fast and without warning, like a spike, and that it would be impossible to stop her." }
    ] },

    { after: '6/23', title: '4: the walkout', music: 'tender', place: 'Gekkoukan High · Gym', scene: [
      { n: "There was a practice match at four o'clock against Tatsumi Port Girls' Academy, and Rio had been talking about it for two weeks the way some people talked about weddings. She had a notebook. The notebook had diagrams. The diagrams had arrows that had been erased and redrawn so many times the paper had gone soft." },
      { n: "Ayane arrived at three fifty-two. She was still in her school shoes. She said sorry, the shop, a delivery came late, and went to change, and in warm-ups she shanked the first serve that came to her off the side of her arm and into the bleachers." },
      { n: "The other team was watching. Their whole bench was watching." },
      { s: 'rio', f: 'serious', t: "Are you even trying?" },
      { s: 'ayane', f: 'sad', t: "I told you. A delivery came..." },
      { s: 'rio', f: 'serious', t: "If your family's vegetable stand matters more than this, then go stack cabbages, and give your spot to someone who actually cares. Nobody here would even notice you were gone." },
      { n: "The gym went silent in a way Solar had never heard a gym go silent. Even the other team stopped bouncing their balls." },
      { n: "Ayane didn't say anything. She just looked at Rio, steadily, for one long second, and then she took off her knee pads, one and then the other, and set them on the bench side by side." },
      { s: 'hina', f: 'serious', t: "...Rio. That's enough." },
      { s: 'rio', f: 'serious', t: "Hina, you of all people..." },
      { s: 'hina', f: 'serious', t: "No. That's enough." },
      { n: "Hina picked up her bag. Then one of the first-years did. Then all of them, quietly, one by one, until it was only Rio standing on her side of the net, and the Tatsumi captain came over, awkward and polite, to ask if they were forfeiting." },
      { s: 'rio', f: 'neutral', t: "...Yes. We forfeit." },
      { place: 'Gekkoukan High · Gym · After Hours', time: 'Evening' },
      { n: "Solar came back an hour later. She had not, in fact, left. She'd sat on the stairs outside the gym and listened to the other team pack up and go, and then listened to the nothing after that." },
      { n: "Rio was sitting on the floor under the net with her knees pulled up and her arms around them. The diagram notebook was beside her, closed. She hadn't turned on the lights. The evening came in gray and blue through the high windows." },
      { s: 'rio', f: 'sad', t: "I heard it. When I said it. I heard it come out of my mouth and I couldn't stop." },
      { s: 'rio', f: 'sad', t: "Is it wrong? To want to win this much? Is that just... what I am? The girl who wants it so badly nobody can stand to be near her?" },
      { choose: [
        { t: "Wanting to win isn't wrong. What you said to Ayane was.", notes: 3, then: [
          { s: 'rio', f: 'sad', t: "...I know." },
          { s: 'rio', f: 'sad', t: "I know. Those are two different things. I keep making them the same thing." }
        ] },
        { t: "(Sit down next to her under the net.)", notes: 3, then: [
          { n: "Solar sat down next to her, under the net, close enough that their shoulders touched. Rio didn't move away. After a while she let her head fall sideways until it rested there, heavy, and her breathing went uneven, and Solar looked at the far wall very carefully and let her." }
        ] },
        { t: "They'll get over it.", notes: 1, then: [
          { s: 'rio', f: 'serious', t: "They shouldn't. I wouldn't." }
        ] }
      ] },
      { s: 'rio', f: 'sad', t: "Ayane's dad has a bad back. She does the morning deliveries before school and the evening ones after. She's never said anything about it. She just goes." },
      { s: 'rio', f: 'sad', t: "I knew that. I knew that the whole time." },
      { n: "The janitor came by and saw them and didn't turn on the lights, just nodded once and moved on, and they sat in the dark gym until the windows went fully black." }
    ] },

    { after: '7/9', title: '5: the rehearsal', place: 'Gekkoukan High · Rooftop', scene: [
      { n: "Rio found her at lunch on the roof, which she had never done before, and stood in front of her bench with her bento held in both hands like a diploma." },
      { s: 'rio', f: 'serious', t: "I need you to be Ayane." },
      { s: 'solar', t: "...I'm sorry?" },
      { s: 'rio', f: 'serious', t: "I'm going to apologize to her. Tonight. I need to practice. You're the only one I can practice on. Stand up. She's taller than you, so stand up straight." },
      { choose: [
        { t: "(Stand up and do your best Ayane.)", notes: 3, then: [
          { n: "Solar stood up straight, let all the expression drain out of her face, and said, in a perfectly flat voice, Hello, I'm stretching." },
          { s: 'rio', f: 'happy', t: "Pfff... Stop. Stop it, that's too good, I can't do this if you're that good." }
        ] },
        { t: "Are you sure you need to rehearse?", notes: 2, then: [
          { s: 'rio', f: 'serious', t: "Yes. If I go in without a plan I'll say something stupid. That's the whole problem. That's always the whole problem." }
        ] }
      ] },
      { n: "The first draft was a game plan. Rio stood with her feet shoulder-width apart and explained, in three clear points, the errors she had made, the impact those errors had on team cohesion, and the corrective steps she would take going forward. She had, Solar was fairly sure, written it on an index card." },
      { s: 'solar', t: "That's a strategy meeting." },
      { s: 'rio', f: 'flustered', t: "...It's organized." },
      { n: "The second draft was shorter. Rio took a breath, closed her eyes, and said I'M SORRY, OKAY, so loudly that a pigeon left the railing and a group of first-years by the door turned around to look." },
      { s: 'rio', f: 'flustered', t: "That was. That came out wrong." },
      { n: "For the third draft she bowed. She bowed so fast and so deep that Solar had to step back to avoid being headbutted, and they ended up holding each other's elbows to keep from going over, both of them laughing, Rio's face scarlet." },
      { choose: [
        { t: "Just tell her what you told me. In the gym. That you heard yourself.", notes: 3, then: [
          { s: 'rio', f: 'sad', t: "...That's not a speech, though. That's just the truth." },
          { s: 'solar', t: "Yeah. That's the one." }
        ] },
        { t: "Draft three. But slower. Less concussion.", notes: 2, then: [
          { s: 'rio', f: 'happy', t: "Less concussion. Got it." }
        ] },
        { t: "Maybe bring her a gift?", notes: 1, then: [
          { s: 'rio', f: 'neutral', t: "Like what. Cabbage?" },
          { s: 'rio', f: 'sad', t: "...No. Sorry. That's exactly the kind of thing I can't say anymore." }
        ] }
      ] },
      { place: 'Iwatodai Strip · Back Alley', time: 'Evening' },
      { n: "The Moriguchi family's produce shop was a narrow little place at the end of the strip, and the back of it opened onto an alley full of flattened cardboard and plastic crates and the smell of bruised peaches in the heat. Ayane was out there in an apron, cutting the tape on boxes with a box cutter, methodically, one after another." },
      { n: "Solar stopped at the mouth of the alley. Rio kept walking. Solar watched her do it, watched her shoulders go up and then deliberately come down." },
      { s: 'rio', f: 'sad', t: "Ayane. What I said. I heard it come out of my mouth, and I knew it was wrong while I was saying it, and I said the rest of it anyway." },
      { s: 'rio', f: 'sad', t: "You're the best receiver I've ever played with. You do all this and you still show up. I'd notice if you were gone. I'd notice every single point." },
      { s: 'rio', f: 'sad', t: "I'm sorry. That's all. I don't have a conclusion." },
      { n: "Ayane looked at her for a long time. Then she held out the box cutter, handle first." },
      { s: 'ayane', f: 'neutral', t: "There are forty boxes. If you break down twenty, I'll come back Thursday." },
      { s: 'ayane', f: 'neutral', t: "Also you have to say all that again to Hina. And Hina will cry. And you have to let her hug you for as long as she wants." },
      { s: 'rio', f: 'surprised', t: "...As long as she wants?" },
      { s: 'ayane', f: 'happy', t: "I'd budget ten minutes." },
      { n: "Rio broke down twenty-two boxes. Solar did nine. Ayane did the rest, and at some point, without anybody announcing it, the three of them started talking about the Tatsumi setter's terrible habit of telegraphing her quicks, and it was nearly dark before anyone noticed." }
    ] },

    { after: '8/11', title: '6: the sand court', music: 'sun', place: 'Port Island · Seaside Park', scene: [
      { n: "There was a sand volleyball court at the far end of Seaside Park, by the seawall, with a sagging net and a view of the whole bay going white and glittering under the August sun. Rio had been coming here on Sundays since first year, she said, alone, to work on her footwork, because sand made you honest." },
      { n: "She was in a black sports top and shorts and a white cap with the ponytail pulled through the back, and she was barefoot, and Solar was very busy looking at the sand." },
      { s: 'rio', f: 'serious', t: "You're going to learn to spike. Approach is left, right-left, jump. Arms back, arms up, reach, snap the wrist. Do it with me." },
      { n: "They did it together, side by side, without a ball, over and over. Left. Right-left. Jump. Solar's approach was a disaster in sand, which sucked at her feet like it had a grudge. Rio's looked like flight." },
      { s: 'rio', f: 'neutral', t: "Stop thinking about your feet. Your feet already know. Think about the ball." },
      { choose: [
        { t: "(Try it again. And again. And again.)", notes: 3, then: [
          { n: "She tried it again, and again, and on the eleventh try something clicked, some animal knowledge in her knees, and she went up higher than she'd known she could and came down laughing." },
          { s: 'rio', f: 'happy', t: "THERE. Did you feel that? That's it. That's the whole sport, right there." }
        ] },
        { t: "Your feet already know. Mine are confused.", notes: 2, then: [
          { s: 'rio', f: 'happy', t: "Then I'll teach them. Give me your hand." },
          { n: "She walked the approach with Solar slowly, holding her hand, counting under her breath, and Solar's feet learned it almost entirely out of embarrassment." }
        ] },
        { t: "Can we take a water break?", notes: 1, then: [
          { s: 'rio', f: 'neutral', t: "You took one four minutes ago." },
          { s: 'rio', f: 'neutral', t: "...Fine. One minute. I'm counting." }
        ] }
      ] },
      { n: "At the break Rio dug a bottle of sunscreen out of her bag and held it out without looking at her." },
      { s: 'rio', f: 'flustered', t: "Do my back. I can't reach, and Hina always does it in a smiley face, and then I have a sunburn with a smiley face in it for a week." },
      { n: "So Solar did her back. Rio sat on the edge of the court with her head bowed forward and her ponytail held up out of the way in one fist, and Solar spread the sunscreen across her shoulders, warm skin and the hard lines of muscle under it, a pale scar on her shoulder blade from something, and Rio went very still and very quiet in a way that she never, ever was." },
      { n: "Neither of them said anything. Out on the bay a ferry horn sounded, long and low. Solar's hands were steady. Her heart was not." },
      { s: 'rio', f: 'flustered', t: "...Okay. That's. Good. That's enough. Turn around, I'll do yours." },
      { n: "She did Solar's back like she was in a hurry to finish a drill. Then she put her cap on backwards and marched to the service line and did not reapply her own, and by four o'clock her shoulders had gone the color of a stop sign." },
      { n: "The sun was getting low and gold. Rio tossed. Solar went left, right-left, jump, reached, and hit the ball over the net and into the sand on the other side with a sound like a door slamming, clean and real." },
      { n: "Rio crossed the court in about four steps and threw her arms around her. Full force, lifting her off her feet, sand everywhere. Then she seemed to realize what she was doing, and they both froze like that, Rio's arms around her, Rio's sunburned cheek against her temple, both of them breathing hard." },
      { choose: [
        { t: "(Don't let go first.)", notes: 3, then: [
          { n: "Solar didn't let go first. Neither did Rio. It went on for one second too long, and then two, and then Rio stepped back and looked fiercely at the bay." },
          { s: 'rio', f: 'flustered', t: "...Good form. That was good form. That's all that was." }
        ] },
        { t: "Your shoulders are going to hurt tomorrow.", notes: 2, then: [
          { s: 'rio', f: 'flustered', t: "They hurt now. Don't touch them. Don't..." },
          { n: "Solar touched one, very lightly, with two fingers. Rio hissed, and then laughed, and did not move away." }
        ] }
      ] },
      { n: "On the walk back to the station Rio was quiet and red, which could have been the sunburn. Solar decided, for both their sakes, that it was the sunburn." }
    ] },

    { after: '9/15', title: '7: the ankle', music: 'tender', place: 'Tatsumi Memorial Hospital · 3F Ward', scene: [
      { n: "Hina called her at six in the evening, crying so hard that it took a full minute to get the words out. Practice. Rio went up for a spike at the net and came down on a first-year's foot. There was a sound. Solar didn't need to hear what the sound was." },
      { n: "The third-floor ward at Tatsumi Memorial smelled like disinfectant and steamed vegetables. Rio was in the bed by the window with her right ankle up on two pillows, wrapped and braced and enormous, and a cup of hospital jello on the tray in front of her that she was staring at with total contempt." },
      { s: 'rio', f: 'neutral', t: "Partial tear. Ligament. They want to keep me overnight to look at it again, because apparently I tried to walk on it and that was, quote, unwise." },
      { s: 'rio', f: 'neutral', t: "Six weeks. The tournament's in five." },
      { n: "She said it flatly, like a score. The window behind her was going orange." },
      { choose: [
        { t: "(Sit on the edge of the bed.)", notes: 3, then: [
          { n: "Solar sat on the edge of the bed, carefully, on the side away from the ankle. Rio watched her do it. After a moment she slid the jello across the tray toward her, which Solar understood was a profound gesture of trust." }
        ] },
        { t: "Does it hurt?", notes: 2, then: [
          { s: 'rio', f: 'serious', t: "Yes. That's not the problem." }
        ] },
        { t: "Five weeks is basically six weeks.", notes: 1, then: [
          { s: 'rio', f: 'serious', t: "It's literally not. That's literally the problem." }
        ] }
      ] },
      { s: 'rio', f: 'sad', t: "Do you know what I am if I can't play? I've been thinking about it all afternoon." },
      { s: 'rio', f: 'sad', t: "I'm the girl who yells. That's all. The mean one. They only put up with me because I score points. If I'm not scoring points, I'm just..." },
      { n: "She stopped. She looked at the jello. Her mouth did something small and terrible at one corner and then she pressed it flat again." },
      { s: 'rio', f: 'sad', t: "I'm going to be on the bench. Again. I'm going to sit there with my hands in my lap and watch." },
      { choose: [
        { t: "Hina called me crying. Did you know that? She was crying for you.", notes: 3, then: [
          { s: 'rio', f: 'surprised', t: "...Hina was crying?" },
          { s: 'solar', t: "And Ayane carried your bag here. She's in the lobby right now. She won't come up because she says she'll say something sarcastic." },
          { s: 'rio', f: 'sad', t: "..." },
          { s: 'rio', f: 'sad', t: "That's not what you do for someone you just put up with." }
        ] },
        { t: "You're more than your spike, Rio.", notes: 2, then: [
          { s: 'rio', f: 'sad', t: "Everybody says that. Nobody ever says what the more is." }
        ] }
      ] },
      { n: "Visiting hours ended at eight. At seven fifty-five a nurse put her head in and gave Solar a look, and Solar started to get up, and Rio's hand shot out and caught the hem of her sleeve. Not her hand. Just the sleeve, between two fingers, like it had happened without permission." },
      { s: 'rio', f: 'flustered', t: "...Five more minutes. That's all. You don't have to talk." },
      { n: "The nurse looked at Rio's face and went away. Solar sat back down. They didn't talk. Outside the window the lights of Port Island came on one by one, and Rio's fingers stayed curled in her sleeve the whole time, and when she finally let go, Solar could still feel exactly where they'd been." }
    ] },

    { after: '10/24', title: '8: from the bench', place: 'Gekkoukan High · Gym', scene: [
      { n: "The district tournament came to Gekkoukan that year, and the gym was louder than Solar had ever heard it, squeaking shoes and whistles and four schools' worth of parents in the bleachers, and on the Gekkoukan bench, in a brace and a tracksuit, with a clipboard in her lap and a pencil she had already chewed flat, sat Rio Iwasaki." },
      { n: "Yukari had come with Solar. She hadn't meant to stay. She was on her third box of popcorn." },
      { s: 'yukari', f: 'surprised', t: "Okay, I get it now. I get the volleyball thing. Why is everybody so intense? I'm so stressed. I love it." },
      { n: "Before the first serve Hina ran to the bench and took Rio's wrist and drew on it with a black marker, a big lopsided 7, Rio's number. Then she held up her own wrist. And Ayane's. And every girl on the court had a 7 inked on the inside of her wrist, black and smudged, and they were all looking at the bench." },
      { s: 'hina', f: 'happy', t: "You're playing. You're just playing from there today." },
      { s: 'rio', f: 'surprised', t: "..." },
      { n: "Rio didn't say anything. She looked down at her wrist for a long time. Solar, in the third row, watched her press her thumb against it like she was checking it was real." },
      { n: "They lost the first set. Twenty-five to nineteen, and Solar saw Rio's whole body flinch at the number, and at the timeout she was on her feet on one leg with the clipboard, gripping it so hard it bent. She looked up into the bleachers. She found Solar. Her face asked a question." },
      { choose: [
        { t: "(Mime it. Breathe out.)", notes: 3, then: [
          { n: "Solar put a hand flat on her chest and breathed out, big and slow, exaggerated, the way Rio had taught her on the gym floor with their feet pressed together." },
          { n: "Rio stared at her. Then she breathed out too. Then she sat down, and turned to her team, and instead of yelling, she said something nobody in the bleachers could hear, and Hina laughed, and Ayane nodded, and they went back out loose." }
        ] },
        { t: "(Shout.) Tell them what you see, Rio!", notes: 2, then: [
          { n: "Rio heard. She turned around and spoke fast and low, pointing at the clipboard, and Solar could see the whole team leaning in like plants toward a window." }
        ] },
        { t: "(Look away so she doesn't feel watched.)", notes: 1, then: [
          { n: "Solar looked down at her shoes. When she looked up again the timeout was over, and she had no idea what had been said, and wished she did." }
        ] }
      ] },
      { n: "They won the second set. The third was the kind of game that ages you. At twenty-three all, the other team's spiker hit a ball straight down the line, a kill, a sure thing, and Ayane Moriguchi went across the floor in a full dive and got one forearm under it an inch from the wood." },
      { n: "It went up. Hina was under it. Hina set it high to the outside, to a first-year named Tomo who had never once hit a ball in a real match, and Tomo went left, right-left, jump, the way Rio drilled into all of them every single day, and hit it into the floor." },
      { n: "The gym exploded. Yukari screamed and threw popcorn. One point later it was over, and the whole Gekkoukan team ran, not to the middle of the court, but to the bench." },
      { n: "They piled on Rio. All nine of them, careful of the ankle, not careful of anything else, Hina sobbing, Ayane at the bottom of it somehow with her face completely blank and her arms wrapped around Rio's neck. And Rio, at the middle of all of it, was crying. Openly. Loudly. Like she'd forgotten how not to." },
      { place: 'Gekkoukan High · Gym · After Hours', time: 'Evening' },
      { n: "They lost the next match that afternoon, in straight sets, to the team that would win the whole thing. Nobody seemed to care. Afterward Rio sat on the bench in the emptying gym with the marker still on her wrist and Solar sat next to her." },
      { s: 'rio', f: 'sad', t: "I sat on a bench and watched us. Again. Hands in my lap. Just like middle school." },
      { s: 'rio', f: 'happy', t: "And it was the best game of my whole life." },
      { s: 'rio', f: 'neutral', t: "They didn't need me out there. I thought that would feel like being erased. It didn't. It felt like... they're mine, and I'm theirs, and that doesn't stop when I'm not on the court." },
      { choose: [
        { t: "The team was never just you. It was you and them.", notes: 3, then: [
          { s: 'rio', f: 'happy', t: "...Yeah. I think I knew that. I just never had to sit still long enough to see it." }
        ] },
        { t: "They played for you, Rio.", notes: 3, then: [
          { s: 'rio', f: 'flustered', t: "Don't. If you say it like that I'm going to cry again, and I've already cried in front of three schools today." }
        ] }
      ] }
    ] },

    { after: '12/3', title: '9: what are we', place: 'Gekkoukan High · Gym · After Hours', scene: [
      { n: "December, and the gym was cold enough that their breath showed under the lights. The doctor had cleared Rio to jump that morning. She'd texted Solar a single word at 9:14 a.m., in the middle of second period, which was JUMP, in capitals, and nothing else." },
      { n: "Now she stood at the service line with a ball in one hand, rolling her ankle carefully in a slow circle, testing it, the way you'd test ice on a pond." },
      { s: 'rio', f: 'neutral', t: "Toss for me. Like the first time." },
      { choose: [
        { t: "(Toss it a little to the left. For old times' sake.)", notes: 3, then: [
          { n: "She tossed it a little to the left. Rio saw it go and laughed out loud, and went up for it anyway, and adjusted in the air like a cat the way she had in April, and hit it clean into the far corner." },
          { s: 'rio', f: 'happy', t: "You did that on purpose." },
          { s: 'solar', t: "Absolutely." }
        ] },
        { t: "(Toss it perfectly.)", notes: 2, then: [
          { n: "It went up perfectly, right where Rio wanted it, and she went up and hit it, and came down on both feet, and stood there for a second making sure the floor was still the floor." },
          { s: 'rio', f: 'happy', t: "...It held." }
        ] }
      ] },
      { n: "They did twenty. The ankle held for all twenty. Afterward Rio sat down on the cold floor under the net, right where she'd sat the night of the walkout, and patted the floor beside her, and Solar sat." },
      { s: 'rio', f: 'serious', t: "I'm going to say something. Don't interrupt. If you interrupt I'll lose my nerve and I'll have to wait until tomorrow, and I can't wait until tomorrow." },
      { s: 'rio', f: 'flustered', t: "Nobody ever just showed up before. For me. Not for the team, not for the points. You showed up for the cart. For the jello. For the bench." },
      { s: 'rio', f: 'flustered', t: "So I need to know what this is. What we are. I need to know what to call it, because I'm bad at things I don't have a name for." },
      { route: [
        { t: "I think you already know what I'd call it.", route: 'romance', notes: 3, then: [
          { s: 'rio', f: 'surprised', t: "..." },
          { s: 'rio', f: 'flustered', t: "Okay. Okay, then I'll say it. I like you. Like that. I've liked you since the cart, maybe before the cart, I wasn't paying attention, I was serving." },
          { s: 'rio', f: 'flustered', t: "You toss crooked and you never quit and you laugh at me when I'm being ridiculous, and nobody laughs at me, they're all a little scared of me, and you're not, and I think about you during drills, which is completely unacceptable, and I put sunscreen on your back like I was defusing a bomb, and..." },
          { s: 'solar', t: "Rio." },
          { s: 'rio', f: 'flustered', t: "...Too fast?" },
          { s: 'solar', t: "Way too fast. I like you too." },
          { n: "Rio put both hands over her face. From behind them came a sound that was half a laugh and half something else, and her ears were the brightest red Solar had ever seen on a human being, and her shoulder pressed into Solar's and stayed there." }
        ] },
        { t: "You're my best friend, Rio. That's what we are.", route: 'friend', notes: 3, then: [
          { s: 'rio', f: 'surprised', t: "..." },
          { s: 'rio', f: 'happy', t: "...Best teammate. That's what you are. My best teammate." },
          { s: 'rio', f: 'flustered', t: "That's the highest thing I've got, so don't make it weird. I don't say that. I've never said that." },
          { n: "She bumped Solar's shoulder with hers, hard, the way she bumped Hina's after a good set, and then left her shoulder there, and they sat under the net until the janitor came to turn off the lights." }
        ] }
      ] }
    ] },

    { after: '12/22', title: '10: number seven', place: 'Gekkoukan High · Gym · After Hours', scene: [
      { n: "The last practice of the year ended early, at four, because Hina had a cake. It said GOOD JOB GKK in blue icing that had slid sideways on the train. Everyone ate it with their fingers sitting in a circle on the gym floor, and then everyone left, and Hina looked back at the two of them from the door with an expression of enormous, unbearable meaning and was dragged off by Ayane by the hood." },
      { n: "Then it was just the two of them, and the gym, and the janitor starting his rounds at the far end, turning the lights off bank by bank. Half the gym went dark. They stood in the half that wasn't." },
      { n: "Rio had a bag. She'd had it all practice, tucked under the bench, and kept looking at it. Now she took out a folded jersey, old and faded, navy blue with white lettering from a middle school Solar had never heard of. On the back, a big white 7." },
      { s: 'rio', f: 'neutral', t: "I wore this on the bench. That day. I kept it so I'd never forget what it felt like." },
      { s: 'rio', f: 'neutral', t: "I don't think I need it anymore. I sat on a bench this year and it was the best day of my life. So." },
      { s: 'rio', f: 'flustered', t: "It's yours. If you want it. It's too big for you. I don't care." },
      { choose: [
        { t: "(Put it on, right now, over your uniform.)", notes: 3, then: [
          { n: "Solar pulled it on over her uniform. It was too big. It came down past her hips and the sleeves covered her hands and it smelled like a cedar closet and, faintly, underneath, like the gym." },
          { s: 'rio', f: 'happy', t: "...It looks better on you. That's annoying." }
        ] },
        { t: "Are you sure? It's important to you.", notes: 2, then: [
          { s: 'rio', f: 'serious', t: "That's why. Don't make me explain it, I already explained it in my head on the train six times." }
        ] }
      ] },
      { ifRoute: 'friend', then: [
        { s: 'rio', f: 'neutral', t: "Next year. Third year. Last tournament. I want you on the sand court in August, and in the stands in October, and if you learn a jump serve by spring I'll put you in a practice match myself." },
        { choose: [
          { t: "Deal. I'll toss left the whole time.", notes: 3, then: [
            { s: 'rio', f: 'happy', t: "I'll hit it anyway. I always do." },
            { n: "They shook on it, in the half-dark, very formally, like rival captains. Then Rio pulled her into a hug that lifted her off her feet, and this time neither of them pretended it was about good form." }
          ] },
          { t: "Only if you promise to rest when your ankle says so.", notes: 3, then: [
            { s: 'rio', f: 'serious', t: "...Fine. I promise. You're worse than the doctor." },
            { s: 'rio', f: 'happy', t: "Best teammate. Obviously." }
          ] }
        ] },
        { n: "They walked to the station together with the jersey on under Solar's coat, and Rio talked the whole way about next year, rotations and drills and the Tatsumi setter's quicks, and Solar listened to every word." }
      ] },
      { ifRoute: 'romance', then: [
        { n: "The janitor turned off another bank of lights. Now there was only the one over the net, and the two of them under it, and the long shadows of the poles on the floor." },
        { s: 'rio', f: 'flustered', t: "I've been trying to figure out how to do the next part slowly. I promised I'd say things slower." },
        { s: 'rio', f: 'flustered', t: "I don't think I'm going to manage it." },
        { choose: [
          { t: "Then don't.", notes: 3, then: [
            { n: "She didn't. She kissed Solar the way she played, all at once, no wasted motion, one hand fisted in the front of the too-big jersey, and then, after a second, much more slowly, like she'd remembered her promise halfway through and decided to keep it after all." },
            { n: "When she pulled back she was laughing under her breath, red to the ears, and she rested her forehead against Solar's and said, very quietly, a thing she would never have said in daylight, which was that she'd been wanting to do that since the sand court." }
          ] },
          { t: "(Pull the tie out of her ponytail.)", notes: 3, then: [
            { n: "Solar reached up and slid the tie out of her ponytail, slowly, and all that black hair came down around her shoulders at once, heavy and dark, and Rio stood perfectly still and let her." },
            { s: 'rio', f: 'surprised', t: "...Oh." },
            { n: "Then she kissed her, under the last light in the gym, carefully, like something she'd been practicing alone for a very long time and finally had someone to do it with." }
          ] }
        ] },
        { n: "The janitor turned off the last light. Neither of them moved for a while. Somewhere out in the dark a ball rolled off the cart and bounced, once, twice, and Rio said, without letting go, that it could wait until next year." }
      ] }
    ] }
  ]
});
