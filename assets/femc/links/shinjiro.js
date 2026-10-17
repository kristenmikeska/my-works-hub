/* Shinjiro Aragaki · XVIII The Moon. Format notes are at the top of akihiko.js.
   His link closes on 10/4, as in P3P's FeMC route: reach MAX before then. */
FemcSocial.define({
  id: 'shinjiro', name: 'Shinjiro Aragaki', short: 'Shinjiro', arcana: 'Moon', numeral: 'XVIII', from: 'Persona 3',
  home: { place: 'Port Island Station · Back Alley', slot: 1, days: [0, 1, 2, 3, 4, 5, 6], hint: 'Evenings. Before he comes back to the dorm, he can usually be found in the back alley behind Port Island Station.' },
  approach: "A tall guy in a long maroon coat is leaning against the alley wall, watching you like you're the one who doesn't belong here.",
  invite: {
    ask: ["you eat yet", "need someone to carry groceries. you're free. come on.", "made too much. kitchen. now", "you busy", "come taste something. it's not poison", "back of the station. if you want", "got extra. come get it before it's cold", "alley. bring an appetite"],
    ok: ["yeah. don't take forever", "fine. hurry up", "good. it's getting cold"],
    no: ["whatever. more for me", "tch. fine", "eat something at least"]
  },
  hangouts: [
    [
      { n: "The back alley behind the station was its usual self, damp concrete and the hum of the vending machine and a radio somewhere upstairs playing a song nobody had chosen. Shinjiro was leaning on the wall where he always leaned, like the wall had been put there for him." },
      { n: "He didn't say hello. He took a plastic container out of his coat and held it out, and inside was rice and something braised, dark and glossy and still warm, with a pair of disposable chopsticks balanced on top like an afterthought." },
      { s: 'shinjiro', f: 'neutral', t: "Tried something different with the sauce. Tell me if it's too salty." },
      { choose: [
        { t: "It could use a little less salt.", notes: 3, then: [
          { n: "He took the chopsticks out of her hand, tried a piece himself, and chewed, frowning at the middle distance." },
          { s: 'shinjiro', f: 'neutral', t: "...Yeah. It could." },
          { n: "He looked almost pleased about it. Nobody, she suspected, had told him the truth about his food in a long time." }
        ] },
        { t: "It's perfect.", notes: 2, then: [
          { s: 'shinjiro', f: 'neutral', t: "Nothing's perfect. Eat." }
        ] },
        { t: "Did you make this for me?", notes: 1, then: [
          { s: 'shinjiro', f: 'neutral', t: "No." },
          { n: "There had only ever been one container, and he'd been holding it inside his coat to keep it warm. She let him have the lie." }
        ] }
      ] },
      { n: "She ate the whole thing standing up in an alley, which was not how she had pictured her evening, and he watched the mouth of the street the entire time like he was keeping a lookout. Somewhere around the last bite she realized that he was." }
    ],
    [
      { n: "Koromaru found the alley before she did. She heard his tags first, a small bright jingle bouncing off the concrete, and then he trotted past her ankles with his tail up and went straight to Shinjiro like he was reporting for duty." },
      { s: 'shinjiro', f: 'neutral', t: "...You followed her here? Tch. You're supposed to be home." },
      { n: "He said it in the voice people used for scolding dogs they had no intention of scolding. Koromaru sat down on his boot." },
      { s: 'koromaru', f: 'happy', t: "Woof!" },
      { choose: [
        { t: "(Pretend not to see him slip the dog a piece of meat.)", notes: 3, then: [
          { n: "She studied the vending machine with enormous interest. Behind her there was the quiet rustle of a container lid, and then the wet, grateful sound of a dog getting away with something." },
          { s: 'shinjiro', f: 'neutral', t: "...You didn't see that." }
        ] },
        { t: "I think he followed you, actually.", notes: 2, then: [
          { s: 'shinjiro', f: 'neutral', t: "He follows whoever's got food." },
          { n: "Koromaru, who had followed her and not any food, leaned his whole weight against Shinjiro's leg in quiet protest." }
        ] },
        { t: "He's a good boy.", notes: 2, then: [
          { s: 'shinjiro', f: 'happy', t: "...Yeah. He is." }
        ] }
      ] },
      { n: "They walked him home together, or he walked them, his white tail going ahead through the evening crowd like a little flag. Shinjiro kept one hand in his pocket and the other loose at his side, where Koromaru could bump it with his head every few steps. He did. Every time, Shinjiro pretended not to notice." }
    ],
    [
      { n: "He was crouched by the vending machine when she found him, frowning at the convenience store bag in her hand like it had said something rude to him." },
      { s: 'shinjiro', f: 'neutral', t: "What's in the bag." },
      { n: "A rice ball and a carton of milk tea. She told him so. He closed his eyes briefly, like a man in pain." },
      { s: 'shinjiro', f: 'neutral', t: "Rice. Pot. How much water." },
      { choose: [
        { t: "Up to the first knuckle.", notes: 3, then: [
          { s: 'shinjiro', f: 'surprised', t: "...Huh. Who taught you that?" },
          { n: "She didn't know. Someone, once, in a kitchen she couldn't picture anymore. She shrugged. He looked at her a second longer than he needed to, and then let it go, which she was grateful for." }
        ] },
        { t: "Whatever the line on the cooker says.", notes: 2, then: [
          { s: 'shinjiro', f: 'neutral', t: "The line's for people who've given up." },
          { s: 'shinjiro', f: 'neutral', t: "...It's fine. Use the line." }
        ] },
        { t: "Rice comes in a triangle, Shinjiro.", notes: 1, then: [
          { s: 'shinjiro', f: 'neutral', t: "Tch." },
          { n: "He took the rice ball out of her bag and unwrapped it with practiced fingers so the seaweed came out whole, which she had never once managed, and handed it back without a word." }
        ] }
      ] },
      { n: "He talked her through it anyway. Wash it till the water runs clear. Let it sit. Don't lift the lid. Don't lift the lid. He said that part twice, the way other people said be careful." }
    ],
    [
      { n: "It started raining the moment she reached the alley, a thin sideways rain that made the neon from the main street run down the wet concrete in long smeared stripes. Shinjiro was standing under the awning of the ramen counter with the broken sign, and he moved over without a word to make room." },
      { n: "The gutter above them leaked. It dripped on whoever stood at the left end of the awning. He stood at the left end of the awning. He very obviously did not want her to notice, so she noticed quietly." },
      { s: 'shinjiro', f: 'neutral', t: "...They use powder for the broth here. You can smell it." },
      { choose: [
        { t: "Could you make it better?", notes: 3, then: [
          { s: 'shinjiro', f: 'neutral', t: "...Yeah." },
          { n: "He said it without any pride at all, which was how she knew it was true. Then he told her how, for eleven minutes, in more detail than she had ever heard him say anything, while the rain came down and the broken sign buzzed overhead." }
        ] },
        { t: "It still smells pretty good.", notes: 2, then: [
          { s: 'shinjiro', f: 'neutral', t: "Hungry people think everything smells good." },
          { s: 'shinjiro', f: 'neutral', t: "...When'd you last eat?" }
        ] },
        { t: "You're a food snob.", notes: 2, then: [
          { s: 'shinjiro', f: 'happy', t: "Somebody's got to be." }
        ] }
      ] },
      { n: "He waited until the rain had stopped completely before he stepped out from under the awning, and then waited again for her. The whole left shoulder of his coat was soaked through. Neither of them said a word about it." }
    ],
    [
      { n: "He was sitting on an overturned crate by the back door of the karaoke place with his coat across his knees, and it took her a second to understand what he was doing, because it was the last thing she would have guessed. He was sewing on a button." },
      { n: "A tiny hotel sewing kit lay open on the crate beside him, and he was holding the needle up to the streetlight and squinting at it with the same total focus he gave to onions." },
      { s: 'shinjiro', f: 'neutral', t: "Don't say anything." },
      { choose: [
        { t: "(Hold the coat steady for him.)", notes: 3, then: [
          { n: "She sat on the edge of the crate and held the heavy wool flat in both hands. He didn't thank her. He just got faster, the needle going in and out in small neat stitches, and when his knuckles brushed her fingers neither of them made anything of it." }
        ] },
        { t: "I can do that for you.", notes: 2, then: [
          { s: 'shinjiro', f: 'neutral', t: "Can you." },
          { n: "She could not. She found that out in about forty seconds. He took it back without a word and fixed the knot she'd made." }
        ] },
        { t: "You sew, too?", notes: 2, then: [
          { s: 'shinjiro', f: 'neutral', t: "Buttons don't sew themselves." }
        ] }
      ] },
      { n: "He bit off the thread, put the kit back in his pocket and shrugged the coat on. The button sat exactly where it should, a little tighter than the others. Then he told her to go home before it got dark, as if it hadn't been dark for an hour." }
    ]
  ],
  // After MAX: he's at Tatsumi Memorial from 10/4 and doesn't wake in the main story, so every date is a visit and he never speaks.
  // The link closes on 10/4, so in normal play only the Christmas scene is reachable (christmasEve doesn't check `closes`); the dates play in free mode.
  dates: [
    { title: 'the beanie', place: 'Tatsumi Memorial Hospital · 3F Ward', music: 'tender', scene: [
      { n: "The first time she went alone it was a Tuesday in the middle of October, one of those afternoons that couldn't decide whether it was still autumn or already something colder, and she rode the monorail to Tatsumi with his beanie folded in her coat pocket and her hand on it the whole way, like it might get off at the wrong stop without her." },
      { n: "The third floor smelled the way it had on the fifth, floor polish and something sweet underneath that nobody wanted to name. The day nurse was a small brisk woman with her reading glasses on a chain, and she looked at Solar's uniform, and at her face, and at the visitors' book, where the name Sanada appeared in the same blunt square handwriting every few days, and didn't ask anything at all." },
      { n: "He looked smaller lying down. She had known he would, and it still went into her like a step that wasn't there. Somebody had brushed his hair without knowing which way it went. His hands lay on top of the blanket where a nurse had arranged them, the scarred knuckles gone pale and soft, like they'd been put away for the winter." },
      { n: "The chair was pulled close to the bed at an angle she recognized, because Akihiko sat in every chair like that, like the chair had asked him a question. She sat in it. The monitor kept time. She had practiced things to say on the train, and every one of them left the second she sat down." },
      { choose: [
        { t: "(Tell him about the dorm.)", notes: 3, then: [
          { n: "So she told him about the dorm, in order, the way he did things. Junpei had tried to make rice and used the line on the cooker, and it had come out fine, and he'd been unbearable about it for two days. Yukari had bought the dish soap he liked and hadn't said why. Koromaru still slept in the front hall, facing the door. Nobody had used his pan, and nobody had said they weren't using it. It was just on the hook where he'd left it." },
          { n: "She heard her own voice going on, flat and thorough, a report, round by round, and realized halfway through that she'd learned to do that from Akihiko, and that Akihiko had almost certainly learned it from him." }
        ] },
        { t: "(Read him the recipe card.)", notes: 3, then: [
          { n: "She took the card out of her pocket, already soft at the corners from being touched, and read it to him from the top, every measurement, in the order he did it, keeping her voice low the way you do in a room where someone is sleeping." },
          { n: "At the bottom she stopped. Stop poking it, underlined twice. She read that part twice too, the way he'd said don't lift the lid, the way other people said be careful." }
        ] },
        { t: "(Say nothing. Just sit.)", notes: 2, then: [
          { n: "She said nothing. She sat with her coat on and her hands in her lap and listened to the monitor, and to a cart going by in the hallway with one bad wheel, and it was the most like the alley it had felt in weeks, the two of them not talking, him keeping watch over nothing, her letting him." }
        ] }
      ] },
      { n: "Before she went she took the beanie out. She'd slept in it every night since the third, which nobody knew and which she would have denied under oath. It still smelled like him, a little, soy and cold air and that dish soap. It was going to stop smelling like him eventually. She had decided somewhere around Port Island Station that she'd rather it stopped here." },
      { choose: [
        { t: "(Fold it and leave it on the side table, by his hand.)", notes: 3, then: [
          { n: "She folded it in half and in half again, neatly, the way he'd laid his coat over the crate in the alley, and set it on the side table right beside his hand. Close. Where he'd find it first." }
        ] },
        { t: "(Put it on his head. Badly.)", notes: 2, then: [
          { n: "She put it on his head. It went on crooked, low over one eyebrow, and for one awful, wonderful second he looked exactly like himself, like he was about to tell her to get lost." },
          { n: "The nurse came in a minute later, took it off him without comment, folded it, and put it on the side table by his hand. Solar let her. It was probably where it belonged." }
        ] }
      ] },
      { n: "At the door she stopped and looked back, and felt the old instinct come up in her like a reflex, the one from every town and every school and every last day, to memorize the room so she'd have it later." },
      { n: "She didn't. She was coming back Thursday. You only memorized the places you were leaving." }
    ] },
    { title: 'stop poking it', place: 'Iwatodai Dorm · Kitchen', music: 'tender', scene: [
      { n: "Sunday, and the kitchen, and the card propped against the rice cooker where she could see it, and Solar standing in front of his burner holding his pan for a long time before she put it on the flame." },
      { n: "Nobody had cooked in it since October. Yukari had washed it once, very carefully, and hung it back on its hook, and that had been the extent of it, a whole dorm walking around a frying pan like it was a grave." },
      { n: "She was cutting the onion, thin, thinner, when she noticed Ken in the doorway. He had his hands behind his back and his slippers lined up exactly on the line where the hallway floor turned into kitchen tile, like it was a border he needed permission to cross." },
      { s: 'ken', f: 'neutral', t: "Is that Shinjiro-san's recipe?" },
      { choose: [
        { t: "It is. Want to help?", notes: 3, then: [
          { s: 'ken', f: 'happy', t: "...Can I?" },
          { n: "He washed his hands for a full minute, both sides and between the fingers, the way they taught you at school, and then stood at her elbow and did exactly what the card said, in order, reading it under his breath. When the pork went into the pan he flinched at the hiss, and then leaned in closer instead of back." }
        ] },
        { t: "It is. You can watch.", notes: 2, then: [
          { s: 'ken', f: 'neutral', t: "I'll watch." },
          { n: "He stood at the border and watched. After ten minutes he took one step over it. After twenty he was holding the card for her because she had sauce on her fingers, and neither of them said anything about the step." }
        ] },
        { t: "(Hand him the card without a word.)", notes: 3, then: [
          { n: "He took it in both hands, the way you take a certificate at an assembly, and read it all the way to the bottom, where it said stop poking it, and his mouth did something small and complicated." },
          { s: 'ken', f: 'sad', t: "...He wrote the way he talked." }
        ] }
      ] },
      { n: "The pork took an hour. She did not lift the lid. It cost her something every single minute, and Ken watched her not lift it with total concentration, the way you'd watch someone hold their breath underwater." },
      { s: 'ken', f: 'serious', t: "I'm still angry. I want you to know that. I don't think I'm supposed to say it." },
      { s: 'ken', f: 'sad', t: "I also want him to wake up. Both. I don't know if you're allowed to want both." },
      { choose: [
        { t: "You're allowed.", notes: 3, then: [
          { s: 'ken', f: 'neutral', t: "...Okay." },
          { n: "He said it the way he said thank you for things nobody else thanked anyone for, carefully, like he was putting it on a shelf where he'd be able to find it again." }
        ] },
        { t: "I think he'd tell you to stop poking it.", notes: 2, then: [
          { s: 'ken', f: 'happy', t: "...That's not what it means." },
          { s: 'solar', t: "Isn't it?" },
          { s: 'ken', f: 'neutral', t: "...Maybe it is." }
        ] }
      ] },
      { place: 'Tatsumi Memorial Hospital · 3F Ward', time: 'Evening', music: 'tender' },
      { n: "She took it to him in a plastic container inside her coat, to keep it warm, and it wasn't until she was on the monorail with her hand pressed flat over it that she understood whose move that was. The alley. Every time. Her face went hot. She kept the container where it was." },
      { n: "He couldn't eat it. She knew that. She opened the lid anyway and set it on the side table beside the beanie, and the room filled up with soy and ginger and the slow dark smell of something that had been left alone long enough to be good, and the night nurse, passing the door, stopped, and sniffed, and said oh, in a completely different voice, and kept walking." },
      { choose: [
        { t: "(Eat it at his bedside, so the room smells like his kitchen.)", notes: 3, then: [
          { n: "She ate it at his bedside with disposable chopsticks, slowly, the way he'd watched her eat on the shrine steps in May. It was too salty. She'd known it would be. She could hear exactly how he'd say it, and since he wasn't going to, she did." },
          { s: 'solar', t: "It could use a little less salt." },
          { n: "Nothing answered. She finished it anyway, which was what you did with food somebody had made for you, even when the somebody was you, even when it was wrong." }
        ] },
        { t: "(Tell him Ken helped.)", notes: 3, then: [
          { n: "She told him Ken helped. She told him Ken had washed his hands for a whole minute and read the card under his breath and hadn't stepped back when the pan hissed. She told him Ken had said both." },
          { n: "She didn't explain what both meant. She had a feeling he'd know." }
        ] }
      ] },
      { n: "When she got home and went to wash the container out, the card was still propped against the rice cooker, except somebody had smoothed it flat. In pencil, very small and very neat, in the margin beside the line about the water, somebody had added up to the first knuckle." },
      { n: "It was Ken's handwriting. She left it there." }
    ] },
    { title: 'the window', place: 'Tatsumi Memorial Hospital · 3F Ward', music: 'tender', scene: [
      { n: "Koromaru had not been inside Tatsumi Memorial since October, because dogs weren't allowed, and he had been informed of the policy several times by several people and had accepted none of them." },
      { n: "So Akihiko had a plan. Akihiko always had a plan, and the plan was always slightly worse than the problem, and this one involved Solar upstairs at the window of the ward and him downstairs in the courtyard with the dog, and a phone call, and a great deal of faith in the third floor's blinds." },
      { phone: [
        { from: 'akihiko', t: 'in position' },
        { from: 'akihiko', t: 'which window' },
        { from: 'solar', t: 'the one with a girl waving in it' },
        { from: 'akihiko', t: 'there are three girls waving' },
        { from: 'akihiko', t: 'why are there three' }
      ], contact: 'Akihiko Sanada', handle: 'akihiko', me: 'solar' },
      { n: "Two of them were nurses. They had heard about the plan at the station and had opinions on it, and now they stood at the next window along with their arms folded, pretending not to be invested." },
      { n: "Solar pulled the blind all the way up. The afternoon came in thin and gold across the bed and the blanket and his hands, and down in the courtyard, on the brown winter grass by the benches, Akihiko lifted a white dog over his head with both arms like a championship belt." },
      { n: "Koromaru looked extremely dignified about this. His tail was going so hard that his whole back end went with it." },
      { choose: [
        { t: "(Turn Shinjiro's face toward the window.)", notes: 3, then: [
          { n: "She did it the way the nurses did, one hand under his head, gently, so it rolled a little on the pillow toward the light. It was the closest she'd been to his face since the kitchen on the third. She made herself not think about that, and thought about it." },
          { n: "Down below, Koromaru barked, once, up at the third floor, at a window nobody on the ground could see into, and then sat down on Akihiko's foot and stayed there, looking up." }
        ] },
        { t: "(Hold the phone to his ear.)", notes: 3, then: [
          { n: "She called Akihiko back and held the phone to Shinjiro's ear, and down in the courtyard Akihiko crouched and held his phone to the dog, and for a second there was nothing, just wind across the receiver, and then Koromaru barked, short and bright, the bark he did in the front hall when a key turned in the lock." },
          { n: "She kept the phone there a long time after. Nothing changed. She hadn't really thought it would. She kept it there anyway." }
        ] },
        { t: "(Wave back. Both arms. Like an idiot.)", notes: 2, then: [
          { n: "She waved with both arms like an idiot, and Akihiko waved the dog back at her, and the nurses at the next window waved too, for no reason at all, and the whole thing was so stupid that she started laughing and couldn't stop and had to sit down on the end of his bed." },
          { n: "He didn't mind, because he couldn't. She told him he would have minded, a lot, and that made it so much worse." }
        ] }
      ] },
      { n: "Afterward Akihiko came up with grass on his knees and white hair all down the front of his jacket, and sat in the chair, his chair, and looked at Shinji for a while without saying anything." },
      { s: 'akihiko', f: 'sad-2', t: "He'd say it was a stupid plan." },
      { choose: [
        { t: "It was a stupid plan.", notes: 3, then: [
          { s: 'akihiko', f: 'happy', t: "...Yeah. It was a great stupid plan." }
        ] },
        { t: "He'd say it, and then he'd come down to the courtyard.", notes: 3, then: [
          { s: 'akihiko', f: 'sad-3', t: "...Every time. Complaining the whole way down the stairs." },
          { n: "He said it to his hands. Then he laughed, short and surprised, like a cough, and it was so much like somebody else's laugh that neither of them said anything for a while." }
        ] }
      ] },
      { n: "When they left, the blind was still up. She'd meant to pull it down. She left it, so the afternoon could keep coming in without asking anyone's permission." }
    ] },
    { title: 'the last sense', place: 'Tatsumi Memorial Hospital · 3F Ward', music: 'tender', scene: [
      { n: "It had snowed in the night, and the city had that held-breath quiet the morning after, everything muffled, the monorail crawling over a white bay, and she got to Tatsumi with snow in her hair and her fingers too cold to work the zip on her coat." },
      { n: "The night nurse was on, the one who knew Akihiko well enough to point down the hall with her pen. She knew Solar now too. She pointed with her pen. Then, without looking up from her clipboard, she said that people in his condition could sometimes hear, that it was the last sense to go and the first to come back, that nobody really knew, but that she talked to all of hers, just in case." },
      { n: "Solar thanked her. She went down the hall thinking about everything she'd said in that room since October on the assumption that nobody was listening, and her face went hot, and then cold, and then she decided it was fine. It had mostly been about rice." },
      { n: "His hand was on top of the blanket where it always was. She took it without asking, because there was nobody to ask." },
      { n: "It was cold. Not the cold of the street, a slower one, the particular cold of a hand nobody had been holding. She put it between both of hers and held on and waited, and it warmed, slowly, the way a room does when the heating finally comes on, and she understood perfectly well that the warmth was only hers coming back to her, and held on anyway." },
      { choose: [
        { t: "(Tell him the thing you've never told anyone.)", notes: 3, then: [
          { n: "So she told him about the towns. All of them, in order. Every school, every last day, the boxes, the way you learned by the third move to stop unpacking and just live out of the suitcase, the way you learned to count the days down from the first morning so the last one couldn't surprise you." },
          { n: "She told him she'd stopped counting. Sometime in the summer. Sometime around a supermarket and two cups of instant ramen and a man putting them back on the shelf like stolen goods." },
          { n: "She'd never said any of it out loud. It was easier to say to a room that might not be listening. She suspected that was cheating. She did it anyway." }
        ] },
        { t: "(Say it again, in case he missed it in September.)", notes: 3, then: [
          { s: 'solar', t: "I fell for you, Shinji. Don't make it weird." },
          { n: "It came out in his voice, almost, the flat way he'd said thanks for listening on the roof, and she heard it and nearly laughed, and didn't, because her throat had closed around the end of it like a fist." }
        ] },
        { t: "(Just hold on.)", notes: 2, then: [
          { n: "She just held on. The snow came down past the window, thick and slow, and the monitor kept its count, and she matched her breathing to it without meaning to, the way you fall into step with someone walking beside you." }
        ] }
      ] },
      { n: "Before she left she did the one thing she'd wanted to do since the first visit and hadn't, because it had felt like taking something. She leaned down and kissed his forehead, quickly, under the hair somebody kept brushing the wrong way. His skin was warm now. She had done that." },
      { n: "On her way out she fixed his hair. The right way. She knew which way it went." }
    ] }
  ],
  // Christmas Eve at the ward. Akihiko's text is the buzz from the pick scene.
  christmas: { place: 'Tatsumi Memorial Hospital · 3F Ward', scene: [
    { phone: [
      { from: 'akihiko', t: "ward's letting people stay late tonight. christmas eve. i asked" },
      { from: 'akihiko', t: 'go' },
      { from: 'akihiko', t: "i'll go tomorrow. tonight's yours" },
      { from: 'solar', t: 'aki' },
      { from: 'akihiko', t: "don't make it a thing" }
    ], contact: 'Akihiko Sanada', handle: 'akihiko', me: 'solar' },
    { n: "Tatsumi Memorial did Christmas the way hospitals did, earnestly and on a budget. There was a paper chain across the nurses' station. There was a tree on the counter about the height of a rice cooker, with one string of lights blinking in a pattern somebody had clearly chosen on purpose and then come to regret. Someone had put a Santa hat on the hand sanitizer." },
    { n: "The night nurse looked at Solar's face when she came out of the elevator, and at the box in her hands, and at the snow melting on her shoulders, and lifted her pen and pointed down the hall, and said without looking up that visiting hours were whatever she said they were tonight." },
    { n: "Outside his window the city was doing what it did on Christmas Eve, every couple in Iwatodai out at once under the lights, holding hands in the cold like it was the law. On the third floor it was quiet, and warm, and smelled of floor polish, and of him, a little, still, from the beanie on the side table." },
    { n: "She had brought a cake. Of course she had. It was the convenience-store kind, one slice of strawberry shortcake in a plastic triangle with a single strawberry on top looking deeply sorry for itself, because that was what you did on Christmas Eve in this country, and she had decided at the register that he was getting the full experience whether he liked it or not." },
    { s: 'solar', t: "Merry Christmas, Shinji. Before you say anything, I know. The cream's from a can." },
    { n: "He didn't say anything. She could hear exactly what he would have said, though. She could hear the tch. She ate half of it with the little plastic fork and left the other half, and the strawberry, on the side table beside the beanie, which was ridiculous, and which she did anyway." },
    { n: "Then she took out the other thing." },
    { n: "It was an index card, plain and white and a little bent from her pocket, and she'd written on it in her own handwriting, which was nothing like his, round where his was blocky, careless where his was careful, because it had taken her three cards and most of an evening and she'd given up on neat somewhere around the second." },
    { n: "It was a recipe. Hers. The first one she'd ever worked out without somebody standing behind her with a hand over hers on the knife. Rice and egg and the end of Sunday's pork and a little broth, the thing she'd been making for Koromaru since October, which he ate every night facing the door, and which was probably only good because dogs had no standards. Every step. Every measurement. In the order she did it." },
    { n: "At the bottom she'd left a space. She'd been carrying a pen around all week." },
    { choose: [
      { t: "(Write: so you can make it, when you're back.)", notes: 3, then: [
        { n: "So you can make it, when you're back. She wrote it slowly, against her knee. It was his line from September turned inside out, and she knew it, and wrote it anyway, and underlined it twice, because that was how you told someone it was the important part." }
      ] },
      { t: "(Write: stop poking it.)", notes: 3, then: [
        { n: "Stop poking it. She underlined it twice, the way he had. It was the only line on his card she'd never once needed to read, and the only one she couldn't stop reading, and it seemed only fair to give it back." }
      ] },
      { t: "(Write: don't take forever.)", notes: 3, then: [
        { n: "Don't take forever. It was what he'd texted every single time she said she was on her way, yeah, don't take forever, like someone who'd been kept waiting his whole life and had decided not to hold it against anybody. She underlined it twice. She meant it more than anything she'd ever written down." }
      ] }
    ] },
    { n: "She slid the card under his hand on the blanket, carefully, so his fingers lay across it. Where he'd find it first." },
    { n: "Somewhere across the bay a bell started ringing in Port Island, slow and late, the way it did every Christmas Eve. She didn't count the strokes. She'd stopped counting things." },
    { choose: [
      { t: "(Lay your head on the edge of the bed, beside his hand.)", notes: 3, then: [
        { n: "She folded her arms on the edge of the mattress and put her head down on them, next to his hand, close enough that if he moved at all, even one finger, she'd feel it. He didn't. She stayed like that anyway, for a long time, while the little tree at the nurses' station blinked its regrettable pattern down the hall and his hand was warm by her face." },
        { n: "It was, she would think later, in spite of everything, a good Christmas. It was the first one she had ever spent somewhere she meant to stay." }
      ] },
      { t: "(Kiss him goodnight.)", notes: 3, then: [
        { n: "She leaned over and kissed him once, gently, at the corner of his mouth, the way you'd leave a note on someone's door at night so it was the first thing they saw in the morning. He was very still. She hadn't expected anything else." },
        { n: "She had been saving that, she realized, since the kitchen and the moon on the window and the beanie coming down over her ears. It would keep. She decided it would keep fine." }
      ] }
    ] },
    { n: "At eleven the nurse came by and didn't tell her to go. She put a blanket over Solar's shoulders instead, the thin hospital kind, and switched off the overhead light, and left the door open a crack so the hallway could come in." },
    { n: "Solar fell asleep in the chair. She woke once, near two, and didn't know where she was, and then did, the monitor and the snow and the shape of him in the dark. She went back to sleep with her hand beside his on the blanket. Not holding it. Just near. The way you leave a light on for somebody who's coming home late." }
  ] },
  romance: true,
  closes: '10/4',
  cast: { koromaru: 'Koromaru', ken: 'Ken', akihiko: 'Akihiko' },
  threads: { sees: { name: 'dorm squad 🔥', members: ['junpei', 'yukari', 'mitsuru', 'akihiko'] } },
  texts: [
    { id: 'shin-3a', rank: 3, days: 1, slot: 1, msgs: [
      { from: 'shinjiro', t: 'did you eat' }
    ], reply: [
      { t: 'Cup ramen.', notes: 1, then: [{ from: 'shinjiro', t: '...' }, { from: 'shinjiro', t: 'tch' }, { from: 'shinjiro', t: "that's not food" }] },
      { t: 'Real food, actually.', notes: 3, then: [{ from: 'shinjiro', t: 'good' }, { from: 'shinjiro', t: 'keep it up' }] },
      { t: 'Are you checking on me?', notes: 2, then: [{ from: 'shinjiro', t: 'no' }, { from: 'shinjiro', t: 'eat something' }] }
    ] },
    { id: 'shin-4a', rank: 4, days: 2, slot: 1, msgs: [
      { from: 'shinjiro', t: 'your door was open' },
      { from: 'shinjiro', t: 'the dog went in' },
      { from: 'shinjiro', t: "he's asleep on your bed. i'm not moving him" }
    ], reply: [
      { t: 'He can stay.', notes: 3, then: [{ from: 'shinjiro', t: 'figured you\'d say that' }] },
      { t: 'Take a picture.', notes: 2, then: [{ from: 'shinjiro', t: 'no' }, { from: 'shinjiro', t: '...' }, { from: 'shinjiro', t: "he's snoring" }] }
    ] },
    { id: 'shin-5a', rank: 5, days: 1, slot: 1, msgs: [
      { from: 'shinjiro', t: 'you left the pot soaking' },
      { from: 'shinjiro', t: "that's how you ruin a pot" }
    ], reply: [
      { t: 'Sorry, Shinjiro-senpai.', notes: 1, then: [{ from: 'shinjiro', t: "don't call me that" }] },
      { t: "It's soaking. It's fine.", notes: 3, then: [{ from: 'shinjiro', t: "it's not fine" }, { from: 'shinjiro', t: "i'm coming downstairs" }] }
    ] },
    { id: 'shin-6a', rank: 6, days: 1, slot: 1, msgs: [
      { from: 'shinjiro', t: "don't ask" }
    ], reply: [
      { t: "I wasn't going to.", notes: 3, then: [{ from: 'shinjiro', t: '...thanks' }] },
      { t: 'Are you okay?', notes: 1, then: [{ from: 'shinjiro', t: 'fine' }, { from: 'shinjiro', t: 'go to sleep' }] }
    ] },
    { id: 'shin-7a', rank: 7, days: 1, slot: 1, msgs: [
      { from: 'shinjiro', t: "you didn't tell him" },
      { from: 'shinjiro', t: 'right' }
    ], reply: [
      { t: 'I promised.', notes: 3, then: [{ from: 'shinjiro', t: '...yeah' }, { from: 'shinjiro', t: 'you did' }] },
      { t: 'Not yet.', notes: 1, then: [{ from: 'shinjiro', t: 'keep it that way' }] }
    ] },
    { id: 'shin-8a', rank: 8, days: 1, slot: 1, msgs: [
      { from: 'shinjiro', t: 'thanks for listening' },
      { from: 'shinjiro', t: "don't make it weird" }
    ], reply: [
      { t: "Too late. It's weird now.", notes: 3, then: [{ from: 'shinjiro', t: 'tch' }, { from: 'shinjiro', t: 'goodnight kid' }] },
      { t: 'Goodnight, Shinji.', notes: 3, then: [{ from: 'shinjiro', t: '...' }, { from: 'shinjiro', t: 'goodnight' }] }
    ] },
    { id: 'shin-9r', rank: 9, route: 'romance', days: 1, slot: 1, msgs: [
      { from: 'shinjiro', t: "the card. don't lose it" },
      { from: 'shinjiro', t: 'i only wrote it out once' }
    ], reply: [
      { t: "It's in my pocket. I keep checking.", notes: 3, then: [{ from: 'shinjiro', t: '...good' }] },
      { t: 'Make it with me this weekend?', notes: 3, then: [{ from: 'shinjiro', t: 'yeah' }, { from: 'shinjiro', t: 'ok' }] }
    ] },
    { id: 'shin-9f', rank: 9, route: 'friend', days: 1, slot: 1, msgs: [
      { from: 'shinjiro', t: "aki says you're coming to dinner sunday" },
      { from: 'shinjiro', t: "you're coming" }
    ], reply: [
      { t: "I'm coming.", notes: 3, then: [{ from: 'shinjiro', t: 'good. bring the dog' }] },
      { t: 'Is that an invitation or an order?', notes: 2, then: [{ from: 'shinjiro', t: 'yes' }] }
    ] },
    { id: 'shin-after', thread: 'sees', rank: 0, before: 99, days: 0, date: '10/5', rename: 'S.E.E.S.', msgs: [
      { from: 'mitsuru', t: 'Shinjiro is at Tatsumi Memorial Hospital.' },
      { from: 'mitsuru', t: 'He is stable. He has not woken up.' },
      { from: 'mitsuru', t: 'Visiting hours end at seven.' },
      { from: 'akihiko', t: "i'm going now" },
      { from: 'yukari', t: "we're coming with you" },
      { from: 'junpei', t: 'me too' }
    ] }
  ],
  ranks: [
    { after: '5/12', title: '1: get lost', place: 'Port Island Station · Back Alley', scene: [
      { n: "Port Island Station had a back side the brochures didn't mention. You went past the arcade and the karaoke place and the ramen counter with the broken sign, and then the street narrowed, and the light changed, and the air started to smell like cigarettes and old rain and the kind of trouble that didn't need to raise its voice." },
      { n: 'Solar had not meant to come here. She had meant to take a shortcut to the bookstore. The shortcut had had other plans.' },
      { n: "There were three of them leaning against the wall by the vending machine, older, in the bored, practiced slouch of people who had nothing to do and had decided she was something to do. One of them pushed off the wall as she passed. Then another." },
      { n: "She did the math the way she always did, fast and cold. Distance to the street. Distance to the next lit window. What her bag weighed. Whether running would make it worse." },
      { n: "It turned out she didn't need any of it." },
      { s: 'shinjiro', f: 'neutral', t: 'Hey.' },
      { n: "The voice came from further down the alley, low and flat and completely uninterested, and all three of them stopped like someone had pulled a plug." },
      { n: "He was tall, in a long dark coat that had been expensive once, a knit beanie pulled low, his hands in his pockets. He didn't come any closer. He didn't have to. He just looked at them, and whatever they saw in his face made them remember they had somewhere else to be." },
      { n: "They went. Not fast, because they had their pride, but they went." },
      { s: 'shinjiro', f: 'neutral', t: "...You're from that dorm. Aki's new recruit." },
      { choose: [
        { t: 'How do you know that?', notes: 1, then: [
          { s: 'shinjiro', f: 'neutral', t: "He won't shut up about you." },
          { n: 'He said it like a complaint. It did not sound like a complaint.' }
        ] },
        { t: 'Thank you.', notes: 2, then: [
          { s: 'shinjiro', f: 'neutral', t: "Don't. I didn't do anything." },
          { n: 'He had done something. He clearly did not want to have done something.' }
        ] },
        { t: "You must be Shinjiro.", notes: 3, then: [
          { s: 'shinjiro', f: 'surprised', t: '...' },
          { n: "Something flickered across his face, quick and guarded, the look of someone who'd been described behind his back and was trying to figure out how." },
          { s: 'shinjiro', f: 'neutral', t: "Aki talks too much." }
        ] }
      ] },
      { n: "Up close, he looked tired in a way that had nothing to do with sleep. There were shadows under his eyes. His knuckles, when he finally took a hand out of his pocket to fix his beanie, were scarred in the same places Akihiko's were." },
      { s: 'shinjiro', f: 'neutral', t: "This isn't a place for you. Get lost." },
      { choose: [
        { t: "Then what are you doing here?", notes: 3, then: [
          { s: 'shinjiro', f: 'neutral', t: '...' },
          { s: 'shinjiro', f: 'neutral', t: "That's my business." },
          { n: "He turned away before she could see what the question had done to him. She saw anyway. It was in his shoulders." }
        ] },
        { t: "Fine. I'm going.", notes: 1, then: [{ s: 'shinjiro', f: 'neutral', t: 'Good.' }] }
      ] },
      { n: "He walked her to the end of the alley anyway, three steps behind, not talking, like a shadow that had decided to be useful. At the mouth of the street, where the light got bright and normal again, he stopped." },
      { s: 'shinjiro', f: 'neutral', t: "Don't tell Aki you saw me." },
      { n: 'He said it to the ground. Then he was gone, back into the dark, coat swinging, and she stood under the streetlight for a long moment with her heart going too fast, trying to work out which part of the last five minutes had frightened her most.' },
      { n: "It wasn't the men. She was almost sure it wasn't the men." }
    ] },

    { after: '5/30', title: '2: koromaru', place: 'Naganaki Shrine', scene: [
      { n: "The rain had cleared an hour ago, and Naganaki Shrine was dripping, every leaf and roof tile and stone lantern letting go of water at its own pace, so the whole place ticked softly like a clock." },
      { n: "She'd come up for no reason she could name, which was the only kind of reason she ever had for anything. The steps were slick. The air smelled like wet cedar and incense that had burned out hours ago." },
      { n: "And there, crouched by the offering box with his coat pooled on the wet stone behind him, was Shinjiro Aragaki, feeding a dog." },
      { n: "It was a white Shiba with a red collar and eyes that were, unsettlingly, red too, and it was eating out of a plastic container with the focused delight of a dog who knew exactly who brought the good food. Shinjiro was watching it eat like it was the only thing in the world that made sense." },
      { register: 'koromaru' },
      { n: "The dog noticed her first. It lifted its head, sniffed once, and trotted over to inspect her shoes with great seriousness." },
      { s: 'shinjiro', f: 'surprised', t: '...You again.' },
      { choose: [
        { t: "Is he yours?", notes: 2, then: [
          { s: 'shinjiro', f: 'neutral', t: "He's nobody's. The old priest here used to look after him. He passed a while back." },
          { s: 'shinjiro', f: 'neutral', t: "The dog still waits for him. Every day." }
        ] },
        { t: '(Kneel and let the dog sniff your hand.)', notes: 3, then: [
          { n: 'The dog considered her hand, then her face, then decided something, and pushed his whole head into her palm with a sigh.' },
          { s: 'shinjiro', f: 'surprised', t: "...He doesn't do that." },
          { s: 'shinjiro', f: 'neutral', t: "He doesn't do that with anyone." }
        ] },
        { t: "So this is your business.", notes: 3, then: [
          { s: 'shinjiro', f: 'neutral', t: 'Tch.' },
          { n: "He looked away. The tips of his ears had gone faintly red, which might have been the cold." }
        ] }
      ] },
      { s: 'shinjiro', f: 'neutral', t: "His name's Koromaru." },
      { n: "He said it reluctantly, like it was a password he'd decided to share against his better judgment." },
      { n: 'They sat on the shrine steps while Koromaru finished eating. Shinjiro had a second container in his coat. He set it between them without comment. It was rice and egg and some kind of braised meat, still warm, and it was easily the best thing she had eaten since moving to Iwatodai.' },
      { choose: [
        { t: 'Did you make this?', notes: 3, then: [
          { s: 'shinjiro', f: 'neutral', t: "...Somebody has to." },
          { n: "That was a yes. She was starting to learn the dialect." }
        ] },
        { t: 'This is incredible.', notes: 2, then: [{ s: 'shinjiro', f: 'neutral', t: "It's just food." }] }
      ] },
      { n: "Koromaru climbed into her lap, all forty pounds of him, as if he'd always lived there. Shinjiro watched the dog settle in and something in his face changed, loosened, just for a second, the way a fist does when you finally notice you've been clenching it." },
      { s: 'shinjiro', f: 'happy', t: '...He likes you.' },
      { n: "It was the first time she'd seen him smile. It was small and it was crooked and it vanished almost before it arrived, and she found herself wanting very badly to see it again, which she filed under problems for later." }
    ] },

    { after: '6/20', title: '3: grocery bags', place: 'Iwatodai Strip Mall · Supermarket', scene: [
      { n: "The supermarket on the Iwatodai strip was the kind that played the same four songs on a loop and kept the air conditioning so high that the produce aisle felt like stepping into a fridge. Solar was standing in front of the instant noodles, weighing two flavors of the same sadness, when someone behind her made a sound of deep disapproval." },
      { s: 'shinjiro', f: 'neutral', t: "You're not seriously going to eat that." },
      { n: "He had a basket on his arm. It was full of real things, things you had to cook, onions and daikon and a slab of pork wrapped in white paper, and he was looking at her two cups of ramen like they had personally offended him." },
      { choose: [
        { t: "It's a balanced meal. One of each flavor.", notes: 3, then: [
          { s: 'shinjiro', f: 'neutral', t: "...That's not what balanced means." },
          { n: "There was something almost like a laugh in it, buried very deep." }
        ] },
        { t: "I don't really know how to cook.", notes: 2, then: [{ s: 'shinjiro', f: 'neutral', t: "Nobody does. Until they do." }] },
        { t: 'Mind your own business, senpai.', notes: 1, then: [{ s: 'shinjiro', f: 'neutral', t: "Don't call me senpai." }] }
      ] },
      { n: "He took the ramen out of her hands, one cup and then the other, and put them back on the shelf with the expression of a man returning stolen goods to their rightful owner." },
      { s: 'shinjiro', f: 'neutral', t: 'Come on.' },
      { n: "She followed him through the store while he picked things up and put them in her basket instead of his, explaining nothing, occasionally asking her a question like do you have a pot or is there rice in that dorm and nodding grimly at the answers." },
      { place: 'Iwatodai Strip Mall', time: 'Evening' },
      { n: "Outside the light had gone soft and gold, and the strip was full of evening noise, a bike bell, a shopkeeper pulling down a shutter, a radio somewhere playing baseball. He carried the heavier bag. She hadn't asked him to." },
      { s: 'shinjiro', f: 'neutral', t: "...He still eating garbage?" },
      { n: "He didn't say who. He didn't need to." },
      { choose: [
        { t: 'He put protein powder in his curry last week.', notes: 3, then: [
          { s: 'shinjiro', f: 'happy', t: '...Idiot.' },
          { n: "He said it with so much affection that she almost had to look away." }
        ] },
        { t: 'You could ask him yourself.', notes: 2, then: [
          { s: 'shinjiro', f: 'sad', t: "...No. I couldn't." },
          { n: "He walked a little faster after that. She let him." }
        ] }
      ] },
      { n: "At the corner where the road split toward the dorm, he stopped and handed her the bag, and then, after a moment, took out his phone." },
      { s: 'shinjiro', f: 'neutral', t: "Give me your number." },
      { s: 'shinjiro', f: 'neutral', t: "In case Aki does something stupid. Not for any other reason." },
      { n: 'She gave it to him. He typed it in with one thumb, frowning, like it was a form he had to fill out correctly or be sent back to the start.' },
      { n: "He didn't say goodbye. He just walked off toward the station with his hands in his coat pockets, and she stood at the corner holding a bag full of vegetables she didn't know how to cook, feeling, inexplicably, like she'd been looked after." }
    ] },

    { after: '8/7', title: '4: back', place: 'Iwatodai Dorm · Lounge', scene: [
      { n: "He came back in August, on a night so hot the dorm's air conditioning gave up around eight and everyone ended up in the lounge in shorts, lying on the floor where it was coolest, complaining." },
      { n: "The door opened and the complaining stopped. Shinjiro stood on the threshold with a duffel bag on one shoulder and that same long coat, in this heat, like the weather was something that happened to other people." },
      { n: "Akihiko was on his feet before anyone else had processed it. He didn't say anything. He just stood there, and Shinjiro looked at him, and something passed between them that had two years in it and a lot of things nobody else was ever going to be told." },
      { s: 'akihiko', f: 'happy', t: '...About time.' },
      { s: 'shinjiro', f: 'neutral', t: "Don't make it a thing, Aki." },
      { n: "It was absolutely going to be a thing. Junpei was already typing into the group chat. Yukari was pretending not to watch. Mitsuru, from the stairs, simply nodded once, like a box on a list had finally been ticked." },
      { n: "Later, after the excitement had worn off and everyone had drifted upstairs, Solar found him in the kitchen, standing in front of the open fridge and staring into it with an expression of profound disappointment." },
      { s: 'shinjiro', f: 'neutral', t: "There's nothing in here. What have you people been eating?" },
      { choose: [
        { t: "You're back.", notes: 3, then: [
          { s: 'shinjiro', f: 'neutral', t: "...Yeah." },
          { n: 'He closed the fridge. He looked at her properly for the first time that night.' },
          { s: 'shinjiro', f: 'neutral', t: "You look like you're happy about it." }
        ] },
        { t: 'Cup ramen, mostly.', notes: 2, then: [
          { s: 'shinjiro', f: 'neutral', t: 'Tch. Of course.' },
          { n: 'He started making a list on the back of a receipt. It was long.' }
        ] }
      ] },
      { choose: [
        { t: "I am happy about it.", notes: 3, then: [
          { s: 'shinjiro', f: 'surprised', t: '...' },
          { s: 'shinjiro', f: 'neutral', t: "That's annoying." },
          { n: "It did not sound like he found it annoying. It sounded like he didn't know where to put it." }
        ] },
        { t: "Mostly for the food.", notes: 2, then: [
          { s: 'shinjiro', f: 'happy', t: "...Honest, at least." }
        ] }
      ] },
      { n: "Koromaru, who had moved into the dorm sometime in July by sheer force of will, trotted into the kitchen and leaned against Shinjiro's leg with his whole body. Shinjiro's hand went down to the dog's head automatically, like it had been doing that every night of the two years he'd been gone." },
      { s: 'shinjiro', f: 'neutral', t: "...Don't tell anyone I came back for the dog." },
      { n: "She promised. It was the second thing he'd asked her not to tell. She was starting a collection." }
    ] },

    { after: '8/15', title: '5: the kitchen', place: 'Iwatodai Dorm · Kitchen', scene: [
      { n: "The dorm kitchen had never been used for its intended purpose until Shinjiro moved back in. Now it smelled, every evening, like garlic and soy and something slow-cooking, and people kept wandering in on vague pretexts and leaving with full bowls." },
      { n: "Tonight it was just the two of them. He'd said, at dinner, without looking at her, you said you can't cook, and she'd said, so?, and he'd said, kitchen, eight, in a tone that left no room for discussion." },
      { s: 'shinjiro', f: 'neutral', t: 'Onions. Thin. No, thinner. You cut like you\'re angry at it.' },
      { choose: [
        { t: "Maybe I am angry at it.", notes: 3, then: [
          { s: 'shinjiro', f: 'happy', t: "...Ha." },
          { n: "It came out of him short and surprised, like a cough, and he looked almost offended that she'd gotten it out of him." }
        ] },
        { t: 'Show me how.', notes: 3, then: [
          { n: "He stepped behind her and put his hand over hers on the knife, slow, careful, like she was something that might startle. The blade went through the onion in a thin, clean slice. His hand was warm. She did not, at all, think about how warm it was." },
          { s: 'shinjiro', f: 'neutral', t: "Like that. Let the knife do the work." }
        ] }
      ] },
      { n: 'He talked while he cooked, which surprised her. Not about anything, really. About why you salt the water. About how you can tell oil is hot enough by the way it moves. About patience.' },
      { s: 'shinjiro', f: 'neutral', t: "You have to let it simmer. Most things are better if you stop poking them." },
      { n: "She thought that might be the most he'd ever said about himself, and he hadn't said anything about himself at all." },
      { s: 'akihiko', f: 'happy', t: "Is that curry? I'm adding protein." },
      { n: "Akihiko came into the kitchen already holding the tub, like he'd been waiting on the stairs for the smell to reach him." },
      { s: 'shinjiro', f: 'neutral', t: "If you put that powder in my curry, Aki, I'm putting you in the pot." },
      { s: 'akihiko', f: 'serious', t: "It's unflavored." },
      { s: 'shinjiro', f: 'neutral', t: 'Out.' },
      { n: "Akihiko went, eventually, after stealing a piece of pork off the cutting board and getting his hand smacked with a wooden spoon. Shinjiro watched him go, and for a second he looked twelve years old, and very fond, and very tired." },
      { choose: [
        { t: "You missed him.", notes: 3, then: [
          { s: 'shinjiro', f: 'sad', t: '...Every day.' },
          { n: "He turned back to the stove before she could see his face. She didn't need to see it." }
        ] },
        { t: "He's going to sneak back in.", notes: 2, then: [{ s: 'shinjiro', f: 'neutral', t: "I know. I made extra." }] }
      ] },
      { n: "The curry was the best thing she'd ever made, which was to say it was the best thing he'd ever made with her standing next to him. He let her take credit for it at the table anyway, and when Junpei said this is amazing, Solar, he just ate his dinner and said nothing at all." }
    ] },

    { after: '8/28', title: '6: the doorway', music: 'tender', place: 'Iwatodai Dorm · Lounge', scene: [
      { n: "It was a slow, hot Friday evening, the sky going purple outside the windows, and the lounge was full in a lazy, end-of-summer way. Junpei and Yukari were arguing about a TV show. Koromaru was asleep on Solar's feet. Shinjiro was in the armchair with a magazine he wasn't reading." },
      { n: "Ken Amada came down the stairs." },
      { register: 'ken' },
      { n: "He was ten, small for it, polite to the point of formality, the youngest person in the dorm by years. He was always careful with everyone. He said thank you for things nobody else thanked anyone for." },
      { n: "He stopped in the doorway when he saw Shinjiro, and his face did something that didn't belong on a child's face." },
      { s: 'ken', f: 'serious', t: '...' },
      { n: "It was only for a second. Then he smiled." },
      { s: 'ken', f: 'happy', t: "Good evening, everyone. Don't mind me." },
      { n: "He went to get a glass of water, and the room went on as if nothing had happened. Junpei didn't notice. Yukari didn't notice." },
      { n: "Shinjiro noticed. Solar watched him notice. She watched the color go out of him, all at once, the magazine going still in his hands, his whole body going quiet the way an animal's does when it hears something in the dark." },
      { n: "He got up a minute later, said nothing to anyone, and went out the front door into the evening." },
      { choose: [
        { t: '(Follow him.)', notes: 3, then: [
          { place: 'Iwatodai Dorm · Front Steps', time: 'Evening' },
          { n: "He was sitting on the front steps with his elbows on his knees, staring at the street. He didn't look up when she sat down next to him." },
          { s: 'shinjiro', f: 'sad', t: "...Don't ask." },
          { choose: [
            { t: "I wasn't going to.", notes: 3, then: [
              { s: 'shinjiro', f: 'sad', t: '...' },
              { n: "They sat there until the streetlights came on, not talking. Somewhere a cicada made one last attempt at summer and gave up." },
              { s: 'shinjiro', f: 'neutral', t: "...Thanks." }
            ] },
            { t: 'Is it Ken?', notes: 1, then: [
              { s: 'shinjiro', f: 'sad', t: "I said don't." },
              { n: "He didn't leave, though. She counted that." }
            ] }
          ] }
        ] },
        { t: '(Let him go.)', notes: 1, then: [
          { n: "She let him go. She told herself it was respect. It might have been. It might also have been that she didn't know what she'd say if she found him." },
          { n: "He came back an hour later and went straight upstairs. Koromaru went with him." }
        ] }
      ] },
      { n: "That night she lay awake and thought about Ken's face in the doorway, and about the fact that a ten-year-old had looked at Shinjiro the way she had seen exactly one other person look at anyone, once, a long time ago, in a hospital hallway." },
      { n: "It wasn't hate, exactly. It was something that had been waiting." }
    ] },

    { after: '9/8', title: '7: orange bottle', music: 'tender', place: 'Iwatodai Dorm · Kitchen', scene: [
      { n: "September rain, the steady kind, the kind that came in at an angle and found every gap in the windows. The kitchen smelled like rice and the dish soap he insisted on buying because the other kind was garbage." },
      { n: "She came down late for a glass of water and found him at the counter with his back to her, shaking something out of a small orange bottle into his palm." },
      { n: "He heard her. He closed his hand. He didn't turn around for a long second, long enough that she knew he was deciding something." },
      { s: 'shinjiro', f: 'neutral', t: "...You didn't see this." },
      { choose: [
        { t: 'What are they?', notes: 2, then: [
          { s: 'shinjiro', f: 'neutral', t: "Medicine." },
          { n: "He swallowed them dry, two of them, and put the bottle back in his coat." },
          { s: 'shinjiro', f: 'neutral', t: "It keeps something in check. That's all you need to know." }
        ] },
        { t: "Akihiko's worried about you.", notes: 3, then: [
          { s: 'shinjiro', f: 'sad', t: "...I know." },
          { s: 'shinjiro', f: 'sad', t: "He's always worried. Since we were kids. It's his whole personality." }
        ] }
      ] },
      { n: "He looked worse up close, under the kitchen light. Thinner. Gray at the edges, like a photograph left in the sun. She'd noticed it at dinner the last few weeks and told herself it was the heat. It wasn't the heat." },
      { s: 'shinjiro', f: 'neutral', t: "Don't tell Aki." },
      { n: "There it was. The third thing. She was holding so many of his secrets now that she'd started to feel the weight of them in her pockets." },
      { choose: [
        { t: "I promise.", notes: 3, then: [
          { s: 'shinjiro', f: 'neutral', t: '...' },
          { s: 'shinjiro', f: 'happy', t: "You keep a lot of promises for someone who's only been here six months." },
          { n: "It was almost a joke. It was almost something else, too." }
        ] },
        { t: "Only if you promise me you're okay.", notes: 2, then: [
          { s: 'shinjiro', f: 'sad', t: "...I can't promise that." },
          { s: 'shinjiro', f: 'neutral', t: "I'm not going to lie to you. That's the one thing I won't do." }
        ] }
      ] },
      { n: "He poured her the glass of water she'd come down for and handed it to her, and their fingers touched around it, and neither of them moved for a second too long." },
      { s: 'shinjiro', f: 'neutral', t: "Go to bed, kid." },
      { n: "She went. On the stairs she looked back. He was standing at the counter with his head bowed and both hands flat on the steel, like he was holding the whole kitchen down." }
    ] },

    { after: '9/20', title: '8: two years ago', music: 'tender', place: 'Iwatodai Dorm · Rooftop', scene: [
      { n: "The night was clear and cool, the first truly cool night of the year, and the moon over the bay was getting fat. She knew what that meant now. Everyone in the dorm did. They'd all started glancing at the sky the way farmers did." },
      { n: "He was on the roof, smoking nothing, his hands in his coat, watching the moon like it was an opponent." },
      { s: 'shinjiro', f: 'neutral', t: "...Figured you'd find me." },
      { choose: [
        { t: 'You wanted to be found.', notes: 3, then: [{ s: 'shinjiro', f: 'neutral', t: '...Maybe.' }] },
        { t: "Koromaru told me where you were.", notes: 2, then: [{ s: 'shinjiro', f: 'happy', t: "Traitor." }] }
      ] },
      { n: "For a long time he didn't say anything. The wind came off the water. Somewhere down in the street a scooter went past, and then it was quiet again." },
      { s: 'shinjiro', f: 'sad', t: "Two years ago, my Persona got away from me. I couldn't control it. Something went wrong and I couldn't hold it back." },
      { s: 'shinjiro', f: 'sad', t: "There was a woman on the street that night. She didn't do anything. She was just there." },
      { n: "He didn't say the rest. He didn't have to. Solar thought of the doorway, and the ten-year-old's face, and felt something cold go all the way down her spine." },
      { s: 'shinjiro', f: 'sad', t: "I'm not telling you so you'll say it wasn't my fault. It was." },
      { s: 'shinjiro', f: 'neutral', t: "I'm telling you because you keep coming back. And you should know what you're coming back to." },
      { choose: [
        { t: "I'm still here.", notes: 3, then: [
          { s: 'shinjiro', f: 'surprised', t: '...' },
          { n: "He turned and looked at her like she'd said something in a language he used to speak and had forgotten." },
          { s: 'shinjiro', f: 'sad', t: "...Yeah. You are." }
        ] },
        { t: "Does Ken know?", notes: 2, then: [
          { s: 'shinjiro', f: 'sad', t: "He knows." },
          { s: 'shinjiro', f: 'neutral', t: "Whatever he decides to do about it, I'm not going to stop him." },
          { n: "He said it so calmly that it frightened her more than anything else he'd ever said." }
        ] },
        { t: "(Stand next to him.)", notes: 3, then: [
          { n: "She stood next to him at the railing, close enough that their sleeves touched. He didn't move away. After a while he leaned, just slightly, the way a tired person leans on a wall, and let her hold some of the weight." }
        ] }
      ] },
      { n: "The moon kept getting fatter. Neither of them looked at it. They looked at the city instead, all the windows lit up, all those people who didn't know there was an hour that wasn't on any clock." },
      { s: 'shinjiro', f: 'neutral', t: "...Thanks for listening. Don't make it weird." },
      { n: "It was already weird. It was already something. They both stood there pretending it wasn't for a long time." }
    ] },

    { after: '9/29', title: '9: the recipe card', place: 'Iwatodai Dorm · Kitchen', scene: [
      { n: "Late September, and the kitchen was warm against the cold coming in at the windows. He'd made the dish from the shrine, the rice and egg and braised pork, without saying anything about why, and he'd made enough for two and then stood at the counter watching her eat it." },
      { n: "He'd been strange all week. Quieter, even for him. Doing things in an order, like he was going down a list. He'd fixed the loose hinge on the bathroom door. He'd reorganized the spice shelf. He'd taught Junpei how to make rice, which nobody had believed was possible." },
      { n: "When she finished, he slid something across the counter. An index card, a little stained, covered in his blocky, careful handwriting." },
      { n: "It was the recipe. Every step, every measurement, in the order he did it. At the bottom, underlined twice, it said: stop poking it." },
      { s: 'shinjiro', f: 'neutral', t: "So you can make it. If I'm not around." },
      { n: "If I'm not around. He said it like he was talking about the weekend. Her chest went tight and cold at the same time, the body knowing something the mind refused to look at." },
      { s: 'shinjiro', f: 'neutral', t: "...You keep showing up. I keep letting you. I should probably know why." },
      { s: 'shinjiro', f: 'neutral', t: "So. What is this?" },
      { route: [
        { t: "I think I've fallen for you, Shinji.", route: 'romance', notes: 3, then: [
          { s: 'shinjiro', f: 'surprised', t: '...' },
          { n: "He looked at her for a long time, and his face did several things in a row, none of which he seemed to have any control over." },
          { s: 'shinjiro', f: 'sad', t: "You picked a hell of a time." },
          { n: "But he came around the counter. He stood in front of her, close, and put one hand very carefully on the side of her face, the scarred knuckles cool against her jaw." },
          { s: 'shinjiro', f: 'happy', t: "...Me too, kid. Me too." }
        ] },
        { t: "You're my friend. One of the best I've got.", route: 'friend', notes: 3, then: [
          { s: 'shinjiro', f: 'neutral', t: '...' },
          { s: 'shinjiro', f: 'happy', t: "Yeah. Okay. I can live with that." },
          { n: "Something in him settled, like a weight finally set down in the right place." },
          { s: 'shinjiro', f: 'neutral', t: "Keep the card. Make it for Aki sometime. He'll pretend it's not as good as mine." }
        ] }
      ] },
      { n: "She put the card in her pocket. She would keep touching it, all week, to make sure it was still there." }
    ] },

    { after: '10/3', title: '10: the night before', place: 'Iwatodai Dorm · Kitchen', scene: [
      { n: "The third of October. The moon was almost full, so bright through the kitchen window that they didn't need the lights. He was sitting on the counter, which he never did, his long coat hanging off the edge, his beanie in his hands." },
      { n: "He'd asked her to come down. He'd texted, just: kitchen. And she'd come, in her socks, at eleven at night, because when Shinjiro Aragaki asked for something, it was usually the first time he'd asked anyone for anything in years." },
      { s: 'shinjiro', f: 'neutral', t: "Tomorrow's a full moon." },
      { n: "She knew. Everyone knew. The dorm had been holding its breath for days." },
      { s: 'shinjiro', f: 'sad', t: "Whatever happens tomorrow, I want you to know it's not on you. None of it." },
      { choose: [
        { t: "Shinji, what's going to happen?", notes: 2, then: [
          { s: 'shinjiro', f: 'sad', t: "...Something I owe." },
          { n: "That was all he'd say. She knew, with the terrible certainty of the body, that it was all he'd ever say." }
        ] },
        { t: "(Take his hand.)", notes: 3, then: [
          { n: "She took his hand. He let her. He turned it over in his and looked at it, like he was trying to memorize the shape." }
        ] }
      ] },
      { ifRoute: 'friend', then: [
        { s: 'shinjiro', f: 'neutral', t: "Look after Aki for me. He'll act like he's fine. He won't be." },
        { s: 'shinjiro', f: 'neutral', t: "And the dog. Feed the dog. Real food. Not that canned garbage." },
        { choose: [
          { t: "I'll look after both of them. Idiots.", notes: 3, then: [{ s: 'shinjiro', f: 'happy', t: "...Yeah. Idiots." }] },
          { t: "You'll be here to do it yourself.", notes: 3, then: [
            { s: 'shinjiro', f: 'sad', t: '...' },
            { s: 'shinjiro', f: 'happy', t: "Sure, kid. Sure I will." }
          ] }
        ] },
        { n: "He hopped down off the counter and ruffled her hair, which he had never done, which he did like he'd been wanting to for months. Then he went upstairs. She stayed in the kitchen until the moon moved off the window." }
      ] },
      { ifRoute: 'romance', then: [
        { s: 'shinjiro', f: 'neutral', t: "I spent two years thinking I didn't get to have anything. Then you started showing up in my alley." },
        { s: 'shinjiro', f: 'sad', t: "It's been the best few months I've had. I wanted you to hear that from me. Tonight." },
        { choose: [
          { t: "Then stay. Don't go tomorrow.", notes: 3, then: [
            { s: 'shinjiro', f: 'sad', t: "...I can't, Solar." },
            { n: "It was the first time he'd said her name. He said it like it hurt, and like he'd been saving it." }
          ] },
          { t: "(Kiss him.)", notes: 3, then: [
            { s: 'shinjiro', f: 'surprised', t: '...' },
            { n: "He kissed her back, slow, careful, his hand in her hair, like it was something he'd been told he wasn't allowed to have and had decided to take anyway, just this once." },
            { s: 'shinjiro', f: 'happy', t: "...Solar." },
            { n: "It was the first time he'd said her name. He said it like he'd been saving it." }
          ] }
        ] },
        { n: "They stayed in the kitchen until the moon moved off the window. He put his beanie on her head before he went upstairs. It was too big. She didn't take it off." }
      ] }
    ] }
  ]
});
