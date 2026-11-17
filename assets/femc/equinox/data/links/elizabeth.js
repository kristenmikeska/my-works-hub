/* Persona 3: Equinox · Elizabeth (Velvet Room). Link data for femc-equinox-game.html; replaces her stub in ../links.js (same id).
   Format: link fields in assets/femc/game/core.js ("Links" header), scene lines in assets/femc/game/scene.js.
   A hidden frame link, as in Solstice (assets/femc/game/links/elizabeth.js): never on the map, no phone (invite: null), no
   hangouts. Every rank is forced, so each plays as story on its `after` date through core.js dueEvent (hidden: true doesn't
   stop a forced rank; linkStatus is never asked); each rank's own `slot` picks the slot. Rank 1 plays on 4/13 in the late
   slot, in the Velvet Room. Rank 2 is her personal request (a door that closes properly), forced on 4/20 in the
   after-school slot, out in town; the same night's late slot is the eqx-records event, which rank 2 hands off to.
   Rank 3 is her supper at the boarding house, forced on Sunday 6/13 in the evening slot; it records her ask: tally
   asks.elizabeth (+ cakes / choose). Speaker mrsoka appears.
   Written: ranks 1–6. Ranks 7–10 to come; a later rank needs its own `after` date and slot (avoid 11/27 late, Act IV's
   confession, and 12/21; story-act3.js eqx-hanne-page holds 9/20 late).
   Rank 4: Sunday 7/4, `slot: 'after'` ('4: a line in the water'): the Port Island pier with the last fisherman (speaker
     fisherman, the same 'Old Fisherman' as akihiko.js: the one who said no; gone by 8/12, story-act3.js). She learns to
     cast and lets a small fish go; the new arrivals' threads are tied with a hook knot and taut (someone is winding:
     layer 2 of plan §4, a question only). Branches on eqx-piano (Mark's page), eqx-bridge-name (Solar names Hanne: no page
     for her in the book yet; it comes back 8/16, revealed 9/20), asks.elizabeth (ifChoice). She has been back to Mrs.
     Oka's twice "for the tea" [INVENTED]. Flag: eqx-eliz-sundays-warned (Solar told her not to go back).
   Rank 5: Sunday 8/1, `slot: 'late'` ('5: the page that stopped'): the Velvet Room the night after Nozomi's wake. His page
     stopped mid-word instead of closing; flour in the book's gutter since 7/27; she sets a cup for him and nearly turns it
     upside down (Mrs. Oka's place-setting, copied unknowingly); the June rice cake pressed in her book is unchanged after
     seven weeks (kept in the book, per plan); the gold line under her door is wider and her chair faces it; the fourth hand
     writes "contented"; Theodore knocks three times offstage. She asks Solar to send Nozomi a lantern at Obon (8/16's
     lanterns come back). Hata's and Tanabe's pages also stopped [INVENTED]. Flags: eqx-eliz-cup-up (Solar stopped the cup
     turning over), eqx-eliz-lantern (promised a lantern).
   Rank 6: Sunday 10/3, `slot: 'after'` ('6: where they stood'): Moonlight Bridge by day, after 9/23. She reads the three
     security men in the rail; where the mothers' shoes stood she reads nothing ("as if nobody had ever stood here at all",
     the words she used at the boarding-house door, rank 3; unmarked). She asks, "in general", whose fault it is when a held
     door lets something through (the 11/27 confession stays unspent: no door, no guilt named). Theodore is minding the
     Room and offered to stand at Solar's door (12/21 groundwork). Branches on eqx-pencil (Hanne plays steady, fewer
     fingers), asks.elizabeth. Flags: eqx-eliz-pages-open (the mothers' pages haven't closed; told to Solar),
     eqx-eliz-fault-thing / eqx-eliz-fault-holder / eqx-eliz-fault-next (Solar's answer).
   No ask floor flag: Elizabeth isn't a fighter, so plan §8's "clear it with that character in the party" can't apply.
   Flags this file sets: eqx-eliz-form (rank 1), eqx-eliz-door-shown (rank 2, reads eqx-aigis-log), and the rank 4–6 ones
   above. Nothing reads any of them yet. Speaker without a portrait: fisherman. */
