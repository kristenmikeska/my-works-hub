/* Kiriko · X Fortune. Arrives on the 5/9 full moon. Friendship only. Format notes are at the top of akihiko.js.
   She draws an omikuji fortune for Solar in every rank. Runners crossover: in another world, Solar mains Kiriko
   (Grandmaster, tournament MVP) and always queues with a boy who mains Widowmaker. */
FemcSocial.define({
  id: 'kiriko', name: 'Kiriko', short: 'Kiriko', arcana: 'Fortune', numeral: 'X', from: 'Overwatch',
  arrives: '5/9',
  home: { place: 'Naganaki Shrine', slot: 0, days: [0, 2, 4, 6], hint: 'Daytime on Sundays, Tuesdays, Thursdays and Saturdays, at Naganaki Shrine.' },
  approach: "A girl in a shrine maiden's outfit is sitting on the offering box with her legs crossed, eating something she definitely shouldn't be eating at a shrine.",
  invite: { ask: ["come to the shrine. i have snacks. dont tell anyone", "u free? fortune time 🦊", "bored. come hang"], ok: "yay 🦊 hurry", no: "boo. ok" },
  romance: false,
  cast: { koromaru: 'Koromaru', mercy: 'Mercy', genji: 'Genji', widowmaker: 'Widowmaker' },
  texts: [
    { id: 'kiri-1a', rank: 1, days: 1, slot: 1, msgs: [
      { from: 'kiriko', t: 'sol-chan!! 🦊' },
      { from: 'kiriko', t: "today's fortune: middle blessing. avoid stairs" },
      { from: 'kiriko', t: 'jk the stairs are fine. come visit' }
    ], reply: [
      { t: 'Avoiding stairs is my life goal.', notes: 3, then: [{ from: 'kiriko', t: 'lol ur friend with the white hair was running them again this morning' }, { from: 'kiriko', t: 'a hundred and twelve. TEN TIMES' }] },
      { t: "I'll come Thursday.", notes: 2, then: [{ from: 'kiriko', t: 'yay. bring snacks for the dog. he is a menace' }] }
    ] },
    { id: 'kiri-3a', rank: 3, days: 1, slot: 1, msgs: [
      { from: 'kiriko', t: 'ur legs ok after the roofs?' },
      { from: 'kiriko', t: 'i forgot not everybody can swift step 😅' }
    ], reply: [
      { t: 'I may never walk again.', notes: 2, then: [{ from: 'kiriko', t: "i'll heal you. one ofuda. very cheap. for you, free" }] },
      { t: 'Best night of my life.', notes: 3, then: [{ from: 'kiriko', t: 'RIGHT?? same time next week' }] }
    ] },
    { id: 'kiri-4a', rank: 4, days: 1, slot: 1, msgs: [
      { from: 'kiriko', t: 'been thinking about the girl who plays as me' },
      { from: 'kiriko', t: 'mvp!! in a tournament!!' },
      { from: 'kiriko', t: "i'm so proud of her and i've never met her. is that weird" }
    ], reply: [
      { t: "Not weird. I'm proud of her too.", notes: 3, then: [{ from: 'kiriko', t: '...sol-chan. i think u might be prouder than u know 🦊' }] },
      { t: 'A little weird.', notes: 2, then: [{ from: 'kiriko', t: 'ok rude. accurate. but rude' }] }
    ] },
    { id: 'kiri-5a', rank: 5, days: 1, slot: 1, msgs: [
      { from: 'kiriko', t: 'mercy-sensei says my healing technique is "unorthodox"' },
      { from: 'kiriko', t: 'i said thank u. she said it was not a compliment' },
      { from: 'kiriko', t: 'i still think it was a compliment' }
    ], reply: [
      { t: 'It was definitely a compliment.', notes: 3, then: [{ from: 'kiriko', t: 'THANK YOU. finally someone' }] },
      { t: 'She threw a kunai at a wall, Kiriko.', notes: 2, then: [{ from: 'kiriko', t: "the wall was fine. mostly" }] }
    ] },
    { id: 'kiri-7a', rank: 7, days: 1, slot: 1, msgs: [
      { from: 'kiriko', t: 'that was the best festival ever' },
      { from: 'kiriko', t: "don't tell kanezaka i said that" }
    ], reply: [
      { t: 'Your secret is safe.', notes: 3, then: [{ from: 'kiriko', t: '🤐🦊' }] },
      { t: 'Next year, you show me yours.', notes: 3, then: [{ from: 'kiriko', t: 'deal. pinky promise. across worlds' }] }
    ] },
    { id: 'kiri-8a', rank: 8, days: 1, slot: 1, msgs: [
      { from: 'kiriko', t: 'the sniper lady is kind of scary' },
      { from: 'kiriko', t: 'also kind of sad' },
      { from: 'kiriko', t: 'i left an ofuda in her coat pocket. she did not notice. dont tell her' }
    ], reply: [
      { t: "You're a good person, Kiriko.", notes: 3, then: [{ from: 'kiriko', t: "i'm a menace. but the good kind" }] },
      { t: 'She noticed.', notes: 2, then: [{ from: 'kiriko', t: 'WHAT' }, { from: 'kiriko', t: 'how do u know' }, { from: 'kiriko', t: 'sol-chan HOW DO U KNOW' }] }
    ] },
    { id: 'kiri-10a', rank: 10, days: 2, slot: 1, msgs: [
      { from: 'kiriko', t: "today's fortune:" },
      { from: 'kiriko', t: 'great blessing. again. obviously' },
      { from: 'kiriko', t: 'i stopped checking. its always great when its yours 🦊' }
    ], reply: [
      { t: "Because you're the one drawing them.", notes: 3, then: [{ from: 'kiriko', t: 'shhhhh dont tell the gods' }] },
      { t: 'Ring the suzu if you miss me.', notes: 3, then: [{ from: 'kiriko', t: 'ringing it right now' }, { from: 'kiriko', t: 'did u hear it' }] }
    ] }
  ],
  ranks: [
    { after: '5/10', title: '1: great blessing', place: 'Naganaki Shrine', scene: [
      { n: "Naganaki Shrine had been a little sad for as long as Solar had lived in Iwatodai. Leaves in the water basin. Moss on the stone fox statues. The kind of quiet that came from nobody looking after a place for a long time." },
      { n: "On Sunday morning, it was swept." },
      { n: "Every path. Every step. The leaves were out of the basin and the fox statues had been scrubbed until their stone noses gleamed, and somebody had tied fresh red bibs around their necks, and in the middle of the courtyard a girl was leaning on a broom with the satisfied, slightly sweaty look of someone who'd been at it since dawn." },
      { n: "Purple and white. Hair up high in a ponytail. The girl Junpei had been talking about at Hagakure, the one everybody had laughed about. Solar was beginning to think she should stop letting people laugh about things." },
      { s: 'kiriko', f: 'happy', t: "Oh! A visitor! Finally. I was starting to think this place was haunted. Well, more haunted." },
      { choose: [
        { t: 'Did you do all this?', notes: 2, then: [
          { s: 'kiriko', f: 'happy', t: "Yep. Couldn't help it. I found a shrine and nobody was taking care of it. That's like finding a cat in the rain." }
        ] },
        { t: "You're the girl with the fox ears.", notes: 3, then: [
          { s: 'kiriko', f: 'happy', t: "Ha! People keep saying that. It's not ears, it's... well. Sometimes it's ears." },
          { n: "She grinned, like that explained anything, and Solar had the strange sense that it did." }
        ] }
      ] },
      { s: 'kiriko', f: 'happy', t: "I'm Kiriko. I'm from a town called Kanezaka. Which, according to every map in this city, doesn't exist. Fun!" },
      { n: "She said it brightly, like a joke. Her hand, Solar noticed, tightened on the broom handle while she said it." },
      { s: 'kiriko', f: 'happy', t: "Okay, first visitor gets a fortune. That's the rule. I just made it up, but it's the rule." },
      { n: "She produced a small wooden box from her sleeve and shook it until a stick slid out of the hole in the top, then checked the number against a drawer of folded papers by the offering box, like she'd been running this shrine her whole life." },
      { s: 'kiriko', f: 'happy', t: "Number seven. Dai-kichi! Great blessing!" },
      { s: 'kiriko', f: 'neutral', t: "\"A traveler arrives. A door opens. Do not be afraid to walk through it.\"" },
      { choose: [
        { t: "That's very specific.", notes: 2, then: [{ s: 'kiriko', f: 'neutral', t: "Fortunes are always specific. People just don't notice until later." }] },
        { t: "Maybe you're the traveler.", notes: 3, then: [
          { s: 'kiriko', f: 'surprised', t: '...' },
          { s: 'kiriko', f: 'neutral', t: "Huh. Maybe I am. Maybe we both are." }
        ] }
      ] },
      { n: "A white dog trotted out from behind the offering box, red collar, red eyes, and sat down at Kiriko's feet like they'd agreed on this arrangement long ago." },
      { s: 'kiriko', f: 'happy', t: "That's the boss. He was here before me. He lets me stay if I share my rice balls." },
      { n: "Solar left with the fortune folded in her pocket. On the way down the hundred and twelve steps, she realized she'd been smiling for a while, and that she didn't know when she'd started." }
    ] },

    { after: '5/24', title: '2: the kitsune', place: 'Naganaki Shrine', scene: [
      { n: "It rained all morning, and Kiriko had dragged a tarp over the shrine's little front porch and was sitting under it cross-legged, eating a rice ball and watching the water run off the roof in silver strings." },
      { s: 'kiriko', f: 'happy', t: "Sol-chan! Sit, sit. The dog won't share the good spot, but there's room." },
      { n: "Sol-chan. Nobody had ever called her that. It was cheeky and warm and slightly too familiar, and Solar found she didn't mind it at all." },
      { register: 'koromaru' },
      { n: "Koromaru was indeed in the good spot, curled in a perfect circle on Kiriko's folded jacket. He opened one red eye when Solar sat down and closed it again, which seemed to be approval." },
      { s: 'kiriko', f: 'serious', t: "Okay. I want to show you something. Promise you won't freak out?" },
      { choose: [
        { t: 'I promise.', notes: 3, then: [{ s: 'kiriko', f: 'happy', t: "That was fast. I like that." }] },
        { t: "I've seen a lot of strange things this year.", notes: 2, then: [{ s: 'kiriko', f: 'serious', t: "Yeah. I can tell. You've got that look. The midnight look." }] }
      ] },
      { n: "Kiriko held out her hand, palm up, and whistled, low and soft." },
      { n: "Something answered. A shape stepped out of the rain at the edge of the porch, made of light and air, long and lean, with a tail like a brushstroke and eyes like two coins. A fox. A huge, glowing, translucent fox, looking at Solar with an expression of polite curiosity." },
      { n: "Koromaru sat bolt upright. The fox looked at him. Koromaru, after a long, tense second, lay back down." },
      { s: 'kiriko', f: 'neutral', t: "She's my kitsune. She's been with my family forever. She protects people." },
      { s: 'kiriko', f: 'sad', t: "She was the only thing that came with me. Everything else stayed in Kanezaka." },
      { choose: [
        { t: "She's beautiful.", notes: 3, then: [
          { s: 'kiriko', f: 'happy', t: "She heard you. She's going to be insufferable now." },
          { n: "The fox, Solar could swear, preened." }
        ] },
        { t: "You're not alone, then.", notes: 3, then: [
          { s: 'kiriko', f: 'sad', t: '...' },
          { s: 'kiriko', f: 'happy', t: "No. I guess I'm not." }
        ] }
      ] },
      { s: 'kiriko', f: 'happy', t: "Okay, fortune time!" },
      { s: 'kiriko', f: 'neutral', t: "Ooh. Sho-kichi. Small blessing. \"What you think is lost is only waiting. Be patient with the rain.\"" },
      { n: "They sat under the tarp until the rain stopped. The fox curled up beside Koromaru. The two of them, by the end, were touching noses." }
    ] },

    { after: '6/14', title: '3: rooftops', place: 'Iwatodai · Rooftops', scene: [
      { n: "Kiriko had said, meet me at the shrine at sunset, wear shoes you can run in, and Solar had assumed she meant jogging." },
      { n: "She did not mean jogging." },
      { n: "She meant the roofs. She took Solar's hand at the top of the shrine steps and said hold on, and then there was a flicker of light and a rush of air and they were on top of the convenience store across the street, and then the apartment block next to it, and then the long flat roof of the bookstore, flickering from one to the next in little bursts of light, the whole city spread out below them gold and pink and endless." },
      { s: 'kiriko', f: 'happy', t: "Swift Step! It's easier with a friend. You've got good balance, Sol-chan!" },
      { choose: [
        { t: "I'm going to throw up.", notes: 2, then: [{ s: 'kiriko', f: 'surprised', t: "Don't! It ruins the vibe. And the roof." }] },
        { t: "This is incredible!", notes: 3, then: [{ s: 'kiriko', f: 'happy', t: "RIGHT? This is my favorite thing in any world!" }] }
      ] },
      { n: "They stopped on the roof of the tallest building in Iwatodai, a hotel, with a water tower and a view of the whole bay. The monorail was crossing the bridge below them, a string of lit windows. Somewhere down there the dorm was making dinner without her." },
      { s: 'kiriko', f: 'neutral', t: "Back home, I used to do this every night. Run the roofs. Make sure nobody needed me." },
      { s: 'kiriko', f: 'happy', t: "Kanezaka's small. Everybody knows everybody. Everybody knows me. The girl from the shrine. The one with the fox." },
      { s: 'kiriko', f: 'sad', t: "Here nobody knows me. It's weird. It's kind of nice. It's kind of awful." },
      { choose: [
        { t: "I know. I've moved a lot.", notes: 3, then: [{ s: 'kiriko', f: 'sad', t: "...Yeah. You've got that look too. The new-school look." }] },
        { t: "I know you.", notes: 3, then: [
          { s: 'kiriko', f: 'flustered', t: '...' },
          { s: 'kiriko', f: 'happy', t: "Okay, that's a really good line. I'm stealing it." }
        ] }
      ] },
      { s: 'kiriko', f: 'happy', t: "Fortune!" },
      { s: 'kiriko', f: 'neutral', t: "Hah! Kichi. Blessing. \"Look up. The view is better than you expected.\"" },
      { n: "Solar looked up. The first stars were coming out over the bay. Kiriko was right. So was the fortune. She was starting to think the fortunes were always right." }
    ] },

    { after: '7/5', title: '4: a girl who plays as me', music: 'mystery', place: 'Naganaki Shrine · Steps', scene: [
      { n: "July, and the shrine steps were too hot to sit on until the sun went behind the trees. They sat on them anyway, on folded towels, eating popsicles that melted faster than they could eat them." },
      { n: "Kiriko had been quiet all afternoon. Not sad. Thinking. She kept looking at Solar sideways, the way you look at a word you're sure you know but can't quite place." },
      { s: 'kiriko', f: 'serious', t: "Sol-chan. Can I tell you something weird?" },
      { s: 'kiriko', f: 'neutral', t: "Sometimes I feel people. People in other worlds. Ones who... pick me. I don't know how else to say it." },
      { s: 'kiriko', f: 'happy', t: "There's a girl. She picks me every time. Over and over. She's really, really good. Like, scary good. Top of everything." },
      { s: 'kiriko', f: 'happy', t: "She won a tournament. A big one. Lights and screens and crowds. They called her name at the end. Most valuable player." },
      { n: "Something went through Solar like the warmth of the beam on the hospital roof. A headset. A screen. A hallway in a college building she'd never seen, full of people cheering. A name that was hers and wasn't." },
      { choose: [
        { t: "...I think I know her.", notes: 3, then: [
          { s: 'kiriko', f: 'surprised', t: '...' },
          { s: 'kiriko', f: 'neutral', t: "Yeah. I thought you might." },
          { n: "Kiriko looked at her for a long time, popsicle forgotten, dripping onto the stone." }
        ] },
        { t: "That's a lot of pressure, being picked.", notes: 2, then: [{ s: 'kiriko', f: 'serious', t: "It's not pressure. It's like being trusted. Every single time she chooses me, it's like she's saying, I trust you to keep them alive." }] }
      ] },
      { s: 'kiriko', f: 'neutral', t: "And she always plays with a boy. A sniper. He picks the scary sniper lady, the purple one. They always queue together." },
      { s: 'kiriko', f: 'happy', t: "He plays like he's hiding something. She plays like she's protecting everyone. They're kind of perfect, honestly." },
      { n: "Solar didn't know why her face went hot. She didn't know who the boy was. She just knew, somewhere under her ribs, that he was important, in a world she'd never live in." },
      { s: 'kiriko', f: 'happy', t: "Fortune time. And this one's for her too. The other you." },
      { s: 'kiriko', f: 'serious', t: "Dai-kichi again! \"Your hands are steadier than you think. Trust them.\"" },
      { n: "Solar folded the fortune and put it in her pocket. She had a feeling the other her would have liked it." }
    ] },

    { after: '7/26', title: '5: two supports', place: 'Tatsumi Memorial Hospital · 3F Ward', scene: [
      { n: "Kiriko had heard about the Apathy patients from a woman at the shrine, an old lady whose husband had stopped speaking in May. She'd come back from the conversation with a jaw set like a closed door." },
      { s: 'kiriko', f: 'serious', t: "Take me there. I want to try something." },
      { n: "So Solar took her to the hospital, to the third floor, where Dr. Angela Ziegler was doing rounds with her ugly scarf around her neck despite the heat, and the two of them looked at each other across the ward like two cats who'd both decided a room was theirs." },
      { s: 'mercy', f: 'surprised', t: "...Are those paper talismans?" },
      { s: 'kiriko', f: 'happy', t: "They're ofuda! They heal! Mostly!" },
      { s: 'mercy', f: 'serious', t: "'Mostly' is not a word I like to hear in my ward." },
      { choose: [
        { t: "Let her try, Angela. Please.", notes: 3, then: [
          { s: 'mercy', f: 'neutral', t: '...Fine. Under supervision.' },
          { s: 'kiriko', f: 'happy', t: "Supervision! Fun! I've never been supervised before!" },
          { s: 'mercy', f: 'sad', t: "I can tell." }
        ] },
        { t: "You two are going to be best friends.", notes: 2, then: [
          { s: 'mercy', f: 'flustered', t: "We are not." },
          { s: 'kiriko', f: 'happy', t: "We absolutely are." }
        ] }
      ] },
      { n: "Kiriko pressed an ofuda to the old man's forehead in bed five. It glowed, soft and green, and for one second his eyes moved, followed the light, found Kiriko's face. Then it faded, and he was gone again." },
      { n: "It wasn't a cure. But Angela stood very still and stared, and then took out a notebook and wrote something down, fast." },
      { s: 'mercy', f: 'surprised', t: "He responded. He tracked the light. Do that again. Do that on every bed." },
      { s: 'kiriko', f: 'surprised', t: "Every bed? Do you know how many ofuda that is?" },
      { s: 'mercy', f: 'happy', t: "I'll help you make them. I have very steady hands." },
      { n: "They worked through the whole ward, the doctor and the shrine girl, arguing the entire time about technique and dosage and whether you were allowed to throw a kunai at a wall to make a point. Solar sat on an empty bed and watched two healers from two different worlds figure each other out." },
      { s: 'kiriko', f: 'happy', t: "Fortune! You didn't think I'd forget, did you?" },
      { s: 'kiriko', f: 'neutral', t: "Chu-kichi. Middle blessing. \"Two lights in one room are not a competition.\"" },
      { s: 'mercy', f: 'happy', t: "...I'm putting that one on the wall." }
    ] },

    { after: '8/2', title: '6: kanezaka', music: 'tender', place: 'Naganaki Shrine', scene: [
      { n: "August, and the heat was a lid on the city. Kiriko was lying on the shrine's wooden porch with her arms flung out, staring at the rafters, too hot to sweep, too hot to move." },
      { s: 'kiriko', f: 'neutral', t: "In Kanezaka right now, there's a ramen shop that does cold noodles in summer. With yuzu. You sit by the river and eat them and your feet in the water." },
      { s: 'kiriko', f: 'happy', t: "And the festival's coming. Lanterns all down the main street. My grandmother makes the best taiyaki in the whole town. She makes me eat three." },
      { n: "She went quiet. A cicada sang somewhere and stopped." },
      { s: 'kiriko', f: 'sad', t: "...I miss it so much it hurts in my teeth." },
      { choose: [
        { t: "Tell me about it. Everything.", notes: 3, then: [
          { n: "She did. For an hour. The river and the bridge and the old cat that slept on the ramen shop sign, the bell at the top of the hill, the way the town smelled after rain, the way everyone said her name. Solar listened to every word. By the end it felt like a place she'd been." }
        ] },
        { t: "We'll find you a way home.", notes: 2, then: [{ s: 'kiriko', f: 'sad', t: "...Yeah. I know. I just want to complain about it first." }] }
      ] },
      { n: "There were footsteps on the gravel. Light, precise, mechanical at the edges." },
      { register: 'genji' },
      { s: 'genji', t: "I thought I sensed something familiar. You are a long way from Kanezaka, little fox." },
      { s: 'kiriko', f: 'surprised', t: "...Genji? What are YOU doing here?" },
      { s: 'genji', t: "The same as you, I suspect. Falling through the cracks of the world. Angela told me there was a shrine girl with ofuda. I hoped." },
      { n: "They talked about home for a while, the cyborg and the shrine girl, in a shorthand Solar only half understood, names of streets, names of people, a clan that had once ruled the whole region and didn't anymore. Kiriko laughed more in that half hour than she had all month." },
      { n: "When Genji faded, he bowed to Kiriko, and then, after a moment, to Solar." },
      { s: 'genji', t: "Thank you for keeping her company. She is not good at being alone. None of the brave ones are." },
      { s: 'kiriko', f: 'neutral', t: "Fortune... okay, I'm drawing one for me this time." },
      { s: 'kiriko', f: 'sad', t: "Kichi. \"Home is not a place. It is the people who say your name.\"" },
      { n: "She read it twice. Then she looked at Solar, and her eyes were wet, and she said, \"Sol-chan,\" just to hear it." }
    ] },

    { after: '8/20', title: '7: festival', music: 'sun', place: 'Naganaki Shrine · Summer Festival', scene: [
      { n: "The Naganaki summer festival came on a humid night at the end of August, and the whole shrine was transformed. Paper lanterns strung from every tree. Stalls lining the path selling takoyaki and cotton candy and goldfish in plastic bags. The air thick with smoke and sugar and the sound of a drum somewhere up the hill." },
      { n: "Kiriko had borrowed a yukata from somewhere, purple with white foxes printed on it, and she'd done her hair up with a flower, and she grabbed Solar's wrist at the bottom of the steps and didn't let go the entire night." },
      { s: 'kiriko', f: 'happy', t: "Taiyaki! They have taiyaki! It's not as good as Grandma's, but they HAVE it!" },
      { choose: [
        { t: "Three, right? That's the rule.", notes: 3, then: [
          { s: 'kiriko', f: 'surprised', t: '...You remembered.' },
          { n: "She looked at Solar like she'd been handed something precious, and then bought six." }
        ] },
        { t: "Let's try the goldfish game.", notes: 2, then: [
          { n: "Kiriko was terrible at the goldfish game. Solar was worse. They ripped seven paper scoops between them and won nothing, and laughed so hard the stall owner gave them a goldfish out of pity." },
          { s: 'kiriko', f: 'happy', t: "His name is Dai-kichi. Great Blessing. Obviously." }
        ] }
      ] },
      { n: "Half the dorm was there. Junpei won a giant stuffed bear and gave it to Yukari, who pretended to be annoyed. Akihiko ate an unreasonable amount of grilled squid. Shinjiro stood by the takoyaki stall critiquing the takoyaki under his breath. Koromaru had a little festival bandana on that Kiriko had tied herself." },
      { n: "At nine, the fireworks started over the bay. Everyone went quiet. Kiriko pulled Solar up to the very top of the shrine steps, where she said the view was best, and they sat there with their knees pulled up as the sky lit up gold and red and green." },
      { s: 'kiriko', f: 'neutral', t: "This is the first time since I got here that I didn't think about going home for a whole night." },
      { s: 'kiriko', f: 'happy', t: "That's your fault, Sol-chan. I'm blaming you." },
      { choose: [
        { t: "I'll take the blame.", notes: 3, then: [{ s: 'kiriko', f: 'flustered', t: "Good. You should. You're kind of the best, you know that?" }] },
        { t: "(Lean your head on her shoulder.)", notes: 3, then: [
          { n: "Kiriko went still for a second. Then she leaned back, so their heads were touching, and they watched the rest of the fireworks like that, two girls on a hundred and twelve steps, one of them very far from home." }
        ] }
      ] },
      { s: 'kiriko', f: 'neutral', t: "Festival fortune. These are special." },
      { s: 'kiriko', f: 'happy', t: "Dai-kichi. \"Tonight is one you will remember in every world.\"" },
      { n: "Solar thought, yes. She thought, I already do." }
    ] },

    { after: '10/10', title: '8: support and sniper', music: 'mystery', place: 'Moonlight Bridge', scene: [
      { n: "October, after dark. Kiriko had heard about the woman on Moonlight Bridge from three different people at the shrine. A tall woman. Purple skin. A rifle as long as a person. She stood on the bridge cables at night, they said, perfectly still, looking at nothing." },
      { s: 'kiriko', f: 'serious', t: "I know who that is. I don't want to know who that is. But I do." },
      { n: "They went at dusk, when the bridge lights came on. The woman was there. She was standing on the railing as if it were a sidewalk, coat snapping in the wind off the water, and she turned her head before they were within a hundred meters, like she'd heard them breathing." },
      { s: 'widowmaker', t: "The fox girl. And a stranger." },
      { s: 'kiriko', f: 'serious', t: "Widowmaker. Of course it's you. Of course the creepiest person from home fell through too." },
      { n: "Widowmaker looked at Kiriko the way you'd look at a mildly interesting insect. Then she looked at Solar. Then, for a strange, held second, she looked at Solar a little longer." },
      { s: 'widowmaker', t: "...Hm. You feel familiar, chérie. Like a support who always stands where I can see her." },
      { choose: [
        { t: "I get that a lot lately.", notes: 3, then: [{ s: 'widowmaker', t: "I imagine you do." }] },
        { t: "Kiriko, is she dangerous?", notes: 2, then: [
          { s: 'kiriko', f: 'surprised', t: "Extremely. Don't make eye contact. Too late. You made eye contact." },
          { s: 'widowmaker', t: "I am not working tonight. You may relax, little fox." }
        ] }
      ] },
      { n: "They stood on the bridge for a while, the three of them, a healer and a sniper and a girl from the dorm, watching the city lights double in the black water. Nobody said much. It was strange how much that felt like company." },
      { s: 'kiriko', f: 'neutral', t: "You know, in some other world, there are people who play as us. Together. A support and a sniper. Every match." },
      { s: 'widowmaker', t: "...A boy. Who hides. And a girl who protects everyone. Yes. I have felt him too." },
      { n: "Solar's heart did something very specific and unexplainable. She didn't know the boy. She'd never know the boy. But she could almost see him, somewhere under bright lights, choosing the purple sniper, again and again, beside a girl who chose the fox." },
      { s: 'kiriko', f: 'happy', t: "Fortune. For all three of us." },
      { s: 'kiriko', f: 'neutral', t: "Sue-kichi. Future blessing. \"Opposites cover each other's blind spots.\"" },
      { s: 'widowmaker', t: "...That is the first fortune I have ever received. It is acceptable." }
    ] },

    { after: '11/7', title: '9: the shrine in the dark hour', place: 'Naganaki Shrine · The Dark Hour', scene: [
      { n: "Midnight. The green hour. The moon a sick, swollen thing over the trees, the city below turned to coffins, the air thick and still and wrong." },
      { n: "Kiriko was standing on the top step of the shrine with her kunai out and her kitsune at her side, glowing, every hair on its back raised. Something was coming up the steps. Something big and black and full of hands." },
      { n: "Solar had come because she'd felt it. She didn't know how. She'd just woken in the dark and known Kiriko needed her." },
      { s: 'kiriko', f: 'surprised', t: "Sol-chan! You came! Okay. Okay okay okay. I've never fought one this big alone." },
      { choose: [
        { t: "You're not alone.", notes: 3, then: [{ s: 'kiriko', f: 'serious', t: "...Okay. Then let's go." }] },
        { t: "Where do you need me?", notes: 3, then: [{ s: 'kiriko', f: 'serious', t: "Left side. Stay in my line. I'll keep you alive. You keep it busy." }] }
      ] },
      { n: "It was the fight on the hospital roof all over again, and nothing like it. Kiriko was everywhere, flickering from step to step in bursts of light, kunai flashing, ofuda glowing green against Solar's skin every time the shadow got close, the fox spirit snapping at its edges like a living flame. And Solar moved where she knew she should move, felt the healing before it came, trusted it." },
      { n: "When the shadow broke apart into smoke and drifted away into the green, they were both on their knees on the gravel, gasping, laughing, covered in dirt and paper ash." },
      { s: 'kiriko', f: 'happy', t: "That was... that was amazing. That was like playing with somebody who's played with me a thousand times." },
      { s: 'kiriko', f: 'flustered', t: "Sol-chan. I need to say something and I need you to not make it weird." },
      { s: 'kiriko', f: 'serious', t: "You're my best friend. Not in this world. In any of them. I decided. It's final." },
      { choose: [
        { t: "You're mine too, Kiriko.", notes: 3, then: [
          { s: 'kiriko', f: 'surprised', t: '...' },
          { n: "Kiriko launched herself across the gravel and hugged her so hard they both fell over, and the kitsune, above them, made a sound that Solar would swear for the rest of her life was a laugh." }
        ] },
        { t: "That's very weird. I accept.", notes: 3, then: [{ s: 'kiriko', f: 'happy', t: "HA! Okay. Okay good. Weird best friends. Across worlds. That's a contract." }] }
      ] },
      { s: 'kiriko', f: 'happy', t: "Fortune. I'm drawing it in the green hour. That's probably illegal." },
      { s: 'kiriko', f: 'neutral', t: "...Dai-kichi. \"The bond you made tonight will outlast the moon.\"" }
    ] },

    { after: '12/12', title: '10: the suzu', place: 'Naganaki Shrine · First Snow', scene: [
      { n: "December. The first snow came in the night and stayed, a thin white layer over the whole shrine, over the fox statues in their red bibs, over the stone steps that had been scrubbed by hand every morning since May." },
      { n: "Kiriko was standing in the middle of the courtyard with her face turned up to the sky, catching snowflakes on her tongue like a child. She heard Solar on the steps and didn't turn around." },
      { s: 'kiriko', f: 'sad', t: "It snows in Kanezaka too. It's the first thing that's felt exactly like home." },
      { s: 'kiriko', f: 'neutral', t: "Elizabeth told me. When the year ends, the green hour goes away. The doors close. Everybody who fell through goes back." },
      { n: "She said it calmly. She'd clearly been practicing saying it calmly." },
      { choose: [
        { t: "I don't want you to go.", notes: 3, then: [{ s: 'kiriko', f: 'sad', t: "I know. I don't want to go either. And I really, really want to go. Both. At the same time. It's the worst." }] },
        { t: "You get to go home.", notes: 3, then: [{ s: 'kiriko', f: 'happy', t: "...Yeah. I do. And you're the reason I'm still okay enough to get there." }] }
      ] },
      { s: 'kiriko', f: 'flustered', t: "So. I made you something." },
      { n: "She held it out. A suzu. A little brass bell on a red cord, the kind that hung from shrine ropes, the kind she rang in the green hour to protect the people around her. It was warm, like it had been in her pocket for a long time." },
      { s: 'kiriko', f: 'neutral', t: "This one's mine. My Protection Suzu. Or it was. Now it's yours." },
      { s: 'kiriko', f: 'serious', t: "If you ring it, I'll hear it. Doesn't matter which world. I'll hear it, and I'll know you're okay." },
      { choose: [
        { t: "(Ring it.)", notes: 3, then: [
          { n: "Solar rang it. A small, clear sound in the snow. Kiriko closed her eyes and smiled like she'd felt it in her chest." },
          { s: 'kiriko', f: 'happy', t: "...Yep. Loud and clear." }
        ] },
        { t: "And if you ring yours?", notes: 3, then: [{ s: 'kiriko', f: 'happy', t: "Then you'll hear it in your dreams. That's how it works. I just decided." }] }
      ] },
      { s: 'kiriko', f: 'sad', t: "Okay. Last fortune. The big one. The year-end one." },
      { n: "She shook the box for a long time. She didn't look at the stick when it came out. She just pulled the paper and unfolded it and read it out loud without checking, like she already knew." },
      { s: 'kiriko', f: 'happy', t: "Dai-kichi. Great blessing. \"Whoever you are, in whatever world, you are loved there.\"" },
      { n: "Solar didn't ask if it was really what the paper said. She didn't need to. She put it in her pocket with the other nine, and the bell, and the snow kept falling on the hundred and twelve steps, and for a long time neither of them went inside." }
    ] }
  ]
});
