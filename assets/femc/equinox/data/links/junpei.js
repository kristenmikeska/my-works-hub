/* Persona 3: Equinox · Junpei Iori · I The Magician. Link data (femc-equinox-game.html). Format: link fields in
   assets/femc/game/core.js ("Links" header), scene lines in assets/femc/game/scene.js.
   Written: ranks 1–6 (from 4/13; his home is the lounge couch on Sunday, Tuesday, Thursday and Saturday evenings). Ranks
   7–10 still to write. Shape: the stub fields from assets/femc/equinox/data/links.js (this file wins over the stub).
   Solstice's ranks are shared memory here (consommé chips, the April ball, the highlight reel, "I didn't get a later");
   nothing reads Solstice link standing. What happened to him last November stays his: he never names her.
   Flags this file sets: eqx-junpei-latch (rank 1: Solar gets him to latch his window in the red). Nothing reads it yet.
   Rank 2 (after 5/1, after his three quiet days): reads eqx-junpei-latch. Sets nothing.
   Rank 3 (after 6/6, the lounge and the dorm street at dusk; branches on eqx-last-grain, eqx-hunted, eqx-aigis-arai)
   records his ask: tally asks.junpei (+ cakes / choose). Sets nothing else.
   Written Nov 16 (ranks 4–6). Speaker without a portrait: mriori (his father; Solstice's `dad`, renamed so it can't clash).
     Rank 4 (after 7/4, 'rain delay'; the lounge in a storm, the power out): the house's card game, his ask's aftermath
       (ifChoice asks.junpei: yes = he does the grid twice a night; no = quieter; choose = a THEIRS column in other people's
       hands, Akihiko's entry reads asks.akihiko), the landline ringing in the dark (rain, nobody), the Ioris not on the grid.
       Sets eqx-junpei-dad (Solar gets his father put on the grid; two options set it).
     Rank 5 (after 8/3, 'three hundred and twenty'; the lounge, the riverside ball park, the walk home): throwing with his
       father again, who doesn't remember Solar (townspeople forget Solstice); Mrs. Oka's crane tin on the bench and her
       supper invitation. Reads eqx-junpei-dad, eqx-last-grain (always played by then). Sets one of eqx-junpei-dad-oka
       (Solar said go) / eqx-junpei-dad-dorm (invited him to the dorm instead) / eqx-junpei-dad-his (his to decide).
     Rank 6 (after 10/3, 'under the clock'; the lounge, the green line with Mr. Kim, the dorm roof in the red): the grid with
       the three mothers' empty boxes and the bridge's three names; riding with Solar's HOAX father to check a station clock
       (Act IV 10/2); his window on the Doorstep (his ask floor: flag eqx-floor-junpei, always set). Branches on eqx-1122
       (mothers back), eqx-1023 + dead.shinjiro (the ninth bowl), ifBefore 10/26 (where the fathers live). Sets
       eqx-junpei-window-mark (Solar writes the floor in his book), eqx-junpei-told-garden (she tells him what she saw in
       Mrs. Oka's garden on 10/2; only offered before eqx-1122). */
