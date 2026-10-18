/* Hanni · ? Revamp social link data (femc-game.html). Format: link fields in assets/femc/game/core.js, scene lines in scene.js.
   Searcher (Runners), friendship. Solar's sorority sister and closest friend: warm, grounding, the one who keeps her
   tethered, an honest barometer who can't hide anything on her face. A separate link from Hyein (Kat's ruling); they
   appear in each other's scenes. She doesn't awaken a Persona (Kat's ruling). Her crossing with Hyein (9/12, Paulownia
   Mall, "SOL?!") and "names, then" (9/13) are story events; rank 1 is the first afternoon after. The roof "last call"
   with the pink cans (week of 12/14) is a story scene and isn't touched here. Nothing from home moves Runners' plot:
   the house, the kitchen, the chat, the drink map (sparkling water mornings, iced coffee days, refreshers at night).
   Texting voice: @hanni, lowercase, "!!!", apologizes for being nosy. Arcana: '?' (open question, plot doc §16.6).
   afterMax uses v1's field shape; the revamp engine doesn't play it yet. */
(window.FEMC_GAME_LINKS ||= []).push({
  id: 'hanni', name: 'Hanni Pham', short: 'Hanni', arcana: '?', numeral: '', from: 'Runners',
  kind: 'searcher', world: 'R', romance: null,
  starts: '9/12', gate: { R: 3 },
  home: { area: 'mall', spot: 'Chagall Café', slot: 'after', days: [0, 1, 3, 5],
          hint: 'Afternoons at Chagall Café in Paulownia Mall, at the window table, with two drinks already ordered.' },
  approach: "There's a girl with curtain bangs at the window table in Chagall Café with two iced coffees in front of her and nobody in the other chair, and she waves at you through the glass like you're late, and like it doesn't matter that you're late.",
  cast: {},
  invite: {
    ask: ["sol!!! r u free?? chagall has a window seat and i have two drinks and only one me", "hiii!! come sit with me!!! no pressure!!! a little pressure", "hyein is fighting a sewing machine. i need an adult. come", "do u want an iced coffee? dont answer that. u do. come get it", "can i borrow u for an hour!! i'll give u back!!!", "i found a bakery that sells the good kind of bread!! sorry. nosy. come"],
    ok: ["yay!!! ok i'm ordering for u", "!!!!! ok see u soon", "ok!! window seat. i'll wave"],
    no: ["thats ok!!! next time!!", "no worries!! drink water!!", "ok!! i'll save u a seat anyway. for later. or tmrw!!"]
  },
  hangouts: [
    [
      { n: "Hanni had found the one bakery on the strip that sold bread the way she liked it, soft and sweet and slightly too big, and she'd bought two, and was tearing hers into small even pieces on a napkin at the café window, eating them one at a time like a bird that had been raised very politely." },
      { s: 'hanni', f: 'happy', t: "Okay. Okay. Tell me one thing that happened today. A good one. I'll tell you one back." },
      { choose: [
        { t: "Akihiko-senpai let me win a race. I'm sure he did. He says he didn't.", notes: 3, then: [
          { s: 'hanni', f: 'happy', t: "He didn't! Sol. Sol, he didn't. Boys don't let you win, they let you think they let you win so they don't have to admit it!" },
          { s: 'hanni', f: 'neutral', t: "Mine is, Hyein sewed her finger to a sleeve. Just a little. She's fine. She cried a lot." }
        ] },
        { t: "I ate lunch on the roof and it didn't rain.", notes: 2, then: [
          { s: 'hanni', f: 'happy', t: "That's a good one! That's a really good one. Small ones count. Small ones count the most, honestly." }
        ] },
        { t: "Nothing. Tell me yours.", notes: 1, then: [
          { s: 'hanni', f: 'sad', t: "That's not how it works. You always do that. Okay. Mine first. But you owe me one." }
        ] }
      ] },
      { n: "They traded good things until the bread was gone and the window had gone dark and the mall's lights had come on behind the glass, and Hanni wrote all of Solar's down on the back of the receipt and put it in her wallet like it was money." }
    ],
    [
      { n: "Hanni was writing a letter. On paper, at the café, in a pale yellow notebook, in round careful handwriting, and when Solar sat down she covered it with her arm and then uncovered it again, embarrassed." },
      { s: 'hanni', f: 'flustered', t: "It's for my mom. I know it won't get there. I just. If I write it down it feels like I told her. Sorry. That's weird." },
      { choose: [
        { t: "It's not weird. Can I add a line?", notes: 3, then: [
          { s: 'hanni', f: 'surprised', t: "...You want to?" },
          { n: "Solar took the pen and wrote, under Hanni's round careful lines, *She's okay. She's looking after everyone. She doesn't eat enough. — S.* Hanni read it and laughed and put her hand over her mouth and had to look out of the window for a while." }
        ] },
        { t: "What do you tell her?", notes: 2, then: [
          { s: 'hanni', f: 'neutral', t: "That I'm fine. That I'm with you. That the coffee here is very sweet and they put the milk in before you ask." },
          { s: 'hanni', f: 'happy', t: "That's all true! That's the nice thing about this place. I don't have to lie in it." }
        ] }
      ] }
    ],
    [
      { n: "Hyein had taken over the end of their table with a pile of fabric swatches and a pincushion shaped like a tomato, and was holding the swatches up against Hanni's face one at a time with the focus of a jeweler." },
      { s: 'hyein', f: 'serious', t: "Cream. Cream. Cream. Butter. Hanni, you're a dessert. Every color you look good in is a dessert." },
      { s: 'hanni', f: 'happy', t: "Thank you!" },
      { s: 'hyein', f: 'neutral', t: "It wasn't a compliment. It was a diagnosis." },
      { choose: [
        { t: "Do me. What am I?", notes: 3, then: [
          { s: 'hyein', f: 'serious', t: "Black. Navy. That one green that looks like it's mad at you. You're not a dessert. You're a very expensive coat in a window that nobody's allowed to touch." },
          { s: 'hanni', f: 'neutral', t: "That's so mean!" },
          { s: 'hyein', f: 'happy', t: "She loves it. Look at her. She's doing the face." }
        ] },
        { t: "(Steal the tomato pincushion.)", notes: 2, then: [
          { s: 'hyein', f: 'surprised', t: "GIVE IT BACK. That's my emotional support tomato." },
          { n: "Hanni laughed so hard she knocked her iced coffee over the cream swatch, and Hyein declared it a new color, and named it after her." }
        ] }
      ] }
    ]
  ],
  ranks: [
    { after: '9/14', title: '1: iced coffee', place: 'Paulownia Mall · Chagall Café', time: 'After School', music: 'tender', scene: [
      { n: "Two days ago a girl with curtain bangs and a cream cardigan had dropped every bag she was carrying in the middle of Paulownia Mall's atrium, in the last second of the Dark Hour, and screamed her name like it was the answer to a question she'd been asked a hundred times. Solar had said, carefully, kindly, that she was very sorry, and asked if they'd met." },
      { n: "She would think about the girl's face for a long time. Not because it had crumpled. Because it hadn't. Because it had done everything at once, all of it right there on the surface, hope and shock and something going out like a light, and then, on top of all of that, so fast it almost didn't show, the girl had smiled at her. Like she was the one who needed to be made to feel better." },
      { n: "Her name was Hanni. She'd found the café the next morning and claimed the window table, and she'd been sitting at it, as far as Solar could tell, ever since." },
      { register: 'hanni' },
      { s: 'hanni', f: 'happy', t: "Sol! Hi! Sit, sit. I already ordered. Is that okay? I ordered. Sorry. I didn't ask." },
      { n: "There were two iced coffees on the table, sweating rings onto the wood. One had a straw in it. One had the straw lying beside it, still in its paper, the way, Solar realized, she would have wanted it, because she liked to put it in herself." },
      { choose: [
        { t: "(Unwrap the straw and drink.)", notes: 3, then: [
          { n: "She unwrapped the straw and put it in and drank, and it was exactly right, too much milk, too much ice, and Hanni watched her do it with both hands clasped in front of her mouth like someone watching a gymnast land a dismount." },
          { s: 'hanni', f: 'happy', t: "Okay. Okay! That's still the same. Good. Good, that's one thing." }
        ] },
        { t: "How did you know?", notes: 2, then: [
          { s: 'hanni', f: 'neutral', t: "You drink sparkling water in the mornings. Iced coffee all day. A refresher at night, if you're out, the pink kind. Never coffee after dark, because then you don't sleep, and you already don't sleep." },
          { s: 'hanni', f: 'flustered', t: "Sorry. That's a lot. I know a lot about you. It's not creepy. It's just the kitchen. We share a kitchen." }
        ] },
        { t: "I'm sorry I didn't know you. At the mall.", notes: 2, then: [
          { s: 'hanni', f: 'sad', t: "Don't be sorry. Please. You looked so scared. You looked scared of *us.*" },
          { s: 'hanni', f: 'neutral', t: "That was the worst part. Not that you didn't know me. That you looked at me like I might want something from you." }
        ] }
      ] },
      { s: 'hanni', f: 'neutral', t: "Okay. So. Hyein and I talked about it. Last night. In the room Mitsuru gave us, which is very nice, by the way, the sheets are so soft, I think they're more expensive than my whole life." },
      { s: 'hanni', f: 'serious', t: "And we decided something. We're not going to make you remember. We're not going to quiz you, or show you a hundred photos, or cry at you. Well. I might cry. I cry at commercials. That's not your fault." },
      { s: 'hanni', f: 'happy', t: "If you don't remember being our sister, that's okay. We'll just be your sisters again. From scratch. Louder, probably. Hyein's going to be so much louder." },
      { choose: [
        { t: "Sisters?", notes: 3, then: [
          { s: 'hanni', f: 'neutral', t: "Sorority sisters. It's a club. Sort of. It's a house. There's a lot of pink in it. You hated the pink at first. You said it was like living inside a strawberry milk." },
          { s: 'hanni', f: 'happy', t: "And then you stopped saying it. And then one morning you bought pink mugs. You didn't tell anybody why. We didn't ask." }
        ] },
        { t: "You don't have to do that.", notes: 2, then: [
          { s: 'hanni', f: 'neutral', t: "I know I don't have to." },
          { s: 'hanni', f: 'happy', t: "That's what makes it nice. Nobody asked us. We just decided. You can't stop us. You'd have to be very rude, and you're not." }
        ] },
        { t: "(Don't answer. Just keep drinking the coffee.)", notes: 3, then: [
          { n: "She didn't answer. She drank the coffee. Hanni watched her not answer, and her face, which did everything out loud, went soft at the edges, like she'd been given exactly the reply she'd been hoping for and was trying very hard not to make it a big deal." }
        ] }
      ] },
      { n: "Outside the window the mall went on, a mother with a stroller, a boy with a skateboard he wasn't allowed to ride inside, an old man asleep on a bench with his hat over his face. Hanni watched them the way you'd watch fish in a tank in a restaurant, fascinated and a little sad for them." },
      { s: 'hanni', f: 'neutral', t: "It's so quiet here. Everything is so clean. Nobody's yelling down a hallway. I keep waking up and waiting for Hyein's hairdryer through the wall." },
      { s: 'hanni', f: 'sad', t: "...She doesn't have a hairdryer here. She keeps looking for the outlet." },
      { n: "When they left, Hanni stacked both empty cups and carried them to the counter and thanked the girl behind it twice, once in English and once in very careful Japanese she'd clearly practiced in a mirror, and the girl smiled at her like everyone always smiled at Hanni, and Solar stood by the door and thought, with no warning at all, *she always does that.* She had no idea how she knew." }
    ] },

    { after: '9/21', title: '2: the girls chat', place: 'Iwatodai Dorm · Lounge', time: 'Evening', music: 'joy', scene: [
      { n: "Hanni and Hyein had colonized one end of the lounge sofa the way water colonizes a sponge. Blankets. A bag of the rice crackers Junpei had told them were the best ones, which had turned out to be true, which Junpei was still smug about. Hyein's sketchbook. Two phones, face down, side by side, like they were sleeping." },
      { n: "The phones didn't work. That was the thing nobody said. They lit up. They had batteries that never went down. They had every message they'd ever had in them. They just wouldn't send anything anywhere, and their clocks had stopped at the minute the girls crossed, and every so often, at night, one of them buzzed with a message from home, and both girls lunged for it like it was a lifeline thrown over the side of a boat." },
      { s: 'hanni', f: 'neutral', t: "Do you want to see it? The chat? Our chat. You're in it. I'll show you. Only if you want." },
      { choose: [
        { t: "Show me.", notes: 3, then: [] },
        { t: "Is it embarrassing?", notes: 2, then: [
          { s: 'hyein', f: 'happy', t: "For you? Extremely. That's why it's good." }
        ] }
      ] },
      { n: "Hanni turned the phone over and scrolled up, and up, and up, and the messages went by in a blur of lowercase and capital letters and pink hearts until she stopped, and turned the screen so Solar could see." },
      { phone: [
        { from: 'hanni', t: "@hanni: SOLAR we are so worried about you" },
        { from: 'hanni', t: "@hanni: please let us know you are ok" },
        { from: 'hyein', t: "@hyein: sorry solar!!! we didnt mean to leave you behind" },
        { from: 'hyein', t: "@hyein: the party wasnt really that scary, just really stinky" },
        { from: 'solar', t: "@solar: omg what a joke" },
        { from: 'solar', t: "@solar: whats wrong with people here???" },
        { from: 'hanni', t: "@hanni: they're nosy!!! dont let it get you down" }
      ], contact: 'hanni, hyein 🩷' },
      { n: "*@solar.* Lowercase. Three question marks. *omg what a joke.* It was her. It was her in a voice she had never once used out loud in this city, a quick dry careless voice that swore at things and didn't capitalize and thought everyone else was the strange one." },
      { s: 'solar', f: 'surprised', t: "...I type like that?" },
      { s: 'hyein', f: 'serious', t: "You TALK like that. That's the problem. You've been talking like a hotel since we got here." },
      { s: 'hyein', f: 'neutral', t: "*Thank you, Hyein. That's very kind, Hyein.* Who are you? What did they do to you?" },
      { s: 'hanni', f: 'neutral', t: "Hyein." },
      { s: 'hyein', f: 'sad', t: "...Sorry. I'm sorry. I'm just. Why are you talking like that, Sol." },
      { choose: [
        { t: "I don't know how else to talk to you yet.", notes: 3, then: [
          { s: 'hyein', f: 'sad', t: "...Okay." },
          { s: 'hyein', f: 'neutral', t: "Okay. That's fair. That's a real answer. I hate it. It's fair." }
        ] },
        { t: "omg what a joke.", notes: 3, then: [
          { n: "It came out of her flat and quick and a little mean and exactly right, and both girls stared at her, and then Hyein shrieked and threw a cushion at her and Hanni put both hands over her face and laughed into them until she was crying, a little, which she said didn't count." },
          { s: 'hyein', f: 'happy', t: "THERE SHE IS. THERE SHE IS. SAY SOMETHING ELSE MEAN." }
        ] },
        { t: "Was I happy? In the chat?", notes: 2, then: [
          { s: 'hanni', f: 'neutral', t: "Sometimes. You were happy in the chat more than you were out loud. You said things in it you never said in the kitchen." },
          { s: 'hanni', f: 'happy', t: "That's why we love the chat." }
        ] }
      ] },
      { n: "Hanni scrolled a bit further and stopped on a message from Solar, months old, that just said *ily guys* at two in the morning with no context and nothing after it. She didn't say anything about it. She just held the phone out so Solar could see it, and then took it back, and put it face down on the sofa, and put her hand on top of it like she was keeping it warm." }
    ] },

    { after: '9/30', title: '3: social chair', place: 'Iwatodai Dorm · Lounge', time: 'Evening', music: 'joy', scene: [
      { n: "It turned out Hanni had a title. At home she was *Social Chair.* She said it apologetically, like a disease she'd caught, and then admitted that what it meant was that she was in charge of fun, and that she was very good at it, and that she had been, for two and a half weeks, going quietly out of her mind with nothing to organize." },
      { n: "So she'd organized the dorm." },
      { n: "Not all at once. Politely. She'd approached Mitsuru first, with a list, in her neatest handwriting, and Mitsuru had read the whole list standing up in the lounge and then sat down and read it again, and then asked, very seriously, what a *mixer* was." },
      { s: 'mitsuru', f: 'neutral', t: "And the point of the mixer is...?" },
      { s: 'hanni', f: 'happy', t: "People who live in the same building should know each other's names! And what they like to eat! And who's allergic to what!" },
      { s: 'mitsuru', f: 'neutral', t: "...That's very sensible. Fine. Friday. Nothing after eleven. Nothing involving the fire extinguishers." },
      { s: 'hanni', f: 'serious', t: "Why would anything involve the fire extinguishers?" },
      { s: 'mitsuru', f: 'neutral', t: "Iori lives here." },
      { n: "So now it was Friday, and the lounge had a banner over the TV that said WELCOME!! in Hanni's handwriting and Hyein's glitter, and there were name tags, actual stick-on name tags, and Akihiko's said AKIHIKO (PROTEIN) because Hanni had asked everyone to add one thing they liked, and Junpei's said JUNPEI (EVERYTHING) and was already peeling, and the room was full of people who'd been living on top of each other for months and were somehow, for the first time, introducing themselves." },
      { s: 'hanni', f: 'happy', t: "Sol! Name tag! What do you like?" },
      { choose: [
        { t: "(Write: SOLAR (ICED COFFEE).)", notes: 3, then: [
          { s: 'hanni', f: 'happy', t: "Yes! That's correct! That's the correct answer!" },
          { n: "She stuck it on Solar's sweater herself, smoothing it down with her thumb twice, the way you'd smooth a plaster on a kid's knee." }
        ] },
        { t: "(Write: SOLAR (?).)", notes: 2, then: [
          { s: 'hanni', f: 'sad', t: "Oh, Sol." },
          { n: "She took the pen and, under the question mark, in very small round letters, wrote *we're finding out,* and stuck it on." }
        ] },
        { t: "(Write: SOLAR (THIS).)", notes: 3, then: [
          { s: 'hanni', f: 'surprised', t: "This? This what?" },
          { s: 'solar', f: 'neutral', t: "This. The room. The tags." },
          { n: "Hanni looked at her for a long second, and her face went bright pink from the neck up, and she said *okay* in a very small voice and had to go and check on the snacks for a while." }
        ] }
      ] },
      { n: "It was a good party. That was the surprising thing. Fuuka and Hyein discovered they had the same taste in old movies. Ken explained the rules of a card game to Hanni for twenty minutes with total seriousness and she listened to every word and lost on purpose. Koromaru ate a name tag. At half past ten Akihiko, who had stood by the wall all evening like a bodyguard at a wedding, came and sat on the arm of the sofa next to Solar and said, with real wonder, that he'd lived in this dorm for two years and hadn't known Fuuka liked horror films." },
      { s: 'hanni', f: 'happy', t: "That's what mixers are for!" },
      { s: 'akihiko', f: 'happy', t: "...Huh. I get it now." },
      { n: "When it was over Hanni stood in the middle of the lounge with a trash bag and the glitter and the banner coming down and looked so happy it hurt to look at her. Solar picked up the other side of the banner. They folded it together, corner to corner, the way you fold a flag." },
      { s: 'hanni', f: 'neutral', t: "You used to help me clean up. At home. Every time. You'd leave every party early and then come back at the end when everyone was gone and help me clean up. You never said why." },
      { s: 'hanni', f: 'happy', t: "I think it's because the end is your favorite part. When it's just a room again." }
    ] },

    { after: '10/9', title: '4: the honest face', place: 'Paulownia Mall · Chagall Café', time: 'After School', scene: [
      { n: "Solar had learned something about Hanni's face in a month, and it was that it could not lie. Not wouldn't. Couldn't. Whatever Hanni felt went straight up into her eyebrows and out through the corners of her mouth before she'd decided whether to feel it, and Solar had watched her try to stop it, at dinner, in the lounge, at this window, a hundred times, and fail every single time, and be embarrassed about it, and be loved for it by everyone in the room." },
      { n: "So she asked the question she'd been saving." },
      { s: 'solar', f: 'neutral', t: "How long have I been gone? At home." },
      { n: "Hanni's face did everything." },
      { s: 'hanni', f: 'sad', t: "I don't know." },
      { s: 'hanni', f: 'neutral', t: "That's the truth. I don't. My phone says it's still the same night. Hyein says it's been a week, because she counts her sleeps. Minji says it doesn't matter and then checks her camera's clock every hour." },
      { s: 'hanni', f: 'serious', t: "I think it's been a night. I think, at home, it's the same night, and we're all still out looking. And I think if I think about it for too long I won't be able to breathe, so I don't." },
      { choose: [
        { t: "Then don't think about it. I'm here.", notes: 3, then: [
          { s: 'hanni', f: 'neutral', t: "You're here." },
          { s: 'hanni', f: 'happy', t: "You're here. Okay. Yes. That's the thing to think about. Thank you." },
          { n: "She said it like a girl handed a railing on a ship, and held onto her iced coffee with both hands." }
        ] },
        { t: "Is my bed still made? At home?", notes: 3, then: [
          { s: 'hanni', f: 'sad', t: "..." },
          { n: "Her face crumpled. Not all the way. Just a little, at the chin, the way a paper cup gives when you hold it too tight. She put the cup down." },
          { s: 'hanni', f: 'sad', t: "You never make your bed. That's what was wrong. When we went in to look for you. It was made. You never make it. Somebody made it. Or you did, and then you left, and you never make it." },
          { s: 'hanni', f: 'neutral', t: "Sorry. Sorry. I wasn't going to tell you that." }
        ] },
        { t: "You're bad at lying.", notes: 2, then: [
          { s: 'hanni', f: 'flustered', t: "I know! I KNOW. Everyone says it! My face just does things!" },
          { s: 'hanni', f: 'neutral', t: "You used to say it was the reason you told me things. Because you'd know if I didn't mean it." }
        ] }
      ] },
      { s: 'hanni', f: 'serious', t: "Can I promise you something?" },
      { s: 'hanni', f: 'neutral', t: "Here, I'm going to tell you the truth. Every time. Even small things. Even if it's that your hair looks weird. Because everybody's going to want you to be something. Home's going to want you to be something. And I can't stop that." },
      { s: 'hanni', f: 'serious', t: "But I don't want to be one more person deciding what you can handle. So I'll just tell you. And you decide." },
      { n: "She said it to the table, steady, with her face doing absolutely everything, every bit of it out loud and honest, and Solar felt something in her chest unclench that she hadn't known had been clenched since April." },
      { choose: [
        { t: "My hair looks weird?", notes: 3, then: [
          { s: 'hanni', f: 'happy', t: "A little! On the left! It's the humidity here, it's not your fault!" },
          { n: "Solar laughed so suddenly she snorted, which she had never done in her life, here, and Hanni's face lit up like someone had switched on every light in a house." }
        ] },
        { t: "Deal.", notes: 3, then: [
          { s: 'hanni', f: 'happy', t: "Deal. Pinky promise. Give me your pinky. You have to. It's binding." }
        ] }
      ] }
    ] },

    { after: '10/18', title: '5: a feeling', place: 'Iwatodai Station · Platform', time: 'Evening', music: 'night', scene: [
      { n: "Hanni had decided she wanted to see the trains. Not ride them anywhere. See them. She'd said, at dinner, that at home everyone drove, or walked, or got driven, and that she'd never in her life lived anywhere you could stand on a platform and watch a whole city go home in lit-up boxes, and could Solar take her, please, if it wasn't a bother." },
      { n: "So they stood on the platform at Iwatodai at seven in the evening, eating takoyaki out of a paper boat from the stand by the gate, while the trains came in and went out and the salarymen got on and off with their ties loosened and their faces gray, and Hanni watched every single one go like it was a parade." },
      { s: 'hanni', f: 'happy', t: "Look at him. Look at him with the flowers. He's going home to somebody. He bought them at the station. That's so romantic. That's so last-minute and romantic." },
      { choose: [
        { t: "Maybe they're for his mother.", notes: 2, then: [
          { s: 'hanni', f: 'happy', t: "That's even MORE romantic." }
        ] },
        { t: "Maybe he forgot their anniversary.", notes: 3, then: [
          { s: 'hanni', f: 'surprised', t: "SOL." },
          { s: 'hanni', f: 'happy', t: "...He definitely forgot their anniversary. Look at his shoulders. Oh no. Oh, I hope she forgives him." }
        ] }
      ] },
      { n: "Down at the far end of the platform, past the vending machines, on the last bench, there was a girl in a too-big navy coat with her collar up and a cap pulled down over her hair, sitting very still, watching the trains go without getting on any of them." },
      { n: "Hanni looked at her. Solar watched Hanni look at her. Hanni's face, which hid nothing, went through something quick and strange, a little frown, a little tilt, the face of someone hearing a song from another room and trying to place it." },
      { s: 'hanni', f: 'neutral', t: "...Huh." },
      { s: 'solar', f: 'neutral', t: "That's Wren. She's always there. She keeps missing her train." },
      { s: 'hanni', f: 'neutral', t: "She looks like— hm." },
      { n: "She stopped. She looked at the paper boat in her hand, at the last two takoyaki going cold in it." },
      { s: 'hanni', f: 'flustered', t: "I think it's the takoyaki. I feel funny. I think I ate too fast. That's all it is." },
      { choose: [
        { t: "Do you want to go say hi?", notes: 2, then: [
          { s: 'hanni', f: 'neutral', t: "...No. No, I think she wants to be by herself. She looks like you do when you want to be by yourself." },
          { s: 'hanni', f: 'happy', t: "Anyway! Takoyaki! There's two left! One each!" }
        ] },
        { t: "(Give her the last takoyaki.)", notes: 3, then: [
          { s: 'hanni', f: 'happy', t: "No, you have it! You have it. Okay. Half. We'll do half." },
          { n: "They did half. When Solar looked back down the platform, the bench was empty. Hanni didn't look back at all. Solar noticed that, and didn't know what to do with it, and put it away somewhere." }
        ] }
      ] },
      { n: "On the walk back Hanni held her arm, the way she apparently always had, tucked through the crook of Solar's elbow like they were two old ladies on a promenade, and talked about everything, about her mom and the kitchen at home and a boy at a coffee cart who always spelled her name wrong on purpose, and never once mentioned the bench." },
      { s: 'hanni', f: 'neutral', t: "Sol. Are you scared? Here? Ever?" },
      { choose: [
        { t: "Every night. Right at midnight.", notes: 3, then: [
          { s: 'hanni', f: 'neutral', t: "Me too." },
          { s: 'hanni', f: 'happy', t: "Okay. Then at midnight, I'll knock. On your door. Twice. So you know I'm scared too. Okay? That's the plan." }
        ] },
        { t: "Not when I'm with people.", notes: 2, then: [
          { s: 'hanni', f: 'happy', t: "Then we'll make sure you're with people. That's easy. That's the easiest job I've ever had." }
        ] }
      ] }
    ] },

    { after: '10/28', title: '6: flora', place: 'Iwatodai Dorm · Lounge', time: 'Evening', scene: [
      { n: "Halloween was in three days, and Hyein had discovered, with the horror of someone discovering a death in the family, that the dorm did not do Halloween. Not properly. Junpei did Halloween, in the sense that he owned a Superman costume from a discount shop that was a size too small, but that, Hyein had announced to the lounge, did not count, and was in fact a crime." },
      { n: "So now there were costumes. Hyein had bought half the fabric store on the strip with money Mitsuru had given her in an envelope without a word, and the lounge had become a workshop, and Hanni was standing on a dining chair in a dress made of green chiffon and fake leaves while Hyein pinned the hem with her mouth full of pins." },
      { s: 'hanni', f: 'happy', t: "I'm Flora! I'm always Flora. I don't even mind. She's the nice one." },
      { s: 'hyein', f: 'serious', t: "Stand STILL. You're the nice one and you're the wiggly one." },
      { s: 'hanni', f: 'neutral', t: "Sol, you're Stella. You were Stella at home. Hyein decided. The fairy of the sun and the moon." },
      { s: 'hyein', f: 'neutral', t: "It's her NAME. It was PREDESTINED." },
      { choose: [
        { t: "My parents didn't name me after a cartoon.", notes: 3, then: [
          { s: 'hyein', f: 'happy', t: "WE DON'T KNOW THAT FOR CERTAIN." },
          { n: "Hanni laughed so hard on the chair it wobbled, and Solar caught her by the leafy hem, and Hyein screamed about the pins, and for a second the three of them were holding onto each other in the middle of the lounge in a way that felt like it had happened a hundred times before." },
          { s: 'hanni', f: 'surprised', t: "...You said that. Exactly that. In the chat. Word for word." }
        ] },
        { t: "What does Stella wear?", notes: 2, then: [
          { s: 'hyein', f: 'happy', t: "Orange. Gold. A tiara. Wings. Small wings. You negotiated the wings down. You were very firm about the wings." }
        ] }
      ] },
      { n: "Later, when Hyein had gone to fight the sewing machine Mitsuru had found for her in a storeroom, Hanni sat on the edge of the dining table with the leaves still pinned to her dress and swung her legs, and looked at the half-finished orange dress hanging off the back of a chair." },
      { s: 'hanni', f: 'neutral', t: "We did this at home. The three of us and Minji. You were so grumpy about it. You said you were too old for fairies." },
      { s: 'hanni', f: 'happy', t: "And then you looked in the mirror in it and you didn't say anything at all. You just looked. For a long time. Like you were meeting someone." },
      { choose: [
        { t: "Who was I meeting?", notes: 3, then: [
          { s: 'hanni', f: 'neutral', t: "I don't know. Somebody nicer to you than you are." },
          { s: 'hanni', f: 'sad', t: "...Sorry. That came out sad. I meant it nice." }
        ] },
        { t: "Will you do my makeup? For it?", notes: 3, then: [
          { s: 'hanni', f: 'happy', t: "YES. Yes, yes, yes. Hyein does the clothes and I do faces. That's the system. That's always been the system!" },
          { n: "She clapped once, delighted, and a leaf fell off her dress, and she picked it up and tucked it behind Solar's ear without asking, and left it there." }
        ] }
      ] }
    ] },

    { after: '11/20', title: '7: the truth, small', place: 'Paulownia Mall · Chagall Café', time: 'After School', scene: [
      { n: "The boy had come through in the laundry room, at three in the morning, and Hanni had heard about it at breakfast from Junpei, who had heard about it from Fuuka, who had heard it, she said, like a single bell ringing twice. Hanni had put down her chopsticks and looked at Hyein, and Hyein had looked at Hanni, and neither of them had said anything at all, which for the two of them was the loudest thing Solar had ever heard." },
      { s: 'hanni', f: 'neutral', t: "So. I promised you the truth. Small things." },
      { s: 'hanni', f: 'serious', t: "Here's one. It's small. I'm nervous about it. That's all. That's the whole truth. I'm nervous." },
      { choose: [
        { t: "About him?", notes: 3, then: [
          { s: 'hanni', f: 'neutral', t: "About you. Around him. Not because of anything— not because of him. Because you're going to feel things, and I'm not going to be able to tell you if you should." },
          { s: 'hanni', f: 'happy', t: "Which I shouldn't, anyway. That's not my job. My job's iced coffee." }
        ] },
        { t: "What aren't you telling me?", notes: 2, then: [
          { n: "Hanni's face did the thing. All of it, every inch, honest and miserable." },
          { s: 'hanni', f: 'sad', t: "Lots. About home. Not secrets. Just your life. It's yours. It's not mine to hand you here where you can't check it." },
          { s: 'hanni', f: 'serious', t: "When you're home you can ask me anything and I'll tell you. I promise. But not like this. Not so it's a story I'm telling you about yourself." }
        ] }
      ] },
      { s: 'hanni', f: 'neutral', t: "Can I tell you a different true thing? A nice one?" },
      { s: 'hanni', f: 'happy', t: "You look happier here than you did at home, some days. Not all days. Some. When you're with the dorm. When Junpei's being stupid. When Akihiko-senpai makes you run in the rain." },
      { s: 'hanni', f: 'neutral', t: "I'm happy you have that. I want you to know I mean it. I'm not saying it so you'll feel guilty. I'm saying it because it's true." },
      { choose: [
        { t: "Does that scare you?", notes: 3, then: [
          { s: 'hanni', f: 'sad', t: "A little." },
          { s: 'hanni', f: 'neutral', t: "But I'd rather you be happy somewhere I'm scared of than sad somewhere I'm not. That's the rule. I just made it." }
        ] },
        { t: "I'm happy with you, too.", notes: 3, then: [
          { s: 'hanni', f: 'surprised', t: "..." },
          { n: "Her face went pink from the collar up, and she pushed her iced coffee across the table to Solar for no reason at all, a whole cup, as if that was the only thing she could think of to give back." }
        ] }
      ] },
      { n: "When they left, Hanni stopped at the café door and turned around and looked at the window table, their table, with its two wet rings on the wood, and said, quietly, that she was going to miss it. She didn't say when. Solar didn't ask. It was the truth, and it was small, and she'd promised." }
    ] },

    { after: '11/30', title: '8: the kitchen', place: 'Iwatodai Dorm · Kitchen', time: 'Early Morning', music: 'tender', scene: [
      { n: "Hanni was up before everyone. Solar found her at six in the dorm kitchen in a cream cardigan over pajamas, standing at the counter with the overhead light off and the window going gray behind her, pouring sparkling water from a big green bottle into two glasses she'd found at the back of a cupboard, slowly, so it wouldn't fizz over." },
      { s: 'hanni', f: 'happy', t: "Morning! You're up! You're never up. I'm doing the kitchen. Sit." },
      { n: "*Doing the kitchen.* She said it like it was a ritual, and set one glass in front of Solar on the counter and one in front of the empty stool beside her, and then a third, after a second, in front of the stool on the other side, and stood there looking at it." },
      { s: 'hanni', f: 'neutral', t: "That's Hyein's. She won't come down for another hour. She'll come down with wet hair and say *who drank my water.* Every day. Nobody ever drinks her water." },
      { n: "The kitchen was gray and quiet and smelled of the rice cooker on its keep-warm setting and the cold coming off the window, and Solar sat with the glass of sparkling water in her hand, and something happened." },
      { n: "A different kitchen. Bigger. Brighter. Pink, absurdly pink, pink mugs on a pink shelf, morning sun coming through a window over a sink full of somebody's dishes. Three girls at a counter in pajamas. One with wet hair saying *who drank my water.* One laughing. One, her, in a sweatshirt too big for her, not laughing, holding a glass of sparkling water exactly like this one and thinking, very clearly, *this is the only part of the day I like.*" },
      { s: 'solar', f: 'neutral', t: "...Pink mugs." },
      { s: 'hanni', f: 'surprised', t: "..." },
      { s: 'solar', f: 'neutral', t: "I bought pink mugs. You said. I didn't tell anyone why." },
      { s: 'solar', f: 'neutral', t: "It's because I liked the mornings. With you two. In the kitchen. I wanted something there that was mine that was the same color as everything else." },
      { n: "Hanni put her glass down on the counter. She didn't say anything. Her face was doing everything at once, every single thing, all of it out loud, and she put both hands flat on the counter like she needed to hold on to it." },
      { choose: [
        { t: "(Hold her hand on the counter.)", notes: 3, then: [
          { n: "Solar put her hand over Hanni's. Hanni turned hers over and held on, hard, and laughed, and cried, both, a little, at six in the morning in a kitchen in a city neither of them was from, and the rice cooker clicked over to warm again like it was clearing its throat to give them a minute." }
        ] },
        { t: "Who drank my water.", notes: 3, then: [
          { n: "She said it in Hyein's voice. She had no idea she could do Hyein's voice. Hanni made a sound like a teakettle and put her whole face in her cardigan sleeves and laughed until she had to sit on the floor." }
        ] }
      ] },
      { n: "An hour later Hyein came down with wet hair and stopped in the doorway and looked at the third glass, full, untouched, on the counter, and then at the two of them, and narrowed her eyes." },
      { s: 'hyein', f: 'serious', t: "...Who drank my— oh. Oh, it's full. Why is it full? Why are you both looking at me like that? What happened? Why is Hanni crying? HANNI, WHY ARE YOU CRYING." }
    ] },

    { after: '12/8', title: '9: braids', place: 'Iwatodai Dorm · Rooftop', time: 'Afternoon', scene: [
      { n: "December had come in cold and bright, and the dorm roof in the afternoon was the only warm place in the building, because the sun hit it straight on and the water tank kept the wind off, and Hanni had brought up two cushions from the lounge and a hairbrush and a pack of tiny elastic bands and declared it a salon." },
      { s: 'hanni', f: 'happy', t: "Sit. Back to me. I'm doing braids. You can't say no, I already have the elastics out." },
      { n: "Solar sat on the cushion with her back to Hanni and her face to the bay, and Hanni brushed her hair out in long slow strokes, carefully, starting at the ends and working up the way people do when they've done it for someone a hundred times and know where it tangles." },
      { s: 'hanni', f: 'neutral', t: "You have a knot. Same place. Right at the back. You always have this knot. You sleep on it funny." },
      { choose: [
        { t: "Did you do this at home?", notes: 3, then: [
          { s: 'hanni', f: 'happy', t: "Every Sunday! Before practice, or after, or when you had something you had to dress up for and you were being grumpy about it." },
          { s: 'hanni', f: 'neutral', t: "You'd sit on the floor and I'd sit on the bed and we'd talk about nothing. You said it was the only time all week anyone touched your hair without wanting a picture of it." }
        ] },
        { t: "(Close your eyes.)", notes: 3, then: [
          { n: "She closed her eyes. The sun was warm on her eyelids. Hanni's fingers were careful and quick and sure, and somewhere far below a train went over the bridge, and she felt herself go soft all the way down, like something set down after being carried a long way." }
        ] }
      ] },
      { s: 'hanni', f: 'serious', t: "Sol. I want to say something and I want you to let me say all of it without saying anything back until I'm done." },
      { s: 'hanni', f: 'neutral', t: "Everybody's going to ask you to come home. Soon. Me too, probably. I can feel it coming, like a sneeze. And you're going to feel like you're letting someone down whatever you do. Because you always feel like that. You've felt like that your whole life." },
      { s: 'hanni', f: 'serious', t: "So here's what I'm saying now, before the asking. Whatever you do. Wherever you are. You're our sister. That doesn't stop. It didn't stop when you forgot us, and it won't stop if you stay. It's not a thing you can lose. We decided." },
      { n: "She tied off the braid with one of the tiny elastics and put both hands on Solar's shoulders for a second, and squeezed, and let go." },
      { s: 'hanni', f: 'happy', t: "Okay. Done. You can talk now." },
      { choose: [
        { t: "Thank you, Hanni.", notes: 3, then: [
          { s: 'hanni', f: 'sad', t: "Don't thank me. You'll make me cry. I've been so good today." }
        ] },
        { t: "(Turn around and hug her.)", notes: 3, then: [
          { n: "She turned around on the cushion and hugged her, hard, and Hanni made a small surprised sound and then hugged back, harder, with the hairbrush still in one hand, digging into Solar's spine, and neither of them moved it." }
        ] }
      ] },
      { n: "Walking down, Solar caught sight of herself in the dark glass of the stairwell door. Two braids, neat, with a tiny loop at the end of each where Hanni always tucked the ends under, so they wouldn't scratch. She knew the loops. Her fingers went up and found them like they'd been looking for them for months." }
    ] },

    { after: '1/12', title: '10: we come in peace', place: 'Iwatodai Dorm · 2F Hallway', time: 'Night', music: 'tender', scene: [
      { n: "Midnight, and the knock came. Twice. Soft. The way it had come every night since October, at the exact minute the green came up in the windows, so Solar would know someone else was awake and scared in the hallway too." },
      { n: "She'd started waiting for it. She'd started, if she was honest, not being able to sleep until she heard it. She opened the door." },
      { n: "Hanni was standing in the hallway in the green light in her cream cardigan, and the whole dorm was silent around her, every other door shut, every other sleeper gone into a coffin in their bed, the clocks stopped, the hall light dead, and Hanni just standing there, warm, breathing, awake, with a mug of something in each hand." },
      { s: 'hanni', f: 'happy', t: "Hi. Can I come in? I brought tea. It's the barley one. It doesn't keep you up." },
      { n: "And Solar knew her." },
      { n: "Not the way she'd known the iced coffee, or the braids, or the pink mugs, in pieces, one at a time, like coins found down the back of a sofa. All of her. All at once. A girl at a door in a hallway with pink carpet, knocking on a door Solar had locked and wouldn't open, with Hyein behind her, saying in that soft voice *Sol, it's us, we come in peace!* A girl who'd sat on the end of her bed through every bad night. A girl whose face couldn't lie, who had never once tried to, who had made her laugh in kitchens and cry in cars and who had stood at a party with a trash bag at two in the morning waiting for Solar to come back and help, because she knew she would." },
      { s: 'solar', f: 'neutral', t: "...We come in peace." },
      { n: "Hanni's face did everything. Every single thing. All of it at once, out loud, in the green, and the mugs shook in her hands." },
      { s: 'hanni', f: 'sad', t: "You remember that?" },
      { s: 'solar', f: 'neutral', t: "You said it through my door. When I'd locked myself in and wouldn't come out. Like you were aliens." },
      { s: 'hanni', f: 'surprised', t: "We WERE aliens. Hyein did the voice. You opened the door just to tell her to stop. I was so happy I—" },
      { n: "She stopped. She couldn't finish. She stood in the doorway with her face crumpling and the tea going everywhere, and Solar took both mugs out of her hands and put them on the floor and pulled her in." },
      { choose: [
        { t: "Hanni. Hanni. I'm sorry I forgot you.", notes: 3, then: [
          { s: 'hanni', f: 'sad', t: "Don't. Don't be sorry. You didn't forget. You just put us somewhere for a while." },
          { s: 'hanni', f: 'happy', t: "We were right there. We were right there the whole time. We were in the iced coffee." }
        ] },
        { t: "(Just hold on.)", notes: 3, then: [
          { n: "She just held on. Hanni held on back, both arms, her face in Solar's shoulder, shaking, laughing, the cardigan soft and smelling of barley tea and the same cheap peach hand cream it had smelled of at home, every morning, in the kitchen, and Solar had never once noticed until it was here." }
        ] }
      ] },
      { n: "They sat on the floor of Solar's room with their backs against the bed and drank what was left of the tea out of the bottoms of the mugs while the Dark Hour went on outside like a held breath, and Hanni told her about nothing, about her mom and the boy at the coffee cart and a dress she'd seen in a shop window and never bought, and Solar listened to all of it like it was the news." },
      { s: 'hanni', f: 'neutral', t: "Whatever you pick. Whatever happens. I'll knock. Twice. Somewhere." },
      { s: 'hanni', f: 'happy', t: "That's the plan. It's not a very good plan. It's mine." }
    ] }
  ],

  afterMax: [
    { title: 'good things', place: 'Paulownia Mall · Chagall Café', time: 'After School', scene: [
      { n: "The window table. Two iced coffees, one straw still in its paper. The receipt with every good thing Solar had told her since September was so full now that Hanni had started writing on a second one, very small, in the margins." },
      { s: 'hanni', f: 'happy', t: "Okay. One good thing. Then mine. Go." },
      { choose: [
        { t: "You're here.", notes: 3, then: [
          { s: 'hanni', f: 'flustered', t: "That's cheating. You can't use me. ...I'm writing it down." }
        ] },
        { t: "The pink mugs. I remembered them.", notes: 3, then: [
          { s: 'hanni', f: 'happy', t: "That's my favorite one. That's going at the top. Mine is, Hyein said thank you to Mitsuru without being told. Character development!" }
        ] }
      ] }
    ] },
    { title: 'the knock', place: "Iwatodai Dorm · Solar's Room", time: 'Night', scene: [
      { n: "Midnight. Two knocks. She opened the door before the second one landed." },
      { s: 'hanni', f: 'surprised', t: "You were waiting!" },
      { s: 'solar', f: 'neutral', t: "I'm always waiting." },
      { choose: [
        { t: "(Make room on the bed.)", notes: 3, then: [
          { n: "They sat cross-legged on the bed under one blanket and played the game where you guess what the people on the street below are going home to, except there was nobody on the street, because it was the Dark Hour, so they made them up, and Hanni's were all getting married." }
        ] },
        { t: "(Knock twice on the wall for Hyein.)", notes: 3, then: [
          { n: "Two knocks came back through the wall, then a third, very loud, then Hyein's voice, muffled, asking whether this was a party and whether it was a party without her, and then the door opened, and it wasn't." }
        ] }
      ] }
    ] }
  ]
});