(window.FEMC_GAME_LINKS ||= []).push({
  id: 'elizabeth', name: 'Elizabeth', short: 'Elizabeth', arcana: 'Velvet Room', numeral: '', from: 'Persona 3', kind: 'frame',
  romance: null, starts: '4/7', hidden: true,
  forced: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  home: { area: 'Iwatodai Dorm', spot: 'Front', slot: 'after', days: [0, 1, 2, 3, 4, 5, 6],
          hint: 'Some Sundays, a card of blue paper under the door, and a woman in blue waiting at the gate.' },
  approach: "A woman in a blue dress and a little blue cap is standing very straight outside the dorm gate with an enormous book held against her chest, regarding the street with polite, intense interest.",
  cast: { fisherman: 'Old Fisherman' },
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
    ] },
    { after: '7/4', slot: 'after', title: '4: a line in the water', place: 'Port Island · Pier', time: 'Daytime', music: 'velvet', scene: [
      { bg: 'iwotodaidorm-outside' },
      { n: "The rain had stopped for a day, the way it did sometimes in July, as if it had gone to see about something else and would be back. The street outside the dorm steamed. The card was under her door when she came down for breakfast, blue, folded once, the copperplate neat again, every stroke finished, the way handwriting goes when someone has had a great deal of time to practise being calm." },
      { n: "*I am told that there is a place at the very end of the land where people stand with a string and ask the sea for things, and the sea sometimes says yes. I should like to ask it something. The long one, on the island. After lunch. — E.*" },
      { n: "And under it, smaller: *I have been practising the doors. I did eleven cupboards on Thursday. Theodore thinks there is something wrong with the cupboards.*" },
      { place: 'Port Island · Pier', time: 'Daytime', bg: 'port-island-pier', soft: true },
      { n: "She was at the gate of the pier at one, standing very straight on the hot concrete with the book against her chest, regarding the sea with the polite, intense interest she gave to everything, and the sea, flat and green and glittering under a white sky, didn't seem to notice her back. Gulls stood on the bollards in a row. The air smelled of salt and diesel and something frying a long way off." },
      { s: 'elizabeth', f: 'happy', t: "There you are. It's enormous. Nobody told me it would be *enormous*. In the books it's always just *the sea*, as if that were a reasonable size for something to be." },
      { s: 'elizabeth', f: 'neutral', t: "...There's only one person asking it anything. I thought there would be a crowd. I read that there would be old men, in a row, with buckets." },
      { n: "There had been. Solar remembered them from last year, from walking the pier with Akihiko at dusk: six or seven of them along the far end, on folding stools, with rods and radios and buckets of bait and flasks of something, arguing about baseball. The pier ran three hundred meters out into the bay, all the way empty now, and at the very end of it, by the last bollard, one man sat on a stool with his back to the land and a line in the water, alone." },
      { choose: [
        { t: "(Hold out your arm. Walk her out to him.)", notes: 3, then: [
          { n: "She crooked her elbow. Elizabeth fitted her hand through it with a small satisfied sigh, the key into the lock, and they walked out along the pier in the heat, slowly, because Elizabeth stopped to look over the rail at every jellyfish, and there were a great many jellyfish." }
        ] },
        { t: "There used to be more of them.", notes: 2, then: [
          { s: 'elizabeth', f: 'neutral', t: "Did there? Where did they go?" },
          { n: "Solar didn't answer. She didn't know how to say *to supper*, out here, in the sun, without it sounding like the beginning of something she didn't want to hear the end of. Elizabeth looked at her not answering, and then down the long empty pier at the one man, and her head went a little on one side." }
        ] }
      ] },
      { n: "He was old, brown as a walnut, in a cap and a vest and rubber boots, with a radio at his feet turned down so low it was only a murmur of a game somewhere. He looked up at them coming, at the blue dress and the cap and the book, and didn't seem surprised, which Solar would think about later. He seemed like a man who'd stopped being surprised by what came down the pier some weeks ago." },
      { s: 'fisherman', t: "Afternoon. You're the boxer's girl. He runs this every morning like it owes him money." },
      { s: 'fisherman', t: "...And who's this. You look like you came off the front of a biscuit tin." },
      { s: 'elizabeth', f: 'happy', t: "Good afternoon. I've come to ask the sea for something. I've been told you know how." },
      { s: 'fisherman', t: "Ask it? Ha. You don't ask it anything, miss. That's the first thing. You put your line in and you shut up and you wait. Sea doesn't like being asked. Nobody does, much." },
      { n: "He had a second rod. He'd had it leaning against the rail beside him, already strung, as if he'd been expecting somebody to sit there, or had got into the habit of it. He held it out. Elizabeth took it in both hands, the way she'd taken the melon bread, and held it straight up in the air like a flag." },

      { n: "It took her a long time to learn to cast. The old man showed her, patiently, three times, the flick of the wrist and the letting go of the line at the top of the swing, and three times Elizabeth held on at the top of the swing, perfectly, beautifully, and the hook and the little lead weight swung round on the end of the line and came back and clacked against the rod." },
      { s: 'fisherman', t: "You've got to let go of it, miss. At the top. That's the whole of casting. You let go." },
      { s: 'elizabeth', f: 'sad', t: "...Yes. I'm aware. It's a difficulty I have." },
      { choose: [
        { t: "(Stand behind her and let go of the line with her.)", notes: 3, then: [
          { n: "She stood behind Elizabeth with her hand over Elizabeth's gloved hand on the rod, and her finger over Elizabeth's finger on the line, and swung with her, and at the top of the swing said *now*, and lifted her own finger, and felt Elizabeth's lift a half-second after, as if it had been waiting for permission." },
          { n: "The line went out over the water in a long bright curve and the weight went in with a small *plip* forty meters off. Elizabeth made a sound Solar had never heard her make, a little gasp, as if she'd been the one thrown." },
          { s: 'elizabeth', f: 'happy', t: "...It went. I let it go and it *went*. Look how far." }
        ] },
        { t: "Look both ways. Then let go.", notes: 3, then: [
          { n: "Elizabeth looked at her. Then she looked, very seriously, left along the pier, and right out to sea, and up at the gulls, and swung, and at the top of the swing her finger came off the line as if it had been told something by somebody it trusted, and the weight went out over the water and in." },
          { s: 'elizabeth', f: 'happy', t: "...Oh. It's a door. It's only a door lying down." },
          { s: 'fisherman', t: "It's a what?" },
          { s: 'elizabeth', f: 'happy', t: "Never mind. You've been very helpful." }
        ] }
      ] },
      { n: "They sat. The old man on his stool, Elizabeth on an upturned bucket he'd given her with great ceremony, and Solar on the bollard at the end with her knees up, in the heat, with the sea slapping the pilings under them and the radio murmuring. Nobody said anything for a long while. It was the most restful thing Solar had done since April." },
      { s: 'fisherman', t: "...Used to be seven of us. You'll have seen. Thirty years, some of them. Hayashi. Kondo. The two Mori brothers that never spoke to each other." },
      { s: 'fisherman', t: "There's a widow on the river side does supper now. Old house, big persimmon. They go round at four. Every day. Eat like boys. Hayashi's put on four kilos. I saw him on the strip last week, and he looked straight at me, and I don't think he knew my face." },
      { s: 'fisherman', t: "She comes down here. Sundays. With a tin under her arm. Stands right there where you're sitting, miss, and asks me nice as you please if I wouldn't rather be somewhere warm. Every Sunday. I say no. Every Sunday. She says it's a shame and she'll keep asking." },
      { n: "Elizabeth had gone very still on her bucket. She turned her head and looked at him, properly, for the first time, the way she'd looked at the dorm door and the green door at the bottom of the street, top to bottom." },
      { s: 'elizabeth', f: 'neutral', t: "...She asked me, too. To stay. I said I wasn't allowed." },
      { s: 'fisherman', t: "Did you. Good for you." },
      { s: 'elizabeth', f: 'neutral', t: "She keeps my place anyway. I've been back. Twice. For the tea. She knows how I take my tea." },
      { s: 'fisherman', t: "...Aye. She knows how everybody takes everything. That's the trouble with her." },
      { choose: [
        { t: "Elizabeth. Don't go back there.", notes: 2, flag: 'eqx-eliz-sundays-warned', then: [
          { n: "Elizabeth looked at her. Not hurt. Interested, the way she was interested in a door that did something she hadn't expected." },
          { s: 'elizabeth', f: 'neutral', t: "That's the first time you've told me not to do something. You usually show me how to do it instead." },
          { s: 'elizabeth', f: 'serious', t: "...I'll think about it. I'm thinking about a great many things this summer. My head's become very crowded. I don't know where people keep it all." }
        ] },
        { t: "What does the tea taste like?", notes: 3, then: [
          { s: 'elizabeth', f: 'neutral', t: "Like being expected." },
          { n: "She said it at once, without thinking, and then heard it, and looked down at the line going into the water for a while." },
          { s: 'elizabeth', f: 'sad', t: "...I've never been expected anywhere. People come to me. That's how it's always been. I'm the one at the door when they arrive. And then I go to her house and she's at the door when *I* arrive, with the cup already poured." },
          { s: 'elizabeth', f: 'neutral', t: "It's very nice. I can't tell you how nice it is. And on the way home I always feel as though I've left something behind in the hall, and I check, and I haven't." }
        ] },
        { t: "(Say nothing. Watch the line.)", notes: 2, then: [
          { n: "She said nothing. She watched Elizabeth's line where it went into the water, a little bright thread, taut, and the old man watched his, and after a while Elizabeth looked from one to the other of them and seemed to understand that she'd been told something by two people at once and that neither of them was going to say what." }
        ] }
      ] },
      { s: 'fisherman', t: "...Then we're the stubborn ones, you and me, miss. Two of us said no. That's a club." },
      { s: 'elizabeth', f: 'happy', t: "A club. I've never been in a club. Do we have a knock?" },
      { s: 'fisherman', t: "We've got this pier. That'll do." },

      { n: "Her line went." },
      { n: "It went all at once, the rod bending down toward the water in a long curve, and Elizabeth stood up off her bucket so fast she knocked it over, and held on, both hands, the book dropped at her feet for the first time Solar had ever seen it out of her arms, and her face was pure astonishment." },
      { s: 'elizabeth', f: 'surprised', t: "It's *pulling*. Something's pulling. It's asked me something back!" },
      { s: 'fisherman', t: "Reel, miss. Reel. Little handle. Wind it in. Steady. Don't yank it." },
      { n: "She reeled. Badly, then well, very quickly well, the way she learned everything, and up out of the green water on the end of the line came a fish no longer than her hand, silver, flapping, the light coming off it in flashes. She swung it in over the rail. It hung there in the air in front of her face, turning, gasping, its mouth opening and closing on the hook." },
      { n: "Elizabeth looked at it. All the delight went out of her face, not suddenly, slowly, the way the light goes out of the sky." },
      { s: 'fisherman', t: "Little one. Too little. That one goes back. Take it off the hook and drop it in. Gentle. It'll be fine." },
      { n: "Elizabeth took the fish in her gloved hand. It thrashed. She held it. She worked the hook out of its lip, very carefully, with enormous attention, and then she stood at the rail with it in her hand, cupped, wet, gasping, and held it out over the water, and didn't open her hand." },
      { s: 'elizabeth', f: 'sad', t: "...It might not want to go. It might have wanted to come up. It might have been trying to come up for a very long time." },
      { s: 'fisherman', t: "It's a fish, miss." },
      { s: 'elizabeth', f: 'sad', t: "I know. I know it is. I just. I've got hold of it now." },
      // CG: eqx-small-fish — the end of a long concrete pier on a bright hazy summer afternoon, a woman in a blue dress and little blue cap holding a tiny silver fish cupped in her gloved hands over the rail above green water, an open book lying at her feet, an old fisherman on a stool looking up at her.
      { choose: [
        { t: "(Put your hands under hers. Open them together.)", notes: 3, then: [
          { n: "She put her own hands under Elizabeth's cupped ones, over the rail, so the fish was held in four hands now, and Elizabeth's were shaking very slightly, and then Solar opened hers, and Elizabeth's opened with them, the way they had on the café door, a half-second after, and the fish fell a meter through the bright air and went into the green with a small sound and was gone." },
          { n: "Elizabeth stood with her hands open over the water for a long moment, wet, empty." },
          { s: 'elizabeth', f: 'neutral', t: "...It went home. Didn't it. It just went home." }
        ] },
        { t: "It's not forever. It's just back where it was.", notes: 3, then: [
          { n: "Elizabeth looked at her. Then at the fish. Then she opened her hand, all at once, without looking both ways, as if she had to do it before she could think, and the fish dropped and went into the water and was gone, a flash of silver going down into the green." },
          { s: 'elizabeth', f: 'neutral', t: "...Just back where it was. Yes. Not forever. I keep forgetting that part. It's the part I most need." }
        ] },
        { t: "(Let her decide. Step back from the rail.)", notes: 2, then: [
          { n: "She stepped back. Elizabeth stood at the rail alone with the fish in her hands for a long time, longer than a fish could be out of the water, Solar thought, and the old man opened his mouth and shut it again, and then Elizabeth bent, all the way down, over the rail, as far as she could reach, until her hands were nearly at the surface, and opened them there, so it would hardly fall at all." },
          { n: "She straightened up with the cuffs of her gloves soaked to the wrist." },
          { s: 'elizabeth', f: 'neutral', t: "...I made it a shorter way down. That was the best I could do." }
        ] }
      ] },

      { n: "She sat back down on her bucket, slowly, and picked her book up off the concrete, and held it on her knees, and didn't open it for a while. When she did, she turned the pages without looking, the shuffle of cards, and stopped near the back, and held it so Solar could see." },
      { n: "New pages. She knew the faces before she could read the names. Four girls she'd seen last week in the boarding house's big tatami room, dancing to a song with no music, and Yunjin in the doorway watching them as if she'd been punched." },
      { ifEvent: 'eqx-piano', then: [
        { n: "And after them, Mark. His page with the edges a little crumpled, as if somebody had folded it once to carry it in a pocket." }
      ] },
      { n: "They had threads, the way the first ones had. Gold, fine as hair, running off the bottom edge of the page and away toward Solar's chest. But they weren't sewn. The first ones had been stitched through the paper like a hem, small, even, patient. These were tied. A single hole punched through each page near the bottom, and the gold thread through it, and a knot, a small tight complicated knot Solar didn't know, pulled so hard the paper had puckered round it." },
      { n: "And they were taut. The first threads had lain slack across the Room, the way a rope lies between two people who are both holding it. These were tight as a fishing line with something on it. She could see one of them tremble." },
      { s: 'fisherman', t: "...That's a hook knot. On your thread there. Where'd you learn that?" },
      { s: 'elizabeth', f: 'serious', t: "I didn't. I didn't tie it." },
      { s: 'fisherman', t: "Huh. Well. Somebody knows what they're doing. That's how you tie on when you mean to bring something in. Not when you're letting it out. When you're bringing it in." },
      { n: "He went back to his line. Elizabeth closed the book, gently, so the threads lay along the edge and didn't catch, and held it shut on her knees with both hands flat on the cover." },
      { s: 'elizabeth', f: 'serious', t: "...The first ones came by their own hands. I told you that. I was so pleased to tell you that." },
      { s: 'elizabeth', f: 'serious', t: "These didn't. Somebody's at the other end of these. Winding." },
      { choose: [
        { t: "Who?", notes: 2, then: [
          { s: 'elizabeth', f: 'sad', t: "I don't know. I can see almost everyone. I keep saying that. I'm beginning to be embarrassed by how often I say it." }
        ] },
        { t: "Can you cut them?", notes: 2, then: [
          { s: 'elizabeth', f: 'serious', t: "Not without cutting what's on the end of them." },
          { s: 'elizabeth', f: 'neutral', t: "...And they're on the end of them. Those four girls. That boy. They're here now. Whoever pulled them, they're here, and they're people, and you don't cut people loose over the sea." }
        ] },
        { t: "(Put your hand flat on the book, over hers.)", notes: 3, then: [
          { n: "She put her hand flat on the cover over Elizabeth's two. Through the cloth and the board she could feel it, very faint, a trembling, like a line with something on it, coming up through the book into both their hands." },
          { s: 'elizabeth', f: 'neutral', t: "...You feel it. Good. I didn't want to be the only one." }
        ] }
      ] },
      { ifFlag: 'eqx-bridge-name', then: [
        { n: "She didn't decide to say it. It came out of her the way things came out of her on the pier, in the heat, with the sea slapping underneath." },
        { s: 'solar', f: 'serious', t: "There's a woman on Moonlight Bridge. At midnight. In a blue coat. She plays a viola. I said her name, and she stopped." },
        { s: 'solar', f: 'serious', t: "I said *Hanne*." },
        { n: "Elizabeth didn't move. Not a finger. Her whole body went still the way Mrs. Oka's hands had gone still round hers at the door, the way a cat goes still, except that on Elizabeth it looked like somebody holding their breath under water." },
        { s: 'elizabeth', f: 'serious', t: "...I put her through a door myself. In March. I held it for her. I watched her go. Her page went with her. That's how it's done. A page goes home with its person." },
        { n: "She opened the book. She went through it fast, faster than Solar had ever seen her go, to a place near the front, and stopped, and looked, and there was nothing there, only the next page, a stranger's, and the gutter of the book between them, clean." },
        { s: 'elizabeth', f: 'neutral', t: "...Nothing. There's nothing. Good. There should be nothing." },
        { s: 'elizabeth', f: 'neutral', t: "Good." },
        { n: "She said it twice. She didn't close the book for a long time. She sat with it open on her knees at that clean place in the gutter, looking at it, with her gloved thumb pressed flat on the spine as if feeling for something on the other side of the binding." }
      ] },
      { ifChoice: { 'asks.elizabeth': 'yes' }, then: [
        { n: "In the heat, on her bucket, Elizabeth yawned. A real one, enormous, behind her glove, and then looked at the glove afterwards in astonishment." },
        { s: 'elizabeth', f: 'surprised', t: "...What was that? I've never done that. Is it catching?" },
        { s: 'elizabeth', f: 'neutral', t: "I've been standing at it every night. The door. Holding. You told me to, and I'd said I would, and it's mine to be heavy. I simply hadn't known heavy came with *that*." }
      ] },
      { ifChoice: { 'asks.elizabeth': 'no' }, then: [
        { s: 'elizabeth', f: 'sad', t: "I tried, you know. To close it. Like the café. I went to it on the Tuesday after, and put my hand on it, and looked both ways." },
        { s: 'elizabeth', f: 'sad', t: "And there was always someone coming. Every time I looked. Not anyone I could see. Just the sense of a step, behind it. And I couldn't. I'm sorry. I'll try again. I'm still a little cross with you, if that helps." }
      ] },
      { ifChoice: { 'asks.elizabeth': 'choose' }, then: [
        { s: 'elizabeth', f: 'neutral', t: "I'm still deciding. About the door. You said it was mine to decide, and it turns out deciding is a thing one has to keep doing, every night, again. Nobody warned me. I've made a list of reasons." },
        { s: 'elizabeth', f: 'neutral', t: "...It's very long on one side. I'm not going to tell you which side." }
      ] },

      { n: "The light went long and yellow. The old man reeled in, and packed his rods with the slowness of thirty years, and folded his stool, and picked up his bucket and his radio, and stood looking at the two of them in the low sun." },
      { s: 'fisherman', t: "You'll come back, miss? Next Sunday. I'll be here. Somebody's got to keep the pier." },
      { s: 'elizabeth', f: 'neutral', t: "Will you? Be here?" },
      { s: 'fisherman', t: "Thirty years. The fish know my face. Where else would I be?" },
      { n: "He went off up the pier toward the land, slowly, his boots loud on the concrete, the radio murmuring in his hand, a small brown man getting smaller. Elizabeth watched him the whole way, three hundred meters, until he went through the gate and turned toward the bus stop and was gone." },
      { s: 'elizabeth', f: 'sad', t: "...He's the only one left out here. Isn't he." },
      { s: 'elizabeth', f: 'neutral', t: "I'd like to come back next Sunday. I'd like that very much. I'm going to write it down so I can't pretend I forgot." },
      { n: "She wrote it on the inside of her wrist, under *not forever* and the name of a soup, in pencil, very small: *the pier. Sunday. He'll be here.* And then, after a moment, she went back and put a little question mark at the end of it, and looked at the question mark, and rubbed it out with her thumb." },
      { place: 'Port Island · Pier Gate', time: 'Evening', bg: 'port-island-seaside-park-sunset', soft: true },
      { n: "At the gate she lifted one gloved hand in her small formal wave, the girl at the station, and turned toward the monorail, and then turned back." },
      { s: 'elizabeth', f: 'neutral', t: "Thank you for the sea. It's much too big. I liked it enormously." },
      { s: 'elizabeth', f: 'serious', t: "...Somebody is winding. Don't forget. I'm going to watch the knots. If one of them goes slack, I'll know somebody's been brought all the way in." },
      { n: "She went. At the top of the monorail stairs she stopped to let a woman with a pushchair go past, and held the barrier for her, and let go of it, at once, cleanly, without looking back to see whether it shut, and Solar stood at the pier gate and watched the gulls go down one by one onto the empty bollards in the evening light, in a row, where the old men used to sit." }
    ] },
    { after: '8/1', slot: 'late', title: '5: the page that stopped', place: 'The Velvet Room', time: 'Late Night', music: 'velvet', scene: [
      { bg: 'solar-dormroom-night' },
      { n: "The night after the wake was the hottest of the year. The dorm lay open to it, every window up, every door propped, Fuuka's little electric fan going round and round in the hall on the floor where she'd left it, pointed at nobody. Solar lay on top of her covers in her black funeral blouse because she hadn't had the energy to take it off, and listened to the building not sleep." },
      { n: "Junpei's too-small suit was on a hanger on the back of his door, she knew, because she'd heard him hang it, very carefully, at eleven, and then sit down on his bed and not get into it. Ken's light had gone off at ten and come back on at ten past. Down in the kitchen someone was running the tap for a long time, not filling anything." },
      { n: "She didn't remember closing her eyes. She remembered the heat, and then the cold." },
      { place: 'The Velvet Room', time: 'Late Night', bg: 'velvetroom-1', soft: true },
      { n: "Blue velvet. Brass. The clean cold of the Room, like the inside of a library at closing. And no singing, which was wrong; there had always been a voice somewhere singing without words, and tonight there wasn't, and the silence where it should have been was like a chair pushed in at a table." },
      { n: "Elizabeth wasn't standing. That was wrong too. She was sitting at the small table at the side of the Room, the one Solar had never seen anybody sit at, with the book open in front of her and a cup of tea beside it that had gone cold with a skin on it, and she didn't look up when Solar came in, and didn't pretend to have been reading." },
      { s: 'elizabeth', f: 'sad', t: "...He gave me his last piece of fish." },
      { s: 'elizabeth', f: 'sad', t: "At her table. In June. Nobody at that table had ever seen him do it. You were there. He went pink to his ears." },
      { choose: [
        { t: "Nozomi.", notes: 3, then: [
          { s: 'elizabeth', f: 'sad', t: "Nozomi. Yes. Suemitsu Nozomi. I have his page. I've had his page for a long time. Longer than I've had yours." }
        ] },
        { t: "(Sit down across from her.)", notes: 3, then: [
          { n: "She pulled out the other chair and sat. The velvet seat was cold through her blouse. Elizabeth looked at her across the little table for the first time, and her face was the face from the café door, woken suddenly, nothing on it at all, and then, very slowly, it found something to be, and it was grief, and she didn't seem to know what to do with it." }
        ] },
        { t: "You heard.", notes: 2, then: [
          { s: 'elizabeth', f: 'sad', t: "I didn't hear. I read. In here, we read. It's worse." }
        ] }
      ] },
      { n: "She turned the book round on the table so Solar could see. A page near the back, a boy's page, written in the careful hand the Room used for the people of this town. A small photograph pasted in at the corner, a round face with full cheeks. A long paragraph, line after line, the ordinary small history of a boy who'd sold water at school and loved food more than anybody." },
      { n: "And then it stopped. Not at the end of the page. Not at the end of a paragraph. Halfway along a line, in the middle of a word. The ink just stopped, a short stroke and then nothing, white paper all the way to the bottom." },
      { s: 'elizabeth', f: 'serious', t: "Pages close. When someone's story is over, the page closes, the way a door closes, all the way, and the next page begins. I've seen it a great many times. It's sad, and it's proper, and it's how it's done." },
      { s: 'elizabeth', f: 'serious', t: "His didn't close. It stopped. Like someone took the pen out of the hand halfway through a word." },
      { s: 'elizabeth', f: 'sad', t: "...I've never seen that before. I don't know what it means. I don't like not knowing what something means in my own book." },
      { n: "Solar looked down at the gutter of the book, where the pages met the spine. There was something in it. A fine pale dust, very fine, gathered in the fold all the way along, the way sand gathers in the fold of a beach towel. She put out a finger before she'd thought, and touched it, and it was soft, and clung, and she knew the smell before she'd lifted her hand." },
      { n: "Flour." },
      { s: 'elizabeth', f: 'neutral', t: "It was there in the morning. On the twenty-seventh. I don't know where it came from. I've tried to brush it out. It won't brush out. It comes back into the fold." },
      // CG: eqx-page-stopped — an old blue-bound book lying open on a small velvet-covered table in a blue room, one page of careful handwriting that stops halfway across a line, a fine pale dust of flour gathered in the fold of the spine, a gloved hand resting beside it and a cold cup of tea.
      { choose: [
        { t: "It's flour.", notes: 2, then: [
          { s: 'elizabeth', f: 'neutral', t: "Flour. From baking." },
          { s: 'elizabeth', f: 'serious', t: "...Nobody bakes in here. Theodore once made a cake and it came out as a sort of opinion. We don't bake." },
          { n: "She looked at the fine white line in the gutter of her book, and then at Solar's finger, white at the tip, and then, slowly, at her own gloved hands folded on the table, and Solar saw her think of something, and saw her not say it, and saw her decide to have not thought it." }
        ] },
        { t: "(Wipe your finger on your skirt. Say nothing.)", notes: 2, then: [
          { n: "She wiped it on her black skirt and it left a pale smear that wouldn't come off when she rubbed it, and Elizabeth watched her rub at it, and didn't ask, and Solar didn't say, and the smear stayed there on the black like a fingerprint on glass." }
        ] }
      ] },

      { s: 'elizabeth', f: 'neutral', t: "I'd like to do the thing. The thing people do. When somebody's page stops. You had one yesterday. A wake." },
      { s: 'elizabeth', f: 'sad', t: "I wasn't asked. I wouldn't have known what to wear. I'd like to do one here, a small one, if you'll show me how it goes. I've read about it, but I've read about everything, and it's never the same as being shown." },
      { choose: [
        { t: "You light incense and say something about him.", notes: 3, then: [
          { s: 'elizabeth', f: 'neutral', t: "Something about him. Yes. I can do that. I know a great deal about him. More than he'd have liked, probably." },
          { n: "There was no incense in the Room. She lit one of the matches instead, from the box she'd bought at the konbini in April, which she kept in the front of the book; and they watched it burn down in her gloved fingers, and she said, to the match, very formally, *He sold water at school. He loved food more than anybody. He gave me his last piece of fish*, and blew it out before it reached her glove." }
        ] },
        { t: "You sit up with him. All night. So he isn't alone.", notes: 3, then: [
          { s: 'elizabeth', f: 'neutral', t: "So he isn't alone. Oh. That I understand. That I'm very good at. I sit up with everyone. I've sat up with this whole book for longer than you'd believe." },
          { s: 'elizabeth', f: 'sad', t: "...I didn't sit up with him. I didn't know to. His page stopped while I was looking at another one." }
        ] },
        { t: "You set a place for him. One more time.", notes: 2, then: [
          { s: 'elizabeth', f: 'neutral', t: "A place. Yes. At a table. I know how to do that. I was shown." }
        ] }
      ] },
      { n: "She got up and went to the cabinet at the side of the Room and came back with a second cup, one of the Room's thin blue ones, and a saucer, and set them at the empty side of the little table, where nobody was, very precisely, the handle turned the way you'd turn it for someone right-handed." },
      { n: "And then her hand stayed on the cup. It stayed there a moment too long. Her fingers shifted on the rim, the way your fingers shift on a thing before you pick it up to turn it over; and Solar watched her hand begin, very slightly, to tip the cup toward its side, upside down, onto the saucer, the way you'd leave a cup by a plate for a guest you were sure was coming, so the dust wouldn't get in." },
      { choose: [
        { t: "Elizabeth. Leave it the right way up.", notes: 3, flag: 'eqx-eliz-cup-up', then: [
          { n: "Elizabeth's hand stopped. She looked down at it, on the cup, tipped halfway, as if it belonged to someone else and had been caught going through a drawer." },
          { s: 'elizabeth', f: 'serious', t: "...Why was I— I wasn't going to—" },
          { n: "She set it upright. Carefully. She took her hand away and held it against her chest, in her other hand, the way Shinjiro held his bad wrist on the edge of the bed." },
          { s: 'elizabeth', f: 'sad', t: "I've seen it done. That's all. That's how she sets a place, at the boarding house, for the ones who haven't come yet. Upside down by the plate. I thought it was how it was done. I've only ever been shown the one way." }
        ] },
        { t: "(Put your hand over hers on the cup.)", notes: 3, flag: 'eqx-eliz-cup-up', then: [
          { n: "She put her hand over Elizabeth's on the rim and held it there, still, the cup upright between them, and Elizabeth looked at their two hands for a long time, and then at Solar, and Solar watched her understand what her hand had been about to do, and where she'd learned it." },
          { s: 'elizabeth', f: 'sad', t: "...She does that. At her house. For the ones who haven't come. I was copying her. I didn't know I was. I've only ever been shown the one way." }
        ] },
        { t: "(Say nothing. Watch.)", notes: 1, then: [
          { n: "She said nothing. Elizabeth's hand finished what it had started. The cup went over onto the saucer with a small clean click, upside down, and Elizabeth took her hand away and looked at it, the cup, turned down in front of the empty chair, and her face did something Solar had never seen it do, and didn't have a name for, and Elizabeth didn't either." },
          { s: 'elizabeth', f: 'serious', t: "...That's how she does it. For the ones who haven't come. I didn't mean to. I've only ever been shown the one way." },
          { n: "She didn't turn it back over. She left it there, turned down, and looked at it as if she weren't sure, now, who it was for." }
        ] }
      ] },

      { n: "She sat down again. She didn't pick up her own cold tea. She opened the book instead, at a place she didn't need to look for, near the middle, and took out of it a small square of folded paper napkin, gone soft at the corners, and unfolded it on the table between them." },
      { n: "The rice cake. From the boarding house, from June, from the tin with the cranes. Half of it, with the clean crescent of Elizabeth's one bite. It had been pressed in her book for seven weeks, between two pages, beside the melon-bread wrapper." },
      { n: "It was exactly as it had been. White. Round. Soft. The bite mark sharp, the edges still moist. Not dry, not cracked, not gone hard or gone green or gone anything. Seven weeks in a book in a room where nothing ever went off but people, and it looked as if it had come out of the tin that evening." },
      { s: 'elizabeth', f: 'serious', t: "Everything changes in here. Slowly. Except the Room. The melon-bread wrapper's gone soft. The ink's faded on my wrist. This hasn't changed at all." },
      { s: 'elizabeth', f: 'serious', t: "...As though it's waiting. To be finished." },
      { choose: [
        { t: "Throw it away.", notes: 2, then: [
          { n: "Elizabeth picked it up, in the napkin, and stood, and went to the little brass bin at the foot of the elevator doors, and held it over the bin. And didn't let go. Solar watched her arm stiffen, all the way up, the way it had on the café door." },
          { s: 'elizabeth', f: 'sad', t: "...I can't. It feels rude. Isn't that ridiculous? It feels as though someone is about to come and ask what I've done with it." },
          { n: "She came back and folded it into the napkin again and put it back in the book, between the same two pages, and closed the book on it, firmly, with both hands." },
          { s: 'elizabeth', f: 'neutral', t: "Another time. When I'm better at letting go of things. I'll keep it where I can see it. That's almost the same." }
        ] },
        { t: "Keep it where you can see it. Don't eat it.", notes: 3, then: [
          { s: 'elizabeth', f: 'neutral', t: "Eat it? Oh, no. No, I wouldn't. It tastes sad, I told you. Like a coat that's been in a cupboard all winter." },
          { s: 'elizabeth', f: 'serious', t: "...But I'll keep it where I can see it. You're quite right. Things one can see don't get up to as much." },
          { n: "She folded it back into the napkin and put it back in the book, and Solar noticed she put it in a different place this time, at the very front, inside the cover, where it would be the first thing she saw every time she opened it." }
        ] },
        { t: "(Lean over and smell it.)", notes: 2, then: [
          { n: "She leaned over the table and smelled it. Rice and sugar. And under it, at the back, sweet in the wrong place, the smell of the river at night, and of a cupboard nobody had opened in years, and of something else, warm, that she couldn't name and didn't want to, the way you don't want to name a smell in a house you're visiting." },
          { n: "She sat back. Elizabeth was watching her face." },
          { s: 'elizabeth', f: 'neutral', t: "...Yes. That. You smell it too. Good. I'd started to think it was only me." },
          { n: "She folded it back into the napkin and put it back in the book, between the same two pages, and closed the book on it." }
        ] }
      ] },

      { n: "There were three knocks on the far door of the Room. The archive door, at the back, the one Solar had never been through. Three small quick knocks, close together, and then a pause, and then, more quietly, three again." },
      { s: 'elizabeth', f: 'neutral', t: "...Theodore. He's anxious. He's been anxious since the twenty-seventh. He keeps coming to ask whether I'd like a cake." },
      { s: 'elizabeth', f: 'neutral', t: "Not now, Theo." },
      { n: "The knocking stopped. After a moment they heard footsteps going away behind the door, slow, a little reluctant, the way somebody walks away from a door they'd rather stand outside." },
      { n: "The line of gold light under the other door, the one with the light under it, was wider. Solar could see it from the table. Not by much. A hair. The width of a thread. But it had been a line in April, sharp as a pencil stroke, and now it was a band, and it lay across the carpet and up over the toe of Elizabeth's shoe, where she'd put her chair. She'd put her chair in front of it. She'd been sitting at this table, Solar understood, with her back to that door, all night, every night, so that the light came up over her foot." },
      { s: 'elizabeth', f: 'serious', t: "The fourth hand's changed. Since the twenty-sixth. Since the night before his page stopped. It writes more slowly now. Rounder. The pressure's gone soft." },
      { s: 'elizabeth', f: 'serious', t: "...Contented. Like someone after a meal." },
      { n: "She said it and heard it and closed the book on the table with both hands, flat, and held it shut." },

      { s: 'elizabeth', f: 'neutral', t: "I have a request. Not business. The business ones are where they always are, and they're dreadful, and you'll do them anyway." },
      { s: 'elizabeth', f: 'neutral', t: "I've been reading about your summer. There's a night in the middle of August when people put lights on the river, little boats with names on them, and the river takes them down to the sea, and the dead go home on them. So they don't get lost. So they don't stay." },
      { s: 'elizabeth', f: 'sad', t: "...Would you send him one? With his name. Properly. So that someone does it properly. I can't. I don't go near rivers at night. I'm told things aren't allowed to come into the Room through water, and I'd rather not test it." },
      { choose: [
        { t: "I'll send him one. I promise.", notes: 3, flag: 'eqx-eliz-lantern', then: [
          { s: 'elizabeth', f: 'happy', t: "Thank you. Oh, thank you. Write it clearly. Write it so the river can read it." },
          { s: 'elizabeth', f: 'neutral', t: "...And watch it all the way down to the sea. Will you. Until you can't see it anymore. I'd like to know it got there." }
        ] },
        { t: "I'll send him one. And Mr. Hata. And Mr. Tanabe.", notes: 3, flag: 'eqx-eliz-lantern', then: [
          { s: 'elizabeth', f: 'neutral', t: "All three. Yes. You would." },
          { s: 'elizabeth', f: 'sad', t: "...Their pages stopped too. Hata's in April. Tanabe's on the twenty-eighth. I didn't tell you. I didn't know it meant anything, then. I thought it was a fault in the binding." },
          { s: 'elizabeth', f: 'neutral', t: "Watch them go. All the way. I'd like to know they got there." }
        ] }
      ] },
      { n: "The hum changed under the floor. The numbers over the doors began to count back down. Elizabeth stood, with the book against her chest, and lifted one gloved hand in the small formal wave, and then, before the white came in, turned her chair back round to face the door with the light under it, and sat down in it again, very straight, with her back to Solar, the band of gold lying across her shoes." },
      { n: "The last thing Solar saw was the second cup on the little table, at the empty place, in front of nobody." },
      { place: 'Iwatodai Dorm', time: 'Late Night', bg: 'solar-dormroom-night', soft: true },
      { n: "She woke at four in the heat with her black blouse stuck to her back. Her right hand was lying on the pillow by her face, and the tip of her first finger was white, and when she brought it to her nose it smelled of rice and sugar and, at the back, of something else, and she got up and washed it at the sink in the hall for a long time in the dark, and it was still there when she lay down again, faint, under the soap, like a fingerprint on the inside of glass." }
    ] },
    { after: '10/3', slot: 'after', title: '6: where they stood', place: 'Moonlight Bridge', time: 'Daytime', music: 'mystery', scene: [
      { bg: 'iwotodaidorm-outside' },
      { n: "The card under her door on Sunday morning had nothing extra on it. No flourishes, no postscript, no cupboards or melon bread or men with ladders. The copperplate was plain, every stroke the same weight, the way handwriting goes when someone's trying very hard to hold it still." },
      { n: "*Moonlight Bridge. The middle. I should like to read it, and I would rather not do it alone. Two o'clock. — E.*" },
      { n: "The dorm was quiet that morning the way it had been quiet all week. Nobody had decided to be quiet. It had just happened, the way it happens in a house after something, the voices dropping by themselves on the stairs. Ken had gone out early with Koromaru and come back after ten minutes. Junpei was in the lounge with his book open and his pen in his hand, not writing in it. And down by the river, at the boarding house, three men she'd known all her lives were sitting at Mrs. Oka's long table, not eating, waiting for their wives to come back up the road." },
      { place: 'Moonlight Bridge · Walkway', time: 'Daytime', bg: 'moonlightbridge', soft: true },
      { n: "It was a bright cold day, the first of the autumn, the sky scrubbed blue and the bay below it hard and glittering, and the wind came across the bridge from the sea and pulled at everything, flags, hair, the edges of coats. The traffic went past in two bright lines, ordinary, a bus, a delivery van, a man on a scooter with a dog in the basket. Nobody looked at the walkway. Nobody looked at the middle." },
      { n: "Elizabeth was standing at the rail. The cap was a little crooked. She'd never once seen it crooked. She had the book against her chest in both arms, and she was holding it, Solar saw as she came closer, the way you'd hold a hot-water bottle, for warmth, pressed in, and her face in the wind was paler than the Room's light had ever made it look." },
      { s: 'elizabeth', f: 'neutral', t: "There you are. Thank you. I know it's a Sunday. I know it's a bad week. I'm told one doesn't ask people things in a bad week, and I've asked anyway, and I'm sorry." },
      { s: 'elizabeth', f: 'sad', t: "...I haven't slept. I've learned how to be tired, this summer. I don't recommend it. I'd unlearn it if I knew where the door was." },
      { choose: [
        { t: "(Hold out your arm. Like always.)", notes: 3, then: [
          { n: "She crooked her elbow. Elizabeth looked at it for a moment as if she'd forgotten what it was for, and then put her hand through it, gloveless, and it was cold, and she didn't do the little satisfied sigh, the key in the lock. She just held on. Harder than she ever had." }
        ] },
        { t: "You look terrible.", notes: 2, then: [
          { s: 'elizabeth', f: 'neutral', t: "Thank you. I've been trying for *dreadful*, and I'm glad it reads from a distance." },
          { n: "It was nearly one of her jokes. It came out the right shape and the wrong weight, and they both heard it, and neither of them said so." }
        ] },
        { t: "(Fix her cap.)", notes: 3, then: [
          { n: "She reached up and straightened the little blue cap, gently, with two fingers, and Elizabeth stood very still and let her, and closed her eyes while it was done, as if it were a much bigger thing than a cap." },
          { s: 'elizabeth', f: 'sad', t: "...Was it crooked? I didn't know. There's nobody to tell me, in there. Theodore would sooner die than mention a lady's hat." }
        ] }
      ] },

      { n: "They walked to the middle. Elizabeth knew where it was without counting the lamps. She stopped by the seventh lamp from the island end and put her bare hand flat on the rail, on the cold painted iron, the way she'd put it on the dorm door and the café door and the green door at the bottom of the street, and stood with her eyes half shut and her head on one side, reading." },
      { n: "She stood like that for a long time. The wind went past. A truck went past and the whole bridge hummed under their feet." },
      { s: 'elizabeth', f: 'serious', t: "...Three men. Here. And here. And there, by the lamp." },
      { s: 'elizabeth', f: 'serious', t: "They were walking somebody home. They were very good at it. They'd done it a hundred times. They had their hands ready and their eyes on the dark, and they were thinking about their suppers, and their children's school, and whether the one on the left had locked his car." },
      { n: "Her hand closed on the rail. Not reading now. Holding." },
      { s: 'elizabeth', f: 'sad', t: "I won't tell you the rest. It's in the iron. It'll be in the iron a long time. I'm sorry you were here for it. I'm sorry anyone was." },
      { s: 'elizabeth', f: 'serious', t: "...Nobody asked them for anything. That's what I can't— Everyone else, it asked first. It always asks. It didn't ask them. They weren't anything to it. They were just in the way of the door." },
      { choose: [
        { t: "Their names were on Mitsuru's board. She wrote them herself.", notes: 3, then: [
          { s: 'elizabeth', f: 'neutral', t: "Good. Someone should. I'll write them too. In the book. Properly. Pages that stop should still have names on them." }
        ] },
        { t: "(Put your hand on the rail next to hers.)", notes: 3, then: [
          { n: "She put her hand on the rail beside Elizabeth's. It was only iron to her, cold and painted, gritty with salt. She couldn't read anything in it. She kept her hand there anyway, the sides of their little fingers touching, so that whatever Elizabeth was holding in it, she wasn't holding it alone." }
        ] }
      ] },

      { n: "Then Elizabeth let go of the rail and stepped back from it, onto the walkway, to the place in the middle where the paving was a little paler than the rest, newer, as if a stretch of it had been scrubbed. Solar knew the place. She'd tried not to know it all week. Three pairs of shoes had stood on it, in a neat row, side by side, facing home." },
      { n: "Elizabeth crouched. She did it badly, the way she did anything for the first time, folding down onto her heels in the blue dress with the book pressed to her knees, and put her bare palm flat on the paving, where the shoes had been. And closed her eyes. And waited." },
      { n: "And opened them. And looked at the paving under her hand with a small, polite puzzlement, like someone who'd opened a book at the page they wanted and found it blank." },
      { s: 'elizabeth', f: 'neutral', t: "...Nothing." },
      { s: 'elizabeth', f: 'neutral', t: "As if nobody had ever stood here at all." },
      { n: "Solar had heard her say that before. Those words, in that voice, that small puzzled lift at the end. Once. About something else. A door. She stood on the bridge in the wind and tried to remember which door, and for a moment she couldn't, and then for a moment she could, and she didn't say anything, and the bus went past behind them, and she found that her own hand had gone to the rail and was holding on." },
      // CG: eqx-where-they-stood — the middle of a long white bridge over a glittering bay on a bright cold autumn day, a woman in a blue dress and a little crooked blue cap crouched on the walkway with her bare palm flat on a pale scrubbed patch of paving, an old book against her knees, a girl standing behind her holding the rail.
      { choose: [
        { t: "Elizabeth. The mothers. Their pages.", notes: 3, flag: 'eqx-eliz-pages-open', then: [
          { n: "Elizabeth stood up. Slowly. She opened the book, there, in the wind, on the bridge, holding the pages down with the flat of her hand so they wouldn't go, and turned to three pages she didn't have to look for: a woman with a tortoiseshell clip in her hair, a woman with a ring on her right hand, a woman with a laugh you could see even in a photograph." },
          { n: "The threads were still there. Gold, running off the bottom of each page and away, south, down toward the water, toward the city, toward something. And taut. Tight as fishing line. Trembling." },
          { s: 'elizabeth', f: 'serious', t: "Their pages haven't closed. They're open. Something's still writing on them." },
          { s: 'elizabeth', f: 'serious', t: "...That's all I know. I won't say more than I know. I said more than I knew to someone once, and I—" },
          { n: "She stopped. She closed the book on the three pages, gently, so the threads lay along the edge and didn't catch, and held it shut with both arms." },
          { s: 'elizabeth', f: 'neutral', t: "They're open. Tell their families that, if you think it will help. I don't know if it will. I've never known what helps." }
        ] },
        { t: "(Help her up. Get her away from that spot.)", notes: 2, then: [
          { n: "She took Elizabeth under the arm and lifted her, and Elizabeth came up much more easily than she should have, light, as if there were less of her than there had been in June, and let herself be walked two lamps along the bridge toward the city before she stopped." },
          { s: 'elizabeth', f: 'sad', t: "...Thank you. I don't think I'd have got up on my own. I'd have stayed there reading nothing until someone moved me along." }
        ] }
      ] },
      { ifEvent: 'eqx-pencil', then: [
        { n: "On the way back toward the city Elizabeth stopped once more, at a lamp near the island end, and put her fingertips to the rail, lightly, the way you'd touch the shoulder of someone asleep." },
        { s: 'elizabeth', f: 'neutral', t: "She stands here. Every night. In her coat. With her case at her feet." },
        { s: 'elizabeth', f: 'sad', t: "...She used to play it wider. You can feel it in the iron, the way the bridge stretched. Since last week she plays it steady. Badly. With fewer fingers than she had." },
        { n: "She took her hand away and looked at it, and at her own fingers, and closed them, all ten, slowly, one by one, and opened them again, as if counting." }
      ] },

      { n: "They stood at the rail by the island end with the city in front of them and the wind at their backs. Elizabeth was holding the book against her chest again. She didn't look at Solar. She looked at the city, at Iwatodai across the water, the station, the strip, the river coming down out of it to the bay past the old houses on the river side." },
      { s: 'elizabeth', f: 'serious', t: "May I ask you something. In general. About doors. You're the person I'd ask, if I were the sort who asked. I've been practising." },
      { s: 'elizabeth', f: 'serious', t: "If someone held a door. For a very good reason. For someone who needed it. And they held it a little too long, because they couldn't bear to let go, because someone might be just about to come through. And something else came through instead." },
      { s: 'elizabeth', f: 'serious', t: "...Whose would it be. The fault. In general." },
      { n: "She didn't say which door. She didn't say whose. Solar stood beside her on the bridge in the wind and looked at the side of her face, pale, perfectly composed, the cap straight now, and thought of a line of gold under a door in a blue room, and a chair turned to face it, and a café in April, a gloved hand flat on the wood, *it feels like somebody might be just about to come through*." },
      { choose: [
        { t: "The thing that came through. Nobody else.", notes: 3, flag: 'eqx-eliz-fault-thing', then: [
          { s: 'elizabeth', f: 'neutral', t: "...You say that very quickly." },
          { s: 'solar', f: 'neutral', t: "Because it's true." },
          { s: 'elizabeth', f: 'sad', t: "It may be. I'd like it to be. I'll keep it, the way you said it, quickly. In case I need it later, when it's not so windy." }
        ] },
        { t: "Partly theirs. But holding a door for someone isn't the same as opening it for something.", notes: 3, flag: 'eqx-eliz-fault-holder', then: [
          { s: 'elizabeth', f: 'neutral', t: "...Partly. Yes. That's more honest. I'd rather have honest." },
          { s: 'elizabeth', f: 'serious', t: "Not the same. Holding and opening. No. Write that down for me. Somewhere I'll see it. My wrists are full." }
        ] },
        { t: "Whose fault it was matters less than what they do next. That part's theirs to choose.", notes: 3, flag: 'eqx-eliz-fault-next', then: [
          { n: "Elizabeth was quiet for a long time. A gull came down on the rail two lamps away and looked at them and went again." },
          { s: 'elizabeth', f: 'sad', t: "...You keep doing that. Handing things back to me. *Yours.* I asked for a verdict and you've given me a job." },
          { s: 'elizabeth', f: 'neutral', t: "It's a better gift. I know it is. I wish it weren't so heavy." }
        ] }
      ] },
      { ifChoice: { 'asks.elizabeth': 'yes' }, then: [
        { s: 'elizabeth', f: 'sad', t: "I'm still holding it. My door. You told me to keep holding it, as long as it takes, and I said I would, and I am." },
        { s: 'elizabeth', f: 'sad', t: "...It's heavier this week. I didn't know a door could get heavier. I thought they were all one weight." }
      ] },
      { ifChoice: { 'asks.elizabeth': 'no' }, then: [
        { s: 'elizabeth', f: 'sad', t: "You told me to close it. In June. On the river road. I should have listened. I went to it so many times. I couldn't." },
        { s: 'elizabeth', f: 'sad', t: "...I'm not cross with you anymore. I haven't been for a long time. I'd give a great deal to be cross with you again about something small." }
      ] },
      { ifChoice: { 'asks.elizabeth': 'choose' }, then: [
        { s: 'elizabeth', f: 'neutral', t: "You told me it was mine to decide. My door. I'm still deciding. Every night. The list's longer than it was in July. I keep having to add to the other side." },
        { s: 'elizabeth', f: 'sad', t: "...I think I may decide soon. I think I may not like what I decide. Will you still stand next to me? You said you would. I've been holding on to that." }
      ] },

      { s: 'elizabeth', f: 'neutral', t: "Theodore's minding the Room. While I'm out. He's very good. He offered to stand at your door, you know. Any door you liked. He'd stand at it all night. He's terribly good at standing." },
      { s: 'elizabeth', f: 'neutral', t: "...I told him no. Again. I'm not sure why. I'm not sure of very much this week." },
      { n: "Her bare hand was on the rail again. Solar hadn't seen her put it there. She was holding it, the cold painted iron, the way she'd held the café door, stiff all the way up the arm, as if it were something heavy, as if letting go of it would let something fall." },
      { choose: [
        { t: "(Take her fingers off the rail. One at a time.)", notes: 3, then: [
          { n: "She took Elizabeth's hand off the rail, gently, one finger at a time, the way you'd unhook a child's hand from a railing, the way she'd done it at the café in April; and Elizabeth watched her do it with an expression of great attention, as if being shown again something she'd learned once and lost." },
          { s: 'elizabeth', f: 'sad', t: "...I was holding it. I didn't know. I keep doing that. My hands have started deciding things without me." },
          { s: 'solar', f: 'neutral', t: "It's just a rail. It'll be here." },
          { s: 'elizabeth', f: 'neutral', t: "*It'll be here.* Yes. Things one lets go of are mostly still there. I'll try to remember that's how it usually goes." }
        ] },
        { t: "(Put your hand on the rail beside hers. Hold on with her.)", notes: 3, then: [
          { n: "She didn't take Elizabeth's hand off it. She put her own beside it, on the iron, and held on too, and they stood there in the wind, two hands on the rail of the bridge, not letting go of anything, and after a while Elizabeth's arm, beside hers, loosened. Not all the way. Enough." },
          { s: 'elizabeth', f: 'sad', t: "...That's what you said. In April. That you'd stand next to it. I didn't know then how much I'd want you to." }
        ] }
      ] },
      { place: 'Moonlight Bridge · Island End', time: 'Evening', bg: 'moonlightbridge-night', soft: true },
      { n: "The light was going when they reached the island end, the sky over the city going thin and copper and the lamps along the bridge coming on one by one behind them, from the island outward, toward the middle." },
      { n: "Elizabeth stopped at the end and looked back along the bridge, the whole length of it, to the middle, to the seventh lamp, where the paving was pale." },
      { s: 'elizabeth', f: 'serious', t: "Someone ought to stand there. Every night. In case. Just to be there, so nobody comes through to an empty—" },
      { n: "She stopped. Solar watched her hear it." },
      { s: 'elizabeth', f: 'sad', t: "...No. That's how it starts. Isn't it. That's exactly how it starts." },
      { n: "She lifted one hand in the small formal wave, the girl at the station, and turned, and went down the steps toward the monorail with the book against her chest, very straight, and didn't look back, and at the bottom of the steps there was a door, a service door into the base of the bridge, standing open a hand's width, propped with a wedge of folded cardboard." },
      { n: "Elizabeth looked at it. Looked both ways. Bent, and took out the cardboard, and let it go, and stood beside it with her head on one side until the latch clicked. Then she went round the corner and was gone." },
      { n: "Solar stood at the top of the steps for a long time with the wind at her back. Behind her the lamps finished coming on, all the way along the bridge to the middle, where the seventh one, over the pale paving, flickered twice before it caught." }
    ] }
  ]
});
