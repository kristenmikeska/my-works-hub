/* The FEMC main story: four acts and the events between them. Plot notes for writers are in DO-NOT-OPEN-femc-story.md
   (Kat: don't open it, it spoils everything). Format:
   FemcSocial.story({
     cast: { id: 'Display Name' },                 // story-only speakers
     acts: [{ id, numeral, title }],               // in order; an act's title card plays before its first event
     events: [{ id, act, date: 'M/D', slot?: 0|1, title, place, music?, theme?, unlock?, scene: [...] }]
   });
   An event plays by itself on the social links page once its date arrives (and, if slot is set, at that time of day),
   one at a time, in order. Scene lines use the same format as social links (see akihiko.js), including ifRank
   for visitors Solar has met. Finished events can be replayed from the Story tab.
   femcMetAny(ids, then, else) builds one line that plays `then` if Solar has met ANY of those visitors (rank 1+),
   and `else` if she has met none of them (ifRank on its own needs all of them).
   { ifRomance: 'id', then, else } branches on whether Solar is on that link's romance route.
   An event can wait for another with unlock: { seen: ['event-id'] }; `ending: true` marks the last one (after it,
   the final day stays open: everyone Solar has met is free, as often as she likes).
   `secret: true` keeps an event out of the act titles (it shows under Secrets in the Story tab, framed by `label`),
   and a scene line { stamp: 'id' } unlocks a passport stamp when the scene reaches it (replays included). */
