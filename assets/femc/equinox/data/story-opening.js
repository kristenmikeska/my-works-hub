/* Equinox opening: scene lines (format: scene.js). Story events for the first week, 4/8 to 4/12. */
(window.FEMC_GAME_EVENTS ||= []).push(

  { id: 'eqx-breakfast', date: '4/8', slot: 'early', consumes: true, title: 'breakfast for too many', place: 'Iwatodai Dorm · Dining Room', time: 'Early Morning',
    cast: { solar: 'Solar', junpei: 'Junpei', mitsuru: 'Mitsuru', yukari: 'Yukari', fuuka: 'Fuuka', ken: 'Ken', aigis: 'Aigis', akihiko: 'Akihiko', haechan: 'Haechan', hanni: 'Hanni', hyein: 'Hyein', yunjin: 'Yunjin', jihoon: 'Jihoon', minji: 'Minji' },
    scene: [
    { bg: 'iwatodaidorm-diningroom', music: 'joy' },
    // CG: eqx-breakfast — a long dormitory dining table at seven in the morning, crammed elbow to elbow with fourteen young people in school uniforms and pajamas, plates everywhere, a dog under the table, a whiteboard on the fridge behind them.
    { n: "The dining table in the dorm seated eight, if they were friendly. On the morning of the eighth of April it seated fourteen, because nobody would agree to eat in shifts, and the dog was under it." },
    { n: "Somebody had brought the chairs down from the third-floor study room, and somebody else had brought the stool from the laundry, and Ken was on an upturned rice-cooker box that Aigis had tested for load, and the whole thing ran on the particular logic of a crowd that has decided to be in one room at any cost: elbows in, plates overlapping, every conversation running over the top of three others. It smelled of rice and burnt toast and miso and the specific coffee Mitsuru bought, which was too good for the mugs it was in." },
    { n: "Fuuka had made rice for six. It had gone in four minutes. Hanni was making more, at the counter, in a borrowed apron, with the expression of a woman running a field hospital. Yunjin was eating standing up behind Solar's chair with one hand on the back of it, as if the chair might try something." },
    { n: "Solar sat in the middle of it in a uniform that fit like it had been waiting, and ate, because every time she stopped someone put something else in front of her." },
    { s: 'hyein', f: 'happy', t: "I got you the one with the egg and the one without the egg because I didn't know which one you'd be today. Like, as a person." },
    { s: 'haechan', f: 'neutral', t: "She's an egg person. She's always been an egg person. In every—" },
    { n: "He stopped, with his chopsticks halfway to his mouth, because Jihoon had looked up from across the table with real interest." },
    { s: 'haechan', f: 'neutral', t: "...In every breakfast. I've seen her eat. It's an egg situation." },
    { s: 'jihoon', f: 'happy', t: "Smooth. Really smooth. Ten out of ten. Nobody noticed." },
    { n: "Jihoon and Minji had come up the front path together at seven, because the whiteboard said visitors at seven, and knocked, because Mitsuru had a rule about guests knocking, and taken their shoes off in the hall like guests in somebody else's house. That had lasted about four minutes too." },
    { n: "Then Junpei stood up on his chair." },
    { s: 'junpei', f: 'happy', t: "Ladies. Gentlemen. Koromaru. Aigis." },
    { s: 'aigis', f: 'neutral', t: "I am not certain why I was listed separately." },
    { s: 'junpei', f: 'happy', t: "You're in a category of your own, Aigis, it's a compliment. Everybody, it is my honor and my duty to announce that, after a year of retirement, by popular demand—" },
    { s: 'yukari', f: 'serious', t: "Nobody demanded it." },
    { s: 'junpei', f: 'happy', t: "—by *popular demand*, the book is back." },
    { n: "He held it up. A spiral notebook with a cracked blue cover, softened at the corners from a year in a drawer, and on the front in black marker, in letters that had been gone over several times for emphasis, *WHO GETS CAUGHT FIRST*. Under it, freshly added, still shiny: *SEASON TWO*." },
    // CG: eqx-betting-book — a grinning boy in a baseball cap standing on a dining chair, holding up a battered spiral notebook with a hand-lettered title on its cover, a crowded breakfast table below him.
    { s: 'mitsuru', f: 'serious', t: "Iori. Off the chair." },
    { s: 'junpei', f: 'happy', t: "In a second, senpai. Okay, so, the rules haven't changed. Caught means caught. Coming out of somebody's room. Going into somebody's room. On the roof after curfew, two people, one jacket. Odds are on the inside cover. Ken's not allowed to bet, he's in elementary school." },
    { s: 'ken', f: 'serious', t: "Sixth grade. That's basically middle school." },
    { s: 'junpei', f: 'neutral', t: "*Basically* isn't *actually*, Ken." },
    { n: "He opened it to the first clean page and wrote something with a flourish, and turned it round so the table could see. It was a list of names. It was a long list. It had more names on it than the dorm had rooms, and some of the names had little arrows drawn between them, and some of the arrows had question marks on them, and one arrow, near the top, had three question marks and the word *(AGAIN??)*." },
    { n: "Several people at the table suddenly found their breakfast very interesting. Akihiko, at the end, had gone a dull red to the ears and was looking at the window. Haechan was looking at the ceiling. Jihoon was reading the page upside down with enormous interest, and then, as he got further down, with slightly less." },
    { choose: [
      { t: "(Take the pen and put a bet down.)", then: [
        { n: "She held her hand out for the pen. Junpei gave it to her with the face of a man who'd just been handed a winning lottery ticket by a stranger. She wrote something on the inside cover, shielding it with her arm, and closed the book, and gave it back, and went on eating her egg." },
        { s: 'junpei', f: 'surprised', t: "Wait. Wait. Who'd you— you can't bet on *yourself*, that's— is that allowed? Is that even—" },
        { s: 'yukari', f: 'neutral', t: "It's your book, Junpei." },
        { s: 'junpei', f: 'flustered', t: "I *know* it's my book, that's why I'm so *upset*." }
      ] },
      { t: "Take my name off that.", then: [
        { s: 'junpei', f: 'happy', t: "Can't. It's in pen. It's binding. It's basically a contract." },
        { s: 'hanni', f: 'serious', t: "It's a notebook from the konbini." },
        { s: 'junpei', f: 'happy', t: "A *binding* notebook from the konbini." }
      ] },
      { t: "(Read the arrows.)", then: [
        { n: "She read the arrows. She read them carefully, all the way down, with her chopsticks in her hand, and the table went quieter and quieter around her as she did it, until by the bottom of the page you could hear the refrigerator. She looked up. Several people were not looking at her very hard." },
        { s: 'solar', f: 'neutral', t: "...Your odds are wrong." },
        { s: 'junpei', f: 'surprised', t: "Which ones?!" },
        { n: "She went back to her egg. She didn't say. Across the table, Haechan made a sound into his coffee that might have been a laugh and might have been him choking." }
      ] }
    ] },
    { n: "Mitsuru, at the far end, had put her cup down and was looking past all of them at the refrigerator." },
    { n: "The whiteboard on its door still said VISITORS across the top, and the names under it had been rubbed out and rewritten so many times over a year that the board had gone gray. But it had two halves now. The line she'd drawn at two in the morning ran straight down the middle of it, and on the left was the old list, and on the right, at the top, in her neat angled hand, she had written a single word that hadn't been there when Solar went to bed." },
    { n: "*ARRIVALS.*" },
    { n: "Under it, there was nothing yet. Somebody, probably Junpei, had drawn a small question mark in the empty space, and somebody else, certainly Mitsuru, had wiped it out with a thumb, and it had left a gray smudge exactly where it had been." },
    { choose: [
      { t: "Mitsuru, why does it say arrivals?", then: [
        { s: 'mitsuru', f: 'neutral', t: "Because people arrived." },
        { s: 'solar', f: 'neutral', t: "That's not what I asked." },
        { s: 'mitsuru', f: 'serious', t: "I know." },
        { n: "She picked her cup back up. She drank from it. She didn't look at the board again, very deliberately, the way you don't look at a window you've heard something tap on." }
      ] },
      { t: "(Leave it.)", then: [
        { n: "She left it. Mitsuru saw her leave it, and something in her face eased, a quarter of an inch, and she went back to her coffee. Some things you only asked after breakfast." }
      ] }
    ] },
    { s: 'akihiko', f: 'neutral', t: "I'll walk you to the gate. I'm not in classes. I'm not anything this year, apparently." },
    { s: 'junpei', f: 'surprised', t: "Wait, Aki-senpai, I thought you were going abroad? The training thing? You were all—" },
    { s: 'akihiko', f: 'neutral', t: "I postponed it." },
    { s: 'junpei', f: 'neutral', t: "...Since when?" },
    { s: 'akihiko', f: 'neutral', t: "Since about half past twelve on Tuesday." },
    { n: "He said it to his rice. Nobody at the table said anything clever about it, not even Jihoon. Under the table Koromaru shifted, and put his chin on Solar's foot, and left it there." },
    { s: 'mitsuru', f: 'neutral', t: "Out by eight on school days. That includes the guesthouse. That includes, Park, your second helping." },
    { s: 'jihoon', f: 'sad', t: "You saw that? I was so subtle." }
  ] },

  { id: 'eqx-register', date: '4/8', slot: 'morning', consumes: true, title: 'the register', place: 'Gekkoukan High · Classroom', time: 'Morning',
    cast: { solar: 'Solar', yukari: 'Yukari', junpei: 'Junpei', fuuka: 'Fuuka', aigis: 'Aigis', mitsuru: 'Mitsuru' },
    scene: [
    { bg: 'gekkoukanhigh', music: 'school' },
    { n: "The courtyard was full of first-years being nervous in clean uniforms, and cherry blossom coming down over all of it in the slow pink drifts that made everyone take the same photograph, and in the middle of it, where the bench and the vending machine had always been, there was a low ring of old gray stone set into the paving, mossy at the joins, with a rope of some kind coiled on its lip." },
    { n: "Nobody was looking at it. That was the thing she noticed first. A thousand students crossed that courtyard on the first morning of term and walked round the well the way you walk round a bollard, without breaking stride, without turning their heads, chatting, and the petals fell into it and didn't make a sound. Someone had put a little folding sign beside it that said, in neat characters, *Maintenance. Do not lean.*" },
    // BG: gekkoukan-courtyard-well-day — Gekkoukan's sunny courtyard in spring, cherry blossom falling, students in uniform walking past a low ring of old mossy stone set into the paving with a small folding maintenance sign beside it.
    { n: "She stood and looked at it until Yukari took her elbow and walked her on, without a word, the way you'd walk someone past a car accident." },
    { place: 'Gekkoukan High · Classroom', time: 'Morning', bg: 'gekkoukan-classroom-day', soft: true },
    { n: "The homeroom teacher was a man she didn't know, with reading glasses on a cord round his neck, and he took the register the old-fashioned way, standing at the front with the folder open on his arm, calling each surname and waiting for each *here* before he went on. He was slow about it. He seemed to enjoy it." },
    { n: "She sat by the window, where they'd put her. Yukari in front of her. Junpei to her left, already slumping. Fuuka two rows over with her pencil case laid out square, and Aigis by the door, as upright as a coat stand, attending. A third-year class again. The same shape of morning, the same smell of chalk and floor wax and somebody's too-strong shampoo two rows back. She'd graduated. She had stood in the gym a year ago in this uniform and been handed a rolled-up certificate tied with a ribbon. She was fairly sure of that. She had it somewhere." },
    { n: "The teacher got to the end of the I's, and the K's, and the T's, and turned a page, and stopped." },
    { n: "He looked at the folder for a long moment. He took the reading glasses off the cord and put them on and looked again. He turned the folder sideways." },
    { n: "Then he looked up, along the rows, and found her by the window, the only face he couldn't match, and said, slowly, with a small frown, the way you'd read a word in a language you'd only seen written," },
    { n: "*...Solar?*" },
    { n: "No surname. She could see it from where she sat, upside down, through the back of the folder where the light came through: a row with her first name written in, and the box for a family name beside it, empty. And in the column for her class, not a number. A small, neat question mark. And at the end of the row, in red, the stamp they used for students who'd never turned up: *absent*." },
    // CG: eqx-register — a teacher's open class register held on an arm, one row showing only the first name Solar, an empty surname box, a small question mark for a class number and a red absent stamp.
    { choose: [
      { t: "Here.", then: [
        { n: "She said it the way everyone else had said it. *Here.* The teacher looked at her a moment longer, then took the red pen from behind his ear and drew a small careful line through the stamp, and wrote something beside it, and moved on. Nobody else in the room had noticed anything. Except Yukari, who didn't turn round, and whose shoulders went very still." }
      ] },
      { t: "(Raise her hand.)", then: [
        { n: "She raised her hand. He looked at it, and at her, and nodded, as if that answered something, and took the red pen from behind his ear and drew a small careful line through the stamp. He didn't ask about the surname. He looked like a man who had decided, quite firmly, not to." }
      ] },
      { t: "Which one?", then: [
        { n: "It came out before she'd thought about it. *Which one.* Which surname did he want, out of the three she had. Two rows back, somebody giggled, thinking it was a joke." },
        { n: "The teacher looked at her over the top of his glasses for a long moment, and then, unexpectedly, smiled, a small tired one, the smile of a man who'd been teaching a long time and had seen stranger first mornings than this." },
        { n: "He took the red pen from behind his ear, drew a line through the stamp, and moved on without an answer, which was, she supposed, an answer." }
      ] }
    ] },
    { s: 'junpei', f: 'neutral', t: "...Sol. Psst. Why's there a question mark. I can see it from here. Why are you a *question mark*." },
    { s: 'yukari', f: 'serious', t: "Junpei, turn around." },
    { s: 'junpei', f: 'sad', t: "I'm just saying. I'm a 3-F. Yuka-tan's a 3-F. She's a question mark. That's not a class. That's a vibe." },
    { place: 'Gekkoukan High · Hallway', time: 'Morning', bg: 'school-hallway', soft: true },
    { n: "Mitsuru was waiting in the hall outside the faculty office when homeroom let out, which should not have been possible, because Mitsuru had graduated with Solar, and was at university now, and had told everyone at breakfast that she had a nine o'clock seminar on corporate governance she couldn't miss." },
    { n: "She had missed it. She was standing in a gray suit with a Kirijo Group visitor's badge clipped to the lapel and two folders under her arm, a thick one and a thin one, and the thick one, Solar could see from the tab, said *Exchange students (guesthouse)*. She held out the thin one." },
    { s: 'mitsuru', f: 'neutral', t: "Your enrollment form. The school gave me a copy. I asked very politely." },
    { s: 'solar', f: 'neutral', t: "How politely?" },
    { s: 'mitsuru', f: 'neutral', t: "I mentioned who pays for the new gymnasium." },
    { n: "Solar opened it. One sheet. The school's crest at the top, the boxes underneath filled in, her first name, a date of birth in June, *Iwatodai Dormitory* for an address, all in the same handwriting. Upright. Careful. Old-fashioned, every stroke finished, the kind of hand someone's grandmother would have, and so heavy that when she turned the sheet over she could feel each character on the back, standing up off the paper, like they'd been pressed there with the whole weight of an arm." },
    { n: "At the bottom, where a parent or guardian was supposed to sign, there was a signature. It wasn't any name she could read. It was a long, heavy, looping line that went on longer than any name should." },
    { s: 'mitsuru', f: 'serious', t: "Nobody in the office recognizes the hand. Nobody remembers it being handed in. It was in the file on Monday morning, stamped and approved, and the stamp is genuine." },
    { s: 'mitsuru', f: 'serious', t: "I don't recognize it either. And I know every hand that signs anything in this town with my family's name near it." },
    { choose: [
      { t: "Somebody made me a place.", then: [
        { s: 'mitsuru', f: 'neutral', t: "Yes. That's how I'd put it." },
        { s: 'mitsuru', f: 'sad', t: "Last year, the world did that for you on its own. I'd like very much to know who did it this year." }
      ] },
      { t: "(Run a thumb over the back of the page.)", then: [
        { n: "She ran her thumb over the back of the page, over the raised strokes, and they were cool, and smooth, and she thought, without wanting to, of another page, last night, and a word pressed into it over and over hard enough to dent it. She closed the folder." },
        { s: 'mitsuru', f: 'neutral', t: "...You've seen it before." },
        { s: 'solar', f: 'neutral', t: "I don't know." },
        { n: "Mitsuru looked at her for a long time. She didn't ask again. She wrote something small in the corner of the thick folder, and underlined it twice." }
      ] },
      { t: "Can I keep it?", then: [
        { s: 'mitsuru', f: 'neutral', t: "It's yours. It's the only paper in this building with your name on it." },
        { s: 'mitsuru', f: 'serious', t: "Keep it somewhere you'll know if it moves." }
      ] }
    ] },
    { n: "The bell went for first period. Students poured past them in both directions, and nobody looked twice at a girl in a third-year uniform holding a folder in the middle of the hall, which was, she thought, almost the strangest part. Last year she'd been nobody, and everyone had stared. This year she was a question mark in a register, and nobody looked at all." },
    { n: "In the courtyard below the window, the petals went on falling into the well, and not making a sound." }
  ] },

  { id: 'eqx-bench', date: '4/8', slot: 'after', consumes: true, title: 'every bench', place: 'Iwatodai Station', time: 'After School',
    cast: { solar: 'Solar', haechan: 'Haechan' },
    scene: [
    { bg: 'iwatodai-station', music: 'tender' },
    { n: "She walked home the long way, because she could." },
    { n: "That was the strange part, the part nobody had warned her about, because nobody had ever had to: she knew the way. All of it. Last year she'd walked these streets with nothing in her head but what the town had told her that week, and every corner had been a small surprise, and she had liked that more than she'd ever admitted. Now she came down the station steps and her feet turned left before she did. She knew which crossing light was slow. She knew the konbini by the overpass did the good onigiri until four and the sad ones after. She knew the old man who fed the pigeons by the fountain would be there, and he was, and she knew he'd nod at her, and he did, and she nodded back, and he had no idea who she was." },
    { n: "She knew where every bench was." },
    { n: "That was the one that got her. Port Island was full of benches, and she knew all of them, and she knew without having to think about it which one she'd sat on with whom, and when, and what had been said. The one by the fountain where Junpei had told her about his father. The one outside the bookstore where she'd waited for Fuuka in the rain. The low wall by the monorail she'd sat on a hundred times because it was in the sun. The one by the station steps, under the clock, that she didn't sit on." },
    { n: "She'd sat on that one once. The last night of the last year, at midnight, and waited. She didn't sit on it now. She walked past it, the way she'd walk past a person she'd said goodbye to properly and didn't want to have to say it to again, and she didn't look at it, and she knew exactly where it was the whole time, the way you know where a stove is in the dark." },
    { n: "It wasn't nostalgia. Nostalgia was for things that were over. This was more like being handed a coat you'd sworn you'd given away, and finding it still fit, and still had your gum wrappers in the pockets." },
    { choose: [
      { t: "(Sit on the low wall in the sun.)", then: [
        { n: "She sat on the wall by the monorail, in the sun, with her bag in her lap, the way she used to, and let the warmth come through the stone into the backs of her legs, and watched the trains go out over the water." }
      ] },
      { t: "(Keep walking.)", then: [
        { n: "She kept walking. Down past the station, along the edge of the overpass, where the wind came up off the bay and smelled of salt and diesel and, very faintly, of the cherry trees in the school courtyard on the island across the water. She stopped at the rail and looked at the island, and found she was looking for something rising out of it, and it wasn't there, and she didn't know if she was relieved." }
      ] }
    ] },
    { n: "He found her. Of course he did." },
    { n: "She heard him before she saw him, the particular scuff of his shoes, a rhythm she'd have known in a crowd of a thousand, and then he was beside her with his hands in his pockets and a plaster across each palm, not saying anything, looking at the same water." },
    { s: 'haechan', f: 'neutral', t: "Yukari said you went the long way. She said it like it was a symptom." },
    { s: 'solar', f: 'neutral', t: "I know where everything is." },
    { s: 'haechan', f: 'neutral', t: "Yeah." },
    { s: 'haechan', f: 'serious', t: "...It's weird, right? Knowing. I keep walking into rooms knowing who's in them." },
    { n: "He'd know. Of anyone in the dorm, he was the one who'd know. He'd carried two whole lives around for a year, two cities, two languages, two of himself, and never once said which one was walking. She looked at him sideways, at the plasters on his hands, and asked the question nobody else in Iwatodai could have asked him." },
    { choose: [
      { t: "Which one of you is here?", then: [
        { s: 'haechan', f: 'happy', t: "Both. Obviously. The one from the rooftop and the one from the stairs. They're fighting about where to get lunch." },
        { s: 'haechan', f: 'neutral', t: "...The one from the stairs wants to know if you're eating. The one from the rooftop wants to know if you're *okay*. They're both annoying." }
      ] },
      { t: "Does it ever stop being strange?", then: [
        { s: 'haechan', f: 'neutral', t: "No." },
        { s: 'haechan', f: 'sad', t: "You stop noticing it's strange. That's different. That's worse, maybe. I don't know." }
      ] },
      { t: "(Bump his shoulder.)", then: [
        { n: "She bumped her shoulder into his. He bumped back, harder, so she had to catch the rail. It was the stupidest thing two people could do on an overpass and it unknotted something in her chest she hadn't known was knotted." },
        { s: 'haechan', f: 'happy', t: "Violence. On the first day. I'm telling Hanni." }
      ] }
    ] },
    { n: "They stood there a while. A train went out over the water, and came back, and went out again. The sun moved off the rail and onto her hands." },
    { n: "There was a question standing between them on the overpass, a big one, and they were both very carefully not looking at it, the way you don't look at somebody you know at the next table. Everyone remembered. Everyone remembered everything. That meant she knew what he'd been to her, every version of it, and he knew what she'd been to him, and that none of those versions were this one. Here. A second year, in a town that wasn't home for either of them, with all of it behind them and none of it settled." },
    { n: "So what were they now. After everything." },
    { s: 'haechan', f: 'neutral', t: "...I'm not asking. For the record. You can see me not asking." },
    { s: 'solar', f: 'neutral', t: "I can see you not asking very loudly." },
    { s: 'haechan', f: 'flustered', t: "Yeah, well. I'm doing my best. I climbed down a *well*. I'm allowed one loud thing a week." },
    { choose: [
      { t: "I don't know yet.", then: [
        { s: 'haechan', f: 'neutral', t: "Good. Me neither." },
        { s: 'haechan', f: 'serious', t: "We've got a year. Apparently. Somebody gave you a whole year. Use it." }
      ] },
      { t: "(Take his hand, plasters and all.)", then: [
        { n: "She took his hand off the rail. Plasters and all. He let her, and didn't close his fingers, and didn't pull away, and looked very hard at the water, and his ears went red from the tips down." },
        { s: 'haechan', f: 'flustered', t: "...That's not an answer." },
        { s: 'solar', f: 'neutral', t: "No." },
        { n: "He closed his fingers. Carefully, because of the plasters. Then not carefully at all." }
      ] },
      { t: "Ask me again in a month.", then: [
        { s: 'haechan', f: 'happy', t: "I'm putting it in my phone. *Ask her again.* With an alarm. You'll hate it." }
      ] }
    ] },
    { n: "They walked back together, the long way, and she knew where every bench was, and for once she didn't count them." }
  ] },

  { id: 'eqx-boarding-house', date: '4/9', slot: 'after', consumes: true, title: 'the boarding house', place: 'Iwatodai · The Oka Boarding House', time: 'After School',
    cast: { solar: 'Solar', mitsuru: 'Mitsuru', yunjin: 'Yunjin', koromaru: 'Koromaru', mrsoka: 'Mrs. Oka' },
    scene: [
    { bg: 'outside-daytime-neighborhood', music: 'tender' },
    // BG: oka-boarding-house-gate — an old two-storey wooden Japanese house behind a low gate on a quiet riverside street in spring, a persimmon tree in the garden and an old stone well with a heavy stone cap beside it.
    { n: "The Kirijo Group had found a boarding house. That was how Mitsuru said it at lunch, over the phone, in the voice she used for sentences she didn't fully believe: *the Group has found a boarding house, for the overflow,* and then, after a pause long enough that Solar checked the line was still there, *I'd like you to come and look at it with me.*" },
    { n: "Yunjin came because nobody could have stopped her. Koromaru came because Yunjin had his lead and didn't know how to say no to him, which was a thing nobody had warned her about dogs." },
    { n: "It was on the river side of Iwatodai, past the shrine, down a street Solar had walked a dozen times last year and would have sworn was all apartment blocks. It wasn't. Between a dry cleaner and a parking lot there was an old two-storey house in dark wood behind a low gate, the kind of house that's been there longer than the street, with a garden, and a persimmon tree with its new leaves out, and beside the tree an old well with a round stone cap on it, gray and heavy and furred with moss at the edges." },
    { n: "She stopped at the gate and looked at the well for a long time." },
    { s: 'yunjin', f: 'neutral', t: "No. Absolutely not. Nope. Another one?" },
    { s: 'mitsuru', f: 'neutral', t: "It's capped. It's been capped for a very long time, according to the survey." },
    { s: 'yunjin', f: 'serious', t: "So was the last one, probably. Until Tuesday." },
    { n: "Koromaru had stopped at the gate too. Not at Solar's side. In front of it, square in the middle of the path, with his legs set and his ears back, and when Yunjin tugged the lead, gently, he didn't move. He wasn't growling. He wasn't doing anything. He was just not going in, the way a dog doesn't go into the sea." },
    { s: 'yunjin', f: 'surprised', t: "...Koro? Come on. Come on, buddy. It's a house." },
    { n: "He sat down. He looked up at Solar. He looked, she thought, embarrassed for all of them." },
    { choose: [
      { t: "(Crouch down beside him.)", then: [
        { n: "She crouched beside him on the path, and he leaned his whole warm weight into her side, and stayed there, and didn't look at the house once. She put her hand on his neck and felt his heart going, quick and steady, and his body as stiff as a board." }
      ] },
      { t: "Stay here, then. Good boy.", then: [
        { n: "He thumped his tail once on the paving, which meant *thank you*, and lay down across the gateway with his chin on his paws like a draft excluder, facing the house, and didn't close his eyes." }
      ] }
    ] },
    { n: "Yunjin tied his lead to the gatepost and stayed with him for a moment, saying something low in Korean, and then came after them, looking back twice." },
    { s: 'mitsuru', f: 'neutral', t: "The lease is already signed." },
    { s: 'solar', f: 'neutral', t: "By you?" },
    { s: 'mitsuru', f: 'serious', t: "By the Group. I'm told. I have a copy. I don't recognize the signature, and I've asked three people in the Group's property office, and none of them remember drafting it, and all of them, very quickly, remembered that they must have." },
    { n: "She said it calmly. She said it the way she'd said *in case* at two in the morning, and Solar looked at her profile against the old dark wood of the house and thought she had never once seen Mitsuru Kirijo arrive somewhere she hadn't arranged." },
    { place: 'The Oka Boarding House · Kitchen', time: 'After School', bg: 'iwatodaidorm-kitchen', soft: true },
    // BG: oka-boarding-house-kitchen — a warm old-fashioned Japanese farmhouse kitchen with a long wooden counter, steam from a pot, a tin of rice cakes on the counter, a window onto a garden with a persimmon tree.
    { n: "The front door was open before they reached it. Not swung open. Just open, as if it had been left that way for them, and from somewhere inside came warm air, and steam, and the smell of something sweet and toasted, rice and sugar and sesame, and a woman's voice, calling, cheerful, from a room they couldn't see." },
    { s: 'mrsoka', f: 'neutral', t: "In the kitchen, children! Shoes off, slippers on the step. I'd come and get you but my hands are all over flour." },
    { n: "The kitchen was at the back, long and low, with a wooden counter worn pale in the middle from a hundred years of hands and a window full of persimmon tree and garden and green April light. There was a pot on the stove. There was a tray of something cooling. And there was a woman at the counter with her sleeves rolled to the elbow, kneading." },
    // CG: eqx-mrs-oka — a kind-faced woman in her fifties in an apron and cotton work gloves standing at a long wooden kitchen counter, kneading dough, smiling over her shoulder, a tin of rice cakes beside her.
    { n: "She was somewhere in her fifties, round-faced and soft-shouldered, with her gray-black hair pinned up in a knot and a dusting of flour on one cheek, and an apron with a faded pattern of little pine trees, and she was wearing gloves. White cotton gloves, the thin kind, the kind for gardening or for good silver. She was kneading dough in them. They were floured to the wrist." },
    { n: "She looked round over her shoulder and smiled at them, and it was a good smile. That was the trouble with it. It was the best smile Solar had been given in Iwatodai by anyone over twenty, warm all the way through, the smile of someone who had been waiting for you to come home and had made too much food on purpose." },
    { s: 'mrsoka', f: 'neutral', t: "Oh, look at you. Look at the three of you. Kirijo-san, isn't it? You telephoned. And you've brought your friends. Good. Sit, sit, there's tea in the pot, I've only just made it." },
    { s: 'mitsuru', f: 'neutral', t: "Thank you. You're Mrs. Oka?" },
    { s: 'mrsoka', f: 'neutral', t: "I'm Mrs. Oka. I've been Mrs. Oka for so long I sometimes forget there was ever anything else to call me." },
    { n: "She laughed, and wiped her gloved hands on a cloth, and didn't take the gloves off, and came round the end of the counter toward them, and stopped." },
    { n: "Right at the kitchen doorway, where the worn pale boards of the kitchen met the darker boards of the hall. She stopped there with her hands folded on her apron, and waited, smiling, as if there were a line on the floor only she could see." },
    { n: "Solar realized, a beat late, that she was waiting to be asked. They were standing in the hall. It was her kitchen. She was waiting for them to invite her in." },
    { choose: [
      { t: "(Step into the kitchen.)", then: [
        { n: "Solar stepped over the line into the kitchen, and the moment she did, Mrs. Oka beamed and turned back to the counter as if nothing at all had happened, as if she'd only been making room." }
      ] },
      { t: "Please, go ahead.", then: [
        { s: 'mrsoka', f: 'neutral', t: "Oh, what lovely manners. Somebody raised you properly." },
        { n: "And she turned back to her counter, and Solar stood in the hall with the strange, small sense of having said a password without knowing it." }
      ] }
    ] },
    { n: "On the counter, by the tea things, there was a tin. Old and round and painted with faded cranes, the lid off, and inside it, packed in neat rows on a paper doily, there were rice cakes. Small white ones, dusted with flour, soft and round as thumbs." },
    { s: 'mrsoka', f: 'neutral', t: "Take one. Take two, they're small. I make them every day, whether anyone comes or not. It's a habit. My mother did it. Her mother before her. You never know who'll walk in the door." },
    { choose: [
      { t: "(Take one.)", flag: 'eqx-oka-ricecake', then: [
        { n: "She took one. It was still faintly warm, and soft, and when she bit into it it was sweet and plain and so exactly the way a rice cake was supposed to taste that her eyes stung for a second, unexpectedly, for no reason she could have said." },
        { s: 'mrsoka', f: 'neutral', t: "There. You needed that. I can always tell." }
      ] },
      { t: "No, thank you.", then: [
        { s: 'mrsoka', f: 'neutral', t: "Of course. Another time. They'll be here." },
        { n: "She put the lid back on the tin, gently, with both gloved hands, and patted it, the way you'd pat a dog, and the cranes on the lid caught the light." }
      ] },
      { t: "(Take one for Koromaru.)", then: [
        { n: "She took one and wrapped it in a napkin to take out to the gate. Mrs. Oka watched her do it with great interest, her head on one side." },
        { s: 'mrsoka', f: 'neutral', t: "For the dog? Bless you. Dogs never like me. I don't know why. I've always loved them." },
        { n: "Later, at the gate, Koromaru sniffed the napkin once, and turned his head away, and wouldn't look at it again, and Yunjin ate it on the walk home and said it was the best rice cake she'd ever had in her life and that she hated that." }
      ] }
    ] },
    { n: "Mrs. Oka poured the tea. She asked Mitsuru how she took hers and Mitsuru said black, and she asked Yunjin and Yunjin said with sugar, lots, and she asked Solar, and Solar told her." },
    { n: "Later, when she poured the second cup, she didn't ask again. She got all three right." },
    { s: 'mrsoka', f: 'neutral', t: "So. Kirijo-san says there might be more of you coming. Children from far away. I said, well, I've got eight rooms upstairs and nobody in any of them, and a kitchen that likes being used. Send them to me. I'll feed them. I'm very good at feeding people." },
    { s: 'yunjin', f: 'neutral', t: "How many more?" },
    { n: "She asked it of Mitsuru, but Mrs. Oka answered, cheerfully, rolling a ball of dough between her gloved palms, round and round." },
    { s: 'mrsoka', f: 'neutral', t: "Oh, however many come. There's always room for one more, isn't there? That's what a house is for." },
    { n: "The flour on her cuffs went past the gloves, Solar noticed. Up the wrist, onto the sleeve of her cardigan, in a fine pale dust, more than the little bit of dough on the counter could account for. She noticed it, and didn't know why she'd noticed it, and drank her tea." },
    { s: 'mitsuru', f: 'neutral', t: "We'll be in touch. Thank you for your time, Mrs. Oka." },
    { s: 'mrsoka', f: 'neutral', t: "Any time, child. The door's always open. You know where it is now." },
    { place: 'Iwatodai · Riverside', time: 'After School', bg: 'iwatodai-riverside-night', soft: true },
    { n: "Koromaru was on his feet before they reached the gate, and pulling, and didn't stop pulling until they were two streets away, past the shrine, where he sat down on the pavement and shook himself all over, nose to tail, the way he did coming out of the rain." },
    { s: 'yunjin', f: 'serious', t: "She's nice." },
    { s: 'solar', f: 'neutral', t: "She's very nice." },
    { s: 'yunjin', f: 'neutral', t: "Yeah." },
    { n: "Neither of them said anything else. They walked on. Behind them, the sun was going down over the river, and Mitsuru was on the phone already, walking ahead, saying *eight rooms* to someone in the voice she used for numbers she didn't like." }
  ] },

  { id: 'eqx-guesthouse', date: '4/10', slot: 'evening', consumes: true, title: 'the kitchen locks at nine', place: 'Kirijo Guesthouse · Lobby', time: 'Evening',
    cast: { solar: 'Solar', jungwon: 'Jungwon', jihoon: 'Jihoon', cherry: 'Cherry', minji: 'Minji', jaehyun: 'Jaehyun' },
    scene: [
    { bg: 'kirijo-guesthouse-lobby', music: 'night' },
    { n: "The guesthouse by the station had a kitchen that locked at nine, a rule printed on a laminated card by the door in Japanese and English and, as of Thursday, in Korean, in Jungwon's handwriting, underneath, with a small apologetic note that the translation was his own." },
    { n: "It was a quarter past seven. Somebody had decided to cook. That somebody was Jaehyun, which nobody had expected, least of all Jaehyun, and he was standing at the stove in a borrowed apron with the sleeves of a very good shirt pushed up, reading the back of a packet of curry roux with the same expression he used on quarterly reports." },
    { s: 'jaehyun', f: 'neutral', t: "It says *simmer*. It doesn't say for how long. That's not a recipe. That's a mood." },
    { s: 'minji', f: 'neutral', t: "Just stir it." },
    { s: 'jaehyun', f: 'serious', t: "I *am* stirring it. I've been stirring it for eleven minutes. It isn't doing anything." },
    { n: "Minji was on the counter beside him with her knees up and her camera off, eating crackers out of the box and handing him one every few minutes without being asked, like a nurse handing over instruments." },
    { n: "At the long table by the window, Jungwon and Jihoon were sitting directly across from each other, which was the first mistake, setting the table, which was the second." },
    { s: 'jihoon', f: 'neutral', t: "Fork goes on the left." },
    { s: 'jungwon', f: 'neutral', t: "It's curry. Spoon goes on the right. There is no fork." },
    { s: 'jihoon', f: 'neutral', t: "There's always a fork. You don't know what the evening's going to bring." },
    { s: 'jungwon', f: 'neutral', t: "...That isn't how forks work, Jihoon." },
    { s: 'cherry', f: 'serious', t: "Oh my god. It's been three days. It's been *three days*, and you two are doing cutlery." },
    { n: "Cherry was on the couch with her feet on the coffee table and a magazine she wasn't reading. She looked up when Solar came in, and didn't say hello, and moved her feet so there was room on the couch, which for Cherry was a whole welcome speech with flowers." },
    { n: "Both boys looked up at the same time. Solar watched it happen. Jungwon stood, because he always stood, and Jihoon didn't stand, because he never did, and leaned back in his chair instead, and smiled at her, slow, the smile he'd use across a room at a party he'd decided was going to go his way." },
    { n: "And that was the shape of it. It always had been, at home, in one of her lives. She knew it the way she knew the stairs at the dorm. Jungwon was hers, there; he'd been hers in the hallways and the council room and on the walk home, and everyone at Hanlim knew it. And Jihoon was the thing nobody said out loud. Both of them knew it too, every inch, and here they were across a table from each other in a guesthouse in Japan, arguing about forks." },
    { n: "Nobody had broken up with anybody. Nobody had decided anything. Everybody remembered all of it." },
    { choose: [
      { t: "(Sit at the table between them.)", then: [
        { n: "She sat at the end of the table, between them, so that she was the third corner of something. Jungwon sat back down. Jihoon put a fork beside her plate with a little flourish, on the left, and looked at Jungwon while he did it." },
        { s: 'jungwon', f: 'neutral', t: "...She won't need it." },
        { s: 'jihoon', f: 'happy', t: "She might. You don't know her whole life." },
        { s: 'jungwon', f: 'serious', t: "Yes. I do." },
        { n: "He said it quietly, and with absolutely no heat in it, and it landed on the table like a dropped plate. Jihoon's smile stayed exactly where it was. Under the table, she felt his knee settle against hers, lightly, on purpose, the way it had under other tables, and stay there." }
      ] },
      { t: "(Sit on the couch with Cherry.)", then: [
        { n: "She sat on the couch with Cherry, who handed her half the magazine without comment. Across the room, both boys watched her sit there, and then looked at each other, and then, very carefully, went back to setting the table, in silence, one spoon and one fork at every place." },
        { s: 'cherry', f: 'happy', t: "Smart. Let them stew. They're better when they stew." }
      ] },
      { t: "(Go and help Jaehyun.)", then: [
        { n: "She went into the kitchen and took the spoon off her brother and tasted the curry and added salt, and he watched her do it with the face of a man watching someone defuse a bomb." },
        { s: 'jaehyun', f: 'neutral', t: "...That's it? Salt?" },
        { s: 'solar', f: 'neutral', t: "That's it." },
        { s: 'jaehyun', f: 'neutral', t: "Dad would have hired someone. For the salt." },
        { n: "He said it dryly, and then, so quickly she almost missed it, the corner of his mouth went up, because they both knew it was true, and they were both, for the first time in their lives, very far from anyone Dad could hire." }
      ] }
    ] },
    { n: "They ate at a quarter to nine, all six of them crowded round the long table with the window black behind them and the curry, which Jaehyun refused to accept praise for, gone in ten minutes. It was loud. Minji told a story about a sound guy at a concert that Solar had heard before, in another life, and laughed at anyway. Cherry stole Jihoon's last bite and he let her. Jungwon refilled everyone's water before it was empty, every time, without looking, the way he'd counted everything for as long as she'd known him." },
    { n: "At five to nine the kitchen door hummed and clicked. The lock. Everybody looked at it." },
    { s: 'minji', f: 'neutral', t: "Who locks a kitchen?" },
    { s: 'jungwon', f: 'neutral', t: "The Kirijo Group. For our safety. It's on the card." },
    { s: 'jihoon', f: 'neutral', t: "Whose safety. The curry's?" },
    { n: "Nobody laughed as much as the joke deserved. They'd all been in the green on Tuesday. They all knew what came at midnight now, every night, and that a locked door was a locked door, and that the card by the kitchen didn't say what the Group thought might want in." },
    { s: 'jaehyun', f: 'neutral', t: "Someone's walking you back. It's not a question." },
    { s: 'solar', f: 'neutral', t: "It's not even nine-thirty." },
    { s: 'jaehyun', f: 'serious', t: "Hanni told me the rule. I'm not breaking Hanni's rule. I've *met* Hanni." },
    { choose: [
      { t: "Jungwon, walk me back?", then: [
        { n: "He already had his coat. He'd had it on the back of his chair all evening, she realized, the way you keep your keys by the door." },
        { place: 'Iwatodai · Street', time: 'Evening', bg: 'outside-night', soft: true },
        { n: "He walked on the road side of her, the whole way, without seeming to have decided to. At the corner by the dorm he stopped, because he always stopped short of a door, and looked at his watch, and then at her." },
        { s: 'jungwon', f: 'neutral', t: "Nine twenty-six." },
        { s: 'jungwon', f: 'sad', t: "...At home I'd be calling to say I got back. I don't know who I'd call here." },
        { s: 'solar', f: 'neutral', t: "Call me." },
        { s: 'jungwon', f: 'happy', t: "I'm standing in front of you." },
        { s: 'solar', f: 'neutral', t: "Call me anyway." },
        { n: "He walked back toward the station. At nine forty-one, her phone buzzed, once. *Back.* Nothing else. She looked at it for a long time." }
      ] },
      { t: "Jihoon, walk me back?", then: [
        { n: "Jihoon was out of his chair so fast he knocked the fork off the table, and didn't pick it up, and didn't look at Jungwon, which was its own way of looking at him." },
        { place: 'Iwatodai · Street', time: 'Evening', bg: 'outside-night', soft: true },
        { n: "He walked slowly. He walked so slowly she accused him of it, and he said it was a bad knee, and she said he didn't have a bad knee, and he said it was a *new* bad knee, he'd got it in a well, metaphorically, and then they were at the dorm far too soon and he stopped under the streetlight and put his hands in his pockets." },
        { s: 'jihoon', f: 'neutral', t: "He's going to ask you about this. Later. He won't ask. He'll just sort of be very polite at you until you tell him." },
        { s: 'solar', f: 'neutral', t: "I know." },
        { s: 'jihoon', f: 'sad', t: "...Yeah. You do." },
        { n: "He didn't try to kiss her. That was the thing she'd remember. He looked at her mouth, once, and then up, and grinned, and said goodnight, and walked off toward the station whistling something off-key, and didn't look back until the corner, where he did." }
      ] },
      { t: "Jaehyun, you're walking me back.", then: [
        { s: 'jaehyun', f: 'neutral', t: "Obviously." },
        { place: 'Iwatodai · Street', time: 'Evening', bg: 'outside-night', soft: true },
        { n: "He walked beside her with his hands in his coat and said almost nothing the whole way, which was, for her brother, a long and comfortable conversation. At the dorm gate he stopped." },
        { s: 'jaehyun', f: 'neutral', t: "I used to think you'd run away. At home. When you didn't come to things. I used to tell Ms. Han you'd run away to make her laugh." },
        { s: 'jaehyun', f: 'serious', t: "You didn't run away. Something took you. I'd like to know what. Then I'd like to have a word with it." },
        { n: "He nodded at her, once, and turned, and walked off down the hill with his coat open, like a man who'd decided a cancelled train was going to come anyway." }
      ] }
    ] }
  ] },

  { id: 'eqx-shinjiro', date: '4/11', slot: 'after', consumes: true, title: 'visiting hours', place: 'Tatsumi Memorial Hospital · Ward', time: 'Daytime',
    cast: { solar: 'Solar', akihiko: 'Akihiko', shinjiro: 'Shinjiro' },
    scene: [
    { bg: 'hospital-room', music: 'tender' },
    { n: "Akihiko walked to the hospital like it was a fight he was late for, and Solar had to take two steps for every one of his, and didn't ask him to slow down, because she knew he couldn't." },
    { n: "Shinjiro was sitting up in the last bed by the window, in a gray hospital shirt with the sleeves pushed up and a tray table across his lap with a bowl on it, and he was trying to pick up a piece of tofu with chopsticks in his right hand. His right hand was shaking. Not a lot. Enough. The tofu slid off. He tried again." },
    { n: "He'd been awake since February. She knew that the way she knew everything now, all at once and without having to be told: the day the doctors said he'd opened his eyes, the weeks after, the frame and the bars and the physical therapist he'd made cry twice. The right side of him had come back slower than the left. It was still coming." },
    { n: "He didn't look up when they came in. He picked up the tofu. It stayed. He ate it, and put the chopsticks down very precisely, and then looked up, at her, under his hair, for a long moment, and his face did nothing at all, which on Shinjiro Aragaki was a great deal." },
    { s: 'shinjiro', f: 'neutral', t: "...You eat today?" },
    { choose: [
      { t: "Yes.", then: [
        { s: 'shinjiro', f: 'neutral', t: "What." },
        { s: 'solar', f: 'neutral', t: "Breakfast." },
        { s: 'shinjiro', f: 'neutral', t: "That's not a food. That's a time of day. Try again." }
      ] },
      { t: "Hello to you too.", then: [
        { s: 'shinjiro', f: 'neutral', t: "Hello. You eat today?" }
      ] },
      { t: "(Steal his tofu.)", then: [
        { n: "She took the chopsticks out of his hand, picked up the next piece of tofu on the first try, and ate it. He watched her do it with an expression of profound, silent injury." },
        { s: 'shinjiro', f: 'neutral', t: "...That was physical therapy." },
        { s: 'solar', f: 'happy', t: "Now you've got something to work toward." },
        { n: "Akihiko made a sound behind her like a laugh being strangled. Shinjiro didn't laugh. But his left hand, on the blanket, opened and closed once, slowly, and she knew him well enough by now to know that was the same thing." }
      ] }
    ] },
    { s: 'akihiko', f: 'serious', t: "The hospital called the dorm about Tuesday. About the roof." },
    { s: 'shinjiro', f: 'neutral', t: "Yeah? What'd they say." },
    { s: 'akihiko', f: 'serious', t: "They said a man who can't walk to the bathroom without a frame climbed six flights of fire stairs in the middle of the night and was found on the roof at one in the morning by a nurse who then had to have a sit down." },
    { s: 'shinjiro', f: 'neutral', t: "Sounds made up." },
    { s: 'akihiko', f: 'sad', t: "Shinji." },
    { n: "Shinjiro looked out of the window. There was a lot of sky out there, April sky, pale and clean, and somewhere under it, across the water, the school, and a well in its courtyard that nobody could see." },
    { s: 'shinjiro', f: 'neutral', t: "...I don't know how I got up there. Okay? I was asleep and then I was standing. And I could feel it. Whatever's out there. Like standing too close to a stove." },
    { s: 'shinjiro', f: 'neutral', t: "Somebody had to watch it. I was the only one up." },
    { n: "Akihiko sat down on the edge of the bed, heavily, the way he'd sat on the edge of this same bed for a year when the boy in it couldn't hear him, and put his hand on the blanket by Shinjiro's bad hand, not on it, beside it, close enough." },
    { s: 'akihiko', f: 'neutral', t: "You're not the only one up anymore." },
    { s: 'shinjiro', f: 'neutral', t: "...Yeah. I can see that. There's like thirty of you. Junpei texted me a picture of breakfast. I counted." },
    { s: 'shinjiro', f: 'neutral', t: "And you stayed." },
    { n: "He said it to Akihiko. Flat, not a question. Akihiko didn't answer for a moment." },
    { s: 'akihiko', f: 'neutral', t: "I postponed. It's different." },
    { s: 'shinjiro', f: 'neutral', t: "It's the same word in a nicer coat." },
    { n: "Then he looked at Solar, past Akihiko's shoulder, with something in his eyes that wasn't quite a question either, and she understood that he wasn't asking Akihiko why he'd stayed. He knew why. He was asking her if she knew." },
    { choose: [
      { t: "He didn't have to.", then: [
        { s: 'akihiko', f: 'blushing', t: "...I wanted to." },
        { s: 'shinjiro', f: 'neutral', t: "There it is." },
        { n: "Akihiko went red to the ears and stood up off the bed and said he was going to find a vending machine, and went, a little too fast, and Shinjiro watched him go with the most satisfied expression she'd ever seen on him." }
      ] },
      { t: "(Say nothing.)", then: [
        { n: "She said nothing. She looked at Akihiko's back, and at the hand beside Shinjiro's on the blanket, and said nothing at all, and Shinjiro nodded slowly, as if that were the answer he'd been expecting, and maybe the right one." }
      ] },
      { t: "And you? Are you staying?", then: [
        { s: 'shinjiro', f: 'neutral', t: "Me? I'm in a bed." },
        { s: 'shinjiro', f: 'neutral', t: "...Ask me when I can walk out of it. I'll tell you then." }
      ] }
    ] },
    { n: "At the end of visiting hours the nurse came round, a small brisk woman with her hair in a net, and stopped in the doorway, and looked at Shinjiro, and at the two of them, and at the empty bowl on his tray, and her whole face softened." },
    { n: "Shinjiro saw her see it. He looked away out of the window with his jaw set." },
    { s: 'shinjiro', f: 'neutral', t: "...Don't." },
    { n: "She didn't. She took the tray and went. On the way out, Solar heard her say to the nurse at the desk, low, not meaning to be overheard, that it was the first time he'd finished a bowl." },
    { n: "In the corridor, Akihiko didn't say anything for a long time. Then he said, without looking at her, that he was glad she'd come. Then he said it again, as if he hadn't heard himself the first time. Then he walked her home, slower than he'd walked her there." }
  ] },

  { id: 'eqx-first-midnight', date: '4/12', slot: 'late', consumes: true, title: 'nobody alone at midnight', place: 'Iwatodai Dorm · Roof', time: 'Late Night',
    cast: { solar: 'Solar', hanni: 'Hanni', hyein: 'Hyein', yunjin: 'Yunjin' },
    scene: [
    { bg: 'iwatodaidorm-roof-night', music: 'night' },
    { n: "Hanni's rule had a schedule now. It was on the whiteboard, on the old half, in Hanni's small fast handwriting under Mitsuru's VISITORS: a grid, seven nights, every night's midnight split into who was with who, so that nobody in the dorm, not one person, would be alone when the green came. Mitsuru had looked at it for a long time on Sunday morning and then initialed the bottom corner, which was as close as Mitsuru came to applause." },
    { n: "Monday night was the roof. Solar, Hanni, Hyein, Yunjin, four folding chairs from the laundry room in a row by the railing, two blankets, a thermos of barley tea Hanni had made too strong, and a bag of the spicy chips and a bag of the not-spicy chips, because Hyein still didn't know which one Solar was going to be." },
    { n: "It was eleven forty. It was cold, the clean cold of April at night, with the bay wind coming up over the railing smelling of salt, and Fuuka's planters lined up by the door. The city lay below them gold all the way to the water. Every window lit. Every car moving. Every ordinary thing doing the ordinary thing it was supposed to do, for twenty more minutes." },
    { s: 'hyein', f: 'neutral', t: "Is it weird that I'm excited? Not *excited*. That's the wrong word. Is there a word for it? When you know something's going to happen and you're scared of it and you've also brought chips?" },
    { s: 'yunjin', f: 'neutral', t: "Picnic." },
    { s: 'hyein', f: 'serious', t: "That's not— okay, it's a little bit a picnic." },
    { s: 'hanni', f: 'serious', t: "It's a watch. It's a *watch*. We're keeping watch. Like on a ship." },
    { s: 'yunjin', f: 'happy', t: "On a ship with chips." },
    { n: "Solar sat in the end chair with a blanket round her shoulders and Hyein's head on her arm and listened to them, and found that she was, in a small, careful way she didn't want to look at too closely in case it stopped, happy. Up on a roof, with her girls on one side of her and Yunjin on the other, three lives' worth of people who'd decided, on purpose, every night, that she wouldn't be on her own." },
    { choose: [
      { t: "Thank you for the rule.", then: [
        { s: 'hanni', f: 'flustered', t: "It's not for you. It's for everyone. It's a *general* rule." },
        { s: 'hyein', f: 'happy', t: "It's for you." },
        { s: 'hanni', f: 'serious', t: "It's mostly for you." }
      ] },
      { t: "(Pass the chips down the row.)", then: [
        { n: "She took a handful of the spicy ones and passed the bag down. Hyein watched her take them and made a small satisfied noise, like a scientist whose hypothesis had come back." },
        { s: 'hyein', f: 'happy', t: "Spicy. Tonight you're spicy. I'm writing it down." }
      ] },
      { t: "(Lean back and watch the city.)", then: [
        { n: "She leaned back in the chair and looked at the city, at all of it, lit, moving, going on, the way it went on whether she was in it or not. A year ago she'd stood on this roof and not known her own name. She knew all three of them now. She wasn't sure yet which of them was looking." }
      ] }
    ] },
    { n: "At eleven fifty-eight, without anyone saying anything, they all stopped talking." },
    { n: "Yunjin reached over and took Solar's hand. On the other side, Hyein took the other one, and Hanni reached across Hyein and put her hand on top of both of theirs, so they were a knot, the four of them, in a row of laundry chairs, holding on." },
    { s: 'hanni', f: 'serious', t: "Nobody lets go." },
    { s: 'yunjin', f: 'neutral', t: "Nobody was going to." },
    { dark: true },
    { music: 'mystery' },
    { n: "Midnight came the way it came now, all at once and without asking. The city went out. Every light, every window, street by street from the bay inward like somebody walking through a house switching them off, and behind the dark the green came up out of nowhere and settled over the roof and the chairs and the chips and the four of them like dust on furniture in a house nobody lived in anymore. The moon swelled in the sky, too big. The wind stopped mid-gust. Somewhere below, a car stood dead in the middle of the road with its headlights out." },
    { n: "Nobody let go." },
    { n: "Hyein's hand was shaking in hers, a little. Yunjin's wasn't shaking at all; it was very warm, and very hard, the grip of someone holding a rope over a drop. Hanni had her eyes shut." },
    { s: 'hyein', f: 'sad', t: "...It's so quiet." },
    { s: 'yunjin', f: 'neutral', t: "It's always quiet. That's its whole thing." },
    { n: "They sat in it. It went on. The green hummed, very low, the way it always had, the sound of a building that's alive and doesn't want you to know. Solar listened to it, and to the three of them breathing, and to her own heart, and counted, because she always counted, and was up to two hundred and something when she heard it." },
    { n: "Far off. Down in the town, somewhere toward the river, so far it might have been nothing. A knock." },
    { n: "Two knocks. Patient. Polite. Knuckles on wood. The way you'd knock on the door of a house where you knew someone was home." },
    { n: "Then nothing." },
    { n: "All four of them had heard it. She felt it go through the knot of their hands like current through a wire. Nobody said anything for a long time." },
    { s: 'hyein', f: 'surprised', t: "...Did someone just knock?" },
    { choose: [
      { t: "It's nothing.", then: [
        { n: "She heard herself say it, smooth, easy, the voice she used to tell people things were fine. It was a good voice. She'd had it in three lives. Hanni turned her head and looked at her in the green, and didn't say anything, and didn't believe a word of it, and squeezed her hand." }
      ] },
      { t: "Yes.", then: [
        { s: 'hanni', f: 'serious', t: "Then nobody's opening anything." },
        { s: 'hanni', f: 'serious', t: "New rule. Under the old rule. In the green, nobody opens a door. Not for anybody. I don't care who it sounds like." },
        { s: 'yunjin', f: 'neutral', t: "...Who would it sound like?" },
        { n: "Hanni didn't answer. She didn't know why she'd said it. Solar could see her not knowing, in the green, on her face." }
      ] },
      { t: "(Listen for it again.)", then: [
        { n: "She held her breath and listened. All of them did. The green hummed. The moon hung. Somewhere very far off, a dog barked once at nothing, and stopped, as if it had been told." },
        { n: "It didn't come again. That was almost worse." }
      ] }
    ] },
    { n: "Nobody let go until it was over. It took an hour, the way it always took an hour, and when the lights came back on all at once, street by street, from the river outward, and the wind started again mid-gust and the car below them coughed and drove off like nothing had happened, Hyein let out a breath so long it sounded like a balloon going down, and Yunjin laughed, short and rough, and Hanni opened her eyes." },
    { n: "They packed up the chairs. They took the chips. At the roof door, Hyein stopped and looked back at the town, toward the river, where the knock had come from, and stood there a moment longer than she needed to." },
    { s: 'hyein', f: 'neutral', t: "...It sounded like it was being nice." },
    { n: "Nobody answered her. Hanni put an arm round her and steered her in, and the door shut behind them, and Solar was last, and checked the latch twice, and didn't know why." }
  ] }
);
