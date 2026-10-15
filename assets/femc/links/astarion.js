/* Astarion · XV The Devil. Arrives on the 7/7 full moon. Evenings only. Format notes are at the top of akihiko.js.
   MAX uses the Hoax photo booth idea: the first picture of himself he's seen in two hundred years. */
FemcSocial.define({
  id: 'astarion', name: 'Astarion', short: 'Astarion', arcana: 'Devil', numeral: 'XV', from: "Baldur's Gate 3",
  arrives: '7/7',
  home: { place: 'Paulownia Mall · Chagall Café', slot: 1, days: [0, 1, 3, 5, 6], hint: 'Evenings only (the sun is a problem), most nights of the week, at Chagall Café.' },
  romance: true,
  cast: { cazador: 'Cazador', karlach: 'Karlach', akihiko: 'Akihiko' },
  texts: [
    { id: 'ast-1a', rank: 1, days: 1, slot: 1, msgs: [
      { from: 'astarion', t: 'Darling. I have discovered that this device can send messages to you at any hour of the night.' },
      { from: 'astarion', t: 'This is the single greatest invention of your miserable little world.' }
    ], reply: [
      { t: 'Please do not text me at 4 a.m.', notes: 2, then: [{ from: 'astarion', t: 'No promises. I am nocturnal, and you are interesting.' }] },
      { t: 'Welcome to the 21st century.', notes: 3, then: [{ from: 'astarion', t: 'Hm. Two hundred years late, but I do love a dramatic entrance.' }] }
    ] },
    { id: 'ast-2a', rank: 2, days: 1, slot: 1, msgs: [
      { from: 'astarion', t: 'I have been standing in front of a shop window for an hour.' },
      { from: 'astarion', t: 'Still nothing. Not even a smudge.' },
      { from: 'astarion', t: 'Tell me again about the cheekbones.' }
    ], reply: [
      { t: 'Unfairly good cheekbones.', notes: 3, then: [{ from: 'astarion', t: 'Yes. Yes, I thought so. Thank you, darling.' }] },
      { t: "You're very vain, you know.", notes: 2, then: [{ from: 'astarion', t: 'I am vain about a face I have not seen in two centuries. Allow me this.' }] }
    ] },
    { id: 'ast-3a', rank: 3, days: 1, slot: 1, msgs: [
      { from: 'astarion', t: 'About last night.' },
      { from: 'astarion', t: 'Thank you for not looking at me like a monster. Whatever you decided.' }
    ], reply: [
      { t: "You're not a monster.", notes: 3, then: [{ from: 'astarion', t: '...That is a very bold claim. I will allow it, for now.' }] },
      { t: "You're a little bit of a monster.", notes: 2, then: [{ from: 'astarion', t: 'Ha! Honest. I like that more than I should.' }] }
    ] },
    { id: 'ast-5a', rank: 5, days: 1, slot: 1, msgs: [
      { from: 'astarion', t: "I'm fine." },
      { from: 'astarion', t: "Don't ask." },
      { from: 'astarion', t: '...Are you awake?' }
    ], reply: [
      { t: "I'm awake. Want me to come over?", notes: 3, then: [{ from: 'astarion', t: 'Yes.' }, { from: 'astarion', t: 'I mean. If it is not too much trouble.' }, { from: 'astarion', t: 'Yes.' }] },
      { t: "I'm here. Talk to me.", notes: 3, then: [{ from: 'astarion', t: 'I do not want to talk. I just wanted to know someone was awake.' }] }
    ] },
    { id: 'ast-7a', rank: 7, days: 1, slot: 1, msgs: [
      { from: 'astarion', t: 'Karlach broke your boxing friend\'s arm-wrestling record. Twice.' },
      { from: 'astarion', t: 'He has asked for a rematch. He will lose. I have money on it.' }
    ], reply: [
      { t: "Don't bet against Akihiko.", notes: 2, then: [{ from: 'astarion', t: 'Darling. She has an engine in her chest. I bet against him with enormous confidence.' }] },
      { t: "You're glad she came through.", notes: 3, then: [{ from: 'astarion', t: '...Don\'t tell her.' }, { from: 'astarion', t: 'Yes.' }] }
    ] },
    { id: 'ast-8a', rank: 8, days: 1, slot: 1, msgs: [
      { from: 'astarion', t: 'I could have had everything. Power. The night itself.' },
      { from: 'astarion', t: 'And I said no because of you. Do you know how irritating that is?' }
    ], reply: [
      { t: "You said no because of you.", notes: 3, then: [{ from: 'astarion', t: '...' }, { from: 'astarion', t: 'Well. Perhaps both.' }] },
      { t: "I'm very proud of you.", notes: 3, then: [{ from: 'astarion', t: 'Stop it. I will cry, and vampires do not cry. Officially.' }] }
    ] },
    { id: 'ast-9r', rank: 9, route: 'romance', days: 1, slot: 1, msgs: [
      { from: 'astarion', t: 'I keep waiting for the part where you want something from me.' },
      { from: 'astarion', t: 'It never comes. It is the most romantic thing that has ever happened to me.' }
    ], reply: [
      { t: 'I just want you.', notes: 3, then: [{ from: 'astarion', t: '...Darling.' }, { from: 'astarion', t: 'That is cheating.' }] },
      { t: 'Get used to it.', notes: 3, then: [{ from: 'astarion', t: 'I intend to. Slowly. Over several centuries.' }] }
    ] },
    { id: 'ast-9f', rank: 9, route: 'friend', days: 1, slot: 1, msgs: [
      { from: 'astarion', t: 'A friend. A real one. Who wants nothing.' },
      { from: 'astarion', t: 'I did not know they came in that variety.' }
    ], reply: [
      { t: 'Limited edition.', notes: 3, then: [{ from: 'astarion', t: 'Then I shall treasure you appropriately. With sarcasm.' }] },
      { t: "You deserve one.", notes: 3, then: [{ from: 'astarion', t: '...Goodnight, darling.' }] }
    ] }
  ],
  ranks: [
    { after: '7/8', title: '1: chagall', place: 'Paulownia Mall · Chagall Café', scene: [
      { n: "Chagall Café after dark was all low light and soft jazz and the smell of espresso and cake, the kind of place couples went to look at each other over tiny cups. Solar was there because Yukari had dragged her there and then left to take a phone call, and she was sitting alone at a window table feeling profoundly out of place." },
      { n: "Someone sat down across from her without asking." },
      { n: "Pale. Very pale, in the way of people who never saw the sun. Silver-white curls. Red eyes. Pointed ears, not hidden at all, like he'd decided that in a world this strange nobody would bother to look twice, and he was right. A burgundy coat with gold embroidery, the kind of thing nobody had worn in two hundred years. He had a glass of something dark red in front of him that she very sincerely hoped was wine." },
      { s: 'astarion', f: 'happy', t: "Well. You're the only interesting thing in this entire establishment, and I've been here three nights." },
      { s: 'astarion', f: 'happy', t: "Astarion. Charmed, I'm sure. And you are?" },
      { choose: [
        { t: "Not interested.", notes: 3, then: [
          { s: 'astarion', f: 'surprised', t: '...' },
          { s: 'astarion', f: 'happy', t: "Ha! Oh, I like you. Nobody's ever said that to my face. They usually wait until I've gone." }
        ] },
        { t: "Solar.", notes: 2, then: [{ s: 'astarion', f: 'happy', t: "Solar. Like the sun. How deliciously ironic, given my... condition." }] },
        { t: "Is that blood?", notes: 3, then: [
          { s: 'astarion', f: 'surprised', t: "...Observant." },
          { s: 'astarion', f: 'happy', t: "Tomato juice, darling. With a little something. You don't want to know the little something." }
        ] }
      ] },
      { n: "He leaned his chin on his hand and smiled at her, slow and bright and practiced, a smile like a door opening in a warm house. It was a very good smile. Solar had seen a lot of very good smiles. She knew exactly what a smile was for when it was that good." },
      { s: 'astarion', f: 'happy', t: "I've just arrived in your charming little city. Fell asleep in a crypt, woke up in the middle of the most delightful green midnight. Everyone frozen. Coffins in the street. I nearly wept with joy." },
      { choose: [
        { t: "That smile's very good. Who's it for?", notes: 3, then: [
          { s: 'astarion', f: 'serious', t: '...' },
          { n: "The smile stayed. Something behind it went very still, like a hand pausing on a doorknob." },
          { s: 'astarion', f: 'neutral', t: "...Everyone. Anyone. It's a tool, darling. Like a knife. You're very rude to notice." }
        ] },
        { t: "You're a vampire.", notes: 2, then: [{ s: 'astarion', f: 'happy', t: "Vampire spawn, technically. There's a hierarchy. I'm on the bottom of it. Or I was." }] }
      ] },
      { n: "Yukari came back from her call and stopped dead at the sight of him. Astarion stood, bowed, kissed her hand, and was gone into the night before she could say a word, coat swinging, like a stage exit." },
      { n: "He left the drink. Solar did not check what was in it." }
    ] },

    { after: '7/20', title: '2: reflection', place: 'Paulownia Mall · Shop Windows', scene: [
      { n: "He found her again, the way he'd apparently decided he would. It was after nine and the mall was half-closed, shutters down on most of the shops, the lights in the walkways dimmed to a warm, sleepy yellow." },
      { n: "He was standing in front of a clothing store window, very still. The window was lit from inside. The mannequins wore summer dresses. Solar could see herself in the glass, faintly, and the shop behind it, and the walkway behind her." },
      { n: "She could not see him. He was standing right next to her, and the glass showed nothing where he stood. Just the dresses, and the dark." },
      { s: 'astarion', f: 'neutral', t: "Two hundred years." },
      { s: 'astarion', f: 'sad', t: "Two hundred years since I've seen my own face. I don't remember it, you know. Not properly. I remember being handsome. I think." },
      { choose: [
        { t: "You are. Very.", notes: 3, then: [
          { s: 'astarion', f: 'surprised', t: '...' },
          { s: 'astarion', f: 'happy', t: "Well. Yes. Obviously. But tell me how. Specifically. I want details." }
        ] },
        { t: "Do you want me to describe it?", notes: 3, then: [{ s: 'astarion', f: 'sad', t: "...Would you? Nobody's ever offered." }] }
      ] },
      { n: "So she did. Standing in front of the empty glass, in the dim mall, she told him. The curls, white as candle wax, falling over his forehead like they had their own opinions. The cheekbones, unfairly good. The eyes, red, yes, but warm at the corners when he forgot to arrange them. The little crease between his brows when he was pretending not to care about something." },
      { s: 'astarion', f: 'blushing', t: "...A crease. I do not have a crease." },
      { n: "He had a crease. He had it right now. She told him so. He laughed, startled, the real kind, the kind that wasn't a tool, and put his hand over his face like he could hide the crease from her." },
      { s: 'astarion', f: 'happy', t: "You are a menace, darling. An absolute menace." },
      { choose: [
        { t: "You asked for specifics.", notes: 3, then: [{ s: 'astarion', f: 'happy', t: "I did. I will never make that mistake again. I'll think about my crease for a century." }] },
        { t: "It's a nice crease.", notes: 3, then: [{ s: 'astarion', f: 'blushing', t: "...Stop it." }] }
      ] },
      { n: "He walked her to the station. At the gates he stopped and looked at his own reflection in the dark glass of the ticket machine, or the place where it should have been, and said, very quietly, \"Thank you,\" to the empty space, and Solar pretended not to hear." }
    ] },

    { after: '8/3', title: '3: just a taste', place: 'Port Island · Back Streets', scene: [
      { n: "August, and the nights were thick and hot and buzzing. He'd been strange all evening. Shorter tempered. Thinner, somehow. He kept looking at the people walking past them, at their necks, and then looking away like he'd been caught." },
      { n: "In a quiet side street behind the station, under a flickering lamp, he finally stopped." },
      { s: 'astarion', f: 'serious', t: "I need to ask you something, and I need you to know you can say no." },
      { s: 'astarion', f: 'sad', t: "I'm hungry. I've been feeding on rats. Pigeons. Your city has very few deer. I could take what I need from a stranger, but I promised myself I wouldn't. Not here." },
      { s: 'astarion', f: 'neutral', t: "Just a taste. From you. Only if you want. I'll stop the moment you say." },
      { choose: [
        { t: "Okay. Just a taste.", notes: 3, then: [
          { s: 'astarion', f: 'surprised', t: '...Really?' },
          { n: "He was gentle. That was the strangest part. He tilted her chin with one cold finger and was careful about it, slow, like she was something that might break, and it stung for a second and then didn't, and it was over almost before she'd braced herself." },
          { s: 'astarion', f: 'blushing', t: "...Thank you. I... thank you. I didn't think you'd say yes." },
          { n: "He looked shaken. Not by the blood. By being trusted with it." }
        ] },
        { t: "No. But I'll help you find another way.", notes: 3, then: [
          { s: 'astarion', f: 'neutral', t: '...' },
          { s: 'astarion', f: 'happy', t: "No. That's... that's fine. That's completely fine. You'd be amazed how rarely anyone says no to me and means it kindly." },
          { n: "The next night, Solar brought him a cooler from a butcher in Paulownia who did not ask questions. He looked at it like it was a bouquet of flowers." }
        ] }
      ] },
      { s: 'astarion', f: 'sad', t: "Two hundred years, I've never been asked. Or given the chance to ask. My master just... took. And made me take." },
      { n: "He said it so plainly that Solar felt the floor of the night drop out under her, a long cold fall into something she didn't know the bottom of." }
    ] },

    { after: '8/17', title: '4: long nights', place: 'Port Island · Seaside Park', scene: [
      { n: "He loved the summer nights. He told her so constantly. In his old life, summer meant short nights, a few miserable hours of dark before the sun came back to burn him. Here, in Iwatodai, in August, the nights were long and soft and warm and full of people." },
      { n: "They walked the seaside promenade at midnight, minus the green hour, when the city was still awake and the bay was black and full of the reflections of lights. He bought her an ice cream from a vending machine and watched her eat it with total fascination." },
      { s: 'astarion', f: 'happy', t: "I haven't eaten anything in two hundred years that didn't scream first. Tell me what it tastes like." },
      { choose: [
        { t: "Cold. Sweet. A little like summer.", notes: 3, then: [{ s: 'astarion', f: 'happy', t: "A little like summer. That's absurdly poetic for a frozen confection. I love it." }] },
        { t: "(Hold it out to him.)", notes: 3, then: [
          { s: 'astarion', f: 'surprised', t: "...I can't taste it, darling. It's ash to me." },
          { s: 'astarion', f: 'happy', t: "But I'll take a bite anyway. For the company." },
          { n: "He did. He made a face. He laughed. He kept the stick and twirled it the rest of the walk like a tiny wand." }
        ] }
      ] },
      { s: 'astarion', f: 'neutral', t: "Can I tell you something true? I'm not very practiced at it." },
      { s: 'astarion', f: 'sad', t: "The charm, the smile, the 'darling.' All of it. I learned it to bring people back to my master. To feed him. That was my job. For two hundred years. Seducing strangers into the dark." },
      { s: 'astarion', f: 'sad', t: "So when I'm charming to you, I don't actually know if I mean it. I don't know where the act stops. I've never known." },
      { n: "It was the most honest thing anyone had ever said to her, and he said it to the bay, not to her face. She recognized the act. She'd been running her own, in every new school, for years. She just hadn't known anyone else's went that deep." },
      { choose: [
        { t: "I think this part's real.", notes: 3, then: [
          { s: 'astarion', f: 'surprised', t: '...This part?' },
          { n: "Solar didn't explain. She didn't need to. He looked at her for a long time, and the smile didn't come, and he didn't seem to need it to." }
        ] },
        { t: "Then stop performing. Just with me.", notes: 3, then: [
          { s: 'astarion', f: 'sad', t: "...I don't know how. But I'll try. For you, I'll try." }
        ] }
      ] }
    ] },

    { after: '9/1', title: '5: cazador', place: 'Paulownia Mall · The Dark Hour', scene: [
      { n: "The green hour came, and with it, something that wore a face he knew." },
      { n: "It came out of the dark between the shuttered shops of Paulownia, tall and thin and elegant, in an old-fashioned coat, with hair slicked back and red eyes and a smile like a cut. Solar knew immediately it wasn't real. It was a shadow, wearing a shape. But the shape was exact, and Astarion, beside her, made a sound she had never heard a person make." },
      { register: 'cazador' },
      { s: 'cazador', t: "My boy. My wayward boy. You've strayed so far from home." },
      { n: "Astarion didn't move. He was standing completely still, the way prey stands, his face gone gray, his hands at his sides like they'd forgotten they were hands." },
      { s: 'astarion', f: 'sad', t: "...Cazador." },
      { choose: [
        { t: "(Step in front of him.)", notes: 3, then: [
          { n: "Solar stepped in front of him. She didn't think about it. She just did it, the way you'd put your hand out to catch something falling, and she stood between Astarion and the thing with his master's face, and she felt him, behind her, breathe in." }
        ] },
        { t: "Astarion. That's not him. Look at me.", notes: 3, then: [
          { n: "He looked at her. It took a long time. His eyes came to her face like a drowning man coming up for air." },
          { s: 'astarion', f: 'serious', t: "...Not him. Right. Not him." }
        ] }
      ] },
      { n: "They fought it together. Him with his daggers, fast and vicious and furious, every cut like a sentence he'd been waiting two centuries to say. When it finally broke apart into smoke and drifted away under the green moon, he stood over the place it had been and was shaking so hard his teeth chattered." },
      { s: 'astarion', f: 'sad', t: "He's not here. I know he's not here. He's a world away." },
      { s: 'astarion', f: 'sad', t: "And I still couldn't move. Two hundred years, darling. He's still in me." },
      { n: "Solar didn't say anything. She took off her jacket and put it around his shoulders, which was absurd, he wasn't cold, he couldn't be cold. He pulled it tight around himself anyway and didn't let go of it for the rest of the night." }
    ] },

    { after: '9/15', title: '6: the scars', place: "Astarion's Room · Business Hotel", scene: [
      { n: "The hotel by the station had a room in his name that nobody had paid for, like all the visitors' rooms. It was small and clean and the curtains were blackout curtains that he'd taped shut at the edges." },
      { n: "He'd asked her to come. He'd been very casual about it, very offhand, and then stood in the middle of the room for a full minute after she arrived with his back to her, not speaking." },
      { s: 'astarion', f: 'neutral', t: "I want to show you something. I've never shown anyone willingly. Don't be kind about it. I can't stand kindness about this." },
      { n: "He took off his shirt. His back was covered in scars. Not random ones. Writing. Thin, precise lines carved deep into the skin, a whole spiral of them from his shoulders to his waist, some kind of script she didn't recognize, old and silvered and terrible." },
      { s: 'astarion', f: 'sad', t: "My master carved them. Over years. Some kind of ritual. I don't know what they say. I've never been able to see them. No mirror, you understand." },
      { choose: [
        { t: "I'm here. You're not alone with this.", notes: 3, then: [
          { s: 'astarion', f: 'sad', t: "...I said don't be kind." },
          { n: "But his shoulders came down, very slowly, like a held weight being set on a floor." }
        ] },
        { t: "Can I see them properly? To tell you what they look like?", notes: 3, then: [
          { s: 'astarion', f: 'surprised', t: '...' },
          { s: 'astarion', f: 'sad', t: "...Yes. Describe them. Like my face. I want to know what he did." },
          { n: "So she told him. Carefully. Every line. He listened with his eyes closed and his fists clenched, and when she was done he let out a breath that sounded two hundred years old." }
        ] }
      ] },
      { s: 'astarion', f: 'neutral', t: "...Thank you. Now I know. Now it's mine to know, and not just his." },
      { n: "He put his shirt back on. He didn't look at her for a while. When he finally did, his eyes were wet, and he was furious about it, and she didn't say a single word, which was exactly right." }
    ] },

    { after: '10/1', title: '7: karlach', place: 'Iwatodai Dorm · Lounge', scene: [
      { n: "Karlach came through at the beginning of October, during the green hour, landing in the middle of Port Island Station like a meteor, literally steaming, and immediately punched a shadow so hard it exploded." },
      { register: 'karlach' },
      { n: "By the next evening she was in the dorm lounge, all red skin and horns and enormous laughing grin, the engine in her chest glowing orange through her shirt, eating an entire pot of rice with a serving spoon." },
      { s: 'karlach', t: "Fangs! FANGS! You're here! Oh, I knew you'd be somewhere! You always land on your feet, you smug little nightmare!" },
      { s: 'astarion', f: 'serious', t: "Hello, Karlach. Please don't touch me. You're running very hot." },
      { n: "She touched him. She hugged him, hard, lifting him off the ground. He made a sound like an offended cat. He did not, Solar noticed, try very hard to get away." },
      { s: 'karlach', t: "And you must be Solar! Fangs hasn't shut up about you. Well, he hasn't said anything about you. But he's thought really loudly." },
      { choose: [
        { t: "He thinks about me?", notes: 3, then: [
          { s: 'astarion', f: 'blushing', t: "I do not. Karlach, I will end you." },
          { s: 'karlach', t: "You absolutely will not, you love me." }
        ] },
        { t: "It's nice to meet you, Karlach.", notes: 2, then: [{ s: 'karlach', t: "Nice to meet YOU! You've got a good grip. You lift?" }] }
      ] },
      { n: "Akihiko came downstairs, saw Karlach, saw her arms, and immediately challenged her to an arm-wrestling match. She accepted with enormous delight. She won in three seconds. He asked for a rematch. She won in two." },
      { s: 'akihiko', f: 'surprised', t: "...How?" },
      { s: 'karlach', t: "Engine in my chest, buddy! Infernal. Runs hot. Very motivating." },
      { n: "Later, when the lounge had quieted down, Solar found Astarion standing by the window watching Karlach teach Akihiko a terrible infernal drinking song. He wasn't smiling. Not on the outside." },
      { s: 'astarion', f: 'neutral', t: "...Don't tell her I'm glad she's here." },
      { choose: [
        { t: "Your secret's safe.", notes: 3, then: [{ s: 'astarion', f: 'happy', t: "Good. My reputation can't take it." }] },
        { t: "She knows, Astarion.", notes: 3, then: [{ s: 'astarion', f: 'blushing', t: "...Yes. She always knew. That's the problem with her." }] }
      ] },
      { n: "Karlach faded a week later, at the edges, like the others. She made Astarion promise to be nice to Solar. He promised. She made him say it louder. He did, eventually, very loudly, in front of the whole dorm." }
    ] },

    { after: '10/20', title: '8: ascension', place: 'Moonlight Bridge · The Dark Hour', scene: [
      { n: "The green hour, on Moonlight Bridge, and something was offering him the world." },
      { n: "It didn't have a shape this time. It was just a voice in the green, warm and deep and patient, speaking from the space between the cables. Solar couldn't hear what it said. She only saw his face as he listened. Hungry. Afraid. Tempted, the way you're tempted by something you've wanted your entire life." },
      { s: 'astarion', f: 'serious', t: "It says it can make me what he was. A master. Not a spawn. The sun wouldn't touch me. Nothing would." },
      { s: 'astarion', f: 'serious', t: "Nobody would ever own me again, darling. Not ever. Do you understand what that means to me?" },
      { n: "She understood. She understood, too, the price. She could see it in the green light pooling around him, the way it was already starting to pull at the edges of him, take something away." },
      { choose: [
        { t: "Nobody owns you now. You already won.", notes: 3, then: [
          { s: 'astarion', f: 'surprised', t: '...' },
          { s: 'astarion', f: 'sad', t: "I... already won." },
          { n: "He said it like a word in a foreign language that he'd just understood the meaning of." }
        ] },
        { t: "It's your choice. Not mine. Not anyone's.", notes: 3, then: [
          { s: 'astarion', f: 'sad', t: "...That's the most frightening thing anyone has ever said to me." },
          { s: 'astarion', f: 'serious', t: "My choice. Mine." }
        ] }
      ] },
      { n: "He said no. Out loud, to the green, to the voice, to two hundred years. No. And the voice went quiet, and the light went back to just being light, and he sat down hard on the bridge pavement like his legs had given out." },
      { s: 'astarion', f: 'sad', t: "I could have had everything." },
      { s: 'astarion', f: 'happy', t: "...And I said no because I wanted to see what you'd say about my crease tomorrow. Isn't that pathetic?" },
      { n: "It wasn't pathetic. She sat down on the cold bridge next to him and told him so, and he laughed, shaky and real, and leaned his head on her shoulder until the green hour ended and the city started breathing again around them." }
    ] },

    { after: '11/12', title: '9: what do you want from me', place: 'Paulownia Mall · Chagall Café', scene: [
      { n: "November. Chagall Café again, the same window table, the same jazz, the same tiny cups. He'd chosen it. He'd said, this is where it started, I'm sentimental, don't tell anyone." },
      { n: "He'd ordered her a slice of the chocolate cake she liked without asking, and then sat across from her watching her eat it like she was the most interesting thing that had ever happened in two hundred years." },
      { s: 'astarion', f: 'neutral', t: "I need to ask you something, and I want an honest answer, because I can always tell when someone is performing. It takes one to know one." },
      { s: 'astarion', f: 'blushing', t: "What do you want from me?" },
      { s: 'astarion', f: 'sad', t: "Everyone wants something. My master wanted blood. Everyone else wanted the smile. So what is it, darling? What's yours?" },
      { route: [
        { t: "I just want you. The real one.", route: 'romance', notes: 3, then: [
          { s: 'astarion', f: 'surprised', t: '...' },
          { s: 'astarion', f: 'blushing', t: "The real one. The one with the crease." },
          { n: "He reached across the table and took her hand, not like a seducer, not like a performance. Clumsily. Like he'd never done it before and was afraid of getting it wrong." },
          { s: 'astarion', f: 'blushing', t: "...Then you can have him. Whatever's left. I think you might be the first person who ever actually wanted that." }
        ] },
        { t: "Nothing. I just like you. As a friend.", route: 'friend', notes: 3, then: [
          { s: 'astarion', f: 'surprised', t: '...Nothing?' },
          { s: 'astarion', f: 'happy', t: "A friend who wants nothing. How utterly bizarre. I didn't know that variety existed." },
          { n: "He laughed, and it cracked in the middle, and he looked away at the window where his reflection wasn't, and laughed again." },
          { s: 'astarion', f: 'happy', t: "Well. I suppose I'll have to keep you, then. Limited edition." }
        ] }
      ] }
    ] },

    { after: '12/5', title: '10: photo booth', place: 'Paulownia Mall · Photo Booth', scene: [
      { n: "December, and Paulownia had gone full winter. Lights strung everywhere. A huge tree in the atrium. A little photo booth by the arcade with a curtain covered in cartoon hearts, the kind high schoolers crammed into on Friday nights." },
      { n: "He'd been staring at it for a week. She'd watched him. Every time they passed it, he'd slow down, and look, and keep walking." },
      { s: 'astarion', f: 'neutral', t: "Darling. Those little machines. They take pictures, yes? Not mirrors. A different sort of magic." },
      { s: 'astarion', f: 'sad', t: "Do you think... would I be in it? In the picture?" },
      { choose: [
        { t: "Let's find out.", notes: 3, then: [{ s: 'astarion', f: 'surprised', t: "...Right now? Oh. Oh, gods. All right." }] },
        { t: "(Pull him into the booth.)", notes: 3, then: [{ s: 'astarion', f: 'surprised', t: "Darling! At least let me fix my hair!" }] }
      ] },
      { n: "They crammed in together on the tiny bench. The screen counted down. He was so nervous his hands were shaking. Three, two, one. The flash went off four times. He didn't smile in the first one. In the second he was looking at her. In the third she'd made him laugh. In the fourth he'd given up on the camera entirely and was just looking at her." },
      { n: "The strip slid out of the slot. Solar picked it up and held it out to him, and he didn't take it. He just looked." },
      { n: "He was in it. All four frames. Silver curls and red eyes and the crease between his brows and a face that he had not seen in two hundred years." },
      { s: 'astarion', f: 'sad', t: "...Oh." },
      { s: 'astarion', f: 'sad', t: "Oh. That's me. That's what I look like." },
      { ifRoute: 'friend', then: [
        { s: 'astarion', f: 'happy', t: "You were right about the crease. Damn you. You were right about all of it." },
        { choose: [
          { t: "Keep it. It's yours.", notes: 3, then: [{ s: 'astarion', f: 'happy', t: "No. We'll take another. One each. I am not leaving this world without a copy of my own cheekbones." }] },
          { t: "You look happy.", notes: 3, then: [{ s: 'astarion', f: 'sad', t: "...I do, don't I. I didn't know I could look like that." }] }
        ] },
        { n: "They took eleven more strips. He kept every single one. When the mall closed, the photo booth was out of paper, and he was still laughing." }
      ] },
      { ifRoute: 'romance', then: [
        { s: 'astarion', f: 'blushing', t: "And that's me, looking at you. Gods, darling. I didn't know I looked at you like that. Everyone must know." },
        { choose: [
          { t: "Everyone knows.", notes: 3, then: [
            { s: 'astarion', f: 'blushing', t: "...Good. Let them." },
            { n: "He kissed her in the photo booth, the curtain half-closed, the hearts swinging, and the machine, which nobody had told to stop, took four more pictures. He kept those too." }
          ] },
          { t: "(Kiss him.)", notes: 3, then: [
            { s: 'astarion', f: 'surprised', t: '...!' },
            { s: 'astarion', f: 'blushing', t: "...Do that again. I want to see what my face does." },
            { n: "They fed the machine every coin they had. He kept every strip." }
          ] }
        ] }
      ] }
    ] }
  ]
});
