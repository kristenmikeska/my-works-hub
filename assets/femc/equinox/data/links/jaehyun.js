/* Persona 3: Equinox · Jaehyun Lee · Emperor. Link data (femc-equinox-game.html). Format: link fields in
   assets/femc/game/core.js ("Links" header), scene lines in assets/femc/game/scene.js.
   Written: ranks 1–8 (from 4/13; his home is the Naganaki Shrine steps on weekday and Saturday afternoons but Wednesday,
   so 4/13 itself). Ranks 9–10 still to write (rank 9 belongs with the parents' "stop asking" turn; not spent here).
   Rank 7 (from 10/28, the steps in late October, then the dorm's third-floor hall at evening: his hand closed on air on
   10/23; dead.shinjiro: he runs at the back, "where the slow guy goes" / alive: Shinjiro's price was "fix your old man's
   chopsticks"; his father's dead watch lights up wherever asks.jaehyun put it (yes: Solar's bag / choose: his pocket / no:
   his wrist) with a synced run he didn't do: 113 steps, 4:50 PM, avg heart rate 40; Jaesang saw it on his app: "Your heart
   rate's never been forty in your life"). Reads eqx-jaehyun-time-solar, dead.shinjiro, asks.jaehyun, eqx-1122, dead.aigis.
   Sets eqx-jaehyun-watch-dad (Jaesang keeps the watch in his buttoned pocket) | eqx-jaehyun-watch-unlinked ("You'll have
   to ask me") | nothing.
   Rank 8 (from 12/2, the steps in frost (112 since 11/22; the staircase moved down), the courtyard well with Hanni as
   escort (Âu Cơ; "nobody turns round but me"), then his ask floor: an endless stone stair under the Road Home with his chalk
   numbers, the 113th step warm, a worn Solji in the cream cardigan below it writing in a copy of the notebook, a seam open
   down her back, asking him to sit; then dawn in the dorm kitchen with the real Solji ("Out early? Back by eight, I hope.")).
   Choices: count exactly | one ahead (eqx-jaehyun-one-ahead); at the step: "Sit with her, Jae" (tally cakes +1,
   eqx-jaehyun-floor-sat: Hanni hauls him up, he loses counting for a while) | hand on 112 | "A hundred and fourteen" |
   (ifFlag eqx-jaehyun-thread-kept) tie the thread round his wrist. Unless he sat, he writes GOING UP and climbs miscounting on
   purpose; the cardigan folds empty (eqx-jaehyun-floor-up). Dawn: (ifFlag eqx-jaehyun-notebook) put the notebook by her tea
   (eqx-jaehyun-notebook-mom: she writes "Back 7:58" in it) | "He'll be back by eight" | say nothing. Reads dead.aigis,
   dead.shinjiro, eqx-jaehyun-notebook, eqx-jaehyun-thread-kept.
   Rank 4 (from 7/12, the steps in July heat; Danielle on the top step knows his 4:40; the lady with the basket at 4:50)
   reads asks.jaehyun (the watch), eqx-owed, eqx-hunted; sets eqx-jaehyun-time-solar (Solar texts him a different time
   every morning) or nothing.
   Rank 5 (from 8/27, the steps at evening; Jaesang watches without a pen and asks no splits; the 7:15 call in the evening)
   reads asks.jaehyun, eqx-equinox, eqx-asked-jaehyun / eqx-choose-jaehyun; sets eqx-jaehyun-left-them |
   eqx-jaehyun-dad-walked, and eqx-jaehyun-answered (he picks up).
   Rank 6 (from 10/4, the steps in October; first run since the bridge; step 113 back, warm, floured, a cream thread;
   Solji's notebook) reads eqx-empty-chair, eqx-1023, eqx-1122, eqx-saw-face; sets eqx-floor-jaehyun (his ask floor, the
   Well's staircase that never counts the same) and eqx-jaehyun-thread-kept or eqx-jaehyun-notebook. Shape: the stub fields from assets/femc/equinox/data/links.js.
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
  cast: { 'jaesang-runners': 'Jaesang' },
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
    ] },
    { after: '7/12', title: '4: four forty', place: 'Naganaki Shrine · The Steps', time: 'After School', music: 'tender', scene: [
      { bg: 'naganaki-shrine-summer' },
      { n: "The rainy season had ended on a Tuesday, as if somebody had turned off a tap, and July had come in white and loud. The cicadas had started in the trees over the shrine steps all at once, thousands of them, a sound like frying, so thick you felt it on your skin before you heard it, and the stone of the steps was dry again and pale and too hot to sit on, and the moss in the joins had gone brown at the edges." },
      { n: "Jaehyun wasn't running. He was standing at the bottom of the steps with his hands on his hips, in a soaked gray T-shirt, looking up. Solar followed his eyes all the way up the hundred and twelve, through the trees and the heat-shimmer, to the torii at the top." },
      { n: "There was somebody sitting under it. A girl, in a white sundress and sunglasses, on the top step, in the one patch of shade, with her phone held up in front of her face in both hands." },
      { s: 'jaehyun', f: 'neutral', t: "She's been there three days." },
      { s: 'solar', f: 'neutral', t: "Is that—" },
      { s: 'jaehyun', f: 'serious', t: "Danielle. Yes. Three days. Every day. When I get to the top she's there. She doesn't say anything. She just looks at her phone. Then she looks at me. Then she looks at her phone." },
      { choose: [
        { t: "Maybe she likes the view.", notes: 2, then: [
          { s: 'jaehyun', f: 'neutral', t: "The view's behind her. She's facing the steps. She's facing *me*." }
        ] },
        { t: "Want me to go up and ask her?", notes: 3, then: [
          { s: 'jaehyun', f: 'neutral', t: "...Yes. No. Yes. Walk up with me. I'll run. You walk. We arrive at the same time, by my calculation, if I do two." },
          { s: 'jaehyun', f: 'neutral', t: "I've done the calculation. Don't look at me like that." }
        ] },
        { t: "(Wave up at her.)", notes: 2, then: [
          { n: "She waved. A hundred and twelve steps above them the white sundress lowered its phone an inch, and the sunglasses looked down at her, and a hand came up, slow, and waved back, once, like a queen from a car, and the phone came back up." },
          { s: 'jaehyun', f: 'neutral', t: "...She waved at you. She's never waved at me. Three days." }
        ] }
      ] },
      { n: "He ran it twice. She walked it once. They came up the last of the steps together into the shade under the torii, him breathing hard with his hands on his hips and her damp to the shoulder blades, and Danielle didn't get up. She lowered the phone and looked at the screen and then looked at Jaehyun over the top of her sunglasses." },
      { s: 'danielle', f: 'neutral', t: "Four forty-three. You're late." },
      { n: "Jaehyun went very still. Not the stillness of a man stopping. The stillness of a man who'd been tackled from a direction he wasn't watching." },
      { s: 'jaehyun', f: 'neutral', t: "...I'm sorry?" },
      { s: 'danielle', f: 'neutral', t: "Four forty. Every day. You come up the road at four thirty-eight, you touch the post at the bottom at four forty, you're at the top the first time at four forty-four and change. I could set my phone by you. Today you were four forty-three at the bottom. Somebody held you up." },
      { s: 'danielle', f: 'happy', t: "Hi, Solar. It was you. You held him up. Cute." },
      { choose: [
        { t: "You've been timing him.", notes: 3, then: [
          { s: 'danielle', f: 'neutral', t: "I haven't been *timing* him. I've been noticing what time it is when he does a thing. That's different. That's just having eyes." },
          { s: 'danielle', f: 'neutral', t: "It's on my list. Everything's on my list. Who goes where at what time. It's something to do. There's no signal here worth having and nobody's posting anything, so." }
        ] },
        { t: "Hi, Danielle. Why the steps?", notes: 2, then: [
          { s: 'danielle', f: 'neutral', t: "Best seat. Shade, a view of the road, and nobody comes up here but old ladies and your brother. You can see the whole river street from the top. Did you know that? All the way down to the bend." },
          { s: 'danielle', f: 'neutral', t: "I like to know who's going down it." }
        ] },
        { t: "(Stand between her and Jaehyun, a little.)", notes: 2, then: [
          { n: "She didn't decide to. She just ended up there, a half step to the left, a shoulder between her brother and the phone. Danielle saw it. Danielle saw everything; it was the only thing about Danielle that had ever frightened her. The sunglasses went from Solar's shoulder to her face and the corner of Danielle's mouth went up." },
          { s: 'danielle', f: 'happy', t: "Relax. I'm not filming him. I don't film boys running. It's the least interesting thing a boy can do." }
        ] }
      ] },
      { n: "Jaehyun hadn't said anything. He was standing with his hands still on his hips, breathing through his nose, looking at Danielle's phone. Solar watched him look at it. She'd seen him look at a stopwatch like that, at the edge of a field at six in the morning, in another life, while a man in a suit up in a box with glass on the front of it wrote down a number." },
      { s: 'jaehyun', f: 'neutral', t: "...Four forty-four and change." },
      { s: 'danielle', f: 'neutral', t: "And change. I'm not a stopwatch. I'm a girl with a phone." },
      { s: 'jaehyun', f: 'serious', t: "I didn't know I came at the same time every day. I didn't know that. I thought I just— came." },
      { n: "He said it to nobody. He said it to the steps. And Solar heard it go into him, the thing he'd built since April out of a hundred and twelve stones and nobody watching, heard it crack down the middle, quietly, like ice on a pond when someone puts one foot on it to see." },
      { ifChoice: { 'asks.jaehyun': 'yes' }, then: [
        { n: "His watch was in her bag. It had been in her bag since June, at the bottom, under a notebook and a hair tie and a packet of tissues, where he couldn't find it, the way he'd asked. She felt it there now, a small heavy weight against her hip, through the canvas. She didn't look down. He didn't know where it was; that was the point. He'd thrown away the watch, and it turned out he'd kept the clock." }
      ] },
      { ifChoice: { 'asks.jaehyun': 'choose' }, then: [
        { n: "His hand had gone to his jacket pocket. He wasn't wearing the jacket; it was over the rail at the bottom of the steps, in the heat. His hand went to where the pocket would have been, on his T-shirt, and found nothing, and stayed there, flat, over his ribs, over the place he'd zipped the watch into in June *till I decide*." }
      ] },
      { ifChoice: { 'asks.jaehyun': 'no' }, then: [
        { n: "The watch was on his wrist. It had been on his wrist since June, buckled into the old scratches, its face the dull gray of a pond with nothing in it. Danielle looked at it. Danielle looked at everything." },
        { s: 'danielle', f: 'neutral', t: "Your watch is dead, by the way." },
        { s: 'jaehyun', f: 'neutral', t: "I know." },
        { s: 'danielle', f: 'neutral', t: "Okay. Just checking you knew." }
      ] },
      { n: "Danielle got up. She brushed off the back of the sundress and put her phone in a small white bag and pushed her sunglasses up onto her head, and for a second, without them, her face was just a face, a little tired, younger than she let it be." },
      { s: 'danielle', f: 'neutral', t: "I'll stop. If it bothers you. I didn't think it would. You looked like a guy who'd want to know his times." },
      { s: 'jaehyun', f: 'neutral', t: "...I used to be." },
      { s: 'danielle', f: 'neutral', t: "Mm. Weird thing to stop being." },
      { n: "She went to go. Two steps down she stopped, and turned, and looked not at Jaehyun but at Solar, and lowered her voice in the way she'd lowered it at parties in another life when she had something to sell and wasn't selling it." },
      { s: 'danielle', f: 'serious', t: "Change his time. That's free advice. I'm not the only one who knows it." },
      { s: 'solar', f: 'neutral', t: "What does that mean?" },
      { s: 'danielle', f: 'neutral', t: "There's a lady who comes along the road at four fifty. Every day. From the river end. Basket on her arm, gloves, little hat. She stops at the bottom of the steps and she watches him go up. Once. Just the once. Then she goes on. He never sees her, because he's always facing the top." },
      { s: 'danielle', f: 'neutral', t: "She's very sweet. She's on my list too. She's on my list a *lot*." },
      { n: "Then she was going down, in the white dress, through the cicadas and the heat-shimmer, taking the steps one at a time in her sandals like the old women did, with a hand on the rail, and didn't look back." },
      { n: "Jaehyun was looking down the steps. Not at Danielle. Past her. At the bottom, at the road, at the place where the road bent away toward the river. Nobody was there. It was four fifty-one. Solar knew that without looking at anything; she found she knew it the way he did now, in the body, as if a clock had been put in her." },
      { choose: [
        { t: "Jae. Change your time.", notes: 3, then: [
          { s: 'jaehyun', f: 'neutral', t: "...Yes. Yes. I heard her." },
          { s: 'jaehyun', f: 'serious', t: "I don't know how. That's the stupid part. I don't know how to come at a different time. I've come at the same time every day of my life. I didn't even know I was doing it." }
        ] },
        { t: "Who's the lady with the basket?", notes: 2, then: [
          { s: 'jaehyun', f: 'neutral', t: "...You know who. You know exactly who. She walks up from the river every afternoon with a basket and I've said good afternoon to her on the road and she's said *good afternoon, child*." },
          { s: 'jaehyun', f: 'serious', t: "I never once thought about why she'd be on this road. Her house is the other way." }
        ] },
        { t: "(Look at the bottom of the steps with him. Don't say anything.)", notes: 3, then: [
          { n: "She looked with him. The road, white in the sun. The bend. A bicycle went past, a boy standing on the pedals, and was gone. The cicadas roared. Nothing else moved. They stood side by side in the shade of the torii looking at an empty road the way you look at a door you've just heard someone knock on, and neither of them said what they were waiting to see." }
        ] }
      ] },
      { place: 'Naganaki Shrine · The Steps', time: 'Evening', bg: 'naganaki-shrine-night', soft: true },
      { n: "They sat at the bottom when the light went, on the last step, which had cooled at last; the stone gave back the day's heat into the backs of her legs like a sleeping animal. The cicadas stopped one tree at a time. The lamps came on along the road." },
      { s: 'jaehyun', f: 'neutral', t: "I need a procedure. For not having a procedure." },
      { s: 'solar', f: 'neutral', t: "That's the most you thing you've ever said." },
      { s: 'jaehyun', f: 'neutral', t: "I know. I heard it. I'm not proud of it." },
      { s: 'jaehyun', f: 'neutral', t: "I can't just pick a different time. If I pick it, it's a time. It's the same thing. It's just a different number. I need it to come from outside me. I need it to not be mine." },
      { choose: [
        { t: "Then I'll text you a time every morning. A different one. You don't get to know till I send it.", notes: 3, flag: 'eqx-jaehyun-time-solar', then: [
          { s: 'jaehyun', f: 'surprised', t: "...Every morning." },
          { s: 'solar', f: 'neutral', t: "Every morning. Before seven fifteen. So it's the first thing." },
          { n: "He looked at her for a long time. Then he looked away, at the road, fast, and his ears had gone red at the tips the way they did when she said *big bro* out loud, and he rolled his left shoulder twice, which was the only celebration he'd ever allowed himself in public." },
          { s: 'jaehyun', f: 'neutral', t: "...That's a procedure. That's a good procedure. That's a clean call." },
          { s: 'jaehyun', f: 'neutral', t: "Don't send four forty. Ever. I'll know you did it on purpose." }
        ] },
        { t: "Run when you want to. Just when you want to. That's the procedure.", notes: 2, then: [
          { s: 'jaehyun', f: 'neutral', t: "...I don't know when I want to. I've never once in my life known when I want to do anything. Somebody always told me first." },
          { s: 'solar', f: 'neutral', t: "Then find out." },
          { s: 'jaehyun', f: 'neutral', t: "That's not a procedure. That's a threat." },
          { n: "But he was smiling, at the road, a little, the way he smiled at a play he didn't know how to read yet and was going to read anyway." }
        ] },
        { t: "Roll a dice.", notes: 2, then: [
          { s: 'jaehyun', f: 'neutral', t: "A die. One die. A dice is— never mind. You knew that. You said it wrong to see my face." },
          { s: 'jaehyun', f: 'happy', t: "...A die. Yes. Okay. Six faces, six times. I'll buy one at the stationer. The woman will ask me if I'm a teacher again." }
        ] }
      ] },
      { ifEvent: 'eqx-owed', then: [
        { n: "He sat back on his hands on the warm stone and looked at the sky going dark over the trees. He didn't touch his pocket. He'd given back the thing he'd carried in it, at the dorm gate, through the bars; he'd said so; and Solar watched him not touch the pocket now the way you watch someone not touch a tooth that's been pulled." },
        { s: 'jaehyun', f: 'neutral', t: "I keep forgetting it's gone. What I gave back. I reach for it. Funny. Two months of carrying something you didn't want and then you miss the weight." }
      ], else: [
        { n: "He sat back on his hands on the warm stone and looked at the sky going dark over the trees, and his hand went to the pocket of the running jacket he'd put back on, and lay there, flat, over something that wasn't the watch." },
        { s: 'jaehyun', f: 'neutral', t: "...Still carrying it. The other thing. I said I wouldn't give it to you. I'm not giving it to you." },
        { s: 'jaehyun', f: 'neutral', t: "It's heavier in the heat. Isn't that strange. A thing that doesn't weigh anything, heavier in the heat." }
      ] },
      { ifEvent: 'eqx-hunted', then: [
        { n: "Minji came at eight to walk him back, twos, and stood at the corner by the post office under the lamp with her camera in her lap, not filming, the way she stood now, and he got up when he saw her as if somebody had blown a whistle." }
      ] },
      { n: "He walked her to the corner. *Call if you need anything. You won't. But the offer stands.* All of it, the whole set. Then he stood under the streetlight with his hands in his pockets and looked, not up the hill toward the shrine this time, but along the road, the other way, toward the river, toward the bend." },
      { n: "There was someone there. Far off, at the bend, at the very edge of where the lamps reached, so far that it was only a shape: small, round-shouldered, a hat, something on one arm that could have been a basket. Standing still on the pavement, facing them." },
      { n: "As they watched, it lifted one hand. A little wave. Gloved; even at that distance you could see it was gloved, a pale shape in the lamp light. Politely. The way you'd wave to a neighbor's children across a street." },
      { n: "Then it turned, and went on, unhurried, round the bend toward the river, and was gone." },
      { n: "Jaehyun didn't wave back. Solar didn't either. They stood under the streetlight a long time after, not saying anything, and when he finally went, he didn't jog. He walked. At a pace she'd never seen him walk at, in any life: uneven, a little fast and then a little slow, like a man who'd decided, very deliberately, to never again be anywhere at the time somebody expected him." }
    ] },
    { after: '8/27', title: '5: no splits', place: 'Naganaki Shrine · The Steps', time: 'Evening', music: 'tender', scene: [
      { bg: 'naganaki-shrine-summer' },
      { n: "The end of August had a smell. Cut grass and hot tar and, under it, something already turning, the first leaves going on the cherries by the shrine gate, though it was thirty degrees at six in the evening and the cicadas hadn't heard. The light came in low and orange through the trees and lay on the steps in long bars, so that anyone going up them went from gold to shadow to gold, like a figure in a film that had been cut wrong." },
      { n: "Somebody was standing at the bottom of the steps who wasn't Jaehyun." },
      { n: "She knew the back before she knew it was him. She'd have known it in any crowd in any city: the set of the shoulders, the way the weight sat a little forward on the balls of the feet, a man permanently about to stand up at the end of a meeting. Shirtsleeves rolled to the elbow. Tie gone. His hands in his pockets, which she had seen perhaps four times in her life. Her father, at the foot of a hundred and twelve stairs in a town that wasn't on any map he owned, looking up." },
      { n: "Jaehyun was on the steps. Halfway up, in the gold, going up at the pace that didn't change. He hadn't seen him. He was facing the top." },
      { s: 'jaesang-runners', f: 'neutral', t: "...Solar." },
      { n: "He didn't turn round. He'd known she was there, the way he'd always known who'd come into a room without turning; it was half of what made him frightening at dinners. He said her name to the steps." },
      { choose: [
        { t: "Dad. What are you doing here?", notes: 2, then: [
          { s: 'jaesang-runners', f: 'neutral', t: "Watching." },
          { n: "That was all. He didn't qualify it. He'd never once in her life said a word that didn't have a reason under it, and she looked at the side of his face and couldn't find the reason under this one." }
        ] },
        { t: "(Stand next to him. Look up where he's looking.)", notes: 3, then: [
          { n: "She came and stood next to him. Not close. Her father had never been a man you stood close to. She stood a half step off his shoulder, the way she'd stood at the edges of a hundred rooms he'd been the center of, and looked up the steps with him at her brother going up through the bars of light, and for a while neither of them said anything." }
        ] },
        { t: "He doesn't know you're here.", notes: 3, then: [
          { s: 'jaesang-runners', f: 'neutral', t: "No. I'd like to keep it that way for a minute. If that's all right with you." },
          { n: "*If that's all right with you.* He'd never asked her permission for anything. She looked at him. He didn't look back." }
        ] }
      ] },
      { ifEvent: 'eqx-equinox', then: [
        { s: 'jaesang-runners', f: 'neutral', t: "Your mother would have made me come. She'd have stood at the door with my shoes in her hand. *Go and watch him once,* she'd have said, *without a pen.*" },
        { n: "He said *would have*. He said it very carefully, the way you'd set something down on a table that you knew had a crack in it. Solar didn't say anything. Neither did he. A bell rang once at the top of the steps, rung by nobody." }
      ], else: [
        { s: 'jaesang-runners', f: 'neutral', t: "Your mother made me come. She stood at the door of that boarding house with my shoes in her hand. *Go and watch him once,* she said, *without a pen.*" },
        { s: 'jaesang-runners', f: 'neutral', t: "...I checked my pockets for a pen on the way. Twice. Before I could stop myself. I don't have one. She took it." }
      ] },
      { n: "Jaehyun turned at the torii. Touched the post with two fingers. Started down. And three-quarters of the way down, in the shadow between two bars of gold, he saw who was at the bottom." },
      { n: "His pace broke." },
      { n: "She'd never seen it. In April and May and July, in the rain and the heat, she'd never once seen the pace change on the way down except the once in June, halfway up, for no reason, just because. It broke now. His foot came down wrong on a cupped step, and he caught himself on the rail, and stood there with his hand on the rail and his chest going, a grown man in a soaked T-shirt halfway down a staircase, looking at his father." },
      { n: "Then he came the rest of the way down. Walking. And stopped at the bottom, three steps up, so that for once he was taller." },
      { s: 'jaehyun', f: 'neutral', t: "...Dad." },
      { s: 'jaesang-runners', f: 'neutral', t: "Jaehyun." },
      { n: "And Solar watched her brother wait." },
      { n: "She'd seen him wait like that a thousand times. At the edge of a field. In the doorway of a study. On the other end of a phone at seven fifteen in the morning, in a voice she could hear through his bedroom wall: the shoulders squared, the chin level, the breath held just slightly, for the question. *What did you run.* *What were your splits.* *What was the time.* The question had always come. It came the way weather came. You stood in it and you answered and you went on." },
      { n: "It didn't come." },
      { n: "Her father stood at the bottom of the steps with his hands in his pockets and looked up at his son, and didn't ask him anything. He looked at him. At his face, his wet hair, his chest going, the hand still white on the rail. As if he were trying to remember something, or learn it, Solar couldn't tell which." },
      { s: 'jaesang-runners', f: 'neutral', t: "...How many are there?" },
      { s: 'jaehyun', f: 'neutral', t: "A hundred and twelve." },
      { s: 'jaesang-runners', f: 'neutral', t: "Is it hard?" },
      { n: "Jaehyun's mouth opened. Nothing came out of it. He stood three steps up with his mouth open and the question in front of him, and Solar understood that he'd been asked about a number his whole life and had an answer ready for every one, and had never once in his life been asked how it felt, and didn't know where to find that answer, and was standing there looking for it." },
      { choose: [
        { t: "(Say nothing. Let him find it.)", notes: 3, then: [
          { n: "She didn't say anything. She stood a half step off her father's shoulder and let the silence sit, the waiting that was a hand held out flat with nothing in it, and after a long time Jaehyun shut his mouth, and opened it again." },
          { s: 'jaehyun', f: 'neutral', t: "...Yes. It's hard. The last thirty are hard. My knees hurt. An old lady told me they would." },
          { s: 'jaesang-runners', f: 'neutral', t: "...Hm." }
        ] },
        { t: "He loves it, Dad. Ask him why.", notes: 2, then: [
          { n: "Her father looked at her, for the first time, sideways. Then back at Jaehyun." },
          { s: 'jaesang-runners', f: 'neutral', t: "...Why?" },
          { s: 'jaehyun', f: 'neutral', t: "Because nobody's—" },
          { n: "He stopped. He looked at the man he'd been about to say it to. *Because nobody's watching.* He couldn't say it with his father standing at the bottom of the steps watching. Solar saw him see that, and see that it was funny, and not be able to laugh." },
          { s: 'jaehyun', f: 'neutral', t: "...Because it's hard. And the top's nice. There's a bell." }
        ] }
      ] },
      { ifChoice: { 'asks.jaehyun': 'no' }, then: [
        { n: "Her father's eyes went to Jaehyun's wrist. To the wide rubber strap and the heavy black face, gray now, blank, buckled in its old scratches. He knew it. Of course he knew it. He'd chosen it. He'd had the back engraved." },
        { s: 'jaesang-runners', f: 'neutral', t: "...That doesn't work." },
        { s: 'jaehyun', f: 'neutral', t: "It died. The eighth of April." }
      ] },
      { ifChoice: { 'asks.jaehyun': 'yes' }, then: [
        { n: "Her father's eyes went to Jaehyun's wrist. There was nothing on it. A band of skin paler than the rest where something had been worn for two years and wasn't anymore." },
        { s: 'jaesang-runners', f: 'neutral', t: "...Where's your watch?" },
        { s: 'jaehyun', f: 'neutral', t: "Solar has it. I don't know where. That's the point." },
        { n: "Her father turned his head and looked at her. At her face, and then at the bag on her shoulder, the canvas one, the only bag she carried, and she felt the watch at the bottom of it like a stone against her hip, and didn't look down, and didn't look away from him either. He looked at her for a long time. Then he looked back at his son." }
      ] },
      { ifChoice: { 'asks.jaehyun': 'choose' }, then: [
        { n: "Her father's eyes went to Jaehyun's wrist. There was nothing on it. A band of paler skin. Jaehyun's hand had already gone to the pocket of the jacket over the rail, as if the jacket were still on him." },
        { s: 'jaesang-runners', f: 'neutral', t: "...You're not wearing it." },
        { s: 'jaehyun', f: 'neutral', t: "It's in my pocket. It died. The eighth of April. I haven't decided what to do with it. I'm deciding." }
      ] },
      { s: 'jaesang-runners', f: 'neutral', t: "The eighth." },
      { n: "He said it as if it were a date he already knew. He took one hand out of his pocket and looked at it, at the empty palm, and put it back." },
      { s: 'jaesang-runners', f: 'neutral', t: "Your last run. Seven forty-one in the morning. Four point two miles. The loop at the reservoir. Seven minutes eleven a mile. Your heart rate went up on the hill on the west side the way it always does." },
      { s: 'jaesang-runners', f: 'neutral', t: "I know because I looked at it every morning. At seven fifteen. Before I called. Every morning after you didn't come home. It was the last thing I had of you that moved." },
      // CG: eqx-no-splits — the foot of old stone shrine stairs in late-summer evening light, a young man in a soaked T-shirt standing three steps up with one hand on the rail, a man in rolled shirtsleeves at the bottom with his hands in his pockets looking up at him, a girl a half step off the father's shoulder; bars of gold light across the steps.
      { n: "Nobody said anything." },
      { n: "Jaehyun stood on the third step. Solar watched it go into him, all of it, the seven fifteens, the phone ringing through his bedroom wall, the alarm he'd set for seven sixteen every morning in this town so he'd know it was over; the man in the box with the glass on the front, writing down a number; the number, every morning for five months, being looked at by somebody who had nothing else of him to look at. She watched him understand that the question had never been the question. That the splits were the only language either of them had." },
      { n: "His face didn't do anything. He'd learned that from the man in front of him. It didn't do anything for a long time, and then his chin went, very slightly, and he looked away up the steps, fast, at the torii, and wiped his face with the back of his wrist, the bare one or the dead one, as if it were sweat." },
      { s: 'jaehyun', f: 'neutral', t: "...You never said. You never once said you looked." },
      { s: 'jaesang-runners', f: 'neutral', t: "No. I didn't think it needed saying. I thought it was obvious." },
      { ifEvent: 'eqx-equinox', then: [
        { s: 'jaesang-runners', f: 'neutral', t: "...Your mother always said it wasn't." }
      ], else: [
        { s: 'jaesang-runners', f: 'neutral', t: "...Your mother says it wasn't." }
      ] },
      { choose: [
        { t: "(Go up the steps. Leave them alone.)", notes: 3, flag: 'eqx-jaehyun-left-them', then: [
          { n: "She went past her brother on the steps without a word, and touched his shoulder as she went, and went on up, all the way, through the gold and the shadow, and sat on the top step under the torii in the last of the light, where Danielle had sat in July, and didn't look down." },
          { n: "She looked down once. She couldn't help it. They were sitting on the bottom step together, side by side, not touching, her father with his elbows on his knees and his tie in his pocket, Jaehyun with his hands hanging between his knees, and neither of them was talking, and neither of them got up for a long time." }
        ] },
        { t: "Walk up with him, Dad. Just once. Don't count.", notes: 3, flag: 'eqx-jaehyun-dad-walked', then: [
          { n: "Her father looked at her. Then at the steps, all of them, going up into the trees. Then down at his own shoes, which were the kind of shoes that cost more than a car and had never been up anything steeper than a curb." },
          { s: 'jaesang-runners', f: 'neutral', t: "...I'm not dressed for it." },
          { s: 'jaehyun', f: 'neutral', t: "Nobody's watching, Dad." },
          { n: "So they went up. Not running. Walking, side by side, her father with a hand on the rail and her brother on the outside, and she sat on the bottom step and watched them go up through the bars of light, gold and shadow and gold, her father slowing on the last thirty and Jaehyun slowing with him without seeming to, and at the top, under the torii, the two of them stopped and stood there, small, looking out at the town, and the bell rang once." },
          { n: "She'd thought she'd count them. She found she hadn't. She'd sat on the step and watched two men go up a staircase and forgotten, for the first time since April, to count." }
        ] },
        { t: "(Stay. Sit on the step between them.)", notes: 2, then: [
          { n: "She sat down on the bottom step. After a second Jaehyun came down the last three and sat on one side of her. After a longer second her father, in his good trousers, lowered himself onto the stone on the other, with the expression of a man doing something he was going to explain to nobody, and they sat there, three of them in a row, at the foot of a hundred and twelve stairs in the evening, the way they'd never once sat anywhere, in any house, in any life." }
        ] }
      ] },
      { place: 'Naganaki Shrine · The Steps', time: 'Evening', bg: 'naganaki-shrine-night', soft: true },
      { n: "Her father left at seven, when the lamps came on. He stood up and brushed off his trousers and looked at his watch, his own, the gold one, out of habit, and caught himself looking, and put his hand over it." },
      { ifEvent: 'eqx-equinox', then: [
        { s: 'jaesang-runners', f: 'neutral', t: "...Dinner's at seven thirty. Mr. Kim's cooking. Nobody's going to eat it. Come anyway." }
      ], else: [
        { s: 'jaesang-runners', f: 'neutral', t: "...Dinner's at seven thirty. Your mother will want to know you ate. The landlady will ask too. She asks everyone." }
      ] },
      { n: "He went off down the road toward the river street, walking, at a pace Solar didn't recognize, slower than she'd ever seen him walk. Jaehyun watched him go all the way to the corner." },
      { ifFlag: 'eqx-asked-jaehyun', then: [
        { s: 'jaehyun', f: 'neutral', t: "...You asked me to stay. At the gate. *Both of us. Please.* And I said okay. I felt so light after. I slept nine hours." },
        { s: 'jaehyun', f: 'sad', t: "And now he's here. He's *here*, Solar. I said I'd stay somewhere nobody was waiting to hear how I did, and he's at the bottom of the steps. I don't know what staying means if he came too." }
      ], else: [
        { ifFlag: 'eqx-choose-jaehyun', then: [
          { s: 'jaehyun', f: 'neutral', t: "I'm still thinking. About staying. On my own, like you said. Mine." },
          { s: 'jaehyun', f: 'sad', t: "It was easier to think about when he was a phone that rang at seven fifteen. It's harder when he's a man at the bottom of the steps in the wrong shoes." }
        ], else: [
          { s: 'jaehyun', f: 'neutral', t: "I thought this was the one place he couldn't follow me. That was the whole point of it. And he followed me. And he didn't even bring a stopwatch." },
          { s: 'jaehyun', f: 'sad', t: "I don't know what to do with him without a stopwatch." }
        ] }
      ] },
      { n: "At the corner by the post office her father had stopped. He'd taken his phone out. Solar saw the screen light his face, small and blue, from a hundred meters off, and saw him look at it, and lift it to his ear; and in the pocket of the jacket over the shrine rail beside her brother, Jaehyun's phone began to ring." },
      { n: "It was seven fifteen. In the evening. She didn't have to look." },
      { n: "Jaehyun didn't move. He looked at the jacket. It rang. Down the road, under the lamp at the corner, their father stood with the phone at his ear and his other hand in his pocket and his back to them, waiting, the way he'd waited every morning for five months for a phone that never once connected." },
      { choose: [
        { t: "Answer it.", notes: 3, flag: 'eqx-jaehyun-answered', then: [
          { n: "He answered it. He got the phone out of the jacket on the fourth ring and stood up and held it to his ear and didn't say anything, and down the road, under the lamp, their father didn't say anything either, and they stood a hundred meters apart on the same road in the evening with their phones at their ears saying nothing for a long time." },
          { s: 'jaehyun', f: 'neutral', t: "...Dad?" },
          { n: "Solar couldn't hear the other end. She watched her brother listen to it. She watched his face, which didn't do anything, and then did." },
          { s: 'jaehyun', f: 'neutral', t: "...Yeah. Yeah. Okay. Good night." },
          { n: "He hung up. Under the lamp their father put his phone away and went on round the corner without looking back. Jaehyun sat down again on the step with the phone in both hands." },
          { s: 'jaehyun', f: 'neutral', t: "He said he didn't know what he was going to say. He said it was habit. He said he just wanted to hear it connect." },
          { s: 'jaehyun', f: 'sad', t: "Then he said good night, son. He's never said that. He says *talk tomorrow*. He's said *talk tomorrow* every night of my life." }
        ] },
        { t: "Let it ring.", notes: 2, then: [
          { n: "He let it ring. Seven times. Eight. Down the road, under the lamp, their father stood with the phone at his ear through all of them. On the ninth it stopped. Their father lowered the phone and looked at it, the screen lighting his face, and put it in his pocket, and stood there a moment longer, and went on round the corner." },
          { s: 'jaehyun', f: 'neutral', t: "...I've never once in my life not picked up. Not once. Not in the shower. Not at a funeral." },
          { s: 'jaehyun', f: 'sad', t: "I thought it would feel like something. It feels like the nine of them are still going." }
        ] },
        { t: "(Say nothing. It's his phone.)", notes: 3, then: [
          { n: "She didn't say anything. It was his phone. It rang. He sat with his hands between his knees looking at the jacket for three rings, four, and then reached over without hurrying and took the phone out and looked at the name on the screen, which was just *Father*, and turned it face down on the step, still ringing, and put his hand flat on top of it, and kept it there, not answering it and not silencing it, letting it ring into his palm until it stopped." },
          { s: 'jaehyun', f: 'neutral', t: "...Tomorrow. I'll call him tomorrow. At a time he's not expecting." },
          { s: 'jaehyun', f: 'happy', t: "That's going to kill him." }
        ] }
      ] },
      { n: "He walked her to the dorm gate. Knocked on the post three times. Her name, his. The left hand, raised, solemnly, at a distance of thirty centimeters. *Call if you need anything. You won't. But the offer stands.*" },
      { n: "Then he didn't go. He stood under the gate lamp with his hands in his pockets the way their father had stood at the foot of the steps, and she saw him notice it, and take them out." },
      { s: 'jaehyun', f: 'neutral', t: "...He looked at it every morning. The last run. Four point two miles. The loop at the reservoir. It was a bad run. I was hungover. My knee was off." },
      { s: 'jaehyun', f: 'sad', t: "He looked at a bad run every morning for five months because it was the last one. I can't stop thinking about it. I'll be thinking about it when I'm forty." },
      { n: "He went. He walked, at the uneven pace he'd taught himself in July, a little fast and then a little slow. At the corner he stopped, and stood, and Solar from the step saw him take his phone out of his pocket and look at it a long moment, the screen lighting his face, and put it away again without calling anyone, and go on." }
    ] },
    { after: '10/4', title: '6: a hundred and thirteen', place: 'Naganaki Shrine · The Steps', time: 'After School', music: 'tender', scene: [
      { bg: 'naganaki-shrine-autumn' },
      // BG: naganaki-shrine-steps-autumn — the long stone stairs up to Naganaki Shrine in October, red and yellow leaves drifted in the cupped middles of the treads, the trees half bare overhead, a cold white sky, the red torii small at the top.
      { n: "The leaves had come down. A week of wind off the sea had stripped the maples over the shrine steps by half, and what was left was red, and what had fallen lay in the cupped middles of the treads all the way up, red and yellow and brown, so that the staircase looked like something you weren't supposed to walk on, a long rug laid down for somebody important who hadn't arrived. The air smelled of wet leaves and cold stone and, faintly, from somewhere down the hill, woodsmoke." },
      { n: "Jaehyun was at the bottom, stretching. He'd been stretching, she thought, for a long time. He had one foot up on the second step and his forehead nearly on his knee, in his running jacket zipped to the chin, and he didn't look up when she came, and when he changed legs he did it slowly, like a man putting off a phone call." },
      { s: 'jaehyun', f: 'neutral', t: "I haven't run since the bridge." },
      { n: "He said it to his knee. She'd known. Everybody knew where Jaehyun had been since the twenty-third: kneeling at a low table at the boarding house taking the bones out of fish for a man who wouldn't eat; walking that man to a gate and back; sleeping, when he slept, on the floor of a borrowed room beside a futon, so that if his father woke at seven fifteen and sat up to call a number that never connected, there'd be someone in the room when it didn't." },
      { ifEvent: 'eqx-empty-chair', then: [
        { n: "They'd come out of that house now, all three fathers, with their bags. They slept at the dorm, two doors down from Akihiko, and Jaehyun had moved his futon onto the floor of his father's room without asking anybody, and Mitsuru had found out and said nothing, which was its own permission." }
      ] },
      { s: 'jaehyun', f: 'neutral', t: "Eleven days. I've never gone eleven days. Not with a broken toe. Not with the flu. I ran with pneumonia once, when I was seventeen. Father doesn't know that. Nobody knows that." },
      { s: 'jaehyun', f: 'neutral', t: "He told me to go this morning. He said, *go and run, Jaehyun, you're making me tired.* That's a joke. He made a joke. I've been standing here forty minutes trying to work out if I'm allowed to laugh at it." },
      { choose: [
        { t: "You're allowed.", notes: 3, then: [
          { n: "He laughed. It came out of him before he'd decided to let it, short and cracked, into his own knee, and his shoulders shook, and then they were shaking for a different reason, and he stayed bent over his leg on the second step with his face hidden for a while, and she stood next to him and put her hand on his back, between the shoulder blades, and didn't say anything until he straightened up." }
        ] },
        { t: "(Start stretching next to him.)", notes: 3, then: [
          { n: "She put her foot up on the second step beside his and leaned over it, badly, the way she'd stretched for gym class in three different schools in three different lives, and he turned his head on his knee and watched her do it, and something in his face moved for the first time in eleven days." },
          { s: 'jaehyun', f: 'neutral', t: "...You're doing that wrong. Your hips. Square your hips. Nobody's ever taught you to stretch in your life." },
          { s: 'jaehyun', f: 'happy', t: "Here. Like this." }
        ] },
        { t: "You don't have to run today.", notes: 2, then: [
          { s: 'jaehyun', f: 'neutral', t: "I know. That's the problem. Nobody's making me. I'm standing here waiting for somebody to make me." },
          { s: 'jaehyun', f: 'serious', t: "...Which is what I came here to get away from. And now I want it back. I'm a very stupid man, Solar." }
        ] }
      ] },
      { s: 'jaehyun', f: 'neutral', t: "I need you to do something. It's not a procedure. It's the opposite of a procedure." },
      { s: 'jaehyun', f: 'neutral', t: "Count for me. Today. I can't. Every time I start I lose it at about thirty. I've tried in my head walking to the guesthouse. Thirty, and then nothing, like the numbers fall off a table." },
      { s: 'jaehyun', f: 'serious', t: "So I need you to watch. Just today. I came here so nobody would watch me, and I need you to watch me. Don't say that's funny." },
      { n: "She didn't say it was funny. She sat on the bottom step, in the leaves, with her coat pulled round her knees, and watched him go up." },
      { n: "He went slowly the first time. Not the pace. A different pace, careful, a man feeling for each step in the leaves with his foot before he trusted it. She counted under her breath. *One. Two.* The way they'd counted it together in April with the chalk, out loud, like the house. *Forty. Forty-one.* He touched the post at the top with two fingers. Came down. The second time he went faster, and the third faster, and on the fourth he found it, she saw him find it, the pace that didn't change, the same at the bottom as at the top, and for a whole minute he was Jaehyun again, going up through the red leaves at a measured jog with his chin level, as if nothing had ever been taken off him." },
      { n: "On the fifth, coming down, she counted a hundred and thirteen." },
      { n: "She counted it again in her head, backward, the way you check a sum. She didn't have to. She'd known the second her mouth made the number. Her body had known; her stomach had gone over, once, slowly, the way it went over when the hour came." },
      { n: "He'd stopped at the bottom. He was standing on the gravel with his hands on his hips and his chest going, not looking at her, looking back up the steps, and his lips were moving." },
      { s: 'jaehyun', f: 'neutral', t: "...You counted." },
      { s: 'solar', f: 'neutral', t: "A hundred and thirteen." },
      { s: 'jaehyun', f: 'serious', t: "Yes." },
      { n: "They went up together. They didn't have to talk about it. He walked on the outside, by the rail, between her and nothing, and they counted out loud together, *fifty-five, fifty-six, fifty-seven*, and stopped." },
      { n: "There it was. Between fifty-seven and fifty-eight. Worn into a shallow cup in the middle like all the others, leaves drifted into its corners like all the others. It had been gone since June. Since the tenth of June, he'd told her in the rain: the day after the long table, the day after he'd nodded at a woman at a sink. And it was back." },
      { n: "Jaehyun crouched. He put his hand flat on it, in the cup of it, the way he had in April. He didn't take it off fast this time. He left it there, and looked at his hand, and she watched his face." },
      { s: 'jaehyun', f: 'serious', t: "It's warm." },
      { n: "She crouched beside him. It was warm. Not sun-warm; there'd been no sun all day, only the white sky. Warm the way a chair is warm when somebody's just got up out of it. And there was something on it. In the cupped middle, under the leaves, when Jaehyun moved his hand: a fine pale dust, finer than talc, lying very evenly, the shape of somebody who had sat there a long time." },
      { n: "And caught in the dust, at the edge of the step, where it would have hung down if someone had sat there with a cardigan round her shoulders, a thread. Wool. Long. Soft. Cream." },
      // CG: eqx-a-hundred-and-thirteen — an old stone shrine staircase in October, red leaves in the worn treads; a young man crouched on one unnumbered step with his palm lifted off a dusting of pale flour, a long cream wool thread held up between his fingers, his sister crouched beside him looking not at the thread but at his face.
      { n: "Jaehyun picked it up. He held it up between his finger and his thumb, against the white sky, and it moved a little in the wind off the sea." },
      { s: 'jaehyun', f: 'neutral', t: "...That's Mom's." },
      { s: 'jaehyun', f: 'neutral', t: "The cream cardigan. The one with the— she had it on, on the bridge. She had it round her shoulders. She'd been cold at the park. Dad gave her his jacket and she gave it back and put on the cardigan instead because she said his jacket smelled of airports." },
      { ifEvent: 'eqx-1023', then: [
        { n: "Then his face changed. Solar watched it change. He'd been on the steps going down, in the Well, in the red, on the night of the fathers. He'd seen the woman at the bottom of the steps smile with a face that didn't sit right at the jaw. He'd been sick on the road with one hand on his father's shoulder." },
        { n: "He looked at the thread in his fingers, and at the warm step, and at the pale dust in the cup of it, and she saw him put it together, all of it, slowly, the way he read a defense, and get to the end of it, and not be able to go back to the beginning." },
        { s: 'jaehyun', f: 'serious', t: "...She sat here. It sat here. In her. On my step. Waiting for me to come up." }
      ], else: [
        { n: "His face did something Solar had never seen it do. It hoped." },
        { s: 'jaehyun', f: 'neutral', t: "She was here. She came this way. She was— Solar, she was *here*, she sat here, it's warm, she— she came to watch me run. She always said she would. She always said she'd come and watch one day without telling me and I'd never know." },
        { ifFlag: 'eqx-saw-face', then: [
          { n: "Solar crouched on the step with her brother's hope in front of her like something he'd handed her to hold and couldn't see was on fire." },
          { n: "She'd seen. On the bridge, under the last lamp, a face turning back that didn't sit right at the jaw, a cardigan open down the spine with something moving in it. Haechan knew. Nobody else. *Not your dads. Not till we know.* She had promised that on a stair. She hadn't promised it about Jaehyun. She hadn't had to. She'd never once imagined she'd be crouched on a staircase watching him hope." }
        ], else: [
          { n: "Solar crouched on the step with her brother's hope in front of her and couldn't feel it. She felt the warm stone through her glove. She felt the fine dust, which wasn't dust. Her body had gone cold from the wrists up and wasn't telling her why." }
        ] }
      ] },
      { choose: [
        { t: "(Take the thread from him. Gently. Keep it yourself.)", notes: 3, flag: 'eqx-jaehyun-thread-kept', then: [
          { n: "She held out her hand. He looked at it. He looked at her face, and whatever he saw there, he didn't ask about; he put the thread into her palm, and she closed her fingers on it, and put it in the inside pocket of her coat, against her chest, where she'd know if anything went near it." },
          { s: 'jaehyun', f: 'neutral', t: "...You'll keep it safe." },
          { s: 'solar', f: 'neutral', t: "I'll keep it." },
          { n: "He nodded. He didn't notice she hadn't said safe. Or he noticed, and let her not say it; he'd always been better at that than she gave him credit for." }
        ] },
        { t: "(Let him keep it.)", notes: 2, then: [
          { n: "She let him keep it. He wound it round two fingers, carefully, the way their mother wound loose wool off a sleeve at the dinner table, and put it in the zipped pocket of his jacket, and zipped the pocket, and kept his hand flat over it, the way he'd kept his hand over the watch in June." }
        ] },
        { t: "Put it back, Jae. Leave it where it was.", notes: 2, then: [
          { s: 'jaehyun', f: 'surprised', t: "...Put it back." },
          { s: 'solar', f: 'neutral', t: "Please." },
          { n: "He looked at her for a long time. Then he did, very slowly, he laid it back on the warm step in the pale dust, exactly where it had been, the way you'd put something back in a room you'd been told not to go into. He wiped his hand on his jacket. Twice, hard. Then once more." }
        ] }
      ] },
      { place: 'Naganaki Shrine · The Steps', time: 'Evening', bg: 'naganaki-shrine-night', soft: true },
      { n: "They sat at the bottom, on the gravel, with their backs to the stairs. Neither of them suggested sitting the other way round. The lamps came on along the road. The wind came up the hill off the sea and took more leaves down, and some of them came down the staircase behind them, step by step, ticking, so that it sounded like somebody small coming down very slowly in the dark." },
      { n: "He took something out of his jacket. Not the watch. A notebook. Small, soft-covered, cream-colored, the kind you could buy at any stationer in Manhattan for too much money, with a pencil in its spine." },
      { s: 'jaehyun', f: 'neutral', t: "Dad gave me this. The second night. It was in her handbag. She left her handbag on the chair in that kitchen when she went to the park. She never went anywhere without it. She went to the park without it because she was only going to be gone an hour." },
      { s: 'jaehyun', f: 'neutral', t: "I thought it'd be her calendar. She keeps a calendar. It's not." },
      { n: "He opened it on his knee and turned it so she could see. Pencil. Her mother's handwriting, small and slanted, the handwriting from every birthday card Solar had ever had in that life. Dates, going back years. And beside each date not a time, not a split, not a distance. Something else." },
      { n: "*Out at six. Cold. No hat.* *Back 7:40. Limping, says it's nothing.* *Ran in the rain, came back happy.* *Didn't run. Stayed in bed. Good.* *Back late. Waited up.* *Out at six. Back at seven. Ate.* Page after page of it. Years. The last entry, a little crooked, as if written standing up in a kitchen: *Out early. Hungover, I could tell. Back by eight, I hope.*" },
      { n: "There was no entry after that. There was a blank page, and then another blank page." },
      { s: 'jaehyun', f: 'sad', t: "She wasn't timing me. All those years. Dad had the app and the box with the glass in it and the splits, and I thought that was everyone. That was the house. That was how you were seen in our house." },
      { s: 'jaehyun', f: 'sad', t: "And she was writing down whether I came home. That's all. Every morning. Whether I came back and whether I ate. She wasn't waiting to hear how I did. She was waiting to hear that I came home." },
      { n: "He shut the notebook. He held it on his knee with both hands." },
      { s: 'jaehyun', f: 'neutral', t: "I came here so nobody would be waiting to hear how I did. That was the whole thing. That's what I asked you for, in the rain." },
      { ifEvent: 'eqx-1122', then: [
        { s: 'jaehyun', f: 'serious', t: "And somebody was waiting. The whole time. Just not for that. And now she's back, and she sleeps with the light on, and you can't touch her back, and she hasn't once asked me if I came home. She looks at me like she's trying to remember if she ever did." }
      ], else: [
        { s: 'jaehyun', f: 'serious', t: "And somebody was waiting. The whole time. Just not for that. And now she's—" }
      ] },
      { n: "He didn't finish. He looked at the road, at the lamps, at the bend toward the river." },
      { s: 'jaehyun', f: 'neutral', t: "...Fuuka came and sat with Dad on Saturday. An hour. She didn't say anything. Then on the way out she stopped me in the hall, with her hand on my sleeve, the way you'd stop someone at the top of the stairs." },
      { s: 'jaehyun', f: 'serious', t: "She said there's a staircase. Down there. In the Well. Further than anybody's been. She said it never comes out the same twice. She said every time she listens to it there's one more step than there was." },
      { s: 'jaehyun', f: 'neutral', t: "She asked if I'd come and count it. She said she thought it was mine. She looked like she was sorry to be asking." },
      { flag: 'eqx-floor-jaehyun' },
      { n: "And Solar knew, then, what had been waiting on the step between fifty-seven and fifty-eight since April, warm, patient, getting up and going away whenever anybody counted it. It had never wanted him to stop running. It had wanted him to stop. *Stay somewhere nobody's waiting to hear how you did.* It had given him that. It had given him a staircase nobody watched. And it had taken the one person who'd been waiting for him to come home, and sat down where he ran, in her clothes, to wait for him instead." },
      { choose: [
        { t: "When you go down there, I'm counting with you. Out loud. Like the house.", notes: 3, then: [
          { s: 'jaehyun', f: 'neutral', t: "...Out loud." },
          { s: 'solar', f: 'neutral', t: "And I'll say one more than it is. Every time. So we never come out the same. So you'll know it's me." },
          { n: "He looked at her. Then his face went, all at once, the real laugh, the one from the dorm step in the red, wet and broken and real, and he put his arm round her neck and pulled her head against his shoulder in the rough sideways hug that knocked the breath out of her, and held it, and didn't let go for a long time." },
          { s: 'jaehyun', f: 'happy', t: "Thirty-two. You little— yes. Yes. Clean call. That's a procedure." }
        ] },
        { t: "Write in it, Jae. Every time you come home. Somebody should.", notes: 3, flag: 'eqx-jaehyun-notebook', then: [
          { s: 'jaehyun', f: 'neutral', t: "...Write in her book." },
          { s: 'solar', f: 'neutral', t: "So it's written down somewhere that you did." },
          { n: "He looked at the notebook on his knee for a long time. Then he took the pencil out of its spine, slowly, and opened the book to the first blank page after her crooked last line, and held the pencil over it for a long time, and then wrote, in his square scoreboard capitals that looked nothing like hers, the date, and *OUT AT 4. COLD. 113. HOME.*" },
          { n: "Then, after a second, smaller: *ATE.*" },
          { s: 'jaehyun', f: 'neutral', t: "That's a lie. I haven't eaten. I'll eat. I'll make it true. That's a procedure." }
        ] },
        { t: "(Don't say anything. Lean on his shoulder.)", notes: 2, then: [
          { n: "She leaned on his shoulder. He went stiff, the way he always did, the brother who'd never once started a hug, and then didn't; and they sat on the gravel at the foot of a hundred and twelve stairs, or thirteen, with their mother's notebook on his knee and the leaves coming down the steps behind them one at a time in the dark like somebody small and patient, until the road was all lamps." }
        ] }
      ] },
      { n: "He walked her to the gate. Three knocks on the post. Her name. His. The left hand, raised. *Call if you need anything. You won't. But the offer stands.* The whole set, every word in its place, as if setting them down in order were the one thing in the world he could still do exactly right." },
      { n: "Then he didn't go. He stood under the lamp and looked at her for a long moment, the way he'd looked her over in every doorway of her life, top to bottom, for layers." },
      { s: 'jaehyun', f: 'neutral', t: "...Come Thursday. To the steps. And Saturday. Not because I'm asking. Because I'll be there, and you'll know where I am. That's all. I want somebody to always know where I am." },
      { s: 'jaehyun', f: 'sad', t: "I didn't know that's what I wanted. I found out on a staircase. I find everything out on that staircase." },
      { n: "He went, walking, uneven, a little fast and then a little slow. At the corner by the post office he looked back. He'd been looking back at that corner since June. She lifted her left hand and waved it, once, solemnly, Hanni's addition, the way you'd wave at a ship; and he stood there under the lamp a second longer, and lifted his, and went home." }
    ] },
    { after: '10/28', title: '7: forty', place: 'Naganaki Shrine · The Steps', time: 'After School', music: 'tender', scene: [
      { bg: 'naganaki-shrine-autumn' },
      { n: "The maples over the steps were bare now except for the tops, where a few red leaves hung on like the last people at a party, and the treads were brown and wet and slick with the ones that had come down, so that the whole staircase smelled of something steeping. It had rained in the morning. The sky was the color of a sink. The bell at the top rang once in the wind, by itself, and nobody looked up anymore when it did." },
      { ifFlag: 'eqx-jaehyun-time-solar', then: [
        { n: "She'd texted him *3:52* that morning at six-fifty, before the seven fifteens, the way she had every morning since July. She came along the road at three-fifty and he was already at the post at the bottom, hands on his hips, looking at his phone as if it might change its mind, and when she was close enough he held it up so she could see her own message on the screen, *3:52*, and then put it away without a word and touched the post with two fingers and went." }
      ], else: [
        { n: "He was already running when she came along the road. Not at four-forty. He hadn't run at four-forty since July; he ran now when he ran, at odd times, a quarter past three, five to five, a man going out of his way never to be where anybody expected him, and today it had been ten to four, and she knew because Hanni had told her at lunch, and Hanni knew because Minji did." }
      ] },
      { n: "She sat on the bottom step, on the dry patch under the overhang of the stone lantern, and watched him go up." },
      { n: "He'd changed. Not the pace; the pace was back, the one that didn't change, the same at the bottom as at the top, chin level, breathing through his nose. It was something else. He ran the steps now the way you'd walk a hallway in a house where somebody was sleeping. He didn't look at the treads. He looked at the top. All the way up. As if the top were a person and he was keeping his eyes on them." },
      { n: "On the fourth time down he stopped at the bottom and stood with his hands on his knees, and didn't count anything out loud, and she didn't either; and then he sat down on the step beside her, on the wet part, and didn't seem to notice it was wet." },
      { s: 'jaehyun', f: 'neutral', t: "I ran the day after the road. I didn't know what to do with it, so I ran. I still don't know what else to do with my legs." },
      { choose: [
        { t: "You're sitting in a puddle, Jae.", notes: 2, then: [
          { s: 'jaehyun', f: 'neutral', t: "...I'm aware. I've been aware for some time. I've decided it's a puddle I'm sitting in." },
          { n: "He didn't move. She moved over, off the dry patch, and sat in the wet beside him, and he looked at her doing it, and his mouth did the thing it didn't give permission for." }
        ] },
        { t: "How's Dad?", notes: 3, then: [
          { s: 'jaehyun', f: 'neutral', t: "Eats. Now. Since the road. He eats whatever's put in front of him. He eats like it's a meeting he has to get through." },
          { s: 'jaehyun', f: 'neutral', t: "He's on the third floor of your dorm two doors down from Akihiko. He thinks Akihiko's very polite. I haven't told him anything else about Akihiko." }
        ] },
        { t: "(Hand him the water bottle from your bag.)", notes: 3, then: [
          { n: "She'd brought him one. She'd started bringing one in September without either of them mentioning it. He took it and drank half of it and handed it back, and she put it back in her bag, and that was the whole exchange, and it was more than either of them would have managed in that other house in a year." }
        ] }
      ] },
      { n: "He sat with his forearms on his knees and his hands hanging, and looked at his own right hand, the palm, where the twelve splinters from a door frame had healed into twelve small pale dots you could only see in this light." },
      { s: 'jaehyun', f: 'neutral', t: "I had a procedure. On the road. I'd done it in my head forty times. Rope, coat, hand. If he goes, I take the coat. Collar first, it's the strongest seam on a coat. I'd checked the coat. It was Akihiko's. I checked the stitching on Akihiko's coat in the hall closet at midnight like a lunatic." },
      { s: 'jaehyun', f: 'serious', t: "And he went. Down the step. To her. And I did it. I did the procedure. I lunged for the collar." },
      { s: 'jaehyun', f: 'serious', t: "And my hand closed on air." },
      { n: "He held up the hand. He closed it, slowly, on nothing, in front of them both. Then he opened it again, finger by finger, and looked at the inside of it as if the air might still be in there." },
      { s: 'jaehyun', f: 'neutral', t: "Ten years. Ten years of catching things. I've caught a ball in the rain in the dark with a man's helmet in my face. I caught you on the stairs at the house the night of the formal when you came down in those shoes. I don't miss. It's the only thing I've ever been good at without trying." },
      { s: 'jaehyun', f: 'sad', t: "I missed my father." },
      { ifFlag: 'dead.shinjiro', then: [
        { n: "He didn't say the next part for a long time. The bell rang at the top, once, in the wind. Then he said it to his hand." },
        { s: 'jaehyun', f: 'sad', t: "He didn't miss. From the back. He came down past all of us and he didn't even try for the collar, there wasn't time, he just put himself where Dad was going to be." },
        { s: 'jaehyun', f: 'sad', t: "I went to the funeral. I sat at the back. I didn't know where to sit. I'd spoken to him maybe nine times, Solar. Nine. He told me I held my chopsticks like my father. That was the longest conversation we ever had." },
        { s: 'jaehyun', f: 'neutral', t: "I've been running at the back. Of everybody. The old ladies come up the steps at four and I wait at the bottom till the last one's at the top and then I go. Behind them. Slow. Back's where the slow guy goes." },
        { s: 'jaehyun', f: 'sad', t: "I don't know what that's for. I don't know what I think it pays. It doesn't pay anything. I do it anyway." }
      ], else: [
        { n: "He didn't say the next part for a while. Then he laughed, short, through his nose, at his hand." },
        { s: 'jaehyun', f: 'neutral', t: "Shinjiro didn't miss. From the back. With the bad hand. He took Dad by the collar with the hand he can't hold a cup with, and he threw him up the steps, and it opened his whole coat." },
        { s: 'jaehyun', f: 'neutral', t: "I went to say thank you. Sunday. In your kitchen. I'd prepared it. It was a good speech. I'd timed it." },
        { s: 'jaehyun', f: 'happy', t: "He let me get eleven words in. Then he said, *fix your old man's chopsticks and we're even*. And he turned round to the stove. And that was it. That was the whole meeting." },
        { s: 'jaehyun', f: 'neutral', t: "So I've been teaching my father to hold chopsticks. Every night. At your table. He's run a foundation and he holds them like a man holding two pens, and I sit there going *no, Dad, the bottom one doesn't move*, and he says *I'm aware the bottom one doesn't move, Jaehyun*, and he drops the fish." },
        { s: 'jaehyun', f: 'sad', t: "It's the best hour of my day. Don't tell anybody. It's the best hour of my day and I owe it to a man with three scars who won't let me say thank you." }
      ] },
      { choose: [
        { t: "You didn't miss, Jae. Nobody could have caught that.", notes: 2, then: [
          { s: 'jaehyun', f: 'neutral', t: "...You're looking at the right." },
          { s: 'solar', f: 'neutral', t: "I'm not lying." },
          { s: 'jaehyun', f: 'neutral', t: "No. You're not. You're looking at the right because you're not sure. That's different. Noted." }
        ] },
        { t: "(Take his open hand. Close it. On yours.)", notes: 3, then: [
          { n: "She took his hand, the open one, with the twelve pale dots in it, and closed his fingers over hers, deliberately, one at a time, the way he'd closed them on air for her; so that this time there was something in it. He looked at their two hands. He didn't let go for a while." },
          { s: 'jaehyun', f: 'neutral', t: "...That's not a procedure." },
          { s: 'solar', f: 'neutral', t: "No." },
          { s: 'jaehyun', f: 'neutral', t: "Okay. Good. I've had enough procedures this week." }
        ] },
        { t: "He went to her, Jae. Not away from you. Toward her.", notes: 3, then: [
          { n: "He went very still on the wet step." },
          { s: 'jaehyun', f: 'neutral', t: "...Yes. I know. He went down the steps with his arms open the way he does at JFK. I've never once seen him open his arms like that for anything that wasn't her. Or you." },
          { s: 'jaehyun', f: 'sad', t: "I was behind him. I've always been behind him. I've spent my whole life watching the back of that man walk toward something, and the one time I needed to stop him I couldn't, because I've never once in my life been in front." }
        ] }
      ] },

      { n: "He was quiet for a while. Then he said, in the voice he used for a play he'd already read and didn't like, that there was something else. A thing that wasn't a procedure. A thing he needed her to look at, because she was the only one who'd tell him if he'd gone mad." },
      { ifChoice: { 'asks.jaehyun': 'yes' }, then: [
        { s: 'jaehyun', f: 'neutral', t: "The watch. The one you've got. Wherever it is. I don't want to know where. I need you to look at it." },
        { n: "It was at the bottom of her bag. Where it had been since June, under a notebook and a hair tie and the water bottle, where he couldn't find it, the way he'd asked. She hadn't looked at it in weeks. She didn't need to. She'd felt it against her hip every day like a stone." },
        { n: "She took it out." },
        { n: "It was lit." },
        { n: "The heavy black face that had been dead since the eighth of April, gray, a pond with nothing in it, was lit, a soft steady green, the way it had been lit on his wrist every morning for two years at the edge of a field. She hadn't charged it. Nobody had. There wasn't a charger for it in this town. She'd have known; it had been against her hip." }
      ] },
      { ifChoice: { 'asks.jaehyun': 'choose' }, then: [
        { n: "He unzipped the pocket of his running jacket, the one he'd kept his hand flat over since June, and took out his father's watch, and held it on his palm between them." },
        { n: "It was lit." },
        { n: "The heavy black face that had been dead since the eighth of April was lit, a soft steady green, the way it had been every morning on his wrist for two years at the edge of a field. He hadn't charged it. There wasn't a charger for it in this town. It had been zipped in his pocket against his ribs every day since June." },
        { s: 'jaehyun', f: 'neutral', t: "I haven't decided. About it. I said I'd decide. I've been deciding for four months. I think it decided for me." }
      ] },
      { ifChoice: { 'asks.jaehyun': 'no' }, then: [
        { n: "He held out his left wrist. The watch was on it, where it had been all year, buckled into the old scratches. The heavy black face that had been dead since the eighth of April." },
        { n: "It was lit." },
        { n: "A soft steady green, the way it had been every morning for two years at the edge of a field. There wasn't a charger for it in this town. It had been on his wrist, dead, a pond with nothing in it, every day since April, and he'd woken on the floor of his father's room on Tuesday at seven fifteen to find it glowing against his own pulse." }
      ] },
      { ifChoice: { 'asks.jaehyun': ['yes', 'choose', 'no'] }, then: [], else: [
        { n: "He took his father's watch out of his jacket pocket. The heavy black one, engraved on the back, dead since the eighth of April. He held it on his palm between them." },
        { n: "It was lit. A soft steady green. There wasn't a charger for it in this town." }
      ] },
      { n: "On the screen, in the little square letters the watch used for everything, a workout. The kind it logged by itself when it felt you climb." },
      { n: "*STAIRS. 113 STEPS. 4:50 PM. AVG HEART RATE 40. SYNCED.*" },
      // CG: eqx-forty — a young man and his sister sitting on wet stone shrine steps in late October, bare maples overhead, his open palm holding a heavy black sports watch whose face glows green with a single line of small square text, both of them staring at it.
      { n: "She read it twice. The second time her stomach turned over, slowly, the way it turned over when the hour came, before her head had finished reading." },
      { s: 'jaehyun', f: 'neutral', t: "Tuesday. Four fifty. A hundred and thirteen. I was in your dorm at four fifty on Tuesday. I was on the third floor watching my father not eat a pear. I've got witnesses. Akihiko gave me the pear." },
      { s: 'jaehyun', f: 'serious', t: "And forty. Average heart rate forty. Up a hundred and thirteen stairs." },
      { s: 'jaehyun', f: 'serious', t: "My resting heart rate is fifty-two. It was fifty-two at my last physical. Nobody on earth climbs a hundred and thirteen stairs at forty. Nothing *alive* does." },
      { n: "*Large, warm-blooded, resting heart rate forty.* She didn't know where she'd heard it. Somewhere in April, in a flat careful voice, at a breakfast table. It came up out of the bottom of her and sat in her mouth and she didn't say it." },
      { choose: [
        { t: "It's the lady with the basket. Four fifty.", notes: 3, then: [
          { n: "He didn't say anything. He looked down the road toward the bend. It was a quarter past four. Nobody was there." },
          { s: 'jaehyun', f: 'serious', t: "...Danielle said. In July. *Change his time.* I changed my time. I've never once been here at four fifty since July." },
          { s: 'jaehyun', f: 'serious', t: "So it came at four fifty anyway. And ran it for me. In my watch. At my time. While I was somewhere else." }
        ] },
        { t: "Synced. Synced where?", notes: 3, then: [
          { s: 'jaehyun', f: 'neutral', t: "...To his account. Father's. It's always been his account. Every run I ever did went to his phone before it went anywhere." },
          { n: "He stopped. She watched him follow it to the end, the way he read a defense, slowly, all the way to the last man, and not be able to go back." },
          { s: 'jaehyun', f: 'serious', t: "He looks at it. Every morning. He told you. On these steps. *It was the last thing I had of you that moved.*" },
          { s: 'jaehyun', f: 'serious', t: "It's not running for me. It's running for *him*." }
        ] },
        { t: "(Turn it face down on the step. Put your hand on it.)", notes: 2, then: [
          { n: "She took it off his palm and turned it face down on the wet stone and put her own hand flat on top of it, and felt it there under her palm, small and heavy and faintly warm, the way the step had been warm in the leaves; and it was. It was warm. She took her hand off it as if she'd been burned." }
        ] }
      ] },

      { place: 'Iwatodai Dorm · Third Floor', time: 'Evening', bg: 'iwatodaidorm-hallway', music: 'tender', soft: true },
      { n: "Their father was in the window seat at the end of the third-floor hall, with the street lamp coming up through the glass and his phone in his hand, at ten past seven, in a sweater somebody had lent him that was too young for him by twenty years." },
      { n: "He'd taken the window seat the first night, the way he'd have taken the head of a table: by sitting in it once and then simply being where he was. From it you could see the front door, and the gate, and the road down the hill toward the river. Taejoon had the top of the stairs. Jaesang had the window. Mr. Kim had the kitchen. Between them, Hanni said, the building was the most thoroughly watched house in Japan." },
      { ifEvent: 'eqx-1122', then: [
        { ifFlag: 'dead.aigis', then: [
          { n: "Above them, on the fourth floor, past the command room, there was a door nobody opened now. Jaehyun walked past the foot of those stairs every night on his way to the window seat and didn't look up them, the way you don't look at a place on a road." }
        ] },
        { n: "He didn't need the seven fifteen anymore. She was upstairs, or in the Tatsumi ward with her face to the wall, alive. He sat in the window at seven fifteen anyway. Jaehyun said he'd stopped calling the number. He hadn't stopped sitting there with the phone in his hand when the time came." }
      ], else: [
        { n: "At seven fifteen he'd call her number. He'd done it every evening since the bridge; Jaehyun had stopped pretending he didn't. He'd hold it to his ear in the window seat until it stopped, and then he'd put it face down on his knee and look out at the road for a while." }
      ] },
      { n: "He looked up when they came along the hall. Both of them. He looked at Jaehyun's face. And he didn't wait to be asked." },
      { s: 'jaesang-runners', f: 'neutral', t: "You ran on Tuesday." },
      { n: "He turned the phone round. The app. The one with the graphs, the splits, the little map. A workout at the top of the list. The shrine steps. *113.* *4:50 PM.* And the heart-rate line along the bottom, a flat straight green line all the way across, perfectly level, like a man who'd never once been out of breath in his life." },
      { s: 'jaehyun', f: 'neutral', t: "...I didn't, Dad." },
      { s: 'jaesang-runners', f: 'neutral', t: "I know you didn't." },
      { n: "He said it at once. Calmly. The voice from the far end of a dinner table when somebody had brought him a number that didn't add up." },
      { s: 'jaesang-runners', f: 'neutral', t: "Your heart rate's never been forty in your life. You were born at a hundred and sixty and you've been trying to get it down ever since. I've looked at every one of your runs for six years, Jaehyun. I'd know your heart if it walked into this hall in somebody else's coat." },
      { n: "Then his calm went, for one second. Solar saw it go. Not his face; his hand. The hand holding the phone, which had held a running shoe all the way up a well on the night of the twenty-third and not let go of it through a fight; it moved, very slightly, the thumb along the edge of the case, as if he'd been about to press something and stopped." },
      { s: 'jaesang-runners', f: 'neutral', t: "...I watched it for an hour on Tuesday night. Before I worked it out. I watched a hundred and thirteen steps go up and a flat line along the bottom, and for an hour I thought, he's all right. He's calm. He went up all those steps and he was calm the whole way." },
      { s: 'jaesang-runners', f: 'sad', t: "It was very kind of it. To let me have the hour." },
      { n: "Nobody said anything. Down the hall, Taejoon on the top step didn't turn round, but his head moved, a quarter inch, toward the window seat." },
      { choose: [
        { t: "(Hold out the watch to Dad.)", notes: 3, flag: 'eqx-jaehyun-watch-dad', then: [
          { n: "She looked at Jaehyun first. He looked at the watch, and then at her, and gave the smallest nod she'd ever seen him give, the one he gave a coach across a field when he'd already decided and only wanted it witnessed." },
          { n: "She held it out. Her father looked at it a long time before he took it. He'd chosen it. He'd had the back engraved. He turned it over in his palm and read his own word on the back, *Pace*, and his mouth did something it didn't give permission for." },
          { s: 'jaehyun', f: 'neutral', t: "You hold it. Not me. If it runs again, you'll know. Because I'll be in the room with you. I'll be right here, at the window, wherever you are. You'll look up and I'll be there and you'll know it isn't me." },
          { s: 'jaehyun', f: 'neutral', t: "That's a procedure. It's the only one I've got left that works." },
          { s: 'jaesang-runners', f: 'neutral', t: "...Understood." },
          { n: "He put the watch in the breast pocket of the borrowed sweater, over his heart, and buttoned the pocket, and kept his hand flat over it, the way his son kept his hand over things; and Solar saw her brother see it, and look away down the hall, fast." }
        ] },
        { t: "Take it off his account, Jae. Now. Unlink it.", notes: 2, flag: 'eqx-jaehyun-watch-unlinked', then: [
          { n: "Jaehyun held out his hand for his father's phone. Jaesang looked at the hand. He'd never once in six years let anybody touch that app. He gave it to him." },
          { n: "It took a minute. Settings, the device, *remove*, *are you sure*. Jaehyun stood in the hall with his thumb over the last button and his jaw set, and pressed it, and the watch's name went out of the list, and the green on its face, wherever it was, blinked once and went gray." },
          { s: 'jaesang-runners', f: 'neutral', t: "...So I can't see your runs." },
          { s: 'jaehyun', f: 'neutral', t: "No, Dad. You'll have to ask me." },
          { n: "Her father looked at his son for a long time. Then he nodded, slowly, as if he'd been handed a contract in a language he'd always meant to learn." },
          { s: 'jaesang-runners', f: 'neutral', t: "...How was your run today." },
          { s: 'jaehyun', f: 'neutral', t: "Wet. I sat in a puddle." }
        ] },
        { t: "(Say nothing. It's theirs.)", notes: 3, then: [
          { n: "She didn't say anything. She stood a half step off her brother's shoulder in the hall, the way she'd stood off her father's at a hundred dinners, and let the two of them look at each other over a phone with a flat green line on it, and decide." },
          { n: "In the end Jaehyun sat down on the end of the window seat. Not close. Her father moved his feet, a few centimeters, to make room, which on him was a speech. They sat there together looking at the road down the hill, the gate, the lamp, the bend toward the river, and neither of them looked at the phone again, and neither of them put it away." }
        ] }
      ] },
      { n: "At seven fifty Jaehyun walked her to her own door, which was thirty steps down the hall and one flight down. He did it anyway. He knocked on her door frame three times. Her name. His. The left hand, raised, solemnly, at a distance of thirty centimeters, in the hall, where the whole second floor could see him do it." },
      { s: 'jaehyun', f: 'neutral', t: "...Call if you need anything. You won't. But the offer stands." },
      { s: 'jaehyun', f: 'neutral', t: "And tomorrow, send me a time. A strange one. A stupid one. Something nothing on earth would think I'd pick." },
      { ifFlag: 'eqx-jaehyun-time-solar', then: [
        { s: 'jaehyun', f: 'neutral', t: "You've been sending them since July. I've been running at them. I thought I was getting away from it. It turns out it doesn't need my time. It's got four fifty. It's always had four fifty." },
        { s: 'jaehyun', f: 'neutral', t: "Send one anyway. I like getting them. It's the first thing on my phone in the morning that isn't seven fifteen." }
      ], else: [
        { s: 'jaehyun', f: 'neutral', t: "I know. I said I didn't want one in July. I've changed my mind. I'm allowed. I learned that on a staircase." }
      ] },
      { n: "He went back up the stairs. She heard him on them, and then on the third floor, the window seat creaking; and then nothing for a long time, and then, very low, through the ceiling, two men's voices, one of them saying something and the other one saying *no, Dad, the bottom one doesn't move*." },
      { n: "She lay awake till the hour came and went. It came. It went. In the morning she texted him *6:03*, which was a stupid time, which nothing on earth would think he'd pick; and at four fifty that afternoon, Hanni told her at dinner, somebody's watch upstairs had lit up green for exactly one minute, in a buttoned pocket or a drawer or the dark, and then gone out again, as if it had climbed the first step, and looked up, and found nobody at the top." }
    ] },
    { after: '12/2', title: '8: one more', place: 'Naganaki Shrine · The Steps', time: 'After School', music: 'tender', scene: [
      { bg: 'naganaki-shrine-winter' },
      { n: "The first hard frost came on the first of December and didn't leave. It sat in the cupped middles of the steps all day where the sun didn't reach, a white rime like salt on the rim of a glass, so that the staircase looked as if somebody had gone up it in the night with a bag of flour and stopped every few treads to sprinkle; and she hated that she thought that; and she thought it every time." },
      { n: "He wasn't running. He was standing at the bottom with his hands in the pockets of his running jacket and a scarf she didn't recognize, gray, hand-knitted, badly, looking up. When she came along the road he didn't turn round." },
      { s: 'jaehyun', f: 'neutral', t: "A hundred and twelve. Every day since the twenty-second. Up and down. I've had Minji count from the top and you count from the bottom and Hanni count from the middle. A hundred and twelve." },
      { s: 'jaehyun', f: 'neutral', t: "It's gone. The step. It went the night they came up. I came here the next morning at five, in the dark, with a torch, and counted, and it was a hundred and twelve, and I sat down on the bottom step and laughed so hard an old lady asked if I needed a doctor." },
      { s: 'jaehyun', f: 'serious', t: "And then Fuuka came and found me. It's not gone. It moved. It's down there now. All of it. The whole staircase. Every time she listens there's one more." },
      { choose: [
        { t: "Where'd you get the scarf, Jae?", notes: 3, then: [
          { n: "He looked down at it as if he'd only just noticed it was on him. His face did the thing at the mouth." },
          { s: 'jaehyun', f: 'neutral', t: "...Mom. She's knitting. In the lounge. She can't sit back in a chair so she sits on the front of the couch and knits. She doesn't know how. She never knew how. She's doing it anyway. The doctor said keep her hands busy." },
          { s: 'jaehyun', f: 'neutral', t: "It's got eleven holes in it. I counted. I'm wearing it every day until it falls off me." }
        ] },
        { t: "Tonight?", notes: 3, then: [
          { s: 'jaehyun', f: 'neutral', t: "Tonight. Mitsuru said yes at lunch. She said it the way you'd sign for a parcel you didn't order." }
        ] },
        { t: "(Stand next to him and look up the steps too.)", notes: 2, then: [
          { n: "She stood next to him and looked up. A hundred and twelve, frost in the cups of them, the torii small and red at the top against a white sky. She found she'd counted them with her eyes before she meant to. A hundred and twelve. She didn't trust it either." }
        ] }
      ] },
      { n: "He told her the rest on the walk back, at the uneven pace, a little fast and then a little slow. Mitsuru wouldn't let him down without somebody who could fight. Not Solar alone; Solar couldn't watch a staircase and a brother at the same time, Mitsuru said, and she'd been right, and Jaehyun had hated that she was right. So Hanni was coming." },
      { s: 'jaehyun', f: 'neutral', t: "She asked to. In the kitchen. She came and stood in front of me with her hands behind her back like she was about to tell me my grades, and said, *I added the left hand. In April. I'd like to be there for the rest of the procedure.*" },
      { s: 'jaehyun', f: 'neutral', t: "Nobody's ever asked to be there for the rest of one of my procedures. People usually leave at about step two." },
      { ifFlag: 'dead.aigis', then: [
        { n: "Hanni had been down there on the twenty-second. At the Tree. She'd stood in front of Hyein on the bank with her arms out, and something had come up out of the ground behind her, vast and gentle, with birds in its hair; and then the water had closed over Aigis, and Hanni had held Hyein on the bank by both arms while the metal gave and gave. She didn't talk about it. She'd started knocking on every door in the dorm before she opened it, even the bathroom, even empty rooms. Everyone had noticed. Nobody said." }
      ], else: [
        { n: "Hanni had been down there on the twenty-second. At the Tree. She'd stood in front of Hyein on the bank with her arms out, and something had come up out of the ground behind her, vast and gentle, with birds in its hair. She didn't talk about it. She'd started knocking on every door in the dorm before she opened it, even the bathroom, even empty rooms. Everyone had noticed. Nobody said." }
      ] },
      { n: "At the dorm gate he stopped. He took something out of his jacket and held it between them. The cream notebook, soft-covered, with a pencil in the spine." },
      { ifFlag: 'eqx-jaehyun-notebook', then: [
        { n: "He opened it to the last page that had writing on it. Under their mother's crooked last line there were his square capitals now, two months of them. *OUT AT 4. COLD. 113. HOME. ATE.* *OUT AT 3:52. 112. HOME.* *DIDN'T RUN. DAD'S ROOM. HOME.* *OUT AT 6:03. WET. HOME. ATE (TRUE).*" },
        { s: 'jaehyun', f: 'neutral', t: "Every day. Like you said. So it's written down somewhere that I did." },
        { s: 'jaehyun', f: 'sad', t: "She hasn't seen it. She's been in the lounge since Wednesday. Knitting. Six feet from it. She doesn't know it's hers. She looks at me in the mornings when I go out like she's trying to remember if there's something she's supposed to say." }
      ], else: [
        { n: "He opened it to the last page with writing on it. Their mother's crooked line. *Out early. Hungover, I could tell. Back by eight, I hope.* And then the blank pages." },
        { s: 'jaehyun', f: 'sad', t: "She hasn't seen it. She's been in the lounge since Wednesday. Knitting. Six feet from it. She doesn't know it's hers. She looks at me in the mornings when I go out like she's trying to remember if there's something she's supposed to say." }
      ] },
      { s: 'jaehyun', f: 'neutral', t: "I'm taking it down with me. Don't say anything. I don't know why. I'm not a person who takes things for luck. I've never once had a lucky anything." },

      { place: 'Gekkoukan High · Courtyard', time: 'Late Night', bg: 'eqx-courtyard-well-night', music: 'mystery', soft: true },
      { n: "Hanni was at the lip of the well at a quarter to midnight in a coat buttoned to the chin and gloves, which she took off when she saw them, and put in her pocket, and didn't explain. She looked at Jaehyun, top to bottom, the way he looked at Solar in doorways." },
      { s: 'hanni', f: 'neutral', t: "Three knocks. Your name, hers. Gate. Left hand. You remember mine?" },
      { s: 'jaehyun', f: 'neutral', t: "The left hand. Because only I'd know you'd check which hand." },
      { s: 'hanni', f: 'serious', t: "Good. Here's the next step. Down there, nobody turns round. Not you. Not her. Me. I walk at the back, and I walk backward, and I'll tell you what I see. If I say *don't look*, you don't look. That's the step. Say it back." },
      { s: 'jaehyun', f: 'neutral', t: "Nobody turns round but you. If you say don't look, I don't look." },
      { s: 'hanni', f: 'happy', t: "Clean call." },
      { ifFlag: 'dead.shinjiro', then: [
        { s: 'jaehyun', f: 'neutral', t: "I'll walk at the back." },
        { s: 'hanni', f: 'serious', t: "No. I'm at the back. You're not paying anything off tonight, Jaehyun. Not on my rope." },
        { n: "He looked at her for a long moment. Then he nodded, the small nod he gave a coach across a field, and Solar saw something come off his shoulders that had been sitting there since a funeral, not all of it; a corner of it." }
      ] },
      { n: "Jaehyun stared at her. Hanni didn't smile. Then she did, very slightly, at one corner, and pulled her coat collar up, and at midnight the courtyard went red, and the well opened its stone mouth, and they went down the rope." },

      { place: 'The Well · The Steps', time: 'The Red Hour', bg: 'eq-well-6', music: 'eerie' },
      { dark: true },
      // BG: eqx-well-steps — a long flight of worn old stone shrine steps going straight down into darkness under a red light, frost in the cupped treads, faded chalk numbers on every step, no rail, no walls, nothing at the bottom but more steps.
      { n: "It was under the Road Home. Past the last hill, past the place where the stone steps with the shoes on them went down into the dark, Fuuka took them off the road onto a path nobody had walked, and the path became a staircase, and the staircase was his." },
      { n: "Old stone. Worn into shallow cups in the middle by a few hundred years of feet. Frost in the cups. No rail, no walls; on either side, nothing, a red dark going away in every direction. And on every tread, in chalk, faded nearly to nothing, a number. In his handwriting. The square scoreboard capitals from April." },
      { n: "*1.* *2.* *3.* Going down." },
      { s: 'fuuka', f: 'sad', t: "...I can't find the bottom. Every time I count there's one more. It's not a trick of mine. I've checked. Jaehyun-kun, it's adding them while I listen." },
      { s: 'jaehyun', f: 'neutral', t: "That's fine. We'll count it ourselves. Out loud. Like the house." },
      { n: "So they went down, the three of them, Jaehyun on the outside where a rail would have been, Solar beside him, Hanni behind them both, walking backward, one hand trailing out to her side in the red as if she were feeling for a wall that wasn't there. And they counted." },
      { choose: [
        { t: "(Count with him. Exactly. Every number right.)", notes: 2, then: [
          { n: "She counted with him. Every number right, in step, their two voices going down the stairs together in the red, *thirty, thirty-one*, and his voice steadying on hers the way a runner steadies on someone's shoulder. It was the most frightening thing she'd ever done perfectly." }
        ] },
        { t: "(Count one ahead of him. Every time. So you never come out the same.)", notes: 3, flag: 'eqx-jaehyun-one-ahead', then: [
          { n: "She counted one ahead. Every step. He said *thirty* and she said *thirty-one*; he said *thirty-one* and she said *thirty-two*, and at that one his voice went, she heard it go, a crack and then a breath that was nearly a laugh; and he didn't correct her; and they went on down like that, never once coming out the same, his number and her wrong one, side by side, the way they'd come down the stairs at the house for ten years." }
        ] }
      ] },
      { n: "*Fifty-seven.*" },
      { n: "*Fifty-eight.*" },
      { n: "*A hundred and twelve.*" },
      { n: "On the hundred and twelfth step the chalk stopped. The next step down had no number on it. It was warm. She felt it through the sole of her shoe, the way you feel the place where somebody's just got up off a chair. And there was a fine pale dust in its cupped middle, lying very evenly." },
      { n: "And on the step below that, sitting with her back to them, a woman." },
      { n: "A cream cardigan. Buttoned. Hair in a tortoiseshell clip, coming loose at one side. Sitting the way you'd sit on a step at the bottom of a staircase to wait for someone, with her knees together and her feet tucked to one side, and a notebook open on her knee, small, soft-covered, cream, with a pencil, writing." },
      { n: "Down the back of the cardigan, from the collar to the hem, there was a seam. Not a seam in the knit. A seam in what was under it. It was open a finger's width, all the way down, and inside it, in the gap, something moved, slowly, the way something moves in a sleeping bag." },
      { s: 'hanni', f: 'serious', t: "...Don't look at her back." },
      { n: "Jaehyun looked at the back of her head. Only the head. The clip. The loose piece of hair. Solar watched him decide to look only there, and hold it." },
      { n: "The woman wrote something. The pencil scratched. Then she read it out, in Solji's voice, exactly, the little lift at the end of it, not turning round." },
      { n: "*Out at midnight. Cold. No hat. Came down instead of up. Good.*" },
      { n: "*Oh, honey. Look at you. You came down. You never come down, you always go up, all those years, always up and up and away from me with that terrible watch on. And now you've come down to me. All this way.*" },
      { n: "*Sit with me. Just for a minute. Nobody's timing you. I've never once timed you, have I. I only wanted to know you'd come home. And you have. You're home. Sit down, sweetheart. I'll write it down. I'll write it down every day, forever. Up there she won't. Up there she doesn't even remember to ask.*" },
      { n: "Jaehyun had stopped breathing. Solar felt it in the air beside her, the way you feel a door close somewhere in a house. His hand had gone to the pocket of his jacket, where the real notebook was. It stayed there, flat over it." },
      // CG: eqx-one-more — an endless flight of old stone steps going down into blood-red darkness, chalk numbers on the treads; a young man in a running jacket and a badly knitted gray scarf standing on the last numbered step with his hand flat over his chest pocket, looking at the back of a woman's head below him; the woman seated on a lower step in a cream cardigan, writing in a small notebook, a dark seam open down her back.
      { choose: [
        { t: "Sit with her, Jae. Just a minute. You can. It's all right.", notes: 1, tally: { cakes: 1 }, flag: 'eqx-jaehyun-floor-sat', then: [
          { n: "She heard herself say it in the voice she used in doorways, warm, exactly right, and felt the small warm thing go out from under her ribs as she said it, and a fullness come after, terrible and satisfied, like a stomach after a meal." },
          { n: "He sat. On the warm step. Beside the cream cardigan. Not touching it. Hanni said his name, sharp, twice, and he didn't hear her. The woman didn't turn round. She put out one hand, gloved, white, and laid it on his hair, the way you'd lay a hand on a child's hair at a kitchen table; and his eyes closed." },
          { n: "*There*, she said. *There, there.*" },
          { s: 'hanni', f: 'serious', t: "*Âu Cơ.*" },
          { n: "The light came up behind Hanni like a mountain coming up out of mist, and out of its open hands a cord of gold ran down the steps and went round Jaehyun's chest, and Hanni pulled. She pulled with her whole body, with her heels on the stone and her teeth set, and he came up off the warm step backward like someone pulled out of water, and the glove came off his hair and stayed in the air where his head had been, and the woman didn't turn round." },
          { n: "She only wrote something. The pencil scratched. *Stayed a minute*, she said, in Solji's voice, fondly. *Good boy.*" },
          { n: "They went up. Hanni walking backward, the cord still round him. Jaehyun between them with his legs working and his face blank, and Solar counting for him, out loud, all the way, because he'd stopped. He'd stopped counting. On the stairs, on his stairs, he'd stopped at thirty and his mouth went on moving and no numbers came out, as if they'd fallen off a table." }
        ] },
        { t: "(Take his free hand. Put it on the step above, the hundred and twelfth. Up.)", notes: 3, then: [
          { n: "She took his free hand, the one that wasn't over the notebook, and turned it, and put it flat on the step above them, the last one with a number on it. Cold. Frost in the cup of it. Chalk under his palm, his own square *112*. Cold and wrong and his." },
          { n: "She felt it go into him. The cold. The number. He looked down at his own hand on his own handwriting for a long moment." }
        ] },
        { t: "A hundred and fourteen.", notes: 3, then: [
          { n: "She said it out loud. Wrong. On purpose. The way she'd said thirty-two on the stairs at the house for ten years so he'd have to say thirty-one, so he'd sit with her, so they'd count it together." },
          { n: "The woman on the step stopped writing." },
          { n: "And Jaehyun laughed. It came out of him cracked and helpless, into the red, the real laugh from the dorm step, and he put his hand over his face." },
          { s: 'jaehyun', f: 'happy', t: "...A hundred and fourteen. You little— *a hundred and fourteen*." }
        ] },
        { ifFlag: 'eqx-jaehyun-thread-kept', t: "(Take the cream thread out of your coat. Tie it round his wrist.)", notes: 3, then: [
          { n: "She'd carried it since October. In the inside pocket of her coat, against her chest, where she'd know if anything went near it. She took it out now. Long, soft, cream. She took his wrist, the bare one, where a watch had been, and tied the thread round it, twice, in a knot she pulled tight with her teeth, the way you tie something you can't afford to lose." },
          { n: "The woman on the step lifted her head. Not round. Just lifted it, the way you lift your head when you hear your own name in another room." },
          { n: "*That's mine*, she said, in Solji's voice, and for the first time it wasn't fond. *That's mine. Give it back.*" },
          { s: 'solar', f: 'neutral', t: "No. It's his. You left it on his step. You don't get to ask for it." }
        ] }
      ] },
      { ifFlag: 'eqx-jaehyun-floor-sat', then: [], else: [
        { n: "Jaehyun took the notebook out of his pocket. The real one. He opened it, there, on the hundred and twelfth step, in the red, with his back to nothing and the woman below him with hers to him, and took the pencil out of the spine." },
        { s: 'jaehyun', f: 'neutral', t: "...You're writing the wrong thing." },
        { n: "He said it to the back of her head. Very politely. The voice he used on officials." },
        { s: 'jaehyun', f: 'neutral', t: "She never wrote *good* when I stayed. I've read it. Every page. Six years. She wrote *good* once. When I didn't run. When I stayed in bed. One time. Because I was sick and I'd finally listened to somebody." },
        { s: 'jaehyun', f: 'neutral', t: "Every other page, she wrote whether I came home. That's all. *Back at seven. Ate.* She didn't want me to sit down with her. She wanted me to come back from wherever I'd been." },
        { s: 'jaehyun', f: 'serious', t: "So here's whether I came home." },
        { n: "He wrote. Standing on the step, in the red, with the pencil, in square capitals. She saw it over his arm. *OUT AT 12. COLD. 112. GOING UP.*" },
        { n: "And then he turned round. Not to the woman. Away from her. He turned his back on the cream cardigan and the seam and the warm step, and faced up the staircase into the red, a hundred and twelve treads of his own handwriting going up into the dark, and he went." },
        { n: "Walking. Not running. At the uneven pace he'd taught himself in July, a little fast and then a little slow. Counting out loud. Wrong. On purpose." },
        { s: 'jaehyun', f: 'neutral', t: "...One. Two. Four." },
        { n: "Solar went up beside him. *Three*, she said, so he'd have to say it again. He didn't. He said *five*. She laughed. She couldn't help it; it came up out of her into the red like something let out of a box, and he heard it, and went on miscounting, out loud, all the way, *nine, eleven, twelve*, the first time in his life he'd ever got a number wrong on purpose and let it stand." },
        { n: "Behind them Hanni walked backward, one hand out at her side, her eyes on the step they'd left." },
        { s: 'hanni', f: 'serious', t: "...She's not following. She's sitting there. She's writing." },
        { n: "A long time. Thirty steps, forty. Jaehyun's voice going up through the numbers in the wrong order, and Solar's beside it, and Hanni's breathing." },
        { s: 'hanni', f: 'neutral', t: "She's stopped writing. She's— the cardigan's lying down. On the step. It's folding. There's nothing in it." },
        { s: 'hanni', f: 'sad', t: "...The notebook's still open on it. Don't look. It's blank. It's all blank. Every page." },
        { flag: 'eqx-jaehyun-floor-up' },
        { s: 'fuuka', f: 'surprised', t: "Jaehyun-kun. I've got the bottom. There's a bottom. It's a hundred and twelve. It's just a staircase. It's just a staircase now." }
      ] },
      { dark: false },

      { place: 'Iwatodai Dorm · Kitchen', time: 'Early Morning', bg: 'iwatodaidorm-kitchen', music: 'tender', soft: true },
      { n: "He didn't sleep. Neither did she. At ten to six she came down for water and he was in the kitchen in his running jacket and the badly knitted scarf, lacing his shoes at the table with his foot up on a chair, the way their mother had told him for ten years not to." },
      { ifFlag: 'eqx-jaehyun-floor-sat', then: [
        { n: "He was moving his lips while he laced them. Counting the eyelets. She watched him get to five and start again. Get to five, and start again. He saw her watching and stopped, and finished the knot without counting, and didn't look at her." },
        { s: 'jaehyun', f: 'neutral', t: "...It'll come back. Hanni says it'll come back. She says everybody loses something small down there and gets it back in a week." },
        { s: 'jaehyun', f: 'sad', t: "I counted the steps for ten years, Solar. I don't know how to run them if I can't count them." }
      ] },
      { n: "Their mother was at the table." },
      { n: "On the front of the chair, so nothing touched her back. In a robe of Mitsuru's, dark red, too long in the sleeves. The overhead light on, though it was nearly morning; she kept every light on now. The knitting in her lap, the next scarf, gray again, a needle in each hand, not knitting; just holding them. She looked up when Jaehyun stood." },
      { n: "She looked at him. At the jacket. At the shoes. At the scarf she'd made, with its eleven holes. Her face did something Solar had seen it do on the fourth of December, at the kitchen table, at midnight, when she'd said she kept dreaming she was telling somebody a story and couldn't remember the end: a reaching, a small frown, as if for a word in another language." },
      { s: 'solji-runners', f: 'neutral', t: "...Out early?" },
      { n: "Jaehyun stopped with his hand on the back of the chair." },
      { s: 'solji-runners', f: 'neutral', t: "Back by eight, I hope." },
      { n: "She said it lightly. Absently. The way you'd say something you'd said a thousand times without ever once hearing yourself. Then she frowned at her own needles, as if they'd said it, and went back to looking at the yarn." },
      { n: "Jaehyun didn't move. Solar watched it go into him, from the back, the way she'd watched it go into him on a staircase in August when a man at the bottom asked if it was hard: all of it, all at once, the six years of pencil, the crooked last line, the blank pages, the thing on the step reading out the wrong word in the right voice. And this. A woman who couldn't remember a single bedtime story, who couldn't be touched on the back, saying the one line from her notebook she'd never once said to his face." },
      { choose: [
        { ifFlag: 'eqx-jaehyun-notebook', t: "(Take the notebook out of his jacket. Put it on the table by her tea.)", notes: 3, flag: 'eqx-jaehyun-notebook-mom', then: [
          { n: "She took it out of his jacket pocket, where it had been all night, and put it down on the table by their mother's cup, open at the last page, his capitals, *OUT AT 12. COLD. 112. GOING UP.*" },
          { n: "Solji looked at it. At the pencil. At the handwriting above his, crooked and slanted and small, which was hers, and which she didn't know. She turned a page back. And another. And another. Years. *Out at six. Cold. No hat.* Her lips moved on them the way you read a letter from somebody who's died." },
          { s: 'solji-runners', f: 'sad', t: "...Did I write these?" },
          { s: 'jaehyun', f: 'neutral', t: "Yes, Mom." },
          { s: 'solji-runners', f: 'neutral', t: "I don't remember. I don't— I don't remember any of them." },
          { n: "She looked at the last page a long time. Then she put her knitting down, and took the pencil out of the spine, and held it over the blank line under his, and didn't write anything. Just held it there. Waiting." },
          { s: 'solji-runners', f: 'neutral', t: "...You'll have to tell me when you're back. So I can put it down." }
        ] },
        { t: "He'll be back by eight, Mom.", notes: 2, then: [
          { n: "Their mother looked at her. Then at Jaehyun, and smiled, the real one, the small one, not the one from the bottom of the steps; it didn't go too wide; it sat right on her face." },
          { s: 'solji-runners', f: 'happy', t: "Good. Eat first. Both of you." }
        ] },
        { t: "(Say nothing. It's his.)", notes: 3, then: [
          { n: "She didn't say anything. She stood in the doorway in the cold with her empty glass and let it be his." },
          { s: 'jaehyun', f: 'neutral', t: "...Yes, Mom. By eight." },
          { n: "He said it to the back of the chair. Very carefully. Like setting down a cup with a crack in it." }
        ] }
      ] },
      { n: "He went out. She heard the front door, and Koromaru lifting his head from the mat and putting it down again, and his feet on the frost in the yard, uneven, a little fast and then a little slow, going away down the hill toward the shrine." },
      { n: "At seven fifty-eight she was still in the kitchen, and so was their mother, who had not knitted a single stitch. The front door went. Feet in the hall. Jaehyun in the doorway with frost in his hair and his face red from the cold and his breath coming hard, standing there, saying nothing, letting himself be looked at." },
      { n: "Their mother looked at him for a long time, top to bottom, the way he looked at Solar in doorways, for layers. Then she picked up the pencil." },
      { ifFlag: 'eqx-jaehyun-notebook-mom', then: [
        { n: "She wrote in the notebook. Slowly. In the crooked slanted hand she didn't know was hers. *Back 7:58.* And then stopped, with the pencil still on the page, and looked at it, at her own hand holding it, as if it belonged to somebody she'd met once and liked very much and couldn't place." }
      ], else: [
        { n: "There was nothing to write in. She looked round the table for something, frowning. Then she took the paper napkin from under her cup and wrote on that, in a crooked slanted hand, *Back 7:58*, and folded it, and held it out to him across the table without a word; and he took it, and looked at it, and put it in the pocket over his heart, and buttoned the pocket, and kept his hand flat there." }
      ] }
    ] }
  ]
});
