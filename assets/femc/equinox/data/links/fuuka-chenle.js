/* Persona 3: Equinox · Fuuka & Chenle · II The Priestess (a duo link: the two navigators). Link data
   (femc-equinox-game.html). Format: link fields in assets/femc/game/core.js ("Links" header), scene lines in
   assets/femc/game/scene.js.
   Rank 1 (after 7/16: Chenle came through on 7/13 on the thirteenth call, story-act2 'eqx-thirteenth'; their home
   is the dorm's command room on Monday, Wednesday and Friday evenings. Gated to 7/16, the Friday, not 7/14: the scene needs
   a red hour of practice listening after his arrival night). Ranks
   Shape: the stub fields from assets/femc/equinox/data/links.js (members / cast kept). Both speak in
   every rank.
   Shared memory: Solstice's Fuuka link (the dorm kitchen, "sorry", the radio from far away) and Chenle's (the Game Panic
   back row, always early, glasses pushed up with one finger, the grey hoodie, "back two steps", the pier in the cold he
   hates) and the Solstice dorm lobby, where he sat at the foot of the stairs and called the big turns with her. Since
   7/13 he hears her in his head "like a headset with the volume too low". Chenle navigates from his first block (7/26).
   The hook: two people who were each the only one who could hear, and now aren't. Chenle is making a callout map of the
   town; he hears something Fuuka doesn't.
   Reads: ifEvent eqx-third-hill (7/26: his first night navigating) and eqx-last-grain (7/27 morning).
   Flags this file sets: eqx-fc-map (Solar names a callout on Chenle's map). Nothing reads it yet.
   Written: ranks 1–3 (Nov 16 round 2). Ranks 4–10 still to write.
   Rank 2 (after 8/18, Wed, '2: quiet': the command room in August heat, then a blind walk down the dorm stairs and the
   third-floor hall, ending on the roof). The map's new layer: grey pencil "quiet places" (the bridge, the river path below
   the post office corner, and since 8/12 the end of the Port Island pier, where the fisherman Chenle called "the Whale"
   was). The boarding house: Chenle gets a headache listening at it ("a restaurant where everybody's talking at once");
   Fuuka can't hear it at all (keeps 8/25 and 10/9 compatible). Fuuka: Mitsuru now says "Chenle, confirm". Chenle's blind-
   walk drill (Yukari's pink sheep sleep mask, the spare headset); at the third-floor window, outside the red, Chenle hears
   something walking down the hill stop and then go away toward the water; Fuuka hears nothing; Koromaru growls (never hurt,
   never endangered). Fuuka: "I didn't know it was lonely... until there were two chairs" (the ask's seed). Reads ifEvent
   eqx-table-op (Fuuka counts the six parents in every night at twelve). Sets eqx-fc-grey (optional: the hill road shaded
   grey and reported to Mitsuru together).
   Rank 3 (after 10/8, Fri, '3: two chairs': the command room in October rain, then the Red Hour there). After the bridge:
   Fuuka sleeps sitting up in her chair, listens every night for the three mothers and can't hear them; Chenle's first home
   bleed (a door on the Second Hill's mud a week after the equinox, story-act4 11/3's narration) he could see and she
   couldn't; Akihiko touched it. Chenle's home: "the guy in the back row", the house talked about (Runners kept vague, his ask
   "don't go back to being talked about"). Fuuka's madeleines. The duo's ask: Fuuka asks Solar "Tell him to stay. He'd listen
   to you" (an echo of Mrs. Oka's own words), Chenle: "Tell me I'm allowed to stay in the chair." Records
   tally asks.fuuka-chenle (yes +cakes / choose +choose / no). The Red Hour: Solar listens on the old taped headset; both
   turn for "Here" at once. Reads ifEvent eqx-1023, eqx-fathers-go (he hears the mothers telling the tale), eqx-empty-chair
   (fathers in the dorm vs the boarding house). Sets eqx-fc-headset (optional: Solar keeps the old headset). Nothing reads
   the new flags yet. */
