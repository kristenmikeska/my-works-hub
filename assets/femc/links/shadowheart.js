/* Shadowheart · II The Priestess. Arrives on the 8/6 full moon. Evenings. Format notes are at the top of akihiko.js. */
FemcSocial.define({
  id: 'shadowheart', name: 'Shadowheart', short: 'Shadowheart', arcana: 'Priestess', numeral: 'II', from: "Baldur's Gate 3",
  arrives: '8/6',
  home: { place: 'Naganaki Shrine · Night', slot: 1, days: [1, 2, 3, 4, 5], hint: 'Evenings on weekdays, at Naganaki Shrine after Kiriko has gone home.' },
  romance: true,
  cast: { astarion: 'Astarion', kiriko: 'Kiriko' },
  threads: { elizabeth: { name: 'Elizabeth', members: ['elizabeth'] } },
  texts: [
    { id: 'eliz-8-6', thread: 'elizabeth', rank: 0, before: 99, days: 0, date: '8/6', slot: 1, msgs: [
      { from: 'elizabeth', t: 'Another full moon, another handful of guests.' },
      { from: 'elizabeth', t: 'One of them is a priestess who does not trust me. I find that very sensible of her.' },
      { from: 'elizabeth', t: 'She has taken up residence at the shrine after dark. The fox girl has been very gracious about it.' },
      { from: 'elizabeth', t: 'And a prince has fallen asleep at the end of the Port Island pier. He appears to be fishing. I have not been able to confirm that he is awake.' }
    ] },
    { id: 'sh-1a', rank: 1, days: 1, slot: 1, msgs: [
      { from: 'shadowheart', t: "I don't know how to use this. The fox girl gave it to me and said 'text Sol-chan.'" },
      { from: 'shadowheart', t: 'This is me, texting. Are you satisfied.' }
    ], reply: [
      { t: 'Very satisfied, Shadowheart.', notes: 3, then: [{ from: 'shadowheart', t: 'Good. Never mention it again.' }] },
      { t: 'You figured it out!', notes: 2, then: [{ from: 'shadowheart', t: "Don't sound so surprised, Sunshine." }] }
    ] },
    { id: 'sh-3a', rank: 3, days: 1, slot: 1, msgs: [
      { from: 'shadowheart', t: 'My hand is fine. Stop worrying.' },
      { from: 'shadowheart', t: 'I can feel you worrying from here.' }
    ], reply: [
      { t: 'I can feel you lying from here.', notes: 3, then: [{ from: 'shadowheart', t: '...Infuriating. It hurts. Happy?' }] },
      { t: "I'll bring bandages tomorrow.", notes: 2, then: [{ from: 'shadowheart', t: "They won't help. Bring them anyway." }] }
    ] },
    { id: 'sh-5a', rank: 5, days: 1, slot: 1, msgs: [
      { from: 'shadowheart', t: 'The vampire says I have "the fashion sense of a disappointed crow."' },
      { from: 'shadowheart', t: 'I said he has the personality of a perfume sample. I believe I won.' }
    ], reply: [
      { t: 'You definitely won.', notes: 3, then: [{ from: 'shadowheart', t: 'I know. I just wanted to hear it.' }] },
      { t: 'You two are going to be friends.', notes: 2, then: [{ from: 'shadowheart', t: 'Bite your tongue, Sunshine.' }] }
    ] },
    { id: 'sh-7a', rank: 7, days: 1, slot: 1, msgs: [
      { from: 'shadowheart', t: 'My hand stopped hurting.' },
      { from: 'shadowheart', t: 'For the first time I can remember. It just stopped.' }
    ], reply: [
      { t: "Because you chose for yourself.", notes: 3, then: [{ from: 'shadowheart', t: '...Yes. I think so.' }] },
      { t: "How does it feel?", notes: 3, then: [{ from: 'shadowheart', t: 'Strange. Light. Like taking off armor I forgot I was wearing.' }] }
    ] },
    { id: 'sh-9r', rank: 9, route: 'romance', days: 1, slot: 1, msgs: [
      { from: 'shadowheart', t: 'I keep looking at the moon and thinking of you.' },
      { from: 'shadowheart', t: 'Which is ironic, given your name.' }
    ], reply: [
      { t: "Sun and moon. We'll make it work.", notes: 3, then: [{ from: 'shadowheart', t: '...We will. Goodnight, Sunshine.' }] },
      { t: 'I think of you at night too.', notes: 3, then: [{ from: 'shadowheart', t: 'Good. That seems fair.' }] }
    ] },
    { id: 'sh-9f', rank: 9, route: 'friend', days: 1, slot: 1, msgs: [
      { from: 'shadowheart', t: "I've never had a friend I didn't have to lie to." },
      { from: 'shadowheart', t: "It's very strange. I think I like it." }
    ], reply: [
      { t: 'Get used to it.', notes: 3, then: [{ from: 'shadowheart', t: "I'm trying. Be patient with me." }] },
      { t: "Me too.", notes: 3, then: [{ from: 'shadowheart', t: 'Two terrible liars. Telling the truth. Imagine.' }] }
    ] }
  ],
  ranks: [
    { after: '8/7', title: '1: night orchid', place: 'Naganaki Shrine · Night', scene: [
      { n: "Kiriko had texted, a little ominously: there's a lady at the shrine at night now. she's scary. she's nice to the dog though. come meet her?? Solar went after dinner, up the hundred and twelve steps in the warm dark, with the cicadas going and the city glowing below." },
      { n: "The shrine at night was a different place. The lanterns were lit. The fox statues looked like they were listening. And on the porch, in the deep shadow under the eaves, a woman sat with her back against a pillar and a strange dark object cradled in her lap, watching the steps." },
      { n: "Dark hair pulled back tight, a long braid over one shoulder. A silver circlet. Armor, light and dark and practical. Green eyes that were already narrowed when Solar reached the top step, like she'd been suspicious of her before she arrived." },
      { s: 'shadowheart', f: 'serious', t: "Another one. Wonderful. Do you also want to tell me about fortunes and foxes?" },
      { choose: [
        { t: "Kiriko sent me. She was worried about you.", notes: 3, then: [
          { s: 'shadowheart', f: 'neutral', t: "...She's very persistent for someone half my size." },
          { n: "It was not quite a complaint. It was close to a compliment, delivered by someone who'd forgotten how." }
        ] },
        { t: "What is that you're holding?", notes: 2, then: [
          { s: 'shadowheart', f: 'serious', t: "None of your business." },
          { n: "Her arms tightened around it. A smooth, dark stone thing, shaped almost like a seed or a shell, humming very faintly in the night air." }
        ] },
        { t: "(Sit down on the step, not too close.)", notes: 3, then: [
          { n: "Solar sat on the top step, a careful distance away, and looked out at the city instead of at her. After a long minute, she felt the woman relax, very slightly, like an animal deciding you were not, at this moment, a threat." }
        ] }
      ] },
      { s: 'shadowheart', f: 'neutral', t: "Shadowheart. That's what they call me. Before you ask, yes, it's a real name. No, I won't explain it." },
      { s: 'shadowheart', f: 'neutral', t: "I woke up in this shrine during that awful green hour, holding this, with no idea how I got here. Which is, I'm told, more or less how everyone gets here." },
      { n: "Koromaru trotted out from behind the offering box and pressed himself against Shadowheart's leg without hesitation. Her free hand went to his head automatically, gently. Her expression did not change at all. But her hand stayed." },
      { s: 'shadowheart', f: 'serious', t: "Don't look at me like that. Dogs are better than people. Everyone knows that." },
      { choose: [
        { t: "Agreed.", notes: 3, then: [{ s: 'shadowheart', f: 'happy', t: "...Finally. Someone with sense." }] },
        { t: "He likes you.", notes: 2, then: [{ s: 'shadowheart', f: 'neutral', t: "He has poor judgment. It's charming." }] }
      ] },
      { n: "Solar left an hour later. Shadowheart didn't say goodbye. But when Solar reached the bottom of the steps and looked back, the woman was standing at the top, a dark shape against the lanterns, watching to make sure she got down safely." }
    ] },

    { after: '8/21', title: '2: what she can\'t remember', place: 'Naganaki Shrine · Night', scene: [
      { n: "It was too hot to sleep, and so Solar had started going up to the shrine on weeknights, and Shadowheart had started, without discussion, being there." },
      { n: "Tonight she was sitting on the edge of the porch with her boots off and her feet in the stone water basin, which Solar was fairly sure was a sacrilege in at least two religions, and staring up at the sky." },
      { s: 'shadowheart', f: 'neutral', t: "Sunshine. That's what I'm calling you, by the way. Your name is Solar. I'm a cleric of the Lady of Loss and Darkness. It's funny." },
      { choose: [
        { t: "It's a little funny.", notes: 3, then: [{ s: 'shadowheart', f: 'happy', t: "It's very funny. You just don't have my sense of humor." }] },
        { t: "Lady of Loss?", notes: 2, then: [{ s: 'shadowheart', f: 'neutral', t: "Shar. My goddess. You wouldn't like her. Most people don't." }] }
      ] },
      { s: 'shadowheart', f: 'serious', t: "Do you want to know something absurd? I don't remember most of my life." },
      { s: 'shadowheart', f: 'neutral', t: "My goddess took it. I think. As a gift, or a test, or a punishment. I remember my training. I remember my mission. I remember being told to protect this." },
      { n: "She touched the dark stone object, which sat beside her on the porch, humming." },
      { s: 'shadowheart', f: 'neutral', t: "Everything else is a gap. Like a book with pages torn out. I'll be reaching for a memory and there's just... nothing. A smooth place." },
      { n: "Solar knew something about gaps. About smooth places you didn't reach into. About pages you'd torn out of yourself and stopped looking for." },
      { choose: [
        { t: "Doesn't that frighten you?", notes: 2, then: [{ s: 'shadowheart', f: 'serious', t: "Every single day. But I'm not allowed to be frightened. I'm allowed to be faithful." }] },
        { t: "Sometimes I'd like to forget things.", notes: 3, then: [
          { s: 'shadowheart', f: 'surprised', t: '...' },
          { s: 'shadowheart', f: 'neutral', t: "Don't. Trust me. Even the bad pages are yours. I'd give anything for mine back." }
        ] }
      ] },
      { n: "She took her feet out of the basin and dried them on her cloak and said, \"Goodnight, Sunshine,\" and went inside the shrine, where she apparently slept, which Solar was sure was also a sacrilege." }
    ] },

    { after: '9/4', title: '3: the wound', place: 'Naganaki Shrine · Night', scene: [
      { n: "September came in on a storm. Solar went up to the shrine anyway, in a raincoat, worried, and found Shadowheart under the porch eaves holding Koromaru, who was wet and shivering and had cut his paw on something in the gravel." },
      { n: "She was healing him. Solar saw the light, a cold silvery glow in her palm, pressed gently against the dog's foot." },
      { n: "And then she saw Shadowheart's face twist. The healing hand jerked back. She clutched it to her chest, and a dark mark on her palm, a wound Solar had never noticed, was suddenly bleeding through her glove." },
      { s: 'shadowheart', f: 'serious', t: "It's fine. It does that. Leave it." },
      { choose: [
        { t: "It is not fine. Let me see.", notes: 3, then: [
          { s: 'shadowheart', f: 'serious', t: '...' },
          { n: "She glared. And then, slowly, she held out her hand. The wound was old. A dark, angry mark in the center of her palm, like something had been pressed into it and burned. Solar wrapped it in the handkerchief from her pocket, carefully, the way Angela had shown her." }
        ] },
        { t: "Does it happen every time you heal?", notes: 2, then: [{ s: 'shadowheart', f: 'neutral', t: "Not every time. When I'm kind, mostly. When I do something my goddess wouldn't approve of." }] }
      ] },
      { s: 'shadowheart', f: 'neutral', t: "It's a punishment. Or a reminder. When I'm too soft. My Lady doesn't approve of softness." },
      { n: "Koromaru, healed, licked her face. She didn't push him away. Her hand was bleeding through the handkerchief and she was letting a dog lick her face in the rain." },
      { choose: [
        { t: "Then your Lady's wrong about you.", notes: 3, then: [
          { s: 'shadowheart', f: 'surprised', t: "...You can't say that." },
          { s: 'shadowheart', f: 'neutral', t: "...But thank you for saying it. Nobody ever has." }
        ] },
        { t: "You healed him anyway.", notes: 3, then: [{ s: 'shadowheart', f: 'neutral', t: "Of course I did. Look at him. What was I supposed to do, let him limp?" }] }
      ] },
      { n: "They sat under the eaves until the storm passed. Shadowheart's hand stopped bleeding around midnight. She didn't give the handkerchief back." }
    ] },

    { after: '9/18', title: '4: the moon', place: 'Naganaki Shrine · Night', scene: [
      { n: "The moon was getting full. Everyone at the dorm knew what that meant, and so did Shadowheart, apparently, because when Solar came up the steps she was standing in the middle of the courtyard with her head tipped back, staring at it like it had said her name." },
      { s: 'shadowheart', f: 'neutral', t: "...It's beautiful. Isn't it." },
      { n: "She said it softly, almost guiltily, the way you'd admit to something you'd been told was forbidden." },
      { s: 'shadowheart', f: 'serious', t: "I'm not supposed to love it. My goddess is the dark. The moon belongs to her sister. Her enemy. Selûne." },
      { s: 'shadowheart', f: 'neutral', t: "But every time it's full, I feel something. Like a door somewhere inside me that I'm not allowed to open." },
      { choose: [
        { t: "Maybe you should open it.", notes: 3, then: [{ s: 'shadowheart', f: 'serious', t: "...You don't understand what you're asking. If I'm wrong, I lose everything. Everything I am." }] },
        { t: "You're allowed to think it's beautiful.", notes: 3, then: [
          { s: 'shadowheart', f: 'surprised', t: '...Am I?' },
          { n: "Solar nodded. Shadowheart looked at her, then back up at the moon, and her face did something complicated and quiet, like a lock turning very slightly." }
        ] }
      ] },
      { n: "They stood in the courtyard and looked at the moon together. After a while, Shadowheart reached over without looking and took Solar's hand. The wounded one. Wrapped in Solar's handkerchief, still." },
      { s: 'shadowheart', f: 'neutral', t: "Don't make anything of that. My hand is cold." },
      { n: "It wasn't cold. Neither of them mentioned it." }
    ] },

    { after: '10/2', title: '5: roast', place: 'Naganaki Shrine · Dusk', scene: [
      { n: "Dusk at the shrine was the changing of the guard. Kiriko, sweeping the last of the leaves, handing over the broom and the dog and a bag of rice balls to Shadowheart as the lanterns came on, with a little bow and a cheerful, \"Night shift!\"" },
      { n: "Tonight there was an extra guest. Astarion, in his long burgundy coat, leaning against the torii gate like he owned it, watching Shadowheart's arrival with an expression of tremendous, malicious delight." },
      { s: 'astarion', f: 'happy', t: "Well, well. The priestess of gloom. Fancy seeing you in a world with less dirt." },
      { s: 'shadowheart', f: 'serious', t: "Astarion. I hoped you'd stay lost." },
      { n: "Kiriko, halfway down the steps, turned around, sat down on the stairs, and settled in to watch with the expression of someone who'd just found the best show on television." },
      { s: 'astarion', f: 'happy', t: "Still dressing like a disappointed crow, I see." },
      { s: 'shadowheart', f: 'serious', t: "Still with the personality of a perfume sample, I see." },
      { choose: [
        { t: "Ooh. Point to Shadowheart.", notes: 3, then: [
          { s: 'astarion', f: 'serious', t: "Excuse me? Darling, you're supposed to be on MY side." },
          { s: 'shadowheart', f: 'happy', t: "She has taste. Unlike you." }
        ] },
        { t: "Do you two know each other?", notes: 2, then: [{ s: 'shadowheart', f: 'neutral', t: "Unfortunately. We traveled together. For far too long." }] }
      ] },
      { n: "It went on for an hour. Hairstyles. Fighting styles. Questionable life choices. Kiriko kept score on her fingers and declared it a draw, and both of them were outraged by this." },
      { n: "When Astarion finally left, with a flourish of his coat, Shadowheart stood watching him go with an odd look on her face." },
      { s: 'shadowheart', f: 'neutral', t: "...Don't tell him I was glad to see him." },
      { choose: [
        { t: "He said the exact same thing about Karlach.", notes: 3, then: [{ s: 'shadowheart', f: 'happy', t: "Of course he did. We're all terrible at this. Every single one of us." }] },
        { t: "Your secret's safe.", notes: 2, then: [{ s: 'shadowheart', f: 'neutral', t: "Good. I have a reputation to maintain. For gloom." }] }
      ] }
    ] },

    { after: '10/16', title: '6: her parents', place: 'Naganaki Shrine · Night', scene: [
      { n: "She'd remembered something. Solar could see it as soon as she reached the top of the steps. Shadowheart was sitting very still on the porch with the artifact in her lap and her eyes wide open, like she'd just woken from a dream and the dream had followed her." },
      { s: 'shadowheart', f: 'neutral', t: "My parents. I remembered my parents." },
      { s: 'shadowheart', f: 'neutral', t: "A house. A garden. My mother laughing at something my father said. A wolf, a silly old wolf, they kept as a pet. Night orchids in the garden, white ones." },
      { s: 'shadowheart', f: 'serious', t: "And then the Sharrans came. And took me. And told me they'd abandoned me. And I believed them. For twenty years I believed them." },
      { n: "She said it all at once, like it would leave if she didn't get it out fast enough." },
      { choose: [
        { t: "(Sit beside her and hold her hand.)", notes: 3, then: [{ n: "Solar sat beside her and took her hand, the wounded one. Shadowheart held on so hard it hurt, and stared at the dark trees, and didn't cry, and didn't let go." }] },
        { t: "They didn't abandon you.", notes: 3, then: [{ s: 'shadowheart', f: 'serious', t: "No. They didn't. They were stolen from me. And I spent my whole life serving the ones who did it." }] }
      ] },
      { s: 'shadowheart', f: 'neutral', t: "Night orchids. I always loved them. I never knew why." },
      { n: "The next week, Solar found a florist in Paulownia that could order white orchids. They were expensive. She bought one anyway, in a pot, and left it on the shrine porch without a note. When she came back the next night, it was sitting by Shadowheart's bedroll, carefully watered, turned so it faced the moon." }
    ] },

    { after: '10/30', title: '7: nightsong', place: 'Naganaki Shrine · The Dark Hour', scene: [
      { n: "The green hour, and the shadow that came up the shrine steps wore a woman's face." },
      { n: "Silver-white hair. A glow around her like the moon. A sword, and a gentle, sad expression. Shadowheart went rigid the second she saw it." },
      { s: 'shadowheart', f: 'surprised', t: "...Nightsong." },
      { s: 'shadowheart', f: 'serious', t: "My Lady wanted me to find her. To kill her. That was my whole mission. Everything I am was built for this." },
      { n: "The shadow stood in the courtyard, glowing, not attacking. Just waiting. Like it was a question. Shadowheart's spear was in her hand. Her knuckles were white around it. The artifact on the porch was humming so loud Solar could feel it in her teeth." },
      { n: "And Shadowheart's wounded hand was bleeding. Pouring, through the bandage. Like her goddess was screaming at her through it." },
      { choose: [
        { t: "It's your choice. Not your goddess's.", notes: 3, then: [
          { s: 'shadowheart', f: 'serious', t: '...My choice.' },
          { n: "She said it like a word she'd never been allowed to use." }
        ] },
        { t: "(Stand beside her, not in front of her.)", notes: 3, then: [
          { n: "Solar stood beside her. Not in her way. Not making the decision. Just there, so she wasn't alone in it." }
        ] }
      ] },
      { n: "Shadowheart lowered the spear. Slowly. Like it weighed a thousand years." },
      { s: 'shadowheart', f: 'serious', t: "No. I won't." },
      { n: "The shadow with the moon's face smiled at her, sadly, and turned to light and smoke and was gone. And the wound in Shadowheart's palm, which had been bleeding for twenty years, stopped. Just stopped. Like a door shutting quietly in another room." },
      { n: "She looked at her hand. She looked at Solar. She sat down hard on the gravel and laughed, shaking, crying, in the green light, and Solar knelt and held her until the hour ended." }
    ] },

    { after: '11/13', title: '8: unbraided', place: 'Naganaki Shrine · Night', scene: [
      { n: "Solar almost didn't recognize her." },
      { n: "Shadowheart was standing at the top of the steps in the lantern light with her hair down. Not braided. Not pulled back. Loose around her shoulders, dark, with a single streak of silver at the temple that hadn't been there before, like moonlight caught in it." },
      { s: 'shadowheart', f: 'neutral', t: "...Don't stare. It's rude." },
      { choose: [
        { t: "You look like yourself.", notes: 3, then: [
          { s: 'shadowheart', f: 'blushing', t: "...I don't know who that is yet." },
          { s: 'shadowheart', f: 'happy', t: "But I'd like to find out." }
        ] },
        { t: "The silver suits you.", notes: 3, then: [{ s: 'shadowheart', f: 'blushing', t: "It appeared overnight. I think the moon is trying to tell me something. It's very unsubtle." }] }
      ] },
      { s: 'shadowheart', f: 'neutral', t: "I threw the artifact in the river. This morning. I just walked to the bridge and dropped it." },
      { s: 'shadowheart', f: 'happy', t: "It felt wonderful. I've never done anything that felt so good in my life." },
      { n: "She laughed, and it was a different laugh than Solar had ever heard from her. Light. Free. Like something let out of a box." },
      { s: 'shadowheart', f: 'happy', t: "I don't know what I'm going to be now, Sunshine. Not a Sharran. Maybe not anything. Maybe just me." },
      { n: "They sat on the porch with the orchid between them, blooming now, white and strange and beautiful in the lamplight. Shadowheart kept touching the silver streak in her hair, like she was checking it was still there." }
    ] },

    { after: '11/27', title: '9: sun and moon', place: 'Naganaki Shrine · Night', scene: [
      { n: "Late November. Cold. The shrine was quiet and dark except for one lantern and the moon, nearly full, over the trees." },
      { n: "Shadowheart had brought a blanket and two cups of tea and the orchid, and she sat on the top step with Solar and didn't say anything for a long while, which Solar had learned meant she was gathering her nerve." },
      { s: 'shadowheart', f: 'neutral', t: "When the year ends, the green hour goes away. And we all go home. Elizabeth told me." },
      { s: 'shadowheart', f: 'serious', t: "I've spent my whole life not choosing. Letting a goddess choose for me. I'm not doing that anymore. So I'm going to ask, and I want the truth." },
      { s: 'shadowheart', f: 'blushing', t: "What are we, Sunshine? Sun and moon. What is this?" },
      { route: [
        { t: "I love you. Sun and moon, and all of it.", route: 'romance', notes: 3, then: [
          { s: 'shadowheart', f: 'surprised', t: '...' },
          { s: 'shadowheart', f: 'blushing', t: "...Good. Gods. Good. I was so afraid you'd say something kind instead." },
          { n: "She kissed her on the cold steps, under the almost-full moon, and her hand, the one that used to bleed, was warm against Solar's face." }
        ] },
        { t: "You're my closest friend. In any world.", route: 'friend', notes: 3, then: [
          { s: 'shadowheart', f: 'happy', t: "...A friend. A real one. The kind I don't have to lie to." },
          { s: 'shadowheart', f: 'happy', t: "I didn't think I'd ever have one of those. Thank you, Sunshine." },
          { n: "She leaned against Solar's shoulder, and they finished their tea in the cold, and watched the moon until it went behind the trees." }
        ] }
      ] }
    ] },

    { after: '12/11', title: '10: under the moon', place: 'Naganaki Shrine · Night', scene: [
      { n: "December. A full moon, enormous and white, and the shrine covered in a thin layer of new snow that made everything glow. Shadowheart was waiting in the courtyard in her armor, her hair down, the silver streak bright as frost." },
      { s: 'shadowheart', f: 'neutral', t: "In my world there's a dance. For the moon. Selûne's people do it on nights like this." },
      { s: 'shadowheart', f: 'blushing', t: "I've never danced in my life. I'd like to start. With you." },
      { ifRoute: 'friend', then: [
        { choose: [
          { t: "I'm a terrible dancer.", notes: 3, then: [{ s: 'shadowheart', f: 'happy', t: "Perfect. So am I. We'll be terrible together. That's the whole point." }] },
          { t: "(Take her hands.)", notes: 3, then: [{ s: 'shadowheart', f: 'happy', t: "...There. See. You're already better than me." }] }
        ] },
        { n: "They danced in the snow in the shrine courtyard, badly, laughing, slipping, Koromaru running circles around them barking, until they were both breathless and soaked and the moon had moved halfway across the sky." },
        { s: 'shadowheart', f: 'happy', t: "When I go home, I'll dance this every full moon. And I'll think of you, Sunshine. Every single one." }
      ] },
      { ifRoute: 'romance', then: [
        { s: 'shadowheart', f: 'blushing', t: "I spent my whole life in the dark. Then I met a girl named after the sun. The gods have a terrible sense of humor." },
        { choose: [
          { t: "(Take her hands and dance.)", notes: 3, then: [
            { n: "They danced in the snow, slowly, badly, close, in the light of the full moon. Shadowheart's forehead came to rest against Solar's halfway through, and they stopped dancing, and just stood there, swaying." },
            { s: 'shadowheart', f: 'blushing', t: "...Sun and moon. It works, doesn't it. Somehow." }
          ] },
          { t: "(Kiss her.)", notes: 3, then: [
            { s: 'shadowheart', f: 'surprised', t: '...!' },
            { s: 'shadowheart', f: 'blushing', t: "...That's not how the dance goes. I'm not complaining." }
          ] }
        ] },
        { n: "The snow kept falling. The moon kept shining. And on the shrine porch, in a pot turned toward the light, a white night orchid bloomed out of season, for no reason anyone could explain." }
      ] }
    ] }
  ]
});
