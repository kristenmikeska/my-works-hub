/* Variants for often-seen narration (living world part 2, 2026-10-21). ui.js and core.js add these to the existing lines and
   pick by day without repeating the last one: the off-day morning, the monorail, lunch, a quiet class, bedtime, going straight
   home, the dorm evening (study, rest, a book), every Go Out activity's `lines` and the dorm acts.
   A line is a string, or { t, months: [4..12, 1] } for a seasonal one, or { t, weather: ['rain'] } for one that needs that
   weather. Lines that can appear in any month name no one by name; {holiday}, {break} and {book} are filled in by the engine. */
window.FEMC_GAME_VARIANTS = {
  offDay: {
    sunday: [
      "Sunday. She woke at the usual time out of habit, remembered, and lay there listening to the dorm not get up, which was its own kind of music. Nobody needed her until noon.",
      "Sunday, and the light came in sideways through the curtain she never quite closed, warm on the blanket, warm on the ankle that had escaped it. She gave herself ten more minutes. Then twenty.",
      "No school. Somebody downstairs was making toast and burning it, the smell climbing the stairwell like an apology, and she lay there deciding whether the day was worth getting up for. It probably was. Probably.",
      "Sunday. She sat on the edge of the bed with her hair in her face and her uniform hanging on the back of the door like it belonged to somebody else, and for once it could stay there.",
      "A day off. She made her bed out of habit, then unmade one corner of it out of principle, and went downstairs to find out what the kitchen had.",
      { t: "Sunday, and rain on the window, steady and unbothered, the kind that canceled plans nobody had made yet. She pulled the blanket up to her chin. Perfect, honestly.", weather: ['rain'] },
      { t: "Sunday. Spring air through the cracked window, a little green, a little like rain that hadn't happened yet, and a whole day with nothing written in it. She didn't know what to do with that. She'd figure it out.", months: [4, 5] },
      { t: "Sunday, and already warm at eight, the air in her room thick and still, a cicada starting up outside like a machine nobody had remembered to turn off. She kicked the blanket to the floor and called it progress.", months: [7, 8, 9] },
      { t: "Sunday. The floor was cold enough that she lifted her feet off it and tucked them back under the blanket, and the window had fogged at the edges overnight, and nothing about the day was asking her to hurry.", months: [11, 12, 1] }
    ],
    holiday: [
      "{holiday}. No school, which was the part of the holiday everybody actually celebrated, and the dorm slept in with the dedication of people who had earned it.",
      "{holiday}. She'd had to check the calendar twice to be sure, the way she checked most things here, and then she lay back down and let the morning have her.",
      "{holiday}. She didn't entirely know what the day was meant to honor, and felt a little bad about that, and then made tea and felt better.",
      { t: "{holiday}. Golden Week had the whole city on trains to somewhere else, and Iwatodai went quiet and wide, like a room after the party has gone home. She liked it that way.", months: [4, 5] },
      { t: "{holiday}. The air through the window had the first edge of autumn in it, thin and clean, and she lay there working out what the holiday was for and decided it was for this.", months: [9, 10] },
      { t: "{holiday}. Cold morning, warm bed, and a long negotiation between the two that the bed was winning. She let it.", months: [11, 12, 1] }
    ],
    break: [
      "{break}. No alarm, no uniform, no bell, and a day so empty she could hear the fridge humming downstairs. She lay there and let it stay empty a while.",
      "{break}. The day was hers, all of it, and she turned it over the way you turn over a coin you found on the street, not sure yet what it would buy.",
      { t: "{break}. The heat was in the room before she was awake, pressing on the window, and the whole building had the slow, sticky quiet of a summer nobody had made plans for yet.", months: [7, 8] },
      { t: "{break}. A kid down the street was already shouting about the pool, and the light through the curtain was hard and white. She put the pillow over her face. Five more minutes of being nobody in particular.", months: [7, 8] },
      { t: "{break}. The radiator ticked. The window had frost in one corner. She stayed under the blanket with her knees up and felt, for a moment, like the only person awake in the city.", months: [12, 1] },
      { t: "{break}. The days were short and she was determined to waste the start of this one properly, curled up warm while the cold sat outside the window like a dog waiting to be let in.", months: [12, 1] }
    ]
  },

  monorail: {
    clear: [
      "The monorail across the bay, sun on the water in long broken stripes, and a carriage full of uniforms pretending not to be awake yet. She leaned her head against the glass. Five more stops.",
      "A man in a suit at the front of the carriage had fallen asleep standing up, one hand on the strap, swaying with every curve and never once falling, and she watched him the whole way across the bay with real respect.",
      { t: "Spring light through the monorail windows, soft on everybody's faces, and a first-year across the aisle mouthing vocabulary to himself like a prayer. She hoped he passed.", months: [4, 5] },
      { t: "The monorail was a greenhouse by eight, the air conditioning losing an argument with the sun and every window full of white glare off the bay. She fanned herself with her notebook. It didn't help. It felt like it did.", months: [6, 7, 9] },
      { t: "The bay was a cold clean blue this morning, the kind that only came in autumn, and the monorail slid over it quietly, and the girl beside her fell asleep on her shoulder, and she let her.", months: [10, 11] },
      { t: "Winter sun, low and bright and no warmer for it, glaring off the bay into everybody's eyes. Half the carriage had their scarves pulled up to their noses. So did she.", months: [12, 1] }
    ],
    cloudy: [
      "Gray sky over the bay, gray water under it, and the monorail running along the seam between the two like a needle. Nobody in the carriage talked much. The weather had that effect.",
      "A low ceiling of cloud sat over Port Island, flattening the city into one long colorless shape, and she watched it come closer through the glass and thought it looked like it hadn't slept either.",
      { t: "Clouds the color of pencil lead, thin enough to show the sun moving behind them like a pale coin, and the monorail hummed across the bay with the air inside smelling faintly of salt and somebody's shampoo.", months: [4, 5, 9, 10] },
      { t: "Clouds heavy with rain that hadn't made up its mind, the air in the carriage damp and close, and every umbrella on board folded and ready like a promise. Rainy season. It was always about to.", months: [6, 7] },
      { t: "A white sky the color of paper, the cold seeping in at the edges of the windows, and the bay underneath it the same color, so that the monorail seemed to be crossing nothing at all.", months: [11, 12, 1] }
    ],
    rain: [
      "Rain streaking sideways across the monorail windows, the bay gone to static underneath, and a carriage full of wet shoes and the smell of damp wool. Someone's umbrella dripped steadily onto her sock. She let it.",
      "The rain made the whole carriage quieter, everybody listening to it drum on the roof without meaning to, and she drew a small square in the fogged glass and watched the city through it.",
      "She'd forgotten her umbrella, which she discovered at the station, which was the worst place to discover it. She rode the monorail with her hair dripping into her collar and her face arranged into somebody who'd meant to.",
      "Through the rain the city across the bay was only lights and suggestions, and the monorail went toward it steadily, like it knew the way better than any of them did.",
      { t: "Rainy season, and the monorail windows hadn't been dry in a week. Umbrellas leaned against every knee. The air inside was warm and wet and tasted faintly of everyone.", months: [6, 7] },
      { t: "Cold rain, the kind that got into the joints of the day, and the carriage heaters running too hot to make up for it, so that she rode across the bay with her face warm and her feet freezing.", months: [11, 12, 1] }
    ],
    snow: [
      "Snow on the monorail windows, melting the second it landed, and the bay below a flat gray sheet swallowing the flakes whole. Everybody in the carriage was looking out. Even the man with the newspaper.",
      "The monorail crept across the bay with the snow coming down slow and fat around it, and the whole carriage had the hush of a library, and she pressed a fingertip to the cold glass to make sure it was real.",
      "Snow had turned the platform into a skating rink and half the school into comedians about it, and by the time the monorail pulled out her shoes were soaked through. Worth it, somehow.",
      "White roofs on Port Island, white rails, white sky, and the monorail threading through all of it at half speed. She'd never seen the city this quiet. She didn't think she had, anyway."
    ]
  },

  lunch: {
    clear: [
      "Lunch. She ate on the stairs up to the roof where the noise thinned out, a convenience store sandwich and a carton of milk, and watched a pigeon on the railing outside watch her sandwich.",
      "The cafeteria line was a contact sport. She came out of it with the last melon bread, which a boy behind her had clearly planned his whole morning around. She did not give it back.",
      "She ate at her desk, half listening to a group by the door argue about a TV drama with the kind of passion usually reserved for wars, and found, to her own surprise, that she had opinions too.",
      "Lunch. A girl from the next class over handed her a piece of tamagoyaki for no reason at all and walked off before Solar could thank her, which happened here sometimes, and which she never knew what to do with.",
      "The bread she'd bought was somehow both squashed and stale, which was an achievement. She ate it anyway, looking out the window at nothing, and the hour went soft at the edges.",
      { t: "Lunch on the roof, the wind trying to steal her napkin, and the whole city spread out below like it had been laid there for her to look at between bites.", weather: ['clear', 'cloudy'] },
      { t: "Lunch under the courtyard trees, the branches going from pink to green overhead, a stray petal or two still landing in people's rice, and nobody minding.", months: [4] },
      { t: "Too hot for the roof. Half the class ate in the stairwell where the concrete stayed cool, knees up, shoes off for those who dared, and she was one of those who dared.", months: [6, 7, 9] },
      { t: "Lunch in the classroom with the heater ticking and everybody's coats hung over the backs of their chairs, steam rising off thermoses, the windows gone white. It was like eating inside a kettle. A nice one.", months: [12, 1] }
    ],
    rain: [
      "Rain on the windows, and the whole school crammed into the hallways and classrooms with their lunches, the air thick with soy sauce and wet socks. She found a windowsill and claimed it.",
      "Lunch indoors. Somebody had cracked a window and the smell of rain came in cold and green under all the food, and she breathed it in like it was dessert.",
      "The roof was closed for the rain, so the roof people had invaded the library, and the librarian was losing a quiet war. Solar ate a rice ball behind a dictionary and kept her head down.",
      "Rain drumming on the roof, the cafeteria packed wall to wall and nowhere to sit, so she ate standing at the window with her bento balanced on the ledge, watching the courtyard flood one puddle at a time.",
      "Lunch, and the sound of rain under every conversation, so constant it stopped being a sound and became the room. She ate slowly. Nobody was going anywhere."
    ]
  },

  classQuiet: [
    "The teacher wrote something long on the board and then turned around to explain it, and somewhere between the two she lost the thread entirely and had to quietly rebuild it from her neighbor's notes.",
    "A fly had gotten in and was trying the window, again and again, with a persistence she found almost moving. The period was mostly about the fly.",
    "There was always one sound that owned a class period, and today it was the clock above the door, every tick deliberate, like it was being paid by the hour.",
    "She copied the board in neat lines and understood maybe half of it in the moment, which was fine. The other half would make sense at midnight, at her desk, all at once.",
    "Someone's stomach growled in the silence after a question, loud enough for the whole room, and the teacher kept going with a heroic straight face. The class held it together. Barely.",
    "The girl in front of her had drawn a very good horse in the margin of her textbook. Solar watched it get a mane, a saddle, a small rider with a hat. The lesson happened somewhere behind it.",
    "Pages turning, pens clicking, the low steady voice at the front of the room; the classroom ran like a machine everybody had agreed to be part of, and for an hour she was part of it too.",
    "A question went around the room and missed her by one desk. She let out a very quiet breath and wrote something in her notebook so she'd look busy if it came back.",
    "The teacher made a joke. Two people laughed, one of them a beat too late, and the silence afterward was the kind you could have set a cup on.",
    { t: "Sunlight crawled across the desks one row at a time while the lesson went on, and when it reached hers she let it sit warm on her hands and took her notes a little slower.", weather: ['clear'] },
    { t: "Rain on the windows all period, and the lesson lost a fight with it. Half the room was watching the drops race. She had money on the left one.", weather: ['rain'] },
    { t: "The windows were open and the heat came in anyway, and so did a gym class from outside, a whistle, a ball, somebody yelling about the ball. Inside, the lesson wilted like everything else.", months: [6, 7, 9] },
    { t: "The heater at the back of the room had two settings, off and the surface of the sun, and today it had picked the second. Every head in the back row was slowly sinking.", months: [12, 1] }
  ],

  late: {
    plain: [
      "She lay on top of the covers in the dark with the window open a crack, listening to the city breathe out, a car somewhere, a train somewhere else. Then she got under the covers like a responsible person.",
      "The dorm creaked as it cooled, the way old buildings did, the pipes knocking twice and then thinking better of it. She counted the knocks and lost count. That was usually how it went.",
      "She brushed her teeth and looked at the girl in the mirror a beat too long, the way she sometimes did, like she was checking the face was still the one she'd gone to bed with yesterday. It was. Close enough.",
      "Lights out. Her phone glowed once on the desk and went dark again, and she didn't check it, and then she did, and it was nothing, and she lay back down feeling foolish and oddly warm.",
      "Somebody's music was leaking through the wall, too low to name, just a bass line and the shape of a song. She fell asleep trying to work out which one.",
      "The day replayed behind her eyes in pieces, the wrong pieces mostly, a joke she should have answered, a step she'd missed on the stairs. She let it run. It ran out on its own.",
      "Near midnight the dorm went quiet in a way that felt almost arranged, every room settling at once, and she lay very still and waited for the clocks to do whatever it was the clocks did here.",
      "She set her alarm, checked it, set it again. The room went blue, then black. She was asleep before she could check it a third time.",
      { t: "Rain on the window all night, soft and even, something to hold on to. She fell asleep to it like she'd been doing it her whole life. Maybe she had.", weather: ['rain'] },
      { t: "Too warm to sleep properly. She lay with one leg out of the sheet while the fan turned its slow head back and forth across the room like it was looking for someone, and eventually it found her.", months: [7, 8, 9] },
      { t: "Cold enough tonight that she slept in socks and a sweater and still pulled the blanket over her head, a small warm cave, the rest of the world reduced to the sound of her own breathing.", months: [11, 12, 1] }
    ],
    battled: [
      "Home from the tower with the stairwell lights too bright and her hands still shaking a little, not from fear, from something that hadn't finished yet. She sat on the edge of the bed until it did.",
      "She showered for longer than was reasonable, until the water ran cold and the smell of the tower was off her skin, and then she lay down in her towel and didn't remember the rest.",
      "Every muscle she had was filing a complaint. She read them one at a time lying in the dark, the shoulder, the calf, the long ache across her back, and fell asleep in the middle of the list.",
      "Her boots by the door, scuffed in places they hadn't been scuffed that morning. She looked at them for a while and decided they were tomorrow's problem.",
      "She was too tired to sleep, which wasn't supposed to be possible, so she lay there with her heart still going like it was on the stairs and waited for it to remember it was home.",
      "The bed caught her. That was the only way to put it. She didn't lie down so much as stop being upright, and the ceiling went soft and far away."
    ],
    rest: [
      "She was asleep before nine, which felt like cheating, and dreamed about absolutely nothing, which felt like a gift.",
      "Bed early, the lamp off, the dorm still noisy below her with other people's evenings. She listened to it from very far away and let it carry her off.",
      "She lay down meaning only to rest her eyes. That was the last decision she made.",
      "Clean sheets, a cool pillow, nobody needing anything. She slept the deep, dumb, dreamless sleep of the very tired, and woke once at some unholy hour only to turn over and go back under.",
      "Sleep came the way the tide comes in on the pier, slowly and then all at once, and she was under before she noticed the water at her ankles."
    ],
    fullMoon: [
      "The moon was too big tonight, swollen and yellow over the rooftops, its light spilled across her floor. She lay awake and didn't look at it, and felt it looking anyway.",
      "Full moon. The room was bright enough to read by, every edge gone silver, and her body was awake in a way that had nothing to do with being rested. She waited. She didn't know what for.",
      "She pulled the curtains against the full moon and it came through anyway, one bright seam down the middle of the room. She lay there and watched the seam, and the clock, and the seam.",
      "The moon sat in her window like it had something to say. A dog down the street had been barking at it for an hour. She understood the dog."
    ]
  },

  home: [
    "She came home early and the lounge was empty and full of afternoon, dust turning in the light by the window. She sat on the couch with her shoes still on and let nothing happen for a while.",
    "Straight back to the dorm. She made tea, forgot it, found it cold an hour later on the windowsill and drank it anyway, and that was the whole afternoon.",
    "She went home, lay on her bed fully dressed, and watched the ceiling like a show she'd seen before and still liked.",
    "The dorm in the afternoon was a different building, quieter, the TV off, the stairwell holding its breath. She walked through it slowly, like a guest. It still felt that way sometimes.",
    "She came home, changed into the softest thing she owned, and did nothing productive at all, with great commitment.",
    "Home. She sat at her window and watched the street below, a delivery bike, a cat on a wall, a woman with groceries, and the afternoon went past at the pace of all of them.",
    { t: "She came home with wet shoes and hung her socks over the chair and sat cross-legged on the bed listening to the rain take the afternoon apart, piece by gentle piece.", weather: ['rain'] }
  ],

  study: [
    "She worked through a set of problems at her desk with the lamp pulled close, and around the eighth one something clicked, and she did the last four just to feel it click again.",
    "Flashcards. She made forty, quizzed herself on forty, and missed the same three every time, which was telling her something, though she wasn't sure she wanted to hear it.",
    "She read the chapter twice, once fast and once slow, and wrote it out again in her own words down the margins, and by the end the words were hers.",
    "Two hours at her desk. The tea went cold, the eraser went small, and the notebook filled up with handwriting that got neater the more sure she got.",
    "She studied with her headphones on and nothing playing, just for the quiet they made, and the dorm below went on without her.",
    "She got stuck on one question for forty minutes, went down the hall for water, and solved it on the stairs. She ran back up and wrote it down before it could leave.",
    { t: "Rain on the window, the lamp warm on the page, and the kind of focus that only came on nights like this, as if the weather had closed a door for her. She got through twice what she meant to.", weather: ['rain'] },
    { t: "The rain made the room smaller and the desk brighter, and she worked steadily inside the sound of it, page after page, until the gutters ran over outside and she looked up surprised to find it late.", weather: ['rain'] },
    { t: "A wet night, the dorm smelling of everyone's damp umbrellas, and she spread her notes over the whole bed and studied in the middle of them like a girl in a nest.", weather: ['rain'] },
    { t: "The window open, a moth bumping the screen, the hum of the city coming in with the heat. She studied with her hair pinned up and the pen slippery in her fingers, and got it done anyway.", months: [6, 7, 8, 9] },
    { t: "She studied wrapped in her blanket with only her hands sticking out, which made writing slow and turning pages an event. She learned more than she expected. Cold was good for something.", months: [12, 1] }
  ],

  rest: [
    "She turned the lamp off early and lay in the dark with her eyes open, letting the day drain out through her heels, and somewhere in the draining she fell asleep.",
    "Bed at nine, a glass of water on the nightstand, her phone face down. She felt older than eighteen and younger than eighteen at the same time, and slept like a stone either way.",
    "She took a long bath, put on clean pajamas and got into bed while the dorm was still loud, which felt a little like skipping class. She didn't feel bad about it for long.",
    "Early night. She lay on her side and listened to the building, the pipes, a laugh downstairs, a door, and every sound was a little farther off than the last.",
    "She'd been running on something all week, and tonight she let it run out, lights off, curtains drawn, the blanket up to her ears like a kid hiding from a storm.",
    "She meant to read for a bit first. The book was still open on her chest in the morning."
  ],

  read: {
    chapter: [
      "She read {book} in bed with the lamp angled just right, a chapter, then another, then half of one more before her eyes started going over the same line twice.",
      "{book}, a chapter tonight. She underlined one sentence in pencil, then felt guilty because the book was secondhand, then decided whoever had it before her would have underlined it too.",
      "She sat cross-legged on the floor with {book} propped on her knees and read until her foot fell asleep, which was the book's fault, she decided, and a compliment.",
      "Another chapter of {book}. The old couple at Bookworms had left the receipt inside as a bookmark, and she kept using it, moving it forward a little every night like a small slow train.",
      "She read {book} with a cup of tea going cold beside her and the dorm settling around her, and every so often she stopped and looked at the wall and let a line sink in.",
      "{book} was better than she expected, or she was more tired than she thought, and either way she read a chapter and a half and fell asleep with her finger holding the place."
    ],
    finished: [
      "She finished {book} a little after eleven and closed it gently, the way you close a door on someone sleeping, and sat a while with her hand flat on the cover.",
      "The last page of {book}. She read it twice, then once more under her breath, and put the book on the shelf with the others, a row that was slowly turning into a person.",
      "She finished {book} and felt the particular emptiness of a book being over, like stepping off a train and the floor not moving. She'd carry some of it. That was the point.",
      "{book}, done. She wrote the date inside the back cover in small handwriting, so somebody someday would know she'd been here, and turned off the light."
    ]
  },

  activities: {
    library: [
      "She found the quiet corner past the reference shelves where the light came in slanted and nobody ever came, and worked through two chapters with the kind of focus she only had when no one could see her having it.",
      "The librarian stamped the returns in a slow, steady rhythm, ka-chunk, ka-chunk, and Solar studied to it like a metronome until she had a page of notes and a crick in her neck.",
      "A boy at the next table had fallen asleep on his textbook, and she worked through her problem set to the sound of his breathing and left quietly without waking him. Somebody had to let him have it.",
      "She pulled down an old atlas by accident looking for something else and spent twenty minutes in it, reading the names of places like she might recognize one. Then she did her actual homework. Mostly.",
      "The library had that late, golden, dust-in-the-air feeling, and she read until the words went soft, and then made herself read one more page out of principle.",
      { t: "Rain against the tall library windows, and the room so quiet she could hear pages turning three tables away. She got through a whole chapter without looking up once.", weather: ['rain'] }
    ],
    tutoring: [
      "A first-year girl who never asked questions finally asked one, very quietly, near the end, and it was a good one. Solar answered it slowly and made sure everybody heard who'd asked.",
      "English today. Four first-years reading a dialogue aloud in four very different voices, and by the end she had them doing it like a soap opera, and every one of them remembered the grammar.",
      "One of the first-years had clearly been crying before the session and pretended she hadn't, and Solar pretended not to know, and they did fractions together very gently for an hour.",
      "A boy asked her how she'd gotten so good at this and she said practice, which wasn't a lie exactly, just a sentence that didn't go all the way down. She didn't remember learning any of it. She showed him anyway."
    ],
    schoolgarden: [
      "Someone had left a hand-lettered sign in the herb bed that read PLEASE DON'T EAT THE MINT, and she weeded around it respectfully, and ate one leaf of the mint.",
      { t: "Seedlings in the end bed, small and green and stubborn, and she thinned them out one by one and felt bad for every one she pulled, which was probably not the right attitude for gardening.", months: [4, 5] },
      { t: "The roof was a frying pan, the soil cracked, and she hauled watering cans up from the tap until her shirt stuck to her back and the beds went dark and sighed. The cucumbers were thriving. Somebody had to.", months: [6, 7, 9] },
      { t: "Autumn on the roof: the last tomatoes splitting on the vine and the sweet potatoes ready, and she dug them out with her hands, dirt under every nail, and carried them down to the home ec room like trophies.", months: [10, 11] },
      { t: "Winter on the roof meant covering the beds, tucking old sheets over the cabbages and weighing them down with bricks, her fingers numb and the wind coming straight off the bay. The cabbages looked cozy. She didn't.", months: [12, 1] }
    ],
    hagakure: [
      "The old man behind the counter set the bowl down with both hands like it was something alive, and she ate with her face in the steam until her nose ran and her head cleared.",
      "Hagakure was loud with slurping and the radio and the owner shouting orders at nobody in particular, and she sat in the middle of it with a bowl of pork-bone broth and felt, briefly, like she'd always lived here.",
      "She ordered the regular, saw the man next to her get the extra chashu, and changed her order in a small voice. The owner didn't even look up. He'd heard it before.",
      { t: "The rainy-day special came out in a cloud of garlic and pepper, and she ate it with her wet hair dripping onto the counter, and every spoonful gave back something the weather had taken.", weather: ['rain'] }
    ],
    megabowl: [
      "The Mega Bowl arrived and the counter went quiet. She tied her hair back and ate with the grim focus of a woman defusing something. She got further than the last guy. The owner wrote it down.",
      "Minute twelve, she was fine. Minute eighteen, she was negotiating with her own body. Minute twenty-six, a stranger at the counter started chanting “go, go, go” under his breath, and then the whole counter was in on it. She finished, and could not stand up for ten minutes.",
      "She lost. She lost with dignity, the bowl two-thirds empty and her chopsticks laid neatly across it, and the owner gave her a toothpick and told her the noodles always win the first time.",
      "Halfway through she understood something important about her limits and something else about her pride, and the two had a long argument, and pride won, and her stomach filed a formal objection all the way home."
    ],
    wildduck: [
      "The fries came in a paper cone so greasy it had gone see-through, and she ate them on a stool by the window watching the strip go by, salt on her fingers and nothing on her mind.",
      "A middle-schooler at the next table dared his friend to finish a large. The friend did not. Solar, on her own large, did not look over, finished it, and left without making eye contact, a legend in her own quiet way.",
      "She ordered something with the word Inferno in its name just to see what would happen. What happened was twenty minutes of very controlled breathing and three cups of water. She finished it.",
      "Wild-Duck's speakers played the same five songs on a loop, and by the end of her burger she knew the words to two of them, which she would deny."
    ],
    bathhouse: [
      "The bathhouse was mostly grandmothers at this hour, talking about their knees and their sons in the steam, and she sank into the big tub at the edge of their conversation and let it wash over her with the water.",
      "She scrubbed on the little stool until her skin went pink, rinsed, and stepped into the hot water an inch at a time, and somewhere around her waist the whole week let go of her shoulders.",
      "The painted mountain on the bathhouse wall was peeling at one corner, and she lay with her head back on the tile looking at it through the steam and decided it was the most beautiful mountain she'd ever seen. She didn't have many to compare it to.",
      "Afterward she bought a bottle of coffee milk from the cooler and drank it standing, one hand on her hip, the way the old men did, because apparently that was how it was done. It tasted better that way. It really did."
    ],
    electricbath: [
      "The current hummed up through her legs and settled in her teeth, and she sat absolutely still with her face perfectly calm while every nerve she owned filed for divorce.",
      "An old man in the electric bath told her the trick was to think about something boring. She thought about the tax system. It worked for four minutes.",
      "She lasted longer than last time. Not by much, but the regulars noticed, and one of them raised his little towel at her from across the room like a flag.",
      "It felt like the water was gossiping about her in a language made of static. She sat in it out of stubbornness until she couldn't feel her calves, and then a little longer out of something worse."
    ],
    chagall: [
      "The barista made the Pheromone Coffee without looking, the way people do things they've done a thousand times, and slid it across with a wink she decided was professional.",
      "She drank it slowly at the counter, and the boy on the next stool, who'd been reading the same page of a magazine for ten minutes, finally turned it. She took that as a sign of something.",
      "The coffee was sweet and strange and left a warmth behind her ribs, and by the bottom of the cup she was sitting differently, legs crossed, shoulders back, like a girl in an advertisement for herself.",
      "Chagall smelled like roasted beans and somebody's expensive perfume, and she nursed her cup at a window table and practiced looking like someone waiting for someone. She wasn't. It was still good practice."
    ],
    cafestudy: [
      "She worked through a page of English translation at the corner table while the old man by the door did his crossword, and once he asked her for a word and she knew it.",
      "The café radio played something soft and jazzy, and she highlighted half a textbook to it, and the refills kept coming and the pages kept turning, and it was the most efficient she'd been all week.",
      "She did math on a napkin when she ran out of paper, and the waiter brought her a stack of fresh ones without a word and set them down like a gift.",
      "Her notes, the steam off the cup, the gentle clatter of saucers. She stayed long enough that the people at every other table changed twice, and she'd done everything she meant to."
    ],
    boutique: [
      "She tried on a dress she would never wear and stood in the changing-room mirror for a long time, turning this way and that, meeting the eyes of someone she was still getting to know. She bought a hair clip.",
      "The clerk had opinions and wasn't shy about them, and by the end Solar was holding a blouse she never would have picked and liked better than anything she'd picked herself. She bought it. She was annoyed about that.",
      "A belt, a pair of socks with small strawberries on them, and twenty minutes walking up and down the aisle in heels she had no intention of buying, just to learn how.",
      "She held a sweater up against herself in the shop window, the mall going by behind her own outline, and for a second the girl in the glass looked like someone with a whole life behind her. She bought the sweater."
    ],
    karaoke: [
      "She picked a ballad nobody would hear her ruin and ruined it gloriously, eyes shut, one fist around the mic, the little booth throbbing with bass from the room next door.",
      "She sang a song she didn't know she knew. The words came up out of her before the screen showed them, the whole first verse, and she stopped and stood there with the music going on without her. Then she picked the next one.",
      "The tambourine in the booth was missing half its jingles. She used it anyway, for the whole hour, with conviction.",
      "Halfway through an idol song she caught her reflection in the black screen between verses, hair wild, cheeks pink, mouth open mid-note, and laughed so hard she missed the chorus."
    ],
    arcade: [
      "A shooting game with a plastic gun that pulled to the left. She worked out how far left by the second stage and put her initials on the board in fourth place. It looked good up there.",
      "The air hockey table was free and so was a stranger, a salaryman with his tie thrown over his shoulder, and they played three games without a word and shook hands at the end like duelists.",
      "A fighting game in the back with a character who looked a little like her if you squinted. She played as her until the coins ran out, lost more than she won, and didn't mind.",
      "Game Panic's lights and noise wrapped around her like weather, and she lost an hour to a puzzle game, stacking falling shapes into tidy lines while the whole room blinked and shouted behind her."
    ],
    crane: [
      "The plush she wanted was wedged under three others. She spent two tries moving the others aside like a surgeon and the third lifting it clean. The attendant applauded. Slowly. Sarcastically. Still.",
      "She won a keychain of a frog in a hat, which she had not been trying to win but which was clearly meant for her. She clipped it to her bag on the spot.",
      "The claw dropped, closed, lifted the bear an inch and let go, three times running. On the fourth she nudged it by the ear into a better angle and it tumbled into the chute like it had been waiting for her to figure it out.",
      "A little girl was staring at a rabbit in the machine with her whole heart. Solar won it on the second try, looked at it, and handed it down. The girl's mother bowed. Solar felt very tall all the way home."
    ],
    lateshow: [
      "The late show was a creature feature with a rubber monster and a very sincere orchestra, and the five people in the theater laughed at five different moments, and she laughed at all of them.",
      "Something about a haunted hospital, with a corridor scene so long and quiet the whole theater leaned forward together. When it came, she didn't scream. Her popcorn did. Most of it.",
      "Grainy black and white with the subtitles half off the screen, and she didn't follow all of it, and on the walk home every shadow along the strip seemed to know how it ended.",
      "She sat in the very back row with the seat creaking every time she moved and watched a ghost story that was mostly silence and a woman in white at the end of a hall, and walked home with her keys between her fingers, just in case."
    ],
    vending: [
      "The machine ate her coins, thought about it, and gave her a hot corn soup she hadn't pressed for. She drank it on the bench anyway. It was, against all odds, exactly what she wanted.",
      "She bought a melon soda for the color more than anything and drank it watching the trains come in, the board flipping through the names of places she'd never been. Or didn't remember being. Same thing, some days.",
      "A row of six machines, and all six had the same green tea. She bought one from the machine on the end, for variety.",
      "Every button she wanted had a sold-out light, and there was one lonely can of something called Power Mint. She took the risk. She was still tasting it on the walk home.",
      "She pressed the button, heard the can drop, and reached in to find two. She looked around like somebody might come for the second, and then gave it to a tired-looking station attendant, who seemed to need it more.",
      { t: "Something cold and fizzy and violently orange. She held the can to her neck first, then her wrists, then finally drank it, and the station heat backed off by about one degree.", months: [6, 7, 8, 9] },
      { t: "A can of milk tea so hot she had to hold it with her sleeve pulled over her hand, and she stood in the machine's warm hum with the cold coming in off the platform and drank it slowly.", months: [11, 12, 1] }
    ],
    alley: [
      "A group of guys by the dumpsters stopped talking when she turned the corner. She didn't speed up. She didn't slow down. By the time she reached the far end they'd started talking again, about her, she suspected, though not unkindly.",
      "Halfway down the alley a cat crossed in front of her and stopped to look, and they considered each other under a single buzzing bulb, and then the cat decided she was fine and moved on. She took it as a reference.",
      "Someone had sprayed something on the wall she couldn't read and a phone number she didn't want to. Her footsteps came back off the brick doubled, like someone was walking with her. Nobody was. She checked twice.",
      "Steam from a kitchen vent, a radio somewhere upstairs, the smell of old beer and frying oil, and a man smoking in a doorway who nodded as she passed. She nodded back. That was the whole transaction.",
      "The alley was darker than last time; someone had broken the light at the far end. She walked it anyway, eyes adjusting, every sense opened all the way up, and came out the other side taller and a little shaky, both at once.",
      { t: "Rain in the alley, dripping off the fire escapes and drumming on the dumpster lids, the puddles full of neon from the street. She walked straight down the middle of it, and her shoes were soaked, and she didn't care at all.", weather: ['rain'] }
    ],
    pier: [
      "Old men fishing off the end of the pier with their thermoses lined up beside them like a row of soldiers. One of them caught something tiny, threw it back, and nodded at her as if she'd been part of it.",
      "She leaned on the rail with her chin on her arms and watched a container ship go by so slowly it seemed to be standing still, and found she'd been holding her breath, and let it go.",
      "Gulls circling, the water slapping the pilings below, and the wind pushing her hair everywhere it didn't belong. She stopped fixing it after a while. The bay didn't care what she looked like.",
      "A couple was taking photos at the end of the pier, trying and failing to get the wind to behave, and they asked her to take one. She did. She took three, actually, so they'd have choices.",
      { t: "Gray water, gray sky, and the horizon gone soft between them, as if somebody had erased the line. She stood at the rail and looked at where it should have been. It was peaceful, not knowing.", weather: ['cloudy'] },
      { t: "The planks were hot through her shoes and the water glittered hard enough to hurt, and she walked all the way to the end and back with her eyes half shut and the salt drying on her lips.", months: [6, 7, 8, 9] },
      { t: "The wind off the bay had teeth in it today, and the pier was empty except for her and one stubborn fisherman in a hat with earflaps. They didn't speak. They had an understanding.", months: [11, 12, 1] }
    ],
    beachclean: [
      "Cigarette butts, a deflated beach ball, half a sandal, and a glass bottle worn so smooth by the sea it was nearly a stone. She kept the bottle. Nobody said she couldn't.",
      "The group leader was a woman in a sun visor with a voice like a whistle, and she had everybody working the sand in neat rows like a drill team, and Solar had never been so organized in her life.",
      "A kid found a crab and the whole cleanup stopped for ten minutes so everyone could look at it. Then they put it back and kept going, and the bag in Solar's hand felt lighter for no reason.",
      { t: "Cold work, the wind straight off the water and her gloves going stiff, but the retirees just kept going, so she did too, and afterward someone passed around a thermos of sweet tea that tasted like being forgiven.", months: [11, 12, 1] }
    ],
    pray: [
      "The coin hit the bottom of the box with a hollow little clink. She clapped twice, bowed, and asked for something small and specific this time, because she'd heard that was how it worked.",
      "She stood at the offering box with her eyes shut while the wind moved through the trees above the shrine, and for a while she forgot to wish for anything at all, and that seemed to be fine too.",
      "There was a ten-yen coin in her pocket that had been there for days, waiting for this. She let it go into the box and felt the odd relief of having spent it well.",
      "An old man prayed beside her for a long time, much longer than she did, his lips moving, and when she left he was still there. She hoped whatever it was came true for him.",
      "She wished for everyone she knew to be all right, which was a lot to ask for ten yen, and then added herself at the end, quickly, like a footnote.",
      { t: "Rain dripping off the shrine roof in strings, the stones dark and shining. She made her wish under her umbrella and clapped against her own wrist, which probably still counted.", weather: ['rain'] }
    ],
    shrinesweep: [
      "The leaves came down as fast as she swept them, so she stopped fighting it and just swept in a slow rhythm, the bamboo broom whispering on the stone, until the rhythm was the point.",
      "She wiped down the offering box and the bell rope and the little stone foxes one by one, and the foxes looked better for it, or at least less disapproving.",
      "A boy from the playground behind the shrine came to help without being asked, mostly by chasing the leaves she'd already swept, and she let him, and somehow they finished anyway.",
      { t: "Petals everywhere instead of leaves, pink and stuck to the damp stones, and she swept them into soft heaps that the wind kept rearranging like it had better ideas.", months: [4] },
      { t: "Red and gold leaves, so many, a whole season coming down at once. She swept them into a pile so perfect she almost couldn't bring herself to bag it.", months: [10, 11] }
    ],
    clinic: [
      "The waiting room smelled like disinfectant and old magazines, and she waited an hour to be told she was run down, which she knew, and given something for it, which helped.",
      "The nurse took her temperature, frowned at it, and took it again, and the doctor wrote a prescription in handwriting like a seismograph, and she walked out feeling lighter already, which was probably the placebo. She'd take it.",
      "A little boy in the waiting room explained the plot of a cartoon to her very seriously, and by the time her name was called she was invested. She never found out how it ended.",
      "The doctor asked how she was sleeping and she said fine, and he looked at her over his glasses long enough that she said not great, and he nodded like that was the answer he'd been waiting for.",
      "An injection, a bottle of pills, and a lecture about drinking water she'd heard before and nodded through again. The bill made her wince. The rest of her stopped aching by dinner.",
      "She sat on the paper-covered table swinging her feet while the doctor looked in her ears, her throat, her eyes, and had the odd thought that he was looking for something in there, and so was she."
    ],
    wardvisit: [
      "A boy with a broken leg wanted her to draw on his cast, so she drew a dragon down the whole length of it, and then the nurse wanted one on her clipboard, and then the boy in the next bed wanted one too.",
      "She read a chapter book to three kids in the playroom, one of whom fell asleep and two of whom demanded the next chapter, and she promised to come back, and meant it.",
      "Old Maid with a girl who had the best poker face Solar had ever seen. She lost four times. The girl didn't smile once until the very end, when she smiled so wide it took up her whole face.",
      "A kid asked if she had brothers or sisters, and she said she wasn't sure, and he laughed because he thought she was joking. She laughed too. She dealt another hand."
    ]
  },

  dorm: {
    cook: [
      "Nikujaga, the slow kind, potatoes going soft in the sweet broth while she did homework at the counter, and by the time it was ready there was a small line of people pretending they'd only come down for water.",
      "She made gyoza from scratch and folded every one herself, badly at first, then better, then well, so the plate came out a timeline of her getting the hang of it. The early ones went first anyway.",
      { t: "A rainy night called for something hot, so she made a pot of udon big enough for the whole building, and the kitchen windows steamed over, and the lounge smelled like ginger and soy until bedtime.", weather: ['rain'] },
      { t: "Nabe in the middle of the dining table, everybody's chopsticks in the same pot, the steam fogging the window. She'd made too much. It didn't matter. It never lasted.", months: [11, 12, 1] }
    ],
    roofgarden: [
      "She watered the planters by the light from the stairwell door and the glow of the city, the hose spluttering, and the smell of wet soil rose around her like the roof was breathing out.",
      { t: "The seeds she'd put in had come up in a row of small green question marks. She watered them carefully and told them, under her breath, that they were doing great.", months: [4, 5, 6] },
      { t: "The roof was still giving off the day's heat, and she watered the planters twice and the soil drank it so fast it hissed. The cherry tomatoes were ripe. She ate one off the vine, still warm.", months: [7, 8, 9] },
      { t: "The basil had gone to flower and the tomato vines had gone brown, and she pulled them gently and turned the soil over in the cold, getting the beds ready for something, though she wasn't sure what yet.", months: [10, 11] },
      { t: "Not much to water in winter, just the green onions and one stubborn rosemary, but she came up anyway, breath fogging, and stood at the rail looking at the city's lights while the plants slept.", months: [12, 1] }
    ],
    walkkoro: [
      "Koromaru stopped at the same corner as always and looked back at her, as if checking she knew the route. She did. He went on anyway, satisfied, his tail a slow white flag in the dark.",
      "A man on a bicycle slowed down to say what a good dog, and Koromaru accepted the compliment with great dignity and did not look at him again. Solar apologized on his behalf. He didn't seem sorry.",
      "They took the long way tonight, past the shrine and back along the river, and neither of them was in a hurry. Every so often he looked up at her. She looked down. That was the whole conversation.",
      { t: "Summer air, the river loud with frogs, and Koromaru chasing moths under the streetlamps with the seriousness of a professional. He caught none. He seemed to consider the walk a success.", months: [8, 9] },
      { t: "A cold night, the riverbank crunchy with frost, and Koromaru trotting ahead with his breath puffing in small clouds. When they stopped, he pressed against her shins until she crouched and let him warm her hands.", months: [12, 1] }
    ],
    sew: [
      "She sewed a button back on her coat, then another that was only thinking about falling off, then a third for good measure, and the coat hung straighter on its hook like it was grateful.",
      "A patch over a hole in her gym shorts, small neat stitches and a square of fabric in a color that didn't quite match. She decided that made it hers.",
      "She hemmed a pair of trousers by lamplight with pins between her lips, the needle catching the light on every pull, and the dorm went quiet around her one door at a time.",
      "She tried to make a little drawstring bag out of a scrap of yukata cotton and threaded the drawstring through the wrong side twice. The third time it worked. She put three hair ties in it and felt accomplished."
    ],
    fix: [
      "The lounge lamp had been flickering for a week like it was trying to send a message. She took it up to her desk, found the frayed cord, and fixed it with electrical tape and patience. It stopped talking.",
      "The toaster, which had been toasting only one side of the bread for months. She took it apart, cleaned out a geological record of crumbs, and put it back together. Both sides. A small miracle.",
      "A cracked charger, a wobbly chair leg, a drawer that stuck. She went down the list one by one, and by the end of the evening her hands smelled like metal and her chest felt quietly full.",
      "Someone's portable radio, its dial stuck on a station that only played enka. She freed it. Then, out of curiosity, she tuned it back to the enka and listened to a whole song before she moved on."
    ],
    retro: [
      "A racing game with blocky cars and music like a doorbell having the time of its life. She took first place on the third track and leaned back in her chair like she'd won something real.",
      "Falling blocks, the music getting faster and faster as she went, and she played until she could see the shapes on the ceiling when she looked up. She stopped. She played one more.",
      "An old RPG with a save point at the top of a tower, and she climbed it slowly, leveling up on the way with the stubborn patience of somebody who knew a thing or two about towers.",
      "She lost to a pixelated boss nine times, and on the tenth sat back with her heart pounding while the victory music played, absurdly proud, alone in her room at midnight."
    ],
    keys: [
      "She practiced the left hand alone for an hour, the same rolling bass line, until it ran under her fingers like water. The right hand could wait until tomorrow.",
      "She tried to pick out a song she'd heard in a shop that afternoon, by ear, wrong notes and all, until it sounded almost right, and almost right felt wonderful.",
      "Scales, chords, then a long slow wander in the dark with the headphones on, notes she hadn't planned going places she didn't expect. Nobody would ever hear it. That was what made it good.",
      "One of the keys stuck a little, the B-flat, and she worked around it until the song bent itself to fit, which was, she thought, probably the most useful thing a person could learn."
    ]
  }
};