(window.FEMC_GAME_LINKS ||= []).push({
  id: 'fuuka-chenle', name: 'Fuuka & Chenle', short: 'Fuuka & Chenle', arcana: 'Priestess', numeral: 'II', from: 'Persona 3 · Runners', kind: 'group',
  world: 'R', romance: null, starts: '7/14', members: ['fuuka', 'chenle'], cast: { fuuka: 'Fuuka', chenle: 'Chenle' },
  home: { area: 'dorm', spot: 'Command Room', slot: 'evening', days: [1, 3, 5],
          hint: 'Monday, Wednesday and Friday evenings, up in the dorm’s command room, two navigators and a lot of screens.' },
  approach: "Up in the dorm's command room the big monitors are all showing the same hand-drawn map of Iwatodai, and two people are bent over it from either side of the desk, one in headphones and a cardigan, one in a grey hoodie with his glasses pushed up on his head, finishing each other's sentences without either of them noticing.",
  ranks: [
    { after: '7/16', title: '1: callouts', place: 'Iwatodai Dorm · Command Room', time: 'Evening', music: 'tender', scene: [
      { bg: 'iwatodaidorm-commandroom' },
      { n: "The command room on the fourth floor had always been the coldest room in the dorm, the air conditioning set by someone at the Kirijo Group years ago to a temperature that suited machines and nobody else, and in July it was the only room in the building where you could think. The big monitors along the wall hummed. The window was black. Somewhere below, Junpei was loudly failing to study." },
      { n: "There were two chairs at the desk now. There had always been one. The second was a cheap rolling office chair, still with the plastic on its arms, which Mitsuru had had sent over from the guesthouse the morning after he came, without a word, and which nobody had been told about, and which Fuuka had looked at for a long time when she came in and then quietly peeled the plastic off." },
      { n: "Chenle was in it. He was sitting cross-legged on it, which it was not designed for, in the grey hoodie with his hands lost in the front pocket and his glasses pushed up into his hair, staring at the middle monitor. On the middle monitor, on every monitor, there was a map." },
      { n: "Not the Kirijo map. A hand-drawn one, photographed and blown up, done in ballpoint on a sheet of graph paper with the corners curling. Iwatodai, from above. The station, the strip, the river, the hill, the bridge going off the edge of the page toward the island. And all over it, in small block capitals, names." },
      { s: 'fuuka', f: 'happy', t: "Senpai! You came up. Sorry, it's very cold. Sorry. We've been making a map. Chenle-kun's been making a map. I've been watching." },
      { s: 'chenle', f: 'neutral', t: "She's been correcting. She says watching. She's corrected eleven things." },
      { s: 'fuuka', f: 'surprised', t: "Only because you called the konbini by the station *Big Shop*. It isn't big. It's a very small shop." },
      { s: 'chenle', f: 'neutral', t: "It's a callout. It's not supposed to be accurate. It's supposed to be fast. *Big Shop* is one syllable faster than *konbini by the station*. That's a whole second in a teamfight." },
      { choose: [
        { t: "Callouts? For the town?", notes: 3, then: [
          { s: 'chenle', f: 'neutral', t: "For the red. On the thirteenth she brought us home with her eyes shut and every turn took her a sentence. *Left at the post office.* That's six syllables. If you're running, that's too many." },
          { s: 'chenle', f: 'neutral', t: "So the post office is *Post*. The ramen place is *Bowl*. The overpass is *Tube*. The shrine steps are *Hundred*, because there's a hundred and twelve and nobody's going to say a hundred and twelve while running." },
          { s: 'fuuka', f: 'neutral', t: "I said *Steps*. That's one syllable." },
          { s: 'chenle', f: 'neutral', t: "*Hundred* sounds scarier. People run faster." }
        ] },
        { t: "Big Shop is good.", notes: 2, then: [
          { s: 'chenle', f: 'happy', t: "Thank you. Finally. Somebody with game sense." },
          { s: 'fuuka', f: 'sad', t: "...It's still a small shop." }
        ] },
        { t: "(Look at the map closer.)", notes: 3, then: [
          { n: "She leaned in. The names were everywhere, in his small square capitals, and in some places, in a different hand, round and careful, there were smaller notes under them in pencil. *Big Shop* had *(very small)* under it. *Bowl* had *(Hagakure. they are kind about extra noodles)*. Two handwritings on one map, arguing politely about the same town." }
        ] }
      ] },
      { n: "They showed her how it worked. Chenle talked. Fuuka put her headphones on, round her neck, not over her ears, and listened with half her face while he talked, and every so often she said a word and he wrote it down without looking up, and once, when he paused to push his glasses up out of habit and found them already in his hair, she said *they're on your head* in the exact same second he found them, and neither of them noticed." },
      { s: 'chenle', f: 'neutral', t: "In the day it's quiet. In my head, I mean. I can't hear her in the day. I can hear her in the red. And at night, sort of, if she's close and she's concentrating. Like a phone with one bar." },
      { s: 'fuuka', f: 'neutral', t: "I can hear him all the time. A little. Not his thoughts. Just that he's there. Like when someone's in the next room and you can't hear them but you know they haven't left." },
      { s: 'fuuka', f: 'sad', t: "...Sorry. That sounds strange. I've never been able to explain it. Nobody else was ever in the next room." },
      // CG: eqx-callouts — two young people at a desk in a dim cold room full of monitors, all screens showing the same hand-drawn ballpoint map of a small town, a girl with headphones round her neck and a boy in a grey hoodie with his glasses pushed up into his hair both reaching for the same pen.
      { choose: [
        { t: "You were always the only one who could hear, weren't you.", notes: 3, then: [
          { n: "Fuuka didn't answer for a moment. She looked down at her own hands on the desk, the left over the right, and turned her headphones slowly round and round on her neck." },
          { s: 'fuuka', f: 'neutral', t: "Two years. Two whole years of being the only one listening. In the dark. Everybody running and me sitting here with the whole town in my ears, saying *left*, saying *watch out*, saying *it's behind you*. And knowing if I said it wrong..." },
          { s: 'fuuka', f: 'happy', t: "And now there's someone else in the room. In the next room. Saying *left* with me." },
          { n: "Chenle had gone very still in his chair. He didn't look at her. He looked at the map, at a corner of it, with great concentration, and pushed his glasses up, which were on his head." }
        ] },
        { t: "Chenle. You hated being needed last year.", notes: 3, then: [
          { s: 'chenle', f: 'neutral', t: "I hated being *outside* last year. On the pier. In the cold. That's different." },
          { s: 'chenle', f: 'neutral', t: "...On the team I'm the tank. I hold a corner. Everyone stands behind me. Nobody looks at me. That's the job. It's a good job. I like it." },
          { s: 'chenle', f: 'flustered', t: "Here she says *left* and I say *left* at the same time and five people turn left. Because of us. I've never been the reason anybody turned anywhere." }
        ] },
        { t: "(Sit on the edge of the desk between them.)", notes: 2, then: [
          { n: "She sat on the edge of the desk, between the two chairs, careful of the map. The monitors hummed at her back. Fuuka moved her tea so it wouldn't spill. Chenle moved his can of soda so it wouldn't spill. They did it at the same time and looked at each other's hands, and away." }
        ] }
      ] },
      { s: 'chenle', f: 'neutral', t: "You can name one. If you want. A callout. Everybody gets one. Jaemin named the guesthouse. He named it *Home Base*. It's four syllables. I'm keeping it because he'd cry." },
      { choose: [
        { t: "The bridge. Call it *Long*.", notes: 3, flag: 'eqx-fc-map', then: [
          { n: "Chenle wrote it down. *LONG*, in square capitals, across Moonlight Bridge. Then he stopped with the pen on the paper, and looked at it, and Fuuka, beside him, had gone quiet in a different way, the way she'd gone quiet in June when she'd lost two heartbeats on that bridge and found them again at the other end." },
          { s: 'fuuka', f: 'sad', t: "...That's a good name for it. That's a very good name. I wish it wasn't." }
        ] },
        { t: "The dorm. Call it *Here*.", notes: 3, flag: 'eqx-fc-map', then: [
          { s: 'chenle', f: 'neutral', t: "*Here.* One syllable. Clear. Unambiguous. If someone yells *Here* in the red, everyone knows where to run." },
          { s: 'fuuka', f: 'happy', t: "...Oh, I like that. I like that so much. I'm going to write it really small under his." }
        ] },
        { t: "The boarding house.", notes: 2, then: [
          { n: "Chenle's pen moved to the river street, to the small square he'd drawn there with a tree beside it, and stopped. There was nothing written on it. It was the only building on the whole map with nothing written on it." },
          { s: 'chenle', f: 'neutral', t: "...I haven't named that one. I don't know why. Every time I try, I go and do a different one." },
          { s: 'fuuka', f: 'neutral', t: "I haven't put a note on it either. I just noticed. I've put a note on everything." }
        ] }
      ] },
      { place: 'Iwatodai Dorm · Command Room', time: 'Night', bg: 'iwatodaidorm-commandroom', music: 'eerie', soft: true },
      { n: "Later, when the tea was cold and Junpei had stopped failing to study and started failing to sleep, Chenle took the headphones off his own neck, the spare pair, and put them down on the desk, and looked at Fuuka, and then at Solar, as if deciding something." },
      { s: 'chenle', f: 'neutral', t: "Can I tell her? The thing. From the other night." },
      { s: 'fuuka', f: 'sad', t: "...You can tell her. I'd tell it wrong." },
      { s: 'chenle', f: 'neutral', t: "In the red. We were listening together. For practice. Not for anyone. Just the whole town. All the coffins. Everybody's heart going in the boxes, really slow, like a server with nobody on it." },
      { s: 'chenle', f: 'serious', t: "And something moved. Down south. Low. By the water. Something big, moving, going along a street. Fast and then slow and then stopped." },
      { s: 'chenle', f: 'serious', t: "No heartbeat. Nothing. Something moving in the red with no heartbeat at all. For about four seconds. Then it was gone, like it went inside something." },
      { s: 'fuuka', f: 'sad', t: "And I didn't hear it. I was listening to the same street. I didn't hear anything. I've heard everything in this town for two years, every cat, every coffin. And he heard it and I didn't." },
      { n: "She said it very quietly. Her hands were in her lap, holding each other. Solar had seen Fuuka afraid of a great many things over two years. Shadows, the dark, the sound of her own voice saying a wrong turn. She'd never seen her afraid of not hearing something." },
      { choose: [
        { t: "Lag. Maybe it's lag.", notes: 2, then: [
          { s: 'chenle', f: 'neutral', t: "That's what I said. I said it's lag. I'm on a worse connection, I pick up junk." },
          { s: 'chenle', f: 'neutral', t: "...Lag doesn't move along a street and stop outside a house. I know what lag looks like. I've had lag my whole life." }
        ] },
        { t: "If one of you hears something the other doesn't, say it. Out loud. Every time.", notes: 3, then: [
          { s: 'fuuka', f: 'neutral', t: "...Every time?" },
          { s: 'solar', f: 'neutral', t: "That's what two of you is for." },
          { n: "Chenle picked up the pen and wrote it at the top of the map, in the margin, in his square capitals: *IF ONE HEARS, SAY.* And under it, after a second, Fuuka took the pen from him and wrote *(sorry if it's nothing)*, and he took the pen back and crossed that out, very neatly, one straight line, and she let him." }
        ] },
        { t: "(Look at the river street on the map.)", notes: 3, then: [
          { n: "She looked at the map. Down south, low, by the water. The river street. The row of small squares he'd drawn for the old houses, and the one at the end with the tree beside it, with no name on it, and no note under it, blank in the middle of a town where everything else had been given a word." },
          { n: "Nobody said anything. Chenle put the pen down on the desk very carefully, lined up with the edge, the way you'd put down something you didn't want to roll." }
        ] }
      ] },
      { ifEvent: 'eqx-last-grain', then: [
        { n: "Fuuka put her headphones back over her ears, though nothing was playing, and took them off again." },
        { s: 'fuuka', f: 'sad', t: "...On the twenty-sixth we were both in the Well. Both of us. For the first time. Two headsets. It was the best I've ever navigated. He called the shape and I called what was in it." },
        { s: 'chenle', f: 'neutral', t: "Nobody was listening to the town. That night. Both of us were down there." },
        { s: 'fuuka', f: 'sad', t: "Two of us. And nobody was listening." }
      ], else: [ { ifEvent: 'eqx-third-hill', then: [
        { s: 'fuuka', f: 'happy', t: "He was so good in the Well. On the twenty-sixth. Two headsets. He called the shape and I called what was in it. I didn't have to say anything twice." },
        { s: 'chenle', f: 'flustered', t: "...It was lag. I was just a bit early. Stop telling people." }
      ], else: [
        { s: 'chenle', f: 'neutral', t: "Mitsuru says I go down with her at the next full moon. Into the Well. Two headsets." },
        { s: 'fuuka', f: 'neutral', t: "You'll call the shape. I'll call what's in it." },
        { s: 'chenle', f: 'neutral', t: "...Okay. Okay. That's a good split. That's a really good split." }
      ] } ] },
      { n: "At eleven Chenle had to go, because the rule was twos after dark and Jaemin was waiting at the bottom of the hill to make his two. He stood, and rolled the cheap chair in to the desk, tidily, beside Fuuka's, so the two chairs stood side by side with their backs to the room." },
      { s: 'chenle', f: 'neutral', t: "Same time next week." },
      { s: 'fuuka', f: 'happy', t: "Same time next week. I'll have the map up." },
      { n: "He went. His footsteps went down the stairs, four floors, and out the front door, and Solar, sitting on the edge of the desk, watched Fuuka listen to him go. All the way down. Out the door. Down the hill. Her head turning very slightly, following, with her eyes closed, though there was no red and nothing to hear and no headset on." },
      { s: 'fuuka', f: 'neutral', t: "...He's with Jaemin-kun. They're on the hill. They're fine." },
      { s: 'fuuka', f: 'happy', t: "Sorry. I just like knowing." }
    ] },
    { after: '8/18', title: '2: quiet', place: 'Iwatodai Dorm · Command Room', time: 'Evening', music: 'tender', scene: [
      { bg: 'iwatodaidorm-commandroom' },
      { n: "In August the command room stopped being the coldest room in the dorm and became the only one anybody could stand. The rest of the building cooked. The lounge fan pushed the hot air from one end of the couch to the other and back, the stairwell smelled of warm dust and Junpei's deodorant, and the third floor, after two in the afternoon, was a place you went only to get something and leave. So everybody came up. Junpei with his homework he wasn't doing. Ken with a library book. Koromaru, who lay down on the floor under the monitors with his belly on the cool tiles and refused to be moved by anyone." },
      { n: "Fuuka had put a sign on the door at six. *NAVIGATION PRACTICE. PLEASE BE QUIET. (SORRY.)* Chenle had added, underneath, in his square capitals, *THIS MEANS JUNPEI.* By seven the room was theirs again, except for the dog, and when Solar came up the stairs and knocked, both of them said *come in* at the same moment and then looked at each other as if one of them had been caught copying." },
      { n: "The map was still up on every screen. It had grown. There was a second sheet of graph paper taped to the first now, the river going off the bottom edge of one and carrying on across the top of the other, and the names had spread with it: *Gate*, *Lamp*, *Long Steps*, *Ken's Corner* in Fuuka's round hand with *(he asked)* beside it. But that wasn't what was new." },
      { n: "What was new was the grey. Soft pencil, shaded in with the side of the lead, the way you'd shade a shadow in an art class. The bridge was grey, the whole span of it, from the Iwatodai end to the island. A stretch of the river path was grey, below the post office corner, going down toward the water. And out on the edge of the second sheet, at the very end of the Port Island pier, where Chenle had drawn the bollards as a row of tiny circles, there was a smudge of grey the size of a thumbprint." },
      { s: 'chenle', f: 'neutral', t: "Quiet places. It's a new layer. In a game you'd call it a dead zone. Where the minimap stops showing you stuff." },
      { s: 'fuuka', f: 'neutral', t: "In the red every heart in town is in a box, and every box is a little sound. Like a clock in another room. And then there are places with no clocks. Not empty. Empty sounds like something. These don't sound like anything." },
      { s: 'fuuka', f: 'sad', t: "...We've been shading them in. Sorry. I know it's a bit grim, for a map with *Bowl* on it." },
      { choose: [
        { t: "The pier's new.", notes: 3, then: [
          { s: 'chenle', f: 'neutral', t: "Since the twelfth. The night we came back on the boat. There was a guy who fished off the end every night, I could hear him, he had a really slow heart, like a whale. Fuuka-noona called him the Whale." },
          { s: 'fuuka', f: 'sad', t: "I didn't call him that. You called him that. I just didn't stop you." },
          { s: 'chenle', f: 'neutral', t: "And then the night we got back he wasn't there. And the end of the pier wasn't there either. Not him gone. The whole end. Like somebody took a bite of the map." },
          { n: "He said it in the voice he used for game stats, flat, precise, and pushed his glasses up, and his finger stayed there on the bridge of them a second longer than it needed to." }
        ] },
        { t: "(Look at the boarding house on the map.)", notes: 3, then: [
          { n: "She found it without looking for it. The river street. The row of small squares. The one at the end with the tree beside it. Still no name on it. Still no note. And no grey either, though every other place along that bank had a little of it now, as if someone had rested a dirty hand on the paper." },
          { s: 'chenle', f: 'neutral', t: "I can't tell what that one is. I've tried. It's not quiet. Every time I listen at it I get a headache. Like a restaurant where everybody's talking at once and you can't pick out one voice." },
          { s: 'fuuka', f: 'sad', t: "I can't hear it at all. I never could. I thought it was me." }
        ] },
        { t: "Grim's okay. Grim's useful.", notes: 2, then: [
          { s: 'fuuka', f: 'happy', t: "...That's what Mitsuru-senpai said. Almost exactly. She said *grim is data*. And then she asked for a copy." },
          { s: 'chenle', f: 'neutral', t: "I made her a copy. I left *Bowl* on it. She didn't say anything about *Bowl*. I think she respects it." }
        ] }
      ] },
      { ifEvent: 'eqx-table-op', then: [
        { s: 'fuuka', f: 'neutral', t: "And there are six more in town since the full moon. I count them in. Every night at twelve, before anything else. Six. I don't know why I do it. Like checking everybody got home from a party." },
        { s: 'chenle', f: 'neutral', t: "She does it out loud. *One, two, three, four, five, six.* It's very calming. It's like a loading screen." }
      ] },
      { n: "Chenle went back to his shading. Fuuka watched him do it. She watched his hand, the pencil held flat, the grey going down in short even strokes, and Solar watched her watch it, and saw something in her face that she knew from somewhere, from the inside, though it took her a second to place it." },
      { s: 'fuuka', f: 'neutral', t: "He hears them first. The quiet places. He finds them and then I go and listen, and then I can hear that there's nothing there. But he finds them. Every time." },
      { s: 'fuuka', f: 'sad', t: "In the Well it's the same. On the Third Hill. He calls the shape of a room before I'm in it. And Mitsuru-senpai has started saying *Chenle, confirm*. After I call. *Chenle, confirm.*" },
      { s: 'fuuka', f: 'neutral', t: "She never had anyone to confirm me. Two years. Whatever I said, everyone just ran." },
      { n: "She said it lightly, the way you'd mention the weather, and turned her headphones round on her neck, once, and smiled, and the smile was very good. Solar knew exactly how good. She'd been doing it in doorways all her life." },
      { s: 'chenle', f: 'flustered', t: "It's lag. It's— I'm on a worse connection, I pick things up early because I pick everything up, I'm just noisy. She's the one who's *right*. I'm just early." },
      { choose: [
        { t: "Fuuka. Being confirmed isn't the same as being replaced.", notes: 3, then: [
          { n: "Fuuka stopped turning the headphones. She looked at Solar, and then at the desk, and then, very quickly, at Chenle, who was looking hard at the pier." },
          { s: 'fuuka', f: 'sad', t: "...I know. I know that. I know it in my head. It's just. For two years if I was wrong somebody got hurt. And now if I'm wrong he catches it. And I keep waiting to feel relieved." },
          { s: 'fuuka', f: 'neutral', t: "And I do. I do feel relieved. And then underneath it there's this other thing, like, *oh. You're not the only one any more. So what are you.*" },
          { s: 'chenle', f: 'neutral', t: "You're the one who's right. I literally just said." }
        ] },
        { t: "Chenle. You're not just early.", notes: 3, then: [
          { s: 'chenle', f: 'neutral', t: "I'm a little bit just early." },
          { s: 'solar', f: 'neutral', t: "You heard the pier. You heard the thing by the water in July. She didn't." },
          { n: "He didn't say anything for a while. He put the pencil down, lined up with the edge of the desk, the way he had in July." },
          { s: 'chenle', f: 'serious', t: "...Yeah. I know. That's the part I don't like. In a game if you hear something nobody else heard, you're either cracked or you're wrong. And I'm not cracked." }
        ] },
        { t: "(Put a hand on the back of each chair.)", notes: 2, then: [
          { n: "She stood behind them and put one hand on the back of each chair, the good one and the cheap one, and left them there. Neither of them turned round. Fuuka's shoulders came down a centimeter. Chenle leaned back, just slightly, until the chair touched her knuckles, and stayed there." }
        ] }
      ] },
      { s: 'chenle', f: 'neutral', t: "Okay. New idea. Proof. We do a drill." },
      { s: 'fuuka', f: 'surprised', t: "A drill? Now? It's not even the red." },
      { s: 'chenle', f: 'happy', t: "That's what makes it a drill. If it was the red it'd be a game. We did this on the team. Blind walks. Somebody puts a blindfold on and two people call them across the room. One calls the shape, one calls what's in it. It proves the split works." },
      { s: 'chenle', f: 'neutral', t: "We need a runner. Somebody who'll actually listen. Junpei walks into things on purpose to make a point." },
      { n: "They both looked at her." },
      { place: 'Iwatodai Dorm · Stairs', time: 'Evening', bg: 'iwatodaidorm-hallway', soft: true },
      { n: "The blindfold was Yukari's sleep mask, pink, with a cartoon sheep on it that Junpei, passing on the stairs, said *really completed the look*. The headset was the spare from the command room, too big, warm from the shelf above the server, and it sat on her ears like somebody's hands. The route was Chenle's. Command room to the roof, down a floor, along the third-floor hall, back up the far stairs. He'd drawn it on a napkin. He'd numbered the turns." },
      { n: "Then it was dark, and pink at the edges where the light came round the sheep, and two voices in her ears, close, one on the left and one on the right, though the headset was supposed to be mono." },
      { s: 'chenle', f: 'neutral', t: "*Door. Three steps. Stop. Turn right. That's the stairs. They're down. Hand on the rail.*" },
      { s: 'fuuka', f: 'neutral', t: "*The rail's on your left, Solar. Ken's library book is on the fourth step. Step over it. Sorry, Ken-kun.*" },
      { n: "She found the rail. She stepped over the book. She went down the stairs in the dark with her hand on the warm wood, and the voices came one after the other in her ears, *shape* and then *what's in it*, *landing* and then *laundry basket on the landing, Yukari's, go round it to the right*, and somewhere around the fifth instruction she stopped thinking about it and just went, the way you stop thinking about your feet on a road you know." },
      { n: "It was strange how fast her body trusted it. Stranger how good it felt. Two people paying that much attention to exactly where she was. She had been looked at all her life, in three lives, by rooms full of people. She couldn't remember the last time anybody had just watched where she put her feet." },
      { choose: [
        { t: "(Go faster. Trust them.)", notes: 3, then: [
          { n: "She went faster. They kept up. Chenle's voice got shorter, *right. Hall. Straight*, and Fuuka's got lighter, *the hall's clear, Junpei's door's open, he's pretending not to watch, he's watching*, and she heard Junpei say *I am NOT* from a doorway somewhere on her right, and laughed, and nearly walked into the wall, and Chenle said *wall* about a quarter-second too late and then *sorry, lag*, and in her other ear Fuuka was laughing too, the small breathy laugh she did into her hand." }
        ] },
        { t: "(Lift the corner of the mask. Just a little.)", notes: 2, then: [
          { s: 'chenle', f: 'neutral', t: "*She's peeking.*" },
          { s: 'fuuka', f: 'surprised', t: "*How do you know?*" },
          { s: 'chenle', f: 'neutral', t: "*Her steps got confident. Nobody walks like that blind. Put it down, Sol. It doesn't count if you peek.*" },
          { n: "She put it down. In her ear, very faintly, Fuuka was giggling." }
        ] },
        { t: "Koromaru's following me, isn't he.", notes: 2, then: [
          { s: 'fuuka', f: 'happy', t: "*He is. He's right behind you. He's very serious about it. I think he thinks you're injured.*" },
          { s: 'chenle', f: 'neutral', t: "*He's a better runner than Junpei. He's checking the corners. Honestly I'd draft him.*" }
        ] }
      ] },
      { n: "The third-floor hall. The long way round to the far stairs. The window at the end of it, she knew, the one that looked down the hill toward the town, toward the river, because she'd stood at it in April and counted the streetlamps. She could feel the evening coming through it on her face, warmer than the hall, and smell the cut grass from somebody's garden below." },
      { s: 'chenle', f: 'neutral', t: "*Straight. Eight more steps. Then the stairs are on your—*" },
      { n: "He stopped." },
      { n: "Not the way you stop when you lose your place. The way you stop when someone puts a hand on your arm. Mid-word. The line stayed open; she could hear him breathing, and the hum of the command room behind him, and nothing else." },
      { s: 'fuuka', f: 'neutral', t: "*...Chenle-kun? Solar, it's clear. The hall's clear. Keep going. Eight steps.*" },
      { s: 'chenle', f: 'serious', t: "*Stop.*" },
      { s: 'fuuka', f: 'surprised', t: "*It's clear. There's nothing there. There's nobody on the whole floor but Junpei-kun and the dog.*" },
      { s: 'chenle', f: 'serious', t: "*Not in the hall. Outside. Down the hill. Something was walking and it stopped. Right when she got to the window. Like in a match when you hear footsteps outside the room and then they stop and you know they heard you too.*" },
      { n: "She stood in the dark with the sheep over her eyes and the warm air from the window on her face, and two people in her ears telling her two different things, and every hair on her arms stood up at once, before she'd decided anything at all." },
      { choose: [
        { t: "(Stop. Don't move.)", notes: 3, then: [
          { n: "She stopped. She didn't move. Behind her, she heard Koromaru stop too, and sit, and then, very low, almost not a sound at all, begin to growl. Not at her. Past her. At the window." },
          { n: "Nobody said anything for a long time. A minute, maybe. It felt like the whole red hour." },
          { s: 'chenle', f: 'neutral', t: "*...It's going again. Away. Down toward the water. Slow.*" }
        ] },
        { t: "(Keep going. Fuuka said it's clear.)", notes: 2, then: [
          { n: "She took a step. Then another. Chenle said *Sol* in her ear, just her name, not loud, and she stopped on the third step without meaning to, because she'd never heard him say anything in that voice, and behind her Koromaru made a sound low in his chest and pressed himself against the backs of her knees, hard, the way he did in the red, so she couldn't go forward without walking through him." },
          { s: 'chenle', f: 'neutral', t: "*...Okay. It's going. It's going away. Down the hill.*" }
        ] },
        { t: "(Take the blindfold off. Look.)", notes: 3, then: [
          { n: "She pulled the mask up. The light came in all at once, gold and ordinary, the hall, the window, the hill going down under it in the last of the evening, roofs and wires and somebody's laundry on a balcony and the streetlamps just coming on, one after another, toward the town." },
          { n: "Nothing on the hill. Nobody on the road. A cat on a wall, washing. And past the roofs, past the post office, the line of trees along the river, dark already, the way it got dark there first now, before anywhere else in town." },
          { s: 'chenle', f: 'neutral', t: "*...It's going. You won't see it. I don't think it's a see thing.*" }
        ] }
      ] },
      { s: 'fuuka', f: 'sad', t: "*I didn't hear it. I'm sorry. I'm listening right now, I'm listening to the whole hill, and I didn't— I don't hear anything. I didn't hear it at all.*" },
      { s: 'chenle', f: 'neutral', t: "*...If one hears, say. I said. That's the rule. I said.*" },
      { s: 'fuuka', f: 'neutral', t: "*You did. You did, Chenle-kun. That's good. That's the rule.*" },
      { place: 'Iwatodai Dorm · Roof', time: 'Evening', bg: 'iwatodaidorm-roof-evening', music: 'eerie', soft: true },
      // CG: eqx-blind-walk — a girl on a dorm roof at dusk with a pink sleep mask pushed up into her hair and an oversized headset round her neck, a white dog sitting pressed against her legs, two navigators coming up through the stairwell door behind her, the town and a dark line of river trees below.
      { n: "They finished the route anyway. Chenle said so: *you finish a drill, you don't leave it half done, that's how you get bad habits*. She walked the last stairs with the mask down and both voices careful in her ears, and pushed the roof door open on the evening, and took the mask off, and they came up behind her a minute later, Fuuka first, Chenle with the napkin, both of them out of breath from the stairs, though they'd only been sitting." },
      { n: "The roof was still warm from the day. The planters smelled of hot soil. Down the hill the town was lighting itself, street by street, all the way to the river, where it stopped." },
      { n: "Chenle took out his pencil. He had the folded copy of the map in his hoodie pocket; he always had it. He flattened it on the low wall and found the dorm and the road down the hill from it, and held the pencil over the road for a long time, the side of the lead ready." },
      { s: 'chenle', f: 'neutral', t: "...It's our hill. It's our side. Everything else is down by the water. I don't want to put grey on our side." },
      { s: 'fuuka', f: 'sad', t: "It was just walking. It didn't come up. It stopped and it went away again." },
      { choose: [
        { t: "Shade it. And tell Mitsuru tonight. Both of you.", notes: 3, flag: 'eqx-fc-grey', then: [
          { n: "He shaded it. A small patch, on the road below the dorm, where the hill bent, no bigger than his fingernail. Then he looked at it, and Fuuka took the pencil off him, and under it, in her round careful hand, she wrote *(walking, stopped, went away)*, and then, smaller, *Chenle heard*, and gave the pencil back." },
          { s: 'fuuka', f: 'neutral', t: "We'll tell her. Both of us. Together. Then it's not one of us being strange. It's a report." },
          { s: 'chenle', f: 'neutral', t: "A report. Okay. I can do a report. I'm very good at reports. I once did a forty-slide report on why our healer was wrong." }
        ] },
        { t: "Don't shade it. Just write down what you heard.", notes: 2, then: [
          { n: "He didn't shade it. He wrote, instead, very small, along the edge of the road, in his capitals: *8 STEPS FROM THE WINDOW. STOPPED. WENT.* And the date. And folded the map up and put it back in his pocket, and patted it, once, flat." },
          { s: 'chenle', f: 'neutral', t: "Grey's for places. That wasn't a place. That was a thing." }
        ] },
        { t: "(Take the pencil. Write *ours* on the hill instead.)", notes: 3, then: [
          { n: "She took the pencil out of his hand and wrote it on the road below the dorm, in her own hand, which on that map looked like nobody's. *ours.* Chenle looked at it. Fuuka looked at it." },
          { s: 'fuuka', f: 'happy', t: "...That's not a callout. It's two syllables if you say it slowly." },
          { s: 'chenle', f: 'neutral', t: "It's staying. I'm keeping it. It's like *Home Base*. If I take it off somebody's going to cry and it might be me." }
        ] }
      ] },
      { n: "They sat on the wall, three of them, the dog lying across all their feet, until the cicadas stopped and the bats came out over the planters. Chenle talked about games. Fuuka listened to him talk about games with the expression of someone being read a long letter in a language she'd only just started learning, and asked good questions about it, and every so often, while he was talking, she turned her head a little, toward the town, toward the river, and listened to something else." },
      { s: 'fuuka', f: 'neutral', t: "...Senpai. Can I say something strange? It's not about tonight." },
      { s: 'fuuka', f: 'sad', t: "I didn't know it was lonely. Before. Being the only one listening. I thought that's just what it was like. I thought everybody's job felt like that." },
      { s: 'fuuka', f: 'neutral', t: "I didn't know until there were two chairs." },
      { n: "Chenle had gone quiet. He was looking at the bats. He pushed his glasses up, which were on his face this time, and left his hand there, over his eyes, a little too long, as if the light from the town was very bright." },
      { s: 'chenle', f: 'neutral', t: "...Same time next week. Drill two. Junpei's the runner. I want to see him walk into a wall on purpose." },
      { s: 'fuuka', f: 'happy', t: "Same time next week." },
      { n: "Neither of them got up. Down the hill the streetlamps went on burning toward the river, and stopped where they always stopped now, and past that line there was only dark, and somewhere in the dark something that walked, and listened, and went away again, and Fuuka beside her was turning her head, very slightly, following it, though she'd said she couldn't hear it at all." }
    ] },
    { after: '10/8', title: '3: two chairs', place: 'Iwatodai Dorm · Command Room', time: 'Evening', music: 'tender', scene: [
      { bg: 'iwatodaidorm-commandroom' },
      // BG: iwatodaidorm-commandroom-rain — the dorm's command room at night in autumn rain: the wall of monitors glowing over two desk chairs side by side, a hand-drawn map taped across the screens, rain running down the one black window.
      { n: "It had rained since Tuesday. Not hard. The thin, patient October kind that didn't fall so much as hang, that got into the dorm through every window frame and made the stairwell smell of wet concrete and the lounge smell of wet coats, drying on the backs of chairs, that nobody moved. The command room had its window shut for the first time since April. The rain ran down the black glass in long threads, and the monitors hummed, and the room was warm now, warm and close, like a room somebody had been sick in." },
      { n: "Nobody came up any more without a reason. Since the bridge. Junpei didn't do his homework up here. Ken read in the lounge, where the fathers were. The sign on the door still said *NAVIGATION PRACTICE. PLEASE BE QUIET. (SORRY.)*, and nobody had taken it down, and nobody needed it." },
      { ifEvent: 'eqx-1023', then: [
        { n: "Since the Fathers' Hill the dorm had gone quieter still. People spoke on the stairs in the voices you used in a hospital. Somebody had left the lounge lamp on all night, every night, and nobody turned it off." }
      ] },
      { n: "Fuuka was asleep in her chair." },
      { n: "She was sitting up, with her headphones on and her head tipped against the wing of the good chair and her hands loose in her lap, palms up, the way small children sleep in cars. Somebody's grey hoodie was over her knees. Chenle was in the cheap chair beside her in a T-shirt, with his arms wrapped round himself, cold, watching the monitors, and when the door opened he turned his head and put one finger to his lips before Solar could say anything." },
      { s: 'chenle', f: 'neutral', t: "...She hasn't slept. Since. Not properly. She sleeps here. Sitting up. I don't wake her." },
      { s: 'chenle', f: 'neutral', t: "She listens all night. At twelve, when the red comes, she puts these on and she listens for them. Your— the mothers. All night. Every night. And then at one it's over and she hasn't heard them and she sits here till it's light. And then she goes to school." },
      { n: "He said *your* and then didn't, and Solar heard him decide not to, and was grateful, and the gratitude sat in her chest like something swallowed too fast." },
      { n: "She came in and sat on the edge of the desk, where she'd sat in July, careful of the map. The map was different. There was a third sheet now, taped below the others, and it wasn't Iwatodai. It was the Well. The shaft drawn as a long rectangle, the blocks marked off down it like floors on a building turned upside down, the Third Hill at the bottom of what they could reach, and above it, on the Second Hill's sheet, out on the mud, in pencil, a tiny upright rectangle with a dot for a knob." },
      { s: 'chenle', f: 'neutral', t: "A door. A week after the bridge. Second Hill, on the mud, a kilometer out. Just standing there. A door with a brass knob. And behind it there was a kitchen. Somebody's kitchen. Like the real one. A kettle on the stove." },
      { s: 'chenle', f: 'sad', t: "She couldn't see it. I called it and she said *where*. I said *there, there, it's right there, it's right in front of Akihiko-senpai*, and she said *Chenle-kun, there's nothing there*. And Akihiko-senpai put his hand out and touched it. And it was there." },
      { s: 'chenle', f: 'neutral', t: "She went in the bathroom after. In the morning. For a long time. I sat outside. I didn't knock. You don't knock on a door at the moment. That's a rule now too." },
      { choose: [
        { t: "Did you go in? Through the door?", notes: 2, then: [
          { s: 'chenle', f: 'neutral', t: "No. Mitsuru-senpai said nobody. I didn't want to anyway. It wasn't mine. It was somebody's mom's kitchen. You could tell. There was a cloth folded on the edge of the sink." },
          { s: 'chenle', f: 'sad', t: "...It wasn't anybody's here. It was empty. But it was the kind of kitchen where you'd be in trouble for coming in with your shoes on." }
        ] },
        { t: "(Look at her. Asleep.)", notes: 3, then: [
          { n: "She looked at Fuuka. Asleep with her mouth a little open and her headphones crooked, and a faint red line across her cheek where the headset band had pressed it all night, every night, and under her eyes the skin gone the colour of a bruise. She was holding one of her own hands in the other in her sleep. Left over right." },
          { n: "Chenle looked at her too, and then, carefully, reached over and straightened the hoodie on her knees, and took his hand back, and put it under his arm, where it was warm." }
        ] },
        { t: "Chenle. Are you sleeping?", notes: 3, then: [
          { s: 'chenle', f: 'neutral', t: "...I sleep in the day. In class. I'm an exchange student. Nobody expects anything. It's the best thing about being an exchange student." },
          { s: 'chenle', f: 'sad', t: "I can't sleep while she's listening. If she hears something and she's on her own— I don't want her to be on her own when she hears it. That's the whole point of two." }
        ] }
      ] },
      { n: "They sat. The rain ran down the window. On the middle screen a cursor blinked at the edge of the town map, where somebody, Fuuka, had zoomed in on the bridge until it filled the monitor, and the grey she'd shaded on it in August had been gone over again and again since, harder each time, until the pencil had gone shiny and torn the paper in one place, near the middle of the span." },
      { s: 'chenle', f: 'neutral', t: "At home there's a thing. I'm not going to tell it. It's not mine. It's the house's. Something happened at a party and everybody on campus talks about it. People who weren't there. People who don't know anybody." },
      { s: 'chenle', f: 'neutral', t: "I'm not in it. I'm just in the house. So when I go to class people look at me like I might know something. And then they look away because I'm nobody. I'm the guy in the back row with the hoodie. I hold the corner. Nobody looks at the corner." },
      { s: 'chenle', f: 'sad', t: "...Here I'm a dot on a screen everybody's watching. When I say *left* five people go left. I'm the only one who heard the door." },
      { s: 'chenle', f: 'neutral', t: "I don't want to go back to the corner, Sol. That's a bad thing to want. I know it's a bad thing to want, in a town where people's moms— I know. I still want it." },
      { n: "Fuuka moved in her sleep. Her hand came up, slowly, the way a hand comes up in a dream, and went to the headset, and pressed it flatter against her ear, and her face changed: listening, frowning, the small line between the brows. Then she opened her eyes, all at once, wide, and said *sorry* before she knew where she was." },
      { s: 'fuuka', f: 'surprised', t: "Sorry— sorry. Senpai. You're here. How long have you— I wasn't asleep. I was resting my eyes. I was listening with my eyes closed. Sorry." },
      { s: 'chenle', f: 'neutral', t: "You were asleep for an hour and ten minutes. I timed it. It's your record." },
      { s: 'fuuka', f: 'sad', t: "...Oh. Was I. Did anything— did you hear anything?" },
      { s: 'chenle', f: 'neutral', t: "Rain. Junpei's music. Koromaru having a dream about running. Nothing." },
      { ifEvent: 'eqx-fathers-go', then: [
        { n: "That wasn't true, and all three of them knew it. Since the Wednesday on the Third Hill he could hear them. Three women, far down, under the barrier, telling the old story a sentence each, in each other's voices. He heard it every time he went down. He'd told the whole lounge. And Fuuka, who had listened for them every night since the bridge, still couldn't hear anything at all." },
        { s: 'fuuka', f: 'sad', t: "...He's being kind. He can hear them. Down there. I can't. I've been listening longer than anyone and I can't." }
      ], else: [
        { s: 'fuuka', f: 'sad', t: "I keep thinking if I'm listening at the exact right second. If I don't blink. Three heartbeats I'd know anywhere, I've had dinner with them, I've heard them laugh at the long table. If I'm just listening at the right second." },
        { s: 'chenle', f: 'neutral', t: "We'll hear them. One of us will. And then that one says. That's the rule." }
      ] },
      { n: "Fuuka got up. She did it the way she did most things now, carefully, as if the floor might not be where she'd left it. She folded the grey hoodie and gave it back to Chenle without a word, and he put it on without a word, and she went to the shelf in the corner where the kettle was, because of course there was a kettle up here, there'd always been a kettle up here, and made three cups of tea, and took a tin down from the shelf beside it." },
      { s: 'fuuka', f: 'neutral', t: "I made these. On Sunday. Yukari-chan helped. They're supposed to be madeleines. They're— they're madeleine-adjacent." },
      { n: "They were hard and slightly grey and tasted of lemon and something else, faintly, metallic, like a coin held in your mouth as a child, the way everything Fuuka made had tasted since the first night Solar had ever eaten anything of hers. She ate two. She hadn't known how much she'd missed that taste until it was in her mouth. It was the only food anyone had given her in two weeks that she hadn't checked first." },
      { choose: [
        { t: "They're good, Fuuka.", notes: 2, then: [
          { s: 'fuuka', f: 'happy', t: "They're not. Thank you. They're really not. Thank you." }
        ] },
        { t: "(Take a third.)", notes: 3, then: [
          { n: "She took a third. Fuuka watched her take it with an expression Solar had seen her wear last year at the counter in the dorm kitchen, flour on one cheek, hands clasped under her chin, waiting, and Chenle, who had eaten half of one and put the other half very discreetly in his pocket, looked at her with something close to awe." }
        ] },
        { t: "They taste like last year.", notes: 3, then: [
          { s: 'fuuka', f: 'sad', t: "...Do they? The iron one? I didn't put iron in. I didn't put anything in. They just come out like that." },
          { s: 'fuuka', f: 'happy', t: "I'm glad. I'm glad something does." }
        ] }
      ] },
      { n: "Fuuka sat down again, in the good chair, with her tea in both hands. She looked at the map. Not at the town sheet. At the top margin of it, where in July Chenle had written *IF ONE HEARS, SAY*, and she'd written *(sorry if it's nothing)* and he'd crossed it out with one straight line." },
      { n: "There was something else under it now, in her hand. Rubbed out. You could still see the dents the pencil had made, three words, and an eraser smudge over them the size of a thumb." },
      { s: 'fuuka', f: 'neutral', t: "Mitsuru-senpai says when this is over. If it's ever over. That the doors might go both ways. That some people might be able to go home. Through a door like the one in the mud. Into their own kitchen." },
      { s: 'fuuka', f: 'neutral', t: "Chenle-kun could go home. He should. He's got a home. He's got a team. He's got a corner." },
      { s: 'chenle', f: 'neutral', t: "Noona." },
      { s: 'fuuka', f: 'sad', t: "I can't hear the bottom. I can't hear the doors. I can't hear the mothers. If he goes I'll be up here on my own again in the cold with the whole town in my ears and the Well getting deeper every month, further away from me, and nobody to say *confirm*, and I'll call it wrong and somebody will—" },
      { n: "She stopped. She put the tea down. She put her hands together in her lap, left over right." },
      { s: 'fuuka', f: 'sad', t: "...Senpai. Tell him to stay. Please. He'd listen to you. Everybody listens to you." },
      { n: "It went into Solar like cold water, the shape of it. *She'd listen to you.* She'd heard that sentence before, in a kitchen, in a kinder voice, about someone else, and it had sounded like the most reasonable thing in the world then too." },
      { s: 'chenle', f: 'flustered', t: "Don't— you can't make her— that's not fair on her, that's—" },
      { n: "He stopped. He looked at the map, at the tiny door he'd drawn on the mud, at the bridge torn through in the middle where Fuuka had gone over it too hard. He pushed his glasses up. They were on his face. His hand stayed there." },
      { s: 'chenle', f: 'neutral', t: "...I want to, though. I want to stay in the chair. I want somebody to say I'm allowed. I don't even care who. I'd like it to be you." },
      { s: 'chenle', f: 'neutral', t: "Tell me I'm allowed to stay in the chair." },
      // CG: eqx-two-chairs — two desk chairs side by side in a dim room of glowing monitors at night, rain on the black window, a girl in headphones and a boy in a grey hoodie sitting in them with their hands in their laps, both looking up at someone standing in front of them, a hand-drawn map with a torn grey bridge on the screens behind.
      { n: "They both looked at her. The rain ran down the window. On the shelf the kettle ticked as it cooled. The two chairs stood side by side the way he'd left them every night since July, rolled in tidily to the desk, their backs to the room, and she understood that whatever she said next, one of them would write it down." },
      { choose: [
        { t: "Stay, Chenle. Both of you. Keep the two chairs.", notes: 3, tally: { cakes: 1, 'asks.fuuka-chenle': 'yes' }, then: [
          { n: "Fuuka's breath went out of her all at once. Not a sob. The sound a person makes setting down something heavy they've carried up a lot of stairs. She put both hands over her face and kept them there." },
          { n: "Chenle didn't move. Then he nodded, once, short, the way he'd nod at a captain's call. *True.* And reached for the pencil, and, in the top margin, under the rubbed-out words, wrote in his square capitals *2 CHAIRS*, and underlined it twice." },
          { s: 'chenle', f: 'neutral', t: "...Okay. Okay. That's the split. That's a good split." },
          { n: "And the room settled. That was the only way she could think of it after. Like a house settling at night, the small creak of something old sinking into its place. The monitors hummed one note lower. The warmth came in around the three of them like a blanket being tucked, and it was so comfortable, and she was so tired, and somewhere very far off, below the rain, below the hill, so faint it might have been the pipes, somebody knocked twice on a door, politely, and nobody in the room heard it but her." }
        ] },
        { t: "The chair's his, Fuuka. Whether he sits in it in March is his. And whether you're alone up here is yours. I'm not going to say it for either of you.", notes: 2, tally: { choose: 1, 'asks.fuuka-chenle': 'choose' }, then: [
          { n: "Fuuka took her hands out of her lap. She looked at Solar with her face open and stricken, the way you look at someone who has handed you back a present, and for one long second Solar watched it hurt her, and didn't take it back." },
          { s: 'fuuka', f: 'sad', t: "...That's. That's not what I asked." },
          { s: 'solar', f: 'neutral', t: "I know." },
          { n: "Chenle was very still. Then he pulled the pencil toward him, slowly, and in the top margin, beside the rubbed-out words, he wrote, in capitals, *MINE*, and next to it, after a second, he drew a small arrow, pointing at the good chair, and wrote under it *(HERS)*." },
          { s: 'chenle', f: 'neutral', t: "...That's fair. That's an annoying amount of fair. I'd have to pick. Every night. Like a ready check." },
          { s: 'fuuka', f: 'neutral', t: "And I'd have to... not be the one who asks." },
          { n: "She said it as if she were trying the sentence on, and it didn't fit, and she kept it on anyway, the way you keep wearing a borrowed coat in the rain. She picked up the pencil after him. Under *(HERS)* she wrote, very small, *(sorry)*. And then, before he could cross it out, she crossed it out herself." }
        ] },
        { t: "He has a home, Fuuka. If a door goes home, he goes through it.", notes: 2, tally: { 'asks.fuuka-chenle': 'no' }, then: [
          { s: 'fuuka', f: 'sad', t: "...Yes. Yes. Of course. I knew that. I'm sorry. I knew that, I just— I'm sorry." },
          { n: "Chenle didn't say anything. He took his headset off his neck, the spare, and looked at it, and then he leaned over and hung it on the arm of Fuuka's chair, carefully, by its band, so it wouldn't fall." },
          { s: 'chenle', f: 'neutral', t: "...Not yet, though. There's no door yet. Till there's a door I'm in the chair. That's not staying. That's just being on shift." },
          { s: 'fuuka', f: 'neutral', t: "On shift." },
          { s: 'chenle', f: 'neutral', t: "Like a tank. You hold till you can't. Then you swap." }
        ] }
      ] },
      { place: 'Iwatodai Dorm · Command Room', time: 'The Red Hour', bg: 'iwatodaidorm-commandroom', music: 'eerie', soft: true },
      { n: "She stayed. Nobody asked her to. At ten to twelve Fuuka put her headphones on and Chenle put his on, and Fuuka reached up to the shelf without looking and took down the other spare, the old one, the cracked band mended with electrical tape, and held it out to Solar without a word, and Solar put it on." },
      { n: "At twelve the town went red. The monitors went to the dark red they went to now, every screen, the hand-drawn map glowing on them like a map drawn in blood. The rain stopped in the air outside the window, hanging, every drop, a curtain of red beads. The hum of the room stopped. And in the headset, all at once, the town." },
      { n: "She'd never heard it before. Not like this. Hundreds of small sounds, all slow, like clocks in other rooms. The coffins. Every heart in Iwatodai going in its box." },
      { ifEvent: 'eqx-empty-chair', then: [
        { n: "Below her, the dorm: the fathers on the third floor, three, slow, one of them not asleep, she could tell somehow, a heart that wasn't sleeping. Koromaru at the door, fast, always fast. And in her ears, close, left and right, two voices, very low." }
      ], else: [
        { n: "Below her, the dorm, everyone she'd left on the stairs, slow. Koromaru at the door, fast, always fast. Down the hill, somewhere in the loud blank by the river, three fathers she couldn't pick out. And in her ears, close, left and right, two voices, very low." }
      ] },
      { s: 'chenle', f: 'neutral', t: "*Station. Bowl. Big Shop. Post.*" },
      { s: 'fuuka', f: 'neutral', t: "*The night man's asleep at the counter. Hagakure's dog. The poodle lady. Ken's corner, the lot's empty.*" },
      { s: 'chenle', f: 'neutral', t: "*Long.*" },
      { n: "Nothing on the bridge. Not quiet. Nothing. Like a hand over a mouth. And past it, along the river, the same, and the same, and the end of the pier the same, and the boarding house in the middle of all of it so loud and so blank she had to take the headset half off." },
      { s: 'fuuka', f: 'sad', t: "*...I'm listening for them. Every night I go all the way along the river and I listen. Solji-san. Miseon-san. Mrs. Kim. I'd know them. I'd know them anywhere.*" },
      { s: 'chenle', f: 'neutral', t: "*Me too. I go the same way. I do it after her. In case she missed a bit.*" },
      { s: 'fuuka', f: 'neutral', t: "*I know. I can hear you doing it. Every night. Two steps behind me.*" },
      { n: "They went along the river together, the two voices, slowly, the whole length of it, house by house, and Solar listened with them, and heard nothing, and nothing, and nothing, and at the end of the river street, where the map had no name, both of them stopped at once and said *Here* in the same breath, and it wasn't a callout. It was where the dorm was. They'd turned for home at the same moment without either of them saying." },
      { n: "Neither of them noticed. Solar noticed. She sat on the edge of the desk with the cracked headset on and the red light on her hands and listened to the two of them bring her home, *Tube, Hundred, Gate, Here*, the way they'd brought Jaemin home in July with his one shoe, and she thought about the cheap chair with the plastic peeled off its arms, and whether, in March, it would be pushed in or pulled out." },
      { s: 'fuuka', f: 'neutral', t: "*...You can keep that one. The old headset. The one with the tape.*" },
      { s: 'fuuka', f: 'sad', t: "*Then there's three of us. In the next room. If you ever want to know where we are.*" },
      { choose: [
        { t: "(Keep it.)", notes: 3, flag: 'eqx-fc-headset', then: [
          { n: "She kept it. She took it off at one, when the red went and the rain came down all at once against the glass as if it had been waiting, and held it in her lap, the tape warm from her hair, and didn't give it back, and Fuuka, watching her not give it back, smiled for the first time all evening, properly, with her eyes." }
        ] },
        { t: "(Hang it back on the shelf. Where you'll know where it is.)", notes: 2, then: [
          { n: "At one, when the red went and the rain came down all at once, she took it off and hung it back on its hook on the shelf, between the kettle and the tin, where it had always been. Fuuka watched her do it. Chenle watched Fuuka watch it." },
          { s: 'chenle', f: 'neutral', t: "...It's on the shelf. She knows where it is. That's the same thing. It's like a respawn point." }
        ] }
      ] },
      { n: "On the stairs, going down, she heard them behind her through the half-open door, not talking. Then the creak of the cheap chair as somebody leaned back in it, and the creak of the good chair as somebody else did too, and then, after a long time, very quietly, Fuuka's voice, saying *one, two, three*, counting the fathers in, and Chenle saying *four, five, six* where the mothers should have been, and then stopping, and neither of them saying anything else, and neither of them getting up." }
    ] }
  ]
});
