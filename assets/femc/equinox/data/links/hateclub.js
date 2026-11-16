/* Persona 3: Equinox · The Hate Club · XIII Death (a group link: Junkyu, Jaehyuk, Asahi, Hyunsuk). Link data
   (femc-equinox-game.html). Format: link fields in assets/femc/game/core.js ("Links" header), scene lines in
   assets/femc/game/scene.js.
   Written: rank 1 (after 7/24: they came through on 7/22 at a red light, arrival scene story-act2 'eqx-hate-club', 7/23
   evening, so the day after that; their home is the arcade at Paulownia Mall on Sunday, Tuesday, Friday and Saturday
   evenings, so 7/24 itself, a Saturday). Ranks 2–10 still to write. Shape: the stub fields from
   assets/femc/equinox/data/links.js (members / cast kept). All four speak in every rank. Jihoon is not in this link's
   scenes (he's his own link); they talk about him.
   Shared memory: Solstice's Junkyu link (he asks first, keeps count of her thank-yous, misses Nana; the crew as cameos:
   Asahi says the meanest thing quietly, Hyunsuk laughs at it and wants to be thought the smart one, Jaehyuk is the actual
   smart one and talks with punctuation) and the HOAX epilogue (the séance, Kazuha's 41-minute voice memo to Asahi; Asahi
   once said sorry to Kazuha in Japanese in the library; Nana). HOAX canon: Jihoon's drugs are named, never shown (§0 rule
   6); "Hyunsuk's cousin knows a guy" (7/23). The triangle stays open; nobody here says what Jihoon is to Solar.
   The hook: four boys who came here for nothing and found the one friend they'd been afraid for. The group's ask, unspent:
   stay together, here, where nobody's posting about him.
   Reads: ifEvent eqx-last-grain (7/27 morning).
   Flags this file sets: eqx-hc-plush (Solar takes the white dog plush). Nothing reads it yet. */
