/* Persona 3: Equinox · Haechan · ∞ The Universe. Link data (femc-equinox-game.html). Format: link fields in
   assets/femc/game/core.js ("Links" header), scene lines in assets/femc/game/scene.js.
   Written: ranks 1–8 (rank 1 from 4/13, the dorm laundry room, in the evening; rank 2 from 4/21, same home, moves to the
   strip and the roof; branches on eqx-knock). Ranks 9–15 still to write.
   Rank 7 (from 11/8, after the R3 / S3 doors: the laundry room in November, the song sent home to his own two numbers and
   both "Read"; his plan to follow her wherever is "asking with extra steps"; the third-floor stairs with Taejoon, "again";
   in the red a reply from his own number dated Tue 4/6 0:00, Taejoon's hand over it, "not in the dark"; back in the laundry
   room the reply is the song + his own voice asking her to stay (yes: the roof night itself); next morning both threads
   say "Sent"). Reads dead.shinjiro, eqx-1122, dead.aigis, eqx-home-R3 / eqx-away-R3 / eqx-watch-R3, asks.haechan,
   eqx-hc-take-kept / -erased, his rank-6 rule flags, the kiss flags. Sets: eqx-asked-haechan (hidden ask "Come with me…
   Please.": tally asked +1, cakes +1; should join story-act4.js ASKED) | eqx-choose-haechan (tally choose +1; should join
   MINE) | nothing; then eqx-hc-his-rule (Solar's rule: if he asks her to stay it isn't him) | eqx-hc-reply-deleted |
   eqx-hc-reply-held | nothing.
   Rank 8 (from 12/6, the route turn: the laundry room in December, then the courtyard well with Akihiko on the rope and
   stopwatch, then his ask floor in the Well (a back door on the line between the First and Second Hill; they enter from the
   yard side; a copy of the laundry room with a hooded hoodie on the running dryer humming their loop). The hour: at 52
   minutes it asks Solar, in Haechan's voice, to stay with him (text by asks.haechan). Solar: "...Okay." (tally cakes +1,
   eqx-hc-floor-okay: the floor stays, happy) | look at the real one | squeeze three times. Otherwise Haechan stands and wants
   it out loud to it and refuses to let anything ask for him; the hood empties into flour (eqx-hc-floor-held). Up top,
   Akihiko's fist bump (dead.shinjiro: his sewn coat). 2 a.m., the real laundry room: the forecast; ifTaken 'haechan' (another
   romance) gets "not my call"; ROUTE CHOICE: two romance options (route 'romance') / one friend option (route 'friend');
   ifRomance: his room, waking up together, the receipt "She picked." Dawn: Miseon in the dorm kitchen sets him a bowl and
   says "You're thin" to his face (her first time direct); Mrs. Oka's soup pot from 12/4 turned right way up on the back step,
   full of flour (not after eqx-1221). Reads eqx-1221, dead.aigis, dead.shinjiro, asks.haechan, eqx-hc-his-rule,
   eqx-hc-never-say. Does not spend 12/19's "what are we, again?" (no label is agreed here).
   Rank 4 (from 7/29, after eqx-hunted 7/27 where he speaks the favor: the laundry room in the summer heat, then the dorm
   roof where half the house sleeps; the red hour) holds his ask: tally asks.haechan 'yes' (+ cakes) / 'choose' (+ choose) /
   'no'; reads the kiss flags (dating) and may set eqx-hc-roof-kiss (a first kiss on the roof); ifEvent eqx-equinox guards a
   late play; after the red, ifChoice asks.haechan colours how the line in his head goes quiet.
   Rank 5 (from 8/29, after the parents' arrival: the dorm front gate with Taejoon, then the laundry room turned into a booth,
   recording in the red; a word on the tape in Solar's voice she never said; dawn at the gate with Taejoon) branches on
   eqx-equinox (mothers here / taken), eqx-hc-gap-sang, asks.haechan, the kiss flags; sets eqx-hc-take-erased | -kept.
   Rank 6 (from 10/7, after the seventh stair 10/6: the laundry room in October; his 4/28 door was Solar's voice; his ask
   floor; a knock in her voice) branches on eqx-empty-chair, eqx-1023, eqx-1122, eqx-hc-take-*, asks.haechan, the kiss
   flags; sets eqx-floor-haechan (his ask floor, the Well, on the line between the First and Second Hill) and one of
   eqx-hc-never-say | eqx-hc-learn-voice | eqx-hc-true-tape (his rule for telling Solar's voice from its). Rank 3 (from 6/1, starts in the laundry room, moves to his
   room; branches on eqx-hc-gap-sang and eqx-hunted; no ask spent here) flags: eqx-hc-note-kept, eqx-hc-stayed-night. Rank 2 flags (nothing reads them yet):
   eqx-hc-gap-sang, eqx-hc-roof-kiss.
   Shape: the stub fields from assets/femc/equinox/data/links.js (this file wins over the stub, core.js indexLinks).
   Two lives (Runners + strangers): in private with Solar he talks about both openly. Solstice's ranks are shared memory. */
