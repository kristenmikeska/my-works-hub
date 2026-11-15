/* Persona 3: Equinox · Elizabeth (Velvet Room). Link data for femc-equinox-game.html; replaces her stub in ../links.js (same id).
   Format: link fields in assets/femc/game/core.js ("Links" header), scene lines in assets/femc/game/scene.js.
   A hidden frame link, as in Solstice (assets/femc/game/links/elizabeth.js): never on the map, no phone (invite: null), no
   hangouts. Every rank is forced, so each plays as story on its `after` date through core.js dueEvent (hidden: true doesn't
   stop a forced rank; linkStatus is never asked). Rank 1 plays on 4/13 in the late slot (rank `slot: 'late'`), in the
   Velvet Room. Ranks 2-10 to come; a later rank needs its own `after` date and slot.
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
    ] }
  ]
});
