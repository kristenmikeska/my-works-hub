/* Shadowheart · II The Priestess. Arrives on the 8/6 full moon. Evenings. Format notes are at the top of akihiko.js. */
FemcSocial.define({
  id: 'shadowheart', name: 'Shadowheart', short: 'Shadowheart', arcana: 'Priestess', numeral: 'II', from: "Baldur's Gate 3",
  arrives: '8/6',
  home: { place: 'Naganaki Shrine · Night', slot: 1, days: [1, 2, 3, 4, 5], hint: 'Evenings on weekdays, at Naganaki Shrine after Kiriko has gone home.' },
  approach: "Someone is at the shrine after dark: a dark-haired woman with a silver circlet, standing very still, one hand resting on a weapon.",
  invite: {
    ask: ["Are you free? The shrine is quiet tonight.", "Come. Bring tea.", "I could use the company. Don't make it a thing.",
      "The lanterns are lit. Come up, if you like.",
      "The dog is here. He's asking for you. I'm only passing it on.",
      "Kiriko left far too many rice balls. Help me with them.",
      "It's quiet. Too quiet. Come and ruin it.",
      "Are you busy? Don't answer that. Come up."],
    ok: ["Good. Don't be late, Sunshine.", "Good. Mind the steps in the dark.", "Fine. I'll find the good cups."],
    no: ["Fine. Another night.", "Hm. The dog will be disappointed. Not me. The dog.", "Suit yourself."]
  },
  hangouts: [
    [
      { n: "Kiriko had left the fortune box unlocked again, which Shadowheart claimed to disapprove of, and when Solar came up the steps in the dark the priestess was standing in front of it with a little rolled slip of paper, reading it by lantern light with deep suspicion." },
      { s: 'shadowheart', f: 'serious', t: "'Great misfortune. Avoid travel. Your lost item will not be found.' It's very rude, your paper." },
      { s: 'shadowheart', f: 'neutral', t: "Kiriko says you tie the bad ones to that rack and leave them for the gods to deal with. Which gods? Nobody can tell me which gods." },
      { choose: [
        { t: "Tie it up. Let them sort it out.", notes: 3, then: [
          { s: 'shadowheart', f: 'happy', t: "...Fine. Let them. They've handed me worse." },
          { n: "She tied it to the rack with a knot that was much too complicated and much too tight, the knot of someone who had been taught to secure things properly or else." }
        ] },
        { t: "(Draw one too.)", notes: 2, then: [{ n: "Solar shook the box and drew a small blessing, which was, Shadowheart pointed out, also ominous, because why only small." }] },
        { t: "Fortunes aren't real.", notes: 1, then: [{ s: 'shadowheart', f: 'serious', t: "I've met gods. I'm not taking chances with paper." }] }
      ] },
      { n: "Koromaru came over and sniffed the rack, approved of it, and lay down underneath it like a guard." }
    ],
    [
      { n: "Solar had brought two cans of hot barley tea from the vending machine at the bottom of the steps and, as an afterthought, two convenience-store puddings, and Shadowheart had ignored the tea entirely and was holding a pudding up to the lantern, studying it like it might be cursed." },
      { s: 'shadowheart', f: 'serious', t: "It's shaking. Why is it shaking." },
      { choose: [
        { t: "(Show her the tab that flips it out onto the lid.)", notes: 3, then: [
          { n: "Solar showed her the trick: the little plastic tab, the soft pop, the pudding sliding out whole onto the lid with its cap of caramel on top. Shadowheart stared at it. Then she did the second one herself, very carefully, with her tongue between her teeth." },
          { s: 'shadowheart', f: 'happy', t: "...That's the best thing in your world. I'm sorry. It is." }
        ] },
        { t: "It's supposed to do that.", notes: 2, then: [{ s: 'shadowheart', f: 'serious', t: "Nothing is supposed to do that." }] },
        { t: "It's dessert. Just try it.", notes: 1, then: [{ n: "She tried it. Her face did nothing at all. Then she finished it in four bites and asked, without looking at Solar, whether there was another one." }] }
      ] },
      { n: "She kept the empty cup. Solar found it a few nights later on the shrine porch with a candle stub in it, which was either very resourceful or the start of a new and very small religion." }
    ],
    [
      { n: "Koromaru had found a stick. It was, by any measure, too much stick, half a branch off the old camphor tree, and he was dragging it across the courtyard toward the porch with the solemn determination of a dog who had decided that Shadowheart was going to throw it." },
      { s: 'shadowheart', f: 'serious', t: "No. Absolutely not. I'm not a stick-throwing sort of person." },
      { n: "Koromaru set the stick down at her feet and sat, and looked at her. The silence went on for a long time." },
      { s: 'koromaru', f: 'happy', t: "Woof!" },
      { choose: [
        { t: "(Wait.)", notes: 3, then: [
          { n: "Solar said nothing. She sat on the step and waited, and so did the dog, and it took about forty seconds before Shadowheart sighed like a woman walking to her own execution and threw the stick." },
          { s: 'shadowheart', f: 'happy', t: "...Once. I'm throwing it once." }
        ] },
        { t: "He's not going to give up.", notes: 2, then: [
          { s: 'shadowheart', f: 'neutral', t: "Neither am I. I was trained by people far more stubborn than a dog." },
          { n: "She threw it eleven seconds later." }
        ] },
        { t: "I'll throw it.", notes: 1, then: [{ n: "Solar threw it. Koromaru watched it sail across the courtyard, then turned back to Shadowheart and went on staring, because apparently that was not the point." }] }
      ] },
      { n: "She threw it twenty-three more times. Solar counted. Shadowheart maintained afterward that it had been five." }
    ],
    [
      { n: "The sky over Iwatodai was a dull orange most nights, the city's light thrown up against the clouds, and Shadowheart had been lying flat on her back on the shrine porch for twenty minutes trying to find something in it." },
      { s: 'shadowheart', f: 'neutral', t: "Four. I've counted four stars. Where I come from there are so many you can read by them." },
      { s: 'shadowheart', f: 'serious', t: "Your city has eaten its sky. I'd be furious about it, if I were you." },
      { choose: [
        { t: "(Lie down and count with her.)", notes: 3, then: [{ n: "Solar lay down on the boards beside her, a careful foot of space between them, and they counted together. Solar found a fifth. Shadowheart said it was a plane. It was a plane." }] },
        { t: "One of those is a plane.", notes: 2, then: [{ s: 'shadowheart', f: 'serious', t: "...Three, then. Your city ate its sky and put machines in it instead." }] },
        { t: "You can see more from the beach.", notes: 1, then: [{ s: 'shadowheart', f: 'neutral', t: "Then why are we here? ...Don't answer that. The dog is here." }] }
      ] },
      { n: "They got to six before the clouds came over. Shadowheart said six was respectable, for a city that didn't deserve any." }
    ],
    [
      { n: "Somebody came up the steps at half past nine, a salaryman with his tie pulled loose, and Shadowheart moved so fast Solar didn't see her do it, from the porch to the deep shadow behind the offering box, silent as a cat going under a car." },
      { n: "The man didn't see either of them. He threw a coin in the box, rang the bell, clapped twice, bowed, and stood with his head down for a long minute, and then went back down the steps a little lighter than he'd come up." },
      { s: 'shadowheart', f: 'neutral', t: "...That's it? A coin and a clap? No vigil? No reciting the litany until your knees give out?" },
      { choose: [
        { t: "That's it. You ask, and you go home.", notes: 3, then: [
          { s: 'shadowheart', f: 'surprised', t: "...And the gods here don't mind? That you just ask?" },
          { n: "Solar said she didn't think they minded. Shadowheart looked at the offering box for a long time, the way you'd look at a door someone had left unlocked." }
        ] },
        { t: "What did you think he'd do?", notes: 2, then: [{ s: 'shadowheart', f: 'serious', t: "Something that cost him. Faith is supposed to cost you something." }] },
        { t: "Did you just hide from a salaryman?", notes: 1, then: [{ s: 'shadowheart', f: 'serious', t: "I took cover from an unknown arrival in the dark. It's called training. You'd last a week where I'm from." }] }
      ] },
      { n: "She didn't try the bell herself. But when Solar was halfway down the steps that night, she heard it ring once behind her, very softly, like someone testing whether it would bite." }
    ]
  ],
  // After MAX on the romance route (rank 10 is 12/11 or later): four dates, then they rotate. She goes home at the end of January.
  dates: [
    { title: 'night orchids', place: 'Paulownia Mall · Flower Stall', scene: [
      { n: "Shadowheart had never been to Paulownia Mall, on the grounds that it was loud and bright and full of people and she had spent twenty years being trained to distrust all three, so naturally that was where Solar took her, on a Saturday evening in December when it was at its loudest and brightest and fullest, every pillar wrapped in fairy lights and a song about bells coming out of every shop at once, none of them in time with each other." },
      { n: "She walked through it like a scout through hostile country. Solar watched her clock every exit, every security guard, every child with a balloon. A man in a reindeer sweater held out a packet of tissues with an advert on it, and she looked at it for so long that he took it back." },
      { s: 'shadowheart', f: 'serious', t: "Everyone here is looking at everyone. How does anyone stand it?" },
      { choose: [
        { t: "(Take her hand.)", notes: 3, then: [
          { n: "Solar took her hand, the left one, the one that didn't bleed anymore. Shadowheart's whole arm went stiff, and then, slowly, by stages, the way ice goes, it didn't." },
          { s: 'shadowheart', f: 'blushing', t: "...In public. You're holding my hand in public. Where anyone could see." },
          { s: 'solar', t: "That's sort of the point." },
          { s: 'shadowheart', f: 'blushing', t: "...Fine. Don't let go. I'd get lost. In the crowd. Obviously." }
        ] },
        { t: "Nobody's looking at you. Okay, some people are looking at you.", notes: 2, then: [
          { s: 'shadowheart', f: 'serious', t: "It's the armor, isn't it." },
          { s: 'solar', t: "It's the armor." },
          { n: "She looked down at herself, dark plate and silver circlet in the middle of a shopping mall, under a banner advertising a winter sale on rice cookers, and one corner of her mouth moved, very slightly, which for Shadowheart was practically falling over laughing." }
        ] }
      ] },
      { n: "The flower stall was at the far end of the ground floor, past the fountain, where it had been in October when Solar had stood in front of it for twenty minutes doing sums about a white orchid in a pot. The florist recognized her. Florists, it turned out, remembered anyone who had taken that long to decide. She looked from Solar to Shadowheart and back, and then at their hands, and became very busy with a roll of ribbon." },
      { n: "There were six of them on the top shelf, white and strange and a little alien under the shop lights, and Shadowheart stood in front of them with her face doing something Solar had seen it do only once, in the green hour at the shrine, when she had looked down at her own palm and found it had stopped bleeding." },
      { s: 'shadowheart', f: 'surprised', t: "...These are the same. The night orchids. You found them here? In this place?" },
      { s: 'shadowheart', f: 'neutral', t: "I'd like to buy one. For you. So you have one after. When I've gone." },
      { n: "She took a small leather pouch from her belt and shook something out of it onto the counter with enormous dignity. It was a gold coin, heavy and worn and stamped with a face nobody in this country had ever seen, and the florist looked at it, and looked at Shadowheart, and looked at Solar with an expression of silent appeal." },
      { choose: [
        { t: "(Ask the florist, very politely, if she'll take it.)", notes: 3, then: [
          { n: "The florist turned the coin over in her fingers and studied the face on it for a long moment, and said, in the careful voice of someone making an exception she'd think about later, that she'd never seen one of those before, and she'd always wanted something nobody else had." },
          { s: 'shadowheart', f: 'happy', t: "...That's the first honest trade I've made in your world." },
          { n: "Weeks later, walking past, Solar saw it through the glass, propped against the till where the florist could see it, catching the light." }
        ] },
        { t: "(Pay. Let her keep the coin.)", notes: 2, then: [
          { n: "Solar paid. Shadowheart objected in a low, furious voice all the way to the fountain, and then stopped objecting, and slipped the coin into Solar's coat pocket when she thought Solar wasn't looking. Solar let her think so." }
        ] }
      ] },
      { n: "They sat on the edge of the fountain with the orchid between them in its paper sleeve, and the mall went on being loud around them, and Shadowheart didn't clock a single exit. Solar noticed. She didn't say. She kept that one for herself." },
      { s: 'shadowheart', f: 'blushing', t: "...It's less awful with you. The light. I thought I'd hate being looked at." },
      { s: 'shadowheart', f: 'neutral', t: "I think I only hated being looked at by the wrong people." }
    ] },
    { title: 'the real thing', place: 'Paulownia Mall · Chagall Café', scene: [
      { n: "Solar had made a mistake months ago, and had been paying for it ever since, and the mistake was showing Shadowheart the little tab on the bottom of a convenience-store pudding." },
      { n: "It had become, without anybody deciding it, a rite. Two puddings, two cans of barley tea, the soft pop on the porch, Shadowheart flipping hers out onto the lid with the concentration of someone defusing a bomb. Solar had once brought a chocolate one instead and been looked at like she'd committed a sacrilege, which, given the company, was really saying something." },
      { n: "So she'd decided it was time for the real thing. Chagall Café did a custard pudding in a little glass dish, made by hand every morning, with a burnt-sugar top and a sprig of mint and a price that made Solar wince quietly at the menu, and she had been saving up for weeks to see Shadowheart's face when she tasted it." },
      { n: "Shadowheart sat very straight at a table in the corner, back to the wall, and looked at the pudding when it arrived the way she'd once looked at a fortune that said great misfortune. Suspicious. A little hurt." },
      { s: 'shadowheart', f: 'serious', t: "It doesn't shake." },
      { s: 'solar', t: "It's a good one. It's homemade." },
      { s: 'shadowheart', f: 'serious', t: "It's supposed to shake." },
      { n: "She ate it anyway, slowly, all of it, with the little spoon, in total silence, while Solar watched her face and could read absolutely nothing in it, which was new, because by now she could read most things in it." },
      { s: 'shadowheart', f: 'neutral', t: "...It's very good." },
      { s: 'shadowheart', f: 'neutral', t: "It's not the same." },
      { choose: [
        { t: "The other one's better. Isn't it.", notes: 3, then: [
          { s: 'shadowheart', f: 'happy', t: "...Yes. I'm sorry. It is." },
          { s: 'shadowheart', f: 'blushing', t: "It isn't the pudding. The other one comes with the porch. And the dog. And the lanterns. And you, being smug about the tab." },
          { s: 'solar', t: "I'm not smug about the tab." },
          { s: 'shadowheart', f: 'happy', t: "You're unbearably smug about the tab, Sunshine." }
        ] },
        { t: "I saved up for that, you know.", notes: 2, then: [
          { s: 'shadowheart', f: 'surprised', t: "...You did? For me?" },
          { n: "She looked at the empty dish again, differently, like it had turned out to be something else, and then ate the sprig of mint, which nobody ever ate, solemnly, as if to make sure that nothing went to waste." }
        ] }
      ] },
      { place: 'Naganaki Shrine · Night', time: 'Night', music: 'tender' },
      { n: "Later, on the porch, there were two convenience-store puddings and two cans of barley tea, because of course there were. Solar had stopped at the machine at the bottom of the steps without either of them saying a word about it." },
      { n: "Shadowheart flipped hers out onto the lid. Pop. Perfect, like always. Then she held the lid up to the lantern and watched it shake, and laughed, very quietly, at nothing, at a pudding." },
      { s: 'shadowheart', f: 'blushing', t: "That's the real thing." },
      { n: "She kissed Solar on the porch, briefly, tasting of caramel, as if checking something, and then sat back and finished her pudding as though nothing had happened. Koromaru came out from behind the offering box to see what the noise was. There hadn't been any noise." }
    ] },
    { title: 'a coin and a clap', place: 'Naganaki Shrine', music: 'sun', scene: [
      { n: "Shadowheart came up to the shrine in daylight, which she never did, because daylight was Kiriko's shift and she was very serious about not trespassing on another priestess's hours, and she stood at the top of the hundred and twelve steps blinking in the thin winter sun like something that had been woken from hibernation and resented it." },
      { n: "Kiriko was sweeping. She saw Shadowheart and stopped, and looked at Solar, and looked at Shadowheart, and leaned on her broom with an expression of enormous, unholy delight." },
      { s: 'kiriko', f: 'happy', t: "Day shift! She's on day shift! Sol-chan, she's on DAY SHIFT." },
      { s: 'shadowheart', f: 'serious', t: "I'm not on any shift. I'd like to ask your gods something. Properly. Sunshine says you just ask." },
      { s: 'kiriko', f: 'surprised', t: "...Oh." },
      { s: 'kiriko', f: 'happy', t: "Oh, okay, yes. Coin, bell, two bows, two claps, one bow. I'll be over there. Not looking. Extremely not looking." },
      { n: "She went and stood by the stone foxes with her back turned and swept the same square meter of gravel with ferocious attention, which was how Solar knew she was listening to every word." },
      { n: "Shadowheart held the coin for a long time. It was a five-yen piece, because Solar had told her that was the lucky one, and it had a hole in the middle, and she kept looking through it at the offering box and the rope and the bell, like she was taking aim." },
      { s: 'shadowheart', f: 'neutral', t: "Where I'm from, you don't ask a goddess for things. You give, and you give, and maybe she notices you. Usually she doesn't. If she does, it costs." },
      { s: 'shadowheart', f: 'serious', t: "I don't know how to ask for something I want. I never have. Not once. Not out loud." },
      { choose: [
        { t: "Then don't say it out loud. That's allowed too.", notes: 3, then: [
          { s: 'shadowheart', f: 'surprised', t: "...It is?" },
          { s: 'solar', t: "Most people don't. It's between you and them." },
          { n: "Shadowheart considered this the way she considered everything in this world, as if it might be a trap, and then, slowly, as if it might not be." }
        ] },
        { t: "(Go first. Show her.)", notes: 3, then: [
          { n: "Solar went first. Coin. The rope, rough and thick and cold, and the bell, louder than she remembered, a big flat clang that went out over the trees. Two bows. Two claps. She closed her eyes and asked for something and didn't let herself think about what until it was done." },
          { n: "When she opened her eyes Shadowheart was watching her, not the shrine, with the expression of someone memorizing a route." }
        ] },
        { t: "What would you ask for?", notes: 1, then: [
          { s: 'shadowheart', f: 'serious', t: "If I told you, it would be a different thing. It would be a request. Of you." },
          { n: "She said it like that settled the matter, and Solar, who didn't entirely follow, decided not to push." }
        ] }
      ] },
      { n: "Shadowheart threw the coin. It went in clean, dead center, with a sound like a small door closing. She took the rope in both hands and rang the bell once, loud, the way she'd rung it once before, in the dark, when she thought nobody could hear. Two bows. Two claps, sharp, a little too hard. Her eyes closed." },
      { n: "She stood there a long time. Longer than any salaryman, longer than anyone Solar had ever seen at that box, long enough that Kiriko stopped sweeping. The wind came through the cedars and the paper fortunes on the rack all moved together like they were breathing." },
      { n: "Then one bow, and she opened her eyes and turned around, and her face was very calm and a little pink, and she didn't look at Solar at all, which was how Solar knew." },
      { s: 'shadowheart', f: 'blushing', t: "Don't ask." },
      { choose: [
        { t: "I wasn't going to.", notes: 3, then: [
          { s: 'shadowheart', f: 'happy', t: "...Good. You'd only be smug about it." }
        ] },
        { t: "Was it about me?", notes: 2, then: [
          { s: 'shadowheart', f: 'blushing', t: "Sunshine. I said don't ask." },
          { n: "She didn't say no. Over by the foxes, Kiriko made a small noise like a kettle coming to the boil and swept very hard in the opposite direction." }
        ] }
      ] },
      { s: 'kiriko', f: 'happy', t: "Fortune! Everybody who prays gets one. Shrine rules. Today's rules." },
      { s: 'kiriko', f: 'neutral', t: "Kichi. Blessing. \"What is asked for freely is heard.\"" },
      { s: 'shadowheart', f: 'surprised', t: "...That's very specific." },
      { s: 'kiriko', f: 'happy', t: "They always are. People just don't notice until later." },
      { n: "Shadowheart didn't tie it to the rack. She folded it small and tucked it inside her glove, flat against her palm, where the wound used to be." }
    ] },
    { title: 'three strands', place: 'Naganaki Shrine · Dusk', music: 'tender', scene: [
      { n: "She'd worn it loose since November, and the wind at the shrine had opinions about that. By the end of every evening her hair was everywhere, across her face, in her tea, once memorably caught in the rope of the bell, and she endured all of it with the grim patience of a woman who had made a decision and was going to live with it if it killed her." },
      { n: "Tonight she was sitting on the top step with a comb in her lap, a cheap plastic one from the hundred-yen shop, turning it over and over, and when Solar sat down she held it out without looking at her." },
      { s: 'shadowheart', f: 'neutral', t: "Would you braid it. Not tight. Not the way they used to." },
      { s: 'shadowheart', f: 'serious', t: "They did it every morning at the temple. So tight you had a headache by noon. Not one hair out of place. A hair out of place meant your mind was out of place." },
      { n: "Solar took the comb. Shadowheart turned on the step and went very still, and Solar understood that the stillness was old and trained and had nothing to do with her, and started very gently anyway." },
      { n: "Her hair was heavy and cold from the wind and smelled of incense and cedar and, faintly, barley tea, and the silver streak at her temple slid through Solar's fingers like a different thing altogether, finer, like it had come from somewhere else. She combed it out slowly, from the ends up, the way you were supposed to, the way somebody must have done it for her once, before." },
      { choose: [
        { t: "(Braid it loose. Leave a few strands out on purpose.)", notes: 3, then: [
          { n: "She braided it loose, three strands, easy, nothing that pulled, and left some of the silver out on purpose, falling free by Shadowheart's face, and tied the end with the hair tie off her own wrist, which was pink and had a small plastic strawberry on it, which Shadowheart was going to find out about later." },
          { s: 'shadowheart', f: 'surprised', t: "...There's hair out. I can feel it." },
          { s: 'solar', t: "I know. I left it." },
          { n: "Shadowheart's hand went up to the loose strands, and touched them, and stayed there, and came down again. She didn't fix it." }
        ] },
        { t: "(Ask who braided it, before the temple.)", notes: 3, then: [
          { s: 'shadowheart', f: 'neutral', t: "...My mother." },
          { n: "She said it at once, and then went very still, as if she'd surprised herself." },
          { s: 'shadowheart', f: 'surprised', t: "I didn't know that. I didn't know it until you asked. She'd hum. Something about the moon. I can't remember the words. I can remember her humming it, right behind my head." },
          { n: "Solar kept braiding, slowly, saying nothing, because it seemed like the kind of memory you didn't want to startle, and after a while, very quietly and not quite in tune, Shadowheart started to hum." }
        ] }
      ] },
      { n: "When it was done she sat with her back to Solar a while longer, looking out at the city going blue in the dusk, the first lights coming on down by the bay." },
      { s: 'shadowheart', f: 'blushing', t: "No one's touched my hair since I was a child. Not kindly. I'd forgotten it could be kind." },
      { choose: [
        { t: "(Rest your chin on her shoulder.)", notes: 3, then: [
          { n: "Solar rested her chin on her shoulder from behind, and Shadowheart leaned back into her by a fraction, and then by more than a fraction, until they were sitting on the top step like one person with too many knees, watching the lanterns come on." }
        ] },
        { t: "I'll do it again tomorrow.", notes: 3, then: [
          { s: 'shadowheart', f: 'happy', t: "...Every day, then. Until..." },
          { n: "She didn't finish. She didn't need to. They both knew what came at the end of January, and they let the sentence stay where she'd left it, and watched the lanterns come on." }
        ] }
      ] },
      { n: "The braid was coming loose by the time Solar went down the steps. Shadowheart hadn't touched it. She stood at the top the way she had on the very first night, watching to make sure Solar got down safely, and the wind pulled the silver out across her face, and she let it." }
    ] }
  ],
  christmas: { place: 'Naganaki Shrine · Night', scene: [
    { n: "Kiriko had explained Christmas to Shadowheart at length, with diagrams, and Shadowheart had come away from the explanation believing it was a festival for couples involving a fat man, a chicken and a cake, in no particular order, and had announced that she would not be participating. Then, at four in the afternoon on the twenty-fourth, she'd texted." },
    { phone: [
      { from: 'shadowheart', t: 'Come up tonight.' },
      { from: 'shadowheart', t: "I've done something. Don't laugh." }
    ], contact: 'Shadowheart', handle: 'shadowheart', me: 'solar' },
    { n: "The shrine was dark when Solar reached the top of the steps, dark except for the moon behind thin cloud and the snow giving back what little light there was, and for a second she thought Shadowheart had changed her mind." },
    { n: "Then she saw the porch." },
    { n: "Shadowheart had hung lanterns. Every lantern from the shrine office, and a string of fairy lights Solar was fairly sure had come off a pillar in Paulownia Mall without anybody's permission, all of it along the eaves, unlit, and Shadowheart standing in front of it in her armor and a borrowed scarf of Kiriko's with a box of matches in her hand, looking like she'd been caught." },
    { s: 'shadowheart', f: 'blushing', t: "You're early. You're going to laugh." },
    { s: 'solar', t: "I'm not laughing." },
    { s: 'shadowheart', f: 'serious', t: "You're about to." },
    { n: "She lit them one by one. It took a long time, because the wind kept getting at the matches and she wouldn't let Solar help, and every time one caught she stood back and checked it with total seriousness, as if it might try something. She didn't know how to turn the fairy lights on. Solar found the switch. Shadowheart looked at it for a long moment, deeply betrayed by how simple it was." },
    { n: "Then it was done, and the porch glowed, gold and warm and uneven against the snow, and Shadowheart stood with her back to it and swallowed." },
    { s: 'shadowheart', f: 'neutral', t: "In my world we light lamps for Selûne on the long nights. So she can find her way back. Your festival is in the dark, in the middle of winter. So is mine. I thought I could do both." },
    { s: 'shadowheart', f: 'blushing', t: "Kiriko says yours is for people who are in love. I'm told I qualify." },
    { choose: [
      { t: "You qualify.", notes: 3, then: [
        { s: 'shadowheart', f: 'happy', t: "...Good. I'd have been very embarrassed about the lanterns otherwise." }
      ] },
      { t: "(Kiss her, under the stolen fairy lights.)", notes: 3, then: [
        { n: "Solar kissed her under the stolen fairy lights, quickly, her cold nose against Shadowheart's cheek, and pulled back to find her looking astonished and slightly offended, like someone who'd had a speech prepared and been robbed of it." },
        { s: 'shadowheart', f: 'blushing', t: "...I had more to say." },
        { s: 'solar', t: "Say it." },
        { s: 'shadowheart', f: 'blushing', t: "I've forgotten it. That's your fault." }
      ] }
    ] },
    { n: "They sat on the porch under the lanterns with the snow coming down past the eaves. Koromaru, who had come up the steps on his own as if he'd been invited, lay across both their feet and sighed. Shadowheart produced two convenience-store puddings from somewhere inside her armor, which explained a great deal about the armor." },
    { n: "Solar had brought her a present. She'd been thinking about it since a night on this porch, the two of them flat on their backs, counting to six in a sky the city had eaten." },
    { choose: [
      { t: "(Give her glow-in-the-dark stars, for the ceiling where she sleeps.)", notes: 3, then: [
        { n: "It was a packet of glow-in-the-dark stars from the stationery shop, the plastic kind children stick to their bedroom ceilings, a hundred and twenty of them and one small moon." },
        { s: 'shadowheart', f: 'surprised', t: "...These are stars." },
        { s: 'solar', t: "For the ceiling. So you've got more than six." },
        { n: "Shadowheart held the packet up to the lantern light and looked at it for so long that Solar started to worry, and then she set it down on the step very carefully, as if it might break, and put her hand over her mouth and kept it there." },
        { s: 'shadowheart', f: 'blushing', t: "...We're putting them up tonight. All of them. I don't care how long it takes." }
      ] },
      { t: "(Give her a hair tie with a little silver moon on it.)", notes: 3, then: [
        { n: "It was a plain black hair tie with a tiny silver moon on it, from the accessories stall by the station. It had cost almost nothing. She had looked at forty of them." },
        { s: 'shadowheart', f: 'blushing', t: "...For when the wind gets it." },
        { s: 'solar', t: "For when the wind gets it." },
        { n: "Shadowheart pulled her hair over one shoulder and handed Solar the tie and turned on the step and waited, very still, and it was a different stillness from any Solar had seen in her, softer, not trained at all." }
      ] }
    ] },
    { n: "Then Shadowheart took something out of her glove." },
    { n: "It was the handkerchief. Solar's, from September, from the storm under the eaves, the one she'd wrapped around a bleeding palm the way Angela had shown her and never got back. It had been washed, many times by the look of it, by hand, in cold water. And in one corner, in silver thread, someone had sewn a small and very lopsided sun, and overlapping it, a smaller and even more lopsided moon." },
    { s: 'shadowheart', f: 'blushing', t: "I don't know how to sew. Kiriko showed me. I bled on it twice. Not the old way. Just the needle. It was rather nice, actually, bleeding for something stupid." },
    { s: 'shadowheart', f: 'neutral', t: "It was the first thing anyone ever gave me that wasn't an order. I kept it because I couldn't stand to give it back. Now I want you to have it. Because I'm going, and I want you to have something I kept." },
    { n: "Solar held it. The silver thread caught the lantern light. The stitches were huge and uneven, pulled tight in some places and loose in others, the stitches of someone who'd been taught to do everything precisely or else and had decided, just this once, not to." },
    { choose: [
      { t: "It's perfect.", notes: 3, then: [
        { s: 'shadowheart', f: 'happy', t: "Nothing's perfect, Sunshine. ...It's good, though. Isn't it. It's good." }
      ] },
      { t: "(Fold it and put it inside your coat, over your heart.)", notes: 3, then: [
        { n: "She folded it in half and in half again and put it in the inside pocket of her coat, on the left, flat, and kept her hand over it, and Shadowheart watched her do it with an expression she very clearly didn't know she was making." }
      ] }
    ] },
    { n: "Down in the city, bells started ringing in Port Island, faint across the water. Shadowheart tipped her head back against the pillar and looked up past the lanterns at the sky, which was full of cloud and snow and not one single star." },
    { s: 'shadowheart', f: 'happy', t: "Zero. Your city is a disgrace." },
    { s: 'solar', t: "You're not even counting." },
    { s: 'shadowheart', f: 'blushing', t: "No. I've got the sun right here. I can manage without the rest." },
    { n: "She'd claim afterward that she had meant it as a joke. She went very pink when she claimed it, though, and she didn't let go of Solar's hand until the last lantern guttered out somewhere after midnight, with the snow still falling and the dog asleep on their feet." }
  ] },
  romance: true,
  cast: { astarion: 'Astarion', kiriko: 'Kiriko' },
  threads: { elizabeth: { name: 'Elizabeth', members: ['elizabeth'] } },
  texts: [
    { id: 'eliz-8-6', thread: 'elizabeth', rank: 0, before: 99, days: 0, date: '8/6', slot: 1, msgs: [
      { from: 'elizabeth', t: 'Another full moon, another handful of guests.' },
      { from: 'elizabeth', t: 'One of them is a priestess who does not trust me. I find that very sensible of her.' },
      { from: 'elizabeth', t: 'She has taken up residence at the shrine after dark. The fox girl has been very gracious about it.' },
      { from: 'elizabeth', t: 'And a prince has fallen asleep at the end of the Port Island pier. He appears to be fishing. I have not been able to confirm that he is awake.' }
    ] },
    { id: 'sh-1a', rank: 1, days: 1, slot: 1, msgs: [
      { from: 'shadowheart', t: "I don't know how to use this. The fox girl gave it to me and said 'text Sol-chan.'" },
      { from: 'shadowheart', t: 'This is me, texting. Are you satisfied.' }
    ], reply: [
      { t: 'Very satisfied, Shadowheart.', notes: 3, then: [{ from: 'shadowheart', t: 'Good. Never mention it again.' }] },
      { t: 'You figured it out!', notes: 2, then: [{ from: 'shadowheart', t: "Don't sound so surprised, Sunshine." }] }
    ] },
    { id: 'sh-3a', rank: 3, days: 1, slot: 1, msgs: [
      { from: 'shadowheart', t: 'My hand is fine. Stop worrying.' },
      { from: 'shadowheart', t: 'I can feel you worrying from here.' }
    ], reply: [
      { t: 'I can feel you lying from here.', notes: 3, then: [{ from: 'shadowheart', t: '...Infuriating. It hurts. Happy?' }] },
      { t: "I'll bring bandages tomorrow.", notes: 2, then: [{ from: 'shadowheart', t: "They won't help. Bring them anyway." }] }
    ] },
    { id: 'sh-5a', rank: 5, days: 1, slot: 1, msgs: [
      { from: 'shadowheart', t: 'The vampire says I have "the fashion sense of a disappointed crow."' },
      { from: 'shadowheart', t: 'I said he has the personality of a perfume sample. I believe I won.' }
    ], reply: [
      { t: 'You definitely won.', notes: 3, then: [{ from: 'shadowheart', t: 'I know. I just wanted to hear it.' }] },
      { t: 'You two are going to be friends.', notes: 2, then: [{ from: 'shadowheart', t: 'Bite your tongue, Sunshine.' }] }
    ] },
    { id: 'sh-7a', rank: 7, days: 1, slot: 1, msgs: [
      { from: 'shadowheart', t: 'My hand stopped hurting.' },
      { from: 'shadowheart', t: 'For the first time I can remember. It just stopped.' }
    ], reply: [
      { t: "Because you chose for yourself.", notes: 3, then: [{ from: 'shadowheart', t: '...Yes. I think so.' }] },
      { t: "How does it feel?", notes: 3, then: [{ from: 'shadowheart', t: 'Strange. Light. Like taking off armor I forgot I was wearing.' }] }
    ] },
    { id: 'sh-9r', rank: 9, route: 'romance', days: 1, slot: 1, msgs: [
      { from: 'shadowheart', t: 'I keep looking at the moon and thinking of you.' },
      { from: 'shadowheart', t: 'Which is ironic, given your name.' }
    ], reply: [
      { t: "Sun and moon. We'll make it work.", notes: 3, then: [{ from: 'shadowheart', t: '...We will. Goodnight, Sunshine.' }] },
      { t: 'I think of you at night too.', notes: 3, then: [{ from: 'shadowheart', t: 'Good. That seems fair.' }] }
    ] },
    { id: 'sh-9f', rank: 9, route: 'friend', days: 1, slot: 1, msgs: [
      { from: 'shadowheart', t: "I've never had a friend I didn't have to lie to." },
      { from: 'shadowheart', t: "It's very strange. I think I like it." }
    ], reply: [
      { t: 'Get used to it.', notes: 3, then: [{ from: 'shadowheart', t: "I'm trying. Be patient with me." }] },
      { t: "Me too.", notes: 3, then: [{ from: 'shadowheart', t: 'Two terrible liars. Telling the truth. Imagine.' }] }
    ] }
  ],
  ranks: [
    { after: '8/7', title: '1: night orchid', place: 'Naganaki Shrine · Night', scene: [
      { n: "Kiriko had texted, a little ominously: there's a lady at the shrine at night now. she's scary. she's nice to the dog though. come meet her?? Solar went after dinner, up the hundred and twelve steps in the warm dark, with the cicadas going and the city glowing below." },
      { n: "The shrine at night was a different place. The lanterns were lit. The fox statues looked like they were listening. And on the porch, in the deep shadow under the eaves, a woman sat with her back against a pillar and a strange dark object cradled in her lap, watching the steps." },
      { n: "Dark hair pulled back tight, a long braid over one shoulder. A silver circlet. Armor, light and dark and practical. Green eyes that were already narrowed when Solar reached the top step, like she'd been suspicious of her before she arrived." },
      { s: 'shadowheart', f: 'serious', t: "Another one. Wonderful. Do you also want to tell me about fortunes and foxes?" },
      { choose: [
        { t: "Kiriko sent me. She was worried about you.", notes: 3, then: [
          { s: 'shadowheart', f: 'neutral', t: "...She's very persistent for someone half my size." },
          { n: "It was not quite a complaint. It was close to a compliment, delivered by someone who'd forgotten how." }
        ] },
        { t: "What is that you're holding?", notes: 2, then: [
          { s: 'shadowheart', f: 'serious', t: "None of your business." },
          { n: "Her arms tightened around it. A smooth, dark stone thing, shaped almost like a seed or a shell, humming very faintly in the night air." }
        ] },
        { t: "(Sit down on the step, not too close.)", notes: 3, then: [
          { n: "Solar sat on the top step, a careful distance away, and looked out at the city instead of at her. After a long minute, she felt the woman relax, very slightly, like an animal deciding you were not, at this moment, a threat." }
        ] }
      ] },
      { s: 'shadowheart', f: 'neutral', t: "Shadowheart. That's what they call me. Before you ask, yes, it's a real name. No, I won't explain it." },
      { s: 'shadowheart', f: 'neutral', t: "I woke up in this shrine during that awful green hour, holding this, with no idea how I got here. Which is, I'm told, more or less how everyone gets here." },
      { n: "Koromaru trotted out from behind the offering box and pressed himself against Shadowheart's leg without hesitation. Her free hand went to his head automatically, gently. Her expression did not change at all. But her hand stayed." },
      { s: 'shadowheart', f: 'serious', t: "Don't look at me like that. Dogs are better than people. Everyone knows that." },
      { choose: [
        { t: "Agreed.", notes: 3, then: [{ s: 'shadowheart', f: 'happy', t: "...Finally. Someone with sense." }] },
        { t: "He likes you.", notes: 2, then: [{ s: 'shadowheart', f: 'neutral', t: "He has poor judgment. It's charming." }] }
      ] },
      { n: "Solar left an hour later. Shadowheart didn't say goodbye. But when Solar reached the bottom of the steps and looked back, the woman was standing at the top, a dark shape against the lanterns, watching to make sure she got down safely." }
    ] },

    { after: '8/21', title: '2: what she can\'t remember', music: 'mystery', place: 'Naganaki Shrine · Night', scene: [
      { n: "It was too hot to sleep, and so Solar had started going up to the shrine on weeknights, and Shadowheart had started, without discussion, being there." },
      { n: "Tonight she was sitting on the edge of the porch with her boots off and her feet in the stone water basin, which Solar was fairly sure was a sacrilege in at least two religions, and staring up at the sky." },
      { s: 'shadowheart', f: 'neutral', t: "Sunshine. That's what I'm calling you, by the way. Your name is Solar. I'm a cleric of the Lady of Loss and Darkness. It's funny." },
      { choose: [
        { t: "It's a little funny.", notes: 3, then: [{ s: 'shadowheart', f: 'happy', t: "It's very funny. You just don't have my sense of humor." }] },
        { t: "Lady of Loss?", notes: 2, then: [{ s: 'shadowheart', f: 'neutral', t: "Shar. My goddess. You wouldn't like her. Most people don't." }] }
      ] },
      { s: 'shadowheart', f: 'serious', t: "Do you want to know something absurd? I don't remember most of my life." },
      { s: 'shadowheart', f: 'neutral', t: "My goddess took it. I think. As a gift, or a test, or a punishment. I remember my training. I remember my mission. I remember being told to protect this." },
      { n: "She touched the dark stone object, which sat beside her on the porch, humming." },
      { s: 'shadowheart', f: 'neutral', t: "Everything else is a gap. Like a book with pages torn out. I'll be reaching for a memory and there's just... nothing. A smooth place." },
      { n: "Solar knew something about gaps. About smooth places you didn't reach into. About pages you'd torn out of yourself and stopped looking for." },
      { choose: [
        { t: "Doesn't that frighten you?", notes: 2, then: [{ s: 'shadowheart', f: 'serious', t: "Every single day. But I'm not allowed to be frightened. I'm allowed to be faithful." }] },
        { t: "Sometimes I'd like to forget things.", notes: 3, then: [
          { s: 'shadowheart', f: 'surprised', t: '...' },
          { s: 'shadowheart', f: 'neutral', t: "Don't. Trust me. Even the bad pages are yours. I'd give anything for mine back." }
        ] }
      ] },
      { n: "She took her feet out of the basin and dried them on her cloak and said, \"Goodnight, Sunshine,\" and went inside the shrine, where she apparently slept, which Solar was sure was also a sacrilege." }
    ] },

    { after: '9/4', title: '3: the wound', place: 'Naganaki Shrine · Night', scene: [
      { n: "September came in on a storm. Solar went up to the shrine anyway, in a raincoat, worried, and found Shadowheart under the porch eaves holding Koromaru, who was wet and shivering and had cut his paw on something in the gravel." },
      { n: "She was healing him. Solar saw the light, a cold silvery glow in her palm, pressed gently against the dog's foot." },
      { n: "And then she saw Shadowheart's face twist. The healing hand jerked back. She clutched it to her chest, and a dark mark on her palm, a wound Solar had never noticed, was suddenly bleeding through her glove." },
      { s: 'shadowheart', f: 'serious', t: "It's fine. It does that. Leave it." },
      { choose: [
        { t: "It is not fine. Let me see.", notes: 3, then: [
          { s: 'shadowheart', f: 'serious', t: '...' },
          { n: "She glared. And then, slowly, she held out her hand. The wound was old. A dark, angry mark in the center of her palm, like something had been pressed into it and burned. Solar wrapped it in the handkerchief from her pocket, carefully, the way Angela had shown her." }
        ] },
        { t: "Does it happen every time you heal?", notes: 2, then: [{ s: 'shadowheart', f: 'neutral', t: "Not every time. When I'm kind, mostly. When I do something my goddess wouldn't approve of." }] }
      ] },
      { s: 'shadowheart', f: 'neutral', t: "It's a punishment. Or a reminder. When I'm too soft. My Lady doesn't approve of softness." },
      { n: "Koromaru, healed, licked her face. She didn't push him away. Her hand was bleeding through the handkerchief and she was letting a dog lick her face in the rain." },
      { s: 'koromaru', f: 'happy', t: "Arf!" },
      { choose: [
        { t: "Then your Lady's wrong about you.", notes: 3, then: [
          { s: 'shadowheart', f: 'surprised', t: "...You can't say that." },
          { s: 'shadowheart', f: 'neutral', t: "...But thank you for saying it. Nobody ever has." }
        ] },
        { t: "You healed him anyway.", notes: 3, then: [{ s: 'shadowheart', f: 'neutral', t: "Of course I did. Look at him. What was I supposed to do, let him limp?" }] }
      ] },
      { n: "They sat under the eaves until the storm passed. Shadowheart's hand stopped bleeding around midnight. She didn't give the handkerchief back." }
    ] },

    { after: '9/18', title: '4: the moon', place: 'Naganaki Shrine · Night', scene: [
      { n: "The moon was getting full. Everyone at the dorm knew what that meant, and so did Shadowheart, apparently, because when Solar came up the steps she was standing in the middle of the courtyard with her head tipped back, staring at it like it had said her name." },
      { s: 'shadowheart', f: 'neutral', t: "...It's beautiful. Isn't it." },
      { n: "She said it softly, almost guiltily, the way you'd admit to something you'd been told was forbidden." },
      { s: 'shadowheart', f: 'serious', t: "I'm not supposed to love it. My goddess is the dark. The moon belongs to her sister. Her enemy. Selûne." },
      { s: 'shadowheart', f: 'neutral', t: "But every time it's full, I feel something. Like a door somewhere inside me that I'm not allowed to open." },
      { choose: [
        { t: "Maybe you should open it.", notes: 3, then: [{ s: 'shadowheart', f: 'serious', t: "...You don't understand what you're asking. If I'm wrong, I lose everything. Everything I am." }] },
        { t: "You're allowed to think it's beautiful.", notes: 3, then: [
          { s: 'shadowheart', f: 'surprised', t: '...Am I?' },
          { n: "Solar nodded. Shadowheart looked at her, then back up at the moon, and her face did something complicated and quiet, like a lock turning very slightly." }
        ] }
      ] },
      { n: "They stood in the courtyard and looked at the moon together. After a while, Shadowheart reached over without looking and took Solar's hand. The wounded one. Wrapped in Solar's handkerchief, still." },
      { s: 'shadowheart', f: 'neutral', t: "Don't make anything of that. My hand is cold." },
      { n: "It wasn't cold. Neither of them mentioned it." }
    ] },

    { after: '10/2', title: '5: roast', place: 'Naganaki Shrine · Dusk', scene: [
      { n: "Dusk at the shrine was the changing of the guard. Kiriko, sweeping the last of the leaves, handing over the broom and the dog and a bag of rice balls to Shadowheart as the lanterns came on, with a little bow and a cheerful, \"Night shift!\"" },
      { n: "Tonight there was an extra guest. Astarion, in his long burgundy coat, leaning against the torii gate like he owned it, watching Shadowheart's arrival with an expression of tremendous, malicious delight." },
      { s: 'astarion', f: 'happy', t: "Well, well. The priestess of gloom. Fancy seeing you in a world with less dirt." },
      { s: 'shadowheart', f: 'serious', t: "Astarion. I hoped you'd stay lost." },
      { n: "Kiriko, halfway down the steps, turned around, sat down on the stairs, and settled in to watch with the expression of someone who'd just found the best show on television." },
      { s: 'astarion', f: 'happy', t: "Still dressing like a disappointed crow, I see." },
      { s: 'shadowheart', f: 'serious', t: "Still with the personality of a perfume sample, I see." },
      { choose: [
        { t: "Ooh. Point to Shadowheart.", notes: 3, then: [
          { s: 'astarion', f: 'serious', t: "Excuse me? Darling, you're supposed to be on MY side." },
          { s: 'shadowheart', f: 'happy', t: "She has taste. Unlike you." }
        ] },
        { t: "Do you two know each other?", notes: 2, then: [{ s: 'shadowheart', f: 'neutral', t: "Unfortunately. We traveled together. For far too long." }] }
      ] },
      { n: "It went on for an hour. Hairstyles. Fighting styles. Questionable life choices. Kiriko kept score on her fingers and declared it a draw, and both of them were outraged by this." },
      { n: "When Astarion finally left, with a flourish of his coat, Shadowheart stood watching him go with an odd look on her face." },
      { s: 'shadowheart', f: 'neutral', t: "...Don't tell him I was glad to see him." },
      { choose: [
        { t: "He said the exact same thing about Karlach.", notes: 3, then: [{ s: 'shadowheart', f: 'happy', t: "Of course he did. We're all terrible at this. Every single one of us." }] },
        { t: "Your secret's safe.", notes: 2, then: [{ s: 'shadowheart', f: 'neutral', t: "Good. I have a reputation to maintain. For gloom." }] }
      ] }
    ] },

    { after: '10/16', title: '6: her parents', music: 'tender', place: 'Naganaki Shrine · Night', scene: [
      { n: "She'd remembered something. Solar could see it as soon as she reached the top of the steps. Shadowheart was sitting very still on the porch with the artifact in her lap and her eyes wide open, like she'd just woken from a dream and the dream had followed her." },
      { s: 'shadowheart', f: 'neutral', t: "My parents. I remembered my parents." },
      { s: 'shadowheart', f: 'neutral', t: "A house. A garden. My mother laughing at something my father said. A wolf, a silly old wolf, they kept as a pet. Night orchids in the garden, white ones." },
      { s: 'shadowheart', f: 'serious', t: "And then the Sharrans came. And took me. And told me they'd abandoned me. And I believed them. For twenty years I believed them." },
      { n: "She said it all at once, like it would leave if she didn't get it out fast enough." },
      { choose: [
        { t: "(Sit beside her and hold her hand.)", notes: 3, then: [{ n: "Solar sat beside her and took her hand, the wounded one. Shadowheart held on so hard it hurt, and stared at the dark trees, and didn't cry, and didn't let go." }] },
        { t: "They didn't abandon you.", notes: 3, then: [{ s: 'shadowheart', f: 'serious', t: "No. They didn't. They were stolen from me. And I spent my whole life serving the ones who did it." }] }
      ] },
      { s: 'shadowheart', f: 'neutral', t: "Night orchids. I always loved them. I never knew why." },
      { n: "The next week, Solar found a florist in Paulownia that could order white orchids. They were expensive. She bought one anyway, in a pot, and left it on the shrine porch without a note. When she came back the next night, it was sitting by Shadowheart's bedroll, carefully watered, turned so it faced the moon." }
    ] },

    { after: '10/30', title: '7: nightsong', place: 'Naganaki Shrine · The Dark Hour', scene: [
      { n: "The green hour, and the shadow that came up the shrine steps wore a woman's face." },
      { n: "Silver-white hair. A glow around her like the moon. A sword, and a gentle, sad expression. Shadowheart went rigid the second she saw it." },
      { s: 'shadowheart', f: 'surprised', t: "...Nightsong." },
      { s: 'shadowheart', f: 'serious', t: "My Lady wanted me to find her. To kill her. That was my whole mission. Everything I am was built for this." },
      { n: "The shadow stood in the courtyard, glowing, not attacking. Just waiting. Like it was a question. Shadowheart's spear was in her hand. Her knuckles were white around it. The artifact on the porch was humming so loud Solar could feel it in her teeth." },
      { n: "And Shadowheart's wounded hand was bleeding. Pouring, through the bandage. Like her goddess was screaming at her through it." },
      { choose: [
        { t: "It's your choice. Not your goddess's.", notes: 3, then: [
          { s: 'shadowheart', f: 'serious', t: '...My choice.' },
          { n: "She said it like a word she'd never been allowed to use." }
        ] },
        { t: "(Stand beside her, not in front of her.)", notes: 3, then: [
          { n: "Solar stood beside her. Not in her way. Not making the decision. Just there, so she wasn't alone in it." }
        ] }
      ] },
      { n: "Shadowheart lowered the spear. Slowly. Like it weighed a thousand years." },
      { s: 'shadowheart', f: 'serious', t: "No. I won't." },
      { n: "The shadow with the moon's face smiled at her, sadly, and turned to light and smoke and was gone. And the wound in Shadowheart's palm, which had been bleeding for twenty years, stopped. Just stopped. Like a door shutting quietly in another room." },
      { n: "She looked at her hand. She looked at Solar. She sat down hard on the gravel and laughed, shaking, crying, in the green light, and Solar knelt and held her until the hour ended." }
    ] },

    { after: '11/13', title: '8: unbraided', music: 'tender', place: 'Naganaki Shrine · Night', scene: [
      { n: "Solar almost didn't recognize her." },
      { n: "Shadowheart was standing at the top of the steps in the lantern light with her hair down. Not braided. Not pulled back. Loose around her shoulders, dark, with a single streak of silver at the temple that hadn't been there before, like moonlight caught in it." },
      { s: 'shadowheart', f: 'neutral', t: "...Don't stare. It's rude." },
      { choose: [
        { t: "You look like yourself.", notes: 3, then: [
          { s: 'shadowheart', f: 'blushing', t: "...I don't know who that is yet." },
          { s: 'shadowheart', f: 'happy', t: "But I'd like to find out." }
        ] },
        { t: "The silver suits you.", notes: 3, then: [{ s: 'shadowheart', f: 'blushing', t: "It appeared overnight. I think the moon is trying to tell me something. It's very unsubtle." }] }
      ] },
      { s: 'shadowheart', f: 'neutral', t: "I threw the artifact in the river. This morning. I just walked to the bridge and dropped it." },
      { s: 'shadowheart', f: 'happy', t: "It felt wonderful. I've never done anything that felt so good in my life." },
      { n: "She laughed, and it was a different laugh than Solar had ever heard from her. Light. Free. Like something let out of a box." },
      { s: 'shadowheart', f: 'happy', t: "I don't know what I'm going to be now, Sunshine. Not a Sharran. Maybe not anything. Maybe just me." },
      { n: "They sat on the porch with the orchid between them, blooming now, white and strange and beautiful in the lamplight. Shadowheart kept touching the silver streak in her hair, like she was checking it was still there." }
    ] },

    { after: '11/27', title: '9: sun and moon', place: 'Naganaki Shrine · Night', scene: [
      { n: "Late November. Cold. The shrine was quiet and dark except for one lantern and the moon, nearly full, over the trees." },
      { n: "Shadowheart had brought a blanket and two cups of tea and the orchid, and she sat on the top step with Solar and didn't say anything for a long while, which Solar had learned meant she was gathering her nerve." },
      { s: 'shadowheart', f: 'neutral', t: "When the year ends, the green hour goes away. And we all go home. Elizabeth told me." },
      { s: 'shadowheart', f: 'serious', t: "I've spent my whole life not choosing. Letting a goddess choose for me. I'm not doing that anymore. So I'm going to ask, and I want the truth." },
      { s: 'shadowheart', f: 'blushing', t: "What are we, Sunshine? Sun and moon. What is this?" },
      { route: [
        { t: "I love you. Sun and moon, and all of it.", route: 'romance', notes: 3, then: [
          { s: 'shadowheart', f: 'surprised', t: '...' },
          { s: 'shadowheart', f: 'blushing', t: "...Good. Gods. Good. I was so afraid you'd say something kind instead." },
          { n: "She kissed her on the cold steps, under the almost-full moon, and her hand, the one that used to bleed, was warm against Solar's face." }
        ] },
        { t: "You're my closest friend. In any world.", route: 'friend', notes: 3, then: [
          { s: 'shadowheart', f: 'happy', t: "...A friend. A real one. The kind I don't have to lie to." },
          { s: 'shadowheart', f: 'happy', t: "I didn't think I'd ever have one of those. Thank you, Sunshine." },
          { n: "She leaned against Solar's shoulder, and they finished their tea in the cold, and watched the moon until it went behind the trees." }
        ] }
      ] }
    ] },

    { after: '12/11', title: '10: under the moon', place: 'Naganaki Shrine · Night', scene: [
      { n: "December. A full moon, enormous and white, and the shrine covered in a thin layer of new snow that made everything glow. Shadowheart was waiting in the courtyard in her armor, her hair down, the silver streak bright as frost." },
      { s: 'shadowheart', f: 'neutral', t: "In my world there's a dance. For the moon. Selûne's people do it on nights like this." },
      { s: 'shadowheart', f: 'blushing', t: "I've never danced in my life. I'd like to start. With you." },
      { ifRoute: 'friend', then: [
        { choose: [
          { t: "I'm a terrible dancer.", notes: 3, then: [{ s: 'shadowheart', f: 'happy', t: "Perfect. So am I. We'll be terrible together. That's the whole point." }] },
          { t: "(Take her hands.)", notes: 3, then: [{ s: 'shadowheart', f: 'happy', t: "...There. See. You're already better than me." }] }
        ] },
        { n: "They danced in the snow in the shrine courtyard, badly, laughing, slipping, Koromaru running circles around them barking, until they were both breathless and soaked and the moon had moved halfway across the sky." },
        { s: 'shadowheart', f: 'happy', t: "When I go home, I'll dance this every full moon. And I'll think of you, Sunshine. Every single one." }
      ] },
      { ifRoute: 'romance', then: [
        { s: 'shadowheart', f: 'blushing', t: "I spent my whole life in the dark. Then I met a girl named after the sun. The gods have a terrible sense of humor." },
        { choose: [
          { t: "(Take her hands and dance.)", notes: 3, then: [
            { n: "They danced in the snow, slowly, badly, close, in the light of the full moon. Shadowheart's forehead came to rest against Solar's halfway through, and they stopped dancing, and just stood there, swaying." },
            { s: 'shadowheart', f: 'blushing', t: "...Sun and moon. It works, doesn't it. Somehow." }
          ] },
          { t: "(Kiss her.)", notes: 3, then: [
            { s: 'shadowheart', f: 'surprised', t: '...!' },
            { s: 'shadowheart', f: 'blushing', t: "...That's not how the dance goes. I'm not complaining." }
          ] }
        ] },
        { n: "The snow kept falling. The moon kept shining. And on the shrine porch, in a pot turned toward the light, a white night orchid bloomed out of season, for no reason anyone could explain." }
      ] }
    ] }
  ]
});
