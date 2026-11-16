/* Persona 3: Equinox · Hong Eunchae · 0 The Fool. Link data (femc-equinox-game.html). Format: link fields in
   assets/femc/game/core.js ("Links" header), scene lines in assets/femc/game/scene.js.
   Written: rank 1 (after 6/27: she came through on 6/26, story-act2 'eqx-stage'; her home is the Port Island Station
   concourse on Wednesday after school and weekend daytimes, so 6/27 itself, the Sunday they arrived, is possible: the
   scene is written to hold on any date). Ranks 2–10 still to write. Shape: the stub fields from
   assets/femc/equinox/data/links.js.
   Shared memory: the Runners epilogue (on a snowy campus tour she heard a girl singing in a hallway and stopped: Solar), the
   HOAX epilogue (Hanlim Unfiltered, the stream board she started because nobody talked to her at lunch and a camera gave her
   a reason to be somewhere), the strangers epilogue ("You're *the* Sol"; the youngest, all questions), the 6/26 atrium
   ("I was all of those tonight"). Concept 3 (Runners' future) is only ever teased: she asks Solar to sing; nothing is decided.
   The hook: her phone holds one camera roll with three lives in it, and one picture she didn't take.
   Reads: ifEvent eqx-last-grain (7/27 morning) for the last photo in her roll.
   Flags this file sets: eqx-eunchae-sang (Solar sings for her on the concourse). Nothing reads it yet. */
