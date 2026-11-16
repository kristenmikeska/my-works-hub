/* Persona 3: Equinox · Junpei Iori · I The Magician. Link data (femc-equinox-game.html). Format: link fields in
   assets/femc/game/core.js ("Links" header), scene lines in assets/femc/game/scene.js.
   Written: rank 1 only (from 4/13; his home is the lounge couch on Sunday, Tuesday, Thursday and Saturday evenings). Ranks
   2–10 still to write. Shape: the stub fields from assets/femc/equinox/data/links.js (this file wins over the stub).
   Solstice's ranks are shared memory here (consommé chips, the April ball, the highlight reel, "I didn't get a later");
   nothing reads Solstice link standing. What happened to him last November stays his: he never names her.
   Flags this file sets: eqx-junpei-latch (rank 1: Solar gets him to latch his window in the red). Nothing reads it yet. */
(window.FEMC_GAME_LINKS ||= []).push({
  id: 'junpei', name: 'Junpei Iori', short: 'Junpei', arcana: 'Magician', numeral: 'I', from: 'Persona 3', kind: 'sees',
  romance: null, starts: '4/8', lodging: 'dorm',
  home: { area: 'dorm', spot: 'Lounge', slot: 'evening', days: [0, 2, 4, 6],
          hint: 'Evenings on Sunday, Tuesday, Thursday and Saturday, on the lounge couch nearest the TV.' },
  approach: "Junpei has claimed the couch nearest the TV with the full length of his body, a bag of chips balanced on his chest, a spiral notebook open on his knee and a baseball game on with the sound down, and he's yelling at it anyway.",
  cast: {},
  ranks: [
    { after: '4/13', title: '1: volume two', place: 'Iwatodai Dorm · Lounge', time: 'Evening', music: 'dorm', scene: [
      { bg: 'iwatodaidorm-livingroom-night-spring' },
      { n: "The lounge at eight in the evening had never in its life held this many people, and by some unspoken law they had all agreed to be somewhere else for an hour: Hanni and Hyein upstairs doing something with a hair iron that smelled faintly of burning, Yunjin out walking Koromaru, Haechan in the laundry room with his recorder, Akihiko on a run he'd described as short in a voice nobody believed, Mitsuru out on Group business with a folder under each arm. It left the couch nearest the TV, and the couch nearest the TV had Junpei on it, lengthwise, in a hoodie, with a bag of chips on his chest and a spiral notebook propped on one knee." },
      { n: "The Giants were losing on the TV with the sound off. He was yelling at them anyway, in a hoarse undertone, as if the volume being down meant they could only hear him if he whispered." },
      { s: 'junpei', f: 'happy', t: "Sol! Sit. Sit, sit. You're bench guy. You're on the bench. This is a two-person bench." },
      { s: 'solar', f: 'neutral', t: "You're lying on all of it." },
      { s: 'junpei', f: 'neutral', t: "Yeah, and I'm gonna move my legs, watch. Watch this. Magic." },
      { n: "He moved his legs. She sat. He put his feet in her lap almost immediately, in socks with a hole at the big toe, and she pushed them off, and he put them back, and she let him, because it was April, and he was Junpei, and there was a year in it." },
      { n: "He held the bag out without looking. Consommé. Of course it was." },
      { choose: [
        { t: "(Take exactly one chip.)", notes: 3, then: [
          { n: "She took exactly one. He watched her take it out of the corner of his eye, and when she ate it his whole face did something complicated and pleased and private, and he looked very hard at the Giants." },
          { s: 'junpei', f: 'happy', t: "One chip. *Sacred.* Some things don't change, man. Some things are eternal." }
        ] },
        { t: "(Take the whole bag.)", notes: 2, then: [
          { s: 'junpei', f: 'surprised', t: "Hey! Hey. Who *are* you. Who's this. Last year you ate one chip like it was a communion wafer." },
          { s: 'solar', f: 'happy', t: "Last year I didn't know if I liked them." },
          { s: 'junpei', f: 'happy', t: "...Okay, that's fair, that's actually so fair, give it back though." }
        ] },
        { t: "Still consommé.", notes: 2, then: [
          { s: 'junpei', f: 'neutral', t: "Still consommé. I'm a man of principle. A man of, like, two principles. This is one of them." }
        ] }
      ] },
      { n: "The notebook on his knee wasn't the betting book. The betting book lived in the kitchen drawer now under the takeout menus, where Mitsuru had confiscated it on the eighth and he'd un-confiscated it on the ninth. This one was new, ordinary, school issue, a blue cover not yet soft at the corners, and on the front in his big careless capitals it said HIGHLIGHT REEL, and under that, smaller, VOL. 2." },
      { s: 'junpei', f: 'neutral', t: "So. Real talk. Not a bit." },
      { s: 'junpei', f: 'serious', t: "The reel. Volume one. The director's cut. Where'd it go?" },
      { choose: [
        { t: "I don't know.", notes: 3, then: [
          { n: "It was the truth, and she hadn't known it was the truth until she said it. She'd had it. She remembered holding it, the soft blue cover against her chest on a cold roof. And then she remembered a lot of other things, three lives' worth, and in none of them could she find the moment she'd put it down." }
        ] },
        { t: "It's in another year. Like Akihiko's stopwatch.", notes: 2, then: [
          { s: 'junpei', f: 'sad', t: "...Yeah. That's what I figured. I just wanted somebody to say it out loud so I could be sad about it like a normal person." }
        ] },
        { t: "(Shake your head.)", notes: 2, then: [
          { n: "She shook her head. He watched her do it and nodded, slowly, the way you nod at a pitch you saw coming and swung at anyway." }
        ] }
      ] },
      { s: 'junpei', f: 'neutral', t: "That's okay. That's cool. It did its job, right? You read it on the train or wherever. You remembered stuff." },
      { s: 'junpei', f: 'happy', t: "So. Volume two. Same rules. I'm doing the remembering. The bad takes go in too. That's the director's cut, baby." },
      { s: 'junpei', f: 'neutral', t: "You wanna hear the first one? It's short. I'm not, like, a writer. I'm a guy with a pen." },
      { n: "He didn't wait for an answer. He held the notebook up at arm's length like a man reading a proclamation from a balcony and cleared his throat." },
      { n: "*April 7. Two in the morning. Everybody in the lounge. Seventeen people and a dog. Mitsuru-senpai counted us out loud like a teacher on a field trip and her voice went weird on the last number and she pretended it didn't. Nobody said anything. Sol had Koromaru's head in her lap and she was looking at all of us like she was trying to memorize us. Same, dude. Same.*" },
      { n: "He lowered the notebook. He was red to the ears and pretending not to be." },
      { choose: [
        { t: "Junpei. That's good.", notes: 3, then: [
          { s: 'junpei', f: 'flustered', t: "It's not *good*, it's a *record*, it's for *posterity*, don't make it a thing." },
          { s: 'junpei', f: 'happy', t: "...It's kinda good, right? The 'same, dude' part. I was really proud of the 'same, dude' part." }
        ] },
        { t: "What's the second one?", notes: 2, then: [
          { s: 'junpei', f: 'neutral', t: "Breakfast. The egg thing. Haechan's save. I gave it a four out of ten. Jihoon gave it a ten. Jihoon was being sarcastic. I was being *accurate*." }
        ] },
        { t: "(Hold your hand out for the pen.)", notes: 2, then: [
          { s: 'junpei', f: 'surprised', t: "Whoa, whoa. No. No guest directors. That's how you lose creative control." },
          { n: "He gave her the pen anyway, a second later, and she wrote one line under his, small, and he read it upside down and went very quiet and took the pen back and didn't say anything else about guest directors." }
        ] }
      ] },
      { n: "On the TV somebody hit into a double play. Junpei didn't yell. He watched the replay with the sound off, the ball skipping across the dirt in slow motion and the runner going down, and turned a page in the notebook, and Solar saw that the back half of it had been turned into something else." },
      { n: "A grid. Ruled by hand, crooked, with a ruler that had slipped. Names down the side, all of them, the whole dorm, the guesthouse, Shinjiro at the bottom in a box of his own. Dates across the top. And in every square, every morning since the eighth, a small, careful tick." },
      { s: 'junpei', f: 'flustered', t: "Okay, don't look at that part. That's not the reel. That's, uh. Admin." },
      { s: 'solar', f: 'neutral', t: "You're taking roll." },
      { s: 'junpei', f: 'serious', t: "...Every morning. At breakfast. I just look round the table and do it in my head and then I come up here and do it on paper so it's, like, official. Mitsuru-senpai does it at two a.m. I do it at seven. Between us we got the clock covered." },
      { s: 'junpei', f: 'serious', t: "I didn't get a later, last year. You know that. That's the only part I ever said. So this year I'm just gonna, like. Check. Every morning. That everybody got one." },
      { choose: [
        { t: "(Put your hand on the grid. On all the ticks.)", notes: 3, then: [
          { n: "She put her hand flat on the page, over the names and the little crooked ticks, the way you'd put your hand on a dog's side to feel it breathe. Junpei looked at her hand there for a long moment and swallowed and looked back at the Giants." },
          { s: 'junpei', f: 'sad', t: "...Yeah. Yeah. That's all of 'em. I counted this morning. They're all there." }
        ] },
        { t: "Put yourself on it.", notes: 3, then: [
          { s: 'junpei', f: 'surprised', t: "Huh?" },
          { s: 'solar', f: 'neutral', t: "You're not on the list. Everyone's on it but you." },
          { n: "He looked. He hadn't noticed. She watched him not have noticed, and then notice, and the joke he reached for didn't come, and he wrote *Junpei* at the very bottom, under Shinjiro, smaller than the rest, and ticked it, hard, and didn't look at her." }
        ] },
        { t: "That's a lot to carry every morning.", notes: 2, then: [
          { s: 'junpei', f: 'neutral', t: "Nah. It's a notebook. It weighs like nothing. I carry way heavier stuff. I carry Ken's homework sometimes." }
        ] }
      ] },
      { n: "Upstairs something thumped, and Hyein shrieked and then laughed, and Hanni said something sharp about hair irons, and the house settled again. Junpei listened to all of it with his head tipped back on the arm of the couch, the way you'd listen to rain on a roof you'd fixed yourself." },
      { s: 'junpei', f: 'neutral', t: "Can I tell you a dumb thing? Not reel stuff. Like, off the record." },
      { s: 'junpei', f: 'sad', t: "Everybody came back. Right? Everybody who held on. They just, like. Came. You, and Haechan, and all your guys, and the girls, and Yunjin-san who's honestly a little scary. Through a hole in the dark. Because they held on." },
      { s: 'junpei', f: 'sad', t: "So I've been sleeping with my window unlatched." },
      { n: "He said it to the ceiling. Lightly. In his joke voice. It wasn't a joke and they both heard it not be one." },
      { s: 'junpei', f: 'sad', t: "Somebody I knew. She never used doors. Like, ever. She'd just be on the windowsill, all of a sudden, drawing. It used to scare the crap out of me." },
      { s: 'junpei', f: 'neutral', t: "And Hanni's rule is doors. Nobody opens a door in the red. It doesn't say anything about windows. I checked. I read it like four times. It's a really specific rule." },
      { s: 'junpei', f: 'sad', t: "I know it's stupid. I know she's not— I know. I just keep thinking, if people can come back. If holding on's enough. Then I held on really hard, man. I held on so hard." },
      { n: "The red would come in four hours. It came in through every window in this house like water rising in a glass, and it would come through his, unlatched, onto a floor where a boy in a hoodie lay awake with his eyes on the sill, waiting for someone to be sitting on it, drawing. Solar felt that go down her back, a single cold line, the way she'd felt the knocks." },
      { choose: [
        { t: "Latch it tonight. For me.", notes: 3, flag: 'eqx-junpei-latch', then: [
          { s: 'junpei', f: 'sad', t: "...For you." },
          { s: 'junpei', f: 'neutral', t: "Okay. Yeah. Okay. For you. That's a good loophole. If it's for you it's not, like, me giving up." },
          { n: "He went upstairs right then, in the middle of the inning, and she heard his window, the old sash catching and then the latch going over with a small hard click, and he came back down and lay on the couch again with his feet in her lap and didn't say anything for a long time, and she didn't make him." }
        ] },
        { t: "It's not stupid to hope.", notes: 2, then: [
          { s: 'junpei', f: 'sad', t: "Yeah. I know. That's what makes it so bad. If it was stupid I could stop." },
          { n: "He didn't say he'd latch it. She didn't ask him to. Later, going up to bed, she passed his door, and it was open a crack, and the room beyond it was dark, and the window was a pale rectangle at the end of it with the curtain moving very slightly in a draft that shouldn't have been there." }
        ] },
        { t: "(Don't say anything. Stay on the bench.)", notes: 2, then: [
          { n: "She stayed on the bench. She didn't say anything. After a while he bumped her knee with his foot, once, the thank-you he still couldn't get his mouth around, and turned the sound on the TV up two notches, just enough to have something to listen to that wasn't the window." }
        ] }
      ] },
      { s: 'junpei', f: 'neutral', t: "And hey. While we're off the record." },
      { s: 'junpei', f: 'neutral', t: "Aki-senpai's being weird. You noticed? He keeps not saying stuff. Like, starting to say stuff and then swallowing it. He did it at breakfast like three times. He looks like a guy holding in a sneeze." },
      { s: 'junpei', f: 'happy', t: "Somebody's gonna have to say it for him one of these days. Whatever it is. Loud. I'm just putting it out there. I've got a loud voice. It's a resource." },
      { n: "On the TV the Giants came back in the ninth, with the sound up now, and Junpei sat bolt upright and yelled so loud that Mitsuru, coming in at the front door at that exact second, stopped in the hall with her keys in her hand and said *Iori* in a voice like a dropped tray, and he said sorry, senpai, sorry, but *look*, and she looked, and for once in her life she didn't tell him to turn it down." },
      { n: "Before bed he wrote something in the reel, quickly, with his arm curled round the page like a kid in an exam. Solar didn't see what. She saw him write the date. She saw him tick the grid, all the way down, every name, and close the book, and hold it shut for a second on his knee with both hands, the way you'd hold a door shut against wind." }
    ] }
  ]
});
