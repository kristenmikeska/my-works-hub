/* Ann Takamaki · VI The Lovers. Arrives on the 5/9 full moon and goes home at the end of October (her link closes 11/3).
   Format notes are at the top of akihiko.js. */
FemcSocial.define({
  id: 'ann', name: 'Ann Takamaki', short: 'Ann', arcana: 'Lovers', numeral: 'VI', from: 'Persona 5',
  arrives: '5/9',
  closes: '11/3',
  home: { place: 'Paulownia Mall', slot: 0, days: [1, 3, 5, 6], hint: 'After school on Mondays, Wednesdays, Fridays and Saturdays, somewhere in Paulownia Mall.' },
  romance: true,
  cast: { ryuji: 'Ryuji', shiho: 'Shiho', futaba: 'Futaba', makoto: 'Makoto', mitsuru: 'Mitsuru' },
  threads: {
    elizabeth: { name: 'Elizabeth', members: ['elizabeth'] },
    thieves: { name: 'phantom thieves (temp)', members: ['ann', 'futaba'] }
  },
  texts: [
    { id: 'eliz-5-9', thread: 'elizabeth', rank: 0, before: 99, days: 0, date: '5/9', slot: 1, msgs: [
      { from: 'elizabeth', t: 'Good evening, Solar. The moon is full tonight.' },
      { from: 'elizabeth', t: 'Someone new has slipped through into your city. A girl dressed in red, and very far from home.' },
      { from: 'elizabeth', t: 'She will not stay lost for long, I think. Not with you nearby.' }
    ] },
    { id: 'ann-2a', rank: 2, days: 1, slot: 1, msgs: [
      { from: 'ann', t: 'sunflare!!!' },
      { from: 'ann', t: 'ok so i found ANOTHER crepe place' },
      { from: 'ann', t: "it's by the station and it has a matcha one 😭" }
    ], reply: [
      { t: 'We are going tomorrow.', notes: 3, then: [{ from: 'ann', t: 'YES' }, { from: 'ann', t: 'this is why ur my favorite' }] },
      { t: 'How many crepes is that this week?', notes: 2, then: [{ from: 'ann', t: "we don't count crepes" }, { from: 'ann', t: "counting crepes is how they win" }] }
    ] },
    { id: 'ann-3a', rank: 3, days: 1, slot: 1, msgs: [
      { from: 'ann', t: 'hey' },
      { from: 'ann', t: 'sorry about today' },
      { from: 'ann', t: "i don't usually snap like that" }
    ], reply: [
      { t: 'He deserved it.', notes: 3, then: [{ from: 'ann', t: '...yeah' }, { from: 'ann', t: 'he really did' }, { from: 'ann', t: 'thanks sunflare' }] },
      { t: "You don't have to apologize to me.", notes: 3, then: [{ from: 'ann', t: 'ok' }, { from: 'ann', t: 'ok 🥺' }] }
    ] },
    { id: 'ann-4a', rank: 4, days: 1, slot: 0, msgs: [
      { from: 'ann', t: "he's gone" },
      { from: 'ann', t: 'ryuji' },
      { from: 'ann', t: 'i woke up and he was just. gone' }
    ], reply: [
      { t: "I'm coming over. Where are you?", notes: 3, then: [{ from: 'ann', t: 'the hotel lobby' }, { from: 'ann', t: 'bring crepes' }, { from: 'ann', t: "jk. just come" }] },
      { t: "He went home, Ann. That's good.", notes: 2, then: [{ from: 'ann', t: 'i know' }, { from: 'ann', t: 'i know it is' }] }
    ] },
    { id: 'ann-5a', rank: 5, days: 2, slot: 1, msgs: [
      { from: 'ann', t: "i've never told anyone that much about shiho" },
      { from: 'ann', t: 'not even the guys' },
      { from: 'ann', t: 'weird that it was easy with you' }
    ], reply: [
      { t: "It's not weird.", notes: 3, then: [{ from: 'ann', t: 'ok it\'s a little weird' }, { from: 'ann', t: 'good weird' }] },
      { t: 'Thank you for telling me.', notes: 3, then: [{ from: 'ann', t: '💛' }] }
    ] },
    { id: 'thieves-6', thread: 'thieves', rank: 6, days: 1, msgs: [
      { sys: 'futaba created "phantom thieves (temp)"' },
      { from: 'futaba', t: 'ok it works' },
      { from: 'futaba', t: 'hi solar. this is futaba. i am in your phone now' },
      { from: 'ann', t: 'FUTABA' },
      { from: 'futaba', t: 'signal from your world is SO weird btw. like trying to wifi through a lasagna' },
      { from: 'ann', t: 'can you get me home' },
      { from: 'futaba', t: 'working on it. give me time. and snacks. mostly time' }
    ], reply: [
      { t: 'Hi, Futaba. Please get out of my phone.', then: [{ from: 'futaba', t: 'no' }, { from: 'futaba', t: 'ur group chat with the cup ramen guy is very funny though' }] },
      { t: "Welcome to Iwatodai. Sort of.", then: [{ from: 'futaba', t: 'thank u. 3/10 so far. needs more curry' }] }
    ] },
    { id: 'ann-7a', rank: 7, days: 1, slot: 1, msgs: [
      { from: 'ann', t: 'makoto and mitsuru-san exchanged numbers' },
      { from: 'ann', t: 'before makoto faded' },
      { from: 'ann', t: "i'm a little scared of what they'll do with them" }
    ], reply: [
      { t: 'Run the world, probably.', notes: 3, then: [{ from: 'ann', t: 'LOL' }, { from: 'ann', t: 'we would all be so well organized' }] },
      { t: 'Can they even text between worlds?', notes: 2, then: [{ from: 'ann', t: 'futaba says no' }, { from: 'ann', t: 'futaba also says "not yet"' }] }
    ] },
    { id: 'ann-8a', rank: 8, days: 1, slot: 1, msgs: [
      { from: 'ann', t: 'can i say something dumb' },
      { from: 'ann', t: "part of me hopes futaba doesn't figure it out too fast" }
    ], reply: [
      { t: "That's not dumb.", notes: 3, then: [{ from: 'ann', t: '...ok' }, { from: 'ann', t: 'goodnight sunflare' }] },
      { t: 'Part of me hopes that too.', notes: 3, then: [{ from: 'ann', t: '😳' }, { from: 'ann', t: 'ok goodnight' }, { from: 'ann', t: 'GOODNIGHT' }] }
    ] },
    { id: 'ann-9r', rank: 9, route: 'romance', days: 1, slot: 1, msgs: [
      { from: 'ann', t: 'i keep smiling at my phone' },
      { from: 'ann', t: 'like an idiot' },
      { from: 'ann', t: 'this is ur fault' }
    ], reply: [
      { t: "I'm doing the same thing.", notes: 3, then: [{ from: 'ann', t: 'GOOD' }, { from: 'ann', t: 'suffer with me' }] },
      { t: 'Worth it.', notes: 3, then: [{ from: 'ann', t: '💗' }] }
    ] },
    { id: 'ann-9f', rank: 9, route: 'friend', days: 1, slot: 1, msgs: [
      { from: 'ann', t: 'best friend sleepover. this weekend. non negotiable' },
      { from: 'ann', t: 'i bought face masks' }
    ], reply: [
      { t: "I'll bring the crepes.", notes: 3, then: [{ from: 'ann', t: 'this is why ur my best friend' }] },
      { t: 'Non-negotiable accepted.', notes: 3, then: [{ from: 'ann', t: 'phantom thief best friends 🫶' }] }
    ] }
  ],
  ranks: [
    { after: '5/11', title: '1: panther', place: 'Paulownia Mall · Fountain', scene: [
      { n: "Two nights ago, during the hour that didn't exist, Solar had seen a girl in red on the roof of the monorail station." },
      { n: "She'd only seen her for a second. A figure in a glossy red suit with a whip in one hand, cracking it at something black and shapeless that came apart under the green moon like smoke, and then she was gone, and the rest of the night had been too loud and too frightening for Solar to think about it again until now." },
      { n: "Now was a Monday afternoon at Paulownia Mall, and the girl was sitting on the edge of the fountain in a school uniform Solar had never seen before, a dark blazer over a white hoodie, red tights, blonde hair up in two pigtails, staring at her phone like it had betrayed her." },
      { n: "People walked past her. Some of them looked. She was the kind of pretty people looked at twice, the second time to check if they'd seen right. She didn't notice any of them. She was holding the phone up at different angles, the way you do when you're trying to get a signal from somewhere that doesn't have one." },
      { n: "Solar should have kept walking. She had a whole philosophy about keeping walking. She stopped anyway." },
      { s: 'ann', f: 'surprised', t: "...Wait. Wait, you!" },
      { n: "The girl was on her feet before Solar could decide to leave, phone clutched in both hands, eyes wide and very blue." },
      { s: 'ann', f: 'serious', t: "You were there. The other night. The green night. You were on the bridge with the others. I saw you." },
      { choose: [
        { t: "And you were on the roof. With a whip.", notes: 3, then: [
          { s: 'ann', f: 'flustered', t: "Okay, yes, but in my defense, that thing was HUGE." },
          { n: "She said it so earnestly that Solar almost laughed, and caught it, and the girl saw her catch it and grinned anyway." }
        ] },
        { t: "I don't know what you mean.", notes: 0, then: [
          { s: 'ann', f: 'serious', t: "Yes you do. You're a terrible liar, by the way. Your eyebrow does a thing." },
          { n: "Solar did not know her eyebrow did a thing. She was going to have to think about that." }
        ] },
        { t: "Are you okay? You look lost.", notes: 2, then: [
          { s: 'ann', f: 'sad', t: '...Is it that obvious?' },
          { n: "The brightness went out of her face for just a second, and underneath it she looked very young and very tired." }
        ] }
      ] },
      { s: 'ann', f: 'neutral', t: "Okay. I need to ask you something and you have to promise not to think I'm crazy." },
      { s: 'ann', f: 'serious', t: "Is this a Palace? Whose heart is this? Because it is way too normal to be anybody's Palace, and that's actually what's freaking me out the most." },
      { n: "Solar understood about one word in four of that. She understood the look on the girl's face completely. It was the look she'd seen in the mirror the morning after the roof, when the world had turned out to be bigger and stranger than she'd been told." },
      { choose: [
        { t: "It's not a Palace. It's Iwatodai. It's real.", notes: 3, then: [
          { s: 'ann', f: 'surprised', t: '...Real.' },
          { s: 'ann', f: 'sad', t: "Okay. Real. That's... worse, actually. That's so much worse." }
        ] },
        { t: "I don't know what a Palace is.", notes: 2, then: [
          { s: 'ann', f: 'flustered', t: "Right. Of course you don't. Okay. Ignore the Palace thing." },
          { s: 'ann', f: 'sad', t: "Ignore all of it. I'm fine. Totally fine." },
          { n: "She was not totally fine. She smiled anyway, bright and practiced, the smile of someone used to being looked at, and Solar recognized it so completely it gave her a small, unpleasant chill." }
        ] }
      ] },
      { n: "They sat on the edge of the fountain. The girl's name was Ann. Ann Takamaki. She went to a school called Shujin in a city called Tokyo, in a neighborhood that, according to every map on her phone, didn't exist." },
      { s: 'ann', f: 'sad', t: "My friends. My whole team. They're not here. I can't call them. I can't even find Shibuya." },
      { s: 'ann', f: 'neutral', t: "There's a hotel by the station that has a room in my name. I don't know who's paying for it. I'm not asking." },
      { n: "Solar thought of Elizabeth, and her book, and her golden, curious eyes. She decided not to mention her yet." },
      { choose: [
        { t: "You're not alone here. Not anymore.", notes: 3, then: [
          { s: 'ann', f: 'surprised', t: '...' },
          { s: 'ann', f: 'happy', t: "Okay. You can't just say stuff like that to a stranger. I'm going to cry in a mall." },
          { n: "She did not cry in the mall. She pressed the heels of her hands against her eyes for exactly three seconds and then dropped them and was fine, or performing fine, which Solar knew from long experience was a very similar thing." }
        ] },
        { t: "I'll help you look for a way home.", notes: 2, then: [{ s: 'ann', f: 'happy', t: "You'd do that? You don't even know me." }] }
      ] },
      { s: 'ann', f: 'happy', t: "Okay. You fought like a Phantom Thief on that bridge. You need a codename." },
      { n: "She looked Solar up and down with the narrowed, serious eyes of someone choosing an outfit." },
      { s: 'ann', f: 'happy', t: '...Sunflare. Your codename is Sunflare. It suits you. Bright, and a little bit dangerous.' },
      { choose: [
        { t: "I'll take it.", notes: 3, then: [{ s: 'ann', f: 'happy', t: "Good, because I wasn't going to give you a choice." }] },
        { t: "What's yours?", notes: 2, then: [
          { s: 'ann', f: 'serious', t: 'Panther.' },
          { n: "She said it with a little lift of her chin, and for a second Solar could see her on that roof again, the red suit, the whip, the green moon behind her." }
        ] }
      ] },
      { n: "When Solar finally left, Ann was still sitting on the fountain, but she wasn't staring at her phone anymore. She was watching people go by, a little less like a ghost, a little more like someone deciding where to start." }
    ] },

    { after: '5/23', title: '2: crepes', place: 'Paulownia Mall · Crepe Stand', scene: [
      { n: "Ann had found the only crepe stand in Paulownia Mall within forty-eight hours of arriving, which Solar was beginning to understand was simply a law of nature, like gravity, or Akihiko waking up at five." },
      { n: "It was tucked between a phone repair place and a shop that sold nothing but socks, and it smelled like butter and burnt sugar, and Ann ordered without looking at the menu, rattling off a combination of strawberries and cream and chocolate and something called a brownie crumble with the confidence of a professional." },
      { s: 'ann', f: 'happy', t: "You have to get the custard one. Trust me. I would never lie to you about custard." },
      { choose: [
        { t: 'Custard it is.', notes: 3, then: [
          { n: 'It was, unfortunately, the best thing Solar had eaten in weeks. Ann watched her take the first bite with the smug satisfaction of a prophet.' },
          { s: 'ann', f: 'happy', t: 'See? See?' }
        ] },
        { t: "I'll just have what you're having.", notes: 2, then: [{ s: 'ann', f: 'happy', t: "Bold. Respect. You might die, but respect." }] }
      ] },
      { n: "They ate standing up, leaning on the railing over the lower floor, watching people go in and out of the arcade. Ann was out of her uniform today, in a pink cardigan and jeans someone had clearly bought for her very recently, the tags snipped off with what looked like nail scissors." },
      { s: 'ann', f: 'neutral', t: "My best friend Shiho loves these. We used to get them every Friday after volleyball practice." },
      { s: 'ann', f: 'sad', t: "...Well. Her practice. I just went to watch." },
      { n: "Solar heard the small catch in it, the place where the sentence went somewhere and came back. She didn't ask. She'd always hated being asked." },
      { s: 'ann', f: 'neutral', t: "I model, back home. Magazines, mostly. It's how I pay for stuff. My parents work overseas. Designers. They're never home." },
      { n: "She said it brightly, the way you say a thing you've said so many times it's worn smooth. Solar knew that smoothness. She'd sanded her own story down the same way." },
      { choose: [
        { t: "So you live alone too.", notes: 3, then: [
          { s: 'ann', f: 'surprised', t: '...Too?' },
          { n: "Solar shrugged, the way she always did. Ann looked at her for a long moment, and something in her face softened, like she'd recognized someone across a crowded room." },
          { s: 'ann', f: 'sad', t: "...Yeah. Me too." }
        ] },
        { t: 'A model? That makes sense.', notes: 1, then: [
          { s: 'ann', f: 'flustered', t: "Okay, I don't know if that's a compliment or not, so I'm going to decide it's a compliment." }
        ] }
      ] },
      { n: "A pair of boys from Gekkoukan walked past and did the double take. Ann didn't notice. Solar watched Ann not notice, and realized it wasn't that she didn't see it. It was that she'd decided, at some point, that seeing it wasn't worth the energy." },
      { s: 'ann', f: 'happy', t: "Okay, give me your phone. I'm putting my number in. Phantom Thief protocol." },
      { n: "She typed it in fast, with two thumbs, and saved herself as Ann 🐆 with a heart after it, and handed the phone back like she'd just done something official." },
      { s: 'ann', f: 'happy', t: "Text me if you find another crepe place. Or if the green hour gets weird again. Mostly crepes, though." },
      { n: "On the way out, Ann bought a third crepe for the walk home. Solar didn't comment. Ann said, out of nowhere, \"I can feel you judging me,\" and Solar said, \"I'm not,\" and Ann said, \"Your eyebrow,\" and they both laughed so hard the sock-shop lady looked out to check on them." }
    ] },

    { after: '6/6', title: '3: the photographer', place: 'Paulownia Mall · Central Atrium', scene: [
      { n: "June, and the rainy season had turned the mall into the only dry place in Iwatodai. It was crowded and humid and smelled like wet umbrellas and the cinnamon pretzel place by the escalators." },
      { n: "They were standing outside a clothing store, Ann holding a sweater up against Solar to see if the color worked, when the man came over." },
      { n: "He was older, maybe forty, with an expensive camera around his neck and the kind of smile that arrived before he did. He had a business card already out. He was already talking." },
      { n: "Modeling agency. Ann's look. Very marketable. A test shoot, very private, his studio, this weekend. He put a hand on her shoulder while he said very private, and left it there." },
      { n: "Solar watched it happen. She watched Ann's whole body change, not flinching, nothing so obvious, just going still in a way that Solar had only ever seen in people who had learned to go still very young." },
      { n: "And then she watched it change back." },
      { s: 'ann', f: 'serious', t: "Take your hand off me." },
      { n: "She didn't raise her voice. She didn't have to. It was the voice of the girl on the roof, the one with the whip, and the man felt it, Solar could see him feel it. His hand came off her shoulder like it had been burned." },
      { s: 'ann', f: 'serious', t: "I'm not interested. And if I see you talking to any other girl in this mall, I'm going to find out exactly which agency you work for and call them myself." },
      { n: "He went. He laughed, a little, the way men like that always laugh when they leave, like it had been a joke the whole time. But he went." },
      { n: "Ann stood there with the sweater still in her hands. Her knuckles were white." },
      { choose: [
        { t: "(Stand beside her until she's ready.)", notes: 3, then: [
          { n: "Solar didn't say anything. She just moved closer, until their shoulders touched, and stayed there. After a while, Ann's hands loosened on the sweater." }
        ] },
        { t: "That was incredible.", notes: 2, then: [
          { s: 'ann', f: 'sad', t: "...It didn't feel incredible." },
          { s: 'ann', f: 'sad', t: "It felt like I'd been practicing for it." }
        ] },
        { t: 'Are you okay?', notes: 2, then: [{ s: 'ann', f: 'sad', t: "Yeah. No. Give me a second." }] }
      ] },
      { place: 'Paulownia Mall · Rooftop Garden', time: 'After School' },
      { n: "There was a small rooftop garden above the mall that nobody used when it rained. The rain had stopped. Everything was dripping. They sat on a bench that was mostly dry and looked at the gray city." },
      { s: 'ann', f: 'sad', t: "There was a teacher at my school. A gym teacher. Everybody loved him. Olympic medalist." },
      { s: 'ann', f: 'sad', t: "He wasn't who everybody thought he was. He hurt people. He hurt my friend." },
      { n: "She didn't say more than that. She didn't need to. Solar understood the shape of the thing by the way Ann was holding herself, arms crossed, small, like she was keeping something from spilling." },
      { s: 'ann', f: 'serious', t: "I swore I'd never let anyone like that get close to me again. Or anyone I care about." },
      { choose: [
        { t: "You didn't today.", notes: 3, then: [
          { s: 'ann', f: 'surprised', t: '...' },
          { s: 'ann', f: 'happy', t: "...No. I didn't." },
          { n: "She said it like she was hearing it for the first time. Like she'd needed somebody else to say it before it counted." }
        ] },
        { t: "I'm sorry. About your friend.", notes: 2, then: [{ s: 'ann', f: 'sad', t: "Me too. Every day." }] }
      ] },
      { n: "On the way down, Ann put the sweater back on its shelf. Then she went back and bought it anyway, and handed it to Solar in the bag." },
      { s: 'ann', f: 'happy', t: "The color worked. I'm not letting some creep ruin a good sweater." }
    ] },

    { after: '6/27', title: '4: ryuji', place: 'Paulownia Mall · Arcade', scene: [
      { n: "The text came in at four in the afternoon, all caps, four exclamation points: SUNFLARE. ARCADE. NOW. EMERGENCY. Solar went, expecting a crisis, and found instead a blond boy in a yellow T-shirt and a Shujin blazer losing very loudly at a punching machine." },
      { register: 'ryuji' },
      { s: 'ryuji', f: 'happy', t: "Dude! DUDE. This thing is rigged. I hit it SO hard." },
      { s: 'ann', f: 'flustered', t: "Ryuji, it says you hit it at a 'gentle breeze.' The scale goes up to 'typhoon.'" },
      { s: 'ryuji', f: 'neutral', t: "That's a lie and you know it." },
      { n: "Ryuji Sakamoto, it turned out, had fallen asleep on a train in Tokyo the night before and woken up during the green hour on the Iwatodai monorail, surrounded by coffins, screaming. He'd found Ann's hotel by, as he put it, \"following the vibes.\" Ann had found him in the lobby at seven a.m. eating every free breakfast muffin." },
      { s: 'ann', f: 'happy', t: "Sunflare, Ryuji. Ryuji, Sunflare. Be nice." },
      { s: 'ryuji', f: 'happy', t: "Sunflare? Oh, sick codename. Wait. Did you give her a codename before you gave ME a good one?" },
      { s: 'ann', f: 'neutral', t: "Yours is Skull, Ryuji. It's fine. It's a good codename." },
      { s: 'ryuji', f: 'sad', t: "It's a skull, Ann." },
      { choose: [
        { t: "Skull is a great codename.", notes: 2, then: [
          { s: 'ryuji', f: 'happy', t: "SEE? She gets it. I like her." }
        ] },
        { t: 'Want me to win you a prize, Skull?', notes: 3, then: [
          { s: 'ryuji', f: 'neutral', t: "...You think you can beat 'gentle breeze'?" },
          { n: "Solar had held a heavy bag for Akihiko Sanada. She hit the machine once, carefully, from the hips, the way he'd shown her. It said 'strong gale.'" },
          { s: 'ryuji', f: 'happy', t: "NO WAY." },
          { s: 'ann', f: 'happy', t: "Oh, I love her." }
        ] }
      ] },
      { n: "They spent the whole afternoon at the arcade. Ryuji was loud, and terrible at every game, and so happy to see Ann that it came off him like heat. They bickered constantly, about the claw machine and the rhythm game and whose fault it was that they'd gotten lost on the way to the food court, and Solar watched them and understood that this was what Ann had lost. Not a city. This." },
      { place: 'Iwatodai Station', time: 'Evening' },
      { n: "At the station, Ryuji went quiet. He kept looking at his hands, and Solar saw why. In the low gold light, they were a little too easy to see through." },
      { s: 'ryuji', f: 'sad', t: "...Huh. That's freaky." },
      { s: 'ann', f: 'sad', t: "Ryuji." },
      { s: 'ryuji', f: 'neutral', t: "I'm okay. I think it's just... the green hour wants me back. Or home does. Something's pulling." },
      { n: "He grinned at her, lopsided, the kind of grin people use to carry something heavy for someone else." },
      { s: 'ryuji', f: 'happy', t: "Hey. Sunflare. Look after her for me, yeah? She acts tough but she cries at dog commercials." },
      { s: 'ann', f: 'flustered', t: "RYUJI." },
      { choose: [
        { t: "I'll look after her. Promise.", notes: 3, then: [{ s: 'ryuji', f: 'happy', t: "Knew I liked you." }] },
        { t: "She cries at cat commercials too.", notes: 2, then: [
          { s: 'ryuji', f: 'happy', t: "HA! You've seen it!" },
          { s: 'ann', f: 'flustered', t: "I'm leaving. I'm leaving both of you." }
        ] }
      ] },
      { n: "He was gone in the morning. Ann texted Solar at six a.m. Solar was already awake. She'd learned to be." }
    ] },

    { after: '7/11', title: '5: shiho', place: 'Port Island · Seaside Park', scene: [
      { n: "July, and the heat was back for good. The seaside park on Port Island had a long promenade along the water, and in the evenings it filled up with joggers and couples and old men fishing off the rail, and the breeze off the bay was the only thing in the whole city that felt cool." },
      { n: "Ann had been quiet since Ryuji left. Still bright, still funny, still ordering three crepes. But there were gaps now. Moments where she'd stop mid-sentence and look at the water like she was waiting for someone to come walking up out of it." },
      { s: 'ann', f: 'neutral', t: "Can I show you something?" },
      { n: "She held out her phone. On the screen was a photo of two girls in volleyball uniforms, sweaty and grinning and flashing peace signs at the camera. One of them was Ann. The other girl had dark hair in a ponytail and a smile that took up her whole face." },
      { register: 'shiho' },
      { s: 'ann', f: 'happy', t: "That's Shiho. My best friend since middle school." },
      { s: 'ann', f: 'sad', t: "The teacher I told you about. He hurt her. Badly enough that she..." },
      { n: "Ann stopped. The breeze came off the water and lifted her hair and set it down again." },
      { s: 'ann', f: 'sad', t: "She's okay now. She's getting better. She moved away. But I didn't see it. I was right there and I didn't see it until it was almost too late." },
      { n: "Solar knew this sentence. She had her own version of it. Every version of it ended the same way, with you, alone, at night, running the whole thing back to find the moment you should have looked up." },
      { choose: [
        { t: "You saw it in the end. You fought for her.", notes: 3, then: [
          { s: 'ann', f: 'sad', t: "...Yeah. I did. We all did." },
          { s: 'ann', f: 'neutral', t: "That's how I got my Persona, actually. I got so angry I couldn't be scared anymore." },
          { n: "She said it simply, and Solar thought of the roof, the moon, the cold weight against her own temple, and thought they might have more in common than either of them was ready to say." }
        ] },
        { t: "It's not your fault.", notes: 2, then: [
          { s: 'ann', f: 'sad', t: "Everyone says that." },
          { s: 'ann', f: 'neutral', t: "...I'm working on believing it." }
        ] },
        { t: "(Take her hand.)", notes: 3, then: [
          { s: 'ann', f: 'surprised', t: '...' },
          { n: "Ann's hand was cold, even in the heat. She held on hard. She didn't say anything. She didn't need to." }
        ] }
      ] },
      { s: 'ann', f: 'neutral', t: "Being here, it's weird. Nobody knows me. Nobody knows what happened. I don't have to be the girl from the rumors." },
      { s: 'ann', f: 'sad', t: "I don't know if that makes me want to go home more, or less." },
      { n: "The sun was going down across the bay, and the water was turning the color of the inside of a peach, and a jogger went past with headphones in, singing badly. Ann laughed, startled, and wiped her eyes with the back of her wrist." },
      { s: 'ann', f: 'happy', t: "Okay. I'm done being sad for today. Crepes?" },
      { n: "Solar said yes. She always said yes. She was beginning to suspect that was the point." }
    ] },

    { after: '8/1', title: '6: the nav', place: 'Ann\'s Hotel · Lobby', scene: [
      { n: "The hotel lobby was cold enough to keep milk in, and Ann was sitting cross-legged on one of the leather chairs with her phone in both hands, frowning at it so hard Solar could hear it from the door." },
      { s: 'ann', f: 'surprised', t: "Sunflare! Come here. Come here come here come here. My Nav is doing something." },
      { n: "The app was the strange one, the red one with the eye on it that Ann had said used to take her into the hearts of bad people. It had been dead since she arrived. Now it was flickering, the screen jumping with static, the eye opening and closing like it couldn't decide if it was awake." },
      { n: "Then Solar's phone buzzed in her pocket. And kept buzzing. And then, very clearly, started talking." },
      { phone: [
        { from: 'futaba', t: 'hello' },
        { from: 'futaba', t: 'is this the right phone' },
        { from: 'futaba', t: 'ann is this you. if this is a random guy pls ignore and also block me' },
        { from: 'solar', t: "who is this" },
        { from: 'futaba', t: 'oh no it is a random guy' },
        { from: 'solar', t: "I'm Solar. Ann's with me." },
        { from: 'futaba', t: 'OH' },
        { from: 'futaba', t: 'ok hi solar. i am futaba. i am in your phone now. sorry. it was the only signal that worked' }
      ], contact: 'Unknown Number', handle: 'futaba', me: 'solar' },
      { register: 'futaba' },
      { s: 'ann', f: 'happy', t: "FUTABA." },
      { s: 'futaba', f: 'happy', t: "Ann! Okay, okay, don't yell, the connection is held together with spit and tape and a lot of genius." },
      { n: "Futaba's voice came out of Solar's phone speaker, crackly and fast and delighted, and somehow her face was there too, on Solar's lock screen, a girl with huge glasses and a tangle of orange hair and headphones around her neck, squinting at them like they were a puzzle she'd been working on for weeks." },
      { s: 'futaba', f: 'neutral', t: "Your world's signal is SO weird. It's like trying to get wifi through a lasagna. Something keeps eating the packets at midnight." },
      { choose: [
        { t: "That's the Dark Hour.", notes: 3, then: [
          { s: 'futaba', f: 'surprised', t: "...The what. Okay, that's terrifying and I need to know everything about it immediately." }
        ] },
        { t: "Can you get her home?", notes: 2, then: [
          { s: 'futaba', f: 'serious', t: "I'm working on it. It's not a door. It's more like... a tide. I need to figure out when it goes out." }
        ] }
      ] },
      { s: 'futaba', f: 'sad', t: "Everybody misses you, Ann. Ryuji came back and wouldn't shut up about a girl called Sunflare who punched a machine to 'strong gale.'" },
      { s: 'ann', f: 'happy', t: "She did! It was amazing!" },
      { s: 'futaba', f: 'happy', t: "Anyway. I'm going to make a group chat. Don't freak out when it appears. It's me. It's always me." },
      { n: "The connection crackled and dropped. The phone went quiet. Ann sat very still for a moment, and then put her face in her hands and laughed and cried at the same time, the specific, helpless sound of someone who had been holding her breath for three months." },
      { choose: [
        { t: "(Sit with her.)", notes: 3, then: [{ n: "Solar sat on the arm of the chair and let Ann lean against her. It was cold in the lobby. Ann was warm. Neither of them said anything for a long time." }] },
        { t: "They haven't forgotten you.", notes: 3, then: [{ s: 'ann', f: 'sad', t: "...I was so scared they would." }] }
      ] },
      { s: 'ann', f: 'neutral', t: "...Sunflare. When she figures it out. When I can go home." },
      { s: 'ann', f: 'sad', t: "I don't know what I'm going to do about you." },
      { n: "She said it like a joke. It wasn't a joke. Solar felt it land somewhere under her ribs and stay there." }
    ] },

    { after: '8/22', title: '7: queen', place: 'Iwatodai Dorm · Lounge', scene: [
      { n: "The second one fell through on a Saturday, during the Dark Hour, onto the roof of the dorm, in a black-and-studded biker suit with a mask, swinging her fists at the coffins like they had personally offended her." },
      { n: "By the time the green light faded, she had been talked down by Mitsuru, given a towel by Yukari, and introduced to the dorm's coffee table, at which she was now sitting with perfect posture and a cup of tea, opposite Mitsuru, in the specific silence of two people who had immediately recognized one another." },
      { register: 'makoto' },
      { s: 'makoto', f: 'neutral', t: "Makoto Niijima. Student council president, Shujin Academy." },
      { s: 'mitsuru', f: 'neutral', t: "Mitsuru Kirijo. Student council president, Gekkoukan High." },
      { n: "They looked at each other over the teacups like two generals across a map." },
      { s: 'ann', f: 'flustered', t: "Oh no. Oh no, there's two of them." },
      { n: "Ann had arrived ten minutes after the green hour ended, running the whole way from the hotel in her pajamas, and was now sitting next to Solar on the couch, watching the summit unfold with the horror and delight of someone watching a nature documentary." },
      { s: 'makoto', f: 'serious', t: "You've been operating in this 'Dark Hour' with how many members? And what's your chain of command?" },
      { s: 'mitsuru', f: 'neutral', t: "Seven, at present. And I would be happy to show you our tactical reports, if you'll show me yours." },
      { s: 'makoto', f: 'happy', t: "...I would love that." },
      { choose: [
        { t: "Should we leave them alone?", notes: 3, then: [
          { s: 'ann', f: 'happy', t: "Absolutely not. This is the best thing that's ever happened." }
        ] },
        { t: 'Makoto, are you okay? You just fell out of the sky.', notes: 2, then: [
          { s: 'makoto', f: 'neutral', t: "I'm fine. I've had worse days. I was in a casino once." },
          { n: "Solar decided not to ask." }
        ] }
      ] },
      { n: "They talked until two in the morning. Strategy, formation, how to make a group of reckless teenagers follow a plan, how to stop the reckless ones from punching things before the plan started. At one point Makoto said Ryuji's name and Mitsuru said Akihiko's at the exact same moment, with the exact same weary expression, and both of them almost smiled." },
      { place: 'Iwatodai Dorm · Front Steps', time: 'Evening' },
      { n: "Makoto started to fade a little before dawn, on the front steps, the way Ryuji had. She looked at her hands and sighed, practical even about this." },
      { s: 'makoto', f: 'neutral', t: "Ann. Futaba says she's close. Weeks, maybe. Not months." },
      { s: 'ann', f: 'surprised', t: "...Weeks." },
      { s: 'makoto', f: 'happy', t: "Sunflare. Thank you for looking after our Panther. She's important to us." },
      { s: 'makoto', f: 'neutral', t: "...She seems important to you, too." },
      { n: "Makoto said it the way student council presidents say everything, plainly, like reading the minutes. Solar felt her face go hot. Ann, beside her, made a small noise and became extremely interested in the sky." },
      { n: "When Makoto was gone, Ann didn't say anything for a long time. Then she said, \"Weeks,\" again, quietly, to nobody." }
    ] },

    { after: '9/19', title: '8: carmen', place: 'Paulownia Mall · Rooftop Garden', scene: [
      { n: "September, and the first cool evening of the year. The rooftop garden above the mall had gone a little wild over the summer, the planters spilling over, a few late flowers hanging on, the city below starting to light up one window at a time." },
      { n: "Ann had brought crepes. She hadn't eaten hers. It sat in her lap, slowly collapsing." },
      { s: 'ann', f: 'neutral', t: "Can I tell you about Carmen?" },
      { n: "Solar knew the name. Ann had said it in the green hour, once, when the shadow on the monorail had come too close. She'd said it like a command, and something had answered." },
      { s: 'ann', f: 'neutral', t: "When she woke up inside me, it felt like someone kicking a door open. Like, all my life I'd been smiling for cameras and being polite to men I hated and pretending I didn't hear what people said about me." },
      { s: 'ann', f: 'serious', t: "And Carmen was just... no. No more. I'm done being what you want. I'm going to be what I want." },
      { s: 'ann', f: 'sad', t: "...And then I came here, and nobody wanted anything from me at all, and I didn't know what I wanted either." },
      { choose: [
        { t: "What do you want now?", notes: 3, then: [
          { s: 'ann', f: 'sad', t: "That's the problem." },
          { s: 'ann', f: 'flustered', t: "I want to go home. I want to see my friends. I want to sleep in my own bed." },
          { s: 'ann', f: 'blushing', t: "And I want to stay. Because of you. And those two things don't fit in the same body, Sunflare." }
        ] },
        { t: "You don't have to decide tonight.", notes: 2, then: [
          { s: 'ann', f: 'sad', t: "Futaba might decide for me. She's so close." },
          { s: 'ann', f: 'blushing', t: "...And I'm scared of the part of me that's hoping she fails." }
        ] }
      ] },
      { n: "There it was, said out loud. It hung in the cool air between them, too big for the bench, too big for the roof. Solar's heart was doing something specific and unhelpful. Her hands were cold. Her face was not." },
      { choose: [
        { t: "I'm scared too.", notes: 3, then: [
          { s: 'ann', f: 'surprised', t: '...' },
          { s: 'ann', f: 'sad', t: "...Okay. Okay, good. I mean, not good. But good that it's not just me." }
        ] },
        { t: "Whatever happens, I'm glad you fell into my world.", notes: 3, then: [
          { s: 'ann', f: 'blushing', t: "...You have got to stop saying stuff like that. I can't handle it." },
          { n: "She didn't look like she wanted Solar to stop. She looked like she wanted to hear it again." }
        ] }
      ] },
      { n: "Ann finally ate her crepe, all of it, in about four bites, like she was angry at it. Then she leaned her head on Solar's shoulder and they watched the city light up, and neither of them mentioned the word weeks." }
    ] },

    { after: '10/24', title: '9: what are we, sunflare', place: 'Paulownia Mall · Fountain', scene: [
      { n: "October, cold and clear. Paulownia had put up its autumn decorations, plastic maple leaves strung over the walkways, a pumpkin display by the arcade that Ann had taken nineteen photos of." },
      { n: "They were back at the fountain. The same one. Ann had picked it. Solar noticed that she'd picked it." },
      { n: "Futaba had texted the night before. Not a joke this time, not a meme, just three words: i found it. And then: end of the month. the green hour will be thinnest at the station. And then, a minute later: i'm sorry, ann. i know it's complicated." },
      { s: 'ann', f: 'neutral', t: "So. I'm going home in a couple of weeks." },
      { n: "She said it to the water. Her voice was very steady. It was the steadiness of something being held still with both hands." },
      { s: 'ann', f: 'serious', t: "And before I go, I need to know. Because I'm not going home and spending the rest of my life wondering." },
      { s: 'ann', f: 'blushing', t: "What are we, Sunflare?" },
      { route: [
        { t: "I'm in love with you, Ann.", route: 'romance', notes: 3, then: [
          { s: 'ann', f: 'surprised', t: '...' },
          { n: "For a second she didn't move at all. Then her whole face crumpled and brightened at the same time, which Solar had not known a face could do." },
          { s: 'ann', f: 'blushing', t: "Oh my god. Okay. Me too. Obviously me too. Since the custard crepe, probably. Since the stupid eyebrow." },
          { n: "She grabbed Solar's hands, both of them, and held on like the fountain might wash her away. Some kids by the arcade were staring. Ann didn't notice. Ann had decided, a long time ago, that seeing it wasn't worth the energy, and she was not going to start now." }
        ] },
        { t: "You're my best friend. The best I've ever had.", route: 'friend', notes: 3, then: [
          { s: 'ann', f: 'surprised', t: '...' },
          { s: 'ann', f: 'happy', t: "...Yeah. Yeah, you are too. Oh my god, I'm going to cry in a mall again." },
          { n: "She did, a little, this time. She hugged Solar so hard both of them nearly went into the fountain, and when she let go she was laughing." },
          { s: 'ann', f: 'happy', t: "Phantom Thief best friends. That's forever. That's a contract." }
        ] }
      ] }
    ] },

    { after: '10/30', title: '10: red', place: 'Iwatodai Station · Platform', scene: [
      { n: "The end of October, close to midnight. The station platform was nearly empty, the last train gone, the lights humming. Ann was wearing the white hoodie and the red tights and her Shujin blazer again, the way she'd arrived, like she was putting herself back together piece by piece." },
      { n: "Futaba said it would happen during the green hour, at the station, where the line was thinnest. They had an hour, maybe less. Ann had spent most of it pacing." },
      { s: 'ann', f: 'neutral', t: "Okay. I have something for you. Don't make it weird." },
      { n: "She held it out. It was her mask. Panther's mask, red, with the little cat ears, the one she'd worn on the roof the night Solar first saw her." },
      { s: 'ann', f: 'sad', t: "I'll get a new one. Morgana can make anything. But I want you to have this one." },
      { s: 'ann', f: 'happy', t: "So you remember you're a Phantom Thief too. You stole something, Sunflare." },
      { ifRoute: 'friend', then: [
        { s: 'ann', f: 'happy', t: "You stole my whole sad, lonely summer and made it the best one I've ever had." },
        { choose: [
          { t: "I'll wear it every Halloween.", notes: 3, then: [{ s: 'ann', f: 'happy', t: "You'd better. Send pictures. Futaba will find a way." }] },
          { t: "I'll miss you, Panther.", notes: 3, then: [{ s: 'ann', f: 'sad', t: "...Don't. If you say it I'll say it and then neither of us is going to make it through this." }] }
        ] },
        { n: "When the green came down over the station, Ann hugged her one last time, hard, and then stepped back onto the empty tracks where the light was strangest. She was laughing when she went. Solar was too, mostly." },
        { n: "The mask was still warm in her hands." }
      ] },
      { ifRoute: 'romance', then: [
        { s: 'ann', f: 'blushing', t: "You stole my heart, okay? That's the stupid, cheesy truth. You're the only person who's ever stolen anything from me that I didn't want back." },
        { choose: [
          { t: "Then come back for it.", notes: 3, then: [
            { s: 'ann', f: 'sad', t: "...Futaba says the tide goes out. Which means it comes back in." },
            { s: 'ann', f: 'blushing', t: "So I'm coming back. I don't know when. But I'm coming back, Sunflare." }
          ] },
          { t: "(Kiss her.)", notes: 3, then: [
            { s: 'ann', f: 'surprised', t: '...!' },
            { s: 'ann', f: 'blushing', t: "...Okay. Okay, wow. Okay, I'm definitely coming back." }
          ] }
        ] },
        { n: "When the green came down over the station, she held onto Solar's hand until the very last second, until her fingers went thin and cool and translucent, until there was nothing left to hold but the shape of where she'd been." },
        { n: "The mask was still warm. Solar held it all the way home." }
      ] }
    ] }
  ]
});
