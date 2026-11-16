/* Persona 3: Equinox · Rio & Saori · IX The Hermit (a duo link). Link data (femc-equinox-game.html). Format: link fields
   in assets/femc/game/core.js ("Links" header), scene lines in assets/femc/game/scene.js.
   Written: rank 1 only (from 4/13; their home is the tennis courts on Tuesday, Thursday and Saturday after school, so 4/13
   itself). Ranks 2–10 still to write. Shape: the stub fields from assets/femc/equinox/data/links.js (members / cast kept;
   this file wins over the stub). Both girls speak in every rank.
   Solstice's Rio and Saori links are shared memory (Rio: the ball cart, Ryoko, Mori, the first racket; Saori: the library,
   the cloth-bound book of the sun and the moon nobody had borrowed in eleven years, the polite space on the card). Whatever
   either of them was to Solar last year stays unsaid here (romance null; nothing reads Solstice link standing).
   The duo's hook: they're natives, and they're the only two people at Gekkoukan outside the dorm who remember her.
   Flags this file sets: eqx-rs-book (rank 1: Solar borrows the book again). Nothing reads it yet. */
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
    ] }
  ]
});