(window.FEMC_GAME_LINKS ||= []).push({
  id: 'haechan', name: 'Haechan', short: 'Haechan', arcana: 'Universe', numeral: '∞', from: 'Runners · strangers', kind: 'searcher',
  world: 'RS', romance: 'canon', maxRank: 15, starts: '4/8', lodging: 'dorm',
  cast: { 'taesang-strangers': 'Taejoon' },
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
    ] },
    { after: '6/1', title: '3: not a question', place: 'Iwatodai Dorm · Laundry Room', time: 'Night', music: 'night', scene: [
      { bg: 'iwatodaidorm-laundryroom-night' },
      { n: "June came in wet. The rainy season arrived early that year, or the Personaverse's copy of it did, which nobody could tell apart from the real thing, and by the first week the dorm smelled faintly of towels that would never quite dry, and the umbrella stand by the front door had become a kind of geological record: Junpei's broken one, Yukari's pink one, Jaehyun's new wind-rated one bought to replace the one the sea took, and eleven clear plastic konbini ones that belonged to everybody and nobody." },
      { n: "The laundry room was the only warm room in the building after eleven, and it was empty. The dryer was running with nothing in it, thumping softly on the turn, keeping the room warm for nobody. On the lid of the cold one, weighted down with the black guitar pick so the draft from the back door wouldn't take it, there was a strip torn off a sheet of staff paper with three lines on it in his handwriting, the Korean on top and the English under, as if he'd wanted to be sure that whichever one of her came down tonight could read it." },
      { n: "*My room. Door's not locked.*" },
      { n: "And under that, underlined twice, hard enough that the pen had gone through the paper at the end of the second line: *This is not a question.*" },
      { choose: [
        { t: "(Take the pick. Leave the note. Go up.)", notes: 2, then: [
          { n: "She put the pick in her cardigan pocket, where it sat against her hip warm from the dryer, and left the note where it was, because the note was his and the pick, somehow, at some point she couldn't have named, had become hers." }
        ] },
        { t: "(Fold the note into your pocket with the pick.)", notes: 3, flag: 'eqx-hc-note-kept', then: [
          { n: "She folded the note in half and then in half again and put it in her cardigan pocket with the pick, and felt immediately ridiculous, and kept it anyway, because she'd kept worse things for less reason, and at least this one had her name nowhere on it and her whole name in every line." }
        ] },
        { t: "(Stand there a second. Then go up.)", notes: 2, then: [
          { n: "She stood there a second, in the warm, with the dryer thumping, reading *this is not a question* three times as if it might turn into one if she looked at it long enough. It didn't. It was very firmly not a question. She went up." }
        ] }
      ] },

      { place: 'Iwatodai Dorm · Haechan’s Room', time: 'Night', bg: 'haechan-bedroom', soft: true },
      // BG: haechan-bedroom stands in; an Equinox version would want rain on the window and the receipts on the corkboard.
      { n: "His door was the third on the boys' side, and it was open the width of a hand, and the light inside was the yellow of a desk lamp with something thrown over it to make it softer, a T-shirt, she saw when she pushed the door, gray, one of hers, which she'd been looking for since April." },
      { n: "The room smelled of him. Laundry and the rubber of headphone pads and the faint burnt-dust smell of old electronics left on too long. The window was open an inch onto the rain and the rain was coming down straight and patient in the dark outside, and the sampler from the command room sat on the desk wired into a pair of speakers she was fairly sure Mitsuru didn't know had left the fourth floor, and above the desk, pinned to a corkboard he must have found in the same box, there were receipts." },
      { n: "The two from April, the soft gray one folded inside the crisp white one, pinned together with one pin. And beside them, in rows, as neat as a calendar, a receipt for every night since. The vending machine didn't print them, so they were all from the konbini on the corner. Gum. Barley tea. A single rice ball he'd bought and given to Koromaru, who'd refused it. One for every night, each with its date printed sharp along the bottom, so that the wall above his desk was a month of nights he'd counted, one by one, to be sure nobody could take one off him without his noticing." },
      { n: "He was on the floor with his back against the bed and his knees up and his headphones round his neck, and he looked up when she came in and didn't say *there you are*, and didn't get up, and his face did the thing it did, the quarter inch and then the whole half." },
      { s: 'haechan', f: 'neutral', t: "Shut the door. Not because. The heating." },
      { s: 'solar', f: 'neutral', t: "The heating's off at eleven." },
      { s: 'haechan', f: 'smirk', t: "Then the door's not doing anything either way, is it. Shut it anyway. I've got something to play you and Junpei's got ears like a bat." },
      { n: "She shut it. She sat down on the floor beside him, not quite touching, and he reached past her without looking and turned the desk lamp a little so the light came off the wall instead of off her T-shirt, which he did not mention, and neither did she." },
      { s: 'haechan', f: 'neutral', t: "Rain doesn't fall in the red. Did you know that? I didn't know that. Nobody tells you that. Last year it never rained on a full moon, so nobody checked." },
      { s: 'haechan', f: 'neutral', t: "Listen." },
      { n: "He put one side of the headphones against her ear and held it there himself, his palm flat over it, and pressed play on the recorder with his other thumb." },
      { n: "Rain. Rain on this window, on the sill, on the gutter outside; a hiss and under it a thousand small separate sounds, close, so close she could almost feel it on her face. Then the hum came in under the rain, the note and the note under the note, and the rain went on for one more second, and stopped." },
      { n: "Not the way rain stopped. Rain thinned out, rain tailed off, rain turned to drips from the gutter for an hour after. This just stopped, between one drop and the next, all of it at once, and the silence it left was the shape of rain, a hiss-shaped hole in the air." },
      { s: 'haechan', f: 'serious', t: "I looked out. Monday. When it went quiet like that." },
      { s: 'haechan', f: 'neutral', t: "It's still there. The rain. It's just not falling. It's hanging. Every drop, all the way down to the yard, just hanging there in the red, like somebody strung beads on a curtain and never drew it. You could put your hand out and touch one. I didn't. Obviously." },
      { s: 'haechan', f: 'neutral', t: "And then at the end of the hour—" },
      { n: "On the tape, in the rain-shaped silence, something went off like a crowd. One sound. One enormous soft sound, all at once, a whole hour of rain landing on the whole town in the same instant, so that it sounded like nothing so much as applause." },
      // CG: eqx-rain-hangs — a dorm window in the red hour, rain hanging motionless in the air outside all the way down to a dark yard, a boy and a girl in silhouette at the glass, his hand flat on the pane.
      { choose: [
        { t: "That's beautiful.", notes: 2, then: [
          { s: 'haechan', f: 'slight-surprise', t: "...Yeah? I thought so too. And then I thought, that's a weird thing to think about something that's wrong." },
          { s: 'haechan', f: 'neutral', t: "Both things. It's both things. It's always both things here." }
        ] },
        { t: "You're putting it in the loop.", notes: 3, then: [
          { s: 'haechan', f: 'smirk', t: "I've already put it in the loop. The applause bit's the drop. Bar thirteen. You'll hate it. You'll hum it in the shower." }
        ] },
        { t: "(Take the headphone off your ear. Put your hand over his on it instead.)", notes: 3, then: [
          { n: "She didn't take the headphone off. She put her own hand over his where it held it to her ear, and he went still, and let the tape run on to the end, both their hands on one side of her head, and when it stopped neither of them moved for a while." }
        ] }
      ] },
      { n: "The loop was sixteen bars now. He'd built it out from the eight she'd heard on the roof in April. The hum gone warm and round like a cello, the dryer kept in as the kick, the rain's applause at the turn into the second half, and then the second half itself, which was new, and which went somewhere the first half hadn't dared to." },
      { ifFlag: 'eqx-hc-gap-sang', then: [
        { n: "And in the middle of the fourth bar, the gap, which wasn't a gap anymore. It was four notes, under somebody's breath, on a roof in April, so quiet she'd forgotten she'd done it. Her. He'd kept them. He'd built the whole second half out of them, the four notes turned upside down and slowed and laid under everything like a floor." },
        { s: 'haechan', f: 'blushing', t: "...Yeah. I built a house round them. Don't say anything. If you say something nice I'll have to leave the room and it's my room." }
      ], else: [
        { n: "And in the middle of the fourth bar, the gap. Still there. He'd left it. He'd built the whole second half around it, so that now it wasn't just a gap in one bar but a shape the whole song bent toward, the way a room bends toward an empty chair." },
        { s: 'haechan', f: 'neutral', t: "It's bigger now. I keep building round it and it keeps getting bigger. That's not a hint. That's acoustics." }
      ] },
      { n: "He switched it off, and in Korean, the low careful Korean of the other house, the one that dropped its voice in hallways out of a habit neither of them had ever had to explain to the other, he said that the other one of him thought it should be slower." },
      { s: 'haechan', f: 'smirk', t: "He thinks everything should be slower. He grew up in a house where nobody ran. I keep telling him there's no stairs to creep down here. He doesn't believe me. He checks." },
      { ifBefore: '8/25', then: [
        { s: 'haechan', f: 'neutral', t: "He misses your dad. The quiet one. That's the stupidest thing about him. He keeps waiting for a man to walk into a room and say *son* without looking up from the paper." },
        { s: 'haechan', f: 'sad', t: "...I keep waiting for it too. I'm just better at pretending it's him." }
      ] },
      { choose: [
        { t: "(Answer him in Korean. The careful kind.)", notes: 3, then: [
          { n: "She answered him in the other house's Korean, low, careful, the way you'd speak with somebody's father on the other side of a paper screen, and it went through him visibly, from his shoulders down, and he laughed under his breath and put his face in his hands for a second and said, through his fingers, *agasshi*, like a complaint." }
        ] },
        { t: "Tell the other one of you there's no seventh stair here.", notes: 2, then: [
          { s: 'haechan', f: 'happy', t: "Ha. He knows. He counted. There's a fourth stair on the second flight that does it, though. Quieter. He's very proud of finding it." }
        ] }
      ] },
      { ifEvent: 'eqx-hunted', then: [
        { n: "He was quiet for a while. Then he said, looking at the receipts and not at her," },
        { s: 'haechan', f: 'neutral', t: "Since I said it out loud. On the roof. The favor. It's quieter. Not gone. Quieter. Like it's waiting to see if I meant it." },
        { s: 'haechan', f: 'serious', t: "So I've been practicing. The other thing. Wanting out loud. You said I'm allowed. I'm bad at it. I've been doing it to Koromaru." },
        { s: 'solar', f: 'neutral', t: "Do it to me." },
        { n: "He looked at her. Then he looked at the ceiling, as if the list were written up there, and his ears went red, and he did." },
        { s: 'haechan', f: 'blushing', t: "I want you to sing on it. I want the second can, every night, the warm one, the one you hold. I want to know what day it is at home. I want you warm. I want the T-shirt back, no I don't, keep it, I want to see you in it. I want—" },
        { s: 'haechan', f: 'neutral', t: "...That's enough. That's a lot. That's more than I've said out loud in a year. I'm going to lie down on the floor now." }
      ], else: [
        { n: "He was quiet for a while. Then he said, looking at the receipts and not at her," },
        { s: 'haechan', f: 'neutral', t: "The favor's not on the tapes anymore. The bit under the humming. I've checked every night since April. It's gone." },
        { s: 'solar', f: 'neutral', t: "That's good." },
        { s: 'haechan', f: 'serious', t: "It's not on the tapes because it's not outside anymore. It's in here. You know when a song gets stuck and it's just the one line, over and over, and you can't remember the rest of the song, just the line? It's that. It's one line. It's in my voice." },
        { s: 'haechan', f: 'neutral', t: "I'm not telling you the line. Don't ask. Not because you'd hate it. Because you wouldn't." }
      ] },
      { choose: [
        { t: "Okay. I won't ask.", notes: 3, then: [
          { s: 'haechan', f: 'slight-surprise', t: "...Just like that." },
          { s: 'solar', f: 'neutral', t: "You'll tell me when you want to. Or you won't." },
          { n: "He looked at her as if she'd handed him something heavy and then shown him it was hollow, and let out a breath, and his shoulder came down against hers, all the way, finally." }
        ] },
        { t: "If it's in your voice, it's not you.", notes: 2, then: [
          { s: 'haechan', f: 'neutral', t: "Yeah. That's what I keep telling myself. It's in my voice, it's not me. It's in my voice, it's not me." },
          { s: 'haechan', f: 'sad', t: "Only it says things I'd say. That's the part I can't get round." }
        ] }
      ] },
      { n: "It was eleven fifty-eight. They both knew. He'd taken his phone out at some point and laid it face up on the floor between them, and they both watched the last two minutes go on it without saying they were watching." },
      { n: "Hanni's rule. Mitsuru's, in red, on the whiteboard. *Nobody opens a door in the red.* Her room was down the hall and across the landing and up one flight, three doors and a stairwell away. She could make it in two minutes if she went now. He didn't say so. He didn't say anything. He was looking at the phone." },
      { s: 'haechan', f: 'neutral', t: "...If you're going, go now. I'm not keeping you. I want that on the record." },
      { s: 'haechan', f: 'smirk', t: "The hour might keep you. That's between you and the hour. I'm not involved." },
      { choose: [
        { t: "(Stay where you are.)", notes: 3, then: [
          { n: "She stayed where she was. He breathed out through his nose, not quite a laugh, and didn't look at her, and turned the phone over so it was face down, and that was all." }
        ] },
        { t: "(Get up. Get as far as the door. Stop with your hand on it.)", notes: 3, then: [
          { n: "She got up and went to the door and put her hand on the handle, and stood there, and didn't turn it. Behind her he didn't move. She could feel him not moving the way she'd heard him not moving on the tape in April, and she took her hand off the handle and came back and sat down closer than before." },
          { s: 'haechan', f: 'blushing', t: "...That was the longest four seconds of my life. I've been down a well." }
        ] }
      ] },
      { dark: true },
      { music: 'mystery' },
      { n: "The lamp went out under her T-shirt. The red came in through the inch of open window like something poured, slow, and lay across the floor and the receipts on the wall and the two of them, and the hum came with it, and outside, on the other side of the glass, the rain stopped." },
      { n: "He got up and went to the window and she went with him. It was exactly what he'd said. Every drop, from the gutter to the yard, hanging in the red like a bead curtain nobody had drawn, millions of them, perfectly still, each one with a tiny red point of light at its heart. The yard lamp was out. The bins were coffins' shapes in the dark. Nothing moved anywhere in the world except the two of them, breathing, at the glass." },
      { n: "He put his hand flat on the pane. She put hers beside it. Then, not looking, she put hers on top of his, and felt the rope scar under her palm, raised and warm, and he turned his hand over under hers so they were palm to palm against the cold glass." },
      { s: 'haechan', f: 'neutral', t: "...I'm not asking you to stay. The hour is. Different thing." },
      { s: 'solar', f: 'neutral', t: "You said that already." },
      { s: 'haechan', f: 'smirk', t: "I'm going to keep saying it till one of us believes it." },
      { choose: [
        { t: "(Kiss him against the window.)", notes: 3, then: [
          { n: "She kissed him with the rain hanging behind him and the red on his face, and his back went against the glass and his free hand came up into her hair, and he kissed her back like he'd been sitting on the stairs of a house for a year waiting for someone to come down them." },
          { n: "It didn't stay slow. It never had, with him. Somewhere in it the window became the bed, she couldn't have said how, his hands under the hem of her cardigan and then under the hem of what was under it, warm on her back, and her name in his mouth in two languages, one after the other, as if neither one of him wanted to be left out of it." },
          { n: "The hour went on a little longer than an hour. Neither of them was counting." }
        ] },
        { t: "(Lean your forehead against his shoulder and watch the rain not fall.)", notes: 3, then: [
          { n: "She leaned her forehead on his shoulder and watched the rain not fall, and he put his chin on her hair, and they stood like that a long time, and then, she couldn't have said who moved first, they were kissing, slowly, with all the time in the world, because for once there was all the time in the world; it was hanging outside the window." },
          { n: "Later they were on his bed and his mouth was at her throat and his hand was flat and warm at the small of her back under her T-shirt, his T-shirt, her T-shirt, it didn't matter, and the hour went on a little longer than an hour, and neither of them was counting." }
        ] }
      ] },
      { n: "At the end of it the rain came down all at once on the whole town, the applause, and the lamp came back on under the gray T-shirt, and they both laughed, breathless, at nothing, at the noise of it, with her hair everywhere and his collar pulled half off his shoulder." },
      { dark: false },
      { music: 'night' },
      { s: 'haechan', f: 'blushing', t: "...It's one o'clock. The hour's done. You're free to go. Legally." },
      { choose: [
        { t: "(Stay. Fall asleep here.)", notes: 3, flag: 'eqx-hc-stayed-night', then: [
          { n: "She didn't go. She pulled the blanket over both of them and put her head down on his chest, on the place where his heart was going fast and then less fast, and he lay very still under her for a long minute as if a bird had landed on him, and then put his arm round her, and that was the last thing she knew." },

          { place: 'Iwatodai Dorm · Stairs', time: 'Early Morning', bg: 'iwatodaidorm-stairs-night', soft: true },
          { n: "She woke at six to gray light and rain on the window, falling, normally, the way rain was supposed to, and him asleep with his mouth open and one arm flung across her and the other hanging off the bed, and she got out from under the arm by degrees, like a thief, and found her cardigan, and didn't find her other sock, and gave up on it." },
          { n: "She made it out of his door and down the hall and onto the stairs in one sock, and on the landing of the second flight, on the fourth stair, the one that creaked quieter, she met Akihiko coming up from his run." },
          { n: "He was soaked. Towel round his neck, rain in his hair, his taped hand holding the rail. He stopped. She stopped. He looked at her, and at her one sock, and up the stairs past her toward the boys' side, toward the third door, and back at her, and his face did several things in order and then decided on one." },
          { s: 'akihiko', f: 'neutral', t: "Morning." },
          { s: 'solar', f: 'flustered', t: "Morning." },
          { n: "He went past her up the stairs. Two steps above her he stopped again, without turning round, and she heard him breathe out through his nose." },
          { s: 'akihiko', f: 'neutral', t: "...Your call. I keep saying it. I'm going to keep saying it." },
          { s: 'akihiko', f: 'serious', t: "Tell him the fourth stair creaks. He thinks it doesn't. It does. I've heard him on it every night since April." },
          { n: "He went on up. She stood on the fourth stair in one sock with her face burning and realized, slowly, that it had been the closest thing to a blessing she'd ever heard from Akihiko Sanada, and that it had cost him, and that he'd paid it on a staircase at six in the morning, soaking wet, without being asked." },

          { place: 'Iwatodai Dorm · Dining Room', time: 'Morning', bg: 'iwatodaidorm-diningroom', soft: true },
          { n: "At breakfast Junpei was writing in the betting book. He wrote very slowly and very deliberately, with his tongue between his teeth, while looking at nobody, and then turned the book round on the table so that Yukari could see the page, and Yukari looked at it and then at Solar and then put her face in her hands, and Hanni, at the end of the table, poured Solar's tea without being asked and put it in front of her and patted the back of her hand twice, and said nothing at all, which was its own sentence." },
          { n: "Haechan came down at seven-forty with his hoodie on inside out. He looked at the room. The room looked at him. He walked the whole length of the table, past the empty chair beside Solar, and sat down next to Akihiko, on purpose, and reached for the rice." },
          { n: "Akihiko passed him the soy sauce before he asked for it. Haechan looked at the bottle in his hand for a long second. Then he nodded at it, once, the way you'd nod to a man across a ring, and Akihiko nodded back, and they ate their breakfast side by side without a word, and Junpei, watching, very quietly, crossed something out in the book and wrote something else in." }
        ] },
        { t: "(Kiss him goodnight at the door. Go back to your own room.)", notes: 3, then: [
          { n: "She kissed him at the door. He leaned in the frame with his collar still half off his shoulder and his hair wrecked and didn't try to stop her, and didn't say *stay*, and she could see him not saying it, which was worse and better than if he had." },
          { s: 'haechan', f: 'smirk', t: "Fourth stair on the second flight. Step over it. Good night, agasshi." },

          { place: 'Iwatodai Dorm · Second Floor', time: 'Late Night', bg: 'iwatodaidorm-hallway', soft: true },
          { n: "She stepped over it. It didn't matter. On the second floor Hanni was sitting up on her futon across Hyein's door in the dark with her knees drawn up, awake, the way Hanni was always awake, and she watched Solar come along the hall in her cardigan with her hair like that, and her eyebrows went up very slowly, all the way, and stayed there." },
          { s: 'hanni', f: 'neutral', t: "...The rota says laundry room." },
          { s: 'solar', f: 'flustered', t: "It was raining in the laundry room." },
          { s: 'hanni', f: 'happy', t: "Mm. Very wet in there. I've heard." },
          { n: "In the morning, when Solar went past the rota on the fridge, somebody had drawn a very small heart next to the H with the dryer, and somebody else, in Junpei's pen, had drawn an arrow from the heart to the margin and written *SEASON TWO. PAY UP*, and under that, in a third hand she knew from a hundred laundry nights, *not a question*." }
        ] }
      ] }
    ] },
    { after: '7/29', title: '4: the favor', place: 'Iwatodai Dorm · Laundry Room', time: 'Night', music: 'night', scene: [
      { bg: 'iwatodaidorm-laundryroom-night' },
      { n: "For the first time since April the dryer wasn't running. It was too hot. Summer had come down on Iwatodai at the end of July like a lid on a pot, wet and white and windless, so that the dorm held the day's heat all night in its walls and gave it back slowly, room by room, and the laundry room, which had been the only warm place in the building all spring, was now simply the worst one, close and still and smelling of hot metal and fabric softener and the drain." },
      { n: "Hanni's rota had changed. It had two names in every box now, since the night Mitsuru wrote the red word on the whiteboard, and tonight's box said *S + H* in the same small fast handwriting, and under it, in pencil, smaller still, *(this H)*, with an arrow pointing to the little drawing of a dryer, which had been on the rota so long now nobody remembered who'd drawn it first." },
      { n: "He was on the floor. Flat on his back on the concrete between the machines, because the concrete was the only cool thing in the room, in a sleeveless shirt and basketball shorts, with a can of cold barley tea balanced on his forehead and his eyes shut. The little silver recorder sat on the lid of the cold dryer with its red light on. He'd taped the red every night since. He hadn't played anybody a tape since Monday." },
      { choose: [
        { t: "(Lie down on the floor next to him.)", notes: 3, then: [
          { n: "She lay down beside him on the concrete. It was cool for exactly one second and then it was the temperature of her, and she lay there anyway with her shoulder against his, looking up at the bare bulb and the moth going round it, and he didn't open his eyes, and the corner of his mouth went." },
          { s: 'haechan', f: 'neutral', t: "...Good, right? Best spot in the building. I'm charging people." }
        ] },
        { t: "(Take the can off his forehead and hold it to your own neck.)", notes: 3, then: [
          { n: "She took it. He opened one eye and watched her hold it against the side of her throat, under her hair, with her own eyes shut, and didn't say anything for a while, and then said, to the ceiling, that it was his can, and that he'd been using it, and that he forgave her completely." }
        ] },
        { t: "You look like a crime scene.", notes: 2, then: [
          { s: 'haechan', f: 'smirk', t: "I *feel* like a crime scene. It's thirty-one degrees in here at eleven at night. The dryer's sweating. I didn't know dryers could sweat." }
        ] }
      ] },
      { n: "He sat up eventually. He did it in stages, like an old man, and put his back against the cold machine and his forearms on his knees, and looked at the recorder and not at her." },
      { s: 'haechan', f: 'neutral', t: "I haven't slept. Not properly. Not since the lounge. Not since I played them the— you know. The board. The hands on the board." },
      { s: 'haechan', f: 'neutral', t: "It's not the kneading that keeps me up. I thought it'd be the kneading. It's not." },
      { s: 'solar', f: 'neutral', t: "It's the line." },
      { s: 'haechan', f: 'serious', t: "...Yeah. It's the line." },
      { n: "He'd told her on the roof that night, under the coffins turning toward the river. He'd told her what it said and whose voice it said it in, which was his, and then he'd told her he was never going to say it, and he hadn't. She'd watched him not say it every day since. At breakfast, on the stairs, in the doorway of the kitchen with his hands in his pockets. It had a look. She hadn't known before that week that not saying something had a look, and now she'd have known it on him from across a stadium." },
      { s: 'haechan', f: 'neutral', t: "It used to come at night. Under the humming. Now it's just there. It's there when I brush my teeth. It's there when Junpei's talking. I was in the konbini yesterday looking at the rice balls and it said it. In the konbini. To the rice balls." },
      { s: 'haechan', f: 'neutral', t: "And it's gotten *polite*. That's the new thing. It used to sound like a favor. Now it sounds like a favor somebody's being really nice about. Like it knows I'm tired." },
      { choose: [
        { t: "Say it to me. The exact words. So I know them.", notes: 3, then: [
          { s: 'haechan', f: 'surprised', t: "...You want the exact words." },
          { s: 'solar', f: 'neutral', t: "If you ever say them, I want to know whose they are." },
          { n: "He looked at her for a long moment. Then he reached into the pocket of his shorts and took out a strip of staff paper folded very small, and didn't open it, and held it between two fingers, the way he'd held the receipt up in April, like evidence." },
          { s: 'haechan', f: 'neutral', t: "Up top. Not in here. In here it sounds too much like the tapes." }
        ] },
        { t: "You don't have to tell me any more than you did.", notes: 2, then: [
          { s: 'haechan', f: 'neutral', t: "I know. I want to, though. That's new too. Wanting to tell you things. You did that. On the roof. *Wanting isn't asking.* You broke something." },
          { n: "He reached into the pocket of his shorts and took out a strip of staff paper folded very small, and didn't open it, and held it between two fingers." },
          { s: 'haechan', f: 'neutral', t: "Up top. Not in here." }
        ] },
        { t: "(Put your hand flat on his chest. Wait.)", notes: 3, then: [
          { n: "She put her hand flat on his chest, over the damp cotton, over his heart, which was going faster than a man sitting on a concrete floor had any business having it go, and waited, and felt him breathe in under her palm and hold it and let it out." },
          { s: 'haechan', f: 'flustered', t: "...That's cheating. That's the cheating version of waiting." },
          { n: "He took a strip of staff paper out of the pocket of his shorts, folded very small, and put it in her hand, under his, and kept his hand there." },
          { s: 'haechan', f: 'neutral', t: "Up top. I'll tell you up top." }
        ] }
      ] },

      { place: 'Iwatodai Dorm · Roof', time: 'Night', bg: 'iwatodaidorm-roof-night', soft: true },
      { n: "Half the dorm was sleeping on the roof. Junpei had started it the week before, in the heat, dragging his futon up the stairs at midnight with the solemnity of a man founding a colony, and by now it was a settlement: futons laid end to end along the low wall, two electric fans on an extension cord that ran down the stairwell to an outlet Mitsuru had pretended not to see, a green mosquito coil smoking on a saucer, and somebody's battery radio turned down to nothing, playing a baseball game nobody was listening to." },
      { ifEvent: 'eqx-equinox', then: [
        { n: "It was late for it. The roof nights should have ended with the summer, and nobody had wanted to say out loud that they'd started sleeping up there because it was hot and had kept on doing it because it was the farthest place in the building from the front door." }
      ] },
      { n: "Junpei on his back with his cap over his face, snoring. Ken curled up on the end of his futon with Koromaru curled round him. Hanni and Yunjin side by side under one sheet, Hanni's eyes open, Yunjin's not. And at the far corner by the rail, alone, in a T-shirt soaked dark down the spine, Akihiko doing push-ups very slowly in the orange light from the town, counting under his breath, who looked up when they came out of the stairwell door, and looked at the two of them, and looked down again and went on counting." },
      { n: "Haechan had a futon up here too. Of course he did. It was in the other corner, the one by the planters, as far from the stairwell as the roof went, and beside it, already laid out, so neatly it was almost embarrassing, there was a second one." },
      { choose: [
        { t: "You made my bed.", notes: 3, then: [
          { s: 'haechan', f: 'blushing', t: "I didn't make your bed. I put a futon next to a futon. That's furniture. That's just where furniture goes." },
          { s: 'solar', f: 'neutral', t: "You folded the corners." },
          { s: 'haechan', f: 'flustered', t: "The other one of me folds the corners. He can't help it. He grew up with a woman who'd check." }
        ] },
        { t: "(Lie down on it without a word.)", notes: 3, then: [
          { n: "She lay down on it without a word, on her back, the way she'd lain on the concrete, and he stood looking down at her for a second with an expression she'd have paid money to have on tape, and then lay down on his own, a hand's width away, and both of them looked up at the sky, which was white with heat and had no stars in it at all." }
        ] },
        { t: "Akihiko's watching.", notes: 2, then: [
          { s: 'haechan', f: 'neutral', t: "Akihiko's doing push-ups. Akihiko's always doing push-ups. If he's watching, he's watching with his face about two centimeters off the ground." },
          { s: 'haechan', f: 'smirk', t: "...He's watching. Yeah. It's fine. We have an arrangement. He watches, I let him, he passes me the soy sauce." }
        ] }
      ] },
      { n: "They lay on their backs with the fans turning their heads slowly from one end of the roof to the other, so that every half minute a breath of moving air came across them and went away again, and the mosquito coil burned down its green spiral a millimeter at a time, and the radio said something about the bottom of the seventh in a voice like a man talking to himself in another room." },
      { n: "He unfolded the staff paper on his chest. She saw it upside down first. It was one line. He'd written it in pen, small, in English, and then under it again in Korean, and then the English again, and again, all the way down the strip, line after line, the same words, and every one of them crossed out, hard, so hard the pen had torn through in places, so that the strip was more holes than paper." },
      { s: 'haechan', f: 'neutral', t: "I write it down. When it gets loud. To get it out of my head and onto something. Then I cross it out. It's a system. It doesn't work. I've got a drawer of them." },
      { s: 'haechan', f: 'neutral', t: "Okay. Here's the exact words. You asked. I'm not saying them *to* you. I'm reading them *off* something. That's different. That's like reading the news." },
      { n: "He held the strip up against the white sky and read it, flat, in the scoreboard voice, the voice of a man reading a label off a bottle." },
      { s: 'haechan', f: 'serious', t: "*Ask her to stay with you, Hyuck. Just say it. She would. She'd stay if you asked. She'd do it for you.*" },
      { s: 'haechan', f: 'neutral', t: "...And then it says *please*. It always says please. It's got better manners than me." },
      { n: "He folded the strip back up very small and put it on his chest and put his hand over it." },
      { n: "She lay there with that in her ears. *Hyuck.* It used his name for himself. It used the name only people who'd known him on a Greek-letter porch in the snow ever said, the one she said; it said it the way she said it. She didn't know how she knew that, from a strip of paper read out flat on a roof. She knew it. Her skin knew it. The fan came round and blew across her bare arms and every hair on them stood up in the heat." },
      { choose: [
        { t: "It calls you Hyuck.", notes: 3, then: [
          { s: 'haechan', f: 'neutral', t: "...Yeah. You noticed that." },
          { s: 'haechan', f: 'serious', t: "I've been trying not to notice that for three months." }
        ] },
        { t: "(Turn on your side. Look at him, not the sky.)", notes: 3, then: [
          { n: "She turned onto her side on the futon to look at him. He kept looking at the sky. She could see the pulse going in his neck, under the jaw, fast, and the sweat in the hollow of his throat, and his hand flat on the folded strip on his chest as if it might get up and walk off." }
        ] }
      ] },

      { n: "At eleven fifty-eight Junpei stopped snoring, the way everybody in Iwatodai stopped doing everything at eleven fifty-eight, without waking. Hanni's eyes, open across the roof, went to the stairwell door and stayed there. Akihiko had stopped his push-ups and was sitting on his heels by the rail with his stopwatch in his taped hand and his thumb on the button." },
      { dark: true },
      { music: 'mystery' },
      { n: "The red came up over the roof like water over a lip. The fans stopped dead between one turn and the next, their heads frozen pointing at nothing. The coil's smoke stood still in the air above the saucer, a gray thread hung on nothing, and the radio cut out mid-word. Down in the town the streetlights went the color of the inside of an eyelid, and the hum came up out of the concrete under them, the note and the note under the note, and Solar felt it in her back teeth, and nobody on the roof turned into anything; nobody up here ever did." },
      { n: "And under the hum, in the red, she heard him not breathe." },
      { n: "He'd turned his head. He was looking at her now, at last, a hand's width away on the next futon, with the red on his face and his eyes very wide and very dark, and his mouth was open a little, the way a mouth opens just before a word. She watched it. She watched him not close it. She watched the line come up his throat like something swallowed wrong, polite, patient, *please*, in his voice and with her name for him in it, and stop behind his teeth." },
      { s: 'haechan', f: 'serious', t: "...Sol." },
      { n: "That was all. That was all that came out. His hand had closed on the staff paper so hard she heard it crumple. He was shaking. In the red, in the heat, a boy who'd climbed down a well in the dark with no light to find her, lying on a futon on a roof, shaking with how badly he wanted to say four words and how badly he didn't." },
      { s: 'haechan', f: 'sad', t: "Tell me what to do with it. Please. That's not— I'm not asking you to *stay*. I'm asking you what to do. With this. I can't carry it any more on my own. Tell me what to do and I'll do it." },
      // CG: eqx-the-favor — a dorm roof in the blood-red hour, fans frozen mid-turn and a thread of smoke standing still over a saucer; a boy on a futon turned toward a girl on the next one, a crumpled strip of staff paper in his fist, his mouth just open on a word he isn't saying.
      { choose: [
        { t: "Then ask me. Go on. I'd say yes.", notes: 3, tally: { cakes: 1, 'asks.haechan': 'yes' }, then: [
          { n: "She said it softly, across the hand's width, the way you'd say it to somebody standing on a ledge. It came out warm. It came out exactly right. She watched it reach him." },
          { n: "He made a sound she'd never heard him make, in any life. Then he said it." },
          { s: 'haechan', f: 'sad', t: "...Stay with me." },
          { s: 'solar', f: 'neutral', t: "Okay." },
          { n: "His whole body let go. She saw it go out of him from the shoulders down, the way a rope goes slack when the weight on the end of it is set down, all at once, after a long time. He shut his eyes. He reached across the gap between the futons and found her hand and held it, hard, the scar across his palm against her knuckles, and his face did something open and young and enormously relieved, and he laughed, once, with his eyes still shut, a cracked breath of a laugh." },
          { n: "And Solar lay on the futon in the red holding his hand and felt something go out of her as she'd said it. Small. Warm. From somewhere under her ribs, the way it had gone in the lounge, in front of the lens, at the edge of the tide. It went, and it didn't come back, and she couldn't have said where it went, only that the boy beside her was happier than she'd seen him in a year, and that she felt, for no reason she could name, very slightly hungry." },
          { s: 'haechan', f: 'neutral', t: "...That was mine. Right? That was me. I said it." },
          { s: 'haechan', f: 'neutral', t: "That was me." }
        ] },
        { t: "Want it as loud as you like. Don't ask, and don't let it ask for you. If I stay, it'll be because I chose to. Not for you. Not for anyone.", notes: 2, tally: { choose: 1, 'asks.haechan': 'choose' }, then: [
          { n: "He looked at her for a long time. She watched it land, and watched it hurt, because it did hurt; she saw the exact place it went in. *Not for you.* His mouth closed. The line stopped behind his teeth and stayed there." },
          { s: 'haechan', f: 'sad', t: "...So I don't get to give it to you. Even if I wanted to. I don't get to be the reason." },
          { s: 'solar', f: 'neutral', t: "You get to want it. That's yours. The rest is mine." },
          { s: 'haechan', f: 'neutral', t: "That's so much worse. That's so much worse than yes and so much worse than no. You know that, right?" },
          { s: 'solar', f: 'neutral', t: "I know." },
          { n: "He breathed out. It shook. Then he let go of the staff paper, finally, and it lay crumpled on his chest, and he reached across the gap and didn't take her hand; he put his own down on the floor between the futons, palm up, on the warm concrete, the way he had on the dryer in April. Not reaching. Just there." },
          { s: 'haechan', f: 'neutral', t: "...Okay. Mine. Okay. I'll be terrible at it." }
        ] },
        { t: "Don't. Don't ever ask me that. I'd say no.", notes: 2, tally: { 'asks.haechan': 'no' }, then: [
          { n: "He flinched. Not much. A small thing at the eyes, the way you flinch when a door you were leaning on is shut from the other side. Then his face came down over it like a shutter, smooth, and he nodded at the sky." },
          { s: 'haechan', f: 'neutral', t: "...Yeah. Good. Okay. That's— good. That's clean. That's a clean answer." },
          { s: 'haechan', f: 'neutral', t: "Then I won't. Not ever. That's easy now. You made it easy." },
          { n: "It wasn't easy. She could see it not be easy. He folded the strip of staff paper into a smaller square, and a smaller one, until it wouldn't fold any more, and put it under his pillow, and lay looking at the sky with his hands on his chest like a man laid out, and didn't reach across the gap at all." }
        ] }
      ] },
      { n: "On the far side of the roof, Akihiko had clicked his stopwatch. Nobody else moved. Junpei slept with his cap over his face. Ken slept with his fist in Koromaru's ruff. Hanni hadn't taken her eyes off the stairwell door. And in the corner, under the frozen coil smoke, the boy on the next futon lay very still with his head turned toward her." },
      { ifCount: { of: ['eqx-hc-roof-kiss', 'eqx-hc-stayed-night'], min: 1 }, then: [
        { n: "She came across the gap. It wasn't a decision any more than breathing in the heat was a decision; she was on her futon and then she was on his, half on him, her knee between his and her hair coming down over both their faces like a curtain, and he made the small sound against her mouth that she'd been thinking about since April at the worst possible moments, and the red lay over them like a sheet nobody had to pull up." },
          { n: "It was quiet. It had to be quiet. There were five people on the roof and a dog. His hand flat and hot on her back under her shirt, the other in her hair; hers on his jaw, on the wet nape of his neck; the futon creaking once, very loudly, so that they both froze and pressed their foreheads together and shook with not laughing for a full minute, his breath against her mouth, before he kissed her again, slower, as if slow were the only way to be quiet and he'd decided he could live with that." },
        { n: "Across the roof Akihiko turned round on his heels and sat with his back to them and his face to the town, very straight, and didn't move again until the hour was over." }
      ], else: [
        { choose: [
          { t: "(Kiss him. Here. Now.)", notes: 3, flag: 'eqx-hc-roof-kiss', then: [
            { n: "She came across the gap and kissed him, there on the roof in the red with the fans frozen and the smoke standing still, a hand on his jaw, and he went completely still under it, as if he'd been waiting so long he'd forgotten what to do when it came. Then he remembered. His hand came up into her hair and the staff paper fell off his chest onto the concrete, and he kissed her back like a man putting something heavy down." },
            { n: "When it stopped his forehead stayed against hers. He was breathing as if he'd run the stairs." },
            { s: 'haechan', f: 'blushing', t: "...That's not an answer either. I'm keeping a list of things that aren't answers. It's getting long." },
            { n: "Across the roof Akihiko turned round on his heels, very slowly, and sat with his back to them and his face to the town, and didn't move again until the hour was over." }
          ] },
          { t: "(Reach across. Put your hand in his.)", notes: 3, then: [
            { n: "She reached across the gap and put her hand in his, on the concrete between the futons. He held it. He held it like something he'd been handed to carry down a staircase in the dark, carefully, and then not carefully at all, and they lay there like that with their arms across the gap until the hour was over." }
          ] }
        ] }
      ] },

      { dark: false },
      { music: 'night' },
      { n: "The hour ended the way it always did now, all at once, and a little late. The fans came back mid-turn with a whirr and a breath of moving air. The coil's smoke remembered it was smoke and bent away. The radio said *—and that's the inning*, and Junpei under his cap said *what inning*, asleep, and turned over." },
      { s: 'haechan', f: 'neutral', t: "...It's quiet." },
      { s: 'solar', f: 'neutral', t: "The fans are back." },
      { s: 'haechan', f: 'serious', t: "No. In here. The line." },
      { n: "He'd touched two fingers to the side of his own head, at the temple, as if he were pointing at a radio. He was frowning, the way he frowned at a playback when something in the mix had changed and he couldn't hear what." },
      { ifChoice: { 'asks.haechan': 'yes' }, then: [
        { s: 'haechan', f: 'neutral', t: "It's gone quiet. It's never quiet. It's been going since April and now it's just— stopped." },
        { s: 'haechan', f: 'happy', t: "Maybe that's it. Maybe that's all it ever needed. Somebody to just say it and get it over with." },
        { n: "He was smiling. He meant it. He was lying there in the night air with her hand in his and a smile on his face like a man let out of a room, and Solar lay beside him and thought, from somewhere very far back in her head where she kept the things she didn't look at, that it hadn't sounded like a thing that had been got over with. It had stopped the way a guest stops talking when the plate is set in front of them." },
        { n: "She didn't say so. She held his hand. She didn't know what she'd have said." }
      ] },
      { ifChoice: { 'asks.haechan': 'choose' }, then: [
        { s: 'haechan', f: 'neutral', t: "It's gone quiet. It's not gone. It's quiet. Like it's— listening. Like somebody in the next room who heard their name and stopped to hear the rest." },
        { s: 'haechan', f: 'serious', t: "I don't think it knows what to do with that. What you said. I don't think anybody's ever said that to it." },
        { n: "He said it like a joke. He wasn't joking. He lay looking at the sky with his palm still open on the concrete between them, and after a while she put her fingertips in it, just the tips, and he closed his hand on them and didn't look at her and didn't let go." }
      ] },
      { ifChoice: { 'asks.haechan': 'no' }, then: [
        { s: 'haechan', f: 'neutral', t: "...No. It's not quiet. It's louder. It's saying it twice now. Once for me and once for— it doesn't matter. It's fine. It's fine. I've got a drawer." },
        { n: "He turned over on his side, away from her, toward the planters, and pulled the sheet up over his shoulder in the heat, and she lay looking at his back, at the wet dark patch down the spine of his shirt, and listened to him not sleep until the sky went gray." }
      ] },

      { place: 'Iwatodai Dorm · Roof', time: 'Early Morning', bg: 'iwatodaidorm-roof-evening', soft: true },
      { n: "She woke at six with the sun already up and hot on one side of her face and a fan blowing her hair into her mouth. Somebody had put a towel over her eyes in the night. Koromaru was lying across both their feet like a draught excluder, and Haechan was asleep with his mouth open and one arm across his face, and the staff paper had blown away somewhere in the night and nobody ever found it." },
      { n: "Junpei was sitting up on his futon with his cap on backwards and the betting book open on his knees. He looked at the two of them. He looked at the book. He licked his pencil, which nobody had done since the nineteen-fifties, and wrote something, slowly, with enormous care, and turned the book round to show Hanni, who was pouring barley tea from a thermos into the thermos's lid, and Hanni looked at the page and then at Junpei and said, without heat, *you're a child*, and then poured a second lid of tea and brought it across the roof and put it down beside Solar's head and patted the futon twice, and went away again." },
      { n: "Akihiko came past on his way to the stairs, towel round his neck. He didn't stop. He said, to the stairwell door, *Morning*, and then, just as the door was closing behind him, *the fans were out for an hour and four minutes*, as if that were the thing that needed saying." },
      { n: "On the saucer by the rail the mosquito coil had burned all the way down. Nobody had touched it. It lay on the saucer in a perfect spiral of gray ash, unbroken, every turn of it still in place from the outside in, the way ash never lies; as if, for an hour in the night, nothing had been allowed to fall." }
    ] },
    { after: '8/29', title: '5: take one', place: 'Iwatodai Dorm · Front Gate', time: 'Night', music: 'night', scene: [
      { bg: 'iwatodaidorm-front-night' },
      { n: "The text came at ten to ten. *front gate. bring nothing. you'll see.* Then, a minute later, as if he'd heard how it sounded, *it's not a thing. it's a person. a nice person. relax.*" },
      { n: "The night had cooled by a degree or two since the worst of August, enough that the cicadas had given up and something smaller had started in the hedge, a dry tick like a clock in another room. The dorm's front light was on. The gate lamp was on. And under the gate lamp, on the pavement side, not coming in, stood two men with cans in their hands." },
      { ifEvent: 'eqx-equinox', then: [
        { n: "Haechan, in his hoodie, with the hood down. And Taejoon, in a dark cardigan buttoned wrong by one button, with his back very straight and nothing in his hands but the can Haechan had given him, which he was holding, not drinking, both hands round it, the way Solar held hers. He'd been walking at night since the bridge. Everybody knew. Nobody said. He'd stop at the dorm gate on the way back, at the end of a loop of the town that he never explained, and stand there for a while, not coming in, until somebody came out." },
        { n: "Tonight somebody had. Haechan had been out here twenty minutes, she guessed, from the way the two of them were standing, which was the way two people stood who had said everything they were going to say in the first minute and had stayed for the other nineteen anyway." }
      ], else: [
        { n: "Haechan, in his hoodie, with the hood down. And Taejoon, in shirtsleeves, with his back very straight, holding a small square bundle wrapped in a cloth knotted at the top, the way a lunch is wrapped in a house where somebody still wraps lunches. He'd been walking the town at night since he came. Miseon said he didn't sleep; Miseon said it to Solar on the second morning in the boarding-house kitchen, in a voice so low it was almost not said, *your father hasn't slept*, and then put rice in front of her, and that was the end of it." },
        { n: "He'd stop at the dorm gate on the way back, at the end of whatever loop he walked, and stand there, not coming in, until somebody came out. Tonight somebody had. Haechan had a can in each hand and had given one to Taejoon, and Taejoon was holding it, not drinking it, both hands round it, the way Solar held hers." }
      ] },
      { s: 'taesang-strangers', f: 'neutral', t: "Sol-ah." },
      { n: "That was all. It was what he said at the bottom of the stairs at home when she came in late, and it meant everything that a longer sentence would have meant, and she'd never once in that life heard him use more than two words where two would do." },
      { choose: [
        { t: "Appa. You should be asleep.", notes: 3, then: [
          { n: "He looked at her over the can. It was the look that said *so should you*, without any of the words, and it was so exactly the look from the seventh stair that her throat went tight for no reason in the warm night." }
        ] },
        { t: "(Bow. The real one, the house one.)", notes: 3, then: [
          { n: "She bowed. Not the little dip she'd learned here for shopkeepers; the other one, from the other house, from the front hall with the shoes in a row, and he watched her do it, and something at the corner of his mouth moved a millimeter, which on Taejoon was a speech." }
        ] },
        { t: "(Take the can out of his hands. It's gone cold.)", notes: 2, then: [
          { n: "She took it. It had gone cold in his hands, which meant he'd held it long past the point of warmth, which meant he'd been standing here a long time. He let her take it. Haechan, beside him, watched the can change hands and looked at the ground and smiled at the ground, as if somebody had just proved a theory of his." }
        ] }
      ] },
      { ifEvent: 'eqx-equinox', then: [
        { n: "Taejoon didn't stay long. He looked at her. He looked at Haechan. He put one hand on the top of Haechan's head, heavy, the way it had come down on hers at the bottom of the stairs a hundred nights in another life, and left it there for the length of a breath, and took it back." },
        { s: 'taesang-strangers', f: 'neutral', t: "...Is she eating." },
        { n: "He said it to Haechan, not to her. In Korean. As if she weren't standing there, which was how fathers in that house had always asked the important questions, sideways, to someone else, about someone in the room." },
        { s: 'haechan', f: 'neutral', t: "I make sure, Abeonim." },
        { n: "Taejoon nodded once. He turned and walked off down the hill in the dark at the pace of a man who wasn't going anywhere in particular and had a long way still to go, and didn't look back, and at the corner, without turning round, lifted one hand." }
      ], else: [
        { n: "Taejoon held out the bundle. Not to her. To Haechan. Haechan looked at it as if he'd been handed a live thing." },
        { s: 'taesang-strangers', f: 'neutral', t: "Your mother says you're thin." },
        { n: "*Your mother.* In Korean. In the low voice of the other house, plainly, to the boy on the pavement, about the woman in the boarding-house kitchen who had wrapped this, and Solar watched it go into Haechan like a hand pressed flat on the middle of his back." },
        { s: 'haechan', f: 'neutral', t: "...Tell her thank you. Tell her I'm— tell her thank you, Abeonim." },
        { s: 'taesang-strangers', f: 'neutral', t: "Tell her yourself. Tomorrow. She makes too much." },
        { n: "He put his hand on the top of Haechan's head, heavy, for the length of a breath, and took it back, and turned and walked off down the hill in the dark, and at the corner, without turning round, lifted one hand." }
      ] },
      { n: "They watched him go. Haechan watched him all the way, until the corner took him, and then went on watching the corner." },
      { s: 'haechan', f: 'neutral', t: "...He doesn't know which one of me he's talking to. I don't either. He says *son* and both of me answer. Same mouth. Out of two different houses." },
      { s: 'haechan', f: 'neutral', t: "The stairs one waited eight months to hear that word in this world. He nearly cried in a konbini. Don't tell anybody. The rooftop one's got your other dad, who's got a *file* on me. It's an actual file. He said so. At a train bench. He's very polite about it." },
      { choose: [
        { t: "Which one's happier?", notes: 3, then: [
          { s: 'haechan', f: 'neutral', t: "...Today? The stairs one. He's had a rice ball handed to him by a man who never hands anybody anything. He's unbearable." },
          { s: 'haechan', f: 'happy', t: "The rooftop one's just glad your dad hasn't sued him." }
        ] },
        { t: "They both get to answer. That's allowed.", notes: 3, then: [
          { s: 'haechan', f: 'slight-surprise', t: "...Yeah? Nobody's asking me to pick?" },
          { s: 'solar', f: 'neutral', t: "Not me." },
          { s: 'haechan', f: 'neutral', t: "No. You never did. You're the only one who never did. Huh." }
        ] },
        { t: "(Put your arm through his. Walk him in.)", notes: 2, then: [
          { n: "She put her arm through his and turned him round toward the door, and he let himself be turned, and walked in beside her with his free hand in his pocket and his head down, the way he'd walked in out of the snow in another life when he didn't want anybody to look at his face." }
        ] }
      ] },
      { n: "On the step he stopped and turned and looked at her, and his face had changed; the corner, the father, all of it put away somewhere for later, and in its place the look she knew from every night in April when he'd had a tape he wanted her to hear." },
      { s: 'haechan', f: 'neutral', t: "It's finished. The loop. The track. It's done. It's done except for one thing." },
      { s: 'haechan', f: 'serious', t: "I'm not asking. There's a microphone. That's all I'm saying. There's a microphone in the laundry room and it's set up and it's pointing at a place where a person might stand. Make of that what you like." },

      { place: 'Iwatodai Dorm · Laundry Room', time: 'Night', bg: 'iwatodaidorm-laundryroom-night', soft: true },
      // BG: eqx-laundry-booth — the dorm laundry room turned into a makeshift recording booth at night: blankets and futon quilts hung over the machines and pinned to the walls, a single microphone on a stand in the middle, a small silver recorder on the cold dryer, one bare bulb.
      { n: "He'd built a booth. Out of the dorm's whole stock of spare blankets, by the look of it, and two futon quilts that Mitsuru would one day want to know about, hung over the machines and pinned along the walls with laundry pegs, so that the room had gone soft and close and quiet in a way she'd never heard it be. Every sound died a foot from where it was made. Her own breathing sounded like someone else's, very near." },
      { n: "In the middle, on a stand he must have taken from the command room's old karaoke box, a microphone. A cable ran from it to the little silver recorder on the lid of the cold dryer, where it always sat, red light off, waiting. On the dryer beside it, the sampler from 1990, with its lights going green and amber in the dark like a city seen from the air." },
      { s: 'haechan', f: 'neutral', t: "Here's the problem. You can't record anything in this building. Junpei. The pipes. The fridge. A boy two floors up doing push-ups at midnight." },
      { s: 'haechan', f: 'neutral', t: "Except for one hour. One hour a night, nothing in this town makes a sound. Not the pipes. Not the fridge. Not the traffic. Everything stops. Except Minji's things, and us." },
      { s: 'haechan', f: 'serious', t: "It's the quietest studio on earth. It just comes with a— with the rest of it." },
      { n: "He meant the red. He was going to record her in the red. She understood it a second before he saw her understand it, and she watched him see it, and brace, very slightly, for whatever her face was going to do." },
      { choose: [
        { t: "That's insane. Show me where to stand.", notes: 3, then: [
          { s: 'haechan', f: 'happy', t: "Ha— okay. Okay. There. On the tape. I put tape on the floor. I'm a professional." }
        ] },
        { t: "Is it safe?", notes: 2, then: [
          { s: 'haechan', f: 'neutral', t: "Nothing's safe. The laundry room's had a chain on the back door since April and the chain's on, and I'm here, and the yard light's on, and Hanni knows where we are. That's as safe as this town does." },
          { s: 'haechan', f: 'serious', t: "If anything knocks, we stop. That's the rule. That's the only rule." }
        ] },
        { t: "(Step onto the X he's taped on the floor. Say nothing.)", notes: 3, then: [
          { n: "There was a little X of electrical tape on the concrete in front of the microphone, and she stepped onto it without being told, and he stopped halfway through untangling a cable and stood there holding it, looking at her standing on his X, as if he'd drawn it on the floor for years and nobody had ever once stood on it." }
        ] }
      ] },
      { n: "There were no words. He told her that while he set the levels, fast, not looking at her, his fingers on the sampler's little dials." },
      { s: 'haechan', f: 'neutral', t: "I tried. I tried all summer. I wrote words for it. Every line I wrote was a— every line had a *stay* in it. Or a *please*. Or a *don't go*. I'd read them back and they were all asks. Every single one. I've got a drawer of those too." },
      { s: 'haechan', f: 'serious', t: "So it hasn't got any. Whatever you do in it is yours. I'm not telling you what to sing. I'm not even telling you to sing. I'm telling you where the gap is." },
      { ifFlag: 'eqx-hc-gap-sang', then: [
        { s: 'haechan', f: 'blushing', t: "You know where the gap is. You put four notes in it on a roof in April. The whole second half's built on them. So you're— you'd be singing over yourself. Which is a very normal thing that people do. In studios." }
      ], else: [
        { s: 'haechan', f: 'neutral', t: "Bar four. Middle. It's the same gap. It's bigger now. The whole song bends toward it. Like a room with a chair in it nobody sits on." }
      ] },
      { n: "At eleven fifty-eight he turned off the bulb. They stood in the dark in the hush of the blankets, her on the X and him by the dryer with his finger over the recorder's button, and she could hear him breathing a meter away, and her own heart, and nothing else at all." },
      { dark: true },
      { music: 'mystery' },
      { n: "The red came up through the gaps in the blankets the way it came up through water. It found the edges of the room and lay along them. The sampler's lights died. The hum came up through the floor, the note and the note under the note, and every pipe in the building stopped mid-gurgle, and the fridge in the kitchen down the hall stopped, and the whole town outside stopped, and in the stopped red silence a small click, and a small red light came on on the lid of the cold dryer." },
      { n: "He'd put the loop on Minji's recorder, on a second little tape, and it played into her headphones from the one machine in the world that ran in the red. She heard the hum of the hour come in warm and slow like a cello. The dryer's thump as the kick. The rain's applause at the turn. And then the fourth bar came round, and the gap opened in it, and she sang." },
      { choose: [
        { t: "(Sing it without words. Just the shape.)", notes: 3, then: [
          { n: "No words. Just the shape of it, open, the vowel you sing in when there isn't anything to say, going up into the gap and filling it and coming down the other side, and then the second half came, the part he'd built out of the four notes or round the empty chair, and she went into it as if she'd known it all her life, which, in some way she couldn't have explained, she had." }
        ] },
        { t: "(Sing it in English. Whatever words come.)", notes: 3, then: [
          { n: "Words came. She didn't choose them. They were small, and plain, and none of them was *stay*; she noticed that from very far away, as if somebody else were singing them, that every word that came up into the gap was a word for being somewhere, *here*, *now*, *this*, and none of them was a word for keeping anyone there, and then the second half came and she stopped noticing anything at all." }
        ] },
        { t: "(Sing it in the other house's Korean. Low.)", notes: 3, then: [
          { n: "It came out in the low Korean of the other house, the one for hallways and the bottom of stairs, no words she could have written down after, just the sound of that language with the lights off; and across the room in the red she heard Haechan stop breathing, and keep not breathing, through the whole of the second half." }
        ] }
      ] },
      { n: "She sang it to the end. The loop came round to where it closed, and closed, and she stopped, and the last of her voice died a foot from her mouth in the blankets, and there was nothing. The red hush. The hum. The small red light." },
      { n: "He didn't say anything. He was standing by the dryer with his hand still over the button and his face, in the red, doing nothing at all; and then he came across the room in three steps and put both his hands on either side of her head, over the headphones, the way he had on the roof in April, palms flat over her ears, and held her face like that, and put his forehead against hers, and stood there." },
      { s: 'haechan', f: 'neutral', t: "...Yeah." },
      { s: 'haechan', f: 'neutral', t: "Yeah. That's it. That's the song. That's what it was for. I didn't know. I didn't know till you— yeah." },
      { n: "He said it in English and then again in Korean, the same three words, as if he needed both of himself to have said it." },
      { n: "Then he let go of her and went back to the dryer, fast, because he was Haechan and couldn't stand to be seen for more than five seconds at a time, and wound the tape back with his thumb, the little wheel ticking, and held one side of the headphones out to her, and put the other to his own ear." },
      { s: 'haechan', f: 'smirk', t: "Playback. You have to hear it. Everybody hates their own voice. You're going to hate it. It's going to be great." },
      { n: "They listened in the red with the cord between them. The cello hum. The dryer. The applause. Her voice coming into the gap, and it was strange, it was always strange, her own voice from outside her, younger than she'd thought and lower; and the second half; and her voice going to the end of it and stopping, and the loop closing; and then the room tone of the booth on the tape, the red hush, his breathing, a meter off, for three seconds, four, five." },
      { n: "And then her voice again." },
      { n: "Close. Much closer than she'd stood. Right up against the microphone, so close she could hear the wet of the lips, the way you'd speak into somebody's ear on a pillow. Warm. Unhurried. Exactly her. The voice she used in doorways. The voice that came out of her in the lounge when forty faces were turned toward her and she knew exactly what they needed." },
      { n: "*Stay.*" },
      { n: "Just the one word. Just once. Then the room tone again, and his breathing, and the click of him stopping the tape." },
      // CG: eqx-take-one — a laundry room hung with blankets in the blood-red hour, a microphone on a stand in the middle; a girl in headphones and a boy at the dryer sharing one headphone cord, both of them frozen, staring at a small silver recorder whose red light is still on.
      { n: "She hadn't said it. She knew she hadn't said it. She'd been standing on the X a meter back from the stand with her mouth shut, listening to him breathe; she'd have known. Her body knew before she did. Her hands had gone cold in the red heat, all at once, to the wrist, and the back of her neck was cold, and the headphones felt very heavy." },
      { n: "Haechan's face had gone white under the red. He wasn't looking at her. He was looking at the microphone, at the place a foot in front of it, at the air, where nobody was standing." },
      { ifChoice: { 'asks.haechan': 'yes' }, then: [
        { s: 'haechan', f: 'serious', t: "...That's what you sounded like. On the roof. When you said okay." },
        { s: 'haechan', f: 'serious', t: "That's exactly what you sounded like." },
        { n: "He said it very quietly. He didn't say anything else. He didn't need to. She had heard it too." }
      ], else: [
        { s: 'haechan', f: 'serious', t: "...You didn't say that." },
        { s: 'solar', f: 'neutral', t: "No." },
        { s: 'haechan', f: 'serious', t: "I know you didn't. I was looking at you. I was looking right at you the whole time." }
      ] },
      { choose: [
        { t: "Erase it. Now. Tape over it.", notes: 3, flag: 'eqx-hc-take-erased', then: [
          { n: "He didn't argue. He wound it back to the end of the song, to the exact spot, by ear, the little wheel ticking, and pressed record with the microphone unplugged and let it run in the red over the place where the word had been, five seconds, ten, thirty, a whole minute of nothing laid down over it like earth over something buried, and then stopped, and played it back, and there was nothing. The song, and the end of the song, and nothing." },
          { s: 'haechan', f: 'neutral', t: "...Gone. The song's still there. Just the song. Your voice. The real one." },
          { n: "He said *the real one* as if it were a word he'd only just learned." }
        ] },
        { t: "Keep it. Somebody's going to need to hear it.", notes: 2, flag: 'eqx-hc-take-kept', then: [
          { n: "He looked at her as if she'd asked him to keep a knife under his pillow. Then he nodded, slowly. He took the little tape out of the recorder and wrote on the label with the pen from his pocket, small, in the red, the date and then nothing, and put it in the pocket of his hoodie, and zipped the pocket, and kept his hand flat over it." },
          { s: 'haechan', f: 'neutral', t: "Minji says that. *Somebody's going to need to see it.* She's always right. I hate that she's always right." }
        ] },
        { t: "(Take the headphones off. Take his hand. Don't say anything.)", notes: 3, then: [
          { n: "She took the headphones off and set them down on the dryer, carefully, the way you'd set down something that might go off, and took his hand, and he held on as if she'd pulled him out of water. The tape stayed in the machine. Neither of them touched it again that night. In the morning it wasn't in the machine and he didn't say where he'd put it, and she didn't ask." }
        ] }
      ] },
      { n: "They didn't go to the door. They didn't go anywhere near the back door with the chain on it, the one to the yard. They sat down on the floor of the booth in the corner furthest from it, under the blankets, with their backs against the warm dead machine, and he pulled one of the quilts down off its pegs and put it over both of them, in August, in the heat, because it was something to do with his hands." },
      { s: 'haechan', f: 'neutral', t: "...The song's good, though. Right? Tell me the song's good. I need one thing tonight to be just what it is." },
      { s: 'solar', f: 'neutral', t: "The song's good." },
      { s: 'haechan', f: 'sad', t: "It's the best thing I ever made. In either life. And it's got a— it's got something living in the end of it." },
      { ifCount: { of: ['eqx-hc-roof-kiss', 'eqx-hc-stayed-night'], min: 1 }, then: [
        { n: "She kissed him to stop him talking, and then because she wanted to, and then because neither of them could have stood the quiet. It started careful and stayed careful for a while, under the quilt, in the dead red hush where every sound died a foot away; and then it wasn't careful, his hands in her hair and then lower, the quilt sliding off, her back against the cold steel of the dryer and his mouth at her throat, and he said her name against her collarbone, once in each language, the way he had at the window in June, and she pulled him closer by the front of his hoodie and the zip of the pocket with the tape in it, or without, pressed cold for a second against her skin." },
        { n: "The blankets on the walls drank every sound they made. That was the point of them. Neither of them was counting how long the hour went on." }
      ], else: [
        { n: "She put her head on his shoulder under the quilt. He put his cheek on her hair. They sat like that in the booth he'd built, with the song inside the machine on the dryer above their heads, and his hand found hers under the quilt without either of them looking, and they listened to the red not make a sound until it was over." }
      ] },
      { dark: false },
      { music: 'night' },
      { n: "The hour ended late. It always ended late now. The pipes started up again all over the building with a long shudder, and the fridge down the hall, and somewhere far off a car, and the sampler's lights came back on, green and amber, one by one, like a city remembering itself." },

      { place: 'Iwatodai Dorm · Front Gate', time: 'Early Morning', bg: 'iwotodaidorm-outside', soft: true },
      { n: "She woke on the floor of the laundry room at ten to six with a futon quilt over her and a blanket peg in her hair and his hoodie on, which she had no memory of putting on, and him asleep against the dryer with his head tipped back and his mouth open, and the little red light on the recorder off." },
      { n: "She went out the front to breathe. The morning was white and still and already warm, the gate lamp still on in the daylight, and the street empty except for one man walking slowly up the hill with his hands behind his back." },
      { n: "Taejoon. On the morning end of whatever loop he walked. He stopped at the gate. He looked at her standing on the dorm step at six in the morning in a boy's hoodie with the sleeves over her hands and a laundry peg in her hair, and his face did nothing, nothing at all, for a long time, very loudly." },
      { ifCount: { of: ['eqx-hc-roof-kiss', 'eqx-hc-stayed-night'], min: 1 }, then: [
        { n: "His eyes went past her, up, to the dorm's windows, along the second floor to the boys' side, and back down to her. He knew whose hoodie it was. He'd seen it on the boy at the konbini, at the bench, at the gate last night." },
        { n: "He reached into his cardigan pocket and took out a rice ball in its plastic, one he'd opened himself, perfectly, all three tabs, the seaweed crisp, and held it out to her over the gate." },
        { s: 'taesang-strangers', f: 'neutral', t: "...Eat." },
        { n: "She took it. He nodded once. Then he looked up at the window of the laundry room, low by the side of the building, where the blankets were still pinned up behind the glass, and lifted one hand, the way he'd lifted it at the corner the night before, at nobody she could see; and behind the glass, after a second, a hand lifted back." },
        { s: 'taesang-strangers', f: 'neutral', t: "Tell him." },
        { s: 'solar', f: 'neutral', t: "Tell him what, Appa?" },
        { n: "But he'd already turned, and was walking on up the hill toward nowhere, with his hands behind his back, and she understood that *tell him* was the whole sentence, and that it would be a long time before she worked out everything it meant." }
      ], else: [
        { n: "He reached into his cardigan pocket and took out two rice balls in their plastic, both opened perfectly, all three tabs, and held them out to her over the gate. Two. One for her and one, plainly, for whoever's hoodie that was." },
        { s: 'taesang-strangers', f: 'neutral', t: "...Eat. Both of you." },
        { n: "She took them. He nodded once, and walked on up the hill with his hands behind his back, and she stood on the step in the white morning holding two rice balls and understood that in that house, in that life, there had never been any difference, to him, between her and the boy asleep against the dryer: they were both his, and both too thin, and both up too late." }
      ] },
      { n: "When she went back in, the yard door in the laundry room was chained, as it always was. Haechan was awake, sitting up against the dryer with the quilt round his shoulders, and he was looking at it. At the chain. At the little black window." },
      { s: 'haechan', f: 'neutral', t: "...Nothing knocked. All night. I'd have heard. I didn't sleep till four." },
      { s: 'haechan', f: 'serious', t: "It didn't need to knock, did it. It was already in." }
    ] },
    { after: '10/7', title: '6: whose voice', place: 'Iwatodai Dorm · Laundry Room', time: 'Night', music: 'tender', scene: [
      { bg: 'iwatodaidorm-laundryroom-night' },
      { n: "October had come in cold and all at once, the way it did by the sea, and the dorm's heating had gone back to giving up at eleven on principle, and the dryer was running again with nothing in it. She heard it from the stairs. That soft thump on the turn, the only warm sound in the building after eleven. She'd missed it. She hadn't known she'd missed it until she was standing in the doorway with her hand on the frame, listening to it, and her eyes stung." },
      { n: "He wasn't on it. He was on the floor in front of it, sitting with his back against the warm drum and his knees up and his head tipped back against the door of the machine, asleep. Hoodie, sleeves over his hands. Shoes still on. The recorder on the cold dryer above him with its red light off, which in six months she had never once seen." },
      { ifEvent: 'eqx-empty-chair', then: [
        { n: "He'd been sitting up with Taejoon every night since the bridge. On the stairs at the boarding house, and then, since the fathers came out of that house with their bags, on the stairs here, outside the room across from his, where a man who said nothing very loudly sat on the top step from eleven until the hour came and would not go to bed while there was a door in the building he couldn't see." }
      ], else: [
        { n: "He'd been sitting up with Taejoon every night since the bridge. On the stairs at the boarding house, the seventh one, from eleven until the hour came, with his shoulder against an old man's knee, saying nothing in the language they said nothing in; and then walking back up the hill alone in the red, which Mitsuru had forbidden, which nobody had been able to make him stop." }
      ] },
      { n: "He looked thinner. She'd been looking at him every day and hadn't seen it until now, from the doorway, the way you only see a thing properly when it's asleep and can't arrange its face for you. The bones of his wrists. The hollow under the cheekbone. The line from the rope across his palm, white now, not pink, a scar now and not a wound." },
      { choose: [
        { t: "(Let him sleep. Sit down next to him.)", notes: 3, then: [
          { n: "She sat down beside him on the concrete, against the warm drum, carefully, so as not to wake him, and he woke anyway, the way he always woke when she came into a room, as if some part of him were permanently tuned to the frequency of her walking. He didn't open his eyes. He tipped over sideways until his head was on her shoulder, and stayed there, and breathed out." },
          { s: 'haechan', f: 'neutral', t: "...Five minutes. Then I'll be a person." }
        ] },
        { t: "(Take his shoes off for him.)", notes: 3, then: [
          { n: "She knelt and untied his shoes, one, then the other, and eased them off, and he woke on the second one and watched her do it with his head still back against the machine and an expression on his face she couldn't read in the bad light, and didn't say anything until she'd set them side by side by the door, toes out, the way you leave shoes in a house where somebody checks." },
          { s: 'haechan', f: 'sad', t: "...Not toward the door. Turn them round. Please. I can't— not facing home. Not this month." },
          { n: "She turned them round." }
        ] },
        { t: "Haechan. Bed.", notes: 2, then: [
          { s: 'haechan', f: 'neutral', t: "This is a bed. This is the best bed in the building. It's warm and it hums and nobody's on the stairs." },
          { n: "He didn't open his eyes. He reached up blindly and found her wrist and pulled, not hard, until she sat down beside him." }
        ] }
      ] },
      { n: "He stopped taping the night of the bridge. She'd known; she hadn't asked. He told her now without being asked, the way he told her everything this year, flat, handed over, with his head on the warm metal." },
      { s: 'haechan', f: 'neutral', t: "I haven't taped since the twenty-third. I put the tape in, the first night after. Pressed the button. And I thought, what if I hear it. On the bridge. What if it's on there, under the hum, the— the sound it made. When it took them. And I'd have it. On a tape. Forever. Something I could play." },
      { s: 'haechan', f: 'serious', t: "I took the tape out and put it in the bin outside. Then I went and got it out of the bin. Then I put it in a drawer. It's in the drawer." },
      { n: "Neither of them said what was on the bridge. Neither of them had to. They'd stood on the seventh stair of a borrowed house a week ago in the dark while a man sat above them with a sweater over his shoulders, and she'd seen something through a transom, and he'd read her face, and asked her one question, and she'd answered it." },
      { ifEvent: 'eqx-1122', then: [
        { s: 'haechan', f: 'neutral', t: "...I know. I know they're back. I know she's upstairs and she's breathing and Taejoon sleeps now. I know." },
        { s: 'haechan', f: 'sad', t: "I keep seeing the stair, though. The transom. Your face. I can't get the order right. It's like a song where somebody moved the bridge to the start." }
      ], else: [
        { ifEvent: 'eqx-1023', then: [
          { s: 'haechan', f: 'neutral', t: "...They know now. All three of them. They saw it on the steps. We didn't get to find her first. We didn't get to do it in the right order." },
          { s: 'haechan', f: 'sad', t: "That's the only thing I wanted. The right order. It didn't even let us have that." }
        ], else: [
          { s: 'haechan', f: 'neutral', t: "...We still haven't told him." },
          { s: 'haechan', f: 'sad', t: "I sit on that stair every night next to a man who doesn't know, and I know. And I hold his knee. And I don't say. I keep telling myself it's the right order. Find her first. Then tell. I don't know if it's the right order or just the order I can stand." }
        ] }
      ] },
      { n: "He talked about Miseon then. Not much. Not anything that wasn't his to say. The way she put a bowl in front of you before she said your name, so the name came with rice in it. The way she'd turned the ring on her right hand once, every time she was about to say something and decided not to. The way she'd said *you're thin* to a boy who wasn't hers, in a kitchen at the bottom of a hill in another life, and then, in August, through a man at a gate, in this one." },
      { s: 'haechan', f: 'sad', t: "She's the only one who ever— nobody ever just put food in front of me. Without a speech attached. Without it being about something. Mine—" },
      { n: "He stopped. His jaw did the small sideways thing. She waited." },
      { s: 'haechan', f: 'neutral', t: "...Doesn't matter. Not tonight. Not mine. Yours." },
      { choose: [
        { t: "She's yours too. She called you son through a gate.", notes: 3, then: [
          { n: "He didn't say anything. He turned his face into her shoulder, all the way, so that she couldn't see it, and she felt it go through him, once, from the shoulders down, the way it had gone through him when Taejoon put his hand on his head; and then he was still, and his breath was hot through her cardigan, and she put her hand on the back of his neck and left it there." }
        ] },
        { t: "(Say nothing. Hold his hand. The one with the scar.)", notes: 3, then: [
          { n: "She took his hand, the one with the white line across it, and held it in her lap in both of hers, and didn't say anything at all, which with him had always been the loudest thing she could do, and he let her, and looked down at his hand in her lap for a long time like a man looking at a photograph of a house where he'd been fed." }
        ] },
        { t: "We'll find her.", notes: 2, then: [
          { s: 'haechan', f: 'neutral', t: "...Yeah. We'll find her." },
          { s: 'haechan', f: 'serious', t: "I'm not going to ask you how you know that. I'm going to believe it on credit." }
        ] }
      ] },

      { n: "The dryer turned. The bulb buzzed. Outside the little black window in the back door the yard light was on, as it was every night now, Mitsuru's order, so that there would be no dark directly outside any door in the building. He sat up. He took his head off her shoulder, and his hand out of hers, and rubbed his face with both palms, hard, and sat with his elbows on his knees, the way he sat when he was coming to the edge of a thing." },
      { s: 'haechan', f: 'neutral', t: "I've got to tell you something. I should have told you in April. On the roof. You asked me who." },
      { s: 'solar', f: 'neutral', t: "Your door." },
      { s: 'haechan', f: 'serious', t: "My door. The night of the knock. Everybody's door said something. Ken's said his mom. Hyein's said hers. Yours said all three of yours at once. Mine wasn't a mom. I said it was someone I know." },
      { n: "He looked at the back door. At the chain. At the black square of window with the yard light behind it." },
      { s: 'haechan', f: 'serious', t: "It was you." },
      { n: "She'd known. Not known; her body had known, the way it knew things before she did. Her hands were cold. They'd gone cold the second he said *April*, and the cold was climbing her wrists, and she sat very still on the concrete with her back against the warm drum and let him say it." },
      { s: 'haechan', f: 'serious', t: "Your voice. On the other side of my door. In the red. It said, *Hyuck. It's me. I'm right here.* And then it said, *Ask me to stay. I would. You know I would.* And then it said please. And then it laughed. Your laugh. The real one, the one that goes up at the end, the one you only do when something's actually funny." },
      { s: 'haechan', f: 'neutral', t: "I sat on my bed with my hands over my ears like a kid. All hour. I could hear it through my hands." },
      { s: 'haechan', f: 'sad', t: "I didn't tell you because I didn't want you to have it. Your own voice, doing that. I didn't want you to know it could. I thought if I didn't say it out loud it couldn't— I don't know what I thought. I thought I could carry it. I'm good at carrying things. It's the only thing I've ever been good at except the music." },
      { n: "He laughed. It wasn't a laugh." },
      { s: 'haechan', f: 'serious', t: "And then the bridge. And I watched three women walk home with somebody in them. And I thought, oh. Oh. It doesn't just do the voice. It *wears* people. It wore you at my door. In April. Before any of us knew it could." },
      { ifFlag: 'eqx-hc-take-kept', then: [
        { s: 'haechan', f: 'neutral', t: "The tape's in my drawer. The one from August. With the word on the end. I've played it eleven times. I keep thinking if I play it enough I'll hear the difference. Between that and you." },
        { s: 'haechan', f: 'sad', t: "There isn't one. I've got very good ears. There isn't one." }
      ], else: [
        { ifFlag: 'eqx-hc-take-erased', then: [
          { s: 'haechan', f: 'neutral', t: "We erased it. In August. The word at the end. I taped a minute of nothing over it. I keep thinking about the minute. Like the word's still under there. Like it's waiting for the tape to wear thin." }
        ], else: [
          { s: 'haechan', f: 'neutral', t: "And the tape. In August. In here. You heard it. I didn't have to tell you then whose voice it was. You knew. You went cold. I watched you go cold." }
        ] }
      ] },
      { ifChoice: { 'asks.haechan': 'yes' }, then: [
        { n: "He was quiet for a long time. When he spoke again it was to the floor." },
        { s: 'haechan', f: 'sad', t: "...I asked you. On the roof. In the summer. You said ask me, and I asked you, and you said okay." },
        { s: 'haechan', f: 'serious', t: "And it was what the door said. Word for word. Almost. *Ask me to stay. I would.* And I did. And you did." },
        { s: 'haechan', f: 'sad', t: "I don't know anymore if I asked you, Sol. Or if I just finally did what the door told me to in April. I don't know if it was me. I said it was me. I lay there and said *that was me* like an idiot. I don't know." },
        { n: "She opened her mouth and didn't have anything to put in it. She remembered the roof. She remembered the warm thing going out from under her ribs as she said *okay*, and not coming back, and the hunger after, small and constant, which hadn't gone away; which she'd stopped noticing the way you stop noticing a sound that never stops. She didn't tell him that. She didn't know how." }
      ] },
      { ifChoice: { 'asks.haechan': 'choose' }, then: [
        { s: 'haechan', f: 'neutral', t: "...You know what's funny. On the roof. You said don't let it ask for you. You didn't know. You didn't know it had already tried. In your voice. You just said it like it was obvious." },
        { s: 'haechan', f: 'neutral', t: "It's been quieter since. I told you that. Like something listening. I think it was listening to you. I think it's been trying to work out how you said that, so it can say it back." }
      ] },
      { ifChoice: { 'asks.haechan': 'no' }, then: [
        { s: 'haechan', f: 'neutral', t: "...You said you'd say no. On the roof. And I was so— I thought, that's it, then, that's clean, I can stop." },
        { s: 'haechan', f: 'sad', t: "Only the door didn't say you'd say no. The door said you'd say yes. In your voice. And I've been lying awake since the summer wondering which one of you was lying to me." }
      ] },

      { n: "Then he told her the other thing. He told it the way he told bad news, fast and flat, as if speed would make it lighter." },
      { s: 'haechan', f: 'neutral', t: "Chenle came and found me. Tuesday. On the stairs. Sat down on the step below me and didn't say anything for ten minutes, which is the longest that kid's ever been quiet, so I knew." },
      { s: 'haechan', f: 'neutral', t: "He's been navigating with Fuuka down there. The Well. And there's a floor. Further down than we've been. Where the snow from the First Hill turns into the mud from the Second. Right on the line between them." },
      { s: 'haechan', f: 'serious', t: "He said it's got room tone. Every floor down there sounds like something. That one sounds like *this*. This room. The dryer on the turn. A thump every two seconds. And a hum with a note under it. And a gap, in the fourth bar." },
      { s: 'haechan', f: 'serious', t: "He said Fuuka won't open the door to it without me. He said she said, *it's his*. He said she looked like she was going to be sick." },
      { flag: 'eqx-floor-haechan' },
      { n: "She knew then. All of it, the whole shape, the way you know a song when you hear the first two bars after years. *Ask her to stay with you.* That was what the thing in the dark wanted from him. Not his life. Not his blood. It wanted him to ask. It had been asking him to ask since April, in his own voice and in hers, politely, *please*, and down at the bottom of everything, on the line where his two lives met, it had built him a room that sounded exactly like the one he was safe in, and was waiting there for him to come and sit down and say it." },
      { n: "He saw her know it. He watched it go across her face. He nodded, very slightly, the way you nod to someone across a ring." },
      { s: 'haechan', f: 'neutral', t: "Yeah. That's mine. That's my floor. I'm going to have to go down there one of these nights and sit in a room that sounds like this and not say anything for an hour." },
      { s: 'haechan', f: 'smirk', t: "Good thing I've had practice." },
      // CG: eqx-whose-voice — a dorm laundry room at night in October, a boy and a girl sitting on the concrete floor against a running dryer, his face turned toward the chained back door with its small black window, her hand flat on his chest as if holding something in.
      { s: 'haechan', f: 'serious', t: "So I need a— I need a rule. Like your brother has. Three knocks and a gate. I need something I can hold on to down there. Something that's you and can't be it." },
      { s: 'haechan', f: 'neutral', t: "Because it's going to use your voice. I know it is. And I need to know, when I'm sitting in that room with my hands over my ears, how I'll know." },
      { choose: [
        { t: "Then I'll never say it to you. That word. Not once, not ever. If you hear it in my voice, it isn't me.", notes: 3, flag: 'eqx-hc-never-say', then: [
          { n: "He looked at her for a long moment. Then something in his face came loose, all at once, the way a knot comes loose when you finally find the right end of it." },
          { s: 'haechan', f: 'neutral', t: "...Never." },
          { s: 'solar', f: 'neutral', t: "Never. Not to you. Not even if I mean it. Especially if I mean it." },
          { s: 'haechan', f: 'sad', t: "That's— okay. Okay. That's the best thing anyone's ever not going to say to me." },
          { n: "He laughed, cracked, and put his face in his hands, and said through his fingers, *agasshi*, like a complaint, and she could hear that he was crying a little and that he didn't want her to say so, so she didn't." }
        ] },
        { t: "Learn my voice. Every way I say your name. Tape it. Then you'll know which one's me.", notes: 3, flag: 'eqx-hc-learn-voice', then: [
          { n: "He stared at her. Then he reached up behind him without looking and took the recorder off the dryer and turned it over in his hands, the first time he'd touched it since the bridge, and pressed the button, and the little red light came on, and he held it out between them on his open palm." },
          { n: "So she said his name. Every way she'd ever said it. *Haechan*, the way she said it across a dining room. *Haechan*, the way she said it when he was being an idiot. *Hyuck*, on a porch in the snow. *Hyuck*, half asleep. *Donghyuck*, the way her father said it, with a file in his voice, which made him laugh out loud. And then, in the low Korean of the other house, the name that house used for him, the way you'd say it at the bottom of a staircase to someone coming in late." },
          { n: "He listened to every one with his eyes shut. When she stopped he pressed stop, and held the recorder in both hands against his chest like something warm." },
          { s: 'haechan', f: 'neutral', t: "...It never said that one. The last one. It never once said that one. It doesn't know it." },
          { s: 'haechan', f: 'neutral', t: "That's my rule, then. If it's you, you'll say that one." }
        ] },
        { t: "(Take the recorder. Say something true into it, in your own voice, so there's one of you on tape it can't touch.)", notes: 3, flag: 'eqx-hc-true-tape', then: [
          { n: "She reached past him and took the recorder off the dryer and pressed the button, and the red light came on, and she held it up to her mouth, and said something into it." },
          { n: "She didn't let him hear it. She held it close, the way you'd tell a secret into a cupped hand, and he turned his face away to give her the room, and she said it, all of it, a minute and a half, low, in her own voice, the one nobody else had ever got to borrow; and when she was done she pressed stop, and took the little tape out, and put it in his hand, and closed his fingers over it." },
          { s: 'solar', f: 'neutral', t: "Don't play it. Not unless you're down there and you can't tell anymore. Then play it." },
          { s: 'haechan', f: 'neutral', t: "...What's on it?" },
          { s: 'solar', f: 'neutral', t: "Me." },
          { n: "He looked at his closed hand. He put it inside his hoodie, against his chest, and held it there, and didn't ask again." }
        ] }
      ] },

      { n: "At eleven fifty-eight he reached up and switched the dryer off. Neither of them wanted it stopping by itself tonight. The drum slowed and swung and hung still, and the room was very quiet, and the bulb buzzed, and they sat on the floor side by side with their backs against the warm dead machine, facing the back door, and waited." },
      { dark: true },
      { music: 'mystery' },
      { n: "The red came up through the little black window like something rising through water, and lay across the floor and their feet and their two hands, his over hers on the concrete, and the hum came with it, the note and the note under the note. The yard light outside went out. Mitsuru's order didn't hold in the red. Nothing held in the red." },
      { n: "They sat. They listened. The hum. His breathing. Hers. Nothing." },
      { n: "At eleven minutes past, two knocks." },
      { n: "On the back door. A foot away. Knuckles on wood, patient, polite. Not loud. The way you'd knock on the door of a house where you knew someone was home and up and waiting for you." },
      { n: "Haechan's hand closed on hers so hard the bones ground. He didn't move. She didn't move. She sat on the floor of the laundry room with her own heart going in her ears and her own breath in her own mouth, here, a meter from the door, inside, holding his hand." },
      { n: "And on the other side of the door, close, against the wood, warm, amused, a little out of breath as if she'd run up the hill, her own voice." },
      { n: "*Hyuck? It's me.*" },
      { n: "She felt him stop breathing. She felt it in his hand. She turned her head and he was already looking at her, not at the door; at her face, a hand's width away, in the red, the real one, with its mouth shut; and she watched him look at her and not at the door, and keep looking, and keep looking, as if she were the only thing in the room that could tell him what was true." },
      { n: "*It's only me. Open the door.*" },
      { n: "Neither of them got up. Neither of them answered. Nothing knocked again. After a long time, longer than she could count, the thing on the other side of the door laughed, softly, her laugh, the real one that went up at the end; and then there was nothing; and then, far off, going away down the yard toward the alley and the bins and the river, humming." },

      { dark: false },
      { music: 'night' },
      { ifCount: { of: ['eqx-hc-roof-kiss', 'eqx-hc-stayed-night'], min: 1 }, then: [
        { n: "When the hour ended they went upstairs. They didn't talk about it. He took her hand at the laundry-room door and walked her up the stairs and stepped over the fourth one on the second flight without thinking and took her into his room and shut the door and stood with his back against it, breathing, and she stood in the middle of the floor under the corkboard with its six months of receipts, a receipt for every night since April, and the ones since the bridge too; he hadn't stopped buying them; he'd only stopped taping." },
        { n: "He didn't kiss her. He just held on. He put his arms round her and his face in her neck and held on, standing up, in the middle of his room, the way she'd seen people hold on to things in water. She held on back. After a while they were lying down, still holding on, with all their clothes on and the blanket over them and the lamp on under the gray T-shirt, and after a longer while his mouth was on hers, slow, and then her hands were under his hoodie on his ribs, on his back, on the knobs of his spine, counting them, and his breath went out of him in a long shudder against her mouth and he said, very low, not a word in either language, just her name, the one the door didn't know." },
        { n: "She fell asleep with her ear on his chest. She woke at five with the lamp still on and his arm still round her and his eyes open, looking at the ceiling. He hadn't slept. He'd lain there all night, he told her later, listening to her breathe, to be sure he'd know it." },
        { s: 'haechan', f: 'neutral', t: "...I want you here. That's not asking. That's just the weather report." },
        { n: "She didn't answer. She put her hand flat on his chest over his heart, and he put his over it, and outside the window the sky went gray and then white, and down in the yard somebody, Akihiko probably, on his way out for his run, stopped by the back door for a long time, looking at the step." }
      ], else: [
        { n: "When the hour ended they didn't go upstairs. He switched the dryer back on, and it thumped into its turn, and the warm came back into the room a degree at a time, and they climbed up onto it, both of them, on the one that barely fit one, her hip against his and her shoulder half behind his, the way she'd climbed up beside him in April, and sat there in the hum and the warm with their hands where they'd put them, and didn't sleep, and didn't talk, until the little black window in the back door went gray." },
        { s: 'haechan', f: 'neutral', t: "...You're still here." },
        { s: 'solar', f: 'neutral', t: "I'm still here." },
        { s: 'haechan', f: 'neutral', t: "I didn't ask." },
        { s: 'solar', f: 'neutral', t: "I know." }
      ] },
      { n: "In the morning the chain was still on the back door, seated in its track all the way. Outside, on the concrete step, there was nothing. No marks. No prints. Only, in the cupped middle of the step, a fine pale dust, finer than talc, lying very evenly over the whole of it, like flour, like somebody had sat there a long time in the dark with their back to the door, patiently, waiting to be asked in." },
      { n: "Haechan stood looking at it in his socks with a cold can of coffee in each hand. Then he went back inside and got the broom, and swept it, every grain, off the step and into the yard, and then got the hose, and stood there with the hose running on the clean concrete for a long time after there was nothing left to wash." }
    ] },
    { after: '11/8', title: '7: read', place: 'Iwatodai Dorm · Laundry Room', time: 'Night', music: 'night', scene: [
      { bg: 'iwatodaidorm-laundryroom-night' },
      { n: "November had a sound in the dorm. It was the radiators, mostly, the old iron ones under every window that Mitsuru had finally had someone come and bleed, so that now at ten o'clock every night they knocked all over the building at once like a house full of people tapping a spoon on a glass for a speech nobody ever gave, and then went quiet, and then gave up at eleven on principle, and left the laundry room the warmest room again by default." },
      { n: "He was on the dryer. That was the first thing. She'd come down the stairs braced for the floor again, for his back against the drum and his shoes still on, and he was up on top of the warm one, where he belonged, with his knees up and his headphones round his neck, and the dryer thumping under him, and she stopped in the doorway with her hand on the frame and felt something in her chest go down a step, like a foot finding the stair it expected." },
      { n: "On the lid of the cold dryer beside him, face up, his phone. A cable ran from it to Minji's little silver recorder. The phone's screen was lit, and in the corner of it, above the clock, there was a single bar." },
      { ifFlag: 'dead.shinjiro', then: [
        { n: "The building was quieter than it had been in October. It was quieter in a particular way, the way a house is quiet after a clock has stopped that nobody knew they were listening to. Nobody burned anything in the kitchen at one in the morning anymore. Ken still got up at six. He made his own toast now, and left it in too long, on purpose, and ate it standing at the counter, and nobody said anything about it." }
      ] },
      { ifEvent: 'eqx-1122', then: [
        { n: "Upstairs, on the third floor, there was a light on under a door that had been dark for two months, and a woman's cough, now and then, and the sound of a man's voice saying something low in Korean and then nothing. Haechan looked up at the ceiling whenever the cough came, every time, the way you look up at a noise in a house you're not sure is yours yet." },
        { ifFlag: 'dead.aigis', then: [
          { n: "And on the fourth floor, past the command room, a door that nobody opened. Mitsuru had left it exactly as it was. Hyein went up at night sometimes and sat outside it, with a ribbon round her wrist, and Haechan had stopped recording anything on that side of the building, because he didn't want to have it." }
        ] }
      ] },
      { s: 'haechan', f: 'neutral', t: "One bar. Seven till half eleven. Same as May. It's back for a week now. Nobody's told Mitsuru, because she'd make a schedule." },
      { s: 'haechan', f: 'neutral', t: "I'm sending it home." },
      { choose: [
        { t: "Sending what?", notes: 2, then: [
          { s: 'haechan', f: 'neutral', t: "The song. Ours. The one from the booth. All four minutes fifty." },
          { s: 'haechan', f: 'smirk', t: "It's a big file and it's one bar. It's been going since nine. I've watched a blue line move about this far. I've aged. Look at me. I've aged in this room." }
        ] },
        { t: "(Climb up beside him. Watch the little blue line.)", notes: 3, then: [
          { n: "She climbed up onto the warm one beside him, which barely fit one, her hip against his, and he shifted his knee without a word to make the room he'd always made, and the two of them sat and watched a thin blue line creep across the bottom of a phone screen a hair at a time, with the dryer going under them, like two people watching a kettle that would never boil and enjoying it." },
          { s: 'haechan', f: 'neutral', t: "...It's the song. In case you were wondering what we're watching. We're watching the song leave." }
        ] },
        { t: "Home where?", notes: 3, then: [
          { s: 'haechan', f: 'neutral', t: "...Yeah. That's the question, isn't it. You always go straight for the question." },
          { s: 'haechan', f: 'smirk', t: "Both. I'm sending it home both. I'm very fair. I'm the fairest man in this building." }
        ] }
      ] },
      { n: "He told her the way he told everything this year, flat, handed over, without being asked. He'd sent it to himself. To his own phone. Not this one, which was the phone he'd found in his room on the eighth of April and had never been sure was his; the other ones. The ones he'd left. One in a room upstairs in a house in Syracuse whose back porch everybody had been sick off at least once. One in a house at the top of a hill above a harbor, in a drawer, in a room where somebody checked whether the corners of the futon were folded." },
      { s: 'haechan', f: 'neutral', t: "My number. Both my numbers. I don't know who else to send it to. Everybody I'd send it to is in this building." },
      { s: 'haechan', f: 'neutral', t: "I did the Syracuse one Sunday. It went through at eleven. I put the phone down, I got a can, I came back." },
      { n: "He picked the phone up and turned it so she could see. The thread was just his own name, the way you'd save your own number, *me*, and a gray bubble with a little play triangle in it, four minutes and fifty seconds, and under the bubble, in the small gray letters phones use when they've stopped caring about you, one word." },
      { n: "*Read.*" },
      { s: 'haechan', f: 'serious', t: "Eleven forty-one. Read. My phone. In my room. Which I'm not in." },
      { s: 'haechan', f: 'neutral', t: "And I did the other one last night. Same thing. It went through at ten. And this morning—" },
      { n: "He scrolled. The other thread. The other *me*, in Korean. The same gray bubble. And under it, *Read*, and a time with no date: four thirteen." },
      { s: 'haechan', f: 'serious', t: "Four thirteen. In the morning, I'm guessing. In a house where nobody's allowed in my room. Somebody picked up my phone off a desk at four in the morning and listened to you sing." },
      { s: 'haechan', f: 'neutral', t: "Nobody's written back. Obviously. Nobody ever writes back. Minji's mom read hers in May and never wrote back. Everybody's is read. Nobody's is answered. I knew that. I sent it anyway." },
      { choose: [
        { t: "Maybe it's you. The other you. Whichever one's there.", notes: 3, then: [
          { n: "He went very still on the dryer. She felt it down her whole side. Then he laughed, short, through his nose, and looked at the phone in his hand as if it had said it." },
          { s: 'haechan', f: 'neutral', t: "...Yeah. I thought that. At about four fourteen. Lying there." },
          { s: 'haechan', f: 'sad', t: "That there's a me there. In the room. Who's never heard of any of this. Who's just. Going on. And he picks up his phone in the dark and there's a song on it with your voice in it, from a number that's his own, and he listens to the whole thing, and he doesn't know why he's crying." },
          { s: 'haechan', f: 'neutral', t: "And he doesn't write back because what would he even say." }
        ] },
        { t: "It's just a phone, Hyuck. Phones lie.", notes: 2, then: [
          { s: 'haechan', f: 'neutral', t: "Everything here lies. The clocks lie. The rain lies. My own voice lies, apparently, on doors." },
          { s: 'haechan', f: 'serious', t: "That's why I keep receipts. Receipts don't lie. They're the only thing in this town that prints a date and means it." }
        ] },
        { t: "(Take the phone out of his hand. Turn it face down.)", notes: 3, then: [
          { n: "She took it out of his hand, gently, and turned it over on the lid of the cold dryer so the screen was against the metal, and the room got a shade darker, and he let her, and looked at the back of the phone for a while, at the cable still running out of it to the recorder like a thread nobody had cut." },
          { s: 'haechan', f: 'neutral', t: "...Thanks. I'd have looked at it all night. I've been looking at it all week." }
        ] }
      ] },
      { n: "The dryer turned. Somewhere above them a radiator knocked once, late, out of turn, the way a house clears its throat. He took his headphones off his neck and turned them over in his hands." },
      { s: 'haechan', f: 'neutral', t: "That's not why I sent it, though. The reading thing. I didn't know about the reading thing. I sent it because of the porch." },
      { ifFlag: 'eqx-home-R3', then: [
        { s: 'haechan', f: 'neutral', t: "You went out. In the kitchen. The Sigma kitchen. You opened the back door and went out on the porch in the snow, and you stood there four breaths. I counted. I'm not Akihiko, I don't have a stopwatch. I counted on my hand. Four." },
        { s: 'haechan', f: 'sad', t: "And I stood at the island with my hand on that stool and I thought, she's going. Not now. One day. She's going to go out a door like that and it's going to be real snow and she's not going to come back in." }
      ] },
      { ifFlag: 'eqx-away-R3', then: [
        { s: 'haechan', f: 'neutral', t: "You came and stood with me. In the kitchen. You put your hand in my pocket. You didn't even look at the door." },
        { s: 'haechan', f: 'sad', t: "And I stood there with your hand in my pocket and I was so happy I thought I'd be sick, and then I thought, she didn't look at the door. And I didn't know if that was good. I still don't know if that's good." }
      ] },
      { ifFlag: 'eqx-watch-R3', then: [
        { s: 'haechan', f: 'neutral', t: "You looked at it. The snow, through the little window. You didn't go and you didn't turn round. You just looked, like you were learning it." },
        { s: 'haechan', f: 'sad', t: "And I thought, she's memorizing the way out. Not now. For later. And I was so proud of you I couldn't breathe, and I wanted to put my hand over your eyes." }
      ] },
      { s: 'haechan', f: 'serious', t: "I had a plan. Since April. You want to hear my plan? It's a stupid plan. It's the stupidest plan anybody's ever had and I was very pleased with it." },
      { s: 'haechan', f: 'neutral', t: "The plan was, I don't ask. You decide. Wherever you go, I go. Runners, I go. The house on the hill, I go. You stay here, I stay. I don't have to pick anything. You pick, and I follow you through the door, and I never once have to be the one who asked." },
      { s: 'haechan', f: 'neutral', t: "I thought that was the nicest thing I could do for you. I thought that was the whole point of me this year." },
      { n: "He turned the headphones over once more and put them down on the dryer between them, very carefully, the way you'd put down something that might go off." },
      { s: 'haechan', f: 'serious', t: "And then I stood in that kitchen and I watched you look at the door, and I thought: oh. If I just follow you, then you're picking for me. You're carrying me through the door like a bag. That's not not asking. That's asking with extra steps. That's the most asking thing I could possibly do. That's *please decide where I live* in a nice voice." },
      { s: 'haechan', f: 'sad', t: "It's what the door wanted. It's exactly what the door wanted. Just slower." },
      { n: "She didn't say anything for a second. She couldn't. She sat on the warm machine with her hip against his and felt it go into her the way true things did this year, not in the head first; in the stomach, low, a cold drop like a missed stair. Because he was right. Because she'd known he'd follow her. Because some part of her, the part that knew exactly how to be what everyone needed, had been counting on it, all year, like money in a drawer." },
      { s: 'haechan', f: 'neutral', t: "So I sent it home. The song. To both of me. Because if I'm going to pick, I wanted them to hear what I'd be picking. Whichever one. I wanted them to hear you first." },
      { s: 'haechan', f: 'neutral', t: "I don't know where I go, Sol. At the end. I've got to find out on my own. That's the bit I hate. That's the bit I've been avoiding since April with a very elaborate system of not asking." },
      { choose: [
        { t: "Come with me. Wherever I go. Please. I don't want to do it without you.", notes: 3, tally: { asked: 1, cakes: 1 }, flag: 'eqx-asked-haechan', then: [
          { n: "It came out of her warm and certain and exactly right, the voice she used in doorways, and she heard it land in him and felt, at the same moment, under her ribs, something small and warm go out of her and not come back; and then a fullness after, a satisfied heaviness, as if she'd eaten." },
          { n: "He looked at her. His face did something open and relieved and young, the shoulders first, all the weight of a week of four-in-the-morning going out of them at once." },
          { s: 'haechan', f: 'happy', t: "...Yeah? Okay. Okay. Then that's— okay. That's easy. You asked. I'll come." },
          { n: "Then the relief stopped halfway across his face, the way the rain had stopped in June, between one drop and the next, and hung there." },
          { s: 'haechan', f: 'neutral', t: "...You asked." },
          { s: 'haechan', f: 'sad', t: "You never ask. Out of everybody. You're the one who never—" },
          { n: "He didn't finish it. He picked up the headphones again, and didn't put them on, and held them, and the dryer turned under them both, and neither of them said anything about the hunger, which she could feel, small, constant, and which she thought, from the way he was looking at her mouth, he could somehow hear." }
        ] },
        { t: "Then find out. Pick for yourself. Even if it isn't where I go. Especially then.", notes: 3, tally: { choose: 1 }, flag: 'eqx-choose-haechan', then: [
          { n: "It cost her. She felt exactly what it cost: a small hard shape under the breastbone, the shape of *come with me* swallowed whole and sitting there, undigested. He watched her say it. He watched it cost her. She saw him see the exact place it went." },
          { s: 'haechan', f: 'sad', t: "...Even if it isn't where you go." },
          { s: 'solar', f: 'neutral', t: "Even then. It's yours." },
          { s: 'haechan', f: 'neutral', t: "That's the worst thing you've ever said to me and I've been called a golden retriever with a record deal." },
          { n: "But he didn't look away. He put his hand down on the warm lid of the dryer between them, palm up, open, the way he had in April. Not reaching. Just there. And this time it was shaking, very slightly, and he let her see it shake." },
          { s: 'haechan', f: 'neutral', t: "...Okay. Mine. I'll find out. I'm going to be so bad at it." }
        ] },
        { t: "I don't know where I'm going either.", notes: 2, then: [
          { s: 'haechan', f: 'neutral', t: "...Yeah? Good. No. Not good. But good. At least we're both standing in the same doorway like idiots." },
          { s: 'haechan', f: 'smirk', t: "We could put a chair in it. Make it a room." }
        ] },
        { t: "(Don't answer. Put your hand over his on the headphones.)", notes: 3, then: [
          { n: "She didn't answer. She put her hand over his on the headphones, both their hands on the soft pads, and left it there, and he looked down at that for a long time and breathed out through his nose, and didn't ask her to say anything, because he never did, and she didn't, because for once she didn't know what was hers to say." }
        ] }
      ] },

      { place: 'Iwatodai Dorm · Third Floor Stairs', time: 'Late Night', bg: 'iwatodaidorm-stairs-night', music: 'tender', soft: true },
      { n: "At half past eleven he got down off the dryer and went to the machine by the back door, the little one Mitsuru had had put in after the bridge so that nobody had to go out on the strip at night for anything, and fed it coins, and pressed the same button twice." },
      { n: "Two cans. Hot. He gave her neither of them. He went up the stairs with one in each hand, past the second floor, where Hanni's futon was rolled away now because Hanni didn't sleep across Hyein's door anymore, Hanni slept *inside* it, on the floor, with the door open; past the fourth stair on the second flight, which he stepped over; up to the third floor, where the stairs came up into the hall, and the top step had somebody on it." },
      { n: "Taejoon. In the dark cardigan, buttoned right now, because Haechan had done the buttons for him one morning in October without a word and Taejoon had let him. His back to the hall and his face to the landing and his forearms on his knees, the way he'd sat on the seventh stair of a borrowed house for a month, and on this one, at the dorm, every night since the fathers came out of that house with their bags." },
      { n: "Haechan held a can out. Taejoon took it, without looking, and held it in both hands, not drinking it, the way Solar held hers. Haechan sat down on the step below him, with his shoulder against the old man's knee, and after a second Solar sat down on the step below that, and nobody said anything, very loudly, all three of them, for a long time." },
      { s: 'taesang-strangers', f: 'neutral', t: "...Sol-ah." },
      { n: "That was all. It was enough. It meant, *you're up late*, and *I see you*, and *sit, then*, all at once, the way it had at the bottom of another staircase in another life." },
      { n: "Then, after a while, in Korean, low, not to her; to the top of Haechan's head." },
      { s: 'taesang-strangers', f: 'neutral', t: "The song. Through the floor. Last week." },
      { n: "Haechan's shoulder went stiff against his knee." },
      { s: 'haechan', f: 'neutral', t: "...Sorry, Abeonim. I'll turn it down. I didn't know it came up through—" },
      { s: 'taesang-strangers', f: 'neutral', t: "Again." },
      { n: "He said it to the landing. One word. He didn't say please; that house didn't have a word for please that a man like him would use on the stairs. He just said *again*, and went on looking at the landing, and held his can." },
      { n: "Haechan didn't move for a second. Then he took his phone out of his hoodie, and unplugged it from nothing, and turned the volume down to almost nothing, and pressed the gray bubble with the little triangle in it, and held it up between the two of them on the stair, between his own ear and the old man's knee." },
      { n: "The hum, warm and slow like a cello. The dryer as the kick. The rain's applause at the turn. And her voice, coming into the gap, small out of the little speaker, the way you'd hear somebody singing in another room of a house you'd grown up in." },
      { choose: [
        { t: "(Close your eyes. Listen to it with them.)", notes: 3, then: [
          { n: "She closed her eyes. She'd never heard it like this, from outside, from a stair below, with the radiators gone quiet and an old man's breathing over her head. It didn't sound like her. It sounded like somebody who'd been happy for four minutes and fifty seconds once and had got it down on tape before it went." }
        ] },
        { t: "(Watch Taejoon's face.)", notes: 3, then: [
          { n: "She watched him. In the dark. Taejoon's face didn't do anything. That was Taejoon. It didn't do anything for the whole of the first half, and at the turn, at the applause, at her voice going into the second half, his thumb moved once on the side of the can, a quarter of an inch, back and forth; and that was all; and on Taejoon that was a man standing up at a concert." }
        ] }
      ] },
      { n: "When it ended he put the phone face down on his knee. Taejoon didn't say anything. Then he put his hand on the top of Haechan's head, heavy, the way it came down at the bottom of stairs, and left it there." },
      { s: 'taesang-strangers', f: 'neutral', t: "...She'd have liked it." },
      { n: "*Would have.* In Korean the tense sat differently; it didn't have the edge the English had; but Solar heard it anyway, the careful thing he'd done with it, set it down like a cup with a crack in it." },
      { ifEvent: 'eqx-1122', then: [
        { n: "And then, after a beat, the old man's hand still on the boy's head, he moved the tense. Not much. Taejoon never moved anything much." },
        { s: 'taesang-strangers', f: 'neutral', t: "...She'll like it. When she can sit up. Play it for her. Not loud." }
      ] },
      { n: "At eleven fifty-eight nobody moved. They'd stopped going to their rooms at eleven fifty-eight in this building. You stayed where you were, with whoever you were with, and you held on." },
      { dark: true },
      { music: 'mystery' },
      { n: "The red came up through the little window on the landing like something poured, slow, and lay down the stairs over the three of them. The hum came up out of the walls, the note and the note under the note. The radiators were dead. The bulb was dead." },
      { n: "And on Haechan's knee, face down, the phone lit up." },
      { n: "She saw it come through the case, a thin line of light round the edge of the phone where it lay against his jeans. Phones didn't light up in the red. Nothing lit up in the red. Minji's things ran and that was all, and this wasn't one of Minji's things. Haechan felt it on his knee before he saw it. She watched his whole body go to stone on the stair." },
      { n: "He turned it over." },
      { n: "One new message. From *me*. The Korean one. The date stamp on it read *Tue 4/6, 0:00*, which was the night they'd all been taken, seven months ago; and it was a gray bubble with a little play triangle in it, and the length beside the triangle said four minutes and fifty-one seconds. One second longer than the song." },
      // CG: eqx-read — a dark dorm staircase in the blood-red hour, an old man in a cardigan on the top step with a can in both hands, a boy on the step below him holding up a lit phone, a girl on the step below that, all three faces lit from below by the one impossible screen.
      { s: 'haechan', f: 'serious', t: "...It's written back." },
      { n: "His thumb went toward the triangle. It moved without him; she saw it move, the way a hand goes to a ringing phone after a lifetime of answering." },
      { n: "Taejoon's hand came down off the top of his head and closed over the phone. All of it. The big square hand, the one that had held a baduk stone and a coffee milk and a pair of green garden clogs all the way up a well, closed over the boy's hand and the screen and the light, so that the stair went dark again except for the red." },
      { s: 'taesang-strangers', f: 'neutral', t: "...Not in the dark." },
      { n: "Korean. Low. Not an order; Taejoon didn't give orders; it was a fact about the house, like *we take our shoes off at the door*. He didn't take his hand away. Haechan didn't pull his away either. They sat like that, the two of them, with the phone between their hands like something caught, through the whole of the hour, and Solar sat on the stair below with her can gone cold, and listened." },
      { n: "Far down. At the bottom of the stairwell, by the front door, where Koromaru slept. Somebody humming. Three up, two down, a long one. It went on for a while, patient, and then it stopped, as if whoever it was had been waiting to see if anyone would play something back to them, and nobody had." },
      { dark: false },
      { music: 'night' },

      { place: 'Iwatodai Dorm · Laundry Room', time: 'Late Night', bg: 'iwatodaidorm-laundryroom-night', soft: true },
      { n: "They played it in the laundry room at ten past one, with the bulb on and the dryer running and the back door chained and Solar's hand flat on the chain itself, because she'd decided that, coming down the stairs, and he hadn't argued." },
      { n: "Taejoon had gone to bed. He'd stood up at the end of the hour and taken his hand off the phone and looked at Haechan for a long time, and then he'd said, *in the light*, and gone into the room across the hall and shut the door, and they'd heard the lock." },
      { n: "The song. All of it. Her voice into the gap, the second half, the loop closing. She stood with her hand on the chain and watched him listen, the way he'd watched her face over every sound he'd ever played her, to see where it landed." },
      { n: "Then the room tone of the booth. The red hush. Three seconds of somebody breathing a meter off." },
      { n: "And a voice." },
      { ifChoice: { 'asks.haechan': 'yes' }, then: [
        { n: "His. Close to the microphone. Cracked and young and enormously relieved, the voice of a boy on a futon on a roof in July with the fans stopped and a strip of staff paper in his fist." },
        { n: "*...Stay with me.*" },
        { n: "And then hers, warm, exactly right. *Okay.*" },
        { n: "Then the click of a recorder stopping." },
        { s: 'haechan', f: 'serious', t: "...That's the roof. That's us. That's the actual night." },
        { s: 'haechan', f: 'serious', t: "There wasn't a recorder on the roof, Sol. I didn't tape the roof. I didn't tape anything that night. I *checked*. I've checked a hundred times." },
        { n: "He sat down on the concrete with his back against the warm drum. He didn't look at the phone. He looked at his own hands." },
        { s: 'haechan', f: 'sad', t: "It was there. It was listening. It kept it. It kept the best night I had all year, and it put it on the end of our song, and it sent it back to me from my own house." }
      ], else: [
        { n: "His. Close to the microphone. So close she could hear the wet of his lips, the way you'd speak into somebody's ear on a pillow. Unhurried. A little hoarse, the way he went hoarse at two in the morning. Exactly him." },
        { n: "*Stay with me, Sol.*" },
        { n: "*Please.*" },
        { n: "Then the click of a recorder stopping." },
        { s: 'haechan', f: 'serious', t: "...I never said that." },
        { s: 'haechan', f: 'serious', t: "I've never said that. Not once. Not out loud. Not to you, not to a wall, not in the shower. I wrote it on paper and crossed it out. I've got a drawer. I never *said* it." },
        { n: "He sat down on the concrete with his back against the warm drum. He didn't look at the phone. He looked at his own hands." },
        { s: 'haechan', f: 'sad', t: "It sounds better than I would. That's the thing. It sounds like me on a good night. It sounds like me if I'd ever had the guts." }
      ] },
      { ifFlag: 'eqx-hc-take-kept', then: [
        { s: 'haechan', f: 'neutral', t: "It used to be your word on the end of that song. On the tape in my drawer. *Stay*, in your voice. I checked it last week. It's still there." },
        { s: 'haechan', f: 'serious', t: "So now it's got both of us. One on each end." }
      ] },
      { ifFlag: 'eqx-hc-take-erased', then: [
        { s: 'haechan', f: 'neutral', t: "We buried your word. In August. A minute of nothing on top of it. And it waited till the song left the building, and then it put something new on the end. Like it knew I'd checked the old one." }
      ] },
      { s: 'haechan', f: 'serious', t: "I made a rule. For down there. For my floor. So I'd know you." },
      { ifFlag: 'eqx-hc-never-say', then: [
        { s: 'haechan', f: 'neutral', t: "You'd never say it to me. That word. So if I heard it in your voice, it wasn't you. That was the rule. It's a good rule. It's still a good rule." }
      ] },
      { ifFlag: 'eqx-hc-learn-voice', then: [
        { s: 'haechan', f: 'neutral', t: "The house name. The one it doesn't know. If it's you, you'll say that one. That was the rule. It's a good rule. It's still a good rule." }
      ] },
      { ifFlag: 'eqx-hc-true-tape', then: [
        { s: 'haechan', f: 'neutral', t: "The tape you gave me. The minute and a half. If I can't tell, I play it. It's in here. I haven't played it. That's a good rule. It's still a good rule." }
      ] },
      { s: 'haechan', f: 'sad', t: "It's a rule for your voice. I never made one for mine. It never crossed my mind I'd need one. I know what I sound like. I've heard myself on tape ten thousand times." },
      { s: 'haechan', f: 'serious', t: "It's got mine now. And it's going to use it on you." },
      { choose: [
        { t: "Then here's mine. If I ever hear you ask me to stay, I'll know it isn't you. Because you don't.", notes: 3, flag: 'eqx-hc-his-rule', then: [
          { n: "He looked up at her from the floor. She watched it go in. Watched him turn it over, the way he turned a can a quarter turn and back, to see if it held." },
          { s: 'haechan', f: 'neutral', t: "...Because I don't." },
          { s: 'solar', f: 'neutral', t: "Because you don't. That's the whole you, this year. It's the easiest rule I've ever made." },
          { s: 'haechan', f: 'sad', t: "You're very confident about me for somebody who's watched me nearly say it on a roof." },
          { s: 'solar', f: 'neutral', t: "Nearly." },
          { n: "He put his face in his hands, and said *agasshi* through his fingers, like a complaint, and when he took them away his eyes were wet and he was laughing, a little, at nothing, at the floor." }
        ] },
        { t: "Delete it. Both threads. Let them stay read.", notes: 2, flag: 'eqx-hc-reply-deleted', then: [
          { n: "He did it without arguing, on the floor, fast, both threads, his thumb on each one until the phone asked him if he was sure, and he was. Then he held the phone in his lap with the screen dark and said nothing for a while." },
          { s: 'haechan', f: 'neutral', t: "...The song's gone too. From the phone. It's still on the tape. The real one. In the drawer. With the real you on it." },
          { s: 'haechan', f: 'neutral', t: "I'll send it again one day. From somewhere they write back." }
        ] },
        { t: "(Sit down on the floor next to him. Take the phone. Hold it yourself, face down, the way Taejoon did.)", notes: 3, flag: 'eqx-hc-reply-held', then: [
          { n: "She sat down beside him against the warm drum and took the phone out of his lap and held it face down between her two hands, flat, the way the old man had held it on the stair, and didn't say anything, and he looked at her hands round it for a long time." },
          { s: 'haechan', f: 'neutral', t: "...You look like him. Doing that. Don't tell him I said so. He'd go into the garden and stand there for an hour." },
          { s: 'haechan', f: 'neutral', t: "Keep it. Tonight. I don't want it in my room. I want it with somebody who won't press it." }
        ] }
      ] },
      { ifCount: { of: ['eqx-hc-roof-kiss', 'eqx-hc-stayed-night'], min: 1 }, then: [
        { n: "He leaned over after a while and put his forehead on her shoulder, and then his mouth, through the cardigan, on the place where her shoulder met her neck, not kissing, just resting there, warm, the way you'd rest your mouth on the rim of a cup you weren't ready to drink from. She put her hand in his hair. He stayed like that until the dryer stopped by itself, and then reached up without looking and switched it back on, and stayed some more." }
      ], else: [
        { n: "He leaned his head back against the dryer door after a while, and she leaned hers back beside it, and they sat like that with their shoulders touching, listening to the drum turn, which was the only thing in the building that ever said the same thing twice and meant it." }
      ] },
      { n: "In the morning she went past the konbini on the corner on her way to school, and he was coming out of it in his hoodie with gum he didn't want and a receipt held up between two fingers, the way he'd held the first one in April. He showed it to her on the pavement. Today's date, printed sharp. Seven forty-two." },
      { s: 'haechan', f: 'neutral', t: "There. That one's real. That one's the only one I trust." },
      { n: "Then he took out his phone, and looked at it, and his face did a small thing at the jaw, and he turned the screen so she could see." },
      { ifFlag: 'eqx-hc-reply-deleted', then: [
        { n: "His two threads. He'd deleted them on the laundry-room floor at half past one; she'd watched him do it; the phone had asked him if he was sure. They were back. At the top of his messages, the two of them, *me* and *me*, each with its one gray bubble going home, and no reply under either; and under each bubble, where the word had been for a week, small and gray, the status had changed." }
      ], else: [
        { n: "His two threads. The two gray bubbles going home. And under each of them, where the word had been for a week, small and gray, the status had changed back." }
      ] },
      { n: "*Sent.*" },
      { n: "Not read. Not delivered. Sent, the way a thing is sent when it's only just left your hand and hasn't got anywhere yet; as if nobody, in either house, at any hour, had ever picked it up at all." }
    ] },
    { after: '12/6', title: '8: one hour', place: 'Iwatodai Dorm · Laundry Room', time: 'Night', music: 'tender', scene: [
      { bg: 'iwatodaidorm-laundryroom-night' },
      { n: "December came in hard and dry, the cold off the sea finding every gap in the old building, so that the laundry room's little black window in the back door had a skin of frost on the inside every morning now, a fern of it spreading from the corners, and somebody had drawn a face in it with one finger, two dots and a flat line, which meant Junpei, and somebody else had wiped it off, which meant Hanni." },
      { n: "He wasn't on the dryer and he wasn't on the floor. He was standing in the middle of the room in his coat, the long dark one Mitsuru had bought the whole dorm in November out of a catalogue without asking anybody's size, with his hood up under it and his hands in his pockets, and the recorder on its strap round his neck like a camera, and the dryer off. Off. She'd never once come down and found it off." },
      { s: 'haechan', f: 'neutral', t: "Tonight." },
      { n: "He didn't say anything else. He didn't have to. She'd known since October that a night was coming when he'd go down and sit in a room that sounded like this one and not say anything for an hour, and she'd known it would be a night like this, cold, clear, no moon worth mentioning, an ordinary Monday. Things this year came on ordinary Mondays." },
      { ifEvent: 'eqx-1221', then: [
        { n: "Since the eclipse nobody in the dorm said her name. Nobody had to. The floor was still down there. Fuuka said it was louder now, not quieter, as if whatever had built it had stopped needing to be careful." }
      ] },
      { ifFlag: 'dead.aigis', then: [
        { n: "Upstairs there was a door on the fourth floor that nobody opened. On the floor of the Tree, two weeks ago, his own reflection had walked under him in the water with its hands in its pockets and looked up at hers and smiled, and then the water had closed over Aigis, and he had stood on the bank with Solji's stretcher handle in his fist and listened to metal give for a long time. He hadn't talked about it. He'd stopped taping the hour for good after that. He'd only kept the recorder for tonight." }
      ], else: [
        { n: "On the floor of the Tree, two weeks ago, his own reflection had walked under him in the water with its hands in its pockets and looked up at hers and smiled. He hadn't talked about it. He'd stood on the bank with Solji's stretcher handle in his fist and not looked down again the whole way up." }
      ] },
      { s: 'haechan', f: 'neutral', t: "Fuuka cleared it with Mitsuru. Chenle's on comms. Your boxer's holding the rope at the top. He asked to. I didn't ask him. He just turned up in the command room with his gloves on and stood there till Mitsuru said yes." },
      { s: 'haechan', f: 'neutral', t: "I'm not asking you to come. I want that on the record. One hour, a room, me not saying something. I can do that by myself. I've had practice." },
      { choose: [
        { t: "I know. I'm coming anyway.", notes: 3, then: [
          { s: 'haechan', f: 'neutral', t: "...Yeah. I know you are. I made two cans." },
          { n: "He had. They were on the cold dryer, side by side, already cooling. She took one and put it inside her coat against her stomach, and he watched her do it, and something at the corner of his mouth moved its quarter inch." }
        ] },
        { t: "(Go and get your coat. Don't say anything.)", notes: 3, then: [
          { n: "She went and got her coat. When she came back down he was holding the laundry-room door for her with his hood up and his eyes on the floor, and he didn't say *you didn't have to*, and she didn't say *I know*, and they went out through the front, past Koromaru asleep across the mat, who lifted his head and looked at them both and put it down again, which was its own sentence." }
        ] },
        { t: "Is it a date?", notes: 3, then: [
          { s: 'haechan', f: 'slight-surprise', t: "...It's a haunted laundry room at the bottom of a well." },
          { s: 'haechan', f: 'smirk', t: "It can be a date. You decide what it is. I'll just sit next to it." }
        ] }
      ] },

      { place: 'Gekkoukan High · Courtyard', time: 'Late Night', bg: 'eqx-courtyard-well-night', music: 'mystery', soft: true },
      { n: "Akihiko was sitting on the lip of the well with Mitsuru's climbing line coiled at his feet and the end of it tied round his own waist, twice, in a knot he'd tied and checked and checked again. His breath came out white. He had the stopwatch in his taped hand, and when they came across the paving he stood up." },
      { ifFlag: 'dead.shinjiro', then: [
        { n: "He was wearing a long coat that wasn't his. It was too big in the shoulders and too long in the arms, and somebody had sewn the front of it back together with black thread, one long seam from the collar to the hem, badly, in long uneven stitches, and he'd turned the sleeves back twice. Solar didn't look at it. Haechan did. He looked at it for a long time, and then at Akihiko, and nodded, once." }
      ] },
      { s: 'akihiko', f: 'neutral', t: "An hour. I'll count it. If you need out before, pull. Two." },
      { s: 'haechan', f: 'neutral', t: "Two's not a great number this year, man." },
      { n: "Akihiko looked at him. Then he almost smiled, which on Akihiko in December was a lot." },
      { s: 'akihiko', f: 'neutral', t: "Three, then." },
      { s: 'haechan', f: 'neutral', t: "Three." },
      { n: "At midnight the courtyard went red, and the well opened its stone mouth, and they went down the rope." },

      { place: 'The Well · Between the Hills', time: 'The Red Hour', bg: 'eq-well-3', music: 'eerie' },
      { dark: true },
      // BG: eqx-well-between-hills — the bottom of a vast well shaft where black snow-covered ice gives way to gray tidal mud, the line between them sharp as a seam, and standing alone on the line a single wooden back door with a small square window and a chain on the inside, a yard light above it.
      { n: "The First Hill was snow and black ice, the upside-down campus, the stage lights that were faces. They went through it fast, the two of them and the voices in their ears, Chenle calling the turns, *left, left, there's a Worn by the steps, it's looking at the dorm windows, go round*. Deeper, the snow went gray. Deeper, it went soft. And then it stopped, all at once, in a line, as if somebody had cut it with scissors, and on the other side of the line the floor was mud, wet and flat and silver to the edge of the dark, the Second Hill's tide-floor, with the smell of the sea coming off it." },
      { n: "And on the line, standing on its own, half in the snow and half in the mud, a door." },
      { n: "A plain wooden back door with a small square window at the top. A yard light over it, on, yellow, the only yellow thing in the Well. A concrete step in front of it with a cupped middle." },
      { n: "They were on the outside of it. That was the first thing she understood, and her stomach understood it before she did; it turned over, slowly. They were standing where the thing had stood. On the step. In the yard. Looking at the laundry room's back door from the side the knocking came from." },
      { s: 'chenle', f: 'sad', t: "...That's it. That's the one. It's got room tone, I told you, I told you. A thump every two seconds. And a hum with a note under it." },
      { s: 'fuuka', f: 'sad', t: "Haechan-kun. Solar. There's someone inside. One signal. It's... it's very warm. It's sitting very still." },
      { n: "Through the little window, the laundry room. Exactly. The bulb, the two machines, the rota's ghost on a wall that didn't have a fridge. The dryer was running. In the red. Nothing ran in the red; the dryer was running, thumping on the turn, and on the lid of the cold one, the little silver recorder, red light on." },
      { n: "And on the warm one, with its knees up and its back to the door, somebody in a black hoodie with the hood up." },
      { n: "Haechan put his hand on the door. The chain was on, on the inside. She watched him look at it, his own chain, the one he'd checked every night since April, from the wrong side. Then the door swung open by itself, a hand's width, to the end of the chain, and stopped, and the chain wasn't on anymore. It had never been on. It was hanging loose against the frame, and the door was open, the way a door is open when somebody inside has been waiting for you for a long time and wants you to know it." },

      { place: 'The Well · The Laundry Room', time: 'The Red Hour', bg: 'iwatodaidorm-laundryroom-night', music: 'eerie' },
      { n: "Inside it was warm. Too warm. Dryer warm, the warm of a room with a machine running in it all night, and it smelled right, fabric softener and hot metal and the drain, and under it something that wasn't right, faint and sweet, like rice flour in a tin." },
      { n: "The figure on the dryer didn't turn round. It sat with its knees up and its sleeves over its hands, exactly the way he sat, and its head a little on one side, listening, the way his was when a sound was coming that he wanted. It was humming. The loop. Their loop. The cello hum and the dryer kick and the turn, hummed with its mouth closed, in his voice, low, perfectly." },
      { n: "Haechan sat down on the floor. Against the cold dryer, the way they'd sat in October, facing the warm one. He didn't look at it. He looked at his own knees. Solar sat down beside him, and their shoulders touched, and his hand found hers on the concrete without looking and closed." },
      { s: 'fuuka', f: 'neutral', t: "...One hour. Akihiko-senpai has started the watch. I'll tell you the minutes. I won't say anything else." },
      { n: "So they sat." },
      { n: "It was the longest hour of her life. She'd been down a well. She'd stood on a bridge. She'd watched a man's heart go out of him on a staircase onto a cardigan. This was longer. The dryer turned. The thing on it hummed the song round and round, and every time the fourth bar came round it stopped humming, in the gap, the way you'd stop to let somebody else come in; and waited; and nobody came in; and it went on." },
      { s: 'fuuka', f: 'neutral', t: "Ten minutes." },
      { n: "Haechan's hand was sweating in hers. Neither of them let go. Once the thing on the dryer laughed, softly, at nothing, his laugh, the real one, the one that went up at the end, and she felt him go rigid down his whole side and then, deliberately, one muscle at a time, unclench." },
      { s: 'fuuka', f: 'neutral', t: "Twenty-five minutes." },
      { n: "It got down off the dryer. It didn't turn round. It went to the cold one and pressed the recorder's button with a sleeve, and wound it back, and the little wheel ticked, and it played them a tape. Room tone. This room, in April, on the night of the knocks. A boy breathing on a dryer, slow, bored, a meter from a microphone. And the two knocks. And on the tape, the boy not moving." },
      { n: "Then it got back up on the dryer, and hugged its knees, and hummed." },
      { s: 'fuuka', f: 'neutral', t: "Forty minutes." },
      { s: 'fuuka', f: 'sad', t: "...Fifty." },
      { n: "At fifty-two minutes it stopped humming." },
      { n: "It turned its head. Not toward him. Toward her. The hood came round, slow, and inside the hood it was dark, a dark that went back further than a hood went, and out of the dark, close, warm, a little hoarse, the way he went hoarse at two in the morning, his voice." },
      { ifChoice: { 'asks.haechan': 'yes' }, then: [
        { n: "*Sol. You already said okay. On the roof. Remember? It's done. It's already done. Say it again. It's easier the second time. Stay with me.*" },
        { n: "*He wants you to. He asked you once. He's never going to ask again, because he's scared. I'm not scared. Let me ask for him.*" }
      ] },
      { ifChoice: { 'asks.haechan': 'choose' }, then: [
        { n: "*Sol. You told me I could want it. Out loud. As loud as I like. So I'm wanting it. Listen to how loud. Stay with me.*" },
        { n: "*Wanting's just asking quietly. You know that. You've always known that. I'm only saying it a little louder. Stay with me. Please.*" }
      ] },
      { ifChoice: { 'asks.haechan': 'no' }, then: [
        { n: "*Sol. You said you'd say no. To him. You never said you'd say no to me. Stay with me.*" },
        { n: "*He'll never ask. You made sure. So I'm asking. Somebody has to. Please.*" }
      ] },
      { n: "Beside her Haechan had stopped breathing. She felt it. His hand on hers on the concrete had gone to iron. He was looking at the floor between his knees and his jaw was doing the small sideways thing, over and over, as if he were chewing on something he couldn't swallow; and the thing in the hood waited, with its head on one side, for her." },
      // CG: eqx-one-hour — a replica dorm laundry room in the blood-red hour at the bottom of a well, a figure in a black hoodie with the hood up sitting on a running dryer, the inside of the hood pure dark; on the floor against the other machine a boy and a girl sitting shoulder to shoulder, his hand locked on hers, his eyes on the floor and hers on the hood.
      { choose: [
        { t: "...Okay.", notes: 1, tally: { cakes: 1 }, flag: 'eqx-hc-floor-okay', then: [
          { n: "She didn't decide to. It was his voice. It was his voice on a pillow at two in the morning, saying the one thing she'd watched him not say all year, and it came out of her the way a hand goes out to catch something falling, warm and certain and exactly right, the voice she used in doorways." },
          { n: "Something went out of her under the ribs. Small. Warm. Gone. And the thing in the hood breathed in, slow and deep and pleased, like somebody smelling bread." },
          { n: "*Thank you*, it said, in his voice. *That's all he ever wanted.*" },
          { n: "Haechan stood up so fast the dryer behind him rang." }
        ] },
        { t: "(Don't answer it. Look at him. The real one. Wait.)", notes: 3, then: [
          { n: "She didn't answer it. She turned her head away from the hood, which was the hardest thing her neck had ever done, and looked at him: at the real one, on the floor beside her, a hand's width away, with his jaw going and his eyes on the concrete and his mouth shut. Shut. She looked at his shut mouth the way he'd looked at hers in October with the door between them, as if it were the only thing in the room that could tell her what was true. And kept looking. And kept looking." },
          { ifFlag: 'eqx-hc-his-rule', then: [
            { n: "*If I ever hear you ask me to stay, I'll know it isn't you. Because you don't.* She'd said it on this floor's twin. She held on to it now like the rope." }
          ] },
          { ifFlag: 'eqx-hc-never-say', then: [
            { n: "*I'll never say it to you.* She'd promised him that. It turned out the promise went both ways, and she hadn't known it did until she heard it in his voice: they didn't say it to each other. That was the whole of them. Whatever said it, wasn't." }
          ] }
        ] },
        { t: "(Squeeze his hand three times.)", notes: 3, then: [
          { n: "She squeezed his hand. Three times. Not two. She felt him feel it, felt the count go into him through the bones of his fingers, *one, two, three*, Akihiko's number on the rope, the number that wasn't the knock; and his hand, which had gone to iron, squeezed back. Three." }
        ] }
      ] },
      { ifFlag: 'eqx-hc-floor-okay', then: [
        { n: "He stood between her and the dryer with his back to her, the way she'd seen people stand in front of a car. He was shaking. In the red his hands were fists at his sides." },
        { s: 'haechan', f: 'angry', t: "That wasn't me. You hear me? That wasn't me. You asked her. I didn't. I never asked her. *You don't get to be me.*" },
        { n: "The thing on the dryer tipped its hood at him, fondly, the way you'd look at a child stamping its foot. It didn't come apart. It didn't do anything. It hugged its knees and went back to humming, the loop, round and round, very contented, the way a guest is contented when the plate is set down in front of them." },
        { s: 'chenle', f: 'surprised', t: "Get out. Get out, get out, the floor's getting louder, it's not— it's *happy*, I don't like it, get out—" },
        { n: "He pulled her up by both arms. They went out of the door backward, the two of them, and he shut it behind them on the humming and held it shut with his whole weight while the yard light buzzed over their heads, and Solar stood on the cupped step in the mud and the snow with her hand over her own mouth, as if she could put the word back." }
      ], else: [
        { n: "Haechan stood up." },
        { n: "Slowly. His hand came out of hers one finger at a time, the way he'd taken it off a barstool in a kitchen in November, on purpose, each finger told. He stood in the middle of the room in his coat, between her and the dryer, and looked at the thing in the hood for the first time all hour. Right at it. At the dark where his face should have been." },
        { s: 'haechan', f: 'serious', t: "I want her to stay." },
        { n: "He said it out loud. In his own voice. Hoarse, cracked, two in the morning. Not to her. To it." },
        { s: 'haechan', f: 'serious', t: "I want it so bad I can't sleep. I want her here, every night, on the dryer, forever. I want her to pick me. I want her to pick here. I'm saying it. You hear me? I'm wanting it as loud as I've got." },
        { s: 'haechan', f: 'angry', t: "And you don't get to ask her for me. Nobody asks her for me. Not you. Not my voice. Not *me*. If she stays it's hers, and if she goes it's hers, and I'll stand in whatever doorway's left and I'll still want it, and I'll never once ask. That's mine. That's the only thing I've got that's mine. *You don't get to have it.*" },
        { n: "The thing in the hood looked at him for a long moment. Then it laughed, softly, his laugh, the one that went up at the end; and the laugh went on going up, higher than his ever went, thinner, until it wasn't a laugh but a kettle; and the hood fell back." },
        { n: "There was nothing in it. There had never been anything in it. The hoodie folded down onto the warm dryer like washing taken off a line, the sleeves last, slowly, the way a coat folds when you lay it down on a bed; and out of the neck of it, out of the dark where a throat should have been, flour poured. Fine and pale and endless. It ran down the front of the dryer and onto the floor in a soft heap and kept running, a long time, much longer than a hoodie could have held, until it lay in a drift round the base of the machine like snow round a post." },
        { n: "The dryer stopped. Mid-turn. The drum swung and hung. The recorder's red light went out. And the room was quiet in a way she had never once heard it be, in any year: not the red hush, not the room tone. Just a room. Nobody in it." },
        { s: 'fuuka', f: 'surprised', t: "...It's gone. The signal. It's just— Haechan-kun, it's just a room now. It sounds like a room." },
        { s: 'chenle', f: 'happy', t: "It sounds like *nothing*. It sounds like a room with nobody in it. That's the best thing I've ever heard. I'm going to cry on Fuuka." },
        { flag: 'eqx-hc-floor-held' },
        { n: "Haechan stood in the middle of it with his fists still closed. Then he looked down at the drift of flour round the dryer, and at his own shoes, which had some of it on them, and stepped back out of it, carefully, one foot, then the other, and wiped them on the concrete, and turned round, and looked at her on the floor." },
        { s: 'haechan', f: 'neutral', t: "...Was that okay? I didn't ask you. I said it to *it*. I'm not counting it. That's not a thing I said to you." },
        { n: "She couldn't answer. She was laughing, or something under laughing, on the floor of a fake laundry room at the bottom of the world with her hand over her mouth; and he looked at her doing it and his face went, all at once, the whole half inch and then the rest." }
      ] },

      { place: 'Gekkoukan High · Courtyard', time: 'The Red Hour', bg: 'eqx-courtyard-well-night', music: 'night', soft: true },
      { n: "Akihiko hauled them up the last of the rope hand over hand, braced on the paving, and when they came over the lip he didn't let go of the line until both their feet were on the stone. Then he looked at the stopwatch." },
      { s: 'akihiko', f: 'neutral', t: "One hour, six minutes, eleven seconds." },
      { ifFlag: 'eqx-hc-floor-okay', then: [
        { n: "He looked at their faces and didn't ask. He looked at Solar's hand still pressed to her own mouth. He coiled the line, slowly, carefully, the whole length of it, and said nothing, and the not saying it was the kindest thing anyone did for her that night." }
      ], else: [
        { n: "He looked at Haechan. Haechan looked back. There was flour on Haechan's shoes. Akihiko looked at that, and then at Haechan's face, and then he did a thing Solar had never seen him do with anybody but Shinjiro: he put out his fist, the taped one, low, without a word, and held it there." },
        { n: "Haechan looked at it for a second as if it were a trick. Then he bumped it with his own. Once." },
        { ifFlag: 'dead.shinjiro', then: [
          { s: 'akihiko', f: 'sad', t: "...He'd have made you something. After. He'd have stood in the kitchen and made you rice at two in the morning and told you not to make it a thing." },
          { s: 'haechan', f: 'neutral', t: "I'm not making it a thing." },
          { s: 'akihiko', f: 'neutral', t: "Good." }
        ], else: [
          { s: 'akihiko', f: 'neutral', t: "...Shinji's up. He said if you came back he'd make rice. If you didn't he'd make rice anyway. Go and eat it before he makes it a thing." }
        ] }
      ] },
      { dark: false },

      { place: 'Iwatodai Dorm · Laundry Room', time: 'Late Night', bg: 'iwatodaidorm-laundryroom-night', music: 'tender' },
      { n: "At two in the morning they were in the real one. She knew it was the real one because the chain was on, seated in its track all the way, and because the frost was on the little black window, and because when he switched the dryer on it took three tries, the way it always did in the cold, and thumped into its turn with a sound like a dog settling." },
      { n: "He didn't get up on it. He sat on the floor against it with his coat still on and his head back against the door of the drum, and she sat beside him, and for a long time neither of them said anything, which with him had always been the loudest thing." },
      { ifFlag: 'eqx-hc-floor-okay', then: [
        { s: 'haechan', f: 'neutral', t: "...It wasn't your fault. It was my voice. It was my voice saying the thing you've watched me not say for eight months. Of course you answered. I'd have answered." },
        { s: 'haechan', f: 'sad', t: "It's still down there. Happy. I could hear it humming all the way up the rope. I'll go back. Not tonight. I'll go back and sit another hour, and another one, as many as it takes. I'm good at sitting." },
        { s: 'solar', f: 'sad', t: "I said okay to it." },
        { s: 'haechan', f: 'neutral', t: "You said okay to me. Sort of. The wrong me. I'm choosing to be flattered. It's the only thing I can do with it at two in the morning." }
      ] },
      { ifFlag: 'eqx-hc-floor-okay', then: [
        { s: 'haechan', f: 'neutral', t: "So here's the real one. Me. On a real floor, with the chain on. You can check. I'll wait while you check." }
      ], else: [
        { s: 'haechan', f: 'neutral', t: "I said it. Down there. Out loud. To it." }
      ] },
      { s: 'haechan', f: 'neutral', t: "I want to say it to you now. Not asking. You know it's not asking. It's the weather report. I want you here. I want you. That's all. That's the forecast. It'll be the forecast tomorrow too." },
      { ifTaken: 'haechan', then: [
        { n: "He didn't look at her when he said the next thing. He looked at the frost on the window." },
        { s: 'haechan', f: 'neutral', t: "...And I know. About the other thing. I'm not blind and the walls in this building are made of paper. Not my call. It was never my call. I'm just telling you the weather on my side of the street." }
      ] },
      { n: "She looked at him. At the side of his face in the bulb light, the hood pushed back now, his hair wrecked from it. At the white line across his palm on his knee. At the receipts she knew were upstairs on the corkboard, a wall of them, one for every night since April, the ones he trusted. At the boy who'd climbed down a well in the dark with no light to find her, and had just stood up in front of his own voice and told it no." },
      { n: "He didn't ask her anything. He never did. He sat there with the forecast said and his hand open on the concrete between them, palm up, the way it had been on the dryer in April, and waited for nothing, and let her see him wait." },
      { route: [
        { t: "(Take his face in your hands. Kiss him. Then tell him it's yours: you're choosing this.)", route: 'romance', notes: 3, then: [
          { n: "She took his face in her two hands, cold from the Well, and turned it toward her, the way you'd turn a face toward a light, and kissed him on the floor of the laundry room at two in the morning with the dryer thumping behind his head; not the way you kiss someone to answer a question; the way you kiss someone because you've decided." },
          { n: "When she pulled back she didn't go far. Her forehead stayed on his." },
          { s: 'solar', f: 'neutral', t: "This is mine. I'm choosing it. Not because you want it. Not because anything asked. Because I do." },
          { n: "He didn't say anything for a long time. His eyes were shut. His hand had come up off the concrete and was flat on her back between her shoulder blades, not pulling, just there, the way you'd put a hand on a wall to be sure it was a wall." },
          { s: 'haechan', f: 'blushing', t: "...You can't just say things like that on a floor. People need warning. I need a— a count-in." },
          { s: 'solar', f: 'happy', t: "Five, six, seven, eight." },
          { n: "He laughed. It cracked in the middle and went up at the end, the real one, the one the thing in the Well had stolen and couldn't do right; and she heard the difference, she'd have heard it from across a stadium; and then he kissed her back, and it wasn't careful." }
        ] },
        { t: "I want you too. Out loud. That's mine to say, and I'm saying it.", route: 'romance', notes: 3, then: [
          { n: "She said it to the frost on the window, the way he said things to doors and towns and rivers, and then turned her head and said it again to him, in the low Korean of the other house, the one for hallways and the bottom of stairs, and then once more in English, so both of him had heard it." },
          { n: "He went completely still. The way he'd gone still in April, the first time, as if a bird had landed on him and he didn't want to be the reason it left." },
          { s: 'haechan', f: 'slight-surprise', t: "...That's not asking." },
          { s: 'solar', f: 'neutral', t: "No. It's the forecast." },
          { n: "He put his face in his hands. Then he took them away and put them on her instead, both of them, either side of her face, palms over her ears the way he'd held headphones on her on a roof in April, so the whole world went soft and far, and kissed her like a man putting down something he'd carried for a very long way." }
        ] },
        { t: "You're my person, Hyuck. In every world. But not like that. Not here.", route: 'friend', notes: 3, then: [
          { n: "She said it gently. She said it with her hand on his, on the concrete, so he'd have something to hold while it landed. She watched it land. It went in, she saw the exact place, under the breastbone; and his face did the small sideways thing at the jaw, once; and then something she hadn't expected. It settled." },
          { s: 'haechan', f: 'neutral', t: "...Not like that." },
          { s: 'solar', f: 'neutral', t: "Not this year. Not with everything. I don't want to be with you because a well's been asking us both to. I want you to be mine in the way that doesn't need a door." },
          { s: 'haechan', f: 'sad', t: "That's a really good speech. You should've given me a count-in." },
          { n: "He breathed out. Long. It shook at the end and he let it. Then he turned his hand over under hers and held on, palm to palm, the white line against her skin." },
          { s: 'haechan', f: 'neutral', t: "...Okay. Then I'll be the best person you've got. In every world. I'll be so good at it the boxer's going to file a complaint." },
          { s: 'haechan', f: 'neutral', t: "And I'll still want it. Just so you know. That doesn't switch off because you said a nice thing on a floor. It's the weather. You don't have to do anything about the weather." },
          { n: "She put her head on his shoulder. He put his cheek on her hair. The dryer turned. It was, she thought, the most honest thing anyone had ever done with her in a laundry room, and she'd done a lot in this one." }
        ] }
      ] },
      { ifRomance: 'haechan', then: [
        { place: 'Iwatodai Dorm · Haechan’s Room', time: 'Late Night', bg: 'haechan-bedroom', soft: true },
        { n: "He stepped over the fourth stair on the second flight. So did she. It didn't matter; by the third floor they'd stopped being quiet about anything, his back against his own door, then the door shut behind them, the lamp on under her gray T-shirt, the corkboard of receipts over the desk like a wall of tiny white windows. His coat on the floor. Hers. His hands cold from the Well under her sweater and then not cold, and her name against her throat in two languages, one after the other, and then neither, and the bed creaking once, so loudly that they both froze with their foreheads together and shook with not laughing for a full minute." },
        { n: "Then he kissed her again, slower, as if slow were the only way to be quiet and he'd decided he could live with that, and the lamp stayed on under the T-shirt, and nobody was counting anything." },
        { n: "She woke at six to gray light and frost on the window and him already awake beside her, on his side, watching her, the way he'd watched her in October all night to learn how she breathed. He didn't say good morning. He reached over her to the desk without sitting up, and took down the receipt from yesterday, and wrote on the back of it in pen, small, and put it in her hand." },
        { n: "It was the date. And under it, in his handwriting, the Korean on top and the English under: *She picked.*" }
      ], else: [
        { n: "They sat there until the frost on the little window went gray with the morning, his hand in hers on the concrete, neither of them talking, and at some point she fell asleep against his shoulder, and at some point he did too, and when she woke he'd put his coat over both of them and his head had tipped onto hers." }
      ] },

      { place: 'Iwatodai Dorm · Kitchen', time: 'Early Morning', bg: 'iwatodaidorm-kitchen', music: 'tender', soft: true },
      { n: "Somebody was in the kitchen at half past six." },
      { n: "Miseon. At the table, in a gray cardigan of Hanni's that was too big for her, with a cup of tea she wasn't drinking, sitting very straight at the very front of the chair so that nothing touched her back. The kettle had just gone. The window over the sink was white with frost. She'd been up a long time; you could tell from the tea." },
      { n: "She looked up when they came in. At Solar. Then past her, at Haechan in the doorway with his hair wrecked and the cold of the Well still coming off his coat." },
      { n: "She didn't say anything. She got up, slowly, carefully, the way they all got up now, one hand going back toward the seam and stopping before it got there. She went to the rice cooker. She filled a bowl. She came back and put it down on the table in front of the chair across from hers, and then, only then, with the bowl already there, said his name. The name that house used for him. The one the thing in the Well didn't know." },
      { n: "*You're thin.*" },
      { n: "Korean. Low. Plainly. To him. Not through a man at a gate. Not wrapped in a cloth. To his face, across a kitchen table at half past six in the morning, with rice in it." },
      { n: "Haechan stood in the doorway and didn't move. Solar watched it go into him like a hand pressed flat on the middle of his back. His face didn't do anything, for a long time, very loudly. Then he came and sat down in front of the bowl, and picked up the chopsticks, and his hands weren't steady." },
      { s: 'haechan', f: 'neutral', t: "...Thank you, Eomeonim." },
      { n: "Miseon nodded. She sat down again, at the front of her chair. She filled a second bowl, without being asked, and put it beside his, for Solar; and then she sat and watched them both eat, the way she'd watched in a kitchen at the bottom of a hill in another life, until the bowls were empty; and turned the ring on her right hand, once, all the way round; and didn't say anything else at all." },
      { ifEvent: 'eqx-1221', then: [
        { n: "Behind her, through the frost on the window, the yard. The bins. The back step, empty." }
      ], else: [
        { n: "Behind her, through the frost on the window, the yard. The bins. And on the back step, where Taejoon had stood it upside down on Saturday night with the soup poured out, Mrs. Oka's pot." },
        { n: "It was the right way up. Somebody had turned it over in the night. And it was full to the brim with something pale, and fine, and very even, that might have been frost, and wasn't." }
      ] },
      { n: "Haechan saw her see it. He didn't say anything. He got up, and went out of the back door, and stood on the step in his socks in the cold, and looked down into the pot for a long time; and then he took his phone out of his pocket and looked at the time on it, and put it away; and came back in, and shut the door, and put the chain on, and sat down, and finished his rice." }
    ] }
  ]
});
