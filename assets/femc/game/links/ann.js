/* Ann Takamaki · Lovers. Revamp social link data (femc-game.html). Format: link fields in assets/femc/game/core.js, scene lines in scene.js.
   Cast-only speakers: boy, vendor (no portraits). Ranks 4-10 are stubs. */
(window.FEMC_GAME_LINKS ||= []).push({
  id: 'ann', name: 'Ann Takamaki', short: 'Ann', arcana: 'Lovers', numeral: 'VI', from: 'Persona 5',
  kind: 'visitor',
  romance: 'side',
  starts: '4/24',
  home: { area: 'Paulownia Mall', spot: 'Fountain', slot: 'after', days: [0, 3, 5, 6],
          hint: 'After school on Wednesdays and Fridays, and in the daytime on weekends, by the fountain at Paulownia Mall.' },
  approach: "On the rim of the fountain at Paulownia Mall, a blonde girl in a red jacket is frowning at a half-eaten crepe like it has personally let her down.",
  cast: { boy: 'Boy from the Arcade', vendor: 'Sweets Vendor' },
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
      { s: 'ann', f: 'happy', t: "I'm Ann. Ann Takamaki. I'm here for work, kind of. I model. Part-time, magazines mostly, nothing fancy." },
      { register: 'ann' },
      { s: 'ann', f: 'neutral', t: "They put me up at a hotel by the station. My window looks right into a parking garage. It's very glamorous. I watch a guy in a gray car eat his lunch every day at one." },
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

    { todo: 'Rank 4 (to be written).' },
    { todo: 'Rank 5 (to be written).' },
    { todo: 'Rank 6 (to be written).' },
    { todo: 'Rank 7 (to be written).' },
    { todo: 'Rank 8 (to be written).' },
    { todo: 'Rank 9 (to be written).' },
    { todo: 'Rank 10 (to be written).' }
  ]
});
