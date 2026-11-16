/* Persona 3: Equinox · Mark Lee · The Magician. Link data (femc-equinox-game.html). Format: link fields in
   assets/femc/game/core.js ("Links" header), scene lines in assets/femc/game/scene.js.
   Written: rank 1 (after 7/1: he came through on 6/30 in the red, story-act2 'eqx-piano'; his home is the seagull piano at
   Port Island Station on Monday, Wednesday, Friday and Saturday evenings, so 7/2 at the earliest). Ranks 2–10 still to
   write. Shape: the stub fields from assets/femc/equinox/data/links.js.
   Shared memory: Solstice's Mark link (the station piano, the four notes and the fifth he can't find; "Sol", which she lets
   him keep; his tell: he overplays casual and rubs the back of his neck; no 'happy' portrait, so his smiles are neutral) and
   the Runners epilogue. Solar remembers all of Runners now; so does he. Fence (plan §0 rule 7): Mark is complicated, never a
   villain or a hero; nothing here says what he did or didn't do at home, only that both of them know. The coat and the
   square stiff thing in its inside left pocket stay unnamed (never opened, on any route).
   The hook: the coat he won't take off in July, and the four notes heard from the station in the red on a night he was
   asleep in the guesthouse.
   Reads: eqx-mark-fifth (story-act2 6/30: Solar played the fifth note) and ifEvent eqx-last-grain (7/27 morning).
   Flags this file sets: eqx-mark-coat (Solar doesn't ask him to take the coat off). Nothing reads it yet. */
