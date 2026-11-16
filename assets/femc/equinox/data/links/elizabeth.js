/* Persona 3: Equinox · Elizabeth (Velvet Room). Link data for femc-equinox-game.html; replaces her stub in ../links.js (same id).
   Format: link fields in assets/femc/game/core.js ("Links" header), scene lines in assets/femc/game/scene.js.
   A hidden frame link, as in Solstice (assets/femc/game/links/elizabeth.js): never on the map, no phone (invite: null), no
   hangouts. Every rank is forced, so each plays as story on its `after` date through core.js dueEvent (hidden: true doesn't
   stop a forced rank; linkStatus is never asked). Rank 1 plays on 4/13 in the late slot (rank `slot: 'late'`), in the
   Velvet Room. Rank 2 is her personal request (a door that closes properly), forced on 4/20 in the after-school slot
   (rank `slot: 'after'`), out in town; the same night's late slot is the eqx-records event, which rank 2 hands off to.
   Rank 3 is her supper at the boarding house, forced on Sunday 6/13 in the evening slot (rank `slot:
   'evening'`); it records her ask: tally asks.elizabeth (+ cakes / choose). Speaker mrsoka appears. Ranks 4-10 to come; a later
   rank needs its own `after` date and slot. Rank 2 flag: eqx-eliz-door-shown (reads
   eqx-aigis-log).
   Flags this file sets: eqx-eliz-form (rank 1: Solar tells her where else she has seen the handwriting). Nothing reads it yet. */
