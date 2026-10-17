/* Secrets: strangers2. Format in femc-social.js above secrets().
   More of the other Solar's year bleeding through (Kat's strangers: Incheon, the port, the Lee house). Builds on
   strangers.js; nobody here ever quite works out that she isn't their Solar. All on NEW threads, so nothing here
   lands on Yunjin's or the +82 10 thread and wipes a pending reply.
   - Places: 4/11, 4/13 "Closer" (Naganaki Shrine: a photographer who says closer, a voice that smells of nothing,
     somebody ten meters away). Saturdays 5/23, 7/25, 10/17, 1/23, 1/30 (Port Island harbor: Mrs. Ok's ship-supply
     shop, fourteen life rings, her father humming on the pier). Spring-tide nights 6/22, 8/20, 9/18, 11/16, 1/15
     (Moonlight Bridge: the bay goes out like Incheon's, the clam woman knows people by their feet).
     1/24, 1/29, 1/31 nights (Port Island back streets: red lanterns, Yunjin at mahjong, the rabbit socks).
   - Texts: Dal (010-4700-1126) sends the agasshi crossword clues, 5/16, 8/13, 9/30 (Chuseok), and saves the last
     clue for the step (strangers.js, 11/22). Mr. Oh (016-512-4471, his number in the book), any time 1/26 → 1/31.
   - Moments: 11/19 the Discman (laundry room; only once Haechan is met), 1/13 the wall with glass on top
     (doenjang over the wall, the sea smoking), 1/28 the mirror at ten to seven (her mother pins up her hair).
   Small objects only (jade ring mentioned, never given; Discman never opened; the socks are Yunjin's).
   Nothing enters the Lee house: that belongs to "low tide". */
