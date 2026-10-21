/* Astarion · XV Devil. Revamp social link data (femc-game.html). Format: link fields in assets/femc/game/core.js, scene lines in scene.js.
   Visitor (Baldur's Gate 3), second wave (7/7). Evenings only. Friendship (v1's romance is cut).
   The ending he runs from: Ascension, or the sun. He fell through on the night he had to choose.
   Rank 7: Karlach comes through; the camp family (and Shadowheart, if met) sets off a Hoax flashback (the group chat). No fragment.
   Rank 8: in the green, something offers him Ascension and a place where he never has to choose. He says no.
   Rank 10: the photo booth. He isn't in mirrors, but he is in the photograph.
   Cast-only speakers: none (karlach and cazador have portraits). afterMax: scenes for after rank 10 (engine support pending). */
(window.FEMC_GAME_LINKS ||= []).push({
  id: 'astarion', name: 'Astarion', short: 'Astarion', arcana: 'Devil', numeral: 'XV', from: "Baldur's Gate 3",
  kind: 'visitor',
  romance: null,
  starts: '7/9',
  home: { area: 'mall', spot: 'Chagall Café', slot: 'evening', days: [0, 1, 3, 5, 6],
          hint: 'Evenings only (the sun is a problem), most nights of the week, at the window table in Chagall Café.' },
  approach: "A pale man with white curls is sitting alone at Chagall's window table with a cup he hasn't touched, watching everyone who walks in like they're on a menu.",
  cast: {},
  invite: {
    ask: [
      "Darling. Chagall. The window table. I'm being stared at by a waiter and I'd like a witness.",
      "The sun has finally had the decency to go down. Come out.",
      "I've found a late showing of something dreadful. Join me. I need someone to be rude to.",
      "Are you awake? Of course you are. Come and be awake somewhere more interesting.",
      "I have a question about your world's desserts and only you can answer it.",
      "Bored. Beautiful. Thirsty, but not like that. Come."
    ],
    ok: ["Marvelous. I'll order you something you'll pretend not to like.", "Good. Don't dawdle. I age, you know. Very slowly, but I do.", "Excellent. I knew you'd come. You always come."],
    no: ["Rejected. How refreshing. Tomorrow, then.", "Fine. I'll sulk elegantly by myself.", "Very well. Sleep, mortal. One of us should."]
  },
  hangouts: [
    [
      { n: "Chagall at half past nine, the jazz turned low, the last of the office workers gone, and Astarion at the window table with a tiny espresso he would never drink, watching the mall go by in the glass the way other people watched fish in a tank." },
      { s: 'astarion', f: 'happy', t: "Darling. That man. The one with the briefcase and the hideous tie. He's going home to tell his wife he worked late. He did not work late. He was here. For two hours. Eating cake alone." },
      { choose: [
        { t: "Maybe he just likes cake.", notes: 3, then: [
          { s: 'astarion', f: 'neutral', t: "...Hm. Maybe he does. Maybe he sits in a café for two hours because nobody at home asks him what he likes." },
          { s: 'astarion', f: 'happy', t: "Oh, I hate that. You've made me feel something about a man in a terrible tie. Order me a slice of whatever he had." }
        ] },
        { t: "You've been watching people for two hours too.", notes: 2, then: [
          { s: 'astarion', f: 'serious', t: "I've been observing. It's different. I'm a predator. It's practically my job." }
        ] },
        { t: "That's mean.", notes: 1, then: [
          { s: 'astarion', f: 'happy', t: "It's accurate. Accuracy is often mistaken for meanness by people with bad ties." }
        ] }
      ] },
      { n: "He ordered the cake. He couldn't eat it. He pushed it across the table to Solar and watched her eat it, every bite, with an expression of intense, almost scientific concentration, as if he were trying to taste it through her." }
    ],
    [
      { n: "There was a late showing of an old monster film at Screen Shot, black and white, with subtitles, and Astarion had insisted on going because, he said, he wanted to see what mortals thought vampires were, so he could be offended accurately." },
      { s: 'astarion', f: 'serious', t: "He's wearing a CAPE. Indoors. To dinner. Darling, nobody has worn a cape to dinner in three hundred years. It's an embarrassment to the profession." },
      { choose: [
        { t: "You'd look good in a cape.", notes: 3, then: [
          { s: 'astarion', f: 'happy', t: "...I would, wouldn't I. Lined in red. Floor length. Oh, you've ruined my whole argument." }
        ] },
        { t: "Shh.", notes: 2, then: [
          { n: "He shushed. For about forty seconds. Then he leaned over and whispered that the man on screen was holding his fangs wrong, and the woman behind them threw a piece of popcorn at the back of his head, and he caught it without looking, and ate it, and made a face like he'd eaten a moth." }
        ] }
      ] },
      { n: "When the vampire died at the end, in a shaft of sunlight through a window, Astarion went very quiet, and stayed quiet through the credits, and on the way out he said, lightly, to nobody, \"Well. That's one way to go,\" and took Solar's arm on the stairs, and didn't let go of it until the street." }
    ]
  ],
  ranks: [
    { after: '7/9', title: '1: chagall', place: 'Paulownia Mall · Chagall Café', time: 'Evening', scene: [
      { music: 'night' },
      { n: "Chagall Café after dark was all low light and soft jazz and the smell of espresso and cake, and the kind of quiet that only came over the mall after eight, when the families had gone home and the shops were pulling their shutters halfway down. Yukari had dragged Solar there for a study session and then gone out to the corridor to take a call from her mother, and Solar was sitting alone at a table by the window with a cold coffee and a textbook she wasn't reading." },
      { n: "Someone sat down across from her without asking." },
      { n: "Pale. Very pale, in the way of people who never saw the sun, or had stopped seeing it a long time ago. Silver-white curls. Eyes the dark red of a glass of wine held up to a candle. A beautiful, slightly old-fashioned shirt open at the collar, a long elegant hand around a cup of something that wasn't coffee. He was smiling at her. He'd been smiling, she suspected, before he sat down." },
      { s: 'astarion', f: 'happy', t: "Well. You're the only interesting thing in this entire establishment, and I've been sitting here for three hours. I've had time to check." },
      { s: 'astarion', f: 'happy', t: "Astarion. Charmed, I'm sure. And you are?" },
      { choose: [
        { t: "Not interested.", notes: 3, then: [
          { s: 'astarion', f: 'surprised', t: "Ha! Oh, I like you. Nobody's ever said that to my face. They usually wait until I've gone, and then they write a poem about it." }
        ] },
        { t: "Solar.", notes: 2, then: [
          { s: 'astarion', f: 'happy', t: "Solar. Like the sun. How deliciously ironic, given my condition." }
        ] },
        { t: "Is that blood?", notes: 2, then: [
          { s: 'astarion', f: 'neutral', t: "...Observant." },
          { s: 'astarion', f: 'happy', t: "Tomato juice, darling. With a little something. You don't want to know the little something." }
        ] }
      ] },
      { n: "He leaned his chin on his hand and smiled at her, slow and bright and practiced, a smile like a lantern held up in a dark street to lure something in. It was a very good smile. Solar knew, the way she knew where the exits were, exactly how good it was, and exactly how many times it had been put on in front of a mirror it didn't show up in." },
      { s: 'astarion', f: 'neutral', t: "I've just arrived in your charming little city. I was standing on the steps of a palace that isn't mine, in a city that is, on the most important night of the last two hundred years, and then everything went green and every living soul in the street turned into a coffin." },
      { s: 'astarion', f: 'happy', t: "Which, frankly, I took as a compliment to my profession." },
      { register: 'astarion' },
      { s: 'astarion', f: 'neutral', t: "And there was a girl. A little thing, in an absolutely absurd coat, far too big for her. She was the only other warm-blooded creature awake in the whole street. I could hear her heart." },
      { s: 'astarion', f: 'neutral', t: "She looked straight at me. Not afraid. She said, \"You'll want somewhere that stays open late.\" And pointed. And then she said she was sorry." },
      { s: 'astarion', f: 'serious', t: "Darling, nobody has ever apologized to me in two hundred years. Not once. Not the people who should have. And a stranger in a coat says sorry to me in the street and I couldn't think of a single clever thing to say. When I looked back she'd gone." },
      { ifMet: ['wren'], then: [
        { n: "I could hear her heart, he'd said. Solar thought, for no reason she could name, of a girl on a bench who sat so still you forgot to listen for one, and pushed the thought away, because it was absurd, and because her own heart had done something odd and quick at it." }
      ] },
      { choose: [
        { t: "That smile's very good. Who's it for?", notes: 3, then: [
          { n: "The smile stayed exactly where it was. Something behind it went very still, like a hand stopping on a doorknob." },
          { s: 'astarion', f: 'neutral', t: "...Everyone. Anyone. It's a tool, darling. Like a knife. You're very rude to notice." }
        ] },
        { t: "You're a vampire.", notes: 2, then: [
          { s: 'astarion', f: 'neutral', t: "Vampire spawn, technically. There's a hierarchy. I'm on the bottom of it. Or I was. It's complicated. It was going to stop being complicated, very soon. Then this." }
        ] },
        { t: "Are you going to bite me?", notes: 1, then: [
          { s: 'astarion', f: 'happy', t: "In a café? With jazz playing? Darling, I have standards. I'm a monster, not a barbarian." }
        ] }
      ] },
      { n: "Yukari came back from her call and stopped dead in the doorway at the sight of him. Astarion stood, and bowed to her, a beautiful, old-fashioned, completely sarcastic bow, and said he'd been keeping her seat warm, which was impossible, and left, sweeping out through the glass door into the dark corridor of the mall without looking back, as if he'd been the one to end the conversation, which he had." },
      { s: 'yukari', f: 'surprised', t: "...Solar. Who was that. Why was he pale like that. Why did he bow at me." },
      { n: "He'd left the drink. Solar didn't check what was in it. She did notice, when they left, that he was standing at the far end of the corridor under the one broken light, watching the shop windows, and that the windows showed the corridor, and the broken light, and the shutters, and nothing at all where he was standing." }
    ] },

    { after: '7/21', title: '2: reflection', place: 'Paulownia Mall · Shop Windows', time: 'Evening', scene: [
      { music: 'night' },
      { n: "He found her again, the way he'd apparently decided he would. It was after nine and the mall was mostly dark, the shutters halfway down and the cleaning carts out, and he was standing in front of a clothing store window, very still, with his hands clasped behind his back, like a man in a gallery." },
      { n: "The window was lit from inside. A mannequin in a summer dress. A rack of cardigans. And Solar, coming up beside him, reflected clearly in the glass, her bag, her uniform, the tired line of her own mouth." },
      { n: "She couldn't see him. He was standing right beside her, close enough that she could smell the faint cold of him, like a cellar, and the glass showed nothing where he stood. The cardigans went straight through him." },
      { s: 'astarion', f: 'neutral', t: "Two hundred years." },
      { s: 'astarion', f: 'neutral', t: "Two hundred years since I've seen my own face. I don't remember it, you know. Not properly. I remember I was handsome. I remember people told me so. I don't remember what they were looking at." },
      { s: 'astarion', f: 'neutral', t: "I'm told I'm beautiful. I assume it's true. Everyone says it. Everyone says it right before they want something." },
      { choose: [
        { t: "Do you want me to describe it?", notes: 3, then: [
          { s: 'astarion', f: 'surprised', t: "...Would you? Nobody's ever offered." }
        ] },
        { t: "You are. Very.", notes: 1, then: [
          { s: 'astarion', f: 'neutral', t: "Well. Yes. Obviously. But tell me how. Specifically. I want details. Everyone gives me the word and never the details." }
        ] }
      ] },
      { n: "So she did. Standing in front of the empty glass in the dark mall, she told him. The curls, which were more silver than white, and went flat on one side where he leaned his head on his hand. The eyes, which were red, but not like blood, like a cherry held up to the light. The long nose. The scar, faint, at his throat, which she didn't ask about." },
      { n: "And the small crease between his eyebrows that came and went when he was listening hard. That he had now. That he got every time someone said something true and he didn't know what to do with it." },
      { s: 'astarion', f: 'surprised', t: "...A crease. I do not have a crease." },
      { s: 'solar', f: 'neutral', t: "You have it right now." },
      { n: "He laughed, startled, the real kind, the kind that came out before it had been arranged, and put two fingers to the place between his eyebrows, and felt it there, and his face did something astonished, like a man finding a coin in a coat he'd worn for years." },
      { s: 'astarion', f: 'happy', t: "You are a menace, darling. An absolute menace." },
      { choose: [
        { t: "You asked for specifics.", notes: 2, then: [
          { s: 'astarion', f: 'happy', t: "I did. I will never make that mistake again. I'll think about my crease for a century." }
        ] },
        { t: "It's a nice crease.", notes: 3, then: [
          { s: 'astarion', f: 'blushing', t: "...Stop it." },
          { n: "He didn't stop touching it, though. All the way down the corridor he kept putting two fingers up to it, lightly, as if checking it was still there." }
        ] }
      ] },
      { s: 'astarion', f: 'neutral', t: "Your redheaded friend came to see me, you know. Kirijo. She said I'm faint. She said it the way one says a cheque has bounced." },
      { s: 'astarion', f: 'neutral', t: "I told her I've been faint for two hundred years. One gets used to not being seen. And then you stand in front of a window describing my nose, and I look down, and I can't see the floor through my hands any more." },
      { n: "He walked her to the station. At the gates he stopped, and looked at the long dark window of the ticket office, at the empty place in it where he wasn't, and Solar saw him touch the crease again, quickly, as if to make sure, and then smile at nothing, not the lantern smile, a small one, crooked, that nobody was meant to see." }
    ] },

    { after: '8/4', title: '3: just a taste', place: 'Port Island · Back Streets', time: 'Evening', scene: [
      { music: 'night' },
      { n: "August, and the nights were thick and hot and humming with air conditioners. He'd been strange all evening. Short with the waiter. Quiet in the arcade. He kept looking at the side of her neck and then looking away very fast, the way you'd look at a cake in a window when you're trying very hard to be good." },
      { n: "In a quiet side street behind the station, under a lamp that buzzed and flickered, he finally stopped." },
      { s: 'astarion', f: 'serious', t: "I need to ask you something. And I need you to know that you can say no. Really say it. Not the way people say no to me when they mean yes, or yes when they mean no. I'll know the difference. I always know." },
      { s: 'astarion', f: 'sad', t: "I'm hungry. I've been feeding on rats. Pigeons. Your city has a shocking lack of deer. I can manage. I've managed for two hundred years on rats." },
      { s: 'astarion', f: 'neutral', t: "But I wanted to ask. Not because I'm going to take it. Because I've never been allowed to ask anyone anything. My master decided what I ate and who I brought him and when. I wanted to see what it was like. To ask, and wait, and let you decide." },
      { choose: [
        { t: "No. But I'll help you find another way.", notes: 3, then: [
          { s: 'astarion', f: 'surprised', t: "..." },
          { s: 'astarion', f: 'neutral', t: "No. That's... that's fine. That's completely fine. You'd be amazed how rarely anyone says no to me and means it, and stays standing there." },
          { n: "He laughed, a little shakily, and put a hand over his eyes, and laughed again, and when he took his hand away he looked, of all things, relieved, like a man who had put his weight on a step in the dark and found it held." }
        ] },
        { t: "(Hold out one finger.) A drop. That's all.", notes: 2, then: [
          { n: "She held out her hand. One finger. He looked at it for a long time, as if it were a document he had to read very carefully before signing." },
          { n: "Then he took it, and very gently, with one sharp tooth, pricked the tip, and a single bead of red came up, and he touched it to his tongue, and let go of her hand at once, as if it were hot." },
          { s: 'astarion', f: 'surprised', t: "...That's all. That's all you get. Thank you. I didn't think you'd say anything but no." },
          { n: "He looked shaken. Not by the blood. By being trusted with it." }
        ] },
        { t: "Why are you really asking?", notes: 2, then: [
          { s: 'astarion', f: 'neutral', t: "I told you. To see what it's like. Asking." },
          { s: 'astarion', f: 'sad', t: "...And to see what you'd do. Everyone I've ever met did one of two things. Ran, or let me. I've never once met the third kind." }
        ] }
      ] },
      { n: "The next evening, Solar brought him a cooler from a butcher on the Strip who sold to restaurants and did not ask questions of a schoolgirl with exact change, and he opened it on the table at Chagall and looked inside and closed it again, very slowly, and looked at her across the table in the low light for a long moment without any smile at all." },
      { s: 'astarion', f: 'sad', t: "Two hundred years. I've never been asked. Or given the chance to ask. My master just took. And then sent me out to take for him." },
      { s: 'astarion', f: 'neutral', t: "And you went to a butcher. In your school uniform. For a monster you met in a café." },
      { choose: [
        { t: "You're not a monster. You asked.", notes: 3, then: [
          { s: 'astarion', f: 'neutral', t: "Monsters can ask, darling. That's the worst kind." },
          { s: 'astarion', f: 'sad', t: "...But I take your point. I'll keep it somewhere. I don't have many places to keep things." }
        ] },
        { t: "The butcher thinks I'm making stew.", notes: 2, then: [
          { s: 'astarion', f: 'happy', t: "Ha. A very specific stew. A stew for one, every Tuesday, forever." }
        ] }
      ] },
      { n: "He said it so plainly that Solar felt the floor of the night drop out under her, a long cold fall, and then catch. She didn't have a word for what he'd been. She thought she might know what it was like, a little. To be something useful in somebody else's plan. To be sent out, smiling." }
    ] },

    { after: '8/18', title: '4: long nights', place: 'Port Island · Seaside Park', time: 'Evening', scene: [
      { music: 'tender' },
      { n: "He loved the summer nights. He told her so constantly, as if he'd invented them. In his old life, he said, summer meant short dark and long dangerous days, three hours of night to hunt in and twenty-one to hide. Here the nights were long and warm and full of lights and nobody looked at you twice for being out in them." },
      { n: "They walked the seaside promenade at half past ten, when the city was still and the bay was black and the only sound was the water slapping at the stones and a vending machine humming at the end of the path. Solar had an ice cream. It was melting faster than she could eat it." },
      { n: "He'd been quieter since the bridge. Since the train. He'd been out on the Port Island side on the night of the moon, he'd told her, and seen it go across the span with no rails under it, lanterns in its windows, and seen the woman with the case step up into it. He'd said, very lightly, that he knew what it looked like when someone went quietly with something that would keep them. He'd done it himself once. It had taken two hundred years to get off." },
      { s: 'astarion', f: 'neutral', t: "I haven't eaten anything in two hundred years that didn't scream first. Tell me what that tastes like." },
      { choose: [
        { t: "Cold. Sweet. A little like summer.", notes: 3, then: [
          { s: 'astarion', f: 'happy', t: "A little like summer. That's absurdly poetic for a frozen confection. I love it. Say more." }
        ] },
        { t: "(Hold it out to him.)", notes: 2, then: [
          { s: 'astarion', f: 'neutral', t: "...I can't taste it, darling. It's ash to me." },
          { s: 'astarion', f: 'happy', t: "But I'll take a bite anyway. For the company." },
          { n: "He did. He made a face. He laughed. He kept the stick and twirled it the rest of the walk like a tiny cane." }
        ] }
      ] },
      { s: 'astarion', f: 'neutral', t: "Can I tell you something true? I'm not very practiced at it. You'll have to excuse the form." },
      { s: 'astarion', f: 'sad', t: "The charm. The smile. The darling. All of it. I learned it to bring people home to my master. That was my job, for two hundred years. Be lovely. Be irresistible. Bring them back. He'd do the rest." },
      { s: 'astarion', f: 'sad', t: "So when I'm charming to you, I don't actually know if I mean it. I don't know where the act stops. I don't think there's a me under it. I think it might be act all the way down." },
      { n: "It was the most honest thing anyone had ever said to her, and he said it to the bay, not to her face. Solar stood beside him at the rail with ice cream running down her wrist and thought about her own hands pinning up her hair in the mirror every morning before she'd woken up enough to decide to. About a polite voice that came out of her when she was frightened, so smooth she sometimes didn't recognize it. About not knowing, some days, which parts were her and which parts she'd been taught." },
      { choose: [
        { t: "I think the part that's worried about it is real.", notes: 3, then: [
          { s: 'astarion', f: 'surprised', t: "..." },
          { n: "He looked at her for a long time. The crease came, between his eyebrows. He didn't touch it." },
          { s: 'astarion', f: 'neutral', t: "...That's very annoying. That's very annoying and I can't think of a way around it." }
        ] },
        { t: "Then stop performing. Just with me.", notes: 2, then: [
          { s: 'astarion', f: 'neutral', t: "...I don't know how. But I'll try. For you, I'll try. Don't expect much. I might just stand here making faces." }
        ] },
        { t: "I don't know where mine stops either.", notes: 3, then: [
          { s: 'astarion', f: 'neutral', t: "Yours? Darling, you're the least performing person I've ever met." },
          { s: 'solar', f: 'neutral', t: "That's the performance." },
          { n: "He stared at her. Then he laughed, a short helpless sound, and leaned on the rail beside her, close, shoulder to shoulder." },
          { s: 'astarion', f: 'happy', t: "Oh, you're GOOD. You're better than me. Two liars on a promenade. We should start a club." }
        ] }
      ] },
      { n: "They walked to the end of the promenade and back. He didn't say darling once the whole way. It was, Solar noticed, the longest he had ever gone without it, and she didn't say anything about it, because she was learning that the way to keep a thing like that was not to look at it straight on." }
    ] },

    { after: '9/1', title: '5: cazador', place: 'Paulownia Mall', time: 'The Dark Hour', scene: [
      { place: 'Paulownia Mall · The Dark Hour', time: 'The Dark Hour' },
      { dark: true },
      { music: 'mystery' },
      { n: "The green came at midnight, and with it, something that wore a face he knew." },
      { n: "Solar had been walking him back from the late show, because the last monorail had gone and he refused to take a taxi, which he said smelled of other people's regrets. They were halfway across the mall's empty atrium when the lights died and the coffins came up out of the floor where the cleaners had been and the air went thick and sweet." },
      { n: "It came out of the dark between the shuttered shops. Tall, and thin, and elegant, in a long coat with a high collar, with a pale narrow face and a mouth full of patience. It moved like a man who had never once in his life had to hurry for anything. It didn't look at Solar at all." },
      { s: 'cazador', f: 'neutral', t: "My boy. My wayward boy. You've strayed so very far from home." },
      { n: "Astarion didn't move. He was standing completely still, the way prey stands when it's already decided it's been seen, his face gone the color of paper and his hands open at his sides, the daggers still in his belt." },
      { s: 'astarion', f: 'sad', t: "...Cazador." },
      { s: 'cazador', f: 'happy', t: "Come. You've had your little holiday. Your little café. Your little friend. Come home, and kneel, and we will say no more about it." },
      { choose: [
        { t: "(Step in front of him.)", notes: 3, stat: { courage: 1 }, then: [
          { n: "Solar stepped in front of him. She didn't think about it. She did it the way you'd put a hand out to stop a door slamming on somebody's fingers. The thing in the long coat looked at her for the first time, slowly, the way you'd look at a mark on a tablecloth." }
        ] },
        { t: "Astarion. That's not him. Look at me.", notes: 3, then: [
          { n: "He looked at her. It took a long time. His eyes came to her face like a drowning man coming up for air, slowly, then all at once." },
          { s: 'astarion', f: 'serious', t: "...Not him. Right. Not him. He's a world away. He's a world away." }
        ] },
        { t: "(Reach for the Evoker.)", notes: 2, then: [
          { n: "Her hand went to the holster at her hip. The thing in the coat smiled at the gesture, a little, as if a child had pointed a toy at it." }
        ] }
      ] },
      { n: "It wasn't him. It was a Shadow, wearing him, the way the hour sometimes wore things it found in people, the way a fever wears your worst memory. It came apart when Solar's Persona came up out of her with the rope already moving, came apart at the seams like a coat with the stitching cut, and for a moment, before it went, it was a mess of black masks and grasping hands and nothing like a man at all." },
      { n: "But it took a long time to come apart, and the whole time Astarion fought it with his daggers, fast and vicious and furious, every cut aimed at the face, at the patient mouth, over and over, long after it had stopped being a face at all." },
      { n: "Afterward he sat down on the floor of the atrium against a planter, in the green, among the coffins, and put his head in his hands." },
      { s: 'astarion', f: 'sad', t: "He's not here. I know he's not here. He's a world away. He's probably waiting on the palace steps, very patiently, for me to come back and be his." },
      { s: 'astarion', f: 'sad', t: "And I still couldn't move. One sentence. Two hundred years, darling. He's still in me. In my knees. I heard \"kneel\" and my knees started to go." },
      { choose: [
        { t: "They didn't, though. You stayed standing.", notes: 3, then: [
          { s: 'astarion', f: 'neutral', t: "...Did I?" },
          { s: 'solar', f: 'neutral', t: "The whole time. I was in front of you. I'd have seen." },
          { n: "He looked at his own knees, in the green light, as though they belonged to someone else, someone who'd done something surprising, and he didn't know yet whether to be proud of them." }
        ] },
        { t: "(Sit down next to him. Put your jacket around his shoulders.)", notes: 3, then: [
          { n: "Solar sat down next to him and took off her blazer and put it around his shoulders, which was absurd, he was never cold, he was always cold, and he let her, and pulled it closed at the front with both hands, and held it there." }
        ] },
        { t: "It's okay to be scared of him.", notes: 2, then: [
          { s: 'astarion', f: 'serious', t: "I'm not scared of him. I'm scared of how easy it would be to go back." }
        ] }
      ] },
      { n: "They sat against the planter until the green drained out of the sky, all at once, and the lights came back up in the shuttered atrium, and the coffins were cleaners again, three of them, blinking at a pale young man and a schoolgirl sitting on the floor at half past midnight. Astarion stood up first. He held out his hand to her, to pull her up. It was the first time he'd offered her his hand without making a show of it." }
    ] },

    { after: '9/15', title: '6: the scars', place: 'Port Island Station · Hotel', time: 'Evening', scene: [
      { place: 'Port Island Station · Hotel', time: 'Evening', bg: 'elegant-bedroom' },
      { music: 'tender' },
      { n: "The hotel by Port Island Station had a room in his name that nobody had paid for, the way all the visitors had rooms and flats that nobody had paid for, which Mitsuru had explained in a single sentence and a look that discouraged follow-up questions. His had heavy curtains, blackout ones, three layers, and he kept them shut day and night, and the room smelled of old books and cold and something faintly floral he refused to identify." },
      { n: "He'd asked her to come up. He'd been very casual about it, very offhand, over the cake at Chagall, and then stood in the middle of the room when she arrived like a man waiting to be sentenced." },
      { s: 'astarion', f: 'serious', t: "I want to show you something. I've never shown anyone willingly. Don't be kind about it. I can't stand kind. I'll throw something." },
      { n: "He turned around and took off his shirt. His back was covered in scars. Not random ones. Writing. Thin, precise, raised lines in an alphabet Solar had never seen, from his shoulders all the way down, every inch, like a page in a book somebody had written very carefully with a knife." },
      { s: 'astarion', f: 'sad', t: "My master carved them. Over years. A little at a time. Some kind of ritual. I don't know what they say. I've never been able to read them. I can't see them. No mirror will show them to me. I've only ever had to feel them." },
      { s: 'astarion', f: 'sad', t: "Somebody back home could read them. They told me. And then the night I was supposed to decide what to do about it, I came here instead." },
      { choose: [
        { t: "Can I see them properly? So I can tell you what they look like?", notes: 3, then: [
          { s: 'astarion', f: 'neutral', t: "...Yes. Describe them. Like my face. I want to know what he did. Exactly what he did. Not the meaning. The shape." },
          { n: "So she told him. Carefully. Every line. The long ones that went down along his spine like the spine of a book. The small cramped ones under his shoulder blades. How some of them were older, paler, and some were still faintly pink. How whoever had done it had been patient, and steady, and had never once made a mistake, and how that was the worst part." },
          { n: "He listened with his eyes closed and his fists clenched at his sides, and when she was done he let out a long breath, the first breath Solar had ever heard him take that seemed to be for anything." },
          { s: 'astarion', f: 'neutral', t: "...Thank you. Now I know. Now it's mine to know. Not just his." }
        ] },
        { t: "I'm here. You're not alone with this.", notes: 2, then: [
          { s: 'astarion', f: 'serious', t: "...I said don't be kind." },
          { n: "But his shoulders came down, very slowly, like a weight being set on a floor by someone who has been holding it at arm's length for a long time." }
        ] },
        { t: "Someone who'd stitch it would have done it neater.", notes: 2, then: [
          { s: 'astarion', f: 'surprised', t: "...What a strange thing to say. Do you stitch, darling?" },
          { s: 'solar', f: 'neutral', t: "I think I used to." },
          { s: 'astarion', f: 'neutral', t: "Hm. Then you'd know. Whoever did these was never trying to close anything." }
        ] }
      ] },
      { n: "He put his shirt back on. He did the buttons up wrong, the first time, and had to do them again, and his hands weren't steady, and she pretended not to see." },
      { s: 'astarion', f: 'neutral', t: "That night. The one I fell through on. I was standing on his steps with a choice in front of me. Finish the ritual myself. Take what was carved into me and use it. Become what he was. A master. Nothing could ever own me again." },
      { s: 'astarion', f: 'sad', t: "Or don't. And stay what I am. A spawn. Hungry, and owned by nobody, and burned by every sunrise for the rest of a very long life." },
      { s: 'astarion', f: 'sad', t: "I stood on that step with my foot raised and I couldn't put it down. Either way. And then it went green, and I didn't have to." },
      { choose: [
        { t: "You'll have to put it down eventually.", notes: 3, then: [
          { s: 'astarion', f: 'neutral', t: "I know. I know, darling. That's why I showed you my back. So somebody would know what I'm choosing between when I do." }
        ] },
        { t: "I'd have stood there too.", notes: 2, then: [
          { s: 'astarion', f: 'neutral', t: "No. You'd have stood there a very long time, I think. And then done something nobody expected. That's your whole character." }
        ] }
      ] },
      { n: "When he finally looked at her, his eyes were dry, and his face was very tired, and very young, younger than she had ever seen it, and he didn't put the smile back on, and she didn't ask him to." }
    ] },

    { after: '10/1', title: '7: the camp', place: 'Iwatodai Dorm · Lounge', time: 'Evening', scene: [
      { music: 'dorm' },
      { n: "Karlach came through at the start of October, in the green, landing, by her own account, directly on the roof of a parked car and caving it in, and by the next evening she was in the dorm lounge, all red skin and horns and enormous laughing warmth, sitting on the floor because every chair had creaked ominously when she looked at it, and the whole room was about four degrees hotter than it had been." },
      { s: 'karlach', f: 'happy', t: "Fangs! FANGS! You're here! Oh, I KNEW you'd be somewhere! You always land on your feet, you lucky bastard." },
      { s: 'astarion', f: 'neutral', t: "Hello, Karlach. Please don't touch me. You're running very hot." },
      { n: "She touched him. She hugged him, hard, lifting him clean off the ground, and he made a sound like an offended cat and went entirely limp in her arms, like someone who had been through this many times and knew struggling only made it last longer." },
      { s: 'karlach', f: 'happy', t: "And you must be Solar! Fangs hasn't shut up about you. Well, he hasn't said anything ABOUT you, but he says your name in this voice. I know the voice. He gets it about the good wine." },
      { s: 'karlach', f: 'neutral', t: "A little thing in a big coat met me on the car. Pointed me here. Said sorry about the car. I said, love, the car's fine. The car was not fine. She looked like she needed a hug, so I gave her one, and she went all stiff, like Fangs." },
      { ifMet: ['shadowheart'], then: [
        { n: "And Shadowheart was there. She'd come down from the shrine at Solar's text and was standing in the lounge doorway with her arms folded, pretending she'd only stopped by, and Karlach saw her and let out a noise that rattled the windows and was across the room before Shadowheart could finish rolling her eyes." },
        { s: 'shadowheart', f: 'serious', t: "Karlach. Put me down. I mean it. ...Karlach." },
        { s: 'karlach', f: 'happy', t: "Never! You're both here! The camp! Half the camp! In a house with a TELEVISION!" },
        { s: 'shadowheart', f: 'happy', t: "...It's good to see you too, you oversized furnace." }
      ], else: [
        { s: 'karlach', f: 'neutral', t: "And Shadowheart's about, apparently. I can smell her. Moonflowers and disapproval. Fangs says she's at some shrine being dour at the trees." },
        { s: 'astarion', f: 'neutral', t: "She's been dour at me twice. I've survived." }
      ] },
      { choose: [
        { t: "He says my name in a voice?", notes: 2, then: [
          { s: 'astarion', f: 'serious', t: "I do not. Karlach, I will end you." },
          { s: 'karlach', f: 'happy', t: "You absolutely will not. You love me. You told me so once when you were drunk on something you'd bitten." }
        ] },
        { t: "It's really nice to meet you, Karlach.", notes: 3, then: [
          { s: 'karlach', f: 'happy', t: "Nice to meet YOU! You've got a good grip. You lift?" },
          { n: "Akihiko came down the stairs at exactly that moment, saw Karlach, saw her arms, and his whole face lit up like a lantern. He challenged her to an arm-wrestle before he'd reached the bottom step. She beat him in under a second, and he sat looking at his own hand as though it had betrayed him." },
          { s: 'akihiko', f: 'surprised', t: "...How?" },
          { s: 'karlach', f: 'happy', t: "Engine in my chest, buddy! Infernal. Runs hot. Very motivating. Again?" }
        ] }
      ] },
      { n: "It went on for hours. Karlach told stories about a camp somewhere, a fire, a whole ragged family of people who'd been thrown together by something terrible and had decided, against all sense, to keep each other. Astarion corrected every story. Karlach told it louder. Somebody had once, apparently, fallen into a bear. Nobody would say who. Astarion's ears went pink." },
      { n: "And Solar sat on the couch listening to them roast each other, the vampire and the tiefling, mercilessly, lovingly, at full volume, and felt the lounge go strange and bright around her, as though the volume had been turned up on something she'd almost forgotten." },
      { bg: 'flashback-yeobos-cafe' },
      { music: 'mystery' },
      { n: "A phone in her hand at two in the morning. The screen so bright in the dark it hurt. A group chat going off like a string of firecrackers, one message after another, so fast she couldn't read them before the next came, and all of them in capitals." },
      { n: "Somebody called asanoonecares calling her something unrepeatable. Somebody called jaehyukkie asking him why he was so unnecessarily rude. Somebody called geniusuk who had typed LMAOOOO and nothing else, three times. And somebody called junkyute, all exclamation marks and lowercase, asking if she was okay, if she needed some ice cream and hugs." },
      { n: "She'd laughed in the dark, alone in her bed, with the phone held over her face. A whole room of people who insulted each other because it was easier than saying the other thing. Who'd show up at your door at midnight with ice cream and fight over who got there first. She'd been tired of everything. Everything but them." },
      { bg: null },
      { music: 'dorm' },
      { n: "Karlach was laughing so hard she'd slid sideways on the floor. Astarion was pretending not to. And Solar had her phone out, in her lap, open, and didn't remember taking it out, and the screen was blank, no new messages, the little clock in the corner saying nine forty-one, and she was looking at it as if it ought to be full." },
      { choose: [
        { t: "(Put the phone away. Stay in the room.)", notes: 3, then: [
          { n: "She closed the phone and put it face down on the couch, and pulled her knees up, and stayed in the room, and Karlach caught her eye across the floor and grinned at her, a huge warm grin, as if she'd known her for years, and Solar grinned back before she could arrange her face." }
        ] },
        { t: "(Keep looking at the phone a while longer.)", notes: 1, then: [
          { n: "She kept looking. Nothing came. After a while Astarion, without looking at her, reached over and closed it for her, gently, and left his hand on top of it a moment, and took it away." }
        ] }
      ] },
      { n: "Later, when the lounge had gone quiet, Solar found Astarion standing at the window watching Karlach in the street below, who had gone out to look at the moon and was explaining it, loudly, to Koromaru." },
      { s: 'astarion', f: 'neutral', t: "...Don't tell her I'm glad she's here." },
      { s: 'astarion', f: 'sad', t: "We weren't a family, you know. Not really. A collection of disasters around a fire. Every one of us was running from something. Every one of us was going to be dead or worse by the end of the year." },
      { s: 'astarion', f: 'neutral', t: "And every night someone saved you a seat by the fire anyway. Even me. Especially me. I never understood why." },
      { choose: [
        { t: "Your secret's safe.", notes: 2, then: [
          { s: 'astarion', f: 'happy', t: "Good. My reputation couldn't survive it." }
        ] },
        { t: "She knows, Astarion.", notes: 3, then: [
          { s: 'astarion', f: 'neutral', t: "...Yes. She always knew. That's the problem with her. She's never once believed a single thing I've said about myself." }
        ] }
      ] }
    ] },

    { after: '10/20', title: '8: ascension', place: 'Moonlight Bridge · The Dark Hour', time: 'The Dark Hour', scene: [
      { dark: true },
      { music: 'mystery' },
      { n: "The green hour, on Moonlight Bridge, and something was offering him the world." },
      { n: "Solar found him at the middle of the span, standing very still at the rail, alone, with his head tilted, like a man listening to music in another room. She'd felt it from the dorm. She didn't know how. She'd sat up in bed at midnight with her heart going and known, the way you know you've left a stove on." },
      { n: "It didn't have a shape this time. It was a voice in the green, warm and deep and patient and everywhere, coming up off the black water and down the cables, and under it, very faint, the sound of a train, a long way off, coming." },
      { s: 'astarion', f: 'neutral', t: "Darling. You came. Listen. Can you hear it?" },
      { s: 'astarion', f: 'neutral', t: "It says it can make me what he was. A master. Not a spawn. The sun wouldn't touch me. Nothing would. No one would ever own me again." },
      { s: 'astarion', f: 'sad', t: "And it says I wouldn't even have to do the ritual. I wouldn't have to decide anything. I could just stay here, in the green, where nothing ends. I'd never have to put my foot down on that step. Ever." },
      { s: 'astarion', f: 'sad', t: "Nobody would ever own me again, darling. Do you understand what that means to me?" },
      { n: "She understood. She understood, too, the price. She could see it in the green pooling around his feet like water, warm and still. A place where you never had to choose. She knew that place. She didn't know how. It was the most familiar thing she had felt all year, and that frightened her more than the voice." },
      { choose: [
        { t: "Nobody owns you now. You already got out.", notes: 3, then: [
          { s: 'astarion', f: 'surprised', t: "I... already got out." },
          { n: "He said it like a word in a foreign language that he'd just understood the meaning of, standing in a street, years after first hearing it." }
        ] },
        { t: "It's your choice. Not mine. Not anyone's.", notes: 3, then: [
          { s: 'astarion', f: 'sad', t: "...That's the most frightening thing anyone has ever said to me." },
          { s: 'astarion', f: 'neutral', t: "My choice. Mine. Nobody else's." }
        ] },
        { t: "That voice isn't offering you power. It's offering you a coffin.", notes: 2, then: [
          { s: 'astarion', f: 'serious', t: "...Charming. Accurate, but charming." },
          { s: 'astarion', f: 'neutral', t: "I've slept in coffins. Real ones. You're right. They're very restful and you never get to go anywhere." }
        ] }
      ] },
      { n: "He stood there for a long moment with the green around his ankles. The train, far off, kept coming. Then he said no." },
      { n: "He said it out loud, to the green, to the voice, to two hundred years. No. Not loud. Very clearly. The way you say it when you've finally learned what the word is for." },
      { n: "And the voice went quiet, and the green around his feet drained away like water down a grate, and somewhere off down the bay the sound of the train went on past and away and was gone, and it was only a bridge again, under a sick green moon, and a pale man sitting down hard on the cold road with his back against the rail." },
      { s: 'astarion', f: 'surprised', t: "I could have had everything. I could have had the sun." },
      { s: 'astarion', f: 'happy', t: "...And I said no because I wanted to see what you'd say about my crease tomorrow. Isn't that pathetic?" },
      { choose: [
        { t: "It's not pathetic.", notes: 3, then: [
          { n: "She sat down on the cold bridge next to him and told him so, at length, and he laughed until he couldn't breathe, which he didn't need to do anyway, and leaned his head back against the rail and looked up at the green sky." }
        ] },
        { t: "You said no because it was yours to say.", notes: 3, then: [
          { s: 'astarion', f: 'neutral', t: "...Yes. That too. Mostly that. Don't tell anyone it wasn't the crease." }
        ] }
      ] },
      { s: 'astarion', f: 'neutral', t: "I'm going to have to go back and do it properly, you know. Stand on that step. Choose. Out loud. In front of him." },
      { s: 'astarion', f: 'neutral', t: "I think I know what I'll say now. I've had practice. On a bridge. In a world that doesn't exist." }
    ] },

    { after: '11/12', title: '9: what do you want from me', place: 'Paulownia Mall · Chagall Café', time: 'Evening', scene: [
      { music: 'night' },
      { n: "November. Chagall again, the window table, the same jazz, the same tiny cups. He'd ordered her the chocolate cake she liked without asking, and then sat across from her with his chin on his hand and watched her eat it, the way he always did, and not said anything for a while, which he never did." },
      { s: 'astarion', f: 'serious', t: "I need to ask you something, and I want an honest answer, because I can always tell when someone's lying to me. Professional skill." },
      { s: 'astarion', f: 'neutral', t: "What do you want from me?" },
      { s: 'astarion', f: 'sad', t: "Everyone wants something. My master wanted blood, and bodies, and obedience. Everyone else wanted the smile. The ones I brought home wanted a beautiful stranger and a night they'd remember. Karlach wants me to be good, which is exhausting. So what is it? What's your price, darling? I'd like to know before I pay it." },
      { choose: [
        { t: "Nothing. I just like you.", notes: 3, then: [
          { s: 'astarion', f: 'surprised', t: "Nothing." },
          { s: 'astarion', f: 'neutral', t: "A friend who wants nothing. How utterly bizarre. I didn't know that variety existed. I'd have assumed it was a myth, like honest bards." },
          { n: "He laughed, and it cracked in the middle, and he looked away at the window where his reflection should have been, and wasn't, and Solar's was, alone at a table for two, smiling at an empty chair." },
          { s: 'astarion', f: 'happy', t: "Well. I suppose I'll have to keep you, then. Limited edition. Very rare. Probably cursed." }
        ] },
        { t: "The real one. The one with the crease.", notes: 3, then: [
          { s: 'astarion', f: 'neutral', t: "The real one." },
          { s: 'astarion', f: 'sad', t: "...You keep asking for him. I keep not knowing if he exists. And every time you ask, a bit more of him seems to be sitting here. It's very disconcerting." }
        ] },
        { t: "For you to go home and choose. Out loud.", notes: 2, then: [
          { s: 'astarion', f: 'neutral', t: "...That's a price. That's a real price. That's the most expensive thing anyone's ever asked me for." },
          { s: 'astarion', f: 'happy', t: "Done. Paid in full, in advance. I'll send a receipt across the gap." }
        ] }
      ] },
      { s: 'astarion', f: 'neutral', t: "Do you know what you are, darling? You're the first person who's ever made me feel like a person instead of a very attractive weapon." },
      { s: 'astarion', f: 'neutral', t: "That's not a compliment. I'd like to make that clear. It's extremely inconvenient. I had a whole personality built around the weapon thing." },
      { choose: [
        { t: "You're my friend, Astarion. That's all. That's everything.", notes: 3, then: [
          { s: 'astarion', f: 'blushing', t: "...Don't. Don't say it like that in public. People are eating cake." },
          { n: "But he reached across the table and took her hand. Not like a seducer. Not like a performance. Just a hand. Cold, and careful, and holding on like someone who had only very recently learned how." }
        ] },
        { t: "I'll make you a new personality. Free of charge.", notes: 2, then: [
          { s: 'astarion', f: 'happy', t: "Free of charge. Gods, you're terrifying. Fine. I want it to include a cape." }
        ] }
      ] },
      { n: "When she'd finished the cake he made her eat a second slice, a different kind, and watched her eat that too, and when the waiter brought the bill he paid it, with money he'd won from Junpei at cards, and left an absurd tip, and wrote on the back of the receipt, in a beautiful old-fashioned hand, For the cake. And the company. And then crossed out the cake." }
    ] },

    { after: '12/5', title: '10: photo booth', place: 'Paulownia Mall · Photo Booth', time: 'Evening', scene: [
      { music: 'tender' },
      { n: "December, and Paulownia had gone full winter. Lights strung everywhere, a tree in the atrium, a speaker by the escalators playing the same three carols on a loop. And in the corner by the arcade, a photo booth. Pink. Hearts on the curtain. A cartoon bear on the screen who counted down in a voice like a kettle." },
      { n: "He'd been staring at it for a week. She'd watched him. Every time they passed it on the way to Chagall, he slowed down, and looked at the little sample photos pinned to the outside, couples and schoolgirls and one very tired-looking businessman, and then looked away, quick, and walked faster." },
      { s: 'astarion', f: 'neutral', t: "Darling. Those little machines. They take pictures, yes? Not mirrors. A different sort of thing altogether. A lens, and a light, and chemistry." },
      { s: 'astarion', f: 'sad', t: "Do you think... would I be in it? In the picture? Or would it just be you, sitting next to nothing, again?" },
      { choose: [
        { t: "Let's find out.", notes: 3, then: [
          { s: 'astarion', f: 'surprised', t: "...Right now? Oh. Oh, gods. All right. All right. Let me—no. Don't let me think about it." }
        ] },
        { t: "(Pull him into the booth.)", notes: 3, then: [
          { s: 'astarion', f: 'surprised', t: "Darling! At least let me fix my hair!" }
        ] }
      ] },
      { n: "They crammed in together on the tiny bench. The screen counted down. He was so nervous his hands were shaking, which she had never once seen, not on the bridge, not in the green with the thing in the long coat. He didn't smile. He didn't pose. He sat completely still and looked at the lens like it might bite him, like he was waiting for a verdict." },
      { n: "The flash went off. Four times. The bear said wonderful." },
      { n: "The strip slid out of the slot, warm, and Solar picked it up, and held it out to him, and he didn't take it. He just looked." },
      { n: "He was in it. All four frames. Silver curls and red eyes and the long nose and the crease between his brows, deep, the whole way through, because he'd been listening so hard for whether he'd be there. A pale young man in a photo booth with his shoulder pressed against a girl's, looking terrified in the first frame, and confused in the second, and in the third, at something she'd said that she didn't remember saying, laughing, with his eyes shut and his head back." },
      { s: 'astarion', f: 'surprised', t: "...Oh." },
      { s: 'astarion', f: 'sad', t: "Oh. That's me. That's what I look like." },
      { s: 'astarion', f: 'happy', t: "You were right about the crease. Damn you. You were right about all of it." },
      { choose: [
        { t: "You look happy.", notes: 3, then: [
          { s: 'astarion', f: 'neutral', t: "...I do, don't I. In the third one. I didn't know I could look like that." },
          { s: 'astarion', f: 'neutral', t: "I've been the most looked-at monster in Baldur's Gate for two hundred years, and I've never once seen that face. It was on me the whole time. Somebody else had to show it to me." }
        ] },
        { t: "Keep it. It's yours.", notes: 2, then: [
          { s: 'astarion', f: 'happy', t: "No. We'll take another. One each. I am not leaving this world without a copy of my own cheekbones." }
        ] }
      ] },
      { n: "They took eleven more strips. He kept every single one. He made faces. He posed. He did a frame where he bared his fangs at the camera like a cartoon vampire and then a frame where he immediately apologized to the camera for it. He did one frame on his own, with Solar outside the curtain, and wouldn't let her see it, and put it inside his coat, against his chest." },
      { s: 'astarion', f: 'neutral', t: "I'm going home, darling. At the end of January. I'm going to walk up those steps and stand in front of him and say it to his face. No. Out loud. In my own voice. And then I'm going to walk back down them in the dark and never see the sun again, and it's going to be mine, the dark. I'll have chosen it." },
      { s: 'astarion', f: 'neutral', t: "And on the long nights, which will be all of them, I'm going to take these out and look at my own face. Laughing. Next to yours." },
      { choose: [
        { t: "Take the third one. It's the best.", notes: 3, then: [
          { s: 'astarion', f: 'happy', t: "I'm taking all of them. I'm a monster. Monsters hoard." },
          { s: 'astarion', f: 'neutral', t: "...But I'll look at the third one first. Every time." }
        ] },
        { t: "I'm proud of you.", notes: 3, then: [
          { s: 'astarion', f: 'blushing', t: "...Stop. Stop it. I'm two hundred years old. Nobody is proud of me. It's not done." },
          { n: "He took her hand anyway, on the little bench under the hanging hearts, and held it, and didn't let go until the bear on the screen asked, in its kettle voice, whether they'd like to take another." }
        ] }
      ] },
      { n: "When the mall closed, the photo booth had run out of paper, and the man who came to refill it found, stuck to the inside of the curtain with the little adhesive dot from a price tag, a single photo strip, four frames of a girl in a school uniform laughing at something, alone on the bench, and the man shrugged and left it there, and nobody ever took it down." }
    ] }
  ],
  afterMax: [
    { title: 'the late show', place: 'Paulownia Mall · Screen Shot', scene: [
      { music: 'night' },
      { n: "There was a late double feature of romantic comedies at Screen Shot, and Astarion had bought two tickets with Junpei's card winnings and announced that he intended to hate every minute of both, out loud, in detail, and that Solar was required to attend as a witness." },
      { s: 'astarion', f: 'serious', t: "She's running through an airport. Darling. She's running through an airport in heels. Nobody does that. I've hunted in airports. Metaphorically." },
      { choose: [
        { t: "You're crying.", notes: 3, then: [
          { s: 'astarion', f: 'serious', t: "I'm not crying. I don't have the fluids to spare. It's very dusty in here." },
          { n: "He was crying. A little. Silently, in the dark, at a woman in heels catching a plane. Solar handed him a napkin from the popcorn bag. He took it with enormous dignity and blew his nose very quietly into it." }
        ] },
        { t: "Shh.", notes: 2, then: [
          { n: "He shushed. He made it through the whole airport scene without a word, and at the kiss he made a small involuntary noise, and then looked at Solar in the dark with an expression of pure betrayal, as if she'd done it to him." }
        ] }
      ] },
      { s: 'astarion', f: 'happy', t: "Absolute rubbish. Both of them. We're coming back next week. They're showing the sequel." }
    ] },
    { title: 'fourteen hours', place: 'Paulownia Mall · Chagall Café', scene: [
      { music: 'night' },
      { n: "It was the longest night of the year coming up, the solstice, and Astarion had been counting. Fourteen hours of dark, he said, with the reverence of a man describing a feast. Fourteen whole hours. He intended to use every one." },
      { s: 'astarion', f: 'happy', t: "Walk with me, darling. Until the sun comes up. All of it. I'll have you home before dawn. Well. At dawn. Exactly at dawn, and then I'll run." },
      { choose: [
        { t: "(Walk with him until the light starts.)", notes: 3, then: [
          { n: "They walked the whole city. The Strip and the shrine steps and the riverside and the long empty bridge, talking about nothing, and at a quarter to seven, on the dorm's front step, with the sky over the bay going from black to the faintest gray, he stopped, and looked east, and didn't run. Not yet. He stood there with her one whole minute longer than he should have, watching the gray come, the closest he'd been to a sunrise in two hundred years." },
          { s: 'astarion', f: 'neutral', t: "...There. That's enough. That's the most I've seen of a morning since I was alive. Goodnight. Good morning. Whichever." }
        ] },
        { t: "I have school.", notes: 1, then: [
          { s: 'astarion', f: 'serious', t: "School. On the solstice. Your world is barbaric." },
          { s: 'astarion', f: 'happy', t: "Fine. Four hours. I'll use the other ten to be dramatic at the bay by myself." }
        ] }
      ] }
    ] }
  ]
});
