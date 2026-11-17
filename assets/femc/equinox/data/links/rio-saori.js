/* Persona 3: Equinox · Rio & Saori · IX The Hermit (a duo link). Link data (femc-equinox-game.html). Format: link fields
   in assets/femc/game/core.js ("Links" header), scene lines in assets/femc/game/scene.js.
   Written: ranks 1–6 (from 4/13; their home is the tennis courts on Tuesday, Thursday and Saturday after school, so 4/13
   itself). Written: ranks 1–8; ranks 9–10 still to write.
   Rank 7 (after 10/26, '7: the cold beach': the courts → Seaside Park beach on a Saturday → the bus stop): reads dead.shinjiro
   (Saori's three-line cutting; he once put a library chair back exactly) else no cuttings. Saori's gate dream: the password
   worked, then on Monday the voice got it right ("I'm sitting between you… come and sit between us", in Solar's voice);
   she woke on a chair at her own window latch. Rio sleeps on Saori's floor holding her hand shut (bruises). Sapporo's second
   letter: answer in writing by 12/24; reads eqx-rs-snow, ifChoice asks.rio-saori (the list's "cold beach" line). The three
   names in the sand smoothed flat above the tide line, one pair of Solar-sized footprints standing in the space after her
   name. Sets eqx-rs-secret (Solar tells Saori something new, never written down), eqx-rs-names (names rewritten with no
   gaps). Rank 8 (after 11/25, '8: the date stamp': the rained-off courts → the library → the post box at the gate): the
   library's date stamp is back on 21 DEC every morning; reads dead.aigis ("returned abroad for family reasons"; no cutting),
   eqx-persimmon (Edogawa's brown book kept on hold at the desk), eqx-rs-names, ifChoice asks.rio-saori (the list: book stall
   41 sold, Rio bought 11). The culture festival (10/30): Saori counted six tape marks for five girls. Saori hasn't dreamed of the gate since the
   beach. Rio's sealed, stamped reply to Sapporo (Saori won't read it); Rio asks Solar to decide. Choice: "It's yours…"
   (flag eqx-rs-theirs, tally choose +1) / "Stay. Please. Stay here with her." (flag eqx-asked-rio-saori, tally asked +1,
   cakes +1; should join story-act4.js ASKED) / "Go. Sapporo." (flag eqx-rs-told-go). Saori's present: she asks nothing.
   Rio holds it in the slot at 17:12 and takes it out ("Tomorrow"); the list gains "(posted?)", unticked. summerHome (Nov 16): Seaside Park, same days, for Summer Break (7/21–8/31).
   Rank 4 (after 7/8, '4: the back of the strip': the courts): reads ifChoice asks.rio-saori (the list's Tanabata line).
   Their Tanabata strips (Saori took them down 7/8 at seven, after Mitsuru) with *stay* on the back; the rank-1 library card
   now has *stay* pressed, inkless, into the space after Solar's name. A three-person tennis game. Sets eqx-rs-card-surnames
   (Solar writes Lee / 이 / Kim in pencil over it), eqx-rs-rally (she returns Rio's hard serve).
   Rank 5 (after 7/29, '5: from the stands': Port Island municipal courts, Rio's last tournament): reads eqx-hunted,
   ifChoice asks.rio-saori, ifBefore 8/14. Mrs. Oka hands out rice cakes along the stands; Saori takes one; Rio walks off
   mid-point, bins it through the fence, takes a warning, loses 7–5 in the third on the tape. River fireworks cancelled.
   Sets nothing.
   Rank 6 (after 9/28, '6: the gate': the courts): reads eqx-seams. The bridge cutting; Saori's gate dream is back since
   9/23 in Solar's voice ("we're all here, all three of us"); Rio's scholarship letter from Sapporo. The duo's ask lands:
   *stay together*. Sets eqx-floor-rio-saori (always; their ask floor), eqx-rs-snow (optional). Shape: the stub fields from assets/femc/equinox/data/links.js (members / cast kept;
   this file wins over the stub). Both girls speak in every rank.
   Solstice's Rio and Saori links are shared memory (Rio: the ball cart, Ryoko, Mori, the first racket; Saori: the library,
   the cloth-bound book of the sun and the moon nobody had borrowed in eleven years, the polite space on the card). Whatever
   either of them was to Solar last year stays unsaid here (romance null; nothing reads Solstice link standing).
   The duo's hook: they're natives, and they're the only two people at Gekkoukan outside the dorm who remember her.
   Flags this file sets: eqx-rs-book (rank 1: Solar borrows the book again). Nothing reads it yet.
   Rank 2 (after 4/22): reads eqx-rs-book and ifAfter 4/29. Sets nothing.
   Rank 3 (after 6/8, the bench under the gym eaves; branches on eqx-last-grain, eqx-hunted) records the duo's ask:
   tally asks.rio-saori (+ cakes / choose). Sets nothing else. */
