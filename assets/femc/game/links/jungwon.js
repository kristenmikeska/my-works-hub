/* Yang Jungwon · V The Hierophant. Revamp social link data (femc-game.html). Format: link fields in assets/femc/game/core.js, scene lines in scene.js.
   Searcher, canon romance (Hoax + strangers). One boy carrying two lives: Hamlim's overworked student council president
   who forgets to eat and tutors everyone but himself (Hoax), and the heir with formal speech, a dead brother's watch,
   no scent and a face that goes still when he's actually pleased (strangers). The tell in both: the angrier he gets,
   the more polite. He knows two of her surnames and keeps almost saying one. Every rank lets Solar lean (tally
   jungwon.H / jungwon.S, plot doc §9, §12). His crossing (10/14, council room door, "It's you.") is a story event; rank 1
   is the first afternoon after it. He awakens on 11/28 (story); ranks 7+ come after.
   Fragments: hoax-president-pin (rank 6, plot doc §8 H8), hoax-math-homework (rank 8, ★ new card, §8 H9).
   Romance stays at hands, foreheads and a kiss on the cheek (plot doc §9). No banmal from him here (Kat's call, §16.13).
   Romance turn at rank 8, before Christmas. Arcana Hierophant is v1's; searcher arcana are open (§16.6).
   afterMax and christmas use v1's field shapes; the revamp engine doesn't play them yet. */
