/* Hanni · ? Revamp social link data (femc-game.html). Format: link fields in assets/femc/game/core.js, scene lines in scene.js.
   Searcher (Runners), friendship. Solar's sorority sister and closest friend: warm, grounding, the one who keeps her
   tethered, an honest barometer who can't hide anything on her face, and "mom mode" (tea, a plate of cut fruit, a fruity
   candle burning somewhere it shouldn't). Canon look: very short next to Solar, thick black bangs, dimples, the softest
   smile; in the crossing CG she's in black with long dark hair and hoops. A separate link from Hyein (Kat's ruling); they
   appear in each other's scenes (Hyein's own link owns the Stella costume, the hairdryer and the coat). She doesn't awaken a
   Persona (Kat's ruling). Her crossing with Hyein (9/12, Paulownia Mall, "SOL?!"), "names, then" (9/13), "in front"
   (11/21, she stands in front of Hyein in Tartarus), the roof "last call" with the pink cans (12/14) and the first snow
   (1/27, the pancakes) are story events and aren't touched here; the ranks lean on them. The story reads Hanni's rank
   (anchor 7 and 10 for the Runners route and the true path), so her ranks stay unforced and on their old dates.
   Canon echoes used: "course, girlie"; Golden Girls and Gossip Girl reruns; her evening meditation; raising her hand to
   speak at chapter meetings; the morning she and Hyein did Solar's makeup with forty-five minutes before the driver; the
   Halloween face on the closed toilet lid; "Sol, it's us, we come in peace!" / "we brought snacks" / "does it come with
   questions?" / "no"; the drink map (sparkling water mornings, iced coffee days, the pink refresher at night). Nothing from
   home moves Runners' plot, and she never hands Solar the plot (rank 7: "it's not mine to hand you").
   Choices that carry forward (flags, all hanni-*):
     rank 2  the line Solar types into the dead chat: hanni-msg-ok | hanni-msg-joke | hanni-msg-ily  → rank 10, afterMax 'delivered'
     rank 3  her name tag: hanni-tag-coffee | hanni-tag-question | hanni-tag-this                      → rank 9, rank 10
     rank 4  hanni-pinky (the pinky promise)                                                           → rank 7
     rank 5  hanni-knock (the midnight knock) | hanni-people (she'll be people instead)               → rank 8, rank 10, afterMax
     rank 6  hanni-eyes-open (Solar watched the mirror the whole time)                                → rank 8
     rank 7  hanni-ask-her (Hanni stops answering questions about Solar for anyone)                   → afterMax 'ask her'
     rank 9  hanni-loops (Solar learns the braid loop)                                                → afterMax 'loops'
   Rank 10 and some afterMax lines read the solstice route flags (route-R / -S / -H / -stay / -true). afterMax plays in order,
   then rotates, at the café (she doesn't leave before the end, so there are no traces). Texting voice: @hanni, lowercase,
   "!!!", apologizes for being nosy. Arcana: '?' (open question, plot doc §16.6). */
