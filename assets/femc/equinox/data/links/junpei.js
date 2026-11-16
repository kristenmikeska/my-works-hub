/* Persona 3: Equinox · Junpei Iori · I The Magician. Link data (femc-equinox-game.html). Format: link fields in
   assets/femc/game/core.js ("Links" header), scene lines in assets/femc/game/scene.js.
   Written: ranks 1–3 (from 4/13; his home is the lounge couch on Sunday, Tuesday, Thursday and Saturday evenings). Ranks
   4–10 still to write. Shape: the stub fields from assets/femc/equinox/data/links.js (this file wins over the stub).
   Solstice's ranks are shared memory here (consommé chips, the April ball, the highlight reel, "I didn't get a later");
   nothing reads Solstice link standing. What happened to him last November stays his: he never names her.
   Flags this file sets: eqx-junpei-latch (rank 1: Solar gets him to latch his window in the red). Nothing reads it yet.
   Rank 2 (after 5/1, after his three quiet days): reads eqx-junpei-latch. Sets nothing.
   Rank 3 (after 6/6, the lounge and the dorm street at dusk; branches on eqx-last-grain, eqx-hunted, eqx-aigis-arai)
   records his ask: tally asks.junpei (+ cakes / choose). Sets nothing else. */
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
    ] },
    { after: '5/1', title: '2: season two', place: 'Iwatodai Dorm · Lounge', time: 'Evening', music: 'dorm', scene: [
      { bg: 'iwatodaidorm-livingroom-night-spring' },
      { n: "He was back on the couch. That was the first thing, and for a second it was the only thing, and Solar stood in the lounge doorway and let herself have it: Junpei, lengthwise, hoodie, socks with the hole at the big toe, a bag of consommé chips on his chest, the Giants on with the sound off. As if the couch had been holding his shape for three days and had simply let him back into it." },
      { n: "He'd been in his room since the twenty-ninth. He'd come down for meals and eaten them and gone back up, and he'd said *thanks* and *night* and *yeah* and nothing else, not one joke, not one bit, for three days, and the house had gone so quiet without him that Hanni had started humming in the kitchen just to have a sound in it. Tonight the TV was on. Tonight he was yelling at it again, in the hoarse undertone, and if it was a little too loud, a little too quick, nobody in the house was going to say so." },
      { s: 'junpei', f: 'happy', t: "Sol! Bench. You're on the bench. The bench has been empty, man. The bench has been in a dark place." },
      { choose: [
        { t: "(Sit. Let him put his feet in your lap.)", notes: 3, then: [
          { n: "She sat. His feet arrived in her lap before she'd finished sitting, and she left them there, and he let out a breath through his nose that he probably thought she didn't hear, long and slow, like air going out of a tire you'd been driving on flat for days." }
        ] },
        { t: "Welcome back.", notes: 3, then: [
          { s: 'junpei', f: 'neutral', t: "...I didn't go anywhere. I was upstairs. I was, like, eleven meters away." },
          { s: 'junpei', f: 'sad', t: "Thanks though. Yeah. Thanks." }
        ] },
        { t: "Who's winning?", notes: 2, then: [
          { s: 'junpei', f: 'happy', t: "Nobody. That's baseball. Nobody wins, everybody suffers, and then there's another game tomorrow. It's beautiful. It's the most honest sport." }
        ] }
      ] },
      { n: "On his knee was not the blue notebook. It was the other one, the one that lived in the kitchen drawer under the takeout menus, its cover gone soft and furry at the corners, and on the front in marker, with a lot of underlining, *WHO GETS CAUGHT FIRST: SEASON TWO.*" },
      { s: 'junpei', f: 'happy', t: "So. Business. The book's back open. I'm taking bets. I'm extending a line of credit, because nobody here has any yen, because nobody here has a job, because half of you are technically fictional." },
      { s: 'junpei', f: 'neutral', t: "Current odds. Hanni, caught sleeping in the hallway by somebody who isn't us. Two to one. Haechan and you, caught on the roof by Mitsuru-senpai. Evens. Jihoon and Jungwon both caught standing outside the guesthouse at the same time pretending they're just getting air. That one's eight to one, but only because it's already happened twice and I'm being nice." },
      { choose: [
        { t: "Put me down for Hanni. She'll get caught by Aigis.", notes: 2, then: [
          { s: 'junpei', f: 'happy', t: "Aigis doesn't count! Aigis knows everything! You can't get caught by a lighthouse!" },
          { n: "He wrote it down anyway. *Sol, 50 yen (imaginary), Hanni by Aigis.* He drew a small lighthouse next to it." }
        ] },
        { t: "Take me and Haechan off the board.", notes: 3, then: [
          { s: 'junpei', f: 'flustered', t: "Whoa. Whoa! Why? Is there something to *catch*? Is there information? Do you have insider information? That's illegal, that's insider trading—" },
          { s: 'solar', f: 'flustered', t: "Junpei." },
          { s: 'junpei', f: 'happy', t: "Evens to three to two. Odds just moved. I'm a professional, Sol. I read the market." }
        ] },
        { t: "What are your odds on you?", notes: 2, then: [
          { s: 'junpei', f: 'neutral', t: "Me? Who'd catch me? Doing what? I'm on a couch. The couch is very well documented." },
          { s: 'junpei', f: 'sad', t: "...I'm not on the board. I'm the house. The house doesn't bet on itself. That's like, rule one." }
        ] }
      ] },
      { n: "He turned the page. Past the odds, past three pages of stupid bets in five different people's handwriting, to the back, where the grid was. The roll call. Names down the side, dates across the top, a tick in every square." },
      { n: "He'd moved it out of the reel and into the betting book. Solar didn't ask why. She could see why. The reel was for keeping. The betting book was for things that might come out either way." },
      { n: "At the bottom of the guesthouse names, under Cherry, in pencil, in his big careless capitals gone small and careful, somebody had added a line. *TANABE-SAN (NIGHT GUY).* There was a tick on the twenty-fifth. A tick on the twenty-sixth. The twenty-seventh. The twenty-eighth." },
      { n: "The square for the twenty-ninth was empty. So was the thirtieth. So was today. Three empty squares in a row of ticks, and the eraser marks round the edge of the first one, where somebody had tried to rub the whole line out, and stopped, and left it gray and smudged and still there." },
      { s: 'junpei', f: 'sad', t: "He made Jihoon rice balls. Every night at eight. I was over there a bunch. He made me one too, on the twenty-fifth, 'cause I was standing there looking at Jihoon's like a dog. Salmon. It was really good." },
      { s: 'junpei', f: 'sad', t: "So I put him on. You know. I put everybody on. I figured, he's there every night, he counts." },
      { s: 'junpei', f: 'serious', t: "And I can't take him off. I tried. I can't tick him either. I just look at it every morning. Three boxes." },
      { choose: [
        { t: "(Take the pencil. Draw a small line through the boxes. Gently.)", notes: 3, then: [
          { n: "She took the pencil out of his fingers and drew a line through the three empty squares, thin, careful, not a cross-out, just a line, the way you'd mark a page in a hymn book. Junpei watched her do it. He didn't stop her." },
          { s: 'junpei', f: 'sad', t: "...Yeah. Okay. That's the right thing. That's better than the eraser. You can still read his name." }
        ] },
        { t: "Leave it. You don't have to do anything with it.", notes: 3, then: [
          { s: 'junpei', f: 'sad', t: "Yeah? I can just. Leave it?" },
          { s: 'solar', f: 'neutral', t: "You can just leave it." },
          { n: "He nodded, slowly, at the page. Something in his jaw let go a notch. He put his thumb over the three boxes, flat, and kept it there a moment, the way you'd put your hand on somebody's shoulder at a funeral when you didn't know them well enough for more." }
        ] },
        { t: "It's not your fault, Junpei.", notes: 2, then: [
          { s: 'junpei', f: 'serious', t: "I know. I was with Aigis at the guesthouse all night. We had the lobby. We had every door. I heard it knock on his. I heard him not answer. Then I heard him not answer some more." },
          { s: 'junpei', f: 'sad', t: "I know it's not my fault. That's the thing about knowing stuff. It doesn't, like. Help." }
        ] }
      ] },
      { s: 'junpei', f: 'neutral', t: "Okay. Can I show you a thing. Upstairs. It's dumb. It's gonna sound dumb." },
      { place: 'Iwatodai Dorm · Junpei\'s Room', time: 'Evening', bg: 'iwatodaidorm-hallway', soft: true },
      // BG: junpei-room-night — a messy boy's dorm room at night lit by one desk lamp: baseball posters, a cap on the bedpost, clothes on a chair, a sash window at the end with its curtain pushed aside.
      { n: "His room smelled of deodorant and old socks and the chips, and it was exactly as messy as she'd have bet, clothes on the chair and a cap on the bedpost and a baseball poster coming unstuck at one corner. The desk lamp was on. The curtain at the end of the room was pushed all the way aside and tied back with what looked like a shoelace, so the window was bare." },
      { n: "He didn't turn the big light on. He went to the window and stood beside it and pointed, not at the glass, but at a place on it, about where a face would be if someone stood outside." },
      { s: 'junpei', f: 'serious', t: "The twenty-eighth. I was at the guesthouse. Mitsuru-senpai sent me. So my room was empty all night. Nobody in here." },
      { s: 'junpei', f: 'serious', t: "I came back the next day at noon. After. And I came up here and I just wanted to lie down, and I saw it." },
      { n: "On the outside of the glass, at knuckle height, there were two marks. Small. Round. Soft-edged, the size of a fingertip, a little pale, as if someone had touched the window with a hand that wasn't quite clean. Side by side. A finger's width apart. The kind of marks you'd leave if you'd stood at a window and knocked. Twice. Politely." },
      { n: "They were on the outside. The window was on the third floor. There was nothing under it but a straight drop to the yard and a drainpipe that wouldn't have held a cat." },
      { ifFlag: 'eqx-junpei-latch', then: [
        { s: 'junpei', f: 'sad', t: "I latched it. For you. Remember? I said if it was for you, it wasn't me giving up. It was latched. All night. It was latched when I got back." },
        { s: 'junpei', f: 'serious', t: "So something stood out there, three floors up, and knocked on my window. Twice. And the window was latched. And it went away." },
        { s: 'junpei', f: 'sad', t: "And I keep thinking. If it hadn't been latched. If I'd been here. If it had said a name." },
        { n: "He didn't say which name. He never did. He looked at the two marks with an expression Solar had seen on him once before, a year ago, at the end of November, and had hoped never to see again." }
      ], else: [
        { s: 'junpei', f: 'serious', t: "It was open. I left it open. I left it open every night, like I told you. It was open all night on the twenty-eighth with nobody in here." },
        { s: 'junpei', f: 'serious', t: "And something stood out there, three floors up, and knocked. On the glass. Of an open window. Twice." },
        { s: 'junpei', f: 'sad', t: "Who does that, Sol? Who knocks on a window that's open? It could've just come in. Nothing was stopping it. It stood there and knocked like it was waiting to be asked." },
        { n: "He looked at the two marks for a long moment. Then he reached past them and pulled the sash down, hard, and turned the latch over, and the small hard click of it went through the room like something breaking." },
        { s: 'junpei', f: 'sad', t: "...She never knocked. Ever. She'd have just been on the sill. That's how I know it wasn't her. That's the only way I know." }
      ] },
      { choose: [
        { t: "(Put your hand flat on the inside of the glass, over the marks.)", notes: 3, then: [
          { n: "She put her palm flat on the inside of the glass, over the two marks. The window was cold. Colder than the evening. Cold the way the dorm's front-door handle had been cold, and under her palm, for a second, it felt as if the glass were very slightly warmer at those two points than everywhere else, the way a seat is warm when somebody's just got up from it." },
          { n: "She took her hand away. Junpei was watching her, and he didn't ask what she'd felt, and she didn't tell him." }
        ] },
        { t: "We should clean them off.", notes: 2, then: [
          { s: 'junpei', f: 'neutral', t: "I know. I keep going to. I got the cloth and everything. It's on the desk." },
          { s: 'junpei', f: 'sad', t: "I just. It's like the boxes. If I clean it off, it's like it didn't happen, and then I'm the only one who knows it did. I'd rather it was on the window. At least the window knows." }
        ] },
        { t: "Show Mitsuru. Show Aigis.", notes: 2, then: [
          { s: 'junpei', f: 'neutral', t: "Aigis already saw. She came in, looked at it for, like, one minute, wrote something in her notebook and left. Didn't say a word. That was so much worse than if she'd said something." }
        ] }
      ] },
      { n: "He sat down on the end of his bed. The springs complained. He put his elbows on his knees and looked at the floor between his socks." },
      { s: 'junpei', f: 'neutral', t: "Can I say a dumb thing? Off the record?" },
      { s: 'junpei', f: 'sad', t: "Every morning I do the grid. And every morning it's full. Everybody. Two buildings full of people. You. Aki-senpai and Shinji-senpai both alive, in the same town. Haechan, who I like now, which is weird. All your guys from your other lives. All here." },
      { s: 'junpei', f: 'sad', t: "And I think. Why would anybody go anywhere. Like, ever. What if nobody had to. What if the grid could just stay full." },
      { n: "He said it to the floor, softly, the way you'd say a wish you were embarrassed to have, and it went into the room and sat there between them, warm, and reasonable, and it was the most reasonable thing anyone had said all week, and the back of Solar's neck went cold anyway, the single line, nape to spine." },
      { choose: [
        { t: "It's a nice idea.", notes: 2, then: [
          { s: 'junpei', f: 'neutral', t: "Right? It's a really nice idea. That's what I keep thinking. It's so nice." },
          { n: "He smiled at the floor. It was a real smile. That was the worst part of it, she'd think later. It was completely real." }
        ] },
        { t: "People get to go, Junpei. That's theirs.", notes: 3, then: [
          { s: 'junpei', f: 'sad', t: "...Yeah. Yeah, I know. I'm not saying lock the doors. I'm just saying I'd like a later where nobody has to take a later somewhere else." },
          { s: 'junpei', f: 'neutral', t: "That's dumb. I said it was dumb. Strike it from the record." }
        ] },
        { t: "(Don't answer. Sit down next to him.)", notes: 2, then: [
          { n: "She sat down on the bed beside him. The springs complained again. He leaned, a little, until his shoulder was against hers, and they sat there in the lamplight with the two marks on the dark window at the end of the room like a pair of eyes that had been painted on and forgotten." }
        ] }
      ] },
      { s: 'junpei', f: 'neutral', t: "Aki-senpai, though. That's my other off-the-record." },
      { s: 'junpei', f: 'serious', t: "Last night I came down for water at like one, after the red, and he was on the stairs. Just sitting. And his hand was on the banister, the taped one, and it was closed. Like, closed closed. On the rail." },
      { s: 'junpei', f: 'neutral', t: "He couldn't open it. He was just sitting there looking at it like it was somebody else's. So I sat down and did it for him. One finger at a time. He let me. Neither of us said anything." },
      { s: 'junpei', f: 'happy', t: "Then he said if I told anyone he'd put me through the wall. So. Off the record. You didn't hear it from me. You heard it from, like, a ghost." },
      { place: 'Iwatodai Dorm · Lounge', time: 'Night', bg: 'iwatodaidorm-livingroom-night-spring', soft: true },
      { n: "Back downstairs the Giants had lost. He didn't yell about it. He sat on the couch with the reel on his knee and wrote in it, quickly, curled over the page, and this time he tipped the notebook so she could read it if she wanted to, which was the same as asking her to." },
      { n: "*May 1. Back on the couch. Sol on the bench. Odds are holding. Grid full except one. Not erasing it.*" },
      { n: "And under that, smaller, after a pause in which she watched the pen hover and the joke not come, and come, and go again." },
      { n: "*Note to self. Windows are doors.*" },
      { n: "He closed the book. He held it shut on his knee with both hands. Then he got up and went into the kitchen and she heard the drawer open, the takeout menus, and the betting book go back underneath them, and the drawer shut, and him stand there a second in the kitchen in the dark, not moving, before he came back and turned the sound on the TV up for the post-game, loud, louder than he needed, all the way through to the red." }
    ] },
    { after: '6/6', title: '3: the rounds', place: 'Iwatodai Dorm · Lounge', time: 'Evening', music: 'dorm', scene: [
      { bg: 'iwatodaidorm-livingroom-night-summer' },
      { n: "The lounge had gone damp the way the whole town had gone damp, the wet heat of early summer sitting in the cushions and the curtains and the pages of every magazine on the coffee table, so that they curled up at the corners in a way that made them look like they were trying to leave. The ceiling fan turned. It didn't help. It moved the warm air from one side of the room to the other and back again, very patiently, like someone stirring a pot that would never boil." },
      { n: "Junpei was on the couch. Of course he was. But he wasn't lying down, and that was the first thing she noticed; he was sitting up, hunched forward with his elbows on his knees, and the betting book was open on the coffee table in front of him, and beside it, held open with the TV remote, was a second notebook she'd never seen, cheap, green, with a cartoon frog on the cover." },
      { s: 'junpei', f: 'happy', t: "Sol. Perfect. Perfect timing. Sit. I need a witness. I need, like, an auditor." },
      { choose: [
        { t: "An auditor for what?", notes: 2, then: [
          { s: 'junpei', f: 'neutral', t: "For the books, man. Plural. I've got books now. I'm a guy with books." }
        ] },
        { t: "(Sit down and put your feet in his lap for once.)", notes: 3, then: [
          { s: 'junpei', f: 'surprised', t: "Whoa. Whoa! Role reversal! Is this— are we doing a bit? Is this a bit?" },
          { n: "She left her feet where they were. He looked down at them, at her socks, which had no holes in them, and then up at her, and his whole face went soft and stupid for a second before he got it back under control." },
          { s: 'junpei', f: 'happy', t: "...Okay. Okay, this is fine. This is a fair trade. I'll allow it." }
        ] },
        { t: "Is that a frog?", notes: 2, then: [
          { s: 'junpei', f: 'flustered', t: "It was the last one at the konbini, okay? It was the frog or a notebook with a horse on it that said BELIEVE. I'm not a BELIEVE guy. I'm a frog guy, apparently." }
        ] }
      ] },
      { n: "The roll-call grid in the back of the betting book had grown. Shinjiro wasn't in a box at the bottom anymore. He'd been moved up, rewritten into the dorm names between Mitsuru and Yukari in fat capitals that had been gone over twice, and in every square since the twenty-ninth of May there was a tick, and beside the first one, small, Junpei had drawn a frying pan." },
      { s: 'junpei', f: 'happy', t: "Look at that. Look at that column. That's a full column. Every day. Shinji-senpai at the stove at six-thirty and me at the table at seven going tick, tick, tick, tick, like a— like a guy at a train station with a clicker." },
      { s: 'junpei', f: 'neutral', t: "But that's the old book. That's the house. The new book's the town." },
      { n: "He opened the frog notebook. Inside, ruled in the same slipping, crooked way, was another grid, and the names down the side of this one weren't names at all, mostly. *HAGAKURE GUY (OLD).* *KONBINI NIGHT GUY (RED HAIR).* *LADY W/ THE DOG AT THE STATION (POODLE?).* *HAYASHI-SAN (PIER) (WAVED AT ME ONCE).* *BLUE ROOF, 3RD HOUSE DOWN.*" },
      { n: "The squares were ticked. Not every one. Here and there one was empty, and someone had written *rained, didn't go* in the margin beside it, apologetically, as if the notebook might mind." },
      { ifEvent: 'eqx-last-grain', then: [
        { n: "The list went on for two pages now. She could see where it had started, in June, a short neat column of five, and where it had changed, all at once, on the twenty-seventh of July, into something longer and faster and less careful, names crammed in sideways up the margins, as if he'd sat down one morning and tried to write down every single face he'd ever seen in Iwatodai before he could forget one." },
        { n: "At the very bottom of the betting book's grid, under the guesthouse names, was the one she'd known would be there. *Suemitsu.* Written in pen. Crossed out in pen, one hard line. And then, beside the crossing-out, in pencil, smaller, as if he'd come back later and felt bad: *(sorry)*." },
        { s: 'junpei', f: 'sad', t: "He wasn't ours. I said that, right? At breakfast. I said it like it meant something. Like if he'd been on the list I'd have— I don't know. Noticed. Done a thing." },
        { s: 'junpei', f: 'serious', t: "So now everybody's on the list. That's the new rule. If I see you twice, you're on. I don't care if I know your name." }
      ], else: [
        { s: 'junpei', f: 'neutral', t: "It's the rounds. I do 'em on the way back from school. It takes like twenty minutes if the light at the station's nice to me." },
        { s: 'junpei', f: 'sad', t: "I just kept thinking about Tanabe-san. How he was only on the list four days. How I only put him on because he gave me a rice ball. Like, what about everybody who never gave me a rice ball? They count too. They're just not on paper." }
      ] },
      { n: "He tapped the last name on the first page with his pen. *BLUE ROOF, 3RD HOUSE DOWN.*" },
      { s: 'junpei', f: 'neutral', t: "You wanna come? On the rounds? It's not far. It's the last one. I didn't get to it today, 'cause Ken needed help with his fractions and fractions are a nightmare, honestly, I don't know how they're legal." },
      { ifEvent: 'eqx-hunted', then: [
        { s: 'junpei', f: 'happy', t: "And we're two. Two's legal. Mitsuru-senpai can't say anything. I'll even sign the rota. Look. J plus S. That's a box." }
      ] },
      { place: 'Iwatodai · The Dorm Street', time: 'Evening', bg: 'outside-daytime-neighborhood', music: 'tender', soft: true },
      // BG: iwatodai-dorm-street-dusk — a quiet residential slope at dusk, small houses with tiled roofs and potted plants, telephone wires, streetlights just coming on, one house near the bottom with a blue roof.
      { n: "The street outside was still warm from the day, the asphalt giving it back up through the soles of her shoes, and the sky over the river was the color of weak tea going dark at the edges. Somewhere a TV was on with the window open, a quiz show, a studio audience laughing at something every eleven seconds, like a tide." },
      { n: "Junpei walked the way he always walked, too loose, hands jammed in his hoodie pocket, but he looked at every house. She'd never seen him do that. He looked at every gate and every window and every bicycle chained to every drainpipe, quickly, the way you'd glance at a clock, and she understood after the third house that he was checking. That this was what the rounds were. A boy walking down a street, making sure it was still there." },
      { n: "The third house at the bottom of the hill had a blue tiled roof gone pale with years of sun, and a nameplate by the gate that said ARAI in brass worn soft at the edges, and a step crowded with potted plants, geraniums and something tall and herby and a single tomato plant tied to a chopstick with string." },
      { n: "On the step, in the middle of the plants, there was a saucer. White, with a blue rim. On the saucer there was a rice cake, round and pale and perfect, dusted with something fine and white that caught the streetlight just coming on." },
      { ifFlag: 'eqx-aigis-arai', then: [
        { n: "She'd stood at this gate before, with Aigis, in the spring, and said something to the woman behind that curtain about not leaving things on the step. The woman had listened, and nodded, and thanked her very kindly. The saucer was still here. It had been here every night since. Nobody had ever been able to tell Mrs. Arai anything she didn't already want to know." }
      ] },
      { n: "Solar stopped. Junpei didn't. He walked right up to the gate the way you'd walk up to a friend's, and leaned on it, and looked at the window to the left of the door, where a lamp was on behind a lace curtain and a small shape was moving about." },
      { s: 'junpei', f: 'neutral', t: "That's her. Arai-san. She's like a hundred. She's not, she's like seventy-something, but she moves like she's a hundred and she's not sad about it. She waters those plants twice a day. She gave me a tomato once. It was a bad tomato. I ate it in front of her and said it was the best tomato of my life." },
      { n: "The shape in the window saw them. The curtain moved aside, and a small old woman in a cardigan looked out, and saw Junpei at her gate, and lifted her hand, and waved, the way you'd wave to a grandson. Junpei waved back with his whole arm." },
      { n: "Then he took the frog notebook out of his pocket and ticked the square, there on the street, against the gatepost, carefully, and only then did his shoulders come down." },
      { s: 'junpei', f: 'neutral', t: "She leaves that out every night. The rice cake. For her son. She told me. He comes home late, she said. Real late. A lady by the river told her if you leave something out, they know they're expected." },
      { s: 'junpei', f: 'sad', t: "...He's not coming home, Sol. I don't think. Nobody comes to that house. I've been past at, like, every time of day. It's just her and the plants." },
      { s: 'junpei', f: 'neutral', t: "But the saucer's always empty in the morning. Every morning. Licked clean. So something's eating it. A cat, probably. Gotta be a cat." },
      { n: "He said it lightly. He said it in the joke voice. He was looking at the saucer, though, and he didn't look away from it when he said *cat*, and she watched him not believe himself, and decide to, and put the notebook back in his pocket." },
      { choose: [
        { t: "(Take the rice cake off the saucer.)", notes: 2, then: [
          { n: "She reached over the gate. Before her fingers got there Junpei caught her wrist, not hard, and held it, and shook his head, once, and his face was very serious." },
          { s: 'junpei', f: 'serious', t: "Don't. It's hers. It's for her kid. If it's gone and she didn't see a cat, she'll think he came and didn't knock." },
          { n: "He let go. She took her hand back. The rice cake sat on its saucer between the geraniums, pale, round, patient, with the streetlight on it, and neither of them looked at it again." }
        ] },
        { t: "It could be a cat.", notes: 2, then: [
          { s: 'junpei', f: 'happy', t: "Right? Right. It's a cat. There's like a thousand cats in this town. Fat ones. Probably one of them's just really into mochi." },
          { n: "They stood there a second longer than they needed to. No cat came. The quiz show audience laughed, somewhere up the hill, at nothing." }
        ] },
        { t: "You came all the way down here to see her wave.", notes: 3, then: [
          { s: 'junpei', f: 'flustered', t: "It's on the way. Kind of. If you go the long way. Which I do." },
          { s: 'junpei', f: 'neutral', t: "...Yeah. Every day. She's the last one. If she waves, I can go home and eat." }
        ] }
      ] },
      // CG: eqx-the-rounds — dusk on a quiet residential street; a boy in a hoodie leaning on a low gate, ticking a cheap green notebook against the gatepost; a small blue-rimmed saucer among potted plants on the step; a lamp behind a lace curtain.
      { n: "Halfway back up the hill Akihiko passed them going down, running, the even flat slap of his shoes on the asphalt, and raised his taped hand without breaking stride, and Junpei raised the frog notebook back at him like a salute, and then, when Akihiko had gone round the corner, ticked him too." },
      { place: 'Iwatodai Dorm · Lounge', time: 'Night', bg: 'iwatodaidorm-livingroom-night-summer', music: 'dorm', soft: true },
      { n: "The lounge was empty when they got back, which was so rare it felt staged. Somebody had left a light on in the kitchen. Somebody had left a pot soaking in the sink, and the fan was still turning, moving the warm air around for nobody." },
      { n: "Junpei sat down on the couch with both notebooks on his knees, one on top of the other, and didn't open either of them. He sat there with his hands flat on the frog, and Solar sat down next to him, and the springs complained, and he didn't make a joke about the springs." },
      { s: 'junpei', f: 'neutral', t: "Can I tell you a thing? Not off the record. On the record. I want it on the record." },
      { s: 'junpei', f: 'serious', t: "Remember what I said? About the grid staying full? I said it was dumb. I said strike it." },
      { s: 'junpei', f: 'serious', t: "I don't think it's dumb anymore. I think it's a plan." },
      { n: "He said it carefully, the way he'd say something he'd practised in the shower. He wasn't looking at her. He was looking at the TV, which was off, at his own reflection in the black glass of it, a boy on a couch with notebooks on his knees and a girl beside him, small and dark and very still." },
      { s: 'junpei', f: 'serious', t: "Nobody leaves. That's it. That's the whole plan. You don't go back. Haechan doesn't go back. Your guys don't go back. The girls, the new ones, they don't go back. Everybody just stays, and I've got the books, and every morning I go tick, tick, tick, tick, and every square's got a tick in it, forever. No more empty boxes. No more crossing out." },
      { s: 'junpei', f: 'sad', t: "I'm good at holding on, Sol. I'm really good at it. Ask anybody. I held on to a window for a year." },
      { s: 'junpei', f: 'neutral', t: "So just— tell me that's okay. That's all I want. Tell me I can hold on to all of it. If you say it's okay, I'll stop feeling weird about it and just do it." },
      { n: "The fan turned. In the black glass of the TV, the girl beside him hadn't moved. The house was so quiet she could hear the pot in the kitchen sink tick as it cooled, and the dog, somewhere down the hall, turn over in his sleep against the front door with a long sigh, and her own heart, which had started going faster at the word *forever* and hadn't asked her permission." },
      { choose: [
        { t: "Hold on to all of it. Keep us all on the grid.", notes: 3, tally: { cakes: 1, 'asks.junpei': 'yes' }, then: [
          { n: "He breathed out. It went on a long time, like the one on the couch in May, a tire going flat that he'd been driving on for months, and he grinned, the real one, the one that took up his whole face and made him look about twelve." },
          { s: 'junpei', f: 'happy', t: "...Yeah? Yeah. Okay. Okay! Then that's the plan. That's official. That's on the record." },
          { n: "He opened the betting book to the grid and took his pen and drew, very carefully, along the top row past the last date, past the edge of the page, an arrow, and off the edge of the paper onto the coffee table in a faint blue line he'd get yelled at for in the morning. Then he looked at it, pleased, and put his feet in her lap, and turned the TV on, loud." }
        ] },
        { t: "You can't hold on to everybody, Junpei.", notes: 2, tally: { 'asks.junpei': 'no' }, then: [
          { s: 'junpei', f: 'sad', t: "...Yeah. I know." },
          { s: 'junpei', f: 'neutral', t: "I'm gonna anyway, though. Just so you know. You can be right and I can do it anyway. That's allowed. That's like my whole thing." },
          { n: "He said it cheerfully. He turned the TV on. He didn't put his feet in her lap. He sat with both notebooks held shut on his knees through a whole inning, and when somebody struck out he didn't yell, and she sat beside him and couldn't think of a single thing to say that wouldn't make it worse." }
        ] },
        { t: "Who stays on it is theirs to say. Mine too. Yours too.", notes: 2, tally: { choose: 1, 'asks.junpei': 'choose' }, then: [
          { s: 'junpei', f: 'surprised', t: "...Huh?" },
          { s: 'solar', f: 'neutral', t: "It's not your grid to fill. It's not mine to promise you. Everybody on it gets to decide for themselves." },
          { n: "He looked at her for a long moment. Then he looked down at the notebooks, at all the names, and she watched him try to do it, try to hold the idea in his hands, every single person on two books deciding something without him, and watched it be heavy." },
          { s: 'junpei', f: 'sad', t: "...Theirs. Yeah. That's— man. That's a lot of people deciding stuff. I don't get a vote? I'm the guy with the books." },
          { s: 'solar', f: 'neutral', t: "You get one. Yours." },
          { s: 'junpei', f: 'neutral', t: "...One. Okay. One's not nothing. One's like, a tick." },
          { n: "It wasn't what he'd wanted. She could see that, all over him. He didn't put his feet in her lap. But after a while he leaned, a little, until his shoulder was against hers, and stayed there, and turned the TV on low, and didn't pick up the pen at all." }
        ] }
      ] },
      { n: "Before bed he did what he always did. He opened the betting book on his knee and the frog notebook beside it, and went down every name on both of them in the lamp light, his lips moving, the way kids say a prayer they learned before they knew what the words meant." },
      { n: "She went up the stairs. On the landing she stopped and looked back down over the banister, the way you'd look back at a house from the end of a street, and he was still there on the couch with both books shut, holding them closed on his knee with both hands, the way you'd hold a door shut against wind." },
      { n: "In the morning, coming down early, she passed the kitchen and saw him at the table at seven sharp with his pen, and heard it, under the clink of Shinjiro's pan: tick, tick, tick, tick. All the way down. Every name. And then a pause, a long one, in which she didn't hear the pen at all." },
      { n: "And then, very softly, the last one." }
    ] }
  ]
});
