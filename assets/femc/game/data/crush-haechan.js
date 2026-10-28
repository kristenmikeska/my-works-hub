/* Haechan's crush track (2026-10-23): the moments, his world lines and his texts. The track itself is in crush.js (no
   opt-in: it starts by itself at 'noticed' on 9/1 once a4-first-text has played; 'crush' 11/11, 'puppy' 11/25, 'almost'
   12/8; `pull`, so dating someone else never fades it; his rank 8 on 12/18 settles it: romance → 'dating', friend →
   'faded'). Format: core.js "Crushes".
   Kat: Haechan is the love of Solar's life, and they're drawn to each other in every universe, even when she doesn't
   remember him. So:
   A) Before he arrives (gate 'noticed', until 11/3): déjà vu and the pull that only Solar feels. 3 a.m. in the laundry
      room (9/2–9/30), a listening booth where she hears a room the way he would (9/14–10/20, after a4-names; Hyein nearly
      says it, Hanni shuts her up), the harbor after Yunjin crosses (10/11–11/3), the dorm roof watching the bridge's lights
      (10/20–11/3). She doesn't know his name or his face; nobody tells her.
   B) After he arrives, before rank 8 (11/6–12/20; needs a4-household-introductions): provisioning, the language joke,
      the stairs at three, the rain at the school gate, the next line of a song, the tower after he awakens. Every one
      branches on ifTaken: 'haechan' (she's with someone else: honest and torn, she stays and she loves them, the pull is
      there and she can't explain it, nobody is a villain, she never cheats), with ifCrush akihiko 'dating' inside it where
      Akihiko is named; else the free version.
   C) After rank 8 (12/22 on, flag year-goes-on): the every-universe thread, by phase ('dating' / 'faded'), by heading
      where his register matters, and ifTaken for the torn case (the conversation with Akihiko is crush-triangle.js's;
      here it's only acknowledged). January stays light; February belongs to his ranks 11–15.
   She first says "Donghyuck" at his rank 8: nothing here says it, or has her know it, before then. Moments never contradict
   his rank scenes (links/haechan.js) or the living-haechan-* files (shoes at six, the tape measure, pockets, four bars,
   the rain step, the stairs after the tower); he never asks anyone about her. */
