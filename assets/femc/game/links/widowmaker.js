/* Widowmaker · XIII Death. Revamp social link data (femc-game.html). Format: link fields in assets/femc/game/core.js, scene lines in scene.js.
   Visitor (Overwatch), arrives on the 10/4 moon, alone. Friendship only. The ending she runs from: Talon, and the chair.
   Rank 1 branches on whether Solar already met her with Kiriko (Kiriko rank 8). In another life a boy who mains her queues
   with the girl who mains Kiriko; rank 6 is the "princesse" slip, which lands harder if Solar has met Haechan (ifMet).
   Rank 8 branches on Mercy (who knew Amélie). Rank 9 has Kiriko in it. She gives Solar a black pointe-shoe ribbon at MAX
   (deliberately not pink; pink ribbons belong to Wren and the true ending).
   Rank 1 sits after 10/4 and stays vague about what happened on the bridge.
   Cast-only speakers: none. afterMax: scenes for after rank 10 (engine support pending). */
(window.FEMC_GAME_LINKS ||= []).push({
  id: 'widowmaker', name: 'Widowmaker', short: 'Widowmaker', arcana: 'Death', numeral: 'XIII', from: 'Overwatch',
  kind: 'visitor',
  romance: null,
  starts: '10/6',
  home: { area: 'portisland', spot: 'Moonlight Bridge', slot: 'evening', days: [0, 2, 4, 6],
          hint: 'Evenings on Sundays, Tuesdays, Thursdays and Saturdays, somewhere up in the cables of Moonlight Bridge.' },
  approach: "High up in the cables of Moonlight Bridge there's a shape that wasn't there last week. It's watching you.",
  cast: {},
  invite: {
    ask: ["Come to the bridge.", "Are you free.", "The city is quiet tonight. Come.", "I am bored. Come and fix it.", "I am on the north tower. You know the way.", "Bring coffee. Black."],
    ok: ["Bien.", "Good. Do not be late.", "I will see you before you see me."],
    no: ["Hm. Another night, then.", "Fine.", "No matter. I will be here. I am always here."]
  },
  hangouts: [
    [
      { n: "Solar brought coffee, black, two cans from the vending machine at the bottom of the bridge, which she'd decided months ago Widowmaker would like, purely on the evidence of her personality. Widowmaker came down the cable to take one, upside down, hanging by her boots, and took the can, and went back up, and didn't say thank you, and drank it." },
      { s: 'widowmaker', f: 'neutral', t: "It is terrible. Bring this one again." },
      { choose: [
        { t: "(Sit on the walkway and drink yours.)", notes: 3, then: [
          { n: "Solar sat on the walkway with her back against the rail and drank hers, and forty meters above her Widowmaker drank hers on a cable, and neither of them said anything for twenty minutes, and when Solar got up to go a voice came down out of the dark, very dry, and said, \"Same time,\" as if it were an order and a question at once." }
        ] },
        { t: "You could say thank you.", notes: 2, then: [
          { s: 'widowmaker', f: 'neutral', t: "I could. I drank it. That is thank you, in my language." }
        ] }
      ] }
    ],
    [
      { n: "The wind was very strong tonight. It came down the bay in long cold pushes that made the whole bridge hum like a struck string, and Widowmaker was standing on the very top of the north tower with her arms out, letting it push her, leaning into it, the way a child leans into a wave." },
      { s: 'widowmaker', f: 'happy', t: "Petite. Come up. Feel this. There is always wind up here. It is the only thing that has ever pushed me that I did not mind." },
      { choose: [
        { t: "(Climb up and lean into it.)", notes: 3, then: [
          { n: "Solar climbed. It took a long time and her hands hurt. At the top, holding on to a maintenance rail with both fists, she leaned into the wind, and it held her up, almost, the way water holds you, and Widowmaker watched her do it with an expression Solar had never seen on her, like someone watching a person they liked try a food they loved." }
        ] },
        { t: "I'll feel it from down here.", notes: 2, then: [
          { s: 'widowmaker', f: 'neutral', t: "Coward. ...Sensible. Both. Stay there. I will tell you what it feels like." }
        ] }
      ] }
    ]
  ],
  ranks: [
    { after: '10/6', title: '1: the bridge', place: 'Moonlight Bridge', time: 'Evening', scene: [
      { music: 'night' },
      { n: "After the night on the bridge, Solar couldn't stay in the dorm. Nobody was saying anything in the dorm. Everybody was being careful with each other in a way that made the air feel thin. So she walked, until her legs stopped asking where, and they brought her back here, to Moonlight Bridge, to the walkway on the north side, in the wind, two nights after." },
      { n: "She stood at the rail and looked at the black water and didn't think about anything, very hard." },
      { ifRank: { kiriko: 8 }, then: [
        { n: "The woman was up there again. The one from the night with Kiriko. Standing on a cable forty meters above the road as if it were a pavement, rifle slung, black tail of hair in the wind, perfectly still, watching the city." },
        { s: 'widowmaker', f: 'neutral', t: "The fox girl's friend. Alone, tonight." }
      ], else: [
        { n: "There was a woman standing on one of the cables forty meters above the road as if it were a pavement. Rifle slung across her back. A black tail of hair moving in the wind. Skin the cold even blue of a vein under a wrist, all over, which under the bridge lights looked painted, and wasn't." },
        { s: 'widowmaker', f: 'neutral', t: "A girl. Alone. On a bridge. At night. Hm. The kind of thing I would shoot, in a story." }
      ] },
      { n: "She dropped. There was no other word for it. She dropped forty meters on a line Solar didn't see her fire and landed on the rail beside her, crouched, perfectly balanced, close enough to touch, and looked at Solar's face for a long, cool, clinical moment, the way a doctor looks at an X-ray." },
      { s: 'widowmaker', f: 'neutral', t: "You have been crying. Your face is very loud about it." },
      { choose: [
        { t: "Something happened. Here. Two nights ago.", notes: 3, then: [
          { s: 'widowmaker', f: 'neutral', t: "Ah. I know. I was here. I arrived on it. I watched you all on the bridge, in the green, from up there. I did not know any of you. I could not do anything. I watched anyway." },
          { s: 'widowmaker', f: 'neutral', t: "Then you are allowed to be loud. Here. Nobody will hear you up here except me. And I will not tell." }
        ] },
        { t: "It's the wind.", notes: 2, then: [
          { s: 'widowmaker', f: 'neutral', t: "Of course. The wind. It is very sad tonight, the wind." }
        ] },
        { t: "Who are you?", notes: 1, then: [
          { s: 'widowmaker', f: 'neutral', t: "That is a long question. I will give you the short answer and you will be satisfied with it." }
        ] }
      ] },
      { s: 'widowmaker', f: 'neutral', t: "Widowmaker. That is what they call me. You may call me that." },
      { register: 'widowmaker' },
      { s: 'widowmaker', f: 'neutral', t: "I came through on the night of the moon. I was on a rooftop, in my world, waiting for a target. It was a very long wait. I was very tired of it. And then everything went green and my target was a coffin, and so was everyone else." },
      { s: 'widowmaker', f: 'neutral', t: "A girl came along the walkway down there. In a coat far too big for her. The only other thing awake. She looked straight up at me, which nobody does, and said, \"High up. Nobody will look for you there.\" And then she said she was sorry." },
      { s: 'widowmaker', f: 'serious', t: "I have been looked for my whole life, petite. By the people who made me. By the people who would like to unmake me. I put my scope on her. Habit. I could not find her in it. She was there and the crosshairs would not sit on her. And then she was not there at all." },
      { ifMet: ['wren'], then: [
        { n: "Solar thought of Wren, and the way she always seemed to be at the edge of the frame. The way you always found her a second after you'd looked away. She put the thought down very carefully, like something that might go off, and left it there." }
      ] },
      { n: "She didn't say anything comforting after that, because she didn't seem to know how, and she didn't leave, either. She sat on the rail beside Solar in the wind, a few feet away, perfectly balanced over forty meters of nothing, and watched the city with her, for an hour, and didn't once ask what had happened, or who, or why, and it was the best thing anyone had done for Solar in two days." },
      { choose: [
        { t: "Thank you.", notes: 2, then: [
          { s: 'widowmaker', f: 'neutral', t: "For what? I did nothing. I sat." },
          { s: 'solar', f: 'neutral', t: "That's what I'm thanking you for." },
          { s: 'widowmaker', f: 'surprised', t: "...Hm." }
        ] },
        { t: "(Stay until the cold gets into your hands.)", notes: 3, then: [
          { n: "Solar stayed until the cold got into her hands and her face stopped being loud. When she finally pushed off the rail, Widowmaker was already gone, back up into the cables, so fast Solar hadn't heard her go. A voice came down out of the dark." },
          { s: 'widowmaker', f: 'neutral', t: "Come back, if you need a place to be loud. The bridge does not mind. Neither do I." }
        ] }
      ] }
    ] },

    { after: '10/18', title: '2: one shot', place: 'Moonlight Bridge', time: 'Evening', scene: [
      { music: 'night' },
      { n: "Solar brought coffee, black, which she had decided Widowmaker would like, purely on the evidence of her personality. Widowmaker came down the cable, took it, smelled it, drank it, and said it was terrible, and drank the rest." },
      { s: 'widowmaker', f: 'neutral', t: "Come up. I will show you something." },
      { n: "The cables went up and up. Widowmaker climbed them like stairs, one hand barely touching. Solar climbed them like a person, slowly, with both hands, her heart in her teeth, and at the top, on a maintenance platform at the summit of the north tower, the whole city lay out below them like a map somebody had spilled lights on." },
      { s: 'widowmaker', f: 'neutral', t: "Look through the scope. Do not touch the trigger. I will know." },
      { n: "Through the scope the city came close enough to touch. A couple arguing in a kitchen window, a mile away. A man asleep on a train, his mouth open. A girl studying at a desk, chewing a pen. A dog in a yard, looking up at nothing. Every one of them sharp and small and completely unaware of being seen." },
      { s: 'widowmaker', f: 'neutral', t: "This is what I do. I see everything. Every person. Every heartbeat. I watch their lives from very far away. I know when they will lift a cup before they lift it." },
      { s: 'widowmaker', f: 'serious', t: "It is not the same as being in them. You understand? I can see everything. I am in none of it." },
      { choose: [
        { t: "That sounds lonely.", notes: 3, then: [
          { s: 'widowmaker', f: 'neutral', t: "Loneliness is a feeling. I do not have those." },
          { s: 'widowmaker', f: 'neutral', t: "...That is what I am told." }
        ] },
        { t: "You could come down sometime. Into it.", notes: 2, then: [
          { s: 'widowmaker', f: 'neutral', t: "Down there? With the people? ...We will see. They are very loud. They smell of fried food." }
        ] },
        { t: "(Find the dorm in the scope.)", notes: 2, then: [
          { n: "Solar found the dorm. The lounge window, lit. Junpei on the couch with his feet on the table, asleep. Yukari passing behind him with a mug, stopping, putting a blanket over his legs, walking on. Solar watched it with her heart doing something complicated." },
          { s: 'widowmaker', f: 'neutral', t: "Ah. Yours. I watched that window for an hour on Tuesday. The archer does that every night. The blanket. He never knows." }
        ] }
      ] },
      { s: 'widowmaker', f: 'neutral', t: "One shot. One kill. That is what I say. Did you know that? It is printed on things, in other worlds. Kiriko told me. On shirts." },
      { s: 'widowmaker', f: 'neutral', t: "But tonight. No shots. Just you. Looking. That is new." },
      { choose: [
        { t: "I like it up here.", notes: 3, then: [
          { s: 'widowmaker', f: 'neutral', t: "Of course you do. You are a watcher too. I saw it the first night. You count the doors." },
          { s: 'widowmaker', f: 'neutral', t: "The difference is you go down afterward. And sit in the room with them. I have never learned that part." }
        ] },
        { t: "Do you ever watch the dorm?", notes: 2, then: [
          { s: 'widowmaker', f: 'neutral', t: "Every night, petite. It is the loudest window in the city. Somebody is always awake in it." }
        ] },
        { t: "It's cold.", notes: 1, then: [
          { s: 'widowmaker', f: 'neutral', t: "Is it? I would not know. Sit closer to the vent. It breathes out warm air. I have watched pigeons choose it for a month." }
        ] }
      ] },
      { n: "They stayed up there until the coffee was gone and Solar's hands were numb on the cold metal. Widowmaker didn't take the scope back once. She lay on her stomach on the platform beside Solar with her chin on her folded arms and watched Solar watch the city, and once, very quietly, when Solar laughed at a cat on a balcony, she made a sound that might, in someone else, have been a laugh too." }
    ] },

    { after: '10/31', title: '3: the dancer', place: 'Moonlight Bridge', time: 'Evening', scene: [
      { music: 'tender' },
      { n: "Halloween, and Iwatodai was full of kids in costumes, and Solar came up the bridge in the dark with a paper bag of sweets she'd been given at the station by a woman dressed as a pumpkin, and found Widowmaker on the rail, not standing, not crouched. Moving." },
      { n: "On the rail. Forty meters above the black water, on a steel bar no wider than a hand, in the wind. A turn on one foot, slow, the other leg rising behind her, arms coming up over her head in a long curve like water going over a stone. And down, and turning, and up again. Perfectly. In the dark. For no one." },
      { s: 'widowmaker', f: 'serious', t: "Don't stare. It is rude." },
      { choose: [
        { t: "You're a dancer.", notes: 3, then: [
          { s: 'widowmaker', f: 'neutral', t: "...I was. A very long time ago. The Opéra de Paris. I was very good." },
          { s: 'widowmaker', f: 'neutral', t: "My body remembers. Everything else they took, but not that. They tried. You cannot reach it. It is not in the head. It is in the feet." }
        ] },
        { t: "(Clap.)", notes: 3, then: [
          { n: "Solar clapped, alone, on the bridge, in the wind. Widowmaker stopped mid-turn, on one foot, and looked down at her, and stayed like that, balanced, for a long moment." },
          { s: 'widowmaker', f: 'surprised', t: "...No one has clapped for me in a very long time. Merci." }
        ] },
        { t: "Why did you stop?", notes: 2, then: [
          { s: 'widowmaker', f: 'serious', t: "I did not stop. I was stopped. There is a difference, petite." }
        ] }
      ] },
      { n: "Solar knew about the body remembering. It was the only kind of remembering she had. Hands that knew a needle. A keyboard. A hairpin. Feet that knew where to stand. She'd thought, until tonight, that it was something wrong with her. She stood on the bridge and watched a woman who couldn't remember being a person dance like one, perfectly, and thought it might be the most stubborn thing a body could do." },
      { s: 'widowmaker', f: 'neutral', t: "Kiriko told me something. In the other world. People dress up as me. On this night. With blue paint. And they post the pictures. Thousands." },
      { s: 'widowmaker', f: 'neutral', t: "I find this very strange. I am a weapon. Who dresses as a weapon? It is like dressing as a gun." },
      { choose: [
        { t: "Maybe they're dressing up as the dancer.", notes: 3, then: [
          { s: 'widowmaker', f: 'surprised', t: "..." },
          { s: 'widowmaker', f: 'neutral', t: "...No. They are dressing up as the weapon. They want to be dangerous and beautiful and nobody can touch them." },
          { s: 'widowmaker', f: 'sad', t: "They should be careful what they wish for. But I take your point. It is a kind point. You are often kind. It is a flaw." }
        ] },
        { t: "You'd hate it.", notes: 2, then: [
          { s: 'widowmaker', f: 'happy', t: "I would despise it. I would look at every picture. Every one. And correct the posture." }
        ] }
      ] },
      { n: "She danced again, after, a little, on the rail, while Solar ate sweets from the paper bag and watched, and the wind took the wrappers away over the water, and it was, Solar thought later, the strangest and most beautiful Halloween of any life she might have had." }
    ] },

    { after: '11/9', title: '4: amélie', place: 'Moonlight Bridge', time: 'Evening', scene: [
      { music: 'tender' },
      { n: "Cold now. November. Widowmaker didn't feel it, she said. She didn't feel much of anything. She said it often, as if she were reminding herself, and sat on the rail in the wind in a suit that left her arms bare, and didn't shiver, and Solar sat beside her in a coat and two scarves and shivered for both of them." },
      { s: 'widowmaker', f: 'neutral', t: "My name was Amélie. Amélie Lacroix. You may know that. But you may not use it." },
      { s: 'widowmaker', f: 'neutral', t: "I had a husband. Gérard. I am told that I killed him." },
      { s: 'widowmaker', f: 'neutral', t: "I am told it, because I do not remember feeling anything about it. They took that out first. Then they sent me home to him. Then they took him." },
      { n: "She said it in the same voice she said everything, flat and cool and precise, like reading a report about weather in another country. And her hands, on the rail, were perfectly still. That was the thing Solar noticed. Not the voice. The hands. Nobody's hands were that still unless they were holding very tightly onto something you couldn't see." },
      { choose: [
        { t: "That wasn't you. Not really.", notes: 2, then: [
          { s: 'widowmaker', f: 'serious', t: "It was my hands. My rifle. My shot. Whose would it be?" },
          { s: 'solar', f: 'neutral', t: "Theirs. The people who took the rest out." },
          { s: 'widowmaker', f: 'neutral', t: "...That is a very convenient philosophy, petite. I wish I could afford it." }
        ] },
        { t: "(Put your hand next to hers on the railing.)", notes: 3, then: [
          { n: "Solar put her hand on the railing. Not touching Widowmaker's. Just near it. A few inches. Close enough to feel how cold she was, colder than the steel, cold like something that had been in the sea." },
          { n: "Widowmaker looked at the hand for a long time. She didn't move hers closer. She didn't move it away." },
          { s: 'widowmaker', f: 'neutral', t: "...You are very strange, petite. Very strange." }
        ] },
        { t: "Do you miss him?", notes: 2, then: [
          { s: 'widowmaker', f: 'sad', t: "I do not know. I think I would, if I could. I think something in me tries to, at night, and cannot find the place where it used to happen. Like a tongue looking for a tooth." }
        ] }
      ] },
      { s: 'widowmaker', f: 'neutral', t: "There is a chair. Where they made me. They put me in it, and they take things out, and they put me back in the world. And every time something grows back, a little, they put me in the chair again." },
      { s: 'widowmaker', f: 'serious', t: "The night I came through, I had felt something. On the rooftop. Waiting for the shot. I looked at the target through the scope and I felt something. For the first time in years. I do not know what it was." },
      { s: 'widowmaker', f: 'serious', t: "And I thought, very clearly, they will see. When I go back. They will see it on me and they will put me in the chair. And I did not want to go back. And then everything was green." },
      { choose: [
        { t: "What did you feel? On the rooftop?", notes: 3, then: [
          { s: 'widowmaker', f: 'neutral', t: "...The target had a child with him. A little girl. On his shoulders. Pointing at a bird." },
          { s: 'widowmaker', f: 'sad', t: "I did not take the shot. I have never once not taken the shot. I lay there and watched her point at the bird until they turned the corner. And then the green came." }
        ] },
        { t: "Something grew back.", notes: 3, then: [
          { s: 'widowmaker', f: 'neutral', t: "...Yes. Like a weed. Through the concrete. They will pull it out again." },
          { s: 'widowmaker', f: 'neutral', t: "But it grew. I had not known it could." }
        ] },
        { t: "You don't have to tell me.", notes: 1, then: [
          { s: 'widowmaker', f: 'neutral', t: "I know. That is why I am telling you." }
        ] }
      ] },
      { n: "There was a reason she'd come through on that night, Solar thought on the long walk home, the night the bridge had taken something from all of them, the night everyone in the dorm had felt something they would carry for the rest of their lives. A woman who wasn't allowed to feel had fallen into a city that was all feeling, all at once, on the worst night of its year. Solar didn't know if that was cruel or kind. She thought, maybe, it was both." }
    ] },

    { after: '11/21', title: '5: cold', place: 'Moonlight Bridge', time: 'Evening', scene: [
      { music: 'night' },
      { n: "Solar had brought a scarf. It was red, and soft, wool, and the kind of thing a person would wear to the shops on a Sunday, and she'd bought it at Paulownia with money from a part-time job, and she held it out to Widowmaker on the bridge in the cold without a speech." },
      { s: 'widowmaker', f: 'surprised', t: "...What is this." },
      { s: 'widowmaker', f: 'neutral', t: "I cannot feel the cold. My heart is slowed. My body is cold always. It is how they made me. I do not need it." },
      { s: 'widowmaker', f: 'neutral', t: "...Why?" },
      { choose: [
        { t: "So you'll know someone thought about you.", notes: 3, then: [
          { n: "Widowmaker held the scarf in both hands, looking at it, for a long time. Then she wound it around her neck, twice, slowly, carefully, the way you'd put on something you'd been told was precious and didn't know how to wear, and tucked the ends in, and sat very still." }
        ] },
        { t: "Because it's red. It goes with your visor.", notes: 2, then: [
          { s: 'widowmaker', f: 'neutral', t: "...That is a correct observation about fashion. Fine." },
          { n: "She put it on. Twice round. Ends tucked. It did go with the visor." }
        ] },
        { t: "Because I'm cold just looking at you.", notes: 2, then: [
          { s: 'widowmaker', f: 'happy', t: "Ah. So it is for you. A selfish gift. I respect that more." },
          { n: "She put it on anyway." }
        ] }
      ] },
      { n: "They sat on the rail in the wind. Widowmaker's hand came up, every few minutes, and touched the scarf, at the throat, lightly, two fingers, as if checking it was still there, the way you'd check a wound, or a pulse." },
      { s: 'widowmaker', f: 'neutral', t: "My heart beats thirty times a minute. Did you know? A sleeping person's heart beats sixty. Mine beats half of that when I am awake. Always. It is very good for the shot. Nothing moves." },
      { s: 'widowmaker', f: 'neutral', t: "Put your hand on my wrist. Count. You count everything. I have watched you. Count this." },
      { choose: [
        { t: "(Put two fingers on her wrist and count.)", notes: 3, then: [
          { n: "Solar put two fingers on the cold inside of her wrist and counted. Her own watch, in the light from the bridge lamps. Fifteen seconds. Eight beats. Nine. She counted again. Nine. Again. Ten." },
          { s: 'solar', f: 'neutral', t: "...Forty. That's forty." },
          { s: 'widowmaker', f: 'surprised', t: "No. Thirty. It is always thirty." },
          { s: 'solar', f: 'neutral', t: "Forty." },
          { n: "Widowmaker looked at her own wrist under Solar's fingers for a long, strange moment, as if it belonged to someone else, as if it had done something without asking her. Then she took it back, and put it in her lap, and didn't say anything else for a while, and touched the scarf." }
        ] },
        { t: "I don't need to count. I believe you.", notes: 1, then: [
          { s: 'widowmaker', f: 'neutral', t: "Hm. You should never believe a sniper about her own heart. We lie about it. Professionally." }
        ] }
      ] }
    ] },

    { after: '12/3', title: '6: princesse', place: 'Moonlight Bridge', time: 'Evening', scene: [
      { music: 'night' },
      { n: "December. The first really cold night, the bay black and glittering under the bridge lights, the wind sharp enough to make Solar's eyes water. Widowmaker was up on the cables in the red scarf, which she now wore every single night and had never once mentioned, and Solar had been up there with her for an hour, and was shaking, and pretending not to." },
      { s: 'widowmaker', f: 'neutral', t: "Go home, princesse. You are shivering." },
      { n: "She said it without thinking. Then she stopped. Her whole body stopped, the way it did before a shot, every muscle at once, as if the word had been fired from somewhere behind her and she was trying to see where." },
      { s: 'widowmaker', f: 'surprised', t: "...Princesse. Why did I say that? I do not call anyone that. I have never called anyone that in my life. Either life." },
      { ifMet: ['haechan'], then: [
        { n: "Something in Solar's chest went very still. She'd heard it this month. In a laundry room, at three in the morning, in a flat dry voice, from a boy sitting on a dryer who'd looked at her face very carefully when he said it to see what it did. She'd felt it then and hadn't known what to do with it. She felt it now, coming from the wrong mouth, in the wrong accent, on a bridge, and it went through her like a key turning in a lock she didn't know she had." }
      ], else: [
        { n: "Something in Solar's chest went very still, and then very warm, the way a room does when someone turns a light on in the next one. She didn't know why. It was a word. It wasn't even her word. It sat in her like a stone dropped in a well, and she listened, and listened, and didn't hear it land." }
      ] },
      { s: 'widowmaker', f: 'neutral', t: "Kiriko said there is another world. Where people play as us. A boy who plays as me. Beside a girl who plays as her. Every night. Very late." },
      { s: 'widowmaker', f: 'neutral', t: "I can feel him, sometimes. When I am very still. A patient boy. Very good. He never misses when it matters. He talks to someone while he waits. In my voice, a little. I think he calls someone that. I think it came through." },
      { s: 'widowmaker', f: 'flustered', t: "Mon dieu. How embarrassing for both of us." },
      { choose: [
        { t: "I don't mind it.", notes: 3, then: [
          { s: 'widowmaker', f: 'neutral', t: "...No. I don't suppose you do. Your face is being loud again." },
          { s: 'widowmaker', f: 'neutral', t: "Very loud. Like a window with all the lights on. I would not take a shot at a window like that. It would be too easy. It would be rude." }
        ] },
        { t: "(Say nothing. Look at the city.)", notes: 3, then: [
          { n: "Solar looked at the city and said nothing, and something she could not name ached behind her breastbone, a long low ache like a held note, and she let it, and didn't try to name it, and beside her Widowmaker let her not name it, which was a courtesy only someone who'd had everything named for her could have known how to give." }
        ] },
        { t: "Who do you think he calls it?", notes: 2, then: [
          { s: 'widowmaker', f: 'neutral', t: "I think you know better than I do, petite. I think you know very well." },
          { s: 'widowmaker', f: 'serious', t: "And I think you do not remember. Which is worse. I know that one. I know it very well." }
        ] }
      ] },
      { s: 'widowmaker', f: 'neutral', t: "Go home, petite. Properly. That is an order. I will watch you as far as the station." },
      { choose: [
        { t: "Goodnight, Widowmaker.", notes: 3, then: [
          { s: 'widowmaker', f: 'neutral', t: "...Goodnight. Do not look back. I will see you look back. It ruins the line." }
        ] },
        { t: "You don't have to watch me.", notes: 2, then: [
          { s: 'widowmaker', f: 'neutral', t: "I do not have to do anything. That is the first thing they took from me. I am taking it back. I am choosing to watch you." }
        ] }
      ] },
      { n: "She went home. She lay awake a long time with the word in her, princesse, turning it over like a coin. She thought of a screen at three in the morning. A voice in a headset that said behind you. A boy she'd never met who always knew where she'd be. And she lay in the dark and thought, very clearly, I want to know who he is, and then, much more quietly, and much more frightened, I think I'm going to." }
    ] },

    { after: '12/12', title: '7: overwatch', place: 'Port Island', time: 'The Dark Hour', scene: [
      { place: 'Port Island · Rooftops · The Dark Hour', time: 'The Dark Hour' },
      { dark: true },
      { music: 'battle' },
      { n: "The green hour, a full-team operation, a Shadow loose in the Port Island shopping streets the size of a bus and made of grasping hands and a dozen screaming masks, and the party spread out through the streets below it, and Solar in the middle of the street with the Evoker in her fist and the thing coming down toward her through the green." },
      { n: "And from somewhere very high above them, on a rooftop Solar couldn't see, a crack. And a mask came apart. And another crack. Another mask." },
      { n: "One shot. One kill. Every single time. She didn't miss once. Every time Solar moved, a crack came half a second ahead of her, clearing the space she was about to step into. Every time a hand came for Akihiko, or Yukari, or the dog, a crack, and the hand was gone. It was like fighting with a guardian angel who had decided to be terrifying about it." },
      { s: 'widowmaker', f: 'serious', t: "Behind you. Left. I have it." },
      { n: "The voice was in her ear. Not through a radio. Just in her ear, very close, the way voices are in a headset at three in the morning. Solar didn't know how. She didn't ask." },
      { choose: [
        { t: "(Trust her. Don't turn around.)", notes: 3, then: [
          { n: "Solar didn't turn around. She heard the crack, and felt the wind of it go past her ear, close enough to lift her hair, and heard something enormous behind her stop existing, and kept going forward, toward the Shadow's heart, Evoker up, without once looking back, because you don't look at the one who's covering you. That's how she knows you trust her." }
        ] },
        { t: "(Turn and fight it yourself.)", notes: 2, then: [
          { n: "She turned, and the crack came anyway, a fraction of a second ahead of her, and the thing behind her came apart into smoke before her rope even reached it, and the voice in her ear said, very dryly, \"I said I have it,\" and Solar, despite everything, laughed." }
        ] }
      ] },
      { summon: 'haenim' },
      { n: "Afterward, on the roof, in the fading green, Widowmaker was sitting very still with her rifle across her knees and two fingers pressed against the inside of her own wrist, under the red scarf, counting. She didn't look up when Solar climbed over the parapet." },
      { s: 'widowmaker', f: 'surprised', t: "My heart. It went up. When you were surrounded. When the hand came round the corner and you did not see it. It went up." },
      { s: 'widowmaker', f: 'serious', t: "It does not do that. It is not supposed to be able to do that. They made it so it cannot." },
      { choose: [
        { t: "Mine too.", notes: 3, then: [
          { s: 'widowmaker', f: 'neutral', t: "Yours is supposed to. You are a person. You are allowed." },
          { s: 'solar', f: 'neutral', t: "So are you." },
          { n: "Widowmaker looked at her for a long moment in the last of the green, and something went across her face, very fast, and was gone, too fast to read, like a bird crossing a window." }
        ] },
        { t: "Thank you for covering me.", notes: 2, then: [
          { s: 'widowmaker', f: 'neutral', t: "It is what I am for. A sniper behind a support. It is the oldest arrangement there is." },
          { s: 'widowmaker', f: 'neutral', t: "...It was the first time I have used the rifle for someone instead of on them. It felt different in the hands. Heavier. Better." }
        ] }
      ] },
      { s: 'widowmaker', f: 'flustered', t: "...Do not tell anyone. About the heart. Especially not the fox. She will make a fortune about it." }
    ] },

    { after: '12/23', title: '8: talon', place: 'Moonlight Bridge', time: 'Evening', scene: [
      { music: 'tender' },
      { n: "There was something wrong with her tonight. She was up on the very top of the north tower, higher than she'd ever been, on the beacon housing, crouched, not watching the city. Watching the horizon. Toward the sea. Toward where you'd look if you were waiting for something to come for you." },
      { s: 'widowmaker', f: 'neutral', t: "Elizabeth came. The woman with the book. She stood on the walkway in the wind and talked to me as if I were a person. She said the doors open at the end of January." },
      { s: 'widowmaker', f: 'serious', t: "When I go back, they will find me. Talon. They always find me. They will see what has grown back. They always see it." },
      { s: 'widowmaker', f: 'sad', t: "They will put me back in the chair. And they will take out whatever has grown. The heart that goes up. The scarf. The bridge. The fox, laughing. You." },
      { s: 'widowmaker', f: 'sad', t: "I will not remember you, petite. I am sorry. I wanted to say it while I still could." },
      { n: "It was the first time Solar had ever heard her say she was sorry. It was the first time Solar had ever heard her say anything as if it hurt." },
      { n: "And the strange thing was, Solar understood. Not Talon. Not the chair. The shape of it. Something waiting at the end of the line to take you back and make you into what everyone needs. Make you smooth. Make you perform. She didn't know where she knew it from. She knew it the way she knew where to stand." },
      { choose: [
        { t: "Then I'll remember for both of us.", notes: 3, then: [
          { s: 'widowmaker', f: 'neutral', t: "That is very stupid. It is the nicest stupid thing anyone has ever said to me." }
        ] },
        { t: "Some things grow back no matter what.", notes: 3, then: [
          { s: 'widowmaker', f: 'neutral', t: "...Perhaps. Weeds do." },
          { s: 'widowmaker', f: 'neutral', t: "Perhaps I am a weed. Perhaps they will cut me down and I will come up through the concrete in a month, all over again, with a scarf." }
        ] },
        { t: "Don't go back.", notes: 1, then: [
          { s: 'widowmaker', f: 'serious', t: "And stay here? In the green, where nothing ends? I have seen the train, petite. On this bridge. All those people asleep in the windows. I know what staying looks like." },
          { s: 'widowmaker', f: 'neutral', t: "I would rather be cut down than kept." }
        ] }
      ] },
      { ifRank: { mercy: 1 }, then: [
        { n: "Mercy came to the bridge the next night, Solar heard later. Just stood at the bottom of the tower in her white coat and the ugly scarf, looking up, for a long time, saying nothing. And then said one word, a name, Amélie, not loud, the way you'd say the name of a patient who's been asleep a long time, to see if she'd stir." },
        { n: "Widowmaker came down. They talked for an hour on the walkway, the doctor and the weapon, about Paris, about a man named Gérard, about a dance in an opera house before either of them had been anything the world had a word for. Solar didn't hear it. She only saw, from the far end of the bridge, Mercy hold out her hand, and Widowmaker look at it for a long time, and not take it, and not refuse it either." },
        { n: "\"If you ever want to come in from the cold,\" Angela told Solar afterward, \"I'll be there. On the other side. With a very good doctor's appointment. She knows. That's all I could do. That's all anyone can do. Make sure she knows.\"" }
      ], else: [
        { n: "She came down off the tower, after, and stood on the walkway beside Solar, which she almost never did, at Solar's height, in the wind, with the red scarf blowing, and didn't say anything else, and didn't need to." }
      ] },
      { s: 'widowmaker', f: 'neutral', t: "...Stay a little longer, petite. The wind is dropping. You will complain less." },
      { choose: [
        { t: "(Stay.)", notes: 3, then: [
          { n: "Solar stayed. They stood at the rail at the same height for the first time, side by side, and watched the lights on the far shore go out one by one as the city went to bed, and neither of them said anything about the chair, or the doors, or January, and the red scarf blew against Solar's shoulder every time the wind came, and stayed there." }
        ] },
        { t: "I'll come back tomorrow.", notes: 2, then: [
          { s: 'widowmaker', f: 'neutral', t: "Good. I will be here. I am always here. For a little while longer, I am always here." }
        ] }
      ] }
    ] },

    { after: '1/8', title: '9: ninety-two', place: 'Moonlight Bridge', time: 'Evening', scene: [
      { music: 'tender' },
      { n: "January, and snow on the bridge, and the whole bay white and silver under a thin cold moon. Widowmaker was on the rail in the red scarf, watching the snow fall into the water, and not, for once, holding the rifle. It was leaning on the stanchion behind her, forgotten, like an umbrella someone had set down to use both hands." },
      { n: "Kiriko had come too. She'd climbed halfway up the north tower before deciding she didn't love heights as much as she'd told everyone she did, and was sitting on a maintenance ledge ten meters up, swinging her legs, shouting things down." },
      { s: 'kiriko', f: 'happy', t: "Fortune! For you! I'm not asking! You can't stop me, I'm up a tower!" },
      { s: 'widowmaker', f: 'neutral', t: "I can shoot the paper out of your hand from here." },
      { s: 'kiriko', f: 'neutral', t: "You WON'T, though. Dai-kichi. Great blessing. \"The cold heart thaws in the company of fools.\"" },
      { s: 'widowmaker', f: 'neutral', t: "...I am insulted by that. And by how accurate it is." },
      { n: "Kiriko dropped the slip. It fluttered down ten meters in the snow, turning over and over, and Widowmaker caught it without looking, between two fingers, and put it in the pocket at her hip, where, Solar knew, there was already another one, from October, very soft at the folds now." },
      { n: "Later, when Kiriko had gone home, Widowmaker stood on the rail with two fingers pressed to the inside of her own wrist under the scarf, and her eyes closed, counting, the way Solar had taught her, by her own watch, for fifteen seconds. Then she opened her eyes." },
      { s: 'widowmaker', f: 'surprised', t: "Ninety-two. My heart. Right now. It is supposed to be thirty." },
      { s: 'widowmaker', f: 'neutral', t: "It goes up when I am with you. And the fox. Laughing. On a bridge. With a scarf I cannot feel and do not need and will not take off." },
      { s: 'widowmaker', f: 'happy', t: "I believe this is a feeling. I believe I am... happy. It is unpleasant. I love it." },
      { choose: [
        { t: "Welcome back, Amélie.", notes: 3, then: [
          { s: 'widowmaker', f: 'surprised', t: "..." },
          { s: 'widowmaker', f: 'neutral', t: "...You may use it. Just tonight. Just you. Nobody else in any world." }
        ] },
        { t: "You're my friend. You know that, right?", notes: 3, then: [
          { s: 'widowmaker', f: 'neutral', t: "...Yes. I know. You have been very stubborn about it since October. Since the wind." },
          { s: 'widowmaker', f: 'neutral', t: "I have not had a friend since Paris. I had forgotten that they are this inconvenient. I had forgotten you have to feel things about them." }
        ] },
        { t: "Ninety-two. I'll remember that number.", notes: 2, then: [
          { s: 'widowmaker', f: 'happy', t: "Good. You count everything. Count that. Keep it somewhere they cannot reach." }
        ] }
      ] },
      { s: 'widowmaker', f: 'neutral', t: "Tell me something true. Kiriko says that is what friends do on bridges. She says it is a rule. I think she invented it." },
      { choose: [
        { t: "I'm scared of where I'm going.", notes: 3, then: [
          { s: 'widowmaker', f: 'neutral', t: "Good. Only fools are not. Be scared and go. That is the only way anyone has ever gone anywhere worth going." }
        ] },
        { t: "I'm going to miss you.", notes: 3, then: [
          { s: 'widowmaker', f: 'surprised', t: "..." },
          { s: 'widowmaker', f: 'neutral', t: "...Ninety-four. You see what you have done. Stop it." }
        ] },
        { t: "Your posture's slipping.", notes: 1, then: [
          { s: 'widowmaker', f: 'serious', t: "It is NOT." },
          { n: "It wasn't. She checked anyway." }
        ] }
      ] },
      { n: "They stood in the snow until it stopped, and the bridge was white from tower to tower except for two places on the walkway, side by side, where they'd been standing, and Widowmaker looked at them for a long time before she went back up into the cables, the way you'd look at a photograph you'd been told you weren't allowed to keep." }
    ] },

    { after: '1/24', title: '10: the last dance', place: 'Moonlight Bridge', time: 'Evening', scene: [
      { music: 'tender' },
      { n: "The last week of January, and everyone knew it was ending. The green hour, this year, this city. The visitors had started saying goodbye to things. Somebody had seen the shrine girl bowing to the stone foxes, one at a time. Somebody had seen a pale man in the photo booth at Paulownia, alone, taking one last strip. And Widowmaker was on the bridge, in the red scarf, on the walkway, at Solar's height, waiting, which she had never done, ever, not once." },
      { s: 'widowmaker', f: 'neutral', t: "I wish to give you something. I do not have very much. I came here with a rifle and a grappling hook and a great many regrets I am not allowed to remember." },
      { n: "She held out her hand. In it was a ribbon. Black satin, long, worn soft and frayed at the ends, with a tiny worn hole near one end where a needle had gone through, once, many times. The ribbon off a pointe shoe." },
      { s: 'widowmaker', f: 'neutral', t: "From the Opéra. The last performance. I have carried it everywhere since. Through the chair. Through all of it. In the lining of my suit. I never knew why. Every time they took everything else out of me, they never found this. It was not in my head. It was in my pocket." },
      { s: 'widowmaker', f: 'serious', t: "If they take everything else when I go back, I want this to be somewhere they cannot reach. With someone who will remember what it was for." },
      { choose: [
        { t: "I'll keep it. I'll remember what it was for.", notes: 3, then: [
          { s: 'widowmaker', f: 'neutral', t: "Good. Then it was real. That is all I wanted, I think. For someone to know it was real. That there was a girl in Paris who danced." }
        ] },
        { t: "Dance with me. One more time.", notes: 3, then: [
          { s: 'widowmaker', f: 'happy', t: "...You cannot dance, petite. I have watched you walk. You walk like someone expecting an ambush." },
          { s: 'widowmaker', f: 'neutral', t: "...Give me your hands." }
        ] }
      ] },
      { n: "She did. There on the bridge, in the snow, under the moon. A slow, patient waltz, Widowmaker leading, Solar's feet getting everything wrong and Widowmaker correcting them, silently, with her own, so that by the third turn Solar was getting it nearly right, and by the fifth, right, and they turned in the middle of the empty walkway under the bridge lamps with the snow coming down through the light, and Widowmaker's hand was cold in hers, and her heart, under Solar's fingers at the back of her shoulder, was going, Solar could feel it, very fast." },
      { s: 'widowmaker', f: 'neutral', t: "I came here running from the chair. From going back and being made into nothing again. I thought, if I stay here, in the green, they can never reach me." },
      { s: 'widowmaker', f: 'neutral', t: "But I would rather be cut down than kept, petite. I told you. I am going back. And they will put me in the chair. And I will forget you, probably. Most of you." },
      { s: 'widowmaker', f: 'happy', t: "But my feet will remember this waltz. They remember everything. And one day, on some rooftop, waiting, I will find myself doing three steps of it without knowing why. And that will be you. Growing back. Through the concrete." },
      { choose: [
        { t: "I'll remember. Every single bit of it.", notes: 3, then: [
          { s: 'widowmaker', f: 'neutral', t: "Good. Remember it for me. In whichever world you go to. You count everything. Count this." }
        ] },
        { t: "Weeds always grow back.", notes: 3, then: [
          { s: 'widowmaker', f: 'happy', t: "...Yes. Weeds. I have decided I am a weed. It is the most hopeful thing I have ever been." }
        ] }
      ] },
      { s: 'widowmaker', f: 'neutral', t: "Au revoir is not goodbye, princesse. It means until I see you again. Remember that too." },
      { n: "When Solar looked back from the end of the bridge, Widowmaker was up on the highest cable, in the snow, a dark shape against the moon with a red scarf blowing out behind her, and she was not watching the city, and she was not watching the sea. She was watching Solar go. All the way. Until the very last step. The way you watch someone you've decided, against every order you've ever been given, to keep." }
    ] }
  ],
  afterMax: [
    { title: 'nine forty-two', place: 'Moonlight Bridge', scene: [
      { music: 'night' },
      { n: "Widowmaker had a watch. She'd had it all along, she said, a military thing, black, on the inside of her wrist where the face sat against her pulse. She'd stopped looking at it for the time. Now she looked at it for something else." },
      { s: 'widowmaker', f: 'neutral', t: "Nine forty-two. Every night, at nine forty-two, the train on the far line passes the third pylon. There is a man in the last carriage who always looks up at this bridge. He cannot see me. He looks anyway." },
      { s: 'widowmaker', f: 'neutral', t: "I have decided he is looking for someone. I have decided to let him." },
      { choose: [
        { t: "(Wave at the train when it passes.)", notes: 3, then: [
          { n: "The train came at nine forty-two. Solar waved, both arms, from the walkway. Widowmaker watched her through the scope, and then, very slowly, watched the man in the last carriage through it, and reported, in a voice like a weather bulletin, \"He waved back. He has no idea at whom. He looks very pleased about it.\"" }
        ] },
        { t: "Maybe he's looking for you.", notes: 2, then: [
          { s: 'widowmaker', f: 'neutral', t: "No one is looking for me, petite. Except the people I would rather did not find me." },
          { s: 'widowmaker', f: 'neutral', t: "...And you. You keep coming up the bridge. I suppose you count." }
        ] }
      ] }
    ] },
    { title: 'four frames', place: 'Paulownia Mall · Photo Booth', scene: [
      { music: 'city' },
      { n: "Kiriko had dragged Widowmaker into Paulownia Mall, in daylight, in a borrowed coat with the collar up and a cap pulled down, which fooled nobody, and then into the photo booth by the arcade, where the curtain had little hearts on it, and Widowmaker stood outside it looking at the hearts with an expression of total betrayal." },
      { s: 'kiriko', f: 'happy', t: "Four frames! Three people! It's the law! Sol-chan, push her in!" },
      { choose: [
        { t: "(Push her in.)", notes: 3, then: [
          { n: "Solar pushed. Widowmaker allowed herself to be pushed, which was the only way she could ever have gone in. In the first frame she looked like a hostage. In the second, like a hostage who'd been told a joke. In the third Kiriko had stuck a fox-ear headband on her and she was looking at it in the camera with naked horror. In the fourth she was laughing. She'd never once laughed in front of a camera, she said afterward. She kept that one. She kept all four." }
        ] },
        { t: "She doesn't have to.", notes: 2, then: [
          { s: 'widowmaker', f: 'neutral', t: "...No. I do not." },
          { s: 'widowmaker', f: 'neutral', t: "...Move over, fox. I am taking the middle." }
        ] }
      ] }
    ] }
  ]
});
