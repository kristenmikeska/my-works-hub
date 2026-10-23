/* Ann Takamaki · Lovers. Revamp social link data (femc-game.html). Format: link fields in assets/femc/game/core.js, scene lines in scene.js.
   Cast-only speakers: boy, vendor, shopgirl (no portraits). Persona-world cast (kind 'persona', Kat's ruling 2026-10-20): a
   model based in Tokyo whose jobs keep bringing her through Port Island, her friends a train ride and a text away. Side romance (route
   choice at rank 9). She stays all year: no `closes`; afterMax: 3 ordinary scenes with her; christmas: 12/24.
   Holidays and reactive texts: data/living-persona.js. */
(window.FEMC_GAME_LINKS ||= []).push({
  id: 'ann', name: 'Ann Takamaki', short: 'Ann', arcana: 'Lovers', numeral: 'VI', from: 'Persona 5',
  kind: 'persona',
  romance: 'side',
  starts: '4/24',
  home: { area: 'Paulownia Mall', spot: 'Fountain', slot: 'after', days: [0, 3, 5, 6],
          hint: 'After school on Wednesdays and Fridays, and in the daytime on weekends, by the fountain at Paulownia Mall.' },
  approach: "On the rim of the fountain at Paulownia Mall, a blonde girl in a red jacket is frowning at a half-eaten crepe like it has personally let her down.",
  cast: { boy: 'Boy from the Arcade', vendor: 'Sweets Vendor', shopgirl: 'Shop Assistant', ryuji: 'Ryuji' }, // ryuji: her 9/22 holiday (living-persona.js)
  invite: {
    ask: [
      "SOLAR. are u free?? i found a parfait the size of my head",
      "help. i'm at the mall and everything is cute and i have zero self control",
      "fountain?? i'm bored and the pigeons are judging me",
      "r u busy!! there's a new crepe flavor and i'm scared of it alone",
      "come hang!!! i'm buying. modeling money ✨",
      "ok hear me out. sweets. u. me. now ♡"
    ],
    ok: ["YAY!! fountain, 10 min ♡", "omg yes. hurry hurry", "best. ur the best."],
    no: ["nooo ok. next time!!", "boo. fine. i'll eat ur share", "ok!! rest up ♡"]
  },
  hangouts: [
    [
      { n: "Ann had decided, somewhere between the escalator and the third shop window, that Solar owned exactly one outfit and it was a school uniform, and that this was a tragedy, and that she personally was going to do something about it." },
      { n: "She held things up against Solar's front with her head tilted and her eyes narrowed, a cardigan, a skirt, a coat the color of a ripe plum, and put each one back with a small decisive noise, like a doctor ruling things out." },
      { s: 'ann', f: 'serious', t: "No. No. Oh, absolutely not, who even made that. Okay, wait. Wait. Hold still." },
      { choose: [
        { t: "(Hold still and let her work.)", notes: 3, then: [
          { n: "Solar held still, and Ann draped a soft gray sweater over her shoulders and pushed the sleeves up her arms and stepped back and went quiet for a second, really quiet, which Solar had learned by now was the most dangerous thing Ann could do." },
          { s: 'ann', f: 'happy', t: "...Oh. Oh, that's YOU. That's so you it's annoying." }
        ] },
        { t: "What's wrong with the uniform?", notes: 2, then: [
          { s: 'ann', f: 'neutral', t: "Nothing! It's a great uniform! It's just somebody else's idea of you. You should have at least one thing that's your idea." }
        ] },
        { t: "I don't really care what I wear.", notes: 1, then: [
          { s: 'ann', f: 'flustered', t: "Everybody cares. Some people just care about looking like they don't. That's a whole look, Solar. I know that look." }
        ] }
      ] },
      { n: "She didn't buy anything. Neither of them did. But at the escalator Ann turned around and looked back at the gray sweater in the window, and then at Solar, like she was filing the two of them together somewhere for later, and grinned." }
    ],
    [
      { n: "The parfait at Chagall Café came in a glass as tall as Ann's forearm, layered like a geology lesson, cornflakes and custard and strawberries and cream and a wafer stuck in the top like a flag on a conquered mountain, and Ann looked at it the way some people look at the sea." },
      { s: 'ann', f: 'happy', t: "Okay. Two spoons. That's the rule. If you only get one spoon it's a dessert. Two spoons, it's an event." },
      { n: "She ate from the top down with total commitment, and talked the whole time with her spoon, pointing it, waving it, at one point using it to illustrate the exact angle at which a crepe should be folded, and Solar mostly watched, because Ann eating something she loved was its own kind of weather." },
      { choose: [
        { t: "(Go straight for the strawberry she's been saving.)", notes: 3, then: [
          { s: 'ann', f: 'surprised', t: "SOLAR." },
          { s: 'ann', f: 'happy', t: "Oh my god. Okay. Okay, respect. Nobody's ever had the nerve. You're never allowed to do that again, but respect." }
        ] },
        { t: "How do you eat like this and model?", notes: 1, then: [
          { s: 'ann', f: 'serious', t: "Very carefully and with no regrets. Next question." },
          { n: "She took a bigger spoonful than before, on purpose, looking Solar dead in the eye." }
        ] },
        { t: "You're happier with that than with anything I've seen.", notes: 2, then: [
          { s: 'ann', f: 'blushing', t: "...It's a really good parfait, okay." }
        ] }
      ] },
      { n: "At the bottom there was a last layer of cornflakes gone soft in the custard, and Ann scraped up every bit of it, and set the spoon down in the empty glass with a little ring, and sighed the way people sigh at the end of a very good book." }
    ],
    [
      { n: "The mall at closing had a particular quiet to it, shutters coming down one at a time with a long tin rattle, the lights in the far corridor going off in sections, the floor freshly mopped and shining, so that the whole long walkway past the dark shop windows looked like a runway, which, Ann announced, it now was." },
      { s: 'ann', f: 'serious', t: "Okay. Walk to the end and back. Don't think about it. Just walk like you're going somewhere." },
      { n: "Solar walked to the end and back. Ann watched with her arms folded and her head tilted, the way she looked at clothes." },
      { s: 'ann', f: 'neutral', t: "Huh. You walk like you're already leaving. Like you're going somewhere, but mostly you're going away from here. You look at every door you pass. Did you know that?" },
      { choose: [
        { t: "(Walk it again. Don't look at the doors.)", notes: 3, then: [
          { n: "Solar walked it again, and didn't look at the doors, which was harder than it had any right to be, the exits pulling at the corners of her eyes like hooks. She looked at Ann instead, at the end of the corridor, the whole way, and when she got there Ann was grinning." },
          { s: 'ann', f: 'happy', t: "THAT. That's a walk. You walked like you were arriving." }
        ] },
        { t: "Show me how you do it.", notes: 2, then: [
          { n: "Ann went to the far end and turned and came back, and it was a different person walking, long and loose and certain, her face gone smooth and far away, and halfway down she stopped, and laughed, and did the rest of it like a penguin." },
          { s: 'ann', f: 'happy', t: "That's the work one. This is the real one. The real one's better. Nobody pays for it." }
        ] },
        { t: "I didn't know that.", notes: 1, then: [
          { s: 'ann', f: 'neutral', t: "Nobody ever does. I only know because I used to do it. Every room. Where's the way out, where's the way out." }
        ] }
      ] },
      { n: "A security guard with a ring of keys watched them from the far end with the patience of a man who had seen worse at closing. Ann bowed to him, very properly. He bowed back, gravely, and turned off the last of the lights, and they walked out together into the cold, and Solar didn't count the doors on the way, or not many." }
    ]
  ],
  ranks: [
    { after: '4/24', title: '1: new in town', place: 'Paulownia Mall · Fountain', scene: [
      { music: 'city' },
      { n: "Paulownia Mall on a Friday after school was all noise and glass, the arcade chiming from one end and a bakery breathing warm sugar out of the other, and the fountain in the middle throwing up its tired little plumes of water while the April wind came in through the doors every time somebody opened them and tried to get at the spray." },
      { n: "There was a girl sitting on the rim of the fountain. Solar noticed her first because everyone else had, a whole slow current of people drifting past and turning their heads, and three boys by the arcade entrance standing in front of a claw machine they had very clearly stopped playing." },
      { n: "She had blonde hair in two high pigtails and a red jacket and long legs crossed at the ankle, and the kind of face that made people forget for a second what they'd been walking toward. She was eating a crepe. She was eating it with an expression of deep, personal betrayal." },
      { n: "Solar was cutting past the fountain on her way to the escalators. The girl looked up as she passed, and looked straight at her, and did not look away." },
      { s: 'ann', f: 'serious', t: "Excuse me! Hi. Sorry. Is this the best crepe in this whole city? Be honest. I can take it." },
      { choose: [
        { t: "I've been here two weeks. I don't know where anything is.", notes: 3, then: [
          { s: 'ann', f: 'surprised', t: "Wait. Really? Me too! Well, one week. Oh my god." },
          { s: 'ann', f: 'happy', t: "Okay. So we're both lost. That's so much better than just me being lost." }
        ] },
        { t: "(Look at the crepe seriously before answering.)", notes: 2, then: [
          { n: "Solar bent and looked at the crepe the way you'd look at a used car. The cream had gone flat. The strawberries were pale and sad and cut too thick." },
          { s: 'solar', f: 'neutral', t: "The cream's gone flat." },
          { s: 'ann', f: 'happy', t: "THANK you. Finally. A witness." }
        ] },
        { t: "It looks fine.", notes: 1, then: [
          { s: 'ann', f: 'neutral', t: "It is fine. That's the problem. A crepe shouldn't be fine. A crepe should change your life a little bit." }
        ] }
      ] },
      { n: "The girl scooted over on the rim of the fountain and patted the stone beside her, and Solar, who had a whole philosophy about not stopping for people at fountains, stopped and sat. The stone was cool and a little damp. The spray came over now and then on the wind, fine as breath." },
      { s: 'ann', f: 'happy', t: "I'm Ann. Ann Takamaki. I'm here for work, kind of. I model. Part-time, magazines mostly, nothing fancy. My agency sends me wherever the jobs are, and lately the jobs keep being here. I'm from Tokyo. It's like an hour, but it's a whole different hour." },
      { register: 'ann' },
      { s: 'ann', f: 'neutral', t: "They always put me up at the same hotel by the station. Same room, practically. My window looks right into a parking garage. It's very glamorous. I watch a guy in a gray car eat his lunch every day at one." },
      { s: 'solar', f: 'neutral', t: "Solar." },
      { s: 'ann', f: 'neutral', t: "Solar what?" },
      { s: 'solar', f: 'neutral', t: "Just Solar." },
      { s: 'ann', f: 'happy', t: "Ooh. Like a stage name. I love that. I should've done that. Nobody can spell Takamaki." },
      { n: "It was the first time anybody had heard it and been delighted instead of careful, and Solar didn't know what to do with her face, so she looked at the fountain." },
      { n: "One of the three boys had finally worked up the nerve. He came over with his hands in his pockets and his friends shoving at each other behind him, and stopped in front of Ann and didn't look at Solar at all." },
      { s: 'boy', t: "Um. Hey. Are you, like, a model? Can I get a picture? With you? Just one." },
      { n: "Solar watched it happen. Ann's smile came on like a shop sign, bright and level and exactly the right size, and her chin lifted a fraction, and something behind her eyes went and stood very quietly at the back of a room. Solar knew that. She knew it from somewhere under her own skin, the precise weight of a smile you put on so nobody can get to the face underneath, and it went through her like cold water down the spine." },
      { choose: [
        { t: "She's busy. We're discussing crepes.", notes: 3, then: [
          { n: "The boy looked at Solar for the first time, startled, as if the fountain had spoken, and then at Ann, who had turned her head to look at Solar too, and then back at his friends, and retreated in good order." },
          { s: 'ann', f: 'happy', t: "Oh my god. \"We're discussing crepes.\" I'm stealing that. I'm using that forever." }
        ] },
        { t: "(Wait and see what she does.)", notes: 2, then: [
          { s: 'ann', f: 'happy', t: "No pictures, sorry! Have a good one!" },
          { n: "It was so bright and so final that the boy was three steps away before he'd understood he'd been dismissed. The second he was gone the smile went off like a switch, and Ann let her head drop back and groaned at the skylight." }
        ] },
        { t: "You should let him. It's flattering.", notes: 0, then: [
          { n: "Ann's smile stayed exactly where it was, which was how Solar knew she'd gotten it wrong." },
          { s: 'ann', f: 'neutral', t: "...Yeah. Super flattering." }
        ] }
      ] },
      { s: 'ann', f: 'sad', t: "It's always the hair. Or the face. Nobody ever walks over and asks what I think about anything." },
      { s: 'ann', f: 'neutral', t: "And I have so many opinions. About crepes, especially." },
      { choose: [
        { t: "So tell me. What do you think about crepes?", notes: 3, then: [
          { n: "Ann turned all the way around on the rim of the fountain to face her, one knee up, and lit, like someone had found the switch, and told her. Batter thickness. The sin of pre-made cream. A stand near her school back home that put a whole slice of cheesecake inside, which was cheating, and which she respected." },
          { s: 'ann', f: 'happy', t: "My best friend and I used to rank every crepe place near school. We had a notebook. She had very strict rules. You lost a whole point for soggy." },
          { n: "Used to. Solar heard the small catch in it, the place where the sentence went somewhere and came back on its own. She didn't ask. She'd always hated being asked." }
        ] },
        { t: "Want to go find a better one?", notes: 2, then: [
          { s: 'ann', f: 'happy', t: "Yes. Obviously. Next time, though. I have a shoot in the morning, and if I eat two crepes in one day my stylist will actually kill me." }
        ] }
      ] },
      { n: "When Solar got up to go, Ann held out her hand, palm up, and wiggled her fingers, and it took Solar a second to understand she meant the phone. The phone was new. It had almost nobody in it. Ann typed herself in with two quick thumbs and handed it back, and the new contact said Ann ♡ (crepe consultant)." },
      { s: 'ann', f: 'happy', t: "Text me if you find a good one. Or a bad one. Mostly a good one. Bye, Just Solar!" }
    ] },

    { after: '5/5', title: '2: carp streamers', place: 'Paulownia Mall · Central Atrium', scene: [
      { phone: [
        { from: 'ann', t: "SOLAR. are u free. i'm at the mall. i have been a mannequin for 6 hours and i need a human" },
        { from: 'solar', t: "Fountain?" },
        { from: 'ann', t: "atrium!!! bring nothing. i'm buying" }
      ], contact: 'Ann' },
      { music: 'sun' },
      { n: "It was Children's Day, the tail end of Golden Week, and somebody had strung carp streamers across the whole height of the atrium, red and black and blue, a dozen fabric fish as long as cars swimming in the air conditioning with their mouths open. The mall was full of families and strollers and small boys running in circles under the fish with their arms out, and the sun came down through the skylight in long dusty columns and lit everything a little gold." },
      { n: "Ann was standing under the biggest carp in a pale yellow sundress that somebody else had very clearly chosen, with her hair curled into soft bouncing waves by somebody else's hands, and her face done in a way that was very pretty and not very much like her face." },
      { s: 'ann', f: 'flustered', t: "Don't look at me. I look like a wedding cake." },
      { choose: [
        { t: "You look like someone else's idea of you.", notes: 3, then: [
          { s: 'ann', f: 'surprised', t: "...Yeah. Yeah, that's exactly it." },
          { n: "She dug in her bag and came out with a packet of makeup wipes and scrubbed off the lipstick right there under the carp, hard, the way you'd scrub off a stamp somebody had put on your hand at a club, and looked at Solar with her mouth pink and raw and her own again." }
        ] },
        { t: "(Hand her a tissue.)", notes: 2, then: [
          { n: "Ann took it without a word and wiped off the lipstick, and then a little of the blush, and then stopped, and looked at the tissue, and laughed." },
          { s: 'ann', f: 'happy', t: "Okay. You get it. That's annoying. Nobody gets it." }
        ] },
        { t: "You look nice.", notes: 1, then: [
          { s: 'ann', f: 'neutral', t: "I know I look nice. I look nice for six hours on purpose. It's my job." },
          { s: 'ann', f: 'sad', t: "...Sorry. That came out mean. Thank you." }
        ] }
      ] },
      { n: "There was a sweets stall set up for the holiday under the escalators, an old man and a long tray of kashiwa-mochi, the white rice cakes folded around sweet bean paste and wrapped in an oak leaf. Ann bought six. She said two were for Solar and four were for emotional reasons." },
      { s: 'vendor', t: "For the children, eh? Happy Children's Day." },
      { s: 'ann', f: 'happy', t: "We're children! Technically! Thank you!" },
      { n: "They sat on the edge of a big planter with the carp drifting overhead and peeled the leaves off, and the mochi was soft and faintly sweet and smelled green from the oak, and Ann ate hers in two bites each and talked between them." },
      { s: 'ann', f: 'serious', t: "The photographer called me \"the face\" all day. Not Ann. Not even Takamaki. \"Can we get the face over by the window. Can the face look less tired.\" Like I came in a box." },
      { s: 'ann', f: 'neutral', t: "I'm a person. I have opinions. I'm actually really smart. I'm terrible at math, but I'm smart." },
      { s: 'ann', f: 'sad', t: "My parents are designers, so I kind of grew up being a coat hanger. They're overseas. They're always overseas. I thought modeling would be different because at least it's mine. It's mostly the same." },
      { s: 'ann', f: 'happy', t: "My friends back home would have lost it at that guy. One of them would've just yelled at him. Like, at the top of his lungs. One would've given him a look so scary he'd apologize to his own camera." },
      { s: 'ann', f: 'neutral', t: "And one would've just stood there really quietly until the guy started feeling bad about his whole life. That one's the worst. He's my favorite." },
      { choose: [
        { t: "They sound like your people.", notes: 3, then: [
          { s: 'ann', f: 'happy', t: "They are. They're totally my people." },
          { n: "She said it simply, and then she went quiet for a second, turning a peeled oak leaf over in her fingers, glossy side and dull side, glossy side and dull." },
          { s: 'ann', f: 'neutral', t: "I never had people before. Not like that. It's kind of the best thing that ever happened to me. Isn't that dumb? A bunch of idiots." }
        ] },
        { t: "Do you miss them?", notes: 2, then: [
          { s: 'ann', f: 'neutral', t: "...It's been, like, two weeks. I'm being dramatic." },
          { n: "She pulled the sleeve of the cardigan over her hand, the one the stylist had given her, which was too big, and held the cuff in her fist, and didn't say anything else for a while." }
        ] },
        { t: "You don't need anyone to fight for you.", notes: 1, then: [
          { s: 'ann', f: 'serious', t: "I know. That's not why I like them." }
        ] }
      ] },
      { n: "On the way out there was a little stall selling paper carp streamers for children, small ones on bamboo sticks, a red one and a black one and a tiny blue baby one. Ann bought the red one and handed it to Solar with great ceremony." },
      { s: 'ann', f: 'happy', t: "For your room. Everyone needs a fish." },
      { n: "Solar carried it home on the monorail sticking up out of her bag, where it caught the wind off the bay through the open vent and swam, and a little boy across the aisle watched it the whole way, and that night she stuck it in a cup on her desk. It was, she realized, looking at it in the lamplight, one of the only things in that room that somebody had chosen for her on purpose." }
    ] },

    { after: '5/16', title: '3: spring', place: 'Paulownia Mall · Photo Booth', scene: [
      { n: "Mid-May, and the weather couldn't make up its mind, warm and close one minute and spitting rain the next, and the mall had that damp Saturday smell of umbrellas and popcorn from the cinema. Ann met her at the fountain and took her by the wrist without saying hello and towed her straight to the photo booth, the way you'd tow a friend who'd been dodging the dentist." },
      { s: 'ann', f: 'happy', t: "You've never done one of these properly. I can tell. You have the face of a person who's never done one of these properly." },
      { n: "The booth was pink and very small, with a curtain and a bench and a screen with a cartoon bear on it who counted down in a voice like a kettle. Ann knew where every light was. She knew which way to tilt her chin and where the good side of the bench was, and she set Solar's shoulders with both hands like she was arranging flowers." },
      { s: 'ann', f: 'neutral', t: "Okay. Don't look at the camera like it's going to arrest you. Look at it like it owes you money." },
      { choose: [
        { t: "(Do exactly the pose she does.)", notes: 3, then: [
          { n: "Solar copied her exactly, the tilt, the hand, the little sideways look, perfectly and completely deadpan, and Ann glanced over to check and saw her doing it and had to bite the inside of her cheek." },
          { s: 'ann', f: 'happy', t: "You're a natural. That's so offensive. Do it again." }
        ] },
        { t: "(Glare at it like it owes you money.)", notes: 2, then: [
          { n: "Solar glared at it like it owed her money, and her interest, and Ann looked at the preview on the screen and made a noise like she'd been punched." },
          { s: 'ann', f: 'happy', t: "Oh my god. You're terrifying. I love it. Do it again." }
        ] },
        { t: "Can I just stand behind you?", notes: 1, then: [
          { s: 'ann', f: 'serious', t: "No! Absolutely not. Nobody stands behind anybody in my booth." },
          { n: "She pulled Solar down onto the bench beside her by the sleeve, and they bumped shoulders, and stayed bumped." }
        ] }
      ] },
      { n: "On the third frame the bear said its line in its kettle voice, and Ann said the bear in exactly the same voice half a second behind it, and Solar laughed, actually laughed, out loud and helpless, and the flash caught her mid-laugh with her face turned toward Ann, unguarded, like she'd forgotten there was a camera at all." },
      { n: "On the last frame Ann leaned her head against Solar's, temple to temple, quick and easy, like it was nothing, and she smelled like vanilla and rain and the sugar from somewhere, and Solar forgot for one full second what her own face was doing. The bear said wonderful. The flash went off. Ann sat back like nothing had happened, because nothing had." },
      { n: "The strip came out of the slot still warm. Ann held it up to the light, and then she took out her phone to take a picture of it, for her friends back home, she said, they'd never believe she'd found someone who'd sit through the full four frames." },
      { n: "Solar looked at the phone, and kept looking." },
      { n: "It was thin. That was the first thing, and for a second it was the only thing. A flat dark pane no thicker than a few coins stacked together, no keys, no hinge, all one smooth face of glass, and when Ann touched it the whole face lit up at once like a window with someone home. Everyone Solar knew had a phone that folded. Yukari's had a charm on it. Junpei's had a crack across the little outer screen that he refused to fix. Solar's own clicked shut like a compact." },
      { n: "Ann's didn't fold. It didn't look like it had ever needed to. Something cold went slowly down the backs of Solar's arms, and she could not have said why, not if someone had asked her, not for anything. It was a phone. It was probably foreign. Ann's parents lived abroad. It was a phone." },
      { n: "And a week ago, after, on the monorail platform, in the green, there had been a girl standing where nobody should have been standing at all, and something in her hand had been lit up like this, and when Solar looked back she was gone. Solar had told herself it was the hour. She'd told herself a lot of things that night." },
      { s: 'solar', f: 'neutral', t: "Ann." },
      { s: 'ann', f: 'neutral', t: "Hm?" },
      { n: "The question came up Solar's throat whole, last Saturday, late, were you, and stopped behind her teeth, because there was no way to finish it that didn't open a door she wasn't allowed to open, and because Ann was looking at her with the photo strip in one hand and nothing on her face but waiting." },
      { choose: [
        { t: "...Can I see the picture?", notes: 3, then: [
          { s: 'ann', f: 'happy', t: "Duh. Look. Look at you in the third one. You're laughing. Do you ever do that? I don't think you ever do that." },
          { n: "Solar looked at the picture instead of the phone. Two girls on a pink bench, one of them laughing with her head thrown back and the other one looking at her. They looked like friends. They looked like they'd been friends for a while." }
        ] },
        { t: "...Where'd you get your phone?", notes: 2, then: [
          { s: 'ann', f: 'neutral', t: "This? Back home. Why, do you want one? Don't. The battery dies if you look at it funny." },
          { n: "She tucked it in her jacket and that was all, and it was a phone, and Solar let it be one." }
        ] },
        { t: "...Nothing. Never mind.", notes: 1, then: [
          { s: 'ann', f: 'serious', t: "That's the most suspicious nothing I've ever heard in my life." },
          { n: "But she let it go, and slid the phone back into her pocket, and Solar let it go too, or let it sit somewhere at the bottom of her where she didn't have to look at it." }
        ] }
      ] },
      { place: 'Paulownia Mall · Fountain' },
      { n: "They sat on the rim of the fountain, where they'd met. Outside the big glass doors the trees along the street had gone fully green, the cherry blossoms a month gone, and nobody looked at those trees anymore. Ann cut the photo strip down the middle with her nail very carefully, two frames each." },
      { s: 'ann', f: 'neutral', t: "Can I tell you something dumb?" },
      { s: 'ann', f: 'sad', t: "I hate spring. Everyone loves it and I hate it. Everybody leaves in spring. Graduations, new schools, people moving. It's like the whole world decided that's the season for endings." },
      { s: 'ann', f: 'sad', t: "Back home, my friends and I had this year. This stupid, amazing year. The best one I've ever had. And it has an end date. In spring everyone goes back to wherever they came from, and it turns into a story we tell at reunions." },
      { s: 'ann', f: 'neutral', t: "I keep thinking if I just don't look at the calendar, it can't get there." },
      { n: "Solar's hands had gone tight in her lap, and she didn't know when. End date. It went into her like a splinter goes in, small and exact and not hurting yet, just there, and she looked down at the two little photos in her palm so she wouldn't have to look at anything else." },
      { choose: [
        { t: "Then don't look at it. Not today.", notes: 3, then: [
          { s: 'ann', f: 'surprised', t: "..." },
          { s: 'ann', f: 'happy', t: "Okay. Not today." },
          { n: "She bumped her shoulder against Solar's and left it there, and the fountain threw up its tired plumes, and the spray came over them on the draft from the doors, fine as breath, and neither of them moved." }
        ] },
        { t: "It doesn't stop being real just because it ends.", notes: 2, then: [
          { s: 'ann', f: 'neutral', t: "That's what everyone says. That's what you say about things that are already over." },
          { s: 'ann', f: 'sad', t: "...But thanks. I know you mean it." }
        ] },
        { t: "You'll make new friends.", notes: 1, then: [
          { s: 'ann', f: 'serious', t: "I don't want new ones. I want those ones. Is that so much to ask?" }
        ] }
      ] },
      { s: 'ann', f: 'happy', t: "Here. You keep these two. The one where you're laughing. You never do that. I want there to be proof." },
      { n: "Solar put it in her handbook between two pages, where it would stay flat. On the monorail home she took it out once and looked at it, at her own face turned toward Ann in the third frame, open in a way she didn't recognize, and put it back, and didn't look at it again until she was alone." }
    ] },

    { after: '5/28', title: '4: sending', place: 'Paulownia Mall · Chagall Café', time: 'After School', scene: [
      { music: 'city' },
      { n: "The end of May came in wet and close, not raining yet but thinking about it, the kind of afternoon where the air sat on your skin like a damp towel and every umbrella in the mall had been carried in folded and would be carried out folded, just in case. Chagall Café had its doors propped open for a breeze that wasn't coming. It smelled like burnt sugar and the coffee nobody could name, and Ann had claimed the corner table with a brand-new notebook squared in front of her like a contract." },
      { n: "It was pink. It had a cartoon strawberry on the cover wearing sunglasses. On the first page, in round, determined handwriting, she had written IWATODAI CREPE INDEX, and underlined it twice, and then underneath, smaller, OFFICIAL." },
      { s: 'ann', f: 'serious', t: "Okay. So back home we had a system, but that was a different city with different crepes, and you can't just bring a system somewhere new and make it fit. We need new rules." },
      { s: 'ann', f: 'happy', t: "I'll go first. Whipped cream from a can is minus two. Not minus one. Two. Your turn. Give me a rule." },
      { choose: [
        { t: "Points off if it's pretty and tastes like nothing.", notes: 3, then: [
          { s: 'ann', f: 'surprised', t: "Oh, that's personal." },
          { s: 'ann', f: 'happy', t: "I love it. That's going in. That's rule two." },
          { n: "She wrote it down in big letters, and then, in the margin beside it, very small, drew a crepe with a smug little face, which Solar decided not to ask about." }
        ] },
        { t: "(Draw a scale of strawberries down the margin, one to five.)", notes: 2, then: [
          { n: "Solar took the pen and drew five strawberries in a column down the side of the page, each one slightly worse than the last, the fifth mostly a triangle with ambitions. Ann looked at it for a long moment." },
          { s: 'ann', f: 'happy', t: "The fifth one's having a really hard time. I love him. He stays." }
        ] },
        { t: "Isn't it just good or bad?", notes: 1, then: [
          { s: 'ann', f: 'serious', t: "Solar. No. That's how people end up eating fine crepes their whole lives." }
        ] }
      ] },
      { n: "They were three rules in, and arguing about whether banana counted as a fruit or a texture, when Solar heard her own name from the next table. Not her name, exactly. The shape around it." },
      { n: "Two girls in Gekkoukan uniforms, second-years by their ribbons, leaning in over a shared slice of cake with the particular hush people use when they'd like to be overheard. The transfer. The one with no surname. Lives in that dorm by the station with the boys, and Kirijo-senpai, and nobody knows where she's from, and she was marked absent on the very first day, isn't that weird, like somebody knew she wasn't coming." },
      { n: "Solar kept her eyes on the notebook. None of it was new. It had followed her down the hallways since April like a draft under a door, and she'd done with it what she always did, which was nothing, which was let it go past the way you'd let a train go past that wasn't yours." },
      { n: "Ann had stopped writing. She was holding the pen very still an inch above the page, and the brightness had gone out of her face, not off like a switch but down, the way a stove goes down, until only the blue part was left." },
      { s: 'ann', f: 'serious', t: "Do you want me to say something?" },
      { choose: [
        { t: "...Yes.", notes: 3, then: [
          { n: "It came out before Solar had decided to say it, small and a little rusty, like a door that didn't get opened much, and Ann looked at her for one second with something on her face Solar couldn't read, and then smiled, and it wasn't the shop-sign smile at all." },
          { s: 'ann', f: 'happy', t: "Okay. Thank you for asking me to. That's actually really important to me." }
        ] },
        { t: "I'm used to it.", notes: 2, then: [
          { s: 'ann', f: 'sad', t: "That's the worst thing you've ever said to me, and you once told me a crepe looked fine." },
          { n: "She put the pen down." }
        ] },
        { t: "It's not worth it.", notes: 1, then: [
          { s: 'ann', f: 'serious', t: "You are, though." },
          { n: "She said it like she was correcting somebody's math, flat and certain, and put the pen down." }
        ] }
      ] },
      { n: "Ann got up and went over and pulled out the empty third chair at their table and sat in it backwards, arms folded across the top, all legs and pigtails and red jacket, and smiled at them. It was a dazzling smile. Solar had seen her use it on photographers. It had never once been friendly." },
      { s: 'ann', f: 'happy', t: "Hi! Sorry. You were talking about my friend, so I figured I'd come help, because you've got, like, all of it wrong." },
      { s: 'ann', f: 'neutral', t: "She lives in a dorm because the school put her in a dorm. That's called being a student. She's the funniest person I've met in this whole city, and I've never once heard her say a mean thing about anybody behind their back, which, wow, I guess is rare around here. And she has a surname. She just doesn't owe it to you." },
      { s: 'ann', f: 'happy', t: "Okay! That's all. Enjoy your cake. It looks fine." },
      { n: "The two girls looked at each other, and at the cake, which did look fine, and then very quietly paid and left, and one of them glanced back at Solar from the door with an expression that was almost, if you squinted, an apology." },
      { n: "Ann came back and sat down and picked up the pen, and her hand was shaking, a fine fast tremor Solar recognized from her own hands on the monorail platform, and she held the pen harder until it stopped." },
      { s: 'ann', f: 'neutral', t: "Sorry. I know you can take care of yourself. I just hate that. I hate it so much I can't sit still." },
      { s: 'ann', f: 'sad', t: "There was a rumor about me, at my school. Me and a teacher. All year. Everybody knew it and none of it was true, and he started half of it himself. And I let it go, because I thought if I fought it, it'd get bigger." },
      { s: 'ann', f: 'sad', t: "It got bigger anyway. It got somebody I love." },
      { n: "She didn't say who. She looked at the strawberry in its sunglasses instead, and the corner of her mouth went down and then came back up, by force." },
      { s: 'ann', f: 'serious', t: "So I don't let things go anymore. That's my new thing. It's very annoying. Everyone back home hates it." },
      { choose: [
        { t: "(Slide the rest of your cake across the table to her.)", notes: 3, then: [
          { n: "Solar pushed the plate over, the last third of a strawberry shortcake she'd been saving for no reason she could name. Ann looked at it, and at her, and laughed, wet at the edges, and ate it in two bites." },
          { s: 'ann', f: 'happy', t: "That's the nicest thing anybody's done for me in this city. It's going in the index. Solar's cake. Five strawberries. Even the sad one." }
        ] },
        { t: "You're scarier than you look.", notes: 2, then: [
          { s: 'ann', f: 'happy', t: "Thank you. I work really hard at it." }
        ] },
        { t: "Who did it get?", notes: 1, then: [
          { s: 'ann', f: 'sad', t: "...My best friend." },
          { s: 'ann', f: 'neutral', t: "Another day, okay? Not with a strawberry in sunglasses looking at me." }
        ] }
      ] },
      { n: "Before they left she took a picture of the first page with her phone, rules and strawberries and all, for her friends back home, so they'd know she hadn't been replaced, only supplemented, and tapped out a message with both thumbs and sent it and set the phone face up on the table between them while she finished her drink." },
      { n: "It buzzed before she'd got the straw back in her mouth. Then again. Then three times in a row, hard enough that it walked itself an inch across the table toward the sugar, and Ann looked at the screen and laughed milk tea up her nose." },
      { s: 'ann', f: 'happy', t: "Oh my god. Okay. One of them says the strawberry in sunglasses is plagiarism. One says canned cream is a human right and she's reporting me. And one just sent a picture of a cat, which means he's offended." },
      { choose: [
        { t: "...They answered that fast?", notes: 3, then: [
          { n: "Ann scrolled up with her thumb to show her, and Solar watched a long column of messages slide past, pictures of crepes and carp streamers and the fountain and a pink photo strip, and under every one of them, inside a minute or two, somebody answering. Capital letters. Exclamation points. A great many cats." },
          { s: 'ann', f: 'happy', t: "They always answer. Even at three in the morning, when I'm just sending a picture of a vending machine. It's kind of their whole thing." },
          { n: "She said it easily, like a fact about the weather, and tucked the phone into her jacket, and Solar sat with the strange small ache of hearing it, a whole city's worth of people on the other end of a line who picked up at three in the morning, and didn't know why it should ache, and said nothing, like she always did." }
        ] },
        { t: "Tell them I wrote rule two.", notes: 2, then: [
          { s: 'ann', f: 'happy', t: "Already did. Look. \"who is SOLAR.\" \"why does solar get a rule.\" \"is solar a crepe.\" They're very smart. You'd hate them. You'd love them." },
          { n: "Solar looked at her own name in somebody else's capital letters on a small bright screen, typed an hour up the line by people who had never seen her face, and something went warm under her ribs that she didn't have a name for yet, and she looked at the strawberry instead." }
        ] },
        { t: "(Don't look at it. Look at the strawberry.)", notes: 1, then: [
          { n: "Solar looked at the strawberry in sunglasses while the phone went on buzzing in Ann's pocket. It didn't help. She didn't know what she'd wanted it to help with. When she closed her eyes on the monorail later she could still hear it, somebody far off, answering." }
        ] }
      ] },
      { n: "Outside the rain had finally decided, and came down warm and straight on the mall's glass roof like someone drumming their fingers on a table. Ann put up an umbrella the color of a ripe tomato and held it over both of them all the way to the monorail, though it only really covered one, and talked the whole way about rule four. Solar walked on the wet side. She thought about a phone that buzzed itself across a table, and people an hour up the line who answered at three in the morning, and her own phone in her pocket, folded shut and quiet, with almost nobody in it yet." }
    ] },

    { after: '6/19', title: '5: anchor', place: 'Iwatodai Dorm · Lounge', time: 'Evening', scene: [
      { music: 'dorm' },
      { n: "Mitsuru had said it at the Command Room table on Wednesday night, with her hands folded and the rain ticking at the window behind her, in the voice she kept for things that were not up for discussion. If there was anyone else in this city who stayed awake through the Dark Hour, she would rather know their face than their readings. Bring her here." },
      { n: "Solar had told them about Ann, in the end. The platform in May, in the green, and a girl standing where nobody should have been standing at all, lit by the screen in her hand. Fuuka had closed her eyes and listened for a long time and then said, quietly, yes, there was someone near the station who didn't go into a coffin at midnight, and she sounded happy. So Solar had texted Ann, who had texted back seven exclamation points and then, a minute later, on its own, what do i WEAR." },
      { n: "She came at seven in the rain with a cake box held over her head like a shield and the ends of her pigtails gone dark and heavy, and stood dripping on the mat inside the door, and for the first time since April Solar watched Ann Takamaki not know what to do with her hands." },
      { s: 'ann', f: 'flustered', t: "Hi. Hello. I brought a cake. Is that weird? I didn't know if this was a cake house. Do I bow? How low do I bow? Solar, how low." },
      { choose: [
        { t: "Bow to Mitsuru. Wave at everyone else.", notes: 3, then: [
          { n: "Ann bowed to Mitsuru, beautifully, at exactly the right depth, and then waved at Junpei with the whole cake box, and Mitsuru inclined her head one precise inch in return, which from Mitsuru was very nearly a hug." },
          { s: 'mitsuru', f: 'neutral', t: "Takamaki-san. Thank you for coming. And for the cake, which was not necessary, and which Iori is already looking at." }
        ] },
        { t: "Just be yourself.", notes: 2, then: [
          { s: 'ann', f: 'flustered', t: "That's the problem! Myself is loud!" },
          { n: "Down the hall Junpei laughed out loud, and Ann went pink to the ears, and it broke the ice anyway, the way a dropped plate does." }
        ] },
        { t: "They don't bite.", notes: 1, then: [
          { s: 'ann', f: 'neutral', t: "That's what people say right before something bites." },
          { n: "She came in anyway, sideways, holding the cake out in front of her like it might buy safe passage, which, with Junpei, it did." }
        ] }
      ] },
      { n: "Dinner was curry, because Fuuka had made it, and there was far too much of it, because Fuuka had been nervous, and the dining table was too small for seven so somebody dragged the coffee table over from the lounge and it wobbled. Akihiko asked Ann how many flights of stairs her hotel had and whether she'd tried taking them two at a time. Ann said eleven, and no, and looked at Solar with her eyes very wide, and Solar looked back and didn't help." },
      { s: 'junpei', f: 'surprised', t: "Okay, wait. Hold up. Are you, like, a model? For real? Dude. I knew it. Yuka-tan, I said it at the door, you heard me say it." },
      { n: "Solar saw it start. The shop sign coming on behind Ann's face, the chin lifting a fraction, the real Ann getting up quietly and going to stand at the back of the room. Her hand moved on the table before the rest of her had decided anything." },
      { choose: [
        { t: "Ask her about crepes instead. She has opinions.", notes: 3, then: [
          { n: "Ann's head turned. For a second the shop sign flickered, and then it went out, and what was underneath was laughing." },
          { s: 'ann', f: 'happy', t: "I have so many opinions. Junpei. Do you know what's wrong with canned whipped cream?" },
          { s: 'junpei', f: 'flustered', t: "...Is this a trap? Man, this feels like a trap." },
          { n: "It was not a trap. It was twenty minutes, and by the end of it Junpei had taken notes on a napkin." }
        ] },
        { t: "(Kick Junpei under the table.)", notes: 2, then: [
          { s: 'junpei', f: 'surprised', t: "Ow! What? What'd I... okay. Okay. My bad. Not a model. A regular girl. Hi, regular girl." },
          { s: 'ann', f: 'happy', t: "Hi, Junpei." }
        ] },
        { t: "(Let her handle it.)", notes: 1, then: [
          { s: 'ann', f: 'happy', t: "Part-time! Magazines, mostly. Nothing fancy." },
          { n: "It was so bright and so smooth that Junpei didn't notice a thing, and Solar noticed all of it, and wished she'd done something with her hand." }
        ] }
      ] },
      { s: 'yukari', f: 'neutral', t: "Which magazines? I feel like I'd have seen you. I read, like, all of them. Don't tell anyone." },
      { s: 'ann', f: 'neutral', t: "Probably not. They're Tokyo ones. Little ones. ...Definitely not, actually." },
      { n: "She said it lightly and looked down at her curry, and Solar knew she was thinking about a photographer who called her the face, and a cardigan somebody else had picked out." },
      { s: 'fuuka', f: 'neutral', t: "I'm sorry, I keep listening, I can't help it. You sound far away. Like a radio from another city. But very clear. A happy station." },
      { s: 'ann', f: 'surprised', t: "...Is that a compliment? I'm taking it as a compliment." },
      { n: "Afterwards, in the lounge, over the cake, which turned out to be a very good cake, Mitsuru explained what they knew the way she explained things to new recruits, briefly and precisely and without once rounding off an edge, which Ann seemed to find a relief. That there was an hour between one day and the next that most people slept through without knowing, sealed in coffins in the green. That a few people didn't. That those few could sometimes do things in that hour, if something in them woke up, and that some of what walked in it was dangerous. Solar told the rest, haltingly: the platform, and the screen lit in Ann's hand, and how she'd half known since the photo booth and hadn't known how to ask." },
      { s: 'ann', f: 'neutral', t: "Okay. So there's a secret extra hour every night, and I've been awake for it this whole time. Cool. That's fine. Honestly, that's only like the third weirdest thing that's happened to me this year." },
      { n: "Nobody asked what the first two were. Mitsuru looked like she wanted to, very much, and didn't, which Solar filed away as the most polite thing she had ever seen anyone do." },
      { place: 'Iwatodai Dorm · Front', time: 'Evening' },
      { n: "The rain had thinned to the kind of drizzle you only see under streetlights. They sat on the front steps under the overhang, knees up, Ann's tomato umbrella dripping between them, and the street was black and shining and empty all the way to the corner." },
      { s: 'ann', f: 'neutral', t: "I remember my first night here now. I didn't, before. Or I did, and I just never looked at it." },
      { s: 'ann', f: 'neutral', t: "I was on the last train down from Tokyo with my suitcase. We'd had dinner first, all of us, the best day, and I fell asleep against the window, and when I woke up everything was green and the train was stopped and everybody was... you know. Boxes." },
      { s: 'ann', f: 'neutral', t: "There was a girl on the platform. Little. In this big coat like a conductor's, way too big for her. She was the only other person awake. She said the hotel was that way and I'd like it here, it was quiet. She was so nice about it. I turned around to ask her name and she wasn't there anymore." },
      { n: "Something touched the back of Solar's neck, light, like a drop of rain off the overhang. She looked up. Nothing was dripping." },
      { s: 'ann', f: 'serious', t: "Mitsuru asked why I took a job this far from home, right when everything there was so good. I didn't tell her. I told you, though. At the fountain. Spring." },
      { s: 'ann', f: 'neutral', t: "And she said the other thing. That nobody should be awake in that hour on their own." },
      { n: "She held her hand up to the porch light with the fingers spread and looked at it for a long time, turning it, the way you'd check a window for cracks. It was steady. She seemed almost surprised by that." },
      { s: 'ann', f: 'neutral', t: "So who's mine? Here, I mean." },
      { choose: [
        { t: "...Me. I think it's me.", notes: 3, then: [
          { s: 'ann', f: 'surprised', t: "..." },
          { s: 'ann', f: 'blushing', t: "Yeah. Yeah, I think it's you too. I just really wanted to hear you say it." }
        ] },
        { t: "Does it matter, as long as you've got someone?", notes: 2, then: [
          { s: 'ann', f: 'neutral', t: "It matters to me. All of this matters to me." },
          { n: "But she looked at Solar when she said it, and then away, at the wet street, and didn't need to say anything else." }
        ] },
        { t: "You've got lots of people. The crepe lady. The guy in the gray car.", notes: 1, then: [
          { s: 'ann', f: 'happy', t: "The guy in the gray car doesn't know I exist. He eats a sandwich at one o'clock." },
          { s: 'ann', f: 'neutral', t: "I've got you. That's who I've got." }
        ] }
      ] },
      { n: "She went home under the tomato umbrella at ten, down the shining street toward the station, and at the corner she turned and waved with her whole arm. Solar stood on the steps until she'd gone. Then she noticed she was holding her own wrist, tight, the way you'd hold on to something in a crowd so nobody could pull it away from you, and she let go, and went in." }
    ] },

    { after: '7/10', title: '6: the call', place: 'Port Island · Seaside Park', time: 'Evening', scene: [
      { music: 'tender' },
      { n: "July had come down on the city the way a hand comes down on a lid, all at once and then steadily, and by Friday evening everything felt held shut. The seaside park on Port Island was the only place with any air in it. A long promenade along the water, joggers and old men fishing off the rail and couples sharing benches in a way that made the benches look small, and a wind off the bay that smelled of salt and warm concrete and somebody's grilled squid from a cart at the far end." },
      { n: "Ann was sitting on the rail with her shoes off and her phone in both hands, and she didn't say hello. She said, without looking up, that it was nearly seven." },
      { s: 'ann', f: 'neutral', t: "I call my best friend every Friday at seven. Since I got here. Since before, actually. Mostly it rings out. She doesn't always pick up. It's not her fault. Some weeks talking is a lot." },
      { s: 'ann', f: 'serious', t: "Last Friday she picked up. For like one second. She said my name, and then her mom needed her and she had to go. One second, Solar. I've been thinking about my name in her voice all week like it's a person." },
      { n: "She tilted the screen to check the time. Six fifty-two." },
      { s: 'ann', f: 'neutral', t: "Her name's Shiho. My best friend since middle school. The crepe notebook back home was hers. She made all the rules." },
      { s: 'ann', f: 'sad', t: "The teacher from the rumors. He hurt her. Badly enough that she... it was bad. And I was right there the whole time, and I didn't see it until it was almost too late." },
      { n: "She said it to the water, very evenly, the way you'd carry something too full across a room. The wind came off the bay and lifted her hair and put it down again." },
      { s: 'ann', f: 'neutral', t: "She's okay now. She moved away. She's getting better. And that's when it started, actually. My friends. The whole year. The best year of my life started on the worst day of it. Isn't that messed up?" },
      { choose: [
        { t: "You saw it in the end. That counts.", notes: 3, then: [
          { s: 'ann', f: 'sad', t: "...Yeah. I did. We all did." },
          { n: "It was something in the way she said we, like a hand closing into a fist around something it meant to keep." }
        ] },
        { t: "(Climb up onto the rail beside her.)", notes: 2, then: [
          { n: "The rail was still warm from the day. Ann shifted to make room without looking, and their shoulders touched, and she leaned a little, and stayed leaning." }
        ] },
        { t: "It's not your fault.", notes: 1, then: [
          { s: 'ann', f: 'neutral', t: "Everybody says that. I'm working on believing it. It's slow." }
        ] }
      ] },
      { n: "Six fifty-nine. Ann swung her legs back over to the promenade side and sat up straight like someone about to be called into an office." },
      { s: 'ann', f: 'serious', t: "Okay. It's seven. If it doesn't do anything, you have to say something really stupid right away, so I don't cry on Port Island." },
      { n: "She dialed. She held the phone to her ear, and then, like she couldn't bear to hold it alone, took it away and put it on speaker and laid it flat on her palm between them, the thin bright pane of it glowing in the dusk." },
      { n: "Nothing. The little pause phones take before anything happens, long, and then longer, so long that Solar opened her mouth for the stupid thing. And then it rang." },
      { n: "It was a thin sound through the little speaker, far off and tinny, the way every ring sounds when you're the one waiting on it. Ann's fingers went white at the edges. It rang again. Solar counted without meaning to. Three. Four. Five. The old men went on fishing. A jogger went past with his headphones leaking. Six." },
      { n: "On the seventh ring something clicked." },
      { n: "There was a rustle, and a breath, close to the phone, like somebody who'd run for it and then stopped with it in her hand, not sure yet. Then a voice, small and a little hoarse, as if it hadn't been used much that day, saying a single word, and the word was Ann." },
      { s: 'ann', f: 'surprised', t: "Shiho? Shiho, hi, it's me, it's Ann, I'm okay, I'm by the sea, I'm fine, I'm with a friend, there's this girl..." },
      { n: "Solar looked at the water so as not to listen, and listened anyway. She couldn't make out the words on the other end, only the shape of them, slow and careful, and Ann's face doing everything at once while she heard them. Then, in the middle of something Ann was saying about a crepe, there was a sound on the line, small and surprised, that took Solar a second to place. Somebody laughing. Four minutes later the screen lit up with a small polite box that said the call had ended." },
      { n: "Ann didn't move. She held the phone flat on her palm and looked at it the way you'd look at a bird that had landed there, and might do it again, if nobody scared it." },
      { n: "Something had happened in Solar's chest while it was ringing, and it didn't stop when the ringing did. It wasn't sadness, exactly. It was more specific than that, and worse. The exact ache of a shape. Someone who picked up on the first ring, every time, at any hour, and started talking before you'd said hello. Someone she would have called from a strange city at seven on a Friday with her shoes off. She couldn't see a face. She couldn't find a name. There was only the place in her where they went, warm and particular and exactly the right size, like the dent a head leaves in a pillow, and it was empty, and she hadn't known until right now that it was there at all." },
      { s: 'ann', f: 'sad', t: "Did you hear it? She laughed. Solar, she laughed. She hasn't laughed on the phone since spring. Tell me you heard it. I need somebody else to have heard it." },
      { choose: [
        { t: "I heard it.", notes: 3, then: [
          { n: "She wasn't sure. She'd heard the sea, and a small sound through a small speaker that might have been a laugh or a cough or a car going past an hour up the line, and her own pulse in her ears. She said it anyway, flat and certain, and Ann looked at her face for a long time, and believed her, or decided to, which was close enough." },
          { s: 'ann', f: 'sad', t: "...Okay. Okay. She laughed. She laughed." }
        ] },
        { t: "I don't know. But you did.", notes: 2, then: [
          { s: 'ann', f: 'neutral', t: "...Yeah. I did. That's enough. That has to be enough." }
        ] },
        { t: "It might have been a cough.", notes: 1, then: [
          { s: 'ann', f: 'sad', t: "I know. I know it might. Can you just not, tonight?" }
        ] }
      ] },
      { s: 'ann', f: 'neutral', t: "Is there anybody you'd call? If you could? If it rang?" },
      { choose: [
        { t: "...I think there's someone. I don't know who.", notes: 3, then: [
          { n: "Ann put the phone down on the rail and took Solar's hand, the way you'd take hold of a stranger's sleeve on a crowded train so you wouldn't fall, and held on, and didn't say anything. Neither did Solar. The water went on making its small shapes against the pier." }
        ] },
        { t: "(Look at the water instead of answering.)", notes: 2, then: [
          { s: 'ann', f: 'sad', t: "That's a yes. I know that face. I make that face." }
        ] },
        { t: "No.", notes: 1, then: [
          { s: 'ann', f: 'serious', t: "Liar." },
          { n: "But she said it gently, and bumped her shoulder against Solar's, and let it go." }
        ] }
      ] },
      { n: "They stayed until the lamps came on along the promenade. Ann put her shoes back on. On the walk to the monorail she took a picture of the lamps on the water and sent it, and the phone buzzed back before they'd reached the gate, one word and a heart, and Ann laughed and said okay, okay, next Friday, and put it away." },
      { n: "Solar didn't look at her own phone on the way home. She kept it in her pocket, closed, her hand around it the whole way, like something that might ring. It didn't." }
    ] },

    { after: '8/14', title: '7: twenty-seven', place: 'Port Island · Pier', time: 'Daytime', scene: [
      { phone: [
        { from: 'ann', t: "SOLAR. i bought a camera" },
        { from: 'ann', t: "ok a paper one. ok it's disposable. 27 pictures" },
        { from: 'ann', t: "i want proof of this summer. pier, 1pm. wear something u like ☀️" }
      ], contact: 'Ann' },
      { music: 'sun' },
      { n: "Mid-August, the dead center of the summer, the week everybody's grandparents were expecting them, so half the city had gone home to wherever home was and Port Island had that stretched-out holiday quiet, shutters down on every other shop and the trains running nearly empty and the cicadas in the trees by the pier so loud they seemed to be the weather. The heat came up off the concrete in sheets. The sea was so bright it hurt to look at." },
      { n: "Ann was waiting at the end of the pier in a white sundress she had very obviously chosen herself, and a straw hat, and a disposable camera on a string around her wrist, yellow cardboard with a plastic lens and a little wheel on top you wound with your thumb. She held it up like a trophy." },
      { s: 'ann', f: 'happy', t: "Twenty-seven pictures. That's it. No deleting, no checking, no taking forty of the same thing. You get one try and then it's just true." },
      { s: 'ann', f: 'neutral', t: "My phone has like four thousand pictures in it and I never look at a single one. This is paper. Paper stays." },
      { n: "She raised it and pointed it straight at Solar, one eye shut." },
      { choose: [
        { t: "(Look at it like it owes you money.)", notes: 3, then: [
          { n: "Ann made a noise like she'd been punched and pressed the button anyway, and the camera made its small dry click." },
          { s: 'ann', f: 'happy', t: "You remembered. Oh my god. Frame one. That's the cover." }
        ] },
        { t: "(Put your hand over the lens.)", notes: 2, then: [
          { s: 'ann', f: 'flustered', t: "Rude! That's a picture now! Frame one, your hand. Very artistic. Thanks so much." }
        ] },
        { t: "Don't waste one on me.", notes: 1, then: [
          { s: 'ann', f: 'serious', t: "I literally bought it for you. You're like half the reason. Hold still." }
        ] }
      ] },
      { n: "She spent the afternoon spending them. A gull standing on one leg on a bollard, glaring. A cup of shaved ice going pink and soupy in the heat. An old man's bucket with exactly one fish in it, and the old man, who agreed to be in it on the condition that the fish got top billing. Solar's shoes at the edge of the pier with the water underneath. The two of them in the dark glass of a shut shop, Ann waving, Solar not. Every time she wound the little wheel she said the number under her breath, and didn't seem to know she was doing it." },
      { s: 'ann', f: 'neutral', t: "Okay. Your turn. One of me. But don't tell me what to do with my face. Everybody always tells me what to do with my face." },
      { choose: [
        { t: "(Say nothing. Wait.)", notes: 3, then: [
          { n: "So Solar didn't say anything. She held the camera and waited, and Ann stood at the rail with her hands at her sides waiting to be told, and nobody told her, and after a long while she stopped waiting. She looked at the sea. She pushed her hat back. She laughed at a gull that had landed too close and then thought better of it. The shutter went. She didn't even hear it." }
        ] },
        { t: "Tell me about your friends. Don't look at me.", notes: 2, then: [
          { n: "Ann told her. The loud one and the scary one and the quiet one, and a cat she said not to ask about. Somewhere in the middle of it she forgot there was a camera. Solar took it right there, at the place where her voice went soft." }
        ] },
        { t: "Smile.", notes: 1, then: [
          { n: "The shop-sign smile came on, bright and level and exactly the right size. Solar took it, because she'd asked for it. It was probably a good picture. It was somebody else's." }
        ] }
      ] },
      { place: 'Port Island · Seaside Park', time: 'Evening' },
      { n: "By evening they'd retreated to the grass under the trees at the seaside park, sunburned and slow, sharing a melting lemon ice off one wooden stick, and the cicadas had handed over to some other insect with a gentler opinion. Ann wound the wheel and held the camera up to her eye and then didn't take anything. She lowered it." },
      { s: 'ann', f: 'neutral', t: "Twenty-five." },
      { s: 'ann', f: 'sad', t: "I keep counting. Did you notice? I said I wasn't going to look at the calendar and now I'm counting pictures. Twenty-five. Twenty-six. It's the same thing. It's the exact same thing." },
      { s: 'ann', f: 'neutral', t: "Summer ends too. I didn't even think about that. I was so busy being scared of spring I forgot everything ends. Even this." },
      { choose: [
        { t: "Counting doesn't make it go faster.", notes: 3, then: [
          { s: 'ann', f: 'surprised', t: "...Doesn't it?" },
          { s: 'solar', f: 'neutral', t: "No. It just means you were paying attention." },
          { s: 'ann', f: 'neutral', t: "That's so annoying. That's so right." }
        ] },
        { t: "Then stop counting. I'll count for you.", notes: 2, then: [
          { s: 'ann', f: 'happy', t: "Okay. You count. You're good at it. You count everything. Doors. Stairs. I've seen you." },
          { n: "Solar hadn't known anyone had seen. She didn't know what to do with that, so she ate the rest of the lemon ice, and Ann let her." }
        ] },
        { t: "It's not over yet.", notes: 1, then: [
          { s: 'ann', f: 'neutral', t: "I know. That's what everybody says right before." }
        ] }
      ] },
      { s: 'ann', f: 'happy', t: "Okay. Twenty-seven. The last one. You take it. Of anything you want." },
      { choose: [
        { t: "(Turn the camera around on both of you.)", notes: 3, then: [
          { n: "Solar held it out at arm's length with the lens toward them, and Ann leaned in without being asked, temple to temple, the way she had in the photo booth, and smelled like sunscreen and lemon, and the shutter went." },
          { s: 'ann', f: 'happy', t: "You didn't even look through the thing. It's going to be just our foreheads." },
          { s: 'solar', f: 'neutral', t: "Then it's our foreheads." }
        ] },
        { t: "(Take one of Ann, right now, before she's ready.)", notes: 2, then: [
          { n: "Ann's mouth was open on a word. The shutter caught it." },
          { s: 'ann', f: 'flustered', t: "SOLAR. That's going to be the worst picture of me ever taken." },
          { s: 'solar', f: 'neutral', t: "Good." }
        ] },
        { t: "(Take one of the sea, so she has something of here.)", notes: 2, then: [
          { n: "Ann watched her do it and didn't say anything for a moment." },
          { s: 'ann', f: 'neutral', t: "...That's really nice, actually. I'm putting that on my wall." }
        ] }
      ] },
      { n: "They took it to the one-hour photo place by the station on the way home and stood outside eating convenience store ice cream while it developed, and the girl at the counter gave them two envelopes, because Ann had asked for doubles, one set for here and one for home. Ann flipped through hers on the platform, fast and then slow, and stopped on one, and didn't say which." },
      { n: "Solar put her envelope in the desk drawer beside the paper carp. In bed that night she thought about frame twenty-seven, the one you only get one try at, and how after it there's nothing left to wind." }
    ] },

    { after: '9/11', title: '8: capital letters', place: 'Paulownia Mall · Fountain', time: 'After School', scene: [
      { music: 'city' },
      { n: "September had come in still pretending to be summer, hot in the middle of the day and only cool around the edges, and the mall had put its autumn things in the windows anyway, plaid and cardigans and chestnut-flavored everything, which Ann regarded as a personal challenge. They were at the fountain, where they always ended up. She had bought a chestnut crepe purely to have something to argue with, and Solar's phone buzzed in her pocket, and Solar flinched." },
      { n: "She hadn't meant to. It was a small flinch, a hitch in one shoulder, the kind you'd only catch if you'd been watching somebody's shoulders for five months. Ann had been." },
      { s: 'ann', f: 'neutral', t: "Okay. What was that. You looked at your pocket like there's a spider in it." },
      { n: "Since the end of August the phone had been getting messages. From numbers she didn't have, in voices that seemed to know exactly who she was. Old messages, the kind people send at the start of things, are you settling in, did you eat. And last weekend, at midnight, one from a number she didn't know with a time stamped on it that matched nothing at all. She hadn't answered any of them. She'd told the dorm and nobody else." },
      { choose: [
        { t: "(Show her.)", notes: 3, then: [
          { n: "Solar took out the phone and clicked it open like a compact and turned the little screen toward Ann without a word. Ann read it. Her face didn't do anything for a moment, and then it did a lot." },
          { s: 'ann', f: 'serious', t: "\"SOL where are you.\" Solar. Somebody's yelling for you. In capital letters. At midnight." }
        ] },
        { t: "Messages. From people I don't remember.", notes: 2, then: [
          { s: 'ann', f: 'surprised', t: "Like, from before? From your before?" },
          { n: "Solar nodded once. Ann put her crepe down on the rim of the fountain, which in Ann was the equivalent of an alarm going off." }
        ] },
        { t: "It's nothing.", notes: 1, then: [
          { s: 'ann', f: 'serious', t: "Solar. I model. I know a fake face from across a mall." },
          { n: "She waited. She was very good at waiting, it turned out, when she wanted to be, and eventually Solar told her, in about eleven words, and Ann put her crepe down." }
        ] }
      ] },
      { s: 'ann', f: 'sad', t: "That's what my friends would do. If I just... stopped answering. They'd text me in capital letters at midnight until somebody took their phones away. Somebody misses you so much, Solar." },
      { s: 'solar', f: 'sad', t: "I don't know who they are." },
      { s: 'ann', f: 'sad', t: "I know. That's the worst part, huh. They know you." },
      { n: "It went into Solar somewhere under the sternum and sat there, cold and exact, the way it did every time the phone buzzed. She'd been carrying it around for three weeks like a stone in a shoe, walking on it, not taking the shoe off. It was a strange relief to have someone else look at it." },
      { s: 'ann', f: 'neutral', t: "Or it's a cult. A really caring cult. Did you eat? Are you settling in? That's the scariest cult I've ever heard of. I'd join immediately." },
      { n: "Solar laughed, once, through her nose, and Ann looked pleased with herself, and then looked at the water, and went quiet in the way she did before she said something true." },
      { s: 'ann', f: 'neutral', t: "There's this thing I can do. Like what you do in the green. Kind of. I haven't done it since I moved down here. I haven't needed to. I kind of hope I don't." },
      { s: 'ann', f: 'serious', t: "The first time it happened I was so scared I couldn't breathe. And then I got so angry I forgot to be scared. Somebody had hurt my friend, and I just thought, no. No more. I'm done being what you want. And something kicked a door down inside me." },
      { s: 'ann', f: 'sad', t: "Her name's Carmen. I kind of miss her. That's such a weird thing to say about... never mind. I miss her." },
      { choose: [
        { t: "Mine's the opposite. She hides by shining so nobody can look at her.", notes: 3, then: [
          { s: 'ann', f: 'surprised', t: "..." },
          { s: 'ann', f: 'sad', t: "Oh. Oh, Solar. That's you. That's so you it's annoying." },
          { n: "Solar hadn't meant to say it. It was the most she'd said about it to anyone outside the dorm, and the words sat between them on the rim of the fountain where she couldn't take them back, and Ann didn't touch them. She just looked at Solar for a while like she was memorizing a route." }
        ] },
        { t: "What if I'm not angry? What if I'm just scared?", notes: 2, then: [
          { s: 'ann', f: 'neutral', t: "Then be scared. You're allowed. Just don't let anybody tell you you're not allowed to want to know." }
        ] },
        { t: "I'm not going to answer them.", notes: 1, then: [
          { s: 'ann', f: 'neutral', t: "Okay. That's yours to decide. Not mine." },
          { s: 'ann', f: 'sad', t: "...I'm going to hate it a little, though." }
        ] }
      ] },
      { s: 'ann', f: 'serious', t: "And if they show up, whoever they are, they have to get through me first. I'm going to check their vibes. I'm going to check them so hard." },
      { choose: [
        { t: "(Laugh.)", notes: 3, then: [
          { n: "It came out of her before she could stop it, out loud and helpless, the way it had in the photo booth, and two kids on the escalator turned to look, and Ann pointed at her with the chestnut crepe like a prosecutor presenting evidence." },
          { s: 'ann', f: 'happy', t: "There it is. Proof." }
        ] },
        { t: "Thank you.", notes: 2, then: [
          { s: 'ann', f: 'happy', t: "Don't thank me. I'm doing it for me. I'm very nosy." }
        ] },
        { t: "You might not be here by then.", notes: 1, then: [
          { s: 'ann', f: 'sad', t: "...Yeah. Maybe. The agency moves me around like a game piece. Next month I could be in Osaka for all I know." },
          { s: 'ann', f: 'neutral', t: "Then I'll check them from Osaka. It's a train ride. Everything's a train ride. I'll find a way. I'm very annoying." }
        ] }
      ] },
      { n: "When the mall started playing the song it played before closing, Ann reached over and took the phone out of Solar's hand, very gently, and closed it, click, and gave it back. Solar put it in her pocket, where it sat against her hip the whole way home, warm and quiet and full of people." }
    ] },

    { after: '10/2', title: '9: what are we', place: 'Paulownia Mall · Fountain', time: 'After School', scene: [
      { music: 'tender' },
      { n: "October came in clear and cold and bright as a struck bell, the first week that smelled like autumn properly, dry leaves on the walk from the monorail and a man roasting sweet potatoes on a cart outside the mall doors, so that the whole entrance smelled of smoke and sugar. Ann had picked the fountain. Solar noticed that she'd picked it." },
      { n: "She was sitting on the rim where she'd sat in April, in the red jacket, which she hadn't worn since the weather turned, and Solar understood before she got there that something had been decided, the way you understand from the far end of a hallway that the classroom has gone quiet." },
      { s: 'ann', f: 'neutral', t: "I've been dreaming about home. Every night, for like two weeks. Not dreams-dreams. Just home. My room. The station. This morning I woke up and I could smell Shibuya station. The actual smell. Pretzels and rain and a million people's shampoo." },
      { s: 'ann', f: 'neutral', t: "And then the agency called. They want to put me on the circuit. Osaka, Fukuoka, Sapporo, a week in Seoul, then wherever's next. Through March. A new city every week, a new hotel every week. It's the biggest thing they've ever offered me." },
      { s: 'ann', f: 'neutral', t: "The first train's at the end of the month. They've already booked it. They always book the train first and ask after." },
      { s: 'ann', f: 'sad', t: "And I said I'd think about it. I never say that. I always just go where they put me. I've been thinking about it for nine days, Solar. I'm so bad at it." },
      { n: "The splinter from May, the little one Solar had been carrying since the photo booth, end date, went in the rest of the way. Not a goodbye, not exactly. Just a calendar with no fountain on it, a girl who came through on a Friday and then, one week, didn't. It didn't hurt the way she'd expected. It hurt the way cold water hurts, everywhere at once and then nowhere, and then she couldn't feel her hands." },
      { choose: [
        { t: "(Sit down next to her. Don't say anything yet.)", notes: 3, then: [
          { n: "She sat. The stone was cold through her skirt. The spray came over on the draft from the doors, fine as breath, and Ann leaned until their shoulders touched, and they sat like that until it was bearable, or nearly." }
        ] },
        { t: "When?", notes: 2, then: [
          { s: 'ann', f: 'neutral', t: "End of the month. A Saturday. Ten-forty in the morning, Osaka, car four, window seat. I didn't even pick the seat. That's the part that gets me." }
        ] },
        { t: "You can't just leave.", notes: 1, then: [
          { s: 'ann', f: 'neutral', t: "I know. I mean, I can. That's the whole problem." }
        ] }
      ] },
      { s: 'ann', f: 'neutral', t: "I think I ran. That's the only way I can say it." },
      { s: 'ann', f: 'serious', t: "When they started sending me down here in April I said yes so fast my manager laughed. Any job, any city, as long as it was out of Tokyo. I told everybody it was a big opportunity. It was a train I could get on so I didn't have to look at the calendar. I didn't want spring. I didn't want the best year of my life to turn into a story at a reunion." },
      { s: 'ann', f: 'serious', t: "And the circuit's the same thing, only bigger. If I'm never anywhere longer than a week, nothing can end on me. That's the whole appeal. That's so messed up." },
      { s: 'ann', f: 'serious', t: "But I looked. I looked right at it. And it's still awful. Everybody's going to scatter. And I want to be there when it does. I want the ending part too. It's mine." },
      { n: "Mine. Solar heard it the way you hear your own name across a room. She thought, without wanting to, of the box on the enrollment form with nothing in it, and of every door she'd counted since April, and of a thing she couldn't see the edges of that she had been walking around for months like furniture in a dark room. Ann had looked straight at hers. Solar didn't know yet what hers was. Her hands had gone cold in her lap again, and she held them together to give them something to do." },
      { s: 'ann', f: 'sad', t: "I just don't know if I'm allowed to say no to them. Or have a place. Two places. People who know where I'll be on a Friday. I've been running so long I don't know what standing still looks like." },
      { choose: [
        { t: "Then go be there.", notes: 3, then: [
          { n: "Ann's face did the thing Solar had only ever seen it do once before, at the photo booth, crumpling and brightening at the same time." },
          { s: 'ann', f: 'sad', t: "...Yeah. Yeah. Okay. You're the only person who'd say it like that. Like it's simple. Like there's a door and you just walk through it and stay on the other side." }
        ] },
        { t: "I'll miss you.", notes: 2, then: [
          { s: 'ann', f: 'sad', t: "Don't. Not yet. If you say it now then I'll say it and it'll be a whole thing and we'll both be crying in a mall in October." }
        ] },
        { t: "Stay.", notes: 1, then: [
          { s: 'ann', f: 'sad', t: "...Don't. Please. You're the only one who could actually make me. That's not fair. I want it to be mine." }
        ] }
      ] },
      { s: 'ann', f: 'blushing', t: "So before I decide anything, I need to know. I'm not getting on any train wondering. I've done that. I'm not doing it again." },
      { s: 'ann', f: 'serious', t: "What are we, Solar?" },
      { route: [
        { t: "I think I've been in love with you since the crepe.", route: 'romance', notes: 3, then: [
          { s: 'ann', f: 'surprised', t: "..." },
          { n: "For a second she didn't move at all. Then she grabbed both of Solar's hands and held on like the fountain was about to wash her away, and a kid by the arcade stared, and Ann didn't notice, because Ann had decided a long time ago that being stared at wasn't worth the energy, and she was not about to start now." },
          { s: 'ann', f: 'blushing', t: "Oh my god. Okay. Me too. Obviously me too. Since the photo booth, probably. Since the stupid bear." },
          { s: 'ann', f: 'flustered', t: "I'm so mad. I'm so happy. There's a whole itinerary with my name on it sitting in my inbox, Solar, what is wrong with us." },
          { n: "Solar didn't know. She didn't care, which was new. She looked at their hands, Ann's thumbs pressing into the backs of hers, and for once in her life didn't count a single exit." }
        ] },
        { t: "You're my best friend. The first one I remember.", route: 'friend', notes: 3, then: [
          { s: 'ann', f: 'surprised', t: "..." },
          { s: 'ann', f: 'sad', t: "Oh, that's so much worse. That's so much better. Oh my god. The first one you remember." },
          { n: "She hugged Solar so hard they both very nearly went backwards into the fountain, and when she let go she was crying and laughing at the same time, and wiping her face with the cuff of the red jacket." },
          { s: 'ann', f: 'happy', t: "Best friends. That's forever. That's a contract. I'm writing it in the index." }
        ] }
      ] },
      { n: "Ann wrote it in the index. Solar watched her do it, upside down, the pen pressing so hard it came through on the next page, and the fountain threw up its tired plumes behind them, and the spray came over, and neither of them moved." }
    ] },

    { after: '10/23', title: '10: spring', place: 'Paulownia Mall · Fountain', time: 'Evening', scene: [
      { phone: [
        { from: 'ann', t: "ok. i decided." },
        { from: 'ann', t: "fountain at 6? come hungry" }
      ], contact: 'Ann' },
      { music: 'tender' },
      { n: "The last of October had come in cold, and the trees along the street outside the mall had finally given up, gold and then brown and then down, so that the leaves lay ankle-deep in every corner where the wind had put them, and the light went early now, the sky over the bay turning violet before five. Ann's text had come at noon. No emoji. That was how Solar knew it was serious." },
      { n: "She was on the rim of the fountain in the red jacket with her pigtails high and a train ticket to Tokyo tucked into the back of her phone case, the way you'd mark a page you meant to come back to. She had two crepes in paper cones from the stand by the escalator. She held one out without getting up." },
      { s: 'ann', f: 'happy', t: "Okay. Official results. Six months of research. Forty-one crepes. And number one, after everything, after all of that, is this stand. Right here. The one I said was terrible the day I met you." },
      { s: 'ann', f: 'flustered', t: "I know! I know. It got better. Or something did. The crepe lady swears she changed nothing. I think she's lying. I think she changed the cream for me." },
      { choose: [
        { t: "(Eat it very seriously, then give it five strawberries.)", notes: 3, then: [
          { n: "Solar ate it like an exam, slowly, with her eyes narrowed, while Ann watched her mouth with total suspense, and at the end she held up one hand with all five fingers spread." },
          { s: 'ann', f: 'happy', t: "Five! Even the sad one! Oh my god. It's unanimous. It's official." }
        ] },
        { t: "It's the same crepe. You changed.", notes: 2, then: [
          { s: 'ann', f: 'neutral', t: "...Shut up. That's so annoying." },
          { s: 'ann', f: 'sad', t: "That's so right." }
        ] },
        { t: "It's fine.", notes: 1, then: [
          { s: 'ann', f: 'flustered', t: "SOLAR. On results day!" },
          { n: "But she was laughing so hard she had to put her crepe down, and she kept laughing, on and off, for a long time after, like it had gotten stuck." }
        ] }
      ] },
      { n: "She gave Solar the notebook. The pink one with the strawberry in sunglasses, gone soft at the corners from six months in a handbag, every page filled in her round loud handwriting, scores and rules and crossings-out and little drawings in the margins, and Solar's rules among them, in Ann's hand, with Solar's name beside each one like a credit in a magazine." },
      { s: 'ann', f: 'neutral', t: "You keep it when I'm away. I get it when I'm here. Joint custody. Someone has to keep ranking, and you can't let this city get away with things." },
      { s: 'ann', f: 'serious', t: "Because I'm saying no. To the circuit. I'm going up this weekend in my good jacket, and I'm going to sit in my agency's office and tell them Tokyo's home and Port Island's my other home, and they can send me anywhere they want as long as the train comes back through here. Then I'm having dinner with my friends. Then I'm coming back Sunday night on the six-oh-four, because the mall people booked me for Monday." },
      { s: 'ann', f: 'happy', t: "And when there's a job in Kyoto I'll go to Kyoto, and then I'll come back. And in spring, when everybody scatters, I'm going to be standing right there on the platform, crying, with a sign. I get both. I didn't know you were allowed to have both." },
      { s: 'ann', f: 'sad', t: "And I don't want you at the station. Is that okay? I don't want it to look like a goodbye, because it isn't one. I want the last thing before the train to be this. The fountain. You with cream on your face." },
      { choose: [
        { t: "Okay. Not at the station.", notes: 3, then: [
          { s: 'ann', f: 'happy', t: "Thank you. Seriously. Thank you." },
          { n: "Solar wiped her face with the back of her wrist. There had, in fact, been cream." }
        ] },
        { t: "I'd come anyway.", notes: 2, then: [
          { s: 'ann', f: 'sad', t: "I know. That's why I'm asking. Please." },
          { n: "Solar looked at her for a long time, and then nodded, once, the way you'd sign something." }
        ] },
        { t: "You're really staying.", notes: 1, then: [
          { s: 'ann', f: 'happy', t: "I'm really staying. Coming back, every time. Same thing. Say it a few more times. I practiced it in the mirror all week. It gets easier every time." }
        ] }
      ] },
      { s: 'ann', f: 'neutral', t: "Can I tell you what I figured out? Here, I mean. What this whole year was for." },
      { s: 'ann', f: 'serious', t: "I was so scared of the end that I almost didn't get to have it. And you're scared of something too. I don't know what. I don't think you know what. But whatever it is, Solar, you're allowed to have the ending. It's yours. Don't let anybody keep it for you." },
      { n: "The fountain went on behind them, throwing up its tired plumes. Somewhere upstairs the arcade chimed a win for somebody. Solar sat very still with the notebook on her knees and the words in her, and didn't know where to put them, so she put them where she'd put the photo strip, flat, between two pages, where they'd keep." },
      { ifRoute: 'romance', then: [
        { s: 'ann', f: 'blushing', t: "And I'm not sorry. About any of it. About you. You're half the reason I'm coming back, and I'm not going to pretend you're not. I'm done pretending things on fountains." },
        { choose: [
          { t: "(Kiss her.)", notes: 3, then: [
            { n: "Solar leaned in and kissed her on the rim of the fountain, under the mall's evening lights, with the spray coming over them on the draft from the doors, and Ann's mouth tasted like burnt sugar, and her hand came up and held the back of Solar's neck like she was keeping something from falling, and it was short, and it was not short at all." },
            { s: 'ann', f: 'blushing', t: "...Okay. Okay. Wow. That's not fair. That's so not fair. Now I have to think about that on a train for an hour." }
          ] },
          { t: "Come back Sunday.", notes: 3, then: [
            { s: 'ann', f: 'blushing', t: "Six-oh-four. Car four. I'm going to make you so sick of me. I'm very annoying. Ask anyone." },
            { n: "She pressed her forehead to Solar's and stayed there, eyes shut, breathing, for as long as it took the fountain to go up and come down three times." }
          ] },
          { t: "(Take her hand and don't let go yet.)", notes: 2, then: [
            { n: "Ann's fingers laced through hers at once, like they'd been waiting. They sat like that until the mall started playing the song it played before closing, and neither of them mentioned it." }
          ] }
        ] }
      ], else: [
        { s: 'ann', f: 'happy', t: "And I'm not sorry. You're my best friend in this whole city. In any city. I'm going to tell everybody up there about you this weekend, and nobody's going to believe me." },
        { choose: [
          { t: "Tell Shiho I said hi.", notes: 3, then: [
            { s: 'ann', f: 'surprised', t: "..." },
            { s: 'ann', f: 'sad', t: "I will. First thing. I'm going to tell her I found someone who'd sit through all four frames." }
          ] },
          { t: "Tell them about the crepes.", notes: 3, then: [
            { s: 'ann', f: 'happy', t: "Obviously. I'm going to make them do the index. They're going to hate it. Shiho's going to have so many notes." }
          ] },
          { t: "(Hug her. Hard.)", notes: 2, then: [
            { n: "They very nearly went into the fountain, again, and Ann shrieked, and held on anyway, and didn't let go for a long time." }
          ] }
        ] }
      ] },
      { n: "At the escalator Ann turned and walked backwards for three steps, waving with her whole arm, the way she had at the corner in June, and then she turned around and went, red jacket, pigtails, gone into the Friday crowd. Solar sat on the rim of the fountain with a pink notebook in her lap until a man in a uniform came by with a ring of keys and said, kindly, that they were closing." },
      { place: 'Iwatodai Dorm · Rooftop · The Dark Hour', time: 'Night' },
      { n: "At the turn of the hour the city went green, all of it at once, the sky and the bay and the windows, and the moon came up too big and the color of something old. Solar was on the dorm roof in her coat with her back against the water tank and the photo strip from May in her hand, because she couldn't sleep, and because the roof was where she went when she couldn't." },
      { n: "She looked toward the station. The hotel was a dark block beside it, eleven floors, the parking garage, every window the same dead green, and somewhere in it, she knew now, a girl was sitting up awake too, with a small bag packed by the door, waiting out the same hour. Solar couldn't tell which window. She looked anyway, until the hour ended the way it always did, with the lights coming back on in a long ripple from the bay, and the hum of the city starting again in the middle of its sentence." },
      { n: "In the morning she texted Ann. She didn't know what to write, so she wrote the only thing that seemed true, and pressed send, and watched the little screen." },
      { phone: [
        { from: 'solar', t: "five strawberries" },
        { from: 'ann', t: "SIX. the sad one counts double now" },
        { from: 'ann', t: "packing. one small bag. SMALL. i'm proving a point" },
        { from: 'ann', t: "back sunday ♡" }
      ], contact: 'Ann' },
      { n: "It had answered before she'd closed the phone. Solar read it twice on the edge of her bed, and then closed it, gently, click, and put it in her pocket, where it sat warm against her hip all morning, and buzzed twice more before lunch, both times about the bag." }
    ] }
  ],
  // After MAX: ordinary days with her, now that she keeps coming back (they play in order, then rotate, at the fountain's usual times).
  afterMax: [
    { title: 'consultant on duty', place: 'Paulownia Mall · Fountain', time: 'After School', scene: [
      { music: 'city' },
      { n: "One Friday after school Solar went to the mall and was halfway to the fountain before she noticed where she was going, which was the kind of thing her feet did now. They'd once turned on their own at the shrine steps. They'd once counted every exit in a room before the rest of her had sat down. Now they came here." },
      { n: "The crepe lady looked up from her griddle as Solar came off the escalator, and without a word, without being asked, started on two. Ann was already on the rim of the fountain with the pink notebook open on her knee and a pen in her teeth, back from a weekend in Tokyo and still talking about it." },
      { s: 'ann', f: 'happy', t: "Okay. Big news. Shiho's doing the index now. At her new school. She sent me four pages. She has a rule about crepes that are \"trying too hard,\" and I've never been more proud of anyone in my life." },
      { s: 'ann', f: 'serious', t: "So we need a counter-rule. Something that's ours. Something she's never going to think of, because she doesn't live here." },
      { choose: [
        { t: "Plus one if you can eat it on the monorail without anyone looking.", notes: 3, stat: { charm: 1 }, then: [
          { s: 'ann', f: 'surprised', t: "...Oh, that's local. That's so local. That's a regional rule." },
          { n: "She wrote it down in capital letters and then took a picture of it and sent it, and her phone buzzed back before she'd put it down, and she read the answer and fell sideways against Solar's shoulder laughing." },
          { s: 'ann', f: 'happy', t: "She says that's \"cheating with geography.\" She's so mad. I love it here." }
        ] },
        { t: "(Draw the fifth strawberry a friend. He looks lonely.)", notes: 2, then: [
          { n: "Solar took the pen and drew, next to the sad triangular fifth strawberry from May, a second one, even worse, leaning on him like a drunk at a party. Ann looked at it for a long time." },
          { s: 'ann', f: 'happy', t: "He has a friend now. Oh my god. I'm going to cry in a mall again." }
        ] },
        { t: "Minus one if it's eaten alone.", notes: 2, then: [
          { s: 'ann', f: 'neutral', t: "...Solar. That's the saddest rule anyone's ever made. That's a rule about us." },
          { s: 'ann', f: 'happy', t: "It's going in. Big letters. Rule nine." }
        ] }
      ] },
      { ifRoute: 'romance', then: [
        { n: "They ate the crepes on the rim with their knees touching, and when Ann got cream on her lip she didn't wipe it, she just looked at Solar sideways until Solar did it for her with her thumb, and then looked very pleased with herself, and pretended to write something important in the notebook, and didn't." }
      ], else: [
        { n: "They ate the crepes on the rim, and Ann scored hers out loud between bites, batter, cream, fruit, emotional impact, and gave it a four, and Solar gave hers a four, and Ann said that was suspicious, and Solar said it was a four, and they argued about it until the crepes were gone, which was the point." }
      ] },
      { n: "A little girl in two high pigtails ran past the fountain shrieking after a balloon, and her mother ran after her, and the spray came over on the draft from the doors, fine as breath. Ann wrote the date at the top of a fresh page. Next Friday, she said, they were doing the stand by the cinema, and it was going to be terrible, and they were going to be very thorough about it." }
    ] },
    { title: 'arriving', place: 'Paulownia Mall · Shop Windows', time: 'After School', scene: [
      { music: 'joy' },
      { n: "The first properly cold week came in on a Tuesday, the wind off the bay getting in under coats and finding every gap, and Ann met Solar at the bottom of the escalator, took one look at her in her school blazer with her shoulders up around her ears, and said nothing at all, which was always the most dangerous thing Ann could do. She took her by the sleeve and towed her up to the second floor." },
      { n: "The shop was the one from the spring, warm and bright and smelling of new wool and the perfume they sprayed at the door, and the gray sweater was still there. Not in the window anymore. Folded on a table at the back, one left, the sleeves tucked under it like a cat's paws." },
      { s: 'ann', f: 'serious', t: "It waited for you. Since April. Do you know how rare that is? Things don't wait. Things sell out." },
      { s: 'shopgirl', t: "That's the last one. It's been tried on a lot. Nobody ever buys it. I don't know why." },
      { s: 'ann', f: 'happy', t: "Because it's hers. It's been hers this whole time. It was just waiting for her to notice." },
      { choose: [
        { t: "(Put it on. Push the sleeves up the way she did.)", notes: 3, then: [
          { n: "Solar put it on over her blouse and pushed the sleeves up her arms the way Ann had in the spring, and turned to the long mirror by the fitting rooms. The girl in it looked back at her, in gray, and for once didn't look like someone across a room she couldn't place. She looked like someone somebody had picked something out for, on purpose." },
          { s: 'ann', f: 'happy', t: "THERE. Oh, I was so right. I'm always right about clothes. I'm only wrong about everything else." }
        ] },
        { t: "I can't afford it.", notes: 2, then: [
          { s: 'ann', f: 'neutral', t: "I know. That's why I'm buying it. Modeling money. Don't argue. You let me buy a parfait the size of my head, you can let me buy you one sweater." },
          { n: "She was already at the register. Solar didn't argue, which surprised them both." }
        ] },
        { t: "What if it's not me?", notes: 1, then: [
          { s: 'ann', f: 'serious', t: "Then you'll find out. That's allowed too. But it is. Try it." },
          { n: "Solar tried it. It was. She didn't say so. Ann didn't need her to." }
        ] }
      ] },
      { n: "Ann paid for it over every objection Solar made and several she didn't, and had them cut the tags off at the counter so Solar could walk out in it, and on the escalator down she said, very seriously, to walk like she was arriving, and Solar did, all the way to the doors and out into the cold, and the wind found nothing to get into at all." },
      { ifRoute: 'romance', then: [
        { n: "At the monorail gate Ann fixed the collar, which didn't need fixing, and left her hands there a second longer than the collar needed, and said it was so you it was annoying, quietly, to the collar, and went pink, and went." }
      ], else: [
        { n: "At the monorail gate Ann fixed the collar, which didn't need fixing, and said it was so you it was annoying, and waved with her whole arm, and went." }
      ] },
      { place: 'Iwatodai Dorm · Dining Room', time: 'Early Morning' },
      { n: "In the morning she wore it down to breakfast. Yukari looked up from her toast and stopped chewing." },
      { s: 'yukari', f: 'surprised', t: "Okay, where'd you get that? It's so you. Like, weirdly, annoyingly you." },
      { n: "Solar said a friend had picked it out. It was the first time she'd said it like that, out loud, a friend, without checking first whether she was allowed to, and it went down easy and warm, like the first spoonful of something good." }
    ] },
    { title: 'four frames', place: 'Paulownia Mall · Photo Booth', time: 'Evening', scene: [
      { music: 'city' },
      { n: "Winter put lights on everything. The mall had wound them up every pillar and across the skylight and around the fountain so the water came up gold, and the photo booth had a new sticker on its curtain, a snowman, and the cartoon bear on the screen had been given a Santa hat that made him look, Ann said, like he'd been drafted." },
      { s: 'ann', f: 'happy', t: "Same booth. Same bear. Different season. It's a series now. I want one every season until you're sick of me." },
      { n: "She knew where every light was. She set Solar's shoulders with both hands like she was arranging flowers, the way she had in May, and then stopped, and looked at her, and took her hands away." },
      { s: 'ann', f: 'neutral', t: "Actually, no. You do it. However you want. I'm not telling you what to do with your face." },
      { choose: [
        { t: "(Look at the camera like it owes you money.)", notes: 3, then: [
          { n: "Solar glared down the lens with her full and considerable attention, and Ann looked at the preview and made the same noise she'd made in May, like she'd been punched, and on the next frame they were both doing it, two girls in a pink booth glaring at a bear in a Santa hat." },
          { s: 'ann', f: 'happy', t: "We're terrifying. We're a gang. Frame four, do whatever." }
        ] },
        { t: "(Don't pose. Watch her pose.)", notes: 2, then: [
          { n: "Solar didn't pose. She watched Ann tilt her chin to the exact right angle and then forget it, halfway through, because she'd caught Solar watching, and the flash went off on the two of them looking at each other instead of the camera, which Ann said was a waste of a frame, and kept." }
        ] },
        { t: "(Copy the bear's face.)", notes: 2, then: [
          { s: 'ann', f: 'surprised', t: "Is that... are you doing the bear? You're doing the bear. Oh my god, you're doing the bear." },
          { n: "She was laughing too hard to pose for the rest of it. All four frames came out blurred. They were, Ann said, holding the strip up to the lights, the best four frames ever taken in Port Island." }
        ] }
      ] },
      { n: "On the last frame Ann leaned her head against Solar's, temple to temple, quick and easy, the way she had in the spring, and this time Solar was ready for it, and leaned back." },
      { n: "The strip came out of the slot still warm. Ann cut it down the middle with her nail, two frames each, and took a picture of her half and sent it, and her phone was buzzing before they'd got out of the booth. She read it with the curtain still half open and her face doing everything at once." },
      { s: 'ann', f: 'happy', t: "My friends say hi. All of them. Even the scary one. And Shiho says, and I quote, \"tell solar she has a very good glare.\" That's the highest compliment Shiho gives. I've only ever gotten it once." },
      { ifRoute: 'romance', then: [
        { s: 'ann', f: 'blushing', t: "And one of them asked who you are. And I said my girlfriend. In capital letters. And then I put my phone face down for a whole minute because I was too scared to look." },
        { n: "She turned it over to show her. It had filled up in the minute, a solid column of capital letters and exclamation points and one picture of a cat looking stunned, and Ann put her face in Solar's shoulder and laughed into it and didn't come out for a while." }
      ], else: [
        { s: 'ann', f: 'neutral', t: "And one of them asked who you are, and I said my best friend down here, and he said, \"down here? Ann, you have a down here?\" And I said yeah. I do." },
        { n: "She said it to the phone, quietly, like she was checking it, and then looked up and grinned, and bumped her shoulder against Solar's, and left it there." }
      ] },
      { n: "Solar put her two frames in the handbook between the pages, flat, next to the ones from May, where things kept. On the monorail home her own phone buzzed in her pocket, once, and it was Ann, already, from three cars down, a single strawberry, and Solar wrote one back, and that was the whole conversation, and it was enough." }
    ] }
  ],
  // Christmas Eve (engine need: romance route on 12/24, picked from the story's 12/24 list). Romantic beats sit inside
  // ifRoute so a friend-route play still holds.
  christmas: { place: 'Paulownia Mall · Fountain', time: 'Evening', scene: [
    { music: 'date' },
    { phone: [
      { from: 'ann', t: "ok so. i skipped the agency party" },
      { from: 'ann', t: "and the one in tokyo. i went to that one LAST weekend, it counts" },
      { from: 'ann', t: "fountain. 7. wear something warm ♡" }
    ], contact: 'Ann' },
    { n: "The mall on Christmas Eve was all couples and carols and the smell of roasted chestnuts from the cart by the doors, the lights wound up every pillar so thick the whole atrium glowed gold, and somebody had put a tree beside the fountain that went up nearly to the skylight, so that every time the water went up it caught the tree's lights on the way and came down glittering. Solar wore the warmest thing she owned. She'd been told to." },
    { n: "Ann was on the rim in a white coat and a red scarf with her pigtails tucked under a knitted hat, holding a small flat package wrapped in paper with strawberries on it, which she had obviously gone to some trouble to find, and which she held out at arm's length with her eyes shut, like it might go off." },
    { s: 'ann', f: 'flustered', t: "Okay. Open it. No. Wait. Don't open it in front of me. No, open it, I want to see your face. Open it." },
    { n: "It was a photo album, a small one, the kind with clear plastic sleeves. Inside, in order, were all twenty-seven frames from August, the gull and the shaved ice and the old man's one fish and Solar's hand over the lens and both their foreheads, and after them the booth strip from May, and on the last page, alone, a paper crepe wrapper from the fountain stand, flattened and pressed, with a date written across it in pink felt-tip: the day they met." },
    { s: 'ann', f: 'neutral', t: "Proof. Of this year. You keep losing things, so I made you something you can't lose. It's got a lock. It's a terrible lock. It's the thought." },
    { choose: [
      { t: "(Turn every page. Slowly. Don't say anything until the end.)", notes: 3, then: [
        { n: "Solar turned every page. It took a long time. Ann watched her the whole way, sitting on her own hands to keep them still, and when Solar got to the last page she stopped, and looked at the wrapper for a long time, and closed the album, and held it against her chest with both arms." },
        { s: 'ann', f: 'blushing', t: "...That's the face. Okay. That's the face I wanted. Merry Christmas." }
      ] },
      { t: "You kept the one of my hand.", notes: 2, then: [
        { s: 'ann', f: 'happy', t: "It's the most you thing ever photographed. Of course I kept it. It's frame one. It's the cover." }
      ] },
      { t: "When did you even do this?", notes: 2, then: [
        { s: 'ann', f: 'happy', t: "On trains. I'm on a lot of trains. People stare. I tell them it's for school." }
      ] }
    ] },
    { n: "Solar had brought something too. She'd thought about it for two weeks and changed her mind four times and in the end gone back to the first thing, which was a notebook. Pink. A strawberry on the cover. Not in sunglasses, because she couldn't find one in sunglasses, so she'd drawn them on herself in marker, badly." },
    { s: 'ann', f: 'surprised', t: "..." },
    { s: 'ann', f: 'sad', t: "Volume two. Oh my god. You made volume two. He has sunglasses. You drew him sunglasses." },
    { s: 'ann', f: 'happy', t: "He looks like he's in witness protection. I love him. He's the best thing I've ever been given, and my dad once gave me a handbag that cost more than a car." },
    { ifRoute: 'romance', then: [
      { cg: 'romance-ann-christmas' },
      { n: "They walked the long way round the atrium with the album under Solar's arm and the notebook under Ann's, past the tree and the carolers and a man in a reindeer hat selling hot cocoa out of a thermos, and somewhere around the second lap Ann's hand found Solar's and stayed there, in the open, under all the lights, with everybody looking, and for once Ann wasn't the one being looked at, and neither was Solar. It was just the two of them, being looked at together, which was a different thing entirely." },
      { s: 'ann', f: 'blushing', t: "Solar. Can I have one picture? Of you. Not posed. Just you, now, on Christmas. For me. Not for anybody else." },
      { cg: null },
      { choose: [
        { t: "(Kiss her first. Then she can have the picture.)", notes: 3, then: [
          { n: "Solar kissed her by the fountain with the tree's lights going up and coming down in the water beside them, and Ann's nose was cold and her mouth tasted like cocoa, and she laughed against Solar's mouth halfway through, surprised, delighted, and held on by the front of the sweater." },
          { n: "She took the picture afterward. Solar didn't know what her own face was doing. Ann looked at the screen and didn't show her, and put the phone away very carefully, like something that could spill." },
          { s: 'ann', f: 'blushing', t: "That one's mine. Nobody gets that one. Not even the group chat." }
        ] },
        { t: "(Stand still. Let her take it.)", notes: 3, then: [
          { n: "Solar stood still by the fountain in her good coat with her hands in the sleeves and didn't arrange her face, because Ann had asked her not to, and found that it arranged itself, and that whatever it was doing, it was doing it at Ann." },
          { s: 'ann', f: 'blushing', t: "Oh. Oh no. You look like that at me? All the time? Solar. That's so not fair." }
        ] }
      ] }
    ], else: [
      { n: "They walked the long way round the atrium with the album under Solar's arm and the notebook under Ann's, past the tree and the carolers and a man in a reindeer hat selling hot cocoa out of a thermos, and Ann bought two and gave the man a score out of five without being asked, and he took it well." },
      { choose: [
        { t: "(Take her picture by the tree. Don't tell her what to do with her face.)", notes: 3, then: [
          { n: "Solar didn't say anything. She held up her phone and waited, and Ann stood by the tree waiting to be told, and nobody told her, and after a while she stopped waiting and laughed at something over Solar's shoulder, and that was the picture." },
          { s: 'ann', f: 'happy', t: "You did the thing. From August. You remembered." }
        ] },
        { t: "Merry Christmas, Ann.", notes: 3, then: [
          { s: 'ann', f: 'happy', t: "Merry Christmas, Just Solar. Best one I've had. Don't tell my friends. Actually, tell them. They'll be so mad." }
        ] }
      ] }
    ] },
    { n: "At nine the carolers packed up and the crepe lady put her shutter half down and then, seeing them, put it back up again and made two without being asked, and they ate them on the rim of the fountain where they'd met, with the spray coming over on the draft from the doors, fine as breath, gold with the tree's lights. Ann scored hers out loud. Five strawberries. Even the sad one." },
    { n: "Solar didn't count anything. Not the doors, not the people, not the days left in the year. She sat on the cold stone in her warmest coat, with an album of proof in her lap, and let the evening be exactly as long as it was." }
  ] }
});