(() => {
  const C = window.FEMC_GAME_CRUSH, P = C.phases, add = C.add;
  const H = ph => ({ haechan: ph }), W = n => ({ haechan: n });
  const AKI = { akihiko: 'dating' };
  const CLASS = { maki: 'Maki', sonoda: 'Sonoda' };
  const AFTER = ['year-goes-on'];
  // She's with someone else: Akihiko by name, anyone else unnamed; else the free version.
  const torn = (aki, other, free) => ({ ifTaken: 'haechan', then: [{ ifCrush: AKI, then: aki, else: other }], else: free || [] });

  C.moments.push(
    /* ── A. Before he arrives: the pull, and nobody to pin it on. ── */
    { id: 'cr-hc-three-am', who: 'haechan', crush: H('noticed'), slot: 'late', when: 'quiet', after: '9/2', until: '9/30',
      place: 'Iwatodai Dorm · Laundry Room', time: 'Night · 3 AM', bg: 'iwatodaidorm-laundryroom', scene: [
        { n: "Three in the morning, a night in September, and she was awake for no reason, the way she'd been awake at three since April, lying on her back in the black hoodie with the moon gone off the window and the whole building breathing around her. It had got worse since the texts started. Numbers she didn't know. People who wrote to her as if she'd only stepped out of the room." },
        { n: "She went down the back stairs in her socks, past the kitchen, to the laundry room, because that was where her feet went at three. She'd stopped asking them why sometime around May. It was the coldest room in the dorm, two machines and a folding table and one high window and a tube light that took four tries to commit, and nobody came here at three, which seemed to be the whole point of it, though whose point it was she couldn't have said." },
        { n: "She sat up on the dryer with her heels against its door and looked at the doorway, and waited, and caught herself waiting, and couldn't for the life of her have said for what." },
        { n: "Koromaru came at some point, on silent paws, and stood in the doorway looking at her, and then at the empty space in the doorway beside him as if he were checking it too, and lay down across the threshold with a sigh, like a dog who'd been asked to wait for somebody and had agreed to it without being told who." },
        { choose: [
          { t: "(Set the dryer going. Empty.)", crush: W(1), then: [
            { n: "She reached down between her knees and turned the dial and pressed start with nothing in the drum, which was a waste of electricity and of Mitsuru's money and the most natural thing her hands had done all week. The machine woke up under her and began to turn, warm, rumbling, like a stove in someone else's kitchen." },
            { n: "She had never once done that before. She knew she had. Both of those were true at the same time, and she sat on the warm metal with the two of them until her legs stopped being cold." }
          ] },
          { t: "(Keep your eyes on the door.)", crush: W(1), then: [
            { n: "She watched the door. Every time the old building settled somewhere, a pipe, a floorboard, the front door shifting on its hinges in the wind, her head came up a half second before the sound, as if her ears had got there ahead of the house and were standing on the step waiting for it." },
            { n: "Nobody came. The waiting didn't mind. It seemed to be used to it." }
          ] },
          { t: "(Go back to bed. This is stupid.)", then: [
            { n: "She got as far as the bottom stair and stopped, and came back, and turned off the laundry room light she'd left on, which was why she'd come back, she told herself, and stood in the dark for another minute with her hand on the switch, which wasn't." }
          ] }
        ] },
        torn([
          { n: "At five she heard Akihiko's door, his feet on the stairs two at a time, the front door going softly behind him, and by then she was back in bed with the warmth of the dryer still in the backs of her legs, and she thought about him out on the river in the dark, and loved him for it, simply and with her whole chest." },
          { n: "She couldn't have told him where she'd been. Not because it was a secret. Because she didn't know, and she knew how it would sound, and she didn't want to hand him a question she couldn't answer." }
        ], [
          { n: "In the morning there was someone she'd chosen, and a text from them waiting on her phone, and she answered it smiling and meant every letter. She just couldn't have told them where she'd been at three, or who she'd been sitting up for, because she didn't know either." }
        ], [
          { n: "She went up at four. On the stairs she looked back once at the dark under the laundry room door, the way you look back at a platform after the last train has gone, in case." }
        ])
      ] },

    { id: 'cr-hc-closed-back', who: 'haechan', crush: H('noticed'), slot: 'after', offOnly: true, after: '9/14', until: '10/20', events: ['a4-names'],
      place: 'Paulownia Mall · Record Shop', time: 'Daytime', bg: 'record-shop-listening-booth', scene: [
        { n: "Hyein wanted a record for the lounge, because the lounge, she said, had the musical personality of a dentist's waiting room, and Hanni wanted to stop Hyein buying a record player to go with it, and Solar wanted, mostly, to be somewhere that wasn't the dorm on a day off, so the three of them ended up in the narrow record shop on the mall's second floor that smelled of cardboard sleeves and dust and somebody's lemon tea." },
        { n: "There was a listening booth at the back, a glass box about the size of a phone booth with a stool and a pair of heavy black headphones on a hook. Solar went in to get out of Hyein's way and put the headphones on with nothing playing in them." },
        { n: "And the shop went away. The cups swallowed her ears whole, and the chatter outside went to a murmur and then to nothing, and what was left was the booth itself. The ceiling fan, a little out of true, ticking against something on every turn. The drinks fridge behind the counter humming under it, low, half a step off from the fan, so the two of them leaned on each other like a pair of drunks at a bus stop, and she could hear it. She could hear exactly where they didn't fit." },
        { n: "She had never in her life cared what note a fridge was in. She took the headphones off and the shop came back, loud and ordinary, and she put them back on again almost at once, because she wanted, very badly and for no reason at all, to tell somebody about the fan." },
        { n: "Hyein knocked on the glass. Solar opened the door with the headphones still around her neck and heard herself say it before she'd decided to." },
        { s: 'solar', f: 'neutral', t: "These are the good ones. Closed-back. You can't hear anything in them except the room." },
        { s: 'hyein', f: 'surprised', t: "Oh my God. Sol. That's literally what H—" },
        { n: "Hanni's hand came down over Hyein's mouth so fast it made a small sound. Not a slap. A lid going onto a pot. She did it without looking, a record still in her other hand, the way you'd catch a glass somebody had knocked off a table, and Hyein said something furious into her palm." },
        { s: 'hanni', f: 'neutral', t: "Nope." },
        { s: 'hanni', f: 'neutral', t: "She means it's literally what the man at the counter said. About the headphones. Earlier. Didn't he, Hyein." },
        { s: 'hyein', f: 'flustered', t: "...Mm-hm. The man. Who works here. He totally said that. Word for word. He's very into headphones." },
        { choose: [
          { t: "What who said?", crush: W(1), then: [
            { s: 'hanni', f: 'neutral', t: "Nobody, Sol. A guy we know who's very annoying about rooms." },
            { s: 'hyein', f: 'flustered', t: "SO annoying. The most annoying. You'd hate him. You did hate him. Ow. Hanni, ow." },
            { n: "They both looked at her then, and something went across both their faces at once and was put down carefully, the way you put down something too hot to hold and too precious to drop." }
          ] },
          { t: "(Put the headphones back on. Listen to the fan.)", crush: W(1), then: [
            { n: "She put them back on and shut the door on both of them and listened to the fan tick and the fridge lean on it, and for a minute, in the glass box, she wasn't alone in it. That was the only way she could have put it. Somebody else was listening to the same wrong note, somewhere, and finding it as unbearable as she did, and finding that funny." }
          ] },
          { t: "Okay. Keep your secrets.", then: [
            { s: 'hanni', f: 'neutral', t: "We will. For now." },
            { s: 'hanni', f: 'sad', t: "Not because they're ours. Because you'd want to find this one yourself. I know how that sounds, coming from us. Trust me anyway." }
          ] }
        ] },
        { n: "Hyein bought a record with a woman in a hat on the cover. Hanni didn't stop her. On the monorail home Solar found she was listening to the carriage, the rails under it, the doors sighing a little flat at every stop, a whole train going by like a song, and had no idea whose ears she was borrowing." },
        { s: 'hyein', f: 'flustered', t: "...She's doing the thing. Hanni. She's doing the face." },
        { s: 'hanni', f: 'serious', t: "I know. Don't." }
      ] },

    { id: 'cr-hc-boat', who: 'haechan', crush: H('noticed'), slot: 'evening', after: '10/11', until: '11/3', events: ['a4-low-tide'],
      place: 'Port Island · Pier', time: 'Evening', bg: 'port-island-pier-night', scene: [
        { n: "Since Yunjin, the sea had started pulling. Not the water itself, she still couldn't look at the water for long without her hand finding a rail, but the edges of it. The harbor lights. The stacks of containers across the bay like a child's blocks left out in the rain. The smell of diesel and rope and cold salt that came off the pier at dusk and went into her like a hook." },
        { n: "So she was on the pier again, at six, with her hands in her blazer pockets, watching the last ferry come in from across the bay, and Yunjin was beside her in the yellow puffer, eating a hot bun out of a paper bag and pretending this was a normal thing for two people to do after dark in autumn." },
        { n: "The ferry's horn went, long and low, and the gangway came down, and people came off it in ones and twos into the lights, and Solar watched every one of them. Every face. Every pair of shoulders. She caught herself at it about the twentieth person and couldn't stop. A man at the end of the pier lit a cigarette out of a red packet, and the smell came down the wind, and her hand came out of her pocket and closed on nothing, in a fist, the way you'd take something off somebody before they could put it in their mouth." },
        { n: "The last passenger came off. Nobody she knew. And something came up out of her, low, two syllables in Korean, the way you'd say it to somebody stepping off a boat an hour after you'd started waiting. *You're late.*" },
        { n: "Yunjin stopped chewing." },
        { s: 'yunjin', f: 'serious', t: "Don't look at the boats like that, babe." },
        { s: 'solar', f: 'neutral', t: "Like what?" },
        { s: 'yunjin', f: 'serious', t: "Like you're meeting one." },
        { choose: [
          { t: "Who would I be meeting?", crush: W(1), then: [
            { s: 'yunjin', f: 'neutral', t: "Nobody." },
            { n: "She folded the top of the paper bag over twice, very neatly, which was not like her at all." },
            { s: 'yunjin', f: 'sad', t: "Nobody yet." },
            { n: "The *yet* went down into Solar like a stone into a harbor, and kept going, and she never heard it land." }
          ] },
          { t: "(Watch the gangway until they pull it up.)", crush: W(1), then: [
            { n: "She watched it until the crew pulled it up and the ferry went dark and the last of its wash slapped the pilings. Yunjin didn't hurry her. Yunjin stood there in her ridiculous jacket and waited too, and didn't once say what for, and Solar understood with total certainty that Yunjin knew." }
          ] },
          { t: "(Turn your back on the water.)", then: [
            { n: "She turned round and leaned on the rail with the sea behind her, which was worse, because now she could hear it instead, and the horn went again from somewhere further off, and she shut her eyes." },
            { s: 'yunjin', f: 'neutral', t: "Yeah. Doesn't help. Trust me, I've tried." }
          ] }
        ] },
        torn([
          { n: "Her phone buzzed. Akihiko. *where are you. it's dark. i'll come get you.* She laughed out loud on the pier, because it was so exactly him, and typed back that she was with Yunjin and fine, and he sent *ok. i'm coming anyway*, and twenty minutes later he was there at the top of the pier steps in his running jacket, a little out of breath, pretending he'd been in the area." },
          { n: "She went up the steps to him, and took his arm, and meant it all the way down. On the monorail she looked back once across the bay at the dark ferry. She didn't know why. She didn't tell him she'd looked. There was nothing to tell." },
          { s: 'yunjin', f: 'neutral', t: "...He's nice. That one." },
          { s: 'solar', f: 'happy', t: "He is." },
          { s: 'yunjin', f: 'sad', t: "Good. I mean it. Good." }
        ], [
          { n: "Her phone buzzed with a text from the person she'd been seeing, asking if she'd eaten, and she smiled at it in a way Yunjin watched sideways and didn't comment on, and answered it, and meant it. She still looked back at the dark ferry from the monorail. She didn't know why." }
        ], [
          { n: "Yunjin bought her a can of hot corn soup from the machine at the top of the pier, because she said Solar's face looked cold, and they rode home with the cans in their laps, and Yunjin talked the whole way about absolutely nothing, loudly, on purpose, the way you'd talk to keep somebody awake on a long drive." }
        ])
      ] },

    { id: 'cr-hc-bridge-lights', who: 'haechan', crush: H('noticed'), slot: 'late', when: 'quiet', after: '10/20', until: '11/3',
      place: 'Iwatodai Dorm · Rooftop', time: 'Late Night', bg: 'iwatodaidorm-roof-night', scene: [
        { n: "Midnight on the roof, the first properly cold night, her breath going up white, and from here, if you leaned out over the far corner of the railing, you could see the long curve of Moonlight Bridge across the water with its cables strung in red lights like a necklace somebody had dropped." },
        { n: "She'd been watching it for forty minutes. Every pair of headlights that went over it, she followed from one end to the other, and every time they reached the middle, where the cables came lowest, something in her chest went up on its toes, and every time they went on past it came down again. It was like waiting for a bus. It was like waiting for a bus at a stop she'd never been to, for a person she'd never met, who was late." },
        torn([
          { n: "The door scraped. Akihiko, in a sweatshirt, barefoot in his slides, looking at her the way he looked at a split lip, already shrugging his jacket off on the way over. He put it round her shoulders without asking and leaned on the rail beside her and looked where she was looking." },
          { s: 'akihiko', f: 'neutral', t: "The bridge?" },
          { s: 'solar', f: 'neutral', t: "I don't know." },
          { s: 'akihiko', f: 'neutral', t: "Okay." },
          { s: 'akihiko', f: 'serious', t: "You looked like you were waiting for somebody." },
          { choose: [
            { t: "I think I am. I don't know who.", crush: W(1), then: [
              { n: "He didn't laugh. He didn't ask if she was joking. He looked at the bridge for a while, really looked, the way he'd study a fighter he hadn't seen before, and then put his arm round her and pulled her into his side." },
              { s: 'akihiko', f: 'neutral', t: "Then I'll wait with you. Till you know. Or till five. Whichever comes first." },
              { n: "She leaned into him and loved him for it, completely, and still watched the middle of the bridge every time a car went over, and he let her, and that was the most honest thing she'd ever been with anybody and she didn't know how to say so." }
            ] },
            { t: "Just the cars. I count things.", then: [
              { s: 'akihiko', f: 'happy', t: "Ha. Me too. How many?" },
              { s: 'solar', f: 'neutral', t: "Two hundred and twelve." },
              { n: "He whistled, low, and stayed and counted the next fifty with her, out loud, and it was easy, and she leaned on him, and she didn't tell him which number she was really waiting for, because there wasn't one." }
            ] }
          ] }
        ], [
          { n: "She thought about the person she was seeing, asleep somewhere, and felt warm, and sure, and fond. And she stayed on the roof anyway, watching the middle of the bridge, and couldn't have explained it to them, or to herself, or to anyone." },
          { choose: [
            { t: "(Go in. Text them goodnight.)", then: [
              { n: "She went in and texted them goodnight and got one back almost at once, and smiled at it in the dark, and meant it. From her bed she could still see a sliver of the red lights through the gap in the curtain. She turned over so she couldn't." }
            ] },
            { t: "(Stay ten more minutes.)", crush: W(1), then: [
              { n: "She stayed ten more minutes. Nothing crossed the bridge but a delivery van and a taxi. She didn't know what she'd wanted to cross it. She went in cold and a little ashamed of nothing at all." }
            ] }
          ] }
        ], [
          { n: "The door scraped. Aigis came out onto the roof in her uniform, as if it were noon, and stood beside her at the railing, and looked at the bridge with the same total attention she gave everything." },
          { s: 'aigis', f: 'neutral', t: "You have been watching the bridge for forty-one minutes. Your heart rate rises each time a vehicle reaches the center span. Is someone expected?" },
          { choose: [
            { t: "I don't know. I think so.", crush: W(1), then: [
              { s: 'aigis', f: 'neutral', t: "Then I will watch it with you. I am good at waiting. I do not always know for what either." },
              { n: "They stood there together, the two of them, at midnight, watching red lights on the water, and it was the strangest company she'd ever kept and the only kind that would have made sense." }
            ] },
            { t: "No. I'm counting cars.", then: [
              { s: 'aigis', f: 'serious', t: "Your answer and your posture do not agree." },
              { s: 'aigis', f: 'neutral', t: "I will not tell anyone. I do not know what I would tell them." }
            ] },
            { t: "(Ask her to go in. Stay out alone.)", crush: W(1), then: [
              { n: "Aigis went in without a word, the door sighing shut behind her, and Solar stood alone with the cold and the bridge and the feeling, and the feeling was not lonely, which was the strangest part. It felt like being on one end of a very long line, and the line was taut, and somebody had hold of the other end." }
            ] }
          ] }
        ]),
        { n: "Halfway across the bridge, where the cables came lowest, there was a place where the red lights seemed to skip, as if one of them had gone out. She looked for it again the next night. It was still there." }
      ] },

    /* ── B. He's here. Noticed → crush → puppy → almost, and honest about whoever she's with. ── */
    { id: 'cr-hc-green-bottle', who: 'haechan', crush: H(['noticed', 'crush']), slot: 'early', after: '11/6', until: '12/4', events: ['a4-household-introductions'],
      place: 'Iwatodai Dorm · Kitchen', time: 'Early Morning', bg: 'iwatodaidorm-kitchen', scene: [
        { n: "There was a bottle at her place at the table. Green glass, beaded with cold, sparkling water, the plain kind with nothing in it, the kind the dorm had never once stocked in seven months, because nobody in the dorm drank it, because Junpei said it tasted like drinking television static." },
        { n: "Haechan was at the counter with his back to the room, eating rice out of a bowl standing up. He didn't turn round. He didn't have to. His whole back was very carefully not watching her see the bottle." },
        torn([
          { n: "Beside it, where it always was, was a carton of strawberry milk with SOLAR on it in Akihiko's blocky handwriting, put there on his way out to run, the way he did now, every morning, without a word, because he'd learned it months ago and never once forgotten. Two drinks. One from her boyfriend, who'd watched her for months to learn it. One from a boy who'd been in the building for a week and hadn't asked a single person." },
          { n: "Haechan saw her see both. She watched him see it in the window over the sink. He went on eating his rice." }
        ], [
          { n: "The person she was seeing would have asked her what she wanted. They always asked. She liked that about them. She stood there looking at a bottle nobody had asked her about and felt the floor go a little soft." }
        ]),
        { s: 'junpei', f: 'surprised', t: "Whoa, whoa. Where'd THAT come from? Leader. You drink that? Since when do you drink that?" },
        { s: 'fuuka', f: 'surprised', t: "I've lived with her since April and I didn't know that." },
        { s: 'junpei', f: 'serious', t: "Dude. Haechan. Did you ask somebody? Did Hanni tell you? Hanni, did you tell him?" },
        { s: 'hanni', f: 'neutral', t: "Don't look at me. I haven't said four words to him." },
        { ifHeading: 'S', then: [
          { s: 'haechan', f: 'happy', t: "Who would I ask? Her? She lies about breakfast. Every morning. With her whole face." }
        ], else: [
          { s: 'haechan', f: 'neutral', t: "Nobody told me." }
        ] },
        { n: "That was all. He rinsed his bowl and put it upside down on the rack and went out of the kitchen without looking at the table at all." },
        { choose: [
          { t: "(Drink it. It's exactly right.)", crush: W(1), then: [
            { n: "She drank it. It was so cold it hurt her teeth and so exactly right that she had to put it down and look at it, the way you'd look at a photograph of yourself somewhere you didn't remember going." }
          ] },
          { t: "How did you know?", crush: W(1), then: [
            { n: "She said it to the doorway, after him. He was already on the stairs. He stopped on the third one for exactly as long as it took to not answer, and went on up, and she heard his door, and Junpei said *he didn't answer you*, outraged, as if it had been his question." }
          ] },
          { t: "(Leave it. Drink what you always drink.)", then: [
            { n: "She drank the tea Fuuka had made, because she always drank Fuuka's tea, and put the bottle in her bag on the way out without quite deciding to, and found it there at ten forty, still cold, and drank it by the window, and it was exactly right anyway." }
          ] }
        ] },
        torn([
          { n: "She drank the strawberry milk too, every drop, and took a photo of the empty carton and sent it to Akihiko the way he liked, and he sent back *good* from somewhere on the river, and she smiled at her phone and meant every bit of it." },
          { n: "She could not have explained to anyone, least of all to herself, how both of those things were true at once. She didn't try. She went to school." }
        ], [
          { n: "She texted the person she was seeing good morning, and meant it. She didn't mention the bottle. Not because it was anything. Because she didn't know what it was." }
        ], [])
      ] },

    { id: 'cr-hc-english', who: 'haechan', crush: H(['noticed', 'crush']), slot: 'evening', after: '11/6', until: '12/4', events: ['a4-household-introductions'],
      place: 'Iwatodai Dorm · Lounge', time: 'Evening', bg: 'iwatodaidorm-livingroom-night', scene: [
        { n: "Junpei had an English essay due and a theory. The theory was that anybody who'd come through a dryer from another country was basically an English teacher, and the evidence was that Haechan had walked through the lounge on his way to the kitchen and not left fast enough." },
        { s: 'junpei', f: 'happy', t: "Okay. Okay. My man. Foreign guy. HOW. ARE. YOU. ...What. Is. Your. FAVORITE. FOOD." },
        { s: 'fuuka', f: 'happy', t: "Junpei, he's Korean! You have to meet him halfway. I got a phrasebook. Hold on. I practiced." },
        { ifHeading: 'S', then: [
          { n: "Haechan looked at Junpei, and at Junpei's essay, and answered him in Korean, loud and warm and fast, a whole cheerful torrent of it, laughing halfway through at his own joke, the way an uncle answers you at a wedding, and Junpei sat back like he'd been hit by a wave." },
          { n: "Then Fuuka, very carefully, holding the phrasebook open like a hymn sheet, said *good evening* in Korean, beautifully, with a little bow. And Haechan answered her in English. Flat, dry, perfect, with an accent from somewhere very cold and very far from here." },
          { s: 'haechan', f: 'neutral', t: "Good evening. Your bow's better than mine. I'm not going to elaborate." },
          { s: 'fuuka', f: 'surprised', t: "...I asked in Korean. He answered in English. Junpei asked in English and he—" },
          { s: 'junpei', f: 'surprised', t: "Dude. Is he doing it on purpose? Is this a bit?" }
        ], else: [
          { n: "Haechan looked at Junpei, and at Junpei's essay, and answered him in English. Flat, dry, perfect, with an accent from somewhere very cold and very far from here." },
          { s: 'haechan', f: 'neutral', t: "I'm fine. My favorite food is not being spoken to like a microwave. Also, line four. You're not interesting in baseball. You're interested." },
          { n: "Then Fuuka, very carefully, holding the phrasebook open like a hymn sheet, said *good evening* in Korean, beautifully, with a little bow. And Haechan answered her in Korean, and it was a completely different man. Loud. Warm. A whole cheerful torrent of it, laughing halfway through at his own joke, the way an uncle answers you at a wedding." },
          { s: 'fuuka', f: 'surprised', t: "I only know page one!" },
          { s: 'junpei', f: 'surprised', t: "Dude. That's two guys. That's two different guys. Is this a bit?" }
        ] },
        { s: 'junpei', f: 'serious', t: "Leader. What'd he say? To Fuuka. The long one." },
        { n: "Everybody looked at her. She hadn't known she'd understood every word until the whole room was waiting for her to say so." },
        { choose: [
          { t: "(Translate it. Word for word.)", crush: W(1), then: [
            { s: 'solar', f: 'neutral', t: "He said her pronunciation's better than his, and he wants to know who taught her to bow like that, because it's how you bow to somebody's grandmother, and he hasn't been bowed to like a grandmother in years, and he's touched. And then something rude about Junpei's hat." },
            { s: 'junpei', f: 'surprised', t: "My HAT?" },
            { n: "Haechan was looking at her from the kitchen doorway. He hadn't moved. He looked like a man who'd thrown a ball into the dark to see if anything would throw it back, and something had." }
          ] },
          { t: "(Translate it nicely.)", crush: W(1), then: [
            { s: 'solar', f: 'neutral', t: "He said thank you, and that her bow was lovely." },
            { s: 'haechan', f: 'neutral', t: "That's not what I said." },
            { s: 'solar', f: 'neutral', t: "It's what you meant." },
            { n: "He opened his mouth to argue, and didn't, and went into the kitchen, and she heard him laugh in there, once, flat, at nothing, like a man who'd lost a bet he'd been glad to lose." }
          ] },
          { t: "(Shrug. 'No idea.')", then: [
            { s: 'solar', f: 'neutral', t: "No idea." },
            { n: "Haechan looked at her for a second longer than anybody else did. He knew. She could see him know. He let her have it anyway, and went to get his water." }
          ] }
        ] },
        torn([
          { n: "Akihiko came down halfway through the next argument about the hat, in his sweats, and asked what was so funny, and she told him, and he laughed, the big surprised bark of it, and sat on the arm of her chair with his hand on her shoulder like it lived there, which it did now." },
          { s: 'akihiko', f: 'happy', t: "You speak Korean? Since when?" },
          { s: 'solar', f: 'neutral', t: "Since about four minutes ago, apparently." },
          { n: "He squeezed her shoulder, pleased, proud of her for a thing she hadn't done, which was very like him. In the kitchen the tap ran and stopped. Nobody came back out." }
        ], [
          { n: "She thought, later, that she'd tell the person she was seeing about it, because it was funny, and she did, and they laughed. She left out the part where she'd understood him before she'd understood herself." }
        ], [])
      ] },

    { id: 'cr-hc-landing', who: 'haechan', crush: H(P.UP), slot: 'late', when: 'quiet', after: '11/12', until: '12/12', events: ['a4-household-introductions'],
      place: 'Iwatodai Dorm · Stairs', time: 'Night · 3 AM', scene: [
        { n: "Four minutes past three. She was going down. Barefoot, the black hoodie, one hand on the rail, the third stair from the top creaking the way it always did under her, and she was halfway down the flight above the second-floor landing when somebody came round the turn from below, coming up, hood up, headphones round his neck, and stopped on the landing at exactly the same moment she did." },
        { n: "They looked at each other across six stairs. Neither of them said anything. And then, at precisely the same moment, as if somebody had counted them in, they both turned round to go back the way they'd come, so as not to be the one caught going to find the other one." },
        { n: "Two steps. Both of them stopped. Both of them turned round again. At the same moment. Again." },
        { ifHeading: 'S', then: [
          { n: "He laughed. Loud, sudden, the whole-chest laugh, the kind you'd let out in a car with the windows down, and then clapped his own hand over his mouth because the building was asleep, and stood there on the landing with his shoulders shaking and his eyes screwed shut." },
          { s: 'haechan', f: 'happy', t: "We're so stupid. Agasshi. We're the two stupidest people in this whole city." }
        ], else: [
          { s: 'haechan', f: 'neutral', t: "...Wow." },
          { s: 'haechan', f: 'neutral', t: "Okay. We're idiots. That's on record now." }
        ] },
        torn([
          { n: "She was standing on the stairs above the boys' floor. Akihiko's door was just down the hall, a line of dark under it, a boy asleep behind it who'd be up in two hours to run. Haechan saw her glance at it. She saw him see it." },
          { s: 'haechan', f: 'neutral', t: "Go back up." },
          { n: "He said it quietly, without anything sharp in it at all. The way you'd tell somebody the train they wanted was on the other platform." },
          { s: 'haechan', f: 'neutral', t: "It's late, and he runs at five, and you'll feel bad all day if you're tired at him. Go on." },
          { choose: [
            { t: "I wasn't— I was just going to the laundry room.", crush: W(1), then: [
              { s: 'haechan', f: 'neutral', t: "I know. So was I. That's the problem." },
              { n: "She went back up. At the top she turned, the way she always seemed to turn now, and he was still on the landing, looking at the stairs she'd just climbed, and then he went down instead of up, and she heard the dryer start a minute later, warm and steady through two floors, and lay in bed next to the sound and thought about Akihiko, and about the dryer, and didn't sleep until five, when she heard the front door go and Akihiko's feet on the path, and then she did." }
            ] },
            { t: "(Go back up. Don't explain.)", then: [
              { n: "She went back up without a word. He didn't make her explain. He never did. She thought, lying in the dark, that it was the kindest thing anyone had done for her all week, and that she didn't understand why he'd done it, and that she was very afraid she did." }
            ] }
          ] }
        ], [
          { n: "She was with somebody. He knew. She could see him know it, on the landing, with his hands in his hoodie pocket." },
          { s: 'haechan', f: 'neutral', t: "Go back up. I'm not going to be the reason you're tired at somebody tomorrow." },
          { choose: [
            { t: "(Go back up.)", then: [
              { n: "She went back up. At the top she turned, and he was still on the landing, and then he went down instead of up, and she heard the dryer start." }
            ] },
            { t: "We're idiots.", crush: W(1), then: [
              { s: 'haechan', f: 'neutral', t: "Yeah. Go to bed, idiot." },
              { n: "She did. It was the nicest thing anybody had called her all week, and she didn't tell anyone that either." }
            ] }
          ] }
        ], [
          { choose: [
            { t: "Where were you going?", crush: W(1), then: [
              { s: 'haechan', f: 'neutral', t: "Up. To see if your light was on." },
              { s: 'haechan', f: 'neutral', t: "Where were you going?" },
              { s: 'solar', f: 'flustered', t: "...Down. To see if the dryer was." },
              { n: "They stood there with that between them on the landing, out in the open, like a cup set down on a table neither of them was going to pick up first." }
            ] },
            { t: "Water. I was getting water.", then: [
              { s: 'haechan', f: 'neutral', t: "Kitchen's that way." },
              { n: "It was. She'd been going the other way. He let it sit there just long enough for her to hear it, and then stepped aside on the landing to let her past, toward the kitchen, with a small courteous sweep of one hand, like a man holding a door he knew she wasn't going to use." }
            ] },
            { t: "(Sit down on the stairs.)", crush: W(1), then: [
              { n: "She sat down where she was. After a second he sat down too, on the landing, with his back against the wall, six stairs below her, and they stayed there like that until the radiator on the second floor knocked its three-and-two, and neither of them went anywhere, and it was the best twenty minutes she'd had in a week." }
            ] }
          ] }
        ])
      ] },

    { id: 'cr-hc-gate-umbrella', who: 'haechan', crush: H(P.UP), slot: 'after', schoolOnly: true, weather: ['rain'], after: '11/12', until: '12/14', events: ['a4-household-introductions'],
      place: 'Gekkoukan High · Front Gate', time: 'After School', bg: 'gekkoukanhigh', cast: CLASS, scene: [
        { n: "It had started at lunch and settled in, a cold gray November rain that came straight down like it had nowhere else to be, and the front steps at the last bell were a crush of students opening umbrellas at each other, and Solar stood at the top of them with nothing, because her umbrella was in the stand by the dorm door, because it always was." },
        { s: 'maki', t: "Solar. Don't look. There's a boy." },
        { s: 'maki', t: "Across the road. Under the konbini awning. Not one of ours. Hood up. He's got an umbrella and he's looking at you like you owe him money." },
        { n: "He was. Across the road, under the awning, hood up, not on school ground, because he wasn't anything to do with this school and knew it, holding a closed umbrella by its strap. Hers. She'd have known it from across the bay." },
        { s: 'sonoda', t: "...Is that your umbrella?" },
        torn([
          { n: "And at the bottom of the steps, by the gate, with his own big black umbrella already up and his bag on his shoulder, was Akihiko, waiting for her the way he waited every rainy day now that the rain cancelled roadwork. He saw her. He lifted his chin. Then he followed her eyes across the road." },
          { n: "Haechan saw Akihiko. She watched it happen across the street, through the rain. He didn't stop, or change his face, or turn round. He just crossed the road, unhurried, in the rain without an umbrella of his own, and came as far as the gate and no further, and hooked hers over the bars where she'd find it, and looked at Akihiko." },
          { s: 'haechan', f: 'neutral', t: "Protein." },
          { s: 'akihiko', f: 'neutral', t: "...Haechan." },
          { s: 'haechan', f: 'neutral', t: "She left it in the stand. She always leaves it in the stand." },
          { n: "And he went, hood up, hands in his pockets, back across the road and off down the hill in the rain, getting wetter at a steady walk, like a man who'd decided long ago that being rained on was cheaper than standing still." },
          { s: 'akihiko', f: 'neutral', t: "He came all the way here with that?" },
          { s: 'solar', f: 'neutral', t: "I left it in the stand." },
          { n: "Akihiko looked at the umbrella on the gate, and at the gray back going away down the hill, for a long moment, the way he'd look at a fight he hadn't been in. Then he huffed something that wasn't quite a laugh." },
          { s: 'akihiko', f: 'neutral', t: "Huh. ...Good. You'd have got soaked." },
          { n: "He meant it. That was the thing. He meant it all the way through." },
          { choose: [
            { t: "(Stay under Akihiko's. Carry yours closed.)", then: [
              { n: "She took her umbrella off the gate and didn't open it. She went under his and took his arm, and he held the big black umbrella over both of them and walked on the road side, and talked about the club, and she leaned on him and laughed in the right places and meant every one of them. Her own umbrella hung off her other wrist all the way home, closed, dripping, and she didn't open it once." }
            ] },
            { t: "(Look back down the hill. Once.)", crush: W(1), then: [
              { n: "She looked back once, down the hill. He was gone round the corner. She took Akihiko's arm and went home under his umbrella and loved him the whole way, and the closed umbrella knocked against her leg every step like somebody tapping her on the shoulder." }
            ] }
          ] }
        ], [
          { n: "She was meeting someone at the station. He seemed to know that; she could see him know it across the road. He crossed only as far as the gate, and hooked her umbrella over the bars, and said one word, *yours*, and went back the way he'd come, hood up, getting wet." },
          { choose: [
            { t: "(Take it. Go and meet them.)", then: [
              { n: "She took it and went to the station and met them, and was glad to see them, honestly glad. The umbrella was dry inside when she opened it. He'd carried it all the way closed." }
            ] },
            { t: "(Call after him. He doesn't turn round.)", crush: W(1), then: [
              { n: "She called his name across the road. He lifted one hand without turning, the way you wave off a waiter, and went on down the hill. She stood at the gate with the umbrella until Maki asked if she was okay, and she said yes, and went to meet them, and was." }
            ] }
          ] }
        ], [
          { n: "She went down the steps and across the road with Maki saying *oh my god* behind her, and he put the umbrella up and held it over her without a word, the whole of it over her, his own left shoulder out in the rain going dark." },
          { s: 'haechan', f: 'neutral', t: "You left it in the stand. You always leave it in the stand." },
          { s: 'solar', f: 'neutral', t: "How did you know which one was mine?" },
          { s: 'haechan', f: 'neutral', t: "It's the one nobody else would buy." },
          { choose: [
            { t: "(Pull him under it by the sleeve.)", crush: W(1), then: [
              { n: "She took a fistful of his sleeve and pulled, and he came under the umbrella with her, and it was too small for two, and they walked to the station like that, crowded, his shoulder against hers, both of them getting a little wet on the outside edge, and neither of them said anything about it for the whole length of the hill." }
            ] },
            { t: "You came all the way to school for this?", crush: W(1), then: [
              { s: 'haechan', f: 'neutral', t: "I was in the area." },
              { s: 'solar', f: 'neutral', t: "You're never in the area." },
              { s: 'haechan', f: 'neutral', t: "I was today." }
            ] },
            { t: "(Take the umbrella. Walk ahead.)", then: [
              { n: "She took the handle out of his hand and walked ahead, dry, and he walked behind her in the rain with his hood up and didn't complain once, and at the station she held it over him at the ticket gate by reaching up, and he looked at it over his head for a long time." }
            ] }
          ] },
          { n: "Behind them, at the gate, Maki was telling the whole third-year floor that the transfer student had a *man*, an *older* man, a *foreign* man, with an *umbrella*, and Sonoda was writing it down." }
        ])
      ] },

    { id: 'cr-hc-next-line', who: 'haechan', crush: H(P.PUP), slot: 'evening', after: '11/25', until: '12/17', events: ['a4-household-introductions'],
      place: 'Iwatodai Dorm · Kitchen', time: 'Evening', bg: 'iwatodaidorm-kitchen', scene: [
        { n: "Fuuka's rota had put them on dishes together, which Fuuka swore was alphabetical and which was not, in any alphabet, and so at nine she was at the sink up to her wrists in suds and he was beside her with a towel over his shoulder, drying, fast and exact, stacking the plates in towers so square you could have built on them." },
        { ifHeading: 'R', then: [
          { n: "Junpei had left his phone on the windowsill playing something through a tinny speaker, an American song, the kind of thing that played everywhere at once a year ago, a big dumb bass line and a chorus made for shouting. She didn't know it. She was singing the next line before the singer got there." },
          { n: "Not humming. The words. All of them, in English, half under her breath, in time, and beside her Haechan's hands stopped on a plate, because he'd been about to mouth the same line and she'd beaten him to it." },
          { s: 'haechan', f: 'surprised', t: "...You know this." },
          { s: 'solar', f: 'flustered', t: "I don't. I've never heard it." },
          { s: 'haechan', f: 'neutral', t: "It played at every party on the floor under my room. Every Friday. Quarter to one, without fail, like a church bell. Bass came straight up through the boards." },
          { s: 'haechan', f: 'neutral', t: "You couldn't have heard it from your room." },
          { choose: [
            { t: "Then where did I hear it?", crush: W(1), then: [
              { s: 'haechan', f: 'neutral', t: "...Through the floor." },
              { n: "He said it flat and dried the plate and put it on the stack and didn't look at her, and his ears went red, and she stood there with her hands in the cooling water and a feeling come up in her of lying somewhere warm in the dark with music coming up through the floorboards and not wanting to be anywhere else, and no idea at all where the somewhere was." }
            ] },
            { t: "(Sing the next line too.)", crush: W(1), then: [
              { n: "She sang the next one, louder, on purpose, and he looked at her like she'd stolen his wallet, and then, flat, deadpan, in a perfectly tuneless speaking voice, he said the line after that, and she laughed so hard she dropped a glass in the suds, and he fished it out without a word." }
            ] },
            { t: "(Turn it off.)", then: [
              { n: "She dried her hand and turned it off. The kitchen went quiet except for the tap dripping. He went on drying, and after a while, very low, he hummed the bass line, just the bass line, to himself, like a man checking a room still sounded the same with the lights out." }
            ] }
          ] }
        ], else: [
          { n: "Somebody had left the old radio on the windowsill on a late-night station, and it was playing a Korean ballad, an old one, the kind with a big swooping chorus that taxi drivers sing along to with their whole chests. She didn't know it. She was singing the next line before the singer got there." },
          { n: "Not humming. The words. In Korean, all of them, half under her breath, in time, and beside her Haechan's hands stopped on a plate, because he'd taken a breath to belt the same line and she'd beaten him to it." },
          { s: 'haechan', f: 'surprised', t: "...You know this." },
          { s: 'solar', f: 'flustered', t: "I don't. I've never heard it." },
          { s: 'haechan', f: 'happy', t: "Somebody sings this in a car. Every Tuesday. Badly in the verses, perfectly in the chorus. You've heard it more times than I have." },
          { choose: [
            { t: "(Sing the high part.)", crush: W(1), then: [
              { n: "The chorus came round. She sang the high part. He sang the rest, loud, shameless, swooping, with a dripping plate held up like a microphone, and Koromaru came into the kitchen and sat down and howled along, which was somehow perfectly in tune, and Fuuka put her head round the door and went away again very quietly with her hands over her mouth." }
            ] },
            { t: "Who's in the front of the car?", crush: W(1), then: [
              { s: 'haechan', f: 'neutral', t: "...Somebody who'd like you to remember him on your own." },
              { s: 'haechan', f: 'happy', t: "I'm not doing his job for him. He'd never let me hear the end of it." }
            ] },
            { t: "(Turn it off.)", then: [
              { n: "She dried her hand and turned it off. He looked at the radio a long time, like he'd been halfway out of a door and somebody had shut it. Then he picked up the next plate." }
            ] }
          ] }
        ] },
        torn([
          { n: "Akihiko came in for water at the end of it, the way he did at nine, and stopped in the doorway, and looked at her with his eyebrows up." },
          { s: 'akihiko', f: 'surprised', t: "You sing?" },
          { s: 'solar', f: 'flustered', t: "Apparently." },
          { s: 'akihiko', f: 'happy', t: "Ha. Sing at the river sometime. It'll make the first-years run faster. Or slower. Either way I want to see it." },
          { n: "He kissed her temple on his way to the tap, quick, the way he did now in front of anybody, as if it had never once occurred to him to be embarrassed, and drank his water standing, and went back up. Beside her, Haechan dried the same plate for a long time. She let him. She didn't know what else to do with it, and the thing she felt wasn't guilt, exactly, because she hadn't done anything. It was something with no name, and it sat in the kitchen with the three of them, and none of them invited it." }
        ], [
          { n: "Afterward she thought that the person she was seeing had never heard her sing, and that she'd like them to, and that she'd just been singing at a sink beside somebody else, and she didn't know what to do with that, so she did nothing with it, and went to bed." }
        ], [])
      ] },

    { id: 'cr-hc-tower-sync', who: 'haechan', crush: H(P.PUP), slot: 'late', when: 'tartarus', after: '12/6', until: '12/20', events: ['a5-haechan-awakens'],
      place: 'Iwatodai Dorm · Front', time: 'Late Night', bg: 'iwotodaidorm-outside', scene: [
        { n: "They came back from the tower at half past one in a long loose line up the street, the city lights coming back on around them, and Junpei had been quiet for nearly a whole block, which on Junpei was a medical event, and then he stopped dead at the dorm gate and turned round." },
        { s: 'junpei', f: 'serious', t: "Okay. Okay, I gotta say it. What WAS that. On the fourteenth floor." },
        { n: "The fourteenth floor. The big thing with too many arms that had come round the corner on his blind side, and she'd thrown the heal before it swung, before he'd seen it, before she'd seen it, and he'd already been moving to where the heal would land, and then he'd been behind it, and it had been over. Twice. On two different floors. Without either of them saying one word." },
        { s: 'junpei', f: 'surprised', t: "You two got, like, a group chat in your heads? Is there a group chat? Am I in it?" },
        { s: 'fuuka', f: 'neutral', t: "I watched the readings. You moved before it did. Both of you. It's not... I don't think that's possible." },
        { s: 'haechan', f: 'neutral', t: "She plays support." },
        { s: 'junpei', f: 'serious', t: "That's not an answer, man." },
        { s: 'haechan', f: 'neutral', t: "It's the whole answer." },
        torn([
          { n: "Akihiko had been walking on her other side the whole way, close, the way he always did after the tower, and he'd been quiet too. At the gate he looked at Haechan, and then at her, without anything hard in it at all. Just looking, the way he'd look at a bout he'd lost points on and needed to understand." },
          { s: 'akihiko', f: 'serious', t: "You two fight like you've been doing it for years." },
          { s: 'akihiko', f: 'neutral', t: "That's a compliment. I mean it. I don't totally like it. I mean it anyway." },
          { choose: [
            { t: "I don't know how. I really don't.", crush: W(1), then: [
              { s: 'akihiko', f: 'neutral', t: "I know you don't." },
              { s: 'akihiko', f: 'neutral', t: "Then don't try to explain it. Not tonight. Come running at five. That one I understand." },
              { n: "He took her hand on the steps, in front of everyone, and held it, and she held his back, hard, and meant it. Behind them Haechan had fallen back to walk the last bit with Koromaru, as if he'd always meant to, one hand on the dog's back." }
            ] },
            { t: "(Take Akihiko's hand.)", then: [
              { n: "She took his hand. He looked down at it and something in his shoulders came down an inch, and he walked her up the steps like that. She didn't look back. She knew, without looking, that Haechan had stopped at the gate to let them go in first." }
            ] }
          ] }
        ], [
          { n: "She was with someone. Somebody she'd chosen, who fought beside her differently, or not at all, and she thought about them on the steps and felt the warmth of it, and still could not have said why her hands knew where this boy was going to be before he did." },
          { choose: [
            { t: "It was luck.", then: [
              { s: 'haechan', f: 'neutral', t: "It wasn't." },
              { n: "He said it to the gate, not to her, and held it open for everybody, and went in last." }
            ] },
            { t: "(Say nothing. Go in.)", crush: W(1), then: [
              { n: "She went in. On the stairs she heard him behind her, a flight down, and they both stopped on the landing at the same moment, and both didn't turn round." }
            ] }
          ] }
        ], [
          { choose: [
            { t: "It's a support thing. You wouldn't understand.", then: [
              { s: 'junpei', f: 'surprised', t: "I play support! I'm basically ALL support!" },
              { s: 'haechan', f: 'neutral', t: "You're not." },
              { n: "Junpei looked between the two of them like a man who'd walked in on the end of a joke and would be hearing about it for the rest of his life." }
            ] },
            { t: "(Look at Haechan. Don't say anything.)", crush: W(1), then: [
              { n: "She looked at him. He was already looking at her. Neither of them said anything, and Junpei threw his hands up and said *THAT, that right there, that's the group chat*, and went inside, and Yukari followed him, laughing, and the two of them stood at the gate a while longer under the streetlight." },
              { s: 'haechan', f: 'neutral', t: "Couple hundred times. Somewhere. That's all it is." },
              { s: 'solar', f: 'neutral', t: "We've never fought together." },
              { s: 'haechan', f: 'neutral', t: "Not here." }
            ] },
            { t: "We've never fought together before.", crush: W(1), then: [
              { s: 'haechan', f: 'neutral', t: "Not here." },
              { n: "He said it simply and held the gate for her, and she went through it with the words going round in her like a coin in a dryer." }
            ] }
          ] }
        ])
      ] },

    /* ── C. After his rank 8: every universe. Dating, or friends, and still the pull. ── */
    { id: 'cr-hc-every-one', who: 'haechan', crush: H('dating'), slot: 'late', when: 'quiet', after: '12/22', until: '1/20', flags: AFTER,
      place: 'Iwatodai Dorm · Laundry Room', time: 'Night · 3 AM', bg: 'iwatodaidorm-laundryroom', scene: [
        { n: "Three in the morning, and she didn't have to decide to go down anymore. She just went. He was on the dryer and she was on the other one and their knees were touching across the gap now, on purpose, and the tube light hummed its flat E, and he was eating the last of a bag of chips one at a time, as if rationing them." },
        { s: 'solar', f: 'neutral', t: "Was it always you?" },
        { s: 'haechan', f: 'neutral', t: "Define always." },
        { s: 'solar', f: 'neutral', t: "In every one. Every place I am. Was it always you?" },
        { ifHeading: 'R', then: [
          { s: 'haechan', f: 'neutral', t: "Every one I've been in." },
          { s: 'haechan', f: 'neutral', t: "And every time it starts the same. You don't know who I am, or you do and you hate it. Then about a week later you're furious about it. Then you're on a roof." },
          { s: 'haechan', f: 'serious', t: "Then you find out the worst of me. Then you believe me anyway. That's as far as we got." },
          { s: 'haechan', f: 'serious', t: "I'm used to it. I'm good at it now. I'm basically a professional at being forgotten by you." }
        ], else: [{ ifHeading: 'S', then: [
          { s: 'haechan', f: 'happy', t: "Every one I've been in. I've checked. In one you looked at me on a dock like something the tide left behind, and in this one you sat on a cold dryer to prove a point. Same girl. Same chin." },
          { s: 'haechan', f: 'neutral', t: "You never know me first. Not once. You look at me like a stranger on a dock, every time." },
          { s: 'haechan', f: 'sad', t: "...And then you don't. That's the part I keep coming back for." }
        ], else: [{ ifHeading: 'H', then: [
          { s: 'haechan', f: 'neutral', t: "Every one I'm in. That's two. You live in three." },
          { s: 'haechan', f: 'neutral', t: "There's one I'm not in. You know which. I've thought about it a lot." },
          { s: 'haechan', f: 'serious', t: "Finding you's mine. Every time. Where you go after, that's yours. I'm not going to mix those up. I'd rather lose than do that." }
        ], else: [{ ifHeading: 'stay', then: [
          { s: 'haechan', f: 'neutral', t: "Every one. Even this one. This one I'm a visitor. It's yours, not mine. I came anyway." },
          { s: 'haechan', f: 'neutral', t: "You'll stay. I know you will. I knew on the platform. That's fine." },
          { s: 'haechan', f: 'serious', t: "It still counts. Being found and not kept still counts. Somebody should've told me that years ago." }
        ], else: [
          { s: 'haechan', f: 'neutral', t: "Every one. All of them at once, now. I can feel you in both of mine like a light left on in two houses." },
          { s: 'haechan', f: 'happy', t: "You didn't know me in any of them at first. Not once. It's the one thing you're consistent about. That and the coat." }
        ] }] }] }] },
        torn([
          { n: "There was Akihiko. There was a conversation that belonged to him, and to her face, in daylight, not to this room at three in the morning, and she would not make it smaller than it was by having it in her head with somebody else. He'd hear it from her. Or he had. Either way, she owed him the whole of it, and he'd get it." },
          { n: "Haechan knew. He'd known on the dryer on the eighteenth. He didn't say anything about it now, and he didn't pretend there was nothing to say, and she was grateful for both." }
        ], [
          { n: "There was someone else she owed a whole conversation to, in daylight, with her face. She hadn't forgotten. She wasn't going to make it smaller than it was. Haechan didn't mention it, and didn't pretend there was nothing to mention." }
        ], []),
        { choose: [
          { t: "Then I'll find you first. Next time.", crush: W(2), then: [
            { s: 'haechan', f: 'surprised', t: "..." },
            { ifHeading: 'S', then: [
              { s: 'haechan', f: 'happy', t: "You won't. You'll walk straight past me and I'll have to fall in a harbor to get your attention. I'll do it. I've done worse." }
            ], else: [
              { s: 'haechan', f: 'neutral', t: "No, you won't." },
              { s: 'haechan', f: 'neutral', t: "That's fine. That's my job. Somebody's got to be the one who's looking." }
            ] }
          ] },
          { t: "(Say his name.)", crush: W(1), then: [
            { s: 'solar', f: 'neutral', t: "Donghyuck." },
            { n: "He closed his eyes the way he always did when she said it now, as if he were trying to keep it somewhere it couldn't leak out, and didn't say anything at all, which was how he said it back." }
          ] },
          { t: "What happens in the next one?", then: [
            { s: 'haechan', f: 'neutral', t: "Same thing. You don't know me. Then you do." },
            { s: 'haechan', f: 'neutral', t: "I don't need it to be different. I just need it to keep happening." }
          ] }
        ] },
        { n: "The dryer buzzed. Neither of them moved for it. Outside the high window the sky over the bay had started, very faintly, to come apart at the bottom, and they watched it do that, the two of them, the way you'd watch something you'd watched before and would again." }
      ] },

    { id: 'cr-hc-friends-pull', who: 'haechan', crush: H('faded'), slot: 'evening', after: '12/22', until: '1/25', flags: AFTER,
      place: 'Iwatodai Dorm · Kitchen', time: 'Evening', bg: 'iwatodaidorm-kitchen', scene: [
        { n: "Dishes again. Fuuka's rota hadn't heard about the laundry room on the eighteenth, or had heard and didn't care, and so here they were, her at the sink and him with the towel, and the thing that kept happening kept happening: every time she reached for something, his hand was already on its way to it. The sponge. The last bowl. The tap. They kept bumping knuckles in the suds like two people trying to go through the same door." },
        { ifHeading: 'S', then: [
          { s: 'haechan', f: 'happy', t: "This is a nightmare. I'm friend-zoned and my hands didn't get the memo. Agasshi. Tell my hands." }
        ], else: [
          { s: 'haechan', f: 'neutral', t: "My hands didn't get the memo. I'm going to need you to tell them. In writing." }
        ] },
        { choose: [
          { t: "Does it ever go away?", crush: W(1), then: [
            { s: 'haechan', f: 'neutral', t: "No." },
            { s: 'haechan', f: 'neutral', t: "It doesn't have to go anywhere. It just lives here. Like the fridge being flat." },
            { ifHeading: 'S', then: [
              { s: 'haechan', f: 'happy', t: "Some lives you get the whole thing. Some you get the guy who knows what you drink and makes you eat breakfast. I'll take this one. It's a good one. I mean that. Stop looking at me like that, I mean it." }
            ], else: [
              { s: 'haechan', f: 'neutral', t: "Some places you get the whole thing. Some you get the person who knows what you drink. I'll take this one. It's not a consolation prize. It's just a different room. Same song." }
            ] }
          ] },
          { t: "(Hand him the next bowl before he reaches for it.)", crush: W(1), then: [
            { n: "She handed it to him before he'd reached. He took it without looking. They did the whole rest of the stack like that, her hand to his, without a single bump, as if they'd decided to stop fighting the thing and just let it work, and it worked, and it was the fastest the dishes had ever been done in that kitchen." }
          ] },
          { t: "(Flick dishwater at him.)", then: [
            { n: "She flicked dishwater at him. He looked down at the wet patch on his T-shirt, and up at her, with no expression at all, and then, slowly, wrung the entire towel out over her head." },
            { s: 'haechan', f: 'neutral', t: "Friends do that." }
          ] }
        ] },
        torn([
          { n: "Akihiko came in for water at nine, the way he always did, and kissed her temple on the way to the tap, and she leaned back into it for a second and meant it all the way through. The pull was still there, by the sink, in the boy with the towel. She didn't know what it was. She didn't pretend it wasn't there either. She'd stopped being sorry for a thing she couldn't help and hadn't acted on." },
          { s: 'haechan', f: 'neutral', t: "Don't apologize for him. With your face. You're doing it with your face." },
          { s: 'haechan', f: 'neutral', t: "He's good. He runs past your door at five on purpose. I'd do the same. I'd just be worse at the running part." }
        ], [
          { n: "She was with someone. She loved them. The pull was still here, by the sink, and she didn't understand it and had stopped apologizing for it, because it wasn't anything she'd done, and she was never going to do anything with it, and he knew that better than she did." }
        ], [
          { n: "Hyein, passing through with a sewing basket, stopped in the doorway and looked at the two of them, soaked, laughing, handing each other bowls without looking, and said *friends* in a tone of voice that could have stripped paint, and went upstairs to tell Hanni." }
        ])
      ] },

    { id: 'cr-hc-photo-strip', who: 'haechan', crush: H(['dating', 'faded']), slot: 'after', offOnly: true, after: '1/10', until: '2/6', flags: AFTER,
      place: 'Paulownia Mall · Photo Booth', time: 'Daytime', bg: 'inside-mall', scene: [
        { n: "Hyein had decided they needed a photo. All four of them. In the sticker booth by the escalators with the pink curtain and the cartoon rabbit on the side and a screen that offered to give you bigger eyes, which Hyein accepted on everybody's behalf before anyone could stop her." },
        { ifHeading: 'S', then: [
          { n: "He went in loudly. He did a peace sign in the first frame and a terrible face in the second and a worse face in the third, and Hanni, wedged against the side of the booth, laughed so hard she missed the fourth." }
        ], else: [
          { s: 'haechan', f: 'neutral', t: "I don't do photos." },
          { s: 'hyein', f: 'serious', t: "You do now. Get in. Get IN. The rabbit's counting." }
        ] },
        { n: "Four flashes. They spilled out of the curtain into the noise of the mall and waited for the strip to print, and it came out of the slot still warm, and Hyein snatched it, and then went quiet, and passed it to Solar without a word." },
        { n: "Four frames. In every single one, whatever anybody else was doing, Hyein mid-shout, Hanni's eyes shut, Solar was looking at him, or he was looking at her. Never at the camera. Not once. And she had seen this strip before. Not this one. A different booth, a different strip, somewhere she couldn't place. Four frames of the same thing, two people who couldn't keep their eyes on the lens." },
        { s: 'hanni', f: 'neutral', t: "You two are like that in every photo anyone's ever taken of you." },
        { s: 'hyein', f: 'flustered', t: "EVERY one. I have a folder. At home. Of—" },
        { s: 'hanni', f: 'serious', t: "Hyein." },
        { s: 'hyein', f: 'flustered', t: "...Of birds. A folder of birds." },
        { choose: [
          { t: "(Look at the strip a long time.)", crush: W(1), then: [
            { n: "She looked at it until the warmth went out of the paper. Every universe, she thought, and didn't know where the thought had come from, only that it was true, and that it was in her hand, and that it had bigger eyes than she did." }
          ] },
          { t: "Show me the folder sometime.", crush: W(1), then: [
            { s: 'hyein', f: 'happy', t: "When we're home. I swear. I'll make a slideshow. There'll be MUSIC." },
            { s: 'hanni', f: 'neutral', t: "There won't be music." }
          ] },
          { t: "(Make him go back in. Four more. Look at the camera this time.)", then: [
            { n: "They went back in. Four more. They both tried. In the first two they managed it. In the third he looked sideways at her trying, and in the fourth she looked sideways at him looking, and the strip came out, and it was worse, and Hyein screamed." }
          ] }
        ] },
        { ifCrush: H('dating'), then: [
          { ifHeading: 'S', then: [
            { n: "Later, in the laundry room, she saw him open the Discman's cracked lid and tuck one frame inside it, against the disc, where nobody but him would ever see it, and close it again carefully, the way you'd close the eyes of something." }
          ], else: [
            { n: "Later she saw him slide one frame into his wallet, behind an old student card that didn't open a single door in this city, where nobody would ever see it but him. He saw her see. He didn't take it back out." },
            { s: 'haechan', f: 'neutral', t: "Don't. I don't do photos. That's not a photo. That's evidence." }
          ] }
        ], else: [
          { n: "Hyein cut the strip into four with her sewing scissors at the food court and gave everybody one. His was the one where Solar was laughing at him. He looked at it a while." },
          { s: 'haechan', f: 'neutral', t: "That's the good one." },
          { n: "He said it plainly, and put it in his pocket, and it was fine. It was really fine. It was a friend's photograph, and he kept it the way you'd keep a friend's, and it was still the only one he kept." }
        ] },
        torn([
          { n: "She gave Akihiko the second strip, the one where they'd both tried, and he laughed at it for a full minute and put it on the fridge with a magnet shaped like a dumbbell, right at eye level, where everyone would see it, which was exactly like him, and she loved him for it." }
        ], [
          { n: "She showed the person she was seeing the second strip, the one where they'd all tried, and they laughed, and she laughed, and she meant it." }
        ], [])
      ] }
  );

  /* ── The world reacts: Haechan's lines. Before 11/4 they're the uncanny kind (nobody to pin them on); after, the dorm
     notices. Neutral about whoever she's with. ── */
  const BEFORE = { until: '11/3' }, HERE = { after: '11/6' };
  add('late.plain', [
    { t: "Three in the morning again, wide awake, lying there listening to the building the way you'd listen for a key in a door. Nothing came up the path. She couldn't have said what she'd have done if it had.", crush: H('noticed'), ...BEFORE },
    { t: "She fell asleep humming the song that stopped in the same place, and dreamed of a loud house with a ceiling that thumped, and woke with the beat of it still in her chest and the taste of something pink and chemical in her mouth.", crush: H('noticed'), ...BEFORE },
    { t: "Four minutes past three. Below her the dryer started up, and the building settled round the sound like a dog round a stove, and she lay in the dark and listened to it turn, and slept, for once, all the way to her alarm.", crush: H(P.UP), ...HERE },
    { t: "Three in the morning. She went down without deciding to, the way she always had, except that now somebody looked up a second before she reached the door, every time, and said her name instead of anything else.", crush: H('dating'), after: '12/22' },
    { t: "The dryer started downstairs at three. She lay and listened to it turn and didn't go down, and it was all right. It was a friend's dryer. It was still the warmest sound in the building.", crush: H('faded'), after: '12/22' }
  ]);
  add('home', [
    { t: "Home. She found she'd walked straight past the lounge and the stairs and stopped outside the laundry room door with her bag still on her shoulder, for no reason at all, the way you'd stop at the door of a room somebody used to sleep in.", crush: H('noticed'), ...BEFORE },
    { t: "Home. The dryer was running down the hall with nothing in it, which was how you knew he was in, and she went up and changed and came back down and didn't tell herself why.", crush: H(P.UP), ...HERE }
  ]);
  add('study', [
    { t: "She studied with the window open an inch for the cold. A ship's horn came across the water from the port, long and low, and her pen stopped halfway through a word, and she sat there until it was done, as if it might say a name at the end.", crush: H('noticed'), ...BEFORE },
    { t: "She studied until eleven. When she went down for water there was a can of the peach soda from the back-stairs machine standing on the bottom stair, tab turned toward her, and nobody on the stairs, and she took it up and got a whole chapter done.", crush: H(P.UP), ...HERE }
  ]);
  add('late.battled', [
    { t: "Back from the tower. He walked on her left the whole way home, the side the hits had come from all night, and never once looked to see if she'd noticed, and she had, and he knew.", crush: H(P.PUP), after: '12/6' }
  ]);
  add('evening.sub', [
    { t: "The laundry room light is on downstairs and both machines are quiet. Nobody's doing laundry. You keep looking at it anyway. What now?", crush: H('noticed'), ...BEFORE },
    { t: "Hyein is mouthing something at you across the lounge, very slowly, mostly with her eyebrows. Hanni puts a cushion over her face without looking up from her book. What now?", crush: H(P.UP), ...HERE },
    { t: "Junpei wants to know, loudly, to the whole lounge, why the new guy only ever comes out of the laundry room when you go past it. Nobody answers him. Yukari throws a coaster. What now?", crush: H(P.PUP), ...HERE }
  ]);
  add('lunch.rain', [
    { t: "Lunch indoors, rain streaming down the glass. Her umbrella was in her bag. She hadn't put it there. She ate her bread by the window with one hand resting on the bag, as if it might get up and leave.", crush: H(P.UP), ...HERE }
  ]);
  add('chatter.lunch', [
    { t: "There was a guy outside the gate in the rain yesterday. Not ours. Hood up. Just standing there with an umbrella that obviously wasn't his.", crush: H(P.UP), after: '11/13' }
  ]);

  /* ── Texts: his thread, from the day after he arrives. Lowercase, flat, few words; "princess" / "pretty girl" when
     he's leaning Runners, "agasshi" when he's leaning strangers (variants by heading). He never answers how he knows. ── */
  const T = window.FEMC_GAME_TEXTS; if (!T) return;
  const hc = t => ({ from: 'haechan', t });
  const R = (t, n, then) => ({ t, ...(n ? { crush: W(n) } : {}), then: then.map(hc) });
  (T.ambient ||= []).push(
    { id: 'cr-tx-hc-fridge', thread: 'haechan', from: '11/7', to: '11/24', slot: 'evening', flag: 'arrived-haechan', crush: H(['noticed', 'crush']),
      msgs: [hc('bottom shelf. behind the eggs'), hc("green bottle. it's yours"), hc("junpei thinks it's a cleaning product. let him")],
      reply: [R('how did u know', 1, ['...', 'drink it cold']), R('thank u', 0, ['mm'])],
      variants: {
        R: { msgs: [hc('bottom shelf. behind the eggs'), hc("green bottle. yours"), hc("not answering the how. drink it cold, princess")] },
        S: { msgs: [hc('agasshi'), hc('barley tea. top shelf. cold. no ice'), hc("you'll say you don't need it. you always say that")],
          reply: [R('how did u know no ice', 1, ["you make a face at ice. before noon. every time"]), R('i dont need it', 0, ['see'])] }
      } },
    { id: 'cr-tx-hc-stair', thread: 'haechan', from: '11/13', to: '12/5', slot: 'late', flag: 'arrived-haechan', crush: H(P.UP),
      msgs: [hc('third stair from the top creaks'), hc('you stood on it for two minutes'), hc('go to sleep. or come down. stop standing on the stair')],
      reply: [R('how do u know it was me', 1, ["nobody else stands like that", "you stand like you're about to get told off"]),
        R('it was junpei', 0, ['junpei weighs more']),
        { t: '(Leave it on read.)', silent: true, then: [hc('ok. read'), hc('goodnight')] }] },
    { id: 'cr-tx-hc-umbrella', thread: 'haechan', from: '11/14', to: '12/10', slot: 'early', flag: 'arrived-haechan', crush: H(P.UP),
      msgs: [hc('rain at four'), hc("your umbrella's in the stand"), hc("take it. i'm not bringing it")],
      reply: [R('u brought it last time', 1, ['that was a one time thing', '...take it']), R('ok mom', 0, ["your mom doesn't know where you keep it. i'm worse"])],
      variants: {
        R: { msgs: [hc('rain at four'), hc("umbrella's in the stand. the ugly one"), hc("take it, pretty girl. i'm not bringing it")] },
        S: { msgs: [hc('agasshi'), hc('rain at four. umbrella. take it'), hc("if you come home wet i'm telling jin")] }
      } },
    { id: 'cr-tx-hc-cupboard', thread: 'haechan', from: '11/26', to: '12/14', slot: 'late', flag: 'arrived-haechan', crush: H(P.PUP),
      msgs: [hc("there's a cupboard under the back stairs"), hc("dead room. no echo at all"), hc("best room in the building. i'm in it. don't tell mitsuru")],
      reply: [R('can i come in', 1, ['it fits one', '...it fits two if one of them sits on a bucket']), R('ur so weird', 0, ["i'm in a cupboard. yes"])],
      variants: {
        S: { msgs: [hc('the back gate sticks'), hc("fixed it. it doesn't creak now"), hc("if you go out late use that one. i'll hear the front")],
          reply: [R('why would i go out late', 1, ["you won't", "it's fixed anyway"]), R('ur so weird', 0, ["i fix gates. it's a whole thing where i'm from"])] }
      } },
    { id: 'cr-tx-hc-heal', thread: 'haechan', from: '12/6', to: '12/18', slot: 'late', flag: 'arrived-haechan', events: ['a5-haechan-awakens'], crush: H(P.PUP),
      msgs: [hc('you healed me before it hit'), hc('twice'), hc("don't do that. i'll start counting on it")],
      reply: [R('u already count on it', 1, ['...', 'yeah']), R('then dont get hit', 0, ["i'll try. you know i won't"])] },
    { id: 'cr-tx-hc-light', thread: 'haechan', from: '12/8', to: '12/17', slot: 'late', flag: 'arrived-haechan', crush: H(['almost']),
      msgs: [hc("you're awake"), hc("your light's under the door"), hc("dryer's going. it's warm. no reason")],
      reply: [R('coming down', 1, ['k.']), R('not tonight', 0, ['ok', "it'll be warm tomorrow too"])],
      variants: {
        R: { msgs: [hc("you're awake"), hc("light's under your door, pretty girl"), hc("dryer's going. no reason")] },
        S: { msgs: [hc('agasshi'), hc("your light's on. go to sleep"), hc("or don't. dryer's warm. i'm not asking")] }
      } },
    { id: 'cr-tx-hc-fourth', thread: 'haechan', from: '12/26', to: '1/20', slot: 'late', flag: ['arrived-haechan', 'year-goes-on'], crush: H('dating'),
      msgs: [hc('dreamt there was another one'), hc("a place. you were in it. you didn't know me"), hc('took you about a week. you were furious about it. good dream')],
      reply: [R('what did i say when i remembered', 2, ['you hit me', 'then you said it', 'the real one']), R("i'd find u faster", 1, ["no you wouldn't", 'you make me work for it. every time'])],
      variants: {
        S: { msgs: [hc('agasshi'), hc('dreamt you were somewhere with no sea'), hc("you didn't know me. you threw a shoe at me. i woke up laughing")],
          reply: [R('what kind of shoe', 1, ['an expensive one', "you made me give it back"]), R("i'd find u faster", 1, ["you wouldn't. you'd make me fall in a harbor first"])] }
      } },
    { id: 'cr-tx-hc-chart', thread: 'haechan', from: '12/26', to: '1/25', slot: 'evening', flag: ['arrived-haechan', 'year-goes-on'], crush: H('faded'),
      msgs: [hc('hyein made a chart'), hc('who in this building you would survive a zombie movie with'), hc("i'm second. under the dog. i've never been so respected")],
      reply: [R('koromaru deserves it', 1, ['he does. i voted for him']), R("who's last", 0, ["junpei. he's taking it badly"])] }
  );
})();
