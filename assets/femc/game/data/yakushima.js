/* Yakushima (7/21–7/23): the summer trip's day plan (2026-10-21). Format: core.js tripPlan. Each day has early / after /
   evening / late slots (calendar.js trips[].slots); a slot is a scene, or a pick of who to spend that part of the day with
   (the ♪ from its choices go to that person). The story's own scene (story-act3.js 'a3-yakushima', 7/22 late, "on the second
   evening") plays in its slot; the plan leads into it and out of it. S.E.E.S. only: Mitsuru, Akihiko, Yukari, Junpei and
   Fuuka, and the Chairman for the first night; Aigis from the morning of 7/23. Backgrounds: places.js 'Yakushima · …' rules
   (the ferry, the villa, its balcony, the forest). The first night's pick shows the beach fireworks; the first dinner is on the terrace. */
window.FEMC_GAME_TRIP = {
  yakushima: {
    cast: { captain: 'The Ferry Captain' },
    days: {
      '7/21': {
        early: { title: 'island time', place: 'Yakushima · Ferry', time: 'Morning', music: 'trip', scene: [
          { n: "The ferry left Kagoshima at seven with S.E.E.S. on the top deck in a row along the rail like birds on a wire, and the sea was so blue it looked fake, and the island came up out of it over three hours, green first and then greener, mountains wrapped in cloud down to the water." },
          { s: 'junpei', f: 'flustered', t: "I'm fine. I'm totally fine. The boat is moving in a normal way. My stomach is the one doing something weird." },
          { s: 'ikutsuki', f: 'happy', t: "Island hopping! Though I suppose we're only hopping to one. A single hop. Ha ha! Mitsuru, did you get that one?" },
          { s: 'mitsuru', f: 'neutral', t: "I did, Chairman." },
          { n: "Akihiko was at the front of the deck with his face in the wind, studying the island like a map of somewhere he intended to run all of, and Fuuka had her recorder held out over the rail catching the sound of the engine and the sea, and Yukari had her sunglasses on and her face tipped up at the sun, and Solar stood in the middle of all of them and felt, for the first time since April, like a person on a holiday." },
          { choose: [
            { t: "(Stand with Junpei at the back. Hand him a bottle of water.)", stat: { kindness: 1 }, then: [
              { s: 'junpei', f: 'happy', t: "Leader. You're a saint. I'm putting you in my will. You get the bat." }
            ] },
            { t: "(Stand at the front with Akihiko. Face the wind.)", stat: { courage: 1 }, then: [
              { s: 'akihiko', f: 'happy', t: "Coast road goes all the way around. Hundred and thirty kilometers. Not all of it. Some of it. Tomorrow." },
              { n: "He said it like a promise, to the island, and the wind took his hair straight back, and she laughed into it." }
            ] }
          ] },
          { n: "The Kirijo villa sat at the top of its own beach behind a wall of palms, white and enormous, with staff in a line on the steps to meet them like a scene from a film about rich people, and Junpei stopped dead at the bottom of the steps with his bag on his shoulder and said, very quietly, *senpai, are you a princess*, and Mitsuru, with great dignity, did not answer." }
        ] },
        after: { prompt: 'The beach. Who do you spend the afternoon with?', sub: 'The sand is white, the sea is warm, and everybody has a plan.', bg: 'yakushima-beach', options: [
          { id: 'akihiko', who: 'akihiko', label: 'Akihiko', sub: 'A race to the buoy and back.', place: 'Yakushima · Beach', time: 'Afternoon', music: 'sun', scene: [
            { n: "The buoy was a red dot a long way out past the breakers, bobbing, and Akihiko stood at the edge of the water in his trunks with the tape finally gone from his ribs, pointing at it like it had insulted him personally." },
            { s: 'akihiko', f: 'happy', t: "There and back. First one to touch the sand. Loser carries the cooler up to the villa." },
            { choose: [
              { t: "(Race him. Don't hold back.)", notes: 3, stat: { courage: 1 }, then: [
                { n: "She didn't hold back. Her body knew how to swim the way it knew a naginata grip, long and easy, breathing on the third stroke, and she touched the buoy a half-second behind him and turned before he did and came back in level with him the whole way, stroke for stroke, and they hit the sand at the same moment on their hands and knees, gasping, and argued about it for ten minutes, and carried the cooler up together." }
              ] },
              { t: "(Let him win. Watch him celebrate.)", notes: 2, then: [
                { n: "He won. He came up out of the surf with both fists in the air shouting like a man who'd taken a title, and then saw her face, and stopped, and narrowed his eyes, and said *you let me win*, and she said she'd never, and he said *again*, and they did it again, and this time she didn't, and he lost by an arm, and looked happier about it than about the first one." }
              ] },
              { t: "(Float on your back halfway and look at the sky instead.)", notes: 2, then: [
                { n: "Halfway out she stopped and turned over and floated. The sky was enormous. After a while a shadow fell across her, and it was him, treading water beside her, out of breath, having come back for her. *You okay?* She said yes. He looked up at what she was looking at. Then he turned over too, and they floated there side by side past the breakers, and nobody won." }
              ] }
            ] }
          ] },
          { id: 'yukari', who: 'yukari', label: 'Yukari and Fuuka', sub: 'Shells, sunscreen and very serious opinions.', place: 'Yakushima · Beach', time: 'Afternoon', music: 'joy', scene: [
            { n: "Yukari had laid out a towel with the precision of someone setting up a base camp, sunscreen and magazines and a cooler of canned tea, and Fuuka was crouched at the waterline with a plastic bucket collecting shells according to a system she'd devised on the ferry." },
            { s: 'yukari', f: 'serious', t: "Sunscreen. Back. Now. You've been out here an hour and you're already going pink. I'm not explaining that to Mitsuru-senpai." },
            { s: 'fuuka', f: 'happy', t: "Senpai! Look! This one's perfect. Not one chip. I'm calling it Attempt One." },
            { choose: [
              { t: "(Let Yukari do your back. Do hers after.)", notes: 3, then: [
                { n: "Yukari did her back with brisk efficient strokes like she was frosting a cake and then turned around for her turn without being asked. Her shoulders were tight. Solar didn't say anything about it. She just went slow, and halfway through Yukari let out a long breath and said, to the sea, that this was nice, that she hadn't been on a beach since she was little, and then didn't say anything else, and didn't need to." }
              ] },
              { t: "(Help Fuuka hunt for a second perfect shell.)", notes: 2, stat: { proficiency: 1 }, then: [
                { n: "They hunted the whole waterline. Fuuka found nineteen almost-perfect ones and rejected them all. Solar found a second perfect one in the last ten minutes, small and pink and spiraled, and gave it to her, and Fuuka put it next to the first one in the bucket and looked at the two of them together for a long time, and said, quietly, *Attempt Two. Also perfect*." }
              ] }
            ] }
          ] },
          { id: 'junpei', who: 'junpei', label: 'Junpei', sub: 'Operation Wingwoman. It goes badly.', place: 'Yakushima · Beach', time: 'Afternoon', music: 'joy', scene: [
            { n: "Junpei had a plan. He'd had it since the ferry. It was called Operation Summer and it involved walking down to the public end of the beach, where the tourists were, and being, in his words, *casual and interesting*, and it had one flaw, which was that he'd asked Akihiko first, and Akihiko had said *no* and gone swimming." },
            { s: 'junpei', f: 'serious', t: "So it's you. You're my wingwoman. You go first. You say I'm cool. You say I'm the field leader." },
            { s: 'solar', f: 'happy', t: "I'm the field leader." },
            { s: 'junpei', f: 'flustered', t: "THEY don't know that." },
            { choose: [
              { t: "(Wing for him. Commit to the bit.)", notes: 3, stat: { charm: 1 }, then: [
                { n: "She walked up to a group of college girls under an umbrella and told them, very seriously, that her friend was a famous baseball player, incognito, and they all looked past her at Junpei, who was posing against a palm tree in a way he believed was natural. They laughed. Not unkindly. One of them waved. Junpei waved back so hard he fell off the palm tree, and they laughed harder, and came over to make sure he was okay, and he spent the next hour teaching four girls to throw a curveball with a coconut, the happiest she'd ever seen him." }
              ] },
              { t: "(Talk him out of it. Get shaved ice instead.)", notes: 2, then: [
                { n: "She talked him out of it with shaved ice, strawberry, the size of his head. He ate it on the sea wall and told her about every girl who'd ever said no to him, a long and cheerful list, and at the end of it said that was fine, he was saving himself for someone who'd get his jokes, and then, after a pause, *like, a girl version of you, but who's into me*, and she pushed him off the wall into the sand." }
              ] }
            ] }
          ] },
          { id: 'mitsuru', who: 'mitsuru', label: 'Mitsuru', sub: 'Under the parasol. She doesn’t swim.', place: 'Yakushima · Beach', time: 'Afternoon', music: 'tender', scene: [
            { n: "Mitsuru was under the biggest parasol on the beach in a white dress and a wide hat with a book, not swimming, not reading, watching the others in the water with the faint, polite expression of a woman at a concert she hadn't chosen." },
            { s: 'mitsuru', f: 'sad', t: "I came here every summer as a child. With my father, when he could get away. I never went in. There were always people watching. Someone would have written it down." },
            { s: 'mitsuru', f: 'sad', t: "I don't think I know how to be on a beach. I only know how to be seen on one." },
            { choose: [
              { t: "(Take her hand. Walk her to the water. Just to the ankles.)", notes: 3, stat: { courage: 1 }, then: [
                { n: "She took Mitsuru's hand. Mitsuru looked at it as if it were a document she hadn't been briefed on. Then she stood, and kicked off her sandals, and let herself be walked down the sand to where the waves came in, and stood with the sea going over her feet and back, over and back, and her face did something Solar had never seen it do, and she said, very quietly, *it's warm*, as if nobody had ever told her." }
              ] },
              { t: "(Sit with her under the parasol. Nobody's watching now.)", notes: 2, then: [
                { n: "She sat. They watched the others together. Junpei fell off something. Akihiko came out of the surf shaking his hair like a dog. After a long time Mitsuru took her hat off and set it on the sand, which, Solar understood, was a very large thing, and turned her face up to the sun, and closed her eyes, and didn't open them for a long while." }
              ] }
            ] }
          ] }
        ] },
        evening: { title: 'dinner at the villa', place: 'Yakushima · Kirijo Villa', time: 'Evening', bg: 'yakushima-villa-terrace', music: 'joy', scene: [
          { n: "Dinner at the villa was eleven courses on a long table on the terrace under strings of lights, served by staff in white jackets who refilled your glass before you'd noticed it was empty, and S.E.E.S. sat down to it sunburned and salty and visibly terrified of the cutlery." },
          { s: 'junpei', f: 'surprised', t: "There's three forks. Why are there three forks. Which fork is for the fish? Is there a fish fork? Is the fish fork a spoon?" },
          { s: 'mitsuru', f: 'neutral', t: "Outside in, Iori. Every course, the outermost one." },
          { n: "The Chairman told a long story about a conference in Osaka that was mostly a setup for a pun about a lecture on squid, and Fuuka laughed at it, sincerely, which made his whole evening, and Akihiko ate everything put in front of him and then most of Junpei's, and the sun went down over the sea in front of them like something slowly being poured." },
          { choose: [
            { t: "(Show Junpei the forks under the table.)", stat: { kindness: 1 }, then: [
              { n: "She tapped each fork in turn under the tablecloth, outermost first, and he copied her, course by course, with intense concentration, and by dessert he'd stopped watching her hands and was just eating, and Mitsuru, at the head of the table, caught Solar's eye and very slightly raised her glass." }
            ] },
            { t: "(Use the wrong fork on purpose, so he's not the only one.)", stat: { charm: 1 }, then: [
              { n: "She picked up the dessert fork for the soup. Junpei saw, and his whole face lit up with relief, and Yukari saw and put her hand over her mouth, and then Akihiko, who had no idea what was happening, picked up his dessert fork too, in solidarity, and by the end of the meal all of S.E.E.S. was eating the wrong course with the wrong fork and the staff in white jackets were very carefully not looking." }
            ] }
          ] }
        ] },
        late: { prompt: 'The first night on the island.', sub: 'Somebody is setting off fireworks over the water, the villa has too many rooms, and nobody wants to sleep yet.', bg: 'yakushima-beach-fireworks', options: [
          { id: 'akihiko-balcony', who: 'akihiko', label: 'The balcony', sub: 'Akihiko is out there. He can’t sleep somewhere new.', place: 'Yakushima · Villa Balcony', time: 'Night', music: 'night', scene: [
            { n: "The villa had a balcony on the second floor that ran the whole length of the building, facing the sea, and he was at the far end of it in a T-shirt with his forearms on the rail, watching the dark water come in, and he moved over when she came out without looking, as if he'd heard her coming down the hall, which he probably had." },
            { s: 'akihiko', f: 'neutral', t: "Can't sleep anywhere new. Never could. First night anywhere, I'm up till three." },
            { s: 'akihiko', f: 'neutral', t: "You?" },
            { choose: [
              { t: "Every night's a first night, for me.", notes: 3, then: [
                { n: "He turned his head and looked at her. It was the kind of thing she didn't usually say out loud, and she heard it come out and couldn't take it back, and he didn't make her. He just looked at her for a long moment in the light coming off the water, and then turned back to the sea, and moved his arm on the rail an inch closer to hers, and stayed up till three with her, and said almost nothing, and it was the easiest night she'd had since April." }
              ] },
              { t: "(Lean on the rail next to him. Count the waves.)", notes: 2, then: [
                { n: "She counted out loud. He joined in at eleven. They got to two hundred and something before Junpei opened a window two rooms down and asked them, in a voice thick with sleep, what they were counting, and Akihiko said *waves*, and Junpei said *why*, and neither of them had an answer that would have made sense to him, and Junpei shut the window." }
              ] }
            ] }
          ] },
          { id: 'girls-room', who: 'yukari', label: "The girls' room", sub: 'Yukari and Fuuka, and pillows, and the lights out.', place: 'Yakushima · Kirijo Villa', time: 'Night', music: 'tender', scene: [
            { n: "The girls' room had three beds and a ceiling fan and, by eleven, everybody in one bed, Yukari and Fuuka and Solar lying sideways across it in the dark with their feet up the wall, talking the way people only talk in a dark room in a strange house." },
            { s: 'yukari', f: 'neutral', t: "Okay. Truth. Who in the dorm would you call if you were in trouble at three in the morning. Not S.E.E.S. trouble. Real trouble." },
            { s: 'fuuka', f: 'surprised', t: "Oh, that's hard. That's really hard. Can I say all of you?" },
            { s: 'yukari', f: 'neutral', t: "No. One." },
            { choose: [
              { t: "Whoever was awake. Which would be Akihiko.", notes: 2, then: [
                { s: 'yukari', f: 'blushing', t: "Oh, sure. *Whoever was awake.* Fuuka, did you hear that." },
                { s: 'fuuka', f: 'happy', t: "I heard it!" },
                { n: "The door opened. Mitsuru stood in it in a silk robe with a flashlight, looked at the three of them upside down on one bed, and said it was past midnight, and then, after a pause, came in and sat on the end of the bed, and said that for the record she'd have called Solar, and went red, and left, and they screamed into the pillows for five full minutes." }
              ] },
              { t: "You two. Both. Don't make me pick.", notes: 3, then: [
                { s: 'yukari', f: 'neutral', t: "...That's cheating." },
                { s: 'yukari', f: 'blushing', t: "I'd call you, by the way. For the record. That's my answer." },
                { s: 'fuuka', f: 'happy', t: "Mine too! Can it be mine too?" },
                { n: "Somebody's foot slid off the wall. Somebody laughed. They fell asleep like that, crossways on one bed, all three of them, and woke at seven with the sun in their faces and Junpei knocking on the door asking if anyone had seen his other sandal." }
              ] }
            ] }
          ] },
          { id: 'beach-alone', label: 'The beach, alone', sub: 'The sea at night, and nobody to perform for.', place: 'Yakushima · Beach', time: 'Night', music: 'mystery', scene: [
            { n: "She went down to the beach alone after everyone had gone to bed. The sand was cool. The sea was black and very quiet and when the small waves broke they lit up, faintly, blue-green along their edges, tiny living lights in the water, and she stood at the edge with her feet in it and watched her own footprints glow and fade." },
            { n: "She hummed the song. It went the way it always went and stopped where it always stopped, and the sea went on, and nobody was there to hear it stop, and for once that felt like a kindness instead of a loss." },
            { choose: [
              { t: "(Walk the length of the beach.)", stat: { courage: 1 }, then: [
                { n: "She walked to the far end, where the rocks came down and the villa's lights didn't reach, and stood there a while in the dark looking out at nothing, and had, for no reason, the feeling that someone was standing out there too, very straight, up to their shins in the water, waiting. There wasn't anybody. She went back up to bed." }
              ] },
              { t: "(Sit down in the sand. Stay until the lights stop.)", stat: { kindness: 1 }, then: [
                { n: "She sat until the lights in the water went out, one by one, as the tide turned. It took an hour. She didn't think about anything. It was the first hour in months she hadn't, and she walked back up to the villa with sand in everything and the strange light feeling of a person who has put something down." }
              ] }
            ] }
          ] }
        ] }
      },

      '7/22': {
        early: { title: 'phone calls', place: 'Yakushima · Kirijo Villa', time: 'Morning', music: 'day', scene: [
          { n: "Breakfast on the terrace, and Mitsuru's phone rang three times before the rice was served, and each time she excused herself and took it inside, and came back each time a little more composed, which with Mitsuru was how you knew something was wrong." },
          { s: 'mitsuru', f: 'sad', t: "There's a facility on the island. The Group's. Some kind of research. I wasn't told. Apparently I wasn't meant to be told." },
          { s: 'mitsuru', f: 'neutral', t: "It doesn't concern us. We're on holiday. Please enjoy yourselves." },
          { n: "She said it in the operation-briefing voice, and everybody at the table heard it, and went back to their rice, and the Chairman said something cheerful about the weather, and nobody laughed at it, and Akihiko looked at the green mountains behind the villa for a long time without eating." },
          { choose: [
            { t: "(Ask Mitsuru if she's alright, later, quietly.)", stat: { kindness: 1 }, then: [
              { n: "Later, by the pool, she asked. Mitsuru looked at her for a moment as if deciding which answer to give. Then she said, *no, not entirely*, and *thank you for asking*, in that order, and went back to her book, and turned the page, and didn't read it." }
            ] },
            { t: "(Let it go. Pass the pickles.)", then: [
              { n: "She passed the pickles. Junpei took the hint and started a long story about a dream he'd had about a shark, and the table let him, gratefully, and the morning came back into itself a little at a time." }
            ] }
          ] }
        ] },
        after: { prompt: 'The second day. Where do you go?', sub: 'The island is bigger than the beach.', bg: 'yakushima-beach', options: [
          { id: 'fuuka-forest', who: 'fuuka', label: 'Fuuka', sub: 'The cedar forest trail. She wants to listen to it.', place: 'Yakushima · Forest', time: 'Afternoon', music: 'mystery', scene: [
            { n: "The forest started where the road ended, cedars so old and so huge they didn't look like trees so much as weather, moss on everything, on the roots and the rocks and the trunks up to twice their height, green and soft and wet, and the light coming down through it in long slow columns like light in a cathedral." },
            { n: "Fuuka walked with her head tilted. Listening. Every so often she stopped, and closed her eyes, and opened them again, and walked on." },
            { s: 'fuuka', f: 'neutral', t: "It's so quiet. Not empty quiet. Full quiet. Like everything here's been listening for a thousand years and decided it doesn't need to say anything." },
            { s: 'fuuka', f: 'surprised', t: "...Except there's something. Under it. Over that way. Like a radio left on in a locked room." },
            { choose: [
              { t: "(Listen with her. Tell her what you hear.)", notes: 3, stat: { knowledge: 1 }, then: [
                { n: "Solar listened. Birds. Water somewhere. Her own heartbeat. And then, under all of it, so faint she might have imagined it, something that wasn't a sound so much as the feeling of being waited for. She told Fuuka. Fuuka looked at her for a long time, and then wrote something in her notebook, and showed it to her. It said *same*." }
              ] },
              { t: "(Steer her back to the trail. It's not your business today.)", notes: 2, then: [
                { n: "She took Fuuka's elbow and turned her gently back toward the path, and Fuuka let her, and let out a breath, and said thank you, she'd have stood there all day, she always did, and they walked the rest of the trail talking about cookies, and the forest let them." }
              ] }
            ] }
          ] },
          { id: 'akihiko-coast', who: 'akihiko', label: 'Akihiko', sub: 'Some of the coast road. Running.', place: 'Yakushima', time: 'Afternoon', music: 'sun', scene: [
            { n: "Some of the coast road turned out to mean eleven kilometers, at a pace Akihiko called easy, along a road that hugged the sea on one side and the mountain on the other, past waterfalls coming straight down the cliffs into the ocean and monkeys sitting on the guardrail watching them go by like a panel of judges." },
            { s: 'akihiko', f: 'happy', t: "Monkey on the left. He's been pacing us for a kilometer. He's faster than Junpei." },
            { choose: [
              { t: "(Race the monkey.)", notes: 3, stat: { proficiency: 1 }, then: [
                { n: "She raced the monkey. The monkey won, by a lot, and then sat on a mile marker and looked at her with total contempt while she got her breath back, and Akihiko laughed so hard he had to stop running, which she had never once seen him do, and leaned on the guardrail with his hands on his knees and his whole back shaking." }
              ] },
              { t: "(Stop at the waterfall. Make him stop too.)", notes: 2, then: [
                { n: "She stopped at the waterfall, where it came off the cliff and broke into mist over the road, and stood in the mist with her eyes shut, and after a few seconds she heard his footsteps come back, and stop, and then he was standing in it beside her, soaked, saying nothing, his chest going up and down, and they stood there in the cold spray in the heat of the afternoon until they were both laughing for no reason at all." }
              ] }
            ] }
          ] },
          { id: 'watermelon', who: 'junpei', label: 'Junpei and Yukari', sub: 'Watermelon, a stick and a blindfold.', place: 'Yakushima · Beach', time: 'Afternoon', music: 'joy', scene: [
            { n: "Junpei had acquired a watermelon from the villa's kitchen and a stick from somewhere and a blindfold that was, on inspection, one of Yukari's scarves, and the game was the old one, suikawari, everybody shouting directions while one blindfolded person tried to split the melon and nearly always hit the sand." },
            { s: 'yukari', f: 'neutral', t: "Left. LEFT. Your other left. Junpei, you've hit the sand eleven times. The sand is fine. The sand is not the melon." },
            { choose: [
              { t: "(Take the blindfold. Split it in one.)", notes: 3, stat: { courage: 1 }, then: [
                { n: "They spun her three times. She stood still in the dark behind the scarf and listened instead of looking, the waves and the wind and Junpei breathing through his mouth two meters to the right, and took three steps and brought the stick down, and the melon split clean in two, and when she pulled the scarf off they were both just staring at her." },
                { s: 'junpei', f: 'surprised', t: "...That's not fair. That's literally not fair. You did the thing you do in the tower." }
              ] },
              { t: "(Shout wrong directions at Junpei. Gleefully.)", notes: 2, stat: { charm: 1 }, then: [
                { n: "She shouted *forward* when he needed to go back and *right* when he needed to go left, and Yukari, after a second of betrayed silence, joined in, and the two of them steered him in a slow helpless circle around the melon for five minutes while he begged, and when he finally hit it, by accident, falling over, they cheered like it was the World Series, and he lay on his back in the sand covered in watermelon and said he'd never felt so loved or so used." }
              ] }
            ] }
          ] }
        ] },
        evening: { title: 'the second evening', place: 'Yakushima · Beach', time: 'Evening', music: 'tender', scene: [
          { n: "They grilled on the beach for the second evening, corn and squid and too many sausages, on a fire the villa staff had built and Junpei had ruined, and the sun went down over the water slowly, gold and then red and then a long violet that didn't want to end, and everyone sat in the sand with their plates and their sunburns and didn't say very much." },
          { s: 'akihiko', f: 'neutral', t: "We should do this again. Next summer. All of us." },
          { n: "Nobody answered him. Not because they didn't want to. Because next summer was a long way off, and they had all, every one of them, learned this year not to say things about next summer out loud, and Akihiko heard the silence and looked at his plate and nodded, as if somebody had." },
          { choose: [
            { t: "Next summer. All of us. I'll hold you to it.", stat: { kindness: 1 }, then: [
              { n: "Yukari said *me too*, and then Fuuka, and then Junpei with his mouth full, and then, last, very quietly, Mitsuru, who had never in her life made a plan for a summer that wasn't already written down by somebody else. Akihiko didn't look up from his plate. His ears had gone red. It wasn't the sunburn." }
            ] },
            { t: "(Look at the sea. Say nothing. Let it be enough.)", then: [
              { n: "She looked at the sea. The violet went on and on. Later, when the plates were cleared and everybody had drifted up toward the villa and its lights, she found she didn't want to go in yet, and she took her sandals in her hand and walked off down the sand, the other way, alone, toward the far end of the beach where the rocks came down." }
            ] }
          ] }
        ] }
      },

      '7/23': {
        early: { title: 'one arm’s length', place: 'Yakushima · Kirijo Villa', time: 'Morning', music: 'mystery', scene: [
          { n: "There were men in Kirijo uniforms in the villa's front hall at breakfast, and phone calls, and Mitsuru's voice gone flat and courteous in another room, and at the end of the long table, not eating, because she didn't, sat the girl from the beach. Aigis. Very straight, hands on her knees, watching Solar across the table with calm, total attention, as if Solar were a sunrise she'd been told to log." },
          { s: 'junpei', f: 'surprised', t: "So we're just... she's... coming with us? Like, home? To the dorm?" },
          { s: 'aigis', f: 'happy', t: "Yes. I have been assigned. By myself. It is the first assignment I have given myself. I find it very satisfying." },
          { choose: [
            { t: "(Pass her a bowl of rice. Even if she doesn't eat.)", stat: { kindness: 1 }, then: [
              { n: "Aigis looked at the bowl. Then she held it, carefully, in both hands, the way you'd hold something someone had given you, and didn't eat it, and didn't put it down, all through breakfast, and at the end of it said *thank you for the rice* as if it had been a gift, which, Solar supposed, it had." }
            ] },
            { t: "Welcome to S.E.E.S., Aigis.", stat: { charm: 1 }, then: [
              { s: 'aigis', f: 'happy', t: "...Thank you, Solar-san. I believe I have been looking forward to hearing that. For some time." },
              { n: "Yukari dropped her chopsticks. Mitsuru, coming back in from the hall, stopped in the doorway, and looked at the two of them across the table, and for a second her face was not composed at all." }
            ] }
          ] }
        ] },
        after: { prompt: 'The ferry home. Who do you stand with at the rail?', sub: 'The island going green and then gray behind you.', bg: 'yakushima-ferry', options: [
          { id: 'ferry-aigis', who: 'aigis', label: 'Aigis', sub: 'Exactly one arm’s length away. Watching you.', needs: { events: ['a3-yakushima'] }, place: 'Yakushima · Ferry', time: 'Afternoon', music: 'tender', scene: [
            { n: "Aigis stood at the rail one arm's length away, exactly, and every time the ferry rocked and Solar shifted her weight Aigis shifted hers to keep the distance the same, without looking, like a dance partner who'd only been taught the one step." },
            { s: 'aigis', f: 'neutral', t: "Solar-san. What is the dormitory like? I would like to prepare." },
            { choose: [
              { t: "Loud. Warm. Junpei snores.", notes: 3, then: [
                { s: 'aigis', f: 'neutral', t: "Loud. Warm. Junpei-san snores. I have recorded these." },
                { s: 'aigis', f: 'happy', t: "It sounds like a good place to be stationed." }
              ] },
              { t: "You'll see. You can stand next to me till you know where things are.", notes: 3, then: [
                { s: 'aigis', f: 'happy', t: "Yes. That was my plan. It is good to hear that it is also your plan." },
                { n: "She took a small step closer, closing the arm's length to something shorter, and looked at the gap for a moment as if checking the measurement, and seemed satisfied with it." }
              ] }
            ] }
          ] },
          { id: 'ferry-akihiko', who: 'akihiko', label: 'Akihiko', sub: 'At the stern, watching the island go.', place: 'Yakushima · Ferry', time: 'Afternoon', music: 'tender', scene: [
            { n: "He was at the stern watching the island get smaller, the mountains going gray and then blue and then into the haze, with the face of somebody who'd just finished a book and wasn't ready to put it down." },
            { s: 'akihiko', f: 'neutral', t: "Three days. Felt like a month. In a good way. I didn't think about the tower once. Not once, till this morning." },
            { choose: [
              { t: "Me neither. That's never happened.", notes: 3, then: [
                { s: 'akihiko', f: 'neutral', t: "Yeah. That's what scared me." },
                { s: 'akihiko', f: 'happy', t: "In a good way. Also in a good way." },
                { n: "He leaned on the rail beside her, and they watched the island until it was gone, and then a while after, watching the place where it had been." }
              ] },
              { t: "(Stand beside him. Watch it go.)", notes: 2, then: [
                { n: "She stood beside him until the island was a line on the horizon, and then nothing. He didn't say anything else. When she finally turned to go in, he said, without turning around, *thanks for coming*, as if she'd had a choice, as if he'd been the one who invited her, and she had the strange feeling he meant something else, and that he didn't know what yet either." }
              ] }
            ] }
          ] },
          { id: 'ferry-girls', who: 'yukari', label: 'Yukari and Fuuka', sub: 'In the cabin, with the shells and the photos.', place: 'Yakushima · Ferry', time: 'Afternoon', music: 'joy', scene: [
            { n: "Yukari and Fuuka had taken over a table in the cabin with Fuuka's bucket of shells and Yukari's camera, going through the three days picture by picture, deleting nothing, which for Yukari was a first." },
            { s: 'yukari', f: 'neutral', t: "Look. This one. You're not looking at the camera. You're looking at something off to the side and you look... I don't know. Happy. Weirdly happy." },
            { s: 'fuuka', f: 'happy', t: "I can make a print of that one! When we're home! I'll put it on the fridge!" },
            { choose: [
              { t: "Put all three of us on the fridge.", notes: 3, then: [
                { n: "They found one with all three of them, sunburned and squinting, Fuuka's shell held up to the lens, and Fuuka marked it with a little star, and two weeks later it was on the fridge, under the study schedule, slightly crooked, and nobody ever moved it." }
              ] },
              { t: "What was I looking at?", notes: 2, then: [
                { s: 'yukari', f: 'neutral', t: "I don't know. The sea? You looked at the sea like somebody was out there." },
                { n: "Solar looked at the photo for a long time. Then she said it was probably just the sea, and Yukari said probably, and neither of them believed it, and Fuuka put another shell on the table between them, and said *Attempt Three*, and they let it go." }
              ] }
            ] }
          ] },
          { id: 'ferry-junpei', who: 'junpei', label: 'Junpei', sub: 'Asleep on a bench. Seasick again.', place: 'Yakushima · Ferry', time: 'Afternoon', music: 'joy', scene: [
            { n: "Junpei was lying on a bench on the lower deck with his cap over his face and a hand on his stomach, being, in his own words, *one with the sea, and the sea is winning*." },
            { s: 'junpei', f: 'flustered', t: "Leader. If I don't make it. Tell my bat I loved it." },
            { choose: [
              { t: "(Sit on the end of the bench. Tell him a story until he falls asleep.)", notes: 3, then: [
                { n: "She told him the story of the watermelon, with him as the hero. He corrected her in places, from under the cap, to make himself more heroic. By the time she got to the part with the curveball and the coconut he'd stopped correcting, and then he was asleep, and he slept the whole way to Kagoshima with his feet in her lap, snoring, like a small engine." }
              ] },
              { t: "(Bring him ginger candy from the kiosk.)", notes: 2, stat: { kindness: 1 }, then: [
                { n: "The ginger candy worked. Or he said it did. He sat up after twenty minutes and declared himself cured and went up to the top deck and threw up over the rail with tremendous dignity and came back down and asked for another candy. She gave him the bag." }
              ] }
            ] }
          ] }
        ] },
        evening: { title: 'home', place: 'Iwatodai Dorm · Lounge', time: 'Evening', music: 'dorm', scene: [
          { n: "The dorm when they got back was dark and hot and smelled of a building that had been shut up for three days, and everybody dropped their bags in the hall and stood in the lounge for a moment in silence, sunburned, looking at it, the sofa and the television and the whiteboard by the fridge, like people who'd been away a lot longer than three days." },
          { n: "Then Junpei flopped on the sofa and said *home*, with enormous feeling, and Yukari said *you live here, it's not a revelation*, and Fuuka opened every window, and Akihiko went to the kitchen to make a protein shake, and the building came back on around them, one light at a time." },
          { n: "Aigis stood in the middle of the lounge with no bag and looked at all of it, very slowly, the way she'd looked at the sea. Then she walked to the end of the sofa and stood beside it, near Solar, and stayed there, and the dorm, which had made room for one stranger in April, made room for another." }
        ] }
      }
    }
  }
};
