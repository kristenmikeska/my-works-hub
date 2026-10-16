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
      { n: "It was only for a second. Then he smiled, and said good evening, and went to get a glass of water, and the room went on as if nothing had happened. Junpei didn't notice. Yukari didn't notice." },
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
