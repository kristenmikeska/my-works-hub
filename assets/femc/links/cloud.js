/* Cloud Strife · XII The Hanged Man. Arrives on the 7/7 full moon. Format notes are at the top of akihiko.js.
   He only ever calls her "Solar": his own memory is unreliable, so he holds on to names. */
FemcSocial.define({
  id: 'cloud', name: 'Cloud Strife', short: 'Cloud', arcana: 'Hanged Man', numeral: 'XII', from: 'Final Fantasy VII',
  arrives: '7/7',
  home: { place: 'Iwatodai Station', slot: 0, days: [0, 1, 3, 5], hint: 'Daytime on Sundays, Mondays, Wednesdays and Fridays, around Iwatodai Station.' },
  approach: "A blond guy with a sword the size of a door is standing at the station, staring at the train map like it personally offended him.",
  invite: { ask: ["You free?", "Got a job. Could use backup.", "...Want to get food."], ok: "Okay.", no: "...Fine." },
  romance: true,
  cast: { tifa: 'Tifa', aerith: 'Aerith', aphrodite: 'Aphrodite', koromaru: 'Koromaru' },
  texts: [
    { id: 'cloud-1a', rank: 1, days: 1, slot: 1, msgs: [
      { from: 'cloud', t: 'Solar. This is Cloud.' },
      { from: 'cloud', t: 'If you need anything taken care of, I do odd jobs.' },
      { from: 'cloud', t: 'Not a social message.' }
    ], reply: [
      { t: 'Noted. Not a social message.', notes: 3, then: [{ from: 'cloud', t: '...Thanks.' }] },
      { t: 'Can I hire you to have lunch with me?', notes: 2, then: [{ from: 'cloud', t: '...' }, { from: 'cloud', t: 'Fine. You\'re paying.' }] }
    ] },
    { id: 'cloud-3a', rank: 3, days: 1, slot: 1, msgs: [
      { from: 'cloud', t: 'Tifa says I talk more around you.' },
      { from: 'cloud', t: 'I don\'t.' }
    ], reply: [
      { t: 'You definitely do.', notes: 3, then: [{ from: 'cloud', t: '...Maybe a little.' }] },
      { t: "Tifa's very perceptive.", notes: 2, then: [{ from: 'cloud', t: 'She always was.' }] }
    ] },
    { id: 'cloud-5a', rank: 5, days: 1, slot: 1, msgs: [
      { from: 'cloud', t: "I couldn't sleep." },
      { from: 'cloud', t: 'I kept trying to remember his face. The guy with the black hair.' },
      { from: 'cloud', t: "Everything's fuzzy except his voice." }
    ], reply: [
      { t: 'What does his voice say?', notes: 3, then: [{ from: 'cloud', t: '"Embrace your dreams."' }, { from: 'cloud', t: "...I don't know why that hurts so much." }] },
      { t: "I'm here, Cloud.", notes: 3, then: [{ from: 'cloud', t: 'Yeah. You are. Thanks, Solar.' }] }
    ] },
    { id: 'cloud-6a', rank: 6, days: 1, slot: 1, msgs: [
      { from: 'cloud', t: 'Aerith gave me a flower for you. Yellow.' },
      { from: 'cloud', t: 'She said you would know what it means. I don\'t.' }
    ], reply: [
      { t: 'It means reunion, I think.', notes: 3, then: [{ from: 'cloud', t: '...Reunion.' }, { from: 'cloud', t: "Figures she'd pick that one." }] },
      { t: 'Bring it tomorrow.', notes: 2, then: [{ from: 'cloud', t: 'I will. Try not to crush it.' }] }
    ] },
    { id: 'cloud-8a', rank: 8, days: 1, slot: 1, msgs: [
      { from: 'cloud', t: 'If anyone saw the pictures from tonight, I will find them.' },
      { from: 'cloud', t: 'And I will destroy the pictures.' }
    ], reply: [
      { t: 'Junpei has one.', notes: 2, then: [{ from: 'cloud', t: 'Understood.' }, { from: 'cloud', t: 'Tell Junpei to run.' }] },
      { t: 'You looked beautiful.', notes: 3, then: [{ from: 'cloud', t: '...' }, { from: 'cloud', t: 'Not interested.' }, { from: 'cloud', t: '(Thanks.)' }] }
    ] },
    { id: 'cloud-9r', rank: 9, route: 'romance', days: 1, slot: 1, msgs: [
      { from: 'cloud', t: 'Solar.' },
      { from: 'cloud', t: "I'm writing your name down. Every morning. So I never lose it." }
    ], reply: [
      { t: "You won't lose it.", notes: 3, then: [{ from: 'cloud', t: 'I know. I just like writing it.' }] },
      { t: "I'll remind you if you do.", notes: 3, then: [{ from: 'cloud', t: 'Deal.' }] }
    ] },
    { id: 'cloud-9f', rank: 9, route: 'friend', days: 1, slot: 1, msgs: [
      { from: 'cloud', t: "Best friend. Okay." },
      { from: 'cloud', t: "I'm not great at those. I'll work on it." }
    ], reply: [
      { t: "You're already doing great.", notes: 3, then: [{ from: 'cloud', t: '...Thanks.' }] },
      { t: "Let's mosey.", notes: 3, then: [{ from: 'cloud', t: 'Where did you hear that' }, { from: 'cloud', t: 'Never say that again' }] }
    ] }
  ],
  ranks: [
    { after: '7/9', title: '1: not interested', place: 'Iwatodai Station · Taxi Stand', scene: [
      { n: "There was a man at Iwatodai Station with a sword the size of a door." },
      { n: "He was leaning against a pillar by the taxi stand, arms crossed, in a sleeveless navy uniform with a single heavy pauldron on one shoulder and spiky blond hair that defied several laws of physics. The sword was strapped to his back. Nobody was looking at it. Iwatodai had a gift for not looking at things." },
      { n: "He had a piece of cardboard propped against his boot. On it, in very neat handwriting, someone had written: MERCENARY. ODD JOBS. REASONABLE RATES." },
      { s: 'cloud', t: "...You need something?" },
      { choose: [
        { t: "Are you really a mercenary?", notes: 2, then: [{ s: 'cloud', t: "Ex-SOLDIER. First Class. I take whatever pays." }] },
        { t: "That's a big sword.", notes: 3, then: [
          { s: 'cloud', t: '...' },
          { s: 'cloud', t: "Yeah. It is." },
          { n: "He didn't say anything else. But he looked at the sword over his shoulder for a second, oddly, like he wasn't completely sure how it had gotten there." }
        ] },
        { t: "Want to get lunch?", notes: 2, then: [{ s: 'cloud', t: "...Not interested." }] }
      ] },
      { s: 'cloud', t: "I'm Cloud. Cloud Strife." },
      { n: "He said it the way some people said their name, like it was the one thing they were absolutely sure of, and was holding on tight." },
      { s: 'solar', t: "Solar." },
      { s: 'cloud', t: '...Solar.' },
      { n: "He repeated it carefully, like he was writing it down somewhere inside his head, in ink." },
      { s: 'cloud', t: "I woke up on the train platform three nights ago. Everything green. People in coffins. I've seen weird. That was weird." },
      { choose: [
        { t: "That happens here. Every night.", notes: 3, then: [{ s: 'cloud', t: "...Great. Wonderful. Okay." }] },
        { t: "You're taking it well.", notes: 2, then: [{ s: 'cloud', t: "I've woken up in worse places. I think. It's hard to remember." }] }
      ] },
      { n: "She bought him a rice ball from the station convenience store. He tried to pay her back with a crumpled bill from a currency she'd never seen. She told him to keep it. He didn't argue, which she'd learn later was the closest Cloud Strife came to saying thank you." }
    ] },

    { after: '7/23', title: '2: odd jobs', place: 'Paulownia Mall', scene: [
      { n: "Cloud's mercenary business, it turned out, mostly involved being paid in food." },
      { n: "He'd helped the takoyaki stand owner move a freezer. He'd chased a stray cat out of the bookstore. He'd stood outside a nightclub for a whole evening looking intimidating while a bouncer took a smoke break. He accepted payment in onigiri, ramen, and on one occasion, a single very large melon." },
      { s: 'cloud', t: "Today it's a lost dog. Somebody's grandmother. Will you help?" },
      { choose: [
        { t: "Sure. What's the pay?", notes: 2, then: [{ s: 'cloud', t: "Curry. Homemade. I've been told it's very good." }] },
        { t: "You're asking me for help?", notes: 3, then: [{ s: 'cloud', t: "...Don't make it a thing." }] }
      ] },
      { n: "They found the dog in the parking garage under the mall, hiding behind a delivery truck, shaking. Cloud crouched down very slowly, sword and all, and held out his hand, and waited. And waited. And waited, with a patience Solar wouldn't have guessed he had." },
      { n: "The dog came to him eventually. He picked it up like it was made of glass." },
      { s: 'cloud', t: "...Easy. Easy. You're okay." },
      { n: "He didn't sound like a mercenary when he said it. He sounded like someone who'd been lost once himself, a long way from anything, and knew what it was like to be found." },
      { choose: [
        { t: "You're good at this.", notes: 3, then: [{ s: 'cloud', t: "...Not really. I just know what it's like." }] },
        { t: "(Stay quiet and let him have the moment.)", notes: 3, then: [{ n: "Solar didn't say anything. Cloud held the dog for a while longer than he needed to, in the dim garage, and then stood up and carried it all the way back to the grandmother without once setting it down." }] }
      ] },
      { n: "The curry was very good. He ate two bowls. He didn't say anything the whole time, but at the end he said, \"...Good job today, Solar,\" without looking up, and she felt it all the way to her toes." }
    ] },

    { after: '8/6', title: '3: tifa', place: 'Iwatodai · Riverside', scene: [
      { n: "The full moon in August brought Tifa Lockhart down onto the riverside path in the middle of the green hour, landing in a fighting stance with her fists already up." },
      { register: 'tifa' },
      { n: "By the next afternoon she'd found Cloud, the way, he said, she always found him. She was sitting next to him on a bench by the water when Solar arrived, long dark hair, warm red-brown eyes, and a calm about her that made the whole bench feel steadier." },
      { s: 'tifa', t: "You must be Solar. Cloud's mentioned you." },
      { s: 'cloud', t: "...Once." },
      { s: 'tifa', t: "Four times. Today." },
      { choose: [
        { t: "Four times?", notes: 3, then: [
          { s: 'cloud', t: "She's exaggerating." },
          { s: 'tifa', t: "I'm really not." }
        ] },
        { t: "It's nice to meet you, Tifa.", notes: 2, then: [{ s: 'tifa', t: "You too. Thank you for looking after him. He's terrible at letting people." }] }
      ] },
      { s: 'tifa', t: "We grew up together. In a little town called Nibelheim. In the mountains." },
      { s: 'tifa', t: "When we were kids, we made a promise at the water tower. Under the stars. If I was ever in trouble, he'd come and save me." },
      { s: 'cloud', t: "...I remember the stars." },
      { n: "He said it oddly. Like the stars were the only part he was sure of. Tifa looked at him for a moment with an expression Solar couldn't quite read, gentle and careful and a little sad, like someone watching a friend try to remember the words to a song." },
      { choose: [
        { t: "That's a beautiful promise.", notes: 3, then: [{ s: 'tifa', t: "He kept it. More than once. Even when he didn't remember making it." }] },
        { t: "(Notice the way Tifa looks at him.)", notes: 3, then: [{ n: "Solar noticed. She noticed, too, that Cloud didn't, and that Tifa had clearly made her peace with that a long time ago, and that making peace with it had cost her something." }] }
      ] },
      { n: "Tifa stayed for three days and faded on the fourth, at sunrise, on the same bench. Cloud sat there for an hour after she was gone, not moving, holding the water bottle she'd left behind." }
    ] },

    { after: '8/20', title: '4: koromaru', place: 'Naganaki Shrine', scene: [
      { n: "She'd brought him to the shrine because Kiriko said it was a good place to think, and he looked like he needed to think. He'd been getting headaches. He said it was nothing. He kept pressing his hand to his temple when he thought she wasn't looking." },
      { n: "Koromaru came trotting out to meet them, white tail going, red eyes curious. He sniffed Cloud's boots. Cloud crouched down without thinking and scratched behind his ears." },
      { s: 'cloud', t: "...I've done this before. With a dog. Or something like a dog." },
      { s: 'cloud', t: "There was a big yellow bird. A chocobo. I used to ride one. Or someone did. With black hair. He laughed a lot." },
      { n: "He frowned at Koromaru like the dog was holding a memory hostage." },
      { s: 'cloud', t: "It's like reaching for something on a high shelf. My hand gets there and it's just... air." },
      { choose: [
        { t: "Don't force it.", notes: 3, then: [{ s: 'cloud', t: "...Easy for you to say." }] },
        { t: "I'll help you reach for it.", notes: 3, then: [{ s: 'cloud', t: "...Thanks. Nobody's ever offered to do that." }] }
      ] },
      { n: "Koromaru, satisfied with his inspection, lay down on Cloud's boots and fell asleep. Cloud stayed very still for the rest of the afternoon so he wouldn't wake him." }
    ] },

    { after: '9/3', title: '5: zack', music: 'tender', place: 'Iwatodai Station · Platform', scene: [
      { n: "The headaches were getting worse. Solar found him on the station platform at dusk with his back against a pillar and his eyes squeezed shut and his hand pressed hard to his temple." },
      { s: 'cloud', t: "...There's a guy. In my head. Black hair. A big sword. My sword. He's laughing." },
      { s: 'cloud', t: "He says, embrace your dreams. And then he's gone. And I'm carrying his sword." },
      { s: 'cloud', t: "Solar. I don't think I'm who I think I am." },
      { n: "He said it very quietly. Like a confession he'd been afraid of for a long time, said out loud for the first time on a train platform in the wrong world." },
      { choose: [
        { t: "You're Cloud. That's enough for me.", notes: 3, then: [
          { s: 'cloud', t: '...' },
          { s: 'cloud', t: "...You say that like it's simple." },
          { s: 'solar', t: "It is." },
          { n: "He looked at her for a long time. The headache seemed to ease, a little. His hand came down from his temple." }
        ] },
        { t: "Who do you think you are?", notes: 2, then: [{ s: 'cloud', t: "...A SOLDIER. First Class. Except I don't think I ever was. I think I borrowed it. From him." }] }
      ] },
      { n: "A train came in. People got off. People got on. Cloud didn't move. He just sat down on the bench and put his head in his hands, and Solar sat next to him until the next train, and the one after that." }
    ] },

    { after: '9/24', title: '6: aerith', music: 'tender', place: 'Paulownia Mall · Flower Stall', scene: [
      { n: "There was a new flower stall in Paulownia Mall. A small wooden cart with buckets of flowers, yellow and white and pink, and behind it a girl with light brown hair in a long braid tied with a big pink ribbon, humming." },
      { register: 'aerith' },
      { n: "Cloud stopped dead in the walkway when he saw her. Solar walked into his back." },
      { s: 'aerith', t: "Oh! Hello again. Want to buy a flower? They're only one gil." },
      { s: 'cloud', t: "...Aerith." },
      { s: 'aerith', t: "You remembered! I'm so flattered." },
      { n: "She smiled at him like the sun coming out, and then turned that smile on Solar, and Solar understood immediately and completely why Cloud had stopped walking." },
      { s: 'aerith', t: "And you must be the bodyguard's bodyguard. Somebody has to keep him out of trouble." },
      { choose: [
        { t: "It's a full-time job.", notes: 3, then: [{ s: 'aerith', t: "Oh, I know. I tried it for a while. He's exhausting. In a sweet way." }] },
        { t: "How do you know Cloud?", notes: 2, then: [{ s: 'aerith', t: "He fell through my church roof once. Into my flowers. We've been friends ever since." }] }
      ] },
      { n: "She sold flowers in the mall for two weeks. People bought them without knowing why. Cloud came by every day and stood near the cart, saying very little, and Aerith teased him, and he let her." },
      { n: "On the last day, before she faded, she pressed a yellow flower into Solar's hands." },
      { s: 'aerith', t: "Take care of him, okay? He's carrying so much. More than he knows." },
      { s: 'aerith', t: "And take care of you, too. You're carrying a lot as well. I can tell. It's in your shoulders." },
      { n: "Solar didn't know what to say. Aerith smiled and squeezed her hand and was gone by morning, and the cart was gone, and the only thing left in the walkway was one yellow petal." }
    ] },

    { after: '10/15', title: '7: the voice', place: 'Port Island · Back Streets · The Dark Hour', scene: [
      { n: "The green hour, and Cloud was on his knees in the middle of a street full of coffins with both hands pressed to his head." },
      { s: 'cloud', t: "He's here. He's talking. I can't make him stop." },
      { n: "Solar couldn't hear anything. Just the hum of the green hour, the silence where the city should be. But she could see Cloud hearing something, his whole body rigid, his eyes unfocused, his breath coming fast and shallow." },
      { s: 'cloud', t: "He says I'm a puppet. That I'm nothing. That none of my memories are real." },
      { choose: [
        { t: "Cloud. Look at me. What's my name?", notes: 3, then: [
          { s: 'cloud', t: '...' },
          { s: 'cloud', t: "...Solar." },
          { s: 'solar', t: "What's yours?" },
          { s: 'cloud', t: "...Cloud. Cloud Strife." },
          { n: "He said it like a rope he was pulling himself up. Hand over hand. Name over name." }
        ] },
        { t: "(Hold his face in your hands.)", notes: 3, then: [
          { n: "She knelt and took his face in both hands, and made him look at her, and didn't say anything at all. After a long time his eyes came back into focus. His breathing slowed." },
          { s: 'cloud', t: "...You're real. You're real, right?" },
          { s: 'solar', t: "I'm real." }
        ] }
      ] },
      { n: "The voice faded when the green did. Cloud sat on the curb in the ordinary night, sweating, shaking, and didn't let go of her hand for a long time." },
      { s: 'cloud', t: "...Every time he tells me I'm nothing, someone reminds me who I am. Tifa. Aerith. Now you." },
      { s: 'cloud', t: "I keep getting saved by people who don't owe me anything." }
    ] },

    { after: '11/5', title: '8: wall market', place: 'Paulownia Mall · Club Escapade', scene: [
      { n: "It started because Club Escapade was having a costume night, and the bouncer Cloud occasionally stood in for had challenged him to come as something nobody would expect, and Aphrodite, who happened to be passing, overheard." },
      { s: 'aphrodite', t: "Oh, I KNOW what nobody would expect." },
      { n: "Two hours later Cloud Strife was sitting in front of a vanity mirror in the dorm in a long violet dress, with his spiky hair arranged into something softer and a goddess of love doing his eyeliner with an expression of total, sacred concentration." },
      { s: 'cloud', t: "...I've done this before. I don't know when. But I've done this before." },
      { s: 'aphrodite', t: "Stop moving your face, darling, I'm creating a masterpiece." },
      { choose: [
        { t: "You look incredible, Cloud.", notes: 3, then: [
          { s: 'cloud', t: '...' },
          { s: 'cloud', t: "...Not interested." },
          { n: "But his ears were bright red under the wig, and he looked at himself in the mirror for a long moment with an odd, surprised expression, like he'd met someone he recognized." }
        ] },
        { t: "(Take a picture.)", notes: 2, then: [
          { s: 'cloud', t: "Solar. Delete it." },
          { n: "She did not delete it. Junpei, from the doorway, also took one. Cloud would spend the next week hunting Junpei through the dorm." }
        ] }
      ] },
      { n: "He won the costume contest. He did not smile once. He stood on the little stage at Club Escapade in the violet dress and accepted his prize, a gift card for the arcade, with the dignity of a king receiving tribute, and the whole club went wild." },
      { n: "On the walk home, still in the dress, heels in his hand, he said, very quietly, \"...That was kind of fun,\" and then looked like he wanted to take it back. She didn't let him." }
    ] },

    { after: '11/26', title: '9: who are you to me', place: 'Iwatodai Station · Platform', scene: [
      { n: "The station, at dusk, in late November. The same platform as the night he'd said I don't think I'm who I think I am. The trains came and went. He didn't seem to notice them." },
      { s: 'cloud', t: "I've been writing things down. Every morning. Names. Faces. So I don't lose them." },
      { s: 'cloud', t: "Yours is first on the list. Every day. I write it first so I'm sure it's there." },
      { s: 'cloud', t: "...I need to know what it means. Why it's first." },
      { route: [
        { t: "It means I love you, Cloud.", route: 'romance', notes: 3, then: [
          { s: 'cloud', t: '...' },
          { n: "He didn't say anything for a long time. A train came in and went out. Then he reached over and took her hand, carefully, like he'd been told for years that he wasn't the kind of person who got to do that." },
          { s: 'cloud', t: "...I'm not great at this. I don't remember if I've ever done it right." },
          { s: 'cloud', t: "But I'm sure about you. That's the one thing I'm sure about." }
        ] },
        { t: "It means I'm your friend. The one you can always find.", route: 'friend', notes: 3, then: [
          { s: 'cloud', t: "...The one I can always find." },
          { s: 'cloud', t: "Yeah. That's it. That's exactly what it is." },
          { n: "He let out a breath that seemed to go on forever. Like someone setting down a sword they'd been carrying since before they could remember." }
        ] }
      ] }
    ] },

    { after: '12/17', title: '10: materia', place: 'Iwatodai Station · Taxi Stand', scene: [
      { n: "December. Snow on the taxi stand. The same pillar where she'd first found him, with his cardboard sign and his door-sized sword. The sign was gone now. He didn't need it. Half of Iwatodai knew who to call when something needed lifting, or finding, or scaring off." },
      { n: "He held out his hand. In his palm was a glass sphere the size of a marble, glowing faintly green, warm, alive somehow, like it had a heartbeat." },
      { s: 'cloud', t: "Materia. Restore. It heals. I've had it for... I don't remember how long. A long time." },
      { s: 'cloud', t: "I want you to have it. In case I'm not around next time something hurts." },
      { ifRoute: 'friend', then: [
        { choose: [
          { t: "I'll keep it close. Always.", notes: 3, then: [{ s: 'cloud', t: "Good. That's... good." }] },
          { t: "What happened to 'not interested'?", notes: 3, then: [{ s: 'cloud', t: "...I lied. Don't tell anyone." }] }
        ] },
        { n: "They stood at the taxi stand in the snow and watched the trains come in. When she left, he said, \"See you, Solar,\" like he was making sure. Like he was writing it down." }
      ] },
      { ifRoute: 'romance', then: [
        { s: 'cloud', t: "And because... I don't know how to say things. So I'm giving you something I'd never give anyone. That's how you'll know." },
        { choose: [
          { t: "I know, Cloud. I always knew.", notes: 3, then: [
            { s: 'cloud', t: '...' },
            { n: "He kissed her at the taxi stand in the snow, quickly, awkwardly, like someone doing it for the first time and absolutely refusing to let that stop him." },
            { s: 'cloud', t: "...Writing that down too." }
          ] },
          { t: "(Kiss him.)", notes: 3, then: [
            { s: 'cloud', t: '...!' },
            { s: 'cloud', t: "...Okay. I'm definitely interested." }
          ] }
        ] },
        { n: "The materia glowed in her coat pocket all the way home, warm as a hand." }
      ] }
    ] }
  ]
});