function femcMetAny(ids, then, otherwise) {
  return ids.reduceRight((rest, id) => [{ ifRank: { [id]: 1 }, then, else: rest }], otherwise || [])[0];
}
FemcSocial.story({
  cast: { wren: 'Wren', porter: 'Girl on the Bench', lacuna: '???', mitsuru: 'Mitsuru', yukari: 'Yukari', junpei: 'Junpei', akihiko: 'Akihiko', elizabeth: 'Elizabeth', fuuka: 'Fuuka', aigis: 'Aigis', ken: 'Ken', koromaru: 'Koromaru', thelacuna: 'The Lacuna', bluecoat: 'Woman in a Blue Coat', hanne: 'Hanne' },
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
          { s: 'porter', f: 'sad', t: "I know." },
          { s: 'porter', f: 'sad', t: "I was meant to be on it. I'm always meant to be on it." }
        ] },
        { t: "(Sit down at the other end of the bench.)", notes: 0, then: [
          { n: "The girl glanced at her, then back at the tracks, and shifted a polite inch over, as if the bench were very crowded." },
          { s: 'porter', f: 'neutral', t: "It's gone, if you were waiting. The last one. I watched it go." }
        ] }
      ] },
      { s: 'porter', f: 'neutral', t: "Your trains are too quiet. That's the thing I can't get used to." },
      { s: 'porter', f: 'happy', t: "Where I'm from, they sing. There's a whistle for leaving and a whistle for arriving and a long low one for when the line's clear all the way to the next valley, and you can hear them from your bed. Yours just... sigh. Like they're sorry about something." },
      { choose: [
        { t: "Where are you from?", notes: 0, then: [
          { s: 'porter', f: 'neutral', t: "Further down the line than you'd think." },
          { n: "She said it lightly, the way people say things they've decided not to be sad about yet." }
        ] },
        { t: "They're probably sorry about the fares.", notes: 0, then: [
          { n: "The girl laughed, startled, one short bright sound that bounced off the empty platform, and put her sleeve over her mouth like she'd been caught at something." },
          { s: 'porter', f: 'happy', t: "Oh, that's awful. That's very good." }
        ] }
      ] },
      { s: 'wren', f: 'flustered', t: "I'm Wren. I should have said that first. My mother would be appalled." },
      { n: "Solar told her her name. Wren repeated it under her breath, once, carefully, like she was writing it down somewhere." },
      { n: "She turned the ticket over in her fingers. It was thick cream card, the corners gone soft from handling, printed with a destination in a looping script Solar couldn't read. It had never been punched." },
      { s: 'wren', f: 'neutral', t: "Can I ask you something odd?" },
      { s: 'wren', f: 'sad', t: "What happens to people who stay somewhere they don't belong? Do they start belonging, eventually? Or do they just... stay?" },
      { choose: [
        { t: "I think you start to belong. Slowly.", notes: 0, then: [
          { s: 'wren', f: 'happy', t: "Slowly. Yes. I'd like slowly." },
          { n: "She didn't sound convinced. She sounded like someone trying the word on to see if it fit." }
        ] },
        { t: "I'll let you know. I've been here ten days.", notes: 0, then: [
          { s: 'wren', f: 'happy', t: "Oh! Then we're both new. That's a comfort, actually." },
          { n: "She smiled at the tracks. It didn't quite reach the hand holding the ticket, which was holding it much too tightly." }
        ] }
      ] },
      { place: 'Iwatodai Station · Platform · The Dark Hour', time: 'Midnight', music: 'night' },
      { n: "The clock above the stairs reached twelve and stayed there." },
      { n: "The lights went out all at once, and the vending machines cut off mid-hum, and the moths hung in the air like a photograph of moths, and then everything bled green. The attendant who'd been sweeping by the turnstiles was a coffin now, upright and black, his broom propped against it like he'd only stepped away for a second." },
      { n: "Solar's hand went to her bag before she thought about it, to the cold weight inside that she did not carry for decoration. Then she looked at the bench." },
      { n: "Wren was still sitting there. Still awake. Still holding her ticket, looking around at the green and the coffin and the swollen moon with the wide, careful eyes of someone who had seen all of this before and hadn't liked it then, either." },
      { n: "Then she looked at Solar. At Solar standing there, breathing, a person and not a coffin. Her face did something complicated." },
      { s: 'wren', f: 'surprised', t: "Oh." },
      { s: 'wren', f: 'surprised', t: "You too?" },
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
      { s: 'wren', f: 'surprised', t: "...Never?" },
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
      { s: 'wren', f: 'sad', t: "I wasn't going to go." },
      { s: 'wren', f: 'sad', t: "I wasn't. I don't think. It just sounded so..." },
      { n: "She didn't finish. Solar didn't make her. She bent down and picked up the ticket and pressed it back into Wren's cold hand, and they stood at the edge of the platform until the lights came back on and the vending machines hummed awake and somewhere far down the line a train sighed, like it was sorry about something." },
      { place: 'The Velvet Room', time: 'Later' },
      { n: "She told Elizabeth all of it. Elizabeth listened without interrupting once, which was how Solar knew it was bad." },
      { n: "When she was finished, Elizabeth was quiet for a long moment, both gloved hands pressed flat on the closed cover of the compendium, as if she were keeping it from opening on its own." },
      { s: 'elizabeth', f: 'serious', t: "Someone has been reading my book." }
    ] },

    /* ── Act II · Summer of Strangers ── */
    { id: 'a2-hole-in-the-data', act: '2', date: '6/17', slot: 1, title: 'a hole in the data', place: 'Iwatodai Dorm · Command Room', music: 'mystery', scene: [
      { n: "The command room was on the fourth floor, behind a door that opened with a card, and Solar had been inside it exactly four times, every one of them the night before something tried to kill her. It had the cold, filtered air of a room built for machines, a bank of monitors humming along one wall, the long table polished so hard she could see the ceiling lights in it. Somebody had put out a plate of cookies. That was the most frightening thing in the room." },
      { n: "Everyone was there. Junpei with his cap on backward, Yukari with her arms crossed, Akihiko leaning on the wall like he'd been asked to hold it up. Fuuka sat at the console in the corner with her hands folded in her lap, small and pale and still a little hollow around the eyes from the week she'd spent inside the tower, and she smiled at Solar when she came in, apologetically, the way you'd smile at someone you were about to be partly responsible for." },
      { s: 'mitsuru', f: 'neutral', t: "Sit down, please. This isn't a reprimand." },
      { n: "It was going to be a reprimand." },
      { s: 'mitsuru', f: 'neutral', t: "Since Yamagishi joined us, we've been able to do something the sensors never could. She can listen to the hour." },
      { s: 'fuuka', f: 'neutral', t: "It's not really listening. I don't know how else to say it. Lucia hears everything that's awake. The Shadows sound like static. All of you sound like heartbeats." },
      { s: 'fuuka', f: 'neutral', t: "And then there are the others. They sound like radios, tuned to stations very, very far away. I counted thirty-one." },
      { s: 'junpei', f: 'surprised', t: "Thirty-one GHOSTS?" },
      { s: 'fuuka', f: 'sad', t: "Thirty-two. Sorry. One of them sounds like a bell, so I wasn't sure if it counted." },
      { n: "Solar thought about a fox on the shrine steps with its tails curled around its feet, and kept her face very still." },
      { ifRank: { kuromi: 1 }, then: [
        { s: 'mitsuru', f: 'neutral', t: "One of whom, I'm aware, is currently living under this roof." },
        { n: "From somewhere below them, faintly, came the sound of Kuromi singing a song she had clearly written herself about a princess who was very stuck-up. Mitsuru did not acknowledge it, which was its own kind of acknowledgment." }
      ] },
      { n: "Mitsuru slid a printout across the table. A long gray trace of the night of the eighth, the station, eleven minutes before the hour ended. Solar found herself in it immediately, a steady bright mark, irritatingly easy to identify. Beside it was a second mark so faint it was barely a pencil line, flickering in and out like a bad bulb." },
      { n: "And beside that, nothing. Not a blank stretch. A gap, clean-edged, as if the machine had blinked at exactly that spot and only that spot." },
      { s: 'mitsuru', f: 'neutral', t: "That's you. I don't know what that is. And this, the sensors read as nothing at all. Something stood on that platform that the most expensive equipment in Japan believes isn't there." },
      { s: 'fuuka', f: 'neutral', t: "I heard it on the recording. It doesn't sound like anything. It sounds like the moment after a song ends, before anyone claps." },
      { s: 'mitsuru', f: 'neutral', t: "I'd like you to tell me what you know." },
      { choose: [
        { t: "They're not from here. They're lost, and they can't get home.", notes: 0, then: [
          { s: 'mitsuru', f: 'surprised', t: "...Lost from where?" },
          { n: "The honest answer was further down the line than you'd think, and Solar couldn't find a way to say that in this room without sounding like she needed a doctor. She said she didn't know. It was almost true." }
        ] },
        { t: "(Tell her about the thing made of pages.)", notes: 0, then: [
          { n: "She told it badly and out of order, the pages and the blank face and the voice that sounded like someone you'd loved, and by the end Junpei had stopped fidgeting and Fuuka had both hands over her mouth." },
          { s: 'mitsuru', f: 'sad', t: "...I see." }
        ] },
        { t: "I don't know what they are.", notes: 0, then: [
          { s: 'mitsuru', f: 'neutral', t: "That's true, I think. It just isn't all of it." },
          { n: "Solar had nothing to say to that, so she ate a cookie, which was a mistake. Fuuka had made them." }
        ] }
      ] },
      femcMetAny(['kuromi', 'ann', 'kiriko', 'mercy', 'haru', 'sebastian'], [
        { n: "Then, because stopping there felt stupid, she said she'd met some of them. That they ate and slept and complained about the humidity and were, as far as she could tell, exactly as much people as anyone in this room. That they were frightened, mostly, and hiding it, mostly, and not very well." },
        { s: 'mitsuru', f: 'neutral', t: "Names?" },
        { n: "They'd rather introduce themselves, Solar said. Mitsuru, against every expectation, seemed to respect that." }
      ]),
      { n: "She didn't mention the girl on the bench by name. It was the one thing she had that was only hers, and she wasn't ready to see it on a printout." },
      { s: 'akihiko', f: 'serious', t: "So they're stuck here. And there's something out there the sensors can't see, standing right next to them." },
      { s: 'akihiko', f: 'neutral', t: "Then we don't hunt them. We look out for them." },
      { s: 'junpei', f: 'flustered', t: "Can we look out for them from, like, a respectful distance? In case they're ghosts?" },
      { s: 'yukari', f: 'serious', t: "Senpai. You're going to tell the Group. Aren't you." },
      { n: "Mitsuru looked at the printout for a long time. Her hand had come to rest flat over the gap, Solar noticed, as if she were keeping it from spreading." },
      { s: 'mitsuru', f: 'neutral', t: "Not yet." },
      { n: "Nobody said anything. In this building, in that family, not yet was a very large thing to say out loud." },
      { s: 'mitsuru', f: 'neutral', t: "If you meet them, bring them here. I would rather know their faces than their readings." },
      { s: 'mitsuru', f: 'sad', t: "And if you see this again, don't walk toward it. Walk away, and call me." },
      { choose: [
        { t: "I'll call you.", notes: 0, then: [
          { s: 'mitsuru', f: 'neutral', t: "Thank you." }
        ] },
        { t: "(Nod. Don't promise.)", notes: 0, then: [
          { n: "Mitsuru noticed. She let it go anyway, and Solar watched her let it go, and they both understood it was a loan and not a gift." }
        ] }
      ] },
      { n: "She went to bed early for once and lay awake anyway, thinking about the gap on the printout, how neat it had been. It hadn't looked like an absence. It had looked like a shape somebody had cut out." },
      { n: "Thirty-two. She hoped the bell counted." }
    ] },

    { id: 'a2-hot-pot', act: '2', date: '7/18', slot: 1, title: 'hot pot', place: 'Iwatodai Dorm · Lounge', music: 'joy', scene: [
      { n: "Exams ended on a Friday, and on Saturday Junpei declared hot pot, with the authority of a man who had almost certainly failed at least one of them and needed something to live for. It was thirty-one degrees outside. The air conditioning was making a noise like a dying animal. Nobody pointed out that hot pot was a winter food, because Junpei had already bought the burner, and because there was something about the sight of him carrying it in from the convenience store like a trophy that made you want to let him have this." },
      { n: "Fuuka had volunteered to make the broth. Everyone had let her, out of kindness, and was now quietly afraid." },
      { n: "Akihiko tasted it first, because somebody had to and he considered courage a muscle. He chewed for a long time." },
      { s: 'akihiko', f: 'neutral', t: "...There's a lot of protein in it." },
      { s: 'fuuka', f: 'happy', t: "Is that good?" },
      { s: 'akihiko', f: 'happy', t: "It's not bad." },
      { n: "Yukari looked at Solar across the table. Solar looked at her bowl. Neither of them was brave enough to be the one who laughed first, and so nobody did, and it was one of the best moments she'd had all year." },
      { n: "Mitsuru had set out extra bowls. Six of them, stacked white and unused at the far end of the table, and she hadn't explained them and nobody had asked, and Solar had looked at them and felt, uncomfortably, like they were addressed to her." },
      { ifRank: { kuromi: 1 }, then: [
        { n: "Kuromi had been on the couch since four, claiming that it was her dorm and therefore her party, and she was charging a toll at the lounge door: one compliment, sincerely meant, or one dumpling. Junpei had paid in dumplings three times. Nobody had managed a compliment." },
        { s: 'kuromi', f: 'happy', t: "Princess! You're late to your own party. That's a dumpling." },
        { s: 'mitsuru', f: 'surprised', t: "...I live here." },
        { s: 'kuromi', f: 'serious', t: "A toll's a toll." }
      ] },
      { ifRank: { haru: 1 }, then: [
        { n: "Haru arrived at six with a basket of vegetables from the roof garden, took one look into Fuuka's pot, said oh, how brave, in a voice of pure sympathy, and within ten minutes had taken over the kitchen so gently that nobody, least of all Fuuka, quite saw it happen." },
        { s: 'fuuka', f: 'sad', t: "She's very nice. She's very nice, and she poured my broth down the sink." }
      ] },
      { ifRank: { ann: 1 }, then: [
        { s: 'ann', f: 'happy', t: "Okay, I brought crepes for after. Also, can somebody explain why there's a GUN on your coffee table?" },
        { n: "Someone had left an Evoker next to the remote. Junpei, who had, put it in his pocket with the speed of the deeply guilty." },
        { s: 'yukari', f: 'neutral', t: "It's a club thing. The Specialized Extracurricular Execution Squad." },
        { s: 'ann', f: 'serious', t: "...That is the worst name I've ever heard." },
        { s: 'yukari', f: 'blushing', t: "Thank you. Finally. Thank you." }
      ] },
      { ifRank: { kiriko: 1 }, then: [
        { s: 'kiriko', f: 'happy', t: "Fortunes for the house! Everybody draws. No take-backs. I don't make the rules. I mean, I do, but still." },
        { n: "Junpei drew great curse and had to lie down. Mitsuru drew great blessing and looked faintly embarrassed about it. Solar drew last, and Kiriko unfolded the paper and read it and folded it right back up again, fast, and tucked it into her own sleeve." },
        { s: 'kiriko', f: 'neutral', t: "Middle blessing. Super boring. Don't worry about it." },
        { n: "Solar worried about it." }
      ] },
      { ifRank: { mercy: 1 }, then: [
        { n: "Mercy came at eight, straight from the ward with her coat still on and her hair coming loose, apologized to Mitsuru for the hour in careful, formal Japanese, and then looked down the table and found Junpei." },
        { s: 'mercy', f: 'happy', t: "You must be the wrist." },
        { s: 'junpei', f: 'surprised', t: "I'm the... what?" },
        { n: "She rewrapped it at the table between the tofu and the cabbage, telling him in a pleasant voice exactly how stupid he had been, and for the rest of the night he looked at her like a man who had seen an angel and been told off by it." }
      ] },
      { ifRank: { sebastian: 1 }, then: [
        { n: "Sebastian spent most of the night against the wall by the stairs with one can of soda he never finished. He said maybe eleven words, all of them to Fuuka and all of them about computers, and left looking, by his own standards, radiant." }
      ] },
      { ifRank: { astarion: 1 }, then: [
        { n: "Astarion rang the bell after sunset and then simply stood on the front step, smiling, not coming in, while the door hung open and the cold air ran out past his ankles." },
        { s: 'astarion', f: 'happy', t: "Well? I'm waiting to be asked. It's terribly rude to just barge in." },
        { n: "Mitsuru looked at him. He looked at her. Something passed between them that was made entirely of good manners, and none of it was friendly." },
        { s: 'mitsuru', f: 'neutral', t: "...Come in." },
        { s: 'astarion', f: 'happy', t: "What a gracious host." },
        { s: 'junpei', f: 'serious', t: "Wait, why'd he need to be..." },
        { s: 'yukari', f: 'serious', t: "Don't." }
      ] },
      { ifRank: { aphrodite: 1 }, then: [
        { s: 'aphrodite', f: 'serious', t: "A feast. A feast, and nobody thought to invite me. Luckily love always finds the party." },
        { n: "She took the head of the table, which was Mitsuru's, without being offered it, and Mitsuru, astonishingly, let her. Junpei gave her the last fish ball as an offering. She laid one hand on his forehead and blessed him, at length." },
        { s: 'aphrodite', f: 'happy', t: "You will be loved, little mortal. Eventually. By someone. Probably." },
        { s: 'junpei', f: 'happy', t: "I'll TAKE it." }
      ] },
      { ifRank: { cloud: 1 }, then: [
        { n: "Cloud knocked once, at nine, and said he'd heard there was food. When Mitsuru asked him how he'd found the place, he shrugged." },
        { s: 'cloud', f: 'neutral', t: "Girl at the station told me. The one on the bench." },
        { n: "He ate three bowls without a word and left a bill on the table in a currency nobody recognized, and nobody had the heart to give it back." }
      ] },
      femcMetAny(['kuromi', 'ann', 'kiriko', 'mercy', 'haru', 'sebastian', 'astarion', 'aphrodite', 'cloud'], [
        { n: "By ten the lounge was louder than it had been since April, and warmer, and it smelled like soy and steam and somebody's perfume, and the extra bowls were all dirty. Mitsuru stood at the edge of it with a cup of tea she wasn't drinking, watching the room the way she watched the monitors upstairs, except that every so often the corner of her mouth moved." },
        { s: 'mitsuru', f: 'neutral', t: "So these are your strangers." },
        { s: 'mitsuru', f: 'neutral', t: "They're less alarming than their readings." }
      ], [
        { n: "Nobody came to fill the extra bowls. Mitsuru put them away at nine without comment, one at a time, the way you'd put away a guest list, and the hot pot was very good anyway, and Junpei fell asleep at the table with a mushroom on his chopsticks." },
        { s: 'mitsuru', f: 'neutral', t: "Your strangers didn't come." }
      ]),
      { s: 'mitsuru', f: 'neutral', t: "Is there anyone else?" },
      { choose: [
        { t: "There's one more.", notes: 0, then: [
          { s: 'mitsuru', f: 'neutral', t: "Then take her something. There's plenty." },
          { n: "Solar hadn't said her. She looked at Mitsuru. Mitsuru looked at the pot." }
        ] },
        { t: "(Look at the window.)", notes: 0, then: [
          { n: "Mitsuru followed her eyes to the dark glass and didn't ask, and a minute later handed her a bowl and a pair of chopsticks without a word, which from Mitsuru was practically a speech." }
        ] }
      ] },
      { place: 'Iwatodai Dorm · Front', time: 'Night', music: 'tender' },
      { n: "The heat hadn't broken. It sat on the street like a held breath, cicadas grinding away somewhere in the dark, the asphalt still giving back the day. And across the road, at the far end, under the same streetlight where in April a small figure had stood looking up at the moon, Wren was standing with her arms wrapped around herself in that enormous coat, in thirty-one degrees, watching the lit windows of the lounge." },
      { s: 'wren', f: 'flustered', t: "Oh. Hello. I got as far as the light." },
      { s: 'wren', f: 'happy', t: "I've been watching through the window. It looked very loud. I liked it." },
      { choose: [
        { t: "Come in. There's room.", notes: 0, then: [
          { s: 'wren', f: 'flustered', t: "Next time. I think I'd like to be a bit more of a person first. Does that make sense?" },
          { n: "It made more sense than Solar wanted it to." }
        ] },
        { t: "(Sit down on the curb and hand her the bowl.)", notes: 0, then: [
          { n: "They sat on the curb under the streetlight and Wren ate with great concentration and terrible chopstick technique, and said it was the best thing she'd eaten in this world, and then admitted it was the only thing." }
        ] }
      ] },
      { n: "When Solar went back in, she looked back once from the door. Wren was still under the light, and the light had laid a shadow out beside her on the pavement, thin and pale and there." },
      { n: "Solar couldn't remember ever having seen her cast one before. She decided not to think about what that meant until she knew whether it was good." }
    ] },

    { id: 'a2-end-of-the-line', act: '2', date: '7/30', slot: 0, title: 'the end of the line', place: 'Port Island · Seaside Park', music: 'sun', scene: [
      { n: "Wren had never been anywhere in daylight. Solar realized it at noon on the Iwatodai platform, watching her come up the stairs from wherever it was she went when it was light out, squinting into the white July sun like it was someone who'd recognized her across a room and she couldn't place them." },
      { n: "She rode the train to Port Island standing up, one hand on the strap and the other flat against the window, counting the stops under her breath. She read each name aloud as it came up on the board, like she was checking it against a list. When the doors opened at the right one, she let go of a breath Solar hadn't noticed she was holding." },
      { s: 'wren', f: 'happy', t: "It arrived. Exactly where it said it would." },
      { n: "She said it the way other people said it was a miracle." },
      { n: "The beach was white and blinding and smelled like salt and sunscreen and fried squid from the stand by the steps, the sand so hot it squeaked, gulls screaming over the water like they'd been personally wronged. Families. Radios. A little boy burying his father to the neck. And Wren, in a heavy wool porter's coat with brass buttons, sweating with total dignity." },
      { choose: [
        { t: "You're going to die in that coat.", notes: 0, then: [
          { s: 'wren', f: 'serious', t: "Porters don't take off their coats. It's a whole thing. There's a rule." },
          { n: "She took it off four minutes later." }
        ] },
        { t: "(Hold out your hand for it.)", notes: 0, then: [
          { n: "Wren looked at the hand for a while. Then she undid the coat, brass button by brass button, and folded it in thirds the proper way and laid it across Solar's arm like she was trusting her with a sleeping child." }
        ] }
      ] },
      { n: "Without it she was smaller than Solar had thought. Thin wrists. A white shirt with an ink stain on one cuff. And on the sand beside her, faint as pencil but unmistakable, a shadow, keeping perfect time with her when she moved." },
      { n: "She walked down to the waterline and stopped there, right at the edge of the wet sand, the way you'd stop at the yellow line on a platform." },
      { s: 'wren', f: 'neutral', t: "Our line doesn't go to the sea. Nothing does. The sea is where the land runs out, so it's where the line runs out." },
      { s: 'wren', f: 'sad', t: "My grandmother used to say the last train goes to the coast. That's why nobody ever comes back on it. There's nowhere to go after, only water." },
      femcMetAny(['kuromi', 'ann', 'kiriko', 'mercy', 'haru', 'sebastian', 'astarion', 'aphrodite', 'cloud'], [
        { s: 'wren', f: 'neutral', t: "Your friends from the dinner aren't from here either, are they. I could tell through the window. They all keep looking at doors." }
      ]),
      { choose: [
        { t: "Do you want to go in?", notes: 0, then: [
          { s: 'wren', f: 'flustered', t: "...Yes. I think so. Stay close?" }
        ] },
        { t: "It's just water.", notes: 0, then: [
          { s: 'wren', f: 'surprised', t: "It's a great deal of water. For just water." },
          { n: "She went in anyway." }
        ] }
      ] },
      { n: "She went in to her ankles first, and yelped at the cold, and then to her knees, holding her skirt up in both fists, the waves breaking around her shins and pulling back and dragging the sand out from under her heels so that she sank a little every time, and laughed, every time, like it was a trick being played just on her. The water bent around her legs the way water bends around anything that's really there." },
      { s: 'wren', f: 'neutral', t: "So this is what's at the end." },
      { s: 'wren', f: 'surprised', t: "It isn't quiet at all. I always thought it would be quiet." },
      { n: "She stood there a long time, looking out at the place where the water met the sky and neither of them stopped. Then she turned around." },
      { s: 'wren', f: 'neutral', t: "If you had a ticket. If there were a last train, and it was yours. Would you get on?" },
      { choose: [
        { t: "Not yet.", notes: 0, then: [
          { s: 'wren', f: 'happy', t: "Not yet. That's a good answer. I think that's the best answer there is." }
        ] },
        { t: "I'd want somebody to see me off.", notes: 0, then: [
          { s: 'wren', f: 'happy', t: "I'd see you off. I'd wave so hard. You'd be mortified." },
          { n: "She said it lightly. Neither of them laughed." }
        ] }
      ] },
      { n: "On the walk back to the station Wren's nose was going pink, and she kept touching it, delighted and appalled, because she'd never had a sunburn, because there wasn't enough sun where she came from to do it. Behind them, along the wet edge of the sand, her footprints filled slowly with water and stayed." },
      { n: "Solar told herself that was not a thing to cry about on a public beach, and didn't, and bought them both shaved ice instead." }
    ] },

    { id: 'a2-the-door', act: '2', date: '8/1', slot: 1, title: 'the door', place: 'The Velvet Room', theme: 'velvet', scene: [
      { n: "Blue, and the hum, and the numbers climbing past floors that didn't exist. Elizabeth wasn't sitting this time. She was standing at the far end of the room with the compendium open against her chest, reading, and she didn't look up until Solar said her name twice." },
      { s: 'elizabeth', f: 'happy', t: "Ah. Forgive me. Come and look. I have good news first, which I am told is the correct order." },
      { n: "It was Wren's page. Solar knew it by the bench before anything else." },
      { n: "It wasn't gray anymore. The ink had come back dark and certain, the coat and the bench and the line of track, and most of the blank bottom half had filled in: a station, a sea, a pink-nosed girl standing in the shallows. And on the bench, beside the drawing of Wren, there was a second figure now, small, in a school uniform, with headphones around her neck." },
      { s: 'elizabeth', f: 'happy', t: "You have been holding her. Quite firmly. I did not think it could be done." },
      { n: "Solar's chest did something she didn't have a name for and didn't want one. She looked at the second figure on the bench and then had to look somewhere else." },
      { s: 'elizabeth', f: 'neutral', t: "Now the other news." },
      { n: "She turned the pages forward. One stub in the gutter, where in May there had been one. Then another, further on. Then a third. Each one cut with that same terrible ruler-straightness." },
      { s: 'elizabeth', f: 'serious', t: "I have not been entirely honest with you. I would like to correct that, while there is still time to be useful." },
      { s: 'elizabeth', f: 'serious', t: "This book is not a record. Not only. Every page in it is a door. It is how a guest arrives in your world, and it is how a guest will go home, when it is time. I keep the doors. That is what I am for." },
      { s: 'elizabeth', f: 'sad', t: "Something has found them. It comes in at the gutter, where the pages meet, the way water finds a seam. I believe it has been here since April. I believe it came in because I left the book open." },
      { s: 'elizabeth', f: 'sad', t: "I wanted to read about them. All of them. I have never had so many guests at once. I sat up every night reading, and at some point, something began to read back." },
      { choose: [
        { t: "You let it in.", notes: 0, then: [
          { s: 'elizabeth', f: 'sad', t: "Yes." },
          { n: "She didn't defend herself. Solar had expected her to, and found it was worse when she didn't." }
        ] },
        { t: "Can't you just close it?", notes: 0, then: [
          { s: 'elizabeth', f: 'serious', t: "If I close the book, every door in it closes. Every guest you have met stays exactly where they are, forever, and never goes home. That is not stopping it. That is doing its work for it." }
        ] }
      ] },
      { s: 'elizabeth', f: 'serious', t: "It takes the faint pages. The ones no one is holding. Those come away in its hand very easily. I suspect they hardly notice." },
      { s: 'elizabeth', f: 'neutral', t: "Wren's page is not faint anymore." },
      { n: "For one second that sounded like good news. Then Solar watched Elizabeth's face, and saw her not say the rest of it, and worked it out on her own, slowly, the way you work out that the step you just put your weight on isn't there." },
      { s: 'elizabeth', f: 'sad', t: "It has been very patient with her. A faint page is easy to take. A page worth keeping is worth taking whole." },
      { s: 'elizabeth', f: 'serious', t: "The full moon is on the sixth. The hour is widest then." },
      { choose: [
        { t: "Then I'll stop seeing her.", notes: 0, then: [
          { s: 'elizabeth', f: 'serious', t: "And she will fade, and it will take her anyway, and she will not even notice she has gone. No. I will not let you choose that one." }
        ] },
        { t: "Then I'll be there.", notes: 0, then: [
          { s: 'elizabeth', f: 'neutral', t: "Yes. I rather thought you would say that." }
        ] }
      ] },
      { n: "Elizabeth closed the compendium, slowly, and held it against her chest with both hands, and for the first time since Solar had known her, she looked like a girl holding a book instead of a woman holding a door." },
      { s: 'elizabeth', f: 'neutral', t: "I am sorry. That is a sentence I have not had much use for. I find I do not like the taste of it." },
      { n: "She woke at her desk with the lamp on and the window open and the cicadas going, and a strange, faint taste of salt in her mouth, like she'd been at the sea. Five days. She counted them twice, in case she'd got it wrong. She hadn't." }
    ] },

    { id: 'a2-no-trains', act: '2', date: '8/6', slot: 1, title: 'no trains', place: 'Iwatodai Station · Platform · The Dark Hour', scene: [
      { n: "The operation ended the way they always did, too long and then too fast, and Solar was running before anyone had finished saying good work. Mitsuru didn't stop her. Mitsuru, she'd find out later, had watched her go and then turned to Fuuka and said keep a channel on her, in a voice nobody in the squad had heard her use before." },
      { n: "Wren always waited on full moons. That was the rule they'd made in June without ever saying it out loud. Bench, platform, the last few minutes of the hour, so that nothing would find her alone." },
      { n: "The bench was empty." },
      { n: "The station was green and swollen with moonlight and silent, the departures board dead, the vending machines dark, and on the bench where Wren always sat there was nothing but her ticket, lying face up. Solar picked it up. Her hands knew before she did. There was a hole in it, small and round and neat, right through the looping script of the destination. It had been punched." },
      { s: 'fuuka', f: 'surprised', t: "Solar? I can hear her. Your friend. She's moving. She's moving very fast. She's..." },
      { n: "And then a sound that had never once happened in the Dark Hour, not in all the nights Solar had stood in it. A whistle. A long, low one, rising out of the tunnel and rolling over the platform and away, the one for when the line's clear all the way to the next valley." },
      { music: 'mystery' },
      { n: "The train came out of the dark without a light on its front. It was old, older than anything on the Iwatodai line, long and black-green like the hour itself, and it made no sound on the rails at all. Its windows glowed a soft paper white, like lanterns. Inside each one, a person sat asleep." },
      { n: "Wren was in the fourth car. Window seat, facing forward, her coat folded neatly in her lap the proper way, in thirds. She was awake. She saw Solar on the platform and smiled at her, and it was the calmest Solar had ever seen her face, and that was the worst thing she had seen in her entire life." },
      { s: 'lacuna', t: "Don't be frightened. She asked." },
      { n: "The voice came from everywhere, from the pages that had begun to stir along the platform edge like leaves before rain, soft and warm and sounding, for a moment, so much like someone Solar had lost that she couldn't breathe." },
      { s: 'lacuna', t: "She asked me where this one goes. I told her the truth. Nowhere. It just goes. You should have seen how relieved she was." },
      { choose: [
        { t: "Wren! Get off the train!", notes: 0, then: [
          { n: "Wren's lips moved behind the glass. Solar couldn't hear it. She would spend a long time afterward trying to decide whether it had been I'm sorry or I'm fine, and whether, with Wren, there had ever been a difference." }
        ] },
        { t: "(Run for the doors.)", notes: 0, then: [
          { n: "She got her fingers into the seam of the nearest door and pulled until her nails bent back. It didn't move. It was paper, and paper that has decided not to tear is stronger than almost anything." }
        ] },
        { t: "Give her back.", notes: 0, then: [
          { s: 'lacuna', t: "She isn't mine. She was never anyone's. That was the whole trouble, wasn't it?" }
        ] }
      ] },
      { n: "The train moved off. Not into the tunnel. At the end of the platform the rails simply lifted, curving up off the ground and into the green sky like a ribbon somebody was pulling, and the train climbed them without a sound, car after lit car, toward the tower that the school became at midnight." },
      { s: 'fuuka', f: 'surprised', t: "It's going into Tartarus. Mitsuru-senpai, there's a train, there's a train going into the tower, how is there a..." },
      { s: 'mitsuru', f: 'neutral', t: "I see it. Solar. Come home. That's an order." },
      { n: "She did not come home. She stood on the platform with a punched ticket in her fist until the hour ended and the lights buzzed on and the vending machines woke up humming, and the board above her blinked back to life and told her, politely, that the next train wouldn't be for five hours." },
      { place: 'The Velvet Room', time: 'Later' },
      { n: "Elizabeth had the book open before Solar sat down. She turned it around without a word." },
      { n: "There was no page. Where Wren had been, the bench and the sea and the small figure with headphones, there was a stub, cut clean, and the gutter beside it was not quite dark. A thin line of light lay along the binding, like the light under a door in a house at night." },
      { s: 'elizabeth', f: 'serious', t: "It has not closed. It took her through the door and did not shut it behind itself. It did not think anyone would follow." },
      { s: 'elizabeth', f: 'neutral', t: "Tomorrow night, at the top of the hour, I can hold it open from this side. Not for long." },
      { choose: [
        { t: "Tell me how to get there.", notes: 0, then: [
          { s: 'elizabeth', f: 'serious', t: "Climb. I will meet you on the way." }
        ] },
        { t: "Is she alive?", notes: 0, then: [
          { s: 'elizabeth', f: 'sad', t: "She is kept. I do not yet know if that is the same thing." }
        ] }
      ] },
      { s: 'elizabeth', f: 'sad', t: "And more guests arrived tonight. Of all nights. I shall have to read about them later." },
      { n: "She went home. She didn't sleep. Nobody in the dorm did, it turned out. She could hear them through the walls all night, the creak of beds, a door, Junpei's television turned down very low, all of them being awake on her behalf." }
    ] },

    { id: 'a2-the-kept', act: '2', date: '8/7', slot: 1, title: 'the kept', place: 'Iwatodai Dorm · Command Room', music: 'mystery', scene: [
      { n: "The seventh of August was the hottest day of the year so far, and Solar spent all of it in the command room watching Fuuka not find anyone. Fuuka could hear the train, she said, very faintly, like a song playing in somebody else's apartment. She just couldn't hear where. It was on a floor of the tower that wasn't there." },
      femcMetAny(['kuromi', 'ann', 'kiriko', 'mercy', 'haru', 'sebastian', 'astarion', 'aphrodite', 'cloud'], [
        { n: "At eleven-thirty the doorbell rang. Then it rang again. Then nobody bothered ringing anymore; the front door just stood open to the hot night and they came in one after another, and Solar, coming down the stairs with her bag over her shoulder, realized she hadn't called a single one of them." },
        { n: "They'd felt it, they said, each in their own words. A tug, last night, under the ribs. Like a thread somewhere pulling tight." },
        { s: 'mitsuru', f: 'neutral', t: "Stay together. I don't know how I would explain any of you to the Group, and I would very much prefer not to have to explain losing you." }
      ], [
        { n: "At eleven-thirty she came down the stairs with her bag over her shoulder and found all of S.E.E.S. in the lounge, ready, nobody saying anything about the fact that they were about to climb a tower for a girl only one of them had ever met." },
        { s: 'mitsuru', f: 'neutral', t: "We leave at a quarter to. Don't thank us. You'd only be bad at it." }
      ]),
      { n: "Akihiko was taping his knuckles. Junpei was pretending to be calm, loudly. Aigis stood at the window the way she always did, the way she had since the day she'd come to them, like she was keeping watch for something only she remembered, and Ken, who'd moved in over the summer, was trying very hard to look like a person who belonged in this room. Koromaru sat at Solar's feet and leaned on her shins with his whole weight, which helped more than anything anybody said." },
      { place: 'Tartarus · The Dark Hour', time: 'Midnight', music: 'night' },
      { n: "They climbed. Fuuka's voice in their ears, floor numbers going by, the tower's halls shifting around them, checkerboard and blood-colored and wrong. And on a landing where there had never been a landing, between one floor and the next, Elizabeth was waiting for them with the compendium in her arms, looking around at the walls with undisguised delight." },
      { s: 'elizabeth', f: 'happy', t: "Good evening. What a dreadful building. I adore it. Now, please do not dawdle." },
      { n: "She opened the book to the stub where Wren had been, and held it up, and the thin line of light in the gutter widened and widened until it was the height of a door, and then it was a door, and through it, impossibly, came the smell of rain on iron." },
      { place: 'Tartarus · The Platform Between', time: 'Midnight', music: 'mystery' },
      { n: "It was a station. It went on forever. A platform running away in both directions under a sky the color of the hour, timetables hanging every few meters with nothing written on any of them, and a single track, and on it the train going around and around, endlessly, slow, every window lit. Inside, people slept. Dozens of them. More. People from more worlds than Solar had words for, curled in their seats in armor and robes and clothes she didn't have names for, their faces soft and peaceful, pages drifting around their feet. None of them looked frightened. That was what made her want to scream." },
      { s: 'aigis', f: 'surprised', t: "These people are not hostile. These people are asleep. Their vital signs indicate... contentment." },
      { ifRank: { sebastian: 1 }, then: [
        { s: 'sebastian', f: 'serious', t: "It's a loop. Same cars, same order, every time. It's not going anywhere. It's just running." },
        { s: 'sebastian', f: 'neutral', t: "That's not a train. That's a screensaver." }
      ] },
      { ifRank: { kiriko: 1 }, then: [
        { n: "A small gold light shot past them along the platform edge, many-tailed, and ran the length of the train as it came round, and stopped, dead, beside one car, ears flat." },
        { s: 'kiriko', f: 'serious', t: "Fourth car! The fox says fourth car!" }
      ], else: [
        { s: 'fuuka', f: 'neutral', t: "Fourth car. Solar, she's in the fourth car. I can hear her." }
      ] },
      { ifRank: { cloud: 1 }, then: [
        { s: 'cloud', f: 'serious', t: "She told me which train went to Port Island. First week. When I didn't know anything." },
        { n: "He stepped to the edge of the platform as the fourth car came round, and the sword came off his back in one movement, and he brought it down on the coupling between the third car and the fourth with a sound like a bell breaking. The train screamed. The back half of it shuddered and slowed and stopped." },
        { s: 'cloud', f: 'neutral', t: "...Owed her one." }
      ], else: [
        { n: "Aigis raised both arms. The noise was enormous. She put round after round into the wheels of the fourth car as it came past, and the train shrieked and dragged and finally, grudgingly, stopped." }
      ] },
      { n: "And the pages came. All at once, off the floor of every carriage and out of the blank timetables and up off the track, thousands of them, swirling in toward the fourth car like snow driven by a wind that wanted something." },
      { ifRank: { ann: 1 }, then: [
        { n: "Something cracked like a gunshot, and a whole drift of pages burst apart in the air. Ann stood on the bench behind them in red, whip in hand, breathing hard." },
        { s: 'ann', f: 'serious', t: "Hey! Paper guy! Hands OFF!" }
      ] },
      { ifRank: { aphrodite: 1 }, then: [
        { n: "Aphrodite didn't do anything, exactly. She simply walked down the platform, and got brighter, and the green went back from her like a tide going out." },
        { s: 'aphrodite', f: 'serious', t: "Nobody takes what's loved, darling. Not in front of me. It's practically in my contract." }
      ] },
      { s: 'akihiko', f: 'serious', t: "Go. We've got this. Go get her." },
      { ifRank: { kuromi: 1 }, then: [
        { n: "Kuromi was through the carriage door before Solar was, shoving it open with her shoulder, jester hat askew." },
        { s: 'kuromi', f: 'serious', t: "Nobody steals stuff from my rival! That's MY job!" }
      ] },
      { ifRank: { haru: 1 }, then: [
        { n: "Haru stopped in the aisle among the sleepers, looking down at a girl curled up with her cheek on her hands, and touched her hair, very gently, the way she'd touch a seedling." },
        { s: 'haru', f: 'sad', t: "They look so peaceful. That's what frightens me. I know that face. I've worn it." }
      ] },
      { n: "Wren was in her window seat with the coat folded in her lap. She looked up at Solar like she'd been expecting her for a long time, and wasn't sure if she was glad." },
      { s: 'wren', f: 'neutral', t: "Oh. You came all this way. It's so quiet here. Nobody ever has to get off. Isn't that... isn't it nice?" },
      { choose: [
        { t: "Get off anyway. With me.", notes: 0, then: [
          { s: 'wren', f: 'sad', t: "...With you." },
          { n: "She said it slowly, like it was a station name she'd never heard called before." }
        ] },
        { t: "You still owe me a dinner. Inside, this time.", notes: 0, then: [
          { n: "Wren stared at her. Then she laughed, one short startled sound, and put her sleeve over her mouth, and her eyes filled up." },
          { s: 'wren', f: 'happy', t: "I do, don't I. Oh, that's awful. That's very good." }
        ] },
        { t: "(Sit down next to her.)", notes: 0, then: [
          { n: "Solar sat. The seat was soft. The train was warm. It would have been so easy. And Wren looked at her sitting there, a person with a whole life outside the windows, settling in, and her face did the complicated thing again." },
          { s: 'wren', f: 'serious', t: "No. No, you can't stay here. Get up. You have to get up." }
        ] }
      ] },
      { n: "Wren stood. She picked up the coat and put it on, button by brass button, and took Solar's hand, and her hand was cold and much, much too light, and Solar held it hard enough to hurt them both." },
      { ifRank: { astarion: 1 }, then: [
        { n: "On the platform, the pages had drawn together into a tall bowed shape between them and the door, and its blank face was turned toward Astarion, and it was saying something to him too low for anyone else to hear. He laughed. It wasn't a nice laugh." },
        { s: 'astarion', f: 'serious', t: "Oh, darling. I've spent a very long time letting someone else decide when things end. Get in line." }
      ] },
      { s: 'lacuna', t: "You'll take her back to a place where everything ends? Where she'll have to stand on that platform again, and be afraid again, and choose?" },
      { s: 'lacuna', t: "Then take her. I've already given her what she asked for." },
      { s: 'lacuna', t: "But you can't hold all of them, Solar. Your hands aren't big enough. And the hour is only so wide." },
      { s: 'lacuna', t: "For now." },
      { n: "It came apart the way it had in June, into a storm of loose paper, and the paper went up into the green sky and didn't come down, and Elizabeth's voice rang down the platform, very clear and not at all calm, saying now, now, please, now, and they ran." },
      { place: 'Iwatodai Dorm · Lounge', time: 'Dawn', music: 'tender' },
      { n: "Morning found all of them in the lounge, asleep on the floor and the couches and each other, with the curtains open and the light coming in gray and then gold. Wren was on the couch under Solar's blanket. The cushions dipped under her. She was warm. Solar had checked about forty times." },
      { ifRank: { mercy: 1 }, then: [
        { s: 'mercy', f: 'neutral', t: "Pulse is slow, but steady. She's cold at the hands and feet and nowhere else. Keep her warm. Keep talking to her. Bodies like to be talked to." },
        { n: "Then Mercy fell asleep sitting up in the armchair with two fingers still resting on Wren's wrist, like she'd forgotten to take them back." }
      ] },
      { n: "Wren was awake. She had the ticket in her hands, turning it over and over, and when she saw Solar watching she held it up to the light. The destination was gone. Where the looping script had been there was only cream card, clean and blank as a new page, with a small neat hole punched right through the middle of nothing." },
      { s: 'wren', f: 'neutral', t: "Isn't that strange. I can't remember where it goes." },
      { s: 'wren', f: 'sad', t: "I'm not frightened of it anymore. I can't remember what I was frightened of." },
      { n: "She smiled. It was a real smile, easy and unafraid, the kind Solar had wanted for her since April, and Solar's stomach dropped through the floor." },
      { ifRank: { rio: 1 }, then: [
        { n: "Her phone buzzed on the coffee table. Rio, asking if she was still coming to practice at nine, with a volleyball emoji, like it was any other Saturday in the world." }
      ] },
      { music: 'mystery' },
      { n: "Then, inside her head, cool and bright and not delighted at all." },
      { s: 'elizabeth', f: 'serious', t: "In my master's library, there is a word for the place in an old text where something has been lost. Where the words ought to be, and are not." },
      { s: 'elizabeth', f: 'serious', t: "A lacuna. That is what we are dealing with. It is not keeping them anymore, Solar. It is taking the endings out of them." },
      { n: "Solar went to the window. Outside, the street was ordinary and bright, a woman walking her dog, a salaryman heading for the station with his jacket over his arm. And for one heartbeat, the length of a blink, he was a coffin, tall and black and standing in the full summer sun, and then he was a man again, checking his watch, and nobody on the street had noticed." },
      { n: "She knew exactly what she'd seen. She'd deal with it in September." }
    ] },

    /* ── Act III · The Thinning ── */
    { id: 'a3-twelve-oclock', act: '3', date: '9/1', slot: 1, title: "twelve o'clock", place: 'Gekkoukan High · Rooftop', music: 'school', scene: [
      { n: "The first day of the second term was hot in the way only the first of September could be, summer refusing to read the calendar, the roof of Gekkoukan baking up through the soles of her indoor shoes. Somebody's radio down in the courtyard was playing the same three songs it had played all August. The bay was one long sheet of white glare. Solar had a melon pan in her lap that she wasn't eating and her back against the warm railing, and that was, as far as she was concerned, the whole plan for the term." },
      { n: "Junpei was lying flat on the concrete with his cap over his face, narrating his own death by heatstroke. Yukari was reading a fashion magazine with the dedicated contempt of someone who had already bought half of what was in it. Fuuka had made her own bento and was eating it slowly and bravely, and nobody had asked to try any." },
      { s: 'junpei', f: 'sad', t: "Tell my mom I died doing what I loved. Which is nothing. On a roof." },
      { s: 'yukari', f: 'neutral', t: "You can't die. You owe me eight hundred yen." },
      { n: "Solar laughed in the right place. She'd been doing a lot of that since August, laughing in the right places, sleeping the right number of hours, saying fine when people asked, and it mostly worked, the way a coat mostly works in the rain." },
      { n: "The noon bell went. Down below, the whole school poured out of its doors at once, a flood of white shirts across the courtyard, the line at the bread stand already doubling back on itself, somebody's laugh carrying all the way up to the roof, high and bright." },
      { music: 'mystery' },
      { n: "And then it didn't." },
      { n: "It happened between one breath and the next. The sky went the color of old pond water. The sun was still up there, white and enormous, and it was the wrong sun, flat and sick and staring, and every single person in the courtyard was a coffin. Hundreds of them. Tall and black and standing in neat little clusters on the bright grass, in the line at the bread stand, at the bottom of the steps, one with a dropped bento box at its feet and the lid still spinning on the concrete." },
      { n: "The radio had stopped mid-word. The cicadas had stopped. Her heart had stopped too, or felt like it, a fist closing somewhere under her ribs and holding on." },
      { n: "Then the sky was blue again. The radio finished its word. The bento lid wobbled to a stop, and a girl knelt to pick it up, laughing at herself, and the noise of three hundred people having lunch came back up over the railing as if it had never gone anywhere at all." },
      { n: "Less than a second. Solar's melon pan was on the ground. She didn't remember dropping it." },
      { s: 'junpei', f: 'surprised', t: "...Dude." },
      { s: 'junpei', f: 'surprised', t: "Dude. Tell me you saw that. Tell me that was the heat." },
      { s: 'yukari', f: 'surprised', t: "It's noon. It's twelve o'clock in the afternoon. That doesn't happen at noon." },
      { s: 'fuuka', f: 'sad', t: "I heard it. Only for a second. Like somebody opened a door on it and closed it again." },
      { choose: [
        { t: "(Look at the courtyard again.)", notes: 0, then: [
          { n: "White shirts. The bread line. The girl with the bento box, eating now, perfectly ordinary. Solar watched for a full minute anyway, the way you keep watching a dark window after something has moved behind it." }
        ] },
        { t: "It's the heat, Junpei.", notes: 0, then: [
          { s: 'junpei', f: 'neutral', t: "Okay. Cool. I'm gonna believe you, even though you're lying, because I want to." }
        ] },
        { t: "It's leaking.", notes: 0, then: [
          { s: 'fuuka', f: 'sad', t: "...Leaking. Yes. That's what it sounded like." },
          { n: "Yukari looked at the two of them like she wanted very badly for somebody to laugh. Nobody did." }
        ] }
      ] },
      { ifRank: { rio: 1 }, then: [
        { phone: [
          { from: 'rio', t: 'weird question' },
          { from: 'rio', t: 'did your watch just skip' },
          { from: 'rio', t: 'mine went 12:00 to 12:00. whole gym went quiet for a sec' },
          { from: 'solar', t: 'probably the heat' },
          { from: 'rio', t: 'yeah' },
          { from: 'rio', t: 'felt like missing a step on the stairs though' }
        ], contact: 'Rio · 12:01 PM', handle: 'rio', me: 'solar' },
        { n: "It was the second time in five minutes she'd said the heat. It wasn't getting any truer." }
      ] },

      { place: 'Iwatodai Dorm · Lounge', time: 'Evening', music: 'mystery' },
      { n: "Mitsuru had the folder again. She sat in the armchair facing all of them with it closed on her knee, which meant she already knew what was in it and didn't like any of it." },
      { s: 'mitsuru', f: 'neutral', t: "The Group's sensors have recorded fourteen events like today's since the eighth of August. All in daylight. All less than a second long. Today's was the longest." },
      { s: 'akihiko', f: 'serious', t: "In daylight." },
      { s: 'mitsuru', f: 'neutral', t: "In daylight, over the whole city at once." },
      { s: 'ken', f: 'serious', t: "Is it the Shadows? Is it something we did?" },
      { s: 'fuuka', f: 'neutral', t: "I don't think it's anything anybody did. It's more like the hour's wearing thin. Like a sheet that's been washed too many times, so you can see the light through it. It used to stop at the edges. Now it doesn't, quite." },
      { s: 'junpei', f: 'neutral', t: "So is there, like, a guy we can punch about this? Asking for me." },
      { s: 'yukari', f: 'serious', t: "Senpai. What did you tell the Group?" },
      { s: 'mitsuru', f: 'neutral', t: "That it was residue from the full moon operations. That it would settle." },
      { s: 'yukari', f: 'serious', t: "Is it?" },
      { s: 'mitsuru', f: 'sad', t: "No." },
      { n: "Solar sat with her knees pulled up on the end of the couch and thought about a platform that went on forever, and a voice like someone you'd loved saying the hour is only so wide. For now. She'd been not thinking about it for three weeks. She'd gotten very good at it." },
      { choose: [
        { t: "(Tell them what it said in August.)", notes: 0, then: [
          { n: "She told them. The hour is only so wide. For now. She said it flatly, the way you'd read out a license plate, and still nobody spoke for a while after." },
          { s: 'akihiko', f: 'serious', t: "So it's making it wider." },
          { s: 'mitsuru', f: 'neutral', t: "...Thank you. I'd rather have heard that in August. But thank you." }
        ] },
        { t: "(Keep it to yourself. For now.)", notes: 0, then: [
          { n: "She kept it. It sat in her chest for the rest of the meeting like something swallowed wrong, and when Mitsuru looked over at her, once, she gave her the bright face, the one for teachers, and felt a little gross about it." }
        ] }
      ] },
      { s: 'mitsuru', f: 'neutral', t: "Until we know more, nobody goes out alone during the hour. And if your friends are feeling this too, I want to know." },
      femcMetAny(['kuromi', 'ann', 'kiriko', 'mercy', 'haru', 'sebastian', 'astarion', 'aphrodite', 'cloud', 'noctis', 'judy', 'shadowheart'], [
        { n: "They were. Her phone had been going since lunch, one after another, each of her strangers in their own words asking her the same question. Did you feel that. Was that you. Is it supposed to do that." }
      ], [
        { n: "Somewhere out in the city, Solar thought, every one of Fuuka's far-off radios had just skipped a beat. She hoped someone had been standing next to each of them." }
      ]),
      { ifRank: { kuromi: 1 }, then: [
        { s: 'kuromi', f: 'serious', t: "For the record, I went see-through at lunch. In front of a vending machine. In front of a CHILD." },
        { s: 'kuromi', f: 'flustered', t: "It was humiliating. Somebody's getting a prank for it. I just haven't decided who yet." }
      ] },
      { n: "Then the kitchen door opened and Wren came in with a stack of plates." },
      { n: "She'd been living on the second floor since August, in the empty room at the end of the hall that Mitsuru had made up for her without a word, the way Mitsuru did everything she actually cared about. For the first two weeks Wren had slept fourteen hours a day, like something healing. Now she came down for meals. Tonight she'd come down early and asked if she could make the rice." },
      { n: "She set the table. She pulled out a chair between Junpei and Ken and sat down in it as if she had been doing that her whole life, and passed the rice to the left." },
      { s: 'wren', f: 'happy', t: "I've never made rice before. I think it's either very good or a crime. Somebody be honest." },
      { s: 'junpei', f: 'happy', t: "It's a crime. I love it. I'd do time for this rice." },
      { n: "Everyone laughed. Wren laughed with them, easily, and reached for the pickles, and that was when Solar noticed it, the thing that had been bothering her since Wren walked in, the way you notice a clock has stopped only once you've been in the room a while." },
      { n: "In July she had stood under a streetlight across the road and said she'd like to be a bit more of a person first. In July she had looked at every door. All the visitors did. It was how you could pick them out on a crowded platform, the eyes always going to the exits, and Wren had looked at them hardest of all." },
      { n: "She hadn't looked at the door once tonight. She hadn't looked at anything like she was afraid of it." },
      { choose: [
        { t: "You came in.", notes: 0, then: [
          { s: 'wren', f: 'happy', t: "Of course I did. You asked me to, ages ago. Didn't you?" },
          { n: "She frowned, very slightly, the way you'd frown at a station name you were sure you knew." },
          { s: 'wren', f: 'neutral', t: "I'm sure you did. It doesn't matter. I'm here now." }
        ] },
        { t: "(Pass her the soy sauce.)", notes: 0, then: [
          { n: "Wren took it and said thank you and used far too much, cheerfully, and Solar watched her do it and couldn't have said why it made her throat hurt." }
        ] }
      ] },
      { s: 'ken', f: 'neutral', t: "Wren-san, did you see the thing at lunch? The green?" },
      { s: 'wren', f: 'neutral', t: "Oh, yes. I was at the station. Everyone went to sleep standing up, just for a moment." },
      { s: 'wren', f: 'happy', t: "It was rather pretty, actually. The light. I don't know why I never noticed before." },
      { n: "The table went quiet in the particular way a table goes quiet when everyone at it is deciding not to say something. Koromaru, under it, put his chin on Solar's foot and left it there." },

      { place: 'Iwatodai Dorm · 2F Hallway · The Dark Hour', time: 'Midnight', music: 'night' },
      { n: "She was awake when it came. She always was, lately. The clock stopped, the lamp died, the street outside went green and still, and Solar lay there for a minute listening to the dorm not breathe before she got up and went out into the hall." },
      { n: "Wren was at the window at the end of it, awake, of course. Visitors didn't become coffins. In April she had stood in the green with her arms wrapped around herself. Now she was leaning on the sill with her chin in her hand, watching the swollen moon over the rooftops the way people watch fireworks." },
      { s: 'wren', f: 'neutral', t: "Hello. Couldn't sleep either?" },
      { s: 'wren', f: 'neutral', t: "Do you know, I used to hate this. I remember that I hated it. I just can't remember why." },
      { s: 'wren', f: 'happy', t: "It's like a word on the tip of your tongue. Except I don't mind not finding it." },
      { choose: [
        { t: "You were afraid of it.", notes: 0, then: [
          { s: 'wren', f: 'happy', t: "Was I? How silly of me." },
          { n: "She smiled. Solar's stomach went somewhere it didn't come back from for a while." }
        ] },
        { t: "(Stand next to her.)", notes: 0, then: [
          { n: "She stood next to her. After a while Wren leaned her head on Solar's shoulder, warm, solid, heavier than she had been in June, and Solar held very still, as if she were the one who might come apart." }
        ] }
      ] },
      { n: "Wren took the ticket out of her coat pocket. She still carried it everywhere, out of habit, she said. Cream card, soft at the corners, a small neat hole punched through the middle of nothing." },
      { s: 'wren', f: 'neutral', t: "It doesn't go anywhere now. That's a relief, I think." },
      { s: 'wren', f: 'neutral', t: "Is it a relief? You'd know. You're better at this than me." },
      { n: "Solar didn't have an answer. She looked down at the street instead, at the coffins standing in their pools of green, and at the far end of it, under the streetlight where once a small figure had stood looking up at the moon, a single sheet of paper was turning over and over in the gutter, in a wind that wasn't blowing." },
      { n: "She watched it until the hour ended. She went back to bed. She didn't sleep, and somewhere around three she realized she'd been lying there listening for a train whistle, and that she had been listening for one every night since August." }
    ] },

    { id: 'a3-nobodys-name', act: '3', date: '9/5', slot: 1, title: "nobody's name", place: 'Port Island Station · The Dark Hour', scene: [
      { n: "The operation ended at twelve thirty-one by Fuuka's count, which was the only count that meant anything in the hour, and everyone was alive, and nobody was badly hurt, and Junpei had only been sick once, quietly, behind a pillar, which for a full moon was a personal best." },
      { n: "They came out of the station into the green with the slow, jelly-legged swagger of people who had survived something and wanted it noticed, except there was nobody to notice. There never was. Just the coffins, and the moon, and the dark puddles shining along the gutters." },
      { s: 'fuuka', f: 'happy', t: "Everyone did so well. There's twenty-nine minutes left in the hour. Please come straight home." },
      { n: "They walked. Past Paulownia, past the shuttered arcade, the long way round to the bridge. And the city, Solar slowly understood, was busier than it had any right to be." },
      { n: "A red ribbon came down out of the green sky over the school side of the bay like a dropped streamer, and someone came down with it, turning over once in the air and landing on the roof of the gym with both arms up, perfectly, as if there were judges." },
      { n: "In the Paulownia fountain, a man in a leather jacket sat up out of the water, soaked to the collar, reached under his arm for something that wasn't there, looked around at the coffins, and said a single word in English that Solar's teachers would not have approved of." },
      { n: "Nobody else saw. Junpei was doing his impression of the Shadow. Yukari was telling him it wasn't funny, and laughing. Solar walked at the back and counted, and didn't say anything, which was getting to be her main skill." },
      { ifRank: { kiriko: 1 }, then: [
        { n: "Kiriko's fox came trotting out to meet them at the foot of the bridge, the way it did on full moons now, a small gold light with its tails up. Halfway to Solar it stuttered like a bulb about to go. There, not there, there. It sat down hard on the asphalt and looked at its own paws, deeply offended." }
      ] },
      femcMetAny(['kuromi', 'ann', 'mercy', 'haru', 'sebastian', 'astarion', 'aphrodite', 'cloud', 'noctis', 'judy', 'shadowheart'], [
        { n: "Her phone was dead in the hour, the way everything was, but she knew. She knew the way you know someone's calling before it rings. Somewhere in the city every one of her strangers was flickering tonight, a little, at the edges, and none of them were going to tell her how much." }
      ]),
      { n: "At five to one, Fuuka stopped talking in the middle of a sentence." },
      { s: 'fuuka', f: 'surprised', t: "...It's one o'clock. Mitsuru-senpai, it's one o'clock. It should be ending. It isn't ending." },
      { s: 'mitsuru', f: 'neutral', t: "Stay together. Keep walking. Yamagishi, keep counting." },
      { n: "They kept walking. The moon didn't move. The coffins didn't move. One-oh-four. One-oh-six. It was like being kept after class by a teacher who wouldn't say why." },
      { place: 'Iwatodai Station · The Dark Hour', time: 'One-oh-nine' },
      { n: "On a bench outside Iwatodai Station, a man in a green headband had just woken up, and instead of panicking he had taken out a pen and was drawing the nearest coffin as fast as his hand would go, with an expression of pure delight." },
      { n: "And on the other bench, the one by the taxi stand, there was a woman in a long blue coat." },
      { n: "Solar knew her. That was the first awful thing. Not her name. Her. Twice in July she'd seen her on the station steps, playing a viola to nobody, the case open at her feet with nothing in it, the music thin and lovely and going nowhere. Both times Solar had meant to stop. Both times she'd been late for something." },
      { n: "The woman wasn't playing now. The viola was in its case on her knees, and she was looking up, very calmly, at the tall bowed shape made of pages that stood in front of her with its blank face tipped down toward her like a doctor at a bedside." },
      { music: 'battle' },
      { choose: [
        { t: "(Run.)", notes: 0, then: [
          { n: "She ran. Across the plaza, past the frozen taxis, her shoes loud on the stone and her bag banging against her hip, and the distance didn't close the way it should have, as if the hour had more room in it than the plaza did." }
        ] },
        { t: "Wait! Stop!", notes: 0, then: [
          { n: "It came out raw and much too loud, ringing off the dead shop fronts. The woman heard it. She turned her head toward Solar, mildly, the way you'd turn toward a car alarm in another street." }
        ] },
        { t: "What's your name?", notes: 0, then: [
          { n: "She shouted it across the plaza, and the woman looked at her, surprised, really surprised, and opened her mouth to answer." },
          { n: "Too late. Solar watched her decide it was too late. It was the kindest look anyone had ever given her, and she would think about it for weeks." }
        ] }
      ] },
      { music: 'mystery' },
      { s: 'bluecoat', t: "It's all right. I'm so tired. And nobody here knows my name anyway." },
      { n: "She folded her hands on the viola case and closed her eyes, and smiled, and went." },
      { n: "There wasn't any other word for it. She went the way a breath goes off a cold window, from the edges in, until the bench was just a bench and the coat was just a shape in the green and then wasn't even that, and the viola case went last of all, and where she had been there was a single blank page, settling onto the slats like a leaf." },
      { s: 'thelacuna', t: "Don't be frightened. It didn't hurt her. It didn't hurt at all." },
      { s: 'thelacuna', t: "You didn't know her name. Nobody did. That's why it was so easy. Nobody was holding on." },
      { choose: [
        { t: "Give her back.", notes: 0, then: [
          { s: 'thelacuna', t: "Back to what? There was nobody waiting. I looked." }
        ] },
        { t: "That isn't fair. That's just easy.", notes: 0, then: [
          { s: 'thelacuna', t: "Is there a difference? You're very young." }
        ] },
        { t: "(Pick up the page.)", notes: 0, then: [
          { n: "It was warm. Not paper-warm. Warm like a seat someone has only just stood up from." }
        ] }
      ] },
      { s: 'thelacuna', t: "I only take the ones nobody holds. You'd think you of all people would understand. You've seen what a page looks like when nobody holds it." },
      { s: 'thelacuna', t: "The hour is wider tonight. Did you notice? It's so much easier, when there's room." },
      { n: "Then it came apart the way it always did, unhurried, into a drift of loose paper that lifted off the plaza and went away over the rooftops toward the tower, and left her standing in front of an empty bench in the green with a blank page in one hand." },
      { s: 'fuuka', f: 'sad', t: "Solar? I'm sorry. One of the radios just stopped." },
      { s: 'fuuka', f: 'sad', t: "There were forty-one tonight. With the new ones. Now there's forty." },
      { music: 'night' },
      { n: "The hour ended at eleven minutes past one. Seventy-one minutes, Mitsuru said, very quietly, over the radio, and nobody answered her, and Akihiko, who had come back for Solar at a dead run, stood beside her at the bench breathing hard and didn't say anything either, which from Akihiko was a lot." },
      { place: 'Iwatodai Dorm · Rooftop', time: 'Night', music: 'tender' },
      { n: "She couldn't go to bed. She went up to the roof instead and sat with her back against the water tank, and the ordinary night came back around her, sodium light and a car somewhere and the cold coming up off the bay." },
      { n: "The page was still in her hand." },
      { n: "That was the thing she kept coming back to. A page out of the hour, lying in her palm in the plain orange light of the real world, where nothing from the hour was supposed to last a second. Blank on both sides. Soft, like it had been handled a lot. Faintly warm, still." },
      { ifRank: { kuromi: 1 }, then: [
        { n: "Kuromi found her there around two. She didn't ask. She sat down on the other side of the water tank where Solar couldn't see her, like that made it not count, and stayed until Solar's hands stopped shaking, and then said she'd only come up because it was her roof." }
      ] },
      { n: "Forty. Solar had never even heard her play long enough to know whether she was any good. She put the page inside her student handbook, between the school rules and the bell schedule, flat, the way you'd press a flower, and went downstairs, and lay awake doing the arithmetic of July." }
    ] },

    { id: 'a3-the-last-line', act: '3', date: '9/26', slot: 1, title: 'the last line', place: 'Iwatodai Station · Platform', music: 'tender', scene: [
      { n: "Saturday afternoon, the first cool one, the kind of September day that smelled like somebody somewhere was burning leaves. Solar found Wren on the Iwatodai platform where she always was now, in the porter's coat with the brass buttons, on the bench under the timetable." },
      { n: "She'd been riding the Port Island line, she said. Back and forth. All day, actually. Thirty-one times." },
      { s: 'wren', f: 'happy', t: "I don't count the stops anymore. I used to, didn't I. I used to read them all out like a list." },
      { s: 'wren', f: 'neutral', t: "I can't think why. They always come. Whichever train it is, it always goes somewhere, and then it comes back. It doesn't matter which." },
      { n: "In July she'd stepped off at Port Island and said it arrived exactly where it said it would, the way other people said it was a miracle. Solar sat down on the bench beside her and didn't say that. She didn't know how to say it without it sounding like an accusation." },
      { choose: [
        { t: "Doesn't it matter where you're going?", notes: 0, then: [
          { s: 'wren', f: 'neutral', t: "It used to. I'm almost certain it used to." },
          { s: 'wren', f: 'happy', t: "Isn't it nice that it doesn't now?" }
        ] },
        { t: "(Ride it with her once.)", notes: 0, then: [
          { n: "They rode to Port Island and back. Wren didn't look out of the window once. She told Solar a long story about a cat she'd seen on the platform at Tatsumi, and laughed at the end of it, and when the doors opened at Iwatodai she didn't notice until Solar touched her arm." }
        ] }
      ] },
      { n: "The four-fifteen pulled in. And as the doors opened, the platform went green." },
      { n: "Two seconds this time. Solar counted them. The commuters stepping off the train were coffins, a whole carriage of them, tall and black on the yellow line, and the sky through the roof was sick and swollen, and the train sat there with its doors open and nothing breathing in it." },
      { n: "And on the bench beside Wren, for those two seconds, someone was sitting. Tall, bowed, folded down small to fit on a bench, made of pages. Its hand was resting on her knee. Lightly. The way you'd rest your hand on someone's knee in a waiting room, to let them know you were still there." },
      { n: "Then it was afternoon again. Commuters. Announcements. The train. The bench beside Wren was empty, and Solar was on her feet and didn't remember standing." },
      { s: 'wren', f: 'neutral', t: "Oh, it does that. It sits with me sometimes." },
      { s: 'wren', f: 'neutral', t: "It never says anything. I think it's checking I'm all right. The way you'd look in on someone after an operation." },
      { choose: [
        { t: "Wren. It took you.", notes: 0, then: [
          { s: 'wren', f: 'neutral', t: "Did it? You came and got me. I remember that part. I remember the train stopping." },
          { s: 'wren', f: 'happy', t: "I don't remember anything being taken. Wouldn't I notice?" }
        ] },
        { t: "Next time it does, come and find me.", notes: 0, then: [
          { s: 'wren', f: 'neutral', t: "All right. If you like. I don't think it means any harm, you know." },
          { n: "She said it gently, like Solar was the one who needed looking after." }
        ] }
      ] },

      { place: 'The Velvet Room', time: 'Night', music: 'velvet' },
      { n: "Blue, and the hum, and the numbers climbing past floors that weren't there. She'd fallen asleep with the handbook open on her desk, and she knew before she looked down that the page from the bench was in her hand." },
      { n: "Elizabeth took it from her very carefully, in both gloves, the way you'd take a bird someone had found on a doorstep." },
      { s: 'elizabeth', f: 'sad', t: "Her name was Hanne." },
      { s: 'elizabeth', f: 'sad', t: "She played the viola in a city where it was always the last night of the festival. Every night, lanterns, music in every square. She did not want the festival to end. Few people do. She came through on the July moon, and she spent eight weeks on the station steps playing for people who were all, every one of them, on their way somewhere else." },
      { s: 'elizabeth', f: 'neutral', t: "Now someone in this world has heard her name. I thought you should be the one." },
      { n: "Solar said it back, once, under her breath. Hanne. It sat in her mouth like a stone she'd been handed and couldn't put down." },
      { n: "Elizabeth turned the compendium around. The stubs had multiplied since August. Solar stopped counting at nine." },
      { s: 'elizabeth', f: 'neutral', t: "And this. Which I have been waiting to show you, and dreading." },
      { n: "It was Wren's page. It was back." },
      { n: "Whole and dark and certain, the ink as sure as it had been in August. The coat, the bench, the line of track. The sea, and a girl standing in the shallows holding her skirt up in both fists. A small figure with headphones beside her on the bench. It was the most beautiful page in the book, and Solar knew it the way you know your own handwriting." },
      { n: "And at the bottom, where the writing should have gone on, it stopped. Not torn. Not faded. The last lines simply weren't there, the way a word isn't there in an old letter where the damp has gotten in. Clean paper, where an ending ought to be." },
      { s: 'elizabeth', f: 'serious', t: "Every page in this book is a door. You know that. A door has to open onto somewhere. Hers opens onto nothing at all." },
      { s: 'elizabeth', f: 'sad', t: "She cannot go home through it. And she does not want to. Those are not two problems, Solar. That is one problem, seen from both sides." },
      { choose: [
        { t: "Where did it go? Her ending.", notes: 0, then: [
          { s: 'elizabeth', f: 'serious', t: "I have been reading it, you know. The thing. As it reads me. It is only fair." },
          { s: 'elizabeth', f: 'serious', t: "Every page it wears was someone's last page. It lifts the words off and keeps the paper. Hers is in there somewhere. With Hanne's. With all of them." }
        ] },
        { t: "Can you write it back in?", notes: 0, then: [
          { s: 'elizabeth', f: 'sad', t: "I have tried. The ink will not take. It is not mine to write. It never was." },
          { s: 'elizabeth', f: 'serious', t: "It is not gone, though. I have been reading the thing that took it. Every page it wears was someone's last page, with the words lifted off. Hers is in there somewhere." }
        ] }
      ] },
      { s: 'elizabeth', f: 'neutral', t: "There is something else you should know, and I have put off telling you for longer than is polite." },
      { s: 'elizabeth', f: 'neutral', t: "The hour closes. It was always going to. At the end of January, when the year has turned and the last of the cold comes, it will shut, and every door in this book will shut with it. Every guest goes home through their own page, or not at all." },
      { s: 'elizabeth', f: 'serious', t: "It said to you that the hour was only so wide. It is stretching it. Daylight, a second at a time. If the hour never closes, no one ever has to go home. No one ever has to read their last page." },
      { s: 'elizabeth', f: 'sad', t: "Some of your friends will thank it." },
      { choose: [
        { t: "Then we stop it.", notes: 0, then: [
          { s: 'elizabeth', f: 'neutral', t: "Yes. I hoped you would say it first. It is easier to be brave second." }
        ] },
        { t: "Would that be so bad?", notes: 0, then: [
          { n: "Elizabeth didn't answer straight away. She closed the book over her finger, keeping the place, and looked at Solar for a long time with those golden eyes." },
          { s: 'elizabeth', f: 'sad', t: "I have asked myself the same question every night this month. That is how I know it is a dangerous one." }
        ] }
      ] },
      { n: "She woke at her desk. The handbook was open to the bell schedule, and the page was gone from it, and her hand was cold." },
      { n: "Down the hall Wren's door was ajar. She was asleep on top of the covers with the porter's coat folded on the chair in thirds, the proper way, and the ticket on the nightstand, blank, catching a stripe of streetlight. Solar stood in the doorway longer than she should have. Then she pulled the door to, gently, so it wouldn't click, and went back to bed and didn't sleep." }
    ] },

    { id: 'a3-visiting-hours', act: '3', date: '10/5', slot: 0, title: 'visiting hours', place: 'Tatsumi Memorial Hospital · Hallway', music: 'tender', scene: [
      { n: "The hallway on the third floor smelled like floor polish and something sweet underneath it that nobody wanted to name. The vending machine at the end of it hummed. The light through the window was the thin, clean gold of an October afternoon, the kind of light that makes everything look like it's already a memory." },
      { n: "Nobody was talking. Junpei had his cap in his hands and was turning it around and around by the brim. Yukari sat with her arms crossed so tight it looked like it hurt. Ken stood very straight by the window and didn't sit when Fuuka offered him the chair, and didn't look at anyone. Mitsuru was at the far end on the phone to the Group, saying yes, quietly, over and over, in a voice that sounded like a door being held shut." },
      { n: "Koromaru wasn't allowed in. He was lying across the hospital's front steps with his chin on his paws, and he had been there since they arrived, and he would be there when they left." },
      { n: "Akihiko was inside. He had been inside for two hours. Through the narrow window in the door Solar could see the back of his head, bowed, and the bed, and the shape in the bed that was Shinjiro and wasn't, in the way that sleeping people never quite are." },
      { n: "Wren had come too. She'd asked to. She'd never been inside a hospital, she said, and then she'd stopped, and said, I mean, I'd like to come, and Solar had understood that she was trying to say the right thing and wasn't certain what it was." },
      { n: "She stood at the door now and looked through the little window for a long time." },
      { s: 'wren', f: 'neutral', t: "He looks like the people on the train." },
      { n: "It went into Solar like cold water. Her whole body heard it before she did. Her hands, her stomach, the backs of her knees." },
      { n: "Wren turned and saw her face, and her own face changed. Not much. The way you'd look up from a book in a language you used to speak and realize someone has asked you a question." },
      { s: 'wren', f: 'sad', t: "That was wrong. Wasn't it. I can tell it was wrong from how you look." },
      { s: 'wren', f: 'sad', t: "I know this is meant to hurt. I can see it hurting all of you. It's like watching rain through a window. I remember rain. I remember being cold. I just can't get wet anymore." },
      { choose: [
        { t: "It's supposed to hurt. That's how you know he mattered.", notes: 0, then: [
          { s: 'wren', f: 'sad', t: "...Then I'd like it to hurt. I think. I'd like to know he mattered." },
          { n: "She said it carefully, the way she'd once said Solar's name on a platform, like she was writing it down somewhere so she could find it later." }
        ] },
        { t: "(Take her hand.)", notes: 0, then: [
          { n: "Her hand was warm. It was a good, solid, ordinary hand, and it held on back, and that was somehow the worst part. Solar didn't let go until the nurse came." }
        ] }
      ] },
      { n: "When the nurse came to say visiting hours were nearly over, Akihiko came out. He looked the way people look when they have been holding something heavy at arm's length for a long time and only just put it down, and haven't yet noticed their arms are shaking." },
      { s: 'akihiko', f: 'sad-3', t: "He's stable. That's the word they keep using. Stable." },
      { s: 'akihiko', f: 'serious', t: "He'll wake up. He's too stubborn not to. He's never once done what anybody told him." },
      { choose: [
        { t: "He'll wake up.", notes: 0, then: [
          { s: 'akihiko', f: 'sad-2', t: "...Yeah." },
          { n: "He said it like a man agreeing to something he had already decided to believe whatever anyone said." }
        ] },
        { t: "(Walk out with him. Don't say anything.)", notes: 0, then: [
          { n: "She walked out with him. They went down three flights of stairs side by side without a word, and at the bottom he pushed the door open for her, the way he always did, and stood there holding it a second too long." }
        ] }
      ] },

      { place: 'Iwatodai Dorm · Kitchen', time: 'Evening', music: 'tender' },
      { n: "Nobody cooked. The kitchen was dark when they got home and it stayed dark. Somebody had left the rice cooker on, and it had been keeping nothing warm all day, its little orange light the only one on in the room." },
      { n: "Koromaru had walked home beside Ken, and now he lay down in the front hall facing the door, and nobody had the heart to call him away from it." },
      { ifRank: { shinjiro: 10 }, then: [
        { n: "Solar opened the fridge. Somebody had asked her, once, sitting on this counter in the moonlight, to feed the dog. Real food. Not the canned stuff." },
        { n: "So she did. Rice, and the end of the chicken, and a little broth, warmed in his old pan on his old burner. She set the bowl down in the hall next to Koromaru without a word, and he looked at it, and looked at her, and ate it slowly, still facing the door." }
      ], else: [
        { n: "Ken made Koromaru a bowl of rice and chicken, standing on a chair to reach the pan, very carefully, because he said it was what Shinjiro-san would have done. Nobody corrected the tense. Nobody wanted to be the one who noticed it." }
      ] },
      { n: "Wren sat at the kitchen table in the dark with her coat on, very upright, her hands folded, like she was waiting for a train she couldn't remember the name of. When Solar passed her on the way to the stairs she looked up." },
      { s: 'wren', f: 'neutral', t: "I'll stay down here. In case somebody needs something. I'm not sad, so I might as well be useful." },
      { n: "It was the kindest thing anyone said all day. Solar would think so afterward, and hate that she thought so." },
      { n: "She couldn't stay in. The dorm was too full of people being quiet. She put her shoes on in the hall, stepping carefully around the dog, and went out into the cold without telling anyone where, which was fine, because she didn't know either." }
    ] },

    { id: 'a3-more-hands', act: '3', date: '10/22', slot: 1, title: 'more hands', place: 'Iwatodai Dorm · Lounge', music: 'mystery', scene: [
      { n: "On Tuesday at ten past three in the afternoon, Port Island Station had been coffins for eleven seconds." },
      { n: "Eleven. A man on the down escalator had been one step from the bottom when it started, and when it ended he stumbled, and three people caught him, and they all laughed about it, and went on with their day. Fuuka had cried in the command room afterward, very quietly, with her headphones still on, and said she was sorry, she was fine, it was only that the static had sounded so close." },
      { n: "So Mitsuru called everyone into the lounge, and this time everyone meant everyone." },
      femcMetAny(['kuromi', 'ann', 'kiriko', 'mercy', 'haru', 'sebastian', 'astarion', 'aphrodite', 'cloud', 'noctis', 'judy', 'shadowheart', 'kasumi', 'leon', 'rohan', 'widowmaker'], [
        { n: "They came. Solar's strangers, in ones and twos, out of the cold October dark, the doorbell going until Junpei propped the front door open with a shoe. There weren't enough chairs. There were never enough chairs. Somebody sat on the stairs. Somebody sat on the kitchen counter, which Mitsuru allowed, which was how Solar knew it was serious." }
      ], [
        { n: "It was only S.E.E.S., in the end, around the coffee table, with a map of the city spread across it held down at the corners by mugs. Mitsuru had set out extra chairs. Nobody mentioned them." }
      ]),
      { ifRank: { haru: 8 }, then: [
        { n: "Haru had cooked. She'd been cooking since the middle of the month, in a gray apron nobody mentioned, and there was a pot on the table and steam going up off it into the lamplight, and the kitchen had stopped being a dark room." }
      ] },
      { n: "Fuuka had marked the map in pencil. Every night for three weeks Lucia had tracked the gap, the place in the hour that sounded like the moment after a song ends, and every night it had moved. A dot here. A dot there. The bridge. The shrine. The back streets behind the station. The pier." },
      { s: 'fuuka', f: 'neutral', t: "It doesn't wander. It goes somewhere and it stops. Ten minutes. Twenty. And then it goes on to the next place." },
      { s: 'fuuka', f: 'sad', t: "And every place it stops, there's a radio. One of them. One of the visitors." },
      { ifRank: { mercy: 1 }, then: [
        { s: 'mercy', f: 'serious', t: "It's doing rounds." },
        { n: "Everyone looked at her. She was standing behind the couch with her coat still on, straight from the ward, and she looked at the map with the face of a doctor reading a chart she'd seen too many times." },
        { s: 'mercy', f: 'serious', t: "Bed to bed. Checking on them. That's what it's doing. It's doing rounds." }
      ], else: [
        { s: 'akihiko', f: 'serious', t: "It's making rounds. Like a doctor." },
        { n: "He meant it as a joke, mostly. Nobody laughed, and he looked down at the map like it had hit him." }
      ] },
      { s: 'mitsuru', f: 'neutral', t: "Has it spoken to any of you?" },
      { n: "A pause. The particular kind of pause that happens when a room full of people discovers they have all been keeping the same secret separately." },
      { ifRank: { astarion: 8 }, then: [
        { s: 'astarion', f: 'neutral', t: "Moonlight Bridge, the other night. It offered me the world, darling, and I don't mean that poetically. I said no." },
        { s: 'astarion', f: 'happy', t: "I'd like a medal. Something gaudy." }
      ] },
      { ifRank: { cloud: 7 }, then: [
        { s: 'cloud', f: 'serious', t: "The back streets. The night I couldn't get him out of my head." },
        { s: 'cloud', f: 'neutral', t: "Next night it came back. Not him. Something softer. Said I didn't have to remember anything. Said I could just stop trying." },
        { s: 'cloud', f: 'sad', t: "...He never offers anything. That's how I knew it wasn't him." }
      ] },
      { ifRank: { noctis: 1 }, then: [
        { s: 'noctis', f: 'neutral', t: "It asked if I was tired. I'm always tired. It said I could sleep. Like, for good. Nothing to get up for." },
        { s: 'noctis', f: 'flustered', t: "Honestly I almost said yes just so it'd stop talking. Then I thought about who'd finish my fish." }
      ] },
      { ifRank: { sebastian: 8 }, then: [
        { s: 'sebastian', f: 'sad', t: "It didn't offer me anything. It just asked if I wanted to stay." },
        { s: 'sebastian', f: 'sad', t: "...I didn't answer fast enough. That's all. I didn't say yes. I just didn't say no fast enough." }
      ] },
      { ifRank: { kasumi: 4 }, then: [
        { s: 'kasumi', f: 'serious', t: "It sounds like Dr. Maruki. Not the voice. The idea. Everyone happy. Nobody ever has to hurt again." },
        { s: 'kasumi', f: 'sad', t: "He'd like it, I think. That's what frightens me." }
      ] },
      { ifRank: { aphrodite: 1 }, then: [
        { s: 'aphrodite', f: 'serious', t: "It came to me too. It told me love could last forever if nothing ever had to change." },
        { s: 'aphrodite', f: 'neutral', t: "I'm the goddess of love, darling. Nobody knows better than I do that it doesn't. That's the whole point of it." }
      ] },
      { ifRank: { kuromi: 1 }, then: [
        { s: 'kuromi', f: 'serious', t: "It came to MY roof. Nobody comes to my roof. I told it the toll is one compliment and it didn't have one." }
      ] },
      femcMetAny(['kuromi', 'ann', 'kiriko', 'mercy', 'haru', 'sebastian', 'astarion', 'aphrodite', 'cloud', 'noctis', 'judy', 'shadowheart', 'kasumi', 'leon', 'rohan', 'widowmaker'], [
        { n: "And then the rest of them, one after another, in their own words. A world where the next mission never came. A garden where it was always spring. A table where nobody ever got up. It had offered each of them something different, and it had offered all of them the same thing." }
      ]),
      { n: "Solar listened to all of it with her hands wrapped around a mug she wasn't drinking from, and somewhere in the middle of it she understood something, the way you understand a step isn't there when your weight is already on it." },
      { choose: [
        { t: "It can't take them. It has to ask.", notes: 0, then: [
          { s: 'mitsuru', f: 'surprised', t: "...Go on." },
          { n: "So she went on. Hanne, on the bench, whom nobody had held, gone in a breath without a word. And everyone in this room, who it had to stand in front of, night after night, and ask, and wait. Wren, on the train, who had asked it where it went." },
          { s: 'akihiko', f: 'serious', t: "So it only gets the ones who say yes. Or the ones nobody's holding." }
        ] },
        { t: "(Look at Wren.)", notes: 0, then: [
          { n: "Wren was on the arm of the couch, listening politely, like someone at a lecture on a subject she didn't take. Solar looked at her and thought about the train, and the question Wren had asked it, and Hanne on the bench, and it came together all at once." },
          { s: 'solar', t: "It can't just take them. Not if somebody's holding on. It has to ask." },
          { s: 'akihiko', f: 'serious', t: "So it only gets the ones who say yes. Or the ones nobody's holding." }
        ] }
      ] },
      { s: 'wren', f: 'neutral', t: "It sits with me, you know. In the daytime, sometimes. It doesn't ask me anything anymore." },
      { s: 'wren', f: 'happy', t: "I suppose there's nothing left to ask." },
      { n: "Nobody had anything to say to that. Ken looked at his shoes. Aigis, at the window, turned her head and studied Wren for a long, unblinking moment, the way she studied things she meant to remember." },
      { s: 'mitsuru', f: 'sad', t: "My father asked me about the readings this morning. I told him it was residue from the full moons. That's the second time." },
      { s: 'mitsuru', f: 'sad', t: "I have never lied to my father twice about the same thing. I find I am not very good at it." },
      { s: 'yukari', f: 'serious', t: "So what do we do? We can't fight it. You can't hit paper. Well. You can. It doesn't care." },
      { n: "It was Akihiko who said it. He was sitting forward with his elbows on his knees, looking at the pencil dots on the map, and he said it slowly, like he was working it out with his hands." },
      { s: 'akihiko', f: 'serious', t: "It told you you can't hold all of them. That your hands aren't big enough." },
      { s: 'akihiko', f: 'neutral', t: "Fine. So we use more hands." },
      { s: 'fuuka', f: 'surprised', t: "...Oh." },
      { s: 'fuuka', f: 'happy', t: "I can hear them. All the radios. The quiet ones. The ones nobody's met. I could tell you where they are." },
      { s: 'ken', f: 'serious', t: "Then I'll take one. I'll find them and learn their name. That's all it takes, right? Somebody has to know your name?" },
      { s: 'koromaru', f: 'serious', t: "Woof!" },
      { s: 'junpei', f: 'happy', t: "Koro's in. I'm in. I'm gonna make a friend so hard, dude. They're not gonna know what hit 'em." },
      { s: 'aigis', f: 'neutral', t: "I will take two. I have excellent grip strength." },
      femcMetAny(['kuromi', 'kiriko', 'mercy', 'haru', 'sebastian', 'astarion', 'aphrodite', 'cloud', 'noctis', 'judy', 'shadowheart', 'kasumi', 'leon', 'rohan', 'widowmaker'], [
        { n: "And then her strangers, one after another, putting their hands up like it was a class. Taking names off Fuuka's list. Taking two, some of them. People who had arrived in this city lost and frightened, volunteering to go and be found by someone else who was lost and frightened, because someone had once done it for them." },
        { ifRank: { kiriko: 1 }, then: [
          { s: 'kiriko', f: 'happy', t: "Six! Give me six. The fox can do a whole neighborhood. I'm not even joking. It loves a project." }
        ] }
      ]),
      { s: 'mitsuru', f: 'neutral', t: "Names, then. Bring me names." },
      { s: 'mitsuru', f: 'neutral', t: "I'd rather know their faces than their readings. I said that in June. I find I meant it more than I knew." },
      { choose: [
        { t: "Give me the one at the station.", notes: 0, then: [
          { s: 'fuuka', f: 'neutral', t: "There's one on the steps. Every night. He doesn't move much. It sounds like... like a clock, ticking very slowly." },
          { n: "Of course it was the station steps. Solar nodded, and wrote it down, and didn't let herself think about violas." }
        ] },
        { t: "(Take whoever Fuuka reads out next.)", notes: 0, then: [
          { s: 'fuuka', f: 'neutral', t: "The riverside. Under the bridge. She sounds like birds. A lot of small birds, all at once." },
          { n: "Solar wrote it on her hand in ballpoint, the riverside, birds, so that she would see it every time she looked down." }
        ] }
      ] },
      { n: "By the end of the week Fuuka had stopped saying forty. She'd started saying names instead, one at a time, in the command room, reading them off the list in her soft voice like a roll call, and every time she got to the end of it, it was a little longer." }
    ] },

    { id: 'a3-the-whole-shelf', act: '3', date: '11/3', slot: 1, title: 'the whole shelf', place: 'Moonlight Bridge · The Dark Hour', music: 'battle', scene: [
      { n: "The operation was the big one. Mitsuru had been quiet about it all week, which was how they'd known. It went on and on, the way the big ones did, until Solar couldn't feel her arms and Junpei had stopped making jokes and the Evoker was slick in her hand, and then all at once it was over, the way they always were, and everyone was standing, and the moon was just the moon." },
      { n: "They came off the bridge in a ragged line, holding each other up, giddy and wrecked, Junpei leaning his whole weight on Akihiko and Yukari laughing at nothing with tears on her face. Fuuka's voice in their ears, telling them well done, well done, come home." },
      { music: 'night' },
      { n: "And then the hour ended." },
      { n: "For them." },
      { n: "Solar saw it happen. The streetlights came back on over Junpei's head and his face went orange in them, and the cars on the bridge started moving, and the coffins became people, and the night was a night again, cold and loud and ordinary, three steps in front of her." },
      { n: "She was still green." },
      { n: "She was standing in the hour, and they were standing in the night, three steps apart, and she said Junpei's name and he didn't turn around. Yukari didn't. Nobody did. They walked on toward the station under the ordinary lights, and the space between her and them didn't close no matter how fast she walked, and after a while Junpei stopped, and looked back over his shoulder at exactly the place where she was standing, frowning." },
      { s: 'junpei', f: 'surprised', t: "...Solar? Yo. She was right behind me." },
      { n: "He looked straight through her. Then they were gone, around the corner, and she was alone on Moonlight Bridge in a green that belonged to nobody else." },
      { n: "She knew where to go. She'd always known. She walked, and the bridge was longer than it should have been, and the streets were quieter, and when she came up the stairs onto the Iwatodai platform she wasn't even surprised." },
      { place: 'Iwatodai Station · Platform · The Dark Hour', time: 'An hour that does not count', music: 'mystery' },
      { n: "It was sitting on Wren's bench." },
      { n: "It had made itself small to do it. The long arms folded, the bowed head lowered, pages settled around it like a coat. It sat the way a person sits on a bench to wait for someone they are fond of, and when she came up the stairs it turned its blank face toward her, and she felt it again, after all these months, the hand laid flat on her chest. Not pushing. Just checking she was still breathing." },
      { s: 'thelacuna', t: "There you are. I made you an hour of your own. Nobody will miss it. It doesn't count." },
      { s: 'thelacuna', t: "Sit down. You look so tired. You've looked so tired since August." },
      { choose: [
        { t: "(Stay standing.)", notes: 0, then: [
          { n: "She stayed standing. It didn't seem to mind. It had the patience of something that had never once been in a hurry, because it had never once had anywhere to be." }
        ] },
        { t: "(Sit at the far end of the bench.)", notes: 0, then: [
          { n: "She sat at the far end, the way she'd sat in April beside a girl in a coat too big for her. It shifted a polite inch over, as if the bench were very crowded. She hated that it knew to do that." }
        ] }
      ] },
      { s: 'thelacuna', t: "I'd like to show you something. Only to show you. You don't have to take anything." },
      { n: "It opened. There was no other word. The pages of its chest parted down the middle like a book laid open on a desk, and they weren't blank anymore." },
      { n: "A girl on a sidewalk on the Upper East Side, a suitcase rolling behind her, who had turned down Harvard and would never quite explain why. A college town buried in snow, a party she didn't want to be at, and a boy across the room she was trying very hard to look at less than she did." },
      { n: "A seafood restaurant on the water in Incheon at low tide, the mud flats shining. A needle and thread under a bare bulb, a wound nobody could take to a hospital. A wedding date she hadn't picked, circled on someone else's calendar." },
      { n: "A student council campaign. Glitter on every surface of a bedroom. A group chat that would not stop buzzing, and a rival across a table she would have died before admitting she liked arguing with." },
      { n: "They were all her. She knew it the way you know your own face in a shop window before you've decided it's you." },
      { ifRank: { rohan: 3 }, then: [
        { n: "She'd seen them before. In a bookshop in October, with a man in a green headband reading her face like a novel and saying, with real surprise, that she wasn't one person. That she was a whole shelf." }
      ] },
      { s: 'thelacuna', t: "In every one of them, you have to choose. The school or the other thing. Him or the family. Win or lose. Every one of them ends. I've read them all the way to the back." },
      { s: 'thelacuna', t: "You don't have to. Not here. Look." },
      { n: "The next page was this one." },
      { n: "It was the dorm lounge, on a night like hot pot night, every lamp on and the windows steamed up, and the table was long. Longer than the room. It went on past the walls, out into somewhere warm, and everyone was at it." },
      { n: "Shinjiro was at the stove in his gray apron, awake, scowling at a pot like it had said something about his mother." },
      { ifRank: { akihiko: 6 }, then: [
        { n: "Akihiko was at the head of the table, and beside him, swinging her legs on a chair too tall for her, was a little girl with his eyes, who had never been anywhere near a fire." }
      ] },
      { ifRank: { astarion: 1 }, then: [
        { n: "Astarion was in the window seat in full afternoon sun, eyes closed, face tipped up into it like a cat, and nothing about him was burning." }
      ] },
      { ifRank: { noctis: 1 }, then: [
        { n: "Noctis was asleep at the end of the table with a fishing rod across his knees, and there was no crown anywhere, and there never would be." }
      ] },
      { ifRank: { cloud: 1 }, then: [
        { n: "Cloud was by the door with a girl in pink and a basket of flowers, and he was laughing. Solar had never once heard him laugh." }
      ] },
      { ifRank: { haru: 6 }, then: [
        { n: "Haru was out on a roof garden with a heavy man in a good suit, her father, who was looking at her tomatoes like they were worth something." }
      ] },
      { ifRank: { kasumi: 3 }, then: [
        { n: "Two girls with the same face and the same red ribbon sat side by side, sharing a plate, and neither of them was the one who had been left behind." }
      ] },
      { ifRank: { kuromi: 1 }, then: [
        { n: "Kuromi was wearing a crown, a real one, and everyone was bowing to her, and she looked absolutely insufferable about it, and happy." }
      ] },
      { ifRank: { ann: 10 }, then: [
        { n: "There was one empty chair. Red cushion. A crepe on the plate in front of it, untouched." },
        { s: 'thelacuna', t: "Not her. She went home on the thin night. She was holding on to you so tightly I couldn't get a finger in." },
        { n: "It said it the way you'd mention a draft. It was the first time Solar had ever heard it sound like anything but kind." }
      ], else: [
        { ifRank: { ann: 1 }, then: [
          { n: "Ann was there in her red jacket with a crepe in each hand, and nobody was ever going to text her from home to say it was time." }
        ] }
      ] },
      femcMetAny(['kiriko', 'mercy', 'sebastian', 'aphrodite', 'judy', 'shadowheart', 'leon', 'rohan', 'widowmaker'], [
        { n: "And all the rest of them, every stranger she had ever sat with on a bench or a pier or a shrine step, at the long table that went on forever, passing things to each other. Nobody looking at the door. There wasn't a door." }
      ]),
      { n: "And at the near end of the table there was an empty place with a bowl already set out, and the chair pulled back a little, the way you pull one back for someone you know is coming." },
      { s: 'thelacuna', t: "No January. No last train. Nobody you have to see off at a platform and wave at until your arm hurts." },
      { s: 'thelacuna', t: "You'd never have to choose between any of them. You'd never lose a single one. Not here. Not anywhere." },
      { s: 'thelacuna', t: "I'm not cruel, Solar. I've never been cruel. I only want everyone to stop being afraid." },
      { n: "Her hand was moving. She didn't know when it had started. It was out in front of her, open, the way Wren's had been in June, an inch from the warm lit page, and she could see the steam coming off the bowls, and she could smell the broth, and she could see her own fingertips, very slightly, going pale at the ends." },
      { choose: [
        { t: "It's a good table.", notes: 0, then: [
          { s: 'thelacuna', t: "It is. It's yours. It always was." }
        ] },
        { t: "Where's the door?", notes: 0, then: [
          { s: 'thelacuna', t: "There isn't one. That's the gift." }
        ] },
        { t: "(Say nothing.)", notes: 0, then: [
          { n: "She said nothing for a long time, which was its own answer, and they both heard which one." }
        ] }
      ] },
      { n: "Footsteps on the stairs." },
      { n: "Unhurried ones. Solar knew them before she turned, the way she knew the bench and the coat and the brass buttons, and she turned anyway, because she couldn't not." },
      { n: "Wren came up onto the platform in the green. Of course the hour let her in. Of course it did. There was nothing left in her for it to keep out." },
      { s: 'wren', f: 'neutral', t: "Hello. I thought I'd find you here. You're always here when something's wrong." },
      { s: 'wren', f: 'neutral', t: "And hello to you. You've been sitting with me. I know it's you." },
      { n: "She said that to the thing on the bench, politely, the way you'd greet a neighbor. Then she crossed the platform and took a handful of Solar's sleeve in her fist and held on, the way a little kid holds on in a crowd, the way Solar had felt her hold on once, in June, on this exact spot." },
      { s: 'wren', f: 'serious', t: "Don't." },
      { s: 'wren', f: 'sad', t: "I can't remember what I was afraid of. You saw me at the hospital. I can't get wet. I'm fine, and I'm warm, and I'm here, and I can't feel any of it, and I can see on your face every day that it's the worst thing that's ever happened to you." },
      { s: 'wren', f: 'serious', t: "I'd like you to keep yours. Your ending. Even if it's awful. Especially if it's awful. Please. You can't give me mine back, so keep yours." },
      { choose: [
        { t: "No.", notes: 0, then: [
          { n: "It came out quiet. It didn't need to be loud. She pulled her hand back, and her fingertips were her own color again, and her heart was going so hard she could feel it in her teeth." }
        ] },
        { t: "I'd rather see them off.", notes: 0, then: [
          { s: 'wren', f: 'happy', t: "...Oh. That's the best answer. I'm almost sure I told you that once." }
        ] },
        { t: "(Take Wren's hand.)", notes: 0, then: [
          { n: "She took Wren's hand off her sleeve and held it instead, properly, fingers through fingers, and held it hard enough that it hurt them both, and that was the answer, and it was the only one she had." }
        ] }
      ] },
      { n: "The page closed. The table and the steam and the lamplight folded away into its chest, and the empty chair with them, and it was only a tall thing made of blank paper sitting on a bench again." },
      { s: 'thelacuna', t: "All right." },
      { s: 'thelacuna', t: "I'll keep the seat. You'll come back to it. Everyone does, eventually. And January is very close, Solar. You'll be standing on a platform in January watching every one of them go, and you'll remember this table." },
      { s: 'thelacuna', t: "Ask me again then." },
      { n: "It came apart. Slowly this time, almost gently, a page at a time, lifting off into the green and drifting away over the tracks toward the tower. Wren watched it go with an expression Solar couldn't read, and didn't let go of her hand." },
      { n: "One page didn't go." },
      { n: "It came down instead, turning over and over, and landed in Solar's free hand as if it had been aimed there. Blank. Except, near the top, a smudge. Gray, soft, worn, like someone had pressed a thumb to the same place over and over, trying to keep a face from fading, and the face had faded anyway." },
      { music: 'tender' },
      { n: "Then the lights came on. The vending machines woke up humming. A train sighed somewhere far down the line, like it was sorry about something. And Junpei was coming up the stairs three at a time, shouting her name, with the others behind him." },
      { s: 'junpei', f: 'surprised', t: "SOLAR! Where did you GO? You were right behind me! You were right there and then you just...!" },
      { s: 'fuuka', f: 'sad', t: "Eleven minutes. You were gone for eleven minutes. Lucia couldn't hear you anywhere. I thought..." },
      { n: "Eleven minutes. She had stood on this platform for a whole life. Several." },
      { n: "Mitsuru didn't say anything. She came up the last stair and looked at Solar, and at Wren holding her hand, and at the page, and she took off her own coat and put it around Solar's shoulders, and only then did Solar notice that she was shaking." },
      { n: "She put the page inside her handbook, between the school rules and the bell schedule, where the other one had been. And she went home with the others, and let Junpei tell the story of the operation for the third time, with new sound effects, and laughed in the right places, and didn't look back at the bench, which took nearly everything she had." }
    ] },

    { id: 'a3-whats-waiting', act: '3', date: '11/8', slot: 1, title: "what's waiting", place: 'The Velvet Room', theme: 'velvet', scene: [
      { n: "The dorm had been very quiet since Wednesday, for reasons of its own, reasons that had nothing to do with pages and that she wasn't going to think about in here. She fell asleep on top of her covers in her uniform, and woke in blue." },
      { n: "Elizabeth wasn't reading. That was the first thing. The compendium was closed on the seat beside her and her gloved hands were folded on top of it, and she was simply sitting, looking at the door, the way people sit in hospital hallways." },
      { s: 'elizabeth', f: 'neutral', t: "Good evening. You have something of mine, I think. Or something you would like me to tell you is mine." },
      { n: "Solar held out the page. The smudge looked worse under the blue light. More like a face. Less like one." },
      { n: "Elizabeth looked at it for a long time without touching it." },
      { s: 'elizabeth', f: 'serious', t: "That is not from my book." },
      { s: 'elizabeth', f: 'neutral', t: "And it is not from the thing, either, though it was carrying it. It is not any paper I know. Someone wrote that, Solar, and it was not me." },
      { choose: [
        { t: "Then whose is it?", notes: 0, then: [
          { s: 'elizabeth', f: 'neutral', t: "I could not say. I would very much like to read the rest of it." }
        ] },
        { t: "(Put it back in the handbook.)", notes: 0, then: [
          { n: "She slid it back between the school rules and the bell schedule. Elizabeth watched her do it with an odd look, as though she'd just watched someone pocket a key without knowing what door it opened." }
        ] }
      ] },
      { s: 'elizabeth', f: 'neutral', t: "Keep it. Whatever it is, it came to you. Things do, this year." },
      { n: "Then she opened the compendium, and turned it around, and Solar braced for stubs." },
      { ifRank: { ann: 10 }, then: [
        { n: "It was Ann's page. Red and bright and finished, every line of it, and the door of it closed, properly closed, the edges sealed flat like a letter. In the bottom corner, very small, there was a girl with headphones around her neck holding a red mask." },
        { s: 'elizabeth', f: 'happy', t: "That is what it looks like when someone goes home held. I wanted you to see one. I have been looking at it every night. It is warm, if you touch it. It shines." }
      ], else: [
        { n: "It was the list. All of Fuuka's names, the radios nobody had met, and next to each one, faintly, in a hand that wasn't Elizabeth's, the ink was coming back. Pages that had been gray in October were dark now. Some of them had small figures drawn beside them on benches and steps. Junpei was easy to spot. He had somehow managed to be making a peace sign in every one." },
        { s: 'elizabeth', f: 'happy', t: "Your friends have been busy. I have not lost a page in two weeks. I had forgotten what a book feels like when it is getting heavier." }
      ] },
      { s: 'elizabeth', f: 'serious', t: "Now. I have been thinking about what it does. Not how. What." },
      { s: 'elizabeth', f: 'serious', t: "It offers them blanks. A blank last page. Nothing written, nothing waiting, nothing to be afraid of. And a blank page is so very easy to give away, because you cannot fear what you have not read. You can only dread it." },
      { s: 'elizabeth', f: 'neutral', t: "So I am going to let them read." },
      { n: "Solar looked at her. Elizabeth looked back, very calm, the way you look at someone when you have already done the hard part of deciding and only the hard part of doing it is left." },
      { s: 'elizabeth', f: 'neutral', t: "I know how their stories go. I have read every one, sitting up at night with the book open, which is how all of this began. I am going to tell them. One at a time. Each guest, what waits for them at the other end of their door. Not all of it. Enough." },
      { choose: [
        { t: "That's cruel.", notes: 0, then: [
          { s: 'elizabeth', f: 'sad', t: "Yes. And it is brave, for them, not for me. Most true things are both." }
        ] },
        { t: "That's brave.", notes: 0, then: [
          { s: 'elizabeth', f: 'sad', t: "It is cruel, too. I would like you to say that part as well, so that I do not forget it." }
        ] }
      ] },
      { s: 'elizabeth', f: 'neutral', t: "Some of them will hate me. Some of them will go home anyway. That is the point, Solar. They will go home knowing. Then it is theirs. A thing you know, you can carry. A blank, you can only hand to someone." },
      { s: 'elizabeth', f: 'serious', t: "And the girl on the bench. Her ending is in it. It is wearing her last line the way it wears all of them. If we want to give it back to her, we will have to take it out of the thing that is wearing it." },
      { s: 'elizabeth', f: 'serious', t: "In January. When the hour is widest, and closing. That is the only time it will be all in one place." },
      { choose: [
        { t: "It said I can't hold all of them.", notes: 0, then: [
          { s: 'elizabeth', f: 'happy', t: "It is right. You cannot. You have very ordinary hands." },
          { s: 'elizabeth', f: 'happy', t: "But you have made a great many friends this year, and all of them have hands. We will need every one. Every bond in this book. I am going to ask for all of them." }
        ] },
        { t: "And if Wren doesn't want it back?", notes: 0, then: [
          { s: 'elizabeth', f: 'sad', t: "Then that will be her choice, and she will make it knowing. That is all I want for any of them. That is all I have ever wanted, I think. I simply did not know it until something offered them the opposite." }
        ] }
      ] },
      { n: "Elizabeth closed the book. She held it against her chest with both hands, and for a moment she looked again like a girl holding a book, and not like a woman holding a door." },
      { s: 'elizabeth', f: 'neutral', t: "Seven weeks until the year ends. Twelve until the hour closes. I counted them for you. Twice. In case I had it wrong." },
      { s: 'elizabeth', f: 'happy', t: "I did not have it wrong. I so rarely do. It is one of my least attractive qualities." },
      { n: "She woke at her desk. It was the first properly cold night of the year, and the window had fogged at the corners, and the handbook was under her cheek, open to the bell schedule, and the page with the smudge was still in it." },
      { n: "Down the hall Wren was asleep with her coat folded on the chair in thirds and her ticket on the nightstand, blank, waiting for someone to write on it. Solar stood in the doorway a while. Twelve weeks. She counted them again, in case." }
    ] },

    /* ── Act IV · The Last Pages ── */
    { id: 'a4-residue', act: '4', date: '12/2', slot: 1, title: 'residue', place: 'Iwatodai Dorm · Command Room', music: 'mystery', scene: [
      { n: "December came in gray and wet, and the hour came in with it. Not at midnight. At ten past seven on Monday morning the whole of Port Island went green for four minutes, and the monorail sat on its rail over the bay with a carriage full of coffins on their way to work, and the steam off a thousand cups of convenience-store coffee hung in the air like something painted, and nobody on the island would ever know." },
      { n: "Four minutes. Fuuka had timed it sitting on the floor of the command room in her pajamas with her headphones on and her eyes shut, and when it was over she took the headphones off and said, very politely, that she would like to lie down now." },
      { n: "On Wednesday night Mitsuru asked Solar up to the fourth floor alone, which she had never once done, and Solar climbed the stairs with the particular dread of someone who has been asked to stay behind after class." },
      { n: "There were two folders on the long table. One was thin. One was so thick it had been tied shut with a ribbon, a dark red one, the kind that came off a box of very expensive chocolates, which was somehow the most Mitsuru thing Solar had ever seen." },
      { s: 'mitsuru', f: 'neutral', t: "The Group would like a report on the readings by Friday. They've been very patient, by their standards. Which is to say they've asked three times." },
      { s: 'mitsuru', f: 'neutral', t: "This is the one I'm supposed to send. Residue from the full moon operations. Settling. No cause for concern." },
      { n: "She touched the thin folder with two fingers, the way you'd touch a stove to check if it was still hot." },
      { s: 'mitsuru', f: 'sad', t: "I've sent it twice. I find I can't send it a third time. I've tried to sign it four times since breakfast, and I have a very good signature." },
      { n: "The thick one was everything. Solar didn't have to open it to know. The trace from June with the clean gap in it. Fuuka's pencil maps. Fourteen daylight events, then forty, then too many to list on one page. The train going up into the tower. Seventy-one minutes. A woman in a blue coat on a bench by the taxi stand, written up in Mitsuru's small exact hand from what Solar had told her, which had not been much, and had been all of it." },
      { s: 'mitsuru', f: 'neutral', t: "If I send this, they'll want readings. Sensors on the station. Someone in a white coat beside every bench your friends sit on. They aren't cruel. They're thorough. For the people being measured, it comes to the same thing." },
      { s: 'mitsuru', f: 'neutral', t: "I'd like a second opinion. Before I either lie a third time or stop." },
      { choose: [
        { t: "Tell them the truth.", notes: 0, then: [
          { s: 'mitsuru', f: 'surprised', t: "...Even knowing what they'll do with it?" },
          { n: "Solar said the truth was the only thing that had worked all year. Every time somebody told somebody else what was actually happening, it had gotten better. Every time anybody kept it to themselves, it had gotten worse, and she was the worst at that of anyone in the building, and they both knew it, and Mitsuru, mercifully, didn't say so." }
        ] },
        { t: "Don't send anything.", notes: 0, then: [
          { s: 'mitsuru', f: 'neutral', t: "Silence is only a lie with better manners. They'd come and look for themselves." },
          { n: "She said it without any heat at all, like someone who had already tried it, at length, in the dark, and found it didn't hold." }
        ] },
        { t: "What does Fuuka think?", notes: 0, then: [
          { s: 'mitsuru', f: 'neutral', t: "I asked her. She said I should send them her list." },
          { n: "Mitsuru's mouth did something that on anyone else in the world would have been a smile." }
        ] }
      ] },
      { n: "Mitsuru reached under the thick folder and drew out a third thing. Not a folder. A few sheets of plain paper, stapled at the corner, covered in Fuuka's soft round handwriting." },
      { n: "Names. That was all. A name on every line, forty-odd of them, the quiet radios S.E.E.S. had gone out into the October cold to find, and beside each one, in a different hand, whoever had found them. Junpei's capitals, pressed so hard they'd come through the page. Ken's careful print. Aigis, twice, in letters so even they looked typed. A small inky paw print, twice as large as any of the names, which Koromaru had clearly insisted on." },
      femcMetAny(['kuromi', 'kiriko', 'mercy', 'haru', 'sebastian', 'astarion', 'aphrodite', 'cloud', 'noctis', 'judy', 'shadowheart', 'kasumi', 'leon', 'rohan', 'widowmaker'], [
        { n: "And other hands Solar knew. Her strangers had taken names too, in October, putting their hands up like it was a class, and here they were, finders written in the margins in crayon and fountain pen and some alphabet that wasn't any alphabet at all." },
        { ifRank: { kiriko: 1 }, then: [
          { n: "Six of the lines had a little fox drawn beside them. One fox had been given a hat." }
        ] }
      ]),
      { s: 'mitsuru', f: 'neutral', t: "I'm going to send them this. No readings. No locations. Just the names, and one sentence on top." },
      { s: 'solar', t: "What sentence?" },
      { s: 'mitsuru', f: 'neutral', t: "These are people. They are leaving at the end of January. I would ask that we let them." },
      { s: 'mitsuru', f: 'sad', t: "If the Group wants to find them, they'll have to learn their names first. As far as I can tell, that's the only way anyone has found anyone this year." },
      { n: "She signed it. Her hand didn't shake. Then she untied the red ribbon from the thick folder, and wound it neatly around her fingers, and put it in her pocket, and Solar watched her do it and understood she was never going to see the inside of that folder again, and neither was anyone." },
      { n: "Fuuka knocked on the open door. She had her headphones around her neck and the face she wore when she'd heard something and was trying to decide how to say it nicely." },
      { s: 'fuuka', f: 'neutral', t: "I'm sorry. I know you're busy. It's the gap. The thing." },
      { s: 'fuuka', f: 'sad', t: "It's stopped doing rounds. Since Sunday. It doesn't go to anyone anymore. It goes to Iwatodai Station, to the bench under the timetable, and it sits there. All hour. Every hour." },
      { s: 'fuuka', f: 'sad', t: "It sounds like someone at a station who's very early for a train." },
      { s: 'mitsuru', f: 'neutral', t: "Early for what?" },
      { s: 'fuuka', f: 'neutral', t: "...January, I think." },
      { n: "Wren had come up the stairs behind her with a tray of tea nobody had asked for, which was a thing she did now, carrying things up and down the building, being useful. She set it on the long table between the folders and handed out the cups." },
      { s: 'wren', f: 'happy', t: "Oh, is it on my bench? I wondered where it had got to. It hasn't come to sit with me in a week." },
      { s: 'wren', f: 'neutral', t: "I miss it a little. Is that strange?" },
      { n: "Nobody answered. Mitsuru took a cup and said thank you and held it without drinking, the way she'd held her tea on hot pot night, watching a room she couldn't do anything about." },

      { place: 'Iwatodai Station · Platform · The Dark Hour', time: 'Midnight', music: 'night' },
      { n: "She went because she couldn't not. Mitsuru knew she would. Fuuka kept a channel open in her ear and didn't say anything into it, which was its own kind of company." },
      { n: "The station was green and cold and silent, frost on the yellow line, frost feathered across the face of the departures board, the moon sitting in the gap in the roof like a coin somebody had dropped and never come back for. And on the bench under the timetable, it was sitting." },
      { n: "It had made itself small again. The long arms folded, the pages settled around it like a coat, its blank face turned down the tracks toward the tunnel the way Wren's used to be, in April, when she was afraid of where it went. It didn't look up when Solar came onto the platform. It only shifted a polite inch over, as if the bench were very crowded." },
      { choose: [
        { t: "You're early.", notes: 0, then: [
          { s: 'thelacuna', t: "So are you. Everyone is, in December. That's what December is for." }
        ] },
        { t: "(Walk as far as the yellow line.)", notes: 0, then: [
          { n: "She walked as far as the yellow line and stopped there, the way Wren had stopped at the edge of the sea. Close enough to see the pages stir. Not close enough to sit." }
        ] },
        { t: "(Stay at the top of the stairs.)", notes: 0, then: [
          { n: "She stayed where she was, one hand on the cold rail, and it didn't seem to mind. It had never once seemed to mind anything she did. That was the worst of it, every time." }
        ] }
      ] },
      { s: 'thelacuna', t: "I'm keeping your seat. I said I would." },
      { s: 'thelacuna', t: "Eight weeks. You'll come and sit down. You won't want to, and then you will. I'm very patient, Solar. I'm the most patient thing there is." },
      { n: "It didn't come apart. That was new, and it was worse. It simply stayed, sitting on Wren's bench in the green with its hands folded in its lap, waiting for a train it knew the time of, and Solar stood there until her fingers went numb on the rail and then walked home through the coffins without looking back." },
      { n: "Eight weeks and four days. She didn't have to count it twice anymore. She'd started counting in her sleep." }
    ] },

    { id: 'a4-the-sea-in-winter', act: '4', date: '12/13', slot: 0, title: 'the sea in winter', place: 'Port Island · Seaside Park', music: 'tender', scene: [
      { n: "The sea in December was a different animal. The squid stand was shuttered with a padlock through the hasp. The sand had gone hard and gray and gave nothing back. The wind came straight in off the bay with nothing in its way, and there was one man walking a dog at the far end of the beach, and the dog wanted to go home, and so did the man, and so, if she was honest, did Solar." },
      { n: "Wren had her coat buttoned to the throat for once, all the brass buttons done up in a row, and in this weather it finally looked like it had been cut for something. She stood at the top of the steps with her hands in the enormous pockets and looked at the water like she was checking on a friend." },
      { s: 'wren', f: 'happy', t: "It's still here. I half thought it would have gone somewhere for the winter." },
      { s: 'wren', f: 'neutral', t: "Everyone's started giving each other things. Have you noticed? Junpei gave me a keyring shaped like a cat. I don't know what it's for. Keys, he said. I haven't got any." },
      { ifRank: { kiriko: 10 }, then: [
        { s: 'wren', f: 'neutral', t: "And Kiriko gave you a bell. I heard you ring it last night, at two in the morning. Through the floor." },
        { n: "Solar hadn't known anyone could hear. She'd only wanted to check it still worked. She'd only wanted to check, very quietly, that somebody was there." }
      ] },
      { n: "She had been trying to ask for five weeks. Since the Velvet Room in November, since Elizabeth closed the book and said if we want to give it back to her. She had tried at breakfast and on the stairs and in the hall at midnight, and every time Wren had looked up at her with that easy, untroubled face, and every time Solar had asked her instead whether she wanted the last of the milk." },
      { n: "So she said it on the beach, in the wind, because there was nowhere left to put it off to." },
      { n: "She told it plainly, the way she'd practiced. The thing on the bench. The last page of Wren's that had come back whole except for its last lines. The way it wore everyone's endings like a coat. January, when it would all be in one place. That they could take hers back. That it would be hers again, and she'd be afraid again, and she'd be able to go home. And that she would." },
      { s: 'wren', f: 'neutral', t: "Home." },
      { s: 'wren', f: 'neutral', t: "I don't remember it. I know I had one. I know it the way you know there's a room behind a door you've never opened." },
      { s: 'wren', f: 'serious', t: "Was I happy? Before. When I had it." },
      { choose: [
        { t: "No. You were frightened all the time.", notes: 0, then: [
          { s: 'wren', f: 'surprised', t: "All the time?" },
          { n: "Of the last train. Of the green. Of doors, Solar said. You looked at every door." },
          { s: 'wren', f: 'sad', t: "That sounds exhausting. Poor thing." },
          { n: "She said poor thing about herself the way you'd say it about a stranger on the news, and Solar had to look at the water for a while." }
        ] },
        { t: "Sometimes. On trains. Here.", notes: 0, then: [
          { s: 'wren', f: 'happy', t: "Here? On this beach?" },
          { n: "Here, Solar said. In July. In the water up to your knees, laughing every time it pulled the sand out from under you." },
          { s: 'wren', f: 'happy', t: "Then I was happy here. That's nice to know. I'll keep that." }
        ] },
        { t: "(Tell her about the sunburn.)", notes: 0, then: [
          { n: "So she told her about the sunburn. A pink nose, touched every thirty seconds all the way back to the station, delighted and appalled in equal measure, because there wasn't enough sun where she came from to do it." },
          { s: 'wren', f: 'happy', t: "I don't remember that at all. It sounds lovely." },
          { s: 'wren', f: 'neutral', t: "...It sounds lovely and I can't remember it. I can hear that that's sad. I'll take your word for it." }
        ] }
      ] },
      { s: 'wren', f: 'serious', t: "Then why would I want it back? If it frightened me. If it meant I'd have to go." },
      { choose: [
        { t: "Because it's yours.", notes: 0, then: [
          { s: 'wren', f: 'neutral', t: "...Mine." },
          { n: "She said it slowly, testing it, like a station name she was almost sure she'd heard called before." }
        ] },
        { t: "Because I miss her. The one who was scared.", notes: 0, then: [
          { s: 'wren', f: 'sad', t: "But I'm right here." },
          { n: "She was. That was the whole problem, and neither of them could find a way to say it that didn't make it worse, so neither of them tried." }
        ] },
        { t: "I don't know.", notes: 0, then: [
          { s: 'wren', f: 'happy', t: "That's honest. You're terrible at honest. It must have cost you something." },
          { n: "It had. Solar didn't say how much." }
        ] }
      ] },
      { n: "Wren sat down on the bottom step and took off her shoes, and then her socks, and folded the socks and put them in the shoes and set the shoes side by side on the step, very neatly, and walked down across the hard gray sand and into the sea." },
      { n: "Solar's whole body flinched for her. The water in December was the kind of cold that hurts at once and then goes on hurting in a new place. Wren walked in to her ankles and stood there with her coat blowing around her knees, perfectly calm, looking out at the place where the water met the sky." },
      { s: 'wren', f: 'neutral', t: "In July I screamed. Didn't I. I remember screaming." },
      { s: 'wren', f: 'neutral', t: "It's cold, isn't it? I can tell from your face. Your face is very useful. I've been using it all autumn to find out what things feel like." },
      { n: "She came back out with her feet red to the ankle and didn't seem to notice, and sat on the step beside Solar to put her socks back on, and stopped halfway, one sock in her hand, looking at it." },
      { s: 'wren', f: 'serious', t: "I'd like to think about it. Properly. I'm not very good at thinking about things that matter, now. It all goes smooth, like a stone in a river. But I'd like to try. For her. For the one you miss." },
      { s: 'wren', f: 'neutral', t: "Can I tell you in January?" },
      { n: "It went through Solar like the cold off the water. The words weren't the same. They were close enough. A blank face on a bench, and the voice of everyone she had ever loved, saying ask me again then." },
      { choose: [
        { t: "January's fine.", notes: 0, then: [
          { s: 'wren', f: 'happy', t: "Good. I'll put it in my diary. I haven't got a diary. I'll get one." }
        ] },
        { t: "(Nod. Don't trust your voice.)", notes: 0, then: [
          { n: "She nodded. Wren watched her face for a long moment, reading it, the way she'd said she did, and then leaned over and bumped her shoulder against Solar's, once, gently, which was new, and which neither of them mentioned." }
        ] }
      ] },
      { n: "On the walk back Solar looked behind them. Wren's footprints went down across the sand to the waterline, and into it, and came back out, and the sea came up over them, slowly, and went away again, and they stayed." },
      { n: "She checked twice. They stayed both times." }
    ] },

    { id: 'a4-forget-the-year', act: '4', date: '12/23', slot: 1, title: 'forget-the-year', place: 'Iwatodai Dorm · Lounge', music: 'joy', scene: [
      { n: "Junpei declared bounenkai on the first day of the winter break, standing on the coffee table, with the authority of a man who had read about it in a magazine. A forget-the-year party. You ate and drank and yelled until you couldn't remember a single bad thing that had happened since January, which in his case, he said, was going to take a while, so everybody had better pace themselves." },
      { n: "It had snowed on and off all week. The lights Junpei had strung across the windows on the first of the month still sagged in the middle like a smile, and somebody had added a second string, and somebody else a third, and the lounge glowed like the inside of a paper lantern, warm and gold and smelling of soy and steam and oranges." },
      femcMetAny(['kuromi', 'kiriko', 'mercy', 'haru', 'sebastian', 'astarion', 'aphrodite', 'cloud', 'noctis', 'judy', 'shadowheart', 'kasumi', 'leon', 'rohan', 'widowmaker', 'jungwon', 'haechan'], [
        { n: "Mitsuru had given up on extra bowls. She'd borrowed a second table from somewhere she wouldn't name, and a third from nobody knew where, and they ran end to end from the lounge through the doorway and out into the front hall, and every seat at them was taken, and people were still coming in out of the snow, stamping their feet on the mat." }
      ], [
        { n: "Mitsuru set out extra bowls again. Six of them, white and stacked at the end of the table, the way she had in July. She looked at them a while. Then, without a word to anyone, she set out a seventh, and put it at the end beside the kitchen door, and went to get the rice." }
      ]),
      { ifRank: { kuromi: 1 }, then: [
        { n: "Kuromi was charging a toll at the lounge door again. One compliment, sincerely meant, or one thing you wanted to forget. Junpei paid in the second term. Akihiko paid in a compliment, so sincerely and so loudly that Kuromi went pink to the ears and let everyone else in free for an hour out of pure embarrassment." }
      ] },
      { ifRank: { haru: 1 }, then: [
        { n: "Haru had taken over the kitchen again, so gently that nobody saw it happen. Fuuka stood in the doorway in her apron, watching her own broth go down the sink for the second time this year." },
        { s: 'fuuka', f: 'sad', t: "Again. She did it again. She said oh, how brave, again." }
      ] },
      { ifRank: { mercy: 1 }, then: [
        { n: "Mercy came at eight, straight from a double shift, ate half a bowl of rice, and fell asleep sitting up with her chopsticks still in her hand. Junpei got the blanket off the couch and put it over her shoulders, very carefully, like a man repaying a debt, and wouldn't let anybody talk above a murmur on that end of the table for an hour." }
      ] },
      { ifRank: { sebastian: 1 }, then: [
        { n: "Sebastian stood against the wall by the stairs with one can of soda, like July. This time he finished it. Then he sat down at the table between Ken and Fuuka and stayed there, and nobody made a fuss about it, which he would tell Solar later was the nicest thing that had happened to him in two worlds." }
      ] },
      { ifRank: { astarion: 1 }, then: [
        { n: "Astarion rang the bell after sunset and waited on the step, smiling, with the cold running in past his ankles." },
        { s: 'mitsuru', f: 'neutral', t: "You don't have to ask anymore. You know that." },
        { s: 'astarion', f: 'happy', t: "Oh, I know, darling. I just like being asked." }
      ] },
      { ifRank: { aphrodite: 1 }, then: [
        { n: "Aphrodite took the head of the table without being offered it and blessed Junpei again, at length, with a hand on his forehead." },
        { s: 'aphrodite', f: 'happy', t: "You will be loved, little mortal. Eventually. By someone. Probably." },
        { s: 'junpei', f: 'surprised', t: "You said that in JULY!" },
        { s: 'aphrodite', f: 'serious', t: "And it's still true. That's what makes it a blessing and not a weather report." }
      ] },
      { ifRank: { cloud: 1 }, then: [
        { n: "Cloud ate three bowls without a word and left a bill on the table in a currency nobody recognized. Mitsuru had a jar for them now, on the shelf by the door. It was nearly full." }
      ] },
      { ifRank: { noctis: 1 }, then: [
        { n: "Noctis was asleep on the couch by eight with Koromaru draped across his feet, and nobody had the heart to wake either of them, and by nine they were both snoring in the same rhythm." }
      ] },
      { ifRank: { judy: 1 }, then: [
        { n: "Judy had fixed the TV, which nobody had known was broken, and set a little camera going on the bookshelf where nobody would think about it, and every so often Solar caught her looking at the room the way you'd look at something you were trying to learn by heart." }
      ] },
      { ifRank: { shadowheart: 1 }, then: [
        { n: "Shadowheart had brought paper lanterns down from the shrine and hung them over the window, and sat beneath them all evening with her tea, watching the snow, very quiet, smiling at nothing in particular, which Solar was beginning to understand was how she looked when she was happy and didn't trust it yet." }
      ] },
      { ifRank: { kasumi: 7 }, then: [
        { n: "Sumire did a cartwheel in the hallway because Ken asked, and landed it, and then apologized to the lamp she'd nearly kicked, and Ken looked at her like she'd personally invented gravity." }
      ], else: [
        { ifRank: { kasumi: 1 }, then: [
          { n: "Kasumi did a cartwheel in the hallway because Ken asked, and landed it, and then apologized to the lamp she'd nearly kicked." }
        ] }
      ] },
      { ifRank: { leon: 1 }, then: [
        { n: "Leon came with a bag of oranges from Officer Kurosawa, who had sent them along with a note that said nothing at all, and spent most of the night in the kitchen doorway with his arms crossed, watching the front door out of habit, until Yukari put a bowl in his hands and told him the front door could watch itself." }
      ] },
      { ifRank: { rohan: 1 }, then: [
        { n: "Rohan wouldn't eat. He was drawing. He drew the whole table from the stairs, in one long sheet folded like a fan, and when Junpei asked to see himself Rohan turned the sketchbook around without a word, and Junpei looked at it for a long time, and then said, quietly, for him, dude, that's really me." }
      ] },
      { ifRank: { widowmaker: 1 }, then: [
        { n: "Widowmaker didn't come in. She sat on the roof of the bicycle shed across the street in the snow, where she could see the window, and Akihiko took her out a bowl at nine and came back without it and with an expression nobody could read." }
      ] },
      { ifRank: { jungwon: 1 }, then: [
        { n: "Jungwon took the minutes. Nobody asked him to. He read them back at half past nine, standing, item by item, including Junpei's toast and the incident with the oranges, and everybody applauded, and he sat down very fast and drank a whole glass of water without breathing." }
      ] },
      { ifRank: { haechan: 1 }, then: [
        { n: "Haechan sat on the stairs above everyone with his headphones around his neck, eating off a plate on his knees, not quite at the party and not quite not, which Yukari said was very him, though she couldn't have said what him was. Every time Solar looked up he was already looking." }
      ] },
      { ifRank: { saori: 8 }, then: [
        { n: "Saori came for an hour before her mother's packing called her home. She sat beside Yukari with her list of books on her knee, ticking one off, and told Solar she was on number nineteen, and that the train to Sendai was soon, much too soon, and that she was not going to cry about it at a party, and then did, a little, into a napkin, and laughed at herself, and had seconds." }
      ] },
      { n: "And Wren came in from the kitchen with the rice." },
      { n: "She didn't stop at the door. She didn't stand under a streetlight across the road, or look in through the window, or say she'd like to be a bit more of a person first. She set the pot down in the middle of the table and pulled out a chair and sat, between Junpei and Koromaru, the way you'd sit down at your own family's table, and Solar watched her do it and felt something go in her chest that she didn't have a name for, and didn't want one." },
      { s: 'wren', f: 'neutral', t: "Junpei, what does it mean? Bounenkai. Ken said forget-the-year." },
      { s: 'junpei', f: 'happy', t: "Yeah! You eat a ton and drink a ton until you forget all the bad stuff. Clean slate. New year." },
      { s: 'wren', f: 'surprised', t: "Forget the year? Why would anyone want to forget a year?" },
      { s: 'junpei', f: 'neutral', t: "...Okay, when you say it like that, it sounds kind of messed up." },
      { s: 'wren', f: 'happy', t: "I'd like to keep this one. All of it. Even the parts I can't feel." },
      { n: "Nobody said anything for a second. Then Junpei raised his glass and said fine, okay, new rule, remember-the-year party, and everybody drank to that instead, and Wren drank too, and coughed, because it was ginger ale and she'd never had ginger ale, and everybody laughed, and she laughed with them, and it was real. Solar was almost sure it was real." },
      { ifRank: { kiriko: 1 }, then: [
        { s: 'kiriko', f: 'happy', t: "Fortunes for the house! Year-end edition! Everybody draws. No take-backs." },
        { n: "Junpei drew great curse and lay down on the floor. Mitsuru drew great blessing again and looked faintly embarrassed about it again. Wren drew small blessing and read it out loud twice, delighted, like it was a letter." },
        { n: "Then Kiriko came round the table to Solar, and didn't hold out the box. She reached into her own sleeve instead, and took out a slip of paper, old and soft, folded small, the creases gone white." },
        { s: 'kiriko', f: 'sad', t: "I lied to you in the summer. That fortune I said was middle blessing. Super boring. It wasn't." },
        { n: "She unfolded it on the table between them. It was a fortune slip, the shrine's own paper, the red border, the little printed fox in the corner. And nothing else. No number. No blessing, no curse. Not a word on it anywhere." },
        { s: 'kiriko', f: 'serious', t: "I've drawn about a million of these. They're never blank. They can't be. They're printed." },
        { s: 'kiriko', f: 'sad', t: "I thought it meant you didn't have one. A future. I thought the gods were telling me something and I didn't want to know it, so I put it in my sleeve and I carried it around for five months like an idiot." },
        { choose: [
          { t: "Maybe it means it isn't written yet.", notes: 0, then: [
            { s: 'kiriko', f: 'surprised', t: "...Huh." },
            { s: 'kiriko', f: 'happy', t: "Yeah. Okay. Yeah. I'm deciding that's what it means. Blank means not written yet. Kiriko's rules. I make them up, so they're binding." }
          ] },
          { t: "(Take it and keep it.)", notes: 0, then: [
            { n: "She took it and folded it back along its old creases. Kiriko watched her like she was waiting for the paper to catch fire." },
            { s: 'kiriko', f: 'happy', t: "...Okay. If you're not scared of it, I'm not either. That's how support works. I just decided." }
          ] },
          { t: "You carried it for five months?", notes: 0, then: [
            { s: 'kiriko', f: 'flustered', t: "I was going to burn it with the bad ones at New Year! I tried! Three times! My hand wouldn't." },
            { s: 'kiriko', f: 'neutral', t: "So I figure it's not a bad one. You don't keep bad ones that long. Your hand knows." }
          ] }
        ] },
        { n: "Solar put it in her handbook that night, between the school rules and the bell schedule, beside a page with a gray smudge where a face should be. The handbook didn't close properly anymore. She'd stopped minding." }
      ] },

      { place: 'Iwatodai Dorm · Lounge · The Dark Hour', time: 'Midnight', music: 'night' },
      { n: "The hour came in the middle of Junpei's story about the summer festival, at the exact moment he got to the part where he'd been very brave." },
      { n: "The lights died. The television cut off mid-word. Outside the window the snow stopped where it was, ten thousand flakes hanging in the green like a held breath, and the moon came up over the rooftops enormous and sick and much too close." },
      femcMetAny(['kuromi', 'kiriko', 'mercy', 'haru', 'sebastian', 'astarion', 'aphrodite', 'cloud', 'noctis', 'judy', 'shadowheart', 'kasumi', 'leon', 'rohan', 'widowmaker', 'jungwon', 'haechan'], [
        { n: "And nobody at the long table became a coffin. Not one. Every person who had come in out of the snow tonight was still sitting there in their chair with their chopsticks in their hand, blinking in the green, looking around at each other, awake. Every one of them from somewhere else. Every one of them still here." }
      ], [
        { n: "And nobody at the table became a coffin. S.E.E.S. never did. Wren never did. They sat there in the green with their chopsticks in their hands, blinking, a table full of people who were awake when nobody else in the city was, and for once it didn't feel like a secret. It felt like a party that had run late." }
      ]),
      { s: 'junpei', f: 'surprised', t: "...Okay. Okay, this is the coolest thing that has ever happened at a party." },
      { s: 'yukari', f: 'neutral', t: "Finish your story, Junpei. We all know the end. You weren't brave." },
      { s: 'junpei', f: 'flustered', t: "I was a LITTLE brave." },
      { n: "So he finished it, in the dark, by the green light of a moon that should not have been there, and they played cards after, holding them up to the window to see the suits, and nobody went to bed, and the hour went on, and on, much longer than an hour." },
      { n: "Fuuka sat a little apart with her eyes closed. Solar knew what she was listening to before she said it." },
      { s: 'fuuka', f: 'neutral', t: "It's still on the bench. It hasn't moved." },
      { s: 'fuuka', f: 'sad', t: "I think it's listening to us. Isn't that strange? It's turned toward the dorm. Like someone outside a window." },
      { n: "Wren had gone to the window at the end of the lounge. She stood with her hand flat on the cold glass, looking out over the frozen snow toward the station, where the line of the tracks ran away into the green." },
      { s: 'wren', f: 'neutral', t: "Do you think it's lonely?" },
      { choose: [
        { t: "It takes people, Wren.", notes: 0, then: [
          { s: 'wren', f: 'neutral', t: "I know. I know it does. I'm one of them." },
          { s: 'wren', f: 'sad', t: "I only mean, I don't think anyone's ever asked it to a party." }
        ] },
        { t: "Maybe.", notes: 0, then: [
          { s: 'wren', f: 'neutral', t: "I think so. I think it's never once been held. Not by anyone. It's all pages nobody kept." },
          { s: 'wren', f: 'sad', t: "I'd know. I was one." }
        ] },
        { t: "(Stand next to her. Don't answer.)", notes: 0, then: [
          { n: "She stood next to her. They looked out at the green together, at the white flakes hanging over the street, and down at the far end of the road, under the April streetlight, a single sheet of paper had come to rest in the snow, face up, as if someone had set it down there to listen." }
        ] }
      ] },
      { n: "The hour ended at twenty past two. The lights came on, and the television finished its word, and the snow outside let go all at once and came down soft and ordinary past the window, and Junpei was asleep on the floor with a playing card stuck to his cheek." },
      { n: "Forget the year. Solar looked down the long table at all of them, the empty bowls and the oranges and the people asleep on each other's shoulders, and thought, not a chance." }
    ] },

    { id: 'a4-every-hand', act: '4', date: '1/9', slot: 1, title: 'every hand', place: 'Iwatodai Dorm · Lounge', music: 'mystery', scene: [
      { n: "The year had turned, quietly, the way the dorm did most things that winter. And the hour had started running long." },
      { n: "It ended later every night. One-forty on New Year's. Ten past two the night after. Last night it had ended at ten to four, and Solar had stood at her window and watched the coffins on the street outside stand there in the green for nearly four hours, patient as furniture, while the moon sat over the rooftops and didn't move. Fuuka slept in the afternoons now. The daylight blinks came every day. Nobody counted them anymore. There was no point counting something that was always happening." },
      { n: "On Saturday evening, at seven, the doorbell rang." },
      { n: "Then it rang again, at once, the way a child rings a doorbell, for the pleasure of hearing it." },
      { music: 'velvet' },
      { n: "Mitsuru opened the door. On the step, in the snow, in blue from her hat to her boots, with the compendium held to her chest and an expression of pure scientific delight, was Elizabeth." },
      { s: 'elizabeth', f: 'happy', t: "Good evening. I rang the bell. Twice. The first time was so satisfying that I had to make sure it was not an accident." },
      { s: 'mitsuru', f: 'surprised', t: "...Solar. Do you know this woman?" },
      { choose: [
        { t: "This is Elizabeth.", notes: 0, then: [
          { s: 'elizabeth', f: 'happy', t: "I am. How kind of you to say so. I so rarely get introduced. I am usually the one who does the introducing, and it is lonelier than it sounds." }
        ] },
        { t: "(Pretend you've never seen her before.)", notes: 0, then: [
          { s: 'elizabeth', f: 'happy', t: "She is pretending she has never seen me before. It's very sweet. She does it to everyone. You will have noticed." },
          { s: 'mitsuru', f: 'neutral', t: "...I have, as it happens." }
        ] }
      ] },
      { n: "Elizabeth came in. She came in the way weather comes in, all at once and into every corner. She took off her boots in the hall without being asked and lined them up exactly with Junpei's sneakers. She inspected the rice cooker with both hands and asked it a question. She knelt on the floor in front of Koromaru, very formally, and introduced herself, and Koromaru looked at her for a long moment and then lay down on her feet, which seemed to be the right answer." },
      { s: 'junpei', f: 'surprised', t: "Dude. Who is the elevator lady. Why does she know where the cups are." },
      { s: 'yukari', f: 'serious', t: "She's the one Solar talks to in her sleep. Isn't she." },
      { n: "Solar didn't answer that. Elizabeth, sitting down in Mitsuru's armchair without being offered it, smiled at Yukari as if she had just passed an exam." },
      femcMetAny(['kuromi', 'kiriko', 'mercy', 'haru', 'sebastian', 'astarion', 'aphrodite', 'cloud', 'noctis', 'judy', 'shadowheart', 'kasumi', 'leon', 'rohan', 'widowmaker', 'jungwon'], [
        { n: "They came after her, a few at a time, out of the snow. Solar's strangers. Elizabeth had asked them, it turned out, one by one, the same way she had sat each of them down since November and told them, gently, carefully, what was waiting at the far end of their door. They looked different now. Not happier. Clearer. Like people who had read the last page and closed the book and were sitting with it." }
      ], [
        { n: "Nobody else came. It was only S.E.E.S. in the lounge, and Wren on the arm of the couch, and Elizabeth in the armchair with the book on her knees, and outside the snow, coming down on a city full of strangers whose names were written on Fuuka's list." }
      ]),
      { s: 'elizabeth', f: 'neutral', t: "I will be brief. I am told I am never brief. I will be briefer than usual." },
      { s: 'elizabeth', f: 'neutral', t: "The hour closes at the end of this month. On the last night. Every door in my book closes with it. Every guest goes home through their own page, or not at all." },
      { s: 'elizabeth', f: 'serious', t: "On that night, the last night, all of you in the armbands have somewhere else to be. I know where. I will not say it in a room with a rice cooker in it. It is yours, not mine." },
      { n: "Mitsuru's hand went still on the arm of the couch. Akihiko looked at the floor. Nobody asked her how she knew. Nobody in S.E.E.S. had to." },
      { s: 'elizabeth', f: 'neutral', t: "So the doors will open the night before. The thirtieth. At midnight, at Iwatodai Station, where the line between your world and every other has always been thinnest. I will open every page at once." },
      femcMetAny(['kuromi', 'kiriko', 'mercy', 'haru', 'sebastian', 'astarion', 'aphrodite', 'cloud', 'noctis', 'judy', 'shadowheart', 'kasumi', 'leon', 'rohan', 'widowmaker', 'jungwon'], [
        { ifRank: { leon: 1 }, then: [
          { s: 'leon', f: 'neutral', t: "We talked about it. All of us. We're going the night before. Together." },
          { s: 'leon', f: 'serious', t: "So you can see us off. Somebody should get to wave." }
        ], else: [
          { ifRank: { kiriko: 1 }, then: [
            { s: 'kiriko', f: 'neutral', t: "We talked about it. All of us. We're going the night before, together. So you can see us off." },
            { s: 'kiriko', f: 'happy', t: "Somebody has to wave. It's in the rules. I wrote the rules." }
          ], else: [
            { n: "They had talked about it already, she could tell. The night before. Together. So that somebody could see them off." }
          ] }
        ] }
      ]),
      { s: 'elizabeth', f: 'serious', t: "And the thing on the bench will come. It will not be able to help itself. Every ending in my book, walking past it at once, out of its reach forever. It has been sitting there since December waiting for exactly that." },
      { s: 'yukari', f: 'serious', t: "So we fight it? You can't hit paper. Well. You can. It doesn't care. I said that in October and I'm still right." },
      { s: 'elizabeth', f: 'happy', t: "No. You hold it." },
      { n: "She opened the compendium on her knees, and turned it around, and showed them the inside of the back cover, where something had been sketched in pencil, quickly, the way you'd sketch something so you could stop seeing it with your eyes shut. A tall bowed shape made of pages. Hundreds of them. Every one blank." },
      { s: 'elizabeth', f: 'neutral', t: "It takes the pages no one holds. You told me that yourselves, in October, in this room. That is its rule. It is the only rule it has ever had." },
      { s: 'elizabeth', f: 'serious', t: "And what is it made of? Pages no one held. Every one of them. It is wearing a coat of everything nobody kept." },
      { s: 'elizabeth', f: 'happy', t: "So on the thirtieth, we hold every one." },
      { n: "There was a long silence in the lounge. The snow went on outside. Somewhere in the kitchen the rice cooker clicked over to warm." },
      { s: 'junpei', f: 'surprised', t: "...Grab a ghost. You're saying grab a ghost." },
      { s: 'elizabeth', f: 'happy', t: "I am saying grab a ghost, Mister Iori. By its pages. Every one of them, all at once, so that there is nothing left of it that nobody is holding. It cannot take what is held. Not even from itself." },
      { s: 'akihiko', f: 'serious', t: "So we use more hands." },
      { s: 'elizabeth', f: 'happy', t: "So you use more hands. Yes. Exactly that. You said it first, Mister Sanada, in October. I have been meaning to thank you for it." },
      { s: 'aigis', f: 'serious', t: "I will hold two. My grip strength remains excellent." },
      { s: 'koromaru', f: 'serious', t: "Woof!" },
      { ifRank: { kiriko: 1 }, then: [
        { s: 'kiriko', f: 'happy', t: "Six. The fox does six. I already told it. It's been practicing on the shrine's prayer slips all week and the priest is very confused." }
      ] },
      { ifRank: { rohan: 1 }, then: [
        { s: 'rohan', f: 'serious', t: "I'll hold one. And I'll read it while I'm holding it. I want to know what it's made of before it's gone. Professionally." }
      ] },
      { s: 'ken', f: 'serious', t: "And the people from the list? The ones we found?" },
      { s: 'fuuka', f: 'happy', t: "I asked them. Every one. They're coming. They said, of course they're coming. Somebody came for them." },
      { n: "Then Elizabeth reached into the compendium, between two pages near the back, and took out a single sheet of paper, blank on both sides and soft with handling. She held it out to Solar." },
      { n: "It was warm. Warm like a seat someone has only just stood up from." },
      { s: 'elizabeth', f: 'neutral', t: "I have been keeping this for you since September. It is yours to hold on the night. Hers will need someone who knows her name." },
      { n: "Hanne. Solar didn't say it out loud. She didn't need to. Her hands closed on the page on their own, the way hands do around something you'd been afraid you'd dropped." },
      { s: 'elizabeth', f: 'neutral', t: "And you, Miss Wren." },
      { n: "Wren looked up from the arm of the couch, where she had been listening with her chin in her hand, politely, like a guest at a lecture on a subject she didn't take." },
      { s: 'elizabeth', f: 'neutral', t: "I will not ask you tonight. I will ask you on the night, at the station, with your ending in front of you where you can see it. And you will answer however you like." },
      { s: 'wren', f: 'neutral', t: "Solar asked me already. At the sea. I said I'd tell her in January." },
      { s: 'elizabeth', f: 'neutral', t: "It is January." },
      { s: 'wren', f: 'surprised', t: "...So it is." },
      { n: "She looked at Solar across the lounge. She didn't say anything else. Solar's stomach did the slow, careful thing it had done every day since August, like a hand feeling along a wall in the dark for the light switch." },
      { s: 'mitsuru', f: 'neutral', t: "The Group answered my report, by the way. On Tuesday. I hadn't told anyone." },
      { s: 'mitsuru', f: 'neutral', t: "One line. 'Understood.' Nothing else. No sensors. No questions. I've read it eleven times." },
      { s: 'mitsuru', f: 'sad', t: "I don't know what it means. I've decided to believe it means what it says. That's new for me. I'm told it's good for you." },
      { s: 'elizabeth', f: 'happy', t: "It is dreadful for you. It is the best thing there is." },
      { s: 'elizabeth', f: 'serious', t: "I am asking for all of you. Every bond in this book. Every hand anyone in this room has ever held, in any world. Bring them. We will need every one." },
      { n: "When she left, at nine, she took a cookie from the plate by the door on her way out. Fuuka had made them. The whole lounge held its breath. Elizabeth ate it slowly in the doorway with the snow coming down behind her, and closed her eyes, and said it was the most remarkable thing she had ever tasted, and meant it, and Fuuka went so pink she had to sit down." },
      { place: 'Iwatodai Dorm · Her Room · The Dark Hour', time: 'Midnight', music: 'night' },
      { n: "The hour came and didn't end. One o'clock. Two. Solar lay on her bed in her uniform with Hanne's page flat on her chest, warm, rising and falling with her breathing, and listened to the dorm be awake around her, all of them, through the walls." },
      { n: "Three weeks. She had very ordinary hands. She held them up in the green light and looked at them for a long time, and then put them both down flat over the page, and kept them there until morning." }
    ] },

    { id: 'a4-the-girl-on-the-bench', act: '4', date: '1/26', slot: 1, title: 'the girl on the bench', place: 'Iwatodai Dorm · Rooftop', music: 'tender', scene: [
      { n: "Wren knocked on her door at eleven. Solar knew it was Wren before she opened it. Nobody else in the building knocked like that, two small careful taps, like someone checking a melon." },
      { s: 'wren', f: 'neutral', t: "Will you come up to the roof? I want to ask you something, and I'd like to be somewhere with a lot of sky." },
      { n: "The roof in the last week of January was the coldest place in Iwatodai. The water tank had a skin of ice down one side. The city was all lights below them, the bay black, the monorail sliding across it like a bead on a string, and over at the station, small and bright, the platform where everything had started." },
      { n: "Wren sat down with her back against the water tank, where Solar had sat with a blank page in September, and pulled her coat around her knees, and looked at the station lights for a while before she said anything." },
      { s: 'wren', f: 'neutral', t: "Tell me about her. The girl on the bench. From the beginning. You're the only one who was there." },
      { n: "So Solar told her." },
      { n: "She told her about April. A girl on the last bench under the timetable at twenty to midnight, very straight, hands in her lap, in a porter's coat cut for someone twice her size. Her hair wet when it hadn't rained in Iwatodai all day. A ticket she'd never once used. Your trains are too quiet, the girl had said. They sigh. Like they're sorry about something." },
      { n: "She told her about the joke about the fares, and the laugh, one short bright sound, and the sleeve over the mouth like she'd been caught at something. About what happens to people who stay somewhere they don't belong. About the streetlight in July, and the shadow she cast under it for the first time, thin and pale and there. The sea. The coat folded in thirds. The water to her knees. It isn't quiet at all. The pink nose, all the way to the station." },
      { n: "She told her about the platform in June, too, and the hand reaching out, and the ticket fluttering down. I wasn't going to go, the girl had said afterward, holding on to Solar's sleeve with both fists. I wasn't. I don't think." },
      { n: "Wren listened to all of it with her head tipped back against the tank and her eyes on the station, the way you'd listen to a story about someone you'd sat next to on a long trip once and lost touch with." },
      { s: 'wren', f: 'neutral', t: "Did she like you?" },
      { choose: [
        { t: "I think so.", notes: 0, then: [
          { s: 'wren', f: 'happy', t: "I think so too. You can hear it in how you tell it. She keeps coming back to the bench. Nobody does that for someone they don't like." }
        ] },
        { t: "She said she'd wave so hard I'd be mortified.", notes: 0, then: [
          { s: 'wren', f: 'happy', t: "Oh, that's awful." },
          { s: 'wren', f: 'surprised', t: "...That sounds like her. That sounds like me. Doesn't it." }
        ] }
      ] },
      { s: 'wren', f: 'neutral', t: "I like her. She was frightened all the time, and she kept coming back to the bench anyway." },
      { s: 'wren', f: 'neutral', t: "I've been thinking about it since the sea. Properly. It's very hard, thinking about something you can't feel. It's like trying to remember a smell." },
      { s: 'wren', f: 'serious', t: "I've decided. I'd like to give her back her ending." },
      { n: "Solar's body heard it first. Her hands, which had been cold for an hour, went hot. Her throat closed up. Her eyes did something she had to look at the bay about." },
      { s: 'wren', f: 'serious', t: "I don't know what it is. I don't know why it matters. But she would, and it's hers, and I've only been borrowing her. Her coat. Her bench. You." },
      { s: 'wren', f: 'neutral', t: "It doesn't seem fair to keep any of it when she's the one who did all the hard parts." },
      { choose: [
        { t: "You'll be afraid again.", notes: 0, then: [
          { s: 'wren', f: 'neutral', t: "I know. You said. All the time, you said." },
          { s: 'wren', f: 'happy', t: "I'd like to see what it's like. I'd like to find out what she was so frightened of. Somebody ought to, and I think it ought to be her." }
        ] },
        { t: "You'll have to go.", notes: 0, then: [
          { s: 'wren', f: 'neutral', t: "Yes. I suppose that's what an ending's for. It goes somewhere." },
          { s: 'wren', f: 'sad', t: "I can't feel how sad that is. You'll have to feel it for both of us. You're very good at it. I've watched." }
        ] },
        { t: "(Take her hand.)", notes: 0, then: [
          { n: "Her hand was warm. It had been warm since September. Solar held it anyway, the way you'd hold a hand that was cold, and Wren let her, and looked down at their two hands in her lap as if they were a puzzle she was nearly finished with." }
        ] }
      ] },
      { s: 'wren', f: 'neutral', t: "Will you see me off? When it's time. Will you be on the platform?" },
      { choose: [
        { t: "I'll wave so hard you'll be mortified.", notes: 0, then: [
          { s: 'wren', f: 'happy', t: "Good. I'd like to be mortified. I'd like to be all of it." }
        ] },
        { t: "(Nod. You can't say it.)", notes: 0, then: [
          { n: "She nodded. Wren watched her nod, reading her face the way she'd said she did, and nodded back, solemnly, like two people agreeing on the time of a train." }
        ] }
      ] },
      { s: 'wren', f: 'neutral', t: "What's yours? Your ending. Do you know?" },
      { ifRank: { rohan: 10 }, then: [
        { choose: [
          { t: "Rohan says my last page is blank. That it's mine.", notes: 0, then: [
            { s: 'wren', f: 'happy', t: "Blank because nobody's written it yet. Not blank because somebody took it." },
            { s: 'wren', f: 'neutral', t: "That's the good kind. I didn't know there were two kinds. I think I'd like to have the good kind, too, for a bit, before the end." }
          ] },
          { t: "I don't know.", notes: 0, then: [
            { s: 'wren', f: 'neutral', t: "Good. Then don't let it give you one. Not even a nice one. Especially not a nice one." }
          ] }
        ] }
      ], else: [
        { choose: [
          { t: "I don't know.", notes: 0, then: [
            { s: 'wren', f: 'neutral', t: "Good. Then don't let it give you one. Not even a nice one. Especially not a nice one." }
          ] },
          { t: "Not yet.", notes: 0, then: [
            { s: 'wren', f: 'happy', t: "Not yet. Oh, I like that. I'm sure somebody told me once that that was the best answer there is." }
          ] }
        ] }
      ] },
      { n: "They stayed until the cold drove them in, which took a long time, because neither of them wanted to be the one to say so. On the stairs down Wren stopped, one hand on the rail, and looked back up at the square of sky in the roof door, black and full of stars." },
      { s: 'wren', f: 'neutral', t: "Four days. I counted. I've never counted anything before. Not since August." },
      { s: 'wren', f: 'happy', t: "It's a strange feeling. I think it might be the start of one." }
    ] },

    { id: 'a4-the-line-is-clear', act: '4', date: '1/30', slot: 1, title: 'the line is clear', place: 'Iwatodai Dorm · Lounge', music: 'tender', scene: [
      { n: "Saturday the thirtieth was the coldest day of the year, clear and hard and blue all afternoon, the kind of cold that made the air ring when you breathed it in. By evening the windows of the lounge had frozen at the corners into ferns, and the radiator was clanking every few minutes like it had opinions, and the front hall was full of shoes." },
      femcMetAny(['kuromi', 'kiriko', 'mercy', 'haru', 'sebastian', 'astarion', 'aphrodite', 'cloud', 'noctis', 'judy', 'shadowheart', 'kasumi', 'leon', 'rohan', 'widowmaker', 'jungwon'], [
        { n: "They had come in what they arrived in. That was the first thing Solar noticed, coming down the stairs. Nobody had said to. Everybody had. Armor and hoodies and long coats, a jester hat, a red scarf, a white uniform with a crest on the pocket, a sword the size of a door leaning against the umbrella stand where Junpei kept nearly knocking it over. Everyone dressed for the place they were going back to, sitting in a dorm lounge in Iwatodai drinking tea out of mismatched mugs, like guests at a wedding waiting for the cars." },
        { ifRank: { noctis: 1 }, then: [
          { n: "Noctis was awake. Wide awake, sitting up straight on the couch, which was so unlike him that Akihiko had asked twice if he was feeling all right." }
        ] },
        { ifRank: { widowmaker: 1 }, then: [
          { n: "Widowmaker had come inside. She stood by the window with her back to the wall and her arms folded, where she could see every door, and when Koromaru went and sat on her feet she let him." }
        ] },
        { ifRank: { kuromi: 1 }, then: [
          { n: "Kuromi had taken down the toll sign from the lounge door and was sitting on the couch holding it in her lap, and wouldn't let anyone take it from her, and wouldn't say why." }
        ] }
      ], [
        { n: "There were only the dorm's own shoes in the hall, and Koromaru's lead, and a pair of small black boots by the door that had come from much further down the line than anyone else's. S.E.E.S. sat in the lounge drinking tea out of mismatched mugs and not talking much, like people at a station waiting for an announcement." }
      ]),
      { n: "Akihiko was taping his knuckles at the table with the focus of a surgeon. Junpei was pretending to be calm, loudly. Ken had his spear across his knees and kept checking the clock, and Fuuka had her headphones on already, listening to the station from four kilometers away, and Mitsuru sat in her armchair with her hands folded and her face composed and her foot tapping, very slightly, in a rhythm nobody had ever seen her foot do before." },
      { n: "Solar had filled her pockets without deciding to. Elizabeth had said bring them, every hand anyone had ever held, and she'd gone around her room that afternoon picking things up and putting them in her coat, one at a time, the way you'd count heads on a school trip." },
      { ifRank: { akihiko: 10 }, then: [{ n: "A pair of red boxing gloves, worn pale at the knuckles, tied together by the laces and hung around her neck under her coat like a scarf, which Akihiko saw and pretended not to." }] },
      { ifRank: { kiriko: 10 }, then: [{ n: "A little brass bell on a red cord." }] },
      { ifRank: { mercy: 10 }, then: [{ n: "A gold feather that hummed when her fingers closed around it." }] },
      { ifRank: { astarion: 10 }, then: [{ n: "A strip of four photographs from a booth at Paulownia Mall, slightly bent." }] },
      { ifRank: { cloud: 10 }, then: [{ n: "A marble of green glass, warm, with something like a heartbeat in it." }] },
      { ifRank: { aphrodite: 10 }, then: [{ n: "A golden apple, which did not fit in any pocket and had to go in her bag." }] },
      { ifRank: { leon: 10 }, then: [{ n: "A police badge, bent at one corner." }] },
      { ifRank: { noctis: 10 }, then: [{ n: "A fishing lure, a little silver fish with a crown on its head." }] },
      { ifRank: { judy: 10 }, then: [{ n: "A chip labeled US in somebody's messy capitals." }] },
      { ifRank: { rohan: 10 }, then: [{ n: "A hand-bound manga with her own name on the cover, and a last page that belonged to her." }] },
      { ifRank: { kasumi: 10 }, then: [{ n: "A red bow, and around her wrist, a blue ribbon." }] },
      { ifRank: { jungwon: 10 }, then: [{ n: "A gold pin on her blazer, PRESIDENT in tiny capitals, exactly level." }] },
      { ifRank: { widowmaker: 10 }, then: [{ n: "A pale pink ribbon from a pointe shoe, frayed at the ends." }] },
      { ifRank: { ann: 10 }, then: [{ n: "A red mask with little cat ears." }] },
      { ifRank: { rio: 10 }, then: [{ n: "Under her coat, under her blazer, a navy jersey with a white seven on the back, too big, smelling faintly of a cedar closet and the gym." }] },
      { ifRank: { saori: 10 }, then: [{ n: "A laminated library card that would stop working when January did, with thirty-one call numbers on the back." }] },
      { ifRank: { shinjiro: 10 }, then: [{ n: "A recipe card in somebody's cramped, impatient handwriting, soft with handling, which she had never once needed to read and carried anyway." }] },
      { n: "And her student handbook, which didn't close anymore. A page with a gray smudge where a face should be." },
      { ifRank: { kiriko: 1 }, then: [{ n: "A fortune that was blank, or not written yet, depending on who you asked." }] },
      { n: "And on top, folded in half, warm, a page with nothing on it at all, that belonged to someone whose name she knew." },
      { n: "At eleven Wren came down the stairs." },
      { n: "She had the porter's coat buttoned all the way up, every brass button in a row, the collar turned up with the badge on it, the sleeves swallowing her hands to the knuckles. She'd done her hair. She had the ticket in her hand, cream card, soft at the corners, with a small neat hole punched through the middle of nothing." },
      { s: 'wren', f: 'neutral', t: "I made the rice. For the morning. Somebody ought to eat it." },
      { n: "Nobody could say anything to that. Junpei got up and went into the kitchen and stood there for a while with the door shut, and came back out and said the rice cooker was on, all good, with his face very red, and sat down." },
      { s: 'mitsuru', f: 'neutral', t: "It's time." },

      { place: 'Iwatodai Station · Platform · The Dark Hour', time: 'Midnight', music: 'night' },
      { n: "The clock above the stairs reached twelve and stayed there." },
      { n: "The lights went out all at once. The vending machines cut off mid-hum. The frost on the yellow line went green, and the departures board went dark, and the moon came up through the gap in the roof enormous and close, and Iwatodai Station was the color of old pond water, the way it had been in April, the first night, with a girl on a bench looking around at the coffins like she'd seen all of this before and hadn't liked it then, either." },
      { n: "The bench wasn't a bench anymore." },
      { n: "It was sitting there still, the way it had sat there every hour since December. But it wasn't small. It had stopped making itself small. It rose from the bench in layers, pages on pages on pages, cream and white and the gray of old newsprint, up past the timetable and the departures board until its bowed head brushed the roof, and the pages stirred along its edges in a wind that wasn't blowing, thousands of them, every one blank. Behind it on the track, silent, paper-white at every window, the train of the kept sat waiting with its doors open. Inside, people slept." },
      { s: 'thelacuna', t: "You brought me all of them." },
      { n: "Its voice was soft. It was always soft. Tonight it sounded like everyone at once, a whole platform of voices she had loved, and Solar felt it the way she'd felt it in June, the hand laid flat on her chest. Not pushing. Just checking she was still breathing." },
      { s: 'thelacuna', t: "I knew you would. I told you. January, and a platform, and every one of them going." },
      { n: "Elizabeth came through the turnstiles behind them, unhurried, in blue, with the compendium held open against her chest, and she didn't look at the thing at all. She walked to the middle of the platform and stood on the yellow line and lifted the book in both hands." },
      { s: 'elizabeth', f: 'serious', t: "Good evening. I am going to open every door in my book now. Please mind the gap." },
      { n: "The pages went up out of the compendium like birds off a wire, and wherever they came down along the platform, a door stood up out of the green." },
      { n: "Not doors like the dorm's. Every one was different. A door was a gate, and a hatch, and a curtain, and a torii with snow on it, and a lit window low down on a wall, and a rope of light hanging from nowhere, and every one of them was the shape of the way someone had come in. Through the nearest, Solar could smell salt and diesel. Through the next, cut grass. Rain. Cedar. A city at night with something frying. Somebody's kitchen." },
      femcMetAny(['kuromi', 'kiriko', 'mercy', 'haru', 'sebastian', 'astarion', 'aphrodite', 'cloud', 'noctis', 'judy', 'shadowheart', 'kasumi', 'leon', 'rohan', 'widowmaker', 'jungwon'], [
        { n: "Her strangers looked at their doors. Every one of them knew theirs at once. She watched it happen down the length of the platform, face after face, the eyes going to the exit the way they had all year, except that this time nobody looked frightened of it. They looked like people recognizing their own front door at the end of a very long trip." },
        { ifRank: { jungwon: 1 }, then: [
          { n: "Jungwon's was the door of a student council room, with the light on behind the frosted glass, and a poster-shaped space on the wall beside it where something used to hang." }
        ] }
      ]),
      { n: "And down at the far end of the platform, past every door, there was one more track that hadn't been there before. It ran out of the tunnel and away along the ground, not up into the sky, and it was empty, and it was waiting." },
      { s: 'thelacuna', t: "Every ending in the book. Right in front of me. Do you know how long I've waited for that?" },
      { s: 'thelacuna', t: "Solar. I kept your seat. You said I could ask you again." },
      { n: "And the table was there. All down the platform, between the doors, the long table from November, the lamps and the steam and the bowls, and Shinjiro at a stove that had no business being on a train platform, scowling at a pot, awake. Every chair full. One chair pulled back a little, at the near end, the way you pull one back for someone you know is coming." },
      { s: 'thelacuna', t: "So I'm asking. Sit down. Nobody has to go anywhere. Not tonight. Not ever." },
      { choose: [
        { t: "No.", notes: 0, then: [
          { n: "It came out quiet. It didn't need to be loud. She'd said it once already, in November, on this platform, and it turned out the second time was easier, the way the second time across a cold floor is easier, because you know how far it is." }
        ] },
        { t: "Not yet.", notes: 0, then: [
          { n: "Down the platform, in her coat, Wren made a small sound like a laugh she'd put her sleeve over." },
          { s: 'thelacuna', t: "...Not yet. You don't mean that the way I'd like you to. Do you." }
        ] },
        { t: "(Look at Wren.)", notes: 0, then: [
          { n: "She looked at Wren instead of at the table. Wren was looking back at her, very steady, with her ticket in her hand. It was all the answer either of them had." }
        ] }
      ] },
      { s: 'thelacuna', t: "All right. Then I'll ask them." },
      { music: 'battle' },
      { n: "It stood." },
      { n: "It came up off the bench all at once and the pages came with it, every one, a storm of them, roaring up off its body and filling the station from the tracks to the roof, and the wind they made was real, it tore at her coat and her hair and the handbook in her pocket, and in every page, for an instant, as it went past, there was a voice. Everyone's voice. Its offer, a thousand times, to a thousand people, all at once. Stay. Stay. It doesn't have to end." },
      { s: 'elizabeth', f: 'serious', t: "Now! Hands! Every one of you, now!" },
      { n: "So they put their hands out into the storm." },
      { s: 'junpei', f: 'surprised', t: "GRABBING A GHOST! I'M GRABBING A GHOST!" },
      { n: "He got one. He got it in both fists and held on, and it bucked in his hands like a fish, and he didn't let go, yelling the whole time. Yukari caught one out of the air the way she'd catch a bad pass, and held it to her chest. Ken took one, and then a second, set his feet like he'd been taught, and said for Shinjiro-san through his teeth. Fuuka didn't reach for one at all. One came to her, and settled in her hands like a bird coming down onto a wrist, and she held it and listened to it and cried." },
      { s: 'akihiko', f: 'serious', t: "It came to me too, you know. In November. It said Shinji could be awake. At a stove. Scowling at a pot." },
      { s: 'akihiko', f: 'serious', t: "He's going to wake up on his own. I'm going to be there when he does. Not at some table that's lying to me." },
      { n: "He closed one taped fist on a page and the page stopped fighting. Just like that. It went still in his hand like it had been waiting a long time for somebody to do exactly that." },
      { s: 'aigis', f: 'happy', t: "Two. As promised." },
      { n: "Koromaru jumped, higher than a dog should be able to, and came down with a page in his teeth, and sat on the platform holding it very gently, like he'd been asked to carry an egg." },
      { n: "Mitsuru took one. She looked at it in her hand for a long second, a blank page with nothing on it that someone had once not wanted to read, and then she folded it once, neatly, and held it flat against her chest, over her heart, the way she'd held her hand over the gap on the printout in June." },
      { n: "And then the turnstiles clattered, frozen open as they were, and people came up the stairs." },
      { n: "The names. Fuuka's names. Strangers out of the October cold who had been found by somebody who knew their names, coming up onto the platform in twos and threes in the clothes of a dozen worlds, a woman with birds in her hair, a man with a slow ticking watch, a very old man in a rain cape who went straight to Junpei and grabbed a page beside him and held on, and Junpei shouted that this was his guy, this was his GUY, and they held it together." },
      femcMetAny(['kuromi', 'kiriko', 'mercy', 'haru', 'sebastian', 'astarion', 'aphrodite', 'cloud', 'noctis', 'judy', 'shadowheart', 'kasumi', 'leon', 'rohan', 'widowmaker', 'jungwon'], [
        { n: "And her strangers put out their hands." }
      ], [
        { n: "It wasn't enough. She could see it wasn't. For every page somebody caught, ten more went roaring past, and the storm was thinning nobody, and the voice was still going, stay, stay, and then, because there was nothing else in her pockets to give it, Solar put out her own hand, too." }
      ]),
      { ifRank: { kiriko: 1 }, then: [
        { n: "The fox came up the stairs like a thrown match, gold and many-tailed, and halfway down the platform it came apart into six foxes, and every one of them leapt and came down with a page in its teeth, and sat on the yellow line in a row, tails curled around their feet, delighted." },
        { ifRank: { kiriko: 10 }, then: [
          { n: "In Solar's pocket the brass bell rang by itself, small and clear, and Kiriko, holding her own page in both hands at the far end of the platform, closed her eyes and smiled." },
          { s: 'kiriko', f: 'happy', t: "Loud and clear!" }
        ], else: [
          { s: 'kiriko', f: 'happy', t: "Six! Told you! The fox loves a project!" }
        ] }
      ] },
      { ifRank: { kuromi: 1 }, then: [
        { s: 'kuromi', f: 'serious', t: "The toll is ONE COMPLIMENT! And you STILL don't have one!" },
        { n: "She grabbed a whole fistful of pages and held on to them the way she held on to a grudge, which was forever, and stuck her tongue out at the storm." }
      ] },
      { ifRank: { mercy: 1 }, then: [
        { s: 'mercy', f: 'serious', t: "Don't squeeze it. Hold it like a pulse. Just don't let go." },
        { ifRank: { mercy: 10 }, then: [
          { n: "The feather in Solar's pocket hummed, and somewhere on the platform the Caduceus hummed back, and gold light spilled along the yellow line, and where it touched the pages they went quiet." }
        ] }
      ] },
      { ifRank: { haru: 1 }, then: [
        { s: 'haru', f: 'serious', t: "You showed me my father. On a roof. Looking at my tomatoes like they were worth something." },
        { s: 'haru', f: 'sad', t: "I'm going home to miss him properly. I'm allowed both. Somebody told me I'm allowed both." }
      ] },
      { ifRank: { sebastian: 1 }, then: [
        { s: 'sebastian', f: 'serious', t: "It asked me if I wanted to stay. I didn't say no fast enough." },
        { s: 'sebastian', f: 'neutral', t: "No. There. That was fast." }
      ] },
      { ifRank: { astarion: 1 }, then: [
        { ifRank: { astarion: 10 }, then: [
          { s: 'astarion', f: 'happy', t: "I'm in the picture now, darling. Four of them. Eleven strips. You can't have me. I've already been seen." }
        ], else: [
          { s: 'astarion', f: 'serious', t: "Two hundred years of somebody else deciding when my nights end. I think I'll decide this one myself, thank you." }
        ] }
      ] },
      { ifRank: { aphrodite: 1 }, then: [
        { n: "Aphrodite walked into the middle of the storm and got brighter, the way she had in August, and the green went back from her like a tide going out." },
        { s: 'aphrodite', f: 'serious', t: "Love doesn't last because nothing changes, darling. It lasts because everything does and it comes along anyway. I'd know. I invented it." }
      ] },
      { ifRank: { cloud: 1 }, then: [
        { s: 'cloud', f: 'neutral', t: "Not interested." },
        { n: "He didn't cut anything this time. He just put out one gloved hand and closed it on a page, and held on, as if that was the harder thing, and maybe for him it was." },
        { ifRank: { cloud: 10 }, then: [
          { n: "The green marble in Solar's pocket went warm, warm as a hand, and stayed warm." }
        ] }
      ] },
      { ifRank: { noctis: 1 }, then: [
        { s: 'noctis', f: 'neutral', t: "It said I could sleep for good. Nothing to get up for." },
        { s: 'noctis', f: 'serious', t: "I've got something to get up for. I'm awake. It's weird. I hate it. I'm keeping it." }
      ] },
      { ifRank: { judy: 1 }, then: [
        { s: 'judy', f: 'serious', t: "Recording. Every second. You're gonna be in the last frame, paper boy, and you're gonna be holding still." }
      ] },
      { ifRank: { shadowheart: 1 }, then: [
        { s: 'shadowheart', f: 'serious', t: "I spent my whole life letting other people choose what I'd remember. Not tonight. I choose." }
      ] },
      { ifRank: { kasumi: 7 }, then: [
        { s: 'kasumi', f: 'serious', t: "It sounds like Dr. Maruki. Everyone happy. Nobody ever hurting again." },
        { s: 'kasumi', f: 'serious', t: "My name is Sumire Yoshizawa. I'd like to keep hurting as myself, please." }
      ], else: [
        { ifRank: { kasumi: 1 }, then: [
          { s: 'kasumi', f: 'serious', t: "It sounds like Dr. Maruki. Everyone happy. Nobody ever hurting again. No, thank you." }
        ] }
      ] },
      { ifRank: { leon: 1 }, then: [
        { n: "Leon held his page the way he held a door for people, one-handed, braced, without looking at it, his eyes on everybody else's." },
        { s: 'leon', f: 'serious', t: "Rookie mistake, buddy. You picked a whole platform full of people who don't quit." }
      ] },
      { ifRank: { rohan: 1 }, then: [
        { s: 'rohan', f: 'serious', t: "Heaven's Door." },
        { n: "He drew a line in the air, and one corner of the storm opened like a book, and Rohan, perfectly calm in the gale with his hair standing straight up, leaned in and read." },
        { s: 'rohan', f: 'serious', t: "...It's all last pages. Thousands. Every one lifted off somebody else." },
        { s: 'rohan', f: 'sad', t: "And there's nothing of its own. Not one line. I've opened a lot of people. I've never opened anything that didn't have an ending of its own." },
        { s: 'rohan', f: 'serious', t: "No wonder it wants everyone else's. It's never had one." }
      ] },
      { ifRank: { widowmaker: 1 }, then: [
        { n: "Something came down from the roof girders on a line, fast and dark, and caught a page out of the air on the way past, and swung up again." },
        { s: 'widowmaker', f: 'serious', t: "I have belonged to someone else for long enough, petite. This one is mine." }
      ] },
      { ifRank: { jungwon: 1 }, then: [
        { s: 'jungwon', f: 'neutral', t: "It asked me again last week. I said no thank you. I'll say it again. No, thank you." },
        { n: "He held his page by the corners, carefully, the way you'd hold a poster you meant to give back to its owner." }
      ] },
      { ifRank: { haechan: 1 }, then: [
        { n: "Haechan didn't take a page. He came and stood beside her in the wind and took her hand instead, and held it, hard, his fingers cold and certain." },
        { s: 'haechan', f: 'serious', t: "I'm not in that book. I walked. Nothing in there's mine to hold." },
        { s: 'haechan', f: 'neutral', t: "So I'm holding this." }
      ] },
      { n: "And Solar took Hanne's page out of the handbook and held it up into the storm, the warm blank page from the bench by the taxi stand, and said her name." },
      { n: "Not loudly. She said it the way you'd say it across a plaza to someone who was already turning away. Hanne. And the page in her hand pulled, like something on the other end of a string, and out of the storm one page came loose from all the others and flew to it, and lay down on it, flat, and when Solar looked, there was writing on both." },
      { n: "On the train of the kept, in a window seat, a woman in a long blue coat opened her eyes." },
      { n: "It happened all down the train after that. Page after page, held by somebody, went still, and came loose, and went home through the windows to whoever it had been lifted off, and the sleepers woke. One after another, in armor and robes and clothes she didn't have names for, sitting up in their seats, blinking, putting their hands to their faces, the way you wake on a train and don't know at first which stop it is." },
      { ifRank: { ann: 10 }, then: [
        { n: "There was one window, near the front, with nobody in it. A red cushion. Elizabeth, passing it with the book, touched the glass with one gloved finger as if to say, not her, she's home, and kept walking." }
      ], else: [
        { ifRank: { ann: 1 }, then: [
          { n: "In the third car a girl in a red jacket sat up and pushed her hair out of her face and looked around, and saw Solar on the platform, and her mouth fell open." },
          { s: 'ann', f: 'surprised', t: "...Sunflare? Did I... did I miss it? I was so tired. I missed the thin night and I was so tired and it asked so nicely..." },
          { n: "Not missed, Solar told her, through the window. It's tonight. Your door's down there. Ann looked where she was pointing, and put both hands over her mouth, and laughed through them." }
        ] }
      ] },
      { music: 'mystery' },
      { n: "The storm was thinner. Then it was a wind. Then it was a few pages, turning over and over in the green, and then it was none." },
      { n: "And the thing on the bench was not tall anymore. It was standing there between the doors on the cold platform no taller than Solar, thin, bowed, a figure made of so few pages now that she could see the timetable through it. All of it held. All but one." },
      { n: "It had one hand pressed flat to its chest, where a heart would be, if it had one. There was a page under the hand. Solar could see the edge of it. Cream. A line of track, faint. The corner of a coat." },
      { s: 'thelacuna', t: "Not this one." },
      { s: 'thelacuna', t: "Nobody can hold this one but her. And she won't. She doesn't want it. I asked. I was very careful." },
      { n: "Elizabeth lowered the book. She turned, on the yellow line, and looked down the platform to where Wren stood by the stairs in her coat with her ticket in her hand, and she asked, the way she'd promised to, with the ending right in front of her where she could see it." },
      { s: 'elizabeth', f: 'neutral', t: "Miss Wren. It is the night. Would you like it back?" },
      { n: "Wren walked down the platform. Past the doors and the strangers and S.E.E.S., past Koromaru with his page in his teeth, past Solar, without hurrying. She stopped in front of the thing. They were the same height now. She looked at it for a long time, kindly, the way you'd look at someone who had sat with you in a waiting room through a long night." },
      { s: 'wren', f: 'neutral', t: "Hello. It was you who sat with me. I know it was." },
      { s: 'wren', f: 'neutral', t: "Thank you for that. I mean it. It was very quiet and very kind and I didn't have to be frightened of anything." },
      { s: 'wren', f: 'serious', t: "Can I have it back, please? It's mine." },
      { s: 'thelacuna', t: "You'll be afraid again." },
      { s: 'wren', f: 'serious', t: "Yes. Please." },
      { n: "The hand on its chest didn't move for a long moment. Then it did. It lifted, slowly, the way you'd lift your hand off a sleeping animal so as not to wake it, and Wren reached in and took the page out of it, and held it in both hands, and read." },
      { music: 'tender' },
      { n: "Solar watched her face. She'd been watching it since April. She knew every weather it had." },
      { n: "It went white. Then it crumpled, all at once, like a kid's, and Wren's whole body began to shake inside the enormous coat, her shoulders and her hands and her knees, and she made a sound Solar hadn't heard since August, small and high and caught in the throat, and it was the most wonderful sound Solar had ever heard in her life." },
      { s: 'wren', f: 'surprised', t: "Oh. Oh, I remember. I remember what I was afraid of." },
      { s: 'wren', f: 'sad', t: "Solar, I'm so frightened. I'm frightened of all of it." },
      { s: 'wren', f: 'happy', t: "Isn't it wonderful?" },
      { choose: [
        { t: "(Hold her.)", notes: 0, then: [
          { n: "She held her. Wren held on back with both fists knotted in the back of Solar's coat, the way a little kid holds on in a crowd, the way she'd held on in June, shaking, crying, laughing into Solar's shoulder, and she was cold. She was cold. Her hands were freezing. Solar had never been so glad of anything." }
        ] },
        { t: "It's the best thing that's happened all year.", notes: 0, then: [
          { s: 'wren', f: 'sad', t: "It's horrible. It's awful. I can't stop shaking." },
          { s: 'wren', f: 'happy', t: "Oh, that's awful. That's very good." }
        ] },
        { t: "(Take her hand. It's cold.)", notes: 0, then: [
          { n: "Her hand was cold. Freezing, the fingers stiff, the way anyone's hand would be after an hour on a platform in January. Solar held it in both of hers and breathed on it like you would for a child, and Wren watched her do it with her face streaming, and laughed." }
        ] }
      ] },
      { n: "Behind her, on the bench, there was almost nothing left." },
      { n: "A single sheet of paper, blank, the size of a page, sitting on the slats of Wren's bench in the green, where for a whole winter something had sat and kept a seat. No face. No hands. Just a page, with the light of the moon coming through it." },
      { s: 'thelacuna', t: "...What happens to people who stay somewhere they don't belong?" },
      { n: "It said it very quietly. It said it in Wren's voice, the voice from April, the girl on the bench under the timetable with her ticket in her hand. It didn't sound like a trick. It sounded like a question it had kept, out of all the ones it had taken, because it was the one it most wanted answered." },
      { choose: [
        { t: "They start to belong. Slowly.", notes: 0, then: [
          { s: 'thelacuna', t: "Slowly." },
          { s: 'thelacuna', t: "I'd like slowly." }
        ] },
        { t: "I don't know. Let's find out.", notes: 0, then: [
          { s: 'thelacuna', t: "...Let's. Nobody's ever said let's to me." }
        ] },
        { t: "(Pick it up.)", notes: 0, then: [
          { n: "She went to the bench and picked it up in both hands. It weighed nothing. It weighed exactly as much as a page." }
        ] }
      ] },
      { n: "Elizabeth came and stood beside her on the yellow line and opened the compendium all the way to the back, past the last guest, past the last page anyone had written on, to the endpaper, smooth and cream and empty, the inside of the back cover." },
      { s: 'elizabeth', f: 'neutral', t: "Every book has a few blank pages at the very back. Did you know? They are not for the story. They are for the reader." },
      { s: 'elizabeth', f: 'neutral', t: "It is where you write what you want to remember. Who you lent it to. A name. A date. A line you underlined." },
      { s: 'elizabeth', f: 'happy', t: "I am short of one. I would very much like it to be you." },
      { s: 'thelacuna', t: "...Will someone hold it?" },
      { n: "Solar looked down at the page in her hands. Blank on both sides. Soft. Nothing written on it, nothing waiting, nothing anyone had ever wanted to read." },
      { s: 'solar', t: "I'm holding it." },
      { n: "It was quiet for a while. The moon came through it. Then the page shifted in her hands, very slightly, the way a sleeping cat shifts when you put your hand on it, and when it spoke again the voice wasn't anyone's. It wasn't someone she'd loved and couldn't place. It was just a small, dry, papery voice, its own." },
      { s: 'thelacuna', t: "Oh." },
      { s: 'thelacuna', t: "It's warm." },
      { n: "Then it was only a page." },
      { n: "Elizabeth took it from her, very carefully, in both gloves, the way she'd taken Hanne's in September, and laid it in at the back of the book, and smoothed it once with the side of her hand, and closed the cover over it, gently, the way you'd close a door on someone sleeping." },
      { s: 'elizabeth', f: 'happy', t: "There. The book is finished. I have never once been able to say that." },

      { place: 'Iwatodai Station · Platform · The Dark Hour', time: 'The last of the hour', music: 'tender' },
      { n: "Then the goodbyes, which took the rest of the hour, and which Solar would remember in pieces for the rest of her life, the way you remember a dream, the brightest bits, in the wrong order." },
      { n: "Hanne first. She came down the steps of the train of the kept in her long blue coat with the viola case under her arm, and stood on the platform, and looked at Solar." },
      { s: 'hanne', t: "You came running. Across the plaza. Nobody had come toward me in eight weeks. Everyone was always going somewhere else." },
      { s: 'hanne', t: "I'm Hanne. I think you know. I'd like to have said it myself." },
      { n: "Then she sat down on the empty bench, and opened the case, and played. Not the thin lovely music going nowhere from the station steps in July. Something else. The kind of tune they'd play in the squares on the last night of a festival when the lanterns were starting to go out and nobody wanted to go home and everyone was going to anyway. She played the doors open. She played everybody out." },
      { ifRank: { kiriko: 1 }, then: [
        { n: "Kiriko went through a torii with snow on the crossbeam, with six foxes running ahead of her and one behind." },
        { ifRank: { kiriko: 10 }, then: [
          { n: "She turned in the gateway to yell back down the platform that the last fortune was still great blessing, she'd checked, it hadn't changed, and Solar had better ring the bell." },
          { n: "Solar rang it. Kiriko closed her eyes in the gateway, and smiled like she'd felt it in her chest, and was gone." }
        ], else: [
          { n: "She turned in the gateway and waved with both arms, the fortune box rattling in her sleeve, and yelled that the blank one meant not written yet, Kiriko's rules, binding, and was gone." }
        ] }
      ] },
      { ifRank: { kuromi: 1 }, then: [
        { ifRank: { kuromi: 10 }, then: [
          { ifRomance: 'kuromi', then: [
            { n: "Kuromi went last of anyone she knew from the dorm, scowling, and at the door she grabbed Solar by the collar and kissed her on the forehead, hard, right in the middle, and said that was the toll, and went through with her diaries held to her chest, and didn't look back, and was crying, Solar could tell, from the back of her jester hat." }
          ], else: [
            { n: "Kuromi went through her door with both diaries held to her chest, and at the last second turned round and put the toll sign into Solar's hands. ONE COMPLIMENT. She said Solar could be the one to charge it now. She said it was a promotion. She said Solar had better be insufferable about it." }
          ] }
        ], else: [
          { n: "Kuromi went through her door backwards, so she could keep making faces at Solar the whole way, and the last thing Solar saw of her was the tongue." }
        ] }
      ] },
      { ifRank: { mercy: 1 }, then: [
        { ifRank: { mercy: 10 }, then: [
          { ifRomance: 'mercy', then: [
            { n: "Angela stopped at her door and took Solar's face in both hands and kissed her, quickly, against medical advice, and said heroes never die, Liebling, and then, softer, so nobody else would hear, that she would know where Solar was. Always. The feather would tell her." }
          ], else: [
            { n: "Mercy checked Solar's pulse at the wrist on her way past, two fingers, five seconds, out of habit, and pronounced it fast but steady, and said keep it that way, and said heroes never die, and went." }
          ] }
        ], else: [
          { n: "Mercy went with her coat on and her hair coming loose, straight to work, it looked like, the way she'd arrived at everything all year." }
        ] }
      ] },
      { ifRank: { haru: 1 }, then: [
        { ifRank: { haru: 10 }, then: [
          { ifRomance: 'haru', then: [
            { n: "Haru put a thermos into Solar's hands, Solar Roast, still hot, and kissed her, sweet and fast, and said two cups, two worlds, the same coffee, and went through a door that smelled of a café in Tokyo, wiping her eyes with the back of her glove." }
          ], else: [
            { n: "Haru pressed a thermos into Solar's hands, Solar Roast, still hot, and said properly, please, slowly, with patience, and went through a door that smelled of a café in Tokyo." }
          ] }
        ], else: [
          { n: "Haru went through a door that smelled of turned earth and coffee, and bowed in it, very properly, before it closed." }
        ] }
      ] },
      { ifRank: { sebastian: 1 }, then: [
        { ifRank: { sebastian: 10 }, then: [
          { ifRomance: 'sebastian', then: [
            { n: "Sebastian's door opened onto rain. He stood in it a second with his hood down, getting soaked, and then he came back, and kissed her under the awning of the station roof, and said he really, really liked the rain here, and went." }
          ], else: [
            { n: "Sebastian's door opened onto rain. He stood in it with his hands in his hoodie pocket and said I like the rain here, the way he'd said it in June, and this time he was looking at her when he said it, and then he went." }
          ] }
        ], else: [
          { n: "Sebastian's door opened onto rain. He put his hood up, and nodded at her once, and went, and she thought he was smiling." }
        ] }
      ] },
      { ifRank: { astarion: 1 }, then: [
        { ifRank: { astarion: 10 }, then: [
          { ifRomance: 'astarion', then: [
            { n: "Astarion kissed her at his door like he had all the time in the world, which for once he did, and pressed a photo strip into her hand. The fourth frame. The one where he'd stopped looking at the camera." },
            { s: 'astarion', f: 'blushing', t: "So you remember what my face does. I'll be looking at mine every night." }
          ], else: [
            { s: 'astarion', f: 'happy', t: "Darling. I'll have you know I'm taking all eleven strips. A gentleman never leaves his cheekbones behind." }
          ] }
        ], else: [
          { s: 'astarion', f: 'happy', t: "Well. It has been tremendously diverting. Do try not to be too dull without me." }
        ] }
      ] },
      { ifRank: { aphrodite: 1 }, then: [
        { ifRank: { aphrodite: 10 }, then: [
          { ifRomance: 'aphrodite', then: [
            { n: "Aphrodite kissed her, and every dead light in the station flickered pink, all at once, like the whole of Iwatodai had blushed, and she said every world, every war, little sun, and went through a door full of gold." }
          ], else: [
            { n: "Aphrodite blessed her, one last time, a hand on her forehead, at length. You will be loved, little sun. Not eventually. Already. And she went through a door full of gold." }
          ] }
        ], else: [
          { n: "Aphrodite went through a door full of gold, waving like someone leaving a party she had been the best thing about." }
        ] }
      ] },
      { ifRank: { cloud: 1 }, then: [
        { ifRank: { cloud: 10 }, then: [
          { ifRomance: 'cloud', then: [
            { n: "Cloud kissed her at his door, quickly, awkwardly, absolutely refusing to let that stop him, and said see you, Solar, like he was writing it down." }
          ], else: [
            { n: "Cloud stopped at his door and said see you, Solar, like he was writing it down. Then he said it again, to be sure." }
          ] }
        ], else: [
          { n: "Cloud lifted one hand at his door. It was a lot, from Cloud." }
        ] }
      ] },
      { ifRank: { noctis: 1 }, then: [
        { ifRank: { noctis: 10 }, then: [
          { ifRomance: 'noctis', then: [
            { n: "Noctis kissed her at a door that smelled of the sea, wide awake, and said whatever's coming, I'll remember this pier, and went to go do the thing, the crown thing, with his shoulders back." }
          ], else: [
            { n: "Noctis stood at a door that smelled of the sea and said next year, the even bigger one, wherever, we'll find a pier, and went to go do the thing, the crown thing, with his shoulders back." }
          ] }
        ], else: [
          { n: "Noctis went through a door that smelled of the sea, awake, with his shoulders back, which was the first time Solar had ever seen him walk anywhere like he meant to get there." }
        ] }
      ] },
      { ifRank: { judy: 1 }, then: [
        { ifRank: { judy: 10 }, then: [
          { ifRomance: 'judy', then: [
            { n: "Judy kissed her at a door full of neon and said that was the last frame, she was keeping it, she didn't care, and closed Solar's hands around nothing, both of hers over them, recording that too." }
          ], else: [
            { n: "Judy said she'd call the studio Sunburst, she'd decided, and didn't say why, and hugged Solar so hard her feet left the platform, and went through a door full of neon." }
          ] }
        ], else: [
          { n: "Judy went through a door full of neon with her hands in her pockets, and looked back once, and grinned." }
        ] }
      ] },
      { ifRank: { shadowheart: 1 }, then: [
        { ifRank: { shadowheart: 10 }, then: [
          { ifRomance: 'shadowheart', then: [
            { n: "Shadowheart rested her forehead against Solar's in the moonlight, the way she had in the snow at the shrine, and said sun and moon, it works, somehow, and went through a door of white flowers." }
          ], else: [
            { n: "Shadowheart said she would dance it every full moon, and think of Solar every single one, and went through a door of white flowers." }
          ] }
        ], else: [
          { n: "Shadowheart went through a door of white flowers, and the silver streak in her hair caught the moon, and then she was gone." }
        ] }
      ] },
      { ifRank: { kasumi: 1 }, then: [
        { ifRank: { kasumi: 10 }, then: [
          { ifRomance: 'kasumi', then: [
            { n: "Sumire made her say it one more time, at the door. Sumire. Then she kissed her, glasses fogging in the cold, both of them laughing about it, and went to compete under her own name." }
          ], else: [
            { n: "Sumire stopped at her door, and turned, and said her own name, clearly, so the platform would hear it. Then she went to compete under it." }
          ] }
        ], else: [
          { n: "Kasumi went through her door with her ribbon in her hand and her chin up, the way you'd walk out onto a mat." }
        ] }
      ] },
      { ifRank: { leon: 1 }, then: [
        { ifRank: { leon: 10 }, then: [
          { ifRomance: 'leon', then: [
            { n: "Leon kissed her slow and careful, the way he did everything that actually mattered, and said he'd never broken a promise to her, and he wasn't starting tonight, and went." }
          ], else: [
            { s: 'leon', f: 'happy', t: "Stay out of trouble, rookie. Kidding. Get into all of it." }
          ] }
        ], else: [
          { s: 'leon', f: 'neutral', t: "Take care of yourself, kid. I mean it." }
        ] }
      ] },
      { ifRank: { rohan: 1 }, then: [
        { ifRank: { rohan: 10 }, then: [
          { ifRomance: 'rohan', then: [
            { n: "Rohan, at his door, put two fingers to her forehead, very lightly, right where the pages opened, the way you'd touch a book you meant to come back to, and looked at her like a man checking a fact was still true." },
            { s: 'rohan', f: 'happy', t: "Still true. To be continued." }
          ], else: [
            { s: 'rohan', f: 'happy', t: "I'll draw you every year. When you're old and boring. I'll still find something." }
          ] }
        ], else: [
          { s: 'rohan', f: 'neutral', t: "Don't let anyone write you. That's all. That's the whole note." }
        ] }
      ] },
      { ifRank: { widowmaker: 1 }, then: [
        { n: "Widowmaker didn't use a door anyone else could see. She went up into the roof girders, and at the top she turned, a dark shape against the moon with a red scarf snapping, and raised her rifle once, in salute." },
        { ifRank: { widowmaker: 10 }, then: [
          { s: 'widowmaker', f: 'happy', t: "Au revoir, princesse. Until I see you again." }
        ] }
      ] },
      { ifRank: { jungwon: 1 }, then: [
        { ifRank: { jungwon: 10 }, then: [
          { ifRomance: 'jungwon', then: [
            { n: "Jungwon rested his forehead against hers at the council room door, eyes closed, and stayed, and then said twelve-thirty, in pen, and went to hear the count." }
          ], else: [
            { n: "Jungwon shook her hand at the council room door, exactly twice, with the poster under his arm, and said you look like you, write it down, and went to hear the count." }
          ] }
        ], else: [
          { n: "Jungwon bowed at the council room door, the poster rolled under his arm, and went home to hear the count." }
        ] }
      ] },
      { n: "And the names went home. Fuuka's names, every one, through their own doors, the woman with the birds and the man with the slow watch, waving to whoever had found them, and the old man in the rain cape hugged Junpei so hard his cap fell off, and Junpei didn't pick it up for a long time after the door had closed." },
      { ifRank: { ann: 10 }, else: [
        { ifRank: { ann: 1 }, then: [
          { n: "Ann went through a door that smelled like crepes and somebody's cat, laughing, yelling back that she was late, she was always late, but she was GOING, Sunflare, and to tell the boxing guy she said hi." }
        ] }
      ], then: [] },
      { n: "Until there was only one track left. The one along the ground, out of the tunnel, that went somewhere." },
      { n: "And a whistle came down it. Not from the sky. From far away along the line, small at first, a long rising call, the one for arriving, and Wren, standing at the edge of the platform with her face still wet, put both hands over her mouth." },
      { n: "The train came out of the tunnel the way trains are supposed to. On the ground. Singing. It was old and green and gold, with brass at every window and steam going up off it into the cold, signal lamps lit along its side, and it smelled of rain on iron, and it was the loudest thing Solar had ever heard in the hour, and nothing about it was sorry." },
      { n: "Wren looked down at her ticket. Solar looked over her shoulder." },
      { n: "The looping script was back. Dark and certain, right through the middle of the cream card, with the small neat hole punched in it where it had always been. Solar couldn't read a word of it. Wren could. Her lips moved." },
      { s: 'wren', f: 'neutral', t: "The coast. It's the coast. It's always been the coast." },
      { s: 'wren', f: 'sad', t: "My grandmother said nobody ever comes back from it. I'm so frightened, Solar. I'm frightened right down to my boots." },
      { s: 'wren', f: 'happy', t: "But I've been to the coast. Haven't I. You took me. It wasn't quiet at all." },
      { choose: [
        { t: "It wasn't quiet at all.", notes: 0, then: [
          { s: 'wren', f: 'happy', t: "No. It was very loud. There were gulls. They'd been personally wronged." }
        ] },
        { t: "Write to me. Somehow.", notes: 0, then: [
          { s: 'wren', f: 'happy', t: "I haven't got any stamps. I'll find some. I'll put one on a gull." }
        ] },
        { t: "(Fix her collar.)", notes: 0, then: [
          { n: "Solar turned the collar of the porter's coat down where it had folded under, so the badge sat straight, the way it was supposed to, and Wren stood very still and let her do it like a kid on the first day of school." }
        ] }
      ] },
      { s: 'wren', f: 'neutral', t: "Thank you. For the bench. For coming back to it. For the whole year." },
      { s: 'wren', f: 'serious', t: "You'll wave?" },
      { s: 'solar', t: "So hard." },
      { s: 'wren', f: 'happy', t: "You'll be mortified." },
      { n: "She got on. She didn't fold the coat in her lap this time. She kept it on, buttoned to the throat, and sat in the window seat facing forward, and pressed both hands flat to the glass, shaking, and looked out at the platform, at all of them, at Solar, the way you'd look at a place you had lived in and were going to miss." },
      { n: "The whistle went again. Short, twice. The one for leaving." },
      { n: "The train moved. Slowly, then less slowly, along the ground, toward the tunnel and the dark and the coast past it, the way trains are supposed to, and Solar ran alongside it down the platform as far as the yellow paint went and waved. Waved with her whole arm, and then both arms, like an idiot, like a kid, until her shoulder burned and her arm hurt, which was a thing she'd been told she'd never have to do and had wanted to do more than anything all year." },
      { n: "In the window Wren was waving back so hard her whole body was in it, laughing, crying, mortified." },
      { n: "And then, from inside the tunnel, far down the line, getting smaller, one last whistle. The long low one. The one for when the line's clear all the way to the next valley." },
      { n: "Solar stood at the end of the platform with her arm still up until she couldn't hear it anymore. Then for a while after that." },
      { n: "The lights came on. The vending machines woke up humming. The departures board blinked back to life and told her, politely, that the next train wouldn't be for five hours, and the doors were gone, and the table was gone, and the bench under the timetable was a bench, empty, and the hour was over." },
      { n: "Mitsuru came and stood beside her and didn't say anything, and took off her own coat and put it around Solar's shoulders, the way she had in November, and only then did Solar notice she was shaking. She'd been shaking for an hour. She'd thought it was the cold." },
      { ifRank: { haechan: 1 }, then: [
        { n: "Haechan was on her other side. He hadn't gone anywhere. He hadn't had anywhere to go. He took her hand again, the waving one, and held it in his coat pocket all the way home, and didn't say anything either, and it was the right thing." }
      ] },
      { n: "They walked home through the ordinary night, all of them, slowly, the way you walk home from a funeral or a wedding, and nobody told the story of what had happened, not even Junpei. There'd be time. It was the one thing, Solar thought, they finally had." }
    ] },

    { id: 'a4-the-first-morning', act: '4', date: '1/31', unlock: { seen: ['a4-the-line-is-clear'] }, ending: true, title: 'the first morning', place: 'Iwatodai Dorm · Kitchen', music: 'tender', scene: [
      { n: "She woke at eight with the sun on her face, which had not happened since the summer, and lay there for a long time not knowing why the room looked different, and then knew." },
      { n: "It was very quiet. Not the dorm being quiet for reasons of its own. Just a Sunday. A car somewhere. Somebody's television through the floor. The radiator, clanking, with opinions." },
      { n: "Down the hall Wren's door was open. The bed was made, the corners folded tight, the proper way. The chair by the bed was empty. There was no coat on it. There was no ticket on the nightstand. Junpei's cat keyring was gone, too, and Solar stood in the doorway and hoped, with her whole body, that there was a door at the coast it fit." },
      { n: "Downstairs, the kitchen was full of the smell of rice." },
      { n: "The rice cooker had been on all night. Its little orange light was glowing on the counter in the sun, keeping something warm, the way in October it had kept nothing warm all day. There was a note under it, on a page torn from a small new diary, in a handwriting none of them had ever seen before, neat, a little old-fashioned, the loops of the letters very round." },
      { n: "I made the rice. Somebody be honest. W." },
      { n: "They ate it. All of them, at the long table, still in their pajamas, nobody saying much. It was a little dry, and a little burned at the bottom, and much too salty, and it was the best rice anyone had ever made." },
      { s: 'junpei', f: 'sad', t: "...It's a crime." },
      { s: 'junpei', f: 'sad', t: "I love it. I'd do time for this rice." },
      { n: "He was crying into it a little. Yukari passed him a napkin without looking at him, and then took one for herself, and Akihiko got up to make tea so nobody would see his face, and Mitsuru sat at the head of the table and ate every grain in her bowl, slowly, very properly, and asked for seconds, which she had never once done in that kitchen." },
      { ifRank: { rio: 1 }, then: [
        { phone: [
          { from: 'rio', t: 'u up' },
          { from: 'rio', t: 'sand court is literally frozen. come run anyway' },
          { from: 'rio', t: 'its sunday. nothing happens on sunday. its the best day' }
        ], contact: 'Rio · 8:42 AM', handle: 'rio', me: 'solar' },
        { n: "Solar read it twice and laughed out loud at the kitchen table for no reason anyone could see, and texted back that she'd be there at ten." }
      ] },
      femcMetAny(['kuromi', 'kiriko', 'mercy', 'haru', 'sebastian', 'astarion', 'aphrodite', 'cloud', 'noctis', 'judy', 'shadowheart', 'kasumi', 'leon', 'rohan', 'widowmaker', 'jungwon'], [
        { n: "The dorm was full of what they'd left. That was the strange thing. Not gone. Left." },
        { ifRank: { kuromi: 1 }, then: [{ n: "A skull sticker on the lounge door, at exactly the height of Kuromi's forehead, that nobody was ever going to peel off." }] },
        { ifRank: { cloud: 1 }, then: [{ n: "A jar on the shelf by the front door full of money from a country that didn't exist." }] },
        { ifRank: { shadowheart: 1 }, then: [{ n: "Paper lanterns from the shrine still hanging over the lounge window, swinging a little when the door opened." }] },
        { ifRank: { noctis: 1 }, then: [{ n: "A dent in the couch cushion the exact shape of someone asleep." }] },
        { ifRank: { rohan: 1 }, then: [{ n: "On the lounge wall, pinned up where Mitsuru would see it every morning, a long folded drawing of a table that went on forever, with everybody at it." }] },
        { ifRank: { haru: 1 }, then: [{ n: "A gray apron on the hook by the stove." }] },
        { n: "Solar walked through all of it with her tea, slowly, the way you'd walk through a house you used to live in, and didn't move anything, and didn't need to." }
      ]),
      { ifRank: { haechan: 1 }, then: [
        { place: 'Iwatodai Dorm · 2F Hallway', time: 'Morning' },
        { n: "Across the hall from hers, his door was open a hand's width. She looked in." },
        { n: "He was asleep. Actually asleep, on the floor with his back against the bed and his headphones around his neck and his mouth a little open, the morning sun across his face, sleeping like somebody who had never once been told he didn't sleep. She'd never seen it. She didn't think anyone had, in any world." },
        { n: "She went back to her room and opened the handbook to the bell schedule, and the page was there, the one the thing had dropped into her hand in November with a gray smudge where a face should be." },
        { n: "It wasn't smudged anymore." },
        { n: "It was him. Drawn plainly, in pencil, not well, by somebody who had pressed their thumb to that same place over and over trying to keep him from fading, and had kept him, in the end. The earrings. The mouth that didn't give permission to smile. And underneath, very small, in a handwriting she knew better than her own and had never seen before, two words." },
        { n: "Found you." },
        { ifRank: { haechan: 9 }, then: [
          { n: "She sat on the floor of his doorway, on the line, the way she had in November, and waited for him to wake up. It took two hours. She didn't mind at all." }
        ], else: [
          { n: "She put it back between the school rules and the bell schedule, and went down the hall, and sat in his doorway on the line until he woke up, and didn't tell him why." }
        ] }
      ], else: [
        { n: "Upstairs, she opened her handbook to the bell schedule. The page was there, the one the thing had dropped into her hand in November, blank except for a gray smudge where a face should be, worn soft, as if somebody kept pressing a thumb to it." },
        { n: "It was still smudged. She looked at it a long time. Then she put it back between the school rules and the bell schedule, flat, the way you'd press a flower. Some stories took longer. Somewhere, in some laundry room, on some rooftop, at some party she didn't want to be at, somebody was still looking. She found she didn't mind waiting. She'd gotten good at it this year." }
      ] },

      { place: 'The Velvet Room', time: 'Afternoon', music: 'velvet' },
      { n: "She fell asleep in the afternoon on top of her covers with the sun on her back, and woke in blue." },
      { n: "Elizabeth was reading. Not with the book open across her knees the way she used to, sitting up at night. She was reading the way you read a book you've already finished, for the pleasure of going back, turning the pages slowly with one gloved finger, smiling at things." },
      { s: 'elizabeth', f: 'happy', t: "Ah. Good afternoon. Come and look. I have nothing but good news, which I find I do not know the correct order for." },
      { n: "It was Wren's page." },
      { n: "Whole. Dark and certain, every line of it. The coat and the bench and the line of track. The sea, and a girl in the shallows holding her skirt up in both fists. A small figure with headphones on the bench beside her. And the edges of the page sealed flat, like a letter, the door of it properly closed, and when Solar touched it, it was warm, and it shone." },
      { n: "At the bottom, where in September there had been nothing at all, there was a last line." },
      { n: "And at the end of the line was the sea, and it was not quiet at all." },
      { s: 'elizabeth', f: 'neutral', t: "It did not say that before. I read it in April. It said something about water, and nowhere to go after, and I did not like it very much." },
      { s: 'elizabeth', f: 'happy', t: "It changed. They do, it turns out, when someone holds them long enough. I did not know that. I have kept doors for a very long time and I did not know that." },
      { choose: [
        { t: "Is she all right?", notes: 0, then: [
          { s: 'elizabeth', f: 'neutral', t: "She is frightened. She is cold. She is at the coast." },
          { s: 'elizabeth', f: 'happy', t: "She is entirely all right." }
        ] },
        { t: "(Touch the page again.)", notes: 0, then: [
          { n: "Warm. Not paper-warm. Warm like a hand someone has been holding for a long time, and has only just let go of." }
        ] }
      ] },
      { n: "Elizabeth turned to the very back of the book. The endpaper was there, cream, smooth, with nothing written on it. When Solar put her palm flat on it, it was warm too, and very faintly, so faintly she might have imagined it, it shifted under her hand, like something settling down to sleep." },
      { s: 'elizabeth', f: 'neutral', t: "I shall write the next guests there. Their names, when they come. Who held them. It seemed right that it should be the one to keep them." },
      { s: 'elizabeth', f: 'neutral', t: "And I have put a ribbon in today. Here. You see?" },
      { n: "A thin blue ribbon, the kind sewn into the spine of an old book to keep your place, lying across the page for the thirty-first of January." },
      { s: 'elizabeth', f: 'happy', t: "So that you can come back to it. Whenever you like. Open the book here, and they will all be in it, every one, as they were. That is what books are for. I only found out this year." },
      { s: 'elizabeth', f: 'serious', t: "Tonight you have somewhere to be. You know where. I will not tell you to be careful. You would not listen, and you have very little practice." },
      { s: 'elizabeth', f: 'neutral', t: "I will tell you to take all of them with you. Every one. You know how now." },
      { n: "She closed the book over her finger, keeping the place, and looked at Solar for a long time with those golden eyes, and for once she didn't look like a woman holding a door, or a girl holding a book. She looked like someone who had finished a long story, and liked how it ended, and was sad it was over, and would read it again." },

      { place: 'Iwatodai Dorm · Front Door', time: 'Evening', music: 'tender' },
      { n: "At eleven that night they went out together, S.E.E.S., all of them, into the cold, for the last operation. Nobody said what it was. Nobody had to. Junpei was pretending to be calm, loudly. Akihiko had taped his knuckles twice. Mitsuru held the front door open for everyone, and stood there a second too long, looking back into the lounge with all its lights on, the way you'd look at a place you meant to come back to." },
      { n: "Solar went last. She stopped in the hall and put her hands in her coat pockets, and they were full." },
      { n: "She had very ordinary hands. She had brought every one she'd ever held." },
      { n: "She went out into the night with the others, and down the steps, and somewhere far down the line, past the station, past the tunnel, out toward wherever it went, a train sighed. For once it didn't sound sorry about anything." }
    ] },

    /* ── Secret ending (after the epilogue): Haechan at MAX on the romance route. The hour is closing and he has no door,
       so he offers to walk her home, and she chooses which home: Runners (Syracuse), strangers (Incheon), or here, for now.
       Each branch ends on its own `stamp` line (engine) and an ENDING card. Plot notes in DO-NOT-OPEN-femc-story.md. ── */
    { id: 'a4-across', act: '4', date: '1/31', secret: true, label: 'Secret Ending', unlock: { seen: ['a4-the-first-morning'], links: { haechan: 10 }, romance: ['haechan'] }, title: 'up to you', place: 'Iwatodai Dorm · Laundry Room', music: 'tender', scene: [
      { place: 'Iwatodai Dorm · Laundry Room', time: 'The last of the hour', music: 'tender' },
      { n: "Afterward, they came home the long way, all of them, through a city that was still green for a little while longer, and nobody said what had happened out there, at the top of everything. Nobody had to. Not even Junpei tried. They went up the stairs one at a time, and the doors closed one at a time along the halls, softly, the way doors close in a house where everyone has decided to be very kind to each other for as long as they can manage it." },
      { n: "Solar didn't go up. Of course she didn't." },
      { n: "She was still in the black hoodie, his, hers, the sleeves down past her knuckles; she'd worn it under her coat to the last operation and hadn't taken it off. She went down the hall in her socks, the way she had in November, past the dark kitchen and the rice cooker with its little orange light out, because nothing was on, not in the hour. The laundry room door was half open. The light inside wasn't flickering. For once in its life, it couldn't." },
      { n: "He was sitting on the dryer." },
      { n: "The same one. Her last load was still in it, stopped mid-turn when the hour came, a sleeve pressed flat to the round window like a hand. He had his headphones around his neck and a coat on she'd never seen, black, buttoned all the way to the throat, the way the others had all dressed on Saturday for wherever they were going, and he looked up when she pushed the door open exactly the way he had the very first night, like he'd heard his name." },
      { s: 'haechan', f: 'neutral', t: "...There you are." },
      { n: "Flat, almost. The same three words, and the floor moving under them the same way, like a train going by underneath." },
      { choose: [
        { t: "You're dressed to go somewhere.", notes: 0, then: [
          { s: 'haechan', f: 'neutral', t: "Yeah." },
          { s: 'haechan', f: 'serious', t: "Everybody else got a door. Figured I should at least wear a coat." }
        ] },
        { t: "(Climb up on the other dryer.)", notes: 0, then: [
          { n: "She climbed up on the other dryer. It was cold through her jeans, the way the other one always was. He watched her do it and didn't say anything, and the corner of his mouth moved, the small move he never gave permission to." }
        ] },
        { t: "I thought you'd finally be asleep.", notes: 0, then: [
          { s: 'haechan', f: 'neutral', t: "Did that already. This morning. Once." },
          { s: 'haechan', f: 'happy', t: "Didn't like it. Too quiet. Couldn't hear you not sleeping." }
        ] }
      ] },
      { s: 'haechan', f: 'serious', t: "Hour's closing. Can you feel it?" },
      { n: "She could. She'd felt it the whole way home and thought it was her own body coming down off the night, the shaking finally running out, but it wasn't. It was the hour. The green was going out of the window over the sink the way water goes out of a harbor, slowly and then not slowly at all, and the moon sat in it smaller than it had been all year, as if it were already a long way off." },
      { s: 'haechan', f: 'neutral', t: "Elizabeth says every door shuts with it. Everyone else had one." },
      { s: 'haechan', f: 'neutral', t: "I walked. So I'm walking." },
      { choose: [
        { t: "Walking where?", notes: 0, then: [
          { s: 'haechan', f: 'sad', t: "Not back. There's no back. I didn't come from anywhere, really. I came from looking." },
          { s: 'haechan', f: 'serious', t: "So wherever the looking ends up." }
        ] },
        { t: "Then I'm coming with you.", notes: 0, then: [
          { s: 'haechan', f: 'surprised', t: "..." },
          { s: 'haechan', f: 'flustered', t: "Let me get to the part where I ask. I practiced it. On the dryer." }
        ] },
        { t: "(Hold on to the edge of the dryer.)", notes: 0, then: [
          { n: "She held on to the edge of the dryer with both hands, hard, the way you hold a railing on a ferry when the deck starts to move, and he watched her do it, and didn't say anything about it, and his own hands didn't move off his knees." }
        ] }
      ] },
      { s: 'haechan', f: 'serious', t: "You're not from here either, Solar." },
      { n: "Her hands went cold first. Then her face. She opened her mouth to tell him of course she was, she had a room upstairs and a handbook that didn't close and a seat at the table, and went looking for something to say it with, for the morning she'd arrived. The train. The station. The weather. Anything." },
      { n: "There was nothing there. She could remember a bench, ten days later, and a girl in a coat too big for her. She could not remember the first of those ten days at all, not one thing, as if somebody had opened the book of her somewhere in the middle and started reading from there." },
      { n: "Oh, Wren had said, on that bench, in April, looking at her in the green. You too?" },
      { s: 'haechan', f: 'neutral', t: "The song. You had it on repeat since summer. Before you ever met me." },
      { s: 'haechan', f: 'serious', t: "Nobody here wrote it. I did. Somewhere else. Songs don't go anywhere they haven't been." },
      { s: 'haechan', f: 'sad', t: "It went to you. So you've been there." },
      { n: "He reached over without looking and tapped the round window of the dryer under him, twice, flat, the way he knocked on doors. Then he tapped the one under her." },
      { n: "Her shirts weren't in the glass anymore. Behind the window of his, where the drum should have been, snow was coming down on a street of old brick under a lamppost that flickered more than it ought to, and somewhere past it, a floor down and a long way off, there was bass, and a staircase with too many people on it." },
      { n: "Behind hers there was a harbor with the water gone out of it. Gray mud all the way to the dark, sodium lights, the long neck of a crane, and up on a hill above a street of red lanterns, a house behind a high wall, with one small window lit at the top of the back stairs." },
      { n: "She'd seen them both before. In November, on the platform, in the pages a thing on a bench had held up one at a time as reasons to sit down and never choose. He was holding them up as doors." },
      { n: "She knew both of them the way you know a song before you know the words. She knew one of them the way you know your own front step in the dark." },
      { s: 'solar', t: "You know which one." },
      { s: 'haechan', f: 'neutral', t: "Yeah. Since the first night. You stopped on the line in that doorway like you'd stopped there before." },
      { s: 'solar', t: "Then tell me." },
      { s: 'haechan', f: 'serious', t: "No." },
      { n: "He said it flat, and kindly, and absolutely, like a door he was holding open and refusing to walk her through." },
      { s: 'haechan', f: 'serious', t: "Everybody in every one of them decides things for you. Your father. Your brother. Some man in a suit. Me, sometimes. I'm bad for it." },
      { s: 'haechan', f: 'neutral', t: "Not here. Not this one." },
      { s: 'haechan', f: 'neutral', t: "I can take you home. That's the offer. Or I go by myself and you stay, and that's allowed. That's a whole real answer." },
      { s: 'haechan', f: 'happy', t: "Up to you, princess." },
      { n: "Princess. On purpose. The way you'd put a key in somebody's hand and not look at them while you did it." },
      { choose: [
        /* ── Runners: Syracuse, a cold morning. Kept undated and plot-free on purpose (Runners canon stands at Ch 66, Nov 8). ── */
        { t: "(The window with the snow.)", notes: 0, then: [
          { s: 'haechan', f: 'neutral', t: "...Yeah." },
          { n: "The corner of his mouth went. He didn't look surprised. He looked like somebody who'd put money on a thing a long time ago and had just been told, quietly, that he'd won." },
          { s: 'haechan', f: 'happy', t: "Figured. You always leave the party early." },
          { n: "She wrote a note first. She had to. She found a pen in the kitchen drawer by the last of the green and tore a blank page out of the back of her handbook, past the bell schedule, and wrote it standing at the counter, and put it under the rice cooker, where somebody would find it in the morning, the way somebody had taught her to." },
          { n: "Gone home. Held the whole way. Somebody feed Koromaru. S." },
          { n: "He put one side of his headphones over her ear and kept the other, the way he had the night she first sat in his doorway, and pressed play, and it was the song, the finished one. Then he took her hand, his fingers cold and certain, and opened the laundry room door." },
          { n: "The hall on the other side wasn't the one she'd come down. It went on longer than the dorm did. The green went out of it a door at a time, the way lights go out along an office building at night, and the cold changed under her socks, the wet salt cold of the bay going dry and sharp and inland, the kind that makes snow squeak, and the air smelled of radiator dust and, somewhere, faintly, vanilla. The bass got closer. Then it was right under her feet." },
          { n: "He stopped at a door that had nothing on it at all." },
          { s: 'haechan', f: 'neutral', t: "This is me. I come in a different way, over there." },
          { s: 'haechan', f: 'serious', t: "Some party. Too many people on the stairs. Somebody crying in a bathroom." },
          { s: 'haechan', f: 'happy', t: "You'll leave early. I'll notice. That's how it goes." },
          { choose: [
            { t: "Find me fast.", notes: 0, then: [
              { s: 'haechan', f: 'neutral', t: "Don't have to try. I just do. It's annoying." }
            ] },
            { t: "Donghyuck.", notes: 0, then: [
              { s: 'haechan', f: 'surprised', t: "..." },
              { s: 'haechan', f: 'flustered', t: "Say that over there. Then I'll know it's you." }
            ] },
            { t: "(Kiss him.)", notes: 0, then: [
              { n: "She kissed him, in the doorway, on the line. His mouth was cold. He made the small sound he always made, like something being set down after it had been carried a long way, and then he kissed her back like he fully meant to pick it up again on the other side." }
            ] }
          ] },
          { n: "He let go of her hand. Not all at once. One finger at a time, the way you'd set down something you were coming back for. The song went on in her ear after he'd taken the other side away, and went on, and she walked into it." },

          { place: 'Syracuse · Alpha Phi House · Her Room', time: 'Morning', music: 'sun' },
          { n: "She woke to a thin line of light through the curtains and a radiator ticking like it was counting something, and for one long second she didn't know which ceiling it was." },
          { n: "Then she did, the way you do, and the other one went, the way a dream goes before breakfast gets to it. A green moon. A girl on a bench. A dryer. She held on to the edges of it and it went anyway, slowly, the way water goes out." },
          { n: "It was cold. Not wet cold. Syracuse cold, dry and enormous, coming straight through the old window frame, and there was snow on the sill outside the glass, a clean inch of it, and the quad past it was white and blue and nobody had walked on it yet. Down the hall somebody's hairdryer was going, and somebody else was yelling at it to stop, and it was Hyein, and she knew that without having to think about it, which was its own kind of strange." },
          { n: "Her hand went looking for a sleeve that came down past her knuckles. It found her own pajamas. She lay there and looked at her hand for a while." },
          { n: "On the desk her monitor had gone to sleep. She nudged the mouse on her way past and it woke on the hero select screen, where she'd left it, a fox-masked girl idling with her little bells and a small gold fox curled at her shoulder, and something rang at the very back of Solar's head, small and clear, a sound from the steps of a shrine in a city that wasn't on any map she owned." },
          { n: "On the nightstand there was a can of Monster Pink Punch, opened, half gone, flat. Her mind supplied, helpfully, a peach drink, bottom row, the one where the machine always jams. Then it didn't, and it was just a can." },
          { n: "Her phone was face down on the blanket. Two threads." },
          { phone: [
            { from: '@hyein', t: "ok update on other solar" },
            { from: '@hyein', t: "her number is gone. like NOT IN SERVICE gone" },
            { from: '@hanni', t: "i tried too!! it doesnt even ring" },
            { from: '@hanni', t: "do u think shes ok???" },
            { from: 'solar', t: "she's ok" },
            { from: '@hyein', t: "how would u know" }
          ], contact: 'hanni, hyein · 9:02 AM', me: '@solar' },
          { n: "She didn't answer that. She didn't know how she knew. She knew it the way your foot knows a step is there in the dark, before you've thought about it." },
          { phone: [
            { from: 'haechan', t: "you up" },
            { from: 'haechan', t: "don't lie" },
            { from: 'solar', t: "debatable" },
            { from: 'haechan', t: "you're smiling at your phone right now" },
            { from: 'haechan', t: "weird dream last night" },
            { from: 'haechan', t: "you were folding laundry. badly" },
            { from: 'solar', t: "i fold perfectly" },
            { from: 'haechan', t: "sure, princess" },
            { from: 'haechan', t: "its 19 degrees. wear the jacket" }
          ], contact: 'haechanah · 9:04 AM', handle: 'haechanah', me: 'sollee' },
          { n: "She was, in fact, smiling at her phone. She put it face down again, which didn't help." },
          { n: "The jacket was at the back of her closet, where she'd put it so nobody would ask, behind the dresses with the tags still on. She put it on over her pajamas. It came down past her hands. It smelled like vanilla and cold air and the both of them, and somebody had told her once that it fit her better, and she could hear him say it in two places at once, at a station in the rain and at the edge of a tree line in the dark, and couldn't have told anyone which had come first." },
          { n: "She stood at the window with the snow coming down over the quad and hummed it under her breath, start to finish. The song. The finished one, the version nobody in this world had finished yet, with a long quiet part in the middle like a room at three in the morning, and one held note at the end." },
          { n: "She knew exactly how it ended." },
          { stamp: 'where-it-begins' },
          { n: "ENDING · where it begins" }
        ] },

        /* ── strangers: the Lee house above Chinatown, before light, low tide. Undated and plot-free (the book stands at Ch 64). ── */
        { t: "(The window with the tide out.)", notes: 0, then: [
          { s: 'haechan', f: 'neutral', t: "...Yeah." },
          { n: "His jaw went, once. That was all. He didn't look surprised. He looked like somebody who had known the answer to a question for a very long time, and had been hoping, a little, against it, and was glad anyway." },
          { s: 'haechan', f: 'neutral', t: "Figured. You count things. You counted the dryers the first night." },
          { s: 'haechan', f: 'happy', t: "There's two. In case you were wondering." },
          { s: 'haechan', f: 'serious', t: "It's not nice there." },
          { s: 'haechan', f: 'sad', t: "I'm not nice there." },
          { choose: [
            { t: "I know.", notes: 0, then: [
              { n: "She did. She didn't know how. She knew it the way you know a stove is hot before you've touched it, and she wanted to go anyway, which she supposed was the whole problem with her. In every universe, apparently." }
            ] },
            { t: "Neither am I.", notes: 0, then: [
              { s: 'haechan', f: 'happy', t: "...Yeah. That's the part I remember best." }
            ] }
          ] },
          { n: "She wrote a note first. She had to. She found a pen in the kitchen drawer by the last of the green and tore a blank page out of the back of her handbook, past the bell schedule, and wrote it standing at the counter, and put it under the rice cooker, where somebody would find it in the morning, the way somebody had taught her to." },
          { n: "Gone home. Held the whole way. Somebody feed Koromaru. S." },
          { n: "He put one side of his headphones over her ear and kept the other, the way he had the night she first sat in his doorway, and pressed play, and it was the song, the finished one. Then he took her hand, his fingers cold and certain, and opened the laundry room door." },
          { n: "The hall on the other side wasn't the one she'd come down. It went on longer than the dorm did, and the green went out of it a door at a time, and the cold changed under her socks, wet and black and salt, coming up through the floor, and the floor tilted, a little, like a deck. Somewhere ahead a ship's horn went, long and low, in a channel. Diesel. Iron. And close by, from his coat, from nowhere, cinnamon." },
          { n: "He stopped at a door with frost on the inside of the glass." },
          { s: 'haechan', f: 'neutral', t: "This is me. I come in a different way, over there. Off a boat. At dawn." },
          { s: 'haechan', f: 'sad', t: "Somebody gave me my name, that morning. I remember who, now." },
          { s: 'haechan', f: 'serious', t: "Don't be nice to me over there. I won't know what to do with it." },
          { choose: [
            { t: "I'll hate you the whole time.", notes: 0, then: [
              { s: 'haechan', f: 'happy', t: "Good. Great." }
            ] },
            { t: "(Kiss him.)", notes: 0, then: [
              { n: "She kissed him at the door, quickly, hard, like somebody getting a thing done before anyone could stop her, and he held the back of her neck for exactly one second, the way he had at a crosswalk once, and let go first." }
            ] }
          ] },
          { n: "He let go of her hand. Not all at once. One finger at a time, the way you'd set down something you were coming back for. The song went on in her ear after he'd taken the other side away, and the tide went on going out under it, and she walked into it." },

          { place: 'Incheon · The Lee House · Upstairs', time: 'Before light', music: 'night' },
          { n: "The tide was out. She knew it before she opened her eyes. She always knew. She couldn't sleep at low tide, she never had been able to, and she knew the tables by heart without remembering ever having learned them, the way you know your own phone number." },
          { n: "For one long second she didn't know which ceiling it was. Then she did, and the other one went, a green moon, a girl on a bench, a dryer, going out of her like water out of a harbor, slowly and then not slowly at all." },
          { n: "Wind off the sea at the window, salt and diesel, the glass ticking in its frame. A ship's horn in the channel. Downstairs, faintly, barley tea, because there was always barley tea on the stove in this house, at every hour, as if someone in it might need some." },
          { n: "Her hair was down. She turned the ring on her right hand, jade, cold, and counted nothing in particular, just to have something to count. Her thumb went to her left palm in the dark and found the thin white line across it, from a fish knife, at eleven, the way you find a light switch in your own house." },
          { n: "Her hands weren't ordinary here. She found she didn't mind." },
          { n: "She got up. Pink socks, gray rabbits. The hall was cold. Across it, at the top of the back stairs, the old sewing room's door was open, the way it had to be at night, and the room inside was dark except for a little light that wasn't a lamp." },
          { n: "He was on the floor with his back against the bed, in the black jacket, awake, with a battered Discman in his lap, the one with the cracked lid that he'd had since he was fifteen and never used and couldn't throw away. One earphone in. The other hanging loose. Something was coming out of it, small and tinny, into the dark." },
          { n: "Not trot. Not anything the radio played. A beat and a melody and a lot of space, like the outline of a room at three in the morning." },
          { s: 'haechan', f: 'neutral', t: "Agasshi." },
          { s: 'haechan', f: 'neutral', t: "Tide's out. Can't sleep?" },
          { n: "He tipped the Discman so she could see. The little window in the lid was empty." },
          { s: 'haechan', f: 'serious', t: "There's no disc in it. Woke up and it was playing." },
          { s: 'haechan', f: 'neutral', t: "Don't ask me. I don't know the words." },
          { n: "She did. She didn't know how. She stood in his doorway with her arms folded over her chest and hummed the next part under her breath, before it came, and it came, exactly the way she'd hummed it, and he went very still, which in this house meant he was afraid of something." },
          { choose: [
            { t: "I hate you.", notes: 0, then: [
              { s: 'haechan', f: 'neutral', t: "I know, agasshi." },
              { s: 'haechan', f: 'happy', t: "I'm right across the hall. I'll hear you not sleeping." }
            ] },
            { t: "(Sit down in the doorway. On the line.)", notes: 0, then: [
              { n: "She sat down in his doorway, on the line, where the cold of the hall met the cold of the room, and didn't go in, and didn't go away. He watched her do it. Then he took the earphone out and held it out to her across the gap, without a word, the way you'd hand somebody a coat they'd forgotten." }
            ] }
          ] },
          { s: 'haechan', f: 'sad', t: "...Solar." },
          { n: "Just that. Her name, in his mouth, which he almost never used, which was the tell. She heard him hear himself say it." },
          { n: "Outside, the sea was a long way out and already coming back, the way it always did here, giving up whatever it had kept. The song went round to the start again. She stayed where she was, on the line, in the cold, and didn't hate him nearly enough." },
          { stamp: 'low-tide' },
          { n: "ENDING · low tide" }
        ] },

        /* ── Stay: the hour closes, he may or may not be here in the morning. The post-game ribbon on 1/31 still holds. ── */
        { t: "Neither. Here. For now.", notes: 0, then: [
          { n: "It came out quiet. She looked at the two round windows, the snow and the tide, and then at the room around them. The folding table. The light that couldn't flicker. The drain in the floor where, she was nearly sure, every missing sock in the history of the dorm had gone. Upstairs, a whole house asleep and kind, with her bowl still in the rack from the morning." },
          { n: "Not yet. She'd said it to the thing on the bench, on Saturday, and meant it one way. She meant it another way now. She was surprised to find that both were true." },
          { s: 'haechan', f: 'neutral', t: "Okay." },
          { n: "He didn't argue. He didn't look surprised, either, which she would think about later, for years." },
          { s: 'haechan', f: 'sad', t: "Hour's closing. I don't know if I get to stay when it does. Nobody knows. Elizabeth doesn't." },
          { s: 'haechan', f: 'neutral', t: "So if I'm not here in the morning." },
          { s: 'haechan', f: 'serious', t: "Then I'll find you again." },
          { s: 'haechan', f: 'happy', t: "I always do. Some laundry room. It's always a laundry room, somehow." },
          { choose: [
            { t: "Stay till it closes.", notes: 0, then: [
              { s: 'haechan', f: 'neutral', t: "Yeah. Obviously. Move over." },
              { n: "He slid off his dryer and got up on hers, which was barely big enough for one person, and they sat on the cold machine with their shoulders pressed together and their knees bumping, the way they had on a hundred nights that winter, in this room, at this hour, with nothing in the drum." }
            ] },
            { t: "(Put your head on his shoulder.)", notes: 0, then: [
              { n: "She leaned across the gap and put her head on his shoulder. He went still for the first second, the way he always did, like his body had to check it was allowed. Then he tipped his cheek down onto her hair and stayed there." }
            ] },
            { t: "Say it again.", notes: 0, then: [
              { s: 'haechan', f: 'happy', t: "...Solar." },
              { n: "That one. Here, at least. In this universe. For now." }
            ] }
          ] },
          { n: "The green went out of the window over the sink. Slowly, and then not slowly at all. The last of it slid off the edge of the moon like a sheet coming off a bed, and the moon was just the moon, white and ordinary and very far away, and somewhere down the line, past the station, past the tunnel, the hour shut for good, the way a door shuts on a house where everyone is finally asleep." },
          { n: "The light overhead came on, and flickered, the sick terrible flicker she'd have known anywhere. The dryer under them shuddered and woke and went on turning from exactly where it had stopped, warm, with her shirts in it." },
          { n: "She fell asleep sitting up. She didn't mean to. She never did." },
          { n: "When she woke, the dryer had buzzed and gone quiet, and the room was cold, and she was alone on top of the machine with a stiff neck and his coat over her knees. Her laundry was folded beside her, every corner squared, like somebody was going to come along later and check. On top of the stack was one shirt folded badly. Crooked. A lump, really. Left that way on purpose." },
          { n: "On top of that was a sticky note, folded small, in his handwriting." },
          { n: "don't forget" },
          { n: "And under it, newer, in the same flat small letters, as if he'd finally worked out the end of the sentence." },
          { n: "laundry room. any of them. i'll be the one on the dryer." },
          { n: "She put it in her handbook, between the school rules and the bell schedule, next to his face. Then she went up the stairs in her socks with her laundry in her arms and his coat around her shoulders, and down the hall, past his door, which was open a hand's width, the way it always was." },
          { n: "She didn't look in. She didn't need to. She'd gotten good at waiting this year, and for the first time in her life it didn't feel like waiting at all." },
          { stamp: 'for-now' },
          { n: "ENDING · for now" }
        ] }
      ] }
    ] }
  ]
});