FemcSocial.secrets({
  id: 'strangers2',
  cast: {
    'str2-dal': '010-4700-1126', 'str2-oh': '016-512-4471',
    'strp-yunjin': 'Yunjin', 'strp-lili': '???', 'strp-pyun': '???', 'strp-jang': '???', 'strp-voice': '???',
    'strp-ok': '???', 'strp-clam': '???', 'strp-gong': '???', 'strp-miseon': '???'
  },
  threads: {
    'str2-dal': { name: '010-4700-1126', members: ['str2-dal'] },
    'str2-oh': { name: '016-512-4471', members: ['str2-oh'] }
  },

  texts: [
    // 5/16 · a Saturday night. A big man and his daughter are stuck on the weekend puzzle.
    { id: 'str2-dal-1', thread: 'str2-dal', date: '5/16', window: 4, slot: 1, msgs: [
      { from: 'str2-dal', t: "Agasshi. It's Dal." },
      { from: 'str2-dal', t: "Sorry to bother you on a Saturday." },
      { from: 'str2-dal', t: "Seohyun is stuck on the weekend puzzle and so is her father." },
      { from: 'str2-dal', t: "5 letters. What the tide leaves on the step." },
      { ask: [
        { t: "Salt.", then: [
          { from: 'str2-dal', t: "SALT." },
          { from: 'str2-dal', t: "She says it doesn't count if I ask somebody." },
          { from: 'str2-dal', t: "I told her knowing who to ask is the whole game." }
        ] },
        { t: "Wrack. The seaweed.", then: [
          { from: 'str2-dal', t: "WRACK." },
          { from: 'str2-dal', t: "...It fits." },
          { from: 'str2-dal', t: "Where does the agasshi learn a word like that. Don't tell me. The international school." }
        ] },
        { t: "Who is this?", then: [
          { from: 'str2-dal', t: "Dal. Kim Daljoong." },
          { from: 'str2-dal', t: "From the step. With the coffee." },
          { from: 'str2-dal', t: "Ah. You're teasing me. Good. You don't tease me much anymore." }
        ] }
      ] },
      { from: 'str2-dal', t: "You answered fast." },
      { from: 'str2-dal', t: "Usually you make me wait until morning." }
    ], reply: [
      { t: "I couldn't sleep.", then: [
        { from: 'str2-dal', t: "Tide's out." },
        { from: 'str2-dal', t: "I know. Lock your window anyway." }
      ] },
      { t: "Tell Seohyun good luck.", then: [
        { from: 'str2-dal', t: "She says she doesn't need luck. She needs a smarter father." },
        { from: 'str2-dal', t: "She's fourteen. Everything she says has a knife in it." }
      ] }
    ] },

    // 8/13 · too hot to sleep on the quay.
    { id: 'str2-dal-2', thread: 'str2-dal', date: '8/13', window: 4, slot: 1, msgs: [
      { from: 'str2-dal', t: "Agasshi." },
      { from: 'str2-dal', t: "Too hot to sleep tonight. Half the 4th quay is sitting on the bollards with their shirts off. Don't come down." },
      { from: 'str2-dal', t: "5 letters. What other people count when they can't sleep." },
      { ask: [
        { t: "Sheep.", then: [
          { from: 'str2-dal', t: "SHEEP." },
          { from: 'str2-dal', t: "Other people. Not you. You count containers. You count the men at a table before you sit down. I've watched you do it since you were small." },
          { from: 'str2-dal', t: "Try sheep tonight. It's too hot for containers." }
        ] },
        { t: "Waves.", then: [
          { from: 'str2-dal', t: "WAVES." },
          { from: 'str2-dal', t: "...No. Seohyun did the down clue. It's SHEEP." },
          { from: 'str2-dal', t: "Waves is better, though. I'm writing it in the margin." }
        ] },
        { t: "What do you count?", then: [
          { from: 'str2-dal', t: "Me?" },
          { from: 'str2-dal', t: "Boxes in the puzzle. The girls' teeth, when they were babies. Days to payday." },
          { from: 'str2-dal', t: "It works. Try it." }
        ] }
      ] },
      { from: 'str2-dal', t: "Seoyeon left another hair tie in the car. Strawberry. That's eleven this summer." }
    ], reply: [
      { t: "Give it back to her.", then: [
        { from: 'str2-dal', t: "I always do. She loses it again." },
        { from: 'str2-dal', t: "It's our system." }
      ] },
      { t: "Goodnight, Dal.", then: [
        { from: 'str2-dal', t: "Night, agasshi." },
        { from: 'str2-dal', t: "Lock your window. Those windows are older than you." }
      ] }
    ] },

    // 9/30 · Chuseok (in 2012 the moon was full). He saves the last clue for the step.
    { id: 'str2-dal-3', thread: 'str2-dal', date: '9/30', window: 4, msgs: [
      { from: 'str2-dal', t: "Happy Chuseok, agasshi." },
      { from: 'str2-dal', t: "The girls ate 31 songpyeon between them. Seohyun counted. Seoyeon says Seohyun cheated." },
      { from: 'str2-dal', t: "Okja says thank you for the pears. She says the Chairman always sends too many." },
      { from: 'str2-dal', t: "One more and I'll leave you alone." },
      { from: 'str2-dal', t: "4 letters. A debt that cannot be repaid." },
      { from: 'str2-dal', t: "No. Wait. Don't answer. I want to get this one myself." },
      { ask: [
        { t: "(Don't answer.)", then: [
          { from: 'str2-dal', t: "Thank you." },
          { from: 'str2-dal', t: "Everybody always tells me. Nobody lets a man think." }
        ] },
        { t: "I already know it.", then: [
          { from: 'str2-dal', t: "Of course you do." },
          { from: 'str2-dal', t: "Don't. When I've got it, I'll ask you on the step, and you can tell me if I'm right." }
        ] },
        { t: "Is it rent?", then: [
          { from: 'str2-dal', t: "RENT is English. You and your English." },
          { from: 'str2-dal', t: "No helping. I'll get it." }
        ] }
      ] },
      { from: 'str2-dal', t: "Wear a coat to the ancestors' table. Your mother would have a fit." }
    ], reply: [
      { t: "I will.", then: [
        { from: 'str2-dal', t: "You won't." },
        { from: 'str2-dal', t: "Happy Chuseok." }
      ] },
      { t: "Happy Chuseok, Dal.", then: [
        { from: 'str2-dal', t: "Big moon tonight. Make a wish." },
        { from: 'str2-dal', t: "Don't tell me what. It doesn't work if you tell." }
      ] }
    ] },

    // 1/26 → 1/31 (dated, so a backlog of undated texts can't push it past the last day) · the driver who never
    // says please, except in texts. Somebody is waiting at a gate.
    { id: 'str2-oh-1', thread: 'str2-oh', date: '1/26', window: 5, stamp: 'ten-and-two', msgs: [
      { from: 'str2-oh', t: "home now. pls" },
      { from: 'str2-oh', t: "side gate. engine on" },
      { ask: [
        { t: "I can't tonight.", then: [
          { from: 'str2-oh', t: "ok" },
          { from: 'str2-oh', t: "i tell madam ur at the huhs" }
        ] },
        { t: "Who is this?", then: [
          { from: 'str2-oh', t: "oh" },
          { from: 'str2-oh', t: "agasshi changed phone again" },
          { from: 'str2-oh', t: "016-512-4471. save it this time" }
        ] },
        { t: "Five minutes.", then: [
          { from: 'str2-oh', t: "take ten" },
          { from: 'str2-oh', t: "its icy on the hill" }
        ] }
      ] },
      { from: 'str2-oh', t: "barley candy in glove box" },
      { from: 'str2-oh', t: "one for every red light. like before" }
    ], reply: [
      { t: "Thank you, Mr. Oh.", then: [
        { from: 'str2-oh', t: "dont thank" },
        { from: 'str2-oh', t: "ten and two. waiting" }
      ] },
      { t: "(Don't answer. Go to the window.)", then: [
        { sys: 'Nobody is idling at the dorm gate. The street below is empty.' },
        { from: 'str2-oh', t: "ok" },
        { from: 'str2-oh', t: "i wait" }
      ] }
    ] }
  ],

  moments: [
    // 11/19 · only once Haechan is met. A Discman with a cracked lid, and a jacket that smells of the sea.
    { id: 'str2-m-discman', date: '11/19', slot: 1, unlock: { met: ['haechan'] }, label: 'A strange night', title: 'Dead batteries', place: 'Iwatodai Dorm · Laundry Room', music: 'mystery', scene: [
      { n: "Haechan wasn't on the dryer. That was the first wrong thing, because at this hour he was always on the dryer, headphones round his neck, pretending very hard that he hadn't been waiting for anybody." },
      { n: "The second wrong thing was the jacket. It hung off the end of the folding table, black and padded and heavy, a work jacket, the kind men wore on docks in winter, with a good shirt folded underneath it as if somebody had taken both off in a hurry and meant to come straight back. It smelled of diesel, and salt wind, and cinnamon gum, and under all of that, faintly, of cigarettes somebody was pretending he'd quit." },
      { n: "On top of the shirt sat a Discman. Old, the silver worn gray at the corners, the lid cracked straight across and never fixed, a pair of cheap headphones wound round it so tightly the cord had kinked. It had been carried in a pocket for a very long time. You could tell by the shine." },
      { choose: [
        { t: "(Put the headphones on.)", then: [
          { n: "Nothing. Dead batteries, she thought, and knew it the way she knew her own phone number, which was strange, because she had never seen the thing before in her life. Dead for years. Kept anyway. Carried anyway." },
          { n: "She stood there with them on for a while regardless, listening to nothing, and the nothing wasn't quite the same as silence. It was more like a room someone had just left." }
        ] },
        { t: "(Open the lid.)", then: [
          { n: "Her thumb was on the catch, and then it wasn't. It felt like opening somebody's letter. Whatever was in there, he hadn't played it in a long time, and he hadn't thrown it away either, and those two facts sitting side by side were none of her business." }
        ] },
        { t: "(Touch the jacket.)", then: [
          { n: "The lining had torn at the inside pocket and been mended, badly, in black thread, with stitches far too big, the way men mend things at three in the morning when nobody's watching." },
          { n: "Her fingers knew how she'd have done it. Small and close, a knot you could pull tight with your teeth. She had never stitched anything in her life. Her fingers didn't seem to care." }
        ] }
      ] },
      { n: "Behind her the door opened, and the light flickered the way it always did, and when she looked back at the table there was nothing on it but a basket of somebody's towels." },
      { s: 'haechan', f: 'neutral', t: "...You okay? You look like you saw a ghost." },
      { choose: [
        { t: "Do you own a Discman?", then: [
          { s: 'haechan', f: 'surprised', t: "A what?" },
          { s: 'solar', f: 'serious', t: "A Discman. Silver. The lid's cracked." },
          { n: "He went quiet. Not his usual quiet, the lazy kind he wore like a hood. The other kind, the kind a person goes when they hear their own name called from a room that ought to be empty." },
          { s: 'haechan', f: 'serious', t: "...No." },
          { n: "Then, after a moment, to the dryer and not to her." },
          { s: 'haechan', f: 'sad', t: "Batteries'd be dead anyway." }
        ] },
        { t: "Somebody left a jacket in here.", then: [
          { s: 'haechan', f: 'neutral', t: "Junpei leaves everything in here." },
          { n: "It hadn't been Junpei's. Junpei's jackets smelled of cup noodles and body spray. That one had smelled like the sea." },
          { s: 'haechan', f: 'sad', t: "...Did it smell like diesel?" },
          { n: "She didn't answer. He didn't ask again." }
        ] },
        { t: "(Say nothing.)", then: [
          { n: "He hopped up onto the dryer and patted the space next to him without looking, and she sat, and he smelled faintly of cinnamon, which she decided, firmly, not to think about." }
        ] }
      ] },
      { n: "They sat there a long time before he spoke again, and when he did it was only to ask if she was cold, which she wasn't, and to put his hoodie round her shoulders anyway, the way you'd return something to somebody who'd left it behind." }
    ] },

    // 1/13 · the coldest night. A wall with glass on top, a gate man, doenjang over the wall, the bay smoking.
    { id: 'str2-m-gate', date: '1/13', slot: 1, label: 'A strange night', title: 'Glass on the wall', place: 'Iwatodai Dorm · Front · Night', music: 'night', scene: [
      { n: "It was the coldest night of the winter so far, the kind of cold that has a sound, a high thin ringing somewhere behind the ears, and she was walking home from the station with her scarf pulled up over her mouth when the dorm wasn't there." },
      { n: "In its place was a wall. Long and high and gray, running the length of the street, and set into the concrete along the top, all the way along, broken glass. Green bottle glass and brown, glittering under the streetlamp as if somebody, once, had meant it to be pretty." },
      { n: "The street didn't go down to the station anymore either. It fell away down a hill she had never climbed, to curled tile roofs and a long string of red lanterns swaying in the wind, and past them, the harbor. The water was smoking. Pale steam lifted off the whole black bay at once like a bath somebody had run too hot, which water only does in the very worst cold, once in a generation." },
      { n: "Beside an iron gate, an old man in a padded coat got up out of a folding chair, a little paraffin heater ticking at his feet, and took off his hat. His left hand had three fingers on it. He held the hat in that one." },
      { s: 'strp-gong', t: "Agasshi. You're late." },
      { s: 'strp-gong', t: "Your mother cooked tonight. Don't say anything about it. The whole house is pretending not to notice." },
      { n: "The smell came over the wall a second later. Doenjang, and garlic, and anchovy stock gone dark from simmering, a smell so ordinary and so warm she felt it in the backs of her knees before she understood it at all." },
      { n: "Above the wall, at the corner of the house, one window was lit. In it, the shadow of a man on the telephone, winding the cord slowly round one finger and letting it go, winding it and letting it go." },
      { choose: [
        { t: "(Go in.)", then: [
          { n: "She put her hand on the gate. The iron was so cold it burned. It didn't move. It wasn't locked, she could see the bolt drawn back. It simply didn't move for her, the way a door won't open in a dream however hard you lean on it." },
          { n: "The old man looked at her properly then, for the first time, at the ponytail and the uniform and the shape of her face under the lamp, and something in his own face dipped, very slightly, like a step that wasn't where his foot expected it." },
          { s: 'strp-gong', t: "...Ah. Forgive an old man. The light's bad out here." }
        ] },
        { t: "Who's he talking to?", then: [
          { s: 'strp-gong', t: "The Chairman? Everybody. Nobody. That telephone hasn't had a night off since November." },
          { n: "Then he looked at her properly, at the ponytail and the uniform, and put his hat back on slowly, as if he'd taken it off for the wrong funeral." },
          { s: 'strp-gong', t: "...Forgive me. The light's bad." }
        ] },
        { t: "(Bow, and keep walking.)", then: [
          { n: "She bowed. He bowed back, deeper, the way you bow to the boss's daughter, and then straightened with a small frown, as though she'd done it slightly wrong. As though somebody else had taught her." },
          { s: 'strp-gong', t: "Mind the ice on the hill, agasshi." }
        ] }
      ] },
      { n: "Somewhere inside the house, somebody laughed, short and surprised, the way people laugh when they didn't expect to, at a table where nobody had laughed in a while." },
      { n: "Then the wall was the dorm again, plain and lit and ordinary, and the street went down to the station like it always had. Her hand still stung from the iron. Out past the station, for the first time all winter, the bay was smoking." }
    ] },

    // 1/28 · ten to seven, a Thursday. A mirror, and somebody's mother.
    { id: 'str2-m-mirror', date: '1/28', slot: 1, label: 'A strange night', title: 'The first thing people see', place: 'Iwatodai Dorm · Hallway', music: 'mystery', stamp: 'first-thing', scene: [
      { n: "The clock over the lounge said ten to seven, and the dorm was making its evening noises, the television and the kettle and somebody losing at something upstairs. She was on her way to the stairs, and she glanced into the long mirror by the front door the way everybody did on their way past, and there was a woman standing behind her." },
      { n: "Not in the hall. In the mirror. Fifty, perhaps, and beautiful in the way that takes a great deal of work and never lets any of it show; a cream cardigan, a single strand of pearls, black hair pinned up in a chignon so smooth it looked lacquered. She wasn't looking at Solar's face. She was looking at Solar's hair." },
      { s: 'strp-miseon', t: "Hold still." },
      { n: "Solar held still. She couldn't have said why. There are voices you obey before you've decided to, and this was one of them, cool and low and perfectly level, the voice of somebody who had never once in her life needed to raise it." },
      { n: "In the glass the woman's hands came up. Solar felt her hair tie go, felt cold quick fingers in her hair, twisting it, folding it up against the back of her head, and pins going in one after another from a cardigan pocket without the hands ever once looking for them." },
      { s: 'strp-miseon', t: "A Lee daughter's hair is the first thing people see." },
      { choose: [
        { t: "And the last thing they forget.", then: [
          { n: "She didn't know where it came from. It came out in her own voice, flat and a little bored, like the second half of a sentence she'd been finishing since she was small." },
          { s: 'strp-miseon', t: "Good. So you do listen." }
        ] },
        { t: "I'm not a Lee.", then: [
          { s: 'strp-miseon', t: "Nobody is, at first. You're born into it or you marry into it, and either way it takes years." },
          { n: "She said it to the chignon, moving one pin a millimeter to the left." }
        ] },
        { t: "(Watch her hands.)", then: [
          { n: "A thin gold band. No polish. Very sure, and very fast, and they were the only part of the woman that seemed to be in any kind of hurry, as if they had somewhere to be at seven o'clock and resented every second of this." }
        ] }
      ] },
      { n: "The last pin went in. Then the woman's eyes came up, finally, and met hers in the glass, and stopped." },
      { n: "It wasn't surprise, exactly. It was the look of someone reaching for a stair in the dark and finding it one step lower than it ought to be." },
      { s: 'strp-miseon', t: "...Your eyes." },
      { choose: [
        { t: "What about them?", then: [
          { s: 'strp-miseon', t: "Nothing. They're the right shape." },
          { n: "She said it the way she might have said a hem was crooked. Then her gaze went down, to Solar's right hand, resting on the banister." }
        ] },
        { t: "(Look away.)", then: [
          { n: "Solar looked away first. In the glass, the woman's gaze went down instead, unhurried, to Solar's right hand, resting on the banister." }
        ] }
      ] },
      { s: 'strp-miseon', t: "Where is your grandmother's ring?" },
      { n: "Solar looked at her own hand. There was nothing on it. There never had been. For one second, though, that bare finger felt colder than the rest of her, the particular cold of skin that has worn something for years and has only just been left alone." },
      { s: 'strp-miseon', t: "Wear it. People notice what's missing much faster than what's there." },
      { n: "When she turned around the hall was empty, and the kettle clicked off in the kitchen, and somebody upstairs groaned at a television." },
      { n: "Her hair stayed up all evening. Nobody mentioned it, though Yukari looked twice. When she took it down at bed there were four pins, long and black and plain, and her fingers smelled of a perfume she had never owned, the kind she somehow knew she'd hated at fourteen and would end up wearing anyway, in public, for somebody else's sake." }
    ] }
  ],

  places: [
    // 4/11 and 4/13: cherry blossoms, and the thirteenth of April. A photographer who only knows one word.
    { id: 'str2-p-closer', area: 'Naganaki Shrine', title: 'A portrait with nobody in it', dates: ['4/11', '4/13'], slot: 0,
      hint: "Under the cherry trees at the shrine, a photographer has set up lights for two people. Nobody's standing in them.",
      label: 'Somewhere else', place: 'Naganaki Shrine · Under the Cherry Trees', music: 'mystery', scene: [
      { n: "The cherry trees behind the shrine were at the very top of their bloom, the week everybody pretends to be too busy to notice and then stops in the street anyway, and under them somebody had set up an entire photo shoot. Two reflectors, a light on a stand, a folding stool, a garment bag hung from a branch. A thin, anxious young woman with a tape measure round her neck. A man in an expensive coat and a lavender cashmere scarf, in April, looking through a very expensive camera at nobody." },
      { s: 'strp-pyun', t: "No. No, no. You. Yes, you, the uniform. Stand there. On the tape." },
      { n: "There was a cross of white tape on the gravel. She stood on it. She couldn't have told you why. He had the voice of somebody who had told a great many people where to stand, and been right about it." },
      { s: 'strp-pyun', t: "Closer." },
      { n: "Closer to nothing. There was nobody beside her. There was, she would have sworn it, somebody beside her, a person-shaped quiet just at her right shoulder, and the strangest thing about it was the smell, which was nothing. Not soap, not cologne, not even the faint warm smell that every living person has. Nothing at all, so completely that it was the loudest thing in the garden." },
      { s: 'strp-pyun', t: "Closer." },
      { choose: [
        { t: "(Step closer to nobody.)", then: [
          { n: "She took half a step. A sleeve brushed hers, cool fine wool, and a voice spoke very close to her ear, low and even and so courteous it was almost a bow." },
          { s: 'strp-voice', t: "I apologize. He'll keep saying it until we do." },
          { n: "She understood every word. It wasn't in Japanese." }
        ] },
        { t: "(Smile for the camera.)", then: [
          { s: 'strp-pyun', t: "No. Not that one. That's the one you give your mother's friends. Give me the other one." },
          { n: "She didn't know she had another one. That struck her as so ridiculous that she laughed, a real one, short and surprised, and the shutter went three times in a row." },
          { s: 'strp-pyun', t: "That's the cover." }
        ] },
        { t: "I think you've got the wrong girl.", then: [
          { s: 'strp-pyun', t: "Everybody's the wrong girl until the light's right. Closer." }
        ] }
      ] },
      { n: "The young woman with the tape measure darted in, took Solar's right hand without asking, and measured her ring finger with the frantic care of someone who'd been shouted at about ring fingers before." },
      { s: 'strp-jang', t: "Right hand... oh. There's usually a ring." },
      { s: 'strp-jang', t: "Sorry. I'll just write ring." },
      { n: "The shutter went again. The photographer looked at the little screen on the back of the camera, and frowned, and tilted it, and frowned harder, and for a moment Solar saw it over his shoulder: herself under the trees, alone, and beside her a blur the exact height of a person, a place where the petals hadn't fallen." },
      { s: 'strp-pyun', t: "Lovely. Very sad. Next." },
      { n: "When she looked up there was no stool and no light and no garment bag, only the trees and the gravel and petals coming down on everything like slow snow. She stayed there longer than she meant to, with the feeling, which followed her home and which she couldn't account for, of somebody standing exactly ten meters away by the stone lantern, not looking at her, on purpose." }
    ] },

    // Saturdays: a ship-supply shop behind a fish market, where a little girl used to sit while her mother was at the hairdresser.
    { id: 'str2-p-chandler', area: 'Port Island', title: 'A shop with fourteen life rings', dates: ['5/23', '7/25', '10/17', '1/23', '1/30'], slot: 0,
      hint: "Between two warehouses on the harbor, a narrow shop you've never noticed has fourteen orange life rings in its window.",
      label: 'Somewhere else', place: 'Port Island · Harbor · A Ship-Supply Shop', music: 'tender', stamp: 'something-to-count', scene: [
      { n: "It was wedged between two warehouses on the harbor road where she'd have sworn there was only a fence: a narrow shopfront with a fogged window and a sun-bleached sign in three alphabets, none of them Japanese. In the window hung orange life rings, two rows of them, so faded by years of light that they'd gone the color of old tangerine peel." },
      { n: "The bell over the door didn't ring. Inside it smelled of tar and hemp and cold metal and salt, and of barley tea. There were drawers of shackles, coils of rope taller than she was, a wire cage padlocked shut, a kerosene stove ticking, a television the size of a lunchbox playing a Saturday drama with the sound low. An old woman in a padded vest and a knitted hat sat behind the counter with reading glasses hanging on a beaded chain, eating rice out of a metal tin." },
      { s: 'strp-ok', t: "There you are. Sit. Your father's down on the pier. He said an hour, so that's two." },
      { n: "There was a wooden crate by the stove, ARCTIC NAVY ROPE stenciled on its side. Solar sat on it. It fit her exactly, the way a chair you've grown out of fits, knees too high, elbows on them, and something in her chest went quiet in a way she didn't like at all, because she had never been in this shop before in her life." },
      { s: 'strp-ok', t: "Squid?" },
      { choose: [
        { t: "(Eat the squid.)", then: [
          { n: "Dried, shredded, out of a paper bag, terrible and chewy and much too salty. She ate four strips without stopping and reached for a fifth before she noticed she was doing it." }
        ] },
        { t: "I'm sorry, I think I'm in the wrong shop.", then: [
          { s: 'strp-ok', t: "Everybody's in the wrong shop. Nobody needs a shackle on a Saturday. Sit." },
          { n: "She was already sitting." }
        ] },
        { t: "(Count the life rings.)", then: [
          { n: "Fourteen. She knew before she'd finished, the way you know how many stairs there are in your own house." }
        ] }
      ] },
      { s: 'strp-ok', t: "Go on, count them for me. My eyes." },
      { s: 'solar', f: 'neutral', t: "...Fourteen." },
      { s: 'strp-ok', t: "Still fourteen. Never sold a single one." },
      { choose: [
        { t: "Why not?", then: [
          { s: 'strp-ok', t: "So you'd have something to count." },
          { n: "She said it to her rice tin, as if it were the most ordinary thing in the world, and Solar had to look at the stove for a while." }
        ] },
        { t: "(Don't ask.)", then: [
          { n: "She didn't ask. She had a feeling she already knew, and that knowing would be worse." }
        ] }
      ] },
      { n: "The old woman lifted the glasses off the beaded chain, finally, put them on, and looked at Solar properly for the first time." },
      { s: 'strp-ok', t: "Hm. You've grown." },
      { s: 'strp-ok', t: "Into somebody else, a bit. That happens. My son did it in Busan. He doesn't call either." },
      { n: "From out on the pier, through the door, came a man humming. Low and light and a little rough, an old trot song about a harbor and somebody coming back to it, unhurried, the way a man hums when he has finished his business and is walking slowly on purpose." },
      { s: 'strp-ok', t: "That's him. He'll come in and buy rope he doesn't need. He always does, when he wants to sit down for a minute." },
      { choose: [
        { t: "(Wait for him.)", then: [
          { n: "The humming came closer and stopped just outside the door, as if whoever it was had paused there to take off his glasses and polish them. She waited. The door didn't open. When she finally opened it herself there was only the Port Island harbor, gray and windy and full of gulls, and nobody on the road at all." }
        ] },
        { t: "(Go before he comes in.)", then: [
          { n: "She didn't know why. Only that if he came through that door and looked at her the way the old woman just had, with that small dip of not quite, she wouldn't be able to stand it. She went out the way she'd come, and the harbor road was the harbor road, and nobody was humming anything." }
        ] }
      ] },
      { n: "There was a paper bag of dried squid in her blazer pocket. On the walk home she counted the life rings on the harbor railings. There were three. It didn't feel like enough." }
    ] },

    // Spring-tide nights: under the bridge the bay goes out like Incheon's, nine meters, and somebody is listening to the mud.
    { id: 'str2-p-tide', area: 'Moonlight Bridge', title: 'The water has gone out', dates: ['6/22', '8/20', '9/18', '11/16', '1/15'], slot: 1,
      hint: "Under Moonlight Bridge tonight the bay has gone out. Much, much too far out.",
      label: 'Somewhere else', place: 'Moonlight Bridge · Under the Bridge · Low Water', music: 'night', scene: [
      { n: "The bay had gone out. Not the way the tide goes out here, a polite meter of wet sand under the seawall. Gone, all of it, as far as she could see, and in its place lay mud, miles of it, gray going silver under the bridge lights, ribbed and wet and faintly breathing." },
      { n: "The bridge didn't stop where it should, either. Its lights went on and on out over the mud, much farther than Moonlight Bridge had ever gone, a long lit thread across the dark toward a glow on the horizon that could only have been an airport." },
      { n: "It smelled of salt and iron and something sweetish and rotten underneath. The mud ticked and popped softly all over, little sounds, crabs and air. And everywhere the water had left things behind: a coil of rope, bottle caps, a shopping cart on its side, a single woman's shoe, a left one. A rubber boot standing perfectly upright, full of mud, as if someone had stepped out of it and kept walking." },
      { n: "Solar stood at the very top of the steps down from the seawall and found she couldn't go any farther. She had never been afraid of water in her life. She was afraid now, a cold, old, very specific fear, black water at night, water with no bottom to it, a fear somebody else had carried here and set down at the edge for her to hold." },
      { n: "Out on the mud, a lamp was moving. An old kerosene lamp, swinging low, and under it a woman bent nearly double with a towel knotted on her head and a rake over one shoulder, coming toward the seawall without once looking where she put her feet. When she got close, Solar saw why. Her eyes were milk-white. She wasn't looking at anything at all." },
      { s: 'strp-clam', t: "Who's that walking." },
      { s: 'strp-clam', t: "Stand still. Let me hear you." },
      { choose: [
        { t: "(Stand still.)", then: [
          { n: "She stood still. The old woman tilted her head the way you'd tilt it toward a radio." },
          { s: 'strp-clam', t: "Hm. Light. Quick. You put your heels down like you're sorry about it." },
          { s: 'strp-clam', t: "Good feet. Not the ones I was listening for." }
        ] },
        { t: "Who were you listening for?", then: [
          { s: 'strp-clam', t: "A girl who comes all the way down to the water and never once goes near it." },
          { s: 'strp-clam', t: "You walk like her. You're not her. Her feet are always counting." }
        ] },
        { t: "Are you all right out there?", then: [
          { s: 'strp-clam', t: "Forty years on this mud. Ask the mud if it's all right." }
        ] }
      ] },
      { n: "She sniffed, twice, short and practical, like a cook checking a pot." },
      { s: 'strp-clam', t: "Soap. School soap. Nothing else on you." },
      { s: 'strp-clam', t: "Good. Keep it that way." },
      { s: 'strp-clam', t: "Tide turns soon. It comes back faster than a man can run. Go home before it does." },
      { choose: [
        { t: "(Step down onto the mud.)", then: [
          { n: "Her foot didn't move. Her whole body said no, very calmly, in a voice that wasn't hers, and she listened to it the way you listen to somebody who's been right about you before." }
        ] },
        { t: "What does the tide give back?", then: [
          { s: 'strp-clam', t: "Everything, sooner or later. Shoes. Keys. Whatever you dropped." },
          { s: 'strp-clam', t: "Never when you want it. Never in the order you want." }
        ] },
        { t: "(Go home.)", then: [
          { n: "She went up the steps without turning her back on the mud, which was a thing she'd never done before and did now without thinking, like someone who'd been taught." }
        ] }
      ] },
      { n: "When she looked back from the top of the seawall the lamp had gone out, and the bay was full again, black and flat and ordinary, lapping at the concrete as if it had never been anywhere else, and the lights of the bridge stopped exactly where they always stopped." }
    ] },

    // Late January nights: red lanterns, a mahjong back room, and the other Sol's best friend, losing.
    { id: 'str2-p-lanterns', area: 'Port Island', title: 'An alley of red lanterns', dates: ['1/24', '1/29', '1/31'], slot: 1,
      hint: "Behind the station tonight, one back street is hung with red paper lanterns, and somebody inside is shouting about mahjong.",
      label: 'Somewhere else', place: 'Port Island · Back Streets · Under the Red Lanterns', music: 'night', stamp: 'wifey', scene: [
      { n: "The back street behind Port Island Station was strung from end to end with red paper lanterns, hundreds of them, swaying on their wires, and it was snowing a little, so the snow came down red through the light. The signs were in Chinese and Korean. None of them were in Japanese. The air smelled of black-bean sauce and frying dough and, under all of it, the sea." },
      { n: "Halfway down, a back door stood open on a slice of yellow light and the clatter of tiles being shuffled, and over the top of the clatter, louder than all of it, a voice." },
      { s: 'strp-yunjin', f: 'serious', t: "Auntie Wu, I swear to God, if Lili's passing you tiles under the table again..." },
      { n: "A back room. A card table, a kerosene heater, three old women with cigarettes and impassive faces, a girl of about fourteen with a Hello Kitty phone case and the specific innocence of somebody who is absolutely cheating. And a young woman with gold sunglasses pushed up into her hair, losing, loudly, who glanced at the door for half a second and went straight back to her tiles." },
      { s: 'strp-yunjin', f: 'surprised', t: "WIFEY." },
      { s: 'strp-yunjin', f: 'happy', t: "Thank God. Sit. Sit, sit, sit. You're my luck. I'm down forty thousand won and this child is a criminal." },
      { s: 'strp-lili', t: "I'm not cheating, unni. You're just bad." },
      { choose: [
        { t: "(Sit. Take the tile your hand goes to.)", then: [
          { n: "She sat. She didn't know the rules. Her hand went to a tile anyway, as if it knew where it lived, and turned it over, and the three old women all stopped smoking at once." },
          { s: 'strp-yunjin', f: 'happy', t: "THAT'S MY WIFE." }
        ] },
        { t: "I don't know how to play.", then: [
          { s: 'strp-yunjin', f: 'neutral', t: "Since when? You taught me. You cheat worse than Lili." },
          { n: "Her hands were already sorting the tiles into neat little rows while she said it. She looked down at them with genuine interest." }
        ] },
        { t: "(Count the tiles.)", then: [
          { n: "The wall, the hands, the discards. She counted the whole table before she'd decided to, and came out one short, and looked, without meaning anything by it, at the cuff of the girl's sleeve." },
          { s: 'strp-yunjin', f: 'serious', t: "I KNEW it." }
        ] }
      ] },
      { n: "Then the young woman looked up properly. Pushed the sunglasses back. Looked at the hair, and the uniform, and last of all at Solar's face, for a long time, the way you look at a word you've written so many times it's stopped looking like a word." },
      { s: 'strp-yunjin', f: 'surprised', t: "...Okay. Your hair's up wrong. You're in a school uniform. And your eyes are..." },
      { s: 'strp-yunjin', f: 'serious', t: "You're not her." },
      { choose: [
        { t: "No.", then: [
          { s: 'strp-yunjin', f: 'sad', t: "...Yeah. I know. She'd never let me lose forty thousand won without saying something mean about it." }
        ] },
        { t: "Who's 'her'?", then: [
          { s: 'strp-yunjin', f: 'neutral', t: "My best friend. My wife. The love of my life. Don't tell her I said that, it'll go to her head." }
        ] },
        { t: "I'm Solar.", then: [
          { s: 'strp-yunjin', f: 'surprised', t: "...Shut up." },
          { s: 'strp-yunjin', f: 'serious', t: "No. Seriously. Shut up." }
        ] }
      ] },
      { s: 'strp-yunjin', f: 'flustered', t: "...Japan Sol?" },
      { n: "She said it like a joke, the way you say a ghost's name out loud in an empty house to prove there isn't one." },
      { s: 'strp-yunjin', f: 'neutral', t: "You're freezing. Your feet. I can see them from here, they're blue." },
      { n: "She dug in the pocket of her puffer and came out with a pair of socks, rolled into a ball. Pink, with little gray rabbits on them." },
      { s: 'strp-yunjin', f: 'happy', t: "She leaves these at my place. Every single time. I've got, like, nine pairs." },
      { choose: [
        { t: "(Take them.)", then: [
          { n: "They were warm from her pocket. Solar held them in both hands like something that might get away." }
        ] },
        { t: "I can't take her socks.", then: [
          { s: 'strp-yunjin', f: 'neutral', t: "You can. I'm the one who buys them. Take them." },
          { n: "She pressed them into Solar's hands and closed Solar's fingers over them, firmly, the way you'd make a child hold onto a bus fare." }
        ] }
      ] },
      { n: "Someone at the table said her name, sharp, with a cigarette in it, and she turned round to shout back, Auntie, I'm COMING, and when Solar looked up from the socks there was no table and no heater and no lanterns." },
      { n: "Only the back street behind the station, ordinary and wet, and snow coming down white under a white streetlamp, and a pair of pink socks with gray rabbits on them in her hands, still warm." }
    ] }
  ]
});
