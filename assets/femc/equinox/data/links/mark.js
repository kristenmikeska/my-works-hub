/* Persona 3: Equinox · Mark Lee · The Magician. Link data (femc-equinox-game.html). Format: link fields in
   assets/femc/game/core.js ("Links" header), scene lines in assets/femc/game/scene.js.
   Written: rank 1 (after 7/1: he came through on 6/30 in the red, story-act2 'eqx-piano'; his home is the seagull piano at
   Port Island Station on Monday, Wednesday, Friday and Saturday evenings, so 7/2 at the earliest). Ranks 4–10 still to
   write (see "Written" below). Shape: the stub fields from assets/femc/equinox/data/links.js.
   Shared memory: Solstice's Mark link (the station piano, the four notes and the fifth he can't find; "Sol", which she lets
   him keep; his tell: he overplays casual and rubs the back of his neck; no 'happy' portrait, so his smiles are neutral) and
   the Runners epilogue. Solar remembers all of Runners now; so does he. Fence (plan §0 rule 7): Mark is complicated, never a
   villain or a hero; nothing here says what he did or didn't do at home, only that both of them know. The coat and the
   square stiff thing in its inside left pocket stay unnamed (never opened, on any route).
   The hook: the coat he won't take off in July, and the four notes heard from the station in the red on a night he was
   asleep in the guesthouse.
   Reads: eqx-mark-fifth (story-act2 6/30: Solar played the fifth note) and ifEvent eqx-last-grain (7/27 morning).
   Flags this file sets: eqx-mark-coat (Solar doesn't ask him to take the coat off). Nothing reads it yet.
   Written: ranks 1–3 (Nov 16). Ranks 4–10 still to write.
   Rank 2 (after 8/2, summer break, a Monday; the seagull piano in the evening, then the Port Island sea wall at night):
   *Chopsticks* with the fist-bump boy, who calls him Kōto-san; the boy's grandmother sends him to "the lady by the river";
   Nozomi's wake (7/31) and the crematorium yes ("I always say yes"); Haechan came by Thursday ("your left hand's lazy");
   he went to look on 7/30 in the red, alone: the concourse coffins turned to face the piano, lid up, bench pushed back
   for someone bigger, the keys floured with too-long prints, the chord key still going down; he nearly sat and finished
   the song for it "because they'd asked"; Koromaru's bark across the water sent him running. Flour still in the key gaps.
   The guitar pick from the outside pocket (rank 1's lie half true). Flags: eqx-mark-keys-wiped (Solar wipes the gaps) |
   eqx-mark-told (they'll tell Mitsuru together), eqx-mark-pick (she keeps the pick in her phone case).
   Rank 3 (after 9/29, a Wednesday; post-equinox; the lid down at the station, a napkin note, then the guesthouse lobby's
   upright, then its front steps): the coat dried on the bridge on 9/23 ("it stopped snowing behind me"); Mrs. Oka asked
   him on 9/25 to play every night for the three fathers in the boarding house's front room (her late husband's upright,
   kept in tune; Mr. Kim's drama theme, Taejoon on the stairs, Jaesang's door left open; she hums his nameless piece);
   ifEvent eqx-empty-chair (until the fathers moved out); she offered him the little room with the round window ("a house
   should have music in it"); he said he'd think about it, the first time he's ever not said yes. His ask (§9 Runners:
   "don't go back to being talked about"): tally asks.mark yes (+cakes) | hidden "Stay. Please." eqx-asked-mark (+asked,
   +cakes, asks.mark yes) | no | choose (+choose). Jungwon walks her home (Mitsuru's laminated diagram). Reads
   eqx-mark-pick. "Keep coming on Wednesdays" is the small keep-him hint (§14: Mark is a possible 1/20 kept death only
   if asks.mark = yes and unreached; nothing here decides it, nothing marks the yes).
   Note: rank 2 shows the coat wet (it dries 9/23 per rank 3); a rank 2 played after 9/23 doesn't branch on it. */
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
    ] },
    { after: '8/2', title: '2: chopsticks', place: 'Port Island Station · Central Concourse', time: 'Evening', music: 'mystery', scene: [
      { bg: 'station-concourse-evening' },
      { n: "August had got into the station and wouldn't leave. The big west windows took the evening sun and held it, and the concourse smelled of hot glass and floor polish and the sweet burnt sugar of the bakery stand's last batch of taiyaki, and the cicadas outside were so loud they came through the doors every time the doors opened, a wall of noise that walked in with the commuters and stopped dead on the tiles." },
      { n: "Summer break had changed the crowd. Fewer briefcases, more children. Kids in sun hats dragging their grandmothers toward the beach line, boys with nets over their shoulders, a whole swim club in matching towels eating ice lollies in a line on the floor by the pillar like birds on a wire." },
      { n: "And at the piano with the seagulls, two people." },
      { n: "Mark, in the coat. The coat in August, buttoned to the throat, dark at the shoulders, a damp heavy wool that had no business in the same building as an ice lolly. And beside him on the bench, kneeling up on it to reach, the little boy from July, the fist-bump boy, in a yellow T-shirt with a dinosaur on it, playing *Chopsticks* with two fingers, very loudly, with his tongue between his teeth." },
      { n: "Mark was playing the bottom half. Big, ridiculous, oompah chords, a whole brass band under the boy's two fingers, and every time the boy hit a wrong note Mark made the left hand go wrong too, on purpose, to match, so that the whole thing lurched together like two drunk men walking home arm in arm, and the boy laughed so hard he had to stop." },
      { n: "On the bench by the pillar a tiny old woman in a sun visor sat fanning herself with a train timetable, watching them both with an expression of enormous, patient pride." },
      { choose: [
        { t: "(Sit on the other end and take the top half.)", notes: 3, then: [
          { n: "She sat down on the boy's other side and took the top of the keyboard, the high silly octave, and played the tune over his tune, and the boy looked up at her with his mouth open as if a second adult who would do this was beyond anything he'd been promised. Three of them, then. Six hands, more or less. The swim club turned round on the floor to look." },
          { n: "They ended it all together on a chord that wasn't any chord, and the swim club clapped with their lollies in their mouths, and the boy stood up on the bench and bowed, and Mark bowed sitting down, and over the boy's head his eyes met Solar's and something in them was so plain and so pleased that she had to look at the keys." }
        ] },
        { t: "You're good with him.", notes: 2, then: [
          { s: 'mark', f: 'neutral', t: "I'm huge here. In the under-ten demographic. I'm basically a celebrity. He brings his friends." },
          { s: 'mark', f: 'flustered', t: "...He doesn't bring his friends. He brings his grandma. But I'm working on it." }
        ] },
        { t: "(Stand and listen. Don't interrupt.)", notes: 3, then: [
          { n: "She didn't interrupt. She stood by the pillar with the grandmother, who looked up at her and nodded once, the way old women nod at other women who have also come to watch a boy do something, and they listened together to the worst *Chopsticks* ever played in a train station, all the way through, twice." }
        ] }
      ] },
      { n: "The boy had to go. His grandmother said so, getting up with a small sound, folding her timetable. He held his fist out to Mark without being asked, and Mark bumped it, solemnly, and the boy said something fast and delighted in Japanese and pointed at the coat, and ran." },
      { s: 'mark', f: 'neutral', t: "What'd he say? He says that every time. I've been nodding. I've been nodding for a month." },
      { s: 'solar', f: 'neutral', t: "He called you Kōto-san." },
      { s: 'mark', f: 'surprised', t: "Kōto-san." },
      { s: 'solar', f: 'neutral', t: "Mr. Coat." },
      { n: "Mark looked at the place the boy had gone. Then he put his face in his hands and laughed into them, really laughed, with his shoulders, the first time she'd heard that laugh since the Sigma kitchen in another life and a different coat, and when he took his hands away his eyes were wet at the corners and he was still grinning." },
      { s: 'mark', f: 'neutral', t: "That's it. That's my name now. I'm never answering to anything else. Mark's done. Mark had a good run." },
      { n: "The grandmother had stopped on her way past, with the boy tugging at her hand. She bowed to Mark, and said something to Solar, slowly and kindly, the way you'd speak to a foreign girl who might need it slow, and patted Mark's damp sleeve twice, and went." },
      { s: 'mark', f: 'neutral', t: "And what'd *she* say? She always says something. I always say *arigatō* and hope." },
      { n: "Solar watched the visor go away through the crowd, toward the river exit, not the beach one." },
      { s: 'solar', f: 'neutral', t: "She says you're too thin. She says there's a lady by the river who feeds everyone, and you should go. She says there's always enough." },
      { n: "Mark's smile stayed exactly where it was. That was the thing about his smile; it could stay where it was while everything behind it went somewhere else." },
      { s: 'mark', f: 'neutral', t: "Yeah. Yeah, I know the lady." },

      { n: "He played something for a while after that with no tune in it. Just chords, moving, the left hand pacing. He'd been to the wake. She knew that; she'd seen him there, at the back of the funeral hall in the coat, standing, because there'd been chairs and he hadn't taken one." },
      { s: 'mark', f: 'neutral', t: "His mom asked me to come to the, the after part. The crematorium. She came down the line shaking everybody's hand and she got to me and she held on and she said *you were his friend from the table, please come, he'd want his friends.*" },
      { s: 'mark', f: 'sad', t: "I sat across from him like twice. He passed me pickles. That's the whole friendship. That's the entire thing." },
      { s: 'mark', f: 'neutral', t: "And I said yes. Obviously. I went. I stood there in the coat while they did the bones with the chopsticks and I didn't know any of the words and his mom kept looking at me like I was proof he had people." },
      { s: 'mark', f: 'serious', t: "I always say yes, Sol. Somebody asks me nicely and my mouth's already doing it." },
      { choose: [
        { t: "That was kind. Going.", notes: 2, then: [
          { s: 'mark', f: 'neutral', t: "Was it? It didn't feel kind. It felt like the only thing my body knew how to do in that room." },
          { s: 'mark', f: 'neutral', t: "...Maybe that's what kind is, for some people. I wouldn't know. I'm new at it." }
        ] },
        { t: "You're allowed to say no to people, you know.", notes: 3, then: [
          { n: "He turned his head and looked at her as if she'd told him he was allowed to breathe underwater: a nice idea, generously offered, wildly impractical." },
          { s: 'mark', f: 'neutral', t: "Say it again slower. I'm writing it down." },
          { s: 'mark', f: 'sad', t: "...No, I know. I know I am. I just never found out what happens after. Every time I almost do, I picture the face. Their face. And then I'm saying yes." }
        ] },
        { t: "(Bump his shoulder with yours.)", notes: 3, then: [
          { n: "She bumped his shoulder with hers. The wool was wet against her bare arm, cold as a cellar step, and he swayed with it and swayed back and bumped her too, gently, and left his shoulder there afterward, against hers, a hand's width closed to nothing." }
        ] }
      ] },
      { s: 'mark', f: 'neutral', t: "Hyuck came by, by the way. Thursday. Didn't say anything. Sat right there where you're sitting and listened to the whole long thing, start to finish, the one with no name, with his eyes shut." },
      { s: 'mark', f: 'neutral', t: "Then he got up and said *your left hand's lazy* and walked off." },
      { s: 'mark', f: 'flustered', t: "Which. It is. It's so lazy. He's right. He's always right about that kind of thing, it's so annoying." },
      { n: "He said it to the keys, and rubbed the back of his neck, and was smiling at them, a little, the way you'd smile at a letter you'd been afraid to open and had opened and found was only a letter." },

      { n: "Then he stopped smiling. He sat with his hands on his knees and looked at the seagulls painted on the front of the piano, the fat idiot gulls with their yellow feet, and when he spoke again his voice had gone quieter and quicker, the way people talk when they want to have said a thing more than they want to say it." },
      { s: 'mark', f: 'serious', t: "Okay. I have to tell you something and you're going to be mad." },
      { s: 'mark', f: 'serious', t: "I went and looked." },
      { n: "She didn't say anything. He didn't look at her." },
      { s: 'mark', f: 'neutral', t: "Friday. The thirtieth. I heard it from the guesthouse roof. The four notes. Twelve-oh-something, in the red, across the water, plain as anything. And I was. I was by myself, I know, I *know*, the rule, twos, Mitsuru's going to put me in a coffin herself." },
      { s: 'mark', f: 'neutral', t: "I just thought, it's my song. Somebody's playing my song. You'd go. Anybody would go." },
      { choose: [
        { t: "You went alone. In the red.", notes: 2, then: [
          { s: 'mark', f: 'sad', t: "Yeah. I know. I've been telling myself that all week in your voice, if it helps. It sounds exactly like that." }
        ] },
        { t: "What did you see?", notes: 3, then: [
          { n: "He looked at her then, quickly, the check-the-step look, and found her not angry, or not only, and something unknotted a little in his jaw." }
        ] },
        { t: "(Take hold of his wet sleeve and don't let go.)", notes: 3, then: [
          { n: "She took hold of his sleeve, the cold wool bunched in her fist, and held it, and didn't say anything. He looked down at her hand. He didn't pull away. He talked the rest of it to her hand." }
        ] }
      ] },
      { place: 'Port Island Station · Central Concourse', time: 'The Red Hour', bg: 'portisland-station-night', music: 'eerie', soft: true },
      // CG: eqx-floured-keys — a station concourse in deep red light, a chipped upright piano with painted seagulls, its lid up and its keys dusted white with long, too-long fingerprints, rows of black coffins on the floor all turned to face it like an audience.
      { n: "By the time he got there it had stopped. He told it like that, plainly, in order, the way you'd tell a policeman." },
      { n: "The concourse in the red. The big windows black and the light coming from nowhere, from the air itself, the color of the inside of an eyelid. The coffins where the commuters had been, standing up, dozens of them, the way they always stood in the red, only these weren't standing the way they'd been left. They'd turned. Every one. Shuffled round in the dark on their own somehow, so that they all faced the far end of the hall, the piano end, in rows, like chairs set out for a recital." },
      { n: "The piano lid was up. The bench was pushed back, a long way back from the keys, the way you'd push it for someone much bigger than you." },
      { n: "And the keys were white. Not their own white. Dusted. A fine pale powder lying over the whole keyboard like the first snow on a step, and in it, pressed into it, the prints of the hands that had played: ten of them, laid out exactly where the four notes would go, up, and up, and over, and down. And they were wrong. They were too long. Not fingertips. Something longer, and narrower at the ends, that had come down on the keys and pressed and lifted again, and left a dragged tail in the powder behind each one, like a nail." },
      { s: 'mark', f: 'serious', t: "And the last key was still going down. The chord one. The one I always stop on. It was going down, really slow, like somebody had just that second taken their hand off it, and the note was still in the hall, the very end of it." },
      { s: 'mark', f: 'serious', t: "And Sol. The really messed up part. Do you want the really messed up part?" },
      { s: 'mark', f: 'sad', t: "I almost sat down. I stood there in all those coffins and I thought, it'd be rude. Somebody came all this way to play my song and they couldn't finish it. And I know the fifth. Kind of. I could try. I had my hand out. I was going to sit down and finish it for them." },
      { s: 'mark', f: 'sad', t: "Because they'd asked. You know? It felt like being asked. Really nicely." },
      { n: "He'd run, in the end. He didn't know why. Koromaru had barked, he said, from somewhere far off over the water, once, the way he barked at the dorm door, and his legs had just gone. He'd run the whole bridge in the coat in the red with his lungs on fire and the gulls asleep on the rail, and not looked back once, and got into bed at the guesthouse in the coat and lain there with his eyes open till the hour broke." },

      { place: 'Port Island Station · Central Concourse', time: 'Evening', bg: 'station-concourse-evening', music: 'mystery', soft: true },
      { n: "The evening came back around them. The cicadas, the swim club, a train announcement in a woman's careful voice. The piano was only a piano. A chipped upright with stupid gulls on it in the gold light, its keys yellowed with forty years of commuters' hands." },
      { n: "Solar leaned over and looked at the keys. Properly, close up." },
      { n: "The station cleaners wiped them, she'd seen the woman do it, every night with a cloth and a spray bottle. They'd been wiped. They were clean. Except down in the cracks, in the hairline gaps between the white keys, where no cloth could get, there was still a line of it. Pale. Fine. A soft white seam between every note, like the flour on the dorm's inside door handle in April, in a house where nobody baked." },
      { choose: [
        { t: "(Wipe the cracks clean with the edge of your sleeve.)", notes: 3, flag: 'eqx-mark-keys-wiped', then: [
          { n: "She drew the edge of her sleeve down between the keys, one gap after another, all the way up the keyboard, slow and thorough, the way you'd clean a grave. The white came away on the cotton. It didn't smudge like dust. It held together, faintly, a little greasy, and smelled, when she lifted her wrist, of nothing at all, which was worse." },
          { n: "Mark watched her do it the whole way up. He didn't say anything. When she'd done the top note he reached over and pulled her sleeve down over the white mark on it, gently, so she wouldn't have to look at it, and held it there for a second." },
          { s: 'mark', f: 'neutral', t: "...Thanks. I couldn't touch it. I've sat here every day since and I couldn't touch it." }
        ] },
        { t: "We tell Mitsuru. Tonight. Both of us.", notes: 3, flag: 'eqx-mark-told', then: [
          { s: 'mark', f: 'flustered', t: "She's going to kill me." },
          { s: 'solar', f: 'neutral', t: "She's going to be very calm at you for a long time." },
          { s: 'mark', f: 'sad', t: "...That's so much worse. Okay. Yeah. Both of us. You talk first." },
          { n: "He said it like a man agreeing to the dentist, and his hand went flat on his chest, on the pocket, and pressed, and he didn't notice." }
        ] },
        { t: "(Press the chord key. See if it's warm.)", notes: 2, then: [
          { n: "She pressed the key. The note came out, thin and ordinary, a little flat. The ivory under her finger was warm. Not sun-warm. The sun had been on the other end of the hall all day. Warm the way a seat is warm when someone's only just got up from it." },
          { n: "She took her hand back. Mark had seen her face. He didn't ask." }
        ] }
      ] },

      { place: 'Port Island · Seaside Walk', time: 'Night', bg: 'port-island-seaside-park', music: 'tender', soft: true },
      { n: "They walked the long way after, along the sea wall, because the evening was too hot to go inside and neither of them wanted the bridge yet. The water was flat and black and full of the lights from the island, and somewhere out on it a boat was going home with a single green lamp at its mast, and the air smelled of salt and hot concrete and somebody's barbecue." },
      { n: "Mark walked on the sea side. She noticed that. He did it without thinking, the way he'd always done it on Marshall Street, putting himself between her and the traffic, and here there wasn't any traffic, only the drop to the water, and he did it anyway." },
      { s: 'mark', f: 'neutral', t: "Hey. Here. Hold out your hand." },
      { n: "He'd put his hand in the coat. Not the inside pocket. The outside one, the right-hand one, the ordinary one. He took something out and put it in her palm and closed her fingers over it." },
      { n: "A guitar pick. Tortoiseshell, worn thin and shiny at the tip from years of the same thumb, with a tiny nick out of one side." },
      { s: 'mark', f: 'neutral', t: "See? I told you. Pocket stuff. A guitar pick. I wasn't lying about everything." },
      { s: 'mark', f: 'neutral', t: "It's been in this pocket since. Since home. I don't even have a guitar here. I just keep reaching in and it's there." },
      { choose: [
        { t: "(Keep it. Put it in your phone case.)", notes: 3, flag: 'eqx-mark-pick', then: [
          { n: "She slid it into the back of her phone case, behind the card for the dorm door, where she'd feel it every time she picked the phone up. He watched her do it. He rubbed the back of his neck and looked out at the boat with the green light." },
          { s: 'mark', f: 'neutral', t: "Cool. Cool. Now you have to come back Monday. Collateral. That's how picks work, I don't make the rules." }
        ] },
        { t: "Hold on to it. You'll play again.", notes: 2, then: [
          { n: "She opened his hand and put it back in. He looked at it lying there in his palm for a while, the way he'd looked at Haechan's hand on the night he came." },
          { s: 'mark', f: 'neutral', t: "...Yeah? Okay. Okay, I'll hold on to it. For when." },
          { n: "He didn't say *when what*. He put it back in the outside pocket, and buttoned the pocket, which she hadn't known had a button." }
        ] }
      ] },
      { n: "He talked about home a little, walking. Not the parts that mattered. The parts around them. The dining hall's waffle machine. The radiator in his room that clanked in the shape of a drum fill so regular he'd recorded it once. A professor who said *gentlemen* to a room with nine women in it." },
      { s: 'mark', f: 'neutral', t: "You know what I can't get used to here? Everybody asks so nicely. Have you noticed that? Nobody's mean. Not once. The konbini guy, the old ladies, the night guy at the guesthouse. Her. Everybody just asks you for things like they'd be so happy if you said yes." },
      { s: 'mark', f: 'neutral', t: "At home when somebody asks you something it's a test. There's always a right answer and a room full of people waiting to see if you know it." },
      { s: 'mark', f: 'serious', t: "Here it's not a test. And I keep passing it anyway. And I keep waiting for somebody to tell me what I won." },
      { n: "The boat with the green lamp had gone in behind the breakwater. The water where it had been was flat and black and very still, and in the stillness it held the lamps of the bridge, laid out on the surface in a long straight row like places set at a table for people who hadn't come in yet." },
      { n: "At the dorm gate he stopped. He'd walked her all the way. He wasn't supposed to: the rule was twos, and walking her home meant walking back alone, and they both knew it, and he'd done it anyway, the way he did everything anyone needed, without being asked." },
      { s: 'mark', f: 'neutral', t: "Monday? Same piano. I'll get the fifth by Monday. I won't get the fifth by Monday." },
      { n: "He went. She stood at the gate and watched the coat go down the hill under the streetlights, dark wool, wet shoulders, light, shadow, light, until the bend in the road took it, and found she had her hand in her pocket on the back of her phone, pressing it, flat, without meaning to, the way he pressed his coat." }
    ] },
    { after: '9/29', title: '3: dry', place: 'Port Island Station · Central Concourse', time: 'Evening', music: 'mystery', scene: [
      { bg: 'station-concourse-evening' },
      { n: "The piano lid was down." },
      { n: "Solar saw it from the far end of the concourse and stopped walking, and somebody behind her with a suitcase said *sumimasen* and went round her, and she stood where she'd stopped with the commuters parting either side of her like water round a post and looked at it: the chipped upright with the fat painted gulls, at the far end of the hall in the last thin light of a September evening, with its lid shut over the keys and nobody on the bench." },
      { n: "It was Wednesday. He'd never once not been there on a Wednesday." },
      { n: "The light was different now. Autumn had come in the week since the bridge without anyone letting it, the way it does in port towns, all at once, on a wind. The sun went down earlier and came in lower and colder through the big windows, the bars of it lying long and pale across the tiles, and people walked through them in jackets. Nobody was too hot any more. Nobody in the whole station was wearing anything that looked strange." },
      { n: "On the piano's music stand, folded in half and propped there, somebody had left a paper napkin from the bakery stand. On it, in blue biro, in handwriting she knew from a hundred notes passed under a hundred tables in another life:" },
      { n: "*guesthouse. lobby. it's in tune there. sorry. — M*" },
      { n: "And under it, smaller, as if added after, with the pen pressed harder:" },
      { n: "*don't come alone*" },
      { choose: [
        { t: "(Text Mark that you're on your way.)", notes: 2, then: [
          { phone: [
            { from: 'solar', t: "saw your napkin. coming now" },
            { from: 'mark', t: "who with" },
            { from: 'solar', t: "the 6:10 train. it's full of people" },
            { from: 'mark', t: "sol" },
            { from: 'mark', t: "ok. text me at every stop. i'll be by the door" }
          ], contact: 'mark' }
        ] },
        { t: "(Fold the napkin into your pocket and go.)", notes: 3, then: [
          { n: "She folded the napkin twice and put it in her blazer pocket, against the phone, and went for the bridge train. She didn't go alone. She caught Akihiko coming off the island from the boxing club with his bag on his shoulder and told him where she was going, and he changed direction without a word, the way he did everything now, and walked half a step behind her all the way, on the water side." }
        ] }
      ] },

      { place: 'Kirijo Guesthouse · Lobby', time: 'Evening', bg: 'kirijo-guesthouse-lobby', music: 'tender', soft: true },
      { n: "The guesthouse lobby was a long, low, wood-paneled room that smelled of the radiator coming on for the first time that year, hot dust and old varnish, and of tatami from the corridor, and faintly, always, of the green tea that the front desk kept warm in a big steel urn for anyone who wanted it. There'd been a night man at that desk once. There wasn't now. Kirijo had put a bell there instead, and a laminated card with a number on it, and nobody rang the bell." },
      { n: "The piano stood against the far wall under a print of Mount Fuji gone blue with sun. It was an old black upright with brass candle holders on the front that nobody had put candles in for fifty years. Mark was playing it." },
      { n: "He was playing the long thing. The one with no name. And she'd been right in July: the lobby piano was out of tune, a little, in a nice way, so that every so often a note came out bent, like a word said with an accent, and he leaned into those, let them ring, the way you'd let a friend finish a sentence wrong." },
      { n: "He was in the coat." },
      { n: "But the coat was dry." },
      { n: "She saw it from the doorway, before he'd looked up, and it stopped her the way the closed lid had stopped her. The dark wool lay flat and matte and ordinary over his shoulders. No damp at the collar. No darkness at the cuffs. It hung on him the way a coat hangs on someone in a heated room in late September, warm and dry and a little too heavy, and the wet-wool smell, the winter-street smell that had walked into every room with him since June, was gone." },
      { n: "He finished. He looked up. He did the smile." },
      { s: 'mark', f: 'neutral', t: "Hey, Sol. Sorry about the napkin. I couldn't do the station. Not yet. It's too, you know. Big. Too much glass." },
      { ifFlag: 'eqx-mark-pick', then: [
        { n: "His eyes went to her hand on the strap of her bag, and to the phone in it, and to the back of the phone case, where the edge of something tortoiseshell showed if you knew to look. Something in his face sat down." }
      ] },
      { choose: [
        { t: "Your coat's dry.", notes: 3, then: [
          { n: "He looked down at himself as if he hadn't noticed, which he had; he'd noticed before anyone, she could see it in how fast he looked away." }
        ] },
        { t: "(Sit down next to him on the bench.)", notes: 3, then: [
          { n: "She sat down next to him. The bench was narrower than the station one, and their shoulders touched, and she felt it through her blazer: dry. Warm, even. The wool just wool. He felt her feel it." }
        ] },
        { t: "Are you okay?", notes: 2, then: [
          { s: 'mark', f: 'neutral', t: "Yeah. Totally. No. Yeah. Mostly. Ask me a different one." }
        ] }
      ] },
      { s: 'mark', f: 'serious', t: "It dried. On the bridge. On the twenty-third." },
      { s: 'mark', f: 'serious', t: "I was walking at the back with Jaemin, and the red came, in the daytime, and everything started happening up at the front, and I couldn't see properly, people were running both ways. And I just stood there. And I felt it go. All at once. Like when you've been holding your breath underwater and you come up." },
      { s: 'mark', f: 'sad', t: "It stopped snowing behind me. That's what it felt like. Like whatever's been walking behind me since December finally caught up. Like it didn't need to follow me anymore because it was already here." },
      { s: 'mark', f: 'sad', t: "I've been cold every single day since I got here. Every day. And I'd give anything to be cold again. Isn't that so stupid? I hate that it's dry. I hate it so much." },
      { n: "His hand had gone to his chest. Flat. The inside left pocket. He pressed it, and under his palm she saw the outline of the square stiff thing, and it was the only thing about the coat that hadn't changed. It still didn't look like it had ever been opened." },
      { choose: [
        { t: "It's not stupid.", notes: 3, then: [
          { s: 'mark', f: 'neutral', t: "It's a little stupid." },
          { s: 'solar', f: 'neutral', t: "It's a little stupid." },
          { n: "He laughed, through his nose, short, and it was a real one, and it seemed to surprise him." }
        ] },
        { t: "What did you see, on the bridge?", notes: 2, then: [
          { n: "He was quiet for a long time. His hands lay on the keys without pressing them." },
          { s: 'mark', f: 'serious', t: "Not much. That's the thing. I was too far back. I saw a man fold up. Like laundry. I heard Mitsuru say a name I didn't know in a voice I didn't know she had." },
          { s: 'mark', f: 'sad', t: "And I didn't run toward it. Everybody else ran toward it. Hyuck ran toward it. I stood there with my hand on my chest." }
        ] },
        { t: "(Take his hand off his chest. Put it on the keys.)", notes: 3, then: [
          { n: "She took his wrist, lightly, the way you'd lift a sleeping cat's paw off something it shouldn't be lying on, and moved his hand off the pocket and set it down on the keys. Middle C. His fingers found the shape by themselves, the way fingers do." },
          { s: 'mark', f: 'neutral', t: "...Sneaky." }
        ] }
      ] },

      { n: "He played while he told her the next part, because it was easier, she thought, to say it over something. The long thing again, quietly, with the bent notes." },
      { s: 'mark', f: 'neutral', t: "She came here. The Saturday. The twenty-fifth. Mrs. Oka. With a pot of something and a cloth over it, and she stood right where you're standing, and she said *you're the one who plays.*" },
      { s: 'mark', f: 'neutral', t: "She said the fathers can't sleep. Your dad, and the strangers dad, and Mr. Kim. She said they sit up all night in the front room with the lamp on and none of them will go to bed first. She said, *would you come and play for them, child. Something with no words in it. Every night. It would help so much.*" },
      { s: 'mark', f: 'sad', t: "So I said yes. You knew I said yes. You knew before I said it." },
      { n: "There was a piano in the boarding house's front room, he said. An old upright, older than this one, with a fringed cloth on top and a vase of chrysanthemums on the cloth that she changed every morning. Her late husband's, she'd said. Nobody had played it since. It was perfectly in tune. Somebody had kept it in tune for years, for nobody." },
      { ifEvent: 'eqx-empty-chair', then: [
        { s: 'mark', f: 'neutral', t: "Every night. Till they moved them into your dorm. I went every night and played till they fell asleep in the chairs." }
      ], else: [
        { s: 'mark', f: 'neutral', t: "Every night. Since. I go at nine and I play till they fall asleep in the chairs. They always fall asleep in the chairs. Nobody goes up first." }
      ] },
      { s: 'mark', f: 'neutral', t: "Mr. Kim asks for stuff. He asks for the theme from a drama I've never heard of and then he hums it at me and I figure it out and he cries a little and says it needs more salt. Your strangers dad sits on the stairs. Doesn't come in. Just sits on the stairs in the dark where he can hear." },
      { s: 'mark', f: 'neutral', t: "Your dad doesn't come down at all. But he leaves his door open. I can see it from the bench. Open, the whole time I play, and then when I stop, after a minute, it closes. Really quietly." },
      { n: "Solar sat with that. Her father, upstairs in a borrowed room in a borrowed house, with the door open, listening to Mark Lee play the piano in the dark. She didn't know what to do with it. She held it the way you'd hold a hot cup with no handle, shifting it from hand to hand." },
      { s: 'mark', f: 'neutral', t: "And she sits with me. Mrs. Oka. While I play. She sits on the end of the bench, right where you are, with her hands in her lap in the gloves, and she hums along. She knows all of it. She hums the long thing. I never wrote it down." },
      { s: 'mark', f: 'neutral', t: "She's so nice, Sol. She brings me tea on a saucer. She calls me *child*. Nobody's called me anything like that since I was a kid." },
      { n: "He'd said it so warmly. The long thing went on under his hands, and for a moment one of the bent notes came out more bent than the rest, a whole half step wrong, and he flinched, very slightly, and played on." },

      { s: 'mark', f: 'serious', t: "She asked me to stay." },
      { s: 'mark', f: 'neutral', t: "Not for supper. *Stay.* There's a room. The little one at the top of the stairs, with the round window. She showed me. There's a quilt on the bed with cranes on it. She said a house should have music in it. She said I'd never have to go back out into the cold." },
      { s: 'mark', f: 'neutral', t: "I said I'd think about it. Sol, I never say I'll think about it. I've never said that to anybody in my life. I say yes. I always say yes. And I stood there in her hall and I heard myself say *I'll think about it* and she just smiled and said *of course, child, take all the time you want*, and she touched my coat. Right here. On the shoulder. And it was dry under her hand." },
      { n: "He stopped playing. His hands came off the keys and lay in his lap. The radiator ticked. Somewhere upstairs in the guesthouse a door opened and shut and somebody laughed, Jay, probably, and a television said something about the weather in Osaka." },
      { s: 'mark', f: 'serious', t: "I don't want her room. I don't know why I don't want it. It's a nice room." },
      { s: 'mark', f: 'neutral', t: "But I want the rest. I want here. I want to be the guy at the piano with the coat. Kōto-san. I want to be the guy a kid fist-bumps and a grandma tells to eat more and nobody, *nobody*, has an opinion about." },
      { s: 'mark', f: 'sad', t: "Because at home there's a room. You know there is. You know exactly which room. And everybody in it already decided about me, and they're right, and they're also not right, and I don't get to explain the difference, I never get to explain the difference. I walk in and the room has already finished talking." },
      { n: "He turned on the bench to face her. All the way. The easy smile was gone and he hadn't put anything on over where it had been; it was just his face, younger than the coat, older than the boy at the piano in July, tired in a way that went down past sleep." },
      { s: 'mark', f: 'serious', t: "Tell me I don't have to go back to it. Just say it. *You can stay, Mark.* You're the only one who knows what I'd be staying away from. You're the only one whose saying it would count." },
      { choose: [
        { t: "You can stay, Mark. Be Kōto-san. Nobody here's ever going to know.", notes: 3, tally: { cakes: 1, 'asks.mark': 'yes' }, then: [
          { n: "She said it. It was easy. It came out warm and certain and exactly the shape of what he'd asked for, and she watched it go into him." },
          { n: "He breathed out. All of it. His shoulders came down, and his head went down with them, and he sat for a moment with his forehead nearly on the closed fallboard, and then he reached up and undid the top button of the coat. Just the top one. The first time she'd ever seen any button on it undone. Under it was the collar of a gray T-shirt, soft with washing, and the line of his throat, and nothing else." },
          { s: 'mark', f: 'neutral', t: "...Okay. Kōto-san. Okay. I can do that. I'm good at that." },
          { n: "He lifted the fallboard and played the four notes, light, up and up and over and down, and stopped on the chord, and didn't seem to mind stopping there, for the first time. And Solar, beside him, felt something sit down in her chest, heavy and warm and sweet, like a meal she hadn't been hungry for, and for no reason she could have named she wanted, very badly, to look behind her at the lobby door. She didn't. There was nobody there." }
        ] },
        { t: "Stay. Please. Somebody has to play the four notes.", notes: 3, tally: { asked: 1, cakes: 1, 'asks.mark': 'yes' }, flag: 'eqx-asked-mark', then: [
          { n: "It came out of her before she'd decided anything, and it wasn't what he'd asked. He'd asked for permission. She'd given him a reason." },
          { s: 'mark', f: 'surprised', t: "...You want me to?" },
          { s: 'mark', f: 'neutral', t: "Okay. Wow. Okay. Nobody's ever. Okay." },
          { n: "He laughed, wet, and rubbed the back of his neck so hard it went red, and then he took her hand off the bench between them and held it, tight, the way you'd hold a rail on a moving train, and she felt his grip close, warm and certain, and felt something small and warm go out of her as it did, the way breath goes out on a cold step, and not come back. She told herself it was the radiator." }
        ] },
        { t: "You'll go back, Mark. We all do. And you'll walk into that room.", notes: 2, tally: { 'asks.mark': 'no' }, then: [
          { n: "He looked at her for a long moment. Then he nodded. Slowly. And did the smile, the easy one, back on over the top of everything, smooth as a jacket." },
          { s: 'mark', f: 'neutral', t: "Yeah. No. I know. I know I will. I just wanted to hear what it sounded like." },
          { s: 'mark', f: 'sad', t: "...It sounded like you. That's fair. That's always been fair." },
          { n: "He did the top button up again, though it was already done; he pressed it, to check, and kept his fingers there a while." }
        ] },
        { t: "Whether you stay is yours, Mark. Not hers. Not mine. Yours.", notes: 2, tally: { choose: 1, 'asks.mark': 'choose' }, then: [
          { n: "He didn't say anything for a long time. She watched it go in and not be what he'd wanted, and watched him turn it over anyway, slowly, like a thing found in a pocket that he didn't remember putting there." },
          { s: 'mark', f: 'neutral', t: "...That's so much harder, Sol. You know that? That's so much harder than if you'd just said it." },
          { s: 'solar', f: 'neutral', t: "I know." },
          { s: 'mark', f: 'serious', t: "Mine. Okay. Nobody's ever handed me one of those. I don't know where you put it." },
          { n: "He turned back to the piano. He played the four notes, up and up and over and down, and stopped on the chord, and sat, and then, very carefully, as if the key might bite, he reached for the fifth. He missed it. The one next to it, as always. But he'd reached, and he left his hand there on the wrong key afterward, pressing it, until the note was all the way gone." }
        ] }
      ] },

      { place: 'Kirijo Guesthouse · Front Steps', time: 'Night', bg: 'kirijo-guesthouse-night', music: 'eerie', soft: true },
      { n: "It was full dark when she left. The guesthouse's security light came on over the steps, and the evening had gone cold in the way September evenings do here, all at once, with a smell of rain off the bay that hadn't arrived yet. She could see her breath, nearly." },
      { n: "Mark came down the steps with her and stopped on the last one, and called up the stairwell behind him without turning round, and after a moment Jungwon came down in a cardigan with a pencil still behind his ear, and looked at the two of them, and understood at once, and went to get his shoes." },
      { s: 'mark', f: 'neutral', t: "He'll walk you. And I'll walk him back to the corner and he'll walk me back here. It's a whole system. Mitsuru drew us a diagram." },
      { s: 'jungwon', f: 'neutral', t: "She did draw a diagram. It has arrows. I've laminated it." },
      { n: "Mark laughed. He stood on the bottom step with his hands in the coat pockets, the outside ones, and his breath showed in the cold for the first time since he'd come, and the coat over his shoulders was dry and dark and still, and there was no snow on it and no wet and no smell of winter, only the smell of the lobby radiator and, faintly, sweetly, under it, something like steamed rice." },
      { s: 'mark', f: 'neutral', t: "Wednesdays. Okay? Keep coming on Wednesdays. Station or here. It's the only day of the week I'm sure what day it is." },
      { n: "She said she would. He nodded, and rubbed the back of his neck, and went in. Through the glass of the lobby door she watched him cross to the piano and sit, and lift the fallboard, and not play; just sit, with his hands in his lap and his back to the door, in the coat, under the blue Mount Fuji, while the bell on the empty desk sat waiting for somebody to ring it." },
      { n: "Jungwon walked on her left, on the road side, the whole way, and didn't ask her anything, and at the dorm gate said only, in Korean, quietly, *I don't think he has ever once said no to anyone. Not to me either. I keep waiting to find out what it would cost him*, and then, in Japanese, *good night*, and went back to walk Mark's half of the system." }
    ] }
  ]
});
