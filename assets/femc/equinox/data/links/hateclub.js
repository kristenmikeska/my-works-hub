/* Persona 3: Equinox · The Hate Club · XIII Death (a group link: Junkyu, Jaehyuk, Asahi, Hyunsuk). Link data
   (femc-equinox-game.html). Format: link fields in assets/femc/game/core.js ("Links" header), scene lines in
   assets/femc/game/scene.js.
   Written: rank 1 (after 7/24: they came through on 7/22 at a red light, arrival scene story-act2 'eqx-hate-club', 7/23
   evening, so the day after that; their home is the arcade at Paulownia Mall on Sunday, Tuesday, Friday and Saturday
   evenings, so 7/24 itself, a Saturday). Written: ranks 1–3. Rank 2 '2: four frames' (after 9/3, a Friday, school back;
   Game Panic, the photo booth, the atrium, the monorail): Junkyu's toast now has jam; Hyunsuk's club photo ("THE CLUB", no
   Hate); Hyunsuk's text to his cousin, read and unanswered; Solar deletes the contact / renames it / hands it back; the strip
   shows a white-gloved hand holding the shut curtain open in all four frames (Kat's "photographs that develop wrong");
   Junkyu draws dogs over it; Mrs. Kim greeted Jaehyuk at the konbini (PTA, his mother's knee) [INVENTED]; Jaehyuk warns that
   the four will ask something; Kazuha said good morning to Asahi again. Rank 3 '3: four good boys' (after 10/12, a Tuesday;
   Game Panic in October rain, the guesthouse roof, the dorm corner): the crane is unplugged (OUT OF ORDER; "It keeps doing it
   anyway"); the four mind Cherry's bakery in twos [INVENTED]; ifEvent eqx-1023 with dead.shinjiro (they bow to his chair) /
   else ("three-nil"); a little gloved grandma at the bakery asks Junkyu "you'll all stay together, won't you" and he says yes
   (Mrs. Oka, never named; a townsperson-style yes, nothing reads it); a crane-paper rice cake in his pocket goes down the
   crane's chute and vanishes (white dust); the group's ask ("stay together, here, where nobody's posting about him") recorded:
   tally asks.hateclub yes / no / choose (+ cakes / choose), hidden "Stay. Please." (asked +1, cakes +1, flag
   eqx-asked-hateclub). Junkyu's thank-you count (11 at rank 2 if she says it, 12 at rank 3: "before we're old", the
   time-matters hint); Asahi: "I care", the white won't wash off. Jihoon's day count: ~150 (9/3), 180-something (10/12).
   Ranks 4–10 still to write. Shape: the stub fields from
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
   Flags this file sets: eqx-hc-plush (rank 1: Solar takes the white dog plush), eqx-hc-cousin (rank 2: Solar deletes Hyunsuk's
   cousin's number), eqx-hc-strip (rank 2: she helps draw over the last frame, keeps it), eqx-asked-hateclub (rank 3, hidden
   ask; not yet in story-act4.js's ASKED list). Nothing reads the cosmetic ones yet. Tallies: asks.hateclub, cakes, choose,
   asked (rank 3). */
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
    ] },
    { after: '9/3', title: '2: four frames', place: 'Paulownia Mall · Game Panic', time: 'Evening', music: 'city', scene: [
      { bg: 'gamepanic-inside' },
      { n: "School had started again on Wednesday, and the heat hadn't noticed. It sat over Port Island like a lid on a pot, and Paulownia Mall's air conditioning had given up trying to fight it and simply roared, so that walking in from the street was like walking into a fridge with the door held open, and Game Panic, in the middle of it, was the one warm place, hot plastic and fried batter and a hundred machines breathing out their little fans. Solar came in in her uniform with her blazer over her arm and the back of her shirt stuck to her." },
      { n: "They had the back half. Of course they did. Hyunsuk was at the fighting cabinet, Jaehyuk was at the shooting game with his one gun, Asahi was in front of the crane with his hands in his pockets, and Junkyu was sitting on the bench between them all eating a slice of toast." },
      { n: "It had jam on it. Strawberry. A thin, careful layer, spread right to the corners." },
      { s: 'junkyu', f: 'happy', t: "Don't. Don't say anything. I know. I know. It's jam. I'm working up to it." },
      { s: 'jaehyuk', f: 'neutral', t: "It's the first condiment since July. We had a short meeting about it. There were minutes. Hyunsuk wanted a parade; the motion failed." },
      { s: 'hyunsuk', f: 'happy', t: "I still think there should be a parade. Small one. Just us. Down the escalator." },
      { choose: [
        { t: "I'm proud of you, Junkyu. Jam.", notes: 3, then: [
          { s: 'junkyu', f: 'flustered', t: "Okay, that's— you can't just say *proud* in an arcade. People are looking." },
          { s: 'asahi', f: 'neutral', t: "Nobody's looking. He's going to cry into the jam." },
          { s: 'junkyu', f: 'happy', t: "I'm not going to cry into the jam! Say thank you. Say thank you for something. I want to put it next to *proud* on the list." }
        ] },
        { t: "Next week, butter.", notes: 2, then: [
          { s: 'junkyu', f: 'neutral', t: "Next week, butter. Then the week after, I don't know, a whole egg. One thing at a time. Jaehyuk made a chart." },
          { s: 'jaehyuk', f: 'neutral', t: "It's a timeline. A chart has axes." }
        ] },
        { t: "(Sit down next to him and steal the crust.)", notes: 3, then: [
          { n: "She sat down beside him and took the crust off the edge of his toast, the way she'd have taken it at a lunch table at Hanlim, and ate it, and he watched her do it with his mouth open in theatrical outrage, and then laughed, and gave her the other crust too without being asked." },
          { s: 'junkyu', f: 'happy', t: "That's how I know you're really here. You always stole crusts. Every lunch, first year. Nobody else would dare. I used to cut mine off and leave them on the edge of the tray for you like a tax." },
          { s: 'jaehyuk', f: 'neutral', t: "He did. I have notes." }
        ] }
      ] },
      { n: "Hyunsuk let his character die on the fighting cabinet and came over and sat on the back of the bench, his feet on the seat, and looked down at them all with the expression he wore when he was about to say something he'd been rehearsing." },
      { s: 'hyunsuk', f: 'neutral', t: "Okay. I have a proposal. Not a joke. I'm three for three on not-jokes this month and I'd like to keep the streak." },
      { s: 'hyunsuk', f: 'neutral', t: "We should do a photo. A club photo. In the sticker booth, by the escalator." },
      { s: 'hyunsuk', f: 'serious', t: "At home every photo of us is in a thread. Somebody took it, somebody posted it, somebody circled Jihoon in red. I looked last year. There's eleven pictures of us online and I didn't take one of them. I want one that's just ours. That nobody circles anything on." },
      { n: "Nobody said anything for a second. Then Asahi took his hands out of his pockets, and walked away from the crane, which none of them had ever seen him do voluntarily, and stood at the end of the bench, and waited." },
      { s: 'asahi', f: 'neutral', t: "...Fine. One. No one cares." },
      { place: 'Paulownia Mall · Photo Booth', time: 'Evening', bg: 'paulownia-photo-booth', music: 'joy', soft: true },
      { n: "The booth was built for three girls and a lot of optimism. Five of them did not fit. They fitted anyway, the way people fit into a lift in an earthquake, Jaehyuk at the back because he was tallest and Asahi in front of him because he was smallest, Hyunsuk and Junkyu either side and Solar pressed into the middle with somebody's elbow in her ribs and somebody's hair in her mouth, and Hyunsuk reached back with his foot and dragged the plastic curtain shut along its rail, rings rattling, all the way, so that the pink light inside went pinker." },
      { n: "The machine said something in a voice so high and bright it was nearly a whistle. Asahi translated it, flat." },
      { s: 'asahi', f: 'neutral', t: "It says *you're all so cute*. It says it to everyone. It's lying." },
      { s: 'jaehyuk', f: 'neutral', t: "It has no way of knowing. It hasn't seen us. The camera's not on yet." },
      { s: 'asahi', f: 'neutral', t: "That's what I said. It's lying." },
      { choose: [
        { t: "(Do the peace sign. Commit to it.)", notes: 2, then: [
          { n: "She did the peace sign, both hands, by her face, the way girls in this booth had done it ten thousand times, and the boys saw her do it and all four, without discussing it, did it too, and when the flash went Hyunsuk was laughing so hard his eyes were shut." }
        ] },
        { t: "(Give Jaehyuk bunny ears.)", notes: 3, then: [
          { n: "She reached up behind her and put two fingers over Jaehyuk's head, and he felt it, and didn't move, and looked straight into the lens over his glasses with the dignity of a man being knighted, and the flash went." },
          { s: 'jaehyuk', f: 'neutral', t: "I'll allow it. I'd like it noted that I allowed it." }
        ] },
        { t: "(Pull Asahi into the middle.)", notes: 3, then: [
          { n: "She swapped with him. It took some doing. He ended up in the middle with all four of them leaning on him, in the pink light, with his hands still in his pockets and his face perfectly blank, and in the last frame, when the countdown got to one, the corner of his mouth went up. Just the corner. Just once." },
          { s: 'junkyu', f: 'surprised', t: "Did he— Asahi. Asahi, did you just—" },
          { s: 'asahi', f: 'neutral', t: "No." }
        ] }
      ] },
      { n: "Four flashes. Four frames. Then the decorating screen, where you could draw on them with a plastic pen, and Hyunsuk wanted lightning and Jaehyuk wanted nothing and Asahi wanted to put a small dog in the corner of every frame, and in the end it was Junkyu who took the pen and wrote across the top of all four, in his big round hand, in English, two words." },
      { n: "*THE CLUB.*" },
      { s: 'hyunsuk', f: 'neutral', t: "...Not the Hate Club?" },
      { s: 'junkyu', f: 'neutral', t: "Just the club. We said. We said here we'd be just the club." },
      { n: "Hyunsuk looked at the screen. Then he reached over and took the pen out of Junkyu's hand and drew, very small, very carefully, under the words, a heart. The kind a little kid draws. Lopsided. And gave the pen back, and didn't look at anybody." },
      { place: 'Paulownia Mall · Game Panic', time: 'Evening', bg: 'gamepanic-inside', music: 'city', soft: true },
      { n: "The strip took four minutes to print. Junkyu stood at the slot like a man waiting for a baby to be born. Jaehyuk went to buy everyone melon soda. Asahi went back to the crane. Hyunsuk sat on the bench beside Solar and took out his phone and held it in both hands for a while, not looking at her." },
      { s: 'hyunsuk', f: 'neutral', t: "Can I show you something? Number four. Four not-jokes. That's a record. Nobody's going to believe me." },
      { n: "It was a message thread. One message in it, his, a little blue bubble on its own at the bottom of the screen. Under it, in the small gray letters, *Read*, and a time that would have been two in the morning, in Seoul, three weeks ago. Nothing after it. Since May everybody's phones had done that, faintly, now and then: messages went out from here to home and came back read and never answered, like letters through a door with nobody behind it but a hand." },
      { n: "*if anyone asks where jihoon is. you dont know any guy. you never did. ok?*" },
      { n: "The contact at the top of the thread said *cousin (guy)*. With the brackets. Like a joke." },
      { s: 'hyunsuk', f: 'neutral', t: "He read it. Two in the morning. He always reads at two in the morning, he's that kind of person, he works nights at a— it doesn't matter. He read it. He didn't say anything. He always says something. He'd have said *lol* at least." },
      { s: 'hyunsuk', f: 'serious', t: "I want to delete him. The number. And I can't. He's my cousin. He taught me to ride a bike. He gave me my first phone. He's not a bad guy, he just knows guys, and I made it the funniest thing about him, for years, because that's how we got to say anything about any of it at all." },
      { s: 'hyunsuk', f: 'neutral', t: "Do it for me. Please. You've got steady hands. I'll look at the ceiling." },
      { n: "He held the phone out to her. He looked at the ceiling. Behind them, coming back with five sodas held against his chest, Jaehyuk had stopped walking." },
      { choose: [
        { t: "(Delete it.)", notes: 3, flag: 'eqx-hc-cousin', then: [
          { n: "She took the phone. It was hot from his hands. She found the contact and the little red word at the bottom and pressed it, and the phone asked if she was sure, the way phones do, and she was, and pressed it again, and *cousin (guy)* went away, and the thread went with it, and the screen showed a list of other people's names." },
          { s: 'hyunsuk', f: 'neutral', t: "...Okay. Okay. Now if I want it I have to ask my mom. And my mom would ask why. And I'd have to tell my mom why." },
          { s: 'hyunsuk', f: 'neutral', t: "That's good. That's a good wall. Thanks." },
          { n: "Jaehyuk put a melon soda down on the bench beside Hyunsuk's knee, very gently, as if it were the last piece of evidence in a long trial, and went to give Asahi his." }
        ] },
        { t: "Keep the number. Lose the joke.", notes: 3, then: [
          { s: 'hyunsuk', f: 'neutral', t: "...What?" },
          { s: 'solar', f: 'neutral', t: "He's your cousin. He taught you to ride a bike. Save him as his name." },
          { n: "Hyunsuk looked at her for a long time. Then he took the phone back and went into the contact and held down on *cousin (guy)* until it let him change it, and deleted the brackets, and the word inside them, and the word *cousin*, and typed a name instead, a plain Korean name, three syllables, and saved it." },
          { s: 'hyunsuk', f: 'neutral', t: "That's harder. That's so much harder. I hate it. Now he's just a guy I know." },
          { s: 'jaehyuk', f: 'neutral', t: "He was always just a guy you know. That was the problem with the joke." }
        ] },
        { t: "(Hand it back. It's his to do.)", notes: 2, then: [
          { n: "She put the phone back in his hand and closed his fingers over it. He looked at it for a long time, the blue bubble, the gray *Read*, the brackets. Then he put it in his pocket." },
          { s: 'hyunsuk', f: 'neutral', t: "...Not tonight. But I'm thinking about it. I'm actually thinking about it. Without the joke. That's new. That's like, a muscle." }
        ] }
      ] },
      { n: "The strip came out of the slot with a soft electric whir. Junkyu caught it, and took it to the little counter by the booth where there were blunt scissors on a chain, and began to cut it into four, carefully, his tongue between his teeth, the way he'd colored in at six." },
      { n: "He stopped cutting after the first frame. Solar saw him stop. She saw his back go still, his elbows, his hands. He stood there with the little scissors open, looking down." },
      { n: "Then he picked up the silver pen from the cup on the counter and began to draw on the photo, fast, small, with his body between it and the rest of the arcade." },
      { n: "She went over. He didn't stop her. He tilted the strip, a little, so she could see, without looking at her." },
      { n: "Four frames. The five of them, pink, squashed, laughing, *THE CLUB* across the top in his round hand, Hyunsuk's lopsided heart. And behind them, in every frame, at the left edge, the booth's curtain. Hyunsuk had pulled it shut. She'd heard the rings go all the way along the rail. In the photographs it was open. A hand's width. And holding it open, at the edge, in the same place in all four frames, four fingers in a white cotton glove, curled round the plastic, patient, the way you'd hold a curtain aside to watch children in a school play." },
      { n: "Junkyu had drawn a dog over three of them. Small and silver and fluffy, Nana-shaped, with dots for eyes, sitting exactly where the hand was. He was drawing the fourth now. His hand was shaking. The dog's ear came out wrong and he drew over it again." },
      { s: 'junkyu', f: 'neutral', t: "...Don't tell them. Please. Hyunsuk's having such a good week. He's doing his not-jokes. He drew a heart. Jihoon's at a hundred and fifty something and he made it a song. Don't." },
      // CG: eqx-four-frames — a purikura photo strip of four frames lying on a little counter under a pink light, five young people squashed together laughing in each, the words THE CLUB across the top, and at the left edge of every frame a curtain held open a hand's width by white-gloved fingers, three of them half-hidden under small silver hand-drawn dogs.
      { choose: [
        { t: "(Take the other pen. Help him draw over the last one.)", notes: 3, flag: 'eqx-hc-strip', then: [
          { n: "She took the pink pen from the cup and drew the dog's other ear, and its tail, and a little bone for it, over the white fingers, until you couldn't see anything at the edge of the fourth frame but a silver dog with a bone looking pleased with itself. Junkyu watched her do it. His hand stopped shaking." },
          { s: 'junkyu', f: 'neutral', t: "...You've got to say thank you. For the dog. I need it on the list. It doesn't count if I say it." },
          { s: 'solar', f: 'neutral', t: "Thank you for the dog, Junkyu." },
          { s: 'junkyu', f: 'sad', t: "That's eleven. Since winter. I'm going to get to a hundred. I've decided. Don't stop." },
          { n: "He cut the frames apart and gave her the one with the bone, and put the other three in the inside pocket of his jacket, flat, against his chest." }
        ] },
        { t: "They'd want to know, Junkyu.", notes: 2, then: [
          { s: 'junkyu', f: 'neutral', t: "I know they would. That's why." },
          { n: "But Jaehyuk was already behind them. He'd come back for the straws. He stood looking over Junkyu's shoulder at the strip for a long time, at the dogs, at the one frame not covered yet, at the four white fingers on the curtain, without saying anything at all. Then he took off his glasses, and cleaned them on his shirt, and put them back on, and looked again." },
          { s: 'jaehyuk', f: 'serious', t: "...Four frames. Same place. Same grip. Somebody stood outside for the whole thing and nobody felt the draft." },
          { s: 'jaehyuk', f: 'neutral', t: "Finish the dog, Junkyu. Thank you for not telling me. I'll pretend you didn't. I'm going to be very good at pretending." }
        ] },
        { t: "(Take the strip. Look at the fingers closer.)", notes: 2, then: [
          { n: "She took it from him and held it under the counter's light. Close. The glove was cotton, thin, a little loose at the fingertips, the kind you'd wear to handle something you didn't want to mark. At the cuff, where it met a wrist you couldn't see, there was a pale smudge on the photo, like a thumbprint on the lens, or a dusting of something white." },
          { n: "She gave it back. Junkyu took it without a word and drew a dog on the last one so hard the pen went through the shiny paper, and then cut the strip apart, and put all four frames in his inside pocket, flat, against his chest, and zipped it." }
        ] }
      ] },
      { place: 'Paulownia Mall · Atrium', time: 'Night', bg: 'paulownia-mall-night', music: 'tender', soft: true },
      { n: "They walked her to the monorail in fours. The mall was closing round them shop by shop, shutters coming down with long tired rattles, the fountain in the atrium switched off and its water lying flat and black and full of the ceiling lights. Hyunsuk and Junkyu went ahead arguing about whether you could make a parade with two people. Asahi walked at the back. Jaehyuk fell into step beside her, his hands in his pockets, and walked a while without speaking, which in Jaehyuk was a kind of throat-clearing." },
      { s: 'jaehyuk', f: 'neutral', t: "Your mother said good evening to me. On Tuesday. In the konbini by the station. Your Hanlim mother, I mean; I'm being precise." },
      { s: 'jaehyuk', f: 'neutral', t: "She called me by my full name. She asked after my mother's knee. They were on the PTA together in middle school; she remembered the knee. It was the most normal thing that's happened to me since July. I stood in the frozen aisle afterwards for some time." },
      { s: 'jaehyuk', f: 'serious', t: "I've also been doing some arithmetic. I want to warn you, because it's only fair." },
      { s: 'jaehyuk', f: 'neutral', t: "At home, Jihoon's day count is a forum post. Somebody updates it. With guesses. Here it's a song with a bridge, and four people who sing it badly, and nobody's updating anything. That's the whole sum. I've run it several ways. It keeps coming out the same." },
      { s: 'jaehyuk', f: 'neutral', t: "We're going to ask you something. Soon. Not tonight. All four of us. I wanted you to have time to think about it before we do it badly." },
      { choose: [
        { t: "Ask me when you're ready. I'll be here.", notes: 2, then: [
          { s: 'jaehyuk', f: 'neutral', t: "...That's an answer to a different question. I'll note it anyway." }
        ] },
        { t: "Ask him first. Jihoon.", notes: 3, then: [
          { n: "Jaehyuk walked three whole steps without saying anything." },
          { s: 'jaehyuk', f: 'neutral', t: "...That's a very good point. That's a point I didn't put in the sum. I'm annoyed. I'll revise." }
        ] },
        { t: "(Bump his shoulder with yours.)", notes: 2, then: [
          { n: "She bumped his shoulder with hers, and he swayed with it, a little, like a tall tree, and came back, and didn't say anything, and for the rest of the way to the monorail he walked half a step closer than he had." }
        ] }
      ] },
      { n: "At the monorail gate the others went through the barrier ahead. Asahi stopped beside her at the machine, putting coins in one at a time, slowly, the way he put them in the crane." },
      { s: 'asahi', f: 'neutral', t: "...Kazuha said good morning to me again. Yesterday. In Japanese. By the station. I said it back. That's twice." },
      { s: 'asahi', f: 'neutral', t: "No one cares. I just. I'm counting. Junkyu made me want to count things." },
      { n: "He went through. On the platform the four of them stood in a row waiting for her, and the train came in, white and humming and lit, and in its dark windows, as it slowed, she saw the five of them reflected, Hyunsuk and Junkyu and Jaehyuk and Asahi and herself at the gate, and she looked, she couldn't help it, at the edge of every window as it slid past, at the place where a hand might hold a curtain; and there was nothing there. Just the dark, and the platform lights, and Junkyu waving at her with both arms through the glass, from the shoulder, as if he hadn't seen her in years." }
    ] },
    { after: '10/12', title: '3: four good boys', place: 'Paulownia Mall · Game Panic', time: 'Evening', music: 'rain', scene: [
      { bg: 'gamepanic-inside' },
      { n: "October came in on a typhoon and didn't leave. It rained for three days without stopping, a gray heavy rain that came off the bay sideways and found its way down the back of every collar, and when it stopped, it only stopped long enough to gather itself. Paulownia Mall was half empty at seven in the evening. Since the bridge a lot of people in the town had found reasons to be home before dark, and nobody said the reason out loud, and the shops on the top floor had started closing at eight." },
      { n: "Game Panic was quiet. Not empty; quiet, which was worse. The machines still sang to themselves in their little loops, the dance machine still flashed its arrows at nobody, but there were no twelve-year-olds, and nobody was losing at anything loudly." },
      { n: "The crane machine by the back wall was dark. Somebody had unplugged it and taped a piece of paper to the glass in the shop's careful handwriting: OUT OF ORDER. SORRY. Under it, in a different pen, smaller, someone had added a line in Japanese that Asahi had read out to them on the first night it went up, and then wouldn't read again." },
      { n: "*It keeps doing it anyway.*" },
      { n: "The four of them were on the bench in a row, not playing. Junkyu had a paper bag from Cherry's bakery on his knee. Hyunsuk had his feet up on the fighting cabinet's stool. Jaehyuk had a book he wasn't reading. Asahi was at the end, nearest the crane, with his hands in his pockets, watching it, the way you'd sit by the bed of somebody sleeping." },
      { s: 'junkyu', f: 'neutral', t: "We're not losing at anything tonight. We're just sitting. It's a new game." },
      { s: 'hyunsuk', f: 'neutral', t: "It's called October. Nobody wins. Hi, Solar." },
      { n: "They moved up without being asked. They'd been doing that since the bridge; doing things without being asked. Walking everybody everywhere in fours. Sitting on the boarding-house wall in the evenings when the fathers came out to smoke, not saying anything, just there. Minding the bakery for Cherry after school so she could sleep for an hour in the back on the flour sacks, two of them at the counter and two in the back, always, and selling melon bread to old ladies in very bad Japanese, and giving the change wrong, and making it up out of their own pockets." },
      { ifEvent: 'eqx-1023', then: [
        { ifFlag: 'dead.shinjiro', then: [
          { n: "Since the full moon they'd been quieter still. They'd come to the dorm the morning after, all four, in the cleanest clothes they had, and stood in the hall outside the dining room, not coming in, and Junkyu had put a paper bag of melon bread on the counter beside the nine bowls without a word, and Asahi had bowed to the chair by the kitchen door, deeply, from the waist, the way you bow at a grave, and none of them had known him well, and all of them had eaten his stew." }
        ], else: [
          { n: "Since the full moon they'd been a little louder, like people who'd been holding their breath. The fathers had come back up out of the Well. All three. Hyunsuk had said it at breakfast like a football score, *three-nil*, and nobody had laughed, and then everybody had." }
        ] }
      ] },
      { choose: [
        { t: "How's Cherry?", notes: 3, then: [
          { s: 'jaehyuk', f: 'neutral', t: "Tired. Very good at bread. Better than the old man; she'd kill us for saying it. She counts the cream buns out loud. Twice. Then she counts us." },
          { s: 'junkyu', f: 'neutral', t: "She made Jihoon a cake for no reason on Sunday. Just a Sunday cake. He ate it standing up at the counter and didn't do the bit once. Not once. We all just watched him eat a cake." }
        ] },
        { t: "How are you four?", notes: 3, then: [
          { n: "They looked at each other. It was clearly the first time anybody had asked, and none of them knew who was supposed to answer." },
          { s: 'asahi', f: 'neutral', t: "...Fine. No one cares." },
          { s: 'hyunsuk', f: 'neutral', t: "He means *bad*. We all mean bad. Thanks for asking though. That's— yeah. Thanks." }
        ] },
        { t: "(Sit down next to Asahi. Watch the crane with him.)", notes: 2, then: [
          { n: "She sat at the end beside him. The crane was dark, its glass gray, the plush animals inside it heaped in the gloom like laundry. The claw hung over them, three thin fingers half open, unplugged." },
          { s: 'asahi', f: 'neutral', t: "It moved on Tuesday. At closing. With the plug out. I was the only one who saw. I didn't tell them. I'm telling you." }
        ] }
      ] },
      { n: "Junkyu had been holding the bakery bag in both hands on his knee the whole time. Now he opened it, and didn't take anything out, and closed it again, and folded the top over twice." },
      { s: 'junkyu', f: 'neutral', t: "Can I tell you a nice thing that happened? It's nice. I want you to tell me it's nice." },
      { s: 'junkyu', f: 'neutral', t: "Thursday. Me and Asahi had the bakery. Asahi was in the back doing the trays and I was on the counter, and a lady came in. A little old lady. Gray hair, a cardigan, little white gloves, cotton ones, like for church. She didn't buy anything. She just looked at the cream buns for a long time, and smiled, and said Cherry's bread was lovely. In Korean. Really good Korean. Like a grandma's." },
      { s: 'junkyu', f: 'neutral', t: "And she knew my name. She said, you're Junkyu, aren't you. You're the ones who look after him. The Park boy." },
      { n: "Hyunsuk's feet came down off the stool. Jaehyuk closed his book." },
      { s: 'junkyu', f: 'neutral', t: "She said, *he's so well here, isn't he*. She said, *four good boys*. She said, *you'll keep him here, won't you. You'll all stay together. It's so much easier to stay, child.*" },
      { s: 'junkyu', f: 'sad', t: "And I said yes. I said yes ma'am. You say yes to grandmas. It's like a law. I didn't even think about it." },
      { n: "Nobody said anything. The dance machine ran through its arrows for nobody, bright, cheerful, in the empty middle of the arcade." },
      { s: 'asahi', f: 'neutral', t: "...I heard her. From the back. Through the door." },
      { s: 'asahi', f: 'neutral', t: "She knocked on the counter before she went. On the glass. Twice. Like a door. Then she waited, like somebody was going to say *come in*. Then she went." },
      { s: 'junkyu', f: 'neutral', t: "And when I got back to the guesthouse there was this. In my jacket. The inside pocket. I didn't put it there." },
      { n: "He took it out of the bakery bag. He'd put it in the bag, Solar understood, so that he wouldn't have to carry it against his chest. A rice cake. Small and round and white, wrapped in a square of paper printed with tiny cranes, folded at the corners the way you'd fold a present for a child." },
      { n: "Junkyu, who had eaten everybody's leftovers in two schools, who had once eaten Hyunsuk's out of a bin, who had eaten nothing but plain toast since July and had only got as far as jam, held it out on his flat palm and looked at it as if it might move." },
      { s: 'junkyu', f: 'sad', t: "I haven't eaten it. I want you to know I haven't eaten it. I want to so much. That's the weird part. I haven't wanted anything since July and I want this so much my teeth hurt." },
      { choose: [
        { t: "(Take it out of his hand.)", notes: 3, then: [
          { n: "She took it. It was warm. Not from his hand; warmer than that. Warm the way bread is warm when it's just come out, and soft, giving under her fingers like a cheek, and through the paper it smelled faintly sweet, at the back, the way a warm room smells when you come in from the cold." },
          { n: "Junkyu let it go. His hand stayed out, open, for a second after, as if he were still holding it." }
        ] },
        { t: "Don't eat it. Don't ever eat one. Promise me.", notes: 3, then: [
          { s: 'junkyu', f: 'neutral', t: "...I promise. I promise. Okay. Why are you saying it like that. Why is your face doing that." },
          { s: 'jaehyuk', f: 'serious', t: "Junkyu. Just promise." },
          { s: 'junkyu', f: 'sad', t: "I promised! I said it twice! That counts double!" }
        ] },
        { t: "(Look at Asahi.)", notes: 2, then: [
          { n: "She looked at Asahi. He'd already got up. He held his hand out to Junkyu without a word, and Junkyu put the rice cake in it, and Asahi looked at it on his palm for a moment with no expression at all, the way he'd looked at the claw." }
        ] }
      ] },
      { n: "It was Asahi who took it to the crane, in the end. He walked over to the dark machine and crouched by the prize chute and pushed the little plastic flap in with two fingers and put the rice cake through, onto the shelf inside, the place where the prizes fell, and let the flap swing shut." },
      { n: "They all heard it land. A soft sound. Then Asahi pushed the flap in again and put his hand inside, and felt around, and took his hand out." },
      { n: "There was nothing in it. The chute was empty. His fingers were white to the second knuckle, a fine pale dust, finer than chalk." },
      { n: "Above him, in the dark glass, with the plug lying on the floor beside the machine, the claw twitched. Once. Its three thin fingers closed a little, the way a hand closes in sleep." },
      { s: 'hyunsuk', f: 'neutral', t: "...Okay. Roof. Everybody. I need air that isn't this air." },
      { place: 'Kirijo Guesthouse · Roof', time: 'Night', bg: 'kirijo-guesthouse-roof-night', music: 'night', soft: true },
      { n: "The rain had stopped for one of its breaths. The guesthouse roof was wet and shining under the one bulb by the stairwell door, puddles standing on the concrete with the low clouds in them, orange from the town, and the water tank dripping, and the whole of Iwatodai below them lit and wet and very quiet, the river a black ribbon through it with the bridge's lamps at the far end. It was nine. Cherry's rule said off the roof by eleven-thirty. They had time." },
      { n: "They sat on the low concrete base of the water tank in a row, the four of them, and Solar on the upturned crate opposite, as if she'd been called in to see a committee. Hyunsuk had his hands between his knees. He looked at the puddles for a long time before he started." },
      { s: 'hyunsuk', f: 'neutral', t: "Not-joke number five. I'm going to do it properly. I've been practicing on Asahi." },
      { s: 'asahi', f: 'neutral', t: "He has. It was bad." },
      { s: 'hyunsuk', f: 'serious', t: "She was creepy. The grandma. I'm not stupid. Junkyu's not stupid. We all heard Haechan's tape in July. We all know which way the coffins face." },
      { s: 'hyunsuk', f: 'serious', t: "And she was right. That's the thing. That's what I can't get past. She was creepy and she was *right*." },
      { s: 'jaehyuk', f: 'neutral', t: "At home there's a thread. You know there's a thread. Four hundred and something replies when we left. Where is Park Jihoon. Rehab. Jail. Dead. Somebody's aunt saw him in Busan. Somebody posts a photo of a blurry boy at a bus stop and circles him in red and fifty people agree it's him." },
      { s: 'jaehyuk', f: 'neutral', t: "We go home, he goes back into the thread. He walks in the school gate and four hundred people already know how his day is going to go." },
      { s: 'junkyu', f: 'neutral', t: "Here he's at a hundred and eighty-something. He made it a song. Here he ate a whole cake on a Sunday standing up and nobody wrote it down." },
      { s: 'asahi', f: 'neutral', t: "No one here cares. That's the good thing. For once that's the good thing." },
      { s: 'asahi', f: 'neutral', t: "We'd stay. If he stayed. We'd stay with him. That's all we came for. We fell out of a car for it." },
      { n: "They were all looking at her now. Four faces in a row in the wet orange light. She knew the look. She'd seen it on forty faces in a lounge in July, on a pier in August: people waiting for her to say the one thing that would make it all right, the thing they needed. She knew exactly what they needed. She always had." },
      { s: 'hyunsuk', f: 'neutral', t: "So tell us. You know him. You know him better than any of us now, maybe. Should we? Stay together. Here. All five of us, where nobody's posting about him." },
      { s: 'junkyu', f: 'neutral', t: "Just say it. Whatever it is. We'll do it. You're the one who knows." },
      // CG: eqx-four-good-boys — four young men sitting in a row on the wet concrete base of a rooftop water tank at night after rain, puddles full of orange cloud at their feet, the lit town and a dark river below, all four looking at a girl seated on a crate opposite them, one with white dust on his fingers.
      { choose: [
        { t: "That's yours to choose. Yours, and his. Not mine. Not hers.", notes: 2, tally: { choose: 1, 'asks.hateclub': 'choose' }, then: [
          { n: "Nobody said anything for a long time. The water tank dripped. Far off over the river a train went across the bridge, a line of lit windows, and was gone." },
          { s: 'jaehyuk', f: 'neutral', t: "...That's the Jungwon answer. I'd know it anywhere. I'm starting to think it isn't an accident." },
          { s: 'hyunsuk', f: 'sad', t: "I hate it. I hate it so much. I asked you so nicely. I did five not-jokes for that." },
          { s: 'hyunsuk', f: 'neutral', t: "...It's the right one. Isn't it. Ugh. It's the right one." },
          { s: 'asahi', f: 'neutral', t: "She said *not hers*. She means the grandma. She said it on purpose." },
          { n: "The four of them looked at each other along the row. Something went between them, the way it went between them in the arcade when Jaehyuk put his hand over Hyunsuk's mouth: fast, practiced, a whole meeting in a second." },
          { s: 'junkyu', f: 'neutral', t: "...Then we ask him. Jihoon. Like you said before. And whatever he says, that's what we do. Not because a grandma said. Not because you said. Because he did." },
          { s: 'jaehyuk', f: 'neutral', t: "Seconded. Carried. I'm writing it down." }
        ] },
        { t: "Stay. All of you, together. Nobody posts about him here.", notes: 3, tally: { cakes: 1, 'asks.hateclub': 'yes' }, then: [
          { n: "She said it. It came out warm and steady and exactly right, and she watched it land, four times, down the row." },
          { n: "Junkyu put his face in his hands. Hyunsuk laughed, a real laugh, the one with nothing under it, and threw his arm round Jaehyuk's neck, and Jaehyuk let him. They were all lighter. You could see it, the way you can see a tent go up when the wind gets under it." },
          { s: 'junkyu', f: 'sad', t: "...Okay. Okay. We stay. Together. She said. Solar said." },
          { n: "Asahi didn't laugh. He didn't put his face in his hands. He was looking past her, over the edge of the roof, at the town, down the hill to where the river was, and he was rubbing his fingers together, slowly, the white still in the creases of them." },
          { n: "And Solar felt it go out of her as she said it. The thing she always felt and nobody ever saw. Small and warm, from under her ribs, given, gone, and the roof very slightly colder after." }
        ] },
        { t: "Stay. Please. He needs you here. I need you here.", notes: 3, tally: { asked: 1, cakes: 1, 'asks.hateclub': 'yes' }, flag: 'eqx-asked-hateclub', then: [
          { n: "Jaehyuk went very still. He took his glasses off. He didn't clean them; he just held them." },
          { s: 'jaehyuk', f: 'neutral', t: "...You asked. You don't ask people things. I've watched you since first year. You never ask anybody for anything." },
          { s: 'jaehyuk', f: 'neutral', t: "Okay. Okay. Then we're staying. Obviously. If you asked." },
          { s: 'junkyu', f: 'happy', t: "She said please. Did everybody hear? She said please. That goes on the list. That's a different list. That's a new list." },
          { n: "They were lighter, all of them. Hyunsuk was grinning at the puddles. Only Asahi was looking at her, quietly, the way he'd looked at the claw, as if she'd confirmed something." },
          { n: "And she felt it go. Warm and small, from under her ribs, given, gone. Nobody saw. They never did." }
        ] },
        { t: "You'll go home. With him. And you'll be the club there too. Without the joke.", notes: 2, tally: { 'asks.hateclub': 'no' }, then: [
          { s: 'hyunsuk', f: 'neutral', t: "...Yeah. Yeah, okay. Ow." },
          { s: 'jaehyuk', f: 'neutral', t: "That's a motion I'd second. I'd hate it. I'd second it." },
          { n: "Junkyu didn't say anything. He looked at his hands, at the place where the rice cake had been, for a long time. Then he nodded, slowly, as if he'd been told something about the weather." },
          { s: 'junkyu', f: 'sad', t: "...At home I'll still do the thread thing. Reading it. At night. Every night. I know I will." },
          { s: 'asahi', f: 'neutral', t: "Then I'll take your phone at night. I'll sleep on it. No one cares." },
          { n: "He said it to the puddles. Junkyu looked at him along the row. It was very clearly, between the two of them, the exact opposite of what it meant." }
        ] }
      ] },
      { n: "At half past ten the rain came back, softly first, rings opening in all the puddles at once, and Jaehyuk stood up and said *motion to adjourn* and nobody objected. They went down the wet stairs in a line, Hyunsuk at the front announcing every step like a lift, and at the bottom, in the guesthouse's back hall, Junkyu caught her sleeve." },
      { s: 'junkyu', f: 'neutral', t: "Say thank you for something. Anything. For the roof." },
      { s: 'solar', f: 'neutral', t: "Thank you for the roof, Junkyu." },
      { s: 'junkyu', f: 'happy', t: "That's twelve. I'm going to get to a hundred. I told you. Don't stop, okay? Don't stop before I get there." },
      { s: 'solar', f: 'neutral', t: "Before what?" },
      { s: 'junkyu', f: 'neutral', t: "...Before nothing. Before we're old. Go home, it's raining." },
      { place: 'Iwatodai · Station Road', time: 'Night', bg: 'iwatodai-strip-rain', music: 'rain', soft: true },
      { n: "They walked her home in fours, under two umbrellas, which didn't work. At the dorm corner the others went on ahead to the gate, arguing about whose umbrella it was, and Asahi stopped under the streetlamp beside her with his hands in his pockets, the rain coming down between them in the orange light in long straight lines." },
      { s: 'asahi', f: 'neutral', t: "...I care." },
      { n: "He said it to the lamp post. Very quietly. As if it had cost him something to get it all the way up." },
      { s: 'asahi', f: 'neutral', t: "About him. About them. About— I say *no one cares* because if I say it first nobody else gets to. That's all it's ever been. Don't tell them. They'll make it a thing. Junkyu will make it a list." },
      { n: "He took one hand out of his pocket. The white was still in the creases of his fingers, after the roof, after the rain, after everything; he'd washed them twice in the guesthouse sink, she'd seen him do it. He looked at them under the lamp." },
      { s: 'asahi', f: 'neutral', t: "It won't come off. Since the crane in July. It doesn't come off." },
      { n: "Then Junkyu shouted his name from the gate, and he put the hand back in his pocket, and went, and didn't look back; and Solar stood under the streetlamp in the rain a while longer than she meant to, listening to four boys argue about an umbrella in the dark, and counted them, without meaning to, the way Cherry would have. One, two, three, four. All there. She counted them twice." }
    ] }
  ]
});