(window.FEMC_GAME_LINKS ||= []).push({
  id: 'elizabeth', name: 'Elizabeth', short: 'Elizabeth', arcana: 'Velvet Room', numeral: '', from: 'Persona 3', kind: 'frame',
  romance: null, starts: '4/7', hidden: true,
  forced: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  home: { area: 'Iwatodai Dorm', spot: 'Front', slot: 'after', days: [0, 1, 2, 3, 4, 5, 6],
          hint: 'Some Sundays, a card of blue paper under the door, and a woman in blue waiting at the gate.' },
  approach: "A woman in a blue dress and a little blue cap is standing very straight outside the dorm gate with an enormous book held against her chest, regarding the street with polite, intense interest.",
  cast: {},
  invite: null,
  hangouts: [],
  ranks: [
    { after: '4/13', slot: 'late', title: '1: they came', place: 'The Velvet Room', time: 'Late Night', music: 'velvet', scene: [
      { bg: 'solar-dormroom-night' },
      { n: "She fell asleep after the red had gone. It went the way it always went now, all at once, the lights coming back street by street from the river outward and the wind starting again mid-gust, and she lay on top of her covers in the dark with her shoes still on and listened to the dorm unclench around her, doors, a tap, Junpei saying something through a wall and Yukari telling him to shut up, until the building was only a building again." },
      { n: "She didn't remember closing her eyes. She remembered the ceiling, and then a hum, low and even, coming up through the soles of her feet." },
      { place: 'The Velvet Room', time: 'Late Night', bg: 'velvetroom-1', soft: true },
      { n: "Blue velvet. Brass. The numbers over the doors climbing slowly toward nothing, and a woman's voice somewhere singing without words, and the particular cold of the Room, which wasn't a temperature so much as a kind of clean, like the air on a mountain or in a library at closing time." },
      { n: "Elizabeth was standing where she always stood, with the great blue book held against her chest. She'd been waiting. Solar could tell by the way she didn't look up straight away, the way someone who's been watching a door for an hour pretends, when it opens, that they were reading." },
      { s: 'elizabeth', f: 'happy', t: "There you are. I said soon, and you took six days. I've been told that six days is soon. I've decided to believe it, because the alternative is that I've been impatient, and I don't care for that at all." },
      { n: "There was a line of gold light under the doors. Solar had seen it last time, or half-seen it, a thin bright edge on the carpet where one of them hadn't quite met the frame. It was still there. It hadn't moved, and it hadn't grown, and Elizabeth was standing a little to one side of where she usually stood, so that the hem of her blue dress fell across it and the light came through the cloth." },
      { choose: [
        { t: "You're standing in front of the door.", notes: 2, then: [
          { s: 'elizabeth', f: 'neutral', t: "I'm standing in the Room. The door happens to be behind me. Most things in here are behind me, if you think about it. I'm very much at the front." },
          { n: "She didn't move. She smiled, brightly, the whole smile, and didn't move an inch." }
        ] },
        { t: "I've got questions too.", notes: 3, then: [
          { s: 'elizabeth', f: 'happy', t: "Oh, good. Then we'll trade. I adore a trade. Ask yours first; you look as though they've been sitting on your chest." }
        ] },
        { t: "(Sit down on the velvet and wait.)", notes: 2, then: [
          { n: "She sat. The velvet gave under her the way it always had, too soft, a seat that seemed to remember the shape of whoever had sat in it last and expect them back. Elizabeth watched her settle with great approval, as if Solar had passed a small test of manners nobody else knew about." }
        ] }
      ] },
      { s: 'solar', f: 'serious', t: "Why are they here?" },
      { n: "It came out harder than she'd meant. She'd been carrying it for a week. Hanni on the steps in her party dress. Yunjin on the riverside with her hands shut on nothing. Jungwon at a gate with a watch that had started again. Fourteen people at breakfast, and the dog under the table. Everyone she'd ever been held by, in one town, at once, in the wrong country, in the red." },
      { s: 'solar', f: 'serious', t: "I was taken. I know that. Something took me. But they weren't. So why are they here?" },
      { s: 'elizabeth', f: 'neutral', t: "That's the right question. I've been hoping you'd ask that one first. It's the only one I can answer properly." },
      { s: 'elizabeth', f: 'neutral', t: "You were taken. They weren't." },
      { s: 'elizabeth', f: 'serious', t: "They came." },
      { n: "She opened the book." },
      { n: "The pages went by under her gloved fingers with that sound like cards being shuffled by someone very good at it, faster than last time, and Solar saw faces go past, names, small careful paragraphs, and then, all at once, pages she knew. Not hers. Theirs. Hanni's round face. Yunjin's scowl. Jungwon, upright, in a coat. Akihiko with his hands wrapped. Haechan. Mitsuru. Page after page of people she had last seen holding on to her." },
      // CG: eqx-threads — an old blue-bound book lying open across a woman's gloved hands, its pages fanned so a dozen of them show at once, a fine thread of gold sewn through the bottom edge of every page and running off the paper, all the threads pulled the same way.
      { n: "Every one of them had a thread through it." },
      { n: "A single strand of gold, finer than a hair, stitched through the paper along the bottom edge of the page, the way you'd stitch a hem, and then out, off the edge, into the air, where it went on, glinting, toward something. Elizabeth fanned the pages so that a dozen showed at once, and all the threads came off the bottom of the book at once like the strings of a dozen kites in the same wind, and every one of them pulled the same way." },
      { n: "Toward Solar. She could see it, now she was looking. The faint gold lines going across the Room, catching the blue light, and meeting, somewhere about the middle of her chest, and going in." },
      { s: 'elizabeth', f: 'neutral', t: "They appeared on the night of the sixth. All at once. I was here, and I heard the book move, and when I opened it, there they were. I've never had a thread in this book before. I've never had to sew anything into it at all." },
      { s: 'elizabeth', f: 'neutral', t: "At the end of your year, when you were pulled, they held on to you. You remember. And holding didn't keep you. Nothing was ever going to keep you, not with what had hold of you." },
      { s: 'elizabeth', f: 'happy', t: "But it went with you. The holding. That's the part nobody expected. Every hand that closed on you was tied to you by its own grip, and when the way opened wide enough, they simply followed their own hands through. Like climbing a rope you'd tied yourself." },
      { s: 'elizabeth', f: 'neutral', t: "Nobody fetched them. Nobody stole them. Nobody asked. They came because they'd hold on to you anywhere, and anywhere turned out to include here." },
      { choose: [
        { t: "So it's my fault they're here.", notes: 1, then: [
          { s: 'elizabeth', f: 'serious', t: "No. Listen to me. It's *theirs*." },
          { s: 'elizabeth', f: 'neutral', t: "That's the whole point of it. You didn't do it. They did. It's the one thing in all of this that belongs to them entirely, and you're not allowed to take it off them by feeling guilty. I won't have it." }
        ] },
        { t: "Can they go home?", notes: 3, then: [
          { s: 'elizabeth', f: 'neutral', t: "That's a very good question, and the honest answer is that I don't know yet. A thread runs both ways. That's the nature of thread." },
          { s: 'elizabeth', f: 'serious', t: "But I'd want them to be the ones who decide. Wouldn't you? It would be a great shame to arrive somewhere by your own hand and leave it by somebody else's." }
        ] },
        { t: "(Touch one of the threads.)", notes: 2, then: [
          { n: "She reached out and put one finger under the nearest thread where it crossed the air between them. It was warm. It hummed, very faintly, the way a wire hums in the wind, and she knew, without knowing how, that it was Hanni's, and that somewhere in the dorm Hanni had just turned over on her futon in the hall and put one hand out across the floor." },
          { s: 'elizabeth', f: 'happy', t: "Gently. They're a great deal stronger than they look, but so is everyone." }
        ] }
      ] },
      { n: "Elizabeth closed the book on the threads, carefully, so they lay along the edge of the pages and didn't catch, and stood with it against her chest for a moment, looking at Solar in a way she hadn't last time. Not curious. Something that sat underneath curious." },
      { s: 'elizabeth', f: 'neutral', t: "That's my answer. Here's my question. I'm afraid it's the other page." },
      { n: "She turned to it without having to look. Solar's page. The three hands from last year, quick and careful and round, edge to edge, into the border and over it. And at the bottom, the fourth." },
      { n: "It was longer. That was the first thing. A week ago it had run to the bottom of the page and, she'd thought, off it. It had. It had gone over the edge and on to the next page, and the next, in the same heavy hand, the same patient size, the same one word, line after line, pressed so hard into the paper that the letters stood up off it like a scar. *stay* *stay* *stay*." },
      { n: "In one place it had torn through. Not a small tear. Five pages, one after the other, ripped clean through in the shape of the word, as if whoever held the pen had leaned on it with the whole weight of a body." },
      { s: 'elizabeth', f: 'serious', t: "That was Saturday night. Late. During your red hour, I think, though time is difficult from in here." },
      { s: 'elizabeth', f: 'serious', t: "It writes every night. Always the same, always the same pressure. On Saturday it pressed so hard it went through five pages, and then it stopped for a little while, and then it went on, more gently, almost—" },
      { n: "She stopped. She looked at the torn pages for a moment with an expression Solar had never seen on her, and didn't have a name for, and then she found the word, and didn't like it." },
      { s: 'elizabeth', f: 'serious', t: "Almost pleased. As though something had gone very well for it." },
      { s: 'elizabeth', f: 'neutral', t: "I can't see who holds the pen. I can see almost everyone. I can't see that." },
      { s: 'elizabeth', f: 'neutral', t: "So here is my question. Have you seen this hand anywhere else? On your side. Anywhere at all." },
      { choose: [
        { t: "On my enrollment form. At school.", notes: 3, flag: 'eqx-eliz-form', then: [
          { n: "She said it before she'd decided to, and then she couldn't take it back, and she found she didn't want to. The form in the thin folder. The upright old-fashioned strokes, every one finished. The weight of it, standing up off the back of the paper under her thumb." },
          { s: 'elizabeth', f: 'serious', t: "...A form. At a school. With a stamp on it, I expect, and a date." },
          { s: 'elizabeth', f: 'serious', t: "Then someone on your side has a pen. And a desk, and a stamp, and a reason to want you in a register." },
          { s: 'elizabeth', f: 'neutral', t: "I find I'd rather it were a ghost. Ghosts don't fill in forms." },
          { s: 'solar', f: 'neutral', t: "I could bring it here." },
          { s: 'elizabeth', f: 'sad', t: "You can't. Things from your side don't come into the Room. I've tried. They arrive blank. I once had a whole newspaper turn up here, and it was beautifully folded, and there wasn't a word on it." },
          { s: 'elizabeth', f: 'neutral', t: "Keep it close. Somewhere you'd know if it moved." },
          { n: "Solar thought of the thin folder in the drawer of her desk, under her school things, and of the drawer, which didn't lock, and of how she'd checked it twice before bed without knowing why. She didn't say so. She looked at Elizabeth, and Elizabeth looked back, and neither of them said anything for a while." }
        ] },
        { t: "No. Nowhere.", notes: 2, then: [
          { s: 'elizabeth', f: 'neutral', t: "Good. Then it's only in here, and in here I can watch it." },
          { s: 'elizabeth', f: 'serious', t: "If you do see it somewhere, on your side, on anything, you'll tell me. Won't you. Even if it seems small. Especially if it seems small." }
        ] },
        { t: "(Don't answer.)", notes: 1, then: [
          { n: "She didn't answer. She looked at the torn pages instead. Elizabeth watched her not answer, for a long time, with her head a little on one side, and then nodded, very slightly, as if Solar had said something after all and she'd written it down." },
          { s: 'elizabeth', f: 'neutral', t: "Very well. When you're ready. I'm told people are ready on their own schedules. It's one of the most inconvenient things about them." }
        ] }
      ] },
      { n: "She closed the book. The sound it made was soft and final, like a door being shut properly, and for a moment she held it the way she'd held it last time, in both arms, flat against her chest, the way you'd hold a door shut against a wind." },
      { s: 'elizabeth', f: 'happy', t: "Well. That's quite enough of that. I've been gloomy for an entire visit and I'm not built for it." },
      { s: 'elizabeth', f: 'neutral', t: "Now. I have requests. I always have requests. Most of them are business, and you'll find them where you always found them, and some of them will be dreadful." },
      { s: 'elizabeth', f: 'happy', t: "But one of them is personal. I'd like you to show me a door. In your town. Any door, I'm not particular. A door that closes properly, all the way, so that nothing at all comes through underneath." },
      { s: 'elizabeth', f: 'neutral', t: "I'd like very much to see how it's done." },
      { choose: [
        { t: "I'll find you a good one.", notes: 3, then: [
          { s: 'elizabeth', f: 'happy', t: "A good one. Yes. With a proper latch, and a frame that fits, and someone on the inside who knows how to shut it. I'll be looking forward to it enormously." }
        ] },
        { t: "Is this about the light under that one?", notes: 2, then: [
          { s: 'elizabeth', f: 'neutral', t: "It's about doors in general. I've taken an interest. People do take interests." },
          { s: 'elizabeth', f: 'neutral', t: "Theodore offered to mind that one for me, you know. While I rested. I told him no. He's terribly heavy-handed with doors. He'd only make it worse." }
        ] },
        { t: "Doors in my town don't seem to stay shut lately.", notes: 1, then: [
          { s: 'elizabeth', f: 'serious', t: "No. I'd noticed." },
          { s: 'elizabeth', f: 'happy', t: "Which is exactly why I'd like to see one that does. One good example. I find a good example does wonders for morale." }
        ] }
      ] },
      { n: "The hum changed under the floor. The numbers over the doors had begun, slowly, to count back down. Elizabeth lifted one gloved hand in her small formal wave, the girl at the station seeing somebody off, and then, as the white came in at the edges, did the thing Solar would remember all the next day without wanting to." },
      { n: "She turned round. Not to the elevator doors. To the one with the light under it. And stepped, very precisely, into the middle of the line of gold, so that the whole of it went out behind her dress, and stood there, perfectly straight, with the book in her arms, her back to Solar, facing the door." },
      { n: "The last thing Solar heard, before the dorm ceiling came back, was the faint gold hum of a dozen threads in the dark, all pulling the same way. And under it, from very far off, so faint it could have been the pipes, two polite knocks." },
      { place: 'Iwatodai Dorm', time: 'Late Night', bg: 'solar-dormroom-night', soft: true },
      { n: "She woke at four with her shoes still on and her hand closed on the blanket over her chest, holding something that wasn't there." },
      { n: "Out in the hall, through the door, someone was breathing on the floor. Slow and even, asleep. It took her a moment to remember: Hanni had dragged her futon out of her room on Monday night and laid it down across the corridor outside Hyein's door, and said it was because her room was cold." }
    ] },
    { after: '4/20', slot: 'after', title: '2: a door that closes properly', place: 'Iwatodai Dorm · Front', time: 'After School', music: 'velvet', scene: [
      { bg: 'iwotodaidorm-outside' },
      { n: "There was a card under her door when she got back from school. Blue paper, heavy, folded once, with a single line on it in a hand like copperplate that had been taught by someone very strict and then allowed to enjoy itself: *I am at your gate. I have been at your gate since a quarter to three. It's a very good gate. — E.*" },
      { n: "She was. Standing on the pavement outside the dorm in the blue dress and the little blue cap, with the enormous book held flat against her chest in both arms, perfectly straight, regarding the street with polite, intense interest, as if the street were an exhibit and she'd paid for a ticket. A woman walking a dog had crossed to the other side to go round her. The dog had stopped and sat down and stared at her with its mouth open, and the woman was tugging the lead." },
      { s: 'elizabeth', f: 'happy', t: "There you are. I've been watching your street. Do you know, a man went past on a bicycle with a ladder? Upright. Through the air. I've never been so frightened for anyone in my life. He didn't seem to mind." },
      { s: 'elizabeth', f: 'neutral', t: "I've come about my request. The personal one. A door that closes properly. I thought, if I wait for you to bring one to the Room, it'll arrive blank, the way things do. So I've come to the doors instead." },
      { choose: [
        { t: "You can just come out? Into town?", notes: 2, then: [
          { s: 'elizabeth', f: 'neutral', t: "For an afternoon. If I'm careful, and I keep my book shut, and nobody at home notices. Theodore notices everything. Theodore thinks I'm in the archive, alphabetizing." },
          { s: 'elizabeth', f: 'happy', t: "I left him a note. It says *alphabetizing*. That's not a lie. I shall alphabetize something this afternoon if it kills me." }
        ] },
        { t: "(Hold out your arm for her, like an escort.)", notes: 3, then: [
          { n: "She held out her arm, elbow crooked, the way people did in old films. Elizabeth looked at it for a long moment with enormous seriousness, and then shifted the book to one arm and put her gloved hand through Solar's elbow, very precisely, as if she were fitting a key into a lock she'd read about." },
          { s: 'elizabeth', f: 'happy', t: "Oh, this is good. This is very good. I see why people do this. You can't get lost. You can't be carried off by a man with a ladder." }
        ] },
        { t: "I've got a few doors in mind.", notes: 2, then: [
          { s: 'elizabeth', f: 'happy', t: "A *few*. A tour. Oh, I hoped it would be a tour. I've brought a pencil." }
        ] }
      ] },

      { n: "The first door was the dorm's own. She'd thought it was the obvious place to start. Elizabeth stood in front of it on the step with her head on one side and examined it top to bottom the way a doctor examines a tongue: the frame, the hinges, the brass handle, the little window, the bolt, the chain, and the sheet of paper taped to the inside of the glass at eye level in Hanni's handwriting, in three languages, the third one Fuuka's careful Japanese, *NOBODY OPENS A DOOR IN THE RED. NOBODY. — Mgmt.*" },
      { s: 'elizabeth', f: 'neutral', t: "That's a good door. A strong door. It's had a great many people come through it who loved each other, you can tell. Doors keep it in the wood." },
      { s: 'elizabeth', f: 'serious', t: "But it's nervous. Look at it. Three locks and a sign. A door that closes properly doesn't need a sign. It just closes." },
      { s: 'elizabeth', f: 'neutral', t: "...And somebody's going to put their hand on that handle one night soon, from the other side, and I don't think the sign will help. I don't say that to be gloomy. I say it as someone who's read a lot of signs." },
      { n: "Solar looked at the handle. Brass, worn bright in the middle by every hand in the dorm. It looked like a handle. She didn't like that Elizabeth had said *soon*, and she didn't ask, and Elizabeth didn't offer, and they went down the steps." },

      { place: 'Iwatodai · Konbini', time: 'After School', bg: 'shopping-street', soft: true },
      // BG: iwatodai-konbini-day — the front of a small Japanese convenience store on a sunny shopping street in the afternoon, glass automatic doors, posters in the windows, a bicycle parked outside.
      { n: "The second door was the konbini on the corner of the strip, because she wanted to see Elizabeth meet an automatic door, and she wasn't sorry." },
      { n: "Elizabeth stopped a meter from it. It opened. She took a startled step back. It closed. She stepped forward. It opened. She stood very still, holding her book, and it stayed open, waiting, humming faintly to itself, with the cold breath of the shop's air coming out round her ankles, and her face went through astonishment and delight and a sort of slow dawning horror in about four seconds." },
      { s: 'elizabeth', f: 'happy', t: "It's *waiting* for me. It knew I was coming. How marvelous. How polite." },
      { s: 'elizabeth', f: 'serious', t: "...Does it do that for everyone?" },
      { s: 'solar', f: 'neutral', t: "Everyone. Anyone who walks up to it." },
      { s: 'elizabeth', f: 'serious', t: "Anyone at all. Without asking who they are. It simply sees something standing in front of it and opens." },
      { n: "She looked at it for a long time. The door hummed, open. A schoolboy squeezed past her with a bag of crisps, and then a woman with a baby, and the door stayed open for all of them, and Elizabeth watched each of them go in with an expression Solar couldn't read." },
      { s: 'elizabeth', f: 'neutral', t: "No. Not this one. This is the opposite of what I came for. This is a door that's forgotten what it's for. I find it rather tragic. I'm going to buy something from it anyway, out of pity." },
      { choose: [
        { t: "(Buy her a melon bread.)", notes: 3, then: [
          { n: "She bought her a melon bread, the cheap kind with the crackled sugar top, and Elizabeth held it in its plastic in both hands on the pavement outside and looked at it the way she'd looked at the ladder man, and then opened it, very carefully along the seam, and took a bite, and closed her eyes." },
          { s: 'elizabeth', f: 'happy', t: "...Oh. Oh, that's unreasonable. That's a cloud someone's baked. I'm going to have to sit down." },
          { n: "She didn't sit down. She ate the whole thing standing on the pavement outside the konbini in tiny precise bites, and folded the plastic into a perfect small square afterwards, and put it in her book, between two pages, to keep." }
        ] },
        { t: "(Let her pick something.)", notes: 2, then: [
          { n: "She chose for a very long time, up and down every aisle, and came to the counter in the end with a single box of matches, which she paid for with a coin Solar had never seen, gold and stamped with a door, that the clerk looked at and handed back and then let her have the matches anyway, for some reason, blinking." },
          { s: 'elizabeth', f: 'happy', t: "For lighting. In case. One never knows what one will need to light." }
        ] }
      ] },

      { place: 'Iwatodai · Residential Street', time: 'After School', bg: 'outside-daytime-neighborhood', soft: true },
      { n: "They took the long way back, down the dorm's own street toward the river, because Elizabeth wanted to see *a lot of doors in a row, like a library*. The street was quiet in the late afternoon. Tidy houses behind low walls, gates and steps and front doors in a row, a cat on a wall, someone's washing out." },
      { n: "At the third house from the bottom Elizabeth stopped." },
      { n: "It was nothing. An ordinary house. A little gray two-storey with a wooden door painted dark green, a mat, a plant in a pot going yellow at the edges. The curtains were drawn, upstairs and down, in the middle of the afternoon." },
      { s: 'elizabeth', f: 'serious', t: "This one's been knocked on." },
      { s: 'solar', f: 'neutral', t: "...How do you know?" },
      { s: 'elizabeth', f: 'serious', t: "Doors keep it. I told you. In the wood." },
      { s: 'elizabeth', f: 'serious', t: "Somebody stood here a long time. Very still. Being very polite. Knocking, and waiting, and knocking. Twice, and waiting, and twice. Not to get in. Just to be heard knocking." },
      { s: 'elizabeth', f: 'neutral', t: "...Whoever lives here didn't answer. Good for them. But they heard. You can tell that too. Look at the curtains." },
      { ifFlag: 'eqx-aigis-log', then: [
        { n: "The third house at the bottom of the street. Aigis's eleven seconds on the night of the twelfth: one heartbeat not in a coffin, standing at a door, knocking twice, politely, resting heart rate forty. Solar looked at the green door and the drawn curtains and didn't say any of that out loud." }
      ] },
      { choose: [
        { t: "(Take her arm. Walk on.)", notes: 3, then: [
          { n: "She took Elizabeth's arm and walked on, not fast, because fast would have meant something. Elizabeth let herself be walked. At the bottom of the street she looked back over her shoulder at the green door, once, with an expression of grave sympathy, the way you'd look back at somebody sitting alone in a waiting room." }
        ] },
        { t: "Can you tell who it was?", notes: 2, then: [
          { s: 'elizabeth', f: 'sad', t: "No. That's the part I can't. I can see almost everyone. I can't see that." },
          { s: 'elizabeth', f: 'neutral', t: "It's the same hand, I think. The one on your page. Something that presses hard, and is very patient, and very polite, and doesn't sign its name." }
        ] }
      ] },

      { place: 'Paulownia Mall · Café Door', time: 'After School', bg: 'paulownia-mall', soft: true },
      { n: "It was at the mall that it happened, the thing Solar would think about later, in the red, with her hand on her chest." },
      { n: "They'd gone in to look at the doors of the shops, which Elizabeth found disappointing, mostly glass, *a door you can see through is only a window that's lost its nerve*, and on the way out, at the café by the entrance, the one with the heavy wooden door and the brass push plate, an old woman was coming out with a stick, slowly, and Elizabeth stepped forward and held the door for her." },
      { n: "That was all. Anyone would have. The old woman thanked her and went past. And then a man was coming out behind the old woman, so Elizabeth kept holding it. And then two schoolgirls, going in. And a mother with a pushchair. And a man in a suit, on his phone, who didn't look at her. And a boy. And another." },
      { n: "She didn't let go. She stood in the doorway with the book under one arm and her gloved hand flat on the wood, holding it wide, smiling at each of them as they went through, in and out, and the door stayed open, and stayed open, a minute, two, and the café's warm air came out past her into the mall, and still she stood there, perfectly straight, with her hand on it, as if letting go were a thing she'd heard about and never been taught." },
      { choose: [
        { t: "Elizabeth. You can let go now.", notes: 3, then: [
          { n: "She looked round at Solar's voice. For a second, just a second, her face had nothing on it at all, not delight, not curiosity, nothing, the face of someone woken suddenly and not sure yet where they are. Then she looked at her own hand on the door, and at the people still coming, and back at Solar." },
          { s: 'elizabeth', f: 'sad', t: "...Can I? There's always someone else coming. I'd hate for it to shut on someone." }
        ] },
        { t: "(Go and put your hand over hers on the wood.)", notes: 3, then: [
          { n: "She went over and put her hand over Elizabeth's on the push plate, and felt how hard she was pressing, how stiff the arm was all the way up, as if she'd been holding up something much heavier than a café door." },
          { s: 'elizabeth', f: 'neutral', t: "...Oh. I'm pressing quite hard, aren't I. I hadn't noticed." }
        ] }
      ] },
      { s: 'elizabeth', f: 'neutral', t: "I find it very difficult to let go of a door, once I've got hold of one. It feels rude. It feels like somebody might be just about to come through it, a step behind, and if I let go they'll walk into the wood." },
      { s: 'elizabeth', f: 'sad', t: "...I suppose that's why I wanted to see one closed. Properly. By someone who knows how." },
      { s: 'elizabeth', f: 'neutral', t: "Show me. Please. I'd like to see how it's done." },
      { choose: [
        { t: "(Show her. Look. Let go. Listen for the latch.)", notes: 3, flag: 'eqx-eliz-door-shown', then: [
          { n: "She took Elizabeth's hand off the door, gently, one finger at a time, the way you'd unhook a child's hand from a railing, and then she looked out at the mall. Nobody coming. She looked the other way, into the café. Nobody coming." },
          { s: 'solar', f: 'neutral', t: "You look. Both ways. If somebody's coming, you wait for them. If nobody is, you let go." },
          { n: "She let go. The door swung slowly closed on its heavy hinge, and met the frame, and the latch went into the strike with a small clean click, the sound of something finished." },
          { s: 'solar', f: 'neutral', t: "That's it. That's all it is. If somebody comes later, they knock, and you open it again. It's not forever. It's just closed." },
          { n: "Elizabeth stood looking at the closed door with an expression of such complete attention that a man coming toward it with a tray of coffees stopped and went round to the other entrance." },
          { s: 'elizabeth', f: 'neutral', t: "...*It's just closed.* Not forever. Just closed." },
          { s: 'elizabeth', f: 'happy', t: "Again. Do it again. No, let me. I'll look both ways. I'm very good at looking." },
          { n: "She opened the door. She looked both ways, enormously carefully, for much too long. Nobody coming. Her hand stayed on the plate for one breath, two, three, and Solar watched her arm go stiff again, and then, with visible effort, like a person stepping off a high diving board, she let go." },
          { n: "The latch clicked. Elizabeth flinched at it, very slightly, and then laughed, out loud, astonished, and clapped once, the book pinned under her arm." }
        ] },
        { t: "(Close it with her. Both hands on the wood.)", notes: 3, flag: 'eqx-eliz-door-shown', then: [
          { n: "She put her own hand flat on the door beside Elizabeth's, so there were two hands on the wood, and looked both ways, and said *now*, and they both let go at the same time." },
          { n: "The door swung shut and the latch clicked, and Elizabeth's hand stayed in the air where the wood had been for a second, open, the fingers spread, and then she looked at it, and folded it carefully against her chest, as if it had done something brave without her." },
          { s: 'elizabeth', f: 'happy', t: "Together. Yes. That's easier. That's much easier than I thought. I should have asked for help with it ages ago." },
          { s: 'elizabeth', f: 'sad', t: "...I've never asked anyone to help me with a door. It never occurred to me there was anyone to ask." }
        ] }
      ] },

      { place: 'Iwatodai Dorm · Front', time: 'Evening', bg: 'iwotodaidorm-outside', soft: true },
      { n: "She walked her back to the gate in the last of the light. Elizabeth had her book shut tight against her chest with something new pressed between its pages, and a pencil behind her ear that Solar hadn't seen her put there, and she'd written something on the inside of her wrist in very small letters that she covered with her glove when she saw Solar looking." },
      { s: 'elizabeth', f: 'happy', t: "Thank you. That was a very good door. The best one I've ever seen. It was nothing special, which was the special thing about it." },
      { s: 'elizabeth', f: 'neutral', t: "I'll practise. I have a great many doors where I am, and some of them could stand to be closed properly." },
      { s: 'elizabeth', f: 'serious', t: "...One of them in particular." },
      { n: "She didn't say which. She didn't need to. Solar thought of the line of gold under the door in the Room, and of Elizabeth standing in it with her back to her, perfectly straight, the hem of the blue dress across the light." },
      { choose: [
        { t: "When you close it, do you want someone there?", notes: 3, then: [
          { s: 'elizabeth', f: 'neutral', t: "...I hadn't thought of that." },
          { s: 'elizabeth', f: 'sad', t: "I'd assumed it would be me. On my own. It's my door. I'm the one who held it." },
          { s: 'elizabeth', f: 'neutral', t: "But you made it look so much less frightening, standing beside it. I'll think about it. I'll think about it very seriously." }
        ] },
        { t: "It's just closed. Not forever.", notes: 2, then: [
          { s: 'elizabeth', f: 'happy', t: "Not forever. Yes. I wrote it down. On my wrist. Don't tell Theodore, he thinks ink on skin is barbaric." }
        ] },
        { t: "(Hug her.)", notes: 2, then: [
          { n: "She hugged her, over the book, which was in the way, and Elizabeth went rigid with surprise, and then, slowly, put one arm round Solar's back, the free one, and patted twice, very carefully, the way she'd seen people do it from the other side of a great many pages." },
          { s: 'elizabeth', f: 'happy', t: "...Oh. That's like the melon bread. That's unreasonable too." }
        ] }
      ] },
      { s: 'elizabeth', f: 'neutral', t: "Now. Come tonight. Late, when the red's gone. I've something to lay out for you, and it's taken me what you'd call all night, and I'd very much like you to see it before I lose my nerve and put it all back in the right order." },
      { n: "She stepped back from the gate, and lifted one gloved hand in her small formal wave, the girl at the station, and turned, and walked away up the street in the dusk, very straight, with the book against her chest." },
      { n: "At the corner she stopped. There was a door there, a little side door to the alley behind the bakery, standing open a hand's width, propped with a brick. Solar watched her look at it. Look both ways. And then, very deliberately, bend down, and move the brick, and let the door go, and wait, with her head on one side, until it clicked." },
      { n: "Then she went round the corner, and when Solar got there a moment later the street was empty, all the way to the end, and the bakery door was shut, and there was nobody on it at all except, faintly, on the brass of the handle, the print of a small gloved hand." }
    ] },
    { after: '6/13', slot: 'evening', title: '3: a house where everyone is fed', place: 'Iwatodai · The Oka Boarding House', time: 'Evening', music: 'velvet', scene: [
      { bg: 'iwotodaidorm-outside' },
      { n: "The blue card was under her door on Sunday morning, folded once, the copperplate hand gone a little wild at the ends of its letters, the way handwriting goes when somebody's written something they're excited about and tried to be calm: *I have been invited to supper. I have never been invited to anything. I don't know what one does with one's hands. Please come and show me. Six o'clock. Your gate. — E.*" },
      { n: "And under that, smaller, added after, in a different pressure of the pen: *It is the lady with the gloves. By the river. She asked me at her gate on Thursday whether I'd eaten. Nobody has ever asked me that.*" },
      { n: "Solar read it twice standing in the doorway in her socks. Then she sat down on the edge of her bed with the card in her lap and read it a third time, and the rain went on outside, and something in her stomach went slowly and carefully cold, the way a glass goes cold when you fill it from the tap." },
      { n: "At six Elizabeth was at the gate. She'd brought the book, of course. She'd also brought a gift, wrapped in blue paper so neatly the corners looked machined, held out in front of her in both hands like a tray, and she'd put on gloves, white ones, different from her usual, and Solar looked at the gloves and didn't say anything." },
      { s: 'elizabeth', f: 'happy', t: "I've read that one brings something. To a house. So I've brought something. It's a box of matches, wrapped. I hope she lights things." },
      { s: 'elizabeth', f: 'neutral', t: "And I've read that one wears gloves to supper, in some books. Older books. She wears gloves. I thought it would be polite to match." },
      { choose: [
        { t: "You don't have to match her. Wear what you like.", notes: 3, then: [
          { s: 'elizabeth', f: 'neutral', t: "Oh. Don't I?" },
          { n: "She looked down at her hands, considering, and then took the white gloves off, finger by finger, and put them inside the cover of her book, and held out her bare hand in front of her face and looked at it with interest, as if she hadn't seen it in some time." },
          { s: 'elizabeth', f: 'happy', t: "There. My own hands. They'll have to do." }
        ] },
        { t: "(Take her arm. Like last time.)", notes: 3, then: [
          { n: "She crooked her elbow. Elizabeth fitted her gloved hand through it with great precision, the key into the lock, and sighed with satisfaction, and they set off down the hill toward the river with the matches held out in front of them like an offering." }
        ] },
        { t: "Elizabeth. Are you sure about this?", notes: 2, then: [
          { s: 'elizabeth', f: 'happy', t: "Not at all. That's what's so exciting. I'm never not sure about anything. I can't remember the last time." }
        ] }
      ] },

      { place: 'Iwatodai · The Oka Boarding House', time: 'Evening', bg: 'eqx-oka-gate', soft: true },
      { n: "At the gate Elizabeth stopped, the way she'd stopped at the dorm door and the konbini and the third house from the bottom, and looked at it top to bottom. The low wooden gate. The plain iron hook in the iron eye. The street side." },
      { s: 'elizabeth', f: 'happy', t: "Oh, look. It only opens from out here. Somebody wants visitors very, very much. That's rather sweet." },
      { n: "She lifted the latch herself, delighted, before Solar could, and went in, and stopped again on the path under the persimmon tree, and looked at the house, the door, the lamp lit in the hall, and her head went a little on one side. Solar waited for it. *This one's been knocked on.* *Doors keep it.*" },
      { n: "Elizabeth looked at the boarding house door for a long time. Then she looked at Solar, and her face had something on it Solar had never seen there: not delight, not curiosity. A small, polite puzzlement, like someone who's opened a book to the page they wanted and found the page blank." },
      { s: 'elizabeth', f: 'neutral', t: "I can't read it." },
      { s: 'elizabeth', f: 'neutral', t: "Every door I've ever met keeps something. Who's been through it. Who's waited. This one's just… a door. As if nobody had ever come or gone through it at all." },
      { s: 'elizabeth', f: 'happy', t: "Isn't that refreshing? I'm going to enjoy myself enormously. I'm not going to read anything all evening." },
      { n: "She went up the path. At the side of it, under the persimmon tree, she passed the well with its heavy stone cap and its blue hydrangeas and didn't look at it at all, not once, which Solar noticed only afterward, on the walk home, because Elizabeth looked at everything." },

      { place: 'The Oka Boarding House · Front Room', time: 'Evening', bg: 'eqx-oka-kitchen', soft: true },
      // BG: oka-dining-room — the long low dining table set for many with mismatched bowls, a lamp hanging low, rain on the garden window at the end.
      { n: "The long table was full. Sunday, so the guesthouse had come early: Jaehyun at his usual place, Cherry by the door, Minji with her camera in her lap, and at the end nearest the kitchen Nozomi, already on his second bowl, who looked up at Elizabeth coming in and stopped chewing for the first time Solar had ever seen him stop chewing." },
      { n: "Mrs. Oka was at the door of the front room, just inside it, her apron on, her gloves floured, and her whole face lit when she saw them, slowly and completely, the lamp in the window." },
      { s: 'mrsoka', f: 'happy', t: "There she is. And she's brought her friend. Oh, look at you, in all that blue. Come in, come in, both of you. Mind the step, it's higher than you think." },
      { s: 'elizabeth', f: 'happy', t: "Good evening. Thank you for having me. I've brought matches." },
      { n: "She held out the box in its perfect blue paper. Mrs. Oka took it in both gloved hands and looked down at it, and then up at Elizabeth, and laughed, the short warm embarrassed laugh, and said she'd never been given a nicer thing, and put it on the shelf over the stove where everybody could see it, beside the tin with the cranes." },
      { n: "She'd laid Elizabeth a place. Of course she had. In the middle of the table, across from Solar, with a cushion a little thicker than the others and a cup already there, and the tea in the cup was a color Solar had never seen tea be, a clear pale blue, like light through a bottle." },
      { s: 'mrsoka', f: 'neutral', t: "Butterfly pea. With a little lemon in. I had a feeling." },
      { n: "Elizabeth picked it up. She looked at it. She drank, and put it down, and looked at it again, and then at Mrs. Oka, who had already gone round behind Nozomi with the rice pot." },
      { s: 'elizabeth', f: 'neutral', t: "...She knew how I take my tea." },
      { s: 'elizabeth', f: 'neutral', t: "I didn't know how I take my tea. I've never taken it anywhere." },

      { n: "Halfway through the soup Jaehyun got up to carry the empty rice pot to the kitchen for her, the way he did now, and a minute later Mrs. Oka followed him with the kettle, and stopped at the kitchen door, her own kitchen door, with somebody in it, and knocked on the frame. Twice. Two small polite knocks with one knuckle. And waited, until Jaehyun said *yes?* from inside, before she went in." },
      { n: "Elizabeth ate supper the way she'd eaten the melon bread: with absolute seriousness and enormous joy, tiny precise bites, her eyes closing at every new thing. Grilled fish. Pickled radish. Rice. A clear soup with a single slice of something floating in it like a moon. She asked the name of each dish, and repeated it, and wrote it in pencil on the inside of her wrist where she'd written *not forever*, until her wrist ran out and she started on the other." },
      { n: "The table loved her. It couldn't help it. Cherry asked her where she was from and she said *a room*, and Cherry said *same*, and they shook hands across the soy sauce. Minji lifted her camera, once, toward the blue dress, and then put it down again without filming, and frowned at it, as if it had refused. Jaehyun explained the pickles. Nozomi offered her his last piece of fish, which nobody at that table had ever seen him do, and she took it with a small formal bow, and he went pink to his ears." },
      { choose: [
        { t: "(Show her how to hold the chopsticks properly.)", notes: 3, then: [
          { n: "She leaned across the table and fixed Elizabeth's fingers on the chopsticks, the bottom one still, the top one moving, and Elizabeth watched her own hand as if it belonged to someone she was very fond of, and picked up a single grain of rice, and held it up to the lamp, and the whole table clapped." },
          { s: 'elizabeth', f: 'happy', t: "One grain. I'm going to remember this grain for the rest of my life." }
        ] },
        { t: "(Watch Mrs. Oka watching her.)", notes: 2, then: [
          { n: "Mrs. Oka didn't sit. She never sat. She went round behind them with the pot and the kettle, filling, setting down, and every time she passed behind Elizabeth she slowed, very slightly, and looked down at the top of the little blue cap, and once she put out a gloved hand as if to touch it, the way she'd pat Nozomi's head, and stopped a centimeter short, and went on." },
          { n: "Elizabeth didn't notice. Or she did, and went on eating. With Elizabeth you could never tell which was the polite one." }
        ] },
        { t: "(Eat. Let her have the table.)", notes: 2, then: [
          { n: "She ate, and let Elizabeth have the table, and watched her have it, and thought that she'd never once seen Elizabeth in a room with more than two people in it, in any life, and that she looked, for the first time, exactly like what she'd asked to be, in the very first year: someone out in the world." }
        ] }
      ] },
      { n: "The tin came round at the end, the one with the cranes, open, the rice cakes white and round in their paper cases. Elizabeth took one. She held it on her palm and looked at it the way she'd looked at the melon bread, and then bit, carefully, and chewed, and stopped." },
      { n: "Her face didn't change. Her face was exactly as delighted as before. But she held the rest of the rice cake on her palm without lifting it again, and after a moment she said, quite softly, to nobody, the way she'd read a fact out of her book." },
      { s: 'elizabeth', f: 'neutral', t: "...It tastes sad. Isn't that odd? It's lovely, and it tastes like a coat that's been in a cupboard all winter." },
      { n: "Nobody heard her but Solar. Mrs. Oka was at the stove with her back to them, humming. Elizabeth wrapped the rest of the rice cake in a paper napkin, very neatly, and put it between two pages of her book, beside the melon-bread wrapper, to keep." },

      { place: 'The Oka Boarding House · Hall', time: 'Evening', bg: 'eqx-oka-kitchen', soft: true },
      { n: "At the door, when the guesthouse had gone off down the wet street in a clump under three umbrellas, Mrs. Oka took Elizabeth's hand in both of hers. Gloved on gloved, or gloved on bare, depending on what Solar had told her at the gate, and either way Solar watched it the way she'd watched the darning, and couldn't look away." },
      { s: 'mrsoka', f: 'happy', t: "You'll come again. You'll come every Sunday. And you'll stay, won't you, one of these nights? There's a room. There's always a room. You'd like it here, I think. You'd never have to go back to wherever it is you keep yourself." },
      { s: 'mrsoka', f: 'neutral', t: "Stay, child. You've been on your own a very long time. I can always tell." },
      { n: "Elizabeth looked at her. At the lit, kind, lamp-in-the-window face, close, and the gloved hands round hers. And she smiled, the whole smile, brighter than Solar had ever seen it, and said it as if it were the most delightful thing in the world." },
      // CG: eqx-not-allowed — the lamplit doorway of an old Japanese house at night, a woman in an apron and white cotton gloves holding both hands of a smiling woman in a blue dress and cap who holds a large book under one arm, rain beyond the door.
      { s: 'elizabeth', f: 'happy', t: "I'm not allowed. Isn't that a shame?" },
      { n: "Mrs. Oka's face didn't change. It stayed lit, warm, the lamp. But her hands, round Elizabeth's, went still. Completely still, the way a cat goes still, and stayed that way for exactly as long as it took the rain to sound loud in the hall, and then patted, twice, and let go." },
      { s: 'mrsoka', f: 'neutral', t: "Well. Rules are rules. I'll keep your place anyway." },

      { place: 'Iwatodai · River Road', time: 'Night', bg: 'iwatodai-riverside-night', soft: true },
      { n: "They walked back along the river because Elizabeth wanted to see the water at night, and the rain had thinned to almost nothing, a fine cold mist that hung in the lamp light and made halos round everything. Elizabeth had her book shut against her chest. She'd been quiet since the gate, which wasn't like her." },
      { s: 'elizabeth', f: 'neutral', t: "She asked me to stay. Did you hear? Nobody has ever asked me to stay anywhere. People ask me to leave, mostly. Politely. Igor asks me to *return*, which is different." },
      { s: 'elizabeth', f: 'sad', t: "...I said I'm not allowed, and it was true, and I felt it come out of my mouth like a door shutting. And it was lovely. It was the loveliest thing I've ever said no to." },
      { n: "They walked. The river went past on their left, black and fast with the rain, and Elizabeth watched it the whole way, the way you'd watch something you'd read about in a great many books and never been sure was real." },
      { s: 'elizabeth', f: 'serious', t: "I'd like your opinion on something. A door. You know the one. Or you know there's one." },
      { s: 'elizabeth', f: 'serious', t: "I've been practising. Every evening, on the small ones. Look both ways, let go, listen for the latch. I'm quite good now. I can do a cupboard in under a minute." },
      { s: 'elizabeth', f: 'sad', t: "But that one. Every time I go to it, I think, somebody might be just about to come through. A step behind. And if I let go now, they'll walk into the wood. And I don't know who it would be, and I don't know if they're coming, and I hold it." },
      { s: 'elizabeth', f: 'neutral', t: "So. Should I keep holding it? You're the person I'd ask, if I were the sort of person who asked. I'm trying it. Asking. Tell me." },
      { choose: [
        { t: "Keep holding it. As long as it takes. Somebody might need it.", notes: 3, tally: { cakes: 1, 'asks.elizabeth': 'yes' }, then: [
          { n: "Elizabeth let out a breath. She hadn't known she was holding it, Solar thought, and then thought, no, she always knows." },
          { s: 'elizabeth', f: 'happy', t: "Yes. Yes, that's what I said I'd do. Last year. *As long as it takes.* I said it to you in March and I meant it, and I'm glad to be told I was right to mean it." },
          { s: 'elizabeth', f: 'neutral', t: "It's heavy. It's terribly heavy. But it's mine to be heavy. Thank you." },
          { n: "She said it brightly, and squeezed Solar's arm, and they walked on, and Solar felt the mist settle on her face and her hair and her hands, cold, and somewhere very far off, down the river, past the bridge, so faint it might have been a boat, two knocks on wood, and then nothing." }
        ] },
        { t: "Close it. Like the café door. Look both ways and let go.", notes: 2, tally: { 'asks.elizabeth': 'no' }, then: [
          { n: "Elizabeth stopped walking. She stood on the river road in the mist with the book against her chest and looked at Solar, and for a second her face was the face from the café, woken suddenly, nothing on it at all." },
          { s: 'elizabeth', f: 'sad', t: "...I'm not sure I can. Not that one. You don't know who might be on the other side of it." },
          { s: 'elizabeth', f: 'neutral', t: "But I asked. And you answered. I'll think about it. I'll think about it very hard. I may not like you for a day or two." },
          { n: "She walked on. She didn't take Solar's arm again until the bridge, and then she did, very lightly, without looking." }
        ] },
        { t: "It's your door. You held it; you decide when it closes. I'll stand next to you whatever you do.", notes: 2, tally: { choose: 1, 'asks.elizabeth': 'choose' }, then: [
          { n: "Elizabeth was quiet for a long time. They walked a whole lamp to the next, and the next, through the halos, and the river went past, and she didn't say anything at all, and when she did her voice was smaller than Solar had ever heard it." },
          { s: 'elizabeth', f: 'sad', t: "...That isn't an answer. I wanted an answer. I've never wanted one before. It's very uncomfortable." },
          { s: 'elizabeth', f: 'neutral', t: "*Mine.* You're the second person tonight to hand me something and call it mine. She did it with a room. You did it with a door. I liked yours better, and I don't know why, and it made me want to cry." },
          { s: 'elizabeth', f: 'neutral', t: "Thank you. I think. I'll tell you which, later. It may take me some time. I don't usually have to decide things. I usually have to keep them." }
        ] }
      ] },
      { place: 'Iwatodai Dorm · Front', time: 'Night', bg: 'iwotodaidorm-outside', soft: true },
      { n: "At the dorm gate she stopped, and lifted her free hand in the small formal wave, and then didn't go. She stood looking up at the dorm door, three locks and the sign in three languages, as if she'd remembered something on the way and was deciding whether to say it." },
      { s: 'elizabeth', f: 'neutral', t: "She knocks twice. Before she goes into a room. Did you notice? Even her own kitchen, when there's someone in it. Twice, and waits." },
      { s: 'elizabeth', f: 'happy', t: "I knock once. Theodore knocks three times, because he's anxious. Everyone has a knock. It's how you can tell people apart in the dark." },
      { n: "She said it lightly, the way she'd say a fact about doors. Then she turned and went up the street in the mist, very straight, with the book against her chest and the rice cake pressed between its pages, and at the corner she was gone, and the street was empty all the way to the end, and Solar stood at the gate with her hand on the cold iron for a long time, counting, without meaning to, two." }
    ] }
  ]
});
