/* Persona 3: Equinox · Rio & Saori · IX The Hermit (a duo link). Link data (femc-equinox-game.html). Format: link fields
   in assets/femc/game/core.js ("Links" header), scene lines in assets/femc/game/scene.js.
   Written: ranks 1–2 (from 4/13; their home is the tennis courts on Tuesday, Thursday and Saturday after school, so 4/13
   itself). Ranks 3–10 still to write. Shape: the stub fields from assets/femc/equinox/data/links.js (members / cast kept;
   this file wins over the stub). Both girls speak in every rank.
   Solstice's Rio and Saori links are shared memory (Rio: the ball cart, Ryoko, Mori, the first racket; Saori: the library,
   the cloth-bound book of the sun and the moon nobody had borrowed in eleven years, the polite space on the card). Whatever
   either of them was to Solar last year stays unsaid here (romance null; nothing reads Solstice link standing).
   The duo's hook: they're natives, and they're the only two people at Gekkoukan outside the dorm who remember her.
   Flags this file sets: eqx-rs-book (rank 1: Solar borrows the book again). Nothing reads it yet.
   Rank 2 (after 4/22): reads eqx-rs-book and ifAfter 4/29. Sets nothing. */
(window.FEMC_GAME_LINKS ||= []).push({
  id: 'rio-saori', name: 'Rio & Saori', short: 'Rio & Saori', arcana: 'Hermit', numeral: 'IX', from: 'Persona 3', kind: 'group',
  romance: null, starts: '4/8', members: ['rio', 'saori'], cast: { rio: 'Rio', saori: 'Saori' },
  home: { area: 'gekkoukan', spot: 'Tennis Courts', slot: 'after', days: [2, 4, 6],
          hint: 'After school on Tuesday, Thursday and Saturday, by the tennis courts: one of them playing, one of them reading.' },
  approach: "On the far tennis court one girl is serving into an empty box, hard, and glaring at every ball that clips the tape, and on the bench outside the fence another girl is reading a book with a cracked cloth spine and flinching, very slightly, at every serve.",
  ranks: [
    { after: '4/13', title: '1: the only two', place: 'Gekkoukan High · Tennis Courts', time: 'After School', music: 'tender', scene: [
      { bg: 'gekkoukan-tennis-courts' },
      { n: "The tennis courts at Gekkoukan were behind the gym, four of them in a row inside a tall green fence, and in April the wind came across them off the bay and took every high toss and did something to it. Practice had ended at five. The team had gone. On the far court one girl in a Gekkoukan tracksuit was still serving out of a ball cart into the empty box, toss, coil, *crack*, and glaring after every ball that clipped the tape as if it had said something about her mother." },
      { n: "On the bench outside the fence, in the lee of the gym wall, another girl sat with her knees together and a book open on them, a cloth-bound book with a cracked spine, and every time the racket cracked she flinched, very slightly, the way you flinch at a car backfiring three streets away, and turned a page." },
      { n: "Solar knew them both. She'd known them both last year, separately, a court and a library, two people who as far as she'd ever seen had never said a word to each other in their lives. She stood at the gate in the fence for a second just looking at that. Rio on the court. Saori on the bench. Twelve meters and a fence apart, and clearly, unmistakably, together." },
      { s: 'rio', f: 'neutral', t: "Senpai." },
      { n: "Rio said it without turning round, mid-toss, and then the ball came down and she didn't hit it, she caught it, and stood there with it in her hand, and turned, red to the ears." },
      { s: 'rio', f: 'flustered', t: "...I know. I know. We're the same year now. I'm a third-year. I keep doing it. I can't stop doing it. It's like a hiccup." },
      { s: 'saori', f: 'happy', t: "She's said it nineteen times since Thursday. I've been counting. I'm sorry. Not for counting. For telling you." },
      { choose: [
        { t: "Don't stop. I like it.", notes: 3, then: [
          { s: 'rio', f: 'flustered', t: "That's worse. That's so much worse. Now I'm going to do it on purpose and you'll know." }
        ] },
        { t: "You two know each other?", notes: 3, then: [
          { n: "They looked at each other. Through the fence. A long, complicated look, the look of two people who'd agreed on something in private and were now finding out whether they had to say it out loud." },
          { s: 'saori', f: 'neutral', t: "...We do now. It's a long story. It's actually a short story. It's just a strange one. Sorry." }
        ] },
        { t: "(Wave at both of them at once.)", notes: 2, then: [
          { n: "She waved at both of them at once, one hand, a wide arc that went from the court to the bench. Rio lifted her racket an inch, stiffly, like a salute she was embarrassed by. Saori lifted her book. Neither of them was looking at Solar when they did it. They were looking at each other, to check the other one had waved too." }
        ] }
      ] },
      { n: "Rio came off the court. She came through the gate and sat on the bench at the far end from Saori with her racket across her knees and a space between them exactly wide enough for one person, and Solar understood she was meant to sit in it, and sat in it." },
      { s: 'saori', f: 'neutral', t: "Thursday. The first day. At the shoe lockers. I'm sorry, I'll tell it properly." },
      { s: 'saori', f: 'neutral', t: "I saw you come in. With the others, from the dorm. And I said your name. Not loudly. I don't say things loudly. I just said it, the way you say a word you haven't said in a while, to see if it still works." },
      { s: 'rio', f: 'neutral', t: "And I said it at the same time. Right next to her. Senpai. Like an idiot. At the same exact second." },
      { s: 'saori', f: 'neutral', t: "And we looked at each other. And then we looked round. At everyone else. Two hundred people at the shoe lockers. And nobody else had said anything. Nobody else had even looked." },
      { s: 'rio', f: 'serious', t: "Mori walked right past you. Mori. She came to practice at seven every day last year because of you. She walked past you like you were a pillar." },
      { s: 'saori', f: 'sad', t: "Ms. Ozawa asked me on Friday who the new third-year was. With no surname. She signed your library card last year. She didn't remember it." },
      { s: 'rio', f: 'serious', t: "So it's us. It's just us. Outside your dorm, at this whole school, it's us two. We checked. We spent a whole lunch checking. We asked everybody." },
      // CG: eqx-rio-saori-bench — two girls on a bench outside a tennis court fence in spring, a space between them on the bench, one with a racket across her knees and one with an old cloth-bound book, both turned toward the empty space as if someone had just sat down in it.
      { choose: [
        { t: "Why you two?", notes: 3, then: [
          { s: 'saori', f: 'neutral', t: "I have a theory. I'm sorry, I always have a theory. I remember because I wrote it down. Everything. Last year. Every time you came to the library I wrote it in a notebook, the date and what you borrowed and one thing you said." },
          { s: 'rio', f: 'neutral', t: "And I remember because I'm stubborn. That's her theory about me. I didn't write anything down. I just refused to forget." },
          { s: 'saori', f: 'happy', t: "It's a very good theory. I'm proud of it. It doesn't explain anything." }
        ] },
        { t: "That must have been lonely.", notes: 3, then: [
          { s: 'rio', f: 'neutral', t: "It was for about an hour. Then it was her." },
          { n: "She didn't look at Saori when she said it. Saori didn't look at her either. They both looked at the court, very hard, with identical expressions, as if the court had said it." }
        ] },
        { t: "I'm glad it's you. Both of you.", notes: 2, then: [
          { s: 'saori', f: 'flustered', t: "...Oh. Thank you. Sorry. I don't know what to do with that. I'll put it somewhere." },
          { s: 'rio', f: 'neutral', t: "Put it in the notebook." },
          { s: 'saori', f: 'flustered', t: "I *am* going to put it in the notebook." }
        ] }
      ] },
      { n: "The wind came over the fence and took a stray ball out of the cart and rolled it across the court, slowly, and it bumped against the fence at the far end and stopped. Rio watched it go with a look on her face Solar had never seen there. Not annoyance. Something that had its jaw set against something else." },
      { s: 'rio', f: 'serious', t: "Tell her about the ball." },
      { s: 'saori', f: 'neutral', t: "You tell her. It's your ball." },
      { s: 'rio', f: 'serious', t: "...Saturday. I was serving late. On my own. One went long. Way long, over the back fence, into the courtyard. I went round to get it." },
      { s: 'rio', f: 'serious', t: "It had rolled across the paving and into the well. The old one. The one with the boards on it and the stupid little sign. There's a gap between the boards on one side, a few centimeters. I don't know how it fit. It fit." },
      { s: 'rio', f: 'serious', t: "I listened for it to hit the bottom. It didn't. I knelt there on the paving with my ear by the gap like an idiot and it just didn't. I counted to sixty." },
      { s: 'rio', f: 'neutral', t: "Monday morning it was on the baseline. Court one. Right in the middle of the service line. Dry. Not a mark on it. I'd written my initials on it, in marker, on Saturday, because the team keeps taking my balls. My initials." },
      { n: "She said it like a match report. She said it like a girl who'd been right about everything in April a year ago and had learned to say things slower and wasn't going to say this one any slower than it needed, and her hands were tight on the frame of her racket, both of them, the knuckles gone pale." },
      { choose: [
        { t: "Someone found it and put it back.", notes: 2, then: [
          { s: 'rio', f: 'neutral', t: "Yeah. Someone climbed down a well with no bottom, found one tennis ball, came up again, and walked it round to court one and put it on the line. Exactly on the line. Nicely." },
          { s: 'rio', f: 'serious', t: "I'd like to meet them. I'd like to meet them in a very well-lit room." }
        ] },
        { t: "Where's the ball now?", notes: 3, then: [
          { s: 'rio', f: 'neutral', t: "In my locker. In a plastic bag. I don't know why a plastic bag. It just seemed like a thing you put in a bag." },
          { s: 'saori', f: 'neutral', t: "She won't throw it away. I asked. She said, it came back, you don't throw away something that came back." },
          { s: 'rio', f: 'sad', t: "...I didn't say it like that." },
          { s: 'saori', f: 'neutral', t: "You said it exactly like that." }
        ] },
        { t: "Don't go near the well again. Either of you.", notes: 3, then: [
          { s: 'rio', f: 'neutral', t: "I wasn't going to. I'm stubborn, I'm not stupid." },
          { s: 'saori', f: 'neutral', t: "We go round it now. The long way. Everybody goes round it. I noticed on the first day. Nobody looks at it and everybody goes round it. Like water round a stone." }
        ] }
      ] },
      { s: 'saori', f: 'neutral', t: "And there's mine. I'm sorry. Mine's smaller. Mine's only a book." },
      { n: "She held it out across Rio's racket. The cloth-bound book with the cracked spine. Solar knew it before she touched it: the weight of it, the smell, the little gold-stamped title rubbed nearly away. *The Sun and the Moon, and other tales.* The book nobody had borrowed in eleven years, until a girl with no surname had come to the desk and asked for a tiger." },
      { s: 'saori', f: 'neutral', t: "You took it out last year. You renewed it twice. You brought it back. It went back on the bottom shelf, and I put something of mine next to it in December, and it stayed there all winter." },
      { s: 'saori', f: 'neutral', t: "And then, the week you went, it wasn't on the shelf. Not checked out. Just gone. The card's still in the pocket. Your name, and the space after it, and nobody else's, ever." },
      { s: 'saori', f: 'neutral', t: "I didn't mind. I thought, it's with her. Wherever she is. Books are patient." },
      { s: 'saori', f: 'serious', t: "And then on Monday morning it was in the book drop. I open the drop at eight. It was the only thing in it. Nobody saw who put it in." },
      { n: "She opened it. Not at the beginning. She knew the page. Toward the back, where the story got to the part every child knew, the mother gone over the last hill and the children alone in the house, and the knock on the door at night, and the voice through it, so warm, so kind, saying the line every version of the story said the same way." },
      { n: "There was something in the gutter of the pages. White. Fine as dust. A little line of it, caught down in the fold where the two pages met, the way crumbs collect in the spine of a book someone has been reading at the table." },
      { s: 'saori', f: 'neutral', t: "Flour, I think. I'm sorry. I didn't want to brush it out. It felt like it might be evidence. That's a silly thing to think about flour." },
      { s: 'saori', f: 'neutral', t: "Someone's been reading it. Just that part. Over and over. The rest of the book is clean. I checked every page." },
      // CG: eqx-tale-book — an old cloth-bound storybook lying open on a girl's school skirt, a soft old woodcut on the left page of a figure in a woman's clothes knocking at a cottage door at night, its hand hidden in its sleeve, a thin line of white flour caught in the gutter between the pages.
      { n: "Solar looked at it. At the line of white in the fold. At the illustration on the left-hand page, an old woodcut gone soft with age: a little house at night, a door, and at the door a shape in a woman's clothes, its back to the reader, one hand raised to knock. Its hand, in the woodcut, was very carefully hidden in its sleeve." },
      { choose: [
        { t: "Can I borrow it again?", notes: 3, flag: 'eqx-rs-book', then: [
          { s: 'saori', f: 'happy', t: "...Yes. Of course. I'll write you a card. I'll leave the space." },
          { s: 'rio', f: 'serious', t: "Don't read it at the table." },
          { n: "Saori laughed, startled, the small astonished laugh, and Rio looked so pleased with herself for having made it happen that she forgot to look worried for almost a whole second." }
        ] },
        { t: "Keep it at the library. Lock it up.", notes: 2, then: [
          { s: 'saori', f: 'neutral', t: "I'll put it in the back office. Ms. Ozawa has a cabinet with a key. She keeps the first editions in it, and her biscuits." },
          { s: 'saori', f: 'neutral', t: "...I'll check on it every morning. I'll write down that I checked." }
        ] },
        { t: "(Close the book. Gently.)", notes: 3, then: [
          { n: "She closed it. Gently, both hands, the way Saori handled the old books, so the flour stayed where it was in the fold. Saori watched her do it and something in her shoulders came down, as if that was the right answer and she hadn't known there was a right answer until she saw it." }
        ] }
      ] },
      { place: 'Gekkoukan High · Front Gate', time: 'Evening', bg: 'gekkoukanhigh', soft: true },
      { n: "They walked out together, the three of them, round the outside of the gym and not through the courtyard, without anyone suggesting it. Rio with her racket bag over her shoulder. Saori with the book against her chest. Solar between them, where they'd put her on the bench, which seemed to be where they'd decided she went." },
      { s: 'rio', f: 'neutral', t: "We're not going to ask you anything. We talked about it. Saturday. After the ball. Saori made a list." },
      { s: 'saori', f: 'flustered', t: "It was a short list. Sorry. It had one thing on it." },
      { s: 'rio', f: 'neutral', t: "We're not going to ask you to stay. Or where you went. Or what you are. Or whatever." },
      { s: 'rio', f: 'serious', t: "We just want you to know, if you go again, it's going to be us. Just us two. Remembering. At this whole school. And we're going to be really annoying about it." },
      { s: 'saori', f: 'neutral', t: "I'm going to write everything down. Every day. In case. I've already started. I've got a new notebook. Gray. It has today in it." },
      { choose: [
        { t: "Then write down that I said thank you.", notes: 3, then: [
          { s: 'saori', f: 'happy', t: "...I will. In the margin. With the date." },
          { s: 'rio', f: 'flustered', t: "Write down I said it too. I'm saying it too. I just can't say it the way she can." }
        ] },
        { t: "You two should be annoying together more often.", notes: 2, then: [
          { n: "They looked at each other over Solar's head. Rio went red. Saori went pink. Neither of them said anything, and both of them, Solar noticed, slowed down half a step so they'd stay level with each other." }
        ] },
        { t: "I'm not going anywhere today.", notes: 2, then: [
          { s: 'rio', f: 'neutral', t: "Today counts. Today's good. I'll take today." },
          { s: 'saori', f: 'neutral', t: "That's going in the notebook too." }
        ] }
      ] },
      { n: "At the gate they split three ways. Rio toward the station, at a jog she clearly hadn't decided on. Saori toward the bus, walking very upright with the book in both arms. And Solar up the hill, alone, the evening coming blue over the bay." },
      { n: "Halfway up she looked back. They hadn't gone. Both of them had stopped, at the bottom, on the two different corners, and turned, and were standing there looking up the hill after her, the way you'd stand at a platform to watch a train out of sight. Not waving. Just looking. Making sure." },
      { n: "She lifted her hand. Both of them lifted theirs back at exactly the same second, and saw each other do it, across the road, and both of them laughed, she could tell even from here, and turned away embarrassed, and went." }
    ] },
    { after: '4/22', title: '2: 1958', place: 'Gekkoukan High · Tennis Courts', time: 'After School', music: 'tender', scene: [
      { bg: 'gekkoukan-tennis-courts' },
      { n: "Saori was on the court. That was the first wrong thing, the good kind of wrong, and Solar stopped at the gate in the fence to look at it. Saori Hasegawa in a borrowed Gekkoukan tracksuit two sizes too big, the sleeves rolled four times, standing on the service line of court one with a racket held in front of her in both hands like a frying pan, and Rio behind her, very close, one hand on Saori's elbow and one flat between her shoulder blades, talking low and fast." },
      { s: 'rio', f: 'neutral', t: "Toss. Toss higher. No, don't watch the racket, the racket knows where it is. Watch the ball. Okay. Okay. Now—" },
      { n: "Saori tossed. The ball went up, and sideways, and the wind took it, and Saori swung at the place where it had been with enormous courage and her eyes tight shut, and missed it by a meter, and the ball came down on her head." },
      { s: 'saori', f: 'flustered', t: "...I'm sorry." },
      { s: 'rio', f: 'happy', t: "Don't be sorry! That was the best one! You kept your eyes shut the whole time, that's commitment!" },
      { choose: [
        { t: "(Clap from the gate.)", notes: 2, then: [
          { n: "She clapped. Both of them spun round and saw her, and both went red at exactly the same speed, and Saori held the racket behind her back as if she could hide a whole racket." }
        ] },
        { t: "Saori, you're playing tennis.", notes: 3, then: [
          { s: 'saori', f: 'flustered', t: "I'm not. I'm being taught tennis. Those are very different. I want that noted." },
          { s: 'rio', f: 'happy', t: "She's being taught tennis very badly by me. It's a trade. I'm learning the archive." }
        ] },
        { t: "Senpai's here.", notes: 2, then: [
          { s: 'rio', f: 'flustered', t: "Don't. Don't do it back. That's my thing. That's my bad habit, you can't have it." },
          { s: 'saori', f: 'happy', t: "Twenty-six. Since Thursday. Sorry. I'm still counting." }
        ] }
      ] },
      { n: "They came off the court and sat on the bench in the lee of the gym, the three of them, and the space in the middle was there again, exactly one person wide, and Solar sat in it without being told, and Saori put the racket down across her knees the way Rio did, carefully, as if it might go off, and took a gray notebook out of her bag." },
      { s: 'saori', f: 'neutral', t: "Rio's teaching me to serve. I'm teaching Rio the local history drawer. In the library. It's a trade. It was her idea. I'm sorry, it was my idea. It was both." },
      { s: 'rio', f: 'neutral', t: "The drawer's awful. It's all old maps and photos of people standing next to bridges. I've been in there three lunchtimes. I've seen so many bridges." },
      { s: 'saori', f: 'serious', t: "I wanted to look up the house. The one by the river. The one with the persimmon tree. Because of the flour. In the book." },
      { ifFlag: 'eqx-rs-book', then: [
        { s: 'saori', f: 'neutral', t: "You have the book. Have you read the middle? I'm not asking. I'm sorry. I'm asking." },
        { s: 'saori', f: 'neutral', t: "...You don't have to say. I just wanted you to know I know it's in your room. I wrote it down. *Borrowed again, April. Same card.*" }
      ] },
      { s: 'saori', f: 'neutral', t: "The library has a survey. From 1958. The town council photographed every street in Iwatodai that year, before they built the monorail, so they'd have a record. It's in an album with a leather cover. It smells of old glue. I love it." },
      { s: 'rio', f: 'serious', t: "Show her." },
      { n: "Saori opened the gray notebook. Tucked inside the back cover, in a clear plastic sleeve, the kind you'd keep a certificate in, was a photograph. Small, square, black and white, with a white border gone the color of tea, and a number written on the back in blue-black ink, a street name, a date. *August, 1958.*" },
      { s: 'saori', f: 'neutral', t: "I'm sorry. I took it out of the album. Ms. Ozawa doesn't know. I'll put it back. I'll put it back tomorrow. I just wanted you to see it in daylight." },
      { n: "It was the river street. Solar knew it at once, the way you know a face. The same bend in the road. The same low wall. The houses older and fewer and the river wider, no embankment yet, just a bank of reeds. And the house, the boarding house, two storeys, wooden, its upstairs windows in a row, exactly the same, as if it had been built from this photograph instead of the other way round." },
      { n: "The persimmon tree stood over the wall. Not smaller. Not a sapling. The same tree, with the same crook in its main branch, the same height. Beside it, by the wall, the well, round, low, capped with its heavy stone lid." },
      { n: "And at the gate, a woman." },
      { n: "She was standing exactly where the gate was, with her hands folded in front of her apron, the way you'd stand to see someone off. Her face was a blur. Not a scratch on the print, not damage; the photograph was sharp everywhere else, every reed, every roof tile. Her face alone was soft and smeared sideways, the way a face goes in an old photograph when someone moves during the exposure. Turns their head. Looks round at the camera, too fast." },
      { n: "Her hands weren't blurred. Folded on the apron, in the middle of the picture, perfectly sharp. White. Gloved." },
      // CG: eqx-1958 — an old square black-and-white photograph in a plastic sleeve, held in a schoolgirl's fingers: a riverside street in 1958, a two-storey wooden house, a persimmon tree and a capped stone well, and at the gate a woman in an apron whose face is a sideways blur while her folded white-gloved hands are perfectly sharp.
      { s: 'rio', f: 'neutral', t: "Lots of people wore gloves in 1958." },
      { s: 'saori', f: 'serious', t: "In August?" },
      { s: 'rio', f: 'serious', t: "...That's what I said. That's exactly what I said, out loud, in the archive, and she said *in August?*, and then neither of us said anything for the whole of lunch." },
      { choose: [
        { t: "It's her mother. Mrs. Oka said her mother kept the house before her.", notes: 2, then: [
          { s: 'saori', f: 'neutral', t: "That's the sensible answer. I wrote it down. Sensible answers go in the left column." },
          { n: "She turned the gray notebook so Solar could see. Two columns, ruled in pencil. On the left, neat, *her mother (the house was her mother's)*. On the right, nothing. Saori looked at the empty right-hand column for a long moment, with her pen above it, and didn't write anything in it." },
          { s: 'saori', f: 'sad', t: "I'm leaving the other column empty. Out of politeness. I'm sorry. It's the only thing I can think of to do about it." }
        ] },
        { t: "The tree's the same size.", notes: 3, then: [
          { s: 'saori', f: 'serious', t: "Yes. I measured it. Not the real one. I measured the photo with a ruler against the house's upstairs windows, and then Rio walked past the real one on Sunday and counted the windows from the road and estimated." },
          { s: 'rio', f: 'serious', t: "It's the same. Fifty years. Not a branch. Persimmons don't do that. Nothing does that. I asked the biology teacher. Hypothetically." },
          { s: 'saori', f: 'sad', t: "He said trees always grow, unless they're dead. Sorry. That's just what he said." }
        ] },
        { t: "(Hold the photo to the light. Look at her face.)", notes: 3, then: [
          { n: "She held it up to the light, the plastic sleeve and all, and looked at the blur where the woman's face should have been. It didn't resolve. It wasn't meant to. But the longer she looked the less it seemed like a face moving, and the more like a face that had been there and then, for an instant, while the shutter was open, been something wider." },
          { n: "She lowered it. Both of them were watching her. Saori's hand had found the sleeve of Rio's tracksuit on the bench between them and was holding it, and neither of them seemed to know it." }
        ] }
      ] },
      { ifAfter: '4/29', then: [
        { s: 'saori', f: 'neutral', t: "And there's this. I'm sorry. It's from the paper. The library takes three papers. I read them all. I always have." },
        { n: "A cutting, small, folded once, from the bottom of a local page. Three lines. A guesthouse employee near Iwatodai Station, sixty-one. Found at his place of work. A heart attack, in his sleep. The name. Below it, an advertisement for a bakery." },
        { s: 'saori', f: 'sad', t: "I clipped it. I don't know why. I didn't know him. I just thought, somebody should keep it somewhere other than in the bin with the bakery." },
        { s: 'rio', f: 'serious', t: "People keep dying in their sleep in this town. That's two. The hospital one wasn't in the paper. Saori heard about it from the nurse who does the blood drive." },
        { s: 'rio', f: 'serious', t: "Last year nobody in this town died in their sleep. Last year they all just went weird and stood around. I liked that better. That's an awful thing to say. I'm saying it." }
      ] },
      { n: "The wind came over the fence and lifted the corner of the gray notebook's page, and Saori put her hand flat on it, and on the photo, both. A ball rolled out of the cart on court one and went across the court, slowly, toward the back fence, and Rio watched it go and didn't move to get it." },
      { s: 'rio', f: 'neutral', t: "I don't serve to that end anymore. The back fence end. I turned the whole practice round. The team thinks I've got a thing about the wind." },
      { s: 'rio', f: 'serious', t: "I don't have a thing about the wind. I have a thing about the well on the other side of the fence." },
      { s: 'saori', f: 'neutral', t: "We're not going to ask you anything. Still. That's still the list. It still only has one thing on it." },
      { s: 'saori', f: 'sad', t: "...But I've started a second page. I'm sorry. I didn't mean to. It's not a list of questions. It's a list of things." },
      { n: "She turned to it. The gray notebook. A page near the back, with a heading in her small neat writing, and under it a column of short lines, some in Saori's hand and some, Solar saw, in a bigger, squarer, angrier one that had to be Rio's." },
      { n: "*Next year (if).* The culture festival, the library's book stall. The fireworks at the river in August. Rio's last tournament, from the stands. Graduation, the three of us, photo by the gate. The beach (Rio says the cold one). And at the bottom, in Rio's square hand, pressed hard, *show her the courts in snow.*" },
      { s: 'rio', f: 'flustered', t: "That's not asking. That's planning. Planning's different. Planning's just writing stuff down in case." },
      { s: 'saori', f: 'neutral', t: "It's in pencil. Everything's in pencil. In case." },
      { choose: [
        { t: "Put a tick by the courts in snow.", notes: 2, then: [
          { s: 'rio', f: 'surprised', t: "...You can't tick it. It hasn't happened. Ticking's for things that happened." },
          { s: 'saori', f: 'neutral', t: "She can tick it if she wants to. It's her list too." },
          { n: "Saori held out the pencil. Solar ticked it, small, in the margin. Rio looked at the tick for a long time and didn't say anything, and her ears went red, and stayed red." }
        ] },
        { t: "It's a good list. Leave it in pencil.", notes: 3, then: [
          { s: 'saori', f: 'happy', t: "...Yes. Pencil. That's what I thought. Pencil's honest. You can rub it out, but you can always see where it was." },
          { s: 'rio', f: 'neutral', t: "Nobody's rubbing anything out. I'm just saying. Nobody's rubbing out the snow one." }
        ] },
        { t: "(Don't say anything. Close the notebook gently.)", notes: 2, then: [
          { n: "She closed the notebook, gently, both hands, over the list and the photo and the clipping. Saori watched her do it the way she'd watched her close the tale book, and her shoulders came down, and Rio, beside her, let out a breath that was almost a laugh." },
          { s: 'rio', f: 'neutral', t: "...Yeah. Okay. That's an answer. That's a good answer. That's a *we'll see.*" }
        ] }
      ] },
      { place: 'Gekkoukan High · Library', time: 'Evening', bg: 'school-library', soft: true },
      { n: "Saori wanted a copy before she put the photo back. The library copier was in the back office behind the desk, a big gray machine that wheezed and warmed up for a full minute and smelled of hot toner, and Ms. Ozawa had gone home, and the office was lit by one lamp, and the three of them stood round the copier in a row like people round a fire." },
      { n: "Saori laid the photo face down on the glass, square, and closed the lid, and pressed the green button. The light went across under the lid, slow, white, from one end to the other. The machine thought about it. Then it pushed the copy out into the tray, warm." },
      { n: "Rio picked it up. Rio looked at it. Rio held it out without a word, and the paper was shaking a little in her hand." },
      { n: "The copy was darker than the photograph, the way copies always were, the grays gone to blacks, the river to ink, the contrast harder. The tree. The well. The house. The gloved hands, two pale shapes on a black apron. And the face." },
      { n: "On the copy, the blur had cleared. Not much. Not into a face. But the smear had resolved, the way a smear does when you darken it, into a direction. It wasn't a face turning away. It was a face that had turned toward the camera, fast, all at once. On the copy you could see where the eyes would be. It was looking straight out of the picture, at whoever had been holding it." },
      { choose: [
        { t: "(Take the copy. Fold it. Put it in your pocket.)", notes: 3, then: [
          { n: "She took it from Rio and folded it, twice, small, face in, and put it in the pocket of her blazer, and buttoned the pocket. Both of them watched her do it. Neither of them asked her why she'd want it. Saori wrote something in the notebook. Solar saw *copy (1), Solar, pocket*, and the time." }
        ] },
        { t: "Put the photo back. Tonight. Now.", notes: 2, then: [
          { s: 'saori', f: 'neutral', t: "Yes. Yes. You're right. I'm sorry. Now." },
          { n: "They put it back. All three of them, in the archive drawer, in the album with the leather cover and the smell of old glue, in its little paper corners, and Saori shut the album and shut the drawer and turned the small brass key, and stood with her hand on the drawer for a moment, the way you'd hold a door shut against wind." }
        ] },
        { t: "Copiers do that. They sharpen things.", notes: 1, then: [
          { s: 'rio', f: 'serious', t: "Yeah. They do. I know they do." },
          { s: 'rio', f: 'serious', t: "I just don't like what it sharpened." }
        ] }
      ] },
      { place: 'Gekkoukan High · Front Gate', time: 'Evening', bg: 'gekkoukanhigh', soft: true },
      { n: "They walked out round the gym, the long way, not through the courtyard. At the gate Rio didn't jog off toward the station. She stood there with her racket bag over her shoulder, scuffing the gravel with her shoe, until Saori turned toward the bus stop, and then fell in beside her, half a step behind, as if by accident." },
      { s: 'saori', f: 'neutral', t: "Rio walks me to the bus now. She says it's on her way." },
      { s: 'rio', f: 'flustered', t: "It's on my way." },
      { s: 'saori', f: 'happy', t: "It isn't. It's the opposite way. I looked at a map. I'm sorry. I love maps." },
      { n: "Solar went up the hill. Halfway, she looked back, the way she had last time, and they were at the bus stop, the two of them, under the shelter's light, side by side on the bench with a space between them exactly one person wide. They weren't looking up the hill this time. They were looking at each other, talking, Saori's hands moving, Rio laughing at something, and neither of them noticed her look." },
      { n: "She found she didn't mind. She found she was glad. She stood there on the hill with her hands in her pockets and watched them until the bus came, and they both got on it, both of them, though only one of them lived that way." }
    ] }
  ]
});