(window.FEMC_GAME_LINKS ||= []).push({
  id: 'junpei', name: 'Junpei Iori', short: 'Junpei', arcana: 'Magician', numeral: 'I', from: 'Persona 3', kind: 'sees',
  romance: null, starts: '4/8', lodging: 'dorm',
  home: { area: 'dorm', spot: 'Lounge', slot: 'evening', days: [0, 2, 4, 6],
          hint: 'Evenings on Sunday, Tuesday, Thursday and Saturday, on the lounge couch nearest the TV.' },
  approach: "Junpei has claimed the couch nearest the TV with the full length of his body, a bag of chips balanced on his chest, a spiral notebook open on his knee and a baseball game on with the sound down, and he's yelling at it anyway.",
  cast: { mriori: 'Mr. Iori' },
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
    ] },
    { after: '7/4', title: '4: rain delay', place: 'Iwatodai Dorm · Lounge', time: 'Evening', music: 'dorm', scene: [
      { bg: 'iwatodaidorm-livingroom-night-rain' },
      { n: "The Giants were rained out. The TV said so with a long shot of a tarp over an infield, black and shining, men in raincoats standing around the edges of it with their hands in their pockets like mourners, and the announcers filling the time with the voices of men who'd been told to keep talking until somebody stopped them. Outside it was raining on Iwatodai the same way, hard, straight down, the kind of July rain that hit the street so hard it bounced, and the gutters along the dorm's front step were running like little rivers, and the whole lounge smelled of wet umbrellas and the consommé chips open on the coffee table." },
      { n: "Junpei had a deck of cards. He'd cleared the coffee table for it, magazines on the floor, remote on the arm of the couch, and he was dealing, with a flourish he'd clearly practiced in a mirror, to Ken, who was sitting cross-legged on the rug with tremendous seriousness, and to Koromaru, who was lying beside Ken with his chin on the rug and was getting dealt in out of courtesy." },
      { s: 'junpei', f: 'happy', t: "Sol! Pull up a rug. Blackjack. Iori rules. Chips are chips. Like, the actual chips. One chip, one bet. You eat what you win." },
      { s: 'junpei', f: 'neutral', t: "Ken's up four. Koromaru's down six, but he's got heart." },
      { n: "She sat down on the rug. He dealt her in. He dealt Ken, and Koromaru, and her, and then turned up his own card and played the house, hit on sixteen, stood on seventeen, paid out in consommé chips from the bag with the flat professional calm of a man at a real table in a real city, and she watched him do it for three hands before she noticed he never once played a hand of his own." },
      { choose: [
        { t: "Deal yourself in.", notes: 3, then: [
          { s: 'junpei', f: 'neutral', t: "Can't. I'm the house." },
          { s: 'solar', f: 'neutral', t: "The house plays every hand." },
          { s: 'junpei', f: 'flustered', t: "The house plays *for* the house. That's different. The house doesn't have, like, hopes. The house just pays out." },
          { n: "He said it lightly, and shuffled, and the cards made the sound cards make in the hands of somebody who'd grown up around them, and she watched his face not do anything at all." }
        ] },
        { t: "(Bet the whole pile on one hand.)", notes: 2, then: [
          { s: 'junpei', f: 'surprised', t: "Whoa. *Whoa.* Sol. That's twenty-two chips. That's a whole economy." },
          { n: "She won. He paid out the twenty-two chips one at a time, counting them out loud onto her knee, and then sat back and looked at her with something on his face that wasn't quite admiration and wasn't quite fear." },
          { s: 'junpei', f: 'neutral', t: "...Don't do that again. I mean it's fine. It's chips. Just. Don't be the kind of person who does that. I've seen that guy. He's not fun at the end." }
        ] },
        { t: "(Feed Koromaru his winnings.)", notes: 2, then: [
          { s: 'junpei', f: 'happy', t: "He's down six! You can't feed a guy who's down six! That's enabling!" },
          { n: "Koromaru ate the chip. Ken looked scandalized. Junpei laughed so hard he dropped the deck, and it went everywhere, under the couch, under the coffee table, a jack of spades face up on Koromaru's back, and for a minute nobody did anything but laugh." }
        ] }
      ] },
      { ifChoice: { 'asks.junpei': 'yes' }, then: [
        { n: "He looked tired. It came and went, under the jokes, the way the TV picture came and went in the storm. There were blue shadows under his eyes she hadn't seen in April." },
        { s: 'junpei', f: 'neutral', t: "I do the grid twice now. That's all. Seven in the morning and then again after the red. Just to be sure. Mitsuru-senpai does two a.m., I do one-oh-five. Like a— like an encore." },
        { s: 'junpei', f: 'happy', t: "Sleep's overrated. You said hold on to all of it. I'm holding on to all of it. It's the plan, baby. It's on the record." },
        { n: "He grinned. The arrow he'd drawn off the edge of the betting book in June was still on the coffee table under the cards, faint blue, a line going nowhere, past the end of the paper. Somebody had tried to scrub it off with a wet cloth. It had only spread." }
      ], else: [
        { ifChoice: { 'asks.junpei': 'no' }, then: [
          { n: "He hadn't put his feet in her lap since June. She noticed it the way you notice a clock that's stopped, a while after it stopped. He sat at his end of the couch and dealt and was funny and didn't, and she didn't know how to ask for it back." },
          { s: 'junpei', f: 'neutral', t: "You were right, by the way. About not holding on to everybody. You can't. I checked." },
          { s: 'junpei', f: 'neutral', t: "I'm doing it anyway. Quieter. I don't tick out loud anymore. That's my compromise. It's a pretty good compromise, honestly. Nobody's complained." }
        ], else: [
          { n: "The betting book was open on the arm of the couch at the back pages, and the grid had grown a new column. Down the right-hand side, past the last date, he'd ruled off a strip and written at the top of it in his big careless capitals *THEIRS*." },
          { n: "And in the column, beside every name, in every different hand, people had written something. Hanni, in tiny furious letters: *obviously not, idiot. (maybe.)* Ken: *I'd like to decide later, please.* Mitsuru, in fountain pen: *Pending.* Koromaru's line had a paw print in what she hoped was mud. Haechan had drawn a small moon. Shinjiro's box was blank, except that someone had very clearly pressed a pen into it hard enough to dent the page, and then not written anything." },
          { s: 'junpei', f: 'neutral', t: "I asked 'em. *You staying?* Like you said. Theirs to say. So I made 'em say it. In their own writing. So it's not me deciding what they meant." },
          { s: 'junpei', f: 'sad', t: "...It's so much worse, Sol. It's so much worse than ticks. Ticks you just do. This, you gotta read." },
          { n: "She found Akihiko's line." },
          { ifChoice: { 'asks.akihiko': 'choose' }, then: [
            { n: "*Mine. Thinking.* In his blunt square capitals, pressed hard." },
            { s: 'junpei', f: 'neutral', t: "That's the only one that made me feel better. Don't ask me why." }
          ], else: [
            { n: "*Wherever she is.* In his blunt square capitals, pressed so hard the pen had gone through." },
            { s: 'junpei', f: 'serious', t: "That's the only one I don't like. I don't know why. It's the nicest one. I just don't like it." }
          ] }
        ] }
      ] },
      { s: 'junpei', f: 'neutral', t: "Speaking of Aki-senpai. Off the record." },
      { n: "He picked a jar off the floor by the couch and held it up. A big glass jar of pickled plums from the kitchen, the lid screwed down so hard the metal had dented." },
      { s: 'junpei', f: 'happy', t: "I've been practicing. Opening stuff. Jars. Bottles. Stuck windows. Shinji-senpai thinks I've lost it. I can get this one open in four seconds now. Watch." },
      { n: "He got it open in four seconds. It made a sound like a gasp. Ken applauded. Junpei bowed from the waist, sitting down, and screwed the lid back on as tight as it would go, and set it on the floor beside the couch where it had been, for later." },
      { s: 'junpei', f: 'neutral', t: "His hand's getting worse. You know that. Banister, railing, the strap on the monorail last week. One of these days it's gonna close on something big. I just wanna be, like. In shape." },
      { n: "As if he'd been called, the front door banged open and Akihiko came in out of the storm, soaked to the skin from a run nobody had been able to talk him out of, water running off his chin and pooling round his shoes on the hall tiles. He stood in the lounge doorway breathing hard with his gym bag over his shoulder, and his right hand was closed on the strap of it. Not holding it. Closed on it. The knuckles white, the tape gray and sodden." },
      { s: 'akihiko', f: 'neutral', t: "Don't. I know. It's fine. It does this when it's cold." },
      { s: 'junpei', f: 'neutral', t: "It's July, senpai." },
      { s: 'akihiko', f: 'serious', t: "It does this when it's July, then." },
      { n: "He tried to shrug the bag off his shoulder and couldn't, because his hand wouldn't let go of the strap, and stood there in the doorway attached to his own luggage with an expression of enormous dignity, dripping on the floor. Ken looked at the ceiling. Koromaru looked at Akihiko with his head on one side." },
      { n: "Junpei got up. He didn't make a big thing of it. He went over in his socks with the hole at the big toe and took Akihiko's wrist in one hand like he was taking a pulse, and started on the little finger with the other, talking the whole time, loudly, about the Giants' bullpen, about the rain delay, about how the tarp guys deserved a raise, and the little finger came up off the strap, and then the next, and Akihiko stood and let him and stared at a point on the far wall with his jaw set, and nobody in the room said anything about it, and the bag hit the floor." },
      { s: 'akihiko', f: 'neutral', t: "...If you tell anyone I'll put you through the wall." },
      { s: 'junpei', f: 'happy', t: "You said that last time. The wall's still there, senpai. I'm starting to think you're all talk." },
      { n: "Akihiko looked at him for a long moment. Then he picked up his bag with his left hand and went upstairs to change, and on the third stair he stopped, without turning round, and said *thanks, Iori* to the banister, very quietly, and went on up." },
      { s: 'junpei', f: 'neutral', t: "Five seconds. I was going for four. The cold slows me down." },
      { n: "The lights went out." },
      { n: "Not the red. It was half past nine. Just the ordinary dark of a power line down somewhere in the storm: the TV snapping off in the middle of an announcer's word, the lamp, the kitchen, the hum of the fridge stopping so that you heard, for the first time, that it had always been humming. The rain got louder in the dark. Ken said *oh* in a small voice. Koromaru stood up." },
      { s: 'junpei', f: 'neutral', t: "It's fine. It's fine. It's just the storm. There's a flashlight in the— somewhere. In the drawer. Under the menus. Everything's under the menus." },
      { n: "He'd found it, and was clicking it, and it wasn't working, when the phone rang." },
      { n: "The landline. In the hall, on its little table by the stairs. The old phone with the cord, that nobody used except Mitsuru and the Group and, once in a while, somebody's mother. It rang the old way, an actual bell inside it, loud in the dark house with nothing else making a sound but the rain, and it went on ringing." },
      { n: "In the dark house with the rain coming down it sounded like something from another year. Nobody called the hall phone at half past nine. It rang again, and again, and Junpei got up." },
      { choose: [
        { t: "(Get there first. Pick it up yourself.)", notes: 2, then: [
          { n: "She got there first. She didn't know why she ran. She picked it up in the dark and put it to her ear and didn't say anything." },
          { n: "Rain. That was all. Rain, on the other end, very close, the sound of rain hitting something hollow, an umbrella or a car roof or the top of a head, and under it, behind it, somebody breathing very slowly through their nose, the way you breathe when you're standing still in the rain and trying not to be heard." },
          { n: "Junpei was behind her. He took the phone out of her hand. Gently, but he took it." },
          { s: 'junpei', f: 'serious', t: "...Hello? Iori. This is— hello?" }
        ] },
        { t: "(Let him get it.)", notes: 2, then: [
          { n: "He went into the hall with the dead flashlight in his hand and picked it up on the sixth ring. She stood in the lounge doorway with Ken's hand in hers and Koromaru pressed against her shins, very stiff, his ears flat." },
          { s: 'junpei', f: 'neutral', t: "Iwatodai dorm, Iori speaking. Hello?" }
        ] }
      ] },
      { n: "Nobody answered. She could hear it from where she stood. Rain on the line, very close, and under it a long patience, like somebody standing on a step." },
      { s: 'junpei', f: 'serious', t: "...Dad?" },
      { n: "He said it so quietly. He said it like a question he hadn't meant to ask out loud, the way you'd say a name you'd been told never to say in the red, and then he heard himself, and his face in the dark of the hall went very still." },
      { n: "There was a click. The rain stopped, on the line. Then the ordinary dead hum of a phone with nobody on it." },
      { n: "Junpei put the receiver back in its cradle very carefully. Then he picked it up again and dialed, by feel, in the dark, a number his fingers knew without him, eleven digits; and she stood in the doorway and listened to it ring, very small, across town, in a room she'd never seen. It rang eleven times. Nobody picked up. He put it down." },
      { s: 'junpei', f: 'neutral', t: "...Probably the Group. Checking the lines. Mitsuru-senpai's always got somebody checking something." },
      { s: 'junpei', f: 'neutral', t: "He goes to meetings Thursday nights. He wouldn't be home. That's fine. That's good, actually." },
      { n: "The flashlight came on in his hand. He looked at it, surprised, as if it had decided something without him." },
      { place: 'Iwatodai Dorm · Lounge', time: 'Night', bg: 'iwatodaidorm-livingroom-night-rain', soft: true },
      { n: "Ken went up to bed with a candle, under protest, carrying it like a relay torch, Koromaru at his heels. Junpei and Solar sat on the couch in the dark with the flashlight standing on its end on the coffee table, pointing at the ceiling, a white circle up there with the shadows of the cards on the table thrown huge across it." },
      { n: "He had the betting book open on his knee. The grid. In the flashlight it was all shadows, every crooked line, every tick. She read the names down the side the way you'd read the names on a memorial: the dorm, the guesthouse, the girls, the town on its own page in the frog book. Tanabe-san with his line through him. Everybody." },
      { n: "There was no Iori on it." },
      { n: "She'd seen the grid a dozen times, and it was only now, in the dark, with the phone still ringing in her ears, that she saw who wasn't there. Junpei's own name was at the bottom where she'd made him put it in April. Nobody else of his. Not one." },
      { s: 'solar', f: 'neutral', t: "Your dad's not on it." },
      { s: 'junpei', f: 'neutral', t: "...Nah." },
      { n: "He didn't say anything for a while. The rain came down. He turned the flashlight with one finger, slowly, so the circle on the ceiling went round like a searchlight looking for something it had lost." },
      { s: 'junpei', f: 'neutral', t: "He's doing good. He's still going. To the meetings. Last fall he called me, like, out of nowhere, and we threw a ball in the park. You remember. You were on the bench." },
      { s: 'junpei', f: 'sad', t: "He doesn't, though. I went over in April. Once. After all this. And I said, hey, remember my leader, the girl on the bench, last fall? And he looked at me like I'd said something in another language. He said *what girl, Junpei.* Not mean. Just. What girl." },
      { s: 'junpei', f: 'sad', t: "Everybody in town's like that. The konbini guy. Hagakure. They know me. They don't know you. They don't know the whole year happened with you in it. It's like somebody went through it with an eraser and only did your parts." },
      { s: 'junpei', f: 'serious', t: "So I didn't put him on. 'Cause if he's on, I gotta tick him. And to tick him I gotta see him. And if I go and see him and he's— if he's had a drink. Or if he looks at me like he looked at me about you. I don't wanna have to put a line through my own dad, Sol. I just don't. So he's not on." },
      { n: "The flashlight went round. The cards on the table threw their shadows up and round and up. Somewhere a gutter overflowed with a sound like a tap left running." },
      { choose: [
        { t: "Put him on.", notes: 3, flag: 'eqx-junpei-dad', then: [
          { s: 'junpei', f: 'surprised', t: "...Huh?" },
          { s: 'solar', f: 'neutral', t: "You put everybody on. That's the rule. You see someone twice, they're on. You've seen him more than twice." },
          { n: "He looked at her for a long time in the flashlight. Then he found the pen, by feel, and wrote, at the very bottom of the page, under his own name, very small, *IORI (DAD)*. He didn't tick it. He drew the box and left it empty, and then, after a second, put a tiny question mark in the corner of it, the way you'd write a note to yourself to call somebody back." }
        ] },
        { t: "(Take the pen. Write *IORI* at the bottom yourself, in pencil, so it can come off.)", notes: 3, flag: 'eqx-junpei-dad', then: [
          { n: "She took the pencil out of the spiral, not the pen, and wrote it herself, at the very bottom, under his name: *IORI*. Light. So it could come off. She held the book so he could see it was pencil." },
          { n: "He looked at it for a long time. He didn't rub it out. He took the pencil out of her fingers and, under her letters, very small, in his own hand, wrote *(DAD)*." },
          { s: 'junpei', f: 'sad', t: "...Cheater. That's insider trading. You know my rules too good." }
        ] },
        { t: "That's yours to decide.", notes: 2, then: [
          { s: 'junpei', f: 'neutral', t: "Yeah. Yeah, I know. Everything's mine to decide lately. I'm so tired of things being mine." },
          { n: "He closed the book. He didn't write anything. But he left the pen lying on top of it, uncapped, pointing at the bottom of the cover, and when she came down in the morning it was still there, and the cap was still off, and the ink had dried at the tip." }
        ] }
      ] },
      { n: "The lights came back on at a quarter to eleven, all at once, the fridge first, then the lamp, then the TV in the middle of a word, an announcer saying *—postponed until tomorrow*, the tarp, the infield, the men standing round it in the rain." },
      { n: "Junpei looked at the TV for a long time with the book closed on his knee." },
      { s: 'junpei', f: 'neutral', t: "Postponed till tomorrow. Rain delay. That's what they call it. You don't lose the game. You just play it some other day." },
      { s: 'junpei', f: 'happy', t: "...That's a good rule. Baseball's got good rules. I've always said that. Nobody listens." },
      { n: "Before bed he wrote in the reel. He tipped it so she could read it, which was the same as asking." },
      { n: "*July. Rained out. Power out. Phone rang. Nobody. Maybe somebody. Ken's up nine chips. Koromaru's down seven. Sol's on the bench.*" },
      { n: "And under that, after a long pause in which the pen didn't move, smaller:" },
      { n: "*Rain delay. Not a loss.*" }
    ] },
    { after: '8/3', title: '5: three hundred and twenty', place: 'Iwatodai Dorm · Lounge', time: 'Evening', music: 'dorm', scene: [
      { bg: 'iwatodaidorm-livingroom-night-summer' },
      { n: "It was still light at seven. That was August: the light hung on and on over the river in long sticky bands of orange, as if it didn't know how to leave either, and the heat lay in the dorm like a dog that wouldn't get off the couch, and nobody had been able to eat much since the wake. Shinjiro had made cold noodles three nights running. Ken had eaten them. Nobody else had managed more than half." },
      { n: "Junpei was in the lounge doorway with his jacket on. A thin summer jacket, in this heat, as if it were armor, and under his arm a brown leather glove gone soft and dark at the pocket, and she knew it before he said anything. She'd seen him stand in a doorway exactly like this before, in October, in another year, with that glove." },
      { s: 'junpei', f: 'neutral', t: "Hey. You busy? You're not busy. You're on the couch. You're, like, the opposite of busy." },
      { s: 'junpei', f: 'neutral', t: "...You wanna be bench guy? Again? It's fine if you don't. It's fine. It's just. Nobody alone after dark. Mitsuru-senpai's rule. Two's legal." },
      { ifFlag: 'eqx-junpei-dad', then: [
        { s: 'junpei', f: 'sad', t: "He's on the grid now. You put him on. And every morning I go tick, tick, tick, and I get to the bottom, and there's his box with a question mark in it, and I tick it without seeing him. Every day. That's cheating. That's the one thing the grid can't be." },
        { s: 'junpei', f: 'neutral', t: "So I called him. Yesterday. From the hall. He picked up on the second ring. I said, wanna throw? And he went real quiet, and then he said, *yeah, Junpei. Yeah.*" }
      ], else: [
        { s: 'junpei', f: 'neutral', t: "He called. My old man. Yesterday. On the hall phone. A real call, with a person on it this time. He asked did I wanna throw." },
        { s: 'junpei', f: 'sad', t: "And I keep thinking about Suemitsu. How you think you got all the time in the world, and then somebody's sitting at a table, and. So I said yes. And then I panicked and came and found you." }
      ] },
      { choose: [
        { t: "I'll be on the bench.", notes: 3, then: [
          { s: 'junpei', f: 'happy', t: "Bench guy. Okay. Bench guy." },
          { n: "He said it twice more under his breath on the way out of the door, *bench guy, bench guy*, like a charm. He'd done that last year too. He didn't know he had." }
        ] },
        { t: "What if he's been drinking?", notes: 2, then: [
          { s: 'junpei', f: 'neutral', t: "Then we leave. You and me. That's why you're coming. I didn't wanna have to decide that by myself." },
          { n: "He'd said that last year too, word for word. He didn't know that either. She didn't tell him." }
        ] },
        { t: "(Get up and get your shoes.)", notes: 3, then: [
          { n: "She got up and got her shoes. He watched her tie them on the step with an expression like a man watching a lifeboat get lowered, and when she stood up he didn't say anything, just bumped her shoulder with his on the way out of the door, once, the thank-you he still couldn't get his mouth round." }
        ] }
      ] },
      { place: 'Iwatodai · Riverside Ball Park', time: 'Evening', bg: 'iwatodai-riverside-night', music: 'tender', soft: true },
      // BG: eqx-riverside-ballpark — a small scrubby park at the end of a river path at summer dusk: a chain-link backstop, a patch of worn dirt, one tall light on a pole just coming on with moths round it, the river and the far bank's apartment lights beyond.
      { n: "The park at the end of the river path was exactly as small and scrubby as she remembered: a backstop, a patch of worn dirt, one tall light on a pole that buzzed when it came on. It had been October last time, cold, leaves in the gutters. Now the dirt was baked pale and cracked, and the grass round it had gone to seed and stood up to her knees, and the light came on at half past seven with a sound like a held breath and a cloud of moths already waiting for it." },
      { n: "His father was under the light. Thinner. A windbreaker in August, the same one, washed even more. The same glove tucked under the same arm. He was standing exactly where he'd stood last fall, and when he saw them coming he took his hands out of his pockets the same way, like a man who'd been caught at something and didn't know where to put them, and Solar's whole body remembered it before she did: the cold bench, the bad first pitch, the buzz of this light." },
      { s: 'mriori', t: "Junpei." },
      { s: 'junpei', f: 'neutral', t: "Hey, Dad." },
      { n: "His father looked past him at her. He looked at her politely and kindly and with no recognition in his face at all, and she watched Junpei watch him do it." },
      { s: 'mriori', t: "And this is— I'm sorry. Have we met? You look like somebody." },
      { s: 'junpei', f: 'neutral', t: "...This is Solar. From the dorm. She's, uh. She's my leader." },
      { s: 'mriori', t: "Your leader. Of what?" },
      { s: 'junpei', f: 'happy', t: "Of me, basically. She's the boss of me." },
      { n: "He'd said that last year too. His father laughed this time, which he hadn't last year, a short surprised laugh, and bowed to her, a little too deep, the way people bow when they're sober and very aware of it. She bowed back. She sat on the bench by the backstop, which was warm now instead of cold, warm right through her skirt from the whole day of sun, and became furniture as hard as she could." },
      { n: "They threw. His father walked out to the bald patch that served as a mound and wound up, slowly, his whole body remembering something halfway, and threw, and it was a better pitch than last year's first one. Junpei caught it barehanded, out of habit, and shook his hand out and swore and grinned, and threw it back, easy, and that was something." },
      { s: 'mriori', t: "Three hundred and twenty. Today. Days. Since I— you know." },
      { s: 'junpei', f: 'neutral', t: "...Yeah? Three twenty?" },
      { s: 'mriori', t: "The group gives you a coin at a year. I've got forty-five days to go. I've got it written on the calendar by the fridge. I cross them off with a red pen like a kid waiting for summer." },
      { s: 'junpei', f: 'happy', t: "That's my move. The crossing-off thing. You stole my move." },
      { s: 'mriori', t: "Who do you think you got it from?" },
      { n: "Junpei didn't answer that. He threw the ball back a little too hard, and his father caught it, a little clumsily, and they both laughed, and the light buzzed, and the moths went round." },
      { n: "On the far end of the bench, beside his father's jacket, there was a tin. Solar had sat down next to it without seeing it, and then she saw it, and couldn't stop seeing it." },
      { n: "A flat round tin. Painted cranes on the lid, white on a faded red. A dent in the side." },
      { n: "When they stopped to drink from the fountain by the gate, his father came and sat down on the bench beside it, mopping his face with a handkerchief, and saw her looking." },
      { s: 'mriori', t: "Oh, those. You want one? Go on. They're very good. I don't eat sweets much." },
      { s: 'mriori', t: "A lady brought them. To the hall where we have the meetings. Thursday. Stood at the door with them, didn't come in. Runs a boarding house by the river, she said. Does suppers. She said she'd heard there were some men in that church basement drinking bad tea every week and she thought somebody ought to feed them properly." },
      { s: 'mriori', t: "Nice woman. Gloves on, in this heat. Asked would I not rather come and sit at a proper table one of these Thursdays instead of a folding chair. Said she'd keep a place. Said one night off wouldn't hurt." },
      { n: "Junpei had come back from the fountain. He was standing behind his father with the ball in his hand. He'd gone white under the sunburn. He didn't say anything. She'd never seen him not say anything so loudly." },
      { s: 'mriori', t: "I said maybe. I said next week, maybe. I'm not much company. But she's right, you know, it's bad tea." },
      { choose: [
        { t: "You should go. She's very kind.", notes: 2, flag: 'eqx-junpei-dad-oka', then: [
          { s: 'mriori', t: "She is, isn't she? That's what I thought. Very kind. Kind's hard to come by." },
          { n: "He smiled at her. It was a nice smile, tired, Junpei's chin under it. Behind him Junpei closed his hand round the ball so hard she heard the leather creak, and looked at her, once, a look she didn't have a name for, and then looked at the ground." }
        ] },
        { t: "Come to the dorm instead. Shinjiro cooks on Sundays. He'd feed you till you can't move.", notes: 3, flag: 'eqx-junpei-dad-dorm', then: [
          { s: 'mriori', t: "Oh, I couldn't. A dormitory? I'd be in the way." },
          { s: 'junpei', f: 'neutral', t: "You wouldn't be in the way. Everybody's in the way. It's like thirty people and a dog. One more guy, nobody's even gonna notice." },
          { s: 'junpei', f: 'flustered', t: "...I mean, I'd notice. Shinji-senpai makes this curry. You'd— it's good. It's real good. You don't have to." },
          { n: "His father looked at him for a long moment, in the buzzing light, and something went over his face and settled there." },
          { s: 'mriori', t: "...Sunday. Maybe. If you're sure." },
          { s: 'junpei', f: 'happy', t: "I'm sure. I'm, like, so sure. I'll put it in the book." }
        ] },
        { t: "That's yours to decide, Mr. Iori.", notes: 2, flag: 'eqx-junpei-dad-his', then: [
          { s: 'mriori', t: "...Yes. I suppose it is." },
          { n: "He said it with a kind of surprise, as if it hadn't occurred to him that it was. Junpei, behind him, opened his mouth. She watched him open it, and close it, and open it again, everything in him wanting to say *don't, Dad, don't go there*, and she watched him hear her, and swallow it, the whole thing, like a stone." },
          { s: 'junpei', f: 'sad', t: "...Yeah. It's yours, Dad. Just. The tea's not that bad. I'm just saying. I've had worse tea." }
        ] }
      ] },
      { n: "They threw till the light was gone from the sky and there was only the light on the pole. Then his father checked his watch, and said he had a thing, and said it plainly, like a man who'd decided a long time ago not to be ashamed of where he was going. He shook Junpei's hand. He stood there holding it, like last year, like he didn't know how to give it back. Then he pulled him in by the back of the neck for one second, hard, and let go." },
      { s: 'mriori', t: "It was nice to meet you, Solar. Look after him. He talks a lot, but he doesn't say much. His mother was the same." },
      { n: "He picked up his jacket. He left the tin. He'd forgotten it, or he'd left it for them; she couldn't tell. He walked off up the river path with his glove under his arm, and didn't look back, and Junpei watched him all the way to the bend." },
      { n: "Then Junpei picked up the tin, and held it, and didn't open it." },
      { s: 'junpei', f: 'serious', t: "...She was at the meeting hall. She found him at the *meeting hall*, Sol. That's the one place. That's the one room in this whole town where everybody's already said no to something every week." },
      { s: 'junpei', f: 'sad', t: "Suemitsu said yes to supper every night since April. Every single night. I sat behind him in class. I watched him get happier. I thought it was nice." },
      { n: "He walked to the gate with the tin. There was a public bin there, green, with a swing lid. He stood over it for a long time. Then he took the roll of electrical tape out of his jacket pocket, the one he used for the knob on his window, and taped the tin's lid down, round and round, until you couldn't see the cranes, and put it in the bin, and let the lid swing shut on it, and stood there with his hand flat on the lid of the bin, holding it closed." },
      { n: "Something in the long grass behind the backstop moved. Just the grass. Just a breath of air off the river, finally, after the whole hot day. It went through the seed heads in a long slow line, all the way along, as if something low had walked the length of the park and stopped at the gate." },
      { n: "Junpei didn't turn round. He took his hand off the bin and put it in his pocket." },
      { s: 'junpei', f: 'neutral', t: "Let's go home. Long way. Past Arai-san's. I didn't do the rounds today." },
      { place: 'Iwatodai · The Dorm Street', time: 'Night', bg: 'outside-daytime-neighborhood', music: 'mystery', soft: true },
      // BG: iwatodai-dorm-street-night — the same quiet residential slope at night in summer, small tiled-roof houses, potted plants on steps, streetlights with moths, a blue-roofed house near the bottom with a lamp on behind a lace curtain.
      { n: "The long way home went up the river path and back along the dorm street from the bottom, past the blue roof. The street was warm and dark and smelled of somebody's mosquito coil and of the geraniums on every step, and Junpei looked at every house the way he'd looked at them in June, quick glances, like checking a clock, and every house was there." },
      { n: "Mrs. Arai was on her step. That had never happened, Junpei said under his breath; she was always behind the curtain, at night. She was sitting on the top step in a cotton summer robe with a paper fan, among her pots, in the light from her own front door, and when she saw Junpei at the gate her whole face lit up like a girl's." },
      { n: "There was no saucer on the step. Solar looked for it. Among the geraniums, by the tomato plant tied to its chopstick. Nothing. Just a ring on the stone where it had stood every night since spring, a pale clean circle in the dust." },
      { n: "Mrs. Arai told them. She told them all at once, in a rush, holding Junpei's hand over the gate in both of hers. Her son had come home. Last week. Late, the way he always came home, late, after she'd gone up. She'd heard him in the kitchen. Heard him eat, everything, the rice cake and the rice and the pickles she'd left out, every scrap, and the chair scrape, and the tap run. She hadn't gone down. He'd never liked to be looked at when he ate, not since he was small. In the morning the plate was clean and the chair was pushed back in." },
      { n: "He'd be back, she said. He'd come every night now. The lady by the river had been right. If you leave something out, they know they're expected." },
      { n: "Junpei said that was great. He said it was the best news he'd heard all week. He said it in his biggest, warmest voice, the one for old ladies and Ken, and squeezed her hands, and she went in happy, and the lamp went off behind the lace curtain, and he stood at the gate and didn't move." },
      { s: 'junpei', f: 'serious', t: "...She didn't see him. She heard him eat. She didn't go down." },
      { s: 'junpei', f: 'sad', t: "And now there's no saucer. 'Cause he's coming. She's gonna leave the whole table out now. Every night. Supper for two." },
      { choose: [
        { t: "(Stand at the gate with him. Don't say anything.)", notes: 3, then: [
          { n: "She stood with him. The moths went round the streetlight. Somewhere up the hill a TV laughed. After a long time he took the frog notebook out of his back pocket and found the page and ticked Mrs. Arai's box, carefully, against the gatepost, and then, under her name, in pencil, very small, wrote *+ 1 (?)* and didn't tick that." }
        ] },
        { t: "We could tell her. Not to leave it out.", notes: 2, then: [
          { s: 'junpei', f: 'sad', t: "Aigis told her. You told her. In the spring. She thanked everybody real nice." },
          { s: 'junpei', f: 'neutral', t: "She's happy, Sol. She hasn't been happy since I started doing this street. You wanna be the one who tells her he's not her kid? 'Cause I can't. I'm not built for it." },
          { n: "He ticked her box in the frog book, against the gatepost, and under it wrote *+ 1 (?)*, and didn't tick that." }
        ] }
      ] },
      { n: "They walked up the hill. At the top, by the dorm gate, he stopped and looked back down the street, all of it, every lit window and every dark one, the way you'd look back at a field from the end of a game." },
      { s: 'junpei', f: 'neutral', t: "I'm putting the meeting hall on the rounds. Thursdays. I'll go and stand outside it at like nine and see who comes out. I don't care if it's weird." },
      { place: 'Iwatodai Dorm · Lounge', time: 'Night', bg: 'iwatodaidorm-livingroom-night-summer', music: 'dorm', soft: true },
      { n: "The lounge was dark except for the TV, a late game from somewhere with the sound off, a pitcher shaking off sign after sign. Junpei sat down on the couch and put his feet in her lap, and she let him, and he got the betting book out from the drawer and opened it to the grid." },
      { ifFlag: 'eqx-junpei-dad', then: [
        { n: "He found the bottom of the page. *IORI (DAD)*, and the box with the question mark in its corner. He rubbed the question mark out with the end of the pencil, carefully. Then he ticked it. A real tick, a hard one, and beside it, small, *in person*." }
      ], else: [
        { n: "He found the bottom of the page, his own name, the line under it. He sat looking at the empty space below it for a long time, the pen over it. Then he wrote, very small, *DAD — 320*, and didn't draw a box, and didn't tick anything, and left it, a number with nowhere to go." }
      ] },
      { s: 'junpei', f: 'neutral', t: "Forty-five days. He gets a coin. Mid-September. I'm gonna go. I'm gonna go and sit in the folding chairs and drink the bad tea and clap. He doesn't know that yet. I'm gonna surprise him." },
      { s: 'junpei', f: 'sad', t: "...If he's still going. On Thursdays. To the bad-tea place. If he doesn't decide one week that one night off won't hurt." },
      { n: "He wasn't really asking her anything. He said it to the TV, where the pitcher had finally taken a sign and wound up and thrown, and the batter let it go by, and it was a strike, and nobody in the stadium seemed to care." },
      { s: 'junpei', f: 'neutral', t: "Thanks for being bench guy. That's twice now. Two years in a row. I'm gonna need you for, like. A lot more innings." },
      { s: 'junpei', f: 'flustered', t: "...That's not, like, an ask. That's a scheduling note. Don't make it a thing." },
      { n: "Before bed he wrote in the reel. *August. Threw with Dad. 320. He doesn't remember Sol. Sol was on the bench anyway. Tin's in the bin.*" },
      { n: "And then, after a while, under it, so small she had to lean in to read it in the light from the TV:" },
      { n: "*Note to self. Bins are doors too, probably.*" }
    ] },
    { after: '10/3', title: '6: under the clock', place: 'Iwatodai Dorm · Lounge', time: 'Evening', music: 'dorm', scene: [
      { bg: 'iwatodaidorm-livingroom-night-autumn' },
      { n: "The lounge had gone cold for the first time that week, properly cold, the kind of October evening where somebody gets up and finds a blanket and then everybody's under it, and the windows had a skin of damp on them, and outside the persimmons on the trees down the street had gone orange all at once, overnight, like lamps." },
      { n: "Junpei was at the dining table, not the couch. That was the first thing. He had the betting book open in front of him and the frog notebook beside it and a third notebook she'd never seen, a train-company timetable booklet with its pages folded back, and he was ruling a new grid into the back of it with a ruler that kept slipping, and swearing at the ruler under his breath, gently, the way you'd swear at a dog you loved." },
      { s: 'junpei', f: 'happy', t: "Sol. Sit. I need a witness. I need a— you know. You know the drill." },
      { n: "She sat down across from him and looked at the betting book, because it was open, and because she always did." },
      { ifEvent: 'eqx-1122', then: [
        { n: "The grid had three names near the top of the parents' rows, in his big careless capitals, gone over more than once: *SOLJI-SAN*, *EOMMA (MISEON-SAN)*, *MRS. KIM*. Under each one, a run of empty boxes from the twenty-third of September all the way through October and into November, two months of white squares he'd ruled every morning and left empty. And then, from the twenty-third of November, ticks again. Small ones. Careful. As if he were afraid of pressing too hard on anything with those names on it now." }
      ], else: [
        { n: "The grid had three new names near the top, in the parents' rows, in his big careless capitals, gone over more than once: *SOLJI-SAN*, *EOMMA (MISEON-SAN)*, *MRS. KIM*. Under each one, a run of empty boxes from the twenty-third of September to today. White squares. He'd ruled every one of them fresh each morning, she could see; the lines were new, the pencil dark. He hadn't drawn a line through any of them. He hadn't left them out either." }
      ] },
      { n: "And at the very bottom, under everybody, under his own name and under his dad's, in pen, three more. *SAKAI.* And two names she didn't know, written carefully, the characters looked up and copied, she could tell, from somewhere official." },
      { s: 'junpei', f: 'serious', t: "I asked Mitsuru-senpai. For the other two. She didn't wanna give 'em to me. She said why. I said 'cause they were walking people home. 'Cause that's a guy who should be on somebody's list. She wrote 'em on a sticky note and gave it to me and went in her room and shut the door." },
      { s: 'junpei', f: 'sad', t: "I'm not putting a line through those. Not the mothers either. I did Tanabe-san with a line. I'm not doing lines anymore. They just stay on. Empty's not the same as gone. Empty's just— empty for now." },
      { ifFlag: 'dead.shinjiro', then: [
        { n: "Shinjiro's row was still there, between Mitsuru and Yukari, in the fat capitals Junpei had given him in June, the frying pan drawn by the first tick. After the twenty-third of October the boxes were empty. Not crossed. Empty. And in the margin beside the first empty one, in pencil, very small: *9 bowls. Did 9 anyway.*" }
      ] },
      { choose: [
        { t: "(Put your hand flat over the empty boxes.)", notes: 3, then: [
          { n: "She put her hand flat on the page, over the white squares, the way she'd put it over the ticks in April. Junpei looked at her hand there and didn't say anything for a long time." },
          { s: 'junpei', f: 'sad', t: "...Yeah. Yeah. They're still on. That's all I'm saying. They're still on." }
        ] },
        { t: "Empty for now.", notes: 3, then: [
          { s: 'junpei', f: 'neutral', t: "Empty for now. Yeah. That's the rule. That's the new rule. I'm writing it at the top." },
          { n: "He wrote it at the top of the page, over the dates, small: *EMPTY ≠ GONE.* And underlined it. And then, because he was Junpei, drew a tiny baseball beside it." }
        ] },
        { t: "What's the third notebook?", notes: 2, then: [
          { s: 'junpei', f: 'happy', t: "That's the new book. That's the station book. You're gonna love it. It's the worst one yet." }
        ] }
      ] },
      { ifEvent: 'eqx-1122', then: [
        { n: "The timetable booklet was Mr. Kim's. A grid of stations down the side, green line, a hundred and twelve of them in Jungwon's careful katakana with Junpei's capitals beside them, and dates across the top, and in the boxes, ticks, dozens of them, through October and into November, every evening. And then, across the whole of one page, diagonally, in red pen, in a hand that wasn't Junpei's, a single word in Korean she knew without reading it." },
        { s: 'junpei', f: 'neutral', t: "*Found.* That's what it says. Mr. Kim wrote that. The day after. He came down to breakfast and took my pen and wrote it right across the stations, and gave me the pen back, and went upstairs to sit with her." },
        { s: 'junpei', f: 'sad', t: "He wants to ride the line one more time. The green one. All the little ones. To say thanks to the clocks, he said. He says she'd want somebody to tell them. He asked me to come. He asked if you'd come." },
        { place: 'Iwatodai Station · Green Line', time: 'Evening', bg: 'train-car-inside', music: 'tender', soft: true },
        { n: "They rode it with him to the end of the line and back, in a nearly empty carriage, Mr. Kim in his fleece in the middle seat with Junpei on one side and Solar on the other, and at every little station with a clock over the exit Mr. Kim lifted his hand to the window, just a little, a wave to the clock, the way you'd wave to a neighbor from a car." },
        { s: 'kim-dad', f: 'happy', t: "She says I took too long. She says a hundred and twelve stations, yeobo, honestly. She says she was never at a station, she doesn't know why I thought a station." },
        { s: 'kim-dad', f: 'sad', t: "She doesn't remember where she was. That's all right. I know where I was. I was under the clocks." },
        { n: "He took Solar's hand on the seat between them and held it the whole way back, and didn't say anything else, and on his other side Junpei ticked every station as it went by, out of habit, and then stopped ticking, and just watched them go." }
      ], else: [
        { n: "The timetable booklet was Mr. Kim's. The green line, the one that stopped at all the little stations, a hundred and twelve of them down the side of a grid Junpei had ruled himself, in Jungwon's careful katakana with Junpei's capitals beside them. Dates across the top. Ticks in the boxes. Not many yet. A long column of them still to go." },
        { s: 'junpei', f: 'neutral', t: "Jungwon does weekends. I do weeknights. After school, after dinner, before it gets dark. We ride out, we get off, he stands under the clock at the exit, we wait for one train each way, we ride back. I tick it." },
        { s: 'junpei', f: 'happy', t: "He made me make odds. On the stations. Which one she'd pick. *Study the form,* he said. Like I taught him. He's got a theory. He says she'd pick one with a bakery near the exit. So the bakery ones are short odds." },
        { n: "He said it in his joke voice. His hand on the ruler had stopped." },
        { s: 'junpei', f: 'sad', t: "...He laughs, Sol. Every station. Under every clock. He says *yeobo, you picked a big country,* and he laughs. I don't know what to do with that. I just tick the box." },
        { n: "Solar didn't say anything. She was thinking about a garden. About a washing line strung between a persimmon tree and a post, and a woman with her back to the house folding sheets against her chest, a navy vest, an apron tied in a hard double knot on a line that went straight down her back. She'd seen it on a Saturday from a low table covered in timetables, with her father's back to the garden, drawing a circle round a station that had a little clock on the map." },
        { n: "Her father. That was the thing that kept arriving, every time, as if for the first time. Mr. Kim was her father. In a life she remembered as well as she remembered this one, he'd taught her to play crane games at the old mall, and moved the car seat back for her mother, and never said anything, because that was his whole job. And Junpei, who didn't know any of what was in the garden, was riding the green line with him every night with a ruler and a frog notebook, ticking clocks." },
        { s: 'junpei', f: 'neutral', t: "He's waiting on the step. You wanna come? It's a short one tonight. Bakery station. Short odds." },
        { ifBefore: '10/26', then: [
          { place: 'The Oka Boarding House · Gate', time: 'Evening', bg: 'eqx-oka-gate', music: 'eerie', soft: true },
          { n: "Mr. Kim was on the boarding house step in his fleece with the timetable folded in his breast pocket and the car keys in his left hand, turning them over. Behind him, down the long hall, a lamp was on in the kitchen and someone was moving about in it, humming. He didn't look round. Solar did, and then didn't, and then looked at her father's face instead, which was the safest thing in the street." }
        ], else: [
          { place: 'Iwatodai Dorm · Front Step', time: 'Evening', bg: 'iwatodaidorm-front-night', music: 'tender', soft: true },
          { n: "Mr. Kim was on the dorm's front step in his fleece with the timetable folded in his breast pocket and the car keys in his left hand, turning them over. Koromaru lay across the doorway behind him with his chin on his paws, the way he lay every night now, and lifted his head when they came out, and put it down again." }
        ] },
        { s: 'kim-dad', f: 'happy', t: "The funny boy with the hat! And my— sweetheart. You came. Good. Three's better odds. More eyes." },
        { s: 'kim-dad', f: 'neutral', t: "Tonight it's the one with the bakery. Junpei says short odds. I say she hates that bakery, it's a chain, she'd never. But we have to check. You check them all. That's the rule." },
        { place: 'A Station on the Green Line · Exit', time: 'Evening', bg: 'station-concourse-evening', music: 'tender', soft: true },
        // BG: eqx-station-clock — the exit of a small suburban station at dusk, a round white clock over the ticket gates, a bakery's lit window beside the exit, a few commuters, one man in a fleece standing alone under the clock looking out.
        { n: "The station was four stops down the green line, a small one, two platforms and a footbridge and one exit with a round white clock over it, and a bakery beside the exit with its lights on and its shelves nearly empty, the end of the day. A few commuters came through the gates and went past them into the dusk with their bags of bread." },
        { n: "Mr. Kim went and stood under the clock. Exactly under it. He put his hands in his fleece pockets and looked out at the street, at the bakery, at the bus stop, at the people coming and going, with an expression of polite, patient, enormous attention, the expression of a man meeting a plane." },
        { n: "Junpei stood at the gate with the timetable open on his forearm and his pen out. Solar stood beside him. A train came in behind them on the up line, and doors opened, and people came through the gates, and none of them was anybody. The doors closed. The train went." },
        { choose: [
          { t: "(Go and stand under the clock beside your father.)", notes: 3, then: [
            { n: "She went and stood beside him. He didn't look at her. He took one hand out of his pocket and found hers without looking, and held it, and went on watching the street, and his hand was warm and dry and absolutely steady, and hers wasn't." },
            { s: 'kim-dad', f: 'neutral', t: "She'd like you being here. She'd say, you see, at least *one* of you has some sense. She'd say, at least my daughter came to find me." },
            { n: "Solar said nothing. She stood under the clock with her father and held his hand and looked at the bakery, because the bakery was the safest thing in the street." }
          ] },
          { t: "(Stay at the gate with Junpei. Watch him tick.)", notes: 3, then: [
            { n: "She stayed with Junpei. He didn't tick anything yet. He stood with the pen over the box and watched Mr. Kim's back under the clock, and she watched Junpei watch him, and saw that he was doing the thing he'd done on the dorm street in June, looking at every face that came out of the gates the way you'd glance at a clock: checking. For somebody he'd never met, who wasn't going to come out of any gate in this prefecture, for a man he'd known six weeks." },
            { s: 'junpei', f: 'neutral', t: "...He's so sure, man. Every time. He's so sure she's gonna be the next one." }
          ] },
          { t: "(Look away. Read the timetable on the wall instead.)", notes: 2, then: [
            { n: "She read the timetable on the wall. Every train. The express, the local. The minutes. She read it twice, because she always read things twice, and she didn't take in a single number, and the second train came in, on the down line, and its doors opened, and people came through the gates, and none of them was anybody." }
          ] }
        ] },
        { n: "The second train went. Mr. Kim stood a moment longer under the clock, then turned round with his face perfectly cheerful and lifted both hands, empty." },
        { s: 'kim-dad', f: 'happy', t: "Not this one! I told you. A chain bakery. She'd never." },
        { n: "Junpei ticked the box. Hard. One clean tick. Then he wrote beside it, small, the time on the clock, and *bakery: no*, the way you'd write a result in a scorebook, and closed the booklet, and held it shut for a second against his chest with both hands, the way you'd hold a door shut against wind." }
      ] },
      { place: 'Iwatodai Dorm · Roof', time: 'The Red Hour', bg: 'iwatodaidorm-roof-night', music: 'night', soft: true },
      { n: "The rota had *J + S* in it for that night. He'd written it himself, in the box, in pencil, and then looked at her across the breakfast table to see if that was all right, and she'd nodded, and he'd gone over the pencil in pen." },
      { n: "They sat on the roof with their backs to the water tank and one blanket, the way the rota said, two names, and the red came at twelve. It came up over the parapet and filled the sky, the color of the inside of an eyelid, and the town went still under it, and the persimmons on the trees down the street went the color of coals." },
      { n: "He didn't make a joke when it came. He'd stopped making jokes at twelve. He sat with the betting book on his knees, shut, and his hands flat on the cover, and looked at the water tower on the next building over, and then he said it, all at once, in the voice he used for things he'd practiced in the shower." },
      { s: 'junpei', f: 'serious', t: "There's a window in the Well." },
      { s: 'junpei', f: 'serious', t: "On the Doorstep. The upside-down floors. The street on the ceiling. Way down. Past the post office, that's upside down too, there's this street, and it's this street. Ours. The dorm. Upside down, with the roof at the bottom and the front step up in the air." },
      { s: 'junpei', f: 'sad', t: "And the third floor, there's my window. On the end. The sash. I'd know it anywhere, the paint's coming off it in the exact same place. And somebody's sitting on the sill." },
      { n: "He didn't look at her. He looked at the water tower." },
      { s: 'junpei', f: 'sad', t: "Drawing. Just sitting there with her legs hanging down, upside down, toward the ceiling, which is the floor. Swinging her feet. Drawing in a book. She never looks at me. I've stood under it, like, five times now. At the end of a night, when you guys have gone up the rope. She never looks. She just draws." },
      { s: 'junpei', f: 'serious', t: "And I know. I *know*, okay. It's the thing. It's the thing that wants the grid full. It went and found the one window. It's not her. She'd never sit still that long. She'd have looked." },
      { s: 'junpei', f: 'neutral', t: "I haven't gone up to it. I just wanted somebody to know where it is. In case." },
      { flag: 'eqx-floor-junpei' },
      { choose: [
        { t: "(Take the pen. Write the floor in his book yourself.)", notes: 3, flag: 'eqx-junpei-window-mark', then: [
          { n: "She took the pen out of his fingers and opened the betting book on his knee, to the inside of the back cover, where nothing was written, and wrote it there in the red light. *Doorstep. Our street. Third floor, the end window.* And under it, because it was his book, his rules: a small box. Empty." },
          { s: 'junpei', f: 'surprised', t: "...You gave it a box." },
          { s: 'solar', f: 'neutral', t: "Empty for now." },
          { n: "He looked at it for a long time. Then he laughed, a short cracked laugh, and put his hand flat over it, the box, and kept it there." }
        ] },
        { t: "If you ever go up to it, that's yours. But I'll know where to look.", notes: 3, then: [
          { s: 'junpei', f: 'neutral', t: "Yeah. Yeah. That's— okay. That's fair." },
          { s: 'junpei', f: 'serious', t: "If I go up to it, it's 'cause I wanted to. Not 'cause it asked. Remember I said that. If you ever gotta tell anybody. Tell 'em I said that." }
        ] },
        { t: "That's not her, Junpei.", notes: 2, then: [
          { s: 'junpei', f: 'sad', t: "I know. I said. I know." },
          { s: 'junpei', f: 'sad', t: "...That's what makes it so bad. If it was her I'd know what to do." }
        ] }
      ] },
      { ifEvent: 'eqx-1122', else: [
        { n: "She thought about the garden again. About telling him. About the woman with her back to the house, and a seam, and a man under a clock with his hands in his fleece pockets who laughed. Junpei, who was riding the green line every night, who'd made odds on bakeries, who didn't know." },
        { choose: [
          { t: "(Tell him what you saw in the garden.)", notes: 2, flag: 'eqx-junpei-told-garden', then: [
            { n: "She told him. Not everything. The washing line. The sheets. The apron knot on a seam. The way the woman had said something to a sheet that Solar had heard from the top of the stairs every Saturday of one of her lives." },
            { n: "He listened without moving. When she'd finished he sat for a long time with his hands flat on the betting book, and the red sky over them, and his face very still, the way it had gone still in the hall in July with the phone in his hand." },
            { s: 'junpei', f: 'sad', t: "...And he's under the clocks." },
            { s: 'junpei', f: 'serious', t: "Okay. Okay. I'm still going. Tomorrow. The next one on the line. I'm still gonna tick it." },
            { s: 'junpei', f: 'sad', t: "'Cause what else is he gonna do, Sol. Sit at her table and eat? I'd rather he was under a clock. I'd rather he was under every clock in the country than at that table." }
          ] },
          { t: "(Don't. Let him keep his clocks.)", notes: 2, then: [
            { n: "She didn't. She sat with it in her chest, the garden, the washing, the knot, a stone she'd been carrying for days, and let Junpei have his station book and his bakery odds and his one clean tick a night. It was the only thing either of them could give her father. It would have to be enough." }
          ] }
        ] }
      ] },
      { n: "The red went on. Long. Longer than the summer's. He didn't have a stopwatch; that was Akihiko's. He counted on his fingers on the cover of the book, under his breath, in sets of sixty, the way you'd count pitches." },
      { s: 'junpei', f: 'neutral', t: "Hey. Speaking of Aki-senpai. On the bridge, with your dad. It took me ten minutes to get his hand off. Ten minutes. Finger by finger. And the whole time he kept saying sorry. Not to me. To your dad. *Sorry, sorry, sir, sorry, it won't, I'm sorry.*" },
      { s: 'junpei', f: 'serious', t: "Nobody's ever told that guy it's okay to let go. You know that? Like, nobody, ever, his whole life. Everybody's always told him hold on, be strong, don't drop it." },
      { s: 'junpei', f: 'neutral', t: "I'm just saying. I've got the loudest voice in this dorm. I've been practicing on jars." },
      { n: "He didn't explain it. She didn't ask him to. They sat with it under the red sky, and after a while he bumped her knee with his, once." },
      { s: 'junpei', f: 'neutral', t: "And hey. If I'm ever not on the couch. Like, one night, if you come down and the couch is just a couch." },
      { s: 'junpei', f: 'happy', t: "Check the window floor first. I'm kidding." },
      { s: 'junpei', f: 'sad', t: "...Kinda. Check it anyway." },
      { n: "The lights came back on over the town at last, street by street from the bay inward, the way they always did, and the persimmons went back to being orange, and somewhere down the street a dog barked once at nothing and stopped." },
      { n: "Junpei opened the betting book on his knee. He turned to the grid, and found the date, and ticked her name, there on the roof, under the streetlight's glow coming up over the parapet. Then his own." },
      { ifEvent: 'eqx-1122', then: [
        { n: "Then, after a pause, the three names in the parents' rows. He ticked them very lightly, each one, barely a mark, as if the pen might hurt them." }
      ], else: [
        { n: "Then, after a pause, the three empty boxes in the parents' rows: he touched each one with the tip of the pen, without making a mark. Just touched them. Like checking a pulse." }
      ] },
      { n: "Then he closed it, and held it shut on his knees with both hands." }
    ] }
  ]
});