(window.FEMC_GAME_LINKS ||= []).push({
  id: 'jungwon', name: 'Yang Jungwon', short: 'Jungwon', arcana: 'Hierophant', numeral: 'V', from: 'Hoax · strangers',
  kind: 'searcher', world: 'HS', romance: 'canon',
  starts: '10/14', gate: { H: 4, S: 3 },
  home: { area: 'gekkoukan', spot: 'Student Council Room', slot: 'after', days: [1, 2, 3, 4, 5],
          hint: 'After school on weekdays, in the student council room, long after the meeting ends.' },
  approach: "The light in the student council room is still on long after the meeting ended. A boy in a navy blazer that isn't Gekkoukan's is sitting under the bulletin board with a red pen, and he looks up at the door like he's been expecting a vote.",
  cast: {},
  invite: {
    ask: ["are you free. the council room has heat and nobody in it", "i need someone to check my math. it's right. i need someone to tell me it's right", "i haven't eaten. sunoo would want me to tell someone. i'm telling you", "are you busy. i'm not. that's concerning", "your president left me the budget. come be a witness", "i made a schedule. there's a gap at 4:00. it's labeled solar", "the vending machine on 3 has melon pan now. i made a formal request. it worked"],
    ok: ["ok. i'll clear your end of the table", "good. 4:00. i wrote it down", "ok. i already got you a drink. it's getting warm"],
    no: ["ok. i'll be here anyway", "that's fine. i have eleven other things", "ok. i'll move you to tomorrow. in pencil"]
  },
  hangouts: [
    [
      { n: "Mitsuru had, in what Solar suspected was either trust or surrender, given him the club binders. All of them. Twenty-two clubs, twenty-two binders, fanned out across the long table in an order that made sense to nobody but him, tabbed in colors from a pack he had very clearly gone out and bought with his own money." },
      { s: 'jungwon', f: 'neutral', t: "Read me the totals. Only the totals. I'll tell you when to stop." },
      { choose: [
        { t: "(Read them like election results.)", notes: 3, tally: { 'jungwon.H': 1 }, then: [
          { n: "She read the kendo club's total like a winning number at a podium. He didn't laugh. His mouth did something at one corner that was much worse than laughing, and by the photography club he'd had to put his pen down." },
          { s: 'jungwon', f: 'happy', t: "Stop. No. Keep going. I hate it. Keep going." }
        ] },
        { t: "(Read them exactly, to the yen.)", notes: 2, tally: { 'jungwon.S': 1 }, then: [
          { s: 'jungwon', f: 'neutral', t: "Thank you. You don't round." },
          { n: "He said it the way someone else might say *you have nice hands*, and wrote the next figure down very neatly." }
        ] },
        { t: "Isn't this Mitsuru's job?", notes: 1, then: [
          { s: 'jungwon', f: 'serious', t: "It's everyone's job. That's the part nobody tells you." }
        ] }
      ] },
      { n: "They finished at six. Every binder balanced except the occult club's, which was off by exactly six hundred and sixty-six yen, and he looked at it for a long moment and then wrote, in very small letters in the margin, *no.*" }
    ],
    [
      { n: "She'd started bringing food. It wasn't a decision, per se. It was more that she kept finding herself at the bakery by the station with two melon pans in a paper bag and no memory of deciding on the second one." },
      { n: "He took it without looking up, the way he took every paper anyone handed him, and set it on the corner of the table, where it would sit, she knew from experience, until it was a fossil." },
      { s: 'jungwon', f: 'neutral', t: "Thank you. After this page." },
      { choose: [
        { t: "(Take the pen out of his hand.)", notes: 3, then: [
          { n: "She took the pen. He looked at his empty hand like it had defected, and then at her, and then, with enormous dignity, at the melon pan." },
          { s: 'jungwon', f: 'flustered', t: "Fine. Fine. You're worse than Sunoo. You're worse than Sunoo at home and you're worse than Sunoo here." },
          { n: "He ate it in four bites. She gave the pen back. He didn't pick it up again for almost a whole minute, which she decided to count." }
        ] },
        { t: "That's what you said three pages ago.", notes: 2, then: [
          { s: 'jungwon', f: 'serious', t: "And I meant it three pages ago." }
        ] },
        { t: "(Eat yours loudly, at him.)", notes: 2, then: [
          { n: "She ate hers as loudly as a person can eat bread, which is not very, and he lasted until her second bite before he set the pen down with the sigh of a man conceding a count." }
        ] }
      ] },
      { n: "Afterward he brushed the crumbs off the budget into his palm and carried them to the bin, carefully, and she watched him do it and thought somebody, somewhere, had raised him to leave every room cleaner than he found it, and had never once mentioned he was allowed to sit down." }
    ],
    [
      { n: "He was rehearsing a speech when she came in, standing at the head of the long table with one hand flat on it, addressing twelve empty chairs and a potted plant on the subject of cafeteria pricing." },
      { s: 'jungwon', f: 'serious', t: "Don't stop me. I have four minutes left and I lose the thread if I stop." },
      { choose: [
        { t: "(Sit in the front row and nod at everything, very gravely.)", notes: 3, tally: { 'jungwon.H': 1 }, then: [
          { n: "She nodded at the part about fair pricing and the part about vegetarian options and, gravely, at the part about the vending machine on the third floor, and somewhere around the vending machine he started trying not to smile and lost." },
          { s: 'jungwon', f: 'happy', t: "You're a terrible audience. You're the best audience I've ever had. Both. You've always been both." }
        ] },
        { t: "Boo.", notes: 2, then: [
          { s: 'jungwon', f: 'surprised', t: "Did you just boo me?" },
          { n: "He finished the speech anyway, louder, glaring at her over the plant like it was a debate, and it was the best she'd heard him do it." }
        ] },
        { t: "Who's it for? You don't go here.", notes: 1, then: [
          { s: 'jungwon', f: 'sad', t: "I know. Habit." },
          { n: "He sat down. He didn't finish it." }
        ] }
      ] }
    ],
    [
      { n: "Someone had to carry the box of old ballots down to the storeroom, and Jungwon, who could not allow anything to be decided by anything less than a fair and transparent process, proposed rock-paper-scissors." },
      { n: "He lost. He proposed best of three. He lost. He proposed, with a face like a closed door, best of eleven." },
      { s: 'jungwon', f: 'serious', t: "You're reading me. Stop reading me. You've always read me. It's unsporting." },
      { choose: [
        { t: "(Throw rock. You've thrown rock every single time.)", notes: 3, then: [
          { n: "She threw rock. He threw scissors, again, because he'd been so certain she'd switch that he'd switched himself, and he stared at his own hand like it had testified against him." },
          { s: 'jungwon', f: 'flustered', t: "I overthought it. I've never in my life underthought something." }
        ] },
        { t: "Let's just carry it together.", notes: 2, then: [
          { s: 'jungwon', f: 'neutral', t: "That's not a process." },
          { s: 'jungwon', f: 'happy', t: "...It's a good process. Motion carried." }
        ] }
      ] },
      { n: "He carried the box. He insisted. Going down the stairs ahead of her he looked like somebody quietly glad to have lost at something that didn't matter, for once, in front of someone who wouldn't write it down." }
    ]
  ],
  ranks: [
    { after: '10/15', title: '1: minutes', place: 'Gekkoukan High · Student Council Room', time: 'After School', scene: [
      { n: "The first afternoon after a boy had come through the student council room and looked at her like a ballot he'd been counting all night, Solar went back to the student council room, because she couldn't think about anything else and had decided, around fourth period, that she might as well not think about it somewhere specific." },
      { n: "Mitsuru had given him a key. Mitsuru had said, in the lounge, very evenly, that she would rather know where he was than where he wasn't, and that he had offered to proofread the athletic budget in exchange for a desk, and that she had accepted, and that she did not want to discuss why she had accepted. Junpei had wanted to discuss it a great deal." },
      { n: "He was at the long table with his back very straight and his sleeves pushed exactly to the elbow. Navy blazer, a crest she didn't know. Dark hair a little too long at the front. A red pen, and a notebook, and he was writing in it steadily with the focus of a person taking down every word of a meeting, and there was nobody else in the room." },
      { n: "He stood up when she came in. Not quickly. Correctly, the way you'd stand for a teacher, and bowed, a precise short bow from the waist, and when he came up out of it his face had a smile on it with two deep dimples, sweet and polite and absolutely nothing behind them at all." },
      { s: 'jungwon', f: 'happy', t: "Good afternoon. Would you like to sit down?" },
      { register: 'jungwon' },
      { n: "The night he came through he'd said *it's you*, and the floor had gone out from under his voice, and then he'd looked at her face and watched her not know him, and something had happened behind his eyes like a door closing quietly in a long hallway. And then he'd gotten polite. He'd gotten more polite every minute after that, until by the time Mitsuru arrived he was the most courteous person Solar had ever met in her life, and she'd understood, without knowing how, that it was the worst thing that could have happened to his face." },
      { choose: [
        { t: "(Sit across from him.)", notes: 3, then: [
          { n: "She sat across the table. He sat when she sat, not before. He capped the red pen and laid it parallel to the edge of the notebook, and folded his hands, and waited, the way a person waits who has a great deal of practice waiting for other people to finish deciding things." }
        ] },
        { t: "You don't have to be polite to me.", notes: 2, then: [
          { s: 'jungwon', f: 'happy', t: "I'm not being anything. I'm being normal." },
          { n: "The dimples deepened. She had the strongest feeling she'd just made it worse." }
        ] },
        { t: "What are you writing? There's nobody here.", notes: 2, then: [
          { s: 'jungwon', f: 'neutral', t: "Minutes." },
          { s: 'jungwon', f: 'neutral', t: "I take minutes. When I don't know what else to do with my hands, I take minutes. It's a meeting if I say it is." }
        ] }
      ] },
      { s: 'jungwon', f: 'neutral', t: "Have you eaten?" },
      { n: "It was such a strange question to be asked by him, of all people, that she laughed before she could decide not to, and he looked at her laughing like he was watching someone walk across a bridge he'd been told was out." },
      { s: 'solar', f: 'neutral', t: "Why is that funny? Why is it funny that you asked me that?" },
      { s: 'jungwon', f: 'neutral', t: "Because people usually ask me. Constantly. I have a friend who asks me eleven times a day. I don't answer him." },
      { s: 'jungwon', f: 'serious', t: "You used to ask too. You were meaner about it." },
      { n: "He said it lightly. He touched the watch on his left wrist while he said it, a heavy steel watch, too old for him, too big for him, and she saw that the second hand wasn't moving. It had stopped. It sat on the eleven like it was waiting to be let go." },
      { n: "Her math homework was in her bag. She knew it was in her bag because she'd been carrying it around for two days like a stone, and she took it out, because she needed to do something with her hands too, and he looked at it upside down across the table and his whole face changed." },
      { s: 'jungwon', f: 'serious', t: "...Number four. You carried the sign wrong." },
      { s: 'solar', f: 'neutral', t: "I didn't—" },
      { s: 'jungwon', f: 'serious', t: "You did. You always carry it wrong. You do it right in your head and then you write it down and something in your hand gets nervous and flips it. You did it on the—" },
      { n: "He stopped. He capped and uncapped the pen. The dimples were gone, and what was left of his face was very still and very young." },
      { s: 'jungwon', f: 'neutral', t: "I'm sorry. That was rude." },
      { choose: [
        { t: "Show me. Where I flip it.", notes: 3, tally: { 'jungwon.H': 1 }, then: [
          { n: "He came around the table and sat beside her, not too close, and took the worksheet, and talked her through number four in a low, even, patient voice, and when she did it right he didn't say anything. He just put a small neat tick in the margin in red, the kind of tick that took up exactly as much room as it needed to." },
          { n: "She looked at the tick for much longer than it deserved. Somebody had made that tick on her homework before. She knew the shape of it like her own handwriting." }
        ] },
        { t: "You don't have to apologize. I'm the one who doesn't—", notes: 3, tally: { 'jungwon.S': 1 }, then: [
          { s: 'jungwon', f: 'neutral', t: "Please don't." },
          { n: "He said it so quietly, so formally, with such perfect courtesy, that it landed like a door shut in her face, and she understood that he'd meant it to stop the sentence before she could finish it, and that he'd been afraid of the end of it." },
          { s: 'jungwon', f: 'neutral', t: "You don't have to finish that. I heard it the first time. Thank you." }
        ] },
        { t: "Were you this annoying at home?", notes: 2, then: [
          { s: 'jungwon', f: 'surprised', t: "..." },
          { s: 'jungwon', f: 'happy', t: "Worse. You'd know. You told me so, in front of the whole school, into a microphone." }
        ] }
      ] },
      { n: "When she left, the sun had gone long and orange across the table. He stood when she stood. He bowed when she bowed, even though she'd only done it because he had, and she saw him open the notebook again before she was out the door." },
      { n: "She looked back once through the little window. He'd written something at the top of the page. *Present:* and his own name, in neat print, and then hers, and a surname in front of it that he'd crossed out so thoroughly with the red pen that the paper had torn." }
    ] },

    { after: '10/24', title: '2: two presidents', place: 'Gekkoukan High · Student Council Room', time: 'After School', scene: [
      { n: "It was the Saturday after midterms, and the school had the tired, scrubbed feeling of a building that had just been made to sit a test itself. Mitsuru was in the council room when Solar got there, which happened about as often as a solar eclipse, standing at the window with a folder held against her chest, and across the table from her, standing too, because she was standing, was Jungwon." },
      { n: "They were talking about the athletic budget. They were talking about it the way two people play a game of chess at a park table while the old men watch, slowly, courteously, each of them giving the other just enough room to make a mistake." },
      { s: 'mitsuru', f: 'neutral', t: "Your revisions are thorough. Thorough enough that I'm going to have to explain to the kendo club why their new bogu came out of the photography club's film budget." },
      { s: 'jungwon', f: 'happy', t: "The photography club hasn't bought film since March. They use their phones. I checked their receipts. They were very happy to show me." },
      { s: 'mitsuru', f: 'neutral', t: "...I see." },
      { n: "Mitsuru looked at Solar in the doorway with an expression that might, in someone less disciplined, have been the beginning of an eye-roll, and then looked back at Jungwon with something else entirely, something cool and level and almost kind." },
      { s: 'mitsuru', f: 'neutral', t: "Were you elected? Where you're from?" },
      { s: 'jungwon', f: 'neutral', t: "Twice. Unopposed, the first time." },
      { s: 'jungwon', f: 'neutral', t: "Not the second." },
      { n: "His eyes moved to Solar and away so fast she might have imagined it. Mitsuru didn't imagine it. Mitsuru, Solar was fairly sure, had never imagined anything in her life." },
      { s: 'mitsuru', f: 'neutral', t: "And the other thing? You're someone's heir. It's in how you stand." },
      { n: "The room got very quiet. Jungwon smiled, and the dimples came back, sweet and deep and empty, and he bowed his head very slightly to her the way you'd bow to someone at a funeral." },
      { s: 'jungwon', f: 'happy', t: "You're very perceptive, Kirijo-san. So are you." },
      { s: 'mitsuru', f: 'neutral', t: "Did you choose it?" },
      { s: 'jungwon', f: 'happy', t: "No. Did you?" },
      { n: "Mitsuru held his eyes for a long second. Then she set the folder on the table, squared it with two fingers, and went to the door, and on her way past Solar she touched her elbow, lightly, which she had done exactly once before, on the night of the armband." },
      { s: 'mitsuru', f: 'neutral', t: "Don't let him audit you. He'll find something." },
      { n: "When she was gone, Jungwon sat down very slowly, like a man setting down something heavy he'd been told not to let anyone see him carry." },
      { s: 'jungwon', f: 'neutral', t: "I like her." },
      { n: "Yukari went past the open door with her bag on her shoulder, and slowed, and leaned back into the frame to look at him the way she looked at a new transfer student, with her chin up and her eyebrows ready." },
      { s: 'yukari', f: 'neutral', t: "So you're the other student council president." },
      { s: 'jungwon', f: 'happy', t: "Good afternoon. Your ribbon's out of dress code." },
      { s: 'yukari', f: 'surprised', t: "...Excuse me?" },
      { s: 'jungwon', f: 'happy', t: "Section four, paragraph two. Ribbons should be the school issue. That's a nicer one. I'd keep it. I'd just keep it in my bag on inspection days." },
      { n: "Yukari opened her mouth, closed it, looked at Solar with an expression of profound betrayal, as if Solar had personally brought him here to do this, and went away down the corridor at speed. A moment later they heard her voice from the stairwell saying, to someone, *at a school he doesn't even GO to.*" },
      { s: 'jungwon', f: 'flustered', t: "...That was rude of me. I'll apologize. I can't help it. My hands want a clipboard." },
      { s: 'jungwon', f: 'neutral', t: "That was the most frightening conversation I've had this year, and I've had several." },
      { choose: [
        { t: "You were more polite the angrier you got.", notes: 3, then: [
          { s: 'jungwon', f: 'surprised', t: "..." },
          { s: 'jungwon', f: 'neutral', t: "Who told you that?" },
          { s: 'solar', f: 'neutral', t: "Nobody. I watched it happen." },
          { s: 'jungwon', f: 'neutral', t: "...Yes. Well. You always did. You used to tell me it was the most annoying thing about me." }
        ] },
        { t: "You ran against someone. The second time.", notes: 3, tally: { 'jungwon.H': 1 }, then: [
          { s: 'jungwon', f: 'neutral', t: "Someone ran against me. There's a difference. I didn't ask her to." },
          { s: 'jungwon', f: 'serious', t: "She put glitter on everything. Her posters. The hallway. My blazer, somehow. I was finding it in the lining for a month." },
          { n: "He looked down at his left cuff. There was a single fleck of gold caught in the navy weave, small as a pinprick, and he didn't brush it off." }
        ] },
        { t: "You're both somebody's heir.", notes: 3, tally: { 'jungwon.S': 1 }, then: [
          { s: 'jungwon', f: 'neutral', t: "Somebody's what's left, in my case." },
          { n: "He touched the watch. The second hand sat on the eleven." },
          { s: 'jungwon', f: 'happy', t: "I'm sorry. That's not a conversation for a Saturday. Would you like some tea? The kettle in here is terrible. I've grown fond of it." }
        ] }
      ] },
      { n: "He made the tea in the terrible kettle, and it was terrible, and they drank it anyway, and he showed her how to read the athletic budget in a way that made it look less like a wall of numbers and more like a map of who in the school wanted what and why. It was the most useful thing anyone had taught her since April. She didn't tell him that. She had a feeling she'd told him things like that before, and that he'd kept them somewhere." }
    ] },

    { after: '10/29', title: '3: delivered late', place: 'Gekkoukan High · Student Council Room', time: 'After School', scene: [
      { n: "He was sitting with his phone face-up on the table in front of him, not touching it, the way you'd sit with a letter you couldn't make yourself open, and every few minutes it buzzed, once, and lit up, and he looked at it without moving his head." },
      { s: 'jungwon', f: 'neutral', t: "They keep coming in." },
      { s: 'jungwon', f: 'neutral', t: "All from the same night. All stamped within the same hour. Eleven fifty-eight. Twelve-oh-three. Twelve forty-one. Today one came in stamped with a date I've never seen. Not wrong. Just one I don't recognize." },
      { s: 'jungwon', f: 'serious', t: "Sunoo thinks I've been gone an hour. Heeseung thinks it's been a night. Niki thinks I've been gone a week and he's taken my seat at lunch." },
      { s: 'jungwon', f: 'neutral', t: "I don't know who's right. I've stopped asking my watch." },
      { n: "He turned the phone around so she could see. A group chat. Its name made her laugh out loud before she could stop it." },
      { phone: [
        { from: 'sunoo', t: "sunooshine: jungwon did u eat" },
        { from: 'sunoo', t: "sunooshine: jungwon" },
        { from: 'sunoo', t: "sunooshine: ur gonna pass out if u dont eat SOMETHING jungwon" },
        { from: 'niki', t: "rikiniki: hes not answering bc hes busy being mean somewhere else" },
        { from: 'heeseung', t: "heeheeseung: niki" },
        { from: 'niki', t: "rikiniki: what. thats literally the name of the gc" },
        { from: 'jungwon', t: "injangwon: i'm fine" },
        { from: 'sunoo', t: "sunooshine: THAT'S NOT AN ANSWER TO THE QUESTION" }
      ], contact: 'JUNGWON IS MEAN · 11:58 PM' },
      { s: 'solar', f: 'happy', t: "*Jungwon is mean?*" },
      { s: 'jungwon', f: 'flustered', t: "I didn't name it." },
      { s: 'jungwon', f: 'neutral', t: "I asked them to change it nineteen times. Niki changed it to *JUNGWON IS MEAN (AFFECTIONATE)* once. Then back." },
      { n: "His last message, the *i'm fine*, had a little gray word under it. *Sending.* It had said *Sending,* he told her, for nine days." },
      { n: "Under it, while she watched, a new one came in. It was stamped twelve forty-one. It was from someone called *jakeys*, and it was just one line, and Jungwon read it and put his hand flat on the table beside the phone, very carefully, like you'd put a hand on a table on a moving train." },
      { phone: [
        { from: 'jake', t: "jakeys: we miss u won" },
        { from: 'jake', t: "jakeys: the count's in the morning. we'll save u a seat" }
      ], contact: 'JUNGWON IS MEAN · 12:41 AM' },
      { s: 'jungwon', f: 'neutral', t: "They're going to save me a seat." },
      { s: 'jungwon', f: 'neutral', t: "In the gym. Second row. Heeseung always sits on the aisle so he can get up first and clap. He'll have his jacket on my chair. He's done it for two years." },
      { choose: [
        { t: "Then you'll have somewhere to sit.", notes: 3, then: [
          { s: 'jungwon', f: 'neutral', t: "Yes. I suppose I will." },
          { n: "He said it like a man who'd never before considered that a seat could be kept for him rather than assigned, and found the idea mildly alarming, and wanted it very much." }
        ] },
        { t: "What were you doing? That night.", notes: 2, then: [
          { s: 'jungwon', f: 'neutral', t: "Walking from the cafe to the school. To get my notes. I'd left them in the council room. I don't leave things. I'd left them." },
          { s: 'jungwon', f: 'serious', t: "I think I wanted a reason to be somewhere alone for ten minutes. I got one. It's been a month." }
        ] }
      ] },
      { choose: [
        { t: "Tell them you ate. Type it.", notes: 3, tally: { 'jungwon.H': 1 }, then: [
          { n: "He looked at her. He looked at the phone. He typed it very slowly, *i ate*, which was true, because she'd watched him eat half a melon pan at lunch under protest, and sent it, and the little gray word came up underneath it." },
          { s: 'jungwon', f: 'neutral', t: "*Sending.*" },
          { s: 'jungwon', f: 'neutral', t: "I'm going to watch it until it changes." },
          { n: "He did. She stayed and watched it with him. It didn't change. It didn't need to, she thought. He'd told someone something true, and it was out there in the line somewhere, on its way." }
        ] },
        { t: "Did you eat?", notes: 2, then: [
          { s: 'jungwon', f: 'neutral', t: "Now there are twelve." }
        ] },
        { t: "Do you want to go home?", notes: 2, then: [
          { s: 'jungwon', f: 'neutral', t: "That's a very large question to ask at four in the afternoon." },
          { s: 'jungwon', f: 'serious', t: "Yes. No. Not without— Yes." },
          { n: "He put the phone face down. The answer stayed in the room like a fourth person." }
        ] }
      ] },
      { n: "There was a knock at the open door, which was ridiculous, because the door was open, and a tall boy in a different school's blazer was leaning in the frame with his hands in his pockets and the face of someone who'd come to look at a rival's car." },
      { s: 'jihoon', f: 'neutral', t: "Oh. It's you." },
      { s: 'jungwon', f: 'happy', t: "Park Jihoon. How lovely. You're looking well." },
      { s: 'jihoon', f: 'serious', t: "Don't do the dimples at me, Yang. I can see right through the dimples. I've been seeing through the dimples since first year." },
      { s: 'jihoon', f: 'neutral', t: "Sol. The crane game at the mall ate four hundred yen and I need a witness to my suffering. Come on. You're the only witness I trust." },
      { n: "Jungwon's smile didn't move by a millimeter. It got, if anything, sweeter. She'd learned by now what that meant." },
      { s: 'jungwon', f: 'happy', t: "Please go. I wouldn't want to keep you from a crisis." },
      { s: 'jihoon', f: 'neutral', t: "Wow. See? *Wouldn't want to keep you.* That's how you know he hates me." },
      { n: "She went. In the doorway she looked back. He'd turned the phone face up again, and was looking at it, and his hand was on the watch, and he didn't look up." }
    ] },

    { after: '11/6', title: '4: sea bream', place: 'Iwatodai Dorm · Kitchen', time: 'Late Night', music: 'tender', scene: [
      { n: "Somebody was cooking at midnight. Not in the Dark Hour; after it, when the green had drained out of the windows and the dorm had gone back to being a dorm. She smelled it from the stairs. Kombu and soy and sake, and something seared in a dry pan until the skin blistered." },
      { n: "He was alone in the kitchen with his sleeves rolled to the elbow and a white towel tucked into the waistband of his school trousers, and there was a fish on the cutting board, a sea bream, pink and silver, that she had no idea how he'd gotten, and he was taking it apart with Shinjiro's old knife in long, unhurried, absolutely precise strokes, the way you'd turn the pages of a book you'd read many times." },
      { n: "He didn't look up. He didn't stop." },
      { s: 'jungwon', f: 'neutral', t: "The fish market by the pier opens at four. The man there was very surprised to see a high school student. I told him I was buying for my family." },
      { s: 'jungwon', f: 'neutral', t: "It wasn't a lie. Exactly." },
      { n: "He laid a fillet aside, skin down, and wiped the blade on the towel, and held the knife out to her across the counter, handle first, with a small polite inclination of the head, like a man offering a guest the first cup." },
      { s: 'jungwon', f: 'neutral', t: "Would you like to do the other side?" },
      { choose: [
        { t: "(Take the knife.)", notes: 3, tally: { 'jungwon.S': 1 }, then: [
          { n: "She took it. Her hand closed on the handle and adjusted, a small shift of the grip, and she didn't do that, she'd never done that, and she watched her own hands turn the fish over and find the backbone and go in along it like they'd been taught by someone very short in rubber boots who had no patience at all." },
          { n: "She was faster than him. Not much. Enough. When she lifted the second fillet clean off the bone there was a thin pale line across her left palm, so faint she'd never once noticed it, and he was looking at it." },
          { s: 'jungwon', f: 'neutral', t: "...Yes." },
          { n: "That was all he said. His face had gone completely still. No dimples. Nothing at all, and she knew, without knowing how she knew, that this was what it looked like when he was happy." }
        ] },
        { t: "I don't know how.", notes: 2, then: [
          { s: 'jungwon', f: 'neutral', t: "You do." },
          { s: 'jungwon', f: 'neutral', t: "But that's all right. Watch me, then. You can tell me when I do it wrong. You will." }
        ] },
        { t: "Who taught you to cook?", notes: 2, then: [
          { s: 'jungwon', f: 'neutral', t: "Nobody. I taught myself. At night. It's the only time the kitchen's empty." },
          { s: 'jungwon', f: 'neutral', t: "It's the only thing I do that nobody grades." }
        ] }
      ] },
      { n: "The rice went into a heavy clay pot she'd never seen in the dorm and would never see again, with the kombu and the fillets laid over it skin up, and he turned the flame down so low it was barely a blue ring, and stood watching it with his arms folded and his hand around his own left wrist." },
      { n: "Footsteps on the stairs. Akihiko came in in a T-shirt and track pants, with his hair flat on one side from the pillow, for water, the way he came down for water every night at one, and stopped in the doorway, and looked at the counter, and at the knife in Jungwon's hand." },
      { n: "Something went across his face and stayed there. Solar knew that knife. Everyone in the dorm knew that knife. It had lived in the drawer by the stove since the first week of October and nobody had touched it." },
      { s: 'jungwon', f: 'neutral', t: "...I'm sorry. Is this someone's? I should have asked. I'll put it back." },
      { s: 'akihiko', f: 'serious', t: "It's Shinji's." },
      { n: "He didn't say anything else for a moment. He looked at the fish, and the two neat fillets, and the pot, and the low blue flame, the whole careful midnight business of somebody making food for somebody else in a kitchen that had been very quiet since October." },
      { s: 'akihiko', f: 'neutral', t: "No. Use it. He'd want somebody to. He'd hate that it's been sitting in a drawer." },
      { s: 'akihiko', f: 'neutral', t: "...He'd have something to say about your grip. Don't take it personally." },
      { n: "He got his water. He stood for a second longer at the sink with the glass in his hand, looking at the dark window, and then went back up without another word, and Jungwon stood holding the knife and looking at the doorway he'd gone through, and then bowed to it, very slightly, the way you'd bow in a room where someone had died." },
      { s: 'solar', f: 'neutral', t: "Your watch stopped." },
      { s: 'jungwon', f: 'neutral', t: "When I came through. Eleven fifty-eight and some seconds." },
      { s: 'jungwon', f: 'neutral', t: "It was my brother's. There's a link taken out so it fits me. It never fit him either, he just didn't care." },
      { s: 'jungwon', f: 'neutral', t: "I wind it every night anyway. In case." },
      { choose: [
        { t: "In case of what?", notes: 2, then: [
          { s: 'jungwon', f: 'neutral', t: "I don't know. I've never been good at in case. I prefer to have a plan." },
          { s: 'jungwon', f: 'serious', t: "Winding it is the plan." }
        ] },
        { t: "(Don't ask about the brother.)", notes: 3, then: [
          { n: "She didn't ask. She felt him notice she didn't ask, felt it the way you feel the temperature change when someone opens a window behind you, and his shoulders came down half an inch." },
          { s: 'jungwon', f: 'neutral', t: "Thank you." }
        ] },
        { t: "Yang Jungwon-ssi.", notes: 3, tally: { 'jungwon.S': 1 }, then: [
          { n: "It came out of her formal and pointed and a little cold, a name with all its edges filed sharp, and she had no idea why she'd said it like that or where she'd learned to." },
          { s: 'jungwon', f: 'surprised', t: "..." },
          { s: 'jungwon', f: 'neutral', t: "You only call me that when you're trying to make me angry." },
          { s: 'jungwon', f: 'happy', t: "It always works. Please don't stop." }
        ] }
      ] },
      { n: "They ate it at the kitchen table at one in the morning with the overhead light off and the stove light on, out of two bowls he'd found at the back of a cupboard. It was the best thing she had ever eaten. She knew it with her whole body." },
      { s: 'solar', f: 'neutral', t: "...It's terrible." },
      { n: "She had no idea why she said it. It came out like a line she'd been handed. He put his chopsticks down and looked at her for a long time across the table, and then he laughed, quietly, into his hand, the first real laugh she'd heard out of him, and his ears went red." },
      { s: 'jungwon', f: 'flustered', t: "Yes. Thank you. That's exactly what you say." },
      { n: "In the morning the pot was gone. Both bowls were washed and set upside down on the rack, which nobody in this dorm had done in their lives." }
    ] },

    { after: '11/13', title: '5: the corner', place: 'Naganaki Shrine', time: 'After School', music: 'sun', scene: [
      { n: "There was an old man at Naganaki who played baduk on a folding board under the big tree by the offering box, every afternoon from three to five, against whoever would sit down, and nobody ever sat down, because he won in forty moves and then explained to you, gently, at length, why." },
      { n: "Jungwon sat down. Solar watched from the steps with a can of canned coffee warming her hands while the old man lost, slowly, then quickly, and then sat back on his stool with an expression of pure, delighted outrage, and asked Jungwon who had taught him." },
      { s: 'jungwon', f: 'happy', t: "Myself, sir. Against myself. At night." },
      { s: 'jungwon', f: 'neutral', t: "It's the only way to make sure your opponent is taking it seriously." },
      { n: "The old man went off to buy them all a drink and complain about it to the shrine cat. Jungwon cleared the board, every stone back in its bowl, black and white, and then looked up at her on the steps and tipped his head at the empty stool." },
      { n: "Before he went, he'd looked at the two of them, the boy in the navy blazer and the girl in the Gekkoukan one, and asked, with the frankness of a man who had outlived the need for tact, whether they were courting." },
      { s: 'jungwon', f: 'happy', t: "We're rivals, sir." },
      { n: "He'd said it with the dimples, sweet and immediate, and the old man had laughed so hard he'd had to hold the tree." },
      { choose: [
        { t: "Rivals?", notes: 2, then: [
          { s: 'jungwon', f: 'neutral', t: "It's the most accurate word I have. It's also the only one I'm allowed to use in front of old men at shrines." }
        ] },
        { t: "(Say nothing. Let the old man laugh.)", notes: 3, then: [
          { n: "She said nothing. Jungwon looked at her sideways, quick, to see what her face was doing, and found it doing nothing, and looked back at the board with the faint, private satisfaction of someone who'd been given exactly the silence he'd hoped for." }
        ] }
      ] },
      { s: 'jungwon', f: 'neutral', t: "Would you play?" },
      { choose: [
        { t: "I don't know how.", notes: 2, then: [
          { s: 'jungwon', f: 'neutral', t: "No. I don't suppose you do. Not here." },
          { s: 'jungwon', f: 'neutral', t: "Sit anyway. Put a stone wherever you like. It's very hard to do it wrong in the first five moves. It's very easy after that." }
        ] },
        { t: "(Sit down and take the black stones.)", notes: 3, then: [
          { n: "She sat and took the black bowl without thinking about it, and he watched her take it, and the corner of his mouth moved." }
        ] }
      ] },
      { n: "She didn't know the game. Her hands didn't care. Somewhere around the twentieth stone she stopped trying to think and let them, and they went to the lower right corner, again and again, small cold stones clicking down onto the grid, building something she couldn't see the shape of until it closed." },
      { n: "Four of his white stones were inside it. She'd taken them. She hadn't known she was doing it. He looked at the corner for a very long time." },
      { s: 'jungwon', f: 'serious', t: "You always go to the corner. You build there where nobody's looking and you let me have the whole middle of the board, and I think I'm winning, and I'm not." },
      { s: 'jungwon', f: 'neutral', t: "Atari. That's what it's called when a group has one way out left. It's polite. It means one more and it's gone." },
      { s: 'jungwon', f: 'happy', t: "You never say it. You just do it. Very rude." },
      { choose: [
        { t: "A room over the water.", notes: 3, tally: { 'jungwon.S': 1 }, then: [
          { n: "Cold glass, and lights in the dark on the other side of it, and a long bridge going out across black water, lit along its whole length like a necklace somebody had dropped. She could see it. She could see it more clearly than the shrine." },
          { s: 'jungwon', f: 'neutral', t: "From my window you can see your house. Across the water. I've stood there a lot." },
          { s: 'jungwon', f: 'neutral', t: "Somebody taught you the corner on an old board when you were very small. Not me. You'd know better than I would who." }
        ] },
        { t: "And at home? The other home?", notes: 3, tally: { 'jungwon.H': 1 }, then: [
          { s: 'jungwon', f: 'neutral', t: "At the other one you don't play baduk. You play a crane game at the mall for forty minutes and lose and call it an investment." },
          { s: 'jungwon', f: 'serious', t: "I didn't come with you. I'm not invited to that one. I heard about it. Everyone hears about everything." }
        ] },
        { t: "I'm sorry. For being rude.", notes: 2, then: [
          { s: 'jungwon', f: 'neutral', t: "Don't be. It's the most honest thing about the way you play." }
        ] }
      ] },
      { n: "The old man came back with three cans of hot corn soup, which he seemed to believe was a drink, and looked at the board, and at the corner, and at Solar, and sat down heavily on the steps and said something about the young these days that sounded mostly like admiration." },
      { n: "Jungwon put the stones away one by one. He did it slowly. When he was done he left one black stone on the board, in the corner, where she'd put her last one, and stood, and bowed to the old man, and to her." },
      { s: 'jungwon', f: 'neutral', t: "Thank you for the game." },
      { n: "On the walk down the steps he counted them under his breath. She didn't think he knew he was doing it. A hundred and twelve. It was her habit, she realized. Not his. He'd caught it from her, somewhere, a long time ago, and kept it." }
    ] },

    { after: '11/20', title: '6: the pin', place: 'Gekkoukan High · Student Council Room', time: 'After School', scene: [
      { n: "He wasn't working. That was the first thing. The binders were stacked at the end of the table, squared, untouched, and the red pen was capped, and he was sitting with his blazer open and his hands flat on the table in front of him like a man waiting for a verdict he'd already read in the jury's faces." },
      { n: "On the lapel of the navy blazer, the way it always was, was a small enamel pin. Blue and gold. A single word on it, very small, in neat capitals. She'd seen it every day for a month and never really looked." },
      { s: 'jungwon', f: 'neutral', t: "There's a count in the morning. At home." },
      { s: 'jungwon', f: 'neutral', t: "It's always the morning, at home. It's always the night before the morning. I left the cafe to get my notes from the council room, and opened the door, and it was this one, and I've been here a month, and it's still the night before the count." },
      { n: "He took the pin off. It took him a second, his fingers clumsy on the catch in a way his fingers were never clumsy, and then he set it on the table between them and pushed it a few centimeters toward her with one finger, the way you'd move a stone on a board." },
      { n: "He reached into the inside pocket of the blazer and took out two folded sheets of paper, and laid them on the table side by side, and squared them. His handwriting. The same neat slanted print. One was a page and a half. The other was four lines." },
      { s: 'jungwon', f: 'neutral', t: "One for winning. One for losing. I wrote them both the night before. I always write both." },
      { s: 'jungwon', f: 'neutral', t: "The losing one's longer. I had more to say." },
      { choose: [
        { t: "(Read the losing one.)", notes: 3, tally: { 'jungwon.H': 1 }, then: [
          { n: "She unfolded it. It thanked the school. It thanked the council. It thanked his friends by name, all six, Niki last with a note in the margin, *(he'll be happy).* And then, in the last paragraph, it congratulated the winner, and said the winner had run a better campaign than anyone had expected, including him, and that the school was lucky, and that he'd be in the second row, and that he'd clap first." },
          { n: "The winner wasn't named. There was a blank where the name went. He'd left it blank on purpose, she could tell. He'd left it blank so he wouldn't have to write it." }
        ] },
        { t: "(Read the winning one.)", notes: 2, then: [
          { n: "Four lines. *Thank you. I'll keep working. I'm grateful for the opposition. I'll try to deserve this.* That was all. It read like a man apologizing for something he hadn't done yet." }
        ] },
        { t: "(Don't read either.)", notes: 2, tally: { 'jungwon.S': 1 }, then: [
          { n: "She didn't touch them. He watched her not touch them, and something in his shoulders came down, like a man who'd been braced to be read out loud and had been spared it." }
        ] }
      ] },
      { s: 'jungwon', f: 'neutral', t: "Nobody asked me if I wanted it. The first time. My name was on the form before I knew there was a form. It's like that in the other place too. You inherit what's still standing." },
      { s: 'jungwon', f: 'serious', t: "And you. They put your name on a form too, didn't they. You don't remember. I do. You looked like you were going to be sick in the assembly hall." },
      { n: "She picked up the pin. It was small and absurdly heavy, heavier than enamel had any right to be, and her thumb found the catch on the back without looking, the way it would find the catch on something she'd held a hundred times, turning it over and over at night, deciding whether she wanted it." },
      { fragment: 'hoax-president-pin' },
      { n: "The star on Haenim's sash ticked, once. A tiny metal sound, like a pin dropped on a desk in an empty room." },
      { s: 'solar', f: 'neutral', t: "I didn't want to win." },
      { n: "It came out of her before she knew it was in her. He looked at her like she'd read aloud a sentence from his own diary." },
      { s: 'jungwon', f: 'neutral', t: "...No. I know." },
      { s: 'jungwon', f: 'serious', t: "Neither did I. Not really. I just couldn't stand the idea of losing to you." },
      { choose: [
        { t: "Then we both ran for nothing.", notes: 2, tally: { 'jungwon.H': 1 }, then: [
          { s: 'jungwon', f: 'neutral', t: "No. We both ran. That's different." },
          { s: 'jungwon', f: 'happy', t: "You were very good at it. Your posters were ridiculous. The sun had a face. I hated it. I kept one." }
        ] },
        { t: "Do you want me to keep it? The pin?", notes: 3, then: [
          { s: 'jungwon', f: 'neutral', t: "I want you to hold it. That's not the same as keeping." },
          { s: 'jungwon', f: 'neutral', t: "Give it back before the end. Or don't. You'll decide. You always do, in the end, even when everyone thinks they've decided for you." }
        ] }
      ] },
      { n: "Outside the window the sky was going the dark blue of four-thirty in November, and the lights were coming on across the courtyard one by one. He watched them come on. His hand went to the watch and stayed there." },
      { s: 'jungwon', f: 'serious', t: "Something keeps talking to me. In the Dark Hour. When I'm walking back to the guesthouse." },
      { s: 'jungwon', f: 'neutral', t: "It's very courteous. It offers to let me forget the count. To forget the count and the morning and the night before it and anything that might be waiting on the other side of the door. It says I've done enough." },
      { s: 'jungwon', f: 'neutral', t: "It says I could forget you too, and it would stop hurting, the way you are now. Not knowing me." },
      { n: "He said it in the same even, formal voice he'd use to read out a budget line. He didn't look at her. His knuckles on the watch had gone white." },
      { choose: [
        { t: "What did you tell it?", notes: 3, then: [
          { s: 'jungwon', f: 'happy', t: "I said, *No, thank you.*" },
          { s: 'jungwon', f: 'neutral', t: "It was the most polite I've ever been in my life. You'd have been frightened." }
        ] },
        { t: "You have done enough. And you're not allowed to forget me.", notes: 3, then: [
          { s: 'jungwon', f: 'surprised', t: "..." },
          { s: 'jungwon', f: 'neutral', t: "Is that a motion?" },
          { s: 'solar', f: 'neutral', t: "It's an order." },
          { s: 'jungwon', f: 'flustered', t: "...Seconded. Carried. I'm writing it down." },
          { n: "He did. In the minutes. She watched him do it, and the hand that wasn't writing let go of the watch." }
        ] }
      ] },
      { n: "She left with the pin in her blazer pocket. All the way home she kept her hand around it. It was small, and heavy, and she still wasn't sure she wanted it, and for the first time that didn't feel like a problem she had to solve tonight." }
    ] },

    { after: '12/1', title: '7: maeumi', place: 'Naganaki Shrine', time: 'After School', music: 'sun', scene: [
      { n: "The first of December was cold and clean and blue, the kind of day that made Naganaki's steps look whiter than they were, and Jungwon was sitting on the top one with Koromaru, who had decided at some point in the last week that Jungwon was his, and Jungwon was talking to the dog in a low, careful, extremely formal voice." },
      { n: "She stopped three steps down, because she could hear what he was saying, and because he hadn't heard her yet, which had never happened before." },
      { s: 'jungwon', f: 'serious', t: "...and I said things to you that I'm not going to repeat, because repeating them would be a second offense. You were in my road. You hadn't done anything. Your dog was bigger than mine and very friendly and I was tired and late and I'd been awake since four." },
      { s: 'jungwon', f: 'serious', t: "None of that is an excuse. I'm listing it so you know I've thought about it. I've thought about it a great deal. I'm sorry. I should have said so at the time. I should have said so in September, when I'd had five months to think about it and still—" },
      { n: "Koromaru licked his ear. He stopped, and closed his eyes, and let out a breath that went white." },
      { s: 'jungwon', f: 'neutral', t: "...Thank you. That's very gracious. I don't think you understood the terms." },
      { choose: [
        { t: "He understood. He's a good judge of character.", notes: 3, then: [
          { s: 'jungwon', f: 'surprised', t: "..." },
          { s: 'jungwon', f: 'flustered', t: "How long have you been standing there?" },
          { s: 'solar', f: 'neutral', t: "Since *you were in my road.*" },
          { s: 'jungwon', f: 'flustered', t: "That's nearly all of it." }
        ] },
        { t: "Who was that apology for?", notes: 3, tally: { 'jungwon.H': 1 }, then: [
          { s: 'jungwon', f: 'neutral', t: "Someone with a very big, very happy dog. In the spring. At home." },
          { s: 'jungwon', f: 'neutral', t: "I was practicing. I've been practicing it on him for a week. He accepts it every time. He's terrible at negotiation." }
        ] }
      ] },
      { n: "She sat down on the step beside him. Koromaru moved over to put his chin on her knee, which was, she thought, fair." },
      { s: 'solar', f: 'neutral', t: "In September I heard a boy's voice up here. Saying a dog's name. Then nobody was here." },
      { s: 'solar', f: 'neutral', t: "*Maeumi.*" },
      { n: "He went so still that Koromaru lifted his head." },
      { s: 'jungwon', f: 'neutral', t: "That's my dog." },
      { s: 'jungwon', f: 'neutral', t: "She's very small. She gets out. She was out the night I left. I was calling her at the end of our road and then I was calling her somewhere I didn't recognize, and the steps were whiter, and there were more of them." },
      { s: 'jungwon', f: 'serious', t: "I thought I'd dreamed it." },
      { n: "He looked down at his hands. They were cold, and very clean, and the left one had a fresh scrape across the back of it that hadn't been there a week ago. She knew where it had come from. She'd been there, on Saturday, in the tower, when something had stood up behind him out of the gap like a bridge built in a single night, and he'd raised one arm without looking and every Shadow on the floor had stopped." },
      { s: 'jungwon', f: 'neutral', t: "I haven't missed. In there. Not once. Junpei asked me where I learned to aim like that. I told him a range, abroad. He thought I was joking." },
      { s: 'jungwon', f: 'neutral', t: "I'm a very bad liar to people I like. I don't know how you manage it." },
      { choose: [
        { t: "Apologize to me. The real one. I'll accept it for her.", notes: 3, then: [
          { n: "He looked at her for a long time. Then he turned on the step so he was facing her properly, and bowed, from the shoulders, the way you'd bow to someone you'd wronged and intended to keep facing, and said it all again, every word, to her this time, and it was better the second time, because it wasn't practice." },
          { s: 'solar', f: 'neutral', t: "Accepted." },
          { s: 'jungwon', f: 'neutral', t: "...You can't accept it for her." },
          { s: 'solar', f: 'neutral', t: "Watch me." }
        ] },
        { t: "You don't have to apologize to me. I don't remember it.", notes: 2, then: [
          { s: 'jungwon', f: 'neutral', t: "I know. That's why I'm practicing on the dog." },
          { s: 'jungwon', f: 'serious', t: "I'd like to do it properly. To someone who remembers. Even if it's only you, later." }
        ] }
      ] },
      { n: "At the bottom of the steps Ken was waiting with Koromaru's leash wound around his hand and his school bag on his back and the expression of a fifth-grader who had been sent to collect a dog and found the dog had a social life." },
      { s: 'ken', f: 'neutral', t: "He's supposed to be home by five. He has a schedule." },
      { s: 'jungwon', f: 'happy', t: "I apologize. I kept him. It was entirely my fault. He was helping me with something." },
      { s: 'ken', f: 'neutral', t: "...With what?" },
      { s: 'jungwon', f: 'neutral', t: "An apology. He was very patient." },
      { n: "Ken looked at him for a long, measuring moment, a small serious boy weighing a much taller serious boy, and then nodded, once, like a colleague, and clipped the leash on, and Koromaru went with him looking back over his shoulder at Jungwon the whole way down the street." },
      { s: 'jungwon', f: 'neutral', t: "I like him. He has a schedule. I respect a schedule." },
      { n: "They walked down the steps together with Koromaru trotting ahead and stopping on every landing to make sure they were still coming. He counted under his breath. So did she. They came out at the bottom on the same number." }
    ] },

    { after: '12/9', title: '8: math homework', place: 'Gekkoukan High · Library', time: 'After School', music: 'tender', scene: [
      { n: "Finals were in five days. The library had the hush of a hospital waiting room, every table taken by someone bent over a textbook with the posture of a person being slowly crushed, and Jungwon had claimed the one table by the radiator by being there at three-fifteen every day for a week until everyone else gave up." },
      { n: "He'd made her a worksheet. By hand. Twenty problems in his neat, slanted, slightly too-small print, building from easy to cruel, and she'd done them, and now he was correcting them in red." },
      { n: "Two tables over, Jihoon was pretending to study. He'd been pretending to study since three-thirty. He had a textbook open in front of him that belonged to Junpei and was upside down, and every few minutes he looked up over it at the back of Jungwon's head with the expression of a man watching a rival's car be parked in his space." },
      { s: 'jungwon', f: 'neutral', t: "He's been there forty minutes." },
      { s: 'solar', f: 'neutral', t: "I know." },
      { s: 'jungwon', f: 'happy', t: "His book's upside down. I'm not going to tell him. I'd like to see how long it lasts." },
      { n: "It lasted another twenty minutes, until Fuuka sat down across from Jihoon with her own books and very kindly turned his textbook the right way up without a word, and Jihoon turned the color of a postbox, and Jungwon didn't laugh, at all, in a way that took up most of his face." },
      { n: "She watched his pen move. A small tick. A small tick. A small neat circle around the place in number fourteen where her hand had gotten nervous and flipped the sign. A note in the margin, tiny, *you knew this,* and a little arrow." },
      { n: "The worksheet in front of her went double. There was another one under it, a different paper, a different school's letterhead, the corners soft from being carried around in a bag for days, every problem covered in this exact red, these exact ticks, the same tiny notes, *you knew this, you knew this, you knew this,* and someone sitting across from her at a table that wasn't this one, very patiently, at eleven at night, saying she wasn't bad at it, she was just afraid of it, and those were different things." },
      { fragment: 'hoax-math-homework' },
      { n: "The star on Haenim's sash ticked, a small bright sound she felt in her back teeth." },
      { s: 'solar', f: 'neutral', t: "You did this before." },
      { s: 'jungwon', f: 'neutral', t: "Every week. Since the speeches." },
      { s: 'jungwon', f: 'serious', t: "You were so angry about it. That I was better at it. That I'd offered. That I was right. You said I tutored everyone in the school beautifully and never once let anyone tutor me in anything." },
      { s: 'jungwon', f: 'neutral', t: "You were right. I was going to tell you that. I was going to tell you that the night before the count." },
      { n: "He put the red pen down. Very carefully. Parallel to the edge of the worksheet. His hand stayed on the table next to it, flat, the fingers spread, an inch from hers." },
      { route: [
        { t: "(Put your hand over his.)", route: 'romance', notes: 3, then: [
          { n: "She put her hand over his. Just that. Her palm on the back of his hand on a library table with forty people in the room not looking at them. His fingers went still under hers, and then, very slowly, the way you'd turn over a card you weren't sure you were allowed to see, he turned his hand over, and held on." },
          { s: 'jungwon', f: 'flustered', t: "...This is a library." },
          { s: 'solar', f: 'neutral', t: "I know." },
          { s: 'jungwon', f: 'flustered', t: "I'm noting it for the minutes. I'm not going to stop you. I'm only noting it." },
          { n: "His ears had gone red to the tips. His face was absolutely still, no dimples, nothing, and she'd learned to read it backward. He was happier than she'd ever seen him. He didn't let go until the librarian rang the closing bell." }
        ] },
        { t: "(Pick up the pen and correct his notes.)", route: 'friend', notes: 3, then: [
          { n: "She picked up the red pen and leaned over his own notebook, the one with his study schedule in it, and circled the place where he'd scheduled himself nine hours a day and no lunch, and wrote in the margin in her own messier hand, *you knew this.*" },
          { s: 'jungwon', f: 'surprised', t: "..." },
          { s: 'jungwon', f: 'happy', t: "That's insubordination." },
          { s: 'solar', f: 'neutral', t: "That's tutoring." },
          { n: "He looked at the circle for a long time. Then he took the pen back, and drew a line through one of the nine hours, and wrote *lunch* beside it, and showed her, like a student turning in homework, and she gave it a tick." }
        ] }
      ] },
      { n: "On the walk to the station he carried both their bags without asking, and she let him, and somewhere near the vending machines he said, to the sidewalk, that she'd gotten eighteen out of twenty, and that eighteen was very good, and that he'd only taken off for the sign." }
    ] },

    { after: '1/12', title: '9: keep looking at me', place: 'Gekkoukan High · Student Council Room', time: 'After School', scene: [
      { n: "Third term had started on a Friday, which Jungwon had found personally offensive, and now it was the Tuesday after, and the council room's radiator was clanking like someone trapped inside it, and he was sitting in the dark with the light off and the blinds open, watching the snow come down over the courtyard." },
      { n: "She turned the light on. He winced, and let her." },
      { s: 'jungwon', f: 'neutral', t: "Everyone's asking you." },
      { s: 'jungwon', f: 'neutral', t: "Sunoo asks you. Jihoon asks you in the loudest possible way. Cherry asks you with her arms folded. The girls from your other school ask you on the roof with drinks that don't exist yet. Your brother doesn't ask, which is his way of asking." },
      { s: 'jungwon', f: 'serious', t: "In one place there's a count in the morning. In the other there's a date in spring that you didn't pick, and I'm standing at the end of it, and neither of us picked that either." },
      { n: "He turned the watch on his wrist so the face was against the inside of his arm, where he couldn't see it." },
      { s: 'jungwon', f: 'neutral', t: "I'm not going to ask you." },
      { n: "He opened the minutes book. The one he'd been keeping since October. He turned it to the first page, where the date was written in his neat print, and *Present:*, and his own name, and then hers, with the surname in front of it torn out of the paper by the red pen." },
      { s: 'jungwon', f: 'neutral', t: "I never know what to write. I have two of your surnames. Neither of them is mine to choose. Every meeting I write *Solar* and leave a gap and it looks like a typo." },
      { s: 'jungwon', f: 'neutral', t: "Would you sign it? Just once. Whatever you'd sign. I'll stop leaving the gap." },
      { choose: [
        { t: "(Sign it Kim Solar.)", notes: 3, tally: { 'jungwon.H': 2 }, then: [
          { n: "She took the red pen and wrote it in the gap, *Kim*, in a hand that wasn't quite her handwriting here and was exactly her handwriting somewhere else, round and a little hurried, like it had signed a hundred forms in a school office while somebody waited." },
          { s: 'jungwon', f: 'neutral', t: "...Yes. That's how you sign it. You put a little tail on the M. You always did." }
        ] },
        { t: "(Sign it Lee Solar.)", notes: 3, tally: { 'jungwon.S': 2 }, then: [
          { n: "She took the red pen and wrote it in the gap, *Lee*, small and upright and completely unreadable, the signature of someone who had learned very young that people would keep whatever she wrote down." },
          { s: 'jungwon', f: 'neutral', t: "...Yes. That's how you sign it. As if you'd rather nobody could read it." }
        ] },
        { t: "(Leave the gap. Sign only Solar.)", notes: 3, then: [
          { n: "She wrote *Solar* in the gap, by itself, and nothing in front of it, and handed the pen back." },
          { s: 'jungwon', f: 'neutral', t: "...That's fair. That's the most honest minute in the whole book." }
        ] }
      ] },
      { s: 'jungwon', f: 'neutral', t: "Because it's your life. It's the only thing in either place that's actually yours. I'd like at least one person to treat it that way." },
      { choose: [
        { t: "Then what do you want? You never say.", notes: 3, then: [
          { s: 'jungwon', f: 'neutral', t: "No. I don't." },
          { n: "He looked at her across the table, and for once he didn't look away first, and his face wasn't polite and wasn't still. It was just tired, and open, and eighteen, or twenty-two, or both, she couldn't tell and didn't think he could either." },
          { s: 'jungwon', f: 'serious', t: "I would like you to keep looking at me. Wherever you go. However it ends. That's all. That's the whole list." }
        ] },
        { t: "Thank you.", notes: 2, then: [
          { s: 'jungwon', f: 'neutral', t: "Don't thank me. I'm not giving you anything. I'm just not taking it." }
        ] }
      ] },
      { ifRoute: 'romance', then: [
        { n: "She came around the table. He watched her come. When she stood in front of his chair he looked up at her with the snow-light on the side of his face, and she put her forehead down against his, very carefully, the way you'd set something down on a surface you weren't sure would hold." },
        { n: "He didn't move. He breathed out, once, slow, and the breath was shaking, and she felt the shake go through her too." },
        { s: 'jungwon', f: 'flustered', t: "...I'm not noting this one." },
        { s: 'solar', f: 'neutral', t: "No?" },
        { s: 'jungwon', f: 'flustered', t: "No. Some things don't go in the minutes. I'm told." }
      ], else: [
        { n: "She came around the table and sat on the edge of it beside his chair, the way she'd never have been allowed to sit on a table at the other school, and swung her feet, and watched the snow with him." },
        { s: 'jungwon', f: 'neutral', t: "That's against at least two rules." },
        { s: 'solar', f: 'neutral', t: "Note it." },
        { s: 'jungwon', f: 'happy', t: "I'm noting that my best friend sat on the table and I didn't say anything. That's going in. That's a historic record." }
      ] },
      { n: "When she left, he turned the light off again. Through the little window she saw him turn the watch back around, face up, and look at it, and wind it, the way he did every night, in case." }
    ] },

    { after: '1/22', title: '10: you look like you', place: 'Gekkoukan High · Rooftop', time: 'After School', music: 'sun', scene: [
      { n: "The roof of Gekkoukan in late January was all wind and white sky, the snow from last week gone gray in the corners, and the whole of Port Island laid out across the water like a model somebody had built to scale and then left out in the cold. He was at the fence with his blazer buttoned and his hands in his coat pockets, and he heard the door and didn't turn around, and she understood that he'd been waiting to hear it." },
      { n: "She took the pin out of her pocket. She'd carried it every day since November. The enamel had gone warm and the catch had worn a little groove in the lining of her blazer, and she held it out on her flat palm the way you'd hold out something for a horse." },
      { n: "He looked at it. He didn't take it." },
      { s: 'jungwon', f: 'neutral', t: "I decided something. About the morning. When they read the result." },
      { s: 'jungwon', f: 'neutral', t: "Whoever it is, I'm going to clap first. Before Heeseung. Before anyone. I'm going to stand up in the second row and clap before they've finished saying the name." },
      { s: 'jungwon', f: 'serious', t: "It's the only thing about that morning I get to decide. So I decided it." },
      { s: 'jungwon', f: 'neutral', t: "You held it." },
      { s: 'solar', f: 'neutral', t: "You said to." },
      { s: 'jungwon', f: 'neutral', t: "I said to decide." },
      { choose: [
        { t: "I decided. It's yours. You can want it now, if you want.", notes: 3, tally: { 'jungwon.H': 1 }, then: [
          { s: 'jungwon', f: 'surprised', t: "..." },
          { n: "He took it. He turned it over. He pinned it back on his lapel, where it had always been, and his fingers weren't clumsy this time, and when it was on he looked down at it for a second like it was somebody else's pin he'd decided to borrow on purpose." },
          { s: 'jungwon', f: 'happy', t: "I might. I'll let you know. After the count." }
        ] },
        { t: "(Pin it on him yourself.)", notes: 3, tally: { 'jungwon.S': 1 }, then: [
          { n: "She stepped in and pinned it on him herself, carefully, her cold fingers fumbling the catch on the navy wool, and he stood absolutely still while she did it, the way he'd stand still for a tailor, or a priest, or a photographer at a dinner neither of them had chosen." },
          { s: 'jungwon', f: 'neutral', t: "...Thank you." },
          { s: 'jungwon', f: 'neutral', t: "Nobody's ever put anything on me that I was allowed to take off." }
        ] }
      ] },
      { s: 'jungwon', f: 'neutral', t: "When I first came through the door, I kept thinking you looked like someone. On the street. On the stairs. A girl with her collar up on a bench at the station, once. I'd turn around and think, *that's her*, and it never was." },
      { s: 'jungwon', f: 'serious', t: "I was wrong. You don't look like someone." },
      { s: 'jungwon', f: 'neutral', t: "You look like you." },
      { n: "He said it plainly. No dimples. No *would you like to sit down.* Just the words, set down one after another like stones on a board, and she felt something she'd been holding since October let go in her chest, the way your hand lets go of a railing when the boat finally stops moving." },
      { ifRoute: 'romance', then: [
        { n: "She kissed his cheek. Once, quickly, on the cold skin just above where a dimple would have been if he'd been being polite, and he wasn't." },
        { n: "He made a very small sound, almost nothing, like a breath let out in a held room, and his hand came up and covered the place where she'd kissed him, as if to keep it from blowing away in the wind." },
        { s: 'jungwon', f: 'flustered', t: "...Motion carried." },
        { s: 'solar', f: 'neutral', t: "Nobody seconded it." },
        { s: 'jungwon', f: 'flustered', t: "I'm seconding it now. I'm seconding it for the rest of my life. Please be quiet. I'm committing this to memory." }
      ], else: [
        { n: "She held out her hand. He looked at it, and took it, and they shook, very formally, on the roof in the wind, like two presidents at the end of a summit, and neither of them let go when a handshake would have ended." },
        { s: 'jungwon', f: 'happy', t: "Motion carried." },
        { s: 'solar', f: 'neutral', t: "What motion?" },
        { s: 'jungwon', f: 'neutral', t: "That I keep you. As a friend. In both places. Whatever happens at the count. It was unanimous. I counted." }
      ] },
      { n: "They stayed until the light went. Going down, he held the stairwell door for her, the way he held every door, and on the landing he stopped, and took his watch off, and wound it, and put it back on, and looked at it." },
      { n: "It still said eleven fifty-eight. He didn't seem to mind tonight. He looked at it like a man looking at a train timetable for a trip he'd decided, finally, to take." }
    ] }
  ],

  afterMax: [
    { title: "yeobo's", place: "Iwatodai Strip · Yeobo's Cafe", time: 'After School', scene: [
      { n: "The cafe was there. She saw it from the end of the strip, wedged between the ramen shop and a shuttered pachinko place with its windows fogged gold, and beside her Jungwon stopped walking so suddenly a man behind them had to step around him." },
      { s: 'jungwon', f: 'surprised', t: "...It's never here on a Thursday." },
      { n: "Inside, Sunoo was behind the counter in an apron, and looked up, and his whole face lit like a shop sign." },
      { s: 'sunoo', f: 'happy', t: "He's eating! He's out in public and he's going to eat! Solar, I could kiss you!" },
      { s: 'jungwon', f: 'flustered', t: "Please don't kiss her." },
      { choose: [
        { t: "Two croissants. And whatever he's pretending he doesn't want.", notes: 3, then: [
          { s: 'sunoo', f: 'happy', t: "Coming right up! Name for the order?" },
          { s: 'solar', f: 'neutral', t: "Solar." },
          { n: "Sunoo's pen stopped. Then he wrote it, very carefully, and underlined it twice, and handed the slip to Jungwon instead of her, and Jungwon put it in his pocket." }
        ] },
        { t: "He'll have what he always has.", notes: 3, then: [
          { s: 'jungwon', f: 'neutral', t: "I don't always have anything." },
          { s: 'sunoo', f: 'happy', t: "He always has the americano and then steals half her croissant. Coming right up!" }
        ] }
      ] },
      { ifRomance: 'jungwon', then: [
        { n: "He stole half her croissant. She let him. Under the table, his knee rested against hers, very lightly, as if it had arrived there by an oversight he did not intend to correct." }
      ], else: [
        { n: "He stole half her croissant. She stole it back. Sunoo watched them from behind the counter with his chin in his hand like a man watching his favorite drama." }
      ] }
    ] },
    { title: 'twelve-thirty', place: 'Gekkoukan High · Rooftop', time: 'Lunchtime', scene: [
      { n: "He'd put it in his schedule. She'd seen it. In the little grid on the inside cover of his notebook, in red, between *budget, athletics* and *council minutes, draft*: 12:30 to 12:55, *lunch (Solar).*" },
      { s: 'jungwon', f: 'neutral', t: "Twenty-five minutes. I'm told that's normal. Sunoo says normal people take a whole hour. I'm working up to it." },
      { n: "He'd brought a bento. He'd made it. Rolled egg, cut so evenly it looked printed, rice, a little pickled radish, and two of the small octopus-shaped sausages, which he moved to her side of the box without comment." },
      { choose: [
        { t: "You cut the sausages into octopuses.", notes: 3, then: [
          { s: 'jungwon', f: 'flustered', t: "It's efficient. The legs cook faster." },
          { n: "It was not efficient. They both knew it was not efficient." }
        ] },
        { t: "(Eat, and time him eating too.)", notes: 3, then: [
          { n: "He ate the entire thing in twenty-three minutes and looked so pleased with himself about the two spare minutes that she didn't tell him he'd spent them watching her." }
        ] }
      ] }
    ] }
  ],

  christmas: { place: 'Iwatodai Strip', time: 'Evening', scene: [
    { n: "It was snowing on the strip, big slow flakes that came down past the ramen shop's lanterns and the karaoke sign and settled on the shoulders of everyone walking past with their shopping, and Jungwon was standing under the awning of the bookstore with a paper bag in one hand and the expression of a man who had planned this to the minute and been ambushed by weather." },
    { s: 'jungwon', f: 'neutral', t: "I had a schedule. The snow wasn't on it." },
    { s: 'jungwon', f: 'neutral', t: "Merry Christmas. I didn't know what to get you. I made a list. I crossed everything off it. This was the only thing left." },
    { n: "Inside the bag was a scarf. Plain, dark, very warm. Folded into it was a small card in his neat slanted print. *You never wear one. Please wear this one.*" },
    { choose: [
      { t: "(Put it on. Then put it around both of you.)", notes: 3, then: [
        { n: "It was long enough. He'd measured, she realized. He'd bought it long enough on purpose, and stood there with the other end around his own neck and snow on his hair looking like a man caught in the middle of a crime he'd committed very carefully." }
      ] },
      { t: "(Give him yours: a pocket watch-stand, so he can set the watch down at night.)", notes: 3, then: [
        { s: 'jungwon', f: 'surprised', t: "..." },
        { s: 'jungwon', f: 'neutral', t: "So I'd stop sleeping with it on." },
        { s: 'jungwon', f: 'flustered', t: "How did you know I sleep with it on." }
      ] }
    ] },
    { s: 'jungwon', f: 'happy', t: "Merry Christmas, Solar." },
    { n: "They walked the length of the strip twice, slowly, because neither of them wanted to be the one to say the walk was over." }
  ] }
});
