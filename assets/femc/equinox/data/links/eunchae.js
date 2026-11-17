/* Persona 3: Equinox · Hong Eunchae · 0 The Fool. Link data (femc-equinox-game.html). Format: link fields in
   assets/femc/game/core.js ("Links" header), scene lines in assets/femc/game/scene.js.
   Written: rank 1 (after 6/27: she came through on 6/26, story-act2 'eqx-stage'; her home is the Port Island Station
   concourse on Wednesday after school and weekend daytimes, so 6/27 itself, the Sunday they arrived, is possible: the
   scene is written to hold on any date). Ranks 4–10 still to write. Shape: the stub fields from
   assets/femc/equinox/data/links.js.
   Shared memory: the Runners epilogue (on a snowy campus tour she heard a girl singing in a hallway and stopped: Solar), the
   HOAX epilogue (Hanlim Unfiltered, the stream board she started because nobody talked to her at lunch and a camera gave her
   a reason to be somewhere), the strangers epilogue ("You're *the* Sol"; the youngest, all questions), the 6/26 atrium
   ("I was all of those tonight"). Concept 3 (Runners' future) is only ever teased: she asks Solar to sing; nothing is decided.
   The hook: her phone holds one camera roll with three lives in it, and one picture she didn't take.
   Reads: ifEvent eqx-last-grain (7/27 morning) for the last photo in her roll.
   Flags this file sets: eqx-eunchae-sang (Solar sings for her on the concourse).
   Written: ranks 1–3. Rank 2 '2: four seconds' (after 8/21, Sat, the concourse then an old station stairwell to a closed
   observation deck, a four-second echo): Jay's Wolmido tiger (story-act3 8/9) on a "tour", named Horangi-ssi (Solar can
   rename it Wolmi: eqx-eunchae-tiger-renamed); reads eqx-eunchae-sang; she sings (sets eqx-eunchae-sang), a duet
   (eqx-eunchae-duet) or Eunchae records the sound (eqx-eunchae-sang + eqx-eunchae-recording: two soft knocks after the
   four seconds on playback). Her supper photos since 7/27 (the table getting longer, Mrs. Oka a blur, her own saved seat);
   she wakes at 5:40 since the 5:41 photo (Solar can say call me: eqx-eunchae-541). Rank 3 '3: the seat' (after 10/3, Sun,
   the wet concourse): no pictures since 9/23; the last photo of the three mothers laughing at Seaside Park (with
   eqx-seams: "they don't look like this now"); Mr. Kim asked her to photograph the bridge shoes in the genkan; she can
   send the mothers' photo to Solar's red phone (eqx-eunchae-sent-mothers). Her ask ("stay together"; "a table where
   nobody saves my seat"): tally asks.eunchae yes (+cakes) / choose (+choose) / no ("be the first one at the table").
   Reads eqx-eunchae-tiger-renamed, eqx-persimmon (the guesthouse). Nothing reads the new flags yet. */
