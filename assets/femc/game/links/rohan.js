/* Rohan Kishibe · I Magician. Revamp social link data (femc-game.html). Format: link fields in assets/femc/game/core.js, scene lines in scene.js.
   Visitor (JoJo's Bizarre Adventure, Part 4), fourth wave (9/5). Friendship (v1's romance is cut). The ending he runs from:
   the last page (Pink Dark Boy's final chapter, due the night he fell through). Koichi (rank 2), Josuke (rank 4), Jotaro (rank 6).
   Rank 1: he tried to draw the girl in the porter's coat and could never get her face (a quiet clue; only the coat comes out).
   Rank 3: he asks to read Solar with Heaven's Door and she can say no; he only draws the outside. The full reading is the main
   story's 11/22 scene (plot doc: "Rohan, if met"); rank 7 (after 11/22) is the aftermath and assumes that scene played.
   Rank 4: Rohan and Josuke's feud sets off a Hoax flashback (two boys squaring off in a hallway, Solar between them). No fragment.
   Rohan has only happy/neutral/sad/serious faces. Cast-only speakers: none. afterMax: scenes for after rank 10 (engine support pending). */
(window.FEMC_GAME_LINKS ||= []).push({
  id: 'rohan', name: 'Rohan Kishibe', short: 'Rohan', arcana: 'Magician', numeral: 'I', from: "JoJo's Bizarre Adventure",
  kind: 'visitor',
  romance: null,
  starts: '9/7',
  home: { area: 'strip', spot: 'Bookworms', slot: 'after', days: [0, 3, 4, 6],
          hint: 'After school on Wednesdays, Thursdays and Saturdays, and in the daytime on Sundays, at the back table of Bookworms, drawing.' },
  approach: "At the back table of Bookworms, a man in a green headband is drawing so fast the pen sounds like rain.",
  cast: {},
  invite: {
    ask: ["Are you available? I need a reference model.", "Come to Bookworms. Now. It's for research.", "I have new pages. You may look at them.", "I need to draw hands. Yours will do.", "The light at the back table is perfect today. Get here before it changes.", "You're late. I didn't tell you to come, but you're late."],
    ok: ["Good. Don't dawdle.", "Obviously.", "Back table. I've saved you a chair. Don't make it a thing."],
    no: ["Unacceptable. ...Fine.", "Your loss. It was going to be a very good drawing.", "Fine. I'll draw the old man instead. He holds still."]
  },
  hangouts: [
    [
      { n: "Rohan was drawing the old man who ran Bookworms. The old man was asleep behind the counter with his reading glasses on his forehead and a cat on his lap, and Rohan had been drawing him for forty minutes with the ferocious concentration of somebody defusing a bomb." },
      { s: 'rohan', f: 'serious', t: "Don't move. Don't breathe. He's about to do the thing with his mouth. The thing where he talks to his wife in his sleep. I need it." },
      { choose: [
        { t: "(Hold perfectly still.)", notes: 3, then: [
          { n: "Solar held perfectly still. The old man, after a long minute, said a single word in his sleep, very fondly, the name of a woman, and smiled, and Rohan's pen went across the page like a knife through cloth, and he sat back with an expression of profound satisfaction." },
          { s: 'rohan', f: 'happy', t: "Reality. You can't invent that. Nobody would believe you. That's how you know it's good." }
        ] },
        { t: "Isn't this rude?", notes: 1, then: [
          { s: 'rohan', f: 'serious', t: "It's research. Research is never rude. It's only occasionally illegal." }
        ] }
      ] }
    ],
    [
      { n: "Rohan needed hands. He said this the way other people said they needed water. He had drawn his own hands so many times he said he could no longer see them, and Koichi's hands were too small, and he was not, under any circumstances, drawing Josuke's." },
      { s: 'rohan', f: 'neutral', t: "Put them on the table. Flat. Then curl them. Slowly. As if you were about to pick up something you're afraid to drop." },
      { choose: [
        { t: "(Do it exactly.)", notes: 3, then: [
          { n: "Solar did it exactly. Rohan drew for a long time. Then he stopped, and looked at her hands, and looked at the drawing, and frowned." },
          { s: 'rohan', f: 'neutral', t: "...Your hands curl like someone holding a needle. And a controller. And a pen. All at once. I can't decide which. It's infuriating." }
        ] },
        { t: "(Do it badly on purpose.)", notes: 1, then: [
          { s: 'rohan', f: 'serious', t: "I can SEE you doing that. Do it properly or I'll draw you as a hand model in a catalog. Forever." }
        ] }
      ] }
    ]
  ],
  ranks: [
    { after: '9/8', title: '1: material', place: 'Iwatodai Strip · Bookworms', scene: [
      { music: 'day' },
      { n: "Bookworms had a new regular, and he had taken the back table, the good one by the window where the light came in long and gold in the afternoons, and the old couple who ran the shop had let him, which they had never once let anyone do in thirty years." },
      { n: "He was sharp in every direction. Green headband over spiky dark hair. Earrings shaped like fountain pen nibs. A cropped jacket, very precise boots, and a sketchbook open in front of him on the table, and he was drawing so fast the pen sounded like rain on a window, and he didn't look up when Solar came to the back to look for a book." },
      { s: 'rohan', f: 'serious', t: "Don't stand there. You're blocking the light." },
      { s: 'rohan', f: 'neutral', t: "...Actually, no. Stand there. Your shadow's better than the light was. Don't move." },
      { choose: [
        { t: "(Don't move.)", notes: 3, then: [
          { n: "She didn't move. He drew her shadow on the page for a full two minutes, the shape of it across the table and his own hand, and then looked up at her for the first time, sharply, as if checking the original against the copy, and seemed, very slightly, surprised by the original." }
        ] },
        { t: "(Move, on principle.)", notes: 1, then: [
          { s: 'rohan', f: 'serious', t: "That was the best shadow I've seen in a week, and you've ruined it. I hope you're proud of yourself." }
        ] },
        { t: "What are you drawing?", notes: 2, then: [
          { s: 'rohan', f: 'neutral', t: "Everything. This city. It's a gold mine. I've filled three books in five days." }
        ] }
      ] },
      { s: 'rohan', f: 'neutral', t: "Rohan Kishibe. Manga artist. Pink Dark Boy. Serialized weekly, eight years, never missed a deadline. You've never heard of it, because it doesn't exist here, which I'm choosing to find interesting rather than insulting." },
      { register: 'rohan' },
      { s: 'rohan', f: 'neutral', t: "I was at my desk. Midnight. The last chapter of Pink Dark Boy due in the morning. The very last one. I'd drawn every page but the final one, and I was sitting there with the pen over the paper. Then the paper went green." },
      { s: 'rohan', f: 'neutral', t: "And I was standing in a street full of coffins. Which I immediately began to sketch. And a girl came up the street. Small. In a porter's coat, ridiculous, much too big. She said, \"There's a bookshop on the Strip. Nobody's looking at the back table.\" And then she apologized." },
      { s: 'rohan', f: 'serious', t: "I've drawn her eleven times since. From memory. My memory is perfect. I never forget a face." },
      { s: 'rohan', f: 'serious', t: "And I can't get hers. Every time. The coat comes out perfectly. The cap. The ticket in her hand. And where the face should be, the pen just... stops. I've never had that happen. It's the most interesting thing that's ever happened to me." },
      { ifMet: ['wren'], then: [
        { n: "Solar thought of the bench at Iwatodai Station and tried to picture Wren's face, which she'd looked at a dozen evenings, and found, with a small cold drop in her stomach, that she could picture the coat perfectly, and the cap, and the ticket with its pink ribbon. She stopped trying. It was probably the light." }
      ] },
      { s: 'rohan', f: 'neutral', t: "And you. You're one of the ones who walks around in the green. I've seen you. With the gun to your head and the armband. You're the most interesting thing in this city, apart from her." },
      { s: 'rohan', f: 'serious', t: "I want to know everything about it. Everything you know. For reference." },
      { choose: [
        { t: "What do I get?", notes: 3, then: [
          { s: 'rohan', f: 'happy', t: "Good. A negotiator. I respect that. I'll draw you. Properly. You'll be in the next chapter. You'll be the only real person in it." }
        ] },
        { t: "That's a lot to ask a stranger.", notes: 2, then: [
          { s: 'rohan', f: 'neutral', t: "Everyone's a stranger until they're material. Sit down." }
        ] },
        { t: "No.", notes: 1, then: [
          { s: 'rohan', f: 'neutral', t: "...No? Fine. I'll ask again next week. And the week after. I'm extremely patient when it comes to good material." }
        ] }
      ] },
      { n: "She sat down. He drew her while she talked, without asking, which she should have minded and found that she didn't. He didn't draw what she looked like. He drew what she was doing with her hands while she talked about Tartarus, which was turning a pen over and over, end to end, like counting. When she left, he'd filled six pages, and he didn't show her any of them, and he said \"same time\" as though they'd already agreed, and she found they had." }
    ] },

    { after: '9/22', title: '2: koichi', place: 'Iwatodai Strip · Bookworms', scene: [
      { music: 'joy' },
      { n: "There was a small boy at the back table today, very small, with short silver hair standing up in front and a school uniform from somewhere that wasn't Gekkoukan, and the expression of somebody permanently, gently apologizing on another person's behalf." },
      { s: 'koichi', f: 'happy', t: "You must be Solar! I'm Koichi. Hirose Koichi. I'm so sorry about Rohan." },
      { s: 'rohan', f: 'serious', t: "Why are you apologizing for me?" },
      { s: 'koichi', f: 'neutral', t: "Because you never do it yourself!" },
      { n: "Koichi had come through on the September moon, looking for Rohan, because, he explained, when someone from Morioh goes missing, somebody from Morioh goes and gets them, and it was usually him. A girl in a porter's coat had walked him to the shop. She'd said sorry. Koichi had said sorry back, automatically, and then they'd both stood there apologizing to each other on the pavement until she laughed, once, quietly, and left." },
      { s: 'koichi', f: 'happy', t: "He used to be awful. Like, REALLY awful. When we met, he tried to turn me into a manga." },
      { s: 'rohan', f: 'neutral', t: "That was years ago. And it would have been an excellent manga." },
      { choose: [
        { t: "You two are friends?", notes: 3, then: [
          { s: 'koichi', f: 'happy', t: "Yeah. He's actually my best friend. Don't tell him." },
          { s: 'rohan', f: 'serious', t: "I'm sitting right here, Koichi." },
          { s: 'koichi', f: 'happy', t: "I know! That's why I said don't tell him!" }
        ] },
        { t: "Turned you into a manga?", notes: 2, then: [
          { s: 'rohan', f: 'neutral', t: "I read him. Like a book. It's a thing I can do. I took some notes. I may have written a small instruction in the margin." },
          { s: 'koichi', f: 'serious', t: "He wrote that I couldn't attack him!" },
          { s: 'rohan', f: 'neutral', t: "A reasonable precaution." }
        ] },
        { t: "Rohan, did you make anyone else into a manga?", notes: 2, then: [
          { s: 'rohan', f: 'neutral', t: "Define make." }
        ] }
      ] },
      { n: "Koichi sat with them the rest of the afternoon and told Solar stories about their town, Morioh, a small seaside place where strange things happened on every corner and everyone pretended they didn't. A ghost in an alley. A cat that was also a plant. A serial killer who'd wanted a quiet life. Rohan corrected every detail and added three more to each story, and they argued about the cat for twenty minutes." },
      { s: 'koichi', f: 'neutral', t: "He was supposed to finish his series. The night he disappeared. Everybody in Morioh was waiting for it. The last chapter. His editor came round to the house and found the desk empty and the pen on the floor." },
      { s: 'koichi', f: 'sad', t: "He's never finished anything, you know. In eight years. He just keeps going. I don't think he knows how to stop." },
      { s: 'rohan', f: 'serious', t: "I know perfectly well how to stop. I choose not to. There's a difference." },
      { choose: [
        { t: "What's in the last chapter?", notes: 3, then: [
          { s: 'rohan', f: 'neutral', t: "Everything's in it. It's drawn. All of it. Except the last page." },
          { s: 'rohan', f: 'serious', t: "The last page is the only one that matters. Everything before it is a promise. The last page is whether you kept it. And I was sitting there with the pen and I thought, if I draw it, it's over. Eight years. Over. And there's nothing after it but a blank desk." }
        ] },
        { t: "I don't know how to stop either.", notes: 2, then: [
          { s: 'koichi', f: 'happy', t: "See, Rohan? Even she says it. You're both the same." },
          { s: 'rohan', f: 'serious', t: "We are NOT the same. ...Her shadows are better than mine." }
        ] }
      ] },
      { n: "When Solar left, Koichi walked her to the door and said, very quietly, so Rohan wouldn't hear, \"Thank you for sitting with him. He's lonely. He'll never say it. But I can tell. He's drawing people again. Not just things.\" And then, louder, over his shoulder, \"Rohan, say goodbye!\" And from the back table, without looking up, Rohan said, \"Goodbye. Same time. Don't block the light.\"" }
    ] },

    { after: '10/13', title: '3: reference', place: 'Iwatodai Strip · Bookworms', scene: [
      { music: 'tender' },
      { n: "He'd been careful not to explain it. Rohan was careful with very few things, and his power was one of them. But Koichi had said it out loud, and so on a gray October afternoon with the rain ticking on the shop window, Rohan put down his pen and folded his hands on the sketchbook and looked at her with a seriousness she'd never seen on him." },
      { s: 'rohan', f: 'serious', t: "I can read people. Literally. I draw a line in the air and they become books. Their memories. Their secrets. Every page of their lives. I can read it all. I can write in the margins, if I want to." },
      { s: 'rohan', f: 'serious', t: "I've wanted to read you since the day you blocked my light. You're the most interesting reference I've ever had. And I've never once asked anybody before. I just did it." },
      { s: 'rohan', f: 'neutral', t: "I'm asking. Because Koichi would kill me if I didn't. And because... I'm asking." },
      { n: "Solar sat very still. A book. Every page. And somewhere inside her, in the place where the gaps were, the smooth places, the pages with their tidy torn edges, something flinched, hard, like a hand pulled back from a flame. Not fear of Rohan. Fear of what he'd find. Or what he wouldn't." },
      { choose: [
        { t: "Not yet.", notes: 3, then: [
          { s: 'rohan', f: 'neutral', t: "...Not yet." },
          { n: "He said it like a word he'd never heard used about himself. And then, slowly, he picked up his pen again, and opened the sketchbook to a clean page." },
          { s: 'rohan', f: 'neutral', t: "Then I'll draw the outside. For now. The outside is a perfectly good book. Most people never read the cover properly." }
        ] },
        { t: "No. It's mine.", notes: 3, then: [
          { s: 'rohan', f: 'serious', t: "..." },
          { s: 'rohan', f: 'neutral', t: "...Yes. It is. That's correct." },
          { s: 'rohan', f: 'neutral', t: "But I refuse to stop drawing the cover. You can't stop me doing that. That's public." }
        ] },
        { t: "Why do you want to?", notes: 2, then: [
          { s: 'rohan', f: 'neutral', t: "Because I've read a hundred people and they're all one book. One life. One story, start to finish." },
          { s: 'rohan', f: 'serious', t: "And you walk like somebody carrying several. I want to know if I'm right. I'm always right. I want to know HOW I'm right." },
          { s: 'solar', f: 'neutral', t: "...Not yet." },
          { s: 'rohan', f: 'neutral', t: "Fine. Not yet. I'll wait. Waiting is research too." }
        ] }
      ] },
      { n: "He drew her for an hour. Just the outside. Her face in profile against the rainy window, and her hands on the table, and the way she sat, back very straight, shoulders down, like somebody who'd been taught to sit by someone who cared a great deal about how she looked at a table. He drew the way her hair was pinned up and the one strand that had come loose at the back and the way her eyes went, every few minutes, to the shop door, and back." },
      { n: "When he showed her the page it was a girl she didn't recognize. Composed. Polite. Absolutely closed. Like a beautiful house with every curtain drawn." },
      { s: 'rohan', f: 'neutral', t: "That's what the cover says. Do you like it?" },
      { choose: [
        { t: "She looks lonely.", notes: 3, then: [
          { s: 'rohan', f: 'neutral', t: "Mm. I thought so too. I didn't put it there. It was already there. I just didn't leave it out." }
        ] },
        { t: "She looks fine.", notes: 1, then: [
          { s: 'rohan', f: 'neutral', t: "Yes. That's the point. That's what she's for. She's very, very good at looking fine. I'm almost jealous." }
        ] }
      ] }
    ] },

    { after: '10/27', title: '4: josuke', place: 'Iwatodai Strip', scene: [
      { music: 'joy' },
      { n: "Josuke Higashikata arrived the way he did everything, loudly, with an enormous pompadour that Solar would later learn he would defend with his life, a school uniform with gold hearts and peace signs pinned to the collar, and a grin like a door being kicked open." },
      { s: 'josuke', f: 'happy', t: "Koichi! There you are! I've been looking all over this town! It's huge! Everything's so tall!" },
      { s: 'josuke', f: 'neutral', t: "And. Ugh. Rohan." },
      { s: 'rohan', f: 'serious', t: "Josuke. You look exactly as stupid as I remember." },
      { n: "They hated each other. That was immediately clear. They hated each other with a deep, comfortable, practiced, well-maintained hatred, the kind you only get from years of very close proximity and at least one incident involving a house on fire, which neither of them would explain." },
      { s: 'josuke', f: 'happy', t: "Solar, right? Koichi says you're cool. Anybody who can stand Rohan for a whole month deserves a medal. Or a doctor." },
      { choose: [
        { t: "I like your hair.", notes: 3, then: [
          { s: 'josuke', f: 'happy', t: "...You. I like YOU. You've got taste. Rohan, she's got taste. Unlike some people." },
          { s: 'rohan', f: 'serious', t: "Don't encourage him. If you insult it he loses his mind, and if you praise it he becomes unbearable. There's no winning with the hair." }
        ] },
        { t: "Rohan's not that bad.", notes: 2, then: [
          { s: 'josuke', f: 'serious', t: "He's EXACTLY that bad." },
          { s: 'rohan', f: 'neutral', t: "I'm worse, actually. She's being polite." }
        ] }
      ] },
      { n: "They walked down the Strip to the park, all four of them, and argued the entire way, Josuke and Rohan, about everything. The correct way to eat a crepe. Whether a vending machine could be haunted. Whether Rohan had cheated at dice in a game three years ago. Josuke had his hands in his pockets and his chin up. Rohan walked half a step ahead, always, so that Josuke had to keep catching up, and Josuke always did." },
      { n: "And Solar, walking behind them with Koichi, watching them square off in the middle of the pavement over a crepe, felt the Strip tilt under her feet." },
      { bg: 'flashback-hamlim-hallway' },
      { music: 'mystery' },
      { n: "A school hallway. Lockers. Noise. Two boys in the middle of it, too close, one of them practically in the other's face, loud, furious, pushing, and the other one perfectly still, blank-faced, polite, uncomfortable with the closeness but not giving an inch." },
      { n: "And everyone watching. And her in the middle of it, suddenly, without having decided to be. Her hand on the loud one's arm, shoving it away. Her body between them. Two boys who'd been at war about something that had very little to do with the thing they said they were at war about, and everything to do with her standing there." },
      { n: "She'd been furious. She remembered that much. Furious at both of them. And under the fury, something else, quieter, that she'd never said out loud to anyone." },
      { bg: null },
      { music: 'joy' },
      { n: "The Strip came back. The crepe stand. Josuke and Rohan, still arguing, and between them, at some point, Koichi had stepped in, small and patient, a hand on each of their arms, saying \"okay, okay,\" and both of them had stopped, and Solar watched him do it and felt something in her chest twist up like a wet cloth." },
      { s: 'koichi', f: 'neutral', t: "Solar? You okay?" },
      { choose: [
        { t: "Do they always do this?", notes: 3, then: [
          { s: 'koichi', f: 'happy', t: "Every single time. Since the day they met. It's kind of how they say hello." },
          { s: 'koichi', f: 'neutral', t: "They'd die for each other, you know. They have nearly. Several times. They'll never say it. They'd rather argue about crepes forever." }
        ] },
        { t: "I think I used to stand between two people like that.", notes: 3, then: [
          { s: 'koichi', f: 'neutral', t: "...Yeah? Was it hard?" },
          { s: 'solar', f: 'neutral', t: "I don't remember. I remember being angry. At both of them." },
          { s: 'koichi', f: 'happy', t: "That's how you know you care about them both. You only get that mad at people you'd stand between." }
        ] }
      ] },
      { n: "They played dice that evening on a bench outside the convenience store, a gambling game from Josuke's town with rules Rohan kept changing. When Rohan lost, he lost badly, and stood up so fast he knocked the bench, and a glass bottle went off the end and shattered on the pavement, and his pen went with it, the good one, and snapped in half." },
      { n: "Josuke didn't say anything. He just held out his hand, and something came out of him, a figure, pink and blue and armored, like a man made of hearts, and it touched the pieces, and the glass came up off the pavement and rebuilt itself in the air, shard by shard, and the pen came together with a small click, whole. Exactly as they'd been." },
      { s: 'josuke', f: 'neutral', t: "Crazy Diamond. I fix stuff. Not myself, though. Everybody else." },
      { n: "He said it like it was nothing. He tossed the pen back to Rohan without looking at him. And Rohan, for the first time all night, said nothing at all. He just held the pen, and looked at it, and looked at Josuke's back, and put the pen very carefully in his breast pocket, and when they parted at the corner he said \"Josuke,\" in a voice with no insult in it whatsoever, and Josuke stopped, and turned, and waited, and Rohan said \"...your hair's ridiculous,\" and Josuke grinned like he'd been given a medal." }
    ] },

    { after: '11/10', title: '5: pink dark boy', place: 'Iwatodai Strip · Bookworms', scene: [
      { music: 'tender' },
      { n: "Rohan showed her the chapter. It wasn't the last one. It was a new one, a side story, drawn here, in Bookworms, at the back table, in two months, and he never showed anyone things that weren't finished, and it wasn't finished, and he showed it to her anyway, pushing the pages across the table one at a time without looking up, like a man laying down cards he wasn't sure about." },
      { n: "There she was. A girl in a red armband on a rooftop under a green moon, the city full of coffins below her. A gun to her temple. And behind her, rising, enormous, something made of gold and ribbon and veil, a woman with her face hidden, holding a rope that went up into the sky." },
      { n: "He'd drawn the Persona. He'd never seen it. He'd drawn it from her description, from two sentences she'd said once while turning a pen over, and it was exactly right. The veil was exactly right." },
      { s: 'rohan', f: 'serious', t: "Well? Say something. I hate it when people don't say anything. It's the worst review there is." },
      { choose: [
        { t: "It's beautiful. I don't know what else to say.", notes: 3, then: [
          { s: 'rohan', f: 'neutral', t: "...That's acceptable." },
          { n: "He turned away to the window, very fast. In the reflection Solar could see his mouth doing something he didn't want her to see." }
        ] },
        { t: "Why do you draw, Rohan?", notes: 3, then: [
          { s: 'rohan', f: 'neutral', t: "Because I want people to read it. That's all. Not for money. Not to be famous. I want someone, somewhere, to turn the page and feel something they didn't before." },
          { s: 'rohan', f: 'serious', t: "Most people think art is about imagination. It isn't. It's about reality. You have to touch the real thing. Taste it. Otherwise it's just lines." }
        ] },
        { t: "You drew her face hidden.", notes: 2, then: [
          { s: 'rohan', f: 'neutral', t: "You told me it was hidden. I don't draw what I haven't seen. I'm not a fantasy artist." },
          { s: 'rohan', f: 'serious', t: "When she shows it to you, tell me. I'll redraw the whole page." }
        ] }
      ] },
      { s: 'rohan', f: 'neutral', t: "I licked a spider once. To know what it tasted like. For a chapter." },
      { s: 'rohan', f: 'neutral', t: "It tasted like nothing. Very disappointing. Accurate, though. I put that in. Nobody noticed. I noticed." },
      { n: "She laughed so hard she had to hold on to the table, and the old couple at the counter looked over, and the cat on the counter looked over, and Rohan looked deeply offended for a full three seconds, and then didn't, and then laughed too, a short, startled, rusty sound, as if he hadn't used it in some time." },
      { s: 'rohan', f: 'neutral', t: "You know, I haven't drawn anything for the last page since I got here. Not a line. I take it out every night and look at it and put it back." },
      { s: 'rohan', f: 'neutral', t: "And I've drawn a whole new chapter in two months. About a girl who goes up a tower every night not knowing who she is. And it's the best thing I've ever drawn. And it doesn't have an ending either." },
      { choose: [
        { t: "Maybe you're not afraid of the last page. Maybe you're afraid of the blank one after it.", notes: 3, then: [
          { s: 'rohan', f: 'serious', t: "..." },
          { s: 'rohan', f: 'neutral', t: "...You're not supposed to read ME. That's my power. You've stolen my power. Give it back." }
        ] },
        { t: "It doesn't need one yet.", notes: 2, then: [
          { s: 'rohan', f: 'neutral', t: "No. It doesn't. She's still going up the tower." },
          { s: 'rohan', f: 'neutral', t: "I'd like very much to know how hers ends, though. Before I go. That's not a request. That's a note in the margin." }
        ] }
      ] }
    ] },

    { after: '11/17', title: '6: jotaro', place: 'Port Island · Pier', scene: [
      { music: 'night' },
      { n: "There was a very tall man standing at the end of the Port Island pier in a long white coat and a white cap that seemed to merge into his hair, looking out at the water with his hands in his pockets, and he was so still, and so large, and so completely composed, that the gulls on the railing had decided he was a structural feature and were sitting on it in a row an arm's length from his shoulder." },
      { n: "Rohan stopped dead at the start of the pier. Solar had never seen him stop for anyone." },
      { s: 'rohan', f: 'neutral', t: "...Jotaro-san." },
      { s: 'jotaro', f: 'neutral', t: "Rohan. Koichi said you were here." },
      { n: "Jotaro Kujo was enormous, and stoic, and spoke the way glaciers move, slowly, certainly, carving things. He'd come through, he said, looking for Koichi, who'd come looking for Rohan, who'd come looking for nobody. A girl in a porter's coat had pointed him to the pier. She'd apologized. He'd said, \"Yare yare,\" and she'd laughed, a little, and gone." },
      { s: 'jotaro', f: 'neutral', t: "You're the girl with the Persona." },
      { s: 'jotaro', f: 'serious', t: "This hour. This tower. The moon. You're fighting something that wants to end things. At your age." },
      { n: "He wasn't asking. He was looking at her the way people looked at something that shouldn't be happening, and was, and would go on happening whether anyone approved of it or not." },
      { choose: [
        { t: "Somebody has to.", notes: 3, then: [
          { s: 'jotaro', f: 'neutral', t: "Yeah. I said that too. When I was your age. On a long trip with an old man and some friends." },
          { s: 'jotaro', f: 'sad', t: "Not all of them came home. I'd go again. I'd still go. But you should know that before you say somebody has to." }
        ] },
        { t: "I'm not doing it alone.", notes: 3, then: [
          { s: 'jotaro', f: 'serious', t: "Good. Don't. That's the only way any of us made it out." }
        ] }
      ] },
      { s: 'jotaro', f: 'neutral', t: "Rohan. Your editor called the house. Before I came. He wants the last page." },
      { s: 'rohan', f: 'serious', t: "My editor can wait." },
      { s: 'jotaro', f: 'serious', t: "He's been waiting. Everybody's been waiting. You're the one who ran." },
      { n: "Rohan didn't say anything. Solar watched his hands, in his jacket pockets, close into fists, and open, and close." },
      { s: 'jotaro', f: 'neutral', t: "...Yare yare. Be careful. Both of you." },
      { n: "He left without saying goodbye. The gulls came off the railing in a white cloud as he passed, and resettled the moment he'd gone. Rohan watched him all the way down the pier, and for a long time after." },
      { s: 'rohan', f: 'neutral', t: "I'd rather draw him than talk to him. Drawings are kinder. You get to leave things out." },
      { choose: [
        { t: "He's right, though.", notes: 3, then: [
          { s: 'rohan', f: 'serious', t: "He's always right. It's his most irritating quality. He's right in a coat." },
          { s: 'rohan', f: 'neutral', t: "...I ran. From a page. From one page of paper. Jotaro-san fought a man who could stop time, and I ran from a page." }
        ] },
        { t: "What would you leave out?", notes: 2, then: [
          { s: 'rohan', f: 'neutral', t: "The part where he's sad. He's always a little sad. Nobody draws him that way. I could. I won't." }
        ] }
      ] }
    ] },

    { after: '11/24', title: '7: the margins', place: 'Iwatodai Strip · Bookworms', scene: [
      { music: 'mystery' },
      { n: "He hadn't drawn anything since. Not since the November afternoon when she'd finally said yes, and he'd drawn a line in the air, and she'd opened like a book on the back table of Bookworms, and he'd turned her pages, very carefully, one at a time, and gone white." },
      { n: "He'd told her what he found. Some of it. She'd heard it and gone home and not slept. And now he was sitting at the back table with a clean page in front of him and a pen in his hand, and hadn't put the pen to the page, and the old couple had brought him tea twice and taken it away cold twice." },
      { s: 'rohan', f: 'serious', t: "I've read hundreds of people. I've never once been frightened by a book." },
      { s: 'rohan', f: 'serious', t: "Your pages were blank. Every one. As if nobody had written you yet. And the margins were full. Three hands. Three different people, writing all around the edges of you, in pencil, in ink, crossing each other out. Writing you from the outside in." },
      { s: 'rohan', f: 'neutral', t: "I've never seen a person being written by other people. It's the most beautiful thing I've ever read. And it frightened me half to death." },
      { choose: [
        { t: "I'm sorry I asked you to.", notes: 1, then: [
          { s: 'rohan', f: 'serious', t: "Don't be. Don't you dare. It was the best page I've ever read. I'm just not used to reading something I can't edit." }
        ] },
        { t: "Do you think they're looking for me? Whoever's writing?", notes: 3, then: [
          { s: 'rohan', f: 'neutral', t: "...Yes. I'd stake my career on it. Nobody writes in the margins of somebody they don't miss." },
          { s: 'rohan', f: 'neutral', t: "The handwriting was very worried. All three. You can tell from the pressure. Nobody presses that hard on a page unless they're afraid it'll fade." }
        ] },
        { t: "Thank you for telling me the truth.", notes: 3, then: [
          { s: 'rohan', f: 'neutral', t: "I always tell the truth. It's very unpopular. It's the only thing I'm sure of in a story." }
        ] }
      ] },
      { s: 'rohan', f: 'neutral', t: "And the boy. The one in almost every margin, whose face I couldn't read. Smudged. Every time. Like someone kept trying to draw him and couldn't decide which face to give him." },
      { s: 'rohan', f: 'serious', t: "And your friend on the bench." },
      { n: "He stopped. He put the pen down on the table, very precisely, parallel to the edge of the clean page." },
      { s: 'rohan', f: 'serious', t: "I'm not going to talk about that one. Not yet. I told you what I found. I'm not going to tell you what I think. I could be wrong. I'm never wrong. I'd like to be, this once." },
      { choose: [
        { t: "(Don't ask.)", notes: 3, then: [
          { n: "Solar didn't ask. She sat across from him at the back table, and the rain came down on the window, and after a long time he picked up the pen again and, very slowly, began to draw. Not her. The rain on the window. Only the rain. Every drop." }
        ] },
        { t: "Rohan. Tell me.", notes: 1, then: [
          { s: 'rohan', f: 'serious', t: "But I refuse." },
          { s: 'rohan', f: 'neutral', t: "...Not because I don't want to. Because it isn't mine to tell. It isn't even yours yet. It's hers. Whoever she is." }
        ] }
      ] },
      { s: 'rohan', f: 'neutral', t: "I didn't write anything in you. I want you to know that. I could have. A line in the margin. Remember who you are. I've done it to other people for less. I didn't." },
      { s: 'rohan', f: 'neutral', t: "Somebody else is supposed to write that page. Not me. For the first time in my life, I'm going to wait to read the ending like everybody else." }
    ] },

    { after: '12/15', title: '8: the alley', place: 'Iwatodai Strip · Back Alley', time: 'Evening', scene: [
      { music: 'night' },
      { n: "There was an alley behind the Iwatodai Strip that Rohan would not walk down. He'd walk around the whole block to avoid it, in the cold, in the rain, with his sketchbook under his coat, and when Solar had asked why, the first time, he'd said it was the light, and the second time, that it was the smell, and the third time he hadn't said anything at all." },
      { n: "Tonight he stopped at the mouth of it and looked down it for a long time, at the bins and the dark and the single bulb over a back door at the far end." },
      { s: 'rohan', f: 'neutral', t: "There's an alley in my town too. A ghost lives in it. A girl called Reimi. She's been there fifteen years. She keeps the way through." },
      { s: 'rohan', f: 'sad', t: "When I was four, a man broke into the house I was staying in. Reimi was babysitting me. She got me out a window before he got to my room. She didn't get out." },
      { s: 'rohan', f: 'sad', t: "I didn't remember. Not until I was twenty. My own memory just closed that page. Kept it from me. Fifteen years." },
      { s: 'rohan', f: 'serious', t: "Imagine that. I can read anyone's life except the part of my own that mattered most. The great Kishibe Rohan. Couldn't read his own book." },
      { n: "It was cold, the kind of cold that got into your hands first. Solar thought about her own closed pages. About whose hands had pinned up her hair and taught her a knot and put a controller in them. About someone out there, maybe, who'd got her out of a window once, that she'd never thanked, because she didn't know." },
      { choose: [
        { t: "She'd be proud of you, I think.", notes: 2, then: [
          { s: 'rohan', f: 'neutral', t: "...She'd tell me to be nicer to Josuke. She'd be right. I won't do it." }
        ] },
        { t: "(Take his hand. Walk down the alley with him.)", notes: 3, then: [
          { n: "She took his hand, which he allowed, and walked into the alley, which he allowed, and they walked the whole length of it together, past the bins and the back doors and the steam from a kitchen vent, into the dark and then under the bulb and out the other side, into the light of the next street. It took about forty seconds." },
          { s: 'rohan', f: 'neutral', t: "...That was the first time I've walked down an alley since I was four." },
          { s: 'rohan', f: 'neutral', t: "Don't tell anyone. Don't put it in a story. Some things you keep." }
        ] },
        { t: "Then some pages are better closed for a while.", notes: 2, then: [
          { s: 'rohan', f: 'neutral', t: "...Maybe. Until you're ready to read them. That's what Reimi said. When I finally did." },
          { s: 'rohan', f: 'serious', t: "Don't wait fifteen years, Solar. That's my only advice. Don't wait fifteen years." }
        ] }
      ] },
      { s: 'rohan', f: 'neutral', t: "The last page of Pink Dark Boy. I know what's on it now. I've known since the margins." },
      { s: 'rohan', f: 'neutral', t: "It's not an ending. It's a door. The boy walks through it. You never see what's on the other side. And on the last panel, very small, at the bottom, there's somebody waiting for him there. You can't see who." },
      { s: 'rohan', f: 'neutral', t: "That's the page I ran from. I didn't want to draw somebody waiting. I've never let anybody wait for me in my life." },
      { choose: [
        { t: "Koichi waits for you. Every time.", notes: 3, then: [
          { s: 'rohan', f: 'serious', t: "..." },
          { s: 'rohan', f: 'neutral', t: "...Koichi came through a hole in the world to collect me like a parcel. Yes. I suppose he does. I suppose I've never thanked him." },
          { s: 'rohan', f: 'neutral', t: "Don't tell him I said that either. My list of things you can't tell people is getting very long." }
        ] },
        { t: "Draw it anyway. Whoever it is.", notes: 2, then: [
          { s: 'rohan', f: 'neutral', t: "I will. I'll draw them from behind. You never see the face. That's the trick of it." }
        ] }
      ] },
      { n: "He never told anyone else about the alley. She never told anyone either. It didn't go into a story. She thought, walking home through the cold with her hand still warm from his, that it was the most Rohan thing he'd ever done, to finally let someone see a page and then insist it be left out of the book." }
    ] },

    { after: '12/22', title: '9: a hundred and four', place: 'Iwatodai Strip · Bookworms', time: 'Evening', scene: [
      { music: 'tender' },
      { n: "The shop was closed. The old couple had given Rohan a key, which was a thing he'd mentioned eleven times since, each time with an expression of profound, barely concealed delight. The back table was covered in drawings. All of them were of her." },
      { s: 'rohan', f: 'neutral', t: "I've drawn you a hundred and four times. I counted. I count everything. I learned that from you." },
      { s: 'rohan', f: 'neutral', t: "I've never drawn anyone a hundred and four times. Not Koichi. Not myself. Not Jotaro-san, and I've wanted to draw Jotaro-san since I was nineteen." },
      { s: 'rohan', f: 'serious', t: "I need to know what this is. I'm a researcher. I need accurate information. Before I go home. I'm not leaving a world with an unlabeled reference." },
      { choose: [
        { t: "You're my best friend, Rohan. My favorite artist.", notes: 3, then: [
          { s: 'rohan', f: 'neutral', t: "...Favorite artist. Obviously. There's no competition. There's not even a category." },
          { s: 'rohan', f: 'neutral', t: "Best friend, though. That's... new information. Koichi's going to be insufferable. I'll need time to draw it." }
        ] },
        { t: "You're the only person who's read me and stayed.", notes: 3, then: [
          { s: 'rohan', f: 'serious', t: "..." },
          { s: 'rohan', f: 'neutral', t: "...Yes. That's accurate. That's correct information. I read you and I stayed. Write that down. No. I'll write it down." }
        ] },
        { t: "I'm the girl who blocked your light.", notes: 2, then: [
          { s: 'rohan', f: 'neutral', t: "And made a better shadow. Yes. That's in the first drawing. Number one. It's still the best one. I hate that." }
        ] }
      ] },
      { s: 'rohan', f: 'neutral', t: "Josuke says I've changed. He says it like it's an insult. Koichi says it like it's a miracle. Jotaro-san doesn't say anything, which from him is a speech." },
      { s: 'rohan', f: 'neutral', t: "I walked down an alley. I let someone say not yet. I've drawn the same girl a hundred and four times and I haven't gotten bored. I've never not gotten bored." },
      { choose: [
        { t: "(Pick up the first drawing. The shadow.)", notes: 3, then: [
          { n: "She picked up the first one. Her shadow across his table, from September, before he'd even looked up. It was the only drawing of the hundred and four that didn't have her face in it. It was the one that looked most like her." },
          { s: 'rohan', f: 'neutral', t: "...Yes. Take that one. That's the one you'd pick. I knew you'd pick that one." }
        ] },
        { t: "Draw me one more.", notes: 2, then: [
          { s: 'rohan', f: 'neutral', t: "A hundred and five. Fine. Sit. Don't move. Don't look at the door. You always look at the door." },
          { n: "She didn't look at the door. It was, he said afterward, holding it up, the first one where she wasn't looking at the door. He said it was the best one. He said it a little roughly, like it had cost something." }
        ] }
      ] }
    ] },

    { after: '12/30', title: '10: the last page', place: 'Iwatodai Strip · Bookworms', scene: [
      { music: 'tender' },
      { n: "He gave her a manga. One volume, hand-bound, with thread, the spine stitched by hand by somebody whose stitches were very neat and very angry. A cover he'd painted himself. A girl on a rooftop under a green moon, looking up, and behind her, very faint, three outlines of three other girls, standing very close." },
      { s: 'rohan', f: 'neutral', t: "It's yours. Every page. Every time I drew you. In order. With the one about the tower in the middle. I bound it myself. Koichi helped. Josuke fixed the binding when I stabbed it. Don't tell him I let him." },
      { n: "She turned the pages slowly, there in the closed shop with the snow coming down outside the window and the cat asleep on the counter. September. The shadow. The hands. The girl who looked fine. The Persona with its face hidden. Her laughing at the spider. Her not looking at the door." },
      { n: "The last page was blank." },
      { s: 'rohan', f: 'neutral', t: "That's yours too. I can't write that page. Nobody can. I could read your whole life and I still couldn't write it." },
      { s: 'rohan', f: 'neutral', t: "That's the best thing about you, Solar. You don't let anyone write you. Not even me. Especially not me." },
      { s: 'rohan', f: 'neutral', t: "I drew mine last night. The last page of Pink Dark Boy. The door. And somebody waiting. I finally drew it. It took four minutes. I'd been running from four minutes for three months." },
      { s: 'rohan', f: 'serious', t: "I'm going home. I'm handing it in. I'm going to sit on my editor's sofa and watch him read it and not say anything, which will kill me. And then I'm going to go home and start something new. With a blank first page. Which is the most frightening thing a person can do, and I'm going to do it, because a girl in a dormitory does something much worse every night." },
      { choose: [
        { t: "Then draw me again next year.", notes: 3, then: [
          { s: 'rohan', f: 'neutral', t: "I'll draw you every year. I'll draw you when you're old and boring. I'll draw you from memory in a world you're not in. My memory's perfect. You know that." },
          { s: 'rohan', f: 'neutral', t: "I'll still find something new every time. That's the research. That's the whole point of research." }
        ] },
        { t: "Thank you, Rohan. Really.", notes: 2, then: [
          { s: 'rohan', f: 'serious', t: "...Don't thank me. Just let me keep drawing you. That's enough. That's more than enough." }
        ] }
      ] },
      { n: "Koichi and Josuke came by with snacks and fought over the heater. Rohan insulted Josuke's hair. Josuke told Rohan he looked like a pen with anxiety. Koichi said \"okay, okay\" eleven times. Jotaro sent a postcard, somehow, from somewhere, that said only: Good. And under it: Yare yare." },
      { n: "Later, when the others had gone, Rohan picked up his pen and looked at her for a long moment." },
      { s: 'rohan', f: 'neutral', t: "But. If you wanted. I could write one line. On the last page. Not in you. On the paper. Only if you said yes." },
      { choose: [
        { t: "(Hand him the book.)", notes: 3, then: [
          { n: "She handed him the book. He opened it to the blank last page and wrote, very carefully, in his small sharp hand, at the very bottom, so small you'd need to look twice, one line." },
          { s: 'rohan', f: 'neutral', t: "It's not an ending. It's a note in the margin. Like the others. Now there's four of us writing round the edges of you. Don't let any of us fill the middle." },
          { n: "The line said Somebody is waiting. And then, smaller still, in a hand that pressed very hard on the paper: — K.R., reference no. 105." }
        ] },
        { t: "Write it on your last page instead.", notes: 3, then: [
          { s: 'rohan', f: 'neutral', t: "...On mine?" },
          { s: 'solar', f: 'neutral', t: "In the corner. Where the someone's waiting. Put my name there. So it's not blank." },
          { s: 'rohan', f: 'serious', t: "...That's a better note than mine. You're a better writer than me. I've suspected it for weeks. I'm furious." },
          { n: "He did it, though. On the last page of Pink Dark Boy, in the final panel, very small, on the coat of the figure waiting at the door, so small nobody in any world would ever notice, he lettered four characters. Nobody would ever ask about it. He'd know." }
        ] }
      ] }
    ] }
  ],
  afterMax: [
    { title: 'the secret recipe', place: 'Iwatodai Strip · Bookworms', scene: [
      { music: 'day' },
      { n: "Rohan had decided, for reasons he would not explain, that he needed to know how the old couple at Bookworms made the barley tea they served to regulars. He had asked. They had declined. He had asked again. They had declined, very kindly. He was now, Solar suspected, three days from doing something regrettable with his pen." },
      { s: 'rohan', f: 'serious', t: "I could just read them. One line. One page. The tea page. It would take four seconds." },
      { choose: [
        { t: "Don't.", notes: 3, then: [
          { s: 'rohan', f: 'neutral', t: "...I wasn't going to. I was saying it out loud so you'd say that. It works better when someone says it." },
          { s: 'rohan', f: 'happy', t: "I'll just keep drinking it until I figure it out. Research. Very slow research. The best kind." }
        ] },
        { t: "Ask them a third time. Nicely.", notes: 2, then: [
          { n: "He asked a third time. Nicely. It was visibly painful for him. The old woman looked at him for a long moment and then, without a word, wrote the recipe on the back of a receipt and pushed it across the counter, and Rohan looked at it, and folded it, and put it in his breast pocket next to the pen Josuke had fixed, and said thank you in a voice Solar had never heard him use." }
        ] }
      ] }
    ] },
    { title: 'crazy diamond', place: 'Iwatodai Strip', scene: [
      { music: 'joy' },
      { n: "Josuke had challenged Rohan to a drawing contest. Josuke could not draw. This was established in the first four seconds. He'd drawn Koichi as a sort of potato with hair. Rohan had refused to compete against a potato. Josuke had said that sounded like fear." },
      { s: 'rohan', f: 'serious', t: "Solar. Judge. Impartially. Which of us is the superior artist." },
      { choose: [
        { t: "Josuke. Obviously.", notes: 3, then: [
          { s: 'rohan', f: 'serious', t: "...I'm going to take that as a joke, and then lie awake tonight wondering if it was one." },
          { s: 'josuke', f: 'happy', t: "HA! You hear that? I'm an ARTIST now." },
          { n: "Rohan drew Josuke, then, in about forty seconds, perfectly, pompadour and all, laughing, and handed it to him, and Josuke looked at it for a long time, and stopped laughing, and folded it very carefully, and didn't say anything else about the contest." }
        ] },
        { t: "Rohan. But Josuke's potato has heart.", notes: 2, then: [
          { s: 'josuke', f: 'happy', t: "IT HAS HEART." },
          { s: 'rohan', f: 'neutral', t: "A potato with heart. That's going in a story. Don't you dare say I stole it." }
        ] }
      ] }
    ] }
  ]
});
