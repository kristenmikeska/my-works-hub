/* Noctis Lucis Caelum · IV The Emperor. Arrives on the 8/6 full moon. Format notes are at the top of akihiko.js.
   Luna and his fate are handled gently, without spelling out FFXV's ending. */
FemcSocial.define({
  id: 'noctis', name: 'Noctis Lucis Caelum', short: 'Noctis', arcana: 'Emperor', numeral: 'IV', from: 'Final Fantasy XV',
  arrives: '8/6',
  home: { place: 'Port Island · Pier', slot: 0, days: [0, 2, 3, 6], hint: 'Daytime on Sundays, Tuesdays, Wednesdays and Saturdays, at the end of the Port Island pier with a fishing rod.' },
  approach: "At the very end of the pier, someone in an expensive black jacket is asleep with a fishing rod between his knees. The line is twitching.",
  invite: { ask: ["fishing?", "u free. pier", "bored. come fish"], ok: "nice", no: "ok. more fish for me" },
  romance: true,
  cast: { prompto: 'Prompto', ignis: 'Ignis', shinjiro: 'Shinjiro', haru: 'Haru', cloud: 'Cloud' },
  threads: { chocobros: { name: 'chocobros + sol', members: ['noctis', 'prompto', 'ignis'] } },
  texts: [
    { id: 'noct-1a', rank: 1, days: 1, slot: 1, msgs: [
      { from: 'noctis', t: 'caught nothing again' },
      { from: 'noctis', t: 'same time next time?' }
    ], reply: [
      { t: "I'll bring snacks.", notes: 3, then: [{ from: 'noctis', t: 'perfect. no vegetables' }] },
      { t: "Maybe the fish don't like you.", notes: 2, then: [{ from: 'noctis', t: 'impossible. fish love me' }, { from: 'noctis', t: 'they just love me from a distance' }] }
    ] },
    { id: 'choco-2', thread: 'chocobros', rank: 2, days: 1, msgs: [
      { sys: 'prompto created "chocobros + sol"' },
      { from: 'prompto', t: 'SOL! welcome to the group!!' },
      { from: 'prompto', t: 'i got like 400 pictures today, which ones do u want' },
      { from: 'noctis', t: 'delete the one where im asleep' },
      { from: 'prompto', t: 'which one' },
      { from: 'noctis', t: 'fair' }
    ], reply: [
      { t: 'All 400, obviously.', then: [{ from: 'prompto', t: 'A WOMAN OF CULTURE' }] },
      { t: 'The one of Noctis asleep.', then: [{ from: 'noctis', t: 'betrayed' }, { from: 'prompto', t: 'sending all 37 of them' }] }
    ] },
    { id: 'choco-3', thread: 'chocobros', rank: 3, days: 1, msgs: [
      { from: 'ignis', t: 'Good evening. I have been added to this channel against my will.' },
      { from: 'ignis', t: 'Solar, please inform Shinjiro that his broth technique is exceptional.' },
      { from: 'prompto', t: 'iggy is in LOVE with the dorm kitchen' },
      { from: 'ignis', t: 'I am appreciating it professionally.' }
    ], reply: [
      { t: "I'll tell him. He'll pretend not to care.", then: [{ from: 'ignis', t: 'A man of taste. Naturally.' }] },
      { t: 'You three were amazing.', then: [{ from: 'ignis', t: 'I believe I have come up with a new recipe. Inspired by your dorm.' }, { from: 'noctis', t: 'here we go' }] }
    ] },
    { id: 'noct-5a', rank: 5, days: 1, slot: 1, msgs: [
      { from: 'noctis', t: 'thanks for listening today. about my dad' },
      { from: 'noctis', t: "i don't really talk about him" }
    ], reply: [
      { t: "You can, with me.", notes: 3, then: [{ from: 'noctis', t: 'yeah. i think i can' }] },
      { t: "He sounds like he loved you.", notes: 3, then: [{ from: 'noctis', t: 'he did. i didnt always see it' }] }
    ] },
    { id: 'noct-7a', rank: 7, days: 1, slot: 1, msgs: [
      { from: 'noctis', t: 'you held on the whole time' },
      { from: 'noctis', t: 'warping with a passenger is hard btw. you were good' }
    ], reply: [
      { t: 'Can we do it again?', notes: 3, then: [{ from: 'noctis', t: 'obviously' }] },
      { t: 'I think I left my stomach on a rooftop.', notes: 2, then: [{ from: 'noctis', t: 'ill go get it' }] }
    ] },
    { id: 'noct-9r', rank: 9, route: 'romance', days: 1, slot: 1, msgs: [
      { from: 'noctis', t: "i'm not good at words" },
      { from: 'noctis', t: "but i'm glad i fell asleep in the wrong world" }
    ], reply: [
      { t: "I'm glad too.", notes: 3, then: [{ from: 'noctis', t: '...' }, { from: 'noctis', t: 'good' }] },
      { t: 'Best nap of your life.', notes: 3, then: [{ from: 'noctis', t: 'by far' }] }
    ] },
    { id: 'noct-9f', rank: 9, route: 'friend', days: 1, slot: 1, msgs: [
      { from: 'noctis', t: "you're one of the bros now. official" },
      { from: 'noctis', t: 'prompto made a badge' }
    ], reply: [
      { t: "I'm honored.", notes: 3, then: [{ from: 'noctis', t: 'you should be. gladio had to earn his' }] },
      { t: 'Does it have a chocobo on it?', notes: 2, then: [{ from: 'noctis', t: 'obviously' }] }
    ] }
  ],
  ranks: [
    { after: '8/8', title: '1: the pier', music: 'sun', place: 'Port Island · Pier', scene: [
      { n: "At the very end of the Port Island pier, where the old men usually fished, there was a boy asleep." },
      { n: "He was sitting with his back against a post and a fishing rod propped between his knees, line in the water, head tipped back, completely unconscious. Spiky black hair. A black jacket with silver at the collar, too expensive and too formal for a pier. A faint, regal stillness to him, even asleep, like somebody had painted him into the scene." },
      { n: "The line jerked. Something had bitten. He didn't wake up." },
      { choose: [
        { t: "(Grab the rod.)", notes: 3, then: [
          { n: "Solar grabbed the rod and pulled. There was a brief, wild struggle, and then the line went slack and whatever it was got away. The boy opened one eye." },
          { s: 'noctis', f: 'neutral', t: "...Did you just lose my fish?" },
          { s: 'solar', t: "You were asleep." },
          { s: 'noctis', f: 'happy', t: "That's part of the technique." }
        ] },
        { t: "(Wake him up.)", notes: 2, then: [
          { s: 'noctis', f: 'neutral', t: "...Five more minutes." },
          { s: 'solar', t: "Your fish is getting away." },
          { s: 'noctis', f: 'surprised', t: "...WHAT?" },
          { n: "He was on his feet instantly, wide awake, reeling, swearing, and lost it anyway." }
        ] }
      ] },
      { s: 'noctis', f: 'neutral', t: "Noctis. I'm, uh. A prince. Of Lucis. Which doesn't exist here, apparently. I've checked." },
      { s: 'noctis', f: 'neutral', t: "I fell asleep in the back of the car. Woke up on this pier in the middle of the night. Everything was green. There were coffins." },
      { s: 'noctis', f: 'happy', t: "So I figured, while I'm here, I might as well fish." },
      { choose: [
        { t: "That's a very calm reaction.", notes: 3, then: [{ s: 'noctis', f: 'neutral', t: "Panicking doesn't catch fish." }] },
        { t: "A prince?", notes: 2, then: [{ s: 'noctis', f: 'happy', t: "Yeah. Don't make it weird. Nobody here knows who I am. It's kind of great." }] }
      ] },
      { n: "She sat down next to him on the end of the pier. He handed her the spare rod without asking. They fished until sunset and caught nothing, and he didn't seem to mind at all, and she found she didn't either." }
    ] },

    { after: '8/22', title: '2: prompto', music: 'sun', place: 'Port Island · Pier', scene: [
      { n: "There was a second boy on the pier now. Blond hair swept up, freckles, a camera on a strap around his neck, taking photographs of absolutely everything with the joy of someone who had never seen a seagull before." },
      { register: 'prompto' },
      { s: 'prompto', t: "Noct! Noct, look at that bird! Look at it! It's HUGE!" },
      { s: 'noctis', f: 'neutral', t: "It's a gull, Prompto." },
      { s: 'prompto', t: "It's a MAJESTIC gull." },
      { n: "Prompto Argentum had come through two nights ago, landing in Paulownia Mall's fountain, camera held above his head to keep it dry. He'd found Noctis by asking everyone in Iwatodai if they'd seen 'a sleepy guy who looks like royalty.' Several people had." },
      { s: 'prompto', t: "And YOU must be Sol! Noct talks about you! Well, he said 'there's a girl who lost my fish,' but in Noct, that's basically a sonnet." },
      { choose: [
        { t: "I'm the fish thief.", notes: 3, then: [{ s: 'prompto', t: "LEGENDARY. Can I take your picture? For the album? I'm calling it 'Noct's Weird Vacation.'" }] },
        { t: "Nice to meet you, Prompto.", notes: 2, then: [{ s: 'prompto', t: "Nice to meet YOU! Smile! Oh, wait, you're already smiling. Perfect." }] }
      ] },
      { n: "He took four hundred photos that afternoon. Of the pier, the water, the gulls, the boats, the fishing line, Noctis asleep, Noctis asleep from a different angle, Solar laughing at Noctis asleep. He showed her every single one on the little camera screen, narrating each with total sincerity." },
      { s: 'prompto', t: "Back home, I take pictures of our trip. The four of us. So we remember it. So that if anything happens... we still have it, you know?" },
      { n: "He said it lightly. Noctis, half-asleep against his post, opened his eyes and looked at Prompto for a second with an expression that wasn't sleepy at all." }
    ] },

    { after: '9/5', title: '3: ignis', place: 'Iwatodai Dorm · Kitchen', scene: [
      { n: "Ignis Scientia came through and immediately reorganized the dorm kitchen." },
      { register: 'ignis' },
      { n: "He'd arrived the night before in an immaculate black shirt and glasses, found Noctis by following the smell of a convenience-store onigiri he'd judged inadequate, and was now standing in the dorm kitchen at seven a.m. with his sleeves rolled up and an expression of profound, professional disappointment." },
      { s: 'ignis', t: "The spices are alphabetized. Incorrectly. And someone has been storing rice next to the oven." },
      { n: "Shinjiro came downstairs, saw a stranger in his kitchen, and stopped dead. Haru, behind him with her coffee setup, peered around his shoulder." },
      { s: 'shinjiro', f: 'neutral', t: "...Who the hell are you." },
      { s: 'ignis', t: "Ignis Scientia. Advisor to the prince, and his cook. I see this is your kitchen. My apologies. It's a very good kitchen. Your broth is exceptional." },
      { s: 'shinjiro', f: 'surprised', t: '...' },
      { s: 'shinjiro', f: 'neutral', t: "...Yeah. It is." },
      { choose: [
        { t: "You three should cook together.", notes: 3, then: [
          { s: 'haru', f: 'happy', t: "Oh! Yes! A collaboration!" },
          { s: 'shinjiro', f: 'neutral', t: "...Fine. But I'm on the broth." },
          { s: 'ignis', t: "I wouldn't dream of touching your broth." }
        ] },
        { t: "Noctis, you never said you had a personal chef.", notes: 2, then: [{ s: 'noctis', f: 'happy', t: "He's not a chef. He's Specs. He just cooks better than chefs." }] }
      ] },
      { n: "It was the greatest breakfast in the history of Iwatodai Dorm. Ignis made something with eggs and herbs that made Junpei weep. Shinjiro made rice that Ignis praised for a full minute. Haru made coffee that made Ignis take his glasses off and clean them very slowly." },
      { s: 'ignis', t: "...I believe I've come up with a new recipe." },
      { s: 'noctis', f: 'neutral', t: "Here we go." },
      { n: "Noctis ate three helpings and pushed every vegetable to the edge of his plate. Ignis noticed. Ignis always noticed. He said nothing, and put the vegetables back on the plate, and Noctis sighed like a man condemned." }
    ] },

    { after: '9/19', title: '4: the crown', place: 'Port Island · Pier', scene: [
      { n: "There was a second sword on the pier today. Cloud Strife was standing next to Noctis at the end of the dock, and both of them were looking at each other's weapons with the deep, wordless suspicion of two men who each thought the other one was showing off." },
      { s: 'cloud', f: 'neutral', t: "...That's a lot of swords." },
      { s: 'noctis', f: 'neutral', t: "That's a big one." },
      { s: 'cloud', f: 'serious', t: "It's the right size." },
      { s: 'noctis', f: 'happy', t: "Sure it is." },
      { n: "They compared swords for twenty minutes. It ended in a draw, and in mutual respect, and in Cloud catching a fish within five minutes of borrowing Noctis's rod, which Noctis took extremely personally." },
      { n: "When Cloud left, Noctis sat back down at the edge of the pier and didn't fish. He just held the rod across his knees and looked at the water." },
      { s: 'noctis', f: 'sad', t: "Back home, I'm supposed to be king. Someday. Soon, maybe." },
      { s: 'noctis', f: 'sad', t: "Everybody looks at me like I'm supposed to know what I'm doing. Like I'm supposed to want it." },
      { s: 'noctis', f: 'sad', t: "I just want to fish. Is that stupid?" },
      { choose: [
        { t: "It's not stupid to want a quiet life.", notes: 3, then: [{ s: 'noctis', f: 'sad', t: "...Tell that to my dad. And the whole kingdom." }] },
        { t: "Maybe a king who likes quiet is a good king.", notes: 3, then: [
          { s: 'noctis', f: 'surprised', t: '...' },
          { s: 'noctis', f: 'happy', t: "Huh. Never thought about it like that." }
        ] }
      ] }
    ] },

    { after: '10/3', title: '5: dad', music: 'tender', place: 'Port Island · Pier', scene: [
      { n: "October, and the pier was cold in the mornings now. Noctis had brought a thermos of something Ignis made and was sharing it with Solar, the steam rising off the cups into the gray air." },
      { s: 'noctis', f: 'sad', t: "My dad's the king. Regis. He's... tired. All the time. He's been holding up a wall around our city for years. With magic. It's killing him." },
      { s: 'noctis', f: 'sad', t: "When I was a kid I thought he just didn't want to spend time with me. He was always busy. Always somewhere else." },
      { s: 'noctis', f: 'sad', t: "Turns out he was keeping everyone alive. Including me." },
      { n: "He said it plainly, the way people say things that took them years to understand. Solar knew that kind of understanding. The kind that came too late to do anything with." },
      { choose: [
        { t: "He sounds like he loved you very much.", notes: 3, then: [{ s: 'noctis', f: 'sad', t: "...Yeah. He did. I didn't always see it." }] },
        { t: "Did you get to tell him?", notes: 2, then: [{ s: 'noctis', f: 'sad', t: "...Not really. Not properly. I keep thinking I'll have time." }] }
      ] },
      { n: "They drank the rest of the thermos in silence. A gull landed on the railing next to them and stared at Noctis's sandwich. He gave it half. Then the other half. He said his dad used to feed the birds in the palace gardens, when he thought nobody was watching." }
    ] },

    { after: '10/17', title: '6: luna', music: 'tender', place: 'Paulownia Mall · Rooftop Garden', scene: [
      { n: "Haru's garden on the Gekkoukan roof had a sister now, a tiny one on top of Paulownia Mall, and Noctis had found it and liked it because nobody else was ever there." },
      { n: "There was a single white flower growing in one of the planters, a delicate thing with long petals. He'd been staring at it for a while." },
      { s: 'noctis', f: 'happy', t: "Sylleblossoms. Or something like them. There's a girl back home who loves these. Luna." },
      { s: 'noctis', f: 'neutral', t: "We've known each other since we were kids. We write to each other, in a notebook. A dog carries it back and forth. That's... a long story." },
      { s: 'noctis', f: 'neutral', t: "We're supposed to get married. It's arranged. It's important, for both our countries." },
      { n: "He didn't say it unhappily. He said it the way you'd describe weather. Solar heard something under it, though, something careful and worried, a hand held over something that might break." },
      { choose: [
        { t: "Do you love her?", notes: 3, then: [
          { s: 'noctis', f: 'flustered', t: "...Yeah. I do. Maybe not the way the stories say. But I do." },
          { s: 'noctis', f: 'sad', t: "She's carrying so much. More than me, even. I'm always scared I won't get there in time." }
        ] },
        { t: "That sounds like a lot to carry.", notes: 3, then: [{ s: 'noctis', f: 'sad', t: "She carries more. That's what scares me." }] }
      ] },
      { n: "He picked the flower, carefully, and pressed it between two pages of a paperback he was carrying. Then he gave the book to Solar." },
      { s: 'noctis', f: 'sad', t: "...Hold onto it. I'd lose it." }
    ] },

    { after: '11/7', title: '7: warp', place: 'Iwatodai · Rooftops · The Dark Hour', scene: [
      { n: "The green hour, and a shadow was crossing the rooftops of Iwatodai, huge and many-legged, heading for the dorm." },
      { n: "Noctis was standing on the roof of the station next to her. He held out his hand, and swords appeared around him, glowing blue, hovering in the air like a crown of blades." },
      { s: 'noctis', f: 'serious', t: "Hold on to me. Don't let go." },
      { choose: [
        { t: "(Hold on.)", notes: 3, then: [{ n: "She held on. He threw a sword, and then they were wherever the sword was, a flash of blue light and a lurch, the city spinning, landing on the next roof before her stomach caught up." }] },
        { t: "What are you going to do?", notes: 2, then: [{ s: 'noctis', f: 'serious', t: "Warp. Hold on or you'll get left behind." }] }
      ] },
      { n: "They crossed the whole city that way. Roof to roof to roof, in bursts of blue light, the frozen streets far below. He fought the shadow in midair, warping around it, swords flashing, and every time he landed, he checked that she was still holding on." },
      { n: "When it was over, they were on top of the tallest building in Iwatodai, breathing hard, the green fading out of the sky around them." },
      { s: 'noctis', f: 'surprised', t: "...You didn't let go. Not once." },
      { s: 'noctis', f: 'sad', t: "Most people let go. It's a lot, warping. You just held on." },
      { n: "He sounded surprised. Like he'd expected, all his life, to be let go of eventually." }
    ] },

    { after: '11/21', title: '8: what\'s coming', music: 'tender', place: 'Port Island · Pier', scene: [
      { n: "Late November. The pier was almost empty, the water gray and choppy, the wind cold. Noctis had stopped fishing. He was just sitting at the end with his knees pulled up, looking at the horizon." },
      { s: 'noctis', f: 'sad', t: "Elizabeth told me something. About what's waiting for me. Back home." },
      { s: 'noctis', f: 'sad', t: "She didn't say all of it. She didn't have to. I sort of already knew. There's a reason my dad looks at me like that." },
      { n: "He didn't say what it was. He didn't need to. Solar saw it in his face, the shape of something very big and very far away and getting closer, something a king would have to do that a boy who just wanted to fish would never choose." },
      { choose: [
        { t: "Whatever it is, you won't face it alone.", notes: 3, then: [
          { s: 'noctis', f: 'serious', t: "...My friends'll be there. Specs. Prompto. Gladio." },
          { s: 'noctis', f: 'happy', t: "And now I'll have this. This year. This pier. You. I'll have that too." }
        ] },
        { t: "(Sit down beside him and say nothing.)", notes: 3, then: [{ n: "She sat beside him and said nothing. After a while he leaned against her shoulder, the way he leaned against the post when he fell asleep, and closed his eyes, and didn't sleep." }] }
      ] },
      { n: "A fish jumped, out on the gray water, silver and huge. The one he'd been trying to catch since August. He didn't move to grab the rod. He just watched it and smiled, small and tired and real." },
      { s: 'noctis', f: 'happy', t: "...Next time." }
    ] },

    { after: '12/5', title: '9: what are we', place: 'Port Island · Pier', scene: [
      { n: "December. The first snow, light and wet, falling on the water and vanishing. The pier, the end of it, the post. He was there with two rods and a thermos and a bag of the snacks she always brought him." },
      { s: 'noctis', f: 'flustered', t: "Okay. I'm bad at this. Words. Ignis is good at words. I'm good at naps." },
      { s: 'noctis', f: 'happy', t: "But I came to this world, and the best thing in it wasn't the fishing. It was who was fishing with me." },
      { s: 'noctis', f: 'flustered', t: "So. What are we?" },
      { route: [
        { t: "I love you, Noctis.", route: 'romance', notes: 3, then: [
          { s: 'noctis', f: 'surprised', t: '...' },
          { s: 'noctis', f: 'flustered', t: "...Okay. Okay. That's good. That's really good." },
          { n: "He took her hand, cold, in the snow, and held it, and didn't say anything else, and the snow kept falling on the water, and it was the most romantic thing she had ever seen anybody be terrible at." }
        ] },
        { t: "You're my best friend. My fishing partner, forever.", route: 'friend', notes: 3, then: [
          { s: 'noctis', f: 'neutral', t: "...Fishing partner. Forever. Yeah." },
          { s: 'noctis', f: 'happy', t: "That's a serious title. Prompto's going to be so jealous." }
        ] }
      ] }
    ] },

    { after: '12/26', title: '10: the catch', place: 'Port Island · Pier', scene: [
      { n: "The day after Christmas, early, freezing. The sun barely up. He'd texted her at five, which for Noctis was a miracle on the level of a resurrection: it's here. the big one. come NOW." },
      { n: "She ran the whole way. When she got to the end of the pier, he was standing at the edge with the rod bent nearly double, line screaming off the reel, every muscle braced, wide awake for once in his life." },
      { s: 'noctis', f: 'surprised', t: "Help me. Help me, Sol, it's huge, it's HUGE." },
      { n: "She grabbed the rod with him. They fought it together for twenty minutes, hands frozen, laughing, swearing, slipping on the icy boards. And then it came up out of the gray water, enormous and silver and furious, the fish he'd been chasing since August." },
      { n: "He held it up for a single second, triumphant, shaking. Prompto, who had appeared from nowhere, took eleven photos. Then Noctis lowered it gently back into the water, and let it go." },
      { s: 'noctis', f: 'happy', t: "...I didn't want to keep it. I just wanted to catch it once. With you." },
      { n: "He held something out. A fishing lure, hand-painted, a little silver fish with a crown on its head. He'd made it, he said. Ignis had helped with the paint." },
      { ifRoute: 'friend', then: [
        { choose: [
          { t: "I'll keep it on my keychain.", notes: 3, then: [{ s: 'noctis', f: 'happy', t: "Good. Then you'll always have a reason to go fishing. And think of me. Mostly the fishing." }] },
          { t: "Next year, the even bigger one.", notes: 3, then: [{ s: 'noctis', f: 'serious', t: "Deal. Wherever I am. Wherever you are. We'll find a pier." }] }
        ] },
        { n: "They sat at the end of the pier until the sun came up all the way, sharing the thermos, and he didn't fall asleep once." }
      ] },
      { ifRoute: 'romance', then: [
        { s: 'noctis', f: 'sad', t: "Whatever happens back home. Whatever's coming. I'll remember this pier. And you." },
        { choose: [
          { t: "And I'll remember you.", notes: 3, then: [
            { s: 'noctis', f: 'flustered', t: '...' },
            { n: "He kissed her at the end of the pier with the sun coming up behind him, gold on the gray water, and Prompto, somewhere behind them, very quietly took one more picture, and later gave it to her without a word." }
          ] },
          { t: "(Kiss him.)", notes: 3, then: [
            { s: 'noctis', f: 'surprised', t: '...!' },
            { s: 'noctis', f: 'flustered', t: "...Better than the fish. Don't tell the fish." }
          ] }
        ] }
      ] }
    ] }
  ]
});
