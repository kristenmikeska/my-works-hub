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
   and `else` if she has met none of them (ifRank on its own needs all of them). */
function femcMetAny(ids, then, otherwise) {
  return ids.reduceRight((rest, id) => [{ ifRank: { [id]: 1 }, then, else: rest }], otherwise || [])[0];
}
FemcSocial.story({
  cast: { wren: 'Wren', porter: 'Girl on the Bench', lacuna: '???', mitsuru: 'Mitsuru', yukari: 'Yukari', junpei: 'Junpei', akihiko: 'Akihiko', elizabeth: 'Elizabeth', fuuka: 'Fuuka', aigis: 'Aigis', ken: 'Ken', koromaru: 'Koromaru', thelacuna: 'The Lacuna', bluecoat: 'Woman in a Blue Coat' },
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
      { s: 'aigis', t: "These people are not hostile. These people are asleep. Their vital signs indicate... contentment." },
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
      { s: 'aigis', t: "I will take two. I have excellent grip strength." },
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
    ] }
  ]
});