(window.FEMC_GAME_LINKS ||= []).push({
  id: 'eunchae', name: 'Hong Eunchae', short: 'Eunchae', arcana: 'Fool', numeral: '0', from: 'Runners · strangers · Hoax', kind: 'arrival',
  world: 'RSH', romance: null, arrives: '6/26', starts: '6/27', lodging: 'boarding',
  home: { area: 'portisland', spot: 'Central Concourse', slot: 'after', days: [0, 3, 6],
          hint: 'After school on Wednesdays, and in the daytime on weekends, on the concourse at Port Island Station, taking pictures of everything.' },
  approach: "In the middle of Port Island Station's concourse a girl is lying flat on her back on the tiles with her phone held up over her face, photographing the departure board from underneath, while commuters step round her like water round a rock and she says sorry to every one of them without moving.",
  ranks: [
    { after: '6/27', title: '1: camera roll', place: 'Port Island Station · Central Concourse', time: 'Daytime', music: 'joy', scene: [
      { bg: 'station-concourse-busy' },
      { n: "Port Island Station at three on a weekend was all glass and noise, the big hall full of light from its curved roof and people going everywhere at once with shopping bags and suitcases and children on leads, the departure board clattering its little flaps over everyone's heads, the monorail sliding in overhead every six minutes with a long sigh like somebody lying down. The air conditioning was on so hard it made your arms prickle, and every time the doors to the plaza opened the heat came in like a dog." },
      { n: "And in the middle of it, flat on her back on the tiles, with her phone held up in both hands over her face, there was Eunchae." },
      { s: 'eunchae', f: 'happy', t: "Sorry! Sorry. Sorry, sorry. I'm sorry. Sorry. Oh, Solar! Hi! Don't step on me. Everyone keeps nearly stepping on me. Sorry!" },
      { n: "A businessman stepped over her legs without breaking stride. She photographed his shoe going over." },
      { s: 'eunchae', f: 'neutral', t: "The board. From underneath. You can't see it from underneath anywhere else. I've done it from the side and the top of the stairs and through the glass from outside, and now underneath, and then I've done it." },
      { choose: [
        { t: "(Lie down next to her.)", notes: 3, then: [
          { n: "Solar lay down next to her. The tiles were cool. Directly overhead the board flickered and clattered, rows of white letters turning over like a deck being shuffled, and above it, through the glass, the sky was a hard summer blue with one plane crawling across it. It was, in fact, a good angle." },
          { s: 'eunchae', f: 'surprised', t: "...You did it. Nobody does it. Yunjin wouldn't do it. Yunjin stood over me and said she didn't know me." },
          { n: "She took a picture of the two of them, flat on the floor, the board above them, her arm stretched up. In it, Solar's face was doing something she hadn't known it could still do in public, which was laughing at nothing." }
        ] },
        { t: "Have you slept at all?", notes: 2, then: [
          { s: 'eunchae', f: 'neutral', t: "Some. In one of me I'm sixteen and I can sleep anywhere. In one of me I'm a freshman with a nine a.m. and I can't sleep at all. They average out." }
        ] },
        { t: "(Hold out a hand to pull her up.)", notes: 2, then: [
          { n: "Eunchae looked at the hand. Then she took a picture of it, from below, Solar's hand reaching down against the glass roof like something in a painting, and only then took it, and let herself be pulled up, and stood there pink in the face and delighted." }
        ] }
      ] },
      { n: "They bought melon sodas from the kiosk by the ticket gates and sat on the steps up to the monorail platform, out of the stream of people, and Eunchae, without being asked, handed Solar her phone and said *scroll*." },
      { s: 'eunchae', f: 'neutral', t: "That's all of it. From before. All of my phones. It's all in this one now." },
      { n: "Solar scrolled. A campus in snow, a long white quad and old stone buildings under a gray sky, a tour group in matching lanyards squinting at a guide. A school hallway in Seoul, lockers and a bulletin board and a camera on a little tripod pointed at a girl's empty chair. A dance studio with a cracked mirror and a space heater glowing orange and Yunjin, mid-turn, blurred, laughing. Then snow again. Then the Hanlim cafeteria. Then the studio. No order to it at all. Three winters shuffled together like the flaps of the departure board." },
      { s: 'eunchae', f: 'neutral', t: "I don't know which is which anymore. Not in my head. In my head they're all just mine. So I check the pictures. The pictures know. That's the snow one. That's the Hanlim one. That's Songdo." },
      { s: 'eunchae', f: 'neutral', t: "So now I take pictures of everything. Everything, so I'll always know which life a thing happened in. Here's easy. Here's the one with the red." },
      // CG: eqx-camera-roll — a phone screen held in two hands on a station's stone steps, a grid of photos from three different winters shuffled together (a snowy college quad, a Korean school hallway with a camera on a tripod, a dance studio with a cracked mirror and an orange heater), a melon soda can sweating on the step beside it.
      { n: "She took the phone back and kept scrolling, slower now, and stopped on one, and turned the screen to Solar." },
      { n: "A hallway. A university hallway, old radiators and a corkboard of flyers and a window full of snow, and in the middle distance, small and out of focus, the back of a girl leaning against a doorframe with her head tipped back, mouth open. Singing. You couldn't hear it. You could see it." },
      { s: 'eunchae', f: 'neutral', t: "That's you. That's you in December. On the tour. Everybody else walked on and I stopped and took that and the guide had to come back for me." },
      { s: 'eunchae', f: 'neutral', t: "I didn't know you then. You were just a girl singing in a hallway. I stood there till you stopped. I didn't even go to the next building. I just went home and told my mom I'd decided." },
      { s: 'solar', f: 'neutral', t: "Decided what?" },
      { s: 'eunchae', f: 'flustered', t: "...That I'd go there. To that school. For the hallway. That's a terrible reason. Don't tell anyone." },
      { choose: [
        { t: "It's not a terrible reason.", notes: 3, then: [
          { s: 'eunchae', f: 'happy', t: "It's a little terrible. But it's mine. I like having one reason that's just mine, that nobody else would understand." }
        ] },
        { t: "I don't remember that day.", notes: 2, then: [
          { s: 'eunchae', f: 'neutral', t: "That's okay. You weren't supposed to. You were singing. People who are singing aren't supposed to remember who's listening. That's the point." }
        ] },
        { t: "(Look at the picture for a long time.)", notes: 3, then: [
          { n: "Solar looked at it for a long time. At the girl in the doorframe who didn't know she was being watched, and didn't care, singing in an empty hallway in the snow. She knew that girl. She'd been that girl. It was strange to see her from the outside, from the back, small and blurred and unguarded, the way somebody who loved her might have seen her. Her throat did something. She handed the phone back without saying anything, and Eunchae didn't ask her to." }
        ] }
      ] },
      { s: 'eunchae', f: 'neutral', t: "Will you sing something? Now? Just a little. Here." },
      { s: 'eunchae', f: 'neutral', t: "I won't film it. I promise. I want one thing that isn't a picture. I want one thing I just have." },
      { choose: [
        { t: "(Sing. Quietly. Just for her.)", notes: 3, flag: 'eqx-eunchae-sang', then: [
          { n: "She sang. Not loud. A few lines of something, she couldn't have said what, a song from one of her lives, a song that belonged to all of them, there on the stone steps with the monorail sighing in overhead and the departure board clattering and a thousand people going past who didn't stop." },
          { n: "One or two did. A schoolgirl with a cello case. An old man with a bag of oranges. They stood at the bottom of the steps for a few seconds, the way you'd stop for a bird, and then went on. Eunchae didn't move at all. She sat with her phone face down on her knee and both hands pressed flat over it, as if keeping it from waking up." },
          { s: 'eunchae', f: 'sad', t: "...Okay. Okay. I have that now." }
        ] },
        { t: "Not here. Somewhere with fewer people.", notes: 2, then: [
          { s: 'eunchae', f: 'neutral', t: "That's fair. That's very fair. I'll find somewhere. I'm going to find the best somewhere in this whole city and then I'm going to ask you again." },
          { s: 'eunchae', f: 'happy', t: "I'm very good at asking again. Ask Yunjin." }
        ] },
        { t: "I don't sing anymore.", notes: 2, then: [
          { n: "Eunchae looked at her. She looked at her the way she'd looked at the board from underneath, from an angle nobody else used, and seemed to see something there, and nodded slowly." },
          { s: 'eunchae', f: 'neutral', t: "Anymore. Okay. That's a word that means *later*. I'll wait." }
        ] }
      ] },
      { n: "A train came in below them. The doors opened. Everyone who'd been waiting got on, and everyone who'd been on it got off, and for a minute the concourse was all motion, and Eunchae watched it with her chin on her knees." },
      { s: 'eunchae', f: 'neutral', t: "At Hanlim I started the stream because nobody sat with me at lunch. If you're filming, you're doing something. You're not just a girl on her own. You're a girl working." },
      { s: 'eunchae', f: 'neutral', t: "Here I sit with four people at every meal. Five, when Yunjin comes down the hill. They save me a seat. They save it *before* I get there. Nobody's ever done that. In any of them." },
      { s: 'eunchae', f: 'happy', t: "So I don't really need the camera here. I just like it. That's different. That's a nice different." },
      { n: "She said it easily, happily, with a melon-soda moustache, and it went into Solar like a splinter, because she'd heard the other half of it under the first half, the way you hear a second singer a fraction behind the first: *here's the only place I don't need it*." },
      { place: 'Port Island Station · Monorail Platform', time: 'Evening', bg: 'station-platform-day', music: 'eerie', soft: true },
      { n: "On the platform, waiting for the monorail back to Iwatodai, Eunchae scrolled to the newest pictures, to show her the boarding house. The tatami room where they rehearsed, with four pairs of shoes in a row by the door. The long table at dinner. Mrs. Oka's hands, in their white cotton gloves, setting down a bowl, very blurred, as if she'd moved faster than the shutter." },
      { ifEvent: 'eqx-last-grain', then: [
        { n: "And then one Eunchae scrolled past fast, and Solar caught it anyway. The long table at supper. The end of it nearest the kitchen. A round-faced boy in a Gekkoukan shirt holding his chopsticks up in a salute, grinning, his bowl full again." },
        { s: 'eunchae', f: 'sad', t: "...Don't. I know. I can't delete it. I can't look at it either. It's the last one anybody took. It's my picture. I took the last picture of him and he was saluting." },
        { n: "She put her thumb over it on the screen, the whole of her thumb, as if to keep it warm, and scrolled on." }
      ] },
      { n: "Then she stopped scrolling. She held the phone a little away from herself, frowning." },
      { s: 'eunchae', f: 'neutral', t: "...Oh. This one. I keep meaning to ask the others which of them took this." },
      { n: "It was a picture of a room at dawn. A tatami room, gray light at the paper screens. Four futons side by side, and four shapes asleep in them, Chaewon on her back with one arm flung out, Sakura curled to the wall, Kazuha very straight, Eunchae herself with her face in her pillow. Taken from the doorway. From a little above head height, looking down on them, the way a person would stand in a doorway and look in on children." },
      { n: "The time stamp said 5:41. Their first morning. They'd been in bed perhaps ten minutes." },
      { s: 'eunchae', f: 'neutral', t: "It's my phone. It's in my roll. But I'm in it. I'm asleep in it. So I didn't take it." },
      { s: 'eunchae', f: 'happy', t: "I think it was Oka-san. Checking on us. Isn't that sweet? Like a mom. She'd never have used a phone before, she'd have just held it up." },
      { choose: [
        { t: "Did you ask her?", notes: 2, then: [
          { s: 'eunchae', f: 'neutral', t: "I did. She laughed. She said she wouldn't know how to work one of those things. She said *I just stood in the door a minute, dear, and looked at you all. Four of you. You looked so right there.*" },
          { s: 'eunchae', f: 'neutral', t: "...So it was her. Wasn't it. She stood in the door." }
        ] },
        { t: "Where was your phone that night?", notes: 3, then: [
          { n: "Eunchae thought. She looked at the phone in her hand as if it might tell her." },
          { s: 'eunchae', f: 'neutral', t: "Under my pillow. It's always under my pillow. In all three of me. It was under my pillow when I woke up." },
          { n: "The monorail came in. Its doors opened with a sigh. Eunchae got on, and Solar got on after her, and neither of them said anything else about it, and Eunchae didn't take a single picture all the way home." }
        ] },
        { t: "(Take the phone. Look closer.)", notes: 3, then: [
          { n: "Solar took it and spread the picture with two fingers. The doorway's edge. The paper screen. Four girls asleep. And at the very bottom of the frame, blurred, so close to the lens it was nearly nothing, a pale curve that could have been the edge of a sleeve, or a cuff, or the white of a cotton glove." },
          { n: "She gave the phone back. Eunchae, watching her face, put it in her pocket instead of under her arm, and zipped the pocket, and kept her hand over it the whole way home." }
        ] }
      ] }
    ] }
  ]
});
