/* Leon S. Kennedy · XI Strength. Arrives 9/5. Format notes are at the top of akihiko.js.
   Rank 3 sits the day after Shinjiro's death (10/4), so it's written quietly; rank 6 is the Evoker. */
FemcSocial.define({
  id: 'leon', name: 'Leon S. Kennedy', short: 'Leon', arcana: 'Strength', numeral: 'XI', from: 'Resident Evil 4',
  arrives: '9/5',
  home: { place: 'Paulownia Mall · Police Box', slot: 1, days: [1, 2, 4, 5], hint: 'Evenings on Mondays, Tuesdays, Thursdays and Fridays, leaning on the counter of Officer Kurosawa\'s police box.' },
  approach: "A man in a fur-collared leather jacket is leaning on Officer Kurosawa's counter, very politely losing an argument.",
  invite: {
    ask: ["You free?", "Kurosawa is ignoring me again. Come keep me company.", "Got time to grab food?", "Police box. Kurosawa won't talk to me. Come be a buffer.", "Found a ramen place that doesn't ask questions. You in?", "Mall's quiet. Too quiet. Want to walk?", "Need a translator. Long story.", "Kurosawa says I'm loitering. Come loiter with me."],
    ok: ["Copy that.", "Good. Police box.", "Roger. I'll be the one in the jacket."],
    no: ["Roger. Another time.", "Copy. Stay safe.", "Understood. Rain check."]
  },
  hangouts: [
    [
      { n: "Evening, the mall lights coming on one by one, and Leon was at the police box again, leaning on Officer Kurosawa's counter with his chin in his hand, reading the wanted posters on the wall with the expression of a man reviewing someone else's work." },
      { s: 'leon', f: 'neutral', t: "This guy's not in Iwatodai. Wrong shoes for it." },
      { s: 'kurosawa', t: "Nobody asked you." },
      { choose: [
        { t: "What shoes should he be wearing?", notes: 3, then: [
          { s: 'leon', f: 'happy', t: "Something he can run in. Look at his face. That's a guy who runs." },
          { n: "Kurosawa, very slowly, without comment, looked at the poster. Then he wrote something down." }
        ] },
        { t: "Leon, let the man do his job.", notes: 2, then: [{ s: 'leon', f: 'neutral', t: "I am letting him. I'm just also doing it." }] },
        { t: "(Read the posters too.)", notes: 1, then: [{ n: "She read them. They were mostly about bicycle theft. Leon nodded at every one like they were international fugitives." }] }
      ] },
      { n: "Kurosawa didn't thank him. But when they left there were two cans of hot tea on the counter that hadn't been there before, and nobody said anything about them, which was apparently how things were done at the police box." }
    ],
    [
      { n: "Leon's idea of dinner was a convenience-store bento eaten standing up beside the police box, facing the mall, back to the wall. He did it every night, Kurosawa said. Like a horse." },
      { s: 'leon', f: 'neutral', t: "Habit. You always face the door." },
      { s: 'solar', t: "There's no door. It's a mall." },
      { s: 'leon', f: 'neutral', t: "Everything's a door if you're unlucky enough." },
      { choose: [
        { t: "(Sit on the bench and pat the spot beside you.)", notes: 3, then: [{ n: "He looked at the bench. Then at the mall. Then at her. Then he sat, and kept his eyes on the escalators the whole time, and ate the rest of his bento like a normal human being, and admitted at the end that his knees had been killing him." }] },
        { t: "(Stand beside him and face the mall too.)", notes: 2, then: [
          { n: "She put her back to the wall next to his and ate her rice ball facing the mall. He glanced sideways at her, and the corner of his mouth went up." },
          { s: 'leon', f: 'happy', t: "Look at you. Natural." }
        ] },
        { t: "That's the saddest thing I've ever heard.", notes: 1, then: [
          { s: 'leon', f: 'neutral', t: "You should hear the rest of my résumé." },
          { n: "He said it lightly. She didn't push." }
        ] }
      ] },
      { n: "A kid ran past with a balloon and Leon tracked him all the way to the escalator without moving his head, then went back to his pickled plum like nothing had happened. It was a strange way to live, she thought, and a lonely one, and he was weirdly good company inside it." }
    ],
    [
      { n: "Ashley was sitting on the police box counter again, which Kurosawa had stopped fighting, eating a crepe the size of her head and dripping strawberry sauce onto the incident log." },
      { s: 'ashley', f: 'happy', t: "Solar! Tell Leon the photo sticker booth is not a security risk." },
      { s: 'leon', f: 'serious', t: "It's a small enclosed space with one exit and a curtain." },
      { s: 'ashley', f: 'serious', t: "It has GLITTER FRAMES, Leon." },
      { choose: [
        { t: "(Drag him into the booth.)", notes: 3, then: [
          { n: "It took both of them. The booth was very small and Leon was not, and there were three of them in it and a great many elbows. The machine counted down in a cheerful voice. Ashley made a peace sign. Solar made a face. Leon, at the last second, out of pure reflex, checked the exit." },
          { s: 'ashley', f: 'happy', t: "Oh my god. He's looking at the curtain in every single one." },
          { s: 'leon', f: 'happy', t: "Somebody has to." }
        ] },
        { t: "Leon can stand guard outside the curtain.", notes: 2, then: [
          { s: 'leon', f: 'neutral', t: "...That's acceptable." },
          { s: 'ashley', f: 'serious', t: "NO. He has to be IN it. That's the whole point." }
        ] },
        { t: "It's a little bit of a security risk.", notes: 1, then: [
          { s: 'leon', f: 'happy', t: "Thank you." },
          { s: 'ashley', f: 'serious', t: "TRAITOR." }
        ] }
      ] },
      { n: "Ashley stuck one of the stickers on the police box counter, right next to the incident log. Kurosawa saw it. He left it there." }
    ],
    [
      { n: "Leon had decided to learn Japanese. His method was to point at things on Officer Kurosawa's desk and say their names in English, loudly, until Kurosawa gave up and said them in Japanese." },
      { s: 'leon', f: 'neutral', t: "Stapler." },
      { s: 'kurosawa', t: "...Hotchkiss." },
      { s: 'leon', f: 'surprised', t: "That's not Japanese. That's a guy's name." },
      { choose: [
        { t: "(Teach him how to order ramen instead.)", notes: 3, then: [
          { n: "She wrote it out for him on the back of a lost-property form, phonetically, and made him say it back three times. He got it on the third try, very seriously, with an accent that made Kurosawa turn around in his chair." },
          { s: 'leon', f: 'happy', t: "Okay. That's the only sentence I need. I'm fluent." }
        ] },
        { t: "It really is Hotchkiss. Long story.", notes: 2, then: [{ s: 'leon', f: 'neutral', t: "This country's going to get me before the monsters do." }] },
        { t: "Ask him how to say 'go home.'", notes: 1, then: [{ s: 'kurosawa', t: "I'll teach him that one for free." }] }
      ] },
      { n: "He practiced it under his breath the whole way to the noodle stand. When they got there he said it perfectly, and the cook nodded and served him, and Leon looked prouder than she'd ever seen him look about anything." }
    ],
    [
      { n: "There was a little girl at the police box when Solar got there, maybe five, in a yellow raincoat, sitting on the counter very calmly and holding on to Leon's sleeve. She'd lost her father somewhere between the shoe store and the fountain. Kurosawa was on the radio. Leon was on duty." },
      { s: 'leon', f: 'serious', t: "Okay. Here's the situation. Your dad's out there. We're in here. We hold this position till he shows. Copy?" },
      { n: "The girl, who did not speak a word of English, nodded seriously, like she'd understood all of it." },
      { choose: [
        { t: "(Buy her a juice from the vending machine.)", notes: 3, then: [
          { n: "She came back with an apple juice. Leon stuck the straw in and handed it over with the gravity of a man passing out rations, and the girl drank it holding his sleeve with her other hand, and never once let go." },
          { s: 'leon', f: 'happy', t: "Good call. Morale's important." }
        ] },
        { t: "(Translate for her.)", notes: 2, then: [{ n: "Solar translated. The girl listened, nodded again, and saluted. Leon saluted back without a flicker of irony." }] },
        { t: "You're good with kids.", notes: 1, then: [{ s: 'leon', f: 'neutral', t: "Kids are easy. They complain less than Ashley." }] }
      ] },
      { n: "Her father came running across the mall twenty minutes later, white as paper, and scooped her up, and bowed to Kurosawa four times and to Leon five. Leon told him it was nothing. Then he stood at the counter for a long while after they'd gone, looking at the place where they'd disappeared into the crowd, with an expression Solar wouldn't have known how to name." }
    ]
  ],
  romance: true,
  cast: { ashley: 'Ashley', ada: 'Ada', kurosawa: 'Officer Kurosawa', merchant: 'Merchant', akihiko: 'Akihiko' },
  threads: { ashley: { name: 'leon\'s babysitting service', members: ['leon', 'ashley'] } },
  texts: [
    { id: 'leon-1a', rank: 1, days: 1, slot: 1, msgs: [
      { from: 'leon', t: 'Kurosawa says you vouched for me.' },
      { from: 'leon', t: 'Thanks. Probably.' }
    ], reply: [
      { t: "You owe me.", notes: 3, then: [{ from: 'leon', t: 'Story of my life.' }] },
      { t: 'Where did you even get that jacket', notes: 2, then: [{ from: 'leon', t: 'Classified.' }, { from: 'leon', t: 'It was on sale.' }] }
    ] },
    { id: 'ash-2', thread: 'ashley', rank: 2, days: 1, msgs: [
      { sys: 'ashley created "leon\'s babysitting service"' },
      { from: 'ashley', t: 'SOLAR!!! thank you for today 💛💛' },
      { from: 'ashley', t: 'leon has never once taken me shopping' },
      { from: 'leon', t: 'I took you through a castle.' },
      { from: 'ashley', t: 'THAT IS NOT SHOPPING LEON' },
      { from: 'ashley', t: 'also why is the group name that' },
      { from: 'leon', t: 'Because it\'s accurate.' }
    ], reply: [
      { t: 'Same time next week, Ashley?', then: [{ from: 'ashley', t: 'YES' }, { from: 'leon', t: 'I\'ll bring a bigger bag.' }] },
      { t: "Leon, you carried eleven bags. I'm proud of you.", then: [{ from: 'leon', t: 'Twelve. One of them was a lamp.' }] }
    ] },
    { id: 'leon-3a', rank: 3, days: 2, slot: 1, msgs: [
      { from: 'leon', t: 'You eat today?' }
    ], reply: [
      { t: 'Not really.', notes: 3, then: [{ from: 'leon', t: 'Okay. I\'m bringing ramen. Don\'t argue.' }] },
      { t: "I'm okay. Really.", notes: 2, then: [{ from: 'leon', t: 'Sure.' }, { from: 'leon', t: 'Bringing ramen anyway.' }] }
    ] },
    { id: 'ash-4long', thread: 'ashley', rank: 4, before: 7, days: 3, rename: "leon's babysitting service 👍", msgs: [
      { from: 'ashley', t: 'ok BIG news' },
      { from: 'ashley', t: 'there is a karaoke place on the second floor of the mall' },
      { from: 'ashley', t: 'and i booked a room. for three. friday' },
      { from: 'leon', t: 'No.' },
      { from: 'ashley', t: 'its already paid for leon' },
      { from: 'leon', t: 'With what money.' },
      { from: 'ashley', t: 'dont worry about it' },
      { from: 'leon', t: 'I am extremely worried about it.' },
      { ask: [
        { t: "I'm in. Leon, you're singing.", notes: 3, then: [
          { from: 'ashley', t: 'YESSSS 💛' },
          { from: 'leon', t: "I'm security. Security doesn't sing." },
          { from: 'ashley', t: 'security DOES sing actually i checked' }
        ] },
        { t: 'Ashley. Where did the money come from?', notes: 2, then: [
          { from: 'ashley', t: 'kurosawa' },
          { from: 'leon', t: 'Ashley.' },
          { from: 'ashley', t: 'he OFFERED. he said anything to get leon out of his police box for one night' },
          { from: 'leon', t: "...That's fair." }
        ] }
      ] },
      { from: 'ashley', t: 'ok song requests for leon. go' },
      { from: 'leon', t: "I don't know any songs from this decade." },
      { from: 'ashley', t: 'you dont know any songs from ANY decade' },
      { from: 'leon', t: 'I know one.' },
      { from: 'ashley', t: 'is it the one you hum when youre sharpening your knife' },
      { from: 'leon', t: 'No comment.' },
      { ask: [
        { t: "Something sad and dramatic. He'd nail it.", notes: 3, then: [{ from: 'ashley', t: 'OMG yes. a power ballad. he has the hair for it' }, { from: 'leon', t: 'Leave the hair out of this.' }] },
        { t: 'Let him pick. He has a secret favorite. I can tell.', notes: 2, then: [{ from: 'leon', t: "I don't." }, { from: 'leon', t: "It's a very good song, though." }] },
        { t: 'A duet. Leon and Ashley.', notes: 1, then: [{ from: 'ashley', t: 'ew' }, { from: 'leon', t: 'Absolutely not.' }, { from: 'ashley', t: 'first thing we have agreed on all year' }] }
      ] },
      { from: 'ashley', t: 'ALSO i taught leon emoji today' },
      { from: 'ashley', t: 'show her leon' },
      { from: 'leon', t: '👍' },
      { from: 'ashley', t: 'thats the only one he learned' },
      { from: 'leon', t: 'It covers everything.' },
      { sys: 'ashley renamed the group "leon\'s babysitting service 👍"' },
      { ask: [
        { t: '👍', notes: 3, then: [{ from: 'leon', t: 'See. She gets it.' }, { from: 'ashley', t: 'i hate it here' }] },
        { t: 'Leon, try a different one.', notes: 2, then: [{ from: 'leon', t: '🔪' }, { from: 'ashley', t: 'NOT THAT ONE' }] }
      ] },
      { from: 'leon', t: "Friday. 1900. Don't be late." },
      { from: 'ashley', t: 'he means 7pm. he thinks hes in the army' }
    ] },
    { id: 'leon-5a', rank: 5, days: 1, slot: 1, msgs: [
      { from: 'leon', t: 'About tonight. Ada.' },
      { from: 'leon', t: 'It\'s complicated. It\'s always been complicated.' }
    ], reply: [
      { t: "You don't have to explain.", notes: 3, then: [{ from: 'leon', t: 'I know. That\'s why I want to.' }] },
      { t: 'She stole your thing.', notes: 2, then: [{ from: 'leon', t: 'She does that.' }] }
    ] },
    { id: 'leon-6a', rank: 6, days: 1, slot: 1, msgs: [
      { from: 'leon', t: 'Still thinking about that thing you carry.' },
      { from: 'leon', t: 'You okay? Actually okay?' }
    ], reply: [
      { t: "It's just how it works here.", notes: 2, then: [{ from: 'leon', t: 'Doesn\'t mean I have to like it.' }] },
      { t: "I'm okay. Thank you for asking.", notes: 3, then: [{ from: 'leon', t: 'I\'ll keep asking.' }] }
    ] },
    { id: 'leon-8a', rank: 8, days: 1, slot: 1, msgs: [
      { from: 'leon', t: 'Didn\'t finish the drink. Figured you\'d want to know.' }
    ], reply: [
      { t: "I'm really glad.", notes: 3, then: [{ from: 'leon', t: 'Yeah. Me too.' }] },
      { t: 'Proud of you, rookie.', notes: 3, then: [{ from: 'leon', t: 'Don\'t call me rookie.' }, { from: 'leon', t: '...Okay you can call me rookie.' }] }
    ] },
    { id: 'leon-9r', rank: 9, route: 'romance', days: 1, slot: 1, msgs: [
      { from: 'leon', t: 'I\'ve been shot at less than I\'ve been nervous this week.' },
      { from: 'leon', t: 'Worth it.' }
    ], reply: [
      { t: 'Smooth, agent.', notes: 3, then: [{ from: 'leon', t: 'I have my moments.' }] },
      { t: 'Come over?', notes: 3, then: [{ from: 'leon', t: 'Already walking.' }] }
    ] },
    { id: 'leon-9f', rank: 9, route: 'friend', days: 1, slot: 1, msgs: [
      { from: 'leon', t: 'Partner.' },
      { from: 'leon', t: 'Just wanted to type it.' }
    ], reply: [
      { t: 'Partner.', notes: 3, then: [{ from: 'leon', t: 'Good.' }] },
      { t: "Ashley's going to be jealous.", notes: 2, then: [{ from: 'leon', t: 'Ashley is always jealous. She\'ll live.' }] }
    ] }
  ],
  ranks: [
    { after: '9/7', title: '1: where\'s everyone going', place: 'Paulownia Mall · Police Box', scene: [
      { n: "Officer Kurosawa had a problem, and the problem was leaning on his counter in a leather jacket with a fur collar, asking very politely where a man might buy ammunition in this city." },
      { s: 'kurosawa', t: "You can't. That's the point of Japan." },
      { s: 'leon', f: 'neutral', t: "Okay. What about a knife?" },
      { s: 'kurosawa', t: "Sir." },
      { n: "He was good-looking in an exhausting way, the kind of good-looking that looked like it hadn't slept since about 1998, with a curtain of hair falling over one eye that he kept pushing back and that kept falling anyway. American. A holster under the jacket, empty. He had the posture of someone who was always, on some level, waiting for the ceiling to collapse." },
      { n: "Solar had only come in because Kurosawa sometimes had things in the back room for people who knew to ask, and she knew to ask, and now she was watching a stranger lose an argument to the least movable man in Port Island." },
      { s: 'kurosawa', t: "He came in at midnight. Covered in green slime. Said he'd shot something with too many arms on the monorail." },
      { s: 'kurosawa', t: "You're from that dorm. You know what he's talking about. Vouch for him or I'm calling somebody." },
      { choose: [
        { t: "He's with me.", notes: 3, then: [
          { s: 'leon', f: 'surprised', t: "...I am?" },
          { s: 'solar', t: "You are now. Keep up." },
          { s: 'leon', f: 'happy', t: "Yes, ma'am." }
        ] },
        { t: "You shot it? With what?", notes: 2, then: [
          { s: 'leon', f: 'neutral', t: "My last six rounds. Then a kick. Then I suplexed it. Didn't love that part." },
          { s: 'kurosawa', t: "He's yours. Take him." }
        ] }
      ] },
      { n: "Outside the police box, under the fountain lights, he introduced himself. Leon. Leon Kennedy. A federal agent. He'd been on a job, he said, somewhere in rural Spain, a village full of people who didn't act like people anymore, and the last thing he remembered was a door, and then a monorail full of coffins under a green moon." },
      { s: 'leon', f: 'neutral', t: "So. Where's everyone going? At midnight, I mean. The coffins." },
      { s: 'solar', t: "Nobody's going anywhere. That's kind of the problem." },
      { s: 'leon', f: 'neutral', t: "...Great. Love that for me." },
      { n: "He said it so flatly, so completely without surprise, that Solar laughed out loud in the middle of Paulownia Mall, and he looked at her like that was the first good thing that had happened to him in a long time." }
    ] },

    { after: '9/21', title: '2: ashley', place: 'Paulownia Mall', scene: [
      { n: "The second time she found Leon at the police box, there was a girl sitting on the counter swinging her legs, blonde bob, orange sweater, plaid skirt, eating a crepe and complaining." },
      { register: 'ashley' },
      { s: 'ashley', f: 'serious', t: "LEON. There is a MALL. A real one. With clothes. And you won't let me go in it." },
      { s: 'leon', f: 'serious', t: "Last time I let you go somewhere you got kidnapped by a cult." },
      { s: 'ashley', f: 'serious', t: "That was ONE TIME." },
      { s: 'leon', f: 'neutral', t: "It was four times, Ashley." },
      { n: "Ashley Graham. The president's daughter, Leon explained, with the face of a man who had explained this to a lot of people. She'd come through the same door he had, and he was, technically, still on the job. She was his job. She was always his job." },
      { choose: [
        { t: "I'll take her shopping. You can follow us.", notes: 3, then: [
          { s: 'ashley', f: 'happy', t: "OH MY GOD. I love you. Who are you. I love you." },
          { s: 'leon', f: 'happy', t: "...Fine. But I'm carrying the bags. Bags are cover." }
        ] },
        { t: "Leon, let the girl have a crepe in peace.", notes: 2, then: [
          { s: 'ashley', f: 'happy', t: "THANK you. Someone with SENSE." },
          { s: 'leon', f: 'neutral', t: "She's had three crepes." }
        ] }
      ] },
      { n: "They went through every store in Paulownia Mall. Ashley tried on everything. Solar told her the truth about all of it, which Ashley said nobody ever did, because everyone was always too scared of her father. Leon trailed three steps behind them the entire afternoon, carrying twelve bags, including a lamp, scanning every exit." },
      { n: "At one point a man bumped into Ashley by accident and Leon was between them before Solar saw him move. The man apologized four times and fled. Leon went back to carrying the lamp as if nothing had happened." },
      { s: 'ashley', f: 'neutral', t: "He does that. It's annoying." },
      { s: 'ashley', f: 'sad', t: "...It's also kind of the only reason I'm alive. Don't tell him I said that." }
    ] },

    { after: '10/6', title: '3: raccoon city', music: 'tender', place: 'Iwatodai Dorm · Front Steps', scene: [
      { n: "The day after, the dorm was very quiet. Nobody cooked. Nobody turned on the television. The kitchen was clean in a way that hurt to look at, everything put away exactly where one person had always put it." },
      { n: "Solar was sitting on the front steps in the cold, not doing anything, not feeling much of anything, which was its own kind of feeling. She didn't notice Leon until he sat down one step below her, a convenience store bag in his hand." },
      { s: 'leon', f: 'sad', t: "Akihiko told me. I'm sorry." },
      { n: "He didn't say anything else for a while. He took two cups of instant ramen out of the bag and opened them and poured in hot water from a thermos and handed her one, and a pair of chopsticks, and waited." },
      { s: 'leon', f: 'sad', t: "My first day on the job, I was a cop. Raccoon City. I showed up a day late because I'd been out drinking over a girl. By the time I got there, the whole city was gone." },
      { s: 'leon', f: 'sad', t: "Everyone I was supposed to work with. Dead. One day. I never even met most of them." },
      { s: 'leon', f: 'sad', t: "People told me it gets easier. It doesn't. You just get bigger around it." },
      { choose: [
        { t: "(Eat the ramen.)", notes: 3, then: [{ n: "She ate the ramen. It was terrible, and hot, and the first thing she'd eaten all day. Leon ate his too, in silence, and didn't look at her when her shoulders started shaking, which was the kindest thing anyone had done for her since it happened." }] },
        { t: "How do you keep going?", notes: 3, then: [
          { s: 'leon', f: 'serious', t: "Somebody always needs getting out. So I get them out. Then I do it again." },
          { s: 'leon', f: 'sad', t: "It's not a great answer. It's the one I've got." }
        ] }
      ] },
      { n: "He stayed until the streetlights came on. When he left, he put his jacket around her shoulders without saying anything about it, and it smelled like gunpowder and cold air and something like cedar, and she wore it until she went inside." }
    ] },

    { after: '10/20', title: '4: what\'re ya buyin\'', music: 'mystery', place: 'Port Island Station · Back Alley', scene: [
      { n: "There was a man in the back alley behind Port Island Station who had not been there yesterday. A long dark cloak. A hood. A bandana over his face. Eyes that glowed, faintly, in a way that was not normal for a human person. He opened his coat as they passed, and the inside of it was lined with guns." },
      { s: 'merchant', t: "What're ya buyin'?" },
      { s: 'leon', f: 'surprised', t: "...You've got to be kidding me." },
      { s: 'merchant', t: "Ahhh, stranger. Fancy seeing you here. Got some rare things on sale, stranger." },
      { n: "Leon looked at Solar. Solar looked at Leon. Leon put his face in his hands." },
      { s: 'leon', f: 'neutral', t: "He was in Spain. In the castle. On the island. Everywhere I went, he was there. I never once asked how." },
      { s: 'leon', f: 'neutral', t: "I'm not going to ask now either." },
      { choose: [
        { t: "Buy him something.", notes: 3, then: [
          { s: 'merchant', t: "Heh heh heh. Thank you." },
          { n: "She bought him an attaché case. A good one, black, with more slots than it should have had. Leon looked at it for a long second, and then spent forty minutes arranging the few things he owned into it, rotating every item until it fit perfectly." },
          { s: 'leon', f: 'happy', t: "...Best present I ever got. Don't tell Ashley." }
        ] },
        { t: "Do you take yen?", notes: 2, then: [
          { s: 'merchant', t: "Stranger, I take everything." },
          { s: 'leon', f: 'neutral', t: "That's what I'm afraid of." }
        ] }
      ] },
      { s: 'merchant', t: "Come back anytime." },
      { n: "When they looked back from the end of the alley, he was gone. There was only a little blue torch, burning in the dark where he'd stood, and then that was gone too." }
    ] },

    { after: '11/3', title: '5: the woman in red', place: 'Iwatodai · Rooftops · The Dark Hour', scene: [
      { n: "The Dark Hour, and they were on a rooftop above the strip because Leon had seen a light up there where no light should be. The city below was coffins and green. The moon was a big pale coin." },
      { n: "There was a woman standing at the edge of the roof. Red turtleneck under a black harness. A sleek black bob. Red lipstick, at midnight, in the Dark Hour, which was a choice. She was holding a little glowing sample case and looking at Leon like he was a joke she'd heard before and still liked." },
      { register: 'ada' },
      { s: 'ada', f: 'happy', t: "Leon. You look tired." },
      { s: 'leon', f: 'flustered', t: "Ada." },
      { n: "That was all he said. Just her name. But Solar had been reading people her whole life, and there was a whole history in the way he said it, years of it, rooftops and helicopters and a woman who always left first." },
      { s: 'ada', f: 'happy', t: "And who's this? You're collecting strays again." },
      { choose: [
        { t: "I'm the one who keeps him fed.", notes: 3, then: [{ s: 'ada', f: 'neutral', t: "Hm. Somebody should." }] },
        { t: "(Say nothing. Watch her.)", notes: 2, then: [{ s: 'ada', f: 'happy', t: "Oh, I like her. She watches. You never watch, Leon." }] }
      ] },
      { s: 'leon', f: 'serious', t: "What are you doing here?" },
      { s: 'ada', f: 'happy', t: "Same thing as always. Picking up something that doesn't belong to me." },
      { n: "She held up the case, and Leon realized at the same moment Solar did that it was the thing from his jacket pocket, the one he'd been carrying since Spain, and he hadn't felt her take it. She smiled. Then she fired a grappling hook into the dark and was gone, a flash of red against the green moon." },
      { s: 'leon', f: 'happy', t: "...Every single time." },
      { n: "He didn't sound angry. He sounded like a man who'd been robbed by the same person for ten years and had stopped being sure he minded. Solar didn't know why that made her chest feel tight. She decided not to know." }
    ] },

    { after: '11/12', title: '6: the evoker', place: 'Iwatodai Dorm · Command Room', scene: [
      { n: "Leon had never seen anyone summon a Persona before." },
      { n: "They were in the command room, the Dark Hour about to start, and Solar took the silver thing out of the holster on her thigh the way she always did, without thinking, and checked it, and Leon's whole body went still." },
      { s: 'leon', f: 'surprised', t: "...Solar. What is that." },
      { s: 'solar', t: "It's an Evoker. It's not a real gun." },
      { s: 'leon', f: 'serious', t: "It looks like a real gun." },
      { s: 'solar', t: "You point it at your head and pull the trigger and your Persona comes out. That's how it works." },
      { n: "She said it plainly, because it was plain, to her, after seven months. She'd forgotten what it looked like from outside. She watched him remember for her, watched it land on his face, a man who had pulled a hundred people out of hell watching a teenage girl calmly describe holding a gun to her own temple." },
      { s: 'leon', f: 'serious', t: "...Who decided that? Who decided kids should do that?" },
      { choose: [
        { t: "Nobody decided. It's just how it works here.", notes: 2, then: [{ s: 'leon', f: 'serious', t: "Somebody always decided. That's how it works everywhere." }] },
        { t: "It helps, actually. It's like... facing it.", notes: 3, then: [
          { s: 'leon', f: 'sad', t: '...' },
          { s: 'leon', f: 'serious', t: "Okay. Okay. I don't have to like it. I just have to be there when you do it." }
        ] }
      ] },
      { n: "The clock hit midnight. The room turned green. She raised the Evoker and pulled the trigger, and her Persona came out of her in a burst of blue glass and light, and Leon, standing beside her, did not flinch, did not look away, and put one hand very lightly against the middle of her back the whole time, like a man steadying someone on a ledge." }
    ] },

    { after: '11/26', title: '7: tartarus', place: 'Tartarus · The Dark Hour', scene: [
      { n: "Leon had insisted on coming. Mitsuru had said absolutely not. Leon had said, very politely, that he had been in a lot of towers, and Mitsuru had looked at him for a long moment and said, fine, but you're carrying the healing items." },
      { n: "Tartarus did not care about any of them. Floor after floor of shifting halls, checkerboard and blood-colored, and at the top of the night a shadow that filled the entire room, a huge knight on a black horse, the kind of thing that made Junpei go very quiet." },
      { s: 'leon', f: 'serious', t: "Okay. Big guy. Love that. Stay behind me." },
      { choose: [
        { t: "No. Beside you.", notes: 3, then: [{ s: 'leon', f: 'happy', t: "...Copy that. Beside me." }] },
        { t: "You don't even have a Persona.", notes: 2, then: [{ s: 'leon', f: 'happy', t: "I've got a knife and a bad attitude. I've done more with less." }] }
      ] },
      { n: "It was the hardest fight they'd had in weeks. The knight was fast and hit like a train and kept getting back up. Leon fought the way she'd heard about and never believed, a knife in a reverse grip, ducking under swings that would have taken his head off, and when the knight staggered he ran up its arm, actually ran up it, and kicked it in the face, a full roundhouse, and it went down." },
      { n: "Her Persona finished it. The room went still. Leon was standing on the knight's back, breathing hard, hair in his face, entirely covered in black shadow-dust." },
      { s: 'leon', f: 'neutral', t: "...No thanks, bro." },
      { s: 'solar', t: "Who are you talking to?" },
      { s: 'leon', f: 'flustered', t: "Habit. Don't worry about it." },
      { n: "Junpei said it was the coolest thing he'd ever seen in his life. Akihiko asked Leon to teach him that kick. Mitsuru said nothing, but on the way down she quietly handed Leon a towel, which Solar had never once seen her do for anyone." }
    ] },

    { after: '12/10', title: '8: the bar', music: 'tender', place: 'Paulownia Mall · Club Escapade', scene: [
      { n: "He was at the bar of Club Escapade on a Thursday night, alone, a glass of something brown in front of him, and he hadn't touched it. He'd just been looking at it. He did that, sometimes, she'd noticed. Ordered one and looked at it." },
      { s: 'leon', f: 'sad', t: "Hey, rookie. You're too young for this place." },
      { s: 'solar', t: "So are you, by the look of it." },
      { s: 'leon', f: 'neutral', t: "...Fair." },
      { n: "She sat down beside him. He pushed the glass an inch away, and then another inch, and then he talked, more than he'd ever talked, about the years between Raccoon City and now. The government that found him after. The jobs they gave him. The things he'd seen that he didn't have words for and didn't want words for. How every time he thought he could stop, somebody else needed getting out." },
      { s: 'leon', f: 'sad', t: "Some nights the drink's the only thing that turns it off. I know that's not good. I'm working on it." },
      { s: 'leon', f: 'serious', t: "Here's the thing. Your Dark Hour ends in January. Everybody says so. And then what? You just go back to being a kid?" },
      { s: 'leon', f: 'sad', t: "Because I never got to. And I'd really like one of us to." },
      { choose: [
        { t: "Then come with me. We'll both try.", notes: 3, then: [
          { s: 'leon', f: 'sad', t: '...' },
          { s: 'leon', f: 'happy', t: "Yeah. Okay. We'll both try." }
        ] },
        { t: "You're allowed to stop too, Leon.", notes: 3, then: [{ s: 'leon', f: 'surprised', t: "...Nobody's ever told me that. Not once. Huh." }] }
      ] },
      { n: "He left the drink on the bar, full. When they walked out into the cold, he looked back at it once, the way you'd look at a door you'd decided not to go through, and then he didn't look back again." }
    ] },

    { after: '12/22', title: '9: what are we', place: 'Paulownia Mall · Fountain', scene: [
      { n: "The mall was full of Christmas lights, gold and white, hanging over the fountain where they'd first stood. Ashley had insisted on putting a Santa hat on Leon. He had allowed it, with the face of a man accepting a sentence." },
      { n: "Ashley had also, very loudly, announced she was going to look at shoes for exactly one hour, and had winked at Solar so hard it was practically audible, and gone." },
      { s: 'leon', f: 'flustered', t: "...She's subtle." },
      { s: 'solar', t: "She's the president's daughter. She's never had to be." },
      { s: 'leon', f: 'sad', t: "Look. I'm bad at this. Every time I care about someone, it goes sideways. People leave, or they get taken, or they turn out to be working for someone else." },
      { s: 'leon', f: 'happy', t: "But you've never once done any of that. You just keep showing up with food." },
      { s: 'leon', f: 'serious', t: "So I need to know. What is this?" },
      { route: [
        { t: "I'm falling for you, Leon.", route: 'romance', notes: 3, then: [
          { s: 'leon', f: 'surprised', t: '...' },
          { s: 'leon', f: 'flustered', t: "Yeah. Me too. I fell a while ago. On the steps, I think. With the ramen." },
          { n: "He kissed her by the fountain, under the gold lights, still wearing the Santa hat, which he would later deny, and which Ashley photographed from behind a pillar, which she would later absolutely not deny." }
        ] },
        { t: "You're my partner, Leon. In everything.", route: 'friend', notes: 3, then: [
          { s: 'leon', f: 'happy', t: "...Partner. Yeah. I like that." },
          { s: 'leon', f: 'happy', t: "Haven't had a real one since Claire. Don't make me regret it, rookie." }
        ] }
      ] }
    ] },

    { after: '12/29', title: '10: rookie', place: 'Paulownia Mall · Police Box', scene: [
      { n: "The last days of the year, the snow coming down in soft slow flakes on Paulownia Mall, and Leon was back at the police box, where it had started, leaning on the counter while Officer Kurosawa pretended to ignore him." },
      { s: 'kurosawa', t: "He's been here since four. Waiting for you. Take him." },
      { n: "Leon walked her out to the fountain and stopped, and took something out of his jacket pocket. A badge. Old, scratched, a little bent at one corner. Raccoon City Police Department." },
      { s: 'leon', f: 'sad', t: "My first badge. From my first day. The worst day of my life." },
      { s: 'leon', f: 'happy', t: "I kept it because I thought I should remember it. Turns out I don't need it anymore to remember. I've got better days now." },
      { s: 'leon', f: 'flustered', t: "You should have it. Because you're the reason I've got better days." },
      { ifRoute: 'friend', then: [
        { choose: [
          { t: "Officer Solar, reporting for duty.", notes: 3, then: [{ s: 'leon', f: 'happy', t: "God help us all. Welcome to the force, rookie." }] },
          { t: "I'll keep it safe.", notes: 3, then: [{ s: 'leon', f: 'happy', t: "I know you will. That's the whole point." }] }
        ] },
        { n: "Ashley came back with four shopping bags and the merchant's little blue torch flickered at the end of the alley for a second and Kurosawa sighed from the police box, and they stood in the snow together, the three of them, a babysitter and his charge and the girl who'd made them both feel like people again." }
      ] },
      { ifRoute: 'romance', then: [
        { choose: [
          { t: "Stay. However long you can.", notes: 3, then: [
            { s: 'leon', f: 'serious', t: "As long as I'm here. That's a promise. I've never broken one to you." },
            { n: "He kissed her in the falling snow, slow and careful, the way he did everything that actually mattered, and Officer Kurosawa, inside the police box, very deliberately turned his chair to face the wall." }
          ] },
          { t: "(Pin the badge to his jacket instead.)", notes: 3, then: [
            { s: 'leon', f: 'surprised', t: '...?' },
            { s: 'solar', t: "Keep it. Just remember who gave it back to you." },
            { s: 'leon', f: 'flustered', t: "...Yeah. I'm never going to forget that." }
          ] }
        ] }
      ] }
    ] }
  ]
});
