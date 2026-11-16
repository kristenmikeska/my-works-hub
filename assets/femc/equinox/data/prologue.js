/* Equinox opening: scene lines (format: scene.js). The prologue, 4/6 Dark Hour to the morning of 4/7. */
window.FEMC_GAME_PROLOGUE = {
  id: 'prologue', title: 'already taken',
  cast: {
    solar: 'Solar', haechan: 'Haechan', akihiko: 'Akihiko', mitsuru: 'Mitsuru', junpei: 'Junpei', yukari: 'Yukari',
    fuuka: 'Fuuka', ken: 'Ken', aigis: 'Aigis', koromaru: 'Koromaru', shinjiro: 'Shinjiro', hanni: 'Hanni', hyein: 'Hyein',
    yunjin: 'Yunjin', jungwon: 'Jungwon', jihoon: 'Jihoon', cherry: 'Cherry', minji: 'Minji', jaehyun: 'Jaehyun',
    elizabeth: 'Elizabeth'
  },
  scene: [
    { place: 'Iwatodai Dorm · Second Floor', time: 'Midnight', bg: 'iwatodaidorm-hallway', music: 'mystery', date: '4/6' },
    { away: true },

    { ifFlag: 'eqx-from-stay-shinjiro', then: [
      { n: "At one minute to midnight on the sixth of April the dormitory in Iwatodai was asleep the way old buildings sleep, with the pipes ticking in the walls and the refrigerator downstairs humming to itself and the wind off the bay trying the windows one at a time, patient, like somebody going down a row of doors to see which one was unlocked." },
      { n: "On the third floor, Sanada Akihiko woke up on his feet." },
      { n: "He didn't remember getting up. He was standing in the middle of his room in the dark in a T-shirt and track pants with his hands already in fists, the blood going in his ears like the bell had rung, and he didn't know why, only that something had been let go of somewhere, and that it had been his job to hold it." },
      { n: "He had his shoes on before he'd decided anything. He took the stairs three at a time. On the second floor he slowed, because the door at the end of the hall was standing open and the light in it was on, and that room had been dark for a month, and he stood there with his hand on the banister for one second longer than he had." },
      { n: "Then he ran. The hospital was eleven minutes at a run. He had made it in nine, once." },
      { n: "He was halfway down the hill when the hour came back, and it was the wrong color." },
      { n: "Not at midnight. At two minutes past, late, as if the hour had stood outside the door and waited, politely, for someone to finish leaving before it came in. The streetlights went out in a line. The sky didn't go green. It went red, a thick, dark, clotted red, the red of something left too long in a dish, and it came down over the roofs and lay in the road like it had weight. Ahead of him, all down the street, the parked cars went still in a way parked cars shouldn't be able to, and the city put on its old hour the way you'd put on a coat you swore you'd given away, and found that somebody had been wearing it since, and that it was stained." },
      { n: "Akihiko stopped running. He stood in the middle of the road with his breath steaming and looked up at a moon that was bigger than it had any right to be, swollen and dark red, the color of a bruise a week old, and said a word he didn't usually say, out loud, to nobody." },
      { s: 'akihiko', f: 'serious', t: "...It used to be green." },
      { n: "Then he turned round. Not toward the hospital. Toward the bay, and the island across it, and the school, where something he couldn't have named was pulling at him like a hand on his sleeve, and he hated himself for it all the way there, and went anyway." }
    ], else: [
      { ifFlag: 'eqx-from-stay', then: [
        { place: 'Iwatodai Dorm · Roof', time: 'Midnight', bg: 'iwatodaidorm-roof-night', soft: true },
        { n: "It had been one minute." },
        { n: "That was the thing nobody on the roof could get past, later, when they tried to tell it. Not the bells, which had stopped. Not the three lights, which had gone out of the sky as if they'd never been in it. Just the clock in the stairwell, which had ticked over to twelve oh one while she was still there, and then to twelve oh two while she wasn't, and the cold, and the city lying gold all the way down to the bay like nothing had happened to it at all." },
        { ifFlag: 'eqx-from-stay-akihiko', then: [
          { n: "Akihiko was still at the railing with his arms closed around nothing. Nobody had asked him to open them. Nobody was going to." }
        ], else: [
          { n: "Mitsuru and Junpei were still on their knees with their hands out and closed, the way you'd hold the two ends of a rope across a gap, and neither of them had moved, and nobody had asked them to." }
        ] },
        { n: "Then the gold went out of the city." },
        { n: "All at once, from the bay inward, the lights going down street by street like somebody walking through a house switching them off, and behind them, coming up out of nowhere, the hour. Not the old green. Red. A rust-dark, bled-out red that came up the streets from the bay like a tide coming in across a floor, and smelled, even up here, of old pennies, and a moon too big for the sky, the color of a scab. The Dark Hour, which had ended a year ago and stayed ended, came back at two minutes past midnight, late, as if it had stood outside the door and waited, politely, for someone to finish leaving before it came in." },
        { s: 'junpei', f: 'surprised', t: "...No. Nope. No, no, no, it's *over*, we did that, that's done—" },
        { s: 'yukari', f: 'surprised', t: "Junpei. Junpei, look at it. Why is it *red*?" },
        { n: "Nobody answered her. They stood on the roof in it with their hands still out, and the red sat on their faces and their pajamas and the railing and the pots of tomatoes like a stain coming up through a carpet, and the quiet was the old quiet, the dead stopped quiet of the hour, and it was not the same. It was listening." },
        { n: "Downstairs, through the roof and two floors of concrete, they all heard the same small sound at once. A click. A lamp, turning itself on, in a room at the end of the second-floor hall." }
      ], else: [
        { ifFlag: 'eqx-from-true', then: [
          { n: "At one minute to midnight on the sixth of April the dormitory in Iwatodai was asleep the way old buildings sleep, with the pipes ticking in the walls and the refrigerator downstairs humming to itself and the wind off the bay trying the windows one at a time, patient, like somebody going down a row of doors to see which one was unlocked." },
          { n: "At the end of the second-floor hall there was a room nobody used. The bed was made up, square. There was a uniform in the closet, pressed, in a size that didn't belong to anyone who lived there. The Kirijo Group's cleaners came on Thursdays and dusted it, because there was an instruction on file to dust it, and nobody in the building could have told you who'd written the instruction, or when, or why it made them all walk a little quieter past that door." },
          { n: "Junpei called it the guest room, the one time it came up, and then didn't eat his dinner, and couldn't have told you why that either." }
        ], else: [
          { n: "At one minute to midnight on the sixth of April the dormitory in Iwatodai was asleep the way old buildings sleep, with the pipes ticking in the walls and the refrigerator downstairs humming to itself and the wind off the bay trying the windows one at a time, patient, like somebody going down a row of doors to see which one was unlocked." },
          { n: "At the end of the second-floor hall there was a room they had kept made up since March. The bed square. The uniform in the closet with the ribbon folded over the hanger. Nobody had decided to keep it. It was just that nobody had decided not to, and every week somebody ran the vacuum in there and opened the window for an hour and shut it again, and nobody said who, and nobody asked." }
        ] },
        // CG: eqx-room-light — an empty, neatly made-up dorm bedroom at the end of a dark hallway, door half open, its desk lamp on by itself, dark red moonlight at the window.
        { cg: 'eqx-room-light' },
        { n: "At midnight, its light came on." },
        { n: "Nobody touched it. The lamp on the desk clicked, and the bulb warmed from orange to white, and the light came out under the half-open door and lay down the hall in a long pale stripe like something set out on purpose for someone to walk on." },
        { n: "Then the hour came, and it was red." },
        { n: "It came the way it used to, all at once and without asking, the hum of the refrigerator cutting off mid-breath, the clock over the television stopping with its hand on the twelve, the streetlights outside going out in a line all the way down the hill, and the sky outside every window turning red. Not the green they knew. A deep, clotted red, the red under a bandage, rust and wine and something worse, around a moon that was far too big and the wrong color, dark as liver. For a year it hadn't come. When it had come, it had come green. The building remembered how to brace for the green. It didn't know what to do with this." },
        { cg: null },
        { dark: true },
        { music: 'badfeeling' },
        { n: "In the red, the dorm made a sound it had never once made before. A long, slow creak, top floor to bottom, every board in turn, the way a house settles in a storm. Except there was no storm. It sounded like a house shifting its weight to listen." },
        { n: "On the third floor, Sanada Akihiko woke up on his feet." },
        { ifFlag: 'eqx-from-true', then: [
          { n: "He didn't remember getting up. He was standing in the middle of his room with his hands in fists and his heart going like the last round, and the window was red, and he didn't know why. The red was wrong. He knew that much the way you know a stair is missing in the dark: the hour was over, and when it had been anything, it had been green, and it was neither. There was nothing in the room. There was nothing in the hall. He'd been dreaming about a rope, maybe, or a girl, or a girl holding a rope, and it had gone out of his head the way dreams go, all at once, like water through fingers." },
          { n: "His gloves were on the desk where he'd thrown them after practice. He picked one up without knowing why, for something to hold, and something fell out of it onto the floor." },
          // CG: eqx-ribbon-glove — a boy's hand in dark red moonlight holding a red boxing glove, a small pink ribbon fallen out of it onto the floorboards.
          { cg: 'eqx-ribbon-glove' },
          { n: "A ribbon. Pink, narrow, the kind you'd tie the end of a braid with. It wasn't his. It wasn't anyone's he knew. He bent and picked it up and it was warm, warm like it had been in someone's hand a second ago, and the second his fingers closed on it he remembered." },
          { n: "Everything. All of it. All at once, the way you remember you've left the stove on, a year of it landing on him like the floor coming up. The tower. The girl with no surname in the room at the end of the hall. The last train. The roof. Her name." },
          { n: "He sat down on the floor because his legs had made the decision for him, and held the ribbon, and found he was breathing like he'd gone twelve rounds." },
          { cg: null },
          { s: 'akihiko', f: 'sad-2', t: "...How did I forget you." },
          { s: 'akihiko', f: 'serious', t: "How did *we*— Solar. *Solar.*" },
          { n: "He was up and out the door before he'd finished saying it, and the light at the end of the second-floor hall was on, and the room was empty, and he stood in the doorway in the red with a ribbon in his fist and understood, the way you understand a punch after it lands, that she hadn't come back to it. Something had just told him she was gone." }
        ], else: [
          { n: "He didn't remember getting up. He was standing in the middle of his room in a T-shirt and track pants with his hands already in fists and the blood going in his ears like the bell had rung, and he didn't know why, only that it was the hour, and that the hour was over, and that he'd been here before, exactly here, a year ago, on his feet in the dark with no idea what had woken him." },
          { n: "He went to it. The street below was the color of the inside of a mouth. The moon hung over the bay, swollen, dark red, much too low, and it looked, he thought, and hated himself for thinking it, like something that had recently been fed." },
          { s: 'akihiko', f: 'serious', t: "...It used to be green." },
          { n: "He took the stairs down three at a time. On the second floor he stopped." },
          { n: "The light was on in her room." },
          { n: "He stood in the doorway for a long time. The bed was made. The uniform was in the closet. The window was shut. The lamp was on and the room was empty and it was exactly the way they'd kept it and it was completely different, the way a stage is different when the lights come up, as if the room knew something it hadn't known an hour ago and was waiting to be told it could stop." },
          { s: 'akihiko', f: 'serious', t: "...Solar?" },
          { n: "Nothing. The pipes ticked. Somewhere outside, much farther away than the room, so far it might have been under the ground, he thought he heard a bell." },
          { n: "Then the pipes stopped ticking. All of them at once, every pipe in every wall of the building, the way crickets stop in a field when something big walks into it. He stood in the doorway of an empty room in the red, in the silence, and didn't breathe, and the silence didn't either." }
        ] }
      ] }
    ] },

    { away: false },
    { place: 'The Well · The Bottom', time: 'The Dark Hour', bg: 'eqx-well-bottom', music: 'mystery' },
    { dateGlitch: true }, // nobody knows what day it is: the date box can't settle until the lounge
    // BG: well-bottom — the bottom of a deep round stone shaft, a ring of wet black stone around still water that reflects a dark red night sky and a huge red moon, a frayed gold rope hanging down out of the dark above.
    // CG: eqx-well-waking — Solar lying on her back on wet stone at the bottom of a well, a reflected night sky in the water around her, a gold rope hanging far above her face.
    { cg: 'eqx-well-waking' },
    { n: "The first thing was the cold, and she knew it." },
    { n: "That was what made her open her eyes. Not the cold itself, which came up through the stone into her shoulder blades and the backs of her knees, wet and old, the cold of a place that had never once in its life been warm. It was the knowing. She had woken up in the cold before. She had woken up on a floor in the dark with nothing in her pockets and nothing in her head, once, a year ago, or a lifetime, and she remembered it, and that was the first thing she'd ever remembered on waking that she hadn't had to be told." },
    { n: "She was lying in a ring of black stone, curved, slick, the kind of stone that's been wet so long it's forgotten how to be dry, and when she turned her head there was water an inch from her cheek, flat and still and perfectly black, and in the water there was the sky." },
    { n: "Not a reflection of a sky above her. She looked up, and above her was dark, just dark, a long shaft of it going up and up into nothing. The sky was underneath. In the water, under the stone, under her, a night sky the color of a clot, dark rust-red going black at the edges, with a moon in it far too big to be any moon she'd ever looked at, swollen and red as an eye that hasn't slept, so that lying there she had the unsteady, swimming feeling of being on the ceiling of the world, looking down into something's face." },
    { n: "Red. Her stomach turned over slowly, before she let herself think the word. The hour she knew was green. She had lived in the green for a year, fought in it, been carried home through it half-asleep on somebody's back. She had never once seen it this color. It looked like the same room with the lights changed, and the sameness was the worst part, the way a familiar face is worst when one thing about it is wrong." },
    { cg: null },
    { n: "She sat up. Slowly. Her body suggested slowly, and she listened to it, because she knew that too, now. She knew a great many things." },
    { n: "The first one that came back wasn't her name." },
    { ifFlag: 'eqx-from-runners-haechan', then: [
      { n: "It was fireworks. Gold and green, coming apart over Fifth Avenue, and she was watching them through her own hands, because her hands had been going transparent, and the light had come through them like they were made of paper, and somebody had been holding them so tight it hurt." }
    ], else: [ { ifFlag: 'eqx-from-runners-minji', then: [
      { n: "It was a little red light. The light on the front of a camera, still running, a steady red dot in the dark, and someone behind it who'd kept it pointed at her when everyone else had looked away, because that was the only way she knew how to hold on." }
    ], else: [ { ifFlag: 'eqx-from-runners-cover', then: [
      { n: "It was two hands. Hanni's and Hyein's, one on each of hers, closed on her before anyone else's had been, small and cold and absolutely refusing, and her going out of them anyway, like water." }
    ], else: [ { ifFlag: 'eqx-from-strangers-haechan', then: [
      { n: "It was the tide stopping. The whole flat gray harbor holding its breath, the water halfway up the mudflats and not moving, and his left hand, his left, the one he kept for her, closed on hers." }
    ], else: [ { ifFlag: 'eqx-from-strangers-jungwon', then: [
      { n: "It was a character. One, written in a careful hand, the brush lifted cleanly at the end of every stroke. *近.* Near. Someone had told her near, and meant it, and she had believed him." }
    ], else: [ { ifFlag: 'eqx-from-strangers-family', then: [
      { n: "It was the seventh stair. The one that creaked, in the house she grew up in, and the light at the top of the stairs left on, the way it was always left on, so that whoever came home late would know somebody had been waiting." }
    ], else: [ { ifFlag: 'eqx-from-hoax-jungwon', then: [
      { n: "It was Jungwon's hand. And a voice coming through the bleed between one world and the next, a voice she knew, saying her name like a question it already knew the answer to." }
    ], else: [ { ifFlag: 'eqx-from-hoax-jihoon', then: [
      { n: "It was two people holding on at once. Two grips, two directions, nobody letting go, and her stretched between them like the last thing either of them was ever going to agree about." }
    ], else: [ { ifFlag: 'eqx-from-hoax-council', then: [
      { n: "It was the gym lights. Still on, all of them, humming over an empty floor at midnight, the way they'd been left on, the way nobody had been able to bring themselves to switch them off." }
    ], else: [ { ifFlag: 'eqx-from-stay-akihiko', then: [
      { n: "It was his arms. The roof, and the cold, and his chin over her shoulder, and his breath in her ear, and one word, the one he'd held back all year. *Stay.*" }
    ], else: [ { ifFlag: 'eqx-from-stay-shinjiro', then: [
      { n: "It was a hand closing on her wrist on a hospital blanket. A bad hand, the right one, a year's work to hold a spoon, and it had closed on her anyway, and it hadn't opened." }
    ], else: [ { ifFlag: 'eqx-from-stay-sees', then: [
      { n: "It was Mitsuru's grip on one arm and Junpei's on the other. The two of them on their knees on the roof, pulling against nothing, and a dog barking, and everybody she'd lived with for a year saying her name at once." }
    ], else: [ { ifFlag: 'eqx-from-true', then: [
      { n: "It was three ceilings. Three rooms, three beds, three different cracks in three different plasters, one after the other. Then a ship's horn. Then snow. Then a dog barking at nothing in a yard. And then none of them, all at once, the way a slide goes out of a projector." }
    ], else: [
      { n: "It was hands. A lot of hands, closed on her, all of them holding as hard as they knew how, and her going out of them anyway, the way smoke goes through a fence." }
    ] } ] } ] } ] } ] } ] } ] } ] } ] } ] } ] } ] } ] },
    { n: "Then the rest of it came, and it came all at once." },
    { n: "Solar Lee, Syracuse, the sorority house and the fraternity across the lawn and the boy on the rooftop with his hood up. Solar in Incheon, the harbor, the house with the seventh stair, a whole other family's name in her mouth. Solar Kim, Hanlim, the council room, the forum. Three of her. And the fourth thing, the one she'd been a year ago with no name at all, the green, the tower, the dorm with the room at the end of the hall, the people who'd taken her in when she was nobody." },
    { n: "She remembered all of it. Every face. Every name. The order things had happened in, the way she'd felt about each of them, which ones she owed and which ones owed her, the precise weight of every hand that had ever been on her." },
    { n: "Last time, she'd woken up with nothing, and everyone around her had been a stranger. This time she'd woken up with everything." },
    { n: "And there was nobody here." },
    { n: "Nobody, and no sound. No wind, because there was no wind down here. No traffic, no hum, no far-off train. It was a silence so complete she could hear the small wet click of her own eyelids when she blinked, and the part of her that had counted the exits of every room in three lives understood, coldly, that a silence like this wasn't empty. It was being held. The way you hold your breath on the other side of a door, so whoever's in the room won't know you're there." },
    { choose: [
      { t: "(Call out.)", then: [
        { n: "She said *hello* into the dark, which was stupid, and it came back to her off the stone six or seven times, smaller each time, until the last one was hardly more than a breath and sounded nothing like her voice at all. It sounded like someone a long way up, answering. She didn't do it again." }
      ] },
      { t: "(Check her pockets.)", then: [
        { n: "Her hands went to her pockets before she told them to, the way they always had. She was in the clothes she'd been taken in, damp at the hem now, and the pockets were empty. No phone. No keys. And no Evoker, which was the one she'd been looking for, she realized, the cold gun-weight she'd carried at her hip for a year and stopped noticing, the way you stop noticing a ring. Her hip felt naked without it." }
      ] },
      { t: "(Stay still and listen.)", then: [
        { n: "She held her breath and listened. Water, dripping somewhere, a slow tick, tick. Her own pulse, which was louder than she'd have liked. And under that, under everything, so low it was more in the stone than in the air, something breathing. Long and slow and very, very big, the breath of something asleep, or pretending to be." }
      ] }
    ] },
    { n: "There was a rope." },
    { n: "She saw it when her eyes had had time, hanging down out of the dark above her, too high to reach, a long braided line of something that caught the red from the water and gave it back gold, the only clean color down here. It went up and up out of sight. In places it was frayed, the strands coming loose and standing out from it like hair, and in one place, about the height of three of her, it had been mended, clumsily, knotted back together by somebody who hadn't known how and had done it anyway." },
    { n: "She stood under it with her face tipped up for a long moment and didn't know why her throat had gone tight. It was just a rope." },
    { n: "Under her feet, under the water, under the sky in the water, the big thing breathed out." },
    { music: 'badfeeling' },
    { n: "The water moved." },
    { n: "Not a ripple. A rising. The flat black skin of it bulged in three places at once and broke, and things came up out of it without a splash, the way smoke comes up out of a grate, black and wet-looking and wrong in their joints, with masks on their faces. Not the blue masks she knew. These were white, and smooth, and every one of them had been painted with a woman's face, a kind face, a mother's face, smiling." },
    { n: "The paint was wrong in small ways, the way a child paints a face from memory. The smiles a little too wide. The eyes a little too far apart. The lashes drawn on one at a time, too many of them. And on the nearest one there was a crease at the corner of the mouth, a particular crease, that she had seen before, bending over her bed in the dark when she was small, and the lurch of knowing it went through her like nausea, and then it was gone before she could catch whose it was." },
    { n: "They made no sound. But the water around them did, very softly, a sound like someone humming a lullaby with their mouth closed." },
    { n: "They didn't attack. Not at first. They tilted their painted heads at her, and one of them lifted a long black hand, palm up, the way you'd hold a hand out at a door to be given something." },
    { choose: [
      { t: "(Back up against the stone.)", then: [
        { n: "She backed up until the stone was cold against her shoulder blades and there was nowhere else to back up to, and counted, because she always counted. Three of them. One way out, and it was straight up." }
      ] },
      { t: "I don't have anything for you.", then: [
        { n: "The hand stayed out. Patient. Like it had heard that before, from a great many people, and found it was usually not quite true." }
      ] },
      { t: "(Reach for an Evoker that isn't there.)", then: [
        { n: "Her hand went to her hip, and closed on nothing, and the nearest one watched it go, and she would have sworn, later, that under the paint it smiled." }
      ] }
    ] },
    { n: "Then the hand closed, and they came at her." },
    { "battle": { "id": "eqx-well-1", "kind": "scripted", "script": "eqx-well-1", "segment": 1, "title": "The Well · The Bottom", "desc": "No Evoker, no way out but up, and the water at the bottom of the world has started asking for things." } },
    { n: "It went wrong fast." },
    { n: "She had no gun and no Persona and a year of muscle memory screaming at her to use both, and she ducked the first swipe on instinct and the second one on luck, and the third one caught her across the shoulder and put her down on the wet stone so hard her teeth clicked. The cold went through her clothes in a sheet. One of them stood over her with its painted mother's face tilted, curious, and lifted its hand again, open, waiting." },
    { n: "Up close it smelled of wet stone and rice flour, and under that of something sweet that had been left out too long and gone off. Its hand came down toward her face, slowly, the way you'd reach to brush a child's hair out of her eyes, and the fingers were too long, and there were too many joints in them, and she could not, for a second, make her body move." },
    { n: "Her own hand went up to her temple." },
    { n: "Empty. Two fingers, pressed to her skin, shaped around a gun that wasn't there, the way a child points a finger and says *bang*. She knew it was stupid as she did it. She did it anyway, because her hand had done it a hundred times in that other year and didn't know how not to, and she shut her eyes, and she said the only name she had left that was all hers." },
    { s: 'solar', f: 'serious', t: "...Haenim." },
    { music: 'awakening' },
    { summon: 'haenim', name: 'Haenim', sub: 'No Evoker. She came anyway.' },
    { n: "There was no shot. No glass breaking behind her eyes. Just warmth, all at once, coming up through her like a bath being run, and light coming out of the stone around her in a ring, and when she opened her eyes, she was there." },
    { n: "Pink and gold, tall and slender, the gown that glinted like armor, the crown of ribbons and pins. The veil. And the veil was lifted, just barely, a finger's width at the hem, so that there was a thin line of light at the bottom of it, the edge of a jaw, the corner of a mouth Solar knew from mirrors. It hung there, lifted, and didn't fall back." },
    { n: "The charms at her sash didn't ring. The bell, the green ring on its red cord, the little star, all of them hung perfectly still and silent, like things that had done what they were made for and been allowed to rest." },
    { n: "Haenim lifted one hand, and the golden rope came out of it and cracked across the water like a whip, and the nearest painted face came apart into black ash, soft as burnt paper." },
    { n: "The other two backed off. Not far. They sank to their shoulders in the black water and watched her with their kind painted faces, and behind them, the water bulged again, in four places, five, six." },
    { n: "Not all of them came up. Some of them only rose as far as the eyes, and stayed there, just under the skin of the water with their painted faces tilted up at her, smiling, the red sky shining through the water over their cheeks, like faces looking up out of a bath." },
    { n: "Haenim's light flickered. Solar felt it in her own chest, a wobble, like a candle in a draft. There wasn't enough of her. There'd been enough of her for one, or two. There wasn't enough of her for what was coming up out of the water now, and she knew that the way she knew her own name, which was to say, all three of them." },
    { n: "Then something came down the rope." },

    { away: true },
    { place: 'Iwatodai Dorm · Front Steps', time: 'The Dark Hour', bg: 'iwatodaidorm-front-night', music: 'mystery' },
    // CG: eqx-holders-wake — two young women in party dresses and winter coats sitting on the front steps of a dormitory at night under a dark red sky, snow melting on their shoulders, holding hands.
    { cg: 'eqx-holders-wake' },
    { n: "Up in the town, in the red, people who weren't coffins were waking up." },
    { n: "Everyone else was a coffin. They stood where people had been, on the pavements and at the bus stop and in the doorway of the konbini, upright and black, the way they always had in the hour. They'd only ever looked like furniture. In the red they looked wet. They shone. And every one of them, Hanni noticed, and wished she hadn't, was turned to face the same way: across the water, toward the island, toward the school, like a crowd at a door waiting for something to come out." },
    { n: "Hanni Pham woke sitting on the front steps of a dormitory she knew, with her best friend's hand in hers and snow on her shoulders that had fallen somewhere else. It melted while she watched it. Her dress was the one she'd worn to a party on the other side of an ocean, black, too thin for April, and her tights had a ladder up one shin that hadn't been there at eleven fifty-nine, and the air smelled of salt and old pennies instead of cold and champagne, and she knew exactly where she was." },
    { n: "Beside her, Hyein had both hands closed in her lap around nothing, so tight her knuckles had gone white, and was staring at them." },
    { s: 'hyein', f: 'surprised', t: "...Hanni. Hanni, we're— this is the— why is it *red*? It was green. It was always green, why is it the wrong—" },
    { s: 'hanni', f: 'serious', t: "I know. Don't let go of me." },
    { s: 'hyein', f: 'sad', t: "I'm not *holding* anything. That's the problem. I was holding her and now I'm holding— I'm holding *air*, Hanni—" },
    { ifFlag: 'eqx-from-runners-haechan', then: [
      { s: 'hyein', f: 'sad', t: "I was still saying *no*. When she went. I think I'm still saying it." }
    ] },
    { ifFlag: 'eqx-from-runners-cover', then: [
      { n: "Hanni looked down at her own right hand, which had been on Solar's left a minute ago, and was still shaped like it." },
      { s: 'hanni', f: 'sad', t: "We held on. That was the whole plan. Nobody said holding on would take us *with* her." }
    ] },
    { n: "Hanni turned her head and looked up at the dorm, at the second floor, at the one window that was lit, gold, in a building where every other light had gone out. She didn't say anything. She didn't have to. Hyein followed her eyes and made a small sound, the kind you make when you put your weight on an ankle you thought was fine." },

    { cg: null },
    { place: 'Iwatodai · Riverside', time: 'The Dark Hour', bg: 'iwatodai-riverside-night', soft: true },
    { n: "Huh Yunjin woke on her feet by the river with her hands closed on nothing, and said, before she knew she was awake, in the low gravel voice she only used when nobody was supposed to be listening," },
    { s: 'yunjin', f: 'sad', t: "Sol." },
    { n: "The river didn't answer. The river didn't move. It lay in its concrete banks flat and dark red and still as glass, like a long cut that had stopped bleeding, not a ripple on it, the way no river anywhere should be able to lie, and Yunjin looked at it for a long moment and then at her hands and then put them in her pockets, hard, like she was locking something in a drawer." },
    { s: 'yunjin', f: 'serious', t: "...Okay. Okay. Where'd you put her." },
    { n: "She asked the river. She asked it like it owed her money." },
    { n: "Far out in the middle, under the red skin of the water, something turned over. Once. Slowly. The way a sleeper turns over in a bed, and settles, and is still. Yunjin took one step back from the railing, and then another, and didn't turn her back on the river until she was all the way across the road." },

    { place: 'Kirijo Guesthouse · Gate', time: 'The Dark Hour', bg: 'kirijo-guesthouse-night', soft: true },
    { n: "Yang Jungwon woke at the guesthouse gate with his hand on the latch, in a coat buttoned to the throat, and the first thing he did was look at his watch, because he always looked at his watch." },
    { ifFlag: 'eqx-from-strangers-jungwon', then: [
      { n: "It had stopped. He remembered it stopping, at the moment she went, the second hand frozen between one mark and the next like it had forgotten what came after. He'd thought that was the end of it. He'd thought, if he was honest, that he'd keep the watch like that, stopped, in a drawer, for the rest of his life." },
      { n: "Now, in the red, under his thumb, it started again. Tick. Tick. He stood there and counted twelve of them before he could breathe properly." }
    ], else: [
      { n: "It was running. Everything else in the street had stopped, the cars, the streetlights, a moth on the lamp above the gate frozen mid-wingbeat, and his watch went on ticking under his thumb, steady, a small stubborn noise in a world that had gone silent, like it hadn't been told." }
    ] },
    { ifFlag: 'eqx-from-strangers-haechan', then: [
      { n: "His right hand ached. Not the way a hand aches from cold. The way a hand aches from holding something too hard for too long and then being made to let go of it, all the way up the wrist and into the bone. He flexed it, once, and put it in his coat, and didn't look at it again." }
    ] },
    { ifFlag: 'eqx-from-hoax-jungwon', then: [
      { n: "He stood very still at the gate. He was listening for something, the way you listen for a car in the drive. Then his face did something it almost never did in front of anyone, which was nothing at all, carefully." },
      { s: 'jungwon', f: 'serious', t: "...He came." },
      { n: "He said it to nobody. There was nobody to say it to. He didn't say who." }
    ] },

    { place: 'Iwatodai Strip', time: 'The Dark Hour', bg: 'iwatodai-strip-night', soft: true },
    { n: "Park Jihoon woke flat on his back under the arcade sign on the Strip with Cherry sitting on his stomach, which was, he would later say, a bold way to come back from the dead." },
    { s: 'cherry', f: 'serious', t: "Get up. Get *up*, it's the dark thing, it's the— why's it *red*, it's never been *red*— don't look at me like that, you know what it is—" },
    { s: 'jihoon', f: 'surprised', t: "I know what it is. I'm *lying* in it. Off. Off, Cherry, you're crushing my— where is she. Where is she, was she with you—" },
    { s: 'cherry', f: 'sad', t: "...No. She wasn't with anybody." },
    { n: "Jihoon stopped struggling. He lay there under the dead arcade sign with its letters gone black and looked up past Cherry's head at the moon, which was too big, and the color of rust, and for once in his life didn't have anything to say about it." },

    { place: 'Iwatodai Station', time: 'The Dark Hour', bg: 'darkhour-station-platform', soft: true },
    { n: "Kim Minji woke on the monorail platform with her camera in her hands and the little red light still on." },
    { n: "She didn't stop it. That was the first thing she thought about, later: that she hadn't, even for a second, thought about stopping it. She turned it in her hands and looked at the screen, at the clip still running, the last thing it had seen before the red came, and played it back with her thumb, slow, frame by frame, the way she checked everything." },
    { ifFlag: 'eqx-from-runners-minji', then: [
      // CG: eqx-minji-frame — a camera's small screen held in two hands, showing a snowy rooftop at night and a thin gold thread rising straight up out of the frame.
      { cg: 'eqx-minji-frame' },
      { n: "The roof. The snow. Her own breath fogging the corner of the lens. And going up out of the top of the frame, thin as a hair and gold, straight up, where nothing should have been, a thread. It was in every frame. It was in every frame after she was gone." },
      { s: 'minji', f: 'serious', t: "...I've got you. I've got where you went." },
      { cg: null }
    ], else: [
      { n: "Nothing she could use. Snow, and dark, and a blur of light, and then red, all at once, as if the lens had been dipped in wine. She played it again anyway. Then again. It was something to do with her hands." }
    ] },
    { n: "Down the platform, Lee Jaehyun was standing by the timetable with his coat hanging open like he'd been interrupted putting it on, looking at the departures board, which had stopped. He didn't look surprised. Solar's brother hardly ever looked surprised. He looked like a man waiting for a train he'd been told was cancelled and had decided, personally, not to accept it." },
    { s: 'jaehyun', f: 'neutral', t: "The board's stopped at midnight." },
    { s: 'minji', f: 'neutral', t: "Everything's stopped at midnight." },
    { s: 'jaehyun', f: 'serious', t: "Then we walk." },
    { n: "By the ticket gates a coffin stood where a man had been reading a newspaper a minute before. Minji walked past it close enough to touch it, and didn't, and heard, she would have sworn on anything, very faintly, from inside the lid, somebody breathing. Slowly. In, and out. In time with her." },

    { ifFlag: 'eqx-from-stay', then: [
      { ifFlag: 'eqx-from-stay-shinjiro', else: [
        { place: 'Iwatodai Dorm · Roof', time: 'The Dark Hour', bg: 'iwatodaidorm-roof-night', soft: true },
        { n: "On the dormitory roof, nobody had gone in." },
        { n: "Fuuka was kneeling by the railing with her eyes shut, the way she'd knelt since the door, reaching. She'd said it a minute ago, before the red, in a voice that had gone small and flat with the shock of it. She said it again now, slower, as if the hour itself had given her more room to look and she'd looked, and it hadn't helped." },
        { s: 'fuuka', f: 'sad', t: "...She isn't anywhere I can reach." },
        { s: 'fuuka', f: 'surprised', t: "But there's— wait. There's something. Under the school. Something *open*, Mitsuru-senpai, like a— like a hole in the floor of everything—" },
        { n: "Akihiko was already gone. Nobody had seen him go. Mitsuru looked at the stairwell door, standing open, still swinging, and closed her eyes for exactly one second, and opened them." },
        { s: 'mitsuru', f: 'serious', t: "...Of course. Of *course* he has." }
      ] }
    ] },
    { ifFlag: 'eqx-from-stay-akihiko', else: [ { ifFlag: 'eqx-from-stay-sees', else: [
      { place: 'Iwatodai Dorm · Stairs', time: 'The Dark Hour', bg: 'iwatodaidorm-stairs-night', soft: true },
      { n: "In the dormitory, they came down the stairs in their pajamas." },
      { n: "Junpei first, in a T-shirt with a hole in the armpit and one sock, swearing under his breath on every step. Yukari in a cardigan pulled on over her nightclothes, her hair in her face. Fuuka with her glasses crooked. Ken in his pajamas with the cartoon planets on them, which he'd have been mortified about on any other night, and Aigis behind him with one hand hovering over his shoulder, not touching it, and Koromaru going past all of them and down to the hall with his nails clicking on the floor, and stopping, and whining, at the front door, at nothing, every hair down his spine standing up. Mitsuru last, in a robe, very straight, with her Evoker in her hand. She had taken it out of a locked drawer she'd sworn, a year ago, she wouldn't open again." },
      { ifFlag: 'eqx-from-true', then: [
        { n: "None of them could have said why they were up. That was the strange part. Nobody said *her*. Nobody said a name at all. They stood on the stairs in the red with the specific, prickling unease of people who've all walked into a room at once and forgotten what they came in for, and Junpei rubbed his chest like something had hit him there, and Yukari found she was looking at the door at the end of the second-floor hall and couldn't stop." },
        { s: 'yukari', f: 'serious', t: "...Why is that light on." },
        { s: 'junpei', f: 'neutral', t: "It's the guest room. It's— it's just the guest room, Yuka-tan. Right? It's nobody's." },
        { n: "He said it, and his voice did something on *nobody's*, cracked straight down the middle like a plate, and he didn't know why, and that frightened him more than the red did." },
        { n: "Fuuka had her eyes shut. She was reaching, the way she used to reach in the tower, for something she couldn't name, and her face crumpled, slowly, the way a face does in the middle of a dream about losing something you can't remember having." },
        { s: 'fuuka', f: 'sad', t: "...I'm looking for someone. I don't know who. She isn't anywhere I can reach." }
      ], else: [
        { n: "Nobody had to ask. They all knew what the hour meant, even in the wrong color, and they all knew which door was lit, and none of them went near it, not yet, as if looking into that room and finding it empty would make something true that wasn't true yet." },
        { s: 'junpei', f: 'surprised', t: "It's back. Why is it back? Why is it *red*? It was never red. We *finished* this. We did the whole thing, we did the— it's supposed to be *over*—" },
        { s: 'yukari', f: 'sad', t: "Junpei. The light's on in her room." },
        { s: 'junpei', f: 'sad', t: "...Yeah. I know. I saw. I'm trying not to see." },
        { n: "Fuuka had sat down on a step with her eyes shut. She was reaching, the way she used to reach in the tower, all of her, out over the city and the bay and the dark water past the island, and they all watched her face, and they all knew before she said it." },
        { s: 'fuuka', f: 'sad', t: "...She isn't anywhere I can reach." }
      ] },
      { s: 'fuuka', f: 'surprised', t: "But there's— wait. There's something. Under the school. Something *open*, Mitsuru-senpai, like a— like a hole in the floor of everything—" },
      { n: "Mitsuru looked up the stairs, at the third floor, at Akihiko's door, which was standing open on an empty room. She closed her eyes for exactly one second, and opened them." },
      { s: 'mitsuru', f: 'serious', t: "...Of course. Of *course* he has." },
      { s: 'aigis', f: 'serious', t: "Shall I go after him?" },
      { s: 'mitsuru', f: 'neutral', t: "No. Nobody goes anywhere alone tonight. Get dressed. All of you. Five minutes." },
      { s: 'ken', f: 'serious', t: "Is it her? Is it Solar-san?" },
      { n: "Mitsuru didn't answer him. She was already halfway up the stairs. It was the first time in two years any of them had seen her not answer Ken." }
    ] } ] },

    { place: 'Tatsumi Memorial Hospital · Roof', time: 'The Dark Hour', bg: 'hospital-rooftop', soft: true },
    { n: "On the roof of Tatsumi Memorial, six floors above a ward he'd been told he wouldn't leave on his own feet until summer, Aragaki Shinjiro woke up standing at the railing in a hospital gown and a borrowed cardigan with his right hand shaking." },
    { n: "He didn't know how he'd got up the stairs. He'd needed a nurse and a frame to get to the bathroom that afternoon. His right leg was a sack of wet sand and his right arm wasn't much better, and he was standing anyway, holding the railing with his left hand, and looking out at the red over the city, at the school on its island, at something going on there he could feel more than see." },
    { ifFlag: 'eqx-from-stay-shinjiro', then: [
      { n: "His right hand was still closed. It had been closed on the blanket a minute ago round the shape of a wrist, and it was closed now round the shape of the same wrist, and it wouldn't open, and he didn't want it to." },
      { s: 'shinjiro', f: 'neutral', t: "...Told her I'd come get her." },
      { n: "He looked down at the six floors of stairs he'd apparently just climbed, and at the leg that couldn't climb them, and at the town." },
      { s: 'shinjiro', f: 'neutral', t: "Guess I meant it." }
    ], else: [
      { s: 'shinjiro', f: 'neutral', t: "...Tch. Figures." },
      { n: "He didn't say what figured. Below him, in the car park, the coffins of the night shift stood in a loose ring round an ambulance with its doors open, and every one of them was turned toward the bay. He stood there and held the railing and watched the school, and didn't go back down, because he didn't think he could, and because somebody had to watch." }
    ] },

    { place: 'The Well', time: 'The Dark Hour', bg: 'eqx-well-shaft', music: 'badfeeling' },
    // BG: well-shaft — the inside of a deep round shaft of old wet stone seen from halfway down, a gold rope running down the middle of it into the dark, faint red light far below.
    { n: "Lee Donghyuck woke halfway down a rope." },
    { n: "Not on the ground somewhere, like a reasonable person. Not on the dorm steps, which was where, if anyone had asked him, and nobody ever did, he'd have put money on waking up. He came to with his hands burning and his knees locked round a braid of something that was warm and faintly gold in the dark and humming very slightly against his palms like a power line, and under his shoes there was nothing at all, and over his head there was nothing either, just stone going up into black and stone going down into black and him in the middle of it, hanging." },
    { n: "He did not look down. He looked down." },
    { n: "Very far below, so far it was a coin at the bottom of a fountain, there was light. Red and gold. Moving. And the sound coming up the shaft at him, faint and stretched out by the stone, was a sound he knew in two languages and in his sleep: rope cracking like a whip, and bells, and a girl's voice saying something short and furious." },
    { n: "He laughed. It came out of him all wrong, cracked and breathless, a sound he'd have been embarrassed by if there'd been anyone to hear it." },
    { n: "No Evoker. He checked anyway, the way you check for your keys going out the door, and there was nothing at his hip, nothing in his pockets but a guitar pick and a receipt in Korean. No light. No way of knowing how far down it was, or what was at the bottom besides her, or whether the rope went all the way or just stopped, frayed, somewhere in the dark, with him on the end of it." },
    { n: "He'd done this before. Not this exactly. But he'd run a whole tower once, alone, with nothing in his hands, because she was at the top of it and that was the whole of the reasoning. He'd told her, after, that he'd find her in every world. He'd meant it as a line. He'd found out, later, standing in a doorway in the snow, that it wasn't one." },
    { n: "He started climbing. Down. Hand under hand, the rope burning, the stone going past his shoulder slick and cold, counting nothing, thinking nothing, the way you take stairs in the dark in a house you grew up in." },
    { n: "About halfway, the stone beside his face changed. There were marks in it. Scratches, long ones, deep, in fours, side by side, running down the wall into the dark. As if something had come down this shaft before him, slowly, without a rope, and held on the whole way with its hands." },
    { n: "He stopped looking at the walls." },

    { away: false },
    { place: 'The Well · The Bottom', time: 'The Dark Hour', bg: 'eqx-well-bottom', music: 'badfeeling', soft: true },
    { n: "Something came down the rope, and it was swearing." },
    { n: "She heard it before she saw it. Rough, breathless, in two languages at once, and then a long scraping slither and a grunt, and then a body dropped the last few feet out of the dark and landed in the black water beside her with a splash that broke the sky in it into a hundred red pieces." },
    { n: "He came up on one knee, soaked to the waist, hair in his eyes, both palms red and raw from the rope. He looked at the Shadows. He looked at Haenim, pink and gold and flickering over her shoulder. Then he looked at her, and his whole face did a thing she had seen it do before, in a doorway, on a rooftop, across a tower floor with no Evoker in his hands, the thing where it stopped performing anything at all." },
    // CG: eqx-there-you-are — a soaked young man on one knee in black water at the bottom of a stone well, looking up at Solar with his hand out, a frayed gold rope swinging behind him.
    { cg: 'eqx-there-you-are' },
    { s: 'haechan', f: 'sad', t: "...There you are." },
    { n: "Her throat closed. She'd heard him say that once before, in a different hour, a green one, when she hadn't known who he was. She knew now. She knew all of him, every version, and he knew her, and it went through her like heat from a door opened in winter." },
    { ifFlag: 'eqx-from-runners-haechan', then: [
      { s: 'haechan', f: 'neutral', t: "Told you. Every world." },
      { s: 'haechan', f: 'serious', t: "This one counts." }
    ], else: [ { ifFlag: 'eqx-from-runners-minji', then: [
      { s: 'haechan', f: 'neutral', t: "Minji's got the last frame. You're not in it." },
      { s: 'haechan', f: 'serious', t: "That's how I knew where to look." }
    ], else: [ { ifFlag: 'eqx-from-runners-cover', then: [
      { s: 'haechan', f: 'neutral', t: "Your girls had you first. I had you last." },
      { s: 'haechan', f: 'serious', t: "Same rope." }
    ], else: [ { ifFlag: 'eqx-from-strangers-haechan', then: [
      { n: "He held up his left hand, red from the rope, and flexed it, and said it in Korean, low, the way he'd said things to her on the stairs of a house in Incheon with the lights off." },
      { s: 'haechan', f: 'neutral', t: "*Left hand. Still got it.*" },
      { s: 'haechan', f: 'happy', t: "...Don't ask me which one of me's translating." }
    ], else: [ { ifFlag: 'eqx-from-strangers-jungwon', then: [
      { s: 'haechan', f: 'neutral', t: "He said near. I heard it." },
      { s: 'haechan', f: 'serious', t: "I'm nearer." }
    ], else: [ { ifFlag: 'eqx-from-strangers-family', then: [
      { s: 'haechan', f: 'neutral', t: "Your father's light was on when I went." },
      { s: 'haechan', f: 'sad', t: "I left it on." }
    ], else: [ { ifFlag: 'eqx-from-hoax-jungwon', then: [
      { s: 'haechan', f: 'serious', t: "I said I wouldn't come looking. That was if you picked." },
      { s: 'haechan', f: 'neutral', t: "You didn't pick this." }
    ], else: [ { ifFlag: 'eqx-from-hoax-jihoon', then: [
      { s: 'haechan', f: 'happy', t: "Busy rope. You've got a type, it's *won't let go.*" }
    ], else: [ { ifFlag: 'eqx-from-hoax-council', then: [
      { s: 'haechan', f: 'neutral', t: "Somebody left the lights on in a gym. Followed them." }
    ], else: [ { ifFlag: 'eqx-from-stay-akihiko', then: [
      { s: 'haechan', f: 'neutral', t: "Your boxer said stay." },
      { s: 'haechan', f: 'serious', t: "I don't say stay. I say *here*." }
    ], else: [ { ifFlag: 'eqx-from-stay-shinjiro', then: [
      { s: 'haechan', f: 'neutral', t: "Someone with a bad hand had you." },
      { s: 'haechan', f: 'serious', t: "Good grip, for a bad hand." }
    ], else: [ { ifFlag: 'eqx-from-stay-sees', then: [
      { s: 'haechan', f: 'happy', t: "Your whole dorm was holding on. Loud dorm." }
    ], else: [ { ifFlag: 'eqx-from-true', then: [
      { s: 'haechan', f: 'neutral', t: "All three of me held on." },
      { s: 'haechan', f: 'flustered', t: "Well. Both of me. You know what I mean." }
    ] } ] } ] } ] } ] } ] } ] } ] } ] } ] } ] } ] } ] },
    { choose: [
      { t: "You took your time.", then: [
        { s: 'haechan', f: 'happy', t: "I took the *stairs*. There weren't any stairs. Be impressed." }
      ] },
      { t: "(Grab his hand.)", then: [
        { n: "She grabbed it. The raw one. He hissed through his teeth and didn't pull away, and his fingers closed over hers so hard the bones shifted, and for one second neither of them was doing anything but that." },
        { s: 'haechan', f: 'flustered', t: "...Ow. Okay. Fair." }
      ] },
      { t: "How are you here?", then: [
        { s: 'haechan', f: 'neutral', t: "Held on. Didn't let go. Turns out that's a mode of transport." },
        { s: 'haechan', f: 'serious', t: "Ask me again when we're not in a hole." }
      ] }
    ] },
    { cg: null },
    { n: "The water bulged. Six of them now, seven, the painted mothers' faces rising out of the black in a ring, every one of them smiling, every one of them with a hand out." },
    { s: 'haechan', f: 'serious', t: "...Okay, who are *those*. Why do they look like that. Why do they look like somebody's mom." },
    { s: 'solar', f: 'serious', t: "I don't know. They want something." },
    { s: 'haechan', f: 'neutral', t: "Yeah, well. Get in line." },
    { n: "He got up off his knee. He rolled his shoulders, once, like a boy at the edge of a stage, and the air behind him went cold and pale, and something rose out of it that she knew: a slender shape in white with a moon where its face should have been, the light coming off it thin and silver and cool as a hand on a fever. No Evoker for him either. It came anyway." },
    // CG: eqx-sun-and-moon — Solar and Haechan back to back at the bottom of a stone well, Haenim in pink and gold behind her and a pale moon-faced Persona behind him, sun and moon light meeting on the water.
    { n: "For one breath, the sun and the moon were in the same hole in the ground. Gold on one side of the water and silver on the other, and where the two lights met on the black skin of it, the sky underneath went, very briefly, the color of morning." },
    { n: "She felt Haenim steady. The wobble went out of her chest like a hand had closed around the candle flame, and the veil, lifted its finger's width, stirred, as if something behind it had turned to look." },
    { "battle": { "id": "eqx-well-2", "kind": "scripted", "script": "eqx-well-2", "segment": 2, "title": "The Well · The Bottom", "desc": "The sun and the moon in one hole in the ground. Clear the water and get to the rope." } },
    { music: 'tender' },
    { n: "When it was over the water was flat again, black and still, the sky in it whole, and the ash of the painted faces lay on the surface in a gray skin that turned slowly, slowly, and sank." },
    { n: "Where the last of it went down, the water went on moving for a while after. Small rings, spreading out to the stone. As if something underneath had opened its mouth to take it, and closed it again, and swallowed." },
    { n: "Haenim stayed a moment longer than she needed to. She looked down at Solar through the lifted edge of her veil, and then, past her, at the pale shape over Haechan's shoulder, and the moon-faced thing looked back, and neither of them moved, and Solar had the absurd feeling of having walked in on something private. Then they were both gone, and it was just the two of them, wet to the waist, breathing hard, at the bottom of the world." },
    { s: 'haechan', f: 'neutral', t: "...You good?" },
    { choose: [
      { t: "No.", then: [
        { s: 'haechan', f: 'sad', t: "Yeah. Me neither." },
        { n: "He said it so simply that she almost laughed, and the almost-laugh came out of her as something else, a short hard breath that hurt on the way out, and he didn't say anything about it. He just stood closer. Close enough that his shoulder was against hers. Close enough to be warm." }
      ] },
      { t: "I am now.", then: [
        { n: "It came out before she could check it. She heard it land. He heard it land too, and he looked at her for a long second in the dark with his wet hair in his eyes, and something went across his face that he didn't let finish." },
        { s: 'haechan', f: 'flustered', t: "...You can't just *say* that one. Not in a well." }
      ] },
      { t: "(Lean on him.)", then: [
        { n: "She let her forehead drop against his shoulder. Just for a second. His jacket was soaked and smelled of cold stone and, under that, of him, and his hand came up and stopped an inch from the back of her head, and hovered there, and then settled, carefully, like he was afraid of breaking something he'd only just found." },
        { s: 'haechan', f: 'neutral', t: "...Yeah. Okay. I've got you." }
      ] }
    ] },
    { n: "Somewhere under them, under the water and the sky in the water, the big thing breathed in. Long and slow. The stone hummed with it. Neither of them said anything about it, which was its own kind of saying something." },
    { n: "And then, so faint she would spend the rest of the night telling herself she'd made it up, a voice came up through the stone. Not words. A woman, humming. The tune everybody's mother hums at the side of a bed, a few notes up and a few down, warm, patient, very close to the underside of the water. In the middle of a bar it stopped. As if whoever was humming had noticed she was listening." },
    { s: 'haechan', f: 'serious', t: "We're leaving. Now. I don't like the floor." },
    { s: 'solar', f: 'neutral', t: "It's not a floor. It's the sky." },
    { s: 'haechan', f: 'neutral', t: "I like it even less." },
    { n: "He went up first. Of course he did. He wrapped the rope once round his forearm and hauled, and got his feet on it, and reached back down for her without looking, the way you reach for a railing you know is there, and his hand found her wrist and closed." },
    // CG: eqx-rope-climb — a young man climbing a frayed gold rope up a dark stone shaft, looking down, one hand gripping the wrist of the girl climbing below him.
    { n: "They climbed." },
    { n: "It took a long time. It took so long she lost count, which she never did. Hand over hand, the gold humming warm under her palms and the stone sliding past cold on every side, his hand letting go of her wrist only to take the rope and then coming back to it, every time, every few feet, as if checking she was still on the end of it. Twice the rope went thin under her hands, frayed, the strands loose and bristling, and twice she felt it hold anyway. Once she passed the clumsy mended knot and put her fingers on it without meaning to, and it was warm, warmer than the rest, like it had been tied by hands that had only just let go." },
    { n: "She didn't look down. She knew what was down there. She could feel it, the way you can feel someone watching you leave a room." },
    { n: "Then there was air on her face that smelled of grass and salt, and red light, and a circle of sky above them, the right way up, with a moon in it." },

    { place: 'Gekkoukan High · Courtyard', time: 'The Dark Hour', bg: 'eqx-courtyard-well-night', music: 'mystery' },
    // BG: gekkoukan-courtyard-well-night — Gekkoukan High's paved courtyard in the Dark Hour, dark red sky and huge red moon, a ring of old mossy stone set into the paving where nothing stood before, a gold rope trailing out of it over the edge.
    { n: "Sanada Akihiko got to the school at twenty-six minutes past twelve, against orders, alone, again." },
    { n: "He knew it was against orders because there hadn't been time for any. That had never once stopped them being against orders. He came over the front gate instead of through it and dropped into the yard and ran, past the shoe lockers and round the side of the building where the courtyard opened up, and stopped so hard his shoes skidded on the paving." },
    { n: "The courtyard was the wrong color. He'd fought in this hour for a year and he knew it the way you know the smell of your own gym, and this wasn't it. Red light lay on the flagstones like something spilled and not wiped up. The cherry tree's new leaves were black in it. The dead vending machine gave back his own reflection, red to the eyes, and he didn't look at it twice." },
    { n: "There was a well." },
    { n: "In the middle of the courtyard, where a year ago a tower had come up out of the ground every night and gone back down every morning, where there was nothing now but flagstones and a bench and a vending machine and a cherry tree just coming into leaf, there was a ring of old gray stone set into the paving, waist-high, mossy at the joins, like it had been there for three hundred years. It hadn't been there at sunset. He'd run past this exact spot at sunset." },
    { n: "Over the lip of it, trailing down into the dark, there was a rope. And the rope was moving." },
    { n: "He was across the courtyard before he'd decided. He leaned over the edge and looked down into black so deep it had no bottom, and heard breathing coming up out of it, two people, close, and a voice, rough and out of breath, swearing in a language that wasn't Japanese." },
    { n: "A hand came up out of the dark and slapped flat on the stone lip. A boy's hand, scraped raw across the palm. Then a head, a soaked one, and Lee Donghyuck hauled himself up on his elbows over the edge of the well and looked straight up into Akihiko's face from about a foot away, and both of them froze." },
    { s: 'haechan', f: 'surprised', t: "...Oh, good. *You.*" },
    { s: 'akihiko', f: 'serious', t: "Where is she." },
    { n: "Haechan didn't answer. He didn't have to. He didn't let go of what he was holding, either, which was something under the edge of the well, something heavy, something he was hanging on to with his whole right arm, and his whole face was strain. Akihiko looked down past his shoulder." },
    { n: "Her hand. Coming up out of the dark, white-knuckled on the rope, the other one locked in Haechan's grip at the wrist." },
    { n: "Akihiko reached in and took her other wrist." },
    // CG: eqx-well-mouth — two young men at the stone lip of a well in a red-lit school courtyard at night, each gripping one of Solar's wrists, pulling her up out of the dark between them.
    { place: 'Gekkoukan High · Courtyard', time: 'The Dark Hour', bg: 'eqx-courtyard-well-night', soft: true },
    { n: "She came up out of the dark with a hand on each wrist, and she knew both hands, and that was almost the worst part." },
    { n: "Two boys pulling one girl out of a well. She had a very clear thought, coming over the stone lip on her stomach with her knees scraping and her wet clothes dragging, that this was the wrong way round. That every time anyone had held on to her, it had been to keep her, and she had gone anyway, out of their hands like water. This time they were pulling, and she was coming." },
    { n: "She landed on the flagstones on her hands and knees. Nobody let go of her. Not for a long moment. She knelt there between them on the paving in the red with her hair dripping and a wrist in each of their hands and her heart going so hard she could hear it, and neither of them let go first, and she understood, slowly, that neither of them was going to." },
    { ifFlag: 'eqx-from-stay-akihiko', then: [
      { s: 'akihiko', f: 'sad-2', t: "...I didn't let go." },
      { s: 'akihiko', f: 'serious', t: "I want that on record. I didn't let go. You went anyway. I didn't let go." }
    ], else: [
      { s: 'akihiko', f: 'sad', t: "...Solar." },
      { n: "Just her name. He said it like he was checking it still worked." }
    ] },
    { ifFlag: 'eqx-from-hoax-jihoon', then: [
      { n: "There was a clatter at the courtyard's far end, a shoe on a railing, a yelp, and Park Jihoon came round the corner of the building at a dead run with Cherry three steps behind him and stopped, and saw her, and put both hands on his head." },
      { s: 'jihoon', f: 'surprised', t: "There she is. *There* she is. Oh my god. I ran here. I *ran*. Do you know how far that is? I don't run. I want everyone to know I ran." },
      { s: 'cherry', f: 'neutral', t: "You ran two blocks and then I carried your bag." },
      { s: 'jihoon', f: 'sad', t: "Emotionally, it was a marathon." },
      { n: "He was laughing. His eyes were wet. He didn't come any closer, as if two hands on her already were as many as the courtyard could take, and stood there with his hands on his head looking at her like she was a window he'd been told was bricked up." }
    ] },
    { choose: [
      { t: "(Let go of Haechan's hand first.)", then: [
        { n: "She turned her wrist in Haechan's grip, gently, and he felt it and let go, at once, like he'd been waiting for her to, and sat back on his heels on the flagstones and looked at the sky. Akihiko's hand stayed. It stayed a second longer. Then it let go too, slowly, one finger at a time, like he was making himself." }
      ] },
      { t: "(Let go of Akihiko's hand first.)", then: [
        { n: "She turned her wrist in Akihiko's grip, gently, and he let go the way he did everything, all at once, and stood up. Haechan's hand stayed. It stayed until she looked at it, and then he looked at it too, as if he'd forgotten it was his, and opened it, and sat back on his heels on the flagstones and didn't say anything." }
      ] },
      { t: "(Don't let go of either.)", then: [
        { n: "She didn't. She held on to both of them, one in each hand, and pulled herself up between them to her feet, and they came up with her, because they weren't going to let go first either, and for a moment the three of them stood in the middle of the courtyard holding on like children in a game none of them knew the rules to." },
        { n: "It was Haechan who looked at Akihiko over the top of her head. It was Akihiko who looked back. Neither of them said anything. The quiet was the loudest thing in the courtyard." }
      ] }
    ] },
    { n: "Behind them, the well was quiet. The rope lay over its lip, gold, frayed, still. She looked at it for a long moment and found she didn't want to have her back to it." },
    { n: "While she looked, the rope moved. Once. Slowly. It slid down over the stone lip an inch, two, and stopped, the way a line goes taut when someone a very long way below takes hold of the other end, gently, just to see if anyone's still holding this one." },
    { n: "Haechan put his foot on it. Nobody said anything." },
    { n: "Then the gate at the front of the school banged open, and there were feet on the gravel, a lot of them, and somebody shouting her name in a voice that cracked in the middle, and a dog barking, and barking, and barking." },

    { place: 'Iwatodai Dorm · Lounge', time: 'Late Night', bg: 'iwatodaidorm-livingroom-night-spring', music: 'tender', date: '4/7' },
    { dark: false },
    // CG: eqx-lounge-full — a crowded dormitory lounge at two in the morning, every couch and armrest and bit of floor taken by young people in pajamas, party clothes and coats, a dog in the middle, Solar in a towel at the center of it.
    { dateGlitch: false }, // the date box settles: someone said what day it is
    { n: "At two in the morning on the seventh of April, the lounge of the dormitory in Iwatodai had more people in it than it had been built for, and every single one of them was looking at her." },
    { n: "She had a towel round her shoulders that Fuuka had brought and a second towel on her head that Hyein had brought and a third one in her lap that nobody would admit to, and a mug of something hot in her hands that Yukari had made and then stood over her until she drank, and she was sitting in the middle of the big couch because that was where they'd put her, the way you'd put a vase you'd just glued back together in the middle of a table, where you could see it from everywhere." },
    { n: "The red had gone at one. The clock over the television had ticked, and gone on ticking, and the lamps had come back on all at once, yellow and ordinary, and the refrigerator had started humming again in the kitchen like it was embarrassed about having stopped. None of that had made anyone go to bed." },
    { n: "Nobody had said much about the color. Everybody had seen it. It sat in the room with them like a guest nobody had invited, and every so often someone would glance at the window, at the ordinary orange streetlight outside, as if to check it was still orange." },
    { n: "They were on every surface. Hanni and Hyein on either side of her, so close she could feel them breathing, still in their party dresses with dorm blankets over them. Yunjin on the floor with her back against Solar's shins, which she had not asked permission for and was not going to. Junpei on the arm of the couch. Ken cross-legged on the rug with Koromaru's head in his lap, and Koromaru's eyes on her, unblinking, his tail going slow and steady against the floorboards. Aigis standing by the window, the way she always stood by the window. Jihoon draped across the armchair like he'd been shot in it, and Cherry on the arm of it with her feet on his stomach. Minji on the stairs with her camera in her lap, lens cap on. Jaehyun by the door with his coat still open. Jungwon in the one straight-backed chair from the dining table, which he'd carried in himself, sitting very upright, with his hands on his knees and his watch where he could see it." },
    { n: "Haechan on the floor at the far end of the coffee table, with his back to the television and his raw hands wrapped in a dish towel, not looking at her. He'd been not looking at her for forty minutes. He was very good at it. She could feel exactly where he was in the room the whole time, the way you can feel a heater." },
    { n: "Akihiko leaning on the wall by the stairs with his arms folded, still in his tracksuit, grass on his knees. He was looking at her enough for both of them." },
    { ifFlag: 'eqx-from-true', then: [
      { n: "Nobody in S.E.E.S. had said much since the courtyard. They'd come round the corner of the school at a run, all of them, with Koromaru out ahead, and seen her on her knees on the flagstones between two boys, and stopped, every one of them, as if they'd run into glass." },
      { n: "And then remembered. She'd watched it happen. All of them at once, a year landing on them in the time it took to breathe in, and Junpei had sat down on the paving where he stood, and Yukari had put both hands over her mouth, and Ken had started crying without any sound, and Mitsuru had gone so white that Aigis had put a hand under her elbow." },
      { s: 'junpei', f: 'sad', t: "...I called it the guest room. Your room. I called it the *guest room*, I walked past it every day, I—" },
      { s: 'yukari', f: 'sad', t: "Junpei." },
      { s: 'junpei', f: 'sad', t: "We *forgot* you, Yuka-tan. How do you forget a whole— she lived *here*—" },
      { n: "Nobody had an answer to that. Akihiko took a pink ribbon out of his pocket and looked at it and put it back, and didn't explain it, and nobody asked him to." }
    ] },
    { ifFlag: 'eqx-from-stay-sees', then: [
      { s: 'junpei', f: 'happy', t: "We kept the room! Did they tell you? Did anybody tell her? We kept the *room*!" },
      { s: 'yukari', f: 'neutral', t: "It's been an hour, Junpei. She knows we kept the room. She was here when we kept the room." },
      { s: 'junpei', f: 'sad', t: "I don't care. I'm telling her anyway. We kept the room." }
    ] },
    { ifFlag: 'eqx-from-hoax-council', then: [
      { n: "Jihoon's phone buzzed on his chest. He looked at it and laughed out loud, a short helpless sound, and held it up." },
      { s: 'jihoon', f: 'happy', t: "Heeseung's at the guesthouse. He's on the phone to the faculty advisor. There *is* no faculty advisor. He's leaving voicemails for a man in another universe." },
      { s: 'cherry', f: 'neutral', t: "Let him. It's how he prays." }
    ] },
    { n: "Nobody could stop talking and nobody could start. That was what it was like. Every few minutes somebody would open their mouth to say a whole thing, and get three words into it, and stop, and look at her, and somebody else would start, and stop. It was the happiest she had ever seen any of them. It was the happiest she had ever been looked at, and it was too much, and it was not nearly enough." },
    { n: "She knew every face in the room. She knew what she'd been to each of them, in which life, and what each of them had been to her. She knew that two people in this room had held her hand at the end of a year and been told goodbye, and she knew which two, and that there were others with the same claim from other years, and they all knew it too, and nobody was saying any of that either." },
    { n: "Last time, she'd walked into this lounge and nobody had known her name. She kept waiting to be used to the difference. She wasn't." },
    { mingle: { pick: 4, min: 2 }, choose: [
      { t: "(Lean into Hanni and Hyein.)", then: [
        { n: "She let herself tip sideways into Hanni, and Hyein tipped in after her from the other side, so they were a heap, the three of them, under three blankets and two towels on a couch in Japan at two in the morning, the way they'd been a heap on a twin bed in Syracuse more nights than any of them could count." },
        { s: 'hyein', f: 'sad', t: "Did you sleep? Down there? Was there anywhere to sleep? Was it a nice— no. Don't answer. It was a well. I know it was a well." },
        { s: 'hanni', f: 'serious', t: "New rule." },
        { s: 'hyein', f: 'serious', t: "Oh, here we go." },
        { s: 'hanni', f: 'serious', t: "New rule. Same as the old rule. Nobody's alone at midnight. Not here either. Not once. I don't care what color it is." },
        { n: "She said it into Solar's wet hair, quietly, and her voice did something on *midnight*, and Hyein's hand found Solar's under the blanket and held it, hard, the way you'd hold on in a crowd." },
        { choose: [
          { t: "Deal.", then: [
            { s: 'hanni', f: 'neutral', t: "Good. I'm writing it down. There's going to be a spreadsheet." }
          ] },
          { t: "I'm sorry I went.", then: [
            { s: 'hyein', f: 'serious', t: "You didn't *go*. You got *took*. That's different. That's a whole different word." },
            { s: 'hanni', f: 'sad', t: "...It's taken, Hyein." },
            { s: 'hyein', f: 'sad', t: "I know what it is, I'm upset." }
          ] }
        ] }
      ] },
      { t: "(Put a hand on Yunjin's head.)", then: [
        { n: "She put her hand on the top of Yunjin's head, where it was leaning back against her knees, and Yunjin went very still under it, like a cat that had been about to bite and decided, this once, not to." },
        { s: 'yunjin', f: 'serious', t: "Don't." },
        { s: 'solar', f: 'neutral', t: "Don't what?" },
        { s: 'yunjin', f: 'sad', t: "Be nice to me right now. I'll cry. I don't cry. I'm not starting in front of the *boxer*." },
        { n: "She didn't move her head away, though. She stayed exactly where she was, with her back against Solar's shins and Solar's hand on her hair, and after a while she reached up without looking and held Solar's wrist there, so it couldn't leave." },
        { s: 'yunjin', f: 'neutral', t: "I asked the river where you were. Out loud. Like a crazy person." },
        { s: 'yunjin', f: 'serious', t: "It didn't know. Useless river." }
      ] },
      { t: "(Go and stand by Jungwon's chair.)", then: [
        { n: "She got up, which made four people move at once, and crossed the room with a towel round her shoulders to the one straight chair, and Jungwon stood up out of it before she reached it, because he always stood when someone came to him, in both his lives, and they looked at each other." },
        { n: "He looked tired. That was what she noticed. Not hurt, not frightened. Tired in the specific way of someone who hasn't let himself sit back in a chair for a long time, and his eyes went over her the way they always did, quickly, counting: hands, both; face, fine; feet, bare and wet on the floorboards. He took his coat off without a word and put it round her shoulders, over the towel." },
        { s: 'jungwon', f: 'neutral', t: "You're cold. You've been cold since you came in. Nobody said." },
        { s: 'solar', f: 'neutral', t: "How long was I gone? For you?" },
        { n: "He looked at his watch. It was a reflex; she watched him notice it and not stop it." },
        { s: 'jungwon', f: 'serious', t: "I don't know." },
        { s: 'jungwon', f: 'sad', t: "...I stopped counting. I've never stopped counting anything." },
        { n: "He said it like a confession. Under it, in the low voice he used when there was nobody else from home in earshot, he said one more thing, in Korean, so quietly it might only have been for himself, and it was her name, the way people said it in one of his lives and not the other." },
        { choose: [
          { t: "(Hold the coat closed.)", then: [
            { n: "She pulled his coat tighter round herself, and his eyes followed her hands, and something in his shoulders came down, a quarter of an inch, for the first time all night." }
          ] },
          { t: "I'm here now.", then: [
            { s: 'jungwon', f: 'neutral', t: "Yes. I can see that." },
            { s: 'jungwon', f: 'sad', t: "I'm going to keep looking anyway. For a while. You'll have to forgive me." }
          ] }
        ] }
      ] },
      { t: "(Sit on the arm of Jihoon's chair.)", then: [
        { n: "She sat on the free arm of the armchair. Cherry looked at her across Jihoon's body and moved her feet off his stomach, which for Cherry was a speech." },
        { s: 'jihoon', f: 'happy', t: "She comes to me. In front of everyone. Bold. I respect it. I want it noted that I didn't even have to wave." },
        { s: 'cherry', f: 'neutral', t: "You waved like six times." },
        { s: 'jihoon', f: 'neutral', t: "Those were stretches." },
        { n: "Then he looked up at her, and the bit went out of his face all at once, like a light switched off in a window, and what was under it was a boy who'd been lying on the ground under an arcade sign two hours ago, sure he'd lost something for good." },
        { s: 'jihoon', f: 'sad', t: "...Don't do that again. Okay? The going thing. I'm serious. I'm the almighty Hoon. I don't do *serious*. Look what you've made me do." },
        { choose: [
          { t: "I'll try.", then: [
            { s: 'jihoon', f: 'neutral', t: "Try harder than that." },
            { s: 'cherry', f: 'serious', t: "Leave her alone. She just climbed out of a *well*, dumbass." }
          ] },
          { t: "(Flick his forehead.)", then: [
            { n: "She flicked him in the middle of the forehead. He yelped. Cherry laughed, a real one, sharp and surprised, and Jihoon clutched his head and looked, for a second, so purely happy that she had to look away." },
            { s: 'jihoon', f: 'happy', t: "Assault. Everyone saw. She's *back*." }
          ] }
        ] }
      ] },
      { t: "(Go and sit on the stairs by Minji.)", then: [
        { n: "She sat down on the step below Minji's. Minji moved her camera to her other side without looking, so it wasn't between them, and that was how Solar knew she'd been thinking about it." },
        { s: 'minji', f: 'serious', t: "Lens cap's on. It stays on tonight. I'm not here as anything except the person on the stairs." },
        { s: 'solar', f: 'neutral', t: "Was it running? When I went?" },
        { s: 'minji', f: 'neutral', t: "...Yeah. It was running." },
        { s: 'minji', f: 'sad', t: "I'm going to look at it. Every frame. Not tonight. But I'm going to, and you're going to let me, and then I'm going to show you, and you can tell me to delete it, and I won't." },
        { n: "By the door, Jaehyun had turned his head to listen. Their eyes met across the room. He lifted one hand off his elbow, a half-inch, which in her brother's language was a hug and a short speech." },
        { s: 'jaehyun', f: 'neutral', t: "Nobody here knows where I am. Not one person at home. First time in my life." },
        { s: 'jaehyun', f: 'neutral', t: "I'm not sure yet if I hate it." }
      ] },
      { t: "(Look at Haechan until he looks back.)", then: [
        { n: "She looked at him across the coffee table, across Ken and the dog and two mugs and somebody's abandoned sock, and waited." },
        { n: "It took him a long time. He looked at the dish towel round his hands. He looked at the ceiling. He looked at Koromaru, who looked back, unhelpfully. Then he gave up, the way he always gave up, all at once, and looked at her, and the whole loud room went somewhere else for a second." },
        { n: "He didn't say anything. He didn't have to. There was a whole year in it, two years, three lives, a rooftop and a harbor and a tower and a well, every one of them asking the same question, which was the question nobody in this room was asking out loud: so what are we now. After everything. Here." },
        { n: "She didn't know. She looked at him and found that she didn't know, and that she wasn't afraid of not knowing, which was new." },
        { n: "He looked away first. He'd always been worse at this than he pretended. But he was smiling, at the dish towel, a small one, the corner of his mouth only." },
        { s: 'haechan', f: 'flustered', t: "...Stop it. People are here." }
      ] },
      { t: "(Ask Akihiko to call the hospital.)", then: [
        { n: "She didn't have to ask twice. He already had his phone out. He'd had it out, she realized, for twenty minutes, turning it over in his hand, waiting to be allowed." },
        { n: "It rang four times. Then a click, and breathing, and a voice like gravel being dragged over a step." },
        { s: 'shinjiro', f: 'neutral', t: "...Took you long enough." },
        { s: 'akihiko', f: 'serious', t: "Where are you? They said you weren't in your bed. The night nurse is—" },
        { s: 'shinjiro', f: 'neutral', t: "Roof. Don't ask. I don't know either. She there?" },
        { n: "Akihiko held the phone out to her without a word. She took it. Shinjiro didn't say hello. He didn't say her name. He breathed on the other end for a while, which was, she understood, the whole of what he had to say." },
        { s: 'shinjiro', f: 'neutral', t: "...She eat anything?" },
        { s: 'solar', f: 'happy', t: "Yukari made me something. I don't know what it is." },
        { s: 'shinjiro', f: 'neutral', t: "Tch. Drink it anyway. I'll make you something real when I can hold a pan." },
        { s: 'shinjiro', f: 'neutral', t: "...Get Aki off the phone before the nurse finds me. Somebody's gotta carry me down six flights and it ain't gonna be her." }
      ] },
      { t: "(Find Mitsuru.)", leave: true, then: [] }
    ] },
    { n: "Mitsuru was standing at the end of the counter by the kitchen, in her robe still, with a pen in her hand, and she had been counting." },
    { n: "Solar knew the look. She'd seen it on Mitsuru's face before every operation for a year: the look of someone running numbers she didn't like and running them again in case she'd got them wrong. Her lips moved. Her eyes went round the room, couch to chair to floor to stairs to the door, and back, and Solar watched her do it twice." },
    { s: 'mitsuru', f: 'neutral', t: "Seventeen. Eighteen, with Koromaru. Nineteen, with Aragaki on a hospital roof I will be speaking to the hospital about in the morning." },
    { s: 'solar', f: 'neutral', t: "That's a lot of people." },
    { s: 'mitsuru', f: 'serious', t: "It's a lot of people." },
    { n: "Then she turned, and looked at the whiteboard on the side of the refrigerator, where it still said VISITORS across the top in her handwriting from a year ago, faded where somebody's sleeve had rubbed it, and under it a list of names that had stopped being visitors a long time ago. She looked at it for a long moment. She uncapped the pen." },
    { n: "She wasn't counting people anymore. Solar saw it change. She was counting beds." },
    { n: "Rooms on the second floor. Rooms on the third. The couch. The guesthouse by the station, its eleven narrow rooms with a kitchen that locked at nine. Mitsuru's pen moved down the side of the whiteboard making small neat marks, one for every bed, and stopped, and moved again, and stopped." },
    { s: 'mitsuru', f: 'neutral', t: "We have enough. For tonight." },
    { n: "She said *for tonight* the way you'd say a word in a language you weren't sure of. Then she drew a line down the middle of the whiteboard, top to bottom, straight as a ruler, so there was an empty half next to the old one, and stood looking at the empty half, and didn't write anything in it." },
    { s: 'solar', f: 'serious', t: "Mitsuru. What's that for?" },
    { s: 'mitsuru', f: 'neutral', t: "In case." },
    { n: "She capped the pen. She didn't say in case of what. Behind them the room was still going, loud and happy and too full, and Junpei was telling somebody about the room they'd kept, and someone was laughing, and the dog was barking at nothing in particular, and the empty half of the whiteboard hung there on the refrigerator door, white, waiting, like a guest list for a party that hadn't decided yet who it was for." },

    { place: 'The Velvet Room', time: 'Dawn', bg: 'velvetroom-1', music: 'velvet' },
    { n: "She went up at five, when the sky over the bay was going gray, to the room at the end of the second-floor hall." },
    { n: "The lamp was still on. The bed was made, square. The uniform in the closet with the ribbon folded over the hanger. She stood in the doorway for a long time, the way, she found out later, Akihiko had stood there five hours before, and then she went in and lay down on top of the covers in Jungwon's coat with her hair still damp, and didn't turn the lamp off, and was asleep before she'd decided to be." },
    { n: "And then she was sitting on blue velvet, and the floor was rising, and somewhere a woman was singing a song with no words in it." },
    { n: "The elevator. The blue light, the brass, the numbers over the doors climbing slowly toward nothing. She'd thought she'd seen the last of it. She'd been wrong about that before, too." },
    { n: "Elizabeth was standing where she always stood, with the great blue book held against her chest in both gloved hands, and when Solar looked up at her she didn't smile at first. She looked, for a moment, like someone who'd heard a knock at a door she'd been told to keep shut, and gone to it anyway." },
    { n: "Then the smile came, all of it, bright and delighted, and Solar almost believed it was the whole of what she felt." },
    { s: 'elizabeth', f: 'happy', t: "Welcome back. Isn't that a strange thing to be able to say? I've never said it to you before. You've always been arriving." },
    { s: 'elizabeth', f: 'neutral', t: "You remember me this time. I can see it. You're looking at me as if I owe you a cup of tea." },
    { choose: [
      { t: "You said you'd hold the doors.", then: [
        { n: "Something went across Elizabeth's face, quick as a bird past a window, and was gone." },
        { s: 'elizabeth', f: 'neutral', t: "I did. As long as it took. I'm very good at holding things." },
        { s: 'elizabeth', f: 'serious', t: "...Perhaps I'm too good at it. We'll see." }
      ] },
      { t: "Am I dreaming?", then: [
        { s: 'elizabeth', f: 'happy', t: "Always, in here. That's never stopped anything in here from being true." }
      ] },
      { t: "(Look around the Room.)", then: [
        { n: "It was the same. The velvet, the brass, the hum of the climb. But there was something on the floor by the doors that hadn't been there before: a thin line of light under them, gold, as if one of them hadn't quite closed. Elizabeth saw her see it, and moved, very slightly, so that she was standing in front of it." }
      ] }
    ] },
    { s: 'elizabeth', f: 'neutral', t: "I've brought your page. I thought you'd want to see it. I've been looking at it all night. I couldn't put it down." },
    { n: "She opened the book. The pages went past under her gloved fingers with that sound like cards shuffled by someone very good at it, faces and names and small careful paragraphs, and she found the one she wanted and turned it round." },
    // CG: eqx-page-stay — an old blue-bound book held open in gloved hands, one page crowded edge to edge with three different handwritings, and across the bottom in a heavy pressed hand a single word repeated over and over.
    { n: "A year ago it had been blank. Blank on purpose, like a face with nothing in it." },
    { n: "It wasn't blank now. It was full. Edge to edge, margin to margin, in three hands she knew from a year ago: one quick and slanting, one careful and upright with every stroke finished, one round and fast and full of crossings-out. Three people who'd looked for her. Three lives, writing her down. The ink went right into the border and over it in places, as if the page hadn't been big enough for what they'd had to say." },
    { n: "And under all of that, at the bottom of the page, there was a fourth." },
    { n: "It was heavy. That was the first thing. It had been written by someone pressing so hard that the nib had dented the paper, so that the words stood up off the page a little, like a scar, and when Solar put her fingertips on them she could feel them from the back. It was one word. Written once, and again, and again, line after line, the same size, the same weight, the same patient hand, not one letter different from the last, all the way down to the bottom edge and, she was fairly sure, off it." },
    { n: "*stay*" },
    { n: "*stay* *stay* *stay* *stay* *stay*" },
    { n: "In places it had been written so hard the nib had gone through. Little tears in the paper, and through the tears she could see the page underneath, the next page, which should have been someone else's. It wasn't. It was the same word, in the same hand, going down." },
    { n: "Her hand came off the page by itself." },
    { choose: [
      { t: "Whose is that?", then: [
        { s: 'elizabeth', f: 'serious', t: "I don't know." },
        { n: "She said it plainly, the way she'd said it a year ago over a blank page, but there was no delight in it this time. Not a trace." }
      ] },
      { t: "(Touch it again.)", then: [
        { n: "She put her fingers back on it, because she had to know. The dents were warm. Not the warmth of something that had been in the sun. The warmth of something that had been in a hand, a large one, a moment ago, and been put down." },
        { s: 'elizabeth', f: 'serious', t: "Don't. Please. I'd rather you didn't." }
      ] },
      { t: "Can you rub it out?", then: [
        { s: 'elizabeth', f: 'sad', t: "I tried. Before you came. I've never had to try to rub anything out of this book. It wouldn't go." },
        { s: 'elizabeth', f: 'neutral', t: "It isn't ink, I think. It's a sort of pressure." }
      ] }
    ] },
    { s: 'elizabeth', f: 'neutral', t: "The three of them I know. You know them too. Those are the hands of people looking for you. They've always been looking. Look how much they had to say." },
    { s: 'elizabeth', f: 'serious', t: "This one isn't looking for you." },
    { s: 'elizabeth', f: 'serious', t: "It's someone who's found you." },
    { n: "The elevator hummed. The numbers over the doors had stopped climbing. Solar hadn't seen them stop. Under the doors, that thin line of gold lay very still on the carpet, the way light lies under a door when there's someone standing right on the other side of it." },
    { n: "Elizabeth closed the book, gently, and held it against her chest in both hands, and for a second she held it the way you'd hold a door shut." },
    { s: 'elizabeth', f: 'happy', t: "Well. You're home, and everyone you love is in one house, and it's spring. I'm told that's a very good set of facts to wake up to." },
    { s: 'elizabeth', f: 'neutral', t: "Go and wake up to them. Come and see me soon. I find I have a great many questions, and for once, you might have answers." },
    { n: "The light went white at the edges, and the last thing she saw was Elizabeth lifting one gloved hand in a small formal wave, like a girl seeing someone off at a station, and then turning, before the white took her, to look at the door." },

    { place: 'Iwatodai Dorm', time: 'Morning', bg: 'solar-dormroom-day', music: 'school', date: '4/7' },
    { n: "She woke at ten with Jungwon's coat over her like a blanket and the lamp still on and somebody else's sock on the floor by the door, which hadn't been there when she fell asleep and which nobody, later, would claim." },
    { n: "The light through the curtains was April light, thin and gold and ordinary. Downstairs, through the floor, there was noise. A lot of it. Somebody arguing about the rice cooker in two languages. Somebody else laughing. The front door opening and closing and opening again. A dog barking, and being told, by at least three different people, to stop." },
    { n: "Her room. Her bed. Her name, all three of them, sitting in her head where they belonged, like keys on a hook by a door." },
    { n: "She lay there for a minute and listened to the house being too full, and found she was smiling at the ceiling, and let herself." },
    { n: "Then she thought about a word, pressed into paper, warm under her fingers, written over and over in a hand she didn't know. She sat up. She turned the lamp off." },
    { n: "Downstairs, someone shouted that breakfast was ready, and someone else shouted that it was not, and she went down."  }
  ]
};
