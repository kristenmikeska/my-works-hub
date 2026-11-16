/* Persona 3: Equinox · Haechan · ∞ The Universe. Link data (femc-equinox-game.html). Format: link fields in
   assets/femc/game/core.js ("Links" header), scene lines in assets/femc/game/scene.js.
   Written: ranks 1–2 (rank 1 from 4/13, the dorm laundry room, in the evening; rank 2 from 4/21, same home, moves to the
   strip and the roof; branches on eqx-knock). Ranks 3–15 still to write. Rank 2 flags (nothing reads them yet):
   eqx-hc-gap-sang, eqx-hc-roof-kiss.
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
    ] },
    { after: '4/21', title: '2: two cans', place: 'Iwatodai Dorm · Laundry Room', time: 'Night', music: 'night', scene: [
      { bg: 'iwatodaidorm-laundryroom-night' },
      { n: "The H was still on the rota. Somebody had given the dryer in the drawing a face since last week, two dots and a flat line, which meant Junpei, and under it, in a third pen, very small, somebody else had written *he's fine*, which meant Hanni, who did not believe it." },
      { n: "He wasn't on the dryer. He was standing at the back door with his hands in the pocket of his hoodie, looking at the chain, the way you'd look at a dog you weren't sure about, and when she came in he didn't turn round, he just said her name to the door, as if the door were the one he was telling." },
      { s: 'haechan', f: 'neutral', t: "We're out of coffee." },
      { s: 'solar', f: 'neutral', t: "We?" },
      { s: 'haechan', f: 'smirk', t: "The dryer and me. It's a household. Get your shoes. It's ten past eleven, there's a machine at the bottom of the strip, I timed it, it's nineteen minutes there and back if nobody stops to look at the moon." },
      { choose: [
        { t: "Mitsuru's rule says nobody goes out after eleven.", notes: 2, then: [
          { s: 'haechan', f: 'neutral', t: "Mitsuru's rule says nobody *opens a door* in the red. Hanni's says nobody goes anywhere alone. I've read them both. I've read them more times than Mitsuru has. It's not red yet and you're not alone." },
          { s: 'haechan', f: 'smirk', t: "Look at that. Two rules, both kept. I'm a model resident." }
        ] },
        { t: "(Go and get your shoes.)", notes: 3, then: [
          { n: "She went and got her shoes. He was waiting by the front door when she came down, already in his, holding hers out by the heels in one hand like a waiter with a tray, and she didn't ask how he'd known which pair." }
        ] },
        { t: "Is this a date?", notes: 3, then: [
          { s: 'haechan', f: 'slight-surprise', t: "...It's a coffee run." },
          { s: 'haechan', f: 'blushing', t: "It can be a date. I'm not going to *ask* you if it's a date. That's the whole thing. You decide what it is. I'll just walk next to it." }
        ] }
      ] },

      { place: 'Iwatodai · The Strip', time: 'Night', bg: 'iwatodai-strip-night', soft: true },
      { n: "The strip at eleven was almost empty, the shutters down on the bookshop and the pharmacy, the karaoke sign at the far end buzzing pink at nobody. April had gone soft in the last week; the air smelled of wet pavement and someone's late dinner, and there was a moth throwing itself at every streetlight in turn as if it had been promised one of them would let it in." },
      { n: "He walked on the road side. He'd always walked on the road side, in every world, without ever once saying why, and she'd stopped noticing it sometime last autumn and noticed it again tonight, all at once, the way you notice your own heartbeat in a quiet room." },
      { n: "The vending machine stood by itself between a closed noodle shop and a gap in the buildings, lit from inside like an aquarium, humming. Rows of cans in red slots for hot and blue for cold. He fed it coins from his pocket without counting them and pressed the same button twice, and two cans dropped into the tray one after the other with two heavy, satisfied thunks, and he fished them out and held one out to her." },
      { n: "Hot. That was the thing she'd forgotten about this country: the machines sold them hot, so hot you couldn't hold them at first, so hot you had to pass them hand to hand." },
      // CG: eqx-two-cans — night, a lit vending machine on an empty shopping street, a boy in a black hoodie holding out a hot can of coffee to a girl in a cardigan, her hands already up to take it, the machine's light on both their faces.
      { s: 'haechan', f: 'neutral', t: "Okay. New system. Here they come out hot. So you hold it till it isn't. Then you give it back and I drink it. Same thing as home, just backwards." },
      { s: 'haechan', f: 'smirk', t: "Everything here's backwards. The sky's in the floor, the night's red, the vending machines are kettles. I'm adapting." },
      { choose: [
        { t: "(Hold it in both hands. Don't open it.)", notes: 3, then: [
          { n: "She held it in both hands against the front of her cardigan, the way you'd hold a small animal, and the heat went into her palms and up her wrists, and she didn't open it, because that wasn't the system. He watched her hold it and didn't say anything, and opened his own with one thumb, and drank half of it in one go, and burned his mouth, and swore in two languages, quietly, one after the other." }
        ] },
        { t: "What if I want to drink it this time?", notes: 2, then: [
          { s: 'haechan', f: 'slight-surprise', t: "...Then drink it. Obviously. It's yours. I'm not your coffee manager." },
          { n: "She opened it and took one sip. It was terrible, sweet and thin and scalding, and she made a face, and he laughed out loud on an empty street at eleven at night, the real laugh, the one that went up at the end, and she handed it to him to hold till it wasn't hot." }
        ] }
      ] },
      { n: "The machine printed nothing. But the konbini on the corner did, when he went in after for gum he didn't want, and he came out with the receipt held up between two fingers like he'd won it, and stopped under the streetlight, and took the other one out of his pocket, the soft folded one from the rope, and laid them on the flat of his palm side by side." },
      { n: "Two receipts. One crisp and white, the date and the time printed sharp at the bottom, today's, eleven twenty-two at night. And one gray and soft as cloth, with a smear where a day should be." },
      { s: 'haechan', f: 'neutral', t: "There. Now I know what day it is here." },
      { s: 'haechan', f: 'sad', t: "Still don't know what day it is there. Either there. But at least I've got one I can read." },
      { choose: [
        { t: "Keep them together. Same pocket.", notes: 3, then: [
          { s: 'haechan', f: 'neutral', t: "Yeah? Okay. Same pocket. So one can tell the other one what time it is." },
          { n: "He folded the new one round the old one, carefully, so the soft one was inside, the way you'd put a coat round someone, and put them both in his pocket, and kept his hand on them." }
        ] },
        { t: "Throw the new one away. You don't need to know what day it is here.", notes: 2, then: [
          { s: 'haechan', f: 'serious', t: "...No. I do, though." },
          { s: 'haechan', f: 'neutral', t: "Somebody has to. Akihiko's counting seconds. Jungwon's writing dates in a diary. I'll do receipts. That way if this place starts lying about what day it is, at least three of us will catch it." }
        ] }
      ] },
      { n: "They walked back slower than they'd come. Nineteen minutes became twenty-six. Neither of them mentioned it. At the corner by the shrine he tipped his head back and looked at the moon, which was a little past half and very white, and she looked at him looking at it, and he caught her, and looked down, and the corner of his mouth went." },

      { place: 'Iwatodai Dorm · Roof', time: 'Night', bg: 'iwatodaidorm-roof-night', soft: true },
      { n: "He didn't go back to the laundry room. He went up instead, all the way, past the second floor where Hanni's futon lay across the hall and Hanni on it, awake, who lifted her head as they went by and looked at the two of them and at the two cans and put her head down again without a word, which was its own sentence; up past the third, out onto the roof, where the planters were and the chairs and the whole of the town spread out under them in its sodium orange, and the black line of the river, and beyond it, low, the dark where the boarding house was." },
      { n: "He sat down on the concrete with his back to the planters and took out the recorder, and a pair of headphones, and a battered little black box with a cable coming out of it that she didn't recognize." },
      { s: 'haechan', f: 'neutral', t: "Junpei found it in a box in the command room. It's some kind of sampler. It's from about nineteen-ninety. It's the worst thing I've ever used. I love it." },
      { s: 'haechan', f: 'neutral', t: "I took the room tone. The hum. Every night of it. I cut out everything that wasn't the note, and the note under the note, and I slowed it down, and I laid it under a beat. It's eight bars. It goes round." },
      { s: 'haechan', f: 'blushing', t: "...It's not finished. It's a sketch. Don't make the face." },
      { n: "He put the headphones on her himself, one hand on each side of her head, and settled them over her ears, carefully, the way he'd settle them on a stand, and for a second his hands stayed there, his palms flat over the headphones and her ears and her whole skull, and the world went soft and far away, and then he took them off her and pressed play." },
      { n: "It was the red hour. She knew it at once, in her teeth before her ears. The hum, but slowed down and warmed up, gone round and deep like a cello, and under it the lower note turned into something you could almost lean on, and over it a beat that was barely a beat, a clap and a kick and the soft thump of a dryer turning, which he'd kept in, she realized, he'd kept the dryer in. It went round. Eight bars. It went round again. It sounded like the hour if the hour had loved somebody." },
      { n: "It sounded like a room with a space in it the shape of a voice." },
      { s: 'haechan', f: 'neutral', t: "There's a gap. Middle of the fourth bar. I left it." },
      { s: 'haechan', f: 'serious', t: "I'm not asking you to sing on it. I want that clear. I'm just telling you there's a gap, and what shape it is." },
      { choose: [
        { t: "(Sing into the gap. Quietly. Just once.)", notes: 3, flag: 'eqx-hc-gap-sang', then: [
          { n: "She didn't decide to. The fourth bar came round and the gap opened in it and she put four notes into it under her breath, nothing, a shape, the first thing that came, and the gap closed over them, and the loop went on." },
          { n: "He'd stopped breathing. She saw it. He sat on the concrete with his elbows on his knees and his mouth slightly open and didn't breathe for the whole of the fifth bar, and then breathed out, all at once, and reached over and pressed the little red button on the recorder without taking his eyes off her." },
          { s: 'haechan', f: 'blushing', t: "...Again. No. I'm not asking. I'm. The machine's running. That's all I'm saying. The machine's just running." }
        ] },
        { t: "(Hum along with the hum instead.)", notes: 2, then: [
          { n: "She hummed under it, low, just following the note, the way you'd hum along with a fridge, and he laughed, and leaned his head back against the planter, and listened to her hum the red hour back at itself for two whole loops with his eyes shut." },
          { s: 'haechan', f: 'happy', t: "That's worse. That's so much worse than singing. That's the best thing I've heard here." }
        ] },
        { t: "It's beautiful. I don't want to put anything in it yet.", notes: 2, then: [
          { s: 'haechan', f: 'neutral', t: "Yeah. Okay. Yet's good. Yet's a word I can work with." },
          { n: "He didn't sound disappointed. He sounded like a man who'd been handed a date on a receipt he could read." }
        ] }
      ] },
      { n: "He stopped the loop. The roof was very quiet without it. Far below, a car went by on the river road, and then nothing, and she held the coffee, which had stopped being hot somewhere on the stairs, and gave it to him, and he drank it, which was the system." },
      { s: 'haechan', f: 'serious', t: "There's a bit I cut out. Of the tape. Before I made that." },
      { ifEvent: 'eqx-knock', then: [
        { s: 'haechan', f: 'serious', t: "From the twenty-eighth. From my door. You know my door knocked. Everybody's knocked." },
        { s: 'haechan', f: 'neutral', t: "Mine didn't say what yours said. Mine wasn't a mom. Mine wasn't anybody's mom." },
        { s: 'solar', f: 'neutral', t: "Who was it?" },
        { s: 'haechan', f: 'serious', t: "Someone I know. That's all you're getting. That's all *I'm* getting, and I was there." },
        { n: "He turned the can round in his hands, a quarter turn and back, and she thought of Hanni doing that with a cup, and of every person she knew who had a thing they did with their hands when they were coming to the edge of something." },
        { s: 'haechan', f: 'serious', t: "It asked me for something. Same as the tape, before, the bit I couldn't hear. Only on the twenty-eighth I could hear it. Clear as you." },
        { s: 'haechan', f: 'neutral', t: "I'm not telling you what. Not because it's bad. Because it was so *reasonable*, Sol. It was the most reasonable thing anyone's ever said to me. That's how I knew." }
      ], else: [
        { s: 'haechan', f: 'serious', t: "The humming. I said it's there every night. It is. But it's not the same every night." },
        { s: 'haechan', f: 'neutral', t: "I laid them side by side. Every night since the sixth. It's closer every time. Not louder. Closer. You can hear the room change around it. First night it's past the wall. Last night it's the wall. Like someone coming down a corridor so slowly you'd never catch them moving." },
        { s: 'haechan', f: 'serious', t: "And the favor. The bit under it, before it stops. Last night I got one word of it. Just the end. *Her.*" },
        { n: "He said it flat, the way he'd said *I didn't hear that* last week, and looked out at the river, and didn't look at her." },
        { s: 'haechan', f: 'neutral', t: "I cut it out. I didn't want it in the loop. I didn't want it in anything with you on it." }
      ] },
      { choose: [
        { t: "You don't have to carry that by yourself.", notes: 3, then: [
          { s: 'haechan', f: 'sad', t: "I know. I'm not. You're up here." },
          { s: 'haechan', f: 'neutral', t: "That's not me asking you to carry it, by the way. That's just me noticing where you're sitting." }
        ] },
        { t: "Play it for me.", notes: 2, then: [
          { s: 'haechan', f: 'angry', t: "No." },
          { n: "It came out hard and fast and he heard it, and his face did the sideways thing with the jaw, and he put his hand flat on the recorder on the concrete beside him as if it might get up and play itself." },
          { s: 'haechan', f: 'sad', t: "...Sorry. No. Not that one. Ask me for anything else. Ask me for the receipt." }
        ] },
        { t: "(Take his hand off the recorder and hold it.)", notes: 3, then: [
          { n: "She took his hand off the little machine, the one with the pink line across the palm, and held it in her lap in both of hers. It was cold from the can. He let her. He looked down at it there for a long time, his hand in her lap, like a man looking at a photograph of somewhere he used to live." }
        ] }
      ] },
      { n: "It was eleven fifty. She knew without looking; the whole town knew. The traffic on the far bridge had thinned to nothing, and the karaoke sign at the end of the strip had gone off, and a window on the third floor of the building opposite went dark, and then another, people going to bed early because nobody in Iwatodai liked to be awake at midnight lately and nobody could have told you why." },
      { n: "He was very close. She didn't know when that had happened either. His shoulder against hers, his knee, the warmth of him all down one side and the cold of the concrete all down the other, and the smell of him, laundry and cheap coffee and the rubber of the headphones, and she turned her head to say something about going in and he was already looking at her." },
      { s: 'haechan', f: 'neutral', t: "...After everything. I keep thinking I'm supposed to say something. What we are. What we were in March. What we were at the bottom of a well." },
      { s: 'haechan', f: 'serious', t: "I'm not going to. You know why. But you can. Any time. Or not. Or do something instead of saying it. I'm told that's allowed." },
      { choose: [
        { t: "(Kiss him.)", notes: 3, flag: 'eqx-hc-roof-kiss', then: [
          { n: "She kissed him. She didn't plan it and she didn't hurry it; she put her hand on his jaw, the way you'd turn a face toward a light, and kissed him on the roof of the dorm with the whole town going dark beneath them, and for a second he didn't move at all, as if he'd been waiting so long he'd forgotten what to do when it came." },
          { n: "Then he remembered. He kissed her back slow and then not slow, one hand coming up into her hair and the other flat on the concrete behind her to hold them both up, and she felt the scar on his palm against the nape of her neck, raised and warm, and he made a small sound against her mouth that she would think about for the rest of the week at the worst possible moments." },
          { n: "When he pulled back it was only an inch. His forehead stayed against hers. His breathing was a mess." },
          { s: 'haechan', f: 'blushing', t: "...That's not an answer. Just so you know. I'm not counting that as an answer." },
          { s: 'solar', f: 'flustered', t: "What are you counting it as?" },
          { s: 'haechan', f: 'smirk', t: "Room tone." }
        ] },
        { t: "We're us. Same as every world. That's all I know yet.", notes: 3, then: [
          { s: 'haechan', f: 'slight-surprise', t: "...Same as every world." },
          { n: "He looked at her as if she'd handed him a third receipt, one with every date on it at once. Then he looked away at the river, fast, and his ears had gone red under his hair, and he said *okay* to the river, twice, quietly, like a man checking a latch." }
        ] },
        { t: "(Put your head on his shoulder and say nothing.)", notes: 2, then: [
          { n: "She put her head on his shoulder and said nothing at all, and he let out a breath she felt all the way down his arm, and tipped his cheek onto her hair, and they sat like that, saying nothing, which with him had always been the loudest thing they did." }
        ] }
      ] },
      { n: "They went in at eleven fifty-seven, because neither of them was stupid. He held the roof door for her and she went through and he came after and drew the bolt across, and checked it, and checked it again, and she watched him check it a third time with his fingers flat on the iron, and didn't say anything." },
      { dark: true },
      { music: 'mystery' },
      { n: "The red came up while they were on the stairs. Between one step and the next the stairwell bulb went out and the color came in through the little window on the landing, slow, like something poured, and lay across the steps, and the hum came with it. Haechan stopped on the stair above her. She heard the small click of the recorder in his pocket being switched on by feel." },
      { n: "They stood very still on the stairs in the red and listened." },
      { n: "Under the hum, under the note under the note, there it was. She'd never heard it with her own ears before, only on the tape, and it was worse with her own ears, because there was no little machine between it and her. Humming. A woman's, with her mouth closed, slow, the tune you'd hum to a child who won't settle. It wasn't past the wall. It wasn't the wall." },
      { n: "It was somewhere in the building. Far down. Patient. It went up and came down and went up again, and stopped, as if whoever it was had heard them stop." },
      { n: "Haechan's hand found hers in the dark without looking, and closed, hard, the scar across her knuckles, and he didn't pull her and she didn't pull him; they went up the rest of the stairs side by side at exactly the same speed, not fast, because fast would have meant something, to the second floor, where Hanni was sitting bolt upright on her futon across Hyein's door in the red with her knees drawn up and her eyes wide and white, looking past them, at the stairs." },
      { s: 'hanni', f: 'serious', t: "...You heard that." },
      { n: "Nobody answered. Haechan sat down on the floor beside Hanni's futon with his back to the wall and pulled Solar down beside him, and the three of them sat in a row in the hall with their shoulders touching, facing the stairwell, until the hour was over, and the hour was a little longer than an hour, and the recorder in his pocket ran all the way through it, and in the morning he didn't play it back. She asked him at breakfast. He said he'd taped over it. She didn't believe him, and she didn't ask again." }
    ] }
  ]
});
