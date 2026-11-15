/* Persona 3: Equinox · Haechan · ∞ The Universe. Link data (femc-equinox-game.html). Format: link fields in
   assets/femc/game/core.js ("Links" header), scene lines in assets/femc/game/scene.js.
   Written: rank 1 only (from 4/13, the dorm laundry room, in the evening). Ranks 2–15 still to write.
   Shape: the stub fields from assets/femc/equinox/data/links.js (this file wins over the stub, core.js indexLinks).
   Two lives (Runners + strangers): in private with Solar he talks about both openly. Solstice's ranks are shared memory. */
(window.FEMC_GAME_LINKS ||= []).push({
  id: 'haechan', name: 'Haechan', short: 'Haechan', arcana: 'Universe', numeral: '∞', from: 'Runners · strangers', kind: 'searcher',
  world: 'RS', romance: 'canon', maxRank: 15, starts: '4/8', lodging: 'dorm',
  home: { area: 'dorm', spot: 'Laundry Room', slot: 'evening', days: [0, 1, 2, 3, 4, 5, 6],
          hint: 'Late, any night. The laundry room, usually on top of the dryer, at an hour nobody does laundry.' },
  ranks: [
    { after: '4/13', title: '1: room tone', place: 'Iwatodai Dorm · Laundry Room', time: 'Night', music: 'night', scene: [
      { bg: 'iwatodaidorm-laundryroom-night' },
      { n: "Hanni's rota had her down for the laundry room tonight. It didn't say who with. It didn't have to: in the box for the laundry room, every night of the week, in Hanni's small fast handwriting, there was a single letter H, and next to it, added in a different pen by somebody who thought they were funny, a tiny drawing of a dryer." },
      { n: "She went down at half past eleven in her pajamas and a cardigan, because the dorm's heating gave up at eleven on principle, and stopped in the doorway with her hand on the frame, the way she had stopped in this doorway a hundred nights last year, and listened to an empty dryer turn." },
      { n: "He was on it. Of course he was on it. Black hoodie with the sleeves shoved up, headphones round his neck, bare feet hooked on the edge of the machine below him, his knees up, a little silver recorder balanced on one of them with its red light on. The dryer under him was running with nothing in it, thumping softly on the turn, the only warm thing in the building after eleven. He'd decided that in November. He'd been right then too." },
      { n: "He didn't say *there you are*. He didn't say anything. He looked at her, and then at the other dryer, the cold one, and then back at her, which a year ago had taken her three nights to understand was an invitation." },
      { choose: [
        { t: "(Sit on the cold dryer. Don't flinch.)", notes: 3, then: [
          { n: "She sat on the cold one. The cold came straight through her pajamas and she didn't flinch, out of pride, exactly as she hadn't flinched the first time, and he watched her not flinch, and the corner of his mouth went a quarter of an inch, and then, because this was a different year, the whole half inch." },
          { s: 'haechan', f: 'happy', t: "Same face. Same dryer. You'd think you'd learn." }
        ] },
        { t: "(Climb up onto his dryer. It barely fits one.)", notes: 3, then: [
          { n: "She came across the room and climbed up beside him on the warm one, which barely fit one person and certainly didn't fit two, so that she had to put her hip against his and her shoulder half behind his, and the machine thumped under both of them, and he went very still." },
          { s: 'haechan', f: 'flustered', t: "...That's my dryer." },
          { s: 'solar', f: 'neutral', t: "It's warm." },
          { s: 'haechan', f: 'flustered', t: "I *know* it's warm. That's the whole point of it. That's why it's mine." },
          { n: "He didn't move over. He moved his knee, a little, so the recorder wouldn't fall, and then left his knee where it had moved to, which was against hers." }
        ] },
        { t: "You're recording the dryer.", notes: 2, then: [
          { s: 'haechan', f: 'neutral', t: "I'm recording the room. The dryer's in it. The dryer's a big part of the room." }
        ] }
      ] },
      { n: "The recorder was Minji's. He told her that without being asked, the way he told her things now, which was the strangest of the differences between this year and the last one: last year he'd made her dig for every word, and this year he just handed them over, flat, in either voice, like a man who'd decided he didn't have time to be difficult about it." },
      { s: 'haechan', f: 'neutral', t: "Minji's things work in the red. Nobody knows why. Her camera ran through the whole first night. Minji says it's because they're hers, which isn't science, but she said it like it was, so." },
      { s: 'haechan', f: 'neutral', t: "I've been taping the hour. Every night since. Room tone. The sound a place makes when nobody's doing anything." },
      { n: "*Room tone.* She knew the words. She'd said them to him on a roof in March, about a song with no name, as a name for it. He saw her remember and looked at the recorder instead of at her." },
      { s: 'haechan', f: 'neutral', t: "The green had a hum. You remember. A note. This one's got a note under the note. I want to know what key it's in." },
      { s: 'haechan', f: 'serious', t: "...That's a lie. I want to know what it is. The key's just the part I can find out." },
      { choose: [
        { t: "Which one of you wants to know? The rooftop or the stairs?", notes: 3, then: [
          { s: 'haechan', f: 'happy', t: "Ha. Both. The rooftop one wants to know what key. The stairs one wants to know what it *wants*. He's the one who doesn't sleep." },
          { s: 'haechan', f: 'neutral', t: "Don't tell the rooftop one I said that. He thinks he's the sensible one. He's not. He's just quieter about it." }
        ] },
        { t: "Play me some.", notes: 2, then: [
          { s: 'haechan', f: 'neutral', t: "Yeah. In a second. You'll want to be sitting down. You are sitting down. Good." }
        ] },
        { t: "(Wait. He'll get there.)", notes: 3, then: [
          { n: "She waited. That was the whole trick with him; it always had been. In a doorway, on a roof, at the bottom of a well. You stood still long enough and he came the rest of the way himself, grumbling, as if it had been his idea." }
        ] }
      ] },
      { n: "He dug in the pocket of his hoodie and came out with two things and put them on the lid of the cold dryer between them, side by side, like evidence. A guitar pick, black, worn pale at the tip. And a receipt, folded in four, soft as cloth from being folded and unfolded." },
      { s: 'haechan', f: 'neutral', t: "That's what I had. On the rope. No Evoker, no phone, no light. A pick and a receipt." },
      { n: "She unfolded the receipt. Korean. A convenience store, the name half gone. Two cans of coffee, the cheap kind, and the date and the time printed at the bottom in the faint gray ink that fades first, and the ink had run, as if the paper had been wet once and dried in a pocket. She couldn't read the date. She tried. She tilted it to the bulb. It was just a gray smear where a day should have been." },
      { s: 'haechan', f: 'neutral', t: "Yeah. Me neither. I've been trying for a week. I know where I bought it. I know who the second can was for. I don't know *when*." },
      { s: 'haechan', f: 'serious', t: "So I don't know what time it is over there. At home. Either home. Nobody does. Jungwon's watch says one thing and his face says another. Two cans. That's all I've got for what day it is." },
      { choose: [
        { t: "Who was the second can for?", notes: 2, then: [
          { s: 'haechan', f: 'neutral', t: "You. Obviously. You don't drink it. You hold it. You hold it till it's warm and then you give it back to me. That's the whole system. Two cans, one drinker." },
          { s: 'haechan', f: 'happy', t: "Every world. I've checked." }
        ] },
        { t: "(Fold it back up. Give it to him.)", notes: 3, then: [
          { n: "She folded it back along its soft creases and put it in his hand and closed his fingers over it, and he let her, and looked at his own fist for a second like it was something she'd made." },
          { s: 'haechan', f: 'neutral', t: "...Thanks. I'd have lost it. I lose everything that isn't you." }
        ] }
      ] },
      { n: "He picked up the recorder and wound it back with his thumb, the little wheel ticking, and held one side of his headphones out to her, and put the other side to his own ear, the way he had in January, so that the cord ran between them and they had to sit close for it to reach." },
      { s: 'haechan', f: 'neutral', t: "Monday. The night of the knocks. The red. I was sitting right here. Listen." },
      { n: "At first there was nothing. Room tone. The hum of the hour, low, steady, a note she felt more in her teeth than in her ears, and under it, he was right, another one, lower still, so low it was less a sound than the place a sound would be. The dryer, stopped dead mid-turn the way everything stopped. His own breathing, close to the microphone. Once, the creak of the machine as he shifted." },
      { n: "Then, very faintly, under all of it, something that wasn't a machine." },
      { n: "Humming. A woman's voice, or what was left of one after a long way through stone, humming with her mouth closed, slow, the kind of tune you hum to a child who won't settle. Not a song. The shape of one. It went up, and came down, and went up again, and she knew it, and she didn't know where from, and the not knowing was a cold hand flat between her shoulder blades." },
      { n: "She'd heard it before. In the water, at the bottom of the well, while the masks came toward her." },
      { s: 'haechan', f: 'serious', t: "It's there every night. Not loud. Just there. Like somebody in the next room." },
      { s: 'haechan', f: 'neutral', t: "There isn't a next room. That's the outside wall. Past it's the yard and the bins." },
      { choose: [
        { t: "(Keep listening.)", notes: 3, then: [
          { n: "She kept listening. He watched her face while she did, the way he'd watched it over the lab glass, over the gate chime, over every sound he'd ever played her, to see where it landed. The humming went on. She found she'd closed her eyes." }
        ] },
        { t: "(Take the earbud out.)", notes: 2, then: [
          { n: "She took it out. He didn't say anything about it. He took his own side out too, at once, as if they'd agreed, and for a while they both sat looking at the little red light on the recorder, still running, still taping the room, with the two of them in it now." },
          { s: 'haechan', f: 'neutral', t: "Yeah. I did that the first time too. Put it back in. There's one more bit." },
          { n: "She put it back in." }
        ] }
      ] },
      { n: "At forty-one minutes past, on the tape, the humming stopped." },
      { n: "Then two knocks. Close. Not down the street, not across town. Knuckles on wood, patient, polite, a foot from the microphone, on the laundry room's back door, the one to the yard, the one with the chain on it, the way you'd knock on the door of a house where you knew someone was home." },
      { n: "On the tape, Haechan didn't move. She could hear him not moving. His breathing went on exactly as it had before, slow and even and bored, the breathing of a boy on a dryer at one in the morning with nothing happening to him at all." },
      { s: 'haechan', f: 'serious', t: "I didn't hear that." },
      { s: 'haechan', f: 'serious', t: "I was sitting right here, on this. Awake. I wasn't asleep. I'd know. And I didn't hear it. I heard it the next morning, on the tape, with the sun out, and I went and looked at the door and the chain was on and there was nothing on the step." },
      { n: "She looked at the back door. It had a small square window at the top, black now, with the yard light off. The chain was on. She looked at it for a long moment and found she didn't want to have her back to it, which was the same thing she'd felt in the courtyard about the well, and she didn't like that it was the same." },
      { choose: [
        { t: "Have you told anyone?", notes: 2, then: [
          { s: 'haechan', f: 'neutral', t: "You. Now. Hanni would put it on the rota. Mitsuru would put it on the whiteboard. Your boxer would stand outside the door all night with his fists up, and I'd have to sit in here and listen to him breathe." },
          { s: 'haechan', f: 'neutral', t: "...He held on, at the top. I saw. Good grip. I'll give him that. I'll give him that and nothing else." }
        ] },
        { t: "(Get down. Check the chain yourself.)", notes: 3, then: [
          { n: "She slid down off the dryer and crossed the room in her bare feet and put her hand on the chain. Cold. Seated in its track all the way. She looked through the little black window and saw nothing but her own face in it, and his behind her, on the dryer, watching her back." },
          { s: 'haechan', f: 'neutral', t: "Yeah. That's what I did. Then I made tea and didn't drink it." }
        ] },
        { t: "You sat in here alone with it.", notes: 3, then: [
          { s: 'haechan', f: 'neutral', t: "I'm not alone. It's on the rota. I've got an H. The H is me." },
          { s: 'solar', f: 'serious', t: "Haechan." },
          { s: 'haechan', f: 'sad', t: "...Yeah. Okay. Yeah. I sat in here alone with it." }
        ] }
      ] },
      { n: "He switched the recorder off. The red light went out. The dryer thumped on under him, empty, warm, and for a while that was the only sound, and she was grateful for it in a way she couldn't have explained to anybody who hadn't heard the tape." },
      { s: 'haechan', f: 'neutral', t: "There's one more thing. Under the humming. Right before it stops." },
      { s: 'haechan', f: 'neutral', t: "It sounds like someone asking for something. You know how you can hear a question in a voice before you hear the words. Like that. Like somebody asking me for a favor." },
      { s: 'solar', f: 'neutral', t: "What favor?" },
      { s: 'haechan', f: 'happy', t: "I don't know. I'm not asking." },
      { n: "He said it lightly, and then he heard it, the way he heard everything, a beat late, and his face did the small sideways thing with the jaw, and he didn't take it back." },
      { s: 'haechan', f: 'serious', t: "That's my whole plan this year, by the way. You can have it in writing. I'm not asking you anything. Not where you're going. Not who you're going with. Not what we are. Everybody you've ever had has asked you for something, princess. I'm going to be the one who didn't." },
      { s: 'haechan', f: 'neutral', t: "*Agasshi.* Same thing. The other one of me says it too. We agree on almost nothing. We agree on that." },
      { choose: [
        { t: "That's very noble of you.", notes: 2, then: [
          { s: 'haechan', f: 'flustered', t: "It's not noble. It's strategy. If I don't ask, you can't say no." },
          { s: 'solar', f: 'neutral', t: "That's not strategy. That's cowardice with a haircut." },
          { s: 'haechan', f: 'happy', t: "Ha! Okay. Yeah. That's fair. That's going in a song." }
        ] },
        { t: "And if I ask you something?", notes: 3, then: [
          { s: 'haechan', f: 'surprised', t: "...Then I'll answer. Obviously. I'm not an idiot." },
          { s: 'haechan', f: 'flustered', t: "Don't ask me something now. It's nearly midnight. I'll say something stupid in two languages." }
        ] },
        { t: "(Lean your head on his shoulder.)", notes: 3, then: [
          { n: "She leaned her head on his shoulder. He went still the way he'd gone still a year ago, the first time, as if a bird had landed on him and he didn't want to be the reason it left. Then, slowly, he tipped his own head over until his cheek was against her hair, and breathed out, long, the way you breathe out in a warm room after a cold walk." },
          { s: 'haechan', f: 'neutral', t: "...That's not asking either. Just so you know. That's allowed." }
        ] }
      ] },
      { n: "At eleven fifty-eight he reached over without looking and put his hand on the dryer between them, palm up, and left it there. Not reaching for hers. Just there, open, on the warm metal, where she could see it if she wanted to." },
      { n: "She looked at it. It was the hand that had come down the rope. The plasters were off now. The rope had left a line across the palm, healing, pink, straight as a ruler, from the heel of the hand to the base of the first finger." },
      { choose: [
        { t: "(Put your hand in his.)", notes: 3, then: [
          { n: "She put her hand in it. He closed his fingers, carefully, and then not carefully at all, the way he had on the overpass, and she felt the line of the scar against her own palm, raised and warm, like a seam." }
        ] },
        { t: "(Put your hand next to his. Not in it. Close enough.)", notes: 3, then: [
          { n: "She put her hand down on the dryer beside his, not in it, the sides of their little fingers touching, and he looked at that for a long time, and then at her, and didn't say anything, and didn't move his hand an inch, and neither did she." }
        ] }
      ] },
      { dark: true },
      { music: 'mystery' },
      { n: "The dryer stopped mid-turn. Not slowing. Stopped, between one thump and the next, the drum hanging at an angle, the way everything stopped now. The bulb went out. The red came up through the little black window in the back door like something rising through water, and lay across the floor and the machines and their two hands, and the hum came with it, the note and the note under the note." },
      { n: "She listened. She couldn't help it, now that she knew what was under it. She listened for the humming and couldn't find it, and listened harder, and couldn't, and that was almost worse, the way a silence is worse when you know what it's covering." },
      { n: "Beside her, in the red, he was listening too. She could feel it in his hand. He'd switched the recorder back on. The little light was the only other red thing in the room that wasn't the hour." },
      { s: 'haechan', f: 'neutral', t: "...If you hear anything at that door, you don't get up. Okay? You don't get up and you don't answer it." },
      { s: 'haechan', f: 'serious', t: "I'm not asking. I'm telling you. Different thing." },
      { n: "She didn't get up. Neither did he. They sat on the dryer in the red with their hands where they'd put them and listened to the room, and nothing knocked, all hour, not once, and the hour went on a little longer than an hour, and he was the one who noticed, and said nothing, and wrote the time on the back of his hand in pen when the lights came back." }
    ] }
  ]
});
