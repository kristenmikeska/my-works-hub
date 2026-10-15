/* Kuromi · XVI The Tower. Arrives on the 5/9 full moon. Format notes are at the top of akihiko.js.
   Romance is a playful crush; written to work whether her portraits are the mascot or a Persona-style girl. */
FemcSocial.define({
  id: 'kuromi', name: 'Kuromi', short: 'Kuromi', arcana: 'Tower', numeral: 'XVI', from: 'Sanrio',
  arrives: '5/9',
  home: { place: 'Iwatodai Dorm · Lounge', slot: 1, days: [0, 1, 2, 3, 4, 5, 6], hint: 'Evenings, in the dorm lounge, usually causing trouble.' },
  romance: true,
  cast: { junpei: 'Junpei', mymelody: 'My Melody', koromaru: 'Koromaru', rohan: 'Rohan', yukari: 'Yukari' },
  texts: [
    { id: 'kur-1a', rank: 1, days: 1, slot: 1, msgs: [
      { from: 'kuromi', t: 'THIS IS KUROMI' },
      { from: 'kuromi', t: 'I STOLE YOUR NUMBER FROM THE FRIDGE' },
      { from: 'kuromi', t: 'u are now officially my RIVAL 💀' }
    ], reply: [
      { t: 'I accept.', notes: 3, then: [{ from: 'kuromi', t: 'GOOD. prepare urself goody two shoes' }] },
      { t: 'Why was my number on the fridge?', notes: 2, then: [{ from: 'kuromi', t: 'the boxing guy put it there. EMERGENCY CONTACTS. lame' }] }
    ] },
    { id: 'kur-2a', rank: 2, days: 1, slot: 1, msgs: [
      { from: 'kuromi', t: 'u really didnt read it' },
      { from: 'kuromi', t: 'the diary' },
      { from: 'kuromi', t: 'weird. suspicious. ur up to something' }
    ], reply: [
      { t: "I'm not up to anything.", notes: 2, then: [{ from: 'kuromi', t: 'thats EXACTLY what someone up to something would say 🖤' }] },
      { t: "It's yours. I'd never read it.", notes: 3, then: [{ from: 'kuromi', t: '...' }, { from: 'kuromi', t: 'ok. thanks i guess. STILL RIVALS' }] }
    ] },
    { id: 'kur-3a', rank: 3, days: 1, slot: 1, msgs: [
      { from: 'kuromi', t: 'MY MELODY IS HERE' },
      { from: 'kuromi', t: 'IN THIS WORLD' },
      { from: 'kuromi', t: 'she brought me almond pound cake and said her mama said to make friends 😡' }
    ], reply: [
      { t: 'Did you eat the cake?', notes: 3, then: [{ from: 'kuromi', t: '...' }, { from: 'kuromi', t: 'ALL OF IT. thats not the point' }] },
      { t: 'She sounds nice.', notes: 1, then: [{ from: 'kuromi', t: 'BETRAYAL' }] }
    ] },
    { id: 'kur-5a', rank: 5, days: 1, slot: 1, msgs: [
      { from: 'kuromi', t: 'i finished volume 3' },
      { from: 'kuromi', t: 'HE CONFESSED UNDER THE CHERRY TREE' },
      { from: 'kuromi', t: 'not that i care. i dont care. send volume 4' }
    ], reply: [
      { t: "I'll bring it tomorrow.", notes: 3, then: [{ from: 'kuromi', t: 'U ARE THE BEST RIVAL' }] },
      { t: 'You care so much.', notes: 2, then: [{ from: 'kuromi', t: 'i will draw on ur face while u sleep' }] }
    ] },
    { id: 'kur-7a', rank: 7, days: 1, slot: 1, msgs: [
      { from: 'kuromi', t: 'the manga guy filled my whole room with drawings of baku' },
      { from: 'kuromi', t: 'this means WAR' },
      { from: 'kuromi', t: 'help me' }
    ], reply: [
      { t: "I'll get the markers.", notes: 3, then: [{ from: 'kuromi', t: 'THIS IS WHY ur my favorite rival 🖤💀' }] },
      { t: 'Junpei has a camera. Just saying.', notes: 2, then: [{ from: 'kuromi', t: 'ooooo evil. i love it' }] }
    ] },
    { id: 'kur-8a', rank: 8, days: 1, slot: 1, msgs: [
      { from: 'kuromi', t: 'nobody has ever thrown me a birthday party' },
      { from: 'kuromi', t: 'not ONCE' },
      { from: 'kuromi', t: 'im not crying ur crying' }
    ], reply: [
      { t: "I'm crying a little.", notes: 3, then: [{ from: 'kuromi', t: 'ok me too. dont tell anyone. ESPECIALLY my melody' }] },
      { t: 'Happy birthday, Kuromi.', notes: 3, then: [{ from: 'kuromi', t: '🖤🖤🖤' }] }
    ] },
    { id: 'kur-9r', rank: 9, route: 'romance', days: 1, slot: 1, msgs: [
      { from: 'kuromi', t: 'i wrote about u in my diary' },
      { from: 'kuromi', t: 'with HEARTS' },
      { from: 'kuromi', t: 'this is the worst day of my life and also the best' }
    ], reply: [
      { t: 'Can I see the hearts?', notes: 3, then: [{ from: 'kuromi', t: 'NO' }, { from: 'kuromi', t: '...maybe one' }] },
      { t: "I'd write about you too.", notes: 3, then: [{ from: 'kuromi', t: 'stop being cute at me im a PUNK' }] }
    ] },
    { id: 'kur-9f', rank: 9, route: 'friend', days: 1, slot: 1, msgs: [
      { from: 'kuromi', t: 'ok so ur my best friend AND my rival' },
      { from: 'kuromi', t: 'that is allowed. i checked. its in the rules' }
    ], reply: [
      { t: 'Which rules?', notes: 2, then: [{ from: 'kuromi', t: 'MY rules. obviously' }] },
      { t: 'Best rival. Best friend.', notes: 3, then: [{ from: 'kuromi', t: 'BEST EVERYTHING 💀🖤' }] }
    ] }
  ],
  ranks: [
    { after: '5/11', title: '1: war', place: 'Iwatodai Dorm · Lounge', scene: [
      { n: "Junpei had fallen asleep on the lounge couch with his mouth open, which was not unusual. What was unusual was that somebody was drawing on his face." },
      { n: "She was small, in a black jester's hood with long floppy ears and a pink skull right in the middle of her forehead, sitting cross-legged on the arm of the couch with a permanent marker in her fist and an expression of total, glowing concentration. She had already given Junpei a mustache, a unibrow, and the word LOSER across his forehead, backwards, so he'd be able to read it in the mirror." },
      { n: "She looked up when Solar came in. She did not stop drawing." },
      { s: 'kuromi', t: "Don't even THINK about telling on me, goody-two-shoes." },
      { choose: [
        { t: "Add glasses.", notes: 3, then: [
          { s: 'kuromi', t: '...' },
          { s: 'kuromi', t: "Oh. Oh, that's EVIL. I like that." },
          { n: "She added glasses. Little round ones. Solar had never seen anyone look so happy." }
        ] },
        { t: "Who are you?", notes: 2, then: [{ s: 'kuromi', t: "Kuromi. The Kuromi. Leader of the Kuromi's Five. Terror of Mariland. Mostly. Sometimes." }] },
        { t: "He's going to kill you.", notes: 1, then: [{ s: 'kuromi', t: "He can TRY." }] }
      ] },
      { n: "She'd come through the green hour two nights ago, she explained, landed on the dorm roof, and decided immediately that it was her territory. Nobody had argued. Mitsuru had tried to argue, and Kuromi had called her a stuck-up princess, and Mitsuru had, for reasons nobody understood, found this very funny." },
      { s: 'kuromi', t: "Okay. Listen. I've decided something. You're my rival now." },
      { choose: [
        { t: "Why me?", notes: 2, then: [{ s: 'kuromi', t: "Because you didn't tell on me. That's suspicious. Rivals are suspicious. It's perfect." }] },
        { t: "I accept.", notes: 3, then: [
          { s: 'kuromi', t: "...You ACCEPT? Nobody accepts! They're supposed to get mad!" },
          { s: 'kuromi', t: "Ugh. Fine. Good. Rival accepted. Prepare yourself." }
        ] }
      ] },
      { n: "When Junpei woke up, he looked in the mirror, screamed, and chased Kuromi around the dorm for twenty minutes. She was faster than him. She laughed the entire time. It was the loudest, happiest sound Solar had heard in that building in weeks." }
    ] },

    { after: '5/25', title: '2: the diary', place: 'Iwatodai Dorm · Lounge', scene: [
      { n: "There was a diary on the lounge couch. Black, with a pink skull on the cover and a little lock that was not, it turned out, locked." },
      { n: "Solar knew whose it was. She knew because there was a sticker on the back that said PROPERTY OF KUROMI DO NOT READ OR ELSE in pink glitter pen, and underneath, in smaller letters, I MEAN IT, and under that, even smaller, ESPECIALLY YOU MY MELODY." },
      { n: "She picked it up. She put it on the shelf where it wouldn't get sat on. She didn't open it." },
      { s: 'kuromi', t: "WHERE IS MY DIARY." },
      { n: "Kuromi came into the lounge at a run, wild-eyed, and stopped dead when she saw it on the shelf, closed, safe, and Solar on the couch with a magazine." },
      { s: 'kuromi', t: "...Did you read it?" },
      { choose: [
        { t: "No. It's yours.", notes: 3, then: [
          { s: 'kuromi', t: '...' },
          { n: "She looked at Solar for a long time, eyes narrowed, like she was looking for the trick. There wasn't one." },
          { s: 'kuromi', t: "...Nobody's ever not read it before. Everybody always reads it." }
        ] },
        { t: "Only the sticker on the back.", notes: 2, then: [{ s: 'kuromi', t: "The sticker is PUBLIC. That's fine. The sticker is a WARNING." }] }
      ] },
      { s: 'kuromi', t: "That's so suspicious. You're up to something. I'm watching you." },
      { n: "She took the diary and held it against her chest, and for a second, under the hood and the skull and the attitude, she looked very small. Then she stomped off upstairs, and slammed her door, and a minute later Solar heard her laughing at something, alone, and the sound of a pen scratching paper very fast." }
    ] },

    { after: '6/15', title: '3: my melody', place: 'Iwatodai Dorm · Front Door', scene: [
      { n: "The doorbell rang on a Saturday evening, and Yukari answered it, and came back to the lounge with an expression of complete bewilderment." },
      { s: 'yukari', f: 'surprised', t: "Um. There's a... a rabbit? In a pink hood? Asking for Kuromi?" },
      { register: 'yukari' },
      { register: 'mymelody' },
      { s: 'mymelody', t: "Hello! I'm My Melody! I've come to visit my friend Kuromi! I brought almond pound cake!" },
      { n: "She was white and soft and round, in a pink hood with a little flower, holding a cake box in both hands and smiling with the bottomless, impenetrable sweetness of someone who had never once in her life considered that anyone might not be happy to see her." },
      { n: "Upstairs, a door crashed open." },
      { s: 'kuromi', t: "MY MELODY!!!" },
      { s: 'mymelody', t: "Kuromi! My mama always said, when you're far from home, find a friend! So I found you!" },
      { s: 'kuromi', t: "I am NOT your FRIEND. I am your RIVAL. Your ARCH-RIVAL." },
      { choose: [
        { t: "Kuromi, she brought cake.", notes: 2, then: [{ s: 'kuromi', t: "...What kind of cake." }] },
        { t: "(Let them fight it out.)", notes: 3, then: [
          { n: "Solar sat on the stairs and watched. It was, in its way, magnificent. Kuromi shouted. My Melody agreed with everything she said, cheerfully, which made Kuromi shout louder. It went on for twenty minutes and ended with both of them eating cake on the lounge floor, Kuromi still muttering, My Melody humming." }
        ] }
      ] },
      { s: 'mymelody', t: "My mama always said, a rival is just a friend who doesn't know it yet!" },
      { s: 'kuromi', t: "Your MAMA doesn't know ANYTHING." },
      { n: "My Melody faded at the end of the night, like the others did. She waved at Kuromi from the front door, still smiling. Kuromi didn't wave back. But when the door closed, she went and sat on the step where My Melody had been, and stayed there for a long time." }
    ] },

    { after: '7/6', title: '4: koromaru', place: 'Iwatodai Dorm · Lounge', scene: [
      { n: "Kuromi was mean to everyone. That was the rule. She'd explained it to Solar with great seriousness: everyone gets a little mean, it builds character, it's a public service." },
      { n: "But she was never mean to Koromaru." },
      { n: "Solar found them in the lounge on a hot July evening, Koromaru asleep in a perfect circle, Kuromi lying on her stomach on the floor next to him, very quietly drawing his portrait in the back of her diary." },
      { s: 'kuromi', t: "Shh. He's sleeping. If you wake him up I'll destroy you." },
      { choose: [
        { t: "(Sit down quietly.)", notes: 3, then: [{ n: "Solar sat down on the floor, very quietly. Kuromi glanced at her, approved, and went back to drawing. The portrait was, honestly, very good." }] },
        { t: "You're never mean to him.", notes: 3, then: [
          { s: 'kuromi', t: "...He's never mean to me." },
          { s: 'kuromi', t: "He doesn't care that I'm a punk or a troublemaker or whatever. He just likes me. That's rare, okay? You protect rare things." }
        ] }
      ] },
      { n: "Koromaru woke up eventually, stretched, and climbed directly into Kuromi's lap without asking. She froze. Her ears, the long floppy hood-ears, went straight up. And then she put her arms around the dog very carefully, like he was made of glass, and didn't move for an hour." },
      { s: 'kuromi', t: "...Don't tell anyone about this." },
      { n: "Solar promised. Koromaru, asleep again, snored." }
    ] },

    { after: '7/27', title: '5: shoujo manga', place: 'Iwatodai Strip · Bookworms', scene: [
      { n: "Bookworms was a tiny used bookshop on the Iwatodai strip run by an elderly couple who were very, very kind, and Kuromi had walked in there to steal a comic book and walked out an hour later with a stack of romance manga, paid for, blushing furiously." },
      { s: 'kuromi', t: "It's RESEARCH. For EVIL. You have to understand your enemy." },
      { s: 'kuromi', t: "The enemy is love. It's very confusing." },
      { choose: [
        { t: "Which one are you reading?", notes: 3, then: [
          { s: 'kuromi', t: "...It's called 'Under the Cherry Blossoms.' He's a delinquent. She's a class rep. They HATE each other. Except they don't." },
          { s: 'kuromi', t: "It's very stupid. I've read it four times." }
        ] },
        { t: "You like romance.", notes: 3, then: [{ s: 'kuromi', t: "I do NOT. I like... watching people be stupid about feelings. From a safe distance. For research." }] }
      ] },
      { n: "They sat on the bench outside the shop and she read the good parts out loud, in different voices, very dramatically, and stopped every few pages to say something rude about the main characters, and then kept reading anyway, with her face very close to the page." },
      { s: 'kuromi', t: "...Do you think it's real? This stuff? Somebody liking you even though you're mean and loud and a menace?" },
      { n: "She asked it to the manga. Not to Solar. Her ears had gone flat against her head." },
      { choose: [
        { t: "I think it's real.", notes: 3, then: [{ s: 'kuromi', t: "...Okay. Okay, good. Not for me. Just. In general." }] },
        { t: "I like you, and you're all of those things.", notes: 3, then: [
          { s: 'kuromi', t: '...' },
          { n: "She put the manga up in front of her face. She didn't say anything for a very long time. Her ears came up, very slowly." }
        ] }
      ] }
    ] },

    { after: '8/17', title: '6: under the eyeliner', music: 'tender', place: 'Iwatodai Dorm · Rooftop', scene: [
      { n: "The dorm roof, at night. Kuromi had claimed it as her territory on the first night and had decorated it with skull stickers on the water tank, which Mitsuru was pretending not to know about." },
      { n: "She was sitting on the edge with her feet dangling over the street, which was not allowed, and looking at the stars, which were faint and blurry over the city." },
      { s: 'kuromi', t: "In Mariland you can see all of them. The stars. Millions." },
      { s: 'kuromi', t: "I used to sit on the roof of my hideout and look at them and make wishes. Mostly about beating My Melody. Sometimes about other stuff." },
      { choose: [
        { t: "What other stuff?", notes: 3, then: [
          { s: 'kuromi', t: '...' },
          { s: 'kuromi', t: "That somebody would like me. The real me. Not because I'm scary or because I'm funny when I'm mad." },
          { n: "She said it fast, all in one breath, and then glared at the city like it was the city's fault." }
        ] },
        { t: "You miss home.", notes: 2, then: [{ s: 'kuromi', t: "I miss Baku. He's my sidekick. He's useless. I'd give anything for him to be here, being useless." }] }
      ] },
      { s: 'kuromi', t: "Everybody thinks I'm just a troublemaker. And I am. But that's not ALL I am. Nobody ever asks about the rest." },
      { n: "Solar knew about the rest. About the face you showed and the one underneath. About how much easier it was to be the loud, difficult thing everyone expected than to let anyone see what was under the eyeliner." },
      { choose: [
        { t: "I'm asking about the rest.", notes: 3, then: [
          { s: 'kuromi', t: "...You are, aren't you." },
          { n: "And she told her. About Mariland, and the diary, and Baku, and the romance manga she'd been hiding for years. About how being mean was easier than being disappointed. They stayed up there until two in the morning." }
        ] },
        { t: "(Sit next to her on the edge.)", notes: 2, then: [{ n: "Solar sat next to her, feet dangling over nothing. Kuromi glanced at her, surprised, and then scooted a little closer, until their shoulders touched." }] }
      ] }
    ] },

    { after: '9/14', title: '7: prank war', place: 'Iwatodai Dorm · Hallway', scene: [
      { n: "It started when Rohan Kishibe, the manga artist from another world who had set up permanently at Bookworms, used his strange power on Kuromi to 'read' her for research, and wrote, in the margin of her page, KUROMI SECRETLY LOVES MY MELODY." },
      { n: "It wasn't true. Probably. But Kuromi had read it over his shoulder, and Kuromi did not forgive." },
      { s: 'kuromi', t: "He drew BAKU. All over my room. Hundreds of Bakus. This means WAR." },
      { s: 'kuromi', t: "And you're my second. Rivals help rivals. It's the rules." },
      { choose: [
        { t: "I'll get the markers.", notes: 3, then: [{ s: 'kuromi', t: "THIS is why you're my favorite rival." }] },
        { t: "Is this a good idea?", notes: 1, then: [{ s: 'kuromi', t: "NO. That's what makes it GREAT." }] }
      ] },
      { n: "It escalated quickly. Kuromi filled Rohan's pen box with glitter. Rohan sent Junpei a manga page of himself 'defeating' Kuromi in single combat. Kuromi drew on Junpei's face again, because Junpei was, she said, a legitimate military target. Rohan used his power on a pigeon and made it follow Kuromi around for a day." },
      { n: "It ended at Bookworms, at midnight, with both of them exhausted and covered in ink and glitter, glaring at each other across the counter while the elderly owners slept upstairs." },
      { s: 'rohan', t: "...You're a worthy adversary. I refuse to admit it publicly." },
      { s: 'kuromi', t: "Same. Truce. Until I get bored." },
      { n: "They shook on it. Kuromi drew a tiny skull on his hand while she was shaking it. He let her. Solar had never seen two people more delighted to hate each other." }
    ] },

    { after: '10/31', title: '8: birthday', place: 'Iwatodai Dorm · Lounge', scene: [
      { n: "Halloween. Kuromi had been strange all week. Quiet. Not drawing on anyone. Not slamming any doors. Mitsuru had actually asked Solar if Kuromi was ill." },
      { n: "Solar had figured it out on Tuesday, from a single line on the sticker on the back of the diary that she'd never noticed before. Tiny letters, at the very bottom: BIRTHDAY OCT 31 (NOBODY EVER REMEMBERS)." },
      { n: "So she'd told everyone." },
      { n: "When Kuromi came downstairs that evening, the lounge was dark. And then the lights came on, and there were skull decorations everywhere, and black and pink streamers, and a cake shaped very badly like her hood, and the entire dorm yelling SURPRISE." },
      { n: "Junpei had made a banner that said HAPPY BIRTHDAY KUROMI, MENACE in permanent marker. Yukari had baked the cake. Akihiko had bought her a punching bag, which he believed was the most thoughtful possible gift. Koromaru had a party hat on. Mitsuru had sent a card with a check in it, which Kuromi did not know how to cash." },
      { n: "Kuromi stood on the bottom step and didn't move." },
      { s: 'kuromi', t: '...' },
      { s: 'kuromi', t: "...Nobody ever... nobody ever remembers." },
      { choose: [
        { t: "I remembered.", notes: 3, then: [
          { s: 'kuromi', t: '...' },
          { n: "Her ears went straight up. Then down. Then she burst into tears, loudly, furiously, and hugged Solar so hard she knocked her into the streamers, and the whole lounge cheered." }
        ] },
        { t: "Happy birthday, menace.", notes: 3, then: [{ s: 'kuromi', t: "...You guys are all the WORST. I love it. I HATE that I love it." }] }
      ] },
      { n: "She ate three slices of cake and punched the bag Akihiko gave her for an hour and drew a skull on everyone's hand before bed. When she went upstairs, she was still wearing the party hat. She slept in it." }
    ] },

    { after: '11/21', title: '9: diary entry', place: 'Iwatodai Dorm · Rooftop', scene: [
      { n: "The roof again, in November, cold. Kuromi was holding the diary in both hands, and she held it out to Solar, open, and turned her face away." },
      { s: 'kuromi', t: "One page. You can read ONE page. Then I'm throwing myself off the roof." },
      { n: "The page was covered in doodles. Skulls and bats and Koromaru and a very angry My Melody. And in the middle, in pink glitter pen, in her messy handwriting, it said:" },
      { n: "NOTES ON MY RIVAL. She is very annoying. She never gets mad. She remembers things nobody remembers. She doesn't read my diary. I don't know what to do about her. I think she might be my best friend. I think she might be more than that. UGH." },
      { s: 'kuromi', t: "...So? What is it? Say something. I'm dying." },
      { route: [
        { t: "More than that. Definitely more than that.", route: 'romance', notes: 3, then: [
          { s: 'kuromi', t: '...' },
          { s: 'kuromi', t: "...UGH. Okay. Okay okay okay. This is just like volume three. Under the cherry tree. Except it's a roof. And it's cold." },
          { n: "She grabbed the diary back, wrote something on the page very fast with the glitter pen, and showed Solar. It was a big lopsided heart. With a little skull in the middle of it." }
        ] },
        { t: "Best friend. And best rival.", route: 'friend', notes: 3, then: [
          { s: 'kuromi', t: "...Best friend AND best rival. That's allowed. I made the rules. It's allowed." },
          { n: "She wrote it in the diary, right under the entry, in big letters: BEST FRIEND + BEST RIVAL. Then she drew a skull wearing a party hat next to it, for luck." }
        ] }
      ] }
    ] },

    { after: '12/26', title: '10: the new page', place: 'Iwatodai Dorm · Lounge', scene: [
      { n: "The week after Christmas. The dorm was quiet, half the residents gone to visit family, the lounge full of leftover tinsel and the smell of the cake Yukari had made for the holidays." },
      { n: "Kuromi was sitting on the couch with a brand-new diary in her lap. White. With a pink skull on the cover." },
      { s: 'kuromi', t: "I filled the old one. All of it. Mostly about you, which is gross." },
      { s: 'kuromi', t: "So I got a new one. And I want you to write the first page." },
      { n: "She held out the glitter pen. Her ears were down. She was very obviously terrified." },
      { ifRoute: 'friend', then: [
        { choose: [
          { t: "(Write: My rival is the best person I know.)", notes: 3, then: [
            { s: 'kuromi', t: '...' },
            { s: 'kuromi', t: "...That's the most embarrassing thing anyone has ever written in my diary. I'm keeping it forever." }
          ] },
          { t: "(Draw a skull with a party hat.)", notes: 3, then: [{ s: 'kuromi', t: "PERFECT. Ten out of ten. You're a genius. Best rival." }] }
        ] },
        { n: "When the green hour ended for good, at the end of January, Kuromi went home to Mariland with two diaries. She said she'd read the old one to Baku every night. She said he'd be very bored. She said that was fine." }
      ] },
      { ifRoute: 'romance', then: [
        { choose: [
          { t: "(Write: I like you. The real you. All of it.)", notes: 3, then: [
            { s: 'kuromi', t: '...' },
            { n: "Kuromi read it. Then she read it again. Then she grabbed the pen and wrote, underneath, in huge glittery letters: ME TOO DUMMY. And drew a heart around both lines." }
          ] },
          { t: "(Kiss her on the forehead, right on the skull.)", notes: 3, then: [
            { s: 'kuromi', t: '...!!!' },
            { s: 'kuromi', t: "...That's not the diary. That's not even CLOSE to the diary. Do it again." }
          ] }
        ] },
        { n: "She wrote in the diary every night after that, and every entry, Solar found out much later, ended the same way. A tiny skull. And a tiny heart. And a tiny sun." }
      ] }
    ] }
  ]
});
