/* The FEMC main story: four acts and the events between them. Plot notes for writers are in DO-NOT-OPEN-femc-story.md
   (Kat: don't open it, it spoils everything). Format:
   FemcSocial.story({
     cast: { id: 'Display Name' },                 // story-only speakers
     acts: [{ id, numeral, title }],               // in order; an act's title card plays before its first event
     events: [{ id, act, date: 'M/D', slot?: 0|1, title, place, music?, theme?, unlock?, scene: [...] }]
   });
   An event plays by itself on the social links page once its date arrives (and, if slot is set, at that time of day),
   one at a time, in order. Scene lines use the same format as social links (see akihiko.js), including ifRank
   for visitors Solar has met. Finished events can be replayed from the Story tab. */
FemcSocial.story({
  cast: { wren: 'Wren', porter: 'Girl on the Bench', lacuna: '???', mitsuru: 'Mitsuru', yukari: 'Yukari', junpei: 'Junpei', akihiko: 'Akihiko', elizabeth: 'Elizabeth' },
  acts: [
    { id: '1', numeral: 'I', title: 'Arrivals' },
    { id: '2', numeral: 'II', title: 'Summer of Strangers' },
    { id: '3', numeral: 'III', title: 'The Thinning' },
    { id: '4', numeral: 'IV', title: 'The Last Pages' }
  ],
  events: [
    /* ── Act I · Arrivals ── */
    { id: 'a1-people-who-dont-sleep', act: '1', date: '4/9', slot: 1, title: "people who don't sleep", place: 'Iwatodai Dorm · Lounge', music: 'mystery', scene: [
      { n: "The lounge had the particular stillness of a Thursday night in a dorm with too few people in it, the television murmuring a weather report nobody was watching, rain ticking against the front windows, the radiator clanking every few minutes like it had opinions. Junpei was horizontal on the couch. Yukari had her homework open and was not doing it. Akihiko was retaping his knuckles at the table with the focus of a surgeon." },
      { n: "Mitsuru came down the stairs with a folder under her arm, which was never a good sign, and sat in the armchair facing all of them, which was worse." },
      { s: 'mitsuru', f: 'neutral', t: "Before anyone goes to bed. The Group's sensors picked up something unusual during the last three Dark Hours." },
      { s: 'akihiko', f: 'serious', t: "Shadows?" },
      { s: 'mitsuru', f: 'neutral', t: "No. That's what's unusual." },
      { s: 'mitsuru', f: 'neutral', t: "Movement. Figures walking through the city during the hour. They aren't transmogrified, and they don't read as Shadows. They read as people." },
      { s: 'yukari', f: 'surprised', t: "People? Awake? That's... that's supposed to be just us." },
      { s: 'mitsuru', f: 'neutral', t: "It's supposed to be." },
      { s: 'junpei', f: 'happy', t: "Okay, so, ghosts. Obviously ghosts. Green sky, coffins everywhere, and some dudes are just strolling around? That's a ghost story. That's literally the plot of every ghost story." },
      { s: 'yukari', f: 'serious', t: "Junpei. Please don't." },
      { s: 'junpei', f: 'flustered', t: "What? Somebody had to say it!" },
      { n: "Solar said nothing, which took more effort than it looked like. She had a woman in a blue elevator living in the back of her head, golden eyes, a heavy book held to her chest, saying people are slipping through it, and she had no way at all of repeating that in a dorm lounge without being driven somewhere quiet by a Kirijo." },
      { n: "Mitsuru's eyes found her anyway. They had a way of doing that." },
      { s: 'mitsuru', f: 'neutral', t: "You've been quiet. Have you seen anything?" },
      { choose: [
        { t: "Maybe they're just not from around here.", notes: 0, then: [
          { s: 'mitsuru', f: 'surprised', t: "...Not from around here. Meaning what, exactly?" },
          { n: "Solar shrugged, like she always did when she'd said one sentence too many, and Mitsuru looked at her a moment longer than was comfortable before writing something down in the folder." },
          { s: 'mitsuru', f: 'neutral', t: "Noted." }
        ] },
        { t: "Ghosts, definitely. Junpei's right.", notes: 0, then: [
          { s: 'junpei', f: 'happy', t: "THANK you. Finally. Somebody in this dorm gets it." },
          { s: 'yukari', f: 'neutral', t: "Don't encourage him." },
          { n: "Mitsuru didn't laugh. She didn't write anything down, either, which somehow felt worse." }
        ] },
        { t: "(Shake your head.)", notes: 0, then: [
          { s: 'mitsuru', f: 'neutral', t: "I see." },
          { n: "She didn't sound like she saw. She sounded like someone folding the corner of a page so she could find it again later." }
        ] }
      ] },
      { s: 'akihiko', f: 'happy', t: "If they're out there during the hour, we'll find them. Simple." },
      { s: 'yukari', f: 'sad', t: "Or they'll find us. Which is the part nobody's saying." },
      { n: "Nobody said anything after that, which proved her point. Junpei turned the TV up. The weather lady promised clear skies tomorrow with the bright, untroubled confidence of someone who had never been outside at midnight in this city." },
      { place: 'Iwatodai Dorm · Her Room · The Dark Hour', time: 'Midnight', music: 'night' },
      { n: "She was still awake when it happened. She always was, lately. The clock on her desk stopped mid-tick, the lamp died without a click, and the rain hung outside her window for one long held breath before it simply wasn't there anymore, and the whole street went the color of old pond water, green and sick and very, very quiet." },
      { n: "The moon was enormous. It always was, in the hour. It sat over the rooftops like it had been invited." },
      { n: "She went to the window because she couldn't not. Below, the street was coffins, tall and black and patient, standing where people had been walking a minute ago, with dark puddles shining between them where the rain had been." },
      { n: "And at the far end of the street, under a streetlight that wasn't on, someone was standing." },
      { n: "Not a coffin. Not a Shadow, either, nothing pooled or crawling about it. Just a small figure with its arms wrapped around itself and its head tipped up toward the moon, the way you'd look up at the departures board in a station you didn't know." },
      { n: "It turned its head. Slowly, the way you turn when you feel someone looking." },
      { n: "Solar stepped back from the glass before she could find out whether it had seen her, and stood in the middle of her dark room with her heart going much too fast, and told herself it was nothing." },
      { n: "It wasn't nothing. She knew that. She'd deal with it tomorrow." }
    ] },

    { id: 'a1-last-train', act: '1', date: '4/16', slot: 1, title: 'the last train', place: 'Iwatodai Station · Platform', music: 'tender', scene: [
      { n: "Solar got off the last train from Port Island at eleven-forty with her school bag over one shoulder and the specific exhaustion of someone who had said yes to karaoke. The doors sighed shut behind her. The train slid off into the dark with barely a sound, one long gray hush, and then the platform was empty except for the hum of the vending machines and the moths turning circles under the lights." },
      { n: "Not empty, actually." },
      { n: "On the last bench, under the timetable, a girl was sitting very straight with her hands in her lap. She was about Solar's age, in a heavy navy coat with brass buttons and a porter's badge on the collar, clearly cut for someone twice her size; the sleeves swallowed her hands to the knuckles. Her hair was damp, though it hadn't rained in Iwatodai all day. Between two fingers she held a ticket." },
      { n: "She was watching the place where the train had gone, the way you'd watch a door someone had just walked out of." },
      { choose: [
        { t: "That was the last one, you know.", notes: 0, then: [
          { s: 'porter', t: "I know." },
          { s: 'porter', t: "I was meant to be on it. I'm always meant to be on it." }
        ] },
        { t: "(Sit down at the other end of the bench.)", notes: 0, then: [
          { n: "The girl glanced at her, then back at the tracks, and shifted a polite inch over, as if the bench were very crowded." },
          { s: 'porter', t: "It's gone, if you were waiting. The last one. I watched it go." }
        ] }
      ] },
      { s: 'porter', t: "Your trains are too quiet. That's the thing I can't get used to." },
      { s: 'porter', t: "Where I'm from, they sing. There's a whistle for leaving and a whistle for arriving and a long low one for when the line's clear all the way to the next valley, and you can hear them from your bed. Yours just... sigh. Like they're sorry about something." },
      { choose: [
        { t: "Where are you from?", notes: 0, then: [
          { s: 'porter', t: "Further down the line than you'd think." },
          { n: "She said it lightly, the way people say things they've decided not to be sad about yet." }
        ] },
        { t: "They're probably sorry about the fares.", notes: 0, then: [
          { n: "The girl laughed, startled, one short bright sound that bounced off the empty platform, and put her sleeve over her mouth like she'd been caught at something." },
          { s: 'porter', t: "Oh, that's awful. That's very good." }
        ] }
      ] },
      { s: 'wren', t: "I'm Wren. I should have said that first. My mother would be appalled." },
      { n: "Solar told her her name. Wren repeated it under her breath, once, carefully, like she was writing it down somewhere." },
      { n: "She turned the ticket over in her fingers. It was thick cream card, the corners gone soft from handling, printed with a destination in a looping script Solar couldn't read. It had never been punched." },
      { s: 'wren', t: "Can I ask you something odd?" },
      { s: 'wren', t: "What happens to people who stay somewhere they don't belong? Do they start belonging, eventually? Or do they just... stay?" },
      { choose: [
        { t: "I think you start to belong. Slowly.", notes: 0, then: [
          { s: 'wren', t: "Slowly. Yes. I'd like slowly." },
          { n: "She didn't sound convinced. She sounded like someone trying the word on to see if it fit." }
        ] },
        { t: "I'll let you know. I've been here ten days.", notes: 0, then: [
          { s: 'wren', t: "Oh! Then we're both new. That's a comfort, actually." },
          { n: "She smiled at the tracks. It didn't quite reach the hand holding the ticket, which was holding it much too tightly." }
        ] }
      ] },
      { place: 'Iwatodai Station · Platform · The Dark Hour', time: 'Midnight', music: 'night' },
      { n: "The clock above the stairs reached twelve and stayed there." },
      { n: "The lights went out all at once, and the vending machines cut off mid-hum, and the moths hung in the air like a photograph of moths, and then everything bled green. The attendant who'd been sweeping by the turnstiles was a coffin now, upright and black, his broom propped against it like he'd only stepped away for a second." },
      { n: "Solar's hand went to her bag before she thought about it, to the cold weight inside that she did not carry for decoration. Then she looked at the bench." },
      { n: "Wren was still sitting there. Still awake. Still holding her ticket, looking around at the green and the coffin and the swollen moon with the wide, careful eyes of someone who had seen all of this before and hadn't liked it then, either." },
      { n: "Then she looked at Solar. At Solar standing there, breathing, a person and not a coffin. Her face did something complicated." },
      { s: 'wren', t: "Oh." },
      { s: 'wren', t: "You too?" },
      { n: "Solar didn't have an answer for that. She sat back down on the bench instead, a little closer this time, and they waited out the hour together without saying much, two girls on a platform where no trains were coming, which was its own kind of answer." }
    ] },

    { id: 'a1-first-full-moon', act: '1', date: '5/9', slot: 1, title: 'the first full moon', place: 'Moonlight Bridge · The Dark Hour', scene: [
      { n: "The monorail had stopped. That was the main thing, the thing to hold on to. Somewhere behind them on the line, a train full of coffins was sitting very still on its rails, and nobody aboard would ever know how close it had come, and whatever had been driving it was gone." },
      { n: "Solar's hands were still shaking. She kept them in her pockets so nobody would see." },
      { n: "They walked home across the bridge because there was no other way to walk home, strung out along the empty lanes under the full moon, the cars frozen mid-journey around them like toys someone had set down and forgotten. The water below didn't move. Nothing moved but them." },
      { s: 'junpei', f: 'happy', t: "Did you SEE that? Did you see me? I was like, bam, and it was like, gahh, and then I was like..." },
      { s: 'yukari', f: 'neutral', t: "We were there, Junpei." },
      { s: 'junpei', f: 'happy', t: "Then you SAW me." },
      { n: "Mitsuru's voice crackled in her earpiece, cool and level, telling them well done and to come straight home, the hour had twenty minutes left in it. Solar said copy. She fell behind anyway. Not on purpose, at first." },
      { n: "There was a girl running down the far side of the bridge." },
      { n: "Not a Shadow. A girl, in a red jacket, sprinting flat out along the opposite lanes in the green dark, weaving between frozen cars with the clean economy of someone who ran every day of her life and had never once had to run from anything like this. She didn't look back. She didn't see Solar. She was gone down the Iwatodai ramp before Solar's mouth finished opening." },
      { place: 'Naganaki Shrine · The Dark Hour', time: 'Midnight' },
      { n: "It got worse, or better, depending on how you were counting, the closer they got to home." },
      { n: "On the steps of Naganaki Shrine, where the stone lanterns were dark and the big tree's leaves hung motionless, there was a fox. A fox made of light, small and gold and faintly see-through, sitting on the top step with its tails curled neatly around its feet, and it had more than one tail. It watched them pass with an expression that was, Solar would have sworn on anything, amused." },
      { choose: [
        { t: "(Point it out to Yukari.)", notes: 0, then: [
          { n: "Solar touched Yukari's sleeve and nodded at the steps. By the time Yukari turned her head there was nothing there but the shrine's own stone fox, mossy and blank-eyed, the one that had always been there." },
          { s: 'yukari', f: 'serious', t: "...What? What is it?" },
          { n: "A cat, Solar told her. Yukari looked at her for a long second, and didn't believe her, and let it go, which was a kindness." }
        ] },
        { t: "(Keep walking. Say nothing.)", notes: 0, then: [
          { n: "She kept walking. The fox's eyes followed her all the way to the corner, two small coins of light, and when she glanced back it dipped its head at her, very slightly, like a host at a door." }
        ] }
      ] },
      { place: 'Iwatodai Strip · The Dark Hour', time: 'Midnight' },
      { n: "And on the strip, outside the shuttered bookstore, a woman in a long white coat was helping someone up off the pavement." },
      { n: "Solar couldn't see who. Someone small, someone who'd fallen, or been knocked down. The woman had one hand under their elbow and the other braced against their back, steady and unhurried, talking low in a voice that didn't carry, and the coat glowed faintly in the green like it had been cut from a different kind of light. The kind of person who would stop to help anyone, anywhere, in any world." },
      { n: "Neither of them was a coffin. Neither of them looked up." },
      { s: 'junpei', f: 'neutral', t: "Yo, Solar! You coming or what? I'm not standing out here waiting for round two." },
      { n: "She went. Of course she did. She caught up and fell into step and let Junpei tell the story of the monorail a third time, with new sound effects, and laughed in the right places, and didn't look back down the strip, which took nearly everything she had." },
      { n: "Then, just as the dorm came into view, a voice in the back of her head that wasn't her own, cool and bright and faintly delighted." },
      { s: 'elizabeth', f: 'neutral', t: "More guests." },
      { n: "The hour ended. The streetlights hummed back on all at once, and the moon shrank to an ordinary size, and the city was full of ordinary people again, walking home, none of them strangers. Or all of them. It was getting hard to tell." }
    ] },

    { id: 'a1-faint-page', act: '1', date: '5/23', slot: 1, title: 'the faint page', place: 'The Velvet Room', theme: 'velvet', scene: [
      { n: "She was asleep, and then she wasn't anywhere, and then she was in blue." },
      { n: "The Velvet Room hummed the way it always did, a low, expensive sound like a refrigerator in a rich person's house, climbing past numbers that meant nothing. Elizabeth was waiting with the compendium already open across her knees, which was new. She usually liked to make an entrance with it." },
      { s: 'elizabeth', f: 'neutral', t: "Good evening. Forgive the summons. I have been reading, and I would like a second pair of eyes." },
      { s: 'elizabeth', f: 'neutral', t: "You will remember the girl at the station. The one with the ticket." },
      { n: "Solar remembered. She'd been back to the station three times since April, always late, always with an excuse ready that nobody ever asked for. Twice Wren had been on the bench. Once she hadn't, and Solar had stood on the empty platform for longer than she would admit to anyone, listening to the trains sigh." },
      { n: "Elizabeth turned the book around." },
      { n: "It was Wren's page. Solar knew it before she read the name, the way you know your own handwriting. A sketch of a girl in a coat too big for her, a bench, a line of track running away into white." },
      { n: "Except it was faint. The ink had gone the gray of a receipt left too long in a pocket, and the bottom half of the page was simply blank, as if someone had started writing her down and lost the thread halfway through a sentence." },
      { choose: [
        { t: "Why does it look like that?", notes: 0, then: [
          { s: 'elizabeth', f: 'sad', t: "Pages fade when no one holds them." }
        ] },
        { t: "(Touch the page.)", notes: 0, then: [
          { n: "It was cold. Not paper-cold. Cold like a platform at night, like a coat that had been out in the rain." },
          { s: 'elizabeth', f: 'sad', t: "Yes. Pages fade when no one holds them." }
        ] }
      ] },
      { s: 'elizabeth', f: 'sad', t: "You hold her a little. I can see where your fingers have been. But it does not take, and I have tried writing her in more firmly myself, and the ink will not stay. I do not know why." },
      { s: 'elizabeth', f: 'neutral', t: "That is not why I called you, however." },
      { n: "She turned forward several pages and stopped, and held the book open so Solar could see down into the gutter." },
      { n: "There was nothing there. Not a blank page. No page at all. Just a narrow ridge of paper along the binding, cut so clean and straight it might have been done with a ruler, and on the facing page the faint mirror-print of whatever had once been pressed against it, too smudged to read. Part of a hand, maybe. Part of a word." },
      { s: 'elizabeth', f: 'serious', t: "I did not do this." },
      { choose: [
        { t: "Then who did?", notes: 0, then: [
          { s: 'elizabeth', f: 'serious', t: "I would very much like to know." }
        ] },
        { t: "Could someone else get into this book?", notes: 0, then: [
          { s: 'elizabeth', f: 'serious', t: "No one should be able to." },
          { n: "Which was not the same as no, and they both heard it." }
        ] }
      ] },
      { n: "Elizabeth closed the compendium gently, the way you'd close a door on someone sleeping, and for one second her composure did something Solar had never seen it do. It slipped. Only slightly, at the corner of her mouth." },
      { s: 'elizabeth', f: 'happy', t: "Well. It is probably nothing. A binding fault. I shall have a word with the bookbinder." },
      { n: "Solar didn't ask who the bookbinder was. Elizabeth didn't offer. The elevator hummed on, climbing, and neither of them mentioned that a binding fault does not cut that straight." },
      { s: 'elizabeth', f: 'neutral', t: "Go and see your friend at the station, Solar. Soon, if you can." },
      { n: "She woke at her desk at four in the morning with the lamp still on and her hand flat on her textbook, fingers cold, like she'd been holding something that wasn't there." }
    ] },

    { id: 'a1-blank-page', act: '1', date: '6/8', slot: 1, title: 'the blank page', place: 'Iwatodai Station · Platform · The Dark Hour', scene: [
      { n: "The operation had gone the way they always seemed to, badly and then all at once fine, and the others were heading home to bed in a tired, triumphant knot. Solar said she wanted to walk. Mitsuru gave her a look. Solar gave her the brightest smile she owned, the one she kept for teachers and other people's parents, and Mitsuru let her go, and she felt a little gross about it the whole way to the station." },
      { n: "There were still minutes left in the hour. The station was green and silent, the turnstiles frozen open, dark puddles on the stairs catching the moon. The air smelled the way it always did then, like rust, and like old paper." },
      { n: "Wren was on the platform. She wasn't alone." },
      { n: "Standing at the platform edge beside her, very close, was someone tall and thin and made of pages." },
      { n: "That was the only way Solar's brain would let her describe it. Pages, hundreds of them, layered and overlapping like feathers, cream and white and the soft gray of old newsprint, every one of them blank. They stirred at the edges though there was no wind. It had the shape of a person, the long arms, the bowed head, but where a face should have been there was only a page, smooth and white and empty, tilted toward Wren with an attention that looked almost tender." },
      { music: 'mystery' },
      { s: 'lacuna', t: "You're so tired. I know. You've been tired for such a long time." },
      { n: "Its voice was soft. That was the worst part. Soft and warm and kind, and for one dizzy second it sounded like someone Solar had loved and couldn't place, and then like someone else entirely, and she understood without wanting to that it sounded like whoever was listening needed it to." },
      { s: 'lacuna', t: "There's a train that never has to arrive, Wren. It just goes. Through the green, forever, and nobody ever asks you to get off. Nothing is waiting at the end of it, because there isn't one." },
      { s: 'wren', t: "...Never?" },
      { s: 'lacuna', t: "Never. Isn't that kind? You'd never have to be afraid of the last stop again." },
      { n: "Wren's hand was out. Solar didn't think she even knew it. The sleeve of that enormous coat had fallen back from her wrist and her fingers were open, reaching, an inch from the blank pages, and her ticket was fluttering down to the platform at her feet." },
      { choose: [
        { t: "Wren. Don't.", notes: 0, then: [
          { n: "It came out louder than she meant it to, ringing off the dead lights and the frozen departures board, and Wren's hand jerked back like she'd touched a stove." }
        ] },
        { t: "(Grab her hand.)", notes: 0, then: [
          { n: "Solar crossed the platform in four strides and caught Wren's wrist and pulled, and Wren came back against her shoulder like something unmoored, light, much too light, like there wasn't as much of her as there should have been." }
        ] },
        { t: "Get away from her.", notes: 0, then: [
          { n: "It came out low and flat, and it surprised her, and it surprised Wren too, who stumbled back a step into Solar's side." }
        ] }
      ] },
      { n: "The figure turned its head. Slowly, the way you'd turn toward a voice you had been expecting." },
      { n: "It looked at her. It had no eyes to do it with, and it looked at her anyway, the blank page of its face tipped toward her with that same terrible gentleness, and Solar felt it like a hand laid flat on her chest. Not pushing. Just resting there. Just checking she was still breathing." },
      { s: 'lacuna', t: "Oh. It's you." },
      { s: 'lacuna', t: "Don't be frightened. I'm not here to hurt anyone. I only ever want to help." },
      { s: 'lacuna', t: "You'll understand. Everyone does, eventually." },
      { n: "Then it came apart." },
      { n: "Not violently. It simply stopped being one thing and started being many, the pages lifting off it one by one and then all at once, peeling away into a wind that wasn't blowing, and they went spiraling up past the departures board and out over the tracks and into the green dark, a flock of loose paper, rustling, until there was nothing left on the platform but the two of them and Wren's ticket, face down by the yellow line." },
      { music: 'tender' },
      { n: "Wren was holding her sleeve. Both hands, fists knotted in the fabric, the way a little kid holds on in a crowd." },
      { s: 'wren', t: "I wasn't going to go." },
      { s: 'wren', t: "I wasn't. I don't think. It just sounded so..." },
      { n: "She didn't finish. Solar didn't make her. She bent down and picked up the ticket and pressed it back into Wren's cold hand, and they stood at the edge of the platform until the lights came back on and the vending machines hummed awake and somewhere far down the line a train sighed, like it was sorry about something." },
      { place: 'The Velvet Room', time: 'Later' },
      { n: "She told Elizabeth all of it. Elizabeth listened without interrupting once, which was how Solar knew it was bad." },
      { n: "When she was finished, Elizabeth was quiet for a long moment, both gloved hands pressed flat on the closed cover of the compendium, as if she were keeping it from opening on its own." },
      { s: 'elizabeth', f: 'serious', t: "Someone has been reading my book." }
    ] }
  ]
});
