/* Late-night calls for the dorm residents (2026-11-01): FEMC_GAME_LINK_EXTRAS[link].lateNights, kind 'call' (format: core.js
   comment above lateNightFits; examples jw-ln-call / jh-ln-call in living-nights.js). Akihiko, Haechan, Hanni and Hyein all
   live in the dorm (data/living-world.js FEMC_GAME_LODGING), so each call has its own reason not to knock: he's out on a
   run, the laundry room's taken, the stairs are past curfew, the hall is a minefield. Romance only on route 'romance'
   (Akihiko, Haechan); Hanni and Hyein stay friend-voiced. Windows sit before the next rank that would change things.
   Each plays once. */
(() => {
  const X = (window.FEMC_GAME_LINK_EXTRAS ||= {});
  const add = (id, list) => { (X[id] ||= {}).lateNights = [...((X[id] || {}).lateNights || []), ...list]; };
  const ROOM = "Iwatodai Dorm · Solar's Room";

  add('akihiko', [
    // Cleared to run (rank 2, 4/30); before the hand wraps (rank 4). He's out past curfew and needs a timekeeper.
    { id: 'call-aki-splits', kind: 'call', rank: 2, after: '5/1', until: '6/12', when: 'quiet', place: ROOM, time: 'Night · 12 AM', music: 'night', scene: [
      { n: "Her phone went at five past midnight. She knew who it was before she looked, because nobody else would call someone who lived in the same building, and because behind his breathing she could hear the river." },
      { s: 'akihiko', f: 'neutral', t: "You still have the stopwatch? Don't get up. Just tell me where it is." },
      { s: 'solar', f: 'neutral', t: "On my desk. Akihiko, it's midnight." },
      { s: 'akihiko', f: 'happy', t: "I know. Couldn't sleep. Mitsuru said no night runs. She said it to the version of me with cracked ribs. That guy's gone." },
      { s: 'akihiko', f: 'neutral', t: "I'm at the bridge. Bridge to the dorm steps. Say go." },
      { choose: [
        { t: "(Get the stopwatch. Say go.)", notes: 2, then: [
          { n: "She said go and pressed it, and the line filled with feet on pavement, a steady four-count, and breath, and once a car going past him and away. He didn't talk. She didn't either. She sat on her bed in the dark with the silver watch in one hand and the phone in the other and listened to someone run toward the building she was in." },
          { n: "Then the gate, then the steps, then the click of the stopwatch, and through the window, faintly, the same breathing she could hear down the phone, half a second behind." },
          { s: 'akihiko', f: 'happy', t: "Read it to me." },
          { n: "She read it to him. He said it was bad. He said it like he'd been given a present." }
        ] },
        { t: "If I time you, I'm an accessory.", notes: 2, then: [
          { s: 'akihiko', f: 'surprised', t: "...To what? Cardio?" },
          { s: 'akihiko', f: 'happy', t: "Fine. Then I'll count. You just listen and tell me if I cheat." },
          { n: "He counted out loud the whole way, every ten seconds, getting less breath to count with each time, and around a hundred and forty he said *don't laugh* and she wasn't laughing, she was lying back on her pillow with the phone on her ear, and he came in at two hundred and six, and swore he'd cheated on the last hill, and asked her to check him tomorrow at five, properly." }
        ] }
      ] }
    ] },
    // After the romance is settled (rank 10, a year that keeps going). Mitsuru's late tea in the lounge makes the stairs impossible.
    { id: 'call-aki-no-reason', kind: 'call', rank: 10, route: 'romance', flag: 'year-goes-on', after: '1/6', until: '1/31', when: 'quiet', place: ROOM, time: 'Night · 1 AM', music: 'romance', scene: [
      { n: "One in the morning. The phone buzzed on the pillow next to her face and she answered it without opening her eyes." },
      { s: 'akihiko', f: 'blushing', t: "Hey. It's me. I'm in my room. Mitsuru's in the lounge with her tea, right at the bottom of the stairs, and she can hear a sock on a step. I checked. Twice." },
      { s: 'solar', f: 'neutral', t: "Is something wrong?" },
      { s: 'akihiko', f: 'neutral', t: "No. That's the thing. Nothing's wrong. I've never called anybody when nothing was wrong. I don't know how it goes." },
      { s: 'akihiko', f: 'blushing', t: "Is there a way it's done? You talk first? I've been sitting here with the phone for ten minutes like it was a weight I hadn't decided to lift." },
      { choose: [
        { t: "Tell me about your day. Pretend I wasn't in it.", notes: 2, then: [
          { n: "He told her. Badly, at first, in splits and times, and then less badly. The second-year at the club who'd finally kept his hands up. A dog at the shrine that had followed him a full kilometer. The convenience store being out of the chocolate one again. He kept stopping to say *you were there for this part* and she kept saying *pretend*, and he laughed, quietly, so the stairs wouldn't hear." }
        ] },
        { t: "(Don't say anything. Just stay on.)", notes: 2, then: [
          { n: "She didn't say anything. Neither did he, after a while. She could hear his radiator, which ticked, and the creak of his bed when he lay back on it, and his breathing going slow and even the way it did on the last kilometer, when he stopped racing and just ran." },
          { s: 'akihiko', f: 'happy', t: "...Oh. That's how it goes." }
        ] }
      ] },
      { n: "Somewhere below them a cup went down on a saucer, and a light went off, and a door closed. Neither of them mentioned that the stairs were clear now. He said goodnight at twenty to two. She said it back. He stayed on the line another minute anyway, to make sure, he said, that she'd actually gone to sleep, which was not how phones worked, and which she did not tell him." }
    ] }
  ]);

  add('haechan', [
    // After the roof (rank 2, 11/11), before he awakens. Somebody's doing real laundry at two in the morning.
    { id: 'call-hc-occupied', kind: 'call', rank: 2, after: '11/12', until: '12/4', when: 'quiet', place: ROOM, time: 'Night · 2 AM', music: 'night', scene: [
      { n: "Two in the morning. She was already sitting up with one sock on, deciding whether tonight was a laundry room night, when the phone lit up on the desk. Him. He had never once called." },
      { s: 'haechan', f: 'neutral', t: "Don't come down." },
      { s: 'haechan', f: 'neutral', t: "Laundry room's taken. Somebody's doing laundry. In the laundry room. At two. Gym clothes, by the smell. I don't know what kind of person does that." },
      { s: 'solar', f: 'neutral', t: "You're the one who sits on the dryer at two." },
      { s: 'haechan', f: 'serious', t: "I don't do laundry on it. That's the difference. That's the whole difference." },
      { n: "Wind on the line. A door somewhere banging against its frame. He was on the roof." },
      { s: 'haechan', f: 'neutral', t: "Didn't want you going down there and finding nobody. That's all. That's the call." },
      { choose: [
        { t: "Kick the door low. Left side. I'm coming up.", notes: 2, then: [
          { s: 'haechan', f: 'happy', t: "...Look at you. Somebody reads her texts." },
          { s: 'haechan', f: 'neutral', t: "No. Stay where it's warm. It's November up here. Just don't hang up yet." },
          { n: "So she didn't. She got back under the blanket with the phone, and he talked her through the city from the railing, which lights were the station, which were the bay, which one was a crane he'd decided was his, until his voice went flat and slow with cold, and she told him to go in, and he said *you first*, and she said *I'm already in*, and he said *right*, and didn't move, she could hear him not moving, for another five minutes." }
        ] },
        { t: "(Don't say anything. Stay on the line.)", notes: 2, then: [
          { n: "She stayed on. He didn't fill it. There was wind, and the far-off sound of the last freight train going over the bridge, and then a small precise crackle she worked out was a gum wrapper being folded very small, and put back in a pocket." },
          { s: 'haechan', f: 'neutral', t: "You're still there." },
          { s: 'solar', f: 'neutral', t: "You're still there." },
          { s: 'haechan', f: 'neutral', t: "Mm. Tomorrow, then. If the gym guy's got any decency." }
        ] }
      ] }
    ] },
    // After the turn (rank 8, romance), a year that keeps going. He went out for something past curfew and the hill is long.
    { id: 'call-hc-hill', kind: 'call', rank: 8, route: 'romance', flag: 'year-goes-on', after: '12/27', until: '2/28', when: 'quiet', place: ROOM, time: 'Night · 1 AM', music: 'tender', scene: [
      { n: "The phone went at ten past one. On the line: footsteps, a plastic bag knocking against a knee, and the particular silence of a street with nobody else on it." },
      { s: 'haechan', f: 'neutral', t: "Went to the konbini. Front door locks at curfew. I knew that when I left. I'm not sorry, I wanted the chips." },
      { s: 'haechan', f: 'flustered', t: "It's a long hill. Talk to me till the gate. I'll get in through the side, I've done it before, don't ask how." },
      { s: 'solar', f: 'neutral', t: "What do you want me to talk about?" },
      { s: 'haechan', f: 'happy', t: "Anything. Your voice is the point. The words are packaging." },
      { choose: [
        { t: "(Tell him about your day, slowly, all the way up.)", notes: 2, then: [
          { n: "She told him all of it, in order, the boring parts longest, and he said *mm* in the right places and *no way* in the wrong ones, on purpose, and she could hear the hill in his breathing about halfway through. Then the gate, a soft scrape, a window she'd never once noticed was a door." }
        ] },
        { t: "Did you get me anything?", notes: 2, then: [
          { s: 'haechan', f: 'neutral', t: "Rude. Yes." },
          { s: 'haechan', f: 'happy', t: "The pink one. They had one. One. I bought it like it was the last one on earth. It might be." },
          { n: "He described the can to her, in detail, the whole way up the hill, like a sportscaster, the logo, the condensation, the way it was sweating through the bag, until she was laughing into her pillow and he was too out of breath to keep going and kept going anyway." }
        ] }
      ] },
      { n: "Then she heard him on the stairs. Twice: once down the phone, and once, very faintly, through the floor, half a breath behind. The steps came along the hall and stopped outside her door, and didn't knock." },
      { s: 'haechan', f: 'neutral', t: "Can's on your doorstep. Goodnight. Don't open it till I'm gone, I'll get caught being nice." },
      { n: "She waited until the steps had gone back down the hall. Then she opened the door. The can was there, cold, with the tab turned toward her." }
    ] }
  ]);

  add('hanni', [
    // After the mixer (rank 3, 9/30), before anybody new is sitting on the dryer. Mom mode, in the laundry room, at one.
    { id: 'call-hanni-label', kind: 'call', rank: 3, after: '10/1', until: '11/3', when: 'quiet', place: ROOM, time: 'Night · 1 AM', music: 'night', scene: [
      { n: "Her phone rang at one in the morning, which in this dorm meant either a disaster or Hanni, and it was Hanni, and she was whispering." },
      { s: 'hanni', f: 'flustered', t: "Sol. Hi. Sorry. Don't come down. I'm in the laundry room. I couldn't sleep so I did laundry, and some of yours was in the basket, so I did yours too, which, sorry, I know, that's so much, I'm so nosy." },
      { s: 'hanni', f: 'serious', t: "But there's a gray sweater and the tag's all in Japanese and I'm holding it over the dryer like it's a baby over a lake. Is it a dryer one? I can't come up and ask. The stairs make that noise. You know the noise." },
      { s: 'solar', f: 'neutral', t: "I don't know if it's a dryer one." },
      { s: 'hanni', f: 'sad', t: "...Oh. Right. Of course you don't. Okay. That's okay. That's normal. Nobody knows that about their own sweaters." },
      { choose: [
        { t: "Read me the little pictures.", notes: 2, then: [
          { n: "Hanni read her the little pictures. A bucket with a hand in it. A square with a circle and a line through it. A triangle crossed out, which she described as *a triangle having a really bad day*. They decided together, very seriously, at one in the morning, that it was not a dryer one, and Hanni laid it flat on top of the machine like something she'd rescued, and said she'd guard it, and Solar said it was a sweater, and Hanni said *exactly*." }
        ] },
        { t: "Hanni. Go to bed. I'll do my own laundry.", notes: 1, then: [
          { s: 'hanni', f: 'happy', t: "You won't, though. You'll do it at three in the morning on a Tuesday when you've run out of socks and you'll put everything on hot. You always do that. I've seen it." },
          { s: 'hanni', f: 'neutral', t: "Let me. It's nice. It's the most normal thing I've done in weeks. It smells like home in here. Same soap. I checked." }
        ] }
      ] },
      { n: "She stayed on while Hanni folded, a soft papery rhythm on the line, and hummed something from a TV show, and narrated each item like a nature documentary. *And here, the sock. Alone. It has lost its family.* In the morning there was a neat stack outside Solar's door, the gray sweater on top, still faintly warm from sitting on the dryer, the socks rolled in pairs, and the lonely one folded by itself on the very top, with a sticky note on it that said *we're looking*." }
    ] }
  ]);

  add('hyein', [
    // After the wings (rank 3, 10/3), before Halloween. She's sewing past curfew and won't knock: knocking is a commitment.
    { id: 'call-hyein-thread', kind: 'call', rank: 3, after: '10/4', until: '10/29', when: 'quiet', place: ROOM, time: 'Night · 1 AM', music: 'night', scene: [
      { n: "The phone lit up at one in the morning with three texts in a row, *r u up*, *ur light is off*, *thats not the same thing*, and then, before she could answer any of them, it rang." },
      { s: 'hyein', f: 'serious', t: "Okay. Don't get up. If I knock, you get up, and then you're awake and that's on me. If I call and you don't pick up, you're asleep and I win anyway. This is me being considerate. Notice it." },
      { s: 'hyein', f: 'neutral', t: "I'm on my floor. Literally on my floor. There's tulle in my hair. I need one decision and I can't make it, and it's past curfew, and the hall between us has a floorboard that screams. I'm not dying for tulle." },
      { s: 'hyein', f: 'serious', t: "Gold thread or silver thread. For the edge. On the wings. Small wings. Don't say both." },
      { choose: [
        { t: "Gold. Sun.", notes: 2, then: [
          { s: 'hyein', f: 'happy', t: "GOLD. Okay. Yes. That's what I said. Out loud. To nobody. An hour ago. I just needed a witness." },
          { s: 'hyein', f: 'neutral', t: "Stay on, though. I'm threading it. It takes forever. Talk to me so I don't stab myself out of boredom." }
        ] },
        { t: "Both.", notes: 1, then: [
          { s: 'hyein', f: 'surprised', t: "I SAID don't say both." },
          { s: 'hyein', f: 'sad', t: "...Okay, actually, hold on. Hold on. Sun and moon. Both. Shut up. Don't say anything. You're so annoying when you're right." }
        ] },
        { t: "Hyein, I can't see the wings.", notes: 2, then: [
          { s: 'hyein', f: 'neutral', t: "I know. I'm going to describe them. You're going to listen. This is called radio." },
          { n: "She described them for four minutes. The shape, the stiffening, the way they'd catch the light if anybody ever turned a light on her, which they would, she'd make sure of it. Solar said gold. Hyein said *finally, an opinion*." }
        ] }
      ] },
      { n: "After that it was just the sound of a needle being argued with, and Hyein muttering at it, and once, clear as anything, *ow, okay, rude*, and Solar fell asleep somewhere in the middle of the second wing with the phone still warm against her ear. In the morning her call log said fifty-one minutes, and the last text, sent at 2:14, said *u snore btw. cute. gold was right*." }
    ] }
  ]);
})();
