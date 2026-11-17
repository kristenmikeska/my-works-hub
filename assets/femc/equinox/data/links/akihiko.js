/* Persona 3: Equinox · Akihiko Sanada · XVII The Star. Link data (femc-equinox-game.html). Format: link fields in
   assets/femc/game/core.js ("Links" header), scene lines in assets/femc/game/scene.js.
   Written: ranks 1–6 (rank 1 from 4/13, rank 2 from 4/21, both the Port Island pier after school; rank 2 branches on
   eqx-flour and eqx-golden-week). Ranks 7–15 still to write. Rank 3 (from 6/2, the pier in the rain; branches on eqx-bridge,
   eqx-snow-again, eqx-last-grain) records his ask: tally asks.akihiko (+ cakes / choose / asked), flags eqx-asked-akihiko,
   eqx-aki-gate-kiss. Rank 2 flags (nothing reads them yet): eqx-aki-strip,
   eqx-aki-lamp-kiss. Speaker without a portrait: fisherman.
   Shape: the stub fields from assets/femc/equinox/data/links.js (this file wins over the stub, core.js indexLinks).
   Solstice's ranks are shared memory here; nothing reads Solstice link standing.
   Written Nov 16: ranks 4–6 (ranks 1–6 now written; 7–15 still to write). No route is set yet (as ranks 1–3); romance beats
   read `close()` below: the romance route, or any of his kiss flags (AKI_KISS).
     Rank 4 (from 6/30, 'eleven seconds'): the pier (his hand stuck to the rail, the rest day), Port Island Seaside Park's
       beach at sunset (she goes under; a voice in the water; eleven seconds), the pier at dusk (the fisherman, or after
       eqx-incheon the empty pier), 1 a.m. text. Reads eqx-asked-akihiko and asks.akihiko (ifChoice), eqx-snow-again,
       eqx-incheon, ifBefore 7/27. Sets eqx-aki-shallows-kiss.
     Rank 5 (from 8/18, 'confirm or withdraw'): the empty pier (he turns at the second-to-last bollard: the saucer),
       Jaesang on the pier (after eqx-table-op; grieving version after eqx-equinox), the post box at Port Island Station
       (the program's answer, per asks.akihiko / eqx-asked-akihiko; after 9/1 it goes late), a summer storm, Haechan in the dorm hall with towels, his room
       (the strips on his wall). Sets eqx-aki-letter-hand / eqx-aki-letter-alone / eqx-aki-letter-kept, eqx-aki-room-kiss.
     Rank 6 (from 9/29, 'the warm door'): the pier in the first cold rain (Jaesang runs with him; before 10/23 only), the
       equinox strip, the warm door on the Doorstep (his ask floor: flag eqx-floor-akihiko, always set), Shinjiro's sheet
       (dead.shinjiro branches), the red hour together and the morning (Junpei on the stairs). Choice at the door:
       eqx-aki-door-come / eqx-aki-door-his / eqx-aki-door-hand, or the hidden-in-plain-sight ask "Don't go through it. Stay
       with me." = tally asked +1, cakes +1, flag eqx-asked-akihiko (the §14 Junpei condition, unmarked). Sets eqx-aki-woke
       (romance: waking up together) / eqx-aki-roof-dawn (friend: the roof).
   Written Nov 16 (round 3): ranks 7–8 (ranks 1–8 now written; 9–15 still to write).
     Rank 7 (from 10/28, 'seconds out'): the pier in the north wind (dead.shinjiro: he hasn't run since the steps, hand bare
       and no longer closing; alive: Shinjiro on the gate bollard timing him, "You eat?"), a second saucer on the
       second-to-last bollard, the run past it; Port Island boxing gym under the monorail (Kanda-san, 73, shuts at six for
       supper at the river house and gave Akihiko the key; Shinji's dented bench), the punch lesson ("a fist isn't holding"),
       Mitsuru's March column ("that's not an answer, that's an address"; branches on eqx-asked-akihiko / asks.akihiko),
       close() kiss at the ring post, two knocks on the gym's back door at 7:45 (not the red), station, 1 a.m. text 69:52.
       Sets eqx-aki-let-fly (she throws it and lets go; read by the 1 a.m. text, meant for 2/18 and his later ranks).
     Rank 8 (from 12/1, 'an inch'): the pier in sleet with four saucers walking up the bollards (they reach the gate in
       early March), the November tape (11/22 84:12; dead.aigis "A." / alive "NOTHING. AGAIN."; ifEvent eqx-persimmon TREE;
       ifEvent eqx-1221 a folded strip), his reflection's "hold on", his hand closing again on the rope (dead.shinjiro: first
       time since the steps), rank 6's door flags paid off (eqx-aki-door-come / -his / -hand), Jaesang walking Solji with
       his hand an inch off her back; the dorm stairs (Junpei opens his hand in three seconds); the roof: "an inch. Your call."
       ROUTE CHOICE (route line): romance ×3 (close the inch / the hidden ask "Stay. After March… Please." = tally asked +1,
       cakes +1, flag eqx-asked-akihiko / "I've been falling since the shuttle run") or friend ("best friend, in every year").
       Romance after: his room (cut away), Jaesang's 7 a.m. knock, Junpei's book line SANADA, BY LEE (SR.). Friend after:
       Junpei on the roof; Akihiko asks him to get his hand off "something big" (the 2/18 seed). ifRomance haechan: one line.
   Speaker without a portrait: (none new). Invented (round 3): Kanda-san and his gym; the saucers advancing a bollard a
   fortnight; Mitsuru's March list; Jaesang's 7 a.m. "a word". */
{
  // Akihiko's kiss flags (ranks 2–5). close(then, else): the romance route, or any of them.
  const AKI_KISS = ['eqx-aki-lamp-kiss', 'eqx-aki-gate-kiss', 'eqx-aki-shallows-kiss', 'eqx-aki-room-kiss'];
  const close = (then, els) => ({ ifRomance: 'akihiko', then, else: [{ ifCount: { of: AKI_KISS, min: 1 }, then, else: els || [] }] });
(window.FEMC_GAME_LINKS ||= []).push({
  id: 'akihiko', name: 'Akihiko Sanada', short: 'Akihiko', arcana: 'Star', numeral: 'XVII', from: 'Persona 3', kind: 'sees',
  romance: 'canon', maxRank: 15, starts: '4/8', lodging: 'dorm',
  cast: { fisherman: 'Old Fisherman' },
  home: { area: 'port', spot: 'Pier', slot: 'after', days: [1, 3, 5, 6],
          hint: 'Afternoons on the pier at Port Island, running until the light goes.' },
  ranks: [
    { after: '4/13', title: '1: overtime', place: 'Port Island · Pier', time: 'After School', music: 'tender', scene: [
      { bg: 'port-island-pier' },
      { n: "The pier at Port Island ran three hundred and twelve meters out into the bay, which Solar knew because Akihiko had told her, last May, with the pride of a man reporting a personal best that belonged to a pier. He was running it now. Out to the last bollard, a touch with the flat of his hand, back to the gate, a touch on the gatepost, out again, in the gray-gold of a spring afternoon that couldn't decide whether to rain, with the gulls lifting off the rail ahead of him and settling again behind him like he was a wave going through them." },
      { n: "He'd graduated. That was the part her body kept forgetting. He didn't have a club to be at after school anymore, or a school to be after, and he'd postponed the year abroad that was supposed to be the next thing, and so in the afternoons, it turned out, he came here and ran a pier until there was no light left to run it in. Mitsuru had told her where to find him in the voice she used for things she'd decided weren't her business and was making her business anyway." },
      { n: "She watched him do three lengths from the gate before he saw her. He saw her on the turn, the way he always saw things, all at once, and his stride broke for exactly one step, and then he came in faster than he'd gone out, which was so like him she nearly laughed." },
      { s: 'akihiko', f: 'happy', t: "You found me." },
      { s: 'solar', f: 'neutral', t: "Mitsuru found you. I just walked here." },
      { s: 'akihiko', f: 'neutral', t: "Same thing. She'd have sent you with a map if you'd let her." },
      { n: "He put his hands on his knees and breathed. There was a stopwatch on a lanyard round his neck, a cheap plastic one, yellow, the kind that came in a blister pack by the konbini register, and she looked at it, and he saw her look." },
      { s: 'akihiko', f: 'neutral', t: "The good one's... I don't know where the good one is. It's in another year. This one beeps. I hate it." },
      { choose: [
        { t: "(Hold your hand out for it.)", notes: 3, then: [
          { n: "She held her hand out. He looked at it for a second like he didn't understand what it was for, and then he did, and something in his shoulders came down an inch, and he lifted the lanyard over his head and put the stopwatch in her palm, still warm from his chest." },
          { s: 'akihiko', f: 'happy', t: "Gate to bollard and back. Don't go easy on me." },
          { s: 'solar', f: 'neutral', t: "I've never once gone easy on you." },
          { s: 'akihiko', f: 'happy', t: "Ha! That's true. That's actually true." }
        ] },
        { t: "You're still timing everything.", notes: 2, then: [
          { s: 'akihiko', f: 'neutral', t: "Somebody has to. Things don't stay the same length unless you watch them." },
          { n: "He said it like a joke. It didn't land like one, and he seemed to hear that, a beat late, and looked out at the water." }
        ] },
        { t: "(Sit on the bollard by the gate. Like the bench, in April.)", notes: 2, then: [
          { n: "She sat on the iron bollard by the gate with her bag in her lap, the way she'd sat on the end of the bench in the boxing club a year ago while he glared at a heavy bag he wasn't allowed to touch. He looked at her sitting there and she watched him recognize it, the shape of it, and decide not to say so." }
        ] }
      ] },
      { n: "She timed him. He ran it like he was angry at it. When he came back to the gate she read him the number and he made her read it again, and nodded, and filed it somewhere behind his eyes, and didn't say whether it was good, which meant it wasn't, which meant he'd run it again tomorrow until it was." },
      { n: "Up close he looked tired. Not run-tired. The other kind, the kind under the eyes that comes from lying awake listening. And his right hand was taped. Not for boxing. Just round the palm and the base of the fingers, three neat turns of white athletic tape, the way you'd tape a hand that had been holding something too hard for too long." },
      { choose: [
        { t: "What happened to your hand?", notes: 2, then: [
          { s: 'akihiko', f: 'neutral', t: "Nothing. It aches. It's fine." },
          { s: 'solar', f: 'neutral', t: "Akihiko." },
          { s: 'akihiko', f: 'serious', t: "...It closed. At the well. On your wrist. And afterward it didn't want to open. I had to think about it. *Open.* Like a first-year who's never made a fist." }
        ] },
        { t: "(Take his right hand. Turn it over.)", notes: 3, then: [
          { n: "She took his hand and turned it palm up in both of hers, the way he'd turned hers over in June to look at the wraps. He let her. He watched her do it with his jaw set, like somebody being examined by a doctor he didn't trust and had decided to be brave for." },
          { s: 'akihiko', f: 'serious', t: "...It closed. At the well. On your wrist. And afterward it didn't want to open. I had to think about it. *Open.* Like a first-year who's never made a fist." }
        ] }
      ] },
      { s: 'akihiko', f: 'neutral', t: "It's been doing it at night. I wake up and it's shut. Round nothing. I don't know what it thinks it's holding." },
      { n: "He flexed it, slowly, and the tape creased white across his knuckles, and he looked at it as if it belonged to someone else and he'd been asked to mind it." },
      { s: 'akihiko', f: 'neutral', t: "He went down. Haechan. He went down a rope in the dark with nothing in his hands, and I was at the top." },
      { s: 'akihiko', f: 'serious', t: "I'm not complaining. I saw him put his foot on it, after. The rope. Like he was keeping it from going anywhere. I'd have done the same thing." },
      { s: 'akihiko', f: 'neutral', t: "...I'd have done it first. I want that noted." },
      { choose: [
        { t: "Noted.", notes: 2, then: [
          { s: 'akihiko', f: 'happy', t: "Good. Somebody should be keeping score this year. Junpei's book doesn't count. Junpei's book is slander." }
        ] },
        { t: "You both pulled. That's the part I remember.", notes: 3, then: [
          { s: 'akihiko', f: 'blushing', t: "...Yeah." },
          { n: "He looked at the gulls, very hard, as if they'd said something, and his ears had gone red at the tips, and he said *yeah* again, quieter, to the bay, like he'd been holding it in his mouth for a week and had only just been allowed to put it down." }
        ] },
        { t: "It's not a race, Akihiko.", notes: 1, then: [
          { s: 'akihiko', f: 'serious', t: "Everything's a race. That's not me being dramatic. That's just what things are, when somebody can lose them." }
        ] }
      ] },
      { place: 'Port Island · Pier', time: 'Evening', bg: 'port-island-pier-night', soft: true },
      { n: "They walked out to the end of it together without running, which he never did, and leaned on the rail by the last bollard. The light went down behind the island in long bands of copper and gray. The water slapped the pilings below them. The old men who fished off the end had packed up already, all at once, earlier than they used to, Akihiko said; they used to stay till it was full dark. They didn't anymore. Nobody had told them anything. They just went home earlier." },
      { n: "He took a roll of white tape out of his pocket. Not the roll for his hand. A different one, half used, and stuck along it, one after another, were short strips, each with something written on it in his blunt square capitals, the way he'd once written her lap time on a strip and folded it into his wallet. He unrolled a length of it and held it out to her between two fingers, like evidence." },
      { n: "*4/7 — 60:00.* *4/8 — 60:01.* *4/9 — 60:02.* *4/10 — 60:03.* *4/11 — 60:04.* *4/12 — 60:05.*" },
      { ifAfter: '4/14', then: [
        { n: "And on. A strip a night, every night since, the roll fatter with them than she'd thought, each number one more than the one before, up to last night's, in the same blunt capitals, not one of them skipped." }
      ] },
      { s: 'solar', f: 'neutral', t: "What is this?" },
      { s: 'akihiko', f: 'serious', t: "The hour." },
      { s: 'akihiko', f: 'serious', t: "Last year I timed it. For months. From my window, every night. Sixty minutes. Never a second either way. You could set a clock by it. I did." },
      { s: 'akihiko', f: 'neutral', t: "This year it's a second longer every night." },
      { n: "He said it plainly, the way he'd read a split, and she felt it go down her back anyway, cold, a single drop of water going all the way down the spine under her blouse." },
      { choose: [
        { t: "A second's nothing. You could be off by a second.", notes: 2, then: [
          { s: 'akihiko', f: 'serious', t: "I'm not off. I've never been off. That's the only thing I'm good at that isn't hitting things." },
          { s: 'akihiko', f: 'neutral', t: "...And it's not one second. It's one second *every night*. That's a minute by June. By the autumn it's—" },
          { n: "He stopped doing the maths. She watched him stop, as if he'd come up against a wall in the dark and decided not to find out how high it went." }
        ] },
        { t: "Does anyone else know?", notes: 3, then: [
          { s: 'akihiko', f: 'neutral', t: "Mitsuru. She said *noted* and wrote it down and then she didn't sleep either, I heard her. Fuuka can't feel it. She says the hour feels like an hour." },
          { s: 'akihiko', f: 'serious', t: "And now you. That's it. I'm not putting it on a whiteboard. Hanni would make a rota for it." }
        ] },
        { t: "(Count the strips. Then count them again.)", notes: 2, then: [
          { n: "She counted them. She counted them again, because she always counted twice, and there were as many as there had been nights, and the number on the last one was still exactly that many seconds more than the number on the first, in a hand that didn't make mistakes." },
          { s: 'akihiko', f: 'neutral', t: "Yeah. I did that too. A lot." }
        ] }
      ] },
      { s: 'akihiko', f: 'neutral', t: "It's longer. Every night it's a little longer. Like it's... staying. A bit more each time. Like it doesn't want to go home." },
      { n: "He heard himself say it and didn't like it. She watched him not like it. He rolled the tape back up, carefully, the strips on the inside, and put it away in his pocket like something that might go off." },
      { n: "For a while neither of them said anything. The lamps along the pier came on one by one behind them, from the gate outward, and the last one, by their bollard, flickered twice before it caught, and he watched it the whole time, the way you watch a door you've been told not to open." },
      { n: "Then he took her wrist." },
      { n: "He did it without thinking, the way he always had after she ran, two fingers on the pulse, checking. A boxer's habit. He'd done it on the river a hundred times. *Ninety-two. You're fine. Again.* She knew the feel of it so well that for a second she didn't notice anything wrong." },
      { n: "His fingers didn't move off the pulse. They closed. Not hard. Just round, slowly, the whole hand, the taped one, until he was holding her wrist the way he'd held it at the lip of the well, and his thumb was pressed flat to the inside of it, and he wasn't counting anything." },
      { choose: [
        { t: "(Don't move. Let him notice on his own.)", notes: 3, then: [
          { n: "She didn't move. She stood at the rail with her wrist in his hand and watched the water and waited. It took him a long time. Then she felt him notice, all at once, a jolt through the hand like he'd touched a stove, and he looked down at it with real alarm, as if he'd found it on someone else." },
          { n: "He let go one finger at a time. The way he had in the courtyard. Like he was making himself." },
          { s: 'akihiko', f: 'sad', t: "...Sorry. It does that." },
          { s: 'solar', f: 'neutral', t: "I know." }
        ] },
        { t: "(Turn your hand and hold his back.)", notes: 3, then: [
          { n: "She turned her wrist in his grip until it wasn't a grip, until her fingers were through his and his tape was rough against her knuckles, and held on. He went very still. Then he breathed out, long, all the way down, and his hand stopped being a thing that was holding on and turned back into a hand." },
          { s: 'akihiko', f: 'blushing', t: "...That's not what I— I was checking your pulse." },
          { s: 'solar', f: 'happy', t: "What was it?" },
          { s: 'akihiko', f: 'blushing', t: "Fast. Very fast. I'm not saying why. I didn't count." },
          { n: "He didn't let go. He also didn't hold on. It was a different thing, and they both knew it was, and neither of them said what." }
        ] },
        { t: "Akihiko. You can let go.", notes: 2, then: [
          { n: "He let go at once, as if she'd said it in the red, and put the hand in his pocket, and looked at the water with his face very carefully empty." },
          { s: 'akihiko', f: 'sad', t: "I know. I know I can. That was never the problem." }
        ] }
      ] },
      { n: "They walked back down the pier in the dark with the lamps going over them one at a time. At the gate he stopped, the way he always stopped at a gate, and turned round, and she knew exactly what he was going to say before he said it, because he'd said it at the bottom of the river steps every evening for a year, with the small rise at the end that left a door open." },
      { s: 'akihiko', f: 'neutral', t: "Five tom—" },
      { n: "He stopped. In the middle of the word. She watched him take it back, physically, like a punch he'd thrown and caught with his other hand." },
      { s: 'akihiko', f: 'serious', t: "...No. Not like that. Your call. It's your call. I'm not going to be one more person deciding where you're supposed to be." },
      { s: 'akihiko', f: 'neutral', t: "I'm here. Mondays, Wednesdays, Fridays, Saturdays. Till the light goes. That's all. That's not a question." },
      { n: "It was a question. It was the most question she had ever heard a sentence be. He stood there with his taped hand in his pocket and his yellow stopwatch round his neck, being very careful not to ask her anything, as hard as he'd ever done anything in his life." },
      { choose: [
        { t: "Five. Tomorrow. I'm asking you.", notes: 3, then: [
          { s: 'akihiko', f: 'surprised', t: "...That's my line." },
          { s: 'solar', f: 'happy', t: "I know." },
          { s: 'akihiko', f: 'happy', t: "Ha! Five. Don't stretch without me." },
          { n: "He went off up the road toward the station at a jog he clearly hadn't decided on, and at the corner he turned round and ran backwards for three steps to look at her, and nearly went into a bicycle, and didn't seem to mind at all." }
        ] },
        { t: "(Hand him back the stopwatch. Keep your fingers on it a second too long.)", notes: 3, then: [
          { n: "She put the stopwatch back in his hand and didn't let go of it right away, so that for a second they were both holding a cheap yellow thing that beeped, in the dark, by a gate." },
          { s: 'akihiko', f: 'blushing', t: "...You keep it. Bring it back on Wednesday. Then I'll know you're coming. Without asking." },
          { s: 'solar', f: 'neutral', t: "That's cheating." },
          { s: 'akihiko', f: 'happy', t: "That's strategy. You'd know the difference if you boxed." }
        ] },
        { t: "Ask me properly. Like before.", notes: 2, then: [
          { s: 'akihiko', f: 'sad', t: "...No." },
          { s: 'akihiko', f: 'neutral', t: "Not this year. I asked every day last year and you said yes every day and then you went anyway. I didn't stop you. I want that on record too. I just held on." },
          { n: "He didn't say what holding on had been worth. He didn't have to. He nodded at her, once, and went off up the road at a walk, his right hand still in his pocket, and she knew without seeing it that it was closed." }
        ] }
      ] },
      { n: "That night she lay in her room with the lights out and her phone on her chest and watched the clock on it go to midnight, and the red came up through the window like a stain through a sheet, and she counted, because he'd made her into someone who counted." },
      { n: "She got to sixty minutes. She kept going. She got one second past the last strip on his roll before the lights came back on, all at once, street by street from the bay inward." },
      { n: "On the floor above her, someone set something down on a desk very carefully, the way you'd set down a pen after writing a number you didn't want to have written." }
    ] },
    { after: '4/21', title: '2: split times', place: 'Port Island · Pier', time: 'After School', music: 'tender', scene: [
      { bg: 'port-island-pier' },
      { n: "He was already running when she got there, which she'd known he would be, and he saw her at the gate from the far end of the pier, three hundred meters off, and didn't stop or wave or do anything at all except change, very slightly, the line he was running on, so that he'd finish at the gate instead of the bollard. She watched him come. She'd forgotten what it was like to watch him come toward her at a run. Last year she'd watched it so often it had stopped being anything, and now it was something again, all of it, the arms and the breathing and the gray shirt dark down the spine." },
      { n: "He pulled up a meter from her with his hands on his hips and his chest going, and his face did the thing it did, the whole year of it at once, and then he made it stop." },
      { s: 'akihiko', f: 'happy', t: "Fifty-eight. Gate to bollard and back. That's a second off Monday." },
      { s: 'akihiko', f: 'neutral', t: "...You came on a Wednesday. Or a Friday. Whatever this is. I didn't ask you to. I want that noted." },
      { choose: [
        { t: "(Hold out the yellow stopwatch.)", notes: 3, then: [
          { n: "She held it out on her palm. The cheap yellow konbini one, with its chipped corner and its beep. He looked at it and then at her, and didn't take it straight away; he looked at it the way he'd looked at the strip of tape with the first number on it, as if it were a result." },
          { s: 'akihiko', f: 'blushing', t: "You brought it back." },
          { s: 'solar', f: 'neutral', t: "You told me to." },
          { s: 'akihiko', f: 'happy', t: "I told you to *if you were coming.* That's different. That's you deciding. I just supplied the stopwatch." }
        ] },
        { t: "Noted. Now time me.", notes: 3, then: [
          { s: 'akihiko', f: 'happy', t: "Ha! Yeah? Okay. Okay. Gate to bollard, touch it, back. Don't pace yourself, it's three hundred meters, pacing's for cowards and people over thirty." }
        ] },
        { t: "You didn't ask. You just ran here three times a week until I showed up.", notes: 2, then: [
          { s: 'akihiko', f: 'neutral', t: "I run here three times a week because it's three hundred and twelve meters and nobody's on it. You showing up is a separate statistic." },
          { n: "He said it with great dignity and then ruined it by grinning, wide, at the ground." }
        ] }
      ] },
      { n: "She ran it. She hadn't run properly since the Well; she found that out at about the eightieth meter, when her lungs filed a formal complaint and her legs started discussing it among themselves. The pier went by under her, gray boards and black gaps and the sea moving underneath, and the bollard at the end came up rusted and squat and huge, and she slapped it with her whole palm and turned and saw him at the gate, small, with the stopwatch up, not looking at it, looking at her." },
      { n: "She came in wrecked. He caught her by the elbow when she pulled up, not hard, just enough, and let go the second she had her feet." },
      { s: 'akihiko', f: 'happy', t: "One-oh-nine. That's good. That's actually good, for somebody who spent the winter at the bottom of a hole." },
      { s: 'solar', f: 'flustered', t: "I spent the winter in three different countries." },
      { s: 'akihiko', f: 'neutral', t: "Exactly. None of which had a pier. I'm making allowances." },
      { n: "They walked it after, slowly, out to the end and back, the way he always walked a run off, with his hands laced on top of his head and his elbows out. The light was going gold on the water. At the far end, where the old men used to fish in a row on their upturned buckets, there was one old man, alone, with a blue cool box and a line in the water and a radio on low playing a baseball game." },
      { n: "Last week there'd been five." },
      { s: 'akihiko', f: 'neutral', t: "He's the last one. The others go home before four now. That one stays till five. I asked him why the others go. He said it gets cold. It doesn't get cold. It's April." },
      { choose: [
        { t: "(Go and ask him yourself.)", notes: 2, then: [
          { n: "She went over. The old man looked up at her from under the brim of a cap so old its logo had worn back into the cloth, and turned his radio down, politely, and looked at Akihiko behind her, and nodded at him the way you'd nod at a weather report you'd come to rely on." }
        ] },
        { t: "Ask him again. Nicely this time.", notes: 2, then: [
          { s: 'akihiko', f: 'neutral', t: "I asked nicely. I always ask nicely." },
          { s: 'solar', f: 'neutral', t: "You asked like you were about to take his blood pressure." },
          { s: 'akihiko', f: 'blushing', t: "...Fine. You ask him." }
        ] }
      ] },
      { s: 'fisherman', t: "Hm? The others? Oh, there's a widow on the river side does supper now. Big house. Old one. You'd know it, it's got a persimmon tree you could hang a boat on." },
      { s: 'fisherman', t: "Hayashi went first, the week before last. She asked him to stay for a bite, he said why not. Then he took Kondo. Now the lot of them are round there by four every day. Eating like boys. Hayashi's put on two kilos. Says it's the rice cakes." },
      { n: "He laughed, short and dry, and reeled in a little, and let out again." },
      { s: 'fisherman', t: "She asked me too. Stood at the end of the pier with a tin under her arm, nice as you please, asked if I wouldn't rather be somewhere warm. Sweet woman. Very sweet." },
      { s: 'fisherman', t: "I told her no. I said I've been on this pier thirty years, the fish know my face. She said that was a shame. She said she'd keep asking." },
      { n: "He said it as if it were a joke between him and the woman, a pleasant one, and turned his radio back up, and the crowd on it roared about something that had happened in the third inning, far away, in another city." },
      { n: "On the walk back Akihiko didn't say anything for a long time. Then he said, to the gate, not to her," },
      { s: 'akihiko', f: 'serious', t: "Every old man on this pier said yes but one, and the one who said no is the only one who's still here when I run." },
      { s: 'akihiko', f: 'neutral', t: "That's not a thing. That's a coincidence. I'm just saying it out loud so I can hear how stupid it sounds." },
      { s: 'akihiko', f: 'neutral', t: "...It sounds less stupid out loud. I hate that." },

      { place: 'Port Island · Pier', time: 'Evening', bg: 'port-island-pier-night', soft: true },
      { n: "They sat on the sea wall by the gate with their legs over the drop while the sky went from gold to the long blue that came before dark. He'd taken the roll of tape out of his bag, the white strips with the numbers on, and he was flattening it on his knee, not to show her, just to have his hands doing something." },
      { ifEvent: 'eqx-flour', then: [
        { n: "The strips ran on past where she'd seen them last. 60:16. 60:17. 60:20. And then, two nights later, in the same square capitals, pressed harder, 60:33, with a line drawn under it so heavy it had torn the tape." },
        { s: 'akihiko', f: 'serious', t: "Thirteen seconds. In two nights. One a night for three weeks, like a clock, and then thirteen, the night that man died." },
        { s: 'akihiko', f: 'serious', t: "Mitsuru wrote it down without saying anything, which is how I know she thinks the same thing I do. Something got fed, and it grew." },
        { s: 'akihiko', f: 'neutral', t: "It's never gone back to one since. Some nights two. Some nights nothing. As if it's not hungry yet." }
      ], else: [
        { n: "The strips ran on past where she'd seen them last. 60:12. 60:13. 60:14. One a night, every night, in the same square capitals, as steady as a pulse." },
        { s: 'akihiko', f: 'neutral', t: "It hasn't missed. Not once. One second a night, every night, since the seventh. Fuuka still can't feel it. Mitsuru writes it down without saying anything, which is how I know she's scared." },
        { s: 'akihiko', f: 'serious', t: "Something that grows one second a night isn't weather. Weather doesn't keep time. Something's *keeping time*." }
      ] },
      { choose: [
        { t: "What happens when it stops being one?", notes: 2, then: [
          { s: 'akihiko', f: 'serious', t: "Then I'll know something changed. That's the whole point of counting. You don't count because you can stop it. You count so you'll know the minute it's different." },
          { s: 'akihiko', f: 'neutral', t: "...Shinji says that's the most me thing I've ever said. He didn't mean it nicely. He's right anyway." }
        ] },
        { t: "(Take a strip and stick it to your own wrist. Count with him.)", notes: 3, flag: 'eqx-aki-strip', then: [
          { n: "She tore a fresh strip off the roll and wrote tonight's date on it with his pen and stuck it round her own wrist like a hospital band. He watched her do it and his mouth went soft at one corner and stayed that way." },
          { s: 'akihiko', f: 'blushing', t: "You'll have to fill the number in at one. Not before. Not a guess. A count." },
          { s: 'solar', f: 'neutral', t: "I know how counting works, Akihiko." },
          { s: 'akihiko', f: 'happy', t: "You know how *my* counting works. That's newer." }
        ] }
      ] },
      { n: "He'd been working the end of the tape on his right hand with his thumb the whole time. The hand-tape. It was gray at the knuckles and coming up at one edge, and she watched him pick at the edge, and pick at it, and saw the fingers under it twitch, all four, very slightly, toward the palm, and stop." },
      { s: 'solar', f: 'neutral', t: "Is it still doing it? At night?" },
      { s: 'akihiko', f: 'neutral', t: "...Every night. I wake up and it's shut. Round nothing. Tight, like there's a wrist in it. Once I had to use the other hand to get it open." },
      { s: 'akihiko', f: 'sad', t: "I dream about the mouth. The well. Your arm coming up out of it, and his hand on your other wrist, and both of us pulling. That's not the bad part. The bad part is in the dream I let go. Every night. I open my hand and you go back down." },
      { s: 'akihiko', f: 'serious', t: "And I wake up with it shut so hard it hurts. So I don't know which of me is the one who's wrong. The one who lets go, or the one who won't." },
      { choose: [
        { t: "(Unwind the tape. Rewrap his hand yourself.)", notes: 3, then: [
          { n: "She took his hand into her lap without asking and found the end of the tape and unwound it, round and round, and he let her, sitting very still on the sea wall with the dark coming down, and the hand came out of it pale and a little damp and creased from the wrapping, the knuckles still scabbed from the fire stairs." },
          { n: "She wrapped it again from the roll in his bag. She'd learned how last year, sitting on a bench in the boxing club with his whole hand in her two, him teaching her, *over the knuckle, under, keep it flat, not too tight or it goes to sleep*. Her hands remembered. She did it slowly. He watched her do it and didn't breathe right, she could hear it, and when she pressed the last strip flat with her thumb across the back of his hand he turned it over in her lap, palm up, and closed it, gently, round two of her fingers. Not tight. Just enough." },
          { s: 'akihiko', f: 'blushing', t: "...There. That's what it wants. That's all it wants. I just can't give it that at three in the morning." }
        ] },
        { t: "Neither one is wrong. They're both you.", notes: 3, then: [
          { s: 'akihiko', f: 'surprised', t: "...Both of me." },
          { s: 'akihiko', f: 'neutral', t: "Your other one talks like that. The one with two of himself. I thought it was a thing he did to annoy me." },
          { s: 'akihiko', f: 'happy', t: "It's still annoying. It's a bit less stupid than I said it was." }
        ] },
        { t: "You could stop dreaming you let go. If you wanted.", notes: 1, then: [
          { s: 'akihiko', f: 'serious', t: "No. I couldn't. And I wouldn't want to. That's the one part of the dream that's right." },
          { s: 'akihiko', f: 'neutral', t: "You weren't mine to keep up there. You're not now. The dream knows that. It's my hand that doesn't." }
        ] }
      ] },
      { ifEvent: 'eqx-golden-week', then: [
        { s: 'akihiko', f: 'neutral', t: "For the record, I won the frisbee thing at the beach. Whatever he's telling people." },
        { s: 'solar', f: 'neutral', t: "He's telling people it was a draw." },
        { s: 'akihiko', f: 'happy', t: "Ha! It was a draw. I'm still saying I won. He'd do the same. That's the only thing about him I respect, and I'm not saying which thing it is." }
      ], else: [
        { s: 'akihiko', f: 'neutral', t: "He goes down to the laundry room every night. Your other one. I hear him on the stairs at half eleven. I'd say something, but he'd only say something back, in two languages, and I'd lose in both." },
        { s: 'akihiko', f: 'happy', t: "I'm not jealous. I want that on record too. I'm keeping a lot of records lately." }
      ] },
      { n: "It was dark now. Properly. The lights of the far shore had come on, the monorail going over the water like a lit thread, and the old man at the end of the pier had packed his cool box and gone, last, past them, and touched his cap to Akihiko on the way and said *same time Friday* as if it were a deal between them." },
      { n: "Akihiko stood up and held out his good hand to pull her up off the wall, and she took it, and he pulled, and she came up a little too fast, and they were very close, at the gate, under the one working lamp, and his hand hadn't let go of hers and he'd noticed it hadn't and was visibly trying to work out whose decision that was." },
      { s: 'akihiko', f: 'blushing', t: "...Your call. I'm saying that a lot this year. I'm practicing." },
      { choose: [
        { t: "(Kiss him under the lamp.)", notes: 3, flag: 'eqx-aki-lamp-kiss', then: [
          { n: "She went up on her toes and kissed him, and he made a sound like a man taking a punch he'd seen coming and decided not to block, and then his hands came up, both of them, the taped one and the bare one, and held her face very carefully, as if it were a result he wanted to check twice." },
          { n: "He kissed like he ran. All of it, at once, nothing held back for the second half, and she had to put her hand flat on his chest to keep her balance and felt his heart going under it like he'd done the pier three times. When he stopped he didn't step back. He put his forehead down against hers and laughed, once, helplessly, out of breath." },
          { s: 'akihiko', f: 'blushing', t: "That's. Okay. That's a personal best. I'm not writing that one down." }
        ] },
        { t: "(Let go of his hand. Then take it back. Your call.)", notes: 3, then: [
          { n: "She let go. His hand stayed out in the air where hers had been for one second, open, and he didn't close it, and didn't reach, and she saw how much that cost him in his jaw. Then she took it back. He looked down at their hands and then at her and his whole face went, all of it, the year, and he didn't make it stop this time." },
          { s: 'akihiko', f: 'happy', t: "...Yeah. Like that. That's how it's supposed to go." }
        ] },
        { t: "Walk me to the station. Five tomorrow?", notes: 2, then: [
          { s: 'akihiko', f: 'surprised', t: "You said five. Not me. You heard that. I didn't say five." },
          { s: 'akihiko', f: 'happy', t: "Five. Don't stretch without me." }
        ] }
      ] },
      { n: "He walked her to the station. At the gates he took the stopwatch out of his pocket, the yellow one, and pressed it once, to zero, and put it in her blazer pocket without asking, and walked away before she could give it back." },
      { n: "On the train she put her hand in her pocket and found it there, and found that he'd stuck a strip of white tape across the back of it, and written on the tape in his square capitals, very small, not a time. A date. Tomorrow's." }
    ] },
    { after: '6/2', title: '3: the letter', place: 'Port Island · Pier', time: 'After School', music: 'tender', scene: [
      { bg: 'port-island-pier' },
      { n: "It was raining on the pier, the fine gray June rain that didn't so much fall as hang about, and he was running in it anyway, because of course he was, and he was the only thing moving on the whole three hundred and twelve meters except the gulls, who had given up and were sitting in a sulking row along the rail with their feathers puffed out." },
      { n: "Nearly the only thing. At the far end, under a big green fishing umbrella lashed to the last bollard with twine, the old man was still there. The last one. Bucket, radio, cap. He lifted two fingers off his rod at Solar as she came through the gate, as if she were a regular now, which she supposed she was." },
      { n: "Akihiko came in at the gate end with the rain running off his chin and stopped the yellow stopwatch with his thumb and looked at it, and then at her, and his whole face went, and he made it stop, which he'd got better at, and which she'd started to wish he wouldn't." },
      { s: 'akihiko', f: 'happy', t: "Fifty-six. In the wet. That's two off April. Don't tell anyone, they'll want a rematch." },
      { s: 'solar', f: 'neutral', t: "Who'd want a rematch? You're racing yourself." },
      { s: 'akihiko', f: 'neutral', t: "Exactly. And he's a sore loser." },
      { choose: [
        { t: "(Hold your umbrella over him.)", notes: 3, then: [
          { n: "She stepped in and held her umbrella over him, which meant holding it very high, because he was very tall and she was not, and he looked up at the inside of it and then down at her with an expression of complete bafflement, like a dog being offered a hat." },
          { s: 'akihiko', f: 'blushing', t: "...I'm already wet. That's the most wet I can get. You're just making yourself wet as well." },
          { s: 'solar', f: 'neutral', t: "I know." },
          { n: "He didn't argue after that. He stood under it, dripping on her shoes, and let her hold it, and she felt him decide not to take it off her, which for him was a whole sentence." }
        ] },
        { t: "Time me. In the wet.", notes: 3, then: [
          { s: 'akihiko', f: 'surprised', t: "In this? You'll go over on the boards." },
          { s: 'solar', f: 'neutral', t: "Then catch me." },
          { n: "She ran it. She didn't go over. She came in at one-oh-four, five off April, soaked to the skin, and he'd run beside her the last fifty meters without being asked, just off her shoulder, not pacing her, just there, the way he'd been there at the mouth of the Well, and he was laughing when she pulled up, the real laugh, the one from a year ago." },
          { s: 'akihiko', f: 'happy', t: "One-oh-four! That's— that's a real time. That's a time a person could be proud of." }
        ] }
      ] },
      { n: "They sat on the bench under the ticket office's overhang, which kept off about half the rain, with a towel from his bag over both their heads like a tent, and he took the roll of white tape out of his inside pocket, where he kept it dry now, and unrolled a length of it across his knee so she could read the strips." },
      // CG: eqx-under-the-towel — a rainy gray pier, a tall silver-haired young man and a girl sitting on a bench under a ticket-office overhang with one towel over both their heads, a roll of white tape unrolled across his knee, his taped hand resting palm-up near her wrist.
      { ifBefore: '6/18', then: [
        { n: "Sixty-one fifteen. Sixty-one fifteen. Sixty-one sixteen. Sixty-one sixteen. A second some nights, nothing on others, in his square small capitals, one strip a night, each dated." },
        { s: 'akihiko', f: 'neutral', t: "It's slowed down. After April. After it jumped. Some nights it's not hungry, I think. And then it is." },
        { s: 'akihiko', f: 'serious', t: "I don't like that I said *hungry*. I don't know where that came from. It's a clock." }
      ], else: [
        { n: "Sixty-one forty-one. Sixty-one fifty-eight. A whole seventeen seconds in one night in June, the night of the bridge, and after it the numbers kept climbing in their small square capitals, a second here, two there, sixty-two and change, one strip a night, each dated." },
        { n: "Under the bridge night there was a second strip. He'd taken that one off the roll and folded it over on itself, sticky side to sticky side, so it couldn't be read, and he saw her see it, and put his thumb on it." },
        { s: 'akihiko', f: 'serious', t: "Don't. Not that one. I wrote a word under it and I'm not sure I meant it. When I'm sure, you can have it." }
      ] },
      { n: "He rolled it back up. His right hand was taped, the way it always was now, and he did it left-handed, which he was bad at, and she watched the right one lie on his knee while he worked, and watched its fingers, very slowly, curl." },
      { n: "Not into a fist. Round something. Round nothing, the shape of a wrist, a little wrist, hers." },
      { s: 'akihiko', f: 'sad', t: "...Yeah. It's doing that in the daytime now. Since last week. I'll be holding a cup and look down and it's holding something else." },
      { ifEvent: 'eqx-bridge', then: [
        { s: 'akihiko', f: 'neutral', t: "On the bridge. When you said her name and the music stopped. It closed on you before I'd decided anything. I'd have pulled your arm off to get you off that bridge. I'm not sorry. I'm telling you so you know what it does without me." }
      ] },
      { ifEvent: 'eqx-snow-again', then: [
        { s: 'akihiko', f: 'neutral', t: "Your other one and I have an arrangement. Since the snow. If mine closes on you and I can't open it, he takes it off. One finger at a time. He's agreed." },
        { s: 'akihiko', f: 'serious', t: "I've never hated somebody I trusted this much. It's very confusing. I'd like it to stop." }
      ], else: [
        { s: 'akihiko', f: 'neutral', t: "Your other one nodded at me on the stairs last night. Half eleven, on his way down to his dryer. I nodded back. That's diplomacy. We're very advanced." }
      ] },
      { choose: [
        { t: "(Take the hand. Open it, one finger at a time.)", notes: 3, then: [
          { n: "She took it in both of hers and opened it, finger by finger, the way he'd done in April on the pier, and he let her, and watched her do it with his jaw tight, and each finger went flat on her palm and stayed there, and when she'd done all four and the thumb he let out a breath like he'd been holding a plank over his head for an hour." },
          { s: 'akihiko', f: 'blushing', t: "...You're better at that than I am." }
        ] },
        { t: "(Put your wrist in it. Let it close.)", notes: 3, then: [
          { n: "She put her wrist into the curl of his fingers. They closed. Not hard. Exactly the size of it, as if they'd been measured. He stared at his own hand on her, and his face went white and then red, and he didn't let go, and she didn't make him, and they sat there under the towel with the rain coming down and his hand round her wrist like a bracelet." },
          { s: 'akihiko', f: 'serious', t: "...Don't do that. Don't make it feel like it's right. It's not right. It's just what it wants." }
        ] }
      ] },
      { n: "He took a letter out of his bag. It had been in there a while; the corners had gone soft, and there was a ring on the back from a bottle of water, and it had been opened and read and folded back into its envelope so many times that the fold had worn white." },
      { n: "Foreign stamps. A coach's name she half recognized from a poster on the boxing club wall last year. A training program, a place held, a year abroad that should have started in April and hadn't. They'd held it. They'd hold it till next spring. They'd like to know, please, by the end of the summer, whether he was coming." },
      { s: 'akihiko', f: 'neutral', t: "I told them I had a family thing. Which is true. It's the biggest family thing anyone's ever had. There's thirty-odd of us and a dog." },
      { s: 'akihiko', f: 'neutral', t: "They want an answer. By the end of August. Confirm or withdraw." },
      { s: 'solar', f: 'neutral', t: "And?" },
      { s: 'akihiko', f: 'serious', t: "And I'm not going." },
      { n: "He said it at once and very simply, as if he'd been saying it to himself every morning on this pier and had got it down to its fewest words. Then he turned on the bench to face her under the towel, with the rain on his eyelashes and his taped hand round her wrist, or open on her palm, either way still touching her." },
      { s: 'akihiko', f: 'serious', t: "I let go once. At the mouth. You went down and I was at the top and I let go, because it was your call, and it was the right thing, and I've dreamed about it every night since." },
      { s: 'akihiko', f: 'neutral', t: "I'm not doing it again. Whatever happens. Wherever you go when this is over. If there's a door, if there's a rope, I'm holding on this time. I'll write them no and I'll hold on." },
      { s: 'akihiko', f: 'sad', t: "...I'm not asking you to do anything. I just want you to tell me that's all right. That's all. Tell me I'm allowed to hold on." },
      { n: "The rain ticked on the overhang. Down at the far end of the pier, the old man's radio was playing the crowd from some ballgame, very small, a roar the size of a thumbnail. His hand on her was warm and heavy and would not have opened now if she'd asked it to; she could feel that. It wanted her to say one thing. It was asking her very nicely." },
      { choose: [
        { t: "It's all right. Hold on.", notes: 3, tally: { cakes: 1, 'asks.akihiko': 'yes' }, then: [
          { n: "His face went, all of it, the whole year, and he didn't make it stop. He laughed, once, helplessly, and put his forehead down on her shoulder under the towel, and she felt him shaking, and it took her a second to understand that it was relief." },
          { s: 'akihiko', f: 'blushing', t: "...Okay. Okay. Thank you. I'm writing that down. I'm not writing it down. I'm going to remember it so hard I won't need to." },
          { n: "He kissed the inside of her wrist, where his fingers were, quickly, as if it were an accident, and sat back. His hand didn't open. He didn't seem to notice. Neither, for a long time, did she." }
        ] },
        { t: "Stay. Please. Write them no.", notes: 3, tally: { asked: 1, cakes: 1, 'asks.akihiko': 'yes' }, flag: 'eqx-asked-akihiko', then: [
          { n: "He went completely still. He looked at her as if she'd hit him, and then as if she'd caught him, and both at once, and she watched it go all the way through him, from his face down, into his hand, which closed on her wrist the last quarter inch and stayed." },
          { s: 'akihiko', f: 'surprised', t: "...You asked." },
          { s: 'akihiko', f: 'blushing', t: "You've never. Not once. Not last year, not at the mouth. Everybody asks you and you never ask anybody, and you asked me." },
          { n: "He kissed her. Under the towel, in the rain, with the gulls watching, hard and grateful and not careful at all, his free hand at the back of her neck, and when he stopped he was grinning so wide it looked like it hurt." },
          { s: 'akihiko', f: 'happy', t: "No. That's what I'll write. One word. They'll think I've gone mad. I have." }
        ] },
        { t: "Don't hold on for me. Go next spring.", notes: 2, tally: { 'asks.akihiko': 'no' }, then: [
          { s: 'akihiko', f: 'sad-2', t: "...Right." },
          { n: "He let go. He did it the way he'd done it in April, one finger at a time, prying them off her himself with his left hand, and it was slower this time, and each one came off her like a strip of tape off skin, and when the last one came away he put the hand in his pocket and kept it there." },
          { s: 'akihiko', f: 'neutral', t: "You're probably right. You usually are. I'll think about it." },
          { s: 'akihiko', f: 'sad', t: "...That's a lie. I'm not going to think about anything else. But I'll be polite about it." }
        ] },
        { t: "That's yours to decide. Your letter, your hand. Where I go is mine.", notes: 2, tally: { choose: 1, 'asks.akihiko': 'choose' }, then: [
          { n: "He didn't say anything. He looked at her for a long time under the towel, and she watched it land, and she watched him not like it, and not like that he didn't like it." },
          { s: 'akihiko', f: 'serious', t: "...That's what I said to you. In April. On this pier. *Your call.* I hate hearing it back. It's much worse from this side." },
          { n: "He looked down at his hand on her. Then, slowly, with his jaw set as if he were lifting something with it, he opened it himself. Not one finger at a time. All at once, the way you'd open a door you were afraid of, and it cost him, she could see it cost him, there was sweat at his temple under the rain." },
          { s: 'akihiko', f: 'neutral', t: "Mine. Okay. Mine. I'll have to think, then. I've been trying very hard not to." }
        ] }
      ] },
      { n: "He put the letter back in his bag, in the dry pocket, with the tape. The rain had eased to almost nothing, the kind you only saw against something dark, and the gulls had stood up along the rail and were shaking themselves like old men getting up from a bench." },
      { ifEvent: 'eqx-last-grain', then: [
        { s: 'akihiko', f: 'neutral', t: "Ken called me. That morning. Not Mitsuru. Me. In a perfectly clear voice, he said, *Akihiko-senpai, please come to the river street, please don't bring Junpei-senpai.* And I went." },
        { s: 'akihiko', f: 'sad-3', t: "I ran there. I've never run anywhere that fast. I don't remember any of it. I don't remember the bridge or the hill. I just remember I'd have done it in the opposite direction if he'd asked." },
        { n: "He looked at the end of the pier, where the old man sat under his green umbrella, the last one, who had said no." },
        { s: 'akihiko', f: 'serious', t: "He's still here. Every day. He told me she's stopped asking him. He seemed a bit hurt about it." }
      ], else: [
        { s: 'akihiko', f: 'neutral', t: "He's still here. The fisherman. Every day. The others haven't come back to fish since May. I saw Hayashi on the strip on Sunday, he looked very well. Rosy. I said *good afternoon* and he looked at me like he couldn't place where he knew me from." },
        { s: 'akihiko', f: 'serious', t: "...That's a coincidence too. I've got a lot of those now. I keep them in the same pocket as the tape." }
      ] },
      { n: "He walked her to the station. The rain had stopped by the gates, properly stopped, the way it did here in daylight, from the edges in, and the platform was full of salarymen shaking out umbrellas like a flock of something landing." },
      { s: 'akihiko', f: 'blushing', t: "...Same time Friday. If you want. I'm not asking. I'm informing you of the existence of Friday." },
      { choose: [
        { t: "(Kiss him at the gates.)", notes: 3, flag: 'eqx-aki-gate-kiss', then: [
          { n: "She kissed him at the gates, in front of every salaryman on Port Island, and he went red to the collar and kissed her back anyway like a man who'd decided long ago that if he was going to lose a fight he'd lose it standing up, and someone behind them tutted, and he laughed into her mouth." },
          { s: 'akihiko', f: 'happy', t: "That's two personal bests in one day. I'm going to have to retire." }
        ] },
        { t: "Friday. Bring a dry towel this time.", notes: 2, then: [
          { s: 'akihiko', f: 'happy', t: "I brought a dry towel this time. You got it wet. That's on the record too." }
        ] }
      ] },
      { n: "On the train, she found she was rubbing the inside of her wrist with her thumb, where his fingers had been. There was no mark. She looked. There was never a mark. It just felt, for the whole ride home, as if there should have been." }
    ] },
    { after: '6/30', title: '4: eleven seconds', place: 'Port Island · Pier', time: 'After School', music: 'tender', scene: [
      { bg: 'port-island-pier' },
      { n: "The rainy season was ending the way it always ended here, not all at once but in a long sulk, a week of white skies that rained for an hour at a time and then steamed, so that the boards of the pier were never quite wet and never quite dry and the whole of Port Island smelled of hot wood and salt and something green rotting pleasantly under the pilings. The gulls had stopped sulking. They stood along the rail with their beaks open, panting, which Solar hadn't known gulls could do." },
      { n: "Akihiko wasn't running. That was the first wrong thing, and she saw it from the gate before she saw anything else: the whole three hundred and twelve meters of the pier empty and shining, and him at the near end of it by the railing with his right hand on the top rail and his left hand on his hip, very still, looking out at the bay like a man waiting for a bus he'd been promised." },
      { n: "He'd been stretching. One heel was still up on the lower rail. He'd been halfway through a hamstring stretch, holding the rail for balance, and then he'd stopped, and stayed stopped, and from the salt dried white on the back of his shirt he'd been stopped for a while." },
      { s: 'akihiko', f: 'neutral', t: "Don't laugh." },
      { s: 'solar', f: 'neutral', t: "I'm not laughing." },
      { s: 'akihiko', f: 'serious', t: "You're going to. It's holding the rail. It closed while I was stretching and it won't open, and I've been standing here for— I'm not telling you how long. I timed it. It's humiliating." },
      { n: "His knuckles were white on the iron. The tape over them had gone gray with sweat and come up at one edge. It looked, she thought, exactly like a hand holding the rail of a boat in a storm, and the bay under it was as flat as a plate." },
      { choose: [
        { t: "(Open it, one finger at a time.)", notes: 3, then: [
          { n: "She took the little finger first, because that was the one that gave easiest; she'd learned that in June, under the towel. It came up off the rail stiff and slow, like something that had been left out overnight in the cold, and then the next one, and he watched her work with his jaw set and his face going slowly redder, and when she got to the thumb he made a small sound, not quite a laugh, and let her." },
          { s: 'akihiko', f: 'flustered', t: "...Thank you. I want it noted that I could have done that." },
          { s: 'solar', f: 'neutral', t: "Could you?" },
          { s: 'akihiko', f: 'neutral', t: "No." }
        ] },
        { t: "(Lean on the rail beside him and wait it out.)", notes: 3, then: [
          { n: "She put her bag down and leaned on the rail beside his hand, not touching it, and looked at the bay with him. A ferry crossed the mouth of the harbor, white and very slow. The gulls panted. After a while, without either of them doing anything at all, the hand opened by itself, all at once, the way a fist opens in sleep, and he looked down at it and then at her as if she'd done it." },
          { s: 'akihiko', f: 'surprised', t: "...It let go. You didn't do anything." },
          { s: 'solar', f: 'happy', t: "I stood here." },
          { s: 'akihiko', f: 'neutral', t: "Yeah. That might be it. That might be the whole trick." }
        ] },
        { t: "Want me to call Haechan?", notes: 2, then: [
          { s: 'akihiko', f: 'competitive', t: "Absolutely not." },
          { ifEvent: 'eqx-snow-again', then: [
            { s: 'akihiko', f: 'neutral', t: "The deal's for when it's on *you*. This is a railing. I'm not having him come all the way out here on the monorail to take my hand off a railing. He'd never let it go. He'd write a song about it." }
          ], else: [
            { s: 'akihiko', f: 'neutral', t: "He'd come. That's the worst part. He'd come all the way out here on the monorail to take my hand off a railing, and he'd be nice about it, and then he'd write a song about it." }
          ] },
          { n: "He got it open himself in the end, with his left hand, prying, the way he'd done in April, and shook it out, and the blood came back into his knuckles in a slow pink tide." }
        ] }
      ] },
      { ifFlag: 'eqx-asked-akihiko', then: [
        { n: "His bag was on the bollard by the gate, and the envelope was sticking out of its side pocket the way it had been sticking out of it since June, addressed now in his blunt capitals, stamped, sealed. She knew what was in it. One word. She'd asked for it." },
        { s: 'akihiko', f: 'earnest', t: "It's written. It's stamped. I carry it everywhere. I'm posting it at the end of August, on the last day, so nobody can say I didn't think about it." },
        { s: 'akihiko', f: 'neutral', t: "...It's been closing more. Since you asked. Like it's been given permission. Mornings now, too. I wake up and it's got hold of the sheet." },
        { s: 'akihiko', f: 'flustered', t: "I'm not complaining. You asked. Nobody's ever— I'm not complaining." }
      ], else: [
        { ifChoice: { 'asks.akihiko': 'yes' }, then: [
          { n: "The old letter was in the side pocket of his bag on the bollard, the soft-cornered one with the foreign stamps, and beside it a second envelope, new, sealed, addressed in his blunt capitals. She didn't have to ask what was in it." },
          { s: 'akihiko', f: 'neutral', t: "I wrote it the night you said. *Withdraw.* I'm posting it at the end of August. On the last day. So nobody can say I rushed it." },
          { s: 'akihiko', f: 'serious', t: "It's been closing more. Since you said it was all right. Mornings too. It's happier. I'm not sure I am. That's not a complaint. That's a split time." }
        ], else: [
          { ifChoice: { 'asks.akihiko': 'no' }, then: [
            { n: "The letter was in the side pocket of his bag on the bollard, and with it a brochure, glossy, folded so many times the photograph on the front had a white cross through it: a gym with a blue floor, a long pool, young men in matching tracksuits smiling at a camera in another language." },
            { s: 'akihiko', f: 'neutral', t: "The pool's fifty meters. It's very good. I've been reading about the pool. I'm being polite about it." },
            { s: 'akihiko', f: 'serious', t: "...You told me to go. I've been trying to want it. Every morning I run this and try to want it. Some mornings I nearly do." },
            { n: "His right hand, she noticed, had closed again on the rail, lightly, while he talked about the pool." }
          ], else: [
            { n: "The letter was in the side pocket of his bag on the bollard. It looked different. It had been read so many times that the fold had gone right through, and he'd mended it with a strip of white tape, the way he'd mend anything, and there was a pencil in the pocket beside it with the end chewed flat." },
            { s: 'akihiko', f: 'neutral', t: "Mine. You said mine. I've been thinking about it." },
            { s: 'akihiko', f: 'serious', t: "I've never had to. Do you know that? Somebody always told me where the next fight was. The coach, Mitsuru, Shinji, you. I just ran at it. Deciding for myself is like being handed a ball in a sport nobody's explained to me." },
            { s: 'akihiko', f: 'neutral', t: "It opens easier, though. Since June. It still closes. But it opens when I tell it to, more than it used to. I'm keeping notes." }
          ] }
        ] }
      ] },
      { n: "He picked up the yellow stopwatch off the bollard, looked at it, and put it back down face down, which she had never once seen him do." },
      { s: 'akihiko', f: 'neutral', t: "Mitsuru's taken me off the board. Rest day. She wrote it on the fridge under the hour, in red. *SANADA. REST.* She underlined it twice." },
      { s: 'akihiko', f: 'serious', t: "I haven't missed a day since the seventh of April. Not one. I don't know how you rest. I tried this morning. I sat on my bed for six minutes, and then I came here." },
      { s: 'solar', f: 'neutral', t: "And stretched until your hand got stuck to a railing." },
      { s: 'akihiko', f: 'flustered', t: "...That's what resting looks like when I do it, apparently." },
      { choose: [
        { t: "(Pick up the stopwatch and put it in your own pocket.)", notes: 3, then: [
          { n: "She put it in her blazer pocket. He watched it go the way you'd watch somebody pocket your keys, half outraged and half relieved, and opened his mouth, and shut it again." },
          { s: 'akihiko', f: 'neutral', t: "...Fine. Fine. Where are we going?" }
        ] },
        { t: "Rest with me, then. I'll show you how.", notes: 3, then: [
          { s: 'akihiko', f: 'surprised', t: "You know how?" },
          { s: 'solar', f: 'happy', t: "I've watched Hanni do it for a year. It's mostly lying down near water." },
          { s: 'akihiko', f: 'happy', t: "Ha! Okay. Near water. I can do near water." }
        ] },
        { t: "Race you to the seaside park. Last one there rests.", notes: 2, then: [
          { s: 'akihiko', f: 'competitive', t: "...That's a trap. That's a very good trap." },
          { n: "He lost on purpose. She watched him do it over the last fifty meters, the stride going short, the most visible thing she'd ever seen a person do on purpose, and he came in a full second behind her and bent over with his hands on his knees and said *damn* to the pavement with enormous satisfaction." }
        ] }
      ] },
      { place: 'Port Island · Seaside Park', time: 'Late Afternoon', bg: 'port-island-seaside-park-sunset', soft: true },
      // BG: eqx-seaside-shallows — a narrow strip of coarse gray sand below a seaside park at sunset, between two concrete groynes, an empty lifeguard chair, a faded NO SWIMMING sign, warm clear water going pink toward an island skyline.
      { n: "The seaside park had a beach below it, if you were generous with the word: a strip of coarse gray sand between two concrete groynes, a lifeguard chair with nobody in it, a sign that said NO SWIMMING in three languages, and a fair number of people swimming. At five on a weekday in high summer it had a few families packing up, two old women in sun hats standing up to their knees in the water talking, and the bay going pink at the far end where the sun was coming down behind the island." },
      { n: "He didn't know what to do with it. She watched him not know. He stood at the top of the steps with his bag over his shoulder and his hands open at his sides, looking at the water as if it were an opponent who'd climbed into the ring, sat down and started reading a book." },
      { n: "She took her shoes off, and then her socks, and rolled the socks into the shoes and left them on the bottom step, and walked down the sand. It was hot on top and cool a centimeter under, and the first wave that came up over her feet was so warm it was like stepping into a bath somebody had just got out of." },
      { s: 'akihiko', f: 'neutral', t: "You're in your uniform." },
      { s: 'solar', f: 'happy', t: "I'm in up to my ankles, Akihiko." },
      { n: "He came down. He came down the way he did everything, which was all the way: shoes off, socks off, training shorts already on, the shirt over his head and dropped on top of the bag before she'd finished turning round, and she turned back to the water rather quickly and looked at the island with a great deal of interest." },
      { n: "He'd always been like that. Last year she'd seen him come out of the boxing club showers with a towel round his neck and nothing on his mind, and it hadn't been anything; he was Akihiko, it was like seeing a dog come out of a river. This year it was something. This year he walked into the water up to his knees beside her with the late sun on his back and the tape on his right hand gone dark where the sea had got at it, and her body noticed every bit of that before she'd given it permission to notice anything, and went on noticing while she told it, quite firmly, that it was looking at the island." },
      { s: 'akihiko', f: 'earnest', t: "It's warm. Why's it warm? The sea's not supposed to be warm." },
      { s: 'solar', f: 'neutral', t: "It's summer." },
      { s: 'akihiko', f: 'neutral', t: "It's warm like a bath. I don't trust it." },
      { n: "He stood in it anyway. They both did, up to the knee, then the thigh, the hem of her skirt going dark and clinging, and the two old women in sun hats glanced over and smiled the smile of old women who had seen everything twice, and went back to their conversation. The water was so clear off the groyne that she could see their feet on the bottom, pale and wavering, his twice the size of hers." },
      { n: "It was the stillest she'd seen him since April. He stood with the sea round his legs and his hands resting open on the surface, palms down, as if he were laying them on a table, and the light went gold on the bay, and for a whole minute he didn't count anything. She could tell. She knew what his face looked like when he was counting." },
      { n: "She was hot. The day was in her hair and on the back of her neck and under the collar of her blouse, and the water was right there, and she wasn't thinking about anything at all, which was rare enough this year to feel like a holiday. She took a breath and bent her knees and went under." },
      { n: "Under the water it was gold and green and very quiet. The light came down in slow moving ropes. The beach went away all at once, the gulls and the families and the two women talking, and there was only the sound water makes when it's holding you, a soft enormous hush, like the inside of a shell." },
      { n: "And under the hush, close, as close as somebody's mouth at her ear, a voice said her name." },
      { n: "Not the way anyone here said it. The other way. Two syllables with a lift at the end, like a question, the way you'd call a child down to breakfast from the foot of the stairs. Solji in the kitchen in Syracuse. Miseon in the dark. Mrs. Kim over the sound of the rice cooker. All of them, and none of them, because there was nobody in the water but her, and the water had gone cold. Not cool. Cold, all down her left side at once, the way the dorm's front-door handle had been cold, as if something had come up very close in the green and pressed itself against her." },
      { n: "Then a hand closed on her arm above the elbow, and she came up out of the sea so fast it took the breath out of her." },
      { n: "Akihiko had her. Both hands. He'd come through the water at her so hard there was still a wave going out from where he'd been standing, and he had her upper arm in his right hand and her shoulder in his left, and he was holding her up out of the sea as if she'd been under for an hour, and his face was white. Not pale. White, all of it, even his mouth." },
      { s: 'akihiko', f: 'serious', t: "Eleven seconds." },
      { s: 'solar', f: 'surprised', t: "I was only—" },
      { s: 'akihiko', f: 'serious', t: "Eleven. Seconds. I couldn't see you. The light's on the water and I couldn't see you. You were *there*, and then there was nothing there." },
      { n: "His right hand was locked on her arm. She could feel it. Not hurting, not yet, but closed the way it closed at night, all the way, the fingers down to the bone, and she could feel too that he knew, and was telling it to open, and that it wasn't listening to him." },
      { n: "The two old women had stopped talking. One had put her hand on the other's arm." },
      { n: "Solar's left side was still cold. She looked down at the water beside her, where it had been. It was clear to the bottom: her own feet, his, sand, a bottle cap, the shadow of a groyne. Nothing else. Nothing that could ever have been close enough to speak." },
      { choose: [
        { t: "(Kiss him. Salt and all.)", notes: 3, flag: 'eqx-aki-shallows-kiss', then: [
          { n: "She put her free hand flat on his chest, over his heart, which was going like he'd done the pier three times, and went up on her toes in the water and kissed him." },
          { n: "He tasted of salt. They both did. For a second he didn't move at all, like a man hit somewhere that didn't make sense, and then his left hand came off her shoulder and went into her wet hair and held the back of her head, and he kissed her back with the whole eleven seconds in it, hard, not careful, the sea slapping at their thighs and the sun on the side of her face and his right hand still locked round her arm, and neither of them caring about it anymore." },
          { n: "Her blouse was soaked through and stuck to her and she knew it, she could feel exactly where it stuck, and so could he; she felt him find that out with the flat of his hand at the small of her back, and go still, and breathe in hard through his nose, and very deliberately not move the hand anywhere else. On the sand, one of the old women said something to the other, and they both laughed." },
          { s: 'akihiko', f: 'flustered', t: "...We're in public. There are grandmothers." },
          { s: 'solar', f: 'happy', t: "They've seen worse." },
          { s: 'akihiko', f: 'flustered', t: "They haven't seen *me*." },
          { n: "The hand on her arm opened while he was saying it. Neither of them noticed when." }
        ] },
        { t: "(Hold his locked hand over your heart until it opens.)", notes: 3, then: [
          { n: "She didn't pull away. She put her own hand over his where it held her and slid the whole locked grip, slowly, down off her arm and round and up, until his closed fingers were pressed to her breastbone through the wet blouse, and held it there." },
          { n: "He could feel it going. She watched him feel it. His face did something she'd never seen it do, a slow giving-way from the eyes down, as if every muscle in it had been holding a weight and someone had told it it could put it down." },
          { s: 'solar', f: 'neutral', t: "Count that." },
          { s: 'akihiko', f: 'sad', t: "...I can't. It's too fast. I keep losing it." },
          { n: "It took a long time. The sun went down a finger's width behind the island. Then she felt his fingers move against her, one and then the next, uncurling, until his hand lay open and flat on her chest and was only resting there, and he looked at it, and went red to the collarbones, and didn't take it away." }
        ] },
        { t: "I was only under for a second, Akihiko.", notes: 2, then: [
          { s: 'akihiko', f: 'serious', t: "Eleven." },
          { s: 'akihiko', f: 'sad', t: "I know. I know it's nothing. People go under the water at the beach. Ken does it. Koromaru does it. I'm not stupid." },
          { s: 'akihiko', f: 'sad', t: "It's just that I counted. And I'm going to count it every time now. Every time you go under anything, for the rest of my life, I'm going to be standing there counting. That's not your problem. I'm telling you so you know what you're standing next to." },
          { n: "He pried his own hand off her arm with his left, one finger at a time, and there were four red marks above her elbow, and he looked at them and looked away." }
        ] }
      ] },
      { n: "She didn't tell him about the voice. She opened her mouth to, on the sand afterward, while they sat drying in the last of the sun with their legs out in front of them and her skirt spread to dry and his shirt round her shoulders, because she'd started to shiver and wouldn't say why. She opened her mouth and looked at him, at his right hand lying open on his knee, at the color only just coming back into his lips, and shut it again." },
      { n: "Eleven seconds. He'd have it on a strip of tape by tonight. She wasn't going to give him anything else to write down." },
      { n: "The two old women came up the beach past them on their way to the steps, slow, in their wet sun hats, and the smaller one stopped and looked down at the pair of them, and then at Akihiko, and said, kindly, in the dialect of somebody who'd grown up on this bay before there was a Port Island to grow up on, that he should mind her, that one, the water's funny this summer, it's warm on top and something under. Then she patted him on the head, as if he were nine, and went on." },
      { n: "He sat with his mouth open. Solar laughed until she couldn't breathe, and he let her, and after a while he laughed too, and it was a good sound, and it was nearly enough." },
      { place: 'Port Island · Pier', time: 'Evening', bg: 'port-island-pier-night', soft: true },
      { ifEvent: 'eqx-incheon', then: [
        { n: "They went back up the pier for his bag. It was empty end to end in the dusk, the way it had been since August, and the little white saucer was still upside down on the last bollard where somebody had left it. He didn't look at it. He walked her the long way round, by the other rail, and she let him." }
      ], else: [
        { n: "They went back up the pier for his bag in the long blue dusk. The old man was packing up under his green umbrella at the far end, the last one, and he lifted two fingers from his reel and then, when they came closer, beckoned, with the air of a man who'd been holding on to something all afternoon and wanted it off his hands." },
        { s: 'fisherman', t: "She came by again. The lady from the river. While you were off at the beach." },
        { s: 'fisherman', t: "Didn't ask me, this time. I think she's given up on me. She asked after you, lad. *The boy who runs.* Doesn't he get hungry, running like that. Wouldn't he like a bite after. She'd keep a plate warm for him." },
        { s: 'fisherman', t: "I told her he doesn't stop. Never seen him stop. She said everybody stops eventually. Nice as you please. Then off she went up the pier with her tin under her arm." },
        { n: "He laughed his short dry laugh and reeled in. Akihiko didn't laugh. He stood very still on the boards with his bag over his shoulder, and Solar felt the hand beside hers close, quietly, round nothing, and stay closed all the way back to the gate." }
      ] },
      { place: 'Port Island Station · Gates', time: 'Evening', bg: 'portisland-station-night', soft: true },
      { n: "At the station he didn't say five tomorrow. He'd stopped saying it. He stood at the ticket gates with his hair stiff with salt and her blouse dried in white tide lines, and looked at her, and then lifted his shirt back off her shoulders, gently, and folded it over his arm, and that was the question. She'd learned to read it." },
      { choose: [
        { t: "Friday. Same time. Bring a towel.", notes: 3, then: [
          { s: 'akihiko', f: 'happy', t: "I always bring a towel. You always get it wet. I'm starting to think that's on purpose." },
          { s: 'solar', f: 'neutral', t: "Rest day's over, then?" },
          { s: 'akihiko', f: 'neutral', t: "Rest day was a disaster. I'm never resting again. I'm going to tell Mitsuru it nearly killed me." }
        ] },
        { t: "(Put your hand over the back of his, on the tape. Then go through the gates.)", notes: 3, then: [
          { n: "She laid her hand over the back of his for a second, on the damp gray tape, and felt the knuckles under it, and felt them not close. Then she went through the gates and down the platform, and didn't look back, and knew without looking that he was standing on his side of the barrier watching her the whole way, the way you know where the sun is with your eyes shut." }
        ] },
        { t: "Don't count me tonight.", notes: 2, then: [
          { s: 'akihiko', f: 'neutral', t: "I'm going to." },
          { s: 'akihiko', f: 'earnest', t: "I'm going to count the hour, and I'm going to count you in it. Both. It's what I've got. If you've got something better I'm listening." }
        ] }
      ] },
      { n: "At one in the morning her phone buzzed on the pillow beside her head, in the dark, after the red had drained back out of the window street by street." },
      { ifBefore: '7/27', then: [
        { phone: [
          { from: 'akihiko', t: "62:58." },
          { from: 'akihiko', t: "You were under for eleven seconds today. That's on the roll too. With the others." },
          { from: 'akihiko', t: "I'm not asking you not to do it again. I'm just telling you I counted." }
        ], contact: 'akihiko' }
      ], else: [
        { phone: [
          { from: 'akihiko', t: "64:51." },
          { from: 'akihiko', t: "You were under for eleven seconds today. That's on the roll too. With the others." },
          { from: 'akihiko', t: "I'm not asking you not to do it again. I'm just telling you I counted." }
        ], contact: 'akihiko' }
      ] },
      { n: "She lay looking at it until the screen went dark. Then she put her thumb on the inside of her arm, above the elbow, where his fingers had been, and pressed. It didn't hurt. Her left side, under the sheet, in the warm room, in high summer, was still very faintly cold." }
    ] },
    { after: '8/18', title: '5: confirm or withdraw', place: 'Port Island · Pier', time: 'Daytime', music: 'tender', scene: [
      { bg: 'port-island-pier' },
      { n: "Late summer came down on Port Island like a lid. The cicadas in the seaside park had been going since six, the whole hillside of them at once, a sound so thick it seemed to come up out of the concrete with the heat, and the bay lay under a white sky without a breath on it, and the boards of the pier were too hot to sit on. Solar sat on them anyway, on her folded cardigan, by the gate, and watched him run." },
      { n: "He'd changed the route. She saw it on the second length. He ran out the way he always had, gate to the far end, but he didn't touch the last bollard. He touched the one before it, the second to last, fourteen meters short, and turned there, and came back." },
      { n: "On the last bollard, at the very end of the pier, where the old man had sat for thirty years with his bucket and his radio and his cap, there was a small white saucer, upside down. It had been there since August. Nobody had moved it. The gulls didn't land on that bollard. She'd watched them not land on it for twenty minutes." },
      { n: "He came in and stopped the yellow stopwatch and didn't look at it." },
      { s: 'akihiko', f: 'neutral', t: "Two ninety-eight. Gate to the second-to-last and back. It's not a real distance. It doesn't count for anything. I'm aware." },
      { choose: [
        { t: "You could move it. The saucer.", notes: 2, then: [
          { s: 'akihiko', f: 'serious', t: "I'm not touching it." },
          { s: 'akihiko', f: 'neutral', t: "I'm not superstitious. I'm— somebody put it there. Somebody put it there upside down, on purpose, for somebody else. It's not mine to move." },
          { n: "He said it the way you'd say a grave wasn't yours to tidy, and she didn't ask again." }
        ] },
        { t: "(Walk out to the end and stand by the last bollard. Don't touch it.)", notes: 3, then: [
          { n: "She walked out to the end. The boards ticked in the heat under her feet. She stood beside the last bollard with the saucer on it, close enough to see the hairline crack in its rim and the faint white dust caught along the crack, not salt, finer than salt, and she didn't touch it, and stood there long enough for the gulls along the rail to get used to her." },
          { n: "When she turned round he'd walked out behind her. He stopped at the second-to-last bollard, fourteen meters back, and waited there, and didn't come any closer, and didn't call her back either. He just waited, at his distance, until she came." }
        ] },
        { t: "It's a good time, for two ninety-eight.", notes: 2, then: [
          { s: 'akihiko', f: 'happy', t: "Ha! It's a terrible time. It's my best time ever at a distance nobody runs. I'm the world record holder at two hundred and ninety-eight meters." },
          { s: 'akihiko', f: 'neutral', t: "...Somebody has to hold it." }
        ] }
      ] },
      { ifEvent: 'eqx-table-op', then: [
        { ifEvent: 'eqx-equinox', then: [
          { n: "Her father had run it with him that morning. Akihiko told her that the way he'd have told her the temperature. At six, before the heat, in a gray T-shirt with a university's name on it from another life, Jaesang Lee had come down the pier at a slow, correct, joyless pace with his jaw set, and turned at the second-to-last bollard because Akihiko did, and run back, and done it again, eleven times, without a word." },
          { s: 'akihiko', f: 'sad', t: "He doesn't talk. Since the bridge. He just runs. I run at his speed. He's slow. I don't say anything about it." },
          { s: 'akihiko', f: 'neutral', t: "This morning he asked me how I tape my hand. That's the only thing he's said in a week. I showed him. He did his own. He did it wrong and he wore it all day." }
        ], else: [
          { n: "And her father had run it with him that morning." },
          { n: "Akihiko told her this with the expression of a man reporting an incident to the authorities. At six, before the heat, Jaesang Lee had come down the pier in a navy polo shirt, pressed, and running shoes so white they had clearly been bought in Iwatodai the day before, and introduced himself, and shaken Akihiko's hand, and then asked to be timed." },
          { s: 'akihiko', f: 'neutral', t: "He's not bad. He's not good. He's fifty-something and he runs like a lawyer. Very correct. No wasted movement. He'll never get any faster and he knows it and he doesn't care." },
          { s: 'akihiko', f: 'serious', t: "He didn't ask me anything about you. Not one thing. He asked my split. He asked what I eat. He asked if I'd ever considered a career in finance, because apparently I *have the discipline for it*." },
          close([
            { s: 'akihiko', f: 'flustered', t: "...And then, at the end, at the gate, in English, very politely, he asked what my intentions were." },
            { s: 'solar', f: 'surprised', t: "He *what*." },
            { s: 'akihiko', f: 'flustered', t: "I panicked. I said *to run a fifty-five*. He looked at me for a long time. Then he said *hm* and went to get a coffee." },
            { s: 'akihiko', f: 'neutral', t: "I think that went well. I genuinely can't tell." }
          ], [
            { s: 'akihiko', f: 'neutral', t: "He said he'd come again tomorrow. He said it like it was a meeting. I think I've been booked." }
          ])
        ] }
      ] },
      { n: "He sat down next to her on the hot boards, on the very edge of her cardigan, and unzipped the side pocket of his bag, and took out the envelope." },
      { ifAfter: '9/1', then: [
        { n: "It was past the end of August. He'd known that; he'd known it the way he knew everything with a number in it. The program had phoned him on the thirty-first, at the dorm, on the landline, and he'd stood in the hall in his socks and given them his answer in his best formal Japanese and then in worse English, and they'd thanked him and asked him please to send it in writing as well, for the file. So he still had it. So it still had to go in a box." }
      ] },
      { ifFlag: 'eqx-asked-akihiko', then: [
        { n: "It was the envelope she'd seen in July, sealed, stamped, his capitals on the front gone a little soft with handling. One word inside. *No.* She'd asked for it under a towel in the rain, and he'd said yes to her so fast it had made her dizzy." },
        { s: 'akihiko', f: 'earnest', t: "Easiest letter I've ever written. One word. I wrote it in June in about a second." },
        { s: 'akihiko', f: 'neutral', t: "So why haven't I posted it. That's what I keep asking myself on the two ninety-eight. You asked me to stay. I want to stay. There's nothing to decide. And it's been in this pocket for two months like it's waiting for somebody to change their mind." },
        { s: 'akihiko', f: 'serious', t: "Not you. I'm not asking you to. I'm saying the envelope's waiting. Envelopes are stupid. I'm posting it today." }
      ], else: [
        { ifChoice: { 'asks.akihiko': 'yes' }, then: [
          { n: "It was the envelope she'd seen in July. *Withdraw*, in his capitals. Sealed, stamped, a little soft at the corners." },
          { s: 'akihiko', f: 'neutral', t: "You said it was all right. To hold on. I've been holding on. It's been the best summer I've had in— it's been a good summer." },
          { s: 'akihiko', f: 'serious', t: "It's still the hardest letter I've ever posted. I don't know why. I wanted it. I want it. I just keep thinking, the last time I let go of something, it was a rope, and I didn't get it back." },
          { s: 'akihiko', f: 'neutral', t: "That's not the same. I know it's not the same. I'm posting it today." }
        ], else: [
          { ifChoice: { 'asks.akihiko': 'no' }, then: [
            { n: "It wasn't the envelope she'd expected. It was a new one, sealed, and on the back flap in pencil, small, crossed out, there was the word *CONFIRM*, and under it, not crossed out, *DEFER*." },
            { s: 'akihiko', f: 'neutral', t: "You told me to go. I wrote *confirm* three times. I tore it up three times. I'm not proud of that. I'm reporting it." },
            { s: 'akihiko', f: 'serious', t: "So I've asked them to hold it one more year. They might say no. They're allowed to say no. That's the first thing I've let somebody else decide since April, and it's a coach in another country I've never met." },
            { s: 'akihiko', f: 'sad', t: "...I'm not going this spring. I'm sorry. I tried to want it for you. I couldn't get the number down." }
          ], else: [
            { n: "It was a new envelope, sealed, plain, addressed in his capitals. There was nothing on the back of it. He held it in both hands on his knees and didn't offer to show her what was inside, and didn't explain, and she understood after a moment that this was the explanation." },
            { s: 'akihiko', f: 'neutral', t: "Mine. You said. So I'm not telling you what it says." },
            { s: 'akihiko', f: 'serious', t: "Not to be cruel. Because if I tell you, you'll have a face about it, and I'll look at your face, and I'll want to change it to whatever makes your face do the other thing. That's what I've done my whole life. Somebody's face. I'm not doing it with this one." },
            { s: 'akihiko', f: 'neutral', t: "It took me all summer. I wrote it on the last bollard. Before. When he was still out here. He lent me his pen." }
          ] }
        ] }
      ] },
      { place: 'Port Island Station · Post Box', time: 'Afternoon', bg: 'portisland', soft: true },
      // BG: eqx-station-postbox — a red cylindrical Japanese post box on a hot white pavement outside a modern island station, heat shimmer, a vending machine and a bicycle rack, the monorail track overhead.
      { n: "The post box outside Port Island Station was the old kind, red and round with a little hat, standing in the full sun beside a vending machine that hummed. Its slot was hot. She could feel the heat coming off it from a step away." },
      { n: "He stood in front of it with the envelope in his right hand. The taped one. She watched the hand hold it. She watched it not let go." },
      { choose: [
        { t: "(Put your hand over his on the slot.)", notes: 3, flag: 'eqx-aki-letter-hand', then: [
          { n: "She put her hand over his, over the tape, and they held the envelope together half in and half out of the slot, in the heat, with the vending machine humming and somebody's bicycle bell going off behind them, and she didn't push, and she didn't pull. She just held on with him." },
          { n: "After a while she felt the fingers under hers loosen. Not open. Loosen. Enough. The envelope slid out from between them on its own weight, and went in, and they heard it land inside on the others, a small flat sound, like a door closing in another part of a house." },
          { s: 'akihiko', f: 'neutral', t: "...We both did that. That's on the record. Both of us." }
        ] },
        { t: "(Step back. Let him do it alone.)", notes: 3, flag: 'eqx-aki-letter-alone', then: [
          { n: "She stepped back, onto the shade of the vending machine, and folded her arms, and looked at the monorail track instead of at him. It was the hardest thing she'd done all week. She heard him breathe. She heard him breathe again." },
          { n: "Then she heard the envelope go in, and land, a small flat sound, and she looked round, and he was standing with his empty hand still at the slot, open, looking at it, as if it had done something by itself and he was proud of it and didn't know how to say so." },
          { s: 'akihiko', f: 'surprised', t: "...It let go. By itself. I didn't pry it." },
          { s: 'akihiko', f: 'happy', t: "Ha! Write that down. Somebody write that down." }
        ] },
        { t: "You don't have to post it today.", notes: 2, flag: 'eqx-aki-letter-kept', then: [
          { s: 'akihiko', f: 'serious', t: "Yes I do." },
          { s: 'akihiko', f: 'neutral', t: "If I don't post it today I'll carry it till October. I know me. You know me. You're being kind. Don't be kind right now, it's too hot." },
          { n: "He posted it. He did it fast, with his jaw set, like taking a punch he'd decided to take, and it landed inside with a small flat sound, and he stood there looking at the slot with his hand still in front of it, closed." }
        ] }
      ] },
      { n: "The sky went yellow on the walk back. It went yellow and then a bruised gray-violet over the island, all in about ten minutes, the way August skies did here when they'd been holding something in all day, and the cicadas stopped, all at once, every one of them, as if somebody had pulled a plug; and in the silence the first drop hit the pavement in front of them the size of a coin." },
      { s: 'akihiko', f: 'happy', t: "Run." },
      { place: 'Iwatodai Dorm · Akihiko\'s Room', time: 'Evening', bg: 'akihiko-bedroom', music: 'romance', soft: true },
      { n: "They came in through the dorm's front door soaked to the skin, laughing, her shoes squelching, his hair flattened to his skull, and Koromaru got up from his place across the doorway and looked at them with grave disapproval and lay down again. The lounge was empty. Somewhere upstairs Junpei was yelling at a ball game on the radio. Thunder went over the roof so low the windows answered it." },
      { n: "Haechan was in the hall. He'd come out of the laundry room at the sound of the door with a stack of towels warm from the dryer against his chest, as if he'd been waiting for exactly this, which, knowing him, he might have been. He looked at the two of them dripping on the tiles. He looked at Akihiko. He took one towel off the top of the stack and threw it, and it hit Solar softly in the face." },
      { s: 'haechan', f: 'smirk', t: "One. Share. I'm not made of towels." },
      { s: 'akihiko', f: 'neutral', t: "You're holding nine towels." },
      { s: 'haechan', f: 'neutral', t: "These are for people who didn't go running in a typhoon. Different budget." },
      { n: "He didn't go back into the laundry room. He stood there with the stack against his chest and looked at Akihiko properly, the way he looked at a mix he couldn't decide about, and Solar, with the towel over her head, watched the two of them look at each other in the dripping hall." },
      { s: 'haechan', f: 'serious', t: "...The letter. You post it?" },
      { s: 'akihiko', f: 'neutral', t: "Today." },
      { s: 'haechan', f: 'neutral', t: "Okay." },
      { s: 'haechan', f: 'neutral', t: "I've never posted anything I meant. In either life. Songs, texts, I write them and I sit on them till they go cold. You're one up on me, Akihiko. I'm just saying I know what a slot feels like when it's hot." },
      { n: "Akihiko looked at him for a long second. Then he nodded, once, the way he nodded at an opponent across a ring before the bell, and Haechan nodded back, and went into the laundry room with his towels and shut the door with his heel, and they heard him start to hum, somewhere behind the dryer, a tune that wasn't anyone's yet." },
      { s: 'akihiko', f: 'neutral', t: "...I hate that he's good at that. I want it on record that I hate it." },
      { n: "He took her up to his room for a dry shirt, because his was nearer, because hers was on the girls' floor and Mitsuru had views about the stairs, because of a lot of reasons that were all true and none of which was the reason." },
      { n: "She'd been in his room before. Last year. It had been the room of a boy who lived in a gym: a bed made like a barracks, a heavy bag hanging from a hook in the ceiling, protein tubs, a calendar of training days crossed off in red. All of that was still there. What was new was the wall over the desk." },
      { n: "It was covered in tape. White strips, row on row, from the corner by the window to the corner by the door, each one dated, each one a number in his blunt capitals, stuck on in neat lines like the bricks of a wall. April at the top left. The long run of one second a night. The jump in April. The slow climb of May. June, and the bridge. The full moons stood out of the rows like teeth: a strip a whole hand's width longer than its neighbors for each of them, sixty-eight, seventy-three, seventy-eight, the number going up every time." },
      { s: 'akihiko', f: 'neutral', t: "...Don't read it. I mean you can read it. Everybody else would just see a wall." },
      { n: "He threw her a dry shirt without looking and pulled his own wet one off over his head with the other hand, and then remembered she was there, halfway through, and stopped with it round his elbows, and went red from the neck up, and finished taking it off anyway, because there was no dignified way not to." },
      { n: "She stood in the middle of his room in her soaked blouse with Haechan's towel over her head and his shirt over her arm and looked at the wall, and he stood beside her in a dry shirt he'd put on inside out, and the rain came down outside like the sky had been emptied into the yard." },
      { s: 'akihiko', f: 'serious', t: "I did the arithmetic. Last night. I told myself I wouldn't, and I did." },
      { s: 'akihiko', f: 'serious', t: "If it keeps going the way it's going, by the equinox the hour's going to be— I don't know. I stopped. I got to a number and I put the pen down and went and stood in the shower for twenty minutes." },
      { s: 'akihiko', f: 'neutral', t: "It's not a clock. I've stopped pretending it's a clock. Clocks don't eat." },
      { choose: [
        { t: "(Kiss him.)", notes: 3, flag: 'eqx-aki-room-kiss', then: [
          { n: "She took the towel off her head and put it round the back of his neck and pulled him down by both ends of it, and kissed him in front of the wall of numbers, and he made a sound into her mouth like the air going out of him." },
          { n: "It wasn't like the pier, or the gate, or the sea. It was slower. It was a closed door and a storm and nobody on this floor but Junpei and a ball game. He walked her back without meaning to until the backs of her knees found the edge of his bed and she sat down on it, hard, and he came down with her, one knee on the blanket, his hands on either side of her, and stopped there, braced, breathing, looking at her as if he were reading a number he didn't trust." },
          { s: 'akihiko', f: 'serious', t: "...My hand. If it closes— on you, on anything. I can't promise it won't." },
          { s: 'solar', f: 'neutral', t: "Then let it." },
          { n: "He let it. She felt it come round her wrist on the blanket and close, and stay, and she turned her hand inside it until her fingers were laced with his and his grip was something she was holding too, and he put his face in her neck and laughed, once, unsteadily, against her wet skin, and she pulled the towel over both their heads like a tent, the way they'd sat on the pier in June, and under it the world was very small and very warm and smelled of rain and him." },
          { n: "Thunder went over. Down the hall, Junpei's ball game went into extra innings. Neither of them heard who won." },
          { n: "Later, a long time later, when the rain had thinned to a hiss and the light in the room had gone the color of weak tea, she lay with her head on his chest and her blouse still damp at the collar and listened to his heart come down, slowly, from the pier to a walk." },
          { s: 'akihiko', f: 'flustered', t: "...I'm not timing that. Before you ask. I want it on record that I didn't time any of that." },
          { s: 'solar', f: 'happy', t: "Liar." },
          { s: 'akihiko', f: 'flustered', t: "...Twelve minutes on the bit before the thunder. Roughly. I wasn't *trying*." }
        ] },
        { t: "(Sit on the floor with your back against his bed and read the wall.)", notes: 3, then: [
          { n: "She sat down on his floor with her back against the side of his bed and the towel round her shoulders and read it, strip by strip, from April on. After a minute he sat down beside her. Not touching. Close enough that she could feel the warmth of him through the damp of her sleeve." },
          { n: "She found eleven seconds. A short strip from the beach day, under that night's number, in smaller capitals: *S. UNDER. 11.* He watched her find it and didn't say anything, and neither did she, and after a while he put his right hand palm up on the floor between them, open, and left it there, and she put her hand in it, and it didn't close. He held still and let it not close for a long time." }
        ] },
        { t: "Show me the full moons. All of them.", notes: 2, then: [
          { s: 'akihiko', f: 'neutral', t: "...Okay." },
          { n: "He showed her. He went along the wall with one finger, tooth to tooth: April's, May's, the night of the Second Hill, the night of the Third, each one longer than the one before, and his finger stopped at the space at the end of the last row, the empty wall where next month's would go, and stayed there." },
          { s: 'akihiko', f: 'serious', t: "There. That's where the twenty-fifth goes. I've already measured the tape. I cut it this morning. I don't know how long to make it." }
        ] }
      ] },
      { n: "The red was three hours off. Mitsuru's rule since July was nobody alone and nobody on the wrong floor when it came, and at a quarter to twelve Solar went back down his corridor and up the other stairs to her own, in his inside-out shirt over her damp blouse, past Junpei's door, which was open a crack, and Junpei inside it on his bed with the ball game finished and his eyes shut, very ostentatiously asleep." },
      { n: "*Night, Sol*, he said, without opening them." },
      { n: "At one her phone buzzed." },
      { ifEvent: 'eqx-table-op', then: [
        { phone: [
          { from: 'akihiko', t: "66:20." },
          { from: 'akihiko', t: "It went in the box. I keep thinking about it in there in the dark with all the other letters, going somewhere." },
          { from: 'akihiko', t: "My hand closed on the pillow tonight. The side you sat on. I let it." }
        ], contact: 'akihiko' }
      ], else: [
        { phone: [
          { from: 'akihiko', t: "65:51." },
          { from: 'akihiko', t: "It went in the box. I keep thinking about it in there in the dark with all the other letters, going somewhere." },
          { from: 'akihiko', t: "My hand closed on the pillow tonight. The side you sat on. I let it." }
        ], contact: 'akihiko' }
      ] },
      { n: "She held the phone against her chest in the dark. Out on the pier, fourteen meters past where he turned now, a white saucer sat on a bollard upside down in the rain, and she didn't know why she was thinking about it, and she couldn't stop." }
    ] },
    { after: '9/29', title: '6: the warm door', place: 'Port Island · Pier', time: 'After School', music: 'tender', scene: [
      { bg: 'port-island-pier' },
      { n: "The first cold rain came at the end of September, the week after the bridge, and it didn't hang about the way June's had. It came in off the bay sideways, thin and hard, and it went through a blazer in a minute, and the pier was gray and slick and empty and the gulls had gone somewhere else entirely." },
      { ifBefore: '10/23', then: [
        { n: "Her father was at the gate when she got there. He was leaving. He was in a dark rain jacket zipped to the chin and wet through anyway, and his face had the gray, scoured look it had had every day since the bridge, as if somebody had taken the color out of it with a cloth; and his right hand was taped. Badly. Three crooked turns of white athletic tape round the palm, the way Akihiko did his." },
        { n: "He stopped when he saw her. He looked at her for a moment as if he were checking her against something, the way he'd checked a contract once against a copy he had in his head." },
        { s: 'jaesang-runners', f: 'neutral', t: "Solar." },
        { s: 'jaesang-runners', f: 'neutral', t: "He says you've been eating. Akihiko. He reports it. He seems to think I'd want to know." },
        { s: 'solar', f: 'neutral', t: "Do you?" },
        { s: 'jaesang-runners', f: 'sad', t: "...Yes." },
        { n: "He put out his taped hand and touched her hair, once, wet, the way you'd touch something to make sure it was still there. Then he went off up the road toward the station in the rain at a slow, correct, joyless run, and didn't look back, and she stood at the gate and watched him until the rain had him." },
        { s: 'akihiko', f: 'neutral', t: "Six every morning. Since the bridge. Now afternoons too, sometimes. He doesn't talk. I run at his speed." },
        { s: 'akihiko', f: 'serious', t: "On the bridge I had hold of his arm. When it— when they were gone. I had his arm and I couldn't let go of it. My hand wouldn't. For an hour, Mitsuru said. I don't remember an hour." },
        { s: 'akihiko', f: 'neutral', t: "Iori took it off him in the end. One finger at a time. He's getting good at it. I don't like how good." }
      ], else: [
        { n: "There was a strip of white tape stuck to the gatepost at shoulder height, rained on, gone gray, with nothing written on it. She knew whose hand had stuck it there. Her father had run this pier at six every morning since the bridge, with his own right hand taped the way Akihiko taped his, until the Road Home. He didn't come anymore. The tape was still on the gate." },
        { s: 'akihiko', f: 'neutral', t: "I leave it. He'll come back to it or he won't. It's not mine to take down." }
      ] },
      { n: "Akihiko was under the overhang of the ticket office, on the bench where they'd sat in June with a towel over both their heads. He wasn't running. He had the roll of white tape on his knee, and he wasn't flattening it or reading it. He was just holding it, the way you'd hold a small animal that had come in out of the rain." },
      { n: "She sat down beside him. He unrolled a length of it without being asked, onto her knee, so she could see." },
      { n: "*9/22 — 67:12.* And then one strip so long he'd had to double it back on itself and stick it to itself to get it to fit on the roll, the numbers written along its whole length in a hand that got smaller and more cramped toward the end as if he'd been running out of room and nerve together. *9/23 — 10:11:00.* Ten hours and eleven minutes. And then, the night after, as if nothing had happened, *9/24 — 67:31.*" },
      { s: 'akihiko', f: 'serious', t: "It went up ten hours in a night. And then it went back down to sixty-seven like it was nothing. Like a man who's eaten so much he can't move, and then the next day he's hungry again." },
      { s: 'akihiko', f: 'neutral', t: "It's not growing. I thought it was growing. It's eating. Some nights it eats more." },
      { ifEvent: 'eqx-1023', then: [
        { ifFlag: 'dead.shinjiro', then: [
          { n: "There were more strips after those. October's. And one more tooth, the twenty-third, eighty-one fifty-eight, and under that one a strip with no number on it at all. He'd stuck it on blank. She didn't ask. She knew what the blank one was." }
        ], else: [
          { n: "There were more strips after those. October's. And one more tooth, the twenty-third, *81:40* at the lip and *81:41* at the end, and beside the second, very small, in capitals that had pressed right through the tape, *NOTHING. IT GOT NOTHING.*" }
        ] }
      ] },
      { s: 'akihiko', f: 'neutral', t: "I'm not going to ask you where she is. The woman with the viola. Or who. I said that by the fountain and I meant it." },
      { s: 'akihiko', f: 'sad', t: "I'm just— the word. On the tape. I'd been carrying it since June. I gave it to you and I thought I'd feel lighter. I don't. I feel like I handed you a hot pan." },
      { choose: [
        { t: "(Take the folded strip out of your blazer pocket. Show him you still have it.)", notes: 3, then: [
          { n: "She took it out of her blazer, the inside pocket over her heart where she'd put it by the fountain, still folded along its old creases. She didn't open it. She just held it up so he could see it was there, and dry, and kept, and put it back." },
          { s: 'akihiko', f: 'neutral', t: "...Okay. Okay. That's— you kept it dry. Good. That's good." }
        ] },
        { t: "It's not too hot for me.", notes: 3, then: [
          { s: 'akihiko', f: 'sad', t: "Everything's too hot for you. You just hold it anyway. I've watched you do it for two years. Three lives, Haechan says. You never put anything down." },
          { s: 'akihiko', f: 'neutral', t: "I'm not telling you to. I'm just saying I noticed." }
        ] },
        { t: "You were right. In June. When you wrote it.", notes: 2, then: [
          { s: 'akihiko', f: 'serious', t: "I don't want to be right. I keep telling everybody that. I've been right about everything since April and every single time somebody's dead." }
        ] }
      ] },
      { n: "The rain came harder for a while, drumming on the overhang, and then eased off to a hiss. Out on the end of the pier, in the gray, the white saucer was still on its bollard. It had been there since August. The rain hadn't moved it. Nothing had." },
      { n: "When the rain thinned he stood up, without a word, and put the roll of tape on her knee and the yellow stopwatch in her hand, and walked to the gate, and stood at it, and looked down the whole length of the pier to the end." },
      { s: 'akihiko', f: 'competitive', t: "Time me. The whole thing. Three twelve." },
      { n: "He went. She watched him go, the gray shirt going dark again in the drizzle, out past the ticket office, past the place where the old men had sat, past the second-to-last bollard where he'd turned every day since August, without slowing, without looking at it. He ran right up to the last one, the one with the saucer, and slapped it with the flat of his left hand, hard, a hand's width from the white rim, and the saucer didn't move, and he turned and came back." },
      { n: "He came in at the gate soaked and furious and grinning, the real one, and she read him the number, and he made her read it again." },
      { s: 'akihiko', f: 'happy', t: "Fifty-seven. In the wet. On the whole pier." },
      { s: 'akihiko', f: 'serious', t: "It's not having fourteen meters of my pier. I decided that this morning. Whatever it is. It can have the saucer. It's not having the last bollard." },
      { n: "He sat back down beside her, breathing hard, steaming a little in the cold." },
      { n: "He put the tape away in his inside pocket. Then he didn't take his hand back out. He sat with it inside his jacket, against his chest, and she watched him decide something, the way she'd watched him decide things all year, jaw first." },
      { s: 'akihiko', f: 'serious', t: "There's a door. In the Well. I want you to know where it is." },
      { s: 'akihiko', f: 'neutral', t: "On the Doorstep. The upside-down floors, with the streets on the ceiling and the doors everywhere. There's a turn about nineteen floors down where there's a bicycle on the ceiling with its wheel still going round. Past that, on the left, there's a door that's warm." },
      { s: 'akihiko', f: 'neutral', t: "All the other doors down there are cold. Like the handle on the dorm door. This one's warm. You can feel it from a meter off, like an oven. And it smells of smoke." },
      { n: "He wasn't looking at her. He was looking at the rain. His voice had gone very flat and very careful, the voice he'd once used, on a roof, last summer, to tell her about a fire." },
      { s: 'akihiko', f: 'serious', t: "There's someone behind it. A kid. She knocks from the other side. Not loud. Two knocks, the way everything knocks this year. And she says *Aki*. And she says *hold on*." },
      { s: 'akihiko', f: 'sad', t: "It's not Miki. I know it's not Miki. Miki's been dead since I was a kid, and that door's the thing that wants me holding on, and it went and found the one voice in the world I'd— it found the one thing. That's all. It's smart. It's very good at finding the one thing." },
      { s: 'akihiko', f: 'neutral', t: "I haven't opened it. I've stood at it four times. On my own, at the end of a night, when everybody's gone up the rope. I stand there and I count, and when I get to sixty I walk away. Every time it's harder to get to sixty." },
      { s: 'akihiko', f: 'serious', t: "I'm not telling you so you'll stop me. I'm telling you so somebody knows where it is. Nineteen floors. The bicycle. On the left. Warm." },
      { flag: 'eqx-floor-akihiko' },
      { choose: [
        { t: "If you ever go through it, I'll come and get you.", notes: 3, flag: 'eqx-aki-door-come', then: [
          { s: 'akihiko', f: 'surprised', t: "...You'd come in after me." },
          { s: 'solar', f: 'neutral', t: "You came down after me. At the mouth. Both of you." },
          { s: 'akihiko', f: 'neutral', t: "That's different. That was— okay. It's not different. It's exactly the same and I hate it." },
          { n: "He laughed, once, and it came out wrong, and he looked away at the water, and his hand inside his jacket stayed where it was, flat against his chest, over the tape, over his heart." }
        ] },
        { t: "If you go through it, that's yours. I'll still know where you are.", notes: 3, flag: 'eqx-aki-door-his', then: [
          { n: "He went still. She watched it land, the way it had landed in June, and this time he didn't fight it. He sat with it. His jaw worked once, and then let go." },
          { s: 'akihiko', f: 'neutral', t: "...Yours. Mine. You keep giving it back to me. Every time I hand you something you hand it back with my name on it." },
          { s: 'akihiko', f: 'earnest', t: "It's the only thing anyone's said about that door that makes me want to walk away from it faster." }
        ] },
        { t: "Don't go through it. Stay with me. Please.", notes: 3, tally: { asked: 1, cakes: 1 }, flag: 'eqx-asked-akihiko', then: [
          { n: "He turned and looked at her, all of him at once, and she saw it go through him the way it had gone through him in June, from the face down into the hand, which came out of his jacket and closed on her wrist on the bench, fast and hard and completely sure of itself." },
          { s: 'akihiko', f: 'flustered', t: "...Okay. Okay. I won't. I'll stay. If you're asking. You're asking." },
          { s: 'akihiko', f: 'happy', t: "Then that's easy. That's the easiest thing anyone's asked me all year. I'll hold on. I'll hold on to everything." },
          { n: "He was smiling. It was the most relieved she'd seen him since the spring, and his hand was round her wrist exactly the size of it, as if it had been measured, and the rain hissed on the overhang, and it felt, for a whole minute, like the right thing to have said." }
        ] },
        { t: "(Take his hand out of his jacket. Hold it open, in both of yours.)", notes: 3, flag: 'eqx-aki-door-hand', then: [
          { n: "She reached inside his jacket and took his hand by the wrist and brought it out, into the cold air, and opened it in both of hers, palm up, and held it like that, open, between her two, the way you'd hold a bowl of water you didn't want to spill." },
          { s: 'akihiko', f: 'sad', t: "...It wants to close. I can feel it wanting." },
          { s: 'solar', f: 'neutral', t: "I know." },
          { n: "It didn't. She held it open, and he let her, and they sat on the bench and watched the rain on the bay until the light went, and his hand stayed open in hers the whole time, trembling a little at the fingertips, like a runner's legs at the end of a race." }
        ] }
      ] },
      { ifFlag: 'dead.shinjiro', then: [
        { s: 'akihiko', f: 'sad', t: "Shinji never told me what he wrote on that sheet. The first one. *By summer.* You've got it now. Mitsuru gave you the coat." },
        { s: 'akihiko', f: 'sad', t: "Don't tell me. Keep it. I want there to be one thing of his I don't know yet." }
      ], else: [
        { s: 'akihiko', f: 'neutral', t: "Shinji's cooking for thirty. Every night. For the fathers, over at that house. He won't let anybody help. He's using his right hand for the pan now." },
        { s: 'akihiko', f: 'serious', t: "Ask him what he wrote. On that sheet in the hospital, in the spring. *By summer.* He'll tell you. He won't tell me. Go and sit in his kitchen and ask him. Soon." },
        { n: "He said *soon* the way he'd said *eleven seconds*. She didn't know why. She didn't think he did either." }
      ] },
      { place: 'Iwatodai Dorm · Roof', time: 'The Red Hour', bg: 'iwatodaidorm-roof-night', music: 'night', soft: true },
      { n: "That night was hers. Hanni's rota had a column for who stayed up through the red now, two names a night, since the bridge, and Solar had written *S + A* in tonight's box herself at breakfast and nobody had said anything about it, not even Junpei, who'd looked at the box and then at her and then very carefully at his toast." },
      close([
        { place: 'Iwatodai Dorm · Akihiko\'s Room', time: 'The Red Hour', bg: 'akihiko-bedroom', soft: true },
        { n: "They didn't stay up on the roof. They'd meant to. They got as far as his door." },
        { n: "The red came at twelve, up through his window like a stain coming up through a sheet, and turned his wall of tape the color of an old wound, every strip, every number; and he sat on his bed with his back to the wall and the stopwatch in his hand and his other arm round her, and counted under his breath, and she lay against him with her head on his chest and counted with him, in her head, the way he'd taught her, until she lost it, somewhere past a thousand, in the sound of his heart." },
        { n: "She didn't remember falling asleep. She remembered his mouth on her hair at some point, and the sound of the stopwatch being set down very carefully on the floor, and his voice saying the number to nobody, low, the way you'd say a prayer, and then nothing." },
        { n: "She woke at dawn. Gray light. His room. The rain had stopped and the window was white with mist, and he was asleep on his back with his head tipped against the wall and his mouth a little open, still sitting up, still in his clothes, and his right hand was closed round her wrist on the blanket." },
        { ifFlag: 'dead.shinjiro', then: [
          { n: "Not closed. She looked again. Resting. The fingers lay over her wrist, loose, the way anyone's hand lies on anything in sleep. It didn't close anymore. It hadn't since the steps. He'd told her it had been waiting to hold someone, and it had held him, and now it didn't know what it was for." },
          { n: "She didn't move it. She lay in the gray light with his loose hand on her and let it stay there, as if it were holding on, so that if he woke he'd see it and think it had." }
        ], else: [
          { n: "Closed all the way. In his sleep. Exactly the size of it." },
          { n: "She could have opened it. She knew how now; she'd done it a dozen times. Little finger first. She lay in the gray light and looked at it, his hand on her, his taped knuckles, the morning coming up white in the window, and didn't. She left it where it was. She lay back down against him and let it hold on, and closed her eyes, and let him have it, just this once, just until he woke." }
        ] },
        { flag: 'eqx-aki-woke' }
      ], [
        { n: "They sat on the roof with their backs to the water tank and a blanket over their knees, the way the rota said, two names, and when the red came at twelve it came up over the edge of the roof and filled the whole sky at once, the color of the inside of an eyelid, and the town below went still in it, and the coffins stood in the street like people waiting for a bus." },
        { n: "He counted under his breath. She counted with him, in her head, the way he'd taught her, until she lost it somewhere past a thousand. She didn't remember falling asleep. She remembered his jacket coming round her shoulders, and the stopwatch being set down very carefully on the concrete, and his voice saying the number to nobody, low, and then nothing." },
        { n: "She woke at dawn on the roof with her head on his shoulder and the planters gray with dew and the whole town white with mist below them, and he was asleep sitting up against the tank with his head tipped back, and his right hand was closed on her sleeve." },
        { ifFlag: 'dead.shinjiro', then: [
          { n: "Not closed. Resting. It didn't close anymore. It hadn't since the steps. She left it there anyway, lying on her sleeve, and sat very still so it wouldn't slide off, so that when he woke he'd see it there and think, for one second, that it had held on." }
        ], else: [
          { n: "Closed all the way, in his sleep, a fistful of her blazer. She could have opened it. She knew how. She sat in the mist and looked at it and didn't, and let it hold on, just this once, until he woke." }
        ] },
        { flag: 'eqx-aki-roof-dawn' }
      ]),
      { n: "At ten past six somebody came up the stairs, or along the corridor, in socks, quietly, the way you'd walk past a room with a baby in it, and stopped, and stood there a moment. She heard the soft scratch of a pen on paper. Then whoever it was went away again down the stairs without a word, and from the kitchen, a minute later, came the sound of a kettle going on, and Junpei humming, off-key, the theme from the Giants' radio broadcast." },
      { n: "When Akihiko woke he looked at his hand first. Before her. Before the window. He looked at it a long time. Then he looked at her, and she watched him start to say *sorry*, and stop, and not say it." },
      { s: 'akihiko', f: 'neutral', t: "...Sixty-eight forty. I got it before I dropped off. I'm sure. I'm nearly sure." },
      { s: 'akihiko', f: 'earnest', t: "You stayed up with me. You didn't have to. I didn't ask. I want that noted." },
      { s: 'solar', f: 'happy', t: "It's noted." },
      { n: "He didn't let go yet. She didn't make him. Downstairs the kettle began to whistle, and somebody took it off before it could get loud." }
    ] },
    { after: '10/28', title: '7: seconds out', place: 'Port Island · Pier', time: 'After School', music: 'tender', scene: [
      { bg: 'port-island-pier' },
      { n: "The wind had turned at the end of October. It came off the bay out of the north now, with nothing in it but cold and salt, and it ran along the pier ahead of her flattening the water between the pilings into small hard ridges, and the gulls had come back to the rail, all of them facing the same way, into it, like a row of old men at a bus stop who'd agreed not to talk to each other." },
      { ifFlag: 'dead.shinjiro', then: [
        { n: "He wasn't running. She'd known he wouldn't be, the way you know a room is empty before you open the door. He was sitting on the iron bollard by the gate, the one she'd sat on in April, in a black training jacket zipped to the throat, with the yellow stopwatch in his lap and both hands lying open on his knees, palms up, the way he'd held them all through the sutra on Tuesday." },
        { n: "There was no tape on the right one. She'd never seen it bare this year. The skin across the palm had gone pale and soft, and there were three faint white creases round it where the tape had been, like the mark a watch leaves when you finally take it off." },
        { n: "He saw her at the gate and didn't get up. He lifted the stopwatch an inch off his knee, which was hello, and put it back down." },
        { s: 'akihiko', f: 'neutral', t: "I came to run. I've come every day since Tuesday to run. I put the shoes on, I stretch, I get as far as this bollard." },
        { s: 'akihiko', f: 'sad', t: "My legs are fine. I want that on the record. There's nothing wrong with them. I just can't think what I'd be running at." },
        { choose: [
          { t: "(Sit on the boards with your back against the bollard, next to his knee.)", notes: 3, then: [
            { n: "She sat down on the cold boards with her back against the iron, her shoulder against his shin, and looked at the bay with him. After a while his right hand came off his knee and settled on top of her head, open, flat, heavy, the way you'd rest a hand on a dog that had come and leaned on you without being called." },
            { s: 'akihiko', f: 'neutral', t: "...That's not closing. Notice that. It doesn't close anymore. Not on anything. I keep waiting for it to." },
            { s: 'akihiko', f: 'sad', t: "All year I wanted it to stop. Now it's stopped and I'd give my left one to have it back." }
          ] },
          { t: "You don't have to run today.", notes: 2, then: [
            { s: 'akihiko', f: 'neutral', t: "I know. That's the worst part. Nobody's making me." },
            { s: 'akihiko', f: 'sad', t: "Mitsuru took SANADA REST off the fridge. She hasn't put anything up in its place. I stand in front of it in the mornings like an idiot, waiting to be told." }
          ] },
          { t: "Then run at me. I'll stand at the far end.", notes: 3, then: [
            { s: 'akihiko', f: 'surprised', t: "...At you." },
            { s: 'solar', f: 'neutral', t: "You said you couldn't think what. I'm giving you a what." },
            { n: "He looked at her for a long time with the wind pulling at his hair. Something in his face moved, not much, the way ice moves on a pond in March before anybody's willing to walk on it." },
            { s: 'akihiko', f: 'neutral', t: "That's a terrible idea. Don't go anywhere yet. I'm thinking about it." }
          ] }
        ] }
      ], else: [
        { n: "He was running, and he wasn't alone. On the bollard by the gate, in a borrowed coat a size too small for him, because his own had come back from the Road Home in three long pieces, sat Shinjiro, with the yellow stopwatch in his left hand and his right arm held tight against his side in the way that meant the bandages under his shirt went all the way round. He looked like a man who'd been put somewhere against his will and had decided to make everyone pay for it." },
        { s: 'shinjiro', f: 'neutral', t: "Fifty-nine. He's slow. Tell him he's slow, he won't hear it from me." },
        { n: "Akihiko came in at the gate, breathing hard, and pulled up, and looked at the stopwatch over Shinjiro's shoulder with an expression of personal betrayal." },
        { s: 'akihiko', f: 'competitive', t: "That was a fifty-six. I felt it. That was a fifty-six at worst." },
        { s: 'shinjiro', f: 'neutral', t: "I've got the watch. You've got opinions." },
        { n: "Shinjiro looked at Solar then, properly, from her shoes up, the way he'd looked at a pot to see whether it was done." },
        { s: 'shinjiro', f: 'serious', t: "You eat?" },
        { s: 'solar', f: 'neutral', t: "I had lunch." },
        { s: 'shinjiro', f: 'neutral', t: "Lunch was five hours ago. That's not eating, that's a rumour." },
        { n: "He stood up. It took him a while, and he did it one-handed, with his jaw set, and when Akihiko moved to help he looked at him in a way that made Akihiko put both hands in his pockets. He put the stopwatch in Solar's palm on the way past." },
        { s: 'shinjiro', f: 'neutral', t: "Your turn. He won't stop unless somebody's watching. Don't keep her out in this, Aki. Bring her back by seven, there's soup." },
        { choose: [
          { t: "(Watch him all the way up the road.)", notes: 3, then: [
            { n: "She watched him go up the road toward the station, slow, careful on the slope, the borrowed coat riding up at the wrists. At the corner he turned round. He didn't wave. He just lifted the hand that worked, a little, the way you'd lift it to check for rain, and then went on." },
            { s: 'akihiko', f: 'neutral', t: "He does that now. Turns round at corners. He never used to. He used to just go." },
            { s: 'akihiko', f: 'serious', t: "I don't know what it means. I'm not asking him. I'm just glad every time." }
          ] },
          { t: "He came out in this wind for you.", notes: 2, then: [
            { s: 'akihiko', f: 'flustered', t: "He came out in this wind for *you*. He asked who'd been timing me on Fridays. I said you were. He said that wasn't timing, that was staring, and somebody responsible ought to come and get a real number." },
            { s: 'akihiko', f: 'happy', t: "Fifty-nine. He's a liar. I'm not even angry. It's the best week I've had all year." }
          ] }
        ] },
        { s: 'akihiko', f: 'neutral', t: "It closed on his shoulder. At the stove, the morning after. I didn't take it off." },
        { s: 'akihiko', f: 'serious', t: "I've stopped taking it off him. I take it off everybody else. Not him. He says it's like being followed round by a crab. He hasn't once asked me to stop." }
      ] },
      { n: "She looked down the pier, out of habit now, the way your tongue goes to a sore tooth. The white saucer was on the last bollard where it had been since August, upside down, its rim gone gray at the edge with weather." },
      { n: "There was another one on the second-to-last." },
      { n: "The same kind. White, small, upside down on the iron cap of the bollard where he'd turned every day since August, fourteen meters short of the end; and its rim was clean. New. The gulls along the rail had left a gap round it the width of a person." },
      { s: 'akihiko', f: 'serious', t: "Wednesday. It was there Wednesday morning. The man in the ticket office says nobody's been through the gate but me. I believe him. He'd remember. He doesn't like me." },
      { s: 'akihiko', f: 'neutral', t: "It's coming in. One bollard at a time. Like it's walking up the pier toward the gate." },
      { s: 'akihiko', f: 'serious', t: "Like somebody's setting places." },
      { choose: [
        { t: "(Walk out and look at it. Don't touch it.)", notes: 2, then: [
          { n: "She walked out. The boards were slick and gray and the wind pushed at her back the whole way, as if it wanted her there sooner. The new saucer sat on the iron with a fine pale ring round the bottom of it, where something had sifted out from under the rim and caught in the rust. It smelled of nothing. Then, when she bent closer, of something sweet and starchy, like rice steamed too long in a covered pan." },
          { n: "When she came back he hadn't moved from the gate. He'd watched her the whole way out and the whole way back with the stopwatch running in his hand, and he stopped it when she reached him, and didn't look at the number." },
          { s: 'akihiko', f: 'neutral', t: "Well?" },
          { s: 'solar', f: 'neutral', t: "Flour." },
          { s: 'akihiko', f: 'serious', t: "...Yeah. I knew. I wanted somebody else to say it." }
        ] },
        { t: "Then run the whole pier. Past both of them.", notes: 3, then: [
          { ifFlag: 'dead.shinjiro', then: [
            { s: 'akihiko', f: 'sad', t: "...I haven't run since the steps." },
            { s: 'solar', f: 'neutral', t: "I know." }
          ], else: [
            { s: 'akihiko', f: 'happy', t: "Ha! He said that. In fewer words. He said *go on, then*, and then he timed me wrong on purpose." }
          ] }
        ] },
        { t: "Let's go somewhere else today.", notes: 2, then: [
          { s: 'akihiko', f: 'neutral', t: "Yeah. Yeah, okay. After. Somewhere with walls." },
          { s: 'akihiko', f: 'serious', t: "One length first. I'm not leaving it the pier." }
        ] }
      ] },
      { n: "He took off his jacket and dropped it on the bollard and went to the gate and put his toes to the line nobody else could see, and she held the stopwatch up, and he looked at her over it, once, and went." },
      { n: "He ran past the second-to-last bollard without slowing. He ran past the clean saucer close enough to touch it, and didn't, and his stride didn't change, and she watched the gulls go up off the rail ahead of him in a long white sheet and come down again behind him like a wave closing. At the end he slapped the last bollard with the flat of his hand, a hand's width from the gray rim, so hard she heard it from the gate, and turned, and came back on the other side of the pier, the far rail, as if on the way home he'd rather not pass them twice." },
      { ifFlag: 'dead.shinjiro', then: [
        { n: "He came in slow. Slower than April. He pulled up in front of her and bent over with his hands on his knees and didn't ask for the number, so she read it to him." },
        { s: 'solar', f: 'neutral', t: "One-oh-two." },
        { s: 'akihiko', f: 'surprised', t: "...That's terrible." },
        { n: "He started to laugh. It came up out of him bent double on the boards, helpless, a sound she hadn't heard since September, and halfway through it stopped being laughing and he stayed bent over a while longer with his face hidden, and she stood beside him with her hand flat between his shoulder blades and the wind going over them both, and didn't say anything, and didn't take her hand away." },
        { n: "When he straightened up he took the tape roll out of his jacket and tore a strip and wrote on it against his knee, and stuck it to the back of her hand instead of the roll. *1:02. FIRST.*" },
        { s: 'akihiko', f: 'neutral', t: "First one since. Keep it. I don't want it on the wall." }
      ], else: [
        { n: "He came in hard, in a straight line at the gate, and pulled up a stride past her, and turned, and looked at the stopwatch in her hand." },
        { s: 'solar', f: 'neutral', t: "Fifty-five." },
        { s: 'akihiko', f: 'happy', t: "Fifty-five! Into the wind! That's—" },
        { n: "He looked up the road toward the station, where a man in a borrowed coat had gone round a corner ten minutes ago." },
        { s: 'akihiko', f: 'happy', t: "Don't tell him. He'll say his watch was right and yours is broken. He'll be insufferable. I need him insufferable for at least another forty years." }
      ] },
      { s: 'akihiko', f: 'neutral', t: "Come on. I've got somewhere. It's got walls." },
      { place: 'Port Island · Boxing Gym', time: 'Evening', bg: 'gekkoukan-boxing-club', music: 'tender', soft: true },
      // BG: eqx-station-boxing-gym — a small old boxing gym under the monorail tracks by Port Island Station at night: one ring with sagging ropes, a row of patched heavy bags, a bench by the ring with a dent in its cushion, peeling fight posters, one buzzing fluorescent tube.
      { n: "The gym was under the monorail, two minutes from the station, down a flight of concrete steps that smelled of rain and old cigarettes: one ring with its ropes gone slack, six heavy bags patched with silver tape, a mirror along one wall that made the whole place look twice as big and twice as tired, and a smell she remembered with her whole body from a year ago, leather and liniment and sweat and the dust that comes off canvas when somebody falls on it." },
      { n: "It was empty. He had a key. He had it on a bootlace round his neck, under his shirt, and he unlocked the door with it and turned on one long fluorescent tube that took three tries to catch." },
      { s: 'akihiko', f: 'neutral', t: "Kanda-san shuts at six now. He's run this place since before I was born. Seven in the morning till ten at night, every day, Christmas, New Year. He's seventy-three. I've never seen him sit down." },
      { s: 'akihiko', f: 'serious', t: "He shuts at six now because he's got supper. At a house on the river. Every night. He gave me the key so I'd stop banging on the door at eight." },
      { s: 'akihiko', f: 'neutral', t: "He looks very well. Rosy. He told me I ought to come along one night, the lady always asks after the boy who runs." },
      { n: "He said it plainly, unwinding a pair of hand wraps from a hook by the ring, and she watched him not look at her while he said it, and knew he'd already put it with the coincidences, in the pocket with the tape." },
      { ifFlag: 'dead.shinjiro', then: [
        { n: "There was a bench beside the ring. An old padded one, the vinyl split along one seam, and in the cushion at the end nearest the ropes a dent, the shape a person leaves when he's sat in the same place, the same way, a great many evenings with his arms folded watching someone else work." },
        { n: "Akihiko didn't look at it. He walked round it to get to the ring, the long way, the way he'd come back on the far side of the pier." }
      ], else: [
        { n: "There was a bench beside the ring with a dent in its cushion. Shinjiro wasn't allowed to lift anything heavier than a ladle until Christmas, Akihiko said, by order of three doctors and Mitsuru, and so he hadn't been here since August, and the dent was still there anyway, holding his shape for him." }
      ] },
      { n: "He wrapped her hands. He did it the way he'd taught her last year, standing in front of her with her wrist in his left hand, over the knuckle, under, keep it flat, not too tight or it goes to sleep, and she watched his face while he did it, the concentration, the small crease between his brows, and the fluorescent light buzzed and a train went over the roof and every heavy bag in the place swung, very slightly, on its chain, and settled." },
      { s: 'akihiko', f: 'earnest', t: "Everybody thinks a fist's holding. It's not. That's the first thing anybody gets wrong." },
      { s: 'akihiko', f: 'neutral', t: "You keep it loose till the end. Loose, loose, loose, and you close it right at the last second, right as it lands, and then you let it go. Right away. You let the whole thing go through." },
      { s: 'akihiko', f: 'serious', t: "If you hold on to it, it's dead before it gets there. It just pushes. Nothing goes through a push." },
      { n: "He put on the focus mitts and held them up, and his face changed into the face he wore in the ring, open and very still, and he nodded at her." },
      { choose: [
        { t: "(Throw it. All the way. Let it go.)", notes: 3, flag: 'eqx-aki-let-fly', then: [
          { n: "She threw it. Loose, loose, and then shut at the last second, the way he'd said, and it hit the mitt with a flat sharp pop that went round the empty gym and came back off the mirror, and her whole arm sang with it up to the shoulder." },
          { n: "He laughed. Out loud, surprised, the real one." },
          { s: 'akihiko', f: 'happy', t: "That. *That's* it. Again." },
          { n: "She did it again. And again. Pop, pop, pop, the sound getting cleaner each time, and he was grinning by the fifth, moving the mitts round so she had to chase them, calling the numbers the way he called them on the river, and by the twentieth she was laughing too and couldn't breathe and he dropped the mitts and caught her by both wrapped wrists, not hard, just to stop her." },
          { s: 'akihiko', f: 'earnest', t: "You let go like it's nothing. Every time. Like it costs you nothing at all." },
          { s: 'akihiko', f: 'neutral', t: "...You'll have to teach me that. I mean it. Put it on the schedule." }
        ] },
        { t: "(Throw it and keep your fist pressed into the mitt.)", notes: 2, then: [
          { n: "She threw it and didn't let it come back. She kept her fist against the mitt, pushing, and felt the push go nowhere, into his arm and out through his shoulder into the floor." },
          { s: 'akihiko', f: 'serious', t: "No. See? You're holding. It's dead. Nothing's going through, it's just leaning on me." },
          { n: "She looked up at him over their two hands, and didn't say anything, and watched him hear what he'd said. He took the mitt away slowly." },
          { s: 'akihiko', f: 'neutral', t: "...Yeah. All right. I heard it. You didn't have to make the point with your whole arm." }
        ] },
        { t: "Switch. You hit. I'll hold the pads.", notes: 3, then: [
          { n: "She took the mitts off him and put them on, and they were enormous on her, and held them up. He wrapped his own hands, fast, without looking. Then he put his right hand up to throw and stopped." },
          { ifFlag: 'dead.shinjiro', then: [
            { n: "It wouldn't close. She watched him try. He stood in front of her with his right hand up, open, and told it to make a fist, and it lay there at the end of his arm with the fingers loose and a little curled, like a hand asleep, and didn't." },
            { s: 'akihiko', f: 'sad', t: "...Look at that. All year I couldn't get it open. Now I can't get it shut." },
            { n: "He threw the left instead. It was very good. He threw it forty times without stopping, and she held the mitt up for every one, and didn't say anything about the other hand, and neither did he." }
          ], else: [
            { n: "He threw it, and it was beautiful, the way it had always been beautiful, the whole of him going into it from the floor up; and then it didn't come back. His fist stayed on the mitt. Pushing. She felt it go through her arm into her shoulder and keep going, and saw his face, and saw that he could feel it too and couldn't make it stop." },
            { n: "She didn't step back. She leaned into it, a little, so it had something to push against, until it let go by itself, and he took his hand back and looked at it and shook it out as if it had been stung." },
            { s: 'akihiko', f: 'serious', t: "...That's new. In the ring, too. Brilliant." }
          ] }
        ] }
      ] },
      { n: "Afterward they sat on the edge of the ring with their legs hanging over the apron and their hands still wrapped, sharing a bottle of something blue and sweet from the machine by the door, and he told her about March, which he hadn't meant to; she could tell by the way he started it, sideways, looking at the mirror." },
      { s: 'akihiko', f: 'neutral', t: "Mitsuru's making a list. For the end. If there's an end, if there's a door. Who goes where. She's got a column for everybody, in pencil. She's done the girls. She's done Ken." },
      { s: 'akihiko', f: 'neutral', t: "She asked me what to put in mine. I said wherever Solar is. She wrote it down, and then she rubbed it out, and she said *Akihiko, that's not an answer, that's an address.*" },
      { ifFlag: 'eqx-asked-akihiko', then: [
        { s: 'akihiko', f: 'earnest', t: "And I know what goes in it. You asked me. I've got it from you, out loud. I just can't get her to write it in pen. She looks at me like I've told her something sad." }
      ], else: [
        { ifChoice: { 'asks.akihiko': 'yes' }, then: [
          { s: 'akihiko', f: 'neutral', t: "You said I'm allowed to hold on. So that's what I told her to write. *Holding on.* She said that wasn't a place either." }
        ], else: [
          { ifChoice: { 'asks.akihiko': 'no' }, then: [
            { s: 'akihiko', f: 'neutral', t: "They wrote back, did I tell you? The program. They'll hold it one more year. So I've got a country and a date and a pool fifty meters long, and nothing in her column." },
            { s: 'akihiko', f: 'sad', t: "You told me to go. I've still got that. I take it out sometimes and look at it, like the letter." }
          ], else: [
            { s: 'akihiko', f: 'neutral', t: "I told her *mine*. I said Solar said it's mine to decide, so I'm deciding, so leave it blank till I have. She said that was the first sensible thing anyone in this house had said to her in a month." },
            { s: 'akihiko', f: 'serious', t: "It's still blank. I look at it on her desk. It's the scariest thing in the building, and I live with a dog that won't stop watching the front door." }
          ] }
        ] }
      ] },
      { n: "A train went over. The tube light flickered, went out for a second, and came back with a buzz; and in the second it was out, in the dark, the mirror along the wall had held the two of them on the edge of the ring and the rows of bags behind them, all hanging still, and she could have sworn one more bag than there were." },
      { n: "She didn't look again. She didn't want to know whether she'd sworn right." },
      close([
        { n: "He was looking at her. She felt it before she saw it, the way she felt the sun on one side of her face, and turned, and he didn't look away, and his wrapped hand was on the canvas between them, open, and she put hers on top of it." },
        { s: 'akihiko', f: 'flustered', t: "...We're in a gym." },
        { s: 'solar', f: 'happy', t: "You've got a key." },
        { n: "He made a sound that might have been a laugh and kissed her, and it tasted of the blue drink and the cold they'd come in out of, and then it didn't taste of anything at all, and somewhere in it she ended up with her back against the ring post and the slack rope at her shoulders and his wrapped hands either side of her head on the turnbuckle, not touching her, holding the ropes, as if he'd decided that if his hands were going to hold on to something tonight they'd hold on to the ring. She pulled one of them down to her waist herself. It stayed. It shook a little." },
        { n: "He kissed her neck under her ear, where her pulse was, and stopped there, and she felt him not count it, felt him choose not to, his breath going out against her skin very slowly; and she put her wrapped fingers into his hair and the train went over again and the whole gym trembled on its foundations, every bag, every rope, and neither of them noticed when." }
      ], [
        { n: "He took the blue drink off her, drank half of what was left, and gave it back, and they sat with their wrapped hands in their laps like two people at the end of a long shift." },
        { s: 'akihiko', f: 'happy', t: "First time I ever beat Shinji was in a ring like this. I was eleven. He let me. I found out at fourteen. I've never forgiven him." },
        { ifFlag: 'dead.shinjiro', then: [
          { s: 'akihiko', f: 'sad', t: "...I'm still not forgiving him. It's the only fight I've got left with him. I'm keeping it." }
        ], else: [
          { s: 'akihiko', f: 'neutral', t: "I'm going to make him do it again properly. When three doctors and Mitsuru say so. I've got it in the book. He knows. He says *bring a mouthguard, you'll need it for crying*." }
        ] }
      ]),
      { n: "Then someone knocked on the back door." },
      { n: "There was a back door. She hadn't noticed it; it was at the far end past the bags, a steel fire door painted the same tired green as the walls, with a push bar and a bolt, and it gave onto the alley behind the station where the bins were. Someone knocked on it. Two knocks. Then a pause, the length of a breath. Then two more. Polite. Unhurried. The way you knock on a door you know somebody is behind." },
      { n: "It was a quarter to eight in the evening. The city outside was the ordinary color of a city. On the monorail over their heads people were going home with shopping bags, reading their phones. It wasn't the red. It was nowhere near the red." },
      { n: "Akihiko was off the ring before she'd finished turning her head. He stood in the middle of the floor between her and the door with his wrapped hands loose at his sides, not up, not yet, and looked at it." },
      { n: "Two knocks. A pause. Two." },
      { choose: [
        { t: "Don't open it.", notes: 3, then: [
          { s: 'akihiko', f: 'serious', t: "I wasn't going to." },
          { n: "He didn't move toward it. He didn't move away from it either. He stood exactly where he was, and after a while she understood that he was counting, under his breath, and that when he got to sixty he was going to walk away from it, and she got down off the ring and stood beside him and counted with him, the two of them in the middle of an empty gym, out loud by the end, and at sixty they turned round together and got their bags and went out the front." }
        ] },
        { t: "(Take his wrapped hand. Walk him to the front door.)", notes: 3, then: [
          { n: "She took his hand. It was open. She walked him to the front door, past the bench, past the mirror, not fast, and he came, and the knocking came again behind them, two, a pause, two, and neither of them looked back, and she felt his hand in hers try once to close and then, very deliberately, not." }
        ] },
        { t: "Who's there?", notes: 1, then: [
          { n: "Her own voice went down the gym and hit the green door and nothing answered it. The knocking stopped." },
          { n: "Then, through the steel, low, kind, in a voice that was very nearly her mother's, any of them, all of them: *It's cold out here, love.*" },
          { n: "Akihiko's hand closed on her arm so fast it hurt. He had her up the front steps and out under the monorail and into the lit street before she'd breathed again, and he didn't let go until the station, and she didn't ask him to." }
        ] }
      ] },
      { place: 'Port Island Station · Gates', time: 'Night', bg: 'portisland-station-night', soft: true },
      { n: "He locked the gym from the front and put the key back under his shirt on its bootlace and stood with his hand flat over it for a second, the way you'd check your heart was still there." },
      { s: 'akihiko', f: 'neutral', t: "There's a bolt on that door. On the inside. I checked it before we came in. I'm telling you so you know I checked." },
      { s: 'akihiko', f: 'serious', t: "I'm not going back to check it again. I want that noted. I'd like it noted that I wanted to." },
      { n: "At the gates he didn't say a day or a time. He didn't say anything. He reached out and, with one finger, pressed the strip of tape on the back of her hand flat where its corner had lifted, or pressed nothing, the place on her hand where it would have been, and stepped back." },
      { n: "At one in the morning her phone buzzed on the pillow, after the red had drained back out of the window street by street." },
      { phone: [
        { from: 'akihiko', t: "69:52." },
        { from: 'akihiko', t: "Kanda-san's light was on in the gym when I walked past at eleven. He shuts at six. I didn't go in." }
      ], contact: 'akihiko' },
      { ifFlag: 'eqx-aki-let-fly', then: [
        { phone: [ { from: 'akihiko', t: "You threw it like it was nothing. I keep thinking about that. Loose till the very end." } ], contact: 'akihiko' }
      ], else: [
        { phone: [ { from: 'akihiko', t: "You held the pads up for me. First thing my hands have hit in a month that hit back right." } ], contact: 'akihiko' }
      ] },
      { n: "She lay with the phone on her chest and her wrapped hands still faintly creased where the wraps had been, and thought about a green steel door, and a bolt she'd watched him check, and a light on in a building at eleven that was shut at six; and somewhere far off, under the monorail, a bag she had not counted swinging very slightly on its chain in the dark, for nobody." }
    ] },
    { after: '12/1', title: '8: an inch', place: 'Port Island · Pier', time: 'After School', music: 'tender', scene: [
      { bg: 'port-island-pier' },
      { n: "December came in wet. Not snow; the bay didn't do snow, Akihiko said, it did this, a fine cold sleet that came sideways off the water and couldn't make up its mind, so that it melted on the boards and froze on the rail and sat in the hair like sugar. The gulls had given up on the pier altogether. It was just him, running, the whole three hundred and twelve, and the bollards going out ahead of him in a gray line into the gray." },
      { n: "There were four saucers now." },
      { n: "She counted them from the gate, twice, because she always counted twice. The old one on the last bollard. The clean one on the second-to-last, from October. Then one on the bollard before that, and one on the bollard before that, each a little whiter than the last, each one a little nearer, walking up the pier toward the gate at about one bollard a fortnight, setting places. If you did the arithmetic, and she found she'd already done it, they'd reach the gate at the beginning of March." },
      { n: "He ran past every one of them. Out and back, slapping the last bollard at the end, never breaking stride, and he came in at the gate in a long hard finish with the sleet in his eyelashes and stopped the stopwatch and, for the first time since April, held it out to her to read before he'd looked at it himself." },
      { s: 'solar', f: 'neutral', t: "Fifty-four." },
      { s: 'akihiko', f: 'surprised', t: "...In this?" },
      { s: 'akihiko', f: 'happy', t: "Ha! Fifty-four. In sleet. Past four of them. I'd like to see anything that sets tables do a fifty-four." },
      { choose: [
        { t: "(Wipe the sleet off his eyelashes with your thumb.)", notes: 3, then: [
          { n: "She reached up and wiped it off with her thumb, one eye and then the other, and he held still for it with his eyes shut, the way a boy holds still to have his face washed, breathing hard, and when she'd done it he opened them and looked at her from very close and forgot, visibly, whatever he'd been about to say about split times." }
        ] },
        { t: "You're getting faster. All year you've been getting faster.", notes: 2, then: [
          { s: 'akihiko', f: 'neutral', t: "I know. I don't like it. Nobody gets faster in December. You only get faster when you're running *from* something." },
          { s: 'akihiko', f: 'serious', t: "...Or to. Fine. Or to. I'm keeping both on the list." }
        ] },
        { t: "They'll be at the gate in March.", notes: 2, then: [
          { s: 'akihiko', f: 'serious', t: "I did that sum too. On the ninth bollard, in November. I nearly stopped running." },
          { s: 'akihiko', f: 'neutral', t: "Then I thought, fine. Let it come up the pier. I'll be here. I'll be here every day it does. It can watch me run past it all the way to the gate." }
        ] }
      ] },
      { n: "They sat under the ticket office overhang on the bench from June, and he took out the roll of tape, which had grown so fat with strips that it didn't fit in his pocket anymore and lived in a sandwich box now, and unrolled November onto her knee." },
      { n: "It was a long month. The nights were longer; the hour was longer; sixty-nine, seventy, seventy and change, a slow climb with no teeth in it until the twenty-second." },
      { n: "*11/22 — 84:12.* And under it, in his capitals, smaller, pressed hard:" },
      { ifFlag: 'dead.aigis', then: [
        { n: "*A.* That was all. One letter, and then a long space on the strip, as if he'd meant to write more and the pen had stopped wanting to." },
        { s: 'akihiko', f: 'sad', t: "She went in after somebody who'd opened the door. She didn't need to breathe. She told me in April that was the one thing she was sure she was for." },
        { s: 'akihiko', f: 'serious', t: "She held on to Hyein's coat with everything she had, and she had a lot, and it held. Hyein's here. That's what it bought. And Mitsuru's got a hand in a box the size of a shoe box, wrapped in a bit of coat." },
        { s: 'akihiko', f: 'sad', t: "That's what holding on gets you. All the way. A hand that won't open, and nobody left on the other end of it." },
        { n: "He said it to the sleet, very flatly, and then looked at his own hand on her knee, on the tape, and took it away." }
      ], else: [
        { n: "*NOTHING. AGAIN.* And under that, crowded in at the very end of the strip: *2nd TIME.*" },
        { s: 'akihiko', f: 'neutral', t: "Hyein didn't open it. So Aigis didn't have to go in after anybody. She stood at the edge of the water and took a reading and said *three, alive*, and that was the best sentence I've heard all year." },
        { s: 'akihiko', f: 'serious', t: "Twice now it went down there hungry and came back up with nothing. It's got four saucers on my pier and nothing in its mouth. I want it on the record that I enjoyed that." }
      ] },
      { ifEvent: 'eqx-persimmon', then: [
        { n: "There was a strip for the ninth of December, the morning the girls had found the teacher in the tree. He hadn't written a number on it. He'd written one word. *TREE.*" },
        { s: 'akihiko', f: 'neutral', t: "I didn't know what to time. The hour was normal that night. Sixty-nine something. It didn't need the red. It just did it at breakfast." }
      ] },
      { ifEvent: 'eqx-1221', then: [
        { n: "And after it, the twenty-first, the eclipse, with no number. A long strip, folded over on itself, sticky side to sticky side, so nobody could read it. He put his thumb on it, the way he had in June." },
        { s: 'akihiko', f: 'serious', t: "Not that one. I know what's in it. So do you. I'm not putting her name on my wall." }
      ] },
      { n: "On the twenty-second, on the reflection floor, every one of them had stood over the still water and watched their own face under it ask them for something. She'd heard his. Everybody had." },
      { s: 'akihiko', f: 'neutral', t: "Mine said *hold on*. In my voice. *Hold on, hold on, don't let go.* Like a record that's stuck." },
      { s: 'akihiko', f: 'serious', t: "And the worst thing is I listened to it and thought, well. Yes. Obviously. That's not even an ask. That's just me." },
      { ifFlag: 'dead.shinjiro', then: [
        { s: 'akihiko', f: 'sad', t: "My hand closed. Down there. On the rope, coming up, with Miseon-san on the stretcher behind me. First time since the steps. It closed and held and it was so *glad* to, I felt it be glad. And I was glad. And that frightened me more than anything at the bottom of that well." }
      ], else: [
        { s: 'akihiko', f: 'neutral', t: "My hand closed on the rope coming up and I didn't need it to. I was carrying a stretcher, I had both hands on the poles. It closed on the rope anyway. Like it had to have something." }
      ] },
      { ifFlag: 'eqx-aki-door-come', then: [
        { s: 'akihiko', f: 'neutral', t: "You told me if I went through the warm door you'd come in after me. I've been thinking about that the wrong way round all month. It doesn't make me want to go through. It makes me want to stand there forever so you'd never have to." }
      ] },
      { ifFlag: 'eqx-aki-door-his', then: [
        { s: 'akihiko', f: 'neutral', t: "I walked past the warm door on the twenty-second. Going down. I didn't stop. I didn't count to sixty. Mine, you said. So I didn't give it the minute." }
      ] },
      { ifFlag: 'eqx-aki-door-hand', then: [
        { s: 'akihiko', f: 'neutral', t: "I stood at the warm door last week and held my own hand open. Like you did on the bench. Palm up, in the other one. I must have looked like an idiot. It still knocked. I still walked away." }
      ] },
      { n: "The sleet had thinned to nothing, a gray hush over the water, and up the road from the station, very slowly, two people were coming down toward the pier gate." },
      { n: "Her mother. Her father beside her." },
      { n: "Solji was walking because the doctor in Tatsumi had said walk, every day, a little further; she was in Jaesang's long dark coat over her own, and she walked very upright, carefully, her shoulders back the way you hold yourself when something behind you hurts and you've decided not to let it show. Jaesang walked at her left side at her speed, which was slow, and his right hand was out. Not on her. An inch from the small of her back. All the way down the road, over the curb, round a puddle, the hand stayed an inch off her coat, never touching, moving when she moved, the way you'd walk beside somebody carrying something full to the brim." },
      { n: "Solji saw them under the overhang and lifted her hand, and smiled, the smile from the kitchen in Syracuse; and said something to Jaesang, and he said something back, and they didn't come over. They turned at the gate and went back up the road the way they'd come, slowly, his hand an inch from her back the whole way." },
      { n: "Akihiko watched them until they were gone. He didn't say anything for a long time." },
      { s: 'akihiko', f: 'neutral', t: "He does that all day. I've been watching him for a week. At breakfast. On the stairs. In the doorway of the lounge. An inch. All day long." },
      { s: 'akihiko', f: 'serious', t: "Do you know how hard that is? With a hand? I know exactly how hard that is. It's the hardest thing I've ever watched anybody do. Every second it wants to touch her. Every second he doesn't, because it'd hurt her." },
      { s: 'akihiko', f: 'earnest', t: "He's the strongest man in that house. Your father. I never thought I'd say that. Don't tell him. He'd ask me my split." },
      { choose: [
        { t: "He learned it in a day. Mom said.", notes: 2, then: [
          { s: 'akihiko', f: 'neutral', t: "A day. I've had a whole year and I can't do it for a minute." },
          { s: 'akihiko', f: 'sad', t: "...He had a better reason. That's all. It's easier to not hold on to somebody when holding on is the thing that hurts them." }
        ] },
        { t: "(Put your hand out an inch from his. Don't touch.)", notes: 3, then: [
          { n: "She put her hand out on the bench between them, palm down, an inch from his. Not touching. He looked at it. She felt the inch like a draft, like the warmth that comes off somebody's skin before you touch them, and watched him feel it too." },
          { n: "His hand moved, a little. Toward hers. And stopped. And stayed there, an inch away, trembling very faintly, the way his legs did at the end of a race; and they sat like that a long time, both of them looking straight ahead at the water as if nothing were happening on the bench at all." },
          { s: 'akihiko', f: 'flustered', t: "...This is unbearable. I want that on the record. I'm not moving it." }
        ] },
        { t: "You do it too. You just don't notice.", notes: 3, then: [
          { s: 'akihiko', f: 'surprised', t: "...I don't." },
          { s: 'solar', f: 'neutral', t: "At the mouth. On the pier in April. In the sea. You let go every time. One finger at a time, but you did it." },
          { s: 'akihiko', f: 'neutral', t: "That's prying. That's not the same as an inch." },
          { s: 'solar', f: 'neutral', t: "It's how you get to an inch." },
          { n: "He didn't answer that. He looked at his own hands for a long time, the bare one and the taped one, as if somebody had told him they were worth something and he was trying to work out how much." }
        ] }
      ] },
      { place: 'Iwatodai Dorm · Stairs', time: 'Evening', bg: 'iwatodaidorm-stairs-night', music: 'dorm', soft: true },
      { n: "The dorm was full in a way it hadn't been full before. The mothers were home, in the rooms Mitsuru had given up and Fuuka and Yukari had doubled up for, and the house had changed its sound around them: doors closed more softly, the TV was lower, there was always a kettle on, and somebody was always on the stairs going up with a cup of something to somebody who couldn't come down." },
      { n: "On the second landing his hand closed on the banister." },
      { ifFlag: 'dead.shinjiro', then: [
        { n: "It had started again on the twenty-second, on the rope. It had been closing on things all week, he'd told her on the bench, as if it had been let out of somewhere: cups, the strap of his bag, the edge of a table, and each time he looked at it with a kind of terrible relief, the way you'd look at a dog that had come home thin." }
      ], else: [
        { n: "It did that on stairs now. Every stair rail in the house, he said. It liked a rail." }
      ] },
      { n: "He stopped with it white-knuckled on the wood and the rest of him trying to go on up, and stood there, and swore, quietly, and from the lounge below a voice said *oh, I got this*, and Junpei came up the stairs two at a time in his socks with the hole at the big toe." },
      { s: 'junpei', f: 'happy', t: "Senpai. Senpai. Hold still. Little finger first. Don't fight it, you make it worse, it's like a Chinese finger trap except it's your whole personality." },
      { n: "He did it fast. Talking the whole time, about the Giants' winter trades, about the man in the ramen shop who'd lent him a karaoke machine, about anything; and the little finger came up off the rail, and the next, and the next, and the thumb, and Akihiko's hand came away and Junpei gave it back to him like something he'd found on the stairs." },
      { s: 'junpei', f: 'happy', t: "Three seconds. *Three.* That's a personal best, senpai, I want that noted. I've been training on jars." },
      { s: 'akihiko', f: 'neutral', t: "...You're getting fast, Iori." },
      { s: 'junpei', f: 'serious', t: "Gotta be. One of these days it's gonna be something big. Not a rail." },
      { n: "He said it lightly, going back down. He didn't look round. Akihiko watched him go with his freed hand open at his side, and something went over his face, and he didn't say whatever it was." },
      { place: 'Iwatodai Dorm · Roof', time: 'Night', bg: 'iwatodaidorm-roof-night', music: 'night', soft: true },
      { n: "Hanni's rota had *S + A* in that night's box. Nobody had written it but her. Nobody had said anything about it." },
      { n: "The roof was the coldest place in Iwatodai you could get to without a ticket. The wind came across from the bay with the sleet's ghost still in it, and the city lay out below them lit and wet and ordinary, the monorail going over the water like a thread somebody was pulling, and he'd brought two cans of hot coffee from the machine by the station and was holding his in both hands without drinking it, which she'd seen him do once before, on a different roof, in another year." },
      { n: "He knew she was remembering it. She saw him know. He put the can down on the parapet." },
      { s: 'akihiko', f: 'neutral', t: "I'm going to say something. It's not a question. I want that clear before I start. You don't have to answer it." },
      { s: 'akihiko', f: 'serious', t: "Everybody in this house is asking you for something. I can see it on you at breakfast. Your father's asking. Your mothers are asking without knowing they are. The thing on my pier is asking with plates. I'm not adding to the pile." },
      { s: 'akihiko', f: 'neutral', t: "Last year I fell first. At the ruler. Four centimeters. I told you that. I've been falling the whole time since. In three hundred and twelve meters of pier, every day. I've never once hit the bottom." },
      { s: 'akihiko', f: 'earnest', t: "That's all. That's the thing. It's not an ask. It's a split time." },
      { n: "He held his hand out. Not to her. Toward her, on the cold concrete of the parapet between them, palm down, and stopped it there. An inch from hers. Exactly. She could see him measure it." },
      { s: 'akihiko', f: 'neutral', t: "An inch. That's what I've got. I've been practicing. Your call." },
      { ifRomance: 'haechan', then: [
        { s: 'akihiko', f: 'serious', t: "And I know about him. Your other one. I'm not asking about that either. I've watched him keep every door in this house since October. I'd trust him with the last bollard. That's the most I've ever said about anybody." }
      ] },
      { route: [
        { t: "(Close the inch. Lace your fingers through his. Then kiss him.)", route: 'romance', notes: 3, then: [
          { n: "She closed it. She put her hand down over his on the cold concrete and turned it, slowly, until her fingers were through his, and felt the whole of him go still, the way he went still in the ring the second before a bell." },
          { n: "Then she kissed him, and he made the sound he'd made under the lamp in April, the sound of a man taking a punch he'd seen coming and decided to stand in, and his free hand came up into her hair, and his other hand, the one in hers, didn't close. She felt it not close. She felt him choose it, every second, the whole time, the hand just holding hers the way a hand holds a hand." },
          { s: 'akihiko', f: 'flustered', t: "...You closed it. Not me. That's on the record. You did that." },
          { s: 'solar', f: 'happy', t: "Noted." }
        ] },
        { t: "Stay. After March. Wherever I am, stay with me. Please.", route: 'romance', notes: 3, tally: { asked: 1, cakes: 1 }, flag: 'eqx-asked-akihiko', then: [
          { n: "His hand came down on hers before she'd finished. The inch went. All of it, at once, and his fingers closed round hers hard and sure and exactly the size of them, as if they'd been measured, and his face did the whole year in one go and didn't stop." },
          { s: 'akihiko', f: 'happy', t: "Yes. Yes. You asked. You never ask anybody and you asked me. Yes." },
          { n: "He kissed her with the whole of it, the pier, the sea, the well, hard and grateful and completely sure, and she kissed him back, and his hand was round hers on the parapet, closed, and wasn't going to open, and it felt, for a whole minute, in the wind on the roof, like the most right thing she had ever said." }
        ] },
        { t: "I've been falling since the shuttle run. Whatever happens in March is mine. Tonight, this is mine too.", route: 'romance', notes: 3, then: [
          { s: 'akihiko', f: 'surprised', t: "...The shuttle run." },
          { s: 'solar', f: 'neutral', t: "Before the ruler. You don't get to have fallen first." },
          { n: "He stared at her. Then he laughed, out loud, into the wind, helplessly, and the inch closed by itself, from both sides at once, and neither of them could have said afterward whose hand had moved." },
          { s: 'akihiko', f: 'happy', t: "That's— you can't just— I've been *winning* that one for a year." },
          { n: "She kissed him in the middle of the complaint. He didn't finish it." }
        ] },
        { t: "(Take his hand the way a friend takes it: hard, once. Then give it back.) You're my best friend, Akihiko. In every year.", route: 'friend', notes: 3, then: [
          { n: "She took his hand and held it, hard, the way you hold somebody's hand at the end of a fight in the ring, and then gave it back to him and put it in his own pocket for him." },
          { s: 'akihiko', f: 'neutral', t: "...Yeah." },
          { n: "He looked at the city for a long time. She watched it land, and watched him let it, the whole of it, all the way down, without prying anything off anything." },
          { s: 'akihiko', f: 'earnest', t: "Yeah. Okay. Best friend. In every year. I can hold that. That's— I'm good at holding things. That one I can hold forever and it won't hurt anybody." },
          { s: 'akihiko', f: 'happy', t: "I'm still timing you on Fridays. That's not negotiable. That's in the contract." }
        ] }
      ] },
      { ifRoute: 'romance', then: [
        { n: "They didn't stay on the roof long. It was cold, and then it wasn't, and then it was much too cold to be out there doing what they were doing, and she had her hands inside his jacket at the back and he had his coat round both of them and the coffee was ice on the parapet, and somewhere in it he said *my room's nearer* against her mouth like a man reading out a split, and she laughed, and they went down the stairs very quietly past every door in the house." },
        { n: "He didn't count. She knew; she listened for it. In his room in the dark with the wall of tape gone gray in the streetlight, every strip, every number, and his breath at her ear and her fingers in his hair and his hand open on the small of her back, flat, warm, staying exactly where it was as if it had been asked to and had decided to do it anyway, he didn't count anything at all." },
        { n: "At seven in the morning there was a knock on his door. One knock. Firm. Paternal." },
        { s: 'jaesang-runners', f: 'neutral', t: "Akihiko. A word. When you're decent. I'll be on the pier." },
        { n: "Footsteps going away down the hall, measured, correct, joyless. Akihiko lay on his back with his eyes wide open and her head on his chest and his heart going like the pier three times." },
        { s: 'akihiko', f: 'flustered', t: "...What do I say. What do I say to him. I can't say fifty-five again, he'll have me deported." },
        { s: 'solar', f: 'happy', t: "Tell him your intentions." },
        { s: 'akihiko', f: 'flustered', t: "My intentions are to be on that pier in nine minutes so he doesn't come back. That's as far as they go." },
        { n: "He went. She watched him from the window, in the gray, run down the hill toward the monorail in his training jacket with his shoes untied; and at breakfast, on the coffee table, the betting book was lying open where Junpei had left it, and under WHO GETS CAUGHT FIRST, in Junpei's capitals, freshly inked, was a new line: *SANADA, BY LEE (SR.). PAID OUT.*" }
      ], else: [
        { n: "The roof door banged. Junpei came out onto the roof in a jacket over his pajamas with three cans of cocoa in his arms and the betting book under one elbow, and stopped, and looked at the two of them at the parapet, and at Akihiko's right hand, which had closed on the cold rail beside him while he talked and hadn't been asked to." },
        { s: 'junpei', f: 'happy', t: "Senpai. Your hand's on the rail again." },
        { s: 'akihiko', f: 'neutral', t: "I know." },
        { n: "Junpei put the cocoa down and did it. Little finger first. Talking. Three seconds. Akihiko let him, and looked at the city, and when his hand came free he didn't put it in his pocket. He held it out, open, to Junpei, the way you'd hold out your hand to shake on something." },
        { s: 'akihiko', f: 'serious', t: "If it's ever something big. Not a rail. Whatever it is. You get it off me. I don't care how." },
        { s: 'junpei', f: 'surprised', t: "...Like, how big?" },
        { s: 'akihiko', f: 'serious', t: "Big. You'll know. I won't let go on my own. I've known that about myself since I was a kid. Somebody's going to have to make me." },
        { n: "Junpei looked at the hand. Then he shook it, once, the way you shake on a bet you're not sure you'll win." },
        { s: 'junpei', f: 'neutral', t: "That's the deal, then. Loud voice, fast hands. I'll put it in the book." },
        { n: "The three of them drank the cocoa on the roof with their backs to the water tank and one blanket that didn't go round, and Junpei made odds on the weather, and was wrong, and nobody minded." }
      ] },
      { n: "At one her phone buzzed." },
      { phone: [
        { from: 'akihiko', t: "70:41." },
        { from: 'akihiko', t: "Four saucers. I'm going to run past all of them tomorrow too. And the day after." },
        { from: 'akihiko', t: "An inch is a very long way. I want that on the record. Your father's a stronger man than me." }
      ], contact: 'akihiko' },
      { n: "She put the phone face down. Out on the pier, in the dark, in the sleet that had come back after midnight, four white saucers sat on four bollards in a row, getting nearer, and she lay in the warm and listened to the dorm breathe around her, all of it, every door, and didn't count, and didn't sleep for a long time anyway." }
    ] }
  ]
});
}