(window.FEMC_GAME_LINKS ||= []).push({
  id: 'hateclub', name: 'The Hate Club', short: 'Hate Club', arcana: 'Death', numeral: 'XIII', from: 'Hoax', kind: 'group',
  world: 'H', romance: null, arrives: '7/22', starts: '7/23', lodging: 'guesthouse',
  members: ['junkyu', 'jaehyuk', 'asahi', 'hyunsuk'], cast: { junkyu: 'Junkyu', jaehyuk: 'Jaehyuk', asahi: 'Asahi', hyunsuk: 'Hyunsuk' },
  home: { area: 'mall', spot: 'Arcade', slot: 'evening', days: [0, 2, 5, 6],
          hint: 'Evenings in the arcade at Paulownia Mall, four of them losing at everything, loudly.' },
  approach: "In the back half of Game Panic four boys are losing at four different machines at once, loudly, one of them narrating his own defeat like a nature documentary, and a fifth, very still, is standing in front of the crane machine with his hands in his pockets, watching the claw the way you'd watch a fish.",
  ranks: [
    { after: '7/24', title: '1: the club', place: 'Paulownia Mall · Game Panic', time: 'Evening', music: 'city', scene: [
      { bg: 'gamepanic-inside' },
      { n: "They'd taken the back half of Game Panic again. It had taken them one night to take it the first time, and now it seemed to be theirs by right, the way a coast belongs to the weather: the dance machine, the fighting cabinet, the old shooting game with the plastic guns on cords, and the crane, and the twelve-year-olds who'd had those machines before had simply moved forward a row, without argument, the way you move away from a dog you don't know." },
      { n: "Junkyu saw her first. Junkyu always saw everybody first. He was on the dance machine, losing, and he stopped dancing in the middle of a song, which the machine took personally, and waved both arms over his head." },
      { s: 'junkyu', f: 'happy', t: "SOLAR. Solar's here. Solar came. Guys. Guys, she came on purpose, she wasn't even texted, I didn't text her, did anybody text her?" },
      { s: 'hyunsuk', f: 'neutral', t: "Nobody texted her. She's here by free will. Historic." },
      { s: 'jaehyuk', f: 'neutral', t: "Hello, Solar. It's good to see you. Please excuse Junkyu. He's been like this since Thursday. We think it's the air." },
      { n: "Hyunsuk was at the fighting cabinet, beating a child. Jaehyuk was at the shooting game with one plastic gun held correctly in both hands and the other hanging on its cord, unused, because he'd worked out in three minutes that one gun was more efficient. And Asahi was at the crane machine. Standing in front of it with his hands in his pockets, not playing, watching the claw hang over the heap of plush toys inside, very still, the way he'd been standing on Friday." },
      { s: 'asahi', f: 'neutral', t: "Hi." },
      { s: 'asahi', f: 'neutral', t: "Junkyu cried when you walked in. Just a little. He'll say it was the dance machine." },
      { s: 'junkyu', f: 'flustered', t: "It *was* the dance machine! The dance machine is very emotional! Shut up!" },
      { choose: [
        { t: "I missed you too, Junkyu.", notes: 3, then: [
          { s: 'junkyu', f: 'surprised', t: "...You did?" },
          { s: 'junkyu', f: 'happy', t: "She missed me. Write it down. Jaehyuk, write it down, she said it, it counts." },
          { s: 'jaehyuk', f: 'neutral', t: "I'm not writing it down." },
          { s: 'junkyu', f: 'happy', t: "I'll write it down. I've got a list. I've had a list since winter. That's eight." }
        ] },
        { t: "What's the score?", notes: 2, then: [
          { s: 'hyunsuk', f: 'happy', t: "Me, a hundred. Children of Japan, zero. Jaehyuk, a robot. Junkyu, emotionally compromised. Asahi, unknown, he hasn't played anything." },
          { s: 'asahi', f: 'neutral', t: "I'm playing. I'm playing a long game." }
        ] },
        { t: "(Go and stand next to Asahi at the crane.)", notes: 3, then: [
          { n: "She went and stood beside him. He didn't look at her. They watched the claw together. It hung there over the pile of plush animals in the glass box, motionless, its three thin fingers half open, and nobody had put a coin in." },
          { s: 'asahi', f: 'neutral', t: "...Good. Somebody else is watching it. Now it's not just me being weird." }
        ] }
      ] },
      { n: "They took her round the machines like a visiting dignitary. Hyunsuk beat another child to show her how it was done and then explained, at length, the advanced theory behind it, which was wrong, and Jaehyuk corrected him politely, with references, and Hyunsuk laughed and said *that's what I said* and Jaehyuk said *it is not what you said, I was there*. Junkyu bought her a melon soda without asking and then asked if she wanted a melon soda. Asahi stayed at the crane." },
      { n: "And in between, in the gaps, all four of them kept doing the same thing. They kept looking at the door. Not at her. At the arcade's door, and past it, at the mall, the way you'd look for somebody you'd been told would be along later." },
      { s: 'jaehyuk', f: 'neutral', t: "He's not coming tonight. We know. He said he'd be with Cherry. We're not looking for him. We're just looking." },
      { s: 'hyunsuk', f: 'neutral', t: "Can I ask you something? Like, actually ask? Not a joke. I can do not-a-joke. I've done it before. Twice." },
      { s: 'hyunsuk', f: 'neutral', t: "What's he been like? Here? Since spring? Before we came?" },
      // CG: eqx-the-club — four young men in the back of a neon-lit arcade, one on a dance machine, one at a fighting cabinet, one holding a plastic light gun, one standing very still in front of a crane machine full of plush toys, all four of them turned toward the arcade's entrance as if waiting for someone.
      { choose: [
        { t: "He's been okay. Better than okay, some days.", notes: 3, then: [
          { n: "Junkyu let out a breath like a tire going down. Hyunsuk looked at the ceiling. Jaehyuk took off his glasses and cleaned them, which he did, Solar remembered, when he didn't want anybody to see his face for a second." },
          { s: 'jaehyuk', f: 'neutral', t: "...Thank you. That's all we wanted to know. That's all we came here to know." },
          { s: 'asahi', f: 'neutral', t: "We didn't come here. We fell out of a car." },
          { s: 'jaehyuk', f: 'neutral', t: "It's a figure of speech, Asahi." }
        ] },
        { t: "Ask him.", notes: 2, then: [
          { s: 'hyunsuk', f: 'neutral', t: "We did. He said *fine*. He says fine about everything. He said fine when his arm was broken in second grade." },
          { s: 'junkyu', f: 'sad', t: "He laughed so much on Thursday. On the curb. I've never seen him laugh like that. I didn't know if it was good laughing or the other kind." }
        ] },
        { t: "He's been lonely. He looked for you everywhere.", notes: 3, then: [
          { n: "Nobody said anything for a second. Then Hyunsuk laughed, the laugh he used when Asahi said something mean, but there was nothing mean to laugh at, and the laugh went out of him halfway through like a match in the wind." },
          { s: 'hyunsuk', f: 'sad', t: "...Yeah. Yeah, that tracks. That's him. He'd never say it." },
          { s: 'junkyu', f: 'neutral', t: "We're here now. We're here. We'll be so annoying. He won't have time to be lonely." }
        ] }
      ] },
      { n: "Hyunsuk was quiet for a while after that. He went back to the fighting cabinet and put a coin in and didn't play, just let the character stand there on the screen, breathing its idle animation, while the clock ran down." },
      { s: 'hyunsuk', f: 'neutral', t: "The thing I said. On the roof. About my cousin knowing a guy. And Jaehyuk saying *wonder if there's a guy here*. As a joke." },
      { s: 'jaehyuk', f: 'serious', t: "I've apologized. I've apologized to him twice. He said it was funny. He laughed." },
      { s: 'hyunsuk', f: 'neutral', t: "He laughed. That's what I mean. He always laughs. At home we joke about it because that's what we do. That's how we're allowed to say anything about it at all. The joke's the only door in." },
      { s: 'hyunsuk', f: 'neutral', t: "Here there's no forum. Nobody's posting about him. Nobody's screenshotting anything. We could just... be his friends. Without the joke. Without the whole school watching us do it." },
      { s: 'junkyu', f: 'neutral', t: "At home we're the Hate Club. We named it as a joke. Here we could just be the club." },
      { n: "He said it like it had just occurred to him. It hadn't. Solar could see it in the way all four of them went still at once, the way the girls had gone still in the atrium: a thing they'd all been carrying separately, set down on the floor in the middle of them where they could all see it." },
      { choose: [
        { t: "You can be the club at home too.", notes: 2, then: [
          { s: 'jaehyuk', f: 'neutral', t: "We can. We should. We will." },
          { s: 'asahi', f: 'neutral', t: "We won't. We'll make a joke. It's fine. No one cares." },
          { n: "But he looked at Junkyu when he said *no one cares*, and Junkyu looked back, and it was very clearly, between the two of them, the exact opposite of what it meant." }
        ] },
        { t: "That's for you four to decide.", notes: 3, then: [
          { n: "Jaehyuk looked at her over his glasses, the way he'd look at a well-drafted motion." },
          { s: 'jaehyuk', f: 'neutral', t: "...That's a very council answer. That's a Jungwon answer. I mean that as the highest compliment I have." },
          { s: 'hyunsuk', f: 'neutral', t: "I mean it as an insult. Somebody has to." }
        ] },
        { t: "(Put your hand on Hyunsuk's shoulder.)", notes: 3, then: [
          { n: "She put her hand on his shoulder. He went stiff under it, startled, a boy who touched everybody all the time, punches and headlocks and arms round necks, and was clearly not used to being touched without a joke attached. Then he let his shoulder drop, a centimeter, under her hand." },
          { s: 'hyunsuk', f: 'neutral', t: "...Okay. Okay. Don't make it weird. You're making it weird. Keep doing it." }
        ] }
      ] },
      { place: 'Paulownia Mall · Game Panic', time: 'Night', bg: 'gamepanic-inside', music: 'eerie', soft: true },
      { n: "At a quarter to ten, when the lights at the front went down to tell everyone to go home, Asahi finally put a coin in the crane." },
      { n: "He didn't aim for long. He moved the claw once, left, and once, back, and pressed the button, and it dropped, and closed on the white dog plush in the corner, the small fluffy white one with the black button eyes that had been in the corner since they came, and lifted it, and carried it, swinging, all the way to the chute, and dropped it in. First try." },
      { s: 'junkyu', f: 'surprised', t: "...You've been standing there since Friday! Since *Friday*! You could've done that the whole time!" },
      { s: 'asahi', f: 'neutral', t: "I was waiting for it to be the right time." },
      { n: "He bent and took the dog out of the chute and held it out to Solar. Not looking at her. Looking at the machine." },
      { s: 'asahi', f: 'neutral', t: "It looks like Nana. A bit. Junkyu kept saying. It doesn't. Nana's fatter. But you should have it." },
      { s: 'junkyu', f: 'sad', t: "...I miss Nana so much. I miss her six-thirty walks. I miss her face. I miss her stupid little feet." },
      { choose: [
        { t: "(Take it. Thank him.)", notes: 3, flag: 'eqx-hc-plush', then: [
          { n: "She took it. It was warm from the machine's lights and smelled of new plastic and arcade, and she held it against her chest, and said thank you to Asahi, and he nodded once at the crane machine as if the crane had been thanked." },
          { s: 'junkyu', f: 'happy', t: "That's nine. That's a thank-you. It counts if it's for Asahi. Everything counts tonight." }
        ] },
        { t: "Give it to Junkyu. He needs it more.", notes: 3, then: [
          { n: "Asahi looked at Junkyu. Junkyu looked at the dog. Then Asahi held it out to him instead, without a word, and Junkyu took it with both hands and held it under his chin and his face crumpled up and he turned round and pretended to be very interested in the dance machine." },
          { s: 'hyunsuk', f: 'neutral', t: "He's crying. Junkyu's crying at a dog. Somebody film this." },
          { s: 'jaehyuk', f: 'neutral', t: "Nobody is filming this." }
        ] }
      ] },
      { n: "Then the claw moved again." },
      { n: "Nobody had put a coin in. Asahi's credit had gone. The little screen on the crane said INSERT COIN, blinking. And the claw slid, by itself, left, slowly, and back, slowly, and stopped over the empty corner where the dog had been, and dropped." },
      { n: "It closed on nothing. It came up holding nothing, its three thin fingers clenched tight round empty air, and carried it, very carefully, swinging, all the way across the glass box to the chute, and opened, and let it go." },
      { n: "Nothing fell out of the chute. Asahi crouched and put his hand in anyway. When he took it out, his fingers had a fine white dust on them, like chalk, or flour, from the inside of the flap." },
      { s: 'asahi', f: 'neutral', t: "...It does that. Since Friday. In the corner. It keeps picking up something we can't see and bringing it over here." },
      { s: 'asahi', f: 'neutral', t: "Like it's showing us something. Like a cat with a mouse." },
      { ifEvent: 'eqx-last-grain', then: [
        { n: "He wiped his hand on his jeans, slowly, and kept wiping it after it was clean." },
        { s: 'jaehyuk', f: 'serious', t: "...We were at that well. On the twenty-sixth. All of us. Nobody asked us to come. We just went and stood round it in the dark while you went down. Like we were keeping watch." },
        { s: 'junkyu', f: 'sad', t: "And in the morning, two streets away..." },
        { n: "He didn't finish it. Since the twenty-seventh Junkyu, who ate everybody's leftovers, who ate Hyunsuk's leftovers out of the bin on one documented occasion, hadn't eaten anything at the guesthouse but plain toast. Nobody had said anything about it. All four of them had noticed." }
      ], else: [
        { n: "He wiped his hand on his jeans, and the others watched him do it, and nobody made a joke, which was the first time all night." },
        { s: 'hyunsuk', f: 'neutral', t: "...Okay. Okay, that's a haunted crane. That's fine. Every arcade has one. That's like, a feature." },
        { s: 'jaehyuk', f: 'neutral', t: "It is not a feature." }
      ] },
      { place: 'Paulownia Mall · Atrium', time: 'Night', bg: 'paulownia-mall-night', music: 'tender', soft: true },
      { n: "They walked her to the monorail, all four, because Mitsuru's rule said twos and Junkyu said fours were better than twos the way pizza was better than toast. In the dark atrium, past the shuttered shops, Asahi fell into step beside her at the back, hands in his pockets, and said, to the floor, very quietly so the others wouldn't hear." },
      { s: 'asahi', f: 'neutral', t: "Kazuha's here. Isn't she. The Japanese girl from the library. I saw her at the konbini by the station. She said hi to me in Japanese. Like it was a Tuesday. Like we were at school." },
      { s: 'asahi', f: 'neutral', t: "She wasn't in the car. She wasn't on the curb. Nobody pulled her. How is she here? She just said hi. Like it was normal." },
      { n: "He didn't ask anything. He let it sit there in the dark with them, the way he let everything sit, and Solar thought about four girls in a pile on an atrium floor, three lives each, braided, and a quiet boy who'd once said sorry in the wrong language in a school library and been heard." },
      { s: 'asahi', f: 'neutral', t: "...No one cares. Forget it." },
      { n: "But at the monorail gate, when the others had gone ahead through the barrier arguing about pizza, he looked back once, at the dark mall, at the arcade's dim pink glow on the second floor, with his hand still in his pocket, and his fingers, she saw, were still rubbing together, slowly, as if there were something on them that wouldn't come off." }
    ] }
  ]
});
