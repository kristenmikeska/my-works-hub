/* Leon S. Kennedy · XI Strength. Revamp social link data (femc-game.html). Format: link fields in assets/femc/game/core.js, scene lines in scene.js.
   Visitor (Resident Evil 4), fourth wave (9/5). Friendship (v1's romance is cut). The ending he runs from: the next mission,
   always. Ashley follows him through (rank 2); the Merchant turns up (rank 4); Ada first appears in the green (rank 5).
   Rank 3 sits after 10/4 and stays vague about what happened on the bridge.
   Rank 7 is Kat's matchmaking: Solar sets Leon and Ada up for "a work thing" at a bar and Ada steals the scene and the check.
   It sets off a strangers flashback (the bodyguard she can't touch); fragment strangers-suture-kit (A Suture Kit, the plot's
   new ninth strangers card; the card art doesn't exist yet).
   Cast-only speakers: none (kurosawa, ashley, merchant, ada have portraits). afterMax: scenes for after rank 10 (engine support pending). */
(window.FEMC_GAME_LINKS ||= []).push({
  id: 'leon', name: 'Leon S. Kennedy', short: 'Leon', arcana: 'Strength', numeral: 'XI', from: 'Resident Evil 4',
  kind: 'visitor',
  romance: null,
  starts: '9/7',
  home: { area: 'mall', spot: 'Police Box', slot: 'evening', days: [1, 2, 4, 5],
          hint: "Evenings on Mondays, Tuesdays, Thursdays and Fridays, leaning on the counter of Officer Kurosawa's police box at Paulownia Mall." },
  approach: "A man in a fur-collared leather jacket is leaning on Officer Kurosawa's counter, very politely losing an argument about where a person might buy a gun.",
  cast: {},
  invite: {
    ask: ["You free?", "Kurosawa is ignoring me again. Come keep me company.", "Got time to grab food?", "Found a ramen place that doesn't ask questions. You in?", "Mall's quiet. Too quiet. Want to walk?", "Kurosawa says I'm loitering. Come loiter with me."],
    ok: ["Copy that.", "Good. Police box.", "Roger. I'll be the one in the jacket."],
    no: ["Roger. Another time.", "Copy. Stay safe.", "Understood. Rain check."]
  },
  hangouts: [
    [
      { n: "Leon was teaching Officer Kurosawa a card game. Or Officer Kurosawa was teaching Leon a card game. It was unclear, from the doorway of the police box, which, and both men appeared to be losing." },
      { s: 'kurosawa', f: 'neutral', t: "He cheats." },
      { s: 'leon', f: 'neutral', t: "I adapt. It's different. It's in my file." },
      { choose: [
        { t: "(Pull up a stool and deal yourself in.)", notes: 3, then: [
          { n: "Solar dealt herself in. She won three hands in a row, quietly, with a face like a closed door, and both men stared at her, and then at each other, and then, in a rare moment of international cooperation, at her again." },
          { s: 'leon', f: 'surprised', t: "...Where'd you learn to bluff like that, rookie?" },
          { s: 'solar', f: 'neutral', t: "I don't know." },
          { s: 'kurosawa', f: 'neutral', t: "That's what all the professionals say." }
        ] },
        { t: "Who's winning?", notes: 2, then: [
          { s: 'leon', f: 'neutral', t: "Define winning." },
          { s: 'kurosawa', f: 'neutral', t: "I am." }
        ] }
      ] }
    ],
    [
      { n: "There was a ramen stall behind the station that stayed open until two and asked no questions of anyone, which Leon had found in his first week the way water finds the lowest point in a room, and he sat at the end of its counter most nights with his jacket on and his back to the wall." },
      { s: 'leon', f: 'neutral', t: "Sit where you can see the door. Always. Old habit. Don't pick it up." },
      { choose: [
        { t: "(Sit where you can see the door.)", notes: 3, then: [
          { n: "Solar sat where she could see the door. She'd been going to anyway. She always did. Leon noticed, and his eyebrows went up, and then came down, and he looked at her with an expression like a man finding a familiar tool in a stranger's kitchen." },
          { s: 'leon', f: 'neutral', t: "...Huh. Somebody already taught you that." }
        ] },
        { t: "(Sit with your back to the door, on purpose.)", notes: 2, then: [
          { s: 'leon', f: 'neutral', t: "...That's brave. Or you trust me to watch it. Either way. Okay." }
        ] }
      ] }
    ]
  ],
  ranks: [
    { after: '9/7', title: "1: where's everyone going?", place: 'Paulownia Mall · Police Box', time: 'Evening', scene: [
      { music: 'city' },
      { n: "Officer Kurosawa had a problem, and the problem was leaning on his counter in a leather jacket with a fur collar, asking, with great politeness and total sincerity, where a person might buy a handgun in this city." },
      { s: 'kurosawa', f: 'serious', t: "You can't. That's the point of Japan." },
      { s: 'leon', f: 'neutral', t: "Okay. What about a knife?" },
      { s: 'kurosawa', f: 'serious', t: "Sir." },
      { n: "He was good-looking in an exhausting way, the kind of good-looking that looked like it had been through a great deal and had decided not to talk about any of it. Hair falling into his eyes. A face with the particular calm of somebody who'd already finished being surprised by things, years ago, and had nothing left for this." },
      { n: "Solar had only come in because Kurosawa sometimes had things in the back room for people who knew to ask, and because she'd been told, and because the Port Island side of the green had been bad three nights ago and she'd lost a weapon in it. Kurosawa looked at her with something very close to relief." },
      { s: 'kurosawa', f: 'neutral', t: "He came in at midnight. Covered in green slime. Said he'd shot something with too many legs in a parking garage and wanted to report it. I didn't take the report. You're from that dorm. You know what he's talking about. Vouch for him or I'm calling somebody." },
      { choose: [
        { t: "He's with me.", notes: 3, then: [
          { s: 'leon', f: 'surprised', t: "...I am?" },
          { n: "Solar looked at him. He looked at her, at the uniform, at the way she was standing, weight on the back foot, an eye on the door. Something in his face changed, very slightly, the way a man's face changes when he's recognized a fellow professional in an unlikely coat." },
          { s: 'leon', f: 'neutral', t: "Yes, ma'am. I'm with her." }
        ] },
        { t: "You shot it? With what?", notes: 2, then: [
          { s: 'leon', f: 'neutral', t: "My last six rounds. Then a kick. Then I suplexed it. Didn't love that part." },
          { s: 'kurosawa', f: 'neutral', t: "He's yours. Take him." }
        ] },
        { t: "Officer Kurosawa, I'm sure he means well.", notes: 1, then: [
          { s: 'kurosawa', f: 'neutral', t: "They all mean well. He's yours. Take him before he asks about grenades." }
        ] }
      ] },
      { n: "Outside the police box, under the fountain lights, he introduced himself. Leon. Leon Kennedy. Government agent, he said, in the voice of someone reading it off a card he'd been issued a long time ago. He'd been on a mission. He'd just finished one. A very bad one, on an island, with a lot of people who weren't people anymore." },
      { register: 'leon' },
      { s: 'leon', f: 'neutral', t: "I was on the boat out. Job done. Package delivered. I had about four hours till they'd call with the next one. They always call. And I was standing on the deck thinking, I don't want to pick up." },
      { s: 'leon', f: 'neutral', t: "Next thing I know, everything's green and I'm in a parking garage and there's a kid in a porter's coat standing by the exit, way too big for her. She looks at me like she knows exactly how tired I am. Says, \"There's a policeman in the mall who'll listen.\" Then she says sorry." },
      { s: 'leon', f: 'neutral', t: "I said, for what. She said, \"For the next one.\" And walked off. I've been thinking about that for three days." },
      { ifMet: ['wren'], then: [
        { n: "For the next one. Solar thought of a girl on a bench who watched every train come in and never got on, as though she knew exactly where each of them was going and couldn't bear it. She didn't say anything. Leon was watching her face. He'd clearly been trained to." }
      ] },
      { s: 'leon', f: 'neutral', t: "So. Where's everyone going? At midnight, I mean. The coffins. Bingo night?" },
      { choose: [
        { t: "Nowhere. They stay coffins until one.", notes: 2, then: [
          { s: 'leon', f: 'neutral', t: "...Great. Love that for me." }
        ] },
        { t: "You're taking this very calmly.", notes: 3, then: [
          { s: 'leon', f: 'neutral', t: "This is my third apocalypse. You get a rhythm." },
          { n: "He said it so flatly, so completely without self-pity, that Solar laughed out loud in the middle of Paulownia Mall, and a woman with shopping bags turned to look, and Leon smiled, very slightly, at one corner of his mouth, as if surprised he still knew how." }
        ] }
      ] },
      { n: "She bought him a crepe. Strawberry and cream. He looked at it like he'd been handed a live grenade, and then ate it in four bites standing up, like a man who'd forgotten what it was to eat something that didn't come in a ration pack, and then stood very still for a moment with the empty paper in his hand." },
      { s: 'leon', f: 'neutral', t: "...Thanks, rookie. I'll pay you back. Probably in favors. I'm good at favors." }
    ] },

    { after: '9/21', title: '2: ashley', place: 'Paulownia Mall · Police Box', time: 'Evening', scene: [
      { music: 'city' },
      { n: "The second time Solar found Leon at the police box there was a girl sitting on the counter, swinging her legs, in an orange sweater and a plaid skirt, with short blond hair and the furious energy of a person who has been told to wait somewhere for an extremely long time." },
      { s: 'ashley', f: 'serious', t: "LEON. There is a MALL. A real one. With clothes. And you won't let me go in it." },
      { s: 'leon', f: 'neutral', t: "Last time I let you go somewhere you got kidnapped by a cult." },
      { s: 'ashley', f: 'serious', t: "That was ONE TIME." },
      { s: 'leon', f: 'neutral', t: "It was four times, Ashley." },
      { n: "Ashley Graham. The president's daughter, Leon explained, with the face of a man who had been explaining this for a very long time. His last mission. He'd gone to get her back. He'd got her back. She'd come through on the September moon, in a street in Iwatodai, screaming his name, and a girl in a porter's coat had walked her to the police box by the hand, and said sorry, and let go." },
      { s: 'ashley', f: 'neutral', t: "She was nice. She held my hand the whole way. She had cold hands. She said Leon would be here. She was right. He's always where you need him. It's actually really annoying." },
      { choose: [
        { t: "I'll take her shopping. You can follow us.", notes: 3, then: [
          { s: 'ashley', f: 'happy', t: "OH MY GOD. I love you. Who are you. I love you." },
          { s: 'leon', f: 'neutral', t: "...Fine. But I'm carrying the bags. Bags are cover." }
        ] },
        { t: "Leon. Let the girl have a crepe in peace.", notes: 2, then: [
          { s: 'ashley', f: 'happy', t: "THANK you. Someone with SENSE." },
          { s: 'leon', f: 'neutral', t: "She's had three crepes." }
        ] }
      ] },
      { n: "They went through every store in Paulownia Mall. Ashley tried on everything. Solar told her what looked good, honestly, which Ashley said nobody had ever done before because everybody was scared of her dad. Leon followed three steps behind with eleven bags, scanning every doorway, every reflection, every man who walked too close." },
      { n: "At one point a man bumped into Ashley by accident by the escalator and Leon was between them before Solar had seen him move. Not violent. Just there. A wall in a leather jacket. The man apologized four times and left very fast." },
      { s: 'ashley', f: 'neutral', t: "He does that. It's annoying." },
      { s: 'ashley', f: 'neutral', t: "...It's also kind of the only reason I'm alive. Don't tell him I said that." },
      { choose: [
        { t: "Does he ever stop?", notes: 3, then: [
          { s: 'ashley', f: 'sad', t: "No. That's the thing. He got me home. And they called him the next day with another one. I heard them. He was sitting in the hallway outside my room and the phone rang and he just looked at it." },
          { s: 'ashley', f: 'sad', t: "He looked at it like it was the worst thing in the world. And then he picked it up. He always picks it up." }
        ] },
        { t: "(Hand her a scarf you think she'd like.)", notes: 2, then: [
          { n: "Ashley wrapped it round her neck and looked in the mirror and then, unexpectedly, turned and hugged Solar, hard, and let go, and pretended it hadn't happened, and Leon, three steps behind with the bags, looked at the ceiling with great concentration." }
        ] }
      ] },
      { n: "When they got back to the police box at closing, Ashley fell asleep sitting up on the bench with her head on Leon's shoulder and the bags at her feet, and he didn't move for an hour, and Kurosawa brought him a coffee without being asked, and Leon looked at it, and at the sleeping girl, and at Solar, and said, very quietly, \"This is the first time I've stopped moving since the island,\" and drank it, and didn't move again." }
    ] },

    { after: '10/6', title: '3: raccoon city', place: 'Iwatodai Dorm · Front', time: 'Evening', scene: [
      { music: 'tender' },
      { n: "After the night on the bridge, the dorm went very quiet. Nobody cooked. Nobody turned on the television. People went up and down the stairs as if somebody in the house were sleeping and mustn't be woken." },
      { n: "Solar was sitting on the front steps in the cold with her arms around her knees, not doing anything, not feeling much, looking at the street, when a pair of boots stopped on the pavement in front of her." },
      { s: 'leon', f: 'neutral', t: "Akihiko told me. About the bridge. Some of it. I'm sorry." },
      { n: "He didn't say anything else for a while. He sat down on the step beside her, not too close, and took two cups of instant ramen out of the pockets of his jacket, the kind you add hot water to, and a thermos, and made them both, there on the step, and handed her one with a plastic fork stuck in the top like a flag." },
      { s: 'leon', f: 'neutral', t: "My first day on the job, I was a cop. Raccoon City. I showed up a day late because I'd been out drinking over a breakup. By the time I got there the city was gone." },
      { s: 'leon', f: 'sad', t: "Everyone I was supposed to work with. Dead. In one night. I never even met most of them. I wore one guy's spare uniform for a week." },
      { s: 'leon', f: 'neutral', t: "People told me it gets easier. It doesn't. You just get bigger around it. Like a tree around a nail." },
      { choose: [
        { t: "(Eat the ramen.)", notes: 3, then: [
          { n: "She ate the ramen. It was terrible, and too salty, and hot, and the first thing she'd eaten all day, and she hadn't noticed she was hungry until it was in her, and then she was so hungry it was frightening. Leon watched her eat the whole cup and didn't say anything, and when she was done he made her another one." }
        ] },
        { t: "How do you keep going?", notes: 3, then: [
          { s: 'leon', f: 'neutral', t: "Somebody always needs getting out. So I get them out. Then I do it again." },
          { s: 'leon', f: 'neutral', t: "It's not a great answer. It's the one I've got. Don't take it. Find a better one." }
        ] },
        { t: "I don't want to talk.", notes: 2, then: [
          { s: 'leon', f: 'neutral', t: "Good. Me neither. I'm terrible at it. Eat your ramen." }
        ] }
      ] },
      { s: 'leon', f: 'neutral', t: "You know what I was running from, when I got here? The phone. The next call. Because there's always a next one. Every time I get somebody out, there's somebody else, somewhere, and they call me." },
      { s: 'leon', f: 'sad', t: "And standing on that boat I thought, if the phone just doesn't ring. If I'm just somewhere it can't reach. I'll never have to be a day late again." },
      { choose: [
        { t: "You weren't late tonight.", notes: 3, then: [
          { s: 'leon', f: 'surprised', t: "..." },
          { s: 'leon', f: 'neutral', t: "...No. I guess I wasn't." }
        ] },
        { t: "Everyone's late sometimes.", notes: 1, then: [
          { s: 'leon', f: 'neutral', t: "Yeah. It's the sometimes that gets you." }
        ] }
      ] },
      { n: "He stayed until the streetlights came on. When he left he took off his jacket, the leather one with the fur collar, and put it around her shoulders without asking, and walked off down the street in his shirtsleeves in the October cold, and didn't look back, and came back for the jacket the next morning at seven and pretended he'd forgotten it." }
    ] },

    { after: '10/20', title: "4: what're ya buyin'?", place: 'Port Island Station · Back Alley', time: 'Evening', scene: [
      { music: 'night' },
      { n: "There was a man in the back alley behind Port Island Station who had not been there yesterday and who looked, very firmly, as if he had always been there and always would be." },
      { n: "Long dark coat. A hood. A scarf wrapped over the bottom half of his face. Eyes that glowed, faintly, the way a cat's do in headlights. A little blue torch burning on a crate beside him that didn't seem to need any fuel. And his coat held open, on both sides, like the doors of a cabinet, lined with more weapons than Solar had known came in sizes." },
      { s: 'merchant', f: 'happy', t: "What're ya buyin'?" },
      { s: 'leon', f: 'surprised', t: "...You've got to be kidding me." },
      { s: 'merchant', f: 'happy', t: "Ahhh, stranger. Fancy seein' you here. Got some rare things on sale, stranger." },
      { n: "Leon looked at Solar. Solar looked at Leon. Leon put his face in his hands." },
      { s: 'leon', f: 'neutral', t: "He was in Spain. In the castle. On the island. Every single place I went, he was already there. Waiting. With a torch. I never asked how. I'm not going to ask now." },
      { s: 'merchant', f: 'happy', t: "A little lass in a big coat told me where the custom'd be, stranger. Heh heh heh. Said sorry for the competition." },
      { choose: [
        { t: "Buy him something.", notes: 3, then: [
          { s: 'merchant', f: 'happy', t: "Heh heh heh. Thank you." },
          { n: "She bought him an attaché case. A good one, black leather, with more compartments inside it than it should have had room for, and when she opened it everything you put in it seemed to rearrange itself, neatly, so it fit." },
          { s: 'leon', f: 'surprised', t: "...Best present I ever got. Don't tell Ashley. She'll want one." }
        ] },
        { t: "Do you take yen?", notes: 2, then: [
          { s: 'merchant', f: 'happy', t: "Stranger, I take everything." },
          { s: 'leon', f: 'neutral', t: "That's what I'm afraid of." }
        ] },
        { t: "(Ask about the coat.)", notes: 1, then: [
          { s: 'merchant', f: 'neutral', t: "Not for sale, stranger. Some things you keep." }
        ] }
      ] },
      { s: 'merchant', f: 'neutral', t: "Got somethin' else, stranger. For you. Not for sale." },
      { n: "He held out, on one gloved palm, a small thing. A piece of a jigsaw, wood, painted, with a corner of what might have been a sky on it. Leon looked at it for a long time." },
      { s: 'merchant', f: 'neutral', t: "Found it in the street the night I came through. Fell out of somebody's pocket, I reckon. Somebody who's been runnin' a long time. Thought you'd know what to do with it." },
      { choose: [
        { t: "What does it mean?", notes: 2, then: [
          { s: 'merchant', f: 'happy', t: "Means somebody's missin' a piece, stranger. Heh heh heh. Most folks are." }
        ] },
        { t: "(Let Leon take it.)", notes: 3, then: [
          { n: "Leon took it. He turned it over in his fingers, the little piece of painted sky, and then put it in the inside pocket of his jacket, over his heart, where Solar suspected he kept things he didn't tell anyone about." }
        ] }
      ] },
      { s: 'merchant', f: 'happy', t: "Come back anytime." },
      { n: "When they looked back from the end of the alley, he was gone. There was only a little blue flame, flickering on the empty crate, which went out, politely, as they watched, as if it had been waiting for them to look." }
    ] },

    { after: '11/5', title: '5: the woman in red', place: 'Iwatodai Strip', time: 'The Dark Hour', scene: [
      { place: 'Iwatodai Strip · Rooftops · The Dark Hour', time: 'The Dark Hour' },
      { dark: true },
      { music: 'mystery' },
      { n: "The green hour, and they were on a rooftop above the Strip because Leon had seen a light up there from the street, a flash, like somebody signaling, and had gone up the fire escape three steps at a time without a word, and Solar had followed, because somebody had to, and because she wanted to." },
      { n: "There was a woman standing at the edge of the roof. A red dress, slit at the side, a black harness, heels that had no business on a rooftop and didn't seem to know it. Short dark hair. A grappling gun in one hand, held loosely, the way somebody holds a cigarette. She was looking out over the green city like it was a view she'd paid for." },
      { s: 'ada', f: 'happy', t: "Leon. You look tired." },
      { s: 'leon', f: 'neutral', t: "Ada." },
      { n: "That was all he said. Just her name. But Solar had been reading people her whole life, every life, and she read it, and it said several hundred things, most of them in the past tense, and some of them not." },
      { s: 'ada', f: 'neutral', t: "And who's this? You're collecting strays again." },
      { choose: [
        { t: "I'm the one who keeps him fed.", notes: 2, then: [
          { s: 'ada', f: 'happy', t: "Hm. Somebody should. He forgets. He thinks heroes run on coffee." }
        ] },
        { t: "(Say nothing. Watch her.)", notes: 3, then: [
          { s: 'ada', f: 'happy', t: "Oh, I like her. She watches. You never watch, Leon. You walk straight in." },
          { s: 'leon', f: 'neutral', t: "It's worked so far." },
          { s: 'ada', f: 'neutral', t: "Has it?" }
        ] }
      ] },
      { s: 'leon', f: 'neutral', t: "What are you doing here, Ada?" },
      { s: 'ada', f: 'neutral', t: "Same thing as always. Picking up something that doesn't belong to me." },
      { n: "She held up a case. A black leather attaché case. Leon looked at it, and at his own hand, which was empty, and at Solar, and realized at the same moment she did that it was his. The one from the alley. Which had been in his hand when they started up the fire escape." },
      { s: 'leon', f: 'neutral', t: "...Every single time." },
      { s: 'ada', f: 'happy', t: "Don't worry. I'll give it back. Eventually. I always do. You just never notice when." },
      { s: 'ada', f: 'neutral', t: "A girl in a porter's coat told me you'd be here. Said I'd want to see you. I said I never want to see him, I just keep ending up where he is. She said sorry. I said don't be. It's a terrible habit. I'm attached to it." },
      { n: "Then she stepped off the edge of the roof. Just stepped. The grappling line whipped out into the green and caught on something across the street, and she swung away into the dark between the buildings, and was gone, and the case was gone with her, and Leon stood at the edge of the roof looking at the place where she'd been with his hands at his sides." },
      { s: 'leon', f: 'neutral', t: "...She always does that." },
      { choose: [
        { t: "Who is she?", notes: 2, then: [
          { s: 'leon', f: 'neutral', t: "...A spy. A thief. A liar. The best one I ever met." },
          { s: 'leon', f: 'sad', t: "She's saved my life four times and stolen from me nine. I still don't know whose side she's on. I don't think she does either." }
        ] },
        { t: "You're not angry.", notes: 3, then: [
          { s: 'leon', f: 'neutral', t: "No." },
          { s: 'leon', f: 'sad', t: "I've never once been angry at her. That's the problem. Every time she leaves I just stand there. Like this. Like an idiot on a roof." }
        ] }
      ] },
      { n: "The green drained out of the sky. The city came back, lights and noise and a taxi honking on the Strip below. Leon didn't move from the edge. And Solar, standing a little behind him, noticed what he hadn't yet: on the roof, at the place where Ada had stepped off, set down very neatly on the gravel, was the attaché case. Open. And inside it, on top of everything, a small red rose made of folded paper." }
    ] },

    { after: '11/12', title: '6: the evoker', place: 'Iwatodai Dorm · Command Room', time: 'Evening', scene: [
      { music: 'mystery' },
      { n: "Leon had never seen anyone summon a Persona before." },
      { n: "They were in the command room on the fourth floor, the Dark Hour about to start, because Mitsuru had finally agreed, after a long negotiation conducted entirely in very polite sentences on both sides, that the American agent could observe one night of operations from the room with the monitors, so long as he touched nothing, and Fuuka was at her station, and the others were getting ready, and Solar took the silver gun out of the holster at her hip and checked it, the way she always did, without thinking." },
      { s: 'leon', f: 'serious', t: "...Solar. What is that." },
      { s: 'solar', f: 'neutral', t: "An Evoker. You put it to your head and pull. That's how it works." },
      { n: "She said it plainly, because it was plain, to her, after seven months. She'd forgotten, somewhere along the way, how it looked. She saw it now, in his face. A man who had seen everything. A man on his third apocalypse. Going white." },
      { s: 'leon', f: 'serious', t: "It looks like a real gun." },
      { s: 'leon', f: 'serious', t: "Who decided that? Who decided kids should put that to their heads every night?" },
      { choose: [
        { t: "Nobody decided. It's just how it works here.", notes: 2, then: [
          { s: 'leon', f: 'serious', t: "Somebody always decided. That's how it works everywhere. Somebody in an office with a pen." },
          { n: "Across the room, Mitsuru had gone very still at her desk. She didn't look up. She didn't say anything. Leon glanced at her, once, and something passed between them, two people who had both read files they wished they hadn't, and he looked away first." }
        ] },
        { t: "It helps. It's like facing it. Every time.", notes: 3, then: [
          { s: 'leon', f: 'neutral', t: "...Facing what?" },
          { s: 'solar', f: 'neutral', t: "That I could die. That I'm choosing to go anyway." },
          { n: "He looked at her for a long time. Something in his face went from horror to something much worse, which was recognition." },
          { s: 'leon', f: 'neutral', t: "...Okay. Okay. I don't have to like it. I just have to be here when you do it." }
        ] }
      ] },
      { n: "The clock hit midnight. The room went green. The monitors died and Fuuka's Persona came up around her like a glass bell. And Solar raised the Evoker to her temple, and looked at Leon while she did it, because it seemed only fair, and pulled the trigger." },
      { summon: 'haenim' },
      { n: "When she opened her eyes he was standing very close, closer than he'd been, one hand out, not touching her, just there, the way his hand had been out at the escalator when a man bumped into Ashley. Ready to catch something. He hadn't known he'd moved." },
      { s: 'leon', f: 'surprised', t: "...That's the bravest thing I've ever seen. And I've seen a lot." },
      { s: 'leon', f: 'neutral', t: "You do that every night?" },
      { choose: [
        { t: "Most nights.", notes: 2, then: [
          { s: 'leon', f: 'neutral', t: "...Then I'll be in this room most nights. If your boss lets me. I'm good at standing in rooms." }
        ] },
        { t: "You do something like it every mission.", notes: 3, then: [
          { s: 'leon', f: 'surprised', t: "..." },
          { s: 'leon', f: 'neutral', t: "...Yeah. I guess I do. I just never had to watch somebody else do it." },
          { s: 'leon', f: 'sad', t: "Is this what it looks like? From the outside? God. No wonder everybody I know drinks." }
        ] }
      ] }
    ] },

    { after: '11/26', title: '7: a work thing', place: 'Port Island Station · Hotel Bar', time: 'Evening', scene: [
      { place: 'Port Island Station · Hotel Bar', time: 'Evening', bg: 'hotel-lobby' },
      { music: 'night' },
      { n: "It was a work thing. That was what Solar had told him, and it was not technically a lie, because she had found, over three weeks of evenings at the police box, that Leon would do anything that was framed as work and nothing that was framed as anything else." },
      { n: "She'd found Ada, too. Or Ada had found her. A note in her shoe locker at Gekkoukan, which was impossible, in a hand that leaned like it was in a hurry: You're the one who watches. Hotel bar, Port Island, Thursday, 9. Bring him or don't. — A. And under it, smaller: He won't come if you tell him it's me." },
      { n: "So she'd told him it was a work thing. A contact. Information about the green. He'd put on a clean shirt. He'd shaved. He'd asked her twice whether the contact was dangerous, and she'd said very, and that had seemed to reassure him enormously." },
      { n: "The hotel bar was dark wood and low lamps and a piano nobody was playing, and Ada was already there, at the far end, in a red dress, with two drinks in front of her, one of which she pushed an inch toward the empty stool as Leon came through the door." },
      { s: 'leon', f: 'serious', t: "...Solar." },
      { s: 'solar', f: 'neutral', t: "It's a work thing." },
      { s: 'leon', f: 'serious', t: "It's a setup." },
      { s: 'ada', f: 'happy', t: "It's both, handsome. Most good things are. Sit down. She went to a lot of trouble. She put a note in my coat pocket while I was stealing your case. I didn't feel a thing. I'm almost impressed." },
      { choose: [
        { t: "(Leave them to it. Sit at the other end of the bar.)", notes: 3, then: [
          { n: "Solar went and sat at the other end of the bar, three stools from the piano, where she could see them in the mirror behind the bottles without looking at them directly, and ordered a glass of orange juice from a bartender who gave her a long look and poured it anyway." }
        ] },
        { t: "Ten minutes. Just talk. Not about a mission.", notes: 2, then: [
          { s: 'leon', f: 'neutral', t: "...We don't know how to do that." },
          { s: 'ada', f: 'happy', t: "Speak for yourself. I can talk about anything. I just choose not to." },
          { n: "Solar went and sat at the other end of the bar where she could see them in the mirror behind the bottles." }
        ] }
      ] },
      { n: "It was terrible at first. They sat with a stool's width between them and talked about the green like it was a briefing. Leon asked who she was working for. Ada asked if he'd been eating. He said yes. She said liar. He asked what she'd taken from the case. She said nothing he'd miss. He said that wasn't an answer. She said it was the only kind she gave." },
      { n: "And Solar watched them in the mirror, two people who could not touch each other, could not trust each other, could not stop turning up at the same rooftops at midnight, and the bar went dim around her, and dimmer, and the mirror stopped being a mirror." },
      { bg: 'flashback-lee-house' },
      { dark: true },
      { music: 'mystery' },
      { n: "A hallway at night in a big old house. Her door, and across from it, ten meters down the hall, another door, open a crack, with a light on behind it. Somebody sleeping there. Somebody whose whole job was to keep her alive until a date somebody else had set. Who was not allowed to come any closer than that door. Who she was not allowed to touch." },
      { n: "And she hadn't. And she had. A makeup bag, a good one, quilted, with a gold clasp, and inside it not makeup but thread and a curved needle and a bottle of iodine. Her thumb, afterward, stained yellow-brown at the edge of the nail. Painting over it in the morning with dark polish, carefully, two coats, so nobody at breakfast would see where her hands had been." },
      { n: "The one you can't trust and can't stop meeting. The one standing ten meters down the hall, every night, pretending he wasn't listening for her door." },
      { fragment: 'strangers-suture-kit' },
      { bg: 'hotel-lobby' },
      { dark: false },
      { music: 'night' },
      { n: "The bar came back. The low lamps. The orange juice, untouched, sweating a ring onto the wood. Solar looked down at her own right thumb, at the edge of the nail, and there was nothing there. Clean. She looked at it anyway for a long time, turning her hand in the lamplight, as if the stain might come up if she waited." },
      { n: "In the mirror, something had changed at the far end of the bar. The stool between them was empty now. Leon had moved. Or Ada had. Their shoulders were almost touching. Leon was talking, low, and Ada wasn't interrupting, which Solar suspected was rarer than an eclipse, and she was looking at his face, not at the room, not at the door, for once not at the door." },
      { n: "Then Ada stood up. She put a hand on Leon's shoulder, just for a second, light, the way you'd touch something to make sure it was real. She said something in his ear. And she walked out of the bar without looking back, and on her way past Solar's end she put a folded note down beside the orange juice without breaking stride." },
      { n: "The note was in the same hurried hand. Thanks for the work thing. I took care of the check. Both of them. Tell him I said goodnight properly this time. He'll know what that means. — A." },
      { choose: [
        { t: "(Take the note to Leon.)", notes: 3, then: [
          { n: "Solar took it down the bar. Leon read it. He read it twice. Then he put his face in his hands, and his shoulders shook, and it took Solar a moment to understand he was laughing." },
          { s: 'leon', f: 'happy', t: "She paid. She PAID. In twenty years she's never once paid for anything. She's stolen four of my wallets." },
          { s: 'leon', f: 'neutral', t: "...She said goodnight. She never says goodnight. She just goes. Every time. She said it this time. Out loud." }
        ] },
        { t: "(Leave it with him and go.)", notes: 2, then: [
          { n: "Solar slid the note down the bar to him and went out into the cold. She heard, as the door swung shut behind her, a sound she'd never heard Leon make, short and surprised and helpless. A laugh. Over a piece of paper." }
        ] }
      ] },
      { s: 'leon', f: 'neutral', t: "You set me up, rookie." },
      { s: 'leon', f: 'neutral', t: "...Thanks. I don't know what happens with her. I never know. But that's the first time in twenty years she's walked out of a room and I didn't feel like I'd lost something." },
      { s: 'leon', f: 'neutral', t: "Where'd you go, by the way? In the middle. You were looking at your thumb like it was a crime scene." }
    ] },

    { after: '12/10', title: '8: the bar', place: 'Paulownia Mall · Club Escapade', time: 'Evening', scene: [
      { music: 'night' },
      { n: "He was at the bar of Club Escapade on a Thursday night, alone, with a glass of something brown in front of him that he wasn't drinking. Just looking at. The way you'd look at a door you'd decided not to open, every night, for a very long time." },
      { s: 'leon', f: 'neutral', t: "Hey, rookie. You're too young for this place." },
      { s: 'solar', f: 'neutral', t: "So are you." },
      { s: 'leon', f: 'neutral', t: "...Fair." },
      { n: "She sat down beside him. He pushed the glass an inch away from himself, and then another inch, and then left it there, sweating, between them on the bar." },
      { s: 'leon', f: 'neutral', t: "Some nights the drink's the only thing that turns it off. The noise. I know that's not good. I'm not stupid. I'm just tired." },
      { s: 'leon', f: 'neutral', t: "Elizabeth found me. The lady with the book. She said the doors open at the end of January. Everybody goes home. And I've been sitting here every night since, looking at this, thinking about the phone." },
      { s: 'leon', f: 'serious', t: "It's going to ring. The minute I'm back. Next mission. Somebody else's kid. Some other island. And I'm going to pick it up, because I always do, because if I don't, somebody's late." },
      { s: 'leon', f: 'neutral', t: "Here's the thing. Your green hour ends in January too. And then what? You get to stop, right? Go home. Wherever that is. Be a kid. Not carry the gun." },
      { s: 'leon', f: 'sad', t: "Because I never got to. And I'd really like one of us to." },
      { choose: [
        { t: "You're allowed to stop too, Leon.", notes: 3, then: [
          { s: 'leon', f: 'surprised', t: "..." },
          { s: 'leon', f: 'neutral', t: "...Nobody's ever told me that. Not once. In twenty years. Huh." }
        ] },
        { t: "Then come with me. We'll both try.", notes: 3, then: [
          { s: 'leon', f: 'neutral', t: "Yeah. Okay. We'll both try. Me in my world, you in yours. Deal." },
          { s: 'leon', f: 'neutral', t: "Wherever yours is." }
        ] },
        { t: "I don't know if I get to stop either.", notes: 2, then: [
          { s: 'leon', f: 'neutral', t: "...Yeah. I figured. You've got the look. Somebody's going to call you too, aren't they. More than one somebody." }
        ] }
      ] },
      { s: 'leon', f: 'neutral', t: "I'm going to pick it up. The phone. I already know I am. I'm not going to pretend I'm not." },
      { s: 'leon', f: 'neutral', t: "But I'm going to make a call too. After. Every time. To somebody. Ashley. Claire. My old captain. Anybody. Just to say I'm out. Just so somebody knows I got out." },
      { s: 'leon', f: 'neutral', t: "That's new. That's your fault. I'm blaming you." },
      { choose: [
        { t: "Call me. I'll pick up.", notes: 3, then: [
          { s: 'leon', f: 'neutral', t: "...Across a hole in the universe? On a phone that folds?" },
          { s: 'solar', f: 'neutral', t: "I'll pick up." },
          { s: 'leon', f: 'neutral', t: "...Yeah. I believe you would. That's the scary part." }
        ] },
        { t: "Call Ada.", notes: 2, then: [
          { s: 'leon', f: 'neutral', t: "Ada doesn't have a number. Ada has a habit of being in the room when you turn around." },
          { s: 'leon', f: 'neutral', t: "...I'll leave a message on a rooftop. She'll find it." }
        ] },
        { t: "That's a good plan.", notes: 1, then: [
          { s: 'leon', f: 'neutral', t: "It's a plan. Good's pushing it." }
        ] }
      ] },
      { n: "He left the drink on the bar, full. When they walked out into the cold he looked back at it once, through the club window, sitting there under the blue light, and then he put his hands in his jacket pockets and walked her home to the dorm, and on the step, before he left, he said, \"Goodnight, rookie. Properly,\" and went." }
    ] },

    { after: '12/22', title: '9: partner', place: 'Paulownia Mall', time: 'Evening', scene: [
      { music: 'tender' },
      { n: "The mall was full of Christmas lights, gold and white, hanging in loops over the fountain where Ashley had made them stand for a photograph, and then made them wear Santa hats for a second photograph, and then announced, very loudly, that she was going to look at shoes for exactly one hour, alone, and that nobody was to follow her, Leon, NOBODY." },
      { s: 'leon', f: 'neutral', t: "...She's subtle." },
      { s: 'leon', f: 'neutral', t: "Look. I'm bad at this. Every time I care about somebody, it goes sideways. People leave. People get taken. People turn out to be working for the other side." },
      { s: 'leon', f: 'neutral', t: "You've never once done any of that. You just keep showing up. With food. And setups. And that stupid gun you put to your head every night." },
      { s: 'leon', f: 'neutral', t: "So I need to know. Before I go home and the phone rings. What is this?" },
      { choose: [
        { t: "You're my partner, Leon.", notes: 3, then: [
          { s: 'leon', f: 'surprised', t: "...Partner." },
          { s: 'leon', f: 'happy', t: "Yeah. I like that. Haven't had a real one since Claire. Don't make me regret it, rookie." }
        ] },
        { t: "You're the one who gets there in time.", notes: 3, then: [
          { s: 'leon', f: 'neutral', t: "...I'm a day late to everything, rookie. It's my whole thing." },
          { s: 'solar', f: 'neutral', t: "Not to the dorm steps. Not to the command room. Not once." },
          { n: "He looked at her for a long time under the gold lights with the Santa hat crooked on his head, and something in his face came down, a wall, a very old one, a few bricks at a time." }
        ] },
        { t: "Family. The kind you pick.", notes: 2, then: [
          { s: 'leon', f: 'neutral', t: "...Family. Yeah. I never had much of the regular kind. The picked kind's been better." }
        ] }
      ] },
      { s: 'leon', f: 'neutral', t: "Ashley's going home with me. When the doors open. And Ada... I don't know where Ada goes. Ada goes where Ada goes. But she said goodnight. I keep coming back to that." },
      { s: 'leon', f: 'neutral', t: "I'm going home to the phone, rookie. I'm going to pick it up. I'm going to go get somebody out. Because that's what I'm for. I decided that a long time ago, on a road outside Raccoon City, and I'm not undeciding it." },
      { s: 'leon', f: 'neutral', t: "But I'm going home choosing it. Not running from it. That's what you gave me. I didn't know there was a difference." },
      { choose: [
        { t: "(Fix his Santa hat.)", notes: 3, then: [
          { n: "Solar reached up and fixed his Santa hat, which had slid down over one ear, and he let her, and stood very still while she did it, the way he'd stood in the police box with Ashley asleep on his shoulder, like someone who had forgotten what it was like to be looked after and was trying not to frighten it away." },
          { s: 'leon', f: 'happy', t: "...Thanks, partner." }
        ] },
        { t: "Ashley's coming back.", notes: 2, then: [
          { s: 'leon', f: 'neutral', t: "She's been watching us from behind the shoe store pillar for forty minutes. She thinks I don't know. I've let her think it." }
        ] }
      ] },
      { n: "Ashley came back exactly one hour later with four bags and no shoes and an expression of enormous, shameless hope, and looked at them both, and Leon said, \"Partners,\" before she could ask, and she looked at Solar, and Solar nodded, and Ashley said \"Oh, THAT'S even better,\" and hugged them both at once, bags and all, under the gold lights by the fountain." }
    ] },

    { after: '12/29', title: '10: rookie', place: 'Paulownia Mall · Police Box', time: 'Evening', scene: [
      { music: 'tender' },
      { n: "The last days of the year, the snow coming down in soft slow flakes over Paulownia Mall, the shops closing early, the fountain switched off and full of white. Officer Kurosawa looked up from his desk as Solar came in out of the cold." },
      { s: 'kurosawa', f: 'neutral', t: "He's been here since four. Waiting for you. Hasn't asked about a single gun. I'm worried about him. Take him." },
      { n: "Leon walked her out to the dry fountain and stopped in the snow, and took something out of the inside pocket of his jacket, the one over his heart, where he kept things. A small leather wallet, worn soft. He opened it. A badge. A police badge, old, the metal scratched, the department name half rubbed away." },
      { s: 'leon', f: 'neutral', t: "My first badge. From my first day. The worst day of my life." },
      { s: 'leon', f: 'neutral', t: "I kept it because I thought I had to remember. Every single person I was too late for. I carried it on every mission. Spain. The island. Everywhere." },
      { s: 'leon', f: 'neutral', t: "Turns out I don't need it to remember. I remember fine. I needed it to punish myself. And I think I'm done with that part." },
      { s: 'leon', f: 'neutral', t: "You should have it. Because you're the reason I've got better days to carry instead." },
      { choose: [
        { t: "Officer Solar, reporting for duty.", notes: 3, then: [
          { s: 'leon', f: 'happy', t: "God help us all. Welcome to the force, rookie." }
        ] },
        { t: "I'll keep it safe.", notes: 3, then: [
          { s: 'leon', f: 'neutral', t: "I know you will. That's the whole point." }
        ] },
        { t: "(Pin it back on his jacket instead.)", notes: 2, then: [
          { n: "Solar took the badge out of the wallet and pinned it to the inside of his jacket, over his heart, where nobody would see it, and pressed it flat with her thumb." },
          { s: 'solar', f: 'neutral', t: "Not to punish yourself. To remember you showed up. Even late. You showed up." },
          { s: 'leon', f: 'surprised', t: "...Yeah. Okay. I'm never going to forget that." }
        ] }
      ] },
      { n: "Ashley came back from the convenience store with four bags of snacks for the train home that didn't exist yet, and the merchant's little blue torch was flickering, very briefly, at the mouth of the alley behind the police box, and went out, as if somebody had come to say goodbye and thought better of making a fuss." },
      { s: 'leon', f: 'neutral', t: "When I get home, the phone's going to ring. And I'm going to pick it up. And I'm going to go." },
      { s: 'leon', f: 'neutral', t: "And when it's done, I'm going to call somebody. Every time. And some nights, rookie, I'm going to sit on some stranger's steps with two cups of terrible ramen and think, somewhere there's a kid in a dorm who put a gun to her head every night and still told me I was allowed to stop." },
      { choose: [
        { t: "You are. Whenever you want.", notes: 3, then: [
          { s: 'leon', f: 'neutral', t: "...Yeah. I know. I just don't want to yet. That's different too. That's new." }
        ] },
        { t: "Come home in one piece.", notes: 3, then: [
          { s: 'leon', f: 'happy', t: "Always do. Mostly. A few dents. That's the job." },
          { s: 'leon', f: 'neutral', t: "...You too, partner. Whichever home." }
        ] }
      ] },
      { n: "They stood in the falling snow by the empty fountain, the agent and the rookie and the president's daughter eating chips out of a bag, and Officer Kurosawa watched them through the window of the police box with his chin on his hand, and, very slowly, against every regulation, smiled." }
    ] }
  ],
  afterMax: [
    { title: 'the second question', place: 'Paulownia Mall · Police Box', scene: [
      { music: 'city' },
      { n: "Leon had decided that before he went home he would learn to ask a second question. Not where's the exit, or who's in charge, or is anybody hurt. A second one. After the first. The kind people asked when they actually wanted to know." },
      { s: 'leon', f: 'neutral', t: "Okay. Practice. How was your day, rookie." },
      { s: 'solar', f: 'neutral', t: "Fine." },
      { s: 'leon', f: 'neutral', t: "...And what was the best part of it." },
      { choose: [
        { t: "This, actually.", notes: 3, then: [
          { s: 'leon', f: 'surprised', t: "...Okay. That's a good answer. That worked. Is that how it works? You ask and then people just tell you?" },
          { s: 'kurosawa', f: 'neutral', t: "Usually they lie. You got lucky." }
        ] },
        { t: "What was yours?", notes: 2, then: [
          { s: 'leon', f: 'neutral', t: "...Kurosawa let me hold the stamp. For the forms. Don't laugh." }
        ] }
      ] }
    ] },
    { title: 'one song', place: 'Port Island Station · Hotel Bar', scene: [
      { place: 'Port Island Station · Hotel Bar', time: 'Evening', bg: 'hotel-lobby', soft: true },
      { music: 'night' },
      { n: "There was a piano in the hotel bar on the Port Island side. Ada had left a note in Solar's shoe locker again. It said Thursday. Bring him. I won't steal anything. Probably. — A." },
      { n: "Leon sat at the bar with a glass of water, not the brown thing, and Ada sat at the piano, which she apparently played, beautifully, and played one song, something old and slow with a lot of space in it, and never once looked up from the keys, and Leon never once looked away from her hands." },
      { choose: [
        { t: "(Leave before the song ends.)", notes: 3, then: [
          { n: "Solar left before the song ended. She heard the last chord through the closing door, and then nothing, and then, very faintly, Leon's voice saying something, and Ada laughing, low, and the piano starting again, from the top." }
        ] },
        { t: "(Stay and listen.)", notes: 2, then: [
          { n: "She stayed. When it ended Ada stood up, and walked past Leon, and touched his shoulder, and walked past Solar, and touched hers, too, very lightly, and said \"goodnight\" to both of them, out loud, properly, and went." }
        ] }
      ] }
    ] }
  ]
});
