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
  cast: { wren: 'Wren', porter: 'Girl on the Bench', lacuna: '???', mitsuru: 'Mitsuru', yukari: 'Yukari', junpei: 'Junpei', akihiko: 'Akihiko', elizabeth: 'Elizabeth', fuuka: 'Fuuka', aigis: 'Aigis', ken: 'Ken', koromaru: 'Koromaru' },
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
    ] }
  ]
});
