/* Persona 3: Equinox · Jaehyun Lee · Emperor. Link data (femc-equinox-game.html). Format: link fields in
   assets/femc/game/core.js ("Links" header), scene lines in assets/femc/game/scene.js.
   Written: ranks 1–3 (from 4/13; his home is the Naganaki Shrine steps on weekday and Saturday afternoons but Wednesday,
   so 4/13 itself). Ranks 4–10 still to write. Shape: the stub fields from assets/femc/equinox/data/links.js.
   Solstice's Jaehyun link is shared memory ("the offer stands", the three knocks on the dorm door last October, "big bro",
   thirty-one stairs and her saying thirty-two, the layers); nothing reads Solstice link standing. Runners fences hold: no
   home event past the page, nothing about what he knows of the boys; Father stays offstage.
   Flags this file sets: eqx-jaehyun-knock (rank 1: Solar agrees to his three-knock rule). Nothing reads it yet.
   Rank 2 (after 4/23): reads eqx-jaehyun-knock, ifAfter 4/29, ifEvent eqx-read. Sets nothing.
   Rank 3 (after 6/14, after the 6/9 long table; the steps in the rain, the dorm gate; branches on eqx-last-grain,
   eqx-hunted, eqx-owed, eqx-table-op) records his own ask: tally asks.jaehyun (+ cakes / choose). The owed ask from the long table
   stays story-act3.js eqx-owed's (8/6); rank 3 only shows him still carrying it. Sets nothing else. */
