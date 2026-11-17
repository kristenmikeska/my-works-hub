/* Persona 3: Equinox · Yukari Takeba · VI The Lovers. Link data (femc-equinox-game.html). Format: link fields in
   assets/femc/game/core.js ("Links" header), scene lines in assets/femc/game/scene.js.
   Written: ranks 1–8 (ranks 1–2 from 4/13; her home days are Monday, Wednesday and Friday, so 4/14 at the earliest). Rank 3 (from 6/7: the range,
   the canal; branches on eqx-knock, eqx-hunted + eqx-asked-house / eqx-choose-house, eqx-yukari-arrow, eqx-yukari-frame) records
   her ask: tally asks.yukari (+ cakes / choose).
   Ranks 4–6 written (Nov 16): rank 4 (after 6/28: the range in rainy-season rain, the hill road; branches on ifChoice
   asks.yukari, eqx-yukari-arrow) sets eqx-yukari-mom-yes (Solar tells her to let her mother come to the 7/17 qualifier).
   Rank 5 (after 8/12, so 8/13, Obon: summerHome Seaside Park, then a temple cemetery behind the station; reads
   eqx-yukari-mom-yes) sets eqx-yukari-mom-home (Solar tells her to send her mother home; she leaves on 8/16 on every branch).
   Rank 6 (after 10/4: the range in autumn, the dorm hallway; reads ifChoice asks.yukari, eqx-yukari-mom-home, ifEvent
   eqx-knock) sets eqx-yukari-turned (Solar lets Yukari sit where she can be seen) and eqx-floor-yukari (her ask floor).
   summerHome added: Seaside Park, Monday / Wednesday / Friday, while the range is shut for the holidays (7/21–8/31).
   Yukari's mother speaks in narration only. Nothing reads the new flags yet.
   Ranks 7–8 written (Nov 16, round 3): rank 7 (after 11/8, Monday: the range in November, her ask floor in the Well in the
   red (apartment door 302 standing in water, knocking twice in her mother's voice), breakfast; branches on dead.shinjiro,
   dead.aigis / ifBefore 11/22, eqx-yukari-turned, eqx-yukari-mom-home, eqx-yukari-arrow) sets eqx-yukari-door-held (Solar's
   hand over hers: they hold it shut all hour) or eqx-yukari-door-hers (Solar leaves it to her; she lets go of the handle and
   the door doesn't open: choose +1), then eqx-floor-yukari-seen. Rank 8 (after 12/13, Monday: the range on the last club
   day, then the dorm at night: Solji lets Yukari dress the seam; Solar is sick and Yukari holds her hair; reads
   eqx-yukari-door-*, eqx-yukari-turned, eqx-yukari-mom-home, dead.*) sets one of eqx-yukari-mom-newyear (her mother comes to
   Naganaki at New Year), eqx-yukari-mom-spring (asked to come in April instead) or eqx-yukari-mom-hers (Yukari will answer
   at Christmas: choose +1). Nothing reads the new flags yet; her mother's fate is decided nowhere.
   Ranks 9–10 to write.
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
  summerHome: { area: 'port', spot: 'Seaside Park', slot: 'after', days: [1, 3, 5],
          hint: 'In the summer holidays, on Monday, Wednesday and Friday afternoons, on the seawall at Seaside Park with a melon soda.' },
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
    ] },
    { after: '6/7', title: '3: where I can see you', place: 'Gekkoukan High · Archery Range', time: 'After School', music: 'joy', scene: [
      { bg: 'gekkoukan-archery-range' },
      { n: "The practice match was against a girls' school from across the bay with navy hakama and a reputation, and it rained in the morning and stopped at noon, so that by four the range was steaming, the gravel dark and wet and the straw of the targets swollen and the whole place smelling of wet wood and linseed oil and the hydrangeas along the fence, which had gone a deep acid blue overnight as if somebody had poured something on them." },
      { n: "Yukari had told her where to sit at breakfast. Not asked. Told, over the rice, in the voice she used for the order of a set: *Second row. Left side. The end seat, by the post. Not the middle, the middle's behind Mori-senpai and she's tall.* Then she'd gone back to eating as if she'd said something about the weather." },
      { n: "So Solar was in the second row on the left at the end seat by the post, on a wet bench with her blazer under her, among a handful of parents and two boys from the kendo club who were there for reasons of their own. The captain walked past the bench with a clipboard and looked at her, politely, the way you'd look at somebody's cousin, and nodded, and walked on." },
      { n: "Yukari came out with the team in her whites, her bow upright, her face set. She didn't look at the bench. She took her place on the line. She drew, held, and loosed, and the first arrow went into the outer ring with a flat, unhappy sound, and Solar watched her shoulders go up a centimeter, and her jaw." },
      { n: "Then she turned her head. Just her head, a few degrees, between arrows, the way you'd glance at a clock. Second row. Left side. The end seat, by the post." },
      { choose: [
        { t: "(Don't wave. Just be there. Let her find you.)", notes: 3, then: [
          { n: "She didn't wave. She sat very still and let Yukari find her, and Yukari found her, and something in her face came down, the jaw, the shoulders, all of it, like a held breath let go, and she turned back to the target." }
        ] },
        { t: "(Lift one hand off your knee. Small.)", notes: 3, then: [
          { n: "She lifted one hand off her knee, barely, two fingers, the way you'd signal across a classroom. Yukari saw it. Her mouth did something at the corner that the visiting school would never know was a smile, and she turned back to the target." }
        ] },
        { t: "(Do the slow captain clap. Silently.)", notes: 2, then: [
          { n: "She brought her hands together slowly, not quite touching, three times, the captain's *adequate*, silent. Yukari saw it and her nostrils flared, which was the most she could do in front of the visiting school without laughing, and she turned back to the target with her ears pink." }
        ] }
      ] },
      { n: "The next arrow went into the gold. So did the one after it. So did four of the next five, with that clean flat *tock* that meant the middle of something, close enough together that they had to be pulled out one at a time so as not to split each other, and the visiting captain stopped writing on her clipboard to watch, and one of the kendo boys said *whoa* out loud and was hushed by a parent." },
      { n: "Between every arrow Yukari turned her head. A few degrees. Second row, left side, end seat. She did it so fast and so smoothly that nobody else on the bench seemed to notice; it looked like a stretch of the neck. Solar noticed. Solar was the only one it was for." },
      // CG: eqx-where-i-can-see — an archery range after rain, a girl in white archery dress at full draw on the shooting line, her head turned very slightly toward the camera, a few people on a wet bench behind her out of focus, blue hydrangeas along a fence.
      { n: "Gekkoukan won by six points. The captain thanked the visiting school in a long formal speech, and the visiting captain thanked them back in a longer one, and while both of them were bowing Yukari walked straight across the wet gravel to the bench in her whites and stood in front of Solar with her bow and said, not quietly enough, *did you see that*." },
      { s: 'yukari', f: 'blushing', t: "Don't answer. I know you saw. You were in the right seat. You were in the exact right seat." },

      { place: 'Gekkoukan High · Archery Range', time: 'Evening', bg: 'gekkoukan-archery-range', soft: true },
      { n: "They stayed after to pull the last arrows and take the targets in, because the club did that and because Yukari made a point of always doing it. The visiting school had gone. The light was going yellow and long across the wet range. Yukari pulled an arrow out of the straw and stood with it in her hand, and took her phone out of the sleeve of her whites, and showed Solar the screen." },
      { n: "A text. At seven fifty that morning. *Mom.* *good luck today yuka-chan*" },
      { s: 'yukari', f: 'serious', t: "I didn't tell her. I didn't tell her there was a match. I haven't told her anything about this year. She doesn't know I'm still in the club." },
      { s: 'yukari', f: 'neutral', t: "And she sent it at seven fifty, which is when I leave the dorm, which she also doesn't know." },
      { n: "She said it flatly, the way she'd say a score. Then she turned the phone face down against her chest." },
      { s: 'yukari', f: 'sad', t: "...It's probably the school. Schools send emails. Fixtures. She's probably on a list. That's probably all." },
      { choose: [
        { t: "Did you text her back?", notes: 2, then: [
          { s: 'yukari', f: 'neutral', t: "I sent *thanks*. With a period. That's the system. Two texts a year and a period." },
          { s: 'yukari', f: 'sad', t: "...I typed *how did you know* and deleted it. Four times. I didn't want to know what she'd say. I didn't want her to say *I just knew*." }
        ] },
        { t: "It's nice, though. That she did.", notes: 3, then: [
          { s: 'yukari', f: 'surprised', t: "...Yeah." },
          { s: 'yukari', f: 'sad', t: "It is nice. That's what's wrong with it. It's the nicest thing she's done in three years and I've spent all day wanting to throw my phone in the river." }
        ] },
        { t: "(Take the arrow out of her hand. Hold it for her.)", notes: 2, then: [
          { n: "She took the arrow out of Yukari's hand, because Yukari was holding it so tight her knuckles had gone white along the shaft. Yukari let it go without looking, and put the freed hand over her own mouth for a second, and then took it away and said *okay*, in a perfectly normal voice." }
        ] }
      ] },
      { ifEvent: 'eqx-knock', then: [
        { s: 'yukari', f: 'serious', t: "My door knocked twice, that night. You know. And then nothing. I said it was saving it." },
        { s: 'yukari', f: 'neutral', t: "And then three weeks later my mom starts calling me Yuka-chan on the phone and wishing me luck at things she doesn't know about. And she's real. It's her number. I've *checked*, Solar. I called the landline at her apartment and she picked up and we talked about her fern." },
        { s: 'yukari', f: 'sad', t: "She's real and she's nicer and I don't trust it. What kind of person doesn't trust her mom being nicer." }
      ] },
      { ifEvent: 'eqx-hunted', then: [
        { s: 'yukari', f: 'neutral', t: "I said we should go. That night. In the lounge. All of us, home, if any of those doors are real." },
        { ifFlag: 'eqx-asked-house', then: [
          { s: 'yukari', f: 'sad', t: "And you said stay. Please. And everybody breathed out, and so did I. I was so relieved, Solar. I was relieved for like a day. And then I was scared of how relieved I was." }
        ] },
        { ifFlag: 'eqx-choose-house', then: [
          { s: 'yukari', f: 'neutral', t: "And you said it was ours to walk through. Nobody else's. Not even yours. I thought about that for a week. I'm still thinking about it. It's the most annoying thing anyone's ever said to me and I can't stop thinking about it." }
        ] }
      ] },

      { place: 'Paulownia Mall · Canal', time: 'Evening', bg: 'paulownia-canal', soft: true },
      { n: "The canal, the low wall, two cans of melon soda from the machine. Their bodies walked them there. The water was green and still and full of the mall's lights coming on one by one, and a new paper boat was going round by the steps, or the same one, rebuilt by somebody who couldn't let it go." },
      { ifFlag: 'eqx-yukari-arrow', then: [
        { s: 'yukari', f: 'neutral', t: "Is my arrow still in your bag." },
        { s: 'solar', f: 'neutral', t: "It's still in my bag." },
        { s: 'yukari', f: 'neutral', t: "Okay. I wasn't checking. I'm going to keep not checking, every few days, for the rest of the year." }
      ] },
      { ifFlag: 'eqx-yukari-frame', then: [
        { n: "Solar had the frame in her wallet. The fourth one, the two of them, Yukari's eyes shut on her shoulder and the dark line of the curtain open at the edge. She'd looked at it more than she'd meant to. She hadn't looked at the edge." }
      ] },
      { n: "Yukari drank half her can in one go and set it on the wall and looked at the water. She had her bow case across her knees, both arms over it, the way you'd hold a dog that might run." },
      { s: 'yukari', f: 'neutral', t: "I'm going to say a thing. It's going to sound stupid. Let me get to the end." },
      { s: 'yukari', f: 'serious', t: "Today. On the line. I missed the first one because I couldn't feel you. Not see you, I knew where you were, I told you where to sit. *Feel* you. And then I looked and you were there and it was like my back remembered how to work. Every arrow. I looked, and you were there, and I could shoot." },
      { s: 'yukari', f: 'sad', t: "That's not healthy. I know that's not healthy. Fuuka would say something nice and gentle about it and I'd want to throw her in the canal." },
      { s: 'yukari', f: 'serious', t: "But last year I walked past your door for a month and didn't look at it. A month. Your *door*. I walked you up every night for a year and then I walked past your door like it was a wall." },
      { s: 'yukari', f: 'neutral', t: "So I want you to promise me something. Not *I'll try*. A real one. Promise me you'll stay where I can see you. This year. The whole year. Stay where I can turn my head and you're there." },
      { n: "She didn't look at Solar while she said it. She looked at the paper boat going round and round, too wet to go anywhere, and too stubborn to sink." },
      { choose: [
        { t: "I promise. I'll stay where you can see me.", notes: 3, tally: { cakes: 1, 'asks.yukari': 'yes' }, then: [
          { n: "Yukari breathed out. All of it, the whole can's worth of held breath, and her arms loosened on the bow case, and she bumped Solar with her shoulder, hard, the way she bumped people when she couldn't say thank you." },
          { s: 'yukari', f: 'blushing', t: "...Okay. Okay. Good. Second row, left side. For the whole year. I'm holding you to it. I'll know if you sit in the middle." },
          { n: "She laughed, and Solar laughed, and it was easy, and Yukari's whole body was lighter beside her on the wall, and Solar sat in the lighter air and felt a small cold place open up somewhere under her ribs, the shape of a promise she wasn't sure she'd been the one to make, and drank her melon soda, and didn't look at it." }
        ] },
        { t: "I can't promise you that, Yukari. Not this year. Not any year.", notes: 2, tally: { 'asks.yukari': 'no' }, then: [
          { n: "Yukari didn't move. Then she picked up her can and finished it, slowly, all of it, and crushed it in one hand, neatly, and set it back on the wall." },
          { s: 'yukari', f: 'neutral', t: "...Right. No. That's fair. That's honest. You were always the honest one, in the end." },
          { s: 'yukari', f: 'sad', t: "I'm just going to be mad for a bit. Accurately. Let me be mad." },
          { n: "She was mad all the way home, walking half a step ahead. At the dorm door she held it open for Solar without looking at her, and kept holding it, and didn't let go till Solar was all the way inside." }
        ] },
        { t: "Watch me as much as you want. That's yours. Where I am is mine. But you'll never find out from a door again.", notes: 2, tally: { choose: 1, 'asks.yukari': 'choose' }, then: [
          { n: "Yukari turned her head and looked at her. For a long time. Solar watched it not be the answer, and watched her look for the other half of it, and find there wasn't one, and have to sit there with it." },
          { s: 'yukari', f: 'serious', t: "...That's not a promise." },
          { s: 'solar', f: 'neutral', t: "No." },
          { s: 'yukari', f: 'sad', t: "That's worse than a promise. A promise you can break. That I can be mad at you for. This I just have to *believe*." },
          { n: "She looked back at the water. The paper boat went round once more by the steps, and tipped, slowly, and went under, and Yukari watched it go with her jaw tight, and then, very quietly, as if testing it, said *okay*. And then, a little louder: *okay, fine, yours*. And she put her head down on her own arms on the bow case and stayed like that, not crying, just resting, and let Solar's hand stay on her back." }
        ] }
      ] },
      { place: 'Iwatodai Dorm · Hallway', time: 'Night', bg: 'iwatodaidorm-hallway', soft: true },
      { n: "She walked her up. The strip was still in Solar's doorframe, three frames long, normal and stupid and late, curling at the corner now from the damp. Yukari pressed it flat with her thumb, the way you'd press a stamp onto an envelope, and said *night*, and went on up the stairs." },
      { n: "Later, through the ceiling, her phone rang. Four times. Solar lay in the dark and waited for it to stop the way it always stopped." },
      { n: "It didn't. On the fourth ring it was picked up, and she heard Yukari's voice through the boards, too low for words, just the shape of a voice, careful, flat, polite. Then less flat. Then, once, unmistakably, a laugh, short and surprised, the sound of somebody caught off guard by being happy." },
      { n: "It went on for eleven minutes. Solar didn't mean to count. Then the voice stopped, and the room above was very quiet, and the radio didn't come on." },
      { n: "At breakfast Yukari sat down across from her with her rice and didn't look up, and said it to the rice, in the voice for scores, before anybody else had come down." },
      { s: 'yukari', f: 'neutral', t: "She had the dream again. Me little, her at the door." },
      { s: 'yukari', f: 'sad', t: "This time I let her in. She said it like it was a nice dream. She said, *you finally let me in, Yuka-chan, it was so lovely*." },
      { n: "Then she ate her breakfast, all of it, very fast, and went to school early, and Solar sat at the table with her chopsticks in her hand and the dorm's ordinary morning going on round her, Junpei and the toast and Koromaru's bowl, and found she'd put her hand flat on the table, the way Mitsuru did, the way you'd keep a dog lying down." }
    ] },
    { after: '6/28', title: '4: eyes front', place: 'Gekkoukan High · Archery Range', time: 'After School', music: 'rain', scene: [
      { bg: 'gekkoukan-archery-range' },
      // BG: gekkoukan-archery-range-rain — the school archery range in heavy June rain seen from under the roofed shooting line, the grass between the line and the targets drowned and shining, rain hanging in sheets off the roof edge, one bow rack along the back wall.
      { n: "It had rained for nine days. Not hard, most of the time; the rainy season wasn't hard, it was patient, a gray steady fall that came down in the morning and was still coming down when you went to bed and had got into everything by the second week, the shoe lockers and the tatami and the pages of every textbook, so that the whole of Gekkoukan smelled faintly of wet paper and somebody's umbrella drying in a corner." },
      { n: "The club had given up for the day. The shooting line at the range had a roof over it, a long low wooden one, but the grass between the line and the targets had gone under in the night and was shining now, drowned flat, a field of water with the straw butts standing up out of the far end of it like haystacks in a flood. Nobody was shooting. Nobody but Yukari, in her whites under the pink hoodie, alone under the roof with the rain coming off its edge in a curtain in front of her, nocking an arrow." },
      { n: "She didn't look round when Solar came in under the eaves, shaking her umbrella. She'd heard the gate. She'd have heard the gate from the other side of the school. Her eyes stayed on the target, sixty meters off through the rain, and her shoulders went down, a centimeter, which was how she said hello." },
      { ifChoice: { 'asks.yukari': 'yes' }, then: [
        { s: 'yukari', f: 'neutral', t: "Good. You're here. Second row doesn't exist today, so stand where I put you in April. Behind my left shoulder. One step back." },
        { n: "She took her phone out of the sleeve of her whites with two fingers and held it up without looking, screen out, so Solar could see it. A list of texts. Her own. *where r u. ok. where r u. ok. u home? ok good.* All to Solar, all answered, going up the screen and up and up." },
        { s: 'yukari', f: 'neutral', t: "Forty-one. Since Saturday. I counted this morning. I wasn't going to tell you. I'm telling you because it's a lot and I'd rather you heard it from me than noticed it." },
        { s: 'yukari', f: 'sad', t: "You promised. I'm holding you to it. I just didn't think holding you to it would mean holding my phone this much." }
      ], else: [ { ifChoice: { 'asks.yukari': 'no' }, then: [
        { s: 'yukari', f: 'neutral', t: "You can stand wherever. I'm practising not caring where." },
        { s: 'yukari', f: 'serious', t: "I'm still mad, by the way. A bit. It's gone from accurately mad to sort of medium. I'll let you know when it's done." },
        { n: "She drew and held and loosed, and the arrow went off through the curtain of rain off the roof edge and into the far target with a sound you could barely hear over the water, and she looked at where it had gone for a long moment, and didn't turn her head." }
      ], else: [
        { s: 'yukari', f: 'neutral', t: "Stand wherever you want. That's yours, apparently. I'm working on it." },
        { s: 'yukari', f: 'serious', t: "I'm practising believing things. It's going terribly. I believed you were coming today for about four hours and then I had a whole other four hours where I didn't, and then you came, so. One for one. That's fifty percent. That's a terrible score." }
      ] } ] },
      { n: "There was a qualifier on the seventeenth. The prefectural one, in a big public range out past Port Island with stands and a scoreboard and people from schools who'd actually trained, and Yukari had been selected for it in a club meeting that week that she described to Solar afterward in the voice of somebody reporting a minor traffic accident she'd been involved in. She'd been practising every day since. In the rain. On her own." },
      { s: 'yukari', f: 'neutral', t: "So here's the thing. At the qualifier, you can't sit where I put you. There's assigned seating. Families in one block, schools in another, and the block's behind the line, and I can't turn round at a qualifier. You lose points for turning round. It's in the rules. I checked. Twice." },
      { s: 'yukari', f: 'serious', t: "So I'm practising. Ten arrows, eyes front. No looking. You stand there, and I don't look, and I see what happens." },
      { choose: [
        { t: "(Stand exactly where she put you. Don't move.)", notes: 3, then: [
          { n: "She stood behind Yukari's left shoulder, one step back, under the eaves with the rain drumming on the wood over both of them, and planted her feet, and was very still." }
        ] },
        { t: "Want me to talk? So you know I'm there?", notes: 2, then: [
          { s: 'yukari', f: 'neutral', t: "...No. That's cheating. If I can hear you, I'm not practising not looking, I'm practising listening." },
          { s: 'yukari', f: 'neutral', t: "Breathe loud, though. That's allowed. That's not in the rules." }
        ] },
        { t: "(Step back two more paces. Out of the corner of her eye.)", notes: 2, then: [
          { n: "She stepped back, two paces, out of the place where Yukari's eye would catch her if it slid sideways, against the back wall by the bow rack where the rain didn't reach. She saw Yukari's shoulders know it. Go up. Then, slowly, on purpose, come down." }
        ] }
      ] },
      { n: "One. The arrow went into the rain and the rain took the sound of it, and somewhere sixty meters off it hit something, straw or the wooden frame or the water, and there was no way to tell which from here. Yukari didn't look round. Two. Three. The bowstring cracked against her arm guard each time, a small hard snap under the noise of the roof. Four. Five, and her head moved, a degree, toward the left, and stopped, and went back." },
      { s: 'yukari', f: 'serious', t: "That one didn't count. I didn't look. I thought about looking. Thinking's allowed." },
      { n: "Six. Seven. Eight. She was breathing through her mouth now, long and slow, the way they taught you to before a release, but there was a catch in it at the top, every time, like a breath that's had to get past something. Nine. Her bow arm was shaking. Not much. The arrow went anyway." },
      { n: "On ten she drew, and held, and held too long, so long the bow began to tremble in her hand, and Solar watched her not turn her head with every muscle in her back, the cords of her neck standing out above the collar of the hoodie, and then she let it go, wild, high, into the rain, and turned round all at once, fast, like someone checking a stove they'd been sure they'd left on." },
      { n: "She looked at Solar for one second. Then she put the bow down on the rack, very carefully, and sat down on the edge of the shooting platform with her feet hanging over the drowned grass, and put her forehead on her knees." },
      { s: 'yukari', f: 'sad', t: "Nine. I got nine. Nine's good. Nine's really good, actually. I don't know why I want to throw up." },
      { choose: [
        { t: "(Sit down next to her. Shoulder to shoulder.)", notes: 3, then: [
          { n: "She sat down beside her on the wet edge of the platform with the rain coming off the roof a hand's width in front of their faces, and put her shoulder against Yukari's, and Yukari leaned on it, hard, without lifting her head, the whole weight of her, the way she'd once leaned on a train window coming home from a club trip, asleep and furious about it." }
        ] },
        { t: "Nine's better than most people get looking.", notes: 2, then: [
          { s: 'yukari', f: 'neutral', t: "I know. I know that. I'm not upset about the score." },
          { s: 'yukari', f: 'sad', t: "I'm upset that the tenth one, I just *had* to. Like my neck was somebody else's. Like somebody grabbed my chin and turned it." }
        ] },
        { t: "Your turn's over. Mine now.", notes: 2, then: [
          { n: "Yukari lifted her head off her knees and stared at her. Then, slowly, she started to laugh, a small worn-out laugh with no air behind it." },
          { s: 'yukari', f: 'neutral', t: "You want to shoot. In this. In front of me. After the netting incident." },
          { s: 'solar', f: 'neutral', t: "You'll be behind me. You'll be able to see me the whole time." },
          { s: 'yukari', f: 'surprised', t: "...Oh. Oh, that's sneaky. That's really sneaky. Fine. *Fine.* Get a glove." }
        ] }
      ] },
      { n: "So Solar shot. She put on a spare glove that was too big and took the club's practice bow off the rack, the beginner's one with the tape on the grip, and stood on the line, and Yukari stood behind her, one step back, at her left shoulder, where Solar had stood all last autumn being told she was doing it with her arms." },
      { s: 'yukari', f: 'neutral', t: "Feet. No. Wider. You're standing like you're waiting for a bus." },
      { s: 'yukari', f: 'neutral', t: "Back, not arms. *Back.* Your arms are just the bit that holds on. The pull comes from here." },
      { n: "Her hand came flat between Solar's shoulder blades, warm through her shirt, and stayed there while she drew, and Solar felt the muscle Yukari meant move under her palm, and felt Yukari feel it, and heard her say *there* very quietly, the way you'd say it to somebody who'd finally found the light switch in the dark." },
      { n: "The arrow went off into the rain. Neither of them saw where. Somewhere out in the gray there was a flat soft *tock*, very far off, and then just the water." },
      { s: 'yukari', f: 'surprised', t: "...That hit something. That hit straw. I heard straw." },
      { s: 'solar', f: 'neutral', t: "Was it the gold?" },
      { s: 'yukari', f: 'neutral', t: "Absolutely not. It was probably the next target over. It was probably somebody else's target. But it was straw." },
      { n: "She didn't take her hand off Solar's back. She stood behind her with her palm flat between her shoulders and her eyes on the rain, where the arrow had gone, and for a while neither of them moved, and Solar could feel her breathing through her hand, slow now, no catch in it at all." },

      { n: "The phone went in the sleeve of Yukari's whites. Not a buzz. The ring. Solar knew the ring. She'd heard it through the ceiling for two months, four times and stopping." },
      { n: "Yukari took her hand away. She took the phone out and looked at the name. Then, standing under the roof with the rain coming down in front of her, in front of Solar, for the first time, she answered it." },
      { s: 'yukari', f: 'neutral', t: "...Hi, Mom." },
      { n: "Solar heard the other end the way you hear somebody else's call, in pieces, a woman's voice, quick and bright and a little too high, the voice of somebody who'd rehearsed the first sentence and not the second. Yukari stood very straight and listened with her eyes on the drowned grass. She said *yeah*. She said *it's raining here too*. She said *no, it's fine, I'm at practice*. Then she stopped saying anything, and her free hand closed into a fist against her thigh, and opened, and closed." },
      { s: 'yukari', f: 'serious', t: "...How did you know about the qualifier?" },
      { n: "The voice on the other end went on for a while. Warm. Pleased with itself. Solar saw Yukari's face go flat, the way it went flat for a score she didn't like." },
      { s: 'yukari', f: 'neutral', t: "Okay. Okay. I'll— I'll think about it. I have to go. Practice. Yeah. You too. Bye." },
      { n: "She hung up. She held the phone in her hand, screen dark, and looked at it." },
      { s: 'yukari', f: 'neutral', t: "She wants to come. To the qualifier. She's never come to anything. She didn't come to my entrance ceremony; she sent a card with the wrong school on it." },
      { s: 'yukari', f: 'serious', t: "She says a lady phoned her. From the club. Somebody's mother, from the parents' list, so nice, she said, she said I'd love it if she came. She said I'd been working so hard and I'd be so glad to see her." },
      { s: 'yukari', f: 'serious', t: "There's no parents' list. There's a list for the bus. I'm not on any list with her number on it. I took her off everything in my first year. I checked. In April. I checked again in May." },
      { n: "The rain came off the roof edge. Out over the drowned grass, somewhere near the far butts, the water moved, a slow ring going out across it where nothing had fallen." },
      { s: 'yukari', f: 'sad', t: "She sounded so happy, Solar. That somebody'd called. That somebody'd told her I'd want her. I haven't heard her sound like that since Dad." },
      { s: 'yukari', f: 'neutral', t: "...Should I let her come?" },
      { choose: [
        { t: "Let her come. Whoever called, she wants to be there. That part's real.", notes: 3, flag: 'eqx-yukari-mom-yes', then: [
          { n: "Yukari looked at her for a long time. Then she looked down at the phone and unlocked it and typed, with one thumb, slowly, the way you'd type something you'd have to stand behind. *ok. 17th. family block. come early, parking is bad.* She looked at it. She sent it before she could look at it again." },
          { s: 'yukari', f: 'neutral', t: "There. Done. Oh my god. Okay. Now I have to shoot in front of my mother. Now I definitely can't look round." }
        ] },
        { t: "That's yours to decide. But find out who called her first.", notes: 2, then: [
          { s: 'yukari', f: 'neutral', t: "I'm going to. I'm going to ask the captain and the vice-captain and every first-year's mother if I have to. I'm going to find out who." },
          { n: "She put the phone back in her sleeve without answering the text. Then she took it out again and looked at it. Then she put it back." },
          { s: 'yukari', f: 'sad', t: "...I'll decide after. I'll decide after I know who. That's allowed. That's not cowardice, that's sequencing." }
        ] },
        { t: "(Don't answer. Take her hand. The one that keeps making a fist.)", notes: 3, then: [
          { n: "She took Yukari's free hand, the one that had been closing and opening against her thigh, and held it, and it closed once more, on hers, hard, and then stopped." },
          { s: 'yukari', f: 'neutral', t: "...Yeah. Okay. I don't know either. Thanks for not pretending you do." }
        ] }
      ] },

      { place: 'Iwatodai · The Hill Road', time: 'Evening', bg: 'iwotodaidorm-outside', soft: true },
      { n: "They walked home under one umbrella, because Yukari had left hers at the dorm that morning on purpose, Solar was fairly sure, so she'd have to share. The rain had thinned to a fine gray hanging stuff that didn't fall so much as wait for you to walk into it, and the hill road shone, and the gutters ran, and every hydrangea along every wall had gone so blue overnight it looked painted." },
      { ifFlag: 'eqx-yukari-arrow', then: [
        { s: 'yukari', f: 'neutral', t: "Is my arrow still in your bag." },
        { s: 'solar', f: 'neutral', t: "Still in my bag." },
        { s: 'yukari', f: 'neutral', t: "Good. I'm not checking. That's the twentieth time I haven't checked." }
      ] },
      { n: "At the corner by the post office, where the road split, Yukari stopped under the umbrella and looked down the river road, not long, the way you'd look at a dog you weren't sure about. The persimmon tree stood over the wall at the far end with its leaves black and dripping. Somebody's radio was on in one of the old houses. It was playing nothing. Static, very low, and under it, if you listened, the shape of a voice too far down to be words." },
      { s: 'yukari', f: 'neutral', t: "...Ken says Koromaru won't go down there. Did you know? Ever. Since April." },
      { s: 'yukari', f: 'neutral', t: "I'm not saying anything. I'm just saying I'd like to know who has my mom's number." },
      { n: "She turned up the hill, and took Solar's arm under the umbrella, tight, the way you'd hold on to something on a slope, and didn't let go of it all the way to the dorm door, and at the door she let go and stood there under the porch light shaking out the umbrella longer than it needed, flicking the water off it in hard little snaps, and then said *night*, though it was half past six, and went upstairs." },
      { n: "Later, through the ceiling, Solar heard her phone ring. Once. Twice. On the third ring it was picked up, and there was Yukari's voice, careful, flat, polite. And then, much quieter, a question, and a long silence after it, the silence of somebody being told something they'd have to sit with." },
      { n: "The radio didn't come on. Solar lay in the dark and listened to the rain on the window and the nothing above her head, and at midnight the red came up through the glass and took the rain away, and the nothing went on, exactly the same, as if it had been red all along." }
    ] },
    { after: '8/12', title: '5: welcoming fire', place: 'Port Island · Seaside Park', time: 'Daytime', music: 'tender', scene: [
      { bg: 'port-island-seaside-park' },
      { n: "Obon came in on a heat so heavy you could lean on it. The thirteenth of August, a Friday, the whole of Port Island white and still at one in the afternoon, the sea flat as a plate, the gulls not bothering, and on the seawall at Seaside Park, where Yukari had spent most of the summer holidays with a melon soda and her headphones and a library book she never turned the page of, Yukari sitting in a dark plain summer dress Solar had never seen her wear, with her knees together and a paper shopping bag beside her." },
      { n: "She'd texted at eight that morning. *are you busy at 1. you can say yes. you can say no. seawall.* And then, a minute later: *wear something dark if you have it. not black. dark.*" },
      { n: "In the bag there was a bundle of pale dry hemp stalks tied with string, a box of incense, a small cloth, a bottle of water, a packet of the cheap round rice crackers they sold in every konbini, and a white paper lantern folded flat." },
      { s: 'yukari', f: 'neutral', t: "It's Obon. You know Obon? You light a little fire on the first night so the dead can find the way home. And then on the last night you light another one so they can find the way back." },
      { s: 'yukari', f: 'neutral', t: "My dad's at a temple on the hill behind the station. Iwatodai side. I go every year. On my own. I'm going today and I'd like you to come, and my mom's going to be there, and I need you to stand somewhere I can see you while she's there, and I need you to know that's a lot to ask and you can say no." },
      { choose: [
        { t: "I'll come.", notes: 3, then: [
          { n: "Yukari let out a breath and looked at the sea, and nodded, twice, short and sharp, like somebody ticking a box." },
          { s: 'yukari', f: 'neutral', t: "Okay. Good. Okay. Then we have to go now or we'll be late, and if we're late she'll be early, and she'll be there on her own with the stone, and I don't want that either. I don't want either of the things. That's the problem with her." }
        ] },
        { t: "You said asking was a lot. This isn't. It's a walk.", notes: 3, then: [
          { s: 'yukari', f: 'surprised', t: "...It's a walk up a hill to a grave with my mother. In this heat." },
          { s: 'solar', f: 'neutral', t: "It's a walk." },
          { s: 'yukari', f: 'neutral', t: "You're so annoying. Okay. It's a walk. Get up." }
        ] },
        { t: "(Pick up the bag.)", notes: 2, then: [
          { n: "She picked the bag up off the seawall. Yukari watched her do it, and then stood, and brushed the back of her dress down, twice, the way you'd brush off something that wasn't there." }
        ] }
      ] },
      { ifFlag: 'eqx-yukari-mom-yes', then: [
        { n: "On the monorail back across the bay she told Solar about the qualifier, as if Solar hadn't been there. She'd come third. She'd qualified. Her mother had come, early, too early, in big sunglasses and a lot of perfume, and sat in the family block in the very back row with a paper fan, and Yukari had shot all twelve without turning her head once." },
        { s: 'yukari', f: 'neutral', t: "And when I went up for the result she was gone. Her seat was empty. She'd left before they called it. She texted from the train. *you were wonderful.* She didn't wait to see if I'd placed." },
        { s: 'yukari', f: 'sad', t: "I didn't know if I was mad or relieved. I'm still not. I think she didn't know if she'd be allowed to stay for the end." }
      ], else: [
        { n: "On the monorail back across the bay she told Solar about the qualifier, as if Solar hadn't been there. She'd come third. She'd qualified. She hadn't told her mother where it was, in the end. She'd never found out who'd phoned." },
        { s: 'yukari', f: 'neutral', t: "She sent flowers. To the dorm. After. Lilies. Addressed to *Takeba Yukari and her friends*. Mitsuru-senpai put them in the lounge and Junpei sneezed for three days." },
        { s: 'yukari', f: 'sad', t: "I didn't know how she knew I'd placed. I didn't ask. I'm getting really good at not asking things." }
      ] },

      { place: 'Iwatodai · Temple Cemetery', time: 'Afternoon', bg: 'naganaki-shrine-summer', soft: true },
      // BG: eqx-temple-cemetery-obon — a small hillside temple cemetery in midsummer, rows of gray stone family graves on stepped terraces, wooden memorial tablets standing behind them, cicadas in the cedars, fresh flowers and rising incense smoke, the bay visible far below between the trees.
      { n: "The temple was a small one, up a long flight of stone steps behind the station that Solar had walked past a hundred times without seeing, and the cemetery went up the hill behind it in terraces, row after row of gray family stones with their tall wooden tablets standing behind them like people waiting in line, and every stone this week had fresh flowers on it, and every terrace had a family on it, crouched, washing, lighting, talking in low summer voices, children running between the rows with buckets." },
      { n: "The cicadas in the cedars were so loud they felt like heat. The incense smoke stood straight up off every grave in the dead air, a hundred thin gray threads going up into the trees, and the smell of it was everywhere, sweet and dusty, mixed with hot stone and cut chrysanthemums and the iron smell of the ladles in the water buckets." },
      { n: "Yukari's mother was already there." },
      { n: "She was crouched at a stone on the fourth terrace in a cream linen dress that was wrong for a cemetery and exactly right for her, Solar thought, with sunglasses pushed up on her head and a cloth in her hand, washing the stone very fast, too fast, the way you'd clean a kitchen before guests. She was pretty in the way Yukari was going to be pretty, and nervous in a way Yukari had never once let herself be, and when she heard them on the steps she stood up so quickly she knocked the bucket over, and the water ran away down the terrace between the stones." },
      { n: "*Yukari,* she said, and then, at once, before anything else: *oh, and you brought your friend, how lovely, oh, I didn't bring enough crackers.*" },
      { s: 'yukari', f: 'neutral', t: "Mom. This is Solar. Solar, my mom. She always says she didn't bring enough. She always brings too many." },
      { n: "Her mother laughed, a quick high laugh, and bowed to Solar, and Solar bowed back, and her mother said *thank you for looking after her* in a voice that had obviously been ready since the bottom of the hill. Yukari picked up the bucket without a word and went to refill it at the tap at the end of the row, and stood at the tap a long time while it filled, with her back to both of them, and then turned her head and found Solar, and turned it back." },
      { n: "*Takeba Eiichiro.* It was cut into the stone in plain characters, the family name and under it the dates, a year that Solar did the sum of without meaning to, and he'd been younger than her father." },
      { n: "They washed it together, the three of them. Yukari's mother at one side, Yukari at the other, Solar at the back with the cloth and the tablets, and nobody talked, and the cicadas talked for all of them. Then Yukari's mother laid the hemp stalks crosswise on the flat stone in front of the grave, the way you were supposed to, carefully, a little pile like kindling, and took a lighter out of her handbag, and held it out." },
      { n: "Not to the stalks. To Yukari." },
      { n: "*You do it,* her mother said. *He'd like it better if it was you.*" },
      { n: "Yukari looked at the lighter for a long moment. Then she took it, and crouched, and lit the stalks, and they caught at once in the heat, a small bright crackling fire no bigger than two hands, and the smoke went up straight among all the other smoke, and Yukari stayed crouched there with the lighter in her fist and watched it, and said, very quietly, to the fire, *hi, Dad*." },
      // CG: eqx-obon-fire — a hillside cemetery at Obon in late afternoon heat, a teenage girl in a dark summer dress crouched before a family grave lighting a tiny fire of pale hemp stalks, a woman in a cream dress crouched beside her, a second girl standing a few steps back watching, incense smoke rising straight up from every grave on the terrace.
      { choose: [
        { t: "(Stay standing. A step back. Where she can see you.)", notes: 3, then: [
          { n: "She stayed where she was, a step back, standing, with the cloth in her hands. Yukari didn't look round. She didn't need to. Solar watched her shoulders know she was there, and stay down." }
        ] },
        { t: "(Kneel down beside her. Put your hands together.)", notes: 3, then: [
          { n: "She knelt on the hot stone beside Yukari and put her hands together in front of the little fire, and closed her eyes, and didn't know what to say to a man she'd never met, whose name had been at the bottom of everything S.E.E.S. had ever fought, so she said thank you, for Yukari, in her head, and opened her eyes, and Yukari was looking at her sideways through the smoke." }
        ] },
        { t: "(Take out the crackers. Put them on the stone.)", notes: 2, then: [
          { n: "She opened the packet of crackers and laid three on the stone beside the incense, the way her own mothers had laid things on their stones, in other lives, other years. Yukari's mother watched her do it and her face did something soft and surprised. *He liked those,* she said. *How did you know?* Solar didn't. Yukari did. She'd put them in the bag." }
        ] }
      ] },
      { n: "When the fire had gone down to a few red threads in gray ash, Yukari's mother sat back on her heels and fanned herself with the paper fan and talked. She talked the way people talk at graves when the silence gets too big, about the heat, about the train, about the temple's new roof, about a man at her work who was very funny, about nothing, quick and light and a little breathless. And then, still fanning, still light, in the same breath as the roof:" },
      { n: "*Oh, and I might be moving closer. Did I say? Just for a while. A room came up.*" },
      { n: "Yukari went still." },
      { n: "*A lady phoned,* her mother said. *Back in June, about your competition, and then again last week. So kind. She runs a boarding house down by the river here, she said, a lovely old place, with a garden. She said she'd heard you'd been having a hard summer. She said there's a room, and I could have it for as long as I liked, and you'd be so glad to have me near.*" },
      { n: "*She said I should think about staying,* her mother said, and smiled at the grave, and fanned herself. *Isn't that funny? Nobody's ever asked me to stay anywhere.*" },
      { n: "The cicadas stopped." },
      { n: "All of them, in all the cedars, at once, the way they did sometimes in the heat for no reason, and in the gap the cemetery was suddenly very quiet, the families on the other terraces lifting their heads, a child's bucket clanking somewhere far off, and the smoke going up off a hundred stones into the dead air. Then they started again, one, and then all of them, louder." },
      { s: 'yukari', f: 'neutral', t: "Mom. Give me a second. I need— I need to get more water." },
      { n: "She got up. She didn't pick up the bucket. She walked to the end of the terrace, to the tap, and past it, to the low wall at the edge where the hill dropped away and you could see the whole of Iwatodai below through the trees, the station and the roofs and, down to the left, the dark line of the river and the old tiled houses along it, and stood there with both hands on the hot stone of the wall, and Solar went after her." },
      { s: 'yukari', f: 'serious', t: "There's one boarding house by the river." },
      { s: 'solar', f: 'neutral', t: "I know." },
      { s: 'yukari', f: 'serious', t: "She had my mom's number in June. In *June*, Solar. She called my mom about the qualifier before I'd even told anybody I'd been picked." },
      { s: 'yukari', f: 'sad', t: "And my mom's so happy. Look at her. She's *happy*. Someone asked her to stay somewhere. That's the nicest thing anyone's done for her in years, and it's—" },
      { n: "She didn't finish it. She stood with her hands on the wall and looked down at the river street, at the persimmon tree you could just see from up here, a dark green smudge over a dark roof, and her knuckles went white on the stone." },
      { s: 'yukari', f: 'neutral', t: "Tell me what to say to her. I mean it. I can't— if I say it, it'll come out wrong, it'll come out like I don't want her, it always comes out like I don't want her. Tell me what to say." },
      { choose: [
        { t: "Tell her to go home. Today, or when Obon's over. Not because you don't want her. Because you do.", notes: 3, flag: 'eqx-yukari-mom-home', then: [
          { n: "Yukari looked at her. Then she shut her eyes, and nodded, and turned round, and walked back along the terrace to her mother with her back very straight, like someone walking up to the line." },
          { n: "Solar didn't hear all of it. She heard enough. She heard Yukari crouch down by the grave and say *Mom* in a voice she'd never heard her use, low, not flat at all. She heard *I want you to go home*. She heard her mother's fan stop. She heard *not because— it's not you, it's here, this town's not, it's not a good summer here, and I want you somewhere I know is safe, and I can't explain, and I need you to just do it*." },
          { n: "And she heard her mother say, after a long time, very small, *you want me safe?* as if it were a word in a language she'd been told about and never heard spoken." }
        ] },
        { t: "Tell her the truth. You'd like her near. Just not there. Never there.", notes: 3, then: [
          { n: "Yukari looked at her for a long moment. Then she went back along the terrace and crouched down by her mother at the grave, and Solar watched her try three times to start and stop each time, and then just say it, to the ashes, not to her mother." },
          { n: "*I'd like you near. I would. I've wanted you near since I was eleven. Just not there. Don't take that room. Don't take any room by the river. Find somewhere else, or go home and come back in the autumn, or the winter, or whenever, but not there, please, Mom, never there.*" },
          { n: "Her mother's fan stopped. She looked at her daughter for a long time, at the side of her face, and then put out her hand and touched Yukari's hair, once, the way you'd touch something you weren't sure you were still allowed to." }
        ] },
        { t: "That's yours to say, Yukari. I'll be right here while you find it.", notes: 2, then: [
          { s: 'yukari', f: 'sad', t: "...You're doing it again. The thing. Where you don't." },
          { s: 'solar', f: 'neutral', t: "I'm standing here. I'm not going anywhere till you've said it." },
          { n: "Yukari stood at the wall a while longer. Then she went back. Solar stayed by the tap, where Yukari could see her, and watched her crouch down beside her mother at the grave and start to talk, haltingly, the way you'd walk across ice, and didn't hear the words, and didn't need to. She saw her mother's fan stop. She saw Yukari's hand go out, after a long time, and rest on her mother's knee." }
        ] }
      ] },
      { n: "Her mother said she'd go home on the sixteenth. When the lanterns went. She'd stay at a business hotel by the station till then, a horrible one, she said, laughing, with paper walls, and she'd telephone the nice lady and tell her thank you but no. She said it to Yukari. She said it again to Solar, at the top of the steps, as if Solar were someone who'd need to be told, and held Solar's hand in both of hers for a moment, damp and warm and smelling of incense." },
      { n: "*I had the strangest dream about her,* she said. *Yukari. When she was little. I dreamed I was at her door and I knocked, the way you do, twice, and said, it's only me, Yuka-chan, and she let me in.*" },
      { n: "*I never knock twice,* she said, and laughed. *I always just bang. Isn't that funny, what you do in dreams?*" },
      { n: "Then she went down the steps with her sunglasses on and her fan going, quick and light, and at the bottom she turned round and waved, a big wave, both arms, like somebody on a platform, and Yukari, at the top, after a long second, lifted one hand." },

      { place: 'Iwatodai · Temple Steps', time: 'Evening', bg: 'naganaki-shrine-summer', soft: true },
      { n: "They sat on the temple steps until the light went orange and the families went home one by one with their empty buckets and the cicadas changed over to the evening ones, the high slow ones that sounded like somebody winding a clock. Yukari had the folded paper lantern in her lap. She hadn't unfolded it. It was for the last night, she said. For the sixteenth. For sending him back." },
      { s: 'yukari', f: 'neutral', t: "I've never told her to go anywhere. You know that? Not once. I've only ever left. I left the house, I left the school she picked, I left her number off everything. I've never once stood there and said go, I want you to go, because I want you." },
      { s: 'yukari', f: 'sad', t: "It felt horrible. It felt like the worst thing I've ever said to her. It felt like the first time I ever said something to her that was true." },
      { choose: [
        { t: "It was both.", notes: 3, then: [
          { s: 'yukari', f: 'neutral', t: "...Yeah. It was both. Ken says you're allowed both. I'm going to start charging him for that." }
        ] },
        { t: "She heard it. She said *safe* like she'd never heard it before.", notes: 3, then: [
          { s: 'yukari', f: 'sad', t: "She hasn't. Not from me. I've never once said I wanted her safe. I've only ever said I wanted her gone. They sound the same from the other end, I think. They sounded the same from mine, till today." }
        ] },
        { t: "(Say nothing. Lean on her.)", notes: 2, then: [
          { n: "She leaned on her, shoulder to shoulder, on the warm stone step, and Yukari leaned back, and they sat like that holding each other up while the clock-winding cicadas went on in the cedars and the incense smoke thinned to nothing above the terraces behind them." }
        ] }
      ] },
      { s: 'yukari', f: 'serious', t: "She called my mom, Solar. That woman. In June. She found my mom's number and she called her and she asked her to stay. My mom. Who's never been asked to stay anywhere in her life." },
      { s: 'yukari', f: 'serious', t: "I don't know what that is. I don't know what you'd call that. But I'm going to the station on the sixteenth and I'm going to watch her get on the train, and I'm going to stand on the platform until it's gone round the bend, and I'm going to *see* it go." },
      { n: "She stood up, and brushed down her dress, twice, and held out her hand to pull Solar up, and Solar took it, and Yukari didn't let go of it at the bottom of the steps, or at the station, or on the hill, and at the corner by the post office she didn't look down the river road at all. She looked straight up the hill, at the dorm, at the lit windows, and counted them under her breath, and Solar heard her lose count, and start again." }
    ] },
    { after: '10/4', title: '6: it’s only me', place: 'Gekkoukan High · Archery Range', time: 'After School', music: 'badfeeling', scene: [
      { bg: 'gekkoukan-archery-range' },
      // BG: gekkoukan-archery-range-autumn — the school archery range on a clear cold October afternoon, the cherry trees by the fence turned rust and yellow, dry leaves blown across the gravel and the grass, long low sun across the targets, a few students on the bench behind the line.
      { n: "October came in clear and cold, all at once, the way it does after a bad summer, as if the year had decided to stop pretending. The cherry trees along the range fence had gone rust and yellow in a week and were dropping their leaves onto the gravel in dry handfuls that skittered when the wind moved, and the light came in long and low across the grass by four, so that every target threw a shadow twice its own length toward the shooting line, and every archer on the line stood in a stripe of gold with a stripe of shade behind her." },
      { n: "The club was back to full practice. Twelve girls on the line in their whites, the captain walking behind them with her whistle, the thud and crack of arrows going in, and on the bench behind the line a few of the first-years' friends and a boy from the kendo club with his homework on his knee." },
      { n: "Yukari was at the end of the line. She drew, and held, and loosed, and the arrow went into the gold, and she turned her head." },
      { n: "Not the few degrees, toward the second row, left side, end seat. All the way round. A slow sweep, left to right, along the whole bench behind the line, every face on it, the first-years and the kendo boy and the captain with her clipboard and the gate and the path beyond the gate, the way a lighthouse goes round, and then back to the target. Then she nocked the next arrow. Drew. Loosed. Gold. And turned. All the way round. Every face." },
      { n: "The captain had stopped behind her. She stood with her clipboard against her chest and watched Yukari do it three times, with the patient worried face of someone who'd already said something about it and been ignored, and then she saw Solar at the gate and looked at her, politely, as she'd look at anybody's cousin, and then, slowly, for the first time all year, as if she were trying to remember where she'd seen her." },
      { n: "*She's been doing that since the holiday,* she said to Solar, quietly, at the gate, as if it were a confidence. *Every arrow. She counts us. I asked her what she was counting and she said everyone. I don't know you, do I? You come every week. I feel like I should know you.*" },
      { choose: [
        { t: "I used to be in the club. For a bit. I was very bad.", notes: 3, then: [
          { n: "The captain looked at her a moment longer, puzzled, and then, very faintly, she smiled, the way you'd smile at the edge of a joke you couldn't quite place. *The netting,* she said, uncertainly, to herself, and then shook her head and went back down the line." }
        ] },
        { t: "I'm her friend. I'll talk to her.", notes: 2, then: [
          { n: "*Please,* the captain said. *She's the best shot we have and she's going to give herself a neck injury.* She went back down the line, and stopped once, halfway, and looked back at Solar over her shoulder with the same faint frown, and then let it go." }
        ] }
      ] },
      { n: "Yukari saw her. On the next sweep. Her head went round and came to the gate and stopped there, and the sweep didn't go on. She lowered her bow." },
      { n: "She came off the line without asking the captain, which nobody did, and walked across the gravel in her whites with the bow still in her hand and stood in front of Solar at the gate with her face doing something it didn't know how to do." },
      { s: 'yukari', f: 'sad', t: "...Hi." },
      { s: 'yukari', f: 'sad', t: "I haven't said anything. To you. Since. I keep starting. I start in the kitchen and someone comes in, and I start on the stairs and you're with Haechan, and I start at night through the ceiling and I can't say it through a ceiling." },
      { s: 'yukari', f: 'serious', t: "Your moms. All three of them. I'm so sorry. I was on my knees being sick through a railing while it happened and I'm so sorry, Solar." },
      { n: "Solar's body did the thing it had been doing since the bridge whenever anybody said it out loud. Her stomach went, first, a long drop, the floor of a lift going. Then her hands went cold. Then her face did the face, the warm still kind one, the one she used in doorways, and she felt it go on like a coat, and felt Yukari see it go on." },
      { s: 'yukari', f: 'neutral', t: "Don't. Don't do the face. Not for me. I'm not one of the dads." },
      { choose: [
        { t: "(Let the face go.)", notes: 3, then: [
          { n: "She let it go. It was harder than putting it on. It came off in pieces, the mouth first, then the eyes, and what was under it wasn't anything much, just tired, just a girl at a gate in the cold with three pairs of shoes in a genkan across town that nobody would move, and Yukari looked at whatever it was and didn't flinch, and put out her free hand, and held on to Solar's sleeve." }
        ] },
        { t: "I'm okay. I'm— I'm okay.", notes: 1, then: [
          { s: 'yukari', f: 'serious', t: "No, you're not. I know what okay looks like on you. That isn't it. That's the other one." },
          { n: "She took hold of Solar's sleeve anyway, between two fingers, and held on to it, the way you'd hold the corner of a page to keep your place." }
        ] },
        { t: "You were on your knees because you saw it. That's what a person does.", notes: 2, then: [
          { s: 'yukari', f: 'sad', t: "Hanni held my hair. Hanni didn't throw up. Hanni just stood there and held my hair and looked at it." },
          { s: 'yukari', f: 'neutral', t: "...I'd like to be the one who holds the hair. Next time. If there's a next time. I'd like to be able to." }
        ] }
      ] },
      { n: "The captain blew the whistle for the end of practice. The girls came off the line in twos and threes and started pulling arrows and taking the targets in, and Yukari didn't move. She stood at the gate with her bow and her hand on Solar's sleeve and watched them go up and down the range, and Solar watched her eyes go along them. One, two, three. All the way to twelve. Back again." },
      { s: 'yukari', f: 'neutral', t: "I can't stop. Since the bridge. I count everybody. In class, at lunch, in the lounge. I count the bench at practice between every arrow. If I don't, I can't shoot. If I do, I can't stop." },
      { ifChoice: { 'asks.yukari': 'yes' }, then: [
        { s: 'yukari', f: 'sad', t: "You promised me. In June. Stay where I can see you. And you have. You've been exactly where you said, every day, second row, left side. And it doesn't help. Because I made you promise, and then I looked round on the bridge and there were three people I wasn't watching." },
        { s: 'yukari', f: 'sad', t: "I can't make a promise big enough. I'd need everybody to promise. I'd need the whole town." }
      ], else: [ { ifChoice: { 'asks.yukari': 'choose' }, then: [
        { s: 'yukari', f: 'neutral', t: "You told me where you are is yours. In June. I hated it. I've been trying so hard to believe it. And then the bridge, and I thought, if where you are is yours, then where they were was theirs, and they were walking home, and they never got to choose anything, it just— took them." },
        { s: 'yukari', f: 'sad', t: "So now I watch everybody. Because nobody gets to choose, apparently. Except the thing on the bridge." }
      ], else: [
        { s: 'yukari', f: 'neutral', t: "You told me you couldn't promise. In June. You were right. I was so mad. I'm not mad anymore. Nobody can promise anything here. I watched three people's moms walk home." },
        { s: 'yukari', f: 'sad', t: "So now I watch everybody instead. It's like trying to hold water. You can't. I do it anyway." }
      ] } ] },

      { place: 'Gekkoukan High · Archery Range', time: 'Evening', bg: 'gekkoukan-archery-range', soft: true },
      { n: "When the others had gone, Yukari went back to the line on her own and sat down on the edge of the platform, the way she had in the rain in June, with her feet hanging over the grass, and Solar sat beside her. The sun was right down on the fence now, a red line through the trees. Every target's shadow reached all the way to their shoes." },
      { ifFlag: 'eqx-yukari-mom-home', then: [
        { s: 'yukari', f: 'neutral', t: "She's home. My mom. She went on the sixteenth. I watched the train go round the bend." },
        { s: 'yukari', f: 'neutral', t: "She calls every night now. Nine o'clock. And I answer. Every time. First ring. We talk about her fern and the funny man at her work for eleven minutes, and then I say goodnight, and I've never once in my life been so glad to hear about a fern." }
      ], else: [
        { s: 'yukari', f: 'neutral', t: "She went home. My mom. In the end. She didn't take the room. She went on the sixteenth and I watched the train go round the bend." },
        { s: 'yukari', f: 'neutral', t: "She calls every night now. Nine o'clock. And I answer. First ring. Every time. I listen to her talk about her fern. I'd listen to her read the phone book." }
      ] },
      { s: 'yukari', f: 'serious', t: "Because mothers get taken here, Solar. That's a thing that happens in this town now. Mothers walk home over a bridge and they get—" },
      { n: "She stopped. She looked at Solar sideways, very fast, the look you'd give somebody whose hand you'd just stepped on." },
      { s: 'yukari', f: 'sad', t: "...Sorry. Sorry. I keep doing that. I keep saying it like it's mine." },
      { s: 'solar', f: 'neutral', t: "It's yours too." },
      { n: "Yukari looked at her for a long time. Then she looked down at the grass, at the long shadow of the nearest target lying across it, and said the thing. Solar could tell it was the thing. Her voice went flat, the score voice, the one she used to say things that would break if she said them any other way." },
      { ifEvent: 'eqx-knock', then: [
        { s: 'yukari', f: 'neutral', t: "The night of the knock. In April. I told you my door knocked twice and I said it was saving it." },
        { s: 'yukari', f: 'neutral', t: "That's not what happened. I mean it is. It knocked twice. And then it talked." }
      ], else: [
        { s: 'yukari', f: 'neutral', t: "In April. One night in the red. My door knocked twice. I never told you properly." },
        { s: 'yukari', f: 'neutral', t: "It knocked. And then it talked." }
      ] },
      { s: 'yukari', f: 'neutral', t: "*Yuka-chan. It's only me.*" },
      { s: 'yukari', f: 'serious', t: "My mom's voice. Exactly. The way she used to say it when I was little and I'd locked myself in my room because she'd brought a man home. *Yuka-chan, it's only me.* Through the door. Like nothing had happened." },
      { s: 'yukari', f: 'serious', t: "I had my hand on the handle. I was sitting on the floor against the door with my hand up on the handle, holding it, and I didn't know if I was holding it shut or about to open it. I sat there till the red went. I didn't move my hand. In the morning it was stiff. I couldn't make a fist for an hour." },
      { s: 'yukari', f: 'sad', t: "And then in June she starts calling. Nicer. Lucky. Like she knew. And then she has the dream, *I knocked twice and you let me in, it was so lovely*. And then that woman calls her and asks her to stay." },
      { s: 'yukari', f: 'sad', t: "Like something heard it through the door. My mom. What she sounds like. And it went and found her." },
      { n: "The sun went into the fence. The shadows on the grass went out, all of them, at once, and the range was gray and cold and very quiet, and somewhere out by the far butts the wind moved the dry leaves in a long slow hiss." },
      { n: "Solar sat beside her and understood it the way you understand a word you've been reading all year without looking up. Not *stay where I can see you* because Yukari was clingy, or scared, or still angry about last year. Because seeing was the only thing she had. Because in this town the people you loved came to your door in the dark and said *it's only me*, in exactly the right voice, and the only way to know which ones were real was to have your eyes on them, all of them, all the time, every face on every bench, counting." },
      { n: "Because she'd sat on the floor with her hand on the handle once, and didn't know, to this day, which way she'd been about to turn it." },
      { flag: 'eqx-floor-yukari' },
      { s: 'yukari', f: 'neutral', t: "Fuuka found it. Down in the Well. On Saturday. She didn't want to tell me. She said there's a floor with a door on it, just a door, standing up on its own in the water, and it knocks twice, and it says it." },
      { s: 'yukari', f: 'neutral', t: "In my mom's voice. On the comms. She played it for me because I made her. She cried. I didn't. I'm saving it." },
      { s: 'yukari', f: 'serious', t: "I'm going down there. Not now. When I can. I'd like you to be there. Somewhere I can see you. I know. I know. I'm still asking. I'm working on it." },
      // CG: eqx-yukari-gate — an empty school archery range at dusk in autumn, two girls sitting side by side on the edge of the wooden shooting platform with their feet over the grass, one in white archery dress with a bow across her knees, holding the other's sleeve between two fingers, dry leaves on the gravel, the targets dark against a red sky.
      { choose: [
        { t: "I'll be there. Not because you asked. Because I want to see you open it. Or not open it. Whichever you pick.", notes: 3, then: [
          { s: 'yukari', f: 'surprised', t: "...Whichever I pick." },
          { s: 'solar', f: 'neutral', t: "It's your door." },
          { n: "Yukari looked at her for a long time in the gray. Then her mouth did something at the corner, small and crooked and very tired, that the captain would never know was a smile." },
          { s: 'yukari', f: 'neutral', t: "You're so annoying. That's the most annoying thing you've said all year, and you've said a lot." }
        ] },
        { t: "Then I'll stay where you can see me. Every day. Second row.", notes: 2, then: [
          { n: "Yukari breathed out. She nodded. She held on to Solar's sleeve a little tighter, and Solar felt something under her own ribs go small and cold and quiet, the way it had in June on the canal wall, and didn't look at it, and Yukari didn't see it go." },
          { s: 'yukari', f: 'neutral', t: "...Okay. Second row. Okay." }
        ] },
        { t: "(Turn her chin. Gently. Toward you, and away from the bench.)", notes: 3, then: [
          { n: "She put two fingers under Yukari's chin and turned her face, slowly, away from the empty bench she'd been counting, away from the gate and the path, until she was looking at Solar and only at Solar, and held it there, and Yukari let her." },
          { s: 'yukari', f: 'sad', t: "...One." },
          { s: 'solar', f: 'neutral', t: "One." },
          { s: 'yukari', f: 'sad', t: "Okay. One's enough for right now. I can count to one." }
        ] }
      ] },
      { n: "Then Yukari stood up, all at once, the way she did everything once she'd decided, and pulled Solar up by the sleeve she was still holding, and walked her, not to the gate, but along the platform to the bench behind the line. The second row. The left side. The end seat, by the post." },
      { n: "She sat Solar down on the bench. Then she went and sat down herself, on the shooting line, cross-legged on the cold boards, facing the bench instead of the targets, with her back to the whole range and her bow across her knees, and looked at Solar." },
      { s: 'yukari', f: 'neutral', t: "There. Now I'm the one where you can see me. You've had three moms walk off a bridge. I'm going to sit right here where you can see me, every Monday and Wednesday and Friday, until you get sick of my face." },
      { s: 'yukari', f: 'neutral', t: "And you didn't ask. I want that on record. You didn't ask me. I just decided." },
      { choose: [
        { t: "(Stay on the bench. Look at her. Let her be looked at.)", notes: 3, flag: 'eqx-yukari-turned', then: [
          { n: "She stayed on the bench, and looked, and Yukari sat on the line in her whites in the gray cold and let herself be looked at, which Solar had never once seen her do, not in two years, without a single joke to put in front of it, and the wind went over the range, and neither of them counted anything." }
        ] },
        { t: "It's cold. You'll freeze.", notes: 2, then: [
          { s: 'yukari', f: 'neutral', t: "Then you'll have to watch me freeze. That's the deal." },
          { n: "She didn't move. She pulled the pink hoodie's sleeves down over her hands and stayed exactly where she was, on the cold boards, and looked at Solar, and after a while Solar stopped telling her to get up." }
        ] }
      ] },
      { place: 'Iwatodai Dorm · Hallway', time: 'Night', bg: 'iwatodaidorm-hallway', soft: true },
      { n: "She walked her up. At the top of the stairs, outside Solar's door, the photo strip was still wedged in the frame, three frames long, curled now and gone soft from the summer damp, and faded at the edges where the hall light had been on it every night since April." },
      { n: "Yukari didn't press it flat. She stood looking at it for a moment. Then she took her phone out, and turned the ringer all the way up, and held it up so Solar could see her do it, and put it back in her pocket." },
      { s: 'yukari', f: 'neutral', t: "Nine o'clock. She'll call. You'll hear it through the ceiling. I'm going to answer it on the first ring." },
      { s: 'yukari', f: 'neutral', t: "If you ever hear it ring four times and stop, come up. Don't knock. Just come in. I'll know it's you because you won't say anything." },
      { n: "At nine, through the ceiling, the phone rang once. Picked up. Yukari's voice, low and ordinary, saying *hi, Mom*, and then, after a while, a laugh, short and surprised, about a fern." },
      { n: "Solar lay on her bed in the dark with the light from the hall coming under the door and listened to the shape of it for eleven minutes, and at the end of the eleven minutes she heard Yukari say goodnight, and then, much more quietly, after the call had ended, to nobody, to the room, very steadily, one word, the way you'd test a floorboard before you trusted it." },
      { n: "*One.*" }
    ] },
    // Rank 7 (Nov 16, round 3): after 11/8 (Monday; 11/10's after-school slot is eqx-every-hill). The range in November, then
    // her ask floor in the Well that night (eqx-floor-yukari: a door standing in the water that knocks twice in her mother's
    // voice), then breakfast. Reads dead.shinjiro, dead.aigis, ifBefore 11/22, eqx-yukari-turned, eqx-yukari-mom-home,
    // eqx-yukari-arrow. Sets eqx-yukari-door-hers (+choose: Solar leaves the handle to her and she lets go of it) or
    // eqx-yukari-door-held (Solar puts her hand over Yukari's and they hold it shut together till the hour ends).
    { after: '11/8', title: '7: hand on the handle', place: 'Gekkoukan High · Archery Range', time: 'After School', music: 'badfeeling', scene: [
      { bg: 'gekkoukan-archery-range' },
      // BG: gekkoukan-archery-range-november — the school archery range on a gray raw November afternoon, the cherry trees by the fence bare, wet black leaves pasted on the gravel, the targets dark with damp, a low white sky.
      { n: "November had taken the leaves off the cherry trees and pasted them flat and black on the gravel with a week of thin rain, and the range smelled of wet straw and cold wood and the smoke from somebody burning leaves on the other side of the school wall, a smell that got into your hair and stayed. The sky was low and white and didn't move. The targets had gone dark with damp. The club shot anyway, twelve girls in their whites with cardigans over them, breath going up off the line in small gray puffs between arrows." },
      { ifFlag: 'eqx-yukari-turned', then: [
        { n: "Yukari wasn't on the line. She was sitting on it. At the end, cross-legged on the cold boards with her back to the targets and her bow across her knees, facing the bench, the way she'd sat every Monday and Wednesday and Friday since October, until the captain had given up telling her to stand and started, instead, very quietly, putting a cushion down on that end of the platform before practice." },
        { n: "She saw Solar come through the gate. She didn't wave. She looked, and kept looking, the whole way across the gravel, the way you'd watch somebody carry something full to the brim." }
      ], else: [
        { n: "Yukari was at the end of the line. She drew, and held, and loosed, and turned her head, the long slow sweep along the bench and the gate and the path, every face, and back. She'd been doing it for five weeks. The captain had stopped asking. The first-years had started, without being told, sitting very still when she looked." }
      ] },
      { ifFlag: 'dead.shinjiro', then: [
        { n: "She'd cut her hair. Not much. Somebody else might not have seen it. An inch off the ends, done herself, in a bathroom, with the kitchen scissors, crooked at the back where she couldn't see. She'd done it the night of the funeral. Solar had heard the scissors through the ceiling." },
        { s: 'yukari', f: 'neutral', t: "Don't say anything about the hair. I know. Fuuka already offered to fix it. I said no. I want it crooked for a bit." },
        { s: 'yukari', f: 'sad', t: "He said *get Yukari*. Akihiko-senpai. On the steps. Fuuka played me the comms because I made her. You can hear him say it. *Somebody get—* And I was at the top. With my bow. Where Mitsuru-senpai put me. Doing exactly what I was told." },
        { s: 'yukari', f: 'serious', t: "I'm the one who heals. That's the whole of what I'm for, down there. And I was at the top of the rope keeping the lip clear while somebody said my name." },
        { choose: [
          { t: "If you'd been on the steps, it would have been you in front of my father.", notes: 3, then: [
            { s: 'yukari', f: 'sad', t: "...Don't." },
            { s: 'solar', f: 'neutral', t: "Mitsuru put you at the top because she couldn't stand it being you." },
            { n: "Yukari looked at her. Then she looked down at the bow on her knees, at her own hands on it, and her jaw worked, and she didn't say anything for a long time." },
            { s: 'yukari', f: 'sad', t: "...I know. I know that. She told me. I yelled at her. I'm going to have to say sorry. I hate saying sorry to her, she says *accepted* like it's a memo." }
          ] },
          { t: "(Sit down on the boards beside her. Don't fix it.)", notes: 3, then: [
            { n: "She sat down beside her on the cold boards, on the captain's cushion's other half, and didn't say anything, and didn't try to fix it, and after a while Yukari leaned, very slightly, the way you'd lean on a wall you weren't sure was load-bearing, and found it was." }
          ] }
        ] }
      ], else: [
        { s: 'yukari', f: 'neutral', t: "He's lying down. I want that on record. I went into the kitchen at six this morning and he was lying down on the floor in front of the stove on a folded futon, flat on his back, holding the pan up over his chest and burning Ken's toast from there. Lying down." },
        { s: 'yukari', f: 'neutral', t: "I said that doesn't count. He said I'd said *lie down* and I hadn't said where." },
        { s: 'yukari', f: 'serious', t: "I healed it, on the lip. Three lines. I put my hands on his chest in the red and I could feel them close under my palms like zips. And they closed. And they're still pink, and they still pull when he reaches for the top shelf, and he still won't let me look." },
        { s: 'yukari', f: 'sad', t: "I healed it. I didn't fix it. I keep telling everybody that like it's a technical point. It's not a technical point. It's the only thing I've thought about for two weeks." },
        { choose: [
          { t: "You were there. That's the part that counted.", notes: 3, then: [
            { s: 'yukari', f: 'neutral', t: "I was at the top. Mitsuru put me at the top. He came up the rope on his own feet with his coat in ribbons and I was just *there*, standing, when he got to me." },
            { s: 'yukari', f: 'sad', t: "...Yeah. Okay. I was there. I'm going to try that on. It's a bit big." }
          ] },
          { t: "(Sit down on the boards beside her.)", notes: 2, then: [
            { n: "She sat down beside her on the cold boards, and Yukari didn't say anything else about it, and didn't need to, and they watched the first-years pull arrows out of wet straw for a while in silence." }
          ] }
        ] }
      ] },
      { ifFlag: 'dead.aigis', then: [
        { n: "There was a white ribbon tied round the grip of Yukari's bow. Plain cotton, a little frayed, knotted twice. Solar didn't ask. She'd seen Hyein give out three of them at the service, cut from the same sheet, to anyone who asked, and Yukari had asked first." }
      ], else: [ { ifBefore: '11/22', then: [
        { s: 'yukari', f: 'neutral', t: "I count Aigis twice. Did you know that? On the stairs at night. Once in her room, out of habit, and then I go past Hyein's door and there she is again, standing outside it in the red with her eyes open, so I count her again." },
        { s: 'yukari', f: 'neutral', t: "She's the only one who's always exactly where I left her. Every night. Outside Hyein's. It's the most restful thing in the whole building. I hope Hyein knows. I hope somebody sits with her and tells her." }
      ] } ] },
      { n: "The captain blew the whistle. The girls came off the line in twos and threes and started pulling arrows and carrying targets in, stamping their feet against the cold. Yukari didn't move. She stood up, slowly, and stood with her bow, and looked at the gray sky over the fence where the light was already starting to go, though it wasn't five." },
      { s: 'yukari', f: 'neutral', t: "Tonight. The door. My floor." },
      { s: 'yukari', f: 'neutral', t: "Fuuka says it's still knocking. Every night. Twice, and then the line. She's stopped playing it for me. She just tells me it's still doing it, like the weather." },
      { s: 'yukari', f: 'serious', t: "I said I'd go down when I could. I don't know if I can. I'm going anyway, because if I wait until I can I'll be here in March still counting the bench." },
      { s: 'yukari', f: 'neutral', t: "Mitsuru-senpai says yes if you're there. Fuuka says yes if you're there. I didn't ask them, they just said it, like you're a permit." },
      { choose: [
        { t: "I'll be there. Where you can see me.", notes: 3, then: [
          { s: 'yukari', f: 'neutral', t: "...Okay. Okay. Good." },
          { s: 'yukari', f: 'neutral', t: "And if I do something stupid down there you're allowed to stop me. I'm saying that now, up here, while I'm a reasonable person, so it counts." }
        ] },
        { t: "I'll be there. And whatever you do with that door is yours.", notes: 3, then: [
          { s: 'yukari', f: 'neutral', t: "You're so annoying. You were annoying in June and you're annoying now." },
          { s: 'yukari', f: 'sad', t: "...Thanks. I mean it. Somebody needs to keep saying that to me or I'll start believing the door." }
        ] }
      ] },

      { place: 'The Well · The Knocking Floor', time: 'The Red Hour', bg: 'eq-well-5', music: 'eerie' },
      // BG: eqx-well-door-in-water — a wide underground floor flooded ankle-deep with still black water under a red half-light, and standing alone in the middle of it, attached to nothing, an ordinary pale apartment front door in its frame, a little height chart of pencil marks on the frame, its handle catching the light.
      { n: "Fuuka's voice in their ears, gentle, very steady, the voice of somebody who'd decided to be steady on purpose. *Straight ahead. About forty meters. The water's only shallow. I'm right here. I'm not going to say anything else unless you need me to.*" },
      { n: "The floor was water. Ankle-deep, black, perfectly still, so still that the red light lay on it in a sheet and their feet broke the sheet and it closed again behind them without a ripple, as if they'd never been there. It was cold through Solar's boots in a way that had nothing to do with temperature. It was cold the way the ball in the road had been cold in June." },
      { n: "And in the middle of it, attached to nothing, a door." },
      { n: "An apartment door. Pale, the cheap painted kind, with a peephole and a brass handle and a little plastic number plate gone yellow, *302*, standing upright in its own frame in the middle of the water with no wall on either side of it and nothing behind it but more red dark. On the frame, on the left, at the height a child would stand, there were pencil marks. Short lines, one above another, with dates beside them in a woman's round hand." },
      { n: "Yukari stopped ten paces from it. Solar heard her breathe in." },
      { s: 'yukari', f: 'neutral', t: "...That's ours. That's our door. The apartment after Dad. Three-oh-two. Those are my marks." },
      { s: 'yukari', f: 'neutral', t: "She stopped doing them when I was eleven. You can see. They stop." },
      { n: "They did. The last line was at about the height of Solar's chest, and above it the frame was bare, the paint unmarked all the way to the top, like a sentence somebody had stopped writing halfway through and never come back to." },
      { n: "Then the door knocked." },
      { n: "Twice. Not hard. Two neat knuckle-knocks, close together, the way a polite person knocks who knows they're expected, from the other side of a door that had no other side. The sound went out across the water flat and clear and came back off nothing." },
      { n: "*Yuka-chan.*" },
      { n: "A woman's voice. Warm. A little high. Pleased with itself, the way it had been on the phone in June, at the range, in the rain. The voice of somebody who'd rehearsed the first sentence." },
      { n: "*Yuka-chan. It's only me.*" },
      { n: "Yukari walked to the door. Solar went with her, a step behind, on the left. Yukari didn't touch it. She looked at it for a long time, at the peephole and the yellow number and the pencil marks, and then she did what Solar had known she would do since the range, since October, since the floor of the dorm in April: she sat down. In the black water, in her school skirt, with her back against the door, and reached up over her head, and put her hand on the handle." },
      { n: "Not turning it. Not holding it shut. Just her hand on it, her arm up, her fingers closed round the brass, exactly the way she'd sat in her room on the night of the knock, till the red went, till her hand was too stiff to make a fist." },
      // CG: eqx-yukari-handle — a teenage girl in a school uniform sitting in ankle-deep black water with her back against a lone apartment door standing in a red underground dark, one arm raised over her head with her hand on the brass handle, pencil height-marks on the frame above her, her face turned toward someone just out of frame.
      { s: 'yukari', f: 'serious', t: "...This is it. This is exactly it. I'm sitting exactly like this." },
      { s: 'yukari', f: 'sad', t: "Solar. Where are you. Say something. I can't turn my head, if I turn my head I'll—" },
      { choose: [
        { t: "(Sit down in the water in front of her. Right where she's looking.)", notes: 3, then: [
          { n: "She sat down. In front of Yukari, in the black water, close enough that their knees touched, so that Yukari didn't have to turn her head at all, so that the only thing in front of her was Solar's face in the red." },
          { s: 'yukari', f: 'sad', t: "...Okay. There you are. Okay. One." }
        ] },
        { t: "I'm right here. On your left. One step back.", notes: 2, then: [
          { n: "Yukari's eyes went left, as far as they could go without her head, and found her, and her breath went out." },
          { s: 'yukari', f: 'sad', t: "Back, not arms. One step back. Okay. Okay." }
        ] }
      ] },
      { n: "The door knocked again. Twice. And the voice came through it, close now, as if the woman on the other side had sat down too, with her back against the same wood, the two of them back to back with a door between them." },
      { n: "*I came to your competition, Yuka-chan. Did you see me? In the back row. I wore my good sunglasses. You didn't look round once. I was so proud. You didn't look round.*" },
      { n: "*I'm so cold out here. The nice lady's room was so warm. She said I could have it for as long as I liked. Why did you send me home, Yuka-chan? Didn't you want me near?*" },
      { n: "Yukari's knuckles went white on the brass." },
      { ifFlag: 'eqx-yukari-mom-home', then: [
        { s: 'yukari', f: 'serious', t: "...It knows. It knows I sent her home. I said that on a hill at Obon to my mom's face. *I want you somewhere I know is safe.* It knows the words." }
      ], else: [
        { s: 'yukari', f: 'serious', t: "...It knows about the room. It knows she nearly took it. That was a phone call at Obon. That was my mom and a nice lady on the phone." }
      ] },
      { s: 'yukari', f: 'sad', t: "It talks exactly like her. It's even got the bit where she sounds hurt so you'll say sorry first. That's *her*, Solar. That's the most her thing she does." },
      { n: "*Open the door, Yuka-chan. I'm not cross. I'm never cross. It's only me.*" },
      { n: "Yukari's arm was shaking. Not the hand on the handle; the arm, from the shoulder, the long muscles under her blazer trembling the way her bow arm had trembled in the rain on the tenth arrow when she held too long. Her eyes were on Solar's. They didn't leave. They didn't move at all." },
      { s: 'yukari', f: 'serious', t: "I still don't know. That's the thing. I've had seven months. I still don't know which way I'm holding it. If I let go will it open. If I let go will I *open* it." },
      { s: 'yukari', f: 'sad', t: "Tell me what to do. No. Don't. Don't tell me. I don't— Solar, I don't know what I want you to do." },
      { choose: [
        { t: "(Put your hand over hers on the handle. Hold it shut with her.)", notes: 3, flag: 'eqx-yukari-door-held', then: [
          { n: "She got up on her knees in the water and reached over Yukari's head and put her hand over Yukari's on the brass, and closed it, and held, and felt Yukari's fingers under hers, ice cold and locked, and felt them know who it was." },
          { s: 'yukari', f: 'sad', t: "...Okay. Okay. Both of us. Okay." },
          { n: "They held it. The door knocked, and knocked, twice and twice and twice, not harder, just more, patient, all through the hour, and the voice talked, about the fern, about the funny man at work, about the dream where she knocked and was let in, about how lovely it had been, *so lovely, Yuka-chan*, and Yukari held the handle with Solar's hand over hers and didn't answer it once." },
          { n: "It didn't open. It didn't try to. It never pulled. That was what Solar would remember afterward, kneeling in the black water with her arm up and her shoulder burning: that in a whole hour the handle never once moved under their hands. It didn't need to come in. It only needed someone holding on to it." },
          { n: "When the red went, the door was gone, and they were kneeling in a puddle on a stone floor with their hands up holding nothing. Yukari brought hers down very slowly, and looked at it, and closed it, and opened it, and closed it again." },
          { s: 'yukari', f: 'surprised', t: "...I can make a fist. Look. Last time I couldn't for an hour." },
          { s: 'yukari', f: 'neutral', t: "That's because yours was on top. I think. I think that's what it was." }
        ] },
        { t: "Whichever you pick. I'm right here. I'm not going anywhere while you pick.", notes: 3, flag: 'eqx-yukari-door-hers', tally: { choose: 1 }, then: [
          { n: "Yukari looked at her. A long time, with her arm up and shaking and the door knocking twice against her spine. Solar didn't move. She stayed where Yukari could see her and didn't reach for anything." },
          { s: 'yukari', f: 'sad', t: "...You're doing it again." },
          { s: 'solar', f: 'neutral', t: "I'm doing it again." },
          { n: "*Yuka-chan.*" },
          { n: "And Yukari let go." },
          { n: "Not of the door. Of the handle. She opened her fingers, one at a time, the way Mitsuru had let go of a wrist once on the terrace, the way you'd unpick a knot you wanted to keep, and brought her arm down, slowly, and put her hand in the black water beside her, flat, and left it there." },
          { n: "The door didn't open." },
          { n: "It stood there with nobody's hand on it, and nothing happened. The handle didn't turn. The voice didn't come. Solar watched the brass and waited for it to move and it didn't, and after a long time it knocked once more, only once, softer, almost uncertain, like somebody who'd been sure they'd hear footsteps and hadn't." },
          { n: "Then nothing. The water, and the red, and the pencil marks on the frame, and a door with nobody holding it either way." },
          { s: 'yukari', f: 'surprised', t: "...It needed my hand on it." },
          { s: 'yukari', f: 'serious', t: "That's it. That's all it is. It didn't care which way. Shut or open. It just needed me holding on. Every night since April, Solar. It just needed me sitting here holding on." },
          { n: "She sat in the water with her hand flat on the bottom and her face doing something it didn't know how to do, and then she laughed, once, short and wet and surprised, the laugh from the ceiling, the one about the fern." }
        ] }
      ] },
      { flag: 'eqx-floor-yukari-seen' },
      { n: "Going back up the stairs, in the last minutes of the red, Yukari stopped on the third landing and took her phone out of her blazer. It was dead, the way phones were dead in the hour, the screen a black mirror. She held it up to show Solar anyway." },
      { n: "And while they looked at it, the screen lit. Just for a second. Not the home screen. One line, gray on black, the way a missed call shows: *Mom · 12:41 AM*. Then it was black again, and dead, and nothing they did would wake it." },
      { n: "Yukari put it back in her pocket. Her hand stayed on the pocket all the way up." },

      { place: 'Iwatodai Dorm · Dining Room', time: 'Early Morning', bg: 'iwatodaidorm-diningroom', soft: true },
      { n: "There was no missed call in the morning. Yukari checked at six, in the kitchen, with the light still gray in the windows, and then made Solar check, and then made Fuuka check, which Fuuka did without asking why. The log went from her mother's nine o'clock the night before, eleven minutes, to nothing. No call at twelve forty-one. No call at all." },
      { n: "She sat down across from Solar at the long table with her rice and didn't eat it. Koromaru came and put his chin on her knee under the table, which he never did with her, and she put her hand on his head without looking, and left it there, and he let her." },
      { ifFlag: 'eqx-yukari-door-hers', then: [
        { s: 'yukari', f: 'neutral', t: "She'll call at nine. I'm going to answer. First ring. I'm going to ask her if she dreamed anything." },
        { n: "She did. At nine that night, through the ceiling, the phone rang once, and Yukari's voice said *hi, Mom*, and then, after a while, a question, careful, and a long silence while she listened." },
        { n: "She came down at ten past nine and stood in Solar's doorway in her pajamas with the phone in her hand and said it from there, flat, the voice for scores." },
        { s: 'yukari', f: 'neutral', t: "She dreamed she knocked on a door and nobody came. And she sat down outside it on the step, she said, and it was fine. She wasn't even sad. She said she just sat there in the sun and thought, oh, well, she must be out. She'll call me." },
        { s: 'yukari', f: 'sad', t: "...*She must be out. She'll call me.* She said that. My mom. She's never once in her life thought I'd call her." }
      ], else: [
        { s: 'yukari', f: 'neutral', t: "She'll call at nine. I'm going to answer. First ring. I'm not going to ask her anything. I don't want to know what she dreamed." },
        { n: "She did. At nine that night, through the ceiling, the phone rang once, and Yukari's voice said *hi, Mom*, and then didn't say much else for a long time, and then said *don't cry, Mom, it was a dream, it was only a dream*, over and over, gently, the way you'd say it to a child." },
        { n: "She came down afterward and sat on the end of Solar's bed without asking, with the phone in her lap." },
        { s: 'yukari', f: 'neutral', t: "She dreamed she knocked all night and I wouldn't let her in. She was so cross, she said. And then she woke up crying and didn't know why." },
        { s: 'yukari', f: 'sad', t: "I held it shut. You held it shut with me. I'd do it again. I'd do it every night. And my mom woke up crying in her apartment four hundred kilometers away, and she doesn't know why, and I can't tell her." }
      ] },
      { choose: [
        { t: "(Hold out your hand. Let her make a fist round it.)", notes: 3, then: [
          { n: "She held out her hand. Yukari looked at it, and took it, and closed her own round it, hard, a real fist, the knuckles going pale, and held it, and opened it, and closed it again, as if she were checking that it still worked, and it did." }
        ] },
        { t: "You can count me. If you want. I'll hold still.", notes: 2, then: [
          { s: 'yukari', f: 'neutral', t: "...One." },
          { s: 'yukari', f: 'neutral', t: "I didn't count the bench today. At breakfast. I counted the table and I got to fourteen and then I stopped. I just stopped. I didn't do it again." },
          { s: 'yukari', f: 'sad', t: "It felt like leaving the stove on. I did it anyway." }
        ] }
      ] },
      { ifFlag: 'eqx-yukari-arrow', then: [
        { s: 'yukari', f: 'neutral', t: "Is my arrow still in your bag." },
        { s: 'solar', f: 'neutral', t: "Still in my bag." },
        { s: 'yukari', f: 'neutral', t: "Good. I'm checking. I've decided I'm allowed to check. Out loud. That's different from counting. That's just asking." }
      ] },
      { n: "On her way up to bed, she stopped outside Solar's door, at the photo strip in the frame, curled, faded at the edges, and stood looking at it for a long moment. Then she put out one finger and touched the third frame, the one where they were both laughing, and didn't press it flat, and went up the stairs, and Solar lay in the dark listening for the radio, which didn't come on, and for the phone, which didn't ring, and for two knocks, anywhere, on any door in the building, and heard none, and couldn't sleep anyway." }
    ] },
    // Rank 8 (Nov 16, round 3): after 12/13 (Monday; after eqx-persimmon 12/9, so the girls are at the guesthouse). The range
    // on the last club day before the holidays, then the dorm at night: Yukari has given her room to Solji and Jaesang (act4
    // eqx-healing) and moved in with Fuuka; Solji lets Yukari, not Solar, see to the seam on her back. Solar is sick; Yukari
    // holds her hair (rank 6: "I'd like to be the one who holds the hair"). Reads eqx-yukari-door-hers / -held, dead.shinjiro,
    // dead.aigis, eqx-yukari-turned, eqx-yukari-mom-home. Her mother asks, at nine, to come for New Year: Solar's answer sets
    // eqx-yukari-mom-newyear (let her come), eqx-yukari-mom-spring (not this winter; spring) or eqx-yukari-mom-hers (+choose).
    // Rank 9 is left her own "stop watching" turn; nothing here decides her mother's fate.
    { after: '12/13', title: '8: the one who holds the hair', place: 'Gekkoukan High · Archery Range', time: 'After School', music: 'tender', scene: [
      { bg: 'gekkoukan-archery-range' },
      // BG: gekkoukan-archery-range-winter — the school archery range on a bright freezing December afternoon, frost still white in the shade of the shooting line's roof, the bare cherry trees black against a hard blue sky, breath visible, the targets stark.
      { n: "The last club day before the holidays came in blue and hard and freezing, the kind of December afternoon where the sky looked polished and the frost never left the shade, so that half the range was white and half was gold and the line between them ran straight down the grass like somebody had ruled it. The club was shooting in coats. The captain had given up on the dress code at the start of the month, and the line was a row of girls in navy duffels and scarves over their whites, drawing with their breath going up in front of their faces, and the arrows going *tock*, *tock*, into straw so cold it rang." },
      { ifFlag: 'eqx-yukari-door-hers', then: [
        { n: "Yukari was on the line. Standing. Facing the targets. She drew and held and loosed, and the arrow went into the gold, and she didn't turn her head." },
        { n: "Solar stood at the gate and watched her not do it. Six arrows. Seven. On the eighth her chin moved, a degree, the old habit, toward the bench; and stopped; and went back to the target by itself, without anyone grabbing it; and she loosed, and it went into the gold, and the captain, behind her with the clipboard, closed her eyes for a second like someone saying a short prayer." }
      ], else: [ { ifFlag: 'eqx-yukari-turned', then: [
        { n: "Yukari was on the line. Not sitting on it, not facing the bench: standing, facing the targets, for the first set. Then, between sets, she turned round and sat on the boards on the captain's cushion and looked at the bench for a full minute, every face, like a girl drinking a glass of water before a race; and got up; and shot again." },
        { n: "The captain had stopped arguing. She timed the minute on her watch and said *time* when it was up, and Yukari got up. It was, Solar thought, the strangest and kindest arrangement she'd ever seen two people come to without a word." }
      ], else: [
        { n: "Yukari was on the line. She drew and held and loosed, and turned her head, and turned it back, but the sweep was shorter now; the bench and the gate, not the path, not the street beyond it. She'd cut the town out. She was down to the people she could see from where she stood." }
      ] } ] },
      { n: "She saw Solar at the gate. She lifted her bow, a few centimeters, the way you'd lift a glass across a room." },
      { n: "There was a white ribbon round the grip. Plain cotton, a little frayed, knotted twice." },
      { ifFlag: 'dead.aigis', then: [
        { n: "She'd worn it since the service. She hadn't said anything about it. Nobody had said anything about it. Hyein had cut the sheet into strips at the kitchen table that night with Yukari's kitchen scissors, the same ones Yukari had used on her own hair in October, and laid them out on the table in a row, and gone up to bed, and in the morning they were gone, every one, and nobody had seen who took them." }
      ], else: [
        { n: "Hyein had made them. One each, for the household, cut from a sheet, after the Tree. *So I can find you in a crowd,* she'd said at breakfast, handing them out like napkins, and Aigis, at her left shoulder, had touched the one in her own hair and said nothing, and hadn't needed to." }
      ] },
      { n: "When practice ended Yukari came across the gravel in her duffel with her bow in its bag over her shoulder and stood in front of Solar, close, the way she stood now, closer than she used to, as if the space between people had become something she didn't trust to stay the size it was." },
      { s: 'yukari', f: 'neutral', t: "You came. It's the last one. I wanted you to see the last one." },
      { s: 'yukari', f: 'neutral', t: "I hit eleven out of twelve. The captain cried. She pretended it was the wind. It wasn't windy." },
      { choose: [
        { t: "I saw. You didn't look round once.", notes: 3, then: [
          { s: 'yukari', f: 'neutral', t: "...Once. On the eighth. You saw that, didn't you." },
          { s: 'solar', f: 'neutral', t: "I saw it come back." },
          { s: 'yukari', f: 'flustered', t: "Okay. Okay. That's— okay. I'm counting that. I'm counting it coming back." }
        ] },
        { t: "The ribbon suits the bow.", notes: 2, then: [
          { s: 'yukari', f: 'neutral', t: "It's not about suiting. It's so I can see it when I draw. It's right there. Under my hand. I can't not see it." },
          { ifFlag: 'dead.aigis', then: [
            { s: 'yukari', f: 'sad', t: "...I couldn't do anything. On the floor. With the water. There's nothing to heal in metal. I just stood there with my hands lit up like an idiot and nothing to put them on." }
          ] }
        ] }
      ] },

      { place: 'Iwatodai Dorm · Hallway', time: 'Night', bg: 'iwatodaidorm-hallway', soft: true },
      { n: "The dorm at night was full in a way it had never been, not even in April with fourteen at breakfast. You heard it in the walls. A man's cough on the third floor. Mrs. Kim's voice coming down the stairwell from the fourth, in Korean, telling Mr. Kim something about a radiator in a tone that made Junpei, in the lounge, sit up straight without understanding a word. A kettle. Somebody's slippers. The old boards taking weights they'd never been built for, and complaining about it, softly, all night." },
      { n: "Yukari's room was Solji's room now. Hers and Jaesang's. Yukari had moved her things into Fuuka's on the first, in two trips, without being asked, and when Solar had tried to thank her she'd said *it's a room, it's got a bed, they need a bed*, and walked off, and then come back and said *the radiator knocks, tell her it's just the radiator*, and walked off again." },
      { n: "At nine the door of it opened and Yukari put her head out, and looked down the hall, and found Solar on the stairs where she'd said she'd be." },
      { s: 'yukari', f: 'neutral', t: "She's asking for you. She said I should ask if you want to. I'm asking if you want to. You can say no. She told me to tell you that you can say no." },
      { n: "Solji was sitting on the edge of the bed, Yukari's old bed, in a cardigan buttoned wrong, with her back to the door. Not turned away. Placed. She'd put herself so that the wall was behind her, and then the door, and then nothing, and she'd done it the way you'd set a table, without thinking about it, every time she sat down anywhere since the twenty-second." },
      { n: "On the bedside table there were things laid out on a clean towel. Gauze. Tape, cut into strips. A bowl of warm water going cool. A tube of something from the Kirijo ward with a long word on it. Yukari's things, laid out in Yukari's order." },
      { n: "*Solar,* her mother said, in English, and smiled at her, the bright brave Upper East Side smile, the one for doormen. *Come in. Sit. Yukari's been so sweet. She's the only one I'll let do this. Isn't that silly? I can't stand anyone behind me. Not even your father. Especially not your father; he's so big.*" },
      { n: "*I'd like you to stay,* she said. *If you can. You don't have to look. I'd just like you here.*" },
      { n: "Solar sat. On the chair by the bed, at her mother's side, where her mother could see her. Yukari stood behind. She unbuttoned the cardigan from the back, the way you'd undo a child's, and folded it down off Solji's shoulders, and then the blouse under it, and Solar's mother sat very straight and looked at Solar's face and held her hands together in her lap, and her knuckles were white." },
      { n: "Yukari peeled the old dressing back. Slowly. A strip at a time." },
      { n: "Solar didn't mean to look. She'd decided not to look. She looked." },
      { n: "It went from the nape of her mother's neck to the small of her back. Straight. A seam. Not a scar; a seam, the way a coat has a seam, where two edges had been brought together and sewn, and the stitches were out now, the Kirijo ward had taken them out, but you could see where every one had been, a row of small dark points down either side, close and even, like the holes left in a hem. The skin along it had healed red and wrong, raised, puckered, shiny, pulled a little to one side the way a seam pulls when it's been sewn by somebody who'd done a great many and didn't need to look." },
      { n: "And at the top, at the nape, just under the hairline, where you'd start, there was a small neat knot of scar, like the knot at the end of a thread." },
      { n: "Yukari dipped the gauze in the water and touched it to the seam, carefully, from the top down, and Solar's mother shut her eyes and kept smiling, at nothing, with her hands locked in her lap, and said *you're so gentle, Yukari, you have such gentle hands*, in a perfectly steady voice, and Yukari said *thanks, Mrs. Lee*, and kept going, and a light came up under her palm, soft, pale, the color of the inside of a shell, and went down the seam with the gauze, and ran off the raised red skin like water off wax, and took nothing with it." },
      { s: 'yukari', f: 'neutral', t: "...I try every night. It doesn't take. I don't know why. It takes on everything. It took on Junpei's arm in July. It doesn't take on this." },
      { s: 'yukari', f: 'neutral', t: "Mitsuru-senpai says it's because it's not an injury. She says the body thinks it's how it's supposed to be. It's been told." },
      // CG: eqx-seam-dressing — a small dorm bedroom at night lit by one lamp, a woman in her forties sitting very straight on the edge of a bed with a cardigan folded down off her shoulders, eyes shut, smiling bravely, her hands locked in her lap; behind her a teenage girl with gentle pale light under one palm pressing gauze to her back; a younger woman on a chair at her side watching her face.
      { n: "Solar's stomach went. First the long drop, the floor of the lift; then the cold in the hands; and then something new, something that didn't stop at cold. It came up. She felt it come up from somewhere under her ribs, fast, and her mouth filled with water, and she stood up so suddenly the chair went over." },
      { n: "*Sweetheart—*" },
      { n: "She was in the bathroom at the end of the hall. She didn't remember the hall. She was on her knees on the cold tile in front of the toilet and it was coming up, all of it, dinner and the tea and something that felt like it had been down there since September, and her hair was falling forward into her face, and she couldn't stop to hold it back, because she couldn't stop." },
      { n: "Then there were hands in her hair." },
      { n: "Gathering it. Both sides, from her face, back, together, the way you'd gather it to put it up, and holding it, in one fist at the back of her neck, firm, not pulling, and the other hand flat between her shoulder blades. Back, not arms. Warm through her shirt. Staying there while she was sick, and sick again, and then just shaking, with nothing left, her forehead nearly on the cold porcelain and the hand on her back moving, slowly, in a small circle, the way you'd do it for a child." },
      { s: 'yukari', f: 'neutral', t: "...I've got it. I've got your hair. You're fine. Keep going if you need to. I've got it." },
      { n: "Solar didn't need to. She stayed where she was, on her knees, with her eyes shut, breathing, and Yukari didn't let go of her hair, and didn't take her hand off her back, and the radiator in the hall knocked, twice, the way it did, the way Yukari had told her mother it would, and neither of them jumped." },
      { choose: [
        { t: "You said you wanted to be the one. In October.", notes: 3, then: [
          { s: 'yukari', f: 'neutral', t: "I know. I remember. *I'd like to be the one who holds the hair.*" },
          { s: 'yukari', f: 'sad', t: "I meant it about Hanni. On the bridge. I meant, next time, I'll be the Hanni. I didn't think it'd be you. I didn't think it'd be *you* on the floor." },
          { s: 'yukari', f: 'neutral', t: "...I'm glad it's me, though. I'm glad it's me and not somebody you'd have to do the face for." }
        ] },
        { t: "(Don't say anything. Lean back against her knees.)", notes: 3, then: [
          { n: "She sat back on her heels, and back further, until she was leaning against Yukari's knees where Yukari knelt behind her on the tile, and Yukari let go of her hair at last and put both arms round her from behind, over her shoulders, and held on, and put her chin on the top of Solar's head, and they stayed like that on the bathroom floor with the extractor fan going and the smell of soap and sick, and it was, Solar thought, the least dignified place she had ever been held, and the most." }
        ] },
        { t: "I'm sorry. Go back to her. She needs the dressing.", notes: 1, then: [
          { s: 'yukari', f: 'serious', t: "She's got Fuuka. Fuuka came running. Fuuka's doing the tape, she's better at tape than me anyway." },
          { s: 'yukari', f: 'neutral', t: "And she sent me. Your mom. She said *go, go to her, I'm fine*. She said it in English and then in Japanese, really badly. So I'm here on orders. Shut up and breathe." }
        ] }
      ] },
      { s: 'yukari', f: 'neutral', t: "She doesn't remember. Did you know? The story. The one you said all three of your moms told you. The sun and the moon." },
      { s: 'yukari', f: 'neutral', t: "She asked me what it was. Last week. While I was doing the tape. She said you'd said something about it at dinner and everybody went quiet, and she didn't know why, and could I tell her." },
      { s: 'yukari', f: 'sad', t: "I didn't. I said I didn't know it either. I lied to your mom with my hand on her back. I'm going to have to live with that." },
      { n: "Solar sat on the bathroom floor with her back against Yukari's knees and thought about her mother, in a Manhattan bedroom with the radiator ticking, a long time ago, on the edge of a bed, saying the Korean names in the middle of the English sentences because that was how her own mother had said them, and doing the tiger's voice low, and stopping before the end because Solar was asleep. She thought about her not remembering any of it. She thought about something else, under a tree in the dark, remembering all of it, in her mother's voice, perfectly." },
      { ifFlag: 'dead.shinjiro', then: [
        { s: 'yukari', f: 'sad', t: "Everybody I can't fix is a seam, this year. The ones on your moms. The one on the steps. I'm getting a collection." }
      ] },

      { place: 'Iwatodai Dorm · Fuuka’s Room', time: 'Late Night', bg: 'solar-dormroom-night', soft: true },
      { n: "Fuuka's room had two futons in it now, end to end along the wall under the window, and a desk with two chairs, and Fuuka's headphones hung on one bedpost and Yukari's bow in its bag leaning on the other. Fuuka had gone up to sit with Solji, gently, without being asked, and taken her tea with her. Yukari put Solar on her own futon with a blanket round her and a glass of water and sat on Fuuka's, cross-legged, facing her." },
      { n: "Facing her. Solar noticed. Not the door. Not the window. Her." },
      { n: "At nine-forty, late, the phone in Yukari's lap rang. Once." },
      { n: "She looked at it. At the name. Then at Solar. Then she answered, and said *hi, Mom*, low, so as not to wake anyone, and listened, and her face went through three different weathers in about a minute, and she said *I'll call you back. Ten minutes. I promise. Yeah. I promise. Ten.* and hung up, and sat with the phone in both hands." },
      { s: 'yukari', f: 'neutral', t: "She wants to come for New Year." },
      { s: 'yukari', f: 'neutral', t: "To the shrine. Naganaki. She saw it on the news, the big festival, she said, she wants to see where I go, she wants to see the shrine I go to. And meet everybody. She said *everybody* like she knows how many there are." },
      { s: 'yukari', f: 'neutral', t: "She asked me. That's the thing. She didn't just say she's coming. She didn't say a nice lady phoned. She asked. *Can I come, Yuka-chan? Is that all right?* Like it's mine to say." },
      { s: 'yukari', f: 'sad', t: "And I want her here. I want her where I can see her. I want to stand in that crowd at midnight and turn my head and there she is, in her stupid sunglasses, in the dark, being real." },
      { s: 'yukari', f: 'serious', t: "And that's exactly what the door wanted. Isn't it. *Where I can see you.* My mom, in this town, where things knock. Because I want to look at her." },
      { ifFlag: 'eqx-yukari-mom-home', then: [
        { s: 'yukari', f: 'neutral', t: "I sent her home in August. On a hill. You told me to. Because I wanted her safe. I'd do it again. I'm doing the same sum and I'm getting a different answer and I don't know which one's wrong." }
      ] },
      { s: 'yukari', f: 'neutral', t: "I'm not asking you to decide. I'm not. I just need to hear somebody say something out loud that isn't the door." },
      { choose: [
        { t: "Let her come. Stand next to her at midnight. Watch her as much as you want.", notes: 2, flag: 'eqx-yukari-mom-newyear', then: [
          { n: "Yukari looked at her for a long time. Then she looked down at the phone, and something in her shoulders let go, and something else, lower, under her ribs, Solar thought, didn't." },
          { s: 'yukari', f: 'neutral', t: "...Okay. Okay. New Year. She can come. I'll stand right next to her. I won't look at anything else. I won't look at the fireworks." },
          { s: 'yukari', f: 'sad', t: "If anybody knocks on anything I'll shoot it." },
          { n: "She called back. Ten minutes, exactly. Solar heard her mother's voice through the phone go up, high and quick and surprised, like a woman who'd been told yes by somebody who'd always said no; and Yukari, smiling at the window with her face wet, saying *yeah, Mom, yeah, bring the sunglasses*." }
        ] },
        { t: "Ask her to come in the spring. When the cherry trees are out. When this town's quieter.", notes: 3, flag: 'eqx-yukari-mom-spring', then: [
          { s: 'yukari', f: 'neutral', t: "...The spring." },
          { s: 'solar', f: 'neutral', t: "Something to look forward to. Not something to watch." },
          { n: "Yukari sat with that. She turned the phone over in her hands, twice, three times." },
          { s: 'yukari', f: 'neutral', t: "We'd go to the range. I'd show her the range. She's never seen me shoot. She left before they called it, at the qualifier." },
          { s: 'yukari', f: 'sad', t: "...She'll be hurt. She'll do the voice. The hurt one, so I say sorry first." },
          { s: 'yukari', f: 'neutral', t: "I'm going to say sorry first. And then I'm going to say April. I'm going to say it like it's a date and not a no." },
          { n: "She called back. Solar heard her say it, the sorry, and then the word *April*, carefully, twice, like somebody reading back a booking, and then her mother's voice, after a long pause, smaller, and then, surprisingly, a laugh, and *the cherry trees, oh, Yuka-chan, I haven't seen the cherry trees with you since—*, and then nothing Solar could hear, because Yukari had turned to the wall." }
        ] },
        { t: "That's yours to say, Yukari. And whatever you say, I'll be standing where you can see me at midnight.", notes: 3, flag: 'eqx-yukari-mom-hers', tally: { choose: 1 }, then: [
          { s: 'yukari', f: 'sad', t: "...Of course it is. Of course you'd say that." },
          { s: 'yukari', f: 'neutral', t: "I hate it less than I did in June. I want you to know that. I hate it about forty percent less." },
          { n: "She sat with the phone for the whole ten minutes. She didn't count anything. Solar watched her not count. Then, at ten exactly, she called back, and said *Mom*, and then didn't say yes and didn't say no; she said *can I tell you on Christmas? I want to think about it properly. I've never thought about it properly. I've only ever said no really fast.* And her mother, on the other end, went quiet for a long moment, and then said something Solar couldn't hear, and Yukari's face did the thing at the corner that the captain would never know was a smile." },
          { s: 'yukari', f: 'neutral', t: "She said take as long as I like. She said she'll wait by the phone. She said it like it was nice to wait for something." }
        ] }
      ] },
      { n: "Afterward Yukari lay down on Fuuka's futon, on her back, with the phone on her chest, and Solar lay on Yukari's under the blanket that smelled of Yukari's shampoo and somebody else's lavender, and they looked at the ceiling, at the light from the hall coming under the door in a line, and listened to the full house breathe." },
      { s: 'yukari', f: 'neutral', t: "Hey. Solar." },
      { s: 'yukari', f: 'neutral', t: "You're where I can see you. I'm just saying. I'm not counting. I'm just noticing." },
      { s: 'yukari', f: 'neutral', t: "...And I'm where you can see me. That's the deal now. That's the whole deal. I don't know what it's for yet." },
      { n: "Down the hall, Solar's mother's radiator knocked twice, and somewhere on the floor below, very faintly, someone's door answered it, a soft wooden settle in the cold; and Yukari, in the dark, turned her head on the pillow, not to the door, not to the window, but toward Solar, and kept it there, and fell asleep like that, and didn't move all night." }
    ] }
  ]
});
