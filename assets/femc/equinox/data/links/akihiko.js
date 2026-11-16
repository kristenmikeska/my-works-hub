/* Persona 3: Equinox · Akihiko Sanada · XVII The Star. Link data (femc-equinox-game.html). Format: link fields in
   assets/femc/game/core.js ("Links" header), scene lines in assets/femc/game/scene.js.
   Written: ranks 1–2 (rank 1 from 4/13, rank 2 from 4/21, both the Port Island pier after school; rank 2 branches on
   eqx-flour and eqx-golden-week). Ranks 3–15 still to write. Rank 2 flags (nothing reads them yet): eqx-aki-strip,
   eqx-aki-lamp-kiss. Speaker without a portrait: fisherman.
   Shape: the stub fields from assets/femc/equinox/data/links.js (this file wins over the stub, core.js indexLinks).
   Solstice's ranks are shared memory here; nothing reads Solstice link standing. */
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
    ] }
  ]
});