(window.FEMC_GAME_LINKS ||= []).push({
  id: 'jaehyun', name: 'Jaehyun Lee', short: 'Jaehyun', arcana: 'Emperor', numeral: '', from: 'Runners', kind: 'searcher',
  world: 'R', romance: null, starts: '4/8', lodging: 'guesthouse',
  home: { area: 'shrine', spot: 'The Steps', slot: 'after', days: [1, 2, 4, 5, 6],
          hint: 'Afternoons at Naganaki Shrine, running the hundred and twelve steps until the light goes.' },
  approach: "Someone is running the long stone stairs up to Naganaki Shrine, all the way, at an even pace that doesn't change between the bottom and the top, and turning at the torii, and coming back down, and doing it again.",
  cast: {},
  ranks: [
    { after: '4/13', title: '1: the offer stands', place: 'Naganaki Shrine · The Steps', time: 'After School', music: 'tender', scene: [
      { bg: 'naganaki-shrine-spring' },
      // BG: naganaki-shrine-steps-day — the long steep flight of old stone steps up through the trees to Naganaki Shrine on a spring afternoon, a red torii at the top, cherry petals on the treads, nobody else on them.
      { n: "The steps up to Naganaki Shrine were old and steep and uneven, worn into shallow cups in the middle by a few hundred years of feet, and on a spring afternoon they were mostly petals, pink going brown, drifted into the corners of every tread. Old women took them one at a time with a hand on the rail. Schoolkids took them two at a time and regretted it halfway." },
      { n: "Jaehyun took them at a pace. The same pace at the bottom as at the top, which shouldn't have been possible, which was the most him thing Solar could imagine: a quarterback's measured jog, chin level, arms easy, breathing through his nose. Up to the torii. A touch on the post with two fingers. Down. At the bottom he turned without stopping and went up again, and she watched him do it twice from the foot of the stairs before he saw her." },
      { n: "He saw her on the way down. He didn't break stride. He just changed his line, a few degrees, so the run ended in front of her instead of at the bottom step, and stopped there, and put his hands on his hips, and looked her over, top to bottom, the way he'd looked her over in every doorway of her life." },
      { s: 'jaehyun', f: 'neutral', t: "You're not wearing enough layers." },
      { choose: [
        { t: "Don't wanna hear it, Jae.", notes: 3, then: [
          { n: "It came out in exactly the voice. The bored one, chin up, eyes somewhere over his shoulder. His mouth did something it didn't give permission for." },
          { s: 'jaehyun', f: 'happy', t: "...There she is." }
        ] },
        { t: "It's April.", notes: 2, then: [
          { s: 'jaehyun', f: 'neutral', t: "It's April by the sea. That's a different month. Look it up." }
        ] },
        { t: "(Hold out your hand. Make him give you his jacket.)", notes: 2, then: [
          { n: "She held out her hand. He looked at it, and at her, and sighed through his nose like a man who'd known this was coming since she was six, and took his jacket off the rail where he'd left it, and put it round her shoulders himself, and did the top button." },
          { s: 'jaehyun', f: 'neutral', t: "That's a loan. With interest." }
        ] }
      ] },
      { s: 'jaehyun', f: 'neutral', t: "Walk up with me. I've got four more." },
      { s: 'solar', f: 'neutral', t: "I'm not running a hundred and twelve stairs four times." },
      { s: 'jaehyun', f: 'neutral', t: "I didn't say run. I said walk. I'll run. You walk. I'll lap you. It'll be very good for my ego." },
      { n: "So she walked. And he ran, up past her and down past her and up again, and every time he came past he said something, one sentence, measured, the way he'd always talked, already finished thinking by the time it came out. *Hanni's put me on her rota.* Down. *I'm Tuesdays.* Up. *I've never been on a rota in my life.* Down. *I like it more than I'd tell her.*" },
      { n: "On the third pass he slowed and walked beside her for a while, his breathing coming down, his hands on his hips again. The shrine was quiet. A bell somewhere above them, once. The city below going pink at the edges." },
      { s: 'jaehyun', f: 'neutral', t: "Nobody's watching." },
      { s: 'solar', f: 'neutral', t: "What?" },
      { s: 'jaehyun', f: 'neutral', t: "Here. When I run. Nobody's watching. Nobody's timing it. Nobody's writing it down for anybody. There's no film session. There's no box with glass in it at the top of anything." },
      { s: 'jaehyun', f: 'neutral', t: "An old lady told me I was going to hurt my knees. That's the only review I've had in a week." },
      { n: "He said it like a joke. He said it a little too evenly to be one, and Solar knew him well enough, in more lives than one, to hear the shape underneath it: a boy who'd never run a single stair in his life that somebody wasn't watching from a suite." },
      { choose: [
        { t: "You like it.", notes: 3, then: [
          { s: 'jaehyun', f: 'neutral', t: "...I didn't say that." },
          { s: 'solar', f: 'neutral', t: "You didn't have to." },
          { s: 'jaehyun', f: 'neutral', t: "No. I suppose I didn't. You always did that. Read the play off my shoulders. I hated it." },
          { s: 'jaehyun', f: 'happy', t: "I don't hate it here. That's a strange thing to find out about yourself on a staircase." }
        ] },
        { t: "Father's not here.", notes: 3, then: [
          { s: 'jaehyun', f: 'serious', t: "No. He isn't." },
          { s: 'jaehyun', f: 'neutral', t: "I keep waiting for the phone. Every morning. Seven-fifteen. It doesn't ring. I've started setting an alarm for seven-sixteen so I know it's over." }
        ] },
        { t: "So stop running. Sit down.", notes: 2, then: [
          { s: 'jaehyun', f: 'neutral', t: "I don't know how to do that without somebody telling me I've earned it." },
          { s: 'jaehyun', f: 'neutral', t: "...That came out more honestly than I meant. Forget it. Walk." }
        ] }
      ] },
      { n: "At the top, under the torii, he stopped. Not winded. He stood with his hands on his hips and looked back down the long stone throat of the stairs, all of them falling away below them into the trees and the evening, and his lips moved, the way they did when he was reading a defense." },
      { s: 'jaehyun', f: 'neutral', t: "One hundred and thirteen." },
      { s: 'solar', f: 'neutral', t: "It's a hundred and twelve. You said a hundred and twelve. It's on the sign." },
      { s: 'jaehyun', f: 'neutral', t: "I know it's on the sign. I've counted it nine times today. A hundred and twelve, nine times." },
      { s: 'jaehyun', f: 'serious', t: "That was a hundred and thirteen." },
      { n: "He didn't say it like a joke. He didn't say it like anything. He looked down the stairs the way he'd look at a play that had gone wrong in a way he couldn't see from the field, patiently, waiting for the film." },
      { n: "And it was so exactly the old argument. Thirty-one stairs at the house in the city, and her at nine years old on the bottom one with her arms folded, saying thirty-two just to see his face. Every time. For years. Until he'd started counting out loud, slowly, all the way up, to prove it, and she'd started counting along, one behind, so they'd never once in their lives come out the same." },
      { choose: [
        { t: "You miscounted.", notes: 2, then: [
          { s: 'jaehyun', f: 'neutral', t: "I don't miscount. You know I don't. You spent ten years trying to make me." },
          { s: 'jaehyun', f: 'neutral', t: "...But fine. I miscounted. Let's say that. It's more comfortable." }
        ] },
        { t: "Thirty-two.", notes: 3, then: [
          { n: "He looked at her. For a second his face didn't do anything at all, and then it did, all at once, the laugh coming up out of him surprised, the real one, the one she'd heard on a dorm step in the red last October." },
          { s: 'jaehyun', f: 'happy', t: "You little— ten years. Ten years you've been doing that." },
          { s: 'jaehyun', f: 'neutral', t: "...We'll count them going down. Together. Out loud. Like the house." }
        ] },
        { t: "(Count them yourself, going down.)", notes: 3, then: [
          { n: "She went down ahead of him, counting under her breath, every step, carefully, with her eyes on her feet, and he came down behind her, counting under his, and at the bottom they both stopped on the gravel and looked at each other." },
          { s: 'jaehyun', f: 'neutral', t: "...A hundred and twelve." },
          { s: 'solar', f: 'neutral', t: "A hundred and twelve." },
          { n: "They'd come out the same. For the first time in their lives. Neither of them said that was the strange part. Neither of them looked back up the stairs." }
        ] }
      ] },
      { place: 'Naganaki Shrine · The Steps', time: 'Evening', bg: 'naganaki-shrine-night', soft: true },
      { n: "They sat at the bottom, on the last step, in the blue that came before dark, with the lamps coming on along the road below and the cicadas not out yet, so that the only sound was the city and the bell, once more, far up above them, rung by nobody they could see." },
      { s: 'jaehyun', f: 'neutral', t: "I need to tell you something. It's a procedure. Don't make a face." },
      { n: "He took his phone out and turned it so she could see. A note. Numbered. Of course it was numbered." },
      { s: 'jaehyun', f: 'neutral', t: "Last October I knocked on your door three times in the middle of the night and walked off, because I didn't trust anyone to answer. You remember." },
      { s: 'jaehyun', f: 'serious', t: "The night of the twelfth, something knocked twice. On every door on your street. I heard about it from four people at breakfast and Hyein told me twice." },
      { ifAfter: '4/29', then: [
        { s: 'jaehyun', f: 'serious', t: "And then the twenty-eighth. I'm not going to talk about the twenty-eighth. I was in that lobby at six. I'm not going to talk about it." }
      ] },
      { s: 'jaehyun', f: 'serious', t: "So this is the procedure. If I ever come to the dorm at night, I knock three times. Then I say your name. Then mine. Then I go and stand at the gate, under the light, where you can see me from your window." },
      { s: 'jaehyun', f: 'serious', t: "You don't open the door. You look. If you can see me at the gate, it's me. If you can't see me at the gate, it isn't, whatever it sounds like." },
      { s: 'jaehyun', f: 'neutral', t: "Two knocks is not me. Two knocks has never been me. I want you to have that written down somewhere that isn't my phone." },
      // CG: eqx-jaehyun-procedure — a young man in a running jacket sitting on old stone shrine steps at dusk, holding his phone out to show a numbered note, his sister in a borrowed jacket beside him reading it with her chin on her knees; lamps coming on along the road below.
      { choose: [
        { t: "Three knocks. Name, name, gate. Okay.", notes: 3, flag: 'eqx-jaehyun-knock', then: [
          { s: 'jaehyun', f: 'neutral', t: "Say it back." },
          { s: 'solar', f: 'neutral', t: "Three knocks. My name. Yours. Gate. I look. I don't open." },
          { s: 'jaehyun', f: 'happy', t: "Good. That's good. That's a clean call." },
          { n: "He put the phone away. His shoulders came down an inch, the way they did after a drive that had ended in the end zone, and he rolled the left one, twice, which was the only celebration he'd ever allowed himself in public." }
        ] },
        { t: "You made a procedure. For a knock.", notes: 2, then: [
          { s: 'jaehyun', f: 'neutral', t: "It's not a schedule. It's a procedure. There's a difference." },
          { s: 'solar', f: 'happy', t: "It's a table." },
          { s: 'jaehyun', f: 'neutral', t: "It's a procedure, Solar." },
          { n: "But he made her say it back to him anyway, all of it, twice, before he'd let it go." }
        ] },
        { t: "Did Hanni approve it?", notes: 2, then: [
          { s: 'jaehyun', f: 'neutral', t: "Hanni added a step. If I'm at the gate I wave with my left hand, because only I'd know you'd check which hand." },
          { s: 'jaehyun', f: 'serious', t: "I didn't ask her why she thought something might know everything else. I just added the step." }
        ] }
      ] },
      { s: 'jaehyun', f: 'neutral', t: "You held on. At the end. Wherever you were." },
      { n: "It wasn't a question. He didn't look at her. He looked at the road below, the lamps." },
      { s: 'jaehyun', f: 'neutral', t: "I didn't. Not to you. I was on the other side of a door. I heard the noise and I got up and by the time I got there the room was full of people holding on to you and you were going anyway." },
      { s: 'jaehyun', f: 'serious', t: "So I held on to the door frame. That's what I had. I held on to a piece of wood like an idiot and I woke up in the street here with splinters in my hand. Twelve. I took them out with Jungwon's tweezers." },
      { s: 'jaehyun', f: 'neutral', t: "That's all. I wanted you to know I came on a door frame. It's not as good a story as Haechan's." },
      { choose: [
        { t: "It's a better story than Haechan's.", notes: 3, then: [
          { s: 'jaehyun', f: 'neutral', t: "It's not. But thank you for lying. You're a terrible liar. You always were. You look at the left." },
          { s: 'jaehyun', f: 'happy', t: "You looked at the right just then. So. Noted." }
        ] },
        { t: "(Take his hand. Look at the palm.)", notes: 3, then: [
          { n: "She took his hand and turned it over. Across the palm, small and pink and nearly healed, a scatter of little marks where something had gone in, like a constellation nobody had named yet. He let her look. He didn't take his hand back for a long time." },
          { s: 'jaehyun', f: 'neutral', t: "...It's fine. It's healing. I'm very good at healing. It's the only thing I've never had to practice." }
        ] },
        { t: "Thanks for coming, big bro.", notes: 3, then: [
          { s: 'jaehyun', f: 'flustered', t: "..." },
          { s: 'jaehyun', f: 'neutral', t: "You can't just say it out loud. It's a contact name. It's for phones. It's not for staircases." },
          { n: "But his ears had gone red at the tips, all the way, and stayed that way, and he didn't tell her to stop." }
        ] }
      ] },
      { n: "He walked her to the corner by the post office, where the road split, and stopped, and put his hands in his pockets, and did the thing he always did, at the end of every phone call she'd ever let ring out and every doorway she'd ever walked out of." },
      { s: 'jaehyun', f: 'neutral', t: "Call if you need anything." },
      { s: 'jaehyun', f: 'neutral', t: "You won't. But the offer stands." },
      { n: "Then, a beat later, as she turned to go, so quietly she almost didn't hear it, to the road and not to her:" },
      { s: 'jaehyun', f: 'neutral', t: "...Three knocks, Solar." },
      { n: "She went home the long way, up the hill. At the top, without meaning to, she stopped at the dorm gate and looked back down the street, toward the river, toward the third house at the bottom, where, on the night of the knocks, something had stood at a door in the red and knocked twice and waited, very politely, for someone to let it in." },
      { n: "There was nobody there. There was a lamp, and a gate, and a door. Under the lamp, on the doorstep of the third house, somebody had set a single rice cake on a paper napkin, neatly, the way you'd leave something for a neighbor." },
      { n: "She went inside and checked the latch twice, and then, without knowing why, a third time." }
    ] },
    { after: '4/23', title: '2: chalk', place: 'Naganaki Shrine · The Steps', time: 'After School', music: 'tender', scene: [
      { bg: 'naganaki-shrine-spring' },
      { n: "He wasn't running. That was how she knew something was on his mind before she'd reached the bottom step. Jaehyun was sitting on the first stair with his elbows on his knees and a small cardboard box in his hands, the kind schoolteachers kept chalk in, turning it over and over, and his running jacket was zipped to the chin, and he'd been there, she guessed, a while." },
      { s: 'jaehyun', f: 'neutral', t: "You're wearing enough layers. Good. Note that I noticed." },
      { s: 'jaehyun', f: 'neutral', t: "I bought chalk. From the stationer by the station. The woman asked if I was a teacher and I said yes, because it was easier, and now I'm a teacher in this town. I don't know what of." },
      { choose: [
        { t: "Football. Obviously.", notes: 2, then: [
          { s: 'jaehyun', f: 'neutral', t: "That's not a subject. That's a religion. You don't teach it. You get raised in it." }
        ] },
        { t: "What's the chalk for, Jae?", notes: 3, then: [
          { s: 'jaehyun', f: 'neutral', t: "Procedure. I'll explain going up." }
        ] },
        { t: "(Sit down next to him on the step.)", notes: 3, then: [
          { n: "She sat down beside him. He shifted over half a step without looking, the way he'd shifted over on the stairs at the house when she was small and had come and sat next to him uninvited, which had been always." }
        ] }
      ] },
      { ifAfter: '4/29', then: [
        { n: "He didn't explain going up. He sat there with the box in his hands a while longer, and the shrine bell rang once, far above, and he spoke to the bottom of the steps." },
        { s: 'jaehyun', f: 'serious', t: "I said I wasn't going to talk about the twenty-eighth. I'm going to talk about it for one minute and then I'm going to run." },
        { s: 'jaehyun', f: 'serious', t: "Minji kept the footage. Ten seconds. I asked her to delete it. I asked her three times. She said somebody's going to need to see it. She's right. I hate that she's right." },
        { s: 'jaehyun', f: 'neutral', t: "I've been walking her to the kitchen door every night. Nobody uses the lobby. I wait till I hear the bolt. Then I walk back up the hill and do the stairs. It's on the way. It isn't on the way. Don't say it." },
        { n: "That was the minute. She could hear him close it, the way he closed a film session, a small decisive nothing in the voice." }
      ] },
      { ifEvent: 'eqx-read', then: [
        { s: 'jaehyun', f: 'neutral', t: "And Father read my message." },
        { s: 'jaehyun', f: 'neutral', t: "It says *Read Thursday*. I sent it on a Saturday. There hasn't been a Thursday since. I've checked the calendar. I've checked it like a madman." },
        { s: 'jaehyun', f: 'serious', t: "He hasn't replied. Of course he hasn't. That's the only part of it that feels completely normal." }
      ] },
      { s: 'jaehyun', f: 'neutral', t: "Okay. Up." },
      { n: "The procedure was this. He would go up first, slowly, walking, and on the front edge of every step, at the left side, by the rail, he would write its number in chalk. One. Two. Three. All the way to the top. And she would come behind him and check every number was there and was right, the way you'd check a column of figures somebody else had added." },
      { s: 'jaehyun', f: 'neutral', t: "Then at the top we'll know. If it's a hundred and twelve, I miscounted last week and I'll say so. In writing. You can frame it." },
      { s: 'jaehyun', f: 'serious', t: "And if it's a hundred and thirteen, we'll know which one." },
      { n: "So they went up. He bent at every step and wrote, quick and neat, his numbers square and upright like a scoreboard's, and she came after him and read them out, *fourteen, fifteen*, and he answered from above without turning, *sixteen*, and it went on like that, up through the trees, the petals gone brown in the corners of the treads, the evening coming down green-gold through the branches, the two of them counting, together, out loud, in turn, like the house." },
      { n: "Somewhere around forty he started talking. Not stopping. Bending, writing, talking, the way he'd talked between reps all his life." },
      { s: 'jaehyun', f: 'neutral', t: "I ran a forty yesterday. In the park by the river. On my own. Timed it on my phone. It was a good time. It was the best time I've run since high school." },
      { s: 'jaehyun', f: 'neutral', t: "And then I deleted it. Stood there in the park with my hands on my knees and deleted it. Nobody was going to see it. So I didn't see it either." },
      { s: 'jaehyun', f: 'serious', t: "I don't know who I am if nobody's writing it down, Solar. I've been finding out. On these stairs. It's like being let out of a room I didn't know was locked." },
      { choose: [
        { t: "You're Jae. You count stairs out loud. That's who.", notes: 3, then: [
          { s: 'jaehyun', f: 'neutral', t: "...Forty-six. That's a very small identity." },
          { s: 'jaehyun', f: 'happy', t: "I'll take it. Forty-seven. It's more than I had in March." }
        ] },
        { t: "You could stay let out.", notes: 2, then: [
          { n: "He stopped writing. For one step, the chalk held still on the stone, and she watched his back, the set of his shoulders under the jacket, a boy considering a door." },
          { s: 'jaehyun', f: 'neutral', t: "...Hypothetically. If I never went back. The box. The film sessions. Seven-fifteen." },
          { s: 'jaehyun', f: 'neutral', t: "I'm not going to finish that sentence on a staircase. Fifty-one." }
        ] },
        { t: "You didn't delete it. You looked first.", notes: 3, then: [
          { s: 'jaehyun', f: 'surprised', t: "...How do you know that." },
          { s: 'solar', f: 'neutral', t: "Because you're you." },
          { s: 'jaehyun', f: 'flustered', t: "Four point five one. Don't tell anyone. Fifty-three. Don't tell anyone that I told you." }
        ] }
      ] },
      { n: "He reached the top at a hundred and twelve. He wrote it under the torii, on the last stone before the gravel, and straightened, and looked at it, and she came up the last few steps reading the numbers aloud behind him, every one present, every one in order, *a hundred and ten, a hundred and eleven*, and stopped beside him." },
      { s: 'jaehyun', f: 'neutral', t: "A hundred and twelve." },
      { s: 'solar', f: 'neutral', t: "A hundred and twelve. You miscounted. Write it down. I want it framed." },
      { s: 'jaehyun', f: 'happy', t: "Fine. I miscounted. I'm a fallible man. Witness it. I'll sign it." },
      { n: "He looked relieved. He looked so relieved it embarrassed her to see it, and he turned away to hide it, and looked down the stairs, all hundred and twelve of them falling away into the trees in their neat white chalk numbers, and his face went still." },
      { s: 'jaehyun', f: 'serious', t: "...Count them going down." },
      { s: 'solar', f: 'neutral', t: "We just counted them." },
      { s: 'jaehyun', f: 'serious', t: "Count them going down. Not the chalk. The steps. Your feet." },
      { n: "They went down. Side by side, slow, not reading the numbers, just counting the steps under their feet, out loud, together, the way you'd count a heartbeat. *One. Two.* The chalk going past on the left in the opposite order, a hundred and twelve, a hundred and eleven, a hundred and ten, the two counts walking down toward each other. *Fifty-five,* their feet said, and the chalk said fifty-eight. *Fifty-six.* The chalk didn't say anything at all, and neither of them looked down. *Fifty-seven.* Fifty-seven, said the chalk. They'd met in the middle, the count and the numbers, and passed each other on the stairs like strangers, and gone on down." },
      { n: "At the bottom they both stood on the gravel and neither of them said the number, because they both had it, and it was a hundred and thirteen." },
      { n: "Jaehyun turned round. He went back up, two at a time, fast, and she went after him, and he stopped a third of the way up and crouched, and she saw it before he pointed. Between fifty-seven and fifty-eight. A step with no number on it. Plain, worn, old stone, cupped in the middle like all the others, petals in its corners like all the others. They had both, going up, stepped over it." },
      { s: 'jaehyun', f: 'serious', t: "I wrote every one. I didn't skip. I'd know if I skipped." },
      { s: 'solar', f: 'neutral', t: "I checked every one. It wasn't there." },
      { n: "He put his hand flat on it. On the stone, the cupped middle, where a few hundred years of feet had worn it smooth. He took his hand off it fast, as if it had bitten him, and looked at his palm, and put it back, slowly, and kept it there." },
      { s: 'jaehyun', f: 'serious', t: "It's warm." },
      // CG: eqx-warm-step — a young man in a running jacket crouched on an old stone shrine staircase in the evening, his palm flat on one unnumbered step between two steps chalked 57 and 58, his sister a few steps above looking down at his hand.
      { choose: [
        { t: "(Put your hand on it too.)", notes: 3, then: [
          { n: "She crouched and put her hand beside his. The stone was warm. Not sun-warm; the sun hadn't reached this part of the stairs in an hour. Warm like a seat on a train when someone's just got up from it. Warm like somebody had been sitting there, on that one step, between fifty-seven and fifty-eight, a long time, waiting for someone to come up, and had only that second stood and gone." },
          { n: "Jaehyun's hand moved over and covered hers on the stone. Not to hold it. To keep it from being the one touching." }
        ] },
        { t: "Jae. Get up. We're going home.", notes: 2, then: [
          { s: 'jaehyun', f: 'neutral', t: "...Yes. Yes. Clean call." },
          { n: "He got up. He wiped his hand on his jacket, twice, hard, and then once more, and took her by the elbow and walked her down the rest of the stairs fast, on the outside, on the side by the rail, between her and the step, and didn't look back at it, and didn't let her." }
        ] },
        { t: "(Write a number on it. 57 and a half.)", notes: 2, then: [
          { n: "She took the chalk from him and wrote on it, neat, in his style, *57½*. He stared at her. Then he laughed, short, appalled, the laugh coming out of him like a cough." },
          { s: 'jaehyun', f: 'happy', t: "You can't— that's not a number. That's not a number you put on a step." },
          { s: 'solar', f: 'neutral', t: "It is now. Now it's counted." },
          { n: "He looked at it for a long moment, the little white fraction on the old gray stone, and some of the color came back into his face. He took the chalk back. He underlined it." }
        ] }
      ] },
      { place: 'Naganaki Shrine · The Steps', time: 'Evening', bg: 'naganaki-shrine-night', soft: true },
      { n: "They sat on the bottom step, on the gravel, with their backs to the stairs. Neither of them suggested sitting the other way round. The lamps came on along the road below, and the shrine bell rang once, far up above them, rung by nobody they could see, and Jaehyun didn't look up at it." },
      { s: 'jaehyun', f: 'neutral', t: "I'm adding a step to the procedure." },
      { ifFlag: 'eqx-jaehyun-knock', then: [
        { s: 'jaehyun', f: 'neutral', t: "Three knocks, your name, mine, the gate, the left hand. And now. If you're ever on any stairs in this town, anywhere, counting, and it comes out one more than it should, you stop. You don't go up the extra one. You turn round and come down, and you call me." },
        { s: 'jaehyun', f: 'serious', t: "Say it back." },
        { s: 'solar', f: 'neutral', t: "One more than it should, I stop, I come down, I call you." },
        { s: 'jaehyun', f: 'neutral', t: "Good. Clean." }
      ], else: [
        { s: 'jaehyun', f: 'neutral', t: "You didn't want the last one. That's fine. I'm giving you this one anyway, because it's not a knock, it's stairs, and stairs are my department." },
        { s: 'jaehyun', f: 'serious', t: "If you're ever counting stairs in this town and it comes out one more than it should, you stop. You don't take the extra one. You come down. You call me. That's all. That's the whole procedure." }
      ] },
      { s: 'jaehyun', f: 'neutral', t: "Thirty-one. At the house. You said thirty-two every time for ten years." },
      { s: 'jaehyun', f: 'sad', t: "I used to think you did it to annoy me. I worked out in about tenth grade it was so I'd count them out loud. So we'd do it together. So you'd have a reason to sit on the stairs with me." },
      { s: 'jaehyun', f: 'neutral', t: "I'd like us to stop coming out the same. I'd like you to say thirty-two again. I didn't know I'd miss being wrong." },
      { choose: [
        { t: "A hundred and fourteen.", notes: 3, then: [
          { n: "He turned his head and looked at her. Then his whole face went, at once, the real laugh, the one from the dorm step in the red, and he put his arm round her neck and pulled her head against his shoulder in a rough sideways hug that knocked the breath out of her, and held it." },
          { s: 'jaehyun', f: 'happy', t: "A hundred and fourteen. You little— a hundred and fourteen. Never change. That's not a request, it's a procedure." }
        ] },
        { t: "It'll be wrong again. I promise.", notes: 2, then: [
          { s: 'jaehyun', f: 'neutral', t: "Don't promise. You look at the right when you promise." },
          { s: 'jaehyun', f: 'happy', t: "...You looked at the left. Okay. Noted. I'm holding you to it." }
        ] },
        { t: "(Say nothing. Lean on his shoulder.)", notes: 3, then: [
          { n: "She leaned on his shoulder. He went stiff, the way he always did, the brother who'd never once in their lives been the one to start a hug, and then didn't, and they sat on the gravel at the foot of a hundred and twelve stairs, or thirteen, until the lamps were all on and the road was blue." }
        ] }
      ] },
      { n: "He walked her to the corner by the post office. Call if you need anything. You won't. But the offer stands. He said it all, the whole set, and then didn't go. He stood under the streetlight with his hands in his pockets and looked back up the hill toward the shrine, toward the stairs going up into the dark trees, with their little white numbers on them that the rain would take by morning." },
      { n: "Then he went, at a jog, the even pace that didn't change, and she watched him all the way to the guesthouse corner, and he didn't look back, which meant he wanted to." },
      { place: 'Iwatodai Dorm · Stairs', time: 'Night', bg: 'iwatodaidorm-stairs-night', soft: true },
      { n: "She went up to bed at eleven. She didn't count the dorm stairs. She'd never counted them, in a year of going up and down them. She knew them the way you know your own teeth with your tongue." },
      { n: "She was on the landing before she realized she'd been counting under her breath the whole way up, in Jaehyun's voice, the scoreboard voice, *eleven, twelve, thirteen*." },
      { n: "She stopped. She stood on the landing in the dark with her hand on the banister and the number in her mouth, and the house quiet below her and above her, and she didn't finish. She didn't look back down to check. She went on up the last flight to her room without counting at all, fast, the way you'd walk past a window you didn't want to see into, and shut her door, and stood with her back against it until the red came." }
    ] },
    { after: '6/14', title: '3: pace', place: 'Naganaki Shrine · The Steps', time: 'After School', music: 'tender', scene: [
      { bg: 'naganaki-shrine-summer' },
      // BG: naganaki-shrine-steps-rain — the long stone stairs up to Naganaki Shrine in a summer drizzle, wet and dark, moss in the joins, the trees closed over them like a tunnel, the torii small at the top.
      { n: "It was raining the thin, warm, endless rain of the rainy season, the kind that didn't so much fall as hang in the air and wait for you to walk into it, and the shrine steps were dark with it from top to bottom, every stone slick and shining, moss coming up green and fat in the joins. The chalk was gone. Of course it was gone. The rain had taken every little white number weeks ago." },
      { n: "Jaehyun was running them anyway. Up, at the even pace that didn't change, turn at the torii, down. He wore a running jacket with the hood down so the rain went straight into his hair, and he didn't seem to notice. He didn't seem to be counting either, and that was new; his lips weren't moving." },
      { n: "He saw her at the bottom on his way down and didn't stop. He did one more. Up, turn, down. Then he stopped on the last step, breathing hard, hands on his hips, the rain running off his chin, and looked at her umbrella as if it were a personal remark." },
      { s: 'jaehyun', f: 'neutral', t: "You came out in this." },
      { s: 'solar', f: 'neutral', t: "You're running in this." },
      { s: 'jaehyun', f: 'neutral', t: "That's different. I'm already wet. You had a choice." },
      { choose: [
        { t: "(Hold the umbrella over him.)", notes: 3, then: [
          { n: "She held it over him. She had to hold it up high, he'd always been taller, and he looked up at it, and down at her arm stretched up holding it, and made a sound through his nose that in anyone else would have been a laugh." },
          { s: 'jaehyun', f: 'happy', t: "That's useless. I'm soaked. You're getting wet now. Now we're both wet. Excellent work." },
          { n: "He didn't step out from under it, though." }
        ] },
        { t: "You're not counting.", notes: 2, then: [
          { s: 'jaehyun', f: 'neutral', t: "...No. I noticed that too. Around the third week." }
        ] },
        { t: "Nobody's timing you.", notes: 2, then: [
          { s: 'jaehyun', f: 'serious', t: "No. That's the idea. That's been the whole idea, every day, since April." }
        ] }
      ] },
      { s: 'jaehyun', f: 'serious', t: "It's gone, by the way. The step." },
      { n: "He said it as if he were telling her the time. He sat down on the bottom stair, in the wet, without asking, and after a second she sat down beside him under the umbrella, the stone cold through her skirt, and he held his hand out for the umbrella and she gave it to him, because he'd always been the one who held the umbrella, and it was easier than arguing." },
      { s: 'jaehyun', f: 'neutral', t: "A hundred and twelve going up. A hundred and twelve going down. Every day. I counted every day since the rain took the chalk, to be sure, and then I counted again to be sure I was sure. It's not there. Fifty-seven goes straight to fifty-eight. No warm step." },
      { s: 'jaehyun', f: 'neutral', t: "I should be pleased. It's the correct number. It's the number on the sign." },
      { choose: [
        { t: "When did it go?", notes: 2, then: [
          { s: 'jaehyun', f: 'neutral', t: "...The tenth. I came up on the tenth and it was gone. I remember because it was the day after the rain started. The first big one." },
          { n: "The day after the long table, she thought. The day after the rain that stopped at eleven forty, exactly, like a tap. She didn't say it. He didn't either. He looked up the stairs at the place where fifty-seven met fifty-eight, under the dark wet trees, and then looked away from it, deliberately, the way you'd stop pressing on a bruise." }
        ] },
        { t: "That's good, isn't it?", notes: 2, then: [
          { s: 'jaehyun', f: 'neutral', t: "It's the right number. Right isn't always good. I learned that from our father." }
        ] },
        { t: "(Look up the steps to where it was.)", notes: 3, then: [
          { n: "She looked up. Fifty-seven, fifty-eight. Two stones, dark and wet and ordinary, and nothing between them, and the trees dripping over them, and for one second she could have sworn the rain falling on that place fell slower than the rain around it, the way rain falls in the red. Then it didn't. Then it was rain." }
        ] }
      ] },
      { n: "They sat. The rain hung in the air in front of them like a bead curtain nobody had parted. Somewhere above them at the shrine a bell rope knocked against its post in the wind, softly, a dull wooden sound, and Jaehyun's knee was jogging, very slightly, up and down, the way it had jogged under the table at every Foundation Dinner they'd ever sat through side by side." },
      { s: 'jaehyun', f: 'neutral', t: "I need to show you something. It isn't a procedure." },
      { n: "He shifted the umbrella to his other hand and reached into the pocket of his running jacket and took out a watch. A running watch, black, heavy, with a wide rubber strap and a face the size of a matchbox, the kind with buttons all round the edge. She knew it. Their father had given it to him in its box, two birthdays ago, with the app already installed on Jaehyun's phone and his own account already linked to it, so that every run Jaehyun did, every split, every heart rate, went up into the air somewhere and came down again on a screen in an office Jaehyun had never once been invited into." },
      { s: 'jaehyun', f: 'neutral', t: "I was wearing it. When I came through. When I was holding the door frame. I'd been for a run that morning. I'd uploaded it." },
      { s: 'jaehyun', f: 'serious', t: "It died on the eighth of April. The battery. I've got the charger. It's in my bag. I've had it in my bag every day since and I've never once plugged it in." },
      { n: "He turned it over in his wet fingers. The face was blank. Not black, quite; a dull gray, like a pond with nothing in it. On the back, the steel was scratched where the clasp had rubbed it for two years, and engraved, small, in their father's preferred font, his initials, and a date, and a word she couldn't read in the rain." },
      { choose: [
        { t: "Dad's watch.", notes: 3, then: [
          { s: 'jaehyun', f: 'neutral', t: "...My watch. His account. Yes." },
          { s: 'jaehyun', f: 'sad', t: "When he gave it to me I thought it meant he wanted to know how I was doing. I've been rethinking that." }
        ] },
        { t: "What does it say on the back?", notes: 2, then: [
          { s: 'jaehyun', f: 'neutral', t: "*Pace.* That's all. One word. He had it engraved. I used to think it was advice." }
        ] },
        { t: "(Don't say anything. Look at the blank face.)", notes: 2, then: [
          { n: "She looked at it. He looked at her looking at it. Neither of them said anything, and the rain hung, and it was the most they'd said to each other about their father in a year." }
        ] }
      ] },
      { s: 'jaehyun', f: 'neutral', t: "Last night I nearly plugged it in. I had the cable in my hand. I sat on the bed for twenty minutes with the cable in one hand and the watch in the other, like a man defusing something." },
      { s: 'jaehyun', f: 'serious', t: "Because it's been two months. And I've run every day. And I don't know a single number. Not one. I don't know if I'm faster. I don't know if I'm slower. I ran a forty in May and timed it on my phone and saw the number for one second and deleted it. And the not knowing is— it's the best I've felt in my life. And it's driving me insane. Both. At once." },
      { ifEvent: 'eqx-last-grain', then: [
        { s: 'jaehyun', f: 'sad', t: "And then Suemitsu. I sat across from him at that table. Most nights in June. He called her Mother. I laughed. Everybody laughed." },
        { s: 'jaehyun', f: 'serious', t: "I stopped Minji filming him. In the morning. On the step. She had the camera up and I put my hand on it. It's the first time she's ever let me. I keep thinking about that more than I think about him. I don't know what that says about me." },
        { s: 'jaehyun', f: 'neutral', t: "Somebody died here. Somebody I ate dinner with. And I still don't want to put this back on. That's how bad it is. That's how much I don't want to go back to being a number on his screen." }
      ] },
      { n: "He turned the watch over again, face up, blank, and held it on his open palm between them, under the umbrella, the way you'd hold out something you'd found on the beach to ask what it was." },
      { s: 'jaehyun', f: 'serious', t: "At home I'm a set of splits. I'm a profile. I'm the son at the Foundation Dinner who did the thing on the right track and the right time. Everybody there knows how I did before I've finished doing it. Here nobody knows. Nobody's waiting. Nobody's going to read about me on Monday." },
      { ifEvent: 'eqx-table-op', then: [
        { s: 'jaehyun', f: 'neutral', t: "And now he's here. At the long table. Eating egg whites with his sleeves rolled up, being polite to a landlady. And he hasn't asked me once how fast I am. Not once. I keep waiting for it like the alarm." },
        { s: 'jaehyun', f: 'sad', t: "I don't know if that's because he doesn't need to know here, or because he never actually wanted to. I can't ask him. It would be the first thing I've ever asked him." }
      ] },
      { s: 'jaehyun', f: 'sad', t: "So tell me I don't have to put it back on. That's it. That's all I want. Tell me I can just stay somewhere nobody's waiting to hear how I did. If you say it, I'll throw it in the sea off the pier. I'll do it tonight. I'll take Akihiko as a witness." },
      // CG: eqx-pace — the bottom of long wet stone shrine stairs in a summer drizzle; a young man in a soaked running jacket holding an umbrella over a girl beside him, a dead black running watch lying face up on his open palm between them.
      { n: "The rain hung. The bell rope knocked. She sat beside him on the wet stone with his arm holding the umbrella over both of them and the watch on his palm, its blank gray face full of the sky, and her heart had gone very quiet, the way it went quiet in the red, as if it were listening for something on the other side of a door." },
      { choose: [
        { t: "Whether you put it back on is yours. Whether you stay is yours. Run because you want to.", notes: 2, tally: { choose: 1, 'asks.jaehyun': 'choose' }, then: [
          { n: "He was quiet for so long that she thought he hadn't heard. The rain hung. Then he let out a breath through his nose, the not-laugh, and it shook a little at the end." },
          { s: 'jaehyun', f: 'sad', t: "...That's a terrible answer. That's the worst answer anybody's ever given me. I hold it out to you and you put it back in my hand." },
          { s: 'solar', f: 'neutral', t: "It was always in your hand." },
          { s: 'jaehyun', f: 'neutral', t: "...Yes. Fine. I know. That's what makes it terrible." },
          { n: "He closed his fingers on the watch. He didn't put it on. He didn't throw it anywhere. He put it back in his jacket pocket and zipped the pocket shut, slowly, all the way to the top, and kept his hand flat over it." },
          { s: 'jaehyun', f: 'neutral', t: "In the pocket, then. Till I decide. Nobody gets to decide but me. That's new. I'm going to be terrible at it." }
        ] },
        { t: "Leave it off. Stay. Nobody's waiting to hear how you did.", notes: 3, tally: { cakes: 1, 'asks.jaehyun': 'yes' }, then: [
          { n: "He didn't look at her. For a moment he didn't do anything at all. Then he closed his hand on the watch and put his other hand over his eyes, umbrella and all, so that the rain came in on both of them, and pressed, hard, the way you'd press on a cut, and his shoulders went down, and stayed down." },
          { s: 'jaehyun', f: 'sad', t: "...Okay. Okay. Noted." },
          { n: "He held the watch out to her. She took it. It was cold and heavier than it looked and wet from his hand." },
          { s: 'jaehyun', f: 'neutral', t: "Not the sea. I changed my mind. You keep it. Somewhere I can't find it. I don't want to know where. That's the point." },
          { n: "She put it in her bag. He watched it go in. Then he stood up out from under the umbrella and ran the stairs once more, up, turn, down, in the rain, and his lips weren't moving, and his pace changed, for the first time she'd ever seen, halfway up, for no reason, just because." }
        ] },
        { t: "You'll have to put it back on someday, Jaehyun.", notes: 2, tally: { 'asks.jaehyun': 'no' }, then: [
          { s: 'jaehyun', f: 'neutral', t: "...Noted." },
          { n: "He said it in the scoreboard voice. He looked at the watch for a long moment. Then he put it on. He buckled the wide rubber strap round his left wrist, the clasp going into the old scratches on the steel as if it had never been away, and the dead gray face sat there on his arm like a stone in a ring." },
          { s: 'jaehyun', f: 'serious', t: "That's the answer I'd have given. That's the answer I'd have given if somebody asked me. I don't know why it feels like somebody kicked me." },
          { n: "He ran the stairs. Up, turn, down. She sat at the bottom with the umbrella and watched him do it twice, three times, at the pace that didn't change, and the third time, at the top, under the torii, he stopped, and stood there in the rain for a long time with his back to her, and she could see his lips moving. Counting." }
        ] }
      ] },
      { place: 'Iwatodai Dorm · Front Gate', time: 'Evening', bg: 'iwotodaidorm-outside', soft: true },
      { n: "He walked her home. He always did. The rain had thinned to almost nothing by the time they reached the dorm, a fine wet dust in the light of the gate lamp, and he stopped where he always stopped, under the lamp, where she'd be able to see him from her window." },
      { ifEvent: 'eqx-hunted', then: [
        { s: 'jaehyun', f: 'neutral', t: "I'm going to Minji's door after this. Twos. Then the guesthouse. Then I'm going to lie awake and think about every single thing I've said today, in order, like a man reading his own medical file." }
      ] },
      { n: "He knocked on the gatepost. Three times. Then her name, then his, the whole procedure, though she was standing right there next to him and could see him perfectly well, and then he lifted his left hand and waved it, once, Hanni's addition, solemnly, at a distance of thirty centimeters." },
      { ifEvent: 'eqx-owed', then: [
        { n: "He stood there a second longer than the procedure needed, the way he had at this gate on another night, with his hands on the bars, giving something back. That one was given. This one was his. She could see on his face that it weighed differently." }
      ], else: [
        { s: 'jaehyun', f: 'neutral', t: "There's something else. Something I've been carrying. It's not mine. I'm not going to give it to you today." },
        { n: "He put his hand flat on the zipped pocket of his jacket as he said it, then took it away, as if he'd noticed. She didn't ask. She knew what he was carrying. She'd been in the hall that night, with her hand on the wall, and seen him nod." }
      ] },
      { s: 'jaehyun', f: 'neutral', t: "Call if you need anything. You won't. But the offer stands." },
      { n: "He went. He jogged, the even pace, down the hill toward the guesthouse, and at the corner by the post office he did something he'd never done in all the weeks of walking her to this gate. He looked back." },
      { n: "She went inside. On the stairs she counted, without meaning to, *one, two, three*, in his voice, and this time she let herself finish, all the way up to the landing, and it came out exactly right. It came out exactly the number it should have been. She stood on the landing with her hand on the rail and didn't know why that was the thing that made her cold." }
    ] }
  ]
});
