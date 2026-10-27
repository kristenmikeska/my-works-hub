/* Holiday invites (2026-10-21). FEMC_GAME_LINK_EXTRAS[link].holidays['M/D'] (format: core.js holidayInvites). On the
   morning of a holiday, each friend whose day is open texts `ask`; when the slot comes, Solar picks one of them (or her own
   plans). The scene plays only if she spends the day with them: each is the only chance at it in a playthrough. The P3
   calendar: Golden Week, Marine Day, the summer festival, Silver Week, Sports Day, the culture festival, Culture Day, Labor
   Thanksgiving, New Year's Eve and the New Year, Coming of Age Day (Christmas is the story's own, on 12/24). Romance stays
   romance only on a romance route (ifRoute); no holiday decides a route. Kat's notes: the Persona cast's links (Ann, Kasumi,
   Haru, Kuromi) belong to part 2 of the batch. */
(() => {
  const X = (window.FEMC_GAME_LINK_EXTRAS ||= {});
  const add = (id, days) => { (X[id] ||= {}).holidays = { ...((X[id] || {}).holidays || {}), ...days }; };

  add('junpei', {
    '4/29': { rank: 1, title: 'showa day', place: 'Iwatodai Strip', time: 'Daytime', bg: 'shopping-street', music: 'joy',
      ask: 'yo!! its showa day. u know what that means', yes: 'what does it mean', ok: 'it means OLD STUFF. dagashi shop. 20 min. bring coins', sorry: 'cant today, sorry!!', no: 'NOOO. ok. ill eat ur share',
      scene: [
        { n: "The dagashi shop at the end of the Strip had been there since before anybody's parents, a narrow wooden front with sliding glass doors and a grandmother inside on a stool behind a wall of penny candy, and Junpei walked into it like a man entering a cathedral." },
        { s: 'junpei', f: 'happy', t: "Showa Day, leader. Day of the old ways. Ten yen candy. Hundred yen cards. The machine in the back that steals your coins and gives you a plastic ring. This was my whole childhood. I'm giving you my childhood." },
        { n: "He bought too much. He bought the sour powder that turned your tongue blue and the fake cigarettes made of chalk and a card for a monster that didn't exist anymore, and he talked the whole time, about a park and a Sunday and a man who used to buy him exactly this, and he didn't say *before* once, and she noticed him not saying it." },
        { choose: [
          { t: "(Spend all your coins on the machine in the back.)", notes: 3, stat: { courage: 1 }, then: [
            { n: "The machine stole four of her coins and on the fifth spat out a plastic ring with a red stone the size of a cough drop. Junpei lost his mind. He made her put it on. He told the grandmother, who smiled at them both like she'd seen a thousand of these afternoons and liked every one." },
            { s: 'junpei', f: 'happy', t: "Twenty years I tried. Twenty. You do it in five. You're unbelievable. You're a menace." }
          ] },
          { t: "Who used to buy you this?", notes: 2, then: [
            { s: 'junpei', f: 'neutral', t: "...My old man. Every Sunday. After the park." },
            { n: "He held up the blue powder and looked at it in the light. Then he tore it open and poured half on his tongue and half on hers, and they walked back down the Strip with blue mouths, not talking, which was, she understood, the point." }
          ] },
          { t: "(Let him pick everything. Eat what he gives you.)", notes: 2, then: [
            { n: "She ate everything he handed her, in the order he handed it, and rated each one out of ten when he asked, and by the end he'd written her ratings on the back of a receipt and folded it into his wallet, and said it was for science, and it wasn't for science." }
          ] }
        ] }
      ] }
  });

  add('yukari', {
    '5/4': { rank: 1, title: 'greenery day', place: 'Naganaki Shrine', time: 'Daytime', bg: 'outside-shrine-day', music: 'day',
      ask: "it's greenery day. the azaleas at the shrine are out. want to go? i'll buy crepes after", yes: 'yes. crepes', ok: "ok. noon. don't wear the uniform, it's a day off", sorry: 'cant today, im sorry', no: "it's fine. i'll send you a picture",
      scene: [
        { n: "The azaleas at Naganaki had come out all at once, pink and white and a red so deep it looked wet, banked up both sides of the stone steps so thickly you walked up through them like walking up through a cloud, and Yukari had her phone out taking pictures of everything and deleting most of them." },
        { s: 'yukari', f: 'neutral', t: "My dad used to bring me to see flowers on the holidays. Not here. A park by our old place. He'd make me stand in front of every bush. I hated it." },
        { s: 'yukari', f: 'sad', t: "I'd give anything to hate it again." },
        { n: "She said it and then looked like she wished she hadn't, and held up the phone, and said *stand there*, in front of the reddest bush, in a voice that dared Solar to make anything of it." },
        { choose: [
          { t: "(Stand in front of the bush. Don't smile. Make her laugh.)", notes: 3, stat: { charm: 1 }, then: [
            { n: "She stood in front of the azaleas with the face of a woman at a passport office. Yukari lasted two seconds. Then she was laughing, bent over, the phone shaking, and the picture she took was blurred all the way through, and it was the one she kept." }
          ] },
          { t: "Then let's take the picture he would've taken.", notes: 3, then: [
            { s: 'yukari', f: 'blushing', t: "...He'd have made me stand in it too. Both of us. With the timer." },
            { n: "So they stood in it, both of them, with the phone propped on a stone lantern and the timer going, and Yukari counted down out loud and on *one* grabbed Solar's arm, and that was the picture." }
          ] },
          { t: "(Just walk with her for a while.)", notes: 2, then: [
            { n: "They walked the long way round the grounds without saying much. At the top Yukari put the phone away and didn't take it out again, and they sat on the steps and ate crepes with the flowers on both sides of them, and it was enough to just be there, which Yukari said was a stupid thing to say, and said anyway." }
          ] }
        ] }
      ] }
  });

  add('akihiko', {
    '5/5': { rank: 1, title: "children's day", place: 'Iwatodai · Riverside', time: 'Daytime', bg: 'park-2', music: 'day',
      ask: "children's day. river. i'm still walking, not running. i'll buy you a kashiwa mochi", yes: 'deal. walking', ok: 'meet you out front. ten minutes', sorry: 'cant today, sorry', no: 'ok. i’ll walk fast enough for both of us',
      scene: [
        { n: "Every house along the river had carp streamers up for Children's Day, black and red and blue and a tiny one at the bottom for the youngest, and the wind off the bay filled them so they swam in the air over the water, all facing the same way, like a school of fish going upriver." },
        { n: "Akihiko walked very fast and very upright with his ribs still taped under his T-shirt, and stopped under every pole, and looked up, and didn't say anything, until the fourth one." },
        { s: 'akihiko', f: 'neutral', t: "Where I grew up, there was one pole. For all of us. One black carp for every boy in the building. They ran out of carp." },
        { s: 'akihiko', f: 'neutral', t: "Shinji and I used to fight over who got to be the biggest one. Every year. I always let him win. He always knew I let him win." },
        { choose: [
          { t: "(Buy him a tiny carp streamer from the stall.)", notes: 3, then: [
            { n: "There was a stall on the bridge selling them on sticks, for children, and she bought the smallest one, blue, and handed it to him, and he stood holding it on the bridge in the wind, a grown man with taped ribs and a toy fish, and laughed out loud." },
            { s: 'akihiko', f: 'happy', t: "...I'm putting this on my door. Don't tell anyone why." }
          ] },
          { t: "Which one are you now?", notes: 2, then: [
            { s: 'akihiko', f: 'neutral', t: "The one that swims the hardest. Not the biggest. That's the one that gets anywhere." },
            { n: "He said it to the streamers. Then he ate both kashiwa mochi, his and hers, without noticing, and she didn't tell him, and he noticed on the walk home, and bought her two more." }
          ] },
          { t: "(Race him to the next pole. Walking.)", notes: 2, stat: { proficiency: 1 }, then: [
            { n: "She walked to the next pole as fast as walking goes. He matched her and then beat her by a step, out of breath, holding his side, grinning like a boy, and said that didn't count, they'd do it again in a week, running, properly, and that she'd better start practicing." }
          ] }
        ] }
      ] },
    '8/16': { rank: 4, slot: 'evening', title: 'summer festival', place: 'Naganaki Shrine · Summer Festival', time: 'Evening', bg: 'naganaki-shrine-festival', music: 'date',
      ask: "festival tonight. at the shrine. i'm going. if you're going too, i'll walk you", yes: 'ill be ready at 7', ok: "7. yukari says i have to wear a yukata. i don't know how", sorry: 'i cant tonight. im sorry', no: "ok. i'll bring you back a goldfish. kidding. maybe",
      scene: [
        { n: "He was waiting on the dorm steps at seven in a dark blue yukata that Yukari had clearly tied on him herself, with a resigned expression and his running shoes on underneath, and when Solar came down he stood up too fast and looked at her, and then at the street, and then at her again." },
        { s: 'akihiko', f: 'blushing', t: "...You look. That's. Yukari did yours too?" },
        { n: "The shrine was lanterns all the way up, red and white, and the stalls down both sides of the steps smelling of grilled squid and sugar and smoke, and the crowd moving up the hill slow and warm like a river going the wrong way. He walked half a step ahead of her through it, turned slightly, one arm out, the way he walked her through a crowd of Shadows." },
        { s: 'akihiko', f: 'neutral', t: "Goldfish. I've never won one. Twelve years. The paper always breaks." },
        { choose: [
          { t: "(Win him one.)", notes: 3, stat: { proficiency: 1 }, then: [
            { n: "Her paper held. She didn't know why her hands knew to go in at an angle and come up slow and flat, but they did, and the little orange fish landed in the bowl, and the old man running the stall gave her a bag of water with it inside and held out his hand to Akihiko for the next try, and Akihiko said no, very firmly, no, he'd seen enough." },
            { s: 'akihiko', f: 'happy', t: "Twelve years. You did it in one. I'm naming it after you. It's going in the lounge." }
          ] },
          { t: "(Hand him your paper scoop. Try again.)", notes: 2, then: [
            { n: "He tried again. The paper broke. He tried a third time, with her hand on his wrist telling him slower, slower, and it broke again, and he started laughing with his whole chest in the middle of the festival, and it was the best thing she saw all night." }
          ] },
          { t: "(Pull him up the last steps. Fireworks.)", notes: 3, then: [
            { n: "She pulled him up by the sleeve of the yukata to the top of the hill just as the first firework went up over the bay, and the whole crowd went quiet the way crowds do. He didn't watch the fireworks. She knew because she wasn't watching them either. When she looked over he was already looking at her, lit gold and then green and then gold, and he didn't look away, and neither did she, until the last one." },
            { ifRoute: 'romance', then: [{ n: "On the way down his hand found hers in the crowd, to keep from losing her, he'd have said, and stayed there all the way to the dorm, and neither of them mentioned it." }] }
          ] }
        ] }
      ] },
    '1/1': { rank: 7, slot: 'evening', flag: 'year-goes-on', title: 'the first night of the year', place: 'Iwatodai · Riverside', time: 'Evening', bg: 'iwatodai-riverside-night', music: 'tender',
      ask: "everything's closed. hagakure's closed. i'm going to the river anyway. come", yes: 'coming', ok: 'bring a coat. the good one', sorry: 'not tonight. im sorry', no: "ok. happy new year. i'll run for both of us tomorrow",
      scene: [
        { n: "The whole city was closed for the new year. The Strip had its shutters down and Hagakure had a paper sign on the door in the cook's furious handwriting, *CLOSED. GO HOME. SEE YOU THE 4TH*, and the only things open were the convenience store on the corner and the river, and Akihiko had bought out most of the convenience store." },
        { n: "They sat on the bench by the bridge in their coats with the bag between them, rice balls and fried chicken and two cans of hot corn soup, and their breath going up white, and the lights of Port Island on the water, and for a long time neither of them said anything, because neither of them needed to." },
        { s: 'akihiko', f: 'neutral', t: "First year in a long time I didn't want the year to end. Usually I can't wait. Usually it's just one more year I have to get through." },
        { choose: [
          { t: "And this one?", notes: 3, then: [
            { s: 'akihiko', f: 'neutral', t: "This one I'd have done twice." },
            { ifRoute: 'romance', then: [
              { n: "He said it to the water, and then he turned his head and said it again to her, quieter, and she leaned her head on his shoulder, and his hand came up and rested on the back of her head, very lightly, the way you'd hold something you'd been trusted with, and stayed there." }
            ], else: [
              { n: "He said it to the water, and then he tapped his can against hers, and she knew exactly what he meant, and that was the best thing about him, that he never made her say it back." }
            ] }
          ] },
          { t: "(Give him your chicken.)", notes: 2, then: [
            { n: "She put her fried chicken in his bag without looking, the way he put his egg in her bowl. He noticed. He looked at it, and at her, and laughed, short and surprised, and ate it, and said that was the most romantic thing anyone had ever done for him, and then went red to the ears, and said he meant athletically." }
          ] }
        ] }
      ] }
  });

  add('mitsuru', {
    '5/6': { rank: 1, title: 'a family restaurant', place: 'Paulownia Mall', time: 'Daytime', bg: 'inside-mall', music: 'joy',
      ask: "If you're free today, I'd like to visit a family restaurant. I've never been to one. I'm told there is a drink bar.", yes: 'omg yes. the drink bar is the best part', ok: 'Excellent. One o’clock. I’ve researched the menu.', sorry: 'cant today, im so sorry', no: 'Another time, then. I’ll keep the research.',
      scene: [
        { n: "Mitsuru sat in the booth with the laminated menu open in front of her like a contract she'd been asked to sign without a lawyer present, and read every page, including the one about allergens, and the one about the kids' meal, which came with a toy." },
        { s: 'mitsuru', f: 'neutral', t: "And the drink bar is... unlimited. For a flat fee. You simply go up. As many times as you like." },
        { s: 'mitsuru', f: 'surprised', t: "That can't be sustainable." },
        { choose: [
          { t: "(Show her how to mix every soda into one glass.)", notes: 3, stat: { charm: 1 }, then: [
            { n: "Solar mixed her a glass of all of them, a brown fizzing horror called, by every child in the country, a *suicide*, which Solar renamed on the spot a *special*. Mitsuru tasted it. Her face did nothing for three full seconds. Then she went up to the drink bar herself, alone, and came back with a second one, and drank it with total composure, and said it was dreadful, and went back for a third." }
          ] },
          { t: "You can just order what you want. Nobody's watching.", notes: 2, then: [
            { s: 'mitsuru', f: 'neutral', t: "...Somebody is always watching. That's how I was raised. But you're right. Today, nobody." },
            { n: "She ordered the hamburg steak with the egg on top, and the kids' dessert with the little flag in it, and ate both with a knife and fork in perfect silence, and when she was finished she put the flag in her blazer pocket, very carefully, and didn't explain." }
          ] }
        ] }
      ] },
    '12/31': { rank: 6, flag: 'year-goes-on', title: "new year's eve", place: 'Iwatodai Strip', time: 'Daytime', bg: 'location-2', music: 'tender',
      ask: "I intend to buy soba for tonight. For the whole household. I'd value a second opinion. And a second pair of hands.", yes: 'second pair of hands reporting', ok: 'Thank you. Noon, at the front door. I’ve made a list.', sorry: 'cant today. im so sorry', no: 'Of course. I’ll buy too much on my own, then.',
      scene: [
        { n: "The noodle shop on the Strip had a line out the door on New Year's Eve, the whole neighborhood buying toshikoshi soba for the night, and Mitsuru stood in it in her good coat with a list that ran to two pages and the posture of a woman who had never once in her life stood in a line." },
        { s: 'mitsuru', f: 'neutral', t: "Long noodles, for a long life. You eat them before midnight and the year's troubles are cut off with them. I looked it up. My family had it served. I never once saw it bought." },
        { s: 'mitsuru', f: 'sad', t: "This year I'd like to have bought it. For them. With my own hands. Is that foolish?" },
        { choose: [
          { t: "It's not foolish. It's the best idea you've had all year.", notes: 3, then: [
            { s: 'mitsuru', f: 'neutral', t: "...I've had a number of good ideas this year." },
            { s: 'mitsuru', f: 'neutral', t: "But thank you." },
            { n: "She bought soba for twenty. The shopkeeper asked if she was feeding a team, and she said yes, she was, and said it with something in her voice Solar had never heard there before, and carried the heaviest bag herself all the way home." }
          ] },
          { t: "(Take the list. Read it out like an operation briefing.)", notes: 2, stat: { charm: 1 }, then: [
            { n: "She read it out in Mitsuru's own voice, *the readings indicate four bundles of soba and two of tempura*, and the line around them laughed, and Mitsuru put a hand over her eyes and said that was insubordination, and was smiling behind her hand the whole way to the counter." }
          ] }
        ] }
      ] }
  });

  add('fuuka', {
    '7/20': { rank: 1, title: 'marine day', place: 'Port Island · Seaside Park', time: 'Daytime', bg: 'port-island-seaside-park', music: 'sun',
      ask: "senpai, it's marine day. i want to listen to the sea. is that strange? i'd like to listen to it with someone", yes: 'not strange. lets go', ok: 'thank you!! i’ll bring the radio. and lunch. attempt 41', sorry: 'cant today, sorry fuuka', no: 'that’s ok!! i’ll record it for you',
      scene: [
        { n: "Fuuka had brought an old portable radio from the dorm's storeroom and a small recorder of her own and a bento she'd labeled *Attempt 41: Marine Day*, and she set all three out on the sea wall at the edge of the park in a neat row and then just sat with her eyes closed and her hands in her lap, listening." },
        { s: 'fuuka', f: 'neutral', t: "When I hear the tower, it sounds like this. Waves. A long way out. Coming in and going out." },
        { s: 'fuuka', f: 'happy', t: "I wanted to hear the real one. So I'd know the difference." },
        { choose: [
          { t: "(Close your eyes and listen too.)", notes: 3, then: [
            { n: "She closed her eyes. The sea, and the gulls, and a child somewhere down the wall shrieking at a crab. Fuuka's breathing slowed beside her. After a long time Fuuka said, very softly, that this one was better, that this one didn't want anything, and Solar said she knew, and she did." }
          ] },
          { t: "(Eat Attempt 41. Rate it honestly.)", notes: 2, then: [
            { n: "It was good. Not perfect, the rice a little hard at the edges, but good, and she said so, honestly, with the hard edges included, and Fuuka wrote down *good (honest)* in her notebook, and underlined *honest* twice, and looked happier about that than about the good." }
          ] },
          { t: "What does the tower sound like on a bad night?", notes: 2, stat: { knowledge: 1 }, then: [
            { s: 'fuuka', f: 'sad', t: "Like the sea, but nobody's ever coming in. Just going out." },
            { s: 'fuuka', f: 'neutral', t: "And then you call my name, senpai, on the comm, and it comes back in. Every time." }
          ] }
        ] }
      ] }
  });

  add('shinjiro', {
    '7/20': { rank: 2, title: 'the fish market', place: 'Port Island · Fish Market', time: 'Early Morning', bg: 'port-island-fish-market', music: 'tender',
      ask: 'market. 6. if you want', yes: 'ill be there', ok: 'bring a bag', sorry: 'cant today', no: 'fine',
      scene: [
        { n: "The fish market on Marine Day at six in the morning was wet concrete and ice and men shouting prices in a language that was mostly numbers, and Shinjiro moved through it in his coat with his hands in his pockets like he'd been born on the floor of it, stopping at stall after stall and looking at fish the way other people looked at paintings." },
        { s: 'shinjiro', f: 'neutral', t: "Eyes. Clear, not cloudy. Gills red. Press the side, it should come back. If it doesn't come back, walk away." },
        { n: "He bought two mackerel and a bag of clams and said almost nothing else, and handed her the bag to carry, and walked half a step behind her the whole way out, which she didn't notice until they were outside, in the sun, and she turned around and he was there." },
        { choose: [
          { t: "Why did you bring me?", notes: 2, then: [
            { s: 'shinjiro', f: 'neutral', t: "You said you can't cook." },
            { s: 'shinjiro', f: 'neutral', t: "Can't cook if you can't shop. Start at the start." },
            { n: "It was, she understood, the longest sentence he was going to give her about it, and also an answer to a different question, and she carried the bag home without asking the other one." }
          ] },
          { t: "(Press the side of the next fish yourself.)", notes: 3, stat: { proficiency: 1 }, then: [
            { n: "It came back. She looked at him. He looked at the fish, and at her finger, and nodded, once, the way he'd nod at a pot that had come to the right boil, and bought that one too, and on the way home he said, to the road, *good eye*, and nothing else, and it was enough to carry her all day." }
          ] }
        ] }
      ] }
  });

  add('ken', {
    '8/16': { rank: 1, slot: 'evening', title: 'summer festival', place: 'Naganaki Shrine · Summer Festival', time: 'Evening', bg: 'naganaki-shrine-festival', music: 'joy',
      ask: 'Solar-san, there is a festival at the shrine tonight. Koromaru would like to attend. I am going for him.', yes: 'for koromaru. of course', ok: 'Thank you. I will tell him.', sorry: 'I cant tonight ken, im sorry', no: 'I understand. He will be disappointed but he will forgive you.',
      scene: [
        { n: "Ken walked up the festival steps with Koromaru on his lead and his hands very tidy and his face very serious, the face of a boy who was here strictly in a supervisory capacity, and stopped dead at the third stall." },
        { n: "Masks. A whole wall of them, plastic, on sticks and on strings, cartoon cats and foxes and a row of heroes in bright colors, and in the middle of the row, red and gold, with a beak, Featherman." },
        { s: 'ken', f: 'neutral', t: "That's for children." },
        { s: 'ken', f: 'serious', t: "I'm only looking at it because Koromaru is looking at it." },
        { n: "Koromaru was looking at a takoyaki stall in the other direction." },
        { choose: [
          { t: "(Buy two. Wear one. Hand him the other.)", notes: 3, then: [
            { n: "She put on the yellow one. She held out the red one. Ken looked at it, and at her, standing in the middle of a festival in a plastic mask with no shame at all, and something in his face gave up, gratefully, and he put it on. They walked the rest of the festival like that. Two Feathermen and a dog. Three children asked for photographs. Ken posed for every one." }
          ] },
          { t: "Koromaru definitely wants it.", notes: 2, then: [
            { s: 'ken', f: 'happy', t: "...He does. He does want it. I'll get it for him." },
            { n: "He bought it for Koromaru. He tied it on the dog's collar, where it hung sideways, and Koromaru wore it with tremendous dignity all night, and Ken checked on it every few minutes, adjusting the angle, very gently, for the dog's sake." }
          ] },
          { t: "(Win Koromaru takoyaki at the ring toss instead.)", notes: 2, stat: { proficiency: 1 }, then: [
            { n: "She won. Koromaru ate the takoyaki with total devotion, one at a time, out of Ken's hand. On the way home Ken looked back, once, at the mask stall, and then up at Solar, and said thank you for the takoyaki, and didn't say anything about the masks, and she went back the next day and bought the red one and left it on his desk with no note." }
          ] }
        ] }
      ] }
  });

  add('hanni', {
    '9/21': { rank: 1, events: ['a4-names'], title: 'respect for the aged', place: 'Iwatodai Strip', time: 'Daytime', bg: 'shopping-street', music: 'joy',
      ask: 'sol!! its respect for the aged day!! i want to bring something to the bakery grandma. help me pick?? :)', yes: 'omg yes', ok: 'yay!! 11 at the bakery!!', sorry: 'cant today im so sorry', no: "it's ok!! i'll tell her u said hi!!",
      scene: [
        { n: "The grandmother who ran the bakery on the Strip had given Hanni free rolls on her second day because Hanni bowed too much, and had kept giving her free rolls every day since, and Hanni had decided, with the moral seriousness of a girl who could not let a kindness go unanswered, that the debt was now unbearable." },
        { s: 'hanni', f: 'serious', t: "Flowers? Is flowers too much? Is it weird to bring flowers to a bakery? At home I'd bring flowers. But at home I know what everything means." },
        { choose: [
          { t: "Bring the flowers. She'll know what they mean.", notes: 3, stat: { kindness: 1 }, then: [
            { n: "They brought the flowers. The grandmother held them in both floury hands and looked at Hanni for a long time, and said something in Japanese too fast for Hanni to follow, and Solar translated it without thinking, *she says nobody's brought her flowers since her husband*, and Hanni burst into tears in the middle of the bakery, and the grandmother gave her a roll." }
          ] },
          { t: "Bake her something. She makes bread all day. Nobody makes her anything.", notes: 3, stat: { proficiency: 1 }, then: [
            { n: "They baked in the dorm kitchen all afternoon, a lopsided sponge cake from a recipe in Fuuka's notebook, and carried it to the bakery at closing, and the grandmother laughed so hard she had to sit down on her stool, and then ate a slice right there, at the counter, and pronounced it terrible, and asked for the recipe." }
          ] }
        ] }
      ] },
    '10/30': { rank: 3, events: ['a4-names'], title: 'culture festival', place: 'Gekkoukan High · Classroom', time: 'After School', bg: 'gekkoukan-classroom-evening', music: 'joy',
      ask: "sol!! ur school festival is open to the public?? we're coming. hyein's coming. hyein's wearing something", yes: 'come to my class cafe!! ill save u a table', ok: 'OMW!! (hyein says the aprons better be the ones she made)', sorry: 'cant today, im working the cafe. im sorry!!', no: 'ok!! next time!! work hard!!',
      scene: [
        { n: "The storm had blown the outdoor stalls into the gym and the gym into chaos, and Solar's class café was the only room on the third floor still serving, by candlelight, because the power kept flickering, and Hanni and Hyein came through the door dripping and laughing with an umbrella that had turned itself inside out on the bridge." },
        { s: 'hyein', f: 'happy', t: "THE APRONS. Look at them. Look at them on actual people. Hanni. I've been published." },
        { s: 'hanni', f: 'happy', t: "Two coffees and whatever's the cutest thing on the menu! And whatever she recommends! We're very important customers!" },
        { n: "Solar served them. She did it properly, in the apron with the ruffle, the tray balanced on one hand the way her hand seemed to know, and they sat at the table by the window with the rain going sideways against it and watched her work like it was a show they'd bought tickets for." },
        { choose: [
          { t: "(Sit with them on your break.)", notes: 3, then: [
            { n: "She sat down with them on her break and they talked over each other for fifteen minutes about the bridge and the umbrella and a boy in the hallway in a bear costume, and a girl from her class came over to ask Hyein where she'd bought the aprons, and Hyein, very slowly, very proudly, said she *made* them, and gave the girl her name, and spelled it." }
          ] },
          { t: "(Bring them the cutest thing on the menu, on the house.)", notes: 2, stat: { charm: 1 }, then: [
            { n: "It was a pudding with a cat face drawn on it in chocolate sauce. Hanni photographed it from eleven angles. Hyein ate it while Hanni was still photographing it. They fought about this, delighted, all the way back to the dorm in the rain." }
          ] }
        ] }
      ] }
  });

  add('jihoon', {
    '9/22': { rank: 1, events: ['a4-ice-cream'], title: "citizens' holiday", place: 'Port Island · Pier', time: 'Daytime', bg: 'port-island-pier', music: 'joy',
      ask: 'SOL. holiday. i have Located the best ice cream in this entire city. this is a Summons', yes: 'HEHEHE omw', ok: 'pier. 2pm. Do Not Be Late. the ice cream waits for No One', sorry: 'cant today!! sorry!!', no: 'wow. #brocken. ill eat urs',
      scene: [
        { n: "The best ice cream in the entire city, as located by Park Jihoon after an investigation he described as exhaustive, turned out to be a van parked at the end of the Port Island pier with a hand-painted sign and one flavor, vanilla, which he ordered for both of them with the air of a man unveiling a monument." },
        { s: 'jihoon', f: 'happy', t: "Taste it. Taste it and tell me I'm a genius. Go on. I'll wait. I have nowhere to be. I live in a guesthouse." },
        { n: "It was very good. It was also, very obviously, the ordinary vanilla soft serve you could get anywhere, and she knew that he knew that, and he knew she knew, and neither of them said it, because the point had never been the ice cream." },
        { choose: [
          { t: "Genius. Certified.", notes: 3, then: [
            { s: 'jihoon', f: 'happy', t: "I KNEW it. I'm writing it down. You said it. On a holiday. There are witnesses. That seagull." },
            { n: "They ate it on the edge of the pier with their feet over the water, and he told her about the ice cream runs at home, how he always got to her door first, every time, without fail, for years, and she laughed in the right places without remembering any of it, which he said counted, which he said was basically the same as remembering." }
          ] },
          { t: "It's just vanilla, Jihoon.", notes: 2, then: [
            { s: 'jihoon', f: 'serious', t: "It is NOT just vanilla. It's vanilla on a pier. On a holiday. With me. That's three extra ingredients." },
            { n: "He said it so seriously, licking a drip off his wrist, that she had to agree with him, and she did, and he made her say it again for the seagull." }
          ] }
        ] }
      ] }
  });

  add('hyein', {
    '9/23': { rank: 1, events: ['a4-names'], title: 'the equinox', place: 'Paulownia Mall · Shop Windows', time: 'Daytime', bg: 'clothing-store', music: 'joy',
      ask: "ok so there's a fabric sale at the mall. a HOLIDAY fabric sale. i need a second opinion and a bag carrier. you are both", yes: 'reporting for bag duty', ok: 'perfect. noon. wear comfortable shoes this is a marathon', sorry: 'cant today, sorry hyein', no: 'ok. i will suffer alone. among the fabric',
      scene: [
        { n: "The fabric shop on the mall's second floor had put everything on sale for the holiday, and Hyein went through it like a general through a captured city, pulling bolts off shelves, holding them up to the window, holding them up to Solar's face, putting them back with sighs that could be heard two aisles away." },
        { s: 'hyein', f: 'serious', t: "No. No. That one makes you look like a hospital. That one makes you look like a hospital's gift shop. Hold still. This one. Oh. This one." },
        { n: "It was a deep warm red, almost brown in the folds, the color of the inside of a pomegranate. Hyein held it against Solar and didn't say anything at all for once, and then put it down on the counter without looking at the price." },
        { s: 'hyein', f: 'neutral', t: "Equinox today. Day and night the same length. Fuuka says people here eat red bean rice cakes today. For the people who aren't here anymore." },
        { choose: [
          { t: "Then let's buy red bean rice cakes on the way home.", notes: 3, then: [
            { n: "They bought six from the shop by the station and ate four on the monorail and saved two, and Hyein put the two on the windowsill of her room that night, by the window, on a napkin, and didn't explain it to anyone, and Solar didn't ask her to." }
          ] },
          { t: "What are you going to make with the red?", notes: 2, stat: { charm: 1 }, then: [
            { s: 'hyein', f: 'happy', t: "Something you'd never pick for yourself. Something loud. You're going to hate it and then you're going to wear it every day." },
            { n: "She was, as it turned out, exactly right, on both counts, though that took until November." }
          ] }
        ] }
      ] },
    '1/2': { rank: 5, flag: 'year-goes-on', title: 'lucky bags', place: 'Paulownia Mall', time: 'Daytime', bg: 'inside-mall', music: 'joy',
      ask: 'LUCKY BAGS. sol. sol. the mall opens at 10 and there are LUCKY BAGS', yes: 'omg lets go', ok: "9:30 at the door. we're getting there early. this is war", sorry: 'cant today, sorry!!', no: "i'll get u one. dont ask what's in it. i dont know either",
      scene: [
        { n: "The mall on the second of January was a crowd of people who had been waiting since dawn for the doors to open on the year's first sale, and when they opened Hyein went in like a swimmer off a block, and came out twenty minutes later with three sealed paper bags from three different shops and the face of a woman who had fought for them and won." },
        { s: 'hyein', f: 'happy', t: "You don't know what's inside. That's the point. You pay and you find out. It's gambling but it's fashion. It's the best thing this country has ever invented." },
        { choose: [
          { t: "(Open one together, right there on the floor.)", notes: 3, then: [
            { n: "They sat on the floor by the fountain and opened the first one. A scarf, a cardigan, a pair of socks with cats on them and one very strange hat. Hyein held up each thing to the light and delivered a verdict on it, and the hat she put on Solar's head and took a photo, and the photo was, she said, the most important document of the year." }
          ] },
          { t: "Which one's mine?", notes: 2, then: [
            { s: 'hyein', f: 'neutral', t: "The third one. I picked the shop for you. Don't open it till you're home. I want you to open it in your room. Where it's yours." },
            { n: "She opened it that night in her room. Inside, among the shop's things, there was a fourth thing that hadn't come from any shop, a small cloth pouch in pomegranate red with her name stitched on it in tiny suns." }
          ] }
        ] }
      ] }
  });

  add('minji', {
    '10/12': { rank: 2, events: ['a4-lamppost'], title: 'sports day', place: 'Iwatodai · Riverside', time: 'Daytime', bg: 'park-2', music: 'joy',
      ask: "there's a neighborhood sports day at the river. little kids. relay races. can i film it? i'd like you there. not in it. just there", yes: 'ill be there', ok: 'ok. 10. by the lamp', sorry: 'cant today, sorry minji', no: "ok. i'll show you later. if you want",
      scene: [
        { n: "The neighborhood sports day was taking place on the flat grass by the river, a hundred children in red caps and white caps and a hundred parents with cameras, and a man with a megaphone announcing every race as if it were the Olympics, and Minji stood at the edge of it with her camera up, filming not the races but the people watching them." },
        { s: 'minji', f: 'neutral', t: "Everybody films the finish. Nobody films the dad crying at the start. That's the good part." },
        { n: "Then the man with the megaphone announced the friends-and-family three-legged race and pointed straight at the two of them, standing there conspicuously unrelated to any child, and a grandmother pressed a strip of cloth into Solar's hand." },
        { choose: [
          { t: "(Tie your ankle to hers.)", notes: 3, stat: { courage: 1 }, then: [
            { s: 'minji', f: 'flustered', t: "I... we... okay. Okay. Hold the camera. No. I'll hold the camera. Both of us. Hold it together." },
            { n: "They ran it holding the camera between them, filming the sky and the grass and their own feet tangling, and fell at the halfway mark, and got up, and finished last, by a long way, laughing so hard they couldn't stand, and the footage, when Minji played it back that night, was mostly sky, and was her favorite thing she'd shot all month." }
          ] },
          { t: "(Give the cloth to a dad and his kid instead.)", notes: 2, stat: { kindness: 1 }, then: [
            { n: "She gave it to a father who'd been hovering at the line with a small boy who wanted very badly to race, and they ran it, and lost, and the boy cried, and the father carried him the rest of the way on his shoulders, and Minji filmed every second of it with her lip between her teeth, and afterward said that was the good part, that was the whole good part." }
          ] }
        ] }
      ] }
  });

  add('jungwon', {
    '11/3': { rank: 2, title: 'culture day', place: 'Port Island · Museum', time: 'Daytime', bg: 'port-island-museum', music: 'day',
      ask: "the city museum is free today. culture day. i'd like to go. i'd like to go with you, specifically.", yes: 'MUSEUM DATE :D', ok: "it's not a date. it's an educational outing. noon. i'll be at the station.", sorry: 'cant today!! sorry!!', no: "that's fine. i'll take notes for you.",
      scene: [
        { n: "The city museum on Culture Day was free and half empty, a cool high building of glass cases and polished floors, and Jungwon walked it the way he did everything, slowly and in order, reading every placard all the way to the end, including the donor's name, with his hands clasped behind his back." },
        { s: 'jungwon', f: 'neutral', t: "At home I'd have a council meeting today. On a holiday. Because someone would schedule one. Because it would be me." },
        { s: 'jungwon', f: 'neutral', t: "I don't know what to do with a day that nobody's scheduled. I thought I'd look at old things. Old things don't need anything from you." },
        { n: "They stopped in front of a case of maps, old ones, the bay drawn by hand three hundred years ago, the coast in the wrong place and a sea serpent in the corner where nobody had been. He looked at it for a long time." },
        { choose: [
          { t: "They didn't know what was out there, so they drew something.", notes: 3, stat: { knowledge: 1 }, then: [
            { s: 'jungwon', f: 'neutral', t: "Yes. That's exactly it. They'd rather draw a monster than leave it blank." },
            { s: 'jungwon', f: 'flustered', t: "...I'd rather leave it blank. With you. Than draw anything you didn't put there yourself." },
            { n: "He said it to the map, very formally, and then moved on to the next case quickly, as if the map might repeat it, and she followed him, and her face was warm for the rest of the museum." }
          ] },
          { t: "(Read the placards out loud, in his voice.)", notes: 2, stat: { charm: 1 }, then: [
            { n: "She read the next placard in his exact tone, measured and courteous, donor's name and all. He stopped. He looked at her with no expression. Then the dimples happened, both of them, deep, helpless, and he turned away to the wall to hide them and his shoulders shook, and a guard looked over at them, and he bowed to the guard, still shaking." }
          ] }
        ] }
      ] },
    '1/3': { rank: 6, flag: 'year-goes-on', title: 'the first writing', place: 'Iwatodai Dorm · Dining Room', time: 'Daytime', bg: 'iwatodaidorm-diningroom', music: 'tender',
      ask: "i've brought brushes and ink from the stationery shop. kakizome. the first writing of the year. may i come to the dorm?", yes: 'yes!! come over', ok: "thank you. i've put my name on the whiteboard. in advance.", sorry: 'cant today, sorry', no: "that's alright. i'll write yours for you. you'll hate my handwriting.",
      scene: [
        { n: "Jungwon set out the brushes on the dining table on a sheet of newspaper, two inkstones, two long strips of white paper weighted at the corners with Fuuka's teacups, and knelt in front of his with his sleeves rolled exactly to the elbow and his back very straight." },
        { s: 'jungwon', f: 'neutral', t: "You write the word you want for the year. One word. Without stopping. If you stop, it shows." },
        { n: "He wrote his in four strokes, without stopping. It was a word she didn't know how to read in this language and knew anyway, the way she knew the word for her own name. It meant something like *steady*. Something like *stay*. He looked at it afterward as if he'd surprised himself." },
        { choose: [
          { t: "(Write yours without stopping.)", notes: 3, then: [
            { n: "She wrote it without stopping, and didn't look until it was done. It was a word that meant *choose*. Her hand had written it the way her hands did things here, before she'd decided. Jungwon looked at it for a long time. He didn't say anything about it. He weighted the corners with two more teacups so it would dry flat, carefully, as if it were his." }
          ] },
          { t: "(Stop halfway. Let it show.)", notes: 2, then: [
            { n: "She stopped halfway. The ink pooled where the brush paused, a dark blot in the middle of the stroke. She thought he'd say she'd done it wrong. He didn't." },
            { s: 'jungwon', f: 'neutral', t: "That's honest. You don't know yet. It shows that you don't know. I'd rather have that than a lie in good handwriting." }
          ] }
        ] }
      ] }
  });

  add('haechan', {
    '11/23': { rank: 2, title: 'labor thanksgiving', place: 'Paulownia Mall · Record Shop', time: 'Daytime', bg: 'record-shop-listening-booth', music: 'tender',
      ask: "holiday. record shop at the mall has listening booths. one booth's good. the rest are bad. come", yes: 'ok. which one is good', ok: "you'll hear it. 2", sorry: 'cant today, im sorry', no: 'mm. ok',
      scene: [
        { n: "The record shop on the mall's lower level had five listening booths along the back wall, glass boxes with a stool and a pair of old headphones each, and he walked past the first four without looking at them and stopped at the fifth and held the door for her." },
        { s: 'haechan', f: 'neutral', t: "Others have a hum. Bad grounding. You don't hear it till you hear it, and then you can't stop. This one's clean." },
        { n: "It was very small. Two people in it was a lot of people. He put a record on, not one she knew, something with a piano and nothing else, and gave her the headphones, and stood against the glass with his hands in his hoodie pocket and watched her listen with the face he wore when he was hearing a room." },
        { choose: [
          { t: "(Take one side off. Hold it out to him.)", notes: 3, then: [
            { n: "She held the left side out. He looked at it. Then he bent his head and took it, and they stood in the clean booth with one side each, the cord pulling them a hand's width apart and no further, and the piano went on, and outside the glass a whole holiday crowd went past and none of them could hear it." }
          ] },
          { t: "Labor Thanksgiving. Thank you for your labor.", notes: 2, then: [
            { s: 'haechan', f: 'neutral', t: "...What labor." },
            { s: 'solar', f: 'neutral', t: "Finding the one booth that doesn't hum." },
            { n: "His mouth moved at the corner. He didn't say anything. He picked another record, and put it on, and this time it was one she knew, the song, hers, the one that stopped, and he'd found a version of it somewhere that went four bars further, and he watched her face while it did." }
          ] }
        ] }
      ] }
  });

  add('yunjin', {
    '11/23': { rank: 4, title: 'labor thanksgiving', place: 'Port Island · Harbor', time: 'Daytime', bg: 'harbor', music: 'tender',
      ask: "babe it's labor thanksgiving day. we're thanking workers. we're bringing coffee to the harbor. don't argue", yes: 'im not arguing. coming', ok: "good. i bought 20 cans. i can't carry 20 cans", sorry: 'cant today jin, im sorry', no: 'ok. i’ll carry 20 cans alone like a martyr',
      scene: [
        { n: "The harbor didn't close for holidays. The cranes swung the same as always and the men on the dock moved the same as always, in heavy jackets and gloves, and Yunjin walked down the line of them with a plastic bag of canned coffee from the vending machine, handing one to every worker she passed, saying thank you in three languages, none of which were Japanese." },
        { s: 'yunjin', f: 'neutral', t: "At home the docks don't close for holidays either. You'd know that, babe. You'd know it better than anybody." },
        { n: "An old man with a face like a walnut took a can from Solar's hand, and bowed, and said something gruff, and she bowed back the way her body knew, a particular short deep bow, and Yunjin went very quiet beside her." },
        { choose: [
          { t: "Ask him his name.", notes: 3, stat: { kindness: 1 }, then: [
            { n: "She asked him. He told her. He told her his granddaughter's name, too, without being asked, and she said it back to him, carefully, and he laughed and patted her arm, and Yunjin turned around and looked at the water for a while with her sunglasses on, on a gray day, in November." }
          ] },
          { t: "Jin. Are you okay?", notes: 2, then: [
            { s: 'yunjin', f: 'sad', t: "Babe. You bowed like you. Like exactly you. I'm fine. I'm great. Give me a coffee." },
            { n: "Solar gave her a coffee. She drank it in one go, leaning on a bollard, and then took the bag back and kept going down the line, louder, thanking everybody, and Solar walked beside her and learned three names, and kept them." }
          ] }
        ] }
      ] }
  });

  add('aigis', {
    '12/31': { rank: 6, flag: 'year-goes-on', title: 'the last sunset', place: 'Iwatodai Dorm · Rooftop', time: 'Daytime', bg: 'iwatodaidorm-roof-evening', music: 'tender',
      ask: 'Solar-san. The last sunset of this year is at sixteen thirty-eight. I would like to observe it. I would like to observe it with you.', yes: 'ill be there at 16:34', ok: 'Confirmed. That is four minutes early. Like me.', sorry: 'i cant today aigis, im sorry', no: 'I understand. I will observe it for both of us. I will report.',
      scene: [
        { n: "The roof on the last afternoon of the year was cold and very clear, and Aigis was at the rail in a scarf someone had wound around her neck three times, Yukari's, from the look of it, and she didn't turn when Solar came up. She said the time instead, to the minute, and moved over exactly one step to make room." },
        { s: 'aigis', f: 'neutral', t: "I was activated in this year. I do not have another one to compare it to. I do not know whether it was a good year." },
        { s: 'aigis', f: 'neutral', t: "You have three. Three lives. Is this a good year, compared to the others?" },
        { choose: [
          { t: "I don't remember the others well enough to say.", notes: 2, then: [
            { s: 'aigis', f: 'neutral', t: "Then we are the same. We only have this one to judge it by." },
            { s: 'aigis', f: 'happy', t: "In that case I judge it to be good. I have no other data. I have decided not to require any." }
          ] },
          { t: "This one had you in it. So it's good.", notes: 3, then: [
            { n: "Aigis turned her head. She looked at Solar for a long time with her very blue eyes, the way she'd looked at her on the sand in July, like a compass needle that had stopped." },
            { s: 'aigis', f: 'happy', t: "...Is that so." },
            { n: "She said it the way she'd learned to say it, the way the others said it, a question that wasn't one. Then the sun touched the bay, at sixteen thirty-eight exactly, and she watched it go all the way down with her hand on the rail next to Solar's, and afterward, very precisely, put her hand on top of Solar's, and logged the time." }
          ] }
        ] }
      ] }
  });

  add('jaehyun', {
    '1/11': { rank: 4, flag: 'year-goes-on', title: 'coming of age day', place: 'Naganaki Shrine', time: 'Daytime', bg: 'outside-shrine-day', music: 'tender',
      ask: "It's Coming of Age Day. The shrine will be busy. I'd like to see it. Come with me.", yes: 'ok. noon?', ok: 'Noon. Wear the coat Hyein made you. It’s cold.', sorry: 'cant today, sorry', no: 'Fine. Another day.',
      scene: [
        { n: "The shrine was full of twenty-year-olds in their best, girls in long-sleeved furisode in every color like a garden that had decided to walk, boys in suits that didn't fit yet, parents everywhere taking photographs, and Jaehyun stood at the edge of all of it with his hands in his coat pockets reading the crowd the way he read a field." },
        { s: 'jaehyun', f: 'neutral', t: "They make a day of it here. Becoming an adult. A ceremony. A photograph. And then it's done, and you are one." },
        { s: 'jaehyun', f: 'sad', t: "Nobody did that for us. You just woke up one day and Father had decided you were one. And what kind." },
        { choose: [
          { t: "Then let's decide what kind ourselves. Today.", notes: 3, then: [
            { s: 'jaehyun', f: 'sad', t: "...You always did say things like that. I never had an answer." },
            { s: 'jaehyun', f: 'neutral', t: "I still don't. But I'd like to have one. Before we're home." },
            { n: "He bought two ema at the stall and gave her one and didn't look at what she wrote, and she didn't look at his, and they hung them side by side on the rack among a hundred others, and walked home the long way, past the field, without saying much, which was, she thought, the most grown-up thing she'd seen either of them do." }
          ] },
          { t: "(Take a photo of him. A proper one. For the day.)", notes: 2, stat: { charm: 1 }, then: [
            { n: "She made him stand in front of the torii like the families were doing. He objected. She held up the phone and waited, the way he waited at the line for a play to develop, and eventually he gave up and stood there, very straight, very serious, in his good coat, and at the last second something in his face let go, and that was the picture." }
          ] }
        ] }
      ] }
  });
})();