(window.FEMC_GAME_LINKS ||= []).push({
  id: 'eunchae', name: 'Hong Eunchae', short: 'Eunchae', arcana: 'Fool', numeral: '0', from: 'Runners · strangers · Hoax', kind: 'arrival',
  world: 'RSH', romance: null, arrives: '6/26', starts: '6/27', lodging: 'boarding',
  home: { area: 'portisland', spot: 'Central Concourse', slot: 'after', days: [0, 3, 6],
          hint: 'After school on Wednesdays, and in the daytime on weekends, on the concourse at Port Island Station, taking pictures of everything.' },
  cast: {},
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
    ] },
    { after: '8/21', title: '2: four seconds', place: 'Port Island Station · Central Concourse', time: 'Daytime', music: 'joy', scene: [
      { bg: 'station-concourse-busy' },
      { n: "The concourse in late August was the coolest place on Port Island and everybody knew it, so on a Saturday it was full of people who weren't going anywhere: students with textbooks they weren't reading spread on the benches under the departure board, a grandmother asleep upright beside a bag of leeks, two boys in soccer kit lying on the cool tiles by the lockers with their eyes shut like dogs. The doors to the plaza opened and shut and every time the heat leaned in and looked around and was pushed back out again." },
      { n: "Eunchae was on the steps up to the monorail platform, where they'd had the melon sodas in June. She had a tote bag on her knees, and sticking out of the top of the tote bag, at an angle, as if it were looking around the station with interest, was the head of a stuffed tiger." },
      { s: 'eunchae', f: 'happy', t: "Solar! Say hello. He's on a tour. He's never been to a station. He's from an amusement park, he's very sheltered." },
      { n: "It was the tiger Jay had won at Wolmido, at the ring toss, on the trip, in the last of the sunset with the Viking going up and down behind him; orange plush going a little bald at the ears already, glass eyes, a red felt tongue, a ribbon round its neck that said WOLMIDO in gold. Eunchae turned the tote so it faced Solar, and the tiger regarded her with its glass eyes and its tongue out." },
      { s: 'eunchae', f: 'neutral', t: "I've been taking him everywhere. The pier. The shrine. Chagall. He's been on the monorail four times. I take a picture of him at each place. It's a tour. When he's seen everything I'll make an album." },
      { s: 'eunchae', f: 'neutral', t: "I named him. Horangi-ssi. Because he's a tiger. I'm not very creative. Yunjin said it was like naming a dog *Dog*." },
      { n: "Something went down the back of Solar's neck, small and cold, a single drop of water from nowhere. She didn't know why. It was the word every child in Korea knew; it was the word in the bedtime story, the one all three of her mothers had told; it was a soft toy in a tote bag with its tongue out. The air conditioning was very strong. That was all." },
      { choose: [
        { t: "Call him something else. Wolmi. After where he's from.", notes: 3, flag: 'eqx-eunchae-tiger-renamed', then: [
          { s: 'eunchae', f: 'surprised', t: "...Wolmi. Oh. Oh, that's much better. That's a real name. That's a name with a hometown in it." },
          { n: "She lifted the tiger out of the tote and held it up to her face and told it, very seriously, that it was Wolmi now, and that Solar-unnie had named it, and that this was a great honor, and then put it back with its head out at the same angle. She didn't ask why. She looked at Solar for a second longer than she needed to, though, from the angle nobody else used, and then let it go." }
        ] },
        { t: "He's very handsome.", notes: 2, then: [
          { s: 'eunchae', f: 'happy', t: "He is! He knows it. He was the last one on the shelf. Jay-oppa said the ring toss was rigged and then he got it in on the first try and just stood there looking at his own hand." }
        ] },
        { t: "(Take a picture of the tiger. For the tour.)", notes: 2, then: [
          { n: "Solar held out her hand for the phone and Eunchae gave it to her with a small delighted gasp, and Solar crouched and took the tiger from below, against the curved glass roof and the clattering board, the way Eunchae had taken the board in June. It came out well. The tiger looked enormous in it. Eunchae looked at it and said *oh, he looks like he's in charge*, and kept it." }
        ] }
      ] },
      { s: 'eunchae', f: 'neutral', t: "But that's not why you're here. You're here because I promised." },
      { ifFlag: 'eqx-eunchae-sang', then: [
        { s: 'eunchae', f: 'neutral', t: "In June you sang. Here, on the steps. I have that. I still have it. I didn't take a picture and I still have it, which I didn't think would work, and it did." },
        { s: 'eunchae', f: 'flustered', t: "So I found somewhere better. To ask again. Because one is a thing that happened. Two is a thing that's true." }
      ], else: [
        { s: 'eunchae', f: 'neutral', t: "In June I said, I'm going to find the best somewhere in this whole city, and then I'm going to ask you again. You thought I was joking. Everyone thinks I'm joking." },
        { s: 'eunchae', f: 'happy', t: "I found it. I measured it. Come on. Bring the tiger." }
      ] },
      { place: 'Port Island Station · Old Stairwell', time: 'Daytime', bg: 'gekkoukan-stairwell', music: 'tender' },
      // BG: port-island-station-stairwell — an old concrete service stairwell inside a station building, painted pale green gone gray, a single caged light on a timer, a chained door at the top marked OBSERVATION DECK CLOSED, dust in a shaft of light from a high narrow window.
      { n: "It was behind a door by the lost property office that said STAFF ONLY in letters so faded they'd given up, a door that wasn't locked because, Eunchae said, the lock had been broken since before she was born in any of her lives. Behind it a concrete stairwell went up and up in square turns, painted a green that had gone the color of old soap, with a caged light on a timer at every landing and a chained door at the very top marked OBSERVATION DECK, and under that, on a newer sign, CLOSED." },
      { n: "It was cool in there. Cooler than the concourse. It smelled of dust and concrete and very faintly of the sea, through some gap somewhere, and their footsteps went up ahead of them and came back down, doubled, a fraction late." },
      { s: 'eunchae', f: 'neutral', t: "Listen. Stand here. On the fourth landing. Here's the best one, I tried them all." },
      { n: "She clapped once. The sound went up the shaft of the stairwell and hit something and came back, and hung, and went up again, softer, and came back, and hung, and went away, slowly, over what felt like a long time." },
      { s: 'eunchae', f: 'happy', t: "Four seconds. I timed it with my phone. Ten times. Four seconds every time. The concourse is one second. The shrine's nothing, it's all trees. The pier's nothing. This is four." },
      { s: 'eunchae', f: 'neutral', t: "Four seconds is a long time for a note to stay. That's long enough to hear it after you've stopped. That's the best somewhere." },
      { choose: [
        { t: "(Sing. Let the stairwell hold it.)", notes: 3, flag: 'eqx-eunchae-sang', then: [
          { n: "Solar sang. She didn't decide what; it came out of her the way things came out of her now, from whichever life was nearest the surface, a slow song in English with a long last note, and she let the last note go at the top, and stopped." },
          { n: "The stairwell kept it. It went up the square spiral of the stairs and came back, and hung, and went up, and the note she'd stopped singing went on without her for one second, two, three, four, thinning, a ghost of her own voice standing on the landing above them, and then it was gone, and the light on its timer clicked off, and they were standing in the dim with only the high window." },
          { n: "Eunchae didn't move. She was sitting on the step with the tote on her knees and both arms round it, the tiger's head under her chin, and she didn't move for a long time after the note had gone, as if she were listening for the fifth second." }
        ] },
        { t: "Sing with me. You start.", notes: 3, flag: 'eqx-eunchae-duet', then: [
          { s: 'eunchae', f: 'flustered', t: "Me? No. I can't. In all three of me I can't. In Songdo they put me at the back so I'd mouth it." },
          { s: 'solar', f: 'neutral', t: "Then mouth it. I'll do the sound." },
          { n: "Eunchae laughed, a high helpless squeak that the stairwell took and turned into four seconds of a much bigger laugh, which made her laugh harder, and then she started, very quietly, very flat, the chorus of a song everyone in Korea knew from a convenience-store speaker, and Solar came in under her and lifted it, and between them they made something the stairwell liked, it seemed; it kept every line of it, and handed each one back over the top of the next, so for a while there were four of them singing, two of them a fraction late." },
          { s: 'eunchae', f: 'happy', t: "...I sounded good. In the echo. The echo makes me sound good. I'm going to live in this stairwell." }
        ] },
        { t: "You can record it. Just the sound. If you want.", notes: 2, flag: ['eqx-eunchae-sang', 'eqx-eunchae-recording'], then: [
          { s: 'eunchae', f: 'surprised', t: "...Really? I said I wouldn't. In June. I said I wanted one thing that's not a picture." },
          { s: 'solar', f: 'neutral', t: "It's not a picture. It's four seconds." },
          { n: "So Eunchae set the phone on the step face up with the red dot going, and Solar sang, and let the last note go at the top, and the stairwell kept it, one, two, three, four, and then the light on its timer clicked off. Eunchae stopped the recording in the dim and played it back at once, with the phone held up between them, the speaker small and tinny." },
          { n: "The song. The last note. The stairwell holding it, one second, two, three, four, thinning out. And then, right at the end, after the four, so faint it was almost the hiss of the phone itself, two small sounds, evenly spaced. Soft. Polite. Like knuckles on wood." },
          { n: "Eunchae played it again. And again. The two sounds were there every time, after the four seconds, in the same place." },
          { s: 'eunchae', f: 'neutral', t: "...The building. It's an old building. It settles. Buildings settle. My Hanlim dorm settled all night, it was like living in a wooden ship." },
          { s: 'eunchae', f: 'neutral', t: "I'm not going to delete it. I'm just not going to play it again." },
          { n: "She didn't. She put the phone in her pocket and zipped the pocket. The tiger in the tote bag looked up the stairwell toward the chained door with its glass eyes, because that was the way its head was pointing." }
        ] }
      ] },
      { n: "They sat on the fourth landing in the dim for a while, with the high window putting one long bar of light down the stairs between them and the dust turning slowly in it, and Eunchae took her phone out again, not to record anything, just to hold it, the way some people held a cigarette." },
      { s: 'eunchae', f: 'neutral', t: "Can I show you what I do now? At supper. Since the twenty-seventh. Since him." },
      { n: "She scrolled. It was the long table. The same picture, every night, taken from the same place, the end by the kitchen door, the whole length of it: the bowls and the faces and the hanging lamp, Chaewon's raised hand, Sakura mid-word, Yunjin, when she'd come down the hill, at the end with the space beside her. A different night every picture. Twenty-four of them." },
      { s: 'eunchae', f: 'neutral', t: "Chaewon counts. She has her clicker. I take the table. Every night. So I'll know who was here. So if somebody isn't, I'll know which night they stopped being." },
      { n: "Solar watched the table get longer. That was the thing you saw if you scrolled fast, the way Eunchae did: the table getting longer. The old men from the pier at the far end, caps on, more of them each week. A woman from the flower shop. A man in a suit. Mrs. Arai in her good cardigan. Faces Solar half knew from the town, pulled up to the table in the pictures one by one like chairs. And Mrs. Oka in none of them. Or in all of them, as a white smear at the edge of the frame, a gloved hand setting something down, too fast for the shutter." },
      { s: 'eunchae', f: 'neutral', t: "And my place. Look. Every night. Saved." },
      { n: "She zoomed in. In every picture, halfway down the table on the left, between Kazuha and Sakura, there was an empty cushion with a bowl already on it, the chopsticks laid across the top. Her place. Taken from her place, so it was empty, so you could see it was kept." },
      { s: 'eunchae', f: 'happy', t: "I'm in none of them. I'm taking them. But you can see where I am. That's the best kind of picture of me, I think." },
      { choose: [
        { t: "Give me the phone. Let me take one with you in it.", notes: 3, then: [
          { s: 'eunchae', f: 'flustered', t: "In here? There's no table in here." },
          { n: "Solar took the phone anyway and held it out at arm's length and took the two of them on the landing in the bar of light, Eunchae with her mouth open mid-protest, the tiger's head between them. Eunchae looked at it and didn't say anything, and then set it, quietly, at the end of the row of suppers, so that it was the newest one: the only picture in the run with her in it." }
        ] },
        { t: "Don't you get tired? Every night.", notes: 2, then: [
          { s: 'eunchae', f: 'neutral', t: "No. Yes. I get tired the way Chaewon gets tired of counting. You don't stop because you're tired. You stop when the number's wrong." },
          { s: 'eunchae', f: 'neutral', t: "...I don't want to be the one who didn't take the picture the night somebody stopped. I took the last one of Nozomi-kun. I didn't know it was the last one. Now I know every one could be." }
        ] },
        { t: "(Look at the empty cushion. Say nothing.)", notes: 2, then: [
          { n: "Solar looked at it. The bowl on it. The chopsticks laid across the top. The same picture of a kept place twenty-four times, and the girl who kept it sitting beside her in a stairwell with a tiger in a bag. Eunchae followed her eyes and smiled, small, and put her thumb over the cushion on the screen, the whole of her thumb, the way she'd covered Nozomi's picture on the platform, and held it there." }
        ] }
      ] },
      { s: 'eunchae', f: 'neutral', t: "...I wake up at five-forty now. Every day. Since the photo. The one I didn't take. My body does it. Five-forty, eyes open." },
      { s: 'eunchae', f: 'neutral', t: "We sleep in one room now, all of us, with the light on and Chaewon's chair under the handle. So it can't be anyone. The door doesn't open. I know that." },
      { s: 'eunchae', f: 'neutral', t: "I lie there with my eyes shut until five forty-two. Two minutes. I don't look at the door. I'm too scared to look and too scared not to be awake for it." },
      { choose: [
        { t: "Next time, wake me. Call me. I'll stay on the phone till forty-two.", notes: 3, flag: 'eqx-eunchae-541', then: [
          { s: 'eunchae', f: 'surprised', t: "At five-forty? In the morning? You'll be asleep. You'll be so angry." },
          { s: 'solar', f: 'neutral', t: "I'm always up. Ask anyone." },
          { n: "Eunchae laughed, and the stairwell gave her four seconds of it back, and she put Solar's number at the top of her favorites, above her mother's from three lives, and said she wouldn't use it, and they both knew she would." }
        ] },
        { t: "Then don't look. You don't have to look.", notes: 2, then: [
          { s: 'eunchae', f: 'neutral', t: "That's what Chaewon says. Don't look, Chae-ya, it's just a time." },
          { s: 'eunchae', f: 'neutral', t: "...I'm a person who takes pictures of everything. I've never not looked at anything in my life. It's very hard work." }
        ] },
        { t: "Turn the alarm off. Sleep through it.", notes: 2, then: [
          { s: 'eunchae', f: 'sad', t: "There's no alarm. That's the thing. There was never an alarm." }
        ] }
      ] },
      { n: "The light on the landing's timer had gone off long ago. Eunchae stood up, and the tote bag swung, and the tiger's head knocked softly against the green wall, once, and she said *sorry* to the wall, the way she said sorry to commuters, and to the tiger, and then reached down for Solar's hand in the dim without looking for it, the way Yunjin held out a can, and found it." },
      { s: 'eunchae', f: 'neutral', t: "Next time I'll find somewhere with five seconds. I'm going to keep looking. Every time you sing it'll be somewhere it stays longer." },
      { n: "They went down. Behind them, at the top of the stairwell, the chained door to the closed observation deck stood shut in the dark the way it had for years, and if anything up there kept the echo of their footsteps on the stairs a little longer than four seconds, neither of them turned round on the landings to listen." }
    ] },
    { after: '10/3', title: '3: the seat', place: 'Port Island Station · Central Concourse', time: 'Daytime', music: 'tender', scene: [
      { bg: 'station-concourse-evening' },
      { n: "October had come in wet. The concourse floor was streaked with umbrella water and the cleaners went round and round it with their yellow signs and their mops, and the light through the curved glass roof was the flat gray of a sky that had decided on rain for the whole weekend and saw no reason to discuss it. People came in shaking their coats. The departure board clattered over everything, all the same, all the little white flaps turning." },
      { n: "Eunchae was on the monorail steps. Their steps. She wasn't lying on the floor and she wasn't photographing anything. She was sitting with her knees up and her phone zipped into the pocket of her raincoat and both hands over the pocket, and the tote bag on the step beside her with the tiger's head out of it, looking at the board, the way she should have been." },
      { ifFlag: 'eqx-eunchae-tiger-renamed', then: [
        { s: 'eunchae', f: 'neutral', t: "Hi. Wolmi says hi. He's finished the tour. He's seen everything. I didn't make the album." }
      ], else: [
        { s: 'eunchae', f: 'neutral', t: "Hi. Horangi-ssi says hi. He's finished the tour. He's seen everything. I didn't make the album." }
      ] },
      { s: 'eunchae', f: 'neutral', t: "I haven't taken a picture since the moon. Not one. Eleven days. I keep my hand on the pocket so it doesn't take one by itself." },
      { n: "Solar sat down beside her, a step up, so their shoulders were level. The step was cold through her jeans. The wet came in every time the plaza doors opened, a smell of rain on concrete and something under it, the bay, and every time it came in Eunchae's hands pressed a little harder on the pocket." },
      { s: 'eunchae', f: 'neutral', t: "I took a lot. That night. At the park. Before. I take everything, you know I do. The dango in pyramids. Oka-san's hundred dango. The grass in the vases. Everybody on the blankets in a row." },
      { s: 'eunchae', f: 'neutral', t: "And them. At the back. With the three men. Laughing." },
      { n: "She unzipped the pocket. Slowly. She took the phone out as if it were hot and didn't look at it, and found the picture without looking, by feel, the way you find a light switch in your own room in the dark, and held it out." },
      // CG: eqx-last-picture — a phone held out in a girl's hand on a station's stone steps, its screen showing a photo of three middle-aged women laughing together on a picnic blanket at dusk by the sea, a cream cardigan, a green hanbok, a sensible jacket, a huge orange moon just touching the horizon behind them.
      { n: "The three mothers at the back of the row of blankets, at Seaside Park, at a quarter to five, in the gold before the moon. Solji in her cream cardigan with her hair down and her head thrown back, laughing at something with her eyes shut. Miseon in the green hanbok, one hand up over her mouth the way she laughed when she thought laughing was rude, her eyes creased right up. Mrs. Kim in her flat shoes and her sensible jacket, mid-sentence, pointing at someone out of frame with a dango on a stick, her car keys a glint in her other fist." },
      { n: "Behind them the sea, flat and gold. And on the very edge of the sea, just touching it, an orange curve that was the top of the moon." },
      { s: 'eunchae', f: 'neutral', t: "That's the last one. Of them. Mrs. Kim was pointing at Mr. Kim. He'd sat on a tray of dango. Solji-ssi said, *let them have her for a bit*, after that. That's after. I didn't take that." },
      { s: 'eunchae', f: 'sad', t: "It's the last picture anybody took of them. And it's mine. Again. I took the last one of Nozomi-kun and he was saluting and I took the last one of them and they were laughing." },
      { s: 'eunchae', f: 'sad', t: "I don't want to be the one who takes the last picture anymore. I want to stop being that girl." },
      { ifEvent: 'eqx-seams', then: [
        { n: "She looked at it. She looked at it for a long time." },
        { s: 'eunchae', f: 'neutral', t: "...They came back. I know. I know they did. I saw them in the courtyard. I'm so glad I can't breathe sometimes." },
        { s: 'eunchae', f: 'sad', t: "But they don't look like this now. Nobody does. Solji-ssi doesn't throw her head back. So it's still the last one. Of this." }
      ] },
      { s: 'eunchae', f: 'neutral', t: "Will you take it? Can I send it to you? Your phone. The red one. I want it to be somewhere that isn't me." },
      { choose: [
        { t: "(Hold out the phone. Let her send it.)", notes: 3, flag: 'eqx-eunchae-sent-mothers', then: [
          { n: "Solar took the flip phone out of her coat, the dark red one she'd woken up holding, and opened it, and held it out on her palm. Eunchae sent the picture. It took a long time; the bar crawled; the phone was old and the picture was big and the concourse's signal came and went with the doors. Then the little envelope turned over on the red phone's screen and the picture was there, small, grainy, the mothers laughing in a square the size of a stamp." },
          { n: "Eunchae let out a breath that had been in her for eleven days. She put her own phone back in the pocket and zipped it and didn't put her hand over it." },
          { s: 'eunchae', f: 'neutral', t: "...There. It's yours too. Now there's two. Now I'm not the only one holding it." }
        ] },
        { t: "Keep it. Not because it's the last. Because it's a good picture.", notes: 2, then: [
          { s: 'eunchae', f: 'neutral', t: "...It is a good picture. It's the best one I took all summer. Look at Miseon-ssi's eyes." },
          { s: 'eunchae', f: 'sad', t: "I hate that it's the best one. I'm keeping it. I'm just not going to be okay about it." }
        ] },
        { t: "(Look at it a long time. Don't take it.)", notes: 3, then: [
          { n: "Solar looked at it. At three women she'd been the daughter of, laughing with each other at the back of a row of blankets, as if they'd known each other all their lives, which in a way they had, the same life, from three sides. At the moon on the edge of the sea behind them. She didn't take the phone. She closed Eunchae's fingers round it, round her own, and held them closed, and Eunchae let her." }
        ] }
      ] },
      { s: 'eunchae', f: 'neutral', t: "Mr. Kim asked me to take one. The day after. Your HOAX dad. He came and found me in the big room, in his fleece, with the shoebox. The empty one he carries." },
      { s: 'eunchae', f: 'neutral', t: "He said, you're the girl with the camera. Would you take one of the shoes. In the hall. So when she comes back she can see we kept them right. Nobody moved them. Nobody touched them." },
      { n: "She'd done it. She told it the way she told everything, all at once, and then slower. Kneeling on the cold stone of the genkan in her socks, with Mr. Kim standing behind her in the doorway so as not to be in the light. The heels, the embroidered slippers, the flat black shoes, toes to the door. He'd said *one more, from lower down, she likes things from lower down*, and she'd lain on the stone, and taken it from the floor, the way she took the board." },
      { s: 'eunchae', f: 'sad', t: "He looked at it on my screen for a long time and said thank you very much, very formally, and bowed to me. To me. Like I'd done something important. And then he went and sat on the step by them." },
      { s: 'eunchae', f: 'neutral', t: "I didn't send it to him. He doesn't have a phone here. He just wanted it to exist. I think that's the only picture I've taken that's for somebody coming back instead of somebody going." },
      { n: "A train came in below. The doors opened. Everybody who'd been waiting got on, and everybody who'd been on it got off, wet, shaking umbrellas, and for a minute the concourse was all motion and gray light, and Eunchae watched it with her chin on her knees, the way she had in June." },
      { s: 'eunchae', f: 'neutral', t: "In June I said, here I don't need the camera. I just like it. Because here somebody saves me a seat." },
      { s: 'eunchae', f: 'neutral', t: "At Hanlim I ate lunch on my own for a year and a half and started a whole stream board so I'd have something to point my face at. At Syracuse I'm a freshman with a nine a.m. and I eat a granola bar walking. In Songdo I'm the youngest and I follow Yunjin to the studio and nobody notices I came till I'm already there." },
      { s: 'eunchae', f: 'neutral', t: "Here there are five of us. Every meal. And the seat's saved before I get there." },
      { s: 'eunchae', f: 'sad', t: "And now there are empty places at the table that nobody saved. Three. And Nozomi-kun's with the folded cloth. And every time somebody new comes and sits at the end I think, which one are you, which night will you stop." },
      { n: "She turned on the step, toward Solar, and her knees knocked Solar's, and she didn't move them." },
      { s: 'eunchae', f: 'neutral', t: "Tell me we'll stay together. The five of us. Tell me I don't have to go back to a table where nobody saves my seat. I'll believe you. I believe everything you say, I've noticed. It's a problem." },
      { choose: [
        { t: "Stay. All five of you. Together. I'll save your seat myself, every night.", notes: 3, tally: { cakes: 1, 'asks.eunchae': 'yes' }, then: [
          { n: "Eunchae's face crumpled and came back, the way a face does when it's been given something it asked for and didn't think it'd get, and she put her forehead against Solar's shoulder, hard, and left it there." },
          { s: 'eunchae', f: 'sad', t: "...Okay. Okay. Every night. You said every night. I'm going to take a picture of it. Every night. The seat, with you next to it." },
          { s: 'eunchae', f: 'happy', t: "I'll start again. Taking pictures. Tonight. It's allowed now. It's for something good." },
          { n: "She unzipped the pocket and took the phone out and didn't put her hand over it, and turned it over in her fingers, and the tiger in the tote looked at the departure board with its glass eyes, and above them, on the board, a row of white flaps clattered over and over and over and came to rest, the way they always did, on something that hadn't changed." }
        ] },
        { t: "Whether you stay is yours to choose, Eunchae. But wherever you sit, I'll sit down next to you.", notes: 2, tally: { choose: 1, 'asks.eunchae': 'choose' }, then: [
          { s: 'eunchae', f: 'neutral', t: "...That's not what I asked." },
          { s: 'solar', f: 'neutral', t: "I know." },
          { n: "Eunchae looked at her from the angle nobody else used, for a long time, and Solar let her, and didn't do anything with her face, which was harder than doing something." },
          { s: 'eunchae', f: 'neutral', t: "Wherever I sit. Even if I go home. Even if it's a granola bar walking." },
          { s: 'eunchae', f: 'neutral', t: "...That's a terrible answer. It's a little terrible. I think I like it better than the one I asked for. I'm going to be annoyed about that for a while." }
        ] },
        { t: "I can't tell you that. But you can save a seat for someone. At home. Be the first one at the table.", notes: 2, tally: { 'asks.eunchae': 'no' }, then: [
          { s: 'eunchae', f: 'surprised', t: "...First? Me?" },
          { s: 'eunchae', f: 'neutral', t: "I've never been first. In any of me. I've never once been first to anything. I'm the one who comes after and stands in the door till somebody sees her." },
          { s: 'eunchae', f: 'sad', t: "That's a lot to ask of a person who just wanted you to say yes." },
          { n: "She didn't say anything else for a long time. Then she took the tiger out of the tote bag and sat it on the step between them, facing the board, as if it were the one waiting for the train, and kept one hand on its head." }
        ] }
      ] },
      { ifEvent: 'eqx-persimmon', then: [
        { n: "When the rain had eased, she told Solar, almost in passing, about the guesthouse: how the four of them had a room on the second floor now, with Cherry's lace doily on the kitchen-door glass downstairs and a window onto the street, and how on the first night Chaewon had counted them, and it had come out four, and right, and nobody had wanted to sleep anyway. How there was no long table. How she ate breakfast standing at the counter with Cherry, and it was fine. It was fine." }
      ] },
      { n: "When Solar stood to go, Eunchae stayed sitting. Then, as Solar reached the bottom of the steps, she called her name, and Solar turned, and Eunchae had the phone up, and it clicked." },
      { s: 'eunchae', f: 'flustered', t: "Sorry! Sorry. I said I'd stopped. That one doesn't count. That one's not the last of anything. It's the first one of after." },
      { n: "She didn't show Solar the picture. She put the phone in her pocket and zipped it, and this time she didn't keep her hand over it, and she lay down, on her back, on the cold wet step, and looked up at the departure board from underneath, the only angle nobody else used, with the tiger on her chest, while the commuters went round her like water round a rock and the board went on turning its little white flaps over, one after another, as if it had somewhere to be and all the time in the world to get there." }
    ] }
  ]
});
