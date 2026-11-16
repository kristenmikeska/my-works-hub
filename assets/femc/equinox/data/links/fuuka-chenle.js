/* Persona 3: Equinox · Fuuka & Chenle · II The Priestess (a duo link: the two navigators). Link data
   (femc-equinox-game.html). Format: link fields in assets/femc/game/core.js ("Links" header), scene lines in
   assets/femc/game/scene.js.
   Written: rank 1 (after 7/16: Chenle came through on 7/13 on the thirteenth call, story-act2 'eqx-thirteenth'; their home
   is the dorm's command room on Monday, Wednesday and Friday evenings. Gated to 7/16, the Friday, not 7/14: the scene needs
   a red hour of practice listening after his arrival night). Ranks
   2–10 still to write. Shape: the stub fields from assets/femc/equinox/data/links.js (members / cast kept). Both speak in
   every rank.
   Shared memory: Solstice's Fuuka link (the dorm kitchen, "sorry", the radio from far away) and Chenle's (the Game Panic
   back row, always early, glasses pushed up with one finger, the grey hoodie, "back two steps", the pier in the cold he
   hates) and the Solstice dorm lobby, where he sat at the foot of the stairs and called the big turns with her. Since
   7/13 he hears her in his head "like a headset with the volume too low". Chenle navigates from his first block (7/26).
   The hook: two people who were each the only one who could hear, and now aren't. Chenle is making a callout map of the
   town; he hears something Fuuka doesn't.
   Reads: ifEvent eqx-third-hill (7/26: his first night navigating) and eqx-last-grain (7/27 morning).
   Flags this file sets: eqx-fc-map (Solar names a callout on Chenle's map). Nothing reads it yet. */
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
    ] }
  ]
});