(window.FEMC_GAME_LINKS ||= []).push({
  id: 'rio-saori', name: 'Rio & Saori', short: 'Rio & Saori', arcana: 'Hermit', numeral: 'IX', from: 'Persona 3', kind: 'group',
  romance: null, starts: '4/8', members: ['rio', 'saori'], cast: { rio: 'Rio', saori: 'Saori' },
  home: { area: 'gekkoukan', spot: 'Tennis Courts', slot: 'after', days: [2, 4, 6],
          hint: 'After school on Tuesday, Thursday and Saturday, by the tennis courts: one of them playing, one of them reading.' },
  summerHome: { area: 'port', spot: 'Seaside Park', slot: 'after', days: [2, 4, 6],
          hint: 'Over the summer break, at Seaside Park on Tuesday, Thursday and Saturday afternoons: one running the sea wall, one reading in the shade.' },
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
    ] },
    { after: '6/8', title: '3: next year (if)', place: 'Gekkoukan High · Tennis Courts', time: 'After School', music: 'tender', scene: [
      { bg: 'gekkoukan-tennis-courts' },
      // BG: gekkoukan-tennis-courts-rain — the school tennis courts on a wet summer afternoon: puddles on the green surface, the net sagging with rain, a covered bench under the gym eaves with drips running off the gutter.
      { n: "The courts were under water. Not deep, a skin of it, the whole green surface gone glassy and gray and printed with the sky, the net sagging in the middle under the weight of its own wet, and every white line drowned and wavering like something seen through a fish tank. Nobody was playing. Nobody could have. The tennis club had been sent to do sit-ups in the gym, and Solar could hear them through the open fire door, counting, forty voices, out of time." },
      { n: "Rio and Saori were on the bench under the gym eaves, the only dry strip of anything, with the gutter above them dripping a bead curtain in front of their knees. Rio had her racket across her lap and was re-taping the grip, slowly, very badly, with a lot of muttering. Saori had the gray notebook open and wasn't writing in it." },
      { s: 'rio', f: 'neutral', t: "Senpai. I mean— ugh. Solar. Sit. The bench is dry. It's the only dry bench in Japan." },
      { s: 'saori', f: 'happy', t: "That's twenty-four since Monday. Sorry. I've stopped saying it out loud. I'm still counting inside." },
      { choose: [
        { t: "(Sit between them.)", notes: 3, then: [
          { n: "She sat between them. They both shifted to make room, at the same moment, in opposite directions, so that a space opened up exactly one person wide, as if they'd rehearsed it, as if they'd been keeping it." }
        ] },
        { t: "Shouldn't you be doing sit-ups, Rio?", notes: 2, then: [
          { s: 'rio', f: 'flustered', t: "I'm captain. Captains supervise. I'm supervising from here. I can hear them. I can hear Mori cheating from here." }
        ] },
        { t: "(Hold out your hand for the racket. Fix the grip.)", notes: 2, then: [
          { s: 'rio', f: 'surprised', t: "You can do grips? Since when? You couldn't do grips last year. You did one and it unravelled in a match and I had to play a whole set holding it together with my hand." },
          { n: "She did it anyway, badly, and Rio watched with her arms folded and then took it back and did it again herself, properly, and said *thank you* as if she meant it." }
        ] }
      ] },
      { n: "Saori closed the notebook and opened it again. She did that twice. Rio watched her do it out of the corner of her eye and then reached over, without looking, and put her hand flat on the cover, and held it shut." },
      { s: 'rio', f: 'serious', t: "Tell her about the copy first. Then the other thing." },
      { s: 'saori', f: 'flustered', t: "...I'm sorry. Yes. The copy." },
      { s: 'saori', f: 'neutral', t: "I put the photograph back. In the album. Like I said I would. I put it back on the Friday and I told Ms. Ozawa I'd been looking at the bridges." },
      { s: 'saori', f: 'sad', t: "But I kept the photocopy. The dark one. Where the— where it looks like it turned. I kept it in the notebook. In the back. And I started looking at it. At night. Before I slept. Just looking. I don't know why. It's not a nice picture." },
      { s: 'rio', f: 'serious', t: "She started having dreams." },
      { s: 'saori', f: 'flustered', t: "Rio." },
      { s: 'rio', f: 'serious', t: "She did. She told me. She's standing at a gate, and it's a nice evening, and somebody inside's asking her to come in for something to eat. Every night. Same gate. Same voice. And every night she gets one step closer before she wakes up." },
      { s: 'saori', f: 'sad', t: "...It was a very kind voice. That's the thing. I'm sorry. I don't know why I'm apologizing. It was the kindest voice. I wanted to go in so much I woke up crying about not going in." },
      { n: "The gym fire door banged in the wind. Forty voices counted to thirty and started again. Saori held her elbows. Solar felt it go down her back, the line, nape to spine, the way it always went, cold and exact, and the rain dripped off the gutter in front of their knees in a curtain, and she didn't look past it at the courtyard, at the well, at the plank lid dark with wet." },
      { s: 'rio', f: 'neutral', t: "So I took it off her." },
      { n: "Rio unzipped the front pocket of her racket bag and took out a clear plastic sandwich bag. Inside it was a tennis ball with her initials on it in marker, the one that had gone down the well in April and come back dry. And folded small beside the ball, in the same bag, a square of photocopy paper, dark, the toner gone gray at the folds." },
      { s: 'rio', f: 'serious', t: "They live together now. In my locker. The ball and the picture. Things that came back from that house that shouldn't have. I'm keeping them in one bag so I know where they are. I don't look at it. I just know where it is." },
      { s: 'saori', f: 'neutral', t: "The dreams stopped. The night she took it. I slept nine hours. I'm sorry. That's a lot of hours. I've never slept nine hours in my life." },
      { choose: [
        { t: "That was the right thing to do, Rio.", notes: 3, then: [
          { s: 'rio', f: 'flustered', t: "I know it was. I'm not looking for a medal. Don't give me a medal. I'll lose it in my locker with the haunted ball." }
        ] },
        { t: "(Hold your hand out for the bag.)", notes: 2, then: [
          { n: "Rio looked at her hand. Then at the bag. Then she shook her head, short, and zipped it back into the racket pocket, and patted the pocket, once, flat, like you'd pat a dog to settle it." },
          { s: 'rio', f: 'serious', t: "No. Nope. It's mine now. You've got enough stuff in your room. You've got the book. One haunted thing each. That's fair." }
        ] },
        { t: "Saori. You don't have to look at anything else about that house.", notes: 2, then: [
          { s: 'saori', f: 'sad', t: "I know. I've stopped. I've stopped going to the drawer. I promised Rio. I'm sorry. Not for promising. For how much I want to go back." }
        ] }
      ] },
      { ifEvent: 'eqx-last-grain', then: [
        { n: "Saori opened the notebook. There was a new cutting pressed flat in it, small, three lines, from a paper Solar hadn't seen. *Gekkoukan student, 18, found deceased at private residence, Iwatodai. Asphyxiation. No suspicious circumstances.*" },
        { s: 'rio', f: 'sad', t: "He was in my year. Suemitsu. He sold me water once. Last spring. It was supposed to cure stuff. I bought it because he looked so pleased with himself. It didn't cure anything. It was just water." },
        { s: 'rio', f: 'serious', t: "No suspicious circumstances. They read it out at assembly. The principal said it. Everybody bowed. Nobody said where. I knew where. Everybody in the dorm knew where." },
        { s: 'saori', f: 'sad', t: "Two in their sleep. And now one at a table. I keep the cuttings. I'm sorry. I don't know who I keep them for. Somebody should." }
      ] },
      { n: "Rio took her hand off the notebook. She nodded at it. Saori opened it, not to the back this time, to a page near the middle, one Solar had seen once before, in April, under a hand pulling it away." },
      { n: "*Next year (if).* In pencil. Saori's small upright hand. A list down the left side: *the book stall in the shopping street on Sundays. August river fireworks from the bridge (not ON the bridge). Rio's last tournament. Graduation photo by the gate. The cold beach. Show her the courts in snow.* That last one in Rio's hand, bigger, slanting, as if it had been written very fast before anybody could stop it." },
      { n: "There was more now. Lines added in June. *Tanabata (her strip next to ours). Hagakure, the three of us, the big bowl. Teach her to serve properly (R). Teach her the drawer (S) — no. Not the drawer.* Crossed out, the drawer. And at the very bottom, in both their handwritings, one word each, as if they'd taken turns: *Every. Thing.*" },
      { s: 'saori', f: 'neutral', t: "We said we wouldn't ask you anything. In April. We meant it. We still mean it." },
      { s: 'rio', f: 'serious', t: "We're not asking. This isn't asking. Saori wants to know if she's allowed to do something to her own notebook. That's different. That's like asking if you can borrow a pencil." },
      { s: 'saori', f: 'sad', t: "...Rio graduates. In March. With you. I don't. I've got another year. So next year, the real one, I'm the only one left on this bench." },
      { s: 'saori', f: 'neutral', t: "So this year's the only year there's three of us. This year's the whole list. And every time I write a line on it I write it under that word. That little word in brackets at the top. *If.*" },
      { s: 'saori', f: 'sad', t: "I want to rub it out. I've had the eraser on it four times. I just want to know if I'm allowed. If you say I can, I'll rub it out, and then it's just *next year*, like a normal person's list, like everybody else's, and I'll stop being frightened of my own handwriting." },
      { n: "She held the eraser over the page. A small pink one, the kind you'd buy in a pack of ten, already worn to a slant at one end. Rio was looking at the courts, at the drowned lines, very hard, with her jaw set, and her hand had found the edge of the bench between them and was gripping it." },
      // CG: eqx-next-year-if — an open gray notebook on a bench under dripping gym eaves, a pencilled list headed 'Next year (if)', a small pink eraser held over the word in brackets; three girls' knees in school skirts, a tennis racket across one lap.
      { n: "The rain dripped off the gutter in its curtain. On the other side of it the courtyard was gray and wet and empty, and the forty voices in the gym had stopped counting, and in the quiet Solar could hear, very faintly, from somewhere past the courtyard, from the direction of the well, rain falling on wood, softly, like rain on a drum with a hand laid flat on it." },
      { choose: [
        { t: "The if is mine. The page is yours. Write it like you'd do all of it anyway.", notes: 2, tally: { choose: 1, 'asks.rio-saori': 'choose' }, then: [
          { s: 'saori', f: 'surprised', t: "...Oh." },
          { n: "She looked at the page. She looked at it for a long time, with the eraser still in the air over it, and Solar watched her try the idea on, a list that wasn't a list of things with Solar in them but a list of things, just things, a girl's own summer, and watched it not fit, yet, and pinch." },
          { s: 'rio', f: 'serious', t: "...Like I'd play the tournament anyway. Even if nobody I liked was in the stands." },
          { s: 'solar', f: 'neutral', t: "Like that." },
          { s: 'rio', f: 'sad', t: "That's a horrible answer. I hate it. I'm going to think about it in the shower for a week." },
          { n: "Saori put the eraser down on the bench. She didn't rub anything out. She took her pencil, instead, and very carefully, in the margin beside *Rio's last tournament*, she wrote *(go anyway)*, and beside *the cold beach*, *(go anyway)*, and then sat and looked at the brackets for a while, and closed the book." },
          { s: 'saori', f: 'neutral', t: "...I'm keeping the if. I'm sorry. It's yours. I'll leave it where you put it." }
        ] },
        { t: "Rub it out.", notes: 3, tally: { cakes: 1, 'asks.rio-saori': 'yes' }, then: [
          { n: "Saori made a small sound, not quite a word. Then she bent over the notebook and rubbed, carefully, in small hard circles, the way you'd clean a window, the eraser crumbs gathering in the gutter of the page, until the brackets were gone and the word inside them was gone and there was only a pale smudge at the top of the list where they'd been, and under it, *Next year.*" },
          { s: 'saori', f: 'happy', t: "...There. There. It's just a list now." },
          { n: "Rio let go of the bench. She let out a breath that went on a long time, and grinned at the drowned courts, the real grin, the one from last summer when she'd won something, and bumped her shoulder into Solar's, hard, and left it there." },
          { s: 'rio', f: 'happy', t: "Snow. You're seeing the courts in snow. That's binding. I wrote it in pen in my head." }
        ] },
        { t: "Leave it on, Saori. I can't promise you next year.", notes: 2, tally: { 'asks.rio-saori': 'no' }, then: [
          { s: 'saori', f: 'sad', t: "...No. No, of course. I'm sorry. That was silly. I knew it was silly." },
          { n: "She put the eraser away in her pencil case and zipped it. She didn't close the notebook. She sat with it open on her knees, looking at the brackets, and Rio, beside her, didn't say anything, and took her hand off the bench and put it on Saori's back instead, between her shoulder blades, flat, and kept it there." },
          { s: 'rio', f: 'serious', t: "It's fine. It's fine. We've got this year. The list's still good. We'll do the whole list. With the if on. Brackets are just punctuation. I passed punctuation." }
        ] }
      ] },
      { place: 'Gekkoukan High · Front Gate', time: 'Evening', bg: 'gekkoukanhigh-summer', soft: true },
      { n: "The rain stopped while they were walking out. All at once, the way it did that June, as if somebody had turned off a tap, and the three of them came out of the gate into a street gone suddenly bright and steaming, every puddle with the sky in it, every leaf dripping in the low gold light." },
      { n: "They went the long way, round the gym, not through the courtyard. They always did now. Nobody had said so." },
      { ifEvent: 'eqx-hunted', then: [
        { s: 'rio', f: 'neutral', t: "I'm walking her to the bus. And then I'm getting the bus. With her. And then I'm walking her to her door. I don't care that I don't live there. Two's the rule. I heard about the rule. Everybody's heard about the rule. The whole town's walking in twos and nobody knows why." }
      ], else: [
        { s: 'rio', f: 'neutral', t: "I'm walking her to the bus. It's on my way." },
        { s: 'saori', f: 'happy', t: "It isn't. Sorry. It's still not." }
      ] },
      { n: "At the corner Saori stopped and turned round, the gray notebook held against her chest in both arms, and looked at Solar, and for a second seemed about to say something, and then said something else." },
      { s: 'saori', f: 'neutral', t: "Thank you for the answer. Whatever it was. I'm going to write it down. I write everything down. Then if you forget, there's one place it's kept." },
      { n: "They went. Solar watched them to the bus stop, the two of them, under the shelter, side by side on the bench with the space between them one person wide, which they didn't close, and which they didn't seem to want to. When the bus came they both got on, and through its back window, as it pulled away, she saw Saori open the notebook on her knee and start to write, and Rio lean over to read it, and the window fill with sky." }
    ] },
    { after: '7/8', title: '4: the back of the strip', place: 'Gekkoukan High · Tennis Courts', time: 'After School', music: 'tender', scene: [
      { bg: 'gekkoukan-tennis-courts' },
      { n: "The courts were dry for the first time in a month. The rainy season was going out the way it had come in, all at once, and the afternoon was white and close and smelled of hot asphalt and cut grass, and the cicadas had started in the trees behind the gym, one and then all of them, a sound like a pan of oil coming up to heat. Rio was on court one, alone, serving out of the cart into the empty box, toward the gym end. Not the back fence end. She hadn't served to the back fence end since April." },
      { n: "Saori was on the bench in the shade with a stack of exam notes on her knees, not reading them. The gray notebook was on top of the stack, shut, with her hand flat on it." },
      { s: 'rio', f: 'neutral', t: "Senpai." },
      { s: 'saori', f: 'happy', t: "Thirty-one. Since the sixth. She's gone backward. I think it's the exams." },
      { s: 'rio', f: 'flustered', t: "It's not the exams. It's the heat. My brain's a fried egg. I can't be held responsible for a fried egg." },
      { ifChoice: { 'asks.rio-saori': 'yes' }, then: [
        { n: "Saori opened the notebook on her knee to show her, without being asked, the way you'd show somebody a photograph of a new baby. The list. *Next year.* No brackets now; only the faint smudge at the top of the page where they'd been rubbed out, and under it the items, and beside *Tanabata (her strip next to ours)*, in pencil, small, a tick." },
        { s: 'saori', f: 'neutral', t: "I ticked it. On the seventh. I'm sorry. It felt very good. I've never ticked anything that good." }
      ] },
      { ifChoice: { 'asks.rio-saori': 'choose' }, then: [
        { n: "Saori opened the notebook on her knee to show her. The list, the *(if)* still at the top in its little brackets, and the *(go anyway)* she'd written in the margins in June, and a new one, beside *Tanabata (her strip next to ours)*: *(went anyway. she was there.)*" },
        { s: 'saori', f: 'neutral', t: "I'm writing it like that now. Go anyway. Went anyway. It's a very strange way to write a list. I'm getting used to it. Sorry." }
      ] },
      { ifChoice: { 'asks.rio-saori': 'no' }, then: [
        { n: "Saori opened the notebook on her knee to show her. The list, the *(if)* at the top in its little brackets, pressed a little harder now, as if she'd gone over it. Beside *Tanabata (her strip next to ours)*, a tick, and beside the tick, in brackets, very small, *(this year)*." },
        { s: 'saori', f: 'neutral', t: "This year. That's all I'm writing now. It's honest. You said you couldn't promise next year. So I'm only writing this year. I'm sorry. It's a much shorter list." }
      ] },
      { choose: [
        { t: "(Sit in the space between them.)", notes: 2, then: [
          { n: "Rio came off the court, and the space opened on the bench, exactly one person wide, and she sat in it. It was hot from the sun that had been on it in the morning. Both of them leaned toward her very slightly, the way plants lean toward a window." }
        ] },
        { t: "Thirty-one is a lot, Rio.", notes: 2, then: [
          { s: 'rio', f: 'flustered', t: "It's a cry for help. I'm crying for help. Nobody's listening. Saori's just counting it." },
          { s: 'saori', f: 'happy', t: "I am listening. I'm listening very accurately." }
        ] },
        { t: "(Pick up a ball out of the cart and throw it to Rio.)", notes: 3, then: [
          { n: "She took a ball out of the cart and lobbed it to Rio underhand, and Rio caught it one-handed without looking, and grinned, the real one, and lobbed it back, and they did that four times over the fence while Saori turned her head back and forth after the ball like somebody watching a very slow match." }
        ] }
      ] },
      { n: "Saori took her hand off the notebook. Then she opened it at the back, where the photograph had been in April, and the cuttings, and took out two strips of paper, pressed flat between the pages. One pink, one blue. Wish strips. The kind they'd tied on the bamboo at Naganaki on the seventh, the soft cheap paper gone wavy with rain and dried flat again, the ink on the front run into a pale blur." },
      { s: 'saori', f: 'neutral', t: "I went up at seven. On the eighth. The morning after. I don't know why. I wanted to see them in the rain. Somebody had been before me. Mitsuru-san, I think. I saw her coming down the steps with her handkerchief in her hand like she was carrying something in it." },
      { s: 'saori', f: 'neutral', t: "I found ours. Rio's and mine. Next to each other. I'd tied them next to each other. I'm sorry. I did it on purpose." },
      { s: 'rio', f: 'serious', t: "Turn them over." },
      { n: "Saori turned them over." },
      { n: "On the back of each, in the same hand, heavy, pressed so hard the wet paper had torn along the strokes and dried torn, so you could see the bench through the letters: one word." },
      { n: "*stay*" },
      { n: "Solar had seen it already. Mitsuru had shown her on her phone, eleven photographs, front and back, a hundred strips, the whole bamboo. She hadn't seen it like this. In somebody's lap. On somebody's own wish." },
      { s: 'rio', f: 'serious', t: "Somebody wrote on my wish. Somebody turned my wish over and wrote on the back of it like it was a shopping list. I want to know who. I want to find them in a very well-lit room." },
      { s: 'saori', f: 'neutral', t: "Rio wished for snow. On the courts. I'm sorry, I read it. It was very hard to read after the rain, but I know her handwriting. *Win something. Then snow.*" },
      { s: 'rio', f: 'flustered', t: "You weren't supposed to read it! That's the whole point of a wish! It's private! You tie it on a tree and the tree reads it!" },
      { s: 'saori', f: 'sad', t: "...Somebody else read it. Somebody else read it and answered it. I just wanted to know what it had said before it was answered." },
      { choose: [
        { t: "What was yours, Saori?", notes: 3, then: [
          { n: "Saori looked at the pink strip in her lap. She didn't turn it back over. She kept it face down, the word up, and put her hand flat on top of it, over the torn letters." },
          { s: 'saori', f: 'flustered', t: "...I'm not telling. Sorry. It's the only private thing I've got. I write everything else down." },
          { n: "Rio, beside her, was looking very carefully at the courts, and her ears had gone red, and Solar understood that Rio already knew what it said, and had always known, and was never going to say either." }
        ] },
        { t: "Burn them.", notes: 2, then: [
          { s: 'rio', f: 'serious', t: "That's what I said! That's exactly what I said. Saori said no." },
          { s: 'saori', f: 'neutral', t: "They're evidence. And they're ours. Somebody wrote on them; they're still ours. I'm not giving them to anyone. Not even to a fire. I'm sorry." }
        ] },
        { t: "(Take the blue one. Turn it to the front. Smooth it flat.)", notes: 3, then: [
          { n: "She took the blue strip, Rio's, and turned it front side up, and smoothed it flat on her knee with the side of her hand, slowly, the way you'd smooth a crumpled letter, until the run ink lay as flat as it could. You could make out *Win* if you knew. You could make out *snow*." },
          { n: "Rio watched her hands. Then she took the strip back, front side up, and folded it in half, front in, and put it in the pocket of her tracksuit and zipped the pocket, and patted it, once." },
          { s: 'rio', f: 'neutral', t: "...That's the side that counts. The front. That's what I wrote. Whatever's on the back's not mine." }
        ] }
      ] },
      { s: 'saori', f: 'neutral', t: "And there's this. I'm sorry. I nearly didn't bring it." },
      { n: "She took a library card out of the notebook. Old, buff, soft at the corners. Solar knew it before she read it: the card from the pocket inside the back cover of the cloth-bound book, *The Sun and the Moon, and other tales*, the card she'd signed last year with no surname, the card with the polite space after her name that nobody else had ever written in." },
      { s: 'saori', f: 'neutral', t: "I took it out of the book when you borrowed it again. I keep it. I'm sorry. I like to know where it is." },
      { s: 'saori', f: 'serious', t: "Hold it to the light. The space. After your name." },
      { n: "Solar held it up to the white sky. Her own handwriting, a year old, the first name and then nothing, the space. And in the space, with the light behind it, not in ink, not in anything, pressed into the card so hard it had made a groove you could only see with the sun through it: a word. Heavy. The same hand." },
      { n: "*stay*" },
      { s: 'saori', f: 'sad', t: "It wasn't there in April. I'd have seen it. I look at that card every week. It came the same night as the strips. I think it came the same night as everything." },
      // CG: eqx-pressed-word — a worn buff library card held up against a white summer sky between a girl's fingers, a first name in faded ink and a long blank space after it, and in the blank, visible only where the light comes through, a heavy word pressed into the card with no ink.
      { choose: [
        { t: "(Give it back to her. Gently.)", notes: 3, then: [
          { n: "She gave it back. Saori took it in both hands and slid it into the back of the notebook, face down, behind the strips, and closed the cover, and put her hand flat on it again." },
          { s: 'saori', f: 'neutral', t: "I'll keep it. It's still your card. The space is still yours. Whatever got pressed into it. Sorry. That's how libraries work." }
        ] },
        { t: "(Write your surnames in the space. All three. Right over it.)", notes: 3, flag: 'eqx-rs-card-surnames', then: [
          { n: "She took Saori's pencil out of the spine of the notebook and wrote in the space after her name, over the pressed word, small, one after the other, the way she'd never been able to on any form anywhere: *Lee. 이. Kim.*" },
          { n: "The pencil went in. It didn't bead, the way ink had on the school form; it was only pencil, gray and honest, and it went into the paper the way pencil does. Where the groove was it dropped into the groove and filled it, and the word went under the names and you couldn't see it any more, not even against the sky." },
          { s: 'saori', f: 'surprised', t: "...Oh. Three. You have three." },
          { s: 'rio', f: 'neutral', t: "Of course she has three. Look at her. She's obviously got three of everything." },
          { n: "Saori looked at the card for a long time. Then she wrote, in the notebook, in the margin, very small: *Solar wrote her name. All of it. July.*" }
        ] },
        { t: "Saori. Stop looking for these. Please.", notes: 2, then: [
          { s: 'saori', f: 'sad', t: "...I'm not looking. That's the thing. I promised Rio. I'm not looking for anything. They're just there. They keep being there. On my own things." },
          { s: 'rio', f: 'serious', t: "She's not looking. I'm watching her not look. Every day. It's a full-time job." }
        ] }
      ] },
      { n: "Rio stood up. She stood up all at once, the way she did when she'd decided something and didn't want to give it time to be argued with, and picked up two rackets from beside the cart and held them out, one to Saori, one to Solar." },
      { s: 'rio', f: 'serious', t: "Okay. That's enough. That's enough reading. We're playing tennis." },
      { s: 'saori', f: 'flustered', t: "There are three of us. Three people can't play tennis. It's a game for two or four. I've read the rules. I'm sorry. I read the rules." },
      { s: 'rio', f: 'neutral', t: "Watch me. You two on that side. Me on this side. I play both of you. I've been playing both of you since April anyway." },
      { place: 'Gekkoukan High · Tennis Courts', time: 'Evening', bg: 'gekkoukan-tennis-courts', music: 'joy', soft: true },
      { n: "It was a terrible game. It was the best game Solar had played in any life. Rio served soft, underhand, like you'd serve to children, and then forgot herself and served hard, and apologized across the net, and served soft again. Saori swung at everything with her eyes shut and connected with one ball in thirty and sent it straight up into the white sky, and all three of them stood and watched it go up, and up, and come down on the far side of the fence, in the bushes, and Saori said *sorry* to the bushes." },
      { n: "The cicadas went on. The sun went orange behind the gym. The tennis club came out of the clubhouse in a group to go home and stopped by the fence to watch their captain play two people who couldn't play at the same time, and Mori said something, and Rio shouted something back at her that made the whole club go *ooh*, and went red, and served too hard." },
      { choose: [
        { t: "(Get one back. Just one. Properly.)", notes: 3, flag: 'eqx-rs-rally', then: [
          { n: "She got one back. Properly. Rio's hard one, the one she always regretted, came over the net low and fast and Solar didn't think, her body remembered something from last year, from a ball cart and a first racket, and she swung through it, and it went back over the net and landed on the line, just on it, chalk flying." },
          { n: "Rio stood there and watched it go past her. She didn't move for it. She turned round and looked at the chalk mark on the line, and back at Solar, and her face went through about four things." },
          { s: 'rio', f: 'surprised', t: "...That was in. That was *in*. You can't do that! You couldn't do that last year! Who taught you that!" },
          { s: 'solar', f: 'neutral', t: "You did." },
          { s: 'rio', f: 'flustered', t: "I *know* I did. That's what's so annoying." }
        ] },
        { t: "(Cover Saori's side as well as yours. Run for everything.)", notes: 2, then: [
          { n: "She ran for everything. Both halves of the court, every ball, Saori's and hers, back and forth along the baseline in the orange light until she was soaked and laughing and couldn't breathe, and Saori stood in the middle of her half with her racket held up in front of her like a shield and cheered every time Solar went past her, *sorry, sorry, go on, sorry*." }
        ] }
      ] },
      { n: "When it was too dark to see the ball they sat down on the court itself, all three of them, on the warm green, with their backs against the net post, and drank from Rio's one water bottle in turn." },
      { s: 'rio', f: 'neutral', t: "Prefecturals are this summer. On Port Island. It's my last tournament. Third years are done after the summer. That's it. That's the last time I play anything that counts." },
      { s: 'rio', f: 'flustered', t: "It's on the list. From the stands. I'm not asking. It's on the list. I'm just— telling you where the stands are." },
      { s: 'saori', f: 'neutral', t: "The municipal courts on Port Island. The stands are on the shady side. I've already worked out where we'll sit. I'm sorry. I drew a map." },
      { choose: [
        { t: "I'll be there.", notes: 3, then: [
          { s: 'rio', f: 'neutral', t: "...Okay. Okay. Good. Don't cheer. If you cheer I'll lose. Just sit there. Just be in the stands." },
          { s: 'saori', f: 'happy', t: "I'm writing that down. *She'll be there.* With the date. In pen, actually. Sorry. I'm using pen." }
        ] },
        { t: "Try and stop me.", notes: 2, then: [
          { s: 'rio', f: 'happy', t: "Nobody's trying to stop you. That's the opposite of what we're doing. Oh my God. You're as bad as she is." }
        ] }
      ] },
      { n: "They went out round the gym, the long way, the three of them. At the gate Saori stopped and took the two strips out of the notebook again and looked at them, face down, *stay*, *stay*, in the last of the light." },
      { s: 'saori', f: 'neutral', t: "I'm going to keep them like this. Word side up. So I always know which way they've been turned. So nobody can turn them again without me seeing." },
      { n: "She put them back. Rio walked her to the bus. Solar went up the hill, and at the top she looked back, the way she always did now, and they were at the bus stop under the shelter's light, side by side, with the space between them, and Rio was holding up her racket against the sky, swinging it slowly, showing Saori something, a serve, the shape of a serve, over and over, while Saori watched and didn't write anything down." }
    ] },
    { after: '7/29', title: '5: from the stands', place: 'Port Island · Municipal Courts', time: 'Daytime', music: 'joy', scene: [
      { bg: 'gekkoukan-tennis-courts' },
      // BG: eqx-municipal-courts — a public tennis complex by the bay in high summer: eight hard courts in a row, a small concrete grandstand with a shade roof on one side, banners for a prefectural high-school tournament, heat shimmering off the surface, the sea glinting past the far fence.
      { n: "The municipal courts were on the bay side of Port Island, eight of them in a row with the sea glittering behind the far fence, and the heat came up off the hard green surface in a shimmer you could see, so that the players at the far end wobbled like reflections in a pool. Banners on the fence. A tent with a scoreboard and a man with a megaphone. The smell of sunscreen and hot rubber and the sea." },
      { n: "Saori had drawn a map, and the map was right. The stands were a little concrete grandstand on the shady side, six rows, and she was in the third row, at the end, under a white parasol, with a cool box at her feet, a towel folded on her knee, a bag of rice crackers, a bottle of sports drink for Rio wrapped in a wet cloth to keep it cold, and the gray notebook open on her lap with a pencil in the spine. She'd saved the seat beside her with a hat." },
      { s: 'saori', f: 'happy', t: "You came. I'm writing it down. Sit. That's your seat. I've been guarding it since eight. A man wanted it. I said *sorry* to him eleven times until he went away." },
      { ifEvent: 'eqx-hunted', then: [
        { n: "Everybody in the stands was in twos. Solar noticed it after a minute, the way you notice a pattern in wallpaper. Parents in pairs, schoolgirls in pairs, the old men who came to every tournament in pairs. Nobody alone. Nobody had said anything; nobody in this town ever said anything; they'd just started, since the end of July, all of them, without knowing why." }
      ] },
      { n: "Rio was on court three. Quarterfinal. Solar could tell she'd seen them by the way she very carefully didn't look at the stands, and served, and won the point, and turned round to walk back to the baseline with her chin up and her ears red." },
      { s: 'saori', f: 'neutral', t: "She won the first round six-one, six-two. The second, six-four, seven-five. I've got every point. This girl's a second-year from Tatsumi. She's very good. She's taller. I'm not worried. I'm very worried. Sorry." },
      { ifChoice: { 'asks.rio-saori': 'yes' }, then: [
        { n: "The notebook was open at the list. *Next year.* No brackets. Beside *Rio's last tournament*, the pencil was waiting in the spine, as if Saori had put it there ready to tick." }
      ] },
      { ifChoice: { 'asks.rio-saori': 'choose' }, then: [
        { n: "The notebook was open at the list. Beside *Rio's last tournament* in the margin, in pencil, *(go anyway)*, written in June, and beside that, new, in pen, *(came anyway)*." }
      ] },
      { ifChoice: { 'asks.rio-saori': 'no' }, then: [
        { n: "The notebook was open at the list. The *(if)* at the top. Beside *Rio's last tournament*, a small *(this year)*, and the pencil in the spine." }
      ] },
      { choose: [
        { t: "(Sit down. Don't cheer. Just be in the stands.)", notes: 3, then: [
          { n: "She sat down in her guarded seat and didn't cheer. She sat with her hands in her lap the way Rio had asked, just there, and after a while Saori passed her the rice crackers without looking, and she took one, and on court three Rio looked up at the stands for the first time, between points, for less than a second, and found them, and served an ace." }
        ] },
        { t: "GO, RIO!", notes: 2, then: [
          { n: "She shouted it. She couldn't help it. The whole grandstand turned round. On court three Rio stopped in the middle of her toss and let the ball drop and stood there with her back to the stands, very still, and then turned and pointed her racket straight at Solar like a sword, and the grandstand laughed, and Rio served the next one so hard it went through the Tatsumi girl's racket strings and stuck." },
          { s: 'saori', f: 'flustered', t: "...She said don't cheer. She's going to talk about that for a week. Sorry. I'm going to enjoy it." }
        ] },
        { t: "(Take the pencil. Hold it ready for her.)", notes: 2, then: [
          { n: "She took the pencil out of the spine and held it, ready, and Saori looked at her holding it and something in her face went soft and frightened at once, and she took the pencil back, gently, and held it herself, in her fist, like a candle." }
        ] }
      ] },
      { n: "There was a woman coming along the front of the stands." },
      { n: "Solar saw her at the far end first, by the scoreboard tent, the way you see someone you know in a crowd before you know you've seen them: a small figure in a light summer kimono the color of weak tea, with a parasol over one shoulder and a tin in the crook of her other arm. A round tin, painted. Cranes. She was going along the front row and stopping at each family, and bending, and holding out the tin, and people were taking something out of it and thanking her and putting it in their mouths." },
      { n: "Mrs. Oka. Here. At a tennis tournament on Port Island in the heat, with her gloves on, white cotton, a summer pair." },
      { s: 'saori', f: 'neutral', t: "...That's the lady from the house by the river. Isn't it. Sorry. I know it is. I've seen her at the gate in the photograph. I mean. I've seen the gate." },
      { n: "She came along the rows. She was humming. Solar couldn't hear what. She stopped at the old men and they took one each and bowed and laughed; she stopped at a mother with a baby and the mother took one and broke it in half and gave the baby the smaller piece; she came up the steps to the third row, with her parasol making a little moving room of shade, and stopped at the end, beside Saori, and smiled down at her." },
      { s: 'mrsoka', f: 'happy', t: "For strength, dear. For your friend. It's such a long day in the heat. You'll be here all day, won't you, cheering her on? Of course you will. Good girls." },
      { n: "Saori looked up at her. Solar saw her try to say no. She saw it in Saori's mouth, the shape of it, and then saw Saori be Saori, polite to the bone, sorry for everything, and put out her hand, and take one. A small white rice cake. Soft as a cheek. It left a little dust of flour on her fingers." },
      { s: 'saori', f: 'neutral', t: "...Thank you. Sorry. Thank you." },
      { n: "Mrs. Oka smiled at her, and at Solar, a fond smile, a pleased one, and went on along the row, humming, with her parasol." },
      { choose: [
        { t: "(Take the rice cake out of Saori's hand. Now.)", notes: 3, then: [
          { n: "She took it out of Saori's fingers before Saori could lift it, quickly, and held it in her own fist in her lap, and felt it there, soft and very slightly warm, and didn't look at it." }
        ] },
        { t: "Saori. Don't.", notes: 3, then: [
          { n: "Saori stopped with it halfway to her mouth. She looked at Solar. She looked at the rice cake. Her hand stayed where it was, in the air, holding it, as if she'd forgotten how to put it down." }
        ] },
        { t: "(Look at Rio.)", notes: 2, then: [
          { n: "She looked at court three. She didn't know why. And Rio was already looking back." }
        ] }
      ] },
      { n: "On court three Rio stopped." },
      { n: "In the middle of a point. She let a ball go past her that she could have reached, and the umpire called it, and she didn't turn round to see where it landed. She walked off the baseline. She walked across the court, straight across, past the Tatsumi girl, who stared, to the side fence nearest the stands, and stood there with her fingers hooked in the wire mesh, and held her other hand out through it, palm up, at Saori, the way you'd hold your hand out to a child with something in its mouth." },
      { s: 'rio', f: 'serious', t: "Give it." },
      { n: "The umpire was saying something on the megaphone. The grandstand was looking. Rio didn't care. She stood at the fence with her hand out through the wire, sweating, her face red and absolutely set." },
      { n: "Solar got up and went down the three rows of steps and put the rice cake in Rio's hand through the wire. Rio closed her fingers round it. She didn't look at it either. She walked to the bin by the umpire's chair and dropped it in and wiped her palm, hard, on her tennis skirt, twice, and went back to the baseline, and bowed to the umpire, and to the Tatsumi girl, *sorry, sorry*, and served." },
      { s: 'saori', f: 'flustered', t: "...She's going to get a warning. She's going to get a code violation. That's a point penalty. Sorry. I read the rules. Oh, Rio." },
      { n: "She got a warning. She lost the point. She won the next one, and the next, in a kind of white fury, and Saori, beside Solar, wiped the flour off her own fingers onto the wet cloth round the sports drink, very carefully, finger by finger, and then folded the cloth so the floury part was inside, and put it under the cool box, and didn't write anything down for the whole of the next game." },
      { n: "Rio lost." },
      { n: "Three sets. Six-four, three-six, seven-five. The Tatsumi girl was taller, and very good, and a second-year, and had another summer. The last point was a long rally, twenty shots, the whole stand holding its breath, Saori's pencil stopped above the page, and it ended with Rio's backhand catching the top of the net and hanging there, on the tape, for one long second, the way the claw holds a prize over the chute, and falling back on her own side." },
      { n: "Rio stood and looked at it. Then she went to the net and shook the Tatsumi girl's hand, and said something that made the girl laugh and then nearly cry, and bowed to the umpire, and picked up her bag, and walked off court three with her chin up, not looking at the stands, straight past them, round the back of the grandstand, to where the water taps were." },
      { place: 'Port Island · Municipal Courts', time: 'Afternoon', bg: 'port-island-seaside-park', music: 'tender', soft: true },
      { n: "She was under the tap behind the stands. Bent double with her head under it, the water running over her hair and down her face and into the drain, her hands braced on her knees. She didn't come up when they came round the corner. Saori stopped a few steps off with the towel held out in both hands, the way you'd hold out a towel to someone coming out of the sea." },
      { s: 'rio', f: 'sad', t: "...Don't. I'm fine. It's water. It's all water." },
      { s: 'saori', f: 'neutral', t: "You played. You played the whole thing. You didn't stop. I've got every point. Every single one. Sorry. All of them. Even the warning." },
      { n: "Rio turned off the tap. She came up with her hair streaming and her face red and wet, and you couldn't tell, and she took the towel from Saori and didn't use it; she held it against her chest in both arms, balled up, and looked at the two of them." },
      { ifChoice: { 'asks.rio-saori': 'choose' }, then: [
        { s: 'rio', f: 'neutral', t: "*Like I'd play the tournament anyway. Even if nobody I liked was in the stands.* You said that. In June. I hated it. I thought about it in the shower for a week like I said." },
        { s: 'rio', f: 'sad', t: "There were two. I looked. I wasn't supposed to look. I looked on every changeover. You were both there every time." }
      ], else: [
        { s: 'rio', f: 'sad', t: "...You were both there. Every changeover. I wasn't supposed to look. I looked every time." }
      ] },
      { choose: [
        { t: "That backhand was on the tape for a full second. It nearly went over.", notes: 2, then: [
          { s: 'rio', f: 'serious', t: "Nearly doesn't count. That's tennis. Nearly is just the other girl's point." },
          { s: 'rio', f: 'sad', t: "...It was a really good nearly, though. Wasn't it. It was the best nearly I ever hit." }
        ] },
        { t: "(Take the towel. Dry her hair. Don't say anything.)", notes: 3, then: [
          { n: "She took the towel out of Rio's arms and shook it out and put it over Rio's head and dried her hair, roughly, the way you'd dry a dog, and Rio stood there under it and let her, and under the towel Solar heard her breathing go uneven, and then even, and then uneven again, and kept drying, and Saori came and stood on Rio's other side, close, and didn't say *sorry* once." }
        ] },
        { t: "You threw away a rice cake in the middle of a quarterfinal.", notes: 3, then: [
          { s: 'rio', f: 'flustered', t: "...Yeah. Yeah, I did. I'm not sorry. I'd do it again. I'd do it in a final. I'd do it at the Olympics." },
          { s: 'rio', f: 'serious', t: "She was going along the rows. Like it was nothing. Like she was the lady with the oranges at half-time. Nobody brought her. Nobody knew who she was. Everybody just took one." }
        ] }
      ] },
      { n: "They sat on the low wall behind the stands, the three of them, in the strip of shade, with the cool box between their feet and the sea glittering past the fence, and ate Saori's rice crackers, and drank the sports drink Rio hadn't had time to drink, warm now, passing it along, and listened to the megaphone calling the semifinal that Rio wasn't in." },
      { n: "Saori opened the notebook. She found the list. She held the pencil over *Rio's last tournament* for a long time." },
      { ifChoice: { 'asks.rio-saori': 'yes' }, then: [
        { n: "Then she ticked it. A small neat tick, in pencil. And beside it, very small, *(lost. 7–5 in the third. on the tape.)*" }
      ] },
      { ifChoice: { 'asks.rio-saori': 'choose' }, then: [
        { n: "Then she ticked it. A small neat tick, beside the *(go anyway)* and the *(came anyway)*. And under it, very small, *(lost. played anyway. we watched anyway.)*" }
      ] },
      { ifChoice: { 'asks.rio-saori': 'no' }, then: [
        { n: "Then she ticked it. A small neat tick, beside the *(this year)*. She looked at the *(if)* at the top of the page for a while after, and didn't write anything else." }
      ] },
      { s: 'saori', f: 'neutral', t: "The river fireworks are cancelled. Did you hear? The August ones. From the bridge, not on the bridge. It was on the list." },
      { s: 'saori', f: 'sad', t: "It was in the paper. Three lines. *Due to safety concerns at the riverside.* Nobody wanted to stand by the river this year. Nobody signed up to sell anything. I'm sorry. I don't know why I'm sorry. I'm sorry about the river." },
      { ifBefore: '8/14', then: [
        { s: 'rio', f: 'neutral', t: "We'll see the shrine ones. On the fourteenth. That's the same. Fireworks are fireworks. Cross out *river*. Write *shrine*." }
      ], else: [
        { s: 'rio', f: 'neutral', t: "We saw the shrine ones. On the fourteenth. That counts. Fireworks are fireworks. Cross out *river*. Write *shrine*." }
      ] },
      { n: "Saori looked at the line. *August river fireworks from the bridge (not ON the bridge).* She didn't cross out *river*. She drew a small careful box round the whole line, the way you'd box a thing on a map you meant not to go near, and wrote beside it, *shrine instead*." },
      { n: "The tournament went on behind them, the megaphone, the thock of the ball. The sea went on past the fence. Rio sat between them on the wall with her wet hair drying stiff in the salt wind, and put one arm round each of them, heavily, all her weight, the way a player hangs on teammates coming off a court, and left it there." },
      { s: 'rio', f: 'neutral', t: "...That's it. I'm done. Retired. No more tournaments. I'm just a girl with a racket now." },
      { s: 'saori', f: 'happy', t: "Writing it down. *Retired. Summer.* With the time." },
      { n: "Nobody said anything about the woman with the parasol. On the way out, at the gate, Solar looked back at the stands, and they were emptying, people going home in twos, and at the end of the front row, in the shade, on the concrete, there was a little dusting of white where somebody had stood for a long time, perfectly still, watching the courts." }
    ] },
    { after: '9/28', title: '6: the gate', place: 'Gekkoukan High · Tennis Courts', time: 'After School', music: 'badfeeling', scene: [
      { bg: 'gekkoukan-tennis-courts' },
      { n: "September had gone out with the heat and taken the cicadas with it, and the courts behind the gym were quiet in a new way, the way a house is quiet after a party. The leaves on the cherry trees by the fence had started to go, early, brown at the edges, and they came down onto the courts one at a time and lay there on the green, and nobody swept them. The second-years had the club now. They were on court two, doing drills, shouting. Rio wasn't on any court." },
      { n: "She was on the bench, with her racket across her knees, coaching. Calling things out to the second-years in a hoarse voice, *feet, feet, Mori, your feet*, and every so often getting up as if to go on and show them and then sitting down again, the way you'd get up from a table you'd already left." },
      { n: "Saori was beside her. Not reading. The gray notebook was open on her knee, and there was a newspaper cutting in it, new, pressed flat, and she was looking at the cutting the way you'd look at a photograph of somebody you didn't know very well and had only just found out was gone." },
      { s: 'rio', f: 'neutral', t: "...Senpai." },
      { n: "She said it quietly. Not like a hiccup this time. Like a word you'd say at the door of a hospital room." },
      { s: 'saori', f: 'neutral', t: "...Forty-four. Sorry. I'm still counting. I don't know why I'm still counting. It's the one thing I can still count." },
      { n: "Solar sat down in the space. It was cold from the bench, cold all the way through her skirt, the first cold seat of the year." },
      { n: "Saori turned the cutting toward her without being asked. Three lines, from the bottom of a page, the way they always were. *Three employees of a private security firm were killed early on the 24th in a fall from Moonlight Bridge during unscheduled night maintenance. Police have ruled out foul play.*" },
      { s: 'saori', f: 'neutral', t: "Three at once. In a fall. From a bridge with railings as high as my chin. I measured once, last year, with my arm. I'm sorry. I measure things." },
      { s: 'saori', f: 'sad', t: "I keep them. The cuttings. I don't know who for. I think I'm keeping them for somebody who'll need them someday and won't be able to find them anywhere else." },
      { s: 'rio', f: 'serious', t: "You were there." },
      { n: "It wasn't a question. Rio said it to the court, not to her, and her hands on her racket had gone tight on the frame." },
      { s: 'rio', f: 'serious', t: "We saw them. In the corridor on the first. The six of them. Your parents. All of them. I said *all of them?* and you nodded. You remember." },
      { ifEvent: 'eqx-seams', then: [
        { s: 'saori', f: 'neutral', t: "And then there were three. For two months. Three fathers on the river road, walking slowly, looking for something they'd dropped. And last week I saw three women at the dorm window with their hair down. Sorry. I'm not asking. Nobody was touching their backs. I noticed that. I notice things." },
        { s: 'saori', f: 'sad', t: "We're not going to ask. It's still the list. I'm just saying I saw." }
      ], else: [
          { s: 'saori', f: 'neutral', t: "And now there's three. On the walk to school. Three fathers, walking slowly. I saw them on Monday by the river road. Three men in good coats, walking together like they were looking for something they'd dropped. Nobody with them." },
          { s: 'saori', f: 'sad', t: "We're not going to ask. It's still the list. It still only has one thing on it. I'm just saying I saw." },
          { choose: [
            { t: "They're gone. The mothers. Since the bridge.", notes: 3, then: [
              { n: "She said it. She hadn't said it to anybody outside the dorm. She didn't know she was going to say it until it was out, in the cold, on the bench, and Saori closed her eyes and Rio didn't move at all." },
              { s: 'rio', f: 'sad', t: "...Okay. Okay. Thank you. For saying it. You didn't have to say it." },
              { n: "Saori didn't write it down. Solar watched her not write it down, the pencil in her hand over the page, and then put the pencil back in the spine of the notebook and close it, and put both hands flat on the cover." }
            ] },
            { t: "(Don't answer. Look at the cutting.)", notes: 2, then: [
              { n: "She didn't answer. She looked at the cutting. Three lines. A bakery advertisement under them, the same as in April, as if the paper only had the one advertisement and the one kind of news. Saori let her look as long as she wanted, and then closed the notebook over it, gently, and didn't ask again." }
            ] },
            { t: "(Take Saori's hand. And Rio's.)", notes: 3, then: [
              { n: "She took Saori's hand on one side, cold, and Rio's on the other, hot, calloused from the grip, and held both. Neither of them asked her why. Rio's fingers closed over hers so hard it hurt, and stayed, and on court two the second-years drilled, *feet, feet*, and nobody on the bench said anything for a long time." }
            ] }
          ] },
      ] },
      { n: "Saori opened the notebook again. Not to the list this time. To a page near the back, after the cuttings, where the handwriting was different. Small and fast and slanting, the writing of somebody writing in the dark." },
      { s: 'saori', f: 'neutral', t: "The dreams came back. On the twenty-third. The night of the moon." },
      { s: 'rio', f: 'serious', t: "It's not the picture. I checked. First thing. The bag's in my locker. It's shut. The ball's dry. The copy's folded where I folded it. It's not the picture this time." },
      { s: 'saori', f: 'neutral', t: "The same gate. The same evening. The house by the river, the persimmon tree, the lamp on in the long room. Somebody inside asking me in to eat. One step closer every night. Sorry. It's six steps now. I'm at the gate." },
      { s: 'saori', f: 'sad', t: "But it isn't her voice any more. It used to be the kind lady. It used to be the kindest voice. Since the moon it's not her." },
      { n: "She looked at Solar. Saori never looked at people for long; she looked at books, at maps, at the court. She looked at Solar now, straight, and held it." },
      { s: 'saori', f: 'sad', t: "...It's you. It's your voice. Calling me from the long room. *Come in, Saori. We're all here. All three of us. There's a place for you. Come and sit down.*" },
      { s: 'saori', f: 'neutral', t: "And Rio's in there too. I can hear her laughing. At the table. You're both in there and it's warm and the lamp's on and you're both asking me to come in and I want to so much I wake up with my hand out." },
      { n: "Solar felt it go down her back, the line, nape to spine, cold and exact, the way it had gone all year. Her own voice. At a gate. Saying *all three of us*. She knew how it would sound. She knew exactly how kind she would sound." },
      // CG: eqx-at-the-gate — a dream: a riverside gate at dusk with a lamp lit in a long low room beyond it and a persimmon tree over the wall, and at the gate, seen from behind, a schoolgirl with a gray notebook held to her chest, one hand lifted toward the latch.
      { choose: [
        { t: "It isn't me. I'd never ask you to come in there.", notes: 3, then: [
          { s: 'saori', f: 'neutral', t: "I know. I know that. Awake I know that. I'm sorry. Asleep it's just your voice, and I've never once in my life not done something your voice asked." },
          { s: 'solar', f: 'neutral', t: "Then hear this one. Don't go in. Not for me. Not for anybody's voice." },
          { n: "Saori looked at her. Then she took the pencil out of the spine and wrote it down, under the dream, in her ordinary hand, slowly, so it would be in a different handwriting from the rest of the page: *Solar said: not for anybody's voice. September, awake.*" },
          { s: 'saori', f: 'neutral', t: "...So I can read it. At the gate. If I remember to look." }
        ] },
        { t: "Next time, Saori, ask the voice where I'm sitting.", notes: 2, then: [
          { s: 'saori', f: 'surprised', t: "...Where you're sitting?" },
          { s: 'solar', f: 'neutral', t: "I always sit between you. On the bench. In the space. If it says I'm anywhere else, it isn't me." },
          { n: "Saori stared at her. Then she laughed, the small astonished laugh, and wrote it down, fast: *ask where she's sitting. if not between us, not her.*" },
          { s: 'rio', f: 'neutral', t: "That's good. That's really good. That's a password. We've got a password now." }
        ] },
        { t: "(Put your hand over hers. The one she wakes up holding out.)", notes: 3, then: [
          { n: "She took Saori's right hand off the notebook, the one she'd said she woke up with held out, and closed it in both of hers, and held it shut, the fingers folded in, so it couldn't reach for anything. Saori looked down at it. Her hand was cold and then it wasn't." },
          { s: 'saori', f: 'sad', t: "...Okay. Okay. I'll remember that. That's a thing I can remember asleep. Somebody holding it shut." }
        ] }
      ] },
      { n: "Rio stood up. She stood up the way she did when she'd decided something, all at once, and walked to the fence, and stood there with her back to them and her fingers hooked in the wire, looking at court two, where Mori was serving into the net." },
      { s: 'rio', f: 'serious', t: "I got a letter." },
      { n: "She said it to the court. Saori went very still on the bench." },
      { s: 'rio', f: 'serious', t: "From a university. On Monday. A coach saw the quarterfinal. The one with the rice cake and the warning. She says she liked that I threw something in a bin in the middle of a point. She says that's the kind of player she wants. She says there's a place on the team. A scholarship. If I want it." },
      { s: 'saori', f: 'neutral', t: "...Where." },
      { s: 'rio', f: 'neutral', t: "Sapporo." },
      { n: "Nobody said anything. On court two a ball went long and bounced off the back fence and nobody went for it. Sapporo. The other end of the country. Snow from November to April. Courts under snow, every winter, all winter." },
      { s: 'rio', f: 'serious', t: "I'm not going. Obviously. I just wanted it said. Out loud. So it's not in my locker with the other things." },
      { s: 'saori', f: 'neutral', t: "...Why obviously." },
      { s: 'rio', f: 'flustered', t: "Because. Because you're here. Because you've got another year on this bench and I'm not leaving you on it on your own with a notebook and a bag of haunted things and dreams about a gate. Because it's the three of us. That's the list. That's the whole list. Every thing." },
      { n: "She turned round. Her face was red and absolutely set, the way it had been at the fence in the quarterfinal, with her hand out through the wire. And Saori looked up at her from the bench, and her face did something Solar had never seen it do, in this life or the last. It didn't apologize." },
      { s: 'saori', f: 'serious', t: "...It's snow, Rio. It's the courts in snow. You wrote it on the list. In pen. In your head. You wished for it on a tree." },
      { s: 'rio', f: 'serious', t: "I'm not going to *Sapporo* for a *wish on a strip*—" },
      { s: 'saori', f: 'neutral', t: "Somebody wrote *stay* on the back of that wish. Somebody turned it over and wrote *stay* on it. I keep it word side up so I always know which way it's been turned." },
      { n: "Rio opened her mouth. Shut it. Stood there with her fingers in the wire." },
      { n: "And Solar, between them, on the cold bench, understood it the way you understand a song you've been humming for months when somebody finally sings you the words. *Stay together.* That was all. That was the whole of it. Not a monster. Not a door. Two girls and the space between them on a bench, and a list with every thing on it, and a town that would give them every item on that list, every one, the book stall and the snow and the photograph by the gate, forever, so long as nobody ever went anywhere. It was the kindest thing anybody would ever offer them. It would sound exactly like her." },
      { flag: 'eqx-floor-rio-saori' },
      { choose: [
        { t: "(Say nothing. It's theirs.)", notes: 3, then: [
          { n: "She didn't say anything. It wasn't hers to say. She sat in the space between them with her hands in her lap and let it be theirs, all of it, the letter and the snow and the bench, and the silence went on long enough that Mori on court two stopped serving and looked over." },
          { n: "Then Rio came back from the fence and sat down. Not at the end. In the middle. Next to Solar, closer than the space allowed, so the three of them were pressed together on the cold bench, shoulder to shoulder to shoulder, and nobody moved up." },
          { s: 'rio', f: 'neutral', t: "...I haven't said no. To them. I haven't said yes. I'm saying neither. I'm going to say neither for a bit. That's allowed. It's in pencil." }
        ] },
        { t: "Snow, Rio. You'd be good in snow.", notes: 2, flag: 'eqx-rs-snow', then: [
          { s: 'rio', f: 'sad', t: "...Don't. Don't you start. Not you too." },
          { s: 'solar', f: 'neutral', t: "I'm not telling you to go. I'm telling you you'd be good." },
          { n: "Rio looked at her a long time. Then she sat down hard on the end of the bench, next to Saori, and put her face in her hands, and laughed into them, short and wet, and Saori put her hand flat on Rio's back between her shoulder blades and left it there and didn't say sorry for it." }
        ] },
        { t: "Whatever you choose. Both of you. It's yours.", notes: 3, then: [
          { s: 'saori', f: 'neutral', t: "...Both of us." },
          { s: 'solar', f: 'neutral', t: "Both of you. Not me. Not the list. Not anybody's voice." },
          { n: "Rio and Saori looked at each other over Solar's head. A long look. The look from the bench in April, of two people who'd agreed something in private and were finding out whether they had to say it out loud. They didn't say it. Saori looked down first, and opened the notebook, and turned to the list." }
        ] }
      ] },
      { n: "Saori wrote something at the bottom of the list. In pencil. Small. Rio leaned over to read it, and so did Solar." },
      { n: "*Sapporo (snow).*" },
      { n: "No tick. No brackets. No *(if)*. Just the word, at the bottom of everything, under *Every. Thing.*, where the list ran off the page." },
      { s: 'saori', f: 'neutral', t: "It's in pencil. It's only in pencil. It doesn't mean anything. It just means it's on the list." },
      { s: 'rio', f: 'flustered', t: "...Rub it out." },
      { s: 'saori', f: 'neutral', t: "No. Sorry. No." },
      { place: 'Gekkoukan High · Front Gate', time: 'Evening', bg: 'gekkoukanhigh-autumn', music: 'tender', soft: true },
      { n: "They walked out the long way, round the gym, not through the courtyard. Nobody had to say it. The light went early now, and the street outside the gate was blue already, and cold enough that Saori had put on a cardigan and Rio hadn't and was pretending she wasn't cold." },
      { n: "At the corner Rio didn't walk Saori to the bus. She stood there. Saori stood there. Neither of them moved toward anything, and the bus came, and stood at the stop with its doors open, breathing, and went away again without either of them." },
      { s: 'saori', f: 'neutral', t: "...I'll walk. Tonight. It's not far. It's thirty-one minutes. I've timed it." },
      { s: 'rio', f: 'neutral', t: "It's on my way." },
      { s: 'saori', f: 'happy', t: "It isn't. It's never once been on your way." },
      { n: "They went off together down the hill, the two of them, not touching, and then, at the first lamp, touching, Saori's hand in the crook of Rio's arm, the way girls walk at the start of a cold season. Solar watched them to the bottom. They didn't look back, this time. They were talking. Saori's hand moving. Rio laughing at something." },
      { n: "She stood at the gate alone, in the blue, and found she was listening, as she hadn't let herself all month, for her own voice somewhere in the town, very kind, calling someone in to eat. She didn't hear it. She stood and listened anyway until the lamps were all on, and then went up the hill, and didn't once look toward the river, and at the top, without meaning to, she put her hand flat over her own mouth, the way you'd hold a door shut against wind." }
    ] },
    { after: '10/26', title: '7: the cold beach', place: 'Gekkoukan High · Tennis Courts', time: 'After School', music: 'tender', scene: [
      { bg: 'gekkoukan-tennis-courts' },
      { n: "The wind had turned. It came off the bay now instead of off the hills, cold and wet and smelling of salt, and it took the leaves off the cherry trees by the fence in handfuls and spread them over all four courts, brown on green, and the second-years were sweeping them with push brooms between drills and the wind was putting them back. Rio was on the bench in a club jacket two sizes too big for her, the captain's one, which she'd handed on in September and then borrowed back from Mori every afternoon since, calling out *feet* in a voice gone hoarse." },
      { n: "Saori was beside her with the gray notebook open and a scarf wound round her neck three times, so only her eyes showed over it." },
      { s: 'rio', f: 'neutral', t: "Senpai. Sit. In the middle. It's warmer in the middle. That's science." },
      { s: 'saori', f: 'neutral', t: "It isn't. Sorry. It's just that we're on either side of it." },
      { ifFlag: 'dead.shinjiro', then: [
        { n: "There was a cutting in the notebook. New. Three lines, the way they always were. *A 19-year-old man, a former pupil of a Port Island high school, died early on the 24th following an accident near the river. There were no suspicious circumstances.*" },
        { s: 'saori', f: 'sad', t: "He was in the library once. Last year. When it rained, in June. He sat at the back table for an hour and didn't read anything, and then he put the chair back exactly where it had been. Exactly. Nobody puts the chair back." },
        { s: 'saori', f: 'neutral', t: "I remember people who put the chair back. Sorry. That's all I've got of him. A chair." },
        { n: "Rio didn't say anything. She put her hand flat on the notebook, over the cutting, and kept it there, and called *feet* to the court without looking at it." }
      ], else: [
        { s: 'saori', f: 'neutral', t: "No cuttings this week. Sorry. I mean, I'm glad. I keep apologizing for good news. I've lost track of which kind I'm sorry about." }
      ] },
      { n: "Saori turned the notebook to the back, past the cuttings, to the pages in the small fast slanting hand, the ones written in the dark." },
      { s: 'saori', f: 'neutral', t: "I remembered. Asleep. What you told me on the bench. I didn't think I would, and I did. I got to the gate and the voice said come in, and I remembered you, and I didn't do what it said straight away. I asked it something first." },
      { s: 'saori', f: 'neutral', t: "The first night it said, come and sit by me, at the head of the table. And I thought, she's never sat at the head of anything. She sits in the middle. And I woke up. Sorry. I woke up so happy." },
      { s: 'saori', f: 'sad', t: "...On Monday it got it right." },
      { n: "The wind went across the courts and lifted every leaf at once and put them down again a meter further on." },
      { s: 'saori', f: 'sad', t: "It said, I'm sitting between you. In the middle. Where I always sit. Come and sit between us. In your voice. With the little pause you do before *between*." },
      { s: 'saori', f: 'neutral', t: "I woke up with my hand on the latch. Not out. On it. The latch of my own window, in my room. It's a sash window. I was standing on the chair." },
      { s: 'rio', f: 'serious', t: "Since Monday I've been sleeping on her floor." },
      { n: "Rio said it to the court. Her ears had gone red and her jaw was set, the way it had been at the fence in the quarterfinal with her hand out through the wire." },
      { s: 'rio', f: 'serious', t: "Her mom thinks it's exam study. Her mom made us rice balls. I hold her hand. All night. On the floor next to the bed, with my arm up. On Wednesday she tried to get up at three and I didn't let go, and she pulled, and I didn't let go, and then she was awake and crying and saying sorry and I still didn't let go." },
      { s: 'saori', f: 'flustered', t: "She's got a grip like a vice. I've got bruises. Little ones, in a row. Sorry. I'm not sorry. I look at them in the morning." },
      { choose: [
        { t: "(Lean over and tell Saori something only you would say. Something new. Quietly.)", notes: 3, flag: 'eqx-rs-secret', then: [
          { n: "She leaned in under the scarf and said it into Saori's ear, low, under the wind, something she'd never said to anybody in any of her lives, a small true stupid thing, and Saori's eyes went wide over the scarf, and then wet, and she nodded, twice." },
          { s: 'saori', f: 'neutral', t: "...I won't write it down. Then nobody can read it. Not even me. I'll just have it." },
          { s: 'rio', f: 'flustered', t: "What did she say. What did you say. I want it. I'm the one on the floor." },
          { s: 'saori', f: 'happy', t: "No. Sorry. No." }
        ] },
        { t: "Rio. Thank you.", notes: 3, then: [
          { s: 'rio', f: 'flustered', t: "Don't thank me. It's not for you. It's not a favor. It's a— I'd do it anyway. I'd do it if you'd never come back. I'd do it if nobody knew your name." },
          { n: "She heard herself and stopped, and went redder, and looked at the court, and Saori, beside her, took the end of her own scarf and tucked it round Rio's neck too without a word, so they were both inside it." }
        ] },
        { t: "(Take both their hands. Hold them on your knees.)", notes: 2, then: [
          { n: "She took Saori's hand, cold, and Rio's, hot and calloused, and held both on her own knees in the middle of the bench, and on court two Mori served into the net and swore and nobody on the bench laughed, and nobody let go." }
        ] }
      ] },
      { s: 'rio', f: 'neutral', t: "Saturday. The cold beach. It's on the list. It's cold now. It's a beach. We're doing it." },
      { s: 'saori', f: 'neutral', t: "I've checked the tides. And the wind. And the bus. Sorry. I made a timetable." },

      { place: 'Port Island · Seaside Park Beach', time: 'Daytime', bg: 'port-island-seaside-park', music: 'tender', soft: true },
      // BG: eqx-seaside-beach-winter — the little sand beach below Seaside Park on a gray late-autumn day: an empty lifeguard chair, a long tide line of weed and shells, low pewter water, a sea wall with steps, wind flattening the dune grass, the bridge far off in haze.
      { n: "The beach below Seaside Park in November was the color of a pencil drawing. Gray sand, gray water, gray sky with the light coming through it in one pale patch over the bay like a thumbprint, and the wind straight off the sea, so cold it made your teeth ache. The lifeguard chair stood empty at the top of the sand with its ladder chained. A long ragged tide line ran the whole length of the beach, weed and broken shells and a single child's sandal, and past it the water came in low and flat and tired and went out again." },
      { n: "There was nobody. A man with a metal detector at the far end, very small. A vending machine on the sea wall still selling cold drinks, humming, lit." },
      { n: "Rio took her shoes off. She took her socks off and stuffed them in her shoes and rolled her tracksuit to the knee and walked straight down the sand into the sea, ankle-deep, and stood there, and screamed. Not words. Just a scream, at the bay, long and furious and delighted, and then turned round with her face bright red and her arms out." },
      { s: 'rio', f: 'happy', t: "IT'S SO COLD. IT'S SO COLD. I CAN'T FEEL MY LIFE." },
      { s: 'saori', f: 'happy', t: "Writing it down. *Rio went in. Screamed.* With the time." },
      { n: "Saori didn't go in. She found a stick of driftwood and walked up above the tide line, where the sand was dry and pale, and wrote in it in big careful letters, the way she wrote on the board at the library, three names in a row." },
      { n: "*RIO. SOLAR. SAORI.*" },
      { n: "With the space after Solar's name. Of course with the space. She looked at it when she'd finished, and then at Solar, and didn't fill it, and didn't apologize." },
      { ifChoice: { 'asks.rio-saori': 'yes' }, then: [
        { n: "In the notebook, on the list, beside *the cold beach*, she drew a tick. No brackets anywhere on the page now. Just the smudge at the top where *(if)* had been rubbed out in June, gone soft and gray with being looked at." }
      ] },
      { ifChoice: { 'asks.rio-saori': 'choose' }, then: [
        { n: "In the notebook, beside *the cold beach (go anyway)*, she wrote: *(went. cold. Rio screamed.)* and looked at it, and seemed pleased." }
      ] },
      { ifChoice: { 'asks.rio-saori': 'no' }, then: [
        { n: "In the notebook, beside *the cold beach*, she drew a tick and, small, *(this year)*, and pressed the pencil down a little harder than she needed to on the bracket." }
      ] },
      { n: "They sat on the steps of the sea wall with their backs to the vending machine, which was warm, the only warm thing on the whole beach, and ate taiyaki from the stall at the park gate out of a paper bag, the red bean so hot it burned, and Rio's bare feet were blue and she wouldn't put her socks back on because she said they'd only get sandy." },
      { s: 'rio', f: 'neutral', t: "They wrote again. Sapporo. The coach. A second letter. She wants an answer by Christmas. By the twenty-fourth. In writing." },
      { s: 'rio', f: 'neutral', t: "Sapporo has a beach. Did you know that? I looked it up. It's colder than this. It's got snow on it in January. Snow on sand. I didn't even know that was a thing that could happen." },
      { ifFlag: 'eqx-rs-snow', then: [
        { s: 'rio', f: 'flustered', t: "And I keep hearing you. *You'd be good in snow.* In the shower. On the court. On her floor at three in the morning holding her hand. I hate it so much." }
      ] },
      { s: 'saori', f: 'neutral', t: "It's still on the list. *Sapporo (snow).* In pencil. At the bottom. I haven't rubbed it out." },
      { s: 'rio', f: 'serious', t: "I know you haven't. I check. I check every day like it's a mole." },
      { choose: [
        { t: "What do you want, Rio? Not the list. You.", notes: 3, then: [
          { s: 'rio', f: 'serious', t: "...I want to win something. And then snow. I wrote it on a strip on a tree." },
          { s: 'rio', f: 'sad', t: "And I want the bench. And I want her on it. And I want this, the three of us on some stupid steps, eating fish-shaped cake with no feeling in my feet. I want all of it. I want it at the same time. That's not allowed, is it. Nobody gets that." }
        ] },
        { t: "(Don't ask anything. Give her your scarf for her feet.)", notes: 3, then: [
          { n: "She unwound her scarf and crouched on the step below and wrapped Rio's blue feet in it, both of them, sand and all, and tucked the end in. Rio looked down at her feet in the scarf, and at the top of Solar's head, and didn't say anything at all, which for Rio was the loudest thing she could do." }
        ] },
        { t: "Christmas is a long way off.", notes: 2, then: [
          { s: 'saori', f: 'neutral', t: "It's fifty-something days. I counted. Sorry. It isn't a long way off. Nothing's a long way off this year." }
        ] }
      ] },
      { n: "The light was going by four. The pale patch in the sky had slid down to the water and gone out. They gathered the paper bag and Rio's shoes and walked back along the top of the sand toward the steps, the way they'd come, past the place where Saori had written their names." },
      { n: "The names were gone." },
      { n: "The tide hadn't come in. It was still where it had been, low and far and tired, a long way down the gray sand. But above the tide line, where the three names had been, the sand was smooth. Not washed. Smoothed, flat and pale and even, the way you'd smooth a sheet on a bed you'd just made, a neat oblong of it, and in the middle of the oblong, a pair of footprints." },
      { n: "Small. Close together. Standing. Not walking in from anywhere and not walking away. Just standing there, side by side, in the exact place the space after Solar's name had been, the toes pointing up the beach toward the steps where the three of them had sat all afternoon with their backs to the warm vending machine, eating cake." },
      { n: "Saori stopped. Rio stopped with her shoes in her hand. Nobody said anything. The man with the metal detector was gone. The wind went over the smooth place and didn't lift a single grain." },
      // CG: eqx-cold-beach — a gray winter beach at dusk, above a far-off tide a neat smoothed oblong of pale sand where three names had been written, and in its middle one pair of small bare footprints standing still, facing up the beach toward a lit vending machine on a sea wall where three girls stand frozen.
      { choose: [
        { t: "(Take Saori's stick. Write the names again, deeper, right beside it.)", notes: 3, flag: 'eqx-rs-names', then: [
          { n: "She took the driftwood out of Saori's hand and walked to the edge of the smooth place, not in it, and wrote the names again in the dry sand beside it, deep, leaning her weight on the stick, the furrows a finger deep. *RIO. SOLAR. SAORI.* And no space. She wrote them close, the letters nearly touching, so there wasn't room between any of them for anybody else to stand." },
          { s: 'rio', f: 'serious', t: "...Good. Good. That's the right way. No gaps." },
          { n: "Saori looked at it a long time. Then she wrote in the notebook, small, standing in the wind: *no gaps.*" }
        ] },
        { t: "(Take Saori's hand. Walk. Don't look at it.)", notes: 3, then: [
          { n: "She took Saori's hand and walked, and Rio, on Saori's other side, took the other one without being asked, and they went up the sand and the steps and past the humming vending machine three abreast, holding hands, nobody looking back, the way you'd walk past a dog you weren't sure of." }
        ] },
        { t: "(Step into the prints. Turn round, so they face the sea.)", notes: 2, then: [
          { n: "She stepped into the smooth place before either of them could stop her, and put her feet in the prints, and they were her size. Exactly. To the toe. She stood in them and her stomach went over, slow, like a card, and she turned round in them, deliberately, so the toes pointed at the sea instead of at the steps, and stepped out backward and left them like that." },
          { s: 'saori', f: 'sad', t: "...They were yours. They were your size. Sorry. I saw." },
          { s: 'solar', f: 'neutral', t: "They're facing the other way now." },
          { s: 'rio', f: 'serious', t: "Yeah. They are. Come here. Come here right now and stand on dry sand next to me." }
        ] }
      ] },
      { place: 'Port Island · Bus Stop', time: 'Evening', bg: 'port-island-seaside-park-sunset', soft: true },
      { n: "At the bus stop by the park gate they stood under the shelter's light with sand in everything. The bus came. Both of them got on; Rio didn't pretend it was on her way any more. Through the back window, as it pulled out, Solar saw them sit down side by side, and Rio take Saori's hand in her lap and fold the fingers shut, all of them, one at a time, and hold the fist closed in both of hers, and look out of the window at the dark, keeping it shut, the whole way, until the bus went round the bend and took the light with it." }
    ] },
    { after: '11/25', title: '8: the date stamp', place: 'Gekkoukan High · Tennis Courts', time: 'After School', music: 'tender', scene: [
      { bg: 'gekkoukan-tennis-courts' },
      { n: "It was raining on the courts, a thin cold steady rain with no wind in it, the kind that fell straight down and meant to go on all night, and the courts were empty, the nets down, the brown leaves pasted flat to the green in a pattern like a map of somewhere. Nobody on the bench. On the fence by the gate, in a clear plastic sleeve held on with two clothes pegs, there was a note in Saori's careful board handwriting." },
      { n: "*LIBRARY. SORRY.*" },

      { place: 'Gekkoukan High · Library', time: 'After School', bg: 'school-library', music: 'tender', soft: true },
      { n: "The library smelled of wet coats and radiator and old paper, and the windows were running, and the big lamps over the reading tables were on at four in the afternoon, yellow, so the room looked like the inside of a lantern somebody had brought in out of the rain. There were three first-years asleep on their exam notes and a teacher reading a newspaper by the heater. Saori was behind the issue desk. Rio was sitting on it." },
      { s: 'saori', f: 'neutral', t: "Off the desk. Sorry. Rio. Off the desk." },
      { s: 'rio', f: 'neutral', t: "I'm decorating it. Senpai. Hi. She won't let me sit anywhere else, she says I distract the first-years. I've never distracted anybody in my life." },
      { n: "On the desk between them, beside the returns tray and the pot of pencils, there was the date stamp. The library's old one, the rubber kind, with little wheels you turned with your thumbnail for the day and the month. Saori picked it up when she saw Solar look at it, and turned it over, and showed her the date on the rubber." },
      { n: "*21 DEC.*" },
      { s: 'saori', f: 'neutral', t: "Every morning. I set it to the day when I open, and every morning when I come in it's on the twenty-first of December again. I don't know who turns it. The librarian says it isn't her. The cleaner doesn't come in here." },
      { s: 'saori', f: 'neutral', t: "So I turn it back. Every morning. Sorry. It's very small. I know it's very small. It's the smallest thing that's happened all year. I just don't like a stamp that's decided something." },
      { n: "She turned the wheels with her thumbnail, click, click, to today, and put it down on the desk face down, and laid her hand flat on top of it, the way she laid her hand on the notebook, the way you'd keep a lid on something." },
      { ifFlag: 'dead.aigis', then: [
        { s: 'rio', f: 'sad', t: "They said Aigis-san transferred. At homeroom. One sentence. *Aigis has returned abroad for family reasons.* And then the register, like nothing." },
        { s: 'saori', f: 'sad', t: "There's no cutting. I looked. Every paper. There's nothing to cut out. I'm sorry. I don't know where to keep somebody there's no cutting for." },
        { s: 'rio', f: 'neutral', t: "She used to stand at the courts fence at five some days and watch the ball. Just watch it. Like it owed her a number. I served better when she watched. I don't know why. I never told her." }
      ] },
      { ifEvent: 'eqx-persimmon', then: [
        { n: "Under Saori's other hand, on the desk, was the brown Korean book. Mr. Edogawa's. She hadn't shelved it. She hadn't put it in the returns tray. It sat by her elbow all afternoon, closed, and she touched its spine now and then without looking, the way you'd check a sleeping child was breathing." },
        { s: 'saori', f: 'sad', t: "I'm not shelving it. The librarian asked twice. I said it's on hold. It's on hold. For him. I know. Sorry. I know." }
      ] },
      { n: "Saori opened the notebook on the desk, under the lamp, to the list, because she always did, because it was how she said hello now." },
      { ifChoice: { 'asks.rio-saori': 'yes' }, then: [
        { n: "*Next year.* No brackets. Ticks down the side like stitches: Tanabata, the tournament, the shrine fireworks instead of the river ones, the cold beach. Beside *book stall*, a tick, and *(41 sold. Rio bought 11.)*" }
      ] },
      { ifChoice: { 'asks.rio-saori': 'choose' }, then: [
        { n: "*Next year (if).* The bracket still at the top, and the margins full of *(go anyway)* and *(went anyway)* in pencil like a second list running down beside the first. Beside *book stall*: *(went anyway. 41 sold. Rio bought 11.)*" }
      ] },
      { ifChoice: { 'asks.rio-saori': 'no' }, then: [
        { n: "*Next year (if).* The bracket at the top, pressed dark now from being gone over. A tick beside *book stall*, and *(this year)*, and *(41 sold. Rio bought 11.)*" }
      ] },
      { s: 'rio', f: 'flustered', t: "I needed those books. They were very important books. One was about knots. I've never tied a knot in my life. It was very cheap." },
      { s: 'saori', f: 'neutral', t: "We watched the dancing. At the culture festival. The five girls in the gym. Sorry, I know you were there, you were at the front. We were at the back by the doors." },
      { s: 'saori', f: 'neutral', t: "There was a piece of tape on the floor. A mark, for where to stand. There were six. Five girls. I counted the marks before they came on, it's a habit, and there were six, and nobody stood on the sixth one the whole time, and they danced round it like it was somebody." },
      { s: 'rio', f: 'neutral', t: "She wrote it down. Of course she wrote it down. *Six marks, five girls.* I said maybe somebody was off sick. She said, then why do they all leave room." },
      { n: "Solar didn't say anything. She thought of the gym, and the music, and Yunjin's left side, and a space a person wide that five girls had kept open without once looking at it, the way you'd keep a place at a table for somebody late." },
      { s: 'rio', f: 'neutral', t: "And I stopped sleeping on her floor." },
      { s: 'saori', f: 'neutral', t: "Because I stopped going to the gate. Nine nights. Ten tonight, if. Since the beach. I don't dream about the house at all now. I dream about sand." },
      { ifFlag: 'eqx-rs-names', then: [
        { s: 'saori', f: 'happy', t: "Names in sand with no gaps. Every night. I'm sorry, it's very boring. It's the most wonderful boring dream I've ever had." }
      ], else: [
        { s: 'saori', f: 'neutral', t: "Just sand. Gray sand and the tide going out. Nobody standing on it. I check, in the dream. I've learned to check." }
      ] },
      { s: 'rio', f: 'serious', t: "So now I'm on my own floor. At home. And I can't sleep. I lie there with my arm up holding nothing like an idiot." },
      { n: "She took an envelope out of the inside pocket of the borrowed captain's jacket. White, long, sealed. Addressed in pen, in her blocky upright hand, to a university in Sapporo, the women's tennis team, the coach, by name. A stamp in the corner. A real one, the right price, straight." },
      { s: 'rio', f: 'serious', t: "I wrote it. Last night. In pen. Not in my head, on paper. It's done. It's sealed. I licked it. It tasted horrible." },
      { s: 'saori', f: 'neutral', t: "I haven't read it. I'm not going to read it. She offered. I said no. I've read everything Rio's ever written since April, every strip, every score sheet, every text. I'm not reading this one." },
      { s: 'rio', f: 'serious', t: "And now I can't post it. It's been in my pocket all day. I walked past the box by the gate four times. It's like the guy with the pharmacy. I keep walking past the box." },
      { n: "She turned the envelope over in her hands. It had gone soft at the corners already, the way things went in Rio's pockets. Then she held it out, not to Saori. To Solar. Across the issue desk, under the yellow lamp, in the smell of wet coats." },
      { s: 'rio', f: 'serious', t: "You tell me. Not her. Not the coach. You. You're not on the list, senpai. You're the reason there's a list. I'll do whatever you say. Stay or go. I'll post it or I'll tear it up right here in the library and the first-years can watch." },
      { s: 'rio', f: 'sad', t: "...Just say it. Please. I'm so tired of holding it." },
      { n: "Saori didn't move. She was looking at the envelope, and then at Solar, and her face was very still and very open, and her hand was flat on the face-down date stamp, pressing, as if something underneath it might turn." },
      { n: "And Solar, holding nothing yet, standing at a library desk in the rain, heard how easy it would be. One word, either word. Rio would do it. Rio had never once, in the two years Solar had known her, not done what she said she'd do. It would be over, the whole weight of it, lifted off an eighteen-year-old girl in a borrowed jacket and put down where Solar could carry it for her, which was the kindest thing she could do, which was exactly how kind it would sound." },
      // CG: eqx-the-letter — a school library on a rainy afternoon under yellow lamps, a tall girl in an oversized tennis jacket holding a sealed, stamped envelope out across the issue desk, a smaller girl in a scarf behind the desk with her hand pressed flat on a face-down rubber date stamp, rain running down the windows.
      { choose: [
        { t: "It's yours, Rio. Both of you. I'm not going to say.", notes: 3, flag: 'eqx-rs-theirs', tally: { choose: 1 }, then: [
          { n: "Rio's hand stayed out across the desk with the envelope in it. For a long moment she didn't understand. Then she did, and her face went red, and her eyes went wet, and her jaw set, all at once, the way it did when she lost a point she'd been sure of." },
          { s: 'rio', f: 'sad', t: "...That's the worst thing you could have said. You know that. You did the bench thing to me. In June. You've done it to me twice now." },
          { s: 'solar', f: 'neutral', t: "I know." },
          { s: 'rio', f: 'serious', t: "I hate it. I'm going to think about it on my own floor for a week. Again." },
          { n: "She drew the envelope back across the desk, slowly, and held it against her chest in both hands, and didn't put it away." }
        ] },
        { t: "Stay. Please. Stay here with her.", notes: 3, flag: 'eqx-asked-rio-saori', tally: { asked: 1, cakes: 1 }, then: [
          { n: "Rio's shoulders came down. All of her came down, the way a held breath comes down, and she laughed, short and wet, and put the envelope flat on the desk, and laid her forearm across it." },
          { s: 'rio', f: 'happy', t: "...Okay. Okay. You said it. That's it, then. That's done. Somebody said it." },
          { n: "She looked so relieved. She looked about twelve. And Saori, behind the desk, looked at the envelope under Rio's arm, and at Solar, and something went across her face that Solar would think about for a long time afterward, on her own floor, with her arm up holding nothing." }
        ] },
        { t: "Go. Sapporo. The snow. Post it.", notes: 2, flag: 'eqx-rs-told-go', then: [
          { n: "Rio flinched. Not much. Just at the eyes, the way you'd flinch at a ball coming off the frame, and then she nodded, short, once, at the envelope, the way you'd nod to an umpire's call you weren't going to argue with." },
          { s: 'rio', f: 'sad', t: "...Okay. Okay. You said go. Somebody said it. That's— okay." },
          { n: "She didn't look at Saori. She looked very hard at the stamp in the corner of the envelope, straight, the right price, and her thumb moved over it, and over it." }
        ] }
      ] },
      { s: 'saori', f: 'serious', t: "I'm not going to." },
      { n: "They both looked at her. Saori had taken her hand off the date stamp. She was sitting very straight behind the issue desk with her scarf still wound three times round her neck and her hands folded on the gray notebook, closed, and she wasn't apologizing." },
      { s: 'saori', f: 'serious', t: "I'm not going to ask you anything, Rio. Not stay. Not go. Nothing. I've written down every single thing you've said to me since the eighth of April. I'm not writing this one down. It isn't mine." },
      { s: 'saori', f: 'neutral', t: "That's my present. For Christmas. For the twenty-fourth. I'm giving it to you early. I'm not asking. Sorry. That's the only thing I'm sorry about and I'm not even sorry about that." },
      { ifFlag: 'eqx-asked-rio-saori', then: [
        { s: 'saori', f: 'sad', t: "...Even if somebody else already did." }
      ] },
      { n: "Rio stood at the desk with the envelope. She looked at Saori for a long time. The first-years slept. The teacher by the heater turned a page. The rain ran down the windows and the lamps were yellow in it." },
      { s: 'rio', f: 'flustered', t: "...You're both so annoying. You're the two most annoying people I've ever met in my life. I'm going to marry a tennis racket and move to a mountain." },

      { place: 'Gekkoukan High · Front Gate', time: 'Evening', bg: 'gekkoukanhigh-winter', music: 'tender', soft: true },
      { n: "They went out the long way, round the gym, not through the courtyard, under one umbrella and a half, Rio's broken one held over Saori and getting nobody dry. At the gate there was the red post box, square and old, with its slot like a closed mouth and the last collection time on a little enamel plate: 17:30. It was 17:12." },
      { n: "Rio stopped in front of it. She took the envelope out of her jacket and held it at the slot. The corner went in. A centimeter. She stood there with her hand on it, in the rain, with her jaw set, and didn't let go, and didn't push." },
      { n: "Saori stood beside her and didn't say anything. Solar stood on her other side and didn't say anything. The rain came down on the three of them and on the post box, and somewhere over the river the five-thirty chime started up from the ward office, the little tune they played every evening to send children home, thin and tinny over the wet roofs." },
      { n: "Rio took the envelope back out of the slot. She looked at it. A wet mark on its corner where the rain had got it." },
      { s: 'rio', f: 'neutral', t: "...Tomorrow. It's in pen now. That's enough for one day. Pen's a lot." },
      { s: 'saori', f: 'neutral', t: "It's the twenty-fourth they want it by. In writing. You've got time. Sorry. I'm not counting. I counted once. I'm stopping." },
      { n: "She opened the notebook under the half umbrella anyway, to the list, to the bottom, to *Sapporo (snow)* in pencil, and wrote under it, small, a new line with an empty box beside it: *(posted?)*. She didn't tick it. She didn't cross it. She closed the notebook and put it inside her coat, against her chest, where it wouldn't get wet." },
      { n: "They went off down the hill together, the two of them, not to the bus, walking, the thirty-one minutes, Saori's hand in the crook of Rio's arm and the broken umbrella over both of them and neither of them dry. At the first lamp they stopped, and Rio took the envelope out again and looked at it in the light, and put it back. Solar watched them to the bottom of the hill." },
      { n: "When she got back to the dorm she put her hand in her blazer pocket for her key and found a strip of paper in there she hadn't put there. Saori's handwriting, very small. It must have gone in at the desk, when she wasn't looking." },
      { n: "*Thank you for whatever you said. I'm writing it down here so it's kept, and giving it to you so it isn't mine.*" }
    ] }
  ]
});