(window.FEMC_GAME_LINKS ||= []).push({
  id: 'mark', name: 'Mark Lee', short: 'Mark', arcana: 'Magician', numeral: '', from: 'Runners', kind: 'searcher',
  world: 'R', romance: null, arrives: '6/30', starts: '7/1', lodging: 'guesthouse',
  home: { area: 'portisland', spot: 'Central Concourse', slot: 'evening', days: [1, 3, 5, 6],
          hint: 'Evenings at Port Island Station, at the public piano with the seagulls painted on it.' },
  approach: "At the far end of Port Island Station's concourse, at the chipped upright piano with the seagulls painted on it, a boy in a dark wool coat is playing something long and careful for nobody, in July, with the sweat standing on his forehead, and he hasn't unbuttoned a single button.",
  ranks: [
    { after: '7/1', title: '1: the coat', place: 'Port Island Station · Central Concourse', time: 'Evening', music: 'mystery', scene: [
      { bg: 'station-concourse-evening' },
      { n: "In the evening the concourse at Port Island Station turned gold. The light came in low through the big west windows and lay across the floor in long bars, and the commuters walked through them, gold, shadow, gold, all of them carrying the day home on their shoulders, and the departure board clattered over everyone's heads, and the whole hall smelled of floor polish and the bakery stand's last unsold melon bread." },
      { n: "And at the far end, at the chipped upright piano with the fat painted seagulls, somebody was playing." },
      { n: "Not the four notes. Something else. Something long and careful and a little sad, with a left hand that walked under it like a person pacing a corridor, and every few bars it went somewhere unexpected and then came back, apologizing. People slowed as they passed. A woman with a stroller stopped altogether. A little boy stood right beside the bench and watched the hands." },
      { n: "Mark was in the coat. The dark wool coat, buttoned to the throat, in the first week of July, in a station hall that was twenty-eight degrees even with the doors shut. His hair was damp at the temples. There was sweat on his upper lip. He played as if none of that were happening to him." },
      { n: "He finished. The woman with the stroller clapped twice, embarrassed, and went on. The boy said something in Japanese that Mark clearly didn't understand, and Mark said *thank you, man* in English, warmly, and held out his fist, and the boy looked at it, and bumped it, and ran off delighted. Then Mark saw her." },
      { ifFlag: 'eqx-mark-fifth', then: [
        { s: 'mark', f: 'neutral', t: "Hey. Hey, Sol. The fifth-note girl. I've been trying to play it for you all week. I keep hitting the one next to it." }
      ], else: [
        { s: 'mark', f: 'neutral', t: "Hey. Hey, Sol. Okay, before you say anything, I still can't get it. The fifth one. I tried a hundred times. My hand doesn't believe in it." }
      ] },
      { n: "He rubbed the back of his neck. He was smiling, the easy smile, the one that had worked on a whole campus, and his eyes went to her face and checked it quickly, the way you'd check a step in the dark before you put your weight on it." },
      { choose: [
        { t: "That was beautiful. What was it?", notes: 3, then: [
          { s: 'mark', f: 'flustered', t: "Oh. That? Nothing. That's just. That's just a thing I do with my hands when I don't know what to do with my hands." },
          { s: 'mark', f: 'neutral', t: "...It doesn't have a name. I started it in the guesthouse lobby on the first night. There's a piano there too. Nobody uses it. It's out of tune in a nice way." }
        ] },
        { t: "Hi, Mark.", notes: 2, then: [
          { n: "Just that. Not *Marky*. He heard it. She watched him hear it, the small flicker of it, and file it, and put the smile back on over the top as smoothly as a jacket." },
          { s: 'mark', f: 'neutral', t: "Hi. Yeah. Hi." }
        ] },
        { t: "(Sit on the end of the bench.)", notes: 3, then: [
          { n: "She sat on the end of the bench. He shifted over to make room, too far, so that he was nearly off the other end, and then noticed, and came back a little, and stopped, and the space between them settled at about a hand's width, which seemed to be the width they both could live with." }
        ] }
      ] },
      { n: "Up close, the coat was worse. The wool was damp all over, not just at the collar, as if he'd been out in rain, and the cuffs were dark with it. When he moved, the smell of wet wool came off him, the smell of a winter street, a smell that had no business in this hall in July." },
      { s: 'mark', f: 'neutral', t: "I know. I know what you're going to say. Everyone says it. Jungwon said it in this really polite way that made me want to die. Hanni said it in a less polite way." },
      { s: 'mark', f: 'neutral', t: "I'm cold. That's all. I'm just cold. It's been cold since I got here. It's like I brought it with me. Like it's still snowing somewhere a little bit behind me and I can't get far enough ahead of it." },
      { n: "His hand had gone, while he said it, to the left side of his chest. Flat. Pressing. The inside pocket, and the square stiff shape in it that she'd seen him press in the red on the night he came. He didn't seem to know he was doing it. She did. She knew more than that. She'd known it since the bottom of the Well in April: the whole of the year at home, the parts she'd lived and the parts she'd been carried through, every room he'd been in with her and some he'd been in without her. She knew what he'd done and what he hadn't. So did he. It was sitting on the bench between them in the hand's width of space, and neither of them was going to pick it up." },
      { choose: [
        { t: "Keep it on, then. If you're cold, you're cold.", notes: 3, flag: 'eqx-mark-coat', then: [
          { n: "He looked at her. Something in his shoulders came down, a centimeter, the way a man's shoulders come down when he's been braced for a hand on his collar and it doesn't come." },
          { s: 'mark', f: 'sad', t: "...Thanks. That's. Yeah. Thanks, Sol. You're the first person who didn't try to help." }
        ] },
        { t: "What's in the pocket, Mark?", notes: 2, then: [
          { n: "His hand came off his chest so fast it was like the coat had burned him. He laughed. It was a good laugh, a practiced one, the laugh from the Sigma kitchen at a party, and it didn't reach anywhere near his eyes." },
          { s: 'mark', f: 'neutral', t: "Nothing. Pocket stuff. Receipts. A guitar pick. You know. Guy stuff." },
          { n: "He rubbed the back of his neck. He didn't look at her for a while after that, and she let him not look." }
        ] },
        { t: "(Put your hand on his sleeve. Feel how wet it is.)", notes: 3, then: [
          { n: "She put her hand on his forearm. The wool was soaked through. Cold. Not damp with sweat; cold, like something brought in from outside, and under her palm she felt him go very still, the way an animal goes still when you touch it and it hasn't decided yet whether to run." },
          { s: 'mark', f: 'surprised', t: "...See? It's not me. It's the coat. It just won't dry." }
        ] }
      ] },
      { n: "He played for a while after that. Nothing she knew. The long careful thing again, and then other things, scraps of songs from home, a jingle from a cereal ad, the Sigma Chi fight song played very slowly as a lament, which made her laugh before she could stop it, and he grinned at the keys without looking at her and played it slower." },
      { s: 'mark', f: 'neutral', t: "Nobody here knows me. You get that? I sit here and play and people stop and nobody knows who I am. Nobody's heard anything about me. Nobody's going to post anything. I'm the guy at the piano. That's my whole thing here. The guy at the piano with the coat." },
      { s: 'mark', f: 'neutral', t: "At home I walk into a room and the room already has an opinion. You know? You know. You of all people." },
      { s: 'mark', f: 'serious', t: "Here the room's just a room." },
      { n: "His hands rested on the keys without pressing them. The gold light had moved up the wall while they sat, and the bars of it lay across the piano now, and across his wet sleeves, and across the painted seagulls, which grinned in it like idiots." },
      { choose: [
        { t: "I know. It's the first time for me too.", notes: 3, then: [
          { s: 'mark', f: 'neutral', t: "Yeah? Yeah. I figured. You were always so good at it. The room. You always knew exactly what the room wanted you to be." },
          { s: 'mark', f: 'sad', t: "...Sorry. That came out like a compliment. I don't think it is one." }
        ] },
        { t: "Rooms here have opinions too. They just don't say them yet.", notes: 3, then: [
          { n: "He turned his head and looked at her, properly, for the first time since she'd sat down. The smile went away. What was under it was younger and a great deal more tired." },
          { s: 'mark', f: 'serious', t: "...Yeah. Okay. Yeah. I'm starting to get that." }
        ] },
        { t: "(Don't answer. Play the four notes for him.)", notes: 2, then: [
          { n: "She reached past him and played the four notes. Up, and up, and over, and down. And stopped on the chord, where he always stopped. She left it hanging there. He sat and listened to it ring out in the hall until the hum of the station took it." },
          { s: 'mark', f: 'neutral', t: "...You're doing that on purpose." },
          { s: 'solar', f: 'neutral', t: "It's yours to finish." }
        ] }
      ] },
      { n: "He asked about Haechan once. Not straight. He came at it the way you'd come at a dog you used to own and weren't sure would know you, sideways, palm out." },
      { s: 'mark', f: 'neutral', t: "Is he... how's... Hyuck. Is he good? He looks good. He looks like he sleeps. He never used to sleep." },
      { choose: [
        { t: "He's good. He's here. He sleeps.", notes: 2, then: [
          { s: 'mark', f: 'neutral', t: "Good. Good. That's good. That's all I. Good." }
        ] },
        { t: "Ask him yourself.", notes: 3, then: [
          { n: "Mark laughed, a short breath through his nose, and rubbed the back of his neck, and didn't say anything at all. It was the most honest thing he'd done all evening." }
        ] }
      ] },
      { place: 'Port Island Station · Concourse', time: 'Night', bg: 'portisland-station-night', music: 'eerie', soft: true },
      { n: "When the concourse lights came up white for the night trains, he closed the lid over the keys, gently, the way you'd close a book someone else was still reading, and they walked out together toward the bridge, because it was dark and the rule was twos." },
      { s: 'mark', f: 'neutral', t: "Oh. Weird thing. Tell me if this is a weird thing." },
      { s: 'mark', f: 'neutral', t: "Hanni says the other night, on the roof, on your guys' rota thing, in the red, she heard it again. The four notes. From over here. Twelve-oh-something. Across the water. Same as the first night." },
      { s: 'mark', f: 'serious', t: "I was asleep. In the guesthouse. Jungwon checked. Hanni made him. He opened my door at twelve-ten and I was asleep in the coat on top of the covers with my shoes on. He said I was snoring." },
      { s: 'mark', f: 'neutral', t: "So somebody else is playing my four notes. In the middle of the night. At my piano. Who does that? Who even knows them? I never wrote them down. You're the only person in two worlds who ever heard them enough to know them." },
      { n: "He said it lightly. It wasn't light. They were halfway across the bridge by then, and the water under it was black and very still, and from somewhere behind them, from the dark station, there was no sound at all." },
      { n: "Solar thought of a voice at a door in April, saying a dead wife's pet name. She thought of the first rule of the red hour, the one Mitsuru had written on the whiteboard in red marker. *It's only me.* Things in this town that knew how to sound like the people you missed." },
      { s: 'solar', f: 'serious', t: "If you hear them. At night. Don't go and look." },
      { s: 'mark', f: 'neutral', t: "...Yeah. Okay. I wasn't going to. I was totally going to." },
      { n: "At the guesthouse gate he stopped and turned, hands deep in the pockets of the coat, and the security light came on over him and lit the wool up wet and dark and glittering. For a second, she'd have sworn, there was something white in the creases of his shoulders again. Then he moved, and there wasn't." },
      { ifEvent: 'eqx-last-grain', then: [
        { s: 'mark', f: 'sad', t: "...I was at that table. Monday. At the boarding house. He was across from me. He passed me the pickles without me asking, he just knew I wanted them, and I said thanks, and he did this little salute with his chopsticks." },
        { s: 'mark', f: 'neutral', t: "I'm not going back for supper. I keep saying that. And then she asks so nicely." }
      ], else: [
        { s: 'mark', f: 'neutral', t: "Oh, and the lady at the boarding house says I'm welcome for supper any night. Mrs. Oka. I went twice. She's so nice. She just says *come in, there's always enough*, and you're sitting down before you've decided." },
        { s: 'mark', f: 'neutral', t: "I've never been good at saying no to someone who asks nicely. Ask literally anybody." }
      ] },
      { n: "He rubbed the back of his neck, and smiled the easy smile, and went in, and she stood at the gate for a while after the door had shut and the security light had clicked off, and thought about rooms that had opinions and didn't say them, and how you never heard them say it, and how that wasn't the same thing as their not having said it." }
    ] }
  ]
});
