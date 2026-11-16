/* Persona 3: Equinox · Jaehyun Lee · Emperor. Link data (femc-equinox-game.html). Format: link fields in
   assets/femc/game/core.js ("Links" header), scene lines in assets/femc/game/scene.js.
   Written: rank 1 only (from 4/13; his home is the Naganaki Shrine steps on weekday and Saturday afternoons but Wednesday,
   so 4/13 itself). Ranks 2–10 still to write. Shape: the stub fields from assets/femc/equinox/data/links.js.
   Solstice's Jaehyun link is shared memory ("the offer stands", the three knocks on the dorm door last October, "big bro",
   thirty-one stairs and her saying thirty-two, the layers); nothing reads Solstice link standing. Runners fences hold: no
   home event past the page, nothing about what he knows of the boys; Father stays offstage.
   Flags this file sets: eqx-jaehyun-knock (rank 1: Solar agrees to his three-knock rule). Nothing reads it yet. */
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
    ] }
  ]
});
