/* Persona 3: Equinox · Yukari Takeba · VI The Lovers. Link data (femc-equinox-game.html). Format: link fields in
   assets/femc/game/core.js ("Links" header), scene lines in assets/femc/game/scene.js.
   Written: rank 1 only (from 4/13; her home days are Monday, Wednesday and Friday, so 4/14 at the earliest). Ranks 2–10 to write.
   Shape: the stub fields from assets/femc/equinox/data/links.js (this file wins over the stub, core.js indexLinks).
   Solstice's ranks are shared memory here (the range, "back, not arms", the photo-booth strip, "you pick"); nothing reads
   Solstice link standing. Yukari has no 'happy' portrait: her smiles are written in narration.
   Flags this file sets: eqx-yukari-arrow (rank 1: Solar keeps last year's arrow). Nothing reads it yet. */
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
    ] }
  ]
});