(window.FEMC_GAME_LINKS ||= []).push({
  id: 'hanni', name: 'Hanni Pham', short: 'Hanni', arcana: '?', numeral: '', from: 'Runners',
  kind: 'searcher', world: 'R', romance: null,
  starts: '9/12', gate: { R: 3 },
  home: { area: 'mall', spot: 'Chagall Café', slot: 'after', days: [0, 1, 3, 5],
          hint: 'Afternoons at Chagall Café in Paulownia Mall, at the window table, with two drinks already ordered.' },
  approach: "There's a very small girl with thick black bangs at the window table in Chagall Café with two iced coffees in front of her and nobody in the other chair, and she waves at you through the glass with her whole arm, like you're late, and like it doesn't matter that you're late.",
  cast: {},
  invite: {
    ask: [
      "sol!!! r u free?? chagall has a window seat and i have two drinks and only one me",
      "hiii!! come sit with me!!! no pressure!!! a little pressure",
      "hyein is fighting a sewing machine. i need an adult. come",
      "do u want an iced coffee? dont answer that. u do. come get it",
      "can i borrow u for an hour!! i'll give u back!!!",
      "i found a bakery that sells the good kind of bread!! sorry. nosy. come",
      "i cut up fruit. too much fruit. this is a fruit emergency",
      "the cafe tv is playing the old show again!!! the one with the ladies!!! sol hurry",
      "u went to the tower last night didnt u. come eat something. sorry!! nosy!!",
      "i have a list. dont be scared. its a nice list. come see the list",
      "window seat is free and the sun is on it!!! its basically a beach",
      "ok i'm not saying i miss u. i'm saying the other chair is very empty"
    ],
    ok: ["yay!!! ok i'm ordering for u", "!!!!! ok see u soon", "ok!! window seat. i'll wave", "yesss ok. straw in the paper. i know", "course girlie!!! be safe walking over"],
    no: ["thats ok!!! next time!!", "no worries!! drink water!!", "ok!! i'll save u a seat anyway. for later. or tmrw!!", "ok!!! eat something tho. real food. i'll know", "thats ok!! be safe tonight!! knock if u need me"]
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
      { n: "They traded good things until the bread was gone and the window had gone dark and the mall's lights had come on behind the glass, and Hanni wrote all of Solar's down on the back of the receipt in very small round letters and put it in her wallet, folded once, like it was money." }
    ],
    [
      { n: "Hanni was writing a letter. On paper, at the café, in a pale yellow notebook, in round careful handwriting, and when Solar sat down she covered it with her arm and then uncovered it again, embarrassed, the way you'd uncover something you'd been caught hiding and decided you didn't want to hide after all." },
      { s: 'hanni', f: 'flustered', t: "It's for my mom. I know it won't get there. I just. If I write it down it feels like I told her. Sorry. That's weird." },
      { choose: [
        { t: "It's not weird. Can I add a line?", notes: 3, then: [
          { s: 'hanni', f: 'surprised', t: "...You want to?" },
          { n: "Solar took the pen and wrote, under Hanni's round careful lines, *She's okay. She's looking after everyone. She doesn't eat enough. — S.* Hanni read it and laughed and put her hand over her mouth and had to look out of the window for a while." }
        ] },
        { t: "What do you tell her?", notes: 2, then: [
          { s: 'hanni', f: 'neutral', t: "That I'm fine. That I'm with you. That the coffee here is very sweet and they put the milk in before you ask." },
          { s: 'hanni', f: 'happy', t: "That's all true! That's the nice thing about this place. I don't have to lie in it." }
        ] },
        { t: "(Don't read it. Look at the window instead.)", notes: 2, then: [
          { n: "Solar looked at the window, at the mall going by, at a little boy pressing his whole face to the glass of the toy shop opposite, and gave Hanni the page to herself, and after a minute she heard the pen start up again, slower, steadier, like someone who'd been given back a room." }
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
    ],
    [
      { n: "There was a small television on a shelf behind Chagall's counter that the owner kept on with the sound low for the afternoon lull, usually horse racing or the weather, and today it was playing something old and American with the colors gone soft, four women around a kitchen table in a house with too many wicker chairs, all of them dubbed into very serious Japanese." },
      { n: "Hanni had gone completely still with her straw in her mouth." },
      { s: 'hanni', f: 'surprised', t: "Sol. Sol. *Sol.* Is that... it's not. It is. Oh my gosh, it is. It's the ladies." },
      { s: 'hanni', f: 'happy', t: "We watch this! We watch this all the time! Me and Hyein and you, on the couch, with the big blanket. Reruns. You pretend you're only there for the snacks." },
      { choose: [
        { t: "Which one's your favorite?", notes: 3, then: [
          { s: 'hanni', f: 'happy', t: "The little one with the purse. She says the meanest things and everyone forgives her. That's the dream." },
          { s: 'hanni', f: 'neutral', t: "Yours is the tall one with the low voice. You'd never say so. You just laugh at her one beat after everyone else, like you're making sure you're allowed." }
        ] },
        { t: "I don't think I'd have watched this.", notes: 2, then: [
          { s: 'hanni', f: 'neutral', t: "You did, though. Every time. You'd say *I'm not staying* and sit down on the arm of the couch, and then you'd be under the blanket by the second episode, and then you'd be asleep on Hyein's feet." },
          { s: 'hanni', f: 'happy', t: "She never moved. Not once. Her legs went numb and she never moved." }
        ] },
        { t: "(Watch it with her. Don't say anything.)", notes: 3, then: [
          { n: "She watched it. She didn't understand a word of the dub and it didn't matter, it was four women at a table being unkind and then sorry and then unkind again, and somewhere in the second act one of them put her hand on another's arm and left it there, and Solar laughed at the joke after it, one beat late, and felt Hanni turn and look at her." }
        ] }
      ] },
      { n: "The owner, seeing two girls at the window watching his television instead of the mall, turned the volume up two notches without a word and went back to drying cups. Hanni put her hand flat on her chest like she'd been given flowers, and mouthed *thank you* at him across the café, twice, and he nodded once, gruffly, and pretended he hadn't." }
    ],
    [
      { n: "Hanni had brought fruit. In a plastic container with a blue lid, from the dorm, cut that morning into neat even pieces, apple and pear and a mandarin pulled apart into segments with every white thread taken off, which was the kind of thing that took a person twenty minutes and that nobody ever noticed, and she slid it across the table without comment and took the lid off for her." },
      { s: 'hanni', f: 'neutral', t: "I realized you probably went to the tower last night and didn't eat. Then you went to school and didn't eat. Then you came here." },
      { s: 'solar', f: 'neutral', t: "I ate." },
      { s: 'hanni', f: 'serious', t: "What did you eat?" },
      { n: "Solar opened her mouth and found nothing in it, not even a good lie, and Hanni watched her come up empty with an expression of such patient, total unsurprise that it was almost worse than being scolded." },
      { choose: [
        { t: "(Eat the fruit.)", notes: 3, then: [
          { n: "She ate the fruit. All of it, one piece at a time, while Hanni talked about nothing, about a bird she'd seen on the monorail rail and the girl at the bakery who had started saving her the soft rolls, and didn't watch her eat, very deliberately, the way you don't look straight at a cat you want to come closer." },
          { s: 'hanni', f: 'happy', t: "Good. Okay. That's one meal. I'm counting it. I'm counting the mandarin as two." }
        ] },
        { t: "You took the strings off the mandarin.", notes: 3, then: [
          { s: 'hanni', f: 'flustered', t: "You hate the strings! You pick every one off and then you're too tired to eat it and you leave it on your desk and it goes all dry." },
          { s: 'hanni', f: 'neutral', t: "So I just. Do it first. It's not a big deal. It's a mandarin." },
          { n: "It was a big deal. It was the biggest deal anyone had made of her in a week, and it was a mandarin, and Solar ate it segment by segment and didn't trust herself to say anything until it was gone." }
        ] },
        { t: "You don't have to look after me, Hanni.", notes: 2, then: [
          { s: 'hanni', f: 'neutral', t: "I know. Nobody has to do anything. People still do things." },
          { s: 'hanni', f: 'happy', t: "Eat the pear. The pear's going brown. It's going brown because you're arguing." }
        ] }
      ] }
    ],
    [
      { n: "Hanni had her eyes closed at the window table, both hands flat on either side of her iced coffee, her back very straight, breathing in through her nose for a slow count Solar could almost hear, and the girl behind the counter was watching her with open curiosity, and Hanni either didn't notice or had decided not to." },
      { s: 'hanni', f: 'neutral', t: "Shh. I'm meditating. It's my evening meditation. It's not evening, but at home I do it at four, and it's four." },
      { s: 'hanni', f: 'happy', t: "You can do it too. It's two minutes. The short version. You just breathe and you think of one thing that's yours." },
      { choose: [
        { t: "(Close your eyes and try.)", notes: 3, then: [
          { n: "She closed her eyes. The café was loud with cups and the hiss of the steam wand and somebody's baby, and she breathed in for Hanni's count, and out, and tried to think of one thing that was hers, and nothing came, and then something did. Cold sparkling water in a glass at a counter. Morning. A voice saying *who drank my water.*" },
          { n: "When she opened her eyes Hanni was already looking at her, and didn't ask, and pushed the iced coffee an inch closer to her hand, which was its own sentence." }
        ] },
        { t: "What do you think about? The one thing.", notes: 2, then: [
          { s: 'hanni', f: 'neutral', t: "Different things. Today it's the kitchen. At home. Seven in the morning, before anyone's talking. It's mine, even though it's everybody's." },
          { s: 'hanni', f: 'sad', t: "...Some days it's you. Don't make it weird." }
        ] },
        { t: "(Watch her do it instead.)", notes: 1, then: [
          { n: "Solar watched her. Two minutes, exactly, with her lashes resting on her cheeks and her dimples gone flat, and then she opened her eyes and smiled at nothing in particular, like she'd come back from a short trip somewhere with good weather." },
          { s: 'hanni', f: 'happy', t: "You didn't do it. I could feel you not doing it. Next time." }
        ] }
      ] }
    ]
  ],
  ranks: [
    { after: '9/14', title: '1: iced coffee', place: 'Paulownia Mall · Chagall Café', time: 'After School', music: 'tender', scene: [
      { n: "On Saturday night a girl in black with hoops in her ears had dropped every bag she was carrying in the middle of Paulownia Mall, in the last second of the Dark Hour, and stood there with tissue paper around her feet, saying Solar's name like it was the answer to a question she'd been asked a hundred times. Solar had stood in front of her without knowing who she was." },
      { n: "She would think about the girl's face for a long time. Not because it had crumpled. Because it hadn't, not right away. Because it had done everything at once, all of it right there on the surface, hope and shock and something going out like a light, and then, on top of all of that, so fast it almost didn't show, the girl had smiled at her. Like Solar was the one who needed to be made to feel better." },
      { n: "Her name was Hanni. She'd found the café on Sunday morning, on the walk Mitsuru had told her she was allowed to take, and claimed the window table, and as far as Solar could tell she'd been sitting at it, on and off, ever since, the way you keep sitting by a phone." },
      { register: 'hanni' },
      { n: "She was smaller up close than she'd been in the mall. Much smaller. Thick black bangs cut straight across her forehead, dimples that showed up before the rest of her smile did, and the kind of soft round face that made strangers on the monorail ask her for directions she didn't have. She saw Solar through the glass and waved with her entire arm, from the shoulder, the way you'd flag down a ship." },
      { s: 'hanni', f: 'happy', t: "Sol! Hi! Sit, sit. I already ordered. Is that okay? I ordered. Sorry. I didn't ask." },
      { n: "There were two iced coffees on the table, sweating rings onto the wood. One had a straw in it. One had the straw lying beside it, still in its paper, the way, Solar realized with a small cold jolt somewhere under her collarbone, she would have wanted it, because she liked to put it in herself." },
      { choose: [
        { t: "(Unwrap the straw and drink.)", notes: 3, then: [
          { n: "She tore the end off the paper and blew the rest of it off the straw without thinking, the way you'd do it if you were twelve, and it hit Hanni square in the bangs, and Solar froze, and Hanni didn't. Hanni laughed so suddenly she had to put her cup down." },
          { s: 'hanni', f: 'happy', t: "You ALWAYS do that! You always do that to me! Every single time! Okay. Okay. That's still the same. Good. Good, that's one thing." }
        ] },
        { t: "How did you know?", notes: 2, then: [
          { s: 'hanni', f: 'neutral', t: "You drink sparkling water in the mornings. Iced coffee all day. A refresher at night, if you're out, the pink kind. Never coffee after dark, because then you don't sleep, and you already don't sleep." },
          { s: 'hanni', f: 'flustered', t: "Sorry. That's a lot. I know a lot about you. It's not creepy. It's just the kitchen. We share a kitchen. And a hallway. And, like, a whole house." }
        ] },
        { t: "I'm sorry I didn't know you. At the mall.", notes: 2, then: [
          { s: 'hanni', f: 'sad', t: "Don't be sorry. Please. You looked so scared. You looked scared of *us.*" },
          { s: 'hanni', f: 'neutral', t: "That was the worst part. Not that you didn't know me. That you looked at me like I might want something from you. You've never once looked at me like that. Not even the first day." }
        ] }
      ] },
      { s: 'hanni', f: 'neutral', t: "I couldn't sleep last night. I kept thinking of things to tell you. I was going to make a list. In Fuuka's pajamas, which are very soft, by the way. I think they're nicer than anything I own." },
      { s: 'hanni', f: 'serious', t: "And then I decided something. Just me. Hyein doesn't know about it yet, she'll argue." },
      { s: 'hanni', f: 'neutral', t: "I'm not going to quiz you. No *do you remember this.* No photos. No crying at you. Well. I might cry. I cry at commercials. That's not your fault and it's not about you, I promise, I cried at a commercial for rice yesterday." },
      { choose: [
        { t: "Why not? It might help.", notes: 2, then: [
          { s: 'hanni', f: 'neutral', t: "Because every time you get one wrong you make this face. Like you've failed a test. You did it eleven times with Hyein last night. I counted." },
          { s: 'hanni', f: 'serious', t: "You're not getting tested by me. You get tested enough. You've been tested your whole life, Sol, by everyone, and you always pass, and it never once made you happy." }
        ] },
        { t: "What do we do instead?", notes: 3, then: [
          { s: 'hanni', f: 'happy', t: "Coffee! This. We sit here. You tell me things about here, and I tell you things about nothing, and if something comes back, it comes back on its own." },
          { s: 'hanni', f: 'neutral', t: "Things come back on their own when you stop chasing them. That's my mom's rule. It's about cats. I think it works for people." }
        ] },
        { t: "(Don't answer. Just keep drinking the coffee.)", notes: 3, then: [
          { n: "She didn't answer. She drank the coffee. Hanni watched her not answer, and her face went soft at the edges, like she'd been given exactly the reply she'd been hoping for and was trying very hard not to make it a big deal, and losing, visibly, in both dimples." }
        ] }
      ] },
      { n: "Outside the window the mall went on, a mother with a stroller, a boy with a skateboard he wasn't allowed to ride inside, an old man asleep on a bench with his hat over his face. Hanni watched them the way you'd watch fish in a tank in a restaurant, fascinated and a little sorry for them." },
      { s: 'hanni', f: 'neutral', t: "It's so quiet here. Everything is so clean. Nobody's yelling down a hallway. I keep waking up and waiting for Hyein's hairdryer through the wall." },
      { s: 'hanni', f: 'sad', t: "...She doesn't have a hairdryer here. She keeps looking for the outlet." },
      { s: 'hanni', f: 'neutral', t: "And I don't really go anywhere. At home. I'm a homebody. I'm always around, I'm always on the couch, everybody knows where to find me. And now I've gone, like, the farthest anyone's ever gone." },
      { s: 'hanni', f: 'happy', t: "For you. Which is the only reason I'd ever go anywhere. So." },
      { choose: [
        { t: "Same table again?", notes: 3, then: [
          { s: 'hanni', f: 'happy', t: "Same table. Same drinks. Straw in the paper. I'll be here. I'm always here. It's kind of my whole thing." }
        ] },
        { t: "Thank you for coming to find me.", notes: 3, then: [
          { s: 'hanni', f: 'flustered', t: "Course, girlie." },
          { n: "It came out of her quick and bright and easy, like something she'd said a thousand times, and Solar felt it land somewhere in her ribs she couldn't have pointed to, a word that fit a shape that was already there. *Girlie.* Nobody here would ever call her that. It sounded like a door she'd walked through every day." }
        ] }
      ] },
      { n: "When they left, Hanni stacked both empty cups and carried them to the counter and thanked the girl behind it twice, once in English and once in very careful Japanese she'd clearly practiced in a mirror, and the girl smiled at her like everyone always smiled at Hanni, and Solar stood by the door and thought, with no warning at all, *she always does that.* She had no idea how she knew." }
    ] },

    { after: '9/21', title: '2: the girls chat', place: 'Iwatodai Dorm · Lounge', time: 'Evening', music: 'joy', scene: [
      { n: "Hanni and Hyein had colonized one end of the lounge sofa the way water colonizes a sponge. Blankets. A bag of the rice crackers Junpei had told them were the best ones, which had turned out to be true, which Junpei was still smug about. Hyein's sketchbook. And two phones from home, face down, side by side on the cushion, like they were sleeping." },
      { n: "Mitsuru had given them each a phone for here, pink and folding, the same as Solar's, with the dorm's numbers already in it, so that Hanni could text *r u free??* to Solar from the floor above, which she did, constantly, with too many question marks. But the phones from home were different. They lit up. Their batteries never went down. Their clocks had stopped at the minute the girls crossed and stayed there. They wouldn't send anything anywhere. And every so often, at night, one of them buzzed, once, with something from very far away, and both girls lunged for it like it was a rope thrown over the side of a boat." },
      { s: 'hanni', f: 'neutral', t: "Do you want to see it? The chat? Our chat. You're in it. I'll show you. Only if you want." },
      { choose: [
        { t: "Show me.", notes: 3, then: [
          { s: 'hanni', f: 'happy', t: "Okay! Okay. Brace yourself. Hyein uses a lot of capitals." }
        ] },
        { t: "Is it embarrassing?", notes: 2, then: [
          { s: 'hyein', f: 'happy', t: "For you? Extremely. That's why it's good." }
        ] },
        { t: "Is that allowed? Under your rule?", notes: 3, then: [
          { s: 'hanni', f: 'flustered', t: "It's not a quiz! It's just showing. Showing's allowed. I said no photos, I didn't say no chat." },
          { s: 'hyein', f: 'neutral', t: "She makes rules and then she lawyers them. You'd know that if you remembered anything." },
          { s: 'hanni', f: 'serious', t: "*Hyein.*" }
        ] }
      ] },
      { n: "Hanni turned the phone over and scrolled up, and up, and up, and the messages went by in a blur of lowercase and capitals and pink hearts until she stopped, and turned the screen so Solar could see." },
      { phone: [
        { from: 'hanni', t: "@hanni: SOLAR we are so worried about you" },
        { from: 'hanni', t: "@hanni: please let us know you are ok" },
        { from: 'hyein', t: "@hyein: sorry solar!!! we didnt mean to leave you behind" },
        { from: 'hyein', t: "@hyein: the party wasnt really that scary, just really stinky" },
        { from: 'solar', t: "@solar: omg what a joke" },
        { from: 'solar', t: "@solar: whats wrong with people here???" },
        { from: 'hanni', t: "@hanni: they're nosy!!! dont let it get you down" }
      ], contact: 'hanni, hyein 🩷' },
      { n: "*@solar.* Lowercase. Three question marks. *omg what a joke.* It was her. It was her in a voice she had never once used out loud in this city, a quick dry careless voice that swore at things and didn't capitalize and assumed everyone else was the strange one." },
      { s: 'solar', f: 'surprised', t: "...I type like that?" },
      { s: 'hyein', f: 'serious', t: "You TALK like that too. Or you did. You never let me get away with anything." },
      { ifFlag: 'hyein-menace', then: [
        { s: 'hyein', f: 'happy', t: "You called me annoying at the mall. I don't think I've ever been so pleased to be insulted." }
      ], else: [
        { s: 'hyein', f: 'neutral', t: "I keep waiting for you to argue with me. Over absolutely nothing. Just because you can." }
      ] },
      { s: 'hanni', f: 'neutral', t: "Hyein." },
      { s: 'hyein', f: 'sad', t: "...Sorry. You don't have to. I'm just used to you." },
      { choose: [
        { t: "I don't know how else to talk to you yet.", notes: 3, then: [
          { s: 'hyein', f: 'sad', t: "...Okay." },
          { s: 'hyein', f: 'neutral', t: "Okay. That's fair. That's a real answer. I hate it. It's fair." }
        ] },
        { t: "omg what a joke.", notes: 3, then: [
          { n: "It came out of her flat and quick and a little mean and exactly right, and both girls stared at her, and then Hyein shrieked and threw a cushion at her and Hanni put both hands over her face and laughed into them until she was crying, a little, which she said didn't count, because it was the good kind." },
          { s: 'hyein', f: 'happy', t: "THERE SHE IS. THERE SHE IS. SAY SOMETHING ELSE MEAN." }
        ] },
        { t: "Was I happy? In the chat?", notes: 2, then: [
          { s: 'hanni', f: 'neutral', t: "Sometimes. You were happy in the chat more than you were out loud. You said things in it you never said in the kitchen." },
          { s: 'hanni', f: 'happy', t: "That's why we love the chat." }
        ] }
      ] },
      { n: "Hanni scrolled a bit further and stopped on a message from Solar, months old, that just said *ily guys* at two in the morning with no context and nothing after it. She didn't say anything about it. She just held the phone out so Solar could see it, and then took it back, and held it in her lap for a moment with her thumb over the words, like she was keeping them warm." },
      { s: 'hanni', f: 'neutral', t: "...Do you want to write something? In it? It won't send. Nothing sends. But it sits there in gray with the little *not delivered* under it, and I look at all of ours every night, so. I'd see it." },
      { s: 'hyein', f: 'neutral', t: "She means she reads the chat like a bedtime story. She does. Every night. It's so embarrassing. I do it too." },
      { n: "Hanni held the phone out. The keyboard was up. The cursor was blinking at the bottom of a thread full of people Solar didn't know, waiting for the girl she'd been to say something, and her thumbs hovered over it, and the lounge went very quiet around the three of them, even Junpei in the kitchen, as if the whole dorm had leaned in." },
      { choose: [
        { t: "(Type: im ok)", notes: 3, flag: { 'hanni-msg-ok': true }, then: [
          { phone: [{ from: 'solar', t: "@solar: im ok" }], contact: 'hanni, hyein 🩷' },
          { n: "Two words, lowercase, no period, because her thumbs wouldn't put one there. It went gray. *Not delivered.* Hanni looked at it for a long time, and then at Solar, and her chin did something small and brave." },
          { s: 'hanni', f: 'sad', t: "That's the first time you've ever said that and I believed you." }
        ] },
        { t: "(Type: omg what a joke)", notes: 3, flag: { 'hanni-msg-joke': true }, then: [
          { phone: [{ from: 'solar', t: "@solar: omg what a joke" }], contact: 'hanni, hyein 🩷' },
          { n: "It sat there under its twin from months ago, the same four words, gray now, *not delivered,* and Hyein made a sound that started as a laugh and didn't finish as one." },
          { s: 'hyein', f: 'happy', t: "She's REPEATING herself. That's so her. That's so incredibly her. Hanni, she's doing a bit with herself." }
        ] },
        { t: "(Type: ily guys)", notes: 3, flag: { 'hanni-msg-ily': true }, then: [
          { phone: [{ from: 'solar', t: "@solar: ily guys" }], contact: 'hanni, hyein 🩷' },
          { n: "She didn't decide to. Her thumbs did it, the way they'd done it at two in the morning once in a life she didn't have, and it went gray under the old one, *not delivered,* and nobody said anything at all." },
          { n: "Hyein got up very fast and went to the kitchen for water she didn't drink. Hanni didn't get up. She put the phone face down on the sofa and put her hand on top of it, flat, the way she had before, and kept it there for the rest of the night." }
        ] },
        { t: "I don't want to put words in her mouth.", notes: 2, then: [
          { s: 'hanni', f: 'surprised', t: "...Her?" },
          { s: 'solar', f: 'neutral', t: "The girl in the chat. She'd know what to say. I'd get it wrong." },
          { s: 'hanni', f: 'sad', t: "You're her, Sol. You couldn't get her wrong if you tried. But okay. Okay. It'll keep." }
        ] }
      ] }
    ] },

    { after: '9/30', title: '3: social chair', place: 'Iwatodai Dorm · Lounge', time: 'Evening', music: 'joy', scene: [
      { n: "It turned out Hanni had a title. At home she was *Social Chair.* She said it apologetically, like something she'd caught, and then admitted that what it meant was that she was in charge of fun, and that she was very good at it, and that she had been, for two and a half weeks, going quietly out of her mind with nothing to organize." },
      { n: "So she'd organized the dorm." },
      { n: "Not all at once. Politely. She'd approached Mitsuru first, after dinner, with a list on a sheet of notebook paper in her neatest handwriting, and when Mitsuru had asked whether this was a proposal, Hanni had raised her hand before answering, all the way up, the way you would in a classroom, and Mitsuru had looked at the hand for a long second and then said, very gravely, *yes, Hanni,* and the whole lounge had had to leave the room." },
      { n: "Then Mitsuru had read the whole list standing up, and then sat down and read it again, and then asked, very seriously, what a *mixer* was." },
      { s: 'mitsuru', f: 'neutral', t: "And the point of the mixer is...?" },
      { s: 'hanni', f: 'happy', t: "People who live in the same building should know each other's names! And what they like to eat! And who's allergic to what!" },
      { s: 'mitsuru', f: 'neutral', t: "...That's very sensible. Fine. Nothing after eleven. Nothing involving the fire extinguishers." },
      { s: 'hanni', f: 'serious', t: "Why would anything involve the fire extinguishers?" },
      { s: 'mitsuru', f: 'neutral', t: "Iori lives here." },
      { n: "So now it was the night of it, and the lounge had a banner over the television that said WELCOME!! in Hanni's handwriting and Hyein's glitter, and there were name tags, actual stick-on name tags from the stationery shop on the strip, and Akihiko's said AKIHIKO (PROTEIN) because Hanni had asked everyone to add one thing they liked, and Junpei's said JUNPEI (EVERYTHING) and was already peeling, and Koromaru's said KOROMARU (YES) in Ken's very careful printing, and the room was full of people who'd been living on top of each other for months and were somehow, for the first time, introducing themselves." },
      { n: "Hanni moved through it like a hostess at a wedding she'd been planning for a year. A hand on Fuuka's elbow, steering her toward Hyein. A plate of something put down exactly where Junpei would walk past it. A word in Aigis's ear, and Aigis turning, carefully, to tell Ken that she was pleased to see him this evening, which was clearly a sentence Hanni had handed her, and which Ken received like a medal." },
      { s: 'hanni', f: 'happy', t: "Sol! Name tag! What do you like? One thing. The first thing. Don't think." },
      { choose: [
        { t: "(Write: SOLAR (ICED COFFEE).)", notes: 3, flag: { 'hanni-tag-coffee': true }, then: [
          { s: 'hanni', f: 'happy', t: "Yes! That's correct! That's the correct answer!" },
          { n: "She stuck it on Solar's sweater herself, smoothing it down with her thumb twice, the way you'd smooth a plaster on a kid's knee." }
        ] },
        { t: "(Write: SOLAR (?).)", notes: 2, flag: { 'hanni-tag-question': true }, then: [
          { s: 'hanni', f: 'sad', t: "Oh, Sol." },
          { n: "She took the pen and, under the question mark, in very small round letters, wrote *we're finding out,* and stuck it on." }
        ] },
        { t: "(Write: SOLAR (THIS).)", notes: 3, flag: { 'hanni-tag-this': true }, then: [
          { s: 'hanni', f: 'surprised', t: "This? This what?" },
          { s: 'solar', f: 'neutral', t: "This. The room. The tags." },
          { n: "Hanni looked at her for a long second, and her face went pink from the neck up, and she said *okay* in a very small voice and had to go and check on the snacks for a while." }
        ] }
      ] },
      { n: "It was a good party. That was the surprising thing. Fuuka and Hyein discovered they had the same taste in old horror movies and the same habit of watching them through their fingers. Ken explained the rules of a card game to Hanni for twenty minutes with total seriousness and she listened to every word and lost on purpose, badly, three times in a row, and Ken was so delighted to have taught someone something that he forgot to be eleven for nearly an hour. Koromaru ate a name tag. Not his." },
      { n: "At half past ten Akihiko, who had stood by the wall all evening like a bodyguard at a wedding, came and sat on the arm of the sofa next to Solar and said, with real wonder, that he'd lived in this dorm for two years and hadn't known Fuuka liked horror films." },
      { s: 'hanni', f: 'happy', t: "That's what mixers are for!" },
      { s: 'akihiko', f: 'happy', t: "...Huh. I get it now." },
      { n: "Solar kept losing Hanni and finding her again. By the snacks. By the stairs, listening to Yukari with her head tilted. Kneeling on the floor by Koromaru, apologizing to him about the name tag as if it had been her fault. And every time Solar found her, Hanni was already looking back, a quick glance across the room, checking, and then going on with whatever she'd been doing, like a girl counting heads on a field trip and finding everyone where she'd left them." },
      { choose: [
        { t: "(Go and stand next to her for a while.)", notes: 3, then: [
          { n: "She went and stood next to her by the stairs. Hanni didn't say anything. She just shifted half a step to make room, the way you'd make room for someone at a crowded bar, and leaned, very slightly, into Solar's shoulder, and they watched the party together like two people watching a pot they'd put on to boil." },
          { s: 'hanni', f: 'neutral', t: "You do this at home. You stand next to me at parties. You don't talk. Everyone thinks you're being scary. You're just standing next to me." }
        ] },
        { t: "(Bring her a drink. She hasn't had one all night.)", notes: 3, then: [
          { s: 'hanni', f: 'surprised', t: "Oh! I didn't even. I forgot to have one. Thank you!" },
          { s: 'hanni', f: 'happy', t: "That's so funny. That's the thing you always do. You bring me a drink halfway through and you say *you forgot to have one* in this voice like I'm in trouble." }
        ] },
        { t: "(Stay on the sofa and watch her work.)", notes: 2, then: [
          { n: "She stayed where she was and watched. It was like watching someone tune a piano by ear. Small adjustments, all night, everywhere, nobody noticing a single one, and the room getting warmer and warmer around a girl who had not once sat down." }
        ] }
      ] },
      { n: "When it was over Hanni stood in the middle of the lounge with a trash bag and the glitter and the banner coming down and looked so happy it hurt to look at her. Solar picked up the other side of the banner. They folded it together, corner to corner, the way you fold a flag." },
      { s: 'hanni', f: 'neutral', t: "You used to help me clean up. At home. Every time. You'd go off somewhere in the middle and then you'd come back at the end when everyone was gone and help me clean up. You never said why." },
      { s: 'hanni', f: 'happy', t: "I think it's because the end is your favorite part. When it's just a room again." },
      { n: "She peeled Solar's name tag off her sweater, carefully, so it wouldn't tear, and didn't throw it away. She stuck it to the inside cover of the pale yellow notebook she wrote her letters in, and closed the notebook, and put it in her bag, and didn't explain, and Solar didn't ask, because she found she already knew." }
    ] },

    { after: '10/9', title: '4: the honest face', place: 'Paulownia Mall · Chagall Café', time: 'After School', scene: [
      { n: "Solar had learned something about Hanni's face in a month, and it was that it could not lie. Not wouldn't. Couldn't. Whatever Hanni felt went straight up into her eyebrows and out through the corners of her mouth before she'd decided whether to feel it, and Solar had watched her try to stop it, at dinner, in the lounge, at this window, a hundred times, and fail every single time, and be embarrassed about it, and be loved for it by everyone in the room." },
      { n: "It was useful. That was the ugly part, the part Solar didn't like in herself. It was useful to sit across from a face like that when you were a girl who couldn't remember anything, because Hanni's face was a map of everything she wasn't saying, and Solar had been reading it for a month the way you'd read the weather off a lake, and Hanni knew it, and had let her." },
      { n: "There had been the night of the fourth. The bridge in the rain, and what came after, the hospital, the long quiet days when nobody in the dorm said Shinjiro's name at the table, and Hanni, who'd met him exactly twice, had made tea every evening that week for whoever came down, eight cups, and left them on the counter, and washed them all at midnight whether anyone had drunk them or not." },
      { n: "So she asked the question she'd been saving." },
      { s: 'solar', f: 'neutral', t: "How long have I been gone? At home." },
      { n: "Hanni's whole face moved at once." },
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
      { n: "A boy at the next table was proposing to his girlfriend. Not really. He was asking her to the culture festival, and he was doing it the way boys of sixteen do everything important, too fast and to the side, into his milkshake, and the girl was making him say it twice. Hanni watched with her whole body turned toward them and her hands pressed together under her chin." },
      { s: 'hanni', f: 'happy', t: "She's going to say yes. Look at her ear. Her ear's red. She's making him work for it. Good for her." },
      { s: 'solar', f: 'neutral', t: "How can you tell from an ear?" },
      { s: 'hanni', f: 'neutral', t: "Everybody's got a thing. A place it comes out. Hers is the ear. Hyein's is her shoulders, they go up when she's excited, like a cat." },
      { s: 'hanni', f: 'neutral', t: "Yours is your jaw. When you're upset you smile and your jaw goes tight right here, like you're biting down on something. You're doing it right now. A little. You don't have to stop." },
      { n: "Solar touched her own jaw before she could help it. It was tight. She hadn't known. She sat with her fingers on it like someone feeling for a pulse, and Hanni looked politely out of the window and let her." },
      { s: 'hanni', f: 'serious', t: "Can I promise you something?" },
      { s: 'hanni', f: 'neutral', t: "Here, I'm going to tell you the truth. Every time. Even small things. Even if it's that your hair looks weird. Because everybody's going to want you to be something. Home's going to want you to be something. Here's going to want you to be something. And I can't stop any of that." },
      { s: 'hanni', f: 'serious', t: "But I don't want to be one more person deciding what you can handle. So I'll just tell you. And you decide." },
      { n: "She said it to the table, steady, with her face doing absolutely everything, every bit of it out loud and honest, and Solar felt something in her chest unclench that she hadn't known had been clenched since April, since a checkerboard floor and a green moon and nobody, nobody at all, telling her the truth about anything." },
      { choose: [
        { t: "My hair looks weird?", notes: 3, then: [
          { s: 'hanni', f: 'happy', t: "A little! On the left! It's the humidity here, it's not your fault!" },
          { n: "Solar laughed so suddenly she snorted, which she had never done in her life, here, and Hanni's face lit up like someone had switched on every light in a house, and then she reached across the table and fixed it, the left side, with two quick tucks, and sat back, satisfied." }
        ] },
        { t: "Deal.", notes: 3, flag: { 'hanni-pinky': true }, then: [
          { s: 'hanni', f: 'happy', t: "Deal. Pinky promise. Give me your pinky. You have to. It's binding." },
          { n: "Solar gave her the pinky. Hanni hooked it with her own, very solemnly, and shook it once, up and down, like a contract, and then didn't let go right away, and they sat like that across the little table with their coffees sweating between them while the boy at the next table got his yes." }
        ] },
        { t: "And if the truth is something I can't handle?", notes: 2, then: [
          { s: 'hanni', f: 'neutral', t: "Then I'll tell you that, too. *This one's heavy.* And you can say *not today.* And I'll keep it. I'm good at keeping things. I just can't keep them off my face." },
          { s: 'hanni', f: 'happy', t: "So you'll always know there's something. That's the deal. You get the warning for free." }
        ] }
      ] }
    ] },

    { after: '10/18', title: '5: a feeling', place: 'Iwatodai Station · Platform', time: 'Evening', music: 'night', scene: [
      { n: "Hanni had decided she wanted to see the trains. Not ride them anywhere. See them. She'd said, at dinner, that at home everyone drove, or walked, or got driven, and that she'd driven herself to school with her whole life in the back seat and had nearly fallen asleep at the wheel twice, and that she'd never in her life lived anywhere you could stand on a platform and watch a whole city go home in lit-up boxes, and could Solar take her, please, if it wasn't a bother." },
      { ifBefore: '10/19', then: [
        { n: "Exams started tomorrow. Solar should have been studying. She took her anyway." }
      ], else: [
        { n: "Solar had a hundred things to do and a tower to climb at midnight. She took her anyway." }
      ] },
      { n: "So they stood on the platform at Iwatodai in the early evening, eating takoyaki out of a paper boat from the stand by the gate, while the trains came in and went out and the salarymen got on and off with their ties loosened and their faces gray, and the October wind came down the tracks with the smell of the bay in it, and Hanni watched every single train go like it was a parade." },
      { s: 'hanni', f: 'happy', t: "Look at him. Look at him with the flowers. He's going home to somebody. He bought them at the station. That's so romantic. That's so last-minute and romantic." },
      { choose: [
        { t: "Maybe they're for his mother.", notes: 2, then: [
          { s: 'hanni', f: 'happy', t: "That's even MORE romantic." }
        ] },
        { t: "Maybe he forgot their anniversary.", notes: 3, then: [
          { s: 'hanni', f: 'surprised', t: "SOL." },
          { s: 'hanni', f: 'happy', t: "...He definitely forgot their anniversary. Look at his shoulders. Oh no. Oh, I hope she forgives him." }
        ] },
        { t: "(Say nothing. Watch him get on the train.)", notes: 2, then: [
          { n: "The man with the flowers got on. The doors shut on him. He stood holding the bouquet against his chest like something that might get away, and the train took him, and Hanni sighed, a whole-body sigh, as if she'd watched the end of a film." }
        ] }
      ] },
      { n: "Down at the far end of the platform, past the vending machines, on the last bench, there was a girl in a too-big navy coat with her collar up and a cap pulled down over her hair, sitting very still, watching the trains go without getting on any of them." },
      { n: "Hanni looked at her. Solar watched Hanni look at her. Hanni's face, which hid nothing, went through something quick and strange, a little frown, a little tilt, the face of someone hearing a song from another room and trying to place it." },
      { s: 'hanni', f: 'neutral', t: "...Huh." },
      { s: 'solar', f: 'neutral', t: "That's Wren. She's always there. She keeps missing her train." },
      { s: 'hanni', f: 'neutral', t: "She looks like— hm." },
      { n: "She stopped. She looked at the paper boat in her hand, at the last two takoyaki going cold in it. She rubbed her own arm, up and down, through her sleeve, like the wind had found a way in." },
      { s: 'hanni', f: 'flustered', t: "I think it's the takoyaki. I feel funny. I think I ate too fast. That's all it is." },
      { n: "It was the first thing Solar had ever heard Hanni say that her face didn't agree with. It was so strange that for a second Solar didn't recognize it. Then she did, and it sat in her stomach like a stone, cold and small, and she didn't know what to do with it, so she held it, the way you'd hold a ticket you weren't sure you'd need." },
      { choose: [
        { t: "Do you want to go say hi?", notes: 2, then: [
          { s: 'hanni', f: 'neutral', t: "...No. No, I think she wants to be by herself. She looks like you do when you want to be by yourself." },
          { s: 'hanni', f: 'happy', t: "Anyway! Takoyaki! There's two left! One each!" }
        ] },
        { t: "(Give her the last takoyaki.)", notes: 3, then: [
          { s: 'hanni', f: 'happy', t: "No, you have it! You have it. Okay. Half. We'll do half." },
          { n: "They did half. When Solar looked back down the platform, the bench was empty. Hanni didn't look back at all. Solar noticed that, and didn't know what to do with it, and put it away somewhere." }
        ] },
        { t: "That's not the takoyaki, Hanni.", notes: 2, then: [
          { s: 'hanni', f: 'sad', t: "...No. It's not." },
          { s: 'hanni', f: 'neutral', t: "But I don't know what it is. So I'm not going to say a thing I don't know. That's the rule. I'd only be guessing at you, and you've had enough people guessing at you." },
          { n: "When Solar looked back down the platform, the bench was empty." }
        ] }
      ] },
      { n: "On the walk back Hanni held her arm, the way she apparently always had, tucked through the crook of Solar's elbow like they were two old ladies on a promenade, and talked about everything, about her mom and the kitchen at home and the woman at the bakery and a dress she'd seen in a window on the second floor of the mall, and never once mentioned the bench." },
      { n: "The river was black and slow beside the path and the streetlights came on one at a time ahead of them, the way they did, like someone walking ahead turning them on, and they got to the place below the dorm where the path turned and the building's windows were all lit, and Hanni stopped, and didn't let go of the arm." },
      { s: 'hanni', f: 'neutral', t: "Sol. Are you scared? Here? Ever?" },
      { choose: [
        { t: "Every night. Right at midnight.", notes: 3, flag: { 'hanni-knock': true }, then: [
          { s: 'hanni', f: 'neutral', t: "Me too." },
          { s: 'hanni', f: 'happy', t: "Okay. Then at midnight, I'll knock. On your door. Twice. So you know I'm scared too. Okay? That's the plan." },
          { s: 'solar', f: 'neutral', t: "Everyone in the building's asleep at midnight. Everyone but us." },
          { s: 'hanni', f: 'serious', t: "Then it's a very good plan. Nobody'll hear it but you." }
        ] },
        { t: "Not when I'm with people.", notes: 3, flag: { 'hanni-people': true }, then: [
          { s: 'hanni', f: 'happy', t: "Then we'll make sure you're with people. That's easy. That's the easiest job I've ever had." },
          { s: 'hanni', f: 'neutral', t: "I'm people. I'm very good at being people. I'll leave my door open. The whole hour. You can come and sit on the end of my bed and not talk. You do that at home, too." }
        ] },
        { t: "Are you?", notes: 2, then: [
          { s: 'hanni', f: 'sad', t: "All the time. Every night. The green comes up and everything stops and the clock stops and I lie there and I think, what if it doesn't start again. What if this is just it now." },
          { s: 'hanni', f: 'neutral', t: "And then it starts again. Every time. So far. I count. I'm on thirty-six." }
        ] }
      ] }
    ] },

    { after: '10/28', title: '6: faces', place: 'Iwatodai Dorm · 2F Hallway', time: 'Evening', scene: [
      { n: "Halloween was in three days, and the dorm, Hyein had announced, with the horror of someone announcing a death in the family, did not do Halloween. Not properly. Junpei did Halloween, in the sense that he owned a Superman costume from a discount shop that was a size too small, but that, Hyein had told the lounge, did not count, and was in fact a cry for help." },
      { n: "So Hyein had the clothes, and had disappeared into them, and the lounge had become a workshop, and nobody was allowed in without knocking. And Hanni had the faces. That was the system, Hanni said. It had always been the system. Hyein did the clothes and Hanni did faces and Minji did the camera and Solar sat still and complained, and between the four of them they had won something once, at a party Solar couldn't remember, in a house she couldn't picture." },
      { s: 'hanni', f: 'happy', t: "Okay. Sit. Lid down. Face to the light. This is just a test. I need to see what the lighting here does to your skin, it's all fluorescent, it's like a hospital." },
      { n: "The second-floor bathroom. Solar on the closed toilet lid with a towel round her shoulders like a barber's cape, Hanni standing over her with a little zip bag of makeup she'd bought on the strip, item by item, over three weeks, comparing every shade against the inside of her own wrist with the seriousness of a chemist. Steam from somebody's shower still clinging to the corners of the mirror. The extractor fan making its long tired noise." },
      { s: 'hanni', f: 'neutral', t: "Close your eyes. No. Not yet. Look up. Up. At the ceiling. Good." },
      { n: "Her hands were very light. That was the first thing. Solar had expected to be uncomfortable, a stranger's fingers on her face, a stranger's breath close enough to feel, and instead it was like being touched by weather, a brush, a fingertip at the corner of her eye, gone before she'd decided to flinch, and something in her body knew the exact pressure of it and settled under it, like a dog lying down in its own spot." },
      { s: 'hanni', f: 'neutral', t: "We did this at home. Before a thing your dad sent you to. We had forty-five minutes before the car came, and you'd been up all night, and you looked like a ghost, and Hyein was yelling about a zipper, and I did your whole face in thirty." },
      { s: 'hanni', f: 'happy', t: "It was my best work. Nobody ever saw it. They took you to a salon across town and someone washed it all off and did it again. You texted me a picture from the chair. You'd drawn a sad face on it." },
      { choose: [
        { t: "That sounds like a bad day.", notes: 2, then: [
          { s: 'hanni', f: 'neutral', t: "It was a bad day. The forty-five minutes were good. You let me do the bad days in pieces like that. That's how you get through them. Good piece, bad piece, good piece." }
        ] },
        { t: "Why do you know how to do this so well?", notes: 3, then: [
          { s: 'hanni', f: 'flustered', t: "I practice on myself! Every night. Then I take it all off. Nobody sees it. It's sort of like my meditation." },
          { s: 'hanni', f: 'neutral', t: "I like making a face for someone. It's like saying, here, this is what I see when I look at you. Without having to say it out loud. I'm bad at saying it out loud. It all comes out at once." }
        ] },
        { t: "(Just keep your eyes on the ceiling.)", notes: 3, then: [
          { n: "She kept her eyes on the ceiling. There was a water stain in the shape of nothing in particular up there, and she looked at it, and Hanni worked, and neither of them talked for a long time, and it was the most restful ten minutes she'd spent since the summer." }
        ] }
      ] },
      { n: "Then Hanni stepped back, and turned her by the shoulders to face the mirror, and Solar looked." },
      { n: "Her own face. Not made into something else. Just more, somehow. Less tired. The shadows under her eyes gone, and something warm at the cheekbones, and her mouth, which she'd stopped thinking of as a part of her that did anything but say *I'm fine,* looking like it might do something else. And over her shoulder, in the steamed edge of the glass, Hanni's face, close behind her, watching, doing everything at once the way it always did, pride and worry and something tender, all of it, all over it, out loud." },
      { n: "Two faces in a mirror. One doing nothing. One doing everything." },
      { n: "Solar looked at the difference between them for so long that the fan clicked off." },
      { s: 'hanni', f: 'neutral', t: "...You're doing it. The thing where you go somewhere." },
      { choose: [
        { t: "(Keep looking. Don't look away this time.)", notes: 3, flag: { 'hanni-eyes-open': true }, then: [
          { n: "She didn't look away. She made herself not, the way you make yourself stay in cold water, and the face in the glass looked back at her, and for a second, one second, its jaw went loose, and its mouth did something small and uncertain that wasn't a smile and wasn't *I'm fine,* and Hanni, behind her, made a very quiet sound, like she'd seen a deer step out of the trees." },
          { s: 'hanni', f: 'sad', t: "...Hi. There you are." }
        ] },
        { t: "You do yours out loud. I do mine on the inside.", notes: 3, then: [
          { s: 'hanni', f: 'surprised', t: "...Yeah." },
          { s: 'hanni', f: 'neutral', t: "Yeah. That's it. That's exactly it. That's the most you've ever said about it. At home or here." },
          { s: 'hanni', f: 'happy', t: "I'll do both of ours out loud, then. I've got enough face for two." }
        ] },
        { t: "Take it off. I don't know who that is.", notes: 1, then: [
          { s: 'hanni', f: 'sad', t: "Okay. Okay, of course." },
          { n: "She took it off with a cotton pad and something cold from a bottle, very gently, the way you'd take a bandage off, and when Solar's face was her own again in the glass, gray and tired and composed, Hanni looked at it and said, quietly, to the mirror and not to her, *I know who it is,* and put the bottle away." }
        ] }
      ] },
      { s: 'hanni', f: 'neutral', t: "I'm Flora, by the way. On the night. I'm always Flora. She's the nice one. Everyone says I'm the nice one like it's a small thing." },
      { s: 'hanni', f: 'serious', t: "It's not a small thing. Being the nice one. It's so much work. Nobody knows. I'm so tired." },
      { n: "She said it cheerfully, packing the brushes back into the zip bag one at a time, and then stopped, and laughed at herself, a little embarrassed, and Solar heard the true thing under it, the thing that had slipped out sideways because Hanni's face had been busy with something else, and didn't say anything, and put the cotton pads back in the bag for her, which was its own answer." }
    ] },

    { after: '11/20', title: '7: the truth, small', place: 'Paulownia Mall · Chagall Café', time: 'After School', scene: [
      { n: "November had brought a boy from home. On the bridge in the green, and then in the dorm's laundry room at three in the morning, sitting on the dryer, saying almost nothing. Hanni had heard about it at breakfast from Junpei, who had heard about it from Fuuka, who had heard it, she said, like a single bell ringing twice. Hanni had put down her chopsticks and looked at Hyein, and Hyein had looked at Hanni, and neither of them had said anything at all, which for the two of them was the loudest thing Solar had ever heard." },
      { ifFlag: 'door-R6', then: [
        { n: "And then, two weeks after, another one, at the station piano, warm and easy and smiling, who'd said he knew the others were here because Hanni had texted him. And Hanni, told this at the breakfast table, had gone the color of the tablecloth." },
        { n: "She'd texted everyone. That was all. On the first night, on the phone from home that didn't send anything anywhere, she'd texted everyone in it, one by one, *we found her, she's okay, she's here,* and none of them had gone, and apparently one of them had." }
      ] },
      { s: 'hanni', f: 'neutral', t: "So. I promised you the truth. Small things." },
      { ifFlag: 'hanni-pinky', then: [
        { s: 'hanni', f: 'serious', t: "I pinky promised. It's binding. I'm bound." }
      ] },
      { s: 'hanni', f: 'serious', t: "Here's one. It's small. I'm nervous. That's all. That's the whole truth. I'm nervous, and I'm going to be nervous for a while, and you're going to see it on my face every time you come down to breakfast, so I wanted to say it before you had to wonder." },
      { choose: [
        { t: "About them?", notes: 3, then: [
          { s: 'hanni', f: 'neutral', t: "About you. Around them. Not because of anything. Not because of anyone. Because you're going to feel things, and I'm not going to be able to tell you if you should." },
          { s: 'hanni', f: 'happy', t: "Which I shouldn't, anyway. That's not my job. My job's iced coffee." }
        ] },
        { t: "What aren't you telling me?", notes: 3, then: [
          { n: "Hanni's face did the thing. All of it, every inch, honest and miserable." },
          { s: 'hanni', f: 'sad', t: "Lots. About home. Not secrets. Just your life. It's yours. It's not mine to hand you here, where you can't check it." },
          { s: 'hanni', f: 'serious', t: "When you're home you can ask me anything and I'll tell you. I promise. But not like this. Not so it's a story I'm telling you about yourself. You'd believe me. That's the problem. You'd believe anything I said, because of my face." }
        ] },
        { t: "Is one of them bad for me?", notes: 2, then: [
          { s: 'hanni', f: 'sad', t: "..." },
          { s: 'hanni', f: 'neutral', t: "I don't get to answer that. I really, really want to. I've wanted to answer that for weeks. At home. Here. Everywhere." },
          { s: 'hanni', f: 'serious', t: "But the people who answer that for you are the ones who make you crazy. You told me that. Everybody deciding. So I'm not. You're going to decide. And I'm going to be right here either way, with a drink." }
        ] }
      ] },
      { s: 'hanni', f: 'neutral', t: "And here's another one. A worse one. It's about me, not you." },
      { s: 'hanni', f: 'flustered', t: "People ask me things about you. At home. They always have. What you like, what you're doing, where you'll be, what color, what flower. And I always answer. Because I like you, and I like talking about you, and I think everyone's nice." },
      { s: 'hanni', f: 'sad', t: "And sometimes I find out later that I shouldn't have. Not because anybody did anything. Just because it was yours. And I handed it out like a flyer." },
      { n: "She said it to her coffee. Her ears had gone red. Solar looked at her, at this very small girl with her hands wrapped round a plastic cup like it was the only warm thing in the building, confessing to the crime of having liked her out loud, and something in her chest went sore and protective all at once, the way it did in the tower when somebody went down." },
      { choose: [
        { t: "Then stop answering. Tell them to ask me.", notes: 3, flag: { 'hanni-ask-her': true }, then: [
          { s: 'hanni', f: 'surprised', t: "...Just like that?" },
          { s: 'solar', f: 'neutral', t: "Just like that. *Ask her.* Two words. You don't even have to be rude." },
          { s: 'hanni', f: 'happy', t: "*Ask her.* Okay. I can do that. I'm going to practice it in the mirror. I'm going to sound so mean." },
          { s: 'hanni', f: 'neutral', t: "...Thank you. I needed someone to tell me I was allowed." }
        ] },
        { t: "That's not a crime, Hanni. That's just you.", notes: 3, then: [
          { s: 'hanni', f: 'sad', t: "It's both. It can be both." },
          { s: 'hanni', f: 'neutral', t: "But thank you. I'm going to be more careful. With your things. You've got so few things here. I'm going to hold the ones you've got really carefully." }
        ] },
        { t: "What did they ask you?", notes: 1, then: [
          { s: 'hanni', f: 'neutral', t: "Little things. Nothing. That's what I mean, Sol. It's always nothing. It's nothing until it isn't." },
          { s: 'hanni', f: 'serious', t: "And I'm not telling you which things, because then I'd be doing it again, wouldn't I. Handing you something to look at. Just. If anyone here knows something about you that you didn't tell them, it might've been me. I'm sorry." }
        ] }
      ] },
      { s: 'hanni', f: 'neutral', t: "Can I tell you a different true thing? A nice one? I need a nice one, I'm going to cry in a café." },
      { s: 'hanni', f: 'happy', t: "You look happier here than you did at home, some days. Not all days. Some. When you're with the dorm. When Junpei's being stupid. When Koromaru sits on your feet." },
      { ifRank: { akihiko: 6 }, then: [
        { s: 'hanni', f: 'happy', t: "When Akihiko-senpai makes you run in the rain and you come back soaked and pretending you're annoyed. You're not annoyed. Your jaw doesn't do the thing. I checked." }
      ] },
      { s: 'hanni', f: 'neutral', t: "I'm happy you have that. I want you to know I mean it. I'm not saying it so you'll feel guilty. I'm saying it because it's true, and I promised." },
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
      { n: "Since Tartarus. Since a dead party on a floor that smelled like spilled sugar, and a thing made out of a crowd reaching for Hyein, and Hanni, with nothing, with no Persona and no Evoker and no anything, stepping in front of it with her arms out. Nobody in the dorm had stopped talking about it. Hanni hadn't said a single word about it. She'd washed the sneakers in the bathroom sink that same night, scrubbing the soles with a toothbrush until three, and put them on the windowsill to dry, and the next morning she'd been in the kitchen at six like nothing had happened." },
      { n: "She was there again now. Solar found her at six in a cream cardigan over her pajamas, standing at the counter with the overhead light off and the window going gray behind her, pouring sparkling water from a big green bottle into two glasses she'd found at the back of a cupboard, slowly, so it wouldn't fizz over." },
      { s: 'hanni', f: 'happy', t: "Morning! You're up! You're never up. I'm doing the kitchen. Sit." },
      { n: "*Doing the kitchen.* She said it like it was a ritual, and set one glass in front of Solar on the counter and one in front of the empty stool beside her, and then a third, after a second, in front of the stool on the other side, and stood there looking at it." },
      { s: 'hanni', f: 'neutral', t: "That's Hyein's. She won't come down for another hour. She'll come down with wet hair and say *who drank my water.* Every day. Nobody ever drinks her water." },
      { ifFlag: 'hanni-knock', then: [
        { n: "There were shadows under Hanni's eyes. Solar knew exactly how they'd got there, because every night for six weeks, at the minute the green came up, there had been two soft knocks on her door, and every night Solar had knocked twice back, and every night she'd lain there afterward knowing that on the other side of the wall a girl who was frightened of the dark was lying awake on purpose, so that Solar wouldn't have to be awake alone." }
      ], else: [
        { n: "There were shadows under Hanni's eyes. Solar knew exactly how they'd got there, because every night for six weeks, at the minute the green came up, Hanni's door at the end of the hall had stood open, a crack of lamplight across the floor, and some nights Solar had gone and sat on the end of the bed and some nights she hadn't, and either way, every night, the door had been open, and somebody behind it had stayed awake to keep it that way." }
      ] },
      { n: "The kitchen was gray and quiet and smelled of the rice cooker on its keep-warm setting and the cold coming off the window, and Solar sat with the glass of sparkling water in her hand, and something happened." },
      { n: "A different kitchen. Bigger. Brighter. Pink, absurdly pink, pink mugs on a pink shelf, morning sun coming through a window over a sink full of somebody's dishes, a candle burning on the windowsill that smelled like fake strawberries and absolutely should not have been lit that close to the curtains. Three girls at a counter in pajamas. One with wet hair saying *who drank my water.* One laughing. One, her, in a sweatshirt too big for her, not laughing, holding a glass of sparkling water exactly like this one and thinking, very clearly, *this is the only part of the day I like.*" },
      { s: 'solar', f: 'neutral', t: "...The candle. You leave it on the windowsill. By the curtains. It's going to burn the whole house down." },
      { s: 'hanni', f: 'surprised', t: "..." },
      { s: 'solar', f: 'neutral', t: "And there are pink mugs. I bought pink mugs. You said I hated the pink when I moved in. I didn't tell anyone why I bought them." },
      { s: 'solar', f: 'neutral', t: "It's because I liked the mornings. With you two. In the kitchen. I wanted something there that was mine that was the same color as everything else." },
      { n: "Hanni put her glass down on the counter. She didn't say anything. Her face was doing everything at once, every single thing, all of it out loud, and she put both hands flat on the counter like she needed to hold on to it." },
      { ifFlag: 'hanni-eyes-open', then: [
        { n: "It was the face from the bathroom mirror. The one that had looked back at Solar over her own shoulder, doing everything. Solar didn't look away from it this time either. She'd been practicing." }
      ] },
      { choose: [
        { t: "(Hold her hand on the counter.)", notes: 3, then: [
          { n: "Solar put her hand over Hanni's. Hanni turned hers over and held on, hard, and laughed, and cried, both, a little, at six in the morning in a kitchen in a city neither of them was from, and the rice cooker clicked over to warm again like it was clearing its throat to give them a minute." }
        ] },
        { t: "Who drank my water.", notes: 3, then: [
          { n: "She said it in Hyein's voice. She had no idea she could do Hyein's voice. Hanni made a sound like a teakettle and put her whole face in her cardigan sleeves and laughed until she had to sit on the floor, and Solar sat on the floor with her, because it seemed rude not to, and they stayed down there among the cupboard doors like two kids hiding from a babysitter." }
        ] },
        { t: "You stood in front of her. In the tower.", notes: 3, then: [
          { s: 'hanni', f: 'sad', t: "...We're not talking about that." },
          { s: 'solar', f: 'neutral', t: "We're not. I just wanted you to know I saw it. Someone should say they saw it." },
          { n: "Hanni looked down at the counter for a long time. Then she nodded, once, very small, the way you'd sign for a package, and picked up her water, and her hand was shaking, and she drank it anyway." }
        ] }
      ] },
      { n: "An hour later Hyein came down with wet hair and stopped in the doorway and looked at the third glass, full, untouched, on the counter, and then at the two of them, and narrowed her eyes." },
      { s: 'hyein', f: 'serious', t: "...Who drank my— oh. Oh, it's full. Why is it full? Why are you both looking at me like that? What happened? Why is Hanni crying? HANNI, WHY ARE YOU CRYING." },
      { s: 'hanni', f: 'happy', t: "She remembered the candle." },
      { s: 'hyein', f: 'surprised', t: "The CANDLE? Of all the things? Out of everything she could get back she got your *fire hazard?*" },
      { n: "But she came and stood behind Solar's stool anyway and put her chin on top of Solar's head, wet hair and all, and drank her water, finally, the whole glass, standing there, like a toast." }
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
        ] },
        { t: "Practice? Practice for what?", notes: 2, then: [
          { s: 'hanni', f: 'neutral', t: "That's yours. I said I wouldn't hand you things. You'll find it. It's a good one. You'll like it when you find it." },
          { s: 'hanni', f: 'happy', t: "It's not knitting. I'll tell you that much. Hyein guessed knitting for a whole week, it was so funny." }
        ] }
      ] },
      { n: "Below them the city was going about its afternoon, the monorail sliding along its rail like a bead on a string, the bay flat and silver and cold, and Solar could hear the faint far noise of the high school's PE class on the field, a whistle and a ball and somebody shouting. The kind of ordinary that she'd been living inside for eight months without noticing, until someone sat behind her and made her hold still in it." },
      { ifFlag: 'hanni-tag-question', then: [
        { s: 'hanni', f: 'neutral', t: "I still have your name tag. From the mixer. The question mark one. It's in my notebook." },
        { s: 'hanni', f: 'happy', t: "I keep wanting to cross out the question mark. I'm not going to. It's not mine to cross out. But I keep wanting to." }
      ] },
      { ifFlag: 'hanni-tag-this', then: [
        { s: 'hanni', f: 'neutral', t: "I still have your name tag. From the mixer. SOLAR, THIS. It's in my notebook. I look at it when I write to my mom." },
        { s: 'hanni', f: 'flustered', t: "I've never had anyone like a party I made that much. Not out loud. Not on a sticker." }
      ] },
      { ifFlag: 'hanni-tag-coffee', then: [
        { s: 'hanni', f: 'neutral', t: "I still have your name tag. From the mixer. ICED COFFEE. It's in my notebook. Next to the receipt with all your good things on it." },
        { s: 'hanni', f: 'happy', t: "It's a whole archive now. I'm the Solar archive. Somebody has to be." }
      ] },
      { s: 'hanni', f: 'serious', t: "Sol. I want to say something and I want you to let me say all of it without saying anything back until I'm done." },
      { s: 'hanni', f: 'neutral', t: "Everybody's going to ask you to come home. Soon. Me too, probably. I can feel it coming, like a sneeze. And you're going to feel like you're letting someone down whatever you do. Because you always feel like that. You've felt like that your whole life." },
      { s: 'hanni', f: 'serious', t: "So here's what I'm saying now, before the asking. Whatever you do. Wherever you are. You're our sister. That doesn't stop. It didn't stop when you forgot us, and it won't stop if you stay. It's not a thing you can lose. We decided." },
      { s: 'hanni', f: 'neutral', t: "And it's not a thing you owe us, either. That's the other half. That's the half people forget. You don't pay for it by coming home. It's not a loan. It's just yours." },
      { n: "She tied off the braid with one of the tiny elastics and put both hands on Solar's shoulders for a second, and squeezed, and let go." },
      { s: 'hanni', f: 'happy', t: "Okay. Done. You can talk now." },
      { choose: [
        { t: "Thank you, Hanni.", notes: 3, then: [
          { s: 'hanni', f: 'sad', t: "Don't thank me. You'll make me cry. I've been so good today." }
        ] },
        { t: "(Turn around and hug her.)", notes: 3, then: [
          { n: "She turned around on the cushion and hugged her, hard, and Hanni made a small surprised sound and then hugged back, harder, with the hairbrush still in one hand, digging into Solar's spine, and neither of them moved it." }
        ] },
        { t: "Who takes care of you? When you're the one doing all this?", notes: 3, then: [
          { s: 'hanni', f: 'surprised', t: "...Me?" },
          { s: 'hanni', f: 'neutral', t: "Hyein, sometimes. Loudly. And you, at home. You don't do it like me. You do it sideways. You bring me a drink at a party. You walk on the street side. You say *you okay* without looking at me so I don't have to make my face do anything." },
          { s: 'hanni', f: 'sad', t: "You did it here, too. Just now. Sideways. You didn't even know. That's how I know it's still you in there." }
        ] }
      ] },
      { s: 'hanni', f: 'neutral', t: "Do you want to know the trick? With the ends? So you can do it yourself. Wherever." },
      { choose: [
        { t: "Show me.", notes: 3, flag: { 'hanni-loops': true }, then: [
          { n: "Hanni took her hands, both of them, and put them on the end of the second braid, and moved her fingers for her, slowly, the tuck and the turn and the little loop that kept the end from scratching, three times, until Solar's hands did it without her, and then a fourth time to be sure." },
          { s: 'hanni', f: 'happy', t: "There. Now it's yours. Now nobody can take it, even me." }
        ] },
        { t: "No. Then you'd have to stop doing it.", notes: 3, then: [
          { s: 'hanni', f: 'surprised', t: "..." },
          { s: 'hanni', f: 'happy', t: "Okay. Okay. That's fair. I'll keep it. I'm keeping it hostage. You have to come back for it." }
        ] }
      ] },
      { n: "Walking down, Solar caught sight of herself in the dark glass of the stairwell door. Two braids, neat, with a tiny loop at the end of each where Hanni always tucked the ends under, so they wouldn't scratch. She knew the loops. Her fingers went up and found them like they'd been looking for them for months." }
    ] },

    { after: '1/12', title: '10: we come in peace', place: 'Iwatodai Dorm · 2F Hallway', time: 'Night', music: 'tender', scene: [
      { ifFlag: 'hanni-knock', then: [
        { n: "Midnight, and the knock came. Twice. Soft. The way it had come every night since October, at the exact minute the green came up in the windows, so Solar would know someone else was awake and scared in the hallway too. She'd started waiting for it. She'd started, if she was honest, not being able to sleep until she'd heard it." }
      ], else: [
        { n: "Midnight, and for the first time since October, Hanni's door at the end of the hall was shut, and the crack of lamplight under it was gone, and Solar lay in the green with her eyes open and her heart going and listened to the silence where the open door should have been, and understood, lying there, how much she'd come to lean on a light she'd never once asked for." },
        { n: "Then there was a knock. On her own door. Twice. Soft." }
      ] },
      { n: "She opened the door." },
      { n: "Hanni was standing in the hallway in the green light in her cream cardigan, and the whole dorm was silent around her, every other door shut, every other sleeper gone into a coffin in their bed, the clocks stopped, the hall light dead, and Hanni just standing there, warm, breathing, awake, with a mug of something in one hand and a plate in the other, a plate of fruit, cut small, an orange taken apart into segments with every white string pulled off." },
      { s: 'hanni', f: 'happy', t: "Sol, it's us. We come in peace!" },
      { n: "There was no *us.* Hyein was asleep in her coffin in her room down the hall. Hanni had said it anyway, out of habit, the plural, the way you'd set a third glass on a counter for a girl who wasn't up yet." },
      { s: 'hanni', f: 'neutral', t: "I brought snacks. Well. Fruit. Hyein's the snacks. I realized you went to the tower and didn't eat." },
      { n: "And Solar knew her." },
      { n: "Not the way she'd known the iced coffee, or the braids, or the pink mugs, or the candle, in pieces, one at a time, like coins found down the back of a sofa. All of her. All at once. A knock on a dark pink door in a house where every door was dark pink, and that soft voice through it, *Sol, it's us, we come in peace,* and Hyein beside her, *we brought snacks,* and Solar at her desk with her headphones half off and a game paused on the screen and her whole stupid week sitting on her chest, saying *you can come in* a little brighter than she felt, because it was them." },
      { n: "A girl with a plate of fruit she'd cut because she'd known, without being told, that Solar hadn't eaten. A girl who sat on the end of her bed with her knees pulled up and said one quiet thing that went straight in under every defense Solar owned, and then went back to the television like she hadn't. A girl who'd raised her hand in a room full of sorority sisters to say the thing nobody else would. A girl whose face couldn't lie, who had never once tried to, who had made her laugh in kitchens and walked her home on cold nights and stood in the middle of the party with a trash bag at two in the morning, waiting, because she knew Solar would come back to help." },
      { s: 'solar', f: 'neutral', t: "...Does it come with questions?" },
      { n: "Hanni's face did everything. Every single thing. All of it at once, out loud, in the green, and the mug shook in her hand." },
      { s: 'hanni', f: 'sad', t: "...No." },
      { s: 'hanni', f: 'sad', t: "No. It doesn't. That's what I said. That's exactly what I said, you said *does it come with questions* and I said *no* and Hyein said *that's guilty* and you ate a strawberry—" },
      { n: "She stopped. She couldn't finish. She stood in the doorway with her face crumpling and the tea slopping over her fingers and the orange segments sliding to one side of the plate, and Solar took the mug and the plate out of her hands and put them on the floor and pulled her in." },
      { choose: [
        { t: "Hanni. Hanni. I'm sorry I forgot you.", notes: 3, then: [
          { s: 'hanni', f: 'sad', t: "Don't. Don't be sorry. You didn't forget. You just put us somewhere for a while." },
          { s: 'hanni', f: 'happy', t: "We were right there. We were right there the whole time. We were in the iced coffee." }
        ] },
        { t: "(Just hold on.)", notes: 3, then: [
          { n: "She just held on. Hanni held on back, both arms, her face in Solar's shoulder, shaking, laughing, the cardigan soft and smelling of barley tea and the same cheap peach hand cream it had smelled of at home, every morning, in the kitchen, and Solar had never once noticed until it was here." }
        ] },
        { t: "Course, girlie.", notes: 3, then: [
          { n: "It made no sense as an answer. It was the only answer. Hanni made a sound into her shoulder that was mostly a laugh and partly something much older than a laugh, and said *that's mine, that's MY line,* and held on harder, and didn't let go to complain about it." }
        ] }
      ] },
      { n: "They sat on the floor of Solar's room with their backs against the bed and ate the orange segments off the plate one at a time and drank what was left of the tea out of the bottom of the mug, passing it back and forth, while the Dark Hour went on outside like a held breath." },
      { ifFlag: 'hanni-msg-ok', then: [
        { s: 'hanni', f: 'neutral', t: "I have to show you something. I wasn't going to. It happened on Tuesday and I've been carrying it around like a hot potato." },
        { phone: [{ from: 'solar', t: "@solar: im ok" }], contact: 'hanni, hyein 🩷' },
        { n: "The two words she'd typed into the dead chat in September. Gray for months. And under them, where it had said *not delivered* every night that Hanni had read it, small, in the same gray, it said *Delivered.*" },
        { s: 'hanni', f: 'sad', t: "I don't know where. I don't know who. I don't know if it's the same night there or a year. But somebody's phone got *im ok* from you. Somewhere. And it was true when you wrote it." }
      ] },
      { ifFlag: 'hanni-msg-joke', then: [
        { s: 'hanni', f: 'neutral', t: "I have to show you something. I wasn't going to. It happened on Tuesday and I've been carrying it around like a hot potato." },
        { phone: [{ from: 'solar', t: "@solar: omg what a joke" }], contact: 'hanni, hyein 🩷' },
        { n: "The four words she'd typed into the dead chat in September, under their twin. Gray for months. And under them, where it had said *not delivered* every night that Hanni had read it, small, in the same gray, it said *Delivered.*" },
        { s: 'hanni', f: 'happy', t: "Somewhere, someone just got *omg what a joke* from you with no context. At whatever time it is there. They're going to be SO confused. It's perfect. It's the most you thing that's ever happened." }
      ] },
      { ifFlag: 'hanni-msg-ily', then: [
        { s: 'hanni', f: 'neutral', t: "I have to show you something. I wasn't going to. It happened on Tuesday and I've been carrying it around like a hot potato." },
        { phone: [{ from: 'solar', t: "@solar: ily guys" }], contact: 'hanni, hyein 🩷' },
        { n: "The two words she'd typed into the dead chat in September, under the old ones from two in the morning. Gray for months. And under them, where it had said *not delivered* every night that Hanni had read it, small, in the same gray, it said *Delivered.*" },
        { s: 'hanni', f: 'sad', t: "I don't know where it went. I don't care. Somebody got it. Somebody at home got *ily guys* from you, from here, from now. I keep thinking of it landing. On a nightstand. In the dark." }
      ] },
      { ifFlag: 'hanni-tag-question', then: [
        { n: "Before she went, Hanni took the pale yellow notebook out of her cardigan pocket, where apparently she'd been carrying it, and opened it to the inside cover, to the name tag from the mixer, SOLAR (?), with *we're finding out* underneath in her own small round hand, and held out the pen." },
        { s: 'hanni', f: 'neutral', t: "It's not mine to cross out. It's yours. If you want." },
        { n: "Solar didn't cross it out. She wrote under it, in her own hand, which was spikier than Hanni's and slanted like it was in a hurry, *found out.* Hanni read it and closed the notebook and held it against her chest with both arms." }
      ] },
      { ifFlag: 'route-R', then: [
        { s: 'hanni', f: 'happy', t: "You're coming home. I know. Hyein told me before you could, she can't keep anything, she's worse than me." },
        { s: 'hanni', f: 'neutral', t: "When we get there, I'm going to knock. Twice. On the dark pink door. Every night for a week, so you know where you are when you wake up. And then I'm going to stop, because you'll know." }
      ], else: [
        { ifFlag: 'route-stay', then: [
          { s: 'hanni', f: 'sad', t: "You're staying. I know. You don't have to say it. It's on your face. You've got a face now, did you know? Here. You've got a face that does things." },
          { s: 'hanni', f: 'neutral', t: "That's the best thing anyone's ever done with my rule. I'm so mad. I'm so proud of you. I'm going to cry in the elevator on the way home, and it's fine." }
        ], else: [
          { ifFlag: 'route-true', then: [
            { s: 'hanni', f: 'neutral', t: "You've got that look again. Like you're going to do something nobody's ever done. I don't know what it is. I'm not going to ask. That's the rule." },
            { s: 'hanni', f: 'happy', t: "But whatever it is, I'll knock. Wherever I am. Twice. If you hear it, it's me." }
          ], else: [
            { s: 'hanni', f: 'sad', t: "You're going somewhere that isn't ours. I know. I know from Hyein's shoulders, they've been down for a week." },
            { s: 'hanni', f: 'neutral', t: "That's okay. That's yours. I said you'd decide, and you decided. I'm going to knock anyway, wherever I am. Twice. If you hear it, it's me." }
          ] }
        ] }
      ] },
      { s: 'hanni', f: 'neutral', t: "Whatever you pick. Whatever happens. I'll knock. Twice. Somewhere." },
      { s: 'hanni', f: 'happy', t: "That's the plan. It's not a very good plan. It's mine." }
    ] }
  ],

  afterMax: [
    { title: 'good things', place: 'Paulownia Mall · Chagall Café', time: 'After School', scene: [
      { n: "The window table. Two iced coffees, one straw still in its paper. The receipt with every good thing Solar had told her since September was so full now that Hanni had started on a second one, very small, in the margins, and had stapled them together in the corner with a stapler she'd borrowed from the café owner, who had, apparently, started saving her the receipts that printed crooked so she'd have more room." },
      { s: 'hanni', f: 'happy', t: "Okay. One good thing. Then mine. Go." },
      { choose: [
        { t: "You're here.", notes: 3, then: [
          { s: 'hanni', f: 'flustered', t: "That's cheating. You can't use me. ...I'm writing it down." }
        ] },
        { t: "The pink mugs. I remembered them.", notes: 3, then: [
          { s: 'hanni', f: 'happy', t: "That's my favorite one. That's going at the top. Mine is, Hyein said thank you to Mitsuru without being told. Character development!" }
        ] },
        { t: "The owner saves you the crooked receipts.", notes: 3, then: [
          { s: 'hanni', f: 'surprised', t: "You noticed that?" },
          { s: 'hanni', f: 'happy', t: "That's a good one. That's such a good one. That's a good thing about someone else. You never used to give me those. You used to only give me ones that weren't about anybody." }
        ] }
      ] },
      { n: "She wrote it down, very small, in the last clean corner of the second receipt, and looked at it, and then turned the whole stapled bundle over and looked at the back, which was full too, and laughed at herself, and asked the girl at the counter, in her careful practiced Japanese, whether there was any chance of a third." }
    ] },
    { title: 'the knock', place: "Iwatodai Dorm · Solar's Room", time: 'Night', scene: [
      { ifFlag: 'hanni-knock', then: [
        { n: "Midnight. Two knocks. She opened the door before the second one landed." },
        { s: 'hanni', f: 'surprised', t: "You were waiting!" },
        { s: 'solar', f: 'neutral', t: "I'm always waiting." }
      ], else: [
        { n: "Midnight. The crack of lamplight under Hanni's door at the end of the hall, the way it had been every night since October. Solar went and knocked on it, twice, before she'd decided to, and it opened before the second one landed." },
        { s: 'hanni', f: 'surprised', t: "You knocked! You've never knocked. You just come and sit on the bed like a ghost." },
        { s: 'solar', f: 'neutral', t: "I learned it from somebody." }
      ] },
      { choose: [
        { t: "(Make room on the bed.)", notes: 3, then: [
          { n: "They sat cross-legged on the bed under one blanket and played the game where you guess what the people on the street below are going home to, except there was nobody on the street, because it was the Dark Hour, so they made them up, and Hanni's were all getting married, and Solar's were all going home to a cat that hated them, and by the time the green went out of the window they had married off half of Iwatodai and given the other half a cat." }
        ] },
        { t: "(Knock twice on the wall for Hyein.)", notes: 3, then: [
          { n: "Two knocks came back through the wall, then a third, very loud, then Hyein's voice, muffled, asking whether this was a party and whether it was a party without her, and then the door opened, and it wasn't." }
        ] }
      ] }
    ] },
    { title: 'delivered', place: 'Paulownia Mall · Chagall Café', time: 'After School', scene: [
      { n: "Hanni had her phone from home out on the table, face up, which she never did in public, and was looking at the chat the way other people look at a fire in a fireplace, and when Solar sat down she didn't put it away." },
      { ifFlag: ['hanni-msg-ok'], then: [
        { s: 'hanni', f: 'neutral', t: "It still says *Delivered.* Under yours. I check every morning in case it changes back. It never changes back." }
      ], else: [
        { ifFlag: ['hanni-msg-joke'], then: [
          { s: 'hanni', f: 'happy', t: "It still says *Delivered.* Under *omg what a joke.* I keep imagining Hyein at home, the other Hyein, the one who's still on the bench, reading it and going WHAT JOKE. WHAT JOKE, SOLAR." }
        ], else: [
          { ifFlag: ['hanni-msg-ily'], then: [
            { s: 'hanni', f: 'neutral', t: "It still says *Delivered.* Under *ily guys.* I don't show Hyein. She'd cry in public. She'd cry in the mall. I'm saving her from herself." }
          ], else: [
            { s: 'hanni', f: 'neutral', t: "Nothing goes. It's all still gray. *Not delivered, not delivered, not delivered.* I read it anyway. Every night. Like a book I already know the end of, except I don't." },
            { s: 'hanni', f: 'happy', t: "You still haven't written anything in it. That's okay. It keeps. I told you it keeps." }
          ] }
        ] }
      ] },
      { choose: [
        { t: "(Type something new into it.)", notes: 3, then: [
          { n: "Hanni slid the phone across without a word. Solar thought about it for a long time, long enough that the ice in her coffee settled with a small clink, and then typed, lowercase, no punctuation, *ur so nosy,* and slid it back." },
          { phone: [{ from: 'solar', t: "@solar: ur so nosy" }], contact: 'hanni, hyein 🩷' },
          { s: 'hanni', f: 'happy', t: "I AM so nosy. I'm the nosiest. That's going in the archive. That's going on the receipt." }
        ] },
        { t: "What will you do with it? When you're home?", notes: 3, then: [
          { s: 'hanni', f: 'neutral', t: "Nothing. Keep it. Scroll up to it some nights. It's like a pressed flower. You don't do anything with a pressed flower. You just know it's there, flat, in the book, being from a day." }
        ] }
      ] }
    ] },
    { title: 'ask her', place: 'Paulownia Mall · Chagall Café', time: 'After School', scene: [
      { ifFlag: 'hanni-ask-her', then: [
        { n: "Hanni was sitting very upright at the window table with both hands around her cup and the expression of a girl who had done something brave and was still vibrating from it." },
        { s: 'hanni', f: 'flustered', t: "I did it. I did *ask her.* Someone asked me at breakfast what kind of flowers you liked, and I said *ask her,* and I didn't even say sorry after. I wanted to. I sat on my hands." },
        { s: 'hanni', f: 'happy', t: "It was so scary. It was the scariest thing I've done here, and I stood in front of a party monster." },
        { choose: [
          { t: "Who was it?", notes: 1, then: [
            { s: 'hanni', f: 'serious', t: "Nope! Ask *them.* See? I'm doing it again. I'm so good at this now." }
          ] },
          { t: "I'm proud of you.", notes: 3, then: [
            { s: 'hanni', f: 'sad', t: "Don't. I'll cry. I've been so good." },
            { s: 'hanni', f: 'happy', t: "...Okay, I'm crying a little. It's the good kind. It's the proud kind. It's allowed." }
          ] },
          { t: "What kind of flowers do I like?", notes: 3, then: [
            { s: 'hanni', f: 'happy', t: "Ask *you!*" },
            { n: "Solar thought about it. Hanni watched her think, with her chin on her fist and her eyes very bright, like this was the best television she'd ever seen." },
            { s: 'solar', f: 'neutral', t: "...I don't know. I don't think I've ever picked." },
            { s: 'hanni', f: 'neutral', t: "Then that's the answer. *She hasn't picked yet.* That's a whole answer. Nobody gets to pick for you." }
          ] }
        ] }
      ], else: [
        { n: "Hanni had a list. A short one, on a napkin, in her round hand, and she pushed it across the table with the expression of somebody turning themselves in." },
        { s: 'hanni', f: 'flustered', t: "These are all the things I've told people about you since we got here. All of them. Little things. I wrote them down so you'd know. So it's yours again." },
        { n: "It was small things. That she liked her straw in the paper. That she ran in the mornings. That she didn't drink coffee after dark. That she used to sing in the shower and stopped if she thought anyone could hear. Solar read it twice and handed it back." },
        { choose: [
          { t: "(Tear up the napkin.)", notes: 3, then: [
            { s: 'hanni', f: 'surprised', t: "Sol!" },
            { s: 'solar', f: 'neutral', t: "It's mine. I can do what I want with it. You said." },
            { s: 'hanni', f: 'happy', t: "...I did say. Okay. Okay! Confetti. It's confetti now. I'm free." }
          ] },
          { t: "I sing in the shower?", notes: 3, then: [
            { s: 'hanni', f: 'flustered', t: "Oh no. Oh no, I did it again. I just handed you one. That's on the list now too. Give me the napkin." }
          ] }
        ] }
      ] }
    ] },
    { title: 'loops', place: 'Paulownia Mall · Chagall Café', time: 'After School', scene: [
      { ifFlag: 'hanni-loops', then: [
        { n: "Hanni had washed her hair and come out without drying it properly, which Hyein would have called a crime against the cold, and it hung down her back in a dark damp sheet, and when she sat down she turned round in the chair and offered Solar the back of her head without a word, and a pack of tiny elastics over her shoulder." },
        { s: 'hanni', f: 'happy', t: "Your turn. I want to see if it stuck." },
        { n: "Solar's hands knew. That was the strange part, the part she'd stopped being surprised by and never stopped feeling. Three strands, over and under, the tension right, and at the end the tuck and the turn and the little loop, without her thinking about it at all, the way Hanni had moved her fingers for her on the roof." },
        { choose: [
          { t: "(Do both braids. Take your time.)", notes: 3, then: [
            { n: "She took her time. The café went on around them, cups and steam and a girl at the counter pretending not to watch. When she was done Hanni reached back and found the loops with her fingertips, one, then the other, and went very still, and then said, to the window, that nobody had ever done her hair before. Not once. Not since her mom, when she was little. She'd always been the one doing." }
          ] },
          { t: "(Do one braid. Make her wait for the other.)", notes: 2, then: [
            { s: 'hanni', f: 'surprised', t: "Hey! You can't leave me lopsided!" },
            { s: 'solar', f: 'neutral', t: "I'm keeping it hostage. You have to come back for it." },
            { s: 'hanni', f: 'happy', t: "That's MY bit. You stole my bit. I love you. Do the other one." }
          ] }
        ] }
      ], else: [
        { n: "Hanni was braiding her own hair at the window table without a mirror, quick and sure and not looking, talking the whole time about a pigeon that had walked into the café and been escorted out by the owner like a drunk, and when she got to the end she did the loop, the tuck and the turn, so fast it was like a magic trick." },
        { choose: [
          { t: "Show me the loop. For real this time.", notes: 3, then: [
            { s: 'hanni', f: 'happy', t: "Finally! I've been holding it hostage for weeks. Give me your hands." },
            { n: "She did it slowly this time, Solar's fingers under hers, three times, then a fourth, and when Solar did it alone it came out a little crooked, and Hanni declared it perfect, and refused to fix it, and wore it crooked all afternoon." }
          ] },
          { t: "(Watch her hands. Don't ask.)", notes: 2, then: [
            { n: "She watched. Hanni noticed her watching and slowed down, without a word, and did the last loop at half speed, exaggerated, like a teacher at the front of a class, and then looked up and grinned and didn't say anything at all about it." }
          ] }
        ] }
      ] }
    ] },
    { title: 'snow day practice', place: 'Iwatodai Dorm · Kitchen', time: 'Evening', scene: [
      { ifBefore: '1/27', then: [
        { n: "There was batter on the ceiling. Not much. A single pale freckle of it above the stove, where Junpei had tried to flip one by tossing it, which Hanni had specifically asked him not to do, and now Hanni was standing on a chair with a damp cloth looking up at it with an expression of deep personal betrayal." },
        { s: 'hanni', f: 'serious', t: "These are PRACTICE pancakes. For the first snow. The real ones have to be perfect. And SOMEONE is treating the practice pancakes like a circus." },
        { s: 'junpei', f: 'flustered', t: "It was one time!" }
      ], else: [
        { n: "There was batter on the ceiling. Not much. A single pale freckle of it above the stove, a souvenir from the snow-day pancakes, which nobody had been able to reach since, and Hanni was standing on a chair with a damp cloth looking up at it with the expression of a woman settling an old score." },
        { s: 'hanni', f: 'serious', t: "It's been bothering me for DAYS. Every time I make tea. It's looking at me." }
      ] },
      { n: "On the counter, on a plate, there was a small hill of pancakes, and beside the plate a little dish of chocolate chips, separate, and Solar looked at the dish and understood it before she understood why." },
      { s: 'hanni', f: 'neutral', t: "That's yours. The chips on the side. You pick them out of the pancakes and eat them separately anyway, so I stopped putting them in. At home. Like, in October. You never noticed. You just started eating them off the dish." },
      { choose: [
        { t: "(Eat the chips off the dish. Then the pancake.)", notes: 3, then: [
          { s: 'hanni', f: 'happy', t: "Like a psychopath! You're the same. You're exactly the same." }
        ] },
        { t: "(Put the chips on the pancake. On purpose.)", notes: 3, then: [
          { s: 'hanni', f: 'surprised', t: "...You're putting them ON?" },
          { s: 'solar', f: 'neutral', t: "I'm trying something new. Somebody told me I'm allowed to pick." },
          { s: 'hanni', f: 'happy', t: "Oh my gosh. Oh, I hate it. I love it. I'm writing it down." }
        ] },
        { t: "(Get on a chair and help with the ceiling.)", notes: 2, then: [
          { n: "She got on the other chair. Between them, with a cloth and a wooden spoon and a great deal of instruction from Junpei, who did not help, they got it, and Hanni held up the cloth like a trophy, and nearly fell, and Solar caught her by the cardigan, and they both had to sit on the floor for a while." }
        ] }
      ] }
    ] },
    { title: 'the far bench', place: 'Iwatodai Station · Platform', time: 'Evening', scene: [
      { n: "Hanni wanted to see the trains again. The platform at Iwatodai in the cold, the salarymen in their gray coats, the trains coming in lit up and going out lit up, and Hanni with her arm through Solar's, narrating the lives of strangers in a low delighted voice, like a nature documentary." },
      { n: "The last bench, past the vending machines, was empty. Solar looked at it without meaning to. So did Hanni. Neither of them said anything." },
      { n: "On the way out, Hanni stopped at the vending machine and bought a can of something warm, sweet milk tea, and walked all the way down to the end of the platform with it, and set it on the empty bench, upright, in the corner, where someone sitting there would find it with their hand without having to look." },
      { s: 'hanni', f: 'neutral', t: "For the girl who keeps missing her train. In case she comes back and she's cold." },
      { choose: [
        { t: "Why?", notes: 2, then: [
          { s: 'hanni', f: 'neutral', t: "I don't know. I really don't. My face doesn't even know. It just felt like the kind of thing you'd do, if you were the one who noticed." },
          { s: 'hanni', f: 'sad', t: "...She looked so tired, Sol. Every time. She looked like someone who's been holding something very heavy very quietly so nobody would have to." }
        ] },
        { t: "(Don't ask. Walk her back up the platform.)", notes: 3, then: [
          { n: "Solar didn't ask. She took Hanni's arm again and walked her back up the platform, and somewhere behind them a train came in and went out, and when Solar looked back from the stairs, just once, the can was still there in the corner of the bench, and the bench was still empty, and something under her ribs went tight and cold and would not explain itself." }
        ] }
      ] }
    ] },
    { title: 'handover', place: 'Iwatodai Dorm · Lounge', time: 'Evening', scene: [
      { n: "Hanni had the pale yellow notebook open on the lounge table and was writing in it with the focus of a girl preparing for an exam, and when Solar sat down next to her she turned it so Solar could see." },
      { n: "It was the dorm. Everyone in it. A page each, in her round careful hand. *Junpei: everything (really). Allergic to nothing. Will eat anything left on a counter, so don't leave things on counters.* *Fuuka: horror films, through her fingers. Likes it when you ask what she's working on. Ask twice, she says no the first time.* *Ken: lose to him at cards, but not obviously.* *Koromaru: YES.* *Mitsuru: raise your hand.*" },
      { s: 'hanni', f: 'neutral', t: "It's a handover. When I was made Social Chair, the girl before me gave me a whole binder. Who likes what. Who can't be in a room with who. Where the good tape is. I'm doing one for here." },
      { ifFlag: 'route-stay', then: [
        { s: 'hanni', f: 'sad', t: "It's for you. Obviously. You're staying. Someone has to be in charge of fun when I'm gone, and it's going to be you, and you're going to hate it, and you're going to be so good at it." },
        { s: 'hanni', f: 'happy', t: "The last page is the mixer. All the steps. Name tags are non-negotiable." }
      ], else: [
        { s: 'hanni', f: 'neutral', t: "It's for Fuuka, I think. Or Yukari. Whoever's still here after. Somebody has to know that Akihiko-senpai only eats at parties if there's something with chicken in it." },
        { s: 'hanni', f: 'happy', t: "They'll need it. They'll miss us. They'll be so quiet. I'm leaving them instructions for being loud." }
      ] },
      { n: "There was a page for Solar, too, at the very back. Hanni didn't turn to it. Solar didn't ask to see it. She could see, from the edge, that it was full, both sides, all the way to the bottom, and that whatever was on it had been written in more than one sitting, in more than one pen." },
      { choose: [
        { t: "(Add a page. For Hanni.)", notes: 3, then: [
          { n: "She took the pen and turned to a clean page and wrote, at the top, *Hanni Pham,* and under it, in her spiky slanting hand, *Iced coffee. Fruit, cut small. Golden Girls. Raises her hand. Will stand in front of anything. Bring her a drink halfway through, she forgets to have one.* Hanni read it upside down as she wrote it and didn't say anything at all, which for Hanni was the loudest thing in the world." }
        ] },
        { t: "Who did the binder for you? Before?", notes: 2, then: [
          { s: 'hanni', f: 'neutral', t: "A senior. She graduated. She wrote *you're going to be so good at this* on the last page and I cried in the stairwell." },
          { s: 'hanni', f: 'happy', t: "That's what this is, really. It's a page that says *you're going to be so good at this.* To a whole building." }
        ] }
      ] }
    ] }
  ]
});
