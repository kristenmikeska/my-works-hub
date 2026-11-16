/* Persona 3: Equinox · Yukari Takeba · VI The Lovers. Link data (femc-equinox-game.html). Format: link fields in
   assets/femc/game/core.js ("Links" header), scene lines in assets/femc/game/scene.js.
   Written: ranks 1–2 (from 4/13; her home days are Monday, Wednesday and Friday, so 4/14 at the earliest). Ranks 3–10 to write.
   Shape: the stub fields from assets/femc/equinox/data/links.js (this file wins over the stub, core.js indexLinks).
   Solstice's ranks are shared memory here (the range, "back, not arms", the photo-booth strip, "you pick"); nothing reads
   Solstice link standing. Yukari has no 'happy' portrait: her smiles are written in narration.
   Flags this file sets: eqx-yukari-arrow (rank 1: Solar keeps last year's arrow). Nothing reads it yet.
   Rank 2 (after 4/21): reads eqx-yukari-arrow and ifEvent eqx-knock; sets eqx-yukari-frame (Solar keeps the fourth frame).
   Nothing reads the new flag yet. */
(window.FEMC_GAME_LINKS ||= []).push({
  id: 'yukari', name: 'Yukari Takeba', short: 'Yukari', arcana: 'Lovers', numeral: 'VI', from: 'Persona 3', kind: 'sees',
  romance: null, starts: '4/8', lodging: 'dorm',
  home: { area: 'gekkoukan', spot: 'Archery Range', slot: 'after', days: [1, 3, 5],
          hint: 'After school on Monday, Wednesday and Friday, at the archery range.' },
  approach: "At the far end of the archery range one girl in a pink hoodie over her club whites is still shooting after everyone else has gone, and pulling every arrow out of the straw like it owes her an apology.",
  cast: { captain: 'Club Captain' },
  ranks: [
    { after: '4/13', title: '1: back, not arms', place: 'Gekkoukan High · Archery Range', time: 'After School', music: 'tender', scene: [
      { bg: 'gekkoukan-archery-range' },
      { n: "The archery range was the last place at Gekkoukan where the cherry trees reached, and by mid-April they'd given up trying to be pretty about it and were just coming down, pink and then brown, into the gravel and the grass between the shooting line and the targets, so that every arrow that missed went into a drift of petals with a sound like somebody turning over in bed." },
      { n: "Yukari was missing a lot. Not badly. Just more than Yukari missed, which was almost never. She was the only one left on the line, her club whites under the pink hoodie she wasn't supposed to wear at practice, and she drew and held and loosed with a little extra snap at the end of every one, like she was arguing with the target and winning on volume." },
      { n: "The captain was packing up at the equipment shed, a tall girl with a whistle she hadn't needed in an hour. She looked at Solar coming in through the gate the way you look at a stranger, politely, with no flicker at all, and went back to counting gloves." },
      { s: 'captain', t: "Visitors stay behind the line, please." },
      { n: "She'd taught Solar how to string a bow last autumn. She'd shown her twice, patiently, and then a third time less patiently, and laughed about it afterward. It was a perfectly friendly *please*. It went in under the ribs anyway, small and exact, like a splinter you only find when you lean on it." },
      { s: 'yukari', f: 'neutral', t: "She's with me. She knows where the line is." },
      { n: "Yukari didn't turn round to say it. She nocked another arrow." },
      { s: 'yukari', f: 'serious', t: "She doesn't remember you. None of them do. I asked on Thursday. I said, you remember the third-year who kept shooting the netting, and she said, which third-year, and I said never mind." },
      { s: 'yukari', f: 'neutral', t: "I didn't say never mind nicely." },
      { choose: [
        { t: "It's okay. Last year nobody knew me either.", notes: 2, then: [
          { s: 'yukari', f: 'serious', t: "Last year was different. Last year nobody knew you because you were new. This year they don't know you because something wiped you off them, like a whiteboard." },
          { s: 'yukari', f: 'neutral', t: "It's not okay. You can be okay with it. I'm not going to be." }
        ] },
        { t: "You remember.", notes: 3, then: [
          { s: 'yukari', f: 'neutral', t: "Yeah. Obviously. I remember everything. That's the problem." },
          { n: "She loosed. It went in high and left, and she stood there with her bow arm still out and looked at it like it had personally let her down." }
        ] },
        { t: "(Stand behind the line. Where she can see you.)", notes: 2, then: [
          { n: "She stood behind the line, a step back from Yukari's left shoulder, where she'd stood for most of last autumn being told she was doing it with her arms. Yukari's eyes went to her once, sideways, and back to the target, and her next arrow went in clean." }
        ] }
      ] },
      { n: "The captain locked the shed and called goodbye to Yukari, and to Solar, very politely, as to someone she'd just met, and went off through the gate with her whistle swinging. Then it was the two of them and the petals and the smell of straw and cold grass, and the far-off noise of the baseball team on the other side of the building, and Yukari lowered her bow and stood there with it hanging from one hand." },
      { s: 'yukari', f: 'neutral', t: "I'm mad at you." },
      { n: "She said it to the target. Flat. Like a weather report." },
      { s: 'yukari', f: 'serious', t: "I know it's not fair. I know you didn't pick it. I know something took you, and you didn't get a vote, and everybody's being so careful about it. Mitsuru-senpai has a voice for it. Junpei won't even make a joke." },
      { s: 'yukari', f: 'serious', t: "I'm still mad. Ken said once he was allowed to be angry at somebody and want them to wake up at the same time. So. I'm doing both. I'm really, really happy you're back and I'm so mad I can't shoot straight." },
      { choose: [
        { t: "That's fair.", notes: 3, then: [
          { s: 'yukari', f: 'surprised', t: "...Don't do that. Don't just agree. I had a whole thing ready." },
          { s: 'solar', f: 'neutral', t: "Do the whole thing." },
          { s: 'yukari', f: 'serious', t: "I can't now. You ruined it. You're so annoying." }
        ] },
        { t: "I'm sorry.", notes: 2, then: [
          { s: 'yukari', f: 'sad', t: "Don't. You didn't do anything. That's what makes me so mad. There isn't even anybody to be mad at. There's just you, so I'm using you." }
        ] },
        { t: "(Take the bow out of her hand.)", notes: 2, then: [
          { n: "She took the bow out of Yukari's hand. Yukari let her, startled, and then stood there with her hands empty and clearly didn't know what to do with them, and folded her arms, and unfolded them, and put them in the pocket of the hoodie." },
          { s: 'yukari', f: 'neutral', t: "...Rude. That's mine." }
        ] }
      ] },
      { s: 'yukari', f: 'sad', t: "I used to walk you up. Every night. Remember? The first night I said I'd walk you up because somebody had to, and then I just kept doing it. Up the stairs, to your door, and I'd say night, and you'd say night, and that was it. It was nothing." },
      { ifFlag: 'eqx-from-true', then: [
        { s: 'yukari', f: 'sad', t: "And then I forgot. Not you leaving. You. For a whole month I walked up those stairs every night and went past your door and didn't even look at it. Like it was a cupboard." },
        { s: 'yukari', f: 'serious', t: "So I'm mad at you, and I'm mad at me, and I don't know which one's worse, and I'm using you for both because you're here." }
      ], else: [ { ifFlag: 'eqx-from-stay', then: [
        { s: 'yukari', f: 'sad', t: "And on Tuesday I walked you up. Like always. I said night. You said night. And at midnight your light went off and came back on, and I went and looked, and the bed was made. Square. Like nobody'd ever been in it." },
        { s: 'yukari', f: 'sad', t: "I'd said night to you five minutes before. Five minutes. I keep doing the math on it like it'll come out different." }
      ], else: [
        { s: 'yukari', f: 'sad', t: "And then one night I went up the stairs, and I got to the top, and there wasn't anybody to say night to. I stood there. I stood outside your door like an idiot. For a really long time." }
      ] } ] },
      { n: "She didn't cry. She looked at the target until her eyes stopped doing the thing they'd started, and then she sniffed, once, hard, like a full stop, and held out her hand for the bow." },
      { s: 'yukari', f: 'neutral', t: "Okay. Enough. Shoot. You haven't shot in a year, I bet your back forgot everything." },
      { n: "She put the bow in Solar's hands and a glove on her right hand and an arrow on the string with the quick hard competence of somebody who'd done it a hundred times for a slow student and had decided the slow student was hers. Then she stood behind her and put one hand flat between her shoulder blades, exactly where it had been all autumn." },
      { s: 'yukari', f: 'neutral', t: "Back. Not arms." },
      { s: 'solar', f: 'neutral', t: "I know." },
      { s: 'yukari', f: 'neutral', t: "I know you know. Your back doesn't know." },
      { choose: [
        { t: "(Breathe out. Don't reach for it.)", notes: 3, then: [
          { n: "She breathed out and didn't reach for it, and it came, a little, the small still place in the middle where nothing was being decided, and her fingers opened by themselves. The arrow went in. Low, the second ring from the outside, wobbling. In." },
          { s: 'yukari', f: 'surprised', t: "...Huh. Your back remembered. That's so unfair. My back forgets everything." }
        ] },
        { t: "(Aim. Really aim.)", notes: 2, then: [
          { n: "She aimed until her eyes watered, and her arms shook, and she felt Yukari's hand on her back go very patient, and she let go too late and the arrow went wide and into the netting with a soft defeated rustle." },
          { s: 'yukari', f: 'neutral', t: "There it is. The netting. Welcome back. It missed you." }
        ] },
        { t: "(Look over your shoulder at her instead.)", notes: 2, then: [
          { n: "She looked over her shoulder. Yukari was right there, closer than she'd thought, frowning at her elbow, and she looked up and caught Solar looking and went pink to the hairline." },
          { s: 'yukari', f: 'blushing', t: "What. Don't look at me. Look at the target. Geez." },
          { n: "She loosed while Yukari was still flustered. It went in somewhere. Neither of them saw where." }
        ] }
      ] },
      { n: "Yukari went to pull the arrows. On the way back she stopped by her locker at the end of the shed, and opened it, and took something out, and came back with it held across both palms, like something you'd present on a cushion." },
      { n: "An arrow. Old, the fletching crushed flat on one side, the shaft scratched where it had gone through straw. On the shaft, near the nock, in pink marker, in Yukari's handwriting, a date from last December." },
      // CG: eqx-yukari-arrow — a girl in a pink hoodie over archery whites holding out an old arrow across both open palms like an offering, petals falling around her on an empty archery range, the targets blurred behind.
      { s: 'yukari', f: 'neutral', t: "Your arrow. The one in the outside ring. Nobody would pull it, remember? It stayed there for like two weeks. Then they changed the targets over spring break and I came in on the last day and pulled it out myself before they threw the old ones away." },
      { s: 'yukari', f: 'serious', t: "I was going to keep it. I was going to keep it in my locker forever and nobody was ever going to know what it was. That was the plan if you didn't come back." },
      { s: 'yukari', f: 'neutral', t: "So. You came back. So it's yours. Or I keep it. I don't care. Whatever. You pick." },
      { n: "*You pick.* She heard herself say it, and Solar watched her hear it, and watched her jaw set on it, as if she'd made herself a promise about those two words in particular and was going to keep it if it killed her." },
      { choose: [
        { t: "(Take it.)", notes: 3, flag: 'eqx-yukari-arrow', then: [
          { n: "She took it. It weighed nothing. It weighed exactly as much as the afternoon she'd shot it, frost on the grass and Yukari screaming so loud the crow left." },
          { s: 'yukari', f: 'blushing', t: "Okay. Good. Don't, like, cry on it. It's an arrow." }
        ] },
        { t: "Keep it. In your locker. So I know where it is.", notes: 3, then: [
          { s: 'yukari', f: 'surprised', t: "...Oh." },
          { n: "She put it back in the locker. Carefully, at the back, standing up in the corner where the door wouldn't knock it, and shut the door on it, and put her palm flat on the metal for a second after it was shut." },
          { s: 'yukari', f: 'neutral', t: "Okay. It's here. Monday, Wednesday, Friday. If you want it." }
        ] },
        { t: "Let's shoot it. One more time.", notes: 2, then: [
          { n: "Yukari stared at her. Then she laughed, short and surprised, the real laugh that went bright and tired at once, and put it on the string for her herself." },
          { n: "It went into the netting. Of course it did. They both stood and looked at it hanging there in the green mesh with petals stuck to its feathers, and Yukari said that was the most *you* thing she had ever seen, and went and got it back, and kept it, and didn't ask." }
        ] }
      ] },
      { place: 'Gekkoukan High · Courtyard', time: 'Evening', bg: 'gekkoukanhigh', soft: true },
      // BG: gekkoukan-courtyard-well-evening — Gekkoukan's courtyard at dusk in spring, empty, petals on the paving, the low ring of old mossy stone in the middle with its plank lid and small folding maintenance sign, the school windows dark above.
      { n: "They walked out through the courtyard because it was the way to the gate. The petals had drifted against everything, the steps, the bench, the low stone ring in the middle with its plank lid and its little folding sign that said *Maintenance. Do not lean.* Yukari's hand found Solar's elbow before they reached it, the way it had on the first morning, and walked her round it in a wide easy curve without looking at it once." },
      { n: "On the far side, when it was behind them, she let go." },
      { s: 'yukari', f: 'neutral', t: "Hanni's rule. The door one. In the red nobody opens a door, I don't care who it sounds like." },
      { s: 'yukari', f: 'neutral', t: "Hyein keeps saying it like it's hard. Like, who would it sound like, what if it sounded like somebody you couldn't not answer." },
      { s: 'yukari', f: 'serious', t: "It's not hard for me. If my mom knocked on my door in the middle of the night I wouldn't open it in the daytime. I've had practice. I've got years of practice not answering." },
      { n: "She said it lightly. She said it in the voice she used for her mother, the one that had a laugh at the end of it so you'd know it didn't matter, and they walked on through the gate and down the hill toward the station with the evening coming blue over the bay." },
      { n: "It was a block later, at the crossing, waiting for the light, that she said the rest of it. Not to Solar. To the red man on the signal." },
      { s: 'yukari', f: 'sad', t: "...She'd say Yuka-chan, though. If she knocked. Nobody's called me that since I was nine. Nobody else would know to." },
      { s: 'yukari', f: 'sad', t: "I don't know why I said that. Forget it." },
      { choose: [
        { t: "Then nobody knocks with it. Nobody gets to.", notes: 3, then: [
          { s: 'yukari', f: 'neutral', t: "...Yeah. Okay. Nobody gets to." },
          { n: "The light changed. She didn't move for a second, and then she did, and on the far side of the crossing she bumped her shoulder into Solar's and left it there half a block, which was as close as Yukari Takeba came to saying thank you to anybody." }
        ] },
        { t: "(Take her hand across the road.)", notes: 3, then: [
          { n: "She took Yukari's hand when the light changed. Yukari looked down at it, and up, and didn't pull away, and they crossed like that, like children, like idiots, and on the far curb Yukari didn't let go first." },
          { s: 'yukari', f: 'blushing', t: "...This is so embarrassing. Don't stop." }
        ] },
        { t: "I won't forget it.", notes: 2, then: [
          { s: 'yukari', f: 'sad', t: "Yeah. I know. That's why I said it to you and not Junpei." }
        ] }
      ] },
      { ifAfter: '4/29', then: [
        { n: "Neither of them said what both of them were thinking about, which was the guesthouse and the night of the twenty-eighth, and a man who had opened his door to a voice he couldn't not answer. They'd stopped saying it out loud. It came along anyway, at the crossings, at doors, at night, like a third person walking a step behind." }
      ] },
      { n: "At the dorm she went up the stairs ahead of Solar, which she didn't need to do, which neither of them mentioned. At the top she stopped outside Solar's door, the one at the end of the hall, and stood there with her hands in her hoodie pocket and looked at it for a moment, as if checking it was the right door, as if checking it was still a door with somebody behind it." },
      { s: 'yukari', f: 'neutral', t: "Night." },
      { s: 'solar', f: 'neutral', t: "Night." },
      { n: "She went back along the hall to the stairs, up to her own floor. Solar heard her stop on the landing. Heard her not turn round. Heard her keep going, and her door, and then, through the ceiling a few minutes later, the radio come on low, a late-night talk show with somebody laughing too much, turned up just loud enough to cover whatever it was supposed to cover." }
    ] },
    { after: '4/21', title: '2: four frames', place: 'Gekkoukan High · Archery Range', time: 'After School', music: 'joy', scene: [
      { bg: 'gekkoukan-archery-range' },
      { n: "The cherry trees round the range had given up completely by the third week of April and gone to leaf, and the petals that had been pink in the gravel were brown now, and swept into a heap by the shed where somebody's broom had left them, and the whole place smelled of cut grass and straw and the linseed oil the club used on the bows. Yukari was shooting well. Solar could hear it from the gate: the clean flat *tock* of an arrow going into the middle of something, and then another, and then another, close enough together that they had to be in the same ring." },
      { n: "She didn't turn round. She loosed one more, and lowered the bow, and only then looked over her shoulder, with the particular face of somebody who'd known exactly who was at the gate and had wanted to finish the set first so it would be seen." },
      { s: 'yukari', f: 'neutral', t: "Did you see that? Tell me you saw that. Three in the gold. My back remembered." },
      { choose: [
        { t: "I saw. You're not mad anymore.", notes: 3, then: [
          { s: 'yukari', f: 'serious', t: "I'm still mad. I'm just mad accurately now. It's a different skill." }
        ] },
        { t: "(Clap. Slowly. Like the captain does.)", notes: 2, then: [
          { n: "She clapped, slowly, three times, the way the captain clapped at the end of practice to mean *adequate*. Yukari pointed the bow at her like a finger and said *don't*, and laughed, and the laugh went right up the range and startled a crow off the netting." }
        ] },
        { t: "Show-off.", notes: 2, then: [
          { s: 'yukari', f: 'neutral', t: "Obviously. I've been waiting a week for somebody to show off to. Junpei doesn't count. He just says *nice* about everything. He said *nice* about my lunch." }
        ] }
      ] },
      { ifFlag: 'eqx-yukari-arrow', then: [
        { s: 'yukari', f: 'neutral', t: "Is my arrow still in your bag? Don't lie. You look at the floor when you lie." },
        { s: 'solar', f: 'neutral', t: "It's in my bag." },
        { s: 'yukari', f: 'blushing', t: "...Okay. Good. Not that I was checking. Put your bag down somewhere I can see it, though." }
      ] },
      { s: 'yukari', f: 'neutral', t: "Okay. Get your stuff. We're going to Paulownia. I have a coupon." },
      { s: 'solar', f: 'neutral', t: "For what?" },
      { s: 'yukari', f: 'serious', t: "For a thing I need witnessed. It's not a big deal. It's a huge deal. Come on." },
      { place: 'Paulownia Mall · Photo Booth', time: 'After School', bg: 'paulownia-photo-booth', soft: true },
      { n: "The photo booth was where it had always been, in the corridor by the arcade between a capsule-toy machine and a fire door, with its candy-pink curtain and its sticker-covered screen and the cardboard cutout of a girl in a sailor uniform giving a peace sign that somebody had given a mustache in marker sometime in the last year. The mustache was new. Everything else was exactly the same, down to the smell, warm plastic and somebody's strawberry body spray and the dusty heat that came off the printer." },
      { n: "Yukari took her phone out of her blazer and turned it over. On the back, tucked inside the clear case where other girls kept a receipt or a ticket stub, was a strip of four photos, faded at the edges where her thumb had worn it, two girls pulling faces in front of a pink curtain, a year old." },
      { s: 'yukari', f: 'neutral', t: "This is the old one. It's going yellow. Look, your face is going yellow. You look like you have a disease." },
      { s: 'yukari', f: 'serious', t: "So we're taking a new one. And I'm getting three prints. One for my phone. One for my wallet. One for my locker, taped up, inside the door, where nobody can take it down without me knowing." },
      { s: 'yukari', f: 'neutral', t: "Mitsuru-senpai calls that redundancy. She does it with the Group's files. If one copy goes, there's two more. I'm doing it with you." },
      { n: "She said it so briskly, so practically, the way you'd explain a plan to back up your homework, that it took Solar a second to hear what it was. A girl who'd walked past a door for a month without looking at it, making sure that this time there'd be three places to find a face, and at least one of them taped up where it couldn't fall." },
      { choose: [
        { t: "Get four. I want one too.", notes: 3, then: [
          { s: 'yukari', f: 'surprised', t: "...Four's more than the coupon." },
          { s: 'yukari', f: 'neutral', t: "Fine. Four. I'll pay. Don't say anything. Don't say a single thing." }
        ] },
        { t: "Yukari. I'm right here.", notes: 2, then: [
          { s: 'yukari', f: 'serious', t: "Yeah. You were right here last year too. Get in the booth." }
        ] },
        { t: "(Get in the booth before she can see your face.)", notes: 2, then: [
          { n: "She ducked in through the curtain before Yukari could see her face do whatever it was doing. Yukari came in after her, and sat, and bumped her over on the little bench with her hip, and didn't say anything about it, which meant she'd seen." }
        ] }
      ] },
      { n: "Inside the booth it was bright and hot and close, the light coming off the white panel above the screen so flat it took the shadows out of everything. Yukari fed in the coins. The screen chimed and showed them their own two faces, and a cartoon rabbit, and a number. *4.*" },
      { s: 'yukari', f: 'neutral', t: "Okay. First one normal. Second one stupid. Third one you pick. Fourth one I'm going to do something and you just have to deal with it." },
      { n: "The first one was normal: two girls, shoulder to shoulder, smiling at a lens, the kind of smile you can do on command. The flash went off like a slap. The second one was stupid. Yukari pulled her cheeks out sideways with both fingers and Solar did the face she'd done in the old strip, the one that looked like a fish with opinions, and Yukari started laughing before the flash and was a blur in it." },
      { n: "The third one was halfway through its countdown when Yukari's phone went off in her lap." },
      { n: "It buzzed against her thigh, loud in the little box, and she looked down at it, and Solar looked down at it, and on the screen it said *Mom*, with no picture, just the word." },
      { n: "Yukari pressed decline with her thumb without picking the phone up. She did it so fast and so smoothly that it was obviously something her thumb knew how to do by itself, a move it had practiced, and then she looked back up at the lens with her face already arranged, and the flash went, and caught her a quarter of a second late, still turning, with the arrangement not quite finished." },
      { s: 'yukari', f: 'neutral', t: "Ugh. That one's ruined. Whatever. Last one. Hold still." },
      { n: "On the last countdown she leaned over and put her head on Solar's shoulder, hard, her cheek against the side of Solar's neck, and shut her eyes, and didn't do anything else at all. *3.* Her hair smelled of the range, straw and oil. *2.* Her hand found Solar's on the bench between them and held it, tight, in a way that would not be in the picture. *1.*" },
      { n: "The flash went off. Yukari didn't move for a second after it. Then she sat up and said *okay* in a perfectly normal voice and pushed the curtain open and went out to wait for the prints, and didn't look back to see if Solar was coming, and stood at the slot with her arms folded, watching it like it owed her money." },
      { n: "The strips came out one at a time, warm, curling slightly, smelling of chemicals. Four of them. Yukari picked them up by the edges and laid them out in a row on top of the capsule machine, and they both bent over them." },
      { n: "Normal. Stupid. Yukari a quarter-second late, still turning from her phone, her face caught halfway between one thing and another. And the last one, the two of them, Yukari's head on Solar's shoulder and her eyes shut and her mouth doing something small and private at the corner." },
      { n: "And behind them, in the fourth frame, the curtain was open." },
      { n: "Not much. A finger's width, at the edge, where it met the wall of the booth. A thin vertical slice of the corridor outside, dim after the white of the flash, the dark gray of the fire door, the floor. Nothing in it. Nobody. Just the gap, a straight dark line down the side of the picture, exactly the width you'd open a curtain to if you wanted to see in without being seen." },
      // CG: eqx-yukari-strip — a photo-booth strip of four frames lying on top of a capsule-toy machine, two girls in school uniforms in each; in the last frame one girl's head on the other's shoulder, eyes shut, and at the edge of the frame the pink curtain behind them open a finger's width onto a dark corridor.
      { s: 'yukari', f: 'serious', t: "...I shut that. I pulled it shut. I always pull it shut. I checked it when I sat down." },
      { s: 'solar', f: 'neutral', t: "I know. I saw you." },
      { n: "They looked at it. Four copies of it. In every one, the same gap, the same width, the same dark line. Yukari's eyes went from the photo to the booth, to the curtain, which hung shut now, flat and pink and ordinary against the wall, and back." },
      { choose: [
        { t: "It's the flash. It moves the curtain.", notes: 2, then: [
          { s: 'yukari', f: 'neutral', t: "...Yeah. Heat. Air. The flash is hot. It's a, it's a thing." },
          { s: 'yukari', f: 'serious', t: "It didn't move in the other three. But okay. It's the flash. That's what I'm going with. Thank you." }
        ] },
        { t: "(Look closer. Low down, in the gap.)", notes: 3, then: [
          { n: "She bent closer. Low in the gap, at about the height of a hand on a curtain, there was a pale smudge. Small, soft-edged, a little whiter than the gray around it. A reflection of the flash off the fire door's bar, probably. That was what flashes did. They left white things on dark things." },
          { n: "She didn't say it was a hand. She didn't say anything. She straightened up, and Yukari was watching her face instead of the photo, and whatever Yukari saw on it made her pick up all four strips at once and hold them against her chest." }
        ] },
        { t: "(Step back and look at the booth instead.)", notes: 2, then: [
          { n: "She looked at the booth. The curtain. The corridor, empty both ways, the arcade noise spilling out of one end and the mall's piped music out of the other, a mother going past with a stroller, a boy in a cap at the capsule machines. Nobody who'd stood at a curtain. Nobody who looked like they'd ever stood anywhere." }
        ] }
      ] },
      { s: 'yukari', f: 'serious', t: "Okay. Okay. I'm cutting it off." },
      { n: "She tore the fourth frame off each strip, one after another, along the perforated line, careful, with her nails. Four little squares of the two of them with the dark line down the side. She stood with them in her hand over the bin by the fire door." },
      { choose: [
        { t: "Give me one. I'll keep it.", notes: 3, flag: 'eqx-yukari-frame', then: [
          { s: 'yukari', f: 'surprised', t: "Why would you want that one?" },
          { s: 'solar', f: 'neutral', t: "Because it's the good one. Look at your face." },
          { n: "Yukari looked. At herself with her eyes shut on Solar's shoulder. She went pink, slowly, all the way, and put one square in Solar's hand without a word and threw the other three away, hard, like you'd throw something at a dog." }
        ] },
        { t: "Throw them out.", notes: 2, then: [
          { n: "She threw them out. All four. Then stood there for a second looking down into the bin, at the little squares on top of somebody's cup and a crumpled receipt, and Solar watched her want, very badly, to take one of them back out, and not do it." }
        ] },
        { t: "Your call.", notes: 3, then: [
          { s: 'yukari', f: 'neutral', t: "...Don't do that. That's my line." },
          { n: "She kept one. Solar saw her. She threw away three and slid the fourth into the very back of her wallet, behind her student card, face in, where nobody would see it unless they were looking for it, and she didn't say why, and Solar didn't ask." }
        ] }
      ] },
      { place: 'Paulownia Mall · Canal', time: 'Evening', bg: 'paulownia-canal', soft: true },
      { n: "They sat on the low wall by the canal with two cans of melon soda from the machine, because it was what they'd done last year, because their bodies walked them there without discussing it. The water was green and still and full of the mall's lights. Somebody's paper boat was going round in a slow circle by the steps, too waterlogged to go anywhere." },
      { n: "Yukari's phone buzzed once. Not a call. The small single buzz of a voicemail arriving. She looked at it on her knee for a long time." },
      { s: 'yukari', f: 'neutral', t: "She doesn't call. My mom. She texts at New Year and on my birthday. Two texts a year. It's a system. It works." },
      { s: 'yukari', f: 'serious', t: "She's called three times this week." },
      { n: "She pressed play and held the phone between them, speaker on, low, as if the canal might overhear. A woman's voice, light, tired, a little too bright, the voice of someone who'd decided before dialing to sound fine." },
      { n: "*Yuka-chan. It's Mom. I had the strangest dream about you. You were little, and I was at the door, and you wouldn't let me in. Isn't that silly. Call me back.*" },
      { n: "Then a breath, as if she'd been about to say something else. Then the click." },
      { s: 'yukari', f: 'sad', t: "...She never calls me that on the phone. Never. Only at the door. When I was little and she'd come home late and I'd be waiting up. She'd say it through the door so I'd know it was her." },
      { s: 'yukari', f: 'serious', t: "It's her number. It's her voice. It's definitely her. I know it's her." },
      { n: "She said it three times, in three slightly different ways, and Solar heard each one land a little less sure than the one before, the way you'd test a step on ice." },
      { ifEvent: 'eqx-knock', then: [
        { s: 'yukari', f: 'serious', t: "You know what's stupid? On the twenty-eighth. Everything knocked. Every door. Ken's mom. Akihiko-senpai's sister. Your three." },
        { s: 'yukari', f: 'sad', t: "I asked Fuuka after. Every door had a voice behind it. Mine knocked twice, she said, and then nothing. No voice. It just waited. It didn't even try me." },
        { s: 'yukari', f: 'serious', t: "I keep thinking it knew I wouldn't open. And then I keep thinking, or it's saving it." }
      ] },
      { choose: [
        { t: "Call her back. I'll sit here.", notes: 2, then: [
          { n: "Yukari looked at the phone. Her thumb went to the number. It stayed there. The paper boat went round once more by the steps, and sank a little further, and kept going round." },
          { s: 'yukari', f: 'neutral', t: "...Not tonight. I will. Not tonight. I'll text her. Texting's the system." }
        ] },
        { t: "Don't call her back tonight.", notes: 2, then: [
          { s: 'yukari', f: 'neutral', t: "Yeah. No. I wasn't going to. I've had years of practice not calling back." },
          { s: 'yukari', f: 'sad', t: "...It's a lot easier when you're mad at somebody. I'm not even mad at her this week. That's what's weird." }
        ] },
        { t: "Whatever you want to do. It's yours.", notes: 3, then: [
          { s: 'yukari', f: 'surprised', t: "...Huh." },
          { s: 'yukari', f: 'neutral', t: "Nobody ever says that about my mom. Everybody's always got a take. Call her, don't call her, she's your mother, she's not your problem." },
          { n: "She thought about it. Actually thought, with her chin on her knees, looking at the canal. Then she typed with one thumb, *got it. busy with school. night*, and sent it, and turned the phone face down on the wall, and left her hand on it." }
        ] }
      ] },
      { place: 'Iwatodai Dorm · Hallway', time: 'Night', bg: 'iwatodaidorm-hallway', soft: true },
      { n: "She walked Solar up. She didn't pretend anymore that it was on the way. At the top of the stairs, outside Solar's door, she stopped and took a strip out of her wallet, one of the four, three frames long now, normal and stupid and late, and wedged it into the gap between Solar's door and its frame, at eye height, so it stuck out like a bookmark." },
      { s: 'yukari', f: 'neutral', t: "Redundancy. Copy four. If I walk past this door without looking at it, that's going to poke me in the eye." },
      { s: 'yukari', f: 'neutral', t: "Night." },
      { s: 'solar', f: 'neutral', t: "Night." },
      { n: "Later, in bed, Solar heard her phone through the ceiling. Not a buzz. The ring. It rang four times and stopped, unanswered, and the room above was very quiet for a long moment, and then it rang again. Four times. Stopped." },
      { n: "Then the radio came on, the late-night talk show, somebody laughing too much, turned up a notch louder than last time, and stayed on, and Solar lay in the dark listening to a stranger laugh above her head until the red came up through the window and took the sound away." }
    ] }
  ]
});
